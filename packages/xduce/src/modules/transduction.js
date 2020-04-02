/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

/**
 * Functions dealing with the actual transformation of values and for choosing
 * the reducer during transduction.
 *
 * @module xduce/transduction
 * @private
 */

import {
  protocols as p,
  isImplemented,
  iterator,
  isCompleted,
  toReducer,
  toFunction,
  reduce,
  isFunction,
  isArray,
  isObject,
  isString
} from "@chanko/xdcore";

/**
 * Creates an iterator that is also a transducer, transforming its collection
 * one element at a time. This is the actual output of the
 * {@link module:xduce.asIterator|asIterator} function, as well as the output of
 * the {@link module:xduce.sequence|sequence} function when the input is an
 * iterator.
 *
 * The end user need not be concerned with the type of the output iterator in
 * these circumstances; the end user need only care that the output is, in fact,
 * an iterator and can be expected to act like one. For this reason, this
 * function and the type it returns are not exported.
 *
 * This object supports non-1-to-1 correspondences between input and output
 * values. For example, a filter transformation might return fewer output
 * elements than were in the input collection, while a repeat transformation
 * will return more. In either case, `next` in this class will return one
 * element per call.
 *
 * @param {external:Iterable} collection the input collection that the produced
 *     iterator will be iterating over.
 * @param {module:xdcore.TransducerFunction} transducerFn A function that
 *     creates a transducer object that defines the transformation being done to
 *     the iterator's elements. Any of the transducers in the
 *     {@link module:xduce|xduce} module can produce a suitable transducer
 *     function.
 * @returns {external:Iterator} An iterator that will transform its input
 *     elements using the transducer function as its `next()` function is
 *     called.
 * @private
 */
function transducingIterator(collection, transducerFn) {
  const stepReducer = {
    [p.step](xiter, input) {
      xiter.items.unshift(input);
      return xiter;
    },
    [p.final](value) {
      return value;
    }
  };

  const iter = iterator(collection);
  const transducer = transducerFn(stepReducer);
  let completed = false;

  // This array is the key to working properly with step functions that return
  // more than one value. All of them are put into the items array. As long as
  // this array has values in it, the `next` function will return one value
  // popped from it rather than running the step function again.
  const items = [];

  // The `next` function here is rather simple. If there is already something in
  // the `items` array, it's returned. If not, the `step` function is run and,
  // if that results in a value in the `items` array, it's returned. Otherwise
  // an object with `{ done: true }` is returned.
  function next() {
    if (items.length === 0) {
      step();
    }
    if (items.length === 0) {
      return { done: true };
    }
    return {
      value: items.pop(),
      done: false
    };
  }

  // This is where most of the work happens. It gets the next value from the
  // input collection and runs it through the reduction step functions. If that
  // results in a value, it's given to the stepper object (which adds it to the
  // `items` array); otherwise the while loop continues to the next element of
  // the input collection. This ensures that there's something for the `next`
  // function to return each time it's called.
  //
  // If the collection has finished or if the step function returns a completed
  // object (which take will do after its limit of elements has been reached,
  // for instance), the iteration is finished by calling the result function.
  function step() {
    const count = items.length;
    while (items.length === count) {
      const stepValue = iter.next();
      if (stepValue.done || completed) {
        transducer[p.final](result);
        break;
      }
      completed = isCompleted(transducer[p.step](result, stepValue.value));
    }
  }

  // The `result` name is hoisted and used in functions further up, so we have
  // to retain that name and can't just return the object without naming it
  const result = { items, next, step };
  return result;
}

/**
 * Transforms the elements of the input collection and reduces them into an
 * output collection.
 *
 * This is the lowest-level of the transduction functions that is likely to see
 * regular use. It does not assume anything about the reducer, as it asks for it
 * to be passed explicitly. This means that any kind of collection can be
 * produced, since the reducer is not tied to the input collection in any way.
 *
 * `transduce` also will accept an initial value for the resulting collection as
 * the optional last parameter. If this parameter isn't present, then the
 * initial value is determined from the reducer `init` protocol property on the
 * reducer. Note however that many reducers may not provide an initial value,
 * and in those cases it will *have* to be passed as a parameter.
 *
 * ```
 * import { map, transduce, toReducer } from "@chanko/xduce";
 *
 * const transducerFn = map(x => x + 1);
 *
 * const arrayReducer = toReducer([]);
 * const stringReducer = toReducer("");
 *
 * let result = transduce([1, 2, 3, 4, 5], transducerFn, arrayReducer);
 * console.log(result);   // -> [2, 3, 4, 5, 6]
 *
 * result = transduce([1, 2, 3, 4, 5], transducerFn, stringReducer);
 * console.log(result);   // -> "23456"
 *
 * result = transduce('12345', transducerFn, arrayReducer);
 * console.log(result);   // -> [2, 3, 4, 5, 6]
 *
 * result = transduce('12345', transducerFn, stringReducer);
 * console.log(result);   // -> "23456"
 * ```
 *
 * These examples illustrate a number of important concepts. First of all, the
 * transducer function is independent of the type of the collection; the same
 * transducer function is used no matter the type of input or output
 * collections. Secondly, two reducers are defined. These are objects that
 * conform to the reducer protocol and that know how to produce the output
 * collection of choice. In this case, the reducers are produced by the
 * `{@link module:xdcore.toReducer|toReducer} `function that this module
 * re-exports from the {@link module:xdcore|xdcore} module. Because these
 * reducers do have `init` protocol properties, the `transduce` calls do not
 * require explicit initial collections.
 *
 * The final point is that `transduce` can accept any kind of iterable
 * collection, and by passing in the proper reducer, it can produce any kind of
 * output collection. The same `transduce` function and the same map transformer
 * is used in all four examples, despite the input/output combination being
 * different in all four.
 *
 * The `reducer` parameter *can* be a reducer function instead of a reducer
 * object. If this is the case, the `init` parameter is required because a
 * function cannot define an initial value itself.
 *
 * The `init` collection doesn't have to be empty. If it isn't, the elements
 * that are already in it are retained and the transformed input elements are
 * reduced into the collection normally.
 *
 * Of course, the examples are not really necessary - the same thing could be
 * accomplished using `{@link module:xduce.into|into}` without having to create
 * the reducers (strings and arrays passed to `{@link module:xduce.into|into}`
 * as targets know how to reduce themselves already).
 *
 * @memberof module:xduce
 * @param {(object|function|external:Iterable)} collection The input collection.
 *     The only requirement of this collection is that it implement the
 *     `iterable` protocol. Special support is provided by the library for
 *     functions and plain objects, so they can also be used.
 * @param {module:xdcore.TransducerFunction} transducerFn A function that
 *     creates a transducer object that defines the transformation being done to
 *     the input collection's elements. Any of the transducers in this module
 *     can produce a suitable transducer function.
 * @param {(module:xdcore.StepFunction|module:xdcore.ReducerObject)} reducer
 *     Either a function or a reducer object that implements the transducer
 *     protocols (`init` is  only required if the `init` parameter is not
 *     present). This object must know how to produce an output value through
 *     its `step` and `result` protocol functions. If this parameter is a
 *     function, then it is turned into a valid reducer object.
 * @param {*} [init] A value of the same type as the output value. If this is
 *     not present, then the reducer's `init` protocol function is called
 *     instead to get the initial collection. If it is present and not empty,
 *     then the existing elements remain and the transformed input collection
 *     elements are added to it.
 * @returns {*} A value of a type determined by the passed reducer. This is
 *     usually a collection, but if the reducer produces a scalar value, then
 *     this will be a scalar value of that type.
 */
function transduce(collection, transducerFn, reducer, init) {
  const r = isFunction(reducer) ? toReducer(reducer) : reducer;
  const i = init ?? r[p.init]();
  const transducer = transducerFn ? transducerFn(r) : r;
  return reduce(collection, transducer, i);
}

/**
 * Transforms the elements of the input collection and reduces them into a new
 * array.
 *
 * The transducer function is optional. If it isn't present, this function just
 * converts the input collection into an array.
 *
 * ```
 * import { asArray, map } from "@chanko/xduce";
 *
 * const transducerFn = map(x => x + 1);
 *
 * let result = asArray([1, 2, 3, 4, 5], transducerFn);
 * console.log(result);   // -> [2, 3, 4, 5, 6]
 *
 * result = asArray('12345', transducerFn);
 * console.log(result);   // -> [2, 3, 4, 5, 6]
 *
 * result = asArray('12345');
 * console.log(result);   // -> [1, 2, 3, 4, 5]
 *
 * result = asArray({a: 1, b: 2});
 * console.log(result);   // -> [{ a: 1 }, { b: 2 }]
 * ```
 *
 * @memberof module:xduce
 * @param {(object|function|external:Iterable)} collection The input collection.
 *     The only requirement of this collection is that it implement the
 *     `iterable` protocol. Special support is provided by the library for
 *     functions and objects, so they can also be used.
 * @param {module:xdcore.TransducerFunction} [transducerFn] A function that
 *     creates a transducer object that defines the transformation being done to
 *     the input collection's elements. Any of the transducers in this module
 *     can produce a suitable transducer function. If this isn't present, the
 *     input collection will simply be reduced into an array without
 *     transformation.
 * @returns {array} An array containing all of the transformed values from the
 *     input collection elements.
 */
function asArray(collection, transducerFn) {
  return transduce(collection, transducerFn, toReducer([]));
}

/**
 * Transforms the elements of the input collection and reduces them into a new
 * object.
 *
 * The transducer function is optional. If it isn't present, this function just
 * converts the input collection into an object. When this happens, if the input
 * collection is not an object or an array of objects, numbers starting at `0`
 * will be used as keys for the values provided by the input collection.
 *
 * ```
 * import { asObject, kv, map } from "@chanko/xduce";
 *
 * const fn = prop => {
 *   const { k, v } = kv(prop);
 *   return { [k]: v + 1 };
 * }
 * const transducerFn = map(fn);
 *
 * let result = asObject({ a: 1, b: 2 }, transducerFn);
 * console.log(result);   // -> { a: 2, b: 3 }
 *
 * result = asObject([{ a: 1 }, { b: 2 }], transducerFn);
 * console.log(result);   // -> { a: 2, b: 3 }
 *
 * result = asObject([1, 2, 3, 4, 5]);
 * console.log(result);   // -> { 0: 1, 1: 2, 2: 3, 3: 4, 4: 5 }
 *
 * result = asObject([{ a: 1 }, { b: 2 }]);
 * console.log(result);   // -> { a: 1, b: 2 }
 *
 * result = asObject("hello");
 * console.log(result);   // -> { 0: "h", 1: "e", 2: "l", 3: "l", 4: "o" }
 * ```
 *
 * @memberof module:xduce
 * @param {(object|function|external:Iterable)} collection The input collection.
 *     The only requirement of this collection is that it implement the
 *     `iterable` protocol. Special support is provided by the library for
 *     functions and objects, so they can also be used.
 * @param {module:xdcore.TransducerFunction} [transducerFn] A function that
 *     creates a transducer object that defines the transformation being done to
 *     the input collection's elements. Any of the transducers in this
 *     module can produce a suitable transducer function. If this isn't present,
 *     the input collection will simply be reduced into an object without
 *     transformation.
 * @returns {object} An object containing all of the transformed values from the
 *     input collection elements.
 */
function asObject(collection, transducerFn) {
  return transduce(collection, transducerFn, toReducer({}));
}

/**
 * Transforms the elements of the input collection and reduces them into a new
 * string.
 *
 * The transducer function is optional. If it isn't present, this function just
 * converts the input collection into an string. If this is the case and the
 * input collection is an object, only the values will be concatenated into a
 * string.
 *
 * Otherwise, transforming objects into strings only makes much sense if the
 * transducer produces only a single output from each of the objects key/value
 * pairs.
 *
 * ```
 * import { transduce, key, map } from "@chanko/xduce";
 *
 * const transducerFn = map(x => x.toUpperCase());
 *
 * let result = asString('hello', transducerFn);
 * console.log(result);   // -> "HELLO"
 *
 * result = asString(['h', 'e', 'l', 'l', 'o'], transducerFn);
 * console.log(result);   // -> "HELLO"
 *
 * result = asString({ a: 1, c: 2, b: 3 }, map(key));
 * console.log(result);   // -> "acb"
 *
 * result = asString([1, 2, 3, 4, 5]);
 * console.log(result);   // -> "12345"
 *
 * result = asString({ a: 1, c: 2, b: 3 });
 * console.log(result);   // -> "123"
 * ```
 *
 * @memberof module:xduce
 * @param {(object|function|external:Iterable)} collection The input collection.
 *     The only requirement of this collection is that it implement the
 *     `iterable` protocol. Special support is provided by the library for
 *     functions and objects, so they can also be used.
 * @param {module:xdcore.TransducerFunction} [transducerFn] A function that
 *     creates a transducer object that defines the transformation being done to
 *     the input collection's elements. Any of the transducers in this module
 *     can produce a suitable transducer function. If this isn't present, the
 *     input collection will simply be reduced into a string without
 *     transformation.
 * @returns {string} A string containing all of the transformed values from the
 *     input collection elements.
 */
function asString(collection, transducerFn) {
  return transduce(collection, transducerFn, toReducer(""));
}

/**
 * Transforms the elements of the input collection and reduces them into a new
 * iterator.
 *
 * The transducer function is optional. If it isn't present, this function just
 * converts the input collection into an iterator.
 *
 * *(The results here are shown passed through `asArray` because there's no
 * printable representation of an iterator to show. The `asArray` calls are for
 * demonstration purposes only.)*
 *
 * ```
 * import { asIterator, asArray, map } from "@chanko/xduce";
 *
 * const transducerFn = map(x => x + 1);
 * function* five() {
 *   for (let i = 1; i <= 5; ++i) {
 *     yield i;
 *   }
 * };
 *
 * let result = asIterator(five(), transducerFn);
 * console.log(asArray(result));   // -> [2, 3, 4, 5, 6]
 *
 * result = asIterator([1, 2, 3, 4, 5], transducerFn);
 * console.log(asArray(result));   // -> [2, 3, 4, 5, 6]
 *
 * result = asIterator([1, 2, 3, 4, 5]);
 * console.log(asArray(result));   // -> [1, 2, 3, 4, 5]
 *
 * result = asIterator({a: 1, b: 2});
 * console.log(asArray(result));   // -> [{ a: 1 }, { b: 2 }]
 * ```
 *
 * @memberof module:xduce
 * @param {(object|function|external:Iterable)} collection The input collection.
 *     The only requirement of this collection is that it implement the
 *     `iterable` protocol. Special support is provided by the library for
 *     functions and objects, so they can also be used.
 * @param {module:xdcore.TransducerFunction} [transducerFn] A function that
 *     creates a transducer object that defines the transformation being done to
 *     the input collection's elements. Any of the transducers in this module
 *     can produce a suitable transducer function. If this isn't present, the
 *     input collection will simply be reduced into an iterator without
 *     transformation.
 * @returns {external:Iterator} An iterator containing all of the transformed
 *     values from the input collection elements.
 */
function asIterator(collection, transducerFn) {
  return transducerFn
    ? transducingIterator(collection, transducerFn)
    : iterator(collection);
}

/**
 * Transforms the elements of the input collection and reduces them into a new
 * collection of the same type.
 *
 * This is the highest level of the three main transduction functions
 * (`sequence`, `{@link module:xduce.into|into}`, and
 * `{@link module:xduce.transduce|transduce}`). It creates a new collection of
 * the same type as the input collection and reduces the transformed elements
 * into it. Additionally, unlike `{@link module:xduce.into|into}` and
 * `{@link module:xduce.transduce|transduce}`, this function is capable of
 * producing an iterator (as long as the input is an iterator).
 *
 * The input collection must not only implement the `iterator` protocol (as in
 * the last two functions) but also the `init`, `result`, and `step` reducer
 * protocols. Special support is provided for arrays, strings, objects, and
 * iterators, so they need not implement any protocol.
 *
 * The obvious limitation of this function is that the type of output collection
 * cannot be chosen. Since it is always the same as the input collection, this
 * function cannot be used to convert a collection into a different type.
 *
 * ```
 * import { sequence, map } from "@chanko/xduce";
 *
 * const transducerFn = map(x => x + 1);
 *
 * let result = sequence([1, 2, 3, 4, 5], transducerFn);
 * console.log(result);   // -> result = [2, 3, 4, 5, 6]
 *
 * result = sequence('12345', transducerFn);
 * console.log(result);   // -> result = '23456'
 * ```
 *
 * These examples are identical to some of the examples from the `asX`
 * functions. Other examples are not possible with `sequence` because they have
 * different input and output collection types.
 *
 * @memberof module:xduce
 * @param {(array|object|string|external:Iterator|module:xduce.Collection)}
 *     collection The input collection. This must implement the `iterator`,
 *     `init`, `result`, and `step` protocols. Special support is provided for
 *     arrays, strings, objects, and iterators, so they do not have to implement
 *     any protocols.
 * @param {module:xdcore.TransducerFunction} transducerFn A function that
 *     creates a transducer object that defines the transformation being done to
 *     the input collection's elements. Any of the transducers in this module
 *     can produce a suitable transducer function.
 * @returns {(array|object|string|external:Iterator|module:xduce.Collection)} A
 *     collection of the same type as the input collection, containing all of
 *     the transformed values from the input collection elements.
 */
function sequence(collection, transducerFn) {
  switch (true) {
    case isArray(collection):
      return asArray(collection, transducerFn);
    case isObject(collection):
      return asObject(collection, transducerFn);
    case isString(collection):
      return asString(collection, transducerFn);
    case isImplemented(collection, "step"):
      return transduce(collection, transducerFn, collection);
    case isImplemented(collection, "iterator"):
      return asIterator(collection, transducerFn);
    default:
      throw Error(`Cannot sequence collection: ${collection}`);
  }
}

/**
 * Transforms the elements of the input collection and reduces them into the
 * target collection.
 *
 * This is much like `{@link module:xduce.transduce|transduce}`, except that
 * instead of explicitly providing a reducer (and perhaps an initial
 * collection), the target collection acts as a reducer itself. This requires
 * that the collection implement the `init`, `result`, and `step` reducer
 * protocol functions.
 *
 * If no transducer function is provided, the input collection elements are
 * reduced into the target collection without being transformed. This can be
 * used to convert one kind of collection into another.
 *
 * ```
 * import { into, map } from "@chanko/xduce";
 *
 * const transducerFn = map(x => x + 1);
 *
 * let result = into([], [1, 2, 3, 4, 5], transducerFn);
 * console.log(result);   // -> [2, 3, 4, 5, 6]
 *
 * result = into("", [1, 2, 3, 4, 5], transducerFn);
 * console.log(result);   // -> "23456"
 *
 * result = into([], "12345", transducerFn);
 * console.log(result);   // -> [2, 3, 4, 5, 6]
 *
 * result = into("", "12345", transducerFn);
 * console.log(result);   // -> "23456"
 * ```
 *
 * @memberof module:xduce
 * @param {(array|object|string|module:xdcore.Reducible)} target The collection
 *     into which all of the transformed input collection elements will be
 *     reduced. This collection must implement the `init`, `final`, and `step`
 *     protocol functions from the reducer protocol. Special support is provided
 *     for arrays, strings, and objects, so they need not implement the
 *     protocol.
 * @param {(object|function|external:Iterable)} collection The input collection.
 *     The only requirement of this collection is that it implement the
 *     `iterable` protocol. Special support is provided by the library for
 *     functions and objects, to they can also be used.
 * @param {module:xdcore.TransducerFunction} [transducerFn] A function that
 *     creates a transducer object that defines the transformation being done to
 *     the input collection's elements. Any of the transducers in this module
 *     can produce a suitable transducer function. If this isn't present, the
 *     input collection will simply be reduced into the target collection
 *     without transformation.
 * @return {(array|object|string|module:xdcore.Reducible)} The `target`
 *     collection, with all of the tranformed input collection elements reduced
 *     onto it.
 */
function into(target, collection, transducerFn) {
  switch (true) {
    case isArray(target):
      return transduce(collection, transducerFn, toReducer([]), target);
    case isObject(target):
      return transduce(collection, transducerFn, toReducer({}), target);
    case isString(target):
      return transduce(collection, transducerFn, toReducer(""), target);
    case isImplemented(target, "step"):
      return transduce(collection, transducerFn, target, target);
    default:
      throw Error(`Cannot reduce collection into ${target}: ${collection}`);
  }
}

/**
 * Composes two or more transducer functions into a single transducer function.
 *
 * Each function that takes a transducer function
 * (`{@link module:xduce.sequence|sequence}`, `{@link module:xduce.into|into}`,
 * etc.) is only capable of accepting one of them. If there is a need to have
 * several transducers chained together, then use `compose` to create a
 * transducer function that does what all of them do.
 *
 * NOTE: In functional programming, a compose function is generally ordered so
 * that the first-executed function is listed last. This is done in the opposite
 * way, with the first transducer executing first, etc. This is a more natural
 * ordering for transducer functions because there is a very real directional
 * pull of elements through a chain of composed transducers.
 *
 * ```
 * import { compose, sequence, map, filter, take } from "@chanko/xduce";
 *
 * const add1 = x => x + 1;
 * const odd = x => x % 2 !== 0;
 *
 * const transducerFn = compose(map(add1), filter(odd), take(3));
 *
 * const result = sequence([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], transducerFn);
 * console.log(result);   // -> [3, 5, 7];
 * ```
 *
 * @memberof module:xduce
 * @param {...module:xdcore.TransducerFunction} fns One or more transducer
 *     functions to be composed into a single transducer function. Any of the
 *     transducers in this module can produce a suitable transducer function.
 * @return {module:xdcore.TransducerFunction} A transducer function that produces
 *     a transducer object that performs *all* of the transformations of the
 *     objects produced by the input transducer functions.
 */
function compose(...transducerFns) {
  const reversed = transducerFns.reverse();
  return value => reversed.reduce((acc, fn) => fn(acc), value);
}

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
};
