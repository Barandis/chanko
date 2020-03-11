/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import {
  expect,
  ARRAY_5,
  OBJECT_AB,
  LIST_5,
  expectIterator,
  five,
  naturals
} from "test/helper";

import { toReducer } from "@chanko/core";

import { value } from "modules/utils";
import { filter, reject } from "modules/filter";
import { sequence, transduce } from "modules/transduction";

const even = x => x % 2 === 0;
const evenValue = obj => value(obj) % 2 === 0;
const lcase = x => x === x.toLowerCase();

describe("Filtering transducers", () => {
  context("filter", () => {
    it("works with arrays", () => {
      expect(filter(ARRAY_5, even)).to.deep.equal([2, 4]);
    });

    it("works with objects", () => {
      expect(filter(OBJECT_AB, evenValue)).to.deep.equal({ b: 2 });
    });

    it("works with strings", () => {
      expect(filter("HeLlO WORld", lcase)).to.equal("el ld");
    });

    it("works with generators", () => {
      expectIterator(filter(five(), even), [2, 4]);
    });

    it("works lazily with generators", () => {
      const iter = filter(naturals(), even);
      expect(iter.next().value).to.equal(2);
      expect(iter.next().value).to.equal(4);
      expect(iter.next().value).to.equal(6);
    });

    it("works with reducibles", () => {
      expect(filter(LIST_5, even).toArray()).to.deep.equal([2, 4]);
    });

    it("can create a transducer function", () => {
      const result = sequence(ARRAY_5, filter(even));
      expect(result).to.deep.equal([2, 4]);
    });

    it("passes init calls to the next transducer", () => {
      const reducer = filter(even)(toReducer([]));
      const result = transduce(ARRAY_5, null, reducer);
      expect(result).to.deep.equal([2, 4]);
    });
  });

  context("reject", () => {
    it("works with arrays", () => {
      expect(reject(ARRAY_5, even)).to.deep.equal([1, 3, 5]);
    });

    it("works with objects", () => {
      expect(reject(OBJECT_AB, evenValue)).to.deep.equal({ a: 1 });
    });

    it("works with strings", () => {
      expect(reject("HeLlO WORld", lcase)).to.equal("HLOWOR");
    });

    it("works with generators", () => {
      expectIterator(reject(five(), even), [1, 3, 5]);
    });

    it("works lazily with generators", () => {
      const iter = reject(naturals(), even);
      expect(iter.next().value).to.equal(1);
      expect(iter.next().value).to.equal(3);
      expect(iter.next().value).to.equal(5);
    });

    it("works with reducibles", () => {
      expect(reject(LIST_5, even).toArray()).to.deep.equal([1, 3, 5]);
    });

    it("can create a transducer function", () => {
      const result = sequence(ARRAY_5, reject(even));
      expect(result).to.deep.equal([1, 3, 5]);
    });

    it("passes init calls to the next transducer", () => {
      const reducer = reject(even)(toReducer([]));
      const result = transduce(ARRAY_5, null, reducer);
      expect(result).to.deep.equal([1, 3, 5]);
    });
  });
});
