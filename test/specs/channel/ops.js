/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { expect } from "test/helper";
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

    it("causes any pending and future sends to return false", done => {
      const ch = chan();

      go(async () => {
        // pending
        expect(await send(ch, 1)).to.be.false;
        // future
        expect(await send(ch, 1)).to.be.false;
        done();
      });

      go(async () => {
        await sleep();
        close(ch);
      });
    });

    it("accepts sends until the buffer is full", done => {
      const ch = chan(1);

      go(async () => {
        // buffered
        expect(await send(ch, 1)).to.be.true;
        // pending
        expect(await send(ch, 1)).to.be.false;
        // future
        expect(await send(ch, 1)).to.be.false;
        done();
      });

      go(async () => {
        await sleep();
        close(ch);
      });
    });

    it("causes any pending and future receives to return CLOSED", done => {
      const ch = chan();

      go(async () => {
        // pending
        expect(await recv(ch)).to.equal(CLOSED);
        // future
        expect(await recv(ch)).to.equal(CLOSED);
        done();
      });

      go(async () => {
        await sleep();
        close(ch);
      });
    });

    it("allows receives until the buffer is empty", done => {
      const ch = chan(1);
      const ctrl = chan();

      go(async () => {
        // channel has a value sent to it and is closed before the ctrl
        // channel fires
        await recv(ctrl);
        // buffered
        expect(await recv(ch)).to.equal(1729);
        // future
        expect(await recv(ch)).to.equal(CLOSED);
        done();
      });

      go(async () => {
        await send(ch, 1729);
        close(ch);
        await send(ctrl);
      });
    });
  });

  context("async iterator", () => {
    it("yields values one at a time as they are sent", async () => {
      const ch = chan();

      go(async () => {
        for (const i of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) {
          await send(ch, i);
        }
        close(ch);
      });

      return go(async () => {
        let i = 1;
        for await (const value of ch) {
          expect(value).to.equal(i++);
        }
        expect(i).to.equal(11);
      });
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
