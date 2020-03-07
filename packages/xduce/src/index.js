/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
/**
 * The central module for the transducer engine.
 *
 * All of the functions in this module deal directly with transducers. But
 * first, let's talk about the protocols that are going to be referred to
 * throughout many of the function discussions.
 *
 * ## Protocols
 *
 * One of the key selling points for transducers is that the same transducer can
 * be used on any type of collection. Rather than having to write a new `map`
 * function (for example) for every kind of collection - one for an array, one
 * for a string, one for an iterator, etc. - there is a single `map` transducer
 * that will work with all of them, and potentially with *any* kind of
 * collection. This is possible implementing *protocols* on the collections.
 *
 * A protocol in JavaScript is much like an interface in languages like Java and
 * C#. It is a commitment to providing a certain functionality under a certain
 * name. ES2015 has seen the introduction of an `iterator` protocol, for
 * example, and language support for it (the new `for...of` loop can work with
 * any object that correctly implements the `iterator` protocol).
 *
 * To support transduction, Xduce expects collections to implement four
 * protocols.
 *
 * - `iterator`: a function that returns an iterator (this one is built in to
 *   ES6 JavaScript)
 * - `transducer/init`: a function that returns a new, empty instance of the
 *   output collection
 * - `transducer/step`: a function that takes an accumulator (the result of the
 *   reduction so far) and the next input value, and then returns the
 *   accumulator with the next input value added to it
 * - `transducer/result`: a function that takes the reduced collection and
 *   returns the final output collection
 *
 * `iterator` is the built-in JavaScript protocol. When called, it is expected
 * to return an iterator over the implementing collection. This iterator is an
 * object that has a `next` function. Each call to `next` is expected to return
 * an object with `value` and `done` properties, which respectively hold the
 * next value of the iterator and a boolean to indicate whether the iteration
 * has reached its end. (This is a simplified explanation; see
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators|this MDN page}
 * for more detailed information.)
 *
 * `transducer/init` (referred to from now on as `init`) should be a function
 * that takes no parameters and returns a new, empty instance of the output
 * collection. This is the function that defines how to create a new collection
 * of the correct type.
 *
 * `transducer/step` (referred to from now on as `step`) should be a function
 * that takes two parameters. These parameters are the result of the reduction
 * so far (and so is a collection of the output type) and the next value from
 * the input collection. It must return the new reduction result, with the next
 * value incorporated into it. This is the function that defines how reduce a
 * value onto the collection.
 *
 * `transducer/result` (referred to from now on as `result`) should be a
 * function that takes one parameter, which is the fully reduced collection. It
 * should return the final output collection. This affords a chance to make any
 * last-minute adjustments to the reduced collection before returning it.
 *
 * Arrays, strings, and objects are all given support for all of these
 * protocols. Other collections will have to provide their own (though it should
 * be noted that since `iterator` is built-in, many third-party collections will
 * already implement this protocol). As an example, let's add transducer support
 * to a third-party collection, the `Immutable.List` collection from
 * {@link https://facebook.github.io/immutable-js/|immutable-js}.
 *
 * ```
 * Immutable.List.prototype[protocols.init] = () => Immutable.List().asMutable();
 * Immutable.List.prototype[protocols.step] = (acc, input) => acc.push(input);
 * Immutable.List.prototype[protocols.result] = (value) => value.asImmutable();
 * ```
 *
 * `Immutable.List` already implements `iterator`, so we don't have to do it
 * ourselves.
 *
 * The `init` function returns an empty mutable list. This is important for
 * immutable-js because its default lists are immutable, and immutable lists
 * mean that a new list has to be created with every reduction step. It would
 * work fine, but it's quite inefficient.
 *
 * The `step` function adds the next value to the already-created list.
 * `Immutable.List` provides a `push` function that works like an array's
 * `push`, except that it returns the new list with the value pushed onto it.
 * This is perfect for our `step` function.
 *
 * The `result` function converts the now-finished mutable list into an
 * immutable one, which is what's going to be expected if we're transducing
 * something into an `Immutable.List`. In most cases, `result` doesn't have to
 * do any work, but since we're creating an intermediate representation of our
 * collection type here, this lets us create the collection that we actually
 * want to output. (Without `result`, we would have to use immutable lists all
 * the way through, creating a new one with each `step` function, since we
 * wouldn't be able to make this converstion at the end.)
 *
 * With those protocols implemented on the prototype, `Immutable.List`
 * collections can now support any transduction we can offer.
 *
 * ### Protocols
 *
 * After talking a lot about protocols and showing how they're properties added
 * to an object, it's probably pretty obvious that there's been no mention of
 * what the actual names of those properties are. That's what
 * `{@link module:xduce.protocols|protocols}` is for.
 *
 * The best way to use these keys can be seen in the immutable-js example above.
 * Instead of worrying about the name of the key for the `init` protocol, the
 * value of `protocols.init` is used.
 *
 * `{@link module:xduce.protocols|protocols}` defines these protocol property
 * names.
 *
 * - `init`
 * - `step`
 * - `result`
 * - `reduced`: used internally to mark a collection as already reduced
 * - `value`: used internally to provide the actual value of a reduced
 *   collection
 *
 * The final two values don't have a lot of use outside the library unless
 * you're writing your own transducers.
 *
 * ## How Objects Are Treated
 *
 * Objects bear some thought because regularly, they aren't candidates for
 * iteration (and therefore for transduction in general). They don't have a very
 * straightforward idea of order, and they have *two* pieces of data (key and
 * value) for every element instead of one. Yet it's undeniable that at least
 * for most transformations, being able to apply them to objects would be quite
 * handy.
 *
 * For that reason, special support is provided end-to-end for objects.
 *
 * ### Object iteration
 *
 * Iterating over an object will produce one object per property of the original
 * object. An order is imposed; by default, this order the same as the ordering
 * of keys in post-ES6 Javascript:
 *
 * 1. Keys that are integers, in ascending numerical order
 * 2. All other string keys, in the order in which they were added to the object
 * 3. All symbol keys, in the order in which they were added to the object
 *
 * The `{@link module:xduce.iterator|iterator}` function can be passed a sorting
 * function that can sort keys in any other way.
 *
 * The result of the iteration, is a set of objects each with a single property,
 * one for each enumerable own property on the original object. The standard
 * ordering for objects (from ES6 onward) is as follows:
 *
 * ### Transforming objects
 *
 * While iterating over objects in this way is straightforward, the syntax of
 * objects makes it ugly to transform them in this form. Here's an example of a
 * transformation function that makes the object's keys upper-case and adds one
 * to each of the values:
 *
 * ```
 * function transform(obj) {
 *   const key = Object.keys(obj)[0];
 *   const value = obj[key];
 *   return { [key.toUpperCase()]: value + 1 };
 * }
 * ```
 *
 * A helper function named `{@link module:xduce.property|property}` can improve
 * this by handling the boilerplate.
 *
 * ```
 * function improvedTransform(obj) {
 *   const {k, v} = property(obj);
 *   return { [k.toUpperCase()]: v + 1 };
 * }
 * ```
 *
 * ### Reducing objects
 *
 * The built-in reducers (for arrays, objects, strings, and iterators)
 * understand these single-property objects and reduce them in the proper manner
 * without any further work.
 *
 * That's it for object-object reduction. Converting between objects and other
 * types is another matter.
 *
 * Every transducer function except for `{@link module:xduce.sequence|sequence}`
 * is capable of turning an object into a different type of collection, turning
 * a different type of collection into an object, or both. Objects are different
 * because they're the only "collections" that have two different pieces of data
 * per element. Because of this, we have to have a strategy on how to move from
 * one to another.
 *
 * Transducing an object into a different type is generally pretty easy. If an
 * object is converted into an array, for instance, the array elements will each
 * be single-property objects, one per property of the original object.
 *
 * Strings are a different story, since encoding a single-property object to a
 * string isn't possible (because every "element" of a string has to be a single
 * character). Strings that are produced from objects will instead just be the
 * object values, concatenated. Because objects are iterated in a particular
 * order, this conversion will always produce the same string, but except in
 * some very specific cases there really isn't a lot of use for this conversion.
 *
 * ```
 * const obj = {a: 1, b: 2};
 *
 * let result = asArray(obj);
 * // result = [{a: 1}, {b: 2}]
 *
 * result = asIterator(obj);
 * // result is an iterator with two values: {a: 1} and {b: 2}
 *
 * result = into(Immutable.List(), obj)
 * // result is an immutable list with two elements: {a: 1} and {b: 2}
 *
 * result = asString(obj);
 * // result is '12'
 * ```
 *
 * The opposite conversion depends on the values inside the collections. If
 * those values are objects, then the result is an object with all of the
 * objects combined (if more than one has the same key, the last one is the one
 * that's kept). Otherwise, keys are created for each of the elements, starting
 * with `0` and increasing from there.
 *
 * This means that converting an object to any non-string collection and back
 * produces the original object.
 *
 * ```
 * let result = asObject([{a: 1}, {b: 2}]);
 * // result = {a: 1, b: 2}
 *
 * result = asObject([1, 2, 3]);
 * // result = {0: 1, 1: 2, 2: 3}
 *
 * result = asObject('hello');
 * // result = {0: 'h', 1: 'e', 2: 'l', 3: 'l', 4: 'o'}
 * ```
 *
 * @module xduce
 */

export { protocols } from "modules/protocol";
export { iterator, property } from "modules/iteration";
export {
  complete,
  uncomplete,
  isCompleted,
  ensureCompleted,
  ensureUncompleted,
  reduce,
  toFunction,
  toReducer
} from "modules/reduction";

/**
 * A generic iterator. This conforms to the `iterator` protocol in that it has
 * a `{@link module:xduce.NextFunction|next}` function that produces
 * {@link module:xduce.NextValue|`iterator`-compatible objects}.
 *
 * @typedef {object} Iterator
 * @memberof module:xduce
 * @property {module:xduce.NextFunction} next A function that, when called,
 *     returns the next iterator value.
 */

/**
 * The function that satisfies the `iterator` protocol on an object. When
 * called, it returns the next value in the iterator.
 *
 * @callback NextFunction
 * @memberof module:xduce
 * @returns {module:xduce.NextValue} The next value in the iterator.
 */

/**
 * The object returned by a call to `{@link module:xduce.NextFunction|next}`.
 * It indicates whether the iterator is complete and, if not, what the next
 * value is.
 *
 * @typedef NextValue
 * @memberof module:xduce
 * @property {*} value The value that the iterator has provided.
 * @property {boolean} done Indicates whether the iterator has completed. If
 *     this is `true`, then `value` will be `undefined` and every subsequent
 *     call to `{@link module:xduce.NextFunction|next}` will continue to produce
 *     the same value. If it's `false`, then `value` represents the net value in
 *     the iterator, and the next call to
 *     `{@link module:xduce.NextFunction|next}` will continue to produce the
 *     next value.
 */

/**
 * A sort function for the keys of an object. This conforms to the normal sort
 * function used in `Array.prototype.sort`.
 *
 * @callback SortFunction
 * @memberof module:xduce
 * @property {*} a The first value to be sorted.
 * @property {*} b The second value to be sorted.
 * @returns {number} Either `-1` if `a > b`, `1` if `a < b`, or `0` if `a ===
 *     b`.
 */

/**
 * A function that can have an iterator created for it.
 *
 * @callback IterableFunction
 * @memberof module:xduce
 * @param {number} [index] The number of times that
 *     `{@link module:xduce.NextFunction|next}` has been called on the
 *     function's iterator. This will start at `0` for the first call to
 *     `{@link module:xduce.NextFunction|next}` and increase by one for each
 *     subsequent call.
 * @param {*} [last] The return value of the function the last time
 *     `{@link module:xduce.NextFunction|next}` was called on its iterator. For
 *     the first call, this is set to `undefined`.
 * @returns {*} The return value for that iteration.
 */

/**
 * An object representation of a single-property object, but using one property
 * for the key and one for the value. This format is easier to use in
 * transformation functions.
 *
 * @typedef PropertyObject
 * @memberof module:xduce
 * @property {(String|Symbol)} k The key of the single-property object that this
 *     object represents.
 * @property {*} v The value of the single-property object that this object
 *     represents.
 */

/**
 * An init function, which provides a new, empty instance of a collection.
 *
 * @callback InitFunction
 * @memberof module:xduce
 * @returns {*} A new, empty instance of a collection.
 */

/**
 * A step function, that reduces a collection and a new value to the
 * collection with the value added.
 *
 * @callback StepFunction
 * @memberof module:xduce
 * @param {*} acc An accumulated value to which the new value is being added.
 * @param {*} value The new value to be added to the accumulated value.
 * @returns {*} The accumulated value with the new value integrated into it.
 */

/**
 * A result function that optionally modifies the input collection and then
 * returns it. This is used at the end of a reduction to afford a last chance
 * for the transducer to modify the output value.
 *
 * @callback ResultFunction
 * @memberof module:xduce
 * @param {*} input The value to be modified before being output.
 * @returns {*} The modified value to be output by a transducer.
 */

/**
 * An object with all of the information necessary to reduce values into a
 * particular kind of collection. These are passed to
 * {@link module:xduce.reduce|reduce} and like functions.
 *
 * @typedef Reducer
 * @memberof module:xduce
 * @property {module:xduce.InitFunction} [Symbol.for("transducer/init")] The
 *     reducer's init function.
 * @property {module:xduce.StepFunction} Symbol.for("transducer/step") The
 *     reducer's step function.
 * @property {module:xduce.ResultFunction} Symbol.for("transducer/result") The
 *     reducer's result function.
 */
