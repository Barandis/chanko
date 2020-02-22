/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { queue as createQueue, EMPTY } from "modules/buffers";

const SET_IMMEDIATE = Symbol("SET_IMMEDIATE");

const MESSAGE_CHANNEL = Symbol("MESSAGE_CHANNEL");

const SET_TIMEOUT = Symbol("SET_TIMEOUT");

const dispatcher = (function() {
  const queue = createQueue();

  let batchSize = 1024;
  let dispatchMethod = SET_IMMEDIATE;
  let dispatchFn = createDispatchFn(dispatchMethod);

  let running = false;
  let queued = true;

  function processTasks() {
    running = true;
    queued = false;

    let count = 0;

    for (;;) {
      const task = queue.dequeue();
      if (task === EMPTY) {
        break;
      }

      task();

      if (count >= batchSize) {
        break;
      }
      count++;
    }

    running = false;
    if (!queue.empty) {
      dispatchFn();
    }
  }

  function calculateMethod(method) {
    switch (method) {
      case MESSAGE_CHANNEL:
        if (typeof MessageChannel !== "undefined") {
          return MESSAGE_CHANNEL;
        }
        return SET_TIMEOUT;

      case SET_TIMEOUT:
        return SET_TIMEOUT;

      default:
        if (typeof setImmediate !== "undefined") {
          return SET_IMMEDIATE;
        }
        if (typeof MessageChannel !== "undefined") {
          return MESSAGE_CHANNEL;
        }
        return SET_TIMEOUT;
    }
  }

  function createDispatchFn(method) {
    switch (calculateMethod(method)) {
      case SET_IMMEDIATE:
        return () => {
          if (!(queued && running)) {
            queued = true;
            setImmediate(processTasks);
          }
        };

      case MESSAGE_CHANNEL: {
        const channel = new MessageChannel();
        channel.port1.onmessage = () => processTasks();
        return () => {
          if (!(queued && running)) {
            queued = true;
            channel.port2.postMessage(0);
          }
        };
      }

      case SET_TIMEOUT:
        return () => {
          if (!(queued && running)) {
            queued = true;
            setTimeout(processTasks, 0);
          }
        };
    }
  }

  function dispatch(task) {
    queue.enqueue(task);
    dispatchFn();
  }

  return Object.freeze({
    get batchSize() {
      return batchSize;
    },
    set batchSize(value) {
      batchSize = value;
    },

    get dispatchMethod() {
      return dispatchMethod;
    },
    set dispatchMethod(value) {
      dispatchMethod = calculateMethod(value);
      dispatchFn = createDispatchFn(dispatchMethod);
    },
    dispatch
  });
})();

export { dispatcher, SET_IMMEDIATE, MESSAGE_CHANNEL, SET_TIMEOUT };
