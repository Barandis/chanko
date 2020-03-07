/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { isImplemented, protocols as p } from "modules/protocol";
import { isString, isArray, isObject, isFunction } from "modules/utils";
import { property, iterator } from "modules/iteration";

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

function step(collection) {
  switch (true) {
    case isImplemented(collection, "step"):
      return collection[p.step];

    case isString(collection):
      return (acc, input) => {
        const value = isObject(input) ? property(input).v : input;
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
          const max = Object.keys(acc).reduce((a, b) => Math.max(a, b));
          value = { [max + 1]: input };
        }

        const { k, v } = property(value);
        acc[k] = v;
        return acc;
      };

    case isFunction(collection):
      return (acc, input) => collection(acc, input);

    default:
      return null;
  }
}

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

function toReducer(collection) {
  return Object.freeze({
    [p.init]: init(collection),
    [p.step]: step(collection),
    [p.result]: result(collection)
  });
}

const ARRAY_REDUCER = toReducer([]);
const OBJECT_REDUCER = toReducer({});
const STRING_REDUCER = toReducer("");

function toFunction(xform, reducer) {
  const r = typeof reducer === "function" ? toReducer(reducer) : reducer;
  const result = xform(r);
  return result[p.step].bind(result);
}

function complete(value) {
  return {
    [p.reduced]: true,
    [p.value]: value
  };
}

function uncomplete(value) {
  return value?.[p.value];
}

function isCompleted(value) {
  return !!value?.[p.reduced];
}

function ensureCompleted(value) {
  return isCompleted(value) ? value : complete(value);
}

function ensureUncompleted(value) {
  return isCompleted(value) ? uncomplete(value) : value;
}

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
  toFunction,
  complete,
  uncomplete,
  isCompleted,
  ensureCompleted,
  ensureUncompleted,
  reduce
};
