/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import chai, { expect } from "chai";
import sinonChai from "sinon-chai";

import { send, recv, close } from "@chanko/channels";

chai.use(sinonChai);

async function fillChannel(channel, count, closeAfter) {
  for (let i = 1; i <= count; i++) {
    await send(channel, i);
  }
  if (closeAfter) {
    close(channel);
  }
}

async function fillChannelWith(channel, array, closeAfter) {
  for (const item of array) {
    await send(channel, item);
  }
  if (closeAfter) {
    close(channel);
  }
}

async function expectChannel(channel, expected, wait) {
  if (wait) {
    await recv(wait);
  }
  const values = [];
  for (let i = 0, count = expected.length; i < count; i++) {
    values.push(await recv(channel));
  }
  expect(values).to.deep.equal(expected);
}

export { expect, fillChannel, fillChannelWith, expectChannel };
