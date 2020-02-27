/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
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
export { go, sleep } from "modules/process";
export { EMPTY } from "modules/queue";
