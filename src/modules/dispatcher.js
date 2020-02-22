/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

/**
 * This is the place where the new JS tasks are actually created. A queue is
 * maintained for them, and as each batch of tasks are completed, the next ones
 * run. As each channel call on an async function runs, it adds tasks to be run
 * to the queue, which are each run in their own JS task.
 *
 * The function that spawns the new JS task depends on environment. The
 * `setImmediate` function is preferred as it's the fastest, not waiting for
 * event queues to empty before spawning the new process. However, it is not JS
 * standard and currently only works in IE and node.js (and little else works in
 * IE, so mostly this is Node-only). If `setImmediate` isn't available, an
 * attempt is made to use `MessageChannel`'s `onmessage` is tried next. If that
 * is also not available, then `setTimeout` with `0` delay is used, which is
 * available everywhere but which is the least performant of all of the
 * solutions.
 *
 * There are other possibilities for creating processes, but they were rejected
 * as obsolete (`process.nextTick` and `onreadystatechange`) or unnecessary
 * (`window.postMessage`, which works like `MessageChannel` but doesn't work in
 * Web Workers).
 *
 * It is notable and important that we act as good citizens here. This
 * dispatcher is capable of taking control of the JavaScript engine until
 * thousands, millions, or more tasks are handled. But that could cause the
 * system event loop to have to wait an unacceptable amount of time. So we limit
 * ourselves to a batch of tasks at a time, and if there are still more to be
 * run, we let the event loop run before that next batch is processed.
 *
 * The dispatcher is **global**. There is a single instance that runs for all
 * channels and processes. The export is for the dispatcher object itself, not a
 * factory function. This is the only element of the system that works like
 * this.
 *
 * @module chanko/dispatcher
 */

import { queue as createQueue, EMPTY } from "modules/buffers";

/**
 * **The dispatch method option indicating that `setImmediate` should be used to
 * dispatch tasks.**
 *
 * This is the default option. For environments that don't support
 * `setImmediate`, this falls back to
 * `{@link modules:chanko~Chanko.MESSAGE_CHANNEL|MESSAGE_CHANNEL}`.
 *
 * @memberof module:chanko~Chanko
 * @type {Symbol}
 */
const SET_IMMEDIATE = Symbol("SET_IMMEDIATE");

/**
 * **The dispatch method option indicating that a `MessageChannel` should be
 * used to dispatch tasks.**
 *
 * For environments that don't support `MessageChannel`s, this falls back to
 * `{@link module:chanko~Chanko.SET_TIMEOUT|SET_TIMEOUT}`.
 *
 * @memberof module:chanko~Chanko
 * @type {Symbol}
 */
const MESSAGE_CHANNEL = Symbol("MESSAGE_CHANNEL");

/**
 * **The dispatch method option indicating that `setTimeout` should be used to
 * dispatch tasks.**
 *
 * This method is always available, but it's also always less efficient than any
 * other method, so it should be used as a last resort.
 *
 * @memberof module:chanko~Chanko
 * @type {Symbol}
 */
const SET_TIMEOUT = Symbol("SET_TIMEOUT");

/**
 * An object responsible for managing the running of asynchronous tasks.
 *
 * The dispatcher object determines which method to use to dispatch tasks by
 * what is available in the environment and the value of
 * `{@link module:chanko/dispatcher~Dispatcher#dispatchMethod|dispatchMethod}`.
 * If a setting is made that is not available in the environment, the next
 * available method will be chosen. At worst, `setTimeout` (which is available
 * in every environment) will be used.
 *
 * The dispatcher processes tasks in batches. The default batch size is 1024,
 * and this can be set by assigning a new value to
 * `{@link module:chanko/dispatcher~Dispatcher#batchSize|batchSize}`. Once a
 * full batch has been run, the dispatcher will queue the next batch but will
 * let other waiting tasks run first. In this way the dispatcher doesn't
 * monopolize the JavaScript engine if millions of tasks are queued.
 *
 * @namespace Dispatcher
 */

/**
 * The object responsible for queueing tasks to be run asynchronously by the
 * JavaScript engine.
 *
 * @type {module:chanko/dispatcher~Dispatcher}
 */
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
      // `setImmediate` is the preferred method since it's the quickest to
      // execute (even before `setTimeout(..., 0)`). However, it's only really
      // available in Node (and some older browsers that are not otherwise
      // supported).
      case SET_IMMEDIATE:
        return () => {
          if (!(queued && running)) {
            queued = true;
            setImmediate(processTasks);
          }
        };

      // Most modern browsers implement `MessageChannel`. This is basically a
      // last-ditch effort to avoid using `setTimeout`, since that's always the
      // slowest way to do it. This was chosen over `postMessage` because
      // `postMessage` doesn't work in Web workers, where MessageChannel does.
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

      // If all else fails, just use `setTimeout`. It may be a few milliseconds
      // slower than the others over the long haul, but it works everywhere.
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
    /**
     * The number of tasks that will be run before the dispatcher cedes control
     * back to the engine.
     *
     * The dispatcher will immediately queue the next set of tasks, but they
     * will run after normal system tasks have their chance.
     *
     * The default batch size is 1024.
     *
     * @memberof module:chanko/dispatcher~Dispatcher
     * @instance
     * @type {number}
     */
    get batchSize() {
      return batchSize;
    },
    set batchSize(value) {
      batchSize = value;
    },

    /**
     * The method used to dispatch tasks.
     *
     * This can have one of three values:
     * {@link module:chanko~Chanko#SET_IMMEDIATE|SET_IMMEDIATE},
     * {@link module:chanko~Chanko#MESSAGE_CHANNEL|MESSAGE_CHANNEL}, or
     * {@link module:chanko~Chanko#SET_TIMEOUT|SET_TIMEOUT}, in that order. If
     * the chosen method isn't available, the next one in order that *is*
     * available will be the method actually used.
     *
     * The default method is
     * {@link module:chanko~Chanko#SET_IMMEDIATE|SET_IMMEDIATE}.
     *
     * @memberof module:chanko/dispatcher~Dispatcher
     * @instance
     * @type {Symbol}
     */
    get dispatchMethod() {
      return dispatchMethod;
    },
    set dispatchMethod(value) {
      dispatchMethod = calculateMethod(value);
      dispatchFn = createDispatchFn(dispatchMethod);
    },

    /**
     * Adds a task to the queue and dispatches it.
     *
     * @param {Function} task The new function to be queued into the dispatcher.
     * @memberof module:chanko/dispatcher~Dispatcher
     * @private
     */
    dispatch
  });
})();

export { dispatcher, SET_IMMEDIATE, MESSAGE_CHANNEL, SET_TIMEOUT };
