/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

/**
 * A bunch of utility functions. These are all used by the library itself in
 * places, but many of them are suitable for general use as well.
 * ^
 * @module common
 * @private
 */

/**
 * `Object`'s `toString` is explicitly used throughout because it could be
 * redefined in any subtype of `Object`.
 *
 * @function toString
 * @private
 */
const toString = Object.prototype.toString;

/**
 * Determines whether a value is a function.
 *
 * @memberof module:xduce/common
 * @param {*} x The value being tested to see if it is a function.
 * @return {boolean} Either `true` if the test value is a function or `false` if
 *     it is not.
 * @private
 */
function isFunction(x) {
  return toString.call(x) === "[object Function]";
}

/**
 * Determines whether a value is a generator function.
 *
 * @memberof module:xduce/common
 * @param {*} x The value being tested to see if it is a generator function.
 * @return {boolean} Either `true` if the test value is a generator function or
 *     `false` if it is not.
 * @private
 */
function isGeneratorFunction(x) {
  return toString.call(x) === "[object GeneratorFunction]";
}

export { isFunction, isGeneratorFunction };
