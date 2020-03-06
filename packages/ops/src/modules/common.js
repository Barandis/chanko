/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

/**
 * Utility functions used by more than one other module.
 *
 * @module chanko/operations/common
 * @private
 */

/**
 * Determines whether the value passed is a finite number.
 *
 * @param {*} x The value to check.
 * @return {boolean} Either `true` if the value is a finite number or `false`
 *     if it is not.
 * @private
 */
export function isNumber(x) {
  return Object.prototype.toString.call(x) === "[object Number]" && isFinite(x);
}
