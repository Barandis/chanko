/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

/**
 * A set of channel utilities for changing the timing of inputs being put onto
 * the input channel.
 *
 * @module chanko/operations/timing
 * @private
 */

import {
  go,
  chan,
  send,
  select,
  close,
  CLOSED,
  isTimed,
  timedChan
} from "@chanko/channels";

import { isNumber } from "modules/common";

/**
 * Debounces an input channel.
 *
 * Debouncing is the act of turning several input values into one. For example,
 * debouncing a channel driven by a `mousemove` event would cause only the final
 * `mousemove` event to be put onto the channel, dropping all of the other ones.
 * This can be desirable because `mousemove` events come in bunches, being
 * produced continually while the mouse is moving, and often all that we really
 * care about is to learn where the mouse ended up.
 *
 * This function does this by controlling which values that have been sent to
 * the source channel are made available on the destination channel, and when.
 *
 * The `delay` parameter determines the debounce threshold. Once the first value
 * is sent to the source channel, debouncing is in effect until the number of
 * milliseconds in `delay` passes without any other value being put onto that
 * channel. In other words, the delay will be refreshed if another value is sent
 * to the source channel before the delay elapses. After a full delay interval
 * passes without a value being sent to the source channel, the last value sent
 * becomes available on the destination channel.
 *
 * This behavior can be modified through four options: `leading`, `trailing`,
 * `maxDelay`, and `cancel`.
 *
 * If both `leading` and `trailing` are `true`, values will not be duplicated.
 * The first value put onto the source channel will be put onto the destination
 * channel immediately (per `leading`) and the delay will begin, but a value
 * will only be made available on the destination channel at the end of the
 * delay (per `trailing`) if *another* input value was put onto the source
 * channel before the delay expired.
 *
 * @memberof module:chanko/operations
 * @param {module:chanko/channels.Channel} src The source channel.
 * @param {(number|module:chanko/channels.Buffer)} [buffer=0] A buffer used to
 *     create the destination channel. If this is a number, a
 *     {@link module:chanko/channels.FixedBuffer|FixedBuffer} of that size will be
 *     used. If this is `0` or not present, the channel will be unbuffered.
 * @param {number} delay The debouncing delay, in milliseconds.
 * @param {Object} [options={}] A set of options to further configure the
 *     debouncing.
 * @param {boolean} [options.leading=false] Instead of making a value available
 *     on the destination channel after the delay passes, the first value put
 *     onto the source channel is made available *before* the delay begins. No
 *     value is available on the destination channel after the delay has elapsed
 *     (unless `trailing` is also `true`).
 * @param {boolean} [options.trailing=true] The default behavior, where a value
 *     is not made available on the destination channel until the entire delay
 *     passes without a new value being put on the source channel.
 * @param {number} [options.maxDelay=0] The maximum delay allowed before a value
 *     is put onto the destination channel. Debouncing can, in theory, go on
 *     forever as long as new input values continue to be put onto the source
 *     channel before the delay expires. Setting this option to a positive
 *     number sets the maximum number of milliseconds that debouncing can go on
 *     before it's forced to end, even if in the middle of a debouncing delay.
 *     Having debouncing end through the max delay operates exactly as if it had
 *     ended because of lack of input; the last input is made available on the
 *     destination channel (if `trailing` is `true`), and the next input will
 *     trigger another debounce operation.
 * @param {module:chanko/channels.Channel} [options.cancel] A channel used to
 *     signal a cancellation of the debouncing. Any value put onto this channel
 *     will cancel the current debouncing operation, closing the output channel
 *     and discarding any values that were waiting for the debounce threshold
 *     timer to be sent to the output.
 * @return {module:chanko/channels.Channel} The newly-created destination
 *     channel, where all of the values will be debounced from the source
 *     channel.
 */
function debounce(src, buffer, delay, options) {
  const defaults = {
    leading: false,
    trailing: true,
    maxDelay: 0,
    cancel: chan()
  };
  const [buf, del, opts] = isNumber(delay)
    ? [buffer, delay, Object.assign(defaults, options ?? {})]
    : [0, buffer, Object.assign(defaults, delay ?? {})];

  const dst = chan(buf);
  const { leading, trailing, maxDelay, cancel } = opts;

  go(async () => {
    let timer = chan();
    let max = chan();
    let current = CLOSED;

    for (;;) {
      const { value, channel } = await select([src, timer, max, cancel]);

      if (channel === cancel) {
        close(dst);
        break;
      }
      if (channel === src) {
        if (value === CLOSED) {
          close(dst);
          break;
        }

        const timing = isTimed(timer);
        timer = timedChan(del);

        if (!timing && maxDelay > 0) {
          max = timedChan(maxDelay);
        }

        if (leading) {
          if (!timing) {
            await send(dst, value);
          } else {
            current = value;
          }
        } else if (trailing) {
          current = value;
        }
      } else {
        timer = chan();
        max = chan();
        if (trailing && current !== CLOSED) {
          await send(dst, current);
          current === CLOSED;
        }
      }
    }
  });

  return dst;
}

/**
 * Throttles an input channel.
 *
 * Throttling is the act of ensuring that something only happens once per time
 * interval. In this case, it means that a value sent to the source channel is
 * only made available to the destination channel once per a given number of
 * milliseconds. An example usage would be with window scroll events; these
 * events are nearly continuous as scrolling is happening, and perhaps we don't
 * want to call an expensive UI updating function every time a scroll event is
 * fired. We can throttle the input channel and make it only offer up the scroll
 * events once every 100 milliseconds, for instance.
 *
 * Throttling is effected by creating a new channel as a throttled destination
 * for values sent to the source channel. Values will only appear on that
 * destination channel once per delay interval; other values that are put onto
 * the source channel in the meantime are discarded.
 *
 * The `delay` parameter controls how often a value can become available on the
 * destination channel. When the first value is sent to the source channel, it
 * is immediately sent to the destination channel as well and the delay begins.
 * Any further values sent to the source channel during that delay are *not*
 * passed through; only when the delay expires is the last input value made
 * available on the destination channel. The delay then begins again, so that
 * further inputs are squelched until *that* delay passes. Throttling continues,
 * only allowing one value through per interval, until an entire interval passes
 * without input.
 *
 * This behavior can be modified by three options: `leading`, `trailing`, and
 * `cancel`.
 *
 * If both `leading` and `trailing` are `true`, values will not be duplicated.
 * The first value sent to the source channel will be put onto the destination
 * channel immediately (per `leading`) and the delay will begin, but a value
 * will only be made available on the destination channel at the end of the
 * delay (per `trailing`) if *another* input value was sent to the source
 * channel before the delay expired.
 *
 * @memberof module:chanko/operations
 * @param {module:chanko/channels.Channel} src The source channel.
 * @param {(number|module:chanko/channels.Buffer)} [buffer=0] A buffer used to
 *     create the destination channel. If this is a number, a
 *     {@link module:chanko/channels.FixedBuffer|FixedBuffer} of that size will
 *     be used. If this is `0` or not present, the channel will be unbuffered.
 * @param {number} delay The throttling delay, in milliseconds.
 * @param {Object} [options={}] A set of options to further configure the
 * throttling.
 * @param {boolean} [options.leading=true] Makes the value that triggered the
 *     throttling immediately available on the destination channel before
 *     beginning the delay. If this is `false`, the first value will not be put
 *     onto the destination channel until a full delay interval passes.
 * @param {boolean} [options.trailing=true] Makes the last value put onto the
 *     source channel available on the destination channel when the delay
 *     expires. If this is `false`, any inputs that come in during the delay are
 *     ignored, and the next value is not put onto the destination channel until
 *     the first input *after* the delay expires.
 * @param {module:chanko/channels.Channel} [options.cancel] A channel used to
 *     signal a cancellation of the throttling. Any value put onto this channel
 *     will cancel the current throttling operation, closing the output channel
 *     and discarding any values that were waiting for the throttle threshold
 *     timer to be sent to the output.
 * @return {module:chanko/channels.Channel}} The newly-created destination
 *     channel, where all of the values will be throttled from the source
 *     channel.
 */
function throttle(src, buffer, delay, options) {
  const defaults = {
    leading: true,
    trailing: true,
    cancel: chan()
  };
  const [buf, del, opts] = isNumber(delay)
    ? [buffer, delay, Object.assign(defaults, options ?? {})]
    : [0, buffer, Object.assign(defaults, delay ?? {})];

  const dst = chan(buf);
  const { leading, trailing, cancel } = opts;

  go(async () => {
    let timer = chan();
    let current = CLOSED;

    for (;;) {
      const { value, channel } = await select([src, timer, cancel]);

      if (channel === cancel) {
        close(dst);
        break;
      }

      if (channel === src) {
        if (value === CLOSED) {
          close(dst);
          break;
        }

        const timing = isTimed(timer);
        if (!timing) {
          timer = timedChan(del);
        }

        if (leading) {
          if (!timing) {
            await send(dst, value);
          } else if (trailing) {
            current = value;
          }
        } else if (trailing) {
          current = value;
        }
      } else if (trailing && current !== CLOSED) {
        timer = timedChan(del);
        await send(dst, current);
        current = CLOSED;
      } else {
        timer = chan();
      }
    }
  });

  return dst;
}

export { debounce, throttle };
