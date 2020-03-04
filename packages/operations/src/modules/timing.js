/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
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

export { debounce };
