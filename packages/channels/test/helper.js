/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import chai, { expect } from "chai";
import sinonChai from "sinon-chai";

chai.use(sinonChai);

// Big explanation here.
//
// To do async tests in Mocha, the test in question has to either return a
// promise or call an `it`-provided `done` function. That way Mocha knows that
// the test is async and to wait to report on it until it's actually finished
// (promise has resolved or `done` has been called).
//
// The `done` function is the old pre-promise way of doing it and has the
// disadvantage of requiring that you be able to know where to call it (mostly
// straightforward, sometimes not so much, and if you call it too early your
// test can "pass" even though it actually fails behind the scenes).
//
// The thing about returning promises is that this library has many, many tests
// that have more than one async function. After all, the point of the library
// is to be able to communicate between async functions, and that needs to be
// tested.
//
// I had, for a long time, just not thought too hard about it and returned the
// promise from whichever async function had the `expect` in it. If there was
// more than one async function that did, then I'd use `done`.
//
// What I realized is that while this works fine for assertions (nothing other
// than `expect` throws assertion errors, so returning the promise that contains
// the `expect`s makes sense), if any of the other async functions threw errors
// for any reason, they were getting swallowed up by the testing framework. The
// text of the error would be displayed, but in the middle of the test results
// where you might not see it, and the test itself would pass.
//
// The actual solution is to return the promises from **all** of the async
// functions in a test. Then if there was an error in any of them, that promise
// would be rejected and the overall test would fail properly. So rather than
// returning the result of one async function, it's correct to return a
// `Promise.all()` containing the result of every async function.
//
// This small utility function just makes that nicer, as you don't have to put
// the square brackets around the group of promises. Just assign the return
// value of your async function invocation (or your `go`, since it returns that
// same promise) to a variable and then shove all of the variables into a
// `return join(...)` at the end of the test and suddenly everything works.
//
// ```
// it("returns a value that was sent to a channel", async () => {
//   const ch = chan();
//
//   const p1 = go(async () => {
//     await send(ch, 1729);
//   });
//
//   const p2 = go(async () => {
//     expect(await recv(ch)).to.equal(1729);
//   });
//
//   return join(p1, p2);
// });
// ```
function join(...promises) {
  return Promise.all(promises);
}

export { expect, join };
