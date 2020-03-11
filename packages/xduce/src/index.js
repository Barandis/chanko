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
  compose
} from "modules/transduction";
export { identity, flatten, repeat } from "modules/basic";
export { drop, dropWhile } from "modules/drop";
export { filter, reject } from "modules/filter";
export { map, flatMap } from "modules/map";
export { take, takeWhile, takeNth } from "modules/take";
