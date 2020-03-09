/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import {
  protocols as p,
  isCompleted,
  complete,
  isIterable,
  reduce,
  toTransducer
} from "@chanko/core";

import { parseNumberArgs } from "modules/utils";
import { sequence } from "modules/transduction";

function identity(collection) {
  return collection
    ? sequence(collection, identity())
    : xform => toTransducer((acc, value) => xform[p.step](acc, value), xform);
}

function flatten(collection) {
  return collection
    ? sequence(collection, flatten())
    : xform =>
        toTransducer((acc, value) => {
          const subXform = toTransducer((acc, value) => {
            const v = xform[p.step](acc, value);
            return isCompleted(v) ? complete(v) : v;
          }, xform);

          return isIterable(value)
            ? reduce(value, subXform, acc)
            : subXform[p.step](acc, value);
        }, xform);
}

function repeat(collection, n) {
  const [col, num] = parseNumberArgs(collection, n);
  return col
    ? sequence(col, repeat(num))
    : xform =>
        toTransducer((acc, value) => {
          let result = acc;
          for (let i = 0; i < num; i++) {
            result = xform[p.step](result, value);
            if (isCompleted(result)) {
              break;
            }
          }
          return result;
        }, xform);
}

export { identity, flatten, repeat };
