/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { protocols as p, toTransducer, ensureCompleted } from "@chanko/xdcore";
import { parseNumberArgs, parseFunctionArgs } from "modules/utils";
import { sequence } from "modules/transduction";

function take(collection, n) {
  const [col, num] = parseNumberArgs(collection, n);
  return col
    ? sequence(col, take(num))
    : next => {
        let i = 0;
        return toTransducer((acc, value) => {
          let result = acc;

          if (i < num) {
            result = next[p.step](acc, value);
            if (i === num - 1) {
              result = ensureCompleted(result);
            }
          }
          i++;
          return result;
        }, next);
      };
}

function takeWhile(collection, fn) {
  const [col, func] = parseFunctionArgs(collection, fn);
  return col
    ? sequence(col, takeWhile(func))
    : next =>
        toTransducer(
          (acc, value) =>
            func(value) ? next[p.step](acc, value) : ensureCompleted(acc),
          next
        );
}

function takeNth(collection, n) {
  const [col, num] = parseNumberArgs(collection, n);
  return col
    ? sequence(col, takeNth(num))
    : next => {
        let i = -1;
        return toTransducer(
          (acc, value) => (++i % num === 0 ? next[p.step](acc, value) : acc),
          next
        );
      };
}

export { take, takeWhile, takeNth };
