/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

/**
 * This is the place where the new JS tasks are actually created. A queue is
 * maintained for them, and as each batch of tasks are completed, the next ones
 * run. As each process runs, it adds tasks to be run to the queue, which are
 * each run in their own JS task.
 *
 * The function that spawns the new JS task depends on environment. The
 * `setImmediate` function is preferred as it's the fastest, not waiting for
 * event queues to empty before spawning the new process. However, it is not JS
 * standard and currently only works in IE and Node. If `setImmediate` isn't
 * available, an attempt is made to use `MessageChannel`'s `onMessage` is tried
 * next. If that is also not available, then `setTimeout` with `0` delay is
 * used, which is available everywhere but which is the least performant of all
 * of the solutions.
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
 * channels and processes. This is the only element of the system that works
 * like this.
 *
 * @module chanko/dispatcher
 * @see module:chanko/channel.config
 * @private
 */

import {
  queue as q,
  EMPTY,
  count as qCount,
  dequeue,
  enqueue
} from "modules/queue";
const queue = q();

/**
 * The dispatch method option indicating that `setImmediate` should be used to
 * dispatch tasks.
 *
 * This is the default option. For environments that don't support
 * `setImmediate`, this falls back to
 * `{@link module:chanko/channels.MESSAGE_CHANNEL|MESSAGE_CHANNEL}`.
 *
 * @memberof module:chanko/channels
 * @type {Symbol}
 * @see {@link module:chanko/channels.config|config}
 */
const SET_IMMEDIATE = Symbol("SET_IMMEDIATE");

/**
 * The dispatch method option indicating that a `MessageChannel` should be used
 * to dispatch tasks.
 *
 * For environments that don't support `MessageChannel`, this falls back to
 * `{@link module:chanko/channels.SET_TIMEOUT|SET_TIMEOUT}`.
 *
 * @memberof module:chanko/channels
 * @type {Symbol}
 * @see {@link module:chanko/channels.config|config}
 */
const MESSAGE_CHANNEL = Symbol("MESSAGE_CHANNEL");

/**
 * The dispatch method option indicating that `setTimeout` should be used to
 * dispatch tasks.
 *
 * This method is always available, but it's also always less efficient than any
 * other method, so it should be used as a last resort.
 *
 * @memberof module:chanko/channels
 * @type {Symbol}
 * @see  {@link module:chanko/channels.config|config}
 */
const SET_TIMEOUT = Symbol("SET_TIMEOUT");

const options = {
  batchSize: 1024,
  dispatchMethod: SET_IMMEDIATE
};

let dispatcher = createDispatcher();
let running = false;
let queued = true;

/**
 * Creates and returns a function that can be used to dispatch tasks. The
 * function that is created depends on the currently selected `dispatchMethod`
 * that can be set with `{@link module:chanko/channels.config|config}`.
 *
 * @return A dispatcher function using the currently selected dispatch method.
 * @private
 */
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

/**
 * Calculates the actual dispatch method based on the current dispatch method
 * setting and environmental availability.
 *
 * The dispatch method is stored raw, so this function is necessary to take
 * environment into account. For example, if we're running in a modern browser
 * (which does not have `setImmediate`),
 * `{@link module:chanko/channels.SET_IMMEDIATE|SET_IMMEDIATE}` can still be
 * recorded as the dispatch method, but this function will return
 * `{@link module:chanko/channels.MESSAGE_CHANNEL|MESSAGE_CHANNEL}`.
 *
 * @return {Symbol} The dispatch method to use based on setting and environment.
 * @private
 */
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

/**
 * The heart of the dispatch process, this is the function run by the dispatch
 * function in order to actually run queued tasks.
 *
 * @private
 */
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

/**
 * Creates and assigns the global dispatch function based on dispatch method
 * setting and environmental availability.
 *
 * @private
 */
function setDispatcher() {
  dispatcher = createDispatcher();
}

/**
 * The configuration of the Chanko dispatcher. An object like this is returned
 * from the {@link module:chanko/channels.config} function, and it may also be
 * passed to the same function (though each property is optional in that case).
 *
 * @typedef {object} DispatcherConfig
 * @memberof module:chanko/channels
 * @property {number} batchSize The maximum number of tasks that the dispatcher
 *     will run in a single batch.
 * @property {Symbol} dispatchMethod The method used to dispatch a process into
 *     a separate line of execution.
 */

/**
 * Sets one or more of the dispatcher configuration options.
 *
 * This is advanced setting for the dispatcher that is responsible for queueing
 * up channel operations and processes. It is likely that this function will
 * never need to be called in normal operation.
 *
 * If any recognized options are specified in the options object passed to
 * `config`, then the option is set to the value sent in. Properties that aren't
 * any of these options are ignored, and any of these options that do not appear
 * in the passed object are left with their current values.
 *
 * @memberof module:chanko/channels
 * @param {Object} opts A mapping of options to their new values. Extra values
 *     (properties that are not options) are ignored.
 * @param {number} [opts.batchSize] The maximum number of tasks that the
 *     dispatcher will run in a single batch (initially, this is 1024). If the
 *     number of pending tasks exceeds this, the remaining are not discarded.
 *     They're simply run as part of another batch after the current batch
 *     completes.
 * @param {Symbol} [opts.dispatchMethod] The method used to dispatch a process
 *     into a separate line of execution. Possible values are
 *     `{@link module:chanko/channels.SET_IMMEDIATE|SET_IMMEDIATE}`,
 *     `{@link module:chanko/channels.MESSAGE_CHANNEL|MESSAGE_CHANNEL}`, or
 *     `{@link module:chanko/channels.SET_TIMEOUT|SET_TIMEOUT}`, with the
 *     initial being
 *     `{@link module:chanko/channels.SET_IMMEDIATE|SET_IMMEDIATE}`. If a method
 *     is set but is not available in that environment, then it will silently
 *     fall back to the next method that is available.
 * @return {module:chanko/channels.DispatcherConfig} The configuration
 *     settings for the dispatcher after any new values have been set.
 */
function config(opts = {}) {
  for (const key in options) {
    if (key in opts) {
      options[key] = opts[key];

      if (key === "dispatchMethod") {
        setDispatcher();
      }
    }
  }
  return Object.assign({}, options);
}

/**
 * Queues a task to be run and starts the dispatch process.
 *
 * @param {function} task A task to be queued and run the next time a batch of
 *     tasks is run.
 * @private
 */
function dispatch(task) {
  enqueue(queue, task);
  dispatcher();
}

export { SET_IMMEDIATE, MESSAGE_CHANNEL, SET_TIMEOUT, config, dispatch };
