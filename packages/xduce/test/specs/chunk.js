/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { expect, ARRAY_5, naturals, expectIterator, LIST_5 } from "test/helper";

import { fromJS } from "immutable";

import { chunk, chunkBy } from "modules/chunk";
import { map } from "modules/map";
import { take } from "modules/take";
import { sequence, transduce, compose, toReducer } from "modules/transduction";
import { value } from "modules/utils";

describe("Chunking transducers", () => {
  context("chunk", () => {
    it("works with arrays", () => {
      expect(chunk(ARRAY_5, 3)).to.deep.equal([
        [1, 2, 3],
        [4, 5]
      ]);
    });

    it("works with objects", () => {
      expect(chunk({ a: 1, b: 2, c: 3, d: 4, e: 5 }, 3)).to.deep.equal({
        0: [{ a: 1 }, { b: 2 }, { c: 3 }],
        1: [{ d: 4 }, { e: 5 }]
      });
    });

    it("works with generators of even length", () => {
      function* six() {
        for (let i = 1; i <= 6; i++) {
          yield i;
        }
      }
      expectIterator(chunk(six(), 3), [
        [1, 2, 3],
        [4, 5, 6]
      ]);
    });

    it("works lazily with generators", () => {
      const iter = chunk(naturals(), 3);
      expect(iter.next().value).to.deep.equal([1, 2, 3]);
      expect(iter.next().value).to.deep.equal([4, 5, 6]);
      expect(iter.next().value).to.deep.equal([7, 8, 9]);
    });

    it("works with reducibles", () => {
      expect(chunk(LIST_5, 3).toArray()).to.deep.equal([
        [1, 2, 3],
        [4, 5]
      ]);
    });

    it("can create a transducer function", () => {
      const result = sequence(ARRAY_5, chunk(3));
      expect(result).to.deep.equal([
        [1, 2, 3],
        [4, 5]
      ]);
    });

    it("works in composition", () => {
      const xform1 = compose(
        map(x => x + 1),
        chunk(3)
      );
      const xform2 = compose(
        chunk(3),
        map(x => x.length)
      );

      expect(sequence(ARRAY_5, xform1)).to.deep.equal([
        [2, 3, 4],
        [5, 6]
      ]);
      expect(sequence(ARRAY_5, xform2)).to.deep.equal([3, 2]);
    });

    it("works in composition with a completing transducer", () => {
      const xform1 = compose(chunk(2), take(2));
      const xform2 = compose(chunk(2), take(3));
      const xform3 = compose(take(4), chunk(2));
      const xform4 = compose(take(4), chunk(3));

      expect(sequence(ARRAY_5, xform1)).to.deep.equal([
        [1, 2],
        [3, 4]
      ]);
      expect(sequence(ARRAY_5, xform2)).to.deep.equal([[1, 2], [3, 4], [5]]);
      expect(sequence(ARRAY_5, xform3)).to.deep.equal([
        [1, 2],
        [3, 4]
      ]);
      expect(sequence(ARRAY_5, xform4)).to.deep.equal([[1, 2, 3], [4]]);
    });

    it("passes init calls to the next transducer", () => {
      const reducer = chunk(3)(toReducer([]));
      const result = transduce(ARRAY_5, null, reducer);
      expect(result).to.deep.equal([
        [1, 2, 3],
        [4, 5]
      ]);
    });
  });

  context("chunkBy", () => {
    const aFib = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
    const lFib = fromJS(aFib);
    const oFib = {
      a: 0,
      b: 1,
      c: 1,
      d: 2,
      e: 3,
      f: 5,
      g: 8,
      h: 13,
      i: 21,
      j: 34
    };

    const even = x => x % 2 === 0;
    const evenValue = obj => value(obj) % 2 === 0;

    it("works with arrays", () => {
      expect(chunkBy(aFib, even)).to.deep.equal([
        [0],
        [1, 1],
        [2],
        [3, 5],
        [8],
        [13, 21],
        [34]
      ]);
    });

    it("works with objects", () => {
      expect(chunkBy(oFib, evenValue)).to.deep.equal({
        0: [{ a: 0 }],
        1: [{ b: 1 }, { c: 1 }],
        2: [{ d: 2 }],
        3: [{ e: 3 }, { f: 5 }],
        4: [{ g: 8 }],
        5: [{ h: 13 }, { i: 21 }],
        6: [{ j: 34 }]
      });
    });

    it("works lazily with generators", () => {
      const iter = chunkBy(naturals(), x => x % 3 === 0);
      expect(iter.next().value).to.deep.equal([1, 2]);
      expect(iter.next().value).to.deep.equal([3]);
      expect(iter.next().value).to.deep.equal([4, 5]);
      expect(iter.next().value).to.deep.equal([6]);
    });

    it("works with reducibles", () => {
      expect(chunkBy(lFib, even).toArray()).to.deep.equal([
        [0],
        [1, 1],
        [2],
        [3, 5],
        [8],
        [13, 21],
        [34]
      ]);
    });

    it("can create a transducer function", () => {
      const result = sequence(aFib, chunkBy(even));
      expect(result).to.deep.equal([
        [0],
        [1, 1],
        [2],
        [3, 5],
        [8],
        [13, 21],
        [34]
      ]);
    });

    it("works in composition", () => {
      const xform1 = compose(
        map(x => x + 1),
        chunkBy(even)
      );
      const xform2 = compose(
        chunkBy(even),
        map(x => x.length)
      );

      expect(sequence(aFib, xform1)).to.deep.equal([
        [1],
        [2, 2],
        [3],
        [4, 6],
        [9],
        [14, 22],
        [35]
      ]);
      expect(sequence(aFib, xform2)).to.deep.equal([1, 2, 1, 2, 1, 2, 1]);
    });

    it("works in composition with completing transformers", () => {
      const xform1 = compose(chunkBy(even), take(2));
      const xform2 = compose(take(5), chunkBy(even));

      expect(sequence(aFib, xform1)).to.deep.equal([[0], [1, 1]]);
      expect(sequence(aFib, xform2)).to.deep.equal([[0], [1, 1], [2], [3]]);
    });

    it("passes init calls to the next transducer", () => {
      const reducer = chunkBy(even)(toReducer([]));
      const result = transduce(aFib, null, reducer);
      expect(result).to.deep.equal([
        [0],
        [1, 1],
        [2],
        [3, 5],
        [8],
        [13, 21],
        [34]
      ]);
    });
  });
});
