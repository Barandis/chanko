/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { expect, FOO, BAR, BAZ, QUX, tickAsync } from "test/helper";
import sinon from "sinon";

import { throttle } from "modules/timing";

import {
  go,
  join,
  chan,
  send,
  recv,
  close,
  CLOSED,
  fixed
} from "@chanko/channels";

describe("throttle", () => {
  let sandbox;
  let clock;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    clock = sandbox.useFakeTimers();
  });
  afterEach(() => sandbox.restore());

  it("accepts a buffer for the output channel", async () => {
    const input = chan();
    const output = throttle(input, fixed(1), 100);
    const spy = sandbox.spy();

    const p1 = go(async () => {
      expect(await recv(output)).to.equal(FOO);
      spy();
    });

    const p2 = go(async () => {
      expect(spy).not.to.be.called;
      await send(input, FOO);

      await tickAsync(clock, 75);
      expect(spy).to.be.called;
    });

    return join(p1, p2);
  });

  it("closes the output when the input closes", async () => {
    const input = chan();
    const output = throttle(input, 100);

    close(input);

    return go(async () => {
      expect(await recv(output)).to.equal(CLOSED);
    });
  });

  context("with leading and trailing options", () => {
    let input, output;

    beforeEach(() => {
      input = chan();
      output = throttle(input, 100);
    });

    it("returns the first input value immediately", async () => {
      const spy = sandbox.spy();

      const p1 = go(async () => {
        expect(await recv(output)).to.equal(FOO);
        spy();
      });

      const p2 = go(async () => {
        expect(spy).not.to.be.called;
        await send(input, FOO);
        await tickAsync(clock, 0);
        expect(spy).to.be.calledOnce;
      });

      return join(p1, p2);
    });

    it("doesn't return a single value after the delay expires", async () => {
      const p1 = go(async () => {
        expect(await recv(output)).to.equal(FOO);
        expect(await recv(output)).to.equal(BAR);
      });

      const p2 = go(async () => {
        await send(input, FOO);
        await tickAsync(clock, 125);
        await send(input, BAR);
      });

      return join(p1, p2);
    });

    it("does return a second value after the delay expires", async () => {
      const spy = sandbox.spy();

      const p1 = go(async () => {
        expect(await recv(output)).to.equal(FOO);
        spy();
        expect(await recv(output)).to.equal(BAR);
        spy();
      });

      const p2 = go(async () => {
        expect(spy).not.to.be.called;

        await send(input, FOO);
        await tickAsync(clock, 50);
        expect(spy).to.be.calledOnce;

        await send(input, BAR);
        await tickAsync(clock, 25);
        expect(spy).to.be.calledOnce;

        await tickAsync(clock, 50);
        expect(spy).to.be.calledTwice;
      });

      return join(p1, p2);
    });

    it("restarts the timiner without waiting for new input", async () => {
      const spy = sandbox.spy();

      const p1 = go(async () => {
        expect(await recv(output)).to.equal(FOO);
        spy();
        expect(await recv(output)).to.equal(BAR);
        spy();
        expect(await recv(output)).to.equal(BAZ);
        spy();
        expect(await recv(output)).to.equal(QUX);
        spy();
      });

      const p2 = go(async () => {
        await send(input, FOO);
        await tickAsync(clock, 50);
        expect(spy).to.be.calledOnce;

        await send(input, BAR);
        expect(spy).to.be.calledOnce;

        await tickAsync(clock, 75);
        expect(spy).to.be.calledTwice;
        await send(input, BAZ);
        expect(spy).to.be.calledTwice;

        await tickAsync(clock, 100);
        expect(spy).to.be.calledThrice;
        await send(input, QUX);
        expect(spy).to.be.calledThrice;

        await tickAsync(clock, 100);
        expect(spy.callCount).to.equal(4);
      });

      return join(p1, p2);
    });
  });

  context("with leading option only", () => {
    let input, output;

    beforeEach(() => {
      input = chan();
      output = throttle(input, 100, { trailing: false });
    });

    it("returns the first value immediately", async () => {
      const spy = sandbox.spy();

      const p1 = go(async () => {
        expect(await recv(output)).to.equal(FOO);
        spy();
      });

      const p2 = go(async () => {
        expect(spy).not.to.be.called;
        await send(input, FOO);
        await tickAsync(clock, 0);
        expect(spy).to.be.calledOnce;
      });

      return join(p1, p2);
    });

    it("drops any input that is sent before the delay elapses", async () => {
      const spy = sandbox.spy();

      const p1 = go(async () => {
        expect(await recv(output)).to.equal(FOO);
        spy();
        expect(await recv(output)).to.equal(BAZ);
        spy();
      });

      const p2 = go(async () => {
        expect(spy).not.to.be.called;
        await send(input, FOO);
        await tickAsync(clock, 5);
        expect(spy).to.be.calledOnce;

        for (let i = 0; i < 5; i++) {
          await send(input, BAR);
          await tickAsync(clock, 10);
          expect(spy).to.be.calledOnce;
        }

        await tickAsync(clock, 75);
        await send(input, BAZ);
        await tickAsync(clock, 0);
        expect(spy).to.be.calledTwice;
      });

      return join(p1, p2);
    });
  });

  context("with trailing option only", () => {
    let input, output;

    beforeEach(() => {
      input = chan();
      output = throttle(input, 100, { leading: false });
    });

    it("returns a single value after the delay has elapsed", async () => {
      const spy = sandbox.spy();

      const p1 = go(async () => {
        expect(await recv(output)).to.equal(FOO);
        spy();
      });

      const p2 = go(async () => {
        expect(spy).not.to.be.called;
        await send(input, FOO);
        await tickAsync(clock, 0);
        expect(spy).not.to.be.called;

        await tickAsync(clock, 50);
        expect(spy).not.to.be.called;

        await tickAsync(clock, 75);
        expect(spy).to.be.calledOnce;
      });

      return join(p1, p2);
    });

    it("returns only the last input before the delay has elapsed", async () => {
      const spy = sandbox.spy();

      const p1 = go(async () => {
        expect(await recv(output)).to.equal(QUX);
        spy();
      });

      const p2 = go(async () => {
        expect(spy).not.to.be.called;
        await send(input, FOO);
        await tickAsync(clock, 25);
        expect(spy).not.to.be.called;

        await send(input, BAR);
        await tickAsync(clock, 25);
        expect(spy).not.to.be.called;

        await send(input, BAZ);
        await tickAsync(clock, 25);
        expect(spy).not.to.be.called;

        await send(input, QUX);
        await tickAsync(clock, 5);
        expect(spy).not.to.be.called;

        await tickAsync(clock, 45);
        expect(spy).to.be.calledOnce;
      });

      return join(p1, p2);
    });
  });

  context("with cancel option", () => {
    let input, output, cancel;

    beforeEach(() => {
      input = chan();
      cancel = chan();
      output = throttle(input, 100, { cancel });
    });

    it("cancels throttling and closes the channel on receive", async () => {
      const p1 = go(async () => {
        expect(await recv(output)).to.equal(FOO);
        expect(await recv(output)).to.equal(CLOSED);
      });

      const p2 = go(async () => {
        await send(input, FOO);
        await send(input, BAR);
        await tickAsync(clock, 50);
        await send(cancel);
      });

      return join(p1, p2);
    });
  });
});
