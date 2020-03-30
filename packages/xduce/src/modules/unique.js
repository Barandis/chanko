/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { protocols as p, toTransducer } from "@chanko/xdcore";
import { parseFunctionArgs, sameValueZero } from "modules/utils";
import { sequence } from "modules/transduction";

function uniqueWith(collection, fn) {
  const [col, func] = parseFunctionArgs(collection, fn);
  return col
    ? sequence(col, uniqueWith(func))
    : xform => {
        const uniques = [];
        return toTransducer((acc, value) => {
          if (uniques.some(u => func(value, u))) {
            return acc;
          }
          uniques.push(value);
          return xform[p.step](acc, value);
        }, xform);
      };
}

function uniqueBy(collection, fn) {
  const [col, func] = parseFunctionArgs(collection, fn);
  return uniqueWith(col, (a, b) => sameValueZero(func(a), func(b)));
}

function unique(collection) {
  return uniqueWith(collection, sameValueZero);
}

export { unique, uniqueBy, uniqueWith };
