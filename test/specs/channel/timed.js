/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { expect } from "test/helper";
import sinon from "sinon";

import { config, SET_TIMEOUT, SET_IMMEDIATE } from "modules/dispatcher";
import { timedChan, recvAsync, CLOSED, isTimed } from "modules/channel";

describe("Timed channels", () => {
  let sandbox;
  let clock;

  before(() => config({ dispatchMethod: SET_TIMEOUT }));
  beforeEach(() => {
    sandbox = sinon.createSandbox();
    clock = sandbox.useFakeTimers();
  });
  afterEach(() => sandbox.restore());
  after(() => config({ dispatchMethod: SET_IMMEDIATE }));

  it("creates a channel that closes after some time", () => {
    const spy = sandbox.spy();
    const ch = timedChan(500);

    recvAsync(ch, value => {
      expect(value).to.equal(CLOSED);
      spy();
    });

    expect(spy).not.to.be.called;
    clock.tick(600);
    expect(spy).to.be.calledOnce;
  });

  it("marks itself as a timed channel", () => {
    expect(isTimed(timedChan())).to.be.true;
  });
});
