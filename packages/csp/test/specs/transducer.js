/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { expect } from "test/helper";

import {
  identity,
  flatten,
  repeat,
  map,
  flatMap,
  filter,
  reject,
  take,
  takeWhile,
  takeNth,
  drop,
  dropWhile,
  unique,
  uniqueBy,
  uniqueWith,
  distinct,
  distinctBy,
  distinctWith,
  chunk,
  chunkBy
} from "@chanko/xduce";

import { chan, transChan, recv, send, close, CLOSED } from "modules/channel";
import { go, join } from "modules/process";

const add1 = x => x + 1;
const even = x => x % 2 === 0;
const lt4 = x => x < 4;
const xprop = x => x.x;
const magComp = (a, b) => magnitude(a) === magnitude(b);

function magnitude(x) {
  return Math.floor(Math.log(x) / Math.LN10 + 0.000000001);
}

function fillChannel(channel, count, closeAfter) {
  return go(async () => {
    for (let i = 1; i <= count; i++) {
      await send(channel, i);
    }
    if (closeAfter) {
      close(channel);
    }
  });
}

function fillChannelWith(channel, array, closeAfter) {
  return go(async () => {
    for (const value of array) {
      await send(channel, value);
    }
    if (closeAfter) {
      close(channel);
    }
  });
}

function expectChannel(channel, expected) {
  return go(async () => {
    const values = [];
    for (let i = 0, end = expected.length; i < end; i++) {
      values.push(await recv(channel));
    }
    expect(values).to.deep.equal(expected);
  });
}

describe("Transducers on channels", () => {
  it("cannot be used on an unbuffered channel", () => {
    expect(() => chan(0, { transducer: map(add1) })).to.throw();
  });

  it("works with identity", async () => {
    const ch = transChan(identity());
    const p1 = fillChannel(ch, 10);
    const p2 = expectChannel(ch, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    return join(p1, p2);
  });

  it("works with flatten", async () => {
    const ch = transChan(flatten());
    const p1 = fillChannelWith(ch, [
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [5, 6]
    ]);
    const p2 = expectChannel(ch, [1, 2, 2, 3, 3, 4, 4, 5, 5, 6]);
    return join(p1, p2);
  });

  it("works with repeat", async () => {
    const ch = transChan(repeat(3));
    const p1 = fillChannel(ch, 5);
    const p2 = expectChannel(ch, [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5]);
    return join(p1, p2);
  });

  it("works with map", async () => {
    const ch = transChan(map(add1));
    const p1 = fillChannel(ch, 5);
    const p2 = expectChannel(ch, [2, 3, 4, 5, 6]);
    return join(p1, p2);
  });

  it("works with flatMap", async () => {
    const ch = transChan(flatMap(x => [x, x + 1]));
    const p1 = fillChannel(ch, 5);
    const p2 = expectChannel(ch, [1, 2, 2, 3, 3, 4, 4, 5, 5, 6]);
    return join(p1, p2);
  });

  it("works with filter", async () => {
    const ch = transChan(filter(even));
    const p1 = fillChannel(ch, 10);
    const p2 = expectChannel(ch, [2, 4, 6, 8, 10]);
    return join(p1, p2);
  });

  it("works with reject", async () => {
    const ch = transChan(reject(even));
    const p1 = fillChannel(ch, 10);
    const p2 = expectChannel(ch, [1, 3, 5, 7, 9]);
    return join(p1, p2);
  });

  it("works with take", async () => {
    const ch = transChan(take(3));
    const p1 = fillChannel(ch, 5);
    const p2 = expectChannel(ch, [1, 2, 3, CLOSED, CLOSED]);
    return join(p1, p2);
  });

  it("works with takeWhile", async () => {
    const ch = transChan(takeWhile(lt4));
    const p1 = fillChannel(ch, 5);
    const p2 = expectChannel(ch, [1, 2, 3, CLOSED, CLOSED]);
    return join(p1, p2);
  });

  it("works with takeNth", async () => {
    const ch = transChan(takeNth(3));
    const p1 = fillChannel(ch, 10);
    const p2 = expectChannel(ch, [1, 4, 7, 10]);
    return join(p1, p2);
  });

  it("works with drop", async () => {
    const ch = transChan(drop(3));
    const p1 = fillChannel(ch, 5);
    const p2 = expectChannel(ch, [4, 5]);
    return join(p1, p2);
  });

  it("works with dropWhile", async () => {
    const ch = transChan(dropWhile(lt4));
    const p1 = fillChannel(ch, 5);
    const p2 = expectChannel(ch, [4, 5]);
    return join(p1, p2);
  });

  it("works with unique", async () => {
    const ch = transChan(unique());
    const p1 = fillChannelWith(ch, [1, 1, 2, 3, 3, 3, 4, 5, 3, 1, 5]);
    const p2 = expectChannel(ch, [1, 2, 3, 4, 5]);
    return join(p1, p2);
  });

  it("works with uniqueBy", async () => {
    const ch = transChan(uniqueBy(xprop));
    const array = [
      { x: 1, y: 1 },
      { x: 1, y: 2 },
      { x: 2, y: 3 },
      { x: 3, y: 4 },
      { x: 3, y: 5 },
      { x: 3, y: 6 },
      { x: 4, y: 7 },
      { x: 5, y: 8 },
      { x: 3, y: 9 },
      { x: 1, y: 10 },
      { x: 5, y: 11 }
    ];
    const expected = [
      { x: 1, y: 1 },
      { x: 2, y: 3 },
      { x: 3, y: 4 },
      { x: 4, y: 7 },
      { x: 5, y: 8 }
    ];
    const p1 = fillChannelWith(ch, array);
    const p2 = expectChannel(ch, expected);
    return join(p1, p2);
  });

  it("works with uniqueWith", async () => {
    const ch = transChan(uniqueWith(magComp));
    const p1 = fillChannelWith(ch, [
      6,
      42,
      632,
      23,
      56,
      893,
      1729,
      32768,
      1000
    ]);
    const p2 = expectChannel(ch, [6, 42, 632, 1729, 32768]);
    return join(p1, p2);
  });

  it("works with distinct", async () => {
    const ch = transChan(distinct());
    const p1 = fillChannelWith(ch, [1, 1, 2, 3, 3, 3, 4, 5, 3, 1, 5]);
    const p2 = expectChannel(ch, [1, 2, 3, 4, 5, 3, 1, 5]);
    return join(p1, p2);
  });

  it("works with distinctBy", async () => {
    const ch = transChan(distinctBy(xprop));
    const array = [
      { x: 1, y: 1 },
      { x: 1, y: 2 },
      { x: 2, y: 3 },
      { x: 3, y: 4 },
      { x: 3, y: 5 },
      { x: 3, y: 6 },
      { x: 4, y: 7 },
      { x: 5, y: 8 },
      { x: 3, y: 9 },
      { x: 1, y: 10 },
      { x: 5, y: 11 }
    ];
    const expected = [
      { x: 1, y: 1 },
      { x: 2, y: 3 },
      { x: 3, y: 4 },
      { x: 4, y: 7 },
      { x: 5, y: 8 },
      { x: 3, y: 9 },
      { x: 1, y: 10 },
      { x: 5, y: 11 }
    ];
    const p1 = fillChannelWith(ch, array);
    const p2 = expectChannel(ch, expected);
    return join(p1, p2);
  });

  it("works with distinctWith", async () => {
    const ch = transChan(distinctWith(magComp));
    const p1 = fillChannelWith(ch, [
      6,
      42,
      632,
      23,
      56,
      893,
      1729,
      32768,
      1000
    ]);
    const p2 = expectChannel(ch, [6, 42, 632, 23, 893, 1729, 32768, 1000]);
    return join(p1, p2);
  });

  it("works with chunk", async () => {
    const ch = transChan(chunk(3));
    const p1 = fillChannel(ch, 8, true);
    const p2 = expectChannel(ch, [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8]
    ]);
    return join(p1, p2);
  });

  it("works with chunkBy", () => {
    const ch = transChan(chunkBy(even));
    const p1 = fillChannelWith(ch, [0, 1, 1, 2, 3, 5, 8, 13, 21, 34], true);
    const p2 = expectChannel(ch, [
      [0],
      [1, 1],
      [2],
      [3, 5],
      [8],
      [13, 21],
      [34]
    ]);
    return join(p1, p2);
  });
});
