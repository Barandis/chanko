/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { expect, FOO, BAR, BAZ, QUX, QUUX } from "test/helper";
import sinon from "sinon";

import { debounce } from "modules/timing";

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

// This is here because Sinon's `tickAsync` yields back to the event loop BEFORE
// it advances the timers, so an additional 0ms delay is necessary to make the
// event loop run AFTER the timers advance
async function tickAsync(clock, time) {
  await clock.tickAsync(time);
  await clock.tickAsync(0);
}

describe("Channel timing functions", () => {
  let sandbox;
  let clock;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    clock = sandbox.useFakeTimers();
  });
  afterEach(() => sandbox.restore());

  describe("debounce", () => {
    it("accepts a buffer for the output channel", async () => {
      const input = chan();
      const output = debounce(input, fixed(1), 100);
      const spy = sandbox.spy();

      const p1 = go(async () => {
        expect(await recv(output)).to.equal(FOO);
        spy();
      });

      const p2 = go(async () => {
        await send(input, FOO);
      });

      const p3 = go(async () => {
        expect(spy).not.to.be.called;
        await tickAsync(clock, 75);
        expect(spy).not.to.be.called;
        await tickAsync(clock, 50);
        expect(spy).to.be.calledOnce;
      });

      return join(p1, p2, p3);
    });

    it("closes the output when the input closes", async () => {
      const input = chan();
      const output = debounce(input, 100);

      close(input);

      return go(async () => {
        expect(await recv(output)).to.equal(CLOSED);
      });
    });

    context("with trailing option", () => {
      let input, output;

      beforeEach(() => {
        input = chan();
        output = debounce(input, 100);
      });

      it("holds the input value until the delay expires", async () => {
        const spy = sandbox.spy();

        const p1 = go(async () => {
          await send(input, FOO);
        });

        const p2 = go(async () => {
          expect(await recv(output)).to.equal(FOO);
          spy();
        });

        const p3 = go(async () => {
          expect(spy).not.to.be.called;
          await tickAsync(clock, 75);
          expect(spy).not.to.be.called;
          await tickAsync(clock, 50);
          expect(spy).to.be.calledOnce;
        });

        return join(p1, p2, p3);
      });

      it("restarts the delay if another value is sent", async () => {
        const spy = sandbox.spy();

        const p1 = go(async () => {
          expect(await recv(output)).to.equal(BAR);
          spy();
        });

        const p2 = go(async () => {
          expect(spy).not.to.be.called;

          await send(input, FOO);

          await tickAsync(clock, 75);
          expect(spy).not.to.be.called;

          await send(input, BAR);

          await tickAsync(clock, 75);
          expect(spy).not.to.be.called;

          await tickAsync(clock, 50);
          expect(spy).to.be.calledOnce;
        });

        return join(p1, p2);
      });
    });

    context("with leading option and no trailing option", () => {
      let input, output;

      beforeEach(() => {
        input = chan();
        output = debounce(input, 100, { leading: true, trailing: false });
      });

      it("returns the input value immediately", async () => {
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

      it("will not return another value until the delay expires", async () => {
        const spy = sandbox.spy();

        const p1 = go(async () => {
          expect(await recv(output)).to.equal(FOO);
          expect(await recv(output)).to.equal(QUX);
          spy();
        });

        const p2 = go(async () => {
          expect(spy).not.to.be.called;
          await send(input, FOO);
          expect(spy).not.to.be.called;
          await tickAsync(clock, 75);

          await send(input, BAR);
          expect(spy).not.to.be.called;
          await tickAsync(clock, 75);

          await send(input, BAZ);
          expect(spy).not.to.be.called;
          await tickAsync(clock, 150);

          await send(input, QUX);
          await tickAsync(clock, 0);
          expect(spy).to.be.calledOnce;
        });

        return join(p1, p2);
      });
    });

    context("with both leading and trailing option", () => {
      let input, output;

      beforeEach(() => {
        input = chan();
        output = debounce(input, 100, { leading: true });
      });

      it("returns the input value immediately", async () => {
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

      it("doesn't return a single input after the delay expires", async () => {
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

      it("does return a second input after the delay expires", async () => {
        const spy = sandbox.spy();

        const p1 = go(async () => {
          expect(await recv(output)).to.equal(FOO);
          spy();
          expect(await recv(output)).to.equal(BAR);
          spy();
          expect(await recv(output)).to.equal(BAZ);
          spy();
        });

        const p2 = go(async () => {
          expect(spy).not.to.be.called;

          await send(input, FOO);
          await tickAsync(clock, 50);
          expect(spy).to.be.calledOnce;

          await send(input, BAR);
          await tickAsync(clock, 50);
          expect(spy).to.be.calledOnce;

          await tickAsync(clock, 75);
          expect(spy).to.be.calledTwice;

          await send(input, BAZ);
          await tickAsync(clock, 0);
          expect(spy).to.be.calledThrice;
        });

        return join(p1, p2);
      });
    });

    context("with maxDelay option", () => {
      let input, output;

      beforeEach(() => {
        input = chan();
        output = debounce(input, 100, { maxDelay: 250 });
      });

      it("interrupts the debounce after maxDelay elapses", async () => {
        const spy = sandbox.spy();

        const p1 = go(async () => {
          expect(await recv(output)).to.equal(QUX);
          spy();
        });

        const p2 = go(async () => {
          expect(spy).not.to.be.called;

          await send(input, FOO);
          await tickAsync(clock, 75); // 75
          expect(spy).not.to.be.called;

          await send(input, BAR);
          await tickAsync(clock, 75); // 150
          expect(spy).not.to.be.called;

          await send(input, BAZ);
          await tickAsync(clock, 75); // 225
          expect(spy).not.to.be.called;

          await send(input, QUX);
          await tickAsync(clock, 75); // 300
          expect(spy).to.be.calledOnce;
        });

        return join(p1, p2);
      });

      it("restarts maxDelay if the delay is allowed to expire", async () => {
        const spy = sandbox.spy();

        const p1 = go(async () => {
          expect(await recv(output)).to.equal(FOO);
          spy();
          expect(await recv(output)).to.equal(QUUX);
          spy();
        });

        const p2 = go(async () => {
          expect(spy).not.to.be.called;

          await send(input, FOO);
          await tickAsync(clock, 150);
          expect(spy).to.be.calledOnce;

          await send(input, BAR);
          await tickAsync(clock, 75);
          expect(spy).to.be.calledOnce;

          await send(input, BAZ);
          await tickAsync(clock, 75);
          expect(spy).to.be.calledOnce;

          await send(input, QUX);
          await tickAsync(clock, 75);
          expect(spy).to.be.calledOnce;

          await send(input, QUUX);
          await tickAsync(clock, 75);
          expect(spy).to.be.calledTwice;
        });

        return join(p1, p2);
      });
    });

    context("with cancel option", () => {
      let input, output, cancel;

      beforeEach(() => {
        input = chan();
        cancel = chan();
        output = debounce(input, 100, { cancel });
      });

      it("cancels debounce and closes channel on receive", async () => {
        const p1 = go(async () => {
          expect(await recv(output)).to.equal(FOO);
          expect(await recv(output)).to.equal(CLOSED);
        });

        const p2 = go(async () => {
          await send(input, FOO);
          await tickAsync(clock, 125);
          await send(input, BAR);
          await tickAsync(clock, 50);
          await send(cancel);
        });

        return join(p1, p2);
      });
    });
  });
});
