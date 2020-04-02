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
         * `final` function runs at the very end to determine the end value. In the case
         * of this immutable list, the `init` function actually returns a mutable list
         * that we can add to with `step`, and then `final` turns that into an immutable
         * list to be returned. This is a textbook use of `final`; most of the time,
         * `final` will simply return the value that's passed to it, unchanged.
         *
         * With these lines of code in place, adding the protocol functions to `List`'s
         * prototype, reduction will just work.
         *
         * It is not necessary to provide these functions for native arrays, strings,
         * plain objects, or iterators, as support for them is built in.
         *
         * ## Iterators
         *
         * As mentioned above, there is a built-in protocol for iteration in JavaScript
         * since ES2015, and this module does recognize and use that protocol. (Because
         * this is a built-in protocol, even many third-party libraries take advantage
         * of it; we did not have to add the iterable protocol to the immutable `List`
         * above because immutable.js already adds it.)
         *
         * Iteratable protocol support works out of the box for any type that implements
         * it. However, there is also support built into this module for two types that
         * do not support the protocol: plain objects and functions.
         *
         * The values that come out of the iterator for plain objects are themselves
         * objects, but they're objects of only one property each, one for each property
         * in the original object. For example:
         *
         * ```
         * import { iterator } from "@chanko/xdcore";
         *
         * const obj = { c: 1, a: 2, b: 3 };
         * const iter = iterator(obj);
         * console.log(iter.next().value);   // -> { c: 1 }
         * console.log(iter.next().value);   // -> { a: 2 }
         * console.log(iter.next().value);   // -> { b: 3 }
         * console.log(iter.next().done);    // -> true
         * ```
         *
         * The ordering is the same as ordering from `Object.keys()` and the like:
         *
         * 1. String keys that are integer indices in ascending numerical order
         * 2. All other string keys in the order in which they were added to the object
         * 3. All symbol keys in the order in which they were added to the object
         *
         * Iteration support for functions happens by invoking the function for each
         * iteration and using the return value for the value of the iterator at that
         * point. Two values are fed into the function: the index of the iteration
         * (starting at 0 for the first iteration and increasing by one for each
         * subsequent iteration) and the function's return value from the previous
         * iteration (starting as `undefined` for the first iteration). The function is
         * free to use or ignore these values as it likes; all that is important is that
         * it returns a value.
         *
         * ```
         * import { iterator } from "@chanko/xdcore";
         *
         * const fn = (index, last = 1) => last * (index + 1);
         * const iter = iterator(fn);
         * console.log(iter.next().value);   // -> 1
         * console.log(iter.next().value);   // -> 2
         * console.log(iter.next().value);   // -> 6
         * console.log(iter.next().value);   // -> 24
         * console.log(iter.next().value);   // -> 120
         * ```
         *
         * This effectively calculates the factorial of `(index + 1)`. As in this
         * example, iterators created from functions can be infinite; if the function
         * returns `undefined` it'll terminate the iterator immediately.
         *
         * ## Authoring
         *
         * The tools from this module are used by the {@link module:xduce|xduce} module
         * to build its transducers, and all of those same tools are available for
         * custom transducers as well.
         *
         * In brief, a transducer works by having *transducer objects* which are formed
         * into a chain, one for each transformation. At the end of the chain is a
         * *reducer object* which describes how to create a new collection from the
         * elements that the transducer objects modified. Elements are pulled one at a
         * time through that chain, being modified, filtered out, etc. every step of the
         * way until the reducer at the end adds it into the target collection.
         *
         * Visually, a transducer that maps element values, filters them, and outputs an
         * array containing those elements would look like this:
         *
         * ```
         * +---------------+    +---------------+    +---------------+
         * |  map xducer   | -> | filter xducer | -> | array reducer |
         * +---------------+    +---------------+    +---------------+
         * ```
         *
         * There is always one reducer object at the end and an arbitrary number of
         * transducer objects before it.
         *
         * Transducer and reducer objects are structurally identical. They both are
         * required to have the three reduction protocol methods (`init`, `step`, and
         * `final`). Their difference is in their purpose.
         *
         * A reducer object is responsible for providing an initial collection (`init`),
         * adding elements one by one to that collection (`step`), and finalizing the
         * result (`final`). It is self-contained and its protocol methods don't
         * typically need to call any other reducer objects. Since it is the last object
         * in the chain, it's possible for a chain to consist of *only* a reducer (this
         * is useful for turning one kind of collection into another without changing
         * any of the elements).
         *
         * A transducer object is responsible for two things: manipulating data, and
         * then passing that data along to the next object in the chain. For that
         * reason, the `init` and `final` methods typically simply call the same method
         * on the next object and return its value (i.e., they do nothing themselves).
         * The `step` method is where the work happens, and when that work is done, it's
         * sent to the next object by calling *its* `step` method. A transducer object
         * cannot make a chain by itself; it always requires a reducer object to
         * actually put the manipulated data back together.
         *
         * The reason that a transducer object needs these protocol methods even if they
         * only call the next one is because a transducer object should not need to know
         * whether the next object in the chain is a transducer object or a reducer
         * object. All it needs to know is that there will be an object with the three
         * reduction protocol methods that it can call. (There are also edge cases where
         * a transducer object may do more with an `init` or `final` method, but those
         * are fairly rare.)
         *
         * Here is an example of transducer definitions, using the same two transducer
         * objects as in the above diagram. It defines two *transducer functions*, which
         * are functions that take a transducer or reducer object (which is the next
         * object in the chain) and return its own transducer object already chained to
         * that next object.
         *
         * ```
         * import { protocols as p } from "@chanko/xdcore";
         *
         * function mapTransducer(fn, next) {
         *   return {
         *     [p.init]: () => next[p.init](),
         *     [p.step]: (acc, value) => next[p.step](acc, fn(value)),
         *     [p.final]: value => next[p.final](value),
         *   };
         * }
         *
         * function filterTransducer(fn, next) {
         *   return {
         *     [p.init]: () => next[p.init](),
         *     [p.step]: (acc, value) => fn(value) ? next[p.step](acc, value) : acc,
         *     [p.final]: value => next[p.final](value),
         *   };
         * }
         * ```
         *
         * As expected, the `init` and `final` methods in both transducer objects simply
         * call the same functions in the next object, while the `step` function does
         * the actual work, either passing each value through the mapping function in
         * `mapTransducer` or deciding whether to add it to the collection at all in
         * `filterTransducer`.
         *
         * Since it *is* so common to create transducer objects whose `init` and `final`
         * methods simply chain to the next object, there is a helper function to make
         * transducer object creation easier. The same two transducer functions from
         * above can be written like this.
         *
         * ```
         * import { protocols as p, toTransducer } from "@chanko/xdcore";
         *
         * function mapTransducer(fn, next) {
         *   const step = (acc, value) => next[p.step](acc, fn(value));
         *   return toTransducer(step, next);
         * }
         *
         * function filterTransducer(fn, next) {
         *   const step = (acc, value) => fn(value) ? next[p.step](acc, value) : acc;
         *   return toTransducer(step, next);
         * }
         * ```
         *
         * `{@link module:xdcore.toTransducer|toTransducer}` takes a step function and
         * the next object and takes care of the `init` and `final` methods for you.
         *
         * If you plan to write your transducers to work with high-level
         * {@link module:xduce|xduce} functions like
         * `{@link module:xduce.sequence|sequence}` or
         * `{@link module:xduce.transduce|transduce}`, then this is enough. You don't
         * need to go any further. However, this is not enough for the
         * `{@link module:xdcore.reduce|reduce}` function, which expects a *reducer*
         * object, not a transducer object. (`{@link module:xduce.transduce|transduce}`
         * also expects a reducer object, but that's *in addition to* a transducer
         * object and not in place of one.) `{@link module:xdcore.reduce|reduce}`
         * doesn't care if that reducer object has other transducer objects chained to
         * it; it only cares that the whole object acts like a reducer, which it will
         * use to build a new collection.
         *
         * There is a similar function for reducer objects, called
         * `{@link module:xdcore.toReducer|toReducer}`. It takes a *reducible object*
         * and returns a reducer object for it. A reducible object is any object that
         * has the three reducer protocol functions on it to describe how a new
         * collection of its type is made; in the immutable list example above, after
         * you add the protocol methods to it, `List` is a reducible object. Arrays,
         * strings, functions, and plain objects are also reducible objects by virtue of
         * specific support built into `{@link module:xdcore.toReducer|toReducer}`.
         *
         * With these two simple functions, we can pretty easily use
         * `{@link module:xdcore.reduce|reduce}` directly to perform the transduction
         * diagrammed above.
         *
         * ```
         * import { toReducer, reduce } from "@chanko/xdcore";
         *
         * const isEven = x => x % 2 === 0;
         * const addOne = x => x + 1;
         *
         * let reducer = toReducer([]);
         * reducer = filterTransducer(isEven, reducer);
         * reducer = mapTransducer(addOne, reducer);
         *
         * const r = reduce([1, 2, 3, 4, 5], reducer, []);
         * console.log(r);   // -> [2, 4, 6]
         * ```
         *
         * There are some important points to notice about this example.
         *
         * 1. The transducer chain is built backwards, starting from the reducer and
         *    adding the transducers in reverse order. This makes sense, as each
         *    transducer function requires a reference to the following
         *    transducer/reducer object when it's called.
         * 2. This creates an array, but since
         *    `{@link module:xdcore.toReducer|toReducer}` can create a reducer object
         *    from any reducible object, we could have passed `List` to it (after adding
         *    the three protocol properties as in the earlier immutable list example)
         *    and `{@link module:xdcore.reduce|reduce}` would return an immutable list
         *    instead. (Sort of...`{@link module:xdcore.reduce|reduce}` actually only
         *    deals with `step` and `final` protocol methods because internally, it
         *    sometimes works with reducer objects that don't have an `init` protocol
         *    method, like ones created from functions. This is why
         *    `{@link module:xdcore.reduce|reduce}` takes a third parameter, called
         *    `init`. So for this to work properly with an immutable list, you would
         *    also have to pass `List().asMutable()` as the third parameter, in place of
         *    `[]` in the example code. This is not something you have to worry about
         *    with higher-level functions in the {@link module:xduce|xduce} module.)
         * 3. This is all more easily done using the {@link module:xduce|xduce} module,
         *    which handles much of this work for you. This example just shows how you
         *    can build your own transducer objects, chain them together, and use
         *    `{@link module:xdcore.reduce|reduce}` to process them.
         *
         * Here is what it would look like with the {@link module:xduce|xduce} module.
         *
         * ```
         * import { map, filter, sequence, compose } from "@chanko/xduce";
         *
         * const isEven = x => x % 2 === 0;
         * const addOne = x => x + 1;
         *
         * const r = sequence([1, 2, 3, 4, 5], compose(map(addOne), filter(isEven)));
         * console.log(r);   // -> [2, 4, 6]
         * ```
         *
         * More details are available in the documentation for the
         * {@link module:xduce|xduce} module, but basically
         * `{@link module:xduce.compose|compose}` chains transducer objects together,
         * while `{@link module:xduce.sequence|sequence}` figures out what initial
         * collection and what reducer object to use (from the input collection), chains
         * the transducer objects to the reducer object, and passes all of the relevant
         * information to `{@link module:xdcore.reduce|reduce}`.
         *
         * `{@link module:xdcore.reduce|reduce}` works in a simple way, but there is one
         * bit of special functionality that's relevant to writing transducers. If it
         * processes an element and the value returned by the reducer/transducer chain
         * is a *completed value*, it will cease the reduction right there even if there
         * are more elements in the input collection. A completed value is a value that
         * is wrapped in an object using the other two reducer protocol properties,
         * `completed` and `value`:
         *
         * ```
         * import { protocols as p } from "@chanko/xdcore";
         *
         * // A regular value
         * const value = 1729;
         *
         * // A completed version of that same value
         * const completed = {
         *   [p.completed]: true,
         *   [p.value]: 1729,
         * };
         * ```
         *
         * The reason for the long-windedness of using a wrapper is so that a completed
         * value can be completed again, making it double-wrapped. This is occasionally
         * useful in writing more complex transducers, and it is simplest to achieve
         * with a wrapper.
         *
         * A good example of the use of a completed value is the
         * `{@link module:xduce.take|take}` transducer, which returns a certain number
         * of elements and then returns no more. Here's how it would look using
         * {@link module:xduce|xduce}:
         *
         * ```
         * import { take } from "@chanko/xduce";
         * const r = take([1, 2, 3, 4, 5], 2);
         * console.log(r);   // -> [1, 2]
         * ```
         *
         * No matter how many elements are in the input collection,
         * `{@link module:xduce.take|take}` will only process a certain number (in this
         * case, 2). The input collection could even be a generator that never
         * terminates, and it would still work fine. `{@link module:xduce.take|take}`
         * does this by, at some point, returning a completed, which in turn causes
         * `{@link module:xdcore.reduce|reduce}` to stop processing.
         *
         * ```
         * import { protocols as p, toTransducer } from "@chanko/xdcore";
         *
         * function takeTransducer(n, next) {
         *   let i = 0;
         *   const step = (acc, value) => {
         *     let result = next[p.step](acc, value);
         *     if (i === n - 1) {
         *       result = {
         *         [p.completed]: true,
         *         [p.value]: result,
         *       };
         *     }
         *     i++;
         *     return result;
         *   };
         *   return toTransducer(step, next);
         * }
         * ```
         *
         * This is a bit more complex, but the gist of it is that the transducer object
         * simply passes the value on down the chain. However, if the element being
         * processed is the last one before it reaches the target number of elements,
         * the value returned from the chain is wrapped as a completed object.
         * `{@link module:xdcore.reduce|reduce}` will see this value and stop the
         * process as soon as it does.
         *
         * As you might expect, there are helper functions for writing transducers like
         * this:
         *
         * * `{@link module:xdcore.complete|complete}`
         * * `{@link module:xdcore.uncomplete|uncomplete}`
         * * `{@link module:xdcore.ensureCompleted|ensureCompleted}`
         * * `{@link module:xdcore.ensureUncompleted|ensureUncompleted}`
         * * `{@link module:xdcore.isCompleted|isCompleted}`
         *
         * The first two either wrap or unwrap a value in the completed wrapper. The
         * third and fourth do the same thing, but they only do it if it's actually
         * necessary to do so (`{@link module:xdcore.complete|complete}` will
         * double-wrap a value if passed an already-completed value;
         * `{@link module:xdcore.ensureCompleted|ensureCompleted}` will not do this
         * double wrapping). The final function simply returns whether or not the value
         * passed to it is a completed object.
         *
         * These functions mean that you should never have to work directly with either
         * the `completed` or `value` reducer protocol properties.
         *
         * With those in mind, the actual step function for the take transducer is a
         * little simpler.
         *
         * ```
         * const step = (acc, value) => {
         *   let result = next[p.step](acc, value);
         *   if (i === n - 1) {
         *     result = complete(result);
         *   }
         *   i++;
         *   return result;
         * };
         * ```
         *
         * After all that, one final bit of provided functionality: there are a series
         * of helper functions to determine the type of a value.
         *
         * * `{@link module:xdcore.isArray|isArray}`
         * * `{@link module:xdcore.isFunction|isFunction}`
         * * `{@link module:xdcore.isGeneratorFunction|isGeneratorFunction}`
         * * `{@link module:xdcore.isNumber|isNumber}`
         * * `{@link module:xdcore.isObject|isObject}`
         * * `{@link module:xdcore.isString|isString}`
         *
         * These all work as you might expect, with a few caveats.
         *
         * 1. `{@link module:xdcore.isFunction|isFunction}` will return `false` if
         *    passed a generator function. Use
         *    `{@link module:xdcore.isGeneratorFunction|isGeneratorFunction}` to check
         *    for those.
         * 2. `{@link module:xdcore.isNumber|isNumber}` is only for concrete numbers
         *    that are not strings. It will return `false` for `Infinity`, `NaN`, and
         *    things like `"1729"`.
         * 3. `{@link module:xdcore.isObject|isObject}` returns `true` only for plain
         *    objects. It will return `false` for any other sort of object, including
         *    things like arrays, objects with constructors (from classes or from
         *    constructor functions), and `null` (which famously returns `"object"` when
         *    `typeof` is used on it).
         * 4. `{@link module:xdcore.isArray|isArray}` is just the regular
         *    `Array.isArray`, packaged here for consistency.
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
         * Note that a *transducer object* has exactly the same structure. The only
         * differences are that the step function in a transducer object modifies the
         * elements before it reduces them, while a reducer object will not; and a
         * transducer object will call the equivalent functions in the next object in
         * the chain, while a reducer object will not. As a corollary, every reducer
         * object is also a transducer object, but the converse is not true.
         *
         * @typedef ReducerObject
         * @memberof module:xdcore
         * @property {module:xdcore.InitFunction} Symbol.for("reducer/init") A function
         *     that can create a new, empty copy of the reducible type.
         * @property {module:xdcore.StepFunction} Symbol.for("reducer/step") A function
         *     that can accept a value of the reducible type and a new element to be
         *     added to it and return the reducible with the new element incorporated.
         * @property {module:xdcore.FinalFunction} Symbol.for("reducer/final") A
         *     function that accepts a value of the reducible type and returns the same
         *     value with any final modifications that might be necessary for it.
         */

        /**
         * A collection that carries its own information about how to produce itself.
         * This is structurally the same as a
         * `{@link module:xdcore.ReducerObject|ReducerObject}`. It is given a distinct
         * type because it's assumed that this type will be a collection with the
         * reducer protocol methods added to it; a
         * `{@link module:xdcore.ReducerObject|ReducerObject}` is normally an object
         * that has *only* those protocol methods and serves no purpose other than
         * providing reduction information.
         *
         * @typedef {module:xdcore.ReducerObject} Reducible
         * @memberof module:xdcore
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
         * Iterators created from functions are, by default, infinite since there is no
         * condition for them to not be able to be applied one more time. To create a
         * finite iterator from a function, have it return `undefined` at some point.
         * When a return value of `undefined` is encountered, `iterator` will terminate
         * the iterator, setting its next `done` property to `true`.
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
         * @returns {module:xdcore.ReducerObject} An object containing protocol
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
         * @param {module:xdcore.TransducerFunction} transducerFn A transducer function
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


        function toFunction(transducerFn, reducer) {
          const r = typeof reducer === "function" ? toReducer(reducer) : reducer;
          const result = transducerFn(r);
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
 * A collection that fully supports the iterable and reducer protocols. Any
 * value that supports all four can be used by
 * `{@link module:xduce.sequence|sequence}`; those that do not support all four
 * will have to be used with lower-level functions where some of the protocols
 * aren't necessary because the values they would provide are explicitly passed.
 *
 * @typedef Collection
 * @memberof module:xduce
 * @property {external:Iterator} Symbol.iterator An iterator, according to the
 *     JavaScript standard, that provides a `next()` function that can be called
 *     repeatedly.
 * @property {module:xdcore.InitFunction} Symbol.for("reducer/init") A function
 *     that can create a new, empty copy of the collection.
 * @property {module:xdcore.StepFunction} Symbol.for("reducer/step") A function
 *     that can accept a collection and a new element to be added to it and
 *     return the collection with the new element incorporated.
 * @property {module:xdcore.FinalFunction} Symbol.for("reducer/final") A
 *     function that accepts a collection and returns the same collection with
 *     any final modifications that might be necessary for it.
 */

/**
 * An object reporesenting a single property on another object. One of these
 * objects will have two keys: `k`, which represents the key of one of the
 * other project's properties, and `v`, which represents the value. This is the
 * format output by convenience functions that make it easier to work with
 * objects in transducers.
 *
 * @typedef PropertyObject
 * @memberof module:xduce
 * @property {(string|Symbol)} k The key of the property represented by this
 *     object.
 * @property {*} v The value of the property represented by this object.
 */

/**
 * A function which takes some number of arguments and returns `true` or `false`
 * when applied to those arguments depending on the rules that the function
 * implements.
 *
 * @callback PredicateFunction
 * @memberof module:xduce
 * @param {...*} args The arguments passed to the function. The number and
 *     types of these arguments vary depending on what the function is doing.
 * @returns {boolean} Either `true` or `false` depending on whether the
 *     arguments pass whatever test the function is specifying.
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
  return collection ? Object(modules_transduction__WEBPACK_IMPORTED_MODULE_2__["sequence"])(collection, identity()) : next => Object(_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["toTransducer"])((acc, value) => next[_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](acc, value), next);
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
  return collection ? Object(modules_transduction__WEBPACK_IMPORTED_MODULE_2__["sequence"])(collection, flatten()) : next => Object(_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["toTransducer"])((acc, value) => {
    const subTransducer = Object(_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["toTransducer"])((acc, value) => {
      const v = next[_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](acc, value);
      return Object(_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["isCompleted"])(v) ? Object(_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["complete"])(v) : v;
    }, next);
    return Object(_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["isIterable"])(value) ? Object(_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["reduce"])(value, subTransducer, acc) : subTransducer[_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](acc, value);
  }, next);
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
  return col ? Object(modules_transduction__WEBPACK_IMPORTED_MODULE_2__["sequence"])(col, repeat(num)) : next => Object(_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["toTransducer"])((acc, value) => {
    let result = acc;

    for (let i = 0; i < num; i++) {
      result = next[_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](result, value);

      if (Object(_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["isCompleted"])(result)) {
        break;
      }
    }

    return result;
  }, next);
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
  return col ? Object(modules_transduction__WEBPACK_IMPORTED_MODULE_2__["sequence"])(col, chunk(num)) : next => {
    let count = 0;
    let part = [];
    return {
      [_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["protocols"].init]() {
        return next[_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["protocols"].init]();
      },

      [_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](acc, value) {
        part[count++] = value;

        if (count === num) {
          const out = part.slice(0, num);
          part = [];
          count = 0;
          return next[_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](acc, out);
        }

        return acc;
      },

      [_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["protocols"].final](value) {
        if (count > 0) {
          return Object(_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["ensureUncompleted"])(next[_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](value, part.slice(0, count)));
        }

        return next[_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["protocols"].final](value);
      }

    };
  };
}

function chunkBy(collection, fn) {
  const [col, func] = Object(modules_utils__WEBPACK_IMPORTED_MODULE_1__["parseFunctionArgs"])(collection, fn);
  return col ? Object(modules_transduction__WEBPACK_IMPORTED_MODULE_2__["sequence"])(col, chunkBy(func)) : next => {
    let part = [];
    let last = NO_VALUE;
    return {
      [_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["protocols"].init]() {
        return next[_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["protocols"].init]();
      },

      [_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](acc, value) {
        const current = func(value);
        let result = acc;

        if (last === NO_VALUE || Object(modules_utils__WEBPACK_IMPORTED_MODULE_1__["sameValueZero"])(current, last)) {
          part.push(value);
        } else {
          result = next[_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](result, part);
          part = [value];
        }

        last = current;
        return result;
      },

      [_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["protocols"].final](value) {
        const count = part.length;

        if (count > 0) {
          return Object(_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["ensureUncompleted"])(next[_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](value, part.slice(0, count)));
        }

        return next[_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["protocols"].final](value);
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
  return col ? Object(modules_transduction__WEBPACK_IMPORTED_MODULE_2__["sequence"])(col, distinctWith(func)) : next => {
    let last = NO_VALUE;
    return Object(_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["toTransducer"])((acc, value) => {
      if (last !== NO_VALUE && func(value, last)) {
        return acc;
      }

      last = value;
      return next[_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](acc, value);
    }, next);
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
  return col ? Object(modules_transduction__WEBPACK_IMPORTED_MODULE_2__["sequence"])(col, drop(num)) : next => {
    let i = 0;
    return Object(_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["toTransducer"])((acc, value) => i++ < num ? acc : next[_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](acc, value), next);
  };
}

function dropWhile(collection, fn) {
  const [col, func] = Object(modules_utils__WEBPACK_IMPORTED_MODULE_1__["parseFunctionArgs"])(collection, fn);
  return col ? Object(modules_transduction__WEBPACK_IMPORTED_MODULE_2__["sequence"])(col, dropWhile(func)) : next => {
    let dropping = true;
    return Object(_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["toTransducer"])((acc, value) => {
      if (dropping) {
        if (func(value)) {
          return acc;
        }

        dropping = false;
      }

      return next[_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](acc, value);
    }, next);
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
  return col ? Object(modules_transduction__WEBPACK_IMPORTED_MODULE_2__["sequence"])(col, filter(func)) : next => Object(_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["toTransducer"])((acc, value) => func(value) ? next[_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](acc, value) : acc, next);
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
  return col ? Object(modules_transduction__WEBPACK_IMPORTED_MODULE_2__["sequence"])(col, map(func)) : next => Object(_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["toTransducer"])((acc, value) => next[_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](acc, func(value)), next);
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
  return col ? Object(modules_transduction__WEBPACK_IMPORTED_MODULE_2__["sequence"])(col, take(num)) : next => {
    let i = 0;
    return Object(_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["toTransducer"])((acc, value) => {
      let result = acc;

      if (i < num) {
        result = next[_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](acc, value);

        if (i === num - 1) {
          result = Object(_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["ensureCompleted"])(result);
        }
      }

      i++;
      return result;
    }, next);
  };
}

function takeWhile(collection, fn) {
  const [col, func] = Object(modules_utils__WEBPACK_IMPORTED_MODULE_1__["parseFunctionArgs"])(collection, fn);
  return col ? Object(modules_transduction__WEBPACK_IMPORTED_MODULE_2__["sequence"])(col, takeWhile(func)) : next => Object(_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["toTransducer"])((acc, value) => func(value) ? next[_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](acc, value) : Object(_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["ensureCompleted"])(acc), next);
}

function takeNth(collection, n) {
  const [col, num] = Object(modules_utils__WEBPACK_IMPORTED_MODULE_1__["parseNumberArgs"])(collection, n);
  return col ? Object(modules_transduction__WEBPACK_IMPORTED_MODULE_2__["sequence"])(col, takeNth(num)) : next => {
    let i = -1;
    return Object(_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["toTransducer"])((acc, value) => ++i % num === 0 ? next[_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](acc, value) : acc, next);
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toReducer", function() { return toReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toFunction", function() { return toFunction; });
/* harmony import */ var _chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chanko/xdcore */ "../xdcore/lib/chanko-xdcore.js");
/* harmony import */ var _chanko_xdcore__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__);
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
 * @module xduce/transduction
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
 * @param {external:Iterable} collection the input collection that the produced
 *     iterator will be iterating over.
 * @param {module:xdcore.TransducerFunction} transducerFn A function that
 *     creates a transducer object that defines the transformation being done to
 *     the iterator's elements. Any of the transducers in the
 *     {@link module:xduce|xduce} module can produce a suitable transducer
 *     function.
 * @returns {external:Iterator} An iterator that will transform its input
 *     elements using the transducer function as its `next()` function is
 *     called.
 * @private
 */

function transducingIterator(collection, transducerFn) {
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
  const transducer = transducerFn(stepReducer);
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
        transducer[_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["protocols"].final](result);
        break;
      }

      completed = Object(_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["isCompleted"])(transducer[_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](result, stepValue.value));
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
 * initial value is determined from the reducer `init` protocol property on the
 * reducer. Note however that many reducers may not provide an initial value,
 * and in those cases it will *have* to be passed as a parameter.
 *
 * ```
 * import { map, transduce, toReducer } from "@chanko/xduce";
 *
 * const transducerFn = map(x => x + 1);
 *
 * const arrayReducer = toReducer([]);
 * const stringReducer = toReducer("");
 *
 * let result = transduce([1, 2, 3, 4, 5], transducerFn, arrayReducer);
 * console.log(result);   // -> [2, 3, 4, 5, 6]
 *
 * result = transduce([1, 2, 3, 4, 5], transducerFn, stringReducer);
 * console.log(result);   // -> "23456"
 *
 * result = transduce('12345', transducerFn, arrayReducer);
 * console.log(result);   // -> [2, 3, 4, 5, 6]
 *
 * result = transduce('12345', transducerFn, stringReducer);
 * console.log(result);   // -> "23456"
 * ```
 *
 * These examples illustrate a number of important concepts. First of all, the
 * transducer function is independent of the type of the collection; the same
 * transducer function is used no matter the type of input or output
 * collections. Secondly, two reducers are defined. These are objects that
 * conform to the reducer protocol and that know how to produce the output
 * collection of choice. In this case, the reducers are produced by the
 * `{@link module:xdcore.toReducer|toReducer} `function that this module
 * re-exports from the {@link module:xdcore|xdcore} module. Because these
 * reducers do have `init` protocol properties, the `transduce` calls do not
 * require explicit initial collections.
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
 * @param {(object|function|external:Iterable)} collection The input collection.
 *     The only requirement of this collection is that it implement the
 *     `iterable` protocol. Special support is provided by the library for
 *     functions and plain objects, so they can also be used.
 * @param {module:xdcore.TransducerFunction} transducerFn A function that
 *     creates a transducer object that defines the transformation being done to
 *     the input collection's elements. Any of the transducers in this module
 *     can produce a suitable transducer function.
 * @param {(module:xdcore.StepFunction|module:xdcore.ReducerObject)} reducer
 *     Either a function or a reducer object that implements the transducer
 *     protocols (`init` is  only required if the `init` parameter is not
 *     present). This object must know how to produce an output value through
 *     its `step` and `result` protocol functions. If this parameter is a
 *     function, then it is turned into a valid reducer object.
 * @param {*} [init] A value of the same type as the output value. If this is
 *     not present, then the reducer's `init` protocol function is called
 *     instead to get the initial collection. If it is present and not empty,
 *     then the existing elements remain and the transformed input collection
 *     elements are added to it.
 * @returns {*} A value of a type determined by the passed reducer. This is
 *     usually a collection, but if the reducer produces a scalar value, then
 *     this will be a scalar value of that type.
 */


function transduce(collection, transducerFn, reducer, init) {
  const r = Object(_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(reducer) ? toReducer(reducer) : reducer;
  const i = init !== null && init !== void 0 ? init : r[_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["protocols"].init]();
  const transducer = transducerFn ? transducerFn(r) : r;
  return Object(_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["reduce"])(collection, transducer, i);
}
/**
 * Transforms the elements of the input collection and reduces them into a new
 * array.
 *
 * The transducer function is optional. If it isn't present, this function just
 * converts the input collection into an array.
 *
 * ```
 * import { asArray, map } from "@chanko/xduce";
 *
 * const transducerFn = map(x => x + 1);
 *
 * let result = asArray([1, 2, 3, 4, 5], transducerFn);
 * console.log(result);   // -> [2, 3, 4, 5, 6]
 *
 * result = asArray('12345', transducerFn);
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
 * @param {(object|function|external:Iterable)} collection The input collection.
 *     The only requirement of this collection is that it implement the
 *     `iterable` protocol. Special support is provided by the library for
 *     functions and objects, so they can also be used.
 * @param {module:xdcore.TransducerFunction} [transducerFn] A function that
 *     creates a transducer object that defines the transformation being done to
 *     the input collection's elements. Any of the transducers in this module
 *     can produce a suitable transducer function. If this isn't present, the
 *     input collection will simply be reduced into an array without
 *     transformation.
 * @returns {array} An array containing all of the transformed values from the
 *     input collection elements.
 */


function asArray(collection, transducerFn) {
  return transduce(collection, transducerFn, toReducer([]));
}
/**
 * Transforms the elements of the input collection and reduces them into a new
 * object.
 *
 * The transducer function is optional. If it isn't present, this function just
 * converts the input collection into an object. When this happens, if the input
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
 * const transducerFn = map(fn);
 *
 * let result = asObject({ a: 1, b: 2 }, transducerFn);
 * console.log(result);   // -> { a: 2, b: 3 }
 *
 * result = asObject([{ a: 1 }, { b: 2 }], transducerFn);
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
 * @param {(object|function|external:Iterable)} collection The input collection.
 *     The only requirement of this collection is that it implement the
 *     `iterable` protocol. Special support is provided by the library for
 *     functions and objects, so they can also be used.
 * @param {module:xdcore.TransducerFunction} [transducerFn] A function that
 *     creates a transducer object that defines the transformation being done to
 *     the input collection's elements. Any of the transducers in this
 *     module can produce a suitable transducer function. If this isn't present,
 *     the input collection will simply be reduced into an object without
 *     transformation.
 * @returns {object} An object containing all of the transformed values from the
 *     input collection elements.
 */


function asObject(collection, transducerFn) {
  return transduce(collection, transducerFn, toReducer({}));
}
/**
 * Transforms the elements of the input collection and reduces them into a new
 * string.
 *
 * The transducer function is optional. If it isn't present, this function just
 * converts the input collection into an string. If this is the case and the
 * input collection is an object, only the values will be concatenated into a
 * string.
 *
 * Otherwise, transforming objects into strings only makes much sense if the
 * transducer produces only a single output from each of the objects key/value
 * pairs.
 *
 * ```
 * import { transduce, key, map } from "@chanko/xduce";
 *
 * const transducerFn = map(x => x.toUpperCase());
 *
 * let result = asString('hello', transducerFn);
 * console.log(result);   // -> "HELLO"
 *
 * result = asString(['h', 'e', 'l', 'l', 'o'], transducerFn);
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
 * @param {(object|function|external:Iterable)} collection The input collection.
 *     The only requirement of this collection is that it implement the
 *     `iterable` protocol. Special support is provided by the library for
 *     functions and objects, so they can also be used.
 * @param {module:xdcore.TransducerFunction} [transducerFn] A function that
 *     creates a transducer object that defines the transformation being done to
 *     the input collection's elements. Any of the transducers in this module
 *     can produce a suitable transducer function. If this isn't present, the
 *     input collection will simply be reduced into a string without
 *     transformation.
 * @returns {string} A string containing all of the transformed values from the
 *     input collection elements.
 */


function asString(collection, transducerFn) {
  return transduce(collection, transducerFn, toReducer(""));
}
/**
 * Transforms the elements of the input collection and reduces them into a new
 * iterator.
 *
 * The transducer function is optional. If it isn't present, this function just
 * converts the input collection into an iterator.
 *
 * *(The results here are shown passed through `asArray` because there's no
 * printable representation of an iterator to show. The `asArray` calls are for
 * demonstration purposes only.)*
 *
 * ```
 * import { asIterator, asArray, map } from "@chanko/xduce";
 *
 * const transducerFn = map(x => x + 1);
 * function* five() {
 *   for (let i = 1; i <= 5; ++i) {
 *     yield i;
 *   }
 * };
 *
 * let result = asIterator(five(), transducerFn);
 * console.log(asArray(result));   // -> [2, 3, 4, 5, 6]
 *
 * result = asIterator([1, 2, 3, 4, 5], transducerFn);
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
 * @param {(object|function|external:Iterable)} collection The input collection.
 *     The only requirement of this collection is that it implement the
 *     `iterable` protocol. Special support is provided by the library for
 *     functions and objects, so they can also be used.
 * @param {module:xdcore.TransducerFunction} [transducerFn] A function that
 *     creates a transducer object that defines the transformation being done to
 *     the input collection's elements. Any of the transducers in this module
 *     can produce a suitable transducer function. If this isn't present, the
 *     input collection will simply be reduced into an iterator without
 *     transformation.
 * @returns {external:Iterator} An iterator containing all of the transformed
 *     values from the input collection elements.
 */


function asIterator(collection, transducerFn) {
  return transducerFn ? transducingIterator(collection, transducerFn) : Object(_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["iterator"])(collection);
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
 * the last two functions) but also the `init`, `result`, and `step` reducer
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
 * const transducerFn = map(x => x + 1);
 *
 * let result = sequence([1, 2, 3, 4, 5], transducerFn);
 * console.log(result);   // -> result = [2, 3, 4, 5, 6]
 *
 * result = sequence('12345', transducerFn);
 * console.log(result);   // -> result = '23456'
 * ```
 *
 * These examples are identical to some of the examples from the `asX`
 * functions. Other examples are not possible with `sequence` because they have
 * different input and output collection types.
 *
 * @memberof module:xduce
 * @param {(array|object|string|external:Iterator|module:xduce.Collection)}
 *     collection The input collection. This must implement the `iterator`,
 *     `init`, `result`, and `step` protocols. Special support is provided for
 *     arrays, strings, objects, and iterators, so they do not have to implement
 *     any protocols.
 * @param {module:xdcore.TransducerFunction} transducerFn A function that
 *     creates a transducer object that defines the transformation being done to
 *     the input collection's elements. Any of the transducers in this module
 *     can produce a suitable transducer function.
 * @returns {(array|object|string|external:Iterator|module:xduce.Collection)} A
 *     collection of the same type as the input collection, containing all of
 *     the transformed values from the input collection elements.
 */


function sequence(collection, transducerFn) {
  switch (true) {
    case Object(_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["isArray"])(collection):
      return asArray(collection, transducerFn);

    case Object(_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["isObject"])(collection):
      return asObject(collection, transducerFn);

    case Object(_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["isString"])(collection):
      return asString(collection, transducerFn);

    case Object(_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["isImplemented"])(collection, "step"):
      return transduce(collection, transducerFn, collection);

    case Object(_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["isImplemented"])(collection, "iterator"):
      return asIterator(collection, transducerFn);

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
 * that the collection implement the `init`, `result`, and `step` reducer
 * protocol functions.
 *
 * If no transducer function is provided, the input collection elements are
 * reduced into the target collection without being transformed. This can be
 * used to convert one kind of collection into another.
 *
 * ```
 * import { into, map } from "@chanko/xduce";
 *
 * const transducerFn = map(x => x + 1);
 *
 * let result = into([], [1, 2, 3, 4, 5], transducerFn);
 * console.log(result);   // -> [2, 3, 4, 5, 6]
 *
 * result = into("", [1, 2, 3, 4, 5], transducerFn);
 * console.log(result);   // -> "23456"
 *
 * result = into([], "12345", transducerFn);
 * console.log(result);   // -> [2, 3, 4, 5, 6]
 *
 * result = into("", "12345", transducerFn);
 * console.log(result);   // -> "23456"
 * ```
 *
 * @memberof module:xduce
 * @param {(array|object|string|module:xdcore.Reducible)} target The collection
 *     into which all of the transformed input collection elements will be
 *     reduced. This collection must implement the `init`, `final`, and `step`
 *     protocol functions from the reducer protocol. Special support is provided
 *     for arrays, strings, and objects, so they need not implement the
 *     protocol.
 * @param {(object|function|external:Iterable)} collection The input collection.
 *     The only requirement of this collection is that it implement the
 *     `iterable` protocol. Special support is provided by the library for
 *     functions and objects, to they can also be used.
 * @param {module:xdcore.TransducerFunction} [transducerFn] A function that
 *     creates a transducer object that defines the transformation being done to
 *     the input collection's elements. Any of the transducers in this module
 *     can produce a suitable transducer function. If this isn't present, the
 *     input collection will simply be reduced into the target collection
 *     without transformation.
 * @return {(array|object|string|module:xdcore.Reducible)} The `target`
 *     collection, with all of the tranformed input collection elements reduced
 *     onto it.
 */


function into(target, collection, transducerFn) {
  switch (true) {
    case Object(_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["isArray"])(target):
      return transduce(collection, transducerFn, toReducer([]), target);

    case Object(_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["isObject"])(target):
      return transduce(collection, transducerFn, toReducer({}), target);

    case Object(_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["isString"])(target):
      return transduce(collection, transducerFn, toReducer(""), target);

    case Object(_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["isImplemented"])(target, "step"):
      return transduce(collection, transducerFn, target, target);

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
 * pull of elements through a chain of composed transducers.
 *
 * ```
 * import { compose, sequence, map, filter, take } from "@chanko/xduce";
 *
 * const add1 = x => x + 1;
 * const odd = x => x % 2 !== 0;
 *
 * const transducerFn = compose(map(add1), filter(odd), take(3));
 *
 * const result = sequence([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], transducerFn);
 * console.log(result);   // -> [3, 5, 7];
 * ```
 *
 * @memberof module:xduce
 * @param {...module:xdcore.TransducerFunction} fns One or more transducer
 *     functions to be composed into a single transducer function. Any of the
 *     transducers in this module can produce a suitable transducer function.
 * @return {module:xdcore.TransducerFunction} A transducer function that produces
 *     a transducer object that performs *all* of the transformations of the
 *     objects produced by the input transducer functions.
 */


function compose(...transducerFns) {
  const reversed = transducerFns.reverse();
  return value => reversed.reduce((acc, fn) => fn(acc), value);
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
 * transforming one collection into another, it need not be so.
 *
 * This can be combined with transducers as well, as in this calculation of the
 * sum of the *squares* of the collection values.
 *
 * ```
 * import { toReducer, transduce, map } from "@chanko/xduce";
 *
 * const sumReducer = toReducer((acc, input) => acc + input);
 * const sum = transduce([1, 2, 3, 4, 5], map(x => x * x), sumReducer, 0);
 * console.log(sum);   // -> 55
 * ```
 *
 * This function is defined in {@link module:xdcore|xdcore} and is re-exported
 * here.
 *
 * @memberof module:xduce
 * @function toReducer
 * @see module:xdcore.toReducer
 * @param {(array|object|function|module:xdcore.ReducerObject)} collection A
 *     reducible collection or a reducer function.
 * @returns {module:xdcore.ReducerObject} An object containing protocol
 *     properties for `init`, `step`, and `final`. This object is suitable for
 *     use as a reducer object (one provided to
 *     `{@link module:xdcore.reduce|reduce}`). If the provided collection is not
 *     reducible, all of the properties of this object will be `null`.
 */


const toReducer = _chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["toReducer"];
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
 * This function is defined in {@link module:xdcore|xdcore} and is re-exported
 * here.
 *
 * @memberof module:xduce
 * @function toFunction
 * @see module:xdcore.toFunction
 * @param {module:xdcore.TransducerFunction} transducerFn A transducer function
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

const toFunction = _chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["toFunction"];


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
  return col ? Object(modules_transduction__WEBPACK_IMPORTED_MODULE_2__["sequence"])(col, uniqueWith(func)) : next => {
    const uniques = [];
    return Object(_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["toTransducer"])((acc, value) => {
      if (uniques.some(u => func(value, u))) {
        return acc;
      }

      uniques.push(value);
      return next[_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](acc, value);
    }, next);
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
 * @return {module:xduce.PropertyObject} The property as a two-property object.
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly94ZHVjZS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8veGR1Y2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8veGR1Y2UveGRjb3JlL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly94ZHVjZS94ZGNvcmUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8veGR1Y2UveGRjb3JlL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly94ZHVjZS94ZGNvcmUvc3JjL21vZHVsZXMvaXRlcmF0aW9uLmpzIiwid2VicGFjazovL3hkdWNlL3hkY29yZS9zcmMvbW9kdWxlcy9wcm90b2NvbC5qcyIsIndlYnBhY2s6Ly94ZHVjZS94ZGNvcmUvc3JjL21vZHVsZXMvcmVkdWN0aW9uLmpzIiwid2VicGFjazovL3hkdWNlL3hkY29yZS9zcmMvbW9kdWxlcy91dGlscy5qcyIsIndlYnBhY2s6Ly94ZHVjZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly94ZHVjZS8uL3NyYy9tb2R1bGVzL2Jhc2ljLmpzIiwid2VicGFjazovL3hkdWNlLy4vc3JjL21vZHVsZXMvY2h1bmsuanMiLCJ3ZWJwYWNrOi8veGR1Y2UvLi9zcmMvbW9kdWxlcy9kaXN0aW5jdC5qcyIsIndlYnBhY2s6Ly94ZHVjZS8uL3NyYy9tb2R1bGVzL2Ryb3AuanMiLCJ3ZWJwYWNrOi8veGR1Y2UvLi9zcmMvbW9kdWxlcy9maWx0ZXIuanMiLCJ3ZWJwYWNrOi8veGR1Y2UvLi9zcmMvbW9kdWxlcy9tYXAuanMiLCJ3ZWJwYWNrOi8veGR1Y2UvLi9zcmMvbW9kdWxlcy90YWtlLmpzIiwid2VicGFjazovL3hkdWNlLy4vc3JjL21vZHVsZXMvdHJhbnNkdWN0aW9uLmpzIiwid2VicGFjazovL3hkdWNlLy4vc3JjL21vZHVsZXMvdW5pcXVlLmpzIiwid2VicGFjazovL3hkdWNlLy4vc3JjL21vZHVsZXMvdXRpbHMuanMiXSwibmFtZXMiOlsia2V5cyIsIk9iamVjdCIsImluZGV4IiwiayIsIm9iaiIsImN1cnJlbnQiLCJmbiIsImlzRnVuY3Rpb24iLCJ2YWx1ZSIsIlN5bWJvbCIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJmdW5jdGlvbkl0ZXJhdG9yIiwiaXNPYmplY3QiLCJvYmplY3RJdGVyYXRvciIsImlzSW1wbGVtZW50ZWQiLCJwcm90b2NvbHMiLCJpbml0Iiwic3RlcCIsImZpbmFsIiwiY29tcGxldGVkIiwiY29sbGVjdGlvbiIsInAiLCJpc1N0cmluZyIsImlzQXJyYXkiLCJFcnJvciIsInYiLCJhY2MiLCJtYXgiLCJNYXRoIiwiQVJSQVlfUkVEVUNFUiIsInRvUmVkdWNlciIsIk9CSkVDVF9SRURVQ0VSIiwiU1RSSU5HX1JFRFVDRVIiLCJyZWR1Y2VyIiwiciIsInJlc3VsdCIsInRyYW5zZHVjZXJGbiIsImlzQ29tcGxldGVkIiwiY29tcGxldGUiLCJ1bmNvbXBsZXRlIiwiaXRlciIsIml0ZXJhdG9yIiwibmFtZSIsInRvU3RyaW5nIiwicHJvdG8iLCJjdG9yIiwiaXNGaW5pdGUiLCJBcnJheSIsImlkZW50aXR5Iiwic2VxdWVuY2UiLCJuZXh0IiwidG9UcmFuc2R1Y2VyIiwiZmxhdHRlbiIsInN1YlRyYW5zZHVjZXIiLCJpc0l0ZXJhYmxlIiwicmVkdWNlIiwicmVwZWF0IiwibiIsImNvbCIsIm51bSIsInBhcnNlTnVtYmVyQXJncyIsImkiLCJOT19WQUxVRSIsImNodW5rIiwiY291bnQiLCJwYXJ0Iiwib3V0Iiwic2xpY2UiLCJlbnN1cmVVbmNvbXBsZXRlZCIsImNodW5rQnkiLCJmdW5jIiwicGFyc2VGdW5jdGlvbkFyZ3MiLCJsYXN0Iiwic2FtZVZhbHVlWmVybyIsInB1c2giLCJsZW5ndGgiLCJkaXN0aW5jdFdpdGgiLCJkaXN0aW5jdEJ5IiwiYSIsImIiLCJkaXN0aW5jdCIsImRyb3AiLCJkcm9wV2hpbGUiLCJkcm9wcGluZyIsImZpbHRlciIsInJlamVjdCIsImNvbXBsZW1lbnQiLCJtYXAiLCJmbGF0TWFwIiwiY29tcG9zZSIsInRha2UiLCJlbnN1cmVDb21wbGV0ZWQiLCJ0YWtlV2hpbGUiLCJ0YWtlTnRoIiwidHJhbnNkdWNpbmdJdGVyYXRvciIsInN0ZXBSZWR1Y2VyIiwieGl0ZXIiLCJpbnB1dCIsIml0ZW1zIiwidW5zaGlmdCIsInRyYW5zZHVjZXIiLCJkb25lIiwicG9wIiwic3RlcFZhbHVlIiwidHJhbnNkdWNlIiwiYXNBcnJheSIsImFzT2JqZWN0IiwiYXNTdHJpbmciLCJhc0l0ZXJhdG9yIiwiaW50byIsInRhcmdldCIsInRyYW5zZHVjZXJGbnMiLCJyZXZlcnNlZCIsInJldmVyc2UiLCJ4ZGNvcmVUb1JlZHVjZXIiLCJ0b0Z1bmN0aW9uIiwieGRjb3JlVG9GdW5jdGlvbiIsInVuaXF1ZVdpdGgiLCJ1bmlxdWVzIiwic29tZSIsInUiLCJ1bmlxdWVCeSIsInVuaXF1ZSIsImlzTmFOIiwiaXNOdW1iZXIiLCJrdiIsImtleSIsImFyZ3MiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQSxZQUNBLDJCQURBLEtBRUEsRUFLQTtBQUNDLENBVEQsRUFTQyxJQVRELEVBU0M7QUFDRDs7Ozs7QUNWQTtBQUFBOztBQUNBO0FBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUE7OztBQUVBO0FBQUE7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTs7QUFDQTs7O0FBQUE7QUFDQTtBQUFBLHFCQURBOztBQUVBO0FBQUEsa0JBRkE7O0FBR0E7QUFBQTtBQUNBOztBQUpBOzs7QUFNQTtBQUFBOztBQUNBOztBQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBO0FBQ0E7QUFBQTs7Ozs7QUFHQTtBQUFBOztBQUNBOzs7QUFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQTBDLDRCQUExQztBQUEwQztBQUExQztBQUNBO0FBQUE7QUFDQTs7QUFBQSxPQUpBOzs7QUFNQTtBQUFBOztBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQXdEO0FBQXhEO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUFpRDtBQUFqRDtBQUNBO0FBQUEsT0FMQTs7O0FBT0E7QUFBQTs7QUFDQTtBQUFBOztBQUNBO0FBQUE7O0FBQ0E7QUFBQTs7QUFDQTtBQUFBOztBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7QUFBQTtBQUNBOztBQUFBO0FBQ0E7O0FBQUE7QUFDQTs7QUFBQTtBQUNBOzs7QUFBQTtBQUF5QywwQkFBekM7QUFBeUM7QUFBekM7QUFDQTs7QUFBQTtBQUFnSDtBQUFxQixTQUFySSxDQUFxSSxJQUFySSxDQUFxSSxJQUFySSxFQUFxSSxHQUFySTtBQUNBOztBQUFBO0FBQ0E7QUFBQSxPQVRBOzs7QUFXQTtBQUFBOztBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQTJCO0FBQTRCLFNBRHZEO0FBRUE7QUFBQTtBQUFpQztBQUFlLFNBRmhEO0FBR0E7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBLE9BTkE7OztBQVFBO0FBQUE7O0FBQ0E7OztBQUFBO0FBQXNEO0FBQStELE9BQXJIOzs7QUFFQTtBQUFBOztBQUNBOzs7QUFBQTs7Ozs7QUFHQTtBQUFBOztBQUNBOztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7OztBQU9BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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Ozs7Ozs7Ozs7QUFTQSxTQUFTSyxLQUFULENBQWVKLEdBQWYsRUFBb0I7QUFDbEIsU0FBT3lILEVBQUUsQ0FBQ3pILEdBQUQsQ0FBRixDQUFRcUIsQ0FBZjtBQUNEO0FBRUQ7Ozs7Ozs7Ozs7O0FBU0EsU0FBUzZELFVBQVQsQ0FBb0JoRixFQUFwQixFQUF3QjtBQUN0QixTQUFPLENBQUMsR0FBR3lILElBQUosS0FBYSxDQUFDekgsRUFBRSxDQUFDLEdBQUd5SCxJQUFKLENBQXZCO0FBQ0QiLCJmaWxlIjoiY2hhbmtvLXhkdWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wieGR1Y2VcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wieGR1Y2VcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInhkY29yZVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJ4ZGNvcmVcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG4vKipcbiAqIFRoZSBjb3JlIGVuZ2luZSBmb3IgdHJhbnNkdWNlcnMuIFRoaXMgY29uc2lzdHMgcHJpbWFyaWx5IG9mIHJlZHVjdGlvbiBzdXBwb3J0XG4gKiBmb3IgY2hhaW5zIG9mIHRyYW5zZHVjZXJzIGJ1dCBhbHNvIHN1cHBsaWVzIHByb3RvY29sIGRlZmluaXRpb25zIGFuZCB1dGlsaXR5XG4gKiBmdW5jdGlvbnMgZm9yIHdyaXRpbmcgbmV3IHRyYW5zZHVjZXJzLlxuICpcbiAqIFRoZSBnZW5lcmFsIGlkZWEgaXMgdGhhdCBpZiB5b3UgbmVlZCB0byB1c2UgYSB0cmFuc2R1Y2VyLCB5b3UgY2FuIGF2b2lkXG4gKiBpbXBvcnRpbmcgdGhpcyBsaWJyYXJ5IGFuZCB3b3JrIHdpdGggdGhlIHtAbGluayBtb2R1bGU6eGR1Y2V8eGR1Y2V9IG1vZHVsZVxuICogaW5zdGVhZCAod2hpY2ggaW50ZXJuYWxseSBkZXBlbmRzIG9uIHRoaXMgbW9kdWxlKS4gSWYgeW91IHdhbnQgdG8gd3JpdGUgYSBuZXdcbiAqIHRyYW5zZHVjZXIgb3IgY29udHJvbCBsb3ctbGV2ZWwgYWNjZXNzIHRvIHRoZSByZWR1Y3Rpb24gZW5naW5lLCB0aGVuIHlvdSBuZWVkXG4gKiB0byB1c2UgdGhpcyBsaWJyYXJ5LiAoVGhlcmUgaXMgYSBzbWFsbCBudW1iZXIgb2YgZnVuY3Rpb25zIHRoYXQgYXJlIHVzZWZ1bFxuICogZm9yIGJvdGgsIGFuZCB7QGxpbmsgbW9kdWxlOnhkdWNlfHhkdWNlfSByZS1leHBvcnRzIHRoZW0gZnJvbSBoZXJlIHNvIHRoZXlcbiAqIGNhbiBiZSB1c2VkIGZyb20gZWl0aGVyIG1vZHVsZS4pXG4gKlxuICogVGhpcyBtb2R1bGUgcHJvdmlkZXMgZm91ciBiYXNpYyBzZXJ2aWNlczpcbiAqXG4gKiAxLiBSZWR1Y3Rpb24gb2YgdHJhbnNkdWNlciBjaGFpbnNcbiAqIDIuIFByb3RvY29sIGRlZmluaXRpb25cbiAqIDMuIEl0ZXJhdGlvbiBzdXBwb3J0XG4gKiA0LiBBdXRob3JpbmcgdXRpbGl0aWVzXG4gKlxuICogV2hhdCBmb2xsb3dzIGlzIGEgc2hvcnQgZGl1c2N1c3Npb24gb2YgZWFjaC5cbiAqXG4gKiAjIyBSZWR1Y3Rpb25cbiAqXG4gKiBBbGwgdHJhbnNmb3JtaW5nIGZ1bmN0aW9ucywgd2hldGhlciBtZXRob2RzIG9mIGBBcnJheWAgb3IgdGhpcmQgcGFydHkgdG9vbHNcbiAqIHN1Y2ggYXMgTG9kYXNoLCBwZXJmb3JtIHJlZHVjdGlvbiBpbiBvcmRlciB0byBidWlsZCB1cCBhIG5ldyBjb2xsZWN0aW9uIG91dFxuICogb2YgdGhlIGVsZW1lbnRzIHRoYXQgdGhleSd2ZSB0cmFuc2Zvcm1lZC9maWx0ZXJlZCwgZXRjLlxuICpcbiAqIFRyYW5zZHVjZXJzIGFyZSBubyBkaWZmZXJlbnQgaW4gdGhhdCByZWdhcmQsIGJ1dCB0aGUgbWFubmVyIGluIHdoaWNoIHRoZXkgZG9cbiAqIHRoZWlyIHJlZHVjdGlvbiBpcyB3aGF0IHNldHMgdGhlbSBhcGFydC5cbiAqXG4gKiBVc2luZyBgQXJyYXkucHJvdG90eXBlLm1hcGAgYXMgYW4gZXhhbXBsZSwgdGhlIHVzZXIgb2YgdGhlIGZ1bmN0aW9uIHByb3ZpZGVzXG4gKiBhIHRyYW5zZm9ybWF0aW9uIGZ1bmN0aW9uLiBUaGUgYG1hcGAgZnVuY3Rpb24gaXRlcmF0ZXMgb3ZlciB0aGUgaW5wdXQgYXJyYXksXG4gKiBwYXNzZXMgdGhlIGVsZW1lbnRzIHRocm91Z2ggdGhlIHByb3ZpZGVkIHRyYW5zZm9ybWF0aW9uIGZ1bmN0aW9uLCBhbmQgdGhlblxuICogcmVkdWNlcyB0aGUgcmVzdWx0cyBpbnRvIGEgbmV3IGFycmF5LiBJZiBgbWFwYCBpcyBjaGFpbmVkIHRvIGFub3RoZXJcbiAqIGZ1bmN0aW9uLCBsaWtlIGBBcnJheS5wcm90b3R5cGUuZmlsdGVyYCwgdGhlIHByb2Nlc3MgbmVlZHMgdG8gYmUgcmVwZWF0ZWQ6XG4gKiBpdGVyYXRlIGFnYWluLCBmaWx0ZXIgdmlhIGEgdXNlci1wcm92aWRlZCBmdW5jdGlvbiwgYW5kIHJlZHVjZSBhZ2Fpbi5cbiAqXG4gKiBUcmFuc2R1Y2VycyBhcmUgZGlmZmVyZW50LiBXaGVuIHVzaW5nIGEgdHJhbnNkdWNlciwgcmF0aGVyIHRoYW4gYVxuICogbWFuaXB1bGF0aW9uIGZ1bmN0aW9uIGJlaW5nIHByb3ZpZGVkIGFzIGluIGBtYXBgIG9yIGBmaWx0ZXJgLCBhICpyZWR1Y2VyXG4gKiBvYmplY3QqIGlzIHVzZWQuIChJdCdzIGFuIG9iamVjdCByYXRoZXIgdGhhbiBhIGZ1bmN0aW9uIGJlY2F1c2UgaXQgaGFzXG4gKiBtdWx0aXBsZSBmdW5jdGlvbnMsIGVhY2ggaW1wbGVtZW50ZWQgYXMgcHJvcGVydGllcyBvZiB0aGUgcmVkdWNlciBvYmplY3QuKVxuICogVGhpcyBtZWFucyB0aGF0IHRoZSB1c2VyIHByb3ZpZGVzIGluc3RydWN0aW9ucyBmb3IgYm90aCB0cmFuc2Zvcm1hdGlvbiAqYW5kKlxuICogcmVkdWN0aW9uLCByYXRoZXIgdGhhbiB0aGUgY29sbGVjdGlvbiBmdW5jdGlvbiBpdHNlbGYgYmVpbmcgcmVzcG9uc2libGUgZm9yXG4gKiBkb2luZyB0aGUgcmVkdWN0aW9uIG9uIGl0cyBvd24uXG4gKlxuICogVGhpcyBoYXMgdHdvIHZlcnkgYmVuZWZpY2lhbCBlZmZlY3RzLiBGaXJzdCwgaWYgYSB1c2VyIHdhbnRzIHRvIGZpbHRlciBhbmRcbiAqIHRoZW4gbWFwIHRoZSBlbGVtZW50cyBvZiBhIGNvbGxlY3Rpb24sIHRoZSB0cmFuc2R1Y2VyIGRvZXMgbm90IGhhdmUgdG8gcmVkdWNlXG4gKiB0aGUgZmlsdGVyZWQgZWxlbWVudHMgaW50byBhIGNvbGxlY3Rpb24ganVzdCB0byBoYXZlIHRoZSBtYXAgcGFydCB0ZWFyIHRoZW1cbiAqIGFwYXJ0IGFnYWluIGFuZCByZS1yZWR1Y2UgdGhlbSBsYXRlci4gVGhlIGZpbHRlciBwYXJ0IG9mIHRoZSB0cmFuc2R1Y2VyIGNhblxuICogcGFzcyBpdHMgZWxlbWVudHMgb25lIGF0IGEgdGltZSB0byB0aGUgbWFwIHBhcnQsIGFuZCByZWR1Y3Rpb24gY2FuIGhhcHBlblxuICogb25seSBhdCB0aGUgZW5kIGFmdGVyIHRoZSBlbGVtZW50cyBoYXZlIGJlZW4gYm90aCBmaWx0ZXJlZCAqYW5kKiBtYXBwZWQuXG4gKlxuICogU2Vjb25kbHksIHNpbmNlIHRoZSB1c2VyIGlzIHByb3ZpZGluZyB0aGUgcmVkdWN0aW9uIGluc3RydWN0aW9ucyBhbG9uZyB3aXRoXG4gKiB0aGUgdHJhbnNmb3JtYXRpb24gaW5zdHJ1Y3Rpb25zLCB0aGUgdHlwZSBvZiBjb2xsZWN0aW9uIHRoYXQgZ2V0cyByZWR1Y2VkXG4gKiBpbnRvIGRvZXMgbm90IGhhdmUgdG8gYmUgdGhlIHNhbWUgdHlwZSBhcyB0aGUgaW5wdXQgY29sbGVjdGlvbi4gWW91IGNvdWxkXG4gKiBwcm9jZXNzIGNoYXJhY3RlcnMgaW4gYSBzdHJpbmcgYW5kIGhhdmUgaXQgb3V0cHV0IGFzIGFuIGFycmF5LiBPciBwcm9jZXNzIHRoZVxuICogdmFsdWVzIGluIGFuIGl0ZXJhdG9yIGFuZCBnZXQgYSBwbGFpbiBvYmplY3QgYXMgb3V0cHV0LlxuICpcbiAqIFByYWN0aWNhbGx5IHNwZWFraW5nLCBtb3N0IG9mIHRoZSByZWR1Y2VyIG9iamVjdCBjcmVhdGlvbiBpcyBhYnN0cmFjdGVkIGF3YXksXG4gKiBzbyB1c2luZyB0cmFuc2R1Y2VycyBpcyBubyBtb3JlIGRpZmZpY3VsdCB0aGFuIGp1c3QgdXNpbmdcbiAqIGBBcnJheS5wcm90b3R5cGUubWFwYC4gVGhlIGB7QGxpbmsgbW9kdWxlOnhkY29yZS5yZWR1Y2V8cmVkdWNlfWAgZnVuY3Rpb25cbiAqIHByb3ZpZGVkIGJ5IHRoaXMgbGlicmFyeSBpcyBsb3cgbGV2ZWwsIHRob3VnaCwgYW5kIGRvZXMgbm90IGRvIGFueSBvZiB0aGF0XG4gKiBhYnN0cmFjdGluZyBvbiBpdHMgb3duLiBUaGUgZnVuY3Rpb25zIGZyb20gdGhlIHtAbGluayBtb2R1bGU6eGR1Y2V8eGR1Y2V9XG4gKiBtb2R1bGUsIG5hbWVseSBge0BsaW5rIG1vZHVsZTp4ZHVjZS50cmFuc2R1Y2V8dHJhbnNkdWNlfWAsXG4gKiBge0BsaW5rIG1vZHVsZTp4ZHVjZS5pbnRvfGludG99YCwgYW5kXG4gKiBge0BsaW5rIG1vZHVsZTp4ZHVjZS5zZXF1ZW5jZXxzZXF1ZW5jZX1gLCB0YWtlIGNhcmUgb2YgdGhhdCBhYnN0cmFjdGlvbiBzb1xuICogYHtAbGluayBtb2R1bGU6eGRjb3JlLnJlZHVjZXxyZWR1Y2V9YCBjYW4ganVzdCBoYW5kbGUgYWN0dWFsIHJlZHVjdGlvbi5cbiAqXG4gKiAjIyBQcm90b2NvbHNcbiAqXG4gKiBJbiBFUzIwMTUsIHRoZSBpZGVhIG9mIHByb3RvY29scyB3YXMgYWRkZWQgdG8gSmF2YVNjcmlwdC4gVGhpcyB3YXMgZG9uZSBhdFxuICogdGhlIGJlZ2lubmluZyB0byBwcm92aWRlIGxhbmd1YWdlLWxldmVsIHN1cHBvcnQgZm9yIHRoZSBuZXcgYGZvci4uLm9mYCBsb29wLlxuICogQXMgbG9uZyBhcyBhIHZhbHVlIHN1cHBvcnRlZCB0aGUgaXRlcmFibGUgcHJvdG9jb2wgYnkgaGF2aW5nIGEgcHJvcGVydHkgbmFtZWRcbiAqIGBTeW1ib2wuaXRlcmF0b3JgIHRoYXQgcmV0dXJucyBhbiBpdGVyYXRvciBmb3IgdGhhdCB2YWx1ZSB3aGVuIGl0J3MgY2FsbGVkLFxuICogdGhlbiBpdCBhdXRvbWF0aWNhbGx5IHF1YWxpZmllZCB0byBiZSB1c2VkIGluIGBmb3IuLi5vZmAuXG4gKlxuICogVGhpcyBtb2R1bGUgdXNlcyB0aGF0IGl0ZXJhYmxlIG1vZHVsZSBpbiB0aGUgc2FtZSB3YXkgdG8gdW5kZXJzdGFuZCBob3cgdG9cbiAqIGJyZWFrIGNvbGxlY3Rpb25zIGFwYXJ0LCBidXQgaXQgYWxzbyB1c2VzIHByb3RvY29scyB0byBsZXQgY29sbGVjdGlvbnMgaW5mb3JtXG4gKiB0aGUgZW5naW5lIGhvdyB0byByZWR1Y2UgYSBjb2xsZWN0aW9uIG9mIHRoYXQgdHlwZSBiYWNrIHRvZ2V0aGVyIGFnYWluLiBTaW5jZVxuICogdGhlcmUgYXJlIG5vIHN0YW5kYXJkIHByb3RvY29scyBmb3IgcmVkdWN0aW9uIHRoZSB3YXkgdGhlcmUgYXJlIGZvclxuICogaXRlcmF0aW9uLCB0aGlzIG1vZHVsZSBwcm92aWRlcyBjdXN0b20gcHJvdG9jb2xzIG9mIGl0cyBvd24uIFRoZXNlIGFyZSBhbHNvXG4gKiBzeW1ib2xzIHVzZWQgYXMgbmFtZXMgZm9yIHByb3BlcnRpZXMsIGJ1dCB0aGV5IGFyZSBzdG9yZWQgaW4gYW4gb2JqZWN0IGNhbGxlZFxuICogYHtAbGluayBtb2R1bGU6eGRjb3JlLnByb3RvY29sc3xwcm90b2NvbHN9YCB0byBiZSBsb29rZWQgdXAgYnkgc3RyaW5nIGtleTpcbiAqXG4gKiAqIGBwcm90b2NvbHMuaW5pdGBcbiAqICogYHByb3RvY29scy5zdGVwYFxuICogKiBgcHJvdG9jb2xzLmZpbmFsYFxuICogKiBgcHJvdG9jb2xzLmNvbXBsZXRlZGBcbiAqICogYHByb3RvY29scy52YWx1ZWBcbiAqXG4gKiBUaGUgbGFzdCB0d28gKGBjb21wbGV0ZWRgIGFuZCBgdmFsdWVgKSBhcmUgdXNlZCBpbnRlcm5hbGx5IGZvciBrZWVwaW5nIHRyYWNrXG4gKiBvZiB0aGUgcmVkdWN0aW9uIHN0YXR1cyBvZiBhIHZhbHVlIGFuZCBzaG91bGRuJ3QgbmVlZCB0byBiZSB1c2VkIGV4dGVybmFsbHkuXG4gKiBUaGUgZmlyc3QgdGhyZWUsIGhvd2V2ZXIsIGFyZSBob3cgdGhlIGVuZ2luZSBrbm93cyBob3cgdG8gcmVkdWNlIHRvIGEgY2VydGFpblxuICogY29sbGVjdGlvbiB0eXBlLlxuICpcbiAqIGBpbml0YCBpcyBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIG5ldywgZW1wdHkgdmVyc2lvbiBvZiB0aGF0IGNvbGxlY3Rpb24gdG9cbiAqIGJlIGJ1aWx0IHVwb24uIGBzdGVwYCBpcyBhIGZ1bmN0aW9uIHRoYXQgZ2V0cyBwYXNzZWQgYSBjb2xsZWN0aW9uIG9mIHRoYXRcbiAqIHR5cGUgcGx1cyBhIG5ldyB2YWx1ZSB0byBiZSBhZGRlZCB0byBpdCwgYW5kIHJldHVybnMgdGhlIGNvbGxlY3Rpb24gd2l0aCB0aGF0XG4gKiB2YWx1ZSBhZGRlZCB0byBpdCAoaS5lLiwgaXQncyBhIHN0YW5kYXJkIHJlZHVjdGlvbiBmdW5jdGlvbikuIGBmaW5hbGAgaXMgYVxuICogZnVuY3Rpb24gdGhhdCBnZXRzIHBhc3NlZCB0aGUgZnVsbHkgcmVkdWNlZCBuZXcgY29sbGVjdGlvbiBhbmQgcmV0dXJucyB3aGF0XG4gKiB0aGUgZmluYWwgb3V0cHV0IHNob3VsZCBiZSwgZ2l2aW5nIHRoZSBlbmdpbmUgb25lIGxhc3QgY2hhbmNlIHRvIG1vZGlmeSB0aGVcbiAqIGZpbmFsIHZhbHVlICh0aGlzICpub3JtYWxseSoganVzdCByZXR1cm5zIGl0cyBhcmd1bWVudCB1bm1vZGlmaWVkKS4gSWYgdGhlc2VcbiAqIHRocmVlIHByb3BlcnRpZXMgYXJlIGFkZGVkIHRvIGFuIG9iamVjdCwgdGhlbiB0aGlzIG1vZHVsZSB3aWxsIHJlY29nbml6ZSB0aGF0XG4gKiBvYmplY3QgYXMgcmVkdWNpYmxlIGFuZCBiZSBhYmxlIHRvIGNyZWF0ZSBhbmQgZmlsbCBvbmUuXG4gKlxuICogQXMgYW4gZXhhbXBsZSwgbGV0J3MgYWRkIHN1cHBvcnQgZm9yIHRyYW5zZHVjdGlvbiB0byB0aGUgYExpc3RgIGNvbGxlY3Rpb25cbiAqIGZyb20gW2ltbXV0YWJsZS5qc11bMV0uXG4gKlxuICogYGBgXG4gKiBpbXBvcnQgeyBwcm90b2NvbHMgYXMgcCB9IGZyb20gXCJAY2hhbmtvL3hkY29yZVwiO1xuICogaW1wb3J0IHsgTGlzdCB9IGZyb20gXCJpbW11dGFibGVcIjtcbiAqXG4gKiBMaXN0LnByb3RvdHlwZVtwLmluaXRdID0gKCkgPT4gTGlzdCgpLmFzTXV0YWJsZSgpO1xuICogTGlzdC5wcm90b3R5cGVbcC5zdGVwXSA9IChhY2MsIHZhbHVlKSA9PiBhY2MucHVzaCh2YWx1ZSk7XG4gKiBMaXN0LnByb3RvdHlwZVtwLmZpbmFsXSA9IHZhbHVlID0+IHZhbHVlLmFzSW1tdXRhYmxlKCk7XG4gKiBgYGBcbiAqXG4gKiBUaGUgYGluaXRgIGZ1bmN0aW9uIGhlcmUgcmV0dXJucyBhIG5ldywgZW1wdHkgbGlzdC4gVGhlIGBzdGVwYCBmdW5jdGlvblxuICogZGVzY3JpYmVzIGhvdyB0byBhZGQgYSB2YWx1ZSB0byB0aGF0IGxpc3QgKHRocm91Z2ggdGhlIGBwdXNoYCBtZXRob2QpLiBUaGVcbiAqIGBmaW5hbGAgZnVuY3Rpb24gcnVucyBhdCB0aGUgdmVyeSBlbmQgdG8gZGV0ZXJtaW5lIHRoZSBlbmQgdmFsdWUuIEluIHRoZSBjYXNlXG4gKiBvZiB0aGlzIGltbXV0YWJsZSBsaXN0LCB0aGUgYGluaXRgIGZ1bmN0aW9uIGFjdHVhbGx5IHJldHVybnMgYSBtdXRhYmxlIGxpc3RcbiAqIHRoYXQgd2UgY2FuIGFkZCB0byB3aXRoIGBzdGVwYCwgYW5kIHRoZW4gYGZpbmFsYCB0dXJucyB0aGF0IGludG8gYW4gaW1tdXRhYmxlXG4gKiBsaXN0IHRvIGJlIHJldHVybmVkLiBUaGlzIGlzIGEgdGV4dGJvb2sgdXNlIG9mIGBmaW5hbGA7IG1vc3Qgb2YgdGhlIHRpbWUsXG4gKiBgZmluYWxgIHdpbGwgc2ltcGx5IHJldHVybiB0aGUgdmFsdWUgdGhhdCdzIHBhc3NlZCB0byBpdCwgdW5jaGFuZ2VkLlxuICpcbiAqIFdpdGggdGhlc2UgbGluZXMgb2YgY29kZSBpbiBwbGFjZSwgYWRkaW5nIHRoZSBwcm90b2NvbCBmdW5jdGlvbnMgdG8gYExpc3RgJ3NcbiAqIHByb3RvdHlwZSwgcmVkdWN0aW9uIHdpbGwganVzdCB3b3JrLlxuICpcbiAqIEl0IGlzIG5vdCBuZWNlc3NhcnkgdG8gcHJvdmlkZSB0aGVzZSBmdW5jdGlvbnMgZm9yIG5hdGl2ZSBhcnJheXMsIHN0cmluZ3MsXG4gKiBwbGFpbiBvYmplY3RzLCBvciBpdGVyYXRvcnMsIGFzIHN1cHBvcnQgZm9yIHRoZW0gaXMgYnVpbHQgaW4uXG4gKlxuICogIyMgSXRlcmF0b3JzXG4gKlxuICogQXMgbWVudGlvbmVkIGFib3ZlLCB0aGVyZSBpcyBhIGJ1aWx0LWluIHByb3RvY29sIGZvciBpdGVyYXRpb24gaW4gSmF2YVNjcmlwdFxuICogc2luY2UgRVMyMDE1LCBhbmQgdGhpcyBtb2R1bGUgZG9lcyByZWNvZ25pemUgYW5kIHVzZSB0aGF0IHByb3RvY29sLiAoQmVjYXVzZVxuICogdGhpcyBpcyBhIGJ1aWx0LWluIHByb3RvY29sLCBldmVuIG1hbnkgdGhpcmQtcGFydHkgbGlicmFyaWVzIHRha2UgYWR2YW50YWdlXG4gKiBvZiBpdDsgd2UgZGlkIG5vdCBoYXZlIHRvIGFkZCB0aGUgaXRlcmFibGUgcHJvdG9jb2wgdG8gdGhlIGltbXV0YWJsZSBgTGlzdGBcbiAqIGFib3ZlIGJlY2F1c2UgaW1tdXRhYmxlLmpzIGFscmVhZHkgYWRkcyBpdC4pXG4gKlxuICogSXRlcmF0YWJsZSBwcm90b2NvbCBzdXBwb3J0IHdvcmtzIG91dCBvZiB0aGUgYm94IGZvciBhbnkgdHlwZSB0aGF0IGltcGxlbWVudHNcbiAqIGl0LiBIb3dldmVyLCB0aGVyZSBpcyBhbHNvIHN1cHBvcnQgYnVpbHQgaW50byB0aGlzIG1vZHVsZSBmb3IgdHdvIHR5cGVzIHRoYXRcbiAqIGRvIG5vdCBzdXBwb3J0IHRoZSBwcm90b2NvbDogcGxhaW4gb2JqZWN0cyBhbmQgZnVuY3Rpb25zLlxuICpcbiAqIFRoZSB2YWx1ZXMgdGhhdCBjb21lIG91dCBvZiB0aGUgaXRlcmF0b3IgZm9yIHBsYWluIG9iamVjdHMgYXJlIHRoZW1zZWx2ZXNcbiAqIG9iamVjdHMsIGJ1dCB0aGV5J3JlIG9iamVjdHMgb2Ygb25seSBvbmUgcHJvcGVydHkgZWFjaCwgb25lIGZvciBlYWNoIHByb3BlcnR5XG4gKiBpbiB0aGUgb3JpZ2luYWwgb2JqZWN0LiBGb3IgZXhhbXBsZTpcbiAqXG4gKiBgYGBcbiAqIGltcG9ydCB7IGl0ZXJhdG9yIH0gZnJvbSBcIkBjaGFua28veGRjb3JlXCI7XG4gKlxuICogY29uc3Qgb2JqID0geyBjOiAxLCBhOiAyLCBiOiAzIH07XG4gKiBjb25zdCBpdGVyID0gaXRlcmF0b3Iob2JqKTtcbiAqIGNvbnNvbGUubG9nKGl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiB7IGM6IDEgfVxuICogY29uc29sZS5sb2coaXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IHsgYTogMiB9XG4gKiBjb25zb2xlLmxvZyhpdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4geyBiOiAzIH1cbiAqIGNvbnNvbGUubG9nKGl0ZXIubmV4dCgpLmRvbmUpOyAgICAvLyAtPiB0cnVlXG4gKiBgYGBcbiAqXG4gKiBUaGUgb3JkZXJpbmcgaXMgdGhlIHNhbWUgYXMgb3JkZXJpbmcgZnJvbSBgT2JqZWN0LmtleXMoKWAgYW5kIHRoZSBsaWtlOlxuICpcbiAqIDEuIFN0cmluZyBrZXlzIHRoYXQgYXJlIGludGVnZXIgaW5kaWNlcyBpbiBhc2NlbmRpbmcgbnVtZXJpY2FsIG9yZGVyXG4gKiAyLiBBbGwgb3RoZXIgc3RyaW5nIGtleXMgaW4gdGhlIG9yZGVyIGluIHdoaWNoIHRoZXkgd2VyZSBhZGRlZCB0byB0aGUgb2JqZWN0XG4gKiAzLiBBbGwgc3ltYm9sIGtleXMgaW4gdGhlIG9yZGVyIGluIHdoaWNoIHRoZXkgd2VyZSBhZGRlZCB0byB0aGUgb2JqZWN0XG4gKlxuICogSXRlcmF0aW9uIHN1cHBvcnQgZm9yIGZ1bmN0aW9ucyBoYXBwZW5zIGJ5IGludm9raW5nIHRoZSBmdW5jdGlvbiBmb3IgZWFjaFxuICogaXRlcmF0aW9uIGFuZCB1c2luZyB0aGUgcmV0dXJuIHZhbHVlIGZvciB0aGUgdmFsdWUgb2YgdGhlIGl0ZXJhdG9yIGF0IHRoYXRcbiAqIHBvaW50LiBUd28gdmFsdWVzIGFyZSBmZWQgaW50byB0aGUgZnVuY3Rpb246IHRoZSBpbmRleCBvZiB0aGUgaXRlcmF0aW9uXG4gKiAoc3RhcnRpbmcgYXQgMCBmb3IgdGhlIGZpcnN0IGl0ZXJhdGlvbiBhbmQgaW5jcmVhc2luZyBieSBvbmUgZm9yIGVhY2hcbiAqIHN1YnNlcXVlbnQgaXRlcmF0aW9uKSBhbmQgdGhlIGZ1bmN0aW9uJ3MgcmV0dXJuIHZhbHVlIGZyb20gdGhlIHByZXZpb3VzXG4gKiBpdGVyYXRpb24gKHN0YXJ0aW5nIGFzIGB1bmRlZmluZWRgIGZvciB0aGUgZmlyc3QgaXRlcmF0aW9uKS4gVGhlIGZ1bmN0aW9uIGlzXG4gKiBmcmVlIHRvIHVzZSBvciBpZ25vcmUgdGhlc2UgdmFsdWVzIGFzIGl0IGxpa2VzOyBhbGwgdGhhdCBpcyBpbXBvcnRhbnQgaXMgdGhhdFxuICogaXQgcmV0dXJucyBhIHZhbHVlLlxuICpcbiAqIGBgYFxuICogaW1wb3J0IHsgaXRlcmF0b3IgfSBmcm9tIFwiQGNoYW5rby94ZGNvcmVcIjtcbiAqXG4gKiBjb25zdCBmbiA9IChpbmRleCwgbGFzdCA9IDEpID0+IGxhc3QgKiAoaW5kZXggKyAxKTtcbiAqIGNvbnN0IGl0ZXIgPSBpdGVyYXRvcihmbik7XG4gKiBjb25zb2xlLmxvZyhpdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4gMVxuICogY29uc29sZS5sb2coaXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IDJcbiAqIGNvbnNvbGUubG9nKGl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiA2XG4gKiBjb25zb2xlLmxvZyhpdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4gMjRcbiAqIGNvbnNvbGUubG9nKGl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiAxMjBcbiAqIGBgYFxuICpcbiAqIFRoaXMgZWZmZWN0aXZlbHkgY2FsY3VsYXRlcyB0aGUgZmFjdG9yaWFsIG9mIGAoaW5kZXggKyAxKWAuIEFzIGluIHRoaXNcbiAqIGV4YW1wbGUsIGl0ZXJhdG9ycyBjcmVhdGVkIGZyb20gZnVuY3Rpb25zIGNhbiBiZSBpbmZpbml0ZTsgaWYgdGhlIGZ1bmN0aW9uXG4gKiByZXR1cm5zIGB1bmRlZmluZWRgIGl0J2xsIHRlcm1pbmF0ZSB0aGUgaXRlcmF0b3IgaW1tZWRpYXRlbHkuXG4gKlxuICogIyMgQXV0aG9yaW5nXG4gKlxuICogVGhlIHRvb2xzIGZyb20gdGhpcyBtb2R1bGUgYXJlIHVzZWQgYnkgdGhlIHtAbGluayBtb2R1bGU6eGR1Y2V8eGR1Y2V9IG1vZHVsZVxuICogdG8gYnVpbGQgaXRzIHRyYW5zZHVjZXJzLCBhbmQgYWxsIG9mIHRob3NlIHNhbWUgdG9vbHMgYXJlIGF2YWlsYWJsZSBmb3JcbiAqIGN1c3RvbSB0cmFuc2R1Y2VycyBhcyB3ZWxsLlxuICpcbiAqIEluIGJyaWVmLCBhIHRyYW5zZHVjZXIgd29ya3MgYnkgaGF2aW5nICp0cmFuc2R1Y2VyIG9iamVjdHMqIHdoaWNoIGFyZSBmb3JtZWRcbiAqIGludG8gYSBjaGFpbiwgb25lIGZvciBlYWNoIHRyYW5zZm9ybWF0aW9uLiBBdCB0aGUgZW5kIG9mIHRoZSBjaGFpbiBpcyBhXG4gKiAqcmVkdWNlciBvYmplY3QqIHdoaWNoIGRlc2NyaWJlcyBob3cgdG8gY3JlYXRlIGEgbmV3IGNvbGxlY3Rpb24gZnJvbSB0aGVcbiAqIGVsZW1lbnRzIHRoYXQgdGhlIHRyYW5zZHVjZXIgb2JqZWN0cyBtb2RpZmllZC4gRWxlbWVudHMgYXJlIHB1bGxlZCBvbmUgYXQgYVxuICogdGltZSB0aHJvdWdoIHRoYXQgY2hhaW4sIGJlaW5nIG1vZGlmaWVkLCBmaWx0ZXJlZCBvdXQsIGV0Yy4gZXZlcnkgc3RlcCBvZiB0aGVcbiAqIHdheSB1bnRpbCB0aGUgcmVkdWNlciBhdCB0aGUgZW5kIGFkZHMgaXQgaW50byB0aGUgdGFyZ2V0IGNvbGxlY3Rpb24uXG4gKlxuICogVmlzdWFsbHksIGEgdHJhbnNkdWNlciB0aGF0IG1hcHMgZWxlbWVudCB2YWx1ZXMsIGZpbHRlcnMgdGhlbSwgYW5kIG91dHB1dHMgYW5cbiAqIGFycmF5IGNvbnRhaW5pbmcgdGhvc2UgZWxlbWVudHMgd291bGQgbG9vayBsaWtlIHRoaXM6XG4gKlxuICogYGBgXG4gKiArLS0tLS0tLS0tLS0tLS0tKyAgICArLS0tLS0tLS0tLS0tLS0tKyAgICArLS0tLS0tLS0tLS0tLS0tK1xuICogfCAgbWFwIHhkdWNlciAgIHwgLT4gfCBmaWx0ZXIgeGR1Y2VyIHwgLT4gfCBhcnJheSByZWR1Y2VyIHxcbiAqICstLS0tLS0tLS0tLS0tLS0rICAgICstLS0tLS0tLS0tLS0tLS0rICAgICstLS0tLS0tLS0tLS0tLS0rXG4gKiBgYGBcbiAqXG4gKiBUaGVyZSBpcyBhbHdheXMgb25lIHJlZHVjZXIgb2JqZWN0IGF0IHRoZSBlbmQgYW5kIGFuIGFyYml0cmFyeSBudW1iZXIgb2ZcbiAqIHRyYW5zZHVjZXIgb2JqZWN0cyBiZWZvcmUgaXQuXG4gKlxuICogVHJhbnNkdWNlciBhbmQgcmVkdWNlciBvYmplY3RzIGFyZSBzdHJ1Y3R1cmFsbHkgaWRlbnRpY2FsLiBUaGV5IGJvdGggYXJlXG4gKiByZXF1aXJlZCB0byBoYXZlIHRoZSB0aHJlZSByZWR1Y3Rpb24gcHJvdG9jb2wgbWV0aG9kcyAoYGluaXRgLCBgc3RlcGAsIGFuZFxuICogYGZpbmFsYCkuIFRoZWlyIGRpZmZlcmVuY2UgaXMgaW4gdGhlaXIgcHVycG9zZS5cbiAqXG4gKiBBIHJlZHVjZXIgb2JqZWN0IGlzIHJlc3BvbnNpYmxlIGZvciBwcm92aWRpbmcgYW4gaW5pdGlhbCBjb2xsZWN0aW9uIChgaW5pdGApLFxuICogYWRkaW5nIGVsZW1lbnRzIG9uZSBieSBvbmUgdG8gdGhhdCBjb2xsZWN0aW9uIChgc3RlcGApLCBhbmQgZmluYWxpemluZyB0aGVcbiAqIHJlc3VsdCAoYGZpbmFsYCkuIEl0IGlzIHNlbGYtY29udGFpbmVkIGFuZCBpdHMgcHJvdG9jb2wgbWV0aG9kcyBkb24ndFxuICogdHlwaWNhbGx5IG5lZWQgdG8gY2FsbCBhbnkgb3RoZXIgcmVkdWNlciBvYmplY3RzLiBTaW5jZSBpdCBpcyB0aGUgbGFzdCBvYmplY3RcbiAqIGluIHRoZSBjaGFpbiwgaXQncyBwb3NzaWJsZSBmb3IgYSBjaGFpbiB0byBjb25zaXN0IG9mICpvbmx5KiBhIHJlZHVjZXIgKHRoaXNcbiAqIGlzIHVzZWZ1bCBmb3IgdHVybmluZyBvbmUga2luZCBvZiBjb2xsZWN0aW9uIGludG8gYW5vdGhlciB3aXRob3V0IGNoYW5naW5nXG4gKiBhbnkgb2YgdGhlIGVsZW1lbnRzKS5cbiAqXG4gKiBBIHRyYW5zZHVjZXIgb2JqZWN0IGlzIHJlc3BvbnNpYmxlIGZvciB0d28gdGhpbmdzOiBtYW5pcHVsYXRpbmcgZGF0YSwgYW5kXG4gKiB0aGVuIHBhc3NpbmcgdGhhdCBkYXRhIGFsb25nIHRvIHRoZSBuZXh0IG9iamVjdCBpbiB0aGUgY2hhaW4uIEZvciB0aGF0XG4gKiByZWFzb24sIHRoZSBgaW5pdGAgYW5kIGBmaW5hbGAgbWV0aG9kcyB0eXBpY2FsbHkgc2ltcGx5IGNhbGwgdGhlIHNhbWUgbWV0aG9kXG4gKiBvbiB0aGUgbmV4dCBvYmplY3QgYW5kIHJldHVybiBpdHMgdmFsdWUgKGkuZS4sIHRoZXkgZG8gbm90aGluZyB0aGVtc2VsdmVzKS5cbiAqIFRoZSBgc3RlcGAgbWV0aG9kIGlzIHdoZXJlIHRoZSB3b3JrIGhhcHBlbnMsIGFuZCB3aGVuIHRoYXQgd29yayBpcyBkb25lLCBpdCdzXG4gKiBzZW50IHRvIHRoZSBuZXh0IG9iamVjdCBieSBjYWxsaW5nICppdHMqIGBzdGVwYCBtZXRob2QuIEEgdHJhbnNkdWNlciBvYmplY3RcbiAqIGNhbm5vdCBtYWtlIGEgY2hhaW4gYnkgaXRzZWxmOyBpdCBhbHdheXMgcmVxdWlyZXMgYSByZWR1Y2VyIG9iamVjdCB0b1xuICogYWN0dWFsbHkgcHV0IHRoZSBtYW5pcHVsYXRlZCBkYXRhIGJhY2sgdG9nZXRoZXIuXG4gKlxuICogVGhlIHJlYXNvbiB0aGF0IGEgdHJhbnNkdWNlciBvYmplY3QgbmVlZHMgdGhlc2UgcHJvdG9jb2wgbWV0aG9kcyBldmVuIGlmIHRoZXlcbiAqIG9ubHkgY2FsbCB0aGUgbmV4dCBvbmUgaXMgYmVjYXVzZSBhIHRyYW5zZHVjZXIgb2JqZWN0IHNob3VsZCBub3QgbmVlZCB0byBrbm93XG4gKiB3aGV0aGVyIHRoZSBuZXh0IG9iamVjdCBpbiB0aGUgY2hhaW4gaXMgYSB0cmFuc2R1Y2VyIG9iamVjdCBvciBhIHJlZHVjZXJcbiAqIG9iamVjdC4gQWxsIGl0IG5lZWRzIHRvIGtub3cgaXMgdGhhdCB0aGVyZSB3aWxsIGJlIGFuIG9iamVjdCB3aXRoIHRoZSB0aHJlZVxuICogcmVkdWN0aW9uIHByb3RvY29sIG1ldGhvZHMgdGhhdCBpdCBjYW4gY2FsbC4gKFRoZXJlIGFyZSBhbHNvIGVkZ2UgY2FzZXMgd2hlcmVcbiAqIGEgdHJhbnNkdWNlciBvYmplY3QgbWF5IGRvIG1vcmUgd2l0aCBhbiBgaW5pdGAgb3IgYGZpbmFsYCBtZXRob2QsIGJ1dCB0aG9zZVxuICogYXJlIGZhaXJseSByYXJlLilcbiAqXG4gKiBIZXJlIGlzIGFuIGV4YW1wbGUgb2YgdHJhbnNkdWNlciBkZWZpbml0aW9ucywgdXNpbmcgdGhlIHNhbWUgdHdvIHRyYW5zZHVjZXJcbiAqIG9iamVjdHMgYXMgaW4gdGhlIGFib3ZlIGRpYWdyYW0uIEl0IGRlZmluZXMgdHdvICp0cmFuc2R1Y2VyIGZ1bmN0aW9ucyosIHdoaWNoXG4gKiBhcmUgZnVuY3Rpb25zIHRoYXQgdGFrZSBhIHRyYW5zZHVjZXIgb3IgcmVkdWNlciBvYmplY3QgKHdoaWNoIGlzIHRoZSBuZXh0XG4gKiBvYmplY3QgaW4gdGhlIGNoYWluKSBhbmQgcmV0dXJuIGl0cyBvd24gdHJhbnNkdWNlciBvYmplY3QgYWxyZWFkeSBjaGFpbmVkIHRvXG4gKiB0aGF0IG5leHQgb2JqZWN0LlxuICpcbiAqIGBgYFxuICogaW1wb3J0IHsgcHJvdG9jb2xzIGFzIHAgfSBmcm9tIFwiQGNoYW5rby94ZGNvcmVcIjtcbiAqXG4gKiBmdW5jdGlvbiBtYXBUcmFuc2R1Y2VyKGZuLCBuZXh0KSB7XG4gKiAgIHJldHVybiB7XG4gKiAgICAgW3AuaW5pdF06ICgpID0+IG5leHRbcC5pbml0XSgpLFxuICogICAgIFtwLnN0ZXBdOiAoYWNjLCB2YWx1ZSkgPT4gbmV4dFtwLnN0ZXBdKGFjYywgZm4odmFsdWUpKSxcbiAqICAgICBbcC5maW5hbF06IHZhbHVlID0+IG5leHRbcC5maW5hbF0odmFsdWUpLFxuICogICB9O1xuICogfVxuICpcbiAqIGZ1bmN0aW9uIGZpbHRlclRyYW5zZHVjZXIoZm4sIG5leHQpIHtcbiAqICAgcmV0dXJuIHtcbiAqICAgICBbcC5pbml0XTogKCkgPT4gbmV4dFtwLmluaXRdKCksXG4gKiAgICAgW3Auc3RlcF06IChhY2MsIHZhbHVlKSA9PiBmbih2YWx1ZSkgPyBuZXh0W3Auc3RlcF0oYWNjLCB2YWx1ZSkgOiBhY2MsXG4gKiAgICAgW3AuZmluYWxdOiB2YWx1ZSA9PiBuZXh0W3AuZmluYWxdKHZhbHVlKSxcbiAqICAgfTtcbiAqIH1cbiAqIGBgYFxuICpcbiAqIEFzIGV4cGVjdGVkLCB0aGUgYGluaXRgIGFuZCBgZmluYWxgIG1ldGhvZHMgaW4gYm90aCB0cmFuc2R1Y2VyIG9iamVjdHMgc2ltcGx5XG4gKiBjYWxsIHRoZSBzYW1lIGZ1bmN0aW9ucyBpbiB0aGUgbmV4dCBvYmplY3QsIHdoaWxlIHRoZSBgc3RlcGAgZnVuY3Rpb24gZG9lc1xuICogdGhlIGFjdHVhbCB3b3JrLCBlaXRoZXIgcGFzc2luZyBlYWNoIHZhbHVlIHRocm91Z2ggdGhlIG1hcHBpbmcgZnVuY3Rpb24gaW5cbiAqIGBtYXBUcmFuc2R1Y2VyYCBvciBkZWNpZGluZyB3aGV0aGVyIHRvIGFkZCBpdCB0byB0aGUgY29sbGVjdGlvbiBhdCBhbGwgaW5cbiAqIGBmaWx0ZXJUcmFuc2R1Y2VyYC5cbiAqXG4gKiBTaW5jZSBpdCAqaXMqIHNvIGNvbW1vbiB0byBjcmVhdGUgdHJhbnNkdWNlciBvYmplY3RzIHdob3NlIGBpbml0YCBhbmQgYGZpbmFsYFxuICogbWV0aG9kcyBzaW1wbHkgY2hhaW4gdG8gdGhlIG5leHQgb2JqZWN0LCB0aGVyZSBpcyBhIGhlbHBlciBmdW5jdGlvbiB0byBtYWtlXG4gKiB0cmFuc2R1Y2VyIG9iamVjdCBjcmVhdGlvbiBlYXNpZXIuIFRoZSBzYW1lIHR3byB0cmFuc2R1Y2VyIGZ1bmN0aW9ucyBmcm9tXG4gKiBhYm92ZSBjYW4gYmUgd3JpdHRlbiBsaWtlIHRoaXMuXG4gKlxuICogYGBgXG4gKiBpbXBvcnQgeyBwcm90b2NvbHMgYXMgcCwgdG9UcmFuc2R1Y2VyIH0gZnJvbSBcIkBjaGFua28veGRjb3JlXCI7XG4gKlxuICogZnVuY3Rpb24gbWFwVHJhbnNkdWNlcihmbiwgbmV4dCkge1xuICogICBjb25zdCBzdGVwID0gKGFjYywgdmFsdWUpID0+IG5leHRbcC5zdGVwXShhY2MsIGZuKHZhbHVlKSk7XG4gKiAgIHJldHVybiB0b1RyYW5zZHVjZXIoc3RlcCwgbmV4dCk7XG4gKiB9XG4gKlxuICogZnVuY3Rpb24gZmlsdGVyVHJhbnNkdWNlcihmbiwgbmV4dCkge1xuICogICBjb25zdCBzdGVwID0gKGFjYywgdmFsdWUpID0+IGZuKHZhbHVlKSA/IG5leHRbcC5zdGVwXShhY2MsIHZhbHVlKSA6IGFjYztcbiAqICAgcmV0dXJuIHRvVHJhbnNkdWNlcihzdGVwLCBuZXh0KTtcbiAqIH1cbiAqIGBgYFxuICpcbiAqIGB7QGxpbmsgbW9kdWxlOnhkY29yZS50b1RyYW5zZHVjZXJ8dG9UcmFuc2R1Y2VyfWAgdGFrZXMgYSBzdGVwIGZ1bmN0aW9uIGFuZFxuICogdGhlIG5leHQgb2JqZWN0IGFuZCB0YWtlcyBjYXJlIG9mIHRoZSBgaW5pdGAgYW5kIGBmaW5hbGAgbWV0aG9kcyBmb3IgeW91LlxuICpcbiAqIElmIHlvdSBwbGFuIHRvIHdyaXRlIHlvdXIgdHJhbnNkdWNlcnMgdG8gd29yayB3aXRoIGhpZ2gtbGV2ZWxcbiAqIHtAbGluayBtb2R1bGU6eGR1Y2V8eGR1Y2V9IGZ1bmN0aW9ucyBsaWtlXG4gKiBge0BsaW5rIG1vZHVsZTp4ZHVjZS5zZXF1ZW5jZXxzZXF1ZW5jZX1gIG9yXG4gKiBge0BsaW5rIG1vZHVsZTp4ZHVjZS50cmFuc2R1Y2V8dHJhbnNkdWNlfWAsIHRoZW4gdGhpcyBpcyBlbm91Z2guIFlvdSBkb24ndFxuICogbmVlZCB0byBnbyBhbnkgZnVydGhlci4gSG93ZXZlciwgdGhpcyBpcyBub3QgZW5vdWdoIGZvciB0aGVcbiAqIGB7QGxpbmsgbW9kdWxlOnhkY29yZS5yZWR1Y2V8cmVkdWNlfWAgZnVuY3Rpb24sIHdoaWNoIGV4cGVjdHMgYSAqcmVkdWNlcipcbiAqIG9iamVjdCwgbm90IGEgdHJhbnNkdWNlciBvYmplY3QuIChge0BsaW5rIG1vZHVsZTp4ZHVjZS50cmFuc2R1Y2V8dHJhbnNkdWNlfWBcbiAqIGFsc28gZXhwZWN0cyBhIHJlZHVjZXIgb2JqZWN0LCBidXQgdGhhdCdzICppbiBhZGRpdGlvbiB0byogYSB0cmFuc2R1Y2VyXG4gKiBvYmplY3QgYW5kIG5vdCBpbiBwbGFjZSBvZiBvbmUuKSBge0BsaW5rIG1vZHVsZTp4ZGNvcmUucmVkdWNlfHJlZHVjZX1gXG4gKiBkb2Vzbid0IGNhcmUgaWYgdGhhdCByZWR1Y2VyIG9iamVjdCBoYXMgb3RoZXIgdHJhbnNkdWNlciBvYmplY3RzIGNoYWluZWQgdG9cbiAqIGl0OyBpdCBvbmx5IGNhcmVzIHRoYXQgdGhlIHdob2xlIG9iamVjdCBhY3RzIGxpa2UgYSByZWR1Y2VyLCB3aGljaCBpdCB3aWxsXG4gKiB1c2UgdG8gYnVpbGQgYSBuZXcgY29sbGVjdGlvbi5cbiAqXG4gKiBUaGVyZSBpcyBhIHNpbWlsYXIgZnVuY3Rpb24gZm9yIHJlZHVjZXIgb2JqZWN0cywgY2FsbGVkXG4gKiBge0BsaW5rIG1vZHVsZTp4ZGNvcmUudG9SZWR1Y2VyfHRvUmVkdWNlcn1gLiBJdCB0YWtlcyBhICpyZWR1Y2libGUgb2JqZWN0KlxuICogYW5kIHJldHVybnMgYSByZWR1Y2VyIG9iamVjdCBmb3IgaXQuIEEgcmVkdWNpYmxlIG9iamVjdCBpcyBhbnkgb2JqZWN0IHRoYXRcbiAqIGhhcyB0aGUgdGhyZWUgcmVkdWNlciBwcm90b2NvbCBmdW5jdGlvbnMgb24gaXQgdG8gZGVzY3JpYmUgaG93IGEgbmV3XG4gKiBjb2xsZWN0aW9uIG9mIGl0cyB0eXBlIGlzIG1hZGU7IGluIHRoZSBpbW11dGFibGUgbGlzdCBleGFtcGxlIGFib3ZlLCBhZnRlclxuICogeW91IGFkZCB0aGUgcHJvdG9jb2wgbWV0aG9kcyB0byBpdCwgYExpc3RgIGlzIGEgcmVkdWNpYmxlIG9iamVjdC4gQXJyYXlzLFxuICogc3RyaW5ncywgZnVuY3Rpb25zLCBhbmQgcGxhaW4gb2JqZWN0cyBhcmUgYWxzbyByZWR1Y2libGUgb2JqZWN0cyBieSB2aXJ0dWUgb2ZcbiAqIHNwZWNpZmljIHN1cHBvcnQgYnVpbHQgaW50byBge0BsaW5rIG1vZHVsZTp4ZGNvcmUudG9SZWR1Y2VyfHRvUmVkdWNlcn1gLlxuICpcbiAqIFdpdGggdGhlc2UgdHdvIHNpbXBsZSBmdW5jdGlvbnMsIHdlIGNhbiBwcmV0dHkgZWFzaWx5IHVzZVxuICogYHtAbGluayBtb2R1bGU6eGRjb3JlLnJlZHVjZXxyZWR1Y2V9YCBkaXJlY3RseSB0byBwZXJmb3JtIHRoZSB0cmFuc2R1Y3Rpb25cbiAqIGRpYWdyYW1tZWQgYWJvdmUuXG4gKlxuICogYGBgXG4gKiBpbXBvcnQgeyB0b1JlZHVjZXIsIHJlZHVjZSB9IGZyb20gXCJAY2hhbmtvL3hkY29yZVwiO1xuICpcbiAqIGNvbnN0IGlzRXZlbiA9IHggPT4geCAlIDIgPT09IDA7XG4gKiBjb25zdCBhZGRPbmUgPSB4ID0+IHggKyAxO1xuICpcbiAqIGxldCByZWR1Y2VyID0gdG9SZWR1Y2VyKFtdKTtcbiAqIHJlZHVjZXIgPSBmaWx0ZXJUcmFuc2R1Y2VyKGlzRXZlbiwgcmVkdWNlcik7XG4gKiByZWR1Y2VyID0gbWFwVHJhbnNkdWNlcihhZGRPbmUsIHJlZHVjZXIpO1xuICpcbiAqIGNvbnN0IHIgPSByZWR1Y2UoWzEsIDIsIDMsIDQsIDVdLCByZWR1Y2VyLCBbXSk7XG4gKiBjb25zb2xlLmxvZyhyKTsgICAvLyAtPiBbMiwgNCwgNl1cbiAqIGBgYFxuICpcbiAqIFRoZXJlIGFyZSBzb21lIGltcG9ydGFudCBwb2ludHMgdG8gbm90aWNlIGFib3V0IHRoaXMgZXhhbXBsZS5cbiAqXG4gKiAxLiBUaGUgdHJhbnNkdWNlciBjaGFpbiBpcyBidWlsdCBiYWNrd2FyZHMsIHN0YXJ0aW5nIGZyb20gdGhlIHJlZHVjZXIgYW5kXG4gKiAgICBhZGRpbmcgdGhlIHRyYW5zZHVjZXJzIGluIHJldmVyc2Ugb3JkZXIuIFRoaXMgbWFrZXMgc2Vuc2UsIGFzIGVhY2hcbiAqICAgIHRyYW5zZHVjZXIgZnVuY3Rpb24gcmVxdWlyZXMgYSByZWZlcmVuY2UgdG8gdGhlIGZvbGxvd2luZ1xuICogICAgdHJhbnNkdWNlci9yZWR1Y2VyIG9iamVjdCB3aGVuIGl0J3MgY2FsbGVkLlxuICogMi4gVGhpcyBjcmVhdGVzIGFuIGFycmF5LCBidXQgc2luY2VcbiAqICAgIGB7QGxpbmsgbW9kdWxlOnhkY29yZS50b1JlZHVjZXJ8dG9SZWR1Y2VyfWAgY2FuIGNyZWF0ZSBhIHJlZHVjZXIgb2JqZWN0XG4gKiAgICBmcm9tIGFueSByZWR1Y2libGUgb2JqZWN0LCB3ZSBjb3VsZCBoYXZlIHBhc3NlZCBgTGlzdGAgdG8gaXQgKGFmdGVyIGFkZGluZ1xuICogICAgdGhlIHRocmVlIHByb3RvY29sIHByb3BlcnRpZXMgYXMgaW4gdGhlIGVhcmxpZXIgaW1tdXRhYmxlIGxpc3QgZXhhbXBsZSlcbiAqICAgIGFuZCBge0BsaW5rIG1vZHVsZTp4ZGNvcmUucmVkdWNlfHJlZHVjZX1gIHdvdWxkIHJldHVybiBhbiBpbW11dGFibGUgbGlzdFxuICogICAgaW5zdGVhZC4gKFNvcnQgb2YuLi5ge0BsaW5rIG1vZHVsZTp4ZGNvcmUucmVkdWNlfHJlZHVjZX1gIGFjdHVhbGx5IG9ubHlcbiAqICAgIGRlYWxzIHdpdGggYHN0ZXBgIGFuZCBgZmluYWxgIHByb3RvY29sIG1ldGhvZHMgYmVjYXVzZSBpbnRlcm5hbGx5LCBpdFxuICogICAgc29tZXRpbWVzIHdvcmtzIHdpdGggcmVkdWNlciBvYmplY3RzIHRoYXQgZG9uJ3QgaGF2ZSBhbiBgaW5pdGAgcHJvdG9jb2xcbiAqICAgIG1ldGhvZCwgbGlrZSBvbmVzIGNyZWF0ZWQgZnJvbSBmdW5jdGlvbnMuIFRoaXMgaXMgd2h5XG4gKiAgICBge0BsaW5rIG1vZHVsZTp4ZGNvcmUucmVkdWNlfHJlZHVjZX1gIHRha2VzIGEgdGhpcmQgcGFyYW1ldGVyLCBjYWxsZWRcbiAqICAgIGBpbml0YC4gU28gZm9yIHRoaXMgdG8gd29yayBwcm9wZXJseSB3aXRoIGFuIGltbXV0YWJsZSBsaXN0LCB5b3Ugd291bGRcbiAqICAgIGFsc28gaGF2ZSB0byBwYXNzIGBMaXN0KCkuYXNNdXRhYmxlKClgIGFzIHRoZSB0aGlyZCBwYXJhbWV0ZXIsIGluIHBsYWNlIG9mXG4gKiAgICBgW11gIGluIHRoZSBleGFtcGxlIGNvZGUuIFRoaXMgaXMgbm90IHNvbWV0aGluZyB5b3UgaGF2ZSB0byB3b3JyeSBhYm91dFxuICogICAgd2l0aCBoaWdoZXItbGV2ZWwgZnVuY3Rpb25zIGluIHRoZSB7QGxpbmsgbW9kdWxlOnhkdWNlfHhkdWNlfSBtb2R1bGUuKVxuICogMy4gVGhpcyBpcyBhbGwgbW9yZSBlYXNpbHkgZG9uZSB1c2luZyB0aGUge0BsaW5rIG1vZHVsZTp4ZHVjZXx4ZHVjZX0gbW9kdWxlLFxuICogICAgd2hpY2ggaGFuZGxlcyBtdWNoIG9mIHRoaXMgd29yayBmb3IgeW91LiBUaGlzIGV4YW1wbGUganVzdCBzaG93cyBob3cgeW91XG4gKiAgICBjYW4gYnVpbGQgeW91ciBvd24gdHJhbnNkdWNlciBvYmplY3RzLCBjaGFpbiB0aGVtIHRvZ2V0aGVyLCBhbmQgdXNlXG4gKiAgICBge0BsaW5rIG1vZHVsZTp4ZGNvcmUucmVkdWNlfHJlZHVjZX1gIHRvIHByb2Nlc3MgdGhlbS5cbiAqXG4gKiBIZXJlIGlzIHdoYXQgaXQgd291bGQgbG9vayBsaWtlIHdpdGggdGhlIHtAbGluayBtb2R1bGU6eGR1Y2V8eGR1Y2V9IG1vZHVsZS5cbiAqXG4gKiBgYGBcbiAqIGltcG9ydCB7IG1hcCwgZmlsdGVyLCBzZXF1ZW5jZSwgY29tcG9zZSB9IGZyb20gXCJAY2hhbmtvL3hkdWNlXCI7XG4gKlxuICogY29uc3QgaXNFdmVuID0geCA9PiB4ICUgMiA9PT0gMDtcbiAqIGNvbnN0IGFkZE9uZSA9IHggPT4geCArIDE7XG4gKlxuICogY29uc3QgciA9IHNlcXVlbmNlKFsxLCAyLCAzLCA0LCA1XSwgY29tcG9zZShtYXAoYWRkT25lKSwgZmlsdGVyKGlzRXZlbikpKTtcbiAqIGNvbnNvbGUubG9nKHIpOyAgIC8vIC0+IFsyLCA0LCA2XVxuICogYGBgXG4gKlxuICogTW9yZSBkZXRhaWxzIGFyZSBhdmFpbGFibGUgaW4gdGhlIGRvY3VtZW50YXRpb24gZm9yIHRoZVxuICoge0BsaW5rIG1vZHVsZTp4ZHVjZXx4ZHVjZX0gbW9kdWxlLCBidXQgYmFzaWNhbGx5XG4gKiBge0BsaW5rIG1vZHVsZTp4ZHVjZS5jb21wb3NlfGNvbXBvc2V9YCBjaGFpbnMgdHJhbnNkdWNlciBvYmplY3RzIHRvZ2V0aGVyLFxuICogd2hpbGUgYHtAbGluayBtb2R1bGU6eGR1Y2Uuc2VxdWVuY2V8c2VxdWVuY2V9YCBmaWd1cmVzIG91dCB3aGF0IGluaXRpYWxcbiAqIGNvbGxlY3Rpb24gYW5kIHdoYXQgcmVkdWNlciBvYmplY3QgdG8gdXNlIChmcm9tIHRoZSBpbnB1dCBjb2xsZWN0aW9uKSwgY2hhaW5zXG4gKiB0aGUgdHJhbnNkdWNlciBvYmplY3RzIHRvIHRoZSByZWR1Y2VyIG9iamVjdCwgYW5kIHBhc3NlcyBhbGwgb2YgdGhlIHJlbGV2YW50XG4gKiBpbmZvcm1hdGlvbiB0byBge0BsaW5rIG1vZHVsZTp4ZGNvcmUucmVkdWNlfHJlZHVjZX1gLlxuICpcbiAqIGB7QGxpbmsgbW9kdWxlOnhkY29yZS5yZWR1Y2V8cmVkdWNlfWAgd29ya3MgaW4gYSBzaW1wbGUgd2F5LCBidXQgdGhlcmUgaXMgb25lXG4gKiBiaXQgb2Ygc3BlY2lhbCBmdW5jdGlvbmFsaXR5IHRoYXQncyByZWxldmFudCB0byB3cml0aW5nIHRyYW5zZHVjZXJzLiBJZiBpdFxuICogcHJvY2Vzc2VzIGFuIGVsZW1lbnQgYW5kIHRoZSB2YWx1ZSByZXR1cm5lZCBieSB0aGUgcmVkdWNlci90cmFuc2R1Y2VyIGNoYWluXG4gKiBpcyBhICpjb21wbGV0ZWQgdmFsdWUqLCBpdCB3aWxsIGNlYXNlIHRoZSByZWR1Y3Rpb24gcmlnaHQgdGhlcmUgZXZlbiBpZiB0aGVyZVxuICogYXJlIG1vcmUgZWxlbWVudHMgaW4gdGhlIGlucHV0IGNvbGxlY3Rpb24uIEEgY29tcGxldGVkIHZhbHVlIGlzIGEgdmFsdWUgdGhhdFxuICogaXMgd3JhcHBlZCBpbiBhbiBvYmplY3QgdXNpbmcgdGhlIG90aGVyIHR3byByZWR1Y2VyIHByb3RvY29sIHByb3BlcnRpZXMsXG4gKiBgY29tcGxldGVkYCBhbmQgYHZhbHVlYDpcbiAqXG4gKiBgYGBcbiAqIGltcG9ydCB7IHByb3RvY29scyBhcyBwIH0gZnJvbSBcIkBjaGFua28veGRjb3JlXCI7XG4gKlxuICogLy8gQSByZWd1bGFyIHZhbHVlXG4gKiBjb25zdCB2YWx1ZSA9IDE3Mjk7XG4gKlxuICogLy8gQSBjb21wbGV0ZWQgdmVyc2lvbiBvZiB0aGF0IHNhbWUgdmFsdWVcbiAqIGNvbnN0IGNvbXBsZXRlZCA9IHtcbiAqICAgW3AuY29tcGxldGVkXTogdHJ1ZSxcbiAqICAgW3AudmFsdWVdOiAxNzI5LFxuICogfTtcbiAqIGBgYFxuICpcbiAqIFRoZSByZWFzb24gZm9yIHRoZSBsb25nLXdpbmRlZG5lc3Mgb2YgdXNpbmcgYSB3cmFwcGVyIGlzIHNvIHRoYXQgYSBjb21wbGV0ZWRcbiAqIHZhbHVlIGNhbiBiZSBjb21wbGV0ZWQgYWdhaW4sIG1ha2luZyBpdCBkb3VibGUtd3JhcHBlZC4gVGhpcyBpcyBvY2Nhc2lvbmFsbHlcbiAqIHVzZWZ1bCBpbiB3cml0aW5nIG1vcmUgY29tcGxleCB0cmFuc2R1Y2VycywgYW5kIGl0IGlzIHNpbXBsZXN0IHRvIGFjaGlldmVcbiAqIHdpdGggYSB3cmFwcGVyLlxuICpcbiAqIEEgZ29vZCBleGFtcGxlIG9mIHRoZSB1c2Ugb2YgYSBjb21wbGV0ZWQgdmFsdWUgaXMgdGhlXG4gKiBge0BsaW5rIG1vZHVsZTp4ZHVjZS50YWtlfHRha2V9YCB0cmFuc2R1Y2VyLCB3aGljaCByZXR1cm5zIGEgY2VydGFpbiBudW1iZXJcbiAqIG9mIGVsZW1lbnRzIGFuZCB0aGVuIHJldHVybnMgbm8gbW9yZS4gSGVyZSdzIGhvdyBpdCB3b3VsZCBsb29rIHVzaW5nXG4gKiB7QGxpbmsgbW9kdWxlOnhkdWNlfHhkdWNlfTpcbiAqXG4gKiBgYGBcbiAqIGltcG9ydCB7IHRha2UgfSBmcm9tIFwiQGNoYW5rby94ZHVjZVwiO1xuICogY29uc3QgciA9IHRha2UoWzEsIDIsIDMsIDQsIDVdLCAyKTtcbiAqIGNvbnNvbGUubG9nKHIpOyAgIC8vIC0+IFsxLCAyXVxuICogYGBgXG4gKlxuICogTm8gbWF0dGVyIGhvdyBtYW55IGVsZW1lbnRzIGFyZSBpbiB0aGUgaW5wdXQgY29sbGVjdGlvbixcbiAqIGB7QGxpbmsgbW9kdWxlOnhkdWNlLnRha2V8dGFrZX1gIHdpbGwgb25seSBwcm9jZXNzIGEgY2VydGFpbiBudW1iZXIgKGluIHRoaXNcbiAqIGNhc2UsIDIpLiBUaGUgaW5wdXQgY29sbGVjdGlvbiBjb3VsZCBldmVuIGJlIGEgZ2VuZXJhdG9yIHRoYXQgbmV2ZXJcbiAqIHRlcm1pbmF0ZXMsIGFuZCBpdCB3b3VsZCBzdGlsbCB3b3JrIGZpbmUuIGB7QGxpbmsgbW9kdWxlOnhkdWNlLnRha2V8dGFrZX1gXG4gKiBkb2VzIHRoaXMgYnksIGF0IHNvbWUgcG9pbnQsIHJldHVybmluZyBhIGNvbXBsZXRlZCwgd2hpY2ggaW4gdHVybiBjYXVzZXNcbiAqIGB7QGxpbmsgbW9kdWxlOnhkY29yZS5yZWR1Y2V8cmVkdWNlfWAgdG8gc3RvcCBwcm9jZXNzaW5nLlxuICpcbiAqIGBgYFxuICogaW1wb3J0IHsgcHJvdG9jb2xzIGFzIHAsIHRvVHJhbnNkdWNlciB9IGZyb20gXCJAY2hhbmtvL3hkY29yZVwiO1xuICpcbiAqIGZ1bmN0aW9uIHRha2VUcmFuc2R1Y2VyKG4sIG5leHQpIHtcbiAqICAgbGV0IGkgPSAwO1xuICogICBjb25zdCBzdGVwID0gKGFjYywgdmFsdWUpID0+IHtcbiAqICAgICBsZXQgcmVzdWx0ID0gbmV4dFtwLnN0ZXBdKGFjYywgdmFsdWUpO1xuICogICAgIGlmIChpID09PSBuIC0gMSkge1xuICogICAgICAgcmVzdWx0ID0ge1xuICogICAgICAgICBbcC5jb21wbGV0ZWRdOiB0cnVlLFxuICogICAgICAgICBbcC52YWx1ZV06IHJlc3VsdCxcbiAqICAgICAgIH07XG4gKiAgICAgfVxuICogICAgIGkrKztcbiAqICAgICByZXR1cm4gcmVzdWx0O1xuICogICB9O1xuICogICByZXR1cm4gdG9UcmFuc2R1Y2VyKHN0ZXAsIG5leHQpO1xuICogfVxuICogYGBgXG4gKlxuICogVGhpcyBpcyBhIGJpdCBtb3JlIGNvbXBsZXgsIGJ1dCB0aGUgZ2lzdCBvZiBpdCBpcyB0aGF0IHRoZSB0cmFuc2R1Y2VyIG9iamVjdFxuICogc2ltcGx5IHBhc3NlcyB0aGUgdmFsdWUgb24gZG93biB0aGUgY2hhaW4uIEhvd2V2ZXIsIGlmIHRoZSBlbGVtZW50IGJlaW5nXG4gKiBwcm9jZXNzZWQgaXMgdGhlIGxhc3Qgb25lIGJlZm9yZSBpdCByZWFjaGVzIHRoZSB0YXJnZXQgbnVtYmVyIG9mIGVsZW1lbnRzLFxuICogdGhlIHZhbHVlIHJldHVybmVkIGZyb20gdGhlIGNoYWluIGlzIHdyYXBwZWQgYXMgYSBjb21wbGV0ZWQgb2JqZWN0LlxuICogYHtAbGluayBtb2R1bGU6eGRjb3JlLnJlZHVjZXxyZWR1Y2V9YCB3aWxsIHNlZSB0aGlzIHZhbHVlIGFuZCBzdG9wIHRoZVxuICogcHJvY2VzcyBhcyBzb29uIGFzIGl0IGRvZXMuXG4gKlxuICogQXMgeW91IG1pZ2h0IGV4cGVjdCwgdGhlcmUgYXJlIGhlbHBlciBmdW5jdGlvbnMgZm9yIHdyaXRpbmcgdHJhbnNkdWNlcnMgbGlrZVxuICogdGhpczpcbiAqXG4gKiAqIGB7QGxpbmsgbW9kdWxlOnhkY29yZS5jb21wbGV0ZXxjb21wbGV0ZX1gXG4gKiAqIGB7QGxpbmsgbW9kdWxlOnhkY29yZS51bmNvbXBsZXRlfHVuY29tcGxldGV9YFxuICogKiBge0BsaW5rIG1vZHVsZTp4ZGNvcmUuZW5zdXJlQ29tcGxldGVkfGVuc3VyZUNvbXBsZXRlZH1gXG4gKiAqIGB7QGxpbmsgbW9kdWxlOnhkY29yZS5lbnN1cmVVbmNvbXBsZXRlZHxlbnN1cmVVbmNvbXBsZXRlZH1gXG4gKiAqIGB7QGxpbmsgbW9kdWxlOnhkY29yZS5pc0NvbXBsZXRlZHxpc0NvbXBsZXRlZH1gXG4gKlxuICogVGhlIGZpcnN0IHR3byBlaXRoZXIgd3JhcCBvciB1bndyYXAgYSB2YWx1ZSBpbiB0aGUgY29tcGxldGVkIHdyYXBwZXIuIFRoZVxuICogdGhpcmQgYW5kIGZvdXJ0aCBkbyB0aGUgc2FtZSB0aGluZywgYnV0IHRoZXkgb25seSBkbyBpdCBpZiBpdCdzIGFjdHVhbGx5XG4gKiBuZWNlc3NhcnkgdG8gZG8gc28gKGB7QGxpbmsgbW9kdWxlOnhkY29yZS5jb21wbGV0ZXxjb21wbGV0ZX1gIHdpbGxcbiAqIGRvdWJsZS13cmFwIGEgdmFsdWUgaWYgcGFzc2VkIGFuIGFscmVhZHktY29tcGxldGVkIHZhbHVlO1xuICogYHtAbGluayBtb2R1bGU6eGRjb3JlLmVuc3VyZUNvbXBsZXRlZHxlbnN1cmVDb21wbGV0ZWR9YCB3aWxsIG5vdCBkbyB0aGlzXG4gKiBkb3VibGUgd3JhcHBpbmcpLiBUaGUgZmluYWwgZnVuY3Rpb24gc2ltcGx5IHJldHVybnMgd2hldGhlciBvciBub3QgdGhlIHZhbHVlXG4gKiBwYXNzZWQgdG8gaXQgaXMgYSBjb21wbGV0ZWQgb2JqZWN0LlxuICpcbiAqIFRoZXNlIGZ1bmN0aW9ucyBtZWFuIHRoYXQgeW91IHNob3VsZCBuZXZlciBoYXZlIHRvIHdvcmsgZGlyZWN0bHkgd2l0aCBlaXRoZXJcbiAqIHRoZSBgY29tcGxldGVkYCBvciBgdmFsdWVgIHJlZHVjZXIgcHJvdG9jb2wgcHJvcGVydGllcy5cbiAqXG4gKiBXaXRoIHRob3NlIGluIG1pbmQsIHRoZSBhY3R1YWwgc3RlcCBmdW5jdGlvbiBmb3IgdGhlIHRha2UgdHJhbnNkdWNlciBpcyBhXG4gKiBsaXR0bGUgc2ltcGxlci5cbiAqXG4gKiBgYGBcbiAqIGNvbnN0IHN0ZXAgPSAoYWNjLCB2YWx1ZSkgPT4ge1xuICogICBsZXQgcmVzdWx0ID0gbmV4dFtwLnN0ZXBdKGFjYywgdmFsdWUpO1xuICogICBpZiAoaSA9PT0gbiAtIDEpIHtcbiAqICAgICByZXN1bHQgPSBjb21wbGV0ZShyZXN1bHQpO1xuICogICB9XG4gKiAgIGkrKztcbiAqICAgcmV0dXJuIHJlc3VsdDtcbiAqIH07XG4gKiBgYGBcbiAqXG4gKiBBZnRlciBhbGwgdGhhdCwgb25lIGZpbmFsIGJpdCBvZiBwcm92aWRlZCBmdW5jdGlvbmFsaXR5OiB0aGVyZSBhcmUgYSBzZXJpZXNcbiAqIG9mIGhlbHBlciBmdW5jdGlvbnMgdG8gZGV0ZXJtaW5lIHRoZSB0eXBlIG9mIGEgdmFsdWUuXG4gKlxuICogKiBge0BsaW5rIG1vZHVsZTp4ZGNvcmUuaXNBcnJheXxpc0FycmF5fWBcbiAqICogYHtAbGluayBtb2R1bGU6eGRjb3JlLmlzRnVuY3Rpb258aXNGdW5jdGlvbn1gXG4gKiAqIGB7QGxpbmsgbW9kdWxlOnhkY29yZS5pc0dlbmVyYXRvckZ1bmN0aW9ufGlzR2VuZXJhdG9yRnVuY3Rpb259YFxuICogKiBge0BsaW5rIG1vZHVsZTp4ZGNvcmUuaXNOdW1iZXJ8aXNOdW1iZXJ9YFxuICogKiBge0BsaW5rIG1vZHVsZTp4ZGNvcmUuaXNPYmplY3R8aXNPYmplY3R9YFxuICogKiBge0BsaW5rIG1vZHVsZTp4ZGNvcmUuaXNTdHJpbmd8aXNTdHJpbmd9YFxuICpcbiAqIFRoZXNlIGFsbCB3b3JrIGFzIHlvdSBtaWdodCBleHBlY3QsIHdpdGggYSBmZXcgY2F2ZWF0cy5cbiAqXG4gKiAxLiBge0BsaW5rIG1vZHVsZTp4ZGNvcmUuaXNGdW5jdGlvbnxpc0Z1bmN0aW9ufWAgd2lsbCByZXR1cm4gYGZhbHNlYCBpZlxuICogICAgcGFzc2VkIGEgZ2VuZXJhdG9yIGZ1bmN0aW9uLiBVc2VcbiAqICAgIGB7QGxpbmsgbW9kdWxlOnhkY29yZS5pc0dlbmVyYXRvckZ1bmN0aW9ufGlzR2VuZXJhdG9yRnVuY3Rpb259YCB0byBjaGVja1xuICogICAgZm9yIHRob3NlLlxuICogMi4gYHtAbGluayBtb2R1bGU6eGRjb3JlLmlzTnVtYmVyfGlzTnVtYmVyfWAgaXMgb25seSBmb3IgY29uY3JldGUgbnVtYmVyc1xuICogICAgdGhhdCBhcmUgbm90IHN0cmluZ3MuIEl0IHdpbGwgcmV0dXJuIGBmYWxzZWAgZm9yIGBJbmZpbml0eWAsIGBOYU5gLCBhbmRcbiAqICAgIHRoaW5ncyBsaWtlIGBcIjE3MjlcImAuXG4gKiAzLiBge0BsaW5rIG1vZHVsZTp4ZGNvcmUuaXNPYmplY3R8aXNPYmplY3R9YCByZXR1cm5zIGB0cnVlYCBvbmx5IGZvciBwbGFpblxuICogICAgb2JqZWN0cy4gSXQgd2lsbCByZXR1cm4gYGZhbHNlYCBmb3IgYW55IG90aGVyIHNvcnQgb2Ygb2JqZWN0LCBpbmNsdWRpbmdcbiAqICAgIHRoaW5ncyBsaWtlIGFycmF5cywgb2JqZWN0cyB3aXRoIGNvbnN0cnVjdG9ycyAoZnJvbSBjbGFzc2VzIG9yIGZyb21cbiAqICAgIGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyksIGFuZCBgbnVsbGAgKHdoaWNoIGZhbW91c2x5IHJldHVybnMgYFwib2JqZWN0XCJgIHdoZW5cbiAqICAgIGB0eXBlb2ZgIGlzIHVzZWQgb24gaXQpLlxuICogNC4gYHtAbGluayBtb2R1bGU6eGRjb3JlLmlzQXJyYXl8aXNBcnJheX1gIGlzIGp1c3QgdGhlIHJlZ3VsYXJcbiAqICAgIGBBcnJheS5pc0FycmF5YCwgcGFja2FnZWQgaGVyZSBmb3IgY29uc2lzdGVuY3kuXG4gKlxuICogWzFdOiBodHRwczovL2ltbXV0YWJsZS1qcy5naXRodWIuaW8vaW1tdXRhYmxlLWpzL1xuICpcbiAqIEBtb2R1bGUgeGRjb3JlXG4gKi9cblxuZXhwb3J0IHsgcHJvdG9jb2xzLCBpc0ltcGxlbWVudGVkIH0gZnJvbSBcIm1vZHVsZXMvcHJvdG9jb2xcIjtcbmV4cG9ydCB7IGl0ZXJhdG9yLCBpc0l0ZXJhYmxlIH0gZnJvbSBcIm1vZHVsZXMvaXRlcmF0aW9uXCI7XG5leHBvcnQge1xuICBjb21wbGV0ZSxcbiAgdW5jb21wbGV0ZSxcbiAgaXNDb21wbGV0ZWQsXG4gIGVuc3VyZUNvbXBsZXRlZCxcbiAgZW5zdXJlVW5jb21wbGV0ZWQsXG4gIHJlZHVjZSxcbiAgdG9GdW5jdGlvbixcbiAgdG9SZWR1Y2VyLFxuICB0b1RyYW5zZHVjZXJcbn0gZnJvbSBcIm1vZHVsZXMvcmVkdWN0aW9uXCI7XG5leHBvcnQge1xuICBpc0FycmF5LFxuICBpc0Z1bmN0aW9uLFxuICBpc0dlbmVyYXRvckZ1bmN0aW9uLFxuICBpc051bWJlcixcbiAgaXNPYmplY3QsXG4gIGlzU3RyaW5nXG59IGZyb20gXCJtb2R1bGVzL3V0aWxzXCI7XG5cbi8qKlxuICogQSBzdGFuZGFyZCBKYXZhU2NyaXB0IGl0ZXJhYmxlLiBUaGlzIG9iamVjdCBoYXMgYSBwcm9wZXJ0eSBuYW1lZFxuICogYFtTeW1ib2wuaXRlcmF0b3JdYCB3aGljaCBwcm92aWRlcyBhbiBvYmplY3QgdGhhdCBzYXRpc2ZpZXMgdGhlXG4gKiB7QGxpbmsgZXh0ZXJuYWw6SXRlcmF0b3J8SXRlcmF0b3J9IHByb3RvY29sLlxuICpcbiAqIEBleHRlcm5hbCBJdGVyYWJsZVxuICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9JdGVyYXRpb25fcHJvdG9jb2xzI1RoZV9pdGVyYWJsZV9wcm90b2NvbFxuICovXG5cbi8qKlxuICogQSBzdGFuZGFyZCBKYXZhU2NyaXB0IGl0ZXJhdG9yLiBUaGlzIG9iamVjdCBoYXMgYSBmdW5jdGlvbiBwcm9wZXJ0eSBuYW1lZFxuICogYG5leHRgIHRoYXQsIGVhY2ggdGltZSBpdCdzIGNhbGxlZCwgcmV0dXJucyBhIG5ldyBvYmplY3Qgd2l0aCB0d29cbiAqIHByb3BlcnRpZXM6IGB2YWx1ZWAsIHdoaWNoIGNvbnRhaW5zIHRoZSBpdGVyYXRvcidzIHZhbHVlIGF0IHRoYXQgcG9pbnQsIGFuZFxuICogYGRvbmVgLCB3aGljaCBpcyBgZmFsc2VgIHVudGlsIHRoZSBpdGVyYXRvciBoYXMgaGFkIGFsbCBvZiBpdHMgdmFsdWVzIHJlYWQuXG4gKlxuICogQGV4dGVybmFsIEl0ZXJhdG9yXG4gKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0l0ZXJhdGlvbl9wcm90b2NvbHMjVGhlX2l0ZXJhdG9yX3Byb3RvY29sXG4gKi9cblxuLyoqXG4gKiBBIGZ1bmN0aW9uIHRoYXQgY2FuIGhhdmUgYW4gaXRlcmF0b3IgY3JlYXRlZCBmb3IgaXQuXG4gKlxuICogQGNhbGxiYWNrIEl0ZXJhYmxlRnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGRjb3JlXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IGZvciB0aGUgaXRlcmF0aW9uLiBUaGlzIGlzIGAwYCB0aGUgZmlyc3RcbiAqICAgICB0aW1lIHRoZSBmdW5jdGlvbiBpcyBjYWxsZWQgYW5kIGluY3JlYXNlcyBieSAxIGZvciBlYWNoIGNhbGxcbiAqICAgICB0aGVyZWFmdGVyLlxuICogQHBhcmFtIHsqfSBsYXN0IFRoZSByZXR1cm4gdmFsdWUgb2YgdGhlIGZ1bmN0aW9uIHdoZW4gaXQgd2FzIGNhbGxlZCBvbiB0aGVcbiAqICAgICBwcmV2aW91cyBpdGVyYXRpb24uIElmIHRoaXMgaXMgdGhlIGZpcnN0IGNhbGwgdG8gdGhlIGZ1bmN0aW9uLCB0aGVuXG4gKiAgICAgdGhpcyB2YWx1ZSB3aWxsIGJlIGB1bmRlZmluZWRgLCBtZWFuaW5nIHRoYXQgdGhlIGZ1bmN0aW9uIGNhbiBzZXQgYVxuICogICAgIGRlZmF1bHQgdmFsdWUgZm9yIHRoYXQgZmlyc3QgcGFzcy5cbiAqIEByZXR1cm5zIHsqfSBUaGUgcmV0dXJuIHZhbHVlIG9mIHRoZSBmdW5jdGlvbiwgd2hpY2ggd2lsbCBiZSB0aGUgdmFsdWUgZm9yXG4gKiAgICAgdGhhdCBpdGVyYXRpb24uXG4gKi9cblxuLyoqXG4gKiBBIGZ1bmN0aW9uIHRoYXQsIHdoZW4gY2FsbGVkLCBwcm9kdWNlcyBhIG5ldywgZW1wdHkgY29sbGVjdGlvbiBvZiB3aGF0ZXZlclxuICogdHlwZSBpcyBiZWluZyB3b3JrZWQgd2l0aC5cbiAqXG4gKiBAY2FsbGJhY2sgSW5pdEZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkY29yZVxuICogQHJldHVybnMgeyp9IEEgbmV3LCBlbXB0eSByZXByZXNlbnRhdGl2ZSBvZiB0aGUgY29sbGVjdGlvbi5cbiAqL1xuXG4vKipcbiAqIEEgZnVuY3Rpb24gdGhhdCBhY2NlcHRzIGEgY29sbGVjdGlvbiBhbmQgYSBuZXcgZWxlbWVudCBvZiB0aGF0IGNvbGxlY3Rpb24gYW5kXG4gKiByZXR1cm5zIHRoZSBjb2xsZWN0aW9uIHdpdGggdGhlIG5ldyBlbGVtZW50IGFkZGVkIHRvIGl0LiBUaGlzIGlzIHVzZWQgdG9cbiAqIGJ1aWxkIHVwIGEgbmV3IGNvbGxlY3Rpb24gKHN0YXJ0aW5nIHdpdGggd2hhdGV2ZXJcbiAqIHtAbGluayBtb2R1bGU6eGRjb3JlLkluaXRGdW5jdGlvbnx0aGUgaW5pdCBmdW5jdGlvbn0gcmV0dXJucykgcGllY2UgYnkgcGllY2VcbiAqIGZyb20gaXRzIGVsZW1lbnRzLlxuICpcbiAqIFRoaXMgaXMgaW4gZXZlcnkgd2F5IGEgcmVkdWNlciBmdW5jdGlvbi4gVGhlIG5hbWUgJ3N0ZXAnIGNvbWVzIGZyb20gdGhlIGZhY3RcbiAqIHRoYXQgdGhlc2UgcmVkdWN0aW9uIGZ1bmN0aW9ucyByZWR1Y2Ugb25lIGVsZW1lbnQgYXQgYSB0aW1lLCBzdGVwIGJ5IHN0ZXAuXG4gKlxuICogSXQgaXMgdXAgdG8gdGhlIGltcGxlbWVudGF0aW9uIHdoZXRoZXIgdGhlIHJldHVybmVkIGNvbGxlY3Rpb24gaXMgYSBtb2RpZmllZFxuICogZm9ybSBvZiB0aGUgb3JpZ2luYWwgY29sbGVjdGlvbiBvciB3aGV0aGVyIGl0IGlzIGEgbmV3IGNvbGxlY3Rpb24gYWx0b2dldGhlci5cbiAqXG4gKiBAY2FsbGJhY2sgU3RlcEZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkY29yZVxuICogQHBhcmFtIHsqfSBhY2MgQSBjb2xsZWN0aW9uLCBwZXJoYXBzIHdpdGggc29tZSBtZW1iZXJzIGFscmVhZHkgYWRkZWQgdG8gaXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIEEgbmV3IGVsZW1lbnQgdG8gYmUgYWRkZWQgdG8gdGhhdCBjb2xsZWN0aW9uLlxuICogQHJldHVybnMgVGhlIG9yaWdpbmFsIGNvbGxlY3Rpb24gd2l0aCB0aGUgbmV3IHZhbHVlIGFkZGVkIHRvIGl0LlxuICovXG5cbi8qKlxuICogQSBmdW5jdGlvbiB0aGF0IGFjY2VwdHMgYSBmdWxseSByZWR1Y2VkIGNvbGxlY3Rpb24gYW5kIHJldHVybnMgdGhhdFxuICogY29sbGVjdGlvbiB3aXRoIGFueSBsYXN0LW1pbnV0ZSBtb2RpZmljYXRpb25zIHRoYXQgbWlnaHQgbmVlZCB0byBiZSBkb25lIHRvXG4gKiBpdC5cbiAqXG4gKiBJbiBtb3N0IGNhc2VzIHRoaXMgZnVuY3Rpb24gd2lsbCBzaW1wbHkgcmV0dXJuIGl0cyBhcmd1bWVudCwgdW5tb2RpZmllZCwgYnV0XG4gKiBpdCBkb2VzIGFmZm9yZCB0aGUgdHJhbnNkdWNlciBhbiBvcHBvcnR1bml0eSB0byBtYWtlIGFueSBmaW5hbCBtb2RpZmljYXRpb25zXG4gKiB0aGF0IG1pZ2h0IGJlIG5lY2Vzc2FyeSBiZWZvcmUgdGhlIHJlc3VsdCBpcyByZXR1cm5lZCBmcm9tIHRoZSB0cmFuc2R1Y3Rpb25cbiAqIHByb2Nlc3MuXG4gKlxuICogQGNhbGxiYWNrIEZpbmFsRnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGRjb3JlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSBmdWxseSByZWR1Y2VkIGNvbGxlY3Rpb24uXG4gKiBAcmV0dXJucyB7Kn0gVGhlIHJlZHVjZWQgY29sbGVjdGlvbiB3aXRoIGFueSBpbXBsZW1lbnRhdGlvbi1kZXBlbmRlbnQgY2hhbmdlc1xuICogICAgIHRoYXQgbWlnaHQgYmUgZGVlbWVkIG5lY2Vzc2FyeS5cbiAqL1xuXG4vKipcbiAqIEFuIG9iamVjdCB0aGF0IHByb3ZpZGVzIHRoZSBpbmZvcm1hdGlvbiBuZWNlc3NhcnkgdG8gYnVpbGQgYW5kIHBvcHVsYXRlIGEgbmV3XG4gKiBvYmplY3Qgb2YgYSByZWR1Y2libGUgdHlwZS4gVGhpcyBpbmZvcm1hdGlvbiBpcyB1c2VkIGJ5IHRoZSB0cmFuc2R1Y3Rpb25cbiAqIGVuZ2luZSB0byBjcmVhdGUgYSByZXN1bHQgZnJvbSBhIHJlZHVjdGlvbiB3aXRob3V0IGhhdmluZyB0byBoYXZlIGl0cyBvd25cbiAqIHR5cGUtc3BlY2lmaWMgY29kZTsgdGhlIGNyZWF0aW9uLCBwb3B1bGF0aW9uLCBhbmQgZmluYWxpemF0aW9uIG9mIHRoZSByZXN1bHRcbiAqIGFyZSBkZWxlZ2F0ZWQgaW5zdGVhZCB0byB0aGlzIHJlZHVjZXIgb2JqZWN0LlxuICpcbiAqIE5vdGUgdGhhdCBhICp0cmFuc2R1Y2VyIG9iamVjdCogaGFzIGV4YWN0bHkgdGhlIHNhbWUgc3RydWN0dXJlLiBUaGUgb25seVxuICogZGlmZmVyZW5jZXMgYXJlIHRoYXQgdGhlIHN0ZXAgZnVuY3Rpb24gaW4gYSB0cmFuc2R1Y2VyIG9iamVjdCBtb2RpZmllcyB0aGVcbiAqIGVsZW1lbnRzIGJlZm9yZSBpdCByZWR1Y2VzIHRoZW0sIHdoaWxlIGEgcmVkdWNlciBvYmplY3Qgd2lsbCBub3Q7IGFuZCBhXG4gKiB0cmFuc2R1Y2VyIG9iamVjdCB3aWxsIGNhbGwgdGhlIGVxdWl2YWxlbnQgZnVuY3Rpb25zIGluIHRoZSBuZXh0IG9iamVjdCBpblxuICogdGhlIGNoYWluLCB3aGlsZSBhIHJlZHVjZXIgb2JqZWN0IHdpbGwgbm90LiBBcyBhIGNvcm9sbGFyeSwgZXZlcnkgcmVkdWNlclxuICogb2JqZWN0IGlzIGFsc28gYSB0cmFuc2R1Y2VyIG9iamVjdCwgYnV0IHRoZSBjb252ZXJzZSBpcyBub3QgdHJ1ZS5cbiAqXG4gKiBAdHlwZWRlZiBSZWR1Y2VyT2JqZWN0XG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkY29yZVxuICogQHByb3BlcnR5IHttb2R1bGU6eGRjb3JlLkluaXRGdW5jdGlvbn0gU3ltYm9sLmZvcihcInJlZHVjZXIvaW5pdFwiKSBBIGZ1bmN0aW9uXG4gKiAgICAgdGhhdCBjYW4gY3JlYXRlIGEgbmV3LCBlbXB0eSBjb3B5IG9mIHRoZSByZWR1Y2libGUgdHlwZS5cbiAqIEBwcm9wZXJ0eSB7bW9kdWxlOnhkY29yZS5TdGVwRnVuY3Rpb259IFN5bWJvbC5mb3IoXCJyZWR1Y2VyL3N0ZXBcIikgQSBmdW5jdGlvblxuICogICAgIHRoYXQgY2FuIGFjY2VwdCBhIHZhbHVlIG9mIHRoZSByZWR1Y2libGUgdHlwZSBhbmQgYSBuZXcgZWxlbWVudCB0byBiZVxuICogICAgIGFkZGVkIHRvIGl0IGFuZCByZXR1cm4gdGhlIHJlZHVjaWJsZSB3aXRoIHRoZSBuZXcgZWxlbWVudCBpbmNvcnBvcmF0ZWQuXG4gKiBAcHJvcGVydHkge21vZHVsZTp4ZGNvcmUuRmluYWxGdW5jdGlvbn0gU3ltYm9sLmZvcihcInJlZHVjZXIvZmluYWxcIikgQVxuICogICAgIGZ1bmN0aW9uIHRoYXQgYWNjZXB0cyBhIHZhbHVlIG9mIHRoZSByZWR1Y2libGUgdHlwZSBhbmQgcmV0dXJucyB0aGUgc2FtZVxuICogICAgIHZhbHVlIHdpdGggYW55IGZpbmFsIG1vZGlmaWNhdGlvbnMgdGhhdCBtaWdodCBiZSBuZWNlc3NhcnkgZm9yIGl0LlxuICovXG5cbi8qKlxuICogQSBjb2xsZWN0aW9uIHRoYXQgY2FycmllcyBpdHMgb3duIGluZm9ybWF0aW9uIGFib3V0IGhvdyB0byBwcm9kdWNlIGl0c2VsZi5cbiAqIFRoaXMgaXMgc3RydWN0dXJhbGx5IHRoZSBzYW1lIGFzIGFcbiAqIGB7QGxpbmsgbW9kdWxlOnhkY29yZS5SZWR1Y2VyT2JqZWN0fFJlZHVjZXJPYmplY3R9YC4gSXQgaXMgZ2l2ZW4gYSBkaXN0aW5jdFxuICogdHlwZSBiZWNhdXNlIGl0J3MgYXNzdW1lZCB0aGF0IHRoaXMgdHlwZSB3aWxsIGJlIGEgY29sbGVjdGlvbiB3aXRoIHRoZVxuICogcmVkdWNlciBwcm90b2NvbCBtZXRob2RzIGFkZGVkIHRvIGl0OyBhXG4gKiBge0BsaW5rIG1vZHVsZTp4ZGNvcmUuUmVkdWNlck9iamVjdHxSZWR1Y2VyT2JqZWN0fWAgaXMgbm9ybWFsbHkgYW4gb2JqZWN0XG4gKiB0aGF0IGhhcyAqb25seSogdGhvc2UgcHJvdG9jb2wgbWV0aG9kcyBhbmQgc2VydmVzIG5vIHB1cnBvc2Ugb3RoZXIgdGhhblxuICogcHJvdmlkaW5nIHJlZHVjdGlvbiBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAdHlwZWRlZiB7bW9kdWxlOnhkY29yZS5SZWR1Y2VyT2JqZWN0fSBSZWR1Y2libGVcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGRjb3JlXG4gKi9cblxuLyoqXG4gKiBBIGZ1bmN0aW9uIHRoYXQgYWNjZXB0cyBhIHJlZHVjZXIgb2JqZWN0LCB3aGljaCBpdCB0aGVuIGNoYWlucyBhIHRyYW5zZHVjZXJcbiAqIG9iamVjdCB0by4gVGhpcyBpcyB0aGUgcHJpbWFyeSB3YXkgb2YgY3JlYXRpbmcgY29tcG9zZWQgdHJhbnNkdWNlciBjaGFpbnMuXG4gKlxuICogQSB0cmFuc2R1Y2VyIGZ1bmN0aW9uIGJhc2ljYWxseSBlbmNhcHN1bGF0ZXMgYSB0cmFuc2R1Y2VyIG9iamVjdCBhbmQgdGhlXG4gKiBhYmlsaXR5IHRvIGNoYWluIGl0IHRvIHdoYXRldmVyIHJlZHVjZXIgb2JqZWN0IGlzIHBhc3NlZCB0byBpdC5cbiAqXG4gKiBAY2FsbGJhY2sgVHJhbnNkdWNlckZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkY29yZVxuICogQHBhcmFtIHttb2R1bGU6eGRjb3JlLlJlZHVjZXJPYmplY3R9IHJlZHVjZXIgVGhlIHJlZHVjZXIgb2JqZWN0ICh3aGljaCBtYXlcbiAqICAgICBhbHNvIGJlIGEgdHJhbnNkdWNlciBvYmplY3QpIHRoYXQgaXMgdGhlIG5leHQgcmVkdWNlciBpbiB0aGUgY2hhaW4uXG4gKiBAcmV0dXJucyB7bW9kdWxlOnhkY29yZS5SZWR1Y2VyT2JqZWN0fSBBIHRyYW5zZHVjZXIgb2JqZWN0IGNvbnNpc3Rpbmcgb2Ygc29tZVxuICogICAgIG5ldyB0cmFuc2R1Y2VyIG9iamVjdCBjaGFpbmVkIHRvIHRoZSBzdXBwbGllZCByZWR1Y2VyIG9iamVjdC5cbiAqL1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG5cbi8qKlxuICogRnVuY3Rpb25zIHRvIGhlbHAgd2l0aCBpdGVyYXRpb24gb3ZlciBpdGVyYWJsZSBvYmplY3RzIGFuZCBwbGFpbiBvYmplY3RzLlxuICpcbiAqIEBtb2R1bGUgeGRjb3JlL2l0ZXJhdGlvblxuICogQHByaXZhdGVcbiAqL1xuXG5pbXBvcnQgeyBpc0ltcGxlbWVudGVkIH0gZnJvbSBcIm1vZHVsZXMvcHJvdG9jb2xcIjtcbmltcG9ydCB7IGlzRnVuY3Rpb24sIGlzT2JqZWN0LCBpc0dlbmVyYXRvckZ1bmN0aW9uIH0gZnJvbSBcIm1vZHVsZXMvdXRpbHNcIjtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGl0ZXJhdG9yIG92ZXIgYW4gb2JqZWN0LlxuICpcbiAqIERldGFpbHMgYWJvdXQgdGhpcyBmdW5jdGlvbiBhcmUgaW5jbHVkZWQgaW4gdGhlIGRvY3VtZW50YXRpb24gZm9yXG4gKiB7QGxpbmsgbW9kdWxlOnhkY29yZS5pdGVyYXRvcnxpdGVyYXRvcn0uXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IG9iaiBUaGUgb2JqZWN0IGJlaW5nIGl0ZXJhdGVkIG92ZXIuXG4gKiBAcmV0dXJucyB7ZXh0ZXJuYWw6SXRlcmF0b3J9IEFuIGl0ZXJhdG9yIG92ZXIgdGhlIHByb3BlcnRpZXMgb2YgYG9iamAuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBvYmplY3RJdGVyYXRvcihvYmopIHtcbiAgcmV0dXJuIChmdW5jdGlvbiooKSB7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gICAgbGV0IGluZGV4ID0gMDtcblxuICAgIHdoaWxlIChpbmRleCA8IGtleXMubGVuZ3RoKSB7XG4gICAgICBjb25zdCBrID0ga2V5c1tpbmRleCsrXTtcbiAgICAgIHlpZWxkIHsgW2tdOiBvYmpba10gfTtcbiAgICB9XG4gIH0pKCk7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBpdGVyYXRvciBvdmVyIGEgZnVuY3Rpb24uXG4gKlxuICogRGV0YWlscyBhYm91dCB0aGlzIGZ1bmN0aW9uIGFyZSBpbmNsdWRlZCBpbiB0aGUgZG9jdW1lbnRhdGlvbiBmb3JcbiAqIHtAbGluayBtb2R1bGU6eGRjb3JlLml0ZXJhdG9yfGl0ZXJhdG9yfS5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTp4ZGNvcmUuSXRlcmFibGVGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEByZXR1cm5zIHtleHRlcm5hbDpJdGVyYXRvcn0gQW4gaXRlcmF0b3Igb3ZlciB0aGUgcmV0dXJuIHZhbHVlcyBvZiBgZm5gLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZnVuY3Rpb25JdGVyYXRvcihmbikge1xuICByZXR1cm4gKGZ1bmN0aW9uKigpIHtcbiAgICBsZXQgY3VycmVudDtcbiAgICBsZXQgaW5kZXggPSAwO1xuXG4gICAgZm9yICg7Oykge1xuICAgICAgY3VycmVudCA9IGZuKGluZGV4KyssIGN1cnJlbnQpO1xuICAgICAgaWYgKHR5cGVvZiBjdXJyZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgeWllbGQgY3VycmVudDtcbiAgICB9XG4gIH0pKCk7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBpdGVyYXRvciBvdmVyIHRoZSBwcm92aWRlZCB2YWx1ZS4gVGhlIGZvcm0gb2YgdGhlIGl0ZXJhdGlvblxuICogZGVwZW5kcyBvbiB3aGF0IGtpbmQgb2YgdmFsdWUgaXMgYmVpbmcgaXRlcmF0ZWQgb3Zlci5cbiAqXG4gKiBJZiB0aGUgdmFsdWUgaXMgYSBjb2xsZWN0aW9uIGltcGxlbWVudGluZyB0aGUgW2l0ZXJhYmxlIHByb3RvY29sXVsxXSAoYXJyYXlzLFxuICogc3RyaW5ncywgZ2VuZXJhdG9ycywgb3IgYSBjdXN0b20gb2JqZWN0IHN1cHBvcnRpbmcgdGhlIHByb3RvY29sKSB0aGVuIHRoZVxuICogcHJvZHVjZWQgaXRlcmF0b3Igd2lsbCBiZSBhcyBleHBlY3RlZDogYW4gb2JqZWN0IHRoYXQgaW1wbGVtZW50cyB0aGVcbiAqIFtpdGVyYXRvciBwcm90b2NvbF1bMl0gYnkgcHJvdmlkaW5nIGEgYG5leHRgIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBlYWNoXG4gKiBjb2xsZWN0aW9uIHZhbHVlIGluIHR1cm4uXG4gKlxuICogYGBgXG4gKiBjb25zdCBpdGVyID0gaXRlcmF0b3IoWzEsIDIsIDNdKTtcbiAqIGNvbnNvbGUubG9nKGl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiAxXG4gKiBjb25zb2xlLmxvZyhpdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4gMlxuICogY29uc29sZS5sb2coaXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IDNcbiAqIGNvbnNvbGUubG9nKGl0ZXIubmV4dCgpLmRvbmUpOyAgICAvLyAtPiB0cnVlXG4gKiBgYGBcbiAqXG4gKiBTcGVjaWFsIHN1cHBvcnQgaXMgcHJvdmlkZWQgZm9yIHR3byB0eXBlcyB0aGF0IGFyZSBub3Qgbm9ybWFsbHkgaXRlcmFibGU6XG4gKiBvYmplY3RzIGFuZCBmdW5jdGlvbnMuXG4gKlxuICogT2JqZWN0cyByZXN1bHQgaW4gYW4gaXRlcmF0b3IgdGhhdCBwcm9kdWNlcyBhIHNpbmdsZS1wcm9wZXJ0eSBvYmplY3QgZm9yXG4gKiBldmVyeSBrZXkvdmFsdWUgcGFpciBpbiB0aGUgc3VwcGxpZWQgb2JqZWN0LiBUaGUgW29yZGVyIG9mIGl0ZXJhdGlvbl1bM10gaXNcbiAqIHRoZSBzYW1lIGFzIGl0IGlzIGZvciBvYmplY3RzIHBvc3QtRVMyMDE1OlxuICpcbiAqIDEuIFN0cmluZyBrZXlzIHRoYXQgYXJlIGludGVnZXIgaW5kaWNlcyBpbiBhc2NlbmRpbmcgbnVtZXJpY2FsIG9yZGVyXG4gKiAyLiBBbGwgb3RoZXIgc3RyaW5nIGtleXMgaW4gdGhlIG9yZGVyIGluIHdoaWNoIHRoZXkgd2VyZSBhZGRlZCB0byB0aGUgb2JqZWN0XG4gKiAzLiBBbGwgc3ltYm9sIGtleXMgaW4gdGhlIG9yZGVyIGluIHdoaWNoIHRoZXkgd2VyZSBhZGRlZCB0byB0aGUgb2JqZWN0XG4gKlxuICogYGBgXG4gKiBjb25zdCBvYmogPSB7XG4gKiAgIFtTeW1ib2woXCJmaXJzdFwiKV06IHRydWUsXG4gKiAgIDAyOiB0cnVlLFxuICogICAxMDogdHJ1ZSxcbiAqICAgMDE6IHRydWUsXG4gKiAgIDI6IHRydWUsXG4gKiAgIFtTeW1ib2woXCJzZWNvbmRcIildOiB0cnVlXG4gKiB9O1xuICogY29uc3QgaXRlciA9IGl0ZXJhdG9yKG9iaik7XG4gKiBjb25zb2xlLmxvZyhpdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4geyAnMic6IHRydWUgfVxuICogY29uc29sZS5sb2coaXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IHsgJzEwJzogdHJ1ZSB9XG4gKiBjb25zb2xlLmxvZyhpdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4geyAnMDInOiB0cnVlIH1cbiAqIGNvbnNvbGUubG9nKGl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiB7ICcwMSc6IHRydWUgfVxuICogY29uc29sZS5sb2coaXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IHsgW1N5bWJvbCgnZmlyc3QnKV06IHRydWUgfVxuICogY29uc29sZS5sb2coaXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IHsgW1N5bWJvbCgnc2Vjb25kJyldOiB0cnVlIH1cbiAqIGNvbnNvbGUubG9nKGl0ZXIubmV4dCgpLmRvbmUpOyAgICAvLyAtPiB0cnVlXG4gKiBgYGBcbiAqXG4gKiBGdW5jdGlvbnMgYXJlIHJ1biBlYWNoIHRpbWUgdGhlIGl0ZXJhdG9yJ3MgYG5leHRgIG1ldGhvZCBpcyBjYWxsZWQsIGFuZCB0aGVcbiAqIHJldHVybiB2YWx1ZSBvZiB0aGUgZnVuY3Rpb24gaXMgc3VwcGxpZWQgYXMgdGhlIGl0ZXJhdG9yJ3MgdmFsdWUgYXQgdGhhdFxuICogcG9pbnQuXG4gKlxuICogVGhpcyBmdW5jdGlvbiBpcyBwcm92aWRlZCB0d28gYXJndW1lbnRzOiB0aGUgemVyby1iYXNlZCBpbmRleCBvZiB0aGF0XG4gKiBpdGVyYXRpb24sIGFuZCB0aGUgdmFsdWUgcHJvZHVjZWQgYnkgdGhlIGxhc3QgaW52b2NhdGlvbiBvZiB0aGUgaXRlcmF0b3IuIFRoZVxuICogbGFzdCB2YWx1ZSBpcyBgdW5kZWZpbmVkYCBvbiB0aGUgZmlyc3QgcGFzcywgYnV0IGEgZGVmYXVsdCBwYXJhbWV0ZXIgb24gdGhlXG4gKiBmdW5jdGlvbiBjYW4gZGVmaW5lIHRoZSBmaXJzdCBwYXNzIHZhbHVlIHRvIGJlIHdoYXRldmVyIGlzIG5lZWRlZC5cbiAqXG4gKiBgYGBcbiAqIGNvbnN0IGZuID0gKGluZGV4LCBsYXN0ID0gMSkgPT4gbGFzdCAqIChpbmRleCArIDEpO1xuICogY29uc3QgaXRlciA9IGl0ZXJhdG9yKGZuKTtcbiAqIGNvbnNvbGUubG9nKGl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiAxXG4gKiBjb25zb2xlLmxvZyhpdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4gMlxuICogY29uc29sZS5sb2coaXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IDZcbiAqIGNvbnNvbGUubG9nKGl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiAyNFxuICogY29uc29sZS5sb2coaXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IDEyMFxuICogYGBgXG4gKlxuICogSXRlcmF0b3JzIGNyZWF0ZWQgZnJvbSBmdW5jdGlvbnMgYXJlLCBieSBkZWZhdWx0LCBpbmZpbml0ZSBzaW5jZSB0aGVyZSBpcyBub1xuICogY29uZGl0aW9uIGZvciB0aGVtIHRvIG5vdCBiZSBhYmxlIHRvIGJlIGFwcGxpZWQgb25lIG1vcmUgdGltZS4gVG8gY3JlYXRlIGFcbiAqIGZpbml0ZSBpdGVyYXRvciBmcm9tIGEgZnVuY3Rpb24sIGhhdmUgaXQgcmV0dXJuIGB1bmRlZmluZWRgIGF0IHNvbWUgcG9pbnQuXG4gKiBXaGVuIGEgcmV0dXJuIHZhbHVlIG9mIGB1bmRlZmluZWRgIGlzIGVuY291bnRlcmVkLCBgaXRlcmF0b3JgIHdpbGwgdGVybWluYXRlXG4gKiB0aGUgaXRlcmF0b3IsIHNldHRpbmcgaXRzIG5leHQgYGRvbmVgIHByb3BlcnR5IHRvIGB0cnVlYC5cbiAqXG4gKiBJZiB0aGUgaW5wdXQgdmFsdWUgaXMgbmVpdGhlciBpdGVyYWJsZSwgb2JqZWN0LCBvciBmdW5jdGlvbiwgdGhlbiB0aGUgcmVzdWx0XG4gKiB3aWxsIGJlIGBudWxsYC5cbiAqXG4gKiBbMV06IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0l0ZXJhdGlvbl9wcm90b2NvbHMjVGhlX2l0ZXJhYmxlX3Byb3RvY29sXG4gKiBbMl06IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0l0ZXJhdGlvbl9wcm90b2NvbHMjVGhlX2l0ZXJhdG9yX3Byb3RvY29sXG4gKiBbM106IGh0dHBzOi8vMmFsaXR5LmNvbS8yMDE1LzEwL3Byb3BlcnR5LXRyYXZlcnNhbC1vcmRlci1lczYuaHRtbFxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGRjb3JlXG4gKiBAcGFyYW0geyhvYmplY3R8bW9kdWxlOnhkY29yZS5JdGVyYWJsZUZ1bmN0aW9ufGV4dGVybmFsOkl0ZXJhYmxlKX0gdmFsdWVcbiAqICAgICBUaGUgdmFsdWUgdG8gY3JlYXRlIGFuIGl0ZXJhdG9yIG92ZXIuXG4gKiBAcmV0dXJucyB7ZXh0ZXJuYWw6SXRlcmF0b3J9IEFuIGl0ZXJhdG9yIG92ZXIgYHZhbHVlYC5cbiAqL1xuZnVuY3Rpb24gaXRlcmF0b3IodmFsdWUpIHtcbiAgc3dpdGNoICh0cnVlKSB7XG4gICAgY2FzZSBpc0Z1bmN0aW9uKHZhbHVlW1N5bWJvbC5pdGVyYXRvcl0pOlxuICAgIGNhc2UgaXNHZW5lcmF0b3JGdW5jdGlvbih2YWx1ZVtTeW1ib2wuaXRlcmF0b3JdKTpcbiAgICAgIHJldHVybiB2YWx1ZVtTeW1ib2wuaXRlcmF0b3JdKCk7XG4gICAgY2FzZSBpc0Z1bmN0aW9uKHZhbHVlKTpcbiAgICAgIHJldHVybiBmdW5jdGlvbkl0ZXJhdG9yKHZhbHVlKTtcbiAgICBjYXNlIGlzT2JqZWN0KHZhbHVlKTpcbiAgICAgIHJldHVybiBvYmplY3RJdGVyYXRvcih2YWx1ZSk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBwYXNzZWQgb2JqZWN0IGlzIGl0ZXJhYmxlLCBpbiB0ZXJtcyBvZiB3aGF0ICdpdGVyYWJsZSdcbiAqIG1lYW5zIHRvIHRoaXMgbGlicmFyeS4gSW4gb3RoZXIgd29yZHMsIHZhbHVlcyBpbXBsZW1lbnRpbmcgdGhlIGBpdGVyYWJsZWBcbiAqIHByb3RvY29sIGFuZCBwbGFpbiBvYmplY3RzIHJldHVybiBgdHJ1ZWAsIHdoaWxlIGV2ZXJ5dGhpbmcgZWxzZSByZXR1cm5zXG4gKiBgZmFsc2VgLiBUaGlzIGRvZXMgbm90IHJldHVybiBgdHJ1ZWAgZm9yIGZ1bmN0aW9ucyBldmVuIHRob3VnaFxuICoge0BsaW5rIG1vZHVsZTp4ZGNvcmUuaXRlcmF0b3J8aXRlcmF0b3J9IGNhbiBwcm9kdWNlIGFuIGl0ZXJhdG9yIGZvciB0aGVtLFxuICogYmVjYXVzZSBub3QgYWxsIGZ1bmN0aW9ucyB3b3JrIHdlbGwgd2l0aFxuICoge0BsaW5rIG1vZHVsZTp4ZGNvcmUuaXRlcmF0b3J8aXRlcmF0b3J9LlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGRjb3JlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0IGZvciBpdGVyYWJpbGl0eS5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IEVpdGhlciBgdHJ1ZWAgaWYgdGhlIHZhbHVlIGlzIGl0ZXJhYmxlXG4gKiAgICAgKGB7QGxpbmsgbW9kdWxlOnhkY29yZS5pdGVyYXRvcnxpdGVyYXRvcn1gIHdpbGwgcmV0dXJuIGFuIGl0ZXJhdG9yIGZvclxuICogICAgIGl0KSBvciBgZmFsc2VgIGlmIGl0IGlzIG5vdC5cbiAqL1xuZnVuY3Rpb24gaXNJdGVyYWJsZSh2YWx1ZSkge1xuICByZXR1cm4gaXNJbXBsZW1lbnRlZCh2YWx1ZSwgXCJpdGVyYXRvclwiKSB8fCBpc09iamVjdCh2YWx1ZSk7XG59XG5cbmV4cG9ydCB7IGl0ZXJhdG9yLCBpc0l0ZXJhYmxlIH07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuLyoqXG4gKiBQcm90b2NvbHMgZm9yIGl0ZXJhdGlvbiBhbmQgcmVkdWN0aW9uLlxuICpcbiAqIEBtb2R1bGUgeGRjb3JlL3Byb3RvY29sXG4gKiBAcHJpdmF0ZVxuICovXG5cbmltcG9ydCB7IGlzRnVuY3Rpb24sIGlzR2VuZXJhdG9yRnVuY3Rpb24gfSBmcm9tIFwibW9kdWxlcy91dGlsc1wiO1xuXG4vKipcbiAqIFRoZSBtYXBwaW5nIG9mIHByb3RvY29sIG5hbWVzIHRvIHRoZWlyIHJlc3BlY3RpdmUgcHJvcGVydHkga2V5IG5hbWVzLiBUaGlzXG4gKiBtYXBwaW5nIG1ha2VzIGl0IGVhc2llciB0byBkZWFsIHdpdGggdGhlc2UgcHJvdG9jb2xzIGFzIHRoZXkgY2FuIGJlIGxvb2tlZCB1cFxuICogYnkgc3RyaW5nIG5hbWUgcmF0aGVyIHRoYW4gYnkgbW9yZSBkaWZmaWN1bHQtdG8td29yay13aXRoIHN5bWJvbHMuXG4gKlxuICogQHR5cGVkZWYge29iamVjdH0gUHJvdG9jb2xNYXBcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGRjb3JlXG4gKiBAcHJvcGVydHkge1N5bWJvbH0gaW5pdCBUaGUgYHJlZHVjZXIvaW5pdGAgcHJvdG9jb2wuIFRoaXMgaXMgdXNlZCB0byBtYXJrXG4gKiAgICAgZnVuY3Rpb25zIHRoYXQgaW5pdGlhbGl6ZSBhIHRhcmdldCBjb2xsZWN0aW9uIGJlZm9yZSBhZGRpbmcgaXRlbXMgdG8gaXQuXG4gKiBAcHJvcGVydHkge1N5bWJvbH0gc3RlcCBUaGUgYHJlZHVjZXIvc3RlcGAgcHJvdG9jb2wuIFRoaXMgaXMgdXNlZCB0byBtYXJrXG4gKiAgICAgZnVuY3Rpb25zIHRoYXQgYXJlIHVzZWQgaW4gdGhlIHJlZHVjZXIncyBzdGVwIHByb2Nlc3MsIHdoZXJlIG9iamVjdHMgYXJlXG4gKiAgICAgYWRkZWQgdG8gdGhlIHRhcmdldCBjb2xsZWN0aW9uIG9uZSBhdCBhIHRpbWUuXG4gKiBAcHJvcGVydHkge1N5bWJvbH0gZmluYWwgVGhlIGByZWR1Y2VyL2ZpbmFsYCBwcm90b2NvbC4gVGhpcyBpcyB1c2VkIHRvIG1hcmtcbiAqICAgICBmdW5jdGlvbnMgdGhhdCB0YWtlIHRoZSBmaW5hbCByZXN1bHQgb2YgdGhlIHN0ZXAgcHJvY2VzcyBhbmQgcmV0dXJuIHRoZVxuICogICAgIGZpbmFsIGZvcm0gdG8gYmUgb3V0cHV0LiBUaGlzIGlzIG9wdGlvbmFsOyBpZiB0aGUgcmVkdWNlciBkb2VzIG5vdCB3YW50XG4gKiAgICAgdG8gdHJhbnNmb3JtIHRoZSBmaW5hbCByZXN1bHQsIGl0IHNob3VsZCBqdXN0IHJldHVybiB0aGUgcmVzdWx0IG9mIGl0c1xuICogICAgIGNoYWluZWQgcmVkdWNlcidzIGBmaW5hbGAgZnVuY3Rpb24uXG4gKiBAcHJvcGVydHkge1N5bWJvbH0gcmVkdWNlZCBUaGUgYHJlZHVjZXIvY29tcGxldGVkYCBwcm90b2NvbC4gVGhlIHByZXNlbmNlIG9mXG4gKiAgICAgdGhpcyBrZXkgb24gYW4gb2JqZWN0IGluZGljYXRlcyB0aGF0IGl0cyB0cmFuc2Zvcm1hdGlvbiBoYXMgYmVlblxuICogICAgIGNvbXBsZXRlZC4gSXQgaXMgdXNlZCBpbnRlcm5hbGx5IHRvIG1hcmsgY29sbGVjdGlvbnMgd2hvc2VcbiAqICAgICB0cmFuc2Zvcm1hdGlvbnMgY29uY2x1ZGUgYmVmb3JlIGV2ZXJ5IG9iamVjdCBpcyBpdGVyYXRlZCBvdmVyIChhcyBpblxuICogICAgIGB7QGxpbmsgbW9kdWxlOnhkdWNlLnRha2V9YCB0cmFuc2R1Y2Vycy4pIEl0IGlzIG9mIGxpdHRsZSB1c2UgYmV5b25kXG4gKiAgICAgdHJhbnNkdWNlciBhdXRob3JpbmcuXG4gKiBAcHJvcGVydHkge1N5bWJvbH0gdmFsdWUgVGhlIGByZWR1Y2VyL3ZhbHVlYCBwcm90b2NvbC4gVGhpcyBpcyB1c2VkXG4gKiAgICAgaW50ZXJuYWxseSB0byBtYXJrIHByb3BlcnRpZXMgdGhhdCBjb250YWluIHRoZSB2YWx1ZSBvZiBhIGNvbXBsZXRlZFxuICogICAgIHRyYW5zZm9ybWF0aW9uLiBJdCBpcyBvZiBsaXR0bGUgdXNlIGJleW9uZCB0cmFuc2R1Y2VyIGF1dGhvcmluZy5cbiAqL1xuXG4vKipcbiAqIFRoZSBtYXBwaW5nIG9mIHByb3RvY29sIG5hbWVzIHRvIHRoZWlyIHJlc3BlY3RpdmUgcHJvcGVydHkga2V5IG5hbWVzLlxuICpcbiAqIEB0eXBlIHttb2R1bGU6eGRjb3JlLlByb3RvY29sTWFwfVxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZGNvcmVcbiAqL1xuY29uc3QgcHJvdG9jb2xzID0gT2JqZWN0LmNyZWF0ZShudWxsLCB7XG4gIGluaXQ6IHtcbiAgICB2YWx1ZTogU3ltYm9sLmZvcihcInJlZHVjZXIvaW5pdFwiKVxuICB9LFxuICBzdGVwOiB7XG4gICAgdmFsdWU6IFN5bWJvbC5mb3IoXCJyZWR1Y2VyL3N0ZXBcIilcbiAgfSxcbiAgZmluYWw6IHtcbiAgICB2YWx1ZTogU3ltYm9sLmZvcihcInJlZHVjZXIvZmluYWxcIilcbiAgfSxcbiAgY29tcGxldGVkOiB7XG4gICAgdmFsdWU6IFN5bWJvbC5mb3IoXCJyZWR1Y2VyL2NvbXBsZXRlZFwiKVxuICB9LFxuICB2YWx1ZToge1xuICAgIHZhbHVlOiBTeW1ib2wuZm9yKFwicmVkdWNlci92YWx1ZVwiKVxuICB9XG59KTtcblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgYSBwYXJ0aWN1bGFyIHByb3RvY29sIGlzIGltcGxlbWVudGVkIGJ5IGEgdmFsdWUuIFRoZVxuICogcG9zc2libGUgdmFsdWVzIGZvciBgcHJvdG9jb2xgIGFyZSB0aGUgZm9sbG93aW5nLCByZXByZXNlbnRpbmcgdGhlIHR3b1xuICogYnVpbHQtaW4gaXRlcmF0b3IgcHJvdG9jb2xzIGFuZCB0aGUgZml2ZSBjdXN0b20gdHJhbnNkdWNlciBwcm90b2NvbHM6XG4gKlxuICogKiBgaXRlcmF0b3JgXG4gKiAqIGBhc3luY0l0cmVyYXRvcmBcbiAqICogYGluaXRgXG4gKiAqIGBzdGVwYFxuICogKiBgZmluYWxgXG4gKiAqIGBjb21wbGV0ZWRgXG4gKiAqIGB2YWx1ZWBcbiAqXG4gKiBBbnkgb2YgdGhlc2Ugd2lsbCByZXN1bHQgaW4gYHRydWVgIGlmIHRoZSBvYmplY3QgaW4gcXVlc3Rpb24gaGFzIGEgcHJvcGVydHlcbiAqIHRoYXQgbWF0Y2hlcyB0aGUgb25lIG5lY2Vzc2FyeSB0byBpbXBsZW1lbnQgdGhlIHByb3RvY29sLiBGdXJ0aGVyLCBhbnkgb2ZcbiAqIHRoZSBwcm9wZXJ0aWVzIG90aGVyIHRoYW4gYGNvbXBsZXRlZGAgYW5kIGBzdGVwYCBtdXN0IGJlIGZ1bmN0aW9ucy5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkY29yZVxuICogQHBhcmFtIHtvYmplY3R9IG9iaiBUaGUgb2JqZWN0IHRvIGNoZWNrIGZvciBwcm90b2NvbCBpbXBsZW1lbnRhdGlvbi5cbiAqIEBwYXJhbSB7c3RyaW5nfSBwcm90b2NvbCBUaGUgbmFtZSBvZiB0aGUgcHJvdG9jb2wgdG8gY2hlY2sgZm9yLlxuICogQHJldHVybnMge2Jvb2xlYW59IEVpdGhlciBgdHJ1ZWAgaWYgdGhlIG9iamVjdCBzdXBwb3J0cyB0aGUgbmFtZWQgcHJvdG9jb2wgb3JcbiAqICAgICBgZmFsc2VgIGlmIGl0IGRvZXMgbm90LlxuICovXG5mdW5jdGlvbiBpc0ltcGxlbWVudGVkKG9iaiwgcHJvdG9jb2wpIHtcbiAgaWYgKG9iaiA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3dpdGNoIChwcm90b2NvbCkge1xuICAgIGNhc2UgXCJpdGVyYXRvclwiOlxuICAgICAgcmV0dXJuIChcbiAgICAgICAgaXNGdW5jdGlvbihvYmpbU3ltYm9sLml0ZXJhdG9yXSkgfHxcbiAgICAgICAgaXNHZW5lcmF0b3JGdW5jdGlvbihvYmpbU3ltYm9sLml0ZXJhdG9yXSlcbiAgICAgICk7XG4gICAgY2FzZSBcImFzeW5jSXRlcmF0b3JcIjpcbiAgICAgIHJldHVybiBpc0dlbmVyYXRvckZ1bmN0aW9uKG9ialtTeW1ib2wuYXN5bmNJdGVyYXRvcl0pO1xuICAgIGNhc2UgXCJjb21wbGV0ZWRcIjpcbiAgICBjYXNlIFwidmFsdWVcIjpcbiAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iaikuaW5jbHVkZXMocHJvdG9jb2xzW3Byb3RvY29sXSk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBpc0Z1bmN0aW9uKG9ialtwcm90b2NvbHNbcHJvdG9jb2xdXSk7XG4gIH1cbn1cblxuZXhwb3J0IHsgcHJvdG9jb2xzLCBpc0ltcGxlbWVudGVkIH07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuLyoqXG4gKiBBIHNldCBvZiBmdW5jdGlvbnMgcmVsYXRlZCB0byB0aGUgcHJvZHVjaW5nIHJlZHVjZXIgb2JqZWN0cywgbWFya2luZ1xuICogY29tcGxldGVkIG9iamVjdHMsIGFuZCBwZXJmb3JtaW5nIGdlbmVyYWwgcmVkdWN0aW9uIG9wZXJhdGlvbnMuXG4gKlxuICogQG1vZHVsZSB4ZGNvcmUvcmVkdWN0aW9uXG4gKiBAcHJpdmF0ZVxuICovXG5cbmltcG9ydCB7IGlzSW1wbGVtZW50ZWQsIHByb3RvY29scyBhcyBwIH0gZnJvbSBcIm1vZHVsZXMvcHJvdG9jb2xcIjtcbmltcG9ydCB7IGlzU3RyaW5nLCBpc0FycmF5LCBpc09iamVjdCwgaXNGdW5jdGlvbiB9IGZyb20gXCJtb2R1bGVzL3V0aWxzXCI7XG5pbXBvcnQgeyBpdGVyYXRvciB9IGZyb20gXCJtb2R1bGVzL2l0ZXJhdGlvblwiO1xuXG4vKipcbiAqIFJldHVybnMgYW4gaW5pdCBmdW5jdGlvbiBmb3IgYSBjb2xsZWN0aW9uLiBUaGlzIGlzIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGFcbiAqIG5ldywgZW1wdHkgaW5zdGFuY2Ugb2YgdGhlIGNvbGxlY3Rpb24gaW4gcXVlc3Rpb24uIElmIHRoZSBjb2xsZWN0aW9uIGRvZXNuJ3RcbiAqIHN1cHBvcnQgcmVkdWN0aW9uLCBgbnVsbGAgaXMgcmV0dXJuZWQuIFRoaXMgbWFrZXMgY29uZGl0aW9uYWxzIGEgYml0IGVhc2llclxuICogdG8gd29yayB3aXRoLlxuICpcbiAqIEluIG9yZGVyIHRvIHN1cHBvcnQgdGhlIGNvbnZlcnNpb24gb2YgZnVuY3Rpb25zIGludG8gcmVkdWNlcnMsIGZ1bmN0aW9uXG4gKiBzdXBwb3J0IGlzIGFsc28gcHJvdmlkZWQuXG4gKlxuICogQHBhcmFtIHsob2JqZWN0fGZ1bmN0aW9ufGV4dGVybmFsOkl0ZXJhYmxlKX0gY29sbGVjdGlvbiBBIGNvbGxlY3Rpb24gdG9cbiAqICAgICBjcmVhdGUgYW4gaW5pdCBmdW5jdGlvbiBmb3IuIFRoaXMgY2FuIGJlIGFueXRoaW5nIHRoYXQgc3VwcG9ydHMgdGhlXG4gKiAgICAgaXRlcmF0YWJsZSBwcm90b2NvbCwgYSBwbGFpbiBvYmplY3QsIG9yIGEgZnVuY3Rpb24uXG4gKiBAcmV0dXJuIHttb2R1bGU6eGRjb3JlLkluaXRGdW5jdGlvbn0gQSBmdW5jdGlvbiB0aGF0LCB3aGVuIGNhbGxlZCwgcmV0dXJucyBhblxuICogICAgIGluaXRpYWwgdmVyc2lvbiBvZiB0aGUgcHJvdmlkZWQgY29sbGVjdGlvbi4gSWYgdGhlIHByb3ZpZGVkIGNvbGxlY3Rpb24gaXNcbiAqICAgICBub3QgaXRlcmFibGUsIHRoZW4gYG51bGxgIGlzIHJldHVybmVkLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaW5pdChjb2xsZWN0aW9uKSB7XG4gIHN3aXRjaCAodHJ1ZSkge1xuICAgIGNhc2UgaXNJbXBsZW1lbnRlZChjb2xsZWN0aW9uLCBcImluaXRcIik6XG4gICAgICByZXR1cm4gY29sbGVjdGlvbltwLmluaXRdO1xuICAgIGNhc2UgaXNTdHJpbmcoY29sbGVjdGlvbik6XG4gICAgICByZXR1cm4gKCkgPT4gXCJcIjtcbiAgICBjYXNlIGlzQXJyYXkoY29sbGVjdGlvbik6XG4gICAgICByZXR1cm4gKCkgPT4gW107XG4gICAgY2FzZSBpc09iamVjdChjb2xsZWN0aW9uKTpcbiAgICAgIHJldHVybiAoKSA9PiAoe30pO1xuICAgIGNhc2UgaXNGdW5jdGlvbihjb2xsZWN0aW9uKTpcbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIHRocm93IEVycm9yKFwiaW5pdCBub3QgYXZhaWxhYmxlXCIpO1xuICAgICAgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgc3RlcCBmdW5jdGlvbiBmb3IgYSBjb2xsZWN0aW9uLiBUaGlzIGlzIGEgZnVuY3Rpb24gdGhhdCB0YWtlcyBhblxuICogYWNjdW11bGF0b3IgYW5kIGEgdmFsdWUgYW5kIHJldHVybnMgdGhlIHJlc3VsdCBvZiByZWR1Y2luZyB0aGUgdmFsdWUgaW50byB0aGVcbiAqIGFjY3VtdWxhdG9yLiBJZiB0aGUgY29sbGVjdGlvbiBkb2Vzbid0IHN1cHBvcnQgcmVkdWN0aW9uLCBgbnVsbGAgaXMgcmV0dXJuZWQuXG4gKiBUaGUgcmV0dXJuZWQgZnVuY3Rpb24gaXRzZWxmIHNpbXBseSByZWR1Y2VzIHRoZSBpbnB1dCBpbnRvIHRoZSB0YXJnZXRcbiAqIGNvbGxlY3Rpb24gd2l0aG91dCBtb2RpZnlpbmcgaXQuXG4gKlxuICogSW4gb3JkZXIgdG8gc3VwcG9ydCB0aGUgY29udmVyc2lvbiBvZiBmdW5jdGlvbnMgaW50byByZWR1Y2VycywgZnVuY3Rpb25cbiAqIHN1cHBvcnQgaXMgYWxzbyBwcm92aWRlZC5cbiAqXG4gKiBAcGFyYW0geyhvYmplY3R8ZnVuY3Rpb258ZXh0ZXJuYWw6SXRlcmFibGUpfX0gY29sbGVjdGlvbiBBIGNvbGxlY3Rpb24gdG9cbiAqICAgICBjcmVhdGUgYSBzdGVwIGZ1bmN0aW9uIGZvci4gVGhpcyBjYW4gYmUgYW55dGhpbmcgdGhhdCBzdXBwb3J0cyB0aGVcbiAqICAgICBpdGVyYXRpb24gcHJvdG9jb2wsIGEgcGxhaW4gb2JqZWN0LCBvciBhIGZ1bmN0aW9uLlxuICogQHJldHVybiB7bW9kdWxlOnhkY29yZS5TdGVwRnVuY3Rpb259IEEgcmVkdWN0aW9uIGZ1bmN0aW9uIGZvciB0aGUgcHJvdmlkZWRcbiAqICAgICBjb2xsZWN0aW9uIHRoYXQgc2ltcGx5IGFkZHMgYW4gZWxlbWVudCB0byB0aGUgdGFyZ2V0IGNvbGxlY3Rpb24gd2l0aG91dFxuICogICAgIG1vZGlmeWluZyBpdC4gSWYgdGhlIHByb3ZpZGVkIGNvbGxlY3Rpb24gaXMgbm90IGl0ZXJhYmxlLCBgbnVsbGAgaXNcbiAqICAgICByZXR1cm5lZC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHN0ZXAoY29sbGVjdGlvbikge1xuICBzd2l0Y2ggKHRydWUpIHtcbiAgICBjYXNlIGlzSW1wbGVtZW50ZWQoY29sbGVjdGlvbiwgXCJzdGVwXCIpOlxuICAgICAgcmV0dXJuIGNvbGxlY3Rpb25bcC5zdGVwXTtcblxuICAgIGNhc2UgaXNTdHJpbmcoY29sbGVjdGlvbik6XG4gICAgICByZXR1cm4gKGFjYywgdmFsdWUpID0+IHtcbiAgICAgICAgY29uc3QgdiA9IGlzT2JqZWN0KHZhbHVlKSA/IHZhbHVlW09iamVjdC5rZXlzKHZhbHVlKVswXV0gOiB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIGFjYyArIHY7XG4gICAgICB9O1xuXG4gICAgY2FzZSBpc0FycmF5KGNvbGxlY3Rpb24pOlxuICAgICAgcmV0dXJuIChhY2MsIHZhbHVlKSA9PiB7XG4gICAgICAgIGFjYy5wdXNoKHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH07XG5cbiAgICBjYXNlIGlzT2JqZWN0KGNvbGxlY3Rpb24pOlxuICAgICAgcmV0dXJuIChhY2MsIHZhbHVlKSA9PiB7XG4gICAgICAgIGxldCB2ID0gdmFsdWU7XG5cbiAgICAgICAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgICAvLyBpZiB0aGUgaW5wdXQgaXNuJ3QgYW4gb2JqZWN0LCB0dXJuIGl0IGludG8gYW4gb2JqZWN0IHdpdGggYVxuICAgICAgICAgIC8vIG51bWVyaWNhbCBrZXkgb25lIGdyZWF0ZXIgdGhhbiB0aGUgbWF4IGtleSBhbHJlYWR5IGluIHRoZVxuICAgICAgICAgIC8vIGFjY3VtdWxhdG9yXG4gICAgICAgICAgY29uc3QgbWF4ID0gT2JqZWN0LmtleXMoYWNjKS5yZWR1Y2UoKGEsIGIpID0+IE1hdGgubWF4KGEsIGIpLCAtMSk7XG4gICAgICAgICAgdiA9IHsgW21heCArIDFdOiB2YWx1ZSB9O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgayA9IE9iamVjdC5rZXlzKHYpWzBdO1xuICAgICAgICBhY2Nba10gPSB2W2tdO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfTtcblxuICAgIGNhc2UgaXNGdW5jdGlvbihjb2xsZWN0aW9uKTpcbiAgICAgIHJldHVybiAoYWNjLCB2YWx1ZSkgPT4gY29sbGVjdGlvbihhY2MsIHZhbHVlKTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG4vKipcbiAqIFJldHVybnMgYSBmaW5hbCBmdW5jdGlvbiBmb3IgYSBjb2xsZWN0aW9uLiBUaGlzIGlzIGEgZnVuY3Rpb24gdGhhdCBwZXJmb3Jtc1xuICogYW55IGZpbmFsIHByb2Nlc3NpbmcgdGhhdCBzaG91bGQgYmUgZG9uZSBvbiB0aGUgcmVzdWx0IG9mIGEgcmVkdWN0aW9uLiBJZiB0aGVcbiAqIGNvbGxlY3Rpb24gZG9lc24ndCBzdXBwb3J0IHJlZHVjdGlvbiwgYG51bGxgIGlzIHJldHVybmVkLlxuICpcbiAqIEluIG9yZGVyIHRvIHN1cHBvcnQgdGhlIGNvbnZlcnNpb24gb2YgZnVuY3Rpb25zIGludG8gcmVkdWNlcnMsIGZ1bmN0aW9uXG4gKiBzdXBwb3J0IGlzIGFsc28gcHJvdmlkZWQuXG4gKlxuICogQHBhcmFtIHsob2JqZWN0fGZ1bmN0aW9ufGV4dGVybmFsOkl0ZXJhYmxlKX19IGNvbGxlY3Rpb24gQSBjb2xsZWN0aW9uIHRvXG4gKiAgICAgY3JlYXRlIGEgc3RlcCBmdW5jdGlvbiBmb3IuIFRoaXMgY2FuIGJlIGFueXRoaW5nIHRoYXQgc3VwcG9ydHMgdGhlXG4gKiAgICAgaXRlcmF0aW9uIHByb3RvY29sLCBhIHBsYWluIG9iamVjdCwgb3IgYSBmdW5jdGlvbi5cbiAqIEByZXR1cm4ge21vZHVsZTp4ZGNvcmUuRmluYWxGdW5jdGlvbn0gQSBmdW5jdGlvbiB0aGF0LCB3aGVuIGdpdmVuIGEgcmVkdWNlZFxuICogICAgIGNvbGxlY3Rpb24sIHByb2R1Y2VzIHRoZSBmaW5hbCBvdXRwdXQuIElmIHRoZSBwcm92aWRlZCBjb2xsZWN0aW9uIGlzIG5vdFxuICogICAgIGl0ZXJhYmxlLCBgbnVsbGAgd2lsbCBiZSByZXR1cm5lZC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGZpbmFsKGNvbGxlY3Rpb24pIHtcbiAgc3dpdGNoICh0cnVlKSB7XG4gICAgY2FzZSBpc0ltcGxlbWVudGVkKGNvbGxlY3Rpb24sIFwiZmluYWxcIik6XG4gICAgICByZXR1cm4gY29sbGVjdGlvbltwLmZpbmFsXTtcbiAgICBjYXNlIGlzU3RyaW5nKGNvbGxlY3Rpb24pOlxuICAgIGNhc2UgaXNBcnJheShjb2xsZWN0aW9uKTpcbiAgICBjYXNlIGlzT2JqZWN0KGNvbGxlY3Rpb24pOlxuICAgIGNhc2UgaXNGdW5jdGlvbihjb2xsZWN0aW9uKTpcbiAgICAgIHJldHVybiB2YWx1ZSA9PiB2YWx1ZTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgcmVkdWNlciBvYmplY3QgZnJvbSBhIGZ1bmN0aW9uIG9yIGZyb20gYSByZWR1Y2libGUgdHlwZSAoYXJyYXksXG4gKiBvYmplY3QsIHN0cmluZywgb3Igb2JqZWN0IGltcGxlbWVudGluZyB0aGUgcmVkdWNlciBwcm90b2NvbHMpLlxuICpcbiAqIFRvIGNyZWF0ZSBhIHJlZHVjZXIgZm9yIGFycmF5cywgb2JqZWN0cywgb3Igc3RyaW5ncywgc2ltcGx5IHBhc3MgYW4gZW1wdHlcbiAqIHZlcnNpb24gb2YgdGhhdCBjb2xsZWN0aW9uIHRvIHRoaXMgZnVuY3Rpb24gKGUuZy4sIGB0b1JlZHVjZXIoW10pYCkuXG4gKlxuICogVGhlIG5vdGFibGUgdXNlIGZvciB0aGlzIGZ1bmN0aW9uIHRob3VnaCBpcyB0byB0dXJuIGEgcmVkdWN0aW9uIGZ1bmN0aW9uIGludG9cbiAqIGEgcmVkdWNlciBvYmplY3QuIFRoZSBmdW5jdGlvbiBpcyBhIGZ1bmN0aW9uIG9mIHR3byBwYXJhbWV0ZXJzLCBhblxuICogYWNjdW11bGF0b3IgYW5kIGEgdmFsdWUsIGFuZCByZXR1cm5zIHRoZSBhY2N1bXVsYXRvciB3aXRoIHRoZSB2YWx1ZSBpbiBpdC5cbiAqIFRoaXMgaXMgZXhhY3RseSB0aGUgc2FtZSBraW5kIG9mIGZ1bmN0aW9uIHRoYXQgaXMgcGFzc2VkIHRvIHJlZHVjdGlvblxuICogZnVuY3Rpb25zIGxpa2UgSmF2YVNjcmlwdCdzIGBBcnJheS5wcm90b3R5cGUucmVkdWNlYCBhbmQgTG9kYXNoJ3MgYF8ucmVkdWNlYC5cbiAqXG4gKiBOb3RlIGluIHBhcnRpY3VsYXIgdGhhdCB0aGUgb3V0cHV0IG9mIHRoaXMgcmVkdWNlciBkb2VzIG5vdCBuZWVkIHRvIGJlIGFcbiAqIGNvbGxlY3Rpb24uIEl0IGNhbiBiZSBhbnl0aGluZy4gV2hpbGUgdHJhbnNkdWNpbmcgbm9ybWFsbHkgaW52b2x2ZXNcbiAqIHRyYW5zZm9ybWluZyBvbmUgY29sbGVjdGlvbiBpbnRvIGFub3RoZXIsIGl0IG5lZWQgbm90IGJlIHNvLiBGb3IgZXhhbXBsZSxcbiAqIGhlcmUgaXMgYSByZWR1Y2VyIHRoYXQgd2lsbCByZXN1bHQgaW4gc3VtbWluZyBvZiB0aGUgY29sbGVjdGlvbiB2YWx1ZXMuXG4gKlxuICogYGBgXG4gKiBpbXBvcnQgeyB0b1JlZHVjZXIsIHJlZHVjZSB9IGZyb20gXCJAY2hhbmtvL3hkY29yZVwiO1xuICpcbiAqIGNvbnN0IHN1bVJlZHVjZXIgPSB0b1JlZHVjZXIoKGFjYywgaW5wdXQpID0+IGFjYyArIGlucHV0KTtcbiAqIGNvbnN0IHN1bSA9IHJlZHVjZShbMSwgMiwgMywgNCwgNV0sIHN1bVJlZHVjZXIsIDApO1xuICogY29uc29sZS5sb2coc3VtKTsgICAvLyAtPiAxNVxuICogYGBgXG4gKlxuICogVGhpcyBjYW4gYmUgY29tYmluZWQgd2l0aCB0cmFuc2R1Y2VycyBhcyB3ZWxsLCBhcyBpbiB0aGlzIGNhbGN1bGF0aW9uIG9mIHRoZVxuICogc3VtIG9mIHRoZSAqc3F1YXJlcyogb2YgdGhlIGNvbGxlY3Rpb24gdmFsdWVzLlxuICpcbiAqIGBgYFxuICogaW1wb3J0IHsgdG9SZWR1Y2VyIH0gZnJvbSBcIkBjaGFua28veGRjb3JlXCI7XG4gKiBpbXBvcnQgeyB0cmFuc2R1Y2UsIG1hcCB9IGZyb20gXCJAY2hhbmtvL3hkdWNlXCI7XG4gKlxuICogY29uc3Qgc3VtUmVkdWNlciA9IHRvUmVkdWNlcigoYWNjLCBpbnB1dCkgPT4gYWNjICsgaW5wdXQpO1xuICogY29uc3Qgc3VtID0gdHJhbnNkdWNlKFsxLCAyLCAzLCA0LCA1XSwgbWFwKHggPT4geCAqIHgpLCBzdW1SZWR1Y2VyLCAwKTtcbiAqIGNvbnNvbGUubG9nKHN1bSk7ICAgLy8gLT4gNTVcbiAqIGBgYFxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGRjb3JlXG4gKiBAcGFyYW0geyhhcnJheXxvYmplY3R8ZnVuY3Rpb258bW9kdWxlOnhkY29yZS5SZWR1Y2VyT2JqZWN0KX0gY29sbGVjdGlvbiBBXG4gKiAgICAgcmVkdWNpYmxlIGNvbGxlY3Rpb24gb3IgYSByZWR1Y2VyIGZ1bmN0aW9uLlxuICogQHJldHVybnMge21vZHVsZTp4ZGNvcmUuUmVkdWNlck9iamVjdH0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgcHJvdG9jb2xcbiAqICAgICBwcm9wZXJ0aWVzIGZvciBgaW5pdGAsIGBzdGVwYCwgYW5kIGBmaW5hbGAuIFRoaXMgb2JqZWN0IGlzIHN1aXRhYmxlIGZvclxuICogICAgIHVzZSBhcyBhIHJlZHVjZXIgb2JqZWN0IChvbmUgcHJvdmlkZWQgdG9cbiAqICAgICBge0BsaW5rIG1vZHVsZTp4ZGNvcmUucmVkdWNlfHJlZHVjZX1gKS4gSWYgdGhlIHByb3ZpZGVkIGNvbGxlY3Rpb24gaXMgbm90XG4gKiAgICAgcmVkdWNpYmxlLCBhbGwgb2YgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBvYmplY3Qgd2lsbCBiZSBgbnVsbGAuXG4gKi9cbmZ1bmN0aW9uIHRvUmVkdWNlcihjb2xsZWN0aW9uKSB7XG4gIHJldHVybiBPYmplY3QuZnJlZXplKHtcbiAgICBbcC5pbml0XTogaW5pdChjb2xsZWN0aW9uKSxcbiAgICBbcC5zdGVwXTogc3RlcChjb2xsZWN0aW9uKSxcbiAgICBbcC5maW5hbF06IGZpbmFsKGNvbGxlY3Rpb24pXG4gIH0pO1xufVxuXG4vKipcbiAqIEEgcmVkdWNlciBvYmplY3QgZm9yIGFycmF5cy5cbiAqXG4gKiBAdHlwZSB7bW9kdWxlOnhkY29yZS5SZWR1Y2VyT2JqZWN0fVxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgQVJSQVlfUkVEVUNFUiA9IHRvUmVkdWNlcihbXSk7XG5cbi8qKlxuICogQSByZWR1Y2VyIG9iamVjdCBmb3Igb2JqZWN0cy5cbiAqXG4gKiBAdHlwZSB7bW9kdWxlOnhkY29yZS5SZWR1Y2VyT2JqZWN0fVxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgT0JKRUNUX1JFRFVDRVIgPSB0b1JlZHVjZXIoe30pO1xuXG4vKipcbiAqIEEgcmVkdWNlciBvYmplY3QgZm9yIHN0cmluZ3MuXG4gKlxuICogQHR5cGUge21vZHVsZTp4ZGNvcmUuUmVkdWNlck9iamVjdH1cbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IFNUUklOR19SRURVQ0VSID0gdG9SZWR1Y2VyKFwiXCIpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSB0cmFuc2R1Y2VyIG9iamVjdCBmcm9tIGEgZnVuY3Rpb24gYW5kIGEgcmVkdWNlciBvYmplY3QuXG4gKlxuICogVGhpcyBpcyBzaW1pbGFyIHRvIHtAbGluayBtb2R1bGU6eGRjb3JlLnRvUmVkdWNlcnx0b1JlZHVjZXJ9IGV4Y2VwdCBpbiB0d29cbiAqIHJlc3BlY3RzOlxuICpcbiAqIDEuIEl0IG9ubHkgYWNjZXB0cyBhIHJlZHVjZXIgZnVuY3Rpb24sIG5vdCBhIHJlZHVjZXIgb2JqZWN0XG4gKiAyLiBJdCBjaGFpbnMgdG8gYW5vdGhlciByZWR1Y2VyIG9iamVjdFxuICpcbiAqIFRoaXMgZnVuY3Rpb24gYXBwbGllcyB0aGUgZ2l2ZW4gZnVuY3Rpb24gYXMgdGhlIGBzdGVwYCBmdW5jdGlvbiBvZiB0aGVcbiAqIHJldHVybmVkIHRyYW5zZHVjZXIsIGFuZCB0aGUgYGluaXRgIGFuZCBgcmVzdWx0YCBmdW5jdGlvbnMgc2ltcGx5IGNhbGwgdGhlXG4gKiBzYW1lIGZ1bmN0aW9ucyBpbiB0aGUgbmV4dCByZWR1Y2VyIG9iamVjdC4gVGhpcyBpcyBwcmVjaXNlbHkgd2hhdCAqbW9zdCpcbiAqIHRyYW5zZHVjZXJzIHdhbnQ7IGBpbml0YCBhbmQgYHJlc3VsdGAgZnVuY3Rpb25zIGFyZSBub3JtYWxseSBoYW5kbGVkIGJ5IHRoZVxuICogcmVkdWNlciBhdCB0aGUgZW5kIG9mIHRoZSB0cmFuc2R1Y2VyIGNoYWluLiBJbiB0aGUgcmFyZSBjYXNlIHdoZW4gYW4gYGluaXRgXG4gKiBvciBgcmVzdWx0YCBmdW5jdGlvbiBtdXN0IGRvIG1vcmUgdGhhbiBzaW1wbHkgY2hhaW4sIHRoaXMgZnVuY3Rpb24gd2lsbCBub3RcbiAqIHdvcmsuIEdlbmVyYWxseSB0aGUgdHJhbnNkdWNlciBvYmplY3QgaXMgY3JlYXRlZCBtYW51YWxseSBpbiB0aGF0IGNhc2UuXG4gKlxuICogVGhpcyBmdW5jdGlvbiBkb2VzIG5vdCBhdXRvbWF0aWNhbGx5IGNoYWluIHRoZSBgc3RlcGAgZnVuY3Rpb24gdG8gdGhlIG5leHRcbiAqIG9uZSBkb3duIHRoZSBsaW5lLCBhcyB0aGF0IGNhbiBiZSBkb25lIGluIGFueSBudW1iZXIgb2YgZGlmZmVyZW50IHdheXMuIFRodXNcbiAqIHRoZSBmdW5jdGlvbiBpdHNlbGYgc2hvdWxkIGNhbGwgdGhlIGBzdGVwYCBmdW5jdGlvbiBpbiBgcmVkdWNlcmAgaW4gd2hhdGV2ZXJcbiAqIHdheSBpcyBhcHByb3ByaWF0ZS5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkY29yZVxuICogQHBhcmFtIHttb2R1bGU6eGRjb3JlLlN0ZXBGdW5jdGlvbn0gZm4gVGhlIHN0ZXAgZnVuY3Rpb24gZm9yIHRoZSB0cmFuc2R1Y2VyLlxuICogQHBhcmFtIHttb2R1bGU6eGRjb3JlLlJlZHVjZXJPYmplY3R9IHJlZHVjZXIgVGhlIG5leHQgdHJhbnNkdWNlciBvYmplY3QgaW5cbiAqICAgICB0aGUgY2hhaW4uXG4gKiBAcmV0dXJucyB7bW9kdWxlOnhkY29yZS5SZWR1Y2VyT2JqZWN0fSBBIG5ldyB0cmFuc2R1Y2VyLCBjaGFpbmluZyB0aGVcbiAqICAgICBzdXBwbGllZCBmdW5jdGlvbiB0byB0aGUgc3VwcGxpZWQgdHJhbnNkdWNlci5cbiAqL1xuZnVuY3Rpb24gdG9UcmFuc2R1Y2VyKGZuLCByZWR1Y2VyKSB7XG4gIHJldHVybiB7XG4gICAgW3AuaW5pdF0oKSB7XG4gICAgICByZXR1cm4gcmVkdWNlcltwLmluaXRdKCk7XG4gICAgfSxcblxuICAgIFtwLnN0ZXBdOiBmbixcblxuICAgIFtwLmZpbmFsXSh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHJlZHVjZXJbcC5maW5hbF0odmFsdWUpO1xuICAgIH1cbiAgfTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgcmVkdWNlciBmdW5jdGlvbiBmcm9tIGEgdHJhbnNkdWNlciBmdW5jdGlvbiBhbmQgYSByZWR1Y2VyLlxuICpcbiAqIFRoaXMgcHJvZHVjZXMgYSBmdW5jdGlvbiB0aGF0J3Mgc3VpdGFibGUgZm9yIGJlaW5nIHBhc3NlZCBpbnRvIG90aGVyXG4gKiBsaWJyYXJpZXMnIHJlZHVjZSBmdW5jdGlvbnMsIHN1Y2ggYXMgSmF2YVNjcmlwdCdzIGBBcnJheS5wcm90b3R5cGUucmVkdWNlYCBvclxuICogTG9kYXNoJ3MgYF8ucmVkdWNlYC4gSXQgcmVxdWlyZXMgYm90aCBhIHRyYW5zZHVjZXIgKmFuZCogYSByZWR1Y2VyIGJlY2F1c2VcbiAqIHJlZHVjdGlvbiBmdW5jdGlvbnMgZm9yIHRob3NlIGxpYnJhcmllcyBtdXN0IGtub3cgaG93IHRvIHJlZHVjZSBhcyB3ZWxsIGFzXG4gKiBob3cgdG8gdHJhbnNmb3JtLiBUaGUgcmVkdWNlciBjYW4gYmUgYSBzdGFuZGFyZCByZWR1Y2VyIG9iamVjdCBsaWtlIHRoZSBvbmVzXG4gKiBzZW50IHRvIGB7QGxpbmsgbW9kdWxlOnhkY29yZS5yZWR1Y2V8cmVkdWNlfWAsIG9yIGl0IGNhbiBiZSBhIHBsYWluIGZ1bmN0aW9uXG4gKiB0aGF0IHRha2VzIHR3byBwYXJhbWV0ZXJzIGFuZCByZXR1cm5zIHRoZSByZXN1bHQgb2YgcmVkdWNpbmcgdGhlIHNlY29uZFxuICogcGFyYW1ldGVyIGludG8gdGhlIGZpcnN0IChpLmUuLCBhIHJlZHVjZXIgZnVuY3Rpb24pLlxuICpcbiAqIElmIHRoZXJlIGlzIG5vIG5lZWQgZm9yIGEgdHJhbnNmb3JtYXRpb24sIHRoZW4gcGFzcyBpbiB0aGVcbiAqIGB7QGxpbmsgbW9kdWxlOnhkdWNlLmlkZW50aXR5fGlkZW50aXR5fWAgdHJhbnNkdWNlci5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkY29yZVxuICogQHBhcmFtIHttb2R1bGU6eGRjb3JlLlRyYW5zZHVjZXJGdW5jdGlvbn0gdHJhbnNkdWNlckZuIEEgdHJhbnNkdWNlciBmdW5jdGlvblxuICogICAgIHRoYXQgd3JhcHMgYSB0cmFuc2R1Y2VyIG9iamVjdCB3aG9zZSBgc3RlcGAgZnVuY3Rpb24gd2lsbCBiZSB1c2VkIGFzIGFcbiAqICAgICByZWR1Y2VyIGZ1bmN0aW9uLlxuICogQHBhcmFtIHsobW9kdWxlOnhkY29yZS5TdGVwRnVuY3Rpb258bW9kdWxlOnhkY29yZS5SZWR1Y2VyT2JqZWN0KX0gcmVkdWNlciBBXG4gKiAgICAgcmVkdWNlciB0aGF0IGtub3dzIGhvdyB0byByZWR1Y2UgdmFsdWVzIGludG8gYW4gb3V0cHV0IGNvbGxlY3Rpb24uIFRoaXNcbiAqICAgICBjYW4gZWl0aGVyIGJlIGEgcmVkdWNpbmcgZnVuY3Rpb24gb3IgYSByZWR1Y2VyIG9iamVjdCB3aG9zZSBgc3RlcGBcbiAqICAgICBmdW5jdGlvbiBrbm93cyBob3cgdG8gcGVyZm9ybSB0aGlzIHJlZHVjdGlvbi5cbiAqIEByZXR1cm5zIHttb2R1bGU6eGRjb3JlLlN0ZXBGdW5jdGlvbn0gQSByZWR1Y2VyIGZ1bmN0aW9uIHRoYXQgd2lsbCB0cmFuc2Zvcm1cbiAqICAgICBlbGVtZW50cyB2aWEgdGhlIHRyYW5zZHVjZXIgZnVuY3Rpb24gYW5kIHRoZW4gcmVkdWNlIHRoZW0gaW50byB3aGF0ZXZlclxuICogICAgIGtpbmQgb2YgY29sbGVjdGlvbiB0aGUgcmVkdWNlciBpbXBsZW1lbnRzLlxuICovXG5mdW5jdGlvbiB0b0Z1bmN0aW9uKHRyYW5zZHVjZXJGbiwgcmVkdWNlcikge1xuICBjb25zdCByID0gdHlwZW9mIHJlZHVjZXIgPT09IFwiZnVuY3Rpb25cIiA/IHRvUmVkdWNlcihyZWR1Y2VyKSA6IHJlZHVjZXI7XG4gIGNvbnN0IHJlc3VsdCA9IHRyYW5zZHVjZXJGbihyKTtcbiAgcmV0dXJuIHJlc3VsdFtwLnN0ZXBdLmJpbmQocmVzdWx0KTtcbn1cblxuLyoqXG4gKiBBIGNvbXBsZXRlZCB2YWx1ZS4gVGhpcyBpcyBhIHdyYXBwZXIgYXJvdW5kIHRoZSBhY3R1YWwgdmFsdWUsIHdoaWNoIGlzXG4gKiByZXRhaW5lZCBhcyBvbmUgb2YgdGhlIHByb3BlcnRpZXMsIGFsb25nIHdpdGggYSBtYXJrZXIgcHJvcGVydHkgdG8gc2hvdyB0aGF0XG4gKiB0aGlzIGlzIGEgd3JhcHBlZCB2YWx1ZS5cbiAqXG4gKiBAdHlwZWRlZiBDb21wbGV0ZWRWYWx1ZVxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZGNvcmVcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gU3ltYm9sLmZvcihcImNvbXBsZXRlZFwiKSBBIG1hcmtlciBwcm9wZXJ0eSB0byBpbmRpY2F0ZVxuICogICAgIHRoYXQgdGhpcyBpcywgaW4gZmFjdCwgYSB3cmFwcGVkIGNvbXBsZXRlZCB2YWx1ZS5cbiAqIEBwcm9wZXJ0eSB7Kn0gU3ltYm9sLmZvcihcInZhbHVlXCIpIFRoZSB3cmFwcGVkIHZhbHVlLlxuICovXG5cbi8qKlxuICogTWFya3MgYSB2YWx1ZSBhcyBjb21wbGV0ZS5cbiAqXG4gKiBUaGlzIGlzIGRvbmUgYnkgd3JhcHBpbmcgdGhlIHZhbHVlLiBUaGlzIG1lYW5zIHRocmVlIHRoaW5nczogZmlyc3QsIGFcbiAqIGNvbXBsZXRlIG9iamVjdCBtYXkgYmUgbWFya2VkIGFzIGNvbXBsZXRlIGFnYWluOyBzZWNvbmQsIGEgY29tcGxldGUgdmFsdWVcbiAqIGlzbid0IHVzYWJsZSB3aXRob3V0IGJlaW5nIHVuY29tcGxldGVkIGZpcnN0OyBhbmQgdGhpcmQgYW55IHR5cGUgb2YgdmFsdWVcbiAqIChpbmNsdWRpbmcgYHVuZGVmaW5lZGApIG1heSBiZSBtYXJrZWQgYXMgY29tcGxldGUuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZGNvcmVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGJlIGNvbXBsZXRlZC5cbiAqIEByZXR1cm4ge21vZHVsZTp4ZGNvcmUuQ29tcGxldGVkVmFsdWV9IEEgY29tcGxldGVkIHZlcnNpb24gb2YgdGhlIHByb3ZpZGVkXG4gKiAgICAgdmFsdWUuIFRoaXMgZWZmZWN0IGlzIGFjaGlldmVkIGJ5IHdyYXBwaW5nIHRoZSB2YWx1ZSBpbiBhIG1hcmtlciBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIGNvbXBsZXRlKHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgW3AuY29tcGxldGVkXTogdHJ1ZSxcbiAgICBbcC52YWx1ZV06IHZhbHVlXG4gIH07XG59XG5cbi8qKlxuICogUmVtb3ZlcyB0aGUgY29tcGxldGUgc3RhdHVzIGZyb20gYSBjb21wbGV0ZWQgdmFsdWUuXG4gKlxuICogVGhpcyBmdW5jdGlvbiBpcyBpbnRlbmRlZCB0byBiZSB1c2VkIHdoZW4gaXQncyBjZXJ0YWluIHRoYXQgYSB2YWx1ZSBpc1xuICogYWxyZWFkeSBtYXJrZWQgYXMgY29tcGxldGUuIElmIGl0IGlzIG5vdCwgYHVuZGVmaW5lZGAgd2lsbCBiZSByZXR1cm5lZFxuICogaW5zdGVhZCBvZiB0aGUgdmFsdWUuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZGNvcmVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGJlIHVuY29tcGxldGVkLlxuICogQHJldHVybiB7Kn0gQW4gdW5jb21wbGV0ZWQgdmVyc2lvbiBvZiB0aGUgcHJvdmlkZWQgdmFsdWUuIElmIHRoZSB2YWx1ZSB3YXNcbiAqICAgICBub3QgY29tcGxldGUgaW4gdGhlIGZpcnN0IHBsYWNlLCBgdW5kZWZpbmVkYCB3aWxsIGJlIHJldHVybmVkIGluc3RlYWQuXG4gKi9cbmZ1bmN0aW9uIHVuY29tcGxldGUodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlPy5bcC52YWx1ZV07XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGEgdmFsdWUgaXMgbWFya2VkIGFzIGNvbXBsZXRlLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGRjb3JlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0IGZvciBpdHMgY29tcGxldGUgc3RhdHVzLlxuICogQHJldHVybiB7Ym9vbGVhbn0gRWl0aGVyIGB0cnVlYCBpZiB0aGUgdmFsdWUgaXMgY29tcGxldGVkLCBvciBgZmFsc2VgIGlmIGl0XG4gKiAgICAgaXMgbm90LlxuICovXG5mdW5jdGlvbiBpc0NvbXBsZXRlZCh2YWx1ZSkge1xuICByZXR1cm4gISF2YWx1ZT8uW3AuY29tcGxldGVkXTtcbn1cblxuLyoqXG4gKiBNYWtlcyBzdXJlIHRoYXQgYSB2YWx1ZSBpcyBtYXJrZWQgYXMgY29tcGxldGU7IGlmIGl0IGlzIG5vdCwgaXQgd2lsbCBiZVxuICogbWFya2VkIGFzIGNvbXBsZXRlLlxuICpcbiAqIFRoaXMgZGlmZmVycyBmcm9tIHtAbGluayBtb2R1bGU6eGRjb3JlLmNvbXBsZXRlfGNvbXBsZXRlfSBpbiB0aGF0IGlmIHRoZVxuICogdmFsdWUgaXMgYWxyZWFkeSBjb21wbGV0ZSwgdGhpcyBmdW5jdGlvbiB3b24ndCBjb21wbGV0ZSBpdCBhZ2Fpbi4gVGhlcmVmb3JlXG4gKiB0aHVzIGZ1bmN0aW9uIGNhbid0IGJlIHVzZWQgdG8gbWFrZSBhIHZhbHVlIGNvbXBsZXRlIG11bHRpcGxlIHRpbWVzLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGRjb3JlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBiZSBjb21wbGV0ZWQuXG4gKiBAcmV0dXJuIHsqfSBJZiB0aGUgdmFsdWUgaXMgYWxyZWFkeSBjb21wbGV0ZSwgdGhlbiB0aGUgdmFsdWUgaXMgc2ltcGx5XG4gKiAgICAgcmV0dXJuZWQuIE90aGVyd2lzZSwgYSBjb21wbGV0ZWQgdmVyc2lvbiBvZiB0aGUgdmFsdWUgaXMgcmV0dXJuZWQuXG4gKi9cbmZ1bmN0aW9uIGVuc3VyZUNvbXBsZXRlZCh2YWx1ZSkge1xuICByZXR1cm4gaXNDb21wbGV0ZWQodmFsdWUpID8gdmFsdWUgOiBjb21wbGV0ZSh2YWx1ZSk7XG59XG5cbi8qKlxuICogUmVtb3ZlcyB0aGUgY29tcGxldGUgc3RhdHVzIGZyb20gYSB2YWx1ZSwgYXMgbG9uZyBhcyBpdCBhY3R1YWxseSBpcyBjb21wbGV0ZS5cbiAqXG4gKiBUaGlzIGRvZXMgYSBjaGVjayB0byBtYWtlIHN1cmUgdGhlIHZhbHVlIHBhc3NlZCBpbiBhY3R1YWxseSBpcyBjb21wbGV0ZS4gSWZcbiAqIGl0IGlzbid0LCB0aGUgdmFsdWUgaXRzZWxmIGlzIHJldHVybmVkLiBJdCdzIG1lYW50IHRvIGJlIHVzZWQgd2hlbiB0aGVcbiAqIGNvbXBsZXRlZCBzdGF0dXMgaXMgdW5jZXJ0YWluLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGRjb3JlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSBjb21wbGV0ZSB2YWx1ZSB0byBiZSB1bmNvbXBsZXRlZC5cbiAqIEByZXR1cm4geyp9IElmIHRoZSB2YWx1ZSBpcyBhbHJlYWR5IHVuY29tcGxldGVkLCB0aGUgdmFsdWUgaXMgc2ltcGx5XG4gKiAgICAgcmV0dXJuZWQuIE90aGVyd2lzZSBhbiB1bmNvbXBsZXRlZCB2ZXJzaW9uIG9mIHRoZSB2YWx1ZSBpcyByZXR1cm5lZC5cbiAqL1xuZnVuY3Rpb24gZW5zdXJlVW5jb21wbGV0ZWQodmFsdWUpIHtcbiAgcmV0dXJuIGlzQ29tcGxldGVkKHZhbHVlKSA/IHVuY29tcGxldGUodmFsdWUpIDogdmFsdWU7XG59XG5cbi8qKlxuICogUmVkdWNlcyB0aGUgZWxlbWVudHMgb2YgdGhlIGlucHV0IGNvbGxlY3Rpb24gdGhyb3VnaCBhIHJlZHVjZXIgaW50byBhbiBvdXRwdXRcbiAqIGNvbGxlY3Rpb24uXG4gKlxuICogVGhpcyBpcyB0aGUgbG93ZXN0LWxldmVsIG9mIHRoZSB0cmFuc2R1Y3Rpb24gZnVuY3Rpb25zLiBJbiBmYWN0LCB0aGlzIG9uZSBpc1xuICogc28gbG93LWxldmVsIHRoYXQgaXQgZG9lc24ndCBoYXZlIGEgbG90IG9mIHVzZSBpbiBub3JtYWwgb3BlcmF0aW9uLiBJdCdzIG1vcmVcbiAqIHVzZWZ1bCBmb3Igd3JpdGluZyB5b3VyIG93biB0cmFuc2Zvcm1hdGlvbiBmdW5jdGlvbnMuXG4gKlxuICogYHJlZHVjZWAgZG9lc24ndCBhc3N1bWUgdGhhdCB0aGVyZSdzIGV2ZW4gYSB0cmFuc2Zvcm1hdGlvbi4gSXQgcmVxdWlyZXMgYW5cbiAqIGluaXRpYWwgY29sbGVjdGlvbiBhbmQgYSByZWR1Y2VyIG9iamVjdCB0aGF0IGlzIG1hdGNoZWQgdG8gdGhhdCBpbml0aWFsXG4gKiBjb2xsZWN0aW9uLiBUaGUgcmVkdWNlciBvYmplY3QgbXVzdCBpbXBsZW1lbnQgdGhlIGBzdGVwYCBhbmQgYHJlc3VsdGBcbiAqIHByb3RvY29scywgd2hpY2ggaW5zdHJ1Y3QgYHJlZHVjZWAgb24gaG93IHRvIGJ1aWxkIHVwIHRoZSBjb2xsZWN0aW9uLiBUaGVcbiAqIHJlZHVjZXIgbWF5IGltcGxlbWVudCBhIHRyYW5zZm9ybWF0aW9uIGFzIHdlbGwsIGJ1dCBhbGwgdGhhdCdzIGltcG9ydGFudCBoZXJlXG4gKiBpcyB0aGF0IGl0IGNhbiBkbyB0aGUgcmVkdWN0aW9uLlxuICpcbiAqIFRoZSBpbnB1dCBjb2xsZWN0aW9uIG5lZWQgb25seSBpbXBsZW1lbnQgYGl0ZXJhYmxlYC4gSXQgaXMgbm90IG5lY2Vzc2FyeSBmb3JcbiAqIHRoZSBpbnB1dCBhbmQgb3V0cHV0IGNvbGxlY3Rpb25zIHRvIGJlIG9mIHRoZSBzYW1lIHR5cGU7IGFzIGxvbmcgYXMgdGhlIGlucHV0XG4gKiBpbXBsZW1lbnRzIGBpdGVyYWJsZWAgYW5kIHRoZSByZWR1Y2VyIGltcGxlbWVudHMgYHN0ZXBgIGFuZCBgcmVzdWx0YFxuICogYXBwcm9wcmlhdGUgdG8gdGhlIHR5cGUgb2YgdGhlIGBpbml0YCBjb2xsZWN0aW9uLCB0aGVuIGFueSB0cmFuc2xhdGlvblxuICogYmV0d2VlbiBjb2xsZWN0aW9uIHR5cGVzIGNhbiBvY2N1ci5cbiAqXG4gKiBUaGUgbm9ybWFsIGNvdXJzZSBvZiBvcGVyYXRpb24gd2lsbCBiZSB0byBjYWxsXG4gKiB7QGxpbmsgbW9kdWxlOnhkdWNlLnRyYW5zZHVjZXx0cmFuc2R1Y2V9IGluc3RlYWQsIGFzIHRoYXQgZnVuY3Rpb24gbWFrZXMgaXRcbiAqIGVhc3kgdG8gY29tYmluZSB0cmFuc2Zvcm1hdGlvbnMgd2l0aCByZWR1Y3Rpb25zIGFuZCBjYW4gb3B0aW9uYWxseSBmaWd1cmUgb3V0XG4gKiB0aGUgaW5pdGlhbCBjb2xsZWN0aW9uIGl0c2VsZi5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkY29yZVxuICogQHBhcmFtIHsqfSBjb2xsZWN0aW9uIFRoZSBpbnB1dCBjb2xsZWN0aW9uLiBUaGUgb25seSByZXF1aXJlbWVudCBvZiB0aGlzXG4gKiAgICAgY29sbGVjdGlvbiBpcyB0aGF0IGl0IGltcGxlbWVudCB0aGUgYGl0ZXJhYmxlYCBwcm90b2NvbC4gU3BlY2lhbCBzdXBwb3J0XG4gKiAgICAgaXMgcHJvdmlkZWQgYnkgdGhlIGxpYnJhcnkgZm9yIG9iamVjdHMsIHNvIHRoZXkgY2FuIGJlIHVzZWQgYXMgd2VsbC5cbiAqIEBwYXJhbSB7bW9kdWxlOnhkY29yZS5SZWR1Y2VyT2JqZWN0fSByZWR1Y2VyIEFuIG9iamVjdCB0aGF0IGltcGxlbWVudHMgdGhlXG4gKiAgICAgYHN0ZXBgIGFuZCBgcmVzdWx0YCBwcm90b2NvbHMuIFRoaXMgb2JqZWN0IG11c3Qga25vdyBob3cgdG8gcHJvZHVjZSBhblxuICogICAgIG91dHB1dCBjb2xsZWN0aW9uIHRocm91Z2ggdGhvc2UgcHJvdG9jb2wgZnVuY3Rpb25zLlxuICogQHBhcmFtIHsqfSBpbml0IGEgY29sbGVjdGlvbiBvZiB0aGUgc2FtZSB0eXBlIGFzIHRoZSBvdXRwdXQgY29sbGVjdGlvbi4gSXRcbiAqICAgICBuZWVkIG5vdCBiZSBlbXB0eTsgaWYgaXQgaXMgbm90LCB0aGUgZXhpc3RpbmcgZWxlbWVudHMgYXJlIHJldGFpbmVkIGFzXG4gKiAgICAgdGhlIGlucHV0IGNvbGxlY3Rpb24gaXMgcmVkdWNlZCBpbnRvIGl0LlxuICogQHJldHVybiB7Kn0gQSBuZXcgY29sbGVjdGlvbiwgY29uc2lzdGluZyBvZiB0aGUgYGluaXRgIGNvbGxlY3Rpb24gd2l0aCBhbGwgb2ZcbiAqICAgICB0aGUgZWxlbWVudHMgb2YgdGhlIGBjb2xsZWN0aW9uYCBjb2xsZWN0aW9uIHJlZHVjZWQgaW50byBpdC5cbiAqL1xuZnVuY3Rpb24gcmVkdWNlKGNvbGxlY3Rpb24sIHJlZHVjZXIsIGluaXQpIHtcbiAgaWYgKGNvbGxlY3Rpb24gPT0gbnVsbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3QgaXRlciA9IGl0ZXJhdG9yKGNvbGxlY3Rpb24pO1xuICBpZiAoIWl0ZXIpIHtcbiAgICB0aHJvdyBFcnJvcihgQ2Fubm90IHJlZHVjZSBhbiBpbnN0YW5jZSBvZiAke2NvbGxlY3Rpb24uY29uc3RydWN0b3IubmFtZX1gKTtcbiAgfVxuXG4gIGxldCBhY2MgPSBpbml0O1xuICBsZXQgc3RlcCA9IGl0ZXIubmV4dCgpO1xuXG4gIHdoaWxlICghc3RlcC5kb25lKSB7XG4gICAgYWNjID0gcmVkdWNlcltwLnN0ZXBdKGFjYywgc3RlcC52YWx1ZSk7XG4gICAgaWYgKGlzQ29tcGxldGVkKGFjYykpIHtcbiAgICAgIGFjYyA9IHVuY29tcGxldGUoYWNjKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBzdGVwID0gaXRlci5uZXh0KCk7XG4gIH1cblxuICByZXR1cm4gcmVkdWNlcltwLmZpbmFsXShhY2MpO1xufVxuXG5leHBvcnQge1xuICBpbml0LFxuICBzdGVwLFxuICBmaW5hbCxcbiAgdG9SZWR1Y2VyLFxuICBBUlJBWV9SRURVQ0VSLFxuICBPQkpFQ1RfUkVEVUNFUixcbiAgU1RSSU5HX1JFRFVDRVIsXG4gIHRvVHJhbnNkdWNlcixcbiAgdG9GdW5jdGlvbixcbiAgY29tcGxldGUsXG4gIHVuY29tcGxldGUsXG4gIGlzQ29tcGxldGVkLFxuICBlbnN1cmVDb21wbGV0ZWQsXG4gIGVuc3VyZVVuY29tcGxldGVkLFxuICByZWR1Y2Vcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuLyoqXG4gKiBBIGJ1bmNoIG9mIHV0aWxpdHkgZnVuY3Rpb25zLiBUaGVzZSBhcmUgYWxsIHVzZWQgYnkgdGhlIGxpYnJhcnkgaXRzZWxmIGluXG4gKiBwbGFjZXMsIGJ1dCBtYW55IG9mIHRoZW0gYXJlIHN1aXRhYmxlIGZvciBnZW5lcmFsIHVzZSBhcyB3ZWxsLlxuICogXlxuICogQG1vZHVsZSB4ZGNvcmUvdXRpbHNcbiAqIEBwcml2YXRlXG4gKi9cblxuLyoqXG4gKiBgT2JqZWN0YCdzIGB0b1N0cmluZ2AgaXMgZXhwbGljaXRseSB1c2VkIHRocm91Z2hvdXQgYmVjYXVzZSBpdCBjb3VsZCBiZVxuICogcmVkZWZpbmVkIGluIGFueSBzdWJ0eXBlIG9mIGBPYmplY3RgLlxuICpcbiAqIEBmdW5jdGlvbiB0b1N0cmluZ1xuICogQHByaXZhdGVcbiAqL1xuY29uc3QgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhIHZhbHVlIGlzIGEgZnVuY3Rpb24uXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZGNvcmVcbiAqIEBwYXJhbSB7Kn0geCBUaGUgdmFsdWUgYmVpbmcgdGVzdGVkIHRvIHNlZSBpZiBpdCBpcyBhIGZ1bmN0aW9uLlxuICogQHJldHVybiB7Ym9vbGVhbn0gRWl0aGVyIGB0cnVlYCBpZiB0aGUgdGVzdCB2YWx1ZSBpcyBhIGZ1bmN0aW9uIG9yIGBmYWxzZWAgaWZcbiAqICAgICBpdCBpcyBub3QuXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24oeCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh4KSA9PT0gXCJbb2JqZWN0IEZ1bmN0aW9uXVwiO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhIHZhbHVlIGlzIGEgZ2VuZXJhdG9yIGZ1bmN0aW9uLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGRjb3JlXG4gKiBAcGFyYW0geyp9IHggVGhlIHZhbHVlIGJlaW5nIHRlc3RlZCB0byBzZWUgaWYgaXQgaXMgYSBnZW5lcmF0b3IgZnVuY3Rpb24uXG4gKiBAcmV0dXJuIHtib29sZWFufSBFaXRoZXIgYHRydWVgIGlmIHRoZSB0ZXN0IHZhbHVlIGlzIGEgZ2VuZXJhdG9yIGZ1bmN0aW9uIG9yXG4gKiAgICAgYGZhbHNlYCBpZiBpdCBpcyBub3QuXG4gKi9cbmZ1bmN0aW9uIGlzR2VuZXJhdG9yRnVuY3Rpb24oeCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh4KSA9PT0gXCJbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXVwiO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhIHZhbHVlIGlzIGEgcGxhaW4gb2JqZWN0LlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gcmV0dXJucyBgZmFsc2VgIGlmIHRoZSB2YWx1ZSBpcyBhbnkgb3RoZXIgc29ydCBvZiBidWlsdC1pblxuICogb2JqZWN0IChzdWNoIGFzIGFuIGFycmF5IG9yIGEgc3RyaW5nKS4gSXQgYWxzbyByZXR1cm5zIGBmYWxzZWAgZm9yIGFueSBvYmplY3RcbiAqIHRoYXQgaXMgY3JlYXRlZCBieSBhIGNvbnN0cnVjdG9yIHRoYXQgaXMgbm90IGBPYmplY3RgJ3MgY29uc3RydWN0b3IsIG1lYW5pbmdcbiAqIHRoYXQgXCJpbnN0YW5jZXNcIiBvZiBjdXN0b20gXCJjbGFzc2VzXCIgd2lsbCByZXR1cm4gYGZhbHNlYC4gVGhlcmVmb3JlIGl0J3Mgb25seVxuICogZ29pbmcgdG8gcmV0dXJuIGB0cnVlYCBmb3IgbGl0ZXJhbCBvYmplY3RzIG9yIHRob3NlIGNyZWF0ZWQgd2l0aFxuICogYE9iamVjdC5jcmVhdGUoKWAuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZGNvcmVcbiAqIEBwYXJhbSB7Kn0geCBUaGUgdmFsdWUgYmVpbmcgdGVzdGVkIHRvIHNlZSBpZiBpdCBpcyBhIHBsYWluIG9iamVjdC5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IEVpdGhlciBgdHJ1ZWAgaWYgdGhlIHRlc3QgdmFsdWUgaXMgYSBwbGFpbiBvYmplY3Qgb3JcbiAqICAgICBgZmFsc2VgIGlmIGl0IGlzIG5vdC5cbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QoeCkge1xuICAvLyBUaGlzIGNoZWNrIGV4Y2x1ZGVzIGJ1aWx0LWluIG5vbi1PYmplY3Qgb2JqZWN0cyAoc3VjaCBhcyBBcnJheSBhbmQgU3RyaW5nKS5cbiAgLy8gSXQgYWxzbyBleGNsdWRlcyBvYmplY3RzIGNyZWF0ZWQgZnJvbSBFUzIwMTUgY2xhc3NlcywgYnV0IGl0IGRvZXMgbm90XG4gIC8vIGV4Y2x1ZGUgb2JqZWN0cyBjcmVhdGVkIHdpdGggYG5ld2Agb24gY29uc3RydWN0b3IgZnVuY3Rpb25zICh0aGF0IGhhcHBlbnNcbiAgLy8gYmVsb3cpLlxuICBpZiAodG9TdHJpbmcuY2FsbCh4KSAhPT0gXCJbb2JqZWN0IE9iamVjdF1cIikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIFByb3RvdHlwZS1sZXNzIG9iamVjdHMgKGNyZWF0ZWQgd2l0aCBgT2JqZWN0LmNyZWF0ZShudWxsKSlgIHBhc3NcbiAgY29uc3QgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoeCk7XG4gIGlmIChwcm90byA9PT0gbnVsbCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLy8gQ2hlY2sgdG8gc2VlIHdoZXRoZXIgdGhlIGNvbnN0cnVjdG9yIG9mIHRoZSB0ZXN0ZWQgb2JqZWN0IGlzIHRoZSBPYmplY3RcbiAgLy8gY29uc3RydWN0b3IuIFRoaXMgaXMgdGhlIG9ubHkgY29uc3RydWN0b3IgdGhhdCBwcm9kdWNlcyBhIFwicGxhaW5cIiBvYmplY3QuXG4gIGNvbnN0IGN0b3IgPVxuICAgIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwcm90bywgXCJjb25zdHJ1Y3RvclwiKSAmJlxuICAgIHByb3RvLmNvbnN0cnVjdG9yO1xuICByZXR1cm4gdHlwZW9mIGN0b3IgPT09IFwiZnVuY3Rpb25cIiAmJiBjdG9yID09PSBPYmplY3Q7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGEgdmFsdWUgaXMgYSBjb25jcmV0ZSBudW1iZXIuXG4gKlxuICogVGhpcyBmdW5jdGlvbiB3aWxsIHJldHVybiBgdHJ1ZWAgZm9yIGFueSBudW1iZXIgbGl0ZXJhbCBvciBpbnN0YW5jZSBvZlxuICogYE51bWJlcmAgZXhjZXB0IGZvciBgSW5maW5pdHlgIG9yIGBOYU5gLiBJdCB3aWxsIHJldHVybiBgZmFsc2VgIGZvciBzdHJpbmdzXG4gKiB0aGF0IGhhcHBlbiB0byBhbHNvIGJlIG51bWJlcnM7IHRoZSB2YWx1ZSBtdXN0IGJlIGFuIGFjdHVhbCBgTnVtYmVyYCBpbnN0YW5jZVxuICogb3IgbnVtYmVyIGxpdGVyYWwgdG8gcmV0dXJuIGB0cnVlYC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkY29yZVxuICogQHBhcmFtIHsqfSB4IFRoZSB2YWx1ZSBiZWluZyB0ZXN0ZWQgdG8gc2VlIGlmIGl0IGlzIGEgbnVtYmVyLlxuICogQHJldHVybiB7Ym9vbGVhbn0gRWl0aGVyIGB0cnVlYCBpZiB0aGUgdGVzdCB2YWx1ZSBpcyBhIGZpbml0ZSBudW1iZXIgKG5vdFxuICogICAgIGluY2x1ZGluZyBzdHJpbmcgcmVwcmVzZW50YXRpb25zIG9mIG51bWJlcnMpIG9yIGBmYWxzZWAgaWYgaXQgaXMgbm90LlxuICovXG5mdW5jdGlvbiBpc051bWJlcih4KSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHgpID09PSBcIltvYmplY3QgTnVtYmVyXVwiICYmIGlzRmluaXRlKHgpO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhIHZhbHVlIGlzIGEgc3RyaW5nLlxuICpcbiAqIExpdGVyYWwgc3RyaW5ncyB3aWxsIHJldHVybiBgdHJ1ZWAsIGFzIHdpbGwgaW5zdGFuY2VzIG9mIHRoZSBgU3RyaW5nYCBvYmplY3QuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZGNvcmVcbiAqIEBwYXJhbSB7Kn0geCBUaGUgdmFsdWUgYmVpbmcgdGVzdGVkIHRvIHNlZSBpZiBpdCBpcyBhIHN0cmluZy5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IEVpdGhlciBgdHJ1ZWAgaWYgdGhlIHRlc3QgdmFsdWUgaXMgYSBzdHJpbmcgb3IgYGZhbHNlYCBpZlxuICogICAgaXQgaXMgbm90LlxuICovXG5mdW5jdGlvbiBpc1N0cmluZyh4KSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHgpID09PSBcIltvYmplY3QgU3RyaW5nXVwiO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhIHZhbHVlIGlzIGFuIGFycmF5LlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gbWVyZWx5IGRlbGVnYXRlcyB0byBgQXJyYXkuaXNBcnJheWAuIEl0IGlzIHByb3ZpZGVkIGZvclxuICogY29uc2lzdGVuY3kgaW4gY2FsbGluZyBzdHlsZSBvbmx5LlxuICpcbiAqIEBmdW5jdGlvbiBpc0FycmF5XG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkY29yZVxuICogQHBhcmFtIHsqfSB4IFRoZSB2YWx1ZSBiZWluZyB0ZXN0ZWQgdG8gc2VlIGlmIGl0IGlzIGFuIGFycmF5LlxuICogQHJldHVybiB7Ym9vbGVhbn0gRWl0aGVyIGB0cnVlYCBpZiB0aGUgdGVzdCB2YWx1ZSBpcyBhbiBhcnJheSBvciBgZmFsc2VgIGlmXG4gKiAgICAgaXQgaXMgbm90LlxuICovXG5jb25zdCBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxuZXhwb3J0IHtcbiAgaXNGdW5jdGlvbixcbiAgaXNHZW5lcmF0b3JGdW5jdGlvbixcbiAgaXNPYmplY3QsXG4gIGlzTnVtYmVyLFxuICBpc1N0cmluZyxcbiAgaXNBcnJheVxufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG4vKipcbiAqIEBtb2R1bGUgeGR1Y2VcbiAqL1xuXG5leHBvcnQgeyBrdiwga2V5LCB2YWx1ZSwgY29tcGxlbWVudCB9IGZyb20gXCJtb2R1bGVzL3V0aWxzXCI7XG5leHBvcnQge1xuICB0cmFuc2R1Y2UsXG4gIHNlcXVlbmNlLFxuICBpbnRvLFxuICBhc0FycmF5LFxuICBhc09iamVjdCxcbiAgYXNTdHJpbmcsXG4gIGFzSXRlcmF0b3IsXG4gIGNvbXBvc2UsXG4gIHRvUmVkdWNlcixcbiAgdG9GdW5jdGlvbixcbn0gZnJvbSBcIm1vZHVsZXMvdHJhbnNkdWN0aW9uXCI7XG5leHBvcnQgeyBpZGVudGl0eSwgZmxhdHRlbiwgcmVwZWF0IH0gZnJvbSBcIm1vZHVsZXMvYmFzaWNcIjtcbmV4cG9ydCB7IGNodW5rLCBjaHVua0J5IH0gZnJvbSBcIm1vZHVsZXMvY2h1bmtcIjtcbmV4cG9ydCB7IGRpc3RpbmN0LCBkaXN0aW5jdEJ5LCBkaXN0aW5jdFdpdGggfSBmcm9tIFwibW9kdWxlcy9kaXN0aW5jdFwiO1xuZXhwb3J0IHsgZHJvcCwgZHJvcFdoaWxlIH0gZnJvbSBcIm1vZHVsZXMvZHJvcFwiO1xuZXhwb3J0IHsgZmlsdGVyLCByZWplY3QgfSBmcm9tIFwibW9kdWxlcy9maWx0ZXJcIjtcbmV4cG9ydCB7IG1hcCwgZmxhdE1hcCB9IGZyb20gXCJtb2R1bGVzL21hcFwiO1xuZXhwb3J0IHsgdGFrZSwgdGFrZVdoaWxlLCB0YWtlTnRoIH0gZnJvbSBcIm1vZHVsZXMvdGFrZVwiO1xuZXhwb3J0IHsgdW5pcXVlLCB1bmlxdWVCeSwgdW5pcXVlV2l0aCB9IGZyb20gXCJtb2R1bGVzL3VuaXF1ZVwiO1xuXG4vKipcbiAqIEEgY29sbGVjdGlvbiB0aGF0IGZ1bGx5IHN1cHBvcnRzIHRoZSBpdGVyYWJsZSBhbmQgcmVkdWNlciBwcm90b2NvbHMuIEFueVxuICogdmFsdWUgdGhhdCBzdXBwb3J0cyBhbGwgZm91ciBjYW4gYmUgdXNlZCBieVxuICogYHtAbGluayBtb2R1bGU6eGR1Y2Uuc2VxdWVuY2V8c2VxdWVuY2V9YDsgdGhvc2UgdGhhdCBkbyBub3Qgc3VwcG9ydCBhbGwgZm91clxuICogd2lsbCBoYXZlIHRvIGJlIHVzZWQgd2l0aCBsb3dlci1sZXZlbCBmdW5jdGlvbnMgd2hlcmUgc29tZSBvZiB0aGUgcHJvdG9jb2xzXG4gKiBhcmVuJ3QgbmVjZXNzYXJ5IGJlY2F1c2UgdGhlIHZhbHVlcyB0aGV5IHdvdWxkIHByb3ZpZGUgYXJlIGV4cGxpY2l0bHkgcGFzc2VkLlxuICpcbiAqIEB0eXBlZGVmIENvbGxlY3Rpb25cbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwcm9wZXJ0eSB7ZXh0ZXJuYWw6SXRlcmF0b3J9IFN5bWJvbC5pdGVyYXRvciBBbiBpdGVyYXRvciwgYWNjb3JkaW5nIHRvIHRoZVxuICogICAgIEphdmFTY3JpcHQgc3RhbmRhcmQsIHRoYXQgcHJvdmlkZXMgYSBgbmV4dCgpYCBmdW5jdGlvbiB0aGF0IGNhbiBiZSBjYWxsZWRcbiAqICAgICByZXBlYXRlZGx5LlxuICogQHByb3BlcnR5IHttb2R1bGU6eGRjb3JlLkluaXRGdW5jdGlvbn0gU3ltYm9sLmZvcihcInJlZHVjZXIvaW5pdFwiKSBBIGZ1bmN0aW9uXG4gKiAgICAgdGhhdCBjYW4gY3JlYXRlIGEgbmV3LCBlbXB0eSBjb3B5IG9mIHRoZSBjb2xsZWN0aW9uLlxuICogQHByb3BlcnR5IHttb2R1bGU6eGRjb3JlLlN0ZXBGdW5jdGlvbn0gU3ltYm9sLmZvcihcInJlZHVjZXIvc3RlcFwiKSBBIGZ1bmN0aW9uXG4gKiAgICAgdGhhdCBjYW4gYWNjZXB0IGEgY29sbGVjdGlvbiBhbmQgYSBuZXcgZWxlbWVudCB0byBiZSBhZGRlZCB0byBpdCBhbmRcbiAqICAgICByZXR1cm4gdGhlIGNvbGxlY3Rpb24gd2l0aCB0aGUgbmV3IGVsZW1lbnQgaW5jb3Jwb3JhdGVkLlxuICogQHByb3BlcnR5IHttb2R1bGU6eGRjb3JlLkZpbmFsRnVuY3Rpb259IFN5bWJvbC5mb3IoXCJyZWR1Y2VyL2ZpbmFsXCIpIEFcbiAqICAgICBmdW5jdGlvbiB0aGF0IGFjY2VwdHMgYSBjb2xsZWN0aW9uIGFuZCByZXR1cm5zIHRoZSBzYW1lIGNvbGxlY3Rpb24gd2l0aFxuICogICAgIGFueSBmaW5hbCBtb2RpZmljYXRpb25zIHRoYXQgbWlnaHQgYmUgbmVjZXNzYXJ5IGZvciBpdC5cbiAqL1xuXG4vKipcbiAqIEFuIG9iamVjdCByZXBvcmVzZW50aW5nIGEgc2luZ2xlIHByb3BlcnR5IG9uIGFub3RoZXIgb2JqZWN0LiBPbmUgb2YgdGhlc2VcbiAqIG9iamVjdHMgd2lsbCBoYXZlIHR3byBrZXlzOiBga2AsIHdoaWNoIHJlcHJlc2VudHMgdGhlIGtleSBvZiBvbmUgb2YgdGhlXG4gKiBvdGhlciBwcm9qZWN0J3MgcHJvcGVydGllcywgYW5kIGB2YCwgd2hpY2ggcmVwcmVzZW50cyB0aGUgdmFsdWUuIFRoaXMgaXMgdGhlXG4gKiBmb3JtYXQgb3V0cHV0IGJ5IGNvbnZlbmllbmNlIGZ1bmN0aW9ucyB0aGF0IG1ha2UgaXQgZWFzaWVyIHRvIHdvcmsgd2l0aFxuICogb2JqZWN0cyBpbiB0cmFuc2R1Y2Vycy5cbiAqXG4gKiBAdHlwZWRlZiBQcm9wZXJ0eU9iamVjdFxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHByb3BlcnR5IHsoc3RyaW5nfFN5bWJvbCl9IGsgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgcmVwcmVzZW50ZWQgYnkgdGhpc1xuICogICAgIG9iamVjdC5cbiAqIEBwcm9wZXJ0eSB7Kn0gdiBUaGUgdmFsdWUgb2YgdGhlIHByb3BlcnR5IHJlcHJlc2VudGVkIGJ5IHRoaXMgb2JqZWN0LlxuICovXG5cbi8qKlxuICogQSBmdW5jdGlvbiB3aGljaCB0YWtlcyBzb21lIG51bWJlciBvZiBhcmd1bWVudHMgYW5kIHJldHVybnMgYHRydWVgIG9yIGBmYWxzZWBcbiAqIHdoZW4gYXBwbGllZCB0byB0aG9zZSBhcmd1bWVudHMgZGVwZW5kaW5nIG9uIHRoZSBydWxlcyB0aGF0IHRoZSBmdW5jdGlvblxuICogaW1wbGVtZW50cy5cbiAqXG4gKiBAY2FsbGJhY2sgUHJlZGljYXRlRnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwYXJhbSB7Li4uKn0gYXJncyBUaGUgYXJndW1lbnRzIHBhc3NlZCB0byB0aGUgZnVuY3Rpb24uIFRoZSBudW1iZXIgYW5kXG4gKiAgICAgdHlwZXMgb2YgdGhlc2UgYXJndW1lbnRzIHZhcnkgZGVwZW5kaW5nIG9uIHdoYXQgdGhlIGZ1bmN0aW9uIGlzIGRvaW5nLlxuICogQHJldHVybnMge2Jvb2xlYW59IEVpdGhlciBgdHJ1ZWAgb3IgYGZhbHNlYCBkZXBlbmRpbmcgb24gd2hldGhlciB0aGVcbiAqICAgICBhcmd1bWVudHMgcGFzcyB3aGF0ZXZlciB0ZXN0IHRoZSBmdW5jdGlvbiBpcyBzcGVjaWZ5aW5nLlxuICovXG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuaW1wb3J0IHtcbiAgcHJvdG9jb2xzIGFzIHAsXG4gIGlzQ29tcGxldGVkLFxuICBjb21wbGV0ZSxcbiAgaXNJdGVyYWJsZSxcbiAgcmVkdWNlLFxuICB0b1RyYW5zZHVjZXJcbn0gZnJvbSBcIkBjaGFua28veGRjb3JlXCI7XG5cbmltcG9ydCB7IHBhcnNlTnVtYmVyQXJncyB9IGZyb20gXCJtb2R1bGVzL3V0aWxzXCI7XG5pbXBvcnQgeyBzZXF1ZW5jZSB9IGZyb20gXCJtb2R1bGVzL3RyYW5zZHVjdGlvblwiO1xuXG4vKipcbiAqIFJldHVybnMgZXhhY3RseSB0aGUgc2FtZSBjb2xsZWN0aW9uIHNlbnQgdG8gaXQuXG4gKlxuICogVGhpcyBpcyBnZW5lcmFsbHkgYSBmdW5jdGlvbiB1c2VkIHdoZW4gYSB0cmFuc2R1Y2VyIGZ1bmN0aW9uIGlzIHJlcXVpcmVkIGJ1dFxuICogdGhlcmUgaXMgbm8gZGVzaXJlIHRvIGRvIGFuIGFjdHVhbCB0cmFuc2Zvcm1hdGlvbi4gVGhlIFwidHJhbnNmb3JtYXRpb25cIlxuICogaW1wbGVtZW50ZWQgaGVyZSBpcyB0byBwYXNzIGVhY2ggZWxlbWVudCB0aHJvdWdoIGV4YWN0bHkgYXMgaXQgaXMuXG4gKlxuICogSWYgbm8gY29sbGVjdGlvbiBpcyBwcm92aWRlZCwgYSBmdW5jdGlvbiBpcyByZXR1cm5lZCB0aGF0IGNhbiBiZSBwYXNzZWQgdG9cbiAqIGB7QGxpbmsgbW9kdWxlOnhkdWNlLnNlcXVlbmNlfHNlcXVlbmNlfWAsIGV0IGFsLlxuICpcbiAqIGBgYFxuICogY29uc3QgcmVzdWx0ID0gaWRlbnRpdHkoWzEsIDIsIDMsIDQsIDVdKTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdCk7ICAgLy8gLT4gWzEsIDIsIDMsIDQsIDVdXG4gKiBgYGBcbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcGFyYW0ge21vZHVsZTp4ZHVjZS5Db2xsZWN0aW9ufSBbY29sbGVjdGlvbl0gQW4gb3B0aW9uYWwgaW5wdXQgY29sbGVjdGlvblxuICogICAgIHRoYXQgaXMgdG8gYmUgdHJhbnNkdWNlZC5cbiAqIEByZXR1cm4geyhtb2R1bGU6eGR1Y2UuQ29sbGVjdGlvbnxtb2R1bGU6eGR1Y2UuVHJhbnNkdWNlckZ1bmN0aW9uKX0gSWYgYVxuICogICAgIGNvbGxlY3Rpb24gaXMgc3VwcGxpZWQsIHRoZW4gdGhlIGZ1bmN0aW9uIHJldHVybnMgYSBuZXcgY29sbGVjdGlvbiBvZiB0aGVcbiAqICAgICBzYW1lIHR5cGUgd2l0aCBhbGwgb2YgdGhlIGVsZW1lbnRzIG9mIHRoZSBpbnB1dCBjb2xsZWN0aW9uIHVudG91Y2hlZC4gSWZcbiAqICAgICBubyBjb2xsZWN0aW9uIGlzIHN1cHBsaWVkLCBhIHRyYW5zZHVjZXIgZnVuY3Rpb24sIHN1aXRhYmxlIGZvciBwYXNzaW5nIHRvXG4gKiAgICAgYHtAbGluayBtb2R1bGU6eGR1Y2Uuc2VxdWVuY2V8c2VxdWVuY2V9YCxcbiAqICAgICBge0BsaW5rIG1vZHVsZTp4ZHVjZS5pbnRvfGludG99YCwgZXRjLiBpcyByZXR1cm5lZC5cbiAqL1xuZnVuY3Rpb24gaWRlbnRpdHkoY29sbGVjdGlvbikge1xuICByZXR1cm4gY29sbGVjdGlvblxuICAgID8gc2VxdWVuY2UoY29sbGVjdGlvbiwgaWRlbnRpdHkoKSlcbiAgICA6IG5leHQgPT4gdG9UcmFuc2R1Y2VyKChhY2MsIHZhbHVlKSA9PiBuZXh0W3Auc3RlcF0oYWNjLCB2YWx1ZSksIG5leHQpO1xufVxuXG4vKipcbiAqIEZsYXR0ZW5zIGEgY29sbGVjdGlvbiBieSBtZXJnaW5nIGVsZW1lbnRzIGluIGFueSBzdWItY29sbGVjdGlvbiBpbnRvIHRoZSBtYWluXG4gKiBjb2xsZWN0aW9uLlxuICpcbiAqIEVsZW1lbnRzIG9mIHRoZSBtYWluIGNvbGxlY3Rpb24gdGhhdCBhcmUgbm90IGNvbGxlY3Rpb25zIHRoZW1zZWx2ZXMgYXJlIG5vdFxuICogY2hhbmdlZC4gSXQncyBmaW5lIHRvIGhhdmUgYSBjb21iaW5hdGlvbiBvZiB0aGUgdHdvLCBzb21lIGVsZW1lbnRzIHRoYXQgYXJlXG4gKiBjb2xsZWN0aW9ucyBhbmQgc29tZSB0aGF0IGFyZSBub3QuIElmIGFuIGVsZW1lbnQgaXMgYSBjb2xsZWN0aW9uIHRoYXRcbiAqIGNvbnRhaW5zIG90aGVyIGNvbGxlY3Rpb25zLCB0aG9zZSBjb2xsZWN0aW9ucyB3aWxsICpub3QqIGJlIGZsYXR0ZW5lZDsgdGhlXG4gKiBmbGF0dGVuaW5nIG9ubHkgaGFwcGVucyB0byBvbmUgbGV2ZWwuXG4gKlxuICogU2luY2UgdGhlcmUgYXJlbid0IHN1Yi1jb2xsZWN0aW9ucyBpbiBvYmplY3RzLCBzdHJpbmdzLCBvciBpdGVyYXRvcnMsXG4gKiBgZmxhdHRlbmAgZG9lc24ndCBtYWtlIHNlbnNlIHdpdGggdGhvc2UgdHlwZXMgb2YgY29sbGVjdGlvbnMuXG4gKlxuICogSWYgbm8gY29sbGVjdGlvbiBpcyBwcm92aWRlZCwgYSBmdW5jdGlvbiBpcyByZXR1cm5lZCB0aGF0IGNhbiBiZSBwYXNzZWQgdG9cbiAqIGB7QGxpbmsgbW9kdWxlOnhkdWNlLnNlcXVlbmNlfHNlcXVlbmNlfWAsIGV0IGFsLlxuICpcbiAqIGBgYFxuICogY29uc3QgcmVzdWx0ID0gZmxhdHRlbihbWzEsIDJdLCBbMywgNCwgNV0sIDYsIFs3XV0pO1xuICogY29uc29sZS5sb2cocmV1c2x0KTsgICAvLyAtPiBbMSwgMiwgMywgNCwgNSwgNiwgN11cbiAqXG4gKiBjb25zdCByZXN1bHQgPSBmbGF0dGVuKFtbMSwgMl0sIFszLCBbNCwgNV1dLCA2LCBbN11dKTtcbiAqIGNvbnNvbGUubG9nKHJldXNsdCk7ICAgLy8gLT4gWzEsIDIsIDMsIFs0LCA1XSwgNiwgN11cbiAqIGBgYFxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2UudHJhbnNkdWNlcnNcbiAqIEBwYXJhbSB7bW9kdWxlOnhkdWNlLkNvbGxlY3Rpb259IFtjb2xsZWN0aW9uXSBBbiBvcHRpb25hbCBpbnB1dCBjb2xsZWN0aW9uXG4gKiAgICAgdGhhdCBpcyB0byBiZSB0cmFuc2R1Y2VkLlxuICogQHJldHVybiB7KG1vZHVsZTp4ZHVjZS5Db2xsZWN0aW9ufG1vZHVsZTp4ZHVjZS5UcmFuc2R1Y2VyRnVuY3Rpb24pfSBJZiBhXG4gKiAgICAgY29sbGVjdGlvbiBpcyBzdXBwbGllZCwgdGhlbiB0aGUgZnVuY3Rpb24gcmV0dXJucyBhIG5ldyBjb2xsZWN0aW9uIG9mIHRoZVxuICogICAgIHNhbWUgdHlwZSB3aXRoIGFsbCBvZiB0aGUgZWxlbWVudHMgb2YgdGhlIGlucHV0IGNvbGxlY3Rpb24gZmxhdHRlbmVkLiBJZlxuICogICAgIG5vIGNvbGxlY3Rpb24gaXMgc3VwcGxpZWQsIGEgdHJhbnNkdWNlciBmdW5jdGlvbiwgc3VpdGFibGUgZm9yIHBhc3NpbmcgdG9cbiAqICAgICBge0BsaW5rIG1vZHVsZTp4ZHVjZS5zZXF1ZW5jZXxzZXF1ZW5jZX1gLFxuICogICAgIGB7QGxpbmsgbW9kdWxlOnhkdWNlLmludG98aW50b31gLCBldGMuIGlzIHJldHVybmVkLlxuICovXG5mdW5jdGlvbiBmbGF0dGVuKGNvbGxlY3Rpb24pIHtcbiAgcmV0dXJuIGNvbGxlY3Rpb25cbiAgICA/IHNlcXVlbmNlKGNvbGxlY3Rpb24sIGZsYXR0ZW4oKSlcbiAgICA6IG5leHQgPT5cbiAgICAgICAgdG9UcmFuc2R1Y2VyKChhY2MsIHZhbHVlKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3ViVHJhbnNkdWNlciA9IHRvVHJhbnNkdWNlcigoYWNjLCB2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdiA9IG5leHRbcC5zdGVwXShhY2MsIHZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybiBpc0NvbXBsZXRlZCh2KSA/IGNvbXBsZXRlKHYpIDogdjtcbiAgICAgICAgICB9LCBuZXh0KTtcblxuICAgICAgICAgIHJldHVybiBpc0l0ZXJhYmxlKHZhbHVlKVxuICAgICAgICAgICAgPyByZWR1Y2UodmFsdWUsIHN1YlRyYW5zZHVjZXIsIGFjYylcbiAgICAgICAgICAgIDogc3ViVHJhbnNkdWNlcltwLnN0ZXBdKGFjYywgdmFsdWUpO1xuICAgICAgICB9LCBuZXh0KTtcbn1cblxuLyoqXG4gKiBSZXBlYXRzIGVhY2ggZWxlbWVudCBmcm9tIHRoZSBpbnB1dCBjb2xsZWN0aW9uIGBuYCB0aW1lcyBpbiB0aGUgb3V0cHV0XG4gKiBjb2xsZWN0aW9uLlxuICpcbiAqIFRoZXNlIGVsZW1lbnRzIGFyZSBwdXQgaW50byB0aGUgbWFpbiBvdXRwdXQgY29sbGVjdGlvbiwgbm90IGludG9cbiAqIHN1YmNvbGxlY3Rpb25zLiBJbiBvdGhlciB3b3JkcywgZWFjaCBpbnB1dCBlbGVtZW50IGNyZWF0ZXMgYG5gIG91dHB1dFxuICogZWxlbWVudHMuXG4gKlxuICogSWYgbm8gY29sbGVjdGlvbiBpcyBwcm92aWRlZCwgYSBmdW5jdGlvbiBpcyByZXR1cm5lZCB0aGF0IGNhbiBiZSBwYXNzZWQgdG9cbiAqIGB7QGxpbmsgbW9kdWxlOnhkdWNlLnNlcXVlbmNlfHNlcXVlbmNlfWAsIGV0IGFsLlxuICpcbiAqIGBgYFxuICogY29uc3QgcmVzdWx0ID0gcmVwZWF0KFsxLCAyLCAzLCA0LCA1XSwgMyk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQpOyAgIC8vIC0+IFsxLCAxLCAxLCAyLCAyLCAyLCAzLCAzLCAzLCA0LCA0LCA0LCA1LCA1LCA1XVxuICogYGBgXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHBhcmFtIHttb2R1bGU6eGR1Y2UuQ29sbGVjdGlvbn0gW2NvbGxlY3Rpb25dIEFuIG9wdGlvbmFsIGlucHV0IGNvbGxlY3Rpb25cbiAqICAgICB0aGF0IGlzIHRvIGJlIHRyYW5zZHVjZWQuXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgbnVtYmVyIG9mIHRpbWVzIHRoYXQgZWFjaCBlbGVtZW50IGZyb20gdGhlIGlucHV0XG4gKiAgICAgY29sbGVjdGlvbiBzaG91bGQgYmUgcmVwZWF0ZWQgaW4gdGhlIG91dHB1dCBjb2xsZWN0aW9uLlxuICogQHJldHVybiB7KG1vZHVsZTp4ZHVjZS5Db2xsZWN0aW9ufG1vZHVsZTp4ZHVjZS5UcmFuc2R1Y2VyRnVuY3Rpb24pfSBJZiBhXG4gKiAgICAgY29sbGVjdGlvbiBpcyBzdXBwbGllZCwgdGhlbiB0aGUgZnVuY3Rpb24gcmV0dXJucyBhIG5ldyBjb2xsZWN0aW9uIG9mIHRoZVxuICogICAgIHNhbWUgdHlwZSB3aXRoIGFsbCBvZiB0aGUgZWxlbWVudHMgb2YgdGhlIGlucHV0IGNvbGxlY3Rpb24gcmVwZWF0ZWQuIElmXG4gKiAgICAgbm8gY29sbGVjdGlvbiBpcyBzdXBwbGllZCwgYSB0cmFuc2R1Y2VyIGZ1bmN0aW9uLCBzdWl0YWJsZSBmb3IgcGFzc2luZyB0b1xuICogICAgIGB7QGxpbmsgbW9kdWxlOnhkdWNlLnNlcXVlbmNlfHNlcXVlbmNlfWAsXG4gKiAgICAgYHtAbGluayBtb2R1bGU6eGR1Y2UuaW50b3xpbnRvfWAsIGV0Yy4gaXMgcmV0dXJuZWQuXG4gKi9cbmZ1bmN0aW9uIHJlcGVhdChjb2xsZWN0aW9uLCBuKSB7XG4gIGNvbnN0IFtjb2wsIG51bV0gPSBwYXJzZU51bWJlckFyZ3MoY29sbGVjdGlvbiwgbik7XG4gIHJldHVybiBjb2xcbiAgICA/IHNlcXVlbmNlKGNvbCwgcmVwZWF0KG51bSkpXG4gICAgOiBuZXh0ID0+XG4gICAgICAgIHRvVHJhbnNkdWNlcigoYWNjLCB2YWx1ZSkgPT4ge1xuICAgICAgICAgIGxldCByZXN1bHQgPSBhY2M7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW07IGkrKykge1xuICAgICAgICAgICAgcmVzdWx0ID0gbmV4dFtwLnN0ZXBdKHJlc3VsdCwgdmFsdWUpO1xuICAgICAgICAgICAgaWYgKGlzQ29tcGxldGVkKHJlc3VsdCkpIHtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0sIG5leHQpO1xufVxuXG5leHBvcnQgeyBpZGVudGl0eSwgZmxhdHRlbiwgcmVwZWF0IH07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuaW1wb3J0IHsgcHJvdG9jb2xzIGFzIHAsIGVuc3VyZVVuY29tcGxldGVkIH0gZnJvbSBcIkBjaGFua28veGRjb3JlXCI7XG5pbXBvcnQge1xuICBwYXJzZU51bWJlckFyZ3MsXG4gIHBhcnNlRnVuY3Rpb25BcmdzLFxuICBzYW1lVmFsdWVaZXJvXG59IGZyb20gXCJtb2R1bGVzL3V0aWxzXCI7XG5pbXBvcnQgeyBzZXF1ZW5jZSB9IGZyb20gXCJtb2R1bGVzL3RyYW5zZHVjdGlvblwiO1xuXG5jb25zdCBOT19WQUxVRSA9IFN5bWJvbChcIk5PX1ZBTFVFXCIpO1xuXG5mdW5jdGlvbiBjaHVuayhjb2xsZWN0aW9uLCBuKSB7XG4gIGNvbnN0IFtjb2wsIG51bV0gPSBwYXJzZU51bWJlckFyZ3MoY29sbGVjdGlvbiwgbik7XG4gIHJldHVybiBjb2xcbiAgICA/IHNlcXVlbmNlKGNvbCwgY2h1bmsobnVtKSlcbiAgICA6IG5leHQgPT4ge1xuICAgICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgICBsZXQgcGFydCA9IFtdO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgW3AuaW5pdF0oKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV4dFtwLmluaXRdKCk7XG4gICAgICAgICAgfSxcblxuICAgICAgICAgIFtwLnN0ZXBdKGFjYywgdmFsdWUpIHtcbiAgICAgICAgICAgIHBhcnRbY291bnQrK10gPSB2YWx1ZTtcbiAgICAgICAgICAgIGlmIChjb3VudCA9PT0gbnVtKSB7XG4gICAgICAgICAgICAgIGNvbnN0IG91dCA9IHBhcnQuc2xpY2UoMCwgbnVtKTtcbiAgICAgICAgICAgICAgcGFydCA9IFtdO1xuICAgICAgICAgICAgICBjb3VudCA9IDA7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0W3Auc3RlcF0oYWNjLCBvdXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgW3AuZmluYWxdKHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoY291bnQgPiAwKSB7XG4gICAgICAgICAgICAgIHJldHVybiBlbnN1cmVVbmNvbXBsZXRlZChcbiAgICAgICAgICAgICAgICBuZXh0W3Auc3RlcF0odmFsdWUsIHBhcnQuc2xpY2UoMCwgY291bnQpKVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5leHRbcC5maW5hbF0odmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH07XG59XG5cbmZ1bmN0aW9uIGNodW5rQnkoY29sbGVjdGlvbiwgZm4pIHtcbiAgY29uc3QgW2NvbCwgZnVuY10gPSBwYXJzZUZ1bmN0aW9uQXJncyhjb2xsZWN0aW9uLCBmbik7XG4gIHJldHVybiBjb2xcbiAgICA/IHNlcXVlbmNlKGNvbCwgY2h1bmtCeShmdW5jKSlcbiAgICA6IG5leHQgPT4ge1xuICAgICAgICBsZXQgcGFydCA9IFtdO1xuICAgICAgICBsZXQgbGFzdCA9IE5PX1ZBTFVFO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgW3AuaW5pdF0oKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV4dFtwLmluaXRdKCk7XG4gICAgICAgICAgfSxcblxuICAgICAgICAgIFtwLnN0ZXBdKGFjYywgdmFsdWUpIHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnQgPSBmdW5jKHZhbHVlKTtcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBhY2M7XG4gICAgICAgICAgICBpZiAobGFzdCA9PT0gTk9fVkFMVUUgfHwgc2FtZVZhbHVlWmVybyhjdXJyZW50LCBsYXN0KSkge1xuICAgICAgICAgICAgICBwYXJ0LnB1c2godmFsdWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmVzdWx0ID0gbmV4dFtwLnN0ZXBdKHJlc3VsdCwgcGFydCk7XG4gICAgICAgICAgICAgIHBhcnQgPSBbdmFsdWVdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGFzdCA9IGN1cnJlbnQ7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgIH0sXG5cbiAgICAgICAgICBbcC5maW5hbF0odmFsdWUpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvdW50ID0gcGFydC5sZW5ndGg7XG4gICAgICAgICAgICBpZiAoY291bnQgPiAwKSB7XG4gICAgICAgICAgICAgIHJldHVybiBlbnN1cmVVbmNvbXBsZXRlZChcbiAgICAgICAgICAgICAgICBuZXh0W3Auc3RlcF0odmFsdWUsIHBhcnQuc2xpY2UoMCwgY291bnQpKVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5leHRbcC5maW5hbF0odmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH07XG59XG5cbmV4cG9ydCB7IGNodW5rLCBjaHVua0J5IH07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuaW1wb3J0IHsgcHJvdG9jb2xzIGFzIHAsIHRvVHJhbnNkdWNlciB9IGZyb20gXCJAY2hhbmtvL3hkY29yZVwiO1xuaW1wb3J0IHsgcGFyc2VGdW5jdGlvbkFyZ3MsIHNhbWVWYWx1ZVplcm8gfSBmcm9tIFwibW9kdWxlcy91dGlsc1wiO1xuaW1wb3J0IHsgc2VxdWVuY2UgfSBmcm9tIFwibW9kdWxlcy90cmFuc2R1Y3Rpb25cIjtcblxuY29uc3QgTk9fVkFMVUUgPSBTeW1ib2woXCJOT19WQUxVRVwiKTtcblxuZnVuY3Rpb24gZGlzdGluY3RXaXRoKGNvbGxlY3Rpb24sIGZuKSB7XG4gIGNvbnN0IFtjb2wsIGZ1bmNdID0gcGFyc2VGdW5jdGlvbkFyZ3MoY29sbGVjdGlvbiwgZm4pO1xuICByZXR1cm4gY29sXG4gICAgPyBzZXF1ZW5jZShjb2wsIGRpc3RpbmN0V2l0aChmdW5jKSlcbiAgICA6IG5leHQgPT4ge1xuICAgICAgICBsZXQgbGFzdCA9IE5PX1ZBTFVFO1xuICAgICAgICByZXR1cm4gdG9UcmFuc2R1Y2VyKChhY2MsIHZhbHVlKSA9PiB7XG4gICAgICAgICAgaWYgKGxhc3QgIT09IE5PX1ZBTFVFICYmIGZ1bmModmFsdWUsIGxhc3QpKSB7XG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsYXN0ID0gdmFsdWU7XG4gICAgICAgICAgcmV0dXJuIG5leHRbcC5zdGVwXShhY2MsIHZhbHVlKTtcbiAgICAgICAgfSwgbmV4dCk7XG4gICAgICB9O1xufVxuXG5mdW5jdGlvbiBkaXN0aW5jdEJ5KGNvbGxlY3Rpb24sIGZuKSB7XG4gIGNvbnN0IFtjb2wsIGZ1bmNdID0gcGFyc2VGdW5jdGlvbkFyZ3MoY29sbGVjdGlvbiwgZm4pO1xuICByZXR1cm4gZGlzdGluY3RXaXRoKGNvbCwgKGEsIGIpID0+IHNhbWVWYWx1ZVplcm8oZnVuYyhhKSwgZnVuYyhiKSkpO1xufVxuXG5mdW5jdGlvbiBkaXN0aW5jdChjb2xsZWN0aW9uKSB7XG4gIHJldHVybiBkaXN0aW5jdFdpdGgoY29sbGVjdGlvbiwgc2FtZVZhbHVlWmVybyk7XG59XG5cbmV4cG9ydCB7IGRpc3RpbmN0LCBkaXN0aW5jdEJ5LCBkaXN0aW5jdFdpdGggfTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG5pbXBvcnQgeyBwcm90b2NvbHMgYXMgcCwgdG9UcmFuc2R1Y2VyIH0gZnJvbSBcIkBjaGFua28veGRjb3JlXCI7XG5pbXBvcnQgeyBwYXJzZU51bWJlckFyZ3MsIHBhcnNlRnVuY3Rpb25BcmdzIH0gZnJvbSBcIm1vZHVsZXMvdXRpbHNcIjtcbmltcG9ydCB7IHNlcXVlbmNlIH0gZnJvbSBcIm1vZHVsZXMvdHJhbnNkdWN0aW9uXCI7XG5cbmZ1bmN0aW9uIGRyb3AoY29sbGVjdGlvbiwgbikge1xuICBjb25zdCBbY29sLCBudW1dID0gcGFyc2VOdW1iZXJBcmdzKGNvbGxlY3Rpb24sIG4pO1xuICByZXR1cm4gY29sXG4gICAgPyBzZXF1ZW5jZShjb2wsIGRyb3AobnVtKSlcbiAgICA6IG5leHQgPT4ge1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIHJldHVybiB0b1RyYW5zZHVjZXIoXG4gICAgICAgICAgKGFjYywgdmFsdWUpID0+IChpKysgPCBudW0gPyBhY2MgOiBuZXh0W3Auc3RlcF0oYWNjLCB2YWx1ZSkpLFxuICAgICAgICAgIG5leHRcbiAgICAgICAgKTtcbiAgICAgIH07XG59XG5cbmZ1bmN0aW9uIGRyb3BXaGlsZShjb2xsZWN0aW9uLCBmbikge1xuICBjb25zdCBbY29sLCBmdW5jXSA9IHBhcnNlRnVuY3Rpb25BcmdzKGNvbGxlY3Rpb24sIGZuKTtcbiAgcmV0dXJuIGNvbFxuICAgID8gc2VxdWVuY2UoY29sLCBkcm9wV2hpbGUoZnVuYykpXG4gICAgOiBuZXh0ID0+IHtcbiAgICAgICAgbGV0IGRyb3BwaW5nID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHRvVHJhbnNkdWNlcigoYWNjLCB2YWx1ZSkgPT4ge1xuICAgICAgICAgIGlmIChkcm9wcGluZykge1xuICAgICAgICAgICAgaWYgKGZ1bmModmFsdWUpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkcm9wcGluZyA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbmV4dFtwLnN0ZXBdKGFjYywgdmFsdWUpO1xuICAgICAgICB9LCBuZXh0KTtcbiAgICAgIH07XG59XG5cbmV4cG9ydCB7IGRyb3AsIGRyb3BXaGlsZSB9O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG5cbmltcG9ydCB7IHByb3RvY29scyBhcyBwLCB0b1RyYW5zZHVjZXIgfSBmcm9tIFwiQGNoYW5rby94ZGNvcmVcIjtcbmltcG9ydCB7IHBhcnNlRnVuY3Rpb25BcmdzLCBjb21wbGVtZW50IH0gZnJvbSBcIm1vZHVsZXMvdXRpbHNcIjtcbmltcG9ydCB7IHNlcXVlbmNlIH0gZnJvbSBcIm1vZHVsZXMvdHJhbnNkdWN0aW9uXCI7XG5cbmZ1bmN0aW9uIGZpbHRlcihjb2xsZWN0aW9uLCBmbikge1xuICBjb25zdCBbY29sLCBmdW5jXSA9IHBhcnNlRnVuY3Rpb25BcmdzKGNvbGxlY3Rpb24sIGZuKTtcbiAgcmV0dXJuIGNvbFxuICAgID8gc2VxdWVuY2UoY29sLCBmaWx0ZXIoZnVuYykpXG4gICAgOiBuZXh0ID0+XG4gICAgICAgIHRvVHJhbnNkdWNlcihcbiAgICAgICAgICAoYWNjLCB2YWx1ZSkgPT4gKGZ1bmModmFsdWUpID8gbmV4dFtwLnN0ZXBdKGFjYywgdmFsdWUpIDogYWNjKSxcbiAgICAgICAgICBuZXh0XG4gICAgICAgICk7XG59XG5cbmZ1bmN0aW9uIHJlamVjdChjb2xsZWN0aW9uLCBmbikge1xuICBjb25zdCBbY29sLCBmdW5jXSA9IHBhcnNlRnVuY3Rpb25BcmdzKGNvbGxlY3Rpb24sIGZuKTtcbiAgcmV0dXJuIGZpbHRlcihjb2wsIGNvbXBsZW1lbnQoZnVuYykpO1xufVxuXG5leHBvcnQgeyBmaWx0ZXIsIHJlamVjdCB9O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG5cbmltcG9ydCB7IHByb3RvY29scyBhcyBwLCB0b1RyYW5zZHVjZXIgfSBmcm9tIFwiQGNoYW5rby94ZGNvcmVcIjtcbmltcG9ydCB7IHBhcnNlRnVuY3Rpb25BcmdzIH0gZnJvbSBcIm1vZHVsZXMvdXRpbHNcIjtcbmltcG9ydCB7IHNlcXVlbmNlLCBjb21wb3NlIH0gZnJvbSBcIm1vZHVsZXMvdHJhbnNkdWN0aW9uXCI7XG5pbXBvcnQgeyBmbGF0dGVuIH0gZnJvbSBcIm1vZHVsZXMvYmFzaWNcIjtcblxuZnVuY3Rpb24gbWFwKGNvbGxlY3Rpb24sIGZuKSB7XG4gIGNvbnN0IFtjb2wsIGZ1bmNdID0gcGFyc2VGdW5jdGlvbkFyZ3MoY29sbGVjdGlvbiwgZm4pO1xuICByZXR1cm4gY29sXG4gICAgPyBzZXF1ZW5jZShjb2wsIG1hcChmdW5jKSlcbiAgICA6IG5leHQgPT5cbiAgICAgICAgdG9UcmFuc2R1Y2VyKChhY2MsIHZhbHVlKSA9PiBuZXh0W3Auc3RlcF0oYWNjLCBmdW5jKHZhbHVlKSksIG5leHQpO1xufVxuXG5mdW5jdGlvbiBmbGF0TWFwKGNvbGxlY3Rpb24sIGZuKSB7XG4gIGNvbnN0IFtjb2wsIGZ1bmNdID0gcGFyc2VGdW5jdGlvbkFyZ3MoY29sbGVjdGlvbiwgZm4pO1xuICByZXR1cm4gY29sXG4gICAgPyBzZXF1ZW5jZShjb2wsIGNvbXBvc2UobWFwKGZ1bmMpLCBmbGF0dGVuKCkpKVxuICAgIDogY29tcG9zZShtYXAoZnVuYyksIGZsYXR0ZW4oKSk7XG59XG5cbmV4cG9ydCB7IG1hcCwgZmxhdE1hcCB9O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG5cbmltcG9ydCB7IHByb3RvY29scyBhcyBwLCB0b1RyYW5zZHVjZXIsIGVuc3VyZUNvbXBsZXRlZCB9IGZyb20gXCJAY2hhbmtvL3hkY29yZVwiO1xuaW1wb3J0IHsgcGFyc2VOdW1iZXJBcmdzLCBwYXJzZUZ1bmN0aW9uQXJncyB9IGZyb20gXCJtb2R1bGVzL3V0aWxzXCI7XG5pbXBvcnQgeyBzZXF1ZW5jZSB9IGZyb20gXCJtb2R1bGVzL3RyYW5zZHVjdGlvblwiO1xuXG5mdW5jdGlvbiB0YWtlKGNvbGxlY3Rpb24sIG4pIHtcbiAgY29uc3QgW2NvbCwgbnVtXSA9IHBhcnNlTnVtYmVyQXJncyhjb2xsZWN0aW9uLCBuKTtcbiAgcmV0dXJuIGNvbFxuICAgID8gc2VxdWVuY2UoY29sLCB0YWtlKG51bSkpXG4gICAgOiBuZXh0ID0+IHtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICByZXR1cm4gdG9UcmFuc2R1Y2VyKChhY2MsIHZhbHVlKSA9PiB7XG4gICAgICAgICAgbGV0IHJlc3VsdCA9IGFjYztcblxuICAgICAgICAgIGlmIChpIDwgbnVtKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBuZXh0W3Auc3RlcF0oYWNjLCB2YWx1ZSk7XG4gICAgICAgICAgICBpZiAoaSA9PT0gbnVtIC0gMSkge1xuICAgICAgICAgICAgICByZXN1bHQgPSBlbnN1cmVDb21wbGV0ZWQocmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaSsrO1xuICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0sIG5leHQpO1xuICAgICAgfTtcbn1cblxuZnVuY3Rpb24gdGFrZVdoaWxlKGNvbGxlY3Rpb24sIGZuKSB7XG4gIGNvbnN0IFtjb2wsIGZ1bmNdID0gcGFyc2VGdW5jdGlvbkFyZ3MoY29sbGVjdGlvbiwgZm4pO1xuICByZXR1cm4gY29sXG4gICAgPyBzZXF1ZW5jZShjb2wsIHRha2VXaGlsZShmdW5jKSlcbiAgICA6IG5leHQgPT5cbiAgICAgICAgdG9UcmFuc2R1Y2VyKFxuICAgICAgICAgIChhY2MsIHZhbHVlKSA9PlxuICAgICAgICAgICAgZnVuYyh2YWx1ZSkgPyBuZXh0W3Auc3RlcF0oYWNjLCB2YWx1ZSkgOiBlbnN1cmVDb21wbGV0ZWQoYWNjKSxcbiAgICAgICAgICBuZXh0XG4gICAgICAgICk7XG59XG5cbmZ1bmN0aW9uIHRha2VOdGgoY29sbGVjdGlvbiwgbikge1xuICBjb25zdCBbY29sLCBudW1dID0gcGFyc2VOdW1iZXJBcmdzKGNvbGxlY3Rpb24sIG4pO1xuICByZXR1cm4gY29sXG4gICAgPyBzZXF1ZW5jZShjb2wsIHRha2VOdGgobnVtKSlcbiAgICA6IG5leHQgPT4ge1xuICAgICAgICBsZXQgaSA9IC0xO1xuICAgICAgICByZXR1cm4gdG9UcmFuc2R1Y2VyKFxuICAgICAgICAgIChhY2MsIHZhbHVlKSA9PiAoKytpICUgbnVtID09PSAwID8gbmV4dFtwLnN0ZXBdKGFjYywgdmFsdWUpIDogYWNjKSxcbiAgICAgICAgICBuZXh0XG4gICAgICAgICk7XG4gICAgICB9O1xufVxuXG5leHBvcnQgeyB0YWtlLCB0YWtlV2hpbGUsIHRha2VOdGggfTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG4vKipcbiAqIEZ1bmN0aW9ucyBkZWFsaW5nIHdpdGggdGhlIGFjdHVhbCB0cmFuc2Zvcm1hdGlvbiBvZiB2YWx1ZXMgYW5kIGZvciBjaG9vc2luZ1xuICogdGhlIHJlZHVjZXIgZHVyaW5nIHRyYW5zZHVjdGlvbi5cbiAqXG4gKiBAbW9kdWxlIHhkdWNlL3RyYW5zZHVjdGlvblxuICogQHByaXZhdGVcbiAqL1xuXG5pbXBvcnQge1xuICBwcm90b2NvbHMgYXMgcCxcbiAgaXNJbXBsZW1lbnRlZCxcbiAgaXRlcmF0b3IsXG4gIGlzQ29tcGxldGVkLFxuICB0b1JlZHVjZXIgYXMgeGRjb3JlVG9SZWR1Y2VyLFxuICB0b0Z1bmN0aW9uIGFzIHhkY29yZVRvRnVuY3Rpb24sXG4gIHJlZHVjZSxcbiAgaXNGdW5jdGlvbixcbiAgaXNBcnJheSxcbiAgaXNPYmplY3QsXG4gIGlzU3RyaW5nLFxufSBmcm9tIFwiQGNoYW5rby94ZGNvcmVcIjtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGl0ZXJhdG9yIHRoYXQgaXMgYWxzbyBhIHRyYW5zZHVjZXIsIHRyYW5zZm9ybWluZyBpdHMgY29sbGVjdGlvblxuICogb25lIGVsZW1lbnQgYXQgYSB0aW1lLiBUaGlzIGlzIHRoZSBhY3R1YWwgb3V0cHV0IG9mIHRoZVxuICoge0BsaW5rIG1vZHVsZTp4ZHVjZS5hc0l0ZXJhdG9yfGFzSXRlcmF0b3J9IGZ1bmN0aW9uLCBhcyB3ZWxsIGFzIHRoZSBvdXRwdXQgb2ZcbiAqIHRoZSB7QGxpbmsgbW9kdWxlOnhkdWNlLnNlcXVlbmNlfHNlcXVlbmNlfSBmdW5jdGlvbiB3aGVuIHRoZSBpbnB1dCBpcyBhblxuICogaXRlcmF0b3IuXG4gKlxuICogVGhlIGVuZCB1c2VyIG5lZWQgbm90IGJlIGNvbmNlcm5lZCB3aXRoIHRoZSB0eXBlIG9mIHRoZSBvdXRwdXQgaXRlcmF0b3IgaW5cbiAqIHRoZXNlIGNpcmN1bXN0YW5jZXM7IHRoZSBlbmQgdXNlciBuZWVkIG9ubHkgY2FyZSB0aGF0IHRoZSBvdXRwdXQgaXMsIGluIGZhY3QsXG4gKiBhbiBpdGVyYXRvciBhbmQgY2FuIGJlIGV4cGVjdGVkIHRvIGFjdCBsaWtlIG9uZS4gRm9yIHRoaXMgcmVhc29uLCB0aGlzXG4gKiBmdW5jdGlvbiBhbmQgdGhlIHR5cGUgaXQgcmV0dXJucyBhcmUgbm90IGV4cG9ydGVkLlxuICpcbiAqIFRoaXMgb2JqZWN0IHN1cHBvcnRzIG5vbi0xLXRvLTEgY29ycmVzcG9uZGVuY2VzIGJldHdlZW4gaW5wdXQgYW5kIG91dHB1dFxuICogdmFsdWVzLiBGb3IgZXhhbXBsZSwgYSBmaWx0ZXIgdHJhbnNmb3JtYXRpb24gbWlnaHQgcmV0dXJuIGZld2VyIG91dHB1dFxuICogZWxlbWVudHMgdGhhbiB3ZXJlIGluIHRoZSBpbnB1dCBjb2xsZWN0aW9uLCB3aGlsZSBhIHJlcGVhdCB0cmFuc2Zvcm1hdGlvblxuICogd2lsbCByZXR1cm4gbW9yZS4gSW4gZWl0aGVyIGNhc2UsIGBuZXh0YCBpbiB0aGlzIGNsYXNzIHdpbGwgcmV0dXJuIG9uZVxuICogZWxlbWVudCBwZXIgY2FsbC5cbiAqXG4gKiBAcGFyYW0ge2V4dGVybmFsOkl0ZXJhYmxlfSBjb2xsZWN0aW9uIHRoZSBpbnB1dCBjb2xsZWN0aW9uIHRoYXQgdGhlIHByb2R1Y2VkXG4gKiAgICAgaXRlcmF0b3Igd2lsbCBiZSBpdGVyYXRpbmcgb3Zlci5cbiAqIEBwYXJhbSB7bW9kdWxlOnhkY29yZS5UcmFuc2R1Y2VyRnVuY3Rpb259IHRyYW5zZHVjZXJGbiBBIGZ1bmN0aW9uIHRoYXRcbiAqICAgICBjcmVhdGVzIGEgdHJhbnNkdWNlciBvYmplY3QgdGhhdCBkZWZpbmVzIHRoZSB0cmFuc2Zvcm1hdGlvbiBiZWluZyBkb25lIHRvXG4gKiAgICAgdGhlIGl0ZXJhdG9yJ3MgZWxlbWVudHMuIEFueSBvZiB0aGUgdHJhbnNkdWNlcnMgaW4gdGhlXG4gKiAgICAge0BsaW5rIG1vZHVsZTp4ZHVjZXx4ZHVjZX0gbW9kdWxlIGNhbiBwcm9kdWNlIGEgc3VpdGFibGUgdHJhbnNkdWNlclxuICogICAgIGZ1bmN0aW9uLlxuICogQHJldHVybnMge2V4dGVybmFsOkl0ZXJhdG9yfSBBbiBpdGVyYXRvciB0aGF0IHdpbGwgdHJhbnNmb3JtIGl0cyBpbnB1dFxuICogICAgIGVsZW1lbnRzIHVzaW5nIHRoZSB0cmFuc2R1Y2VyIGZ1bmN0aW9uIGFzIGl0cyBgbmV4dCgpYCBmdW5jdGlvbiBpc1xuICogICAgIGNhbGxlZC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHRyYW5zZHVjaW5nSXRlcmF0b3IoY29sbGVjdGlvbiwgdHJhbnNkdWNlckZuKSB7XG4gIGNvbnN0IHN0ZXBSZWR1Y2VyID0ge1xuICAgIFtwLnN0ZXBdKHhpdGVyLCBpbnB1dCkge1xuICAgICAgeGl0ZXIuaXRlbXMudW5zaGlmdChpbnB1dCk7XG4gICAgICByZXR1cm4geGl0ZXI7XG4gICAgfSxcbiAgICBbcC5maW5hbF0odmFsdWUpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9LFxuICB9O1xuXG4gIGNvbnN0IGl0ZXIgPSBpdGVyYXRvcihjb2xsZWN0aW9uKTtcbiAgY29uc3QgdHJhbnNkdWNlciA9IHRyYW5zZHVjZXJGbihzdGVwUmVkdWNlcik7XG4gIGxldCBjb21wbGV0ZWQgPSBmYWxzZTtcblxuICAvLyBUaGlzIGFycmF5IGlzIHRoZSBrZXkgdG8gd29ya2luZyBwcm9wZXJseSB3aXRoIHN0ZXAgZnVuY3Rpb25zIHRoYXQgcmV0dXJuXG4gIC8vIG1vcmUgdGhhbiBvbmUgdmFsdWUuIEFsbCBvZiB0aGVtIGFyZSBwdXQgaW50byB0aGUgaXRlbXMgYXJyYXkuIEFzIGxvbmcgYXNcbiAgLy8gdGhpcyBhcnJheSBoYXMgdmFsdWVzIGluIGl0LCB0aGUgYG5leHRgIGZ1bmN0aW9uIHdpbGwgcmV0dXJuIG9uZSB2YWx1ZVxuICAvLyBwb3BwZWQgZnJvbSBpdCByYXRoZXIgdGhhbiBydW5uaW5nIHRoZSBzdGVwIGZ1bmN0aW9uIGFnYWluLlxuICBjb25zdCBpdGVtcyA9IFtdO1xuXG4gIC8vIFRoZSBgbmV4dGAgZnVuY3Rpb24gaGVyZSBpcyByYXRoZXIgc2ltcGxlLiBJZiB0aGVyZSBpcyBhbHJlYWR5IHNvbWV0aGluZyBpblxuICAvLyB0aGUgYGl0ZW1zYCBhcnJheSwgaXQncyByZXR1cm5lZC4gSWYgbm90LCB0aGUgYHN0ZXBgIGZ1bmN0aW9uIGlzIHJ1biBhbmQsXG4gIC8vIGlmIHRoYXQgcmVzdWx0cyBpbiBhIHZhbHVlIGluIHRoZSBgaXRlbXNgIGFycmF5LCBpdCdzIHJldHVybmVkLiBPdGhlcndpc2VcbiAgLy8gYW4gb2JqZWN0IHdpdGggYHsgZG9uZTogdHJ1ZSB9YCBpcyByZXR1cm5lZC5cbiAgZnVuY3Rpb24gbmV4dCgpIHtcbiAgICBpZiAoaXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICBzdGVwKCk7XG4gICAgfVxuICAgIGlmIChpdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB7IGRvbmU6IHRydWUgfTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiBpdGVtcy5wb3AoKSxcbiAgICAgIGRvbmU6IGZhbHNlLFxuICAgIH07XG4gIH1cblxuICAvLyBUaGlzIGlzIHdoZXJlIG1vc3Qgb2YgdGhlIHdvcmsgaGFwcGVucy4gSXQgZ2V0cyB0aGUgbmV4dCB2YWx1ZSBmcm9tIHRoZVxuICAvLyBpbnB1dCBjb2xsZWN0aW9uIGFuZCBydW5zIGl0IHRocm91Z2ggdGhlIHJlZHVjdGlvbiBzdGVwIGZ1bmN0aW9ucy4gSWYgdGhhdFxuICAvLyByZXN1bHRzIGluIGEgdmFsdWUsIGl0J3MgZ2l2ZW4gdG8gdGhlIHN0ZXBwZXIgb2JqZWN0ICh3aGljaCBhZGRzIGl0IHRvIHRoZVxuICAvLyBgaXRlbXNgIGFycmF5KTsgb3RoZXJ3aXNlIHRoZSB3aGlsZSBsb29wIGNvbnRpbnVlcyB0byB0aGUgbmV4dCBlbGVtZW50IG9mXG4gIC8vIHRoZSBpbnB1dCBjb2xsZWN0aW9uLiBUaGlzIGVuc3VyZXMgdGhhdCB0aGVyZSdzIHNvbWV0aGluZyBmb3IgdGhlIGBuZXh0YFxuICAvLyBmdW5jdGlvbiB0byByZXR1cm4gZWFjaCB0aW1lIGl0J3MgY2FsbGVkLlxuICAvL1xuICAvLyBJZiB0aGUgY29sbGVjdGlvbiBoYXMgZmluaXNoZWQgb3IgaWYgdGhlIHN0ZXAgZnVuY3Rpb24gcmV0dXJucyBhIGNvbXBsZXRlZFxuICAvLyBvYmplY3QgKHdoaWNoIHRha2Ugd2lsbCBkbyBhZnRlciBpdHMgbGltaXQgb2YgZWxlbWVudHMgaGFzIGJlZW4gcmVhY2hlZCxcbiAgLy8gZm9yIGluc3RhbmNlKSwgdGhlIGl0ZXJhdGlvbiBpcyBmaW5pc2hlZCBieSBjYWxsaW5nIHRoZSByZXN1bHQgZnVuY3Rpb24uXG4gIGZ1bmN0aW9uIHN0ZXAoKSB7XG4gICAgY29uc3QgY291bnQgPSBpdGVtcy5sZW5ndGg7XG4gICAgd2hpbGUgKGl0ZW1zLmxlbmd0aCA9PT0gY291bnQpIHtcbiAgICAgIGNvbnN0IHN0ZXBWYWx1ZSA9IGl0ZXIubmV4dCgpO1xuICAgICAgaWYgKHN0ZXBWYWx1ZS5kb25lIHx8IGNvbXBsZXRlZCkge1xuICAgICAgICB0cmFuc2R1Y2VyW3AuZmluYWxdKHJlc3VsdCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY29tcGxldGVkID0gaXNDb21wbGV0ZWQodHJhbnNkdWNlcltwLnN0ZXBdKHJlc3VsdCwgc3RlcFZhbHVlLnZhbHVlKSk7XG4gICAgfVxuICB9XG5cbiAgLy8gVGhlIGByZXN1bHRgIG5hbWUgaXMgaG9pc3RlZCBhbmQgdXNlZCBpbiBmdW5jdGlvbnMgZnVydGhlciB1cCwgc28gd2UgaGF2ZVxuICAvLyB0byByZXRhaW4gdGhhdCBuYW1lIGFuZCBjYW4ndCBqdXN0IHJldHVybiB0aGUgb2JqZWN0IHdpdGhvdXQgbmFtaW5nIGl0XG4gIGNvbnN0IHJlc3VsdCA9IHsgaXRlbXMsIG5leHQsIHN0ZXAgfTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBUcmFuc2Zvcm1zIHRoZSBlbGVtZW50cyBvZiB0aGUgaW5wdXQgY29sbGVjdGlvbiBhbmQgcmVkdWNlcyB0aGVtIGludG8gYW5cbiAqIG91dHB1dCBjb2xsZWN0aW9uLlxuICpcbiAqIFRoaXMgaXMgdGhlIGxvd2VzdC1sZXZlbCBvZiB0aGUgdHJhbnNkdWN0aW9uIGZ1bmN0aW9ucyB0aGF0IGlzIGxpa2VseSB0byBzZWVcbiAqIHJlZ3VsYXIgdXNlLiBJdCBkb2VzIG5vdCBhc3N1bWUgYW55dGhpbmcgYWJvdXQgdGhlIHJlZHVjZXIsIGFzIGl0IGFza3MgZm9yIGl0XG4gKiB0byBiZSBwYXNzZWQgZXhwbGljaXRseS4gVGhpcyBtZWFucyB0aGF0IGFueSBraW5kIG9mIGNvbGxlY3Rpb24gY2FuIGJlXG4gKiBwcm9kdWNlZCwgc2luY2UgdGhlIHJlZHVjZXIgaXMgbm90IHRpZWQgdG8gdGhlIGlucHV0IGNvbGxlY3Rpb24gaW4gYW55IHdheS5cbiAqXG4gKiBgdHJhbnNkdWNlYCBhbHNvIHdpbGwgYWNjZXB0IGFuIGluaXRpYWwgdmFsdWUgZm9yIHRoZSByZXN1bHRpbmcgY29sbGVjdGlvbiBhc1xuICogdGhlIG9wdGlvbmFsIGxhc3QgcGFyYW1ldGVyLiBJZiB0aGlzIHBhcmFtZXRlciBpc24ndCBwcmVzZW50LCB0aGVuIHRoZVxuICogaW5pdGlhbCB2YWx1ZSBpcyBkZXRlcm1pbmVkIGZyb20gdGhlIHJlZHVjZXIgYGluaXRgIHByb3RvY29sIHByb3BlcnR5IG9uIHRoZVxuICogcmVkdWNlci4gTm90ZSBob3dldmVyIHRoYXQgbWFueSByZWR1Y2VycyBtYXkgbm90IHByb3ZpZGUgYW4gaW5pdGlhbCB2YWx1ZSxcbiAqIGFuZCBpbiB0aG9zZSBjYXNlcyBpdCB3aWxsICpoYXZlKiB0byBiZSBwYXNzZWQgYXMgYSBwYXJhbWV0ZXIuXG4gKlxuICogYGBgXG4gKiBpbXBvcnQgeyBtYXAsIHRyYW5zZHVjZSwgdG9SZWR1Y2VyIH0gZnJvbSBcIkBjaGFua28veGR1Y2VcIjtcbiAqXG4gKiBjb25zdCB0cmFuc2R1Y2VyRm4gPSBtYXAoeCA9PiB4ICsgMSk7XG4gKlxuICogY29uc3QgYXJyYXlSZWR1Y2VyID0gdG9SZWR1Y2VyKFtdKTtcbiAqIGNvbnN0IHN0cmluZ1JlZHVjZXIgPSB0b1JlZHVjZXIoXCJcIik7XG4gKlxuICogbGV0IHJlc3VsdCA9IHRyYW5zZHVjZShbMSwgMiwgMywgNCwgNV0sIHRyYW5zZHVjZXJGbiwgYXJyYXlSZWR1Y2VyKTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdCk7ICAgLy8gLT4gWzIsIDMsIDQsIDUsIDZdXG4gKlxuICogcmVzdWx0ID0gdHJhbnNkdWNlKFsxLCAyLCAzLCA0LCA1XSwgdHJhbnNkdWNlckZuLCBzdHJpbmdSZWR1Y2VyKTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdCk7ICAgLy8gLT4gXCIyMzQ1NlwiXG4gKlxuICogcmVzdWx0ID0gdHJhbnNkdWNlKCcxMjM0NScsIHRyYW5zZHVjZXJGbiwgYXJyYXlSZWR1Y2VyKTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdCk7ICAgLy8gLT4gWzIsIDMsIDQsIDUsIDZdXG4gKlxuICogcmVzdWx0ID0gdHJhbnNkdWNlKCcxMjM0NScsIHRyYW5zZHVjZXJGbiwgc3RyaW5nUmVkdWNlcik7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQpOyAgIC8vIC0+IFwiMjM0NTZcIlxuICogYGBgXG4gKlxuICogVGhlc2UgZXhhbXBsZXMgaWxsdXN0cmF0ZSBhIG51bWJlciBvZiBpbXBvcnRhbnQgY29uY2VwdHMuIEZpcnN0IG9mIGFsbCwgdGhlXG4gKiB0cmFuc2R1Y2VyIGZ1bmN0aW9uIGlzIGluZGVwZW5kZW50IG9mIHRoZSB0eXBlIG9mIHRoZSBjb2xsZWN0aW9uOyB0aGUgc2FtZVxuICogdHJhbnNkdWNlciBmdW5jdGlvbiBpcyB1c2VkIG5vIG1hdHRlciB0aGUgdHlwZSBvZiBpbnB1dCBvciBvdXRwdXRcbiAqIGNvbGxlY3Rpb25zLiBTZWNvbmRseSwgdHdvIHJlZHVjZXJzIGFyZSBkZWZpbmVkLiBUaGVzZSBhcmUgb2JqZWN0cyB0aGF0XG4gKiBjb25mb3JtIHRvIHRoZSByZWR1Y2VyIHByb3RvY29sIGFuZCB0aGF0IGtub3cgaG93IHRvIHByb2R1Y2UgdGhlIG91dHB1dFxuICogY29sbGVjdGlvbiBvZiBjaG9pY2UuIEluIHRoaXMgY2FzZSwgdGhlIHJlZHVjZXJzIGFyZSBwcm9kdWNlZCBieSB0aGVcbiAqIGB7QGxpbmsgbW9kdWxlOnhkY29yZS50b1JlZHVjZXJ8dG9SZWR1Y2VyfSBgZnVuY3Rpb24gdGhhdCB0aGlzIG1vZHVsZVxuICogcmUtZXhwb3J0cyBmcm9tIHRoZSB7QGxpbmsgbW9kdWxlOnhkY29yZXx4ZGNvcmV9IG1vZHVsZS4gQmVjYXVzZSB0aGVzZVxuICogcmVkdWNlcnMgZG8gaGF2ZSBgaW5pdGAgcHJvdG9jb2wgcHJvcGVydGllcywgdGhlIGB0cmFuc2R1Y2VgIGNhbGxzIGRvIG5vdFxuICogcmVxdWlyZSBleHBsaWNpdCBpbml0aWFsIGNvbGxlY3Rpb25zLlxuICpcbiAqIFRoZSBmaW5hbCBwb2ludCBpcyB0aGF0IGB0cmFuc2R1Y2VgIGNhbiBhY2NlcHQgYW55IGtpbmQgb2YgaXRlcmFibGVcbiAqIGNvbGxlY3Rpb24sIGFuZCBieSBwYXNzaW5nIGluIHRoZSBwcm9wZXIgcmVkdWNlciwgaXQgY2FuIHByb2R1Y2UgYW55IGtpbmQgb2ZcbiAqIG91dHB1dCBjb2xsZWN0aW9uLiBUaGUgc2FtZSBgdHJhbnNkdWNlYCBmdW5jdGlvbiBhbmQgdGhlIHNhbWUgbWFwIHRyYW5zZm9ybWVyXG4gKiBpcyB1c2VkIGluIGFsbCBmb3VyIGV4YW1wbGVzLCBkZXNwaXRlIHRoZSBpbnB1dC9vdXRwdXQgY29tYmluYXRpb24gYmVpbmdcbiAqIGRpZmZlcmVudCBpbiBhbGwgZm91ci5cbiAqXG4gKiBUaGUgYHJlZHVjZXJgIHBhcmFtZXRlciAqY2FuKiBiZSBhIHJlZHVjZXIgZnVuY3Rpb24gaW5zdGVhZCBvZiBhIHJlZHVjZXJcbiAqIG9iamVjdC4gSWYgdGhpcyBpcyB0aGUgY2FzZSwgdGhlIGBpbml0YCBwYXJhbWV0ZXIgaXMgcmVxdWlyZWQgYmVjYXVzZSBhXG4gKiBmdW5jdGlvbiBjYW5ub3QgZGVmaW5lIGFuIGluaXRpYWwgdmFsdWUgaXRzZWxmLlxuICpcbiAqIFRoZSBgaW5pdGAgY29sbGVjdGlvbiBkb2Vzbid0IGhhdmUgdG8gYmUgZW1wdHkuIElmIGl0IGlzbid0LCB0aGUgZWxlbWVudHNcbiAqIHRoYXQgYXJlIGFscmVhZHkgaW4gaXQgYXJlIHJldGFpbmVkIGFuZCB0aGUgdHJhbnNmb3JtZWQgaW5wdXQgZWxlbWVudHMgYXJlXG4gKiByZWR1Y2VkIGludG8gdGhlIGNvbGxlY3Rpb24gbm9ybWFsbHkuXG4gKlxuICogT2YgY291cnNlLCB0aGUgZXhhbXBsZXMgYXJlIG5vdCByZWFsbHkgbmVjZXNzYXJ5IC0gdGhlIHNhbWUgdGhpbmcgY291bGQgYmVcbiAqIGFjY29tcGxpc2hlZCB1c2luZyBge0BsaW5rIG1vZHVsZTp4ZHVjZS5pbnRvfGludG99YCB3aXRob3V0IGhhdmluZyB0byBjcmVhdGVcbiAqIHRoZSByZWR1Y2VycyAoc3RyaW5ncyBhbmQgYXJyYXlzIHBhc3NlZCB0byBge0BsaW5rIG1vZHVsZTp4ZHVjZS5pbnRvfGludG99YFxuICogYXMgdGFyZ2V0cyBrbm93IGhvdyB0byByZWR1Y2UgdGhlbXNlbHZlcyBhbHJlYWR5KS5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcGFyYW0geyhvYmplY3R8ZnVuY3Rpb258ZXh0ZXJuYWw6SXRlcmFibGUpfSBjb2xsZWN0aW9uIFRoZSBpbnB1dCBjb2xsZWN0aW9uLlxuICogICAgIFRoZSBvbmx5IHJlcXVpcmVtZW50IG9mIHRoaXMgY29sbGVjdGlvbiBpcyB0aGF0IGl0IGltcGxlbWVudCB0aGVcbiAqICAgICBgaXRlcmFibGVgIHByb3RvY29sLiBTcGVjaWFsIHN1cHBvcnQgaXMgcHJvdmlkZWQgYnkgdGhlIGxpYnJhcnkgZm9yXG4gKiAgICAgZnVuY3Rpb25zIGFuZCBwbGFpbiBvYmplY3RzLCBzbyB0aGV5IGNhbiBhbHNvIGJlIHVzZWQuXG4gKiBAcGFyYW0ge21vZHVsZTp4ZGNvcmUuVHJhbnNkdWNlckZ1bmN0aW9ufSB0cmFuc2R1Y2VyRm4gQSBmdW5jdGlvbiB0aGF0XG4gKiAgICAgY3JlYXRlcyBhIHRyYW5zZHVjZXIgb2JqZWN0IHRoYXQgZGVmaW5lcyB0aGUgdHJhbnNmb3JtYXRpb24gYmVpbmcgZG9uZSB0b1xuICogICAgIHRoZSBpbnB1dCBjb2xsZWN0aW9uJ3MgZWxlbWVudHMuIEFueSBvZiB0aGUgdHJhbnNkdWNlcnMgaW4gdGhpcyBtb2R1bGVcbiAqICAgICBjYW4gcHJvZHVjZSBhIHN1aXRhYmxlIHRyYW5zZHVjZXIgZnVuY3Rpb24uXG4gKiBAcGFyYW0geyhtb2R1bGU6eGRjb3JlLlN0ZXBGdW5jdGlvbnxtb2R1bGU6eGRjb3JlLlJlZHVjZXJPYmplY3QpfSByZWR1Y2VyXG4gKiAgICAgRWl0aGVyIGEgZnVuY3Rpb24gb3IgYSByZWR1Y2VyIG9iamVjdCB0aGF0IGltcGxlbWVudHMgdGhlIHRyYW5zZHVjZXJcbiAqICAgICBwcm90b2NvbHMgKGBpbml0YCBpcyAgb25seSByZXF1aXJlZCBpZiB0aGUgYGluaXRgIHBhcmFtZXRlciBpcyBub3RcbiAqICAgICBwcmVzZW50KS4gVGhpcyBvYmplY3QgbXVzdCBrbm93IGhvdyB0byBwcm9kdWNlIGFuIG91dHB1dCB2YWx1ZSB0aHJvdWdoXG4gKiAgICAgaXRzIGBzdGVwYCBhbmQgYHJlc3VsdGAgcHJvdG9jb2wgZnVuY3Rpb25zLiBJZiB0aGlzIHBhcmFtZXRlciBpcyBhXG4gKiAgICAgZnVuY3Rpb24sIHRoZW4gaXQgaXMgdHVybmVkIGludG8gYSB2YWxpZCByZWR1Y2VyIG9iamVjdC5cbiAqIEBwYXJhbSB7Kn0gW2luaXRdIEEgdmFsdWUgb2YgdGhlIHNhbWUgdHlwZSBhcyB0aGUgb3V0cHV0IHZhbHVlLiBJZiB0aGlzIGlzXG4gKiAgICAgbm90IHByZXNlbnQsIHRoZW4gdGhlIHJlZHVjZXIncyBgaW5pdGAgcHJvdG9jb2wgZnVuY3Rpb24gaXMgY2FsbGVkXG4gKiAgICAgaW5zdGVhZCB0byBnZXQgdGhlIGluaXRpYWwgY29sbGVjdGlvbi4gSWYgaXQgaXMgcHJlc2VudCBhbmQgbm90IGVtcHR5LFxuICogICAgIHRoZW4gdGhlIGV4aXN0aW5nIGVsZW1lbnRzIHJlbWFpbiBhbmQgdGhlIHRyYW5zZm9ybWVkIGlucHV0IGNvbGxlY3Rpb25cbiAqICAgICBlbGVtZW50cyBhcmUgYWRkZWQgdG8gaXQuXG4gKiBAcmV0dXJucyB7Kn0gQSB2YWx1ZSBvZiBhIHR5cGUgZGV0ZXJtaW5lZCBieSB0aGUgcGFzc2VkIHJlZHVjZXIuIFRoaXMgaXNcbiAqICAgICB1c3VhbGx5IGEgY29sbGVjdGlvbiwgYnV0IGlmIHRoZSByZWR1Y2VyIHByb2R1Y2VzIGEgc2NhbGFyIHZhbHVlLCB0aGVuXG4gKiAgICAgdGhpcyB3aWxsIGJlIGEgc2NhbGFyIHZhbHVlIG9mIHRoYXQgdHlwZS5cbiAqL1xuZnVuY3Rpb24gdHJhbnNkdWNlKGNvbGxlY3Rpb24sIHRyYW5zZHVjZXJGbiwgcmVkdWNlciwgaW5pdCkge1xuICBjb25zdCByID0gaXNGdW5jdGlvbihyZWR1Y2VyKSA/IHRvUmVkdWNlcihyZWR1Y2VyKSA6IHJlZHVjZXI7XG4gIGNvbnN0IGkgPSBpbml0ID8/IHJbcC5pbml0XSgpO1xuICBjb25zdCB0cmFuc2R1Y2VyID0gdHJhbnNkdWNlckZuID8gdHJhbnNkdWNlckZuKHIpIDogcjtcbiAgcmV0dXJuIHJlZHVjZShjb2xsZWN0aW9uLCB0cmFuc2R1Y2VyLCBpKTtcbn1cblxuLyoqXG4gKiBUcmFuc2Zvcm1zIHRoZSBlbGVtZW50cyBvZiB0aGUgaW5wdXQgY29sbGVjdGlvbiBhbmQgcmVkdWNlcyB0aGVtIGludG8gYSBuZXdcbiAqIGFycmF5LlxuICpcbiAqIFRoZSB0cmFuc2R1Y2VyIGZ1bmN0aW9uIGlzIG9wdGlvbmFsLiBJZiBpdCBpc24ndCBwcmVzZW50LCB0aGlzIGZ1bmN0aW9uIGp1c3RcbiAqIGNvbnZlcnRzIHRoZSBpbnB1dCBjb2xsZWN0aW9uIGludG8gYW4gYXJyYXkuXG4gKlxuICogYGBgXG4gKiBpbXBvcnQgeyBhc0FycmF5LCBtYXAgfSBmcm9tIFwiQGNoYW5rby94ZHVjZVwiO1xuICpcbiAqIGNvbnN0IHRyYW5zZHVjZXJGbiA9IG1hcCh4ID0+IHggKyAxKTtcbiAqXG4gKiBsZXQgcmVzdWx0ID0gYXNBcnJheShbMSwgMiwgMywgNCwgNV0sIHRyYW5zZHVjZXJGbik7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQpOyAgIC8vIC0+IFsyLCAzLCA0LCA1LCA2XVxuICpcbiAqIHJlc3VsdCA9IGFzQXJyYXkoJzEyMzQ1JywgdHJhbnNkdWNlckZuKTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdCk7ICAgLy8gLT4gWzIsIDMsIDQsIDUsIDZdXG4gKlxuICogcmVzdWx0ID0gYXNBcnJheSgnMTIzNDUnKTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdCk7ICAgLy8gLT4gWzEsIDIsIDMsIDQsIDVdXG4gKlxuICogcmVzdWx0ID0gYXNBcnJheSh7YTogMSwgYjogMn0pO1xuICogY29uc29sZS5sb2cocmVzdWx0KTsgICAvLyAtPiBbeyBhOiAxIH0sIHsgYjogMiB9XVxuICogYGBgXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHBhcmFtIHsob2JqZWN0fGZ1bmN0aW9ufGV4dGVybmFsOkl0ZXJhYmxlKX0gY29sbGVjdGlvbiBUaGUgaW5wdXQgY29sbGVjdGlvbi5cbiAqICAgICBUaGUgb25seSByZXF1aXJlbWVudCBvZiB0aGlzIGNvbGxlY3Rpb24gaXMgdGhhdCBpdCBpbXBsZW1lbnQgdGhlXG4gKiAgICAgYGl0ZXJhYmxlYCBwcm90b2NvbC4gU3BlY2lhbCBzdXBwb3J0IGlzIHByb3ZpZGVkIGJ5IHRoZSBsaWJyYXJ5IGZvclxuICogICAgIGZ1bmN0aW9ucyBhbmQgb2JqZWN0cywgc28gdGhleSBjYW4gYWxzbyBiZSB1c2VkLlxuICogQHBhcmFtIHttb2R1bGU6eGRjb3JlLlRyYW5zZHVjZXJGdW5jdGlvbn0gW3RyYW5zZHVjZXJGbl0gQSBmdW5jdGlvbiB0aGF0XG4gKiAgICAgY3JlYXRlcyBhIHRyYW5zZHVjZXIgb2JqZWN0IHRoYXQgZGVmaW5lcyB0aGUgdHJhbnNmb3JtYXRpb24gYmVpbmcgZG9uZSB0b1xuICogICAgIHRoZSBpbnB1dCBjb2xsZWN0aW9uJ3MgZWxlbWVudHMuIEFueSBvZiB0aGUgdHJhbnNkdWNlcnMgaW4gdGhpcyBtb2R1bGVcbiAqICAgICBjYW4gcHJvZHVjZSBhIHN1aXRhYmxlIHRyYW5zZHVjZXIgZnVuY3Rpb24uIElmIHRoaXMgaXNuJ3QgcHJlc2VudCwgdGhlXG4gKiAgICAgaW5wdXQgY29sbGVjdGlvbiB3aWxsIHNpbXBseSBiZSByZWR1Y2VkIGludG8gYW4gYXJyYXkgd2l0aG91dFxuICogICAgIHRyYW5zZm9ybWF0aW9uLlxuICogQHJldHVybnMge2FycmF5fSBBbiBhcnJheSBjb250YWluaW5nIGFsbCBvZiB0aGUgdHJhbnNmb3JtZWQgdmFsdWVzIGZyb20gdGhlXG4gKiAgICAgaW5wdXQgY29sbGVjdGlvbiBlbGVtZW50cy5cbiAqL1xuZnVuY3Rpb24gYXNBcnJheShjb2xsZWN0aW9uLCB0cmFuc2R1Y2VyRm4pIHtcbiAgcmV0dXJuIHRyYW5zZHVjZShjb2xsZWN0aW9uLCB0cmFuc2R1Y2VyRm4sIHRvUmVkdWNlcihbXSkpO1xufVxuXG4vKipcbiAqIFRyYW5zZm9ybXMgdGhlIGVsZW1lbnRzIG9mIHRoZSBpbnB1dCBjb2xsZWN0aW9uIGFuZCByZWR1Y2VzIHRoZW0gaW50byBhIG5ld1xuICogb2JqZWN0LlxuICpcbiAqIFRoZSB0cmFuc2R1Y2VyIGZ1bmN0aW9uIGlzIG9wdGlvbmFsLiBJZiBpdCBpc24ndCBwcmVzZW50LCB0aGlzIGZ1bmN0aW9uIGp1c3RcbiAqIGNvbnZlcnRzIHRoZSBpbnB1dCBjb2xsZWN0aW9uIGludG8gYW4gb2JqZWN0LiBXaGVuIHRoaXMgaGFwcGVucywgaWYgdGhlIGlucHV0XG4gKiBjb2xsZWN0aW9uIGlzIG5vdCBhbiBvYmplY3Qgb3IgYW4gYXJyYXkgb2Ygb2JqZWN0cywgbnVtYmVycyBzdGFydGluZyBhdCBgMGBcbiAqIHdpbGwgYmUgdXNlZCBhcyBrZXlzIGZvciB0aGUgdmFsdWVzIHByb3ZpZGVkIGJ5IHRoZSBpbnB1dCBjb2xsZWN0aW9uLlxuICpcbiAqIGBgYFxuICogaW1wb3J0IHsgYXNPYmplY3QsIGt2LCBtYXAgfSBmcm9tIFwiQGNoYW5rby94ZHVjZVwiO1xuICpcbiAqIGNvbnN0IGZuID0gcHJvcCA9PiB7XG4gKiAgIGNvbnN0IHsgaywgdiB9ID0ga3YocHJvcCk7XG4gKiAgIHJldHVybiB7IFtrXTogdiArIDEgfTtcbiAqIH1cbiAqIGNvbnN0IHRyYW5zZHVjZXJGbiA9IG1hcChmbik7XG4gKlxuICogbGV0IHJlc3VsdCA9IGFzT2JqZWN0KHsgYTogMSwgYjogMiB9LCB0cmFuc2R1Y2VyRm4pO1xuICogY29uc29sZS5sb2cocmVzdWx0KTsgICAvLyAtPiB7IGE6IDIsIGI6IDMgfVxuICpcbiAqIHJlc3VsdCA9IGFzT2JqZWN0KFt7IGE6IDEgfSwgeyBiOiAyIH1dLCB0cmFuc2R1Y2VyRm4pO1xuICogY29uc29sZS5sb2cocmVzdWx0KTsgICAvLyAtPiB7IGE6IDIsIGI6IDMgfVxuICpcbiAqIHJlc3VsdCA9IGFzT2JqZWN0KFsxLCAyLCAzLCA0LCA1XSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQpOyAgIC8vIC0+IHsgMDogMSwgMTogMiwgMjogMywgMzogNCwgNDogNSB9XG4gKlxuICogcmVzdWx0ID0gYXNPYmplY3QoW3sgYTogMSB9LCB7IGI6IDIgfV0pO1xuICogY29uc29sZS5sb2cocmVzdWx0KTsgICAvLyAtPiB7IGE6IDEsIGI6IDIgfVxuICpcbiAqIHJlc3VsdCA9IGFzT2JqZWN0KFwiaGVsbG9cIik7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQpOyAgIC8vIC0+IHsgMDogXCJoXCIsIDE6IFwiZVwiLCAyOiBcImxcIiwgMzogXCJsXCIsIDQ6IFwib1wiIH1cbiAqIGBgYFxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwYXJhbSB7KG9iamVjdHxmdW5jdGlvbnxleHRlcm5hbDpJdGVyYWJsZSl9IGNvbGxlY3Rpb24gVGhlIGlucHV0IGNvbGxlY3Rpb24uXG4gKiAgICAgVGhlIG9ubHkgcmVxdWlyZW1lbnQgb2YgdGhpcyBjb2xsZWN0aW9uIGlzIHRoYXQgaXQgaW1wbGVtZW50IHRoZVxuICogICAgIGBpdGVyYWJsZWAgcHJvdG9jb2wuIFNwZWNpYWwgc3VwcG9ydCBpcyBwcm92aWRlZCBieSB0aGUgbGlicmFyeSBmb3JcbiAqICAgICBmdW5jdGlvbnMgYW5kIG9iamVjdHMsIHNvIHRoZXkgY2FuIGFsc28gYmUgdXNlZC5cbiAqIEBwYXJhbSB7bW9kdWxlOnhkY29yZS5UcmFuc2R1Y2VyRnVuY3Rpb259IFt0cmFuc2R1Y2VyRm5dIEEgZnVuY3Rpb24gdGhhdFxuICogICAgIGNyZWF0ZXMgYSB0cmFuc2R1Y2VyIG9iamVjdCB0aGF0IGRlZmluZXMgdGhlIHRyYW5zZm9ybWF0aW9uIGJlaW5nIGRvbmUgdG9cbiAqICAgICB0aGUgaW5wdXQgY29sbGVjdGlvbidzIGVsZW1lbnRzLiBBbnkgb2YgdGhlIHRyYW5zZHVjZXJzIGluIHRoaXNcbiAqICAgICBtb2R1bGUgY2FuIHByb2R1Y2UgYSBzdWl0YWJsZSB0cmFuc2R1Y2VyIGZ1bmN0aW9uLiBJZiB0aGlzIGlzbid0IHByZXNlbnQsXG4gKiAgICAgdGhlIGlucHV0IGNvbGxlY3Rpb24gd2lsbCBzaW1wbHkgYmUgcmVkdWNlZCBpbnRvIGFuIG9iamVjdCB3aXRob3V0XG4gKiAgICAgdHJhbnNmb3JtYXRpb24uXG4gKiBAcmV0dXJucyB7b2JqZWN0fSBBbiBvYmplY3QgY29udGFpbmluZyBhbGwgb2YgdGhlIHRyYW5zZm9ybWVkIHZhbHVlcyBmcm9tIHRoZVxuICogICAgIGlucHV0IGNvbGxlY3Rpb24gZWxlbWVudHMuXG4gKi9cbmZ1bmN0aW9uIGFzT2JqZWN0KGNvbGxlY3Rpb24sIHRyYW5zZHVjZXJGbikge1xuICByZXR1cm4gdHJhbnNkdWNlKGNvbGxlY3Rpb24sIHRyYW5zZHVjZXJGbiwgdG9SZWR1Y2VyKHt9KSk7XG59XG5cbi8qKlxuICogVHJhbnNmb3JtcyB0aGUgZWxlbWVudHMgb2YgdGhlIGlucHV0IGNvbGxlY3Rpb24gYW5kIHJlZHVjZXMgdGhlbSBpbnRvIGEgbmV3XG4gKiBzdHJpbmcuXG4gKlxuICogVGhlIHRyYW5zZHVjZXIgZnVuY3Rpb24gaXMgb3B0aW9uYWwuIElmIGl0IGlzbid0IHByZXNlbnQsIHRoaXMgZnVuY3Rpb24ganVzdFxuICogY29udmVydHMgdGhlIGlucHV0IGNvbGxlY3Rpb24gaW50byBhbiBzdHJpbmcuIElmIHRoaXMgaXMgdGhlIGNhc2UgYW5kIHRoZVxuICogaW5wdXQgY29sbGVjdGlvbiBpcyBhbiBvYmplY3QsIG9ubHkgdGhlIHZhbHVlcyB3aWxsIGJlIGNvbmNhdGVuYXRlZCBpbnRvIGFcbiAqIHN0cmluZy5cbiAqXG4gKiBPdGhlcndpc2UsIHRyYW5zZm9ybWluZyBvYmplY3RzIGludG8gc3RyaW5ncyBvbmx5IG1ha2VzIG11Y2ggc2Vuc2UgaWYgdGhlXG4gKiB0cmFuc2R1Y2VyIHByb2R1Y2VzIG9ubHkgYSBzaW5nbGUgb3V0cHV0IGZyb20gZWFjaCBvZiB0aGUgb2JqZWN0cyBrZXkvdmFsdWVcbiAqIHBhaXJzLlxuICpcbiAqIGBgYFxuICogaW1wb3J0IHsgdHJhbnNkdWNlLCBrZXksIG1hcCB9IGZyb20gXCJAY2hhbmtvL3hkdWNlXCI7XG4gKlxuICogY29uc3QgdHJhbnNkdWNlckZuID0gbWFwKHggPT4geC50b1VwcGVyQ2FzZSgpKTtcbiAqXG4gKiBsZXQgcmVzdWx0ID0gYXNTdHJpbmcoJ2hlbGxvJywgdHJhbnNkdWNlckZuKTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdCk7ICAgLy8gLT4gXCJIRUxMT1wiXG4gKlxuICogcmVzdWx0ID0gYXNTdHJpbmcoWydoJywgJ2UnLCAnbCcsICdsJywgJ28nXSwgdHJhbnNkdWNlckZuKTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdCk7ICAgLy8gLT4gXCJIRUxMT1wiXG4gKlxuICogcmVzdWx0ID0gYXNTdHJpbmcoeyBhOiAxLCBjOiAyLCBiOiAzIH0sIG1hcChrZXkpKTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdCk7ICAgLy8gLT4gXCJhY2JcIlxuICpcbiAqIHJlc3VsdCA9IGFzU3RyaW5nKFsxLCAyLCAzLCA0LCA1XSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQpOyAgIC8vIC0+IFwiMTIzNDVcIlxuICpcbiAqIHJlc3VsdCA9IGFzU3RyaW5nKHsgYTogMSwgYzogMiwgYjogMyB9KTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdCk7ICAgLy8gLT4gXCIxMjNcIlxuICogYGBgXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHBhcmFtIHsob2JqZWN0fGZ1bmN0aW9ufGV4dGVybmFsOkl0ZXJhYmxlKX0gY29sbGVjdGlvbiBUaGUgaW5wdXQgY29sbGVjdGlvbi5cbiAqICAgICBUaGUgb25seSByZXF1aXJlbWVudCBvZiB0aGlzIGNvbGxlY3Rpb24gaXMgdGhhdCBpdCBpbXBsZW1lbnQgdGhlXG4gKiAgICAgYGl0ZXJhYmxlYCBwcm90b2NvbC4gU3BlY2lhbCBzdXBwb3J0IGlzIHByb3ZpZGVkIGJ5IHRoZSBsaWJyYXJ5IGZvclxuICogICAgIGZ1bmN0aW9ucyBhbmQgb2JqZWN0cywgc28gdGhleSBjYW4gYWxzbyBiZSB1c2VkLlxuICogQHBhcmFtIHttb2R1bGU6eGRjb3JlLlRyYW5zZHVjZXJGdW5jdGlvbn0gW3RyYW5zZHVjZXJGbl0gQSBmdW5jdGlvbiB0aGF0XG4gKiAgICAgY3JlYXRlcyBhIHRyYW5zZHVjZXIgb2JqZWN0IHRoYXQgZGVmaW5lcyB0aGUgdHJhbnNmb3JtYXRpb24gYmVpbmcgZG9uZSB0b1xuICogICAgIHRoZSBpbnB1dCBjb2xsZWN0aW9uJ3MgZWxlbWVudHMuIEFueSBvZiB0aGUgdHJhbnNkdWNlcnMgaW4gdGhpcyBtb2R1bGVcbiAqICAgICBjYW4gcHJvZHVjZSBhIHN1aXRhYmxlIHRyYW5zZHVjZXIgZnVuY3Rpb24uIElmIHRoaXMgaXNuJ3QgcHJlc2VudCwgdGhlXG4gKiAgICAgaW5wdXQgY29sbGVjdGlvbiB3aWxsIHNpbXBseSBiZSByZWR1Y2VkIGludG8gYSBzdHJpbmcgd2l0aG91dFxuICogICAgIHRyYW5zZm9ybWF0aW9uLlxuICogQHJldHVybnMge3N0cmluZ30gQSBzdHJpbmcgY29udGFpbmluZyBhbGwgb2YgdGhlIHRyYW5zZm9ybWVkIHZhbHVlcyBmcm9tIHRoZVxuICogICAgIGlucHV0IGNvbGxlY3Rpb24gZWxlbWVudHMuXG4gKi9cbmZ1bmN0aW9uIGFzU3RyaW5nKGNvbGxlY3Rpb24sIHRyYW5zZHVjZXJGbikge1xuICByZXR1cm4gdHJhbnNkdWNlKGNvbGxlY3Rpb24sIHRyYW5zZHVjZXJGbiwgdG9SZWR1Y2VyKFwiXCIpKTtcbn1cblxuLyoqXG4gKiBUcmFuc2Zvcm1zIHRoZSBlbGVtZW50cyBvZiB0aGUgaW5wdXQgY29sbGVjdGlvbiBhbmQgcmVkdWNlcyB0aGVtIGludG8gYSBuZXdcbiAqIGl0ZXJhdG9yLlxuICpcbiAqIFRoZSB0cmFuc2R1Y2VyIGZ1bmN0aW9uIGlzIG9wdGlvbmFsLiBJZiBpdCBpc24ndCBwcmVzZW50LCB0aGlzIGZ1bmN0aW9uIGp1c3RcbiAqIGNvbnZlcnRzIHRoZSBpbnB1dCBjb2xsZWN0aW9uIGludG8gYW4gaXRlcmF0b3IuXG4gKlxuICogKihUaGUgcmVzdWx0cyBoZXJlIGFyZSBzaG93biBwYXNzZWQgdGhyb3VnaCBgYXNBcnJheWAgYmVjYXVzZSB0aGVyZSdzIG5vXG4gKiBwcmludGFibGUgcmVwcmVzZW50YXRpb24gb2YgYW4gaXRlcmF0b3IgdG8gc2hvdy4gVGhlIGBhc0FycmF5YCBjYWxscyBhcmUgZm9yXG4gKiBkZW1vbnN0cmF0aW9uIHB1cnBvc2VzIG9ubHkuKSpcbiAqXG4gKiBgYGBcbiAqIGltcG9ydCB7IGFzSXRlcmF0b3IsIGFzQXJyYXksIG1hcCB9IGZyb20gXCJAY2hhbmtvL3hkdWNlXCI7XG4gKlxuICogY29uc3QgdHJhbnNkdWNlckZuID0gbWFwKHggPT4geCArIDEpO1xuICogZnVuY3Rpb24qIGZpdmUoKSB7XG4gKiAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDU7ICsraSkge1xuICogICAgIHlpZWxkIGk7XG4gKiAgIH1cbiAqIH07XG4gKlxuICogbGV0IHJlc3VsdCA9IGFzSXRlcmF0b3IoZml2ZSgpLCB0cmFuc2R1Y2VyRm4pO1xuICogY29uc29sZS5sb2coYXNBcnJheShyZXN1bHQpKTsgICAvLyAtPiBbMiwgMywgNCwgNSwgNl1cbiAqXG4gKiByZXN1bHQgPSBhc0l0ZXJhdG9yKFsxLCAyLCAzLCA0LCA1XSwgdHJhbnNkdWNlckZuKTtcbiAqIGNvbnNvbGUubG9nKGFzQXJyYXkocmVzdWx0KSk7ICAgLy8gLT4gWzIsIDMsIDQsIDUsIDZdXG4gKlxuICogcmVzdWx0ID0gYXNJdGVyYXRvcihbMSwgMiwgMywgNCwgNV0pO1xuICogY29uc29sZS5sb2coYXNBcnJheShyZXN1bHQpKTsgICAvLyAtPiBbMSwgMiwgMywgNCwgNV1cbiAqXG4gKiByZXN1bHQgPSBhc0l0ZXJhdG9yKHthOiAxLCBiOiAyfSk7XG4gKiBjb25zb2xlLmxvZyhhc0FycmF5KHJlc3VsdCkpOyAgIC8vIC0+IFt7IGE6IDEgfSwgeyBiOiAyIH1dXG4gKiBgYGBcbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcGFyYW0geyhvYmplY3R8ZnVuY3Rpb258ZXh0ZXJuYWw6SXRlcmFibGUpfSBjb2xsZWN0aW9uIFRoZSBpbnB1dCBjb2xsZWN0aW9uLlxuICogICAgIFRoZSBvbmx5IHJlcXVpcmVtZW50IG9mIHRoaXMgY29sbGVjdGlvbiBpcyB0aGF0IGl0IGltcGxlbWVudCB0aGVcbiAqICAgICBgaXRlcmFibGVgIHByb3RvY29sLiBTcGVjaWFsIHN1cHBvcnQgaXMgcHJvdmlkZWQgYnkgdGhlIGxpYnJhcnkgZm9yXG4gKiAgICAgZnVuY3Rpb25zIGFuZCBvYmplY3RzLCBzbyB0aGV5IGNhbiBhbHNvIGJlIHVzZWQuXG4gKiBAcGFyYW0ge21vZHVsZTp4ZGNvcmUuVHJhbnNkdWNlckZ1bmN0aW9ufSBbdHJhbnNkdWNlckZuXSBBIGZ1bmN0aW9uIHRoYXRcbiAqICAgICBjcmVhdGVzIGEgdHJhbnNkdWNlciBvYmplY3QgdGhhdCBkZWZpbmVzIHRoZSB0cmFuc2Zvcm1hdGlvbiBiZWluZyBkb25lIHRvXG4gKiAgICAgdGhlIGlucHV0IGNvbGxlY3Rpb24ncyBlbGVtZW50cy4gQW55IG9mIHRoZSB0cmFuc2R1Y2VycyBpbiB0aGlzIG1vZHVsZVxuICogICAgIGNhbiBwcm9kdWNlIGEgc3VpdGFibGUgdHJhbnNkdWNlciBmdW5jdGlvbi4gSWYgdGhpcyBpc24ndCBwcmVzZW50LCB0aGVcbiAqICAgICBpbnB1dCBjb2xsZWN0aW9uIHdpbGwgc2ltcGx5IGJlIHJlZHVjZWQgaW50byBhbiBpdGVyYXRvciB3aXRob3V0XG4gKiAgICAgdHJhbnNmb3JtYXRpb24uXG4gKiBAcmV0dXJucyB7ZXh0ZXJuYWw6SXRlcmF0b3J9IEFuIGl0ZXJhdG9yIGNvbnRhaW5pbmcgYWxsIG9mIHRoZSB0cmFuc2Zvcm1lZFxuICogICAgIHZhbHVlcyBmcm9tIHRoZSBpbnB1dCBjb2xsZWN0aW9uIGVsZW1lbnRzLlxuICovXG5mdW5jdGlvbiBhc0l0ZXJhdG9yKGNvbGxlY3Rpb24sIHRyYW5zZHVjZXJGbikge1xuICByZXR1cm4gdHJhbnNkdWNlckZuXG4gICAgPyB0cmFuc2R1Y2luZ0l0ZXJhdG9yKGNvbGxlY3Rpb24sIHRyYW5zZHVjZXJGbilcbiAgICA6IGl0ZXJhdG9yKGNvbGxlY3Rpb24pO1xufVxuXG4vKipcbiAqIFRyYW5zZm9ybXMgdGhlIGVsZW1lbnRzIG9mIHRoZSBpbnB1dCBjb2xsZWN0aW9uIGFuZCByZWR1Y2VzIHRoZW0gaW50byBhIG5ld1xuICogY29sbGVjdGlvbiBvZiB0aGUgc2FtZSB0eXBlLlxuICpcbiAqIFRoaXMgaXMgdGhlIGhpZ2hlc3QgbGV2ZWwgb2YgdGhlIHRocmVlIG1haW4gdHJhbnNkdWN0aW9uIGZ1bmN0aW9uc1xuICogKGBzZXF1ZW5jZWAsIGB7QGxpbmsgbW9kdWxlOnhkdWNlLmludG98aW50b31gLCBhbmRcbiAqIGB7QGxpbmsgbW9kdWxlOnhkdWNlLnRyYW5zZHVjZXx0cmFuc2R1Y2V9YCkuIEl0IGNyZWF0ZXMgYSBuZXcgY29sbGVjdGlvbiBvZlxuICogdGhlIHNhbWUgdHlwZSBhcyB0aGUgaW5wdXQgY29sbGVjdGlvbiBhbmQgcmVkdWNlcyB0aGUgdHJhbnNmb3JtZWQgZWxlbWVudHNcbiAqIGludG8gaXQuIEFkZGl0aW9uYWxseSwgdW5saWtlIGB7QGxpbmsgbW9kdWxlOnhkdWNlLmludG98aW50b31gIGFuZFxuICogYHtAbGluayBtb2R1bGU6eGR1Y2UudHJhbnNkdWNlfHRyYW5zZHVjZX1gLCB0aGlzIGZ1bmN0aW9uIGlzIGNhcGFibGUgb2ZcbiAqIHByb2R1Y2luZyBhbiBpdGVyYXRvciAoYXMgbG9uZyBhcyB0aGUgaW5wdXQgaXMgYW4gaXRlcmF0b3IpLlxuICpcbiAqIFRoZSBpbnB1dCBjb2xsZWN0aW9uIG11c3Qgbm90IG9ubHkgaW1wbGVtZW50IHRoZSBgaXRlcmF0b3JgIHByb3RvY29sIChhcyBpblxuICogdGhlIGxhc3QgdHdvIGZ1bmN0aW9ucykgYnV0IGFsc28gdGhlIGBpbml0YCwgYHJlc3VsdGAsIGFuZCBgc3RlcGAgcmVkdWNlclxuICogcHJvdG9jb2xzLiBTcGVjaWFsIHN1cHBvcnQgaXMgcHJvdmlkZWQgZm9yIGFycmF5cywgc3RyaW5ncywgb2JqZWN0cywgYW5kXG4gKiBpdGVyYXRvcnMsIHNvIHRoZXkgbmVlZCBub3QgaW1wbGVtZW50IGFueSBwcm90b2NvbC5cbiAqXG4gKiBUaGUgb2J2aW91cyBsaW1pdGF0aW9uIG9mIHRoaXMgZnVuY3Rpb24gaXMgdGhhdCB0aGUgdHlwZSBvZiBvdXRwdXQgY29sbGVjdGlvblxuICogY2Fubm90IGJlIGNob3Nlbi4gU2luY2UgaXQgaXMgYWx3YXlzIHRoZSBzYW1lIGFzIHRoZSBpbnB1dCBjb2xsZWN0aW9uLCB0aGlzXG4gKiBmdW5jdGlvbiBjYW5ub3QgYmUgdXNlZCB0byBjb252ZXJ0IGEgY29sbGVjdGlvbiBpbnRvIGEgZGlmZmVyZW50IHR5cGUuXG4gKlxuICogYGBgXG4gKiBpbXBvcnQgeyBzZXF1ZW5jZSwgbWFwIH0gZnJvbSBcIkBjaGFua28veGR1Y2VcIjtcbiAqXG4gKiBjb25zdCB0cmFuc2R1Y2VyRm4gPSBtYXAoeCA9PiB4ICsgMSk7XG4gKlxuICogbGV0IHJlc3VsdCA9IHNlcXVlbmNlKFsxLCAyLCAzLCA0LCA1XSwgdHJhbnNkdWNlckZuKTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdCk7ICAgLy8gLT4gcmVzdWx0ID0gWzIsIDMsIDQsIDUsIDZdXG4gKlxuICogcmVzdWx0ID0gc2VxdWVuY2UoJzEyMzQ1JywgdHJhbnNkdWNlckZuKTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdCk7ICAgLy8gLT4gcmVzdWx0ID0gJzIzNDU2J1xuICogYGBgXG4gKlxuICogVGhlc2UgZXhhbXBsZXMgYXJlIGlkZW50aWNhbCB0byBzb21lIG9mIHRoZSBleGFtcGxlcyBmcm9tIHRoZSBgYXNYYFxuICogZnVuY3Rpb25zLiBPdGhlciBleGFtcGxlcyBhcmUgbm90IHBvc3NpYmxlIHdpdGggYHNlcXVlbmNlYCBiZWNhdXNlIHRoZXkgaGF2ZVxuICogZGlmZmVyZW50IGlucHV0IGFuZCBvdXRwdXQgY29sbGVjdGlvbiB0eXBlcy5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcGFyYW0geyhhcnJheXxvYmplY3R8c3RyaW5nfGV4dGVybmFsOkl0ZXJhdG9yfG1vZHVsZTp4ZHVjZS5Db2xsZWN0aW9uKX1cbiAqICAgICBjb2xsZWN0aW9uIFRoZSBpbnB1dCBjb2xsZWN0aW9uLiBUaGlzIG11c3QgaW1wbGVtZW50IHRoZSBgaXRlcmF0b3JgLFxuICogICAgIGBpbml0YCwgYHJlc3VsdGAsIGFuZCBgc3RlcGAgcHJvdG9jb2xzLiBTcGVjaWFsIHN1cHBvcnQgaXMgcHJvdmlkZWQgZm9yXG4gKiAgICAgYXJyYXlzLCBzdHJpbmdzLCBvYmplY3RzLCBhbmQgaXRlcmF0b3JzLCBzbyB0aGV5IGRvIG5vdCBoYXZlIHRvIGltcGxlbWVudFxuICogICAgIGFueSBwcm90b2NvbHMuXG4gKiBAcGFyYW0ge21vZHVsZTp4ZGNvcmUuVHJhbnNkdWNlckZ1bmN0aW9ufSB0cmFuc2R1Y2VyRm4gQSBmdW5jdGlvbiB0aGF0XG4gKiAgICAgY3JlYXRlcyBhIHRyYW5zZHVjZXIgb2JqZWN0IHRoYXQgZGVmaW5lcyB0aGUgdHJhbnNmb3JtYXRpb24gYmVpbmcgZG9uZSB0b1xuICogICAgIHRoZSBpbnB1dCBjb2xsZWN0aW9uJ3MgZWxlbWVudHMuIEFueSBvZiB0aGUgdHJhbnNkdWNlcnMgaW4gdGhpcyBtb2R1bGVcbiAqICAgICBjYW4gcHJvZHVjZSBhIHN1aXRhYmxlIHRyYW5zZHVjZXIgZnVuY3Rpb24uXG4gKiBAcmV0dXJucyB7KGFycmF5fG9iamVjdHxzdHJpbmd8ZXh0ZXJuYWw6SXRlcmF0b3J8bW9kdWxlOnhkdWNlLkNvbGxlY3Rpb24pfSBBXG4gKiAgICAgY29sbGVjdGlvbiBvZiB0aGUgc2FtZSB0eXBlIGFzIHRoZSBpbnB1dCBjb2xsZWN0aW9uLCBjb250YWluaW5nIGFsbCBvZlxuICogICAgIHRoZSB0cmFuc2Zvcm1lZCB2YWx1ZXMgZnJvbSB0aGUgaW5wdXQgY29sbGVjdGlvbiBlbGVtZW50cy5cbiAqL1xuZnVuY3Rpb24gc2VxdWVuY2UoY29sbGVjdGlvbiwgdHJhbnNkdWNlckZuKSB7XG4gIHN3aXRjaCAodHJ1ZSkge1xuICAgIGNhc2UgaXNBcnJheShjb2xsZWN0aW9uKTpcbiAgICAgIHJldHVybiBhc0FycmF5KGNvbGxlY3Rpb24sIHRyYW5zZHVjZXJGbik7XG4gICAgY2FzZSBpc09iamVjdChjb2xsZWN0aW9uKTpcbiAgICAgIHJldHVybiBhc09iamVjdChjb2xsZWN0aW9uLCB0cmFuc2R1Y2VyRm4pO1xuICAgIGNhc2UgaXNTdHJpbmcoY29sbGVjdGlvbik6XG4gICAgICByZXR1cm4gYXNTdHJpbmcoY29sbGVjdGlvbiwgdHJhbnNkdWNlckZuKTtcbiAgICBjYXNlIGlzSW1wbGVtZW50ZWQoY29sbGVjdGlvbiwgXCJzdGVwXCIpOlxuICAgICAgcmV0dXJuIHRyYW5zZHVjZShjb2xsZWN0aW9uLCB0cmFuc2R1Y2VyRm4sIGNvbGxlY3Rpb24pO1xuICAgIGNhc2UgaXNJbXBsZW1lbnRlZChjb2xsZWN0aW9uLCBcIml0ZXJhdG9yXCIpOlxuICAgICAgcmV0dXJuIGFzSXRlcmF0b3IoY29sbGVjdGlvbiwgdHJhbnNkdWNlckZuKTtcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgRXJyb3IoYENhbm5vdCBzZXF1ZW5jZSBjb2xsZWN0aW9uOiAke2NvbGxlY3Rpb259YCk7XG4gIH1cbn1cblxuLyoqXG4gKiBUcmFuc2Zvcm1zIHRoZSBlbGVtZW50cyBvZiB0aGUgaW5wdXQgY29sbGVjdGlvbiBhbmQgcmVkdWNlcyB0aGVtIGludG8gdGhlXG4gKiB0YXJnZXQgY29sbGVjdGlvbi5cbiAqXG4gKiBUaGlzIGlzIG11Y2ggbGlrZSBge0BsaW5rIG1vZHVsZTp4ZHVjZS50cmFuc2R1Y2V8dHJhbnNkdWNlfWAsIGV4Y2VwdCB0aGF0XG4gKiBpbnN0ZWFkIG9mIGV4cGxpY2l0bHkgcHJvdmlkaW5nIGEgcmVkdWNlciAoYW5kIHBlcmhhcHMgYW4gaW5pdGlhbFxuICogY29sbGVjdGlvbiksIHRoZSB0YXJnZXQgY29sbGVjdGlvbiBhY3RzIGFzIGEgcmVkdWNlciBpdHNlbGYuIFRoaXMgcmVxdWlyZXNcbiAqIHRoYXQgdGhlIGNvbGxlY3Rpb24gaW1wbGVtZW50IHRoZSBgaW5pdGAsIGByZXN1bHRgLCBhbmQgYHN0ZXBgIHJlZHVjZXJcbiAqIHByb3RvY29sIGZ1bmN0aW9ucy5cbiAqXG4gKiBJZiBubyB0cmFuc2R1Y2VyIGZ1bmN0aW9uIGlzIHByb3ZpZGVkLCB0aGUgaW5wdXQgY29sbGVjdGlvbiBlbGVtZW50cyBhcmVcbiAqIHJlZHVjZWQgaW50byB0aGUgdGFyZ2V0IGNvbGxlY3Rpb24gd2l0aG91dCBiZWluZyB0cmFuc2Zvcm1lZC4gVGhpcyBjYW4gYmVcbiAqIHVzZWQgdG8gY29udmVydCBvbmUga2luZCBvZiBjb2xsZWN0aW9uIGludG8gYW5vdGhlci5cbiAqXG4gKiBgYGBcbiAqIGltcG9ydCB7IGludG8sIG1hcCB9IGZyb20gXCJAY2hhbmtvL3hkdWNlXCI7XG4gKlxuICogY29uc3QgdHJhbnNkdWNlckZuID0gbWFwKHggPT4geCArIDEpO1xuICpcbiAqIGxldCByZXN1bHQgPSBpbnRvKFtdLCBbMSwgMiwgMywgNCwgNV0sIHRyYW5zZHVjZXJGbik7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQpOyAgIC8vIC0+IFsyLCAzLCA0LCA1LCA2XVxuICpcbiAqIHJlc3VsdCA9IGludG8oXCJcIiwgWzEsIDIsIDMsIDQsIDVdLCB0cmFuc2R1Y2VyRm4pO1xuICogY29uc29sZS5sb2cocmVzdWx0KTsgICAvLyAtPiBcIjIzNDU2XCJcbiAqXG4gKiByZXN1bHQgPSBpbnRvKFtdLCBcIjEyMzQ1XCIsIHRyYW5zZHVjZXJGbik7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQpOyAgIC8vIC0+IFsyLCAzLCA0LCA1LCA2XVxuICpcbiAqIHJlc3VsdCA9IGludG8oXCJcIiwgXCIxMjM0NVwiLCB0cmFuc2R1Y2VyRm4pO1xuICogY29uc29sZS5sb2cocmVzdWx0KTsgICAvLyAtPiBcIjIzNDU2XCJcbiAqIGBgYFxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwYXJhbSB7KGFycmF5fG9iamVjdHxzdHJpbmd8bW9kdWxlOnhkY29yZS5SZWR1Y2libGUpfSB0YXJnZXQgVGhlIGNvbGxlY3Rpb25cbiAqICAgICBpbnRvIHdoaWNoIGFsbCBvZiB0aGUgdHJhbnNmb3JtZWQgaW5wdXQgY29sbGVjdGlvbiBlbGVtZW50cyB3aWxsIGJlXG4gKiAgICAgcmVkdWNlZC4gVGhpcyBjb2xsZWN0aW9uIG11c3QgaW1wbGVtZW50IHRoZSBgaW5pdGAsIGBmaW5hbGAsIGFuZCBgc3RlcGBcbiAqICAgICBwcm90b2NvbCBmdW5jdGlvbnMgZnJvbSB0aGUgcmVkdWNlciBwcm90b2NvbC4gU3BlY2lhbCBzdXBwb3J0IGlzIHByb3ZpZGVkXG4gKiAgICAgZm9yIGFycmF5cywgc3RyaW5ncywgYW5kIG9iamVjdHMsIHNvIHRoZXkgbmVlZCBub3QgaW1wbGVtZW50IHRoZVxuICogICAgIHByb3RvY29sLlxuICogQHBhcmFtIHsob2JqZWN0fGZ1bmN0aW9ufGV4dGVybmFsOkl0ZXJhYmxlKX0gY29sbGVjdGlvbiBUaGUgaW5wdXQgY29sbGVjdGlvbi5cbiAqICAgICBUaGUgb25seSByZXF1aXJlbWVudCBvZiB0aGlzIGNvbGxlY3Rpb24gaXMgdGhhdCBpdCBpbXBsZW1lbnQgdGhlXG4gKiAgICAgYGl0ZXJhYmxlYCBwcm90b2NvbC4gU3BlY2lhbCBzdXBwb3J0IGlzIHByb3ZpZGVkIGJ5IHRoZSBsaWJyYXJ5IGZvclxuICogICAgIGZ1bmN0aW9ucyBhbmQgb2JqZWN0cywgdG8gdGhleSBjYW4gYWxzbyBiZSB1c2VkLlxuICogQHBhcmFtIHttb2R1bGU6eGRjb3JlLlRyYW5zZHVjZXJGdW5jdGlvbn0gW3RyYW5zZHVjZXJGbl0gQSBmdW5jdGlvbiB0aGF0XG4gKiAgICAgY3JlYXRlcyBhIHRyYW5zZHVjZXIgb2JqZWN0IHRoYXQgZGVmaW5lcyB0aGUgdHJhbnNmb3JtYXRpb24gYmVpbmcgZG9uZSB0b1xuICogICAgIHRoZSBpbnB1dCBjb2xsZWN0aW9uJ3MgZWxlbWVudHMuIEFueSBvZiB0aGUgdHJhbnNkdWNlcnMgaW4gdGhpcyBtb2R1bGVcbiAqICAgICBjYW4gcHJvZHVjZSBhIHN1aXRhYmxlIHRyYW5zZHVjZXIgZnVuY3Rpb24uIElmIHRoaXMgaXNuJ3QgcHJlc2VudCwgdGhlXG4gKiAgICAgaW5wdXQgY29sbGVjdGlvbiB3aWxsIHNpbXBseSBiZSByZWR1Y2VkIGludG8gdGhlIHRhcmdldCBjb2xsZWN0aW9uXG4gKiAgICAgd2l0aG91dCB0cmFuc2Zvcm1hdGlvbi5cbiAqIEByZXR1cm4geyhhcnJheXxvYmplY3R8c3RyaW5nfG1vZHVsZTp4ZGNvcmUuUmVkdWNpYmxlKX0gVGhlIGB0YXJnZXRgXG4gKiAgICAgY29sbGVjdGlvbiwgd2l0aCBhbGwgb2YgdGhlIHRyYW5mb3JtZWQgaW5wdXQgY29sbGVjdGlvbiBlbGVtZW50cyByZWR1Y2VkXG4gKiAgICAgb250byBpdC5cbiAqL1xuZnVuY3Rpb24gaW50byh0YXJnZXQsIGNvbGxlY3Rpb24sIHRyYW5zZHVjZXJGbikge1xuICBzd2l0Y2ggKHRydWUpIHtcbiAgICBjYXNlIGlzQXJyYXkodGFyZ2V0KTpcbiAgICAgIHJldHVybiB0cmFuc2R1Y2UoY29sbGVjdGlvbiwgdHJhbnNkdWNlckZuLCB0b1JlZHVjZXIoW10pLCB0YXJnZXQpO1xuICAgIGNhc2UgaXNPYmplY3QodGFyZ2V0KTpcbiAgICAgIHJldHVybiB0cmFuc2R1Y2UoY29sbGVjdGlvbiwgdHJhbnNkdWNlckZuLCB0b1JlZHVjZXIoe30pLCB0YXJnZXQpO1xuICAgIGNhc2UgaXNTdHJpbmcodGFyZ2V0KTpcbiAgICAgIHJldHVybiB0cmFuc2R1Y2UoY29sbGVjdGlvbiwgdHJhbnNkdWNlckZuLCB0b1JlZHVjZXIoXCJcIiksIHRhcmdldCk7XG4gICAgY2FzZSBpc0ltcGxlbWVudGVkKHRhcmdldCwgXCJzdGVwXCIpOlxuICAgICAgcmV0dXJuIHRyYW5zZHVjZShjb2xsZWN0aW9uLCB0cmFuc2R1Y2VyRm4sIHRhcmdldCwgdGFyZ2V0KTtcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgRXJyb3IoYENhbm5vdCByZWR1Y2UgY29sbGVjdGlvbiBpbnRvICR7dGFyZ2V0fTogJHtjb2xsZWN0aW9ufWApO1xuICB9XG59XG5cbi8qKlxuICogQ29tcG9zZXMgdHdvIG9yIG1vcmUgdHJhbnNkdWNlciBmdW5jdGlvbnMgaW50byBhIHNpbmdsZSB0cmFuc2R1Y2VyIGZ1bmN0aW9uLlxuICpcbiAqIEVhY2ggZnVuY3Rpb24gdGhhdCB0YWtlcyBhIHRyYW5zZHVjZXIgZnVuY3Rpb25cbiAqIChge0BsaW5rIG1vZHVsZTp4ZHVjZS5zZXF1ZW5jZXxzZXF1ZW5jZX1gLCBge0BsaW5rIG1vZHVsZTp4ZHVjZS5pbnRvfGludG99YCxcbiAqIGV0Yy4pIGlzIG9ubHkgY2FwYWJsZSBvZiBhY2NlcHRpbmcgb25lIG9mIHRoZW0uIElmIHRoZXJlIGlzIGEgbmVlZCB0byBoYXZlXG4gKiBzZXZlcmFsIHRyYW5zZHVjZXJzIGNoYWluZWQgdG9nZXRoZXIsIHRoZW4gdXNlIGBjb21wb3NlYCB0byBjcmVhdGUgYVxuICogdHJhbnNkdWNlciBmdW5jdGlvbiB0aGF0IGRvZXMgd2hhdCBhbGwgb2YgdGhlbSBkby5cbiAqXG4gKiBOT1RFOiBJbiBmdW5jdGlvbmFsIHByb2dyYW1taW5nLCBhIGNvbXBvc2UgZnVuY3Rpb24gaXMgZ2VuZXJhbGx5IG9yZGVyZWQgc29cbiAqIHRoYXQgdGhlIGZpcnN0LWV4ZWN1dGVkIGZ1bmN0aW9uIGlzIGxpc3RlZCBsYXN0LiBUaGlzIGlzIGRvbmUgaW4gdGhlIG9wcG9zaXRlXG4gKiB3YXksIHdpdGggdGhlIGZpcnN0IHRyYW5zZHVjZXIgZXhlY3V0aW5nIGZpcnN0LCBldGMuIFRoaXMgaXMgYSBtb3JlIG5hdHVyYWxcbiAqIG9yZGVyaW5nIGZvciB0cmFuc2R1Y2VyIGZ1bmN0aW9ucyBiZWNhdXNlIHRoZXJlIGlzIGEgdmVyeSByZWFsIGRpcmVjdGlvbmFsXG4gKiBwdWxsIG9mIGVsZW1lbnRzIHRocm91Z2ggYSBjaGFpbiBvZiBjb21wb3NlZCB0cmFuc2R1Y2Vycy5cbiAqXG4gKiBgYGBcbiAqIGltcG9ydCB7IGNvbXBvc2UsIHNlcXVlbmNlLCBtYXAsIGZpbHRlciwgdGFrZSB9IGZyb20gXCJAY2hhbmtvL3hkdWNlXCI7XG4gKlxuICogY29uc3QgYWRkMSA9IHggPT4geCArIDE7XG4gKiBjb25zdCBvZGQgPSB4ID0+IHggJSAyICE9PSAwO1xuICpcbiAqIGNvbnN0IHRyYW5zZHVjZXJGbiA9IGNvbXBvc2UobWFwKGFkZDEpLCBmaWx0ZXIob2RkKSwgdGFrZSgzKSk7XG4gKlxuICogY29uc3QgcmVzdWx0ID0gc2VxdWVuY2UoWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwXSwgdHJhbnNkdWNlckZuKTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdCk7ICAgLy8gLT4gWzMsIDUsIDddO1xuICogYGBgXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHBhcmFtIHsuLi5tb2R1bGU6eGRjb3JlLlRyYW5zZHVjZXJGdW5jdGlvbn0gZm5zIE9uZSBvciBtb3JlIHRyYW5zZHVjZXJcbiAqICAgICBmdW5jdGlvbnMgdG8gYmUgY29tcG9zZWQgaW50byBhIHNpbmdsZSB0cmFuc2R1Y2VyIGZ1bmN0aW9uLiBBbnkgb2YgdGhlXG4gKiAgICAgdHJhbnNkdWNlcnMgaW4gdGhpcyBtb2R1bGUgY2FuIHByb2R1Y2UgYSBzdWl0YWJsZSB0cmFuc2R1Y2VyIGZ1bmN0aW9uLlxuICogQHJldHVybiB7bW9kdWxlOnhkY29yZS5UcmFuc2R1Y2VyRnVuY3Rpb259IEEgdHJhbnNkdWNlciBmdW5jdGlvbiB0aGF0IHByb2R1Y2VzXG4gKiAgICAgYSB0cmFuc2R1Y2VyIG9iamVjdCB0aGF0IHBlcmZvcm1zICphbGwqIG9mIHRoZSB0cmFuc2Zvcm1hdGlvbnMgb2YgdGhlXG4gKiAgICAgb2JqZWN0cyBwcm9kdWNlZCBieSB0aGUgaW5wdXQgdHJhbnNkdWNlciBmdW5jdGlvbnMuXG4gKi9cbmZ1bmN0aW9uIGNvbXBvc2UoLi4udHJhbnNkdWNlckZucykge1xuICBjb25zdCByZXZlcnNlZCA9IHRyYW5zZHVjZXJGbnMucmV2ZXJzZSgpO1xuICByZXR1cm4gdmFsdWUgPT4gcmV2ZXJzZWQucmVkdWNlKChhY2MsIGZuKSA9PiBmbihhY2MpLCB2YWx1ZSk7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHJlZHVjZXIgb2JqZWN0IGZyb20gYSBmdW5jdGlvbiBvciBmcm9tIGEgcmVkdWNpYmxlIHR5cGUgKGFycmF5LFxuICogb2JqZWN0LCBzdHJpbmcsIG9yIG9iamVjdCBpbXBsZW1lbnRpbmcgdGhlIHJlZHVjZXIgcHJvdG9jb2xzKS5cbiAqXG4gKiBUbyBjcmVhdGUgYSByZWR1Y2VyIGZvciBhcnJheXMsIG9iamVjdHMsIG9yIHN0cmluZ3MsIHNpbXBseSBwYXNzIGFuIGVtcHR5XG4gKiB2ZXJzaW9uIG9mIHRoYXQgY29sbGVjdGlvbiB0byB0aGlzIGZ1bmN0aW9uIChlLmcuLCBgdG9SZWR1Y2VyKFtdKWApLlxuICpcbiAqIFRoZSBub3RhYmxlIHVzZSBmb3IgdGhpcyBmdW5jdGlvbiB0aG91Z2ggaXMgdG8gdHVybiBhIHJlZHVjdGlvbiBmdW5jdGlvbiBpbnRvXG4gKiBhIHJlZHVjZXIgb2JqZWN0LiBUaGUgZnVuY3Rpb24gaXMgYSBmdW5jdGlvbiBvZiB0d28gcGFyYW1ldGVycywgYW5cbiAqIGFjY3VtdWxhdG9yIGFuZCBhIHZhbHVlLCBhbmQgcmV0dXJucyB0aGUgYWNjdW11bGF0b3Igd2l0aCB0aGUgdmFsdWUgaW4gaXQuXG4gKiBUaGlzIGlzIGV4YWN0bHkgdGhlIHNhbWUga2luZCBvZiBmdW5jdGlvbiB0aGF0IGlzIHBhc3NlZCB0byByZWR1Y3Rpb25cbiAqIGZ1bmN0aW9ucyBsaWtlIEphdmFTY3JpcHQncyBgQXJyYXkucHJvdG90eXBlLnJlZHVjZWAgYW5kIExvZGFzaCdzIGBfLnJlZHVjZWAuXG4gKlxuICogTm90ZSBpbiBwYXJ0aWN1bGFyIHRoYXQgdGhlIG91dHB1dCBvZiB0aGlzIHJlZHVjZXIgZG9lcyBub3QgbmVlZCB0byBiZSBhXG4gKiBjb2xsZWN0aW9uLiBJdCBjYW4gYmUgYW55dGhpbmcuIFdoaWxlIHRyYW5zZHVjaW5nIG5vcm1hbGx5IGludm9sdmVzXG4gKiB0cmFuc2Zvcm1pbmcgb25lIGNvbGxlY3Rpb24gaW50byBhbm90aGVyLCBpdCBuZWVkIG5vdCBiZSBzby5cbiAqXG4gKiBUaGlzIGNhbiBiZSBjb21iaW5lZCB3aXRoIHRyYW5zZHVjZXJzIGFzIHdlbGwsIGFzIGluIHRoaXMgY2FsY3VsYXRpb24gb2YgdGhlXG4gKiBzdW0gb2YgdGhlICpzcXVhcmVzKiBvZiB0aGUgY29sbGVjdGlvbiB2YWx1ZXMuXG4gKlxuICogYGBgXG4gKiBpbXBvcnQgeyB0b1JlZHVjZXIsIHRyYW5zZHVjZSwgbWFwIH0gZnJvbSBcIkBjaGFua28veGR1Y2VcIjtcbiAqXG4gKiBjb25zdCBzdW1SZWR1Y2VyID0gdG9SZWR1Y2VyKChhY2MsIGlucHV0KSA9PiBhY2MgKyBpbnB1dCk7XG4gKiBjb25zdCBzdW0gPSB0cmFuc2R1Y2UoWzEsIDIsIDMsIDQsIDVdLCBtYXAoeCA9PiB4ICogeCksIHN1bVJlZHVjZXIsIDApO1xuICogY29uc29sZS5sb2coc3VtKTsgICAvLyAtPiA1NVxuICogYGBgXG4gKlxuICogVGhpcyBmdW5jdGlvbiBpcyBkZWZpbmVkIGluIHtAbGluayBtb2R1bGU6eGRjb3JlfHhkY29yZX0gYW5kIGlzIHJlLWV4cG9ydGVkXG4gKiBoZXJlLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBmdW5jdGlvbiB0b1JlZHVjZXJcbiAqIEBzZWUgbW9kdWxlOnhkY29yZS50b1JlZHVjZXJcbiAqIEBwYXJhbSB7KGFycmF5fG9iamVjdHxmdW5jdGlvbnxtb2R1bGU6eGRjb3JlLlJlZHVjZXJPYmplY3QpfSBjb2xsZWN0aW9uIEFcbiAqICAgICByZWR1Y2libGUgY29sbGVjdGlvbiBvciBhIHJlZHVjZXIgZnVuY3Rpb24uXG4gKiBAcmV0dXJucyB7bW9kdWxlOnhkY29yZS5SZWR1Y2VyT2JqZWN0fSBBbiBvYmplY3QgY29udGFpbmluZyBwcm90b2NvbFxuICogICAgIHByb3BlcnRpZXMgZm9yIGBpbml0YCwgYHN0ZXBgLCBhbmQgYGZpbmFsYC4gVGhpcyBvYmplY3QgaXMgc3VpdGFibGUgZm9yXG4gKiAgICAgdXNlIGFzIGEgcmVkdWNlciBvYmplY3QgKG9uZSBwcm92aWRlZCB0b1xuICogICAgIGB7QGxpbmsgbW9kdWxlOnhkY29yZS5yZWR1Y2V8cmVkdWNlfWApLiBJZiB0aGUgcHJvdmlkZWQgY29sbGVjdGlvbiBpcyBub3RcbiAqICAgICByZWR1Y2libGUsIGFsbCBvZiB0aGUgcHJvcGVydGllcyBvZiB0aGlzIG9iamVjdCB3aWxsIGJlIGBudWxsYC5cbiAqL1xuY29uc3QgdG9SZWR1Y2VyID0geGRjb3JlVG9SZWR1Y2VyO1xuXG4vKipcbiAqIENyZWF0ZXMgYSByZWR1Y2VyIGZ1bmN0aW9uIGZyb20gYSB0cmFuc2R1Y2VyIGZ1bmN0aW9uIGFuZCBhIHJlZHVjZXIuXG4gKlxuICogVGhpcyBwcm9kdWNlcyBhIGZ1bmN0aW9uIHRoYXQncyBzdWl0YWJsZSBmb3IgYmVpbmcgcGFzc2VkIGludG8gb3RoZXJcbiAqIGxpYnJhcmllcycgcmVkdWNlIGZ1bmN0aW9ucywgc3VjaCBhcyBKYXZhU2NyaXB0J3MgYEFycmF5LnByb3RvdHlwZS5yZWR1Y2VgIG9yXG4gKiBMb2Rhc2gncyBgXy5yZWR1Y2VgLiBJdCByZXF1aXJlcyBib3RoIGEgdHJhbnNkdWNlciAqYW5kKiBhIHJlZHVjZXIgYmVjYXVzZVxuICogcmVkdWN0aW9uIGZ1bmN0aW9ucyBmb3IgdGhvc2UgbGlicmFyaWVzIG11c3Qga25vdyBob3cgdG8gcmVkdWNlIGFzIHdlbGwgYXNcbiAqIGhvdyB0byB0cmFuc2Zvcm0uIFRoZSByZWR1Y2VyIGNhbiBiZSBhIHN0YW5kYXJkIHJlZHVjZXIgb2JqZWN0IGxpa2UgdGhlIG9uZXNcbiAqIHNlbnQgdG8gYHtAbGluayBtb2R1bGU6eGRjb3JlLnJlZHVjZXxyZWR1Y2V9YCwgb3IgaXQgY2FuIGJlIGEgcGxhaW4gZnVuY3Rpb25cbiAqIHRoYXQgdGFrZXMgdHdvIHBhcmFtZXRlcnMgYW5kIHJldHVybnMgdGhlIHJlc3VsdCBvZiByZWR1Y2luZyB0aGUgc2Vjb25kXG4gKiBwYXJhbWV0ZXIgaW50byB0aGUgZmlyc3QgKGkuZS4sIGEgcmVkdWNlciBmdW5jdGlvbikuXG4gKlxuICogSWYgdGhlcmUgaXMgbm8gbmVlZCBmb3IgYSB0cmFuc2Zvcm1hdGlvbiwgdGhlbiBwYXNzIGluIHRoZVxuICogYHtAbGluayBtb2R1bGU6eGR1Y2UuaWRlbnRpdHl8aWRlbnRpdHl9YCB0cmFuc2R1Y2VyLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gaXMgZGVmaW5lZCBpbiB7QGxpbmsgbW9kdWxlOnhkY29yZXx4ZGNvcmV9IGFuZCBpcyByZS1leHBvcnRlZFxuICogaGVyZS5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAZnVuY3Rpb24gdG9GdW5jdGlvblxuICogQHNlZSBtb2R1bGU6eGRjb3JlLnRvRnVuY3Rpb25cbiAqIEBwYXJhbSB7bW9kdWxlOnhkY29yZS5UcmFuc2R1Y2VyRnVuY3Rpb259IHRyYW5zZHVjZXJGbiBBIHRyYW5zZHVjZXIgZnVuY3Rpb25cbiAqICAgICB0aGF0IHdyYXBzIGEgdHJhbnNkdWNlciBvYmplY3Qgd2hvc2UgYHN0ZXBgIGZ1bmN0aW9uIHdpbGwgYmUgdXNlZCBhcyBhXG4gKiAgICAgcmVkdWNlciBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7KG1vZHVsZTp4ZGNvcmUuU3RlcEZ1bmN0aW9ufG1vZHVsZTp4ZGNvcmUuUmVkdWNlck9iamVjdCl9IHJlZHVjZXIgQVxuICogICAgIHJlZHVjZXIgdGhhdCBrbm93cyBob3cgdG8gcmVkdWNlIHZhbHVlcyBpbnRvIGFuIG91dHB1dCBjb2xsZWN0aW9uLiBUaGlzXG4gKiAgICAgY2FuIGVpdGhlciBiZSBhIHJlZHVjaW5nIGZ1bmN0aW9uIG9yIGEgcmVkdWNlciBvYmplY3Qgd2hvc2UgYHN0ZXBgXG4gKiAgICAgZnVuY3Rpb24ga25vd3MgaG93IHRvIHBlcmZvcm0gdGhpcyByZWR1Y3Rpb24uXG4gKiBAcmV0dXJucyB7bW9kdWxlOnhkY29yZS5TdGVwRnVuY3Rpb259IEEgcmVkdWNlciBmdW5jdGlvbiB0aGF0IHdpbGwgdHJhbnNmb3JtXG4gKiAgICAgZWxlbWVudHMgdmlhIHRoZSB0cmFuc2R1Y2VyIGZ1bmN0aW9uIGFuZCB0aGVuIHJlZHVjZSB0aGVtIGludG8gd2hhdGV2ZXJcbiAqICAgICBraW5kIG9mIGNvbGxlY3Rpb24gdGhlIHJlZHVjZXIgaW1wbGVtZW50cy5cbiAqL1xuY29uc3QgdG9GdW5jdGlvbiA9IHhkY29yZVRvRnVuY3Rpb247XG5cbmV4cG9ydCB7XG4gIHRyYW5zZHVjZSxcbiAgc2VxdWVuY2UsXG4gIGludG8sXG4gIGFzQXJyYXksXG4gIGFzT2JqZWN0LFxuICBhc1N0cmluZyxcbiAgYXNJdGVyYXRvcixcbiAgY29tcG9zZSxcbiAgdG9SZWR1Y2VyLFxuICB0b0Z1bmN0aW9uLFxufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG5pbXBvcnQgeyBwcm90b2NvbHMgYXMgcCwgdG9UcmFuc2R1Y2VyIH0gZnJvbSBcIkBjaGFua28veGRjb3JlXCI7XG5pbXBvcnQgeyBwYXJzZUZ1bmN0aW9uQXJncywgc2FtZVZhbHVlWmVybyB9IGZyb20gXCJtb2R1bGVzL3V0aWxzXCI7XG5pbXBvcnQgeyBzZXF1ZW5jZSB9IGZyb20gXCJtb2R1bGVzL3RyYW5zZHVjdGlvblwiO1xuXG5mdW5jdGlvbiB1bmlxdWVXaXRoKGNvbGxlY3Rpb24sIGZuKSB7XG4gIGNvbnN0IFtjb2wsIGZ1bmNdID0gcGFyc2VGdW5jdGlvbkFyZ3MoY29sbGVjdGlvbiwgZm4pO1xuICByZXR1cm4gY29sXG4gICAgPyBzZXF1ZW5jZShjb2wsIHVuaXF1ZVdpdGgoZnVuYykpXG4gICAgOiBuZXh0ID0+IHtcbiAgICAgICAgY29uc3QgdW5pcXVlcyA9IFtdO1xuICAgICAgICByZXR1cm4gdG9UcmFuc2R1Y2VyKChhY2MsIHZhbHVlKSA9PiB7XG4gICAgICAgICAgaWYgKHVuaXF1ZXMuc29tZSh1ID0+IGZ1bmModmFsdWUsIHUpKSkge1xuICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICB9XG4gICAgICAgICAgdW5pcXVlcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgICByZXR1cm4gbmV4dFtwLnN0ZXBdKGFjYywgdmFsdWUpO1xuICAgICAgICB9LCBuZXh0KTtcbiAgICAgIH07XG59XG5cbmZ1bmN0aW9uIHVuaXF1ZUJ5KGNvbGxlY3Rpb24sIGZuKSB7XG4gIGNvbnN0IFtjb2wsIGZ1bmNdID0gcGFyc2VGdW5jdGlvbkFyZ3MoY29sbGVjdGlvbiwgZm4pO1xuICByZXR1cm4gdW5pcXVlV2l0aChjb2wsIChhLCBiKSA9PiBzYW1lVmFsdWVaZXJvKGZ1bmMoYSksIGZ1bmMoYikpKTtcbn1cblxuZnVuY3Rpb24gdW5pcXVlKGNvbGxlY3Rpb24pIHtcbiAgcmV0dXJuIHVuaXF1ZVdpdGgoY29sbGVjdGlvbiwgc2FtZVZhbHVlWmVybyk7XG59XG5cbmV4cG9ydCB7IHVuaXF1ZSwgdW5pcXVlQnksIHVuaXF1ZVdpdGggfTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG4vKipcbiAqIEEgY29sbGVjdGlvbiBvZiBtaXNjZWxsYW5lb3VzIGZ1bmN0aW9ucyB0aGF0IGRvbid0IHBhcnRpY3VsYXJseSBmaXQgYW55d2hlcmVcbiAqIGVsc2UuXG4gKlxuICogQG1vZHVsZSB4ZHVjZS91dGlsc1xuICogQHByaXZhdGVcbiAqL1xuXG5pbXBvcnQgeyBpc051bWJlciwgaXNGdW5jdGlvbiB9IGZyb20gXCJAY2hhbmtvL3hkY29yZVwiO1xuXG4vKipcbiAqIERldGVybWluZXMgZXF1YWxpdHkgYnkgdGhlIFNhbWVWYWx1ZVplcm8gbWV0aG9kLCB3aGljaCBkZWZpbmVzIHRoYXQgYE5hTmBcbiAqIGVxdWFscyBpdHNlbGYgYW5kIGArMGAgZXF1YWxzIGAtMGAuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGEgVGhlIGZpcnN0IG51bWJlciB0byBjb21wYXJlLlxuICogQHBhcmFtIHtudW1iZXJ9IGIgVGhlIHNlY29uZCBudW1iZXIgdG8gY29tcGFyZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBFaXRoZXIgYHRydWVgIGlmIHRoZSB0d28gbnVtYmVycyBhcmUgZXF1YWwsIG9yIGBmYWxzZWAgaWZcbiAqICAgICB0aGV5IGFyZSBub3QuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBzYW1lVmFsdWVaZXJvKGEsIGIpIHtcbiAgcmV0dXJuIGEgPT09IGIgfHwgKGlzTmFOKGEpICYmIGlzTmFOKGIpKTtcbn1cblxuLyoqXG4gKiBQYXJzZXMgYXJndW1lbnRzIGZvciB0cmFuc2R1Y2VycyB0aGF0IHRha2UgbnVtYmVycy4gVGhlIHR3byBhcmd1bWVudHMgYXJlXG4gKiBhIGNvbGxlY3Rpb24gYW5kIGEgbnVtYmVyLCBidXQgdGhlIGNvbGxlY3Rpb24gaXMgb3B0aW9uYWwuIFRoaXMgZnVuY3Rpb25cbiAqIHdvcmtzIG91dCB3aGV0aGVyIGEgY29sbGVjdGlvbiBleGlzdHMgYW5kIHJldHVybnMgYSBjb2xsZWN0aW9uICh3aGljaCBtYXkgYmVcbiAqIGBudWxsYCkgYW5kIGEgbnVtYmVyLlxuICpcbiAqIEBwYXJhbSB7Kn0gW2NvbGxlY3Rpb25dIEFuIG9wdGlvbmFsIGNvbGxlY3Rpb24gdGhhdCB0aGUgdHJhbnNkdWNlciB3aWxsIGFjdFxuICogICAgIHVwb24uXG4gKiBAcGFyYW0ge251bWJlcn0gbiBBIG51bWJlciB3aG9zZSBwdXJwb3NlIGRlcGVuZHMgb24gdGhlIHRyYW5zZHVjZXIuXG4gKiBAcmV0dXJucyB7QXJyYXk8KiwgbnVtYmVyPn0gQW4gYXJyYXkgY29udGFpbmluZyB0aGUgY29sbGVjdGlvbiAod2hpY2ggbWF5IGJlXG4gKiAgICAgYG51bGxgKSBhcyB0aGUgZmlyc3QgZWxlbWVudCBhbmQgdGhlIG51bWJlciBhcyB0aGUgc2Vjb25kLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gcGFyc2VOdW1iZXJBcmdzKGNvbGxlY3Rpb24sIG4pIHtcbiAgcmV0dXJuIGlzTnVtYmVyKGNvbGxlY3Rpb24pID8gW251bGwsIGNvbGxlY3Rpb25dIDogW2NvbGxlY3Rpb24sIG5dO1xufVxuXG4vKipcbiAqIFBhcnNlcyBhcmd1bWVudHMgZm9yIHRyYW5zZHVjZXJzIHRoYXQgdGFrZSBmdW5jdGlvbnMuIFRoZSB0d28gYXJndW1lbnRzIGFyZSBhXG4gKiBjb2xsZWN0aW9uIGFuZCBhIGZ1bmN0aW9uLCBidXQgdGhlIGNvbGxlY3Rpb24gaXMgb3B0aW9uYWwuIFRoaXMgZnVuY3Rpb25cbiAqIHdvcmtzIG91dCB3aGljaCBleGlzdCBhbmQgcmV0dXJucyBhIGNvbGxlY3Rpb24gKHdoaWNoIG1heSBiZSBgbnVsbGApIGFuZCBhXG4gKiBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0geyp9IFtjb2xsZWN0aW9uXSBBbiBvcHRpb25hbCBjb2xsZWN0aW9uIHRoYXQgdGhlIHRyYW5zZHVjZXIgd2lsbCBhY3RcbiAqICAgICB1cG9uLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gQSBmdW5jdGlvbiBtZWFudCB0byBhY3QgdmlhIHRoZSB0cmFuc2R1Y2VyLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gcGFyc2VGdW5jdGlvbkFyZ3MoY29sbGVjdGlvbiwgZm4pIHtcbiAgcmV0dXJuIGlzRnVuY3Rpb24oY29sbGVjdGlvbikgPyBbbnVsbCwgY29sbGVjdGlvbl0gOiBbY29sbGVjdGlvbiwgZm5dO1xufVxuXG4vKipcbiAqIEEgY29udmVuaWVuY2UgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBmaXJzdCBrZXkgYW5kIHZhbHVlIGluIGFuIG9iamVjdCBhcyBhXG4gKiB0d28tcHJvcGVydHkgb2JqZWN0LCBvbmUgcHJvcGVydHkgZm9yIHRoZSBrZXkgYW5kIG9uZSBmb3IgdGhlIHZhbHVlLiBUaGlzIGlzXG4gKiBpbnRlbmRlZCB0byB3b3JrIHdpdGggdGhlIHZhbHVlcyBwcm92aWRlZCBieSBhbiBvYmplY3QgaXRlcmF0b3IsIGFzIHRoZVxuICogc3ludGF4IG9mIG9iamVjdHMgZG9lc24ndCB3b3JrIHZlcnkgbmljZWx5IHdpdGggc2luZ2xlLXByb3BlcnR5IG9iamVjdHMuXG4gKlxuICogYGBgXG4gKiBjb25zdCBvYmogPSB7IGM6IDEsIGE6IDIsIGI6IDMgfTtcbiAqIGNvbnN0IGl0ZXIgPSBhc0l0ZXJhdG9yKG9iaik7XG4gKlxuICogbGV0IHZhbHVlID0gaXRlci5uZXh0KCkudmFsdWU7XG4gKiBjb25zb2xlLmxvZyh2YWx1ZSk7ICAgICAgICAgICAgIC8vIC0+IHsgYzogMSB9XG4gKiBjb25zb2xlLmxvZyhwcm9wZXJ0eSh2YWx1ZSkpOyAgIC8vIC0+IHsgazogXCJjXCIsIHY6IDEgfVxuICpcbiAqIHZhbHVlID0gaXRlci5uZXh0KCkudmFsdWU7XG4gKiBjb25zb2xlLmxvZyh2YWx1ZSk7ICAgICAgICAgICAgIC8vIC0+IHsgYTogMiB9XG4gKiBjb25zb2xlLmxvZyhwcm9wZXJ0eSh2YWx1ZSkpOyAgIC8vIC0+IHsgazogXCJhXCIsIHY6IDIgfVxuICpcbiAqIHZhbHVlID0gaXRlci5uZXh0KCkudmFsdWU7XG4gKiBjb25zb2xlLmxvZyh2YWx1ZSk7ICAgICAgICAgICAgIC8vIC0+IHsgYjogMyB9XG4gKiBjb25zb2xlLmxvZyhwcm9wZXJ0eSh2YWx1ZSkpOyAgIC8vIC0+IHsgazogXCJiXCIsIHY6IDMgfVxuICogYGBgXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHBhcmFtIHtvYmplY3R9IG9iaiBUaGUgb2JqZWN0IHdob3NlIGZpcnN0IHByb3BlcnR5IGlzIHJldHVybmVkLlxuICogQHJldHVybiB7bW9kdWxlOnhkdWNlLlByb3BlcnR5T2JqZWN0fSBUaGUgcHJvcGVydHkgYXMgYSB0d28tcHJvcGVydHkgb2JqZWN0LlxuICovXG5mdW5jdGlvbiBrdihvYmopIHtcbiAgY29uc3Qga2V5ID0gT2JqZWN0LmtleXMob2JqKVswXTtcbiAgcmV0dXJuIHsgazoga2V5LCB2OiBvYmpba2V5XSB9O1xufVxuXG4vKipcbiAqIEEgY29udmVuaWVuY2UgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBrZXkgb2YgdGhlIGZpcnN0IHByb3BlcnR5IG9mIGFuXG4gKiBvYmplY3QuIFRoaXMgaXMgbWVhbnQgZm9yIHVzZSB3aXRoIG9iamVjdCBpdGVyYXRvcnMgdG8gbW9yZSBjb252ZW5pZW50bHlcbiAqIGFjY2VzcyBwYXJ0cyBvZiB0aGUgc2luZ2xlLXByb3BlcnR5IG9iamVjdHMgdGhhdCB0aGV5IGVtaXQuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHBhcmFtIHtvYmplY3R9IG9iaiBUaGUgb2JqZWN0IHdob3NlIGZpcnN0IGtleSBpcyByZXR1cm5lZC5cbiAqIEByZXR1cm4geyhTdHJpbmd8U3ltYm9sKX0gVGhlIGtleSBvZiB0aGUgb2JqZWN0J3MgZmlyc3QgcHJvcGVydHkuXG4gKi9cbmZ1bmN0aW9uIGtleShvYmopIHtcbiAgcmV0dXJuIGt2KG9iaikuaztcbn1cblxuLyoqXG4gKiBBIGNvbnZlbmllbmNlIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgdmFsdWUgb2YgdGhlIGZpcnN0IHByb3BlcnR5IG9mIGFuXG4gKiBvYmplY3QuIFRoaXMgaXMgbWVhbnQgZm9yIHVzZSB3aXRoIG9iamVjdCBpdGVyYXRvcnMgdG8gbW9yZSBjb252ZW5pZW50bHlcbiAqIGFjY2VzcyBwYXJ0cyBvZiB0aGUgc2luZ2xlLXByb3BlcnR5IG9iamVjdHMgdGhhdCB0aGV5IGVtaXQuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHBhcmFtIHtvYmplY3R9IG9iaiBUaGUgb2JqZWN0IHdob3NlIGZpcnN0IHZhbHVlIGlzIHJldHVybmVkLlxuICogQHJldHVybiB7Kn0gVGhlIHZhbHVlIG9mIHRoZSBvYmplY3QncyBmaXJzdCBwcm9wZXJ0eS5cbiAqL1xuZnVuY3Rpb24gdmFsdWUob2JqKSB7XG4gIHJldHVybiBrdihvYmopLnY7XG59XG5cbi8qKlxuICogQWNjZXB0cyBhIHByZWRpY2F0ZSBmdW5jdGlvbiBhbmQgcmV0dXJucyBhIG5ldyBwcmVkaWNhdGUgZnVuY3Rpb24gd2hpY2hcbiAqIHJldHVybnMgdGhlIG9wcG9zaXRlIG9mIHRoZSBvcmlnaW5hbCBmdW5jdGlvbi5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcGFyYW0ge21vZHVsZTp4ZHVjZS5QcmVkaWNhdGVGdW5jdGlvbn0gZm4gQSBwcmVkaWNhdGUgZnVuY3Rpb24uXG4gKiBAcmV0dXJucyB7bW9kdWxlOnhkdWNlLlByZWRpY2F0ZUZ1bmN0aW9ufSBBIHByZWRpY2F0ZSBmdW5jdGlvbiB0aGF0IHJldHVybnNcbiAqICAgICB0aGUgb3Bwb3NpdGUgdmFsdWUgYXMgdGhlIHN1cHBsaWVkIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBjb21wbGVtZW50KGZuKSB7XG4gIHJldHVybiAoLi4uYXJncykgPT4gIWZuKC4uLmFyZ3MpO1xufVxuXG5leHBvcnQge1xuICBzYW1lVmFsdWVaZXJvLFxuICBwYXJzZU51bWJlckFyZ3MsXG4gIHBhcnNlRnVuY3Rpb25BcmdzLFxuICBrdixcbiAga2V5LFxuICB2YWx1ZSxcbiAgY29tcGxlbWVudFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=