/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { box, handleSend, handleRecv, isBox } from "./handler";

const DEFAULT = Symbol("DEFAULT");

function selectHandler(active, fn) {
  return Object.create(null, {
    active: {
      get() {
        return active.value;
      }
    },

    commit: {
      value: () => {
        active.value = false;
        return fn;
      }
    }
  });
}

function randomArray(upper) {
  const array = [];
  for (let k = 0; k < upper; k++) {
    array.push(k);
  }
  for (let j = upper - 1; j > 0; j--) {
    const i = Math.floor(Math.random() * (j + 1));
    const temp = array[j];
    array[j] = array[i];
    array[i] = temp;
  }
  return array;
}

function selectResult(value, channel) {
  return Object.assign(Object.create(null), { value, channel });
}

function selectAsync(ops, callback = () => {}, options = {}) {
  const count = ops.length;
  if (count === 0) {
    throw Error("select called with no operations");
  }

  const priority = !!options.priority;
  const indices = priority ? [] : randomArray(count);

  const active = box(true);

  function createSelectHandler(channel) {
    return selectHandler(active, value => {
      callback(selectResult(value, channel));
    });
  }

  let result;

  for (let i = 0; i < count; i++) {
    // Choose an operation. If `priority` is true then it's the next index,
    // otherwise it's random
    const op = ops[priority ? i : indices[i]];
    let channel, value;

    // Apply every operation to its channel, one at a time
    if (Array.isArray(op)) {
      [channel, value] = op;
      result = handleSend(channel, value, createSelectHandler(channel));
    } else {
      channel = op;
      result = handleRecv(channel, createSelectHandler(channel));
    }

    // We check for box here because a box from a channel indicates that the
    // value is immediately available (that there is no need to block to get the
    // value). If this happens, we execute the callback immediately with that
    // value and channel and stop queueing other operations.
    if (isBox(result)) {
      callback(selectResult(result.value, channel));
      break;
    }
  }

  // If none of the operaetions immediately returned values (they are all
  // blocked), and we have set a default channel option, then return the value
  // if the default channel rather than waiting for the queued operations to
  // complete.
  if (
    !isBox(result) &&
    Object.prototype.hasOwnProperty.call(options, "default")
  ) {
    if (active.value) {
      active.value = false;
      callback(selectResult(options.default, DEFAULT));
    }
  }
}

function select(ops, options = {}) {
  return new Promise(resolve => {
    selectAsync(ops, resolve, options);
  });
}

function value(selectResult) {
  return selectResult.value;
}

function channel(selectResult) {
  return selectResult.channel;
}

export { DEFAULT, select, selectAsync, value, channel };
