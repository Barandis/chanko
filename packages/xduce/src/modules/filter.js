/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

/**
 * Transducers for removing or retaining certain elements based on their
 * properties.
 *
 * @module xduce/filter
 * @private
 */

import { protocols as p, toTransducer } from "@chanko/xdcore";
import { parseFunctionArgs, complement } from "modules/utils";
import { sequence } from "modules/transduction";

/**
 * Creates a collection containing only the elements from the input collection
 * that pass a predicate function.
 *
 * The elements are not in any way modified. Quite simply, if the predicate
 * returns `true` for an element, it's included in the output collection, and if
 * it returns `false`, that element is not included.
 *
 * If no collection is provided, a transducer function is returned that can be
 * passed to `{@link module:xduce.sequence|sequence}`, et al.
 *
 * ```
 * const even = x => x % 2 === 0; *
 * const result = filter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], even);
 * console.log(result);  // -> [2, 4, 6, 8, 10]
 * ```
 *
 * @memberof module:xduce
 * @param {module:xduce.Collection} [collection] An optional input collection
 *     that is to be transduced.
 * @param {function} fn A predicate function. This takes each element of the
 *     input collection and returns `true` or `false` based on that element.
 *     Each that returns `true` will be included in the output collection.
 * @returns {(module:xduce.Collection|module:xdcore.TransducerFunction)} If a
 *     collection is supplied, then the function returns a new collection of the
 *     same type containing only the elements that pass the predicate function.
 *     If no collection is supplied, a transducer function, suitable for passing
 *     to `{@link module:xduce.sequence|sequence}`,
 *     `{@link module:xduce.into|into}`, etc. is returned.
 */
function filter(collection, fn) {
  const [col, func] = parseFunctionArgs(collection, fn);
  return col
    ? sequence(col, filter(func))
    : next =>
        toTransducer(
          (acc, value) => (func(value) ? next[p.step](acc, value) : acc),
          next
        );
}

/**
 * Creates a collection containing only the elements from the input collection
 * that do not pass a predicate function.
 *
 * This is the opposite of `{@link module:xduce.filter|filter}`. None of the
 * elements of the input collection are modified, and only those for which the
 * predicate returns `false` are included in the output collection.
 *
 * If no collection is provided, a transducer function is returned that can be
 * passed to `{@link module:xduce.sequence|sequence}`, et al.
 *
 * ```
 * const even = x => x % 2 === 0;
 * const result = reject([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], even);
 * console.log(result);   // -> [1, 3, 5, 7, 9]
 * ```
 *
 * @memberof module:xduce
 * @param {module:xduce.Collection} [collection] An optional input collection
 *     that is to be transduced.
 * @param {function} fn A predicate function. This takes each element of the
 *     input collection and returns `true` or `false` based on that element.
 *     Each that returns `false` will be included in the output collection.
 * @returns {(module:xduce.Collection|module:xdcore.TransducerFunction)} If a
 *     collection is supplied, then the function returns a new collection of the
 *     same type containing only the elements that fail the predicate function.
 *     If no collection is supplied, a transducer function, suitable for passing
 *     to `{@link module:xduce.sequence|sequence}`,
 *     `{@link module:xduce.into|into}`, etc. is returned.
 */
function reject(collection, fn) {
  const [col, func] = parseFunctionArgs(collection, fn);
  return filter(col, complement(func));
}

export { filter, reject };
