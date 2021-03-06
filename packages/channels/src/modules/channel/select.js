/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { box, handleSend, handleRecv, isBox } from "./handler";

/**
 * The name of the channel returned from `await
 * {@link module:chanko/channels.select|select}` or sent to the callback in
 * `{@link module:chanko/channels.selectAsync|selectAsync}` when the default is
 * returned as its value.
 *
 * This only happens when an `{@link module:chanko/channels.select|select} /
 * {@link module:chanko/channels.selectAsync|selectAsync}` call is performed,
 * all operations are initially blocking, and a `default` option is sent. The
 * immediate response in that situation is `{ value: options.default, channel:
 * DEFAULT }`.
 *
 * @type {Symbol}
 * @memberof module:chanko/channels
 */
const DEFAULT = Symbol("DEFAULT");

/**
 * Creates a new handler used for `select` operations.
 *
 * @memberof module:chanko/channel
 * @param {module:chanko/channel~Box} active A boxed value indicating whether
 *     the handler is valid. This is a boxed value because the select-handling
 *     code needs to manipulate it directly.
 * @param {module:chanko/channel~HandlerCallback} fn The callback to be run when
 *     (and if) the operation completes.
 * @return {module:chanko/channel~Handler} The new handler.
 * @private
 */
function selectHandler(active, fn) {
  return Object.create(null, {
    active: {
      get() {
        return active.value;
      }
    },

    commit: {
      value: () => {
        active.value = false;
        return fn;
      }
    }
  });
}

/**
 * Creates a randomly shuffled array containing one of each integer value from
 * `0` to an upper limit. It is used to randomly select a channel to be active
 * when multiples unblock in a `select` operation.
 *
 * @memberof module:chanko/channel
 * @param {number} upper The upper limit of the array values, exclusive.
 * @return {number[]} An array of integers from `0` to `upper - 1`, shuffled
 *     into a random order.
 * @private
 */
function randomArray(upper) {
  const array = [];
  for (let k = 0; k < upper; k++) {
    array.push(k);
  }
  for (let j = upper - 1; j > 0; j--) {
    const i = Math.floor(Math.random() * (j + 1));
    const temp = array[j];
    array[j] = array[i];
    array[i] = temp;
  }
  return array;
}

/**
 * A result that comes from `select` operations.
 *
 * @typedef SelectResult
 * @property {*} value If the `select` operation resulted in a receive, this is
 *     the value received from the channel. If it resulted in a send, this is
 *     `true` for a successful send and `false` if the channel closed first.
 * @property {module:chanko/channels.Channel} channel The channel upon which the
 *     selected operation happened.
 * @memberof module:chanko/channels
 */

/**
 * Creates a select result from its component properties.
 *
 * @memberof module:chanko/channel
 * @param {*} value If the `select` operation resulted in a receive, this is
 *     the value received from the channel. If it resulted in a send, this is
 *     `true` for a successful send and `false` if the channel closed first.
 * @param {module:chanko/channels.Channel} channel The channel upon which the
 *     selected operation happened.
 * @return {module:chanko/channels.SelectResult} The properties wrapped into an
 *     object for output.
 * @private
 */
function selectResult(value, channel) {
  return Object.assign(Object.create(null), { value, channel });
}

/**
 * Completes the first operation among the provided operations that comes
 * available, without blocking.
 *
 * This means that a call to `selectAsync` does not go into an `await`
 * expression, and it is not necessary to use it inside a process. Rather than
 * blocking until an operation completes, this one returns immediately and then
 * invokes the callback (if provided) as soon as one of the supplied operations
 * completes. It can be regarded as a non-blocking version of
 * `{@link module:chanko/channels.select|select}`.
 *
 * This function uses an operations list that's identical to the one used by
 * `{@link module:chanko/channels.select|select}`. It's an array of values; if a
 * value is a channel, then that operation is a take on that channel, while if
 * it's a two-element array of channel and value, then that operation is a put
 * of that value onto that channel. All options that are available to
 * `{@link module:chanko/channels.select|select}` are also available here.
 *
 * The callback is a function of one parameter, which in this case is an object
 * with `value` and `channel` properties.
 *
 * @memberof module:chanko/channels
 * @param {Object[]} operations A collection of elements that correspond to recv
 *     and send operations. A recv operation is signified by an element that is
 *     a channel (which is the channel to be received from). A send operation is
 *     specified by an element that is itself a two-element array, which has a
 *     channel followed by a value (which is the channel and value to be sent).
 * @param {module:chanko/channels.SelectCallback} callback A function that gets
 *     invoked when one of the operations completes.
 * @param {Object} [options={}] An optional object which can change the behavior
 *     of `selectAsync` through two properties.
 * @param {boolean} [options.priority=false] If `true`, then the priority of
 *     operations to complete when more than one is immediately available is a
 *     priority according to position within the operations array (earlier
 *     positions have the higher priority). If `false` or not present, the
 *     priorty of operation completion is random.
 * @param {*} [options.default] If set and all of the operations initially
 *     block, the `selectAsync` calls its callback immediately with the value of
 *     this option (the channel will be
 *     `{@link module:chanko/channels.DEFAULT|DEFAULT})`. If not set, the
 *     `selectAsync` call will not call its callback until one of the operations
 *     completes and that value and channel will be the ones returned.
 */
function selectAsync(ops, callback = () => {}, options = {}) {
  const count = ops.length;
  if (count === 0) {
    throw Error("select called with no operations");
  }

  const priority = !!options.priority;
  const indices = priority ? [] : randomArray(count);

  const active = box(true);

  function createSelectHandler(channel) {
    return selectHandler(active, value => {
      callback(selectResult(value, channel));
    });
  }

  let result;

  for (let i = 0; i < count; i++) {
    // Choose an operation. If `priority` is true then it's the next index,
    // otherwise it's random
    const op = ops[priority ? i : indices[i]];
    let channel, value;

    // Apply every operation to its channel, one at a time
    if (Array.isArray(op)) {
      [channel, value] = op;
      result = handleSend(channel, value, createSelectHandler(channel));
    } else {
      channel = op;
      result = handleRecv(channel, createSelectHandler(channel));
    }

    // We check for box here because a box from a channel indicates that the
    // value is immediately available (that there is no need to block to get the
    // value). If this happens, we execute the callback immediately with that
    // value and channel and stop queueing other operations.
    if (isBox(result)) {
      callback(selectResult(result.value, channel));
      break;
    }
  }

  // If none of the operaetions immediately returned values (they are all
  // blocked), and we have set a default channel option, then return the value
  // if the default channel rather than waiting for the queued operations to
  // complete.
  if (
    !isBox(result) &&
    Object.prototype.hasOwnProperty.call(options, "default")
  ) {
    if (active.value) {
      active.value = false;
      callback(selectResult(options.default, DEFAULT));
    }
  }
}

/**
 * Completes the first operation among the provided operations that comes
 * available, blocking the process until then.
 *
 * `operations` is an array whose elements must be channels or two-element
 * sub-arrays of channels and values, in any combination. An operation that is a
 * channel is a take operation on that channel. An operation that is a
 * two-element array is a put operation on that channel using that value.
 * Exactly one of these operations will complete, and it will be the first
 * operation that unblocks.
 *
 * This function *must* be called from within an `async` function and as part of
 * an `await` expression if the return value is needed.
 *
 * When `select` is completed and its process unblocks, its `await` expression
 * evaluates to an object of two properties. The `value` property becomes
 * exactly what would have been returned by the equivalent `await put` or `await
 * take` operation: a boolean in the case of a put, or the taken value in the
 * case of a take. The `channel` property is set to the channel where the
 * operation actually took place. This will be equivalent to the channel in the
 * `operations` array which completed first, allowing the process to unblock.
 *
 * If there is more than one operation already available to complete when the
 * call to `select` is made, the operation with the highest priority will be the
 * one to complete. Regularly, priority is non-deterministic (i.e., it's set
 * randomly). However, if the options object has a `priority` value set to
 * `true`, priority will be assigned in the order of the operations in the
 * supplied array.
 *
 * If all of the operations must block (i.e., there are no pending puts for take
 * operations, or takes for put operations), a default value may be returned.
 * This is only done if there is a `default` property in the options object, and
 * the value of that property becomes the value returned by `await select`. The
 * channel is set to the special value
 * `{@link module:chanko/channels.DEFAULT|DEFAULT}`.
 *
 * @memberof module:chanko/channels
 * @param {object[]} operations A collection of elements that correspond to recv
 *     and send operations. A recv operation is signified by an element that is
 *     a channel (which is the channel to be taken from). A send operation is
 *     specified by an element that is itself a two-element array, which has a
 *     channel followed by a value (which is the channel and value to be sent).
 * @param {object} [options={}] An optional object which can change the behavior
 *     of `select` through two properties.
 * @param {boolean} [options.priority=false] If `true`, then the priority of
 *     operations to complete when more than one is immediately available is a
 *     priority according to position within the operations array (earlier
 *     positions have the higher priority). If `false` or not present, the
 *     priorty of operation completion is random.
 * @param {*} [options.default] If set and all of the operations initially
 *     block, the `select` call completes immediately with the value of this
 *     option (the channel will be
 *     `{@link module:chanko/channels.DEFAULT|DEFAULT})`. If not set, the
 *     `select` call will block until one of the operations completes and that
 *     value and channel will be the ones returned.
 * @return {Promise<module:chanko/channels.SelectResult>} A promise that will
 *     resolve to an object of two properties: `value` will contain the value
 *     that would have been returned by the corresponding
 *     `{@link module:chanko/channels.send|send}` or
 *     `{@link module:chanko/channels.recv|recv}` operation; and `channel` will
 *     be a reference to the channel that completed the operation to allow
 *     `select` to unblock.
 */
function select(ops, options = {}) {
  return new Promise(resolve => {
    selectAsync(ops, resolve, options);
  });
}

/**
 * A convenience function to read the value out of a select result. This
 * function is not necessary - after all, it's absolutely as correct to simply
 * use `result.value` instead of `value(result)`, but it's provided for
 * consistency with the rest of the function-centric API.
 *
 * @memberof module:chanko/channels
 * @param {module:chanko/channels.SelectResult} result The result coming from a
 *     select operation.
 * @return {*} The value provided by the select operation.
 */
function value(result) {
  return result.value;
}

/**
 * A convenience function to read the channel out of a select result. This
 * function is not necessary - after all, it's absolutely as correct to simply
 * use `result.channel` instead of `channel(result)`, but it's provided for
 * consistency with the rest of the function-centric API.
 *
 * @memberof module:chanko/channels
 * @param {module:chanko/channels.SelectResult} result The result coming from a
 *     select operation.
 * @return {module:chanko/channels.Channel} The channel upon which the select
 *     operation completed.
 */
function channel(result) {
  return result.channel;
}

export { DEFAULT, select, selectAsync, value, channel };
