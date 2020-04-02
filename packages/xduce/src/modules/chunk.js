/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

/**
 * Transducers related to breaking input elements into groups.
 *
 * @module xduce/chunk
 * @private
 */

import { protocols as p, ensureUncompleted } from "@chanko/xdcore";
import {
  parseNumberArgs,
  parseFunctionArgs,
  sameValueZero
} from "modules/utils";
import { sequence } from "modules/transduction";

/**
 * A constant indicating no value at all.
 *
 * @private
 * @type {Symbol}
 */
const NO_VALUE = Symbol("NO_VALUE");

/**
 * Groups the elements of the input collection into arrays of length `n` in the
 * output collection.
 *
 * Whatever the type of input collection, the groups inside the output
 * collection will always be arrays (the output collection itself will still be
 * definable as normal). Because of this, `chunk` doesn't do anything meaningful
 * to collection types that cannot contain arrays (strings and objects, for
 * instance).
 *
 * If there are not enough remaining elements in the input collection to create
 * a chunk of the proper size in the output collection, the last chunk in the
 * output will only be large enough to contain those remaining elements.
 *
 * `chunk` works on iterators (it returns a new iterator whose values are
 * arrays), but the function has no way of knowing when the end of an iterator
 * comes unless it happens to be at the same place as the last element of a
 * chunk. For example, if an iterator has six values and it gets `chunk`ed into
 * groups of three, the function will terminate correctly (because the last
 * value of the iterator coincides with the last element of one of the chunks).
 * However, if the same iterator had only five values, `chunk` would not
 * terminate properly. It would return `[1, 2, 3]` for the first chunk, `[4, 5]`
 * for the second chunk, and then `[4, 5]` over and over ad infinitum.
 *
 * A workaround is to compose `chunk` with a previous
 * `{@link module:xduce.take|take}` with the same `n` as the length of the
 * iterator. Since `{@link module:xduce.take|take}` knows when it's reached the
 * right number of elements, it can communicate that to `chunk`.
 *
 * Another is to check the length of the chunk after each call to `next` on the
 * iterator. If it's less than the size of the chunk, then it must be the last
 * one.
 *
 * `chunk` works as expected on infinite iterators because they don't have
 * issues with determining the end of the iterator because it doesn't have one.
 *
 * If no collection is provided, a transducer function is returned that can be
 * passed to `{@link module:xduce.sequence|sequence}`, et al.
 *
 * ```
 * const result = chunk([1, 2, 3, 4, 5], 3);
 * console.log(result);  // -> [[1, 2, 3], [4, 5]]
 * ```
 *
 * @memberof module:xduce
 * @param {module:xduce.Collection} [collection] An optional input collection
 *     that is to be transduced.
 * @param {number} n The number of elements that should be in each array in the
 *     output collection.
 * @returns {(module:xduce.Collection|module:xdcore.TransducerFunction)} If a
 *     collection is supplied, then the function returns a new collection of the
 *     same type with all of the elements of the input collection chunked. If no
 *     collection is supplied, a transducer function, suitable for passing to
 *     `{@link module:xduce.sequence|sequence}`,
 *     `{@link module:xduce.into|into}`, etc. is returned.
 */
function chunk(collection, n) {
  const [col, num] = parseNumberArgs(collection, n);
  return col
    ? sequence(col, chunk(num))
    : next => {
        let count = 0;
        let part = [];

        return {
          [p.init]() {
            return next[p.init]();
          },

          [p.step](acc, value) {
            part[count++] = value;
            if (count === num) {
              const out = part.slice(0, num);
              part = [];
              count = 0;
              return next[p.step](acc, out);
            }
            return acc;
          },

          [p.final](value) {
            if (count > 0) {
              return ensureUncompleted(
                next[p.step](value, part.slice(0, count))
              );
            }
            return next[p.final](value);
          }
        };
      };
}

/**
 * Breaks the elements of an input collection into arrays of consecutive
 * elements that return the same value from a predicate function.
 *
 * Whatever the type of input collection, the groups inside the output
 * collection will always be arrays (the output collection itself will still be
 * of the same type as the input collection). Because of this, `chunkBy` doesn't
 * do anything meaningful to collection types that cannot contain arrays
 * (strings and objects, for instance).
 *
 * Unlike `{@link module:xduce.chunk|chunk}`, this function does not know how
 * many elements will be in each array until the first one that turns out to be
 * part of the next array. Therefore, for the same reasons as in
 * `{@link module:xduce.chunk|chunk}` above, an iterator result is never
 * terminated. This works fine for infinite iterators, but finite iterators
 * should be treated with care. The same `{@link module:xduce.chunk|chunk}`
 * workaround with `{@link module:xduce.take|take}` works with `chunkBy` as
 * well.
 *
 * ```
 * const result = chunkBy([0, 1, 1, 2, 3, 5, 8, 13, 21, 34], x => x % 2 === 0);
 * console.log(result);  // -> [[0], [1, 1], [2], [3, 5], [8], [13, 21], [34]]
 * ```
 *
 * @memberof module:xduce
 * @param {module:xduce.Collection} [collection] An optional input collection
 *     that is to be transduced.
 * @param {function} fn The function that defines when a chunk ends and the next
 *     chunk begins.
 * @returns {(module:xduce.Collection|module:xdcore.TransducerFunction)} If a
 *     collection is supplied, then the function returns a new collection of the
 *     same type with all of the elements of the input collection chunked. If no
 *     collection is supplied, a transducer function, suitable for passing to
 *     `{@link module:xduce.sequence|sequence}`,
 *     `{@link module:xduce.into|into}`, etc. is returned.
 */
function chunkBy(collection, fn) {
  const [col, func] = parseFunctionArgs(collection, fn);
  return col
    ? sequence(col, chunkBy(func))
    : next => {
        let part = [];
        let last = NO_VALUE;

        return {
          [p.init]() {
            return next[p.init]();
          },

          [p.step](acc, value) {
            const current = func(value);
            let result = acc;
            if (last === NO_VALUE || sameValueZero(current, last)) {
              part.push(value);
            } else {
              result = next[p.step](result, part);
              part = [value];
            }
            last = current;
            return result;
          },

          [p.final](value) {
            const count = part.length;
            if (count > 0) {
              return ensureUncompleted(
                next[p.step](value, part.slice(0, count))
              );
            }
            return next[p.final](value);
          }
        };
      };
}

export { chunk, chunkBy };
