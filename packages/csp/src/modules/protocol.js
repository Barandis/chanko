/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

/**
 * The mapping of protocol names to their respective property key names. The
 * values of this map will depend on whether symbols are available.
 *
 * @typedef {object} ProtocolMap
 * @memberof module:core
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
 * @type {module:csp.ProtocolMap}
 * @memberof module:csp
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

export { protocols };
