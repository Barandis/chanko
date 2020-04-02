/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

/**
 * Transducers for using functions to determine new values of collection
 * elements.
 *
 * @module xduce/map
 * @private
 */

import { protocols as p, toTransducer } from "@chanko/xdcore";
import { parseFunctionArgs } from "modules/utils";
import { sequence, compose } from "modules/transduction";
import { flatten } from "modules/basic";

/**
 * Creates a new collection whose values are the results of mapping input
 * collection elements over a function.
 *
 * If no collection is provided, a transducer function is returned that can be
 * passed to `{@link module:xduce.sequence|sequence}`, et al.
 *
 * ```
 * const result = map([1, 2, 3, 4, 5], x => x * x);
 * console.log(result);   // -> [1, 4, 9, 16, 25]
 * ```
 *
 * @memberof module:xduce
 * @param {module:xduce.Collection} [collection] An optional input collection
 *     that is to be transduced.
 * @param {function} fn A function that is supplied each input collection
 *     element in turn. The return values of this function become the elements
 *     of the output collection.
 * @returns {(module:xduce.Collection|module:xdcore.TransducerFunction)} If a
 *     collection is supplied, then the function returns a new collection of the
 *     same type containing the return values of `fn` when passed those
 *     elements. If no collection is supplied, a transducer function, suitable
 *     for passing to `{@link module:xduce.sequence|sequence}`,
 *     `{@link module:xduce.into|into}`, etc. is returned.
 */
function map(collection, fn) {
  const [col, func] = parseFunctionArgs(collection, fn);
  return col
    ? sequence(col, map(func))
    : next =>
        toTransducer((acc, value) => next[p.step](acc, func(value)), next);
}

/**
 * A map function that flattens any collections among the return values.
 *
 * This is a composition of `{@link module:xduce.map|map}` and
 * `{@link module:xduce.flatten|flatten}`. In fact it could be defined by the
 * user by using those two functions with
 * `{@link module:xduce.compose|compose}`, but the concept of a flatmap is so
 * fundamental that it's included separately.
 *
 * Because the map is followed by flattening, there are the same notes as with
 * `{@link module:xduce.flatten|flatten}`; this function doesn't make a lot of
 * sense with functions that return objects, strings, or iterators.
 *
 * If no collection is provided, a transducer function is returned that can be
 * passed to `{@link module:xduce.sequence|sequence}`, et al.
 *
 * ```
 * const duplicate = x => [x, x];
 *
 * let result = flatMap([1, 2, 3, 4, 5], duplicate);
 * console.log(result);   // -> [1, 1, 2, 2, 3, 3, 4, 4, 5, 5]
 *
 * // The following is equivalent
 * const fn = compose(map(duplicate), flatten());
 * result = sequence([1, 2, 3, 4, 5], fn);
 * console.log(result);   // -> [1, 1, 2, 2, 3, 3, 4, 4, 5, 5]
 *
 * // To illustrate the difference from `map`, here's what `map` would do with
 * // the same parameters
 * result = map([1, 2, 3, 4, 5], duplicate);
 * console.log(result);   // -> [[1, 1], [2, 2], [3, 3], [4, 4], [5, 5]]
 * ```
 *
 * @memberof module:xduce
 * @param {module:xduce.Collection} [collection] An optional input collection
 *     that is to be transduced.
 * @param {function} fn A function that is supplied each input collection
 *     element in turn. The return values of this function are flattened to
 *     become the elements of the output collection.
 * @returns {(module:xduce.Collection|module:xdcore.TransducerFunction)} If a
 *     collection is supplied, then the function returns a new collection of the
 *     same type containing those elements, mapped and flattened. If no
 *     collection is supplied, a transducer function, suitable for passing to
 *     `{@link module:xduce.sequence|sequence}`,
 *     `{@link module:xduce.into|into}`, etc. is returned.
 */
function flatMap(collection, fn) {
  const [col, func] = parseFunctionArgs(collection, fn);
  return col
    ? sequence(col, compose(map(func), flatten()))
    : compose(map(func), flatten());
}

export { map, flatMap };
