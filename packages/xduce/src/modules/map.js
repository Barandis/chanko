/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { protocols as p, toTransducer } from "@chanko/xdcore";
import { parseFunctionArgs } from "modules/utils";
import { sequence, compose } from "modules/transduction";
import { flatten } from "modules/basic";

function map(collection, fn) {
  const [col, func] = parseFunctionArgs(collection, fn);
  return col
    ? sequence(col, map(func))
    : next =>
        toTransducer((acc, value) => next[p.step](acc, func(value)), next);
}

function flatMap(collection, fn) {
  const [col, func] = parseFunctionArgs(collection, fn);
  return col
    ? sequence(col, compose(map(func), flatten()))
    : compose(map(func), flatten());
}

export { map, flatMap };
