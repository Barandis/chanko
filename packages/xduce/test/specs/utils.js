/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { expect } from "test/helper";

import {
  isArray,
  isFunction,
  isNumber,
  isObject,
  isString
} from "modules/utils";

describe("Type-checking functions", () => {
  context("for arrays", () => {
    it("works for literal arrays", () => {
      expect(isArray([1, 2, 3])).to.be.true;
      expect(isArray([])).to.be.true;
    });

    it("works for array objects", () => {
      const array = new Array(3);
      array.push(1, 2, 3);
      expect(isArray(array)).to.be.true;
      expect(isArray(new Array())).to.be.true;
    });

    it("works for things that are not arrays", () => {
      expect(isArray(() => {})).to.be.false;
      expect(isArray(0)).to.be.false;
      expect(isArray({})).to.be.false;
      expect(isArray("")).to.be.false;
      expect(isArray(new Date())).to.be.false;
    });

    it("works for null/undefined", () => {
      expect(isArray(null)).to.be.false;
      expect(isArray(undefined)).to.be.false;
    });
  });

  context("for functions", () => {
    it("works for arrow functions", () => {
      expect(isFunction(x => x)).to.be.true;
      expect(isFunction(() => {})).to.be.true;
    });

    /* eslint-disable prefer-arrow-callback */
    it("works for function expressions", () => {
      expect(
        isFunction(function(x) {
          return x;
        })
      ).to.be.true;
      expect(isFunction(function() {})).to.be.true;
    });
    /* eslint-enable prefer-arrow-callback */

    /* eslint-disable no-new-func */
    it("works for function objects", () => {
      expect(isFunction(new Function("a", "b", "return a + b"))).to.be.true;
    });
    /* eslint-enable no-new-func */

    it("works for named and anonymous function variables", () => {
      function add1(x, y) {
        return x + y;
      }
      const add2 = (x, y) => x + y;
      expect(isFunction(add1)).to.be.true;
      expect(isFunction(add2)).to.be.true;
    });

    it("works for things that are not functions", () => {
      expect(isFunction([])).to.be.false;
      expect(isFunction(0)).to.be.false;
      expect(isFunction({})).to.be.false;
      expect(isFunction("")).to.be.false;
      expect(isFunction(new Date())).to.be.false;
    });

    it("works for null/undefined", () => {
      expect(isFunction(null)).to.be.false;
      expect(isFunction(undefined)).to.be.false;
    });
  });

  context("for numbers", () => {
    it("works for number literals", () => {
      expect(isNumber(1729)).to.be.true;
      expect(isNumber(27.42)).to.be.true;
      expect(isNumber(6.022e23)).to.be.true;
      expect(isNumber(0xff)).to.be.true;
      expect(isNumber(0)).to.be.true;
    });

    /* eslint-disable no-new-wrappers */
    it("works for number objects", () => {
      expect(isNumber(new Number(1729))).to.be.true;
      expect(isNumber(Number("27.42"))).to.be.true;
      expect(isNumber(new Number("6.022e23"))).to.be.true;
      expect(isNumber(Number(0xff))).to.be.true;
      expect(isNumber(new Number())).to.be.true;
    });
    /* eslint-enable no-new-wrappers */

    it("works for numeric strings", () => {
      expect(isNumber("1729")).to.be.false;
      expect(isNumber("0")).to.be.false;
    });

    it("works for infinities and not-a-numbers", () => {
      expect(isNumber(NaN)).to.be.false;
      expect(isNumber(Infinity)).to.be.false;
      expect(isNumber(-Infinity)).to.be.false;
    });

    it("works for things that are not numbers", () => {
      expect(isNumber([])).to.be.false;
      expect(isNumber(() => {})).to.be.false;
      expect(isNumber({})).to.be.false;
      expect(isNumber("")).to.be.false;
      expect(isNumber(new Date())).to.be.false;
    });

    it("works for null/undefined", () => {
      expect(isNumber(null)).to.be.false;
      expect(isNumber(undefined)).to.be.false;
    });
  });

  context("for objects", () => {
    it("works for object literals", () => {
      expect(isObject({ a: 1, b: 2 })).to.be.true;
      expect(isObject({})).to.be.true;
    });

    /* eslint-disable no-new-object */
    it("works for Object objects", () => {
      const obj = new Object();
      obj.a = 1;
      obj.b = 2;
      expect(isObject(obj)).to.be.true;
      expect(isObject(new Object())).to.be.true;
    });
    /* eslint-disable no-new-object */

    /* eslint-disable no-new-func, no-new-wrappers */
    it("works for objects that are assigned another type", () => {
      expect(isObject(new Array())).to.be.false;
      expect(isObject(new Function("a", "b", "return a + b"))).to.be.false;
      expect(isObject(new Number(0))).to.be.false;
      expect(isObject(new String())).to.be.false;
    });
    /* eslint-enable no-new-func, no-new-wrappers */

    it("works for things that are not objects", () => {
      expect(isObject([])).to.be.false;
      expect(isObject(() => {})).to.be.false;
      expect(isObject(0)).to.be.false;
      expect(isObject("")).to.be.false;
    });

    it("works for objects that derive from Object", () => {
      class Test {}
      expect(isObject(new Test())).to.be.false;
      expect(isObject(new Date())).to.be.false;
    });

    it("works for objects without prototypes", () => {
      const obj = Object.assign(Object.create(null), { a: 1, b: 2 });
      expect(isObject(obj)).to.be.true;
      expect(isObject(Object.prototype)).to.be.true;
    });

    it("works for null/undefined", () => {
      expect(isObject(null)).to.be.false;
      expect(isObject(undefined)).to.be.false;
    });
  });

  context("for strings", () => {
    it("works for literal strings", () => {
      expect(isString("hello")).to.be.true;
      expect(isString("1729")).to.be.true;
      expect(isString("")).to.be.true;
    });

    /* eslint-disable no-new-wrappers */
    it("works for string objects", () => {
      expect(isString(new String("hello"))).to.be.true;
      expect(isString(new String())).to.be.true;
    });
    /* eslint-disable no-new-wrappers */

    it("works for thinsg that are not strings", () => {
      expect(isString([])).to.be.false;
      expect(isString(() => {})).to.be.false;
      expect(isString(0)).to.be.false;
      expect(isString({})).to.be.false;
      expect(isString(new Date())).to.be.false;
    });

    it("works for null/undefined", () => {
      expect(isString(null)).to.be.false;
      expect(isString(undefined)).to.be.false;
    });
  });
});
