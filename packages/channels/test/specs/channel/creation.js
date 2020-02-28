/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { expect, join } from "test/helper";
import sinon from "sinon";

import {
  chan,
  isTimed,
  recvAsync,
  CLOSED,
  send,
  recv,
  isBuffered,
  close
} from "modules/channel/index";
import { fixed, dropping, sliding } from "modules/buffer";
import { go, sleep } from "modules/process";

import { transducers as t } from "xduce";

describe("Channel creation", () => {
  context("chan", () => {
    it("creates an untimed channel", () => {
      expect(isTimed(chan())).to.be.false;
      expect(isTimed(chan(0))).to.be.false;
      expect(isTimed(chan(3))).to.be.false;
      expect(isTimed(chan(fixed(3)))).to.be.false;
      expect(isTimed(chan(dropping(3)))).to.be.false;
      expect(isTimed(chan(sliding(3)))).to.be.false;
      expect(isTimed(chan({ transducer: t.map(x => x) }))).to.be.false;
      expect(
        isTimed(
          chan({
            transducer: t.map(x => x),
            handler: e => {
              throw e;
            }
          })
        )
      ).to.be.false;
    });

    it("can create a timed channel", () => {
      const sandbox = sinon.createSandbox();
      const clock = sandbox.useFakeTimers();
      const spy = sandbox.spy();
      const ch = chan({ timer: 500 });

      recvAsync(ch, value => {
        expect(value).to.equal(CLOSED);
        spy();
      });

      expect(spy).to.not.be.called;
      clock.tick(600);
      expect(spy).to.be.calledOnce;

      sandbox.restore();
    });

    it("cannot queue more than 1024 sends at once", async () => {
      const ch = chan();

      for (let i = 0; i < 1024; i++) {
        send(ch, i);
      }

      return go(async () => {
        try {
          await send(ch, 1025);
          expect.fail();
        } catch (ex) {
          expect(ex.message).to.equal(
            "No more than 1024 pending sends are allowed on a single channel"
          );
        }
      });
    });

    it("cannot queue more than 1024 recvs at once", async () => {
      const ch = chan();

      for (let i = 0; i < 1024; i++) {
        recv(ch);
      }

      return go(async () => {
        try {
          await recv(ch);
          expect.fail();
        } catch (ex) {
          expect(ex.message).to.equal(
            "No more than 1024 pending receives are allowed on a single channel"
          );
        }
      });
    });

    it("can configure how many pending sends/receives to allow", async () => {
      const ch = chan({ maxQueued: 2 });

      for (let i = 0; i < 2; i++) {
        recv(ch);
      }

      return go(async () => {
        try {
          await recv(ch);
          expect.fail();
        } catch (ex) {
          expect(ex.message).to.equal(
            "No more than 2 pending receives are allowed on a single channel"
          );
        }
      });
    });

    context("buffer argument", () => {
      it("defaults to being unbuffered", () => {
        const ch = chan();
        expect(isBuffered(ch)).to.be.false;
      });

      it("provides a fixed buffer if given a number", () => {
        const ch = chan(3);
        expect(isBuffered(ch)).to.be.true;
      });

      it("creates an unbuffered channel if 0 is passed", async () => {
        const ch = chan(0);
        expect(isBuffered(ch)).to.be.false;

        const p1 = go(async () => {
          await send(ch, 1);
          await send(ch, 2);
          await send(ch, 3);
          await send(ch, 4);
        });

        const p2 = go(async () => {
          expect(await recv(ch)).to.equal(1);
          expect(await recv(ch)).to.equal(2);
          expect(await recv(ch)).to.equal(3);
          expect(await recv(ch)).to.equal(4);
        });

        return join(p1, p2);
      });

      it("accepts fixed buffers", async () => {
        const ch = chan(fixed(3));
        expect(isBuffered(ch)).to.be.true;

        const p1 = go(async () => {
          await send(ch, 1);
          await send(ch, 2);
          await send(ch, 3);
          await send(ch, 4);
        });

        const p2 = go(async () => {
          expect(await recv(ch)).to.equal(1);
          expect(await recv(ch)).to.equal(2);
          expect(await recv(ch)).to.equal(3);
          expect(await recv(ch)).to.equal(4);
        });

        return join(p1, p2);
      });

      it("accepts dropping buffers", async () => {
        const ch = chan(dropping(3));
        expect(isBuffered(ch)).to.be.true;

        const p1 = go(async () => {
          await send(ch, 1);
          await send(ch, 2);
          await send(ch, 3);
          await send(ch, 4); // This one gets dropped
          close(ch);
        });

        const p2 = go(async () => {
          // The first send yields to this process because the buffer was empty
          // going into it; this sleep will send it back to the sending process
          // and let it finish filling the buffer
          await sleep();
          expect(await recv(ch)).to.equal(1);
          expect(await recv(ch)).to.equal(2);
          expect(await recv(ch)).to.equal(3);
          expect(await recv(ch)).to.equal(CLOSED);
        });

        return join(p1, p2);
      });

      it("accepts sliding buffers", async () => {
        const ch = chan(sliding(3));
        expect(isBuffered(ch)).to.be.true;

        const p1 = go(async () => {
          await send(ch, 1);
          await send(ch, 2);
          await send(ch, 3);
          await send(ch, 4); // This one makes the first value drop
          close(ch);
        });

        const p2 = go(async () => {
          // The first send yields to this process because the buffer was empty
          // going into it; this sleep will send it back to the sending process
          // and let it finish filling the buffer
          await sleep();
          expect(await recv(ch)).to.equal(2);
          expect(await recv(ch)).to.equal(3);
          expect(await recv(ch)).to.equal(4);
          expect(await recv(ch)).to.equal(CLOSED);
        });

        return join(p1, p2);
      });
    });
  });
});
