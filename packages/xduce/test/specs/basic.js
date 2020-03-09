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
  five,
  naturals,
  expectIterator
} from "test/helper";

import { toReducer } from "@chanko/core";

import { List } from "immutable";

import { identity, flatten, repeat } from "modules/basic";
import { take } from "modules/take";

import { sequence, transduce, compose, into } from "modules/transduction";

describe("Core transducers", () => {
  context("identity", () => {
    it("works with arrays", () => {
      expect(identity(ARRAY_5)).to.deep.equal(ARRAY_5);
    });

    it("works with objects", () => {
      expect(identity(OBJECT_AB)).to.deep.equal(OBJECT_AB);
    });

    it("works with strings", () => {
      expect(identity("hello")).to.equal("hello");
    });

    it("works with generators", () => {
      expectIterator(identity(five()), ARRAY_5);
    });

    it("works lazily with iterators", () => {
      const iter = identity(naturals());
      expect(iter.next().value).to.equal(1);
      expect(iter.next().value).to.equal(2);
      expect(iter.next().value).to.equal(3);
    });

    it("works with reducibles", () => {
      expect(identity(LIST_5).toArray()).to.deep.equal(ARRAY_5);
    });

    it("can create a transducer function", () => {
      expect(sequence(ARRAY_5, identity())).to.deep.equal(ARRAY_5);
    });

    it("passes init calls to the next transducer", () => {
      const reducer = identity()(toReducer([]));
      const result = transduce(ARRAY_5, null, reducer);
      expect(result).to.deep.equal(ARRAY_5);
    });
  });

  context("flatten", () => {
    it("works with arrays", () => {
      expect(
        flatten([
          [1, 2],
          [3, 4]
        ])
      ).to.deep.equal([1, 2, 3, 4]);
    });

    it("works with strings inside arrays", () => {
      expect(flatten(["hello", "world"])).to.deep.equal([
        "h",
        "e",
        "l",
        "l",
        "o",
        "w",
        "o",
        "r",
        "l",
        "d"
      ]);
    });

    it("works with reducibles", () => {
      const list = List.of(List.of(1, 2), List.of(3, 4));
      expect(flatten(list).toArray()).to.deep.equal([1, 2, 3, 4]);
    });

    it("passes values through when they're not collections", () => {
      expect(flatten(ARRAY_5)).to.deep.equal(ARRAY_5);
    });

    it("works when combining collections with scalars", () => {
      expect(flatten([[1, 2], 3, 4, [5]])).to.deep.equal(ARRAY_5);
    });

    it("can create a transducer function", () => {
      const result = sequence([[1, 2], 3, 4, [5]], flatten());
      expect(result).to.deep.equal(ARRAY_5);
    });

    it("works in composition with a completing transducer", () => {
      const xform = compose(take(2), flatten());
      const result = into(
        [],
        [
          [1, 2],
          [3, 4],
          [5, 6],
          [7, 8]
        ],
        xform
      );
      expect(result).to.deep.equal([1, 2, 3, 4]);
    });

    it("passes init calls to the next transducer", () => {
      const reducer = flatten()(toReducer([]));
      const result = transduce([[1, 2], 3, 4, [5]], null, reducer);
      expect(result).to.deep.equal(ARRAY_5);
    });
  });

  context("repeat", () => {
    it("works with arrays", () => {
      expect(repeat(ARRAY_5, 2)).to.deep.equal([1, 1, 2, 2, 3, 3, 4, 4, 5, 5]);
    });

    it("works with objects, though it has no real effect", () => {
      // No effect because you can't have multiple keys of the same name
      expect(repeat(OBJECT_AB, 3)).to.deep.equal(OBJECT_AB);
    });

    it("works with strings", () => {
      expect(repeat("hello", 3)).to.equal("hhheeellllllooo");
    });

    it("works with generators", () => {
      expectIterator(repeat(five(), 2), [1, 1, 2, 2, 3, 3, 4, 4, 5, 5]);
    });

    it("works lazily with generators", () => {
      const iter = repeat(naturals(), 3);
      expect(iter.next().value).to.equal(1);
      expect(iter.next().value).to.equal(1);
      expect(iter.next().value).to.equal(1);
      expect(iter.next().value).to.equal(2);
      expect(iter.next().value).to.equal(2);
    });

    it("works with reducibles", () => {
      const result = repeat(LIST_5, 2);
      expect(result.toArray()).to.deep.equal([1, 1, 2, 2, 3, 3, 4, 4, 5, 5]);
    });

    it("works when composed with a completing transducer", () => {
      const xform = compose(repeat(3), take(5));
      const result = sequence(ARRAY_5, xform);
      expect(result).to.deep.equal([1, 1, 1, 2, 2]);
    });

    it("can create a transducer function", () => {
      const result = sequence(ARRAY_5, repeat(2));
      expect(result).to.deep.equal([1, 1, 2, 2, 3, 3, 4, 4, 5, 5]);
    });

    it("passes init calls to the next transducer", () => {
      const reducer = repeat(2)(toReducer([]));
      const result = transduce(ARRAY_5, null, reducer);
      expect(result).to.deep.equal([1, 1, 2, 2, 3, 3, 4, 4, 5, 5]);
    });
  });
});
