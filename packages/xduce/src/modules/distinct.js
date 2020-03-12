/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { protocols as p, toTransducer } from "@chanko/core";
import { parseFunctionArgs, sameValueZero } from "modules/utils";
import { sequence } from "modules/transduction";

const NO_VALUE = Symbol("NO_VALUE");

function distinctWith(collection, fn) {
  const [col, func] = parseFunctionArgs(collection, fn);
  return col
    ? sequence(col, distinctWith(func))
    : xform => {
        let last = NO_VALUE;
        return toTransducer((acc, value) => {
          if (last !== NO_VALUE && func(value, last)) {
            return acc;
          }
          last = value;
          return xform[p.step](acc, value);
        }, xform);
      };
}

function distinctBy(collection, fn) {
  const [col, func] = parseFunctionArgs(collection, fn);
  return distinctWith(col, (a, b) => sameValueZero(func(a), func(b)));
}

function distinct(collection) {
  return distinctWith(collection, sameValueZero);
}

export { distinct, distinctBy, distinctWith };
