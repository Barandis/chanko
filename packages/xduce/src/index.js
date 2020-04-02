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
