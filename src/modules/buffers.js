/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

/**
 * @module chanko/buffers
 */

export const EMPTY = Symbol("EMPTY");

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
export function queue() {
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
     * @name count
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
     * @name empty
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

export function fixed(size) {
  const q = queue();

  return Object.freeze({
    queue: q,
    size,

    get full() {
      return q.count >= size;
    },

    get count() {
      return q.count;
    },

    add(...items) {
      for (const item of items) {
        q.enqueue(item);
      }
    },

    remove() {
      return q.dequeue();
    }
  });
}

export function dropping(size) {
  const q = queue();

  return Object.freeze({
    queue: q,
    size,
    full: false,

    get count() {
      return q.count;
    },

    add(...items) {
      for (const item of items) {
        if (q.count < size) {
          q.enqueue(item);
        }
      }
    },

    remove() {
      return q.dequeue();
    }
  });
}

export function sliding(size) {
  const q = queue();

  return Object.freeze({
    queue: q,
    size,
    full: false,

    get count() {
      return q.count;
    },

    add(...items) {
      for (const item of items) {
        if (q.count === size) {
          q.dequeue();
        }
        q.enqueue(item);
      }
    },

    remove() {
      return q.dequeue();
    }
  });
}
