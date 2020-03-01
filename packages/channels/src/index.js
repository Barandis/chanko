/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

/**
 * All of the public-facing Chanko functions are gathered here in one place to
 * be exported as a whole. This is a completely flat list of exports, as
 * inluding any object literals for export (which would be natural for buffers,
 * for example) would keep tree-shaking from working right.
 *
 * @module chanko
 */

/**
 * The core namespace under which all of the main functions reside in the API.
 * Everything in this namespace is accessible as a member of the main `chanko`
 * object that is required, imported, or accessed as a global object.
 *
 * @namespace Chanko
 */
export { fixed, dropping, sliding } from "modules/buffer";
export {
  CLOSED,
  chan,
  timedChan,
  transChan,
  send,
  recv,
  sendAsync,
  recvAsync,
  recvOrThrow,
  close,
  isClosed,
  isBuffered,
  isTimed,
  select,
  selectAsync,
  value,
  channel
} from "modules/channel";
export {
  config,
  SET_IMMEDIATE,
  MESSAGE_CHANNEL,
  SET_TIMEOUT
} from "modules/dispatcher";
export { go, sleep, join } from "modules/process";
export { EMPTY } from "modules/queue";

/**
 * An error handling funciton. This is used to handle exceptions thrown in async
 * functions and in transducers. The return value of an exception handler is
 * typically sent to a channel; if the exception happened within an async
 * function, it will be sent to that function's output channel, and if the
 * excpetion happened in a transducer, it will be sent to the channel to which
 * the transducer is attached.
 *
 * @callback exceptionHandler
 * @param {object} err The error object that was thrown to cause the error to
 *     have to be handled.
 * @return {*} A value decided by the handler that will be sent to a channel.
 */

/**
 * A callback that's run when a non-blocking channel operation completes. The
 * value that this function receives is identical to what is returned by a
 * blocking call: the value received from the channel for a `recv`, or `true` or
 * `false` depending on the channel status for a `send`. Any return value from
 * this callback is ignored.
 *
 * @callback opCallback
 * @param {*} value Either the value received from the channel, or whether or
 * not a value was successfully sent.
 */

/**
 * A callback that's run when a non-blocking `select` operation completes. The
 * value that this function receives is an object with two properties: the value
 * that the `select` operation completed with (either the value received from
 * the channel in a receive operation, or `true` or `false` in a send
 * operation), along with the channel where the operation actually happened. Any
 * return value from this callback is ignored.
 *
 * @callback selectCallback
 * @param {module:chanko/channel.SelectResult} data The value returned from the
 *     select operation.
 */

/**
 * A function that transforms data and can be composed with other transducers
 * into a single transducer. The transducers themselves are provided by other
 * libraries; the only involvement of this librar is as a consumer of
 * transducers.
 *
 * Transducers work by having step functions that are known via protocol, and it
 * is these step functions that take a value at a time to be transformed as
 * their arguments. The arguments to the transducers themselves are other
 * transducers that are then composed into a single transducer, which is then
 * returned. These values need not concern a user of ths library; just pass a
 * transducer to `{@link module:chanko.chan|chan}` or
 * `{@link module:chanko.transChan|transChan}` and everything else will be
 * handled.
 *
 * @callback transducer
 * @param {module:chanko~transducer} xform A transducer to chain this transducer
 *     to.
 * @return {module:chanko~transducer} A new transducer consisting of the
 *     composition of this one and `xform`.
 */
