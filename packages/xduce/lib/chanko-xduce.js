(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["xduce"] = factory();
	else
		root["xduce"] = factory();
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

/***/ "../xdcore/lib/chanko-xdcore.js":
/*!**************************************!*\
  !*** ../xdcore/lib/chanko-xdcore.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
  if (true) module.exports = factory();else {}
})(this, function () {
  return (
    /******/
    function (modules) {
      // webpackBootstrap

      /******/
      // The module cache

      /******/
      var installedModules = {};
      /******/

      /******/
      // The require function

      /******/

      function __webpack_require__(moduleId) {
        /******/

        /******/
        // Check if module is in cache

        /******/
        if (installedModules[moduleId]) {
          /******/
          return installedModules[moduleId].exports;
          /******/
        }
        /******/
        // Create a new module (and put it into the cache)

        /******/


        var module = installedModules[moduleId] = {
          /******/
          i: moduleId,

          /******/
          l: false,

          /******/
          exports: {}
          /******/

        };
        /******/

        /******/
        // Execute the module function

        /******/

        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/

        /******/
        // Flag the module as loaded

        /******/

        module.l = true;
        /******/

        /******/
        // Return the exports of the module

        /******/

        return module.exports;
        /******/
      }
      /******/

      /******/

      /******/
      // expose the modules object (__webpack_modules__)

      /******/


      __webpack_require__.m = modules;
      /******/

      /******/
      // expose the module cache

      /******/

      __webpack_require__.c = installedModules;
      /******/

      /******/
      // define getter function for harmony exports

      /******/

      __webpack_require__.d = function (exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
          /******/
          Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
          });
          /******/
        }
        /******/

      };
      /******/

      /******/
      // define __esModule on exports

      /******/


      __webpack_require__.r = function (exports) {
        /******/
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
          /******/
          Object.defineProperty(exports, Symbol.toStringTag, {
            value: 'Module'
          });
          /******/
        }
        /******/


        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        /******/
      };
      /******/

      /******/
      // create a fake namespace object

      /******/
      // mode & 1: value is a module id, require it

      /******/
      // mode & 2: merge all properties of value into the ns

      /******/
      // mode & 4: return value when already ns object

      /******/
      // mode & 8|1: behave like require

      /******/


      __webpack_require__.t = function (value, mode) {
        /******/
        if (mode & 1) value = __webpack_require__(value);
        /******/

        if (mode & 8) return value;
        /******/

        if (mode & 4 && typeof value === 'object' && value && value.__esModule) return value;
        /******/

        var ns = Object.create(null);
        /******/

        __webpack_require__.r(ns);
        /******/


        Object.defineProperty(ns, 'default', {
          enumerable: true,
          value: value
        });
        /******/

        if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) {
          return value[key];
        }.bind(null, key));
        /******/

        return ns;
        /******/
      };
      /******/

      /******/
      // getDefaultExport function for compatibility with non-harmony modules

      /******/


      __webpack_require__.n = function (module) {
        /******/
        var getter = module && module.__esModule ?
        /******/
        function getDefault() {
          return module['default'];
        } :
        /******/
        function getModuleExports() {
          return module;
        };
        /******/

        __webpack_require__.d(getter, 'a', getter);
        /******/


        return getter;
        /******/
      };
      /******/

      /******/
      // Object.prototype.hasOwnProperty.call

      /******/


      __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/

      /******/
      // __webpack_public_path__

      /******/


      __webpack_require__.p = "";
      /******/

      /******/

      /******/
      // Load entry module and return exports

      /******/

      return __webpack_require__(__webpack_require__.s = "./src/index.js");
      /******/
    }(
    /************************************************************************/

    /******/
    {
      /***/
      "./src/index.js":
      /*!**********************!*\
        !*** ./src/index.js ***!
        \**********************/

      /*! exports provided: protocols, isImplemented, iterator, isIterable, complete, uncomplete, isCompleted, ensureCompleted, ensureUncompleted, reduce, toFunction, toReducer, toTransducer, isArray, isFunction, isGeneratorFunction, isNumber, isObject, isString */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony import */


        var modules_protocol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! modules/protocol */
        "./src/modules/protocol.js");
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "protocols", function () {
          return modules_protocol__WEBPACK_IMPORTED_MODULE_0__["protocols"];
        });
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "isImplemented", function () {
          return modules_protocol__WEBPACK_IMPORTED_MODULE_0__["isImplemented"];
        });
        /* harmony import */


        var modules_iteration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! modules/iteration */
        "./src/modules/iteration.js");
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "iterator", function () {
          return modules_iteration__WEBPACK_IMPORTED_MODULE_1__["iterator"];
        });
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "isIterable", function () {
          return modules_iteration__WEBPACK_IMPORTED_MODULE_1__["isIterable"];
        });
        /* harmony import */


        var modules_reduction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! modules/reduction */
        "./src/modules/reduction.js");
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "complete", function () {
          return modules_reduction__WEBPACK_IMPORTED_MODULE_2__["complete"];
        });
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "uncomplete", function () {
          return modules_reduction__WEBPACK_IMPORTED_MODULE_2__["uncomplete"];
        });
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "isCompleted", function () {
          return modules_reduction__WEBPACK_IMPORTED_MODULE_2__["isCompleted"];
        });
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "ensureCompleted", function () {
          return modules_reduction__WEBPACK_IMPORTED_MODULE_2__["ensureCompleted"];
        });
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "ensureUncompleted", function () {
          return modules_reduction__WEBPACK_IMPORTED_MODULE_2__["ensureUncompleted"];
        });
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "reduce", function () {
          return modules_reduction__WEBPACK_IMPORTED_MODULE_2__["reduce"];
        });
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "toFunction", function () {
          return modules_reduction__WEBPACK_IMPORTED_MODULE_2__["toFunction"];
        });
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "toReducer", function () {
          return modules_reduction__WEBPACK_IMPORTED_MODULE_2__["toReducer"];
        });
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "toTransducer", function () {
          return modules_reduction__WEBPACK_IMPORTED_MODULE_2__["toTransducer"];
        });
        /* harmony import */


        var modules_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! modules/utils */
        "./src/modules/utils.js");
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "isArray", function () {
          return modules_utils__WEBPACK_IMPORTED_MODULE_3__["isArray"];
        });
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "isFunction", function () {
          return modules_utils__WEBPACK_IMPORTED_MODULE_3__["isFunction"];
        });
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "isGeneratorFunction", function () {
          return modules_utils__WEBPACK_IMPORTED_MODULE_3__["isGeneratorFunction"];
        });
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "isNumber", function () {
          return modules_utils__WEBPACK_IMPORTED_MODULE_3__["isNumber"];
        });
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "isObject", function () {
          return modules_utils__WEBPACK_IMPORTED_MODULE_3__["isObject"];
        });
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "isString", function () {
          return modules_utils__WEBPACK_IMPORTED_MODULE_3__["isString"];
        });
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

        /***/

      },

      /***/
      "./src/modules/iteration.js":
      /*!**********************************!*\
        !*** ./src/modules/iteration.js ***!
        \**********************************/

      /*! exports provided: iterator, isIterable */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "iterator", function () {
          return iterator;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "isIterable", function () {
          return isIterable;
        });
        /* harmony import */


        var modules_protocol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! modules/protocol */
        "./src/modules/protocol.js");
        /* harmony import */


        var modules_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! modules/utils */
        "./src/modules/utils.js");
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
        /***/

      },

      /***/
      "./src/modules/protocol.js":
      /*!*********************************!*\
        !*** ./src/modules/protocol.js ***!
        \*********************************/

      /*! exports provided: protocols, isImplemented */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "protocols", function () {
          return protocols;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "isImplemented", function () {
          return isImplemented;
        });
        /* harmony import */


        var modules_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! modules/utils */
        "./src/modules/utils.js");
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
        /***/

      },

      /***/
      "./src/modules/reduction.js":
      /*!**********************************!*\
        !*** ./src/modules/reduction.js ***!
        \**********************************/

      /*! exports provided: init, step, final, toReducer, ARRAY_REDUCER, OBJECT_REDUCER, STRING_REDUCER, toTransducer, toFunction, complete, uncomplete, isCompleted, ensureCompleted, ensureUncompleted, reduce */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "init", function () {
          return init;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "step", function () {
          return step;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "final", function () {
          return final;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "toReducer", function () {
          return toReducer;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "ARRAY_REDUCER", function () {
          return ARRAY_REDUCER;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "OBJECT_REDUCER", function () {
          return OBJECT_REDUCER;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "STRING_REDUCER", function () {
          return STRING_REDUCER;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "toTransducer", function () {
          return toTransducer;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "toFunction", function () {
          return toFunction;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "complete", function () {
          return complete;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "uncomplete", function () {
          return uncomplete;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "isCompleted", function () {
          return isCompleted;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "ensureCompleted", function () {
          return ensureCompleted;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "ensureUncompleted", function () {
          return ensureUncompleted;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "reduce", function () {
          return reduce;
        });
        /* harmony import */


        var modules_protocol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! modules/protocol */
        "./src/modules/protocol.js");
        /* harmony import */


        var modules_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! modules/utils */
        "./src/modules/utils.js");
        /* harmony import */


        var modules_iteration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! modules/iteration */
        "./src/modules/iteration.js");
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
        /***/

      },

      /***/
      "./src/modules/utils.js":
      /*!******************************!*\
        !*** ./src/modules/utils.js ***!
        \******************************/

      /*! exports provided: isFunction, isGeneratorFunction, isObject, isNumber, isString, isArray */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "isFunction", function () {
          return isFunction;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "isGeneratorFunction", function () {
          return isGeneratorFunction;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "isObject", function () {
          return isObject;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "isNumber", function () {
          return isNumber;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "isString", function () {
          return isString;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "isArray", function () {
          return isArray;
        });
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
        /***/
      }
      /******/

    })
  );
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: kv, key, value, complement, transduce, sequence, into, asArray, asObject, asString, asIterator, compose, toReducer, toFunction, identity, flatten, repeat, chunk, chunkBy, distinct, distinctBy, distinctWith, drop, dropWhile, filter, reject, map, flatMap, take, takeWhile, takeNth, unique, uniqueBy, uniqueWith */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var modules_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! modules/utils */ "./src/modules/utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "kv", function() { return modules_utils__WEBPACK_IMPORTED_MODULE_0__["kv"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "key", function() { return modules_utils__WEBPACK_IMPORTED_MODULE_0__["key"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "value", function() { return modules_utils__WEBPACK_IMPORTED_MODULE_0__["value"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "complement", function() { return modules_utils__WEBPACK_IMPORTED_MODULE_0__["complement"]; });

/* harmony import */ var modules_transduction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! modules/transduction */ "./src/modules/transduction.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transduce", function() { return modules_transduction__WEBPACK_IMPORTED_MODULE_1__["transduce"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sequence", function() { return modules_transduction__WEBPACK_IMPORTED_MODULE_1__["sequence"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "into", function() { return modules_transduction__WEBPACK_IMPORTED_MODULE_1__["into"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "asArray", function() { return modules_transduction__WEBPACK_IMPORTED_MODULE_1__["asArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "asObject", function() { return modules_transduction__WEBPACK_IMPORTED_MODULE_1__["asObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "asString", function() { return modules_transduction__WEBPACK_IMPORTED_MODULE_1__["asString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "asIterator", function() { return modules_transduction__WEBPACK_IMPORTED_MODULE_1__["asIterator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return modules_transduction__WEBPACK_IMPORTED_MODULE_1__["compose"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toReducer", function() { return modules_transduction__WEBPACK_IMPORTED_MODULE_1__["toReducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toFunction", function() { return modules_transduction__WEBPACK_IMPORTED_MODULE_1__["toFunction"]; });

/* harmony import */ var modules_basic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! modules/basic */ "./src/modules/basic.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return modules_basic__WEBPACK_IMPORTED_MODULE_2__["identity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flatten", function() { return modules_basic__WEBPACK_IMPORTED_MODULE_2__["flatten"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "repeat", function() { return modules_basic__WEBPACK_IMPORTED_MODULE_2__["repeat"]; });

/* harmony import */ var modules_chunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! modules/chunk */ "./src/modules/chunk.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chunk", function() { return modules_chunk__WEBPACK_IMPORTED_MODULE_3__["chunk"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chunkBy", function() { return modules_chunk__WEBPACK_IMPORTED_MODULE_3__["chunkBy"]; });

/* harmony import */ var modules_distinct__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! modules/distinct */ "./src/modules/distinct.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "distinct", function() { return modules_distinct__WEBPACK_IMPORTED_MODULE_4__["distinct"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "distinctBy", function() { return modules_distinct__WEBPACK_IMPORTED_MODULE_4__["distinctBy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "distinctWith", function() { return modules_distinct__WEBPACK_IMPORTED_MODULE_4__["distinctWith"]; });

/* harmony import */ var modules_drop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! modules/drop */ "./src/modules/drop.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "drop", function() { return modules_drop__WEBPACK_IMPORTED_MODULE_5__["drop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dropWhile", function() { return modules_drop__WEBPACK_IMPORTED_MODULE_5__["dropWhile"]; });

/* harmony import */ var modules_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! modules/filter */ "./src/modules/filter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return modules_filter__WEBPACK_IMPORTED_MODULE_6__["filter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reject", function() { return modules_filter__WEBPACK_IMPORTED_MODULE_6__["reject"]; });

/* harmony import */ var modules_map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! modules/map */ "./src/modules/map.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "map", function() { return modules_map__WEBPACK_IMPORTED_MODULE_7__["map"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flatMap", function() { return modules_map__WEBPACK_IMPORTED_MODULE_7__["flatMap"]; });

/* harmony import */ var modules_take__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! modules/take */ "./src/modules/take.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "take", function() { return modules_take__WEBPACK_IMPORTED_MODULE_8__["take"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "takeWhile", function() { return modules_take__WEBPACK_IMPORTED_MODULE_8__["takeWhile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "takeNth", function() { return modules_take__WEBPACK_IMPORTED_MODULE_8__["takeNth"]; });

/* harmony import */ var modules_unique__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! modules/unique */ "./src/modules/unique.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unique", function() { return modules_unique__WEBPACK_IMPORTED_MODULE_9__["unique"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uniqueBy", function() { return modules_unique__WEBPACK_IMPORTED_MODULE_9__["uniqueBy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uniqueWith", function() { return modules_unique__WEBPACK_IMPORTED_MODULE_9__["uniqueWith"]; });

/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

/**
 * @module xduce
 */










/**
 *
 *
 * @callback
 */

/***/ }),

/***/ "./src/modules/basic.js":
/*!******************************!*\
  !*** ./src/modules/basic.js ***!
  \******************************/
/*! exports provided: identity, flatten, repeat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flatten", function() { return flatten; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "repeat", function() { return repeat; });
/* harmony import */ var _chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chanko/xdcore */ "../xdcore/lib/chanko-xdcore.js");
/* harmony import */ var _chanko_xdcore__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var modules_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! modules/utils */ "./src/modules/utils.js");
/* harmony import */ var modules_transduction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! modules/transduction */ "./src/modules/transduction.js");
/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */



/**
 * Returns exactly the same collection sent to it.
 *
 * This is generally a function used when a transducer function is required but
 * there is no desire to do an actual transformation. The "transformation"
 * implemented here is to pass each element through exactly as it is.
 *
 * If no collection is provided, a function is returned that can be passed to
 * `{@link module:xduce.sequence|sequence}`, et al.
 *
 * ```
 * const result = identity([1, 2, 3, 4, 5]);
 * console.log(result);   // -> [1, 2, 3, 4, 5]
 * ```
 *
 * @memberof module:xduce
 * @param {module:xduce.Collection} [collection] An optional input collection
 *     that is to be transduced.
 * @return {(module:xduce.Collection|module:xduce.TransducerFunction)} If a
 *     collection is supplied, then the function returns a new collection of the
 *     same type with all of the elements of the input collection untouched. If
 *     no collection is supplied, a transducer function, suitable for passing to
 *     `{@link module:xduce.sequence|sequence}`,
 *     `{@link module:xduce.into|into}`, etc. is returned.
 */

function identity(collection) {
  return collection ? Object(modules_transduction__WEBPACK_IMPORTED_MODULE_2__["sequence"])(collection, identity()) : xform => Object(_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["toTransducer"])((acc, value) => xform[_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](acc, value), xform);
}
/**
 * Flattens a collection by merging elements in any sub-collection into the main
 * collection.
 *
 * Elements of the main collection that are not collections themselves are not
 * changed. It's fine to have a combination of the two, some elements that are
 * collections and some that are not. If an element is a collection that
 * contains other collections, those collections will *not* be flattened; the
 * flattening only happens to one level.
 *
 * Since there aren't sub-collections in objects, strings, or iterators,
 * `flatten` doesn't make sense with those types of collections.
 *
 * If no collection is provided, a function is returned that can be passed to
 * `{@link module:xduce.sequence|sequence}`, et al.
 *
 * ```
 * const result = flatten([[1, 2], [3, 4, 5], 6, [7]]);
 * console.log(reuslt);   // -> [1, 2, 3, 4, 5, 6, 7]
 *
 * const result = flatten([[1, 2], [3, [4, 5]], 6, [7]]);
 * console.log(reuslt);   // -> [1, 2, 3, [4, 5], 6, 7]
 * ```
 *
 * @memberof module:xduce.transducers
 * @param {module:xduce.Collection} [collection] An optional input collection
 *     that is to be transduced.
 * @return {(module:xduce.Collection|module:xduce.TransducerFunction)} If a
 *     collection is supplied, then the function returns a new collection of the
 *     same type with all of the elements of the input collection flattened. If
 *     no collection is supplied, a transducer function, suitable for passing to
 *     `{@link module:xduce.sequence|sequence}`,
 *     `{@link module:xduce.into|into}`, etc. is returned.
 */


function flatten(collection) {
  return collection ? Object(modules_transduction__WEBPACK_IMPORTED_MODULE_2__["sequence"])(collection, flatten()) : xform => Object(_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["toTransducer"])((acc, value) => {
    const subXform = Object(_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["toTransducer"])((acc, value) => {
      const v = xform[_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](acc, value);
      return Object(_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["isCompleted"])(v) ? Object(_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["complete"])(v) : v;
    }, xform);
    return Object(_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["isIterable"])(value) ? Object(_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["reduce"])(value, subXform, acc) : subXform[_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](acc, value);
  }, xform);
}
/**
 * Repeats each element from the input collection `n` times in the output
 * collection.
 *
 * These elements are put into the main output collection, not into
 * subcollections. In other words, each input element creates `n` output
 * elements.
 *
 * If no collection is provided, a function is returned that can be passed to
 * `{@link module:xduce.sequence|sequence}`, et al.
 *
 * ```
 * const result = repeat([1, 2, 3, 4, 5], 3);
 * console.log(result);   // -> [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5]
 * ```
 *
 * @memberof module:xduce
 * @param {module:xduce.Collection} [collection] An optional input collection
 *     that is to be transduced.
 * @param {number} n The number of times that each element from the input
 *     collection should be repeated in the output collection.
 * @return {(module:xduce.Collection|module:xduce.TransducerFunction)} If a
 *     collection is supplied, then the function returns a new collection of the
 *     same type with all of the elements of the input collection repeated. If
 *     no collection is supplied, a transducer function, suitable for passing to
 *     `{@link module:xduce.sequence|sequence}`,
 *     `{@link module:xduce.into|into}`, etc. is returned.
 */


function repeat(collection, n) {
  const [col, num] = Object(modules_utils__WEBPACK_IMPORTED_MODULE_1__["parseNumberArgs"])(collection, n);
  return col ? Object(modules_transduction__WEBPACK_IMPORTED_MODULE_2__["sequence"])(col, repeat(num)) : xform => Object(_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["toTransducer"])((acc, value) => {
    let result = acc;

    for (let i = 0; i < num; i++) {
      result = xform[_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](result, value);

      if (Object(_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["isCompleted"])(result)) {
        break;
      }
    }

    return result;
  }, xform);
}



/***/ }),

/***/ "./src/modules/chunk.js":
/*!******************************!*\
  !*** ./src/modules/chunk.js ***!
  \******************************/
/*! exports provided: chunk, chunkBy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chunk", function() { return chunk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chunkBy", function() { return chunkBy; });
/* harmony import */ var _chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chanko/xdcore */ "../xdcore/lib/chanko-xdcore.js");
/* harmony import */ var _chanko_xdcore__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var modules_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! modules/utils */ "./src/modules/utils.js");
/* harmony import */ var modules_transduction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! modules/transduction */ "./src/modules/transduction.js");
/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */



const NO_VALUE = Symbol("NO_VALUE");

function chunk(collection, n) {
  const [col, num] = Object(modules_utils__WEBPACK_IMPORTED_MODULE_1__["parseNumberArgs"])(collection, n);
  return col ? Object(modules_transduction__WEBPACK_IMPORTED_MODULE_2__["sequence"])(col, chunk(num)) : xform => {
    let count = 0;
    let part = [];
    return {
      [_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["protocols"].init]() {
        return xform[_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["protocols"].init]();
      },

      [_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](acc, value) {
        part[count++] = value;

        if (count === num) {
          const out = part.slice(0, num);
          part = [];
          count = 0;
          return xform[_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](acc, out);
        }

        return acc;
      },

      [_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["protocols"].final](value) {
        if (count > 0) {
          return Object(_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["ensureUncompleted"])(xform[_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](value, part.slice(0, count)));
        }

        return xform[_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["protocols"].final](value);
      }

    };
  };
}

function chunkBy(collection, fn) {
  const [col, func] = Object(modules_utils__WEBPACK_IMPORTED_MODULE_1__["parseFunctionArgs"])(collection, fn);
  return col ? Object(modules_transduction__WEBPACK_IMPORTED_MODULE_2__["sequence"])(col, chunkBy(func)) : xform => {
    let part = [];
    let last = NO_VALUE;
    return {
      [_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["protocols"].init]() {
        return xform[_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["protocols"].init]();
      },

      [_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](acc, value) {
        const current = func(value);
        let result = acc;

        if (last === NO_VALUE || Object(modules_utils__WEBPACK_IMPORTED_MODULE_1__["sameValueZero"])(current, last)) {
          part.push(value);
        } else {
          result = xform[_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](result, part);
          part = [value];
        }

        last = current;
        return result;
      },

      [_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["protocols"].final](value) {
        const count = part.length;

        if (count > 0) {
          return Object(_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["ensureUncompleted"])(xform[_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](value, part.slice(0, count)));
        }

        return xform[_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["protocols"].final](value);
      }

    };
  };
}



/***/ }),

/***/ "./src/modules/distinct.js":
/*!*********************************!*\
  !*** ./src/modules/distinct.js ***!
  \*********************************/
/*! exports provided: distinct, distinctBy, distinctWith */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distinct", function() { return distinct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distinctBy", function() { return distinctBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distinctWith", function() { return distinctWith; });
/* harmony import */ var _chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chanko/xdcore */ "../xdcore/lib/chanko-xdcore.js");
/* harmony import */ var _chanko_xdcore__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var modules_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! modules/utils */ "./src/modules/utils.js");
/* harmony import */ var modules_transduction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! modules/transduction */ "./src/modules/transduction.js");
/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */



const NO_VALUE = Symbol("NO_VALUE");

function distinctWith(collection, fn) {
  const [col, func] = Object(modules_utils__WEBPACK_IMPORTED_MODULE_1__["parseFunctionArgs"])(collection, fn);
  return col ? Object(modules_transduction__WEBPACK_IMPORTED_MODULE_2__["sequence"])(col, distinctWith(func)) : xform => {
    let last = NO_VALUE;
    return Object(_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["toTransducer"])((acc, value) => {
      if (last !== NO_VALUE && func(value, last)) {
        return acc;
      }

      last = value;
      return xform[_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](acc, value);
    }, xform);
  };
}

function distinctBy(collection, fn) {
  const [col, func] = Object(modules_utils__WEBPACK_IMPORTED_MODULE_1__["parseFunctionArgs"])(collection, fn);
  return distinctWith(col, (a, b) => Object(modules_utils__WEBPACK_IMPORTED_MODULE_1__["sameValueZero"])(func(a), func(b)));
}

function distinct(collection) {
  return distinctWith(collection, modules_utils__WEBPACK_IMPORTED_MODULE_1__["sameValueZero"]);
}



/***/ }),

/***/ "./src/modules/drop.js":
/*!*****************************!*\
  !*** ./src/modules/drop.js ***!
  \*****************************/
/*! exports provided: drop, dropWhile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drop", function() { return drop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dropWhile", function() { return dropWhile; });
/* harmony import */ var _chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chanko/xdcore */ "../xdcore/lib/chanko-xdcore.js");
/* harmony import */ var _chanko_xdcore__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var modules_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! modules/utils */ "./src/modules/utils.js");
/* harmony import */ var modules_transduction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! modules/transduction */ "./src/modules/transduction.js");
/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */




function drop(collection, n) {
  const [col, num] = Object(modules_utils__WEBPACK_IMPORTED_MODULE_1__["parseNumberArgs"])(collection, n);
  return col ? Object(modules_transduction__WEBPACK_IMPORTED_MODULE_2__["sequence"])(col, drop(num)) : xform => {
    let i = 0;
    return Object(_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["toTransducer"])((acc, value) => i++ < num ? acc : xform[_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](acc, value), xform);
  };
}

function dropWhile(collection, fn) {
  const [col, func] = Object(modules_utils__WEBPACK_IMPORTED_MODULE_1__["parseFunctionArgs"])(collection, fn);
  return col ? Object(modules_transduction__WEBPACK_IMPORTED_MODULE_2__["sequence"])(col, dropWhile(func)) : xform => {
    let dropping = true;
    return Object(_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["toTransducer"])((acc, value) => {
      if (dropping) {
        if (func(value)) {
          return acc;
        }

        dropping = false;
      }

      return xform[_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](acc, value);
    }, xform);
  };
}



/***/ }),

/***/ "./src/modules/filter.js":
/*!*******************************!*\
  !*** ./src/modules/filter.js ***!
  \*******************************/
/*! exports provided: filter, reject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reject", function() { return reject; });
/* harmony import */ var _chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chanko/xdcore */ "../xdcore/lib/chanko-xdcore.js");
/* harmony import */ var _chanko_xdcore__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var modules_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! modules/utils */ "./src/modules/utils.js");
/* harmony import */ var modules_transduction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! modules/transduction */ "./src/modules/transduction.js");
/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */




function filter(collection, fn) {
  const [col, func] = Object(modules_utils__WEBPACK_IMPORTED_MODULE_1__["parseFunctionArgs"])(collection, fn);
  return col ? Object(modules_transduction__WEBPACK_IMPORTED_MODULE_2__["sequence"])(col, filter(func)) : xform => Object(_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["toTransducer"])((acc, value) => func(value) ? xform[_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](acc, value) : acc, xform);
}

function reject(collection, fn) {
  const [col, func] = Object(modules_utils__WEBPACK_IMPORTED_MODULE_1__["parseFunctionArgs"])(collection, fn);
  return filter(col, Object(modules_utils__WEBPACK_IMPORTED_MODULE_1__["complement"])(func));
}



/***/ }),

/***/ "./src/modules/map.js":
/*!****************************!*\
  !*** ./src/modules/map.js ***!
  \****************************/
/*! exports provided: map, flatMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flatMap", function() { return flatMap; });
/* harmony import */ var _chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chanko/xdcore */ "../xdcore/lib/chanko-xdcore.js");
/* harmony import */ var _chanko_xdcore__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var modules_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! modules/utils */ "./src/modules/utils.js");
/* harmony import */ var modules_transduction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! modules/transduction */ "./src/modules/transduction.js");
/* harmony import */ var modules_basic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! modules/basic */ "./src/modules/basic.js");
/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */





function map(collection, fn) {
  const [col, func] = Object(modules_utils__WEBPACK_IMPORTED_MODULE_1__["parseFunctionArgs"])(collection, fn);
  return col ? Object(modules_transduction__WEBPACK_IMPORTED_MODULE_2__["sequence"])(col, map(func)) : xform => Object(_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["toTransducer"])((acc, value) => xform[_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](acc, func(value)), xform);
}

function flatMap(collection, fn) {
  const [col, func] = Object(modules_utils__WEBPACK_IMPORTED_MODULE_1__["parseFunctionArgs"])(collection, fn);
  return col ? Object(modules_transduction__WEBPACK_IMPORTED_MODULE_2__["sequence"])(col, Object(modules_transduction__WEBPACK_IMPORTED_MODULE_2__["compose"])(map(func), Object(modules_basic__WEBPACK_IMPORTED_MODULE_3__["flatten"])())) : Object(modules_transduction__WEBPACK_IMPORTED_MODULE_2__["compose"])(map(func), Object(modules_basic__WEBPACK_IMPORTED_MODULE_3__["flatten"])());
}



/***/ }),

/***/ "./src/modules/take.js":
/*!*****************************!*\
  !*** ./src/modules/take.js ***!
  \*****************************/
/*! exports provided: take, takeWhile, takeNth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "take", function() { return take; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "takeWhile", function() { return takeWhile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "takeNth", function() { return takeNth; });
/* harmony import */ var _chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chanko/xdcore */ "../xdcore/lib/chanko-xdcore.js");
/* harmony import */ var _chanko_xdcore__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var modules_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! modules/utils */ "./src/modules/utils.js");
/* harmony import */ var modules_transduction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! modules/transduction */ "./src/modules/transduction.js");
/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */




function take(collection, n) {
  const [col, num] = Object(modules_utils__WEBPACK_IMPORTED_MODULE_1__["parseNumberArgs"])(collection, n);
  return col ? Object(modules_transduction__WEBPACK_IMPORTED_MODULE_2__["sequence"])(col, take(num)) : xform => {
    let i = 0;
    return Object(_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["toTransducer"])((acc, value) => {
      let result = acc;

      if (i < num) {
        result = xform[_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](acc, value);

        if (i === num - 1) {
          result = Object(_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["ensureCompleted"])(result);
        }
      }

      i++;
      return result;
    }, xform);
  };
}

function takeWhile(collection, fn) {
  const [col, func] = Object(modules_utils__WEBPACK_IMPORTED_MODULE_1__["parseFunctionArgs"])(collection, fn);
  return col ? Object(modules_transduction__WEBPACK_IMPORTED_MODULE_2__["sequence"])(col, takeWhile(func)) : xform => Object(_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["toTransducer"])((acc, value) => func(value) ? xform[_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](acc, value) : Object(_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["ensureCompleted"])(acc), xform);
}

function takeNth(collection, n) {
  const [col, num] = Object(modules_utils__WEBPACK_IMPORTED_MODULE_1__["parseNumberArgs"])(collection, n);
  return col ? Object(modules_transduction__WEBPACK_IMPORTED_MODULE_2__["sequence"])(col, takeNth(num)) : xform => {
    let i = -1;
    return Object(_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["toTransducer"])((acc, value) => ++i % num === 0 ? xform[_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](acc, value) : acc, xform);
  };
}



/***/ }),

/***/ "./src/modules/transduction.js":
/*!*************************************!*\
  !*** ./src/modules/transduction.js ***!
  \*************************************/
/*! exports provided: transduce, sequence, into, asArray, asObject, asString, asIterator, compose, toReducer, toFunction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transduce", function() { return transduce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sequence", function() { return sequence; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "into", function() { return into; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asArray", function() { return asArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asObject", function() { return asObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asString", function() { return asString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asIterator", function() { return asIterator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return compose; });
/* harmony import */ var _chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chanko/xdcore */ "../xdcore/lib/chanko-xdcore.js");
/* harmony import */ var _chanko_xdcore__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toReducer", function() { return _chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["toReducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toFunction", function() { return _chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["toFunction"]; });

/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

/**
 * Functions dealing with the actual transformation of values and for choosing
 * the reducer during transduction.
 *
 * @module xduce/transformation
 * @private
 */

/**
 * Creates an iterator that is also a transducer, transforming its collection
 * one element at a time. This is the actual output of the
 * {@link module:xduce.asIterator|asIterator} function, as well as the output of
 * the {@link module:xduce.sequence|sequence} function when the input is an
 * iterator.
 *
 * The end user need not be concerned with the type of the output iterator in
 * these circumstances; the end user need only care that the output is, in fact,
 * an iterator and can be expected to act like one. For this reason, this
 * function and the type it returns are not exported.
 *
 * This object supports non-1-to-1 correspondences between input and output
 * values. For example, a filter transformation might return fewer output
 * elements than were in the input collection, while a repeat transformation
 * will return more. In either case, `next` in this class will return one
 * element per call.
 *
 * @param {module:xduce-tools.Iterable} collection the input collection that the
 *     produced iterator will be iterating over.
 * @param {module:xduce-tools.TransducerFunction} xform A function that creates a
 *     transducer object that defines the transformation being done to the
 *     iterator's elements. Any of the transducers in the
 *     {@link module:xduce|xduce} module can produce a suitable transducer
 *     function.
 * @return {module:xduce-tools.Iterator} An iterator that will transform its input
 *     elements using the transducer function as its
 *     `{@link module:xduce-tools.NextFunction|next}` function is called.
 * @private
 */

function transducingIterator(collection, xform) {
  const stepReducer = {
    [_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](xiter, input) {
      xiter.items.unshift(input);
      return xiter;
    },

    [_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["protocols"].final](value) {
      return value;
    }

  };
  const iter = Object(_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["iterator"])(collection);
  const xf = xform(stepReducer);
  let completed = false; // This array is the key to working properly with step functions that return
  // more than one value. All of them are put into the items array. As long as
  // this array has values in it, the `next` function will return one value
  // popped from it rather than running the step function again.

  const items = []; // The `next` function here is rather simple. If there is already something in
  // the `items` array, it's returned. If not, the `step` function is run and,
  // if that results in a value in the `items` array, it's returned. Otherwise
  // an object with `{ done: true }` is returned.

  function next() {
    if (items.length === 0) {
      step();
    }

    if (items.length === 0) {
      return {
        done: true
      };
    }

    return {
      value: items.pop(),
      done: false
    };
  } // This is where most of the work happens. It gets the next value from the
  // input collection and runs it through the reduction step functions. If that
  // results in a value, it's given to the stepper object (which adds it to the
  // `items` array); otherwise the while loop continues to the next element of
  // the input collection. This ensures that there's something for the `next`
  // function to return each time it's called.
  //
  // If the collection has finished or if the step function returns a completed
  // object (which take will do after its limit of elements has been reached,
  // for instance), the iteration is finished by calling the result function.


  function step() {
    const count = items.length;

    while (items.length === count) {
      const stepValue = iter.next();

      if (stepValue.done || completed) {
        xf[_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["protocols"].final](result);
        break;
      }

      completed = Object(_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["isCompleted"])(xf[_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](result, stepValue.value));
    }
  } // The `result` name is hoisted and used in functions further up, so we have
  // to retain that name and can't just return the object without naming it


  const result = {
    items,
    next,
    step
  };
  return result;
}
/**
 * Transforms the elements of the input collection and reduces them into an
 * output collection.
 *
 * This is the lowest-level of the transduction functions that is likely to see
 * regular use. It does not assume anything about the reducer, as it asks for it
 * to be passed explicitly. This means that any kind of collection can be
 * produced, since the reducer is not tied to the input collection in any way.
 *
 * `transduce` also will accept an initial value for the resulting collection as
 * the optional last parameter. If this parameter isn't present, then the
 * initial value is determined from the transducer init protocol property on the
 * reducer. Note however that many reducers may not provide an initial value,
 * and in those cases it will *have* to be passed as a parameter.
 *
 * ```
 * import { map, transduce } from "@chanko/xduce";
 * import { protocols as p } from "@chanko/xduce-tools";
 *
 * const xform = map(x => x + 1);
 *
 * const arrayReducer = {
 *   [p.init]() { return []; },
 *   [p.final](x) { return x; },
 *   [p.step](acc, x) {
 *     acc.push(x);
 *     return acc;
 *   }
 * };
 *
 * const stringReducer = {
 *   [p.init]() { return ''; },
 *   [p.final](x) { return x; },
 *   [p.step](acc, x) { return acc + x; }
 * };
 *
 * let result = transduce([1, 2, 3, 4, 5], xform, arrayReducer);
 * console.log(result);   // -> [2, 3, 4, 5, 6]
 *
 * result = transduce([1, 2, 3, 4, 5], xform, stringReducer);
 * console.log(result);   // -> "23456"
 *
 * result = transduce('12345', xform, arrayReducer);
 * console.log(result);   // -> [2, 3, 4, 5, 6]
 *
 * result = transduce('12345', xform, stringReducer);
 * console.log(result);   // -> "23456"
 * ```
 *
 * These examples illustrate a number of important concepts. First of all, the
 * transducer function is independent of the type of the collection; the same
 * transducer function is used no matter the type of input or output
 * collections. Secondly, two reducers are defined. These are objects that
 * conform to the transducer protocol (see the documentation on
 * `{@link module:xduce-tools.protocols}`) and that know how to produce the output
 * collection of choice. In this case, the reducers know how to create new
 * arrays and strings (the `init` protocol) and how to add elements to arrays
 * and strings (the `step` protocol). Because these reducers do have `init`
 * protocol properties, the `transduce` calls do not require explicit initial
 * collections.
 *
 * The final point is that `transduce` can accept any kind of iterable
 * collection, and by passing in the proper reducer, it can produce any kind of
 * output collection. The same `transduce` function and the same map transformer
 * is used in all four examples, despite the input/output combination being
 * different in all four.
 *
 * The `reducer` parameter *can* be a reducer function instead of a reducer
 * object. If this is the case, the `init` parameter is required because a
 * function cannot define an initial value itself.
 *
 * The `init` collection doesn't have to be empty. If it isn't, the elements
 * that are already in it are retained and the transformed input elements are
 * reduced into the collection normally.
 *
 * Of course, the examples are not really necessary - the same thing could be
 * accomplished using `{@link module:xduce.into|into}` without having to create
 * the reducers (strings and arrays passed to `{@link module:xduce.into|into}`
 * as targets know how to reduce themselves already).
 *
 * @memberof module:xduce
 * @param {module:xduce-tools.Iterable} collection The input collection. The only
 *     requirement of this collection is that it implement the `iterable`
 *     protocol. Special support is provided by the library for objects, so they
 *     can also be used.
 * @param {module:xduce-tools.TransducerFunction} [xform] A function that creates a
 *     transducer object that defines the transformation being done to the input
 *     collection's elements. Any of the transducers in the
 *     {@link module:transducers|transducers} module can produce a suitable
 *     transducer function.
 * @param {(module:xduce-tools.StepFunction|module:xduce-tools.Reducer)} reducer Either a
 *     function or a reducer object that implements the transducer protocols
 *     (`init` is  only required if the `init` parameter is not present). This
 *     object must know how to produce an output collection through its `step`
 *     and `result` protocol functions. If this parameter is a function, then it
 *     is turned into a valid reducer object.
 * @param {module:xduce-tools.Reducible} [init] A collection of the same type as the
 *     output collection. If this is not present, then the reducer's `init`
 *     protocol function is called instead to get the initial collection. If it
 *     is present and not empty, then the existing elements remain and the
 *     transformed input collection elements are added to it.
 * @return {*} A collection of a type determined by the passed reducer. The
 *     elements of this collection are the results from the transformer function
 *     being applied to each element of the input collection.
 */


function transduce(collection, xform, reducer, init) {
  const r = Object(_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(reducer) ? Object(_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["toReducer"])(reducer) : reducer;
  const i = init !== null && init !== void 0 ? init : r[_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["protocols"].init]();
  const xf = xform ? xform(r) : r;
  return Object(_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["reduce"])(collection, xf, i);
}
/**
 * Transforms the elements of the input collection and reduces them into a new
 * array.
 *
 * The transformer is optional. If it isn't present, this function just converts
 * the input collection into an array.
 *
 * ```
 * import { asArray, map } from "@chanko/xduce";
 *
 * const xform = map(x => x + 1);
 *
 * let result = asArray([1, 2, 3, 4, 5], xform);
 * console.log(result);   // -> [2, 3, 4, 5, 6]
 *
 * result = asArray('12345', xform);
 * console.log(result);   // -> [2, 3, 4, 5, 6]
 *
 * result = asArray('12345');
 * console.log(result);   // -> [1, 2, 3, 4, 5]
 *
 * result = asArray({a: 1, b: 2});
 * console.log(result);   // -> [{ a: 1 }, { b: 2 }]
 * ```
 *
 * @memberof module:xduce
 * @param {module:xduce-tools.Iterable} collection The input collection. The only
 *     requirement of this collection is that it implement the `iterable`
 *     protocol. Special support is provided by the library for objects, so they
 *     can also be used.
 * @param {module:xduce-tools.TransducerFunction} [xform] A function that creates a
 *     transducer object that defines the transformation being done to the input
 *     collection's elements. Any of the transducers in the
 *     {@link module:xduce|xduce} module can produce a suitable transducer
 *     function. If this isn't present, the input collection will simply be
 *     reduced into an array without transformation.
 * @return {Array} An array containing all of the transformed values from the
 *     input collection elements.
 */


function asArray(collection, xform) {
  return transduce(collection, xform, Object(_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["toReducer"])([]));
}
/**
 * Transforms the elements of the input collection and reduces them into a new
 * object.
 *
 * The transformer is optional. If it isn't present, this function just converts
 * the input collection into an object. When this happens, if the input
 * collection is not an object or an array of objects, numbers starting at `0`
 * will be used as keys for the values provided by the input collection.
 *
 * ```
 * import { asObject, kv, map } from "@chanko/xduce";
 *
 * const fn = prop => {
 *   const { k, v } = kv(prop);
 *   return { [k]: v + 1 };
 * }
 * const xform = map(fn);
 *
 * let result = asObject({ a: 1, b: 2 }, xform);
 * console.log(result);   // -> { a: 2, b: 3 }
 *
 * result = asObject([{ a: 1 }, { b: 2 }], xform);
 * console.log(result);   // -> { a: 2, b: 3 }
 *
 * result = asObject([1, 2, 3, 4, 5]);
 * console.log(result);   // -> { 0: 1, 1: 2, 2: 3, 3: 4, 4: 5 }
 *
 * result = asObject([{ a: 1 }, { b: 2 }]);
 * console.log(result);   // -> { a: 1, b: 2 }
 *
 * result = asObject("hello");
 * console.log(result);   // -> { 0: "h", 1: "e", 2: "l", 3: "l", 4: "o" }
 * ```
 *
 * @memberof module:xduce
 * @param {module:xduce-tools.Iterable} collection The input collection. The only
 *     requirement of this collection is that it implement the `iterable`
 *     protocol. Special support is provided by the library for objects, so they
 *     can also be used.
 * @param {module:xduce-tools.Tranducer} [xform] A function that creates a transducer
 *     object that defines the transformation being done to the input
 *     collection's elements. Any of the transducers in the
 *     {@link module:xduce|xduce} module can produce a suitable transducer
 *     function. If this isn't present, the input collection will simply be
 *     reduced into an object without transformation.
 * @return {Object} An object containing all of the transformed values from the
 *     input collection elements.
 */


function asObject(collection, xform) {
  return transduce(collection, xform, Object(_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["toReducer"])({}));
}
/**
 * Transforms the elements of the input collection and reduces them into a new
 * string.
 *
 * The transformer is optional. If it isn't present, this function just converts
 * the input collection into an string. If this is the case and the input
 * collection is an object, only the values will be concatenated into a string.
 *
 * Otherwise, transforming objects into strings only makes much sense if the
 * transducer produces only a single output from each of the objects key/value
 * pairs.
 *
 * ```
 * import { transduce, key, map } from "@chanko/xduce";
 *
 * const xform = map(x => x.toUpperCase());
 *
 * let result = asString('hello', xform);
 * console.log(result);   // -> "HELLO"
 *
 * result = asString(['h', 'e', 'l', 'l', 'o'], xform);
 * console.log(result);   // -> "HELLO"
 *
 * result = asString({ a: 1, c: 2, b: 3 }, map(key));
 * console.log(result);   // -> "acb"
 *
 * result = asString([1, 2, 3, 4, 5]);
 * console.log(result);   // -> "12345"
 *
 * result = asString({ a: 1, c: 2, b: 3 });
 * console.log(result);   // -> "123"
 * ```
 *
 * @memberof module:xduce
 * @param {module:xduce-tools.Iterable} collection The input collection. The only
 *     requirement of this collection is that it implement the `iterable`
 *     protocol. Special support is provided by the library for objects, so they
 *     can also be used.
 * @param {module:xduce-tools.TransducerFunction} [xform] A function that creates a
 *     transducer object that defines the transformation being done to the input
 *     collection's elements. Any of the transducers in the
 *     {@link module:transducers|transducers} module can produce a suitable
 *     transducer function. If this isn't present, the input collection will
 *     simply be reduced into a string without transformation.
 * @return {String} A string containing all of the transformed values from the
 *     input collection elements.
 */


function asString(collection, xform) {
  return transduce(collection, xform, Object(_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["toReducer"])(""));
}
/**
 * Transforms the elements of the input collection and reduces them into a new
 * iterator.
 *
 * The transformer is optional. If it isn't present, this function just converts
 * the input collection into an iterator.
 *
 * *(The results here are shown passed through `asArray` because there's no
 * printable representation of an iterator to show. The `asArray` calls are for
 * demonstration purposes only.)*
 *
 * ```
 * import { asIterator, asArray, map } from "@chanko/xduce";
 *
 * const xform = map(x => x + 1);
 * function* five() {
 *   for (let i = 1; i <= 5; ++i) {
 *     yield i;
 *   }
 * };
 *
 * let result = asIterator(five(), xform);
 * console.log(asArray(result));   // -> [2, 3, 4, 5, 6]
 *
 * result = asIterator([1, 2, 3, 4, 5], xform);
 * console.log(asArray(result));   // -> [2, 3, 4, 5, 6]
 *
 * result = asIterator([1, 2, 3, 4, 5]);
 * console.log(asArray(result));   // -> [1, 2, 3, 4, 5]
 *
 * result = asIterator({a: 1, b: 2});
 * console.log(asArray(result));   // -> [{ a: 1 }, { b: 2 }]
 * ```
 *
 * @memberof module:xduce
 * @param {module:xduce-tools.Iterable} collection The input collection. The only
 *     requirement of this collection is that it implement the `iterable`
 *     protocol. Special support is provided by the library for objects, so they
 *     can also be used.
 * @param {module:xduce-tools.TransducerFunction} [xform] A function that creates a
 *     transducer object that defines the transformation being done to the input
 *     collection's elements. Any of the transducers in the
 *     {@link module:transducers|transducers} module can produce a suitable
 *     transducer function. If this isn't present, the input collection will
 *     simply be reduced into an iterator without transformation.
 * @return {module:xduce-tools.Iterator} An iterator containing all of the transformed
 *     values from the input collection elements.
 */


function asIterator(collection, xform) {
  return xform ? transducingIterator(collection, xform) : Object(_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["iterator"])(collection);
}
/**
 * Transforms the elements of the input collection and reduces them into a new
 * collection of the same type.
 *
 * This is the highest level of the three main transduction functions
 * (`sequence`, `{@link module:xduce.into|into}`, and
 * `{@link module:xduce.transduce|transduce}`). It creates a new collection of
 * the same type as the input collection and reduces the transformed elements
 * into it. Additionally, unlike `{@link module:xduce.into|into}` and
 * `{@link module:xduce.transduce|transduce}`, this function is capable of
 * producing an iterator (as long as the input is an iterator).
 *
 * The input collection must not only implement the `iterator` protocol (as in
 * the last two functions) but also the `init`, `result`, and `step` transducer
 * protocols. Special support is provided for arrays, strings, objects, and
 * iterators, so they need not implement any protocol.
 *
 * The obvious limitation of this function is that the type of output collection
 * cannot be chosen. Since it is always the same as the input collection, this
 * function cannot be used to convert a collection into a different type.
 *
 * ```
 * import { sequence, map } from "@chanko/xduce";
 *
 * const xform = map(x => x + 1);
 *
 * let result = sequence([1, 2, 3, 4, 5], xform);
 * console.log(result);   // -> result = [2, 3, 4, 5, 6]
 *
 * result = sequence('12345', xform);
 * console.log(result);   // -> result = '23456'
 * ```
 *
 * These examples are identical to some of the examples from the `asX`
 * functions. Other examples are not possible with `sequence` because they have
 * different input and output collection types.
 *
 * @memberof module:xduce
 * @param {module:xduce-tools.ReducibleIterable} collection The input collection. This
 *     must implement the `iterator`, `init`, `result`, and `step` protocols.
 *     Special support is provided for arrays, strings, objects, and iterators,
 *     so they do not have to implement any protocols.
 * @param {module:xduce-tools.TransducerFunction} xform A function that creates a
 *     transducer object that defines the transformation being done to the input
 *     collection's elements. Any of the transducers in the
 *     {@link module:xduce-tools.transducers|transducers} module can produce a suitable
 *     transducer function.
 * @return {module:xduce-tools.ReducibleIterable} A collection of the same type as the
 *     input collection, containing all of the transformed values from the input
 *     collection elements.
 */


function sequence(collection, xform) {
  switch (true) {
    case Object(_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["isArray"])(collection):
      return asArray(collection, xform);

    case Object(_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["isObject"])(collection):
      return asObject(collection, xform);

    case Object(_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["isString"])(collection):
      return asString(collection, xform);

    case Object(_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["isImplemented"])(collection, "step"):
      return transduce(collection, xform, collection);

    case Object(_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["isImplemented"])(collection, "iterator"):
      return asIterator(collection, xform);

    default:
      throw Error(`Cannot sequence collection: ${collection}`);
  }
}
/**
 * Transforms the elements of the input collection and reduces them into the
 * target collection.
 *
 * This is much like `{@link module:xduce.transduce|transduce}`, except that
 * instead of explicitly providing a reducer (and perhaps an initial
 * collection), the target collection acts as a reducer itself. This requires
 * that the collection implement the `init`, `result`, and `step` transducer
 * protocol functions.
 *
 * If no transducer function is provided, the input collection elements are
 * reduced into the target collection without being transformed. This can be
 * used to convert one kind of collection into another.
 *
 * ```
 * import { into, map } from "@chanko/xduce";
 *
 * const xform = map(x => x + 1);
 *
 * let result = into([], [1, 2, 3, 4, 5], xform);
 * console.log(result);   // -> [2, 3, 4, 5, 6]
 *
 * result = into("", [1, 2, 3, 4, 5], xform);
 * console.log(result);   // -> "23456"
 *
 * result = into([], "12345", xform);
 * console.log(result);   // -> [2, 3, 4, 5, 6]
 *
 * result = into("", "12345", xform);
 * console.log(result);   // -> "23456"
 * ```
 *
 * @memberof module:xduce
 * @param {module:xduce-tools.Reducible} target The collection into which all of the
 *     transformed input collection elements will be reduced. This collection
 *     must implement the `init`, `result`, and `step` protocol functions from
 *     the transducer protocol. Special support is provided for arrays, strings,
 *     and objects, so they need not implement the protocol.
 * @param {module:xduce-tools.Iterable} collection The input collection. The only
 *     requirement of this collection is that it implement the `iterator`
 *     protocol. Special support is provided by the library for objects, to they
 *     can also be used.
 * @param {module:xduce-tools.TransducerFunction} [xform] A function that creates a
 *     transducer object that defines the transformation being done to the input
 *     collection's elements. Any of the transducers in the
 *     {@link module:xduce|xduce} mnodule can produce a suitable transducer
 *     function. If this isn't present, the input collection will simply be
 *     reduced into the target collection without transformation.
 * @return {module:xduce-tools.Reducible} The `target` collection, with all of the
 *     tranformed input collection elements reduced onto it.
 */


function into(target, collection, xform) {
  switch (true) {
    case Object(_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["isArray"])(target):
      return transduce(collection, xform, Object(_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["toReducer"])([]), target);

    case Object(_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["isObject"])(target):
      return transduce(collection, xform, Object(_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["toReducer"])({}), target);

    case Object(_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["isString"])(target):
      return transduce(collection, xform, Object(_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["toReducer"])(""), target);

    case Object(_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["isImplemented"])(target, "step"):
      return transduce(collection, xform, target, target);

    default:
      throw Error(`Cannot reduce collection into ${target}: ${collection}`);
  }
}
/**
 * Composes two or more transducer functions into a single transducer function.
 *
 * Each function that takes a transducer function
 * (`{@link module:xduce.sequence|sequence}`, `{@link module:xduce.into|into}`,
 * etc.) is only capable of accepting one of them. If there is a need to have
 * several transducers chained together, then use `compose` to create a
 * transducer function that does what all of them do.
 *
 * NOTE: In functional programming, a compose function is generally ordered so
 * that the first-executed function is listed last. This is done in the opposite
 * way, with the first transducer executing first, etc. This is a more natural
 * ordering for transducer functions because there is a very real directional
 * pull of elements through a chain of composed transducer functions.
 *
 * ```
 * import { compose, sequence } from "@chanko/xduce";
 * import { map, filter, take } from "@chanko/transducers";
 *
 * const add1 = x => x + 1;
 * const odd = x => x % 2 !== 0;
 *
 * const xform = compose(map(add1), filter(odd), take(3));
 *
 * const result = sequence([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], xform);
 * console.log(result);   // -> [3, 5, 7];
 * ```
 *
 * @memberof module:xduce
 * @param {...module:xduce-tools.TransducerFunction} fns One or more function that each
 *     create a transducer object that defines the transformation being done to
 *     a collection's elements. Any of the transducers in the
 *     {@link module:xduce|xduce} module can produce a suitable transducer
 *     function.
 * @return {module:xduce-tools.TransducerFunction} A transducer function that produces
 *     a transducer object that performs *all* of the transformations of the
 *     objects produced by the input transducer functions.
 */


function compose(...fns) {
  const reversed = fns.reverse();
  return value => reversed.reduce((acc, fn) => fn(acc), value);
}



/***/ }),

/***/ "./src/modules/unique.js":
/*!*******************************!*\
  !*** ./src/modules/unique.js ***!
  \*******************************/
/*! exports provided: unique, uniqueBy, uniqueWith */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unique", function() { return unique; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uniqueBy", function() { return uniqueBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uniqueWith", function() { return uniqueWith; });
/* harmony import */ var _chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chanko/xdcore */ "../xdcore/lib/chanko-xdcore.js");
/* harmony import */ var _chanko_xdcore__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var modules_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! modules/utils */ "./src/modules/utils.js");
/* harmony import */ var modules_transduction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! modules/transduction */ "./src/modules/transduction.js");
/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */




function uniqueWith(collection, fn) {
  const [col, func] = Object(modules_utils__WEBPACK_IMPORTED_MODULE_1__["parseFunctionArgs"])(collection, fn);
  return col ? Object(modules_transduction__WEBPACK_IMPORTED_MODULE_2__["sequence"])(col, uniqueWith(func)) : xform => {
    const uniques = [];
    return Object(_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["toTransducer"])((acc, value) => {
      if (uniques.some(u => func(value, u))) {
        return acc;
      }

      uniques.push(value);
      return xform[_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](acc, value);
    }, xform);
  };
}

function uniqueBy(collection, fn) {
  const [col, func] = Object(modules_utils__WEBPACK_IMPORTED_MODULE_1__["parseFunctionArgs"])(collection, fn);
  return uniqueWith(col, (a, b) => Object(modules_utils__WEBPACK_IMPORTED_MODULE_1__["sameValueZero"])(func(a), func(b)));
}

function unique(collection) {
  return uniqueWith(collection, modules_utils__WEBPACK_IMPORTED_MODULE_1__["sameValueZero"]);
}



/***/ }),

/***/ "./src/modules/utils.js":
/*!******************************!*\
  !*** ./src/modules/utils.js ***!
  \******************************/
/*! exports provided: sameValueZero, parseNumberArgs, parseFunctionArgs, kv, key, value, complement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sameValueZero", function() { return sameValueZero; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseNumberArgs", function() { return parseNumberArgs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseFunctionArgs", function() { return parseFunctionArgs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kv", function() { return kv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "key", function() { return key; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "value", function() { return value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "complement", function() { return complement; });
/* harmony import */ var _chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chanko/xdcore */ "../xdcore/lib/chanko-xdcore.js");
/* harmony import */ var _chanko_xdcore__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

/**
 * A collection of miscellaneous functions that don't particularly fit anywhere
 * else.
 *
 * @module xduce/utils
 * @private
 */

/**
 * Determines equality by the SameValueZero method, which defines that `NaN`
 * equals itself and `+0` equals `-0`.
 *
 * @param {number} a The first number to compare.
 * @param {number} b The second number to compare.
 * @returns {boolean} Either `true` if the two numbers are equal, or `false` if
 *     they are not.
 * @private
 */

function sameValueZero(a, b) {
  return a === b || isNaN(a) && isNaN(b);
}
/**
 * Parses arguments for transducers that take numbers. The two arguments are
 * a collection and a number, but the collection is optional. This function
 * works out whether a collection exists and returns a collection (which may be
 * `null`) and a number.
 *
 * @param {*} [collection] An optional collection that the transducer will act
 *     upon.
 * @param {number} n A number whose purpose depends on the transducer.
 * @returns {Array<*, number>} An array containing the collection (which may be
 *     `null`) as the first element and the number as the second.
 * @private
 */


function parseNumberArgs(collection, n) {
  return Object(_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(collection) ? [null, collection] : [collection, n];
}
/**
 * Parses arguments for transducers that take functions. The two arguments are a
 * collection and a function, but the collection is optional. This function
 * works out which exist and returns a collection (which may be `null`) and a
 * function.
 *
 * @param {*} [collection] An optional collection that the transducer will act
 *     upon.
 * @param {Function} fn A function meant to act via the transducer.
 * @private
 */


function parseFunctionArgs(collection, fn) {
  return Object(_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(collection) ? [null, collection] : [collection, fn];
}
/**
 * A convenience function that returns the first key and value in an object as a
 * two-property object, one property for the key and one for the value. This is
 * intended to work with the values provided by an object iterator, as the
 * syntax of objects doesn't work very nicely with single-property objects.
 *
 * ```
 * const obj = { c: 1, a: 2, b: 3 };
 * const iter = asIterator(obj);
 *
 * let value = iter.next().value;
 * console.log(value);             // -> { c: 1 }
 * console.log(property(value));   // -> { k: "c", v: 1 }
 *
 * value = iter.next().value;
 * console.log(value);             // -> { a: 2 }
 * console.log(property(value));   // -> { k: "a", v: 2 }
 *
 * value = iter.next().value;
 * console.log(value);             // -> { b: 3 }
 * console.log(property(value));   // -> { k: "b", v: 3 }
 * ```
 *
 * @memberof module:xduce
 * @param {object} obj The object whose first property is returned.
 * @return {module:xduce-tools.PropertyObject} The property as a two-property object.
 */


function kv(obj) {
  const key = Object.keys(obj)[0];
  return {
    k: key,
    v: obj[key]
  };
}
/**
 * A convenience function that returns the key of the first property of an
 * object. This is meant for use with object iterators to more conveniently
 * access parts of the single-property objects that they emit.
 *
 * @memberof module:xduce
 * @param {object} obj The object whose first key is returned.
 * @return {(String|Symbol)} The key of the object's first property.
 */


function key(obj) {
  return kv(obj).k;
}
/**
 * A convenience function that returns the value of the first property of an
 * object. This is meant for use with object iterators to more conveniently
 * access parts of the single-property objects that they emit.
 *
 * @memberof module:xduce
 * @param {object} obj The object whose first value is returned.
 * @return {*} The value of the object's first property.
 */


function value(obj) {
  return kv(obj).v;
}
/**
 * Accepts a predicate function and returns a new predicate function which
 * returns the opposite of the original function.
 *
 * @memberof module:xduce
 * @param {module:xduce.PredicateFunction} fn A predicate function.
 * @returns {module:xduce.PredicateFunction} A predicate function that returns
 *     the opposite value as the supplied function.
 */


function complement(fn) {
  return (...args) => !fn(...args);
}



/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly94ZHVjZS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8veGR1Y2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8veGR1Y2UveGRjb3JlL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly94ZHVjZS94ZGNvcmUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8veGR1Y2UveGRjb3JlL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly94ZHVjZS94ZGNvcmUvc3JjL21vZHVsZXMvaXRlcmF0aW9uLmpzIiwid2VicGFjazovL3hkdWNlL3hkY29yZS9zcmMvbW9kdWxlcy9wcm90b2NvbC5qcyIsIndlYnBhY2s6Ly94ZHVjZS94ZGNvcmUvc3JjL21vZHVsZXMvcmVkdWN0aW9uLmpzIiwid2VicGFjazovL3hkdWNlL3hkY29yZS9zcmMvbW9kdWxlcy91dGlscy5qcyIsIndlYnBhY2s6Ly94ZHVjZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly94ZHVjZS8uL3NyYy9tb2R1bGVzL2Jhc2ljLmpzIiwid2VicGFjazovL3hkdWNlLy4vc3JjL21vZHVsZXMvY2h1bmsuanMiLCJ3ZWJwYWNrOi8veGR1Y2UvLi9zcmMvbW9kdWxlcy9kaXN0aW5jdC5qcyIsIndlYnBhY2s6Ly94ZHVjZS8uL3NyYy9tb2R1bGVzL2Ryb3AuanMiLCJ3ZWJwYWNrOi8veGR1Y2UvLi9zcmMvbW9kdWxlcy9maWx0ZXIuanMiLCJ3ZWJwYWNrOi8veGR1Y2UvLi9zcmMvbW9kdWxlcy9tYXAuanMiLCJ3ZWJwYWNrOi8veGR1Y2UvLi9zcmMvbW9kdWxlcy90YWtlLmpzIiwid2VicGFjazovL3hkdWNlLy4vc3JjL21vZHVsZXMvdHJhbnNkdWN0aW9uLmpzIiwid2VicGFjazovL3hkdWNlLy4vc3JjL21vZHVsZXMvdW5pcXVlLmpzIiwid2VicGFjazovL3hkdWNlLy4vc3JjL21vZHVsZXMvdXRpbHMuanMiXSwibmFtZXMiOlsia2V5cyIsIk9iamVjdCIsImluZGV4IiwiayIsIm9iaiIsImN1cnJlbnQiLCJmbiIsImlzRnVuY3Rpb24iLCJ2YWx1ZSIsIlN5bWJvbCIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJmdW5jdGlvbkl0ZXJhdG9yIiwiaXNPYmplY3QiLCJvYmplY3RJdGVyYXRvciIsImlzSW1wbGVtZW50ZWQiLCJwcm90b2NvbHMiLCJpbml0Iiwic3RlcCIsImZpbmFsIiwiY29tcGxldGVkIiwiY29sbGVjdGlvbiIsInAiLCJpc1N0cmluZyIsImlzQXJyYXkiLCJFcnJvciIsInYiLCJhY2MiLCJtYXgiLCJNYXRoIiwiQVJSQVlfUkVEVUNFUiIsInRvUmVkdWNlciIsIk9CSkVDVF9SRURVQ0VSIiwiU1RSSU5HX1JFRFVDRVIiLCJyZWR1Y2VyIiwiciIsInJlc3VsdCIsInRyYW5zZHVjZXIiLCJpc0NvbXBsZXRlZCIsImNvbXBsZXRlIiwidW5jb21wbGV0ZSIsIml0ZXIiLCJpdGVyYXRvciIsIm5hbWUiLCJ0b1N0cmluZyIsInByb3RvIiwiY3RvciIsImlzRmluaXRlIiwiQXJyYXkiLCJpZGVudGl0eSIsInNlcXVlbmNlIiwieGZvcm0iLCJ0b1RyYW5zZHVjZXIiLCJmbGF0dGVuIiwic3ViWGZvcm0iLCJpc0l0ZXJhYmxlIiwicmVkdWNlIiwicmVwZWF0IiwibiIsImNvbCIsIm51bSIsInBhcnNlTnVtYmVyQXJncyIsImkiLCJOT19WQUxVRSIsImNodW5rIiwiY291bnQiLCJwYXJ0Iiwib3V0Iiwic2xpY2UiLCJlbnN1cmVVbmNvbXBsZXRlZCIsImNodW5rQnkiLCJmdW5jIiwicGFyc2VGdW5jdGlvbkFyZ3MiLCJsYXN0Iiwic2FtZVZhbHVlWmVybyIsInB1c2giLCJsZW5ndGgiLCJkaXN0aW5jdFdpdGgiLCJkaXN0aW5jdEJ5IiwiYSIsImIiLCJkaXN0aW5jdCIsImRyb3AiLCJkcm9wV2hpbGUiLCJkcm9wcGluZyIsImZpbHRlciIsInJlamVjdCIsImNvbXBsZW1lbnQiLCJtYXAiLCJmbGF0TWFwIiwiY29tcG9zZSIsInRha2UiLCJlbnN1cmVDb21wbGV0ZWQiLCJ0YWtlV2hpbGUiLCJ0YWtlTnRoIiwidHJhbnNkdWNpbmdJdGVyYXRvciIsInN0ZXBSZWR1Y2VyIiwieGl0ZXIiLCJpbnB1dCIsIml0ZW1zIiwidW5zaGlmdCIsInhmIiwibmV4dCIsImRvbmUiLCJwb3AiLCJzdGVwVmFsdWUiLCJ0cmFuc2R1Y2UiLCJhc0FycmF5IiwiYXNPYmplY3QiLCJhc1N0cmluZyIsImFzSXRlcmF0b3IiLCJpbnRvIiwidGFyZ2V0IiwiZm5zIiwicmV2ZXJzZWQiLCJyZXZlcnNlIiwidW5pcXVlV2l0aCIsInVuaXF1ZXMiLCJzb21lIiwidSIsInVuaXF1ZUJ5IiwidW5pcXVlIiwiaXNOYU4iLCJpc051bWJlciIsImt2Iiwia2V5IiwiYXJncyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBLFlBQ0EsMkJBREEsS0FFQSxFQUtBO0FBQ0MsQ0FURCxFQVNDLElBVEQsRUFTQztBQUNEOzs7OztBQ1ZBO0FBQUE7O0FBQ0E7QUFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQTs7O0FBRUE7QUFBQTs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBOztBQUNBOzs7QUFBQTtBQUNBO0FBQUEscUJBREE7O0FBRUE7QUFBQSxrQkFGQTs7QUFHQTtBQUFBO0FBQ0E7O0FBSkE7OztBQU1BO0FBQUE7O0FBQ0E7O0FBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUE7QUFDQTtBQUFBOzs7OztBQUdBO0FBQUE7O0FBQ0E7OztBQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBMEMsNEJBQTFDO0FBQTBDO0FBQTFDO0FBQ0E7QUFBQTtBQUNBOztBQUFBLE9BSkE7OztBQU1BO0FBQUE7O0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBd0Q7QUFBeEQ7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQWlEO0FBQWpEO0FBQ0E7QUFBQSxPQUxBOzs7QUFPQTtBQUFBOztBQUNBO0FBQUE7O0FBQ0E7QUFBQTs7QUFDQTtBQUFBOztBQUNBO0FBQUE7O0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOztBQUFBO0FBQ0E7O0FBQUE7QUFDQTs7QUFBQTtBQUNBOztBQUFBO0FBQ0E7OztBQUFBO0FBQXlDLDBCQUF6QztBQUF5QztBQUF6QztBQUNBOztBQUFBO0FBQWdIO0FBQXFCLFNBQXJJLENBQXFJLElBQXJJLENBQXFJLElBQXJJLEVBQXFJLEdBQXJJO0FBQ0E7O0FBQUE7QUFDQTtBQUFBLE9BVEE7OztBQVdBO0FBQUE7O0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBMkI7QUFBNEIsU0FEdkQ7QUFFQTtBQUFBO0FBQWlDO0FBQWUsU0FGaEQ7QUFHQTs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUEsT0FOQTs7O0FBUUE7QUFBQTs7QUFDQTs7O0FBQUE7QUFBc0Q7QUFBK0QsT0FBckg7OztBQUVBO0FBQUE7O0FBQ0E7OztBQUFBOzs7OztBQUdBO0FBQUE7O0FBQ0E7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7O0FBT0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBK0pBOzs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7OztBQVVBOzs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBOzs7Ozs7Ozs7QUFT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RUFBaUI7QUFDZixRQUFNd0gsR0FBRyxHQUFHM0gsTUFBTSxDQUFDRCxJQUFQLENBQVlJLEdBQVosRUFBaUIsQ0FBakIsQ0FBWjtBQUNBLFNBQU87QUFBRUQsS0FBQyxFQUFFeUgsR0FBTDtBQUFVbkcsS0FBQyxFQUFFckIsR0FBRyxDQUFDd0gsR0FBRDtBQUFoQixHQUFQO0FBQ0Q7QUFFRDs7Ozs7Ozs7Ozs7QUFTQSxTQUFTQSxHQUFULENBQWF4SCxHQUFiLEVBQWtCO0FBQ2hCLFNBQU91SCxFQUFFLENBQUN2SCxHQUFELENBQUYsQ0FBUUQsQ0FBZjtBQUNEO0FBRUQ7Ozs7Ozs7Ozs7O0FBU0EsU0FBU0ssS0FBVCxDQUFlSixHQUFmLEVBQW9CO0FBQ2xCLFNBQU91SCxFQUFFLENBQUN2SCxHQUFELENBQUYsQ0FBUXFCLENBQWY7QUFDRDtBQUVEOzs7Ozs7Ozs7OztBQVNBLFNBQVM2RCxVQUFULENBQW9CaEYsRUFBcEIsRUFBd0I7QUFDdEIsU0FBTyxDQUFDLEdBQUd1SCxJQUFKLEtBQWEsQ0FBQ3ZILEVBQUUsQ0FBQyxHQUFHdUgsSUFBSixDQUF2QjtBQUNEIiwiZmlsZSI6ImNoYW5rby14ZHVjZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInhkdWNlXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInhkdWNlXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJ4ZGNvcmVcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wieGRjb3JlXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuLyoqXG4gKiBUaGUgY29yZSBlbmdpbmUgZm9yIHRyYW5zZHVjZXJzLiBUaGlzIGNvbnNpc3RzIHByaW1hcmlseSBvZiByZWR1Y3Rpb24gc3VwcG9ydFxuICogZm9yIGNoYWlucyBvZiB0cmFuc2R1Y2VycyBidXQgYWxzbyBzdXBwbGllcyBwcm90b2NvbCBkZWZpbml0aW9ucyBhbmQgdXRpbGl0eVxuICogZnVuY3Rpb25zIGZvciB3cml0aW5nIG5ldyB0cmFuc2R1Y2Vycy5cbiAqXG4gKiBUaGUgZ2VuZXJhbCBpZGVhIGlzIHRoYXQgaWYgeW91IG5lZWQgdG8gdXNlIGEgdHJhbnNkdWNlciwgeW91IGNhbiBhdm9pZFxuICogaW1wb3J0aW5nIHRoaXMgbGlicmFyeSBhbmQgd29yayB3aXRoIHRoZSB7QGxpbmsgbW9kdWxlOnhkdWNlfHhkdWNlfSBtb2R1bGVcbiAqIGluc3RlYWQgKHdoaWNoIGludGVybmFsbHkgZGVwZW5kcyBvbiB0aGlzIG1vZHVsZSkuIElmIHlvdSB3YW50IHRvIHdyaXRlIGEgbmV3XG4gKiB0cmFuc2R1Y2VyIG9yIGNvbnRyb2wgbG93LWxldmVsIGFjY2VzcyB0byB0aGUgcmVkdWN0aW9uIGVuZ2luZSwgdGhlbiB5b3UgbmVlZFxuICogdG8gdXNlIHRoaXMgbGlicmFyeS4gKFRoZXJlIGlzIGEgc21hbGwgbnVtYmVyIG9mIGZ1bmN0aW9ucyB0aGF0IGFyZSB1c2VmdWxcbiAqIGZvciBib3RoLCBhbmQge0BsaW5rIG1vZHVsZTp4ZHVjZXx4ZHVjZX0gcmUtZXhwb3J0cyB0aGVtIGZyb20gaGVyZSBzbyB0aGV5XG4gKiBjYW4gYmUgdXNlZCBmcm9tIGVpdGhlciBtb2R1bGUuKVxuICpcbiAqIFRoaXMgbW9kdWxlIHByb3ZpZGVzIGZvdXIgYmFzaWMgc2VydmljZXM6XG4gKlxuICogMS4gUmVkdWN0aW9uIG9mIHRyYW5zZHVjZXIgY2hhaW5zXG4gKiAyLiBQcm90b2NvbCBkZWZpbml0aW9uXG4gKiAzLiBJdGVyYXRpb24gc3VwcG9ydFxuICogNC4gQXV0aG9yaW5nIHV0aWxpdGllc1xuICpcbiAqIFdoYXQgZm9sbG93cyBpcyBhIHNob3J0IGRpdXNjdXNzaW9uIG9mIGVhY2guXG4gKlxuICogIyMgUmVkdWN0aW9uXG4gKlxuICogQWxsIHRyYW5zZm9ybWluZyBmdW5jdGlvbnMsIHdoZXRoZXIgbWV0aG9kcyBvZiBgQXJyYXlgIG9yIHRoaXJkIHBhcnR5IHRvb2xzXG4gKiBzdWNoIGFzIExvZGFzaCwgcGVyZm9ybSByZWR1Y3Rpb24gaW4gb3JkZXIgdG8gYnVpbGQgdXAgYSBuZXcgY29sbGVjdGlvbiBvdXRcbiAqIG9mIHRoZSBlbGVtZW50cyB0aGF0IHRoZXkndmUgdHJhbnNmb3JtZWQvZmlsdGVyZWQsIGV0Yy5cbiAqXG4gKiBUcmFuc2R1Y2VycyBhcmUgbm8gZGlmZmVyZW50IGluIHRoYXQgcmVnYXJkLCBidXQgdGhlIG1hbm5lciBpbiB3aGljaCB0aGV5IGRvXG4gKiB0aGVpciByZWR1Y3Rpb24gaXMgd2hhdCBzZXRzIHRoZW0gYXBhcnQuXG4gKlxuICogVXNpbmcgYEFycmF5LnByb3RvdHlwZS5tYXBgIGFzIGFuIGV4YW1wbGUsIHRoZSB1c2VyIG9mIHRoZSBmdW5jdGlvbiBwcm92aWRlc1xuICogYSB0cmFuc2Zvcm1hdGlvbiBmdW5jdGlvbi4gVGhlIGBtYXBgIGZ1bmN0aW9uIGl0ZXJhdGVzIG92ZXIgdGhlIGlucHV0IGFycmF5LFxuICogcGFzc2VzIHRoZSBlbGVtZW50cyB0aHJvdWdoIHRoZSBwcm92aWRlZCB0cmFuc2Zvcm1hdGlvbiBmdW5jdGlvbiwgYW5kIHRoZW5cbiAqIHJlZHVjZXMgdGhlIHJlc3VsdHMgaW50byBhIG5ldyBhcnJheS4gSWYgYG1hcGAgaXMgY2hhaW5lZCB0byBhbm90aGVyXG4gKiBmdW5jdGlvbiwgbGlrZSBgQXJyYXkucHJvdG90eXBlLmZpbHRlcmAsIHRoZSBwcm9jZXNzIG5lZWRzIHRvIGJlIHJlcGVhdGVkOlxuICogaXRlcmF0ZSBhZ2FpbiwgZmlsdGVyIHZpYSBhIHVzZXItcHJvdmlkZWQgZnVuY3Rpb24sIGFuZCByZWR1Y2UgYWdhaW4uXG4gKlxuICogVHJhbnNkdWNlcnMgYXJlIGRpZmZlcmVudC4gV2hlbiB1c2luZyBhIHRyYW5zZHVjZXIsIHJhdGhlciB0aGFuIGFcbiAqIG1hbmlwdWxhdGlvbiBmdW5jdGlvbiBiZWluZyBwcm92aWRlZCBhcyBpbiBgbWFwYCBvciBgZmlsdGVyYCwgYSAqcmVkdWNlclxuICogb2JqZWN0KiBpcyB1c2VkLiAoSXQncyBhbiBvYmplY3QgcmF0aGVyIHRoYW4gYSBmdW5jdGlvbiBiZWNhdXNlIGl0IGhhc1xuICogbXVsdGlwbGUgZnVuY3Rpb25zLCBlYWNoIGltcGxlbWVudGVkIGFzIHByb3BlcnRpZXMgb2YgdGhlIHJlZHVjZXIgb2JqZWN0LilcbiAqIFRoaXMgbWVhbnMgdGhhdCB0aGUgdXNlciBwcm92aWRlcyBpbnN0cnVjdGlvbnMgZm9yIGJvdGggdHJhbnNmb3JtYXRpb24gKmFuZCpcbiAqIHJlZHVjdGlvbiwgcmF0aGVyIHRoYW4gdGhlIGNvbGxlY3Rpb24gZnVuY3Rpb24gaXRzZWxmIGJlaW5nIHJlc3BvbnNpYmxlIGZvclxuICogZG9pbmcgdGhlIHJlZHVjdGlvbiBvbiBpdHMgb3duLlxuICpcbiAqIFRoaXMgaGFzIHR3byB2ZXJ5IGJlbmVmaWNpYWwgZWZmZWN0cy4gRmlyc3QsIGlmIGEgdXNlciB3YW50cyB0byBmaWx0ZXIgYW5kXG4gKiB0aGVuIG1hcCB0aGUgZWxlbWVudHMgb2YgYSBjb2xsZWN0aW9uLCB0aGUgdHJhbnNkdWNlciBkb2VzIG5vdCBoYXZlIHRvIHJlZHVjZVxuICogdGhlIGZpbHRlcmVkIGVsZW1lbnRzIGludG8gYSBjb2xsZWN0aW9uIGp1c3QgdG8gaGF2ZSB0aGUgbWFwIHBhcnQgdGVhciB0aGVtXG4gKiBhcGFydCBhZ2FpbiBhbmQgcmUtcmVkdWNlIHRoZW0gbGF0ZXIuIFRoZSBmaWx0ZXIgcGFydCBvZiB0aGUgdHJhbnNkdWNlciBjYW5cbiAqIHBhc3MgaXRzIGVsZW1lbnRzIG9uZSBhdCBhIHRpbWUgdG8gdGhlIG1hcCBwYXJ0LCBhbmQgcmVkdWN0aW9uIGNhbiBoYXBwZW5cbiAqIG9ubHkgYXQgdGhlIGVuZCBhZnRlciB0aGUgZWxlbWVudHMgaGF2ZSBiZWVuIGJvdGggZmlsdGVyZWQgKmFuZCogbWFwcGVkLlxuICpcbiAqIFNlY29uZGx5LCBzaW5jZSB0aGUgdXNlciBpcyBwcm92aWRpbmcgdGhlIHJlZHVjdGlvbiBpbnN0cnVjdGlvbnMgYWxvbmcgd2l0aFxuICogdGhlIHRyYW5zZm9ybWF0aW9uIGluc3RydWN0aW9ucywgdGhlIHR5cGUgb2YgY29sbGVjdGlvbiB0aGF0IGdldHMgcmVkdWNlZFxuICogaW50byBkb2VzIG5vdCBoYXZlIHRvIGJlIHRoZSBzYW1lIHR5cGUgYXMgdGhlIGlucHV0IGNvbGxlY3Rpb24uIFlvdSBjb3VsZFxuICogcHJvY2VzcyBjaGFyYWN0ZXJzIGluIGEgc3RyaW5nIGFuZCBoYXZlIGl0IG91dHB1dCBhcyBhbiBhcnJheS4gT3IgcHJvY2VzcyB0aGVcbiAqIHZhbHVlcyBpbiBhbiBpdGVyYXRvciBhbmQgZ2V0IGEgcGxhaW4gb2JqZWN0IGFzIG91dHB1dC5cbiAqXG4gKiBQcmFjdGljYWxseSBzcGVha2luZywgbW9zdCBvZiB0aGUgcmVkdWNlciBvYmplY3QgY3JlYXRpb24gaXMgYWJzdHJhY3RlZCBhd2F5LFxuICogc28gdXNpbmcgdHJhbnNkdWNlcnMgaXMgbm8gbW9yZSBkaWZmaWN1bHQgdGhhbiBqdXN0IHVzaW5nXG4gKiBgQXJyYXkucHJvdG90eXBlLm1hcGAuIFRoZSBge0BsaW5rIG1vZHVsZTp4ZGNvcmUucmVkdWNlfHJlZHVjZX1gIGZ1bmN0aW9uXG4gKiBwcm92aWRlZCBieSB0aGlzIGxpYnJhcnkgaXMgbG93IGxldmVsLCB0aG91Z2gsIGFuZCBkb2VzIG5vdCBkbyBhbnkgb2YgdGhhdFxuICogYWJzdHJhY3Rpbmcgb24gaXRzIG93bi4gVGhlIGZ1bmN0aW9ucyBmcm9tIHRoZSB7QGxpbmsgbW9kdWxlOnhkdWNlfHhkdWNlfVxuICogbW9kdWxlLCBuYW1lbHkgYHtAbGluayBtb2R1bGU6eGR1Y2UudHJhbnNkdWNlfHRyYW5zZHVjZX1gLFxuICogYHtAbGluayBtb2R1bGU6eGR1Y2UuaW50b3xpbnRvfWAsIGFuZFxuICogYHtAbGluayBtb2R1bGU6eGR1Y2Uuc2VxdWVuY2V8c2VxdWVuY2V9YCwgdGFrZSBjYXJlIG9mIHRoYXQgYWJzdHJhY3Rpb24gc29cbiAqIGB7QGxpbmsgbW9kdWxlOnhkY29yZS5yZWR1Y2V8cmVkdWNlfWAgY2FuIGp1c3QgaGFuZGxlIGFjdHVhbCByZWR1Y3Rpb24uXG4gKlxuICogIyMgUHJvdG9jb2xzXG4gKlxuICogSW4gRVMyMDE1LCB0aGUgaWRlYSBvZiBwcm90b2NvbHMgd2FzIGFkZGVkIHRvIEphdmFTY3JpcHQuIFRoaXMgd2FzIGRvbmUgYXRcbiAqIHRoZSBiZWdpbm5pbmcgdG8gcHJvdmlkZSBsYW5ndWFnZS1sZXZlbCBzdXBwb3J0IGZvciB0aGUgbmV3IGBmb3IuLi5vZmAgbG9vcC5cbiAqIEFzIGxvbmcgYXMgYSB2YWx1ZSBzdXBwb3J0ZWQgdGhlIGl0ZXJhYmxlIHByb3RvY29sIGJ5IGhhdmluZyBhIHByb3BlcnR5IG5hbWVkXG4gKiBgU3ltYm9sLml0ZXJhdG9yYCB0aGF0IHJldHVybnMgYW4gaXRlcmF0b3IgZm9yIHRoYXQgdmFsdWUgd2hlbiBpdCdzIGNhbGxlZCxcbiAqIHRoZW4gaXQgYXV0b21hdGljYWxseSBxdWFsaWZpZWQgdG8gYmUgdXNlZCBpbiBgZm9yLi4ub2ZgLlxuICpcbiAqIFRoaXMgbW9kdWxlIHVzZXMgdGhhdCBpdGVyYWJsZSBtb2R1bGUgaW4gdGhlIHNhbWUgd2F5IHRvIHVuZGVyc3RhbmQgaG93IHRvXG4gKiBicmVhayBjb2xsZWN0aW9ucyBhcGFydCwgYnV0IGl0IGFsc28gdXNlcyBwcm90b2NvbHMgdG8gbGV0IGNvbGxlY3Rpb25zIGluZm9ybVxuICogdGhlIGVuZ2luZSBob3cgdG8gcmVkdWNlIGEgY29sbGVjdGlvbiBvZiB0aGF0IHR5cGUgYmFjayB0b2dldGhlciBhZ2Fpbi4gU2luY2VcbiAqIHRoZXJlIGFyZSBubyBzdGFuZGFyZCBwcm90b2NvbHMgZm9yIHJlZHVjdGlvbiB0aGUgd2F5IHRoZXJlIGFyZSBmb3JcbiAqIGl0ZXJhdGlvbiwgdGhpcyBtb2R1bGUgcHJvdmlkZXMgY3VzdG9tIHByb3RvY29scyBvZiBpdHMgb3duLiBUaGVzZSBhcmUgYWxzb1xuICogc3ltYm9scyB1c2VkIGFzIG5hbWVzIGZvciBwcm9wZXJ0aWVzLCBidXQgdGhleSBhcmUgc3RvcmVkIGluIGFuIG9iamVjdCBjYWxsZWRcbiAqIGB7QGxpbmsgbW9kdWxlOnhkY29yZS5wcm90b2NvbHN8cHJvdG9jb2xzfWAgdG8gYmUgbG9va2VkIHVwIGJ5IHN0cmluZyBrZXk6XG4gKlxuICogKiBgcHJvdG9jb2xzLmluaXRgXG4gKiAqIGBwcm90b2NvbHMuc3RlcGBcbiAqICogYHByb3RvY29scy5maW5hbGBcbiAqICogYHByb3RvY29scy5jb21wbGV0ZWRgXG4gKiAqIGBwcm90b2NvbHMudmFsdWVgXG4gKlxuICogVGhlIGxhc3QgdHdvIChgY29tcGxldGVkYCBhbmQgYHZhbHVlYCkgYXJlIHVzZWQgaW50ZXJuYWxseSBmb3Iga2VlcGluZyB0cmFja1xuICogb2YgdGhlIHJlZHVjdGlvbiBzdGF0dXMgb2YgYSB2YWx1ZSBhbmQgc2hvdWxkbid0IG5lZWQgdG8gYmUgdXNlZCBleHRlcm5hbGx5LlxuICogVGhlIGZpcnN0IHRocmVlLCBob3dldmVyLCBhcmUgaG93IHRoZSBlbmdpbmUga25vd3MgaG93IHRvIHJlZHVjZSB0byBhIGNlcnRhaW5cbiAqIGNvbGxlY3Rpb24gdHlwZS5cbiAqXG4gKiBgaW5pdGAgaXMgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBuZXcsIGVtcHR5IHZlcnNpb24gb2YgdGhhdCBjb2xsZWN0aW9uIHRvXG4gKiBiZSBidWlsdCB1cG9uLiBgc3RlcGAgaXMgYSBmdW5jdGlvbiB0aGF0IGdldHMgcGFzc2VkIGEgY29sbGVjdGlvbiBvZiB0aGF0XG4gKiB0eXBlIHBsdXMgYSBuZXcgdmFsdWUgdG8gYmUgYWRkZWQgdG8gaXQsIGFuZCByZXR1cm5zIHRoZSBjb2xsZWN0aW9uIHdpdGggdGhhdFxuICogdmFsdWUgYWRkZWQgdG8gaXQgKGkuZS4sIGl0J3MgYSBzdGFuZGFyZCByZWR1Y3Rpb24gZnVuY3Rpb24pLiBgZmluYWxgIGlzIGFcbiAqIGZ1bmN0aW9uIHRoYXQgZ2V0cyBwYXNzZWQgdGhlIGZ1bGx5IHJlZHVjZWQgbmV3IGNvbGxlY3Rpb24gYW5kIHJldHVybnMgd2hhdFxuICogdGhlIGZpbmFsIG91dHB1dCBzaG91bGQgYmUsIGdpdmluZyB0aGUgZW5naW5lIG9uZSBsYXN0IGNoYW5jZSB0byBtb2RpZnkgdGhlXG4gKiBmaW5hbCB2YWx1ZSAodGhpcyAqbm9ybWFsbHkqIGp1c3QgcmV0dXJucyBpdHMgYXJndW1lbnQgdW5tb2RpZmllZCkuIElmIHRoZXNlXG4gKiB0aHJlZSBwcm9wZXJ0aWVzIGFyZSBhZGRlZCB0byBhbiBvYmplY3QsIHRoZW4gdGhpcyBtb2R1bGUgd2lsbCByZWNvZ25pemUgdGhhdFxuICogb2JqZWN0IGFzIHJlZHVjaWJsZSBhbmQgYmUgYWJsZSB0byBjcmVhdGUgYW5kIGZpbGwgb25lLlxuICpcbiAqIEFzIGFuIGV4YW1wbGUsIGxldCdzIGFkZCBzdXBwb3J0IGZvciB0cmFuc2R1Y3Rpb24gdG8gdGhlIGBMaXN0YCBjb2xsZWN0aW9uXG4gKiBmcm9tIFtpbW11dGFibGUuanNdWzFdLlxuICpcbiAqIGBgYFxuICogaW1wb3J0IHsgcHJvdG9jb2xzIGFzIHAgfSBmcm9tIFwiQGNoYW5rby94ZGNvcmVcIjtcbiAqIGltcG9ydCB7IExpc3QgfSBmcm9tIFwiaW1tdXRhYmxlXCI7XG4gKlxuICogTGlzdC5wcm90b3R5cGVbcC5pbml0XSA9ICgpID0+IExpc3QoKS5hc011dGFibGUoKTtcbiAqIExpc3QucHJvdG90eXBlW3Auc3RlcF0gPSAoYWNjLCB2YWx1ZSkgPT4gYWNjLnB1c2godmFsdWUpO1xuICogTGlzdC5wcm90b3R5cGVbcC5maW5hbF0gPSB2YWx1ZSA9PiB2YWx1ZS5hc0ltbXV0YWJsZSgpO1xuICogYGBgXG4gKlxuICogVGhlIGBpbml0YCBmdW5jdGlvbiBoZXJlIHJldHVybnMgYSBuZXcsIGVtcHR5IGxpc3QuIFRoZSBgc3RlcGAgZnVuY3Rpb25cbiAqIGRlc2NyaWJlcyBob3cgdG8gYWRkIGEgdmFsdWUgdG8gdGhhdCBsaXN0ICh0aHJvdWdoIHRoZSBgcHVzaGAgbWV0aG9kKS4gVGhlXG4gKiBgZmluYWxgIGZ1bmN0aW9uIHJ1bnMgYXQgdGhlIHZlcnkgZW5kIHRvIGRldGVybWluZSB0aGUgZW5kIHZhbHVlLiBJbiB0aGVcbiAqIGNhc2Ugb2YgdGhpcyBpbW11dGFibGUgbGlzdCwgdGhlIGBpbml0YCBmdW5jdGlvbiBhY3R1YWxseSByZXR1cm5zIGEgbXV0YWJsZVxuICogbGlzdCB0aGF0IHdlIGNhbiBhZGQgdG8gd2l0aCBgc3RlcGAsIGFuZCB0aGVuIGBmaW5hbGAgdHVybnMgdGhhdCBpbnRvIGFuXG4gKiBpbW11dGFibGUgbGlzdCB0byBiZSByZXR1cm5lZC4gVGhpcyBpcyBhIHRleHRib29rIHVzZSBvZiBgZmluYWxgOyBtb3N0IG9mIHRoZVxuICogdGltZSwgYGZpbmFsYCB3aWxsIHNpbXBseSByZXR1cm4gdGhlIHZhbHVlIHRoYXQncyBwYXNzZWQgdG8gaXQsIHVuY2hhbmdlZC5cbiAqXG4gKiBXaXRoIHRoZXNlIGxpbmVzIG9mIGNvZGUgaW4gcGxhY2UsIGFkZGluZyB0aGUgcHJvdG9jb2wgZnVuY3Rpb25zIHRvIGBMaXN0YCdzXG4gKiBwcm90b3R5cGUsIHJlZHVjdGlvbiB3aWxsIGp1c3Qgd29yay5cbiAqXG4gKiBJdCBpcyBub3QgbmVjZXNzYXJ5IHRvIHByb3ZpZGUgdGhlc2UgZnVuY3Rpb25zIGZvciBuYXRpdmUgYXJyYXlzLCBzdHJpbmdzLFxuICogcGxhaW4gb2JqZWN0cywgb3IgaXRlcmF0b3JzLCBhcyBzdXBwb3J0IGZvciB0aGVtIGlzIGJ1aWx0IGluLlxuICpcbiAqIFsxXTogaHR0cHM6Ly9pbW11dGFibGUtanMuZ2l0aHViLmlvL2ltbXV0YWJsZS1qcy9cbiAqXG4gKiBAbW9kdWxlIHhkY29yZVxuICovXG5cbmV4cG9ydCB7IHByb3RvY29scywgaXNJbXBsZW1lbnRlZCB9IGZyb20gXCJtb2R1bGVzL3Byb3RvY29sXCI7XG5leHBvcnQgeyBpdGVyYXRvciwgaXNJdGVyYWJsZSB9IGZyb20gXCJtb2R1bGVzL2l0ZXJhdGlvblwiO1xuZXhwb3J0IHtcbiAgY29tcGxldGUsXG4gIHVuY29tcGxldGUsXG4gIGlzQ29tcGxldGVkLFxuICBlbnN1cmVDb21wbGV0ZWQsXG4gIGVuc3VyZVVuY29tcGxldGVkLFxuICByZWR1Y2UsXG4gIHRvRnVuY3Rpb24sXG4gIHRvUmVkdWNlcixcbiAgdG9UcmFuc2R1Y2VyXG59IGZyb20gXCJtb2R1bGVzL3JlZHVjdGlvblwiO1xuZXhwb3J0IHtcbiAgaXNBcnJheSxcbiAgaXNGdW5jdGlvbixcbiAgaXNHZW5lcmF0b3JGdW5jdGlvbixcbiAgaXNOdW1iZXIsXG4gIGlzT2JqZWN0LFxuICBpc1N0cmluZ1xufSBmcm9tIFwibW9kdWxlcy91dGlsc1wiO1xuXG4vKipcbiAqIEEgc3RhbmRhcmQgSmF2YVNjcmlwdCBpdGVyYWJsZS4gVGhpcyBvYmplY3QgaGFzIGEgcHJvcGVydHkgbmFtZWRcbiAqIGBbU3ltYm9sLml0ZXJhdG9yXWAgd2hpY2ggcHJvdmlkZXMgYW4gb2JqZWN0IHRoYXQgc2F0aXNmaWVzIHRoZVxuICoge0BsaW5rIGV4dGVybmFsOkl0ZXJhdG9yfEl0ZXJhdG9yfSBwcm90b2NvbC5cbiAqXG4gKiBAZXh0ZXJuYWwgSXRlcmFibGVcbiAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvSXRlcmF0aW9uX3Byb3RvY29scyNUaGVfaXRlcmFibGVfcHJvdG9jb2xcbiAqL1xuXG4vKipcbiAqIEEgc3RhbmRhcmQgSmF2YVNjcmlwdCBpdGVyYXRvci4gVGhpcyBvYmplY3QgaGFzIGEgZnVuY3Rpb24gcHJvcGVydHkgbmFtZWRcbiAqIGBuZXh0YCB0aGF0LCBlYWNoIHRpbWUgaXQncyBjYWxsZWQsIHJldHVybnMgYSBuZXcgb2JqZWN0IHdpdGggdHdvXG4gKiBwcm9wZXJ0aWVzOiBgdmFsdWVgLCB3aGljaCBjb250YWlucyB0aGUgaXRlcmF0b3IncyB2YWx1ZSBhdCB0aGF0IHBvaW50LCBhbmRcbiAqIGBkb25lYCwgd2hpY2ggaXMgYGZhbHNlYCB1bnRpbCB0aGUgaXRlcmF0b3IgaGFzIGhhZCBhbGwgb2YgaXRzIHZhbHVlcyByZWFkLlxuICpcbiAqIEBleHRlcm5hbCBJdGVyYXRvclxuICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9JdGVyYXRpb25fcHJvdG9jb2xzI1RoZV9pdGVyYXRvcl9wcm90b2NvbFxuICovXG5cbi8qKlxuICogQSBmdW5jdGlvbiB0aGF0IGNhbiBoYXZlIGFuIGl0ZXJhdG9yIGNyZWF0ZWQgZm9yIGl0LlxuICpcbiAqIEBjYWxsYmFjayBJdGVyYWJsZUZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkY29yZVxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBpbmRleCBmb3IgdGhlIGl0ZXJhdGlvbi4gVGhpcyBpcyBgMGAgdGhlIGZpcnN0XG4gKiAgICAgdGltZSB0aGUgZnVuY3Rpb24gaXMgY2FsbGVkIGFuZCBpbmNyZWFzZXMgYnkgMSBmb3IgZWFjaCBjYWxsXG4gKiAgICAgdGhlcmVhZnRlci5cbiAqIEBwYXJhbSB7Kn0gbGFzdCBUaGUgcmV0dXJuIHZhbHVlIG9mIHRoZSBmdW5jdGlvbiB3aGVuIGl0IHdhcyBjYWxsZWQgb24gdGhlXG4gKiAgICAgcHJldmlvdXMgaXRlcmF0aW9uLiBJZiB0aGlzIGlzIHRoZSBmaXJzdCBjYWxsIHRvIHRoZSBmdW5jdGlvbiwgdGhlblxuICogICAgIHRoaXMgdmFsdWUgd2lsbCBiZSBgdW5kZWZpbmVkYCwgbWVhbmluZyB0aGF0IHRoZSBmdW5jdGlvbiBjYW4gc2V0IGFcbiAqICAgICBkZWZhdWx0IHZhbHVlIGZvciB0aGF0IGZpcnN0IHBhc3MuXG4gKiBAcmV0dXJucyB7Kn0gVGhlIHJldHVybiB2YWx1ZSBvZiB0aGUgZnVuY3Rpb24sIHdoaWNoIHdpbGwgYmUgdGhlIHZhbHVlIGZvclxuICogICAgIHRoYXQgaXRlcmF0aW9uLlxuICovXG5cbi8qKlxuICogQSBmdW5jdGlvbiB0aGF0LCB3aGVuIGNhbGxlZCwgcHJvZHVjZXMgYSBuZXcsIGVtcHR5IGNvbGxlY3Rpb24gb2Ygd2hhdGV2ZXJcbiAqIHR5cGUgaXMgYmVpbmcgd29ya2VkIHdpdGguXG4gKlxuICogQGNhbGxiYWNrIEluaXRGdW5jdGlvblxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZGNvcmVcbiAqIEByZXR1cm5zIHsqfSBBIG5ldywgZW1wdHkgcmVwcmVzZW50YXRpdmUgb2YgdGhlIGNvbGxlY3Rpb24uXG4gKi9cblxuLyoqXG4gKiBBIGZ1bmN0aW9uIHRoYXQgYWNjZXB0cyBhIGNvbGxlY3Rpb24gYW5kIGEgbmV3IGVsZW1lbnQgb2YgdGhhdCBjb2xsZWN0aW9uIGFuZFxuICogcmV0dXJucyB0aGUgY29sbGVjdGlvbiB3aXRoIHRoZSBuZXcgZWxlbWVudCBhZGRlZCB0byBpdC4gVGhpcyBpcyB1c2VkIHRvXG4gKiBidWlsZCB1cCBhIG5ldyBjb2xsZWN0aW9uIChzdGFydGluZyB3aXRoIHdoYXRldmVyXG4gKiB7QGxpbmsgbW9kdWxlOnhkY29yZS5Jbml0RnVuY3Rpb258dGhlIGluaXQgZnVuY3Rpb259IHJldHVybnMpIHBpZWNlIGJ5IHBpZWNlXG4gKiBmcm9tIGl0cyBlbGVtZW50cy5cbiAqXG4gKiBUaGlzIGlzIGluIGV2ZXJ5IHdheSBhIHJlZHVjZXIgZnVuY3Rpb24uIFRoZSBuYW1lICdzdGVwJyBjb21lcyBmcm9tIHRoZSBmYWN0XG4gKiB0aGF0IHRoZXNlIHJlZHVjdGlvbiBmdW5jdGlvbnMgcmVkdWNlIG9uZSBlbGVtZW50IGF0IGEgdGltZSwgc3RlcCBieSBzdGVwLlxuICpcbiAqIEl0IGlzIHVwIHRvIHRoZSBpbXBsZW1lbnRhdGlvbiB3aGV0aGVyIHRoZSByZXR1cm5lZCBjb2xsZWN0aW9uIGlzIGEgbW9kaWZpZWRcbiAqIGZvcm0gb2YgdGhlIG9yaWdpbmFsIGNvbGxlY3Rpb24gb3Igd2hldGhlciBpdCBpcyBhIG5ldyBjb2xsZWN0aW9uIGFsdG9nZXRoZXIuXG4gKlxuICogQGNhbGxiYWNrIFN0ZXBGdW5jdGlvblxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZGNvcmVcbiAqIEBwYXJhbSB7Kn0gYWNjIEEgY29sbGVjdGlvbiwgcGVyaGFwcyB3aXRoIHNvbWUgbWVtYmVycyBhbHJlYWR5IGFkZGVkIHRvIGl0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBBIG5ldyBlbGVtZW50IHRvIGJlIGFkZGVkIHRvIHRoYXQgY29sbGVjdGlvbi5cbiAqIEByZXR1cm5zIFRoZSBvcmlnaW5hbCBjb2xsZWN0aW9uIHdpdGggdGhlIG5ldyB2YWx1ZSBhZGRlZCB0byBpdC5cbiAqL1xuXG4vKipcbiAqIEEgZnVuY3Rpb24gdGhhdCBhY2NlcHRzIGEgZnVsbHkgcmVkdWNlZCBjb2xsZWN0aW9uIGFuZCByZXR1cm5zIHRoYXRcbiAqIGNvbGxlY3Rpb24gd2l0aCBhbnkgbGFzdC1taW51dGUgbW9kaWZpY2F0aW9ucyB0aGF0IG1pZ2h0IG5lZWQgdG8gYmUgZG9uZSB0b1xuICogaXQuXG4gKlxuICogSW4gbW9zdCBjYXNlcyB0aGlzIGZ1bmN0aW9uIHdpbGwgc2ltcGx5IHJldHVybiBpdHMgYXJndW1lbnQsIHVubW9kaWZpZWQsIGJ1dFxuICogaXQgZG9lcyBhZmZvcmQgdGhlIHRyYW5zZHVjZXIgYW4gb3Bwb3J0dW5pdHkgdG8gbWFrZSBhbnkgZmluYWwgbW9kaWZpY2F0aW9uc1xuICogdGhhdCBtaWdodCBiZSBuZWNlc3NhcnkgYmVmb3JlIHRoZSByZXN1bHQgaXMgcmV0dXJuZWQgZnJvbSB0aGUgdHJhbnNkdWN0aW9uXG4gKiBwcm9jZXNzLlxuICpcbiAqIEBjYWxsYmFjayBGaW5hbEZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkY29yZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgZnVsbHkgcmVkdWNlZCBjb2xsZWN0aW9uLlxuICogQHJldHVybnMgeyp9IFRoZSByZWR1Y2VkIGNvbGxlY3Rpb24gd2l0aCBhbnkgaW1wbGVtZW50YXRpb24tZGVwZW5kZW50IGNoYW5nZXNcbiAqICAgICB0aGF0IG1pZ2h0IGJlIGRlZW1lZCBuZWNlc3NhcnkuXG4gKi9cblxuLyoqXG4gKiBBbiBvYmplY3QgdGhhdCBwcm92aWRlcyB0aGUgaW5mb3JtYXRpb24gbmVjZXNzYXJ5IHRvIGJ1aWxkIGFuZCBwb3B1bGF0ZSBhIG5ld1xuICogb2JqZWN0IG9mIGEgcmVkdWNpYmxlIHR5cGUuIFRoaXMgaW5mb3JtYXRpb24gaXMgdXNlZCBieSB0aGUgdHJhbnNkdWN0aW9uXG4gKiBlbmdpbmUgdG8gY3JlYXRlIGEgcmVzdWx0IGZyb20gYSByZWR1Y3Rpb24gd2l0aG91dCBoYXZpbmcgdG8gaGF2ZSBpdHMgb3duXG4gKiB0eXBlLXNwZWNpZmljIGNvZGU7IHRoZSBjcmVhdGlvbiwgcG9wdWxhdGlvbiwgYW5kIGZpbmFsaXphdGlvbiBvZiB0aGUgcmVzdWx0XG4gKiBhcmUgZGVsZWdhdGVkIGluc3RlYWQgdG8gdGhpcyByZWR1Y2VyIG9iamVjdC5cbiAqXG4gKiBOb3RlIHRoYXQgYSBcInRyYW5zZHVjZXIgb2JqZWN0XCIgaGFzIGV4YWN0bHkgdGhlIHNhbWUgc3RydWN0dXJlLiBUaGUgb25seVxuICogZGlmZmVyZW5jZSBpcyB0aGF0IHRoZSBzdGVwIGZ1bmN0aW9uIGluIGEgdHJhbnNkdWNlciBvYmplY3QgbW9kaWZpZXMgdGhlXG4gKiBlbGVtZW50cyBiZWZvcmUgaXQgcmVkdWNlcyB0aGVtLCB3aGlsZSBhIHJlZHVjZXIgb2JqZWN0IHdpbGwgbm90LiBBcyBhXG4gKiBjb3JvbGxhcnksIGV2ZXJ5IHJlZHVjZXIgb2JqZWN0IGlzIGFsc28gYSB0cmFuc2R1Y2VyIG9iamVjdCwgYnV0IHRoZSBjb252ZXJzZVxuICogaXMgbm90IHRydWUuXG4gKlxuICogQHR5cGVkZWYgUmVkdWNlck9iamVjdFxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZGNvcmVcbiAqIEBwcm9wZXJ0eSB7bW9kdWxlOnhkY29yZS5Jbml0RnVuY3Rpb259IFN5bWJvbC5mb3IoXCJyZWR1Y2VyL2luaXRcIikgQVxuICogICAgIGZ1bmN0aW9uIHRoYXQgY2FuIGNyZWF0ZSBhIG5ldywgZW1wdHkgY29weSBvZiB0aGUgcmVkdWNpYmxlIHR5cGUuXG4gKiBAcHJvcGVydHkge21vZHVsZTp4ZGNvcmUuU3RlcEZ1bmN0aW9ufSBTeW1ib2wuZm9yKFwicmVkdWNlci9zdGVwXCIpIEFcbiAqICAgICBmdW5jdGlvbiB0aGF0IGNhbiBhY2NlcHQgYSB2YWx1ZSBvZiB0aGUgcmVkdWNpYmxlIHR5cGUgYW5kIGEgbmV3IGVsZW1lbnRcbiAqICAgICB0byBiZSBhZGRlZCB0byBpdCBhbmQgcmV0dXJuIHRoZSByZWR1Y2libGUgd2l0aCB0aGUgbmV3IGVsZW1lbnRcbiAqICAgICBpbmNvcnBvcmF0ZWQuXG4gKiBAcHJvcGVydHkge21vZHVsZTp4ZGNvcmUuRmluYWxGdW5jdGlvbn0gU3ltYm9sLmZvcihcInJlZHVjZXIvZmluYWxcIikgQVxuICogICAgIGZ1bmN0aW9uIHRoYXQgYWNjZXB0cyBhIHZhbHVlIG9mIHRoZSByZWR1Y2libGUgdHlwZSBhbmQgcmV0dXJucyB0aGUgc2FtZVxuICogICAgIHZhbHVlIHdpdGggYW55IGZpbmFsIG1vZGlmaWNhdGlvbnMgdGhhdCBtaWdodCBiZSBuZWNlc3NhcnkgZm9yIGl0LlxuICovXG5cbi8qKlxuICogQSBmdW5jdGlvbiB0aGF0IGFjY2VwdHMgYSByZWR1Y2VyIG9iamVjdCwgd2hpY2ggaXQgdGhlbiBjaGFpbnMgYSB0cmFuc2R1Y2VyXG4gKiBvYmplY3QgdG8uIFRoaXMgaXMgdGhlIHByaW1hcnkgd2F5IG9mIGNyZWF0aW5nIGNvbXBvc2VkIHRyYW5zZHVjZXIgY2hhaW5zLlxuICpcbiAqIEEgdHJhbnNkdWNlciBmdW5jdGlvbiBiYXNpY2FsbHkgZW5jYXBzdWxhdGVzIGEgdHJhbnNkdWNlciBvYmplY3QgYW5kIHRoZVxuICogYWJpbGl0eSB0byBjaGFpbiBpdCB0byB3aGF0ZXZlciByZWR1Y2VyIG9iamVjdCBpcyBwYXNzZWQgdG8gaXQuXG4gKlxuICogQGNhbGxiYWNrIFRyYW5zZHVjZXJGdW5jdGlvblxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZGNvcmVcbiAqIEBwYXJhbSB7bW9kdWxlOnhkY29yZS5SZWR1Y2VyT2JqZWN0fSByZWR1Y2VyIFRoZSByZWR1Y2VyIG9iamVjdCAod2hpY2ggbWF5XG4gKiAgICAgYWxzbyBiZSBhIHRyYW5zZHVjZXIgb2JqZWN0KSB0aGF0IGlzIHRoZSBuZXh0IHJlZHVjZXIgaW4gdGhlIGNoYWluLlxuICogQHJldHVybnMge21vZHVsZTp4ZGNvcmUuUmVkdWNlck9iamVjdH0gQSB0cmFuc2R1Y2VyIG9iamVjdCBjb25zaXN0aW5nIG9mIHNvbWVcbiAqICAgICBuZXcgdHJhbnNkdWNlciBvYmplY3QgY2hhaW5lZCB0byB0aGUgc3VwcGxpZWQgcmVkdWNlciBvYmplY3QuXG4gKi9cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG4vKipcbiAqIEZ1bmN0aW9ucyB0byBoZWxwIHdpdGggaXRlcmF0aW9uIG92ZXIgaXRlcmFibGUgb2JqZWN0cyBhbmQgcGxhaW4gb2JqZWN0cy5cbiAqXG4gKiBAbW9kdWxlIHhkY29yZS9pdGVyYXRpb25cbiAqIEBwcml2YXRlXG4gKi9cblxuaW1wb3J0IHsgaXNJbXBsZW1lbnRlZCB9IGZyb20gXCJtb2R1bGVzL3Byb3RvY29sXCI7XG5pbXBvcnQgeyBpc0Z1bmN0aW9uLCBpc09iamVjdCwgaXNHZW5lcmF0b3JGdW5jdGlvbiB9IGZyb20gXCJtb2R1bGVzL3V0aWxzXCI7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBpdGVyYXRvciBvdmVyIGFuIG9iamVjdC5cbiAqXG4gKiBEZXRhaWxzIGFib3V0IHRoaXMgZnVuY3Rpb24gYXJlIGluY2x1ZGVkIGluIHRoZSBkb2N1bWVudGF0aW9uIGZvclxuICoge0BsaW5rIG1vZHVsZTp4ZGNvcmUuaXRlcmF0b3J8aXRlcmF0b3J9LlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmogVGhlIG9iamVjdCBiZWluZyBpdGVyYXRlZCBvdmVyLlxuICogQHJldHVybnMge2V4dGVybmFsOkl0ZXJhdG9yfSBBbiBpdGVyYXRvciBvdmVyIHRoZSBwcm9wZXJ0aWVzIG9mIGBvYmpgLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gb2JqZWN0SXRlcmF0b3Iob2JqKSB7XG4gIHJldHVybiAoZnVuY3Rpb24qKCkge1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuICAgIGxldCBpbmRleCA9IDA7XG5cbiAgICB3aGlsZSAoaW5kZXggPCBrZXlzLmxlbmd0aCkge1xuICAgICAgY29uc3QgayA9IGtleXNbaW5kZXgrK107XG4gICAgICB5aWVsZCB7IFtrXTogb2JqW2tdIH07XG4gICAgfVxuICB9KSgpO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYW4gaXRlcmF0b3Igb3ZlciBhIGZ1bmN0aW9uLlxuICpcbiAqIERldGFpbHMgYWJvdXQgdGhpcyBmdW5jdGlvbiBhcmUgaW5jbHVkZWQgaW4gdGhlIGRvY3VtZW50YXRpb24gZm9yXG4gKiB7QGxpbmsgbW9kdWxlOnhkY29yZS5pdGVyYXRvcnxpdGVyYXRvcn0uXG4gKlxuICogQHBhcmFtIHttb2R1bGU6eGRjb3JlLkl0ZXJhYmxlRnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcmV0dXJucyB7ZXh0ZXJuYWw6SXRlcmF0b3J9IEFuIGl0ZXJhdG9yIG92ZXIgdGhlIHJldHVybiB2YWx1ZXMgb2YgYGZuYC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGZ1bmN0aW9uSXRlcmF0b3IoZm4pIHtcbiAgcmV0dXJuIChmdW5jdGlvbiooKSB7XG4gICAgbGV0IGN1cnJlbnQ7XG4gICAgbGV0IGluZGV4ID0gMDtcblxuICAgIGZvciAoOzspIHtcbiAgICAgIGN1cnJlbnQgPSBmbihpbmRleCsrLCBjdXJyZW50KTtcbiAgICAgIGlmICh0eXBlb2YgY3VycmVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHlpZWxkIGN1cnJlbnQ7XG4gICAgfVxuICB9KSgpO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYW4gaXRlcmF0b3Igb3ZlciB0aGUgcHJvdmlkZWQgdmFsdWUuIFRoZSBmb3JtIG9mIHRoZSBpdGVyYXRpb25cbiAqIGRlcGVuZHMgb24gd2hhdCBraW5kIG9mIHZhbHVlIGlzIGJlaW5nIGl0ZXJhdGVkIG92ZXIuXG4gKlxuICogSWYgdGhlIHZhbHVlIGlzIGEgY29sbGVjdGlvbiBpbXBsZW1lbnRpbmcgdGhlIFtpdGVyYWJsZSBwcm90b2NvbF1bMV0gKGFycmF5cyxcbiAqIHN0cmluZ3MsIGdlbmVyYXRvcnMsIG9yIGEgY3VzdG9tIG9iamVjdCBzdXBwb3J0aW5nIHRoZSBwcm90b2NvbCkgdGhlbiB0aGVcbiAqIHByb2R1Y2VkIGl0ZXJhdG9yIHdpbGwgYmUgYXMgZXhwZWN0ZWQ6IGFuIG9iamVjdCB0aGF0IGltcGxlbWVudHMgdGhlXG4gKiBbaXRlcmF0b3IgcHJvdG9jb2xdWzJdIGJ5IHByb3ZpZGluZyBhIGBuZXh0YCBmdW5jdGlvbiB0aGF0IHJldHVybnMgZWFjaFxuICogY29sbGVjdGlvbiB2YWx1ZSBpbiB0dXJuLlxuICpcbiAqIGBgYFxuICogY29uc3QgaXRlciA9IGl0ZXJhdG9yKFsxLCAyLCAzXSk7XG4gKiBjb25zb2xlLmxvZyhpdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4gMVxuICogY29uc29sZS5sb2coaXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IDJcbiAqIGNvbnNvbGUubG9nKGl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiAzXG4gKiBjb25zb2xlLmxvZyhpdGVyLm5leHQoKS5kb25lKTsgICAgLy8gLT4gdHJ1ZVxuICogYGBgXG4gKlxuICogU3BlY2lhbCBzdXBwb3J0IGlzIHByb3ZpZGVkIGZvciB0d28gdHlwZXMgdGhhdCBhcmUgbm90IG5vcm1hbGx5IGl0ZXJhYmxlOlxuICogb2JqZWN0cyBhbmQgZnVuY3Rpb25zLlxuICpcbiAqIE9iamVjdHMgcmVzdWx0IGluIGFuIGl0ZXJhdG9yIHRoYXQgcHJvZHVjZXMgYSBzaW5nbGUtcHJvcGVydHkgb2JqZWN0IGZvclxuICogZXZlcnkga2V5L3ZhbHVlIHBhaXIgaW4gdGhlIHN1cHBsaWVkIG9iamVjdC4gVGhlIFtvcmRlciBvZiBpdGVyYXRpb25dWzNdIGlzXG4gKiB0aGUgc2FtZSBhcyBpdCBpcyBmb3Igb2JqZWN0cyBwb3N0LUVTMjAxNTpcbiAqXG4gKiAxLiBTdHJpbmcga2V5cyB0aGF0IGFyZSBpbnRlZ2VyIGluZGljZXMgaW4gYXNjZW5kaW5nIG51bWVyaWNhbCBvcmRlclxuICogMi4gQWxsIG90aGVyIHN0cmluZyBrZXlzIGluIHRoZSBvcmRlciBpbiB3aGljaCB0aGV5IHdlcmUgYWRkZWQgdG8gdGhlIG9iamVjdFxuICogMy4gQWxsIHN5bWJvbCBrZXlzIGluIHRoZSBvcmRlciBpbiB3aGljaCB0aGV5IHdlcmUgYWRkZWQgdG8gdGhlIG9iamVjdFxuICpcbiAqIGBgYFxuICogY29uc3Qgb2JqID0ge1xuICogICBbU3ltYm9sKFwiZmlyc3RcIildOiB0cnVlLFxuICogICAwMjogdHJ1ZSxcbiAqICAgMTA6IHRydWUsXG4gKiAgIDAxOiB0cnVlLFxuICogICAyOiB0cnVlLFxuICogICBbU3ltYm9sKFwic2Vjb25kXCIpXTogdHJ1ZVxuICogfTtcbiAqIGNvbnN0IGl0ZXIgPSBpdGVyYXRvcihvYmopO1xuICogY29uc29sZS5sb2coaXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IHsgJzInOiB0cnVlIH1cbiAqIGNvbnNvbGUubG9nKGl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiB7ICcxMCc6IHRydWUgfVxuICogY29uc29sZS5sb2coaXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IHsgJzAyJzogdHJ1ZSB9XG4gKiBjb25zb2xlLmxvZyhpdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4geyAnMDEnOiB0cnVlIH1cbiAqIGNvbnNvbGUubG9nKGl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiB7IFtTeW1ib2woJ2ZpcnN0JyldOiB0cnVlIH1cbiAqIGNvbnNvbGUubG9nKGl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiB7IFtTeW1ib2woJ3NlY29uZCcpXTogdHJ1ZSB9XG4gKiBjb25zb2xlLmxvZyhpdGVyLm5leHQoKS5kb25lKTsgICAgLy8gLT4gdHJ1ZVxuICogYGBgXG4gKlxuICogRnVuY3Rpb25zIGFyZSBydW4gZWFjaCB0aW1lIHRoZSBpdGVyYXRvcidzIGBuZXh0YCBtZXRob2QgaXMgY2FsbGVkLCBhbmQgdGhlXG4gKiByZXR1cm4gdmFsdWUgb2YgdGhlIGZ1bmN0aW9uIGlzIHN1cHBsaWVkIGFzIHRoZSBpdGVyYXRvcidzIHZhbHVlIGF0IHRoYXRcbiAqIHBvaW50LlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gaXMgcHJvdmlkZWQgdHdvIGFyZ3VtZW50czogdGhlIHplcm8tYmFzZWQgaW5kZXggb2YgdGhhdFxuICogaXRlcmF0aW9uLCBhbmQgdGhlIHZhbHVlIHByb2R1Y2VkIGJ5IHRoZSBsYXN0IGludm9jYXRpb24gb2YgdGhlIGl0ZXJhdG9yLiBUaGVcbiAqIGxhc3QgdmFsdWUgaXMgYHVuZGVmaW5lZGAgb24gdGhlIGZpcnN0IHBhc3MsIGJ1dCBhIGRlZmF1bHQgcGFyYW1ldGVyIG9uIHRoZVxuICogZnVuY3Rpb24gY2FuIGRlZmluZSB0aGUgZmlyc3QgcGFzcyB2YWx1ZSB0byBiZSB3aGF0ZXZlciBpcyBuZWVkZWQuXG4gKlxuICogYGBgXG4gKiBjb25zdCBmbiA9IChpbmRleCwgbGFzdCA9IDEpID0+IGxhc3QgKiAoaW5kZXggKyAxKTtcbiAqIGNvbnN0IGl0ZXIgPSBpdGVyYXRvcihmbik7XG4gKiBjb25zb2xlLmxvZyhpdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4gMVxuICogY29uc29sZS5sb2coaXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IDJcbiAqIGNvbnNvbGUubG9nKGl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiA2XG4gKiBjb25zb2xlLmxvZyhpdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4gMjRcbiAqIGNvbnNvbGUubG9nKGl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiAxMjBcbiAqIGBgYFxuICpcbiAqIElmIHRoZSBpbnB1dCB2YWx1ZSBpcyBuZWl0aGVyIGl0ZXJhYmxlLCBvYmplY3QsIG9yIGZ1bmN0aW9uLCB0aGVuIHRoZSByZXN1bHRcbiAqIHdpbGwgYmUgYG51bGxgLlxuICpcbiAqIFsxXTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvSXRlcmF0aW9uX3Byb3RvY29scyNUaGVfaXRlcmFibGVfcHJvdG9jb2xcbiAqIFsyXTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvSXRlcmF0aW9uX3Byb3RvY29scyNUaGVfaXRlcmF0b3JfcHJvdG9jb2xcbiAqIFszXTogaHR0cHM6Ly8yYWxpdHkuY29tLzIwMTUvMTAvcHJvcGVydHktdHJhdmVyc2FsLW9yZGVyLWVzNi5odG1sXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZGNvcmVcbiAqIEBwYXJhbSB7KG9iamVjdHxtb2R1bGU6eGRjb3JlLkl0ZXJhYmxlRnVuY3Rpb258ZXh0ZXJuYWw6SXRlcmFibGUpfSB2YWx1ZVxuICogICAgIFRoZSB2YWx1ZSB0byBjcmVhdGUgYW4gaXRlcmF0b3Igb3Zlci5cbiAqIEByZXR1cm5zIHtleHRlcm5hbDpJdGVyYXRvcn0gQW4gaXRlcmF0b3Igb3ZlciBgdmFsdWVgLlxuICovXG5mdW5jdGlvbiBpdGVyYXRvcih2YWx1ZSkge1xuICBzd2l0Y2ggKHRydWUpIHtcbiAgICBjYXNlIGlzRnVuY3Rpb24odmFsdWVbU3ltYm9sLml0ZXJhdG9yXSk6XG4gICAgY2FzZSBpc0dlbmVyYXRvckZ1bmN0aW9uKHZhbHVlW1N5bWJvbC5pdGVyYXRvcl0pOlxuICAgICAgcmV0dXJuIHZhbHVlW1N5bWJvbC5pdGVyYXRvcl0oKTtcbiAgICBjYXNlIGlzRnVuY3Rpb24odmFsdWUpOlxuICAgICAgcmV0dXJuIGZ1bmN0aW9uSXRlcmF0b3IodmFsdWUpO1xuICAgIGNhc2UgaXNPYmplY3QodmFsdWUpOlxuICAgICAgcmV0dXJuIG9iamVjdEl0ZXJhdG9yKHZhbHVlKTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHBhc3NlZCBvYmplY3QgaXMgaXRlcmFibGUsIGluIHRlcm1zIG9mIHdoYXQgJ2l0ZXJhYmxlJ1xuICogbWVhbnMgdG8gdGhpcyBsaWJyYXJ5LiBJbiBvdGhlciB3b3JkcywgdmFsdWVzIGltcGxlbWVudGluZyB0aGUgYGl0ZXJhYmxlYFxuICogcHJvdG9jb2wgYW5kIHBsYWluIG9iamVjdHMgcmV0dXJuIGB0cnVlYCwgd2hpbGUgZXZlcnl0aGluZyBlbHNlIHJldHVybnNcbiAqIGBmYWxzZWAuIFRoaXMgZG9lcyBub3QgcmV0dXJuIGB0cnVlYCBmb3IgZnVuY3Rpb25zIGV2ZW4gdGhvdWdoXG4gKiB7QGxpbmsgbW9kdWxlOnhkY29yZS5pdGVyYXRvcnxpdGVyYXRvcn0gY2FuIHByb2R1Y2UgYW4gaXRlcmF0b3IgZm9yIHRoZW0sXG4gKiBiZWNhdXNlIG5vdCBhbGwgZnVuY3Rpb25zIHdvcmsgd2VsbCB3aXRoXG4gKiB7QGxpbmsgbW9kdWxlOnhkY29yZS5pdGVyYXRvcnxpdGVyYXRvcn0uXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZGNvcmVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3QgZm9yIGl0ZXJhYmlsaXR5LlxuICogQHJldHVybiB7Ym9vbGVhbn0gRWl0aGVyIGB0cnVlYCBpZiB0aGUgdmFsdWUgaXMgaXRlcmFibGVcbiAqICAgICAoYHtAbGluayBtb2R1bGU6eGRjb3JlLml0ZXJhdG9yfGl0ZXJhdG9yfWAgd2lsbCByZXR1cm4gYW4gaXRlcmF0b3IgZm9yXG4gKiAgICAgaXQpIG9yIGBmYWxzZWAgaWYgaXQgaXMgbm90LlxuICovXG5mdW5jdGlvbiBpc0l0ZXJhYmxlKHZhbHVlKSB7XG4gIHJldHVybiBpc0ltcGxlbWVudGVkKHZhbHVlLCBcIml0ZXJhdG9yXCIpIHx8IGlzT2JqZWN0KHZhbHVlKTtcbn1cblxuZXhwb3J0IHsgaXRlcmF0b3IsIGlzSXRlcmFibGUgfTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG4vKipcbiAqIFByb3RvY29scyBmb3IgaXRlcmF0aW9uIGFuZCByZWR1Y3Rpb24uXG4gKlxuICogQG1vZHVsZSB4ZGNvcmUvcHJvdG9jb2xcbiAqIEBwcml2YXRlXG4gKi9cblxuaW1wb3J0IHsgaXNGdW5jdGlvbiwgaXNHZW5lcmF0b3JGdW5jdGlvbiB9IGZyb20gXCJtb2R1bGVzL3V0aWxzXCI7XG5cbi8qKlxuICogVGhlIG1hcHBpbmcgb2YgcHJvdG9jb2wgbmFtZXMgdG8gdGhlaXIgcmVzcGVjdGl2ZSBwcm9wZXJ0eSBrZXkgbmFtZXMuIFRoaXNcbiAqIG1hcHBpbmcgbWFrZXMgaXQgZWFzaWVyIHRvIGRlYWwgd2l0aCB0aGVzZSBwcm90b2NvbHMgYXMgdGhleSBjYW4gYmUgbG9va2VkIHVwXG4gKiBieSBzdHJpbmcgbmFtZSByYXRoZXIgdGhhbiBieSBtb3JlIGRpZmZpY3VsdC10by13b3JrLXdpdGggc3ltYm9scy5cbiAqXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBQcm90b2NvbE1hcFxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZGNvcmVcbiAqIEBwcm9wZXJ0eSB7U3ltYm9sfSBpbml0IFRoZSBgcmVkdWNlci9pbml0YCBwcm90b2NvbC4gVGhpcyBpcyB1c2VkIHRvIG1hcmtcbiAqICAgICBmdW5jdGlvbnMgdGhhdCBpbml0aWFsaXplIGEgdGFyZ2V0IGNvbGxlY3Rpb24gYmVmb3JlIGFkZGluZyBpdGVtcyB0byBpdC5cbiAqIEBwcm9wZXJ0eSB7U3ltYm9sfSBzdGVwIFRoZSBgcmVkdWNlci9zdGVwYCBwcm90b2NvbC4gVGhpcyBpcyB1c2VkIHRvIG1hcmtcbiAqICAgICBmdW5jdGlvbnMgdGhhdCBhcmUgdXNlZCBpbiB0aGUgcmVkdWNlcidzIHN0ZXAgcHJvY2Vzcywgd2hlcmUgb2JqZWN0cyBhcmVcbiAqICAgICBhZGRlZCB0byB0aGUgdGFyZ2V0IGNvbGxlY3Rpb24gb25lIGF0IGEgdGltZS5cbiAqIEBwcm9wZXJ0eSB7U3ltYm9sfSBmaW5hbCBUaGUgYHJlZHVjZXIvZmluYWxgIHByb3RvY29sLiBUaGlzIGlzIHVzZWQgdG8gbWFya1xuICogICAgIGZ1bmN0aW9ucyB0aGF0IHRha2UgdGhlIGZpbmFsIHJlc3VsdCBvZiB0aGUgc3RlcCBwcm9jZXNzIGFuZCByZXR1cm4gdGhlXG4gKiAgICAgZmluYWwgZm9ybSB0byBiZSBvdXRwdXQuIFRoaXMgaXMgb3B0aW9uYWw7IGlmIHRoZSByZWR1Y2VyIGRvZXMgbm90IHdhbnRcbiAqICAgICB0byB0cmFuc2Zvcm0gdGhlIGZpbmFsIHJlc3VsdCwgaXQgc2hvdWxkIGp1c3QgcmV0dXJuIHRoZSByZXN1bHQgb2YgaXRzXG4gKiAgICAgY2hhaW5lZCByZWR1Y2VyJ3MgYGZpbmFsYCBmdW5jdGlvbi5cbiAqIEBwcm9wZXJ0eSB7U3ltYm9sfSByZWR1Y2VkIFRoZSBgcmVkdWNlci9jb21wbGV0ZWRgIHByb3RvY29sLiBUaGUgcHJlc2VuY2Ugb2ZcbiAqICAgICB0aGlzIGtleSBvbiBhbiBvYmplY3QgaW5kaWNhdGVzIHRoYXQgaXRzIHRyYW5zZm9ybWF0aW9uIGhhcyBiZWVuXG4gKiAgICAgY29tcGxldGVkLiBJdCBpcyB1c2VkIGludGVybmFsbHkgdG8gbWFyayBjb2xsZWN0aW9ucyB3aG9zZVxuICogICAgIHRyYW5zZm9ybWF0aW9ucyBjb25jbHVkZSBiZWZvcmUgZXZlcnkgb2JqZWN0IGlzIGl0ZXJhdGVkIG92ZXIgKGFzIGluXG4gKiAgICAgYHtAbGluayBtb2R1bGU6eGR1Y2UudGFrZX1gIHRyYW5zZHVjZXJzLikgSXQgaXMgb2YgbGl0dGxlIHVzZSBiZXlvbmRcbiAqICAgICB0cmFuc2R1Y2VyIGF1dGhvcmluZy5cbiAqIEBwcm9wZXJ0eSB7U3ltYm9sfSB2YWx1ZSBUaGUgYHJlZHVjZXIvdmFsdWVgIHByb3RvY29sLiBUaGlzIGlzIHVzZWRcbiAqICAgICBpbnRlcm5hbGx5IHRvIG1hcmsgcHJvcGVydGllcyB0aGF0IGNvbnRhaW4gdGhlIHZhbHVlIG9mIGEgY29tcGxldGVkXG4gKiAgICAgdHJhbnNmb3JtYXRpb24uIEl0IGlzIG9mIGxpdHRsZSB1c2UgYmV5b25kIHRyYW5zZHVjZXIgYXV0aG9yaW5nLlxuICovXG5cbi8qKlxuICogVGhlIG1hcHBpbmcgb2YgcHJvdG9jb2wgbmFtZXMgdG8gdGhlaXIgcmVzcGVjdGl2ZSBwcm9wZXJ0eSBrZXkgbmFtZXMuXG4gKlxuICogQHR5cGUge21vZHVsZTp4ZGNvcmUuUHJvdG9jb2xNYXB9XG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkY29yZVxuICovXG5jb25zdCBwcm90b2NvbHMgPSBPYmplY3QuY3JlYXRlKG51bGwsIHtcbiAgaW5pdDoge1xuICAgIHZhbHVlOiBTeW1ib2wuZm9yKFwicmVkdWNlci9pbml0XCIpXG4gIH0sXG4gIHN0ZXA6IHtcbiAgICB2YWx1ZTogU3ltYm9sLmZvcihcInJlZHVjZXIvc3RlcFwiKVxuICB9LFxuICBmaW5hbDoge1xuICAgIHZhbHVlOiBTeW1ib2wuZm9yKFwicmVkdWNlci9maW5hbFwiKVxuICB9LFxuICBjb21wbGV0ZWQ6IHtcbiAgICB2YWx1ZTogU3ltYm9sLmZvcihcInJlZHVjZXIvY29tcGxldGVkXCIpXG4gIH0sXG4gIHZhbHVlOiB7XG4gICAgdmFsdWU6IFN5bWJvbC5mb3IoXCJyZWR1Y2VyL3ZhbHVlXCIpXG4gIH1cbn0pO1xuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhIHBhcnRpY3VsYXIgcHJvdG9jb2wgaXMgaW1wbGVtZW50ZWQgYnkgYSB2YWx1ZS4gVGhlXG4gKiBwb3NzaWJsZSB2YWx1ZXMgZm9yIGBwcm90b2NvbGAgYXJlIHRoZSBmb2xsb3dpbmcsIHJlcHJlc2VudGluZyB0aGUgdHdvXG4gKiBidWlsdC1pbiBpdGVyYXRvciBwcm90b2NvbHMgYW5kIHRoZSBmaXZlIGN1c3RvbSB0cmFuc2R1Y2VyIHByb3RvY29sczpcbiAqXG4gKiAqIGBpdGVyYXRvcmBcbiAqICogYGFzeW5jSXRyZXJhdG9yYFxuICogKiBgaW5pdGBcbiAqICogYHN0ZXBgXG4gKiAqIGBmaW5hbGBcbiAqICogYGNvbXBsZXRlZGBcbiAqICogYHZhbHVlYFxuICpcbiAqIEFueSBvZiB0aGVzZSB3aWxsIHJlc3VsdCBpbiBgdHJ1ZWAgaWYgdGhlIG9iamVjdCBpbiBxdWVzdGlvbiBoYXMgYSBwcm9wZXJ0eVxuICogdGhhdCBtYXRjaGVzIHRoZSBvbmUgbmVjZXNzYXJ5IHRvIGltcGxlbWVudCB0aGUgcHJvdG9jb2wuIEZ1cnRoZXIsIGFueSBvZlxuICogdGhlIHByb3BlcnRpZXMgb3RoZXIgdGhhbiBgY29tcGxldGVkYCBhbmQgYHN0ZXBgIG11c3QgYmUgZnVuY3Rpb25zLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGRjb3JlXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIFRoZSBvYmplY3QgdG8gY2hlY2sgZm9yIHByb3RvY29sIGltcGxlbWVudGF0aW9uLlxuICogQHBhcmFtIHtzdHJpbmd9IHByb3RvY29sIFRoZSBuYW1lIG9mIHRoZSBwcm90b2NvbCB0byBjaGVjayBmb3IuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gRWl0aGVyIGB0cnVlYCBpZiB0aGUgb2JqZWN0IHN1cHBvcnRzIHRoZSBuYW1lZCBwcm90b2NvbCBvclxuICogICAgIGBmYWxzZWAgaWYgaXQgZG9lcyBub3QuXG4gKi9cbmZ1bmN0aW9uIGlzSW1wbGVtZW50ZWQob2JqLCBwcm90b2NvbCkge1xuICBpZiAob2JqID09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzd2l0Y2ggKHByb3RvY29sKSB7XG4gICAgY2FzZSBcIml0ZXJhdG9yXCI6XG4gICAgICByZXR1cm4gKFxuICAgICAgICBpc0Z1bmN0aW9uKG9ialtTeW1ib2wuaXRlcmF0b3JdKSB8fFxuICAgICAgICBpc0dlbmVyYXRvckZ1bmN0aW9uKG9ialtTeW1ib2wuaXRlcmF0b3JdKVxuICAgICAgKTtcbiAgICBjYXNlIFwiYXN5bmNJdGVyYXRvclwiOlxuICAgICAgcmV0dXJuIGlzR2VuZXJhdG9yRnVuY3Rpb24ob2JqW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSk7XG4gICAgY2FzZSBcImNvbXBsZXRlZFwiOlxuICAgIGNhc2UgXCJ2YWx1ZVwiOlxuICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqKS5pbmNsdWRlcyhwcm90b2NvbHNbcHJvdG9jb2xdKTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGlzRnVuY3Rpb24ob2JqW3Byb3RvY29sc1twcm90b2NvbF1dKTtcbiAgfVxufVxuXG5leHBvcnQgeyBwcm90b2NvbHMsIGlzSW1wbGVtZW50ZWQgfTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG4vKipcbiAqIEEgc2V0IG9mIGZ1bmN0aW9ucyByZWxhdGVkIHRvIHRoZSBwcm9kdWNpbmcgcmVkdWNlciBvYmplY3RzLCBtYXJraW5nXG4gKiBjb21wbGV0ZWQgb2JqZWN0cywgYW5kIHBlcmZvcm1pbmcgZ2VuZXJhbCByZWR1Y3Rpb24gb3BlcmF0aW9ucy5cbiAqXG4gKiBAbW9kdWxlIHhkY29yZS9yZWR1Y3Rpb25cbiAqIEBwcml2YXRlXG4gKi9cblxuaW1wb3J0IHsgaXNJbXBsZW1lbnRlZCwgcHJvdG9jb2xzIGFzIHAgfSBmcm9tIFwibW9kdWxlcy9wcm90b2NvbFwiO1xuaW1wb3J0IHsgaXNTdHJpbmcsIGlzQXJyYXksIGlzT2JqZWN0LCBpc0Z1bmN0aW9uIH0gZnJvbSBcIm1vZHVsZXMvdXRpbHNcIjtcbmltcG9ydCB7IGl0ZXJhdG9yIH0gZnJvbSBcIm1vZHVsZXMvaXRlcmF0aW9uXCI7XG5cbi8qKlxuICogUmV0dXJucyBhbiBpbml0IGZ1bmN0aW9uIGZvciBhIGNvbGxlY3Rpb24uIFRoaXMgaXMgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYVxuICogbmV3LCBlbXB0eSBpbnN0YW5jZSBvZiB0aGUgY29sbGVjdGlvbiBpbiBxdWVzdGlvbi4gSWYgdGhlIGNvbGxlY3Rpb24gZG9lc24ndFxuICogc3VwcG9ydCByZWR1Y3Rpb24sIGBudWxsYCBpcyByZXR1cm5lZC4gVGhpcyBtYWtlcyBjb25kaXRpb25hbHMgYSBiaXQgZWFzaWVyXG4gKiB0byB3b3JrIHdpdGguXG4gKlxuICogSW4gb3JkZXIgdG8gc3VwcG9ydCB0aGUgY29udmVyc2lvbiBvZiBmdW5jdGlvbnMgaW50byByZWR1Y2VycywgZnVuY3Rpb25cbiAqIHN1cHBvcnQgaXMgYWxzbyBwcm92aWRlZC5cbiAqXG4gKiBAcGFyYW0geyhvYmplY3R8ZnVuY3Rpb258ZXh0ZXJuYWw6SXRlcmFibGUpfSBjb2xsZWN0aW9uIEEgY29sbGVjdGlvbiB0b1xuICogICAgIGNyZWF0ZSBhbiBpbml0IGZ1bmN0aW9uIGZvci4gVGhpcyBjYW4gYmUgYW55dGhpbmcgdGhhdCBzdXBwb3J0cyB0aGVcbiAqICAgICBpdGVyYXRhYmxlIHByb3RvY29sLCBhIHBsYWluIG9iamVjdCwgb3IgYSBmdW5jdGlvbi5cbiAqIEByZXR1cm4ge21vZHVsZTp4ZGNvcmUuSW5pdEZ1bmN0aW9ufSBBIGZ1bmN0aW9uIHRoYXQsIHdoZW4gY2FsbGVkLCByZXR1cm5zIGFuXG4gKiAgICAgaW5pdGlhbCB2ZXJzaW9uIG9mIHRoZSBwcm92aWRlZCBjb2xsZWN0aW9uLiBJZiB0aGUgcHJvdmlkZWQgY29sbGVjdGlvbiBpc1xuICogICAgIG5vdCBpdGVyYWJsZSwgdGhlbiBgbnVsbGAgaXMgcmV0dXJuZWQuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBpbml0KGNvbGxlY3Rpb24pIHtcbiAgc3dpdGNoICh0cnVlKSB7XG4gICAgY2FzZSBpc0ltcGxlbWVudGVkKGNvbGxlY3Rpb24sIFwiaW5pdFwiKTpcbiAgICAgIHJldHVybiBjb2xsZWN0aW9uW3AuaW5pdF07XG4gICAgY2FzZSBpc1N0cmluZyhjb2xsZWN0aW9uKTpcbiAgICAgIHJldHVybiAoKSA9PiBcIlwiO1xuICAgIGNhc2UgaXNBcnJheShjb2xsZWN0aW9uKTpcbiAgICAgIHJldHVybiAoKSA9PiBbXTtcbiAgICBjYXNlIGlzT2JqZWN0KGNvbGxlY3Rpb24pOlxuICAgICAgcmV0dXJuICgpID0+ICh7fSk7XG4gICAgY2FzZSBpc0Z1bmN0aW9uKGNvbGxlY3Rpb24pOlxuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoXCJpbml0IG5vdCBhdmFpbGFibGVcIik7XG4gICAgICB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG4vKipcbiAqIFJldHVybnMgYSBzdGVwIGZ1bmN0aW9uIGZvciBhIGNvbGxlY3Rpb24uIFRoaXMgaXMgYSBmdW5jdGlvbiB0aGF0IHRha2VzIGFuXG4gKiBhY2N1bXVsYXRvciBhbmQgYSB2YWx1ZSBhbmQgcmV0dXJucyB0aGUgcmVzdWx0IG9mIHJlZHVjaW5nIHRoZSB2YWx1ZSBpbnRvIHRoZVxuICogYWNjdW11bGF0b3IuIElmIHRoZSBjb2xsZWN0aW9uIGRvZXNuJ3Qgc3VwcG9ydCByZWR1Y3Rpb24sIGBudWxsYCBpcyByZXR1cm5lZC5cbiAqIFRoZSByZXR1cm5lZCBmdW5jdGlvbiBpdHNlbGYgc2ltcGx5IHJlZHVjZXMgdGhlIGlucHV0IGludG8gdGhlIHRhcmdldFxuICogY29sbGVjdGlvbiB3aXRob3V0IG1vZGlmeWluZyBpdC5cbiAqXG4gKiBJbiBvcmRlciB0byBzdXBwb3J0IHRoZSBjb252ZXJzaW9uIG9mIGZ1bmN0aW9ucyBpbnRvIHJlZHVjZXJzLCBmdW5jdGlvblxuICogc3VwcG9ydCBpcyBhbHNvIHByb3ZpZGVkLlxuICpcbiAqIEBwYXJhbSB7KG9iamVjdHxmdW5jdGlvbnxleHRlcm5hbDpJdGVyYWJsZSl9fSBjb2xsZWN0aW9uIEEgY29sbGVjdGlvbiB0b1xuICogICAgIGNyZWF0ZSBhIHN0ZXAgZnVuY3Rpb24gZm9yLiBUaGlzIGNhbiBiZSBhbnl0aGluZyB0aGF0IHN1cHBvcnRzIHRoZVxuICogICAgIGl0ZXJhdGlvbiBwcm90b2NvbCwgYSBwbGFpbiBvYmplY3QsIG9yIGEgZnVuY3Rpb24uXG4gKiBAcmV0dXJuIHttb2R1bGU6eGRjb3JlLlN0ZXBGdW5jdGlvbn0gQSByZWR1Y3Rpb24gZnVuY3Rpb24gZm9yIHRoZSBwcm92aWRlZFxuICogICAgIGNvbGxlY3Rpb24gdGhhdCBzaW1wbHkgYWRkcyBhbiBlbGVtZW50IHRvIHRoZSB0YXJnZXQgY29sbGVjdGlvbiB3aXRob3V0XG4gKiAgICAgbW9kaWZ5aW5nIGl0LiBJZiB0aGUgcHJvdmlkZWQgY29sbGVjdGlvbiBpcyBub3QgaXRlcmFibGUsIGBudWxsYCBpc1xuICogICAgIHJldHVybmVkLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gc3RlcChjb2xsZWN0aW9uKSB7XG4gIHN3aXRjaCAodHJ1ZSkge1xuICAgIGNhc2UgaXNJbXBsZW1lbnRlZChjb2xsZWN0aW9uLCBcInN0ZXBcIik6XG4gICAgICByZXR1cm4gY29sbGVjdGlvbltwLnN0ZXBdO1xuXG4gICAgY2FzZSBpc1N0cmluZyhjb2xsZWN0aW9uKTpcbiAgICAgIHJldHVybiAoYWNjLCB2YWx1ZSkgPT4ge1xuICAgICAgICBjb25zdCB2ID0gaXNPYmplY3QodmFsdWUpID8gdmFsdWVbT2JqZWN0LmtleXModmFsdWUpWzBdXSA6IHZhbHVlO1xuICAgICAgICByZXR1cm4gYWNjICsgdjtcbiAgICAgIH07XG5cbiAgICBjYXNlIGlzQXJyYXkoY29sbGVjdGlvbik6XG4gICAgICByZXR1cm4gKGFjYywgdmFsdWUpID0+IHtcbiAgICAgICAgYWNjLnB1c2godmFsdWUpO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfTtcblxuICAgIGNhc2UgaXNPYmplY3QoY29sbGVjdGlvbik6XG4gICAgICByZXR1cm4gKGFjYywgdmFsdWUpID0+IHtcbiAgICAgICAgbGV0IHYgPSB2YWx1ZTtcblxuICAgICAgICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgICAgIC8vIGlmIHRoZSBpbnB1dCBpc24ndCBhbiBvYmplY3QsIHR1cm4gaXQgaW50byBhbiBvYmplY3Qgd2l0aCBhXG4gICAgICAgICAgLy8gbnVtZXJpY2FsIGtleSBvbmUgZ3JlYXRlciB0aGFuIHRoZSBtYXgga2V5IGFscmVhZHkgaW4gdGhlXG4gICAgICAgICAgLy8gYWNjdW11bGF0b3JcbiAgICAgICAgICBjb25zdCBtYXggPSBPYmplY3Qua2V5cyhhY2MpLnJlZHVjZSgoYSwgYikgPT4gTWF0aC5tYXgoYSwgYiksIC0xKTtcbiAgICAgICAgICB2ID0geyBbbWF4ICsgMV06IHZhbHVlIH07XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBrID0gT2JqZWN0LmtleXModilbMF07XG4gICAgICAgIGFjY1trXSA9IHZba107XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9O1xuXG4gICAgY2FzZSBpc0Z1bmN0aW9uKGNvbGxlY3Rpb24pOlxuICAgICAgcmV0dXJuIChhY2MsIHZhbHVlKSA9PiBjb2xsZWN0aW9uKGFjYywgdmFsdWUpO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbi8qKlxuICogUmV0dXJucyBhIGZpbmFsIGZ1bmN0aW9uIGZvciBhIGNvbGxlY3Rpb24uIFRoaXMgaXMgYSBmdW5jdGlvbiB0aGF0IHBlcmZvcm1zXG4gKiBhbnkgZmluYWwgcHJvY2Vzc2luZyB0aGF0IHNob3VsZCBiZSBkb25lIG9uIHRoZSByZXN1bHQgb2YgYSByZWR1Y3Rpb24uIElmIHRoZVxuICogY29sbGVjdGlvbiBkb2Vzbid0IHN1cHBvcnQgcmVkdWN0aW9uLCBgbnVsbGAgaXMgcmV0dXJuZWQuXG4gKlxuICogSW4gb3JkZXIgdG8gc3VwcG9ydCB0aGUgY29udmVyc2lvbiBvZiBmdW5jdGlvbnMgaW50byByZWR1Y2VycywgZnVuY3Rpb25cbiAqIHN1cHBvcnQgaXMgYWxzbyBwcm92aWRlZC5cbiAqXG4gKiBAcGFyYW0geyhvYmplY3R8ZnVuY3Rpb258ZXh0ZXJuYWw6SXRlcmFibGUpfX0gY29sbGVjdGlvbiBBIGNvbGxlY3Rpb24gdG9cbiAqICAgICBjcmVhdGUgYSBzdGVwIGZ1bmN0aW9uIGZvci4gVGhpcyBjYW4gYmUgYW55dGhpbmcgdGhhdCBzdXBwb3J0cyB0aGVcbiAqICAgICBpdGVyYXRpb24gcHJvdG9jb2wsIGEgcGxhaW4gb2JqZWN0LCBvciBhIGZ1bmN0aW9uLlxuICogQHJldHVybiB7bW9kdWxlOnhkY29yZS5GaW5hbEZ1bmN0aW9ufSBBIGZ1bmN0aW9uIHRoYXQsIHdoZW4gZ2l2ZW4gYSByZWR1Y2VkXG4gKiAgICAgY29sbGVjdGlvbiwgcHJvZHVjZXMgdGhlIGZpbmFsIG91dHB1dC4gSWYgdGhlIHByb3ZpZGVkIGNvbGxlY3Rpb24gaXMgbm90XG4gKiAgICAgaXRlcmFibGUsIGBudWxsYCB3aWxsIGJlIHJldHVybmVkLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZmluYWwoY29sbGVjdGlvbikge1xuICBzd2l0Y2ggKHRydWUpIHtcbiAgICBjYXNlIGlzSW1wbGVtZW50ZWQoY29sbGVjdGlvbiwgXCJmaW5hbFwiKTpcbiAgICAgIHJldHVybiBjb2xsZWN0aW9uW3AuZmluYWxdO1xuICAgIGNhc2UgaXNTdHJpbmcoY29sbGVjdGlvbik6XG4gICAgY2FzZSBpc0FycmF5KGNvbGxlY3Rpb24pOlxuICAgIGNhc2UgaXNPYmplY3QoY29sbGVjdGlvbik6XG4gICAgY2FzZSBpc0Z1bmN0aW9uKGNvbGxlY3Rpb24pOlxuICAgICAgcmV0dXJuIHZhbHVlID0+IHZhbHVlO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG4vKipcbiAqIENyZWF0ZXMgYSByZWR1Y2VyIG9iamVjdCBmcm9tIGEgZnVuY3Rpb24gb3IgZnJvbSBhIHJlZHVjaWJsZSB0eXBlIChhcnJheSxcbiAqIG9iamVjdCwgc3RyaW5nLCBvciBvYmplY3QgaW1wbGVtZW50aW5nIHRoZSByZWR1Y2VyIHByb3RvY29scykuXG4gKlxuICogVG8gY3JlYXRlIGEgcmVkdWNlciBmb3IgYXJyYXlzLCBvYmplY3RzLCBvciBzdHJpbmdzLCBzaW1wbHkgcGFzcyBhbiBlbXB0eVxuICogdmVyc2lvbiBvZiB0aGF0IGNvbGxlY3Rpb24gdG8gdGhpcyBmdW5jdGlvbiAoZS5nLiwgYHRvUmVkdWNlcihbXSlgKS5cbiAqXG4gKiBUaGUgbm90YWJsZSB1c2UgZm9yIHRoaXMgZnVuY3Rpb24gdGhvdWdoIGlzIHRvIHR1cm4gYSByZWR1Y3Rpb24gZnVuY3Rpb24gaW50b1xuICogYSByZWR1Y2VyIG9iamVjdC4gVGhlIGZ1bmN0aW9uIGlzIGEgZnVuY3Rpb24gb2YgdHdvIHBhcmFtZXRlcnMsIGFuXG4gKiBhY2N1bXVsYXRvciBhbmQgYSB2YWx1ZSwgYW5kIHJldHVybnMgdGhlIGFjY3VtdWxhdG9yIHdpdGggdGhlIHZhbHVlIGluIGl0LlxuICogVGhpcyBpcyBleGFjdGx5IHRoZSBzYW1lIGtpbmQgb2YgZnVuY3Rpb24gdGhhdCBpcyBwYXNzZWQgdG8gcmVkdWN0aW9uXG4gKiBmdW5jdGlvbnMgbGlrZSBKYXZhU2NyaXB0J3MgYEFycmF5LnByb3RvdHlwZS5yZWR1Y2VgIGFuZCBMb2Rhc2gncyBgXy5yZWR1Y2VgLlxuICpcbiAqIE5vdGUgaW4gcGFydGljdWxhciB0aGF0IHRoZSBvdXRwdXQgb2YgdGhpcyByZWR1Y2VyIGRvZXMgbm90IG5lZWQgdG8gYmUgYVxuICogY29sbGVjdGlvbi4gSXQgY2FuIGJlIGFueXRoaW5nLiBXaGlsZSB0cmFuc2R1Y2luZyBub3JtYWxseSBpbnZvbHZlc1xuICogdHJhbnNmb3JtaW5nIG9uZSBjb2xsZWN0aW9uIGludG8gYW5vdGhlciwgaXQgbmVlZCBub3QgYmUgc28uIEZvciBleGFtcGxlLFxuICogaGVyZSBpcyBhIHJlZHVjZXIgdGhhdCB3aWxsIHJlc3VsdCBpbiBzdW1taW5nIG9mIHRoZSBjb2xsZWN0aW9uIHZhbHVlcy5cbiAqXG4gKiBgYGBcbiAqIGltcG9ydCB7IHRvUmVkdWNlciwgcmVkdWNlIH0gZnJvbSBcIkBjaGFua28veGRjb3JlXCI7XG4gKlxuICogY29uc3Qgc3VtUmVkdWNlciA9IHRvUmVkdWNlcigoYWNjLCBpbnB1dCkgPT4gYWNjICsgaW5wdXQpO1xuICogY29uc3Qgc3VtID0gcmVkdWNlKFsxLCAyLCAzLCA0LCA1XSwgc3VtUmVkdWNlciwgMCk7XG4gKiBjb25zb2xlLmxvZyhzdW0pOyAgIC8vIC0+IDE1XG4gKiBgYGBcbiAqXG4gKiBUaGlzIGNhbiBiZSBjb21iaW5lZCB3aXRoIHRyYW5zZHVjZXJzIGFzIHdlbGwsIGFzIGluIHRoaXMgY2FsY3VsYXRpb24gb2YgdGhlXG4gKiBzdW0gb2YgdGhlICpzcXVhcmVzKiBvZiB0aGUgY29sbGVjdGlvbiB2YWx1ZXMuXG4gKlxuICogYGBgXG4gKiBpbXBvcnQgeyB0b1JlZHVjZXIgfSBmcm9tIFwiQGNoYW5rby94ZGNvcmVcIjtcbiAqIGltcG9ydCB7IHRyYW5zZHVjZSwgbWFwIH0gZnJvbSBcIkBjaGFua28veGR1Y2VcIjtcbiAqXG4gKiBjb25zdCBzdW1SZWR1Y2VyID0gdG9SZWR1Y2VyKChhY2MsIGlucHV0KSA9PiBhY2MgKyBpbnB1dCk7XG4gKiBjb25zdCBzdW0gPSB0cmFuc2R1Y2UoWzEsIDIsIDMsIDQsIDVdLCBtYXAoeCA9PiB4ICogeCksIHN1bVJlZHVjZXIsIDApO1xuICogY29uc29sZS5sb2coc3VtKTsgICAvLyAtPiA1NVxuICogYGBgXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZGNvcmVcbiAqIEBwYXJhbSB7KGFycmF5fG9iamVjdHxmdW5jdGlvbnxtb2R1bGU6eGRjb3JlLlJlZHVjZXJPYmplY3QpfSBjb2xsZWN0aW9uIEFcbiAqICAgICByZWR1Y2libGUgY29sbGVjdGlvbiBvciBhIHJlZHVjZXIgZnVuY3Rpb24uXG4gKiBAcmV0dXJuIHttb2R1bGU6eGRjb3JlLlJlZHVjZXJPYmplY3R9IEFuIG9iamVjdCBjb250YWluaW5nIHByb3RvY29sXG4gKiAgICAgcHJvcGVydGllcyBmb3IgYGluaXRgLCBgc3RlcGAsIGFuZCBgZmluYWxgLiBUaGlzIG9iamVjdCBpcyBzdWl0YWJsZSBmb3JcbiAqICAgICB1c2UgYXMgYSByZWR1Y2VyIG9iamVjdCAob25lIHByb3ZpZGVkIHRvXG4gKiAgICAgYHtAbGluayBtb2R1bGU6eGRjb3JlLnJlZHVjZXxyZWR1Y2V9YCkuIElmIHRoZSBwcm92aWRlZCBjb2xsZWN0aW9uIGlzIG5vdFxuICogICAgIHJlZHVjaWJsZSwgYWxsIG9mIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgb2JqZWN0IHdpbGwgYmUgYG51bGxgLlxuICovXG5mdW5jdGlvbiB0b1JlZHVjZXIoY29sbGVjdGlvbikge1xuICByZXR1cm4gT2JqZWN0LmZyZWV6ZSh7XG4gICAgW3AuaW5pdF06IGluaXQoY29sbGVjdGlvbiksXG4gICAgW3Auc3RlcF06IHN0ZXAoY29sbGVjdGlvbiksXG4gICAgW3AuZmluYWxdOiBmaW5hbChjb2xsZWN0aW9uKVxuICB9KTtcbn1cblxuLyoqXG4gKiBBIHJlZHVjZXIgb2JqZWN0IGZvciBhcnJheXMuXG4gKlxuICogQHR5cGUge21vZHVsZTp4ZGNvcmUuUmVkdWNlck9iamVjdH1cbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IEFSUkFZX1JFRFVDRVIgPSB0b1JlZHVjZXIoW10pO1xuXG4vKipcbiAqIEEgcmVkdWNlciBvYmplY3QgZm9yIG9iamVjdHMuXG4gKlxuICogQHR5cGUge21vZHVsZTp4ZGNvcmUuUmVkdWNlck9iamVjdH1cbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IE9CSkVDVF9SRURVQ0VSID0gdG9SZWR1Y2VyKHt9KTtcblxuLyoqXG4gKiBBIHJlZHVjZXIgb2JqZWN0IGZvciBzdHJpbmdzLlxuICpcbiAqIEB0eXBlIHttb2R1bGU6eGRjb3JlLlJlZHVjZXJPYmplY3R9XG4gKiBAcHJpdmF0ZVxuICovXG5jb25zdCBTVFJJTkdfUkVEVUNFUiA9IHRvUmVkdWNlcihcIlwiKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgdHJhbnNkdWNlciBvYmplY3QgZnJvbSBhIGZ1bmN0aW9uIGFuZCBhIHJlZHVjZXIgb2JqZWN0LlxuICpcbiAqIFRoaXMgaXMgc2ltaWxhciB0byB7QGxpbmsgbW9kdWxlOnhkY29yZS50b1JlZHVjZXJ8dG9SZWR1Y2VyfSBleGNlcHQgaW4gdHdvXG4gKiByZXNwZWN0czpcbiAqXG4gKiAxLiBJdCBvbmx5IGFjY2VwdHMgYSByZWR1Y2VyIGZ1bmN0aW9uLCBub3QgYSByZWR1Y2VyIG9iamVjdFxuICogMi4gSXQgY2hhaW5zIHRvIGFub3RoZXIgcmVkdWNlciBvYmplY3RcbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIGFwcGxpZXMgdGhlIGdpdmVuIGZ1bmN0aW9uIGFzIHRoZSBgc3RlcGAgZnVuY3Rpb24gb2YgdGhlXG4gKiByZXR1cm5lZCB0cmFuc2R1Y2VyLCBhbmQgdGhlIGBpbml0YCBhbmQgYHJlc3VsdGAgZnVuY3Rpb25zIHNpbXBseSBjYWxsIHRoZVxuICogc2FtZSBmdW5jdGlvbnMgaW4gdGhlIG5leHQgcmVkdWNlciBvYmplY3QuIFRoaXMgaXMgcHJlY2lzZWx5IHdoYXQgKm1vc3QqXG4gKiB0cmFuc2R1Y2VycyB3YW50OyBgaW5pdGAgYW5kIGByZXN1bHRgIGZ1bmN0aW9ucyBhcmUgbm9ybWFsbHkgaGFuZGxlZCBieSB0aGVcbiAqIHJlZHVjZXIgYXQgdGhlIGVuZCBvZiB0aGUgdHJhbnNkdWNlciBjaGFpbi4gSW4gdGhlIHJhcmUgY2FzZSB3aGVuIGFuIGBpbml0YFxuICogb3IgYHJlc3VsdGAgZnVuY3Rpb24gbXVzdCBkbyBtb3JlIHRoYW4gc2ltcGx5IGNoYWluLCB0aGlzIGZ1bmN0aW9uIHdpbGwgbm90XG4gKiB3b3JrLiBHZW5lcmFsbHkgdGhlIHRyYW5zZHVjZXIgb2JqZWN0IGlzIGNyZWF0ZWQgbWFudWFsbHkgaW4gdGhhdCBjYXNlLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gZG9lcyBub3QgYXV0b21hdGljYWxseSBjaGFpbiB0aGUgYHN0ZXBgIGZ1bmN0aW9uIHRvIHRoZSBuZXh0XG4gKiBvbmUgZG93biB0aGUgbGluZSwgYXMgdGhhdCBjYW4gYmUgZG9uZSBpbiBhbnkgbnVtYmVyIG9mIGRpZmZlcmVudCB3YXlzLiBUaHVzXG4gKiB0aGUgZnVuY3Rpb24gaXRzZWxmIHNob3VsZCBjYWxsIHRoZSBgc3RlcGAgZnVuY3Rpb24gaW4gYHJlZHVjZXJgIGluIHdoYXRldmVyXG4gKiB3YXkgaXMgYXBwcm9wcmlhdGUuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZGNvcmVcbiAqIEBwYXJhbSB7bW9kdWxlOnhkY29yZS5TdGVwRnVuY3Rpb259IGZuIFRoZSBzdGVwIGZ1bmN0aW9uIGZvciB0aGUgdHJhbnNkdWNlci5cbiAqIEBwYXJhbSB7bW9kdWxlOnhkY29yZS5SZWR1Y2VyT2JqZWN0fSByZWR1Y2VyIFRoZSBuZXh0IHRyYW5zZHVjZXIgb2JqZWN0IGluXG4gKiAgICAgdGhlIGNoYWluLlxuICogQHJldHVybnMge21vZHVsZTp4ZGNvcmUuUmVkdWNlck9iamVjdH0gQSBuZXcgdHJhbnNkdWNlciwgY2hhaW5pbmcgdGhlXG4gKiAgICAgc3VwcGxpZWQgZnVuY3Rpb24gdG8gdGhlIHN1cHBsaWVkIHRyYW5zZHVjZXIuXG4gKi9cbmZ1bmN0aW9uIHRvVHJhbnNkdWNlcihmbiwgcmVkdWNlcikge1xuICByZXR1cm4ge1xuICAgIFtwLmluaXRdKCkge1xuICAgICAgcmV0dXJuIHJlZHVjZXJbcC5pbml0XSgpO1xuICAgIH0sXG5cbiAgICBbcC5zdGVwXTogZm4sXG5cbiAgICBbcC5maW5hbF0odmFsdWUpIHtcbiAgICAgIHJldHVybiByZWR1Y2VyW3AuZmluYWxdKHZhbHVlKTtcbiAgICB9XG4gIH07XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHJlZHVjZXIgZnVuY3Rpb24gZnJvbSBhIHRyYW5zZHVjZXIgZnVuY3Rpb24gYW5kIGEgcmVkdWNlci5cbiAqXG4gKiBUaGlzIHByb2R1Y2VzIGEgZnVuY3Rpb24gdGhhdCdzIHN1aXRhYmxlIGZvciBiZWluZyBwYXNzZWQgaW50byBvdGhlclxuICogbGlicmFyaWVzJyByZWR1Y2UgZnVuY3Rpb25zLCBzdWNoIGFzIEphdmFTY3JpcHQncyBgQXJyYXkucHJvdG90eXBlLnJlZHVjZWAgb3JcbiAqIExvZGFzaCdzIGBfLnJlZHVjZWAuIEl0IHJlcXVpcmVzIGJvdGggYSB0cmFuc2R1Y2VyICphbmQqIGEgcmVkdWNlciBiZWNhdXNlXG4gKiByZWR1Y3Rpb24gZnVuY3Rpb25zIGZvciB0aG9zZSBsaWJyYXJpZXMgbXVzdCBrbm93IGhvdyB0byByZWR1Y2UgYXMgd2VsbCBhc1xuICogaG93IHRvIHRyYW5zZm9ybS4gVGhlIHJlZHVjZXIgY2FuIGJlIGEgc3RhbmRhcmQgcmVkdWNlciBvYmplY3QgbGlrZSB0aGUgb25lc1xuICogc2VudCB0byBge0BsaW5rIG1vZHVsZTp4ZGNvcmUucmVkdWNlfHJlZHVjZX1gLCBvciBpdCBjYW4gYmUgYSBwbGFpbiBmdW5jdGlvblxuICogdGhhdCB0YWtlcyB0d28gcGFyYW1ldGVycyBhbmQgcmV0dXJucyB0aGUgcmVzdWx0IG9mIHJlZHVjaW5nIHRoZSBzZWNvbmRcbiAqIHBhcmFtZXRlciBpbnRvIHRoZSBmaXJzdCAoaS5lLiwgYSByZWR1Y2VyIGZ1bmN0aW9uKS5cbiAqXG4gKiBJZiB0aGVyZSBpcyBubyBuZWVkIGZvciBhIHRyYW5zZm9ybWF0aW9uLCB0aGVuIHBhc3MgaW4gdGhlXG4gKiBge0BsaW5rIG1vZHVsZTp4ZHVjZS5pZGVudGl0eXxpZGVudGl0eX1gIHRyYW5zZHVjZXIuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZGNvcmVcbiAqIEBwYXJhbSB7bW9kdWxlOnhkY29yZS5UcmFuc2R1Y2VyRnVuY3Rpb259IHRyYW5zZHVjZXIgQSB0cmFuc2R1Y2VyIGZ1bmN0aW9uXG4gKiAgICAgdGhhdCB3cmFwcyBhIHRyYW5zZHVjZXIgb2JqZWN0IHdob3NlIGBzdGVwYCBmdW5jdGlvbiB3aWxsIGJlIHVzZWQgYXMgYVxuICogICAgIHJlZHVjZXIgZnVuY3Rpb24uXG4gKiBAcGFyYW0geyhtb2R1bGU6eGRjb3JlLlN0ZXBGdW5jdGlvbnxtb2R1bGU6eGRjb3JlLlJlZHVjZXJPYmplY3QpfSByZWR1Y2VyIEFcbiAqICAgICByZWR1Y2VyIHRoYXQga25vd3MgaG93IHRvIHJlZHVjZSB2YWx1ZXMgaW50byBhbiBvdXRwdXQgY29sbGVjdGlvbi4gVGhpc1xuICogICAgIGNhbiBlaXRoZXIgYmUgYSByZWR1Y2luZyBmdW5jdGlvbiBvciBhIHJlZHVjZXIgb2JqZWN0IHdob3NlIGBzdGVwYFxuICogICAgIGZ1bmN0aW9uIGtub3dzIGhvdyB0byBwZXJmb3JtIHRoaXMgcmVkdWN0aW9uLlxuICogQHJldHVybnMge21vZHVsZTp4ZGNvcmUuU3RlcEZ1bmN0aW9ufSBBIHJlZHVjZXIgZnVuY3Rpb24gdGhhdCB3aWxsIHRyYW5zZm9ybVxuICogICAgIGVsZW1lbnRzIHZpYSB0aGUgdHJhbnNkdWNlciBmdW5jdGlvbiBhbmQgdGhlbiByZWR1Y2UgdGhlbSBpbnRvIHdoYXRldmVyXG4gKiAgICAga2luZCBvZiBjb2xsZWN0aW9uIHRoZSByZWR1Y2VyIGltcGxlbWVudHMuXG4gKi9cbmZ1bmN0aW9uIHRvRnVuY3Rpb24odHJhbnNkdWNlciwgcmVkdWNlcikge1xuICBjb25zdCByID0gdHlwZW9mIHJlZHVjZXIgPT09IFwiZnVuY3Rpb25cIiA/IHRvUmVkdWNlcihyZWR1Y2VyKSA6IHJlZHVjZXI7XG4gIGNvbnN0IHJlc3VsdCA9IHRyYW5zZHVjZXIocik7XG4gIHJldHVybiByZXN1bHRbcC5zdGVwXS5iaW5kKHJlc3VsdCk7XG59XG5cbi8qKlxuICogQSBjb21wbGV0ZWQgdmFsdWUuIFRoaXMgaXMgYSB3cmFwcGVyIGFyb3VuZCB0aGUgYWN0dWFsIHZhbHVlLCB3aGljaCBpc1xuICogcmV0YWluZWQgYXMgb25lIG9mIHRoZSBwcm9wZXJ0aWVzLCBhbG9uZyB3aXRoIGEgbWFya2VyIHByb3BlcnR5IHRvIHNob3cgdGhhdFxuICogdGhpcyBpcyBhIHdyYXBwZWQgdmFsdWUuXG4gKlxuICogQHR5cGVkZWYgQ29tcGxldGVkVmFsdWVcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGRjb3JlXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IFN5bWJvbC5mb3IoXCJjb21wbGV0ZWRcIikgQSBtYXJrZXIgcHJvcGVydHkgdG8gaW5kaWNhdGVcbiAqICAgICB0aGF0IHRoaXMgaXMsIGluIGZhY3QsIGEgd3JhcHBlZCBjb21wbGV0ZWQgdmFsdWUuXG4gKiBAcHJvcGVydHkgeyp9IFN5bWJvbC5mb3IoXCJ2YWx1ZVwiKSBUaGUgd3JhcHBlZCB2YWx1ZS5cbiAqL1xuXG4vKipcbiAqIE1hcmtzIGEgdmFsdWUgYXMgY29tcGxldGUuXG4gKlxuICogVGhpcyBpcyBkb25lIGJ5IHdyYXBwaW5nIHRoZSB2YWx1ZS4gVGhpcyBtZWFucyB0aHJlZSB0aGluZ3M6IGZpcnN0LCBhXG4gKiBjb21wbGV0ZSBvYmplY3QgbWF5IGJlIG1hcmtlZCBhcyBjb21wbGV0ZSBhZ2Fpbjsgc2Vjb25kLCBhIGNvbXBsZXRlIHZhbHVlXG4gKiBpc24ndCB1c2FibGUgd2l0aG91dCBiZWluZyB1bmNvbXBsZXRlZCBmaXJzdDsgYW5kIHRoaXJkIGFueSB0eXBlIG9mIHZhbHVlXG4gKiAoaW5jbHVkaW5nIGB1bmRlZmluZWRgKSBtYXkgYmUgbWFya2VkIGFzIGNvbXBsZXRlLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGRjb3JlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBiZSBjb21wbGV0ZWQuXG4gKiBAcmV0dXJuIHttb2R1bGU6eGRjb3JlLkNvbXBsZXRlZFZhbHVlfSBBIGNvbXBsZXRlZCB2ZXJzaW9uIG9mIHRoZSBwcm92aWRlZFxuICogICAgIHZhbHVlLiBUaGlzIGVmZmVjdCBpcyBhY2hpZXZlZCBieSB3cmFwcGluZyB0aGUgdmFsdWUgaW4gYSBtYXJrZXIgb2JqZWN0LlxuICovXG5mdW5jdGlvbiBjb21wbGV0ZSh2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIFtwLmNvbXBsZXRlZF06IHRydWUsXG4gICAgW3AudmFsdWVdOiB2YWx1ZVxuICB9O1xufVxuXG4vKipcbiAqIFJlbW92ZXMgdGhlIGNvbXBsZXRlIHN0YXR1cyBmcm9tIGEgY29tcGxldGVkIHZhbHVlLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gaXMgaW50ZW5kZWQgdG8gYmUgdXNlZCB3aGVuIGl0J3MgY2VydGFpbiB0aGF0IGEgdmFsdWUgaXNcbiAqIGFscmVhZHkgbWFya2VkIGFzIGNvbXBsZXRlLiBJZiBpdCBpcyBub3QsIGB1bmRlZmluZWRgIHdpbGwgYmUgcmV0dXJuZWRcbiAqIGluc3RlYWQgb2YgdGhlIHZhbHVlLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGRjb3JlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBiZSB1bmNvbXBsZXRlZC5cbiAqIEByZXR1cm4geyp9IEFuIHVuY29tcGxldGVkIHZlcnNpb24gb2YgdGhlIHByb3ZpZGVkIHZhbHVlLiBJZiB0aGUgdmFsdWUgd2FzXG4gKiAgICAgbm90IGNvbXBsZXRlIGluIHRoZSBmaXJzdCBwbGFjZSwgYHVuZGVmaW5lZGAgd2lsbCBiZSByZXR1cm5lZCBpbnN0ZWFkLlxuICovXG5mdW5jdGlvbiB1bmNvbXBsZXRlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZT8uW3AudmFsdWVdO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhIHZhbHVlIGlzIG1hcmtlZCBhcyBjb21wbGV0ZS5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkY29yZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gdGVzdCBmb3IgaXRzIGNvbXBsZXRlIHN0YXR1cy5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IEVpdGhlciBgdHJ1ZWAgaWYgdGhlIHZhbHVlIGlzIGNvbXBsZXRlZCwgb3IgYGZhbHNlYCBpZiBpdFxuICogICAgIGlzIG5vdC5cbiAqL1xuZnVuY3Rpb24gaXNDb21wbGV0ZWQodmFsdWUpIHtcbiAgcmV0dXJuICEhdmFsdWU/LltwLmNvbXBsZXRlZF07XG59XG5cbi8qKlxuICogTWFrZXMgc3VyZSB0aGF0IGEgdmFsdWUgaXMgbWFya2VkIGFzIGNvbXBsZXRlOyBpZiBpdCBpcyBub3QsIGl0IHdpbGwgYmVcbiAqIG1hcmtlZCBhcyBjb21wbGV0ZS5cbiAqXG4gKiBUaGlzIGRpZmZlcnMgZnJvbSB7QGxpbmsgbW9kdWxlOnhkY29yZS5jb21wbGV0ZXxjb21wbGV0ZX0gaW4gdGhhdCBpZiB0aGVcbiAqIHZhbHVlIGlzIGFscmVhZHkgY29tcGxldGUsIHRoaXMgZnVuY3Rpb24gd29uJ3QgY29tcGxldGUgaXQgYWdhaW4uIFRoZXJlZm9yZVxuICogdGh1cyBmdW5jdGlvbiBjYW4ndCBiZSB1c2VkIHRvIG1ha2UgYSB2YWx1ZSBjb21wbGV0ZSBtdWx0aXBsZSB0aW1lcy5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkY29yZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gYmUgY29tcGxldGVkLlxuICogQHJldHVybiB7Kn0gSWYgdGhlIHZhbHVlIGlzIGFscmVhZHkgY29tcGxldGUsIHRoZW4gdGhlIHZhbHVlIGlzIHNpbXBseVxuICogICAgIHJldHVybmVkLiBPdGhlcndpc2UsIGEgY29tcGxldGVkIHZlcnNpb24gb2YgdGhlIHZhbHVlIGlzIHJldHVybmVkLlxuICovXG5mdW5jdGlvbiBlbnN1cmVDb21wbGV0ZWQodmFsdWUpIHtcbiAgcmV0dXJuIGlzQ29tcGxldGVkKHZhbHVlKSA/IHZhbHVlIDogY29tcGxldGUodmFsdWUpO1xufVxuXG4vKipcbiAqIFJlbW92ZXMgdGhlIGNvbXBsZXRlIHN0YXR1cyBmcm9tIGEgdmFsdWUsIGFzIGxvbmcgYXMgaXQgYWN0dWFsbHkgaXMgY29tcGxldGUuXG4gKlxuICogVGhpcyBkb2VzIGEgY2hlY2sgdG8gbWFrZSBzdXJlIHRoZSB2YWx1ZSBwYXNzZWQgaW4gYWN0dWFsbHkgaXMgY29tcGxldGUuIElmXG4gKiBpdCBpc24ndCwgdGhlIHZhbHVlIGl0c2VsZiBpcyByZXR1cm5lZC4gSXQncyBtZWFudCB0byBiZSB1c2VkIHdoZW4gdGhlXG4gKiBjb21wbGV0ZWQgc3RhdHVzIGlzIHVuY2VydGFpbi5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkY29yZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgY29tcGxldGUgdmFsdWUgdG8gYmUgdW5jb21wbGV0ZWQuXG4gKiBAcmV0dXJuIHsqfSBJZiB0aGUgdmFsdWUgaXMgYWxyZWFkeSB1bmNvbXBsZXRlZCwgdGhlIHZhbHVlIGlzIHNpbXBseVxuICogICAgIHJldHVybmVkLiBPdGhlcndpc2UgYW4gdW5jb21wbGV0ZWQgdmVyc2lvbiBvZiB0aGUgdmFsdWUgaXMgcmV0dXJuZWQuXG4gKi9cbmZ1bmN0aW9uIGVuc3VyZVVuY29tcGxldGVkKHZhbHVlKSB7XG4gIHJldHVybiBpc0NvbXBsZXRlZCh2YWx1ZSkgPyB1bmNvbXBsZXRlKHZhbHVlKSA6IHZhbHVlO1xufVxuXG4vKipcbiAqIFJlZHVjZXMgdGhlIGVsZW1lbnRzIG9mIHRoZSBpbnB1dCBjb2xsZWN0aW9uIHRocm91Z2ggYSByZWR1Y2VyIGludG8gYW4gb3V0cHV0XG4gKiBjb2xsZWN0aW9uLlxuICpcbiAqIFRoaXMgaXMgdGhlIGxvd2VzdC1sZXZlbCBvZiB0aGUgdHJhbnNkdWN0aW9uIGZ1bmN0aW9ucy4gSW4gZmFjdCwgdGhpcyBvbmUgaXNcbiAqIHNvIGxvdy1sZXZlbCB0aGF0IGl0IGRvZXNuJ3QgaGF2ZSBhIGxvdCBvZiB1c2UgaW4gbm9ybWFsIG9wZXJhdGlvbi4gSXQncyBtb3JlXG4gKiB1c2VmdWwgZm9yIHdyaXRpbmcgeW91ciBvd24gdHJhbnNmb3JtYXRpb24gZnVuY3Rpb25zLlxuICpcbiAqIGByZWR1Y2VgIGRvZXNuJ3QgYXNzdW1lIHRoYXQgdGhlcmUncyBldmVuIGEgdHJhbnNmb3JtYXRpb24uIEl0IHJlcXVpcmVzIGFuXG4gKiBpbml0aWFsIGNvbGxlY3Rpb24gYW5kIGEgcmVkdWNlciBvYmplY3QgdGhhdCBpcyBtYXRjaGVkIHRvIHRoYXQgaW5pdGlhbFxuICogY29sbGVjdGlvbi4gVGhlIHJlZHVjZXIgb2JqZWN0IG11c3QgaW1wbGVtZW50IHRoZSBgc3RlcGAgYW5kIGByZXN1bHRgXG4gKiBwcm90b2NvbHMsIHdoaWNoIGluc3RydWN0IGByZWR1Y2VgIG9uIGhvdyB0byBidWlsZCB1cCB0aGUgY29sbGVjdGlvbi4gVGhlXG4gKiByZWR1Y2VyIG1heSBpbXBsZW1lbnQgYSB0cmFuc2Zvcm1hdGlvbiBhcyB3ZWxsLCBidXQgYWxsIHRoYXQncyBpbXBvcnRhbnQgaGVyZVxuICogaXMgdGhhdCBpdCBjYW4gZG8gdGhlIHJlZHVjdGlvbi5cbiAqXG4gKiBUaGUgaW5wdXQgY29sbGVjdGlvbiBuZWVkIG9ubHkgaW1wbGVtZW50IGBpdGVyYWJsZWAuIEl0IGlzIG5vdCBuZWNlc3NhcnkgZm9yXG4gKiB0aGUgaW5wdXQgYW5kIG91dHB1dCBjb2xsZWN0aW9ucyB0byBiZSBvZiB0aGUgc2FtZSB0eXBlOyBhcyBsb25nIGFzIHRoZSBpbnB1dFxuICogaW1wbGVtZW50cyBgaXRlcmFibGVgIGFuZCB0aGUgcmVkdWNlciBpbXBsZW1lbnRzIGBzdGVwYCBhbmQgYHJlc3VsdGBcbiAqIGFwcHJvcHJpYXRlIHRvIHRoZSB0eXBlIG9mIHRoZSBgaW5pdGAgY29sbGVjdGlvbiwgdGhlbiBhbnkgdHJhbnNsYXRpb25cbiAqIGJldHdlZW4gY29sbGVjdGlvbiB0eXBlcyBjYW4gb2NjdXIuXG4gKlxuICogVGhlIG5vcm1hbCBjb3Vyc2Ugb2Ygb3BlcmF0aW9uIHdpbGwgYmUgdG8gY2FsbFxuICoge0BsaW5rIG1vZHVsZTp4ZHVjZS50cmFuc2R1Y2V8dHJhbnNkdWNlfSBpbnN0ZWFkLCBhcyB0aGF0IGZ1bmN0aW9uIG1ha2VzIGl0XG4gKiBlYXN5IHRvIGNvbWJpbmUgdHJhbnNmb3JtYXRpb25zIHdpdGggcmVkdWN0aW9ucyBhbmQgY2FuIG9wdGlvbmFsbHkgZmlndXJlIG91dFxuICogdGhlIGluaXRpYWwgY29sbGVjdGlvbiBpdHNlbGYuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZGNvcmVcbiAqIEBwYXJhbSB7Kn0gY29sbGVjdGlvbiBUaGUgaW5wdXQgY29sbGVjdGlvbi4gVGhlIG9ubHkgcmVxdWlyZW1lbnQgb2YgdGhpc1xuICogICAgIGNvbGxlY3Rpb24gaXMgdGhhdCBpdCBpbXBsZW1lbnQgdGhlIGBpdGVyYWJsZWAgcHJvdG9jb2wuIFNwZWNpYWwgc3VwcG9ydFxuICogICAgIGlzIHByb3ZpZGVkIGJ5IHRoZSBsaWJyYXJ5IGZvciBvYmplY3RzLCBzbyB0aGV5IGNhbiBiZSB1c2VkIGFzIHdlbGwuXG4gKiBAcGFyYW0ge21vZHVsZTp4ZGNvcmUuUmVkdWNlck9iamVjdH0gcmVkdWNlciBBbiBvYmplY3QgdGhhdCBpbXBsZW1lbnRzIHRoZVxuICogICAgIGBzdGVwYCBhbmQgYHJlc3VsdGAgcHJvdG9jb2xzLiBUaGlzIG9iamVjdCBtdXN0IGtub3cgaG93IHRvIHByb2R1Y2UgYW5cbiAqICAgICBvdXRwdXQgY29sbGVjdGlvbiB0aHJvdWdoIHRob3NlIHByb3RvY29sIGZ1bmN0aW9ucy5cbiAqIEBwYXJhbSB7Kn0gaW5pdCBhIGNvbGxlY3Rpb24gb2YgdGhlIHNhbWUgdHlwZSBhcyB0aGUgb3V0cHV0IGNvbGxlY3Rpb24uIEl0XG4gKiAgICAgbmVlZCBub3QgYmUgZW1wdHk7IGlmIGl0IGlzIG5vdCwgdGhlIGV4aXN0aW5nIGVsZW1lbnRzIGFyZSByZXRhaW5lZCBhc1xuICogICAgIHRoZSBpbnB1dCBjb2xsZWN0aW9uIGlzIHJlZHVjZWQgaW50byBpdC5cbiAqIEByZXR1cm4geyp9IEEgbmV3IGNvbGxlY3Rpb24sIGNvbnNpc3Rpbmcgb2YgdGhlIGBpbml0YCBjb2xsZWN0aW9uIHdpdGggYWxsIG9mXG4gKiAgICAgdGhlIGVsZW1lbnRzIG9mIHRoZSBgY29sbGVjdGlvbmAgY29sbGVjdGlvbiByZWR1Y2VkIGludG8gaXQuXG4gKi9cbmZ1bmN0aW9uIHJlZHVjZShjb2xsZWN0aW9uLCByZWR1Y2VyLCBpbml0KSB7XG4gIGlmIChjb2xsZWN0aW9uID09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IGl0ZXIgPSBpdGVyYXRvcihjb2xsZWN0aW9uKTtcbiAgaWYgKCFpdGVyKSB7XG4gICAgdGhyb3cgRXJyb3IoYENhbm5vdCByZWR1Y2UgYW4gaW5zdGFuY2Ugb2YgJHtjb2xsZWN0aW9uLmNvbnN0cnVjdG9yLm5hbWV9YCk7XG4gIH1cblxuICBsZXQgYWNjID0gaW5pdDtcbiAgbGV0IHN0ZXAgPSBpdGVyLm5leHQoKTtcblxuICB3aGlsZSAoIXN0ZXAuZG9uZSkge1xuICAgIGFjYyA9IHJlZHVjZXJbcC5zdGVwXShhY2MsIHN0ZXAudmFsdWUpO1xuICAgIGlmIChpc0NvbXBsZXRlZChhY2MpKSB7XG4gICAgICBhY2MgPSB1bmNvbXBsZXRlKGFjYyk7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgc3RlcCA9IGl0ZXIubmV4dCgpO1xuICB9XG5cbiAgcmV0dXJuIHJlZHVjZXJbcC5maW5hbF0oYWNjKTtcbn1cblxuZXhwb3J0IHtcbiAgaW5pdCxcbiAgc3RlcCxcbiAgZmluYWwsXG4gIHRvUmVkdWNlcixcbiAgQVJSQVlfUkVEVUNFUixcbiAgT0JKRUNUX1JFRFVDRVIsXG4gIFNUUklOR19SRURVQ0VSLFxuICB0b1RyYW5zZHVjZXIsXG4gIHRvRnVuY3Rpb24sXG4gIGNvbXBsZXRlLFxuICB1bmNvbXBsZXRlLFxuICBpc0NvbXBsZXRlZCxcbiAgZW5zdXJlQ29tcGxldGVkLFxuICBlbnN1cmVVbmNvbXBsZXRlZCxcbiAgcmVkdWNlXG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG5cbi8qKlxuICogQSBidW5jaCBvZiB1dGlsaXR5IGZ1bmN0aW9ucy4gVGhlc2UgYXJlIGFsbCB1c2VkIGJ5IHRoZSBsaWJyYXJ5IGl0c2VsZiBpblxuICogcGxhY2VzLCBidXQgbWFueSBvZiB0aGVtIGFyZSBzdWl0YWJsZSBmb3IgZ2VuZXJhbCB1c2UgYXMgd2VsbC5cbiAqIF5cbiAqIEBtb2R1bGUgeGRjb3JlL3V0aWxzXG4gKiBAcHJpdmF0ZVxuICovXG5cbi8qKlxuICogYE9iamVjdGAncyBgdG9TdHJpbmdgIGlzIGV4cGxpY2l0bHkgdXNlZCB0aHJvdWdob3V0IGJlY2F1c2UgaXQgY291bGQgYmVcbiAqIHJlZGVmaW5lZCBpbiBhbnkgc3VidHlwZSBvZiBgT2JqZWN0YC5cbiAqXG4gKiBAZnVuY3Rpb24gdG9TdHJpbmdcbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgYSB2YWx1ZSBpcyBhIGZ1bmN0aW9uLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGRjb3JlXG4gKiBAcGFyYW0geyp9IHggVGhlIHZhbHVlIGJlaW5nIHRlc3RlZCB0byBzZWUgaWYgaXQgaXMgYSBmdW5jdGlvbi5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IEVpdGhlciBgdHJ1ZWAgaWYgdGhlIHRlc3QgdmFsdWUgaXMgYSBmdW5jdGlvbiBvciBgZmFsc2VgIGlmXG4gKiAgICAgaXQgaXMgbm90LlxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHgpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoeCkgPT09IFwiW29iamVjdCBGdW5jdGlvbl1cIjtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgYSB2YWx1ZSBpcyBhIGdlbmVyYXRvciBmdW5jdGlvbi5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkY29yZVxuICogQHBhcmFtIHsqfSB4IFRoZSB2YWx1ZSBiZWluZyB0ZXN0ZWQgdG8gc2VlIGlmIGl0IGlzIGEgZ2VuZXJhdG9yIGZ1bmN0aW9uLlxuICogQHJldHVybiB7Ym9vbGVhbn0gRWl0aGVyIGB0cnVlYCBpZiB0aGUgdGVzdCB2YWx1ZSBpcyBhIGdlbmVyYXRvciBmdW5jdGlvbiBvclxuICogICAgIGBmYWxzZWAgaWYgaXQgaXMgbm90LlxuICovXG5mdW5jdGlvbiBpc0dlbmVyYXRvckZ1bmN0aW9uKHgpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoeCkgPT09IFwiW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl1cIjtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgYSB2YWx1ZSBpcyBhIHBsYWluIG9iamVjdC5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgYGZhbHNlYCBpZiB0aGUgdmFsdWUgaXMgYW55IG90aGVyIHNvcnQgb2YgYnVpbHQtaW5cbiAqIG9iamVjdCAoc3VjaCBhcyBhbiBhcnJheSBvciBhIHN0cmluZykuIEl0IGFsc28gcmV0dXJucyBgZmFsc2VgIGZvciBhbnkgb2JqZWN0XG4gKiB0aGF0IGlzIGNyZWF0ZWQgYnkgYSBjb25zdHJ1Y3RvciB0aGF0IGlzIG5vdCBgT2JqZWN0YCdzIGNvbnN0cnVjdG9yLCBtZWFuaW5nXG4gKiB0aGF0IFwiaW5zdGFuY2VzXCIgb2YgY3VzdG9tIFwiY2xhc3Nlc1wiIHdpbGwgcmV0dXJuIGBmYWxzZWAuIFRoZXJlZm9yZSBpdCdzIG9ubHlcbiAqIGdvaW5nIHRvIHJldHVybiBgdHJ1ZWAgZm9yIGxpdGVyYWwgb2JqZWN0cyBvciB0aG9zZSBjcmVhdGVkIHdpdGhcbiAqIGBPYmplY3QuY3JlYXRlKClgLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGRjb3JlXG4gKiBAcGFyYW0geyp9IHggVGhlIHZhbHVlIGJlaW5nIHRlc3RlZCB0byBzZWUgaWYgaXQgaXMgYSBwbGFpbiBvYmplY3QuXG4gKiBAcmV0dXJuIHtib29sZWFufSBFaXRoZXIgYHRydWVgIGlmIHRoZSB0ZXN0IHZhbHVlIGlzIGEgcGxhaW4gb2JqZWN0IG9yXG4gKiAgICAgYGZhbHNlYCBpZiBpdCBpcyBub3QuXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHgpIHtcbiAgLy8gVGhpcyBjaGVjayBleGNsdWRlcyBidWlsdC1pbiBub24tT2JqZWN0IG9iamVjdHMgKHN1Y2ggYXMgQXJyYXkgYW5kIFN0cmluZykuXG4gIC8vIEl0IGFsc28gZXhjbHVkZXMgb2JqZWN0cyBjcmVhdGVkIGZyb20gRVMyMDE1IGNsYXNzZXMsIGJ1dCBpdCBkb2VzIG5vdFxuICAvLyBleGNsdWRlIG9iamVjdHMgY3JlYXRlZCB3aXRoIGBuZXdgIG9uIGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyAodGhhdCBoYXBwZW5zXG4gIC8vIGJlbG93KS5cbiAgaWYgKHRvU3RyaW5nLmNhbGwoeCkgIT09IFwiW29iamVjdCBPYmplY3RdXCIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBQcm90b3R5cGUtbGVzcyBvYmplY3RzIChjcmVhdGVkIHdpdGggYE9iamVjdC5jcmVhdGUobnVsbCkpYCBwYXNzXG4gIGNvbnN0IHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHgpO1xuICBpZiAocHJvdG8gPT09IG51bGwpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8vIENoZWNrIHRvIHNlZSB3aGV0aGVyIHRoZSBjb25zdHJ1Y3RvciBvZiB0aGUgdGVzdGVkIG9iamVjdCBpcyB0aGUgT2JqZWN0XG4gIC8vIGNvbnN0cnVjdG9yLiBUaGlzIGlzIHRoZSBvbmx5IGNvbnN0cnVjdG9yIHRoYXQgcHJvZHVjZXMgYSBcInBsYWluXCIgb2JqZWN0LlxuICBjb25zdCBjdG9yID1cbiAgICBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocHJvdG8sIFwiY29uc3RydWN0b3JcIikgJiZcbiAgICBwcm90by5jb25zdHJ1Y3RvcjtcbiAgcmV0dXJuIHR5cGVvZiBjdG9yID09PSBcImZ1bmN0aW9uXCIgJiYgY3RvciA9PT0gT2JqZWN0O1xufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhIHZhbHVlIGlzIGEgY29uY3JldGUgbnVtYmVyLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gd2lsbCByZXR1cm4gYHRydWVgIGZvciBhbnkgbnVtYmVyIGxpdGVyYWwgb3IgaW5zdGFuY2Ugb2ZcbiAqIGBOdW1iZXJgIGV4Y2VwdCBmb3IgYEluZmluaXR5YCBvciBgTmFOYC4gSXQgd2lsbCByZXR1cm4gYGZhbHNlYCBmb3Igc3RyaW5nc1xuICogdGhhdCBoYXBwZW4gdG8gYWxzbyBiZSBudW1iZXJzOyB0aGUgdmFsdWUgbXVzdCBiZSBhbiBhY3R1YWwgYE51bWJlcmAgaW5zdGFuY2VcbiAqIG9yIG51bWJlciBsaXRlcmFsIHRvIHJldHVybiBgdHJ1ZWAuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZGNvcmVcbiAqIEBwYXJhbSB7Kn0geCBUaGUgdmFsdWUgYmVpbmcgdGVzdGVkIHRvIHNlZSBpZiBpdCBpcyBhIG51bWJlci5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IEVpdGhlciBgdHJ1ZWAgaWYgdGhlIHRlc3QgdmFsdWUgaXMgYSBmaW5pdGUgbnVtYmVyIChub3RcbiAqICAgICBpbmNsdWRpbmcgc3RyaW5nIHJlcHJlc2VudGF0aW9ucyBvZiBudW1iZXJzKSBvciBgZmFsc2VgIGlmIGl0IGlzIG5vdC5cbiAqL1xuZnVuY3Rpb24gaXNOdW1iZXIoeCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh4KSA9PT0gXCJbb2JqZWN0IE51bWJlcl1cIiAmJiBpc0Zpbml0ZSh4KTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgYSB2YWx1ZSBpcyBhIHN0cmluZy5cbiAqXG4gKiBMaXRlcmFsIHN0cmluZ3Mgd2lsbCByZXR1cm4gYHRydWVgLCBhcyB3aWxsIGluc3RhbmNlcyBvZiB0aGUgYFN0cmluZ2Agb2JqZWN0LlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGRjb3JlXG4gKiBAcGFyYW0geyp9IHggVGhlIHZhbHVlIGJlaW5nIHRlc3RlZCB0byBzZWUgaWYgaXQgaXMgYSBzdHJpbmcuXG4gKiBAcmV0dXJuIHtib29sZWFufSBFaXRoZXIgYHRydWVgIGlmIHRoZSB0ZXN0IHZhbHVlIGlzIGEgc3RyaW5nIG9yIGBmYWxzZWAgaWZcbiAqICAgIGl0IGlzIG5vdC5cbiAqL1xuZnVuY3Rpb24gaXNTdHJpbmcoeCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh4KSA9PT0gXCJbb2JqZWN0IFN0cmluZ11cIjtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgYSB2YWx1ZSBpcyBhbiBhcnJheS5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIG1lcmVseSBkZWxlZ2F0ZXMgdG8gYEFycmF5LmlzQXJyYXlgLiBJdCBpcyBwcm92aWRlZCBmb3JcbiAqIGNvbnNpc3RlbmN5IGluIGNhbGxpbmcgc3R5bGUgb25seS5cbiAqXG4gKiBAZnVuY3Rpb24gaXNBcnJheVxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZGNvcmVcbiAqIEBwYXJhbSB7Kn0geCBUaGUgdmFsdWUgYmVpbmcgdGVzdGVkIHRvIHNlZSBpZiBpdCBpcyBhbiBhcnJheS5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IEVpdGhlciBgdHJ1ZWAgaWYgdGhlIHRlc3QgdmFsdWUgaXMgYW4gYXJyYXkgb3IgYGZhbHNlYCBpZlxuICogICAgIGl0IGlzIG5vdC5cbiAqL1xuY29uc3QgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5cbmV4cG9ydCB7XG4gIGlzRnVuY3Rpb24sXG4gIGlzR2VuZXJhdG9yRnVuY3Rpb24sXG4gIGlzT2JqZWN0LFxuICBpc051bWJlcixcbiAgaXNTdHJpbmcsXG4gIGlzQXJyYXlcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuLyoqXG4gKiBAbW9kdWxlIHhkdWNlXG4gKi9cblxuZXhwb3J0IHsga3YsIGtleSwgdmFsdWUsIGNvbXBsZW1lbnQgfSBmcm9tIFwibW9kdWxlcy91dGlsc1wiO1xuZXhwb3J0IHtcbiAgdHJhbnNkdWNlLFxuICBzZXF1ZW5jZSxcbiAgaW50byxcbiAgYXNBcnJheSxcbiAgYXNPYmplY3QsXG4gIGFzU3RyaW5nLFxuICBhc0l0ZXJhdG9yLFxuICBjb21wb3NlLFxuICB0b1JlZHVjZXIsXG4gIHRvRnVuY3Rpb25cbn0gZnJvbSBcIm1vZHVsZXMvdHJhbnNkdWN0aW9uXCI7XG5leHBvcnQgeyBpZGVudGl0eSwgZmxhdHRlbiwgcmVwZWF0IH0gZnJvbSBcIm1vZHVsZXMvYmFzaWNcIjtcbmV4cG9ydCB7IGNodW5rLCBjaHVua0J5IH0gZnJvbSBcIm1vZHVsZXMvY2h1bmtcIjtcbmV4cG9ydCB7IGRpc3RpbmN0LCBkaXN0aW5jdEJ5LCBkaXN0aW5jdFdpdGggfSBmcm9tIFwibW9kdWxlcy9kaXN0aW5jdFwiO1xuZXhwb3J0IHsgZHJvcCwgZHJvcFdoaWxlIH0gZnJvbSBcIm1vZHVsZXMvZHJvcFwiO1xuZXhwb3J0IHsgZmlsdGVyLCByZWplY3QgfSBmcm9tIFwibW9kdWxlcy9maWx0ZXJcIjtcbmV4cG9ydCB7IG1hcCwgZmxhdE1hcCB9IGZyb20gXCJtb2R1bGVzL21hcFwiO1xuZXhwb3J0IHsgdGFrZSwgdGFrZVdoaWxlLCB0YWtlTnRoIH0gZnJvbSBcIm1vZHVsZXMvdGFrZVwiO1xuZXhwb3J0IHsgdW5pcXVlLCB1bmlxdWVCeSwgdW5pcXVlV2l0aCB9IGZyb20gXCJtb2R1bGVzL3VuaXF1ZVwiO1xuXG4vKipcbiAqXG4gKlxuICogQGNhbGxiYWNrXG4gKi9cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG5pbXBvcnQge1xuICBwcm90b2NvbHMgYXMgcCxcbiAgaXNDb21wbGV0ZWQsXG4gIGNvbXBsZXRlLFxuICBpc0l0ZXJhYmxlLFxuICByZWR1Y2UsXG4gIHRvVHJhbnNkdWNlclxufSBmcm9tIFwiQGNoYW5rby94ZGNvcmVcIjtcblxuaW1wb3J0IHsgcGFyc2VOdW1iZXJBcmdzIH0gZnJvbSBcIm1vZHVsZXMvdXRpbHNcIjtcbmltcG9ydCB7IHNlcXVlbmNlIH0gZnJvbSBcIm1vZHVsZXMvdHJhbnNkdWN0aW9uXCI7XG5cbi8qKlxuICogUmV0dXJucyBleGFjdGx5IHRoZSBzYW1lIGNvbGxlY3Rpb24gc2VudCB0byBpdC5cbiAqXG4gKiBUaGlzIGlzIGdlbmVyYWxseSBhIGZ1bmN0aW9uIHVzZWQgd2hlbiBhIHRyYW5zZHVjZXIgZnVuY3Rpb24gaXMgcmVxdWlyZWQgYnV0XG4gKiB0aGVyZSBpcyBubyBkZXNpcmUgdG8gZG8gYW4gYWN0dWFsIHRyYW5zZm9ybWF0aW9uLiBUaGUgXCJ0cmFuc2Zvcm1hdGlvblwiXG4gKiBpbXBsZW1lbnRlZCBoZXJlIGlzIHRvIHBhc3MgZWFjaCBlbGVtZW50IHRocm91Z2ggZXhhY3RseSBhcyBpdCBpcy5cbiAqXG4gKiBJZiBubyBjb2xsZWN0aW9uIGlzIHByb3ZpZGVkLCBhIGZ1bmN0aW9uIGlzIHJldHVybmVkIHRoYXQgY2FuIGJlIHBhc3NlZCB0b1xuICogYHtAbGluayBtb2R1bGU6eGR1Y2Uuc2VxdWVuY2V8c2VxdWVuY2V9YCwgZXQgYWwuXG4gKlxuICogYGBgXG4gKiBjb25zdCByZXN1bHQgPSBpZGVudGl0eShbMSwgMiwgMywgNCwgNV0pO1xuICogY29uc29sZS5sb2cocmVzdWx0KTsgICAvLyAtPiBbMSwgMiwgMywgNCwgNV1cbiAqIGBgYFxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwYXJhbSB7bW9kdWxlOnhkdWNlLkNvbGxlY3Rpb259IFtjb2xsZWN0aW9uXSBBbiBvcHRpb25hbCBpbnB1dCBjb2xsZWN0aW9uXG4gKiAgICAgdGhhdCBpcyB0byBiZSB0cmFuc2R1Y2VkLlxuICogQHJldHVybiB7KG1vZHVsZTp4ZHVjZS5Db2xsZWN0aW9ufG1vZHVsZTp4ZHVjZS5UcmFuc2R1Y2VyRnVuY3Rpb24pfSBJZiBhXG4gKiAgICAgY29sbGVjdGlvbiBpcyBzdXBwbGllZCwgdGhlbiB0aGUgZnVuY3Rpb24gcmV0dXJucyBhIG5ldyBjb2xsZWN0aW9uIG9mIHRoZVxuICogICAgIHNhbWUgdHlwZSB3aXRoIGFsbCBvZiB0aGUgZWxlbWVudHMgb2YgdGhlIGlucHV0IGNvbGxlY3Rpb24gdW50b3VjaGVkLiBJZlxuICogICAgIG5vIGNvbGxlY3Rpb24gaXMgc3VwcGxpZWQsIGEgdHJhbnNkdWNlciBmdW5jdGlvbiwgc3VpdGFibGUgZm9yIHBhc3NpbmcgdG9cbiAqICAgICBge0BsaW5rIG1vZHVsZTp4ZHVjZS5zZXF1ZW5jZXxzZXF1ZW5jZX1gLFxuICogICAgIGB7QGxpbmsgbW9kdWxlOnhkdWNlLmludG98aW50b31gLCBldGMuIGlzIHJldHVybmVkLlxuICovXG5mdW5jdGlvbiBpZGVudGl0eShjb2xsZWN0aW9uKSB7XG4gIHJldHVybiBjb2xsZWN0aW9uXG4gICAgPyBzZXF1ZW5jZShjb2xsZWN0aW9uLCBpZGVudGl0eSgpKVxuICAgIDogeGZvcm0gPT4gdG9UcmFuc2R1Y2VyKChhY2MsIHZhbHVlKSA9PiB4Zm9ybVtwLnN0ZXBdKGFjYywgdmFsdWUpLCB4Zm9ybSk7XG59XG5cbi8qKlxuICogRmxhdHRlbnMgYSBjb2xsZWN0aW9uIGJ5IG1lcmdpbmcgZWxlbWVudHMgaW4gYW55IHN1Yi1jb2xsZWN0aW9uIGludG8gdGhlIG1haW5cbiAqIGNvbGxlY3Rpb24uXG4gKlxuICogRWxlbWVudHMgb2YgdGhlIG1haW4gY29sbGVjdGlvbiB0aGF0IGFyZSBub3QgY29sbGVjdGlvbnMgdGhlbXNlbHZlcyBhcmUgbm90XG4gKiBjaGFuZ2VkLiBJdCdzIGZpbmUgdG8gaGF2ZSBhIGNvbWJpbmF0aW9uIG9mIHRoZSB0d28sIHNvbWUgZWxlbWVudHMgdGhhdCBhcmVcbiAqIGNvbGxlY3Rpb25zIGFuZCBzb21lIHRoYXQgYXJlIG5vdC4gSWYgYW4gZWxlbWVudCBpcyBhIGNvbGxlY3Rpb24gdGhhdFxuICogY29udGFpbnMgb3RoZXIgY29sbGVjdGlvbnMsIHRob3NlIGNvbGxlY3Rpb25zIHdpbGwgKm5vdCogYmUgZmxhdHRlbmVkOyB0aGVcbiAqIGZsYXR0ZW5pbmcgb25seSBoYXBwZW5zIHRvIG9uZSBsZXZlbC5cbiAqXG4gKiBTaW5jZSB0aGVyZSBhcmVuJ3Qgc3ViLWNvbGxlY3Rpb25zIGluIG9iamVjdHMsIHN0cmluZ3MsIG9yIGl0ZXJhdG9ycyxcbiAqIGBmbGF0dGVuYCBkb2Vzbid0IG1ha2Ugc2Vuc2Ugd2l0aCB0aG9zZSB0eXBlcyBvZiBjb2xsZWN0aW9ucy5cbiAqXG4gKiBJZiBubyBjb2xsZWN0aW9uIGlzIHByb3ZpZGVkLCBhIGZ1bmN0aW9uIGlzIHJldHVybmVkIHRoYXQgY2FuIGJlIHBhc3NlZCB0b1xuICogYHtAbGluayBtb2R1bGU6eGR1Y2Uuc2VxdWVuY2V8c2VxdWVuY2V9YCwgZXQgYWwuXG4gKlxuICogYGBgXG4gKiBjb25zdCByZXN1bHQgPSBmbGF0dGVuKFtbMSwgMl0sIFszLCA0LCA1XSwgNiwgWzddXSk7XG4gKiBjb25zb2xlLmxvZyhyZXVzbHQpOyAgIC8vIC0+IFsxLCAyLCAzLCA0LCA1LCA2LCA3XVxuICpcbiAqIGNvbnN0IHJlc3VsdCA9IGZsYXR0ZW4oW1sxLCAyXSwgWzMsIFs0LCA1XV0sIDYsIFs3XV0pO1xuICogY29uc29sZS5sb2cocmV1c2x0KTsgICAvLyAtPiBbMSwgMiwgMywgWzQsIDVdLCA2LCA3XVxuICogYGBgXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZS50cmFuc2R1Y2Vyc1xuICogQHBhcmFtIHttb2R1bGU6eGR1Y2UuQ29sbGVjdGlvbn0gW2NvbGxlY3Rpb25dIEFuIG9wdGlvbmFsIGlucHV0IGNvbGxlY3Rpb25cbiAqICAgICB0aGF0IGlzIHRvIGJlIHRyYW5zZHVjZWQuXG4gKiBAcmV0dXJuIHsobW9kdWxlOnhkdWNlLkNvbGxlY3Rpb258bW9kdWxlOnhkdWNlLlRyYW5zZHVjZXJGdW5jdGlvbil9IElmIGFcbiAqICAgICBjb2xsZWN0aW9uIGlzIHN1cHBsaWVkLCB0aGVuIHRoZSBmdW5jdGlvbiByZXR1cm5zIGEgbmV3IGNvbGxlY3Rpb24gb2YgdGhlXG4gKiAgICAgc2FtZSB0eXBlIHdpdGggYWxsIG9mIHRoZSBlbGVtZW50cyBvZiB0aGUgaW5wdXQgY29sbGVjdGlvbiBmbGF0dGVuZWQuIElmXG4gKiAgICAgbm8gY29sbGVjdGlvbiBpcyBzdXBwbGllZCwgYSB0cmFuc2R1Y2VyIGZ1bmN0aW9uLCBzdWl0YWJsZSBmb3IgcGFzc2luZyB0b1xuICogICAgIGB7QGxpbmsgbW9kdWxlOnhkdWNlLnNlcXVlbmNlfHNlcXVlbmNlfWAsXG4gKiAgICAgYHtAbGluayBtb2R1bGU6eGR1Y2UuaW50b3xpbnRvfWAsIGV0Yy4gaXMgcmV0dXJuZWQuXG4gKi9cbmZ1bmN0aW9uIGZsYXR0ZW4oY29sbGVjdGlvbikge1xuICByZXR1cm4gY29sbGVjdGlvblxuICAgID8gc2VxdWVuY2UoY29sbGVjdGlvbiwgZmxhdHRlbigpKVxuICAgIDogeGZvcm0gPT5cbiAgICAgICAgdG9UcmFuc2R1Y2VyKChhY2MsIHZhbHVlKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3ViWGZvcm0gPSB0b1RyYW5zZHVjZXIoKGFjYywgdmFsdWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHYgPSB4Zm9ybVtwLnN0ZXBdKGFjYywgdmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuIGlzQ29tcGxldGVkKHYpID8gY29tcGxldGUodikgOiB2O1xuICAgICAgICAgIH0sIHhmb3JtKTtcblxuICAgICAgICAgIHJldHVybiBpc0l0ZXJhYmxlKHZhbHVlKVxuICAgICAgICAgICAgPyByZWR1Y2UodmFsdWUsIHN1Ylhmb3JtLCBhY2MpXG4gICAgICAgICAgICA6IHN1Ylhmb3JtW3Auc3RlcF0oYWNjLCB2YWx1ZSk7XG4gICAgICAgIH0sIHhmb3JtKTtcbn1cblxuLyoqXG4gKiBSZXBlYXRzIGVhY2ggZWxlbWVudCBmcm9tIHRoZSBpbnB1dCBjb2xsZWN0aW9uIGBuYCB0aW1lcyBpbiB0aGUgb3V0cHV0XG4gKiBjb2xsZWN0aW9uLlxuICpcbiAqIFRoZXNlIGVsZW1lbnRzIGFyZSBwdXQgaW50byB0aGUgbWFpbiBvdXRwdXQgY29sbGVjdGlvbiwgbm90IGludG9cbiAqIHN1YmNvbGxlY3Rpb25zLiBJbiBvdGhlciB3b3JkcywgZWFjaCBpbnB1dCBlbGVtZW50IGNyZWF0ZXMgYG5gIG91dHB1dFxuICogZWxlbWVudHMuXG4gKlxuICogSWYgbm8gY29sbGVjdGlvbiBpcyBwcm92aWRlZCwgYSBmdW5jdGlvbiBpcyByZXR1cm5lZCB0aGF0IGNhbiBiZSBwYXNzZWQgdG9cbiAqIGB7QGxpbmsgbW9kdWxlOnhkdWNlLnNlcXVlbmNlfHNlcXVlbmNlfWAsIGV0IGFsLlxuICpcbiAqIGBgYFxuICogY29uc3QgcmVzdWx0ID0gcmVwZWF0KFsxLCAyLCAzLCA0LCA1XSwgMyk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQpOyAgIC8vIC0+IFsxLCAxLCAxLCAyLCAyLCAyLCAzLCAzLCAzLCA0LCA0LCA0LCA1LCA1LCA1XVxuICogYGBgXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHBhcmFtIHttb2R1bGU6eGR1Y2UuQ29sbGVjdGlvbn0gW2NvbGxlY3Rpb25dIEFuIG9wdGlvbmFsIGlucHV0IGNvbGxlY3Rpb25cbiAqICAgICB0aGF0IGlzIHRvIGJlIHRyYW5zZHVjZWQuXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgbnVtYmVyIG9mIHRpbWVzIHRoYXQgZWFjaCBlbGVtZW50IGZyb20gdGhlIGlucHV0XG4gKiAgICAgY29sbGVjdGlvbiBzaG91bGQgYmUgcmVwZWF0ZWQgaW4gdGhlIG91dHB1dCBjb2xsZWN0aW9uLlxuICogQHJldHVybiB7KG1vZHVsZTp4ZHVjZS5Db2xsZWN0aW9ufG1vZHVsZTp4ZHVjZS5UcmFuc2R1Y2VyRnVuY3Rpb24pfSBJZiBhXG4gKiAgICAgY29sbGVjdGlvbiBpcyBzdXBwbGllZCwgdGhlbiB0aGUgZnVuY3Rpb24gcmV0dXJucyBhIG5ldyBjb2xsZWN0aW9uIG9mIHRoZVxuICogICAgIHNhbWUgdHlwZSB3aXRoIGFsbCBvZiB0aGUgZWxlbWVudHMgb2YgdGhlIGlucHV0IGNvbGxlY3Rpb24gcmVwZWF0ZWQuIElmXG4gKiAgICAgbm8gY29sbGVjdGlvbiBpcyBzdXBwbGllZCwgYSB0cmFuc2R1Y2VyIGZ1bmN0aW9uLCBzdWl0YWJsZSBmb3IgcGFzc2luZyB0b1xuICogICAgIGB7QGxpbmsgbW9kdWxlOnhkdWNlLnNlcXVlbmNlfHNlcXVlbmNlfWAsXG4gKiAgICAgYHtAbGluayBtb2R1bGU6eGR1Y2UuaW50b3xpbnRvfWAsIGV0Yy4gaXMgcmV0dXJuZWQuXG4gKi9cbmZ1bmN0aW9uIHJlcGVhdChjb2xsZWN0aW9uLCBuKSB7XG4gIGNvbnN0IFtjb2wsIG51bV0gPSBwYXJzZU51bWJlckFyZ3MoY29sbGVjdGlvbiwgbik7XG4gIHJldHVybiBjb2xcbiAgICA/IHNlcXVlbmNlKGNvbCwgcmVwZWF0KG51bSkpXG4gICAgOiB4Zm9ybSA9PlxuICAgICAgICB0b1RyYW5zZHVjZXIoKGFjYywgdmFsdWUpID0+IHtcbiAgICAgICAgICBsZXQgcmVzdWx0ID0gYWNjO1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtOyBpKyspIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHhmb3JtW3Auc3RlcF0ocmVzdWx0LCB2YWx1ZSk7XG4gICAgICAgICAgICBpZiAoaXNDb21wbGV0ZWQocmVzdWx0KSkge1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSwgeGZvcm0pO1xufVxuXG5leHBvcnQgeyBpZGVudGl0eSwgZmxhdHRlbiwgcmVwZWF0IH07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuaW1wb3J0IHsgcHJvdG9jb2xzIGFzIHAsIGVuc3VyZVVuY29tcGxldGVkIH0gZnJvbSBcIkBjaGFua28veGRjb3JlXCI7XG5pbXBvcnQge1xuICBwYXJzZU51bWJlckFyZ3MsXG4gIHBhcnNlRnVuY3Rpb25BcmdzLFxuICBzYW1lVmFsdWVaZXJvXG59IGZyb20gXCJtb2R1bGVzL3V0aWxzXCI7XG5pbXBvcnQgeyBzZXF1ZW5jZSB9IGZyb20gXCJtb2R1bGVzL3RyYW5zZHVjdGlvblwiO1xuXG5jb25zdCBOT19WQUxVRSA9IFN5bWJvbChcIk5PX1ZBTFVFXCIpO1xuXG5mdW5jdGlvbiBjaHVuayhjb2xsZWN0aW9uLCBuKSB7XG4gIGNvbnN0IFtjb2wsIG51bV0gPSBwYXJzZU51bWJlckFyZ3MoY29sbGVjdGlvbiwgbik7XG4gIHJldHVybiBjb2xcbiAgICA/IHNlcXVlbmNlKGNvbCwgY2h1bmsobnVtKSlcbiAgICA6IHhmb3JtID0+IHtcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgbGV0IHBhcnQgPSBbXTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIFtwLmluaXRdKCkge1xuICAgICAgICAgICAgcmV0dXJuIHhmb3JtW3AuaW5pdF0oKTtcbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgW3Auc3RlcF0oYWNjLCB2YWx1ZSkge1xuICAgICAgICAgICAgcGFydFtjb3VudCsrXSA9IHZhbHVlO1xuICAgICAgICAgICAgaWYgKGNvdW50ID09PSBudW0pIHtcbiAgICAgICAgICAgICAgY29uc3Qgb3V0ID0gcGFydC5zbGljZSgwLCBudW0pO1xuICAgICAgICAgICAgICBwYXJ0ID0gW107XG4gICAgICAgICAgICAgIGNvdW50ID0gMDtcbiAgICAgICAgICAgICAgcmV0dXJuIHhmb3JtW3Auc3RlcF0oYWNjLCBvdXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgW3AuZmluYWxdKHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoY291bnQgPiAwKSB7XG4gICAgICAgICAgICAgIHJldHVybiBlbnN1cmVVbmNvbXBsZXRlZChcbiAgICAgICAgICAgICAgICB4Zm9ybVtwLnN0ZXBdKHZhbHVlLCBwYXJ0LnNsaWNlKDAsIGNvdW50KSlcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB4Zm9ybVtwLmZpbmFsXSh2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfTtcbn1cblxuZnVuY3Rpb24gY2h1bmtCeShjb2xsZWN0aW9uLCBmbikge1xuICBjb25zdCBbY29sLCBmdW5jXSA9IHBhcnNlRnVuY3Rpb25BcmdzKGNvbGxlY3Rpb24sIGZuKTtcbiAgcmV0dXJuIGNvbFxuICAgID8gc2VxdWVuY2UoY29sLCBjaHVua0J5KGZ1bmMpKVxuICAgIDogeGZvcm0gPT4ge1xuICAgICAgICBsZXQgcGFydCA9IFtdO1xuICAgICAgICBsZXQgbGFzdCA9IE5PX1ZBTFVFO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgW3AuaW5pdF0oKSB7XG4gICAgICAgICAgICByZXR1cm4geGZvcm1bcC5pbml0XSgpO1xuICAgICAgICAgIH0sXG5cbiAgICAgICAgICBbcC5zdGVwXShhY2MsIHZhbHVlKSB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50ID0gZnVuYyh2YWx1ZSk7XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gYWNjO1xuICAgICAgICAgICAgaWYgKGxhc3QgPT09IE5PX1ZBTFVFIHx8IHNhbWVWYWx1ZVplcm8oY3VycmVudCwgbGFzdCkpIHtcbiAgICAgICAgICAgICAgcGFydC5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlc3VsdCA9IHhmb3JtW3Auc3RlcF0ocmVzdWx0LCBwYXJ0KTtcbiAgICAgICAgICAgICAgcGFydCA9IFt2YWx1ZV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsYXN0ID0gY3VycmVudDtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgfSxcblxuICAgICAgICAgIFtwLmZpbmFsXSh2YWx1ZSkge1xuICAgICAgICAgICAgY29uc3QgY291bnQgPSBwYXJ0Lmxlbmd0aDtcbiAgICAgICAgICAgIGlmIChjb3VudCA+IDApIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGVuc3VyZVVuY29tcGxldGVkKFxuICAgICAgICAgICAgICAgIHhmb3JtW3Auc3RlcF0odmFsdWUsIHBhcnQuc2xpY2UoMCwgY291bnQpKVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHhmb3JtW3AuZmluYWxdKHZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9O1xufVxuXG5leHBvcnQgeyBjaHVuaywgY2h1bmtCeSB9O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG5cbmltcG9ydCB7IHByb3RvY29scyBhcyBwLCB0b1RyYW5zZHVjZXIgfSBmcm9tIFwiQGNoYW5rby94ZGNvcmVcIjtcbmltcG9ydCB7IHBhcnNlRnVuY3Rpb25BcmdzLCBzYW1lVmFsdWVaZXJvIH0gZnJvbSBcIm1vZHVsZXMvdXRpbHNcIjtcbmltcG9ydCB7IHNlcXVlbmNlIH0gZnJvbSBcIm1vZHVsZXMvdHJhbnNkdWN0aW9uXCI7XG5cbmNvbnN0IE5PX1ZBTFVFID0gU3ltYm9sKFwiTk9fVkFMVUVcIik7XG5cbmZ1bmN0aW9uIGRpc3RpbmN0V2l0aChjb2xsZWN0aW9uLCBmbikge1xuICBjb25zdCBbY29sLCBmdW5jXSA9IHBhcnNlRnVuY3Rpb25BcmdzKGNvbGxlY3Rpb24sIGZuKTtcbiAgcmV0dXJuIGNvbFxuICAgID8gc2VxdWVuY2UoY29sLCBkaXN0aW5jdFdpdGgoZnVuYykpXG4gICAgOiB4Zm9ybSA9PiB7XG4gICAgICAgIGxldCBsYXN0ID0gTk9fVkFMVUU7XG4gICAgICAgIHJldHVybiB0b1RyYW5zZHVjZXIoKGFjYywgdmFsdWUpID0+IHtcbiAgICAgICAgICBpZiAobGFzdCAhPT0gTk9fVkFMVUUgJiYgZnVuYyh2YWx1ZSwgbGFzdCkpIHtcbiAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxhc3QgPSB2YWx1ZTtcbiAgICAgICAgICByZXR1cm4geGZvcm1bcC5zdGVwXShhY2MsIHZhbHVlKTtcbiAgICAgICAgfSwgeGZvcm0pO1xuICAgICAgfTtcbn1cblxuZnVuY3Rpb24gZGlzdGluY3RCeShjb2xsZWN0aW9uLCBmbikge1xuICBjb25zdCBbY29sLCBmdW5jXSA9IHBhcnNlRnVuY3Rpb25BcmdzKGNvbGxlY3Rpb24sIGZuKTtcbiAgcmV0dXJuIGRpc3RpbmN0V2l0aChjb2wsIChhLCBiKSA9PiBzYW1lVmFsdWVaZXJvKGZ1bmMoYSksIGZ1bmMoYikpKTtcbn1cblxuZnVuY3Rpb24gZGlzdGluY3QoY29sbGVjdGlvbikge1xuICByZXR1cm4gZGlzdGluY3RXaXRoKGNvbGxlY3Rpb24sIHNhbWVWYWx1ZVplcm8pO1xufVxuXG5leHBvcnQgeyBkaXN0aW5jdCwgZGlzdGluY3RCeSwgZGlzdGluY3RXaXRoIH07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuaW1wb3J0IHsgcHJvdG9jb2xzIGFzIHAsIHRvVHJhbnNkdWNlciB9IGZyb20gXCJAY2hhbmtvL3hkY29yZVwiO1xuaW1wb3J0IHsgcGFyc2VOdW1iZXJBcmdzLCBwYXJzZUZ1bmN0aW9uQXJncyB9IGZyb20gXCJtb2R1bGVzL3V0aWxzXCI7XG5pbXBvcnQgeyBzZXF1ZW5jZSB9IGZyb20gXCJtb2R1bGVzL3RyYW5zZHVjdGlvblwiO1xuXG5mdW5jdGlvbiBkcm9wKGNvbGxlY3Rpb24sIG4pIHtcbiAgY29uc3QgW2NvbCwgbnVtXSA9IHBhcnNlTnVtYmVyQXJncyhjb2xsZWN0aW9uLCBuKTtcbiAgcmV0dXJuIGNvbFxuICAgID8gc2VxdWVuY2UoY29sLCBkcm9wKG51bSkpXG4gICAgOiB4Zm9ybSA9PiB7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgcmV0dXJuIHRvVHJhbnNkdWNlcihcbiAgICAgICAgICAoYWNjLCB2YWx1ZSkgPT4gKGkrKyA8IG51bSA/IGFjYyA6IHhmb3JtW3Auc3RlcF0oYWNjLCB2YWx1ZSkpLFxuICAgICAgICAgIHhmb3JtXG4gICAgICAgICk7XG4gICAgICB9O1xufVxuXG5mdW5jdGlvbiBkcm9wV2hpbGUoY29sbGVjdGlvbiwgZm4pIHtcbiAgY29uc3QgW2NvbCwgZnVuY10gPSBwYXJzZUZ1bmN0aW9uQXJncyhjb2xsZWN0aW9uLCBmbik7XG4gIHJldHVybiBjb2xcbiAgICA/IHNlcXVlbmNlKGNvbCwgZHJvcFdoaWxlKGZ1bmMpKVxuICAgIDogeGZvcm0gPT4ge1xuICAgICAgICBsZXQgZHJvcHBpbmcgPSB0cnVlO1xuICAgICAgICByZXR1cm4gdG9UcmFuc2R1Y2VyKChhY2MsIHZhbHVlKSA9PiB7XG4gICAgICAgICAgaWYgKGRyb3BwaW5nKSB7XG4gICAgICAgICAgICBpZiAoZnVuYyh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRyb3BwaW5nID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB4Zm9ybVtwLnN0ZXBdKGFjYywgdmFsdWUpO1xuICAgICAgICB9LCB4Zm9ybSk7XG4gICAgICB9O1xufVxuXG5leHBvcnQgeyBkcm9wLCBkcm9wV2hpbGUgfTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG5pbXBvcnQgeyBwcm90b2NvbHMgYXMgcCwgdG9UcmFuc2R1Y2VyIH0gZnJvbSBcIkBjaGFua28veGRjb3JlXCI7XG5pbXBvcnQgeyBwYXJzZUZ1bmN0aW9uQXJncywgY29tcGxlbWVudCB9IGZyb20gXCJtb2R1bGVzL3V0aWxzXCI7XG5pbXBvcnQgeyBzZXF1ZW5jZSB9IGZyb20gXCJtb2R1bGVzL3RyYW5zZHVjdGlvblwiO1xuXG5mdW5jdGlvbiBmaWx0ZXIoY29sbGVjdGlvbiwgZm4pIHtcbiAgY29uc3QgW2NvbCwgZnVuY10gPSBwYXJzZUZ1bmN0aW9uQXJncyhjb2xsZWN0aW9uLCBmbik7XG4gIHJldHVybiBjb2xcbiAgICA/IHNlcXVlbmNlKGNvbCwgZmlsdGVyKGZ1bmMpKVxuICAgIDogeGZvcm0gPT5cbiAgICAgICAgdG9UcmFuc2R1Y2VyKFxuICAgICAgICAgIChhY2MsIHZhbHVlKSA9PiAoZnVuYyh2YWx1ZSkgPyB4Zm9ybVtwLnN0ZXBdKGFjYywgdmFsdWUpIDogYWNjKSxcbiAgICAgICAgICB4Zm9ybVxuICAgICAgICApO1xufVxuXG5mdW5jdGlvbiByZWplY3QoY29sbGVjdGlvbiwgZm4pIHtcbiAgY29uc3QgW2NvbCwgZnVuY10gPSBwYXJzZUZ1bmN0aW9uQXJncyhjb2xsZWN0aW9uLCBmbik7XG4gIHJldHVybiBmaWx0ZXIoY29sLCBjb21wbGVtZW50KGZ1bmMpKTtcbn1cblxuZXhwb3J0IHsgZmlsdGVyLCByZWplY3QgfTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG5pbXBvcnQgeyBwcm90b2NvbHMgYXMgcCwgdG9UcmFuc2R1Y2VyIH0gZnJvbSBcIkBjaGFua28veGRjb3JlXCI7XG5pbXBvcnQgeyBwYXJzZUZ1bmN0aW9uQXJncyB9IGZyb20gXCJtb2R1bGVzL3V0aWxzXCI7XG5pbXBvcnQgeyBzZXF1ZW5jZSwgY29tcG9zZSB9IGZyb20gXCJtb2R1bGVzL3RyYW5zZHVjdGlvblwiO1xuaW1wb3J0IHsgZmxhdHRlbiB9IGZyb20gXCJtb2R1bGVzL2Jhc2ljXCI7XG5cbmZ1bmN0aW9uIG1hcChjb2xsZWN0aW9uLCBmbikge1xuICBjb25zdCBbY29sLCBmdW5jXSA9IHBhcnNlRnVuY3Rpb25BcmdzKGNvbGxlY3Rpb24sIGZuKTtcbiAgcmV0dXJuIGNvbFxuICAgID8gc2VxdWVuY2UoY29sLCBtYXAoZnVuYykpXG4gICAgOiB4Zm9ybSA9PlxuICAgICAgICB0b1RyYW5zZHVjZXIoKGFjYywgdmFsdWUpID0+IHhmb3JtW3Auc3RlcF0oYWNjLCBmdW5jKHZhbHVlKSksIHhmb3JtKTtcbn1cblxuZnVuY3Rpb24gZmxhdE1hcChjb2xsZWN0aW9uLCBmbikge1xuICBjb25zdCBbY29sLCBmdW5jXSA9IHBhcnNlRnVuY3Rpb25BcmdzKGNvbGxlY3Rpb24sIGZuKTtcbiAgcmV0dXJuIGNvbFxuICAgID8gc2VxdWVuY2UoY29sLCBjb21wb3NlKG1hcChmdW5jKSwgZmxhdHRlbigpKSlcbiAgICA6IGNvbXBvc2UobWFwKGZ1bmMpLCBmbGF0dGVuKCkpO1xufVxuXG5leHBvcnQgeyBtYXAsIGZsYXRNYXAgfTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG5pbXBvcnQgeyBwcm90b2NvbHMgYXMgcCwgdG9UcmFuc2R1Y2VyLCBlbnN1cmVDb21wbGV0ZWQgfSBmcm9tIFwiQGNoYW5rby94ZGNvcmVcIjtcbmltcG9ydCB7IHBhcnNlTnVtYmVyQXJncywgcGFyc2VGdW5jdGlvbkFyZ3MgfSBmcm9tIFwibW9kdWxlcy91dGlsc1wiO1xuaW1wb3J0IHsgc2VxdWVuY2UgfSBmcm9tIFwibW9kdWxlcy90cmFuc2R1Y3Rpb25cIjtcblxuZnVuY3Rpb24gdGFrZShjb2xsZWN0aW9uLCBuKSB7XG4gIGNvbnN0IFtjb2wsIG51bV0gPSBwYXJzZU51bWJlckFyZ3MoY29sbGVjdGlvbiwgbik7XG4gIHJldHVybiBjb2xcbiAgICA/IHNlcXVlbmNlKGNvbCwgdGFrZShudW0pKVxuICAgIDogeGZvcm0gPT4ge1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIHJldHVybiB0b1RyYW5zZHVjZXIoKGFjYywgdmFsdWUpID0+IHtcbiAgICAgICAgICBsZXQgcmVzdWx0ID0gYWNjO1xuXG4gICAgICAgICAgaWYgKGkgPCBudW0pIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHhmb3JtW3Auc3RlcF0oYWNjLCB2YWx1ZSk7XG4gICAgICAgICAgICBpZiAoaSA9PT0gbnVtIC0gMSkge1xuICAgICAgICAgICAgICByZXN1bHQgPSBlbnN1cmVDb21wbGV0ZWQocmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaSsrO1xuICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0sIHhmb3JtKTtcbiAgICAgIH07XG59XG5cbmZ1bmN0aW9uIHRha2VXaGlsZShjb2xsZWN0aW9uLCBmbikge1xuICBjb25zdCBbY29sLCBmdW5jXSA9IHBhcnNlRnVuY3Rpb25BcmdzKGNvbGxlY3Rpb24sIGZuKTtcbiAgcmV0dXJuIGNvbFxuICAgID8gc2VxdWVuY2UoY29sLCB0YWtlV2hpbGUoZnVuYykpXG4gICAgOiB4Zm9ybSA9PlxuICAgICAgICB0b1RyYW5zZHVjZXIoXG4gICAgICAgICAgKGFjYywgdmFsdWUpID0+XG4gICAgICAgICAgICBmdW5jKHZhbHVlKSA/IHhmb3JtW3Auc3RlcF0oYWNjLCB2YWx1ZSkgOiBlbnN1cmVDb21wbGV0ZWQoYWNjKSxcbiAgICAgICAgICB4Zm9ybVxuICAgICAgICApO1xufVxuXG5mdW5jdGlvbiB0YWtlTnRoKGNvbGxlY3Rpb24sIG4pIHtcbiAgY29uc3QgW2NvbCwgbnVtXSA9IHBhcnNlTnVtYmVyQXJncyhjb2xsZWN0aW9uLCBuKTtcbiAgcmV0dXJuIGNvbFxuICAgID8gc2VxdWVuY2UoY29sLCB0YWtlTnRoKG51bSkpXG4gICAgOiB4Zm9ybSA9PiB7XG4gICAgICAgIGxldCBpID0gLTE7XG4gICAgICAgIHJldHVybiB0b1RyYW5zZHVjZXIoXG4gICAgICAgICAgKGFjYywgdmFsdWUpID0+ICgrK2kgJSBudW0gPT09IDAgPyB4Zm9ybVtwLnN0ZXBdKGFjYywgdmFsdWUpIDogYWNjKSxcbiAgICAgICAgICB4Zm9ybVxuICAgICAgICApO1xuICAgICAgfTtcbn1cblxuZXhwb3J0IHsgdGFrZSwgdGFrZVdoaWxlLCB0YWtlTnRoIH07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuLyoqXG4gKiBGdW5jdGlvbnMgZGVhbGluZyB3aXRoIHRoZSBhY3R1YWwgdHJhbnNmb3JtYXRpb24gb2YgdmFsdWVzIGFuZCBmb3IgY2hvb3NpbmdcbiAqIHRoZSByZWR1Y2VyIGR1cmluZyB0cmFuc2R1Y3Rpb24uXG4gKlxuICogQG1vZHVsZSB4ZHVjZS90cmFuc2Zvcm1hdGlvblxuICogQHByaXZhdGVcbiAqL1xuXG5pbXBvcnQge1xuICBwcm90b2NvbHMgYXMgcCxcbiAgaXNJbXBsZW1lbnRlZCxcbiAgaXRlcmF0b3IsXG4gIGlzQ29tcGxldGVkLFxuICB0b1JlZHVjZXIsXG4gIHRvRnVuY3Rpb24sXG4gIHJlZHVjZSxcbiAgaXNGdW5jdGlvbixcbiAgaXNBcnJheSxcbiAgaXNPYmplY3QsXG4gIGlzU3RyaW5nXG59IGZyb20gXCJAY2hhbmtvL3hkY29yZVwiO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gaXRlcmF0b3IgdGhhdCBpcyBhbHNvIGEgdHJhbnNkdWNlciwgdHJhbnNmb3JtaW5nIGl0cyBjb2xsZWN0aW9uXG4gKiBvbmUgZWxlbWVudCBhdCBhIHRpbWUuIFRoaXMgaXMgdGhlIGFjdHVhbCBvdXRwdXQgb2YgdGhlXG4gKiB7QGxpbmsgbW9kdWxlOnhkdWNlLmFzSXRlcmF0b3J8YXNJdGVyYXRvcn0gZnVuY3Rpb24sIGFzIHdlbGwgYXMgdGhlIG91dHB1dCBvZlxuICogdGhlIHtAbGluayBtb2R1bGU6eGR1Y2Uuc2VxdWVuY2V8c2VxdWVuY2V9IGZ1bmN0aW9uIHdoZW4gdGhlIGlucHV0IGlzIGFuXG4gKiBpdGVyYXRvci5cbiAqXG4gKiBUaGUgZW5kIHVzZXIgbmVlZCBub3QgYmUgY29uY2VybmVkIHdpdGggdGhlIHR5cGUgb2YgdGhlIG91dHB1dCBpdGVyYXRvciBpblxuICogdGhlc2UgY2lyY3Vtc3RhbmNlczsgdGhlIGVuZCB1c2VyIG5lZWQgb25seSBjYXJlIHRoYXQgdGhlIG91dHB1dCBpcywgaW4gZmFjdCxcbiAqIGFuIGl0ZXJhdG9yIGFuZCBjYW4gYmUgZXhwZWN0ZWQgdG8gYWN0IGxpa2Ugb25lLiBGb3IgdGhpcyByZWFzb24sIHRoaXNcbiAqIGZ1bmN0aW9uIGFuZCB0aGUgdHlwZSBpdCByZXR1cm5zIGFyZSBub3QgZXhwb3J0ZWQuXG4gKlxuICogVGhpcyBvYmplY3Qgc3VwcG9ydHMgbm9uLTEtdG8tMSBjb3JyZXNwb25kZW5jZXMgYmV0d2VlbiBpbnB1dCBhbmQgb3V0cHV0XG4gKiB2YWx1ZXMuIEZvciBleGFtcGxlLCBhIGZpbHRlciB0cmFuc2Zvcm1hdGlvbiBtaWdodCByZXR1cm4gZmV3ZXIgb3V0cHV0XG4gKiBlbGVtZW50cyB0aGFuIHdlcmUgaW4gdGhlIGlucHV0IGNvbGxlY3Rpb24sIHdoaWxlIGEgcmVwZWF0IHRyYW5zZm9ybWF0aW9uXG4gKiB3aWxsIHJldHVybiBtb3JlLiBJbiBlaXRoZXIgY2FzZSwgYG5leHRgIGluIHRoaXMgY2xhc3Mgd2lsbCByZXR1cm4gb25lXG4gKiBlbGVtZW50IHBlciBjYWxsLlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOnhkdWNlLXRvb2xzLkl0ZXJhYmxlfSBjb2xsZWN0aW9uIHRoZSBpbnB1dCBjb2xsZWN0aW9uIHRoYXQgdGhlXG4gKiAgICAgcHJvZHVjZWQgaXRlcmF0b3Igd2lsbCBiZSBpdGVyYXRpbmcgb3Zlci5cbiAqIEBwYXJhbSB7bW9kdWxlOnhkdWNlLXRvb2xzLlRyYW5zZHVjZXJGdW5jdGlvbn0geGZvcm0gQSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgYVxuICogICAgIHRyYW5zZHVjZXIgb2JqZWN0IHRoYXQgZGVmaW5lcyB0aGUgdHJhbnNmb3JtYXRpb24gYmVpbmcgZG9uZSB0byB0aGVcbiAqICAgICBpdGVyYXRvcidzIGVsZW1lbnRzLiBBbnkgb2YgdGhlIHRyYW5zZHVjZXJzIGluIHRoZVxuICogICAgIHtAbGluayBtb2R1bGU6eGR1Y2V8eGR1Y2V9IG1vZHVsZSBjYW4gcHJvZHVjZSBhIHN1aXRhYmxlIHRyYW5zZHVjZXJcbiAqICAgICBmdW5jdGlvbi5cbiAqIEByZXR1cm4ge21vZHVsZTp4ZHVjZS10b29scy5JdGVyYXRvcn0gQW4gaXRlcmF0b3IgdGhhdCB3aWxsIHRyYW5zZm9ybSBpdHMgaW5wdXRcbiAqICAgICBlbGVtZW50cyB1c2luZyB0aGUgdHJhbnNkdWNlciBmdW5jdGlvbiBhcyBpdHNcbiAqICAgICBge0BsaW5rIG1vZHVsZTp4ZHVjZS10b29scy5OZXh0RnVuY3Rpb258bmV4dH1gIGZ1bmN0aW9uIGlzIGNhbGxlZC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHRyYW5zZHVjaW5nSXRlcmF0b3IoY29sbGVjdGlvbiwgeGZvcm0pIHtcbiAgY29uc3Qgc3RlcFJlZHVjZXIgPSB7XG4gICAgW3Auc3RlcF0oeGl0ZXIsIGlucHV0KSB7XG4gICAgICB4aXRlci5pdGVtcy51bnNoaWZ0KGlucHV0KTtcbiAgICAgIHJldHVybiB4aXRlcjtcbiAgICB9LFxuICAgIFtwLmZpbmFsXSh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBpdGVyID0gaXRlcmF0b3IoY29sbGVjdGlvbik7XG4gIGNvbnN0IHhmID0geGZvcm0oc3RlcFJlZHVjZXIpO1xuICBsZXQgY29tcGxldGVkID0gZmFsc2U7XG5cbiAgLy8gVGhpcyBhcnJheSBpcyB0aGUga2V5IHRvIHdvcmtpbmcgcHJvcGVybHkgd2l0aCBzdGVwIGZ1bmN0aW9ucyB0aGF0IHJldHVyblxuICAvLyBtb3JlIHRoYW4gb25lIHZhbHVlLiBBbGwgb2YgdGhlbSBhcmUgcHV0IGludG8gdGhlIGl0ZW1zIGFycmF5LiBBcyBsb25nIGFzXG4gIC8vIHRoaXMgYXJyYXkgaGFzIHZhbHVlcyBpbiBpdCwgdGhlIGBuZXh0YCBmdW5jdGlvbiB3aWxsIHJldHVybiBvbmUgdmFsdWVcbiAgLy8gcG9wcGVkIGZyb20gaXQgcmF0aGVyIHRoYW4gcnVubmluZyB0aGUgc3RlcCBmdW5jdGlvbiBhZ2Fpbi5cbiAgY29uc3QgaXRlbXMgPSBbXTtcblxuICAvLyBUaGUgYG5leHRgIGZ1bmN0aW9uIGhlcmUgaXMgcmF0aGVyIHNpbXBsZS4gSWYgdGhlcmUgaXMgYWxyZWFkeSBzb21ldGhpbmcgaW5cbiAgLy8gdGhlIGBpdGVtc2AgYXJyYXksIGl0J3MgcmV0dXJuZWQuIElmIG5vdCwgdGhlIGBzdGVwYCBmdW5jdGlvbiBpcyBydW4gYW5kLFxuICAvLyBpZiB0aGF0IHJlc3VsdHMgaW4gYSB2YWx1ZSBpbiB0aGUgYGl0ZW1zYCBhcnJheSwgaXQncyByZXR1cm5lZC4gT3RoZXJ3aXNlXG4gIC8vIGFuIG9iamVjdCB3aXRoIGB7IGRvbmU6IHRydWUgfWAgaXMgcmV0dXJuZWQuXG4gIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgaWYgKGl0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgc3RlcCgpO1xuICAgIH1cbiAgICBpZiAoaXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4geyBkb25lOiB0cnVlIH07XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogaXRlbXMucG9wKCksXG4gICAgICBkb25lOiBmYWxzZVxuICAgIH07XG4gIH1cblxuICAvLyBUaGlzIGlzIHdoZXJlIG1vc3Qgb2YgdGhlIHdvcmsgaGFwcGVucy4gSXQgZ2V0cyB0aGUgbmV4dCB2YWx1ZSBmcm9tIHRoZVxuICAvLyBpbnB1dCBjb2xsZWN0aW9uIGFuZCBydW5zIGl0IHRocm91Z2ggdGhlIHJlZHVjdGlvbiBzdGVwIGZ1bmN0aW9ucy4gSWYgdGhhdFxuICAvLyByZXN1bHRzIGluIGEgdmFsdWUsIGl0J3MgZ2l2ZW4gdG8gdGhlIHN0ZXBwZXIgb2JqZWN0ICh3aGljaCBhZGRzIGl0IHRvIHRoZVxuICAvLyBgaXRlbXNgIGFycmF5KTsgb3RoZXJ3aXNlIHRoZSB3aGlsZSBsb29wIGNvbnRpbnVlcyB0byB0aGUgbmV4dCBlbGVtZW50IG9mXG4gIC8vIHRoZSBpbnB1dCBjb2xsZWN0aW9uLiBUaGlzIGVuc3VyZXMgdGhhdCB0aGVyZSdzIHNvbWV0aGluZyBmb3IgdGhlIGBuZXh0YFxuICAvLyBmdW5jdGlvbiB0byByZXR1cm4gZWFjaCB0aW1lIGl0J3MgY2FsbGVkLlxuICAvL1xuICAvLyBJZiB0aGUgY29sbGVjdGlvbiBoYXMgZmluaXNoZWQgb3IgaWYgdGhlIHN0ZXAgZnVuY3Rpb24gcmV0dXJucyBhIGNvbXBsZXRlZFxuICAvLyBvYmplY3QgKHdoaWNoIHRha2Ugd2lsbCBkbyBhZnRlciBpdHMgbGltaXQgb2YgZWxlbWVudHMgaGFzIGJlZW4gcmVhY2hlZCxcbiAgLy8gZm9yIGluc3RhbmNlKSwgdGhlIGl0ZXJhdGlvbiBpcyBmaW5pc2hlZCBieSBjYWxsaW5nIHRoZSByZXN1bHQgZnVuY3Rpb24uXG4gIGZ1bmN0aW9uIHN0ZXAoKSB7XG4gICAgY29uc3QgY291bnQgPSBpdGVtcy5sZW5ndGg7XG4gICAgd2hpbGUgKGl0ZW1zLmxlbmd0aCA9PT0gY291bnQpIHtcbiAgICAgIGNvbnN0IHN0ZXBWYWx1ZSA9IGl0ZXIubmV4dCgpO1xuICAgICAgaWYgKHN0ZXBWYWx1ZS5kb25lIHx8IGNvbXBsZXRlZCkge1xuICAgICAgICB4ZltwLmZpbmFsXShyZXN1bHQpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNvbXBsZXRlZCA9IGlzQ29tcGxldGVkKHhmW3Auc3RlcF0ocmVzdWx0LCBzdGVwVmFsdWUudmFsdWUpKTtcbiAgICB9XG4gIH1cblxuICAvLyBUaGUgYHJlc3VsdGAgbmFtZSBpcyBob2lzdGVkIGFuZCB1c2VkIGluIGZ1bmN0aW9ucyBmdXJ0aGVyIHVwLCBzbyB3ZSBoYXZlXG4gIC8vIHRvIHJldGFpbiB0aGF0IG5hbWUgYW5kIGNhbid0IGp1c3QgcmV0dXJuIHRoZSBvYmplY3Qgd2l0aG91dCBuYW1pbmcgaXRcbiAgY29uc3QgcmVzdWx0ID0geyBpdGVtcywgbmV4dCwgc3RlcCB9O1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIFRyYW5zZm9ybXMgdGhlIGVsZW1lbnRzIG9mIHRoZSBpbnB1dCBjb2xsZWN0aW9uIGFuZCByZWR1Y2VzIHRoZW0gaW50byBhblxuICogb3V0cHV0IGNvbGxlY3Rpb24uXG4gKlxuICogVGhpcyBpcyB0aGUgbG93ZXN0LWxldmVsIG9mIHRoZSB0cmFuc2R1Y3Rpb24gZnVuY3Rpb25zIHRoYXQgaXMgbGlrZWx5IHRvIHNlZVxuICogcmVndWxhciB1c2UuIEl0IGRvZXMgbm90IGFzc3VtZSBhbnl0aGluZyBhYm91dCB0aGUgcmVkdWNlciwgYXMgaXQgYXNrcyBmb3IgaXRcbiAqIHRvIGJlIHBhc3NlZCBleHBsaWNpdGx5LiBUaGlzIG1lYW5zIHRoYXQgYW55IGtpbmQgb2YgY29sbGVjdGlvbiBjYW4gYmVcbiAqIHByb2R1Y2VkLCBzaW5jZSB0aGUgcmVkdWNlciBpcyBub3QgdGllZCB0byB0aGUgaW5wdXQgY29sbGVjdGlvbiBpbiBhbnkgd2F5LlxuICpcbiAqIGB0cmFuc2R1Y2VgIGFsc28gd2lsbCBhY2NlcHQgYW4gaW5pdGlhbCB2YWx1ZSBmb3IgdGhlIHJlc3VsdGluZyBjb2xsZWN0aW9uIGFzXG4gKiB0aGUgb3B0aW9uYWwgbGFzdCBwYXJhbWV0ZXIuIElmIHRoaXMgcGFyYW1ldGVyIGlzbid0IHByZXNlbnQsIHRoZW4gdGhlXG4gKiBpbml0aWFsIHZhbHVlIGlzIGRldGVybWluZWQgZnJvbSB0aGUgdHJhbnNkdWNlciBpbml0IHByb3RvY29sIHByb3BlcnR5IG9uIHRoZVxuICogcmVkdWNlci4gTm90ZSBob3dldmVyIHRoYXQgbWFueSByZWR1Y2VycyBtYXkgbm90IHByb3ZpZGUgYW4gaW5pdGlhbCB2YWx1ZSxcbiAqIGFuZCBpbiB0aG9zZSBjYXNlcyBpdCB3aWxsICpoYXZlKiB0byBiZSBwYXNzZWQgYXMgYSBwYXJhbWV0ZXIuXG4gKlxuICogYGBgXG4gKiBpbXBvcnQgeyBtYXAsIHRyYW5zZHVjZSB9IGZyb20gXCJAY2hhbmtvL3hkdWNlXCI7XG4gKiBpbXBvcnQgeyBwcm90b2NvbHMgYXMgcCB9IGZyb20gXCJAY2hhbmtvL3hkdWNlLXRvb2xzXCI7XG4gKlxuICogY29uc3QgeGZvcm0gPSBtYXAoeCA9PiB4ICsgMSk7XG4gKlxuICogY29uc3QgYXJyYXlSZWR1Y2VyID0ge1xuICogICBbcC5pbml0XSgpIHsgcmV0dXJuIFtdOyB9LFxuICogICBbcC5maW5hbF0oeCkgeyByZXR1cm4geDsgfSxcbiAqICAgW3Auc3RlcF0oYWNjLCB4KSB7XG4gKiAgICAgYWNjLnB1c2goeCk7XG4gKiAgICAgcmV0dXJuIGFjYztcbiAqICAgfVxuICogfTtcbiAqXG4gKiBjb25zdCBzdHJpbmdSZWR1Y2VyID0ge1xuICogICBbcC5pbml0XSgpIHsgcmV0dXJuICcnOyB9LFxuICogICBbcC5maW5hbF0oeCkgeyByZXR1cm4geDsgfSxcbiAqICAgW3Auc3RlcF0oYWNjLCB4KSB7IHJldHVybiBhY2MgKyB4OyB9XG4gKiB9O1xuICpcbiAqIGxldCByZXN1bHQgPSB0cmFuc2R1Y2UoWzEsIDIsIDMsIDQsIDVdLCB4Zm9ybSwgYXJyYXlSZWR1Y2VyKTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdCk7ICAgLy8gLT4gWzIsIDMsIDQsIDUsIDZdXG4gKlxuICogcmVzdWx0ID0gdHJhbnNkdWNlKFsxLCAyLCAzLCA0LCA1XSwgeGZvcm0sIHN0cmluZ1JlZHVjZXIpO1xuICogY29uc29sZS5sb2cocmVzdWx0KTsgICAvLyAtPiBcIjIzNDU2XCJcbiAqXG4gKiByZXN1bHQgPSB0cmFuc2R1Y2UoJzEyMzQ1JywgeGZvcm0sIGFycmF5UmVkdWNlcik7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQpOyAgIC8vIC0+IFsyLCAzLCA0LCA1LCA2XVxuICpcbiAqIHJlc3VsdCA9IHRyYW5zZHVjZSgnMTIzNDUnLCB4Zm9ybSwgc3RyaW5nUmVkdWNlcik7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQpOyAgIC8vIC0+IFwiMjM0NTZcIlxuICogYGBgXG4gKlxuICogVGhlc2UgZXhhbXBsZXMgaWxsdXN0cmF0ZSBhIG51bWJlciBvZiBpbXBvcnRhbnQgY29uY2VwdHMuIEZpcnN0IG9mIGFsbCwgdGhlXG4gKiB0cmFuc2R1Y2VyIGZ1bmN0aW9uIGlzIGluZGVwZW5kZW50IG9mIHRoZSB0eXBlIG9mIHRoZSBjb2xsZWN0aW9uOyB0aGUgc2FtZVxuICogdHJhbnNkdWNlciBmdW5jdGlvbiBpcyB1c2VkIG5vIG1hdHRlciB0aGUgdHlwZSBvZiBpbnB1dCBvciBvdXRwdXRcbiAqIGNvbGxlY3Rpb25zLiBTZWNvbmRseSwgdHdvIHJlZHVjZXJzIGFyZSBkZWZpbmVkLiBUaGVzZSBhcmUgb2JqZWN0cyB0aGF0XG4gKiBjb25mb3JtIHRvIHRoZSB0cmFuc2R1Y2VyIHByb3RvY29sIChzZWUgdGhlIGRvY3VtZW50YXRpb24gb25cbiAqIGB7QGxpbmsgbW9kdWxlOnhkdWNlLXRvb2xzLnByb3RvY29sc31gKSBhbmQgdGhhdCBrbm93IGhvdyB0byBwcm9kdWNlIHRoZSBvdXRwdXRcbiAqIGNvbGxlY3Rpb24gb2YgY2hvaWNlLiBJbiB0aGlzIGNhc2UsIHRoZSByZWR1Y2VycyBrbm93IGhvdyB0byBjcmVhdGUgbmV3XG4gKiBhcnJheXMgYW5kIHN0cmluZ3MgKHRoZSBgaW5pdGAgcHJvdG9jb2wpIGFuZCBob3cgdG8gYWRkIGVsZW1lbnRzIHRvIGFycmF5c1xuICogYW5kIHN0cmluZ3MgKHRoZSBgc3RlcGAgcHJvdG9jb2wpLiBCZWNhdXNlIHRoZXNlIHJlZHVjZXJzIGRvIGhhdmUgYGluaXRgXG4gKiBwcm90b2NvbCBwcm9wZXJ0aWVzLCB0aGUgYHRyYW5zZHVjZWAgY2FsbHMgZG8gbm90IHJlcXVpcmUgZXhwbGljaXQgaW5pdGlhbFxuICogY29sbGVjdGlvbnMuXG4gKlxuICogVGhlIGZpbmFsIHBvaW50IGlzIHRoYXQgYHRyYW5zZHVjZWAgY2FuIGFjY2VwdCBhbnkga2luZCBvZiBpdGVyYWJsZVxuICogY29sbGVjdGlvbiwgYW5kIGJ5IHBhc3NpbmcgaW4gdGhlIHByb3BlciByZWR1Y2VyLCBpdCBjYW4gcHJvZHVjZSBhbnkga2luZCBvZlxuICogb3V0cHV0IGNvbGxlY3Rpb24uIFRoZSBzYW1lIGB0cmFuc2R1Y2VgIGZ1bmN0aW9uIGFuZCB0aGUgc2FtZSBtYXAgdHJhbnNmb3JtZXJcbiAqIGlzIHVzZWQgaW4gYWxsIGZvdXIgZXhhbXBsZXMsIGRlc3BpdGUgdGhlIGlucHV0L291dHB1dCBjb21iaW5hdGlvbiBiZWluZ1xuICogZGlmZmVyZW50IGluIGFsbCBmb3VyLlxuICpcbiAqIFRoZSBgcmVkdWNlcmAgcGFyYW1ldGVyICpjYW4qIGJlIGEgcmVkdWNlciBmdW5jdGlvbiBpbnN0ZWFkIG9mIGEgcmVkdWNlclxuICogb2JqZWN0LiBJZiB0aGlzIGlzIHRoZSBjYXNlLCB0aGUgYGluaXRgIHBhcmFtZXRlciBpcyByZXF1aXJlZCBiZWNhdXNlIGFcbiAqIGZ1bmN0aW9uIGNhbm5vdCBkZWZpbmUgYW4gaW5pdGlhbCB2YWx1ZSBpdHNlbGYuXG4gKlxuICogVGhlIGBpbml0YCBjb2xsZWN0aW9uIGRvZXNuJ3QgaGF2ZSB0byBiZSBlbXB0eS4gSWYgaXQgaXNuJ3QsIHRoZSBlbGVtZW50c1xuICogdGhhdCBhcmUgYWxyZWFkeSBpbiBpdCBhcmUgcmV0YWluZWQgYW5kIHRoZSB0cmFuc2Zvcm1lZCBpbnB1dCBlbGVtZW50cyBhcmVcbiAqIHJlZHVjZWQgaW50byB0aGUgY29sbGVjdGlvbiBub3JtYWxseS5cbiAqXG4gKiBPZiBjb3Vyc2UsIHRoZSBleGFtcGxlcyBhcmUgbm90IHJlYWxseSBuZWNlc3NhcnkgLSB0aGUgc2FtZSB0aGluZyBjb3VsZCBiZVxuICogYWNjb21wbGlzaGVkIHVzaW5nIGB7QGxpbmsgbW9kdWxlOnhkdWNlLmludG98aW50b31gIHdpdGhvdXQgaGF2aW5nIHRvIGNyZWF0ZVxuICogdGhlIHJlZHVjZXJzIChzdHJpbmdzIGFuZCBhcnJheXMgcGFzc2VkIHRvIGB7QGxpbmsgbW9kdWxlOnhkdWNlLmludG98aW50b31gXG4gKiBhcyB0YXJnZXRzIGtub3cgaG93IHRvIHJlZHVjZSB0aGVtc2VsdmVzIGFscmVhZHkpLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwYXJhbSB7bW9kdWxlOnhkdWNlLXRvb2xzLkl0ZXJhYmxlfSBjb2xsZWN0aW9uIFRoZSBpbnB1dCBjb2xsZWN0aW9uLiBUaGUgb25seVxuICogICAgIHJlcXVpcmVtZW50IG9mIHRoaXMgY29sbGVjdGlvbiBpcyB0aGF0IGl0IGltcGxlbWVudCB0aGUgYGl0ZXJhYmxlYFxuICogICAgIHByb3RvY29sLiBTcGVjaWFsIHN1cHBvcnQgaXMgcHJvdmlkZWQgYnkgdGhlIGxpYnJhcnkgZm9yIG9iamVjdHMsIHNvIHRoZXlcbiAqICAgICBjYW4gYWxzbyBiZSB1c2VkLlxuICogQHBhcmFtIHttb2R1bGU6eGR1Y2UtdG9vbHMuVHJhbnNkdWNlckZ1bmN0aW9ufSBbeGZvcm1dIEEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIGFcbiAqICAgICB0cmFuc2R1Y2VyIG9iamVjdCB0aGF0IGRlZmluZXMgdGhlIHRyYW5zZm9ybWF0aW9uIGJlaW5nIGRvbmUgdG8gdGhlIGlucHV0XG4gKiAgICAgY29sbGVjdGlvbidzIGVsZW1lbnRzLiBBbnkgb2YgdGhlIHRyYW5zZHVjZXJzIGluIHRoZVxuICogICAgIHtAbGluayBtb2R1bGU6dHJhbnNkdWNlcnN8dHJhbnNkdWNlcnN9IG1vZHVsZSBjYW4gcHJvZHVjZSBhIHN1aXRhYmxlXG4gKiAgICAgdHJhbnNkdWNlciBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7KG1vZHVsZTp4ZHVjZS10b29scy5TdGVwRnVuY3Rpb258bW9kdWxlOnhkdWNlLXRvb2xzLlJlZHVjZXIpfSByZWR1Y2VyIEVpdGhlciBhXG4gKiAgICAgZnVuY3Rpb24gb3IgYSByZWR1Y2VyIG9iamVjdCB0aGF0IGltcGxlbWVudHMgdGhlIHRyYW5zZHVjZXIgcHJvdG9jb2xzXG4gKiAgICAgKGBpbml0YCBpcyAgb25seSByZXF1aXJlZCBpZiB0aGUgYGluaXRgIHBhcmFtZXRlciBpcyBub3QgcHJlc2VudCkuIFRoaXNcbiAqICAgICBvYmplY3QgbXVzdCBrbm93IGhvdyB0byBwcm9kdWNlIGFuIG91dHB1dCBjb2xsZWN0aW9uIHRocm91Z2ggaXRzIGBzdGVwYFxuICogICAgIGFuZCBgcmVzdWx0YCBwcm90b2NvbCBmdW5jdGlvbnMuIElmIHRoaXMgcGFyYW1ldGVyIGlzIGEgZnVuY3Rpb24sIHRoZW4gaXRcbiAqICAgICBpcyB0dXJuZWQgaW50byBhIHZhbGlkIHJlZHVjZXIgb2JqZWN0LlxuICogQHBhcmFtIHttb2R1bGU6eGR1Y2UtdG9vbHMuUmVkdWNpYmxlfSBbaW5pdF0gQSBjb2xsZWN0aW9uIG9mIHRoZSBzYW1lIHR5cGUgYXMgdGhlXG4gKiAgICAgb3V0cHV0IGNvbGxlY3Rpb24uIElmIHRoaXMgaXMgbm90IHByZXNlbnQsIHRoZW4gdGhlIHJlZHVjZXIncyBgaW5pdGBcbiAqICAgICBwcm90b2NvbCBmdW5jdGlvbiBpcyBjYWxsZWQgaW5zdGVhZCB0byBnZXQgdGhlIGluaXRpYWwgY29sbGVjdGlvbi4gSWYgaXRcbiAqICAgICBpcyBwcmVzZW50IGFuZCBub3QgZW1wdHksIHRoZW4gdGhlIGV4aXN0aW5nIGVsZW1lbnRzIHJlbWFpbiBhbmQgdGhlXG4gKiAgICAgdHJhbnNmb3JtZWQgaW5wdXQgY29sbGVjdGlvbiBlbGVtZW50cyBhcmUgYWRkZWQgdG8gaXQuXG4gKiBAcmV0dXJuIHsqfSBBIGNvbGxlY3Rpb24gb2YgYSB0eXBlIGRldGVybWluZWQgYnkgdGhlIHBhc3NlZCByZWR1Y2VyLiBUaGVcbiAqICAgICBlbGVtZW50cyBvZiB0aGlzIGNvbGxlY3Rpb24gYXJlIHRoZSByZXN1bHRzIGZyb20gdGhlIHRyYW5zZm9ybWVyIGZ1bmN0aW9uXG4gKiAgICAgYmVpbmcgYXBwbGllZCB0byBlYWNoIGVsZW1lbnQgb2YgdGhlIGlucHV0IGNvbGxlY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIHRyYW5zZHVjZShjb2xsZWN0aW9uLCB4Zm9ybSwgcmVkdWNlciwgaW5pdCkge1xuICBjb25zdCByID0gaXNGdW5jdGlvbihyZWR1Y2VyKSA/IHRvUmVkdWNlcihyZWR1Y2VyKSA6IHJlZHVjZXI7XG4gIGNvbnN0IGkgPSBpbml0ID8/IHJbcC5pbml0XSgpO1xuICBjb25zdCB4ZiA9IHhmb3JtID8geGZvcm0ocikgOiByO1xuICByZXR1cm4gcmVkdWNlKGNvbGxlY3Rpb24sIHhmLCBpKTtcbn1cblxuLyoqXG4gKiBUcmFuc2Zvcm1zIHRoZSBlbGVtZW50cyBvZiB0aGUgaW5wdXQgY29sbGVjdGlvbiBhbmQgcmVkdWNlcyB0aGVtIGludG8gYSBuZXdcbiAqIGFycmF5LlxuICpcbiAqIFRoZSB0cmFuc2Zvcm1lciBpcyBvcHRpb25hbC4gSWYgaXQgaXNuJ3QgcHJlc2VudCwgdGhpcyBmdW5jdGlvbiBqdXN0IGNvbnZlcnRzXG4gKiB0aGUgaW5wdXQgY29sbGVjdGlvbiBpbnRvIGFuIGFycmF5LlxuICpcbiAqIGBgYFxuICogaW1wb3J0IHsgYXNBcnJheSwgbWFwIH0gZnJvbSBcIkBjaGFua28veGR1Y2VcIjtcbiAqXG4gKiBjb25zdCB4Zm9ybSA9IG1hcCh4ID0+IHggKyAxKTtcbiAqXG4gKiBsZXQgcmVzdWx0ID0gYXNBcnJheShbMSwgMiwgMywgNCwgNV0sIHhmb3JtKTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdCk7ICAgLy8gLT4gWzIsIDMsIDQsIDUsIDZdXG4gKlxuICogcmVzdWx0ID0gYXNBcnJheSgnMTIzNDUnLCB4Zm9ybSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQpOyAgIC8vIC0+IFsyLCAzLCA0LCA1LCA2XVxuICpcbiAqIHJlc3VsdCA9IGFzQXJyYXkoJzEyMzQ1Jyk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQpOyAgIC8vIC0+IFsxLCAyLCAzLCA0LCA1XVxuICpcbiAqIHJlc3VsdCA9IGFzQXJyYXkoe2E6IDEsIGI6IDJ9KTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdCk7ICAgLy8gLT4gW3sgYTogMSB9LCB7IGI6IDIgfV1cbiAqIGBgYFxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwYXJhbSB7bW9kdWxlOnhkdWNlLXRvb2xzLkl0ZXJhYmxlfSBjb2xsZWN0aW9uIFRoZSBpbnB1dCBjb2xsZWN0aW9uLiBUaGUgb25seVxuICogICAgIHJlcXVpcmVtZW50IG9mIHRoaXMgY29sbGVjdGlvbiBpcyB0aGF0IGl0IGltcGxlbWVudCB0aGUgYGl0ZXJhYmxlYFxuICogICAgIHByb3RvY29sLiBTcGVjaWFsIHN1cHBvcnQgaXMgcHJvdmlkZWQgYnkgdGhlIGxpYnJhcnkgZm9yIG9iamVjdHMsIHNvIHRoZXlcbiAqICAgICBjYW4gYWxzbyBiZSB1c2VkLlxuICogQHBhcmFtIHttb2R1bGU6eGR1Y2UtdG9vbHMuVHJhbnNkdWNlckZ1bmN0aW9ufSBbeGZvcm1dIEEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIGFcbiAqICAgICB0cmFuc2R1Y2VyIG9iamVjdCB0aGF0IGRlZmluZXMgdGhlIHRyYW5zZm9ybWF0aW9uIGJlaW5nIGRvbmUgdG8gdGhlIGlucHV0XG4gKiAgICAgY29sbGVjdGlvbidzIGVsZW1lbnRzLiBBbnkgb2YgdGhlIHRyYW5zZHVjZXJzIGluIHRoZVxuICogICAgIHtAbGluayBtb2R1bGU6eGR1Y2V8eGR1Y2V9IG1vZHVsZSBjYW4gcHJvZHVjZSBhIHN1aXRhYmxlIHRyYW5zZHVjZXJcbiAqICAgICBmdW5jdGlvbi4gSWYgdGhpcyBpc24ndCBwcmVzZW50LCB0aGUgaW5wdXQgY29sbGVjdGlvbiB3aWxsIHNpbXBseSBiZVxuICogICAgIHJlZHVjZWQgaW50byBhbiBhcnJheSB3aXRob3V0IHRyYW5zZm9ybWF0aW9uLlxuICogQHJldHVybiB7QXJyYXl9IEFuIGFycmF5IGNvbnRhaW5pbmcgYWxsIG9mIHRoZSB0cmFuc2Zvcm1lZCB2YWx1ZXMgZnJvbSB0aGVcbiAqICAgICBpbnB1dCBjb2xsZWN0aW9uIGVsZW1lbnRzLlxuICovXG5mdW5jdGlvbiBhc0FycmF5KGNvbGxlY3Rpb24sIHhmb3JtKSB7XG4gIHJldHVybiB0cmFuc2R1Y2UoY29sbGVjdGlvbiwgeGZvcm0sIHRvUmVkdWNlcihbXSkpO1xufVxuXG4vKipcbiAqIFRyYW5zZm9ybXMgdGhlIGVsZW1lbnRzIG9mIHRoZSBpbnB1dCBjb2xsZWN0aW9uIGFuZCByZWR1Y2VzIHRoZW0gaW50byBhIG5ld1xuICogb2JqZWN0LlxuICpcbiAqIFRoZSB0cmFuc2Zvcm1lciBpcyBvcHRpb25hbC4gSWYgaXQgaXNuJ3QgcHJlc2VudCwgdGhpcyBmdW5jdGlvbiBqdXN0IGNvbnZlcnRzXG4gKiB0aGUgaW5wdXQgY29sbGVjdGlvbiBpbnRvIGFuIG9iamVjdC4gV2hlbiB0aGlzIGhhcHBlbnMsIGlmIHRoZSBpbnB1dFxuICogY29sbGVjdGlvbiBpcyBub3QgYW4gb2JqZWN0IG9yIGFuIGFycmF5IG9mIG9iamVjdHMsIG51bWJlcnMgc3RhcnRpbmcgYXQgYDBgXG4gKiB3aWxsIGJlIHVzZWQgYXMga2V5cyBmb3IgdGhlIHZhbHVlcyBwcm92aWRlZCBieSB0aGUgaW5wdXQgY29sbGVjdGlvbi5cbiAqXG4gKiBgYGBcbiAqIGltcG9ydCB7IGFzT2JqZWN0LCBrdiwgbWFwIH0gZnJvbSBcIkBjaGFua28veGR1Y2VcIjtcbiAqXG4gKiBjb25zdCBmbiA9IHByb3AgPT4ge1xuICogICBjb25zdCB7IGssIHYgfSA9IGt2KHByb3ApO1xuICogICByZXR1cm4geyBba106IHYgKyAxIH07XG4gKiB9XG4gKiBjb25zdCB4Zm9ybSA9IG1hcChmbik7XG4gKlxuICogbGV0IHJlc3VsdCA9IGFzT2JqZWN0KHsgYTogMSwgYjogMiB9LCB4Zm9ybSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQpOyAgIC8vIC0+IHsgYTogMiwgYjogMyB9XG4gKlxuICogcmVzdWx0ID0gYXNPYmplY3QoW3sgYTogMSB9LCB7IGI6IDIgfV0sIHhmb3JtKTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdCk7ICAgLy8gLT4geyBhOiAyLCBiOiAzIH1cbiAqXG4gKiByZXN1bHQgPSBhc09iamVjdChbMSwgMiwgMywgNCwgNV0pO1xuICogY29uc29sZS5sb2cocmVzdWx0KTsgICAvLyAtPiB7IDA6IDEsIDE6IDIsIDI6IDMsIDM6IDQsIDQ6IDUgfVxuICpcbiAqIHJlc3VsdCA9IGFzT2JqZWN0KFt7IGE6IDEgfSwgeyBiOiAyIH1dKTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdCk7ICAgLy8gLT4geyBhOiAxLCBiOiAyIH1cbiAqXG4gKiByZXN1bHQgPSBhc09iamVjdChcImhlbGxvXCIpO1xuICogY29uc29sZS5sb2cocmVzdWx0KTsgICAvLyAtPiB7IDA6IFwiaFwiLCAxOiBcImVcIiwgMjogXCJsXCIsIDM6IFwibFwiLCA0OiBcIm9cIiB9XG4gKiBgYGBcbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcGFyYW0ge21vZHVsZTp4ZHVjZS10b29scy5JdGVyYWJsZX0gY29sbGVjdGlvbiBUaGUgaW5wdXQgY29sbGVjdGlvbi4gVGhlIG9ubHlcbiAqICAgICByZXF1aXJlbWVudCBvZiB0aGlzIGNvbGxlY3Rpb24gaXMgdGhhdCBpdCBpbXBsZW1lbnQgdGhlIGBpdGVyYWJsZWBcbiAqICAgICBwcm90b2NvbC4gU3BlY2lhbCBzdXBwb3J0IGlzIHByb3ZpZGVkIGJ5IHRoZSBsaWJyYXJ5IGZvciBvYmplY3RzLCBzbyB0aGV5XG4gKiAgICAgY2FuIGFsc28gYmUgdXNlZC5cbiAqIEBwYXJhbSB7bW9kdWxlOnhkdWNlLXRvb2xzLlRyYW5kdWNlcn0gW3hmb3JtXSBBIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyBhIHRyYW5zZHVjZXJcbiAqICAgICBvYmplY3QgdGhhdCBkZWZpbmVzIHRoZSB0cmFuc2Zvcm1hdGlvbiBiZWluZyBkb25lIHRvIHRoZSBpbnB1dFxuICogICAgIGNvbGxlY3Rpb24ncyBlbGVtZW50cy4gQW55IG9mIHRoZSB0cmFuc2R1Y2VycyBpbiB0aGVcbiAqICAgICB7QGxpbmsgbW9kdWxlOnhkdWNlfHhkdWNlfSBtb2R1bGUgY2FuIHByb2R1Y2UgYSBzdWl0YWJsZSB0cmFuc2R1Y2VyXG4gKiAgICAgZnVuY3Rpb24uIElmIHRoaXMgaXNuJ3QgcHJlc2VudCwgdGhlIGlucHV0IGNvbGxlY3Rpb24gd2lsbCBzaW1wbHkgYmVcbiAqICAgICByZWR1Y2VkIGludG8gYW4gb2JqZWN0IHdpdGhvdXQgdHJhbnNmb3JtYXRpb24uXG4gKiBAcmV0dXJuIHtPYmplY3R9IEFuIG9iamVjdCBjb250YWluaW5nIGFsbCBvZiB0aGUgdHJhbnNmb3JtZWQgdmFsdWVzIGZyb20gdGhlXG4gKiAgICAgaW5wdXQgY29sbGVjdGlvbiBlbGVtZW50cy5cbiAqL1xuZnVuY3Rpb24gYXNPYmplY3QoY29sbGVjdGlvbiwgeGZvcm0pIHtcbiAgcmV0dXJuIHRyYW5zZHVjZShjb2xsZWN0aW9uLCB4Zm9ybSwgdG9SZWR1Y2VyKHt9KSk7XG59XG5cbi8qKlxuICogVHJhbnNmb3JtcyB0aGUgZWxlbWVudHMgb2YgdGhlIGlucHV0IGNvbGxlY3Rpb24gYW5kIHJlZHVjZXMgdGhlbSBpbnRvIGEgbmV3XG4gKiBzdHJpbmcuXG4gKlxuICogVGhlIHRyYW5zZm9ybWVyIGlzIG9wdGlvbmFsLiBJZiBpdCBpc24ndCBwcmVzZW50LCB0aGlzIGZ1bmN0aW9uIGp1c3QgY29udmVydHNcbiAqIHRoZSBpbnB1dCBjb2xsZWN0aW9uIGludG8gYW4gc3RyaW5nLiBJZiB0aGlzIGlzIHRoZSBjYXNlIGFuZCB0aGUgaW5wdXRcbiAqIGNvbGxlY3Rpb24gaXMgYW4gb2JqZWN0LCBvbmx5IHRoZSB2YWx1ZXMgd2lsbCBiZSBjb25jYXRlbmF0ZWQgaW50byBhIHN0cmluZy5cbiAqXG4gKiBPdGhlcndpc2UsIHRyYW5zZm9ybWluZyBvYmplY3RzIGludG8gc3RyaW5ncyBvbmx5IG1ha2VzIG11Y2ggc2Vuc2UgaWYgdGhlXG4gKiB0cmFuc2R1Y2VyIHByb2R1Y2VzIG9ubHkgYSBzaW5nbGUgb3V0cHV0IGZyb20gZWFjaCBvZiB0aGUgb2JqZWN0cyBrZXkvdmFsdWVcbiAqIHBhaXJzLlxuICpcbiAqIGBgYFxuICogaW1wb3J0IHsgdHJhbnNkdWNlLCBrZXksIG1hcCB9IGZyb20gXCJAY2hhbmtvL3hkdWNlXCI7XG4gKlxuICogY29uc3QgeGZvcm0gPSBtYXAoeCA9PiB4LnRvVXBwZXJDYXNlKCkpO1xuICpcbiAqIGxldCByZXN1bHQgPSBhc1N0cmluZygnaGVsbG8nLCB4Zm9ybSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQpOyAgIC8vIC0+IFwiSEVMTE9cIlxuICpcbiAqIHJlc3VsdCA9IGFzU3RyaW5nKFsnaCcsICdlJywgJ2wnLCAnbCcsICdvJ10sIHhmb3JtKTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdCk7ICAgLy8gLT4gXCJIRUxMT1wiXG4gKlxuICogcmVzdWx0ID0gYXNTdHJpbmcoeyBhOiAxLCBjOiAyLCBiOiAzIH0sIG1hcChrZXkpKTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdCk7ICAgLy8gLT4gXCJhY2JcIlxuICpcbiAqIHJlc3VsdCA9IGFzU3RyaW5nKFsxLCAyLCAzLCA0LCA1XSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQpOyAgIC8vIC0+IFwiMTIzNDVcIlxuICpcbiAqIHJlc3VsdCA9IGFzU3RyaW5nKHsgYTogMSwgYzogMiwgYjogMyB9KTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdCk7ICAgLy8gLT4gXCIxMjNcIlxuICogYGBgXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHBhcmFtIHttb2R1bGU6eGR1Y2UtdG9vbHMuSXRlcmFibGV9IGNvbGxlY3Rpb24gVGhlIGlucHV0IGNvbGxlY3Rpb24uIFRoZSBvbmx5XG4gKiAgICAgcmVxdWlyZW1lbnQgb2YgdGhpcyBjb2xsZWN0aW9uIGlzIHRoYXQgaXQgaW1wbGVtZW50IHRoZSBgaXRlcmFibGVgXG4gKiAgICAgcHJvdG9jb2wuIFNwZWNpYWwgc3VwcG9ydCBpcyBwcm92aWRlZCBieSB0aGUgbGlicmFyeSBmb3Igb2JqZWN0cywgc28gdGhleVxuICogICAgIGNhbiBhbHNvIGJlIHVzZWQuXG4gKiBAcGFyYW0ge21vZHVsZTp4ZHVjZS10b29scy5UcmFuc2R1Y2VyRnVuY3Rpb259IFt4Zm9ybV0gQSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgYVxuICogICAgIHRyYW5zZHVjZXIgb2JqZWN0IHRoYXQgZGVmaW5lcyB0aGUgdHJhbnNmb3JtYXRpb24gYmVpbmcgZG9uZSB0byB0aGUgaW5wdXRcbiAqICAgICBjb2xsZWN0aW9uJ3MgZWxlbWVudHMuIEFueSBvZiB0aGUgdHJhbnNkdWNlcnMgaW4gdGhlXG4gKiAgICAge0BsaW5rIG1vZHVsZTp0cmFuc2R1Y2Vyc3x0cmFuc2R1Y2Vyc30gbW9kdWxlIGNhbiBwcm9kdWNlIGEgc3VpdGFibGVcbiAqICAgICB0cmFuc2R1Y2VyIGZ1bmN0aW9uLiBJZiB0aGlzIGlzbid0IHByZXNlbnQsIHRoZSBpbnB1dCBjb2xsZWN0aW9uIHdpbGxcbiAqICAgICBzaW1wbHkgYmUgcmVkdWNlZCBpbnRvIGEgc3RyaW5nIHdpdGhvdXQgdHJhbnNmb3JtYXRpb24uXG4gKiBAcmV0dXJuIHtTdHJpbmd9IEEgc3RyaW5nIGNvbnRhaW5pbmcgYWxsIG9mIHRoZSB0cmFuc2Zvcm1lZCB2YWx1ZXMgZnJvbSB0aGVcbiAqICAgICBpbnB1dCBjb2xsZWN0aW9uIGVsZW1lbnRzLlxuICovXG5mdW5jdGlvbiBhc1N0cmluZyhjb2xsZWN0aW9uLCB4Zm9ybSkge1xuICByZXR1cm4gdHJhbnNkdWNlKGNvbGxlY3Rpb24sIHhmb3JtLCB0b1JlZHVjZXIoXCJcIikpO1xufVxuXG4vKipcbiAqIFRyYW5zZm9ybXMgdGhlIGVsZW1lbnRzIG9mIHRoZSBpbnB1dCBjb2xsZWN0aW9uIGFuZCByZWR1Y2VzIHRoZW0gaW50byBhIG5ld1xuICogaXRlcmF0b3IuXG4gKlxuICogVGhlIHRyYW5zZm9ybWVyIGlzIG9wdGlvbmFsLiBJZiBpdCBpc24ndCBwcmVzZW50LCB0aGlzIGZ1bmN0aW9uIGp1c3QgY29udmVydHNcbiAqIHRoZSBpbnB1dCBjb2xsZWN0aW9uIGludG8gYW4gaXRlcmF0b3IuXG4gKlxuICogKihUaGUgcmVzdWx0cyBoZXJlIGFyZSBzaG93biBwYXNzZWQgdGhyb3VnaCBgYXNBcnJheWAgYmVjYXVzZSB0aGVyZSdzIG5vXG4gKiBwcmludGFibGUgcmVwcmVzZW50YXRpb24gb2YgYW4gaXRlcmF0b3IgdG8gc2hvdy4gVGhlIGBhc0FycmF5YCBjYWxscyBhcmUgZm9yXG4gKiBkZW1vbnN0cmF0aW9uIHB1cnBvc2VzIG9ubHkuKSpcbiAqXG4gKiBgYGBcbiAqIGltcG9ydCB7IGFzSXRlcmF0b3IsIGFzQXJyYXksIG1hcCB9IGZyb20gXCJAY2hhbmtvL3hkdWNlXCI7XG4gKlxuICogY29uc3QgeGZvcm0gPSBtYXAoeCA9PiB4ICsgMSk7XG4gKiBmdW5jdGlvbiogZml2ZSgpIHtcbiAqICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNTsgKytpKSB7XG4gKiAgICAgeWllbGQgaTtcbiAqICAgfVxuICogfTtcbiAqXG4gKiBsZXQgcmVzdWx0ID0gYXNJdGVyYXRvcihmaXZlKCksIHhmb3JtKTtcbiAqIGNvbnNvbGUubG9nKGFzQXJyYXkocmVzdWx0KSk7ICAgLy8gLT4gWzIsIDMsIDQsIDUsIDZdXG4gKlxuICogcmVzdWx0ID0gYXNJdGVyYXRvcihbMSwgMiwgMywgNCwgNV0sIHhmb3JtKTtcbiAqIGNvbnNvbGUubG9nKGFzQXJyYXkocmVzdWx0KSk7ICAgLy8gLT4gWzIsIDMsIDQsIDUsIDZdXG4gKlxuICogcmVzdWx0ID0gYXNJdGVyYXRvcihbMSwgMiwgMywgNCwgNV0pO1xuICogY29uc29sZS5sb2coYXNBcnJheShyZXN1bHQpKTsgICAvLyAtPiBbMSwgMiwgMywgNCwgNV1cbiAqXG4gKiByZXN1bHQgPSBhc0l0ZXJhdG9yKHthOiAxLCBiOiAyfSk7XG4gKiBjb25zb2xlLmxvZyhhc0FycmF5KHJlc3VsdCkpOyAgIC8vIC0+IFt7IGE6IDEgfSwgeyBiOiAyIH1dXG4gKiBgYGBcbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcGFyYW0ge21vZHVsZTp4ZHVjZS10b29scy5JdGVyYWJsZX0gY29sbGVjdGlvbiBUaGUgaW5wdXQgY29sbGVjdGlvbi4gVGhlIG9ubHlcbiAqICAgICByZXF1aXJlbWVudCBvZiB0aGlzIGNvbGxlY3Rpb24gaXMgdGhhdCBpdCBpbXBsZW1lbnQgdGhlIGBpdGVyYWJsZWBcbiAqICAgICBwcm90b2NvbC4gU3BlY2lhbCBzdXBwb3J0IGlzIHByb3ZpZGVkIGJ5IHRoZSBsaWJyYXJ5IGZvciBvYmplY3RzLCBzbyB0aGV5XG4gKiAgICAgY2FuIGFsc28gYmUgdXNlZC5cbiAqIEBwYXJhbSB7bW9kdWxlOnhkdWNlLXRvb2xzLlRyYW5zZHVjZXJGdW5jdGlvbn0gW3hmb3JtXSBBIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyBhXG4gKiAgICAgdHJhbnNkdWNlciBvYmplY3QgdGhhdCBkZWZpbmVzIHRoZSB0cmFuc2Zvcm1hdGlvbiBiZWluZyBkb25lIHRvIHRoZSBpbnB1dFxuICogICAgIGNvbGxlY3Rpb24ncyBlbGVtZW50cy4gQW55IG9mIHRoZSB0cmFuc2R1Y2VycyBpbiB0aGVcbiAqICAgICB7QGxpbmsgbW9kdWxlOnRyYW5zZHVjZXJzfHRyYW5zZHVjZXJzfSBtb2R1bGUgY2FuIHByb2R1Y2UgYSBzdWl0YWJsZVxuICogICAgIHRyYW5zZHVjZXIgZnVuY3Rpb24uIElmIHRoaXMgaXNuJ3QgcHJlc2VudCwgdGhlIGlucHV0IGNvbGxlY3Rpb24gd2lsbFxuICogICAgIHNpbXBseSBiZSByZWR1Y2VkIGludG8gYW4gaXRlcmF0b3Igd2l0aG91dCB0cmFuc2Zvcm1hdGlvbi5cbiAqIEByZXR1cm4ge21vZHVsZTp4ZHVjZS10b29scy5JdGVyYXRvcn0gQW4gaXRlcmF0b3IgY29udGFpbmluZyBhbGwgb2YgdGhlIHRyYW5zZm9ybWVkXG4gKiAgICAgdmFsdWVzIGZyb20gdGhlIGlucHV0IGNvbGxlY3Rpb24gZWxlbWVudHMuXG4gKi9cbmZ1bmN0aW9uIGFzSXRlcmF0b3IoY29sbGVjdGlvbiwgeGZvcm0pIHtcbiAgcmV0dXJuIHhmb3JtID8gdHJhbnNkdWNpbmdJdGVyYXRvcihjb2xsZWN0aW9uLCB4Zm9ybSkgOiBpdGVyYXRvcihjb2xsZWN0aW9uKTtcbn1cblxuLyoqXG4gKiBUcmFuc2Zvcm1zIHRoZSBlbGVtZW50cyBvZiB0aGUgaW5wdXQgY29sbGVjdGlvbiBhbmQgcmVkdWNlcyB0aGVtIGludG8gYSBuZXdcbiAqIGNvbGxlY3Rpb24gb2YgdGhlIHNhbWUgdHlwZS5cbiAqXG4gKiBUaGlzIGlzIHRoZSBoaWdoZXN0IGxldmVsIG9mIHRoZSB0aHJlZSBtYWluIHRyYW5zZHVjdGlvbiBmdW5jdGlvbnNcbiAqIChgc2VxdWVuY2VgLCBge0BsaW5rIG1vZHVsZTp4ZHVjZS5pbnRvfGludG99YCwgYW5kXG4gKiBge0BsaW5rIG1vZHVsZTp4ZHVjZS50cmFuc2R1Y2V8dHJhbnNkdWNlfWApLiBJdCBjcmVhdGVzIGEgbmV3IGNvbGxlY3Rpb24gb2ZcbiAqIHRoZSBzYW1lIHR5cGUgYXMgdGhlIGlucHV0IGNvbGxlY3Rpb24gYW5kIHJlZHVjZXMgdGhlIHRyYW5zZm9ybWVkIGVsZW1lbnRzXG4gKiBpbnRvIGl0LiBBZGRpdGlvbmFsbHksIHVubGlrZSBge0BsaW5rIG1vZHVsZTp4ZHVjZS5pbnRvfGludG99YCBhbmRcbiAqIGB7QGxpbmsgbW9kdWxlOnhkdWNlLnRyYW5zZHVjZXx0cmFuc2R1Y2V9YCwgdGhpcyBmdW5jdGlvbiBpcyBjYXBhYmxlIG9mXG4gKiBwcm9kdWNpbmcgYW4gaXRlcmF0b3IgKGFzIGxvbmcgYXMgdGhlIGlucHV0IGlzIGFuIGl0ZXJhdG9yKS5cbiAqXG4gKiBUaGUgaW5wdXQgY29sbGVjdGlvbiBtdXN0IG5vdCBvbmx5IGltcGxlbWVudCB0aGUgYGl0ZXJhdG9yYCBwcm90b2NvbCAoYXMgaW5cbiAqIHRoZSBsYXN0IHR3byBmdW5jdGlvbnMpIGJ1dCBhbHNvIHRoZSBgaW5pdGAsIGByZXN1bHRgLCBhbmQgYHN0ZXBgIHRyYW5zZHVjZXJcbiAqIHByb3RvY29scy4gU3BlY2lhbCBzdXBwb3J0IGlzIHByb3ZpZGVkIGZvciBhcnJheXMsIHN0cmluZ3MsIG9iamVjdHMsIGFuZFxuICogaXRlcmF0b3JzLCBzbyB0aGV5IG5lZWQgbm90IGltcGxlbWVudCBhbnkgcHJvdG9jb2wuXG4gKlxuICogVGhlIG9idmlvdXMgbGltaXRhdGlvbiBvZiB0aGlzIGZ1bmN0aW9uIGlzIHRoYXQgdGhlIHR5cGUgb2Ygb3V0cHV0IGNvbGxlY3Rpb25cbiAqIGNhbm5vdCBiZSBjaG9zZW4uIFNpbmNlIGl0IGlzIGFsd2F5cyB0aGUgc2FtZSBhcyB0aGUgaW5wdXQgY29sbGVjdGlvbiwgdGhpc1xuICogZnVuY3Rpb24gY2Fubm90IGJlIHVzZWQgdG8gY29udmVydCBhIGNvbGxlY3Rpb24gaW50byBhIGRpZmZlcmVudCB0eXBlLlxuICpcbiAqIGBgYFxuICogaW1wb3J0IHsgc2VxdWVuY2UsIG1hcCB9IGZyb20gXCJAY2hhbmtvL3hkdWNlXCI7XG4gKlxuICogY29uc3QgeGZvcm0gPSBtYXAoeCA9PiB4ICsgMSk7XG4gKlxuICogbGV0IHJlc3VsdCA9IHNlcXVlbmNlKFsxLCAyLCAzLCA0LCA1XSwgeGZvcm0pO1xuICogY29uc29sZS5sb2cocmVzdWx0KTsgICAvLyAtPiByZXN1bHQgPSBbMiwgMywgNCwgNSwgNl1cbiAqXG4gKiByZXN1bHQgPSBzZXF1ZW5jZSgnMTIzNDUnLCB4Zm9ybSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQpOyAgIC8vIC0+IHJlc3VsdCA9ICcyMzQ1NidcbiAqIGBgYFxuICpcbiAqIFRoZXNlIGV4YW1wbGVzIGFyZSBpZGVudGljYWwgdG8gc29tZSBvZiB0aGUgZXhhbXBsZXMgZnJvbSB0aGUgYGFzWGBcbiAqIGZ1bmN0aW9ucy4gT3RoZXIgZXhhbXBsZXMgYXJlIG5vdCBwb3NzaWJsZSB3aXRoIGBzZXF1ZW5jZWAgYmVjYXVzZSB0aGV5IGhhdmVcbiAqIGRpZmZlcmVudCBpbnB1dCBhbmQgb3V0cHV0IGNvbGxlY3Rpb24gdHlwZXMuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHBhcmFtIHttb2R1bGU6eGR1Y2UtdG9vbHMuUmVkdWNpYmxlSXRlcmFibGV9IGNvbGxlY3Rpb24gVGhlIGlucHV0IGNvbGxlY3Rpb24uIFRoaXNcbiAqICAgICBtdXN0IGltcGxlbWVudCB0aGUgYGl0ZXJhdG9yYCwgYGluaXRgLCBgcmVzdWx0YCwgYW5kIGBzdGVwYCBwcm90b2NvbHMuXG4gKiAgICAgU3BlY2lhbCBzdXBwb3J0IGlzIHByb3ZpZGVkIGZvciBhcnJheXMsIHN0cmluZ3MsIG9iamVjdHMsIGFuZCBpdGVyYXRvcnMsXG4gKiAgICAgc28gdGhleSBkbyBub3QgaGF2ZSB0byBpbXBsZW1lbnQgYW55IHByb3RvY29scy5cbiAqIEBwYXJhbSB7bW9kdWxlOnhkdWNlLXRvb2xzLlRyYW5zZHVjZXJGdW5jdGlvbn0geGZvcm0gQSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgYVxuICogICAgIHRyYW5zZHVjZXIgb2JqZWN0IHRoYXQgZGVmaW5lcyB0aGUgdHJhbnNmb3JtYXRpb24gYmVpbmcgZG9uZSB0byB0aGUgaW5wdXRcbiAqICAgICBjb2xsZWN0aW9uJ3MgZWxlbWVudHMuIEFueSBvZiB0aGUgdHJhbnNkdWNlcnMgaW4gdGhlXG4gKiAgICAge0BsaW5rIG1vZHVsZTp4ZHVjZS10b29scy50cmFuc2R1Y2Vyc3x0cmFuc2R1Y2Vyc30gbW9kdWxlIGNhbiBwcm9kdWNlIGEgc3VpdGFibGVcbiAqICAgICB0cmFuc2R1Y2VyIGZ1bmN0aW9uLlxuICogQHJldHVybiB7bW9kdWxlOnhkdWNlLXRvb2xzLlJlZHVjaWJsZUl0ZXJhYmxlfSBBIGNvbGxlY3Rpb24gb2YgdGhlIHNhbWUgdHlwZSBhcyB0aGVcbiAqICAgICBpbnB1dCBjb2xsZWN0aW9uLCBjb250YWluaW5nIGFsbCBvZiB0aGUgdHJhbnNmb3JtZWQgdmFsdWVzIGZyb20gdGhlIGlucHV0XG4gKiAgICAgY29sbGVjdGlvbiBlbGVtZW50cy5cbiAqL1xuZnVuY3Rpb24gc2VxdWVuY2UoY29sbGVjdGlvbiwgeGZvcm0pIHtcbiAgc3dpdGNoICh0cnVlKSB7XG4gICAgY2FzZSBpc0FycmF5KGNvbGxlY3Rpb24pOlxuICAgICAgcmV0dXJuIGFzQXJyYXkoY29sbGVjdGlvbiwgeGZvcm0pO1xuICAgIGNhc2UgaXNPYmplY3QoY29sbGVjdGlvbik6XG4gICAgICByZXR1cm4gYXNPYmplY3QoY29sbGVjdGlvbiwgeGZvcm0pO1xuICAgIGNhc2UgaXNTdHJpbmcoY29sbGVjdGlvbik6XG4gICAgICByZXR1cm4gYXNTdHJpbmcoY29sbGVjdGlvbiwgeGZvcm0pO1xuICAgIGNhc2UgaXNJbXBsZW1lbnRlZChjb2xsZWN0aW9uLCBcInN0ZXBcIik6XG4gICAgICByZXR1cm4gdHJhbnNkdWNlKGNvbGxlY3Rpb24sIHhmb3JtLCBjb2xsZWN0aW9uKTtcbiAgICBjYXNlIGlzSW1wbGVtZW50ZWQoY29sbGVjdGlvbiwgXCJpdGVyYXRvclwiKTpcbiAgICAgIHJldHVybiBhc0l0ZXJhdG9yKGNvbGxlY3Rpb24sIHhmb3JtKTtcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgRXJyb3IoYENhbm5vdCBzZXF1ZW5jZSBjb2xsZWN0aW9uOiAke2NvbGxlY3Rpb259YCk7XG4gIH1cbn1cblxuLyoqXG4gKiBUcmFuc2Zvcm1zIHRoZSBlbGVtZW50cyBvZiB0aGUgaW5wdXQgY29sbGVjdGlvbiBhbmQgcmVkdWNlcyB0aGVtIGludG8gdGhlXG4gKiB0YXJnZXQgY29sbGVjdGlvbi5cbiAqXG4gKiBUaGlzIGlzIG11Y2ggbGlrZSBge0BsaW5rIG1vZHVsZTp4ZHVjZS50cmFuc2R1Y2V8dHJhbnNkdWNlfWAsIGV4Y2VwdCB0aGF0XG4gKiBpbnN0ZWFkIG9mIGV4cGxpY2l0bHkgcHJvdmlkaW5nIGEgcmVkdWNlciAoYW5kIHBlcmhhcHMgYW4gaW5pdGlhbFxuICogY29sbGVjdGlvbiksIHRoZSB0YXJnZXQgY29sbGVjdGlvbiBhY3RzIGFzIGEgcmVkdWNlciBpdHNlbGYuIFRoaXMgcmVxdWlyZXNcbiAqIHRoYXQgdGhlIGNvbGxlY3Rpb24gaW1wbGVtZW50IHRoZSBgaW5pdGAsIGByZXN1bHRgLCBhbmQgYHN0ZXBgIHRyYW5zZHVjZXJcbiAqIHByb3RvY29sIGZ1bmN0aW9ucy5cbiAqXG4gKiBJZiBubyB0cmFuc2R1Y2VyIGZ1bmN0aW9uIGlzIHByb3ZpZGVkLCB0aGUgaW5wdXQgY29sbGVjdGlvbiBlbGVtZW50cyBhcmVcbiAqIHJlZHVjZWQgaW50byB0aGUgdGFyZ2V0IGNvbGxlY3Rpb24gd2l0aG91dCBiZWluZyB0cmFuc2Zvcm1lZC4gVGhpcyBjYW4gYmVcbiAqIHVzZWQgdG8gY29udmVydCBvbmUga2luZCBvZiBjb2xsZWN0aW9uIGludG8gYW5vdGhlci5cbiAqXG4gKiBgYGBcbiAqIGltcG9ydCB7IGludG8sIG1hcCB9IGZyb20gXCJAY2hhbmtvL3hkdWNlXCI7XG4gKlxuICogY29uc3QgeGZvcm0gPSBtYXAoeCA9PiB4ICsgMSk7XG4gKlxuICogbGV0IHJlc3VsdCA9IGludG8oW10sIFsxLCAyLCAzLCA0LCA1XSwgeGZvcm0pO1xuICogY29uc29sZS5sb2cocmVzdWx0KTsgICAvLyAtPiBbMiwgMywgNCwgNSwgNl1cbiAqXG4gKiByZXN1bHQgPSBpbnRvKFwiXCIsIFsxLCAyLCAzLCA0LCA1XSwgeGZvcm0pO1xuICogY29uc29sZS5sb2cocmVzdWx0KTsgICAvLyAtPiBcIjIzNDU2XCJcbiAqXG4gKiByZXN1bHQgPSBpbnRvKFtdLCBcIjEyMzQ1XCIsIHhmb3JtKTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdCk7ICAgLy8gLT4gWzIsIDMsIDQsIDUsIDZdXG4gKlxuICogcmVzdWx0ID0gaW50byhcIlwiLCBcIjEyMzQ1XCIsIHhmb3JtKTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdCk7ICAgLy8gLT4gXCIyMzQ1NlwiXG4gKiBgYGBcbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcGFyYW0ge21vZHVsZTp4ZHVjZS10b29scy5SZWR1Y2libGV9IHRhcmdldCBUaGUgY29sbGVjdGlvbiBpbnRvIHdoaWNoIGFsbCBvZiB0aGVcbiAqICAgICB0cmFuc2Zvcm1lZCBpbnB1dCBjb2xsZWN0aW9uIGVsZW1lbnRzIHdpbGwgYmUgcmVkdWNlZC4gVGhpcyBjb2xsZWN0aW9uXG4gKiAgICAgbXVzdCBpbXBsZW1lbnQgdGhlIGBpbml0YCwgYHJlc3VsdGAsIGFuZCBgc3RlcGAgcHJvdG9jb2wgZnVuY3Rpb25zIGZyb21cbiAqICAgICB0aGUgdHJhbnNkdWNlciBwcm90b2NvbC4gU3BlY2lhbCBzdXBwb3J0IGlzIHByb3ZpZGVkIGZvciBhcnJheXMsIHN0cmluZ3MsXG4gKiAgICAgYW5kIG9iamVjdHMsIHNvIHRoZXkgbmVlZCBub3QgaW1wbGVtZW50IHRoZSBwcm90b2NvbC5cbiAqIEBwYXJhbSB7bW9kdWxlOnhkdWNlLXRvb2xzLkl0ZXJhYmxlfSBjb2xsZWN0aW9uIFRoZSBpbnB1dCBjb2xsZWN0aW9uLiBUaGUgb25seVxuICogICAgIHJlcXVpcmVtZW50IG9mIHRoaXMgY29sbGVjdGlvbiBpcyB0aGF0IGl0IGltcGxlbWVudCB0aGUgYGl0ZXJhdG9yYFxuICogICAgIHByb3RvY29sLiBTcGVjaWFsIHN1cHBvcnQgaXMgcHJvdmlkZWQgYnkgdGhlIGxpYnJhcnkgZm9yIG9iamVjdHMsIHRvIHRoZXlcbiAqICAgICBjYW4gYWxzbyBiZSB1c2VkLlxuICogQHBhcmFtIHttb2R1bGU6eGR1Y2UtdG9vbHMuVHJhbnNkdWNlckZ1bmN0aW9ufSBbeGZvcm1dIEEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIGFcbiAqICAgICB0cmFuc2R1Y2VyIG9iamVjdCB0aGF0IGRlZmluZXMgdGhlIHRyYW5zZm9ybWF0aW9uIGJlaW5nIGRvbmUgdG8gdGhlIGlucHV0XG4gKiAgICAgY29sbGVjdGlvbidzIGVsZW1lbnRzLiBBbnkgb2YgdGhlIHRyYW5zZHVjZXJzIGluIHRoZVxuICogICAgIHtAbGluayBtb2R1bGU6eGR1Y2V8eGR1Y2V9IG1ub2R1bGUgY2FuIHByb2R1Y2UgYSBzdWl0YWJsZSB0cmFuc2R1Y2VyXG4gKiAgICAgZnVuY3Rpb24uIElmIHRoaXMgaXNuJ3QgcHJlc2VudCwgdGhlIGlucHV0IGNvbGxlY3Rpb24gd2lsbCBzaW1wbHkgYmVcbiAqICAgICByZWR1Y2VkIGludG8gdGhlIHRhcmdldCBjb2xsZWN0aW9uIHdpdGhvdXQgdHJhbnNmb3JtYXRpb24uXG4gKiBAcmV0dXJuIHttb2R1bGU6eGR1Y2UtdG9vbHMuUmVkdWNpYmxlfSBUaGUgYHRhcmdldGAgY29sbGVjdGlvbiwgd2l0aCBhbGwgb2YgdGhlXG4gKiAgICAgdHJhbmZvcm1lZCBpbnB1dCBjb2xsZWN0aW9uIGVsZW1lbnRzIHJlZHVjZWQgb250byBpdC5cbiAqL1xuZnVuY3Rpb24gaW50byh0YXJnZXQsIGNvbGxlY3Rpb24sIHhmb3JtKSB7XG4gIHN3aXRjaCAodHJ1ZSkge1xuICAgIGNhc2UgaXNBcnJheSh0YXJnZXQpOlxuICAgICAgcmV0dXJuIHRyYW5zZHVjZShjb2xsZWN0aW9uLCB4Zm9ybSwgdG9SZWR1Y2VyKFtdKSwgdGFyZ2V0KTtcbiAgICBjYXNlIGlzT2JqZWN0KHRhcmdldCk6XG4gICAgICByZXR1cm4gdHJhbnNkdWNlKGNvbGxlY3Rpb24sIHhmb3JtLCB0b1JlZHVjZXIoe30pLCB0YXJnZXQpO1xuICAgIGNhc2UgaXNTdHJpbmcodGFyZ2V0KTpcbiAgICAgIHJldHVybiB0cmFuc2R1Y2UoY29sbGVjdGlvbiwgeGZvcm0sIHRvUmVkdWNlcihcIlwiKSwgdGFyZ2V0KTtcbiAgICBjYXNlIGlzSW1wbGVtZW50ZWQodGFyZ2V0LCBcInN0ZXBcIik6XG4gICAgICByZXR1cm4gdHJhbnNkdWNlKGNvbGxlY3Rpb24sIHhmb3JtLCB0YXJnZXQsIHRhcmdldCk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IEVycm9yKGBDYW5ub3QgcmVkdWNlIGNvbGxlY3Rpb24gaW50byAke3RhcmdldH06ICR7Y29sbGVjdGlvbn1gKTtcbiAgfVxufVxuXG4vKipcbiAqIENvbXBvc2VzIHR3byBvciBtb3JlIHRyYW5zZHVjZXIgZnVuY3Rpb25zIGludG8gYSBzaW5nbGUgdHJhbnNkdWNlciBmdW5jdGlvbi5cbiAqXG4gKiBFYWNoIGZ1bmN0aW9uIHRoYXQgdGFrZXMgYSB0cmFuc2R1Y2VyIGZ1bmN0aW9uXG4gKiAoYHtAbGluayBtb2R1bGU6eGR1Y2Uuc2VxdWVuY2V8c2VxdWVuY2V9YCwgYHtAbGluayBtb2R1bGU6eGR1Y2UuaW50b3xpbnRvfWAsXG4gKiBldGMuKSBpcyBvbmx5IGNhcGFibGUgb2YgYWNjZXB0aW5nIG9uZSBvZiB0aGVtLiBJZiB0aGVyZSBpcyBhIG5lZWQgdG8gaGF2ZVxuICogc2V2ZXJhbCB0cmFuc2R1Y2VycyBjaGFpbmVkIHRvZ2V0aGVyLCB0aGVuIHVzZSBgY29tcG9zZWAgdG8gY3JlYXRlIGFcbiAqIHRyYW5zZHVjZXIgZnVuY3Rpb24gdGhhdCBkb2VzIHdoYXQgYWxsIG9mIHRoZW0gZG8uXG4gKlxuICogTk9URTogSW4gZnVuY3Rpb25hbCBwcm9ncmFtbWluZywgYSBjb21wb3NlIGZ1bmN0aW9uIGlzIGdlbmVyYWxseSBvcmRlcmVkIHNvXG4gKiB0aGF0IHRoZSBmaXJzdC1leGVjdXRlZCBmdW5jdGlvbiBpcyBsaXN0ZWQgbGFzdC4gVGhpcyBpcyBkb25lIGluIHRoZSBvcHBvc2l0ZVxuICogd2F5LCB3aXRoIHRoZSBmaXJzdCB0cmFuc2R1Y2VyIGV4ZWN1dGluZyBmaXJzdCwgZXRjLiBUaGlzIGlzIGEgbW9yZSBuYXR1cmFsXG4gKiBvcmRlcmluZyBmb3IgdHJhbnNkdWNlciBmdW5jdGlvbnMgYmVjYXVzZSB0aGVyZSBpcyBhIHZlcnkgcmVhbCBkaXJlY3Rpb25hbFxuICogcHVsbCBvZiBlbGVtZW50cyB0aHJvdWdoIGEgY2hhaW4gb2YgY29tcG9zZWQgdHJhbnNkdWNlciBmdW5jdGlvbnMuXG4gKlxuICogYGBgXG4gKiBpbXBvcnQgeyBjb21wb3NlLCBzZXF1ZW5jZSB9IGZyb20gXCJAY2hhbmtvL3hkdWNlXCI7XG4gKiBpbXBvcnQgeyBtYXAsIGZpbHRlciwgdGFrZSB9IGZyb20gXCJAY2hhbmtvL3RyYW5zZHVjZXJzXCI7XG4gKlxuICogY29uc3QgYWRkMSA9IHggPT4geCArIDE7XG4gKiBjb25zdCBvZGQgPSB4ID0+IHggJSAyICE9PSAwO1xuICpcbiAqIGNvbnN0IHhmb3JtID0gY29tcG9zZShtYXAoYWRkMSksIGZpbHRlcihvZGQpLCB0YWtlKDMpKTtcbiAqXG4gKiBjb25zdCByZXN1bHQgPSBzZXF1ZW5jZShbMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTBdLCB4Zm9ybSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQpOyAgIC8vIC0+IFszLCA1LCA3XTtcbiAqIGBgYFxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwYXJhbSB7Li4ubW9kdWxlOnhkdWNlLXRvb2xzLlRyYW5zZHVjZXJGdW5jdGlvbn0gZm5zIE9uZSBvciBtb3JlIGZ1bmN0aW9uIHRoYXQgZWFjaFxuICogICAgIGNyZWF0ZSBhIHRyYW5zZHVjZXIgb2JqZWN0IHRoYXQgZGVmaW5lcyB0aGUgdHJhbnNmb3JtYXRpb24gYmVpbmcgZG9uZSB0b1xuICogICAgIGEgY29sbGVjdGlvbidzIGVsZW1lbnRzLiBBbnkgb2YgdGhlIHRyYW5zZHVjZXJzIGluIHRoZVxuICogICAgIHtAbGluayBtb2R1bGU6eGR1Y2V8eGR1Y2V9IG1vZHVsZSBjYW4gcHJvZHVjZSBhIHN1aXRhYmxlIHRyYW5zZHVjZXJcbiAqICAgICBmdW5jdGlvbi5cbiAqIEByZXR1cm4ge21vZHVsZTp4ZHVjZS10b29scy5UcmFuc2R1Y2VyRnVuY3Rpb259IEEgdHJhbnNkdWNlciBmdW5jdGlvbiB0aGF0IHByb2R1Y2VzXG4gKiAgICAgYSB0cmFuc2R1Y2VyIG9iamVjdCB0aGF0IHBlcmZvcm1zICphbGwqIG9mIHRoZSB0cmFuc2Zvcm1hdGlvbnMgb2YgdGhlXG4gKiAgICAgb2JqZWN0cyBwcm9kdWNlZCBieSB0aGUgaW5wdXQgdHJhbnNkdWNlciBmdW5jdGlvbnMuXG4gKi9cbmZ1bmN0aW9uIGNvbXBvc2UoLi4uZm5zKSB7XG4gIGNvbnN0IHJldmVyc2VkID0gZm5zLnJldmVyc2UoKTtcbiAgcmV0dXJuIHZhbHVlID0+IHJldmVyc2VkLnJlZHVjZSgoYWNjLCBmbikgPT4gZm4oYWNjKSwgdmFsdWUpO1xufVxuXG5leHBvcnQge1xuICB0cmFuc2R1Y2UsXG4gIHNlcXVlbmNlLFxuICBpbnRvLFxuICBhc0FycmF5LFxuICBhc09iamVjdCxcbiAgYXNTdHJpbmcsXG4gIGFzSXRlcmF0b3IsXG4gIGNvbXBvc2UsXG4gIHRvUmVkdWNlcixcbiAgdG9GdW5jdGlvblxufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG5pbXBvcnQgeyBwcm90b2NvbHMgYXMgcCwgdG9UcmFuc2R1Y2VyIH0gZnJvbSBcIkBjaGFua28veGRjb3JlXCI7XG5pbXBvcnQgeyBwYXJzZUZ1bmN0aW9uQXJncywgc2FtZVZhbHVlWmVybyB9IGZyb20gXCJtb2R1bGVzL3V0aWxzXCI7XG5pbXBvcnQgeyBzZXF1ZW5jZSB9IGZyb20gXCJtb2R1bGVzL3RyYW5zZHVjdGlvblwiO1xuXG5mdW5jdGlvbiB1bmlxdWVXaXRoKGNvbGxlY3Rpb24sIGZuKSB7XG4gIGNvbnN0IFtjb2wsIGZ1bmNdID0gcGFyc2VGdW5jdGlvbkFyZ3MoY29sbGVjdGlvbiwgZm4pO1xuICByZXR1cm4gY29sXG4gICAgPyBzZXF1ZW5jZShjb2wsIHVuaXF1ZVdpdGgoZnVuYykpXG4gICAgOiB4Zm9ybSA9PiB7XG4gICAgICAgIGNvbnN0IHVuaXF1ZXMgPSBbXTtcbiAgICAgICAgcmV0dXJuIHRvVHJhbnNkdWNlcigoYWNjLCB2YWx1ZSkgPT4ge1xuICAgICAgICAgIGlmICh1bmlxdWVzLnNvbWUodSA9PiBmdW5jKHZhbHVlLCB1KSkpIHtcbiAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgfVxuICAgICAgICAgIHVuaXF1ZXMucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgcmV0dXJuIHhmb3JtW3Auc3RlcF0oYWNjLCB2YWx1ZSk7XG4gICAgICAgIH0sIHhmb3JtKTtcbiAgICAgIH07XG59XG5cbmZ1bmN0aW9uIHVuaXF1ZUJ5KGNvbGxlY3Rpb24sIGZuKSB7XG4gIGNvbnN0IFtjb2wsIGZ1bmNdID0gcGFyc2VGdW5jdGlvbkFyZ3MoY29sbGVjdGlvbiwgZm4pO1xuICByZXR1cm4gdW5pcXVlV2l0aChjb2wsIChhLCBiKSA9PiBzYW1lVmFsdWVaZXJvKGZ1bmMoYSksIGZ1bmMoYikpKTtcbn1cblxuZnVuY3Rpb24gdW5pcXVlKGNvbGxlY3Rpb24pIHtcbiAgcmV0dXJuIHVuaXF1ZVdpdGgoY29sbGVjdGlvbiwgc2FtZVZhbHVlWmVybyk7XG59XG5cbmV4cG9ydCB7IHVuaXF1ZSwgdW5pcXVlQnksIHVuaXF1ZVdpdGggfTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG4vKipcbiAqIEEgY29sbGVjdGlvbiBvZiBtaXNjZWxsYW5lb3VzIGZ1bmN0aW9ucyB0aGF0IGRvbid0IHBhcnRpY3VsYXJseSBmaXQgYW55d2hlcmVcbiAqIGVsc2UuXG4gKlxuICogQG1vZHVsZSB4ZHVjZS91dGlsc1xuICogQHByaXZhdGVcbiAqL1xuXG5pbXBvcnQgeyBpc051bWJlciwgaXNGdW5jdGlvbiB9IGZyb20gXCJAY2hhbmtvL3hkY29yZVwiO1xuXG4vKipcbiAqIERldGVybWluZXMgZXF1YWxpdHkgYnkgdGhlIFNhbWVWYWx1ZVplcm8gbWV0aG9kLCB3aGljaCBkZWZpbmVzIHRoYXQgYE5hTmBcbiAqIGVxdWFscyBpdHNlbGYgYW5kIGArMGAgZXF1YWxzIGAtMGAuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGEgVGhlIGZpcnN0IG51bWJlciB0byBjb21wYXJlLlxuICogQHBhcmFtIHtudW1iZXJ9IGIgVGhlIHNlY29uZCBudW1iZXIgdG8gY29tcGFyZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBFaXRoZXIgYHRydWVgIGlmIHRoZSB0d28gbnVtYmVycyBhcmUgZXF1YWwsIG9yIGBmYWxzZWAgaWZcbiAqICAgICB0aGV5IGFyZSBub3QuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBzYW1lVmFsdWVaZXJvKGEsIGIpIHtcbiAgcmV0dXJuIGEgPT09IGIgfHwgKGlzTmFOKGEpICYmIGlzTmFOKGIpKTtcbn1cblxuLyoqXG4gKiBQYXJzZXMgYXJndW1lbnRzIGZvciB0cmFuc2R1Y2VycyB0aGF0IHRha2UgbnVtYmVycy4gVGhlIHR3byBhcmd1bWVudHMgYXJlXG4gKiBhIGNvbGxlY3Rpb24gYW5kIGEgbnVtYmVyLCBidXQgdGhlIGNvbGxlY3Rpb24gaXMgb3B0aW9uYWwuIFRoaXMgZnVuY3Rpb25cbiAqIHdvcmtzIG91dCB3aGV0aGVyIGEgY29sbGVjdGlvbiBleGlzdHMgYW5kIHJldHVybnMgYSBjb2xsZWN0aW9uICh3aGljaCBtYXkgYmVcbiAqIGBudWxsYCkgYW5kIGEgbnVtYmVyLlxuICpcbiAqIEBwYXJhbSB7Kn0gW2NvbGxlY3Rpb25dIEFuIG9wdGlvbmFsIGNvbGxlY3Rpb24gdGhhdCB0aGUgdHJhbnNkdWNlciB3aWxsIGFjdFxuICogICAgIHVwb24uXG4gKiBAcGFyYW0ge251bWJlcn0gbiBBIG51bWJlciB3aG9zZSBwdXJwb3NlIGRlcGVuZHMgb24gdGhlIHRyYW5zZHVjZXIuXG4gKiBAcmV0dXJucyB7QXJyYXk8KiwgbnVtYmVyPn0gQW4gYXJyYXkgY29udGFpbmluZyB0aGUgY29sbGVjdGlvbiAod2hpY2ggbWF5IGJlXG4gKiAgICAgYG51bGxgKSBhcyB0aGUgZmlyc3QgZWxlbWVudCBhbmQgdGhlIG51bWJlciBhcyB0aGUgc2Vjb25kLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gcGFyc2VOdW1iZXJBcmdzKGNvbGxlY3Rpb24sIG4pIHtcbiAgcmV0dXJuIGlzTnVtYmVyKGNvbGxlY3Rpb24pID8gW251bGwsIGNvbGxlY3Rpb25dIDogW2NvbGxlY3Rpb24sIG5dO1xufVxuXG4vKipcbiAqIFBhcnNlcyBhcmd1bWVudHMgZm9yIHRyYW5zZHVjZXJzIHRoYXQgdGFrZSBmdW5jdGlvbnMuIFRoZSB0d28gYXJndW1lbnRzIGFyZSBhXG4gKiBjb2xsZWN0aW9uIGFuZCBhIGZ1bmN0aW9uLCBidXQgdGhlIGNvbGxlY3Rpb24gaXMgb3B0aW9uYWwuIFRoaXMgZnVuY3Rpb25cbiAqIHdvcmtzIG91dCB3aGljaCBleGlzdCBhbmQgcmV0dXJucyBhIGNvbGxlY3Rpb24gKHdoaWNoIG1heSBiZSBgbnVsbGApIGFuZCBhXG4gKiBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0geyp9IFtjb2xsZWN0aW9uXSBBbiBvcHRpb25hbCBjb2xsZWN0aW9uIHRoYXQgdGhlIHRyYW5zZHVjZXIgd2lsbCBhY3RcbiAqICAgICB1cG9uLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gQSBmdW5jdGlvbiBtZWFudCB0byBhY3QgdmlhIHRoZSB0cmFuc2R1Y2VyLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gcGFyc2VGdW5jdGlvbkFyZ3MoY29sbGVjdGlvbiwgZm4pIHtcbiAgcmV0dXJuIGlzRnVuY3Rpb24oY29sbGVjdGlvbikgPyBbbnVsbCwgY29sbGVjdGlvbl0gOiBbY29sbGVjdGlvbiwgZm5dO1xufVxuXG4vKipcbiAqIEEgY29udmVuaWVuY2UgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBmaXJzdCBrZXkgYW5kIHZhbHVlIGluIGFuIG9iamVjdCBhcyBhXG4gKiB0d28tcHJvcGVydHkgb2JqZWN0LCBvbmUgcHJvcGVydHkgZm9yIHRoZSBrZXkgYW5kIG9uZSBmb3IgdGhlIHZhbHVlLiBUaGlzIGlzXG4gKiBpbnRlbmRlZCB0byB3b3JrIHdpdGggdGhlIHZhbHVlcyBwcm92aWRlZCBieSBhbiBvYmplY3QgaXRlcmF0b3IsIGFzIHRoZVxuICogc3ludGF4IG9mIG9iamVjdHMgZG9lc24ndCB3b3JrIHZlcnkgbmljZWx5IHdpdGggc2luZ2xlLXByb3BlcnR5IG9iamVjdHMuXG4gKlxuICogYGBgXG4gKiBjb25zdCBvYmogPSB7IGM6IDEsIGE6IDIsIGI6IDMgfTtcbiAqIGNvbnN0IGl0ZXIgPSBhc0l0ZXJhdG9yKG9iaik7XG4gKlxuICogbGV0IHZhbHVlID0gaXRlci5uZXh0KCkudmFsdWU7XG4gKiBjb25zb2xlLmxvZyh2YWx1ZSk7ICAgICAgICAgICAgIC8vIC0+IHsgYzogMSB9XG4gKiBjb25zb2xlLmxvZyhwcm9wZXJ0eSh2YWx1ZSkpOyAgIC8vIC0+IHsgazogXCJjXCIsIHY6IDEgfVxuICpcbiAqIHZhbHVlID0gaXRlci5uZXh0KCkudmFsdWU7XG4gKiBjb25zb2xlLmxvZyh2YWx1ZSk7ICAgICAgICAgICAgIC8vIC0+IHsgYTogMiB9XG4gKiBjb25zb2xlLmxvZyhwcm9wZXJ0eSh2YWx1ZSkpOyAgIC8vIC0+IHsgazogXCJhXCIsIHY6IDIgfVxuICpcbiAqIHZhbHVlID0gaXRlci5uZXh0KCkudmFsdWU7XG4gKiBjb25zb2xlLmxvZyh2YWx1ZSk7ICAgICAgICAgICAgIC8vIC0+IHsgYjogMyB9XG4gKiBjb25zb2xlLmxvZyhwcm9wZXJ0eSh2YWx1ZSkpOyAgIC8vIC0+IHsgazogXCJiXCIsIHY6IDMgfVxuICogYGBgXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHBhcmFtIHtvYmplY3R9IG9iaiBUaGUgb2JqZWN0IHdob3NlIGZpcnN0IHByb3BlcnR5IGlzIHJldHVybmVkLlxuICogQHJldHVybiB7bW9kdWxlOnhkdWNlLXRvb2xzLlByb3BlcnR5T2JqZWN0fSBUaGUgcHJvcGVydHkgYXMgYSB0d28tcHJvcGVydHkgb2JqZWN0LlxuICovXG5mdW5jdGlvbiBrdihvYmopIHtcbiAgY29uc3Qga2V5ID0gT2JqZWN0LmtleXMob2JqKVswXTtcbiAgcmV0dXJuIHsgazoga2V5LCB2OiBvYmpba2V5XSB9O1xufVxuXG4vKipcbiAqIEEgY29udmVuaWVuY2UgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBrZXkgb2YgdGhlIGZpcnN0IHByb3BlcnR5IG9mIGFuXG4gKiBvYmplY3QuIFRoaXMgaXMgbWVhbnQgZm9yIHVzZSB3aXRoIG9iamVjdCBpdGVyYXRvcnMgdG8gbW9yZSBjb252ZW5pZW50bHlcbiAqIGFjY2VzcyBwYXJ0cyBvZiB0aGUgc2luZ2xlLXByb3BlcnR5IG9iamVjdHMgdGhhdCB0aGV5IGVtaXQuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHBhcmFtIHtvYmplY3R9IG9iaiBUaGUgb2JqZWN0IHdob3NlIGZpcnN0IGtleSBpcyByZXR1cm5lZC5cbiAqIEByZXR1cm4geyhTdHJpbmd8U3ltYm9sKX0gVGhlIGtleSBvZiB0aGUgb2JqZWN0J3MgZmlyc3QgcHJvcGVydHkuXG4gKi9cbmZ1bmN0aW9uIGtleShvYmopIHtcbiAgcmV0dXJuIGt2KG9iaikuaztcbn1cblxuLyoqXG4gKiBBIGNvbnZlbmllbmNlIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgdmFsdWUgb2YgdGhlIGZpcnN0IHByb3BlcnR5IG9mIGFuXG4gKiBvYmplY3QuIFRoaXMgaXMgbWVhbnQgZm9yIHVzZSB3aXRoIG9iamVjdCBpdGVyYXRvcnMgdG8gbW9yZSBjb252ZW5pZW50bHlcbiAqIGFjY2VzcyBwYXJ0cyBvZiB0aGUgc2luZ2xlLXByb3BlcnR5IG9iamVjdHMgdGhhdCB0aGV5IGVtaXQuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHBhcmFtIHtvYmplY3R9IG9iaiBUaGUgb2JqZWN0IHdob3NlIGZpcnN0IHZhbHVlIGlzIHJldHVybmVkLlxuICogQHJldHVybiB7Kn0gVGhlIHZhbHVlIG9mIHRoZSBvYmplY3QncyBmaXJzdCBwcm9wZXJ0eS5cbiAqL1xuZnVuY3Rpb24gdmFsdWUob2JqKSB7XG4gIHJldHVybiBrdihvYmopLnY7XG59XG5cbi8qKlxuICogQWNjZXB0cyBhIHByZWRpY2F0ZSBmdW5jdGlvbiBhbmQgcmV0dXJucyBhIG5ldyBwcmVkaWNhdGUgZnVuY3Rpb24gd2hpY2hcbiAqIHJldHVybnMgdGhlIG9wcG9zaXRlIG9mIHRoZSBvcmlnaW5hbCBmdW5jdGlvbi5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcGFyYW0ge21vZHVsZTp4ZHVjZS5QcmVkaWNhdGVGdW5jdGlvbn0gZm4gQSBwcmVkaWNhdGUgZnVuY3Rpb24uXG4gKiBAcmV0dXJucyB7bW9kdWxlOnhkdWNlLlByZWRpY2F0ZUZ1bmN0aW9ufSBBIHByZWRpY2F0ZSBmdW5jdGlvbiB0aGF0IHJldHVybnNcbiAqICAgICB0aGUgb3Bwb3NpdGUgdmFsdWUgYXMgdGhlIHN1cHBsaWVkIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBjb21wbGVtZW50KGZuKSB7XG4gIHJldHVybiAoLi4uYXJncykgPT4gIWZuKC4uLmFyZ3MpO1xufVxuXG5leHBvcnQge1xuICBzYW1lVmFsdWVaZXJvLFxuICBwYXJzZU51bWJlckFyZ3MsXG4gIHBhcnNlRnVuY3Rpb25BcmdzLFxuICBrdixcbiAga2V5LFxuICB2YWx1ZSxcbiAgY29tcGxlbWVudFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=