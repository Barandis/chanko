(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["xdcore"] = factory();
	else
		root["xdcore"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: protocols, isImplemented, iterator, isIterable, complete, uncomplete, isCompleted, ensureCompleted, ensureUncompleted, reduce, toFunction, toReducer, toTransducer, isArray, isFunction, isGeneratorFunction, isNumber, isObject, isString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var modules_protocol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! modules/protocol */ "./src/modules/protocol.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "protocols", function() { return modules_protocol__WEBPACK_IMPORTED_MODULE_0__["protocols"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isImplemented", function() { return modules_protocol__WEBPACK_IMPORTED_MODULE_0__["isImplemented"]; });

/* harmony import */ var modules_iteration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! modules/iteration */ "./src/modules/iteration.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "iterator", function() { return modules_iteration__WEBPACK_IMPORTED_MODULE_1__["iterator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isIterable", function() { return modules_iteration__WEBPACK_IMPORTED_MODULE_1__["isIterable"]; });

/* harmony import */ var modules_reduction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! modules/reduction */ "./src/modules/reduction.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "complete", function() { return modules_reduction__WEBPACK_IMPORTED_MODULE_2__["complete"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uncomplete", function() { return modules_reduction__WEBPACK_IMPORTED_MODULE_2__["uncomplete"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isCompleted", function() { return modules_reduction__WEBPACK_IMPORTED_MODULE_2__["isCompleted"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ensureCompleted", function() { return modules_reduction__WEBPACK_IMPORTED_MODULE_2__["ensureCompleted"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ensureUncompleted", function() { return modules_reduction__WEBPACK_IMPORTED_MODULE_2__["ensureUncompleted"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reduce", function() { return modules_reduction__WEBPACK_IMPORTED_MODULE_2__["reduce"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toFunction", function() { return modules_reduction__WEBPACK_IMPORTED_MODULE_2__["toFunction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toReducer", function() { return modules_reduction__WEBPACK_IMPORTED_MODULE_2__["toReducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toTransducer", function() { return modules_reduction__WEBPACK_IMPORTED_MODULE_2__["toTransducer"]; });

/* harmony import */ var modules_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! modules/utils */ "./src/modules/utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return modules_utils__WEBPACK_IMPORTED_MODULE_3__["isArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return modules_utils__WEBPACK_IMPORTED_MODULE_3__["isFunction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isGeneratorFunction", function() { return modules_utils__WEBPACK_IMPORTED_MODULE_3__["isGeneratorFunction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return modules_utils__WEBPACK_IMPORTED_MODULE_3__["isNumber"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return modules_utils__WEBPACK_IMPORTED_MODULE_3__["isObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return modules_utils__WEBPACK_IMPORTED_MODULE_3__["isString"]; });

/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

/**
 * The core engine for transducers. This consists primarily of reduction support
 * for chains of transducers but also supplies protocol definitions and utility
 * functions for writing new transducers.
 *
 * The general idea is that if you need to use a transducer, you can avoid
 * importing this library and work with the {@link module:xduce|xduce} module
 * instead (which internally depends on this module). If you want to write a new
 * transducer or control low-level access to the reduction engine, then you need
 * to use this library. (There is a small number of functions that are useful
 * for both, and {@link module:xduce|xduce} re-exports them from here so they
 * can be used from either module.)
 *
 * This module provides four basic services:
 *
 * 1. Reduction of transducer chains
 * 2. Protocol definition
 * 3. Iteration support
 * 4. Authoring utilities
 *
 * What follows is a short diuscussion of each.
 *
 * ## Reduction
 *
 * All transforming functions, whether methods of `Array` or third party tools
 * such as Lodash, perform reduction in order to build up a new collection out
 * of the elements that they've transformed/filtered, etc.
 *
 * Transducers are no different in that regard, but the manner in which they do
 * their reduction is what sets them apart.
 *
 * Using `Array.prototype.map` as an example, the user of the function provides
 * a transformation function. The `map` function iterates over the input array,
 * passes the elements through the provided transformation function, and then
 * reduces the results into a new array. If `map` is chained to another
 * function, like `Array.prototype.filter`, the process needs to be repeated:
 * iterate again, filter via a user-provided function, and reduce again.
 *
 * Transducers are different. When using a transducer, rather than a
 * manipulation function being provided as in `map` or `filter`, a *reducer
 * object* is used. (It's an object rather than a function because it has
 * multiple functions, each implemented as properties of the reducer object.)
 * This means that the user provides instructions for both transformation *and*
 * reduction, rather than the collection function itself being responsible for
 * doing the reduction on its own.
 *
 * This has two very beneficial effects. First, if a user wants to filter and
 * then map the elements of a collection, the transducer does not have to reduce
 * the filtered elements into a collection just to have the map part tear them
 * apart again and re-reduce them later. The filter part of the transducer can
 * pass its elements one at a time to the map part, and reduction can happen
 * only at the end after the elements have been both filtered *and* mapped.
 *
 * Secondly, since the user is providing the reduction instructions along with
 * the transformation instructions, the type of collection that gets reduced
 * into does not have to be the same type as the input collection. You could
 * process characters in a string and have it output as an array. Or process the
 * values in an iterator and get a plain object as output.
 *
 * Practically speaking, most of the reducer object creation is abstracted away,
 * so using transducers is no more difficult than just using
 * `Array.prototype.map`. The `{@link module:xdcore.reduce|reduce}` function
 * provided by this library is low level, though, and does not do any of that
 * abstracting on its own. The functions from the {@link module:xduce|xduce}
 * module, namely `{@link module:xduce.transduce|transduce}`,
 * `{@link module:xduce.into|into}`, and
 * `{@link module:xduce.sequence|sequence}`, take care of that abstraction so
 * `{@link module:xdcore.reduce|reduce}` can just handle actual reduction.
 *
 * ## Protocols
 *
 * In ES2015, the idea of protocols was added to JavaScript. This was done at
 * the beginning to provide language-level support for the new `for...of` loop.
 * As long as a value supported the iterable protocol by having a property named
 * `Symbol.iterator` that returns an iterator for that value when it's called,
 * then it automatically qualified to be used in `for...of`.
 *
 * This module uses that iterable module in the same way to understand how to
 * break collections apart, but it also uses protocols to let collections inform
 * the engine how to reduce a collection of that type back together again. Since
 * there are no standard protocols for reduction the way there are for
 * iteration, this module provides custom protocols of its own. These are also
 * symbols used as names for properties, but they are stored in an object called
 * `{@link module:xdcore.protocols|protocols}` to be looked up by string key:
 *
 * * `protocols.init`
 * * `protocols.step`
 * * `protocols.final`
 * * `protocols.completed`
 * * `protocols.value`
 *
 * The last two (`completed` and `value`) are used internally for keeping track
 * of the reduction status of a value and shouldn't need to be used externally.
 * The first three, however, are how the engine knows how to reduce to a certain
 * collection type.
 *
 * `init` is a function that returns a new, empty version of that collection to
 * be built upon. `step` is a function that gets passed a collection of that
 * type plus a new value to be added to it, and returns the collection with that
 * value added to it (i.e., it's a standard reduction function). `final` is a
 * function that gets passed the fully reduced new collection and returns what
 * the final output should be, giving the engine one last chance to modify the
 * final value (this *normally* just returns its argument unmodified). If these
 * three properties are added to an object, then this module will recognize that
 * object as reducible and be able to create and fill one.
 *
 * As an example, let's add support for transduction to the `List` collection
 * from [immutable.js][1].
 *
 * ```
 * import { protocols as p } from "@chanko/xdcore";
 * import { List } from "immutable";
 *
 * List.prototype[p.init] = () => List().asMutable();
 * List.prototype[p.step] = (acc, value) => acc.push(value);
 * List.prototype[p.final] = value => value.asImmutable();
 * ```
 *
 * The `init` function here returns a new, empty list. The `step` function
 * describes how to add a value to that list (through the `push` method). The
 * `final` function runs at the very end to determine the end value. In the
 * case of this immutable list, the `init` function actually returns a mutable
 * list that we can add to with `step`, and then `final` turns that into an
 * immutable list to be returned. This is a textbook use of `final`; most of the
 * time, `final` will simply return the value that's passed to it, unchanged.
 *
 * With these lines of code in place, adding the protocol functions to `List`'s
 * prototype, reduction will just work.
 *
 * It is not necessary to provide these functions for native arrays, strings,
 * plain objects, or iterators, as support for them is built in.
 *
 * [1]: https://immutable-js.github.io/immutable-js/
 *
 * @module xdcore
 */




/**
 * A standard JavaScript iterable. This object has a property named
 * `[Symbol.iterator]` which provides an object that satisfies the
 * {@link external:Iterator|Iterator} protocol.
 *
 * @external Iterable
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterable_protocol
 */

/**
 * A standard JavaScript iterator. This object has a function property named
 * `next` that, each time it's called, returns a new object with two
 * properties: `value`, which contains the iterator's value at that point, and
 * `done`, which is `false` until the iterator has had all of its values read.
 *
 * @external Iterator
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol
 */

/**
 * A function that can have an iterator created for it.
 *
 * @callback IterableFunction
 * @memberof module:xdcore
 * @param {number} index The index for the iteration. This is `0` the first
 *     time the function is called and increases by 1 for each call
 *     thereafter.
 * @param {*} last The return value of the function when it was called on the
 *     previous iteration. If this is the first call to the function, then
 *     this value will be `undefined`, meaning that the function can set a
 *     default value for that first pass.
 * @returns {*} The return value of the function, which will be the value for
 *     that iteration.
 */

/**
 * A function that, when called, produces a new, empty collection of whatever
 * type is being worked with.
 *
 * @callback InitFunction
 * @memberof module:xdcore
 * @returns {*} A new, empty representative of the collection.
 */

/**
 * A function that accepts a collection and a new element of that collection and
 * returns the collection with the new element added to it. This is used to
 * build up a new collection (starting with whatever
 * {@link module:xdcore.InitFunction|the init function} returns) piece by piece
 * from its elements.
 *
 * This is in every way a reducer function. The name 'step' comes from the fact
 * that these reduction functions reduce one element at a time, step by step.
 *
 * It is up to the implementation whether the returned collection is a modified
 * form of the original collection or whether it is a new collection altogether.
 *
 * @callback StepFunction
 * @memberof module:xdcore
 * @param {*} acc A collection, perhaps with some members already added to it.
 * @param {*} value A new element to be added to that collection.
 * @returns The original collection with the new value added to it.
 */

/**
 * A function that accepts a fully reduced collection and returns that
 * collection with any last-minute modifications that might need to be done to
 * it.
 *
 * In most cases this function will simply return its argument, unmodified, but
 * it does afford the transducer an opportunity to make any final modifications
 * that might be necessary before the result is returned from the transduction
 * process.
 *
 * @callback FinalFunction
 * @memberof module:xdcore
 * @param {*} value The fully reduced collection.
 * @returns {*} The reduced collection with any implementation-dependent changes
 *     that might be deemed necessary.
 */

/**
 * An object that provides the information necessary to build and populate a new
 * object of a reducible type. This information is used by the transduction
 * engine to create a result from a reduction without having to have its own
 * type-specific code; the creation, population, and finalization of the result
 * are delegated instead to this reducer object.
 *
 * Note that a "transducer object" has exactly the same structure. The only
 * difference is that the step function in a transducer object modifies the
 * elements before it reduces them, while a reducer object will not. As a
 * corollary, every reducer object is also a transducer object, but the converse
 * is not true.
 *
 * @typedef ReducerObject
 * @memberof module:xdcore
 * @property {module:xdcore.InitFunction} Symbol.for("reducer/init") A
 *     function that can create a new, empty copy of the reducible type.
 * @property {module:xdcore.StepFunction} Symbol.for("reducer/step") A
 *     function that can accept a value of the reducible type and a new element
 *     to be added to it and return the reducible with the new element
 *     incorporated.
 * @property {module:xdcore.FinalFunction} Symbol.for("reducer/final") A
 *     function that accepts a value of the reducible type and returns the same
 *     value with any final modifications that might be necessary for it.
 */

/**
 * A function that accepts a reducer object, which it then chains a transducer
 * object to. This is the primary way of creating composed transducer chains.
 *
 * A transducer function basically encapsulates a transducer object and the
 * ability to chain it to whatever reducer object is passed to it.
 *
 * @callback TransducerFunction
 * @memberof module:xdcore
 * @param {module:xdcore.ReducerObject} reducer The reducer object (which may
 *     also be a transducer object) that is the next reducer in the chain.
 * @returns {module:xdcore.ReducerObject} A transducer object consisting of some
 *     new transducer object chained to the supplied reducer object.
 */

/***/ }),

/***/ "./src/modules/iteration.js":
/*!**********************************!*\
  !*** ./src/modules/iteration.js ***!
  \**********************************/
/*! exports provided: iterator, isIterable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iterator", function() { return iterator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIterable", function() { return isIterable; });
/* harmony import */ var modules_protocol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! modules/protocol */ "./src/modules/protocol.js");
/* harmony import */ var modules_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! modules/utils */ "./src/modules/utils.js");
/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

/**
 * Functions to help with iteration over iterable objects and plain objects.
 *
 * @module xdcore/iteration
 * @private
 */


/**
 * Creates an iterator over an object.
 *
 * Details about this function are included in the documentation for
 * {@link module:xdcore.iterator|iterator}.
 *
 * @param {object} obj The object being iterated over.
 * @returns {external:Iterator} An iterator over the properties of `obj`.
 * @private
 */

function objectIterator(obj) {
  return function* () {
    const keys = Object.keys(obj);
    let index = 0;

    while (index < keys.length) {
      const k = keys[index++];
      yield {
        [k]: obj[k]
      };
    }
  }();
}
/**
 * Creates an iterator over a function.
 *
 * Details about this function are included in the documentation for
 * {@link module:xdcore.iterator|iterator}.
 *
 * @param {module:xdcore.IterableFunction} fn The function to iterate over.
 * @returns {external:Iterator} An iterator over the return values of `fn`.
 * @private
 */


function functionIterator(fn) {
  return function* () {
    let current;
    let index = 0;

    for (;;) {
      current = fn(index++, current);

      if (typeof current === "undefined") {
        break;
      }

      yield current;
    }
  }();
}
/**
 * Creates an iterator over the provided value. The form of the iteration
 * depends on what kind of value is being iterated over.
 *
 * If the value is a collection implementing the [iterable protocol][1] (arrays,
 * strings, generators, or a custom object supporting the protocol) then the
 * produced iterator will be as expected: an object that implements the
 * [iterator protocol][2] by providing a `next` function that returns each
 * collection value in turn.
 *
 * ```
 * const iter = iterator([1, 2, 3]);
 * console.log(iter.next().value);   // -> 1
 * console.log(iter.next().value);   // -> 2
 * console.log(iter.next().value);   // -> 3
 * console.log(iter.next().done);    // -> true
 * ```
 *
 * Special support is provided for two types that are not normally iterable:
 * objects and functions.
 *
 * Objects result in an iterator that produces a single-property object for
 * every key/value pair in the supplied object. The [order of iteration][3] is
 * the same as it is for objects post-ES2015:
 *
 * 1. String keys that are integer indices in ascending numerical order
 * 2. All other string keys in the order in which they were added to the object
 * 3. All symbol keys in the order in which they were added to the object
 *
 * ```
 * const obj = {
 *   [Symbol("first")]: true,
 *   02: true,
 *   10: true,
 *   01: true,
 *   2: true,
 *   [Symbol("second")]: true
 * };
 * const iter = iterator(obj);
 * console.log(iter.next().value);   // -> { '2': true }
 * console.log(iter.next().value);   // -> { '10': true }
 * console.log(iter.next().value);   // -> { '02': true }
 * console.log(iter.next().value);   // -> { '01': true }
 * console.log(iter.next().value);   // -> { [Symbol('first')]: true }
 * console.log(iter.next().value);   // -> { [Symbol('second')]: true }
 * console.log(iter.next().done);    // -> true
 * ```
 *
 * Functions are run each time the iterator's `next` method is called, and the
 * return value of the function is supplied as the iterator's value at that
 * point.
 *
 * This function is provided two arguments: the zero-based index of that
 * iteration, and the value produced by the last invocation of the iterator. The
 * last value is `undefined` on the first pass, but a default parameter on the
 * function can define the first pass value to be whatever is needed.
 *
 * ```
 * const fn = (index, last = 1) => last * (index + 1);
 * const iter = iterator(fn);
 * console.log(iter.next().value);   // -> 1
 * console.log(iter.next().value);   // -> 2
 * console.log(iter.next().value);   // -> 6
 * console.log(iter.next().value);   // -> 24
 * console.log(iter.next().value);   // -> 120
 * ```
 *
 * If the input value is neither iterable, object, or function, then the result
 * will be `null`.
 *
 * [1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterable_protocol
 * [2]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol
 * [3]: https://2ality.com/2015/10/property-traversal-order-es6.html
 *
 * @memberof module:xdcore
 * @param {(object|module:xdcore.IterableFunction|external:Iterable)} value
 *     The value to create an iterator over.
 * @returns {external:Iterator} An iterator over `value`.
 */


function iterator(value) {
  switch (true) {
    case Object(modules_utils__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(value[Symbol.iterator]):
    case Object(modules_utils__WEBPACK_IMPORTED_MODULE_1__["isGeneratorFunction"])(value[Symbol.iterator]):
      return value[Symbol.iterator]();

    case Object(modules_utils__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(value):
      return functionIterator(value);

    case Object(modules_utils__WEBPACK_IMPORTED_MODULE_1__["isObject"])(value):
      return objectIterator(value);

    default:
      return null;
  }
}
/**
 * Determines whether the passed object is iterable, in terms of what 'iterable'
 * means to this library. In other words, values implementing the `iterable`
 * protocol and plain objects return `true`, while everything else returns
 * `false`. This does not return `true` for functions even though
 * {@link module:xdcore.iterator|iterator} can produce an iterator for them,
 * because not all functions work well with
 * {@link module:xdcore.iterator|iterator}.
 *
 * @memberof module:xdcore
 * @param {*} value The value to test for iterability.
 * @return {boolean} Either `true` if the value is iterable
 *     (`{@link module:xdcore.iterator|iterator}` will return an iterator for
 *     it) or `false` if it is not.
 */


function isIterable(value) {
  return Object(modules_protocol__WEBPACK_IMPORTED_MODULE_0__["isImplemented"])(value, "iterator") || Object(modules_utils__WEBPACK_IMPORTED_MODULE_1__["isObject"])(value);
}



/***/ }),

/***/ "./src/modules/protocol.js":
/*!*********************************!*\
  !*** ./src/modules/protocol.js ***!
  \*********************************/
/*! exports provided: protocols, isImplemented */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "protocols", function() { return protocols; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isImplemented", function() { return isImplemented; });
/* harmony import */ var modules_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! modules/utils */ "./src/modules/utils.js");
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
 * @property {Symbol} final The `reducer/final` protocol. This is used to mark
 *     functions that take the final result of the step process and return the
 *     final form to be output. This is optional; if the reducer does not want
 *     to transform the final result, it should just return the result of its
 *     chained reducer's `final` function.
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
  final: {
    value: Symbol.for("reducer/final")
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
 * * `final`
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
      return Object(modules_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(obj[Symbol.iterator]) || Object(modules_utils__WEBPACK_IMPORTED_MODULE_0__["isGeneratorFunction"])(obj[Symbol.iterator]);

    case "asyncIterator":
      return Object(modules_utils__WEBPACK_IMPORTED_MODULE_0__["isGeneratorFunction"])(obj[Symbol.asyncIterator]);

    case "completed":
    case "value":
      return Object.getOwnPropertySymbols(obj).includes(protocols[protocol]);

    default:
      return Object(modules_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(obj[protocols[protocol]]);
  }
}



/***/ }),

/***/ "./src/modules/reduction.js":
/*!**********************************!*\
  !*** ./src/modules/reduction.js ***!
  \**********************************/
/*! exports provided: init, step, final, toReducer, ARRAY_REDUCER, OBJECT_REDUCER, STRING_REDUCER, toTransducer, toFunction, complete, uncomplete, isCompleted, ensureCompleted, ensureUncompleted, reduce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "step", function() { return step; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "final", function() { return final; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toReducer", function() { return toReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARRAY_REDUCER", function() { return ARRAY_REDUCER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OBJECT_REDUCER", function() { return OBJECT_REDUCER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STRING_REDUCER", function() { return STRING_REDUCER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toTransducer", function() { return toTransducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toFunction", function() { return toFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "complete", function() { return complete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uncomplete", function() { return uncomplete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCompleted", function() { return isCompleted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ensureCompleted", function() { return ensureCompleted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ensureUncompleted", function() { return ensureUncompleted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reduce", function() { return reduce; });
/* harmony import */ var modules_protocol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! modules/protocol */ "./src/modules/protocol.js");
/* harmony import */ var modules_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! modules/utils */ "./src/modules/utils.js");
/* harmony import */ var modules_iteration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! modules/iteration */ "./src/modules/iteration.js");
/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

/**
 * A set of functions related to the producing reducer objects, marking
 * completed objects, and performing general reduction operations.
 *
 * @module xdcore/reduction
 * @private
 */



/**
 * Returns an init function for a collection. This is a function that returns a
 * new, empty instance of the collection in question. If the collection doesn't
 * support reduction, `null` is returned. This makes conditionals a bit easier
 * to work with.
 *
 * In order to support the conversion of functions into reducers, function
 * support is also provided.
 *
 * @param {(object|function|external:Iterable)} collection A collection to
 *     create an init function for. This can be anything that supports the
 *     iteratable protocol, a plain object, or a function.
 * @return {module:xdcore.InitFunction} A function that, when called, returns an
 *     initial version of the provided collection. If the provided collection is
 *     not iterable, then `null` is returned.
 * @private
 */

function init(collection) {
  switch (true) {
    case Object(modules_protocol__WEBPACK_IMPORTED_MODULE_0__["isImplemented"])(collection, "init"):
      return collection[modules_protocol__WEBPACK_IMPORTED_MODULE_0__["protocols"].init];

    case Object(modules_utils__WEBPACK_IMPORTED_MODULE_1__["isString"])(collection):
      return () => "";

    case Object(modules_utils__WEBPACK_IMPORTED_MODULE_1__["isArray"])(collection):
      return () => [];

    case Object(modules_utils__WEBPACK_IMPORTED_MODULE_1__["isObject"])(collection):
      return () => ({});

    case Object(modules_utils__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(collection):
      return () => {
        throw Error("init not available");
      };

    default:
      return null;
  }
}
/**
 * Returns a step function for a collection. This is a function that takes an
 * accumulator and a value and returns the result of reducing the value into the
 * accumulator. If the collection doesn't support reduction, `null` is returned.
 * The returned function itself simply reduces the input into the target
 * collection without modifying it.
 *
 * In order to support the conversion of functions into reducers, function
 * support is also provided.
 *
 * @param {(object|function|external:Iterable)}} collection A collection to
 *     create a step function for. This can be anything that supports the
 *     iteration protocol, a plain object, or a function.
 * @return {module:xdcore.StepFunction} A reduction function for the provided
 *     collection that simply adds an element to the target collection without
 *     modifying it. If the provided collection is not iterable, `null` is
 *     returned.
 * @private
 */


function step(collection) {
  switch (true) {
    case Object(modules_protocol__WEBPACK_IMPORTED_MODULE_0__["isImplemented"])(collection, "step"):
      return collection[modules_protocol__WEBPACK_IMPORTED_MODULE_0__["protocols"].step];

    case Object(modules_utils__WEBPACK_IMPORTED_MODULE_1__["isString"])(collection):
      return (acc, value) => {
        const v = Object(modules_utils__WEBPACK_IMPORTED_MODULE_1__["isObject"])(value) ? value[Object.keys(value)[0]] : value;
        return acc + v;
      };

    case Object(modules_utils__WEBPACK_IMPORTED_MODULE_1__["isArray"])(collection):
      return (acc, value) => {
        acc.push(value);
        return acc;
      };

    case Object(modules_utils__WEBPACK_IMPORTED_MODULE_1__["isObject"])(collection):
      return (acc, value) => {
        let v = value;

        if (!Object(modules_utils__WEBPACK_IMPORTED_MODULE_1__["isObject"])(value)) {
          // if the input isn't an object, turn it into an object with a
          // numerical key one greater than the max key already in the
          // accumulator
          const max = Object.keys(acc).reduce((a, b) => Math.max(a, b), -1);
          v = {
            [max + 1]: value
          };
        }

        const k = Object.keys(v)[0];
        acc[k] = v[k];
        return acc;
      };

    case Object(modules_utils__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(collection):
      return (acc, value) => collection(acc, value);

    default:
      return null;
  }
}
/**
 * Returns a final function for a collection. This is a function that performs
 * any final processing that should be done on the result of a reduction. If the
 * collection doesn't support reduction, `null` is returned.
 *
 * In order to support the conversion of functions into reducers, function
 * support is also provided.
 *
 * @param {(object|function|external:Iterable)}} collection A collection to
 *     create a step function for. This can be anything that supports the
 *     iteration protocol, a plain object, or a function.
 * @return {module:xdcore.FinalFunction} A function that, when given a reduced
 *     collection, produces the final output. If the provided collection is not
 *     iterable, `null` will be returned.
 * @private
 */


function final(collection) {
  switch (true) {
    case Object(modules_protocol__WEBPACK_IMPORTED_MODULE_0__["isImplemented"])(collection, "final"):
      return collection[modules_protocol__WEBPACK_IMPORTED_MODULE_0__["protocols"].final];

    case Object(modules_utils__WEBPACK_IMPORTED_MODULE_1__["isString"])(collection):
    case Object(modules_utils__WEBPACK_IMPORTED_MODULE_1__["isArray"])(collection):
    case Object(modules_utils__WEBPACK_IMPORTED_MODULE_1__["isObject"])(collection):
    case Object(modules_utils__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(collection):
      return value => value;

    default:
      return null;
  }
}
/**
 * Creates a reducer object from a function or from a reducible type (array,
 * object, string, or object implementing the reducer protocols).
 *
 * To create a reducer for arrays, objects, or strings, simply pass an empty
 * version of that collection to this function (e.g., `toReducer([])`).
 *
 * The notable use for this function though is to turn a reduction function into
 * a reducer object. The function is a function of two parameters, an
 * accumulator and a value, and returns the accumulator with the value in it.
 * This is exactly the same kind of function that is passed to reduction
 * functions like JavaScript's `Array.prototype.reduce` and Lodash's `_.reduce`.
 *
 * Note in particular that the output of this reducer does not need to be a
 * collection. It can be anything. While transducing normally involves
 * transforming one collection into another, it need not be so. For example,
 * here is a reducer that will result in summing of the collection values.
 *
 * ```
 * import { toReducer, reduce } from "@chanko/xdcore";
 *
 * const sumReducer = toReducer((acc, input) => acc + input);
 * const sum = reduce([1, 2, 3, 4, 5], sumReducer, 0);
 * console.log(sum);   // -> 15
 * ```
 *
 * This can be combined with transducers as well, as in this calculation of the
 * sum of the *squares* of the collection values.
 *
 * ```
 * import { toReducer } from "@chanko/xdcore";
 * import { transduce, map } from "@chanko/xduce";
 *
 * const sumReducer = toReducer((acc, input) => acc + input);
 * const sum = transduce([1, 2, 3, 4, 5], map(x => x * x), sumReducer, 0);
 * console.log(sum);   // -> 55
 * ```
 *
 * @memberof module:xdcore
 * @param {(array|object|function|module:xdcore.ReducerObject)} collection A
 *     reducible collection or a reducer function.
 * @return {module:xdcore.ReducerObject} An object containing protocol
 *     properties for `init`, `step`, and `final`. This object is suitable for
 *     use as a reducer object (one provided to
 *     `{@link module:xdcore.reduce|reduce}`). If the provided collection is not
 *     reducible, all of the properties of this object will be `null`.
 */


function toReducer(collection) {
  return Object.freeze({
    [modules_protocol__WEBPACK_IMPORTED_MODULE_0__["protocols"].init]: init(collection),
    [modules_protocol__WEBPACK_IMPORTED_MODULE_0__["protocols"].step]: step(collection),
    [modules_protocol__WEBPACK_IMPORTED_MODULE_0__["protocols"].final]: final(collection)
  });
}
/**
 * A reducer object for arrays.
 *
 * @type {module:xdcore.ReducerObject}
 * @private
 */


const ARRAY_REDUCER = toReducer([]);
/**
 * A reducer object for objects.
 *
 * @type {module:xdcore.ReducerObject}
 * @private
 */

const OBJECT_REDUCER = toReducer({});
/**
 * A reducer object for strings.
 *
 * @type {module:xdcore.ReducerObject}
 * @private
 */

const STRING_REDUCER = toReducer("");
/**
 * Creates a transducer object from a function and a reducer object.
 *
 * This is similar to {@link module:xdcore.toReducer|toReducer} except in two
 * respects:
 *
 * 1. It only accepts a reducer function, not a reducer object
 * 2. It chains to another reducer object
 *
 * This function applies the given function as the `step` function of the
 * returned transducer, and the `init` and `result` functions simply call the
 * same functions in the next reducer object. This is precisely what *most*
 * transducers want; `init` and `result` functions are normally handled by the
 * reducer at the end of the transducer chain. In the rare case when an `init`
 * or `result` function must do more than simply chain, this function will not
 * work. Generally the transducer object is created manually in that case.
 *
 * This function does not automatically chain the `step` function to the next
 * one down the line, as that can be done in any number of different ways. Thus
 * the function itself should call the `step` function in `reducer` in whatever
 * way is appropriate.
 *
 * @memberof module:xdcore
 * @param {module:xdcore.StepFunction} fn The step function for the transducer.
 * @param {module:xdcore.ReducerObject} reducer The next transducer object in
 *     the chain.
 * @returns {module:xdcore.ReducerObject} A new transducer, chaining the
 *     supplied function to the supplied transducer.
 */

function toTransducer(fn, reducer) {
  return {
    [modules_protocol__WEBPACK_IMPORTED_MODULE_0__["protocols"].init]() {
      return reducer[modules_protocol__WEBPACK_IMPORTED_MODULE_0__["protocols"].init]();
    },

    [modules_protocol__WEBPACK_IMPORTED_MODULE_0__["protocols"].step]: fn,

    [modules_protocol__WEBPACK_IMPORTED_MODULE_0__["protocols"].final](value) {
      return reducer[modules_protocol__WEBPACK_IMPORTED_MODULE_0__["protocols"].final](value);
    }

  };
}
/**
 * Creates a reducer function from a transducer function and a reducer.
 *
 * This produces a function that's suitable for being passed into other
 * libraries' reduce functions, such as JavaScript's `Array.prototype.reduce` or
 * Lodash's `_.reduce`. It requires both a transducer *and* a reducer because
 * reduction functions for those libraries must know how to reduce as well as
 * how to transform. The reducer can be a standard reducer object like the ones
 * sent to `{@link module:xdcore.reduce|reduce}`, or it can be a plain function
 * that takes two parameters and returns the result of reducing the second
 * parameter into the first (i.e., a reducer function).
 *
 * If there is no need for a transformation, then pass in the
 * `{@link module:xduce.identity|identity}` transducer.
 *
 * @memberof module:xdcore
 * @param {module:xdcore.TransducerFunction} transducer A transducer function
 *     that wraps a transducer object whose `step` function will be used as a
 *     reducer function.
 * @param {(module:xdcore.StepFunction|module:xdcore.ReducerObject)} reducer A
 *     reducer that knows how to reduce values into an output collection. This
 *     can either be a reducing function or a reducer object whose `step`
 *     function knows how to perform this reduction.
 * @returns {module:xdcore.StepFunction} A reducer function that will transform
 *     elements via the transducer function and then reduce them into whatever
 *     kind of collection the reducer implements.
 */


function toFunction(transducer, reducer) {
  const r = typeof reducer === "function" ? toReducer(reducer) : reducer;
  const result = transducer(r);
  return result[modules_protocol__WEBPACK_IMPORTED_MODULE_0__["protocols"].step].bind(result);
}
/**
 * A completed value. This is a wrapper around the actual value, which is
 * retained as one of the properties, along with a marker property to show that
 * this is a wrapped value.
 *
 * @typedef CompletedValue
 * @memberof module:xdcore
 * @property {boolean} Symbol.for("completed") A marker property to indicate
 *     that this is, in fact, a wrapped completed value.
 * @property {*} Symbol.for("value") The wrapped value.
 */

/**
 * Marks a value as complete.
 *
 * This is done by wrapping the value. This means three things: first, a
 * complete object may be marked as complete again; second, a complete value
 * isn't usable without being uncompleted first; and third any type of value
 * (including `undefined`) may be marked as complete.
 *
 * @memberof module:xdcore
 * @param {*} value The value to be completed.
 * @return {module:xdcore.CompletedValue} A completed version of the provided
 *     value. This effect is achieved by wrapping the value in a marker object.
 */


function complete(value) {
  return {
    [modules_protocol__WEBPACK_IMPORTED_MODULE_0__["protocols"].completed]: true,
    [modules_protocol__WEBPACK_IMPORTED_MODULE_0__["protocols"].value]: value
  };
}
/**
 * Removes the complete status from a completed value.
 *
 * This function is intended to be used when it's certain that a value is
 * already marked as complete. If it is not, `undefined` will be returned
 * instead of the value.
 *
 * @memberof module:xdcore
 * @param {*} value The value to be uncompleted.
 * @return {*} An uncompleted version of the provided value. If the value was
 *     not complete in the first place, `undefined` will be returned instead.
 */


function uncomplete(value) {
  return value === null || value === void 0 ? void 0 : value[modules_protocol__WEBPACK_IMPORTED_MODULE_0__["protocols"].value];
}
/**
 * Determines whether a value is marked as complete.
 *
 * @memberof module:xdcore
 * @param {*} value The value to test for its complete status.
 * @return {boolean} Either `true` if the value is completed, or `false` if it
 *     is not.
 */


function isCompleted(value) {
  return !!(value === null || value === void 0 ? void 0 : value[modules_protocol__WEBPACK_IMPORTED_MODULE_0__["protocols"].completed]);
}
/**
 * Makes sure that a value is marked as complete; if it is not, it will be
 * marked as complete.
 *
 * This differs from {@link module:xdcore.complete|complete} in that if the
 * value is already complete, this function won't complete it again. Therefore
 * thus function can't be used to make a value complete multiple times.
 *
 * @memberof module:xdcore
 * @param {*} value The value to be completed.
 * @return {*} If the value is already complete, then the value is simply
 *     returned. Otherwise, a completed version of the value is returned.
 */


function ensureCompleted(value) {
  return isCompleted(value) ? value : complete(value);
}
/**
 * Removes the complete status from a value, as long as it actually is complete.
 *
 * This does a check to make sure the value passed in actually is complete. If
 * it isn't, the value itself is returned. It's meant to be used when the
 * completed status is uncertain.
 *
 * @memberof module:xdcore
 * @param {*} value The complete value to be uncompleted.
 * @return {*} If the value is already uncompleted, the value is simply
 *     returned. Otherwise an uncompleted version of the value is returned.
 */


function ensureUncompleted(value) {
  return isCompleted(value) ? uncomplete(value) : value;
}
/**
 * Reduces the elements of the input collection through a reducer into an output
 * collection.
 *
 * This is the lowest-level of the transduction functions. In fact, this one is
 * so low-level that it doesn't have a lot of use in normal operation. It's more
 * useful for writing your own transformation functions.
 *
 * `reduce` doesn't assume that there's even a transformation. It requires an
 * initial collection and a reducer object that is matched to that initial
 * collection. The reducer object must implement the `step` and `result`
 * protocols, which instruct `reduce` on how to build up the collection. The
 * reducer may implement a transformation as well, but all that's important here
 * is that it can do the reduction.
 *
 * The input collection need only implement `iterable`. It is not necessary for
 * the input and output collections to be of the same type; as long as the input
 * implements `iterable` and the reducer implements `step` and `result`
 * appropriate to the type of the `init` collection, then any translation
 * between collection types can occur.
 *
 * The normal course of operation will be to call
 * {@link module:xduce.transduce|transduce} instead, as that function makes it
 * easy to combine transformations with reductions and can optionally figure out
 * the initial collection itself.
 *
 * @memberof module:xdcore
 * @param {*} collection The input collection. The only requirement of this
 *     collection is that it implement the `iterable` protocol. Special support
 *     is provided by the library for objects, so they can be used as well.
 * @param {module:xdcore.ReducerObject} reducer An object that implements the
 *     `step` and `result` protocols. This object must know how to produce an
 *     output collection through those protocol functions.
 * @param {*} init a collection of the same type as the output collection. It
 *     need not be empty; if it is not, the existing elements are retained as
 *     the input collection is reduced into it.
 * @return {*} A new collection, consisting of the `init` collection with all of
 *     the elements of the `collection` collection reduced into it.
 */


function reduce(collection, reducer, init) {
  if (collection == null) {
    return null;
  }

  const iter = Object(modules_iteration__WEBPACK_IMPORTED_MODULE_2__["iterator"])(collection);

  if (!iter) {
    throw Error(`Cannot reduce an instance of ${collection.constructor.name}`);
  }

  let acc = init;
  let step = iter.next();

  while (!step.done) {
    acc = reducer[modules_protocol__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](acc, step.value);

    if (isCompleted(acc)) {
      acc = uncomplete(acc);
      break;
    }

    step = iter.next();
  }

  return reducer[modules_protocol__WEBPACK_IMPORTED_MODULE_0__["protocols"].final](acc);
}



/***/ }),

/***/ "./src/modules/utils.js":
/*!******************************!*\
  !*** ./src/modules/utils.js ***!
  \******************************/
/*! exports provided: isFunction, isGeneratorFunction, isObject, isNumber, isString, isArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isGeneratorFunction", function() { return isGeneratorFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

/**
 * A bunch of utility functions. These are all used by the library itself in
 * places, but many of them are suitable for general use as well.
 * ^
 * @module xdcore/utils
 * @private
 */

/**
 * `Object`'s `toString` is explicitly used throughout because it could be
 * redefined in any subtype of `Object`.
 *
 * @function toString
 * @private
 */
const toString = Object.prototype.toString;
/**
 * Determines whether a value is a function.
 *
 * @memberof module:xdcore
 * @param {*} x The value being tested to see if it is a function.
 * @return {boolean} Either `true` if the test value is a function or `false` if
 *     it is not.
 */

function isFunction(x) {
  return toString.call(x) === "[object Function]";
}
/**
 * Determines whether a value is a generator function.
 *
 * @memberof module:xdcore
 * @param {*} x The value being tested to see if it is a generator function.
 * @return {boolean} Either `true` if the test value is a generator function or
 *     `false` if it is not.
 */


function isGeneratorFunction(x) {
  return toString.call(x) === "[object GeneratorFunction]";
}
/**
 * Determines whether a value is a plain object.
 *
 * This function returns `false` if the value is any other sort of built-in
 * object (such as an array or a string). It also returns `false` for any object
 * that is created by a constructor that is not `Object`'s constructor, meaning
 * that "instances" of custom "classes" will return `false`. Therefore it's only
 * going to return `true` for literal objects or those created with
 * `Object.create()`.
 *
 * @memberof module:xdcore
 * @param {*} x The value being tested to see if it is a plain object.
 * @return {boolean} Either `true` if the test value is a plain object or
 *     `false` if it is not.
 */


function isObject(x) {
  // This check excludes built-in non-Object objects (such as Array and String).
  // It also excludes objects created from ES2015 classes, but it does not
  // exclude objects created with `new` on constructor functions (that happens
  // below).
  if (toString.call(x) !== "[object Object]") {
    return false;
  } // Prototype-less objects (created with `Object.create(null))` pass


  const proto = Object.getPrototypeOf(x);

  if (proto === null) {
    return true;
  } // Check to see whether the constructor of the tested object is the Object
  // constructor. This is the only constructor that produces a "plain" object.


  const ctor = Object.prototype.hasOwnProperty.call(proto, "constructor") && proto.constructor;
  return typeof ctor === "function" && ctor === Object;
}
/**
 * Determines whether a value is a concrete number.
 *
 * This function will return `true` for any number literal or instance of
 * `Number` except for `Infinity` or `NaN`. It will return `false` for strings
 * that happen to also be numbers; the value must be an actual `Number` instance
 * or number literal to return `true`.
 *
 * @memberof module:xdcore
 * @param {*} x The value being tested to see if it is a number.
 * @return {boolean} Either `true` if the test value is a finite number (not
 *     including string representations of numbers) or `false` if it is not.
 */


function isNumber(x) {
  return toString.call(x) === "[object Number]" && isFinite(x);
}
/**
 * Determines whether a value is a string.
 *
 * Literal strings will return `true`, as will instances of the `String` object.
 *
 * @memberof module:xdcore
 * @param {*} x The value being tested to see if it is a string.
 * @return {boolean} Either `true` if the test value is a string or `false` if
 *    it is not.
 */


function isString(x) {
  return toString.call(x) === "[object String]";
}
/**
 * Determines whether a value is an array.
 *
 * This function merely delegates to `Array.isArray`. It is provided for
 * consistency in calling style only.
 *
 * @function isArray
 * @memberof module:xdcore
 * @param {*} x The value being tested to see if it is an array.
 * @return {boolean} Either `true` if the test value is an array or `false` if
 *     it is not.
 */


const isArray = Array.isArray;


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly94ZGNvcmUvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL3hkY29yZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly94ZGNvcmUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8veGRjb3JlLy4vc3JjL21vZHVsZXMvaXRlcmF0aW9uLmpzIiwid2VicGFjazovL3hkY29yZS8uL3NyYy9tb2R1bGVzL3Byb3RvY29sLmpzIiwid2VicGFjazovL3hkY29yZS8uL3NyYy9tb2R1bGVzL3JlZHVjdGlvbi5qcyIsIndlYnBhY2s6Ly94ZGNvcmUvLi9zcmMvbW9kdWxlcy91dGlscy5qcyJdLCJuYW1lcyI6WyJvYmplY3RJdGVyYXRvciIsIm9iaiIsImtleXMiLCJPYmplY3QiLCJpbmRleCIsImxlbmd0aCIsImsiLCJmdW5jdGlvbkl0ZXJhdG9yIiwiZm4iLCJjdXJyZW50IiwiaXRlcmF0b3IiLCJ2YWx1ZSIsImlzRnVuY3Rpb24iLCJTeW1ib2wiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiaXNPYmplY3QiLCJpc0l0ZXJhYmxlIiwiaXNJbXBsZW1lbnRlZCIsInByb3RvY29scyIsImNyZWF0ZSIsImluaXQiLCJmb3IiLCJzdGVwIiwiZmluYWwiLCJjb21wbGV0ZWQiLCJwcm90b2NvbCIsImFzeW5jSXRlcmF0b3IiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJpbmNsdWRlcyIsImNvbGxlY3Rpb24iLCJwIiwiaXNTdHJpbmciLCJpc0FycmF5IiwiRXJyb3IiLCJhY2MiLCJ2IiwicHVzaCIsIm1heCIsInJlZHVjZSIsImEiLCJiIiwiTWF0aCIsInRvUmVkdWNlciIsImZyZWV6ZSIsIkFSUkFZX1JFRFVDRVIiLCJPQkpFQ1RfUkVEVUNFUiIsIlNUUklOR19SRURVQ0VSIiwidG9UcmFuc2R1Y2VyIiwicmVkdWNlciIsInRvRnVuY3Rpb24iLCJ0cmFuc2R1Y2VyIiwiciIsInJlc3VsdCIsImJpbmQiLCJjb21wbGV0ZSIsInVuY29tcGxldGUiLCJpc0NvbXBsZXRlZCIsImVuc3VyZUNvbXBsZXRlZCIsImVuc3VyZVVuY29tcGxldGVkIiwiaXRlciIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm5leHQiLCJkb25lIiwidG9TdHJpbmciLCJwcm90b3R5cGUiLCJ4IiwiY2FsbCIsInByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJjdG9yIiwiaGFzT3duUHJvcGVydHkiLCJpc051bWJlciIsImlzRmluaXRlIiwiQXJyYXkiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FB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QUFLLEdBQUdqRSxNQUFNLENBQUNrRSxjQUFQLENBQXNCSCxDQUF0QixDQUFkOztBQUNBLE1BQUlFLEtBQUssS0FBSyxJQUFkLEVBQW9CO0FBQ2xCLFdBQU8sSUFBUDtBQUNELEdBYmtCLENBZW5CO0FBQ0E7OztBQUNBLFFBQU1FLElBQUksR0FDUm5FLE1BQU0sQ0FBQzhELFNBQVAsQ0FBaUJNLGNBQWpCLENBQWdDSixJQUFoQyxDQUFxQ0MsS0FBckMsRUFBNEMsYUFBNUMsS0FDQUEsS0FBSyxDQUFDUixXQUZSO0FBR0EsU0FBTyxPQUFPVSxJQUFQLEtBQWdCLFVBQWhCLElBQThCQSxJQUFJLEtBQUtuRSxNQUE5QztBQUNEO0FBRUQ7Ozs7Ozs7Ozs7Ozs7OztBQWFBLFNBQVNxRSxRQUFULENBQWtCTixDQUFsQixFQUFxQjtBQUNuQixTQUFPRixRQUFRLENBQUNHLElBQVQsQ0FBY0QsQ0FBZCxNQUFxQixpQkFBckIsSUFBMENPLFFBQVEsQ0FBQ1AsQ0FBRCxDQUF6RDtBQUNEO0FBRUQ7Ozs7Ozs7Ozs7OztBQVVBLFNBQVNuQyxRQUFULENBQWtCbUMsQ0FBbEIsRUFBcUI7QUFDbkIsU0FBT0YsUUFBUSxDQUFDRyxJQUFULENBQWNELENBQWQsTUFBcUIsaUJBQTVCO0FBQ0Q7QUFFRDs7Ozs7Ozs7Ozs7Ozs7QUFZQSxNQUFNbEMsT0FBTyxHQUFHMEMsS0FBSyxDQUFDMUMsT0FBdEIiLCJmaWxlIjoiY2hhbmtvLXhkY29yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInhkY29yZVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJ4ZGNvcmVcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG4vKipcbiAqIFRoZSBjb3JlIGVuZ2luZSBmb3IgdHJhbnNkdWNlcnMuIFRoaXMgY29uc2lzdHMgcHJpbWFyaWx5IG9mIHJlZHVjdGlvbiBzdXBwb3J0XG4gKiBmb3IgY2hhaW5zIG9mIHRyYW5zZHVjZXJzIGJ1dCBhbHNvIHN1cHBsaWVzIHByb3RvY29sIGRlZmluaXRpb25zIGFuZCB1dGlsaXR5XG4gKiBmdW5jdGlvbnMgZm9yIHdyaXRpbmcgbmV3IHRyYW5zZHVjZXJzLlxuICpcbiAqIFRoZSBnZW5lcmFsIGlkZWEgaXMgdGhhdCBpZiB5b3UgbmVlZCB0byB1c2UgYSB0cmFuc2R1Y2VyLCB5b3UgY2FuIGF2b2lkXG4gKiBpbXBvcnRpbmcgdGhpcyBsaWJyYXJ5IGFuZCB3b3JrIHdpdGggdGhlIHtAbGluayBtb2R1bGU6eGR1Y2V8eGR1Y2V9IG1vZHVsZVxuICogaW5zdGVhZCAod2hpY2ggaW50ZXJuYWxseSBkZXBlbmRzIG9uIHRoaXMgbW9kdWxlKS4gSWYgeW91IHdhbnQgdG8gd3JpdGUgYSBuZXdcbiAqIHRyYW5zZHVjZXIgb3IgY29udHJvbCBsb3ctbGV2ZWwgYWNjZXNzIHRvIHRoZSByZWR1Y3Rpb24gZW5naW5lLCB0aGVuIHlvdSBuZWVkXG4gKiB0byB1c2UgdGhpcyBsaWJyYXJ5LiAoVGhlcmUgaXMgYSBzbWFsbCBudW1iZXIgb2YgZnVuY3Rpb25zIHRoYXQgYXJlIHVzZWZ1bFxuICogZm9yIGJvdGgsIGFuZCB7QGxpbmsgbW9kdWxlOnhkdWNlfHhkdWNlfSByZS1leHBvcnRzIHRoZW0gZnJvbSBoZXJlIHNvIHRoZXlcbiAqIGNhbiBiZSB1c2VkIGZyb20gZWl0aGVyIG1vZHVsZS4pXG4gKlxuICogVGhpcyBtb2R1bGUgcHJvdmlkZXMgZm91ciBiYXNpYyBzZXJ2aWNlczpcbiAqXG4gKiAxLiBSZWR1Y3Rpb24gb2YgdHJhbnNkdWNlciBjaGFpbnNcbiAqIDIuIFByb3RvY29sIGRlZmluaXRpb25cbiAqIDMuIEl0ZXJhdGlvbiBzdXBwb3J0XG4gKiA0LiBBdXRob3JpbmcgdXRpbGl0aWVzXG4gKlxuICogV2hhdCBmb2xsb3dzIGlzIGEgc2hvcnQgZGl1c2N1c3Npb24gb2YgZWFjaC5cbiAqXG4gKiAjIyBSZWR1Y3Rpb25cbiAqXG4gKiBBbGwgdHJhbnNmb3JtaW5nIGZ1bmN0aW9ucywgd2hldGhlciBtZXRob2RzIG9mIGBBcnJheWAgb3IgdGhpcmQgcGFydHkgdG9vbHNcbiAqIHN1Y2ggYXMgTG9kYXNoLCBwZXJmb3JtIHJlZHVjdGlvbiBpbiBvcmRlciB0byBidWlsZCB1cCBhIG5ldyBjb2xsZWN0aW9uIG91dFxuICogb2YgdGhlIGVsZW1lbnRzIHRoYXQgdGhleSd2ZSB0cmFuc2Zvcm1lZC9maWx0ZXJlZCwgZXRjLlxuICpcbiAqIFRyYW5zZHVjZXJzIGFyZSBubyBkaWZmZXJlbnQgaW4gdGhhdCByZWdhcmQsIGJ1dCB0aGUgbWFubmVyIGluIHdoaWNoIHRoZXkgZG9cbiAqIHRoZWlyIHJlZHVjdGlvbiBpcyB3aGF0IHNldHMgdGhlbSBhcGFydC5cbiAqXG4gKiBVc2luZyBgQXJyYXkucHJvdG90eXBlLm1hcGAgYXMgYW4gZXhhbXBsZSwgdGhlIHVzZXIgb2YgdGhlIGZ1bmN0aW9uIHByb3ZpZGVzXG4gKiBhIHRyYW5zZm9ybWF0aW9uIGZ1bmN0aW9uLiBUaGUgYG1hcGAgZnVuY3Rpb24gaXRlcmF0ZXMgb3ZlciB0aGUgaW5wdXQgYXJyYXksXG4gKiBwYXNzZXMgdGhlIGVsZW1lbnRzIHRocm91Z2ggdGhlIHByb3ZpZGVkIHRyYW5zZm9ybWF0aW9uIGZ1bmN0aW9uLCBhbmQgdGhlblxuICogcmVkdWNlcyB0aGUgcmVzdWx0cyBpbnRvIGEgbmV3IGFycmF5LiBJZiBgbWFwYCBpcyBjaGFpbmVkIHRvIGFub3RoZXJcbiAqIGZ1bmN0aW9uLCBsaWtlIGBBcnJheS5wcm90b3R5cGUuZmlsdGVyYCwgdGhlIHByb2Nlc3MgbmVlZHMgdG8gYmUgcmVwZWF0ZWQ6XG4gKiBpdGVyYXRlIGFnYWluLCBmaWx0ZXIgdmlhIGEgdXNlci1wcm92aWRlZCBmdW5jdGlvbiwgYW5kIHJlZHVjZSBhZ2Fpbi5cbiAqXG4gKiBUcmFuc2R1Y2VycyBhcmUgZGlmZmVyZW50LiBXaGVuIHVzaW5nIGEgdHJhbnNkdWNlciwgcmF0aGVyIHRoYW4gYVxuICogbWFuaXB1bGF0aW9uIGZ1bmN0aW9uIGJlaW5nIHByb3ZpZGVkIGFzIGluIGBtYXBgIG9yIGBmaWx0ZXJgLCBhICpyZWR1Y2VyXG4gKiBvYmplY3QqIGlzIHVzZWQuIChJdCdzIGFuIG9iamVjdCByYXRoZXIgdGhhbiBhIGZ1bmN0aW9uIGJlY2F1c2UgaXQgaGFzXG4gKiBtdWx0aXBsZSBmdW5jdGlvbnMsIGVhY2ggaW1wbGVtZW50ZWQgYXMgcHJvcGVydGllcyBvZiB0aGUgcmVkdWNlciBvYmplY3QuKVxuICogVGhpcyBtZWFucyB0aGF0IHRoZSB1c2VyIHByb3ZpZGVzIGluc3RydWN0aW9ucyBmb3IgYm90aCB0cmFuc2Zvcm1hdGlvbiAqYW5kKlxuICogcmVkdWN0aW9uLCByYXRoZXIgdGhhbiB0aGUgY29sbGVjdGlvbiBmdW5jdGlvbiBpdHNlbGYgYmVpbmcgcmVzcG9uc2libGUgZm9yXG4gKiBkb2luZyB0aGUgcmVkdWN0aW9uIG9uIGl0cyBvd24uXG4gKlxuICogVGhpcyBoYXMgdHdvIHZlcnkgYmVuZWZpY2lhbCBlZmZlY3RzLiBGaXJzdCwgaWYgYSB1c2VyIHdhbnRzIHRvIGZpbHRlciBhbmRcbiAqIHRoZW4gbWFwIHRoZSBlbGVtZW50cyBvZiBhIGNvbGxlY3Rpb24sIHRoZSB0cmFuc2R1Y2VyIGRvZXMgbm90IGhhdmUgdG8gcmVkdWNlXG4gKiB0aGUgZmlsdGVyZWQgZWxlbWVudHMgaW50byBhIGNvbGxlY3Rpb24ganVzdCB0byBoYXZlIHRoZSBtYXAgcGFydCB0ZWFyIHRoZW1cbiAqIGFwYXJ0IGFnYWluIGFuZCByZS1yZWR1Y2UgdGhlbSBsYXRlci4gVGhlIGZpbHRlciBwYXJ0IG9mIHRoZSB0cmFuc2R1Y2VyIGNhblxuICogcGFzcyBpdHMgZWxlbWVudHMgb25lIGF0IGEgdGltZSB0byB0aGUgbWFwIHBhcnQsIGFuZCByZWR1Y3Rpb24gY2FuIGhhcHBlblxuICogb25seSBhdCB0aGUgZW5kIGFmdGVyIHRoZSBlbGVtZW50cyBoYXZlIGJlZW4gYm90aCBmaWx0ZXJlZCAqYW5kKiBtYXBwZWQuXG4gKlxuICogU2Vjb25kbHksIHNpbmNlIHRoZSB1c2VyIGlzIHByb3ZpZGluZyB0aGUgcmVkdWN0aW9uIGluc3RydWN0aW9ucyBhbG9uZyB3aXRoXG4gKiB0aGUgdHJhbnNmb3JtYXRpb24gaW5zdHJ1Y3Rpb25zLCB0aGUgdHlwZSBvZiBjb2xsZWN0aW9uIHRoYXQgZ2V0cyByZWR1Y2VkXG4gKiBpbnRvIGRvZXMgbm90IGhhdmUgdG8gYmUgdGhlIHNhbWUgdHlwZSBhcyB0aGUgaW5wdXQgY29sbGVjdGlvbi4gWW91IGNvdWxkXG4gKiBwcm9jZXNzIGNoYXJhY3RlcnMgaW4gYSBzdHJpbmcgYW5kIGhhdmUgaXQgb3V0cHV0IGFzIGFuIGFycmF5LiBPciBwcm9jZXNzIHRoZVxuICogdmFsdWVzIGluIGFuIGl0ZXJhdG9yIGFuZCBnZXQgYSBwbGFpbiBvYmplY3QgYXMgb3V0cHV0LlxuICpcbiAqIFByYWN0aWNhbGx5IHNwZWFraW5nLCBtb3N0IG9mIHRoZSByZWR1Y2VyIG9iamVjdCBjcmVhdGlvbiBpcyBhYnN0cmFjdGVkIGF3YXksXG4gKiBzbyB1c2luZyB0cmFuc2R1Y2VycyBpcyBubyBtb3JlIGRpZmZpY3VsdCB0aGFuIGp1c3QgdXNpbmdcbiAqIGBBcnJheS5wcm90b3R5cGUubWFwYC4gVGhlIGB7QGxpbmsgbW9kdWxlOnhkY29yZS5yZWR1Y2V8cmVkdWNlfWAgZnVuY3Rpb25cbiAqIHByb3ZpZGVkIGJ5IHRoaXMgbGlicmFyeSBpcyBsb3cgbGV2ZWwsIHRob3VnaCwgYW5kIGRvZXMgbm90IGRvIGFueSBvZiB0aGF0XG4gKiBhYnN0cmFjdGluZyBvbiBpdHMgb3duLiBUaGUgZnVuY3Rpb25zIGZyb20gdGhlIHtAbGluayBtb2R1bGU6eGR1Y2V8eGR1Y2V9XG4gKiBtb2R1bGUsIG5hbWVseSBge0BsaW5rIG1vZHVsZTp4ZHVjZS50cmFuc2R1Y2V8dHJhbnNkdWNlfWAsXG4gKiBge0BsaW5rIG1vZHVsZTp4ZHVjZS5pbnRvfGludG99YCwgYW5kXG4gKiBge0BsaW5rIG1vZHVsZTp4ZHVjZS5zZXF1ZW5jZXxzZXF1ZW5jZX1gLCB0YWtlIGNhcmUgb2YgdGhhdCBhYnN0cmFjdGlvbiBzb1xuICogYHtAbGluayBtb2R1bGU6eGRjb3JlLnJlZHVjZXxyZWR1Y2V9YCBjYW4ganVzdCBoYW5kbGUgYWN0dWFsIHJlZHVjdGlvbi5cbiAqXG4gKiAjIyBQcm90b2NvbHNcbiAqXG4gKiBJbiBFUzIwMTUsIHRoZSBpZGVhIG9mIHByb3RvY29scyB3YXMgYWRkZWQgdG8gSmF2YVNjcmlwdC4gVGhpcyB3YXMgZG9uZSBhdFxuICogdGhlIGJlZ2lubmluZyB0byBwcm92aWRlIGxhbmd1YWdlLWxldmVsIHN1cHBvcnQgZm9yIHRoZSBuZXcgYGZvci4uLm9mYCBsb29wLlxuICogQXMgbG9uZyBhcyBhIHZhbHVlIHN1cHBvcnRlZCB0aGUgaXRlcmFibGUgcHJvdG9jb2wgYnkgaGF2aW5nIGEgcHJvcGVydHkgbmFtZWRcbiAqIGBTeW1ib2wuaXRlcmF0b3JgIHRoYXQgcmV0dXJucyBhbiBpdGVyYXRvciBmb3IgdGhhdCB2YWx1ZSB3aGVuIGl0J3MgY2FsbGVkLFxuICogdGhlbiBpdCBhdXRvbWF0aWNhbGx5IHF1YWxpZmllZCB0byBiZSB1c2VkIGluIGBmb3IuLi5vZmAuXG4gKlxuICogVGhpcyBtb2R1bGUgdXNlcyB0aGF0IGl0ZXJhYmxlIG1vZHVsZSBpbiB0aGUgc2FtZSB3YXkgdG8gdW5kZXJzdGFuZCBob3cgdG9cbiAqIGJyZWFrIGNvbGxlY3Rpb25zIGFwYXJ0LCBidXQgaXQgYWxzbyB1c2VzIHByb3RvY29scyB0byBsZXQgY29sbGVjdGlvbnMgaW5mb3JtXG4gKiB0aGUgZW5naW5lIGhvdyB0byByZWR1Y2UgYSBjb2xsZWN0aW9uIG9mIHRoYXQgdHlwZSBiYWNrIHRvZ2V0aGVyIGFnYWluLiBTaW5jZVxuICogdGhlcmUgYXJlIG5vIHN0YW5kYXJkIHByb3RvY29scyBmb3IgcmVkdWN0aW9uIHRoZSB3YXkgdGhlcmUgYXJlIGZvclxuICogaXRlcmF0aW9uLCB0aGlzIG1vZHVsZSBwcm92aWRlcyBjdXN0b20gcHJvdG9jb2xzIG9mIGl0cyBvd24uIFRoZXNlIGFyZSBhbHNvXG4gKiBzeW1ib2xzIHVzZWQgYXMgbmFtZXMgZm9yIHByb3BlcnRpZXMsIGJ1dCB0aGV5IGFyZSBzdG9yZWQgaW4gYW4gb2JqZWN0IGNhbGxlZFxuICogYHtAbGluayBtb2R1bGU6eGRjb3JlLnByb3RvY29sc3xwcm90b2NvbHN9YCB0byBiZSBsb29rZWQgdXAgYnkgc3RyaW5nIGtleTpcbiAqXG4gKiAqIGBwcm90b2NvbHMuaW5pdGBcbiAqICogYHByb3RvY29scy5zdGVwYFxuICogKiBgcHJvdG9jb2xzLmZpbmFsYFxuICogKiBgcHJvdG9jb2xzLmNvbXBsZXRlZGBcbiAqICogYHByb3RvY29scy52YWx1ZWBcbiAqXG4gKiBUaGUgbGFzdCB0d28gKGBjb21wbGV0ZWRgIGFuZCBgdmFsdWVgKSBhcmUgdXNlZCBpbnRlcm5hbGx5IGZvciBrZWVwaW5nIHRyYWNrXG4gKiBvZiB0aGUgcmVkdWN0aW9uIHN0YXR1cyBvZiBhIHZhbHVlIGFuZCBzaG91bGRuJ3QgbmVlZCB0byBiZSB1c2VkIGV4dGVybmFsbHkuXG4gKiBUaGUgZmlyc3QgdGhyZWUsIGhvd2V2ZXIsIGFyZSBob3cgdGhlIGVuZ2luZSBrbm93cyBob3cgdG8gcmVkdWNlIHRvIGEgY2VydGFpblxuICogY29sbGVjdGlvbiB0eXBlLlxuICpcbiAqIGBpbml0YCBpcyBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIG5ldywgZW1wdHkgdmVyc2lvbiBvZiB0aGF0IGNvbGxlY3Rpb24gdG9cbiAqIGJlIGJ1aWx0IHVwb24uIGBzdGVwYCBpcyBhIGZ1bmN0aW9uIHRoYXQgZ2V0cyBwYXNzZWQgYSBjb2xsZWN0aW9uIG9mIHRoYXRcbiAqIHR5cGUgcGx1cyBhIG5ldyB2YWx1ZSB0byBiZSBhZGRlZCB0byBpdCwgYW5kIHJldHVybnMgdGhlIGNvbGxlY3Rpb24gd2l0aCB0aGF0XG4gKiB2YWx1ZSBhZGRlZCB0byBpdCAoaS5lLiwgaXQncyBhIHN0YW5kYXJkIHJlZHVjdGlvbiBmdW5jdGlvbikuIGBmaW5hbGAgaXMgYVxuICogZnVuY3Rpb24gdGhhdCBnZXRzIHBhc3NlZCB0aGUgZnVsbHkgcmVkdWNlZCBuZXcgY29sbGVjdGlvbiBhbmQgcmV0dXJucyB3aGF0XG4gKiB0aGUgZmluYWwgb3V0cHV0IHNob3VsZCBiZSwgZ2l2aW5nIHRoZSBlbmdpbmUgb25lIGxhc3QgY2hhbmNlIHRvIG1vZGlmeSB0aGVcbiAqIGZpbmFsIHZhbHVlICh0aGlzICpub3JtYWxseSoganVzdCByZXR1cm5zIGl0cyBhcmd1bWVudCB1bm1vZGlmaWVkKS4gSWYgdGhlc2VcbiAqIHRocmVlIHByb3BlcnRpZXMgYXJlIGFkZGVkIHRvIGFuIG9iamVjdCwgdGhlbiB0aGlzIG1vZHVsZSB3aWxsIHJlY29nbml6ZSB0aGF0XG4gKiBvYmplY3QgYXMgcmVkdWNpYmxlIGFuZCBiZSBhYmxlIHRvIGNyZWF0ZSBhbmQgZmlsbCBvbmUuXG4gKlxuICogQXMgYW4gZXhhbXBsZSwgbGV0J3MgYWRkIHN1cHBvcnQgZm9yIHRyYW5zZHVjdGlvbiB0byB0aGUgYExpc3RgIGNvbGxlY3Rpb25cbiAqIGZyb20gW2ltbXV0YWJsZS5qc11bMV0uXG4gKlxuICogYGBgXG4gKiBpbXBvcnQgeyBwcm90b2NvbHMgYXMgcCB9IGZyb20gXCJAY2hhbmtvL3hkY29yZVwiO1xuICogaW1wb3J0IHsgTGlzdCB9IGZyb20gXCJpbW11dGFibGVcIjtcbiAqXG4gKiBMaXN0LnByb3RvdHlwZVtwLmluaXRdID0gKCkgPT4gTGlzdCgpLmFzTXV0YWJsZSgpO1xuICogTGlzdC5wcm90b3R5cGVbcC5zdGVwXSA9IChhY2MsIHZhbHVlKSA9PiBhY2MucHVzaCh2YWx1ZSk7XG4gKiBMaXN0LnByb3RvdHlwZVtwLmZpbmFsXSA9IHZhbHVlID0+IHZhbHVlLmFzSW1tdXRhYmxlKCk7XG4gKiBgYGBcbiAqXG4gKiBUaGUgYGluaXRgIGZ1bmN0aW9uIGhlcmUgcmV0dXJucyBhIG5ldywgZW1wdHkgbGlzdC4gVGhlIGBzdGVwYCBmdW5jdGlvblxuICogZGVzY3JpYmVzIGhvdyB0byBhZGQgYSB2YWx1ZSB0byB0aGF0IGxpc3QgKHRocm91Z2ggdGhlIGBwdXNoYCBtZXRob2QpLiBUaGVcbiAqIGBmaW5hbGAgZnVuY3Rpb24gcnVucyBhdCB0aGUgdmVyeSBlbmQgdG8gZGV0ZXJtaW5lIHRoZSBlbmQgdmFsdWUuIEluIHRoZVxuICogY2FzZSBvZiB0aGlzIGltbXV0YWJsZSBsaXN0LCB0aGUgYGluaXRgIGZ1bmN0aW9uIGFjdHVhbGx5IHJldHVybnMgYSBtdXRhYmxlXG4gKiBsaXN0IHRoYXQgd2UgY2FuIGFkZCB0byB3aXRoIGBzdGVwYCwgYW5kIHRoZW4gYGZpbmFsYCB0dXJucyB0aGF0IGludG8gYW5cbiAqIGltbXV0YWJsZSBsaXN0IHRvIGJlIHJldHVybmVkLiBUaGlzIGlzIGEgdGV4dGJvb2sgdXNlIG9mIGBmaW5hbGA7IG1vc3Qgb2YgdGhlXG4gKiB0aW1lLCBgZmluYWxgIHdpbGwgc2ltcGx5IHJldHVybiB0aGUgdmFsdWUgdGhhdCdzIHBhc3NlZCB0byBpdCwgdW5jaGFuZ2VkLlxuICpcbiAqIFdpdGggdGhlc2UgbGluZXMgb2YgY29kZSBpbiBwbGFjZSwgYWRkaW5nIHRoZSBwcm90b2NvbCBmdW5jdGlvbnMgdG8gYExpc3RgJ3NcbiAqIHByb3RvdHlwZSwgcmVkdWN0aW9uIHdpbGwganVzdCB3b3JrLlxuICpcbiAqIEl0IGlzIG5vdCBuZWNlc3NhcnkgdG8gcHJvdmlkZSB0aGVzZSBmdW5jdGlvbnMgZm9yIG5hdGl2ZSBhcnJheXMsIHN0cmluZ3MsXG4gKiBwbGFpbiBvYmplY3RzLCBvciBpdGVyYXRvcnMsIGFzIHN1cHBvcnQgZm9yIHRoZW0gaXMgYnVpbHQgaW4uXG4gKlxuICogWzFdOiBodHRwczovL2ltbXV0YWJsZS1qcy5naXRodWIuaW8vaW1tdXRhYmxlLWpzL1xuICpcbiAqIEBtb2R1bGUgeGRjb3JlXG4gKi9cblxuZXhwb3J0IHsgcHJvdG9jb2xzLCBpc0ltcGxlbWVudGVkIH0gZnJvbSBcIm1vZHVsZXMvcHJvdG9jb2xcIjtcbmV4cG9ydCB7IGl0ZXJhdG9yLCBpc0l0ZXJhYmxlIH0gZnJvbSBcIm1vZHVsZXMvaXRlcmF0aW9uXCI7XG5leHBvcnQge1xuICBjb21wbGV0ZSxcbiAgdW5jb21wbGV0ZSxcbiAgaXNDb21wbGV0ZWQsXG4gIGVuc3VyZUNvbXBsZXRlZCxcbiAgZW5zdXJlVW5jb21wbGV0ZWQsXG4gIHJlZHVjZSxcbiAgdG9GdW5jdGlvbixcbiAgdG9SZWR1Y2VyLFxuICB0b1RyYW5zZHVjZXJcbn0gZnJvbSBcIm1vZHVsZXMvcmVkdWN0aW9uXCI7XG5leHBvcnQge1xuICBpc0FycmF5LFxuICBpc0Z1bmN0aW9uLFxuICBpc0dlbmVyYXRvckZ1bmN0aW9uLFxuICBpc051bWJlcixcbiAgaXNPYmplY3QsXG4gIGlzU3RyaW5nXG59IGZyb20gXCJtb2R1bGVzL3V0aWxzXCI7XG5cbi8qKlxuICogQSBzdGFuZGFyZCBKYXZhU2NyaXB0IGl0ZXJhYmxlLiBUaGlzIG9iamVjdCBoYXMgYSBwcm9wZXJ0eSBuYW1lZFxuICogYFtTeW1ib2wuaXRlcmF0b3JdYCB3aGljaCBwcm92aWRlcyBhbiBvYmplY3QgdGhhdCBzYXRpc2ZpZXMgdGhlXG4gKiB7QGxpbmsgZXh0ZXJuYWw6SXRlcmF0b3J8SXRlcmF0b3J9IHByb3RvY29sLlxuICpcbiAqIEBleHRlcm5hbCBJdGVyYWJsZVxuICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9JdGVyYXRpb25fcHJvdG9jb2xzI1RoZV9pdGVyYWJsZV9wcm90b2NvbFxuICovXG5cbi8qKlxuICogQSBzdGFuZGFyZCBKYXZhU2NyaXB0IGl0ZXJhdG9yLiBUaGlzIG9iamVjdCBoYXMgYSBmdW5jdGlvbiBwcm9wZXJ0eSBuYW1lZFxuICogYG5leHRgIHRoYXQsIGVhY2ggdGltZSBpdCdzIGNhbGxlZCwgcmV0dXJucyBhIG5ldyBvYmplY3Qgd2l0aCB0d29cbiAqIHByb3BlcnRpZXM6IGB2YWx1ZWAsIHdoaWNoIGNvbnRhaW5zIHRoZSBpdGVyYXRvcidzIHZhbHVlIGF0IHRoYXQgcG9pbnQsIGFuZFxuICogYGRvbmVgLCB3aGljaCBpcyBgZmFsc2VgIHVudGlsIHRoZSBpdGVyYXRvciBoYXMgaGFkIGFsbCBvZiBpdHMgdmFsdWVzIHJlYWQuXG4gKlxuICogQGV4dGVybmFsIEl0ZXJhdG9yXG4gKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0l0ZXJhdGlvbl9wcm90b2NvbHMjVGhlX2l0ZXJhdG9yX3Byb3RvY29sXG4gKi9cblxuLyoqXG4gKiBBIGZ1bmN0aW9uIHRoYXQgY2FuIGhhdmUgYW4gaXRlcmF0b3IgY3JlYXRlZCBmb3IgaXQuXG4gKlxuICogQGNhbGxiYWNrIEl0ZXJhYmxlRnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGRjb3JlXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IGZvciB0aGUgaXRlcmF0aW9uLiBUaGlzIGlzIGAwYCB0aGUgZmlyc3RcbiAqICAgICB0aW1lIHRoZSBmdW5jdGlvbiBpcyBjYWxsZWQgYW5kIGluY3JlYXNlcyBieSAxIGZvciBlYWNoIGNhbGxcbiAqICAgICB0aGVyZWFmdGVyLlxuICogQHBhcmFtIHsqfSBsYXN0IFRoZSByZXR1cm4gdmFsdWUgb2YgdGhlIGZ1bmN0aW9uIHdoZW4gaXQgd2FzIGNhbGxlZCBvbiB0aGVcbiAqICAgICBwcmV2aW91cyBpdGVyYXRpb24uIElmIHRoaXMgaXMgdGhlIGZpcnN0IGNhbGwgdG8gdGhlIGZ1bmN0aW9uLCB0aGVuXG4gKiAgICAgdGhpcyB2YWx1ZSB3aWxsIGJlIGB1bmRlZmluZWRgLCBtZWFuaW5nIHRoYXQgdGhlIGZ1bmN0aW9uIGNhbiBzZXQgYVxuICogICAgIGRlZmF1bHQgdmFsdWUgZm9yIHRoYXQgZmlyc3QgcGFzcy5cbiAqIEByZXR1cm5zIHsqfSBUaGUgcmV0dXJuIHZhbHVlIG9mIHRoZSBmdW5jdGlvbiwgd2hpY2ggd2lsbCBiZSB0aGUgdmFsdWUgZm9yXG4gKiAgICAgdGhhdCBpdGVyYXRpb24uXG4gKi9cblxuLyoqXG4gKiBBIGZ1bmN0aW9uIHRoYXQsIHdoZW4gY2FsbGVkLCBwcm9kdWNlcyBhIG5ldywgZW1wdHkgY29sbGVjdGlvbiBvZiB3aGF0ZXZlclxuICogdHlwZSBpcyBiZWluZyB3b3JrZWQgd2l0aC5cbiAqXG4gKiBAY2FsbGJhY2sgSW5pdEZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkY29yZVxuICogQHJldHVybnMgeyp9IEEgbmV3LCBlbXB0eSByZXByZXNlbnRhdGl2ZSBvZiB0aGUgY29sbGVjdGlvbi5cbiAqL1xuXG4vKipcbiAqIEEgZnVuY3Rpb24gdGhhdCBhY2NlcHRzIGEgY29sbGVjdGlvbiBhbmQgYSBuZXcgZWxlbWVudCBvZiB0aGF0IGNvbGxlY3Rpb24gYW5kXG4gKiByZXR1cm5zIHRoZSBjb2xsZWN0aW9uIHdpdGggdGhlIG5ldyBlbGVtZW50IGFkZGVkIHRvIGl0LiBUaGlzIGlzIHVzZWQgdG9cbiAqIGJ1aWxkIHVwIGEgbmV3IGNvbGxlY3Rpb24gKHN0YXJ0aW5nIHdpdGggd2hhdGV2ZXJcbiAqIHtAbGluayBtb2R1bGU6eGRjb3JlLkluaXRGdW5jdGlvbnx0aGUgaW5pdCBmdW5jdGlvbn0gcmV0dXJucykgcGllY2UgYnkgcGllY2VcbiAqIGZyb20gaXRzIGVsZW1lbnRzLlxuICpcbiAqIFRoaXMgaXMgaW4gZXZlcnkgd2F5IGEgcmVkdWNlciBmdW5jdGlvbi4gVGhlIG5hbWUgJ3N0ZXAnIGNvbWVzIGZyb20gdGhlIGZhY3RcbiAqIHRoYXQgdGhlc2UgcmVkdWN0aW9uIGZ1bmN0aW9ucyByZWR1Y2Ugb25lIGVsZW1lbnQgYXQgYSB0aW1lLCBzdGVwIGJ5IHN0ZXAuXG4gKlxuICogSXQgaXMgdXAgdG8gdGhlIGltcGxlbWVudGF0aW9uIHdoZXRoZXIgdGhlIHJldHVybmVkIGNvbGxlY3Rpb24gaXMgYSBtb2RpZmllZFxuICogZm9ybSBvZiB0aGUgb3JpZ2luYWwgY29sbGVjdGlvbiBvciB3aGV0aGVyIGl0IGlzIGEgbmV3IGNvbGxlY3Rpb24gYWx0b2dldGhlci5cbiAqXG4gKiBAY2FsbGJhY2sgU3RlcEZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkY29yZVxuICogQHBhcmFtIHsqfSBhY2MgQSBjb2xsZWN0aW9uLCBwZXJoYXBzIHdpdGggc29tZSBtZW1iZXJzIGFscmVhZHkgYWRkZWQgdG8gaXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIEEgbmV3IGVsZW1lbnQgdG8gYmUgYWRkZWQgdG8gdGhhdCBjb2xsZWN0aW9uLlxuICogQHJldHVybnMgVGhlIG9yaWdpbmFsIGNvbGxlY3Rpb24gd2l0aCB0aGUgbmV3IHZhbHVlIGFkZGVkIHRvIGl0LlxuICovXG5cbi8qKlxuICogQSBmdW5jdGlvbiB0aGF0IGFjY2VwdHMgYSBmdWxseSByZWR1Y2VkIGNvbGxlY3Rpb24gYW5kIHJldHVybnMgdGhhdFxuICogY29sbGVjdGlvbiB3aXRoIGFueSBsYXN0LW1pbnV0ZSBtb2RpZmljYXRpb25zIHRoYXQgbWlnaHQgbmVlZCB0byBiZSBkb25lIHRvXG4gKiBpdC5cbiAqXG4gKiBJbiBtb3N0IGNhc2VzIHRoaXMgZnVuY3Rpb24gd2lsbCBzaW1wbHkgcmV0dXJuIGl0cyBhcmd1bWVudCwgdW5tb2RpZmllZCwgYnV0XG4gKiBpdCBkb2VzIGFmZm9yZCB0aGUgdHJhbnNkdWNlciBhbiBvcHBvcnR1bml0eSB0byBtYWtlIGFueSBmaW5hbCBtb2RpZmljYXRpb25zXG4gKiB0aGF0IG1pZ2h0IGJlIG5lY2Vzc2FyeSBiZWZvcmUgdGhlIHJlc3VsdCBpcyByZXR1cm5lZCBmcm9tIHRoZSB0cmFuc2R1Y3Rpb25cbiAqIHByb2Nlc3MuXG4gKlxuICogQGNhbGxiYWNrIEZpbmFsRnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGRjb3JlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSBmdWxseSByZWR1Y2VkIGNvbGxlY3Rpb24uXG4gKiBAcmV0dXJucyB7Kn0gVGhlIHJlZHVjZWQgY29sbGVjdGlvbiB3aXRoIGFueSBpbXBsZW1lbnRhdGlvbi1kZXBlbmRlbnQgY2hhbmdlc1xuICogICAgIHRoYXQgbWlnaHQgYmUgZGVlbWVkIG5lY2Vzc2FyeS5cbiAqL1xuXG4vKipcbiAqIEFuIG9iamVjdCB0aGF0IHByb3ZpZGVzIHRoZSBpbmZvcm1hdGlvbiBuZWNlc3NhcnkgdG8gYnVpbGQgYW5kIHBvcHVsYXRlIGEgbmV3XG4gKiBvYmplY3Qgb2YgYSByZWR1Y2libGUgdHlwZS4gVGhpcyBpbmZvcm1hdGlvbiBpcyB1c2VkIGJ5IHRoZSB0cmFuc2R1Y3Rpb25cbiAqIGVuZ2luZSB0byBjcmVhdGUgYSByZXN1bHQgZnJvbSBhIHJlZHVjdGlvbiB3aXRob3V0IGhhdmluZyB0byBoYXZlIGl0cyBvd25cbiAqIHR5cGUtc3BlY2lmaWMgY29kZTsgdGhlIGNyZWF0aW9uLCBwb3B1bGF0aW9uLCBhbmQgZmluYWxpemF0aW9uIG9mIHRoZSByZXN1bHRcbiAqIGFyZSBkZWxlZ2F0ZWQgaW5zdGVhZCB0byB0aGlzIHJlZHVjZXIgb2JqZWN0LlxuICpcbiAqIE5vdGUgdGhhdCBhIFwidHJhbnNkdWNlciBvYmplY3RcIiBoYXMgZXhhY3RseSB0aGUgc2FtZSBzdHJ1Y3R1cmUuIFRoZSBvbmx5XG4gKiBkaWZmZXJlbmNlIGlzIHRoYXQgdGhlIHN0ZXAgZnVuY3Rpb24gaW4gYSB0cmFuc2R1Y2VyIG9iamVjdCBtb2RpZmllcyB0aGVcbiAqIGVsZW1lbnRzIGJlZm9yZSBpdCByZWR1Y2VzIHRoZW0sIHdoaWxlIGEgcmVkdWNlciBvYmplY3Qgd2lsbCBub3QuIEFzIGFcbiAqIGNvcm9sbGFyeSwgZXZlcnkgcmVkdWNlciBvYmplY3QgaXMgYWxzbyBhIHRyYW5zZHVjZXIgb2JqZWN0LCBidXQgdGhlIGNvbnZlcnNlXG4gKiBpcyBub3QgdHJ1ZS5cbiAqXG4gKiBAdHlwZWRlZiBSZWR1Y2VyT2JqZWN0XG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkY29yZVxuICogQHByb3BlcnR5IHttb2R1bGU6eGRjb3JlLkluaXRGdW5jdGlvbn0gU3ltYm9sLmZvcihcInJlZHVjZXIvaW5pdFwiKSBBXG4gKiAgICAgZnVuY3Rpb24gdGhhdCBjYW4gY3JlYXRlIGEgbmV3LCBlbXB0eSBjb3B5IG9mIHRoZSByZWR1Y2libGUgdHlwZS5cbiAqIEBwcm9wZXJ0eSB7bW9kdWxlOnhkY29yZS5TdGVwRnVuY3Rpb259IFN5bWJvbC5mb3IoXCJyZWR1Y2VyL3N0ZXBcIikgQVxuICogICAgIGZ1bmN0aW9uIHRoYXQgY2FuIGFjY2VwdCBhIHZhbHVlIG9mIHRoZSByZWR1Y2libGUgdHlwZSBhbmQgYSBuZXcgZWxlbWVudFxuICogICAgIHRvIGJlIGFkZGVkIHRvIGl0IGFuZCByZXR1cm4gdGhlIHJlZHVjaWJsZSB3aXRoIHRoZSBuZXcgZWxlbWVudFxuICogICAgIGluY29ycG9yYXRlZC5cbiAqIEBwcm9wZXJ0eSB7bW9kdWxlOnhkY29yZS5GaW5hbEZ1bmN0aW9ufSBTeW1ib2wuZm9yKFwicmVkdWNlci9maW5hbFwiKSBBXG4gKiAgICAgZnVuY3Rpb24gdGhhdCBhY2NlcHRzIGEgdmFsdWUgb2YgdGhlIHJlZHVjaWJsZSB0eXBlIGFuZCByZXR1cm5zIHRoZSBzYW1lXG4gKiAgICAgdmFsdWUgd2l0aCBhbnkgZmluYWwgbW9kaWZpY2F0aW9ucyB0aGF0IG1pZ2h0IGJlIG5lY2Vzc2FyeSBmb3IgaXQuXG4gKi9cblxuLyoqXG4gKiBBIGZ1bmN0aW9uIHRoYXQgYWNjZXB0cyBhIHJlZHVjZXIgb2JqZWN0LCB3aGljaCBpdCB0aGVuIGNoYWlucyBhIHRyYW5zZHVjZXJcbiAqIG9iamVjdCB0by4gVGhpcyBpcyB0aGUgcHJpbWFyeSB3YXkgb2YgY3JlYXRpbmcgY29tcG9zZWQgdHJhbnNkdWNlciBjaGFpbnMuXG4gKlxuICogQSB0cmFuc2R1Y2VyIGZ1bmN0aW9uIGJhc2ljYWxseSBlbmNhcHN1bGF0ZXMgYSB0cmFuc2R1Y2VyIG9iamVjdCBhbmQgdGhlXG4gKiBhYmlsaXR5IHRvIGNoYWluIGl0IHRvIHdoYXRldmVyIHJlZHVjZXIgb2JqZWN0IGlzIHBhc3NlZCB0byBpdC5cbiAqXG4gKiBAY2FsbGJhY2sgVHJhbnNkdWNlckZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkY29yZVxuICogQHBhcmFtIHttb2R1bGU6eGRjb3JlLlJlZHVjZXJPYmplY3R9IHJlZHVjZXIgVGhlIHJlZHVjZXIgb2JqZWN0ICh3aGljaCBtYXlcbiAqICAgICBhbHNvIGJlIGEgdHJhbnNkdWNlciBvYmplY3QpIHRoYXQgaXMgdGhlIG5leHQgcmVkdWNlciBpbiB0aGUgY2hhaW4uXG4gKiBAcmV0dXJucyB7bW9kdWxlOnhkY29yZS5SZWR1Y2VyT2JqZWN0fSBBIHRyYW5zZHVjZXIgb2JqZWN0IGNvbnNpc3Rpbmcgb2Ygc29tZVxuICogICAgIG5ldyB0cmFuc2R1Y2VyIG9iamVjdCBjaGFpbmVkIHRvIHRoZSBzdXBwbGllZCByZWR1Y2VyIG9iamVjdC5cbiAqL1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG5cbi8qKlxuICogRnVuY3Rpb25zIHRvIGhlbHAgd2l0aCBpdGVyYXRpb24gb3ZlciBpdGVyYWJsZSBvYmplY3RzIGFuZCBwbGFpbiBvYmplY3RzLlxuICpcbiAqIEBtb2R1bGUgeGRjb3JlL2l0ZXJhdGlvblxuICogQHByaXZhdGVcbiAqL1xuXG5pbXBvcnQgeyBpc0ltcGxlbWVudGVkIH0gZnJvbSBcIm1vZHVsZXMvcHJvdG9jb2xcIjtcbmltcG9ydCB7IGlzRnVuY3Rpb24sIGlzT2JqZWN0LCBpc0dlbmVyYXRvckZ1bmN0aW9uIH0gZnJvbSBcIm1vZHVsZXMvdXRpbHNcIjtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGl0ZXJhdG9yIG92ZXIgYW4gb2JqZWN0LlxuICpcbiAqIERldGFpbHMgYWJvdXQgdGhpcyBmdW5jdGlvbiBhcmUgaW5jbHVkZWQgaW4gdGhlIGRvY3VtZW50YXRpb24gZm9yXG4gKiB7QGxpbmsgbW9kdWxlOnhkY29yZS5pdGVyYXRvcnxpdGVyYXRvcn0uXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IG9iaiBUaGUgb2JqZWN0IGJlaW5nIGl0ZXJhdGVkIG92ZXIuXG4gKiBAcmV0dXJucyB7ZXh0ZXJuYWw6SXRlcmF0b3J9IEFuIGl0ZXJhdG9yIG92ZXIgdGhlIHByb3BlcnRpZXMgb2YgYG9iamAuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBvYmplY3RJdGVyYXRvcihvYmopIHtcbiAgcmV0dXJuIChmdW5jdGlvbiooKSB7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gICAgbGV0IGluZGV4ID0gMDtcblxuICAgIHdoaWxlIChpbmRleCA8IGtleXMubGVuZ3RoKSB7XG4gICAgICBjb25zdCBrID0ga2V5c1tpbmRleCsrXTtcbiAgICAgIHlpZWxkIHsgW2tdOiBvYmpba10gfTtcbiAgICB9XG4gIH0pKCk7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBpdGVyYXRvciBvdmVyIGEgZnVuY3Rpb24uXG4gKlxuICogRGV0YWlscyBhYm91dCB0aGlzIGZ1bmN0aW9uIGFyZSBpbmNsdWRlZCBpbiB0aGUgZG9jdW1lbnRhdGlvbiBmb3JcbiAqIHtAbGluayBtb2R1bGU6eGRjb3JlLml0ZXJhdG9yfGl0ZXJhdG9yfS5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTp4ZGNvcmUuSXRlcmFibGVGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEByZXR1cm5zIHtleHRlcm5hbDpJdGVyYXRvcn0gQW4gaXRlcmF0b3Igb3ZlciB0aGUgcmV0dXJuIHZhbHVlcyBvZiBgZm5gLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZnVuY3Rpb25JdGVyYXRvcihmbikge1xuICByZXR1cm4gKGZ1bmN0aW9uKigpIHtcbiAgICBsZXQgY3VycmVudDtcbiAgICBsZXQgaW5kZXggPSAwO1xuXG4gICAgZm9yICg7Oykge1xuICAgICAgY3VycmVudCA9IGZuKGluZGV4KyssIGN1cnJlbnQpO1xuICAgICAgaWYgKHR5cGVvZiBjdXJyZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgeWllbGQgY3VycmVudDtcbiAgICB9XG4gIH0pKCk7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBpdGVyYXRvciBvdmVyIHRoZSBwcm92aWRlZCB2YWx1ZS4gVGhlIGZvcm0gb2YgdGhlIGl0ZXJhdGlvblxuICogZGVwZW5kcyBvbiB3aGF0IGtpbmQgb2YgdmFsdWUgaXMgYmVpbmcgaXRlcmF0ZWQgb3Zlci5cbiAqXG4gKiBJZiB0aGUgdmFsdWUgaXMgYSBjb2xsZWN0aW9uIGltcGxlbWVudGluZyB0aGUgW2l0ZXJhYmxlIHByb3RvY29sXVsxXSAoYXJyYXlzLFxuICogc3RyaW5ncywgZ2VuZXJhdG9ycywgb3IgYSBjdXN0b20gb2JqZWN0IHN1cHBvcnRpbmcgdGhlIHByb3RvY29sKSB0aGVuIHRoZVxuICogcHJvZHVjZWQgaXRlcmF0b3Igd2lsbCBiZSBhcyBleHBlY3RlZDogYW4gb2JqZWN0IHRoYXQgaW1wbGVtZW50cyB0aGVcbiAqIFtpdGVyYXRvciBwcm90b2NvbF1bMl0gYnkgcHJvdmlkaW5nIGEgYG5leHRgIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBlYWNoXG4gKiBjb2xsZWN0aW9uIHZhbHVlIGluIHR1cm4uXG4gKlxuICogYGBgXG4gKiBjb25zdCBpdGVyID0gaXRlcmF0b3IoWzEsIDIsIDNdKTtcbiAqIGNvbnNvbGUubG9nKGl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiAxXG4gKiBjb25zb2xlLmxvZyhpdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4gMlxuICogY29uc29sZS5sb2coaXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IDNcbiAqIGNvbnNvbGUubG9nKGl0ZXIubmV4dCgpLmRvbmUpOyAgICAvLyAtPiB0cnVlXG4gKiBgYGBcbiAqXG4gKiBTcGVjaWFsIHN1cHBvcnQgaXMgcHJvdmlkZWQgZm9yIHR3byB0eXBlcyB0aGF0IGFyZSBub3Qgbm9ybWFsbHkgaXRlcmFibGU6XG4gKiBvYmplY3RzIGFuZCBmdW5jdGlvbnMuXG4gKlxuICogT2JqZWN0cyByZXN1bHQgaW4gYW4gaXRlcmF0b3IgdGhhdCBwcm9kdWNlcyBhIHNpbmdsZS1wcm9wZXJ0eSBvYmplY3QgZm9yXG4gKiBldmVyeSBrZXkvdmFsdWUgcGFpciBpbiB0aGUgc3VwcGxpZWQgb2JqZWN0LiBUaGUgW29yZGVyIG9mIGl0ZXJhdGlvbl1bM10gaXNcbiAqIHRoZSBzYW1lIGFzIGl0IGlzIGZvciBvYmplY3RzIHBvc3QtRVMyMDE1OlxuICpcbiAqIDEuIFN0cmluZyBrZXlzIHRoYXQgYXJlIGludGVnZXIgaW5kaWNlcyBpbiBhc2NlbmRpbmcgbnVtZXJpY2FsIG9yZGVyXG4gKiAyLiBBbGwgb3RoZXIgc3RyaW5nIGtleXMgaW4gdGhlIG9yZGVyIGluIHdoaWNoIHRoZXkgd2VyZSBhZGRlZCB0byB0aGUgb2JqZWN0XG4gKiAzLiBBbGwgc3ltYm9sIGtleXMgaW4gdGhlIG9yZGVyIGluIHdoaWNoIHRoZXkgd2VyZSBhZGRlZCB0byB0aGUgb2JqZWN0XG4gKlxuICogYGBgXG4gKiBjb25zdCBvYmogPSB7XG4gKiAgIFtTeW1ib2woXCJmaXJzdFwiKV06IHRydWUsXG4gKiAgIDAyOiB0cnVlLFxuICogICAxMDogdHJ1ZSxcbiAqICAgMDE6IHRydWUsXG4gKiAgIDI6IHRydWUsXG4gKiAgIFtTeW1ib2woXCJzZWNvbmRcIildOiB0cnVlXG4gKiB9O1xuICogY29uc3QgaXRlciA9IGl0ZXJhdG9yKG9iaik7XG4gKiBjb25zb2xlLmxvZyhpdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4geyAnMic6IHRydWUgfVxuICogY29uc29sZS5sb2coaXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IHsgJzEwJzogdHJ1ZSB9XG4gKiBjb25zb2xlLmxvZyhpdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4geyAnMDInOiB0cnVlIH1cbiAqIGNvbnNvbGUubG9nKGl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiB7ICcwMSc6IHRydWUgfVxuICogY29uc29sZS5sb2coaXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IHsgW1N5bWJvbCgnZmlyc3QnKV06IHRydWUgfVxuICogY29uc29sZS5sb2coaXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IHsgW1N5bWJvbCgnc2Vjb25kJyldOiB0cnVlIH1cbiAqIGNvbnNvbGUubG9nKGl0ZXIubmV4dCgpLmRvbmUpOyAgICAvLyAtPiB0cnVlXG4gKiBgYGBcbiAqXG4gKiBGdW5jdGlvbnMgYXJlIHJ1biBlYWNoIHRpbWUgdGhlIGl0ZXJhdG9yJ3MgYG5leHRgIG1ldGhvZCBpcyBjYWxsZWQsIGFuZCB0aGVcbiAqIHJldHVybiB2YWx1ZSBvZiB0aGUgZnVuY3Rpb24gaXMgc3VwcGxpZWQgYXMgdGhlIGl0ZXJhdG9yJ3MgdmFsdWUgYXQgdGhhdFxuICogcG9pbnQuXG4gKlxuICogVGhpcyBmdW5jdGlvbiBpcyBwcm92aWRlZCB0d28gYXJndW1lbnRzOiB0aGUgemVyby1iYXNlZCBpbmRleCBvZiB0aGF0XG4gKiBpdGVyYXRpb24sIGFuZCB0aGUgdmFsdWUgcHJvZHVjZWQgYnkgdGhlIGxhc3QgaW52b2NhdGlvbiBvZiB0aGUgaXRlcmF0b3IuIFRoZVxuICogbGFzdCB2YWx1ZSBpcyBgdW5kZWZpbmVkYCBvbiB0aGUgZmlyc3QgcGFzcywgYnV0IGEgZGVmYXVsdCBwYXJhbWV0ZXIgb24gdGhlXG4gKiBmdW5jdGlvbiBjYW4gZGVmaW5lIHRoZSBmaXJzdCBwYXNzIHZhbHVlIHRvIGJlIHdoYXRldmVyIGlzIG5lZWRlZC5cbiAqXG4gKiBgYGBcbiAqIGNvbnN0IGZuID0gKGluZGV4LCBsYXN0ID0gMSkgPT4gbGFzdCAqIChpbmRleCArIDEpO1xuICogY29uc3QgaXRlciA9IGl0ZXJhdG9yKGZuKTtcbiAqIGNvbnNvbGUubG9nKGl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiAxXG4gKiBjb25zb2xlLmxvZyhpdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4gMlxuICogY29uc29sZS5sb2coaXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IDZcbiAqIGNvbnNvbGUubG9nKGl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiAyNFxuICogY29uc29sZS5sb2coaXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IDEyMFxuICogYGBgXG4gKlxuICogSWYgdGhlIGlucHV0IHZhbHVlIGlzIG5laXRoZXIgaXRlcmFibGUsIG9iamVjdCwgb3IgZnVuY3Rpb24sIHRoZW4gdGhlIHJlc3VsdFxuICogd2lsbCBiZSBgbnVsbGAuXG4gKlxuICogWzFdOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9JdGVyYXRpb25fcHJvdG9jb2xzI1RoZV9pdGVyYWJsZV9wcm90b2NvbFxuICogWzJdOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9JdGVyYXRpb25fcHJvdG9jb2xzI1RoZV9pdGVyYXRvcl9wcm90b2NvbFxuICogWzNdOiBodHRwczovLzJhbGl0eS5jb20vMjAxNS8xMC9wcm9wZXJ0eS10cmF2ZXJzYWwtb3JkZXItZXM2Lmh0bWxcbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkY29yZVxuICogQHBhcmFtIHsob2JqZWN0fG1vZHVsZTp4ZGNvcmUuSXRlcmFibGVGdW5jdGlvbnxleHRlcm5hbDpJdGVyYWJsZSl9IHZhbHVlXG4gKiAgICAgVGhlIHZhbHVlIHRvIGNyZWF0ZSBhbiBpdGVyYXRvciBvdmVyLlxuICogQHJldHVybnMge2V4dGVybmFsOkl0ZXJhdG9yfSBBbiBpdGVyYXRvciBvdmVyIGB2YWx1ZWAuXG4gKi9cbmZ1bmN0aW9uIGl0ZXJhdG9yKHZhbHVlKSB7XG4gIHN3aXRjaCAodHJ1ZSkge1xuICAgIGNhc2UgaXNGdW5jdGlvbih2YWx1ZVtTeW1ib2wuaXRlcmF0b3JdKTpcbiAgICBjYXNlIGlzR2VuZXJhdG9yRnVuY3Rpb24odmFsdWVbU3ltYm9sLml0ZXJhdG9yXSk6XG4gICAgICByZXR1cm4gdmFsdWVbU3ltYm9sLml0ZXJhdG9yXSgpO1xuICAgIGNhc2UgaXNGdW5jdGlvbih2YWx1ZSk6XG4gICAgICByZXR1cm4gZnVuY3Rpb25JdGVyYXRvcih2YWx1ZSk7XG4gICAgY2FzZSBpc09iamVjdCh2YWx1ZSk6XG4gICAgICByZXR1cm4gb2JqZWN0SXRlcmF0b3IodmFsdWUpO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgcGFzc2VkIG9iamVjdCBpcyBpdGVyYWJsZSwgaW4gdGVybXMgb2Ygd2hhdCAnaXRlcmFibGUnXG4gKiBtZWFucyB0byB0aGlzIGxpYnJhcnkuIEluIG90aGVyIHdvcmRzLCB2YWx1ZXMgaW1wbGVtZW50aW5nIHRoZSBgaXRlcmFibGVgXG4gKiBwcm90b2NvbCBhbmQgcGxhaW4gb2JqZWN0cyByZXR1cm4gYHRydWVgLCB3aGlsZSBldmVyeXRoaW5nIGVsc2UgcmV0dXJuc1xuICogYGZhbHNlYC4gVGhpcyBkb2VzIG5vdCByZXR1cm4gYHRydWVgIGZvciBmdW5jdGlvbnMgZXZlbiB0aG91Z2hcbiAqIHtAbGluayBtb2R1bGU6eGRjb3JlLml0ZXJhdG9yfGl0ZXJhdG9yfSBjYW4gcHJvZHVjZSBhbiBpdGVyYXRvciBmb3IgdGhlbSxcbiAqIGJlY2F1c2Ugbm90IGFsbCBmdW5jdGlvbnMgd29yayB3ZWxsIHdpdGhcbiAqIHtAbGluayBtb2R1bGU6eGRjb3JlLml0ZXJhdG9yfGl0ZXJhdG9yfS5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkY29yZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gdGVzdCBmb3IgaXRlcmFiaWxpdHkuXG4gKiBAcmV0dXJuIHtib29sZWFufSBFaXRoZXIgYHRydWVgIGlmIHRoZSB2YWx1ZSBpcyBpdGVyYWJsZVxuICogICAgIChge0BsaW5rIG1vZHVsZTp4ZGNvcmUuaXRlcmF0b3J8aXRlcmF0b3J9YCB3aWxsIHJldHVybiBhbiBpdGVyYXRvciBmb3JcbiAqICAgICBpdCkgb3IgYGZhbHNlYCBpZiBpdCBpcyBub3QuXG4gKi9cbmZ1bmN0aW9uIGlzSXRlcmFibGUodmFsdWUpIHtcbiAgcmV0dXJuIGlzSW1wbGVtZW50ZWQodmFsdWUsIFwiaXRlcmF0b3JcIikgfHwgaXNPYmplY3QodmFsdWUpO1xufVxuXG5leHBvcnQgeyBpdGVyYXRvciwgaXNJdGVyYWJsZSB9O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG5cbi8qKlxuICogUHJvdG9jb2xzIGZvciBpdGVyYXRpb24gYW5kIHJlZHVjdGlvbi5cbiAqXG4gKiBAbW9kdWxlIHhkY29yZS9wcm90b2NvbFxuICogQHByaXZhdGVcbiAqL1xuXG5pbXBvcnQgeyBpc0Z1bmN0aW9uLCBpc0dlbmVyYXRvckZ1bmN0aW9uIH0gZnJvbSBcIm1vZHVsZXMvdXRpbHNcIjtcblxuLyoqXG4gKiBUaGUgbWFwcGluZyBvZiBwcm90b2NvbCBuYW1lcyB0byB0aGVpciByZXNwZWN0aXZlIHByb3BlcnR5IGtleSBuYW1lcy4gVGhpc1xuICogbWFwcGluZyBtYWtlcyBpdCBlYXNpZXIgdG8gZGVhbCB3aXRoIHRoZXNlIHByb3RvY29scyBhcyB0aGV5IGNhbiBiZSBsb29rZWQgdXBcbiAqIGJ5IHN0cmluZyBuYW1lIHJhdGhlciB0aGFuIGJ5IG1vcmUgZGlmZmljdWx0LXRvLXdvcmstd2l0aCBzeW1ib2xzLlxuICpcbiAqIEB0eXBlZGVmIHtvYmplY3R9IFByb3RvY29sTWFwXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkY29yZVxuICogQHByb3BlcnR5IHtTeW1ib2x9IGluaXQgVGhlIGByZWR1Y2VyL2luaXRgIHByb3RvY29sLiBUaGlzIGlzIHVzZWQgdG8gbWFya1xuICogICAgIGZ1bmN0aW9ucyB0aGF0IGluaXRpYWxpemUgYSB0YXJnZXQgY29sbGVjdGlvbiBiZWZvcmUgYWRkaW5nIGl0ZW1zIHRvIGl0LlxuICogQHByb3BlcnR5IHtTeW1ib2x9IHN0ZXAgVGhlIGByZWR1Y2VyL3N0ZXBgIHByb3RvY29sLiBUaGlzIGlzIHVzZWQgdG8gbWFya1xuICogICAgIGZ1bmN0aW9ucyB0aGF0IGFyZSB1c2VkIGluIHRoZSByZWR1Y2VyJ3Mgc3RlcCBwcm9jZXNzLCB3aGVyZSBvYmplY3RzIGFyZVxuICogICAgIGFkZGVkIHRvIHRoZSB0YXJnZXQgY29sbGVjdGlvbiBvbmUgYXQgYSB0aW1lLlxuICogQHByb3BlcnR5IHtTeW1ib2x9IGZpbmFsIFRoZSBgcmVkdWNlci9maW5hbGAgcHJvdG9jb2wuIFRoaXMgaXMgdXNlZCB0byBtYXJrXG4gKiAgICAgZnVuY3Rpb25zIHRoYXQgdGFrZSB0aGUgZmluYWwgcmVzdWx0IG9mIHRoZSBzdGVwIHByb2Nlc3MgYW5kIHJldHVybiB0aGVcbiAqICAgICBmaW5hbCBmb3JtIHRvIGJlIG91dHB1dC4gVGhpcyBpcyBvcHRpb25hbDsgaWYgdGhlIHJlZHVjZXIgZG9lcyBub3Qgd2FudFxuICogICAgIHRvIHRyYW5zZm9ybSB0aGUgZmluYWwgcmVzdWx0LCBpdCBzaG91bGQganVzdCByZXR1cm4gdGhlIHJlc3VsdCBvZiBpdHNcbiAqICAgICBjaGFpbmVkIHJlZHVjZXIncyBgZmluYWxgIGZ1bmN0aW9uLlxuICogQHByb3BlcnR5IHtTeW1ib2x9IHJlZHVjZWQgVGhlIGByZWR1Y2VyL2NvbXBsZXRlZGAgcHJvdG9jb2wuIFRoZSBwcmVzZW5jZSBvZlxuICogICAgIHRoaXMga2V5IG9uIGFuIG9iamVjdCBpbmRpY2F0ZXMgdGhhdCBpdHMgdHJhbnNmb3JtYXRpb24gaGFzIGJlZW5cbiAqICAgICBjb21wbGV0ZWQuIEl0IGlzIHVzZWQgaW50ZXJuYWxseSB0byBtYXJrIGNvbGxlY3Rpb25zIHdob3NlXG4gKiAgICAgdHJhbnNmb3JtYXRpb25zIGNvbmNsdWRlIGJlZm9yZSBldmVyeSBvYmplY3QgaXMgaXRlcmF0ZWQgb3ZlciAoYXMgaW5cbiAqICAgICBge0BsaW5rIG1vZHVsZTp4ZHVjZS50YWtlfWAgdHJhbnNkdWNlcnMuKSBJdCBpcyBvZiBsaXR0bGUgdXNlIGJleW9uZFxuICogICAgIHRyYW5zZHVjZXIgYXV0aG9yaW5nLlxuICogQHByb3BlcnR5IHtTeW1ib2x9IHZhbHVlIFRoZSBgcmVkdWNlci92YWx1ZWAgcHJvdG9jb2wuIFRoaXMgaXMgdXNlZFxuICogICAgIGludGVybmFsbHkgdG8gbWFyayBwcm9wZXJ0aWVzIHRoYXQgY29udGFpbiB0aGUgdmFsdWUgb2YgYSBjb21wbGV0ZWRcbiAqICAgICB0cmFuc2Zvcm1hdGlvbi4gSXQgaXMgb2YgbGl0dGxlIHVzZSBiZXlvbmQgdHJhbnNkdWNlciBhdXRob3JpbmcuXG4gKi9cblxuLyoqXG4gKiBUaGUgbWFwcGluZyBvZiBwcm90b2NvbCBuYW1lcyB0byB0aGVpciByZXNwZWN0aXZlIHByb3BlcnR5IGtleSBuYW1lcy5cbiAqXG4gKiBAdHlwZSB7bW9kdWxlOnhkY29yZS5Qcm90b2NvbE1hcH1cbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGRjb3JlXG4gKi9cbmNvbnN0IHByb3RvY29scyA9IE9iamVjdC5jcmVhdGUobnVsbCwge1xuICBpbml0OiB7XG4gICAgdmFsdWU6IFN5bWJvbC5mb3IoXCJyZWR1Y2VyL2luaXRcIilcbiAgfSxcbiAgc3RlcDoge1xuICAgIHZhbHVlOiBTeW1ib2wuZm9yKFwicmVkdWNlci9zdGVwXCIpXG4gIH0sXG4gIGZpbmFsOiB7XG4gICAgdmFsdWU6IFN5bWJvbC5mb3IoXCJyZWR1Y2VyL2ZpbmFsXCIpXG4gIH0sXG4gIGNvbXBsZXRlZDoge1xuICAgIHZhbHVlOiBTeW1ib2wuZm9yKFwicmVkdWNlci9jb21wbGV0ZWRcIilcbiAgfSxcbiAgdmFsdWU6IHtcbiAgICB2YWx1ZTogU3ltYm9sLmZvcihcInJlZHVjZXIvdmFsdWVcIilcbiAgfVxufSk7XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGEgcGFydGljdWxhciBwcm90b2NvbCBpcyBpbXBsZW1lbnRlZCBieSBhIHZhbHVlLiBUaGVcbiAqIHBvc3NpYmxlIHZhbHVlcyBmb3IgYHByb3RvY29sYCBhcmUgdGhlIGZvbGxvd2luZywgcmVwcmVzZW50aW5nIHRoZSB0d29cbiAqIGJ1aWx0LWluIGl0ZXJhdG9yIHByb3RvY29scyBhbmQgdGhlIGZpdmUgY3VzdG9tIHRyYW5zZHVjZXIgcHJvdG9jb2xzOlxuICpcbiAqICogYGl0ZXJhdG9yYFxuICogKiBgYXN5bmNJdHJlcmF0b3JgXG4gKiAqIGBpbml0YFxuICogKiBgc3RlcGBcbiAqICogYGZpbmFsYFxuICogKiBgY29tcGxldGVkYFxuICogKiBgdmFsdWVgXG4gKlxuICogQW55IG9mIHRoZXNlIHdpbGwgcmVzdWx0IGluIGB0cnVlYCBpZiB0aGUgb2JqZWN0IGluIHF1ZXN0aW9uIGhhcyBhIHByb3BlcnR5XG4gKiB0aGF0IG1hdGNoZXMgdGhlIG9uZSBuZWNlc3NhcnkgdG8gaW1wbGVtZW50IHRoZSBwcm90b2NvbC4gRnVydGhlciwgYW55IG9mXG4gKiB0aGUgcHJvcGVydGllcyBvdGhlciB0aGFuIGBjb21wbGV0ZWRgIGFuZCBgc3RlcGAgbXVzdCBiZSBmdW5jdGlvbnMuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZGNvcmVcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmogVGhlIG9iamVjdCB0byBjaGVjayBmb3IgcHJvdG9jb2wgaW1wbGVtZW50YXRpb24uXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJvdG9jb2wgVGhlIG5hbWUgb2YgdGhlIHByb3RvY29sIHRvIGNoZWNrIGZvci5cbiAqIEByZXR1cm5zIHtib29sZWFufSBFaXRoZXIgYHRydWVgIGlmIHRoZSBvYmplY3Qgc3VwcG9ydHMgdGhlIG5hbWVkIHByb3RvY29sIG9yXG4gKiAgICAgYGZhbHNlYCBpZiBpdCBkb2VzIG5vdC5cbiAqL1xuZnVuY3Rpb24gaXNJbXBsZW1lbnRlZChvYmosIHByb3RvY29sKSB7XG4gIGlmIChvYmogPT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN3aXRjaCAocHJvdG9jb2wpIHtcbiAgICBjYXNlIFwiaXRlcmF0b3JcIjpcbiAgICAgIHJldHVybiAoXG4gICAgICAgIGlzRnVuY3Rpb24ob2JqW1N5bWJvbC5pdGVyYXRvcl0pIHx8XG4gICAgICAgIGlzR2VuZXJhdG9yRnVuY3Rpb24ob2JqW1N5bWJvbC5pdGVyYXRvcl0pXG4gICAgICApO1xuICAgIGNhc2UgXCJhc3luY0l0ZXJhdG9yXCI6XG4gICAgICByZXR1cm4gaXNHZW5lcmF0b3JGdW5jdGlvbihvYmpbU3ltYm9sLmFzeW5jSXRlcmF0b3JdKTtcbiAgICBjYXNlIFwiY29tcGxldGVkXCI6XG4gICAgY2FzZSBcInZhbHVlXCI6XG4gICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmopLmluY2x1ZGVzKHByb3RvY29sc1twcm90b2NvbF0pO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gaXNGdW5jdGlvbihvYmpbcHJvdG9jb2xzW3Byb3RvY29sXV0pO1xuICB9XG59XG5cbmV4cG9ydCB7IHByb3RvY29scywgaXNJbXBsZW1lbnRlZCB9O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG5cbi8qKlxuICogQSBzZXQgb2YgZnVuY3Rpb25zIHJlbGF0ZWQgdG8gdGhlIHByb2R1Y2luZyByZWR1Y2VyIG9iamVjdHMsIG1hcmtpbmdcbiAqIGNvbXBsZXRlZCBvYmplY3RzLCBhbmQgcGVyZm9ybWluZyBnZW5lcmFsIHJlZHVjdGlvbiBvcGVyYXRpb25zLlxuICpcbiAqIEBtb2R1bGUgeGRjb3JlL3JlZHVjdGlvblxuICogQHByaXZhdGVcbiAqL1xuXG5pbXBvcnQgeyBpc0ltcGxlbWVudGVkLCBwcm90b2NvbHMgYXMgcCB9IGZyb20gXCJtb2R1bGVzL3Byb3RvY29sXCI7XG5pbXBvcnQgeyBpc1N0cmluZywgaXNBcnJheSwgaXNPYmplY3QsIGlzRnVuY3Rpb24gfSBmcm9tIFwibW9kdWxlcy91dGlsc1wiO1xuaW1wb3J0IHsgaXRlcmF0b3IgfSBmcm9tIFwibW9kdWxlcy9pdGVyYXRpb25cIjtcblxuLyoqXG4gKiBSZXR1cm5zIGFuIGluaXQgZnVuY3Rpb24gZm9yIGEgY29sbGVjdGlvbi4gVGhpcyBpcyBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhXG4gKiBuZXcsIGVtcHR5IGluc3RhbmNlIG9mIHRoZSBjb2xsZWN0aW9uIGluIHF1ZXN0aW9uLiBJZiB0aGUgY29sbGVjdGlvbiBkb2Vzbid0XG4gKiBzdXBwb3J0IHJlZHVjdGlvbiwgYG51bGxgIGlzIHJldHVybmVkLiBUaGlzIG1ha2VzIGNvbmRpdGlvbmFscyBhIGJpdCBlYXNpZXJcbiAqIHRvIHdvcmsgd2l0aC5cbiAqXG4gKiBJbiBvcmRlciB0byBzdXBwb3J0IHRoZSBjb252ZXJzaW9uIG9mIGZ1bmN0aW9ucyBpbnRvIHJlZHVjZXJzLCBmdW5jdGlvblxuICogc3VwcG9ydCBpcyBhbHNvIHByb3ZpZGVkLlxuICpcbiAqIEBwYXJhbSB7KG9iamVjdHxmdW5jdGlvbnxleHRlcm5hbDpJdGVyYWJsZSl9IGNvbGxlY3Rpb24gQSBjb2xsZWN0aW9uIHRvXG4gKiAgICAgY3JlYXRlIGFuIGluaXQgZnVuY3Rpb24gZm9yLiBUaGlzIGNhbiBiZSBhbnl0aGluZyB0aGF0IHN1cHBvcnRzIHRoZVxuICogICAgIGl0ZXJhdGFibGUgcHJvdG9jb2wsIGEgcGxhaW4gb2JqZWN0LCBvciBhIGZ1bmN0aW9uLlxuICogQHJldHVybiB7bW9kdWxlOnhkY29yZS5Jbml0RnVuY3Rpb259IEEgZnVuY3Rpb24gdGhhdCwgd2hlbiBjYWxsZWQsIHJldHVybnMgYW5cbiAqICAgICBpbml0aWFsIHZlcnNpb24gb2YgdGhlIHByb3ZpZGVkIGNvbGxlY3Rpb24uIElmIHRoZSBwcm92aWRlZCBjb2xsZWN0aW9uIGlzXG4gKiAgICAgbm90IGl0ZXJhYmxlLCB0aGVuIGBudWxsYCBpcyByZXR1cm5lZC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGluaXQoY29sbGVjdGlvbikge1xuICBzd2l0Y2ggKHRydWUpIHtcbiAgICBjYXNlIGlzSW1wbGVtZW50ZWQoY29sbGVjdGlvbiwgXCJpbml0XCIpOlxuICAgICAgcmV0dXJuIGNvbGxlY3Rpb25bcC5pbml0XTtcbiAgICBjYXNlIGlzU3RyaW5nKGNvbGxlY3Rpb24pOlxuICAgICAgcmV0dXJuICgpID0+IFwiXCI7XG4gICAgY2FzZSBpc0FycmF5KGNvbGxlY3Rpb24pOlxuICAgICAgcmV0dXJuICgpID0+IFtdO1xuICAgIGNhc2UgaXNPYmplY3QoY29sbGVjdGlvbik6XG4gICAgICByZXR1cm4gKCkgPT4gKHt9KTtcbiAgICBjYXNlIGlzRnVuY3Rpb24oY29sbGVjdGlvbik6XG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICB0aHJvdyBFcnJvcihcImluaXQgbm90IGF2YWlsYWJsZVwiKTtcbiAgICAgIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbi8qKlxuICogUmV0dXJucyBhIHN0ZXAgZnVuY3Rpb24gZm9yIGEgY29sbGVjdGlvbi4gVGhpcyBpcyBhIGZ1bmN0aW9uIHRoYXQgdGFrZXMgYW5cbiAqIGFjY3VtdWxhdG9yIGFuZCBhIHZhbHVlIGFuZCByZXR1cm5zIHRoZSByZXN1bHQgb2YgcmVkdWNpbmcgdGhlIHZhbHVlIGludG8gdGhlXG4gKiBhY2N1bXVsYXRvci4gSWYgdGhlIGNvbGxlY3Rpb24gZG9lc24ndCBzdXBwb3J0IHJlZHVjdGlvbiwgYG51bGxgIGlzIHJldHVybmVkLlxuICogVGhlIHJldHVybmVkIGZ1bmN0aW9uIGl0c2VsZiBzaW1wbHkgcmVkdWNlcyB0aGUgaW5wdXQgaW50byB0aGUgdGFyZ2V0XG4gKiBjb2xsZWN0aW9uIHdpdGhvdXQgbW9kaWZ5aW5nIGl0LlxuICpcbiAqIEluIG9yZGVyIHRvIHN1cHBvcnQgdGhlIGNvbnZlcnNpb24gb2YgZnVuY3Rpb25zIGludG8gcmVkdWNlcnMsIGZ1bmN0aW9uXG4gKiBzdXBwb3J0IGlzIGFsc28gcHJvdmlkZWQuXG4gKlxuICogQHBhcmFtIHsob2JqZWN0fGZ1bmN0aW9ufGV4dGVybmFsOkl0ZXJhYmxlKX19IGNvbGxlY3Rpb24gQSBjb2xsZWN0aW9uIHRvXG4gKiAgICAgY3JlYXRlIGEgc3RlcCBmdW5jdGlvbiBmb3IuIFRoaXMgY2FuIGJlIGFueXRoaW5nIHRoYXQgc3VwcG9ydHMgdGhlXG4gKiAgICAgaXRlcmF0aW9uIHByb3RvY29sLCBhIHBsYWluIG9iamVjdCwgb3IgYSBmdW5jdGlvbi5cbiAqIEByZXR1cm4ge21vZHVsZTp4ZGNvcmUuU3RlcEZ1bmN0aW9ufSBBIHJlZHVjdGlvbiBmdW5jdGlvbiBmb3IgdGhlIHByb3ZpZGVkXG4gKiAgICAgY29sbGVjdGlvbiB0aGF0IHNpbXBseSBhZGRzIGFuIGVsZW1lbnQgdG8gdGhlIHRhcmdldCBjb2xsZWN0aW9uIHdpdGhvdXRcbiAqICAgICBtb2RpZnlpbmcgaXQuIElmIHRoZSBwcm92aWRlZCBjb2xsZWN0aW9uIGlzIG5vdCBpdGVyYWJsZSwgYG51bGxgIGlzXG4gKiAgICAgcmV0dXJuZWQuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBzdGVwKGNvbGxlY3Rpb24pIHtcbiAgc3dpdGNoICh0cnVlKSB7XG4gICAgY2FzZSBpc0ltcGxlbWVudGVkKGNvbGxlY3Rpb24sIFwic3RlcFwiKTpcbiAgICAgIHJldHVybiBjb2xsZWN0aW9uW3Auc3RlcF07XG5cbiAgICBjYXNlIGlzU3RyaW5nKGNvbGxlY3Rpb24pOlxuICAgICAgcmV0dXJuIChhY2MsIHZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnN0IHYgPSBpc09iamVjdCh2YWx1ZSkgPyB2YWx1ZVtPYmplY3Qua2V5cyh2YWx1ZSlbMF1dIDogdmFsdWU7XG4gICAgICAgIHJldHVybiBhY2MgKyB2O1xuICAgICAgfTtcblxuICAgIGNhc2UgaXNBcnJheShjb2xsZWN0aW9uKTpcbiAgICAgIHJldHVybiAoYWNjLCB2YWx1ZSkgPT4ge1xuICAgICAgICBhY2MucHVzaCh2YWx1ZSk7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9O1xuXG4gICAgY2FzZSBpc09iamVjdChjb2xsZWN0aW9uKTpcbiAgICAgIHJldHVybiAoYWNjLCB2YWx1ZSkgPT4ge1xuICAgICAgICBsZXQgdiA9IHZhbHVlO1xuXG4gICAgICAgIGlmICghaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICAgICAgLy8gaWYgdGhlIGlucHV0IGlzbid0IGFuIG9iamVjdCwgdHVybiBpdCBpbnRvIGFuIG9iamVjdCB3aXRoIGFcbiAgICAgICAgICAvLyBudW1lcmljYWwga2V5IG9uZSBncmVhdGVyIHRoYW4gdGhlIG1heCBrZXkgYWxyZWFkeSBpbiB0aGVcbiAgICAgICAgICAvLyBhY2N1bXVsYXRvclxuICAgICAgICAgIGNvbnN0IG1heCA9IE9iamVjdC5rZXlzKGFjYykucmVkdWNlKChhLCBiKSA9PiBNYXRoLm1heChhLCBiKSwgLTEpO1xuICAgICAgICAgIHYgPSB7IFttYXggKyAxXTogdmFsdWUgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGsgPSBPYmplY3Qua2V5cyh2KVswXTtcbiAgICAgICAgYWNjW2tdID0gdltrXTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH07XG5cbiAgICBjYXNlIGlzRnVuY3Rpb24oY29sbGVjdGlvbik6XG4gICAgICByZXR1cm4gKGFjYywgdmFsdWUpID0+IGNvbGxlY3Rpb24oYWNjLCB2YWx1ZSk7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgZmluYWwgZnVuY3Rpb24gZm9yIGEgY29sbGVjdGlvbi4gVGhpcyBpcyBhIGZ1bmN0aW9uIHRoYXQgcGVyZm9ybXNcbiAqIGFueSBmaW5hbCBwcm9jZXNzaW5nIHRoYXQgc2hvdWxkIGJlIGRvbmUgb24gdGhlIHJlc3VsdCBvZiBhIHJlZHVjdGlvbi4gSWYgdGhlXG4gKiBjb2xsZWN0aW9uIGRvZXNuJ3Qgc3VwcG9ydCByZWR1Y3Rpb24sIGBudWxsYCBpcyByZXR1cm5lZC5cbiAqXG4gKiBJbiBvcmRlciB0byBzdXBwb3J0IHRoZSBjb252ZXJzaW9uIG9mIGZ1bmN0aW9ucyBpbnRvIHJlZHVjZXJzLCBmdW5jdGlvblxuICogc3VwcG9ydCBpcyBhbHNvIHByb3ZpZGVkLlxuICpcbiAqIEBwYXJhbSB7KG9iamVjdHxmdW5jdGlvbnxleHRlcm5hbDpJdGVyYWJsZSl9fSBjb2xsZWN0aW9uIEEgY29sbGVjdGlvbiB0b1xuICogICAgIGNyZWF0ZSBhIHN0ZXAgZnVuY3Rpb24gZm9yLiBUaGlzIGNhbiBiZSBhbnl0aGluZyB0aGF0IHN1cHBvcnRzIHRoZVxuICogICAgIGl0ZXJhdGlvbiBwcm90b2NvbCwgYSBwbGFpbiBvYmplY3QsIG9yIGEgZnVuY3Rpb24uXG4gKiBAcmV0dXJuIHttb2R1bGU6eGRjb3JlLkZpbmFsRnVuY3Rpb259IEEgZnVuY3Rpb24gdGhhdCwgd2hlbiBnaXZlbiBhIHJlZHVjZWRcbiAqICAgICBjb2xsZWN0aW9uLCBwcm9kdWNlcyB0aGUgZmluYWwgb3V0cHV0LiBJZiB0aGUgcHJvdmlkZWQgY29sbGVjdGlvbiBpcyBub3RcbiAqICAgICBpdGVyYWJsZSwgYG51bGxgIHdpbGwgYmUgcmV0dXJuZWQuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBmaW5hbChjb2xsZWN0aW9uKSB7XG4gIHN3aXRjaCAodHJ1ZSkge1xuICAgIGNhc2UgaXNJbXBsZW1lbnRlZChjb2xsZWN0aW9uLCBcImZpbmFsXCIpOlxuICAgICAgcmV0dXJuIGNvbGxlY3Rpb25bcC5maW5hbF07XG4gICAgY2FzZSBpc1N0cmluZyhjb2xsZWN0aW9uKTpcbiAgICBjYXNlIGlzQXJyYXkoY29sbGVjdGlvbik6XG4gICAgY2FzZSBpc09iamVjdChjb2xsZWN0aW9uKTpcbiAgICBjYXNlIGlzRnVuY3Rpb24oY29sbGVjdGlvbik6XG4gICAgICByZXR1cm4gdmFsdWUgPT4gdmFsdWU7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHJlZHVjZXIgb2JqZWN0IGZyb20gYSBmdW5jdGlvbiBvciBmcm9tIGEgcmVkdWNpYmxlIHR5cGUgKGFycmF5LFxuICogb2JqZWN0LCBzdHJpbmcsIG9yIG9iamVjdCBpbXBsZW1lbnRpbmcgdGhlIHJlZHVjZXIgcHJvdG9jb2xzKS5cbiAqXG4gKiBUbyBjcmVhdGUgYSByZWR1Y2VyIGZvciBhcnJheXMsIG9iamVjdHMsIG9yIHN0cmluZ3MsIHNpbXBseSBwYXNzIGFuIGVtcHR5XG4gKiB2ZXJzaW9uIG9mIHRoYXQgY29sbGVjdGlvbiB0byB0aGlzIGZ1bmN0aW9uIChlLmcuLCBgdG9SZWR1Y2VyKFtdKWApLlxuICpcbiAqIFRoZSBub3RhYmxlIHVzZSBmb3IgdGhpcyBmdW5jdGlvbiB0aG91Z2ggaXMgdG8gdHVybiBhIHJlZHVjdGlvbiBmdW5jdGlvbiBpbnRvXG4gKiBhIHJlZHVjZXIgb2JqZWN0LiBUaGUgZnVuY3Rpb24gaXMgYSBmdW5jdGlvbiBvZiB0d28gcGFyYW1ldGVycywgYW5cbiAqIGFjY3VtdWxhdG9yIGFuZCBhIHZhbHVlLCBhbmQgcmV0dXJucyB0aGUgYWNjdW11bGF0b3Igd2l0aCB0aGUgdmFsdWUgaW4gaXQuXG4gKiBUaGlzIGlzIGV4YWN0bHkgdGhlIHNhbWUga2luZCBvZiBmdW5jdGlvbiB0aGF0IGlzIHBhc3NlZCB0byByZWR1Y3Rpb25cbiAqIGZ1bmN0aW9ucyBsaWtlIEphdmFTY3JpcHQncyBgQXJyYXkucHJvdG90eXBlLnJlZHVjZWAgYW5kIExvZGFzaCdzIGBfLnJlZHVjZWAuXG4gKlxuICogTm90ZSBpbiBwYXJ0aWN1bGFyIHRoYXQgdGhlIG91dHB1dCBvZiB0aGlzIHJlZHVjZXIgZG9lcyBub3QgbmVlZCB0byBiZSBhXG4gKiBjb2xsZWN0aW9uLiBJdCBjYW4gYmUgYW55dGhpbmcuIFdoaWxlIHRyYW5zZHVjaW5nIG5vcm1hbGx5IGludm9sdmVzXG4gKiB0cmFuc2Zvcm1pbmcgb25lIGNvbGxlY3Rpb24gaW50byBhbm90aGVyLCBpdCBuZWVkIG5vdCBiZSBzby4gRm9yIGV4YW1wbGUsXG4gKiBoZXJlIGlzIGEgcmVkdWNlciB0aGF0IHdpbGwgcmVzdWx0IGluIHN1bW1pbmcgb2YgdGhlIGNvbGxlY3Rpb24gdmFsdWVzLlxuICpcbiAqIGBgYFxuICogaW1wb3J0IHsgdG9SZWR1Y2VyLCByZWR1Y2UgfSBmcm9tIFwiQGNoYW5rby94ZGNvcmVcIjtcbiAqXG4gKiBjb25zdCBzdW1SZWR1Y2VyID0gdG9SZWR1Y2VyKChhY2MsIGlucHV0KSA9PiBhY2MgKyBpbnB1dCk7XG4gKiBjb25zdCBzdW0gPSByZWR1Y2UoWzEsIDIsIDMsIDQsIDVdLCBzdW1SZWR1Y2VyLCAwKTtcbiAqIGNvbnNvbGUubG9nKHN1bSk7ICAgLy8gLT4gMTVcbiAqIGBgYFxuICpcbiAqIFRoaXMgY2FuIGJlIGNvbWJpbmVkIHdpdGggdHJhbnNkdWNlcnMgYXMgd2VsbCwgYXMgaW4gdGhpcyBjYWxjdWxhdGlvbiBvZiB0aGVcbiAqIHN1bSBvZiB0aGUgKnNxdWFyZXMqIG9mIHRoZSBjb2xsZWN0aW9uIHZhbHVlcy5cbiAqXG4gKiBgYGBcbiAqIGltcG9ydCB7IHRvUmVkdWNlciB9IGZyb20gXCJAY2hhbmtvL3hkY29yZVwiO1xuICogaW1wb3J0IHsgdHJhbnNkdWNlLCBtYXAgfSBmcm9tIFwiQGNoYW5rby94ZHVjZVwiO1xuICpcbiAqIGNvbnN0IHN1bVJlZHVjZXIgPSB0b1JlZHVjZXIoKGFjYywgaW5wdXQpID0+IGFjYyArIGlucHV0KTtcbiAqIGNvbnN0IHN1bSA9IHRyYW5zZHVjZShbMSwgMiwgMywgNCwgNV0sIG1hcCh4ID0+IHggKiB4KSwgc3VtUmVkdWNlciwgMCk7XG4gKiBjb25zb2xlLmxvZyhzdW0pOyAgIC8vIC0+IDU1XG4gKiBgYGBcbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkY29yZVxuICogQHBhcmFtIHsoYXJyYXl8b2JqZWN0fGZ1bmN0aW9ufG1vZHVsZTp4ZGNvcmUuUmVkdWNlck9iamVjdCl9IGNvbGxlY3Rpb24gQVxuICogICAgIHJlZHVjaWJsZSBjb2xsZWN0aW9uIG9yIGEgcmVkdWNlciBmdW5jdGlvbi5cbiAqIEByZXR1cm4ge21vZHVsZTp4ZGNvcmUuUmVkdWNlck9iamVjdH0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgcHJvdG9jb2xcbiAqICAgICBwcm9wZXJ0aWVzIGZvciBgaW5pdGAsIGBzdGVwYCwgYW5kIGBmaW5hbGAuIFRoaXMgb2JqZWN0IGlzIHN1aXRhYmxlIGZvclxuICogICAgIHVzZSBhcyBhIHJlZHVjZXIgb2JqZWN0IChvbmUgcHJvdmlkZWQgdG9cbiAqICAgICBge0BsaW5rIG1vZHVsZTp4ZGNvcmUucmVkdWNlfHJlZHVjZX1gKS4gSWYgdGhlIHByb3ZpZGVkIGNvbGxlY3Rpb24gaXMgbm90XG4gKiAgICAgcmVkdWNpYmxlLCBhbGwgb2YgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBvYmplY3Qgd2lsbCBiZSBgbnVsbGAuXG4gKi9cbmZ1bmN0aW9uIHRvUmVkdWNlcihjb2xsZWN0aW9uKSB7XG4gIHJldHVybiBPYmplY3QuZnJlZXplKHtcbiAgICBbcC5pbml0XTogaW5pdChjb2xsZWN0aW9uKSxcbiAgICBbcC5zdGVwXTogc3RlcChjb2xsZWN0aW9uKSxcbiAgICBbcC5maW5hbF06IGZpbmFsKGNvbGxlY3Rpb24pXG4gIH0pO1xufVxuXG4vKipcbiAqIEEgcmVkdWNlciBvYmplY3QgZm9yIGFycmF5cy5cbiAqXG4gKiBAdHlwZSB7bW9kdWxlOnhkY29yZS5SZWR1Y2VyT2JqZWN0fVxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgQVJSQVlfUkVEVUNFUiA9IHRvUmVkdWNlcihbXSk7XG5cbi8qKlxuICogQSByZWR1Y2VyIG9iamVjdCBmb3Igb2JqZWN0cy5cbiAqXG4gKiBAdHlwZSB7bW9kdWxlOnhkY29yZS5SZWR1Y2VyT2JqZWN0fVxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgT0JKRUNUX1JFRFVDRVIgPSB0b1JlZHVjZXIoe30pO1xuXG4vKipcbiAqIEEgcmVkdWNlciBvYmplY3QgZm9yIHN0cmluZ3MuXG4gKlxuICogQHR5cGUge21vZHVsZTp4ZGNvcmUuUmVkdWNlck9iamVjdH1cbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IFNUUklOR19SRURVQ0VSID0gdG9SZWR1Y2VyKFwiXCIpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSB0cmFuc2R1Y2VyIG9iamVjdCBmcm9tIGEgZnVuY3Rpb24gYW5kIGEgcmVkdWNlciBvYmplY3QuXG4gKlxuICogVGhpcyBpcyBzaW1pbGFyIHRvIHtAbGluayBtb2R1bGU6eGRjb3JlLnRvUmVkdWNlcnx0b1JlZHVjZXJ9IGV4Y2VwdCBpbiB0d29cbiAqIHJlc3BlY3RzOlxuICpcbiAqIDEuIEl0IG9ubHkgYWNjZXB0cyBhIHJlZHVjZXIgZnVuY3Rpb24sIG5vdCBhIHJlZHVjZXIgb2JqZWN0XG4gKiAyLiBJdCBjaGFpbnMgdG8gYW5vdGhlciByZWR1Y2VyIG9iamVjdFxuICpcbiAqIFRoaXMgZnVuY3Rpb24gYXBwbGllcyB0aGUgZ2l2ZW4gZnVuY3Rpb24gYXMgdGhlIGBzdGVwYCBmdW5jdGlvbiBvZiB0aGVcbiAqIHJldHVybmVkIHRyYW5zZHVjZXIsIGFuZCB0aGUgYGluaXRgIGFuZCBgcmVzdWx0YCBmdW5jdGlvbnMgc2ltcGx5IGNhbGwgdGhlXG4gKiBzYW1lIGZ1bmN0aW9ucyBpbiB0aGUgbmV4dCByZWR1Y2VyIG9iamVjdC4gVGhpcyBpcyBwcmVjaXNlbHkgd2hhdCAqbW9zdCpcbiAqIHRyYW5zZHVjZXJzIHdhbnQ7IGBpbml0YCBhbmQgYHJlc3VsdGAgZnVuY3Rpb25zIGFyZSBub3JtYWxseSBoYW5kbGVkIGJ5IHRoZVxuICogcmVkdWNlciBhdCB0aGUgZW5kIG9mIHRoZSB0cmFuc2R1Y2VyIGNoYWluLiBJbiB0aGUgcmFyZSBjYXNlIHdoZW4gYW4gYGluaXRgXG4gKiBvciBgcmVzdWx0YCBmdW5jdGlvbiBtdXN0IGRvIG1vcmUgdGhhbiBzaW1wbHkgY2hhaW4sIHRoaXMgZnVuY3Rpb24gd2lsbCBub3RcbiAqIHdvcmsuIEdlbmVyYWxseSB0aGUgdHJhbnNkdWNlciBvYmplY3QgaXMgY3JlYXRlZCBtYW51YWxseSBpbiB0aGF0IGNhc2UuXG4gKlxuICogVGhpcyBmdW5jdGlvbiBkb2VzIG5vdCBhdXRvbWF0aWNhbGx5IGNoYWluIHRoZSBgc3RlcGAgZnVuY3Rpb24gdG8gdGhlIG5leHRcbiAqIG9uZSBkb3duIHRoZSBsaW5lLCBhcyB0aGF0IGNhbiBiZSBkb25lIGluIGFueSBudW1iZXIgb2YgZGlmZmVyZW50IHdheXMuIFRodXNcbiAqIHRoZSBmdW5jdGlvbiBpdHNlbGYgc2hvdWxkIGNhbGwgdGhlIGBzdGVwYCBmdW5jdGlvbiBpbiBgcmVkdWNlcmAgaW4gd2hhdGV2ZXJcbiAqIHdheSBpcyBhcHByb3ByaWF0ZS5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkY29yZVxuICogQHBhcmFtIHttb2R1bGU6eGRjb3JlLlN0ZXBGdW5jdGlvbn0gZm4gVGhlIHN0ZXAgZnVuY3Rpb24gZm9yIHRoZSB0cmFuc2R1Y2VyLlxuICogQHBhcmFtIHttb2R1bGU6eGRjb3JlLlJlZHVjZXJPYmplY3R9IHJlZHVjZXIgVGhlIG5leHQgdHJhbnNkdWNlciBvYmplY3QgaW5cbiAqICAgICB0aGUgY2hhaW4uXG4gKiBAcmV0dXJucyB7bW9kdWxlOnhkY29yZS5SZWR1Y2VyT2JqZWN0fSBBIG5ldyB0cmFuc2R1Y2VyLCBjaGFpbmluZyB0aGVcbiAqICAgICBzdXBwbGllZCBmdW5jdGlvbiB0byB0aGUgc3VwcGxpZWQgdHJhbnNkdWNlci5cbiAqL1xuZnVuY3Rpb24gdG9UcmFuc2R1Y2VyKGZuLCByZWR1Y2VyKSB7XG4gIHJldHVybiB7XG4gICAgW3AuaW5pdF0oKSB7XG4gICAgICByZXR1cm4gcmVkdWNlcltwLmluaXRdKCk7XG4gICAgfSxcblxuICAgIFtwLnN0ZXBdOiBmbixcblxuICAgIFtwLmZpbmFsXSh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHJlZHVjZXJbcC5maW5hbF0odmFsdWUpO1xuICAgIH1cbiAgfTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgcmVkdWNlciBmdW5jdGlvbiBmcm9tIGEgdHJhbnNkdWNlciBmdW5jdGlvbiBhbmQgYSByZWR1Y2VyLlxuICpcbiAqIFRoaXMgcHJvZHVjZXMgYSBmdW5jdGlvbiB0aGF0J3Mgc3VpdGFibGUgZm9yIGJlaW5nIHBhc3NlZCBpbnRvIG90aGVyXG4gKiBsaWJyYXJpZXMnIHJlZHVjZSBmdW5jdGlvbnMsIHN1Y2ggYXMgSmF2YVNjcmlwdCdzIGBBcnJheS5wcm90b3R5cGUucmVkdWNlYCBvclxuICogTG9kYXNoJ3MgYF8ucmVkdWNlYC4gSXQgcmVxdWlyZXMgYm90aCBhIHRyYW5zZHVjZXIgKmFuZCogYSByZWR1Y2VyIGJlY2F1c2VcbiAqIHJlZHVjdGlvbiBmdW5jdGlvbnMgZm9yIHRob3NlIGxpYnJhcmllcyBtdXN0IGtub3cgaG93IHRvIHJlZHVjZSBhcyB3ZWxsIGFzXG4gKiBob3cgdG8gdHJhbnNmb3JtLiBUaGUgcmVkdWNlciBjYW4gYmUgYSBzdGFuZGFyZCByZWR1Y2VyIG9iamVjdCBsaWtlIHRoZSBvbmVzXG4gKiBzZW50IHRvIGB7QGxpbmsgbW9kdWxlOnhkY29yZS5yZWR1Y2V8cmVkdWNlfWAsIG9yIGl0IGNhbiBiZSBhIHBsYWluIGZ1bmN0aW9uXG4gKiB0aGF0IHRha2VzIHR3byBwYXJhbWV0ZXJzIGFuZCByZXR1cm5zIHRoZSByZXN1bHQgb2YgcmVkdWNpbmcgdGhlIHNlY29uZFxuICogcGFyYW1ldGVyIGludG8gdGhlIGZpcnN0IChpLmUuLCBhIHJlZHVjZXIgZnVuY3Rpb24pLlxuICpcbiAqIElmIHRoZXJlIGlzIG5vIG5lZWQgZm9yIGEgdHJhbnNmb3JtYXRpb24sIHRoZW4gcGFzcyBpbiB0aGVcbiAqIGB7QGxpbmsgbW9kdWxlOnhkdWNlLmlkZW50aXR5fGlkZW50aXR5fWAgdHJhbnNkdWNlci5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkY29yZVxuICogQHBhcmFtIHttb2R1bGU6eGRjb3JlLlRyYW5zZHVjZXJGdW5jdGlvbn0gdHJhbnNkdWNlciBBIHRyYW5zZHVjZXIgZnVuY3Rpb25cbiAqICAgICB0aGF0IHdyYXBzIGEgdHJhbnNkdWNlciBvYmplY3Qgd2hvc2UgYHN0ZXBgIGZ1bmN0aW9uIHdpbGwgYmUgdXNlZCBhcyBhXG4gKiAgICAgcmVkdWNlciBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7KG1vZHVsZTp4ZGNvcmUuU3RlcEZ1bmN0aW9ufG1vZHVsZTp4ZGNvcmUuUmVkdWNlck9iamVjdCl9IHJlZHVjZXIgQVxuICogICAgIHJlZHVjZXIgdGhhdCBrbm93cyBob3cgdG8gcmVkdWNlIHZhbHVlcyBpbnRvIGFuIG91dHB1dCBjb2xsZWN0aW9uLiBUaGlzXG4gKiAgICAgY2FuIGVpdGhlciBiZSBhIHJlZHVjaW5nIGZ1bmN0aW9uIG9yIGEgcmVkdWNlciBvYmplY3Qgd2hvc2UgYHN0ZXBgXG4gKiAgICAgZnVuY3Rpb24ga25vd3MgaG93IHRvIHBlcmZvcm0gdGhpcyByZWR1Y3Rpb24uXG4gKiBAcmV0dXJucyB7bW9kdWxlOnhkY29yZS5TdGVwRnVuY3Rpb259IEEgcmVkdWNlciBmdW5jdGlvbiB0aGF0IHdpbGwgdHJhbnNmb3JtXG4gKiAgICAgZWxlbWVudHMgdmlhIHRoZSB0cmFuc2R1Y2VyIGZ1bmN0aW9uIGFuZCB0aGVuIHJlZHVjZSB0aGVtIGludG8gd2hhdGV2ZXJcbiAqICAgICBraW5kIG9mIGNvbGxlY3Rpb24gdGhlIHJlZHVjZXIgaW1wbGVtZW50cy5cbiAqL1xuZnVuY3Rpb24gdG9GdW5jdGlvbih0cmFuc2R1Y2VyLCByZWR1Y2VyKSB7XG4gIGNvbnN0IHIgPSB0eXBlb2YgcmVkdWNlciA9PT0gXCJmdW5jdGlvblwiID8gdG9SZWR1Y2VyKHJlZHVjZXIpIDogcmVkdWNlcjtcbiAgY29uc3QgcmVzdWx0ID0gdHJhbnNkdWNlcihyKTtcbiAgcmV0dXJuIHJlc3VsdFtwLnN0ZXBdLmJpbmQocmVzdWx0KTtcbn1cblxuLyoqXG4gKiBBIGNvbXBsZXRlZCB2YWx1ZS4gVGhpcyBpcyBhIHdyYXBwZXIgYXJvdW5kIHRoZSBhY3R1YWwgdmFsdWUsIHdoaWNoIGlzXG4gKiByZXRhaW5lZCBhcyBvbmUgb2YgdGhlIHByb3BlcnRpZXMsIGFsb25nIHdpdGggYSBtYXJrZXIgcHJvcGVydHkgdG8gc2hvdyB0aGF0XG4gKiB0aGlzIGlzIGEgd3JhcHBlZCB2YWx1ZS5cbiAqXG4gKiBAdHlwZWRlZiBDb21wbGV0ZWRWYWx1ZVxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZGNvcmVcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gU3ltYm9sLmZvcihcImNvbXBsZXRlZFwiKSBBIG1hcmtlciBwcm9wZXJ0eSB0byBpbmRpY2F0ZVxuICogICAgIHRoYXQgdGhpcyBpcywgaW4gZmFjdCwgYSB3cmFwcGVkIGNvbXBsZXRlZCB2YWx1ZS5cbiAqIEBwcm9wZXJ0eSB7Kn0gU3ltYm9sLmZvcihcInZhbHVlXCIpIFRoZSB3cmFwcGVkIHZhbHVlLlxuICovXG5cbi8qKlxuICogTWFya3MgYSB2YWx1ZSBhcyBjb21wbGV0ZS5cbiAqXG4gKiBUaGlzIGlzIGRvbmUgYnkgd3JhcHBpbmcgdGhlIHZhbHVlLiBUaGlzIG1lYW5zIHRocmVlIHRoaW5nczogZmlyc3QsIGFcbiAqIGNvbXBsZXRlIG9iamVjdCBtYXkgYmUgbWFya2VkIGFzIGNvbXBsZXRlIGFnYWluOyBzZWNvbmQsIGEgY29tcGxldGUgdmFsdWVcbiAqIGlzbid0IHVzYWJsZSB3aXRob3V0IGJlaW5nIHVuY29tcGxldGVkIGZpcnN0OyBhbmQgdGhpcmQgYW55IHR5cGUgb2YgdmFsdWVcbiAqIChpbmNsdWRpbmcgYHVuZGVmaW5lZGApIG1heSBiZSBtYXJrZWQgYXMgY29tcGxldGUuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZGNvcmVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGJlIGNvbXBsZXRlZC5cbiAqIEByZXR1cm4ge21vZHVsZTp4ZGNvcmUuQ29tcGxldGVkVmFsdWV9IEEgY29tcGxldGVkIHZlcnNpb24gb2YgdGhlIHByb3ZpZGVkXG4gKiAgICAgdmFsdWUuIFRoaXMgZWZmZWN0IGlzIGFjaGlldmVkIGJ5IHdyYXBwaW5nIHRoZSB2YWx1ZSBpbiBhIG1hcmtlciBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIGNvbXBsZXRlKHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgW3AuY29tcGxldGVkXTogdHJ1ZSxcbiAgICBbcC52YWx1ZV06IHZhbHVlXG4gIH07XG59XG5cbi8qKlxuICogUmVtb3ZlcyB0aGUgY29tcGxldGUgc3RhdHVzIGZyb20gYSBjb21wbGV0ZWQgdmFsdWUuXG4gKlxuICogVGhpcyBmdW5jdGlvbiBpcyBpbnRlbmRlZCB0byBiZSB1c2VkIHdoZW4gaXQncyBjZXJ0YWluIHRoYXQgYSB2YWx1ZSBpc1xuICogYWxyZWFkeSBtYXJrZWQgYXMgY29tcGxldGUuIElmIGl0IGlzIG5vdCwgYHVuZGVmaW5lZGAgd2lsbCBiZSByZXR1cm5lZFxuICogaW5zdGVhZCBvZiB0aGUgdmFsdWUuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZGNvcmVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGJlIHVuY29tcGxldGVkLlxuICogQHJldHVybiB7Kn0gQW4gdW5jb21wbGV0ZWQgdmVyc2lvbiBvZiB0aGUgcHJvdmlkZWQgdmFsdWUuIElmIHRoZSB2YWx1ZSB3YXNcbiAqICAgICBub3QgY29tcGxldGUgaW4gdGhlIGZpcnN0IHBsYWNlLCBgdW5kZWZpbmVkYCB3aWxsIGJlIHJldHVybmVkIGluc3RlYWQuXG4gKi9cbmZ1bmN0aW9uIHVuY29tcGxldGUodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlPy5bcC52YWx1ZV07XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGEgdmFsdWUgaXMgbWFya2VkIGFzIGNvbXBsZXRlLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGRjb3JlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0IGZvciBpdHMgY29tcGxldGUgc3RhdHVzLlxuICogQHJldHVybiB7Ym9vbGVhbn0gRWl0aGVyIGB0cnVlYCBpZiB0aGUgdmFsdWUgaXMgY29tcGxldGVkLCBvciBgZmFsc2VgIGlmIGl0XG4gKiAgICAgaXMgbm90LlxuICovXG5mdW5jdGlvbiBpc0NvbXBsZXRlZCh2YWx1ZSkge1xuICByZXR1cm4gISF2YWx1ZT8uW3AuY29tcGxldGVkXTtcbn1cblxuLyoqXG4gKiBNYWtlcyBzdXJlIHRoYXQgYSB2YWx1ZSBpcyBtYXJrZWQgYXMgY29tcGxldGU7IGlmIGl0IGlzIG5vdCwgaXQgd2lsbCBiZVxuICogbWFya2VkIGFzIGNvbXBsZXRlLlxuICpcbiAqIFRoaXMgZGlmZmVycyBmcm9tIHtAbGluayBtb2R1bGU6eGRjb3JlLmNvbXBsZXRlfGNvbXBsZXRlfSBpbiB0aGF0IGlmIHRoZVxuICogdmFsdWUgaXMgYWxyZWFkeSBjb21wbGV0ZSwgdGhpcyBmdW5jdGlvbiB3b24ndCBjb21wbGV0ZSBpdCBhZ2Fpbi4gVGhlcmVmb3JlXG4gKiB0aHVzIGZ1bmN0aW9uIGNhbid0IGJlIHVzZWQgdG8gbWFrZSBhIHZhbHVlIGNvbXBsZXRlIG11bHRpcGxlIHRpbWVzLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGRjb3JlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBiZSBjb21wbGV0ZWQuXG4gKiBAcmV0dXJuIHsqfSBJZiB0aGUgdmFsdWUgaXMgYWxyZWFkeSBjb21wbGV0ZSwgdGhlbiB0aGUgdmFsdWUgaXMgc2ltcGx5XG4gKiAgICAgcmV0dXJuZWQuIE90aGVyd2lzZSwgYSBjb21wbGV0ZWQgdmVyc2lvbiBvZiB0aGUgdmFsdWUgaXMgcmV0dXJuZWQuXG4gKi9cbmZ1bmN0aW9uIGVuc3VyZUNvbXBsZXRlZCh2YWx1ZSkge1xuICByZXR1cm4gaXNDb21wbGV0ZWQodmFsdWUpID8gdmFsdWUgOiBjb21wbGV0ZSh2YWx1ZSk7XG59XG5cbi8qKlxuICogUmVtb3ZlcyB0aGUgY29tcGxldGUgc3RhdHVzIGZyb20gYSB2YWx1ZSwgYXMgbG9uZyBhcyBpdCBhY3R1YWxseSBpcyBjb21wbGV0ZS5cbiAqXG4gKiBUaGlzIGRvZXMgYSBjaGVjayB0byBtYWtlIHN1cmUgdGhlIHZhbHVlIHBhc3NlZCBpbiBhY3R1YWxseSBpcyBjb21wbGV0ZS4gSWZcbiAqIGl0IGlzbid0LCB0aGUgdmFsdWUgaXRzZWxmIGlzIHJldHVybmVkLiBJdCdzIG1lYW50IHRvIGJlIHVzZWQgd2hlbiB0aGVcbiAqIGNvbXBsZXRlZCBzdGF0dXMgaXMgdW5jZXJ0YWluLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGRjb3JlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSBjb21wbGV0ZSB2YWx1ZSB0byBiZSB1bmNvbXBsZXRlZC5cbiAqIEByZXR1cm4geyp9IElmIHRoZSB2YWx1ZSBpcyBhbHJlYWR5IHVuY29tcGxldGVkLCB0aGUgdmFsdWUgaXMgc2ltcGx5XG4gKiAgICAgcmV0dXJuZWQuIE90aGVyd2lzZSBhbiB1bmNvbXBsZXRlZCB2ZXJzaW9uIG9mIHRoZSB2YWx1ZSBpcyByZXR1cm5lZC5cbiAqL1xuZnVuY3Rpb24gZW5zdXJlVW5jb21wbGV0ZWQodmFsdWUpIHtcbiAgcmV0dXJuIGlzQ29tcGxldGVkKHZhbHVlKSA/IHVuY29tcGxldGUodmFsdWUpIDogdmFsdWU7XG59XG5cbi8qKlxuICogUmVkdWNlcyB0aGUgZWxlbWVudHMgb2YgdGhlIGlucHV0IGNvbGxlY3Rpb24gdGhyb3VnaCBhIHJlZHVjZXIgaW50byBhbiBvdXRwdXRcbiAqIGNvbGxlY3Rpb24uXG4gKlxuICogVGhpcyBpcyB0aGUgbG93ZXN0LWxldmVsIG9mIHRoZSB0cmFuc2R1Y3Rpb24gZnVuY3Rpb25zLiBJbiBmYWN0LCB0aGlzIG9uZSBpc1xuICogc28gbG93LWxldmVsIHRoYXQgaXQgZG9lc24ndCBoYXZlIGEgbG90IG9mIHVzZSBpbiBub3JtYWwgb3BlcmF0aW9uLiBJdCdzIG1vcmVcbiAqIHVzZWZ1bCBmb3Igd3JpdGluZyB5b3VyIG93biB0cmFuc2Zvcm1hdGlvbiBmdW5jdGlvbnMuXG4gKlxuICogYHJlZHVjZWAgZG9lc24ndCBhc3N1bWUgdGhhdCB0aGVyZSdzIGV2ZW4gYSB0cmFuc2Zvcm1hdGlvbi4gSXQgcmVxdWlyZXMgYW5cbiAqIGluaXRpYWwgY29sbGVjdGlvbiBhbmQgYSByZWR1Y2VyIG9iamVjdCB0aGF0IGlzIG1hdGNoZWQgdG8gdGhhdCBpbml0aWFsXG4gKiBjb2xsZWN0aW9uLiBUaGUgcmVkdWNlciBvYmplY3QgbXVzdCBpbXBsZW1lbnQgdGhlIGBzdGVwYCBhbmQgYHJlc3VsdGBcbiAqIHByb3RvY29scywgd2hpY2ggaW5zdHJ1Y3QgYHJlZHVjZWAgb24gaG93IHRvIGJ1aWxkIHVwIHRoZSBjb2xsZWN0aW9uLiBUaGVcbiAqIHJlZHVjZXIgbWF5IGltcGxlbWVudCBhIHRyYW5zZm9ybWF0aW9uIGFzIHdlbGwsIGJ1dCBhbGwgdGhhdCdzIGltcG9ydGFudCBoZXJlXG4gKiBpcyB0aGF0IGl0IGNhbiBkbyB0aGUgcmVkdWN0aW9uLlxuICpcbiAqIFRoZSBpbnB1dCBjb2xsZWN0aW9uIG5lZWQgb25seSBpbXBsZW1lbnQgYGl0ZXJhYmxlYC4gSXQgaXMgbm90IG5lY2Vzc2FyeSBmb3JcbiAqIHRoZSBpbnB1dCBhbmQgb3V0cHV0IGNvbGxlY3Rpb25zIHRvIGJlIG9mIHRoZSBzYW1lIHR5cGU7IGFzIGxvbmcgYXMgdGhlIGlucHV0XG4gKiBpbXBsZW1lbnRzIGBpdGVyYWJsZWAgYW5kIHRoZSByZWR1Y2VyIGltcGxlbWVudHMgYHN0ZXBgIGFuZCBgcmVzdWx0YFxuICogYXBwcm9wcmlhdGUgdG8gdGhlIHR5cGUgb2YgdGhlIGBpbml0YCBjb2xsZWN0aW9uLCB0aGVuIGFueSB0cmFuc2xhdGlvblxuICogYmV0d2VlbiBjb2xsZWN0aW9uIHR5cGVzIGNhbiBvY2N1ci5cbiAqXG4gKiBUaGUgbm9ybWFsIGNvdXJzZSBvZiBvcGVyYXRpb24gd2lsbCBiZSB0byBjYWxsXG4gKiB7QGxpbmsgbW9kdWxlOnhkdWNlLnRyYW5zZHVjZXx0cmFuc2R1Y2V9IGluc3RlYWQsIGFzIHRoYXQgZnVuY3Rpb24gbWFrZXMgaXRcbiAqIGVhc3kgdG8gY29tYmluZSB0cmFuc2Zvcm1hdGlvbnMgd2l0aCByZWR1Y3Rpb25zIGFuZCBjYW4gb3B0aW9uYWxseSBmaWd1cmUgb3V0XG4gKiB0aGUgaW5pdGlhbCBjb2xsZWN0aW9uIGl0c2VsZi5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkY29yZVxuICogQHBhcmFtIHsqfSBjb2xsZWN0aW9uIFRoZSBpbnB1dCBjb2xsZWN0aW9uLiBUaGUgb25seSByZXF1aXJlbWVudCBvZiB0aGlzXG4gKiAgICAgY29sbGVjdGlvbiBpcyB0aGF0IGl0IGltcGxlbWVudCB0aGUgYGl0ZXJhYmxlYCBwcm90b2NvbC4gU3BlY2lhbCBzdXBwb3J0XG4gKiAgICAgaXMgcHJvdmlkZWQgYnkgdGhlIGxpYnJhcnkgZm9yIG9iamVjdHMsIHNvIHRoZXkgY2FuIGJlIHVzZWQgYXMgd2VsbC5cbiAqIEBwYXJhbSB7bW9kdWxlOnhkY29yZS5SZWR1Y2VyT2JqZWN0fSByZWR1Y2VyIEFuIG9iamVjdCB0aGF0IGltcGxlbWVudHMgdGhlXG4gKiAgICAgYHN0ZXBgIGFuZCBgcmVzdWx0YCBwcm90b2NvbHMuIFRoaXMgb2JqZWN0IG11c3Qga25vdyBob3cgdG8gcHJvZHVjZSBhblxuICogICAgIG91dHB1dCBjb2xsZWN0aW9uIHRocm91Z2ggdGhvc2UgcHJvdG9jb2wgZnVuY3Rpb25zLlxuICogQHBhcmFtIHsqfSBpbml0IGEgY29sbGVjdGlvbiBvZiB0aGUgc2FtZSB0eXBlIGFzIHRoZSBvdXRwdXQgY29sbGVjdGlvbi4gSXRcbiAqICAgICBuZWVkIG5vdCBiZSBlbXB0eTsgaWYgaXQgaXMgbm90LCB0aGUgZXhpc3RpbmcgZWxlbWVudHMgYXJlIHJldGFpbmVkIGFzXG4gKiAgICAgdGhlIGlucHV0IGNvbGxlY3Rpb24gaXMgcmVkdWNlZCBpbnRvIGl0LlxuICogQHJldHVybiB7Kn0gQSBuZXcgY29sbGVjdGlvbiwgY29uc2lzdGluZyBvZiB0aGUgYGluaXRgIGNvbGxlY3Rpb24gd2l0aCBhbGwgb2ZcbiAqICAgICB0aGUgZWxlbWVudHMgb2YgdGhlIGBjb2xsZWN0aW9uYCBjb2xsZWN0aW9uIHJlZHVjZWQgaW50byBpdC5cbiAqL1xuZnVuY3Rpb24gcmVkdWNlKGNvbGxlY3Rpb24sIHJlZHVjZXIsIGluaXQpIHtcbiAgaWYgKGNvbGxlY3Rpb24gPT0gbnVsbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3QgaXRlciA9IGl0ZXJhdG9yKGNvbGxlY3Rpb24pO1xuICBpZiAoIWl0ZXIpIHtcbiAgICB0aHJvdyBFcnJvcihgQ2Fubm90IHJlZHVjZSBhbiBpbnN0YW5jZSBvZiAke2NvbGxlY3Rpb24uY29uc3RydWN0b3IubmFtZX1gKTtcbiAgfVxuXG4gIGxldCBhY2MgPSBpbml0O1xuICBsZXQgc3RlcCA9IGl0ZXIubmV4dCgpO1xuXG4gIHdoaWxlICghc3RlcC5kb25lKSB7XG4gICAgYWNjID0gcmVkdWNlcltwLnN0ZXBdKGFjYywgc3RlcC52YWx1ZSk7XG4gICAgaWYgKGlzQ29tcGxldGVkKGFjYykpIHtcbiAgICAgIGFjYyA9IHVuY29tcGxldGUoYWNjKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBzdGVwID0gaXRlci5uZXh0KCk7XG4gIH1cblxuICByZXR1cm4gcmVkdWNlcltwLmZpbmFsXShhY2MpO1xufVxuXG5leHBvcnQge1xuICBpbml0LFxuICBzdGVwLFxuICBmaW5hbCxcbiAgdG9SZWR1Y2VyLFxuICBBUlJBWV9SRURVQ0VSLFxuICBPQkpFQ1RfUkVEVUNFUixcbiAgU1RSSU5HX1JFRFVDRVIsXG4gIHRvVHJhbnNkdWNlcixcbiAgdG9GdW5jdGlvbixcbiAgY29tcGxldGUsXG4gIHVuY29tcGxldGUsXG4gIGlzQ29tcGxldGVkLFxuICBlbnN1cmVDb21wbGV0ZWQsXG4gIGVuc3VyZVVuY29tcGxldGVkLFxuICByZWR1Y2Vcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuLyoqXG4gKiBBIGJ1bmNoIG9mIHV0aWxpdHkgZnVuY3Rpb25zLiBUaGVzZSBhcmUgYWxsIHVzZWQgYnkgdGhlIGxpYnJhcnkgaXRzZWxmIGluXG4gKiBwbGFjZXMsIGJ1dCBtYW55IG9mIHRoZW0gYXJlIHN1aXRhYmxlIGZvciBnZW5lcmFsIHVzZSBhcyB3ZWxsLlxuICogXlxuICogQG1vZHVsZSB4ZGNvcmUvdXRpbHNcbiAqIEBwcml2YXRlXG4gKi9cblxuLyoqXG4gKiBgT2JqZWN0YCdzIGB0b1N0cmluZ2AgaXMgZXhwbGljaXRseSB1c2VkIHRocm91Z2hvdXQgYmVjYXVzZSBpdCBjb3VsZCBiZVxuICogcmVkZWZpbmVkIGluIGFueSBzdWJ0eXBlIG9mIGBPYmplY3RgLlxuICpcbiAqIEBmdW5jdGlvbiB0b1N0cmluZ1xuICogQHByaXZhdGVcbiAqL1xuY29uc3QgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhIHZhbHVlIGlzIGEgZnVuY3Rpb24uXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZGNvcmVcbiAqIEBwYXJhbSB7Kn0geCBUaGUgdmFsdWUgYmVpbmcgdGVzdGVkIHRvIHNlZSBpZiBpdCBpcyBhIGZ1bmN0aW9uLlxuICogQHJldHVybiB7Ym9vbGVhbn0gRWl0aGVyIGB0cnVlYCBpZiB0aGUgdGVzdCB2YWx1ZSBpcyBhIGZ1bmN0aW9uIG9yIGBmYWxzZWAgaWZcbiAqICAgICBpdCBpcyBub3QuXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24oeCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh4KSA9PT0gXCJbb2JqZWN0IEZ1bmN0aW9uXVwiO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhIHZhbHVlIGlzIGEgZ2VuZXJhdG9yIGZ1bmN0aW9uLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGRjb3JlXG4gKiBAcGFyYW0geyp9IHggVGhlIHZhbHVlIGJlaW5nIHRlc3RlZCB0byBzZWUgaWYgaXQgaXMgYSBnZW5lcmF0b3IgZnVuY3Rpb24uXG4gKiBAcmV0dXJuIHtib29sZWFufSBFaXRoZXIgYHRydWVgIGlmIHRoZSB0ZXN0IHZhbHVlIGlzIGEgZ2VuZXJhdG9yIGZ1bmN0aW9uIG9yXG4gKiAgICAgYGZhbHNlYCBpZiBpdCBpcyBub3QuXG4gKi9cbmZ1bmN0aW9uIGlzR2VuZXJhdG9yRnVuY3Rpb24oeCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh4KSA9PT0gXCJbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXVwiO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhIHZhbHVlIGlzIGEgcGxhaW4gb2JqZWN0LlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gcmV0dXJucyBgZmFsc2VgIGlmIHRoZSB2YWx1ZSBpcyBhbnkgb3RoZXIgc29ydCBvZiBidWlsdC1pblxuICogb2JqZWN0IChzdWNoIGFzIGFuIGFycmF5IG9yIGEgc3RyaW5nKS4gSXQgYWxzbyByZXR1cm5zIGBmYWxzZWAgZm9yIGFueSBvYmplY3RcbiAqIHRoYXQgaXMgY3JlYXRlZCBieSBhIGNvbnN0cnVjdG9yIHRoYXQgaXMgbm90IGBPYmplY3RgJ3MgY29uc3RydWN0b3IsIG1lYW5pbmdcbiAqIHRoYXQgXCJpbnN0YW5jZXNcIiBvZiBjdXN0b20gXCJjbGFzc2VzXCIgd2lsbCByZXR1cm4gYGZhbHNlYC4gVGhlcmVmb3JlIGl0J3Mgb25seVxuICogZ29pbmcgdG8gcmV0dXJuIGB0cnVlYCBmb3IgbGl0ZXJhbCBvYmplY3RzIG9yIHRob3NlIGNyZWF0ZWQgd2l0aFxuICogYE9iamVjdC5jcmVhdGUoKWAuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZGNvcmVcbiAqIEBwYXJhbSB7Kn0geCBUaGUgdmFsdWUgYmVpbmcgdGVzdGVkIHRvIHNlZSBpZiBpdCBpcyBhIHBsYWluIG9iamVjdC5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IEVpdGhlciBgdHJ1ZWAgaWYgdGhlIHRlc3QgdmFsdWUgaXMgYSBwbGFpbiBvYmplY3Qgb3JcbiAqICAgICBgZmFsc2VgIGlmIGl0IGlzIG5vdC5cbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QoeCkge1xuICAvLyBUaGlzIGNoZWNrIGV4Y2x1ZGVzIGJ1aWx0LWluIG5vbi1PYmplY3Qgb2JqZWN0cyAoc3VjaCBhcyBBcnJheSBhbmQgU3RyaW5nKS5cbiAgLy8gSXQgYWxzbyBleGNsdWRlcyBvYmplY3RzIGNyZWF0ZWQgZnJvbSBFUzIwMTUgY2xhc3NlcywgYnV0IGl0IGRvZXMgbm90XG4gIC8vIGV4Y2x1ZGUgb2JqZWN0cyBjcmVhdGVkIHdpdGggYG5ld2Agb24gY29uc3RydWN0b3IgZnVuY3Rpb25zICh0aGF0IGhhcHBlbnNcbiAgLy8gYmVsb3cpLlxuICBpZiAodG9TdHJpbmcuY2FsbCh4KSAhPT0gXCJbb2JqZWN0IE9iamVjdF1cIikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIFByb3RvdHlwZS1sZXNzIG9iamVjdHMgKGNyZWF0ZWQgd2l0aCBgT2JqZWN0LmNyZWF0ZShudWxsKSlgIHBhc3NcbiAgY29uc3QgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoeCk7XG4gIGlmIChwcm90byA9PT0gbnVsbCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLy8gQ2hlY2sgdG8gc2VlIHdoZXRoZXIgdGhlIGNvbnN0cnVjdG9yIG9mIHRoZSB0ZXN0ZWQgb2JqZWN0IGlzIHRoZSBPYmplY3RcbiAgLy8gY29uc3RydWN0b3IuIFRoaXMgaXMgdGhlIG9ubHkgY29uc3RydWN0b3IgdGhhdCBwcm9kdWNlcyBhIFwicGxhaW5cIiBvYmplY3QuXG4gIGNvbnN0IGN0b3IgPVxuICAgIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwcm90bywgXCJjb25zdHJ1Y3RvclwiKSAmJlxuICAgIHByb3RvLmNvbnN0cnVjdG9yO1xuICByZXR1cm4gdHlwZW9mIGN0b3IgPT09IFwiZnVuY3Rpb25cIiAmJiBjdG9yID09PSBPYmplY3Q7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGEgdmFsdWUgaXMgYSBjb25jcmV0ZSBudW1iZXIuXG4gKlxuICogVGhpcyBmdW5jdGlvbiB3aWxsIHJldHVybiBgdHJ1ZWAgZm9yIGFueSBudW1iZXIgbGl0ZXJhbCBvciBpbnN0YW5jZSBvZlxuICogYE51bWJlcmAgZXhjZXB0IGZvciBgSW5maW5pdHlgIG9yIGBOYU5gLiBJdCB3aWxsIHJldHVybiBgZmFsc2VgIGZvciBzdHJpbmdzXG4gKiB0aGF0IGhhcHBlbiB0byBhbHNvIGJlIG51bWJlcnM7IHRoZSB2YWx1ZSBtdXN0IGJlIGFuIGFjdHVhbCBgTnVtYmVyYCBpbnN0YW5jZVxuICogb3IgbnVtYmVyIGxpdGVyYWwgdG8gcmV0dXJuIGB0cnVlYC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkY29yZVxuICogQHBhcmFtIHsqfSB4IFRoZSB2YWx1ZSBiZWluZyB0ZXN0ZWQgdG8gc2VlIGlmIGl0IGlzIGEgbnVtYmVyLlxuICogQHJldHVybiB7Ym9vbGVhbn0gRWl0aGVyIGB0cnVlYCBpZiB0aGUgdGVzdCB2YWx1ZSBpcyBhIGZpbml0ZSBudW1iZXIgKG5vdFxuICogICAgIGluY2x1ZGluZyBzdHJpbmcgcmVwcmVzZW50YXRpb25zIG9mIG51bWJlcnMpIG9yIGBmYWxzZWAgaWYgaXQgaXMgbm90LlxuICovXG5mdW5jdGlvbiBpc051bWJlcih4KSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHgpID09PSBcIltvYmplY3QgTnVtYmVyXVwiICYmIGlzRmluaXRlKHgpO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhIHZhbHVlIGlzIGEgc3RyaW5nLlxuICpcbiAqIExpdGVyYWwgc3RyaW5ncyB3aWxsIHJldHVybiBgdHJ1ZWAsIGFzIHdpbGwgaW5zdGFuY2VzIG9mIHRoZSBgU3RyaW5nYCBvYmplY3QuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZGNvcmVcbiAqIEBwYXJhbSB7Kn0geCBUaGUgdmFsdWUgYmVpbmcgdGVzdGVkIHRvIHNlZSBpZiBpdCBpcyBhIHN0cmluZy5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IEVpdGhlciBgdHJ1ZWAgaWYgdGhlIHRlc3QgdmFsdWUgaXMgYSBzdHJpbmcgb3IgYGZhbHNlYCBpZlxuICogICAgaXQgaXMgbm90LlxuICovXG5mdW5jdGlvbiBpc1N0cmluZyh4KSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHgpID09PSBcIltvYmplY3QgU3RyaW5nXVwiO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhIHZhbHVlIGlzIGFuIGFycmF5LlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gbWVyZWx5IGRlbGVnYXRlcyB0byBgQXJyYXkuaXNBcnJheWAuIEl0IGlzIHByb3ZpZGVkIGZvclxuICogY29uc2lzdGVuY3kgaW4gY2FsbGluZyBzdHlsZSBvbmx5LlxuICpcbiAqIEBmdW5jdGlvbiBpc0FycmF5XG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkY29yZVxuICogQHBhcmFtIHsqfSB4IFRoZSB2YWx1ZSBiZWluZyB0ZXN0ZWQgdG8gc2VlIGlmIGl0IGlzIGFuIGFycmF5LlxuICogQHJldHVybiB7Ym9vbGVhbn0gRWl0aGVyIGB0cnVlYCBpZiB0aGUgdGVzdCB2YWx1ZSBpcyBhbiBhcnJheSBvciBgZmFsc2VgIGlmXG4gKiAgICAgaXQgaXMgbm90LlxuICovXG5jb25zdCBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxuZXhwb3J0IHtcbiAgaXNGdW5jdGlvbixcbiAgaXNHZW5lcmF0b3JGdW5jdGlvbixcbiAgaXNPYmplY3QsXG4gIGlzTnVtYmVyLFxuICBpc1N0cmluZyxcbiAgaXNBcnJheVxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=