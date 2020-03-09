/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { expect, map } from "test/helper";
import _ from "lodash";

import {
  isCompleted,
  complete,
  uncomplete,
  ensureCompleted,
  ensureUncompleted,
  toFunction,
  ARRAY_REDUCER
} from "modules/reduction";
import { protocols as p } from "modules/protocol";

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
