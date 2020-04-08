/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

/**
 * Provides an efficient general-purpose queue.
 *
 * @module csp/queue
 * @private
 */

/**
 * A general purpose, highly efficient JavaScript queue. It is backed by a
 * JavaScript array, but it does not use `unshift` to take elements off the
 * array because unshift causes elements to be copied every time it's used.
 * Instead, a pointer is maintained that keeps track of the location of the next
 * element to be dequeued, and when that dequeue happens, the pointer simply
 * moves. When the empty space at the head of the array gets large enough, it's
 * removed by a single slice operation.
 *
 * Putting elements into the queue is just done with a basic `push`, which *is*
 * highly efficient.
 *
 * This type of queue is possible in JavaScript because JS arrays are resizable.
 * In languages with fixed-size arrays, a resizing operation would have to be
 * run each time the queue fills.
 *
 * @namespace Queue
 * @private
 */

/**
 * The value returned when a buffer's queue is read when it's empty.
 *
 * This special value is used because `null` and `undefined` are possible
 * legitimate values that can be stored in a buffer.
 *
 * @type {Symbol}
 * @memberof module:csp
 */
const EMPTY = Symbol("EMPTY");

/**
 * A marker property name to indicate that an object is in fact a queue.
 *
 * A queue has a property with this name whose readonly value is set to `true`.
 * This is not meant to be read except by the
 * `{@link module:queue.isQueue|isQueue}` function.
 *
 * @type {Symbol}
 * @private
 */
const QUEUE = Symbol("QUEUE");

/**
 * Determines whether an object is a queue.
 *
 * @param {*} obj The object to be tested.
 * @returns {boolean} Either `true` if the object is a queue or `false` if it is
 *     not.
 * @private
 */
function isQueue(obj) {
  return !!obj?.[QUEUE];
}

/**
 * Creates a new queue. This queue is created empty, with a backing array of
 * length 0.
 *
 * @memberof module:csp/queue
 * @returns {module:csp/queue~Queue} A new, empty queue.
 * @private
 */
function queue() {
  return Object.create(null, {
    store: {
      value: [],
      writable: true
    },

    pointer: {
      value: 0,
      writable: true
    },

    [QUEUE]: {
      value: true
    }
  });
}

/**
 * Returns the number of elements stored in a queue. This may or may not equal
 * the length of the backing store, as there is often empty space at the head of
 * the backing store.
 *
 * @memberof module:csp/queue
 * @param {module:csp/queue~Queue} queue The queue whose items are being
 *     counted.
 * @returns {number} The number of items in the queue.
 * @private
 */
function count(queue) {
  return queue.store.length - queue.pointer;
}

/**
 * Determines whether a queue is empty.
 *
 * @memberof module:csp/queue
 * @param {module:csp/queue~Queue} queue The queue being checked for emptiness.
 * @returns {boolean} Either `true` if the queue is empty or `false` if it is
 *     not.
 * @private
 */
function isEmpty(queue) {
  return queue.store.length === 0;
}

/**
 * Adds an item to a queue.
 *
 * @memberof module:csp/queue
 * @param {module:csp/queue~Queue} queue The queue which is having an item added
 *     to it.
 * @param {*} item The item being added to the queue.
 * @private
 */
function enqueue(queue, item) {
  queue.store.push(item);
}

/**
 * Removes an item from a queue and returns that item. If the removal causes the
 * amount of empty space at the head of the backing store to exceed a threshold,
 * that empty space is removed.
 *
 * @memberof module:csp/queue
 * @param {module:csp/queue~Queue} queue The queue whose oldest item is to be
 *     removed.
 * @returns {*} The oldest stored item in the queue.
 * @private
 */
function dequeue(queue) {
  if (queue.store.length === 0) {
    return EMPTY;
  }

  const item = queue.store[queue.pointer];
  // Removes the items in the backing store before the current pointer, if there
  // is enough "empty" space before the pointer to justify it (i.e., the unused
  // portion is at least half as large as the used portion)
  if (++queue.pointer * 2 >= queue.store.length) {
    queue.store = queue.store.slice(queue.pointer);
    queue.pointer = 0;
  }
  return item;
}

/**
 * Returns the next item in a queue without removing it.
 *
 * @memberof module:csp/queue
 * @param {module:csp/queue~Queue} queue The queue whose oldest item is to be
 *     peeked at.
 * @returns {*} The oldest item stored in the queue.
 * @private
 */
function peek(queue) {
  return queue.store.length === 0 ? EMPTY : queue.store[queue.pointer];
}

/**
 * Filters out any item in a queue that does not cause the supplied predicate
 * function to return `true` when passed that item. This is not exactly a
 * general purpose queue operation, but we need it with channels that will
 * occasionally want to get rid of inactive handlers.
 *
 * @memberof module:csp/queue
 * @param {module:csp/queue~Queue} queue The queue being filtered.
 * @param {function} fn The predicate function that determines whether an
 *     element remains in the queue.
 */
function filter(queue, predicate) {
  for (let i = 0, end = count(queue); i < end; i++) {
    const item = dequeue(queue);
    if (predicate(item)) {
      enqueue(queue, item);
    }
  }
}

export {
  EMPTY,
  queue,
  isQueue,
  count,
  isEmpty,
  enqueue,
  dequeue,
  peek,
  filter
};
