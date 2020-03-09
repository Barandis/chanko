/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { protocols as p, isImplemented } from "modules/protocol";
import { iterator } from "modules/iteration";
import {
  isCompleted,
  toReducer,
  reduce,
  ARRAY_REDUCER,
  OBJECT_REDUCER,
  STRING_REDUCER
} from "modules/reduction";
import { isFunction, isArray, isObject, isString } from "modules/utils";

function transducingIterator(collection, xform) {
  const stepReducer = {
    [p.step](xiter, input) {
      xiter.items.unshift(input);
      return xiter;
    },
    [p.result](value) {
      return value;
    }
  };

  const iter = iterator(collection);
  const xf = xform(stepReducer);
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
        xf[p.result](result);
        break;
      }
      completed = isCompleted(xf[p.step](result, stepValue.value));
    }
  }

  // The resulting object is an iterator, so to satisfy the iterable protocol
  // we just return that object itself
  function sIterator() {
    return result;
  }

  // The `result` name is hoisted and used in functions further up, so we have
  // to retain that name and can't just return the object without naming it
  const result = { items, next, step, [Symbol.iterator]: sIterator };
  return result;
}

function transduce(collection, xform, reducer, init) {
  const r = isFunction(reducer) ? toReducer(reducer) : reducer;
  const i = init ?? r[p.init]();
  const xf = xform ? xform(r) : r;
  return reduce(collection, xf, i);
}

function asArray(collection, xform) {
  return transduce(collection, xform, ARRAY_REDUCER);
}

function asObject(collection, xform) {
  return transduce(collection, xform, OBJECT_REDUCER);
}

function asString(collection, xform) {
  return transduce(collection, xform, STRING_REDUCER);
}

function asIterator(collection, xform) {
  return xform ? transducingIterator(collection, xform) : iterator(collection);
}

function sequence(collection, xform) {
  switch (true) {
    case isArray(collection):
      return asArray(collection, xform);
    case isObject(collection):
      return asObject(collection, xform);
    case isString(collection):
      return asString(collection, xform);
    case isImplemented(collection, "step"):
      return transduce(collection, xform, collection);
    case isImplemented(collection, "iterator"):
      return asIterator(collection, xform);
    default:
      throw Error(`Cannot sequence collection: ${collection}`);
  }
}

function into(target, collection, xform) {
  switch (true) {
    case isArray(target):
      return transduce(collection, xform, ARRAY_REDUCER, target);
    case isObject(target):
      return transduce(collection, xform, OBJECT_REDUCER, target);
    case isString(target):
      return transduce(collection, xform, STRING_REDUCER, target);
    case isImplemented(target, "step"):
      return transduce(collection, xform, target, target);
    default:
      throw Error(`Cannot reduce collection into ${target}: ${collection}`);
  }
}

function compose(...fns) {
  const reversed = fns.reverse();
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
  compose
};
