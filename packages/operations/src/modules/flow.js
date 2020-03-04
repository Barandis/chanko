/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

/**
 * A set of channel operation functions for routing channels to other channels
 * in different ways.
 *
 * In each of these functions, the source channel will not be available to be
 * taken from, as all of the source channels will have their values taken by the
 * processes within these functions. The lone exception is `tap`, where the
 * regular function of the source channel will be restored if all taps are
 * removed. Even so, while at least one tap is in place, the source channel
 * cannot be taken from.
 *
 * @module chanko/operations/flow
 * @private
 */

import {
  go,
  chan,
  send,
  recv,
  select,
  sendAsync,
  recvAsync,
  close,
  CLOSED
} from "@chanko/channels";

import { isNumber } from "modules/common";

const TAPS = Symbol("multitap/taps");

/**
 * Pipes the values from one channel to another channel.
 *
 * This ties two channels together so that puts on the source channel can be
 * taken off the destination channel. This does not duplicate values in any way;
 * if another process takes a value off the source channel, it will never appear
 * on the destination channel. In most cases you will not want to take values
 * off a channel once it's piped to another channel, since it's difficult to
 * know which values will go to which channel.
 *
 * Closing either channel will break the connection between the two. If the
 * source channel is closed, the destination channel will by default also be
 * closed. However, passing `true` as the third parameter will cause the
 * destination channel to remain open even when the source channel is closed
 * (the connection is still broken however).
 *
 * Because of the ability to leave the destination channel open, a possible use
 * case for this function is to wrap the destination channel(s) of one of the
 * other flow control functions below to have a channel that survives the source
 * channel closing. The rest of those functions (aside from the special-case
 * `{@link module:chanko/operations~Operations.tap|tap}`) automatically close
 * their destination channels when the source channels close.
 *
 * ```
 * import { go, chan, send, recv, close, isClosed } from "@chanko/channels";
 * import { pipe } from "@chanko/operations";
 *
 * const input = chan();
 * const output = pipe(input, chan());
 *
 * go(async () => {
 *   await send(input, 1);
 *   await send(input, 2);
 *   close(input);
 * });
 *
 * go(async () => {
 *   console.log(await recv(output));      // -> 1
 *   console.log(await recv(output));      // -> 2
 *   console.log(isClosed(output));        // -> true
 * });
 * ```
 *
 * @memberof module:chanko/operations~Operations
 * @param {module:chanko/channel~Channel} src The source channel.
 * @param {module:chanko/channel~Channel} dest The destination channel.
 * @param {boolean} [keepOpen=false] A flag to indicate that the destination
 *     channel should be kept open after the source channel closes. By default
 *     the destination channel will close when the source channel closes.
 * @return {module:chanko/channel~Channel} The destination channel.
 */
function pipe(src, dst, keepOpen = false) {
  go(async () => {
    for (;;) {
      const value = await recv(src);
      if (value === CLOSED) {
        if (!keepOpen) {
          close(dst);
        }
        break;
      }
      if (!(await send(dst, value))) {
        break;
      }
    }
  });

  return dst;
}

/**
 * Creates two new channels and routes values from a source channel to them
 * according to a predicate function.
 *
 * The supplied function is invoked with every value that is put onto the source
 * channel. Those that return `true` are routed to the first destination
 * channel; those that return `false` are routed to the second.
 *
 * The new channels are created by the function based on the buffer values
 * passed as the third and fourth parameters. If one or both of these are
 * missing, `null`, or `0`, the corresponding destination channel is unbuffered.
 * If one is a positive integer, the corresponding channel is buffered by a
 * fixed buffer of that size. If the parameter for a channel is a buffer, then
 * that buffer is used to buffer the new channel.
 *
 * Both new channels are closed when the source channel is closed.
 *
 *
 * ```
 * import { go, chan, send, close } from "@chanko/channels";
 * import { partition } from "@chanko/operations";
 *
 * const input = chan();
 * const ctrl = chan();
 * const [even, odd] = partition(x => x % 2 === 0, input, 3, 3);
 *
 * go(async () => {
 *   await send(input, 1);
 *   await send(input, 2);
 *   await send(input, 3);
 *   await send(input, 4);
 *   close(input);
 * });
 *
 * go(async () => {
 *   for await (const value of even) {
 *     console.log(value);
 *   }
 *   await send(ctrl);
 * });
 *
 * go(async () => {
 *   await recv(ctrl);
 *   for await (const value of odd) {
 *     console.log(value);
 *   }
 * });
 *
 * // The `ctrl` channel ensures that all of the values on the even channel are
 * // read before any of the values on the odd channel are (this is only
 * // possible because the output channels have buffers big enough to make sure
 * // that no send is blocked).
 * //
 * // -> 2
 * // -> 4
 * // -> 1
 * // -> 3
 * ```
 *
 * @memberof module:chanko/operations~Operations
 * @param {module:chanko~predicate} fn A predicate function used to test each
 * value on the input channel.
 * @param {module:chanko/channel~Channel} src The source channel.
 * @param {(number|module:chanko/buffer~Buffer)} [tBuffer=0] A buffer used to
 *     create the destination channel which receives all values that passed the
 *     predicate. If this is a number, a
 *     {@link module:chanko/buffer~FixedBuffer} of that size will be used. If
 *     this is `0` or not present, the channel will be unbuffered.
 * @param {(number|module:chanko/buffer~Buffer)} [fBuffer=0] A buffer used to
 *     create the destination channel which receives all values that did not
 *     pass the predicate. If this is a number, a
 *     {@link module:chanko/buffer~FixedBuffer} of that size will be used. If
 *     this is `0` or not present, the channel will be unbuffered.
 * @return {module:chanko/channel~Channel[]} An array of two channels. The first
 *     is the destination channel with all of the values that passed the
 *     predicate, the second is the destination channel with all of the values
 *     that did not pass the predicate.
 */
function partition(fn, src, tBuffer = 0, fBuffer = 0) {
  const tDst = chan(tBuffer);
  const fDst = chan(fBuffer);

  go(async () => {
    for (;;) {
      const value = await recv(src);
      if (value === CLOSED) {
        close(tDst);
        close(fDst);
        break;
      }
      await send(fn(value) ? tDst : fDst, value);
    }
  });

  return [tDst, fDst];
}

/**
 * Merges one or more channels into a single destination channel.
 *
 * Values are given to the destination channel as they are sent to the source
 * channels. If `merge` is called when there are already values on multiple
 * source channels, the order that they're put onto the destination channel is
 * random.
 *
 * The destination channel is created by the function based on the buffer value
 * passed as the second parameter. If this is missing, `null`, or `0`, the
 * destination channel will be unbuffered. If it's a positive integer, the
 * destination channel is buffered by a fixed buffer of that size. If the
 * parameter is a buffer, then that buffer is used to buffer the destination
 * channel.
 *
 * As each source channel closes, it is removed from the merge, leaving the
 * channels that are still open to continue merging. When *all* of the source
 * channels close, then the destination channel is closed.
 *
 * ```
 * import { go, chan, send, recv } from "@chanko/channels";
 * import { merge } from "@chanko/operations";
 *
 * const input1 = chan();
 * const input2 = chan();
 * const input3 = chan();
 * const output = merge([input1, input2, input3]);
 *
 * go(async () => {
 *   // Because we're sending to all three channels in the same
 *   // process, we know the order in which the values will be
 *   // sent to the output channel; in general, we won't know this
 *   await send(input1, 1);
 *   await send(input2, 2);
 *   await send(input3, 3);
 * });
 *
 * go(async () => {
 *   console.log(await recv(output));      // -> 1
 *   console.log(await recv(output));      // -> 2
 *   console.log(await recv(output));      // -> 3
 * });
 * ```
 *
 * @memberof module:chanko/operations~Operations
 * @param {module:chanko/channel~Channel[]} srcs An array of source channels.
 * @param {(number|module:chanko/buffer~Buffer)} [buffer=0] A buffer used to
 *     create the destination channel. If this is a number, a
 *     {@link module:chanko/buffer~FixedBuffer} of that size will be used. If
 *     this is `0` or not present, the channel will be unbuffered.
 * @return {module:chanko/channel~Channel} The destination channel, which will
 *     receive all values put onto every source channel.
 */
function merge(srcs, buffer = 0) {
  const dst = chan(buffer);
  const inputs = srcs.slice();

  go(async () => {
    for (;;) {
      if (inputs.length === 0) {
        break;
      }
      const { value, channel } = await select(inputs);
      if (value === CLOSED) {
        inputs.splice(inputs.indexOf(channel), 1);
        continue;
      }
      await send(dst, value);
    }
    close(dst);
  });

  return dst;
}

/**
 * Splits a single channel into multiple destination channels, with each
 * destination channel receiving every value sent to the source channel.
 *
 * Every parameter after the first represents the buffer from a single
 * destination channel. Each `0` or `null` will produce an unbuffered channel,
 * while each positive integer will produce a channel buffered by a fixed buffer
 * of that size. Each buffer will produce a buffered channel backed by that
 * buffer. If there are no parameters after the first, then two unbuffered
 * channels will be produced as a default.
 *
 * When the source channel is closed, all destination channels will also be
 * closed. However, if destination channels are closed, they do nothing to the
 * source channel.
 *
 * ```
 * import { go, chan, send } from "@chanko/channels";
 * import { split } from "@chanko/operations";
 *
 * const input = chan();
 * const outputs = split(input, 3);
 *
 * go(async () => {
 *   await send(input, 1);
 *   await send(input, 2);
 *   await send(input, 3);
 * });
 *
 * go(async () => {
 *   for await (const output of outputs) {
 *     console.log(output);
 *     // -> 1
 *     // -> 2
 *     // -> 3
 *   }
 * });
 * ```
 *
 * This function moves its values to the output channels asynchronously. This
 * means that even when using unbuffered channels, it is not necessary for all
 * output channels to be received from before the next send to the input channel
 * can complete.
 *
 * @memberof module:chanko/operations~Operations
 * @param {module:chanko/channel~Channel} src The source channel.
 * @param {...(number|module:chanko/buffer~Buffer)} [buffers=2] The buffers used
 *     to create the destination channels. Each entry is treated separately. If
 *     one is a number, then a
 *     {@link module:chanko/buffer~FixedBuffer|FixedBuffer} of that size will be
 *     used. If one is a `0`, then the corresponding channel will be unbuffered.
 *     **Exception:** if a single number is passed, then that number of
 *     unbuferred channels will be created. This means that the default is to
 *     create two unbuffered channels. To create a single channel with a fixed
 *     buffer, use `{@link chanko~Chanko.fixed|fixed}` explicitly.
 * @return {module:chanko/channel~Channel[]} An array of destination channels.
 */
function split(src, ...buffers) {
  let bfs = buffers.length === 0 ? [2] : buffers;
  if (bfs.length === 1 && isNumber(bfs[0])) {
    const count = bfs[0];
    bfs = [];
    for (let i = 0; i < count; i++) {
      bfs.push(0);
    }
  }

  const dsts = bfs.map(bf => chan(bf));
  const done = chan();
  let count = 0;

  function callback() {
    if (--count === 0) {
      sendAsync(done);
    }
  }

  go(async () => {
    for (;;) {
      const value = await recv(src);
      if (value === CLOSED) {
        for (const dst of dsts) {
          close(dst);
        }
        break;
      }

      count = dsts.length;
      for (const dst of dsts) {
        sendAsync(dst, value, callback);
      }
      await recv(done);
    }
  });

  return dsts;
}

/**
 * Utility function to add the ability to be tapped to a channel that is being
 * tapped. This will add a single property to that channel only (named
 * '@@multitap/taps' so as to decrease the chance of collision), but the tapping
 * functionality itself is provided outside the channel object. This new
 * property is an array of the channels tapping this channel, and it will be
 * removed if all taps are removed.
 *
 * @param {module:chanko/channel~Channel} src The source channel to be tapped.
 * @private
 */
function makeTap(src) {
  Object.defineProperty(src, TAPS, {
    configurable: true,
    writable: true,
    value: []
  });

  const done = chan();
  let count = 0;

  function callback() {
    if (--count === 0) {
      sendAsync(done);
    }
  }

  go(async () => {
    for (;;) {
      const value = await recv(src);
      if (value === CLOSED || src[TAPS].length === 0) {
        delete src[TAPS];
        break;
      }

      count = src[TAPS].length;
      for (const tap of src[TAPS]) {
        sendAsync(tap, value, callback);
      }
      await recv(done);
    }
  });
}

/**
 * Taps a channel, sending all of the values sent to it to the destination
 * channel.
 *
 * A source channel can be tapped multiple times, and all of the tapping
 * (destination) channels receive each value sent to the tapped (source)
 * channel.
 *
 * This is different from
 * `{@link module:chanko/operations~Operations.split|split}` in that it's
 * temporary. Channels can tap a channel and then untap it, multiple times, as
 * needed. If a source channel has all of its taps removed, then it reverts to a
 * normal channel, just as it was before it was tapped.
 *
 * Also unlike `{@link module:chanko/operations~Operations.split|split}`, each
 * call can only tap once. For multiple channels to tap a source channel, `tap`
 * has to be called multiple times.
 *
 * Closing either the source or any of the destination channels has no effect on
 * any of the other channels.
 *
 * ```
 * import { go, chan, send, recv } from "@chanko/channels";
 * import { tap } from "@chanko/operations";
 *
 * const input = chan();
 * const tapper = chan();
 * tap(input, tapper);
 *
 * go(async () => {
 *   await send(input, 1);
 *   await send(input, 2);
 * });
 *
 * go(async () => {
 *   console.log(await recv(tapper));   // -> 1
 *   console.log(await recv(tapper));   // -> 2
 * });
 *
 * ```
 *
 * @memberof module:chanko/operations~Operations
 * @param {module:chanko/channel~Channel} src The channel to be tapped.
 * @param {module:chanko/channel~Channel} [dest] The channel tapping the source
 *     channel. If this is not present, a new unbuffered channel will be
 *     created.
 * @return {module:chanko/channel~Channel} The destination channel. This is the
 *     same as the second argument, if present; otherwise it is the
 *     newly-created channel tapping the source channel.
 */
function tap(src, dst = chan()) {
  if (!src[TAPS]) {
    makeTap(src);
  }
  if (!src[TAPS].includes(dst)) {
    src[TAPS].push(dst);
  }
  return dst;
}

/**
 * Untaps a previously tapping destination channel from its source channel.
 *
 * This removes a previously created tap. The destination (tapping) channel will
 * stop receiving the values sent to the source channel.
 *
 * If the destination channel was not, in fact, tapping the source channel, this
 * function will do nothing. If all taps are removed, the source channel reverts
 * to normal (i.e., it no longer has the tapping code applied to it and can be
 * taken from as normal).
 *
 * @memberof module:chanko/operations~Operations
 * @param {module:chanko/channel~Channel} src The tapped channel.
 * @param {module:chanko/channel~Channel} dest The channel that is tapping the
 *     source channel that should no longer be tapping the source channel.
 */
function untap(src, dst) {
  const taps = src[TAPS];
  if (taps) {
    const index = taps.indexOf(dst);
    if (index !== -1) {
      taps.splice(index, 1);
      if (taps.length === 0) {
        sendAsync(src);
      }
    }
  }
}

/**
 * Removes all taps from a source channel.
 *
 * The previously-tapped channel reverts to a normal channel, while any channels
 * that might have been tapping it no longer receive values from the source
 * channel. If the source channel had no taps, this function does nothing.
 *
 * @memberof module:chanko/operations~Operations
 * @param {module:chanko/channel~Channel} src The tapped channel. All taps will
 *     be removed from this channel.
 */
function untapAll(src) {
  if (src[TAPS]) {
    src[TAPS] = [];
    sendAsync(src);
  }
}

/**
 * Maps the values from one or more source channels through a function, sending
 * the results to a new channel.
 *
 * The mapping function is given one value from each source channel, after at
 * least one value becomes available on every source channel. The output value
 * from the function is then sent to the destination channel.
 *
 * The destination channel is created by the function based on the buffer value
 * passed as the third parameter. If this is missing, `null`, or `0`, the
 * destination channel will be unbuffered. If it's a positive integer, the
 * destination channel is buffered by a fixed buffer of that size. If the
 * parameter is a buffer, then that buffer is used to buffer the destination
 * channel.
 *
 * Once *any* source channel is closed, the mapping ceases and the destination
 * channel is also closed.
 *
 * This is obviously similar to a map transducer, but unlike a transducer, this
 * function works with multiple input channels. This is something that a
 * transducer on a single channel is unable to do.
 *
 * ```
 * import { go, chan, send, recv, close, isClosed } from "@chanko/channels";
 * import { map } from "@chanko/operations"
 *
 * const input1 = chan();
 * const input2 = chan();
 * const input3 = chan();
 * const output = map((x, y, z) => x + y + z, [input1, input2, input3]);
 *
 * go(async () => {
 *   await send(input1, 1);
 *   await send(input1, 2);
 *   await send(input1, 3);
 * });
 *
 * go(async () => {
 *   await send(input2, 10);
 *   await send(input2, 20);
 *   close(input2);
 * });
 *
 * go(async () => {
 *   await send(input3, 100);
 *   await send(input3, 200);
 *   await send(input3, 300);
 * });
 *
 * go(async () => {
 *   console.log(await recv(output));     // -> 111
 *   console.log(await recv(output));     // -> 222
 *   // Output closes now because input2 closes after 2 values
 *   console.log(isClosed(output));       // -> true
 * });
 * ```
 *
 * @memberof module:chanko/operations~Operations
 * @param {module:chanko/operations~mapper} fn The mapping function. This should
 *     have one parameter for each source channel and return a single value.
 * @param {module:chanko/channel~Channel[]} srcs The source channels.
 * @param {(number|module:chanko/buffer~Buffer)} [buffer=0] A buffer used to
 *     create the destination channel. If this is a number, a
 *     {@link module:chanko/buffer~FixedBuffer} of that size will be used. If
 *     this is `0` or not present, the channel will be unbuffered.
 * @return {module:chanko/channel~Channel} The destination channel.
 */
function map(fn, srcs, buffer = 0) {
  const dst = chan(buffer);
  const srclen = srcs.length;
  const values = [];
  const callbacks = [];
  const temp = chan();
  let count;

  for (let i = 0; i < srclen; i++) {
    callbacks[i] = (index => {
      return value => {
        values[index] = value;
        if (--count === 0) {
          sendAsync(temp, values.slice());
        }
      };
    })(i);
  }

  go(async () => {
    for (;;) {
      count = srclen;
      for (let i = 0; i < srclen; i++) {
        recvAsync(srcs[i], callbacks[i]);
      }
      const values = await recv(temp);
      for (const value of values) {
        if (value === CLOSED) {
          // Once a source closes, we close the destination AND the rest of the
          // sources. Otherwise the sources will have nothing receiving from
          // them and sends to them will block forever. By closing them, sends
          // to them will immediately return `false` and not block.
          close(dst);
          for (const src of srcs) {
            close(src);
          }
          return;
        }
      }
      await send(dst, fn(...values));
    }
  });

  return dst;
}

export { pipe, partition, merge, split, tap, untap, untapAll, map };
