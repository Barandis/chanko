/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

/**
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
