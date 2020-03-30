/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { expect, map } from "test/helper";
import _ from "lodash";
import { List } from "immutable";

import {
  isCompleted,
  complete,
  uncomplete,
  ensureCompleted,
  ensureUncompleted,
  toFunction,
  ARRAY_REDUCER,
  toReducer,
  toTransducer,
  reduce
} from "modules/reduction";
import { protocols as p, isImplemented } from "modules/protocol";

describe("Status marking functions", () => {
  context("isCompleted", () => {
    it("works on uncompleted values", () => {
      expect(isCompleted(1729)).to.be.false;
      expect(isCompleted({})).to.be.false;
      expect(isCompleted([])).to.be.false;
      expect(isCompleted(0)).to.be.false;
      expect(isCompleted("")).to.be.false;
      expect(isCompleted(null)).to.be.false;
      expect(isCompleted(undefined)).to.be.false;
    });

    it("works on completed values", () => {
      expect(isCompleted(complete(1729))).to.be.true;
      expect(isCompleted(complete({}))).to.be.true;
      expect(isCompleted(complete([]))).to.be.true;
      expect(isCompleted(complete(0))).to.be.true;
      expect(isCompleted(complete(""))).to.be.true;
      expect(isCompleted(complete(null))).to.be.true;
      expect(isCompleted(complete(undefined))).to.be.true;
    });

    it("works on values implementing the reduced protocol", () => {
      const obj = { [p.reduced]: true };
      expect(isCompleted(obj)).to.be.true;

      const array = [];
      array[p.reduced] = true;
      expect(isCompleted(array)).to.be.true;
    });
  });

  context("complete", () => {
    it("turns a value into a completed value", () => {
      let value = 1729;
      expect(isCompleted(value)).to.be.false;

      value = complete(value);
      expect(isCompleted(value)).to.be.true;
      expect(value[p.value]).to.equal(1729);
    });

    it("can complete any value", () => {
      expect(isCompleted(complete(""))).to.be.true;
      expect(isCompleted(complete(0))).to.be.true;
      expect(isCompleted(complete(null))).to.be.true;
      expect(isCompleted(complete(undefined))).to.be.true;
    });

    it("will double-complete a completed value", () => {
      const value = complete(complete(1729));
      expect(isCompleted(value)).to.be.true;
      expect(isCompleted(value[p.value])).to.be.true;
      expect(isCompleted(value[p.value][p.value])).to.be.false;
    });
  });

  context("uncomplete", () => {
    it("turns a completed value into its uncompleted equivalent", () => {
      const value = uncomplete(complete(1729));
      expect(isCompleted(value)).to.be.false;
      expect(value).to.equal(1729);
    });

    it("returns undefined for uncompleted inputs", () => {
      expect(uncomplete(1729)).to.be.undefined;
      expect(uncomplete({})).to.be.undefined;
      expect(uncomplete(null)).to.be.undefined;
      expect(uncomplete(undefined)).to.be.undefined;
    });

    it("can uncomplete nested completes one at a time", () => {
      const value = complete(complete(1729));
      expect(isCompleted(uncomplete(value))).to.be.true;
      expect(isCompleted(uncomplete(uncomplete(value)))).to.be.false;
      expect(uncomplete(uncomplete(value))).to.equal(1729);
    });
  });

  context("ensureCompleted", () => {
    it("completes an uncompleted input", () => {
      const value = ensureCompleted(1729);
      expect(isCompleted(value)).to.be.true;
      expect(value[p.value]).to.equal(1729);
    });

    it("will not further process an already completed input", () => {
      const value = complete(1729);
      expect(ensureCompleted(value)).to.equal(value);
    });
  });

  context("ensureUncompleted", () => {
    it("uncompletes a completed input", () => {
      const value = ensureUncompleted(complete(1729));
      expect(isCompleted(value)).to.be.false;
      expect(value).to.equal(1729);
    });

    it("will return the value if it isn't completed", () => {
      const value = 1729;
      expect(ensureUncompleted(value)).to.equal(value);
    });
  });
});

describe("Integration with other libraries", () => {
  const arrayPush = (acc, value) => {
    acc.push(value);
    return acc;
  };

  const xform = map(x => x + 1);
  const reducerFn = toFunction(xform, arrayPush);
  const reducerObj = toFunction(xform, ARRAY_REDUCER);

  context("toFunction", () => {
    it("can make a function to use with Array's reduce", () => {
      const result1 = [1, 2, 3, 4, 5].reduce(reducerFn, []);
      const result2 = [1, 2, 3, 4, 5].reduce(reducerObj, []);
      expect(result1).to.deep.equal([2, 3, 4, 5, 6]);
      expect(result2).to.deep.equal([2, 3, 4, 5, 6]);
    });

    it("can make a function to use with lodash's reduce", () => {
      const result1 = _.reduce([1, 2, 3, 4, 5], reducerFn, []);
      const result2 = _.reduce([1, 2, 3, 4, 5], reducerObj, []);
      expect(result1).to.deep.equal([2, 3, 4, 5, 6]);
      expect(result2).to.deep.equal([2, 3, 4, 5, 6]);
    });
  });
});

describe("Reducer creation function", () => {
  context("toReducer", () => {
    it("will create a non-reducer if given a non-reducible", () => {
      expect(isImplemented(toReducer(new Date())), "step").to.be.false;
    });

    it("will create an error-throwing init if given a function", () => {
      const obj = toReducer((acc, value) => acc + value);
      const fn = () => obj[p.init]();
      expect(fn).to.throw("init not available");
    });

    it("can create reducers that reduce to non-collections", () => {
      const sumReducer = toReducer((acc, value) => acc + value);
      const sum = reduce([1, 2, 3, 4, 5], sumReducer, 0);
      expect(sum).to.equal(15);
    });

    it("can create a reducer into an array", () => {
      expect(reduce("abc", toReducer([]), [])).to.deep.equal(["a", "b", "c"]);
      expect(reduce([1, 2, 3], toReducer([]), [])).to.deep.equal([1, 2, 3]);
    });

    it("can create a reducer into an object", () => {
      expect(reduce({ a: 1, b: 2 }, toReducer({}), {})).to.deep.equal({
        a: 1,
        b: 2
      });
    });

    it("can create a reducer for strings", () => {
      expect(reduce([1, 2, 3], toReducer(""), "")).to.equal("123");
      expect(reduce("abc", toReducer(""), "")).to.equal("abc");
    });

    it("can create a reducer for custom reducible types", () => {
      const reducer = toReducer(List.prototype);
      expect(
        reduce([1, 2, 3, 4, 5], reducer, List().asMutable()).toArray()
      ).to.deep.equal([1, 2, 3, 4, 5]);
    });
  });
});

describe("Reduction", () => {
  context("reduce", () => {
    it("returns null if a null collection is passed", () => {
      expect(reduce(null)).to.be.null;
    });

    it("throws an error if the collection is not an iterable", () => {
      expect(() => void reduce(new Date())).to.throw(
        "Cannot reduce an instance of Date"
      );
    });

    it("reduces a collection into another type", () => {
      expect(reduce({ a: 1, b: 2 }, toReducer([]), [])).to.deep.equal([
        { a: 1 },
        { b: 2 }
      ]);
      expect(reduce([1, 2, 3, 4, 5], toReducer(""), "")).to.equal("12345");
    });

    it("can reduce to scalars", () => {
      const reducer = toReducer((acc, value) => acc + value);
      expect(reduce([1, 2, 3, 4, 5], reducer, 0)).to.equal(15);
    });

    it("handles transforming reducers", () => {
      const map = fn => xform =>
        toTransducer((acc, value) => xform[p.step](acc, fn(value)), xform);

      const r1 = map(x => x + 1)(toReducer([]));
      const init1 = r1[p.init]();
      expect(reduce([1, 2, 3, 4, 5], r1, init1)).to.deep.equal([2, 3, 4, 5, 6]);

      const r2 = map(x => ({ [x]: x }))(toReducer({}));
      const init2 = r2[p.init]();
      expect(reduce([1, 2, 3], r2, init2)).to.deep.equal({ 1: 1, 2: 2, 3: 3 });

      const r3 = map(x => x + 1)(toReducer(""));
      const init3 = r3[p.init]();
      expect(reduce([1, 2, 3, 4, 5], r3, init3)).to.equal("23456");
    });

    it("handles transforming reducers that complete", () => {
      const take = n => xform => {
        let i = 0;
        return toTransducer((acc, value) => {
          let result = acc;

          if (i < n) {
            result = xform[p.step](acc, value);
            if (i === n - 1) {
              result = ensureCompleted(result);
            }
          }
          i++;
          return result;
        }, xform);
      };
      const r = take(3)(toReducer([]));
      const init = r[p.init]();
      expect(reduce([1, 2, 3, 4, 5], r, init)).to.deep.equal([1, 2, 3]);
    });

    it("reduces objects into strings by taking their values", () => {
      expect(reduce({ a: 1, b: 2 }, toReducer(""), "")).to.equal("12");
    });

    it("reduces a non-object into an object with numeric keys", () => {
      expect(reduce("abc", toReducer({}), {})).to.deep.equal({
        0: "a",
        1: "b",
        2: "c"
      });
    });
  });
});
