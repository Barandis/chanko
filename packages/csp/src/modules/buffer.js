/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

/**
 * Provides several types of buffers usable in buffered channels. These are all
 * built on a small, efficient queue which is in turn backed by a JavaScript
 * array.
 *
 * @module csp/buffer
 * @private
 */

import { queue as q, count as qCount, enqueue, dequeue } from "modules/queue";

/**
 * A buffer that stores values sent to a buffered channel until a process
 * receives them.
 *
 * Different buffers differ only in the way that they determine whether they are
 * full and in what happens when a new value is added to a full buffer.
 *
 * @memberof module:csp
 * @typedef {(module:csp.FixedBuffer | module:csp.DroppingBuffer |
 *     module:csp.SlidingBuffer)} Buffer
 */

/**
 * The name of a property that exists on buffer objects for the purpose of
 * itentifying them as buffer objects.
 *
 * @type {Symbol}
 * @private
 */
const BUFFER = Symbol("BUFFER");

/**
 * A possible value of the `{@link module:csp/buffer.BUFFER|BUFFER} property
 * indicating that the buffer is a fixed buffer.
 *
 * @type {Symbol}
 * @private
 */
const FIXED = Symbol("FIXED");

/**
 * A possible value of the `{@link module:csp/buffer.BUFFER|BUFFER} property
 * indicating that the buffer is a dropping buffer.
 *
 * @type {Symbol}
 * @private
 */
const DROPPING = Symbol("DROPPING");

/**
 * A possible value of the `{@link module:csp/buffer.BUFFER|BUFFER} property
 * indicating that the buffer is a sliding buffer.
 *
 * @type {Symbol}
 * @private
 */
const SLIDING = Symbol("SLIDING");

/**
 * Predicate indicating whether the supplied object is a buffer.
 *
 * @param {*} obj The value to test to see if it's a buffer.
 * @returns {boolean} Either `true` if the value is a buffer, or `false` if it is
 *     not.
 * @private
 */
function isBuffer(obj) {
  return !!obj?.[BUFFER];
}

/**
 * A buffer implementation that never discards buffered items when a new item is
 * added.
 *
 * This buffer has a concept of *full*, but it's a soft limit. If the size of
 * the buffer is exceeded, added items are still stored. The only behavior
 * change when a buffer of this type is full is that
 * `{@link module:csp/buffer.isFull|isFull}` will return `true`.
 *
 * A buffer of this type exists only as an object that can be passed to a
 * channel creation function (such as {@link module:csp.chan|chan}) to make that
 * channel a buffered channel. It doesn't have any properties that are intended
 * for external use.
 *
 * @typedef FixedBuffer
 * @memberof module:csp
 */

/**
 * Creates a fixed buffer of the specified capacity.
 *
 * A fixed buffer is a "normal" buffer, one that stores and returns items on
 * demand. It is capable of being over-filled, of still having elements added to
 * it when its capacity has been reached (the only difference is that it will be
 * regarded as "full" internally). A buffer that is full will cause the next put
 * to its channel to block until at least one item is removed from the buffer.
 *
 * This buffer is passed to `{@link module:csp.chan|chan}`, etc. to create a
 * buffered channel. It is not meant to be used directly.
 *
 * @memberof module:csp
 * @param {number} size The number of items that the new buffer can hold before
 *     it's full.
 * @returns {module:csp.FixedBuffer} A new fixed buffer of the specified
 *     capacity.
 */
function fixed(size) {
  return Object.create(null, {
    /**
     * The queue backing this buffer.
     *
     * @type {module:csp/queue~Queue}
     * @private
     * @instance
     */
    queue: {
      value: q()
    },

    /**
     * The number of items that this queue can hold before it's considered full.
     *
     * @type {number}
     * @private
     * @instance
     */
    size: {
      value: size
    },

    /**
     * A marker property used to show that this is a fixed buffer.
     *
     * @type {Symbol}
     * @private
     * @instance
     */
    [BUFFER]: {
      value: FIXED
    }
  });
}

/**
 * A buffer implementation that drops newly added items when the buffer is full.
 *
 * This dropping behavior is silent: the new item is simply not added to the
 * queue. Note that this buffer is never "full" because it can always be added
 * to without exceeding the size, even if that "adding" doesn't result in a new
 * item actually appearing in the buffer.
 *
 * A buffer of this type exists only as an object that can be passed to a
 * channel creation function (such as `{@link module:csp.chan|chan}`) to make
 * that channel a buffered channel. It doesn't have any properties that are
 * intended for external use.
 *
 * @typedef DroppingBuffer
 * @memberof module:csp
 */

/**
 * Creates a dropping buffer of the specified capacity.
 *
 * A dropping buffer silently drops the item being added if the buffer is
 * already at capacity. Since adding a new item will always "succeed" (even if
 * it succeeds by just ignoring the add), it is never considered full and
 * therefore a put to a channel buffered by a dropping buffer never blocks.
 *
 * This buffer is passed to `{@link module:csp.chan|chan}`, etc. to create a
 * buffered channel. It is not meant to be used directly.
 *
 * @memberof module:csp
 * @param {number} size The number of items that the new buffer can hold before
 *     newest items are dropped on add.
 * @returns {module:csp.DroppingBuffer} A new dropping buffer of the specified
 *     capacity.
 */
function dropping(size) {
  return Object.create(null, {
    /**
     * The queue backing this buffer.
     *
     * @type {module:csp/queue~Queue}
     * @private
     * @instance
     */
    queue: {
      value: q()
    },

    /**
     * The number of items that this queue can hold before it's considered full.
     *
     * @type {number}
     * @private
     * @instance
     */
    size: {
      value: size
    },

    /**
     * A marker property used to show that this is a dropping buffer.
     *
     * @type {Symbol}
     * @private
     * @instance
     */
    [BUFFER]: {
      value: DROPPING
    }
  });
}

/**
 * A buffer implementation that drops the oldest item when an item is added to a
 * full buffer.
 *
 * This is very similar to `{@link module:csp.DroppingBuffer|DroppingBuffer}`;
 * the only difference is in what happens when an item is added. In this buffer,
 * the new item is indeed added to the buffer, but in order to keep the count of
 * the buffer at or below its size, the oldest item in the buffer is silently
 * dropped.
 *
 * A buffer of this type exists only as an object that can be passed to a
 * channel creation function (such as `{@link module:csp.chan|chan}`) to make
 * that channel a buffered channel. It doesn't have any properties that are
 * intended for external use.
 *
 * @typedef SlidingBuffer
 * @memberof module:csp
 */

/**
 * Creates a sliding buffer of the specified capacity.
 *
 * A sliding buffer drops the first-added (oldest) item already in the buffer if
 * a new item is added when the buffer is already at capacity. Since it's always
 * capable of having items added to it, it's never considered full, and
 * therefore a put to a channel buffered by a sliding buffer never blocks.
 *
 * This buffer is passed to `{@link module:csp.chan|chan}`, etc. to create a
 * buffered channel. It is not meant to be used directly.
 *
 * @memberof module:csp
 * @param {number} size The number of items that the new buffer can hold before
 *     oldest items are dropped on add.
 * @returns {module:csp.SlidingBuffer} A new sliding buffer of the specified
 *     capacity.
 */
function sliding(size) {
  return Object.create(null, {
    /**
     * The queue backing this buffer.
     *
     * @type {module:csp/queue~Queue}
     * @private
     * @instance
     */
    queue: {
      value: q()
    },

    /**
     * The number of items that this queue can hold before it's considered full.
     *
     * @type {number}
     * @private
     * @instance
     */
    size: {
      value: size
    },

    /**
     * A marker property used to show that this is a sliding buffer.
     *
     * @type {Symbol}
     * @private
     * @instance
     */
    [BUFFER]: {
      value: SLIDING
    }
  });
}

/**
 * Returns the queue that backs a buffer.
 *
 * @param {module:csp.Buffer} buffer The buffer whose queue is returned by this
 *     function.
 * @returns {module:csp/queue~Queue} The queue that backs the supplied buffer.
 * @private
 */
function queue(buffer) {
  return buffer.queue;
}

/**
 * Returns the number of items a buffer can hold before it's full.
 *
 * @param {module:csp.Buffer} buffer The buffer whose size is returned by this
 *     function.
 * @returns {number} The size of the supplied buffer.
 * @private
 */
function size(buffer) {
  return buffer.size;
}

/**
 * Returns the number of items a buffer is currently holding.
 *
 * @param {module:csp.Buffer} buffer The buffer whose current count is returned
 *     by this function.
 * @returns {number} The number of items that the supplied buffer is holding.
 * @private
 */
function count(buffer) {
  return qCount(buffer.queue);
}

/**
 * Determines whether a buffer is at capacity.
 *
 * @param {module:csp.Buffer} buffer The buffer who's being checked to see if
 *     it's at capacity.
 * @returns {number} Either `true` if the supplied buffer is full or `false` if
 *     it isn't.
 * @private
 */
function isFull(buffer) {
  return buffer[BUFFER] === FIXED ? qCount(buffer.queue) >= buffer.size : false;
}

/**
 * Adds one or more items to a buffer.
 *
 * @param {module:csp.Buffer} buffer The buffer where the supplied items will be
 *     added.
 * @param {...*} items The values being added to the supplied buffer.
 * @private
 */
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

/**
 * Removes the next item from a queue and returns it.
 *
 * @param {module:csp.Buffer} buffer The buffer from which an item is being
 *     removed.
 * @returns {*} The item that was removed from the supplied buffer.
 * @private
 */
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
