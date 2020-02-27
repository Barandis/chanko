/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { expect } from "test/helper";
import sinon from "sinon";

import {
  config,
  SET_IMMEDIATE,
  MESSAGE_CHANNEL,
  SET_TIMEOUT,
  dispatch
} from "modules/dispatcher";

describe("dispatcher", () => {
  afterEach(() => config({ batchSize: 1024, dispatchMethod: SET_IMMEDIATE }));

  context("config", () => {
    it("sets the right method with SET_IMMEDIATE", () => {
      config({ dispatchMethod: SET_IMMEDIATE });
      expect(config().dispatchMethod).to.equal(SET_IMMEDIATE);
    });

    it("sets the right method with MESSAGE_CHANNEL", () => {
      config({ dispatchMethod: MESSAGE_CHANNEL });
      expect(config().dispatchMethod).to.equal(MESSAGE_CHANNEL);
    });

    it("sets the right method with SET_TIMEOUT", () => {
      config({ dispatchMethod: SET_TIMEOUT });
      expect(config().dispatchMethod).to.equal(SET_TIMEOUT);
    });

    it("sets the correct batch size", () => {
      config({ batchSize: 512 });
      expect(config().batchSize).to.equal(512);
    });
  });

  context("dispatch", () => {
    // Using fake timers here for consistency's sake. Using small amounts of
    // real time not only takes a few ms longer, it also creates the chance that
    // tests will fail from the timing being off due to the event loop being
    // delayed because the CPU is busy with something else. Explicitly ticking
    // 1ms at a time prevents that, whatever the CPU is doing.

    let sandbox;
    let clock;

    beforeEach(() => {
      sandbox = sinon.createSandbox();
      clock = sandbox.useFakeTimers();
    });

    afterEach(() => sandbox.restore());

    it("queues a task to be executed", () => {
      const spy = sandbox.spy();

      dispatch(spy);
      setTimeout(() => {
        expect(spy).to.be.calledOnce;
      }, 5);

      for (let i = 0; i < 5; i++) {
        clock.tick();
      }
    });

    it("queues a task to be exected with MessageChannel", () => {
      config({ dispatchMethod: MESSAGE_CHANNEL });
      const spy = sandbox.spy();

      dispatch(spy);
      setTimeout(() => {
        expect(spy).to.be.calledOnce;
      }, 5);

      for (let i = 0; i < 5; i++) {
        clock.tick();
      }
    });

    it("queues a task to be executed with setTimeout", () => {
      config({ dispatchMethod: SET_TIMEOUT });
      const spy = sandbox.spy();

      dispatch(spy);
      setTimeout(() => {
        expect(spy).to.be.calledOnce;
      }, 5);

      for (let i = 0; i < 5; i++) {
        clock.tick();
      }
    });

    it("runs multiple tasks in batches", () => {
      config({ batchSize: 2 });
      const spies = [];
      for (let i = 0; i < 5; i++) {
        const spy = sandbox.spy();
        spies.push(spy);
        dispatch(spy);
      }

      setTimeout(() => {
        for (const spy of spies) {
          expect(spy).to.be.calledOnce;
        }
      }, 10);

      for (let i = 0; i < 10; i++) {
        clock.tick();
      }
    });
  });
});
