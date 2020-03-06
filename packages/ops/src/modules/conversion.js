/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

/**
 * A set of channel utilities for converting channels into other kinds of data,
 * and vice versa.
 *
 * @module chanko/operations/conversion
 * @private
 */

import { go, chan, send, sendAsync, close } from "@chanko/csp";

/**
 * Creates a single value from a channel by running its values through a
 * reducing function.
 *
 * For every value put onto the input channel, the reducing function is called
 * with two parameters: the accumulator that holds the result of the reduction
 * so far, and the new input value. The initial value of the accumulator is the
 * third parameter to `reduce`. The reduction is not complete until the input
 * channel closes.
 *
 * This function returns a channel. When the final reduced value is produced, it
 * is put onto this channel, and when that value is taken from it, the channel
 * is closed.
 *
 * ```
 * import { go, chan, send, recv, close } from "@chanko/channels";
 * import { reduce } from "@chanko/operations";
 *
 * const input = chan();
 * const output = reduce((acc, value) => acc + value, input, 0);
 *
 * go(async () => {
 *   await send(input, 1);
 *   await send(input, 2);
 *   await send(input, 3);
 *   close(input);
 * });
 *
 * go(async () => {
 *   const result = await recv(output);
 *   console.log(output);                  // -> 6
 * });
 *
 * ```
 *
 * Note that the input channel *must* be closed at some point, or no value will
 * ever appear on the output channel. The closing of the channel is what
 * signifies that the reduction should be completed.
 *
 * @memberof module:chanko/operations
 * @param {module:chanko/operations.Reducer} fn The reducer function responsible
 *     for turning the series of channel values into a single output value.
 * @param {module:chanko/channels.Channel} channel The channel whose values are
 *     being reduced into a single output value.
 * @param {*} init The initial value to feed into the reducer function for the
 *     first reduction step.
 * @return {module:chanko/channels.Channel} A channel that will, when the input
 *     channel closes, have the reduced value put into it. When this value is
 *     taken, the channel will automatically close.
 */
function reduce(fn, channel, init) {
  const output = chan();

  go(async () => {
    let acc = init;
    for await (const value of channel) {
      acc = fn(acc, value);
    }
    sendAsync(output, acc, () => close(output));
  });

  return output;
}

/**
 * Sends all values from an iterable to the supplied channel.
 *
 * If no channel is passed to this function, a new channel is created. In
 * effect, this directly converts an iterable into a channel with the same
 * values on it.
 *
 * The channel is closed after the final iterable value is sent to it.
 *
 * This function will convert any JavaScript object that implements the iterable
 * protocol. In other words, if it works in a `for...of` statement, it will work
 * here.
 *
 * ```
 * import { go, chan, recv, isClosed } from "@chanko/channels";
 * import { toChannel } from "@chanko/operations";
 *
 * const input = [1, 2, 3];
 * const output = toChannel(input);
 *
 * go(async () => {
 *   console.log(await recv(output));     // -> 1
 *   console.log(await recv(output));     // -> 2
 *   console.log(await recv(output));     // -> 3
 *   console.log(isClosed(output));       // -> true
 * });
 * ```
 *
 * @memberof module:chanko/operations
 * @param {iterable} iterable The iterable containing the values to be sent to
 *     the channel.
 * @param {module:chanko/channels.Channel} [channel] The channel onto which to
 *     put all of the array elements. If this is not present, a new channel will
 *     be created.
 * @return {module:chanko/channels.Channel} the channel onto which the array
 *     elements are put. This is the same as the input channel, but if no input
 *     channel is specified, this will be a new channel. It will close when the
 *     final value is taken from it.
 */
function toChannel(iterable, channel = chan(iterable.length)) {
  go(async () => {
    for (const item of iterable) {
      await send(channel, item);
    }
    close(channel);
  });

  return channel;
}

/**
 * Receives all of the values from a channel and pushes them into an array.
 *
 * If no array is passed to this function, a new (empty) one is created. In
 * effect, this directly converts a channel into an array with the same values.
 * Either way, this operation cannot complete until the input channel is closed.
 *
 * This function returns a channel. When the final array is produced, it is sent
 * to this channel, and when that value is received from it, the channel is
 * closed.
 *
 * ```
 * import { go, chan, send, recv, close } from "@chanko/channels";
 * import { toArray } from "@chanko/operations";
 *
 * const input = chan();
 * const output = toArray(input);
 *
 * go(async () => {
 *   await send(input, 1);
 *   await send(input, 2);
 *   await send(input, 3);
 *   close(input);
 * });
 *
 * go(async () => {
 *   const result = await recv(output);
 *   console.log(result);                     // -> [1, 2, 3]
 * });
 * ```
 *
 * Note that the input channel *must* be closed at some point, or no value will
 * ever appear on the output channel. The closing of the channel is what
 * signifies that all of the values needed to make the array are now available.
 *
 * @memberof module:chanko/operations
 * @param {module:chanko/channels.Channel} channel The channel from which values
 *     are received to put into the array.
 * @param {array} [array] The array to put the channel values into. If this is
 *     not present, a new, empty array will be created.
 * @return {module:chanko/channels.Channel} A channel that will, when the input
 *     channel closes, have the array of channel values put onto it. When this
 *     array is received, the channel will automatically close.
 */
function toArray(channel, array = []) {
  return reduce(
    (acc, input) => {
      acc.push(input);
      return acc;
    },
    channel,
    array
  );
}

export { reduce, toChannel, toArray };
