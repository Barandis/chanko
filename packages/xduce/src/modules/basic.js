/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import {
  protocols as p,
  isCompleted,
  complete,
  isIterable,
  reduce,
  toTransducer
} from "@chanko/xdcore";

import { parseNumberArgs } from "modules/utils";
import { sequence } from "modules/transduction";

/**
 * Returns exactly the same collection sent to it.
 *
 * This is generally a function used when a transducer function is required but
 * there is no desire to do an actual transformation. The "transformation"
 * implemented here is to pass each element through exactly as it is.
 *
 * If no collection is provided, a function is returned that can be passed to
 * `{@link module:xduce.sequence|sequence}`, et al.
 *
 * ```
 * const result = identity([1, 2, 3, 4, 5]);
 * console.log(result);   // -> [1, 2, 3, 4, 5]
 * ```
 *
 * @memberof module:xduce
 * @param {module:xduce.Collection} [collection] An optional input collection
 *     that is to be transduced.
 * @return {(module:xduce.Collection|module:xduce.TransducerFunction)} If a
 *     collection is supplied, then the function returns a new collection of the
 *     same type with all of the elements of the input collection untouched. If
 *     no collection is supplied, a transducer function, suitable for passing to
 *     `{@link module:xduce.sequence|sequence}`,
 *     `{@link module:xduce.into|into}`, etc. is returned.
 */
function identity(collection) {
  return collection
    ? sequence(collection, identity())
    : next => toTransducer((acc, value) => next[p.step](acc, value), next);
}

/**
 * Flattens a collection by merging elements in any sub-collection into the main
 * collection.
 *
 * Elements of the main collection that are not collections themselves are not
 * changed. It's fine to have a combination of the two, some elements that are
 * collections and some that are not. If an element is a collection that
 * contains other collections, those collections will *not* be flattened; the
 * flattening only happens to one level.
 *
 * Since there aren't sub-collections in objects, strings, or iterators,
 * `flatten` doesn't make sense with those types of collections.
 *
 * If no collection is provided, a function is returned that can be passed to
 * `{@link module:xduce.sequence|sequence}`, et al.
 *
 * ```
 * const result = flatten([[1, 2], [3, 4, 5], 6, [7]]);
 * console.log(reuslt);   // -> [1, 2, 3, 4, 5, 6, 7]
 *
 * const result = flatten([[1, 2], [3, [4, 5]], 6, [7]]);
 * console.log(reuslt);   // -> [1, 2, 3, [4, 5], 6, 7]
 * ```
 *
 * @memberof module:xduce.transducers
 * @param {module:xduce.Collection} [collection] An optional input collection
 *     that is to be transduced.
 * @return {(module:xduce.Collection|module:xduce.TransducerFunction)} If a
 *     collection is supplied, then the function returns a new collection of the
 *     same type with all of the elements of the input collection flattened. If
 *     no collection is supplied, a transducer function, suitable for passing to
 *     `{@link module:xduce.sequence|sequence}`,
 *     `{@link module:xduce.into|into}`, etc. is returned.
 */
function flatten(collection) {
  return collection
    ? sequence(collection, flatten())
    : next =>
        toTransducer((acc, value) => {
          const subTransducer = toTransducer((acc, value) => {
            const v = next[p.step](acc, value);
            return isCompleted(v) ? complete(v) : v;
          }, next);

          return isIterable(value)
            ? reduce(value, subTransducer, acc)
            : subTransducer[p.step](acc, value);
        }, next);
}

/**
 * Repeats each element from the input collection `n` times in the output
 * collection.
 *
 * These elements are put into the main output collection, not into
 * subcollections. In other words, each input element creates `n` output
 * elements.
 *
 * If no collection is provided, a function is returned that can be passed to
 * `{@link module:xduce.sequence|sequence}`, et al.
 *
 * ```
 * const result = repeat([1, 2, 3, 4, 5], 3);
 * console.log(result);   // -> [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5]
 * ```
 *
 * @memberof module:xduce
 * @param {module:xduce.Collection} [collection] An optional input collection
 *     that is to be transduced.
 * @param {number} n The number of times that each element from the input
 *     collection should be repeated in the output collection.
 * @return {(module:xduce.Collection|module:xduce.TransducerFunction)} If a
 *     collection is supplied, then the function returns a new collection of the
 *     same type with all of the elements of the input collection repeated. If
 *     no collection is supplied, a transducer function, suitable for passing to
 *     `{@link module:xduce.sequence|sequence}`,
 *     `{@link module:xduce.into|into}`, etc. is returned.
 */
function repeat(collection, n) {
  const [col, num] = parseNumberArgs(collection, n);
  return col
    ? sequence(col, repeat(num))
    : next =>
        toTransducer((acc, value) => {
          let result = acc;
          for (let i = 0; i < num; i++) {
            result = next[p.step](result, value);
            if (isCompleted(result)) {
              break;
            }
          }
          return result;
        }, next);
}

export { identity, flatten, repeat };
