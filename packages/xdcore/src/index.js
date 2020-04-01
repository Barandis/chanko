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
 * `final` function runs at the very end to determine the end value. In the
 * case of this immutable list, the `init` function actually returns a mutable
 * list that we can add to with `step`, and then `final` turns that into an
 * immutable list to be returned. This is a textbook use of `final`; most of the
 * time, `final` will simply return the value that's passed to it, unchanged.
 *
 * With these lines of code in place, adding the protocol functions to `List`'s
 * prototype, reduction will just work.
 *
 * It is not necessary to provide these functions for native arrays, strings,
 * plain objects, or iterators, as support for them is built in.
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
 * @callback ResultFunction
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
 * Note that a "transducer object" has exactly the same structure. The only
 * difference is that the step function in a transducer object modifies the
 * elements before it reduces them, while a reducer object will not. As a
 * corollary, every reducer object is also a transducer object, but the converse
 * is not true.
 *
 * @typedef ReducerObject
 * @memberof module:xdcore
 * @property {module:xdcore.InitFunction} Symbol.for("transducer/init") A
 *     function that can create a new, empty copy of the reducible type.
 * @property {module:xdcore.StepFunction} Symbol.for("transducer/step") A
 *     function that can accept a value of the reducible type and a new element
 *     to be added to it and return the reducible with the new element
 *     incorporated.
 * @property {module:xdcore.ResultFunction} Symbol.for("transducer/result") A
 *     function that accepts a value of the reducible type and returns the same
 *     value with any final modifications that might be necessary for it.
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
