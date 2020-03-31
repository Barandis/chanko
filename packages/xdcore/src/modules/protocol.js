/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

/**
 * Protocols for iteration and reduction.
 *
 * @module xdcore/protocol
 * @private
 */

import { isFunction, isGeneratorFunction } from "modules/utils";

/**
 * The mapping of protocol names to their respective property key names. This
 * mapping makes it easier to deal with these protocols as they can be looked up
 * by string name rather than by more difficult-to-work-with symbols.
 *
 * @typedef {object} ProtocolMap
 * @memberof module:xdcore
 * @property {Symbol} init The `reducer/init` protocol. This is used to mark
 *     functions that initialize a target collection before adding items to it.
 * @property {Symbol} step The `reducer/step` protocol. This is used to mark
 *     functions that are used in the reducer's step process, where objects are
 *     added to the target collection one at a time.
 * @property {Symbol} result The `reducer/result` protocol. This is used to mark
 *     functions that take the final result of the step process and return the
 *     final form to be output. This is optional; if the reducer does not want
 *     to transform the final result, it should just return the result of its
 *     chained reducer's `result` function.
 * @property {Symbol} reduced The `reducer/completed` protocol. The presence of
 *     this key on an object indicates that its transformation has been
 *     completed. It is used internally to mark collections whose
 *     transformations conclude before every object is iterated over (as in
 *     `{@link module:xduce.take}` transducers.) It is of little use beyond
 *     transducer authoring.
 * @property {Symbol} value The `reducer/value` protocol. This is used
 *     internally to mark properties that contain the value of a completed
 *     transformation. It is of little use beyond transducer authoring.
 */

/**
 * The mapping of protocol names to their respective property key names.
 *
 * @type {module:xdcore.ProtocolMap}
 * @memberof module:xdcore
 */
const protocols = Object.create(null, {
  init: {
    value: Symbol.for("reducer/init")
  },
  step: {
    value: Symbol.for("reducer/step")
  },
  result: {
    value: Symbol.for("reducer/result")
  },
  completed: {
    value: Symbol.for("reducer/completed")
  },
  value: {
    value: Symbol.for("reducer/value")
  }
});

/**
 * Determines whether a particular protocol is implemented by a value. The
 * possible values for `protocol` are the following, representing the two
 * built-in iterator protocols and the five custom transducer protocols:
 *
 * * `iterator`
 * * `asyncItrerator`
 * * `init`
 * * `step`
 * * `result`
 * * `completed`
 * * `value`
 *
 * Any of these will result in `true` if the object in question has a property
 * that matches the one necessary to implement the protocol. Further, any of
 * the properties other than `completed` and `step` must be functions.
 *
 * @memberof module:xdcore
 * @param {object} obj The object to check for protocol implementation.
 * @param {string} protocol The name of the protocol to check for.
 * @returns {boolean} Either `true` if the object supports the named protocol or
 *     `false` if it does not.
 */
function isImplemented(obj, protocol) {
  if (obj == null) {
    return false;
  }

  switch (protocol) {
    case "iterator":
      return (
        isFunction(obj[Symbol.iterator]) ||
        isGeneratorFunction(obj[Symbol.iterator])
      );
    case "asyncIterator":
      return isGeneratorFunction(obj[Symbol.asyncIterator]);
    case "completed":
    case "value":
      return Object.getOwnPropertySymbols(obj).includes(protocols[protocol]);
    default:
      return isFunction(obj[protocols[protocol]]);
  }
}

export { protocols, isImplemented };
