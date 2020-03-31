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
 * @module core/utils
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
 * @memberof module:xduce-tools
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
 * @memberof module:xduce-tools
 * @param {*} x The value being tested to see if it is a generator function.
 * @return {boolean} Either `true` if the test value is a generator function or
 *     `false` if it is not.
 * @private
 */
function isGeneratorFunction(x) {
  return toString.call(x) === "[object GeneratorFunction]";
}

/**
 * Determines whether a value is a plain object.
 *
 * This function returns `false` if the value is any other sort of built-in
 * object (such as an array or a string). It also returns `false` for any object
 * that is created by a constructor that is not `Object`'s constructor, meaning
 * that "instances" of custom "classes" will return `false`. Therefore it's only
 * going to return `true` for literal objects or those created with
 * `Object.create()`.
 *
 * @memberof module:xduce-tools
 * @param {*} x The value being tested to see if it is a plain object.
 * @return {boolean} Either `true` if the test value is a plain object or
 *     `false` if it is not.
 */
function isObject(x) {
  // This check excludes built-in non-Object objects (such as Array and String).
  // It also excludes objects created from ES2015 classes, but it does not
  // exclude objects created with `new` on constructor functions (that happens
  // below).
  if (toString.call(x) !== "[object Object]") {
    return false;
  }

  // Prototype-less objects (created with `Object.create(null))` pass
  const proto = Object.getPrototypeOf(x);
  if (proto === null) {
    return true;
  }

  // Check to see whether the constructor of the tested object is the Object
  // constructor. This is the only constructor that produces a "plain" object.
  const ctor =
    Object.prototype.hasOwnProperty.call(proto, "constructor") &&
    proto.constructor;
  return typeof ctor === "function" && ctor === Object;
}

/**
 * Determines whether a value is a number.
 *
 * This function will return `true` for any number literal or instance of
 * `Number` except for `Infinity` or `NaN`. It will return `false` for strings
 * that happen to also be numbers; the value must be an actual `Number` instance
 * or number literal to return `true`.
 *
 * @memberof module:xduce-tools
 * @param {*} x The value being tested to see if it is a number.
 * @return {boolean} Either `true` if the test value is a finite number (not
 *     including string representations of numbers) or `false` if it is not.
 */
function isNumber(x) {
  return toString.call(x) === "[object Number]" && isFinite(x);
}

/**
 * Determines whether a value is a string.
 *
 * Literal strings will return `true`, as will instances of the `String` object.
 *
 * @memberof module:xduce-tools
 * @param {*} x The value being tested to see if it is a string.
 * @return {boolean} Either `true` if the test value is a string or `false` if
 *    it is not.
 */
function isString(x) {
  return toString.call(x) === "[object String]";
}

/**
 * Determines whether a value is an array.
 *
 * This function merely delegates to `Array.isArray`. It is provided for
 * consistency in calling style only.
 *
 * @function isArray
 * @memberof module:xduce-tools
 * @param {*} x The value being tested to see if it is an array.
 * @return {boolean} Either `true` if the test value is an array or `false` if
 *     it is not.
 */
const isArray = Array.isArray;

export {
  isFunction,
  isGeneratorFunction,
  isObject,
  isNumber,
  isString,
  isArray
};