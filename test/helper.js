/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import chai, { expect } from "chai";
import sinonChai from "sinon-chai";

chai.use(sinonChai);

function join(...promises) {
  return Promise.all(promises);
}

export { expect, join };
