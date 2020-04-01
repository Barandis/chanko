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
  five,
  naturals,
  LIST_5
} from "test/helper";

import { List } from "immutable";

import { take, takeWhile, takeNth } from "modules/take";
import { map } from "modules/map";
import { filter } from "modules/filter";
import { sequence, transduce, toReducer, compose } from "modules/transduction";
import { value, complement } from "modules/utils";

const lt4 = x => x < 4;
const lt4Value = obj => value(obj) < 4;
const isVowel = x => "aeiou".includes(x);

describe("Taking transducers", () => {
  context("take", () => {
    it("works with arrays", () => {
      expect(take(ARRAY_5, 3)).to.deep.equal([1, 2, 3]);
    });

    it("works with objects", () => {
      expect(take(OBJECT_AB, 1)).to.deep.equal({ a: 1 });
    });

    it("works with strings", () => {
      expect(take("hello", 3)).to.equal("hel");
    });

    it("works with generators", () => {
      expectIterator(take(five(), 3), [1, 2, 3]);
    });

    it("creates finite iterators from infinite iterators", () => {
      expectIterator(take(naturals(), 3), [1, 2, 3]);
    });

    it("limits infinite iterators when composed", () => {
      const transducerFn1 = compose(
        filter(x => x > 4),
        map(x => x + 2),
        take(3)
      );
      const transducerFn2 = compose(
        take(3),
        filter(x => x % 2 === 0),
        map(x => x + 2)
      );

      expectIterator(sequence(naturals(), transducerFn1), [7, 8, 9]);
      expectIterator(sequence(naturals(), transducerFn2), [4]);
    });

    it("works with reducibles", () => {
      expect(take(LIST_5, 3).toArray()).to.deep.equal([1, 2, 3]);
    });

    it("can create a transducer function", () => {
      const result = sequence(ARRAY_5, take(3));
      expect(result).to.deep.equal([1, 2, 3]);
    });

    it("passes init calls to the next transducer", () => {
      const reducer = take(3)(toReducer([]));
      const result = transduce(ARRAY_5, null, reducer);
      expect(result).to.deep.equal([1, 2, 3]);
    });
  });

  context("takeWhile", () => {
    it("works with arrays", () => {
      expect(takeWhile(ARRAY_5, lt4)).to.deep.equal([1, 2, 3]);
    });

    it("works with objects", () => {
      expect(takeWhile({ a: 1, b: 2, c: 6 }, lt4Value)).to.deep.equal(
        OBJECT_AB
      );
    });

    it("works with strings", () => {
      expect(takeWhile("strawberry", complement(isVowel))).to.equal("str");
    });

    it("works with generators", () => {
      expectIterator(takeWhile(five(), lt4), [1, 2, 3]);
    });

    it("creates finite iterators from infinite iterators", () => {
      expectIterator(takeWhile(naturals(), lt4), [1, 2, 3]);
    });

    it("works with reducibles", () => {
      expect(takeWhile(LIST_5, lt4).toArray()).to.deep.equal([1, 2, 3]);
    });

    it("can create a transducer function", () => {
      const result = sequence(ARRAY_5, takeWhile(lt4));
      expect(result).to.deep.equal([1, 2, 3]);
    });

    it("passes init calls to the next transducer", () => {
      const reducer = takeWhile(lt4)(toReducer([]));
      const result = transduce(ARRAY_5, null, reducer);
      expect(result).to.deep.equal([1, 2, 3]);
    });
  });

  context("takeNth", () => {
    it("works with arrays", () => {
      expect(takeNth([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)).to.deep.equal([
        1,
        4,
        7,
        10
      ]);
    });

    it("works with objects", () => {
      expect(takeNth({ a: 1, b: 2, c: 3 }, 2)).to.deep.equal({ a: 1, c: 3 });
    });

    it("works with strings", () => {
      expect(takeNth("antidisestablishmentarianism", 3)).to.equal("aistlhnrnm");
    });

    it("works with generators", () => {
      expectIterator(takeNth(five(), 3), [1, 4]);
    });

    it("works lazily with generators", () => {
      const iter = takeNth(naturals(), 3);
      expect(iter.next().value).to.equal(1);
      expect(iter.next().value).to.equal(4);
      expect(iter.next().value).to.equal(7);
      expect(iter.next().value).to.equal(10);
      expect(iter.next().value).to.equal(13);
    });

    it("works with reducibles", () => {
      const input = List.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
      const result = takeNth(input, 3);
      expect(result.toArray()).to.deep.equal([1, 4, 7, 10]);
    });

    it("can create a transducer function", () => {
      const result = sequence([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], takeNth(3));
      expect(result).to.deep.equal([1, 4, 7, 10]);
    });

    it("passes init calls to the next transducer", () => {
      const reducer = takeNth(2)(toReducer([]));
      const result = transduce(ARRAY_5, null, reducer);
      expect(result).to.deep.equal([1, 3, 5]);
    });
  });
});
