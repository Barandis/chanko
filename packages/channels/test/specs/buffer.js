/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { expect } from "test/helper";

import {
  fixed,
  dropping,
  sliding,
  isFull,
  add,
  count,
  remove,
  isBuffer,
  queue
} from "modules/buffer";
import { EMPTY, isQueue } from "modules/queue";

describe("Buffer", () => {
  context("fixed", () => {
    let buffer;

    beforeEach(() => (buffer = fixed(3)));

    it("is a buffer", () => {
      expect(isBuffer(buffer)).to.be.true;
    });

    it("has a queue", () => {
      expect(isQueue(queue(buffer))).to.be.true;
    });

    it("does not start full", () => {
      expect(isFull(buffer)).to.be.false;
    });

    it("becomes full when enough items are added", () => {
      add(buffer, 1, 2, 3);
      expect(isFull(buffer)).to.be.true;
    });

    it("allows items to be added when full", () => {
      add(buffer, 1, 2, 3);
      expect(() => add(buffer, 3)).not.to.throw();
      expect(count(buffer)).to.equal(4);
      expect(isFull(buffer)).to.be.true;
    });

    context("count", () => {
      it("equals the numebr of items added even if that exceeds size", () => {
        expect(count(buffer)).to.equal(0);
        add(buffer, 1);
        expect(count(buffer)).to.equal(1);
        add(buffer, 1);
        expect(count(buffer)).to.equal(2);
        add(buffer, 1);
        expect(count(buffer)).to.equal(3);
        add(buffer, 1);
        expect(count(buffer)).to.equal(4);
      });
    });

    context("remove", () => {
      it("returns the oldest item", () => {
        add(buffer, 1, 2, 3);

        expect(remove(buffer)).to.equal(1);
        expect(count(buffer)).to.equal(2);
        expect(remove(buffer)).to.equal(2);
        expect(count(buffer)).to.equal(1);
        expect(remove(buffer)).to.equal(3);
        expect(count(buffer)).to.equal(0);
      });

      it("includes items added over size", () => {
        add(buffer, 1, 2, 3, 4);

        expect(isFull(buffer)).to.be.true;
        expect(remove(buffer)).to.equal(1);
        expect(isFull(buffer)).to.be.true;
        expect(remove(buffer)).to.equal(2);
        expect(isFull(buffer)).to.be.false;
        expect(remove(buffer)).to.equal(3);
        expect(remove(buffer)).to.equal(4);
        expect(remove(buffer)).to.equal(EMPTY);
      });
    });
  });

  context("dropping", () => {
    let buffer;

    beforeEach(() => (buffer = dropping(3)));

    it("is a buffer", () => {
      expect(isBuffer(buffer)).to.be.true;
    });

    it("has a queue", () => {
      expect(isQueue(queue(buffer))).to.be.true;
    });

    it("does not start full", () => {
      expect(isFull(buffer)).to.be.false;
    });

    it("never gets full", () => {
      add(buffer, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
      expect(isFull(buffer)).to.be.false;
    });

    it("ignores items added after it reaches its size", () => {
      add(buffer, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
      expect(count(buffer)).to.equal(3);
      expect(remove(buffer)).to.equal(1);
      expect(remove(buffer)).to.equal(2);
      expect(remove(buffer)).to.equal(3);
    });

    context("count", () => {
      it("equals the number of added items, up to its size", () => {
        expect(count(buffer)).to.equal(0);
        add(buffer, 1);
        expect(count(buffer)).to.equal(1);
        add(buffer, 2, 3);
        expect(count(buffer)).to.equal(3);
        add(buffer, 4);
        expect(count(buffer)).to.equal(3);
      });
    });

    context("remove", () => {
      it("returns the oldest item", () => {
        add(buffer, 1, 2, 3);
        expect(remove(buffer)).to.equal(1);
        expect(remove(buffer)).to.equal(2);
        expect(remove(buffer)).to.equal(3);
      });

      it("returns EMPTY if the buffer has no items", () => {
        expect(remove(buffer)).to.equal(EMPTY);
      });
    });
  });

  context("sliding", () => {
    let buffer;

    beforeEach(() => (buffer = sliding(3)));

    it("is a buffer", () => {
      expect(isBuffer(buffer)).to.be.true;
    });

    it("has a queue", () => {
      expect(isQueue(queue(buffer))).to.be.true;
    });

    it("does not start full", () => {
      expect(isFull(buffer)).to.be.false;
    });

    it("never gets full", () => {
      add(buffer, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
      expect(isFull(buffer)).to.be.false;
    });

    it("discards the oldest item after it reaches its size", () => {
      add(buffer, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
      expect(count(buffer)).to.equal(3);
      expect(remove(buffer)).to.equal(8);
      expect(remove(buffer)).to.equal(9);
      expect(remove(buffer)).to.equal(10);
    });

    context("count", () => {
      it("equals the number of added items up to its size", () => {
        expect(count(buffer)).to.equal(0);
        add(buffer, 1);
        expect(count(buffer)).to.equal(1);
        add(buffer, 2, 3);
        expect(count(buffer)).to.equal(3);
        add(buffer, 4);
        expect(count(buffer)).to.equal(3);
      });
    });

    context("remove", () => {
      it("returns the oldest item", () => {
        add(buffer, 1, 2, 3);
        expect(remove(buffer)).to.equal(1);
        expect(remove(buffer)).to.equal(2);
        expect(remove(buffer)).to.equal(3);
      });

      it("returns EMPTY if the buffer has no items", () => {
        expect(remove(buffer)).to.equal(EMPTY);
      });
    });
  });

  context("Non-buffers", () => {
    it("fails silently on add", () => {
      expect(() => add({}, 1, 2, 3)).not.to.throw();
    });
  });
});
