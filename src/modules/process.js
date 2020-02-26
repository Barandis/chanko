/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { timedChan, recvAsync } from "modules/channel";

function sleep(delay = 0) {
  return new Promise(resolve => {
    const ch = timedChan(delay);
    recvAsync(ch, resolve);
  });
}

function go(fn, ...args) {
  return fn(...args);
}

export { sleep, go };
