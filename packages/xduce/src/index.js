/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

/**
 * A collection of transducers and the functions necessary to make them work.
 *
 * This module is where most of the practical, day-to-day functionality of
 * transducers reside. It depends on the {@link module:xdcore|xdcore} module,
 * but it shields the end user well from it. For most, this will be the only
 * module needed for using transducers. {@link module:xdcore|xdcore} is there
 * for advanced usage and for authoring of new transducers.
 *
 * There are three kinds of functions available in this module: transducers,
 * processing functions, and utilities.
 *
 * ## Transducers
 *
 * Transducers are, of course, the entire point behind this library (and behind
 * {@link module:xdcore|xdcore} as well). This is the module where the end
 * product transducers actually live, and on a basic level, they can be used
 * without using any other function in this module or in
 * {@link module:xdcore|xdcore}.
 *
 * Each of the transducers returns a
 * *{@link module:xdcore.TransducerFunction|transducer function}* when invoked.
 * On the technical side, this is a function that takes a transducer or reducer
 * object and whatever information is necessary for the particular transducer (a
 * mapping function for `{@link module:xduce.map|map}`, a number of elements to
 * keep for `{@link module:xduce.take|take}`, etc.) and returns a transducer
 * object for the current transducer chained to the one that was passed in. It
 * isn't necessary to know this to use transducer functions; all that's
 * necessary is to know that all of the processing functions take exactly this
 * transducer function as one of its arguments.
 *
 * Alternately, each transducer has a shortcut which is invoked if a collection
 * is passed to the transducer as the first argument. In this case, the
 * transducer creates its transducer function and passes it to an internal call
 * to `{@link module:xduce.sequence|sequence}`. As a result, this shortcut form
 * returns a collection on its own; no further function calls are required.
 *
 * ```
 * import { map, sequence } from "@chanko/xduce";
 *
 * // These two examples do exactly the same thing
 *
 * // Example 1: `map`, when given only a function, returns a transducer
 * // function that is accepted by `sequence`
 * const result1 = sequence([1, 2, 3, 4, 5], map(x => x + 1));
 *
 * // Example 2: `map`, when also given a collection, calls `sequence`
 * // internally and returns a collection itself
 * const result2 = map([1, 2, 3, 4, 5], x => x + 1);
 *
 * console.log(result1);  // -> [2, 3, 4, 5, 6]
 * console.log(result2);  // -> [2, 3, 4, 5, 6]
 * ```
 *
 * Note that this shortcut calls `{@link module:xduce.sequence|sequence}`
 * specifically and therefore has the same limitations. For example, it will
 * only return the same kind of collection as was passed in. If you wish to
 * return a different kind of collection, you must use the transducer to produce
 * a transducer function, which you can then pass to
 * `{@link module:xduce.into|into}`, `{@link module:xduce.transduce|transduce}`,
 * or any of the `asX` processing functions.
 *
 * ## Processing Functions
 *
 * The processing functions all (in one manner or another) take a transducer
 * function and a collection and return the transformed collection. They all
 * work by calling `{@link module:xdcore.reduce|reduce}` on the back end. What
 * differs is what inputs they take and what they do with them.
 *
 * The lowest level (and therefore most flexible) function in this group is
 * `{@link module:xduce.transduce|transduce}`. It's the only one that accepts a
 * reducer object in addition to the transducer function, and since any reducer
 * object at all can be passed to it, it can create any possible type of output.
 * It also optionally takes an initial collection value, in case the reducer
 * object doesn't have that information (if the reducer object came from using
 * `{@link module:xduce.toReducer|toReducer}` on a function, for instance).
 *
 * ```
 * import { transduce, toReducer, map } from "@chanko/xduce";
 *
 * const transducer = map(x => x + 1);
 * const reducer = toReducer((acc, value) => acc + value);
 * const init = "";
 * const result = transduce([1, 2, 3, 4, 5], transducer, reducer, init);
 * console.log(result);  // -> "23456"
 * ```
 *
 * The next step up the ladder is `{@link module:xduce.into|into}`. This
 * function will take a collection to reduce into rather than a reducer object
 * and an init object; the collection is expected to conform to the reducer
 * protocol and supply that information.
 *
 * ```
 * import { into, map } from "@chanko/xduce";
 *
 * const transducer = map(x => x + 1);
 * const result = into("", [1, 2, 3, 4, 5], transducer);
 * console.log(result);  // -> "23456"
 * ```
 *
 * Related to `{@link module:xduce.into|into}` are the four `asX` functions:
 * `{@link module:xduce.asArray|asArray}`,
 * `{@link module:xduce.asObject|asObject}`,
 * `{@link module:xduce.asString|asString}`, and
 * `{@link module:xduce.asIterator|asIterator}`. These all work the same as
 * `{@link module:xduce.into|into}` except that it isn't necessary to pass in an
 * output collection; the type of the output is taken from the name. (Note that
 * `{@link module:xduce.asIterator|asIterator}` will produce an iterator while
 * `{@link module:xduce.into|into}` cannot.) These are good shortcuts for
 * commonly used output collections; any other types of output collections will
 * have to use one of the other processing functions.
 *
 * ```
 * import { asString, map } from "@chanko/xduce";
 *
 * const transducer = map(x => x + 1);
 * const result = asString([1, 2, 3, 4, 5], transducer);
 * console.log(result);  // -> "23456"
 * ```
 *
 * Finally, there is `{@link module:xduce.sequence|sequence}` at the highest
 * level. This function takes neither an output collection nor a reducer object;
 * it gets all of the information it needs from the input collection itself,
 * which must implement both the iterable and the reducer protocols. This also
 * means that, while it is the easiest processing function to use, it cannot
 * transform one type of collection into another type.
 *
 * ```
 * import { sequence, map } from "@chanko/xduce";
 *
 * const transducer = map(x => x + 1);
 * const result = sequence([1, 2, 3, 4, 5], transducer);
 * console.log(result);  // -> [2, 3, 4, 5, 6]
 * ```
 *
 * A good way to observe the difference between all of these functions is to see
 * what requirements need to be satisfied by their parameters. The following
 * table shows which protocols must be implemented by the input and target
 * collections for each processing function (key: `T` is the iterable protocol,
 * `I`, `S`, and `F` are the reducer protocols `init`, `step`, and `final`,
 * respectively).
 *
 * | Function                                     | Input  | Target |
 * | -------------------------------------------- | :----: | ------ |
 * | `{@link module:xduce.transduce|transduce}`   | T      | `reducer`: [I]SF; `init`: [I] * |
 * | `{@link module:xduce.into|into}`             | T      | ISF |
 * | `{@link module:xduce.asArray|asArray}`       | T      | n/a (ISF is implicit) |
 * | `{@link module:xduce.asObject|asObject}`     | T      | n/a (ISF is implicit) |
 * | `{@link module:xduce.asString|asString}`     | T      | n/a (ISF is implicit) |
 * | `{@link module:xduce.asIterator|asIterator}` | T      | n/a (ISF is implicit) |
 * | `{@link module:xduce.sequence|sequence}`     | TISF   | n/a |
 * \* An initial collection value must be provided to `transduce`; if the
 *   `reducer` parameter doesn't implement the `init` reducer protocol, then the
 *   `init` parameter must be present.
 *
 * Arrays and strings already implement the iterable protocol. However, objects
 * do not, and of course nothing implements the reducer protocols by default
 * since they're a feature of Chanko. However, there is plenty of special
 * support built in. Objects and functions are given special support for
 * iteration, which is detailed in the documentation for
 * `{@link module:xdcore.iterator|iterator}`. Arrays, strings and objects are
 * also supported for reducing, so they don't need to implement any of the
 * reduction protocols. Because of this, arrays, objects, and strings can be
 * used as input or target collections for any of the processing functions in
 * this module.
 *
 * Other types of collections have to have the reducer protocol methods added to
 * them; see the "Protocols" section of the {@link module:xdcore|xdcore}
 * documentation for how that's done. If the collection doesn't implement the
 * iterable protocol, then they also have to have that added to them, but this
 * is seldom an issue. The iterable protocol is a part of JavaScript itself and
 * most third-party collections already include implementations.
 *
 * ## Utilities
 *
 * Transducers and their processing functions are pretty easy to use, but there
 * are a couple of things that can be done to make them easier yet. This module
 * includes a few utility functions to help.
 *
 * One of the primary selling points of transducers is their composibility, but
 * there hasn't been an example of anything more than a single transducer so
 * far. This is largely because composing them requires a lot of low-level work
 * to make each protocol function do its work and *then* call the protocol
 * function of the next transducer in line.
 *
 * Fortunately there is a utility function to do this for you,
 * `{@link module:xduce.compose|compose}`. It takes any number of transducer
 * functions (i.e., the same functions that all of the transducers return, and
 * the same functions that all of the processing functions take as artuments)
 * and returns a single transducer function that does all of the things that all
 * of the input functions do.
 *
 * ```
 * import { map, filter, take, compose, sequence } from "@chanko/xduce";
 *
 * const mapper = map(x => x + 1);
 * const filterer = filter(x => x > 2);
 * const taker = take(3);
 * const transducer = compose(mapper, filterer, taker);
 * const result = sequence([1, 2, 3, 4, 5], transducer);
 * console.log(result);  // -> [3, 4, 5]
 * ```
 *
 * Here, `transducer` does all of the things to the input collection that
 * `mapper`, `filterer`, and `taker` do: it adds one to the elements, filters
 * out any that are less than or equal to 2, and then limits the output
 * collection to its first three elements.
 *
 * Another potential sore spot in dealing with transducers is working with
 * objects. While objects in JavaScript are not iterable, support is added in
 * Chanko to make them work as though they are. When you iterate over an object,
 * you get a series of objects that each have exactly one property, one for each
 * property in the original object. The bad part about this is that it's not
 * always natural to write transformation functions around a data structure in
 * that format.
 *
 * ```
 * import { map, sequence } from "@chanko/xduce";
 *
 * const transducer = map(x => {
 *   const k = Object.keys(x)[0];
 *   return { [k.toUpperCase()]: x[k] + 1 };
 * });
 * const result sequence({ a: 1, b: 2, c: 3 }, transducer);
 * console.log(result);  // -> { A: 2, B: 3, C: 4 }
 * ```
 *
 * This works fine, but it's pretty opaque. The fact that the key and value need
 * to be extracted from that single-property object makes the process inelegant.
 *
 * Enter `{@link module:xduce.kv|kv}` and its related functions,
 * `{@link module:xduce.key|key}` and `{@link module:xduce.value|value}`.
 * `{@link module:xduce.kv|kv}` takes an object and returns a new one with two
 * keys: `k` and `v` (hence the function name). The values of these two keys
 * are, in turn, the key and value of the first property (the only property, if
 * a single-property object was passed in) of the input object. It's easier to
 * extract properties from an object when they're in this form, so the example
 * above looks like this instead.
 *
 * ```
 * import { map, sequence, kv } from "@chanko/xduce";
 *
 * const transducer = map(x => {
 *   const { k, v } = kv(x);
 *   return { [k.toUpperCase()]: v + 1 };
 * });
 * const result sequence({ a: 1, b: 2, c: 3 }, transducer);
 * console.log(result);  // -> { A: 2, B: 3, C: 4 }
 * ```
 *
 * `{@link module:xduce.key|key}` and `{@link module:xduce.value|value}` work in
 * a similar manner, but they only return the key or the value of the first
 * property rather than both.
 *
 * And finally, we have `{@link module:xduce.complement|complement}`. This
 * function doesn't really have anything to do with transducers at all, but it
 * does help to solve a fairly common case with them, which is when you have a
 * function that does exactly the *opposite* of what you need done. This is
 * useful for transducers that take predicate functions (functions which return
 * either `true` or `false`), like `{@link module:xduce.filter|filter}` or
 * `{@link module:xduce.takeWhile|takeWhile}`.
 *
 * ```
 * import { sequence, filter, complement } from "@chanko/xduce";
 *
 * const input = [1, 2, 3, 4, 5];
 * const isEven = x => x % 2 === 0;
 *
 * const evenTransducer = filter(isEven);
 * const oddTransducer = filter(complement(isEven));
 *
 * const evens = sequence(input, evenTransducer);
 * const odds = sequence(input, oddTransducer);
 *
 * console.log(evens);  // -> [2, 4]
 * console.log(odds);   // -> [1, 3, 5]
 * ```
 *
 * @module xduce
 */

export { kv, key, value, complement } from "modules/utils";
export {
  transduce,
  sequence,
  into,
  asArray,
  asObject,
  asString,
  asIterator,
  compose,
  toReducer,
  toFunction
} from "modules/transduction";
export { identity, flatten, repeat } from "modules/basic";
export { chunk, chunkBy } from "modules/chunk";
export { distinct, distinctBy, distinctWith } from "modules/distinct";
export { drop, dropWhile } from "modules/drop";
export { filter, reject } from "modules/filter";
export { map, flatMap } from "modules/map";
export { take, takeWhile, takeNth } from "modules/take";
export { unique, uniqueBy, uniqueWith } from "modules/unique";

/**
 * A collection that fully supports the iterable and reducer protocols. Any
 * value that supports all four can be used by
 * `{@link module:xduce.sequence|sequence}`; those that do not support all four
 * will have to be used with lower-level functions where some of the protocols
 * aren't necessary because the values they would provide are explicitly passed.
 *
 * @typedef Collection
 * @memberof module:xduce
 * @property {external:Iterator} Symbol.iterator An iterator, according to the
 *     JavaScript standard, that provides a `next()` function that can be called
 *     repeatedly.
 * @property {module:xdcore.InitFunction} Symbol.for("reducer/init") A function
 *     that can create a new, empty copy of the collection.
 * @property {module:xdcore.StepFunction} Symbol.for("reducer/step") A function
 *     that can accept a collection and a new element to be added to it and
 *     return the collection with the new element incorporated.
 * @property {module:xdcore.FinalFunction} Symbol.for("reducer/final") A
 *     function that accepts a collection and returns the same collection with
 *     any final modifications that might be necessary for it.
 */

/**
 * An object reporesenting a single property on another object. One of these
 * objects will have two keys: `k`, which represents the key of one of the
 * other project's properties, and `v`, which represents the value. This is the
 * format output by convenience functions that make it easier to work with
 * objects in transducers.
 *
 * @typedef PropertyObject
 * @memberof module:xduce
 * @property {(string|Symbol)} k The key of the property represented by this
 *     object.
 * @property {*} v The value of the property represented by this object.
 */

/**
 * A function which takes some number of arguments and returns `true` or `false`
 * when applied to those arguments depending on the rules that the function
 * implements.
 *
 * @callback PredicateFunction
 * @memberof module:xduce
 * @param {...*} args The arguments passed to the function. The number and
 *     types of these arguments vary depending on what the function is doing.
 * @returns {boolean} Either `true` or `false` depending on whether the
 *     arguments pass whatever test the function is specifying.
 */
