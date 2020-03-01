/* eslint-disable max-lines */
/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { expect } from "test/helper";
import sinon from "sinon";

import {
  chan,
  send,
  recv,
  sendAsync,
  recvAsync,
  close,
  CLOSED,
  select,
  value,
  channel,
  DEFAULT,
  recvOrThrow
} from "modules/channel";
import { go, sleep, join } from "modules/process";

describe("Channel communication", () => {
  context("recv", () => {
    it("returns a value that was sent to a channel", async () => {
      const ch = chan();

      const p1 = go(async () => {
        await send(ch, 1729);
      });

      const p2 = go(async () => {
        expect(await recv(ch)).to.equal(1729);
      });

      return join(p1, p2);
    });

    it("returns error objects", async () => {
      const ch = chan();
      const obj = Error("test error");

      const p1 = go(async () => {
        await send(ch, obj);
      });

      const p2 = go(async () => {
        expect(await recv(ch)).to.equal(obj);
      });

      return join(p1, p2);
    });

    it("returns a value that was sent async to a channel", async () => {
      const ch = chan();

      sendAsync(ch, 1729);

      return go(async () => {
        expect(await recv(ch)).to.equal(1729);
      });
    });

    it("blocks until there is a value in the channel", async () => {
      const spy = sinon.spy();
      const ch = chan();

      const p1 = go(async () => {
        await recv(ch);
        spy();
      });

      const p2 = go(async () => {
        // ensures the take happens first
        await sleep();
        expect(spy).not.to.be.called;
        await send(ch, 1729);
        // necessary because send doesn't block when there is a pending receive
        await sleep();
        expect(spy).to.be.calledOnce;
      });

      return join(p1, p2);
    });
  });

  context("send", () => {
    it("sends a value to a channel for a recv", async () => {
      const ch = chan();

      const p1 = go(async () => {
        await send(ch, 1729);
      });

      const p2 = go(async () => {
        expect(await recv(ch)).to.equal(1729);
      });

      return join(p1, p2);
    });

    it("sends a value onto a channel for recving async", async () => {
      const ch = chan();

      recvAsync(ch, value => {
        expect(value).to.equal(1729);
      });

      return go(async () => {
        await send(ch, 1729);
      });
    });

    it("doesn't require an async function if return is ignored", async () => {
      const ch = chan();

      send(ch, 1729);

      return go(async () => {
        expect(await recv(ch)).to.equal(1729);
      });
    });

    it("doesn't allow sending CLOSED to a channel", async () => {
      const ch = chan();

      return go(async () => {
        try {
          await send(ch, CLOSED);
          expect.fail();
        } catch (ex) {
          expect(ex.message).to.equal("Cannot send CLOSED to a channel");
        }
      });
    });

    it("returns true if called on an open channel", async () => {
      const ch = chan();

      return go(async () => {
        // necessary so the send doesn't block, but we don't await it because we
        // don't want the recv itself to block
        recv(ch);
        expect(await send(ch, 1729)).to.be.true;
      });
    });

    it("returns false if called on a closed channel", async () => {
      const ch = chan();

      return go(async () => {
        close(ch);
        expect(await send(ch, 1729)).to.be.false;
      });
    });

    it("blocks until a value is received off the channel", async () => {
      const ch = chan();
      const spy = sinon.spy();

      const p1 = go(async () => {
        await send(ch, 1729);
        spy();
      });

      const p2 = go(async () => {
        // make sure send is executed first
        await sleep();
        expect(spy).not.to.be.called;
        await recv(ch);
        // yield control since recv doesn't block when a send is queued
        await sleep();
        expect(spy).to.be.calledOnce;
      });

      return join(p1, p2);
    });
  });

  context("select", () => {
    function trueCount(array) {
      return array.filter(x => x).length;
    }

    let ch0, ch1, ch2, chs;

    beforeEach(() => {
      ch0 = chan();
      ch1 = chan();
      ch2 = chan();
      chs = [ch0, ch1, ch2];
    });

    it("accepts a value off exactly one channel at a time", async () => {
      send(ch1, 1);
      send(ch0, 0);
      send(ch2, 2);

      return go(async () => {
        const called = [false, false, false];

        const select1 = await select(chs);
        called[value(select1)] = true;
        expect(trueCount(called)).to.equal(1);

        const select2 = await select(chs);
        called[value(select2)] = true;
        expect(trueCount(called)).to.equal(2);

        const select3 = await select(chs);
        called[value(select3)] = true;
        expect(trueCount(called)).to.equal(3);
      });
    });

    it("sends values to exactly one channel at a time", async () => {
      const called = [false, false, false];

      const p1 = go(async () => {
        for (const i of [1, 2, 3]) {
          await select([
            [ch0, 0],
            [ch1, 1],
            [ch2, 2]
          ]);
          await sleep();
          expect(trueCount(called)).to.equal(i);
          await sleep();
        }
      });

      const p2 = go(async () => {
        expect(await recv(ch0)).to.equal(0);
        called[0] = true;
      });

      const p3 = go(async () => {
        expect(await recv(ch1)).to.equal(1);
        called[1] = true;
      });

      const p4 = go(async () => {
        expect(await recv(ch2)).to.equal(2);
        called[2] = true;
      });

      return join(p1, p2, p3, p4);
    });

    it("can handle receives and sends in the same call", async () => {
      const called = [false, false, false];

      const p1 = go(async () => {
        for (const i of [1, 2, 3]) {
          await select([ch0, [ch1, 1], ch2]);
          await sleep();
          expect(trueCount(called)).to.equal(i);
        }
      });

      const p2 = go(async () => {
        await send(ch0);
        called[0] = true;
      });

      const p3 = go(async () => {
        expect(await recv(ch1)).to.equal(1);
        called[1] = true;
      });

      const p4 = go(async () => {
        await send(ch2);
        called[2] = true;
      });

      return join(p1, p2, p3, p4);
    });

    it("throws an error if no operations are provided", async () => {
      return go(async () => {
        try {
          await select([]);
          expect.fail();
        } catch (ex) {
          expect(ex.message).to.equal("select called with no operations");
        }
      });
    });

    it("can order operations via priority option", async () => {
      send(ch1, 1);
      send(ch2, 2);
      send(ch0, 0);

      return go(async () => {
        await sleep();

        const select1 = await select(chs, { priority: true });
        expect(value(select1)).to.equal(0);
        expect(channel(select1)).to.equal(ch0);

        const select2 = await select(chs, { priority: true });
        expect(value(select2)).to.equal(1);
        expect(channel(select2)).to.equal(ch1);

        const select3 = await select(chs, { priority: true });
        expect(value(select3)).to.equal(2);
        expect(channel(select3)).to.equal(ch2);
      });
    });

    it("blocks if none of the ops is ready yet", async () => {
      const spy = sinon.spy();
      const ctrl1 = chan();
      const ctrl2 = chan();

      const p1 = go(async () => {
        await recv(ctrl1);
        await select([ch0, [ch1, 1], ch2]);
        spy();
        await send(ctrl2);
      });

      const p2 = go(async () => {
        await recv(ctrl2);
        expect(spy).not.to.be.called;
        await send(ch0, 0);
        await recv(ctrl2);
        expect(spy).to.be.calledOnce;
      });

      const p3 = go(async () => {
        send(ctrl1);
        send(ctrl2);
      });

      return join(p1, p2, p3);
    });

    it("returns a provided default value instead of blocking", async () => {
      return go(async () => {
        const { value, channel } = await select(chs, { default: 1729 });
        expect(value).to.equal(1729);
        expect(channel).to.equal(DEFAULT);
      });
    });

    it("does not return the default if something is available", async () => {
      const chs = [chan(1), chan(1), chan(1)];
      const ctrl = chan();

      const p1 = go(async () => {
        await send(chs[0], 1729);
        await send(ctrl);
      });

      const p2 = go(async () => {
        await recv(ctrl);
        const { value, channel } = await select(chs, { default: 1723 });
        expect(value).to.equal(1729);
        expect(channel).to.equal(chs[0]);
      });

      return join(p1, p2);
    });
  });

  context("recvOrThrow", () => {
    it("acts as recv if the received object isn't an error", async () => {
      const ch = chan();
      send(ch, 1729);

      return go(async () => {
        expect(await recvOrThrow(ch)).to.equal(1729);
      });
    });

    it("throws errors received from the channel", async () => {
      const ch = chan();
      const ctrl = chan();
      const spy = sinon.spy();
      const err = Error("test error");

      send(ch, err);

      const p1 = go(async () => {
        try {
          await recvOrThrow(ch);
          expect.fail();
        } catch (ex) {
          expect(ex).to.equal(err);
          spy();
          await send(ctrl);
        }
      });

      const p2 = go(async () => {
        await recv(ctrl);
        expect(spy).to.be.calledOnce;
      });

      return join(p1, p2);
    });

    it("lets the process continue if the error is caught", async () => {
      const ch = chan();
      const spy = sinon.spy();
      const err = Error("test error");

      send(ch, err);

      async function proc() {
        try {
          await recvOrThrow(ch);
        } catch (ex) {
          expect(ex.message).to.equal("test error");
          spy();
        }
        return 1729;
      }

      return go(async () => {
        expect(await proc()).to.equal(1729);
        expect(spy).to.be.calledOnce;
      });
    });

    it("lets the process run further ops if the error is caught", async () => {
      const ch = chan();
      const spy = sinon.spy();
      const err = Error("test error");

      async function proc() {
        try {
          await recvOrThrow(ch);
        } catch (ex) {
          expect(ex).to.equal(err);
          spy();
        }
        expect(await recvOrThrow(ch)).to.equal(1729);
      }

      const p1 = go(async () => {
        await proc();
        expect(spy).to.be.calledOnce;
      });

      const p2 = go(async () => {
        await send(ch, err);
        await send(ch, 1729);
      });

      return join(p1, p2);
    });
  });
});
