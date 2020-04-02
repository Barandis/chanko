/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

/**
 * Transducers for dropping some number of elements at the end of a collection.
 *
 * @module xduce/take
 * @private
 */

import { protocols as p, toTransducer, ensureCompleted } from "@chanko/xdcore";
import { parseNumberArgs, parseFunctionArgs } from "modules/utils";
import { sequence } from "modules/transduction";

/**
 * Creates a new collection containing only the first `n` elements of the input
 * collection.
 *
 * Note that this is an excellent way to turn an 'infinite' collection - one
 * that doesn't have a well-defined end, like a stream, channel, or infinite
 * generator - into a finite collection.
 *
 * If no collection is provided, a transducer function is returned that can be
 * passed to `{@link module:xduce.sequence|sequence}`, et al.
 *
 * ```
 * // An iterator that will return every positive integer, one at a time
 * function* naturals() {
 *   let x = 1;
 *   while (true) {
 *     yield x++;
 *   }
 * }
 *
 * const result = take(naturals(), 3);
 * // result is now an iterator that has only three values in it
 * console.log(result.next().value);  // -> 1
 * console.log(result.next().value);  // -> 2
 * console.log(result.next().value);  // -> 3
 * console.log(result.next().done);   // -> true
 * ```
 *
 * @memberof module:xduce
 * @param {module:xduce.Collection} [collection] An optional input collection
 *     that is to be transduced.
 * @param {number} n The number of elements at the beginning of the input
 *     collection that should be kept in the output collection.
 * @returns {(module:xduce.Collection|module:xdcore.TransducerFunction)} If a
 *     collection is supplied, then the function returns a new collection of the
 *     same type containing only the first `n` elements. If no collection is
 *     supplied, a transducer function, suitable for passing to
 *     `{@link module:xduce.sequence|sequence}`,
 *     `{@link module:xduce.into|into}`, etc. is returned.
 */
function take(collection, n) {
  const [col, num] = parseNumberArgs(collection, n);
  return col
    ? sequence(col, take(num))
    : next => {
        let i = 0;
        return toTransducer((acc, value) => {
          let result = acc;

          if (i < num) {
            result = next[p.step](acc, value);
            if (i === num - 1) {
              result = ensureCompleted(result);
            }
          }
          i++;
          return result;
        }, next);
      };
}

/**
 * Creates a new collection containing the elements of the input collection up
 * until the first one that causes a predicate function to return `false`.
 *
 * While this is similar to `{@link module:xduce.filter|filter}`, there is one
 * key difference. `takeWhile` will not add any further elements to a collection
 * once the first fails the predicate, including later elements that might pass
 * the predicate. `{@link module:xduce.filter|filter}`, on the other hand, will
 * continue to add those later elements. Therefore `takeWhile` will convert an
 * infinite collection to a finite one while
 * `{@link module:xduce.filter|filter}` cannot.
 *
 * If no collection is provided, a transducer function is returned that can be
 * passed to `{@link module:xduce.sequence|sequence}`, et al.
 *
 * ```
 * const array = [2, 4, 6, 8, 1, 3, 5, 7, 9, 10];
 * const even = x => x % 2 === 0;
 *
 * let result = takeWhile(array, even);
 * console.log(result);  // -> [2, 4, 6, 8];
 *
 * // This shows the difference between takeWhile and filter with the same
 * // parameters
 * result = filter(array, even);
 * console.log(result);  // -> [2, 4, 6, 8, 10];
 * ```
 *
 * @memberof module:xduce
 * @param {module:xduce.Collection} [collection] An optional input collection
 *     that is to be transduced.
 * @param {function} fn A predicate function. This takes each element of the
 *     input collection and returns `true` or `false` based on that element. The
 *     first one to return `false` is the first element of the input collection
 *     that does *not* appear in the output collection.
 * @returns {(module:xduce.Collection|module:xdcore.TransducerFunction)} If a
 *     collection is supplied, then the function returns a new collection of the
 *     same type with some of the elements of the input collection dropped. If
 *     no collection is supplied, a transducer function, suitable for passing to
 *     `{@link module:xduce.sequence|sequence}`,
 *     `{@link module:xduce.into|into}`, etc. is returned.
 */
function takeWhile(collection, fn) {
  const [col, func] = parseFunctionArgs(collection, fn);
  return col
    ? sequence(col, takeWhile(func))
    : next =>
        toTransducer(
          (acc, value) =>
            func(value) ? next[p.step](acc, value) : ensureCompleted(acc),
          next
        );
}

/**
 * Creates a new collection consisting of the first element of the input
 * collection, and then every `n`th element after that.
 *
 * Note that unlike `{@link module:xduce.take|take}` and
 * `{@link module:xduce.takeWhile|takeWhile}`, this function is not capable of
 * returning a finite collection when given an infinite collection.
 *
 * If no collection is provided, a transducer function is returned that can be
 * passed to `{@link module:xduce.sequence|sequence}`, et al.
 *
 * ```
 * const result = takeNth([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);
 * console.log(result);  // -> [1, 4, 7, 10]
 * ```
 *
 * @memberof module:xduce
 * @param {module:xduce.Collection} [collection] An optional input collection
 *     that is to be transduced.
 * @param {number} n The skip value. Every `n`th element of the input
 *     collection, after the first, will be a part of the output collection.
 * @return {(module:xduce.Collection|module:xdcore.TransducerFunction)} If a
 *     collection is supplied, then the function returns a new collection of the
 *     same type containing only every `n` elements. If no collection is
 *     supplied, a transducer function, suitable for passing to
 *     `{@link module:xduce.sequence|sequence}`,
 *     `{@link module:xduce.into|into}`, etc. is returned.
 */
function takeNth(collection, n) {
  const [col, num] = parseNumberArgs(collection, n);
  return col
    ? sequence(col, takeNth(num))
    : next => {
        let i = -1;
        return toTransducer(
          (acc, value) => (++i % num === 0 ? next[p.step](acc, value) : acc),
          next
        );
      };
}

export { take, takeWhile, takeNth };
