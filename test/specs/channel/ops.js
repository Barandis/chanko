/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { expect, join } from "test/helper";
import sinon from "sinon";

import { chan, send, recv, close, CLOSED, isClosed } from "modules/channel";
import { sleep, go } from "modules/process";
import { config, SET_TIMEOUT, SET_IMMEDIATE } from "modules/dispatcher";

describe("Channel operations", () => {
  context("close", () => {
    it("does nothing if hte channel is already closed", () => {
      const ch = chan();
      close(ch);
      expect(isClosed(ch)).to.be.true;
      close(ch);
      expect(isClosed(ch)).to.be.true;
    });

    it("causes any pending and future sends to return false", async () => {
      const ch = chan();

      const p1 = go(async () => {
        // pending
        expect(await send(ch, 1)).to.be.false;
        // future
        expect(await send(ch, 1)).to.be.false;
      });

      const p2 = go(async () => {
        await sleep();
        close(ch);
      });

      return join(p1, p2);
    });

    it("accepts sends until the buffer is full", async () => {
      const ch = chan(1);

      const p1 = go(async () => {
        // buffered
        expect(await send(ch, 1)).to.be.true;
        // pending
        expect(await send(ch, 1)).to.be.false;
        // future
        expect(await send(ch, 1)).to.be.false;
      });

      const p2 = go(async () => {
        await sleep();
        close(ch);
      });

      join(p1, p2);
    });

    it("causes any pending and future receives to return CLOSED", async () => {
      const ch = chan();

      const p1 = go(async () => {
        // pending
        expect(await recv(ch)).to.equal(CLOSED);
        // future
        expect(await recv(ch)).to.equal(CLOSED);
      });

      const p2 = go(async () => {
        await sleep();
        close(ch);
      });

      join(p1, p2);
    });

    it("allows receives until the buffer is empty", async () => {
      const ch = chan(1);
      const ctrl = chan();

      const p1 = go(async () => {
        // channel has a value sent to it and is closed before the ctrl
        // channel fires
        await recv(ctrl);
        // buffered
        expect(await recv(ch)).to.equal(1729);
        // future
        expect(await recv(ch)).to.equal(CLOSED);
      });

      const p2 = go(async () => {
        await send(ch, 1729);
        close(ch);
        await send(ctrl);
      });

      return join(p1, p2);
    });
  });

  context("async iterator", () => {
    it("yields values one at a time as they are sent", async () => {
      const ch = chan();

      const p1 = go(async () => {
        for (const i of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) {
          await send(ch, i);
        }
        close(ch);
      });

      const p2 = go(async () => {
        let i = 1;
        for await (const value of ch) {
          expect(value).to.equal(i++);
        }
        expect(i).to.equal(11);
      });

      return join(p1, p2);
    });
  });

  context("sleep", () => {
    // Normally we'd use sleep to make a process yield to others, but that
    // would sort of defeat the point of testing sleep
    async function cycle() {
      return Promise.resolve();
    }

    let sandbox;
    let clock;

    before(() => config({ dispatchMethod: SET_TIMEOUT }));
    beforeEach(() => {
      sandbox = sinon.createSandbox();
      clock = sandbox.useFakeTimers();
    });
    afterEach(() => sandbox.restore());
    after(() => config({ dispatchMethod: SET_IMMEDIATE }));

    it("blocks a process for an amount of time", async () => {
      const spy = sandbox.spy();

      sleep(500).then(() => spy());

      expect(spy).not.to.be.called;

      clock.tick(250);
      await cycle();
      expect(spy).not.to.be.called;

      clock.tick(300);
      await cycle();
      expect(spy).to.be.calledOnce;
    });
  });
});
