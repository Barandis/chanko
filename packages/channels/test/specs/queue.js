/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { expect } from "test/helper";

import {
  queue,
  isEmpty,
  count,
  isQueue,
  enqueue,
  dequeue,
  EMPTY,
  peek,
  filter
} from "modules/queue";

describe("Queue", () => {
  let q;

  beforeEach(() => (q = queue()));

  it("begins as an empty queue", () => {
    expect(isEmpty(q)).to.be.true;
    expect(count(q)).to.equal(0);
  });

  context("isQueue", () => {
    it("determines whether an object is actually a queue", () => {
      expect(isQueue(q)).to.be.true;
      expect(isQueue({})).to.be.false;
    });
  });

  context("dequeue", () => {
    it("removes the oldest item from the queue", () => {
      for (const i of [1, 2, 3]) {
        enqueue(q, i);
      }
      expect(dequeue(q)).to.equal(1);
      expect(dequeue(q)).to.equal(2);
      expect(dequeue(q)).to.equal(3);
      expect(isEmpty(q)).to.be.true;
    });

    it("returns EMPTY if the queue is empty", () => {
      expect(dequeue(q)).to.equal(EMPTY);
    });
  });

  context("peek", () => {
    it("returns the oldest item without removing it", () => {
      for (const i of [1, 2, 3]) {
        enqueue(q, i);
      }
      expect(peek(q)).to.equal(1);
      expect(peek(q)).to.equal(1);
      expect(peek(q)).to.equal(1);
      expect(count(q)).to.equal(3);
    });

    it("returns EMPTY if the queue is empty", () => {
      expect(peek(q)).to.equal(EMPTY);
    });
  });

  context("filter", () => {
    it("filters queued items by a predicate", () => {
      for (let i = 1; i <= 10; i++) {
        enqueue(q, i);
      }
      expect(count(q)).to.equal(10);
      filter(q, item => item % 2 === 0);
      expect(count(q)).to.equal(5);

      expect(dequeue(q)).to.equal(2);
      expect(dequeue(q)).to.equal(4);
      expect(dequeue(q)).to.equal(6);
      expect(dequeue(q)).to.equal(8);
      expect(dequeue(q)).to.equal(10);
      expect(dequeue(q)).to.equal(EMPTY);
    });
  });
});
