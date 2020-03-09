/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

/**
 * Functions to help with iteration over iterable objects and plain objects.
 *
 * @module core/iteration
 * @private
 */

import { isImplemented } from "modules/protocol";
import { isFunction, isObject, isGeneratorFunction } from "modules/utils";

/**
 * Creates an iterator over an object.
 *
 * Details about this function are included in the documentation for
 * {@link module:core.iterator|iterator}.
 *
 * @param {object} obj The object being iterated over.
 * @param {module:core.SortFunction} [sortFn] An optional function used to sort
 *     the object keys before iteration. If it isn't provided, the keys will be
 *     sorted in the same order as `Object.keys(obj)` would sort them.
 * @returns {module:core.Iterator} An iterator over the properties of `obj`.
 * @private
 */
function objectIterator(obj, sortFn) {
  return (function*() {
    const keys =
      typeof sortFn === "function"
        ? Object.keys(obj).sort(sortFn)
        : Object.keys(obj);
    let index = 0;

    while (index < keys.length) {
      const k = keys[index++];
      yield { [k]: obj[k] };
    }
  })();
}

/**
 * Creates an iterator over a function.
 *
 * Details about this function are included in the documentation for
 * {@link module:core.iterator|iterator}.
 *
 * @param {module:core.IterableFunction} fn The function to iterate over.
 * @returns {module:core.Iterator} An iterator over the return values of `fn`.
 * @private
 */
function functionIterator(fn) {
  return (function*() {
    let current;
    let index = 0;

    for (;;) {
      current = fn(index++, current);
      if (typeof current === "undefined") {
        break;
      }
      yield current;
    }
  })();
}

/**
 * Creates an iterator over the provided value.
 *
 * For collections that implement the iterable protocol, it's as simple as
 * returning the iterator already defined for that collection.
 *
 * ```
 * const iter = iterator([1, 2, 3]);
 * console.log(iter.next().value);   // -> 1
 * console.log(iter.next().value);   // -> 2
 * console.log(iter.next().value);   // -> 3
 * console.log(iter.next().done);    // -> true
 * ```
 *
 * Objects are specially supported to return an iterator as well, even though
 * they don't natively support the iterable protocol. The iterator's `next`
 * function provides single-property objects, one for each property in the
 * original object, ordered in the standard post-ES6 order for iterating over
 * object keys:
 *
 * 1. Keys that are integers, in ascending numerical order
 * 2. All other string keys, in the order in which they were added to the object
 * 3. All symbol keys, in the order in which they were added to the object
 *
 * If a different order is needed, this function takes a second argument, a sort
 * function, that affects objects only. It is a standard function that would be
 * passed to `Array.prototype.sort` and sorts the keys accordingly.
 *
 * ```
 * const alpha = (a, b) => (a < b ? -1 : b < a ? 1 : 0);
 * const obj = { c: 1, a: 2, b: 3 };
 *
 * const objIter = iterator(obj);
 * console.log(objIter.next().value);   // -> { c: 1 }
 * console.log(objIter.next().value);   // -> { a: 2 }
 * console.log(objIter.next().value);   // -> { b: 3 }
 *
 * const sortedIter = iterator(obj, alpha);
 * console.log(objIter.next().value);   // -> { a: 2 }
 * console.log(objIter.next().value);   // -> { b: 3 }
 * console.log(objIter.next().value);   // -> { c: 1 }
 * ```
 *
 * Additionally, there is special support for passing a function to this
 * function. The iterator returned runs that function for each call to `next`.
 * That function is provided two arguments: the index (starting at `0` for the
 * first call to `next` and increasing by 1 for each call to `next` after) and
 * the return value of the previous call to `next` (for the first call to
 * `next`, this will be `undefined`). The iteration will continue until the
 * first time the iterated function returns `undefined`; at that point the
 * iterator will terminate and return `{ done: true }` off subsequent `next`
 * calls.
 *
 * ```
 * const constIter = iterator(() => 6);
 * console.log(constIter.next().value);   // -> 6
 * console.log(constIter.next().value);   // -> 6
 * // This will continue forever, as long as `next` keeps getting called
 *
 * const indexIter = iterator(x => x * x);
 * console.log(indexIter.next().value);   // -> 0;
 * console.log(indexIter.next().value);   // -> 1;
 * console.log(indexIter.next().value);   // -> 4;
 * console.log(indexIter.next().value);   // -> 9;
 * // This will continue forever or until the numbers get too big for
 * // JavaScript to deal wtih
 *
 * // Using a default value for the `last` parameter, which sets its value
 * // for the first run when it is normally `undefined`
 * const lastIter = iterator((x, last = 1) => last * (x + 1)); // factorial!
 * console.log(lastIter.next().value);   // -> 1
 * console.log(lastIter.next().value);   // -> 2
 * console.log(lastIter.next().value);   // -> 6
 * console.log(lastIter.next().value);   // -> 24
 * // Again, runs forever, though factorials get big very quickly
 *
 * // Iterators terminate when the function returns `undefined`
 * const stopIter = iterator(x => x < 2 ? x : undefined);
 * console.log(stopIter.next().value);   // -> 0
 * console.log(stopIter.next().value);   // -> 1
 * console.log(stopIter.next().done);    // -> true
 * ```
 *
 * If the provided value is not actually iterable (or an object or a function),
 * `null` is returned in place of the iterator.
 *
 * @memberof module:core
 * @param {*} value The value to create an iterator over.
 * @param {module:core.SortFunction} [sortFn] An optional sort function for
 *     sorting the keys of an object before iteration. It is ignored if `value`
 *     isn't a plain object.
 * @returns {module:core.Iterator} An iterator over `value`.
 */
function iterator(value, sortFn = null) {
  switch (true) {
    case isFunction(value[Symbol.iterator]):
    case isGeneratorFunction(value[Symbol.iterator]):
      return value[Symbol.iterator]();
    case isFunction(value):
      return functionIterator(value);
    case isObject(value):
      return objectIterator(value, sortFn);
    default:
      return null;
  }
}

/**
 * Determines whether the passed object is iterable, in terms of what 'iterable'
 * means to this library. In other words, values implementing the `iterable`
 * protocol and plain objects return `true`, while everything else returns
 * `false`. This does not return `true` for functions even though
 * {@link module:core.iterator|iterator} can produce an iterator for them,
 * because not all functions work well with
 * {@link module:core.iterator|iterator}.
 *
 * @memberof module:core
 * @param {*} value The value to test for iterability.
 * @return {boolean} Either `true` if the value is iterable
 *     (`{@link module:core.iterator}` will return an iterator for it) or
 *     `false` if it is not.
 */
function isIterable(value) {
  return isImplemented(value, "iterator") || isObject(value);
}

export { iterator, isIterable };
