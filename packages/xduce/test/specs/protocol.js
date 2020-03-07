/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { expect } from "test/helper";

import { protocols as p, isImplemented } from "modules/protocol";

describe("isImplemented", () => {
  const yes = {
    [p.init]() {
      return "";
    },
    [p.step](acc, value) {
      return acc + value;
    },
    [p.result](value) {
      return value;
    },
    [p.reduced]: false,
    [p.value]: 42
  };

  it("correctly checks iterator", () => {
    const obj = {
      [Symbol.iterator]() {
        return { next() {} };
      }
    };
    expect(isImplemented([1, 2, 3], "iterator")).to.be.true;
    expect(isImplemented(obj, "iterator")).to.be.true;
    expect(isImplemented(0, "iterator")).to.be.false;
  });

  it("correctly checks asyncIterator", () => {
    const obj = {
      *[Symbol.asyncIterator]() {
        yield { done: true };
      }
    };
    expect(isImplemented(obj, "asyncIterator")).to.be.true;
    expect(isImplemented("test", "asyncIterator")).to.be.false;
  });

  it("correctly checks init", () => {
    expect(isImplemented(yes, "init")).to.be.true;
    expect(isImplemented("foo", "init")).to.be.false;
  });

  it("correctly checks step", () => {
    expect(isImplemented(yes, "step")).to.be.true;
    expect(isImplemented("foo", "step")).to.be.false;
  });

  it("correctly checks result", () => {
    expect(isImplemented(yes, "result")).to.be.true;
    expect(isImplemented("foo", "result")).to.be.false;
  });

  it("correctly checks reduced", () => {
    expect(isImplemented(yes, "reduced")).to.be.true;
    expect(isImplemented("foo", "reduced")).to.be.false;
  });

  it("correctly checks value", () => {
    expect(isImplemented(yes, "value")).to.be.true;
    expect(isImplemented("foo", "value")).to.be.false;
  });

  it("returns false if null value is sent", () => {
    expect(isImplemented(null, "iterator")).to.be.false;
  });
});
