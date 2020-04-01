/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

/**
 * Functions to help with iteration over iterable objects and plain objects.
 *
 * @module xdcore/iteration
 * @private
 */

import { isImplemented } from "modules/protocol";
import { isFunction, isObject, isGeneratorFunction } from "modules/utils";

/**
 * Creates an iterator over an object.
 *
 * Details about this function are included in the documentation for
 * {@link module:xdcore.iterator|iterator}.
 *
 * @param {object} obj The object being iterated over.
 * @returns {external:Iterator} An iterator over the properties of `obj`.
 * @private
 */
function objectIterator(obj) {
  return (function*() {
    const keys = Object.keys(obj);
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
 * {@link module:xdcore.iterator|iterator}.
 *
 * @param {module:xdcore.IterableFunction} fn The function to iterate over.
 * @returns {external:Iterator} An iterator over the return values of `fn`.
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
 * Creates an iterator over the provided value. The form of the iteration
 * depends on what kind of value is being iterated over.
 *
 * If the value is a collection implementing the [iterable protocol][1] (arrays,
 * strings, generators, or a custom object supporting the protocol) then the
 * produced iterator will be as expected: an object that implements the
 * [iterator protocol][2] by providing a `next` function that returns each
 * collection value in turn.
 *
 * ```
 * const iter = iterator([1, 2, 3]);
 * console.log(iter.next().value);   // -> 1
 * console.log(iter.next().value);   // -> 2
 * console.log(iter.next().value);   // -> 3
 * console.log(iter.next().done);    // -> true
 * ```
 *
 * Special support is provided for two types that are not normally iterable:
 * objects and functions.
 *
 * Objects result in an iterator that produces a single-property object for
 * every key/value pair in the supplied object. The [order of iteration][3] is
 * the same as it is for objects post-ES2015:
 *
 * 1. String keys that are integer indices in ascending numerical order
 * 2. All other string keys in the order in which they were added to the object
 * 3. All symbol keys in the order in which they were added to the object
 *
 * ```
 * const obj = {
 *   [Symbol("first")]: true,
 *   02: true,
 *   10: true,
 *   01: true,
 *   2: true,
 *   [Symbol("second")]: true
 * };
 * const iter = iterator(obj);
 * console.log(iter.next().value);   // -> { '2': true }
 * console.log(iter.next().value);   // -> { '10': true }
 * console.log(iter.next().value);   // -> { '02': true }
 * console.log(iter.next().value);   // -> { '01': true }
 * console.log(iter.next().value);   // -> { [Symbol('first')]: true }
 * console.log(iter.next().value);   // -> { [Symbol('second')]: true }
 * console.log(iter.next().done);    // -> true
 * ```
 *
 * Functions are run each time the iterator's `next` method is called, and the
 * return value of the function is supplied as the iterator's value at that
 * point.
 *
 * This function is provided two arguments: the zero-based index of that
 * iteration, and the value produced by the last invocation of the iterator. The
 * last value is `undefined` on the first pass, but a default parameter on the
 * function can define the first pass value to be whatever is needed.
 *
 * ```
 * const fn = (index, last = 1) => last * (index + 1);
 * const iter = iterator(fn);
 * console.log(iter.next().value);   // -> 1
 * console.log(iter.next().value);   // -> 2
 * console.log(iter.next().value);   // -> 6
 * console.log(iter.next().value);   // -> 24
 * console.log(iter.next().value);   // -> 120
 * ```
 *
 * Iterators created from functions are, by default, infinite since there is no
 * condition for them to not be able to be applied one more time. To create a
 * finite iterator from a function, have it return `undefined` at some point.
 * When a return value of `undefined` is encountered, `iterator` will terminate
 * the iterator, setting its next `done` property to `true`.
 *
 * If the input value is neither iterable, object, or function, then the result
 * will be `null`.
 *
 * [1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterable_protocol
 * [2]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol
 * [3]: https://2ality.com/2015/10/property-traversal-order-es6.html
 *
 * @memberof module:xdcore
 * @param {(object|module:xdcore.IterableFunction|external:Iterable)} value
 *     The value to create an iterator over.
 * @returns {external:Iterator} An iterator over `value`.
 */
function iterator(value) {
  switch (true) {
    case isFunction(value[Symbol.iterator]):
    case isGeneratorFunction(value[Symbol.iterator]):
      return value[Symbol.iterator]();
    case isFunction(value):
      return functionIterator(value);
    case isObject(value):
      return objectIterator(value);
    default:
      return null;
  }
}

/**
 * Determines whether the passed object is iterable, in terms of what 'iterable'
 * means to this library. In other words, values implementing the `iterable`
 * protocol and plain objects return `true`, while everything else returns
 * `false`. This does not return `true` for functions even though
 * {@link module:xdcore.iterator|iterator} can produce an iterator for them,
 * because not all functions work well with
 * {@link module:xdcore.iterator|iterator}.
 *
 * @memberof module:xdcore
 * @param {*} value The value to test for iterability.
 * @return {boolean} Either `true` if the value is iterable
 *     (`{@link module:xdcore.iterator|iterator}` will return an iterator for
 *     it) or `false` if it is not.
 */
function isIterable(value) {
  return isImplemented(value, "iterator") || isObject(value);
}

export { iterator, isIterable };
