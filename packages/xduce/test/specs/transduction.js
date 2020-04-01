/* eslint-disable max-lines */
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
  expectIterator,
  naturals
} from "test/helper";

import { List, fromJS } from "immutable";

import {
  transduce,
  asArray,
  asObject,
  asString,
  asIterator,
  into,
  sequence,
  compose,
  toReducer
} from "modules/transduction";
import { kv, key, value } from "modules/utils";
import { map } from "modules/map";
import { filter } from "modules/filter";
import { take } from "modules/take";

const addOne = x => x + 1;
const ucaseObj = prop => {
  const { k, v } = kv(prop);
  return { [k.toUpperCase()]: v };
};
const ucaseStr = x => x.toUpperCase();

const keyAndValue = x => ({ [x.toString()]: x });

describe("Transduction functions", () => {
  context("transduce", () => {
    it("can map an array with an array reducer", () => {
      const result = transduce(ARRAY_5, map(addOne), toReducer([]));
      expect(result).to.deep.equal([2, 3, 4, 5, 6]);
    });

    it("can map an object with an object reducer", () => {
      const result = transduce(OBJECT_AB, map(ucaseObj), toReducer({}));
      expect(result).to.deep.equal({ A: 1, B: 2 });
    });

    it("can map a string with a string reducer", () => {
      const result = transduce("hello", map(ucaseStr), toReducer(""));
      expect(result).to.equal("HELLO");
    });

    it("can map an immutable list after protocol application", () => {
      const result = transduce(LIST_5, map(addOne), toReducer(List.prototype));
      expect(result.toArray()).to.deep.equal([2, 3, 4, 5, 6]);
    });

    it("can map a custom object with a reducer function", () => {
      class TestCollection {
        constructor() {
          this.values = [];
        }
        push(value) {
          this.values.push(value);
        }
      }
      function testReducer(acc, value) {
        acc.push(value);
        return acc;
      }

      const result = transduce(
        ARRAY_5,
        map(addOne),
        toReducer(testReducer),
        new TestCollection()
      );
      expect(result.values).to.deep.equal([2, 3, 4, 5, 6]);
    });

    it("will accept a function as a reducer", () => {
      const result = transduce(
        ARRAY_5,
        map(x => x + 1),
        (acc, x) => acc + x,
        0
      );
      expect(result).to.equal(20);
    });

    it("returns null if given a null collection", () => {
      expect(transduce(null, map(addOne), toReducer([]))).to.be.null;
    });

    it("throws an error if given a non-reducible collection", () => {
      const fn = () => transduce(new Date(), map(addOne), toReducer([]));
      expect(fn).to.throw();
    });
  });

  context("asArray", () => {
    it("can map an array to an array", () => {
      const result = asArray(ARRAY_5, map(addOne));
      expect(result).to.deep.equal([2, 3, 4, 5, 6]);
    });

    it("can map an object to an array", () => {
      const result = asArray(OBJECT_AB, map(value));
      expect(result).to.deep.equal([1, 2]);
    });

    it("can map a string to an array", () => {
      const result = asArray("hello", map(ucaseStr));
      expect(result).to.deep.equal(["H", "E", "L", "L", "O"]);
    });

    it("can map a generator to an array", () => {
      const result = asArray(five(), map(addOne));
      expect(result).to.deep.equal([2, 3, 4, 5, 6]);
    });

    it("can map an immutable list to an array", () => {
      const result = asArray(LIST_5, map(addOne));
      expect(result).to.deep.equal([2, 3, 4, 5, 6]);
    });

    it("only reduces when no transformer is specified", () => {
      expect(asArray(OBJECT_AB)).to.deep.equal([{ a: 1 }, { b: 2 }]);
      expect(asArray("hello")).to.deep.equal(["h", "e", "l", "l", "o"]);
    });
  });

  context("asObject", () => {
    it("can map an array to an object", () => {
      const result = asObject(ARRAY_5, map(keyAndValue));
      expect(result).to.deep.equal({ 1: 1, 2: 2, 3: 3, 4: 4, 5: 5 });
    });

    it("can map an object to an object", () => {
      const result = asObject(OBJECT_AB, map(ucaseObj));
      expect(result).to.deep.equal({ A: 1, B: 2 });
    });

    it("can map a string to an object", () => {
      const result = asObject("world", map(keyAndValue));
      expect(result).to.deep.equal({ w: "w", o: "o", r: "r", l: "l", d: "d" });
    });

    it("can map a generator to an object", () => {
      const result = asObject(five(), map(keyAndValue));
      expect(result).to.deep.equal({ 1: 1, 2: 2, 3: 3, 4: 4, 5: 5 });
    });

    it("can map an immutable list to an object", () => {
      const result = asObject(LIST_5, map(keyAndValue));
      expect(result).to.deep.equal({ 1: 1, 2: 2, 3: 3, 4: 4, 5: 5 });
    });

    it("only reduces if there is no transformer specified", () => {
      expect(asObject(OBJECT_AB)).to.deep.equal({ a: 1, b: 2 });
      expect(asObject([1, 2])).to.deep.equal({ 0: 1, 1: 2 });
      expect(asObject("hello")).to.deep.equal({
        0: "h",
        1: "e",
        2: "l",
        3: "l",
        4: "o"
      });
      expect(asObject(five())).to.deep.equal({ 0: 1, 1: 2, 2: 3, 3: 4, 4: 5 });
      expect(asObject(LIST_5)).to.deep.equal({ 0: 1, 1: 2, 2: 3, 3: 4, 4: 5 });
    });
  });

  context("asString", () => {
    it("can map an array to a string", () => {
      const result = asString(["h", "e", "l", "l", "o"], map(ucaseStr));
      expect(result).to.equal("HELLO");
    });

    it("can map an object to a string", () => {
      const result = asString(OBJECT_AB, map(key));
      expect(result).to.equal("ab");
    });

    it("can map a string to a string", () => {
      const result = asString("hello", map(ucaseStr));
      expect(result).to.equal("HELLO");
    });

    it("can map a generator to a string", () => {
      const result = asString(five(), map(addOne));
      expect(result).to.equal("23456");
    });

    it("can map an immutable list to a string", () => {
      const input = List.of("h", "e", "l", "l", "o");
      const result = asString(input, map(ucaseStr));
      expect(result).to.equal("HELLO");
    });

    it("only reduces if there is no transformer specified", () => {
      expect(asString(["h", "e", "l", "l", "o"])).to.equal("hello");
    });
  });

  context("asIterator", () => {
    it("can map an array to an iterator", () => {
      const result = asIterator(ARRAY_5, map(addOne));
      expectIterator(result, [2, 3, 4, 5, 6]);
    });

    it("can map an object to an iterator", () => {
      const result = asIterator(
        OBJECT_AB,
        map(prop => value(prop) * 10)
      );
      expectIterator(result, [10, 20]);
    });

    it("can map a string to an iterator", () => {
      const result = asIterator("hello", map(ucaseStr));
      expectIterator(result, ["H", "E", "L", "L", "O"]);
    });

    it("can map a generator to an iterator", () => {
      const result = asIterator(five(), map(addOne));
      expectIterator(result, [2, 3, 4, 5, 6]);
    });

    it("can map an immutable list to an iterator", () => {
      const result = asIterator(LIST_5, map(addOne));
      expectIterator(result, [2, 3, 4, 5, 6]);
    });

    it("only reduces if no transformer is supplied", () => {
      expectIterator(asIterator(ARRAY_5), [1, 2, 3, 4, 5]);
      expectIterator(asIterator(OBJECT_AB), [{ a: 1 }, { b: 2 }]);
    });
  });

  context("into", () => {
    it("can collect elements from one type into the same type", () => {
      let result = into([], ARRAY_5, map(addOne));
      expect(result).to.deep.equal([2, 3, 4, 5, 6]);

      result = into({}, OBJECT_AB, map(ucaseObj));
      expect(result).to.deep.equal({ A: 1, B: 2 });

      result = into("", "hello", map(ucaseStr));
      expect(result).to.equal("HELLO");
    });

    it("can collect elements from one type into another type", () => {
      let result = into([], OBJECT_AB, map(value));
      expect(result).to.deep.equal([1, 2]);

      result = into({}, "world", map(keyAndValue));
      expect(result).to.deep.equal({ w: "w", o: "o", r: "r", l: "l", d: "d" });

      result = into("", ["h", "e", "l", "l", "o"], map(ucaseStr));
      expect(result).to.equal("HELLO");

      result = into([], five(), map(addOne));
      expect(result).to.deep.equal([2, 3, 4, 5, 6]);

      result = into("", List.of("h", "e", "l", "l", "o"), map(ucaseStr));
      expect(result).to.equal("HELLO");
    });

    it("can collect elements into non-empty targets", () => {
      let result = into([-1, 0], OBJECT_AB, map(value));
      expect(result).to.deep.equal([-1, 0, 1, 2]);

      result = into(
        { x: -1, y: 0 },
        OBJECT_AB,
        map(x => x)
      );
      expect(result).to.deep.equal({ a: 1, b: 2, x: -1, y: 0 });
    });

    it("can collect elements into reducible objects", () => {
      const result = into(List(), ARRAY_5, map(addOne));
      expect(result.toArray()).to.deep.equal([2, 3, 4, 5, 6]);
    });

    it("throws an error if the target is not reducible", () => {
      expect(() => into(new Date(), ARRAY_5, map(addOne))).to.throw();
    });

    it("can turn collections into arrays with no transform", () => {
      expect(into([], OBJECT_AB)).to.deep.equal([{ a: 1 }, { b: 2 }]);
      expect(into([], "hello")).to.deep.equal(["h", "e", "l", "l", "o"]);
      expect(into([], five())).to.deep.equal([1, 2, 3, 4, 5]);
      expect(into([], LIST_5)).to.deep.equal([1, 2, 3, 4, 5]);
    });

    it("can turn collections into strings with no transform", () => {
      expect(into("", ARRAY_5)).to.equal("12345");
      expect(into("", five())).to.equal("12345");
      expect(into("", LIST_5)).to.equal("12345");
    });

    it("can turn collections into other reducibles with no transform", () => {
      expect(into(List(), ARRAY_5).toArray()).to.deep.equal([1, 2, 3, 4, 5]);
      expect(into(List(), "hello").toArray()).to.deep.equal([
        "h",
        "e",
        "l",
        "l",
        "o"
      ]);
      expect(into(List(), five()).toArray()).to.deep.equal([1, 2, 3, 4, 5]);
    });
  });

  context("sequence", () => {
    it("can map an array to an array", () => {
      const result = sequence(ARRAY_5, map(addOne));
      expect(result).to.deep.equal([2, 3, 4, 5, 6]);
    });

    it("can map an object to an object", () => {
      const result = sequence(OBJECT_AB, map(ucaseObj));
      expect(result).to.deep.equal({ A: 1, B: 2 });
    });

    it("can map a string to a string", () => {
      const result = sequence("hello", map(ucaseStr));
      expect(result).to.equal("HELLO");
    });

    it("can map an iterator to an iterator", () => {
      const result = sequence(five(), map(addOne));
      expectIterator(result, [2, 3, 4, 5, 6]);
    });

    it("can map a reducible to the same reducible", () => {
      const result = sequence(LIST_5, map(addOne));
      expect(result.toArray()).to.deep.equal([2, 3, 4, 5, 6]);
    });

    it("throws an error if the collection is not reducible", () => {
      expect(() => sequence(new Date(), map(addOne))).to.throw();
    });
  });
});

describe("Transformer composition", () => {
  it("combines several transformers into one", () => {
    const array = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
    const gen = function*() {
      for (const item of array) {
        yield item;
      }
    };
    const list = fromJS(array);

    const addTwo = x => x + 2;
    const even = x => x % 2 === 0;

    const transducerFn = compose(map(addTwo), filter(even), take(3));

    const arrayResult = sequence(array, transducerFn);
    const iterResult = sequence(gen(), transducerFn);
    const listResult = sequence(list, transducerFn);

    expect(arrayResult).to.deep.equal([2, 4, 10]);
    expectIterator(iterResult, [2, 4, 10]);
    expect(listResult.toArray()).to.deep.equal([2, 4, 10]);
  });
});

describe("Lazy iterator transformation", () => {
  const transducerFn = compose(
    map(x => x * 2),
    filter(x => x > 4)
  );

  context("when a transformation is applied to an iterator", () => {
    it("happens via sequence", () => {
      const iter = sequence(naturals(), transducerFn);
      expect(iter.next().value).to.equal(6);
      expect(iter.next().value).to.equal(8);
      expect(iter.next().value).to.equal(10);
    });

    it("happens via asIterator", () => {
      const iter = asIterator(naturals(), transducerFn);
      expect(iter.next().value).to.equal(6);
      expect(iter.next().value).to.equal(8);
      expect(iter.next().value).to.equal(10);
    });
  });
});
