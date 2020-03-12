/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { expect, toArray, five, expectWithin } from "test/helper";
import { iterator, isIterable } from "modules/iteration";

describe("Iteration", () => {
  context("iterator function", () => {
    context("over built-in iterables", () => {
      it("iterates over strings", () => {
        const array = toArray(iterator("hello"));
        expect(array).to.deep.equal(["h", "e", "l", "l", "o"]);
      });

      it("iterates over arrays", () => {
        const array = toArray(iterator([3, 1, 4, 1, 5]));
        expect(array).to.deep.equal([3, 1, 4, 1, 5]);
      });

      it("iterates over generators", () => {
        const array = toArray(iterator(five()));
        expect(array).to.deep.equal([1, 2, 3, 4, 5]);
      });
    });

    context("over customer iterable types", () => {
      it("iterates over custom types that implement iterable", () => {
        class IteratorTest {
          constructor() {
            this.values = [3, 1, 4, 1, 5];
          }

          *[Symbol.iterator]() {
            let index = 0;
            while (index < this.values.length) {
              yield this.values[index++];
            }
          }
        }
        const test = new IteratorTest();
        expect(toArray(iterator(test))).to.deep.equal([3, 1, 4, 1, 5]);
      });
    });

    context("over plain objects", () => {
      const reverse = (a, b) => (a < b ? 1 : b < a ? -1 : 0);
      const obj = { c: 1, a: 2, b: 3 };

      it("produces key-value pairs in insertion order by default", () => {
        expect(toArray(iterator(obj))).to.deep.equal([
          { c: 1 },
          { a: 2 },
          { b: 3 }
        ]);
      });

      it("can produce key-value pairs sorted by function", () => {
        expect(toArray(iterator(obj, reverse))).to.deep.equal([
          { c: 1 },
          { b: 3 },
          { a: 2 }
        ]);
      });
    });

    context("over functions", () => {
      it("produces an infinite series with a constant function", () => {
        const iter = iterator(() => 6); // Bert's favorite number
        expect(iter.next().value).to.equal(6);
        expect(iter.next().value).to.equal(6);
        expect(iter.next().value).to.equal(6);
        expect(iter.next().value).to.equal(6);
        expect(iter.next().done).to.be.false;
      });

      it("produces an infinite series based on the current index", () => {
        const iter = iterator(index => 1 / 2 ** index);
        expect(iter.next().value).to.equal(1);
        expectWithin(iter.next().value, 1 / 2);
        expectWithin(iter.next().value, 1 / 4);
        expectWithin(iter.next().value, 1 / 8);
      });

      it("produces an infinite series using index and last value", () => {
        const fn = (index, last = 1) => last * (index + 1);
        const iter = iterator(fn);
        expect(iter.next().value).to.equal(1);
        expect(iter.next().value).to.equal(2);
        expect(iter.next().value).to.equal(6);
        expect(iter.next().value).to.equal(24);
        expect(iter.next().value).to.equal(120);
      });

      it("produces a finite series if the function returns undefined", () => {
        const fn = index => (index < 3 ? index : undefined);
        const iter = iterator(fn);
        expect(iter.next().value).to.equal(0);
        expect(iter.next().value).to.equal(1);
        expect(iter.next().value).to.equal(2);
        expect(iter.next().done).to.be.true;
      });
    });

    it("returns null if the type is not iterable", () => {
      expect(iterator(new Date())).to.be.null;
    });
  });

  context("isIterable", () => {
    it("returns true for iterable and plain objects", () => {
      expect(isIterable([])).to.be.true;
      expect(isIterable("")).to.be.true;
      expect(isIterable({})).to.be.true;
    });

    it("returns false for non-iterable and non-plain objects", () => {
      expect(isIterable(0)).to.be.false;
      expect(isIterable(Number)).to.be.false;
    });
  });
});
