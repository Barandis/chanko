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
  expectIterator,
  LIST_5,
  five,
  naturals
} from "test/helper";

import { drop, dropWhile } from "modules/drop";
import { value, complement } from "modules/utils";
import { sequence, transduce, toReducer } from "modules/transduction";

const lt4 = x => x < 4;
const lt4Value = obj => value(obj) < 4;
const isVowel = x => "aeiou".includes(x);

describe("Dropping transducers", () => {
  context("drop", () => {
    it("works with arrays", () => {
      expect(drop(ARRAY_5, 3)).to.deep.equal([4, 5]);
    });

    it("works with objects", () => {
      expect(drop(OBJECT_AB, 1)).to.deep.equal({ b: 2 });
    });

    it("works with strings", () => {
      expect(drop("hello", 3)).to.equal("lo");
    });

    it("works with generators", () => {
      expectIterator(drop(five(), 3), [4, 5]);
    });

    it("works lazily with generators", () => {
      const iter = drop(naturals(), 3);
      expect(iter.next().value).to.equal(4);
      expect(iter.next().value).to.equal(5);
      expect(iter.next().value).to.equal(6);
    });

    it("works with reducibles", () => {
      expect(drop(LIST_5, 3).toArray()).to.deep.equal([4, 5]);
    });

    it("can create a transducer function", () => {
      const result = sequence(ARRAY_5, drop(3));
      expect(result).to.deep.equal([4, 5]);
    });

    it("passes init calls to the next transducer", () => {
      const reducer = drop(3)(toReducer([]));
      const result = transduce(ARRAY_5, null, reducer);
      expect(result).to.deep.equal([4, 5]);
    });
  });

  context("dropWhile", () => {
    it("works with arrays", () => {
      expect(dropWhile(ARRAY_5, lt4)).to.deep.equal([4, 5]);
    });

    it("works with objects", () => {
      expect(dropWhile({ a: 1, b: 2, c: 6 }, lt4Value)).to.deep.equal({ c: 6 });
    });

    it("works with strings", () => {
      expect(dropWhile("strawberry", complement(isVowel))).to.equal("awberry");
    });

    it("works with generators", () => {
      expectIterator(dropWhile(five(), lt4), [4, 5]);
    });

    it("works lazily with generators", () => {
      const iter = dropWhile(naturals(), lt4);
      expect(iter.next().value).to.equal(4);
      expect(iter.next().value).to.equal(5);
      expect(iter.next().value).to.equal(6);
    });

    it("works with reducibles", () => {
      expect(dropWhile(LIST_5, lt4).toArray()).to.deep.equal([4, 5]);
    });

    it("can create a transducer function", () => {
      const result = sequence(ARRAY_5, dropWhile(lt4));
      expect(result).to.deep.equal([4, 5]);
    });

    it("passes init calls to the next transducer", () => {
      const reducer = dropWhile(lt4)(toReducer([]));
      const result = transduce(ARRAY_5, null, reducer);
      expect(result).to.deep.equal([4, 5]);
    });
  });
});
