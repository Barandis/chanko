/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import chai, { expect } from "chai";
import sinonChai from "sinon-chai";
import { List } from "immutable";

import { protocols as p } from "modules/protocol";
import { ensureCompleted } from "modules/reduction";

chai.use(sinonChai);

List.prototype[p.init] = () => List().asMutable();
List.prototype[p.step] = (acc, value) => acc.push(value);
List.prototype[p.result] = value => value.asImmutable();

const ARRAY_5 = [1, 2, 3, 4, 5];
const OBJECT_AB = { a: 1, b: 2 };
const LIST_5 = List.of(1, 2, 3, 4, 5);

function toArray(iterator) {
  const result = [];
  let item;
  while (!(item = iterator.next()).done) {
    result.push(item.value);
  }
  return result;
}

function* five() {
  for (const i of [1, 2, 3, 4, 5]) {
    yield i;
  }
}

function* naturals() {
  let i = 1;
  for (;;) {
    yield i++;
  }
}

function expectIterator(iterator, expected) {
  for (const item of expected) {
    expect(iterator.next().value).to.deep.equal(item);
  }
  expect(iterator.next().done).to.be.true;
}

function expectWithin(value, expected, tolerance = 0.001) {
  expect(value).to.be.within(expected - tolerance, expected + tolerance);
}

function mapTransducer(fn, xform) {
  return {
    [p.init]() {
      return xform[p.init]();
    },
    [p.step](acc, value) {
      return xform[p.step](acc, fn(value));
    },
    [p.result](value) {
      return xform[p.result](value);
    }
  };
}
function map(fn) {
  return xform => mapTransducer(fn, xform);
}

function filterTransducer(fn, xform) {
  return {
    [p.init]() {
      return xform[p.init]();
    },
    [p.step](acc, value) {
      return fn(value) ? xform[p.step](acc, value) : acc;
    },
    [p.result](value) {
      return xform[p.result](value);
    }
  };
}
function filter(fn) {
  return xform => filterTransducer(fn, xform);
}

function takeTransducer(n, xform) {
  let i = 0;

  return {
    [p.init]() {
      return xform[p.init]();
    },
    [p.step](acc, value) {
      let result = acc;

      if (i < n) {
        result = xform[p.step](acc, value);
        if (i === n - 1) {
          result = ensureCompleted(result);
        }
      }
      i++;
      return result;
    },
    [p.result](value) {
      return xform[p.result](value);
    }
  };
}
function take(n) {
  return xform => takeTransducer(n, xform);
}

export {
  expect,
  ARRAY_5,
  OBJECT_AB,
  LIST_5,
  toArray,
  five,
  naturals,
  expectIterator,
  expectWithin,
  map,
  filter,
  take
};
