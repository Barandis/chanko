/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

/**
 * @module chanko/buffers
 */

const EMPTY = Symbol("EMPTY");

/**
 * A general purpose, highly efficient queue. It's backed by a regular array,
 * but it doesn't use `unshift` to take elements from the array because
 * `unshift` causes elements to be copied each time it's used. Instead, a
 * pointer is maintained that keeps track of the index of the next element to
 * be dequeued, and when that dequeue happens, the pointer simply increments.
 * When the empty space at the head of the array gets large enough, that empty
 * space is removed by a single slice operation.
 *
 * Enqueuing elements is done with a regular `push`, which *is* highly
 * efficient.
 *
 * @namespace Queue
 */

/**
 * Creates a new queue.
 *
 * @returns {module:chanko/buffers~Queue} a new, empty queue.
 * @private
 */
function queue() {
  let store = [];
  let pointer = 0;

  function count() {
    return store.length - pointer;
  }

  function empty() {
    return store.length === 0;
  }

  function enqueue(item) {
    store.push(item);
  }

  function dequeue() {
    if (empty()) {
      return EMPTY;
    }

    const item = store[pointer];
    // This slices off the empty head of the backing store when that empty space
    // is more than half as large as the backing store itself.
    if (++pointer * 2 >= store.length) {
      store = store.slice(pointer);
      pointer = 0;
    }
    return item;
  }

  function peek() {
    return empty() ? EMPTY : store[pointer];
  }

  function filter(fn) {
    for (let i = 0, max = count(); i < max; i++) {
      const item = dequeue();
      if (fn(item)) {
        enqueue(item);
      }
    }
  }

  return Object.freeze({
    /**
     * Returns the number of elements currently stored in the queue. This does
     * not necessarily match the size of the backing store because the pointer
     * may have advanced past some of the items.
     *
     * @memberof module:chanko/buffers~Queue
     * @instance
     * @type {number}
     * @readonly
     */
    get count() {
      return count();
    },

    /**
     * Indicates whether the queue is empty.
     *
     * @memberof module:chanko/buffers~Queue
     * @instance
     * @type {boolean}
     * @readonly
     */
    get empty() {
      return empty();
    },

    /**
     * Adds a new item to the queue.
     *
     * @function enqueue
     * @memberof module:chanko/buffers~Queue
     * @instance
     * @param {*} item the value being added to the queue.
     */
    enqueue,

    /**
     * Removes the oldest item from the queue and returns that item. If the
     * removal causes the mount of empty space at the head of the backing store
     * to exceed a threshold (half the current count), that empty space is
     * removed.
     *
     * @function dequeue
     * @memberof module:chanko/buffers~Queue
     * @instance
     * @return {*} the oldest item currently stored in the queue.
     */
    dequeue,

    /**
     * Returns the oldest item in the queue without removing it.
     *
     * @function peek
     * @memberof module:chanko/buffers~Queue
     * @instance
     * @return {*} the oldest item currently stored in the queue.
     */
    peek,

    /**
     * Filters out any item in the queue that causes the supplied predicate
     * function to return `false` when passed that item.
     *
     * This is not a typical general-purpose queue operation, but it's useful in
     * this project to filter out inactive handlers in channels.
     *
     * @function filter
     * @memberof module:chanko/buffers~Queue
     * @instance
     * @param {Function} fn the predicate filter function. If an item is passed
     * to this function and the function returns `false`, that item will be
     * removed from the queue.
     */
    filter
  });
}

/**
 * A buffer implementation that never discards buffered items when a new item is
 * added.
 *
 * This buffer has a concept of *full*, but it's a soft limit. If the size of
 * the buffer is exceeded, added items are still stored.
 * {@link module:chanko/buffers~FixedBuffer#full|full} returns `true` any time
 * the size limit is reached or exceeded, so it's entirely possible to call
 * {@link module:chanko/buffers~FixedBuffer#remove|remove} on a full buffer and
 * have it still be full.
 *
 * @namespace FixedBuffer
 */

/**
 * Creates a fixed buffer of the specified capacity.
 *
 * A fixed buffer is a 'normal' buffer, one that stores and returns items on
 * demand. While this buffer can in theory be over-filled, that capability is
 * not used in this project's channels. A buffer that is full will cause the
 * next send to block until an item is received off that channel.
 *
 * This buffer can be passed to `{@link module:chanko~Chanko.chan|chan}` to
 * create a buffered channel.
 *
 * @memberof module:chanko/buffers~Buffers
 * @param {number} size the number of items that the buffer can hold before it's
 * full.
 * @return {module:chanko/buffers~FixedBuffer} a new fixed buffer of the
 * specified capacity.
 */
function fixed(size) {
  const q = queue();

  return Object.freeze({
    /**
     * The queue that backs this buffer.
     *
     * @memberof module:chanko/buffers~FixedBuffer
     * @instance
     * @type {module:chanko/buffers~Queue}
     * @readonly
     */
    queue: q,

    /**
     * The size of the buffer.
     *
     * This is *not* the number of elements in the buffer. It is the number of
     * elements that can be stored before the buffer is considered full.
     *
     * @memberof module:chanko/buffers~FixedBuffer
     * @instance
     * @type {number}
     * @readonly
     */
    size,

    /**
     * Indicates whether the buffer as as many or more items stored as its
     * {@link module:chanko/buffers~FixedBuffer#size|size}.
     *
     * @memberof module:chanko/buffers~FixedBuffer
     * @instance
     * @type {boolean}
     * @readonly
     */
    get full() {
      return q.count >= size;
    },

    /**
     * The number of items currently being stored by the buffer.
     *
     * @memberof module:chanko/buffers~FixedBuffer
     * @instance
     * @type {number}
     * @readonly
     */
    get count() {
      return q.count;
    },

    /**
     * Adds one or more items to tbe buffer. These items will be added even if
     * the buffer is full.
     *
     * @memberof module:chanko/buffers~FixedBuffer
     * @instance
     * @param {...*} items the items to be added to the buffer.
     */
    add(...items) {
      for (const item of items) {
        q.enqueue(item);
      }
    },

    /**
     * Removes and returns the oldest item in the buffer.
     *
     * @memberof module:chanko/buffers~FixedBuffer
     * @instance
     * @return {*} the oldest item in the buffer.
     */
    remove() {
      return q.dequeue();
    }
  });
}

/**
 * A buffer implementation that drops newly added items when the buffer is
 * already full.
 *
 * This dropping action is silent; the new item is simply not added to the
 * buffer. That means this buffer is never 'full' because it can always be added
 * to without exceeding the size, even if that 'adding' doesn't actually result
 * in a new item appearing in the buffer.
 *
 * @namespace DroppingBuffer
 */

/**
 * Creates a dropping buffer of the specified capacity.
 *
 * A dropping buffer silently drops the item being added if the buffer is
 * already at capacity. Since adding a new item will always 'succeed', it is
 * never considered full.
 *
 * This buffer can be passed to `{@link module:chanko~Chanko.chan|chan}` to
 * create a buffered channel.
 *
 * @memberof module:chanko/buffers~Buffers
 * @param {number} size the number of items the buffer can hold before new items
 * are dropped on add.
 * @return {module:chanko/buffers~DroppingBuffer} a new dropping buffer of the
 * specified capacity.
 */
function dropping(size) {
  const q = queue();

  return Object.freeze({
    /**
     * The queue that backs this buffer.
     *
     * @memberof module:chanko/buffers~DroppingBuffer
     * @instance
     * @type {module:chanko/buffers~Queue}
     * @readonly
     */
    queue: q,

    /**
     * The size of the buffer.
     *
     * This is *not* the number of elements in the buffer. It is the number of
     * elements that can be stored before the buffer is considered full.
     *
     * @memberof module:chanko/buffers~DroppingBuffer
     * @instance
     * @type {number}
     * @readonly
     */
    size,

    /**
     * Indicates whether the buffer is full. As this type of buffer is never
     * considered full, this will always be `false`.
     *
     * @memberof module:chanko/buffers~DroppingBuffer
     * @instance
     * @type {boolean}
     * @readonly
     */
    full: false,

    /**
     * The number of items currently being stored by the buffer.
     *
     * @memberof module:chanko/buffers~DroppingBuffer
     * @instance
     * @type {number}
     * @readonly
     */
    get count() {
      return q.count;
    },

    /**
     * Adds one or more items to tbe buffer. If the buffer is already at
     * capacity, the item will be silently dropped instead.
     *
     * @memberof module:chanko/buffers~DroppingBuffer
     * @instance
     * @param {...*} items the items to be added to the buffer.
     */
    add(...items) {
      for (const item of items) {
        if (q.count < size) {
          q.enqueue(item);
        }
      }
    },

    /**
     * Removes and returns the oldest item in the buffer.
     *
     * @memberof module:chanko/buffers~DroppingBuffer
     * @instance
     * @return {*} the oldest item in the buffer.
     */
    remove() {
      return q.dequeue();
    }
  });
}

/**
 * A buffer implementation that drops the oldest stored item when a new item is
 * added to a full buffer.
 *
 * This action is silent; the oldest item is simply removed before the new one
 * is added. That means this buffer is never 'full' because it can always be
 * added to without exceeding the size, even if that 'adding' also involves
 * removing another item.
 *
 * @namespace SlidingBuffer
 */

/**
 * Creates a sliding buffer of the specified capacity.
 *
 * A sliding buffer drops the oldest item already in the buffer if a new item is
 * added when the buffer is already at capacity. Since it's always capable of
 * having new items added to it, it's never considered full.
 *
 * This buffer can be passed to `{@link module:chanko~Chanko.chan|chan}` to
 * create a buffered channel.
 *
 * @memberof module:chanko/buffers~Buffers
 * @param {number} size the number of items that the buffer can hold before the
 * oldest items are dropped on add.
 * @return {module:chanko/buffers~SlidingBuffer} a new sliding buffer of the
 * specified capacity.
 */
function sliding(size) {
  const q = queue();

  return Object.freeze({
    /**
     * The queue that backs this buffer.
     *
     * @memberof module:chanko/buffers~SlidingBuffer
     * @instance
     * @type {module:chanko/buffers~Queue}
     * @readonly
     */
    queue: q,

    /**
     * The size of the buffer.
     *
     * This is *not* the number of elements in the buffer. It is the number of
     * elements that can be stored before the buffer is considered full.
     *
     * @memberof module:chanko/buffers~SlidingBuffer
     * @instance
     * @type {number}
     * @readonly
     */
    size,

    /**
     * Indicates whether the buffer is full. As this type of buffer is never
     * considered full, this will always be `false`.
     *
     * @memberof module:chanko/buffers~SlidingBuffer
     * @instance
     * @type {boolean}
     * @readonly
     */
    full: false,

    /**
     * The number of items currently being stored by the buffer.
     *
     * @memberof module:chanko/buffers~SlidingBuffer
     * @instance
     * @type {number}
     * @readonly
     */
    get count() {
      return q.count;
    },

    /**
     * Adds one or more items to tbe buffer. If the buffer is already at
     * capacity, the oldest item will be removed before the new one is added.
     *
     * @memberof module:chanko/buffers~SlidingBuffer
     * @instance
     * @param {...*} items the items to be added to the buffer.
     */
    add(...items) {
      for (const item of items) {
        if (q.count === size) {
          q.dequeue();
        }
        q.enqueue(item);
      }
    },

    /**
     * Removes and returns the oldest item in the buffer.
     *
     * @memberof module:chanko/buffers~SlidingBuffer
     * @instance
     * @return {*} the oldest item in the buffer.
     */
    remove() {
      return q.dequeue();
    }
  });
}

export { EMPTY, queue, fixed, dropping, sliding };
