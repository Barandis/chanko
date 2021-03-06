/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

/**
 * An implementation of channels. These channels are essentially queues that
 * hold instructions waiting for the next available async function to process
 * them. They can be buffered, which is accomplished using the buffer functions
 * `{@link module:chanko/channels.fixed|fixed}`,
 * `{@link module:chanko/channels.dropping|dropping}`, and
 * `{@link module:chanko/channels.sliding|sliding}`.
 *
 * Channels do not interact with JS tasks or the dispatcher in any meaningful
 * way. They're just here to hold tasks which may themselves then cause new JS
 * tasks to be created via the dispatcher.
 *
 * Channels may have transducers associated with them. The transducers are
 * expected to follow the same conventions as any of the popular transducer
 * libraries. Explicit support is required because channels wouldn't play well
 * with the normal way of making an object support transduction, for two
 * different reasons.
 *
 * * Transducers require the ability to create a new, empty collection of the
 *   same type as the input collection. In this case, that would mean creating a
 *   new channel, meaning that the output channel (from which the transformed
 *   values are received) would be different than the input channel (where
 *   values are sent).
 * * If we somehow get over that requirement and keep all action on the same
 *   channel, we can't take values from the channel, transform them, and put
 *   them back. This would potentially change the order of values in the channel
 *   since we are dealing with asynchronous processes.
 *
 * The explicit support means a transducer is directly associated with a
 * channel. When a value is sent to the channel, it's first run through the
 * transducer and the transformed value is the one actually put into the
 * channel's buffer. This avoids both of the problems noted above.
 *
 * @module chanko/channel
 * @private
 */

import {
  CLOSED,
  channel as chanImpl,
  handleSend,
  handleRecv,
  close as closeImpl,
  MAX_DIRTY,
  MAX_QUEUED
} from "./handler";
import { DEFAULT, select, selectAsync, value, channel } from "./select";
import { add, fixed, isBuffer } from "modules/buffer";
import { protocols as p } from "modules/protocol";

/**
 * A handler function for exceptions that are thrown by a transducer while
 * transforming values on a channel.
 *
 * @param {object} err The error object that was thrown by the transducer.
 * @return {*} A value that should be put into the channel's buffer when the
 *     transducer throws the error. If this value is
 *     {@link module:chanko/channels.CLOSED|CLOSED}, then no value at all will be
 *     added to the buffer.
 * @callback ExceptionHandler
 * @private
 */

/**
 * The default exception handler, used when no exception handler is supplied to
 * `{@link handleException}`, `{@link wrapTransformer}`,
 * `{@link module:chanko/channels.chan|chan}`, or
 * `{@link module:chanko/channels.transChan|transChan}`. This default handler
 * merely returns `{@link module:chanko/channels.CLOSED|CLOSED}`, which will
 * result in no new value being written to the channel.
 *
 * @type {module:chanko~exceptionHandler}
 * @memberof module:chanko/channel
 * @private
 */
const DEFAULT_HANDLER = () => CLOSED;

/**
 * Creates a new handler used for `send` and `recv` operations.
 *
 * @memberof module:chanko/channel
 * @param {module:chanko/channel~HandlerCallback} fn The callback to be run when
 *     (and if) the operation completes.
 * @return {module:chanko/channel~Handler} The new handler.
 * @private
 */
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

/**
 * Handles an exception that is thrown inside a transducer. The thrown error is
 * passed to the `handler` function, and the result of that handler function is
 * added to the channel's buffer. If that value is
 * {@link module:chanko/channels.CLOSED|CLOSED}, then it is *not* added to the
 * buffer.
 *
 * @param {module:chanko/channels.Buffer} buffer The buffer that backs the
 *     channel whose transducer's exceptions are being handled.
 * @param {module:chanko/channel~exceptionHandler} handler The exception
 *     handling function that is run when an error occurs in a transducer.
 * @param  {Object} ex The error object thrown by the transducer.
 * @return {module:chanko/channels.Buffer} The buffer itself. This is done to
 *     make it easier to integrate this function into a transducer's step
 *     function.
 * @private
 */
function handleException(buffer, handler, ex) {
  const value = handler(ex);
  if (value !== CLOSED) {
    add(buffer, value);
  }
  return buffer;
}

/**
 * A transducer that wraps another transducer with error handling code. Any
 * error that occurs within the transducer, either in the step function or the
 * result function, will cause the error handler to be run.
 *
 * @param {Object} xform The transducer to add an error handler to.
 * @param {ExceptionHandler} [handler=DEFAULT_HANDLER] The exception handling
 *     function that is run when an error occurs in the transducer.
 * @return {Object} A new transducer that is the result of wrapping the provided
 *     transducer's step and result functions with the exception handler.
 * @private
 */
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

/**
 * The reducer used at the end of a transducer chain to control how the
 * transformed values are reduced back onto the channel's buffer. This reducer
 * does nothing more than add the input items (which are the transformed values
 * that are being put onto the channel) to the channel buffer.
 *
 * This is a necessary part of working with a transducer, as the final reducer
 * always takes the transformed values and renders them into whatever collection
 * is desired. This is that final reducer for channels.
 *
 * @type {Object}
 * @private
 */
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

/**
 * Parses the buffer argument and options, along with a set of default options,
 * to figure out what was really passed to
 * `{@link module:chanko/channels.chan|chan}`.
 *
 * @param {(null|number|module:chanko/channels.Buffer)} buffer The buffer
 *     argument passed to `{@link module:chanko/channels.chan|chan}`.
 * @param {object} options The options argument passed to
 *     `{@link module:chanko/channels.chan|chan}`.
 * @param {object} defaultOptions Default values for options that might not have
 *     been sent to `{@link module:chanko/channels.chan|chan}`.
 * @return {object} An object containing the processed values of all of the
 *     arguments sent to `{@link module:chanko/channels.chan|chan}`.
 * @private
 */
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

  const { transducer, handler, maxDirty, maxQueued, timer } = Object.assign(
    {},
    defaultOptions,
    opts
  );
  return { buf, transducer, handler, maxDirty, maxQueued, timer };
}

/**
 * Creates and returns a new channel.
 *
 * By default this channel will be a simple unbuffered, untransformed channel,
 * but that can be changed through options. A channel does not have any
 * externally useful functions. It exists largely to be passed into
 * `{@link module:chanko/channels.send|send}`,
 * `{@link module:chanko/channels.recv|recv}`, and
 * `{@link module:chanko/channels.select|select}` invocations, along with their
 * non-blocking variations
 * (`{@link module:chanko/channels.sendAsync|sendAsync}`,
 * `{@link module:chanko/channels.recvAsync|recvAsync}`, and
 * `{@link module:chanko/channels.selectAsync|selectAsync}`).
 *
 * If a buffer value is provided, it defines what buffer should back the
 * channel. If this is `null` or `0`, the channel will be unbuffered. If it's a
 * positive number, the channel will be buffered by a
 * `{@link module:chanko/channels.FixedBuffer|FixedBuffer} `of that size. If
 * it's a `{@link module:chanko/channels.Buffer|Buffer}` object, that object
 * will be used as the channel's buffer. If it's missing altogether, the channel
 * will be unbuffered unless a `transducer` option is provided (see below), in
 * which case it will be a
 * `{@link module:chanko/channels.FixedBuffer|FixedBuffer}` of size 1.
 *
 * `chan` supports transducers by allowing a transducer function to be
 * associated with it. This is passed as the `transducer` option and can only be
 * used if the channel is buffered (otherwise an error is thrown). This
 * transducer function must take another transducer as a parameter (allowing
 * transformers to be chained), and it must return an object conforming to the
 * transducer protocol.
 *
 * Errors in the transformation process can be handled by passing an error
 * handler. This is a function that expects to receive an error object as a
 * parameter and can return a value that is then put onto the channel. If this
 * value is `{@link module:chanko/channels.CLOSED|CLOSED}`, then no value will
 * be put onto the channel upon handler completion.
 *
 * @memberof module:chanko/channels
 * @param {(number|module:chanko/channels.Buffer)} [buffer] The buffer object
 *     that should back this channel. If this is a positive number, a fixed
 *     buffer of that size will be created to back the channel. If it is `0` or
 *     `null`, the new channel will be unbuffered. If it's not present, the new
 *     channel will be unbuffered unless there is a `transducer` option, in in
 *     which case it will be buffered with a size 1
 *     `{@link module:chanko/channels.FixedBuffer|FixedBuffer}`.
 * @param {Object} [options] A set of options for configuring the channel's
 *     queue.
 * @param {module:chanko/channels.Transducer} [options.transducer] A transducer
 *     to run each value through before putting it onto the channel. This
 *     function should expect one parameter (another transducer that it's
 *     chained to) and return an object that conforms to the transducer
 *     protocol. If a transducer is provided on an unbuffered channel, an error
 *     will be thrown.
 * @param {module:chanko/channels.ExceptionHandler} [options.handler] An error
 *     handler that is run whenever an error occurs inside a transducer
 *     function. If that happens, this function is called with one parameter,
 *     which is the error object. The value that the handler returns (if it is
 *     not `{@link module:chanko/channels.CLOSED|CLOSED}`) will be put onto the
 *     channel when the handler finishes running.
 * @param {number} [options.maxDirty=64] The maximum number of dirty operations
 *     that can be in the queue before those operations are subject to being
 *     purged. Dirty operations are those that may not be valid anymore because
 *     they were in the list of operations passed to
 *     `{@link module:chanko/channels.select|select}` or
 *     `{@link module:chanko/channels.selectAsync|selectAsync}` but were not
 *     chosen to run. This provides a chance for a very minor performance tweak
 *     and is best left alone.
 * @param {number} [options.maxQueued=1024] The maximum number of operations
 *     that can be queued up at the same time. This prevents infinite loops from
 *     accidentally eating up all of the available memory.
 * @param {number} [options.timer] If this value is present, the channel will be
 *     a timed channel that closes automatically after this number of
 *     milliseconds.
 * @return {module:chanko/channels.Channel} A new channel.
 */
function chan(buffer, options) {
  const defaultOptions = {
    maxDirty: MAX_DIRTY,
    maxQueued: MAX_QUEUED
  };
  const { buf, transducer, handler, maxDirty, maxQueued, timer } = parseArgs(
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

  const isTimed = typeof timer === "number";

  const ch = chanImpl(buf, xf, isTimed, maxDirty, maxQueued);

  async function* iterator() {
    for (;;) {
      const value = await recv(ch);
      if (value === CLOSED) {
        break;
      }
      yield value;
    }
  }

  ch[Symbol.asyncIterator] = iterator;

  if (isTimed) {
    setTimeout(() => closeImpl(ch), timer);
  }

  return ch;
}

/**
 * Creates an unbuffered, timed channel. This channel closes automatically after
 * the supplied number of milliseconds and is the equivalent of calling `chan(0,
 * { timer: delay })`.
 *
 * @memberof module:chanko/channels
 * @param {number} delay The number of milliseconds after the channel is created
 *     that it will be closed automatically.
 * @return {module:chanko/channels.Channel} A new timed channel.
 */
function timedChan(delay = 0) {
  return chan({ timer: delay });
}

/**
 * Creates a buffered channel with a transducer and optional error handler. The
 * buffer for this channel is a
 * `{@link module:chanko/channels.FixedBuffer|FixedBuffer}` of size 1. This is
 * the equivalent of `chan(1, { transducer, handler })`.
 *
 * @memberof module:chanko/channels
 * @param {module:chanko/channels.Transducer} transducer The transducer used to
 *     transform values on the new channel.
 * @param {module:chanko/channels.ExceptionHandler} [handler] An exception
 *     handler called with the error object as its only argument when an error
 *     happens inside a transducer. If this is not provided, a default handler
 *     is used that simply does nothing, including sending no output from the
 *     value that errored.
 * @return {module:chanko/channels.Channel} A new channel with a transducer.
 */
function transChan(transducer, handler) {
  return chan({ transducer, handler });
}

/**
 * Determines whether a channel is closed.
 *
 * A closed channel will cause any `send` operation to return `false` and any
 * `recv` operation to return any buffered items that remain, followed by
 * `{@link module:chanko/channels.CLOSED|CLOSED}`.
 *
 * @memberof module:chanko/channels
 * @param {module:chanko/channels.Channel} channel The channel to check.
 * @return {boolean} Either `true` if the channel is closed or `false` if it
 *     isn't.
 */
function isClosed(channel) {
  return channel.closed;
}

/**
 * Determines whether a channel is buffered.
 *
 * A channel is buffered if a buffer or a number was passed as the first
 * argument of `{@link module:chanko/channels.chan|chan}` or if a transducer is a
 * part of the channel.
 *
 * @memberof module:chanko/channels
 * @param {module:chanko/channels.Channel} channel The channel to check.
 * @return {boolean} Either `true` if the channel is buffered or `false` if it
 *     isn't.
 */
function isBuffered(channel) {
  return channel.isBuffered;
}

/**
 * Determines whether a channel is timed.
 *
 * A channel is timed if it was created either with the `timer` option of
 * `{@link module:chanko/channels.chan|chan}` or with the
 * `{@link module:chanko/channels.timedChan|timedChan}` function. It will
 * automatically close after a certain period of time.
 *
 * @memberof module:chanko/channels
 * @param {module:chanko/channels.Channel} channel The channel to check.
 * @return {boolean} Either `true` if the channel is timed or `false` if it
 *     isn't.
 */
function isTimed(channel) {
  return channel.isTimed;
}

/**
 * Sends a value to this channel without blocking.
 *
 * This means that a call to `sendAsync` does not go into an `await` expression,
 * and it is not necessary to use it inside a async function. Rather than
 * blocking until the sent value is taken by another async function, this one
 * returns immediately and then invokes the callback (if provided) when the sent
 * value is taken. It can be seen as a non-blocking version of
 * `{@link module:chanko/channels.send|send}`.
 *
 * While the primary use of this function is to send values onto channels in
 * contexts where being inside an async function is impossible (for example, in
 * a DOM element's event handler), it can still be used inside async functions
 * at times when it's important to make sure that the function doesn't block
 * from the send.
 *
 * The callback is a function of one parameter. The parameter that's supplied to
 * the callback is the same as what is supplied to `await send`: `true` if the
 * value was taken, or `false` if the channel was closed. If the callback isn't
 * present, nothing will happen after the value is taken.
 *
 * @memberof module:chanko/channels
 * @param {*} [value] The value being put onto the channel.
 * @param {module:chanko/channels.OpCallback} [callback] A function that gets
 *     invoked either when the value is taken by another process or when the
 *     channel is closed. This function can take one parameter, which is `true`
 *     in the former case and `false` in the latter.
 */
function sendAsync(channel, value, callback = () => {}) {
  const result = handleSend(channel, value, opHandler(callback));
  if (result && callback) {
    callback(result.value);
  }
}

/**
 * Receives a value from this channel without blocking.
 *
 * This means that a call to `receiveAsync` does not go into an `await`
 * expression, and it is not necessary to use it inside a async function. Rather
 * than blocking until a value becomes available on the channel to be received,
 * this one returns immediately and then invokes the callback (if provided) when
 * a value becomes available. It can be regarded as a non-blocking version of
 * {@link module:chanko/channels.recv|recv}`.
 *
 * While the primary use of this function is to receive values from channels in
 * contexts where being inside an async function is impossible, it can still be
 * used inside async functions at times when it's important that the receive
 * doesn't block the function.
 *
 * The callback is a function of one parameter, and the value supplied for that
 * parameter is the value received from the channel (either a value that was
 * sent or `{@link module:chanko/channels.CLOSED|CLOSED}`). If the callback
 * isn't present, nothing will happen after the value is taken.
 *
 * @memberof module:chanko/channels
 * @param {module:chanko/channels.OpCallback} [callback] A function that gets
 *     invoked when a value is made available to be received (this value may be
 *     `{@link module:chanko/channels.CLOSED|CLOSED}` if the channel closes with
 *     no available value). The function can take one parameter, which is the
 *     value that is received from the channel.
 */
function recvAsync(channel, callback = () => {}) {
  const result = handleRecv(channel, opHandler(callback));
  if (result && callback) {
    callback(result.value);
  }
}

/**
 * Sends a value to a channel, blocking the async function until that value is
 * received from the channel by a different function (or until the channel
 * closes).
 *
 * A value is always sent to the channel, but if that value isn't specified by
 * the second parameter, it is `undefined`. Any value may be sent to a channel,
 * with the sole exception of the special value
 * `{@link module:chanko/channels.CLOSED|CLOSED}`.
 *
 * This function *must* be called from within an async function and as part of
 * an `await` expression.
 *
 * When `send` is completed and its function unblocks, its `await` expression
 * evaluates to a status boolean that indicates what caused the function to
 * unblock. That value is `true` if the sent value was successfully taken by
 * another process, or `false` if the unblocking happened because the target
 * channel closed.
 *
 * @memberof module:chanko/channels
 * @param {*} [value] The value being put onto the channel.
 * @return {Promise<boolean>} A promise that will resolve to `true` or `false`
 *     depending on whether the put value is actually taken.
 */
function send(channel, value) {
  return new Promise(resolve => {
    sendAsync(channel, value, resolve);
  });
}

/**
 * Receives a value from this channel, blocking the async function until a
 * value becomes available to be received (or until the channel closes with
 * no more values on it to be received).
 *
 * This function *must* be called from within an async function and as part
 * of an `await` expression.
 *
 * When `receive` is completed and its function unblocks, its `await`
 * expression evaluates to the actual value that was received. If the target
 * channel closed, then all of the values already placed onto it are
 * resolved by `receive` as normal, and once no more values are available,
 * the special value `{@link module:chanko/channels.CLOSED|CLOSED}` is returned.
 *
 * @memberof module:chanko/channels
 * @return {Promise} A promise that will resolve to the value received from
 *     the channel once that receive is completed. If the channel closes
 *     without a value being made available, this will resolve to
 *     `{@link module:chanko/channels.CLOSED|CLOSED}`.
 */
function recv(channel) {
  return new Promise(resolve => {
    recvAsync(channel, resolve);
  });
}

/**
 * Receives a value from a channel, blocking the async function until a value
 * becomes available to be received (or until the channel closes with no more
 * values on it to be received). If the received value is an error object, that
 * error is thrown at that point.
 *
 * This function *must* be called from within an async function and as part of
 * an `await` expression.
 *
 * It functions in every way like `{@link module:chanko/channels.recv|recv}`
 * *except* in the case that the value on the channel is an object that has
 * `Error.prototype` in its prototype chain (any built-in error, any
 * properly-constructed custom error). If that happens, the error is thrown,
 * which will cause the returned promise to be rejected with the error. It can
 * then be handled up the promise chain like any other rejected promise.
 *
 * `takeOrThrow` is roughly equivalent to:
 *
 * ```
 * const value = await recv(ch);
 * if (Error.prototype.isPrototypeOf(value)) {
 *   throw value;
 * }
 * ```
 *
 * @memberof module:chanko/channels
 * @return {Promise} A promise that will resolve to the value taken from the
 *     channel once that take is completed. If the channel closes without a
 *     value being made available, this will resolve to
 *     `{@link module:chanko~Chanko.CLOSED|CLOSED}`. If the taken value is an
 *     error, the promise will instead be rejected with the error object as the
 *     reason.
 */
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

/**
 * Closes the channel, if it isn't already closed. This immediately returns any
 * buffered values to pending receives. If there are no buffered values (or if
 * they've already been taken by other receives), then all of the rest of the
 * receives are completed with the value of
 * `{@link module:chanko/channels.CLOSED|CLOSED}`. Any pending sends are
 * completed with the value of `false`.
 *
 * Note that the buffer is not emptied if there are still values remaining after
 * all of the pending receives have been handled. The channel will still provide
 * those values to any future receives, though no new values may be added to the
 * channel. Once the buffer is depleted, any future receives will return
 * `{@link module:chanko/channels.CLOSED|CLOSED}`.
 *
 * @memberof module:chanko/channels
 * @param {module:chanko/channels.Channel} channel The channel to be closed.
 */
function close(channel) {
  closeImpl(channel);
}

export {
  CLOSED,
  DEFAULT,
  chan,
  timedChan,
  transChan,
  isClosed,
  isBuffered,
  isTimed,
  sendAsync,
  recvAsync,
  selectAsync,
  send,
  recv,
  recvOrThrow,
  select,
  close,
  value,
  channel
};

/**
 * Used by channels to track execution of operations (`send`, `recv`, and
 * `select`). They provide two pieces of information: the function to call when
 * a `send` or `recv` unblocks (because a value given to send has been received,
 * or a `recv` has accepted a value that has been sent) and whether or not the
 * handler is still active.
 *
 * The function is a callback that actually defines the difference between
 * `{@link module:chanko/channels.send|send}` /
 * `{@link module:chanko/channels.recv|recv}` /
 * `{@link module:chanko/channels.select|select}` and
 * `{@link module:chanko/channels.sendAsync|sendAsync}` /
 * `{@link module:chanko/channels.recvAsync|recvAsync}` /
 * `{@link module:chanko/channels.selectAsync|selectAsync}`: while the unblocked
 * calls use the callback passed to the function, `send`, `recv`, and `select`
 * simply continue the process where it left off. (This is why `send`, `recv`,
 * and `select` only work inside `async` functions with `await` if the return
 * value is needed, because otherwise there's no process to continue.)
 *
 * This function is provided as the return value of the `commit` method. Calling
 * `commit` has no extra effect with `send` and `recv` operations, but for
 * `select`, it also marks the handler as no longer being active. This means
 * that only one of the operations passed to select can be completed, because
 * after the first one, the handler is no longer active and will not be allowed
 * to process a second operation.
 *
 * If a `send` or `recv` (or equivalent `select` operation) cannot be
 * immediately completed because there isn't a corresponding pending `recv` or
 * `send`, the handler is queued to be run when a new `recv` or `send` becomes
 * available.
 *
 * @typedef Handler
 * @property {boolean} active Whether or not the operation is still active. An
 *     inactive operation is not serviced and will be cleared from the queue on
 *     the next dirty operation purge.
 * @property {function} commit Marks the handler as inactive (so it doesn't run
 *     twice) and returns the callback to be run when the operation completes.
 * @private
 */

/**
 * A callback function run when a `send` or `recv` operation completes.
 *
 * @callback HandlerCallback
 * @param {*} value The value provided by the channel. In a `recv`, this is the
 *     value received from the channel. In a `send`, this is `true` for a
 *     successful send and `false` if the channel is closed before the send can
 *     complete.
 * @private
 */
