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
//
// That being said, all of the examples in the docs directory end up using
// MessageChannel since setImmediate isn't available in browsers, so there is
// reason to be confident in the implementation. Nevertheless I will prefer to
// have unit tests for them.

import { expect } from "test/helper";
import sinon from "sinon";

import {
  dispatcher,
  SET_IMMEDIATE,
  MESSAGE_CHANNEL,
  SET_TIMEOUT
} from "modules/dispatcher";

import { configDispatcher } from "index";

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

  context("dispatch method with configDispatcher", () => {
    it("sets the right method with SET_IMMEDIATE", () => {
      const expected =
        typeof setImmediate !== "undefined"
          ? SET_IMMEDIATE
          : typeof MessageChannel !== "undefined"
          ? MESSAGE_CHANNEL
          : SET_TIMEOUT;
      configDispatcher({ dispatchMethod: SET_IMMEDIATE });
      expect(dispatcher.dispatchMethod).to.equal(expected);
    });

    it("sets the right method with MESSAGE_CHANNEL", () => {
      const expected =
        typeof MessageChannel !== "undefined" ? MESSAGE_CHANNEL : SET_TIMEOUT;
      configDispatcher({ dispatchMethod: MESSAGE_CHANNEL });
      expect(dispatcher.dispatchMethod).to.equal(expected);
    });

    it("sets the right method with SET_TIMEOUT", () => {
      configDispatcher({ dispatchMethod: SET_TIMEOUT });
      expect(dispatcher.dispatchMethod).to.equal(SET_TIMEOUT);
    });

    it("throws if some other value is passed as a dispatch method", () => {
      expect(() =>
        configDispatcher({ dispatchMethod: Symbol("SET_IMMEDIATE") })
      ).to.throw();
    });

    it("changes nothing if no value is passed to configDispatcher", () => {
      configDispatcher();
      expect(dispatcher.batchSize).to.equal(1024);
      expect(dispatcher.dispatchMethod).to.equal(SET_IMMEDIATE);
    });
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

    it("queues a task to be executed with setTimeout", async () => {
      const spy = sinon.spy();
      dispatcher.dispatchMethod = SET_TIMEOUT;

      dispatcher.dispatch(spy);
      setTimeout(() => {
        expect(spy).to.be.calledOnce;
      }, 0);
    });

    it("runs multiple tasks in batches", async () => {
      dispatcher.batchSize = 4;
      const spies = [];
      for (let i = 0; i < 8; i++) {
        const spy = sinon.spy();
        spies.push(spy);
        dispatcher.dispatch(spy);
      }

      // Two calls are required because sometimes not all spies get called in
      // a single batch, and a second context switch is needed.
      setTimeout(() => {}, 0);
      setTimeout(() => {
        for (const spy of spies) {
          expect(spy).to.be.calledOnce;
        }
      }, 0);
    });

    it("runs tasks in batches with configDispatcher", async () => {
      configDispatcher({ batchSize: 4 });
      const spies = [];
      for (let i = 0; i < 8; i++) {
        const spy = sinon.spy();
        spies.push(spy);
        dispatcher.dispatch(spy);
      }

      // Two calls are required because sometimes not all spies get called in
      // a single batch, and a second context switch is needed.
      setTimeout(() => {}, 0);
      setTimeout(() => {
        for (const spy of spies) {
          expect(spy).to.be.calledOnce;
        }
      }, 0);
    });
  });
});
