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

import { List } from "immutable";
import { toReducer } from "@chanko/core";

import { key, value, kv } from "modules/utils";
import { map, flatMap } from "modules/map";
import { sequence, transduce } from "modules/transduction";

const add1 = x => x + 1;
const ucaseKey = obj => ({ [key(obj).toUpperCase()]: value(obj) + 1 });
const ucase = x => x.toUpperCase();

describe("Mapping transducers", () => {
  context("map", () => {
    it("works with arrays", () => {
      expect(map(ARRAY_5, add1)).to.deep.equal([2, 3, 4, 5, 6]);
    });

    it("works with objects", () => {
      expect(map(OBJECT_AB, ucaseKey)).to.deep.equal({ A: 2, B: 3 });
    });

    it("works with strings", () => {
      expect(map("hello", ucase)).to.equal("HELLO");
    });

    it("works with generators", () => {
      expectIterator(map(five(), add1), [2, 3, 4, 5, 6]);
    });

    it("works lazily with generators", () => {
      const iter = map(naturals(), add1);
      expect(iter.next().value).to.equal(2);
      expect(iter.next().value).to.equal(3);
      expect(iter.next().value).to.equal(4);
    });

    it("works with reducibles", () => {
      expect(map(LIST_5, add1).toArray()).to.deep.equal([2, 3, 4, 5, 6]);
    });

    it("can create a transducer function", () => {
      const result = sequence(ARRAY_5, map(add1));
      expect(result).to.deep.equal([2, 3, 4, 5, 6]);
    });

    it("passes init calls to the next transducer", () => {
      const reducer = map(add1)(toReducer([]));
      const result = transduce(ARRAY_5, null, reducer);
      expect(result).to.deep.equal([2, 3, 4, 5, 6]);
    });
  });

  context("flatMap", () => {
    context("when passed a function that returns scalars", () => {
      it("works with arrays", () => {
        expect(flatMap(ARRAY_5, add1)).to.deep.equal([2, 3, 4, 5, 6]);
      });

      it("works with objects", () => {
        expect(flatMap(OBJECT_AB, ucaseKey)).to.deep.equal({ A: 2, B: 3 });
      });

      it("works with strings", () => {
        expect(flatMap("hello", ucase)).to.equal("HELLO");
      });

      it("works with generators", () => {
        expectIterator(flatMap(five(), add1), [2, 3, 4, 5, 6]);
      });

      it("works lazily with generators", () => {
        const iter = flatMap(naturals(), add1);
        expect(iter.next().value).to.equal(2);
        expect(iter.next().value).to.equal(3);
        expect(iter.next().value).to.equal(4);
      });

      it("works with redcibles", () => {
        expect(flatMap(LIST_5, add1).toArray()).to.deep.equal([2, 3, 4, 5, 6]);
      });

      it("can create a transducer function", () => {
        const result = sequence(ARRAY_5, flatMap(add1));
        expect(result).to.deep.equal([2, 3, 4, 5, 6]);
      });
    });

    context("when passed a function that returns collections", () => {
      it("works with arrays", () => {
        const fn = x => [x, x + 1];
        expect(flatMap(ARRAY_5, fn)).to.deep.equal([
          1,
          2,
          2,
          3,
          3,
          4,
          4,
          5,
          5,
          6
        ]);
      });

      it("works with arrays when the function returns strings", () => {
        const fn = x => `${x}${x + 1}`;
        expect(flatMap(ARRAY_5, fn)).to.deep.equal([
          "1",
          "2",
          "2",
          "3",
          "3",
          "4",
          "4",
          "5",
          "5",
          "6"
        ]);
      });

      it("works with objects", () => {
        const fn = obj => {
          const { k, v } = kv(obj);
          return {
            [k]: v + 1,
            [k + k]: (v + 1) * 10
          };
        };
        const result = flatMap(OBJECT_AB, fn);
        expect(result).to.deep.equal({ a: 2, aa: 20, b: 3, bb: 30 });
      });

      it("works with objects when the funciton returns an array", () => {
        const fn = obj => {
          const { k, v } = kv(obj);
          return [{ [k]: v + 1 }, { [k + k]: (v + 1) * 10 }];
        };
        const result = flatMap(OBJECT_AB, fn);
        expect(result).to.deep.equal({ a: 2, aa: 20, b: 3, bb: 30 });
      });

      it("works with strings", () => {
        const fn = x => x + x.toLowerCase() + x.toUpperCase();
        expect(flatMap("Hello", fn)).to.equal("HhHeeEllLllLooO");
      });

      it("works with generators", () => {
        const fn = x => [x, x + 1];
        expectIterator(flatMap(five(), fn), [1, 2, 2, 3, 3, 4, 4, 5, 5, 6]);
      });

      it("works lazily with generators", () => {
        const iter = flatMap(naturals(), x => [x, x + 1]);
        expect(iter.next().value).to.equal(1);
        expect(iter.next().value).to.equal(2);
        expect(iter.next().value).to.equal(2);
        expect(iter.next().value).to.equal(3);
        expect(iter.next().value).to.equal(3);
      });

      it("works with reducibles", () => {
        const result = flatMap(LIST_5, x => List.of(x, x + 1));
        expect(result.toArray()).to.deep.equal([1, 2, 2, 3, 3, 4, 4, 5, 5, 6]);
      });

      it("works with reducibles when the function returns an array", () => {
        const result = flatMap(LIST_5, x => [x, x + 1]);
        expect(result.toArray()).to.deep.equal([1, 2, 2, 3, 3, 4, 4, 5, 5, 6]);
      });

      it("can create a transducer function", () => {
        const result = sequence(
          ARRAY_5,
          flatMap(x => [x, x + 1])
        );
        expect(result).to.deep.equal([1, 2, 2, 3, 3, 4, 4, 5, 5, 6]);
      });

      it("passes init calls to the next transducer", () => {
        const reducer = flatMap(x => [x, x + 1])(toReducer([]));
        const result = transduce(ARRAY_5, null, reducer);
        expect(result).to.deep.equal([1, 2, 2, 3, 3, 4, 4, 5, 5, 6]);
      });
    });
  });
});
