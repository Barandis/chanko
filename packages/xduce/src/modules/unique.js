/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

/**
 * Transducers for rejecting repeated elements in a collection.
 *
 * @module xduce/unique
 * @private
 */

import { protocols as p, toTransducer } from "@chanko/xdcore";
import { parseFunctionArgs, sameValueZero } from "modules/utils";
import { sequence } from "modules/transduction";

/**
 * Removes all duplicates from a collection, using a comparator function to
 * determine what's unique.
 *
 * Comparisons are made by passing each pair of elements to the function, which
 * must take two parameters and return a boolean indicating whether or not the
 * values are equal. As an example, the `{@link module:xduce.unique|unique}`
 * transducer could be regarded as the same as this transducer, with a
 * {@link http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero|SameValueZero}
 * function serving as the comparator.
 *
 * If no collection is provided, a transducer function is returned that can be
 * passed to `{@link module:xduce.sequence|sequence}`, et al.
 *
 * ```
 * // magnitude returns the number of digits in a number
 * function magnitude(x) {
 *   return Math.floor(Math.log(x) / Math.LN10 + 0.000000001);
 * }
 * function comparator(a, b) {
 *   return magnitude(a) === magnitude(b);
 * }
 *
 * // Returns only the first value of each magnitude
 * const result = uniqueWith([1, 10, 100, 42, 56, 893, 1111, 1000], comparator);
 * console.log(result);  // -> [1, 10, 100, 1111]
 * ```
 *
 * @memberof module:xduce
 * @param {module:xduce.Collection} [collection] An optional input collection
 *     that is to be transduced.
 * @param {function} fn A comparator function. This takes two arguments and
 *     returns `true` if they're to be regarded as equal.
 * @returns {(module:xduce.Collection|module:xdcore.TransducerFunction)} If a
 *     collection is supplied, then the function returns a new collection of the
 *     same type with all of the elements of the input collection transformed.
 *     If no collection is supplied, a transducer function, suitable for passing
 *     to `{@link module:xduce.sequence|sequence}`,
 *     `{@link module:xduce.into|into}`, etc. is returned.
 */
function uniqueWith(collection, fn) {
  const [col, func] = parseFunctionArgs(collection, fn);
  return col
    ? sequence(col, uniqueWith(func))
    : next => {
        const uniques = [];
        return toTransducer((acc, value) => {
          if (uniques.some(u => func(value, u))) {
            return acc;
          }
          uniques.push(value);
          return next[p.step](acc, value);
        }, next);
      };
}

/**
 * Applies a function each element of a collection and removes elements that
 * create duplicate return values.
 *
 * Once the function is applied to the collection elements, a comparison is made
 * using
 * {@link http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero|SameValueZero}.
 * If a comparison indicates that the return value from the function for one
 * element is the same as the return value for another element, only the first
 * element is retained in the output collection.
 *
 * Also note that even though the function can cause a completely different
 * value to be compared, the *element* (not the return value of the function) is
 * what is added to the output collection.
 *
 * A very common use for `uniqueBy` is to refer to a particular property in an
 * array of objects. Another is to do a case-insensitive comparison by passing a
 * function that turns every letter in a string to the same case. However, it
 * can be used in any number of different ways, depending on the function used.
 *
 * If no collection is provided, a transducer function is returned that can be
 * passed to `{@link module:xduce.sequence|sequence}`, et al.
 *
 * ```
 * var array = [{x: 1}, {x: 1}, {x: 2}, {x: 3}, {x: 3}, {x: 3},
 *              {x: 4}, {x: 5}, {x: 3}, {x: 1}, {x: 5}];
 *
 * var result = uniqueBy(array, obj => obj.x);
 * console.log(result);  // -> [{x: 1}, {x: 2}, {x: 3}, {x: 4}, {x: 5}]
 *
 * // Comparison is case-insensitive, the duplicate letter retained is the first
 * // one that appears. This is why 'N' is present in the output, not 'n', for
 * // example.
 * result = uniqueBy('aNtidiseSTablIshmENtaRianiSM', x => x.toLowerCase());
 * console.log(result);  // -> 'aNtidseblhmR'
 * ```
 *
 * @memberof module:xduce
 * @param {module:xduce.Collection} [collection] An optional input collection
 *     that is to be transduced.
 * @param {function} fn A function of one parameter applied to each element in
 *     the input collection before testing the results for uniqueness.
 * @returns {(module:xduce.Collection|module:xdcore.TransducerFunction)} If a
 *     collection is supplied, then the function returns a new collection of the
 *     same type with all of the elements of the input collection transformed.
 *     If no collection is supplied, a transducer function, suitable for passing
 *     to `{@link module:xduce.sequence|sequence}`,
 *     `{@link module:xduce.into|into}`, etc. is returned.
 */
function uniqueBy(collection, fn) {
  const [col, func] = parseFunctionArgs(collection, fn);
  return uniqueWith(col, (a, b) => sameValueZero(func(a), func(b)));
}

/**
 * Removes all duplicates from a collection.
 *
 * Once an element is added to the output collection, an equal element will
 * never be added to the output collection again. 'Equal' according to this
 * transformer is a
 * {@link http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero|SameValueZero}
 * comparison.
 *
 * If no collection is provided, a transducer function is returned that can be
 * passed to `{@link module:xduce.sequence|sequence}`, et al.
 *
 * ```
 * var result = unique([1, 1, 2, 3, 3, 3, 4, 5, 3, 1, 5]);
 * console.log(result);  // -> [1, 2, 3, 4, 5];
 * ```
 *
 * @memberof module:xduce
 * @param {module:xduce.Collection} [collection] An optional input collection
 *     that is to be transduced.
 * @returns {(module:xduce.Collection|module:xdcore.TransducerFunction)} If a
 *     collection is supplied, then the function returns a new collection of the
 *     same type with all of the elements of the input collection transformed.
 *     If no collection is supplied, a transducer function, suitable for passing
 *     to `{@link module:xduce.sequence|sequence}`,
 *     `{@link module:xduce.into|into}`, etc. is returned.
 */
function unique(collection) {
  return uniqueWith(collection, sameValueZero);
}

export { unique, uniqueBy, uniqueWith };
