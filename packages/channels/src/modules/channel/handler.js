/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { protocols as p } from "modules/protocol";
import {
  queue,
  dequeue,
  EMPTY,
  filter,
  count as qCount,
  enqueue
} from "modules/queue";
import { isFull, count, remove } from "modules/buffer";
import { dispatch } from "modules/dispatcher";

const MAX_DIRTY = 64;
const MAX_QUEUED = 1024;

const CLOSED = Symbol("CLOSED");

const BOX = Symbol("BOX");

function isBox(obj) {
  return !!obj?.[BOX];
}

function isReduced(value) {
  return !!value?.[p.reduced];
}

function box(value) {
  return Object.create(null, {
    value: {
      value,
      writable: true
    },
    [BOX]: {
      value: true
    }
  });
}

function sendBox(value, handler) {
  return Object.create(null, {
    value: {
      value,
      writable: true
    },
    handler: {
      value: handler
    },
    [BOX]: {
      value: true
    }
  });
}

function channel(
  buffer,
  xform,
  isTimed = false,
  maxDirty = MAX_DIRTY,
  maxQueued = MAX_QUEUED
) {
  return Object.create(null, {
    buffer: {
      value: buffer
    },
    xform: {
      value: xform
    },
    maxDirty: {
      value: maxDirty
    },
    maxQueued: {
      value: maxQueued
    },
    recvs: {
      value: queue()
    },
    sends: {
      value: queue()
    },
    dirtyRecvs: {
      value: 0,
      writable: true
    },
    dirtySends: {
      value: 0,
      writable: true
    },
    closed: {
      value: false,
      writable: true
    },
    isBuffered: {
      value: !!buffer
    },
    isTimed: {
      value: isTimed
    }
  });
}

function handleSend(channel, value, handler) {
  if (value === CLOSED) {
    throw Error("Cannot send CLOSED to a channel");
  }

  if (channel.closed) {
    handler.commit();
    return box(false);
  }

  let receiver, callback;

  // Push the incoming value through the buffer, even if there's already a
  // receiver waiting for the value. This is to make sure that the transducer
  // step function has a chance to act on the value first, which could change
  // the value or make it altogether unavailable.
  //
  // If the channel is unbuffered this process is skipped (there can't be a
  // transducer on an unbuffered channel anyway). If the buffer is full, the
  // transducer's work is deferred until later when the buffer is not full.
  if (channel.buffer && !isFull(channel.buffer)) {
    handler.commit();
    const done = isReduced(channel.xform[p.step](channel.buffer, value));

    for (;;) {
      if (count(channel.buffer) === 0) {
        break;
      }
      receiver = dequeue(channel.recvs);
      if (receiver === EMPTY) {
        break;
      }
      if (receiver.active) {
        callback = receiver.commit();
        const val = remove(channel.buffer);
        if (callback) {
          dispatch(() => callback(val));
        }
      }
    }

    if (done) {
      close(channel);
    }
    return box(true);
  }

  // This loop happens if the channel is unbuffered and there is at least one
  // pending receive. (Buffered channels break out of this loop immediately,
  // because in order for a buffered channel to reach this point, its buffer
  // must have been full. If the buffer is full, that means there are no pending
  // receives and the first one read will be EMPTY.) It processes the next
  // pending receive immediately.
  for (;;) {
    receiver = dequeue(channel.recvs);
    if (receiver === EMPTY) {
      break;
    }
    if (receiver.active) {
      handler.commit();
      callback = receiver.commit();
      if (callback) {
        dispatch(() => callback(value));
      }
      return box(true);
    }
  }

  // If there are no pending receives on an unbuffered channel, or on a buffered
  // channel with a full buffer, we queue the send to tlet it wait for a receive
  // to become available. Sends whose handlers have gone inactive (which happens
  // if they were processed as part of a `select` call) are periodically purged.
  if (channel.dirtySends > channel.maxDirty) {
    filter(channel.sends, sender => sender.handler.active);
    channel.dirtySends = 0;
  } else {
    channel.dirtySends++;
  }

  if (qCount(channel.sends) >= channel.maxQueued) {
    throw Error(
      `No more than ${channel.maxQueued} pending sends are allowed on a single channel`
    );
  }
  enqueue(channel.sends, sendBox(value, handler));

  return null;
}

function handleRecv(channel, handler) {
  let sender, sendHandler, callback;

  // Runs if the channel is buffered and the buffered is not empty (an empty
  // buffer means there are no pending sends). We immediately process any sends
  // that were queued when there were no pending receives, up until the buffer
  // is filled with sent values.
  if (channel.buffer && count(channel.buffer) > 0) {
    handler.commit();
    const value = remove(channel.buffer);

    for (;;) {
      if (isFull(channel.buffer)) {
        break;
      }
      sender = dequeue(channel.sends);
      if (sender === EMPTY) {
        break;
      }

      sendHandler = sender.handler;
      if (sendHandler.active) {
        callback = sendHandler.commit();
        if (callback) {
          dispatch(() => callback(true));
        }
        if (isReduced(channel.xform[p.step](channel.buffer, sender.value))) {
          close(channel);
        }
      }
    }
    return box(value);
  }

  // This loop runs on an unbuffered channel if there are any pending sends.
  // (Buffered channels break out of this loop immediately because in order to
  // have come this far without returning, the channel's buffer must have been
  // empty. An empty buffer means there are no pending sends, so the first
  // pending send read from it will be EMPTY.) It processes the next pending
  // send immediately.
  for (;;) {
    sender = dequeue(channel.sends);
    if (sender === EMPTY) {
      break;
    }
    sendHandler = sender.handler;
    if (sendHandler.active) {
      callback = sendHandler.commit();
      if (callback) {
        dispatch(() => callback(true));
      }
      return box(sender.value);
    }
  }

  // If we've exhausted all of our pending sends and the channel is marked
  // closed, we can finally reutrn the fact that the channel is closed. This
  // ensures that any sends that were already pending on the channel are
  // processed before closure, even if the channel was closed before that could
  // happen.
  if (channel.closed) {
    handler.commit();
    return box(CLOSED);
  }

  // If an unbuffered channel or a buffered channel with an empty buffer has no
  // pending sends, and if the channel is still open, the receive is queued to
  // be processed when a send is available. Receives whose handlers have gone
  // inactive as the result of `select` processing are periodically purged.
  if (channel.dirtyRecvs > channel.maxDirty) {
    filter(channel.recvs, receiver => receiver.active);
    channel.dirtyRecvs = 0;
  } else {
    channel.dirtyRecvs++;
  }

  if (qCount(channel.recvs) >= channel.maxQueued) {
    throw Error(
      `No more than ${channel.maxQueued} pending receives are allowed on a single channel`
    );
  }
  enqueue(channel.recvs, handler);

  return null;
}

function close(channel) {
  if (channel.closed) {
    return;
  }
  channel.closed = true;

  let receiver, sender, callback;

  // If there is a buffer and it has at least one value in it, send those values
  // to any pending receives that might still be queued.
  if (channel.buffer) {
    channel.xform[p.result](channel.buffer);
    for (;;) {
      if (count(channel.buffer) === 0) {
        break;
      }
      receiver = dequeue(channel.recvs);
      if (receiver === EMPTY) {
        break;
      }
      if (receiver.active) {
        callback = receiver.commit();
        const value = remove(channel.buffer);
        if (callback) {
          dispatch(() => callback(value));
        }
      }
    }
  }

  // Once the buffer is empty (or if there isn't a buffer at all), send CLOSED
  // to all remaining queued receives.
  for (;;) {
    receiver = dequeue(channel.recvs);
    if (receiver === EMPTY) {
      break;
    }
    if (receiver.active) {
      callback = receiver.commit();
      if (callback) {
        dispatch(() => callback(CLOSED));
      }
    }
  }

  // Send `false` to any remaining queued sends.
  for (;;) {
    sender = dequeue(channel.sends);
    if (sender === EMPTY) {
      break;
    }
    if (sender.handler.active) {
      callback = sender.handler.commit();
      if (callback) {
        dispatch(() => callback(false));
      }
    }
  }
}

export {
  CLOSED,
  MAX_DIRTY,
  MAX_QUEUED,
  channel,
  handleSend,
  handleRecv,
  close,
  box,
  isBox
};
