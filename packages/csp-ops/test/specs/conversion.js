/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { expect, fillChannel, expectChannel } from "test/helper";

import { reduce, toChannel, toArray } from "modules/conversion";

import { go, join, chan, send, recv, close, isClosed } from "@chanko/csp";

describe("Channel conversion functions", () => {
  describe("reduce", () => {
    it("created a channel containing the reduction of the input", async () => {
      const input = chan();
      const output = reduce((acc, value) => acc + value, input, 0);

      const p1 = fillChannel(input, 5, true);

      const p2 = go(async () => {
        expect(await recv(output)).to.equal(15);
        expect(isClosed(output)).to.be.true;
      });

      return join(p1, p2);
    });

    it("can deal with non-scalar values", async () => {
      const input = chan();
      const output = reduce(
        (acc, input) => {
          acc.push(input);
          return acc;
        },
        input,
        []
      );

      const p1 = fillChannel(input, 5, true);

      const p2 = go(async () => {
        expect(await recv(output)).to.deep.equal([1, 2, 3, 4, 5]);
        expect(isClosed(output)).to.be.true;
      });

      return join(p1, p2);
    });
  });

  describe("toChannel", () => {
    it("sends the values from an array into a channel", async () => {
      const output = chan();
      const array = [1, 2, 3, 4, 5];

      const p1 = go(async () => {
        await send(output, -1);
        await send(output, 0);
        toChannel(array, output);
      });

      const p2 = expectChannel(output, [-1, 0, 1, 2, 3, 4, 5]);

      return join(p1, p2);
    });

    it("creates a new channel if none is supplied", async () => {
      const output = toChannel([1, 2, 3, 4, 5]);

      return expectChannel(output, [1, 2, 3, 4, 5]);
    });
  });

  describe("toArray", () => {
    it("returns a channel with an array of the channel's values", async () => {
      const input = chan();
      const output = toArray(input, [1, 2, 3, 4, 5]);

      const p1 = go(async () => {
        await send(input, 6);
        await send(input, 7);
        close(input);
      });

      const p2 = go(async () => {
        expect(await recv(output)).to.deep.equal([1, 2, 3, 4, 5, 6, 7]);
        expect(isClosed(output)).to.be.true;
      });

      return join(p1, p2);
    });

    it("creates a new array if none is provided", async () => {
      const input = chan();
      const output = toArray(input);

      const p1 = go(async () => {
        await send(input, 6);
        await send(input, 7);
        close(input);
      });

      const p2 = go(async () => {
        expect(await recv(output)).to.deep.equal([6, 7]);
        expect(isClosed(output)).to.be.true;
      });

      return join(p1, p2);
    });
  });
});
