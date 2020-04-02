/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

/**
 * Transducers for rejecting repeated consecutive elements in a collection.
 *
 * @module xduce/distinct
 * @private
 */

import { protocols as p, toTransducer } from "@chanko/xdcore";
import { parseFunctionArgs, sameValueZero } from "modules/utils";
import { sequence } from "modules/transduction";

/**
 * A constant indicating no value at all.
 *
 * @private
 * @type {Symbol}
 */
const NO_VALUE = Symbol("NO_VALUE");

/**
 * Applies a comparator function to consecutive elements of a collection and
 * removes the second if the comparator indicates they're equal.
 *
 * Comparisons are made by passing each pair of elements to the function, which
 * must take two parameters and return a boolean indicating whether or not the
 * values are equal. As an example, the `{@link module:xduce.distinct|distinct}`
 * transducer could be regarded as the same as this transformer, with a
 * {@link http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero|SameValueZero}
 * function serving as the comparator.
 *
 * This is different from `{@link module:xduce.uniqueWith|uniqueWith}` in that
 * this transform only eliminates consecutive duplicate elements, not all
 * duplicate elements.
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
 * let result = distinctWith([1, 10, 100, 42, 56, 893, 1111, 1000], comparator);
 * console.log(result);   // -> [1, 10, 100, 42, 893, 1111]
 *
 * // Compare to uniueqWith with the same parameters
 * result = uniqueWith([1, 10, 100, 42, 56, 893, 1111, 1000], comparator);
 * console.log(result);   // -> [1, 10, 100, 1111]
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
function distinctWith(collection, fn) {
  const [col, func] = parseFunctionArgs(collection, fn);
  return col
    ? sequence(col, distinctWith(func))
    : next => {
        let last = NO_VALUE;
        return toTransducer((acc, value) => {
          if (last !== NO_VALUE && func(value, last)) {
            return acc;
          }
          last = value;
          return next[p.step](acc, value);
        }, next);
      };
}

/**
 * Applies a function each element of a collection and removes consecutive
 * elements that create duplicate return values.
 *
 * Once the function is applied to the collection elements, a comparison is made
 * using
 * {@link http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero|SameValueZero}.
 * If a comparison indicates that the return value from the function for one
 * element is the same as the return value for the element that comes right
 * before it, only the first element is retained in the output collection.
 *
 * Also note that even though the function can cause a completely different
 * value to be compared, the *element* (not the return value of the function) is
 * what is added to the output collection.
 *
 * A very common use for `distinctBy` is to refer to a particular property in an
 * array of objects. Another is to do a case-insensitive comparison by passing a
 * function that turns every letter in a string to the same case. However, it
 * can be used in any number of different ways, depending on the function used.
 *
 * This is different from `{@link module:xduce.uniqueBy|uniqueBy}` in that this
 * transform only eliminates consecutive duplicate elements, not all duplicate
 * elements.
 *
 * If no collection is provided, a transducer function is returned that can be
 * passed to `{@link module:xduce.sequence|sequence}`, et al.
 *
 * ```
 * const array = [{x: 1}, {x: 1}, {x: 2}, {x: 3}, {x: 3}, {x: 3},
 *                {x: 4}, {x: 5}, {x: 3}, {x: 1}, {x: 5}];
 *
 * let result = distinctBy(array, obj => obj.x);
 * console.log(result);  // -> [{x: 1}, {x: 2}, {x: 3}, {x: 4}, {x: 5}, {x: 3}, {x: 1}, {x: 5}]
 *
 * // Compare to uniqueBy for the same parameters
 * result = uniqueBy(array, obj => obj.x);
 * console.log(result);  // -> [{x: 1}, {x: 2}, {x: 3}, {x: 4}, {x: 5}]
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
function distinctBy(collection, fn) {
  const [col, func] = parseFunctionArgs(collection, fn);
  return distinctWith(col, (a, b) => sameValueZero(func(a), func(b)));
}

/**
 * Removes consecutive duplicate elements from a collection.
 *
 * This differs from `{@link module:xduce.unique|unique}` in that an element is
 * removed only if it equals the element *immediately preceeding* it.
 * Comparisons between elements are done with
 * {@link http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero|SameValueZero}.
 *
 * If no collection is provided, a function is returned that can be passed to
 * `{@link module:xduce.sequence|sequence}`, et al.
 *
 * ```
 * let result = distinct([1, 1, 2, 3, 3, 3, 4, 5, 3, 1, 5]);
 * console.log(result);  // -> [1, 2, 3, 4, 5, 3, 1, 5];
 *
 * // Compare to unique with the same input
 * result = unique([1, 1, 2, 3, 3, 3, 4, 5, 3, 1, 5]);
 * console.log(result);  // -> [1, 2, 3, 4, 5];
 * ```
 *
 * @memberof module:xduce
 * @param {module:xduce.Collection} [collection] An optional input collection
 *     that is to be transduced.
 * @returns {(module:xduce.Collection|module:xdcore.TransducerFunction)}} If a
 *     collection is supplied, then the function returns a new collection of the
 *     same type with all of the elements of the input collection transformed.
 *     If no collection is supplied, a transducer function, suitable for passing
 *     to `{@link module:xduce.sequence|sequence}`,
 *     `{@link module:xduce.into|into}`, etc. is returned.
 */
function distinct(collection) {
  return distinctWith(collection, sameValueZero);
}

export { distinct, distinctBy, distinctWith };
