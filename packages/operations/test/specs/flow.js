/* eslint-disable max-lines */
/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import {
  expect,
  fillChannel,
  expectChannel,
  fillChannelWith
} from "test/helper";

import {
  pipe,
  partition,
  merge,
  split,
  tap,
  untap,
  untapAll,
  map
} from "modules/flow";

import {
  go,
  join,
  chan,
  send,
  recv,
  sleep,
  close,
  CLOSED,
  fixed,
  sliding,
  dropping,
  isBuffered,
  isClosed
} from "@chanko/channels";

const even = x => x % 2 === 0;
const sum3 = (a, b, c) => a + b + c;

describe("Flow control operations", () => {
  describe("pipe", () => {
    it("feeds all of the values from one channel to another", async () => {
      const input = chan();
      const output = pipe(input, chan());

      const p1 = go(async () => {
        expect(await recv(output)).to.equal(1729);
        expect(await recv(output)).to.equal(2317);
      });

      const p2 = go(async () => {
        await send(input, 1729);
        await send(input, 2317);
      });

      return join(p1, p2);
    });

    it("closes the output channel when the input channel closes", async () => {
      const input = chan();
      const output = chan();
      pipe(input, output);

      close(input);

      return go(async () => {
        expect(await recv(output)).to.equal(CLOSED);
      });
    });

    it("keeps the output channel open with keepOpen", async () => {
      const input = chan();
      const output = chan();
      pipe(input, output, true);

      const p1 = go(async () => {
        expect(await recv(output)).to.equal(1729);
      });

      const p2 = go(async () => {
        close(input);
        await sleep();
        await send(output, 1729);
      });

      return join(p1, p2);
    });

    it("breaks the pipe when the output channel closes", async () => {
      const input = chan();
      const output = chan();
      const start = chan();
      const finished = chan();

      pipe(input, output);

      const p1 = go(async () => {
        await send(input, 1729);
        await send(start);
        await send(input, 2317);
      });

      const p2 = go(async () => {
        await recv(start);
        close(output);
        await send(finished);
      });

      const p3 = go(async () => {
        await recv(finished);
        expect(await recv(input)).to.equal(2317);
      });

      return join(p1, p2, p3);
    });
  });

  describe("partition", () => {
    it("creates two channels, splitting input by predicate", async () => {
      const input = chan();
      const [evens, odds] = partition(even, input);

      const p1 = fillChannel(input, 10);
      const p2 = expectChannel(evens, [2, 4, 6, 8, 10]);
      const p3 = expectChannel(odds, [1, 3, 5, 7, 9]);

      return join(p1, p2, p3);
    });

    it("accepts buffers to back the output channels", async () => {
      const input = chan();
      const ctrl = chan();
      const [evens, odds] = partition(even, input, sliding(3), dropping(3));

      const p1 = go(async () => {
        for (let i = 1; i <= 10; i++) {
          await send(input, i);
        }
        await send(ctrl);
        await send(ctrl);
      });

      const p2 = expectChannel(evens, [6, 8, 10], ctrl);
      const p3 = expectChannel(odds, [1, 3, 5], ctrl);

      return join(p1, p2, p3);
    });

    it("closes the outputs when the input is closed", async () => {
      const input = chan();
      const [evens, odds] = partition(even, input);

      const p1 = go(async () => {
        expect(await recv(evens)).to.equal(CLOSED);
      });

      const p2 = go(async () => {
        expect(await recv(odds)).to.equal(CLOSED);
      });

      const p3 = go(async () => {
        close(input);
      });

      return join(p1, p2, p3);
    });
  });

  describe("merge", () => {
    it("combines several inputs into a single output channel", async () => {
      const inputs = [chan(), chan(), chan()];
      const output = merge(inputs);
      const values = Array(15).fill(false);

      const p1 = fillChannelWith(inputs[0], [0, 1, 2, 3, 4]);
      const p2 = fillChannelWith(inputs[1], [5, 6, 7, 8, 9]);
      const p3 = fillChannelWith(inputs[2], [10, 11, 12, 13, 14]);

      const p4 = go(async () => {
        await sleep();
        for (let i = 0; i < 15; i++) {
          await sleep();
          await sleep();
          const index = await recv(output);
          values[index] = true;
        }
        expect(values.every(x => x)).to.be.true;
      });

      return join(p1, p2, p3, p4);
    });

    it("accepts a buffer to back the output channel", async () => {
      const inputs = [chan(), chan(), chan()];
      const output = merge(inputs, sliding(3));

      const p1 = fillChannelWith(inputs[0], [0, 1, 2, 3, 4]);
      const p2 = fillChannelWith(inputs[1], [5, 6, 7, 8, 9]);
      const p3 = fillChannelWith(inputs[2], [10, 11, 12, 13, 14]);

      const p4 = go(async () => {
        await sleep();
        for (let i = 0; i < 3; i++) {
          await sleep();
          expect([2, 3, 4, 7, 8, 9, 12, 13, 14]).to.include(await recv(output));
        }
      });

      return join(p1, p2, p3, p4);
    });

    it("closes the output when all inputs have been closed", async () => {
      const inputs = [chan(), chan(), chan()];
      const output = merge(inputs);

      inputs.forEach(input => close(input));

      return go(async () => {
        expect(await recv(output)).to.equal(CLOSED);
      });
    });
  });

  describe("split", () => {
    it("splits the input into a number of outputs", async () => {
      const input = chan();
      const outputs = split(input, 3);

      expect(outputs.length).to.equal(3);

      const p1 = fillChannel(input, 5);

      const p2 = expectChannel(outputs[0], [1, 2, 3, 4, 5]);
      const p3 = expectChannel(outputs[1], [1, 2, 3, 4, 5]);
      const p4 = expectChannel(outputs[2], [1, 2, 3, 4, 5]);

      return join(p1, p2, p3, p4);
    });

    it("defaults to two unbuffered outputs", () => {
      const input = chan();
      const outputs = split(input);

      expect(outputs.length).to.equal(2);
      expect(isBuffered(outputs[0])).to.be.false;
      expect(isBuffered(outputs[1])).to.be.false;
    });

    it("can accept a series of output buffers", async () => {
      const input = chan();
      const outputs = split(input, fixed(5), dropping(3), sliding(3));
      const ctrl = chan();

      const p1 = go(async () => {
        for (let i = 1; i <= 5; i++) {
          await send(input, i);
        }
        send(ctrl);
        send(ctrl);
        send(ctrl);
      });

      const p2 = expectChannel(outputs[0], [1, 2, 3, 4, 5], ctrl);
      const p3 = expectChannel(outputs[1], [1, 2, 3], ctrl);
      const p4 = expectChannel(outputs[2], [3, 4, 5], ctrl);

      return join(p1, p2, p3, p4);
    });

    it("closes all outputs when the input closes", async () => {
      const input = chan();
      const outputs = split(input, 3);

      return go(async () => {
        close(input);
        await sleep();
        await sleep();
        outputs.forEach(output => expect(isClosed(output)).to.be.true);
      });
    });
  });

  context("multitap", () => {
    describe("tap", () => {
      it("taps the input and directs values to the tapper", async () => {
        const input = chan();
        const output = tap(input);

        const p1 = fillChannel(input, 5);
        const p2 = expectChannel(output, [1, 2, 3, 4, 5]);

        return join(p1, p2);
      });

      it("can tap the input multiple times", async () => {
        const input = chan();
        const outputs = [tap(input), tap(input), tap(input)];

        const p1 = fillChannel(input, 5);
        const p2 = expectChannel(outputs[0], [1, 2, 3, 4, 5]);
        const p3 = expectChannel(outputs[1], [1, 2, 3, 4, 5]);
        const p4 = expectChannel(outputs[2], [1, 2, 3, 4, 5]);

        return join(p1, p2, p3, p4);
      });

      it("will not tap with the same channel more than once", async () => {
        const input = chan();
        const output = tap(input);
        tap(input, output);

        const p1 = fillChannel(input, 5);
        const p2 = expectChannel(output, [1, 2, 3, 4, 5]);

        return join(p1, p2);
      });

      it("will not close tapping channels when tapped is closed", () => {
        const input = chan();
        const outputs = [tap(input), tap(input)];

        close(input);
        expect(isClosed(outputs[0])).to.be.false;
        expect(isClosed(outputs[1])).to.be.false;
      });
    });

    describe("untap", () => {
      it("will remove the tap of a tapping channel", async () => {
        const input = chan();
        const outputs = [tap(input), tap(input), tap(input)];

        untap(input, outputs[1]);

        const p1 = fillChannel(input, 5);
        const p2 = expectChannel(outputs[0], [1, 2, 3, 4, 5]);
        const p3 = expectChannel(outputs[2], [1, 2, 3, 4, 5]);

        const p4 = go(async () => {
          for (let i = 1; i <= 5; i++) {
            expect(await recv(outputs[1])).to.equal(-i);
          }
        });

        const p5 = go(async () => {
          await join(p2, p3);
          for (let i = 1; i <= 5; i++) {
            await send(outputs[1], -i);
          }
        });

        return join(p1, p2, p3, p4, p5);
      });

      it("will not untap a channel that isn't tapping", async () => {
        const input = chan();
        const output1 = tap(input);
        const output2 = chan();

        untap(input, output2);

        const p1 = fillChannel(input, 5);
        const p2 = expectChannel(output1, [1, 2, 3, 4, 5]);

        return join(p1, p2);
      });

      it("restores the tapped channel when last tap is removed", async () => {
        const input = chan();
        const output = tap(input);

        untap(input, output);

        const p1 = fillChannel(input, 5);
        const p2 = fillChannelWith(output, [-1, -2, -3, -4, -5]);

        const p3 = expectChannel(input, [1, 2, 3, 4, 5]);
        const p4 = expectChannel(output, [-1, -2, -3, -4, -5]);

        return join(p1, p2, p3, p4);
      });
    });

    describe("untapAll", () => {
      it("removes all taps from the tapped channel", async () => {
        const input = chan();
        tap(input);
        tap(input);
        tap(input);

        untapAll(input);

        const p1 = fillChannel(input, 5);
        const p2 = expectChannel(input, [1, 2, 3, 4, 5]);

        return join(p1, p2);
      });
    });
  });

  describe("map", () => {
    it("combines channels through a mapping function", () => {
      const inputs = [chan(), chan(), chan()];
      const output = map(sum3, inputs);

      const p1 = fillChannel(inputs[0], 5);
      const p2 = fillChannel(inputs[1], 5);
      const p3 = fillChannel(inputs[2], 5);

      const p4 = expectChannel(output, [3, 6, 9, 12, 15]);

      return join(p1, p2, p3, p4);
    });

    it("accepts a buffer to back the output channel", async () => {
      const inputs = [chan(5), chan(5), chan(5)];
      const output = map(sum3, inputs, sliding(3));

      const p1 = fillChannel(inputs[0], 5);
      const p2 = fillChannel(inputs[1], 5);
      const p3 = fillChannel(inputs[2], 5);

      const p4 = go(async () => {
        await sleep();
        await sleep();
        for (let i = 3; i <= 5; i++) {
          expect(await recv(output)).to.equal(i * 3);
        }
      });

      return join(p1, p2, p3, p4);
    });
  });

  it("closes the output when the first input closes", async () => {
    const inputs = [chan(), chan(), chan()];
    const output = map(sum3, inputs);

    const p1 = go(async () => {
      for (let i = 1; i <= 5; i++) {
        await send(inputs[0], i);
      }
    });

    const p2 = go(async () => {
      for (let i = 1; i <= 3; i++) {
        await send(inputs[1], i);
      }
      close(inputs[1]);
    });

    const p3 = go(async () => {
      for (let i = 1; i <= 5; i++) {
        await send(inputs[2], i);
      }
    });

    const p4 = expectChannel(output, [3, 6, 9, CLOSED, CLOSED]);

    return join(p1, p2, p3, p4);
  });
});
