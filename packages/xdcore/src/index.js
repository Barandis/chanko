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
 * `{@link module:xduce-tools.protocols|protocols}` is for.
 *
 * The best way to use these keys can be seen in the immutable-js example above.
 * Instead of worrying about the name of the key for the `init` protocol, the
 * value of `protocols.init` is used.
 *
 * `{@link module:xduce-tools.protocols|protocols}` defines these protocol
 * property names.
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
 * The `{@link module:xduce-tools.iterator|iterator}` function can be passed a
 * sorting function that can sort keys in any other way.
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
 * A helper function named `{@link module:xduce-tools.property|property}` can
 * improve this by handling the boilerplate.
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
 * Every transducer function except for
 * `{@link module:xduce-tools.sequence|sequence}` is capable of turning an
 * object into a different type of collection, turning a different type of
 * collection into an object, or both. Objects are different because they're the
 * only "collections" that have two different pieces of data per element.
 * Because of this, we have to have a strategy on how to move from one to
 * another.
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
