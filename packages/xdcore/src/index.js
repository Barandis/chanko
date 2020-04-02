/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

/**
 * The core engine for transducers. This consists primarily of reduction support
 * for chains of transducers but also supplies protocol definitions and utility
 * functions for writing new transducers.
 *
 * The general idea is that if you need to use a transducer, you can avoid
 * importing this library and work with the {@link module:xduce|xduce} module
 * instead (which internally depends on this module). If you want to write a new
 * transducer or control low-level access to the reduction engine, then you need
 * to use this library. (There is a small number of functions that are useful
 * for both, and {@link module:xduce|xduce} re-exports them from here so they
 * can be used from either module.)
 *
 * This module provides four basic services:
 *
 * 1. Reduction of transducer chains
 * 2. Protocol definition
 * 3. Iteration support
 * 4. Authoring utilities
 *
 * What follows is a short diuscussion of each.
 *
 * ## Reduction
 *
 * All transforming functions, whether methods of `Array` or third party tools
 * such as Lodash, perform reduction in order to build up a new collection out
 * of the elements that they've transformed/filtered, etc.
 *
 * Transducers are no different in that regard, but the manner in which they do
 * their reduction is what sets them apart.
 *
 * Using `Array.prototype.map` as an example, the user of the function provides
 * a transformation function. The `map` function iterates over the input array,
 * passes the elements through the provided transformation function, and then
 * reduces the results into a new array. If `map` is chained to another
 * function, like `Array.prototype.filter`, the process needs to be repeated:
 * iterate again, filter via a user-provided function, and reduce again.
 *
 * Transducers are different. When using a transducer, rather than a
 * manipulation function being provided as in `map` or `filter`, a *reducer
 * object* is used. (It's an object rather than a function because it has
 * multiple functions, each implemented as properties of the reducer object.)
 * This means that the user provides instructions for both transformation *and*
 * reduction, rather than the collection function itself being responsible for
 * doing the reduction on its own.
 *
 * This has two very beneficial effects. First, if a user wants to filter and
 * then map the elements of a collection, the transducer does not have to reduce
 * the filtered elements into a collection just to have the map part tear them
 * apart again and re-reduce them later. The filter part of the transducer can
 * pass its elements one at a time to the map part, and reduction can happen
 * only at the end after the elements have been both filtered *and* mapped.
 *
 * Secondly, since the user is providing the reduction instructions along with
 * the transformation instructions, the type of collection that gets reduced
 * into does not have to be the same type as the input collection. You could
 * process characters in a string and have it output as an array. Or process the
 * values in an iterator and get a plain object as output.
 *
 * Practically speaking, most of the reducer object creation is abstracted away,
 * so using transducers is no more difficult than just using
 * `Array.prototype.map`. The `{@link module:xdcore.reduce|reduce}` function
 * provided by this library is low level, though, and does not do any of that
 * abstracting on its own. The functions from the {@link module:xduce|xduce}
 * module, namely `{@link module:xduce.transduce|transduce}`,
 * `{@link module:xduce.into|into}`, and
 * `{@link module:xduce.sequence|sequence}`, take care of that abstraction so
 * `{@link module:xdcore.reduce|reduce}` can just handle actual reduction.
 *
 * ## Protocols
 *
 * In ES2015, the idea of protocols was added to JavaScript. This was done at
 * the beginning to provide language-level support for the new `for...of` loop.
 * As long as a value supported the iterable protocol by having a property named
 * `Symbol.iterator` that returns an iterator for that value when it's called,
 * then it automatically qualified to be used in `for...of`.
 *
 * This module uses that iterable module in the same way to understand how to
 * break collections apart, but it also uses protocols to let collections inform
 * the engine how to reduce a collection of that type back together again. Since
 * there are no standard protocols for reduction the way there are for
 * iteration, this module provides custom protocols of its own. These are also
 * symbols used as names for properties, but they are stored in an object called
 * `{@link module:xdcore.protocols|protocols}` to be looked up by string key:
 *
 * * `protocols.init`
 * * `protocols.step`
 * * `protocols.final`
 * * `protocols.completed`
 * * `protocols.value`
 *
 * The last two (`completed` and `value`) are used internally for keeping track
 * of the reduction status of a value and shouldn't need to be used externally.
 * The first three, however, are how the engine knows how to reduce to a certain
 * collection type.
 *
 * `init` is a function that returns a new, empty version of that collection to
 * be built upon. `step` is a function that gets passed a collection of that
 * type plus a new value to be added to it, and returns the collection with that
 * value added to it (i.e., it's a standard reduction function). `final` is a
 * function that gets passed the fully reduced new collection and returns what
 * the final output should be, giving the engine one last chance to modify the
 * final value (this *normally* just returns its argument unmodified). If these
 * three properties are added to an object, then this module will recognize that
 * object as reducible and be able to create and fill one.
 *
 * As an example, let's add support for transduction to the `List` collection
 * from [immutable.js][1].
 *
 * ```
 * import { protocols as p } from "@chanko/xdcore";
 * import { List } from "immutable";
 *
 * List.prototype[p.init] = () => List().asMutable();
 * List.prototype[p.step] = (acc, value) => acc.push(value);
 * List.prototype[p.final] = value => value.asImmutable();
 * ```
 *
 * The `init` function here returns a new, empty list. The `step` function
 * describes how to add a value to that list (through the `push` method). The
 * `final` function runs at the very end to determine the end value. In the case
 * of this immutable list, the `init` function actually returns a mutable list
 * that we can add to with `step`, and then `final` turns that into an immutable
 * list to be returned. This is a textbook use of `final`; most of the time,
 * `final` will simply return the value that's passed to it, unchanged.
 *
 * With these lines of code in place, adding the protocol functions to `List`'s
 * prototype, reduction will just work.
 *
 * It is not necessary to provide these functions for native arrays, strings,
 * plain objects, or iterators, as support for them is built in.
 *
 * ## Iterators
 *
 * As mentioned above, there is a built-in protocol for iteration in JavaScript
 * since ES2015, and this module does recognize and use that protocol. (Because
 * this is a built-in protocol, even many third-party libraries take advantage
 * of it; we did not have to add the iterable protocol to the immutable `List`
 * above because immutable.js already adds it.)
 *
 * Iteratable protocol support works out of the box for any type that implements
 * it. However, there is also support built into this module for two types that
 * do not support the protocol: plain objects and functions.
 *
 * The values that come out of the iterator for plain objects are themselves
 * objects, but they're objects of only one property each, one for each property
 * in the original object. For example:
 *
 * ```
 * import { iterator } from "@chanko/xdcore";
 *
 * const obj = { c: 1, a: 2, b: 3 };
 * const iter = iterator(obj);
 * console.log(iter.next().value);   // -> { c: 1 }
 * console.log(iter.next().value);   // -> { a: 2 }
 * console.log(iter.next().value);   // -> { b: 3 }
 * console.log(iter.next().done);    // -> true
 * ```
 *
 * The ordering is the same as ordering from `Object.keys()` and the like:
 *
 * 1. String keys that are integer indices in ascending numerical order
 * 2. All other string keys in the order in which they were added to the object
 * 3. All symbol keys in the order in which they were added to the object
 *
 * Iteration support for functions happens by invoking the function for each
 * iteration and using the return value for the value of the iterator at that
 * point. Two values are fed into the function: the index of the iteration
 * (starting at 0 for the first iteration and increasing by one for each
 * subsequent iteration) and the function's return value from the previous
 * iteration (starting as `undefined` for the first iteration). The function is
 * free to use or ignore these values as it likes; all that is important is that
 * it returns a value.
 *
 * ```
 * import { iterator } from "@chanko/xdcore";
 *
 * const fn = (index, last = 1) => last * (index + 1);
 * const iter = iterator(fn);
 * console.log(iter.next().value);   // -> 1
 * console.log(iter.next().value);   // -> 2
 * console.log(iter.next().value);   // -> 6
 * console.log(iter.next().value);   // -> 24
 * console.log(iter.next().value);   // -> 120
 * ```
 *
 * This effectively calculates the factorial of `(index + 1)`. As in this
 * example, iterators created from functions can be infinite; if the function
 * returns `undefined` it'll terminate the iterator immediately.
 *
 * ## Authoring
 *
 * The tools from this module are used by the {@link module:xduce|xduce} module
 * to build its transducers, and all of those same tools are available for
 * custom transducers as well.
 *
 * In brief, a transducer works by having *transducer objects* which are formed
 * into a chain, one for each transformation. At the end of the chain is a
 * *reducer object* which describes how to create a new collection from the
 * elements that the transducer objects modified. Elements are pulled one at a
 * time through that chain, being modified, filtered out, etc. every step of the
 * way until the reducer at the end adds it into the target collection.
 *
 * Visually, a transducer that maps element values, filters them, and outputs an
 * array containing those elements would look like this:
 *
 * ```
 * +---------------+    +---------------+    +---------------+
 * |  map xducer   | -> | filter xducer | -> | array reducer |
 * +---------------+    +---------------+    +---------------+
 * ```
 *
 * There is always one reducer object at the end and an arbitrary number of
 * transducer objects before it.
 *
 * Transducer and reducer objects are structurally identical. They both are
 * required to have the three reduction protocol methods (`init`, `step`, and
 * `final`). Their difference is in their purpose.
 *
 * A reducer object is responsible for providing an initial collection (`init`),
 * adding elements one by one to that collection (`step`), and finalizing the
 * result (`final`). It is self-contained and its protocol methods don't
 * typically need to call any other reducer objects. Since it is the last object
 * in the chain, it's possible for a chain to consist of *only* a reducer (this
 * is useful for turning one kind of collection into another without changing
 * any of the elements).
 *
 * A transducer object is responsible for two things: manipulating data, and
 * then passing that data along to the next object in the chain. For that
 * reason, the `init` and `final` methods typically simply call the same method
 * on the next object and return its value (i.e., they do nothing themselves).
 * The `step` method is where the work happens, and when that work is done, it's
 * sent to the next object by calling *its* `step` method. A transducer object
 * cannot make a chain by itself; it always requires a reducer object to
 * actually put the manipulated data back together.
 *
 * The reason that a transducer object needs these protocol methods even if they
 * only call the next one is because a transducer object should not need to know
 * whether the next object in the chain is a transducer object or a reducer
 * object. All it needs to know is that there will be an object with the three
 * reduction protocol methods that it can call. (There are also edge cases where
 * a transducer object may do more with an `init` or `final` method, but those
 * are fairly rare.)
 *
 * Here is an example of transducer definitions, using the same two transducer
 * objects as in the above diagram. It defines two *transducer functions*, which
 * are functions that take a transducer or reducer object (which is the next
 * object in the chain) and return its own transducer object already chained to
 * that next object.
 *
 * ```
 * import { protocols as p } from "@chanko/xdcore";
 *
 * function mapTransducer(fn, next) {
 *   return {
 *     [p.init]: () => next[p.init](),
 *     [p.step]: (acc, value) => next[p.step](acc, fn(value)),
 *     [p.final]: value => next[p.final](value),
 *   };
 * }
 *
 * function filterTransducer(fn, next) {
 *   return {
 *     [p.init]: () => next[p.init](),
 *     [p.step]: (acc, value) => fn(value) ? next[p.step](acc, value) : acc,
 *     [p.final]: value => next[p.final](value),
 *   };
 * }
 * ```
 *
 * As expected, the `init` and `final` methods in both transducer objects simply
 * call the same functions in the next object, while the `step` function does
 * the actual work, either passing each value through the mapping function in
 * `mapTransducer` or deciding whether to add it to the collection at all in
 * `filterTransducer`.
 *
 * Since it *is* so common to create transducer objects whose `init` and `final`
 * methods simply chain to the next object, there is a helper function to make
 * transducer object creation easier. The same two transducer functions from
 * above can be written like this.
 *
 * ```
 * import { protocols as p, toTransducer } from "@chanko/xdcore";
 *
 * function mapTransducer(fn, next) {
 *   const step = (acc, value) => next[p.step](acc, fn(value));
 *   return toTransducer(step, next);
 * }
 *
 * function filterTransducer(fn, next) {
 *   const step = (acc, value) => fn(value) ? next[p.step](acc, value) : acc;
 *   return toTransducer(step, next);
 * }
 * ```
 *
 * `{@link module:xdcore.toTransducer|toTransducer}` takes a step function and
 * the next object and takes care of the `init` and `final` methods for you.
 *
 * If you plan to write your transducers to work with high-level
 * {@link module:xduce|xduce} functions like
 * `{@link module:xduce.sequence|sequence}` or
 * `{@link module:xduce.transduce|transduce}`, then this is enough. You don't
 * need to go any further. However, this is not enough for the
 * `{@link module:xdcore.reduce|reduce}` function, which expects a *reducer*
 * object, not a transducer object. (`{@link module:xduce.transduce|transduce}`
 * also expects a reducer object, but that's *in addition to* a transducer
 * object and not in place of one.) `{@link module:xdcore.reduce|reduce}`
 * doesn't care if that reducer object has other transducer objects chained to
 * it; it only cares that the whole object acts like a reducer, which it will
 * use to build a new collection.
 *
 * There is a similar function for reducer objects, called
 * `{@link module:xdcore.toReducer|toReducer}`. It takes a *reducible object*
 * and returns a reducer object for it. A reducible object is any object that
 * has the three reducer protocol functions on it to describe how a new
 * collection of its type is made; in the immutable list example above, after
 * you add the protocol methods to it, `List` is a reducible object. Arrays,
 * strings, functions, and plain objects are also reducible objects by virtue of
 * specific support built into `{@link module:xdcore.toReducer|toReducer}`.
 *
 * With these two simple functions, we can pretty easily use
 * `{@link module:xdcore.reduce|reduce}` directly to perform the transduction
 * diagrammed above.
 *
 * ```
 * import { toReducer, reduce } from "@chanko/xdcore";
 *
 * const isEven = x => x % 2 === 0;
 * const addOne = x => x + 1;
 *
 * let reducer = toReducer([]);
 * reducer = filterTransducer(isEven, reducer);
 * reducer = mapTransducer(addOne, reducer);
 *
 * const r = reduce([1, 2, 3, 4, 5], reducer, []);
 * console.log(r);   // -> [2, 4, 6]
 * ```
 *
 * There are some important points to notice about this example.
 *
 * 1. The transducer chain is built backwards, starting from the reducer and
 *    adding the transducers in reverse order. This makes sense, as each
 *    transducer function requires a reference to the following
 *    transducer/reducer object when it's called.
 * 2. This creates an array, but since
 *    `{@link module:xdcore.toReducer|toReducer}` can create a reducer object
 *    from any reducible object, we could have passed `List` to it (after adding
 *    the three protocol properties as in the earlier immutable list example)
 *    and `{@link module:xdcore.reduce|reduce}` would return an immutable list
 *    instead. (Sort of...`{@link module:xdcore.reduce|reduce}` actually only
 *    deals with `step` and `final` protocol methods because internally, it
 *    sometimes works with reducer objects that don't have an `init` protocol
 *    method, like ones created from functions. This is why
 *    `{@link module:xdcore.reduce|reduce}` takes a third parameter, called
 *    `init`. So for this to work properly with an immutable list, you would
 *    also have to pass `List().asMutable()` as the third parameter, in place of
 *    `[]` in the example code. This is not something you have to worry about
 *    with higher-level functions in the {@link module:xduce|xduce} module.)
 * 3. This is all more easily done using the {@link module:xduce|xduce} module,
 *    which handles much of this work for you. This example just shows how you
 *    can build your own transducer objects, chain them together, and use
 *    `{@link module:xdcore.reduce|reduce}` to process them.
 *
 * Here is what it would look like with the {@link module:xduce|xduce} module.
 *
 * ```
 * import { map, filter, sequence, compose } from "@chanko/xduce";
 *
 * const isEven = x => x % 2 === 0;
 * const addOne = x => x + 1;
 *
 * const r = sequence([1, 2, 3, 4, 5], compose(map(addOne), filter(isEven)));
 * console.log(r);   // -> [2, 4, 6]
 * ```
 *
 * More details are available in the documentation for the
 * {@link module:xduce|xduce} module, but basically
 * `{@link module:xduce.compose|compose}` chains transducer objects together,
 * while `{@link module:xduce.sequence|sequence}` figures out what initial
 * collection and what reducer object to use (from the input collection), chains
 * the transducer objects to the reducer object, and passes all of the relevant
 * information to `{@link module:xdcore.reduce|reduce}`.
 *
 * `{@link module:xdcore.reduce|reduce}` works in a simple way, but there is one
 * bit of special functionality that's relevant to writing transducers. If it
 * processes an element and the value returned by the reducer/transducer chain
 * is a *completed value*, it will cease the reduction right there even if there
 * are more elements in the input collection. A completed value is a value that
 * is wrapped in an object using the other two reducer protocol properties,
 * `completed` and `value`:
 *
 * ```
 * import { protocols as p } from "@chanko/xdcore";
 *
 * // A regular value
 * const value = 1729;
 *
 * // A completed version of that same value
 * const completed = {
 *   [p.completed]: true,
 *   [p.value]: 1729,
 * };
 * ```
 *
 * The reason for the long-windedness of using a wrapper is so that a completed
 * value can be completed again, making it double-wrapped. This is occasionally
 * useful in writing more complex transducers, and it is simplest to achieve
 * with a wrapper.
 *
 * A good example of the use of a completed value is the
 * `{@link module:xduce.take|take}` transducer, which returns a certain number
 * of elements and then returns no more. Here's how it would look using
 * {@link module:xduce|xduce}:
 *
 * ```
 * import { take } from "@chanko/xduce";
 * const r = take([1, 2, 3, 4, 5], 2);
 * console.log(r);   // -> [1, 2]
 * ```
 *
 * No matter how many elements are in the input collection,
 * `{@link module:xduce.take|take}` will only process a certain number (in this
 * case, 2). The input collection could even be a generator that never
 * terminates, and it would still work fine. `{@link module:xduce.take|take}`
 * does this by, at some point, returning a completed, which in turn causes
 * `{@link module:xdcore.reduce|reduce}` to stop processing.
 *
 * ```
 * import { protocols as p, toTransducer } from "@chanko/xdcore";
 *
 * function takeTransducer(n, next) {
 *   let i = 0;
 *   const step = (acc, value) => {
 *     let result = next[p.step](acc, value);
 *     if (i === n - 1) {
 *       result = {
 *         [p.completed]: true,
 *         [p.value]: result,
 *       };
 *     }
 *     i++;
 *     return result;
 *   };
 *   return toTransducer(step, next);
 * }
 * ```
 *
 * This is a bit more complex, but the gist of it is that the transducer object
 * simply passes the value on down the chain. However, if the element being
 * processed is the last one before it reaches the target number of elements,
 * the value returned from the chain is wrapped as a completed object.
 * `{@link module:xdcore.reduce|reduce}` will see this value and stop the
 * process as soon as it does.
 *
 * As you might expect, there are helper functions for writing transducers like
 * this:
 *
 * * `{@link module:xdcore.complete|complete}`
 * * `{@link module:xdcore.uncomplete|uncomplete}`
 * * `{@link module:xdcore.ensureCompleted|ensureCompleted}`
 * * `{@link module:xdcore.ensureUncompleted|ensureUncompleted}`
 * * `{@link module:xdcore.isCompleted|isCompleted}`
 *
 * The first two either wrap or unwrap a value in the completed wrapper. The
 * third and fourth do the same thing, but they only do it if it's actually
 * necessary to do so (`{@link module:xdcore.complete|complete}` will
 * double-wrap a value if passed an already-completed value;
 * `{@link module:xdcore.ensureCompleted|ensureCompleted}` will not do this
 * double wrapping). The final function simply returns whether or not the value
 * passed to it is a completed object.
 *
 * These functions mean that you should never have to work directly with either
 * the `completed` or `value` reducer protocol properties.
 *
 * With those in mind, the actual step function for the take transducer is a
 * little simpler.
 *
 * ```
 * const step = (acc, value) => {
 *   let result = next[p.step](acc, value);
 *   if (i === n - 1) {
 *     result = complete(result);
 *   }
 *   i++;
 *   return result;
 * };
 * ```
 *
 * After all that, one final bit of provided functionality: there are a series
 * of helper functions to determine the type of a value.
 *
 * * `{@link module:xdcore.isArray|isArray}`
 * * `{@link module:xdcore.isFunction|isFunction}`
 * * `{@link module:xdcore.isGeneratorFunction|isGeneratorFunction}`
 * * `{@link module:xdcore.isNumber|isNumber}`
 * * `{@link module:xdcore.isObject|isObject}`
 * * `{@link module:xdcore.isString|isString}`
 *
 * These all work as you might expect, with a few caveats.
 *
 * 1. `{@link module:xdcore.isFunction|isFunction}` will return `false` if
 *    passed a generator function. Use
 *    `{@link module:xdcore.isGeneratorFunction|isGeneratorFunction}` to check
 *    for those.
 * 2. `{@link module:xdcore.isNumber|isNumber}` is only for concrete numbers
 *    that are not strings. It will return `false` for `Infinity`, `NaN`, and
 *    things like `"1729"`.
 * 3. `{@link module:xdcore.isObject|isObject}` returns `true` only for plain
 *    objects. It will return `false` for any other sort of object, including
 *    things like arrays, objects with constructors (from classes or from
 *    constructor functions), and `null` (which famously returns `"object"` when
 *    `typeof` is used on it).
 * 4. `{@link module:xdcore.isArray|isArray}` is just the regular
 *    `Array.isArray`, packaged here for consistency.
 *
 * [1]: https://immutable-js.github.io/immutable-js/
 *
 * @module xdcore
 */

export { protocols, isImplemented } from "modules/protocol";
export { iterator, isIterable } from "modules/iteration";
export {
  complete,
  uncomplete,
  isCompleted,
  ensureCompleted,
  ensureUncompleted,
  reduce,
  toFunction,
  toReducer,
  toTransducer
} from "modules/reduction";
export {
  isArray,
  isFunction,
  isGeneratorFunction,
  isNumber,
  isObject,
  isString
} from "modules/utils";

/**
 * A standard JavaScript iterable. This object has a property named
 * `[Symbol.iterator]` which provides an object that satisfies the
 * {@link external:Iterator|Iterator} protocol.
 *
 * @external Iterable
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterable_protocol
 */

/**
 * A standard JavaScript iterator. This object has a function property named
 * `next` that, each time it's called, returns a new object with two
 * properties: `value`, which contains the iterator's value at that point, and
 * `done`, which is `false` until the iterator has had all of its values read.
 *
 * @external Iterator
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol
 */

/**
 * A function that can have an iterator created for it.
 *
 * @callback IterableFunction
 * @memberof module:xdcore
 * @param {number} index The index for the iteration. This is `0` the first
 *     time the function is called and increases by 1 for each call
 *     thereafter.
 * @param {*} last The return value of the function when it was called on the
 *     previous iteration. If this is the first call to the function, then
 *     this value will be `undefined`, meaning that the function can set a
 *     default value for that first pass.
 * @returns {*} The return value of the function, which will be the value for
 *     that iteration.
 */

/**
 * A function that, when called, produces a new, empty collection of whatever
 * type is being worked with.
 *
 * @callback InitFunction
 * @memberof module:xdcore
 * @returns {*} A new, empty representative of the collection.
 */

/**
 * A function that accepts a collection and a new element of that collection and
 * returns the collection with the new element added to it. This is used to
 * build up a new collection (starting with whatever
 * {@link module:xdcore.InitFunction|the init function} returns) piece by piece
 * from its elements.
 *
 * This is in every way a reducer function. The name 'step' comes from the fact
 * that these reduction functions reduce one element at a time, step by step.
 *
 * It is up to the implementation whether the returned collection is a modified
 * form of the original collection or whether it is a new collection altogether.
 *
 * @callback StepFunction
 * @memberof module:xdcore
 * @param {*} acc A collection, perhaps with some members already added to it.
 * @param {*} value A new element to be added to that collection.
 * @returns The original collection with the new value added to it.
 */

/**
 * A function that accepts a fully reduced collection and returns that
 * collection with any last-minute modifications that might need to be done to
 * it.
 *
 * In most cases this function will simply return its argument, unmodified, but
 * it does afford the transducer an opportunity to make any final modifications
 * that might be necessary before the result is returned from the transduction
 * process.
 *
 * @callback FinalFunction
 * @memberof module:xdcore
 * @param {*} value The fully reduced collection.
 * @returns {*} The reduced collection with any implementation-dependent changes
 *     that might be deemed necessary.
 */

/**
 * An object that provides the information necessary to build and populate a new
 * object of a reducible type. This information is used by the transduction
 * engine to create a result from a reduction without having to have its own
 * type-specific code; the creation, population, and finalization of the result
 * are delegated instead to this reducer object.
 *
 * Note that a *transducer object* has exactly the same structure. The only
 * differences are that the step function in a transducer object modifies the
 * elements before it reduces them, while a reducer object will not; and a
 * transducer object will call the equivalent functions in the next object in
 * the chain, while a reducer object will not. As a corollary, every reducer
 * object is also a transducer object, but the converse is not true.
 *
 * @typedef ReducerObject
 * @memberof module:xdcore
 * @property {module:xdcore.InitFunction} Symbol.for("reducer/init") A function
 *     that can create a new, empty copy of the reducible type.
 * @property {module:xdcore.StepFunction} Symbol.for("reducer/step") A function
 *     that can accept a value of the reducible type and a new element to be
 *     added to it and return the reducible with the new element incorporated.
 * @property {module:xdcore.FinalFunction} Symbol.for("reducer/final") A
 *     function that accepts a value of the reducible type and returns the same
 *     value with any final modifications that might be necessary for it.
 */

/**
 * A collection that carries its own information about how to produce itself.
 * This is structurally the same as a
 * `{@link module:xdcore.ReducerObject|ReducerObject}`. It is given a distinct
 * type because it's assumed that this type will be a collection with the
 * reducer protocol methods added to it; a
 * `{@link module:xdcore.ReducerObject|ReducerObject}` is normally an object
 * that has *only* those protocol methods and serves no purpose other than
 * providing reduction information.
 *
 * @typedef {module:xdcore.ReducerObject} Reducible
 * @memberof module:xdcore
 */

/**
 * A function that accepts a reducer object, which it then chains a transducer
 * object to. This is the primary way of creating composed transducer chains.
 *
 * A transducer function basically encapsulates a transducer object and the
 * ability to chain it to whatever reducer object is passed to it.
 *
 * @callback TransducerFunction
 * @memberof module:xdcore
 * @param {module:xdcore.ReducerObject} reducer The reducer object (which may
 *     also be a transducer object) that is the next reducer in the chain.
 * @returns {module:xdcore.ReducerObject} A transducer object consisting of some
 *     new transducer object chained to the supplied reducer object.
 */
