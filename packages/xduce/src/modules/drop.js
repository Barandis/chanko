/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { protocols as p, toTransducer } from "@chanko/xdcore";
import { parseNumberArgs, parseFunctionArgs } from "modules/utils";
import { sequence } from "modules/transduction";

function drop(collection, n) {
  const [col, num] = parseNumberArgs(collection, n);
  return col
    ? sequence(col, drop(num))
    : next => {
        let i = 0;
        return toTransducer(
          (acc, value) => (i++ < num ? acc : next[p.step](acc, value)),
          next
        );
      };
}

function dropWhile(collection, fn) {
  const [col, func] = parseFunctionArgs(collection, fn);
  return col
    ? sequence(col, dropWhile(func))
    : next => {
        let dropping = true;
        return toTransducer((acc, value) => {
          if (dropping) {
            if (func(value)) {
              return acc;
            }
            dropping = false;
          }
          return next[p.step](acc, value);
        }, next);
      };
}

export { drop, dropWhile };
