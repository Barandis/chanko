/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { queue as q, count as qCount, enqueue, dequeue } from "modules/queue";

const BUFFER = Symbol("BUFFER");
const FIXED = Symbol("FIXED");
const DROPPING = Symbol("DROPPING");
const SLIDING = Symbol("SLIDING");

function isBuffer(obj) {
  return !!obj?.[BUFFER];
}

function fixed(size) {
  return Object.create(null, {
    queue: {
      value: q()
    },

    size: {
      value: size
    },

    [BUFFER]: {
      value: FIXED
    }
  });
}

function dropping(size) {
  return Object.create(null, {
    queue: {
      value: q()
    },

    size: {
      value: size
    },

    [BUFFER]: {
      value: DROPPING
    }
  });
}

function sliding(size) {
  return Object.create(null, {
    queue: {
      value: q()
    },

    size: {
      value: size
    },

    [BUFFER]: {
      value: SLIDING
    }
  });
}

function queue(buffer) {
  return buffer.queue;
}

function size(buffer) {
  return buffer.size;
}

function count(buffer) {
  return qCount(buffer.queue);
}

function isFull(buffer) {
  return buffer[BUFFER] === FIXED ? qCount(buffer.queue) >= buffer.size : false;
}

function add(buffer, ...items) {
  switch (buffer[BUFFER]) {
    case FIXED:
      for (const item of items) {
        enqueue(buffer.queue, item);
      }
      break;

    case DROPPING:
      for (const item of items) {
        if (count(buffer) < size(buffer)) {
          enqueue(buffer.queue, item);
        }
      }
      break;

    case SLIDING:
      for (const item of items) {
        if (count(buffer) >= size(buffer)) {
          dequeue(buffer.queue);
        }
        enqueue(buffer.queue, item);
      }
      break;

    default:
      return;
  }
}

function remove(buffer) {
  return dequeue(buffer.queue);
}

export {
  isBuffer,
  fixed,
  dropping,
  sliding,
  queue,
  size,
  count,
  isFull,
  add,
  remove
};
