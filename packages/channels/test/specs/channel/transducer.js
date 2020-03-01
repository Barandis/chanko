/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { expect } from "test/helper";

import { transChan, send, recv, CLOSED, chan, close } from "modules/channel";
import { go, join } from "modules/process";
import { protocols as p } from "modules/protocol";

import { compose, transducers as t } from "xduce";

describe("Transducer channels", () => {
  const even = x => x % 2 === 0;

  it("cannot be created with an unbuffered channel", () => {
    expect(() => chan(0, { transducer: t.filter(even) })).to.throw();
  });

  it("modifies values on the channel before they're received", async () => {
    const ch = transChan(t.map(x => x + 1));

    const p1 = go(async () => {
      await send(ch, 1);
    });

    const p2 = go(async () => {
      expect(await recv(ch)).to.equal(2);
    });

    return join(p1, p2);
  });

  it("accepts transducers removing values", async () => {
    const ch = transChan(t.filter(even));

    const p1 = go(async () => {
      await send(ch, 1);
      await send(ch, 2);
      close(ch);
    });

    const p2 = go(async () => {
      expect(await recv(ch)).to.equal(2);
      expect(await recv(ch)).to.equal(CLOSED);
    });

    return join(p1, p2);
  });

  it("closes the channel if the transducer reduces early", async () => {
    const ch = chan(3, { transducer: t.take(2) });

    const p1 = go(async () => {
      await send(ch, 1);
      await send(ch, 2);
      await send(ch, 3);
    });

    const p2 = go(async () => {
      expect(await recv(ch)).to.equal(1);
      expect(await recv(ch)).to.equal(2);
      expect(await recv(ch)).to.equal(CLOSED);
    });

    return join(p1, p2);
  });

  it("handles composed transducers", async () => {
    const xform = compose(
      t.map(x => x * 3),
      t.filter(even),
      t.take(3)
    );
    const ch = chan(10, { transducer: xform });

    const p1 = go(async () => {
      for (const i of [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]) {
        await send(ch, i);
      }
    });

    const p2 = go(async () => {
      expect(await recv(ch)).to.equal(0);
      expect(await recv(ch)).to.equal(6);
      expect(await recv(ch)).to.equal(24);
      expect(await recv(ch)).to.equal(CLOSED);
    });

    return join(p1, p2);
  });

  it("closes the channel even if another receiver is active", async () => {
    const ch = chan(10, { transducer: compose(t.flatten(), t.take(3)) });
    const out = chan();
    const ctrl = chan();

    const xor = (a, b) => (a ? !b : b);

    const p1 = go(async () => {
      for (const i of [0, 1, 2, 3, 4]) {
        await send(ch, [i, i]);
      }
      await send(ctrl);
      await send(ctrl);
    });

    const p2 = go(async () => {
      await recv(ctrl);
      await recv(ch);
      const value = await recv(ch);
      await send(out, value === CLOSED ? "closed" : value);
    });

    const p3 = go(async () => {
      await recv(ctrl);
      await recv(ch);
      const value = await recv(ch);
      await send(out, value === CLOSED ? "closed" : value);
    });

    const p4 = go(async () => {
      const value1 = await recv(out);
      const value2 = await recv(out);
      expect(xor(value1 === CLOSED, value2 === "closed")).to.be.true;
    });

    return join(p1, p2, p3, p4);
  });
});

describe("Transducer error handlers", () => {
  const stepErrorTransducer = xform => ({
    [p.step]() {
      throw Error("step error");
    },
    [p.result](value) {
      return xform[p.result](value);
    }
  });

  const resultErrorTransducer = xform => ({
    [p.step](acc, input) {
      return xform[p.step](acc, input);
    },
    [p.result]() {
      throw Error("result error");
    }
  });

  const oneTimeStepErrorTransducer = xform => ({
    count: 0,
    [p.step](acc, input) {
      if (this.count++ === 0) {
        throw Error("step error");
      }
      return xform[p.step](acc, input);
    },
    [p.result](value) {
      return xform[p.result](value);
    }
  });

  const mustBe1729Transducer = xform => ({
    [p.step](acc, input) {
      if (input !== 1729) {
        throw Error("not 1729!");
      }
      return xform[p.step](acc, input);
    },
    [p.result](value) {
      return xform[p.result](value);
    }
  });

  it("can handle a step function error", async () => {
    const exh = ex => {
      expect(ex.message).to.equal("step error");
    };

    const ch = transChan(stepErrorTransducer, exh);

    go(async () => {
      await send(ch, 1);
    });

    return go(async () => {
      await recv(ch);
    });
  });

  it("can handle a result function error", async () => {
    const exh = ex => {
      expect(ex.message).to.equal("result error");
    };

    const ch = transChan(resultErrorTransducer, exh);

    const p1 = go(async () => {
      await send(ch, 1);
    });

    const p2 = go(async () => {
      await recv(ch);
      // The result function doesn't run until the channel is closed
      close(ch);
    });

    return join(p1, p2);
  });

  it("defaults to a handler that makes nothing available", async () => {
    const ch = transChan(oneTimeStepErrorTransducer);

    const p1 = go(async () => {
      await send(ch, 1);
      await send(ch, 1729);
    });

    const p2 = go(async () => {
      // The transducer throws an error when called for the first time.
      // The default handler means nothing is sent to the channel for that
      // call. The second call succeeds, and that value gets sent.
      expect(await recv(ch)).to.equal(1729);
    });

    return join(p1, p2);
  });

  it("replaces the original sent value with its own", async () => {
    const exh = () => 2317;
    const ch = transChan(mustBe1729Transducer, exh);

    const p1 = go(async () => {
      await send(ch);
      await send(ch, 1729);
      await send(ch, 42);
      await send(ch, 27);
    });

    const p2 = go(async () => {
      // Only the 1729 succeeds, the error handler sends 2317 for the others
      expect(await recv(ch)).to.equal(2317);
      expect(await recv(ch)).to.equal(1729);
      expect(await recv(ch)).to.equal(2317);
      expect(await recv(ch)).to.equal(2317);
    });

    return join(p1, p2);
  });
});
