/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { protocols as p, toTransducer, ensureCompleted } from "@chanko/core";

import { parseNumberArgs, parseFunctionArgs } from "modules/utils";
import { sequence } from "modules/transduction";

function take(collection, n) {
  const [col, num] = parseNumberArgs(collection, n);
  return col
    ? sequence(col, take(num))
    : xform => {
        let i = 0;
        return toTransducer((acc, value) => {
          let result = acc;

          if (i < num) {
            result = xform[p.step](acc, value);
            if (i === num - 1) {
              result = ensureCompleted(result);
            }
          }
          i++;
          return result;
        }, xform);
      };
}

function takeWhile(collection, fn, ctx) {
  const [col, func] = parseFunctionArgs(collection, fn, ctx);
  return col
    ? sequence(col, takeWhile(func))
    : xform =>
        toTransducer(
          (acc, value) =>
            func(value) ? xform[p.step](acc, value) : ensureCompleted(acc),
          xform
        );
}

function takeNth(collection, n) {
  const [col, num] = parseNumberArgs(collection, n);
  return col
    ? sequence(col, takeNth(num))
    : xform => {
        let i = -1;
        return toTransducer(
          (acc, value) => (++i % num === 0 ? xform[p.step](acc, value) : acc),
          xform
        );
      };
}

export { take, takeWhile, takeNth };
