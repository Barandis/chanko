/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

// Can't do much to test the MessageChannel implementation; setting a global
// MessageChannel object (from worker_threads, global so that dispatcher.js can
// actually see it, not just this test file) is causing test coverage to hang.
// I'll eventually find a solution.

import { expect } from "test/helper";
import sinon from "sinon";

import {
  dispatcher,
  SET_IMMEDIATE,
  MESSAGE_CHANNEL,
  SET_TIMEOUT
} from "modules/dispatcher";

describe("dispatcher", () => {
  let dispatchMethod;
  let batchSize;

  before(() => {
    dispatchMethod = dispatcher.dispatchMethod;
    batchSize = dispatcher.batchSize;
  });

  afterEach(() => {
    dispatcher.dispatchMethod = dispatchMethod;
    dispatcher.batchSize = batchSize;
  });

  context("dispatch method", () => {
    it("sets the right method with SET_IMMEDIATE", () => {
      const expected =
        typeof setImmediate !== "undefined"
          ? SET_IMMEDIATE
          : typeof MessageChannel !== "undefined"
          ? MESSAGE_CHANNEL
          : SET_TIMEOUT;
      dispatcher.dispatchMethod = SET_IMMEDIATE;
      expect(dispatcher.dispatchMethod).to.equal(expected);
    });

    it("sets the right method with MESSAGE_CHANNEL", () => {
      const expected =
        typeof MessageChannel !== "undefined" ? MESSAGE_CHANNEL : SET_TIMEOUT;
      dispatcher.dispatchMethod = MESSAGE_CHANNEL;
      expect(dispatcher.dispatchMethod).to.equal(expected);
    });

    it("sets the right method with SET_TIMEOUT", () => {
      dispatcher.dispatchMethod = SET_TIMEOUT;
      expect(dispatcher.dispatchMethod).to.equal(SET_TIMEOUT);
    });

    /* eslint-disable no-global-assign */
    it("sets the right method with no setImmediate available", () => {
      let oldSi;
      if (typeof setImmediate !== "undefined") {
        oldSi = setImmediate;
        setImmediate = undefined;
      }

      const expected =
        typeof MessageChannel !== "undefined" ? MESSAGE_CHANNEL : SET_TIMEOUT;

      dispatcher.dispatchMethod = SET_IMMEDIATE;
      expect(dispatcher.dispatchMethod).to.equal(expected);

      if (typeof oldSi !== "undefined") {
        setImmediate = oldSi;
      }
    });

    it("sets the right method with setImmediate/MessageChannel off", () => {
      let oldSi;
      let oldMc;

      if (typeof setImmediate !== "undefined") {
        oldSi = setImmediate;
        setImmediate = undefined;
      }
      if (typeof MessageChannel !== "undefined") {
        oldMc = MessageChannel;
        MessageChannel = undefined;
      }

      dispatcher.dispatchMethod = SET_IMMEDIATE;
      expect(dispatcher.dispatchMethod).to.equal(SET_TIMEOUT);

      dispatcher.dispatchMethod = MESSAGE_CHANNEL;
      expect(dispatcher.dispatchMethod).to.equal(SET_TIMEOUT);

      if (typeof oldSi !== "undefined") {
        setImmediate = oldSi;
      }
      if (typeof oldMc !== "undefined") {
        MessageChannel = oldMc;
      }
    });
    /* eslint-enable no-global-assign */
  });

  context("dispatch", () => {
    it("queues a task to be executed", () => {
      const spy = sinon.spy();

      dispatcher.dispatch(spy);
      setTimeout(() => {
        expect(spy).to.be.calledOnce;
      }, 0);
    });

    it("queues a task to be executed with MessageChannel", () => {
      const spy = sinon.spy();
      dispatcher.dispatchMethod = MESSAGE_CHANNEL;

      dispatcher.dispatch(spy);
      setTimeout(() => {
        expect(spy).to.be.calledOnce;
      }, 0);
    });

    it("queues a task to be executed with setTimeout", () => {
      const spy = sinon.spy();
      dispatcher.dispatchMethod = SET_TIMEOUT;

      dispatcher.dispatch(spy);
      setTimeout(() => {
        expect(spy).to.be.calledOnce;
      }, 0);
    });

    it("runs multiple tasks in batches", () => {
      dispatcher.batchSize = 4;
      const spies = [];
      for (let i = 0; i < 8; i++) {
        const spy = sinon.spy();
        spies.push(spy);
        dispatcher.dispatch(spy);
      }

      setTimeout(() => {
        for (const spy of spies) {
          expect(spy).to.be.calledOnce;
        }
      });
    });
  });
});
