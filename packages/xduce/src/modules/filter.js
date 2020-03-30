/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { protocols as p, toTransducer } from "@chanko/xdcore";
import { parseFunctionArgs, complement } from "modules/utils";
import { sequence } from "modules/transduction";

function filter(collection, fn) {
  const [col, func] = parseFunctionArgs(collection, fn);
  return col
    ? sequence(col, filter(func))
    : xform =>
        toTransducer(
          (acc, value) => (func(value) ? xform[p.step](acc, value) : acc),
          xform
        );
}

function reject(collection, fn) {
  const [col, func] = parseFunctionArgs(collection, fn);
  return filter(col, complement(func));
}

export { filter, reject };
