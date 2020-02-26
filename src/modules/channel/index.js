// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import {
  CLOSED,
  channel as chanImpl,
  handleSend,
  handleRecv,
  close as closeImpl,
  MAX_DIRTY,
  MAX_QUEUED
} from "./handler";
import { add, fixed, isBuffer } from "modules/buffer";
import { protocols as p } from "modules/protocol";

const DEFAULT_HANDLER = () => CLOSED;

function opHandler(fn) {
  return Object.create(null, {
    active: {
      value: true
    },
    commit: {
      value: () => fn
    }
  });
}

function handleException(buffer, handler, ex) {
  const value = handler(ex);
  if (value !== CLOSED) {
    add(buffer, value);
  }
  return buffer;
}

function handlerTransducer(xform, handler = DEFAULT_HANDLER) {
  return {
    [p.step](buffer, input) {
      try {
        return xform[p.step](buffer, input);
      } catch (ex) {
        return handleException(buffer, handler, ex);
      }
    },

    [p.result](buffer) {
      try {
        return xform[p.result](buffer);
      } catch (ex) {
        return handleException(buffer, handler, ex);
      }
    }
  };
}

const bufferReducer = {
  [p.init]() {
    throw Error("init not available");
  },

  [p.step](buffer, input) {
    add(buffer, input);
    return buffer;
  },

  [p.result](buffer) {
    return buffer;
  }
};

function parseArgs(buffer, options, defaultOptions) {
  let buf;
  let opts;

  if (!buffer) {
    // same for 0, null, or undefined
    buf = null;
    opts = options;
  } else if (typeof buffer === "number") {
    buf = fixed(buffer);
    opts = options;
  } else if (isBuffer(buffer)) {
    buf = buffer;
    opts = options;
  } else {
    // If no buffer is specified but a transducer is, we assume fixed(1)
    // instead of no buffer
    buf = buffer?.transducer ? fixed(1) : null;
    opts = buffer;
  }

  const { transducer, handler, maxDirty, maxQueued, timeout } = Object.assign(
    {},
    defaultOptions,
    opts
  );
  return { buf, transducer, handler, maxDirty, maxQueued, timeout };
}

function chan(buffer, options) {
  const defaultOptions = {
    maxDirty: MAX_DIRTY,
    maxQueued: MAX_QUEUED
  };
  const { buf, transducer, handler, maxDirty, maxQueued, timeout } = parseArgs(
    buffer,
    options,
    defaultOptions
  );

  if (transducer && !buf) {
    throw Error("Only buffered channels can use transducers");
  }

  const xf = handlerTransducer(
    transducer ? transducer(bufferReducer) : bufferReducer,
    handler
  );

  const impl = chanImpl(buf, xf, maxDirty, maxQueued);

  const isTimed = typeof timeout === "number";
  if (isTimed) {
    setTimeout(() => closeImpl(impl), timeout);
  }

  return Object.create(null, {
    impl: {
      value: impl
    },
    isBuffered: {
      value: !!buf
    },
    isTimed: {
      value: isTimed
    }
  });
}

function timedChan(delay = 0) {
  return chan({ timeout: delay });
}

function transChan(transducer, handler) {
  return chan({ transducer, handler });
}

function isClosed(channel) {
  return channel.impl.closed;
}

function isBuffered(channel) {
  return channel.isBuffered;
}

function isTimed(channel) {
  return channel.isTimed;
}

function sendAsync(channel, value, callback = () => {}) {
  const result = handleSend(channel.impl, value, opHandler(callback));
  if (result && callback) {
    callback(result.value);
  }
}

function recvAsync(channel, callback = () => {}) {
  const result = handleRecv(channel.impl, opHandler(callback));
  if (result && callback) {
    callback(result.value);
  }
}

function send(channel, value) {
  return new Promise(resolve => {
    sendAsync(channel, value, resolve);
  });
}

function recv(channel) {
  return new Promise(resolve => {
    recvAsync(channel, resolve);
  });
}

function recvOrThrow(channel) {
  return new Promise((resolve, reject) => {
    recvAsync(channel, result => {
      if (Object.prototype.isPrototypeOf.call(Error.prototype, result)) {
        reject(result);
      } else {
        resolve(result);
      }
    });
  });
}

function close(channel) {
  closeImpl(channel.impl);
}

export {
  CLOSED,
  chan,
  timedChan,
  transChan,
  isClosed,
  isBuffered,
  isTimed,
  sendAsync,
  recvAsync,
  send,
  recv,
  recvOrThrow,
  close
};
