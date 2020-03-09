/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

/**
 * A set of functions related to the producing reducer objects, marking
 * completed objects, and performing general reduction operations.
 *
 * @module core/reduction
 * @private
 */

import { isImplemented, protocols as p } from "modules/protocol";
import { isString, isArray, isObject, isFunction } from "modules/utils";
import { iterator } from "modules/iteration";

/**
 * Returns an init function for a collection. This is a function that returns a
 * new, empty instance of the collection in question. If the collection doesn't
 * support reduction, `null` is returned. This makes conditionals a bit easier
 * to work with.
 *
 * In order to support the conversion of functions into reducers, function
 * support is also provided.
 *
 * @param {*} collection A collection to create an init function for. This can
 *     be anything that supports the iteration protocol or a plain object.
 * @return {module:core.InitFunction} A function that, when called, returns an
 *     initial version of the provided collection. If the provided collection is
 *     not iterable, then `null` is returned.
 * @private
 */
function init(collection) {
  switch (true) {
    case isImplemented(collection, "init"):
      return collection[p.init];
    case isString(collection):
      return () => "";
    case isArray(collection):
      return () => [];
    case isObject(collection):
      return () => ({});
    case isFunction(collection):
      return () => {
        throw Error("init not available");
      };
    default:
      return null;
  }
}

/**
 * Returns a step function for a collection. This is a function that takes an
 * accumulator and a value and returns the result of reducing the value into the
 * accumulator. If the collection doesn't support reduction, `null` is returned.
 * The returned function itself simply reduces the input into the target
 * collection without modifying it.
 *
 * In order to support the conversion of functions into reducers, function
 * support is also provided.
 *
 * @param {*} collection A collection to create a step function for. This can be
 *     anything that supports the iteration protocol, a plain object, or a
 *     function.
 * @return {module:core.StepFunction} A reduction function for the provided
 *     collection that simply adds an element to the target collection without
 *     modifying it. If the provided collection is not iterable, `null` is
 *     returned.
 * @private
 */
function step(collection) {
  switch (true) {
    case isImplemented(collection, "step"):
      return collection[p.step];

    case isString(collection):
      return (acc, input) => {
        const value = isObject(input) ? input[Object.keys(input)[0]] : input;
        return acc + value;
      };

    case isArray(collection):
      return (acc, input) => {
        acc.push(input);
        return acc;
      };

    case isObject(collection):
      return (acc, input) => {
        let value = input;

        if (!isObject(input)) {
          // if the input isn't an object, turn it into an object with a
          // numerical key one greater than the max key already in the
          // accumulator
          const max = Object.keys(acc).reduce((a, b) => Math.max(a, b), -1);
          value = { [max + 1]: input };
        }

        const k = Object.keys(value)[0];
        acc[k] = value[k];
        return acc;
      };

    case isFunction(collection):
      return (acc, input) => collection(acc, input);

    default:
      return null;
  }
}

/**
 * Returns a result function for a collection. This is a function that performs
 * any final processing that should be done on the result of a reduction. If the
 * collection doesn't support reduction, `null` is returned.
 *
 * In order to support the conversion of functions into reducers, function
 * support is also provided.
 *
 * @param {*} collection A collection to create a step function for. This can be
 *     anything that supports the iteration protocol, a plain object, or a
 *     function.
 * @return {module:core.ResultFunction} A function that, when given a reduced
 *     collection, produces the final output. If the provided collection is not
 *     iterable, `null` will be returned.
 * @private
 */
function result(collection) {
  switch (true) {
    case isImplemented(collection, "result"):
      return collection[p.result];
    case isString(collection):
    case isArray(collection):
    case isObject(collection):
    case isFunction(collection):
      return value => value;
    default:
      return null;
  }
}

/**
 * Creates a reducer object from a function or from a built-in reducible type
 * (array, object, or string).
 *
 * To create a reducer for arrays, objects, or strings, simply pass an empty
 * version of that collection to this function (e.g., `toReducer([])`).
 *
 * The notable use for this function though is to turn a reduction function into
 * a reducer object. The function is a function of two parameters, an
 * accumulator and a value, and returns the accumulator with the value in it.
 * This is exactly the same kind of function that is passed to reduction
 * functions like JavaScript's `Array.prototype.reduce` and Lodash's `_.reduce`.
 *
 * Note in particular that the output of this reducer does not need to be a
 * collection. It can be anything. While transducing normally involves
 * transforming one collection into another, it need not be so. For example,
 * here is a reducer that will result in summing of the collection values.
 *
 * ```
 * import { toReducer, reduce } from "@chanko/xduce";
 *
 * const sumReducer = toReducer((acc, input) => acc + input);
 * const sum = reduce([1, 2, 3, 4, 5], sumReducer, 0);
 * console.log(sum);   // -> 15
 * ```
 *
 * This can be combined with transducers as well, as in this calculation of the
 * sum of the *squares* of the collection values.
 *
 * ```
 * import { toReducer, transduce } from "@chanko/xduce";
 * import { map } from "@chanko/transducers";
 *
 * const sumReducer = toReducer((acc, input) => acc + input);
 * const sum = transduce([1, 2, 3, 4, 5], map(x => x * x), sumReducer, 0);
 * console.log(sum);   // -> 55
 * ```
 *
 * @memberof module:core
 * @param {*} collection An iterable collection or a reducer function.
 * @return {object} An object containing protocol properties for init, step, and
 *     result. This object is suitable for use as a reducer object (one provided
 *     to `{@link xduce.reduce|reduce}` or `{@link xduce.transduce|transduce}`).
 *     If the provided collection is not iterable, all of the properties of this
 *     object will be `null`.
 */
function toReducer(collection) {
  return Object.freeze({
    [p.init]: init(collection),
    [p.step]: step(collection),
    [p.result]: result(collection)
  });
}

/**
 * A reducer object for arrays.
 *
 * @type {module:core.Reducer}
 * @private
 */
const ARRAY_REDUCER = toReducer([]);

/**
 * A reducer object for objects.
 *
 * @type {module:core.Reducer}
 * @private
 */
const OBJECT_REDUCER = toReducer({});

/**
 * A reducer object for strings.
 *
 * @type {module:core.Reducer}
 * @private
 */
const STRING_REDUCER = toReducer("");

/**
 * Creates a transducer from a function and a transducer to chain it to.
 *
 * This is in most respects just like {@link module:core.toReducer|toReducer},
 * with two notable differences. One is that it requires a transducer to chain
 * to, and it does the chaining as a part of creating the new transducer. The
 * other is that it includes a usable `init` function, where passing a function
 * to {@link module:core.toReducer|toReducer} would create an init function that
 * throws an error if it's called.
 *
 * This function applies the given function as the `step` function of the
 * returned transducer, and the `init` and `result` functions simply call the
 * same functions in the next transducer down the chain. This is precisely what
 * *most* transducers want...`init` and `result` functions are normally handled
 * by the reducer at the end of the transducer chain...but in the rare case when
 * `init` or `result` must do more than this, the transducer must be created
 * manually.
 *
 * This function does not automatically chain the `step` function to the next
 * one down the line, as that can be done in any number of different ways. Thus
 * the function itself should call the `step` function in `xform` in whatever
 * way is appropriate.
 *
 * @memberof module:core
 * @param {module:core.StepFunction} fn The step function for the transducer.
 * @param {module:core.Transducer} xform The next transducer object in the
 *     chain.
 * @returns {module:core.Transducer} A new transducer, chaining the supplied
 *     function to the supplied transducer.
 */
function toTransducer(fn, xform) {
  return {
    [p.init]() {
      return xform[p.init]();
    },

    [p.step]: fn,

    [p.result](value) {
      return xform[p.result](value);
    }
  };
}

/**
 * Creates a reduction function from a transducer and a reducer.
 *
 * This produces a function that's suitable for being passed into other
 * libraries' reduce functions, such as JavaScript's `Array.prototype.reduce` or
 * Lodash's `_.reduce`. It requires both a transformer and a reducer because
 * reduction functions for those libraries must know how to do both. The reducer
 * can be a standard reducer object like the ones sent
 * to`{@link module:core.transduce|transduce}` or
 * `{@link module:core.reduce|reduce}`, or it can be a plain function that takes
 * two parameters and returns the result of reducing the second parameter into
 * the first.
 *
 * If there is no need for a transformation, then pass in the
 * `{@link module:transducers.identity|identity}` transducer.
 *
 * @memberof module:core
 * @param {module:core.Reducer} xform A transducer object whose step function
 *     will become the returned reduction function.
 * @param {(module:core.StepFunction|module:core.Reducer)} reducer A reducer
 *     that knows how to reduce values into an output collection. This can
 *     either be a reducing function or a transducer object whose `step`
 *     function knows how to perform this reduction.
 * @returns {module:core.StepFunction} A function that handles both the
 *     transformation and the reduction of a value onto a target function.
 */
function toFunction(xform, reducer) {
  const r = typeof reducer === "function" ? toReducer(reducer) : reducer;
  const result = xform(r);
  return result[p.step].bind(result);
}

/**
 * Marks a value as complete.
 *
 * This is done by wrapping the value. This means three things: first, a
 * complete object may be marked as complete again; second, a complete value
 * isn't usable without being uncompleted first; and third any type of value
 * (including `undefined`) may be marked as complete.
 *
 * @memberof module:core
 * @param {*} value The value to be completed.
 * @return {*} A completed version of the provided value. This reduction is
 *     achieved by wrapping the value in a marker object.
 */
function complete(value) {
  return {
    [p.reduced]: true,
    [p.value]: value
  };
}

/**
 * Removes the complete status from a completed value.
 *
 * This function is intended to be used when it's certain that a value is
 * already marked as complete. If it is not, `undefined` will be returned
 * instead of the value.
 *
 * @memberof module:core
 * @param {*} value The value to be uncompleted.
 * @return {*} An uncompleted version of the provided value. If the value was
 *     not complete in the first place, `undefined` will be returned instead.
 */
function uncomplete(value) {
  return value?.[p.value];
}

/**
 * Determines whether a value is marked as complete.
 *
 * @memberof module:core
 * @param {*} value The value to test for its complete status.
 * @return {boolean} Either `true` if the value is complete, or `false` if it is
 *     not.
 */
function isCompleted(value) {
  return !!value?.[p.reduced];
}

/**
 * Makes sure that a value is marked as complete; if it is not, it will be
 * marked as complete.
 *
 * This differs from {@link module:core.complete|complete} in that if the value
 * is already complete, this function won't complete it again. Therefore thus
 * function can't be used to make a value complete multiple times.
 *
 * @memberof module:core
 * @param {*} value The value to be completed.
 * @return {*} If the value is already complete, then the value is simply
 *     returned. Otherwise, a completed version of the value is returned.
 */
function ensureCompleted(value) {
  return isCompleted(value) ? value : complete(value);
}

/**
 * Removes the complete status from a value, as long as it actually is complete.
 *
 * This does a check to make sure the value passed in actually is complete. If
 * it isn't, the value itself is returned. It's meant to be used when the
 * completed status is uncertain.
 *
 * @memberof module:core
 * @param {*} value The complete value to be uncompleted.
 * @return {*} If the value is already uncompleted, the value is simply
 *     returned. Otherwise an uncompleted version of the value is returned.
 */
function ensureUncompleted(value) {
  return isCompleted(value) ? uncomplete(value) : value;
}

/**
 * Reduces the elements of the input collection through a reducer into an output
 * collection.
 *
 * This is the lowest-level of the transduction functions. In fact, this one is
 * so low-level that it doesn't have a lot of use in normal operation. It's more
 * useful for writing your own transformation functions.
 *
 * `reduce` doesn't assume that there's even a transformation. It requires an
 * initial collection and a reducer object that is matched to that initial
 * collection. The reducer object must implement the `step` and `result`
 * protocols, which instruct `reduce` on how to build up the collection. The
 * reducer may implement a transformation as well, but all that's important here
 * is that it can do the reduction.
 *
 * The input collection need only implement `iterable`. It is not necessary for
 * the input and output collections to be of the same type; as long as the input
 * implements `iterable` and the reducer implements `step` and `result`
 * appropriate to the type of the `init` collection, then any translation
 * between collection types can occur.
 *
 * The normal course of operation will be to call
 * {@link module:core.transduce|transduce} instead, as that function makes it
 * easy to combine transformations with reductions and can optionally figure out
 * the initial collection itself.
 *
 * @memberof module:core
 * @param {*} collection The input collection. The only requirement of this
 *     collection is that it implement the `iterable` protocol. Special support
 *     is provided by the library for objects, so they can be used as well.
 * @param {module:core.Reducer} reducer An object that implements the `step` and
 *     `result` protocols. This object must know how to produce an output
 *     collection through those protocol functions.
 * @param {*} init a collection of the same type as the output collection. It
 *     need not be empty; if it is not, the existing elements are retained as
 *     the input collection is reduced into it.
 * @return {*} A new collection, consisting of the `init` collection with all of
 *     the elements of the `collection` collection reduced into it.
 */
function reduce(collection, reducer, init) {
  if (collection == null) {
    return null;
  }

  const iter = iterator(collection);
  if (!iter) {
    throw Error(`Cannot reduce an instance of ${collection.constructor.name}`);
  }

  let acc = init;
  let step = iter.next();

  while (!step.done) {
    acc = reducer[p.step](acc, step.value);
    if (isCompleted(acc)) {
      acc = uncomplete(acc);
      break;
    }
    step = iter.next();
  }

  return reducer[p.result](acc);
}

export {
  init,
  step,
  result,
  toReducer,
  ARRAY_REDUCER,
  OBJECT_REDUCER,
  STRING_REDUCER,
  toTransducer,
  toFunction,
  complete,
  uncomplete,
  isCompleted,
  ensureCompleted,
  ensureUncompleted,
  reduce
};
