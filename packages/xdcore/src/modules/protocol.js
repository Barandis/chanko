/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

/**
 * Protocols for iteration and reduction.
 *
 * The names for these protocols came from a discussion thread
 * ({@link https://github.com/cognitect-labs/transducers-js/issues/20}) from a
 * time when transducers were very much in the forefront. It's the closest thing
 * there is to a standard, so it was adopted here.
 *
 * These are the same symbols as available in my transducer library. They are
 * publicly available from there.
 *
 * @module xdcore/protocol
 * @private
 */

import { isFunction, isGeneratorFunction } from "modules/utils";

/**
 * The mapping of protocol names to their respective property key names. This
 * mapping makes it easier to deal with these protocols as they can be looked
 * up by string name rather than by more difficult-to-work-with symbols.
 *
 * @typedef {object} ProtocolMap
 * @memberof module:xdcore
 * @property {Symbol} init The `transducer/init` protocol. This is used
 *     to mark functions that initialize a target collection before adding items
 *     to it.
 * @property {Symbol} step The `transducer/step` protocol. This is used
 *     to mark functions that are used in the transducer's step process, where
 *     objects are added to the target collection one at a time.
 * @property {Symbol} result The `transducer/result` protocol. This is
 *     used to mark functions that take the final result of the step process and
 *     return the final form to be output. This is optional; if the transducer
 *     does not want to transform the final result, it should just return the
 *     result of its chained transducer's `result` function.
 * @property {Symbol} reduced The `transducer/reduced` protocol. The
 *     presence of this key on an object indicates that its transformation has
 *     been completed. It is used internally to mark collections whose
 *     transformations conclude before every object is iterated over (as in
 *     `{@link xduce.take}` transducers.) It is of little use beyond transducer
 *     authoring.
 * @property {Symbol} value The `transducer/value` protocol. This is
 *     used internally to mark properties that contain the value of a reduced
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
    value: Symbol.for("transducer/init")
  },
  step: {
    value: Symbol.for("transducer/step")
  },
  result: {
    value: Symbol.for("transducer/result")
  },
  reduced: {
    value: Symbol.for("transducer/reduced")
  },
  value: {
    value: Symbol.for("transducer/value")
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
 * * `reduced`
 * * `value`
 *
 * Any of these will result in `true` if the object in question has a property
 * that matches the one necessary to implement the protocol. Further, any of
 * the properties other than `reduced` and `step` must be functions.
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
    case "reduced":
    case "value":
      return Object.getOwnPropertySymbols(obj).includes(protocols[protocol]);
    default:
      return isFunction(obj[protocols[protocol]]);
  }
}

export { protocols, isImplemented };
