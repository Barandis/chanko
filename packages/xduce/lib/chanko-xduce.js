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

/***/ "../xduce-tools/lib/chanko-xduce-tools.js":
/*!*****************************************!*\
  !*** .-tools/lib/chanko-xduce-tools.js ***!
  \*****************************************/
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
         * The central module for the transducer engine.
         *
         * All of the functions in this module deal directly with transducers. But
         * first, let's talk about the protocols that are going to be referred to
         * throughout many of the function discussions.
         *
         * ## Protocols
         *
         * One of the key selling points for transducers is that the same transducer can
         * be used on any type of collection. Rather than having to write a new `map`
         * function (for example) for every kind of collection - one for an array, one
         * for a string, one for an iterator, etc. - there is a single `map` transducer
         * that will work with all of them, and potentially with *any* kind of
         * collection. This is possible implementing *protocols* on the collections.
         *
         * A protocol in JavaScript is much like an interface in languages like Java and
         * C#. It is a commitment to providing a certain functionality under a certain
         * name. ES2015 has seen the introduction of an `iterator` protocol, for
         * example, and language support for it (the new `for...of` loop can work with
         * any object that correctly implements the `iterator` protocol).
         *
         * To support transduction, Xduce expects collections to implement four
         * protocols.
         *
         * - `iterator`: a function that returns an iterator (this one is built in to
         *   ES6 JavaScript)
         * - `transducer/init`: a function that returns a new, empty instance of the
         *   output collection
         * - `transducer/step`: a function that takes an accumulator (the result of the
         *   reduction so far) and the next input value, and then returns the
         *   accumulator with the next input value added to it
         * - `transducer/result`: a function that takes the reduced collection and
         *   returns the final output collection
         *
         * `iterator` is the built-in JavaScript protocol. When called, it is expected
         * to return an iterator over the implementing collection. This iterator is an
         * object that has a `next` function. Each call to `next` is expected to return
         * an object with `value` and `done` properties, which respectively hold the
         * next value of the iterator and a boolean to indicate whether the iteration
         * has reached its end. (This is a simplified explanation; see
         * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators|this MDN page}
         * for more detailed information.)
         *
         * `transducer/init` (referred to from now on as `init`) should be a function
         * that takes no parameters and returns a new, empty instance of the output
         * collection. This is the function that defines how to create a new collection
         * of the correct type.
         *
         * `transducer/step` (referred to from now on as `step`) should be a function
         * that takes two parameters. These parameters are the result of the reduction
         * so far (and so is a collection of the output type) and the next value from
         * the input collection. It must return the new reduction result, with the next
         * value incorporated into it. This is the function that defines how reduce a
         * value onto the collection.
         *
         * `transducer/result` (referred to from now on as `result`) should be a
         * function that takes one parameter, which is the fully reduced collection. It
         * should return the final output collection. This affords a chance to make any
         * last-minute adjustments to the reduced collection before returning it.
         *
         * Arrays, strings, and objects are all given support for all of these
         * protocols. Other collections will have to provide their own (though it should
         * be noted that since `iterator` is built-in, many third-party collections will
         * already implement this protocol). As an example, let's add transducer support
         * to a third-party collection, the `Immutable.List` collection from
         * {@link https://facebook.github.io/immutable-js/|immutable-js}.
         *
         * ```
         * Immutable.List.prototype[protocols.init] = () => Immutable.List().asMutable();
         * Immutable.List.prototype[protocols.step] = (acc, input) => acc.push(input);
         * Immutable.List.prototype[protocols.result] = (value) => value.asImmutable();
         * ```
         *
         * `Immutable.List` already implements `iterator`, so we don't have to do it
         * ourselves.
         *
         * The `init` function returns an empty mutable list. This is important for
         * immutable-js because its default lists are immutable, and immutable lists
         * mean that a new list has to be created with every reduction step. It would
         * work fine, but it's quite inefficient.
         *
         * The `step` function adds the next value to the already-created list.
         * `Immutable.List` provides a `push` function that works like an array's
         * `push`, except that it returns the new list with the value pushed onto it.
         * This is perfect for our `step` function.
         *
         * The `result` function converts the now-finished mutable list into an
         * immutable one, which is what's going to be expected if we're transducing
         * something into an `Immutable.List`. In most cases, `result` doesn't have to
         * do any work, but since we're creating an intermediate representation of our
         * collection type here, this lets us create the collection that we actually
         * want to output. (Without `result`, we would have to use immutable lists all
         * the way through, creating a new one with each `step` function, since we
         * wouldn't be able to make this converstion at the end.)
         *
         * With those protocols implemented on the prototype, `Immutable.List`
         * collections can now support any transduction we can offer.
         *
         * ### Protocols
         *
         * After talking a lot about protocols and showing how they're properties added
         * to an object, it's probably pretty obvious that there's been no mention of
         * what the actual names of those properties are. That's what
         * `{@link module:core.protocols|protocols}` is for.
         *
         * The best way to use these keys can be seen in the immutable-js example above.
         * Instead of worrying about the name of the key for the `init` protocol, the
         * value of `protocols.init` is used.
         *
         * `{@link module:core.protocols|protocols}` defines these protocol property
         * names.
         *
         * - `init`
         * - `step`
         * - `result`
         * - `reduced`: used internally to mark a collection as already reduced
         * - `value`: used internally to provide the actual value of a reduced
         *   collection
         *
         * The final two values don't have a lot of use outside the library unless
         * you're writing your own transducers.
         *
         * ## How Objects Are Treated
         *
         * Objects bear some thought because regularly, they aren't candidates for
         * iteration (and therefore for transduction in general). They don't have a very
         * straightforward idea of order, and they have *two* pieces of data (key and
         * value) for every element instead of one. Yet it's undeniable that at least
         * for most transformations, being able to apply them to objects would be quite
         * handy.
         *
         * For that reason, special support is provided end-to-end for objects.
         *
         * ### Object iteration
         *
         * Iterating over an object will produce one object per property of the original
         * object. An order is imposed; by default, this order the same as the ordering
         * of keys in post-ES6 Javascript:
         *
         * 1. Keys that are integers, in ascending numerical order
         * 2. All other string keys, in the order in which they were added to the object
         * 3. All symbol keys, in the order in which they were added to the object
         *
         * The `{@link module:core.iterator|iterator}` function can be passed a sorting
         * function that can sort keys in any other way.
         *
         * The result of the iteration, is a set of objects each with a single property,
         * one for each enumerable own property on the original object. The standard
         * ordering for objects (from ES6 onward) is as follows:
         *
         * ### Transforming objects
         *
         * While iterating over objects in this way is straightforward, the syntax of
         * objects makes it ugly to transform them in this form. Here's an example of a
         * transformation function that makes the object's keys upper-case and adds one
         * to each of the values:
         *
         * ```
         * function transform(obj) {
         *   const key = Object.keys(obj)[0];
         *   const value = obj[key];
         *   return { [key.toUpperCase()]: value + 1 };
         * }
         * ```
         *
         * A helper function named `{@link module:core.property|property}` can improve
         * this by handling the boilerplate.
         *
         * ```
         * function improvedTransform(obj) {
         *   const {k, v} = property(obj);
         *   return { [k.toUpperCase()]: v + 1 };
         * }
         * ```
         *
         * ### Reducing objects
         *
         * The built-in reducers (for arrays, objects, strings, and iterators)
         * understand these single-property objects and reduce them in the proper manner
         * without any further work.
         *
         * That's it for object-object reduction. Converting between objects and other
         * types is another matter.
         *
         * Every transducer function except for `{@link module:core.sequence|sequence}`
         * is capable of turning an object into a different type of collection, turning
         * a different type of collection into an object, or both. Objects are different
         * because they're the only "collections" that have two different pieces of data
         * per element. Because of this, we have to have a strategy on how to move from
         * one to another.
         *
         * Transducing an object into a different type is generally pretty easy. If an
         * object is converted into an array, for instance, the array elements will each
         * be single-property objects, one per property of the original object.
         *
         * Strings are a different story, since encoding a single-property object to a
         * string isn't possible (because every "element" of a string has to be a single
         * character). Strings that are produced from objects will instead just be the
         * object values, concatenated. Because objects are iterated in a particular
         * order, this conversion will always produce the same string, but except in
         * some very specific cases there really isn't a lot of use for this conversion.
         *
         * ```
         * const obj = {a: 1, b: 2};
         *
         * let result = asArray(obj);
         * // result = [{a: 1}, {b: 2}]
         *
         * result = asIterator(obj);
         * // result is an iterator with two values: {a: 1} and {b: 2}
         *
         * result = into(Immutable.List(), obj)
         * // result is an immutable list with two elements: {a: 1} and {b: 2}
         *
         * result = asString(obj);
         * // result is '12'
         * ```
         *
         * The opposite conversion depends on the values inside the collections. If
         * those values are objects, then the result is an object with all of the
         * objects combined (if more than one has the same key, the last one is the one
         * that's kept). Otherwise, keys are created for each of the elements, starting
         * with `0` and increasing from there.
         *
         * This means that converting an object to any non-string collection and back
         * produces the original object.
         *
         * ```
         * let result = asObject([{a: 1}, {b: 2}]);
         * // result = {a: 1, b: 2}
         *
         * result = asObject([1, 2, 3]);
         * // result = {0: 1, 1: 2, 2: 3}
         *
         * result = asObject('hello');
         * // result = {0: 'h', 1: 'e', 2: 'l', 3: 'l', 4: 'o'}
         * ```
         *
         * @module xduce-tools
         */

        /**
         * An iterable as defined by JavaScript.
         *
         * @typedef JsIterable
         * @memberof module:core
         * @property {module:core.JsIterableFunction} Symbol.iterator A function that
         *     produces an iterator when called.
         */

        /**
         * A function that produces an iterator. This is the characteristic property of
         * a JavaScript iterable.
         *
         * @callback JsIterableFunction
         * @memberof module:core
         * @returns {module:core.Iterator} An iterator over the
         *     {@link module:core.JsIterable} that produced it.
         */

        /**
         * An iterable as defined by this library. Since it provides specific support
         * for objects, this type is merely a normal JavaScript iterable *or* a plain
         * object.
         *
         * @typedef {(Object|module:core.JsIterable)} Iterable
         * @memberof module:core
         */

        /**
         * A generic iterator. This conforms to the `iterator` protocol in that it has a
         * `{@link module:core.NextFunction|next}` function that produces
         * {@link module:core.NextValue|`iterator`-compatible objects}.
         *
         * @typedef Iterator
         * @memberof module:core
         * @property {module:core.NextFunction} next A function that, when called,
         *     returns the next iterator value.
         */

        /**
         * The function that satisfies the `iterator` protocol on an object. When
         * called, it returns the next value in the iterator.
         *
         * @callback NextFunction
         * @memberof module:core
         * @returns {module:core.NextValue} The next value in the iterator.
         */

        /**
         * The object returned by a call to `{@link module:core.NextFunction|next}`. It
         * indicates whether the iterator is complete and, if not, what the next value
         * is.
         *
         * @typedef {object} NextValue
         * @memberof module:core
         * @property {*} value The value that the iterator has provided.
         * @property {boolean} done Indicates whether the iterator has completed. If
         *     this is `true`, then `value` will be `undefined` and every subsequent
         *     call to `{@link module:core.NextFunction|next}` will continue to produce
         *     the same value. If it's `false`, then `value` represents the net value in
         *     the iterator, and the next call to
         *     `{@link module:core.NextFunction|next}` will continue to produce the next
         *     value.
         */

        /**
         * A sort function for the keys of an object. This conforms to the normal sort
         * function used in `Array.prototype.sort`.
         *
         * @callback SortFunction
         * @memberof module:core
         * @property {*} a The first value to be sorted.
         * @property {*} b The second value to be sorted.
         * @returns {number} Either `-1` if `a > b`, `1` if `a < b`, or `0` if `a ===
         *     b`.
         */

        /**
         * A function that can have an iterator created for it.
         *
         * @callback IterableFunction
         * @memberof module:core
         * @param {number} [index] The number of times that
         *     `{@link module:core.NextFunction|next}` has been called on the function's
         *     iterator. This will start at `0` for the first call to
         *     `{@link module:core.NextFunction|next}` and increase by one for each
         *     subsequent call.
         * @param {*} [last] The return value of the function the last time
         *     `{@link module:core.NextFunction|next}` was called on its iterator. For
         *     the first call, this is set to `undefined`.
         * @returns {*} The return value for that iteration.
         */

        /**
         * An object representation of a single-property object, but using one property
         * for the key and one for the value. This format is easier to use in
         * transformation functions.
         *
         * @typedef {object} PropertyObject
         * @memberof module:core
         * @property {(String|Symbol)} k The key of the single-property object that this
         *     object represents.
         * @property {*} v The value of the single-property object that this object
         *     represents.
         */

        /**
         * An init function, which provides a new, empty instance of a collection.
         *
         * @callback InitFunction
         * @memberof module:core
         * @returns {*} A new, empty instance of a collection.
         */

        /**
         * A step function, that reduces a collection and a new value to the collection
         * with the value added.
         *
         * @callback StepFunction
         * @memberof module:core
         * @param {*} acc An accumulated value to which the new value is being added.
         * @param {*} value The new value to be added to the accumulated value.
         * @returns {*} The accumulated value with the new value integrated into it.
         */

        /**
         * A result function that optionally modifies the input collection and then
         * returns it. This is used at the end of a reduction to afford a last chance
         * for the transducer to modify the output value.
         *
         * @callback ResultFunction
         * @memberof module:core
         * @param {*} input The value to be modified before being output.
         * @returns {*} The modified value to be output by a transducer.
         */

        /**
         * An object with all of the information necessary to reduce values into a
         * particular kind of collection. These are passed to
         * {@link module:core.reduce|reduce} and like functions.
         *
         * @typedef Reducer
         * @memberof module:core
         * @property {module:core.InitFunction} [Symbol.for("transducer/init")] The
         *     reducer's init function.
         * @property {module:core.StepFunction} Symbol.for("transducer/step") The
         *     reducer's step function.
         * @property {module:core.ResultFunction} Symbol.for("transducer/result") The
         *     reducer's result function.
         */

        /**
         * A collection that can have values reduced into it. Since this library
         * provides explicit support for arrays, objects, and strings, those three are
         * added to the {@link module:core.Reducer} type to define this.
         *
         * @typedef {(Array|String|Object|module:core.Reducer)} Reducible
         * @memberof module:core
         */

        /**
         * A collection that supports not only the regular iteraion over its contents,
         * but also reduction of values into it. It is an intersection type combining
         * {@link module:core.Iterable|Iterable} and
         * {@link module:core.Reducible|Reducible}.
         *
         * @typedef ExplicitIterableReducible
         * @memberof module:core
         * @property {module:core.JsIterableFunction} Symbol.iterator A function that
         *     produces an iterator when called.
         * @property {module:core.InitFunction} [Symbol.for("transducer/init")] The
         *     collection's init function.
         * @property {module:core.StepFunction} Symbol.for("transducer/step") The
         *     collection's step function.
         * @property {module:core.ResultFunction} Symbol.for("transducer/result") The
         *     collection's result function.
         */

        /**
         * The actual type used by reducible collections in this library. It takes the
         * property-based definition and adds built-in types that are specially
         * supported by the library.
         *
         * @typedef {(Array|Object|String|module:core.ExplicitIterableReducible)}
         *     IterableReducible
         * @memberof module:core
         */

        /**
         * A function that transforms data and can be composed with other transducers
         * into a single transducer. The transducers themselves are provided by other
         * libraries; the only involvement of this librar is as a consumer of
         * transducers.
         *
         * Transducers work by having step functions that are known via protocol, and it
         * is these step functions that take a value at a time to be transformed as
         * their arguments. The arguments to the transducers themselves are other
         * transducers that are then composed into a single transducer, which is then
         * returned. The values that are produced are seldom of consequence to the end
         * user; these functions exist to be passed to other functions that deal with
         * transducers.
         *
         * @callback Transducer
         * @memberof module:core
         * @param {module:core.TransducerFunction} xform A transducer to chain this
         *     transducer to.
         * @return {module:core.TransducerFunction} A new transducer consisting of the
         *     composition of this one and `xform`.
         */

        /**
         * An object containing all of the necessary function properties for
         * transforming data and then reducing it into an output value. This is the same
         * as {@link module:core.Reducer|Reducer} except that the `init` property is not
         * optional.
         *
         * @typedef Transducer
         * @memberof module:core
         * @property {module:core.InitFunction} Symbol.for("transducer/init") The
         *     transducer's init function.
         * @property {module:core.StepFunction} Symbol.for("transducer/step") The
         *     transducer's step function.
         * @property {module:core.ResultFunction} Symbol.for("transducer/result") The
         *     transducer's result function.
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
         * @module core/iteration
         * @private
         */

        /**
         * Creates an iterator over an object.
         *
         * Details about this function are included in the documentation for
         * {@link module:xduce-tools.iterator|iterator}.
         *
         * @param {object} obj The object being iterated over.
         * @param {module:xduce-tools.SortFunction} [sortFn] An optional function used to sort
         *     the object keys before iteration. If it isn't provided, the keys will be
         *     sorted in the same order as `Object.keys(obj)` would sort them.
         * @returns {module:xduce-tools.Iterator} An iterator over the properties of `obj`.
         * @private
         */


        function objectIterator(obj, sortFn) {
          return function* () {
            const keys = typeof sortFn === "function" ? Object.keys(obj).sort(sortFn) : Object.keys(obj);
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
         * {@link module:xduce-tools.iterator|iterator}.
         *
         * @param {module:xduce-tools.IterableFunction} fn The function to iterate over.
         * @returns {module:xduce-tools.Iterator} An iterator over the return values of `fn`.
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
         * Creates an iterator over the provided value.
         *
         * For collections that implement the iterable protocol, it's as simple as
         * returning the iterator already defined for that collection.
         *
         * ```
         * const iter = iterator([1, 2, 3]);
         * console.log(iter.next().value);   // -> 1
         * console.log(iter.next().value);   // -> 2
         * console.log(iter.next().value);   // -> 3
         * console.log(iter.next().done);    // -> true
         * ```
         *
         * Objects are specially supported to return an iterator as well, even though
         * they don't natively support the iterable protocol. The iterator's `next`
         * function provides single-property objects, one for each property in the
         * original object, ordered in the standard post-ES6 order for iterating over
         * object keys:
         *
         * 1. Keys that are integers, in ascending numerical order
         * 2. All other string keys, in the order in which they were added to the object
         * 3. All symbol keys, in the order in which they were added to the object
         *
         * If a different order is needed, this function takes a second argument, a sort
         * function, that affects objects only. It is a standard function that would be
         * passed to `Array.prototype.sort` and sorts the keys accordingly.
         *
         * ```
         * const alpha = (a, b) => (a < b ? -1 : b < a ? 1 : 0);
         * const obj = { c: 1, a: 2, b: 3 };
         *
         * const objIter = iterator(obj);
         * console.log(objIter.next().value);   // -> { c: 1 }
         * console.log(objIter.next().value);   // -> { a: 2 }
         * console.log(objIter.next().value);   // -> { b: 3 }
         *
         * const sortedIter = iterator(obj, alpha);
         * console.log(objIter.next().value);   // -> { a: 2 }
         * console.log(objIter.next().value);   // -> { b: 3 }
         * console.log(objIter.next().value);   // -> { c: 1 }
         * ```
         *
         * Additionally, there is special support for passing a function to this
         * function. The iterator returned runs that function for each call to `next`.
         * That function is provided two arguments: the index (starting at `0` for the
         * first call to `next` and increasing by 1 for each call to `next` after) and
         * the return value of the previous call to `next` (for the first call to
         * `next`, this will be `undefined`). The iteration will continue until the
         * first time the iterated function returns `undefined`; at that point the
         * iterator will terminate and return `{ done: true }` off subsequent `next`
         * calls.
         *
         * ```
         * const constIter = iterator(() => 6);
         * console.log(constIter.next().value);   // -> 6
         * console.log(constIter.next().value);   // -> 6
         * // This will continue forever, as long as `next` keeps getting called
         *
         * const indexIter = iterator(x => x * x);
         * console.log(indexIter.next().value);   // -> 0;
         * console.log(indexIter.next().value);   // -> 1;
         * console.log(indexIter.next().value);   // -> 4;
         * console.log(indexIter.next().value);   // -> 9;
         * // This will continue forever or until the numbers get too big for
         * // JavaScript to deal wtih
         *
         * // Using a default value for the `last` parameter, which sets its value
         * // for the first run when it is normally `undefined`
         * const lastIter = iterator((x, last = 1) => last * (x + 1)); // factorial!
         * console.log(lastIter.next().value);   // -> 1
         * console.log(lastIter.next().value);   // -> 2
         * console.log(lastIter.next().value);   // -> 6
         * console.log(lastIter.next().value);   // -> 24
         * // Again, runs forever, though factorials get big very quickly
         *
         * // Iterators terminate when the function returns `undefined`
         * const stopIter = iterator(x => x < 2 ? x : undefined);
         * console.log(stopIter.next().value);   // -> 0
         * console.log(stopIter.next().value);   // -> 1
         * console.log(stopIter.next().done);    // -> true
         * ```
         *
         * If the provided value is not actually iterable (or an object or a function),
         * `null` is returned in place of the iterator.
         *
         * @memberof module:xduce-tools
         * @param {*} value The value to create an iterator over.
         * @param {module:xduce-tools.SortFunction} [sortFn] An optional sort function for
         *     sorting the keys of an object before iteration. It is ignored if `value`
         *     isn't a plain object.
         * @returns {module:xduce-tools.Iterator} An iterator over `value`.
         */


        function iterator(value, sortFn = null) {
          switch (true) {
            case Object(modules_utils__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(value[Symbol.iterator]):
            case Object(modules_utils__WEBPACK_IMPORTED_MODULE_1__["isGeneratorFunction"])(value[Symbol.iterator]):
              return value[Symbol.iterator]();

            case Object(modules_utils__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(value):
              return functionIterator(value);

            case Object(modules_utils__WEBPACK_IMPORTED_MODULE_1__["isObject"])(value):
              return objectIterator(value, sortFn);

            default:
              return null;
          }
        }
        /**
         * Determines whether the passed object is iterable, in terms of what 'iterable'
         * means to this library. In other words, values implementing the `iterable`
         * protocol and plain objects return `true`, while everything else returns
         * `false`. This does not return `true` for functions even though
         * {@link module:xduce-tools.iterator|iterator} can produce an iterator for them,
         * because not all functions work well with
         * {@link module:xduce-tools.iterator|iterator}.
         *
         * @memberof module:xduce-tools
         * @param {*} value The value to test for iterability.
         * @return {boolean} Either `true` if the value is iterable
         *     (`{@link module:xduce-tools.iterator}` will return an iterator for it) or
         *     `false` if it is not.
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
         * The names for these protocols came from a discussion thread
         * ({@link https://github.com/cognitect-labs/transducers-js/issues/20}) from a
         * time when transducers were very much in the forefront. It's the closest thing
         * there is to a standard, so it was adopted here.
         *
         * These are the same symbols as available in my transducer library. They are
         * publicly available from there.
         *
         * @module core/protocol
         * @private
         */

        /**
         * The mapping of protocol names to their respective property key names. The
         * values of this map will depend on whether symbols are available.
         *
         * @typedef {object} ProtocolMap
         * @memberof module:xduce-tools
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
         * @type {module:xduce-tools.ProtocolMap}
         * @memberof module:xduce-tools
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

        function isImplemented(obj, protocol) {
          if (obj == null) {
            return false;
          }

          switch (protocol) {
            case "iterator":
              return Object(modules_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(obj[Symbol.iterator]) || Object(modules_utils__WEBPACK_IMPORTED_MODULE_0__["isGeneratorFunction"])(obj[Symbol.iterator]);

            case "asyncIterator":
              return Object(modules_utils__WEBPACK_IMPORTED_MODULE_0__["isGeneratorFunction"])(obj[Symbol.asyncIterator]);

            case "reduced":
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

      /*! exports provided: init, step, result, toReducer, ARRAY_REDUCER, OBJECT_REDUCER, STRING_REDUCER, toTransducer, toFunction, complete, uncomplete, isCompleted, ensureCompleted, ensureUncompleted, reduce */

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


        __webpack_require__.d(__webpack_exports__, "result", function () {
          return result;
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
         * @module core/reduction
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
         * @param {*} collection A collection to create an init function for. This can
         *     be anything that supports the iteration protocol or a plain object.
         * @return {module:xduce-tools.InitFunction} A function that, when called, returns an
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
         * @param {*} collection A collection to create a step function for. This can be
         *     anything that supports the iteration protocol, a plain object, or a
         *     function.
         * @return {module:xduce-tools.StepFunction} A reduction function for the provided
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
              return (acc, input) => {
                const value = Object(modules_utils__WEBPACK_IMPORTED_MODULE_1__["isObject"])(input) ? input[Object.keys(input)[0]] : input;
                return acc + value;
              };

            case Object(modules_utils__WEBPACK_IMPORTED_MODULE_1__["isArray"])(collection):
              return (acc, input) => {
                acc.push(input);
                return acc;
              };

            case Object(modules_utils__WEBPACK_IMPORTED_MODULE_1__["isObject"])(collection):
              return (acc, input) => {
                let value = input;

                if (!Object(modules_utils__WEBPACK_IMPORTED_MODULE_1__["isObject"])(input)) {
                  // if the input isn't an object, turn it into an object with a
                  // numerical key one greater than the max key already in the
                  // accumulator
                  const max = Object.keys(acc).reduce((a, b) => Math.max(a, b), -1);
                  value = {
                    [max + 1]: input
                  };
                }

                const k = Object.keys(value)[0];
                acc[k] = value[k];
                return acc;
              };

            case Object(modules_utils__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(collection):
              return (acc, input) => collection(acc, input);

            default:
              return null;
          }
        }
        /**
         * Returns a result function for a collection. This is a function that performs
         * any final processing that should be done on the result of a reduction. If the
         * collection doesn't support reduction, `null` is returned.
         *
         * In order to support the conversion of functions into reducers, function
         * support is also provided.
         *
         * @param {*} collection A collection to create a step function for. This can be
         *     anything that supports the iteration protocol, a plain object, or a
         *     function.
         * @return {module:xduce-tools.ResultFunction} A function that, when given a reduced
         *     collection, produces the final output. If the provided collection is not
         *     iterable, `null` will be returned.
         * @private
         */


        function result(collection) {
          switch (true) {
            case Object(modules_protocol__WEBPACK_IMPORTED_MODULE_0__["isImplemented"])(collection, "result"):
              return collection[modules_protocol__WEBPACK_IMPORTED_MODULE_0__["protocols"].result];

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
         * Creates a reducer object from a function or from a built-in reducible type
         * (array, object, or string).
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
         * import { toReducer, reduce } from "@chanko/xduce";
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
         * import { toReducer, transduce } from "@chanko/xduce";
         * import { map } from "@chanko/transducers";
         *
         * const sumReducer = toReducer((acc, input) => acc + input);
         * const sum = transduce([1, 2, 3, 4, 5], map(x => x * x), sumReducer, 0);
         * console.log(sum);   // -> 55
         * ```
         *
         * @memberof module:xduce-tools
         * @param {*} collection An iterable collection or a reducer function.
         * @return {object} An object containing protocol properties for init, step, and
         *     result. This object is suitable for use as a reducer object (one provided
         *     to `{@link xduce.reduce|reduce}` or `{@link xduce.transduce|transduce}`).
         *     If the provided collection is not iterable, all of the properties of this
         *     object will be `null`.
         */


        function toReducer(collection) {
          return Object.freeze({
            [modules_protocol__WEBPACK_IMPORTED_MODULE_0__["protocols"].init]: init(collection),
            [modules_protocol__WEBPACK_IMPORTED_MODULE_0__["protocols"].step]: step(collection),
            [modules_protocol__WEBPACK_IMPORTED_MODULE_0__["protocols"].result]: result(collection)
          });
        }
        /**
         * A reducer object for arrays.
         *
         * @type {module:xduce-tools.Reducer}
         * @private
         */


        const ARRAY_REDUCER = toReducer([]);
        /**
         * A reducer object for objects.
         *
         * @type {module:xduce-tools.Reducer}
         * @private
         */

        const OBJECT_REDUCER = toReducer({});
        /**
         * A reducer object for strings.
         *
         * @type {module:xduce-tools.Reducer}
         * @private
         */

        const STRING_REDUCER = toReducer("");
        /**
         * Creates a transducer from a function and a transducer to chain it to.
         *
         * This is in most respects just like {@link module:xduce-tools.toReducer|toReducer},
         * with two notable differences. One is that it requires a transducer to chain
         * to, and it does the chaining as a part of creating the new transducer. The
         * other is that it includes a usable `init` function, where passing a function
         * to {@link module:xduce-tools.toReducer|toReducer} would create an init function that
         * throws an error if it's called.
         *
         * This function applies the given function as the `step` function of the
         * returned transducer, and the `init` and `result` functions simply call the
         * same functions in the next transducer down the chain. This is precisely what
         * *most* transducers want...`init` and `result` functions are normally handled
         * by the reducer at the end of the transducer chain...but in the rare case when
         * `init` or `result` must do more than this, the transducer must be created
         * manually.
         *
         * This function does not automatically chain the `step` function to the next
         * one down the line, as that can be done in any number of different ways. Thus
         * the function itself should call the `step` function in `xform` in whatever
         * way is appropriate.
         *
         * @memberof module:xduce-tools
         * @param {module:xduce-tools.StepFunction} fn The step function for the transducer.
         * @param {module:xduce-tools.Transducer} xform The next transducer object in the
         *     chain.
         * @returns {module:xduce-tools.Transducer} A new transducer, chaining the supplied
         *     function to the supplied transducer.
         */

        function toTransducer(fn, xform) {
          return {
            [modules_protocol__WEBPACK_IMPORTED_MODULE_0__["protocols"].init]() {
              return xform[modules_protocol__WEBPACK_IMPORTED_MODULE_0__["protocols"].init]();
            },

            [modules_protocol__WEBPACK_IMPORTED_MODULE_0__["protocols"].step]: fn,

            [modules_protocol__WEBPACK_IMPORTED_MODULE_0__["protocols"].result](value) {
              return xform[modules_protocol__WEBPACK_IMPORTED_MODULE_0__["protocols"].result](value);
            }

          };
        }
        /**
         * Creates a reduction function from a transducer and a reducer.
         *
         * This produces a function that's suitable for being passed into other
         * libraries' reduce functions, such as JavaScript's `Array.prototype.reduce` or
         * Lodash's `_.reduce`. It requires both a transformer and a reducer because
         * reduction functions for those libraries must know how to do both. The reducer
         * can be a standard reducer object like the ones sent
         * to`{@link module:xduce-tools.transduce|transduce}` or
         * `{@link module:xduce-tools.reduce|reduce}`, or it can be a plain function that takes
         * two parameters and returns the result of reducing the second parameter into
         * the first.
         *
         * If there is no need for a transformation, then pass in the
         * `{@link module:transducers.identity|identity}` transducer.
         *
         * @memberof module:xduce-tools
         * @param {module:xduce-tools.Reducer} xform A transducer object whose step function
         *     will become the returned reduction function.
         * @param {(module:xduce-tools.StepFunction|module:xduce-tools.Reducer)} reducer A reducer
         *     that knows how to reduce values into an output collection. This can
         *     either be a reducing function or a transducer object whose `step`
         *     function knows how to perform this reduction.
         * @returns {module:xduce-tools.StepFunction} A function that handles both the
         *     transformation and the reduction of a value onto a target function.
         */


        function toFunction(xform, reducer) {
          const r = typeof reducer === "function" ? toReducer(reducer) : reducer;
          const result = xform(r);
          return result[modules_protocol__WEBPACK_IMPORTED_MODULE_0__["protocols"].step].bind(result);
        }
        /**
         * Marks a value as complete.
         *
         * This is done by wrapping the value. This means three things: first, a
         * complete object may be marked as complete again; second, a complete value
         * isn't usable without being uncompleted first; and third any type of value
         * (including `undefined`) may be marked as complete.
         *
         * @memberof module:xduce-tools
         * @param {*} value The value to be completed.
         * @return {*} A completed version of the provided value. This reduction is
         *     achieved by wrapping the value in a marker object.
         */


        function complete(value) {
          return {
            [modules_protocol__WEBPACK_IMPORTED_MODULE_0__["protocols"].reduced]: true,
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
         * @memberof module:xduce-tools
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
         * @memberof module:xduce-tools
         * @param {*} value The value to test for its complete status.
         * @return {boolean} Either `true` if the value is complete, or `false` if it is
         *     not.
         */


        function isCompleted(value) {
          return !!(value === null || value === void 0 ? void 0 : value[modules_protocol__WEBPACK_IMPORTED_MODULE_0__["protocols"].reduced]);
        }
        /**
         * Makes sure that a value is marked as complete; if it is not, it will be
         * marked as complete.
         *
         * This differs from {@link module:xduce-tools.complete|complete} in that if the value
         * is already complete, this function won't complete it again. Therefore thus
         * function can't be used to make a value complete multiple times.
         *
         * @memberof module:xduce-tools
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
         * @memberof module:xduce-tools
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
         * {@link module:xduce-tools.transduce|transduce} instead, as that function makes it
         * easy to combine transformations with reductions and can optionally figure out
         * the initial collection itself.
         *
         * @memberof module:xduce-tools
         * @param {*} collection The input collection. The only requirement of this
         *     collection is that it implement the `iterable` protocol. Special support
         *     is provided by the library for objects, so they can be used as well.
         * @param {module:xduce-tools.Reducer} reducer An object that implements the `step` and
         *     `result` protocols. This object must know how to produce an output
         *     collection through those protocol functions.
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

          return reducer[modules_protocol__WEBPACK_IMPORTED_MODULE_0__["protocols"].result](acc);
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
         * @module core/utils
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
         * @memberof module:xduce-tools
         * @param {*} x The value being tested to see if it is a function.
         * @return {boolean} Either `true` if the test value is a function or `false` if
         *     it is not.
         * @private
         */

        function isFunction(x) {
          return toString.call(x) === "[object Function]";
        }
        /**
         * Determines whether a value is a generator function.
         *
         * @memberof module:xduce-tools
         * @param {*} x The value being tested to see if it is a generator function.
         * @return {boolean} Either `true` if the test value is a generator function or
         *     `false` if it is not.
         * @private
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
         * @memberof module:xduce-tools
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
         * Determines whether a value is a number.
         *
         * This function will return `true` for any number literal or instance of
         * `Number` except for `Infinity` or `NaN`. It will return `false` for strings
         * that happen to also be numbers; the value must be an actual `Number` instance
         * or number literal to return `true`.
         *
         * @memberof module:xduce-tools
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
         * @memberof module:xduce-tools
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
         * @memberof module:xduce-tools
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
/* harmony import */ var _chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chanko/xduce-tools */ "../xduce-tools/lib/chanko-xduce-tools.js");
/* harmony import */ var _chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var modules_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! modules/utils */ "./src/modules/utils.js");
/* harmony import */ var modules_transduction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! modules/transduction */ "./src/modules/transduction.js");
/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */




function identity(collection) {
  return collection ? Object(modules_transduction__WEBPACK_IMPORTED_MODULE_2__["sequence"])(collection, identity()) : xform => Object(_chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__["toTransducer"])((acc, value) => xform[_chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](acc, value), xform);
}

function flatten(collection) {
  return collection ? Object(modules_transduction__WEBPACK_IMPORTED_MODULE_2__["sequence"])(collection, flatten()) : xform => Object(_chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__["toTransducer"])((acc, value) => {
    const subXform = Object(_chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__["toTransducer"])((acc, value) => {
      const v = xform[_chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](acc, value);
      return Object(_chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__["isCompleted"])(v) ? Object(_chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__["complete"])(v) : v;
    }, xform);
    return Object(_chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__["isIterable"])(value) ? Object(_chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__["reduce"])(value, subXform, acc) : subXform[_chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](acc, value);
  }, xform);
}

function repeat(collection, n) {
  const [col, num] = Object(modules_utils__WEBPACK_IMPORTED_MODULE_1__["parseNumberArgs"])(collection, n);
  return col ? Object(modules_transduction__WEBPACK_IMPORTED_MODULE_2__["sequence"])(col, repeat(num)) : xform => Object(_chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__["toTransducer"])((acc, value) => {
    let result = acc;

    for (let i = 0; i < num; i++) {
      result = xform[_chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](result, value);

      if (Object(_chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__["isCompleted"])(result)) {
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
/* harmony import */ var _chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chanko/xduce-tools */ "../xduce-tools/lib/chanko-xduce-tools.js");
/* harmony import */ var _chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__);
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
      [_chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__["protocols"].init]() {
        return xform[_chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__["protocols"].init]();
      },

      [_chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](acc, value) {
        part[count++] = value;

        if (count === num) {
          const out = part.slice(0, num);
          part = [];
          count = 0;
          return xform[_chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](acc, out);
        }

        return acc;
      },

      [_chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__["protocols"].result](value) {
        if (count > 0) {
          return Object(_chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__["ensureUncompleted"])(xform[_chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](value, part.slice(0, count)));
        }

        return xform[_chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__["protocols"].result](value);
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
      [_chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__["protocols"].init]() {
        return xform[_chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__["protocols"].init]();
      },

      [_chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](acc, value) {
        const current = func(value);
        let result = acc;

        if (last === NO_VALUE || Object(modules_utils__WEBPACK_IMPORTED_MODULE_1__["sameValueZero"])(current, last)) {
          part.push(value);
        } else {
          result = xform[_chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](result, part);
          part = [value];
        }

        last = current;
        return result;
      },

      [_chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__["protocols"].result](value) {
        const count = part.length;

        if (count > 0) {
          return Object(_chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__["ensureUncompleted"])(xform[_chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](value, part.slice(0, count)));
        }

        return xform[_chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__["protocols"].result](value);
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
/* harmony import */ var _chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chanko/xduce-tools */ "../xduce-tools/lib/chanko-xduce-tools.js");
/* harmony import */ var _chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__);
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
    return Object(_chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__["toTransducer"])((acc, value) => {
      if (last !== NO_VALUE && func(value, last)) {
        return acc;
      }

      last = value;
      return xform[_chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](acc, value);
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
/* harmony import */ var _chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chanko/xduce-tools */ "../xduce-tools/lib/chanko-xduce-tools.js");
/* harmony import */ var _chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__);
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
    return Object(_chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__["toTransducer"])((acc, value) => i++ < num ? acc : xform[_chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](acc, value), xform);
  };
}

function dropWhile(collection, fn) {
  const [col, func] = Object(modules_utils__WEBPACK_IMPORTED_MODULE_1__["parseFunctionArgs"])(collection, fn);
  return col ? Object(modules_transduction__WEBPACK_IMPORTED_MODULE_2__["sequence"])(col, dropWhile(func)) : xform => {
    let dropping = true;
    return Object(_chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__["toTransducer"])((acc, value) => {
      if (dropping) {
        if (func(value)) {
          return acc;
        }

        dropping = false;
      }

      return xform[_chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](acc, value);
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
/* harmony import */ var _chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chanko/xduce-tools */ "../xduce-tools/lib/chanko-xduce-tools.js");
/* harmony import */ var _chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__);
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
  return col ? Object(modules_transduction__WEBPACK_IMPORTED_MODULE_2__["sequence"])(col, filter(func)) : xform => Object(_chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__["toTransducer"])((acc, value) => func(value) ? xform[_chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](acc, value) : acc, xform);
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
/* harmony import */ var _chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chanko/xduce-tools */ "../xduce-tools/lib/chanko-xduce-tools.js");
/* harmony import */ var _chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__);
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
  return col ? Object(modules_transduction__WEBPACK_IMPORTED_MODULE_2__["sequence"])(col, map(func)) : xform => Object(_chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__["toTransducer"])((acc, value) => xform[_chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](acc, func(value)), xform);
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
/* harmony import */ var _chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chanko/xduce-tools */ "../xduce-tools/lib/chanko-xduce-tools.js");
/* harmony import */ var _chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__);
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
    return Object(_chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__["toTransducer"])((acc, value) => {
      let result = acc;

      if (i < num) {
        result = xform[_chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](acc, value);

        if (i === num - 1) {
          result = Object(_chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__["ensureCompleted"])(result);
        }
      }

      i++;
      return result;
    }, xform);
  };
}

function takeWhile(collection, fn) {
  const [col, func] = Object(modules_utils__WEBPACK_IMPORTED_MODULE_1__["parseFunctionArgs"])(collection, fn);
  return col ? Object(modules_transduction__WEBPACK_IMPORTED_MODULE_2__["sequence"])(col, takeWhile(func)) : xform => Object(_chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__["toTransducer"])((acc, value) => func(value) ? xform[_chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](acc, value) : Object(_chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__["ensureCompleted"])(acc), xform);
}

function takeNth(collection, n) {
  const [col, num] = Object(modules_utils__WEBPACK_IMPORTED_MODULE_1__["parseNumberArgs"])(collection, n);
  return col ? Object(modules_transduction__WEBPACK_IMPORTED_MODULE_2__["sequence"])(col, takeNth(num)) : xform => {
    let i = -1;
    return Object(_chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__["toTransducer"])((acc, value) => ++i % num === 0 ? xform[_chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](acc, value) : acc, xform);
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
/* harmony import */ var _chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chanko/xduce-tools */ "../xduce-tools/lib/chanko-xduce-tools.js");
/* harmony import */ var _chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toReducer", function() { return _chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__["toReducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toFunction", function() { return _chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__["toFunction"]; });

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
    [_chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](xiter, input) {
      xiter.items.unshift(input);
      return xiter;
    },

    [_chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__["protocols"].result](value) {
      return value;
    }

  };
  const iter = Object(_chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__["iterator"])(collection);
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
        xf[_chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__["protocols"].result](result);
        break;
      }

      completed = Object(_chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__["isCompleted"])(xf[_chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](result, stepValue.value));
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
 *   [p.result](x) { return x; },
 *   [p.step](acc, x) {
 *     acc.push(x);
 *     return acc;
 *   }
 * };
 *
 * const stringReducer = {
 *   [p.init]() { return ''; },
 *   [p.result](x) { return x; },
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
  const r = Object(_chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(reducer) ? Object(_chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__["toReducer"])(reducer) : reducer;
  const i = init !== null && init !== void 0 ? init : r[_chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__["protocols"].init]();
  const xf = xform ? xform(r) : r;
  return Object(_chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__["reduce"])(collection, xf, i);
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
  return transduce(collection, xform, Object(_chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__["toReducer"])([]));
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
  return transduce(collection, xform, Object(_chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__["toReducer"])({}));
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
  return transduce(collection, xform, Object(_chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__["toReducer"])(""));
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
  return xform ? transducingIterator(collection, xform) : Object(_chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__["iterator"])(collection);
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
    case Object(_chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__["isArray"])(collection):
      return asArray(collection, xform);

    case Object(_chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__["isObject"])(collection):
      return asObject(collection, xform);

    case Object(_chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__["isString"])(collection):
      return asString(collection, xform);

    case Object(_chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__["isImplemented"])(collection, "step"):
      return transduce(collection, xform, collection);

    case Object(_chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__["isImplemented"])(collection, "iterator"):
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
    case Object(_chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__["isArray"])(target):
      return transduce(collection, xform, Object(_chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__["toReducer"])([]), target);

    case Object(_chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__["isObject"])(target):
      return transduce(collection, xform, Object(_chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__["toReducer"])({}), target);

    case Object(_chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__["isString"])(target):
      return transduce(collection, xform, Object(_chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__["toReducer"])(""), target);

    case Object(_chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__["isImplemented"])(target, "step"):
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
/* harmony import */ var _chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chanko/xduce-tools */ "../xduce-tools/lib/chanko-xduce-tools.js");
/* harmony import */ var _chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__);
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
    return Object(_chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__["toTransducer"])((acc, value) => {
      if (uniques.some(u => func(value, u))) {
        return acc;
      }

      uniques.push(value);
      return xform[_chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](acc, value);
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
/* harmony import */ var _chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chanko/xduce-tools */ "../xduce-tools/lib/chanko-xduce-tools.js");
/* harmony import */ var _chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__);
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
  return Object(_chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(collection) ? [null, collection] : [collection, n];
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
  return Object(_chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(collection) ? [null, collection] : [collection, fn];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly94ZHVjZS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8veGR1Y2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8veGR1Y2UvdG9vbHMvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL3hkdWNlL3Rvb2xzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3hkdWNlL3Rvb2xzL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly94ZHVjZS90b29scy9zcmMvbW9kdWxlcy9pdGVyYXRpb24uanMiLCJ3ZWJwYWNrOi8veGR1Y2UvdG9vbHMvc3JjL21vZHVsZXMvcHJvdG9jb2wuanMiLCJ3ZWJwYWNrOi8veGR1Y2UvdG9vbHMvc3JjL21vZHVsZXMvcmVkdWN0aW9uLmpzIiwid2VicGFjazovL3hkdWNlL3Rvb2xzL3NyYy9tb2R1bGVzL3V0aWxzLmpzIiwid2VicGFjazovL3hkdWNlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3hkdWNlLy4vc3JjL21vZHVsZXMvYmFzaWMuanMiLCJ3ZWJwYWNrOi8veGR1Y2UvLi9zcmMvbW9kdWxlcy9jaHVuay5qcyIsIndlYnBhY2s6Ly94ZHVjZS8uL3NyYy9tb2R1bGVzL2Rpc3RpbmN0LmpzIiwid2VicGFjazovL3hkdWNlLy4vc3JjL21vZHVsZXMvZHJvcC5qcyIsIndlYnBhY2s6Ly94ZHVjZS8uL3NyYy9tb2R1bGVzL2ZpbHRlci5qcyIsIndlYnBhY2s6Ly94ZHVjZS8uL3NyYy9tb2R1bGVzL21hcC5qcyIsIndlYnBhY2s6Ly94ZHVjZS8uL3NyYy9tb2R1bGVzL3Rha2UuanMiLCJ3ZWJwYWNrOi8veGR1Y2UvLi9zcmMvbW9kdWxlcy90cmFuc2R1Y3Rpb24uanMiLCJ3ZWJwYWNrOi8veGR1Y2UvLi9zcmMvbW9kdWxlcy91bmlxdWUuanMiLCJ3ZWJwYWNrOi8veGR1Y2UvLi9zcmMvbW9kdWxlcy91dGlscy5qcyJdLCJuYW1lcyI6WyJrZXlzIiwiT2JqZWN0IiwiaW5kZXgiLCJrIiwib2JqIiwiY3VycmVudCIsImZuIiwic29ydEZuIiwiaXNGdW5jdGlvbiIsInZhbHVlIiwiU3ltYm9sIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImZ1bmN0aW9uSXRlcmF0b3IiLCJpc09iamVjdCIsIm9iamVjdEl0ZXJhdG9yIiwiaXNJbXBsZW1lbnRlZCIsInByb3RvY29scyIsImluaXQiLCJzdGVwIiwicmVzdWx0IiwicmVkdWNlZCIsImNvbGxlY3Rpb24iLCJwIiwiaXNTdHJpbmciLCJpc0FycmF5IiwiRXJyb3IiLCJpbnB1dCIsImFjYyIsIm1heCIsIk1hdGgiLCJBUlJBWV9SRURVQ0VSIiwidG9SZWR1Y2VyIiwiT0JKRUNUX1JFRFVDRVIiLCJTVFJJTkdfUkVEVUNFUiIsInhmb3JtIiwiciIsImlzQ29tcGxldGVkIiwiY29tcGxldGUiLCJ1bmNvbXBsZXRlIiwiaXRlciIsIml0ZXJhdG9yIiwibmFtZSIsInJlZHVjZXIiLCJ0b1N0cmluZyIsInByb3RvIiwiY3RvciIsImlzRmluaXRlIiwiQXJyYXkiLCJpZGVudGl0eSIsInNlcXVlbmNlIiwidG9UcmFuc2R1Y2VyIiwiZmxhdHRlbiIsInN1Ylhmb3JtIiwidiIsImlzSXRlcmFibGUiLCJyZWR1Y2UiLCJyZXBlYXQiLCJuIiwiY29sIiwibnVtIiwicGFyc2VOdW1iZXJBcmdzIiwiaSIsIk5PX1ZBTFVFIiwiY2h1bmsiLCJjb3VudCIsInBhcnQiLCJvdXQiLCJzbGljZSIsImVuc3VyZVVuY29tcGxldGVkIiwiY2h1bmtCeSIsImZ1bmMiLCJwYXJzZUZ1bmN0aW9uQXJncyIsImxhc3QiLCJzYW1lVmFsdWVaZXJvIiwicHVzaCIsImxlbmd0aCIsImRpc3RpbmN0V2l0aCIsImRpc3RpbmN0QnkiLCJhIiwiYiIsImRpc3RpbmN0IiwiZHJvcCIsImRyb3BXaGlsZSIsImRyb3BwaW5nIiwiZmlsdGVyIiwicmVqZWN0IiwiY29tcGxlbWVudCIsIm1hcCIsImZsYXRNYXAiLCJjb21wb3NlIiwidGFrZSIsImVuc3VyZUNvbXBsZXRlZCIsInRha2VXaGlsZSIsInRha2VOdGgiLCJ0cmFuc2R1Y2luZ0l0ZXJhdG9yIiwic3RlcFJlZHVjZXIiLCJ4aXRlciIsIml0ZW1zIiwidW5zaGlmdCIsInhmIiwiY29tcGxldGVkIiwibmV4dCIsImRvbmUiLCJwb3AiLCJzdGVwVmFsdWUiLCJ0cmFuc2R1Y2UiLCJhc0FycmF5IiwiYXNPYmplY3QiLCJhc1N0cmluZyIsImFzSXRlcmF0b3IiLCJpbnRvIiwidGFyZ2V0IiwiZm5zIiwicmV2ZXJzZWQiLCJyZXZlcnNlIiwidW5pcXVlV2l0aCIsInVuaXF1ZXMiLCJzb21lIiwidSIsInVuaXF1ZUJ5IiwidW5pcXVlIiwiaXNOYU4iLCJpc051bWJlciIsImt2Iiwia2V5IiwiYXJncyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBLFlBQ0EsMkJBREEsS0FFQSxFQUtBO0FBQ0MsQ0FURCxFQVNDLElBVEQsRUFTQztBQUNEOzs7OztBQ1ZBO0FBQUE7O0FBQ0E7QUFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQTs7O0FBRUE7QUFBQTs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBOztBQUNBOzs7QUFBQTtBQUNBO0FBQUEscUJBREE7O0FBRUE7QUFBQSxrQkFGQTs7QUFHQTtBQUFBO0FBQ0E7O0FBSkE7OztBQU1BO0FBQUE7O0FBQ0E7O0FBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUE7QUFDQTtBQUFBOzs7OztBQUdBO0FBQUE7O0FBQ0E7OztBQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBMEMsNEJBQTFDO0FBQTBDO0FBQTFDO0FBQ0E7QUFBQTtBQUNBOztBQUFBLE9BSkE7OztBQU1BO0FBQUE7O0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBd0Q7QUFBeEQ7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQWlEO0FBQWpEO0FBQ0E7QUFBQSxPQUxBOzs7QUFPQTtBQUFBOztBQUNBO0FBQUE7O0FBQ0E7QUFBQTs7QUFDQTtBQUFBOztBQUNBO0FBQUE7O0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOztBQUFBO0FBQ0E7O0FBQUE7QUFDQTs7QUFBQTtBQUNBOztBQUFBO0FBQ0E7OztBQUFBO0FBQXlDLDBCQUF6QztBQUF5QztBQUF6QztBQUNBOztBQUFBO0FBQWdIO0FBQXFCLFNBQXJJLENBQXFJLElBQXJJLENBQXFJLElBQXJJLEVBQXFJLEdBQXJJO0FBQ0E7O0FBQUE7QUFDQTtBQUFBLE9BVEE7OztBQVdBO0FBQUE7O0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBMkI7QUFBNEIsU0FEdkQ7QUFFQTtBQUFBO0FBQWlDO0FBQWUsU0FGaEQ7QUFHQTs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUEsT0FOQTs7O0FBUUE7QUFBQTs7QUFDQTs7O0FBQUE7QUFBc0Q7QUFBK0QsT0FBckg7OztBQUVBO0FBQUE7O0FBQ0E7OztBQUFBOzs7OztBQUdBO0FBQUE7O0FBQ0E7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7O0FBTUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QixDQUFDLElBQUQsRUFBT0EsVUFBUCxDQUF6QixHQUE4QyxDQUFDQSxVQUFELEVBQWFmLEVBQWIsQ0FBckQ7QUFDRDtBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJCQSxTQUFTcUgsRUFBVCxDQUFZdkgsR0FBWixFQUFpQjtBQUNmLFFBQU13SCxHQUFHLEdBQUczSCxNQUFNLENBQUNELElBQVAsQ0FBWUksR0FBWixFQUFpQixDQUFqQixDQUFaO0FBQ0EsU0FBTztBQUFFRCxLQUFDLEVBQUV5SCxHQUFMO0FBQVV2RSxLQUFDLEVBQUVqRCxHQUFHLENBQUN3SCxHQUFEO0FBQWhCLEdBQVA7QUFDRDtBQUVEOzs7Ozs7Ozs7OztBQVNBLFNBQVNBLEdBQVQsQ0FBYXhILEdBQWIsRUFBa0I7QUFDaEIsU0FBT3VILEVBQUUsQ0FBQ3ZILEdBQUQsQ0FBRixDQUFRRCxDQUFmO0FBQ0Q7QUFFRDs7Ozs7Ozs7Ozs7QUFTQSxTQUFTTSxLQUFULENBQWVMLEdBQWYsRUFBb0I7QUFDbEIsU0FBT3VILEVBQUUsQ0FBQ3ZILEdBQUQsQ0FBRixDQUFRaUQsQ0FBZjtBQUNEO0FBRUQ7Ozs7Ozs7Ozs7O0FBU0EsU0FBU2lDLFVBQVQsQ0FBb0JoRixFQUFwQixFQUF3QjtBQUN0QixTQUFPLENBQUMsR0FBR3VILElBQUosS0FBYSxDQUFDdkgsRUFBRSxDQUFDLEdBQUd1SCxJQUFKLENBQXZCO0FBQ0QiLCJmaWxlIjoiY2hhbmtvLXhkdWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wieGR1Y2VcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wieGR1Y2VcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInRvb2xzXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInRvb2xzXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cbi8qKlxuICogVGhlIGNlbnRyYWwgbW9kdWxlIGZvciB0aGUgdHJhbnNkdWNlciBlbmdpbmUuXG4gKlxuICogQWxsIG9mIHRoZSBmdW5jdGlvbnMgaW4gdGhpcyBtb2R1bGUgZGVhbCBkaXJlY3RseSB3aXRoIHRyYW5zZHVjZXJzLiBCdXRcbiAqIGZpcnN0LCBsZXQncyB0YWxrIGFib3V0IHRoZSBwcm90b2NvbHMgdGhhdCBhcmUgZ29pbmcgdG8gYmUgcmVmZXJyZWQgdG9cbiAqIHRocm91Z2hvdXQgbWFueSBvZiB0aGUgZnVuY3Rpb24gZGlzY3Vzc2lvbnMuXG4gKlxuICogIyMgUHJvdG9jb2xzXG4gKlxuICogT25lIG9mIHRoZSBrZXkgc2VsbGluZyBwb2ludHMgZm9yIHRyYW5zZHVjZXJzIGlzIHRoYXQgdGhlIHNhbWUgdHJhbnNkdWNlciBjYW5cbiAqIGJlIHVzZWQgb24gYW55IHR5cGUgb2YgY29sbGVjdGlvbi4gUmF0aGVyIHRoYW4gaGF2aW5nIHRvIHdyaXRlIGEgbmV3IGBtYXBgXG4gKiBmdW5jdGlvbiAoZm9yIGV4YW1wbGUpIGZvciBldmVyeSBraW5kIG9mIGNvbGxlY3Rpb24gLSBvbmUgZm9yIGFuIGFycmF5LCBvbmVcbiAqIGZvciBhIHN0cmluZywgb25lIGZvciBhbiBpdGVyYXRvciwgZXRjLiAtIHRoZXJlIGlzIGEgc2luZ2xlIGBtYXBgIHRyYW5zZHVjZXJcbiAqIHRoYXQgd2lsbCB3b3JrIHdpdGggYWxsIG9mIHRoZW0sIGFuZCBwb3RlbnRpYWxseSB3aXRoICphbnkqIGtpbmQgb2ZcbiAqIGNvbGxlY3Rpb24uIFRoaXMgaXMgcG9zc2libGUgaW1wbGVtZW50aW5nICpwcm90b2NvbHMqIG9uIHRoZSBjb2xsZWN0aW9ucy5cbiAqXG4gKiBBIHByb3RvY29sIGluIEphdmFTY3JpcHQgaXMgbXVjaCBsaWtlIGFuIGludGVyZmFjZSBpbiBsYW5ndWFnZXMgbGlrZSBKYXZhIGFuZFxuICogQyMuIEl0IGlzIGEgY29tbWl0bWVudCB0byBwcm92aWRpbmcgYSBjZXJ0YWluIGZ1bmN0aW9uYWxpdHkgdW5kZXIgYSBjZXJ0YWluXG4gKiBuYW1lLiBFUzIwMTUgaGFzIHNlZW4gdGhlIGludHJvZHVjdGlvbiBvZiBhbiBgaXRlcmF0b3JgIHByb3RvY29sLCBmb3JcbiAqIGV4YW1wbGUsIGFuZCBsYW5ndWFnZSBzdXBwb3J0IGZvciBpdCAodGhlIG5ldyBgZm9yLi4ub2ZgIGxvb3AgY2FuIHdvcmsgd2l0aFxuICogYW55IG9iamVjdCB0aGF0IGNvcnJlY3RseSBpbXBsZW1lbnRzIHRoZSBgaXRlcmF0b3JgIHByb3RvY29sKS5cbiAqXG4gKiBUbyBzdXBwb3J0IHRyYW5zZHVjdGlvbiwgWGR1Y2UgZXhwZWN0cyBjb2xsZWN0aW9ucyB0byBpbXBsZW1lbnQgZm91clxuICogcHJvdG9jb2xzLlxuICpcbiAqIC0gYGl0ZXJhdG9yYDogYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYW4gaXRlcmF0b3IgKHRoaXMgb25lIGlzIGJ1aWx0IGluIHRvXG4gKiAgIEVTNiBKYXZhU2NyaXB0KVxuICogLSBgdHJhbnNkdWNlci9pbml0YDogYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBuZXcsIGVtcHR5IGluc3RhbmNlIG9mIHRoZVxuICogICBvdXRwdXQgY29sbGVjdGlvblxuICogLSBgdHJhbnNkdWNlci9zdGVwYDogYSBmdW5jdGlvbiB0aGF0IHRha2VzIGFuIGFjY3VtdWxhdG9yICh0aGUgcmVzdWx0IG9mIHRoZVxuICogICByZWR1Y3Rpb24gc28gZmFyKSBhbmQgdGhlIG5leHQgaW5wdXQgdmFsdWUsIGFuZCB0aGVuIHJldHVybnMgdGhlXG4gKiAgIGFjY3VtdWxhdG9yIHdpdGggdGhlIG5leHQgaW5wdXQgdmFsdWUgYWRkZWQgdG8gaXRcbiAqIC0gYHRyYW5zZHVjZXIvcmVzdWx0YDogYSBmdW5jdGlvbiB0aGF0IHRha2VzIHRoZSByZWR1Y2VkIGNvbGxlY3Rpb24gYW5kXG4gKiAgIHJldHVybnMgdGhlIGZpbmFsIG91dHB1dCBjb2xsZWN0aW9uXG4gKlxuICogYGl0ZXJhdG9yYCBpcyB0aGUgYnVpbHQtaW4gSmF2YVNjcmlwdCBwcm90b2NvbC4gV2hlbiBjYWxsZWQsIGl0IGlzIGV4cGVjdGVkXG4gKiB0byByZXR1cm4gYW4gaXRlcmF0b3Igb3ZlciB0aGUgaW1wbGVtZW50aW5nIGNvbGxlY3Rpb24uIFRoaXMgaXRlcmF0b3IgaXMgYW5cbiAqIG9iamVjdCB0aGF0IGhhcyBhIGBuZXh0YCBmdW5jdGlvbi4gRWFjaCBjYWxsIHRvIGBuZXh0YCBpcyBleHBlY3RlZCB0byByZXR1cm5cbiAqIGFuIG9iamVjdCB3aXRoIGB2YWx1ZWAgYW5kIGBkb25lYCBwcm9wZXJ0aWVzLCB3aGljaCByZXNwZWN0aXZlbHkgaG9sZCB0aGVcbiAqIG5leHQgdmFsdWUgb2YgdGhlIGl0ZXJhdG9yIGFuZCBhIGJvb2xlYW4gdG8gaW5kaWNhdGUgd2hldGhlciB0aGUgaXRlcmF0aW9uXG4gKiBoYXMgcmVhY2hlZCBpdHMgZW5kLiAoVGhpcyBpcyBhIHNpbXBsaWZpZWQgZXhwbGFuYXRpb247IHNlZVxuICoge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvR3VpZGUvSXRlcmF0b3JzX2FuZF9HZW5lcmF0b3JzfHRoaXMgTUROIHBhZ2V9XG4gKiBmb3IgbW9yZSBkZXRhaWxlZCBpbmZvcm1hdGlvbi4pXG4gKlxuICogYHRyYW5zZHVjZXIvaW5pdGAgKHJlZmVycmVkIHRvIGZyb20gbm93IG9uIGFzIGBpbml0YCkgc2hvdWxkIGJlIGEgZnVuY3Rpb25cbiAqIHRoYXQgdGFrZXMgbm8gcGFyYW1ldGVycyBhbmQgcmV0dXJucyBhIG5ldywgZW1wdHkgaW5zdGFuY2Ugb2YgdGhlIG91dHB1dFxuICogY29sbGVjdGlvbi4gVGhpcyBpcyB0aGUgZnVuY3Rpb24gdGhhdCBkZWZpbmVzIGhvdyB0byBjcmVhdGUgYSBuZXcgY29sbGVjdGlvblxuICogb2YgdGhlIGNvcnJlY3QgdHlwZS5cbiAqXG4gKiBgdHJhbnNkdWNlci9zdGVwYCAocmVmZXJyZWQgdG8gZnJvbSBub3cgb24gYXMgYHN0ZXBgKSBzaG91bGQgYmUgYSBmdW5jdGlvblxuICogdGhhdCB0YWtlcyB0d28gcGFyYW1ldGVycy4gVGhlc2UgcGFyYW1ldGVycyBhcmUgdGhlIHJlc3VsdCBvZiB0aGUgcmVkdWN0aW9uXG4gKiBzbyBmYXIgKGFuZCBzbyBpcyBhIGNvbGxlY3Rpb24gb2YgdGhlIG91dHB1dCB0eXBlKSBhbmQgdGhlIG5leHQgdmFsdWUgZnJvbVxuICogdGhlIGlucHV0IGNvbGxlY3Rpb24uIEl0IG11c3QgcmV0dXJuIHRoZSBuZXcgcmVkdWN0aW9uIHJlc3VsdCwgd2l0aCB0aGUgbmV4dFxuICogdmFsdWUgaW5jb3Jwb3JhdGVkIGludG8gaXQuIFRoaXMgaXMgdGhlIGZ1bmN0aW9uIHRoYXQgZGVmaW5lcyBob3cgcmVkdWNlIGFcbiAqIHZhbHVlIG9udG8gdGhlIGNvbGxlY3Rpb24uXG4gKlxuICogYHRyYW5zZHVjZXIvcmVzdWx0YCAocmVmZXJyZWQgdG8gZnJvbSBub3cgb24gYXMgYHJlc3VsdGApIHNob3VsZCBiZSBhXG4gKiBmdW5jdGlvbiB0aGF0IHRha2VzIG9uZSBwYXJhbWV0ZXIsIHdoaWNoIGlzIHRoZSBmdWxseSByZWR1Y2VkIGNvbGxlY3Rpb24uIEl0XG4gKiBzaG91bGQgcmV0dXJuIHRoZSBmaW5hbCBvdXRwdXQgY29sbGVjdGlvbi4gVGhpcyBhZmZvcmRzIGEgY2hhbmNlIHRvIG1ha2UgYW55XG4gKiBsYXN0LW1pbnV0ZSBhZGp1c3RtZW50cyB0byB0aGUgcmVkdWNlZCBjb2xsZWN0aW9uIGJlZm9yZSByZXR1cm5pbmcgaXQuXG4gKlxuICogQXJyYXlzLCBzdHJpbmdzLCBhbmQgb2JqZWN0cyBhcmUgYWxsIGdpdmVuIHN1cHBvcnQgZm9yIGFsbCBvZiB0aGVzZVxuICogcHJvdG9jb2xzLiBPdGhlciBjb2xsZWN0aW9ucyB3aWxsIGhhdmUgdG8gcHJvdmlkZSB0aGVpciBvd24gKHRob3VnaCBpdCBzaG91bGRcbiAqIGJlIG5vdGVkIHRoYXQgc2luY2UgYGl0ZXJhdG9yYCBpcyBidWlsdC1pbiwgbWFueSB0aGlyZC1wYXJ0eSBjb2xsZWN0aW9ucyB3aWxsXG4gKiBhbHJlYWR5IGltcGxlbWVudCB0aGlzIHByb3RvY29sKS4gQXMgYW4gZXhhbXBsZSwgbGV0J3MgYWRkIHRyYW5zZHVjZXIgc3VwcG9ydFxuICogdG8gYSB0aGlyZC1wYXJ0eSBjb2xsZWN0aW9uLCB0aGUgYEltbXV0YWJsZS5MaXN0YCBjb2xsZWN0aW9uIGZyb21cbiAqIHtAbGluayBodHRwczovL2ZhY2Vib29rLmdpdGh1Yi5pby9pbW11dGFibGUtanMvfGltbXV0YWJsZS1qc30uXG4gKlxuICogYGBgXG4gKiBJbW11dGFibGUuTGlzdC5wcm90b3R5cGVbcHJvdG9jb2xzLmluaXRdID0gKCkgPT4gSW1tdXRhYmxlLkxpc3QoKS5hc011dGFibGUoKTtcbiAqIEltbXV0YWJsZS5MaXN0LnByb3RvdHlwZVtwcm90b2NvbHMuc3RlcF0gPSAoYWNjLCBpbnB1dCkgPT4gYWNjLnB1c2goaW5wdXQpO1xuICogSW1tdXRhYmxlLkxpc3QucHJvdG90eXBlW3Byb3RvY29scy5yZXN1bHRdID0gKHZhbHVlKSA9PiB2YWx1ZS5hc0ltbXV0YWJsZSgpO1xuICogYGBgXG4gKlxuICogYEltbXV0YWJsZS5MaXN0YCBhbHJlYWR5IGltcGxlbWVudHMgYGl0ZXJhdG9yYCwgc28gd2UgZG9uJ3QgaGF2ZSB0byBkbyBpdFxuICogb3Vyc2VsdmVzLlxuICpcbiAqIFRoZSBgaW5pdGAgZnVuY3Rpb24gcmV0dXJucyBhbiBlbXB0eSBtdXRhYmxlIGxpc3QuIFRoaXMgaXMgaW1wb3J0YW50IGZvclxuICogaW1tdXRhYmxlLWpzIGJlY2F1c2UgaXRzIGRlZmF1bHQgbGlzdHMgYXJlIGltbXV0YWJsZSwgYW5kIGltbXV0YWJsZSBsaXN0c1xuICogbWVhbiB0aGF0IGEgbmV3IGxpc3QgaGFzIHRvIGJlIGNyZWF0ZWQgd2l0aCBldmVyeSByZWR1Y3Rpb24gc3RlcC4gSXQgd291bGRcbiAqIHdvcmsgZmluZSwgYnV0IGl0J3MgcXVpdGUgaW5lZmZpY2llbnQuXG4gKlxuICogVGhlIGBzdGVwYCBmdW5jdGlvbiBhZGRzIHRoZSBuZXh0IHZhbHVlIHRvIHRoZSBhbHJlYWR5LWNyZWF0ZWQgbGlzdC5cbiAqIGBJbW11dGFibGUuTGlzdGAgcHJvdmlkZXMgYSBgcHVzaGAgZnVuY3Rpb24gdGhhdCB3b3JrcyBsaWtlIGFuIGFycmF5J3NcbiAqIGBwdXNoYCwgZXhjZXB0IHRoYXQgaXQgcmV0dXJucyB0aGUgbmV3IGxpc3Qgd2l0aCB0aGUgdmFsdWUgcHVzaGVkIG9udG8gaXQuXG4gKiBUaGlzIGlzIHBlcmZlY3QgZm9yIG91ciBgc3RlcGAgZnVuY3Rpb24uXG4gKlxuICogVGhlIGByZXN1bHRgIGZ1bmN0aW9uIGNvbnZlcnRzIHRoZSBub3ctZmluaXNoZWQgbXV0YWJsZSBsaXN0IGludG8gYW5cbiAqIGltbXV0YWJsZSBvbmUsIHdoaWNoIGlzIHdoYXQncyBnb2luZyB0byBiZSBleHBlY3RlZCBpZiB3ZSdyZSB0cmFuc2R1Y2luZ1xuICogc29tZXRoaW5nIGludG8gYW4gYEltbXV0YWJsZS5MaXN0YC4gSW4gbW9zdCBjYXNlcywgYHJlc3VsdGAgZG9lc24ndCBoYXZlIHRvXG4gKiBkbyBhbnkgd29yaywgYnV0IHNpbmNlIHdlJ3JlIGNyZWF0aW5nIGFuIGludGVybWVkaWF0ZSByZXByZXNlbnRhdGlvbiBvZiBvdXJcbiAqIGNvbGxlY3Rpb24gdHlwZSBoZXJlLCB0aGlzIGxldHMgdXMgY3JlYXRlIHRoZSBjb2xsZWN0aW9uIHRoYXQgd2UgYWN0dWFsbHlcbiAqIHdhbnQgdG8gb3V0cHV0LiAoV2l0aG91dCBgcmVzdWx0YCwgd2Ugd291bGQgaGF2ZSB0byB1c2UgaW1tdXRhYmxlIGxpc3RzIGFsbFxuICogdGhlIHdheSB0aHJvdWdoLCBjcmVhdGluZyBhIG5ldyBvbmUgd2l0aCBlYWNoIGBzdGVwYCBmdW5jdGlvbiwgc2luY2Ugd2VcbiAqIHdvdWxkbid0IGJlIGFibGUgdG8gbWFrZSB0aGlzIGNvbnZlcnN0aW9uIGF0IHRoZSBlbmQuKVxuICpcbiAqIFdpdGggdGhvc2UgcHJvdG9jb2xzIGltcGxlbWVudGVkIG9uIHRoZSBwcm90b3R5cGUsIGBJbW11dGFibGUuTGlzdGBcbiAqIGNvbGxlY3Rpb25zIGNhbiBub3cgc3VwcG9ydCBhbnkgdHJhbnNkdWN0aW9uIHdlIGNhbiBvZmZlci5cbiAqXG4gKiAjIyMgUHJvdG9jb2xzXG4gKlxuICogQWZ0ZXIgdGFsa2luZyBhIGxvdCBhYm91dCBwcm90b2NvbHMgYW5kIHNob3dpbmcgaG93IHRoZXkncmUgcHJvcGVydGllcyBhZGRlZFxuICogdG8gYW4gb2JqZWN0LCBpdCdzIHByb2JhYmx5IHByZXR0eSBvYnZpb3VzIHRoYXQgdGhlcmUncyBiZWVuIG5vIG1lbnRpb24gb2ZcbiAqIHdoYXQgdGhlIGFjdHVhbCBuYW1lcyBvZiB0aG9zZSBwcm9wZXJ0aWVzIGFyZS4gVGhhdCdzIHdoYXRcbiAqIGB7QGxpbmsgbW9kdWxlOmNvcmUucHJvdG9jb2xzfHByb3RvY29sc31gIGlzIGZvci5cbiAqXG4gKiBUaGUgYmVzdCB3YXkgdG8gdXNlIHRoZXNlIGtleXMgY2FuIGJlIHNlZW4gaW4gdGhlIGltbXV0YWJsZS1qcyBleGFtcGxlIGFib3ZlLlxuICogSW5zdGVhZCBvZiB3b3JyeWluZyBhYm91dCB0aGUgbmFtZSBvZiB0aGUga2V5IGZvciB0aGUgYGluaXRgIHByb3RvY29sLCB0aGVcbiAqIHZhbHVlIG9mIGBwcm90b2NvbHMuaW5pdGAgaXMgdXNlZC5cbiAqXG4gKiBge0BsaW5rIG1vZHVsZTpjb3JlLnByb3RvY29sc3xwcm90b2NvbHN9YCBkZWZpbmVzIHRoZXNlIHByb3RvY29sIHByb3BlcnR5XG4gKiBuYW1lcy5cbiAqXG4gKiAtIGBpbml0YFxuICogLSBgc3RlcGBcbiAqIC0gYHJlc3VsdGBcbiAqIC0gYHJlZHVjZWRgOiB1c2VkIGludGVybmFsbHkgdG8gbWFyayBhIGNvbGxlY3Rpb24gYXMgYWxyZWFkeSByZWR1Y2VkXG4gKiAtIGB2YWx1ZWA6IHVzZWQgaW50ZXJuYWxseSB0byBwcm92aWRlIHRoZSBhY3R1YWwgdmFsdWUgb2YgYSByZWR1Y2VkXG4gKiAgIGNvbGxlY3Rpb25cbiAqXG4gKiBUaGUgZmluYWwgdHdvIHZhbHVlcyBkb24ndCBoYXZlIGEgbG90IG9mIHVzZSBvdXRzaWRlIHRoZSBsaWJyYXJ5IHVubGVzc1xuICogeW91J3JlIHdyaXRpbmcgeW91ciBvd24gdHJhbnNkdWNlcnMuXG4gKlxuICogIyMgSG93IE9iamVjdHMgQXJlIFRyZWF0ZWRcbiAqXG4gKiBPYmplY3RzIGJlYXIgc29tZSB0aG91Z2h0IGJlY2F1c2UgcmVndWxhcmx5LCB0aGV5IGFyZW4ndCBjYW5kaWRhdGVzIGZvclxuICogaXRlcmF0aW9uIChhbmQgdGhlcmVmb3JlIGZvciB0cmFuc2R1Y3Rpb24gaW4gZ2VuZXJhbCkuIFRoZXkgZG9uJ3QgaGF2ZSBhIHZlcnlcbiAqIHN0cmFpZ2h0Zm9yd2FyZCBpZGVhIG9mIG9yZGVyLCBhbmQgdGhleSBoYXZlICp0d28qIHBpZWNlcyBvZiBkYXRhIChrZXkgYW5kXG4gKiB2YWx1ZSkgZm9yIGV2ZXJ5IGVsZW1lbnQgaW5zdGVhZCBvZiBvbmUuIFlldCBpdCdzIHVuZGVuaWFibGUgdGhhdCBhdCBsZWFzdFxuICogZm9yIG1vc3QgdHJhbnNmb3JtYXRpb25zLCBiZWluZyBhYmxlIHRvIGFwcGx5IHRoZW0gdG8gb2JqZWN0cyB3b3VsZCBiZSBxdWl0ZVxuICogaGFuZHkuXG4gKlxuICogRm9yIHRoYXQgcmVhc29uLCBzcGVjaWFsIHN1cHBvcnQgaXMgcHJvdmlkZWQgZW5kLXRvLWVuZCBmb3Igb2JqZWN0cy5cbiAqXG4gKiAjIyMgT2JqZWN0IGl0ZXJhdGlvblxuICpcbiAqIEl0ZXJhdGluZyBvdmVyIGFuIG9iamVjdCB3aWxsIHByb2R1Y2Ugb25lIG9iamVjdCBwZXIgcHJvcGVydHkgb2YgdGhlIG9yaWdpbmFsXG4gKiBvYmplY3QuIEFuIG9yZGVyIGlzIGltcG9zZWQ7IGJ5IGRlZmF1bHQsIHRoaXMgb3JkZXIgdGhlIHNhbWUgYXMgdGhlIG9yZGVyaW5nXG4gKiBvZiBrZXlzIGluIHBvc3QtRVM2IEphdmFzY3JpcHQ6XG4gKlxuICogMS4gS2V5cyB0aGF0IGFyZSBpbnRlZ2VycywgaW4gYXNjZW5kaW5nIG51bWVyaWNhbCBvcmRlclxuICogMi4gQWxsIG90aGVyIHN0cmluZyBrZXlzLCBpbiB0aGUgb3JkZXIgaW4gd2hpY2ggdGhleSB3ZXJlIGFkZGVkIHRvIHRoZSBvYmplY3RcbiAqIDMuIEFsbCBzeW1ib2wga2V5cywgaW4gdGhlIG9yZGVyIGluIHdoaWNoIHRoZXkgd2VyZSBhZGRlZCB0byB0aGUgb2JqZWN0XG4gKlxuICogVGhlIGB7QGxpbmsgbW9kdWxlOmNvcmUuaXRlcmF0b3J8aXRlcmF0b3J9YCBmdW5jdGlvbiBjYW4gYmUgcGFzc2VkIGEgc29ydGluZ1xuICogZnVuY3Rpb24gdGhhdCBjYW4gc29ydCBrZXlzIGluIGFueSBvdGhlciB3YXkuXG4gKlxuICogVGhlIHJlc3VsdCBvZiB0aGUgaXRlcmF0aW9uLCBpcyBhIHNldCBvZiBvYmplY3RzIGVhY2ggd2l0aCBhIHNpbmdsZSBwcm9wZXJ0eSxcbiAqIG9uZSBmb3IgZWFjaCBlbnVtZXJhYmxlIG93biBwcm9wZXJ0eSBvbiB0aGUgb3JpZ2luYWwgb2JqZWN0LiBUaGUgc3RhbmRhcmRcbiAqIG9yZGVyaW5nIGZvciBvYmplY3RzIChmcm9tIEVTNiBvbndhcmQpIGlzIGFzIGZvbGxvd3M6XG4gKlxuICogIyMjIFRyYW5zZm9ybWluZyBvYmplY3RzXG4gKlxuICogV2hpbGUgaXRlcmF0aW5nIG92ZXIgb2JqZWN0cyBpbiB0aGlzIHdheSBpcyBzdHJhaWdodGZvcndhcmQsIHRoZSBzeW50YXggb2ZcbiAqIG9iamVjdHMgbWFrZXMgaXQgdWdseSB0byB0cmFuc2Zvcm0gdGhlbSBpbiB0aGlzIGZvcm0uIEhlcmUncyBhbiBleGFtcGxlIG9mIGFcbiAqIHRyYW5zZm9ybWF0aW9uIGZ1bmN0aW9uIHRoYXQgbWFrZXMgdGhlIG9iamVjdCdzIGtleXMgdXBwZXItY2FzZSBhbmQgYWRkcyBvbmVcbiAqIHRvIGVhY2ggb2YgdGhlIHZhbHVlczpcbiAqXG4gKiBgYGBcbiAqIGZ1bmN0aW9uIHRyYW5zZm9ybShvYmopIHtcbiAqICAgY29uc3Qga2V5ID0gT2JqZWN0LmtleXMob2JqKVswXTtcbiAqICAgY29uc3QgdmFsdWUgPSBvYmpba2V5XTtcbiAqICAgcmV0dXJuIHsgW2tleS50b1VwcGVyQ2FzZSgpXTogdmFsdWUgKyAxIH07XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBBIGhlbHBlciBmdW5jdGlvbiBuYW1lZCBge0BsaW5rIG1vZHVsZTpjb3JlLnByb3BlcnR5fHByb3BlcnR5fWAgY2FuIGltcHJvdmVcbiAqIHRoaXMgYnkgaGFuZGxpbmcgdGhlIGJvaWxlcnBsYXRlLlxuICpcbiAqIGBgYFxuICogZnVuY3Rpb24gaW1wcm92ZWRUcmFuc2Zvcm0ob2JqKSB7XG4gKiAgIGNvbnN0IHtrLCB2fSA9IHByb3BlcnR5KG9iaik7XG4gKiAgIHJldHVybiB7IFtrLnRvVXBwZXJDYXNlKCldOiB2ICsgMSB9O1xuICogfVxuICogYGBgXG4gKlxuICogIyMjIFJlZHVjaW5nIG9iamVjdHNcbiAqXG4gKiBUaGUgYnVpbHQtaW4gcmVkdWNlcnMgKGZvciBhcnJheXMsIG9iamVjdHMsIHN0cmluZ3MsIGFuZCBpdGVyYXRvcnMpXG4gKiB1bmRlcnN0YW5kIHRoZXNlIHNpbmdsZS1wcm9wZXJ0eSBvYmplY3RzIGFuZCByZWR1Y2UgdGhlbSBpbiB0aGUgcHJvcGVyIG1hbm5lclxuICogd2l0aG91dCBhbnkgZnVydGhlciB3b3JrLlxuICpcbiAqIFRoYXQncyBpdCBmb3Igb2JqZWN0LW9iamVjdCByZWR1Y3Rpb24uIENvbnZlcnRpbmcgYmV0d2VlbiBvYmplY3RzIGFuZCBvdGhlclxuICogdHlwZXMgaXMgYW5vdGhlciBtYXR0ZXIuXG4gKlxuICogRXZlcnkgdHJhbnNkdWNlciBmdW5jdGlvbiBleGNlcHQgZm9yIGB7QGxpbmsgbW9kdWxlOmNvcmUuc2VxdWVuY2V8c2VxdWVuY2V9YFxuICogaXMgY2FwYWJsZSBvZiB0dXJuaW5nIGFuIG9iamVjdCBpbnRvIGEgZGlmZmVyZW50IHR5cGUgb2YgY29sbGVjdGlvbiwgdHVybmluZ1xuICogYSBkaWZmZXJlbnQgdHlwZSBvZiBjb2xsZWN0aW9uIGludG8gYW4gb2JqZWN0LCBvciBib3RoLiBPYmplY3RzIGFyZSBkaWZmZXJlbnRcbiAqIGJlY2F1c2UgdGhleSdyZSB0aGUgb25seSBcImNvbGxlY3Rpb25zXCIgdGhhdCBoYXZlIHR3byBkaWZmZXJlbnQgcGllY2VzIG9mIGRhdGFcbiAqIHBlciBlbGVtZW50LiBCZWNhdXNlIG9mIHRoaXMsIHdlIGhhdmUgdG8gaGF2ZSBhIHN0cmF0ZWd5IG9uIGhvdyB0byBtb3ZlIGZyb21cbiAqIG9uZSB0byBhbm90aGVyLlxuICpcbiAqIFRyYW5zZHVjaW5nIGFuIG9iamVjdCBpbnRvIGEgZGlmZmVyZW50IHR5cGUgaXMgZ2VuZXJhbGx5IHByZXR0eSBlYXN5LiBJZiBhblxuICogb2JqZWN0IGlzIGNvbnZlcnRlZCBpbnRvIGFuIGFycmF5LCBmb3IgaW5zdGFuY2UsIHRoZSBhcnJheSBlbGVtZW50cyB3aWxsIGVhY2hcbiAqIGJlIHNpbmdsZS1wcm9wZXJ0eSBvYmplY3RzLCBvbmUgcGVyIHByb3BlcnR5IG9mIHRoZSBvcmlnaW5hbCBvYmplY3QuXG4gKlxuICogU3RyaW5ncyBhcmUgYSBkaWZmZXJlbnQgc3RvcnksIHNpbmNlIGVuY29kaW5nIGEgc2luZ2xlLXByb3BlcnR5IG9iamVjdCB0byBhXG4gKiBzdHJpbmcgaXNuJ3QgcG9zc2libGUgKGJlY2F1c2UgZXZlcnkgXCJlbGVtZW50XCIgb2YgYSBzdHJpbmcgaGFzIHRvIGJlIGEgc2luZ2xlXG4gKiBjaGFyYWN0ZXIpLiBTdHJpbmdzIHRoYXQgYXJlIHByb2R1Y2VkIGZyb20gb2JqZWN0cyB3aWxsIGluc3RlYWQganVzdCBiZSB0aGVcbiAqIG9iamVjdCB2YWx1ZXMsIGNvbmNhdGVuYXRlZC4gQmVjYXVzZSBvYmplY3RzIGFyZSBpdGVyYXRlZCBpbiBhIHBhcnRpY3VsYXJcbiAqIG9yZGVyLCB0aGlzIGNvbnZlcnNpb24gd2lsbCBhbHdheXMgcHJvZHVjZSB0aGUgc2FtZSBzdHJpbmcsIGJ1dCBleGNlcHQgaW5cbiAqIHNvbWUgdmVyeSBzcGVjaWZpYyBjYXNlcyB0aGVyZSByZWFsbHkgaXNuJ3QgYSBsb3Qgb2YgdXNlIGZvciB0aGlzIGNvbnZlcnNpb24uXG4gKlxuICogYGBgXG4gKiBjb25zdCBvYmogPSB7YTogMSwgYjogMn07XG4gKlxuICogbGV0IHJlc3VsdCA9IGFzQXJyYXkob2JqKTtcbiAqIC8vIHJlc3VsdCA9IFt7YTogMX0sIHtiOiAyfV1cbiAqXG4gKiByZXN1bHQgPSBhc0l0ZXJhdG9yKG9iaik7XG4gKiAvLyByZXN1bHQgaXMgYW4gaXRlcmF0b3Igd2l0aCB0d28gdmFsdWVzOiB7YTogMX0gYW5kIHtiOiAyfVxuICpcbiAqIHJlc3VsdCA9IGludG8oSW1tdXRhYmxlLkxpc3QoKSwgb2JqKVxuICogLy8gcmVzdWx0IGlzIGFuIGltbXV0YWJsZSBsaXN0IHdpdGggdHdvIGVsZW1lbnRzOiB7YTogMX0gYW5kIHtiOiAyfVxuICpcbiAqIHJlc3VsdCA9IGFzU3RyaW5nKG9iaik7XG4gKiAvLyByZXN1bHQgaXMgJzEyJ1xuICogYGBgXG4gKlxuICogVGhlIG9wcG9zaXRlIGNvbnZlcnNpb24gZGVwZW5kcyBvbiB0aGUgdmFsdWVzIGluc2lkZSB0aGUgY29sbGVjdGlvbnMuIElmXG4gKiB0aG9zZSB2YWx1ZXMgYXJlIG9iamVjdHMsIHRoZW4gdGhlIHJlc3VsdCBpcyBhbiBvYmplY3Qgd2l0aCBhbGwgb2YgdGhlXG4gKiBvYmplY3RzIGNvbWJpbmVkIChpZiBtb3JlIHRoYW4gb25lIGhhcyB0aGUgc2FtZSBrZXksIHRoZSBsYXN0IG9uZSBpcyB0aGUgb25lXG4gKiB0aGF0J3Mga2VwdCkuIE90aGVyd2lzZSwga2V5cyBhcmUgY3JlYXRlZCBmb3IgZWFjaCBvZiB0aGUgZWxlbWVudHMsIHN0YXJ0aW5nXG4gKiB3aXRoIGAwYCBhbmQgaW5jcmVhc2luZyBmcm9tIHRoZXJlLlxuICpcbiAqIFRoaXMgbWVhbnMgdGhhdCBjb252ZXJ0aW5nIGFuIG9iamVjdCB0byBhbnkgbm9uLXN0cmluZyBjb2xsZWN0aW9uIGFuZCBiYWNrXG4gKiBwcm9kdWNlcyB0aGUgb3JpZ2luYWwgb2JqZWN0LlxuICpcbiAqIGBgYFxuICogbGV0IHJlc3VsdCA9IGFzT2JqZWN0KFt7YTogMX0sIHtiOiAyfV0pO1xuICogLy8gcmVzdWx0ID0ge2E6IDEsIGI6IDJ9XG4gKlxuICogcmVzdWx0ID0gYXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vIHJlc3VsdCA9IHswOiAxLCAxOiAyLCAyOiAzfVxuICpcbiAqIHJlc3VsdCA9IGFzT2JqZWN0KCdoZWxsbycpO1xuICogLy8gcmVzdWx0ID0gezA6ICdoJywgMTogJ2UnLCAyOiAnbCcsIDM6ICdsJywgNDogJ28nfVxuICogYGBgXG4gKlxuICogQG1vZHVsZSB4ZHVjZS10b29sc1xuICovXG5cbmV4cG9ydCB7IHByb3RvY29scywgaXNJbXBsZW1lbnRlZCB9IGZyb20gXCJtb2R1bGVzL3Byb3RvY29sXCI7XG5leHBvcnQgeyBpdGVyYXRvciwgaXNJdGVyYWJsZSB9IGZyb20gXCJtb2R1bGVzL2l0ZXJhdGlvblwiO1xuZXhwb3J0IHtcbiAgY29tcGxldGUsXG4gIHVuY29tcGxldGUsXG4gIGlzQ29tcGxldGVkLFxuICBlbnN1cmVDb21wbGV0ZWQsXG4gIGVuc3VyZVVuY29tcGxldGVkLFxuICByZWR1Y2UsXG4gIHRvRnVuY3Rpb24sXG4gIHRvUmVkdWNlcixcbiAgdG9UcmFuc2R1Y2VyXG59IGZyb20gXCJtb2R1bGVzL3JlZHVjdGlvblwiO1xuZXhwb3J0IHtcbiAgaXNBcnJheSxcbiAgaXNGdW5jdGlvbixcbiAgaXNHZW5lcmF0b3JGdW5jdGlvbixcbiAgaXNOdW1iZXIsXG4gIGlzT2JqZWN0LFxuICBpc1N0cmluZ1xufSBmcm9tIFwibW9kdWxlcy91dGlsc1wiO1xuXG4vKipcbiAqIEFuIGl0ZXJhYmxlIGFzIGRlZmluZWQgYnkgSmF2YVNjcmlwdC5cbiAqXG4gKiBAdHlwZWRlZiBKc0l0ZXJhYmxlXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNvcmVcbiAqIEBwcm9wZXJ0eSB7bW9kdWxlOmNvcmUuSnNJdGVyYWJsZUZ1bmN0aW9ufSBTeW1ib2wuaXRlcmF0b3IgQSBmdW5jdGlvbiB0aGF0XG4gKiAgICAgcHJvZHVjZXMgYW4gaXRlcmF0b3Igd2hlbiBjYWxsZWQuXG4gKi9cblxuLyoqXG4gKiBBIGZ1bmN0aW9uIHRoYXQgcHJvZHVjZXMgYW4gaXRlcmF0b3IuIFRoaXMgaXMgdGhlIGNoYXJhY3RlcmlzdGljIHByb3BlcnR5IG9mXG4gKiBhIEphdmFTY3JpcHQgaXRlcmFibGUuXG4gKlxuICogQGNhbGxiYWNrIEpzSXRlcmFibGVGdW5jdGlvblxuICogQG1lbWJlcm9mIG1vZHVsZTpjb3JlXG4gKiBAcmV0dXJucyB7bW9kdWxlOmNvcmUuSXRlcmF0b3J9IEFuIGl0ZXJhdG9yIG92ZXIgdGhlXG4gKiAgICAge0BsaW5rIG1vZHVsZTpjb3JlLkpzSXRlcmFibGV9IHRoYXQgcHJvZHVjZWQgaXQuXG4gKi9cblxuLyoqXG4gKiBBbiBpdGVyYWJsZSBhcyBkZWZpbmVkIGJ5IHRoaXMgbGlicmFyeS4gU2luY2UgaXQgcHJvdmlkZXMgc3BlY2lmaWMgc3VwcG9ydFxuICogZm9yIG9iamVjdHMsIHRoaXMgdHlwZSBpcyBtZXJlbHkgYSBub3JtYWwgSmF2YVNjcmlwdCBpdGVyYWJsZSAqb3IqIGEgcGxhaW5cbiAqIG9iamVjdC5cbiAqXG4gKiBAdHlwZWRlZiB7KE9iamVjdHxtb2R1bGU6Y29yZS5Kc0l0ZXJhYmxlKX0gSXRlcmFibGVcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y29yZVxuICovXG5cbi8qKlxuICogQSBnZW5lcmljIGl0ZXJhdG9yLiBUaGlzIGNvbmZvcm1zIHRvIHRoZSBgaXRlcmF0b3JgIHByb3RvY29sIGluIHRoYXQgaXQgaGFzIGFcbiAqIGB7QGxpbmsgbW9kdWxlOmNvcmUuTmV4dEZ1bmN0aW9ufG5leHR9YCBmdW5jdGlvbiB0aGF0IHByb2R1Y2VzXG4gKiB7QGxpbmsgbW9kdWxlOmNvcmUuTmV4dFZhbHVlfGBpdGVyYXRvcmAtY29tcGF0aWJsZSBvYmplY3RzfS5cbiAqXG4gKiBAdHlwZWRlZiBJdGVyYXRvclxuICogQG1lbWJlcm9mIG1vZHVsZTpjb3JlXG4gKiBAcHJvcGVydHkge21vZHVsZTpjb3JlLk5leHRGdW5jdGlvbn0gbmV4dCBBIGZ1bmN0aW9uIHRoYXQsIHdoZW4gY2FsbGVkLFxuICogICAgIHJldHVybnMgdGhlIG5leHQgaXRlcmF0b3IgdmFsdWUuXG4gKi9cblxuLyoqXG4gKiBUaGUgZnVuY3Rpb24gdGhhdCBzYXRpc2ZpZXMgdGhlIGBpdGVyYXRvcmAgcHJvdG9jb2wgb24gYW4gb2JqZWN0LiBXaGVuXG4gKiBjYWxsZWQsIGl0IHJldHVybnMgdGhlIG5leHQgdmFsdWUgaW4gdGhlIGl0ZXJhdG9yLlxuICpcbiAqIEBjYWxsYmFjayBOZXh0RnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y29yZVxuICogQHJldHVybnMge21vZHVsZTpjb3JlLk5leHRWYWx1ZX0gVGhlIG5leHQgdmFsdWUgaW4gdGhlIGl0ZXJhdG9yLlxuICovXG5cbi8qKlxuICogVGhlIG9iamVjdCByZXR1cm5lZCBieSBhIGNhbGwgdG8gYHtAbGluayBtb2R1bGU6Y29yZS5OZXh0RnVuY3Rpb258bmV4dH1gLiBJdFxuICogaW5kaWNhdGVzIHdoZXRoZXIgdGhlIGl0ZXJhdG9yIGlzIGNvbXBsZXRlIGFuZCwgaWYgbm90LCB3aGF0IHRoZSBuZXh0IHZhbHVlXG4gKiBpcy5cbiAqXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBOZXh0VmFsdWVcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y29yZVxuICogQHByb3BlcnR5IHsqfSB2YWx1ZSBUaGUgdmFsdWUgdGhhdCB0aGUgaXRlcmF0b3IgaGFzIHByb3ZpZGVkLlxuICogQHByb3BlcnR5IHtib29sZWFufSBkb25lIEluZGljYXRlcyB3aGV0aGVyIHRoZSBpdGVyYXRvciBoYXMgY29tcGxldGVkLiBJZlxuICogICAgIHRoaXMgaXMgYHRydWVgLCB0aGVuIGB2YWx1ZWAgd2lsbCBiZSBgdW5kZWZpbmVkYCBhbmQgZXZlcnkgc3Vic2VxdWVudFxuICogICAgIGNhbGwgdG8gYHtAbGluayBtb2R1bGU6Y29yZS5OZXh0RnVuY3Rpb258bmV4dH1gIHdpbGwgY29udGludWUgdG8gcHJvZHVjZVxuICogICAgIHRoZSBzYW1lIHZhbHVlLiBJZiBpdCdzIGBmYWxzZWAsIHRoZW4gYHZhbHVlYCByZXByZXNlbnRzIHRoZSBuZXQgdmFsdWUgaW5cbiAqICAgICB0aGUgaXRlcmF0b3IsIGFuZCB0aGUgbmV4dCBjYWxsIHRvXG4gKiAgICAgYHtAbGluayBtb2R1bGU6Y29yZS5OZXh0RnVuY3Rpb258bmV4dH1gIHdpbGwgY29udGludWUgdG8gcHJvZHVjZSB0aGUgbmV4dFxuICogICAgIHZhbHVlLlxuICovXG5cbi8qKlxuICogQSBzb3J0IGZ1bmN0aW9uIGZvciB0aGUga2V5cyBvZiBhbiBvYmplY3QuIFRoaXMgY29uZm9ybXMgdG8gdGhlIG5vcm1hbCBzb3J0XG4gKiBmdW5jdGlvbiB1c2VkIGluIGBBcnJheS5wcm90b3R5cGUuc29ydGAuXG4gKlxuICogQGNhbGxiYWNrIFNvcnRGdW5jdGlvblxuICogQG1lbWJlcm9mIG1vZHVsZTpjb3JlXG4gKiBAcHJvcGVydHkgeyp9IGEgVGhlIGZpcnN0IHZhbHVlIHRvIGJlIHNvcnRlZC5cbiAqIEBwcm9wZXJ0eSB7Kn0gYiBUaGUgc2Vjb25kIHZhbHVlIHRvIGJlIHNvcnRlZC5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IEVpdGhlciBgLTFgIGlmIGBhID4gYmAsIGAxYCBpZiBgYSA8IGJgLCBvciBgMGAgaWYgYGEgPT09XG4gKiAgICAgYmAuXG4gKi9cblxuLyoqXG4gKiBBIGZ1bmN0aW9uIHRoYXQgY2FuIGhhdmUgYW4gaXRlcmF0b3IgY3JlYXRlZCBmb3IgaXQuXG4gKlxuICogQGNhbGxiYWNrIEl0ZXJhYmxlRnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y29yZVxuICogQHBhcmFtIHtudW1iZXJ9IFtpbmRleF0gVGhlIG51bWJlciBvZiB0aW1lcyB0aGF0XG4gKiAgICAgYHtAbGluayBtb2R1bGU6Y29yZS5OZXh0RnVuY3Rpb258bmV4dH1gIGhhcyBiZWVuIGNhbGxlZCBvbiB0aGUgZnVuY3Rpb24nc1xuICogICAgIGl0ZXJhdG9yLiBUaGlzIHdpbGwgc3RhcnQgYXQgYDBgIGZvciB0aGUgZmlyc3QgY2FsbCB0b1xuICogICAgIGB7QGxpbmsgbW9kdWxlOmNvcmUuTmV4dEZ1bmN0aW9ufG5leHR9YCBhbmQgaW5jcmVhc2UgYnkgb25lIGZvciBlYWNoXG4gKiAgICAgc3Vic2VxdWVudCBjYWxsLlxuICogQHBhcmFtIHsqfSBbbGFzdF0gVGhlIHJldHVybiB2YWx1ZSBvZiB0aGUgZnVuY3Rpb24gdGhlIGxhc3QgdGltZVxuICogICAgIGB7QGxpbmsgbW9kdWxlOmNvcmUuTmV4dEZ1bmN0aW9ufG5leHR9YCB3YXMgY2FsbGVkIG9uIGl0cyBpdGVyYXRvci4gRm9yXG4gKiAgICAgdGhlIGZpcnN0IGNhbGwsIHRoaXMgaXMgc2V0IHRvIGB1bmRlZmluZWRgLlxuICogQHJldHVybnMgeyp9IFRoZSByZXR1cm4gdmFsdWUgZm9yIHRoYXQgaXRlcmF0aW9uLlxuICovXG5cbi8qKlxuICogQW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIGEgc2luZ2xlLXByb3BlcnR5IG9iamVjdCwgYnV0IHVzaW5nIG9uZSBwcm9wZXJ0eVxuICogZm9yIHRoZSBrZXkgYW5kIG9uZSBmb3IgdGhlIHZhbHVlLiBUaGlzIGZvcm1hdCBpcyBlYXNpZXIgdG8gdXNlIGluXG4gKiB0cmFuc2Zvcm1hdGlvbiBmdW5jdGlvbnMuXG4gKlxuICogQHR5cGVkZWYge29iamVjdH0gUHJvcGVydHlPYmplY3RcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y29yZVxuICogQHByb3BlcnR5IHsoU3RyaW5nfFN5bWJvbCl9IGsgVGhlIGtleSBvZiB0aGUgc2luZ2xlLXByb3BlcnR5IG9iamVjdCB0aGF0IHRoaXNcbiAqICAgICBvYmplY3QgcmVwcmVzZW50cy5cbiAqIEBwcm9wZXJ0eSB7Kn0gdiBUaGUgdmFsdWUgb2YgdGhlIHNpbmdsZS1wcm9wZXJ0eSBvYmplY3QgdGhhdCB0aGlzIG9iamVjdFxuICogICAgIHJlcHJlc2VudHMuXG4gKi9cblxuLyoqXG4gKiBBbiBpbml0IGZ1bmN0aW9uLCB3aGljaCBwcm92aWRlcyBhIG5ldywgZW1wdHkgaW5zdGFuY2Ugb2YgYSBjb2xsZWN0aW9uLlxuICpcbiAqIEBjYWxsYmFjayBJbml0RnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y29yZVxuICogQHJldHVybnMgeyp9IEEgbmV3LCBlbXB0eSBpbnN0YW5jZSBvZiBhIGNvbGxlY3Rpb24uXG4gKi9cblxuLyoqXG4gKiBBIHN0ZXAgZnVuY3Rpb24sIHRoYXQgcmVkdWNlcyBhIGNvbGxlY3Rpb24gYW5kIGEgbmV3IHZhbHVlIHRvIHRoZSBjb2xsZWN0aW9uXG4gKiB3aXRoIHRoZSB2YWx1ZSBhZGRlZC5cbiAqXG4gKiBAY2FsbGJhY2sgU3RlcEZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNvcmVcbiAqIEBwYXJhbSB7Kn0gYWNjIEFuIGFjY3VtdWxhdGVkIHZhbHVlIHRvIHdoaWNoIHRoZSBuZXcgdmFsdWUgaXMgYmVpbmcgYWRkZWQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSBuZXcgdmFsdWUgdG8gYmUgYWRkZWQgdG8gdGhlIGFjY3VtdWxhdGVkIHZhbHVlLlxuICogQHJldHVybnMgeyp9IFRoZSBhY2N1bXVsYXRlZCB2YWx1ZSB3aXRoIHRoZSBuZXcgdmFsdWUgaW50ZWdyYXRlZCBpbnRvIGl0LlxuICovXG5cbi8qKlxuICogQSByZXN1bHQgZnVuY3Rpb24gdGhhdCBvcHRpb25hbGx5IG1vZGlmaWVzIHRoZSBpbnB1dCBjb2xsZWN0aW9uIGFuZCB0aGVuXG4gKiByZXR1cm5zIGl0LiBUaGlzIGlzIHVzZWQgYXQgdGhlIGVuZCBvZiBhIHJlZHVjdGlvbiB0byBhZmZvcmQgYSBsYXN0IGNoYW5jZVxuICogZm9yIHRoZSB0cmFuc2R1Y2VyIHRvIG1vZGlmeSB0aGUgb3V0cHV0IHZhbHVlLlxuICpcbiAqIEBjYWxsYmFjayBSZXN1bHRGdW5jdGlvblxuICogQG1lbWJlcm9mIG1vZHVsZTpjb3JlXG4gKiBAcGFyYW0geyp9IGlucHV0IFRoZSB2YWx1ZSB0byBiZSBtb2RpZmllZCBiZWZvcmUgYmVpbmcgb3V0cHV0LlxuICogQHJldHVybnMgeyp9IFRoZSBtb2RpZmllZCB2YWx1ZSB0byBiZSBvdXRwdXQgYnkgYSB0cmFuc2R1Y2VyLlxuICovXG5cbi8qKlxuICogQW4gb2JqZWN0IHdpdGggYWxsIG9mIHRoZSBpbmZvcm1hdGlvbiBuZWNlc3NhcnkgdG8gcmVkdWNlIHZhbHVlcyBpbnRvIGFcbiAqIHBhcnRpY3VsYXIga2luZCBvZiBjb2xsZWN0aW9uLiBUaGVzZSBhcmUgcGFzc2VkIHRvXG4gKiB7QGxpbmsgbW9kdWxlOmNvcmUucmVkdWNlfHJlZHVjZX0gYW5kIGxpa2UgZnVuY3Rpb25zLlxuICpcbiAqIEB0eXBlZGVmIFJlZHVjZXJcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y29yZVxuICogQHByb3BlcnR5IHttb2R1bGU6Y29yZS5Jbml0RnVuY3Rpb259IFtTeW1ib2wuZm9yKFwidHJhbnNkdWNlci9pbml0XCIpXSBUaGVcbiAqICAgICByZWR1Y2VyJ3MgaW5pdCBmdW5jdGlvbi5cbiAqIEBwcm9wZXJ0eSB7bW9kdWxlOmNvcmUuU3RlcEZ1bmN0aW9ufSBTeW1ib2wuZm9yKFwidHJhbnNkdWNlci9zdGVwXCIpIFRoZVxuICogICAgIHJlZHVjZXIncyBzdGVwIGZ1bmN0aW9uLlxuICogQHByb3BlcnR5IHttb2R1bGU6Y29yZS5SZXN1bHRGdW5jdGlvbn0gU3ltYm9sLmZvcihcInRyYW5zZHVjZXIvcmVzdWx0XCIpIFRoZVxuICogICAgIHJlZHVjZXIncyByZXN1bHQgZnVuY3Rpb24uXG4gKi9cblxuLyoqXG4gKiBBIGNvbGxlY3Rpb24gdGhhdCBjYW4gaGF2ZSB2YWx1ZXMgcmVkdWNlZCBpbnRvIGl0LiBTaW5jZSB0aGlzIGxpYnJhcnlcbiAqIHByb3ZpZGVzIGV4cGxpY2l0IHN1cHBvcnQgZm9yIGFycmF5cywgb2JqZWN0cywgYW5kIHN0cmluZ3MsIHRob3NlIHRocmVlIGFyZVxuICogYWRkZWQgdG8gdGhlIHtAbGluayBtb2R1bGU6Y29yZS5SZWR1Y2VyfSB0eXBlIHRvIGRlZmluZSB0aGlzLlxuICpcbiAqIEB0eXBlZGVmIHsoQXJyYXl8U3RyaW5nfE9iamVjdHxtb2R1bGU6Y29yZS5SZWR1Y2VyKX0gUmVkdWNpYmxlXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNvcmVcbiAqL1xuXG4vKipcbiAqIEEgY29sbGVjdGlvbiB0aGF0IHN1cHBvcnRzIG5vdCBvbmx5IHRoZSByZWd1bGFyIGl0ZXJhaW9uIG92ZXIgaXRzIGNvbnRlbnRzLFxuICogYnV0IGFsc28gcmVkdWN0aW9uIG9mIHZhbHVlcyBpbnRvIGl0LiBJdCBpcyBhbiBpbnRlcnNlY3Rpb24gdHlwZSBjb21iaW5pbmdcbiAqIHtAbGluayBtb2R1bGU6Y29yZS5JdGVyYWJsZXxJdGVyYWJsZX0gYW5kXG4gKiB7QGxpbmsgbW9kdWxlOmNvcmUuUmVkdWNpYmxlfFJlZHVjaWJsZX0uXG4gKlxuICogQHR5cGVkZWYgRXhwbGljaXRJdGVyYWJsZVJlZHVjaWJsZVxuICogQG1lbWJlcm9mIG1vZHVsZTpjb3JlXG4gKiBAcHJvcGVydHkge21vZHVsZTpjb3JlLkpzSXRlcmFibGVGdW5jdGlvbn0gU3ltYm9sLml0ZXJhdG9yIEEgZnVuY3Rpb24gdGhhdFxuICogICAgIHByb2R1Y2VzIGFuIGl0ZXJhdG9yIHdoZW4gY2FsbGVkLlxuICogQHByb3BlcnR5IHttb2R1bGU6Y29yZS5Jbml0RnVuY3Rpb259IFtTeW1ib2wuZm9yKFwidHJhbnNkdWNlci9pbml0XCIpXSBUaGVcbiAqICAgICBjb2xsZWN0aW9uJ3MgaW5pdCBmdW5jdGlvbi5cbiAqIEBwcm9wZXJ0eSB7bW9kdWxlOmNvcmUuU3RlcEZ1bmN0aW9ufSBTeW1ib2wuZm9yKFwidHJhbnNkdWNlci9zdGVwXCIpIFRoZVxuICogICAgIGNvbGxlY3Rpb24ncyBzdGVwIGZ1bmN0aW9uLlxuICogQHByb3BlcnR5IHttb2R1bGU6Y29yZS5SZXN1bHRGdW5jdGlvbn0gU3ltYm9sLmZvcihcInRyYW5zZHVjZXIvcmVzdWx0XCIpIFRoZVxuICogICAgIGNvbGxlY3Rpb24ncyByZXN1bHQgZnVuY3Rpb24uXG4gKi9cblxuLyoqXG4gKiBUaGUgYWN0dWFsIHR5cGUgdXNlZCBieSByZWR1Y2libGUgY29sbGVjdGlvbnMgaW4gdGhpcyBsaWJyYXJ5LiBJdCB0YWtlcyB0aGVcbiAqIHByb3BlcnR5LWJhc2VkIGRlZmluaXRpb24gYW5kIGFkZHMgYnVpbHQtaW4gdHlwZXMgdGhhdCBhcmUgc3BlY2lhbGx5XG4gKiBzdXBwb3J0ZWQgYnkgdGhlIGxpYnJhcnkuXG4gKlxuICogQHR5cGVkZWYgeyhBcnJheXxPYmplY3R8U3RyaW5nfG1vZHVsZTpjb3JlLkV4cGxpY2l0SXRlcmFibGVSZWR1Y2libGUpfVxuICogICAgIEl0ZXJhYmxlUmVkdWNpYmxlXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNvcmVcbiAqL1xuXG4vKipcbiAqIEEgZnVuY3Rpb24gdGhhdCB0cmFuc2Zvcm1zIGRhdGEgYW5kIGNhbiBiZSBjb21wb3NlZCB3aXRoIG90aGVyIHRyYW5zZHVjZXJzXG4gKiBpbnRvIGEgc2luZ2xlIHRyYW5zZHVjZXIuIFRoZSB0cmFuc2R1Y2VycyB0aGVtc2VsdmVzIGFyZSBwcm92aWRlZCBieSBvdGhlclxuICogbGlicmFyaWVzOyB0aGUgb25seSBpbnZvbHZlbWVudCBvZiB0aGlzIGxpYnJhciBpcyBhcyBhIGNvbnN1bWVyIG9mXG4gKiB0cmFuc2R1Y2Vycy5cbiAqXG4gKiBUcmFuc2R1Y2VycyB3b3JrIGJ5IGhhdmluZyBzdGVwIGZ1bmN0aW9ucyB0aGF0IGFyZSBrbm93biB2aWEgcHJvdG9jb2wsIGFuZCBpdFxuICogaXMgdGhlc2Ugc3RlcCBmdW5jdGlvbnMgdGhhdCB0YWtlIGEgdmFsdWUgYXQgYSB0aW1lIHRvIGJlIHRyYW5zZm9ybWVkIGFzXG4gKiB0aGVpciBhcmd1bWVudHMuIFRoZSBhcmd1bWVudHMgdG8gdGhlIHRyYW5zZHVjZXJzIHRoZW1zZWx2ZXMgYXJlIG90aGVyXG4gKiB0cmFuc2R1Y2VycyB0aGF0IGFyZSB0aGVuIGNvbXBvc2VkIGludG8gYSBzaW5nbGUgdHJhbnNkdWNlciwgd2hpY2ggaXMgdGhlblxuICogcmV0dXJuZWQuIFRoZSB2YWx1ZXMgdGhhdCBhcmUgcHJvZHVjZWQgYXJlIHNlbGRvbSBvZiBjb25zZXF1ZW5jZSB0byB0aGUgZW5kXG4gKiB1c2VyOyB0aGVzZSBmdW5jdGlvbnMgZXhpc3QgdG8gYmUgcGFzc2VkIHRvIG90aGVyIGZ1bmN0aW9ucyB0aGF0IGRlYWwgd2l0aFxuICogdHJhbnNkdWNlcnMuXG4gKlxuICogQGNhbGxiYWNrIFRyYW5zZHVjZXJcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y29yZVxuICogQHBhcmFtIHttb2R1bGU6Y29yZS5UcmFuc2R1Y2VyRnVuY3Rpb259IHhmb3JtIEEgdHJhbnNkdWNlciB0byBjaGFpbiB0aGlzXG4gKiAgICAgdHJhbnNkdWNlciB0by5cbiAqIEByZXR1cm4ge21vZHVsZTpjb3JlLlRyYW5zZHVjZXJGdW5jdGlvbn0gQSBuZXcgdHJhbnNkdWNlciBjb25zaXN0aW5nIG9mIHRoZVxuICogICAgIGNvbXBvc2l0aW9uIG9mIHRoaXMgb25lIGFuZCBgeGZvcm1gLlxuICovXG5cbi8qKlxuICogQW4gb2JqZWN0IGNvbnRhaW5pbmcgYWxsIG9mIHRoZSBuZWNlc3NhcnkgZnVuY3Rpb24gcHJvcGVydGllcyBmb3JcbiAqIHRyYW5zZm9ybWluZyBkYXRhIGFuZCB0aGVuIHJlZHVjaW5nIGl0IGludG8gYW4gb3V0cHV0IHZhbHVlLiBUaGlzIGlzIHRoZSBzYW1lXG4gKiBhcyB7QGxpbmsgbW9kdWxlOmNvcmUuUmVkdWNlcnxSZWR1Y2VyfSBleGNlcHQgdGhhdCB0aGUgYGluaXRgIHByb3BlcnR5IGlzIG5vdFxuICogb3B0aW9uYWwuXG4gKlxuICogQHR5cGVkZWYgVHJhbnNkdWNlclxuICogQG1lbWJlcm9mIG1vZHVsZTpjb3JlXG4gKiBAcHJvcGVydHkge21vZHVsZTpjb3JlLkluaXRGdW5jdGlvbn0gU3ltYm9sLmZvcihcInRyYW5zZHVjZXIvaW5pdFwiKSBUaGVcbiAqICAgICB0cmFuc2R1Y2VyJ3MgaW5pdCBmdW5jdGlvbi5cbiAqIEBwcm9wZXJ0eSB7bW9kdWxlOmNvcmUuU3RlcEZ1bmN0aW9ufSBTeW1ib2wuZm9yKFwidHJhbnNkdWNlci9zdGVwXCIpIFRoZVxuICogICAgIHRyYW5zZHVjZXIncyBzdGVwIGZ1bmN0aW9uLlxuICogQHByb3BlcnR5IHttb2R1bGU6Y29yZS5SZXN1bHRGdW5jdGlvbn0gU3ltYm9sLmZvcihcInRyYW5zZHVjZXIvcmVzdWx0XCIpIFRoZVxuICogICAgIHRyYW5zZHVjZXIncyByZXN1bHQgZnVuY3Rpb24uXG4gKi9cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG4vKipcbiAqIEZ1bmN0aW9ucyB0byBoZWxwIHdpdGggaXRlcmF0aW9uIG92ZXIgaXRlcmFibGUgb2JqZWN0cyBhbmQgcGxhaW4gb2JqZWN0cy5cbiAqXG4gKiBAbW9kdWxlIGNvcmUvaXRlcmF0aW9uXG4gKiBAcHJpdmF0ZVxuICovXG5cbmltcG9ydCB7IGlzSW1wbGVtZW50ZWQgfSBmcm9tIFwibW9kdWxlcy9wcm90b2NvbFwiO1xuaW1wb3J0IHsgaXNGdW5jdGlvbiwgaXNPYmplY3QsIGlzR2VuZXJhdG9yRnVuY3Rpb24gfSBmcm9tIFwibW9kdWxlcy91dGlsc1wiO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gaXRlcmF0b3Igb3ZlciBhbiBvYmplY3QuXG4gKlxuICogRGV0YWlscyBhYm91dCB0aGlzIGZ1bmN0aW9uIGFyZSBpbmNsdWRlZCBpbiB0aGUgZG9jdW1lbnRhdGlvbiBmb3JcbiAqIHtAbGluayBtb2R1bGU6eGR1Y2UtdG9vbHMuaXRlcmF0b3J8aXRlcmF0b3J9LlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmogVGhlIG9iamVjdCBiZWluZyBpdGVyYXRlZCBvdmVyLlxuICogQHBhcmFtIHttb2R1bGU6eGR1Y2UtdG9vbHMuU29ydEZ1bmN0aW9ufSBbc29ydEZuXSBBbiBvcHRpb25hbCBmdW5jdGlvbiB1c2VkIHRvIHNvcnRcbiAqICAgICB0aGUgb2JqZWN0IGtleXMgYmVmb3JlIGl0ZXJhdGlvbi4gSWYgaXQgaXNuJ3QgcHJvdmlkZWQsIHRoZSBrZXlzIHdpbGwgYmVcbiAqICAgICBzb3J0ZWQgaW4gdGhlIHNhbWUgb3JkZXIgYXMgYE9iamVjdC5rZXlzKG9iailgIHdvdWxkIHNvcnQgdGhlbS5cbiAqIEByZXR1cm5zIHttb2R1bGU6eGR1Y2UtdG9vbHMuSXRlcmF0b3J9IEFuIGl0ZXJhdG9yIG92ZXIgdGhlIHByb3BlcnRpZXMgb2YgYG9iamAuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBvYmplY3RJdGVyYXRvcihvYmosIHNvcnRGbikge1xuICByZXR1cm4gKGZ1bmN0aW9uKigpIHtcbiAgICBjb25zdCBrZXlzID1cbiAgICAgIHR5cGVvZiBzb3J0Rm4gPT09IFwiZnVuY3Rpb25cIlxuICAgICAgICA/IE9iamVjdC5rZXlzKG9iaikuc29ydChzb3J0Rm4pXG4gICAgICAgIDogT2JqZWN0LmtleXMob2JqKTtcbiAgICBsZXQgaW5kZXggPSAwO1xuXG4gICAgd2hpbGUgKGluZGV4IDwga2V5cy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IGsgPSBrZXlzW2luZGV4KytdO1xuICAgICAgeWllbGQgeyBba106IG9ialtrXSB9O1xuICAgIH1cbiAgfSkoKTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuIGl0ZXJhdG9yIG92ZXIgYSBmdW5jdGlvbi5cbiAqXG4gKiBEZXRhaWxzIGFib3V0IHRoaXMgZnVuY3Rpb24gYXJlIGluY2x1ZGVkIGluIHRoZSBkb2N1bWVudGF0aW9uIGZvclxuICoge0BsaW5rIG1vZHVsZTp4ZHVjZS10b29scy5pdGVyYXRvcnxpdGVyYXRvcn0uXG4gKlxuICogQHBhcmFtIHttb2R1bGU6eGR1Y2UtdG9vbHMuSXRlcmFibGVGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEByZXR1cm5zIHttb2R1bGU6eGR1Y2UtdG9vbHMuSXRlcmF0b3J9IEFuIGl0ZXJhdG9yIG92ZXIgdGhlIHJldHVybiB2YWx1ZXMgb2YgYGZuYC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGZ1bmN0aW9uSXRlcmF0b3IoZm4pIHtcbiAgcmV0dXJuIChmdW5jdGlvbiooKSB7XG4gICAgbGV0IGN1cnJlbnQ7XG4gICAgbGV0IGluZGV4ID0gMDtcblxuICAgIGZvciAoOzspIHtcbiAgICAgIGN1cnJlbnQgPSBmbihpbmRleCsrLCBjdXJyZW50KTtcbiAgICAgIGlmICh0eXBlb2YgY3VycmVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHlpZWxkIGN1cnJlbnQ7XG4gICAgfVxuICB9KSgpO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYW4gaXRlcmF0b3Igb3ZlciB0aGUgcHJvdmlkZWQgdmFsdWUuXG4gKlxuICogRm9yIGNvbGxlY3Rpb25zIHRoYXQgaW1wbGVtZW50IHRoZSBpdGVyYWJsZSBwcm90b2NvbCwgaXQncyBhcyBzaW1wbGUgYXNcbiAqIHJldHVybmluZyB0aGUgaXRlcmF0b3IgYWxyZWFkeSBkZWZpbmVkIGZvciB0aGF0IGNvbGxlY3Rpb24uXG4gKlxuICogYGBgXG4gKiBjb25zdCBpdGVyID0gaXRlcmF0b3IoWzEsIDIsIDNdKTtcbiAqIGNvbnNvbGUubG9nKGl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiAxXG4gKiBjb25zb2xlLmxvZyhpdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4gMlxuICogY29uc29sZS5sb2coaXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IDNcbiAqIGNvbnNvbGUubG9nKGl0ZXIubmV4dCgpLmRvbmUpOyAgICAvLyAtPiB0cnVlXG4gKiBgYGBcbiAqXG4gKiBPYmplY3RzIGFyZSBzcGVjaWFsbHkgc3VwcG9ydGVkIHRvIHJldHVybiBhbiBpdGVyYXRvciBhcyB3ZWxsLCBldmVuIHRob3VnaFxuICogdGhleSBkb24ndCBuYXRpdmVseSBzdXBwb3J0IHRoZSBpdGVyYWJsZSBwcm90b2NvbC4gVGhlIGl0ZXJhdG9yJ3MgYG5leHRgXG4gKiBmdW5jdGlvbiBwcm92aWRlcyBzaW5nbGUtcHJvcGVydHkgb2JqZWN0cywgb25lIGZvciBlYWNoIHByb3BlcnR5IGluIHRoZVxuICogb3JpZ2luYWwgb2JqZWN0LCBvcmRlcmVkIGluIHRoZSBzdGFuZGFyZCBwb3N0LUVTNiBvcmRlciBmb3IgaXRlcmF0aW5nIG92ZXJcbiAqIG9iamVjdCBrZXlzOlxuICpcbiAqIDEuIEtleXMgdGhhdCBhcmUgaW50ZWdlcnMsIGluIGFzY2VuZGluZyBudW1lcmljYWwgb3JkZXJcbiAqIDIuIEFsbCBvdGhlciBzdHJpbmcga2V5cywgaW4gdGhlIG9yZGVyIGluIHdoaWNoIHRoZXkgd2VyZSBhZGRlZCB0byB0aGUgb2JqZWN0XG4gKiAzLiBBbGwgc3ltYm9sIGtleXMsIGluIHRoZSBvcmRlciBpbiB3aGljaCB0aGV5IHdlcmUgYWRkZWQgdG8gdGhlIG9iamVjdFxuICpcbiAqIElmIGEgZGlmZmVyZW50IG9yZGVyIGlzIG5lZWRlZCwgdGhpcyBmdW5jdGlvbiB0YWtlcyBhIHNlY29uZCBhcmd1bWVudCwgYSBzb3J0XG4gKiBmdW5jdGlvbiwgdGhhdCBhZmZlY3RzIG9iamVjdHMgb25seS4gSXQgaXMgYSBzdGFuZGFyZCBmdW5jdGlvbiB0aGF0IHdvdWxkIGJlXG4gKiBwYXNzZWQgdG8gYEFycmF5LnByb3RvdHlwZS5zb3J0YCBhbmQgc29ydHMgdGhlIGtleXMgYWNjb3JkaW5nbHkuXG4gKlxuICogYGBgXG4gKiBjb25zdCBhbHBoYSA9IChhLCBiKSA9PiAoYSA8IGIgPyAtMSA6IGIgPCBhID8gMSA6IDApO1xuICogY29uc3Qgb2JqID0geyBjOiAxLCBhOiAyLCBiOiAzIH07XG4gKlxuICogY29uc3Qgb2JqSXRlciA9IGl0ZXJhdG9yKG9iaik7XG4gKiBjb25zb2xlLmxvZyhvYmpJdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4geyBjOiAxIH1cbiAqIGNvbnNvbGUubG9nKG9iakl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiB7IGE6IDIgfVxuICogY29uc29sZS5sb2cob2JqSXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IHsgYjogMyB9XG4gKlxuICogY29uc3Qgc29ydGVkSXRlciA9IGl0ZXJhdG9yKG9iaiwgYWxwaGEpO1xuICogY29uc29sZS5sb2cob2JqSXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IHsgYTogMiB9XG4gKiBjb25zb2xlLmxvZyhvYmpJdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4geyBiOiAzIH1cbiAqIGNvbnNvbGUubG9nKG9iakl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiB7IGM6IDEgfVxuICogYGBgXG4gKlxuICogQWRkaXRpb25hbGx5LCB0aGVyZSBpcyBzcGVjaWFsIHN1cHBvcnQgZm9yIHBhc3NpbmcgYSBmdW5jdGlvbiB0byB0aGlzXG4gKiBmdW5jdGlvbi4gVGhlIGl0ZXJhdG9yIHJldHVybmVkIHJ1bnMgdGhhdCBmdW5jdGlvbiBmb3IgZWFjaCBjYWxsIHRvIGBuZXh0YC5cbiAqIFRoYXQgZnVuY3Rpb24gaXMgcHJvdmlkZWQgdHdvIGFyZ3VtZW50czogdGhlIGluZGV4IChzdGFydGluZyBhdCBgMGAgZm9yIHRoZVxuICogZmlyc3QgY2FsbCB0byBgbmV4dGAgYW5kIGluY3JlYXNpbmcgYnkgMSBmb3IgZWFjaCBjYWxsIHRvIGBuZXh0YCBhZnRlcikgYW5kXG4gKiB0aGUgcmV0dXJuIHZhbHVlIG9mIHRoZSBwcmV2aW91cyBjYWxsIHRvIGBuZXh0YCAoZm9yIHRoZSBmaXJzdCBjYWxsIHRvXG4gKiBgbmV4dGAsIHRoaXMgd2lsbCBiZSBgdW5kZWZpbmVkYCkuIFRoZSBpdGVyYXRpb24gd2lsbCBjb250aW51ZSB1bnRpbCB0aGVcbiAqIGZpcnN0IHRpbWUgdGhlIGl0ZXJhdGVkIGZ1bmN0aW9uIHJldHVybnMgYHVuZGVmaW5lZGA7IGF0IHRoYXQgcG9pbnQgdGhlXG4gKiBpdGVyYXRvciB3aWxsIHRlcm1pbmF0ZSBhbmQgcmV0dXJuIGB7IGRvbmU6IHRydWUgfWAgb2ZmIHN1YnNlcXVlbnQgYG5leHRgXG4gKiBjYWxscy5cbiAqXG4gKiBgYGBcbiAqIGNvbnN0IGNvbnN0SXRlciA9IGl0ZXJhdG9yKCgpID0+IDYpO1xuICogY29uc29sZS5sb2coY29uc3RJdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4gNlxuICogY29uc29sZS5sb2coY29uc3RJdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4gNlxuICogLy8gVGhpcyB3aWxsIGNvbnRpbnVlIGZvcmV2ZXIsIGFzIGxvbmcgYXMgYG5leHRgIGtlZXBzIGdldHRpbmcgY2FsbGVkXG4gKlxuICogY29uc3QgaW5kZXhJdGVyID0gaXRlcmF0b3IoeCA9PiB4ICogeCk7XG4gKiBjb25zb2xlLmxvZyhpbmRleEl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiAwO1xuICogY29uc29sZS5sb2coaW5kZXhJdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4gMTtcbiAqIGNvbnNvbGUubG9nKGluZGV4SXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IDQ7XG4gKiBjb25zb2xlLmxvZyhpbmRleEl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiA5O1xuICogLy8gVGhpcyB3aWxsIGNvbnRpbnVlIGZvcmV2ZXIgb3IgdW50aWwgdGhlIG51bWJlcnMgZ2V0IHRvbyBiaWcgZm9yXG4gKiAvLyBKYXZhU2NyaXB0IHRvIGRlYWwgd3RpaFxuICpcbiAqIC8vIFVzaW5nIGEgZGVmYXVsdCB2YWx1ZSBmb3IgdGhlIGBsYXN0YCBwYXJhbWV0ZXIsIHdoaWNoIHNldHMgaXRzIHZhbHVlXG4gKiAvLyBmb3IgdGhlIGZpcnN0IHJ1biB3aGVuIGl0IGlzIG5vcm1hbGx5IGB1bmRlZmluZWRgXG4gKiBjb25zdCBsYXN0SXRlciA9IGl0ZXJhdG9yKCh4LCBsYXN0ID0gMSkgPT4gbGFzdCAqICh4ICsgMSkpOyAvLyBmYWN0b3JpYWwhXG4gKiBjb25zb2xlLmxvZyhsYXN0SXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IDFcbiAqIGNvbnNvbGUubG9nKGxhc3RJdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4gMlxuICogY29uc29sZS5sb2cobGFzdEl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiA2XG4gKiBjb25zb2xlLmxvZyhsYXN0SXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IDI0XG4gKiAvLyBBZ2FpbiwgcnVucyBmb3JldmVyLCB0aG91Z2ggZmFjdG9yaWFscyBnZXQgYmlnIHZlcnkgcXVpY2tseVxuICpcbiAqIC8vIEl0ZXJhdG9ycyB0ZXJtaW5hdGUgd2hlbiB0aGUgZnVuY3Rpb24gcmV0dXJucyBgdW5kZWZpbmVkYFxuICogY29uc3Qgc3RvcEl0ZXIgPSBpdGVyYXRvcih4ID0+IHggPCAyID8geCA6IHVuZGVmaW5lZCk7XG4gKiBjb25zb2xlLmxvZyhzdG9wSXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IDBcbiAqIGNvbnNvbGUubG9nKHN0b3BJdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4gMVxuICogY29uc29sZS5sb2coc3RvcEl0ZXIubmV4dCgpLmRvbmUpOyAgICAvLyAtPiB0cnVlXG4gKiBgYGBcbiAqXG4gKiBJZiB0aGUgcHJvdmlkZWQgdmFsdWUgaXMgbm90IGFjdHVhbGx5IGl0ZXJhYmxlIChvciBhbiBvYmplY3Qgb3IgYSBmdW5jdGlvbiksXG4gKiBgbnVsbGAgaXMgcmV0dXJuZWQgaW4gcGxhY2Ugb2YgdGhlIGl0ZXJhdG9yLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2UtdG9vbHNcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNyZWF0ZSBhbiBpdGVyYXRvciBvdmVyLlxuICogQHBhcmFtIHttb2R1bGU6eGR1Y2UtdG9vbHMuU29ydEZ1bmN0aW9ufSBbc29ydEZuXSBBbiBvcHRpb25hbCBzb3J0IGZ1bmN0aW9uIGZvclxuICogICAgIHNvcnRpbmcgdGhlIGtleXMgb2YgYW4gb2JqZWN0IGJlZm9yZSBpdGVyYXRpb24uIEl0IGlzIGlnbm9yZWQgaWYgYHZhbHVlYFxuICogICAgIGlzbid0IGEgcGxhaW4gb2JqZWN0LlxuICogQHJldHVybnMge21vZHVsZTp4ZHVjZS10b29scy5JdGVyYXRvcn0gQW4gaXRlcmF0b3Igb3ZlciBgdmFsdWVgLlxuICovXG5mdW5jdGlvbiBpdGVyYXRvcih2YWx1ZSwgc29ydEZuID0gbnVsbCkge1xuICBzd2l0Y2ggKHRydWUpIHtcbiAgICBjYXNlIGlzRnVuY3Rpb24odmFsdWVbU3ltYm9sLml0ZXJhdG9yXSk6XG4gICAgY2FzZSBpc0dlbmVyYXRvckZ1bmN0aW9uKHZhbHVlW1N5bWJvbC5pdGVyYXRvcl0pOlxuICAgICAgcmV0dXJuIHZhbHVlW1N5bWJvbC5pdGVyYXRvcl0oKTtcbiAgICBjYXNlIGlzRnVuY3Rpb24odmFsdWUpOlxuICAgICAgcmV0dXJuIGZ1bmN0aW9uSXRlcmF0b3IodmFsdWUpO1xuICAgIGNhc2UgaXNPYmplY3QodmFsdWUpOlxuICAgICAgcmV0dXJuIG9iamVjdEl0ZXJhdG9yKHZhbHVlLCBzb3J0Rm4pO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgcGFzc2VkIG9iamVjdCBpcyBpdGVyYWJsZSwgaW4gdGVybXMgb2Ygd2hhdCAnaXRlcmFibGUnXG4gKiBtZWFucyB0byB0aGlzIGxpYnJhcnkuIEluIG90aGVyIHdvcmRzLCB2YWx1ZXMgaW1wbGVtZW50aW5nIHRoZSBgaXRlcmFibGVgXG4gKiBwcm90b2NvbCBhbmQgcGxhaW4gb2JqZWN0cyByZXR1cm4gYHRydWVgLCB3aGlsZSBldmVyeXRoaW5nIGVsc2UgcmV0dXJuc1xuICogYGZhbHNlYC4gVGhpcyBkb2VzIG5vdCByZXR1cm4gYHRydWVgIGZvciBmdW5jdGlvbnMgZXZlbiB0aG91Z2hcbiAqIHtAbGluayBtb2R1bGU6eGR1Y2UtdG9vbHMuaXRlcmF0b3J8aXRlcmF0b3J9IGNhbiBwcm9kdWNlIGFuIGl0ZXJhdG9yIGZvciB0aGVtLFxuICogYmVjYXVzZSBub3QgYWxsIGZ1bmN0aW9ucyB3b3JrIHdlbGwgd2l0aFxuICoge0BsaW5rIG1vZHVsZTp4ZHVjZS10b29scy5pdGVyYXRvcnxpdGVyYXRvcn0uXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZS10b29sc1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gdGVzdCBmb3IgaXRlcmFiaWxpdHkuXG4gKiBAcmV0dXJuIHtib29sZWFufSBFaXRoZXIgYHRydWVgIGlmIHRoZSB2YWx1ZSBpcyBpdGVyYWJsZVxuICogICAgIChge0BsaW5rIG1vZHVsZTp4ZHVjZS10b29scy5pdGVyYXRvcn1gIHdpbGwgcmV0dXJuIGFuIGl0ZXJhdG9yIGZvciBpdCkgb3JcbiAqICAgICBgZmFsc2VgIGlmIGl0IGlzIG5vdC5cbiAqL1xuZnVuY3Rpb24gaXNJdGVyYWJsZSh2YWx1ZSkge1xuICByZXR1cm4gaXNJbXBsZW1lbnRlZCh2YWx1ZSwgXCJpdGVyYXRvclwiKSB8fCBpc09iamVjdCh2YWx1ZSk7XG59XG5cbmV4cG9ydCB7IGl0ZXJhdG9yLCBpc0l0ZXJhYmxlIH07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuLyoqXG4gKiBQcm90b2NvbHMgZm9yIGl0ZXJhdGlvbiBhbmQgcmVkdWN0aW9uLlxuICpcbiAqIFRoZSBuYW1lcyBmb3IgdGhlc2UgcHJvdG9jb2xzIGNhbWUgZnJvbSBhIGRpc2N1c3Npb24gdGhyZWFkXG4gKiAoe0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9jb2duaXRlY3QtbGFicy90cmFuc2R1Y2Vycy1qcy9pc3N1ZXMvMjB9KSBmcm9tIGFcbiAqIHRpbWUgd2hlbiB0cmFuc2R1Y2VycyB3ZXJlIHZlcnkgbXVjaCBpbiB0aGUgZm9yZWZyb250LiBJdCdzIHRoZSBjbG9zZXN0IHRoaW5nXG4gKiB0aGVyZSBpcyB0byBhIHN0YW5kYXJkLCBzbyBpdCB3YXMgYWRvcHRlZCBoZXJlLlxuICpcbiAqIFRoZXNlIGFyZSB0aGUgc2FtZSBzeW1ib2xzIGFzIGF2YWlsYWJsZSBpbiBteSB0cmFuc2R1Y2VyIGxpYnJhcnkuIFRoZXkgYXJlXG4gKiBwdWJsaWNseSBhdmFpbGFibGUgZnJvbSB0aGVyZS5cbiAqXG4gKiBAbW9kdWxlIGNvcmUvcHJvdG9jb2xcbiAqIEBwcml2YXRlXG4gKi9cblxuaW1wb3J0IHsgaXNGdW5jdGlvbiwgaXNHZW5lcmF0b3JGdW5jdGlvbiB9IGZyb20gXCJtb2R1bGVzL3V0aWxzXCI7XG5cbi8qKlxuICogVGhlIG1hcHBpbmcgb2YgcHJvdG9jb2wgbmFtZXMgdG8gdGhlaXIgcmVzcGVjdGl2ZSBwcm9wZXJ0eSBrZXkgbmFtZXMuIFRoZVxuICogdmFsdWVzIG9mIHRoaXMgbWFwIHdpbGwgZGVwZW5kIG9uIHdoZXRoZXIgc3ltYm9scyBhcmUgYXZhaWxhYmxlLlxuICpcbiAqIEB0eXBlZGVmIHtvYmplY3R9IFByb3RvY29sTWFwXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlLXRvb2xzXG4gKiBAcHJvcGVydHkge1N5bWJvbH0gaW5pdCBUaGUgYHRyYW5zZHVjZXIvaW5pdGAgcHJvdG9jb2wuIFRoaXMgaXMgdXNlZFxuICogICAgIHRvIG1hcmsgZnVuY3Rpb25zIHRoYXQgaW5pdGlhbGl6ZSBhIHRhcmdldCBjb2xsZWN0aW9uIGJlZm9yZSBhZGRpbmcgaXRlbXNcbiAqICAgICB0byBpdC5cbiAqIEBwcm9wZXJ0eSB7U3ltYm9sfSBzdGVwIFRoZSBgdHJhbnNkdWNlci9zdGVwYCBwcm90b2NvbC4gVGhpcyBpcyB1c2VkXG4gKiAgICAgdG8gbWFyayBmdW5jdGlvbnMgdGhhdCBhcmUgdXNlZCBpbiB0aGUgdHJhbnNkdWNlcidzIHN0ZXAgcHJvY2Vzcywgd2hlcmVcbiAqICAgICBvYmplY3RzIGFyZSBhZGRlZCB0byB0aGUgdGFyZ2V0IGNvbGxlY3Rpb24gb25lIGF0IGEgdGltZS5cbiAqIEBwcm9wZXJ0eSB7U3ltYm9sfSByZXN1bHQgVGhlIGB0cmFuc2R1Y2VyL3Jlc3VsdGAgcHJvdG9jb2wuIFRoaXMgaXNcbiAqICAgICB1c2VkIHRvIG1hcmsgZnVuY3Rpb25zIHRoYXQgdGFrZSB0aGUgZmluYWwgcmVzdWx0IG9mIHRoZSBzdGVwIHByb2Nlc3MgYW5kXG4gKiAgICAgcmV0dXJuIHRoZSBmaW5hbCBmb3JtIHRvIGJlIG91dHB1dC4gVGhpcyBpcyBvcHRpb25hbDsgaWYgdGhlIHRyYW5zZHVjZXJcbiAqICAgICBkb2VzIG5vdCB3YW50IHRvIHRyYW5zZm9ybSB0aGUgZmluYWwgcmVzdWx0LCBpdCBzaG91bGQganVzdCByZXR1cm4gdGhlXG4gKiAgICAgcmVzdWx0IG9mIGl0cyBjaGFpbmVkIHRyYW5zZHVjZXIncyBgcmVzdWx0YCBmdW5jdGlvbi5cbiAqIEBwcm9wZXJ0eSB7U3ltYm9sfSByZWR1Y2VkIFRoZSBgdHJhbnNkdWNlci9yZWR1Y2VkYCBwcm90b2NvbC4gVGhlXG4gKiAgICAgcHJlc2VuY2Ugb2YgdGhpcyBrZXkgb24gYW4gb2JqZWN0IGluZGljYXRlcyB0aGF0IGl0cyB0cmFuc2Zvcm1hdGlvbiBoYXNcbiAqICAgICBiZWVuIGNvbXBsZXRlZC4gSXQgaXMgdXNlZCBpbnRlcm5hbGx5IHRvIG1hcmsgY29sbGVjdGlvbnMgd2hvc2VcbiAqICAgICB0cmFuc2Zvcm1hdGlvbnMgY29uY2x1ZGUgYmVmb3JlIGV2ZXJ5IG9iamVjdCBpcyBpdGVyYXRlZCBvdmVyIChhcyBpblxuICogICAgIGB7QGxpbmsgeGR1Y2UudGFrZX1gIHRyYW5zZHVjZXJzLikgSXQgaXMgb2YgbGl0dGxlIHVzZSBiZXlvbmQgdHJhbnNkdWNlclxuICogICAgIGF1dGhvcmluZy5cbiAqIEBwcm9wZXJ0eSB7U3ltYm9sfSB2YWx1ZSBUaGUgYHRyYW5zZHVjZXIvdmFsdWVgIHByb3RvY29sLiBUaGlzIGlzXG4gKiAgICAgdXNlZCBpbnRlcm5hbGx5IHRvIG1hcmsgcHJvcGVydGllcyB0aGF0IGNvbnRhaW4gdGhlIHZhbHVlIG9mIGEgcmVkdWNlZFxuICogICAgIHRyYW5zZm9ybWF0aW9uLiBJdCBpcyBvZiBsaXR0bGUgdXNlIGJleW9uZCB0cmFuc2R1Y2VyIGF1dGhvcmluZy5cbiAqL1xuXG4vKipcbiAqIFRoZSBtYXBwaW5nIG9mIHByb3RvY29sIG5hbWVzIHRvIHRoZWlyIHJlc3BlY3RpdmUgcHJvcGVydHkga2V5IG5hbWVzLlxuICpcbiAqIEB0eXBlIHttb2R1bGU6eGR1Y2UtdG9vbHMuUHJvdG9jb2xNYXB9XG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlLXRvb2xzXG4gKi9cbmNvbnN0IHByb3RvY29scyA9IE9iamVjdC5jcmVhdGUobnVsbCwge1xuICBpbml0OiB7XG4gICAgdmFsdWU6IFN5bWJvbC5mb3IoXCJ0cmFuc2R1Y2VyL2luaXRcIilcbiAgfSxcbiAgc3RlcDoge1xuICAgIHZhbHVlOiBTeW1ib2wuZm9yKFwidHJhbnNkdWNlci9zdGVwXCIpXG4gIH0sXG4gIHJlc3VsdDoge1xuICAgIHZhbHVlOiBTeW1ib2wuZm9yKFwidHJhbnNkdWNlci9yZXN1bHRcIilcbiAgfSxcbiAgcmVkdWNlZDoge1xuICAgIHZhbHVlOiBTeW1ib2wuZm9yKFwidHJhbnNkdWNlci9yZWR1Y2VkXCIpXG4gIH0sXG4gIHZhbHVlOiB7XG4gICAgdmFsdWU6IFN5bWJvbC5mb3IoXCJ0cmFuc2R1Y2VyL3ZhbHVlXCIpXG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBpc0ltcGxlbWVudGVkKG9iaiwgcHJvdG9jb2wpIHtcbiAgaWYgKG9iaiA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3dpdGNoIChwcm90b2NvbCkge1xuICAgIGNhc2UgXCJpdGVyYXRvclwiOlxuICAgICAgcmV0dXJuIChcbiAgICAgICAgaXNGdW5jdGlvbihvYmpbU3ltYm9sLml0ZXJhdG9yXSkgfHxcbiAgICAgICAgaXNHZW5lcmF0b3JGdW5jdGlvbihvYmpbU3ltYm9sLml0ZXJhdG9yXSlcbiAgICAgICk7XG4gICAgY2FzZSBcImFzeW5jSXRlcmF0b3JcIjpcbiAgICAgIHJldHVybiBpc0dlbmVyYXRvckZ1bmN0aW9uKG9ialtTeW1ib2wuYXN5bmNJdGVyYXRvcl0pO1xuICAgIGNhc2UgXCJyZWR1Y2VkXCI6XG4gICAgY2FzZSBcInZhbHVlXCI6XG4gICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmopLmluY2x1ZGVzKHByb3RvY29sc1twcm90b2NvbF0pO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gaXNGdW5jdGlvbihvYmpbcHJvdG9jb2xzW3Byb3RvY29sXV0pO1xuICB9XG59XG5cbmV4cG9ydCB7IHByb3RvY29scywgaXNJbXBsZW1lbnRlZCB9O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG5cbi8qKlxuICogQSBzZXQgb2YgZnVuY3Rpb25zIHJlbGF0ZWQgdG8gdGhlIHByb2R1Y2luZyByZWR1Y2VyIG9iamVjdHMsIG1hcmtpbmdcbiAqIGNvbXBsZXRlZCBvYmplY3RzLCBhbmQgcGVyZm9ybWluZyBnZW5lcmFsIHJlZHVjdGlvbiBvcGVyYXRpb25zLlxuICpcbiAqIEBtb2R1bGUgY29yZS9yZWR1Y3Rpb25cbiAqIEBwcml2YXRlXG4gKi9cblxuaW1wb3J0IHsgaXNJbXBsZW1lbnRlZCwgcHJvdG9jb2xzIGFzIHAgfSBmcm9tIFwibW9kdWxlcy9wcm90b2NvbFwiO1xuaW1wb3J0IHsgaXNTdHJpbmcsIGlzQXJyYXksIGlzT2JqZWN0LCBpc0Z1bmN0aW9uIH0gZnJvbSBcIm1vZHVsZXMvdXRpbHNcIjtcbmltcG9ydCB7IGl0ZXJhdG9yIH0gZnJvbSBcIm1vZHVsZXMvaXRlcmF0aW9uXCI7XG5cbi8qKlxuICogUmV0dXJucyBhbiBpbml0IGZ1bmN0aW9uIGZvciBhIGNvbGxlY3Rpb24uIFRoaXMgaXMgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYVxuICogbmV3LCBlbXB0eSBpbnN0YW5jZSBvZiB0aGUgY29sbGVjdGlvbiBpbiBxdWVzdGlvbi4gSWYgdGhlIGNvbGxlY3Rpb24gZG9lc24ndFxuICogc3VwcG9ydCByZWR1Y3Rpb24sIGBudWxsYCBpcyByZXR1cm5lZC4gVGhpcyBtYWtlcyBjb25kaXRpb25hbHMgYSBiaXQgZWFzaWVyXG4gKiB0byB3b3JrIHdpdGguXG4gKlxuICogSW4gb3JkZXIgdG8gc3VwcG9ydCB0aGUgY29udmVyc2lvbiBvZiBmdW5jdGlvbnMgaW50byByZWR1Y2VycywgZnVuY3Rpb25cbiAqIHN1cHBvcnQgaXMgYWxzbyBwcm92aWRlZC5cbiAqXG4gKiBAcGFyYW0geyp9IGNvbGxlY3Rpb24gQSBjb2xsZWN0aW9uIHRvIGNyZWF0ZSBhbiBpbml0IGZ1bmN0aW9uIGZvci4gVGhpcyBjYW5cbiAqICAgICBiZSBhbnl0aGluZyB0aGF0IHN1cHBvcnRzIHRoZSBpdGVyYXRpb24gcHJvdG9jb2wgb3IgYSBwbGFpbiBvYmplY3QuXG4gKiBAcmV0dXJuIHttb2R1bGU6eGR1Y2UtdG9vbHMuSW5pdEZ1bmN0aW9ufSBBIGZ1bmN0aW9uIHRoYXQsIHdoZW4gY2FsbGVkLCByZXR1cm5zIGFuXG4gKiAgICAgaW5pdGlhbCB2ZXJzaW9uIG9mIHRoZSBwcm92aWRlZCBjb2xsZWN0aW9uLiBJZiB0aGUgcHJvdmlkZWQgY29sbGVjdGlvbiBpc1xuICogICAgIG5vdCBpdGVyYWJsZSwgdGhlbiBgbnVsbGAgaXMgcmV0dXJuZWQuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBpbml0KGNvbGxlY3Rpb24pIHtcbiAgc3dpdGNoICh0cnVlKSB7XG4gICAgY2FzZSBpc0ltcGxlbWVudGVkKGNvbGxlY3Rpb24sIFwiaW5pdFwiKTpcbiAgICAgIHJldHVybiBjb2xsZWN0aW9uW3AuaW5pdF07XG4gICAgY2FzZSBpc1N0cmluZyhjb2xsZWN0aW9uKTpcbiAgICAgIHJldHVybiAoKSA9PiBcIlwiO1xuICAgIGNhc2UgaXNBcnJheShjb2xsZWN0aW9uKTpcbiAgICAgIHJldHVybiAoKSA9PiBbXTtcbiAgICBjYXNlIGlzT2JqZWN0KGNvbGxlY3Rpb24pOlxuICAgICAgcmV0dXJuICgpID0+ICh7fSk7XG4gICAgY2FzZSBpc0Z1bmN0aW9uKGNvbGxlY3Rpb24pOlxuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoXCJpbml0IG5vdCBhdmFpbGFibGVcIik7XG4gICAgICB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG4vKipcbiAqIFJldHVybnMgYSBzdGVwIGZ1bmN0aW9uIGZvciBhIGNvbGxlY3Rpb24uIFRoaXMgaXMgYSBmdW5jdGlvbiB0aGF0IHRha2VzIGFuXG4gKiBhY2N1bXVsYXRvciBhbmQgYSB2YWx1ZSBhbmQgcmV0dXJucyB0aGUgcmVzdWx0IG9mIHJlZHVjaW5nIHRoZSB2YWx1ZSBpbnRvIHRoZVxuICogYWNjdW11bGF0b3IuIElmIHRoZSBjb2xsZWN0aW9uIGRvZXNuJ3Qgc3VwcG9ydCByZWR1Y3Rpb24sIGBudWxsYCBpcyByZXR1cm5lZC5cbiAqIFRoZSByZXR1cm5lZCBmdW5jdGlvbiBpdHNlbGYgc2ltcGx5IHJlZHVjZXMgdGhlIGlucHV0IGludG8gdGhlIHRhcmdldFxuICogY29sbGVjdGlvbiB3aXRob3V0IG1vZGlmeWluZyBpdC5cbiAqXG4gKiBJbiBvcmRlciB0byBzdXBwb3J0IHRoZSBjb252ZXJzaW9uIG9mIGZ1bmN0aW9ucyBpbnRvIHJlZHVjZXJzLCBmdW5jdGlvblxuICogc3VwcG9ydCBpcyBhbHNvIHByb3ZpZGVkLlxuICpcbiAqIEBwYXJhbSB7Kn0gY29sbGVjdGlvbiBBIGNvbGxlY3Rpb24gdG8gY3JlYXRlIGEgc3RlcCBmdW5jdGlvbiBmb3IuIFRoaXMgY2FuIGJlXG4gKiAgICAgYW55dGhpbmcgdGhhdCBzdXBwb3J0cyB0aGUgaXRlcmF0aW9uIHByb3RvY29sLCBhIHBsYWluIG9iamVjdCwgb3IgYVxuICogICAgIGZ1bmN0aW9uLlxuICogQHJldHVybiB7bW9kdWxlOnhkdWNlLXRvb2xzLlN0ZXBGdW5jdGlvbn0gQSByZWR1Y3Rpb24gZnVuY3Rpb24gZm9yIHRoZSBwcm92aWRlZFxuICogICAgIGNvbGxlY3Rpb24gdGhhdCBzaW1wbHkgYWRkcyBhbiBlbGVtZW50IHRvIHRoZSB0YXJnZXQgY29sbGVjdGlvbiB3aXRob3V0XG4gKiAgICAgbW9kaWZ5aW5nIGl0LiBJZiB0aGUgcHJvdmlkZWQgY29sbGVjdGlvbiBpcyBub3QgaXRlcmFibGUsIGBudWxsYCBpc1xuICogICAgIHJldHVybmVkLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gc3RlcChjb2xsZWN0aW9uKSB7XG4gIHN3aXRjaCAodHJ1ZSkge1xuICAgIGNhc2UgaXNJbXBsZW1lbnRlZChjb2xsZWN0aW9uLCBcInN0ZXBcIik6XG4gICAgICByZXR1cm4gY29sbGVjdGlvbltwLnN0ZXBdO1xuXG4gICAgY2FzZSBpc1N0cmluZyhjb2xsZWN0aW9uKTpcbiAgICAgIHJldHVybiAoYWNjLCBpbnB1dCkgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGlzT2JqZWN0KGlucHV0KSA/IGlucHV0W09iamVjdC5rZXlzKGlucHV0KVswXV0gOiBpbnB1dDtcbiAgICAgICAgcmV0dXJuIGFjYyArIHZhbHVlO1xuICAgICAgfTtcblxuICAgIGNhc2UgaXNBcnJheShjb2xsZWN0aW9uKTpcbiAgICAgIHJldHVybiAoYWNjLCBpbnB1dCkgPT4ge1xuICAgICAgICBhY2MucHVzaChpbnB1dCk7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9O1xuXG4gICAgY2FzZSBpc09iamVjdChjb2xsZWN0aW9uKTpcbiAgICAgIHJldHVybiAoYWNjLCBpbnB1dCkgPT4ge1xuICAgICAgICBsZXQgdmFsdWUgPSBpbnB1dDtcblxuICAgICAgICBpZiAoIWlzT2JqZWN0KGlucHV0KSkge1xuICAgICAgICAgIC8vIGlmIHRoZSBpbnB1dCBpc24ndCBhbiBvYmplY3QsIHR1cm4gaXQgaW50byBhbiBvYmplY3Qgd2l0aCBhXG4gICAgICAgICAgLy8gbnVtZXJpY2FsIGtleSBvbmUgZ3JlYXRlciB0aGFuIHRoZSBtYXgga2V5IGFscmVhZHkgaW4gdGhlXG4gICAgICAgICAgLy8gYWNjdW11bGF0b3JcbiAgICAgICAgICBjb25zdCBtYXggPSBPYmplY3Qua2V5cyhhY2MpLnJlZHVjZSgoYSwgYikgPT4gTWF0aC5tYXgoYSwgYiksIC0xKTtcbiAgICAgICAgICB2YWx1ZSA9IHsgW21heCArIDFdOiBpbnB1dCB9O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgayA9IE9iamVjdC5rZXlzKHZhbHVlKVswXTtcbiAgICAgICAgYWNjW2tdID0gdmFsdWVba107XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9O1xuXG4gICAgY2FzZSBpc0Z1bmN0aW9uKGNvbGxlY3Rpb24pOlxuICAgICAgcmV0dXJuIChhY2MsIGlucHV0KSA9PiBjb2xsZWN0aW9uKGFjYywgaW5wdXQpO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbi8qKlxuICogUmV0dXJucyBhIHJlc3VsdCBmdW5jdGlvbiBmb3IgYSBjb2xsZWN0aW9uLiBUaGlzIGlzIGEgZnVuY3Rpb24gdGhhdCBwZXJmb3Jtc1xuICogYW55IGZpbmFsIHByb2Nlc3NpbmcgdGhhdCBzaG91bGQgYmUgZG9uZSBvbiB0aGUgcmVzdWx0IG9mIGEgcmVkdWN0aW9uLiBJZiB0aGVcbiAqIGNvbGxlY3Rpb24gZG9lc24ndCBzdXBwb3J0IHJlZHVjdGlvbiwgYG51bGxgIGlzIHJldHVybmVkLlxuICpcbiAqIEluIG9yZGVyIHRvIHN1cHBvcnQgdGhlIGNvbnZlcnNpb24gb2YgZnVuY3Rpb25zIGludG8gcmVkdWNlcnMsIGZ1bmN0aW9uXG4gKiBzdXBwb3J0IGlzIGFsc28gcHJvdmlkZWQuXG4gKlxuICogQHBhcmFtIHsqfSBjb2xsZWN0aW9uIEEgY29sbGVjdGlvbiB0byBjcmVhdGUgYSBzdGVwIGZ1bmN0aW9uIGZvci4gVGhpcyBjYW4gYmVcbiAqICAgICBhbnl0aGluZyB0aGF0IHN1cHBvcnRzIHRoZSBpdGVyYXRpb24gcHJvdG9jb2wsIGEgcGxhaW4gb2JqZWN0LCBvciBhXG4gKiAgICAgZnVuY3Rpb24uXG4gKiBAcmV0dXJuIHttb2R1bGU6eGR1Y2UtdG9vbHMuUmVzdWx0RnVuY3Rpb259IEEgZnVuY3Rpb24gdGhhdCwgd2hlbiBnaXZlbiBhIHJlZHVjZWRcbiAqICAgICBjb2xsZWN0aW9uLCBwcm9kdWNlcyB0aGUgZmluYWwgb3V0cHV0LiBJZiB0aGUgcHJvdmlkZWQgY29sbGVjdGlvbiBpcyBub3RcbiAqICAgICBpdGVyYWJsZSwgYG51bGxgIHdpbGwgYmUgcmV0dXJuZWQuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiByZXN1bHQoY29sbGVjdGlvbikge1xuICBzd2l0Y2ggKHRydWUpIHtcbiAgICBjYXNlIGlzSW1wbGVtZW50ZWQoY29sbGVjdGlvbiwgXCJyZXN1bHRcIik6XG4gICAgICByZXR1cm4gY29sbGVjdGlvbltwLnJlc3VsdF07XG4gICAgY2FzZSBpc1N0cmluZyhjb2xsZWN0aW9uKTpcbiAgICBjYXNlIGlzQXJyYXkoY29sbGVjdGlvbik6XG4gICAgY2FzZSBpc09iamVjdChjb2xsZWN0aW9uKTpcbiAgICBjYXNlIGlzRnVuY3Rpb24oY29sbGVjdGlvbik6XG4gICAgICByZXR1cm4gdmFsdWUgPT4gdmFsdWU7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHJlZHVjZXIgb2JqZWN0IGZyb20gYSBmdW5jdGlvbiBvciBmcm9tIGEgYnVpbHQtaW4gcmVkdWNpYmxlIHR5cGVcbiAqIChhcnJheSwgb2JqZWN0LCBvciBzdHJpbmcpLlxuICpcbiAqIFRvIGNyZWF0ZSBhIHJlZHVjZXIgZm9yIGFycmF5cywgb2JqZWN0cywgb3Igc3RyaW5ncywgc2ltcGx5IHBhc3MgYW4gZW1wdHlcbiAqIHZlcnNpb24gb2YgdGhhdCBjb2xsZWN0aW9uIHRvIHRoaXMgZnVuY3Rpb24gKGUuZy4sIGB0b1JlZHVjZXIoW10pYCkuXG4gKlxuICogVGhlIG5vdGFibGUgdXNlIGZvciB0aGlzIGZ1bmN0aW9uIHRob3VnaCBpcyB0byB0dXJuIGEgcmVkdWN0aW9uIGZ1bmN0aW9uIGludG9cbiAqIGEgcmVkdWNlciBvYmplY3QuIFRoZSBmdW5jdGlvbiBpcyBhIGZ1bmN0aW9uIG9mIHR3byBwYXJhbWV0ZXJzLCBhblxuICogYWNjdW11bGF0b3IgYW5kIGEgdmFsdWUsIGFuZCByZXR1cm5zIHRoZSBhY2N1bXVsYXRvciB3aXRoIHRoZSB2YWx1ZSBpbiBpdC5cbiAqIFRoaXMgaXMgZXhhY3RseSB0aGUgc2FtZSBraW5kIG9mIGZ1bmN0aW9uIHRoYXQgaXMgcGFzc2VkIHRvIHJlZHVjdGlvblxuICogZnVuY3Rpb25zIGxpa2UgSmF2YVNjcmlwdCdzIGBBcnJheS5wcm90b3R5cGUucmVkdWNlYCBhbmQgTG9kYXNoJ3MgYF8ucmVkdWNlYC5cbiAqXG4gKiBOb3RlIGluIHBhcnRpY3VsYXIgdGhhdCB0aGUgb3V0cHV0IG9mIHRoaXMgcmVkdWNlciBkb2VzIG5vdCBuZWVkIHRvIGJlIGFcbiAqIGNvbGxlY3Rpb24uIEl0IGNhbiBiZSBhbnl0aGluZy4gV2hpbGUgdHJhbnNkdWNpbmcgbm9ybWFsbHkgaW52b2x2ZXNcbiAqIHRyYW5zZm9ybWluZyBvbmUgY29sbGVjdGlvbiBpbnRvIGFub3RoZXIsIGl0IG5lZWQgbm90IGJlIHNvLiBGb3IgZXhhbXBsZSxcbiAqIGhlcmUgaXMgYSByZWR1Y2VyIHRoYXQgd2lsbCByZXN1bHQgaW4gc3VtbWluZyBvZiB0aGUgY29sbGVjdGlvbiB2YWx1ZXMuXG4gKlxuICogYGBgXG4gKiBpbXBvcnQgeyB0b1JlZHVjZXIsIHJlZHVjZSB9IGZyb20gXCJAY2hhbmtvL3hkdWNlXCI7XG4gKlxuICogY29uc3Qgc3VtUmVkdWNlciA9IHRvUmVkdWNlcigoYWNjLCBpbnB1dCkgPT4gYWNjICsgaW5wdXQpO1xuICogY29uc3Qgc3VtID0gcmVkdWNlKFsxLCAyLCAzLCA0LCA1XSwgc3VtUmVkdWNlciwgMCk7XG4gKiBjb25zb2xlLmxvZyhzdW0pOyAgIC8vIC0+IDE1XG4gKiBgYGBcbiAqXG4gKiBUaGlzIGNhbiBiZSBjb21iaW5lZCB3aXRoIHRyYW5zZHVjZXJzIGFzIHdlbGwsIGFzIGluIHRoaXMgY2FsY3VsYXRpb24gb2YgdGhlXG4gKiBzdW0gb2YgdGhlICpzcXVhcmVzKiBvZiB0aGUgY29sbGVjdGlvbiB2YWx1ZXMuXG4gKlxuICogYGBgXG4gKiBpbXBvcnQgeyB0b1JlZHVjZXIsIHRyYW5zZHVjZSB9IGZyb20gXCJAY2hhbmtvL3hkdWNlXCI7XG4gKiBpbXBvcnQgeyBtYXAgfSBmcm9tIFwiQGNoYW5rby90cmFuc2R1Y2Vyc1wiO1xuICpcbiAqIGNvbnN0IHN1bVJlZHVjZXIgPSB0b1JlZHVjZXIoKGFjYywgaW5wdXQpID0+IGFjYyArIGlucHV0KTtcbiAqIGNvbnN0IHN1bSA9IHRyYW5zZHVjZShbMSwgMiwgMywgNCwgNV0sIG1hcCh4ID0+IHggKiB4KSwgc3VtUmVkdWNlciwgMCk7XG4gKiBjb25zb2xlLmxvZyhzdW0pOyAgIC8vIC0+IDU1XG4gKiBgYGBcbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlLXRvb2xzXG4gKiBAcGFyYW0geyp9IGNvbGxlY3Rpb24gQW4gaXRlcmFibGUgY29sbGVjdGlvbiBvciBhIHJlZHVjZXIgZnVuY3Rpb24uXG4gKiBAcmV0dXJuIHtvYmplY3R9IEFuIG9iamVjdCBjb250YWluaW5nIHByb3RvY29sIHByb3BlcnRpZXMgZm9yIGluaXQsIHN0ZXAsIGFuZFxuICogICAgIHJlc3VsdC4gVGhpcyBvYmplY3QgaXMgc3VpdGFibGUgZm9yIHVzZSBhcyBhIHJlZHVjZXIgb2JqZWN0IChvbmUgcHJvdmlkZWRcbiAqICAgICB0byBge0BsaW5rIHhkdWNlLnJlZHVjZXxyZWR1Y2V9YCBvciBge0BsaW5rIHhkdWNlLnRyYW5zZHVjZXx0cmFuc2R1Y2V9YCkuXG4gKiAgICAgSWYgdGhlIHByb3ZpZGVkIGNvbGxlY3Rpb24gaXMgbm90IGl0ZXJhYmxlLCBhbGwgb2YgdGhlIHByb3BlcnRpZXMgb2YgdGhpc1xuICogICAgIG9iamVjdCB3aWxsIGJlIGBudWxsYC5cbiAqL1xuZnVuY3Rpb24gdG9SZWR1Y2VyKGNvbGxlY3Rpb24pIHtcbiAgcmV0dXJuIE9iamVjdC5mcmVlemUoe1xuICAgIFtwLmluaXRdOiBpbml0KGNvbGxlY3Rpb24pLFxuICAgIFtwLnN0ZXBdOiBzdGVwKGNvbGxlY3Rpb24pLFxuICAgIFtwLnJlc3VsdF06IHJlc3VsdChjb2xsZWN0aW9uKVxuICB9KTtcbn1cblxuLyoqXG4gKiBBIHJlZHVjZXIgb2JqZWN0IGZvciBhcnJheXMuXG4gKlxuICogQHR5cGUge21vZHVsZTp4ZHVjZS10b29scy5SZWR1Y2VyfVxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgQVJSQVlfUkVEVUNFUiA9IHRvUmVkdWNlcihbXSk7XG5cbi8qKlxuICogQSByZWR1Y2VyIG9iamVjdCBmb3Igb2JqZWN0cy5cbiAqXG4gKiBAdHlwZSB7bW9kdWxlOnhkdWNlLXRvb2xzLlJlZHVjZXJ9XG4gKiBAcHJpdmF0ZVxuICovXG5jb25zdCBPQkpFQ1RfUkVEVUNFUiA9IHRvUmVkdWNlcih7fSk7XG5cbi8qKlxuICogQSByZWR1Y2VyIG9iamVjdCBmb3Igc3RyaW5ncy5cbiAqXG4gKiBAdHlwZSB7bW9kdWxlOnhkdWNlLXRvb2xzLlJlZHVjZXJ9XG4gKiBAcHJpdmF0ZVxuICovXG5jb25zdCBTVFJJTkdfUkVEVUNFUiA9IHRvUmVkdWNlcihcIlwiKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgdHJhbnNkdWNlciBmcm9tIGEgZnVuY3Rpb24gYW5kIGEgdHJhbnNkdWNlciB0byBjaGFpbiBpdCB0by5cbiAqXG4gKiBUaGlzIGlzIGluIG1vc3QgcmVzcGVjdHMganVzdCBsaWtlIHtAbGluayBtb2R1bGU6eGR1Y2UtdG9vbHMudG9SZWR1Y2VyfHRvUmVkdWNlcn0sXG4gKiB3aXRoIHR3byBub3RhYmxlIGRpZmZlcmVuY2VzLiBPbmUgaXMgdGhhdCBpdCByZXF1aXJlcyBhIHRyYW5zZHVjZXIgdG8gY2hhaW5cbiAqIHRvLCBhbmQgaXQgZG9lcyB0aGUgY2hhaW5pbmcgYXMgYSBwYXJ0IG9mIGNyZWF0aW5nIHRoZSBuZXcgdHJhbnNkdWNlci4gVGhlXG4gKiBvdGhlciBpcyB0aGF0IGl0IGluY2x1ZGVzIGEgdXNhYmxlIGBpbml0YCBmdW5jdGlvbiwgd2hlcmUgcGFzc2luZyBhIGZ1bmN0aW9uXG4gKiB0byB7QGxpbmsgbW9kdWxlOnhkdWNlLXRvb2xzLnRvUmVkdWNlcnx0b1JlZHVjZXJ9IHdvdWxkIGNyZWF0ZSBhbiBpbml0IGZ1bmN0aW9uIHRoYXRcbiAqIHRocm93cyBhbiBlcnJvciBpZiBpdCdzIGNhbGxlZC5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIGFwcGxpZXMgdGhlIGdpdmVuIGZ1bmN0aW9uIGFzIHRoZSBgc3RlcGAgZnVuY3Rpb24gb2YgdGhlXG4gKiByZXR1cm5lZCB0cmFuc2R1Y2VyLCBhbmQgdGhlIGBpbml0YCBhbmQgYHJlc3VsdGAgZnVuY3Rpb25zIHNpbXBseSBjYWxsIHRoZVxuICogc2FtZSBmdW5jdGlvbnMgaW4gdGhlIG5leHQgdHJhbnNkdWNlciBkb3duIHRoZSBjaGFpbi4gVGhpcyBpcyBwcmVjaXNlbHkgd2hhdFxuICogKm1vc3QqIHRyYW5zZHVjZXJzIHdhbnQuLi5gaW5pdGAgYW5kIGByZXN1bHRgIGZ1bmN0aW9ucyBhcmUgbm9ybWFsbHkgaGFuZGxlZFxuICogYnkgdGhlIHJlZHVjZXIgYXQgdGhlIGVuZCBvZiB0aGUgdHJhbnNkdWNlciBjaGFpbi4uLmJ1dCBpbiB0aGUgcmFyZSBjYXNlIHdoZW5cbiAqIGBpbml0YCBvciBgcmVzdWx0YCBtdXN0IGRvIG1vcmUgdGhhbiB0aGlzLCB0aGUgdHJhbnNkdWNlciBtdXN0IGJlIGNyZWF0ZWRcbiAqIG1hbnVhbGx5LlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gZG9lcyBub3QgYXV0b21hdGljYWxseSBjaGFpbiB0aGUgYHN0ZXBgIGZ1bmN0aW9uIHRvIHRoZSBuZXh0XG4gKiBvbmUgZG93biB0aGUgbGluZSwgYXMgdGhhdCBjYW4gYmUgZG9uZSBpbiBhbnkgbnVtYmVyIG9mIGRpZmZlcmVudCB3YXlzLiBUaHVzXG4gKiB0aGUgZnVuY3Rpb24gaXRzZWxmIHNob3VsZCBjYWxsIHRoZSBgc3RlcGAgZnVuY3Rpb24gaW4gYHhmb3JtYCBpbiB3aGF0ZXZlclxuICogd2F5IGlzIGFwcHJvcHJpYXRlLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2UtdG9vbHNcbiAqIEBwYXJhbSB7bW9kdWxlOnhkdWNlLXRvb2xzLlN0ZXBGdW5jdGlvbn0gZm4gVGhlIHN0ZXAgZnVuY3Rpb24gZm9yIHRoZSB0cmFuc2R1Y2VyLlxuICogQHBhcmFtIHttb2R1bGU6eGR1Y2UtdG9vbHMuVHJhbnNkdWNlcn0geGZvcm0gVGhlIG5leHQgdHJhbnNkdWNlciBvYmplY3QgaW4gdGhlXG4gKiAgICAgY2hhaW4uXG4gKiBAcmV0dXJucyB7bW9kdWxlOnhkdWNlLXRvb2xzLlRyYW5zZHVjZXJ9IEEgbmV3IHRyYW5zZHVjZXIsIGNoYWluaW5nIHRoZSBzdXBwbGllZFxuICogICAgIGZ1bmN0aW9uIHRvIHRoZSBzdXBwbGllZCB0cmFuc2R1Y2VyLlxuICovXG5mdW5jdGlvbiB0b1RyYW5zZHVjZXIoZm4sIHhmb3JtKSB7XG4gIHJldHVybiB7XG4gICAgW3AuaW5pdF0oKSB7XG4gICAgICByZXR1cm4geGZvcm1bcC5pbml0XSgpO1xuICAgIH0sXG5cbiAgICBbcC5zdGVwXTogZm4sXG5cbiAgICBbcC5yZXN1bHRdKHZhbHVlKSB7XG4gICAgICByZXR1cm4geGZvcm1bcC5yZXN1bHRdKHZhbHVlKTtcbiAgICB9XG4gIH07XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHJlZHVjdGlvbiBmdW5jdGlvbiBmcm9tIGEgdHJhbnNkdWNlciBhbmQgYSByZWR1Y2VyLlxuICpcbiAqIFRoaXMgcHJvZHVjZXMgYSBmdW5jdGlvbiB0aGF0J3Mgc3VpdGFibGUgZm9yIGJlaW5nIHBhc3NlZCBpbnRvIG90aGVyXG4gKiBsaWJyYXJpZXMnIHJlZHVjZSBmdW5jdGlvbnMsIHN1Y2ggYXMgSmF2YVNjcmlwdCdzIGBBcnJheS5wcm90b3R5cGUucmVkdWNlYCBvclxuICogTG9kYXNoJ3MgYF8ucmVkdWNlYC4gSXQgcmVxdWlyZXMgYm90aCBhIHRyYW5zZm9ybWVyIGFuZCBhIHJlZHVjZXIgYmVjYXVzZVxuICogcmVkdWN0aW9uIGZ1bmN0aW9ucyBmb3IgdGhvc2UgbGlicmFyaWVzIG11c3Qga25vdyBob3cgdG8gZG8gYm90aC4gVGhlIHJlZHVjZXJcbiAqIGNhbiBiZSBhIHN0YW5kYXJkIHJlZHVjZXIgb2JqZWN0IGxpa2UgdGhlIG9uZXMgc2VudFxuICogdG9ge0BsaW5rIG1vZHVsZTp4ZHVjZS10b29scy50cmFuc2R1Y2V8dHJhbnNkdWNlfWAgb3JcbiAqIGB7QGxpbmsgbW9kdWxlOnhkdWNlLXRvb2xzLnJlZHVjZXxyZWR1Y2V9YCwgb3IgaXQgY2FuIGJlIGEgcGxhaW4gZnVuY3Rpb24gdGhhdCB0YWtlc1xuICogdHdvIHBhcmFtZXRlcnMgYW5kIHJldHVybnMgdGhlIHJlc3VsdCBvZiByZWR1Y2luZyB0aGUgc2Vjb25kIHBhcmFtZXRlciBpbnRvXG4gKiB0aGUgZmlyc3QuXG4gKlxuICogSWYgdGhlcmUgaXMgbm8gbmVlZCBmb3IgYSB0cmFuc2Zvcm1hdGlvbiwgdGhlbiBwYXNzIGluIHRoZVxuICogYHtAbGluayBtb2R1bGU6dHJhbnNkdWNlcnMuaWRlbnRpdHl8aWRlbnRpdHl9YCB0cmFuc2R1Y2VyLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2UtdG9vbHNcbiAqIEBwYXJhbSB7bW9kdWxlOnhkdWNlLXRvb2xzLlJlZHVjZXJ9IHhmb3JtIEEgdHJhbnNkdWNlciBvYmplY3Qgd2hvc2Ugc3RlcCBmdW5jdGlvblxuICogICAgIHdpbGwgYmVjb21lIHRoZSByZXR1cm5lZCByZWR1Y3Rpb24gZnVuY3Rpb24uXG4gKiBAcGFyYW0geyhtb2R1bGU6eGR1Y2UtdG9vbHMuU3RlcEZ1bmN0aW9ufG1vZHVsZTp4ZHVjZS10b29scy5SZWR1Y2VyKX0gcmVkdWNlciBBIHJlZHVjZXJcbiAqICAgICB0aGF0IGtub3dzIGhvdyB0byByZWR1Y2UgdmFsdWVzIGludG8gYW4gb3V0cHV0IGNvbGxlY3Rpb24uIFRoaXMgY2FuXG4gKiAgICAgZWl0aGVyIGJlIGEgcmVkdWNpbmcgZnVuY3Rpb24gb3IgYSB0cmFuc2R1Y2VyIG9iamVjdCB3aG9zZSBgc3RlcGBcbiAqICAgICBmdW5jdGlvbiBrbm93cyBob3cgdG8gcGVyZm9ybSB0aGlzIHJlZHVjdGlvbi5cbiAqIEByZXR1cm5zIHttb2R1bGU6eGR1Y2UtdG9vbHMuU3RlcEZ1bmN0aW9ufSBBIGZ1bmN0aW9uIHRoYXQgaGFuZGxlcyBib3RoIHRoZVxuICogICAgIHRyYW5zZm9ybWF0aW9uIGFuZCB0aGUgcmVkdWN0aW9uIG9mIGEgdmFsdWUgb250byBhIHRhcmdldCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gdG9GdW5jdGlvbih4Zm9ybSwgcmVkdWNlcikge1xuICBjb25zdCByID0gdHlwZW9mIHJlZHVjZXIgPT09IFwiZnVuY3Rpb25cIiA/IHRvUmVkdWNlcihyZWR1Y2VyKSA6IHJlZHVjZXI7XG4gIGNvbnN0IHJlc3VsdCA9IHhmb3JtKHIpO1xuICByZXR1cm4gcmVzdWx0W3Auc3RlcF0uYmluZChyZXN1bHQpO1xufVxuXG4vKipcbiAqIE1hcmtzIGEgdmFsdWUgYXMgY29tcGxldGUuXG4gKlxuICogVGhpcyBpcyBkb25lIGJ5IHdyYXBwaW5nIHRoZSB2YWx1ZS4gVGhpcyBtZWFucyB0aHJlZSB0aGluZ3M6IGZpcnN0LCBhXG4gKiBjb21wbGV0ZSBvYmplY3QgbWF5IGJlIG1hcmtlZCBhcyBjb21wbGV0ZSBhZ2Fpbjsgc2Vjb25kLCBhIGNvbXBsZXRlIHZhbHVlXG4gKiBpc24ndCB1c2FibGUgd2l0aG91dCBiZWluZyB1bmNvbXBsZXRlZCBmaXJzdDsgYW5kIHRoaXJkIGFueSB0eXBlIG9mIHZhbHVlXG4gKiAoaW5jbHVkaW5nIGB1bmRlZmluZWRgKSBtYXkgYmUgbWFya2VkIGFzIGNvbXBsZXRlLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2UtdG9vbHNcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGJlIGNvbXBsZXRlZC5cbiAqIEByZXR1cm4geyp9IEEgY29tcGxldGVkIHZlcnNpb24gb2YgdGhlIHByb3ZpZGVkIHZhbHVlLiBUaGlzIHJlZHVjdGlvbiBpc1xuICogICAgIGFjaGlldmVkIGJ5IHdyYXBwaW5nIHRoZSB2YWx1ZSBpbiBhIG1hcmtlciBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIGNvbXBsZXRlKHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgW3AucmVkdWNlZF06IHRydWUsXG4gICAgW3AudmFsdWVdOiB2YWx1ZVxuICB9O1xufVxuXG4vKipcbiAqIFJlbW92ZXMgdGhlIGNvbXBsZXRlIHN0YXR1cyBmcm9tIGEgY29tcGxldGVkIHZhbHVlLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gaXMgaW50ZW5kZWQgdG8gYmUgdXNlZCB3aGVuIGl0J3MgY2VydGFpbiB0aGF0IGEgdmFsdWUgaXNcbiAqIGFscmVhZHkgbWFya2VkIGFzIGNvbXBsZXRlLiBJZiBpdCBpcyBub3QsIGB1bmRlZmluZWRgIHdpbGwgYmUgcmV0dXJuZWRcbiAqIGluc3RlYWQgb2YgdGhlIHZhbHVlLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2UtdG9vbHNcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGJlIHVuY29tcGxldGVkLlxuICogQHJldHVybiB7Kn0gQW4gdW5jb21wbGV0ZWQgdmVyc2lvbiBvZiB0aGUgcHJvdmlkZWQgdmFsdWUuIElmIHRoZSB2YWx1ZSB3YXNcbiAqICAgICBub3QgY29tcGxldGUgaW4gdGhlIGZpcnN0IHBsYWNlLCBgdW5kZWZpbmVkYCB3aWxsIGJlIHJldHVybmVkIGluc3RlYWQuXG4gKi9cbmZ1bmN0aW9uIHVuY29tcGxldGUodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlPy5bcC52YWx1ZV07XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGEgdmFsdWUgaXMgbWFya2VkIGFzIGNvbXBsZXRlLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2UtdG9vbHNcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3QgZm9yIGl0cyBjb21wbGV0ZSBzdGF0dXMuXG4gKiBAcmV0dXJuIHtib29sZWFufSBFaXRoZXIgYHRydWVgIGlmIHRoZSB2YWx1ZSBpcyBjb21wbGV0ZSwgb3IgYGZhbHNlYCBpZiBpdCBpc1xuICogICAgIG5vdC5cbiAqL1xuZnVuY3Rpb24gaXNDb21wbGV0ZWQodmFsdWUpIHtcbiAgcmV0dXJuICEhdmFsdWU/LltwLnJlZHVjZWRdO1xufVxuXG4vKipcbiAqIE1ha2VzIHN1cmUgdGhhdCBhIHZhbHVlIGlzIG1hcmtlZCBhcyBjb21wbGV0ZTsgaWYgaXQgaXMgbm90LCBpdCB3aWxsIGJlXG4gKiBtYXJrZWQgYXMgY29tcGxldGUuXG4gKlxuICogVGhpcyBkaWZmZXJzIGZyb20ge0BsaW5rIG1vZHVsZTp4ZHVjZS10b29scy5jb21wbGV0ZXxjb21wbGV0ZX0gaW4gdGhhdCBpZiB0aGUgdmFsdWVcbiAqIGlzIGFscmVhZHkgY29tcGxldGUsIHRoaXMgZnVuY3Rpb24gd29uJ3QgY29tcGxldGUgaXQgYWdhaW4uIFRoZXJlZm9yZSB0aHVzXG4gKiBmdW5jdGlvbiBjYW4ndCBiZSB1c2VkIHRvIG1ha2UgYSB2YWx1ZSBjb21wbGV0ZSBtdWx0aXBsZSB0aW1lcy5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlLXRvb2xzXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBiZSBjb21wbGV0ZWQuXG4gKiBAcmV0dXJuIHsqfSBJZiB0aGUgdmFsdWUgaXMgYWxyZWFkeSBjb21wbGV0ZSwgdGhlbiB0aGUgdmFsdWUgaXMgc2ltcGx5XG4gKiAgICAgcmV0dXJuZWQuIE90aGVyd2lzZSwgYSBjb21wbGV0ZWQgdmVyc2lvbiBvZiB0aGUgdmFsdWUgaXMgcmV0dXJuZWQuXG4gKi9cbmZ1bmN0aW9uIGVuc3VyZUNvbXBsZXRlZCh2YWx1ZSkge1xuICByZXR1cm4gaXNDb21wbGV0ZWQodmFsdWUpID8gdmFsdWUgOiBjb21wbGV0ZSh2YWx1ZSk7XG59XG5cbi8qKlxuICogUmVtb3ZlcyB0aGUgY29tcGxldGUgc3RhdHVzIGZyb20gYSB2YWx1ZSwgYXMgbG9uZyBhcyBpdCBhY3R1YWxseSBpcyBjb21wbGV0ZS5cbiAqXG4gKiBUaGlzIGRvZXMgYSBjaGVjayB0byBtYWtlIHN1cmUgdGhlIHZhbHVlIHBhc3NlZCBpbiBhY3R1YWxseSBpcyBjb21wbGV0ZS4gSWZcbiAqIGl0IGlzbid0LCB0aGUgdmFsdWUgaXRzZWxmIGlzIHJldHVybmVkLiBJdCdzIG1lYW50IHRvIGJlIHVzZWQgd2hlbiB0aGVcbiAqIGNvbXBsZXRlZCBzdGF0dXMgaXMgdW5jZXJ0YWluLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2UtdG9vbHNcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIGNvbXBsZXRlIHZhbHVlIHRvIGJlIHVuY29tcGxldGVkLlxuICogQHJldHVybiB7Kn0gSWYgdGhlIHZhbHVlIGlzIGFscmVhZHkgdW5jb21wbGV0ZWQsIHRoZSB2YWx1ZSBpcyBzaW1wbHlcbiAqICAgICByZXR1cm5lZC4gT3RoZXJ3aXNlIGFuIHVuY29tcGxldGVkIHZlcnNpb24gb2YgdGhlIHZhbHVlIGlzIHJldHVybmVkLlxuICovXG5mdW5jdGlvbiBlbnN1cmVVbmNvbXBsZXRlZCh2YWx1ZSkge1xuICByZXR1cm4gaXNDb21wbGV0ZWQodmFsdWUpID8gdW5jb21wbGV0ZSh2YWx1ZSkgOiB2YWx1ZTtcbn1cblxuLyoqXG4gKiBSZWR1Y2VzIHRoZSBlbGVtZW50cyBvZiB0aGUgaW5wdXQgY29sbGVjdGlvbiB0aHJvdWdoIGEgcmVkdWNlciBpbnRvIGFuIG91dHB1dFxuICogY29sbGVjdGlvbi5cbiAqXG4gKiBUaGlzIGlzIHRoZSBsb3dlc3QtbGV2ZWwgb2YgdGhlIHRyYW5zZHVjdGlvbiBmdW5jdGlvbnMuIEluIGZhY3QsIHRoaXMgb25lIGlzXG4gKiBzbyBsb3ctbGV2ZWwgdGhhdCBpdCBkb2Vzbid0IGhhdmUgYSBsb3Qgb2YgdXNlIGluIG5vcm1hbCBvcGVyYXRpb24uIEl0J3MgbW9yZVxuICogdXNlZnVsIGZvciB3cml0aW5nIHlvdXIgb3duIHRyYW5zZm9ybWF0aW9uIGZ1bmN0aW9ucy5cbiAqXG4gKiBgcmVkdWNlYCBkb2Vzbid0IGFzc3VtZSB0aGF0IHRoZXJlJ3MgZXZlbiBhIHRyYW5zZm9ybWF0aW9uLiBJdCByZXF1aXJlcyBhblxuICogaW5pdGlhbCBjb2xsZWN0aW9uIGFuZCBhIHJlZHVjZXIgb2JqZWN0IHRoYXQgaXMgbWF0Y2hlZCB0byB0aGF0IGluaXRpYWxcbiAqIGNvbGxlY3Rpb24uIFRoZSByZWR1Y2VyIG9iamVjdCBtdXN0IGltcGxlbWVudCB0aGUgYHN0ZXBgIGFuZCBgcmVzdWx0YFxuICogcHJvdG9jb2xzLCB3aGljaCBpbnN0cnVjdCBgcmVkdWNlYCBvbiBob3cgdG8gYnVpbGQgdXAgdGhlIGNvbGxlY3Rpb24uIFRoZVxuICogcmVkdWNlciBtYXkgaW1wbGVtZW50IGEgdHJhbnNmb3JtYXRpb24gYXMgd2VsbCwgYnV0IGFsbCB0aGF0J3MgaW1wb3J0YW50IGhlcmVcbiAqIGlzIHRoYXQgaXQgY2FuIGRvIHRoZSByZWR1Y3Rpb24uXG4gKlxuICogVGhlIGlucHV0IGNvbGxlY3Rpb24gbmVlZCBvbmx5IGltcGxlbWVudCBgaXRlcmFibGVgLiBJdCBpcyBub3QgbmVjZXNzYXJ5IGZvclxuICogdGhlIGlucHV0IGFuZCBvdXRwdXQgY29sbGVjdGlvbnMgdG8gYmUgb2YgdGhlIHNhbWUgdHlwZTsgYXMgbG9uZyBhcyB0aGUgaW5wdXRcbiAqIGltcGxlbWVudHMgYGl0ZXJhYmxlYCBhbmQgdGhlIHJlZHVjZXIgaW1wbGVtZW50cyBgc3RlcGAgYW5kIGByZXN1bHRgXG4gKiBhcHByb3ByaWF0ZSB0byB0aGUgdHlwZSBvZiB0aGUgYGluaXRgIGNvbGxlY3Rpb24sIHRoZW4gYW55IHRyYW5zbGF0aW9uXG4gKiBiZXR3ZWVuIGNvbGxlY3Rpb24gdHlwZXMgY2FuIG9jY3VyLlxuICpcbiAqIFRoZSBub3JtYWwgY291cnNlIG9mIG9wZXJhdGlvbiB3aWxsIGJlIHRvIGNhbGxcbiAqIHtAbGluayBtb2R1bGU6eGR1Y2UtdG9vbHMudHJhbnNkdWNlfHRyYW5zZHVjZX0gaW5zdGVhZCwgYXMgdGhhdCBmdW5jdGlvbiBtYWtlcyBpdFxuICogZWFzeSB0byBjb21iaW5lIHRyYW5zZm9ybWF0aW9ucyB3aXRoIHJlZHVjdGlvbnMgYW5kIGNhbiBvcHRpb25hbGx5IGZpZ3VyZSBvdXRcbiAqIHRoZSBpbml0aWFsIGNvbGxlY3Rpb24gaXRzZWxmLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2UtdG9vbHNcbiAqIEBwYXJhbSB7Kn0gY29sbGVjdGlvbiBUaGUgaW5wdXQgY29sbGVjdGlvbi4gVGhlIG9ubHkgcmVxdWlyZW1lbnQgb2YgdGhpc1xuICogICAgIGNvbGxlY3Rpb24gaXMgdGhhdCBpdCBpbXBsZW1lbnQgdGhlIGBpdGVyYWJsZWAgcHJvdG9jb2wuIFNwZWNpYWwgc3VwcG9ydFxuICogICAgIGlzIHByb3ZpZGVkIGJ5IHRoZSBsaWJyYXJ5IGZvciBvYmplY3RzLCBzbyB0aGV5IGNhbiBiZSB1c2VkIGFzIHdlbGwuXG4gKiBAcGFyYW0ge21vZHVsZTp4ZHVjZS10b29scy5SZWR1Y2VyfSByZWR1Y2VyIEFuIG9iamVjdCB0aGF0IGltcGxlbWVudHMgdGhlIGBzdGVwYCBhbmRcbiAqICAgICBgcmVzdWx0YCBwcm90b2NvbHMuIFRoaXMgb2JqZWN0IG11c3Qga25vdyBob3cgdG8gcHJvZHVjZSBhbiBvdXRwdXRcbiAqICAgICBjb2xsZWN0aW9uIHRocm91Z2ggdGhvc2UgcHJvdG9jb2wgZnVuY3Rpb25zLlxuICogQHBhcmFtIHsqfSBpbml0IGEgY29sbGVjdGlvbiBvZiB0aGUgc2FtZSB0eXBlIGFzIHRoZSBvdXRwdXQgY29sbGVjdGlvbi4gSXRcbiAqICAgICBuZWVkIG5vdCBiZSBlbXB0eTsgaWYgaXQgaXMgbm90LCB0aGUgZXhpc3RpbmcgZWxlbWVudHMgYXJlIHJldGFpbmVkIGFzXG4gKiAgICAgdGhlIGlucHV0IGNvbGxlY3Rpb24gaXMgcmVkdWNlZCBpbnRvIGl0LlxuICogQHJldHVybiB7Kn0gQSBuZXcgY29sbGVjdGlvbiwgY29uc2lzdGluZyBvZiB0aGUgYGluaXRgIGNvbGxlY3Rpb24gd2l0aCBhbGwgb2ZcbiAqICAgICB0aGUgZWxlbWVudHMgb2YgdGhlIGBjb2xsZWN0aW9uYCBjb2xsZWN0aW9uIHJlZHVjZWQgaW50byBpdC5cbiAqL1xuZnVuY3Rpb24gcmVkdWNlKGNvbGxlY3Rpb24sIHJlZHVjZXIsIGluaXQpIHtcbiAgaWYgKGNvbGxlY3Rpb24gPT0gbnVsbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3QgaXRlciA9IGl0ZXJhdG9yKGNvbGxlY3Rpb24pO1xuICBpZiAoIWl0ZXIpIHtcbiAgICB0aHJvdyBFcnJvcihgQ2Fubm90IHJlZHVjZSBhbiBpbnN0YW5jZSBvZiAke2NvbGxlY3Rpb24uY29uc3RydWN0b3IubmFtZX1gKTtcbiAgfVxuXG4gIGxldCBhY2MgPSBpbml0O1xuICBsZXQgc3RlcCA9IGl0ZXIubmV4dCgpO1xuXG4gIHdoaWxlICghc3RlcC5kb25lKSB7XG4gICAgYWNjID0gcmVkdWNlcltwLnN0ZXBdKGFjYywgc3RlcC52YWx1ZSk7XG4gICAgaWYgKGlzQ29tcGxldGVkKGFjYykpIHtcbiAgICAgIGFjYyA9IHVuY29tcGxldGUoYWNjKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBzdGVwID0gaXRlci5uZXh0KCk7XG4gIH1cblxuICByZXR1cm4gcmVkdWNlcltwLnJlc3VsdF0oYWNjKTtcbn1cblxuZXhwb3J0IHtcbiAgaW5pdCxcbiAgc3RlcCxcbiAgcmVzdWx0LFxuICB0b1JlZHVjZXIsXG4gIEFSUkFZX1JFRFVDRVIsXG4gIE9CSkVDVF9SRURVQ0VSLFxuICBTVFJJTkdfUkVEVUNFUixcbiAgdG9UcmFuc2R1Y2VyLFxuICB0b0Z1bmN0aW9uLFxuICBjb21wbGV0ZSxcbiAgdW5jb21wbGV0ZSxcbiAgaXNDb21wbGV0ZWQsXG4gIGVuc3VyZUNvbXBsZXRlZCxcbiAgZW5zdXJlVW5jb21wbGV0ZWQsXG4gIHJlZHVjZVxufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG4vKipcbiAqIEEgYnVuY2ggb2YgdXRpbGl0eSBmdW5jdGlvbnMuIFRoZXNlIGFyZSBhbGwgdXNlZCBieSB0aGUgbGlicmFyeSBpdHNlbGYgaW5cbiAqIHBsYWNlcywgYnV0IG1hbnkgb2YgdGhlbSBhcmUgc3VpdGFibGUgZm9yIGdlbmVyYWwgdXNlIGFzIHdlbGwuXG4gKiBeXG4gKiBAbW9kdWxlIGNvcmUvdXRpbHNcbiAqIEBwcml2YXRlXG4gKi9cblxuLyoqXG4gKiBgT2JqZWN0YCdzIGB0b1N0cmluZ2AgaXMgZXhwbGljaXRseSB1c2VkIHRocm91Z2hvdXQgYmVjYXVzZSBpdCBjb3VsZCBiZVxuICogcmVkZWZpbmVkIGluIGFueSBzdWJ0eXBlIG9mIGBPYmplY3RgLlxuICpcbiAqIEBmdW5jdGlvbiB0b1N0cmluZ1xuICogQHByaXZhdGVcbiAqL1xuY29uc3QgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhIHZhbHVlIGlzIGEgZnVuY3Rpb24uXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZS10b29sc1xuICogQHBhcmFtIHsqfSB4IFRoZSB2YWx1ZSBiZWluZyB0ZXN0ZWQgdG8gc2VlIGlmIGl0IGlzIGEgZnVuY3Rpb24uXG4gKiBAcmV0dXJuIHtib29sZWFufSBFaXRoZXIgYHRydWVgIGlmIHRoZSB0ZXN0IHZhbHVlIGlzIGEgZnVuY3Rpb24gb3IgYGZhbHNlYCBpZlxuICogICAgIGl0IGlzIG5vdC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24oeCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh4KSA9PT0gXCJbb2JqZWN0IEZ1bmN0aW9uXVwiO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhIHZhbHVlIGlzIGEgZ2VuZXJhdG9yIGZ1bmN0aW9uLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2UtdG9vbHNcbiAqIEBwYXJhbSB7Kn0geCBUaGUgdmFsdWUgYmVpbmcgdGVzdGVkIHRvIHNlZSBpZiBpdCBpcyBhIGdlbmVyYXRvciBmdW5jdGlvbi5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IEVpdGhlciBgdHJ1ZWAgaWYgdGhlIHRlc3QgdmFsdWUgaXMgYSBnZW5lcmF0b3IgZnVuY3Rpb24gb3JcbiAqICAgICBgZmFsc2VgIGlmIGl0IGlzIG5vdC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGlzR2VuZXJhdG9yRnVuY3Rpb24oeCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh4KSA9PT0gXCJbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXVwiO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhIHZhbHVlIGlzIGEgcGxhaW4gb2JqZWN0LlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gcmV0dXJucyBgZmFsc2VgIGlmIHRoZSB2YWx1ZSBpcyBhbnkgb3RoZXIgc29ydCBvZiBidWlsdC1pblxuICogb2JqZWN0IChzdWNoIGFzIGFuIGFycmF5IG9yIGEgc3RyaW5nKS4gSXQgYWxzbyByZXR1cm5zIGBmYWxzZWAgZm9yIGFueSBvYmplY3RcbiAqIHRoYXQgaXMgY3JlYXRlZCBieSBhIGNvbnN0cnVjdG9yIHRoYXQgaXMgbm90IGBPYmplY3RgJ3MgY29uc3RydWN0b3IsIG1lYW5pbmdcbiAqIHRoYXQgXCJpbnN0YW5jZXNcIiBvZiBjdXN0b20gXCJjbGFzc2VzXCIgd2lsbCByZXR1cm4gYGZhbHNlYC4gVGhlcmVmb3JlIGl0J3Mgb25seVxuICogZ29pbmcgdG8gcmV0dXJuIGB0cnVlYCBmb3IgbGl0ZXJhbCBvYmplY3RzIG9yIHRob3NlIGNyZWF0ZWQgd2l0aFxuICogYE9iamVjdC5jcmVhdGUoKWAuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZS10b29sc1xuICogQHBhcmFtIHsqfSB4IFRoZSB2YWx1ZSBiZWluZyB0ZXN0ZWQgdG8gc2VlIGlmIGl0IGlzIGEgcGxhaW4gb2JqZWN0LlxuICogQHJldHVybiB7Ym9vbGVhbn0gRWl0aGVyIGB0cnVlYCBpZiB0aGUgdGVzdCB2YWx1ZSBpcyBhIHBsYWluIG9iamVjdCBvclxuICogICAgIGBmYWxzZWAgaWYgaXQgaXMgbm90LlxuICovXG5mdW5jdGlvbiBpc09iamVjdCh4KSB7XG4gIC8vIFRoaXMgY2hlY2sgZXhjbHVkZXMgYnVpbHQtaW4gbm9uLU9iamVjdCBvYmplY3RzIChzdWNoIGFzIEFycmF5IGFuZCBTdHJpbmcpLlxuICAvLyBJdCBhbHNvIGV4Y2x1ZGVzIG9iamVjdHMgY3JlYXRlZCBmcm9tIEVTMjAxNSBjbGFzc2VzLCBidXQgaXQgZG9lcyBub3RcbiAgLy8gZXhjbHVkZSBvYmplY3RzIGNyZWF0ZWQgd2l0aCBgbmV3YCBvbiBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgKHRoYXQgaGFwcGVuc1xuICAvLyBiZWxvdykuXG4gIGlmICh0b1N0cmluZy5jYWxsKHgpICE9PSBcIltvYmplY3QgT2JqZWN0XVwiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gUHJvdG90eXBlLWxlc3Mgb2JqZWN0cyAoY3JlYXRlZCB3aXRoIGBPYmplY3QuY3JlYXRlKG51bGwpKWAgcGFzc1xuICBjb25zdCBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih4KTtcbiAgaWYgKHByb3RvID09PSBudWxsKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvLyBDaGVjayB0byBzZWUgd2hldGhlciB0aGUgY29uc3RydWN0b3Igb2YgdGhlIHRlc3RlZCBvYmplY3QgaXMgdGhlIE9iamVjdFxuICAvLyBjb25zdHJ1Y3Rvci4gVGhpcyBpcyB0aGUgb25seSBjb25zdHJ1Y3RvciB0aGF0IHByb2R1Y2VzIGEgXCJwbGFpblwiIG9iamVjdC5cbiAgY29uc3QgY3RvciA9XG4gICAgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHByb3RvLCBcImNvbnN0cnVjdG9yXCIpICYmXG4gICAgcHJvdG8uY29uc3RydWN0b3I7XG4gIHJldHVybiB0eXBlb2YgY3RvciA9PT0gXCJmdW5jdGlvblwiICYmIGN0b3IgPT09IE9iamVjdDtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgYSB2YWx1ZSBpcyBhIG51bWJlci5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHdpbGwgcmV0dXJuIGB0cnVlYCBmb3IgYW55IG51bWJlciBsaXRlcmFsIG9yIGluc3RhbmNlIG9mXG4gKiBgTnVtYmVyYCBleGNlcHQgZm9yIGBJbmZpbml0eWAgb3IgYE5hTmAuIEl0IHdpbGwgcmV0dXJuIGBmYWxzZWAgZm9yIHN0cmluZ3NcbiAqIHRoYXQgaGFwcGVuIHRvIGFsc28gYmUgbnVtYmVyczsgdGhlIHZhbHVlIG11c3QgYmUgYW4gYWN0dWFsIGBOdW1iZXJgIGluc3RhbmNlXG4gKiBvciBudW1iZXIgbGl0ZXJhbCB0byByZXR1cm4gYHRydWVgLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2UtdG9vbHNcbiAqIEBwYXJhbSB7Kn0geCBUaGUgdmFsdWUgYmVpbmcgdGVzdGVkIHRvIHNlZSBpZiBpdCBpcyBhIG51bWJlci5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IEVpdGhlciBgdHJ1ZWAgaWYgdGhlIHRlc3QgdmFsdWUgaXMgYSBmaW5pdGUgbnVtYmVyIChub3RcbiAqICAgICBpbmNsdWRpbmcgc3RyaW5nIHJlcHJlc2VudGF0aW9ucyBvZiBudW1iZXJzKSBvciBgZmFsc2VgIGlmIGl0IGlzIG5vdC5cbiAqL1xuZnVuY3Rpb24gaXNOdW1iZXIoeCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh4KSA9PT0gXCJbb2JqZWN0IE51bWJlcl1cIiAmJiBpc0Zpbml0ZSh4KTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgYSB2YWx1ZSBpcyBhIHN0cmluZy5cbiAqXG4gKiBMaXRlcmFsIHN0cmluZ3Mgd2lsbCByZXR1cm4gYHRydWVgLCBhcyB3aWxsIGluc3RhbmNlcyBvZiB0aGUgYFN0cmluZ2Agb2JqZWN0LlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2UtdG9vbHNcbiAqIEBwYXJhbSB7Kn0geCBUaGUgdmFsdWUgYmVpbmcgdGVzdGVkIHRvIHNlZSBpZiBpdCBpcyBhIHN0cmluZy5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IEVpdGhlciBgdHJ1ZWAgaWYgdGhlIHRlc3QgdmFsdWUgaXMgYSBzdHJpbmcgb3IgYGZhbHNlYCBpZlxuICogICAgaXQgaXMgbm90LlxuICovXG5mdW5jdGlvbiBpc1N0cmluZyh4KSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHgpID09PSBcIltvYmplY3QgU3RyaW5nXVwiO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhIHZhbHVlIGlzIGFuIGFycmF5LlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gbWVyZWx5IGRlbGVnYXRlcyB0byBgQXJyYXkuaXNBcnJheWAuIEl0IGlzIHByb3ZpZGVkIGZvclxuICogY29uc2lzdGVuY3kgaW4gY2FsbGluZyBzdHlsZSBvbmx5LlxuICpcbiAqIEBmdW5jdGlvbiBpc0FycmF5XG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlLXRvb2xzXG4gKiBAcGFyYW0geyp9IHggVGhlIHZhbHVlIGJlaW5nIHRlc3RlZCB0byBzZWUgaWYgaXQgaXMgYW4gYXJyYXkuXG4gKiBAcmV0dXJuIHtib29sZWFufSBFaXRoZXIgYHRydWVgIGlmIHRoZSB0ZXN0IHZhbHVlIGlzIGFuIGFycmF5IG9yIGBmYWxzZWAgaWZcbiAqICAgICBpdCBpcyBub3QuXG4gKi9cbmNvbnN0IGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuXG5leHBvcnQge1xuICBpc0Z1bmN0aW9uLFxuICBpc0dlbmVyYXRvckZ1bmN0aW9uLFxuICBpc09iamVjdCxcbiAgaXNOdW1iZXIsXG4gIGlzU3RyaW5nLFxuICBpc0FycmF5XG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG5cbi8qKlxuICogQG1vZHVsZSB4ZHVjZVxuICovXG5cbmV4cG9ydCB7IGt2LCBrZXksIHZhbHVlLCBjb21wbGVtZW50IH0gZnJvbSBcIm1vZHVsZXMvdXRpbHNcIjtcbmV4cG9ydCB7XG4gIHRyYW5zZHVjZSxcbiAgc2VxdWVuY2UsXG4gIGludG8sXG4gIGFzQXJyYXksXG4gIGFzT2JqZWN0LFxuICBhc1N0cmluZyxcbiAgYXNJdGVyYXRvcixcbiAgY29tcG9zZSxcbiAgdG9SZWR1Y2VyLFxuICB0b0Z1bmN0aW9uXG59IGZyb20gXCJtb2R1bGVzL3RyYW5zZHVjdGlvblwiO1xuZXhwb3J0IHsgaWRlbnRpdHksIGZsYXR0ZW4sIHJlcGVhdCB9IGZyb20gXCJtb2R1bGVzL2Jhc2ljXCI7XG5leHBvcnQgeyBjaHVuaywgY2h1bmtCeSB9IGZyb20gXCJtb2R1bGVzL2NodW5rXCI7XG5leHBvcnQgeyBkaXN0aW5jdCwgZGlzdGluY3RCeSwgZGlzdGluY3RXaXRoIH0gZnJvbSBcIm1vZHVsZXMvZGlzdGluY3RcIjtcbmV4cG9ydCB7IGRyb3AsIGRyb3BXaGlsZSB9IGZyb20gXCJtb2R1bGVzL2Ryb3BcIjtcbmV4cG9ydCB7IGZpbHRlciwgcmVqZWN0IH0gZnJvbSBcIm1vZHVsZXMvZmlsdGVyXCI7XG5leHBvcnQgeyBtYXAsIGZsYXRNYXAgfSBmcm9tIFwibW9kdWxlcy9tYXBcIjtcbmV4cG9ydCB7IHRha2UsIHRha2VXaGlsZSwgdGFrZU50aCB9IGZyb20gXCJtb2R1bGVzL3Rha2VcIjtcbmV4cG9ydCB7IHVuaXF1ZSwgdW5pcXVlQnksIHVuaXF1ZVdpdGggfSBmcm9tIFwibW9kdWxlcy91bmlxdWVcIjtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG5pbXBvcnQge1xuICBwcm90b2NvbHMgYXMgcCxcbiAgaXNDb21wbGV0ZWQsXG4gIGNvbXBsZXRlLFxuICBpc0l0ZXJhYmxlLFxuICByZWR1Y2UsXG4gIHRvVHJhbnNkdWNlclxufSBmcm9tIFwiQGNoYW5rby94ZHVjZS10b29sc1wiO1xuXG5pbXBvcnQgeyBwYXJzZU51bWJlckFyZ3MgfSBmcm9tIFwibW9kdWxlcy91dGlsc1wiO1xuaW1wb3J0IHsgc2VxdWVuY2UgfSBmcm9tIFwibW9kdWxlcy90cmFuc2R1Y3Rpb25cIjtcblxuZnVuY3Rpb24gaWRlbnRpdHkoY29sbGVjdGlvbikge1xuICByZXR1cm4gY29sbGVjdGlvblxuICAgID8gc2VxdWVuY2UoY29sbGVjdGlvbiwgaWRlbnRpdHkoKSlcbiAgICA6IHhmb3JtID0+IHRvVHJhbnNkdWNlcigoYWNjLCB2YWx1ZSkgPT4geGZvcm1bcC5zdGVwXShhY2MsIHZhbHVlKSwgeGZvcm0pO1xufVxuXG5mdW5jdGlvbiBmbGF0dGVuKGNvbGxlY3Rpb24pIHtcbiAgcmV0dXJuIGNvbGxlY3Rpb25cbiAgICA/IHNlcXVlbmNlKGNvbGxlY3Rpb24sIGZsYXR0ZW4oKSlcbiAgICA6IHhmb3JtID0+XG4gICAgICAgIHRvVHJhbnNkdWNlcigoYWNjLCB2YWx1ZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN1Ylhmb3JtID0gdG9UcmFuc2R1Y2VyKChhY2MsIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2ID0geGZvcm1bcC5zdGVwXShhY2MsIHZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybiBpc0NvbXBsZXRlZCh2KSA/IGNvbXBsZXRlKHYpIDogdjtcbiAgICAgICAgICB9LCB4Zm9ybSk7XG5cbiAgICAgICAgICByZXR1cm4gaXNJdGVyYWJsZSh2YWx1ZSlcbiAgICAgICAgICAgID8gcmVkdWNlKHZhbHVlLCBzdWJYZm9ybSwgYWNjKVxuICAgICAgICAgICAgOiBzdWJYZm9ybVtwLnN0ZXBdKGFjYywgdmFsdWUpO1xuICAgICAgICB9LCB4Zm9ybSk7XG59XG5cbmZ1bmN0aW9uIHJlcGVhdChjb2xsZWN0aW9uLCBuKSB7XG4gIGNvbnN0IFtjb2wsIG51bV0gPSBwYXJzZU51bWJlckFyZ3MoY29sbGVjdGlvbiwgbik7XG4gIHJldHVybiBjb2xcbiAgICA/IHNlcXVlbmNlKGNvbCwgcmVwZWF0KG51bSkpXG4gICAgOiB4Zm9ybSA9PlxuICAgICAgICB0b1RyYW5zZHVjZXIoKGFjYywgdmFsdWUpID0+IHtcbiAgICAgICAgICBsZXQgcmVzdWx0ID0gYWNjO1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtOyBpKyspIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHhmb3JtW3Auc3RlcF0ocmVzdWx0LCB2YWx1ZSk7XG4gICAgICAgICAgICBpZiAoaXNDb21wbGV0ZWQocmVzdWx0KSkge1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSwgeGZvcm0pO1xufVxuXG5leHBvcnQgeyBpZGVudGl0eSwgZmxhdHRlbiwgcmVwZWF0IH07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuaW1wb3J0IHsgcHJvdG9jb2xzIGFzIHAsIGVuc3VyZVVuY29tcGxldGVkIH0gZnJvbSBcIkBjaGFua28veGR1Y2UtdG9vbHNcIjtcbmltcG9ydCB7XG4gIHBhcnNlTnVtYmVyQXJncyxcbiAgcGFyc2VGdW5jdGlvbkFyZ3MsXG4gIHNhbWVWYWx1ZVplcm9cbn0gZnJvbSBcIm1vZHVsZXMvdXRpbHNcIjtcbmltcG9ydCB7IHNlcXVlbmNlIH0gZnJvbSBcIm1vZHVsZXMvdHJhbnNkdWN0aW9uXCI7XG5cbmNvbnN0IE5PX1ZBTFVFID0gU3ltYm9sKFwiTk9fVkFMVUVcIik7XG5cbmZ1bmN0aW9uIGNodW5rKGNvbGxlY3Rpb24sIG4pIHtcbiAgY29uc3QgW2NvbCwgbnVtXSA9IHBhcnNlTnVtYmVyQXJncyhjb2xsZWN0aW9uLCBuKTtcbiAgcmV0dXJuIGNvbFxuICAgID8gc2VxdWVuY2UoY29sLCBjaHVuayhudW0pKVxuICAgIDogeGZvcm0gPT4ge1xuICAgICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgICBsZXQgcGFydCA9IFtdO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgW3AuaW5pdF0oKSB7XG4gICAgICAgICAgICByZXR1cm4geGZvcm1bcC5pbml0XSgpO1xuICAgICAgICAgIH0sXG5cbiAgICAgICAgICBbcC5zdGVwXShhY2MsIHZhbHVlKSB7XG4gICAgICAgICAgICBwYXJ0W2NvdW50KytdID0gdmFsdWU7XG4gICAgICAgICAgICBpZiAoY291bnQgPT09IG51bSkge1xuICAgICAgICAgICAgICBjb25zdCBvdXQgPSBwYXJ0LnNsaWNlKDAsIG51bSk7XG4gICAgICAgICAgICAgIHBhcnQgPSBbXTtcbiAgICAgICAgICAgICAgY291bnQgPSAwO1xuICAgICAgICAgICAgICByZXR1cm4geGZvcm1bcC5zdGVwXShhY2MsIG91dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgIH0sXG5cbiAgICAgICAgICBbcC5yZXN1bHRdKHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoY291bnQgPiAwKSB7XG4gICAgICAgICAgICAgIHJldHVybiBlbnN1cmVVbmNvbXBsZXRlZChcbiAgICAgICAgICAgICAgICB4Zm9ybVtwLnN0ZXBdKHZhbHVlLCBwYXJ0LnNsaWNlKDAsIGNvdW50KSlcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB4Zm9ybVtwLnJlc3VsdF0odmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH07XG59XG5cbmZ1bmN0aW9uIGNodW5rQnkoY29sbGVjdGlvbiwgZm4pIHtcbiAgY29uc3QgW2NvbCwgZnVuY10gPSBwYXJzZUZ1bmN0aW9uQXJncyhjb2xsZWN0aW9uLCBmbik7XG4gIHJldHVybiBjb2xcbiAgICA/IHNlcXVlbmNlKGNvbCwgY2h1bmtCeShmdW5jKSlcbiAgICA6IHhmb3JtID0+IHtcbiAgICAgICAgbGV0IHBhcnQgPSBbXTtcbiAgICAgICAgbGV0IGxhc3QgPSBOT19WQUxVRTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIFtwLmluaXRdKCkge1xuICAgICAgICAgICAgcmV0dXJuIHhmb3JtW3AuaW5pdF0oKTtcbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgW3Auc3RlcF0oYWNjLCB2YWx1ZSkge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudCA9IGZ1bmModmFsdWUpO1xuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGFjYztcbiAgICAgICAgICAgIGlmIChsYXN0ID09PSBOT19WQUxVRSB8fCBzYW1lVmFsdWVaZXJvKGN1cnJlbnQsIGxhc3QpKSB7XG4gICAgICAgICAgICAgIHBhcnQucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXN1bHQgPSB4Zm9ybVtwLnN0ZXBdKHJlc3VsdCwgcGFydCk7XG4gICAgICAgICAgICAgIHBhcnQgPSBbdmFsdWVdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGFzdCA9IGN1cnJlbnQ7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgIH0sXG5cbiAgICAgICAgICBbcC5yZXN1bHRdKHZhbHVlKSB7XG4gICAgICAgICAgICBjb25zdCBjb3VudCA9IHBhcnQubGVuZ3RoO1xuICAgICAgICAgICAgaWYgKGNvdW50ID4gMCkge1xuICAgICAgICAgICAgICByZXR1cm4gZW5zdXJlVW5jb21wbGV0ZWQoXG4gICAgICAgICAgICAgICAgeGZvcm1bcC5zdGVwXSh2YWx1ZSwgcGFydC5zbGljZSgwLCBjb3VudCkpXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4geGZvcm1bcC5yZXN1bHRdKHZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9O1xufVxuXG5leHBvcnQgeyBjaHVuaywgY2h1bmtCeSB9O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG5cbmltcG9ydCB7IHByb3RvY29scyBhcyBwLCB0b1RyYW5zZHVjZXIgfSBmcm9tIFwiQGNoYW5rby94ZHVjZS10b29sc1wiO1xuaW1wb3J0IHsgcGFyc2VGdW5jdGlvbkFyZ3MsIHNhbWVWYWx1ZVplcm8gfSBmcm9tIFwibW9kdWxlcy91dGlsc1wiO1xuaW1wb3J0IHsgc2VxdWVuY2UgfSBmcm9tIFwibW9kdWxlcy90cmFuc2R1Y3Rpb25cIjtcblxuY29uc3QgTk9fVkFMVUUgPSBTeW1ib2woXCJOT19WQUxVRVwiKTtcblxuZnVuY3Rpb24gZGlzdGluY3RXaXRoKGNvbGxlY3Rpb24sIGZuKSB7XG4gIGNvbnN0IFtjb2wsIGZ1bmNdID0gcGFyc2VGdW5jdGlvbkFyZ3MoY29sbGVjdGlvbiwgZm4pO1xuICByZXR1cm4gY29sXG4gICAgPyBzZXF1ZW5jZShjb2wsIGRpc3RpbmN0V2l0aChmdW5jKSlcbiAgICA6IHhmb3JtID0+IHtcbiAgICAgICAgbGV0IGxhc3QgPSBOT19WQUxVRTtcbiAgICAgICAgcmV0dXJuIHRvVHJhbnNkdWNlcigoYWNjLCB2YWx1ZSkgPT4ge1xuICAgICAgICAgIGlmIChsYXN0ICE9PSBOT19WQUxVRSAmJiBmdW5jKHZhbHVlLCBsYXN0KSkge1xuICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICB9XG4gICAgICAgICAgbGFzdCA9IHZhbHVlO1xuICAgICAgICAgIHJldHVybiB4Zm9ybVtwLnN0ZXBdKGFjYywgdmFsdWUpO1xuICAgICAgICB9LCB4Zm9ybSk7XG4gICAgICB9O1xufVxuXG5mdW5jdGlvbiBkaXN0aW5jdEJ5KGNvbGxlY3Rpb24sIGZuKSB7XG4gIGNvbnN0IFtjb2wsIGZ1bmNdID0gcGFyc2VGdW5jdGlvbkFyZ3MoY29sbGVjdGlvbiwgZm4pO1xuICByZXR1cm4gZGlzdGluY3RXaXRoKGNvbCwgKGEsIGIpID0+IHNhbWVWYWx1ZVplcm8oZnVuYyhhKSwgZnVuYyhiKSkpO1xufVxuXG5mdW5jdGlvbiBkaXN0aW5jdChjb2xsZWN0aW9uKSB7XG4gIHJldHVybiBkaXN0aW5jdFdpdGgoY29sbGVjdGlvbiwgc2FtZVZhbHVlWmVybyk7XG59XG5cbmV4cG9ydCB7IGRpc3RpbmN0LCBkaXN0aW5jdEJ5LCBkaXN0aW5jdFdpdGggfTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG5pbXBvcnQgeyBwcm90b2NvbHMgYXMgcCwgdG9UcmFuc2R1Y2VyIH0gZnJvbSBcIkBjaGFua28veGR1Y2UtdG9vbHNcIjtcbmltcG9ydCB7IHBhcnNlTnVtYmVyQXJncywgcGFyc2VGdW5jdGlvbkFyZ3MgfSBmcm9tIFwibW9kdWxlcy91dGlsc1wiO1xuaW1wb3J0IHsgc2VxdWVuY2UgfSBmcm9tIFwibW9kdWxlcy90cmFuc2R1Y3Rpb25cIjtcblxuZnVuY3Rpb24gZHJvcChjb2xsZWN0aW9uLCBuKSB7XG4gIGNvbnN0IFtjb2wsIG51bV0gPSBwYXJzZU51bWJlckFyZ3MoY29sbGVjdGlvbiwgbik7XG4gIHJldHVybiBjb2xcbiAgICA/IHNlcXVlbmNlKGNvbCwgZHJvcChudW0pKVxuICAgIDogeGZvcm0gPT4ge1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIHJldHVybiB0b1RyYW5zZHVjZXIoXG4gICAgICAgICAgKGFjYywgdmFsdWUpID0+IChpKysgPCBudW0gPyBhY2MgOiB4Zm9ybVtwLnN0ZXBdKGFjYywgdmFsdWUpKSxcbiAgICAgICAgICB4Zm9ybVxuICAgICAgICApO1xuICAgICAgfTtcbn1cblxuZnVuY3Rpb24gZHJvcFdoaWxlKGNvbGxlY3Rpb24sIGZuKSB7XG4gIGNvbnN0IFtjb2wsIGZ1bmNdID0gcGFyc2VGdW5jdGlvbkFyZ3MoY29sbGVjdGlvbiwgZm4pO1xuICByZXR1cm4gY29sXG4gICAgPyBzZXF1ZW5jZShjb2wsIGRyb3BXaGlsZShmdW5jKSlcbiAgICA6IHhmb3JtID0+IHtcbiAgICAgICAgbGV0IGRyb3BwaW5nID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHRvVHJhbnNkdWNlcigoYWNjLCB2YWx1ZSkgPT4ge1xuICAgICAgICAgIGlmIChkcm9wcGluZykge1xuICAgICAgICAgICAgaWYgKGZ1bmModmFsdWUpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkcm9wcGluZyA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4geGZvcm1bcC5zdGVwXShhY2MsIHZhbHVlKTtcbiAgICAgICAgfSwgeGZvcm0pO1xuICAgICAgfTtcbn1cblxuZXhwb3J0IHsgZHJvcCwgZHJvcFdoaWxlIH07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuaW1wb3J0IHsgcHJvdG9jb2xzIGFzIHAsIHRvVHJhbnNkdWNlciB9IGZyb20gXCJAY2hhbmtvL3hkdWNlLXRvb2xzXCI7XG5pbXBvcnQgeyBwYXJzZUZ1bmN0aW9uQXJncywgY29tcGxlbWVudCB9IGZyb20gXCJtb2R1bGVzL3V0aWxzXCI7XG5pbXBvcnQgeyBzZXF1ZW5jZSB9IGZyb20gXCJtb2R1bGVzL3RyYW5zZHVjdGlvblwiO1xuXG5mdW5jdGlvbiBmaWx0ZXIoY29sbGVjdGlvbiwgZm4pIHtcbiAgY29uc3QgW2NvbCwgZnVuY10gPSBwYXJzZUZ1bmN0aW9uQXJncyhjb2xsZWN0aW9uLCBmbik7XG4gIHJldHVybiBjb2xcbiAgICA/IHNlcXVlbmNlKGNvbCwgZmlsdGVyKGZ1bmMpKVxuICAgIDogeGZvcm0gPT5cbiAgICAgICAgdG9UcmFuc2R1Y2VyKFxuICAgICAgICAgIChhY2MsIHZhbHVlKSA9PiAoZnVuYyh2YWx1ZSkgPyB4Zm9ybVtwLnN0ZXBdKGFjYywgdmFsdWUpIDogYWNjKSxcbiAgICAgICAgICB4Zm9ybVxuICAgICAgICApO1xufVxuXG5mdW5jdGlvbiByZWplY3QoY29sbGVjdGlvbiwgZm4pIHtcbiAgY29uc3QgW2NvbCwgZnVuY10gPSBwYXJzZUZ1bmN0aW9uQXJncyhjb2xsZWN0aW9uLCBmbik7XG4gIHJldHVybiBmaWx0ZXIoY29sLCBjb21wbGVtZW50KGZ1bmMpKTtcbn1cblxuZXhwb3J0IHsgZmlsdGVyLCByZWplY3QgfTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG5pbXBvcnQgeyBwcm90b2NvbHMgYXMgcCwgdG9UcmFuc2R1Y2VyIH0gZnJvbSBcIkBjaGFua28veGR1Y2UtdG9vbHNcIjtcbmltcG9ydCB7IHBhcnNlRnVuY3Rpb25BcmdzIH0gZnJvbSBcIm1vZHVsZXMvdXRpbHNcIjtcbmltcG9ydCB7IHNlcXVlbmNlLCBjb21wb3NlIH0gZnJvbSBcIm1vZHVsZXMvdHJhbnNkdWN0aW9uXCI7XG5pbXBvcnQgeyBmbGF0dGVuIH0gZnJvbSBcIm1vZHVsZXMvYmFzaWNcIjtcblxuZnVuY3Rpb24gbWFwKGNvbGxlY3Rpb24sIGZuKSB7XG4gIGNvbnN0IFtjb2wsIGZ1bmNdID0gcGFyc2VGdW5jdGlvbkFyZ3MoY29sbGVjdGlvbiwgZm4pO1xuICByZXR1cm4gY29sXG4gICAgPyBzZXF1ZW5jZShjb2wsIG1hcChmdW5jKSlcbiAgICA6IHhmb3JtID0+XG4gICAgICAgIHRvVHJhbnNkdWNlcigoYWNjLCB2YWx1ZSkgPT4geGZvcm1bcC5zdGVwXShhY2MsIGZ1bmModmFsdWUpKSwgeGZvcm0pO1xufVxuXG5mdW5jdGlvbiBmbGF0TWFwKGNvbGxlY3Rpb24sIGZuKSB7XG4gIGNvbnN0IFtjb2wsIGZ1bmNdID0gcGFyc2VGdW5jdGlvbkFyZ3MoY29sbGVjdGlvbiwgZm4pO1xuICByZXR1cm4gY29sXG4gICAgPyBzZXF1ZW5jZShjb2wsIGNvbXBvc2UobWFwKGZ1bmMpLCBmbGF0dGVuKCkpKVxuICAgIDogY29tcG9zZShtYXAoZnVuYyksIGZsYXR0ZW4oKSk7XG59XG5cbmV4cG9ydCB7IG1hcCwgZmxhdE1hcCB9O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG5cbmltcG9ydCB7IHByb3RvY29scyBhcyBwLCB0b1RyYW5zZHVjZXIsIGVuc3VyZUNvbXBsZXRlZCB9IGZyb20gXCJAY2hhbmtvL3hkdWNlLXRvb2xzXCI7XG5cbmltcG9ydCB7IHBhcnNlTnVtYmVyQXJncywgcGFyc2VGdW5jdGlvbkFyZ3MgfSBmcm9tIFwibW9kdWxlcy91dGlsc1wiO1xuaW1wb3J0IHsgc2VxdWVuY2UgfSBmcm9tIFwibW9kdWxlcy90cmFuc2R1Y3Rpb25cIjtcblxuZnVuY3Rpb24gdGFrZShjb2xsZWN0aW9uLCBuKSB7XG4gIGNvbnN0IFtjb2wsIG51bV0gPSBwYXJzZU51bWJlckFyZ3MoY29sbGVjdGlvbiwgbik7XG4gIHJldHVybiBjb2xcbiAgICA/IHNlcXVlbmNlKGNvbCwgdGFrZShudW0pKVxuICAgIDogeGZvcm0gPT4ge1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIHJldHVybiB0b1RyYW5zZHVjZXIoKGFjYywgdmFsdWUpID0+IHtcbiAgICAgICAgICBsZXQgcmVzdWx0ID0gYWNjO1xuXG4gICAgICAgICAgaWYgKGkgPCBudW0pIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHhmb3JtW3Auc3RlcF0oYWNjLCB2YWx1ZSk7XG4gICAgICAgICAgICBpZiAoaSA9PT0gbnVtIC0gMSkge1xuICAgICAgICAgICAgICByZXN1bHQgPSBlbnN1cmVDb21wbGV0ZWQocmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaSsrO1xuICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0sIHhmb3JtKTtcbiAgICAgIH07XG59XG5cbmZ1bmN0aW9uIHRha2VXaGlsZShjb2xsZWN0aW9uLCBmbikge1xuICBjb25zdCBbY29sLCBmdW5jXSA9IHBhcnNlRnVuY3Rpb25BcmdzKGNvbGxlY3Rpb24sIGZuKTtcbiAgcmV0dXJuIGNvbFxuICAgID8gc2VxdWVuY2UoY29sLCB0YWtlV2hpbGUoZnVuYykpXG4gICAgOiB4Zm9ybSA9PlxuICAgICAgICB0b1RyYW5zZHVjZXIoXG4gICAgICAgICAgKGFjYywgdmFsdWUpID0+XG4gICAgICAgICAgICBmdW5jKHZhbHVlKSA/IHhmb3JtW3Auc3RlcF0oYWNjLCB2YWx1ZSkgOiBlbnN1cmVDb21wbGV0ZWQoYWNjKSxcbiAgICAgICAgICB4Zm9ybVxuICAgICAgICApO1xufVxuXG5mdW5jdGlvbiB0YWtlTnRoKGNvbGxlY3Rpb24sIG4pIHtcbiAgY29uc3QgW2NvbCwgbnVtXSA9IHBhcnNlTnVtYmVyQXJncyhjb2xsZWN0aW9uLCBuKTtcbiAgcmV0dXJuIGNvbFxuICAgID8gc2VxdWVuY2UoY29sLCB0YWtlTnRoKG51bSkpXG4gICAgOiB4Zm9ybSA9PiB7XG4gICAgICAgIGxldCBpID0gLTE7XG4gICAgICAgIHJldHVybiB0b1RyYW5zZHVjZXIoXG4gICAgICAgICAgKGFjYywgdmFsdWUpID0+ICgrK2kgJSBudW0gPT09IDAgPyB4Zm9ybVtwLnN0ZXBdKGFjYywgdmFsdWUpIDogYWNjKSxcbiAgICAgICAgICB4Zm9ybVxuICAgICAgICApO1xuICAgICAgfTtcbn1cblxuZXhwb3J0IHsgdGFrZSwgdGFrZVdoaWxlLCB0YWtlTnRoIH07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuLyoqXG4gKiBGdW5jdGlvbnMgZGVhbGluZyB3aXRoIHRoZSBhY3R1YWwgdHJhbnNmb3JtYXRpb24gb2YgdmFsdWVzIGFuZCBmb3IgY2hvb3NpbmdcbiAqIHRoZSByZWR1Y2VyIGR1cmluZyB0cmFuc2R1Y3Rpb24uXG4gKlxuICogQG1vZHVsZSB4ZHVjZS90cmFuc2Zvcm1hdGlvblxuICogQHByaXZhdGVcbiAqL1xuXG5pbXBvcnQge1xuICBwcm90b2NvbHMgYXMgcCxcbiAgaXNJbXBsZW1lbnRlZCxcbiAgaXRlcmF0b3IsXG4gIGlzQ29tcGxldGVkLFxuICB0b1JlZHVjZXIsXG4gIHRvRnVuY3Rpb24sXG4gIHJlZHVjZSxcbiAgaXNGdW5jdGlvbixcbiAgaXNBcnJheSxcbiAgaXNPYmplY3QsXG4gIGlzU3RyaW5nXG59IGZyb20gXCJAY2hhbmtvL3hkdWNlLXRvb2xzXCI7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBpdGVyYXRvciB0aGF0IGlzIGFsc28gYSB0cmFuc2R1Y2VyLCB0cmFuc2Zvcm1pbmcgaXRzIGNvbGxlY3Rpb25cbiAqIG9uZSBlbGVtZW50IGF0IGEgdGltZS4gVGhpcyBpcyB0aGUgYWN0dWFsIG91dHB1dCBvZiB0aGVcbiAqIHtAbGluayBtb2R1bGU6eGR1Y2UuYXNJdGVyYXRvcnxhc0l0ZXJhdG9yfSBmdW5jdGlvbiwgYXMgd2VsbCBhcyB0aGUgb3V0cHV0IG9mXG4gKiB0aGUge0BsaW5rIG1vZHVsZTp4ZHVjZS5zZXF1ZW5jZXxzZXF1ZW5jZX0gZnVuY3Rpb24gd2hlbiB0aGUgaW5wdXQgaXMgYW5cbiAqIGl0ZXJhdG9yLlxuICpcbiAqIFRoZSBlbmQgdXNlciBuZWVkIG5vdCBiZSBjb25jZXJuZWQgd2l0aCB0aGUgdHlwZSBvZiB0aGUgb3V0cHV0IGl0ZXJhdG9yIGluXG4gKiB0aGVzZSBjaXJjdW1zdGFuY2VzOyB0aGUgZW5kIHVzZXIgbmVlZCBvbmx5IGNhcmUgdGhhdCB0aGUgb3V0cHV0IGlzLCBpbiBmYWN0LFxuICogYW4gaXRlcmF0b3IgYW5kIGNhbiBiZSBleHBlY3RlZCB0byBhY3QgbGlrZSBvbmUuIEZvciB0aGlzIHJlYXNvbiwgdGhpc1xuICogZnVuY3Rpb24gYW5kIHRoZSB0eXBlIGl0IHJldHVybnMgYXJlIG5vdCBleHBvcnRlZC5cbiAqXG4gKiBUaGlzIG9iamVjdCBzdXBwb3J0cyBub24tMS10by0xIGNvcnJlc3BvbmRlbmNlcyBiZXR3ZWVuIGlucHV0IGFuZCBvdXRwdXRcbiAqIHZhbHVlcy4gRm9yIGV4YW1wbGUsIGEgZmlsdGVyIHRyYW5zZm9ybWF0aW9uIG1pZ2h0IHJldHVybiBmZXdlciBvdXRwdXRcbiAqIGVsZW1lbnRzIHRoYW4gd2VyZSBpbiB0aGUgaW5wdXQgY29sbGVjdGlvbiwgd2hpbGUgYSByZXBlYXQgdHJhbnNmb3JtYXRpb25cbiAqIHdpbGwgcmV0dXJuIG1vcmUuIEluIGVpdGhlciBjYXNlLCBgbmV4dGAgaW4gdGhpcyBjbGFzcyB3aWxsIHJldHVybiBvbmVcbiAqIGVsZW1lbnQgcGVyIGNhbGwuXG4gKlxuICogQHBhcmFtIHttb2R1bGU6eGR1Y2UtdG9vbHMuSXRlcmFibGV9IGNvbGxlY3Rpb24gdGhlIGlucHV0IGNvbGxlY3Rpb24gdGhhdCB0aGVcbiAqICAgICBwcm9kdWNlZCBpdGVyYXRvciB3aWxsIGJlIGl0ZXJhdGluZyBvdmVyLlxuICogQHBhcmFtIHttb2R1bGU6eGR1Y2UtdG9vbHMuVHJhbnNkdWNlckZ1bmN0aW9ufSB4Zm9ybSBBIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyBhXG4gKiAgICAgdHJhbnNkdWNlciBvYmplY3QgdGhhdCBkZWZpbmVzIHRoZSB0cmFuc2Zvcm1hdGlvbiBiZWluZyBkb25lIHRvIHRoZVxuICogICAgIGl0ZXJhdG9yJ3MgZWxlbWVudHMuIEFueSBvZiB0aGUgdHJhbnNkdWNlcnMgaW4gdGhlXG4gKiAgICAge0BsaW5rIG1vZHVsZTp4ZHVjZXx4ZHVjZX0gbW9kdWxlIGNhbiBwcm9kdWNlIGEgc3VpdGFibGUgdHJhbnNkdWNlclxuICogICAgIGZ1bmN0aW9uLlxuICogQHJldHVybiB7bW9kdWxlOnhkdWNlLXRvb2xzLkl0ZXJhdG9yfSBBbiBpdGVyYXRvciB0aGF0IHdpbGwgdHJhbnNmb3JtIGl0cyBpbnB1dFxuICogICAgIGVsZW1lbnRzIHVzaW5nIHRoZSB0cmFuc2R1Y2VyIGZ1bmN0aW9uIGFzIGl0c1xuICogICAgIGB7QGxpbmsgbW9kdWxlOnhkdWNlLXRvb2xzLk5leHRGdW5jdGlvbnxuZXh0fWAgZnVuY3Rpb24gaXMgY2FsbGVkLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gdHJhbnNkdWNpbmdJdGVyYXRvcihjb2xsZWN0aW9uLCB4Zm9ybSkge1xuICBjb25zdCBzdGVwUmVkdWNlciA9IHtcbiAgICBbcC5zdGVwXSh4aXRlciwgaW5wdXQpIHtcbiAgICAgIHhpdGVyLml0ZW1zLnVuc2hpZnQoaW5wdXQpO1xuICAgICAgcmV0dXJuIHhpdGVyO1xuICAgIH0sXG4gICAgW3AucmVzdWx0XSh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBpdGVyID0gaXRlcmF0b3IoY29sbGVjdGlvbik7XG4gIGNvbnN0IHhmID0geGZvcm0oc3RlcFJlZHVjZXIpO1xuICBsZXQgY29tcGxldGVkID0gZmFsc2U7XG5cbiAgLy8gVGhpcyBhcnJheSBpcyB0aGUga2V5IHRvIHdvcmtpbmcgcHJvcGVybHkgd2l0aCBzdGVwIGZ1bmN0aW9ucyB0aGF0IHJldHVyblxuICAvLyBtb3JlIHRoYW4gb25lIHZhbHVlLiBBbGwgb2YgdGhlbSBhcmUgcHV0IGludG8gdGhlIGl0ZW1zIGFycmF5LiBBcyBsb25nIGFzXG4gIC8vIHRoaXMgYXJyYXkgaGFzIHZhbHVlcyBpbiBpdCwgdGhlIGBuZXh0YCBmdW5jdGlvbiB3aWxsIHJldHVybiBvbmUgdmFsdWVcbiAgLy8gcG9wcGVkIGZyb20gaXQgcmF0aGVyIHRoYW4gcnVubmluZyB0aGUgc3RlcCBmdW5jdGlvbiBhZ2Fpbi5cbiAgY29uc3QgaXRlbXMgPSBbXTtcblxuICAvLyBUaGUgYG5leHRgIGZ1bmN0aW9uIGhlcmUgaXMgcmF0aGVyIHNpbXBsZS4gSWYgdGhlcmUgaXMgYWxyZWFkeSBzb21ldGhpbmcgaW5cbiAgLy8gdGhlIGBpdGVtc2AgYXJyYXksIGl0J3MgcmV0dXJuZWQuIElmIG5vdCwgdGhlIGBzdGVwYCBmdW5jdGlvbiBpcyBydW4gYW5kLFxuICAvLyBpZiB0aGF0IHJlc3VsdHMgaW4gYSB2YWx1ZSBpbiB0aGUgYGl0ZW1zYCBhcnJheSwgaXQncyByZXR1cm5lZC4gT3RoZXJ3aXNlXG4gIC8vIGFuIG9iamVjdCB3aXRoIGB7IGRvbmU6IHRydWUgfWAgaXMgcmV0dXJuZWQuXG4gIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgaWYgKGl0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgc3RlcCgpO1xuICAgIH1cbiAgICBpZiAoaXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4geyBkb25lOiB0cnVlIH07XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogaXRlbXMucG9wKCksXG4gICAgICBkb25lOiBmYWxzZVxuICAgIH07XG4gIH1cblxuICAvLyBUaGlzIGlzIHdoZXJlIG1vc3Qgb2YgdGhlIHdvcmsgaGFwcGVucy4gSXQgZ2V0cyB0aGUgbmV4dCB2YWx1ZSBmcm9tIHRoZVxuICAvLyBpbnB1dCBjb2xsZWN0aW9uIGFuZCBydW5zIGl0IHRocm91Z2ggdGhlIHJlZHVjdGlvbiBzdGVwIGZ1bmN0aW9ucy4gSWYgdGhhdFxuICAvLyByZXN1bHRzIGluIGEgdmFsdWUsIGl0J3MgZ2l2ZW4gdG8gdGhlIHN0ZXBwZXIgb2JqZWN0ICh3aGljaCBhZGRzIGl0IHRvIHRoZVxuICAvLyBgaXRlbXNgIGFycmF5KTsgb3RoZXJ3aXNlIHRoZSB3aGlsZSBsb29wIGNvbnRpbnVlcyB0byB0aGUgbmV4dCBlbGVtZW50IG9mXG4gIC8vIHRoZSBpbnB1dCBjb2xsZWN0aW9uLiBUaGlzIGVuc3VyZXMgdGhhdCB0aGVyZSdzIHNvbWV0aGluZyBmb3IgdGhlIGBuZXh0YFxuICAvLyBmdW5jdGlvbiB0byByZXR1cm4gZWFjaCB0aW1lIGl0J3MgY2FsbGVkLlxuICAvL1xuICAvLyBJZiB0aGUgY29sbGVjdGlvbiBoYXMgZmluaXNoZWQgb3IgaWYgdGhlIHN0ZXAgZnVuY3Rpb24gcmV0dXJucyBhIGNvbXBsZXRlZFxuICAvLyBvYmplY3QgKHdoaWNoIHRha2Ugd2lsbCBkbyBhZnRlciBpdHMgbGltaXQgb2YgZWxlbWVudHMgaGFzIGJlZW4gcmVhY2hlZCxcbiAgLy8gZm9yIGluc3RhbmNlKSwgdGhlIGl0ZXJhdGlvbiBpcyBmaW5pc2hlZCBieSBjYWxsaW5nIHRoZSByZXN1bHQgZnVuY3Rpb24uXG4gIGZ1bmN0aW9uIHN0ZXAoKSB7XG4gICAgY29uc3QgY291bnQgPSBpdGVtcy5sZW5ndGg7XG4gICAgd2hpbGUgKGl0ZW1zLmxlbmd0aCA9PT0gY291bnQpIHtcbiAgICAgIGNvbnN0IHN0ZXBWYWx1ZSA9IGl0ZXIubmV4dCgpO1xuICAgICAgaWYgKHN0ZXBWYWx1ZS5kb25lIHx8IGNvbXBsZXRlZCkge1xuICAgICAgICB4ZltwLnJlc3VsdF0ocmVzdWx0KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjb21wbGV0ZWQgPSBpc0NvbXBsZXRlZCh4ZltwLnN0ZXBdKHJlc3VsdCwgc3RlcFZhbHVlLnZhbHVlKSk7XG4gICAgfVxuICB9XG5cbiAgLy8gVGhlIGByZXN1bHRgIG5hbWUgaXMgaG9pc3RlZCBhbmQgdXNlZCBpbiBmdW5jdGlvbnMgZnVydGhlciB1cCwgc28gd2UgaGF2ZVxuICAvLyB0byByZXRhaW4gdGhhdCBuYW1lIGFuZCBjYW4ndCBqdXN0IHJldHVybiB0aGUgb2JqZWN0IHdpdGhvdXQgbmFtaW5nIGl0XG4gIGNvbnN0IHJlc3VsdCA9IHsgaXRlbXMsIG5leHQsIHN0ZXAgfTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBUcmFuc2Zvcm1zIHRoZSBlbGVtZW50cyBvZiB0aGUgaW5wdXQgY29sbGVjdGlvbiBhbmQgcmVkdWNlcyB0aGVtIGludG8gYW5cbiAqIG91dHB1dCBjb2xsZWN0aW9uLlxuICpcbiAqIFRoaXMgaXMgdGhlIGxvd2VzdC1sZXZlbCBvZiB0aGUgdHJhbnNkdWN0aW9uIGZ1bmN0aW9ucyB0aGF0IGlzIGxpa2VseSB0byBzZWVcbiAqIHJlZ3VsYXIgdXNlLiBJdCBkb2VzIG5vdCBhc3N1bWUgYW55dGhpbmcgYWJvdXQgdGhlIHJlZHVjZXIsIGFzIGl0IGFza3MgZm9yIGl0XG4gKiB0byBiZSBwYXNzZWQgZXhwbGljaXRseS4gVGhpcyBtZWFucyB0aGF0IGFueSBraW5kIG9mIGNvbGxlY3Rpb24gY2FuIGJlXG4gKiBwcm9kdWNlZCwgc2luY2UgdGhlIHJlZHVjZXIgaXMgbm90IHRpZWQgdG8gdGhlIGlucHV0IGNvbGxlY3Rpb24gaW4gYW55IHdheS5cbiAqXG4gKiBgdHJhbnNkdWNlYCBhbHNvIHdpbGwgYWNjZXB0IGFuIGluaXRpYWwgdmFsdWUgZm9yIHRoZSByZXN1bHRpbmcgY29sbGVjdGlvbiBhc1xuICogdGhlIG9wdGlvbmFsIGxhc3QgcGFyYW1ldGVyLiBJZiB0aGlzIHBhcmFtZXRlciBpc24ndCBwcmVzZW50LCB0aGVuIHRoZVxuICogaW5pdGlhbCB2YWx1ZSBpcyBkZXRlcm1pbmVkIGZyb20gdGhlIHRyYW5zZHVjZXIgaW5pdCBwcm90b2NvbCBwcm9wZXJ0eSBvbiB0aGVcbiAqIHJlZHVjZXIuIE5vdGUgaG93ZXZlciB0aGF0IG1hbnkgcmVkdWNlcnMgbWF5IG5vdCBwcm92aWRlIGFuIGluaXRpYWwgdmFsdWUsXG4gKiBhbmQgaW4gdGhvc2UgY2FzZXMgaXQgd2lsbCAqaGF2ZSogdG8gYmUgcGFzc2VkIGFzIGEgcGFyYW1ldGVyLlxuICpcbiAqIGBgYFxuICogaW1wb3J0IHsgbWFwLCB0cmFuc2R1Y2UgfSBmcm9tIFwiQGNoYW5rby94ZHVjZVwiO1xuICogaW1wb3J0IHsgcHJvdG9jb2xzIGFzIHAgfSBmcm9tIFwiQGNoYW5rby94ZHVjZS10b29sc1wiO1xuICpcbiAqIGNvbnN0IHhmb3JtID0gbWFwKHggPT4geCArIDEpO1xuICpcbiAqIGNvbnN0IGFycmF5UmVkdWNlciA9IHtcbiAqICAgW3AuaW5pdF0oKSB7IHJldHVybiBbXTsgfSxcbiAqICAgW3AucmVzdWx0XSh4KSB7IHJldHVybiB4OyB9LFxuICogICBbcC5zdGVwXShhY2MsIHgpIHtcbiAqICAgICBhY2MucHVzaCh4KTtcbiAqICAgICByZXR1cm4gYWNjO1xuICogICB9XG4gKiB9O1xuICpcbiAqIGNvbnN0IHN0cmluZ1JlZHVjZXIgPSB7XG4gKiAgIFtwLmluaXRdKCkgeyByZXR1cm4gJyc7IH0sXG4gKiAgIFtwLnJlc3VsdF0oeCkgeyByZXR1cm4geDsgfSxcbiAqICAgW3Auc3RlcF0oYWNjLCB4KSB7IHJldHVybiBhY2MgKyB4OyB9XG4gKiB9O1xuICpcbiAqIGxldCByZXN1bHQgPSB0cmFuc2R1Y2UoWzEsIDIsIDMsIDQsIDVdLCB4Zm9ybSwgYXJyYXlSZWR1Y2VyKTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdCk7ICAgLy8gLT4gWzIsIDMsIDQsIDUsIDZdXG4gKlxuICogcmVzdWx0ID0gdHJhbnNkdWNlKFsxLCAyLCAzLCA0LCA1XSwgeGZvcm0sIHN0cmluZ1JlZHVjZXIpO1xuICogY29uc29sZS5sb2cocmVzdWx0KTsgICAvLyAtPiBcIjIzNDU2XCJcbiAqXG4gKiByZXN1bHQgPSB0cmFuc2R1Y2UoJzEyMzQ1JywgeGZvcm0sIGFycmF5UmVkdWNlcik7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQpOyAgIC8vIC0+IFsyLCAzLCA0LCA1LCA2XVxuICpcbiAqIHJlc3VsdCA9IHRyYW5zZHVjZSgnMTIzNDUnLCB4Zm9ybSwgc3RyaW5nUmVkdWNlcik7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQpOyAgIC8vIC0+IFwiMjM0NTZcIlxuICogYGBgXG4gKlxuICogVGhlc2UgZXhhbXBsZXMgaWxsdXN0cmF0ZSBhIG51bWJlciBvZiBpbXBvcnRhbnQgY29uY2VwdHMuIEZpcnN0IG9mIGFsbCwgdGhlXG4gKiB0cmFuc2R1Y2VyIGZ1bmN0aW9uIGlzIGluZGVwZW5kZW50IG9mIHRoZSB0eXBlIG9mIHRoZSBjb2xsZWN0aW9uOyB0aGUgc2FtZVxuICogdHJhbnNkdWNlciBmdW5jdGlvbiBpcyB1c2VkIG5vIG1hdHRlciB0aGUgdHlwZSBvZiBpbnB1dCBvciBvdXRwdXRcbiAqIGNvbGxlY3Rpb25zLiBTZWNvbmRseSwgdHdvIHJlZHVjZXJzIGFyZSBkZWZpbmVkLiBUaGVzZSBhcmUgb2JqZWN0cyB0aGF0XG4gKiBjb25mb3JtIHRvIHRoZSB0cmFuc2R1Y2VyIHByb3RvY29sIChzZWUgdGhlIGRvY3VtZW50YXRpb24gb25cbiAqIGB7QGxpbmsgbW9kdWxlOnhkdWNlLXRvb2xzLnByb3RvY29sc31gKSBhbmQgdGhhdCBrbm93IGhvdyB0byBwcm9kdWNlIHRoZSBvdXRwdXRcbiAqIGNvbGxlY3Rpb24gb2YgY2hvaWNlLiBJbiB0aGlzIGNhc2UsIHRoZSByZWR1Y2VycyBrbm93IGhvdyB0byBjcmVhdGUgbmV3XG4gKiBhcnJheXMgYW5kIHN0cmluZ3MgKHRoZSBgaW5pdGAgcHJvdG9jb2wpIGFuZCBob3cgdG8gYWRkIGVsZW1lbnRzIHRvIGFycmF5c1xuICogYW5kIHN0cmluZ3MgKHRoZSBgc3RlcGAgcHJvdG9jb2wpLiBCZWNhdXNlIHRoZXNlIHJlZHVjZXJzIGRvIGhhdmUgYGluaXRgXG4gKiBwcm90b2NvbCBwcm9wZXJ0aWVzLCB0aGUgYHRyYW5zZHVjZWAgY2FsbHMgZG8gbm90IHJlcXVpcmUgZXhwbGljaXQgaW5pdGlhbFxuICogY29sbGVjdGlvbnMuXG4gKlxuICogVGhlIGZpbmFsIHBvaW50IGlzIHRoYXQgYHRyYW5zZHVjZWAgY2FuIGFjY2VwdCBhbnkga2luZCBvZiBpdGVyYWJsZVxuICogY29sbGVjdGlvbiwgYW5kIGJ5IHBhc3NpbmcgaW4gdGhlIHByb3BlciByZWR1Y2VyLCBpdCBjYW4gcHJvZHVjZSBhbnkga2luZCBvZlxuICogb3V0cHV0IGNvbGxlY3Rpb24uIFRoZSBzYW1lIGB0cmFuc2R1Y2VgIGZ1bmN0aW9uIGFuZCB0aGUgc2FtZSBtYXAgdHJhbnNmb3JtZXJcbiAqIGlzIHVzZWQgaW4gYWxsIGZvdXIgZXhhbXBsZXMsIGRlc3BpdGUgdGhlIGlucHV0L291dHB1dCBjb21iaW5hdGlvbiBiZWluZ1xuICogZGlmZmVyZW50IGluIGFsbCBmb3VyLlxuICpcbiAqIFRoZSBgcmVkdWNlcmAgcGFyYW1ldGVyICpjYW4qIGJlIGEgcmVkdWNlciBmdW5jdGlvbiBpbnN0ZWFkIG9mIGEgcmVkdWNlclxuICogb2JqZWN0LiBJZiB0aGlzIGlzIHRoZSBjYXNlLCB0aGUgYGluaXRgIHBhcmFtZXRlciBpcyByZXF1aXJlZCBiZWNhdXNlIGFcbiAqIGZ1bmN0aW9uIGNhbm5vdCBkZWZpbmUgYW4gaW5pdGlhbCB2YWx1ZSBpdHNlbGYuXG4gKlxuICogVGhlIGBpbml0YCBjb2xsZWN0aW9uIGRvZXNuJ3QgaGF2ZSB0byBiZSBlbXB0eS4gSWYgaXQgaXNuJ3QsIHRoZSBlbGVtZW50c1xuICogdGhhdCBhcmUgYWxyZWFkeSBpbiBpdCBhcmUgcmV0YWluZWQgYW5kIHRoZSB0cmFuc2Zvcm1lZCBpbnB1dCBlbGVtZW50cyBhcmVcbiAqIHJlZHVjZWQgaW50byB0aGUgY29sbGVjdGlvbiBub3JtYWxseS5cbiAqXG4gKiBPZiBjb3Vyc2UsIHRoZSBleGFtcGxlcyBhcmUgbm90IHJlYWxseSBuZWNlc3NhcnkgLSB0aGUgc2FtZSB0aGluZyBjb3VsZCBiZVxuICogYWNjb21wbGlzaGVkIHVzaW5nIGB7QGxpbmsgbW9kdWxlOnhkdWNlLmludG98aW50b31gIHdpdGhvdXQgaGF2aW5nIHRvIGNyZWF0ZVxuICogdGhlIHJlZHVjZXJzIChzdHJpbmdzIGFuZCBhcnJheXMgcGFzc2VkIHRvIGB7QGxpbmsgbW9kdWxlOnhkdWNlLmludG98aW50b31gXG4gKiBhcyB0YXJnZXRzIGtub3cgaG93IHRvIHJlZHVjZSB0aGVtc2VsdmVzIGFscmVhZHkpLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwYXJhbSB7bW9kdWxlOnhkdWNlLXRvb2xzLkl0ZXJhYmxlfSBjb2xsZWN0aW9uIFRoZSBpbnB1dCBjb2xsZWN0aW9uLiBUaGUgb25seVxuICogICAgIHJlcXVpcmVtZW50IG9mIHRoaXMgY29sbGVjdGlvbiBpcyB0aGF0IGl0IGltcGxlbWVudCB0aGUgYGl0ZXJhYmxlYFxuICogICAgIHByb3RvY29sLiBTcGVjaWFsIHN1cHBvcnQgaXMgcHJvdmlkZWQgYnkgdGhlIGxpYnJhcnkgZm9yIG9iamVjdHMsIHNvIHRoZXlcbiAqICAgICBjYW4gYWxzbyBiZSB1c2VkLlxuICogQHBhcmFtIHttb2R1bGU6eGR1Y2UtdG9vbHMuVHJhbnNkdWNlckZ1bmN0aW9ufSBbeGZvcm1dIEEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIGFcbiAqICAgICB0cmFuc2R1Y2VyIG9iamVjdCB0aGF0IGRlZmluZXMgdGhlIHRyYW5zZm9ybWF0aW9uIGJlaW5nIGRvbmUgdG8gdGhlIGlucHV0XG4gKiAgICAgY29sbGVjdGlvbidzIGVsZW1lbnRzLiBBbnkgb2YgdGhlIHRyYW5zZHVjZXJzIGluIHRoZVxuICogICAgIHtAbGluayBtb2R1bGU6dHJhbnNkdWNlcnN8dHJhbnNkdWNlcnN9IG1vZHVsZSBjYW4gcHJvZHVjZSBhIHN1aXRhYmxlXG4gKiAgICAgdHJhbnNkdWNlciBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7KG1vZHVsZTp4ZHVjZS10b29scy5TdGVwRnVuY3Rpb258bW9kdWxlOnhkdWNlLXRvb2xzLlJlZHVjZXIpfSByZWR1Y2VyIEVpdGhlciBhXG4gKiAgICAgZnVuY3Rpb24gb3IgYSByZWR1Y2VyIG9iamVjdCB0aGF0IGltcGxlbWVudHMgdGhlIHRyYW5zZHVjZXIgcHJvdG9jb2xzXG4gKiAgICAgKGBpbml0YCBpcyAgb25seSByZXF1aXJlZCBpZiB0aGUgYGluaXRgIHBhcmFtZXRlciBpcyBub3QgcHJlc2VudCkuIFRoaXNcbiAqICAgICBvYmplY3QgbXVzdCBrbm93IGhvdyB0byBwcm9kdWNlIGFuIG91dHB1dCBjb2xsZWN0aW9uIHRocm91Z2ggaXRzIGBzdGVwYFxuICogICAgIGFuZCBgcmVzdWx0YCBwcm90b2NvbCBmdW5jdGlvbnMuIElmIHRoaXMgcGFyYW1ldGVyIGlzIGEgZnVuY3Rpb24sIHRoZW4gaXRcbiAqICAgICBpcyB0dXJuZWQgaW50byBhIHZhbGlkIHJlZHVjZXIgb2JqZWN0LlxuICogQHBhcmFtIHttb2R1bGU6eGR1Y2UtdG9vbHMuUmVkdWNpYmxlfSBbaW5pdF0gQSBjb2xsZWN0aW9uIG9mIHRoZSBzYW1lIHR5cGUgYXMgdGhlXG4gKiAgICAgb3V0cHV0IGNvbGxlY3Rpb24uIElmIHRoaXMgaXMgbm90IHByZXNlbnQsIHRoZW4gdGhlIHJlZHVjZXIncyBgaW5pdGBcbiAqICAgICBwcm90b2NvbCBmdW5jdGlvbiBpcyBjYWxsZWQgaW5zdGVhZCB0byBnZXQgdGhlIGluaXRpYWwgY29sbGVjdGlvbi4gSWYgaXRcbiAqICAgICBpcyBwcmVzZW50IGFuZCBub3QgZW1wdHksIHRoZW4gdGhlIGV4aXN0aW5nIGVsZW1lbnRzIHJlbWFpbiBhbmQgdGhlXG4gKiAgICAgdHJhbnNmb3JtZWQgaW5wdXQgY29sbGVjdGlvbiBlbGVtZW50cyBhcmUgYWRkZWQgdG8gaXQuXG4gKiBAcmV0dXJuIHsqfSBBIGNvbGxlY3Rpb24gb2YgYSB0eXBlIGRldGVybWluZWQgYnkgdGhlIHBhc3NlZCByZWR1Y2VyLiBUaGVcbiAqICAgICBlbGVtZW50cyBvZiB0aGlzIGNvbGxlY3Rpb24gYXJlIHRoZSByZXN1bHRzIGZyb20gdGhlIHRyYW5zZm9ybWVyIGZ1bmN0aW9uXG4gKiAgICAgYmVpbmcgYXBwbGllZCB0byBlYWNoIGVsZW1lbnQgb2YgdGhlIGlucHV0IGNvbGxlY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIHRyYW5zZHVjZShjb2xsZWN0aW9uLCB4Zm9ybSwgcmVkdWNlciwgaW5pdCkge1xuICBjb25zdCByID0gaXNGdW5jdGlvbihyZWR1Y2VyKSA/IHRvUmVkdWNlcihyZWR1Y2VyKSA6IHJlZHVjZXI7XG4gIGNvbnN0IGkgPSBpbml0ID8/IHJbcC5pbml0XSgpO1xuICBjb25zdCB4ZiA9IHhmb3JtID8geGZvcm0ocikgOiByO1xuICByZXR1cm4gcmVkdWNlKGNvbGxlY3Rpb24sIHhmLCBpKTtcbn1cblxuLyoqXG4gKiBUcmFuc2Zvcm1zIHRoZSBlbGVtZW50cyBvZiB0aGUgaW5wdXQgY29sbGVjdGlvbiBhbmQgcmVkdWNlcyB0aGVtIGludG8gYSBuZXdcbiAqIGFycmF5LlxuICpcbiAqIFRoZSB0cmFuc2Zvcm1lciBpcyBvcHRpb25hbC4gSWYgaXQgaXNuJ3QgcHJlc2VudCwgdGhpcyBmdW5jdGlvbiBqdXN0IGNvbnZlcnRzXG4gKiB0aGUgaW5wdXQgY29sbGVjdGlvbiBpbnRvIGFuIGFycmF5LlxuICpcbiAqIGBgYFxuICogaW1wb3J0IHsgYXNBcnJheSwgbWFwIH0gZnJvbSBcIkBjaGFua28veGR1Y2VcIjtcbiAqXG4gKiBjb25zdCB4Zm9ybSA9IG1hcCh4ID0+IHggKyAxKTtcbiAqXG4gKiBsZXQgcmVzdWx0ID0gYXNBcnJheShbMSwgMiwgMywgNCwgNV0sIHhmb3JtKTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdCk7ICAgLy8gLT4gWzIsIDMsIDQsIDUsIDZdXG4gKlxuICogcmVzdWx0ID0gYXNBcnJheSgnMTIzNDUnLCB4Zm9ybSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQpOyAgIC8vIC0+IFsyLCAzLCA0LCA1LCA2XVxuICpcbiAqIHJlc3VsdCA9IGFzQXJyYXkoJzEyMzQ1Jyk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQpOyAgIC8vIC0+IFsxLCAyLCAzLCA0LCA1XVxuICpcbiAqIHJlc3VsdCA9IGFzQXJyYXkoe2E6IDEsIGI6IDJ9KTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdCk7ICAgLy8gLT4gW3sgYTogMSB9LCB7IGI6IDIgfV1cbiAqIGBgYFxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwYXJhbSB7bW9kdWxlOnhkdWNlLXRvb2xzLkl0ZXJhYmxlfSBjb2xsZWN0aW9uIFRoZSBpbnB1dCBjb2xsZWN0aW9uLiBUaGUgb25seVxuICogICAgIHJlcXVpcmVtZW50IG9mIHRoaXMgY29sbGVjdGlvbiBpcyB0aGF0IGl0IGltcGxlbWVudCB0aGUgYGl0ZXJhYmxlYFxuICogICAgIHByb3RvY29sLiBTcGVjaWFsIHN1cHBvcnQgaXMgcHJvdmlkZWQgYnkgdGhlIGxpYnJhcnkgZm9yIG9iamVjdHMsIHNvIHRoZXlcbiAqICAgICBjYW4gYWxzbyBiZSB1c2VkLlxuICogQHBhcmFtIHttb2R1bGU6eGR1Y2UtdG9vbHMuVHJhbnNkdWNlckZ1bmN0aW9ufSBbeGZvcm1dIEEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIGFcbiAqICAgICB0cmFuc2R1Y2VyIG9iamVjdCB0aGF0IGRlZmluZXMgdGhlIHRyYW5zZm9ybWF0aW9uIGJlaW5nIGRvbmUgdG8gdGhlIGlucHV0XG4gKiAgICAgY29sbGVjdGlvbidzIGVsZW1lbnRzLiBBbnkgb2YgdGhlIHRyYW5zZHVjZXJzIGluIHRoZVxuICogICAgIHtAbGluayBtb2R1bGU6eGR1Y2V8eGR1Y2V9IG1vZHVsZSBjYW4gcHJvZHVjZSBhIHN1aXRhYmxlIHRyYW5zZHVjZXJcbiAqICAgICBmdW5jdGlvbi4gSWYgdGhpcyBpc24ndCBwcmVzZW50LCB0aGUgaW5wdXQgY29sbGVjdGlvbiB3aWxsIHNpbXBseSBiZVxuICogICAgIHJlZHVjZWQgaW50byBhbiBhcnJheSB3aXRob3V0IHRyYW5zZm9ybWF0aW9uLlxuICogQHJldHVybiB7QXJyYXl9IEFuIGFycmF5IGNvbnRhaW5pbmcgYWxsIG9mIHRoZSB0cmFuc2Zvcm1lZCB2YWx1ZXMgZnJvbSB0aGVcbiAqICAgICBpbnB1dCBjb2xsZWN0aW9uIGVsZW1lbnRzLlxuICovXG5mdW5jdGlvbiBhc0FycmF5KGNvbGxlY3Rpb24sIHhmb3JtKSB7XG4gIHJldHVybiB0cmFuc2R1Y2UoY29sbGVjdGlvbiwgeGZvcm0sIHRvUmVkdWNlcihbXSkpO1xufVxuXG4vKipcbiAqIFRyYW5zZm9ybXMgdGhlIGVsZW1lbnRzIG9mIHRoZSBpbnB1dCBjb2xsZWN0aW9uIGFuZCByZWR1Y2VzIHRoZW0gaW50byBhIG5ld1xuICogb2JqZWN0LlxuICpcbiAqIFRoZSB0cmFuc2Zvcm1lciBpcyBvcHRpb25hbC4gSWYgaXQgaXNuJ3QgcHJlc2VudCwgdGhpcyBmdW5jdGlvbiBqdXN0IGNvbnZlcnRzXG4gKiB0aGUgaW5wdXQgY29sbGVjdGlvbiBpbnRvIGFuIG9iamVjdC4gV2hlbiB0aGlzIGhhcHBlbnMsIGlmIHRoZSBpbnB1dFxuICogY29sbGVjdGlvbiBpcyBub3QgYW4gb2JqZWN0IG9yIGFuIGFycmF5IG9mIG9iamVjdHMsIG51bWJlcnMgc3RhcnRpbmcgYXQgYDBgXG4gKiB3aWxsIGJlIHVzZWQgYXMga2V5cyBmb3IgdGhlIHZhbHVlcyBwcm92aWRlZCBieSB0aGUgaW5wdXQgY29sbGVjdGlvbi5cbiAqXG4gKiBgYGBcbiAqIGltcG9ydCB7IGFzT2JqZWN0LCBrdiwgbWFwIH0gZnJvbSBcIkBjaGFua28veGR1Y2VcIjtcbiAqXG4gKiBjb25zdCBmbiA9IHByb3AgPT4ge1xuICogICBjb25zdCB7IGssIHYgfSA9IGt2KHByb3ApO1xuICogICByZXR1cm4geyBba106IHYgKyAxIH07XG4gKiB9XG4gKiBjb25zdCB4Zm9ybSA9IG1hcChmbik7XG4gKlxuICogbGV0IHJlc3VsdCA9IGFzT2JqZWN0KHsgYTogMSwgYjogMiB9LCB4Zm9ybSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQpOyAgIC8vIC0+IHsgYTogMiwgYjogMyB9XG4gKlxuICogcmVzdWx0ID0gYXNPYmplY3QoW3sgYTogMSB9LCB7IGI6IDIgfV0sIHhmb3JtKTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdCk7ICAgLy8gLT4geyBhOiAyLCBiOiAzIH1cbiAqXG4gKiByZXN1bHQgPSBhc09iamVjdChbMSwgMiwgMywgNCwgNV0pO1xuICogY29uc29sZS5sb2cocmVzdWx0KTsgICAvLyAtPiB7IDA6IDEsIDE6IDIsIDI6IDMsIDM6IDQsIDQ6IDUgfVxuICpcbiAqIHJlc3VsdCA9IGFzT2JqZWN0KFt7IGE6IDEgfSwgeyBiOiAyIH1dKTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdCk7ICAgLy8gLT4geyBhOiAxLCBiOiAyIH1cbiAqXG4gKiByZXN1bHQgPSBhc09iamVjdChcImhlbGxvXCIpO1xuICogY29uc29sZS5sb2cocmVzdWx0KTsgICAvLyAtPiB7IDA6IFwiaFwiLCAxOiBcImVcIiwgMjogXCJsXCIsIDM6IFwibFwiLCA0OiBcIm9cIiB9XG4gKiBgYGBcbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcGFyYW0ge21vZHVsZTp4ZHVjZS10b29scy5JdGVyYWJsZX0gY29sbGVjdGlvbiBUaGUgaW5wdXQgY29sbGVjdGlvbi4gVGhlIG9ubHlcbiAqICAgICByZXF1aXJlbWVudCBvZiB0aGlzIGNvbGxlY3Rpb24gaXMgdGhhdCBpdCBpbXBsZW1lbnQgdGhlIGBpdGVyYWJsZWBcbiAqICAgICBwcm90b2NvbC4gU3BlY2lhbCBzdXBwb3J0IGlzIHByb3ZpZGVkIGJ5IHRoZSBsaWJyYXJ5IGZvciBvYmplY3RzLCBzbyB0aGV5XG4gKiAgICAgY2FuIGFsc28gYmUgdXNlZC5cbiAqIEBwYXJhbSB7bW9kdWxlOnhkdWNlLXRvb2xzLlRyYW5kdWNlcn0gW3hmb3JtXSBBIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyBhIHRyYW5zZHVjZXJcbiAqICAgICBvYmplY3QgdGhhdCBkZWZpbmVzIHRoZSB0cmFuc2Zvcm1hdGlvbiBiZWluZyBkb25lIHRvIHRoZSBpbnB1dFxuICogICAgIGNvbGxlY3Rpb24ncyBlbGVtZW50cy4gQW55IG9mIHRoZSB0cmFuc2R1Y2VycyBpbiB0aGVcbiAqICAgICB7QGxpbmsgbW9kdWxlOnhkdWNlfHhkdWNlfSBtb2R1bGUgY2FuIHByb2R1Y2UgYSBzdWl0YWJsZSB0cmFuc2R1Y2VyXG4gKiAgICAgZnVuY3Rpb24uIElmIHRoaXMgaXNuJ3QgcHJlc2VudCwgdGhlIGlucHV0IGNvbGxlY3Rpb24gd2lsbCBzaW1wbHkgYmVcbiAqICAgICByZWR1Y2VkIGludG8gYW4gb2JqZWN0IHdpdGhvdXQgdHJhbnNmb3JtYXRpb24uXG4gKiBAcmV0dXJuIHtPYmplY3R9IEFuIG9iamVjdCBjb250YWluaW5nIGFsbCBvZiB0aGUgdHJhbnNmb3JtZWQgdmFsdWVzIGZyb20gdGhlXG4gKiAgICAgaW5wdXQgY29sbGVjdGlvbiBlbGVtZW50cy5cbiAqL1xuZnVuY3Rpb24gYXNPYmplY3QoY29sbGVjdGlvbiwgeGZvcm0pIHtcbiAgcmV0dXJuIHRyYW5zZHVjZShjb2xsZWN0aW9uLCB4Zm9ybSwgdG9SZWR1Y2VyKHt9KSk7XG59XG5cbi8qKlxuICogVHJhbnNmb3JtcyB0aGUgZWxlbWVudHMgb2YgdGhlIGlucHV0IGNvbGxlY3Rpb24gYW5kIHJlZHVjZXMgdGhlbSBpbnRvIGEgbmV3XG4gKiBzdHJpbmcuXG4gKlxuICogVGhlIHRyYW5zZm9ybWVyIGlzIG9wdGlvbmFsLiBJZiBpdCBpc24ndCBwcmVzZW50LCB0aGlzIGZ1bmN0aW9uIGp1c3QgY29udmVydHNcbiAqIHRoZSBpbnB1dCBjb2xsZWN0aW9uIGludG8gYW4gc3RyaW5nLiBJZiB0aGlzIGlzIHRoZSBjYXNlIGFuZCB0aGUgaW5wdXRcbiAqIGNvbGxlY3Rpb24gaXMgYW4gb2JqZWN0LCBvbmx5IHRoZSB2YWx1ZXMgd2lsbCBiZSBjb25jYXRlbmF0ZWQgaW50byBhIHN0cmluZy5cbiAqXG4gKiBPdGhlcndpc2UsIHRyYW5zZm9ybWluZyBvYmplY3RzIGludG8gc3RyaW5ncyBvbmx5IG1ha2VzIG11Y2ggc2Vuc2UgaWYgdGhlXG4gKiB0cmFuc2R1Y2VyIHByb2R1Y2VzIG9ubHkgYSBzaW5nbGUgb3V0cHV0IGZyb20gZWFjaCBvZiB0aGUgb2JqZWN0cyBrZXkvdmFsdWVcbiAqIHBhaXJzLlxuICpcbiAqIGBgYFxuICogaW1wb3J0IHsgdHJhbnNkdWNlLCBrZXksIG1hcCB9IGZyb20gXCJAY2hhbmtvL3hkdWNlXCI7XG4gKlxuICogY29uc3QgeGZvcm0gPSBtYXAoeCA9PiB4LnRvVXBwZXJDYXNlKCkpO1xuICpcbiAqIGxldCByZXN1bHQgPSBhc1N0cmluZygnaGVsbG8nLCB4Zm9ybSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQpOyAgIC8vIC0+IFwiSEVMTE9cIlxuICpcbiAqIHJlc3VsdCA9IGFzU3RyaW5nKFsnaCcsICdlJywgJ2wnLCAnbCcsICdvJ10sIHhmb3JtKTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdCk7ICAgLy8gLT4gXCJIRUxMT1wiXG4gKlxuICogcmVzdWx0ID0gYXNTdHJpbmcoeyBhOiAxLCBjOiAyLCBiOiAzIH0sIG1hcChrZXkpKTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdCk7ICAgLy8gLT4gXCJhY2JcIlxuICpcbiAqIHJlc3VsdCA9IGFzU3RyaW5nKFsxLCAyLCAzLCA0LCA1XSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQpOyAgIC8vIC0+IFwiMTIzNDVcIlxuICpcbiAqIHJlc3VsdCA9IGFzU3RyaW5nKHsgYTogMSwgYzogMiwgYjogMyB9KTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdCk7ICAgLy8gLT4gXCIxMjNcIlxuICogYGBgXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHBhcmFtIHttb2R1bGU6eGR1Y2UtdG9vbHMuSXRlcmFibGV9IGNvbGxlY3Rpb24gVGhlIGlucHV0IGNvbGxlY3Rpb24uIFRoZSBvbmx5XG4gKiAgICAgcmVxdWlyZW1lbnQgb2YgdGhpcyBjb2xsZWN0aW9uIGlzIHRoYXQgaXQgaW1wbGVtZW50IHRoZSBgaXRlcmFibGVgXG4gKiAgICAgcHJvdG9jb2wuIFNwZWNpYWwgc3VwcG9ydCBpcyBwcm92aWRlZCBieSB0aGUgbGlicmFyeSBmb3Igb2JqZWN0cywgc28gdGhleVxuICogICAgIGNhbiBhbHNvIGJlIHVzZWQuXG4gKiBAcGFyYW0ge21vZHVsZTp4ZHVjZS10b29scy5UcmFuc2R1Y2VyRnVuY3Rpb259IFt4Zm9ybV0gQSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgYVxuICogICAgIHRyYW5zZHVjZXIgb2JqZWN0IHRoYXQgZGVmaW5lcyB0aGUgdHJhbnNmb3JtYXRpb24gYmVpbmcgZG9uZSB0byB0aGUgaW5wdXRcbiAqICAgICBjb2xsZWN0aW9uJ3MgZWxlbWVudHMuIEFueSBvZiB0aGUgdHJhbnNkdWNlcnMgaW4gdGhlXG4gKiAgICAge0BsaW5rIG1vZHVsZTp0cmFuc2R1Y2Vyc3x0cmFuc2R1Y2Vyc30gbW9kdWxlIGNhbiBwcm9kdWNlIGEgc3VpdGFibGVcbiAqICAgICB0cmFuc2R1Y2VyIGZ1bmN0aW9uLiBJZiB0aGlzIGlzbid0IHByZXNlbnQsIHRoZSBpbnB1dCBjb2xsZWN0aW9uIHdpbGxcbiAqICAgICBzaW1wbHkgYmUgcmVkdWNlZCBpbnRvIGEgc3RyaW5nIHdpdGhvdXQgdHJhbnNmb3JtYXRpb24uXG4gKiBAcmV0dXJuIHtTdHJpbmd9IEEgc3RyaW5nIGNvbnRhaW5pbmcgYWxsIG9mIHRoZSB0cmFuc2Zvcm1lZCB2YWx1ZXMgZnJvbSB0aGVcbiAqICAgICBpbnB1dCBjb2xsZWN0aW9uIGVsZW1lbnRzLlxuICovXG5mdW5jdGlvbiBhc1N0cmluZyhjb2xsZWN0aW9uLCB4Zm9ybSkge1xuICByZXR1cm4gdHJhbnNkdWNlKGNvbGxlY3Rpb24sIHhmb3JtLCB0b1JlZHVjZXIoXCJcIikpO1xufVxuXG4vKipcbiAqIFRyYW5zZm9ybXMgdGhlIGVsZW1lbnRzIG9mIHRoZSBpbnB1dCBjb2xsZWN0aW9uIGFuZCByZWR1Y2VzIHRoZW0gaW50byBhIG5ld1xuICogaXRlcmF0b3IuXG4gKlxuICogVGhlIHRyYW5zZm9ybWVyIGlzIG9wdGlvbmFsLiBJZiBpdCBpc24ndCBwcmVzZW50LCB0aGlzIGZ1bmN0aW9uIGp1c3QgY29udmVydHNcbiAqIHRoZSBpbnB1dCBjb2xsZWN0aW9uIGludG8gYW4gaXRlcmF0b3IuXG4gKlxuICogKihUaGUgcmVzdWx0cyBoZXJlIGFyZSBzaG93biBwYXNzZWQgdGhyb3VnaCBgYXNBcnJheWAgYmVjYXVzZSB0aGVyZSdzIG5vXG4gKiBwcmludGFibGUgcmVwcmVzZW50YXRpb24gb2YgYW4gaXRlcmF0b3IgdG8gc2hvdy4gVGhlIGBhc0FycmF5YCBjYWxscyBhcmUgZm9yXG4gKiBkZW1vbnN0cmF0aW9uIHB1cnBvc2VzIG9ubHkuKSpcbiAqXG4gKiBgYGBcbiAqIGltcG9ydCB7IGFzSXRlcmF0b3IsIGFzQXJyYXksIG1hcCB9IGZyb20gXCJAY2hhbmtvL3hkdWNlXCI7XG4gKlxuICogY29uc3QgeGZvcm0gPSBtYXAoeCA9PiB4ICsgMSk7XG4gKiBmdW5jdGlvbiogZml2ZSgpIHtcbiAqICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNTsgKytpKSB7XG4gKiAgICAgeWllbGQgaTtcbiAqICAgfVxuICogfTtcbiAqXG4gKiBsZXQgcmVzdWx0ID0gYXNJdGVyYXRvcihmaXZlKCksIHhmb3JtKTtcbiAqIGNvbnNvbGUubG9nKGFzQXJyYXkocmVzdWx0KSk7ICAgLy8gLT4gWzIsIDMsIDQsIDUsIDZdXG4gKlxuICogcmVzdWx0ID0gYXNJdGVyYXRvcihbMSwgMiwgMywgNCwgNV0sIHhmb3JtKTtcbiAqIGNvbnNvbGUubG9nKGFzQXJyYXkocmVzdWx0KSk7ICAgLy8gLT4gWzIsIDMsIDQsIDUsIDZdXG4gKlxuICogcmVzdWx0ID0gYXNJdGVyYXRvcihbMSwgMiwgMywgNCwgNV0pO1xuICogY29uc29sZS5sb2coYXNBcnJheShyZXN1bHQpKTsgICAvLyAtPiBbMSwgMiwgMywgNCwgNV1cbiAqXG4gKiByZXN1bHQgPSBhc0l0ZXJhdG9yKHthOiAxLCBiOiAyfSk7XG4gKiBjb25zb2xlLmxvZyhhc0FycmF5KHJlc3VsdCkpOyAgIC8vIC0+IFt7IGE6IDEgfSwgeyBiOiAyIH1dXG4gKiBgYGBcbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcGFyYW0ge21vZHVsZTp4ZHVjZS10b29scy5JdGVyYWJsZX0gY29sbGVjdGlvbiBUaGUgaW5wdXQgY29sbGVjdGlvbi4gVGhlIG9ubHlcbiAqICAgICByZXF1aXJlbWVudCBvZiB0aGlzIGNvbGxlY3Rpb24gaXMgdGhhdCBpdCBpbXBsZW1lbnQgdGhlIGBpdGVyYWJsZWBcbiAqICAgICBwcm90b2NvbC4gU3BlY2lhbCBzdXBwb3J0IGlzIHByb3ZpZGVkIGJ5IHRoZSBsaWJyYXJ5IGZvciBvYmplY3RzLCBzbyB0aGV5XG4gKiAgICAgY2FuIGFsc28gYmUgdXNlZC5cbiAqIEBwYXJhbSB7bW9kdWxlOnhkdWNlLXRvb2xzLlRyYW5zZHVjZXJGdW5jdGlvbn0gW3hmb3JtXSBBIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyBhXG4gKiAgICAgdHJhbnNkdWNlciBvYmplY3QgdGhhdCBkZWZpbmVzIHRoZSB0cmFuc2Zvcm1hdGlvbiBiZWluZyBkb25lIHRvIHRoZSBpbnB1dFxuICogICAgIGNvbGxlY3Rpb24ncyBlbGVtZW50cy4gQW55IG9mIHRoZSB0cmFuc2R1Y2VycyBpbiB0aGVcbiAqICAgICB7QGxpbmsgbW9kdWxlOnRyYW5zZHVjZXJzfHRyYW5zZHVjZXJzfSBtb2R1bGUgY2FuIHByb2R1Y2UgYSBzdWl0YWJsZVxuICogICAgIHRyYW5zZHVjZXIgZnVuY3Rpb24uIElmIHRoaXMgaXNuJ3QgcHJlc2VudCwgdGhlIGlucHV0IGNvbGxlY3Rpb24gd2lsbFxuICogICAgIHNpbXBseSBiZSByZWR1Y2VkIGludG8gYW4gaXRlcmF0b3Igd2l0aG91dCB0cmFuc2Zvcm1hdGlvbi5cbiAqIEByZXR1cm4ge21vZHVsZTp4ZHVjZS10b29scy5JdGVyYXRvcn0gQW4gaXRlcmF0b3IgY29udGFpbmluZyBhbGwgb2YgdGhlIHRyYW5zZm9ybWVkXG4gKiAgICAgdmFsdWVzIGZyb20gdGhlIGlucHV0IGNvbGxlY3Rpb24gZWxlbWVudHMuXG4gKi9cbmZ1bmN0aW9uIGFzSXRlcmF0b3IoY29sbGVjdGlvbiwgeGZvcm0pIHtcbiAgcmV0dXJuIHhmb3JtID8gdHJhbnNkdWNpbmdJdGVyYXRvcihjb2xsZWN0aW9uLCB4Zm9ybSkgOiBpdGVyYXRvcihjb2xsZWN0aW9uKTtcbn1cblxuLyoqXG4gKiBUcmFuc2Zvcm1zIHRoZSBlbGVtZW50cyBvZiB0aGUgaW5wdXQgY29sbGVjdGlvbiBhbmQgcmVkdWNlcyB0aGVtIGludG8gYSBuZXdcbiAqIGNvbGxlY3Rpb24gb2YgdGhlIHNhbWUgdHlwZS5cbiAqXG4gKiBUaGlzIGlzIHRoZSBoaWdoZXN0IGxldmVsIG9mIHRoZSB0aHJlZSBtYWluIHRyYW5zZHVjdGlvbiBmdW5jdGlvbnNcbiAqIChgc2VxdWVuY2VgLCBge0BsaW5rIG1vZHVsZTp4ZHVjZS5pbnRvfGludG99YCwgYW5kXG4gKiBge0BsaW5rIG1vZHVsZTp4ZHVjZS50cmFuc2R1Y2V8dHJhbnNkdWNlfWApLiBJdCBjcmVhdGVzIGEgbmV3IGNvbGxlY3Rpb24gb2ZcbiAqIHRoZSBzYW1lIHR5cGUgYXMgdGhlIGlucHV0IGNvbGxlY3Rpb24gYW5kIHJlZHVjZXMgdGhlIHRyYW5zZm9ybWVkIGVsZW1lbnRzXG4gKiBpbnRvIGl0LiBBZGRpdGlvbmFsbHksIHVubGlrZSBge0BsaW5rIG1vZHVsZTp4ZHVjZS5pbnRvfGludG99YCBhbmRcbiAqIGB7QGxpbmsgbW9kdWxlOnhkdWNlLnRyYW5zZHVjZXx0cmFuc2R1Y2V9YCwgdGhpcyBmdW5jdGlvbiBpcyBjYXBhYmxlIG9mXG4gKiBwcm9kdWNpbmcgYW4gaXRlcmF0b3IgKGFzIGxvbmcgYXMgdGhlIGlucHV0IGlzIGFuIGl0ZXJhdG9yKS5cbiAqXG4gKiBUaGUgaW5wdXQgY29sbGVjdGlvbiBtdXN0IG5vdCBvbmx5IGltcGxlbWVudCB0aGUgYGl0ZXJhdG9yYCBwcm90b2NvbCAoYXMgaW5cbiAqIHRoZSBsYXN0IHR3byBmdW5jdGlvbnMpIGJ1dCBhbHNvIHRoZSBgaW5pdGAsIGByZXN1bHRgLCBhbmQgYHN0ZXBgIHRyYW5zZHVjZXJcbiAqIHByb3RvY29scy4gU3BlY2lhbCBzdXBwb3J0IGlzIHByb3ZpZGVkIGZvciBhcnJheXMsIHN0cmluZ3MsIG9iamVjdHMsIGFuZFxuICogaXRlcmF0b3JzLCBzbyB0aGV5IG5lZWQgbm90IGltcGxlbWVudCBhbnkgcHJvdG9jb2wuXG4gKlxuICogVGhlIG9idmlvdXMgbGltaXRhdGlvbiBvZiB0aGlzIGZ1bmN0aW9uIGlzIHRoYXQgdGhlIHR5cGUgb2Ygb3V0cHV0IGNvbGxlY3Rpb25cbiAqIGNhbm5vdCBiZSBjaG9zZW4uIFNpbmNlIGl0IGlzIGFsd2F5cyB0aGUgc2FtZSBhcyB0aGUgaW5wdXQgY29sbGVjdGlvbiwgdGhpc1xuICogZnVuY3Rpb24gY2Fubm90IGJlIHVzZWQgdG8gY29udmVydCBhIGNvbGxlY3Rpb24gaW50byBhIGRpZmZlcmVudCB0eXBlLlxuICpcbiAqIGBgYFxuICogaW1wb3J0IHsgc2VxdWVuY2UsIG1hcCB9IGZyb20gXCJAY2hhbmtvL3hkdWNlXCI7XG4gKlxuICogY29uc3QgeGZvcm0gPSBtYXAoeCA9PiB4ICsgMSk7XG4gKlxuICogbGV0IHJlc3VsdCA9IHNlcXVlbmNlKFsxLCAyLCAzLCA0LCA1XSwgeGZvcm0pO1xuICogY29uc29sZS5sb2cocmVzdWx0KTsgICAvLyAtPiByZXN1bHQgPSBbMiwgMywgNCwgNSwgNl1cbiAqXG4gKiByZXN1bHQgPSBzZXF1ZW5jZSgnMTIzNDUnLCB4Zm9ybSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQpOyAgIC8vIC0+IHJlc3VsdCA9ICcyMzQ1NidcbiAqIGBgYFxuICpcbiAqIFRoZXNlIGV4YW1wbGVzIGFyZSBpZGVudGljYWwgdG8gc29tZSBvZiB0aGUgZXhhbXBsZXMgZnJvbSB0aGUgYGFzWGBcbiAqIGZ1bmN0aW9ucy4gT3RoZXIgZXhhbXBsZXMgYXJlIG5vdCBwb3NzaWJsZSB3aXRoIGBzZXF1ZW5jZWAgYmVjYXVzZSB0aGV5IGhhdmVcbiAqIGRpZmZlcmVudCBpbnB1dCBhbmQgb3V0cHV0IGNvbGxlY3Rpb24gdHlwZXMuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHBhcmFtIHttb2R1bGU6eGR1Y2UtdG9vbHMuUmVkdWNpYmxlSXRlcmFibGV9IGNvbGxlY3Rpb24gVGhlIGlucHV0IGNvbGxlY3Rpb24uIFRoaXNcbiAqICAgICBtdXN0IGltcGxlbWVudCB0aGUgYGl0ZXJhdG9yYCwgYGluaXRgLCBgcmVzdWx0YCwgYW5kIGBzdGVwYCBwcm90b2NvbHMuXG4gKiAgICAgU3BlY2lhbCBzdXBwb3J0IGlzIHByb3ZpZGVkIGZvciBhcnJheXMsIHN0cmluZ3MsIG9iamVjdHMsIGFuZCBpdGVyYXRvcnMsXG4gKiAgICAgc28gdGhleSBkbyBub3QgaGF2ZSB0byBpbXBsZW1lbnQgYW55IHByb3RvY29scy5cbiAqIEBwYXJhbSB7bW9kdWxlOnhkdWNlLXRvb2xzLlRyYW5zZHVjZXJGdW5jdGlvbn0geGZvcm0gQSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgYVxuICogICAgIHRyYW5zZHVjZXIgb2JqZWN0IHRoYXQgZGVmaW5lcyB0aGUgdHJhbnNmb3JtYXRpb24gYmVpbmcgZG9uZSB0byB0aGUgaW5wdXRcbiAqICAgICBjb2xsZWN0aW9uJ3MgZWxlbWVudHMuIEFueSBvZiB0aGUgdHJhbnNkdWNlcnMgaW4gdGhlXG4gKiAgICAge0BsaW5rIG1vZHVsZTp4ZHVjZS10b29scy50cmFuc2R1Y2Vyc3x0cmFuc2R1Y2Vyc30gbW9kdWxlIGNhbiBwcm9kdWNlIGEgc3VpdGFibGVcbiAqICAgICB0cmFuc2R1Y2VyIGZ1bmN0aW9uLlxuICogQHJldHVybiB7bW9kdWxlOnhkdWNlLXRvb2xzLlJlZHVjaWJsZUl0ZXJhYmxlfSBBIGNvbGxlY3Rpb24gb2YgdGhlIHNhbWUgdHlwZSBhcyB0aGVcbiAqICAgICBpbnB1dCBjb2xsZWN0aW9uLCBjb250YWluaW5nIGFsbCBvZiB0aGUgdHJhbnNmb3JtZWQgdmFsdWVzIGZyb20gdGhlIGlucHV0XG4gKiAgICAgY29sbGVjdGlvbiBlbGVtZW50cy5cbiAqL1xuZnVuY3Rpb24gc2VxdWVuY2UoY29sbGVjdGlvbiwgeGZvcm0pIHtcbiAgc3dpdGNoICh0cnVlKSB7XG4gICAgY2FzZSBpc0FycmF5KGNvbGxlY3Rpb24pOlxuICAgICAgcmV0dXJuIGFzQXJyYXkoY29sbGVjdGlvbiwgeGZvcm0pO1xuICAgIGNhc2UgaXNPYmplY3QoY29sbGVjdGlvbik6XG4gICAgICByZXR1cm4gYXNPYmplY3QoY29sbGVjdGlvbiwgeGZvcm0pO1xuICAgIGNhc2UgaXNTdHJpbmcoY29sbGVjdGlvbik6XG4gICAgICByZXR1cm4gYXNTdHJpbmcoY29sbGVjdGlvbiwgeGZvcm0pO1xuICAgIGNhc2UgaXNJbXBsZW1lbnRlZChjb2xsZWN0aW9uLCBcInN0ZXBcIik6XG4gICAgICByZXR1cm4gdHJhbnNkdWNlKGNvbGxlY3Rpb24sIHhmb3JtLCBjb2xsZWN0aW9uKTtcbiAgICBjYXNlIGlzSW1wbGVtZW50ZWQoY29sbGVjdGlvbiwgXCJpdGVyYXRvclwiKTpcbiAgICAgIHJldHVybiBhc0l0ZXJhdG9yKGNvbGxlY3Rpb24sIHhmb3JtKTtcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgRXJyb3IoYENhbm5vdCBzZXF1ZW5jZSBjb2xsZWN0aW9uOiAke2NvbGxlY3Rpb259YCk7XG4gIH1cbn1cblxuLyoqXG4gKiBUcmFuc2Zvcm1zIHRoZSBlbGVtZW50cyBvZiB0aGUgaW5wdXQgY29sbGVjdGlvbiBhbmQgcmVkdWNlcyB0aGVtIGludG8gdGhlXG4gKiB0YXJnZXQgY29sbGVjdGlvbi5cbiAqXG4gKiBUaGlzIGlzIG11Y2ggbGlrZSBge0BsaW5rIG1vZHVsZTp4ZHVjZS50cmFuc2R1Y2V8dHJhbnNkdWNlfWAsIGV4Y2VwdCB0aGF0XG4gKiBpbnN0ZWFkIG9mIGV4cGxpY2l0bHkgcHJvdmlkaW5nIGEgcmVkdWNlciAoYW5kIHBlcmhhcHMgYW4gaW5pdGlhbFxuICogY29sbGVjdGlvbiksIHRoZSB0YXJnZXQgY29sbGVjdGlvbiBhY3RzIGFzIGEgcmVkdWNlciBpdHNlbGYuIFRoaXMgcmVxdWlyZXNcbiAqIHRoYXQgdGhlIGNvbGxlY3Rpb24gaW1wbGVtZW50IHRoZSBgaW5pdGAsIGByZXN1bHRgLCBhbmQgYHN0ZXBgIHRyYW5zZHVjZXJcbiAqIHByb3RvY29sIGZ1bmN0aW9ucy5cbiAqXG4gKiBJZiBubyB0cmFuc2R1Y2VyIGZ1bmN0aW9uIGlzIHByb3ZpZGVkLCB0aGUgaW5wdXQgY29sbGVjdGlvbiBlbGVtZW50cyBhcmVcbiAqIHJlZHVjZWQgaW50byB0aGUgdGFyZ2V0IGNvbGxlY3Rpb24gd2l0aG91dCBiZWluZyB0cmFuc2Zvcm1lZC4gVGhpcyBjYW4gYmVcbiAqIHVzZWQgdG8gY29udmVydCBvbmUga2luZCBvZiBjb2xsZWN0aW9uIGludG8gYW5vdGhlci5cbiAqXG4gKiBgYGBcbiAqIGltcG9ydCB7IGludG8sIG1hcCB9IGZyb20gXCJAY2hhbmtvL3hkdWNlXCI7XG4gKlxuICogY29uc3QgeGZvcm0gPSBtYXAoeCA9PiB4ICsgMSk7XG4gKlxuICogbGV0IHJlc3VsdCA9IGludG8oW10sIFsxLCAyLCAzLCA0LCA1XSwgeGZvcm0pO1xuICogY29uc29sZS5sb2cocmVzdWx0KTsgICAvLyAtPiBbMiwgMywgNCwgNSwgNl1cbiAqXG4gKiByZXN1bHQgPSBpbnRvKFwiXCIsIFsxLCAyLCAzLCA0LCA1XSwgeGZvcm0pO1xuICogY29uc29sZS5sb2cocmVzdWx0KTsgICAvLyAtPiBcIjIzNDU2XCJcbiAqXG4gKiByZXN1bHQgPSBpbnRvKFtdLCBcIjEyMzQ1XCIsIHhmb3JtKTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdCk7ICAgLy8gLT4gWzIsIDMsIDQsIDUsIDZdXG4gKlxuICogcmVzdWx0ID0gaW50byhcIlwiLCBcIjEyMzQ1XCIsIHhmb3JtKTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdCk7ICAgLy8gLT4gXCIyMzQ1NlwiXG4gKiBgYGBcbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcGFyYW0ge21vZHVsZTp4ZHVjZS10b29scy5SZWR1Y2libGV9IHRhcmdldCBUaGUgY29sbGVjdGlvbiBpbnRvIHdoaWNoIGFsbCBvZiB0aGVcbiAqICAgICB0cmFuc2Zvcm1lZCBpbnB1dCBjb2xsZWN0aW9uIGVsZW1lbnRzIHdpbGwgYmUgcmVkdWNlZC4gVGhpcyBjb2xsZWN0aW9uXG4gKiAgICAgbXVzdCBpbXBsZW1lbnQgdGhlIGBpbml0YCwgYHJlc3VsdGAsIGFuZCBgc3RlcGAgcHJvdG9jb2wgZnVuY3Rpb25zIGZyb21cbiAqICAgICB0aGUgdHJhbnNkdWNlciBwcm90b2NvbC4gU3BlY2lhbCBzdXBwb3J0IGlzIHByb3ZpZGVkIGZvciBhcnJheXMsIHN0cmluZ3MsXG4gKiAgICAgYW5kIG9iamVjdHMsIHNvIHRoZXkgbmVlZCBub3QgaW1wbGVtZW50IHRoZSBwcm90b2NvbC5cbiAqIEBwYXJhbSB7bW9kdWxlOnhkdWNlLXRvb2xzLkl0ZXJhYmxlfSBjb2xsZWN0aW9uIFRoZSBpbnB1dCBjb2xsZWN0aW9uLiBUaGUgb25seVxuICogICAgIHJlcXVpcmVtZW50IG9mIHRoaXMgY29sbGVjdGlvbiBpcyB0aGF0IGl0IGltcGxlbWVudCB0aGUgYGl0ZXJhdG9yYFxuICogICAgIHByb3RvY29sLiBTcGVjaWFsIHN1cHBvcnQgaXMgcHJvdmlkZWQgYnkgdGhlIGxpYnJhcnkgZm9yIG9iamVjdHMsIHRvIHRoZXlcbiAqICAgICBjYW4gYWxzbyBiZSB1c2VkLlxuICogQHBhcmFtIHttb2R1bGU6eGR1Y2UtdG9vbHMuVHJhbnNkdWNlckZ1bmN0aW9ufSBbeGZvcm1dIEEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIGFcbiAqICAgICB0cmFuc2R1Y2VyIG9iamVjdCB0aGF0IGRlZmluZXMgdGhlIHRyYW5zZm9ybWF0aW9uIGJlaW5nIGRvbmUgdG8gdGhlIGlucHV0XG4gKiAgICAgY29sbGVjdGlvbidzIGVsZW1lbnRzLiBBbnkgb2YgdGhlIHRyYW5zZHVjZXJzIGluIHRoZVxuICogICAgIHtAbGluayBtb2R1bGU6eGR1Y2V8eGR1Y2V9IG1ub2R1bGUgY2FuIHByb2R1Y2UgYSBzdWl0YWJsZSB0cmFuc2R1Y2VyXG4gKiAgICAgZnVuY3Rpb24uIElmIHRoaXMgaXNuJ3QgcHJlc2VudCwgdGhlIGlucHV0IGNvbGxlY3Rpb24gd2lsbCBzaW1wbHkgYmVcbiAqICAgICByZWR1Y2VkIGludG8gdGhlIHRhcmdldCBjb2xsZWN0aW9uIHdpdGhvdXQgdHJhbnNmb3JtYXRpb24uXG4gKiBAcmV0dXJuIHttb2R1bGU6eGR1Y2UtdG9vbHMuUmVkdWNpYmxlfSBUaGUgYHRhcmdldGAgY29sbGVjdGlvbiwgd2l0aCBhbGwgb2YgdGhlXG4gKiAgICAgdHJhbmZvcm1lZCBpbnB1dCBjb2xsZWN0aW9uIGVsZW1lbnRzIHJlZHVjZWQgb250byBpdC5cbiAqL1xuZnVuY3Rpb24gaW50byh0YXJnZXQsIGNvbGxlY3Rpb24sIHhmb3JtKSB7XG4gIHN3aXRjaCAodHJ1ZSkge1xuICAgIGNhc2UgaXNBcnJheSh0YXJnZXQpOlxuICAgICAgcmV0dXJuIHRyYW5zZHVjZShjb2xsZWN0aW9uLCB4Zm9ybSwgdG9SZWR1Y2VyKFtdKSwgdGFyZ2V0KTtcbiAgICBjYXNlIGlzT2JqZWN0KHRhcmdldCk6XG4gICAgICByZXR1cm4gdHJhbnNkdWNlKGNvbGxlY3Rpb24sIHhmb3JtLCB0b1JlZHVjZXIoe30pLCB0YXJnZXQpO1xuICAgIGNhc2UgaXNTdHJpbmcodGFyZ2V0KTpcbiAgICAgIHJldHVybiB0cmFuc2R1Y2UoY29sbGVjdGlvbiwgeGZvcm0sIHRvUmVkdWNlcihcIlwiKSwgdGFyZ2V0KTtcbiAgICBjYXNlIGlzSW1wbGVtZW50ZWQodGFyZ2V0LCBcInN0ZXBcIik6XG4gICAgICByZXR1cm4gdHJhbnNkdWNlKGNvbGxlY3Rpb24sIHhmb3JtLCB0YXJnZXQsIHRhcmdldCk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IEVycm9yKGBDYW5ub3QgcmVkdWNlIGNvbGxlY3Rpb24gaW50byAke3RhcmdldH06ICR7Y29sbGVjdGlvbn1gKTtcbiAgfVxufVxuXG4vKipcbiAqIENvbXBvc2VzIHR3byBvciBtb3JlIHRyYW5zZHVjZXIgZnVuY3Rpb25zIGludG8gYSBzaW5nbGUgdHJhbnNkdWNlciBmdW5jdGlvbi5cbiAqXG4gKiBFYWNoIGZ1bmN0aW9uIHRoYXQgdGFrZXMgYSB0cmFuc2R1Y2VyIGZ1bmN0aW9uXG4gKiAoYHtAbGluayBtb2R1bGU6eGR1Y2Uuc2VxdWVuY2V8c2VxdWVuY2V9YCwgYHtAbGluayBtb2R1bGU6eGR1Y2UuaW50b3xpbnRvfWAsXG4gKiBldGMuKSBpcyBvbmx5IGNhcGFibGUgb2YgYWNjZXB0aW5nIG9uZSBvZiB0aGVtLiBJZiB0aGVyZSBpcyBhIG5lZWQgdG8gaGF2ZVxuICogc2V2ZXJhbCB0cmFuc2R1Y2VycyBjaGFpbmVkIHRvZ2V0aGVyLCB0aGVuIHVzZSBgY29tcG9zZWAgdG8gY3JlYXRlIGFcbiAqIHRyYW5zZHVjZXIgZnVuY3Rpb24gdGhhdCBkb2VzIHdoYXQgYWxsIG9mIHRoZW0gZG8uXG4gKlxuICogTk9URTogSW4gZnVuY3Rpb25hbCBwcm9ncmFtbWluZywgYSBjb21wb3NlIGZ1bmN0aW9uIGlzIGdlbmVyYWxseSBvcmRlcmVkIHNvXG4gKiB0aGF0IHRoZSBmaXJzdC1leGVjdXRlZCBmdW5jdGlvbiBpcyBsaXN0ZWQgbGFzdC4gVGhpcyBpcyBkb25lIGluIHRoZSBvcHBvc2l0ZVxuICogd2F5LCB3aXRoIHRoZSBmaXJzdCB0cmFuc2R1Y2VyIGV4ZWN1dGluZyBmaXJzdCwgZXRjLiBUaGlzIGlzIGEgbW9yZSBuYXR1cmFsXG4gKiBvcmRlcmluZyBmb3IgdHJhbnNkdWNlciBmdW5jdGlvbnMgYmVjYXVzZSB0aGVyZSBpcyBhIHZlcnkgcmVhbCBkaXJlY3Rpb25hbFxuICogcHVsbCBvZiBlbGVtZW50cyB0aHJvdWdoIGEgY2hhaW4gb2YgY29tcG9zZWQgdHJhbnNkdWNlciBmdW5jdGlvbnMuXG4gKlxuICogYGBgXG4gKiBpbXBvcnQgeyBjb21wb3NlLCBzZXF1ZW5jZSB9IGZyb20gXCJAY2hhbmtvL3hkdWNlXCI7XG4gKiBpbXBvcnQgeyBtYXAsIGZpbHRlciwgdGFrZSB9IGZyb20gXCJAY2hhbmtvL3RyYW5zZHVjZXJzXCI7XG4gKlxuICogY29uc3QgYWRkMSA9IHggPT4geCArIDE7XG4gKiBjb25zdCBvZGQgPSB4ID0+IHggJSAyICE9PSAwO1xuICpcbiAqIGNvbnN0IHhmb3JtID0gY29tcG9zZShtYXAoYWRkMSksIGZpbHRlcihvZGQpLCB0YWtlKDMpKTtcbiAqXG4gKiBjb25zdCByZXN1bHQgPSBzZXF1ZW5jZShbMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTBdLCB4Zm9ybSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQpOyAgIC8vIC0+IFszLCA1LCA3XTtcbiAqIGBgYFxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwYXJhbSB7Li4ubW9kdWxlOnhkdWNlLXRvb2xzLlRyYW5zZHVjZXJGdW5jdGlvbn0gZm5zIE9uZSBvciBtb3JlIGZ1bmN0aW9uIHRoYXQgZWFjaFxuICogICAgIGNyZWF0ZSBhIHRyYW5zZHVjZXIgb2JqZWN0IHRoYXQgZGVmaW5lcyB0aGUgdHJhbnNmb3JtYXRpb24gYmVpbmcgZG9uZSB0b1xuICogICAgIGEgY29sbGVjdGlvbidzIGVsZW1lbnRzLiBBbnkgb2YgdGhlIHRyYW5zZHVjZXJzIGluIHRoZVxuICogICAgIHtAbGluayBtb2R1bGU6eGR1Y2V8eGR1Y2V9IG1vZHVsZSBjYW4gcHJvZHVjZSBhIHN1aXRhYmxlIHRyYW5zZHVjZXJcbiAqICAgICBmdW5jdGlvbi5cbiAqIEByZXR1cm4ge21vZHVsZTp4ZHVjZS10b29scy5UcmFuc2R1Y2VyRnVuY3Rpb259IEEgdHJhbnNkdWNlciBmdW5jdGlvbiB0aGF0IHByb2R1Y2VzXG4gKiAgICAgYSB0cmFuc2R1Y2VyIG9iamVjdCB0aGF0IHBlcmZvcm1zICphbGwqIG9mIHRoZSB0cmFuc2Zvcm1hdGlvbnMgb2YgdGhlXG4gKiAgICAgb2JqZWN0cyBwcm9kdWNlZCBieSB0aGUgaW5wdXQgdHJhbnNkdWNlciBmdW5jdGlvbnMuXG4gKi9cbmZ1bmN0aW9uIGNvbXBvc2UoLi4uZm5zKSB7XG4gIGNvbnN0IHJldmVyc2VkID0gZm5zLnJldmVyc2UoKTtcbiAgcmV0dXJuIHZhbHVlID0+IHJldmVyc2VkLnJlZHVjZSgoYWNjLCBmbikgPT4gZm4oYWNjKSwgdmFsdWUpO1xufVxuXG5leHBvcnQge1xuICB0cmFuc2R1Y2UsXG4gIHNlcXVlbmNlLFxuICBpbnRvLFxuICBhc0FycmF5LFxuICBhc09iamVjdCxcbiAgYXNTdHJpbmcsXG4gIGFzSXRlcmF0b3IsXG4gIGNvbXBvc2UsXG4gIHRvUmVkdWNlcixcbiAgdG9GdW5jdGlvblxufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG5pbXBvcnQgeyBwcm90b2NvbHMgYXMgcCwgdG9UcmFuc2R1Y2VyIH0gZnJvbSBcIkBjaGFua28veGR1Y2UtdG9vbHNcIjtcbmltcG9ydCB7IHBhcnNlRnVuY3Rpb25BcmdzLCBzYW1lVmFsdWVaZXJvIH0gZnJvbSBcIm1vZHVsZXMvdXRpbHNcIjtcbmltcG9ydCB7IHNlcXVlbmNlIH0gZnJvbSBcIm1vZHVsZXMvdHJhbnNkdWN0aW9uXCI7XG5cbmZ1bmN0aW9uIHVuaXF1ZVdpdGgoY29sbGVjdGlvbiwgZm4pIHtcbiAgY29uc3QgW2NvbCwgZnVuY10gPSBwYXJzZUZ1bmN0aW9uQXJncyhjb2xsZWN0aW9uLCBmbik7XG4gIHJldHVybiBjb2xcbiAgICA/IHNlcXVlbmNlKGNvbCwgdW5pcXVlV2l0aChmdW5jKSlcbiAgICA6IHhmb3JtID0+IHtcbiAgICAgICAgY29uc3QgdW5pcXVlcyA9IFtdO1xuICAgICAgICByZXR1cm4gdG9UcmFuc2R1Y2VyKChhY2MsIHZhbHVlKSA9PiB7XG4gICAgICAgICAgaWYgKHVuaXF1ZXMuc29tZSh1ID0+IGZ1bmModmFsdWUsIHUpKSkge1xuICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICB9XG4gICAgICAgICAgdW5pcXVlcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgICByZXR1cm4geGZvcm1bcC5zdGVwXShhY2MsIHZhbHVlKTtcbiAgICAgICAgfSwgeGZvcm0pO1xuICAgICAgfTtcbn1cblxuZnVuY3Rpb24gdW5pcXVlQnkoY29sbGVjdGlvbiwgZm4pIHtcbiAgY29uc3QgW2NvbCwgZnVuY10gPSBwYXJzZUZ1bmN0aW9uQXJncyhjb2xsZWN0aW9uLCBmbik7XG4gIHJldHVybiB1bmlxdWVXaXRoKGNvbCwgKGEsIGIpID0+IHNhbWVWYWx1ZVplcm8oZnVuYyhhKSwgZnVuYyhiKSkpO1xufVxuXG5mdW5jdGlvbiB1bmlxdWUoY29sbGVjdGlvbikge1xuICByZXR1cm4gdW5pcXVlV2l0aChjb2xsZWN0aW9uLCBzYW1lVmFsdWVaZXJvKTtcbn1cblxuZXhwb3J0IHsgdW5pcXVlLCB1bmlxdWVCeSwgdW5pcXVlV2l0aCB9O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG5cbi8qKlxuICogQSBjb2xsZWN0aW9uIG9mIG1pc2NlbGxhbmVvdXMgZnVuY3Rpb25zIHRoYXQgZG9uJ3QgcGFydGljdWxhcmx5IGZpdCBhbnl3aGVyZVxuICogZWxzZS5cbiAqXG4gKiBAbW9kdWxlIHhkdWNlL3V0aWxzXG4gKiBAcHJpdmF0ZVxuICovXG5cbmltcG9ydCB7IGlzTnVtYmVyLCBpc0Z1bmN0aW9uIH0gZnJvbSBcIkBjaGFua28veGR1Y2UtdG9vbHNcIjtcblxuLyoqXG4gKiBEZXRlcm1pbmVzIGVxdWFsaXR5IGJ5IHRoZSBTYW1lVmFsdWVaZXJvIG1ldGhvZCwgd2hpY2ggZGVmaW5lcyB0aGF0IGBOYU5gXG4gKiBlcXVhbHMgaXRzZWxmIGFuZCBgKzBgIGVxdWFscyBgLTBgLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBhIFRoZSBmaXJzdCBudW1iZXIgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBiIFRoZSBzZWNvbmQgbnVtYmVyIHRvIGNvbXBhcmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gRWl0aGVyIGB0cnVlYCBpZiB0aGUgdHdvIG51bWJlcnMgYXJlIGVxdWFsLCBvciBgZmFsc2VgIGlmXG4gKiAgICAgdGhleSBhcmUgbm90LlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gc2FtZVZhbHVlWmVybyhhLCBiKSB7XG4gIHJldHVybiBhID09PSBiIHx8IChpc05hTihhKSAmJiBpc05hTihiKSk7XG59XG5cbi8qKlxuICogUGFyc2VzIGFyZ3VtZW50cyBmb3IgdHJhbnNkdWNlcnMgdGhhdCB0YWtlIG51bWJlcnMuIFRoZSB0d28gYXJndW1lbnRzIGFyZVxuICogYSBjb2xsZWN0aW9uIGFuZCBhIG51bWJlciwgYnV0IHRoZSBjb2xsZWN0aW9uIGlzIG9wdGlvbmFsLiBUaGlzIGZ1bmN0aW9uXG4gKiB3b3JrcyBvdXQgd2hldGhlciBhIGNvbGxlY3Rpb24gZXhpc3RzIGFuZCByZXR1cm5zIGEgY29sbGVjdGlvbiAod2hpY2ggbWF5IGJlXG4gKiBgbnVsbGApIGFuZCBhIG51bWJlci5cbiAqXG4gKiBAcGFyYW0geyp9IFtjb2xsZWN0aW9uXSBBbiBvcHRpb25hbCBjb2xsZWN0aW9uIHRoYXQgdGhlIHRyYW5zZHVjZXIgd2lsbCBhY3RcbiAqICAgICB1cG9uLlxuICogQHBhcmFtIHtudW1iZXJ9IG4gQSBudW1iZXIgd2hvc2UgcHVycG9zZSBkZXBlbmRzIG9uIHRoZSB0cmFuc2R1Y2VyLlxuICogQHJldHVybnMge0FycmF5PCosIG51bWJlcj59IEFuIGFycmF5IGNvbnRhaW5pbmcgdGhlIGNvbGxlY3Rpb24gKHdoaWNoIG1heSBiZVxuICogICAgIGBudWxsYCkgYXMgdGhlIGZpcnN0IGVsZW1lbnQgYW5kIHRoZSBudW1iZXIgYXMgdGhlIHNlY29uZC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHBhcnNlTnVtYmVyQXJncyhjb2xsZWN0aW9uLCBuKSB7XG4gIHJldHVybiBpc051bWJlcihjb2xsZWN0aW9uKSA/IFtudWxsLCBjb2xsZWN0aW9uXSA6IFtjb2xsZWN0aW9uLCBuXTtcbn1cblxuLyoqXG4gKiBQYXJzZXMgYXJndW1lbnRzIGZvciB0cmFuc2R1Y2VycyB0aGF0IHRha2UgZnVuY3Rpb25zLiBUaGUgdHdvIGFyZ3VtZW50cyBhcmUgYVxuICogY29sbGVjdGlvbiBhbmQgYSBmdW5jdGlvbiwgYnV0IHRoZSBjb2xsZWN0aW9uIGlzIG9wdGlvbmFsLiBUaGlzIGZ1bmN0aW9uXG4gKiB3b3JrcyBvdXQgd2hpY2ggZXhpc3QgYW5kIHJldHVybnMgYSBjb2xsZWN0aW9uICh3aGljaCBtYXkgYmUgYG51bGxgKSBhbmQgYVxuICogZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHsqfSBbY29sbGVjdGlvbl0gQW4gb3B0aW9uYWwgY29sbGVjdGlvbiB0aGF0IHRoZSB0cmFuc2R1Y2VyIHdpbGwgYWN0XG4gKiAgICAgdXBvbi5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIEEgZnVuY3Rpb24gbWVhbnQgdG8gYWN0IHZpYSB0aGUgdHJhbnNkdWNlci5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHBhcnNlRnVuY3Rpb25BcmdzKGNvbGxlY3Rpb24sIGZuKSB7XG4gIHJldHVybiBpc0Z1bmN0aW9uKGNvbGxlY3Rpb24pID8gW251bGwsIGNvbGxlY3Rpb25dIDogW2NvbGxlY3Rpb24sIGZuXTtcbn1cblxuLyoqXG4gKiBBIGNvbnZlbmllbmNlIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgZmlyc3Qga2V5IGFuZCB2YWx1ZSBpbiBhbiBvYmplY3QgYXMgYVxuICogdHdvLXByb3BlcnR5IG9iamVjdCwgb25lIHByb3BlcnR5IGZvciB0aGUga2V5IGFuZCBvbmUgZm9yIHRoZSB2YWx1ZS4gVGhpcyBpc1xuICogaW50ZW5kZWQgdG8gd29yayB3aXRoIHRoZSB2YWx1ZXMgcHJvdmlkZWQgYnkgYW4gb2JqZWN0IGl0ZXJhdG9yLCBhcyB0aGVcbiAqIHN5bnRheCBvZiBvYmplY3RzIGRvZXNuJ3Qgd29yayB2ZXJ5IG5pY2VseSB3aXRoIHNpbmdsZS1wcm9wZXJ0eSBvYmplY3RzLlxuICpcbiAqIGBgYFxuICogY29uc3Qgb2JqID0geyBjOiAxLCBhOiAyLCBiOiAzIH07XG4gKiBjb25zdCBpdGVyID0gYXNJdGVyYXRvcihvYmopO1xuICpcbiAqIGxldCB2YWx1ZSA9IGl0ZXIubmV4dCgpLnZhbHVlO1xuICogY29uc29sZS5sb2codmFsdWUpOyAgICAgICAgICAgICAvLyAtPiB7IGM6IDEgfVxuICogY29uc29sZS5sb2cocHJvcGVydHkodmFsdWUpKTsgICAvLyAtPiB7IGs6IFwiY1wiLCB2OiAxIH1cbiAqXG4gKiB2YWx1ZSA9IGl0ZXIubmV4dCgpLnZhbHVlO1xuICogY29uc29sZS5sb2codmFsdWUpOyAgICAgICAgICAgICAvLyAtPiB7IGE6IDIgfVxuICogY29uc29sZS5sb2cocHJvcGVydHkodmFsdWUpKTsgICAvLyAtPiB7IGs6IFwiYVwiLCB2OiAyIH1cbiAqXG4gKiB2YWx1ZSA9IGl0ZXIubmV4dCgpLnZhbHVlO1xuICogY29uc29sZS5sb2codmFsdWUpOyAgICAgICAgICAgICAvLyAtPiB7IGI6IDMgfVxuICogY29uc29sZS5sb2cocHJvcGVydHkodmFsdWUpKTsgICAvLyAtPiB7IGs6IFwiYlwiLCB2OiAzIH1cbiAqIGBgYFxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmogVGhlIG9iamVjdCB3aG9zZSBmaXJzdCBwcm9wZXJ0eSBpcyByZXR1cm5lZC5cbiAqIEByZXR1cm4ge21vZHVsZTp4ZHVjZS10b29scy5Qcm9wZXJ0eU9iamVjdH0gVGhlIHByb3BlcnR5IGFzIGEgdHdvLXByb3BlcnR5IG9iamVjdC5cbiAqL1xuZnVuY3Rpb24ga3Yob2JqKSB7XG4gIGNvbnN0IGtleSA9IE9iamVjdC5rZXlzKG9iailbMF07XG4gIHJldHVybiB7IGs6IGtleSwgdjogb2JqW2tleV0gfTtcbn1cblxuLyoqXG4gKiBBIGNvbnZlbmllbmNlIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUga2V5IG9mIHRoZSBmaXJzdCBwcm9wZXJ0eSBvZiBhblxuICogb2JqZWN0LiBUaGlzIGlzIG1lYW50IGZvciB1c2Ugd2l0aCBvYmplY3QgaXRlcmF0b3JzIHRvIG1vcmUgY29udmVuaWVudGx5XG4gKiBhY2Nlc3MgcGFydHMgb2YgdGhlIHNpbmdsZS1wcm9wZXJ0eSBvYmplY3RzIHRoYXQgdGhleSBlbWl0LlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmogVGhlIG9iamVjdCB3aG9zZSBmaXJzdCBrZXkgaXMgcmV0dXJuZWQuXG4gKiBAcmV0dXJuIHsoU3RyaW5nfFN5bWJvbCl9IFRoZSBrZXkgb2YgdGhlIG9iamVjdCdzIGZpcnN0IHByb3BlcnR5LlxuICovXG5mdW5jdGlvbiBrZXkob2JqKSB7XG4gIHJldHVybiBrdihvYmopLms7XG59XG5cbi8qKlxuICogQSBjb252ZW5pZW5jZSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSBmaXJzdCBwcm9wZXJ0eSBvZiBhblxuICogb2JqZWN0LiBUaGlzIGlzIG1lYW50IGZvciB1c2Ugd2l0aCBvYmplY3QgaXRlcmF0b3JzIHRvIG1vcmUgY29udmVuaWVudGx5XG4gKiBhY2Nlc3MgcGFydHMgb2YgdGhlIHNpbmdsZS1wcm9wZXJ0eSBvYmplY3RzIHRoYXQgdGhleSBlbWl0LlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmogVGhlIG9iamVjdCB3aG9zZSBmaXJzdCB2YWx1ZSBpcyByZXR1cm5lZC5cbiAqIEByZXR1cm4geyp9IFRoZSB2YWx1ZSBvZiB0aGUgb2JqZWN0J3MgZmlyc3QgcHJvcGVydHkuXG4gKi9cbmZ1bmN0aW9uIHZhbHVlKG9iaikge1xuICByZXR1cm4ga3Yob2JqKS52O1xufVxuXG4vKipcbiAqIEFjY2VwdHMgYSBwcmVkaWNhdGUgZnVuY3Rpb24gYW5kIHJldHVybnMgYSBuZXcgcHJlZGljYXRlIGZ1bmN0aW9uIHdoaWNoXG4gKiByZXR1cm5zIHRoZSBvcHBvc2l0ZSBvZiB0aGUgb3JpZ2luYWwgZnVuY3Rpb24uXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHBhcmFtIHttb2R1bGU6eGR1Y2UuUHJlZGljYXRlRnVuY3Rpb259IGZuIEEgcHJlZGljYXRlIGZ1bmN0aW9uLlxuICogQHJldHVybnMge21vZHVsZTp4ZHVjZS5QcmVkaWNhdGVGdW5jdGlvbn0gQSBwcmVkaWNhdGUgZnVuY3Rpb24gdGhhdCByZXR1cm5zXG4gKiAgICAgdGhlIG9wcG9zaXRlIHZhbHVlIGFzIHRoZSBzdXBwbGllZCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gY29tcGxlbWVudChmbikge1xuICByZXR1cm4gKC4uLmFyZ3MpID0+ICFmbiguLi5hcmdzKTtcbn1cblxuZXhwb3J0IHtcbiAgc2FtZVZhbHVlWmVybyxcbiAgcGFyc2VOdW1iZXJBcmdzLFxuICBwYXJzZUZ1bmN0aW9uQXJncyxcbiAga3YsXG4gIGtleSxcbiAgdmFsdWUsXG4gIGNvbXBsZW1lbnRcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9