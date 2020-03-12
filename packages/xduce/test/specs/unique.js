/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { expect, expectIterator, naturals } from "test/helper";

import { List, fromJS } from "immutable";

import { unique, uniqueBy, uniqueWith } from "modules/unique";
import { sequence, toReducer, transduce } from "modules/transduction";
import { value } from "modules/utils";

describe("Uniqueness transducers", () => {
  context("unique", () => {
    const arr = [1, 5, 2, 2, 4, 5, 3, 3, 2];
    const str = "1522454332";
    const gen = function*() {
      for (const i of arr) {
        yield i;
      }
    };
    const imm = fromJS(arr);

    it("works with arrays", () => {
      expect(unique(arr)).to.deep.equal([1, 5, 2, 4, 3]);
    });

    it("works with strings", () => {
      expect(unique(str)).to.equal("15243");
    });

    it("works with generators", () => {
      expectIterator(unique(gen()), [1, 5, 2, 4, 3]);
    });

    it("works lazily with generators", () => {
      const iter = unique(naturals());
      expect(iter.next().value).to.equal(1);
      expect(iter.next().value).to.equal(2);
      expect(iter.next().value).to.equal(3);
    });

    it("works with reducibles", () => {
      expect(unique(imm).toArray()).to.deep.equal([1, 5, 2, 4, 3]);
    });

    it("can create a transducer function", () => {
      const result = sequence(arr, unique());
      expect(result).to.deep.equal([1, 5, 2, 4, 3]);
    });

    it("passes init calls to the next transducer", () => {
      const reducer = unique()(toReducer([]));
      const result = transduce(arr, null, reducer);
      expect(result).to.deep.equal([1, 5, 2, 4, 3]);
    });
  });

  context("uniqueBy", () => {
    const arr = [
      { x: 1 },
      { x: 5 },
      { x: 2 },
      { x: 2 },
      { x: 4 },
      { x: 5 },
      { x: 3 },
      { x: 3 },
      { x: 2 }
    ];
    const obj = { a: 1, b: 5, c: 2, d: 2, e: 4, f: 5, g: 4, h: 3, i: 3, j: 2 };
    const str = "1522454332";
    const gen = function*() {
      for (const i of arr) {
        yield i;
      }
    };
    const imm = List.of(
      { x: 1 },
      { x: 5 },
      { x: 2 },
      { x: 2 },
      { x: 4 },
      { x: 5 },
      { x: 3 },
      { x: 3 },
      { x: 2 }
    );

    const byX = ({ x }) => x;
    const byValue = obj => value(obj);
    const byMod3 = x => x % 3;

    const byXResult = [{ x: 1 }, { x: 5 }, { x: 2 }, { x: 4 }, { x: 3 }];

    it("works with arrays", () => {
      expect(uniqueBy(arr, byX)).to.deep.equal(byXResult);
    });

    it("works with objects", () => {
      expect(uniqueBy(obj, byValue)).to.deep.equal({
        a: 1,
        b: 5,
        c: 2,
        e: 4,
        h: 3
      });
    });

    it("works with strings", () => {
      expect(uniqueBy(str, byMod3)).to.equal("153");
    });

    it("works with generators", () => {
      expectIterator(uniqueBy(gen(), byX), byXResult);
    });

    it("works lazily with generators", () => {
      const iter = uniqueBy(naturals(), byMod3);
      expect(iter.next().value).to.equal(1);
      expect(iter.next().value).to.equal(2);
      expect(iter.next().value).to.equal(3);
    });

    it("works with reducibles", () => {
      expect(uniqueBy(imm, byX).toArray()).to.deep.equal(byXResult);
    });

    it("can create a transducer function", () => {
      const result = sequence(arr, uniqueBy(byX));
      expect(result).to.deep.equal(byXResult);
    });

    it("passes init calls to the next transducer", () => {
      const reducer = uniqueBy(byX)(toReducer([]));
      const result = transduce(arr, null, reducer);
      expect(result).to.deep.equal(byXResult);
    });
  });

  context("uniqueWith", () => {
    const arr = [17504, 2, 274, 105, 15, 21012, 770, 79239, 2058, 4462];
    const obj = {
      a: 17504,
      b: 2,
      c: 274,
      d: 105,
      e: 15,
      f: 21012,
      g: 770,
      h: 79239,
      i: 2058,
      j: 4462
    };
    const str = "Antidisestablishmentarianism";
    const gen = function*() {
      for (const i of arr) {
        yield i;
      }
    };
    const imm = fromJS(arr);

    const magnitude = x => Math.floor(Math.log(x) / Math.LN10 + 0.000000001);
    const magComp = (a, b) => magnitude(a) === magnitude(b);
    const valueMagComp = (a, b) => magnitude(value(a)) === magnitude(value(b));
    const groupComp = (a, b) =>
      Math.floor(a.charCodeAt(0) / 5) === Math.floor(b.charCodeAt(0) / 5);

    const magResult = [17504, 2, 274, 15, 2058];

    it("works with arrays", () => {
      const result = uniqueWith(arr, magComp);
      expect(result).to.deep.equal(magResult);
    });

    it("works with objects", () => {
      const result = uniqueWith(obj, valueMagComp);
      expect(result).to.deep.equal({ a: 17504, b: 2, c: 274, e: 15, i: 2058 });
    });

    it("works with strings", () => {
      const result = uniqueWith(str, groupComp);
      expect(result).to.equal("Antida");
    });

    it("works with generators", () => {
      const result = uniqueWith(gen(), magComp);
      expectIterator(result, magResult);
    });

    it("works lazily with generators", () => {
      const iter = uniqueWith(naturals(), magComp);
      expect(iter.next().value).to.equal(1);
      expect(iter.next().value).to.equal(10);
      expect(iter.next().value).to.equal(100);
      expect(iter.next().value).to.equal(1000);
    });

    it("works with reducibles", () => {
      const result = uniqueWith(imm, magComp);
      expect(result.toArray()).to.deep.equal(magResult);
    });

    it("can create a transducer function", () => {
      const result = sequence(arr, uniqueWith(magComp));
      expect(result).to.deep.equal(magResult);
    });

    it("passes init calls to the next transducer", () => {
      const reducer = uniqueWith(magComp)(toReducer([]));
      const result = transduce(arr, null, reducer);
      expect(result).to.deep.equal(magResult);
    });
  });
});
