/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

/**
 * Transducers for dropping some number of elements at the beginning of a
 * collection.
 *
 * @module xduce/drop
 * @private
 */

import { protocols as p, toTransducer } from "@chanko/xdcore";
import { parseNumberArgs, parseFunctionArgs } from "modules/utils";
import { sequence } from "modules/transduction";

/**
 * Creates a new collection consisting of all of the elements of the input
 * collection *except* for the first `n` elements.
 *
 * While this could be considered an opposite of
 * `{@link module:xduce.take|take}`, there is one difference: `drop` cannot
 * return a finite collection when provided an infinite one.
 *
 * If no collection is provided, a transducer function is returned that can be
 * passed to `{@link module:xduce.sequence|sequence}`, et al.
 *
 * ```
 * const result = drop([1, 2, 3, 4, 5], 3);
 * console.log(result);   // -> [4, 5]
 * ```
 *
 * @memberof module:xduce
 * @param {module:xduce.Collection} [collection] An optional input collection
 *     that is to be transduced.
 * @param {number} n The number of elements at the beginning of the input
 *     collection that should be discarded in the output collection.
 * @returns {(module:xduce.Collection|module:xdcore.TransducerFunction)} If a
 *     collection is supplied, then the function returns a new collection of the
 *     same type without its first `n` elements. If no collection is supplied, a
 *     transducer function, suitable for passing to
 *     `{@link module:xduce.sequence|sequence}`,
 *     `{@link module:xduce.into|into}`, etc. is returned.
 */
function drop(collection, n) {
  const [col, num] = parseNumberArgs(collection, n);
  return col
    ? sequence(col, drop(num))
    : next => {
        let i = 0;
        return toTransducer(
          (acc, value) => (i++ < num ? acc : next[p.step](acc, value)),
          next
        );
      };
}

/**
 * Creates a new collection containing the elements of the input collection
 * including the first one that causes a predicate function to return `false`
 * and all elements thereafter.
 *
 * This is rather the opposite of `{@link module:xduce.takeWhile|takeWhile}`,
 * though unlike that function, this one cannot return a finite collection when
 * given an infinite one.
 *
 * If no collection is provided, a transducer function is returned that can be
 * passed to `{@link module:xduce.sequence|sequence}`, et al.
 *
 * ```
 * const array = [2, 4, 6, 8, 1, 3, 5, 7, 9, 10];
 * const even = x => x % 2 === 0;
 *
 * let result = dropWhile(array, even);
 * console.log(result);   // -> [1, 3, 5, 7, 9, 10];
 * ```
 *
 * @memberof module:xduce
 * @param {module:xduce.Collection} [collection] An optional input collection
 *     that is to be transduced.
 * @param {function} fn A predicate function. This takes each element of the
 *     input collection and returns `true` or `false` based on that element. The
 *     first one to return `false` is the first element of the output
 *     collection.
 * @returns {(module:xduce.Collection|module:xdcore.TransducerFunction)} If a
 *     collection is supplied, then the function returns a new collection of the
 *     same type with some of the elements of the input collection dropped. If
 *     no collection is supplied, a transducer function, suitable for passing to
 *     `{@link module:xduce.sequence|sequence}`,
 *     `{@link module:xduce.into|into}`, etc. is returned.
 */
function dropWhile(collection, fn) {
  const [col, func] = parseFunctionArgs(collection, fn);
  return col
    ? sequence(col, dropWhile(func))
    : next => {
        let dropping = true;
        return toTransducer((acc, value) => {
          if (dropping) {
            if (func(value)) {
              return acc;
            }
            dropping = false;
          }
          return next[p.step](acc, value);
        }, next);
      };
}

export { drop, dropWhile };
