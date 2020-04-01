/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { protocols as p, ensureUncompleted } from "@chanko/xdcore";
import {
  parseNumberArgs,
  parseFunctionArgs,
  sameValueZero
} from "modules/utils";
import { sequence } from "modules/transduction";

const NO_VALUE = Symbol("NO_VALUE");

function chunk(collection, n) {
  const [col, num] = parseNumberArgs(collection, n);
  return col
    ? sequence(col, chunk(num))
    : next => {
        let count = 0;
        let part = [];

        return {
          [p.init]() {
            return next[p.init]();
          },

          [p.step](acc, value) {
            part[count++] = value;
            if (count === num) {
              const out = part.slice(0, num);
              part = [];
              count = 0;
              return next[p.step](acc, out);
            }
            return acc;
          },

          [p.final](value) {
            if (count > 0) {
              return ensureUncompleted(
                next[p.step](value, part.slice(0, count))
              );
            }
            return next[p.final](value);
          }
        };
      };
}

function chunkBy(collection, fn) {
  const [col, func] = parseFunctionArgs(collection, fn);
  return col
    ? sequence(col, chunkBy(func))
    : next => {
        let part = [];
        let last = NO_VALUE;

        return {
          [p.init]() {
            return next[p.init]();
          },

          [p.step](acc, value) {
            const current = func(value);
            let result = acc;
            if (last === NO_VALUE || sameValueZero(current, last)) {
              part.push(value);
            } else {
              result = next[p.step](result, part);
              part = [value];
            }
            last = current;
            return result;
          },

          [p.final](value) {
            const count = part.length;
            if (count > 0) {
              return ensureUncompleted(
                next[p.step](value, part.slice(0, count))
              );
            }
            return next[p.final](value);
          }
        };
      };
}

export { chunk, chunkBy };
