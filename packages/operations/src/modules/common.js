/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

export function isNumber(x) {
  return Object.prototype.toString.call(x) === "[object Number]" && isFinite(x);
}
