/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { isNumber, isFunction } from "@chanko/core";

function sameValueZero(a, b) {
  return a === b || (isNaN(a) && isNaN(b));
}

function parseNumberArgs(collection, n) {
  return isNumber(collection) ? [null, collection] : [collection, n];
}

function parseFunctionArgs(collection, fn, ctx) {
  return isFunction(collection)
    ? [null, collection.bind(fn)]
    : [collection, fn.bind(ctx)];
}

/**
 * A convenience function that returns the first key and value in an object as a
 * two-property object, one property for the key and one for the value. This is
 * intended to work with the values provided by an object iterator, as the
 * syntax of objects doesn't work very nicely with single-property objects.
 *
 * ```
 * const obj = { c: 1, a: 2, b: 3 };
 * const iter = iterator(obj);
 *
 * let value = iter.next().value;
 * console.log(value);             // -> { c: 1 }
 * console.log(property(value));   // -> { k: "c", v: 1 }
 *
 * value = iter.next().value;
 * console.log(value);             // -> { a: 2 }
 * console.log(property(value));   // -> { k: "a", v: 2 }
 *
 * value = iter.next().value;
 * console.log(value);             // -> { b: 3 }
 * console.log(property(value));   // -> { k: "b", v: 3 }
 * ```
 *
 * @memberof module:xduce
 * @param {object} obj The object whose first property is returned.
 * @return {module:core.PropertyObject} The property as a two-property object.
 */
function kv(obj) {
  const key = Object.keys(obj)[0];
  return { k: key, v: obj[key] };
}

/**
 * A convenience function that returns the key of the first property of an
 * object. This is meant for use with object iterators to more conveniently
 * access parts of the single-property objects that they emit.
 *
 * @memberof module:xduce
 * @param {object} obj The object whose first key is returned.
 * @return {(String|Symbol)} The key of the object's first property.
 */
function key(obj) {
  return kv(obj).k;
}

/**
 * A convenience function that returns the value of the first property of an
 * object. This is meant for use with object iterators to more conveniently
 * access parts of the single-property objects that they emit.
 *
 * @memberof module:xduce
 * @param {object} obj The object whose first value is returned.
 * @return {*} The value of the object's first property.
 */
function value(obj) {
  return kv(obj).v;
}

export { sameValueZero, parseNumberArgs, parseFunctionArgs, kv, key, value };
