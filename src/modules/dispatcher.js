/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import {
  queue as q,
  EMPTY,
  count as qCount,
  dequeue,
  enqueue
} from "modules/queue";
const queue = q();

const SET_IMMEDIATE = Symbol("setImmediate");
const MESSAGE_CHANNEL = Symbol("MessageChannel");
const SET_TIMEOUT = Symbol("setTimeout");

const options = {
  batchSize: 1024,
  dispatchMethod: SET_IMMEDIATE
};

let dispatcher = createDispatcher();
let running = false;
let queued = true;

function createDispatcher() {
  switch (calcDispatchMethod()) {
    // We prefer `setImmediate` if it's available, but it's only available in
    // Node and some old browsers.
    case SET_IMMEDIATE:
      return () => {
        if (!(queued && running)) {
          queued = true;
          setImmediate(processTasks);
        }
      };

    // Most modern browsers implement `MessageChannel`. This is the preferred
    // method in browser environments where `setImmediate` isn't available.
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

    // If all else fails, just use `setTimeout`. It's a little slower than the
    // other methods, but it's available everywhere.
    case SET_TIMEOUT:
      return () => {
        if (!(queued && running)) {
          queued = true;
          setTimeout(processTasks, 0);
        }
      };
  }
}

function calcDispatchMethod() {
  switch (options.dispatchMethod) {
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

function processTasks() {
  running = true;
  queued = false;
  let count = 0;

  for (;;) {
    const task = dequeue(queue);
    if (task === EMPTY) {
      break;
    }

    task();

    if (count >= options.batchSize) {
      break;
    }
    count++;

    running = false;
    if (qCount(queue)) {
      dispatcher();
    }
  }
}

function setDispatcher() {
  dispatcher = createDispatcher();
}

function config(opts = null) {
  if (opts === null) {
    return Object.assign({}, options);
  }

  for (const key in options) {
    if (key in opts) {
      options[key] = opts[key];

      if (key === "dispatchMethod") {
        setDispatcher();
      }
    }
  }
}

function dispatch(task) {
  enqueue(queue, task);
  dispatcher();
}

export { SET_IMMEDIATE, MESSAGE_CHANNEL, SET_TIMEOUT, config, dispatch };
