/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

/**
 * The main module of the library, this simply organizes all of the different
 * modules' constants and functions into a public API.
 *
 * @module chanko
 */

/**
 * All of the publicly available constants and functions are available through
 * this object, which is in turn available in one of three ways:
 *
 * - in a CommonJS environment with `require("chanko")`,
 * - in an ES2015 environment with `import {...} from "chanko"`,
 * - in a browser environment with the `chanko` global object.
 *
 * @namespace Chanko
 */

import { fixed, dropping, sliding, EMPTY } from "modules/buffers";
import {
  dispatcher,
  SET_IMMEDIATE,
  MESSAGE_CHANNEL,
  SET_TIMEOUT
} from "modules/dispatcher";

/**
 * Sets options for the dispatcher.
 *
 * @param {Object} options the dispatcher options to be set. Any options that
 * are not present will go unchanged.
 * @param {Symbol} [options.dispatchMethod=null] the method used by the
 * dispatcher to queue tasks. This is one of
 * {@link module:chanko~Chanko.SET_IMMEDIATE|SET_IMMEDIATE},
 * {@link module:chanko~Chanko.MESSAGE_CHANNEL|MESSAGE_CHANNEL}, or
 * {@link module:chanko~Chanko.SET_TIMEOUT|SET_TIMEOUT}, in that order. If the
 * chosen method is not available
 * ({@link module:chanko~Chanko.SET_IMMEDIATE|SET_IMMEDIATE} outside of Node,
 * {@link module:chanko~Chanko.MESSAGE_CHANNEL|MESSAGE_CHANNEL} outside of
 * browsers, etc.) then the next choice that is available in the current
 * environment will be used.
 * @param {number} [options.batchSize=null] the number of tasks that will run in
 * a batch. Once an entire batch has been run, the dispatcher will leave a
 * chance for other JavaScript tasks to run before running the next batch.
 * @memberof module:chanko~Chanko
 */
function configDispatcher({ dispatchMethod = null, batchSize = null } = {}) {
  if (dispatchMethod) {
    if (
      ![SET_IMMEDIATE, MESSAGE_CHANNEL, SET_TIMEOUT].includes(dispatchMethod)
    ) {
      throw Error("Non-existent dispatch method requested");
    }
    dispatcher.dispatchMethod = dispatchMethod;
  }
  if (batchSize) {
    dispatcher.batchSize = batchSize;
  }
}

/**
 * The set of buffers that can be used to create buffered channels.
 *
 * @memberof module:chanko~Chanko
 * @type {module:chanko~Chanko.Buffers}
 */
const buffers = { fixed, dropping, sliding };

export {
  EMPTY,
  SET_IMMEDIATE,
  MESSAGE_CHANNEL,
  SET_TIMEOUT,
  configDispatcher,
  buffers
};
