/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { EMPTY } from "modules/queue";
import { fixed, dropping, sliding } from "modules/buffer";

const buffers = { fixed, dropping, sliding };

export { EMPTY, buffers };
