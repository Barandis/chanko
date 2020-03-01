/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import {
  go,
  chan,
  send,
  recv,
  select,
  sendAsync,
  close,
  CLOSED
} from "@chanko/channels";

const TAPS = Symbol("multitap/taps");

function isNumber(x) {
  return Object.prototype.toString.call(x) === "[object Number]" && isFinite(x);
}

function pipe(src, dst, keepOpen = false) {
  go(async () => {
    for (;;) {
      const value = await recv(src);
      if (value === CLOSED) {
        if (!keepOpen) {
          close(dst);
        }
        break;
      }
      if (!(await send(dst, value))) {
        break;
      }
    }
  });

  return dst;
}

function partition(fn, src, tBuffer = 0, fBuffer = 0) {
  const tDst = chan(tBuffer);
  const fDst = chan(fBuffer);

  go(async () => {
    for (;;) {
      const value = await recv(src);
      if (value === CLOSED) {
        close(tDst);
        close(fDst);
        break;
      }
      await send(fn(value) ? tDst : fDst, value);
    }
  });

  return [tDst, fDst];
}

function merge(srcs, buffer = 0) {
  const dst = chan(buffer);
  const inputs = srcs.slice();

  go(async () => {
    for (;;) {
      if (inputs.length === 0) {
        break;
      }
      const { value, channel } = await select(inputs);
      if (value === CLOSED) {
        inputs.splice(inputs.indexOf(channel), 1);
        continue;
      }
      await send(dst, value);
    }
    close(dst);
  });

  return dst;
}

function split(src, ...buffers) {
  let bfs = buffers.length === 0 ? [2] : buffers;
  if (bfs.length === 1 && isNumber(bfs[0])) {
    const count = bfs[0];
    bfs = [];
    for (let i = 0; i < count; i++) {
      bfs.push(0);
    }
  }

  const dsts = bfs.map(bf => chan(bf));
  const done = chan();
  let count = 0;

  function callback() {
    if (--count === 0) {
      sendAsync(done);
    }
  }

  go(async () => {
    for (;;) {
      const value = await recv(src);
      if (value === CLOSED) {
        for (const dst of dsts) {
          close(dst);
        }
        break;
      }

      count = dsts.length;
      for (const dst of dsts) {
        sendAsync(dst, value, callback);
      }
      await recv(done);
    }
  });

  return dsts;
}

function makeTap(src) {
  Object.defineProperty(src, TAPS, {
    configurable: true,
    writable: true,
    value: []
  });

  const done = chan();
  let count = 0;

  function callback() {
    if (--count === 0) {
      sendAsync(done);
    }
  }

  go(async () => {
    for (;;) {
      const value = await recv(src);
      if (value === CLOSED || src[TAPS].length === 0) {
        delete src[TAPS];
        break;
      }

      count = src[TAPS].length;
      for (const tap of src[TAPS]) {
        sendAsync(tap, value, callback);
      }
      await recv(done);
    }
  });
}

function tap(src, dst = chan()) {
  if (!src[TAPS]) {
    makeTap(src);
  }
  if (!src[TAPS].includes(dst)) {
    src[TAPS].push(dst);
  }
  return dst;
}

function untap(src, dst) {
  const taps = src[TAPS];
  if (taps) {
    const index = taps.indexOf(dst);
    if (index !== -1) {
      taps.splice(index, 1);
      if (taps.length === 0) {
        sendAsync(src);
      }
    }
  }
}

function untapAll(src) {
  if (src[TAPS]) {
    src[TAPS] = [];
    sendAsync(src);
  }
}

export { pipe, partition, merge, split, tap, untap, untapAll };
