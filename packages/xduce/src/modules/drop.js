/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { protocols as p, toTransducer } from "@chanko/xduce-tools";
import { parseNumberArgs, parseFunctionArgs } from "modules/utils";
import { sequence } from "modules/transduction";

function drop(collection, n) {
  const [col, num] = parseNumberArgs(collection, n);
  return col
    ? sequence(col, drop(num))
    : xform => {
        let i = 0;
        return toTransducer(
          (acc, value) => (i++ < num ? acc : xform[p.step](acc, value)),
          xform
        );
      };
}

function dropWhile(collection, fn) {
  const [col, func] = parseFunctionArgs(collection, fn);
  return col
    ? sequence(col, dropWhile(func))
    : xform => {
        let dropping = true;
        return toTransducer((acc, value) => {
          if (dropping) {
            if (func(value)) {
              return acc;
            }
            dropping = false;
          }
          return xform[p.step](acc, value);
        }, xform);
      };
}

export { drop, dropWhile };
