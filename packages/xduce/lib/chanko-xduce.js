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

/***/ "../core/lib/chanko-core.js":
/*!**********************************!*\
  !*** ../core/lib/chanko-core.js ***!
  \**********************************/
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
         * @module core
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
         * {@link module:core.iterator|iterator}.
         *
         * @param {object} obj The object being iterated over.
         * @param {module:core.SortFunction} [sortFn] An optional function used to sort
         *     the object keys before iteration. If it isn't provided, the keys will be
         *     sorted in the same order as `Object.keys(obj)` would sort them.
         * @returns {module:core.Iterator} An iterator over the properties of `obj`.
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
         * {@link module:core.iterator|iterator}.
         *
         * @param {module:core.IterableFunction} fn The function to iterate over.
         * @returns {module:core.Iterator} An iterator over the return values of `fn`.
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
         * @memberof module:core
         * @param {*} value The value to create an iterator over.
         * @param {module:core.SortFunction} [sortFn] An optional sort function for
         *     sorting the keys of an object before iteration. It is ignored if `value`
         *     isn't a plain object.
         * @returns {module:core.Iterator} An iterator over `value`.
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
         * {@link module:core.iterator|iterator} can produce an iterator for them,
         * because not all functions work well with
         * {@link module:core.iterator|iterator}.
         *
         * @memberof module:core
         * @param {*} value The value to test for iterability.
         * @return {boolean} Either `true` if the value is iterable
         *     (`{@link module:core.iterator}` will return an iterator for it) or
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
         * @type {module:core.ProtocolMap}
         * @memberof module:core
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
         * @return {module:core.InitFunction} A function that, when called, returns an
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
         * @return {module:core.StepFunction} A reduction function for the provided
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
         * @return {module:core.ResultFunction} A function that, when given a reduced
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
         * @memberof module:core
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
         * @type {module:core.Reducer}
         * @private
         */


        const ARRAY_REDUCER = toReducer([]);
        /**
         * A reducer object for objects.
         *
         * @type {module:core.Reducer}
         * @private
         */

        const OBJECT_REDUCER = toReducer({});
        /**
         * A reducer object for strings.
         *
         * @type {module:core.Reducer}
         * @private
         */

        const STRING_REDUCER = toReducer("");
        /**
         * Creates a transducer from a function and a transducer to chain it to.
         *
         * This is in most respects just like {@link module:core.toReducer|toReducer},
         * with two notable differences. One is that it requires a transducer to chain
         * to, and it does the chaining as a part of creating the new transducer. The
         * other is that it includes a usable `init` function, where passing a function
         * to {@link module:core.toReducer|toReducer} would create an init function that
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
         * @memberof module:core
         * @param {module:core.StepFunction} fn The step function for the transducer.
         * @param {module:core.Transducer} xform The next transducer object in the
         *     chain.
         * @returns {module:core.Transducer} A new transducer, chaining the supplied
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
         * to`{@link module:core.transduce|transduce}` or
         * `{@link module:core.reduce|reduce}`, or it can be a plain function that takes
         * two parameters and returns the result of reducing the second parameter into
         * the first.
         *
         * If there is no need for a transformation, then pass in the
         * `{@link module:transducers.identity|identity}` transducer.
         *
         * @memberof module:core
         * @param {module:core.Reducer} xform A transducer object whose step function
         *     will become the returned reduction function.
         * @param {(module:core.StepFunction|module:core.Reducer)} reducer A reducer
         *     that knows how to reduce values into an output collection. This can
         *     either be a reducing function or a transducer object whose `step`
         *     function knows how to perform this reduction.
         * @returns {module:core.StepFunction} A function that handles both the
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
         * @memberof module:core
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
         * @memberof module:core
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
         * @memberof module:core
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
         * This differs from {@link module:core.complete|complete} in that if the value
         * is already complete, this function won't complete it again. Therefore thus
         * function can't be used to make a value complete multiple times.
         *
         * @memberof module:core
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
         * @memberof module:core
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
         * {@link module:core.transduce|transduce} instead, as that function makes it
         * easy to combine transformations with reductions and can optionally figure out
         * the initial collection itself.
         *
         * @memberof module:core
         * @param {*} collection The input collection. The only requirement of this
         *     collection is that it implement the `iterable` protocol. Special support
         *     is provided by the library for objects, so they can be used as well.
         * @param {module:core.Reducer} reducer An object that implements the `step` and
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
         * @memberof module:core
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
         * @memberof module:core
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
         * @memberof module:core
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
         * @memberof module:core
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
         * @memberof module:core
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
         * @memberof module:core
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
/*! exports provided: kv, key, value, complement, transduce, sequence, into, asArray, asObject, asString, asIterator, compose, toReducer, toFunction, identity, flatten, repeat, chunk, chunkBy, drop, dropWhile, filter, reject, map, flatMap, take, takeWhile, takeNth */
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

/* harmony import */ var modules_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! modules/drop */ "./src/modules/drop.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "drop", function() { return modules_drop__WEBPACK_IMPORTED_MODULE_4__["drop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dropWhile", function() { return modules_drop__WEBPACK_IMPORTED_MODULE_4__["dropWhile"]; });

/* harmony import */ var modules_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! modules/filter */ "./src/modules/filter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return modules_filter__WEBPACK_IMPORTED_MODULE_5__["filter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reject", function() { return modules_filter__WEBPACK_IMPORTED_MODULE_5__["reject"]; });

/* harmony import */ var modules_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! modules/map */ "./src/modules/map.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "map", function() { return modules_map__WEBPACK_IMPORTED_MODULE_6__["map"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flatMap", function() { return modules_map__WEBPACK_IMPORTED_MODULE_6__["flatMap"]; });

/* harmony import */ var modules_take__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! modules/take */ "./src/modules/take.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "take", function() { return modules_take__WEBPACK_IMPORTED_MODULE_7__["take"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "takeWhile", function() { return modules_take__WEBPACK_IMPORTED_MODULE_7__["takeWhile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "takeNth", function() { return modules_take__WEBPACK_IMPORTED_MODULE_7__["takeNth"]; });

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
/* harmony import */ var _chanko_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chanko/core */ "../core/lib/chanko-core.js");
/* harmony import */ var _chanko_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chanko_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var modules_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! modules/utils */ "./src/modules/utils.js");
/* harmony import */ var modules_transduction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! modules/transduction */ "./src/modules/transduction.js");
/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */




function identity(collection) {
  return collection ? Object(modules_transduction__WEBPACK_IMPORTED_MODULE_2__["sequence"])(collection, identity()) : xform => Object(_chanko_core__WEBPACK_IMPORTED_MODULE_0__["toTransducer"])((acc, value) => xform[_chanko_core__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](acc, value), xform);
}

function flatten(collection) {
  return collection ? Object(modules_transduction__WEBPACK_IMPORTED_MODULE_2__["sequence"])(collection, flatten()) : xform => Object(_chanko_core__WEBPACK_IMPORTED_MODULE_0__["toTransducer"])((acc, value) => {
    const subXform = Object(_chanko_core__WEBPACK_IMPORTED_MODULE_0__["toTransducer"])((acc, value) => {
      const v = xform[_chanko_core__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](acc, value);
      return Object(_chanko_core__WEBPACK_IMPORTED_MODULE_0__["isCompleted"])(v) ? Object(_chanko_core__WEBPACK_IMPORTED_MODULE_0__["complete"])(v) : v;
    }, xform);
    return Object(_chanko_core__WEBPACK_IMPORTED_MODULE_0__["isIterable"])(value) ? Object(_chanko_core__WEBPACK_IMPORTED_MODULE_0__["reduce"])(value, subXform, acc) : subXform[_chanko_core__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](acc, value);
  }, xform);
}

function repeat(collection, n) {
  const [col, num] = Object(modules_utils__WEBPACK_IMPORTED_MODULE_1__["parseNumberArgs"])(collection, n);
  return col ? Object(modules_transduction__WEBPACK_IMPORTED_MODULE_2__["sequence"])(col, repeat(num)) : xform => Object(_chanko_core__WEBPACK_IMPORTED_MODULE_0__["toTransducer"])((acc, value) => {
    let result = acc;

    for (let i = 0; i < num; i++) {
      result = xform[_chanko_core__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](result, value);

      if (Object(_chanko_core__WEBPACK_IMPORTED_MODULE_0__["isCompleted"])(result)) {
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
/* harmony import */ var _chanko_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chanko/core */ "../core/lib/chanko-core.js");
/* harmony import */ var _chanko_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chanko_core__WEBPACK_IMPORTED_MODULE_0__);
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
      [_chanko_core__WEBPACK_IMPORTED_MODULE_0__["protocols"].init]() {
        return xform[_chanko_core__WEBPACK_IMPORTED_MODULE_0__["protocols"].init]();
      },

      [_chanko_core__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](acc, value) {
        part[count++] = value;

        if (count === num) {
          const out = part.slice(0, num);
          part = [];
          count = 0;
          return xform[_chanko_core__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](acc, out);
        }

        return acc;
      },

      [_chanko_core__WEBPACK_IMPORTED_MODULE_0__["protocols"].result](value) {
        if (count > 0) {
          return Object(_chanko_core__WEBPACK_IMPORTED_MODULE_0__["ensureUncompleted"])(xform[_chanko_core__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](value, part.slice(0, count)));
        }

        return xform[_chanko_core__WEBPACK_IMPORTED_MODULE_0__["protocols"].result](value);
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
      [_chanko_core__WEBPACK_IMPORTED_MODULE_0__["protocols"].init]() {
        return xform[_chanko_core__WEBPACK_IMPORTED_MODULE_0__["protocols"].init]();
      },

      [_chanko_core__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](acc, value) {
        const current = func(value);
        let result = acc;

        if (last === NO_VALUE || Object(modules_utils__WEBPACK_IMPORTED_MODULE_1__["sameValueZero"])(current, last)) {
          part.push(value);
        } else {
          result = xform[_chanko_core__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](result, part);
          part = [value];
        }

        last = current;
        return result;
      },

      [_chanko_core__WEBPACK_IMPORTED_MODULE_0__["protocols"].result](value) {
        const count = part.length;

        if (count > 0) {
          return Object(_chanko_core__WEBPACK_IMPORTED_MODULE_0__["ensureUncompleted"])(xform[_chanko_core__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](value, part.slice(0, count)));
        }

        return xform[_chanko_core__WEBPACK_IMPORTED_MODULE_0__["protocols"].result](value);
      }

    };
  };
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
/* harmony import */ var _chanko_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chanko/core */ "../core/lib/chanko-core.js");
/* harmony import */ var _chanko_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chanko_core__WEBPACK_IMPORTED_MODULE_0__);
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
    return Object(_chanko_core__WEBPACK_IMPORTED_MODULE_0__["toTransducer"])((acc, value) => i++ < num ? acc : xform[_chanko_core__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](acc, value), xform);
  };
}

function dropWhile(collection, fn) {
  const [col, func] = Object(modules_utils__WEBPACK_IMPORTED_MODULE_1__["parseFunctionArgs"])(collection, fn);
  return col ? Object(modules_transduction__WEBPACK_IMPORTED_MODULE_2__["sequence"])(col, dropWhile(func)) : xform => {
    let dropping = true;
    return Object(_chanko_core__WEBPACK_IMPORTED_MODULE_0__["toTransducer"])((acc, value) => {
      if (dropping) {
        if (func(value)) {
          return acc;
        }

        dropping = false;
      }

      return xform[_chanko_core__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](acc, value);
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
/* harmony import */ var _chanko_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chanko/core */ "../core/lib/chanko-core.js");
/* harmony import */ var _chanko_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chanko_core__WEBPACK_IMPORTED_MODULE_0__);
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
  return col ? Object(modules_transduction__WEBPACK_IMPORTED_MODULE_2__["sequence"])(col, filter(func)) : xform => Object(_chanko_core__WEBPACK_IMPORTED_MODULE_0__["toTransducer"])((acc, value) => func(value) ? xform[_chanko_core__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](acc, value) : acc, xform);
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
/* harmony import */ var _chanko_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chanko/core */ "../core/lib/chanko-core.js");
/* harmony import */ var _chanko_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chanko_core__WEBPACK_IMPORTED_MODULE_0__);
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
  return col ? Object(modules_transduction__WEBPACK_IMPORTED_MODULE_2__["sequence"])(col, map(func)) : xform => Object(_chanko_core__WEBPACK_IMPORTED_MODULE_0__["toTransducer"])((acc, value) => xform[_chanko_core__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](acc, func(value)), xform);
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
/* harmony import */ var _chanko_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chanko/core */ "../core/lib/chanko-core.js");
/* harmony import */ var _chanko_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chanko_core__WEBPACK_IMPORTED_MODULE_0__);
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
    return Object(_chanko_core__WEBPACK_IMPORTED_MODULE_0__["toTransducer"])((acc, value) => {
      let result = acc;

      if (i < num) {
        result = xform[_chanko_core__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](acc, value);

        if (i === num - 1) {
          result = Object(_chanko_core__WEBPACK_IMPORTED_MODULE_0__["ensureCompleted"])(result);
        }
      }

      i++;
      return result;
    }, xform);
  };
}

function takeWhile(collection, fn) {
  const [col, func] = Object(modules_utils__WEBPACK_IMPORTED_MODULE_1__["parseFunctionArgs"])(collection, fn);
  return col ? Object(modules_transduction__WEBPACK_IMPORTED_MODULE_2__["sequence"])(col, takeWhile(func)) : xform => Object(_chanko_core__WEBPACK_IMPORTED_MODULE_0__["toTransducer"])((acc, value) => func(value) ? xform[_chanko_core__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](acc, value) : Object(_chanko_core__WEBPACK_IMPORTED_MODULE_0__["ensureCompleted"])(acc), xform);
}

function takeNth(collection, n) {
  const [col, num] = Object(modules_utils__WEBPACK_IMPORTED_MODULE_1__["parseNumberArgs"])(collection, n);
  return col ? Object(modules_transduction__WEBPACK_IMPORTED_MODULE_2__["sequence"])(col, takeNth(num)) : xform => {
    let i = -1;
    return Object(_chanko_core__WEBPACK_IMPORTED_MODULE_0__["toTransducer"])((acc, value) => ++i % num === 0 ? xform[_chanko_core__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](acc, value) : acc, xform);
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
/* harmony import */ var _chanko_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chanko/core */ "../core/lib/chanko-core.js");
/* harmony import */ var _chanko_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chanko_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toReducer", function() { return _chanko_core__WEBPACK_IMPORTED_MODULE_0__["toReducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toFunction", function() { return _chanko_core__WEBPACK_IMPORTED_MODULE_0__["toFunction"]; });

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
 * @param {module:core.Iterable} collection the input collection that the
 *     produced iterator will be iterating over.
 * @param {module:core.TransducerFunction} xform A function that creates a
 *     transducer object that defines the transformation being done to the
 *     iterator's elements. Any of the transducers in the
 *     {@link module:xduce|xduce} module can produce a suitable transducer
 *     function.
 * @return {module:core.Iterator} An iterator that will transform its input
 *     elements using the transducer function as its
 *     `{@link module:core.NextFunction|next}` function is called.
 * @private
 */

function transducingIterator(collection, xform) {
  const stepReducer = {
    [_chanko_core__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](xiter, input) {
      xiter.items.unshift(input);
      return xiter;
    },

    [_chanko_core__WEBPACK_IMPORTED_MODULE_0__["protocols"].result](value) {
      return value;
    }

  };
  const iter = Object(_chanko_core__WEBPACK_IMPORTED_MODULE_0__["iterator"])(collection);
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
        xf[_chanko_core__WEBPACK_IMPORTED_MODULE_0__["protocols"].result](result);
        break;
      }

      completed = Object(_chanko_core__WEBPACK_IMPORTED_MODULE_0__["isCompleted"])(xf[_chanko_core__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](result, stepValue.value));
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
 * import { protocols as p } from "@chanko/core";
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
 * `{@link module:core.protocols}`) and that know how to produce the output
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
 * @param {module:core.Iterable} collection The input collection. The only
 *     requirement of this collection is that it implement the `iterable`
 *     protocol. Special support is provided by the library for objects, so they
 *     can also be used.
 * @param {module:core.TransducerFunction} [xform] A function that creates a
 *     transducer object that defines the transformation being done to the input
 *     collection's elements. Any of the transducers in the
 *     {@link module:transducers|transducers} module can produce a suitable
 *     transducer function.
 * @param {(module:core.StepFunction|module:core.Reducer)} reducer Either a
 *     function or a reducer object that implements the transducer protocols
 *     (`init` is  only required if the `init` parameter is not present). This
 *     object must know how to produce an output collection through its `step`
 *     and `result` protocol functions. If this parameter is a function, then it
 *     is turned into a valid reducer object.
 * @param {module:core.Reducible} [init] A collection of the same type as the
 *     output collection. If this is not present, then the reducer's `init`
 *     protocol function is called instead to get the initial collection. If it
 *     is present and not empty, then the existing elements remain and the
 *     transformed input collection elements are added to it.
 * @return {*} A collection of a type determined by the passed reducer. The
 *     elements of this collection are the results from the transformer function
 *     being applied to each element of the input collection.
 */


function transduce(collection, xform, reducer, init) {
  const r = Object(_chanko_core__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(reducer) ? Object(_chanko_core__WEBPACK_IMPORTED_MODULE_0__["toReducer"])(reducer) : reducer;
  const i = init !== null && init !== void 0 ? init : r[_chanko_core__WEBPACK_IMPORTED_MODULE_0__["protocols"].init]();
  const xf = xform ? xform(r) : r;
  return Object(_chanko_core__WEBPACK_IMPORTED_MODULE_0__["reduce"])(collection, xf, i);
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
 * @param {module:core.Iterable} collection The input collection. The only
 *     requirement of this collection is that it implement the `iterable`
 *     protocol. Special support is provided by the library for objects, so they
 *     can also be used.
 * @param {module:core.TransducerFunction} [xform] A function that creates a
 *     transducer object that defines the transformation being done to the input
 *     collection's elements. Any of the transducers in the
 *     {@link module:xduce|xduce} module can produce a suitable transducer
 *     function. If this isn't present, the input collection will simply be
 *     reduced into an array without transformation.
 * @return {Array} An array containing all of the transformed values from the
 *     input collection elements.
 */


function asArray(collection, xform) {
  return transduce(collection, xform, Object(_chanko_core__WEBPACK_IMPORTED_MODULE_0__["toReducer"])([]));
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
 * @param {module:core.Iterable} collection The input collection. The only
 *     requirement of this collection is that it implement the `iterable`
 *     protocol. Special support is provided by the library for objects, so they
 *     can also be used.
 * @param {module:core.Tranducer} [xform] A function that creates a transducer
 *     object that defines the transformation being done to the input
 *     collection's elements. Any of the transducers in the
 *     {@link module:xduce|xduce} module can produce a suitable transducer
 *     function. If this isn't present, the input collection will simply be
 *     reduced into an object without transformation.
 * @return {Object} An object containing all of the transformed values from the
 *     input collection elements.
 */


function asObject(collection, xform) {
  return transduce(collection, xform, Object(_chanko_core__WEBPACK_IMPORTED_MODULE_0__["toReducer"])({}));
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
 * @param {module:core.Iterable} collection The input collection. The only
 *     requirement of this collection is that it implement the `iterable`
 *     protocol. Special support is provided by the library for objects, so they
 *     can also be used.
 * @param {module:core.TransducerFunction} [xform] A function that creates a
 *     transducer object that defines the transformation being done to the input
 *     collection's elements. Any of the transducers in the
 *     {@link module:transducers|transducers} module can produce a suitable
 *     transducer function. If this isn't present, the input collection will
 *     simply be reduced into a string without transformation.
 * @return {String} A string containing all of the transformed values from the
 *     input collection elements.
 */


function asString(collection, xform) {
  return transduce(collection, xform, Object(_chanko_core__WEBPACK_IMPORTED_MODULE_0__["toReducer"])(""));
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
 * @param {module:core.Iterable} collection The input collection. The only
 *     requirement of this collection is that it implement the `iterable`
 *     protocol. Special support is provided by the library for objects, so they
 *     can also be used.
 * @param {module:core.TransducerFunction} [xform] A function that creates a
 *     transducer object that defines the transformation being done to the input
 *     collection's elements. Any of the transducers in the
 *     {@link module:transducers|transducers} module can produce a suitable
 *     transducer function. If this isn't present, the input collection will
 *     simply be reduced into an iterator without transformation.
 * @return {module:core.Iterator} An iterator containing all of the transformed
 *     values from the input collection elements.
 */


function asIterator(collection, xform) {
  return xform ? transducingIterator(collection, xform) : Object(_chanko_core__WEBPACK_IMPORTED_MODULE_0__["iterator"])(collection);
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
 * @param {module:core.ReducibleIterable} collection The input collection. This
 *     must implement the `iterator`, `init`, `result`, and `step` protocols.
 *     Special support is provided for arrays, strings, objects, and iterators,
 *     so they do not have to implement any protocols.
 * @param {module:core.TransducerFunction} xform A function that creates a
 *     transducer object that defines the transformation being done to the input
 *     collection's elements. Any of the transducers in the
 *     {@link module:core.transducers|transducers} module can produce a suitable
 *     transducer function.
 * @return {module:core.ReducibleIterable} A collection of the same type as the
 *     input collection, containing all of the transformed values from the input
 *     collection elements.
 */


function sequence(collection, xform) {
  switch (true) {
    case Object(_chanko_core__WEBPACK_IMPORTED_MODULE_0__["isArray"])(collection):
      return asArray(collection, xform);

    case Object(_chanko_core__WEBPACK_IMPORTED_MODULE_0__["isObject"])(collection):
      return asObject(collection, xform);

    case Object(_chanko_core__WEBPACK_IMPORTED_MODULE_0__["isString"])(collection):
      return asString(collection, xform);

    case Object(_chanko_core__WEBPACK_IMPORTED_MODULE_0__["isImplemented"])(collection, "step"):
      return transduce(collection, xform, collection);

    case Object(_chanko_core__WEBPACK_IMPORTED_MODULE_0__["isImplemented"])(collection, "iterator"):
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
 * @param {module:core.Reducible} target The collection into which all of the
 *     transformed input collection elements will be reduced. This collection
 *     must implement the `init`, `result`, and `step` protocol functions from
 *     the transducer protocol. Special support is provided for arrays, strings,
 *     and objects, so they need not implement the protocol.
 * @param {module:core.Iterable} collection The input collection. The only
 *     requirement of this collection is that it implement the `iterator`
 *     protocol. Special support is provided by the library for objects, to they
 *     can also be used.
 * @param {module:core.TransducerFunction} [xform] A function that creates a
 *     transducer object that defines the transformation being done to the input
 *     collection's elements. Any of the transducers in the
 *     {@link module:xduce|xduce} mnodule can produce a suitable transducer
 *     function. If this isn't present, the input collection will simply be
 *     reduced into the target collection without transformation.
 * @return {module:core.Reducible} The `target` collection, with all of the
 *     tranformed input collection elements reduced onto it.
 */


function into(target, collection, xform) {
  switch (true) {
    case Object(_chanko_core__WEBPACK_IMPORTED_MODULE_0__["isArray"])(target):
      return transduce(collection, xform, Object(_chanko_core__WEBPACK_IMPORTED_MODULE_0__["toReducer"])([]), target);

    case Object(_chanko_core__WEBPACK_IMPORTED_MODULE_0__["isObject"])(target):
      return transduce(collection, xform, Object(_chanko_core__WEBPACK_IMPORTED_MODULE_0__["toReducer"])({}), target);

    case Object(_chanko_core__WEBPACK_IMPORTED_MODULE_0__["isString"])(target):
      return transduce(collection, xform, Object(_chanko_core__WEBPACK_IMPORTED_MODULE_0__["toReducer"])(""), target);

    case Object(_chanko_core__WEBPACK_IMPORTED_MODULE_0__["isImplemented"])(target, "step"):
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
 * @param {...module:core.TransducerFunction} fns One or more function that each
 *     create a transducer object that defines the transformation being done to
 *     a collection's elements. Any of the transducers in the
 *     {@link module:xduce|xduce} module can produce a suitable transducer
 *     function.
 * @return {module:core.TransducerFunction} A transducer function that produces
 *     a transducer object that performs *all* of the transformations of the
 *     objects produced by the input transducer functions.
 */


function compose(...fns) {
  const reversed = fns.reverse();
  return value => reversed.reduce((acc, fn) => fn(acc), value);
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
/* harmony import */ var _chanko_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chanko/core */ "../core/lib/chanko-core.js");
/* harmony import */ var _chanko_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chanko_core__WEBPACK_IMPORTED_MODULE_0__);
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
  return Object(_chanko_core__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(collection) ? [null, collection] : [collection, n];
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
  return Object(_chanko_core__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(collection) ? [null, collection] : [collection, fn];
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
 * @return {module:core.PropertyObject} The property as a two-property object.
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly94ZHVjZS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8veGR1Y2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8veGR1Y2UvY29yZS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8veGR1Y2UvY29yZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly94ZHVjZS9jb3JlL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly94ZHVjZS9jb3JlL3NyYy9tb2R1bGVzL2l0ZXJhdGlvbi5qcyIsIndlYnBhY2s6Ly94ZHVjZS9jb3JlL3NyYy9tb2R1bGVzL3Byb3RvY29sLmpzIiwid2VicGFjazovL3hkdWNlL2NvcmUvc3JjL21vZHVsZXMvcmVkdWN0aW9uLmpzIiwid2VicGFjazovL3hkdWNlL2NvcmUvc3JjL21vZHVsZXMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8veGR1Y2UvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8veGR1Y2UvLi9zcmMvbW9kdWxlcy9iYXNpYy5qcyIsIndlYnBhY2s6Ly94ZHVjZS8uL3NyYy9tb2R1bGVzL2NodW5rLmpzIiwid2VicGFjazovL3hkdWNlLy4vc3JjL21vZHVsZXMvZHJvcC5qcyIsIndlYnBhY2s6Ly94ZHVjZS8uL3NyYy9tb2R1bGVzL2ZpbHRlci5qcyIsIndlYnBhY2s6Ly94ZHVjZS8uL3NyYy9tb2R1bGVzL21hcC5qcyIsIndlYnBhY2s6Ly94ZHVjZS8uL3NyYy9tb2R1bGVzL3Rha2UuanMiLCJ3ZWJwYWNrOi8veGR1Y2UvLi9zcmMvbW9kdWxlcy90cmFuc2R1Y3Rpb24uanMiLCJ3ZWJwYWNrOi8veGR1Y2UvLi9zcmMvbW9kdWxlcy91dGlscy5qcyJdLCJuYW1lcyI6WyJrZXlzIiwiT2JqZWN0IiwiaW5kZXgiLCJrIiwib2JqIiwiY3VycmVudCIsImZuIiwic29ydEZuIiwiaXNGdW5jdGlvbiIsInZhbHVlIiwiU3ltYm9sIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImZ1bmN0aW9uSXRlcmF0b3IiLCJpc09iamVjdCIsIm9iamVjdEl0ZXJhdG9yIiwiaXNJbXBsZW1lbnRlZCIsInByb3RvY29scyIsImluaXQiLCJzdGVwIiwicmVzdWx0IiwicmVkdWNlZCIsImNvbGxlY3Rpb24iLCJwIiwiaXNTdHJpbmciLCJpc0FycmF5IiwiRXJyb3IiLCJpbnB1dCIsImFjYyIsIm1heCIsIk1hdGgiLCJBUlJBWV9SRURVQ0VSIiwidG9SZWR1Y2VyIiwiT0JKRUNUX1JFRFVDRVIiLCJTVFJJTkdfUkVEVUNFUiIsInhmb3JtIiwiciIsImlzQ29tcGxldGVkIiwiY29tcGxldGUiLCJ1bmNvbXBsZXRlIiwiaXRlciIsIml0ZXJhdG9yIiwibmFtZSIsInJlZHVjZXIiLCJ0b1N0cmluZyIsInByb3RvIiwiY3RvciIsImlzRmluaXRlIiwiQXJyYXkiLCJpZGVudGl0eSIsInNlcXVlbmNlIiwidG9UcmFuc2R1Y2VyIiwiZmxhdHRlbiIsInN1Ylhmb3JtIiwidiIsImlzSXRlcmFibGUiLCJyZWR1Y2UiLCJyZXBlYXQiLCJuIiwiY29sIiwibnVtIiwicGFyc2VOdW1iZXJBcmdzIiwiaSIsIk5PX1ZBTFVFIiwiY2h1bmsiLCJjb3VudCIsInBhcnQiLCJvdXQiLCJzbGljZSIsImVuc3VyZVVuY29tcGxldGVkIiwiY2h1bmtCeSIsImZ1bmMiLCJwYXJzZUZ1bmN0aW9uQXJncyIsImxhc3QiLCJzYW1lVmFsdWVaZXJvIiwicHVzaCIsImxlbmd0aCIsImRyb3AiLCJkcm9wV2hpbGUiLCJkcm9wcGluZyIsImZpbHRlciIsInJlamVjdCIsImNvbXBsZW1lbnQiLCJtYXAiLCJmbGF0TWFwIiwiY29tcG9zZSIsInRha2UiLCJlbnN1cmVDb21wbGV0ZWQiLCJ0YWtlV2hpbGUiLCJ0YWtlTnRoIiwidHJhbnNkdWNpbmdJdGVyYXRvciIsInN0ZXBSZWR1Y2VyIiwieGl0ZXIiLCJpdGVtcyIsInVuc2hpZnQiLCJ4ZiIsImNvbXBsZXRlZCIsIm5leHQiLCJkb25lIiwicG9wIiwic3RlcFZhbHVlIiwidHJhbnNkdWNlIiwiYXNBcnJheSIsImFzT2JqZWN0IiwiYXNTdHJpbmciLCJhc0l0ZXJhdG9yIiwiaW50byIsInRhcmdldCIsImZucyIsInJldmVyc2VkIiwicmV2ZXJzZSIsImEiLCJiIiwiaXNOYU4iLCJpc051bWJlciIsImt2Iiwia2V5IiwiYXJncyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBLFlBQ0EsMkJBREEsS0FFQSxFQUtBO0FBQ0MsQ0FURCxFQVNDLElBVEQsRUFTQztBQUNEOzs7OztBQ1ZBO0FBQUE7O0FBQ0E7QUFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQTs7O0FBRUE7QUFBQTs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBOztBQUNBOzs7QUFBQTtBQUNBO0FBQUEscUJBREE7O0FBRUE7QUFBQSxrQkFGQTs7QUFHQTtBQUFBO0FBQ0E7O0FBSkE7OztBQU1BO0FBQUE7O0FBQ0E7O0FBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUE7QUFDQTtBQUFBOzs7OztBQUdBO0FBQUE7O0FBQ0E7OztBQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBMEMsNEJBQTFDO0FBQTBDO0FBQTFDO0FBQ0E7QUFBQTtBQUNBOztBQUFBLE9BSkE7OztBQU1BO0FBQUE7O0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBd0Q7QUFBeEQ7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQWlEO0FBQWpEO0FBQ0E7QUFBQSxPQUxBOzs7QUFPQTtBQUFBOztBQUNBO0FBQUE7O0FBQ0E7QUFBQTs7QUFDQTtBQUFBOztBQUNBO0FBQUE7O0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOztBQUFBO0FBQ0E7O0FBQUE7QUFDQTs7QUFBQTtBQUNBOztBQUFBO0FBQ0E7OztBQUFBO0FBQXlDLDBCQUF6QztBQUF5QztBQUF6QztBQUNBOztBQUFBO0FBQWdIO0FBQXFCLFNBQXJJLENBQXFJLElBQXJJLENBQXFJLElBQXJJLEVBQXFJLEdBQXJJO0FBQ0E7O0FBQUE7QUFDQTtBQUFBLE9BVEE7OztBQVdBO0FBQUE7O0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBMkI7QUFBNEIsU0FEdkQ7QUFFQTtBQUFBO0FBQWlDO0FBQWUsU0FGaEQ7QUFHQTs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUEsT0FOQTs7O0FBUUE7QUFBQTs7QUFDQTs7O0FBQUE7QUFBc0Q7QUFBK0QsT0FBckg7OztBQUVBO0FBQUE7O0FBQ0E7OztBQUFBOzs7OztBQUdBO0FBQUE7O0FBQ0E7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7O0FBTUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd1FBOzs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7OztBQVVBOzs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7Ozs7QUFXQTs7Ozs7Ozs7O0FBU0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBOzs7Ozs7Ozs7Ozs7QUFZQTs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQTs7Ozs7Ozs7Ozs7OztBQWFBOzs7Ozs7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U0FBUzRCLFVBQVQsQ0FBb0IzRSxFQUFwQixFQUF3QjtBQUN0QixTQUFPLENBQUMsR0FBRzhHLElBQUosS0FBYSxDQUFDOUcsRUFBRSxDQUFDLEdBQUc4RyxJQUFKLENBQXZCO0FBQ0QiLCJmaWxlIjoiY2hhbmtvLXhkdWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wieGR1Y2VcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wieGR1Y2VcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImNvcmVcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiY29yZVwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG4vKipcbiAqIFRoZSBjZW50cmFsIG1vZHVsZSBmb3IgdGhlIHRyYW5zZHVjZXIgZW5naW5lLlxuICpcbiAqIEFsbCBvZiB0aGUgZnVuY3Rpb25zIGluIHRoaXMgbW9kdWxlIGRlYWwgZGlyZWN0bHkgd2l0aCB0cmFuc2R1Y2Vycy4gQnV0XG4gKiBmaXJzdCwgbGV0J3MgdGFsayBhYm91dCB0aGUgcHJvdG9jb2xzIHRoYXQgYXJlIGdvaW5nIHRvIGJlIHJlZmVycmVkIHRvXG4gKiB0aHJvdWdob3V0IG1hbnkgb2YgdGhlIGZ1bmN0aW9uIGRpc2N1c3Npb25zLlxuICpcbiAqICMjIFByb3RvY29sc1xuICpcbiAqIE9uZSBvZiB0aGUga2V5IHNlbGxpbmcgcG9pbnRzIGZvciB0cmFuc2R1Y2VycyBpcyB0aGF0IHRoZSBzYW1lIHRyYW5zZHVjZXIgY2FuXG4gKiBiZSB1c2VkIG9uIGFueSB0eXBlIG9mIGNvbGxlY3Rpb24uIFJhdGhlciB0aGFuIGhhdmluZyB0byB3cml0ZSBhIG5ldyBgbWFwYFxuICogZnVuY3Rpb24gKGZvciBleGFtcGxlKSBmb3IgZXZlcnkga2luZCBvZiBjb2xsZWN0aW9uIC0gb25lIGZvciBhbiBhcnJheSwgb25lXG4gKiBmb3IgYSBzdHJpbmcsIG9uZSBmb3IgYW4gaXRlcmF0b3IsIGV0Yy4gLSB0aGVyZSBpcyBhIHNpbmdsZSBgbWFwYCB0cmFuc2R1Y2VyXG4gKiB0aGF0IHdpbGwgd29yayB3aXRoIGFsbCBvZiB0aGVtLCBhbmQgcG90ZW50aWFsbHkgd2l0aCAqYW55KiBraW5kIG9mXG4gKiBjb2xsZWN0aW9uLiBUaGlzIGlzIHBvc3NpYmxlIGltcGxlbWVudGluZyAqcHJvdG9jb2xzKiBvbiB0aGUgY29sbGVjdGlvbnMuXG4gKlxuICogQSBwcm90b2NvbCBpbiBKYXZhU2NyaXB0IGlzIG11Y2ggbGlrZSBhbiBpbnRlcmZhY2UgaW4gbGFuZ3VhZ2VzIGxpa2UgSmF2YSBhbmRcbiAqIEMjLiBJdCBpcyBhIGNvbW1pdG1lbnQgdG8gcHJvdmlkaW5nIGEgY2VydGFpbiBmdW5jdGlvbmFsaXR5IHVuZGVyIGEgY2VydGFpblxuICogbmFtZS4gRVMyMDE1IGhhcyBzZWVuIHRoZSBpbnRyb2R1Y3Rpb24gb2YgYW4gYGl0ZXJhdG9yYCBwcm90b2NvbCwgZm9yXG4gKiBleGFtcGxlLCBhbmQgbGFuZ3VhZ2Ugc3VwcG9ydCBmb3IgaXQgKHRoZSBuZXcgYGZvci4uLm9mYCBsb29wIGNhbiB3b3JrIHdpdGhcbiAqIGFueSBvYmplY3QgdGhhdCBjb3JyZWN0bHkgaW1wbGVtZW50cyB0aGUgYGl0ZXJhdG9yYCBwcm90b2NvbCkuXG4gKlxuICogVG8gc3VwcG9ydCB0cmFuc2R1Y3Rpb24sIFhkdWNlIGV4cGVjdHMgY29sbGVjdGlvbnMgdG8gaW1wbGVtZW50IGZvdXJcbiAqIHByb3RvY29scy5cbiAqXG4gKiAtIGBpdGVyYXRvcmA6IGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGFuIGl0ZXJhdG9yICh0aGlzIG9uZSBpcyBidWlsdCBpbiB0b1xuICogICBFUzYgSmF2YVNjcmlwdClcbiAqIC0gYHRyYW5zZHVjZXIvaW5pdGA6IGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgbmV3LCBlbXB0eSBpbnN0YW5jZSBvZiB0aGVcbiAqICAgb3V0cHV0IGNvbGxlY3Rpb25cbiAqIC0gYHRyYW5zZHVjZXIvc3RlcGA6IGEgZnVuY3Rpb24gdGhhdCB0YWtlcyBhbiBhY2N1bXVsYXRvciAodGhlIHJlc3VsdCBvZiB0aGVcbiAqICAgcmVkdWN0aW9uIHNvIGZhcikgYW5kIHRoZSBuZXh0IGlucHV0IHZhbHVlLCBhbmQgdGhlbiByZXR1cm5zIHRoZVxuICogICBhY2N1bXVsYXRvciB3aXRoIHRoZSBuZXh0IGlucHV0IHZhbHVlIGFkZGVkIHRvIGl0XG4gKiAtIGB0cmFuc2R1Y2VyL3Jlc3VsdGA6IGEgZnVuY3Rpb24gdGhhdCB0YWtlcyB0aGUgcmVkdWNlZCBjb2xsZWN0aW9uIGFuZFxuICogICByZXR1cm5zIHRoZSBmaW5hbCBvdXRwdXQgY29sbGVjdGlvblxuICpcbiAqIGBpdGVyYXRvcmAgaXMgdGhlIGJ1aWx0LWluIEphdmFTY3JpcHQgcHJvdG9jb2wuIFdoZW4gY2FsbGVkLCBpdCBpcyBleHBlY3RlZFxuICogdG8gcmV0dXJuIGFuIGl0ZXJhdG9yIG92ZXIgdGhlIGltcGxlbWVudGluZyBjb2xsZWN0aW9uLiBUaGlzIGl0ZXJhdG9yIGlzIGFuXG4gKiBvYmplY3QgdGhhdCBoYXMgYSBgbmV4dGAgZnVuY3Rpb24uIEVhY2ggY2FsbCB0byBgbmV4dGAgaXMgZXhwZWN0ZWQgdG8gcmV0dXJuXG4gKiBhbiBvYmplY3Qgd2l0aCBgdmFsdWVgIGFuZCBgZG9uZWAgcHJvcGVydGllcywgd2hpY2ggcmVzcGVjdGl2ZWx5IGhvbGQgdGhlXG4gKiBuZXh0IHZhbHVlIG9mIHRoZSBpdGVyYXRvciBhbmQgYSBib29sZWFuIHRvIGluZGljYXRlIHdoZXRoZXIgdGhlIGl0ZXJhdGlvblxuICogaGFzIHJlYWNoZWQgaXRzIGVuZC4gKFRoaXMgaXMgYSBzaW1wbGlmaWVkIGV4cGxhbmF0aW9uOyBzZWVcbiAqIHtAbGluayBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L0d1aWRlL0l0ZXJhdG9yc19hbmRfR2VuZXJhdG9yc3x0aGlzIE1ETiBwYWdlfVxuICogZm9yIG1vcmUgZGV0YWlsZWQgaW5mb3JtYXRpb24uKVxuICpcbiAqIGB0cmFuc2R1Y2VyL2luaXRgIChyZWZlcnJlZCB0byBmcm9tIG5vdyBvbiBhcyBgaW5pdGApIHNob3VsZCBiZSBhIGZ1bmN0aW9uXG4gKiB0aGF0IHRha2VzIG5vIHBhcmFtZXRlcnMgYW5kIHJldHVybnMgYSBuZXcsIGVtcHR5IGluc3RhbmNlIG9mIHRoZSBvdXRwdXRcbiAqIGNvbGxlY3Rpb24uIFRoaXMgaXMgdGhlIGZ1bmN0aW9uIHRoYXQgZGVmaW5lcyBob3cgdG8gY3JlYXRlIGEgbmV3IGNvbGxlY3Rpb25cbiAqIG9mIHRoZSBjb3JyZWN0IHR5cGUuXG4gKlxuICogYHRyYW5zZHVjZXIvc3RlcGAgKHJlZmVycmVkIHRvIGZyb20gbm93IG9uIGFzIGBzdGVwYCkgc2hvdWxkIGJlIGEgZnVuY3Rpb25cbiAqIHRoYXQgdGFrZXMgdHdvIHBhcmFtZXRlcnMuIFRoZXNlIHBhcmFtZXRlcnMgYXJlIHRoZSByZXN1bHQgb2YgdGhlIHJlZHVjdGlvblxuICogc28gZmFyIChhbmQgc28gaXMgYSBjb2xsZWN0aW9uIG9mIHRoZSBvdXRwdXQgdHlwZSkgYW5kIHRoZSBuZXh0IHZhbHVlIGZyb21cbiAqIHRoZSBpbnB1dCBjb2xsZWN0aW9uLiBJdCBtdXN0IHJldHVybiB0aGUgbmV3IHJlZHVjdGlvbiByZXN1bHQsIHdpdGggdGhlIG5leHRcbiAqIHZhbHVlIGluY29ycG9yYXRlZCBpbnRvIGl0LiBUaGlzIGlzIHRoZSBmdW5jdGlvbiB0aGF0IGRlZmluZXMgaG93IHJlZHVjZSBhXG4gKiB2YWx1ZSBvbnRvIHRoZSBjb2xsZWN0aW9uLlxuICpcbiAqIGB0cmFuc2R1Y2VyL3Jlc3VsdGAgKHJlZmVycmVkIHRvIGZyb20gbm93IG9uIGFzIGByZXN1bHRgKSBzaG91bGQgYmUgYVxuICogZnVuY3Rpb24gdGhhdCB0YWtlcyBvbmUgcGFyYW1ldGVyLCB3aGljaCBpcyB0aGUgZnVsbHkgcmVkdWNlZCBjb2xsZWN0aW9uLiBJdFxuICogc2hvdWxkIHJldHVybiB0aGUgZmluYWwgb3V0cHV0IGNvbGxlY3Rpb24uIFRoaXMgYWZmb3JkcyBhIGNoYW5jZSB0byBtYWtlIGFueVxuICogbGFzdC1taW51dGUgYWRqdXN0bWVudHMgdG8gdGhlIHJlZHVjZWQgY29sbGVjdGlvbiBiZWZvcmUgcmV0dXJuaW5nIGl0LlxuICpcbiAqIEFycmF5cywgc3RyaW5ncywgYW5kIG9iamVjdHMgYXJlIGFsbCBnaXZlbiBzdXBwb3J0IGZvciBhbGwgb2YgdGhlc2VcbiAqIHByb3RvY29scy4gT3RoZXIgY29sbGVjdGlvbnMgd2lsbCBoYXZlIHRvIHByb3ZpZGUgdGhlaXIgb3duICh0aG91Z2ggaXQgc2hvdWxkXG4gKiBiZSBub3RlZCB0aGF0IHNpbmNlIGBpdGVyYXRvcmAgaXMgYnVpbHQtaW4sIG1hbnkgdGhpcmQtcGFydHkgY29sbGVjdGlvbnMgd2lsbFxuICogYWxyZWFkeSBpbXBsZW1lbnQgdGhpcyBwcm90b2NvbCkuIEFzIGFuIGV4YW1wbGUsIGxldCdzIGFkZCB0cmFuc2R1Y2VyIHN1cHBvcnRcbiAqIHRvIGEgdGhpcmQtcGFydHkgY29sbGVjdGlvbiwgdGhlIGBJbW11dGFibGUuTGlzdGAgY29sbGVjdGlvbiBmcm9tXG4gKiB7QGxpbmsgaHR0cHM6Ly9mYWNlYm9vay5naXRodWIuaW8vaW1tdXRhYmxlLWpzL3xpbW11dGFibGUtanN9LlxuICpcbiAqIGBgYFxuICogSW1tdXRhYmxlLkxpc3QucHJvdG90eXBlW3Byb3RvY29scy5pbml0XSA9ICgpID0+IEltbXV0YWJsZS5MaXN0KCkuYXNNdXRhYmxlKCk7XG4gKiBJbW11dGFibGUuTGlzdC5wcm90b3R5cGVbcHJvdG9jb2xzLnN0ZXBdID0gKGFjYywgaW5wdXQpID0+IGFjYy5wdXNoKGlucHV0KTtcbiAqIEltbXV0YWJsZS5MaXN0LnByb3RvdHlwZVtwcm90b2NvbHMucmVzdWx0XSA9ICh2YWx1ZSkgPT4gdmFsdWUuYXNJbW11dGFibGUoKTtcbiAqIGBgYFxuICpcbiAqIGBJbW11dGFibGUuTGlzdGAgYWxyZWFkeSBpbXBsZW1lbnRzIGBpdGVyYXRvcmAsIHNvIHdlIGRvbid0IGhhdmUgdG8gZG8gaXRcbiAqIG91cnNlbHZlcy5cbiAqXG4gKiBUaGUgYGluaXRgIGZ1bmN0aW9uIHJldHVybnMgYW4gZW1wdHkgbXV0YWJsZSBsaXN0LiBUaGlzIGlzIGltcG9ydGFudCBmb3JcbiAqIGltbXV0YWJsZS1qcyBiZWNhdXNlIGl0cyBkZWZhdWx0IGxpc3RzIGFyZSBpbW11dGFibGUsIGFuZCBpbW11dGFibGUgbGlzdHNcbiAqIG1lYW4gdGhhdCBhIG5ldyBsaXN0IGhhcyB0byBiZSBjcmVhdGVkIHdpdGggZXZlcnkgcmVkdWN0aW9uIHN0ZXAuIEl0IHdvdWxkXG4gKiB3b3JrIGZpbmUsIGJ1dCBpdCdzIHF1aXRlIGluZWZmaWNpZW50LlxuICpcbiAqIFRoZSBgc3RlcGAgZnVuY3Rpb24gYWRkcyB0aGUgbmV4dCB2YWx1ZSB0byB0aGUgYWxyZWFkeS1jcmVhdGVkIGxpc3QuXG4gKiBgSW1tdXRhYmxlLkxpc3RgIHByb3ZpZGVzIGEgYHB1c2hgIGZ1bmN0aW9uIHRoYXQgd29ya3MgbGlrZSBhbiBhcnJheSdzXG4gKiBgcHVzaGAsIGV4Y2VwdCB0aGF0IGl0IHJldHVybnMgdGhlIG5ldyBsaXN0IHdpdGggdGhlIHZhbHVlIHB1c2hlZCBvbnRvIGl0LlxuICogVGhpcyBpcyBwZXJmZWN0IGZvciBvdXIgYHN0ZXBgIGZ1bmN0aW9uLlxuICpcbiAqIFRoZSBgcmVzdWx0YCBmdW5jdGlvbiBjb252ZXJ0cyB0aGUgbm93LWZpbmlzaGVkIG11dGFibGUgbGlzdCBpbnRvIGFuXG4gKiBpbW11dGFibGUgb25lLCB3aGljaCBpcyB3aGF0J3MgZ29pbmcgdG8gYmUgZXhwZWN0ZWQgaWYgd2UncmUgdHJhbnNkdWNpbmdcbiAqIHNvbWV0aGluZyBpbnRvIGFuIGBJbW11dGFibGUuTGlzdGAuIEluIG1vc3QgY2FzZXMsIGByZXN1bHRgIGRvZXNuJ3QgaGF2ZSB0b1xuICogZG8gYW55IHdvcmssIGJ1dCBzaW5jZSB3ZSdyZSBjcmVhdGluZyBhbiBpbnRlcm1lZGlhdGUgcmVwcmVzZW50YXRpb24gb2Ygb3VyXG4gKiBjb2xsZWN0aW9uIHR5cGUgaGVyZSwgdGhpcyBsZXRzIHVzIGNyZWF0ZSB0aGUgY29sbGVjdGlvbiB0aGF0IHdlIGFjdHVhbGx5XG4gKiB3YW50IHRvIG91dHB1dC4gKFdpdGhvdXQgYHJlc3VsdGAsIHdlIHdvdWxkIGhhdmUgdG8gdXNlIGltbXV0YWJsZSBsaXN0cyBhbGxcbiAqIHRoZSB3YXkgdGhyb3VnaCwgY3JlYXRpbmcgYSBuZXcgb25lIHdpdGggZWFjaCBgc3RlcGAgZnVuY3Rpb24sIHNpbmNlIHdlXG4gKiB3b3VsZG4ndCBiZSBhYmxlIHRvIG1ha2UgdGhpcyBjb252ZXJzdGlvbiBhdCB0aGUgZW5kLilcbiAqXG4gKiBXaXRoIHRob3NlIHByb3RvY29scyBpbXBsZW1lbnRlZCBvbiB0aGUgcHJvdG90eXBlLCBgSW1tdXRhYmxlLkxpc3RgXG4gKiBjb2xsZWN0aW9ucyBjYW4gbm93IHN1cHBvcnQgYW55IHRyYW5zZHVjdGlvbiB3ZSBjYW4gb2ZmZXIuXG4gKlxuICogIyMjIFByb3RvY29sc1xuICpcbiAqIEFmdGVyIHRhbGtpbmcgYSBsb3QgYWJvdXQgcHJvdG9jb2xzIGFuZCBzaG93aW5nIGhvdyB0aGV5J3JlIHByb3BlcnRpZXMgYWRkZWRcbiAqIHRvIGFuIG9iamVjdCwgaXQncyBwcm9iYWJseSBwcmV0dHkgb2J2aW91cyB0aGF0IHRoZXJlJ3MgYmVlbiBubyBtZW50aW9uIG9mXG4gKiB3aGF0IHRoZSBhY3R1YWwgbmFtZXMgb2YgdGhvc2UgcHJvcGVydGllcyBhcmUuIFRoYXQncyB3aGF0XG4gKiBge0BsaW5rIG1vZHVsZTpjb3JlLnByb3RvY29sc3xwcm90b2NvbHN9YCBpcyBmb3IuXG4gKlxuICogVGhlIGJlc3Qgd2F5IHRvIHVzZSB0aGVzZSBrZXlzIGNhbiBiZSBzZWVuIGluIHRoZSBpbW11dGFibGUtanMgZXhhbXBsZSBhYm92ZS5cbiAqIEluc3RlYWQgb2Ygd29ycnlpbmcgYWJvdXQgdGhlIG5hbWUgb2YgdGhlIGtleSBmb3IgdGhlIGBpbml0YCBwcm90b2NvbCwgdGhlXG4gKiB2YWx1ZSBvZiBgcHJvdG9jb2xzLmluaXRgIGlzIHVzZWQuXG4gKlxuICogYHtAbGluayBtb2R1bGU6Y29yZS5wcm90b2NvbHN8cHJvdG9jb2xzfWAgZGVmaW5lcyB0aGVzZSBwcm90b2NvbCBwcm9wZXJ0eVxuICogbmFtZXMuXG4gKlxuICogLSBgaW5pdGBcbiAqIC0gYHN0ZXBgXG4gKiAtIGByZXN1bHRgXG4gKiAtIGByZWR1Y2VkYDogdXNlZCBpbnRlcm5hbGx5IHRvIG1hcmsgYSBjb2xsZWN0aW9uIGFzIGFscmVhZHkgcmVkdWNlZFxuICogLSBgdmFsdWVgOiB1c2VkIGludGVybmFsbHkgdG8gcHJvdmlkZSB0aGUgYWN0dWFsIHZhbHVlIG9mIGEgcmVkdWNlZFxuICogICBjb2xsZWN0aW9uXG4gKlxuICogVGhlIGZpbmFsIHR3byB2YWx1ZXMgZG9uJ3QgaGF2ZSBhIGxvdCBvZiB1c2Ugb3V0c2lkZSB0aGUgbGlicmFyeSB1bmxlc3NcbiAqIHlvdSdyZSB3cml0aW5nIHlvdXIgb3duIHRyYW5zZHVjZXJzLlxuICpcbiAqICMjIEhvdyBPYmplY3RzIEFyZSBUcmVhdGVkXG4gKlxuICogT2JqZWN0cyBiZWFyIHNvbWUgdGhvdWdodCBiZWNhdXNlIHJlZ3VsYXJseSwgdGhleSBhcmVuJ3QgY2FuZGlkYXRlcyBmb3JcbiAqIGl0ZXJhdGlvbiAoYW5kIHRoZXJlZm9yZSBmb3IgdHJhbnNkdWN0aW9uIGluIGdlbmVyYWwpLiBUaGV5IGRvbid0IGhhdmUgYSB2ZXJ5XG4gKiBzdHJhaWdodGZvcndhcmQgaWRlYSBvZiBvcmRlciwgYW5kIHRoZXkgaGF2ZSAqdHdvKiBwaWVjZXMgb2YgZGF0YSAoa2V5IGFuZFxuICogdmFsdWUpIGZvciBldmVyeSBlbGVtZW50IGluc3RlYWQgb2Ygb25lLiBZZXQgaXQncyB1bmRlbmlhYmxlIHRoYXQgYXQgbGVhc3RcbiAqIGZvciBtb3N0IHRyYW5zZm9ybWF0aW9ucywgYmVpbmcgYWJsZSB0byBhcHBseSB0aGVtIHRvIG9iamVjdHMgd291bGQgYmUgcXVpdGVcbiAqIGhhbmR5LlxuICpcbiAqIEZvciB0aGF0IHJlYXNvbiwgc3BlY2lhbCBzdXBwb3J0IGlzIHByb3ZpZGVkIGVuZC10by1lbmQgZm9yIG9iamVjdHMuXG4gKlxuICogIyMjIE9iamVjdCBpdGVyYXRpb25cbiAqXG4gKiBJdGVyYXRpbmcgb3ZlciBhbiBvYmplY3Qgd2lsbCBwcm9kdWNlIG9uZSBvYmplY3QgcGVyIHByb3BlcnR5IG9mIHRoZSBvcmlnaW5hbFxuICogb2JqZWN0LiBBbiBvcmRlciBpcyBpbXBvc2VkOyBieSBkZWZhdWx0LCB0aGlzIG9yZGVyIHRoZSBzYW1lIGFzIHRoZSBvcmRlcmluZ1xuICogb2Yga2V5cyBpbiBwb3N0LUVTNiBKYXZhc2NyaXB0OlxuICpcbiAqIDEuIEtleXMgdGhhdCBhcmUgaW50ZWdlcnMsIGluIGFzY2VuZGluZyBudW1lcmljYWwgb3JkZXJcbiAqIDIuIEFsbCBvdGhlciBzdHJpbmcga2V5cywgaW4gdGhlIG9yZGVyIGluIHdoaWNoIHRoZXkgd2VyZSBhZGRlZCB0byB0aGUgb2JqZWN0XG4gKiAzLiBBbGwgc3ltYm9sIGtleXMsIGluIHRoZSBvcmRlciBpbiB3aGljaCB0aGV5IHdlcmUgYWRkZWQgdG8gdGhlIG9iamVjdFxuICpcbiAqIFRoZSBge0BsaW5rIG1vZHVsZTpjb3JlLml0ZXJhdG9yfGl0ZXJhdG9yfWAgZnVuY3Rpb24gY2FuIGJlIHBhc3NlZCBhIHNvcnRpbmdcbiAqIGZ1bmN0aW9uIHRoYXQgY2FuIHNvcnQga2V5cyBpbiBhbnkgb3RoZXIgd2F5LlxuICpcbiAqIFRoZSByZXN1bHQgb2YgdGhlIGl0ZXJhdGlvbiwgaXMgYSBzZXQgb2Ygb2JqZWN0cyBlYWNoIHdpdGggYSBzaW5nbGUgcHJvcGVydHksXG4gKiBvbmUgZm9yIGVhY2ggZW51bWVyYWJsZSBvd24gcHJvcGVydHkgb24gdGhlIG9yaWdpbmFsIG9iamVjdC4gVGhlIHN0YW5kYXJkXG4gKiBvcmRlcmluZyBmb3Igb2JqZWN0cyAoZnJvbSBFUzYgb253YXJkKSBpcyBhcyBmb2xsb3dzOlxuICpcbiAqICMjIyBUcmFuc2Zvcm1pbmcgb2JqZWN0c1xuICpcbiAqIFdoaWxlIGl0ZXJhdGluZyBvdmVyIG9iamVjdHMgaW4gdGhpcyB3YXkgaXMgc3RyYWlnaHRmb3J3YXJkLCB0aGUgc3ludGF4IG9mXG4gKiBvYmplY3RzIG1ha2VzIGl0IHVnbHkgdG8gdHJhbnNmb3JtIHRoZW0gaW4gdGhpcyBmb3JtLiBIZXJlJ3MgYW4gZXhhbXBsZSBvZiBhXG4gKiB0cmFuc2Zvcm1hdGlvbiBmdW5jdGlvbiB0aGF0IG1ha2VzIHRoZSBvYmplY3QncyBrZXlzIHVwcGVyLWNhc2UgYW5kIGFkZHMgb25lXG4gKiB0byBlYWNoIG9mIHRoZSB2YWx1ZXM6XG4gKlxuICogYGBgXG4gKiBmdW5jdGlvbiB0cmFuc2Zvcm0ob2JqKSB7XG4gKiAgIGNvbnN0IGtleSA9IE9iamVjdC5rZXlzKG9iailbMF07XG4gKiAgIGNvbnN0IHZhbHVlID0gb2JqW2tleV07XG4gKiAgIHJldHVybiB7IFtrZXkudG9VcHBlckNhc2UoKV06IHZhbHVlICsgMSB9O1xuICogfVxuICogYGBgXG4gKlxuICogQSBoZWxwZXIgZnVuY3Rpb24gbmFtZWQgYHtAbGluayBtb2R1bGU6Y29yZS5wcm9wZXJ0eXxwcm9wZXJ0eX1gIGNhbiBpbXByb3ZlXG4gKiB0aGlzIGJ5IGhhbmRsaW5nIHRoZSBib2lsZXJwbGF0ZS5cbiAqXG4gKiBgYGBcbiAqIGZ1bmN0aW9uIGltcHJvdmVkVHJhbnNmb3JtKG9iaikge1xuICogICBjb25zdCB7aywgdn0gPSBwcm9wZXJ0eShvYmopO1xuICogICByZXR1cm4geyBbay50b1VwcGVyQ2FzZSgpXTogdiArIDEgfTtcbiAqIH1cbiAqIGBgYFxuICpcbiAqICMjIyBSZWR1Y2luZyBvYmplY3RzXG4gKlxuICogVGhlIGJ1aWx0LWluIHJlZHVjZXJzIChmb3IgYXJyYXlzLCBvYmplY3RzLCBzdHJpbmdzLCBhbmQgaXRlcmF0b3JzKVxuICogdW5kZXJzdGFuZCB0aGVzZSBzaW5nbGUtcHJvcGVydHkgb2JqZWN0cyBhbmQgcmVkdWNlIHRoZW0gaW4gdGhlIHByb3BlciBtYW5uZXJcbiAqIHdpdGhvdXQgYW55IGZ1cnRoZXIgd29yay5cbiAqXG4gKiBUaGF0J3MgaXQgZm9yIG9iamVjdC1vYmplY3QgcmVkdWN0aW9uLiBDb252ZXJ0aW5nIGJldHdlZW4gb2JqZWN0cyBhbmQgb3RoZXJcbiAqIHR5cGVzIGlzIGFub3RoZXIgbWF0dGVyLlxuICpcbiAqIEV2ZXJ5IHRyYW5zZHVjZXIgZnVuY3Rpb24gZXhjZXB0IGZvciBge0BsaW5rIG1vZHVsZTpjb3JlLnNlcXVlbmNlfHNlcXVlbmNlfWBcbiAqIGlzIGNhcGFibGUgb2YgdHVybmluZyBhbiBvYmplY3QgaW50byBhIGRpZmZlcmVudCB0eXBlIG9mIGNvbGxlY3Rpb24sIHR1cm5pbmdcbiAqIGEgZGlmZmVyZW50IHR5cGUgb2YgY29sbGVjdGlvbiBpbnRvIGFuIG9iamVjdCwgb3IgYm90aC4gT2JqZWN0cyBhcmUgZGlmZmVyZW50XG4gKiBiZWNhdXNlIHRoZXkncmUgdGhlIG9ubHkgXCJjb2xsZWN0aW9uc1wiIHRoYXQgaGF2ZSB0d28gZGlmZmVyZW50IHBpZWNlcyBvZiBkYXRhXG4gKiBwZXIgZWxlbWVudC4gQmVjYXVzZSBvZiB0aGlzLCB3ZSBoYXZlIHRvIGhhdmUgYSBzdHJhdGVneSBvbiBob3cgdG8gbW92ZSBmcm9tXG4gKiBvbmUgdG8gYW5vdGhlci5cbiAqXG4gKiBUcmFuc2R1Y2luZyBhbiBvYmplY3QgaW50byBhIGRpZmZlcmVudCB0eXBlIGlzIGdlbmVyYWxseSBwcmV0dHkgZWFzeS4gSWYgYW5cbiAqIG9iamVjdCBpcyBjb252ZXJ0ZWQgaW50byBhbiBhcnJheSwgZm9yIGluc3RhbmNlLCB0aGUgYXJyYXkgZWxlbWVudHMgd2lsbCBlYWNoXG4gKiBiZSBzaW5nbGUtcHJvcGVydHkgb2JqZWN0cywgb25lIHBlciBwcm9wZXJ0eSBvZiB0aGUgb3JpZ2luYWwgb2JqZWN0LlxuICpcbiAqIFN0cmluZ3MgYXJlIGEgZGlmZmVyZW50IHN0b3J5LCBzaW5jZSBlbmNvZGluZyBhIHNpbmdsZS1wcm9wZXJ0eSBvYmplY3QgdG8gYVxuICogc3RyaW5nIGlzbid0IHBvc3NpYmxlIChiZWNhdXNlIGV2ZXJ5IFwiZWxlbWVudFwiIG9mIGEgc3RyaW5nIGhhcyB0byBiZSBhIHNpbmdsZVxuICogY2hhcmFjdGVyKS4gU3RyaW5ncyB0aGF0IGFyZSBwcm9kdWNlZCBmcm9tIG9iamVjdHMgd2lsbCBpbnN0ZWFkIGp1c3QgYmUgdGhlXG4gKiBvYmplY3QgdmFsdWVzLCBjb25jYXRlbmF0ZWQuIEJlY2F1c2Ugb2JqZWN0cyBhcmUgaXRlcmF0ZWQgaW4gYSBwYXJ0aWN1bGFyXG4gKiBvcmRlciwgdGhpcyBjb252ZXJzaW9uIHdpbGwgYWx3YXlzIHByb2R1Y2UgdGhlIHNhbWUgc3RyaW5nLCBidXQgZXhjZXB0IGluXG4gKiBzb21lIHZlcnkgc3BlY2lmaWMgY2FzZXMgdGhlcmUgcmVhbGx5IGlzbid0IGEgbG90IG9mIHVzZSBmb3IgdGhpcyBjb252ZXJzaW9uLlxuICpcbiAqIGBgYFxuICogY29uc3Qgb2JqID0ge2E6IDEsIGI6IDJ9O1xuICpcbiAqIGxldCByZXN1bHQgPSBhc0FycmF5KG9iaik7XG4gKiAvLyByZXN1bHQgPSBbe2E6IDF9LCB7YjogMn1dXG4gKlxuICogcmVzdWx0ID0gYXNJdGVyYXRvcihvYmopO1xuICogLy8gcmVzdWx0IGlzIGFuIGl0ZXJhdG9yIHdpdGggdHdvIHZhbHVlczoge2E6IDF9IGFuZCB7YjogMn1cbiAqXG4gKiByZXN1bHQgPSBpbnRvKEltbXV0YWJsZS5MaXN0KCksIG9iailcbiAqIC8vIHJlc3VsdCBpcyBhbiBpbW11dGFibGUgbGlzdCB3aXRoIHR3byBlbGVtZW50czoge2E6IDF9IGFuZCB7YjogMn1cbiAqXG4gKiByZXN1bHQgPSBhc1N0cmluZyhvYmopO1xuICogLy8gcmVzdWx0IGlzICcxMidcbiAqIGBgYFxuICpcbiAqIFRoZSBvcHBvc2l0ZSBjb252ZXJzaW9uIGRlcGVuZHMgb24gdGhlIHZhbHVlcyBpbnNpZGUgdGhlIGNvbGxlY3Rpb25zLiBJZlxuICogdGhvc2UgdmFsdWVzIGFyZSBvYmplY3RzLCB0aGVuIHRoZSByZXN1bHQgaXMgYW4gb2JqZWN0IHdpdGggYWxsIG9mIHRoZVxuICogb2JqZWN0cyBjb21iaW5lZCAoaWYgbW9yZSB0aGFuIG9uZSBoYXMgdGhlIHNhbWUga2V5LCB0aGUgbGFzdCBvbmUgaXMgdGhlIG9uZVxuICogdGhhdCdzIGtlcHQpLiBPdGhlcndpc2UsIGtleXMgYXJlIGNyZWF0ZWQgZm9yIGVhY2ggb2YgdGhlIGVsZW1lbnRzLCBzdGFydGluZ1xuICogd2l0aCBgMGAgYW5kIGluY3JlYXNpbmcgZnJvbSB0aGVyZS5cbiAqXG4gKiBUaGlzIG1lYW5zIHRoYXQgY29udmVydGluZyBhbiBvYmplY3QgdG8gYW55IG5vbi1zdHJpbmcgY29sbGVjdGlvbiBhbmQgYmFja1xuICogcHJvZHVjZXMgdGhlIG9yaWdpbmFsIG9iamVjdC5cbiAqXG4gKiBgYGBcbiAqIGxldCByZXN1bHQgPSBhc09iamVjdChbe2E6IDF9LCB7YjogMn1dKTtcbiAqIC8vIHJlc3VsdCA9IHthOiAxLCBiOiAyfVxuICpcbiAqIHJlc3VsdCA9IGFzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyByZXN1bHQgPSB7MDogMSwgMTogMiwgMjogM31cbiAqXG4gKiByZXN1bHQgPSBhc09iamVjdCgnaGVsbG8nKTtcbiAqIC8vIHJlc3VsdCA9IHswOiAnaCcsIDE6ICdlJywgMjogJ2wnLCAzOiAnbCcsIDQ6ICdvJ31cbiAqIGBgYFxuICpcbiAqIEBtb2R1bGUgY29yZVxuICovXG5cbmV4cG9ydCB7IHByb3RvY29scywgaXNJbXBsZW1lbnRlZCB9IGZyb20gXCJtb2R1bGVzL3Byb3RvY29sXCI7XG5leHBvcnQgeyBpdGVyYXRvciwgaXNJdGVyYWJsZSB9IGZyb20gXCJtb2R1bGVzL2l0ZXJhdGlvblwiO1xuZXhwb3J0IHtcbiAgY29tcGxldGUsXG4gIHVuY29tcGxldGUsXG4gIGlzQ29tcGxldGVkLFxuICBlbnN1cmVDb21wbGV0ZWQsXG4gIGVuc3VyZVVuY29tcGxldGVkLFxuICByZWR1Y2UsXG4gIHRvRnVuY3Rpb24sXG4gIHRvUmVkdWNlcixcbiAgdG9UcmFuc2R1Y2VyXG59IGZyb20gXCJtb2R1bGVzL3JlZHVjdGlvblwiO1xuZXhwb3J0IHtcbiAgaXNBcnJheSxcbiAgaXNGdW5jdGlvbixcbiAgaXNHZW5lcmF0b3JGdW5jdGlvbixcbiAgaXNOdW1iZXIsXG4gIGlzT2JqZWN0LFxuICBpc1N0cmluZ1xufSBmcm9tIFwibW9kdWxlcy91dGlsc1wiO1xuXG4vKipcbiAqIEFuIGl0ZXJhYmxlIGFzIGRlZmluZWQgYnkgSmF2YVNjcmlwdC5cbiAqXG4gKiBAdHlwZWRlZiBKc0l0ZXJhYmxlXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNvcmVcbiAqIEBwcm9wZXJ0eSB7bW9kdWxlOmNvcmUuSnNJdGVyYWJsZUZ1bmN0aW9ufSBTeW1ib2wuaXRlcmF0b3IgQSBmdW5jdGlvbiB0aGF0XG4gKiAgICAgcHJvZHVjZXMgYW4gaXRlcmF0b3Igd2hlbiBjYWxsZWQuXG4gKi9cblxuLyoqXG4gKiBBIGZ1bmN0aW9uIHRoYXQgcHJvZHVjZXMgYW4gaXRlcmF0b3IuIFRoaXMgaXMgdGhlIGNoYXJhY3RlcmlzdGljIHByb3BlcnR5IG9mXG4gKiBhIEphdmFTY3JpcHQgaXRlcmFibGUuXG4gKlxuICogQGNhbGxiYWNrIEpzSXRlcmFibGVGdW5jdGlvblxuICogQG1lbWJlcm9mIG1vZHVsZTpjb3JlXG4gKiBAcmV0dXJucyB7bW9kdWxlOmNvcmUuSXRlcmF0b3J9IEFuIGl0ZXJhdG9yIG92ZXIgdGhlXG4gKiAgICAge0BsaW5rIG1vZHVsZTpjb3JlLkpzSXRlcmFibGV9IHRoYXQgcHJvZHVjZWQgaXQuXG4gKi9cblxuLyoqXG4gKiBBbiBpdGVyYWJsZSBhcyBkZWZpbmVkIGJ5IHRoaXMgbGlicmFyeS4gU2luY2UgaXQgcHJvdmlkZXMgc3BlY2lmaWMgc3VwcG9ydFxuICogZm9yIG9iamVjdHMsIHRoaXMgdHlwZSBpcyBtZXJlbHkgYSBub3JtYWwgSmF2YVNjcmlwdCBpdGVyYWJsZSAqb3IqIGEgcGxhaW5cbiAqIG9iamVjdC5cbiAqXG4gKiBAdHlwZWRlZiB7KE9iamVjdHxtb2R1bGU6Y29yZS5Kc0l0ZXJhYmxlKX0gSXRlcmFibGVcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y29yZVxuICovXG5cbi8qKlxuICogQSBnZW5lcmljIGl0ZXJhdG9yLiBUaGlzIGNvbmZvcm1zIHRvIHRoZSBgaXRlcmF0b3JgIHByb3RvY29sIGluIHRoYXQgaXQgaGFzIGFcbiAqIGB7QGxpbmsgbW9kdWxlOmNvcmUuTmV4dEZ1bmN0aW9ufG5leHR9YCBmdW5jdGlvbiB0aGF0IHByb2R1Y2VzXG4gKiB7QGxpbmsgbW9kdWxlOmNvcmUuTmV4dFZhbHVlfGBpdGVyYXRvcmAtY29tcGF0aWJsZSBvYmplY3RzfS5cbiAqXG4gKiBAdHlwZWRlZiBJdGVyYXRvclxuICogQG1lbWJlcm9mIG1vZHVsZTpjb3JlXG4gKiBAcHJvcGVydHkge21vZHVsZTpjb3JlLk5leHRGdW5jdGlvbn0gbmV4dCBBIGZ1bmN0aW9uIHRoYXQsIHdoZW4gY2FsbGVkLFxuICogICAgIHJldHVybnMgdGhlIG5leHQgaXRlcmF0b3IgdmFsdWUuXG4gKi9cblxuLyoqXG4gKiBUaGUgZnVuY3Rpb24gdGhhdCBzYXRpc2ZpZXMgdGhlIGBpdGVyYXRvcmAgcHJvdG9jb2wgb24gYW4gb2JqZWN0LiBXaGVuXG4gKiBjYWxsZWQsIGl0IHJldHVybnMgdGhlIG5leHQgdmFsdWUgaW4gdGhlIGl0ZXJhdG9yLlxuICpcbiAqIEBjYWxsYmFjayBOZXh0RnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y29yZVxuICogQHJldHVybnMge21vZHVsZTpjb3JlLk5leHRWYWx1ZX0gVGhlIG5leHQgdmFsdWUgaW4gdGhlIGl0ZXJhdG9yLlxuICovXG5cbi8qKlxuICogVGhlIG9iamVjdCByZXR1cm5lZCBieSBhIGNhbGwgdG8gYHtAbGluayBtb2R1bGU6Y29yZS5OZXh0RnVuY3Rpb258bmV4dH1gLiBJdFxuICogaW5kaWNhdGVzIHdoZXRoZXIgdGhlIGl0ZXJhdG9yIGlzIGNvbXBsZXRlIGFuZCwgaWYgbm90LCB3aGF0IHRoZSBuZXh0IHZhbHVlXG4gKiBpcy5cbiAqXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBOZXh0VmFsdWVcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y29yZVxuICogQHByb3BlcnR5IHsqfSB2YWx1ZSBUaGUgdmFsdWUgdGhhdCB0aGUgaXRlcmF0b3IgaGFzIHByb3ZpZGVkLlxuICogQHByb3BlcnR5IHtib29sZWFufSBkb25lIEluZGljYXRlcyB3aGV0aGVyIHRoZSBpdGVyYXRvciBoYXMgY29tcGxldGVkLiBJZlxuICogICAgIHRoaXMgaXMgYHRydWVgLCB0aGVuIGB2YWx1ZWAgd2lsbCBiZSBgdW5kZWZpbmVkYCBhbmQgZXZlcnkgc3Vic2VxdWVudFxuICogICAgIGNhbGwgdG8gYHtAbGluayBtb2R1bGU6Y29yZS5OZXh0RnVuY3Rpb258bmV4dH1gIHdpbGwgY29udGludWUgdG8gcHJvZHVjZVxuICogICAgIHRoZSBzYW1lIHZhbHVlLiBJZiBpdCdzIGBmYWxzZWAsIHRoZW4gYHZhbHVlYCByZXByZXNlbnRzIHRoZSBuZXQgdmFsdWUgaW5cbiAqICAgICB0aGUgaXRlcmF0b3IsIGFuZCB0aGUgbmV4dCBjYWxsIHRvXG4gKiAgICAgYHtAbGluayBtb2R1bGU6Y29yZS5OZXh0RnVuY3Rpb258bmV4dH1gIHdpbGwgY29udGludWUgdG8gcHJvZHVjZSB0aGUgbmV4dFxuICogICAgIHZhbHVlLlxuICovXG5cbi8qKlxuICogQSBzb3J0IGZ1bmN0aW9uIGZvciB0aGUga2V5cyBvZiBhbiBvYmplY3QuIFRoaXMgY29uZm9ybXMgdG8gdGhlIG5vcm1hbCBzb3J0XG4gKiBmdW5jdGlvbiB1c2VkIGluIGBBcnJheS5wcm90b3R5cGUuc29ydGAuXG4gKlxuICogQGNhbGxiYWNrIFNvcnRGdW5jdGlvblxuICogQG1lbWJlcm9mIG1vZHVsZTpjb3JlXG4gKiBAcHJvcGVydHkgeyp9IGEgVGhlIGZpcnN0IHZhbHVlIHRvIGJlIHNvcnRlZC5cbiAqIEBwcm9wZXJ0eSB7Kn0gYiBUaGUgc2Vjb25kIHZhbHVlIHRvIGJlIHNvcnRlZC5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IEVpdGhlciBgLTFgIGlmIGBhID4gYmAsIGAxYCBpZiBgYSA8IGJgLCBvciBgMGAgaWYgYGEgPT09XG4gKiAgICAgYmAuXG4gKi9cblxuLyoqXG4gKiBBIGZ1bmN0aW9uIHRoYXQgY2FuIGhhdmUgYW4gaXRlcmF0b3IgY3JlYXRlZCBmb3IgaXQuXG4gKlxuICogQGNhbGxiYWNrIEl0ZXJhYmxlRnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y29yZVxuICogQHBhcmFtIHtudW1iZXJ9IFtpbmRleF0gVGhlIG51bWJlciBvZiB0aW1lcyB0aGF0XG4gKiAgICAgYHtAbGluayBtb2R1bGU6Y29yZS5OZXh0RnVuY3Rpb258bmV4dH1gIGhhcyBiZWVuIGNhbGxlZCBvbiB0aGUgZnVuY3Rpb24nc1xuICogICAgIGl0ZXJhdG9yLiBUaGlzIHdpbGwgc3RhcnQgYXQgYDBgIGZvciB0aGUgZmlyc3QgY2FsbCB0b1xuICogICAgIGB7QGxpbmsgbW9kdWxlOmNvcmUuTmV4dEZ1bmN0aW9ufG5leHR9YCBhbmQgaW5jcmVhc2UgYnkgb25lIGZvciBlYWNoXG4gKiAgICAgc3Vic2VxdWVudCBjYWxsLlxuICogQHBhcmFtIHsqfSBbbGFzdF0gVGhlIHJldHVybiB2YWx1ZSBvZiB0aGUgZnVuY3Rpb24gdGhlIGxhc3QgdGltZVxuICogICAgIGB7QGxpbmsgbW9kdWxlOmNvcmUuTmV4dEZ1bmN0aW9ufG5leHR9YCB3YXMgY2FsbGVkIG9uIGl0cyBpdGVyYXRvci4gRm9yXG4gKiAgICAgdGhlIGZpcnN0IGNhbGwsIHRoaXMgaXMgc2V0IHRvIGB1bmRlZmluZWRgLlxuICogQHJldHVybnMgeyp9IFRoZSByZXR1cm4gdmFsdWUgZm9yIHRoYXQgaXRlcmF0aW9uLlxuICovXG5cbi8qKlxuICogQW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIGEgc2luZ2xlLXByb3BlcnR5IG9iamVjdCwgYnV0IHVzaW5nIG9uZSBwcm9wZXJ0eVxuICogZm9yIHRoZSBrZXkgYW5kIG9uZSBmb3IgdGhlIHZhbHVlLiBUaGlzIGZvcm1hdCBpcyBlYXNpZXIgdG8gdXNlIGluXG4gKiB0cmFuc2Zvcm1hdGlvbiBmdW5jdGlvbnMuXG4gKlxuICogQHR5cGVkZWYge29iamVjdH0gUHJvcGVydHlPYmplY3RcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y29yZVxuICogQHByb3BlcnR5IHsoU3RyaW5nfFN5bWJvbCl9IGsgVGhlIGtleSBvZiB0aGUgc2luZ2xlLXByb3BlcnR5IG9iamVjdCB0aGF0IHRoaXNcbiAqICAgICBvYmplY3QgcmVwcmVzZW50cy5cbiAqIEBwcm9wZXJ0eSB7Kn0gdiBUaGUgdmFsdWUgb2YgdGhlIHNpbmdsZS1wcm9wZXJ0eSBvYmplY3QgdGhhdCB0aGlzIG9iamVjdFxuICogICAgIHJlcHJlc2VudHMuXG4gKi9cblxuLyoqXG4gKiBBbiBpbml0IGZ1bmN0aW9uLCB3aGljaCBwcm92aWRlcyBhIG5ldywgZW1wdHkgaW5zdGFuY2Ugb2YgYSBjb2xsZWN0aW9uLlxuICpcbiAqIEBjYWxsYmFjayBJbml0RnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y29yZVxuICogQHJldHVybnMgeyp9IEEgbmV3LCBlbXB0eSBpbnN0YW5jZSBvZiBhIGNvbGxlY3Rpb24uXG4gKi9cblxuLyoqXG4gKiBBIHN0ZXAgZnVuY3Rpb24sIHRoYXQgcmVkdWNlcyBhIGNvbGxlY3Rpb24gYW5kIGEgbmV3IHZhbHVlIHRvIHRoZSBjb2xsZWN0aW9uXG4gKiB3aXRoIHRoZSB2YWx1ZSBhZGRlZC5cbiAqXG4gKiBAY2FsbGJhY2sgU3RlcEZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNvcmVcbiAqIEBwYXJhbSB7Kn0gYWNjIEFuIGFjY3VtdWxhdGVkIHZhbHVlIHRvIHdoaWNoIHRoZSBuZXcgdmFsdWUgaXMgYmVpbmcgYWRkZWQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSBuZXcgdmFsdWUgdG8gYmUgYWRkZWQgdG8gdGhlIGFjY3VtdWxhdGVkIHZhbHVlLlxuICogQHJldHVybnMgeyp9IFRoZSBhY2N1bXVsYXRlZCB2YWx1ZSB3aXRoIHRoZSBuZXcgdmFsdWUgaW50ZWdyYXRlZCBpbnRvIGl0LlxuICovXG5cbi8qKlxuICogQSByZXN1bHQgZnVuY3Rpb24gdGhhdCBvcHRpb25hbGx5IG1vZGlmaWVzIHRoZSBpbnB1dCBjb2xsZWN0aW9uIGFuZCB0aGVuXG4gKiByZXR1cm5zIGl0LiBUaGlzIGlzIHVzZWQgYXQgdGhlIGVuZCBvZiBhIHJlZHVjdGlvbiB0byBhZmZvcmQgYSBsYXN0IGNoYW5jZVxuICogZm9yIHRoZSB0cmFuc2R1Y2VyIHRvIG1vZGlmeSB0aGUgb3V0cHV0IHZhbHVlLlxuICpcbiAqIEBjYWxsYmFjayBSZXN1bHRGdW5jdGlvblxuICogQG1lbWJlcm9mIG1vZHVsZTpjb3JlXG4gKiBAcGFyYW0geyp9IGlucHV0IFRoZSB2YWx1ZSB0byBiZSBtb2RpZmllZCBiZWZvcmUgYmVpbmcgb3V0cHV0LlxuICogQHJldHVybnMgeyp9IFRoZSBtb2RpZmllZCB2YWx1ZSB0byBiZSBvdXRwdXQgYnkgYSB0cmFuc2R1Y2VyLlxuICovXG5cbi8qKlxuICogQW4gb2JqZWN0IHdpdGggYWxsIG9mIHRoZSBpbmZvcm1hdGlvbiBuZWNlc3NhcnkgdG8gcmVkdWNlIHZhbHVlcyBpbnRvIGFcbiAqIHBhcnRpY3VsYXIga2luZCBvZiBjb2xsZWN0aW9uLiBUaGVzZSBhcmUgcGFzc2VkIHRvXG4gKiB7QGxpbmsgbW9kdWxlOmNvcmUucmVkdWNlfHJlZHVjZX0gYW5kIGxpa2UgZnVuY3Rpb25zLlxuICpcbiAqIEB0eXBlZGVmIFJlZHVjZXJcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y29yZVxuICogQHByb3BlcnR5IHttb2R1bGU6Y29yZS5Jbml0RnVuY3Rpb259IFtTeW1ib2wuZm9yKFwidHJhbnNkdWNlci9pbml0XCIpXSBUaGVcbiAqICAgICByZWR1Y2VyJ3MgaW5pdCBmdW5jdGlvbi5cbiAqIEBwcm9wZXJ0eSB7bW9kdWxlOmNvcmUuU3RlcEZ1bmN0aW9ufSBTeW1ib2wuZm9yKFwidHJhbnNkdWNlci9zdGVwXCIpIFRoZVxuICogICAgIHJlZHVjZXIncyBzdGVwIGZ1bmN0aW9uLlxuICogQHByb3BlcnR5IHttb2R1bGU6Y29yZS5SZXN1bHRGdW5jdGlvbn0gU3ltYm9sLmZvcihcInRyYW5zZHVjZXIvcmVzdWx0XCIpIFRoZVxuICogICAgIHJlZHVjZXIncyByZXN1bHQgZnVuY3Rpb24uXG4gKi9cblxuLyoqXG4gKiBBIGNvbGxlY3Rpb24gdGhhdCBjYW4gaGF2ZSB2YWx1ZXMgcmVkdWNlZCBpbnRvIGl0LiBTaW5jZSB0aGlzIGxpYnJhcnlcbiAqIHByb3ZpZGVzIGV4cGxpY2l0IHN1cHBvcnQgZm9yIGFycmF5cywgb2JqZWN0cywgYW5kIHN0cmluZ3MsIHRob3NlIHRocmVlIGFyZVxuICogYWRkZWQgdG8gdGhlIHtAbGluayBtb2R1bGU6Y29yZS5SZWR1Y2VyfSB0eXBlIHRvIGRlZmluZSB0aGlzLlxuICpcbiAqIEB0eXBlZGVmIHsoQXJyYXl8U3RyaW5nfE9iamVjdHxtb2R1bGU6Y29yZS5SZWR1Y2VyKX0gUmVkdWNpYmxlXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNvcmVcbiAqL1xuXG4vKipcbiAqIEEgY29sbGVjdGlvbiB0aGF0IHN1cHBvcnRzIG5vdCBvbmx5IHRoZSByZWd1bGFyIGl0ZXJhaW9uIG92ZXIgaXRzIGNvbnRlbnRzLFxuICogYnV0IGFsc28gcmVkdWN0aW9uIG9mIHZhbHVlcyBpbnRvIGl0LiBJdCBpcyBhbiBpbnRlcnNlY3Rpb24gdHlwZSBjb21iaW5pbmdcbiAqIHtAbGluayBtb2R1bGU6Y29yZS5JdGVyYWJsZXxJdGVyYWJsZX0gYW5kXG4gKiB7QGxpbmsgbW9kdWxlOmNvcmUuUmVkdWNpYmxlfFJlZHVjaWJsZX0uXG4gKlxuICogQHR5cGVkZWYgRXhwbGljaXRJdGVyYWJsZVJlZHVjaWJsZVxuICogQG1lbWJlcm9mIG1vZHVsZTpjb3JlXG4gKiBAcHJvcGVydHkge21vZHVsZTpjb3JlLkpzSXRlcmFibGVGdW5jdGlvbn0gU3ltYm9sLml0ZXJhdG9yIEEgZnVuY3Rpb24gdGhhdFxuICogICAgIHByb2R1Y2VzIGFuIGl0ZXJhdG9yIHdoZW4gY2FsbGVkLlxuICogQHByb3BlcnR5IHttb2R1bGU6Y29yZS5Jbml0RnVuY3Rpb259IFtTeW1ib2wuZm9yKFwidHJhbnNkdWNlci9pbml0XCIpXSBUaGVcbiAqICAgICBjb2xsZWN0aW9uJ3MgaW5pdCBmdW5jdGlvbi5cbiAqIEBwcm9wZXJ0eSB7bW9kdWxlOmNvcmUuU3RlcEZ1bmN0aW9ufSBTeW1ib2wuZm9yKFwidHJhbnNkdWNlci9zdGVwXCIpIFRoZVxuICogICAgIGNvbGxlY3Rpb24ncyBzdGVwIGZ1bmN0aW9uLlxuICogQHByb3BlcnR5IHttb2R1bGU6Y29yZS5SZXN1bHRGdW5jdGlvbn0gU3ltYm9sLmZvcihcInRyYW5zZHVjZXIvcmVzdWx0XCIpIFRoZVxuICogICAgIGNvbGxlY3Rpb24ncyByZXN1bHQgZnVuY3Rpb24uXG4gKi9cblxuLyoqXG4gKiBUaGUgYWN0dWFsIHR5cGUgdXNlZCBieSByZWR1Y2libGUgY29sbGVjdGlvbnMgaW4gdGhpcyBsaWJyYXJ5LiBJdCB0YWtlcyB0aGVcbiAqIHByb3BlcnR5LWJhc2VkIGRlZmluaXRpb24gYW5kIGFkZHMgYnVpbHQtaW4gdHlwZXMgdGhhdCBhcmUgc3BlY2lhbGx5XG4gKiBzdXBwb3J0ZWQgYnkgdGhlIGxpYnJhcnkuXG4gKlxuICogQHR5cGVkZWYgeyhBcnJheXxPYmplY3R8U3RyaW5nfG1vZHVsZTpjb3JlLkV4cGxpY2l0SXRlcmFibGVSZWR1Y2libGUpfVxuICogICAgIEl0ZXJhYmxlUmVkdWNpYmxlXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNvcmVcbiAqL1xuXG4vKipcbiAqIEEgZnVuY3Rpb24gdGhhdCB0cmFuc2Zvcm1zIGRhdGEgYW5kIGNhbiBiZSBjb21wb3NlZCB3aXRoIG90aGVyIHRyYW5zZHVjZXJzXG4gKiBpbnRvIGEgc2luZ2xlIHRyYW5zZHVjZXIuIFRoZSB0cmFuc2R1Y2VycyB0aGVtc2VsdmVzIGFyZSBwcm92aWRlZCBieSBvdGhlclxuICogbGlicmFyaWVzOyB0aGUgb25seSBpbnZvbHZlbWVudCBvZiB0aGlzIGxpYnJhciBpcyBhcyBhIGNvbnN1bWVyIG9mXG4gKiB0cmFuc2R1Y2Vycy5cbiAqXG4gKiBUcmFuc2R1Y2VycyB3b3JrIGJ5IGhhdmluZyBzdGVwIGZ1bmN0aW9ucyB0aGF0IGFyZSBrbm93biB2aWEgcHJvdG9jb2wsIGFuZCBpdFxuICogaXMgdGhlc2Ugc3RlcCBmdW5jdGlvbnMgdGhhdCB0YWtlIGEgdmFsdWUgYXQgYSB0aW1lIHRvIGJlIHRyYW5zZm9ybWVkIGFzXG4gKiB0aGVpciBhcmd1bWVudHMuIFRoZSBhcmd1bWVudHMgdG8gdGhlIHRyYW5zZHVjZXJzIHRoZW1zZWx2ZXMgYXJlIG90aGVyXG4gKiB0cmFuc2R1Y2VycyB0aGF0IGFyZSB0aGVuIGNvbXBvc2VkIGludG8gYSBzaW5nbGUgdHJhbnNkdWNlciwgd2hpY2ggaXMgdGhlblxuICogcmV0dXJuZWQuIFRoZSB2YWx1ZXMgdGhhdCBhcmUgcHJvZHVjZWQgYXJlIHNlbGRvbSBvZiBjb25zZXF1ZW5jZSB0byB0aGUgZW5kXG4gKiB1c2VyOyB0aGVzZSBmdW5jdGlvbnMgZXhpc3QgdG8gYmUgcGFzc2VkIHRvIG90aGVyIGZ1bmN0aW9ucyB0aGF0IGRlYWwgd2l0aFxuICogdHJhbnNkdWNlcnMuXG4gKlxuICogQGNhbGxiYWNrIFRyYW5zZHVjZXJcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y29yZVxuICogQHBhcmFtIHttb2R1bGU6Y29yZS5UcmFuc2R1Y2VyRnVuY3Rpb259IHhmb3JtIEEgdHJhbnNkdWNlciB0byBjaGFpbiB0aGlzXG4gKiAgICAgdHJhbnNkdWNlciB0by5cbiAqIEByZXR1cm4ge21vZHVsZTpjb3JlLlRyYW5zZHVjZXJGdW5jdGlvbn0gQSBuZXcgdHJhbnNkdWNlciBjb25zaXN0aW5nIG9mIHRoZVxuICogICAgIGNvbXBvc2l0aW9uIG9mIHRoaXMgb25lIGFuZCBgeGZvcm1gLlxuICovXG5cbi8qKlxuICogQW4gb2JqZWN0IGNvbnRhaW5pbmcgYWxsIG9mIHRoZSBuZWNlc3NhcnkgZnVuY3Rpb24gcHJvcGVydGllcyBmb3JcbiAqIHRyYW5zZm9ybWluZyBkYXRhIGFuZCB0aGVuIHJlZHVjaW5nIGl0IGludG8gYW4gb3V0cHV0IHZhbHVlLiBUaGlzIGlzIHRoZSBzYW1lXG4gKiBhcyB7QGxpbmsgbW9kdWxlOmNvcmUuUmVkdWNlcnxSZWR1Y2VyfSBleGNlcHQgdGhhdCB0aGUgYGluaXRgIHByb3BlcnR5IGlzIG5vdFxuICogb3B0aW9uYWwuXG4gKlxuICogQHR5cGVkZWYgVHJhbnNkdWNlclxuICogQG1lbWJlcm9mIG1vZHVsZTpjb3JlXG4gKiBAcHJvcGVydHkge21vZHVsZTpjb3JlLkluaXRGdW5jdGlvbn0gU3ltYm9sLmZvcihcInRyYW5zZHVjZXIvaW5pdFwiKSBUaGVcbiAqICAgICB0cmFuc2R1Y2VyJ3MgaW5pdCBmdW5jdGlvbi5cbiAqIEBwcm9wZXJ0eSB7bW9kdWxlOmNvcmUuU3RlcEZ1bmN0aW9ufSBTeW1ib2wuZm9yKFwidHJhbnNkdWNlci9zdGVwXCIpIFRoZVxuICogICAgIHRyYW5zZHVjZXIncyBzdGVwIGZ1bmN0aW9uLlxuICogQHByb3BlcnR5IHttb2R1bGU6Y29yZS5SZXN1bHRGdW5jdGlvbn0gU3ltYm9sLmZvcihcInRyYW5zZHVjZXIvcmVzdWx0XCIpIFRoZVxuICogICAgIHRyYW5zZHVjZXIncyByZXN1bHQgZnVuY3Rpb24uXG4gKi9cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG4vKipcbiAqIEZ1bmN0aW9ucyB0byBoZWxwIHdpdGggaXRlcmF0aW9uIG92ZXIgaXRlcmFibGUgb2JqZWN0cyBhbmQgcGxhaW4gb2JqZWN0cy5cbiAqXG4gKiBAbW9kdWxlIGNvcmUvaXRlcmF0aW9uXG4gKiBAcHJpdmF0ZVxuICovXG5cbmltcG9ydCB7IGlzSW1wbGVtZW50ZWQgfSBmcm9tIFwibW9kdWxlcy9wcm90b2NvbFwiO1xuaW1wb3J0IHsgaXNGdW5jdGlvbiwgaXNPYmplY3QsIGlzR2VuZXJhdG9yRnVuY3Rpb24gfSBmcm9tIFwibW9kdWxlcy91dGlsc1wiO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gaXRlcmF0b3Igb3ZlciBhbiBvYmplY3QuXG4gKlxuICogRGV0YWlscyBhYm91dCB0aGlzIGZ1bmN0aW9uIGFyZSBpbmNsdWRlZCBpbiB0aGUgZG9jdW1lbnRhdGlvbiBmb3JcbiAqIHtAbGluayBtb2R1bGU6Y29yZS5pdGVyYXRvcnxpdGVyYXRvcn0uXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IG9iaiBUaGUgb2JqZWN0IGJlaW5nIGl0ZXJhdGVkIG92ZXIuXG4gKiBAcGFyYW0ge21vZHVsZTpjb3JlLlNvcnRGdW5jdGlvbn0gW3NvcnRGbl0gQW4gb3B0aW9uYWwgZnVuY3Rpb24gdXNlZCB0byBzb3J0XG4gKiAgICAgdGhlIG9iamVjdCBrZXlzIGJlZm9yZSBpdGVyYXRpb24uIElmIGl0IGlzbid0IHByb3ZpZGVkLCB0aGUga2V5cyB3aWxsIGJlXG4gKiAgICAgc29ydGVkIGluIHRoZSBzYW1lIG9yZGVyIGFzIGBPYmplY3Qua2V5cyhvYmopYCB3b3VsZCBzb3J0IHRoZW0uXG4gKiBAcmV0dXJucyB7bW9kdWxlOmNvcmUuSXRlcmF0b3J9IEFuIGl0ZXJhdG9yIG92ZXIgdGhlIHByb3BlcnRpZXMgb2YgYG9iamAuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBvYmplY3RJdGVyYXRvcihvYmosIHNvcnRGbikge1xuICByZXR1cm4gKGZ1bmN0aW9uKigpIHtcbiAgICBjb25zdCBrZXlzID1cbiAgICAgIHR5cGVvZiBzb3J0Rm4gPT09IFwiZnVuY3Rpb25cIlxuICAgICAgICA/IE9iamVjdC5rZXlzKG9iaikuc29ydChzb3J0Rm4pXG4gICAgICAgIDogT2JqZWN0LmtleXMob2JqKTtcbiAgICBsZXQgaW5kZXggPSAwO1xuXG4gICAgd2hpbGUgKGluZGV4IDwga2V5cy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IGsgPSBrZXlzW2luZGV4KytdO1xuICAgICAgeWllbGQgeyBba106IG9ialtrXSB9O1xuICAgIH1cbiAgfSkoKTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuIGl0ZXJhdG9yIG92ZXIgYSBmdW5jdGlvbi5cbiAqXG4gKiBEZXRhaWxzIGFib3V0IHRoaXMgZnVuY3Rpb24gYXJlIGluY2x1ZGVkIGluIHRoZSBkb2N1bWVudGF0aW9uIGZvclxuICoge0BsaW5rIG1vZHVsZTpjb3JlLml0ZXJhdG9yfGl0ZXJhdG9yfS5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTpjb3JlLkl0ZXJhYmxlRnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcmV0dXJucyB7bW9kdWxlOmNvcmUuSXRlcmF0b3J9IEFuIGl0ZXJhdG9yIG92ZXIgdGhlIHJldHVybiB2YWx1ZXMgb2YgYGZuYC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGZ1bmN0aW9uSXRlcmF0b3IoZm4pIHtcbiAgcmV0dXJuIChmdW5jdGlvbiooKSB7XG4gICAgbGV0IGN1cnJlbnQ7XG4gICAgbGV0IGluZGV4ID0gMDtcblxuICAgIGZvciAoOzspIHtcbiAgICAgIGN1cnJlbnQgPSBmbihpbmRleCsrLCBjdXJyZW50KTtcbiAgICAgIGlmICh0eXBlb2YgY3VycmVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHlpZWxkIGN1cnJlbnQ7XG4gICAgfVxuICB9KSgpO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYW4gaXRlcmF0b3Igb3ZlciB0aGUgcHJvdmlkZWQgdmFsdWUuXG4gKlxuICogRm9yIGNvbGxlY3Rpb25zIHRoYXQgaW1wbGVtZW50IHRoZSBpdGVyYWJsZSBwcm90b2NvbCwgaXQncyBhcyBzaW1wbGUgYXNcbiAqIHJldHVybmluZyB0aGUgaXRlcmF0b3IgYWxyZWFkeSBkZWZpbmVkIGZvciB0aGF0IGNvbGxlY3Rpb24uXG4gKlxuICogYGBgXG4gKiBjb25zdCBpdGVyID0gaXRlcmF0b3IoWzEsIDIsIDNdKTtcbiAqIGNvbnNvbGUubG9nKGl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiAxXG4gKiBjb25zb2xlLmxvZyhpdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4gMlxuICogY29uc29sZS5sb2coaXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IDNcbiAqIGNvbnNvbGUubG9nKGl0ZXIubmV4dCgpLmRvbmUpOyAgICAvLyAtPiB0cnVlXG4gKiBgYGBcbiAqXG4gKiBPYmplY3RzIGFyZSBzcGVjaWFsbHkgc3VwcG9ydGVkIHRvIHJldHVybiBhbiBpdGVyYXRvciBhcyB3ZWxsLCBldmVuIHRob3VnaFxuICogdGhleSBkb24ndCBuYXRpdmVseSBzdXBwb3J0IHRoZSBpdGVyYWJsZSBwcm90b2NvbC4gVGhlIGl0ZXJhdG9yJ3MgYG5leHRgXG4gKiBmdW5jdGlvbiBwcm92aWRlcyBzaW5nbGUtcHJvcGVydHkgb2JqZWN0cywgb25lIGZvciBlYWNoIHByb3BlcnR5IGluIHRoZVxuICogb3JpZ2luYWwgb2JqZWN0LCBvcmRlcmVkIGluIHRoZSBzdGFuZGFyZCBwb3N0LUVTNiBvcmRlciBmb3IgaXRlcmF0aW5nIG92ZXJcbiAqIG9iamVjdCBrZXlzOlxuICpcbiAqIDEuIEtleXMgdGhhdCBhcmUgaW50ZWdlcnMsIGluIGFzY2VuZGluZyBudW1lcmljYWwgb3JkZXJcbiAqIDIuIEFsbCBvdGhlciBzdHJpbmcga2V5cywgaW4gdGhlIG9yZGVyIGluIHdoaWNoIHRoZXkgd2VyZSBhZGRlZCB0byB0aGUgb2JqZWN0XG4gKiAzLiBBbGwgc3ltYm9sIGtleXMsIGluIHRoZSBvcmRlciBpbiB3aGljaCB0aGV5IHdlcmUgYWRkZWQgdG8gdGhlIG9iamVjdFxuICpcbiAqIElmIGEgZGlmZmVyZW50IG9yZGVyIGlzIG5lZWRlZCwgdGhpcyBmdW5jdGlvbiB0YWtlcyBhIHNlY29uZCBhcmd1bWVudCwgYSBzb3J0XG4gKiBmdW5jdGlvbiwgdGhhdCBhZmZlY3RzIG9iamVjdHMgb25seS4gSXQgaXMgYSBzdGFuZGFyZCBmdW5jdGlvbiB0aGF0IHdvdWxkIGJlXG4gKiBwYXNzZWQgdG8gYEFycmF5LnByb3RvdHlwZS5zb3J0YCBhbmQgc29ydHMgdGhlIGtleXMgYWNjb3JkaW5nbHkuXG4gKlxuICogYGBgXG4gKiBjb25zdCBhbHBoYSA9IChhLCBiKSA9PiAoYSA8IGIgPyAtMSA6IGIgPCBhID8gMSA6IDApO1xuICogY29uc3Qgb2JqID0geyBjOiAxLCBhOiAyLCBiOiAzIH07XG4gKlxuICogY29uc3Qgb2JqSXRlciA9IGl0ZXJhdG9yKG9iaik7XG4gKiBjb25zb2xlLmxvZyhvYmpJdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4geyBjOiAxIH1cbiAqIGNvbnNvbGUubG9nKG9iakl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiB7IGE6IDIgfVxuICogY29uc29sZS5sb2cob2JqSXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IHsgYjogMyB9XG4gKlxuICogY29uc3Qgc29ydGVkSXRlciA9IGl0ZXJhdG9yKG9iaiwgYWxwaGEpO1xuICogY29uc29sZS5sb2cob2JqSXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IHsgYTogMiB9XG4gKiBjb25zb2xlLmxvZyhvYmpJdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4geyBiOiAzIH1cbiAqIGNvbnNvbGUubG9nKG9iakl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiB7IGM6IDEgfVxuICogYGBgXG4gKlxuICogQWRkaXRpb25hbGx5LCB0aGVyZSBpcyBzcGVjaWFsIHN1cHBvcnQgZm9yIHBhc3NpbmcgYSBmdW5jdGlvbiB0byB0aGlzXG4gKiBmdW5jdGlvbi4gVGhlIGl0ZXJhdG9yIHJldHVybmVkIHJ1bnMgdGhhdCBmdW5jdGlvbiBmb3IgZWFjaCBjYWxsIHRvIGBuZXh0YC5cbiAqIFRoYXQgZnVuY3Rpb24gaXMgcHJvdmlkZWQgdHdvIGFyZ3VtZW50czogdGhlIGluZGV4IChzdGFydGluZyBhdCBgMGAgZm9yIHRoZVxuICogZmlyc3QgY2FsbCB0byBgbmV4dGAgYW5kIGluY3JlYXNpbmcgYnkgMSBmb3IgZWFjaCBjYWxsIHRvIGBuZXh0YCBhZnRlcikgYW5kXG4gKiB0aGUgcmV0dXJuIHZhbHVlIG9mIHRoZSBwcmV2aW91cyBjYWxsIHRvIGBuZXh0YCAoZm9yIHRoZSBmaXJzdCBjYWxsIHRvXG4gKiBgbmV4dGAsIHRoaXMgd2lsbCBiZSBgdW5kZWZpbmVkYCkuIFRoZSBpdGVyYXRpb24gd2lsbCBjb250aW51ZSB1bnRpbCB0aGVcbiAqIGZpcnN0IHRpbWUgdGhlIGl0ZXJhdGVkIGZ1bmN0aW9uIHJldHVybnMgYHVuZGVmaW5lZGA7IGF0IHRoYXQgcG9pbnQgdGhlXG4gKiBpdGVyYXRvciB3aWxsIHRlcm1pbmF0ZSBhbmQgcmV0dXJuIGB7IGRvbmU6IHRydWUgfWAgb2ZmIHN1YnNlcXVlbnQgYG5leHRgXG4gKiBjYWxscy5cbiAqXG4gKiBgYGBcbiAqIGNvbnN0IGNvbnN0SXRlciA9IGl0ZXJhdG9yKCgpID0+IDYpO1xuICogY29uc29sZS5sb2coY29uc3RJdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4gNlxuICogY29uc29sZS5sb2coY29uc3RJdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4gNlxuICogLy8gVGhpcyB3aWxsIGNvbnRpbnVlIGZvcmV2ZXIsIGFzIGxvbmcgYXMgYG5leHRgIGtlZXBzIGdldHRpbmcgY2FsbGVkXG4gKlxuICogY29uc3QgaW5kZXhJdGVyID0gaXRlcmF0b3IoeCA9PiB4ICogeCk7XG4gKiBjb25zb2xlLmxvZyhpbmRleEl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiAwO1xuICogY29uc29sZS5sb2coaW5kZXhJdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4gMTtcbiAqIGNvbnNvbGUubG9nKGluZGV4SXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IDQ7XG4gKiBjb25zb2xlLmxvZyhpbmRleEl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiA5O1xuICogLy8gVGhpcyB3aWxsIGNvbnRpbnVlIGZvcmV2ZXIgb3IgdW50aWwgdGhlIG51bWJlcnMgZ2V0IHRvbyBiaWcgZm9yXG4gKiAvLyBKYXZhU2NyaXB0IHRvIGRlYWwgd3RpaFxuICpcbiAqIC8vIFVzaW5nIGEgZGVmYXVsdCB2YWx1ZSBmb3IgdGhlIGBsYXN0YCBwYXJhbWV0ZXIsIHdoaWNoIHNldHMgaXRzIHZhbHVlXG4gKiAvLyBmb3IgdGhlIGZpcnN0IHJ1biB3aGVuIGl0IGlzIG5vcm1hbGx5IGB1bmRlZmluZWRgXG4gKiBjb25zdCBsYXN0SXRlciA9IGl0ZXJhdG9yKCh4LCBsYXN0ID0gMSkgPT4gbGFzdCAqICh4ICsgMSkpOyAvLyBmYWN0b3JpYWwhXG4gKiBjb25zb2xlLmxvZyhsYXN0SXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IDFcbiAqIGNvbnNvbGUubG9nKGxhc3RJdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4gMlxuICogY29uc29sZS5sb2cobGFzdEl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiA2XG4gKiBjb25zb2xlLmxvZyhsYXN0SXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IDI0XG4gKiAvLyBBZ2FpbiwgcnVucyBmb3JldmVyLCB0aG91Z2ggZmFjdG9yaWFscyBnZXQgYmlnIHZlcnkgcXVpY2tseVxuICpcbiAqIC8vIEl0ZXJhdG9ycyB0ZXJtaW5hdGUgd2hlbiB0aGUgZnVuY3Rpb24gcmV0dXJucyBgdW5kZWZpbmVkYFxuICogY29uc3Qgc3RvcEl0ZXIgPSBpdGVyYXRvcih4ID0+IHggPCAyID8geCA6IHVuZGVmaW5lZCk7XG4gKiBjb25zb2xlLmxvZyhzdG9wSXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IDBcbiAqIGNvbnNvbGUubG9nKHN0b3BJdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4gMVxuICogY29uc29sZS5sb2coc3RvcEl0ZXIubmV4dCgpLmRvbmUpOyAgICAvLyAtPiB0cnVlXG4gKiBgYGBcbiAqXG4gKiBJZiB0aGUgcHJvdmlkZWQgdmFsdWUgaXMgbm90IGFjdHVhbGx5IGl0ZXJhYmxlIChvciBhbiBvYmplY3Qgb3IgYSBmdW5jdGlvbiksXG4gKiBgbnVsbGAgaXMgcmV0dXJuZWQgaW4gcGxhY2Ugb2YgdGhlIGl0ZXJhdG9yLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y29yZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY3JlYXRlIGFuIGl0ZXJhdG9yIG92ZXIuXG4gKiBAcGFyYW0ge21vZHVsZTpjb3JlLlNvcnRGdW5jdGlvbn0gW3NvcnRGbl0gQW4gb3B0aW9uYWwgc29ydCBmdW5jdGlvbiBmb3JcbiAqICAgICBzb3J0aW5nIHRoZSBrZXlzIG9mIGFuIG9iamVjdCBiZWZvcmUgaXRlcmF0aW9uLiBJdCBpcyBpZ25vcmVkIGlmIGB2YWx1ZWBcbiAqICAgICBpc24ndCBhIHBsYWluIG9iamVjdC5cbiAqIEByZXR1cm5zIHttb2R1bGU6Y29yZS5JdGVyYXRvcn0gQW4gaXRlcmF0b3Igb3ZlciBgdmFsdWVgLlxuICovXG5mdW5jdGlvbiBpdGVyYXRvcih2YWx1ZSwgc29ydEZuID0gbnVsbCkge1xuICBzd2l0Y2ggKHRydWUpIHtcbiAgICBjYXNlIGlzRnVuY3Rpb24odmFsdWVbU3ltYm9sLml0ZXJhdG9yXSk6XG4gICAgY2FzZSBpc0dlbmVyYXRvckZ1bmN0aW9uKHZhbHVlW1N5bWJvbC5pdGVyYXRvcl0pOlxuICAgICAgcmV0dXJuIHZhbHVlW1N5bWJvbC5pdGVyYXRvcl0oKTtcbiAgICBjYXNlIGlzRnVuY3Rpb24odmFsdWUpOlxuICAgICAgcmV0dXJuIGZ1bmN0aW9uSXRlcmF0b3IodmFsdWUpO1xuICAgIGNhc2UgaXNPYmplY3QodmFsdWUpOlxuICAgICAgcmV0dXJuIG9iamVjdEl0ZXJhdG9yKHZhbHVlLCBzb3J0Rm4pO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgcGFzc2VkIG9iamVjdCBpcyBpdGVyYWJsZSwgaW4gdGVybXMgb2Ygd2hhdCAnaXRlcmFibGUnXG4gKiBtZWFucyB0byB0aGlzIGxpYnJhcnkuIEluIG90aGVyIHdvcmRzLCB2YWx1ZXMgaW1wbGVtZW50aW5nIHRoZSBgaXRlcmFibGVgXG4gKiBwcm90b2NvbCBhbmQgcGxhaW4gb2JqZWN0cyByZXR1cm4gYHRydWVgLCB3aGlsZSBldmVyeXRoaW5nIGVsc2UgcmV0dXJuc1xuICogYGZhbHNlYC4gVGhpcyBkb2VzIG5vdCByZXR1cm4gYHRydWVgIGZvciBmdW5jdGlvbnMgZXZlbiB0aG91Z2hcbiAqIHtAbGluayBtb2R1bGU6Y29yZS5pdGVyYXRvcnxpdGVyYXRvcn0gY2FuIHByb2R1Y2UgYW4gaXRlcmF0b3IgZm9yIHRoZW0sXG4gKiBiZWNhdXNlIG5vdCBhbGwgZnVuY3Rpb25zIHdvcmsgd2VsbCB3aXRoXG4gKiB7QGxpbmsgbW9kdWxlOmNvcmUuaXRlcmF0b3J8aXRlcmF0b3J9LlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y29yZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gdGVzdCBmb3IgaXRlcmFiaWxpdHkuXG4gKiBAcmV0dXJuIHtib29sZWFufSBFaXRoZXIgYHRydWVgIGlmIHRoZSB2YWx1ZSBpcyBpdGVyYWJsZVxuICogICAgIChge0BsaW5rIG1vZHVsZTpjb3JlLml0ZXJhdG9yfWAgd2lsbCByZXR1cm4gYW4gaXRlcmF0b3IgZm9yIGl0KSBvclxuICogICAgIGBmYWxzZWAgaWYgaXQgaXMgbm90LlxuICovXG5mdW5jdGlvbiBpc0l0ZXJhYmxlKHZhbHVlKSB7XG4gIHJldHVybiBpc0ltcGxlbWVudGVkKHZhbHVlLCBcIml0ZXJhdG9yXCIpIHx8IGlzT2JqZWN0KHZhbHVlKTtcbn1cblxuZXhwb3J0IHsgaXRlcmF0b3IsIGlzSXRlcmFibGUgfTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG4vKipcbiAqIFByb3RvY29scyBmb3IgaXRlcmF0aW9uIGFuZCByZWR1Y3Rpb24uXG4gKlxuICogVGhlIG5hbWVzIGZvciB0aGVzZSBwcm90b2NvbHMgY2FtZSBmcm9tIGEgZGlzY3Vzc2lvbiB0aHJlYWRcbiAqICh7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2NvZ25pdGVjdC1sYWJzL3RyYW5zZHVjZXJzLWpzL2lzc3Vlcy8yMH0pIGZyb20gYVxuICogdGltZSB3aGVuIHRyYW5zZHVjZXJzIHdlcmUgdmVyeSBtdWNoIGluIHRoZSBmb3JlZnJvbnQuIEl0J3MgdGhlIGNsb3Nlc3QgdGhpbmdcbiAqIHRoZXJlIGlzIHRvIGEgc3RhbmRhcmQsIHNvIGl0IHdhcyBhZG9wdGVkIGhlcmUuXG4gKlxuICogVGhlc2UgYXJlIHRoZSBzYW1lIHN5bWJvbHMgYXMgYXZhaWxhYmxlIGluIG15IHRyYW5zZHVjZXIgbGlicmFyeS4gVGhleSBhcmVcbiAqIHB1YmxpY2x5IGF2YWlsYWJsZSBmcm9tIHRoZXJlLlxuICpcbiAqIEBtb2R1bGUgY29yZS9wcm90b2NvbFxuICogQHByaXZhdGVcbiAqL1xuXG5pbXBvcnQgeyBpc0Z1bmN0aW9uLCBpc0dlbmVyYXRvckZ1bmN0aW9uIH0gZnJvbSBcIm1vZHVsZXMvdXRpbHNcIjtcblxuLyoqXG4gKiBUaGUgbWFwcGluZyBvZiBwcm90b2NvbCBuYW1lcyB0byB0aGVpciByZXNwZWN0aXZlIHByb3BlcnR5IGtleSBuYW1lcy4gVGhlXG4gKiB2YWx1ZXMgb2YgdGhpcyBtYXAgd2lsbCBkZXBlbmQgb24gd2hldGhlciBzeW1ib2xzIGFyZSBhdmFpbGFibGUuXG4gKlxuICogQHR5cGVkZWYge29iamVjdH0gUHJvdG9jb2xNYXBcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y29yZVxuICogQHByb3BlcnR5IHtTeW1ib2x9IGluaXQgVGhlIGB0cmFuc2R1Y2VyL2luaXRgIHByb3RvY29sLiBUaGlzIGlzIHVzZWRcbiAqICAgICB0byBtYXJrIGZ1bmN0aW9ucyB0aGF0IGluaXRpYWxpemUgYSB0YXJnZXQgY29sbGVjdGlvbiBiZWZvcmUgYWRkaW5nIGl0ZW1zXG4gKiAgICAgdG8gaXQuXG4gKiBAcHJvcGVydHkge1N5bWJvbH0gc3RlcCBUaGUgYHRyYW5zZHVjZXIvc3RlcGAgcHJvdG9jb2wuIFRoaXMgaXMgdXNlZFxuICogICAgIHRvIG1hcmsgZnVuY3Rpb25zIHRoYXQgYXJlIHVzZWQgaW4gdGhlIHRyYW5zZHVjZXIncyBzdGVwIHByb2Nlc3MsIHdoZXJlXG4gKiAgICAgb2JqZWN0cyBhcmUgYWRkZWQgdG8gdGhlIHRhcmdldCBjb2xsZWN0aW9uIG9uZSBhdCBhIHRpbWUuXG4gKiBAcHJvcGVydHkge1N5bWJvbH0gcmVzdWx0IFRoZSBgdHJhbnNkdWNlci9yZXN1bHRgIHByb3RvY29sLiBUaGlzIGlzXG4gKiAgICAgdXNlZCB0byBtYXJrIGZ1bmN0aW9ucyB0aGF0IHRha2UgdGhlIGZpbmFsIHJlc3VsdCBvZiB0aGUgc3RlcCBwcm9jZXNzIGFuZFxuICogICAgIHJldHVybiB0aGUgZmluYWwgZm9ybSB0byBiZSBvdXRwdXQuIFRoaXMgaXMgb3B0aW9uYWw7IGlmIHRoZSB0cmFuc2R1Y2VyXG4gKiAgICAgZG9lcyBub3Qgd2FudCB0byB0cmFuc2Zvcm0gdGhlIGZpbmFsIHJlc3VsdCwgaXQgc2hvdWxkIGp1c3QgcmV0dXJuIHRoZVxuICogICAgIHJlc3VsdCBvZiBpdHMgY2hhaW5lZCB0cmFuc2R1Y2VyJ3MgYHJlc3VsdGAgZnVuY3Rpb24uXG4gKiBAcHJvcGVydHkge1N5bWJvbH0gcmVkdWNlZCBUaGUgYHRyYW5zZHVjZXIvcmVkdWNlZGAgcHJvdG9jb2wuIFRoZVxuICogICAgIHByZXNlbmNlIG9mIHRoaXMga2V5IG9uIGFuIG9iamVjdCBpbmRpY2F0ZXMgdGhhdCBpdHMgdHJhbnNmb3JtYXRpb24gaGFzXG4gKiAgICAgYmVlbiBjb21wbGV0ZWQuIEl0IGlzIHVzZWQgaW50ZXJuYWxseSB0byBtYXJrIGNvbGxlY3Rpb25zIHdob3NlXG4gKiAgICAgdHJhbnNmb3JtYXRpb25zIGNvbmNsdWRlIGJlZm9yZSBldmVyeSBvYmplY3QgaXMgaXRlcmF0ZWQgb3ZlciAoYXMgaW5cbiAqICAgICBge0BsaW5rIHhkdWNlLnRha2V9YCB0cmFuc2R1Y2Vycy4pIEl0IGlzIG9mIGxpdHRsZSB1c2UgYmV5b25kIHRyYW5zZHVjZXJcbiAqICAgICBhdXRob3JpbmcuXG4gKiBAcHJvcGVydHkge1N5bWJvbH0gdmFsdWUgVGhlIGB0cmFuc2R1Y2VyL3ZhbHVlYCBwcm90b2NvbC4gVGhpcyBpc1xuICogICAgIHVzZWQgaW50ZXJuYWxseSB0byBtYXJrIHByb3BlcnRpZXMgdGhhdCBjb250YWluIHRoZSB2YWx1ZSBvZiBhIHJlZHVjZWRcbiAqICAgICB0cmFuc2Zvcm1hdGlvbi4gSXQgaXMgb2YgbGl0dGxlIHVzZSBiZXlvbmQgdHJhbnNkdWNlciBhdXRob3JpbmcuXG4gKi9cblxuLyoqXG4gKiBUaGUgbWFwcGluZyBvZiBwcm90b2NvbCBuYW1lcyB0byB0aGVpciByZXNwZWN0aXZlIHByb3BlcnR5IGtleSBuYW1lcy5cbiAqXG4gKiBAdHlwZSB7bW9kdWxlOmNvcmUuUHJvdG9jb2xNYXB9XG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNvcmVcbiAqL1xuY29uc3QgcHJvdG9jb2xzID0gT2JqZWN0LmNyZWF0ZShudWxsLCB7XG4gIGluaXQ6IHtcbiAgICB2YWx1ZTogU3ltYm9sLmZvcihcInRyYW5zZHVjZXIvaW5pdFwiKVxuICB9LFxuICBzdGVwOiB7XG4gICAgdmFsdWU6IFN5bWJvbC5mb3IoXCJ0cmFuc2R1Y2VyL3N0ZXBcIilcbiAgfSxcbiAgcmVzdWx0OiB7XG4gICAgdmFsdWU6IFN5bWJvbC5mb3IoXCJ0cmFuc2R1Y2VyL3Jlc3VsdFwiKVxuICB9LFxuICByZWR1Y2VkOiB7XG4gICAgdmFsdWU6IFN5bWJvbC5mb3IoXCJ0cmFuc2R1Y2VyL3JlZHVjZWRcIilcbiAgfSxcbiAgdmFsdWU6IHtcbiAgICB2YWx1ZTogU3ltYm9sLmZvcihcInRyYW5zZHVjZXIvdmFsdWVcIilcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIGlzSW1wbGVtZW50ZWQob2JqLCBwcm90b2NvbCkge1xuICBpZiAob2JqID09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzd2l0Y2ggKHByb3RvY29sKSB7XG4gICAgY2FzZSBcIml0ZXJhdG9yXCI6XG4gICAgICByZXR1cm4gKFxuICAgICAgICBpc0Z1bmN0aW9uKG9ialtTeW1ib2wuaXRlcmF0b3JdKSB8fFxuICAgICAgICBpc0dlbmVyYXRvckZ1bmN0aW9uKG9ialtTeW1ib2wuaXRlcmF0b3JdKVxuICAgICAgKTtcbiAgICBjYXNlIFwiYXN5bmNJdGVyYXRvclwiOlxuICAgICAgcmV0dXJuIGlzR2VuZXJhdG9yRnVuY3Rpb24ob2JqW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSk7XG4gICAgY2FzZSBcInJlZHVjZWRcIjpcbiAgICBjYXNlIFwidmFsdWVcIjpcbiAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iaikuaW5jbHVkZXMocHJvdG9jb2xzW3Byb3RvY29sXSk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBpc0Z1bmN0aW9uKG9ialtwcm90b2NvbHNbcHJvdG9jb2xdXSk7XG4gIH1cbn1cblxuZXhwb3J0IHsgcHJvdG9jb2xzLCBpc0ltcGxlbWVudGVkIH07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuLyoqXG4gKiBBIHNldCBvZiBmdW5jdGlvbnMgcmVsYXRlZCB0byB0aGUgcHJvZHVjaW5nIHJlZHVjZXIgb2JqZWN0cywgbWFya2luZ1xuICogY29tcGxldGVkIG9iamVjdHMsIGFuZCBwZXJmb3JtaW5nIGdlbmVyYWwgcmVkdWN0aW9uIG9wZXJhdGlvbnMuXG4gKlxuICogQG1vZHVsZSBjb3JlL3JlZHVjdGlvblxuICogQHByaXZhdGVcbiAqL1xuXG5pbXBvcnQgeyBpc0ltcGxlbWVudGVkLCBwcm90b2NvbHMgYXMgcCB9IGZyb20gXCJtb2R1bGVzL3Byb3RvY29sXCI7XG5pbXBvcnQgeyBpc1N0cmluZywgaXNBcnJheSwgaXNPYmplY3QsIGlzRnVuY3Rpb24gfSBmcm9tIFwibW9kdWxlcy91dGlsc1wiO1xuaW1wb3J0IHsgaXRlcmF0b3IgfSBmcm9tIFwibW9kdWxlcy9pdGVyYXRpb25cIjtcblxuLyoqXG4gKiBSZXR1cm5zIGFuIGluaXQgZnVuY3Rpb24gZm9yIGEgY29sbGVjdGlvbi4gVGhpcyBpcyBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhXG4gKiBuZXcsIGVtcHR5IGluc3RhbmNlIG9mIHRoZSBjb2xsZWN0aW9uIGluIHF1ZXN0aW9uLiBJZiB0aGUgY29sbGVjdGlvbiBkb2Vzbid0XG4gKiBzdXBwb3J0IHJlZHVjdGlvbiwgYG51bGxgIGlzIHJldHVybmVkLiBUaGlzIG1ha2VzIGNvbmRpdGlvbmFscyBhIGJpdCBlYXNpZXJcbiAqIHRvIHdvcmsgd2l0aC5cbiAqXG4gKiBJbiBvcmRlciB0byBzdXBwb3J0IHRoZSBjb252ZXJzaW9uIG9mIGZ1bmN0aW9ucyBpbnRvIHJlZHVjZXJzLCBmdW5jdGlvblxuICogc3VwcG9ydCBpcyBhbHNvIHByb3ZpZGVkLlxuICpcbiAqIEBwYXJhbSB7Kn0gY29sbGVjdGlvbiBBIGNvbGxlY3Rpb24gdG8gY3JlYXRlIGFuIGluaXQgZnVuY3Rpb24gZm9yLiBUaGlzIGNhblxuICogICAgIGJlIGFueXRoaW5nIHRoYXQgc3VwcG9ydHMgdGhlIGl0ZXJhdGlvbiBwcm90b2NvbCBvciBhIHBsYWluIG9iamVjdC5cbiAqIEByZXR1cm4ge21vZHVsZTpjb3JlLkluaXRGdW5jdGlvbn0gQSBmdW5jdGlvbiB0aGF0LCB3aGVuIGNhbGxlZCwgcmV0dXJucyBhblxuICogICAgIGluaXRpYWwgdmVyc2lvbiBvZiB0aGUgcHJvdmlkZWQgY29sbGVjdGlvbi4gSWYgdGhlIHByb3ZpZGVkIGNvbGxlY3Rpb24gaXNcbiAqICAgICBub3QgaXRlcmFibGUsIHRoZW4gYG51bGxgIGlzIHJldHVybmVkLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaW5pdChjb2xsZWN0aW9uKSB7XG4gIHN3aXRjaCAodHJ1ZSkge1xuICAgIGNhc2UgaXNJbXBsZW1lbnRlZChjb2xsZWN0aW9uLCBcImluaXRcIik6XG4gICAgICByZXR1cm4gY29sbGVjdGlvbltwLmluaXRdO1xuICAgIGNhc2UgaXNTdHJpbmcoY29sbGVjdGlvbik6XG4gICAgICByZXR1cm4gKCkgPT4gXCJcIjtcbiAgICBjYXNlIGlzQXJyYXkoY29sbGVjdGlvbik6XG4gICAgICByZXR1cm4gKCkgPT4gW107XG4gICAgY2FzZSBpc09iamVjdChjb2xsZWN0aW9uKTpcbiAgICAgIHJldHVybiAoKSA9PiAoe30pO1xuICAgIGNhc2UgaXNGdW5jdGlvbihjb2xsZWN0aW9uKTpcbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIHRocm93IEVycm9yKFwiaW5pdCBub3QgYXZhaWxhYmxlXCIpO1xuICAgICAgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgc3RlcCBmdW5jdGlvbiBmb3IgYSBjb2xsZWN0aW9uLiBUaGlzIGlzIGEgZnVuY3Rpb24gdGhhdCB0YWtlcyBhblxuICogYWNjdW11bGF0b3IgYW5kIGEgdmFsdWUgYW5kIHJldHVybnMgdGhlIHJlc3VsdCBvZiByZWR1Y2luZyB0aGUgdmFsdWUgaW50byB0aGVcbiAqIGFjY3VtdWxhdG9yLiBJZiB0aGUgY29sbGVjdGlvbiBkb2Vzbid0IHN1cHBvcnQgcmVkdWN0aW9uLCBgbnVsbGAgaXMgcmV0dXJuZWQuXG4gKiBUaGUgcmV0dXJuZWQgZnVuY3Rpb24gaXRzZWxmIHNpbXBseSByZWR1Y2VzIHRoZSBpbnB1dCBpbnRvIHRoZSB0YXJnZXRcbiAqIGNvbGxlY3Rpb24gd2l0aG91dCBtb2RpZnlpbmcgaXQuXG4gKlxuICogSW4gb3JkZXIgdG8gc3VwcG9ydCB0aGUgY29udmVyc2lvbiBvZiBmdW5jdGlvbnMgaW50byByZWR1Y2VycywgZnVuY3Rpb25cbiAqIHN1cHBvcnQgaXMgYWxzbyBwcm92aWRlZC5cbiAqXG4gKiBAcGFyYW0geyp9IGNvbGxlY3Rpb24gQSBjb2xsZWN0aW9uIHRvIGNyZWF0ZSBhIHN0ZXAgZnVuY3Rpb24gZm9yLiBUaGlzIGNhbiBiZVxuICogICAgIGFueXRoaW5nIHRoYXQgc3VwcG9ydHMgdGhlIGl0ZXJhdGlvbiBwcm90b2NvbCwgYSBwbGFpbiBvYmplY3QsIG9yIGFcbiAqICAgICBmdW5jdGlvbi5cbiAqIEByZXR1cm4ge21vZHVsZTpjb3JlLlN0ZXBGdW5jdGlvbn0gQSByZWR1Y3Rpb24gZnVuY3Rpb24gZm9yIHRoZSBwcm92aWRlZFxuICogICAgIGNvbGxlY3Rpb24gdGhhdCBzaW1wbHkgYWRkcyBhbiBlbGVtZW50IHRvIHRoZSB0YXJnZXQgY29sbGVjdGlvbiB3aXRob3V0XG4gKiAgICAgbW9kaWZ5aW5nIGl0LiBJZiB0aGUgcHJvdmlkZWQgY29sbGVjdGlvbiBpcyBub3QgaXRlcmFibGUsIGBudWxsYCBpc1xuICogICAgIHJldHVybmVkLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gc3RlcChjb2xsZWN0aW9uKSB7XG4gIHN3aXRjaCAodHJ1ZSkge1xuICAgIGNhc2UgaXNJbXBsZW1lbnRlZChjb2xsZWN0aW9uLCBcInN0ZXBcIik6XG4gICAgICByZXR1cm4gY29sbGVjdGlvbltwLnN0ZXBdO1xuXG4gICAgY2FzZSBpc1N0cmluZyhjb2xsZWN0aW9uKTpcbiAgICAgIHJldHVybiAoYWNjLCBpbnB1dCkgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGlzT2JqZWN0KGlucHV0KSA/IGlucHV0W09iamVjdC5rZXlzKGlucHV0KVswXV0gOiBpbnB1dDtcbiAgICAgICAgcmV0dXJuIGFjYyArIHZhbHVlO1xuICAgICAgfTtcblxuICAgIGNhc2UgaXNBcnJheShjb2xsZWN0aW9uKTpcbiAgICAgIHJldHVybiAoYWNjLCBpbnB1dCkgPT4ge1xuICAgICAgICBhY2MucHVzaChpbnB1dCk7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9O1xuXG4gICAgY2FzZSBpc09iamVjdChjb2xsZWN0aW9uKTpcbiAgICAgIHJldHVybiAoYWNjLCBpbnB1dCkgPT4ge1xuICAgICAgICBsZXQgdmFsdWUgPSBpbnB1dDtcblxuICAgICAgICBpZiAoIWlzT2JqZWN0KGlucHV0KSkge1xuICAgICAgICAgIC8vIGlmIHRoZSBpbnB1dCBpc24ndCBhbiBvYmplY3QsIHR1cm4gaXQgaW50byBhbiBvYmplY3Qgd2l0aCBhXG4gICAgICAgICAgLy8gbnVtZXJpY2FsIGtleSBvbmUgZ3JlYXRlciB0aGFuIHRoZSBtYXgga2V5IGFscmVhZHkgaW4gdGhlXG4gICAgICAgICAgLy8gYWNjdW11bGF0b3JcbiAgICAgICAgICBjb25zdCBtYXggPSBPYmplY3Qua2V5cyhhY2MpLnJlZHVjZSgoYSwgYikgPT4gTWF0aC5tYXgoYSwgYiksIC0xKTtcbiAgICAgICAgICB2YWx1ZSA9IHsgW21heCArIDFdOiBpbnB1dCB9O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgayA9IE9iamVjdC5rZXlzKHZhbHVlKVswXTtcbiAgICAgICAgYWNjW2tdID0gdmFsdWVba107XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9O1xuXG4gICAgY2FzZSBpc0Z1bmN0aW9uKGNvbGxlY3Rpb24pOlxuICAgICAgcmV0dXJuIChhY2MsIGlucHV0KSA9PiBjb2xsZWN0aW9uKGFjYywgaW5wdXQpO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbi8qKlxuICogUmV0dXJucyBhIHJlc3VsdCBmdW5jdGlvbiBmb3IgYSBjb2xsZWN0aW9uLiBUaGlzIGlzIGEgZnVuY3Rpb24gdGhhdCBwZXJmb3Jtc1xuICogYW55IGZpbmFsIHByb2Nlc3NpbmcgdGhhdCBzaG91bGQgYmUgZG9uZSBvbiB0aGUgcmVzdWx0IG9mIGEgcmVkdWN0aW9uLiBJZiB0aGVcbiAqIGNvbGxlY3Rpb24gZG9lc24ndCBzdXBwb3J0IHJlZHVjdGlvbiwgYG51bGxgIGlzIHJldHVybmVkLlxuICpcbiAqIEluIG9yZGVyIHRvIHN1cHBvcnQgdGhlIGNvbnZlcnNpb24gb2YgZnVuY3Rpb25zIGludG8gcmVkdWNlcnMsIGZ1bmN0aW9uXG4gKiBzdXBwb3J0IGlzIGFsc28gcHJvdmlkZWQuXG4gKlxuICogQHBhcmFtIHsqfSBjb2xsZWN0aW9uIEEgY29sbGVjdGlvbiB0byBjcmVhdGUgYSBzdGVwIGZ1bmN0aW9uIGZvci4gVGhpcyBjYW4gYmVcbiAqICAgICBhbnl0aGluZyB0aGF0IHN1cHBvcnRzIHRoZSBpdGVyYXRpb24gcHJvdG9jb2wsIGEgcGxhaW4gb2JqZWN0LCBvciBhXG4gKiAgICAgZnVuY3Rpb24uXG4gKiBAcmV0dXJuIHttb2R1bGU6Y29yZS5SZXN1bHRGdW5jdGlvbn0gQSBmdW5jdGlvbiB0aGF0LCB3aGVuIGdpdmVuIGEgcmVkdWNlZFxuICogICAgIGNvbGxlY3Rpb24sIHByb2R1Y2VzIHRoZSBmaW5hbCBvdXRwdXQuIElmIHRoZSBwcm92aWRlZCBjb2xsZWN0aW9uIGlzIG5vdFxuICogICAgIGl0ZXJhYmxlLCBgbnVsbGAgd2lsbCBiZSByZXR1cm5lZC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHJlc3VsdChjb2xsZWN0aW9uKSB7XG4gIHN3aXRjaCAodHJ1ZSkge1xuICAgIGNhc2UgaXNJbXBsZW1lbnRlZChjb2xsZWN0aW9uLCBcInJlc3VsdFwiKTpcbiAgICAgIHJldHVybiBjb2xsZWN0aW9uW3AucmVzdWx0XTtcbiAgICBjYXNlIGlzU3RyaW5nKGNvbGxlY3Rpb24pOlxuICAgIGNhc2UgaXNBcnJheShjb2xsZWN0aW9uKTpcbiAgICBjYXNlIGlzT2JqZWN0KGNvbGxlY3Rpb24pOlxuICAgIGNhc2UgaXNGdW5jdGlvbihjb2xsZWN0aW9uKTpcbiAgICAgIHJldHVybiB2YWx1ZSA9PiB2YWx1ZTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgcmVkdWNlciBvYmplY3QgZnJvbSBhIGZ1bmN0aW9uIG9yIGZyb20gYSBidWlsdC1pbiByZWR1Y2libGUgdHlwZVxuICogKGFycmF5LCBvYmplY3QsIG9yIHN0cmluZykuXG4gKlxuICogVG8gY3JlYXRlIGEgcmVkdWNlciBmb3IgYXJyYXlzLCBvYmplY3RzLCBvciBzdHJpbmdzLCBzaW1wbHkgcGFzcyBhbiBlbXB0eVxuICogdmVyc2lvbiBvZiB0aGF0IGNvbGxlY3Rpb24gdG8gdGhpcyBmdW5jdGlvbiAoZS5nLiwgYHRvUmVkdWNlcihbXSlgKS5cbiAqXG4gKiBUaGUgbm90YWJsZSB1c2UgZm9yIHRoaXMgZnVuY3Rpb24gdGhvdWdoIGlzIHRvIHR1cm4gYSByZWR1Y3Rpb24gZnVuY3Rpb24gaW50b1xuICogYSByZWR1Y2VyIG9iamVjdC4gVGhlIGZ1bmN0aW9uIGlzIGEgZnVuY3Rpb24gb2YgdHdvIHBhcmFtZXRlcnMsIGFuXG4gKiBhY2N1bXVsYXRvciBhbmQgYSB2YWx1ZSwgYW5kIHJldHVybnMgdGhlIGFjY3VtdWxhdG9yIHdpdGggdGhlIHZhbHVlIGluIGl0LlxuICogVGhpcyBpcyBleGFjdGx5IHRoZSBzYW1lIGtpbmQgb2YgZnVuY3Rpb24gdGhhdCBpcyBwYXNzZWQgdG8gcmVkdWN0aW9uXG4gKiBmdW5jdGlvbnMgbGlrZSBKYXZhU2NyaXB0J3MgYEFycmF5LnByb3RvdHlwZS5yZWR1Y2VgIGFuZCBMb2Rhc2gncyBgXy5yZWR1Y2VgLlxuICpcbiAqIE5vdGUgaW4gcGFydGljdWxhciB0aGF0IHRoZSBvdXRwdXQgb2YgdGhpcyByZWR1Y2VyIGRvZXMgbm90IG5lZWQgdG8gYmUgYVxuICogY29sbGVjdGlvbi4gSXQgY2FuIGJlIGFueXRoaW5nLiBXaGlsZSB0cmFuc2R1Y2luZyBub3JtYWxseSBpbnZvbHZlc1xuICogdHJhbnNmb3JtaW5nIG9uZSBjb2xsZWN0aW9uIGludG8gYW5vdGhlciwgaXQgbmVlZCBub3QgYmUgc28uIEZvciBleGFtcGxlLFxuICogaGVyZSBpcyBhIHJlZHVjZXIgdGhhdCB3aWxsIHJlc3VsdCBpbiBzdW1taW5nIG9mIHRoZSBjb2xsZWN0aW9uIHZhbHVlcy5cbiAqXG4gKiBgYGBcbiAqIGltcG9ydCB7IHRvUmVkdWNlciwgcmVkdWNlIH0gZnJvbSBcIkBjaGFua28veGR1Y2VcIjtcbiAqXG4gKiBjb25zdCBzdW1SZWR1Y2VyID0gdG9SZWR1Y2VyKChhY2MsIGlucHV0KSA9PiBhY2MgKyBpbnB1dCk7XG4gKiBjb25zdCBzdW0gPSByZWR1Y2UoWzEsIDIsIDMsIDQsIDVdLCBzdW1SZWR1Y2VyLCAwKTtcbiAqIGNvbnNvbGUubG9nKHN1bSk7ICAgLy8gLT4gMTVcbiAqIGBgYFxuICpcbiAqIFRoaXMgY2FuIGJlIGNvbWJpbmVkIHdpdGggdHJhbnNkdWNlcnMgYXMgd2VsbCwgYXMgaW4gdGhpcyBjYWxjdWxhdGlvbiBvZiB0aGVcbiAqIHN1bSBvZiB0aGUgKnNxdWFyZXMqIG9mIHRoZSBjb2xsZWN0aW9uIHZhbHVlcy5cbiAqXG4gKiBgYGBcbiAqIGltcG9ydCB7IHRvUmVkdWNlciwgdHJhbnNkdWNlIH0gZnJvbSBcIkBjaGFua28veGR1Y2VcIjtcbiAqIGltcG9ydCB7IG1hcCB9IGZyb20gXCJAY2hhbmtvL3RyYW5zZHVjZXJzXCI7XG4gKlxuICogY29uc3Qgc3VtUmVkdWNlciA9IHRvUmVkdWNlcigoYWNjLCBpbnB1dCkgPT4gYWNjICsgaW5wdXQpO1xuICogY29uc3Qgc3VtID0gdHJhbnNkdWNlKFsxLCAyLCAzLCA0LCA1XSwgbWFwKHggPT4geCAqIHgpLCBzdW1SZWR1Y2VyLCAwKTtcbiAqIGNvbnNvbGUubG9nKHN1bSk7ICAgLy8gLT4gNTVcbiAqIGBgYFxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y29yZVxuICogQHBhcmFtIHsqfSBjb2xsZWN0aW9uIEFuIGl0ZXJhYmxlIGNvbGxlY3Rpb24gb3IgYSByZWR1Y2VyIGZ1bmN0aW9uLlxuICogQHJldHVybiB7b2JqZWN0fSBBbiBvYmplY3QgY29udGFpbmluZyBwcm90b2NvbCBwcm9wZXJ0aWVzIGZvciBpbml0LCBzdGVwLCBhbmRcbiAqICAgICByZXN1bHQuIFRoaXMgb2JqZWN0IGlzIHN1aXRhYmxlIGZvciB1c2UgYXMgYSByZWR1Y2VyIG9iamVjdCAob25lIHByb3ZpZGVkXG4gKiAgICAgdG8gYHtAbGluayB4ZHVjZS5yZWR1Y2V8cmVkdWNlfWAgb3IgYHtAbGluayB4ZHVjZS50cmFuc2R1Y2V8dHJhbnNkdWNlfWApLlxuICogICAgIElmIHRoZSBwcm92aWRlZCBjb2xsZWN0aW9uIGlzIG5vdCBpdGVyYWJsZSwgYWxsIG9mIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXNcbiAqICAgICBvYmplY3Qgd2lsbCBiZSBgbnVsbGAuXG4gKi9cbmZ1bmN0aW9uIHRvUmVkdWNlcihjb2xsZWN0aW9uKSB7XG4gIHJldHVybiBPYmplY3QuZnJlZXplKHtcbiAgICBbcC5pbml0XTogaW5pdChjb2xsZWN0aW9uKSxcbiAgICBbcC5zdGVwXTogc3RlcChjb2xsZWN0aW9uKSxcbiAgICBbcC5yZXN1bHRdOiByZXN1bHQoY29sbGVjdGlvbilcbiAgfSk7XG59XG5cbi8qKlxuICogQSByZWR1Y2VyIG9iamVjdCBmb3IgYXJyYXlzLlxuICpcbiAqIEB0eXBlIHttb2R1bGU6Y29yZS5SZWR1Y2VyfVxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgQVJSQVlfUkVEVUNFUiA9IHRvUmVkdWNlcihbXSk7XG5cbi8qKlxuICogQSByZWR1Y2VyIG9iamVjdCBmb3Igb2JqZWN0cy5cbiAqXG4gKiBAdHlwZSB7bW9kdWxlOmNvcmUuUmVkdWNlcn1cbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IE9CSkVDVF9SRURVQ0VSID0gdG9SZWR1Y2VyKHt9KTtcblxuLyoqXG4gKiBBIHJlZHVjZXIgb2JqZWN0IGZvciBzdHJpbmdzLlxuICpcbiAqIEB0eXBlIHttb2R1bGU6Y29yZS5SZWR1Y2VyfVxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgU1RSSU5HX1JFRFVDRVIgPSB0b1JlZHVjZXIoXCJcIik7XG5cbi8qKlxuICogQ3JlYXRlcyBhIHRyYW5zZHVjZXIgZnJvbSBhIGZ1bmN0aW9uIGFuZCBhIHRyYW5zZHVjZXIgdG8gY2hhaW4gaXQgdG8uXG4gKlxuICogVGhpcyBpcyBpbiBtb3N0IHJlc3BlY3RzIGp1c3QgbGlrZSB7QGxpbmsgbW9kdWxlOmNvcmUudG9SZWR1Y2VyfHRvUmVkdWNlcn0sXG4gKiB3aXRoIHR3byBub3RhYmxlIGRpZmZlcmVuY2VzLiBPbmUgaXMgdGhhdCBpdCByZXF1aXJlcyBhIHRyYW5zZHVjZXIgdG8gY2hhaW5cbiAqIHRvLCBhbmQgaXQgZG9lcyB0aGUgY2hhaW5pbmcgYXMgYSBwYXJ0IG9mIGNyZWF0aW5nIHRoZSBuZXcgdHJhbnNkdWNlci4gVGhlXG4gKiBvdGhlciBpcyB0aGF0IGl0IGluY2x1ZGVzIGEgdXNhYmxlIGBpbml0YCBmdW5jdGlvbiwgd2hlcmUgcGFzc2luZyBhIGZ1bmN0aW9uXG4gKiB0byB7QGxpbmsgbW9kdWxlOmNvcmUudG9SZWR1Y2VyfHRvUmVkdWNlcn0gd291bGQgY3JlYXRlIGFuIGluaXQgZnVuY3Rpb24gdGhhdFxuICogdGhyb3dzIGFuIGVycm9yIGlmIGl0J3MgY2FsbGVkLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gYXBwbGllcyB0aGUgZ2l2ZW4gZnVuY3Rpb24gYXMgdGhlIGBzdGVwYCBmdW5jdGlvbiBvZiB0aGVcbiAqIHJldHVybmVkIHRyYW5zZHVjZXIsIGFuZCB0aGUgYGluaXRgIGFuZCBgcmVzdWx0YCBmdW5jdGlvbnMgc2ltcGx5IGNhbGwgdGhlXG4gKiBzYW1lIGZ1bmN0aW9ucyBpbiB0aGUgbmV4dCB0cmFuc2R1Y2VyIGRvd24gdGhlIGNoYWluLiBUaGlzIGlzIHByZWNpc2VseSB3aGF0XG4gKiAqbW9zdCogdHJhbnNkdWNlcnMgd2FudC4uLmBpbml0YCBhbmQgYHJlc3VsdGAgZnVuY3Rpb25zIGFyZSBub3JtYWxseSBoYW5kbGVkXG4gKiBieSB0aGUgcmVkdWNlciBhdCB0aGUgZW5kIG9mIHRoZSB0cmFuc2R1Y2VyIGNoYWluLi4uYnV0IGluIHRoZSByYXJlIGNhc2Ugd2hlblxuICogYGluaXRgIG9yIGByZXN1bHRgIG11c3QgZG8gbW9yZSB0aGFuIHRoaXMsIHRoZSB0cmFuc2R1Y2VyIG11c3QgYmUgY3JlYXRlZFxuICogbWFudWFsbHkuXG4gKlxuICogVGhpcyBmdW5jdGlvbiBkb2VzIG5vdCBhdXRvbWF0aWNhbGx5IGNoYWluIHRoZSBgc3RlcGAgZnVuY3Rpb24gdG8gdGhlIG5leHRcbiAqIG9uZSBkb3duIHRoZSBsaW5lLCBhcyB0aGF0IGNhbiBiZSBkb25lIGluIGFueSBudW1iZXIgb2YgZGlmZmVyZW50IHdheXMuIFRodXNcbiAqIHRoZSBmdW5jdGlvbiBpdHNlbGYgc2hvdWxkIGNhbGwgdGhlIGBzdGVwYCBmdW5jdGlvbiBpbiBgeGZvcm1gIGluIHdoYXRldmVyXG4gKiB3YXkgaXMgYXBwcm9wcmlhdGUuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjb3JlXG4gKiBAcGFyYW0ge21vZHVsZTpjb3JlLlN0ZXBGdW5jdGlvbn0gZm4gVGhlIHN0ZXAgZnVuY3Rpb24gZm9yIHRoZSB0cmFuc2R1Y2VyLlxuICogQHBhcmFtIHttb2R1bGU6Y29yZS5UcmFuc2R1Y2VyfSB4Zm9ybSBUaGUgbmV4dCB0cmFuc2R1Y2VyIG9iamVjdCBpbiB0aGVcbiAqICAgICBjaGFpbi5cbiAqIEByZXR1cm5zIHttb2R1bGU6Y29yZS5UcmFuc2R1Y2VyfSBBIG5ldyB0cmFuc2R1Y2VyLCBjaGFpbmluZyB0aGUgc3VwcGxpZWRcbiAqICAgICBmdW5jdGlvbiB0byB0aGUgc3VwcGxpZWQgdHJhbnNkdWNlci5cbiAqL1xuZnVuY3Rpb24gdG9UcmFuc2R1Y2VyKGZuLCB4Zm9ybSkge1xuICByZXR1cm4ge1xuICAgIFtwLmluaXRdKCkge1xuICAgICAgcmV0dXJuIHhmb3JtW3AuaW5pdF0oKTtcbiAgICB9LFxuXG4gICAgW3Auc3RlcF06IGZuLFxuXG4gICAgW3AucmVzdWx0XSh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHhmb3JtW3AucmVzdWx0XSh2YWx1ZSk7XG4gICAgfVxuICB9O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSByZWR1Y3Rpb24gZnVuY3Rpb24gZnJvbSBhIHRyYW5zZHVjZXIgYW5kIGEgcmVkdWNlci5cbiAqXG4gKiBUaGlzIHByb2R1Y2VzIGEgZnVuY3Rpb24gdGhhdCdzIHN1aXRhYmxlIGZvciBiZWluZyBwYXNzZWQgaW50byBvdGhlclxuICogbGlicmFyaWVzJyByZWR1Y2UgZnVuY3Rpb25zLCBzdWNoIGFzIEphdmFTY3JpcHQncyBgQXJyYXkucHJvdG90eXBlLnJlZHVjZWAgb3JcbiAqIExvZGFzaCdzIGBfLnJlZHVjZWAuIEl0IHJlcXVpcmVzIGJvdGggYSB0cmFuc2Zvcm1lciBhbmQgYSByZWR1Y2VyIGJlY2F1c2VcbiAqIHJlZHVjdGlvbiBmdW5jdGlvbnMgZm9yIHRob3NlIGxpYnJhcmllcyBtdXN0IGtub3cgaG93IHRvIGRvIGJvdGguIFRoZSByZWR1Y2VyXG4gKiBjYW4gYmUgYSBzdGFuZGFyZCByZWR1Y2VyIG9iamVjdCBsaWtlIHRoZSBvbmVzIHNlbnRcbiAqIHRvYHtAbGluayBtb2R1bGU6Y29yZS50cmFuc2R1Y2V8dHJhbnNkdWNlfWAgb3JcbiAqIGB7QGxpbmsgbW9kdWxlOmNvcmUucmVkdWNlfHJlZHVjZX1gLCBvciBpdCBjYW4gYmUgYSBwbGFpbiBmdW5jdGlvbiB0aGF0IHRha2VzXG4gKiB0d28gcGFyYW1ldGVycyBhbmQgcmV0dXJucyB0aGUgcmVzdWx0IG9mIHJlZHVjaW5nIHRoZSBzZWNvbmQgcGFyYW1ldGVyIGludG9cbiAqIHRoZSBmaXJzdC5cbiAqXG4gKiBJZiB0aGVyZSBpcyBubyBuZWVkIGZvciBhIHRyYW5zZm9ybWF0aW9uLCB0aGVuIHBhc3MgaW4gdGhlXG4gKiBge0BsaW5rIG1vZHVsZTp0cmFuc2R1Y2Vycy5pZGVudGl0eXxpZGVudGl0eX1gIHRyYW5zZHVjZXIuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjb3JlXG4gKiBAcGFyYW0ge21vZHVsZTpjb3JlLlJlZHVjZXJ9IHhmb3JtIEEgdHJhbnNkdWNlciBvYmplY3Qgd2hvc2Ugc3RlcCBmdW5jdGlvblxuICogICAgIHdpbGwgYmVjb21lIHRoZSByZXR1cm5lZCByZWR1Y3Rpb24gZnVuY3Rpb24uXG4gKiBAcGFyYW0geyhtb2R1bGU6Y29yZS5TdGVwRnVuY3Rpb258bW9kdWxlOmNvcmUuUmVkdWNlcil9IHJlZHVjZXIgQSByZWR1Y2VyXG4gKiAgICAgdGhhdCBrbm93cyBob3cgdG8gcmVkdWNlIHZhbHVlcyBpbnRvIGFuIG91dHB1dCBjb2xsZWN0aW9uLiBUaGlzIGNhblxuICogICAgIGVpdGhlciBiZSBhIHJlZHVjaW5nIGZ1bmN0aW9uIG9yIGEgdHJhbnNkdWNlciBvYmplY3Qgd2hvc2UgYHN0ZXBgXG4gKiAgICAgZnVuY3Rpb24ga25vd3MgaG93IHRvIHBlcmZvcm0gdGhpcyByZWR1Y3Rpb24uXG4gKiBAcmV0dXJucyB7bW9kdWxlOmNvcmUuU3RlcEZ1bmN0aW9ufSBBIGZ1bmN0aW9uIHRoYXQgaGFuZGxlcyBib3RoIHRoZVxuICogICAgIHRyYW5zZm9ybWF0aW9uIGFuZCB0aGUgcmVkdWN0aW9uIG9mIGEgdmFsdWUgb250byBhIHRhcmdldCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gdG9GdW5jdGlvbih4Zm9ybSwgcmVkdWNlcikge1xuICBjb25zdCByID0gdHlwZW9mIHJlZHVjZXIgPT09IFwiZnVuY3Rpb25cIiA/IHRvUmVkdWNlcihyZWR1Y2VyKSA6IHJlZHVjZXI7XG4gIGNvbnN0IHJlc3VsdCA9IHhmb3JtKHIpO1xuICByZXR1cm4gcmVzdWx0W3Auc3RlcF0uYmluZChyZXN1bHQpO1xufVxuXG4vKipcbiAqIE1hcmtzIGEgdmFsdWUgYXMgY29tcGxldGUuXG4gKlxuICogVGhpcyBpcyBkb25lIGJ5IHdyYXBwaW5nIHRoZSB2YWx1ZS4gVGhpcyBtZWFucyB0aHJlZSB0aGluZ3M6IGZpcnN0LCBhXG4gKiBjb21wbGV0ZSBvYmplY3QgbWF5IGJlIG1hcmtlZCBhcyBjb21wbGV0ZSBhZ2Fpbjsgc2Vjb25kLCBhIGNvbXBsZXRlIHZhbHVlXG4gKiBpc24ndCB1c2FibGUgd2l0aG91dCBiZWluZyB1bmNvbXBsZXRlZCBmaXJzdDsgYW5kIHRoaXJkIGFueSB0eXBlIG9mIHZhbHVlXG4gKiAoaW5jbHVkaW5nIGB1bmRlZmluZWRgKSBtYXkgYmUgbWFya2VkIGFzIGNvbXBsZXRlLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y29yZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gYmUgY29tcGxldGVkLlxuICogQHJldHVybiB7Kn0gQSBjb21wbGV0ZWQgdmVyc2lvbiBvZiB0aGUgcHJvdmlkZWQgdmFsdWUuIFRoaXMgcmVkdWN0aW9uIGlzXG4gKiAgICAgYWNoaWV2ZWQgYnkgd3JhcHBpbmcgdGhlIHZhbHVlIGluIGEgbWFya2VyIG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gY29tcGxldGUodmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBbcC5yZWR1Y2VkXTogdHJ1ZSxcbiAgICBbcC52YWx1ZV06IHZhbHVlXG4gIH07XG59XG5cbi8qKlxuICogUmVtb3ZlcyB0aGUgY29tcGxldGUgc3RhdHVzIGZyb20gYSBjb21wbGV0ZWQgdmFsdWUuXG4gKlxuICogVGhpcyBmdW5jdGlvbiBpcyBpbnRlbmRlZCB0byBiZSB1c2VkIHdoZW4gaXQncyBjZXJ0YWluIHRoYXQgYSB2YWx1ZSBpc1xuICogYWxyZWFkeSBtYXJrZWQgYXMgY29tcGxldGUuIElmIGl0IGlzIG5vdCwgYHVuZGVmaW5lZGAgd2lsbCBiZSByZXR1cm5lZFxuICogaW5zdGVhZCBvZiB0aGUgdmFsdWUuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjb3JlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBiZSB1bmNvbXBsZXRlZC5cbiAqIEByZXR1cm4geyp9IEFuIHVuY29tcGxldGVkIHZlcnNpb24gb2YgdGhlIHByb3ZpZGVkIHZhbHVlLiBJZiB0aGUgdmFsdWUgd2FzXG4gKiAgICAgbm90IGNvbXBsZXRlIGluIHRoZSBmaXJzdCBwbGFjZSwgYHVuZGVmaW5lZGAgd2lsbCBiZSByZXR1cm5lZCBpbnN0ZWFkLlxuICovXG5mdW5jdGlvbiB1bmNvbXBsZXRlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZT8uW3AudmFsdWVdO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhIHZhbHVlIGlzIG1hcmtlZCBhcyBjb21wbGV0ZS5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNvcmVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3QgZm9yIGl0cyBjb21wbGV0ZSBzdGF0dXMuXG4gKiBAcmV0dXJuIHtib29sZWFufSBFaXRoZXIgYHRydWVgIGlmIHRoZSB2YWx1ZSBpcyBjb21wbGV0ZSwgb3IgYGZhbHNlYCBpZiBpdCBpc1xuICogICAgIG5vdC5cbiAqL1xuZnVuY3Rpb24gaXNDb21wbGV0ZWQodmFsdWUpIHtcbiAgcmV0dXJuICEhdmFsdWU/LltwLnJlZHVjZWRdO1xufVxuXG4vKipcbiAqIE1ha2VzIHN1cmUgdGhhdCBhIHZhbHVlIGlzIG1hcmtlZCBhcyBjb21wbGV0ZTsgaWYgaXQgaXMgbm90LCBpdCB3aWxsIGJlXG4gKiBtYXJrZWQgYXMgY29tcGxldGUuXG4gKlxuICogVGhpcyBkaWZmZXJzIGZyb20ge0BsaW5rIG1vZHVsZTpjb3JlLmNvbXBsZXRlfGNvbXBsZXRlfSBpbiB0aGF0IGlmIHRoZSB2YWx1ZVxuICogaXMgYWxyZWFkeSBjb21wbGV0ZSwgdGhpcyBmdW5jdGlvbiB3b24ndCBjb21wbGV0ZSBpdCBhZ2Fpbi4gVGhlcmVmb3JlIHRodXNcbiAqIGZ1bmN0aW9uIGNhbid0IGJlIHVzZWQgdG8gbWFrZSBhIHZhbHVlIGNvbXBsZXRlIG11bHRpcGxlIHRpbWVzLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y29yZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gYmUgY29tcGxldGVkLlxuICogQHJldHVybiB7Kn0gSWYgdGhlIHZhbHVlIGlzIGFscmVhZHkgY29tcGxldGUsIHRoZW4gdGhlIHZhbHVlIGlzIHNpbXBseVxuICogICAgIHJldHVybmVkLiBPdGhlcndpc2UsIGEgY29tcGxldGVkIHZlcnNpb24gb2YgdGhlIHZhbHVlIGlzIHJldHVybmVkLlxuICovXG5mdW5jdGlvbiBlbnN1cmVDb21wbGV0ZWQodmFsdWUpIHtcbiAgcmV0dXJuIGlzQ29tcGxldGVkKHZhbHVlKSA/IHZhbHVlIDogY29tcGxldGUodmFsdWUpO1xufVxuXG4vKipcbiAqIFJlbW92ZXMgdGhlIGNvbXBsZXRlIHN0YXR1cyBmcm9tIGEgdmFsdWUsIGFzIGxvbmcgYXMgaXQgYWN0dWFsbHkgaXMgY29tcGxldGUuXG4gKlxuICogVGhpcyBkb2VzIGEgY2hlY2sgdG8gbWFrZSBzdXJlIHRoZSB2YWx1ZSBwYXNzZWQgaW4gYWN0dWFsbHkgaXMgY29tcGxldGUuIElmXG4gKiBpdCBpc24ndCwgdGhlIHZhbHVlIGl0c2VsZiBpcyByZXR1cm5lZC4gSXQncyBtZWFudCB0byBiZSB1c2VkIHdoZW4gdGhlXG4gKiBjb21wbGV0ZWQgc3RhdHVzIGlzIHVuY2VydGFpbi5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNvcmVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIGNvbXBsZXRlIHZhbHVlIHRvIGJlIHVuY29tcGxldGVkLlxuICogQHJldHVybiB7Kn0gSWYgdGhlIHZhbHVlIGlzIGFscmVhZHkgdW5jb21wbGV0ZWQsIHRoZSB2YWx1ZSBpcyBzaW1wbHlcbiAqICAgICByZXR1cm5lZC4gT3RoZXJ3aXNlIGFuIHVuY29tcGxldGVkIHZlcnNpb24gb2YgdGhlIHZhbHVlIGlzIHJldHVybmVkLlxuICovXG5mdW5jdGlvbiBlbnN1cmVVbmNvbXBsZXRlZCh2YWx1ZSkge1xuICByZXR1cm4gaXNDb21wbGV0ZWQodmFsdWUpID8gdW5jb21wbGV0ZSh2YWx1ZSkgOiB2YWx1ZTtcbn1cblxuLyoqXG4gKiBSZWR1Y2VzIHRoZSBlbGVtZW50cyBvZiB0aGUgaW5wdXQgY29sbGVjdGlvbiB0aHJvdWdoIGEgcmVkdWNlciBpbnRvIGFuIG91dHB1dFxuICogY29sbGVjdGlvbi5cbiAqXG4gKiBUaGlzIGlzIHRoZSBsb3dlc3QtbGV2ZWwgb2YgdGhlIHRyYW5zZHVjdGlvbiBmdW5jdGlvbnMuIEluIGZhY3QsIHRoaXMgb25lIGlzXG4gKiBzbyBsb3ctbGV2ZWwgdGhhdCBpdCBkb2Vzbid0IGhhdmUgYSBsb3Qgb2YgdXNlIGluIG5vcm1hbCBvcGVyYXRpb24uIEl0J3MgbW9yZVxuICogdXNlZnVsIGZvciB3cml0aW5nIHlvdXIgb3duIHRyYW5zZm9ybWF0aW9uIGZ1bmN0aW9ucy5cbiAqXG4gKiBgcmVkdWNlYCBkb2Vzbid0IGFzc3VtZSB0aGF0IHRoZXJlJ3MgZXZlbiBhIHRyYW5zZm9ybWF0aW9uLiBJdCByZXF1aXJlcyBhblxuICogaW5pdGlhbCBjb2xsZWN0aW9uIGFuZCBhIHJlZHVjZXIgb2JqZWN0IHRoYXQgaXMgbWF0Y2hlZCB0byB0aGF0IGluaXRpYWxcbiAqIGNvbGxlY3Rpb24uIFRoZSByZWR1Y2VyIG9iamVjdCBtdXN0IGltcGxlbWVudCB0aGUgYHN0ZXBgIGFuZCBgcmVzdWx0YFxuICogcHJvdG9jb2xzLCB3aGljaCBpbnN0cnVjdCBgcmVkdWNlYCBvbiBob3cgdG8gYnVpbGQgdXAgdGhlIGNvbGxlY3Rpb24uIFRoZVxuICogcmVkdWNlciBtYXkgaW1wbGVtZW50IGEgdHJhbnNmb3JtYXRpb24gYXMgd2VsbCwgYnV0IGFsbCB0aGF0J3MgaW1wb3J0YW50IGhlcmVcbiAqIGlzIHRoYXQgaXQgY2FuIGRvIHRoZSByZWR1Y3Rpb24uXG4gKlxuICogVGhlIGlucHV0IGNvbGxlY3Rpb24gbmVlZCBvbmx5IGltcGxlbWVudCBgaXRlcmFibGVgLiBJdCBpcyBub3QgbmVjZXNzYXJ5IGZvclxuICogdGhlIGlucHV0IGFuZCBvdXRwdXQgY29sbGVjdGlvbnMgdG8gYmUgb2YgdGhlIHNhbWUgdHlwZTsgYXMgbG9uZyBhcyB0aGUgaW5wdXRcbiAqIGltcGxlbWVudHMgYGl0ZXJhYmxlYCBhbmQgdGhlIHJlZHVjZXIgaW1wbGVtZW50cyBgc3RlcGAgYW5kIGByZXN1bHRgXG4gKiBhcHByb3ByaWF0ZSB0byB0aGUgdHlwZSBvZiB0aGUgYGluaXRgIGNvbGxlY3Rpb24sIHRoZW4gYW55IHRyYW5zbGF0aW9uXG4gKiBiZXR3ZWVuIGNvbGxlY3Rpb24gdHlwZXMgY2FuIG9jY3VyLlxuICpcbiAqIFRoZSBub3JtYWwgY291cnNlIG9mIG9wZXJhdGlvbiB3aWxsIGJlIHRvIGNhbGxcbiAqIHtAbGluayBtb2R1bGU6Y29yZS50cmFuc2R1Y2V8dHJhbnNkdWNlfSBpbnN0ZWFkLCBhcyB0aGF0IGZ1bmN0aW9uIG1ha2VzIGl0XG4gKiBlYXN5IHRvIGNvbWJpbmUgdHJhbnNmb3JtYXRpb25zIHdpdGggcmVkdWN0aW9ucyBhbmQgY2FuIG9wdGlvbmFsbHkgZmlndXJlIG91dFxuICogdGhlIGluaXRpYWwgY29sbGVjdGlvbiBpdHNlbGYuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjb3JlXG4gKiBAcGFyYW0geyp9IGNvbGxlY3Rpb24gVGhlIGlucHV0IGNvbGxlY3Rpb24uIFRoZSBvbmx5IHJlcXVpcmVtZW50IG9mIHRoaXNcbiAqICAgICBjb2xsZWN0aW9uIGlzIHRoYXQgaXQgaW1wbGVtZW50IHRoZSBgaXRlcmFibGVgIHByb3RvY29sLiBTcGVjaWFsIHN1cHBvcnRcbiAqICAgICBpcyBwcm92aWRlZCBieSB0aGUgbGlicmFyeSBmb3Igb2JqZWN0cywgc28gdGhleSBjYW4gYmUgdXNlZCBhcyB3ZWxsLlxuICogQHBhcmFtIHttb2R1bGU6Y29yZS5SZWR1Y2VyfSByZWR1Y2VyIEFuIG9iamVjdCB0aGF0IGltcGxlbWVudHMgdGhlIGBzdGVwYCBhbmRcbiAqICAgICBgcmVzdWx0YCBwcm90b2NvbHMuIFRoaXMgb2JqZWN0IG11c3Qga25vdyBob3cgdG8gcHJvZHVjZSBhbiBvdXRwdXRcbiAqICAgICBjb2xsZWN0aW9uIHRocm91Z2ggdGhvc2UgcHJvdG9jb2wgZnVuY3Rpb25zLlxuICogQHBhcmFtIHsqfSBpbml0IGEgY29sbGVjdGlvbiBvZiB0aGUgc2FtZSB0eXBlIGFzIHRoZSBvdXRwdXQgY29sbGVjdGlvbi4gSXRcbiAqICAgICBuZWVkIG5vdCBiZSBlbXB0eTsgaWYgaXQgaXMgbm90LCB0aGUgZXhpc3RpbmcgZWxlbWVudHMgYXJlIHJldGFpbmVkIGFzXG4gKiAgICAgdGhlIGlucHV0IGNvbGxlY3Rpb24gaXMgcmVkdWNlZCBpbnRvIGl0LlxuICogQHJldHVybiB7Kn0gQSBuZXcgY29sbGVjdGlvbiwgY29uc2lzdGluZyBvZiB0aGUgYGluaXRgIGNvbGxlY3Rpb24gd2l0aCBhbGwgb2ZcbiAqICAgICB0aGUgZWxlbWVudHMgb2YgdGhlIGBjb2xsZWN0aW9uYCBjb2xsZWN0aW9uIHJlZHVjZWQgaW50byBpdC5cbiAqL1xuZnVuY3Rpb24gcmVkdWNlKGNvbGxlY3Rpb24sIHJlZHVjZXIsIGluaXQpIHtcbiAgaWYgKGNvbGxlY3Rpb24gPT0gbnVsbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3QgaXRlciA9IGl0ZXJhdG9yKGNvbGxlY3Rpb24pO1xuICBpZiAoIWl0ZXIpIHtcbiAgICB0aHJvdyBFcnJvcihgQ2Fubm90IHJlZHVjZSBhbiBpbnN0YW5jZSBvZiAke2NvbGxlY3Rpb24uY29uc3RydWN0b3IubmFtZX1gKTtcbiAgfVxuXG4gIGxldCBhY2MgPSBpbml0O1xuICBsZXQgc3RlcCA9IGl0ZXIubmV4dCgpO1xuXG4gIHdoaWxlICghc3RlcC5kb25lKSB7XG4gICAgYWNjID0gcmVkdWNlcltwLnN0ZXBdKGFjYywgc3RlcC52YWx1ZSk7XG4gICAgaWYgKGlzQ29tcGxldGVkKGFjYykpIHtcbiAgICAgIGFjYyA9IHVuY29tcGxldGUoYWNjKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBzdGVwID0gaXRlci5uZXh0KCk7XG4gIH1cblxuICByZXR1cm4gcmVkdWNlcltwLnJlc3VsdF0oYWNjKTtcbn1cblxuZXhwb3J0IHtcbiAgaW5pdCxcbiAgc3RlcCxcbiAgcmVzdWx0LFxuICB0b1JlZHVjZXIsXG4gIEFSUkFZX1JFRFVDRVIsXG4gIE9CSkVDVF9SRURVQ0VSLFxuICBTVFJJTkdfUkVEVUNFUixcbiAgdG9UcmFuc2R1Y2VyLFxuICB0b0Z1bmN0aW9uLFxuICBjb21wbGV0ZSxcbiAgdW5jb21wbGV0ZSxcbiAgaXNDb21wbGV0ZWQsXG4gIGVuc3VyZUNvbXBsZXRlZCxcbiAgZW5zdXJlVW5jb21wbGV0ZWQsXG4gIHJlZHVjZVxufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG4vKipcbiAqIEEgYnVuY2ggb2YgdXRpbGl0eSBmdW5jdGlvbnMuIFRoZXNlIGFyZSBhbGwgdXNlZCBieSB0aGUgbGlicmFyeSBpdHNlbGYgaW5cbiAqIHBsYWNlcywgYnV0IG1hbnkgb2YgdGhlbSBhcmUgc3VpdGFibGUgZm9yIGdlbmVyYWwgdXNlIGFzIHdlbGwuXG4gKiBeXG4gKiBAbW9kdWxlIGNvcmUvdXRpbHNcbiAqIEBwcml2YXRlXG4gKi9cblxuLyoqXG4gKiBgT2JqZWN0YCdzIGB0b1N0cmluZ2AgaXMgZXhwbGljaXRseSB1c2VkIHRocm91Z2hvdXQgYmVjYXVzZSBpdCBjb3VsZCBiZVxuICogcmVkZWZpbmVkIGluIGFueSBzdWJ0eXBlIG9mIGBPYmplY3RgLlxuICpcbiAqIEBmdW5jdGlvbiB0b1N0cmluZ1xuICogQHByaXZhdGVcbiAqL1xuY29uc3QgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhIHZhbHVlIGlzIGEgZnVuY3Rpb24uXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjb3JlXG4gKiBAcGFyYW0geyp9IHggVGhlIHZhbHVlIGJlaW5nIHRlc3RlZCB0byBzZWUgaWYgaXQgaXMgYSBmdW5jdGlvbi5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IEVpdGhlciBgdHJ1ZWAgaWYgdGhlIHRlc3QgdmFsdWUgaXMgYSBmdW5jdGlvbiBvciBgZmFsc2VgIGlmXG4gKiAgICAgaXQgaXMgbm90LlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih4KSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHgpID09PSBcIltvYmplY3QgRnVuY3Rpb25dXCI7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGEgdmFsdWUgaXMgYSBnZW5lcmF0b3IgZnVuY3Rpb24uXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjb3JlXG4gKiBAcGFyYW0geyp9IHggVGhlIHZhbHVlIGJlaW5nIHRlc3RlZCB0byBzZWUgaWYgaXQgaXMgYSBnZW5lcmF0b3IgZnVuY3Rpb24uXG4gKiBAcmV0dXJuIHtib29sZWFufSBFaXRoZXIgYHRydWVgIGlmIHRoZSB0ZXN0IHZhbHVlIGlzIGEgZ2VuZXJhdG9yIGZ1bmN0aW9uIG9yXG4gKiAgICAgYGZhbHNlYCBpZiBpdCBpcyBub3QuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBpc0dlbmVyYXRvckZ1bmN0aW9uKHgpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoeCkgPT09IFwiW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl1cIjtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgYSB2YWx1ZSBpcyBhIHBsYWluIG9iamVjdC5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgYGZhbHNlYCBpZiB0aGUgdmFsdWUgaXMgYW55IG90aGVyIHNvcnQgb2YgYnVpbHQtaW5cbiAqIG9iamVjdCAoc3VjaCBhcyBhbiBhcnJheSBvciBhIHN0cmluZykuIEl0IGFsc28gcmV0dXJucyBgZmFsc2VgIGZvciBhbnkgb2JqZWN0XG4gKiB0aGF0IGlzIGNyZWF0ZWQgYnkgYSBjb25zdHJ1Y3RvciB0aGF0IGlzIG5vdCBgT2JqZWN0YCdzIGNvbnN0cnVjdG9yLCBtZWFuaW5nXG4gKiB0aGF0IFwiaW5zdGFuY2VzXCIgb2YgY3VzdG9tIFwiY2xhc3Nlc1wiIHdpbGwgcmV0dXJuIGBmYWxzZWAuIFRoZXJlZm9yZSBpdCdzIG9ubHlcbiAqIGdvaW5nIHRvIHJldHVybiBgdHJ1ZWAgZm9yIGxpdGVyYWwgb2JqZWN0cyBvciB0aG9zZSBjcmVhdGVkIHdpdGhcbiAqIGBPYmplY3QuY3JlYXRlKClgLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y29yZVxuICogQHBhcmFtIHsqfSB4IFRoZSB2YWx1ZSBiZWluZyB0ZXN0ZWQgdG8gc2VlIGlmIGl0IGlzIGEgcGxhaW4gb2JqZWN0LlxuICogQHJldHVybiB7Ym9vbGVhbn0gRWl0aGVyIGB0cnVlYCBpZiB0aGUgdGVzdCB2YWx1ZSBpcyBhIHBsYWluIG9iamVjdCBvclxuICogICAgIGBmYWxzZWAgaWYgaXQgaXMgbm90LlxuICovXG5mdW5jdGlvbiBpc09iamVjdCh4KSB7XG4gIC8vIFRoaXMgY2hlY2sgZXhjbHVkZXMgYnVpbHQtaW4gbm9uLU9iamVjdCBvYmplY3RzIChzdWNoIGFzIEFycmF5IGFuZCBTdHJpbmcpLlxuICAvLyBJdCBhbHNvIGV4Y2x1ZGVzIG9iamVjdHMgY3JlYXRlZCBmcm9tIEVTMjAxNSBjbGFzc2VzLCBidXQgaXQgZG9lcyBub3RcbiAgLy8gZXhjbHVkZSBvYmplY3RzIGNyZWF0ZWQgd2l0aCBgbmV3YCBvbiBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgKHRoYXQgaGFwcGVuc1xuICAvLyBiZWxvdykuXG4gIGlmICh0b1N0cmluZy5jYWxsKHgpICE9PSBcIltvYmplY3QgT2JqZWN0XVwiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gUHJvdG90eXBlLWxlc3Mgb2JqZWN0cyAoY3JlYXRlZCB3aXRoIGBPYmplY3QuY3JlYXRlKG51bGwpKWAgcGFzc1xuICBjb25zdCBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih4KTtcbiAgaWYgKHByb3RvID09PSBudWxsKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvLyBDaGVjayB0byBzZWUgd2hldGhlciB0aGUgY29uc3RydWN0b3Igb2YgdGhlIHRlc3RlZCBvYmplY3QgaXMgdGhlIE9iamVjdFxuICAvLyBjb25zdHJ1Y3Rvci4gVGhpcyBpcyB0aGUgb25seSBjb25zdHJ1Y3RvciB0aGF0IHByb2R1Y2VzIGEgXCJwbGFpblwiIG9iamVjdC5cbiAgY29uc3QgY3RvciA9XG4gICAgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHByb3RvLCBcImNvbnN0cnVjdG9yXCIpICYmXG4gICAgcHJvdG8uY29uc3RydWN0b3I7XG4gIHJldHVybiB0eXBlb2YgY3RvciA9PT0gXCJmdW5jdGlvblwiICYmIGN0b3IgPT09IE9iamVjdDtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgYSB2YWx1ZSBpcyBhIG51bWJlci5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHdpbGwgcmV0dXJuIGB0cnVlYCBmb3IgYW55IG51bWJlciBsaXRlcmFsIG9yIGluc3RhbmNlIG9mXG4gKiBgTnVtYmVyYCBleGNlcHQgZm9yIGBJbmZpbml0eWAgb3IgYE5hTmAuIEl0IHdpbGwgcmV0dXJuIGBmYWxzZWAgZm9yIHN0cmluZ3NcbiAqIHRoYXQgaGFwcGVuIHRvIGFsc28gYmUgbnVtYmVyczsgdGhlIHZhbHVlIG11c3QgYmUgYW4gYWN0dWFsIGBOdW1iZXJgIGluc3RhbmNlXG4gKiBvciBudW1iZXIgbGl0ZXJhbCB0byByZXR1cm4gYHRydWVgLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y29yZVxuICogQHBhcmFtIHsqfSB4IFRoZSB2YWx1ZSBiZWluZyB0ZXN0ZWQgdG8gc2VlIGlmIGl0IGlzIGEgbnVtYmVyLlxuICogQHJldHVybiB7Ym9vbGVhbn0gRWl0aGVyIGB0cnVlYCBpZiB0aGUgdGVzdCB2YWx1ZSBpcyBhIGZpbml0ZSBudW1iZXIgKG5vdFxuICogICAgIGluY2x1ZGluZyBzdHJpbmcgcmVwcmVzZW50YXRpb25zIG9mIG51bWJlcnMpIG9yIGBmYWxzZWAgaWYgaXQgaXMgbm90LlxuICovXG5mdW5jdGlvbiBpc051bWJlcih4KSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHgpID09PSBcIltvYmplY3QgTnVtYmVyXVwiICYmIGlzRmluaXRlKHgpO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhIHZhbHVlIGlzIGEgc3RyaW5nLlxuICpcbiAqIExpdGVyYWwgc3RyaW5ncyB3aWxsIHJldHVybiBgdHJ1ZWAsIGFzIHdpbGwgaW5zdGFuY2VzIG9mIHRoZSBgU3RyaW5nYCBvYmplY3QuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjb3JlXG4gKiBAcGFyYW0geyp9IHggVGhlIHZhbHVlIGJlaW5nIHRlc3RlZCB0byBzZWUgaWYgaXQgaXMgYSBzdHJpbmcuXG4gKiBAcmV0dXJuIHtib29sZWFufSBFaXRoZXIgYHRydWVgIGlmIHRoZSB0ZXN0IHZhbHVlIGlzIGEgc3RyaW5nIG9yIGBmYWxzZWAgaWZcbiAqICAgIGl0IGlzIG5vdC5cbiAqL1xuZnVuY3Rpb24gaXNTdHJpbmcoeCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh4KSA9PT0gXCJbb2JqZWN0IFN0cmluZ11cIjtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgYSB2YWx1ZSBpcyBhbiBhcnJheS5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIG1lcmVseSBkZWxlZ2F0ZXMgdG8gYEFycmF5LmlzQXJyYXlgLiBJdCBpcyBwcm92aWRlZCBmb3JcbiAqIGNvbnNpc3RlbmN5IGluIGNhbGxpbmcgc3R5bGUgb25seS5cbiAqXG4gKiBAZnVuY3Rpb24gaXNBcnJheVxuICogQG1lbWJlcm9mIG1vZHVsZTpjb3JlXG4gKiBAcGFyYW0geyp9IHggVGhlIHZhbHVlIGJlaW5nIHRlc3RlZCB0byBzZWUgaWYgaXQgaXMgYW4gYXJyYXkuXG4gKiBAcmV0dXJuIHtib29sZWFufSBFaXRoZXIgYHRydWVgIGlmIHRoZSB0ZXN0IHZhbHVlIGlzIGFuIGFycmF5IG9yIGBmYWxzZWAgaWZcbiAqICAgICBpdCBpcyBub3QuXG4gKi9cbmNvbnN0IGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuXG5leHBvcnQge1xuICBpc0Z1bmN0aW9uLFxuICBpc0dlbmVyYXRvckZ1bmN0aW9uLFxuICBpc09iamVjdCxcbiAgaXNOdW1iZXIsXG4gIGlzU3RyaW5nLFxuICBpc0FycmF5XG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG5cbi8qKlxuICogQG1vZHVsZSB4ZHVjZVxuICovXG5cbmV4cG9ydCB7IGt2LCBrZXksIHZhbHVlLCBjb21wbGVtZW50IH0gZnJvbSBcIm1vZHVsZXMvdXRpbHNcIjtcbmV4cG9ydCB7XG4gIHRyYW5zZHVjZSxcbiAgc2VxdWVuY2UsXG4gIGludG8sXG4gIGFzQXJyYXksXG4gIGFzT2JqZWN0LFxuICBhc1N0cmluZyxcbiAgYXNJdGVyYXRvcixcbiAgY29tcG9zZSxcbiAgdG9SZWR1Y2VyLFxuICB0b0Z1bmN0aW9uXG59IGZyb20gXCJtb2R1bGVzL3RyYW5zZHVjdGlvblwiO1xuZXhwb3J0IHsgaWRlbnRpdHksIGZsYXR0ZW4sIHJlcGVhdCB9IGZyb20gXCJtb2R1bGVzL2Jhc2ljXCI7XG5leHBvcnQgeyBjaHVuaywgY2h1bmtCeSB9IGZyb20gXCJtb2R1bGVzL2NodW5rXCI7XG5leHBvcnQgeyBkcm9wLCBkcm9wV2hpbGUgfSBmcm9tIFwibW9kdWxlcy9kcm9wXCI7XG5leHBvcnQgeyBmaWx0ZXIsIHJlamVjdCB9IGZyb20gXCJtb2R1bGVzL2ZpbHRlclwiO1xuZXhwb3J0IHsgbWFwLCBmbGF0TWFwIH0gZnJvbSBcIm1vZHVsZXMvbWFwXCI7XG5leHBvcnQgeyB0YWtlLCB0YWtlV2hpbGUsIHRha2VOdGggfSBmcm9tIFwibW9kdWxlcy90YWtlXCI7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuaW1wb3J0IHtcbiAgcHJvdG9jb2xzIGFzIHAsXG4gIGlzQ29tcGxldGVkLFxuICBjb21wbGV0ZSxcbiAgaXNJdGVyYWJsZSxcbiAgcmVkdWNlLFxuICB0b1RyYW5zZHVjZXJcbn0gZnJvbSBcIkBjaGFua28vY29yZVwiO1xuXG5pbXBvcnQgeyBwYXJzZU51bWJlckFyZ3MgfSBmcm9tIFwibW9kdWxlcy91dGlsc1wiO1xuaW1wb3J0IHsgc2VxdWVuY2UgfSBmcm9tIFwibW9kdWxlcy90cmFuc2R1Y3Rpb25cIjtcblxuZnVuY3Rpb24gaWRlbnRpdHkoY29sbGVjdGlvbikge1xuICByZXR1cm4gY29sbGVjdGlvblxuICAgID8gc2VxdWVuY2UoY29sbGVjdGlvbiwgaWRlbnRpdHkoKSlcbiAgICA6IHhmb3JtID0+IHRvVHJhbnNkdWNlcigoYWNjLCB2YWx1ZSkgPT4geGZvcm1bcC5zdGVwXShhY2MsIHZhbHVlKSwgeGZvcm0pO1xufVxuXG5mdW5jdGlvbiBmbGF0dGVuKGNvbGxlY3Rpb24pIHtcbiAgcmV0dXJuIGNvbGxlY3Rpb25cbiAgICA/IHNlcXVlbmNlKGNvbGxlY3Rpb24sIGZsYXR0ZW4oKSlcbiAgICA6IHhmb3JtID0+XG4gICAgICAgIHRvVHJhbnNkdWNlcigoYWNjLCB2YWx1ZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN1Ylhmb3JtID0gdG9UcmFuc2R1Y2VyKChhY2MsIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2ID0geGZvcm1bcC5zdGVwXShhY2MsIHZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybiBpc0NvbXBsZXRlZCh2KSA/IGNvbXBsZXRlKHYpIDogdjtcbiAgICAgICAgICB9LCB4Zm9ybSk7XG5cbiAgICAgICAgICByZXR1cm4gaXNJdGVyYWJsZSh2YWx1ZSlcbiAgICAgICAgICAgID8gcmVkdWNlKHZhbHVlLCBzdWJYZm9ybSwgYWNjKVxuICAgICAgICAgICAgOiBzdWJYZm9ybVtwLnN0ZXBdKGFjYywgdmFsdWUpO1xuICAgICAgICB9LCB4Zm9ybSk7XG59XG5cbmZ1bmN0aW9uIHJlcGVhdChjb2xsZWN0aW9uLCBuKSB7XG4gIGNvbnN0IFtjb2wsIG51bV0gPSBwYXJzZU51bWJlckFyZ3MoY29sbGVjdGlvbiwgbik7XG4gIHJldHVybiBjb2xcbiAgICA/IHNlcXVlbmNlKGNvbCwgcmVwZWF0KG51bSkpXG4gICAgOiB4Zm9ybSA9PlxuICAgICAgICB0b1RyYW5zZHVjZXIoKGFjYywgdmFsdWUpID0+IHtcbiAgICAgICAgICBsZXQgcmVzdWx0ID0gYWNjO1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtOyBpKyspIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHhmb3JtW3Auc3RlcF0ocmVzdWx0LCB2YWx1ZSk7XG4gICAgICAgICAgICBpZiAoaXNDb21wbGV0ZWQocmVzdWx0KSkge1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSwgeGZvcm0pO1xufVxuXG5leHBvcnQgeyBpZGVudGl0eSwgZmxhdHRlbiwgcmVwZWF0IH07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuaW1wb3J0IHsgcHJvdG9jb2xzIGFzIHAsIGVuc3VyZVVuY29tcGxldGVkIH0gZnJvbSBcIkBjaGFua28vY29yZVwiO1xuaW1wb3J0IHtcbiAgcGFyc2VOdW1iZXJBcmdzLFxuICBwYXJzZUZ1bmN0aW9uQXJncyxcbiAgc2FtZVZhbHVlWmVyb1xufSBmcm9tIFwibW9kdWxlcy91dGlsc1wiO1xuaW1wb3J0IHsgc2VxdWVuY2UgfSBmcm9tIFwibW9kdWxlcy90cmFuc2R1Y3Rpb25cIjtcblxuY29uc3QgTk9fVkFMVUUgPSBTeW1ib2woXCJOT19WQUxVRVwiKTtcblxuZnVuY3Rpb24gY2h1bmsoY29sbGVjdGlvbiwgbikge1xuICBjb25zdCBbY29sLCBudW1dID0gcGFyc2VOdW1iZXJBcmdzKGNvbGxlY3Rpb24sIG4pO1xuICByZXR1cm4gY29sXG4gICAgPyBzZXF1ZW5jZShjb2wsIGNodW5rKG51bSkpXG4gICAgOiB4Zm9ybSA9PiB7XG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIGxldCBwYXJ0ID0gW107XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBbcC5pbml0XSgpIHtcbiAgICAgICAgICAgIHJldHVybiB4Zm9ybVtwLmluaXRdKCk7XG4gICAgICAgICAgfSxcblxuICAgICAgICAgIFtwLnN0ZXBdKGFjYywgdmFsdWUpIHtcbiAgICAgICAgICAgIHBhcnRbY291bnQrK10gPSB2YWx1ZTtcbiAgICAgICAgICAgIGlmIChjb3VudCA9PT0gbnVtKSB7XG4gICAgICAgICAgICAgIGNvbnN0IG91dCA9IHBhcnQuc2xpY2UoMCwgbnVtKTtcbiAgICAgICAgICAgICAgcGFydCA9IFtdO1xuICAgICAgICAgICAgICBjb3VudCA9IDA7XG4gICAgICAgICAgICAgIHJldHVybiB4Zm9ybVtwLnN0ZXBdKGFjYywgb3V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgfSxcblxuICAgICAgICAgIFtwLnJlc3VsdF0odmFsdWUpIHtcbiAgICAgICAgICAgIGlmIChjb3VudCA+IDApIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGVuc3VyZVVuY29tcGxldGVkKFxuICAgICAgICAgICAgICAgIHhmb3JtW3Auc3RlcF0odmFsdWUsIHBhcnQuc2xpY2UoMCwgY291bnQpKVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHhmb3JtW3AucmVzdWx0XSh2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfTtcbn1cblxuZnVuY3Rpb24gY2h1bmtCeShjb2xsZWN0aW9uLCBmbikge1xuICBjb25zdCBbY29sLCBmdW5jXSA9IHBhcnNlRnVuY3Rpb25BcmdzKGNvbGxlY3Rpb24sIGZuKTtcbiAgcmV0dXJuIGNvbFxuICAgID8gc2VxdWVuY2UoY29sLCBjaHVua0J5KGZ1bmMpKVxuICAgIDogeGZvcm0gPT4ge1xuICAgICAgICBsZXQgcGFydCA9IFtdO1xuICAgICAgICBsZXQgbGFzdCA9IE5PX1ZBTFVFO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgW3AuaW5pdF0oKSB7XG4gICAgICAgICAgICByZXR1cm4geGZvcm1bcC5pbml0XSgpO1xuICAgICAgICAgIH0sXG5cbiAgICAgICAgICBbcC5zdGVwXShhY2MsIHZhbHVlKSB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50ID0gZnVuYyh2YWx1ZSk7XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gYWNjO1xuICAgICAgICAgICAgaWYgKGxhc3QgPT09IE5PX1ZBTFVFIHx8IHNhbWVWYWx1ZVplcm8oY3VycmVudCwgbGFzdCkpIHtcbiAgICAgICAgICAgICAgcGFydC5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlc3VsdCA9IHhmb3JtW3Auc3RlcF0ocmVzdWx0LCBwYXJ0KTtcbiAgICAgICAgICAgICAgcGFydCA9IFt2YWx1ZV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsYXN0ID0gY3VycmVudDtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgfSxcblxuICAgICAgICAgIFtwLnJlc3VsdF0odmFsdWUpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvdW50ID0gcGFydC5sZW5ndGg7XG4gICAgICAgICAgICBpZiAoY291bnQgPiAwKSB7XG4gICAgICAgICAgICAgIHJldHVybiBlbnN1cmVVbmNvbXBsZXRlZChcbiAgICAgICAgICAgICAgICB4Zm9ybVtwLnN0ZXBdKHZhbHVlLCBwYXJ0LnNsaWNlKDAsIGNvdW50KSlcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB4Zm9ybVtwLnJlc3VsdF0odmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH07XG59XG5cbmV4cG9ydCB7IGNodW5rLCBjaHVua0J5IH07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuaW1wb3J0IHsgcHJvdG9jb2xzIGFzIHAsIHRvVHJhbnNkdWNlciB9IGZyb20gXCJAY2hhbmtvL2NvcmVcIjtcbmltcG9ydCB7IHBhcnNlTnVtYmVyQXJncywgcGFyc2VGdW5jdGlvbkFyZ3MgfSBmcm9tIFwibW9kdWxlcy91dGlsc1wiO1xuaW1wb3J0IHsgc2VxdWVuY2UgfSBmcm9tIFwibW9kdWxlcy90cmFuc2R1Y3Rpb25cIjtcblxuZnVuY3Rpb24gZHJvcChjb2xsZWN0aW9uLCBuKSB7XG4gIGNvbnN0IFtjb2wsIG51bV0gPSBwYXJzZU51bWJlckFyZ3MoY29sbGVjdGlvbiwgbik7XG4gIHJldHVybiBjb2xcbiAgICA/IHNlcXVlbmNlKGNvbCwgZHJvcChudW0pKVxuICAgIDogeGZvcm0gPT4ge1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIHJldHVybiB0b1RyYW5zZHVjZXIoXG4gICAgICAgICAgKGFjYywgdmFsdWUpID0+IChpKysgPCBudW0gPyBhY2MgOiB4Zm9ybVtwLnN0ZXBdKGFjYywgdmFsdWUpKSxcbiAgICAgICAgICB4Zm9ybVxuICAgICAgICApO1xuICAgICAgfTtcbn1cblxuZnVuY3Rpb24gZHJvcFdoaWxlKGNvbGxlY3Rpb24sIGZuKSB7XG4gIGNvbnN0IFtjb2wsIGZ1bmNdID0gcGFyc2VGdW5jdGlvbkFyZ3MoY29sbGVjdGlvbiwgZm4pO1xuICByZXR1cm4gY29sXG4gICAgPyBzZXF1ZW5jZShjb2wsIGRyb3BXaGlsZShmdW5jKSlcbiAgICA6IHhmb3JtID0+IHtcbiAgICAgICAgbGV0IGRyb3BwaW5nID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHRvVHJhbnNkdWNlcigoYWNjLCB2YWx1ZSkgPT4ge1xuICAgICAgICAgIGlmIChkcm9wcGluZykge1xuICAgICAgICAgICAgaWYgKGZ1bmModmFsdWUpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkcm9wcGluZyA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4geGZvcm1bcC5zdGVwXShhY2MsIHZhbHVlKTtcbiAgICAgICAgfSwgeGZvcm0pO1xuICAgICAgfTtcbn1cblxuZXhwb3J0IHsgZHJvcCwgZHJvcFdoaWxlIH07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuaW1wb3J0IHsgcHJvdG9jb2xzIGFzIHAsIHRvVHJhbnNkdWNlciB9IGZyb20gXCJAY2hhbmtvL2NvcmVcIjtcbmltcG9ydCB7IHBhcnNlRnVuY3Rpb25BcmdzLCBjb21wbGVtZW50IH0gZnJvbSBcIm1vZHVsZXMvdXRpbHNcIjtcbmltcG9ydCB7IHNlcXVlbmNlIH0gZnJvbSBcIm1vZHVsZXMvdHJhbnNkdWN0aW9uXCI7XG5cbmZ1bmN0aW9uIGZpbHRlcihjb2xsZWN0aW9uLCBmbikge1xuICBjb25zdCBbY29sLCBmdW5jXSA9IHBhcnNlRnVuY3Rpb25BcmdzKGNvbGxlY3Rpb24sIGZuKTtcbiAgcmV0dXJuIGNvbFxuICAgID8gc2VxdWVuY2UoY29sLCBmaWx0ZXIoZnVuYykpXG4gICAgOiB4Zm9ybSA9PlxuICAgICAgICB0b1RyYW5zZHVjZXIoXG4gICAgICAgICAgKGFjYywgdmFsdWUpID0+IChmdW5jKHZhbHVlKSA/IHhmb3JtW3Auc3RlcF0oYWNjLCB2YWx1ZSkgOiBhY2MpLFxuICAgICAgICAgIHhmb3JtXG4gICAgICAgICk7XG59XG5cbmZ1bmN0aW9uIHJlamVjdChjb2xsZWN0aW9uLCBmbikge1xuICBjb25zdCBbY29sLCBmdW5jXSA9IHBhcnNlRnVuY3Rpb25BcmdzKGNvbGxlY3Rpb24sIGZuKTtcbiAgcmV0dXJuIGZpbHRlcihjb2wsIGNvbXBsZW1lbnQoZnVuYykpO1xufVxuXG5leHBvcnQgeyBmaWx0ZXIsIHJlamVjdCB9O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG5cbmltcG9ydCB7IHByb3RvY29scyBhcyBwLCB0b1RyYW5zZHVjZXIgfSBmcm9tIFwiQGNoYW5rby9jb3JlXCI7XG5pbXBvcnQgeyBwYXJzZUZ1bmN0aW9uQXJncyB9IGZyb20gXCJtb2R1bGVzL3V0aWxzXCI7XG5pbXBvcnQgeyBzZXF1ZW5jZSwgY29tcG9zZSB9IGZyb20gXCJtb2R1bGVzL3RyYW5zZHVjdGlvblwiO1xuaW1wb3J0IHsgZmxhdHRlbiB9IGZyb20gXCJtb2R1bGVzL2Jhc2ljXCI7XG5cbmZ1bmN0aW9uIG1hcChjb2xsZWN0aW9uLCBmbikge1xuICBjb25zdCBbY29sLCBmdW5jXSA9IHBhcnNlRnVuY3Rpb25BcmdzKGNvbGxlY3Rpb24sIGZuKTtcbiAgcmV0dXJuIGNvbFxuICAgID8gc2VxdWVuY2UoY29sLCBtYXAoZnVuYykpXG4gICAgOiB4Zm9ybSA9PlxuICAgICAgICB0b1RyYW5zZHVjZXIoKGFjYywgdmFsdWUpID0+IHhmb3JtW3Auc3RlcF0oYWNjLCBmdW5jKHZhbHVlKSksIHhmb3JtKTtcbn1cblxuZnVuY3Rpb24gZmxhdE1hcChjb2xsZWN0aW9uLCBmbikge1xuICBjb25zdCBbY29sLCBmdW5jXSA9IHBhcnNlRnVuY3Rpb25BcmdzKGNvbGxlY3Rpb24sIGZuKTtcbiAgcmV0dXJuIGNvbFxuICAgID8gc2VxdWVuY2UoY29sLCBjb21wb3NlKG1hcChmdW5jKSwgZmxhdHRlbigpKSlcbiAgICA6IGNvbXBvc2UobWFwKGZ1bmMpLCBmbGF0dGVuKCkpO1xufVxuXG5leHBvcnQgeyBtYXAsIGZsYXRNYXAgfTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG5pbXBvcnQgeyBwcm90b2NvbHMgYXMgcCwgdG9UcmFuc2R1Y2VyLCBlbnN1cmVDb21wbGV0ZWQgfSBmcm9tIFwiQGNoYW5rby9jb3JlXCI7XG5cbmltcG9ydCB7IHBhcnNlTnVtYmVyQXJncywgcGFyc2VGdW5jdGlvbkFyZ3MgfSBmcm9tIFwibW9kdWxlcy91dGlsc1wiO1xuaW1wb3J0IHsgc2VxdWVuY2UgfSBmcm9tIFwibW9kdWxlcy90cmFuc2R1Y3Rpb25cIjtcblxuZnVuY3Rpb24gdGFrZShjb2xsZWN0aW9uLCBuKSB7XG4gIGNvbnN0IFtjb2wsIG51bV0gPSBwYXJzZU51bWJlckFyZ3MoY29sbGVjdGlvbiwgbik7XG4gIHJldHVybiBjb2xcbiAgICA/IHNlcXVlbmNlKGNvbCwgdGFrZShudW0pKVxuICAgIDogeGZvcm0gPT4ge1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIHJldHVybiB0b1RyYW5zZHVjZXIoKGFjYywgdmFsdWUpID0+IHtcbiAgICAgICAgICBsZXQgcmVzdWx0ID0gYWNjO1xuXG4gICAgICAgICAgaWYgKGkgPCBudW0pIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHhmb3JtW3Auc3RlcF0oYWNjLCB2YWx1ZSk7XG4gICAgICAgICAgICBpZiAoaSA9PT0gbnVtIC0gMSkge1xuICAgICAgICAgICAgICByZXN1bHQgPSBlbnN1cmVDb21wbGV0ZWQocmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaSsrO1xuICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0sIHhmb3JtKTtcbiAgICAgIH07XG59XG5cbmZ1bmN0aW9uIHRha2VXaGlsZShjb2xsZWN0aW9uLCBmbikge1xuICBjb25zdCBbY29sLCBmdW5jXSA9IHBhcnNlRnVuY3Rpb25BcmdzKGNvbGxlY3Rpb24sIGZuKTtcbiAgcmV0dXJuIGNvbFxuICAgID8gc2VxdWVuY2UoY29sLCB0YWtlV2hpbGUoZnVuYykpXG4gICAgOiB4Zm9ybSA9PlxuICAgICAgICB0b1RyYW5zZHVjZXIoXG4gICAgICAgICAgKGFjYywgdmFsdWUpID0+XG4gICAgICAgICAgICBmdW5jKHZhbHVlKSA/IHhmb3JtW3Auc3RlcF0oYWNjLCB2YWx1ZSkgOiBlbnN1cmVDb21wbGV0ZWQoYWNjKSxcbiAgICAgICAgICB4Zm9ybVxuICAgICAgICApO1xufVxuXG5mdW5jdGlvbiB0YWtlTnRoKGNvbGxlY3Rpb24sIG4pIHtcbiAgY29uc3QgW2NvbCwgbnVtXSA9IHBhcnNlTnVtYmVyQXJncyhjb2xsZWN0aW9uLCBuKTtcbiAgcmV0dXJuIGNvbFxuICAgID8gc2VxdWVuY2UoY29sLCB0YWtlTnRoKG51bSkpXG4gICAgOiB4Zm9ybSA9PiB7XG4gICAgICAgIGxldCBpID0gLTE7XG4gICAgICAgIHJldHVybiB0b1RyYW5zZHVjZXIoXG4gICAgICAgICAgKGFjYywgdmFsdWUpID0+ICgrK2kgJSBudW0gPT09IDAgPyB4Zm9ybVtwLnN0ZXBdKGFjYywgdmFsdWUpIDogYWNjKSxcbiAgICAgICAgICB4Zm9ybVxuICAgICAgICApO1xuICAgICAgfTtcbn1cblxuZXhwb3J0IHsgdGFrZSwgdGFrZVdoaWxlLCB0YWtlTnRoIH07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuLyoqXG4gKiBGdW5jdGlvbnMgZGVhbGluZyB3aXRoIHRoZSBhY3R1YWwgdHJhbnNmb3JtYXRpb24gb2YgdmFsdWVzIGFuZCBmb3IgY2hvb3NpbmdcbiAqIHRoZSByZWR1Y2VyIGR1cmluZyB0cmFuc2R1Y3Rpb24uXG4gKlxuICogQG1vZHVsZSB4ZHVjZS90cmFuc2Zvcm1hdGlvblxuICogQHByaXZhdGVcbiAqL1xuXG5pbXBvcnQge1xuICBwcm90b2NvbHMgYXMgcCxcbiAgaXNJbXBsZW1lbnRlZCxcbiAgaXRlcmF0b3IsXG4gIGlzQ29tcGxldGVkLFxuICB0b1JlZHVjZXIsXG4gIHRvRnVuY3Rpb24sXG4gIHJlZHVjZSxcbiAgaXNGdW5jdGlvbixcbiAgaXNBcnJheSxcbiAgaXNPYmplY3QsXG4gIGlzU3RyaW5nXG59IGZyb20gXCJAY2hhbmtvL2NvcmVcIjtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGl0ZXJhdG9yIHRoYXQgaXMgYWxzbyBhIHRyYW5zZHVjZXIsIHRyYW5zZm9ybWluZyBpdHMgY29sbGVjdGlvblxuICogb25lIGVsZW1lbnQgYXQgYSB0aW1lLiBUaGlzIGlzIHRoZSBhY3R1YWwgb3V0cHV0IG9mIHRoZVxuICoge0BsaW5rIG1vZHVsZTp4ZHVjZS5hc0l0ZXJhdG9yfGFzSXRlcmF0b3J9IGZ1bmN0aW9uLCBhcyB3ZWxsIGFzIHRoZSBvdXRwdXQgb2ZcbiAqIHRoZSB7QGxpbmsgbW9kdWxlOnhkdWNlLnNlcXVlbmNlfHNlcXVlbmNlfSBmdW5jdGlvbiB3aGVuIHRoZSBpbnB1dCBpcyBhblxuICogaXRlcmF0b3IuXG4gKlxuICogVGhlIGVuZCB1c2VyIG5lZWQgbm90IGJlIGNvbmNlcm5lZCB3aXRoIHRoZSB0eXBlIG9mIHRoZSBvdXRwdXQgaXRlcmF0b3IgaW5cbiAqIHRoZXNlIGNpcmN1bXN0YW5jZXM7IHRoZSBlbmQgdXNlciBuZWVkIG9ubHkgY2FyZSB0aGF0IHRoZSBvdXRwdXQgaXMsIGluIGZhY3QsXG4gKiBhbiBpdGVyYXRvciBhbmQgY2FuIGJlIGV4cGVjdGVkIHRvIGFjdCBsaWtlIG9uZS4gRm9yIHRoaXMgcmVhc29uLCB0aGlzXG4gKiBmdW5jdGlvbiBhbmQgdGhlIHR5cGUgaXQgcmV0dXJucyBhcmUgbm90IGV4cG9ydGVkLlxuICpcbiAqIFRoaXMgb2JqZWN0IHN1cHBvcnRzIG5vbi0xLXRvLTEgY29ycmVzcG9uZGVuY2VzIGJldHdlZW4gaW5wdXQgYW5kIG91dHB1dFxuICogdmFsdWVzLiBGb3IgZXhhbXBsZSwgYSBmaWx0ZXIgdHJhbnNmb3JtYXRpb24gbWlnaHQgcmV0dXJuIGZld2VyIG91dHB1dFxuICogZWxlbWVudHMgdGhhbiB3ZXJlIGluIHRoZSBpbnB1dCBjb2xsZWN0aW9uLCB3aGlsZSBhIHJlcGVhdCB0cmFuc2Zvcm1hdGlvblxuICogd2lsbCByZXR1cm4gbW9yZS4gSW4gZWl0aGVyIGNhc2UsIGBuZXh0YCBpbiB0aGlzIGNsYXNzIHdpbGwgcmV0dXJuIG9uZVxuICogZWxlbWVudCBwZXIgY2FsbC5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTpjb3JlLkl0ZXJhYmxlfSBjb2xsZWN0aW9uIHRoZSBpbnB1dCBjb2xsZWN0aW9uIHRoYXQgdGhlXG4gKiAgICAgcHJvZHVjZWQgaXRlcmF0b3Igd2lsbCBiZSBpdGVyYXRpbmcgb3Zlci5cbiAqIEBwYXJhbSB7bW9kdWxlOmNvcmUuVHJhbnNkdWNlckZ1bmN0aW9ufSB4Zm9ybSBBIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyBhXG4gKiAgICAgdHJhbnNkdWNlciBvYmplY3QgdGhhdCBkZWZpbmVzIHRoZSB0cmFuc2Zvcm1hdGlvbiBiZWluZyBkb25lIHRvIHRoZVxuICogICAgIGl0ZXJhdG9yJ3MgZWxlbWVudHMuIEFueSBvZiB0aGUgdHJhbnNkdWNlcnMgaW4gdGhlXG4gKiAgICAge0BsaW5rIG1vZHVsZTp4ZHVjZXx4ZHVjZX0gbW9kdWxlIGNhbiBwcm9kdWNlIGEgc3VpdGFibGUgdHJhbnNkdWNlclxuICogICAgIGZ1bmN0aW9uLlxuICogQHJldHVybiB7bW9kdWxlOmNvcmUuSXRlcmF0b3J9IEFuIGl0ZXJhdG9yIHRoYXQgd2lsbCB0cmFuc2Zvcm0gaXRzIGlucHV0XG4gKiAgICAgZWxlbWVudHMgdXNpbmcgdGhlIHRyYW5zZHVjZXIgZnVuY3Rpb24gYXMgaXRzXG4gKiAgICAgYHtAbGluayBtb2R1bGU6Y29yZS5OZXh0RnVuY3Rpb258bmV4dH1gIGZ1bmN0aW9uIGlzIGNhbGxlZC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHRyYW5zZHVjaW5nSXRlcmF0b3IoY29sbGVjdGlvbiwgeGZvcm0pIHtcbiAgY29uc3Qgc3RlcFJlZHVjZXIgPSB7XG4gICAgW3Auc3RlcF0oeGl0ZXIsIGlucHV0KSB7XG4gICAgICB4aXRlci5pdGVtcy51bnNoaWZ0KGlucHV0KTtcbiAgICAgIHJldHVybiB4aXRlcjtcbiAgICB9LFxuICAgIFtwLnJlc3VsdF0odmFsdWUpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaXRlciA9IGl0ZXJhdG9yKGNvbGxlY3Rpb24pO1xuICBjb25zdCB4ZiA9IHhmb3JtKHN0ZXBSZWR1Y2VyKTtcbiAgbGV0IGNvbXBsZXRlZCA9IGZhbHNlO1xuXG4gIC8vIFRoaXMgYXJyYXkgaXMgdGhlIGtleSB0byB3b3JraW5nIHByb3Blcmx5IHdpdGggc3RlcCBmdW5jdGlvbnMgdGhhdCByZXR1cm5cbiAgLy8gbW9yZSB0aGFuIG9uZSB2YWx1ZS4gQWxsIG9mIHRoZW0gYXJlIHB1dCBpbnRvIHRoZSBpdGVtcyBhcnJheS4gQXMgbG9uZyBhc1xuICAvLyB0aGlzIGFycmF5IGhhcyB2YWx1ZXMgaW4gaXQsIHRoZSBgbmV4dGAgZnVuY3Rpb24gd2lsbCByZXR1cm4gb25lIHZhbHVlXG4gIC8vIHBvcHBlZCBmcm9tIGl0IHJhdGhlciB0aGFuIHJ1bm5pbmcgdGhlIHN0ZXAgZnVuY3Rpb24gYWdhaW4uXG4gIGNvbnN0IGl0ZW1zID0gW107XG5cbiAgLy8gVGhlIGBuZXh0YCBmdW5jdGlvbiBoZXJlIGlzIHJhdGhlciBzaW1wbGUuIElmIHRoZXJlIGlzIGFscmVhZHkgc29tZXRoaW5nIGluXG4gIC8vIHRoZSBgaXRlbXNgIGFycmF5LCBpdCdzIHJldHVybmVkLiBJZiBub3QsIHRoZSBgc3RlcGAgZnVuY3Rpb24gaXMgcnVuIGFuZCxcbiAgLy8gaWYgdGhhdCByZXN1bHRzIGluIGEgdmFsdWUgaW4gdGhlIGBpdGVtc2AgYXJyYXksIGl0J3MgcmV0dXJuZWQuIE90aGVyd2lzZVxuICAvLyBhbiBvYmplY3Qgd2l0aCBgeyBkb25lOiB0cnVlIH1gIGlzIHJldHVybmVkLlxuICBmdW5jdGlvbiBuZXh0KCkge1xuICAgIGlmIChpdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHN0ZXAoKTtcbiAgICB9XG4gICAgaWYgKGl0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHsgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IGl0ZW1zLnBvcCgpLFxuICAgICAgZG9uZTogZmFsc2VcbiAgICB9O1xuICB9XG5cbiAgLy8gVGhpcyBpcyB3aGVyZSBtb3N0IG9mIHRoZSB3b3JrIGhhcHBlbnMuIEl0IGdldHMgdGhlIG5leHQgdmFsdWUgZnJvbSB0aGVcbiAgLy8gaW5wdXQgY29sbGVjdGlvbiBhbmQgcnVucyBpdCB0aHJvdWdoIHRoZSByZWR1Y3Rpb24gc3RlcCBmdW5jdGlvbnMuIElmIHRoYXRcbiAgLy8gcmVzdWx0cyBpbiBhIHZhbHVlLCBpdCdzIGdpdmVuIHRvIHRoZSBzdGVwcGVyIG9iamVjdCAod2hpY2ggYWRkcyBpdCB0byB0aGVcbiAgLy8gYGl0ZW1zYCBhcnJheSk7IG90aGVyd2lzZSB0aGUgd2hpbGUgbG9vcCBjb250aW51ZXMgdG8gdGhlIG5leHQgZWxlbWVudCBvZlxuICAvLyB0aGUgaW5wdXQgY29sbGVjdGlvbi4gVGhpcyBlbnN1cmVzIHRoYXQgdGhlcmUncyBzb21ldGhpbmcgZm9yIHRoZSBgbmV4dGBcbiAgLy8gZnVuY3Rpb24gdG8gcmV0dXJuIGVhY2ggdGltZSBpdCdzIGNhbGxlZC5cbiAgLy9cbiAgLy8gSWYgdGhlIGNvbGxlY3Rpb24gaGFzIGZpbmlzaGVkIG9yIGlmIHRoZSBzdGVwIGZ1bmN0aW9uIHJldHVybnMgYSBjb21wbGV0ZWRcbiAgLy8gb2JqZWN0ICh3aGljaCB0YWtlIHdpbGwgZG8gYWZ0ZXIgaXRzIGxpbWl0IG9mIGVsZW1lbnRzIGhhcyBiZWVuIHJlYWNoZWQsXG4gIC8vIGZvciBpbnN0YW5jZSksIHRoZSBpdGVyYXRpb24gaXMgZmluaXNoZWQgYnkgY2FsbGluZyB0aGUgcmVzdWx0IGZ1bmN0aW9uLlxuICBmdW5jdGlvbiBzdGVwKCkge1xuICAgIGNvbnN0IGNvdW50ID0gaXRlbXMubGVuZ3RoO1xuICAgIHdoaWxlIChpdGVtcy5sZW5ndGggPT09IGNvdW50KSB7XG4gICAgICBjb25zdCBzdGVwVmFsdWUgPSBpdGVyLm5leHQoKTtcbiAgICAgIGlmIChzdGVwVmFsdWUuZG9uZSB8fCBjb21wbGV0ZWQpIHtcbiAgICAgICAgeGZbcC5yZXN1bHRdKHJlc3VsdCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY29tcGxldGVkID0gaXNDb21wbGV0ZWQoeGZbcC5zdGVwXShyZXN1bHQsIHN0ZXBWYWx1ZS52YWx1ZSkpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFRoZSBgcmVzdWx0YCBuYW1lIGlzIGhvaXN0ZWQgYW5kIHVzZWQgaW4gZnVuY3Rpb25zIGZ1cnRoZXIgdXAsIHNvIHdlIGhhdmVcbiAgLy8gdG8gcmV0YWluIHRoYXQgbmFtZSBhbmQgY2FuJ3QganVzdCByZXR1cm4gdGhlIG9iamVjdCB3aXRob3V0IG5hbWluZyBpdFxuICBjb25zdCByZXN1bHQgPSB7IGl0ZW1zLCBuZXh0LCBzdGVwIH07XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogVHJhbnNmb3JtcyB0aGUgZWxlbWVudHMgb2YgdGhlIGlucHV0IGNvbGxlY3Rpb24gYW5kIHJlZHVjZXMgdGhlbSBpbnRvIGFuXG4gKiBvdXRwdXQgY29sbGVjdGlvbi5cbiAqXG4gKiBUaGlzIGlzIHRoZSBsb3dlc3QtbGV2ZWwgb2YgdGhlIHRyYW5zZHVjdGlvbiBmdW5jdGlvbnMgdGhhdCBpcyBsaWtlbHkgdG8gc2VlXG4gKiByZWd1bGFyIHVzZS4gSXQgZG9lcyBub3QgYXNzdW1lIGFueXRoaW5nIGFib3V0IHRoZSByZWR1Y2VyLCBhcyBpdCBhc2tzIGZvciBpdFxuICogdG8gYmUgcGFzc2VkIGV4cGxpY2l0bHkuIFRoaXMgbWVhbnMgdGhhdCBhbnkga2luZCBvZiBjb2xsZWN0aW9uIGNhbiBiZVxuICogcHJvZHVjZWQsIHNpbmNlIHRoZSByZWR1Y2VyIGlzIG5vdCB0aWVkIHRvIHRoZSBpbnB1dCBjb2xsZWN0aW9uIGluIGFueSB3YXkuXG4gKlxuICogYHRyYW5zZHVjZWAgYWxzbyB3aWxsIGFjY2VwdCBhbiBpbml0aWFsIHZhbHVlIGZvciB0aGUgcmVzdWx0aW5nIGNvbGxlY3Rpb24gYXNcbiAqIHRoZSBvcHRpb25hbCBsYXN0IHBhcmFtZXRlci4gSWYgdGhpcyBwYXJhbWV0ZXIgaXNuJ3QgcHJlc2VudCwgdGhlbiB0aGVcbiAqIGluaXRpYWwgdmFsdWUgaXMgZGV0ZXJtaW5lZCBmcm9tIHRoZSB0cmFuc2R1Y2VyIGluaXQgcHJvdG9jb2wgcHJvcGVydHkgb24gdGhlXG4gKiByZWR1Y2VyLiBOb3RlIGhvd2V2ZXIgdGhhdCBtYW55IHJlZHVjZXJzIG1heSBub3QgcHJvdmlkZSBhbiBpbml0aWFsIHZhbHVlLFxuICogYW5kIGluIHRob3NlIGNhc2VzIGl0IHdpbGwgKmhhdmUqIHRvIGJlIHBhc3NlZCBhcyBhIHBhcmFtZXRlci5cbiAqXG4gKiBgYGBcbiAqIGltcG9ydCB7IG1hcCwgdHJhbnNkdWNlIH0gZnJvbSBcIkBjaGFua28veGR1Y2VcIjtcbiAqIGltcG9ydCB7IHByb3RvY29scyBhcyBwIH0gZnJvbSBcIkBjaGFua28vY29yZVwiO1xuICpcbiAqIGNvbnN0IHhmb3JtID0gbWFwKHggPT4geCArIDEpO1xuICpcbiAqIGNvbnN0IGFycmF5UmVkdWNlciA9IHtcbiAqICAgW3AuaW5pdF0oKSB7IHJldHVybiBbXTsgfSxcbiAqICAgW3AucmVzdWx0XSh4KSB7IHJldHVybiB4OyB9LFxuICogICBbcC5zdGVwXShhY2MsIHgpIHtcbiAqICAgICBhY2MucHVzaCh4KTtcbiAqICAgICByZXR1cm4gYWNjO1xuICogICB9XG4gKiB9O1xuICpcbiAqIGNvbnN0IHN0cmluZ1JlZHVjZXIgPSB7XG4gKiAgIFtwLmluaXRdKCkgeyByZXR1cm4gJyc7IH0sXG4gKiAgIFtwLnJlc3VsdF0oeCkgeyByZXR1cm4geDsgfSxcbiAqICAgW3Auc3RlcF0oYWNjLCB4KSB7IHJldHVybiBhY2MgKyB4OyB9XG4gKiB9O1xuICpcbiAqIGxldCByZXN1bHQgPSB0cmFuc2R1Y2UoWzEsIDIsIDMsIDQsIDVdLCB4Zm9ybSwgYXJyYXlSZWR1Y2VyKTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdCk7ICAgLy8gLT4gWzIsIDMsIDQsIDUsIDZdXG4gKlxuICogcmVzdWx0ID0gdHJhbnNkdWNlKFsxLCAyLCAzLCA0LCA1XSwgeGZvcm0sIHN0cmluZ1JlZHVjZXIpO1xuICogY29uc29sZS5sb2cocmVzdWx0KTsgICAvLyAtPiBcIjIzNDU2XCJcbiAqXG4gKiByZXN1bHQgPSB0cmFuc2R1Y2UoJzEyMzQ1JywgeGZvcm0sIGFycmF5UmVkdWNlcik7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQpOyAgIC8vIC0+IFsyLCAzLCA0LCA1LCA2XVxuICpcbiAqIHJlc3VsdCA9IHRyYW5zZHVjZSgnMTIzNDUnLCB4Zm9ybSwgc3RyaW5nUmVkdWNlcik7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQpOyAgIC8vIC0+IFwiMjM0NTZcIlxuICogYGBgXG4gKlxuICogVGhlc2UgZXhhbXBsZXMgaWxsdXN0cmF0ZSBhIG51bWJlciBvZiBpbXBvcnRhbnQgY29uY2VwdHMuIEZpcnN0IG9mIGFsbCwgdGhlXG4gKiB0cmFuc2R1Y2VyIGZ1bmN0aW9uIGlzIGluZGVwZW5kZW50IG9mIHRoZSB0eXBlIG9mIHRoZSBjb2xsZWN0aW9uOyB0aGUgc2FtZVxuICogdHJhbnNkdWNlciBmdW5jdGlvbiBpcyB1c2VkIG5vIG1hdHRlciB0aGUgdHlwZSBvZiBpbnB1dCBvciBvdXRwdXRcbiAqIGNvbGxlY3Rpb25zLiBTZWNvbmRseSwgdHdvIHJlZHVjZXJzIGFyZSBkZWZpbmVkLiBUaGVzZSBhcmUgb2JqZWN0cyB0aGF0XG4gKiBjb25mb3JtIHRvIHRoZSB0cmFuc2R1Y2VyIHByb3RvY29sIChzZWUgdGhlIGRvY3VtZW50YXRpb24gb25cbiAqIGB7QGxpbmsgbW9kdWxlOmNvcmUucHJvdG9jb2xzfWApIGFuZCB0aGF0IGtub3cgaG93IHRvIHByb2R1Y2UgdGhlIG91dHB1dFxuICogY29sbGVjdGlvbiBvZiBjaG9pY2UuIEluIHRoaXMgY2FzZSwgdGhlIHJlZHVjZXJzIGtub3cgaG93IHRvIGNyZWF0ZSBuZXdcbiAqIGFycmF5cyBhbmQgc3RyaW5ncyAodGhlIGBpbml0YCBwcm90b2NvbCkgYW5kIGhvdyB0byBhZGQgZWxlbWVudHMgdG8gYXJyYXlzXG4gKiBhbmQgc3RyaW5ncyAodGhlIGBzdGVwYCBwcm90b2NvbCkuIEJlY2F1c2UgdGhlc2UgcmVkdWNlcnMgZG8gaGF2ZSBgaW5pdGBcbiAqIHByb3RvY29sIHByb3BlcnRpZXMsIHRoZSBgdHJhbnNkdWNlYCBjYWxscyBkbyBub3QgcmVxdWlyZSBleHBsaWNpdCBpbml0aWFsXG4gKiBjb2xsZWN0aW9ucy5cbiAqXG4gKiBUaGUgZmluYWwgcG9pbnQgaXMgdGhhdCBgdHJhbnNkdWNlYCBjYW4gYWNjZXB0IGFueSBraW5kIG9mIGl0ZXJhYmxlXG4gKiBjb2xsZWN0aW9uLCBhbmQgYnkgcGFzc2luZyBpbiB0aGUgcHJvcGVyIHJlZHVjZXIsIGl0IGNhbiBwcm9kdWNlIGFueSBraW5kIG9mXG4gKiBvdXRwdXQgY29sbGVjdGlvbi4gVGhlIHNhbWUgYHRyYW5zZHVjZWAgZnVuY3Rpb24gYW5kIHRoZSBzYW1lIG1hcCB0cmFuc2Zvcm1lclxuICogaXMgdXNlZCBpbiBhbGwgZm91ciBleGFtcGxlcywgZGVzcGl0ZSB0aGUgaW5wdXQvb3V0cHV0IGNvbWJpbmF0aW9uIGJlaW5nXG4gKiBkaWZmZXJlbnQgaW4gYWxsIGZvdXIuXG4gKlxuICogVGhlIGByZWR1Y2VyYCBwYXJhbWV0ZXIgKmNhbiogYmUgYSByZWR1Y2VyIGZ1bmN0aW9uIGluc3RlYWQgb2YgYSByZWR1Y2VyXG4gKiBvYmplY3QuIElmIHRoaXMgaXMgdGhlIGNhc2UsIHRoZSBgaW5pdGAgcGFyYW1ldGVyIGlzIHJlcXVpcmVkIGJlY2F1c2UgYVxuICogZnVuY3Rpb24gY2Fubm90IGRlZmluZSBhbiBpbml0aWFsIHZhbHVlIGl0c2VsZi5cbiAqXG4gKiBUaGUgYGluaXRgIGNvbGxlY3Rpb24gZG9lc24ndCBoYXZlIHRvIGJlIGVtcHR5LiBJZiBpdCBpc24ndCwgdGhlIGVsZW1lbnRzXG4gKiB0aGF0IGFyZSBhbHJlYWR5IGluIGl0IGFyZSByZXRhaW5lZCBhbmQgdGhlIHRyYW5zZm9ybWVkIGlucHV0IGVsZW1lbnRzIGFyZVxuICogcmVkdWNlZCBpbnRvIHRoZSBjb2xsZWN0aW9uIG5vcm1hbGx5LlxuICpcbiAqIE9mIGNvdXJzZSwgdGhlIGV4YW1wbGVzIGFyZSBub3QgcmVhbGx5IG5lY2Vzc2FyeSAtIHRoZSBzYW1lIHRoaW5nIGNvdWxkIGJlXG4gKiBhY2NvbXBsaXNoZWQgdXNpbmcgYHtAbGluayBtb2R1bGU6eGR1Y2UuaW50b3xpbnRvfWAgd2l0aG91dCBoYXZpbmcgdG8gY3JlYXRlXG4gKiB0aGUgcmVkdWNlcnMgKHN0cmluZ3MgYW5kIGFycmF5cyBwYXNzZWQgdG8gYHtAbGluayBtb2R1bGU6eGR1Y2UuaW50b3xpbnRvfWBcbiAqIGFzIHRhcmdldHMga25vdyBob3cgdG8gcmVkdWNlIHRoZW1zZWx2ZXMgYWxyZWFkeSkuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHBhcmFtIHttb2R1bGU6Y29yZS5JdGVyYWJsZX0gY29sbGVjdGlvbiBUaGUgaW5wdXQgY29sbGVjdGlvbi4gVGhlIG9ubHlcbiAqICAgICByZXF1aXJlbWVudCBvZiB0aGlzIGNvbGxlY3Rpb24gaXMgdGhhdCBpdCBpbXBsZW1lbnQgdGhlIGBpdGVyYWJsZWBcbiAqICAgICBwcm90b2NvbC4gU3BlY2lhbCBzdXBwb3J0IGlzIHByb3ZpZGVkIGJ5IHRoZSBsaWJyYXJ5IGZvciBvYmplY3RzLCBzbyB0aGV5XG4gKiAgICAgY2FuIGFsc28gYmUgdXNlZC5cbiAqIEBwYXJhbSB7bW9kdWxlOmNvcmUuVHJhbnNkdWNlckZ1bmN0aW9ufSBbeGZvcm1dIEEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIGFcbiAqICAgICB0cmFuc2R1Y2VyIG9iamVjdCB0aGF0IGRlZmluZXMgdGhlIHRyYW5zZm9ybWF0aW9uIGJlaW5nIGRvbmUgdG8gdGhlIGlucHV0XG4gKiAgICAgY29sbGVjdGlvbidzIGVsZW1lbnRzLiBBbnkgb2YgdGhlIHRyYW5zZHVjZXJzIGluIHRoZVxuICogICAgIHtAbGluayBtb2R1bGU6dHJhbnNkdWNlcnN8dHJhbnNkdWNlcnN9IG1vZHVsZSBjYW4gcHJvZHVjZSBhIHN1aXRhYmxlXG4gKiAgICAgdHJhbnNkdWNlciBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7KG1vZHVsZTpjb3JlLlN0ZXBGdW5jdGlvbnxtb2R1bGU6Y29yZS5SZWR1Y2VyKX0gcmVkdWNlciBFaXRoZXIgYVxuICogICAgIGZ1bmN0aW9uIG9yIGEgcmVkdWNlciBvYmplY3QgdGhhdCBpbXBsZW1lbnRzIHRoZSB0cmFuc2R1Y2VyIHByb3RvY29sc1xuICogICAgIChgaW5pdGAgaXMgIG9ubHkgcmVxdWlyZWQgaWYgdGhlIGBpbml0YCBwYXJhbWV0ZXIgaXMgbm90IHByZXNlbnQpLiBUaGlzXG4gKiAgICAgb2JqZWN0IG11c3Qga25vdyBob3cgdG8gcHJvZHVjZSBhbiBvdXRwdXQgY29sbGVjdGlvbiB0aHJvdWdoIGl0cyBgc3RlcGBcbiAqICAgICBhbmQgYHJlc3VsdGAgcHJvdG9jb2wgZnVuY3Rpb25zLiBJZiB0aGlzIHBhcmFtZXRlciBpcyBhIGZ1bmN0aW9uLCB0aGVuIGl0XG4gKiAgICAgaXMgdHVybmVkIGludG8gYSB2YWxpZCByZWR1Y2VyIG9iamVjdC5cbiAqIEBwYXJhbSB7bW9kdWxlOmNvcmUuUmVkdWNpYmxlfSBbaW5pdF0gQSBjb2xsZWN0aW9uIG9mIHRoZSBzYW1lIHR5cGUgYXMgdGhlXG4gKiAgICAgb3V0cHV0IGNvbGxlY3Rpb24uIElmIHRoaXMgaXMgbm90IHByZXNlbnQsIHRoZW4gdGhlIHJlZHVjZXIncyBgaW5pdGBcbiAqICAgICBwcm90b2NvbCBmdW5jdGlvbiBpcyBjYWxsZWQgaW5zdGVhZCB0byBnZXQgdGhlIGluaXRpYWwgY29sbGVjdGlvbi4gSWYgaXRcbiAqICAgICBpcyBwcmVzZW50IGFuZCBub3QgZW1wdHksIHRoZW4gdGhlIGV4aXN0aW5nIGVsZW1lbnRzIHJlbWFpbiBhbmQgdGhlXG4gKiAgICAgdHJhbnNmb3JtZWQgaW5wdXQgY29sbGVjdGlvbiBlbGVtZW50cyBhcmUgYWRkZWQgdG8gaXQuXG4gKiBAcmV0dXJuIHsqfSBBIGNvbGxlY3Rpb24gb2YgYSB0eXBlIGRldGVybWluZWQgYnkgdGhlIHBhc3NlZCByZWR1Y2VyLiBUaGVcbiAqICAgICBlbGVtZW50cyBvZiB0aGlzIGNvbGxlY3Rpb24gYXJlIHRoZSByZXN1bHRzIGZyb20gdGhlIHRyYW5zZm9ybWVyIGZ1bmN0aW9uXG4gKiAgICAgYmVpbmcgYXBwbGllZCB0byBlYWNoIGVsZW1lbnQgb2YgdGhlIGlucHV0IGNvbGxlY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIHRyYW5zZHVjZShjb2xsZWN0aW9uLCB4Zm9ybSwgcmVkdWNlciwgaW5pdCkge1xuICBjb25zdCByID0gaXNGdW5jdGlvbihyZWR1Y2VyKSA/IHRvUmVkdWNlcihyZWR1Y2VyKSA6IHJlZHVjZXI7XG4gIGNvbnN0IGkgPSBpbml0ID8/IHJbcC5pbml0XSgpO1xuICBjb25zdCB4ZiA9IHhmb3JtID8geGZvcm0ocikgOiByO1xuICByZXR1cm4gcmVkdWNlKGNvbGxlY3Rpb24sIHhmLCBpKTtcbn1cblxuLyoqXG4gKiBUcmFuc2Zvcm1zIHRoZSBlbGVtZW50cyBvZiB0aGUgaW5wdXQgY29sbGVjdGlvbiBhbmQgcmVkdWNlcyB0aGVtIGludG8gYSBuZXdcbiAqIGFycmF5LlxuICpcbiAqIFRoZSB0cmFuc2Zvcm1lciBpcyBvcHRpb25hbC4gSWYgaXQgaXNuJ3QgcHJlc2VudCwgdGhpcyBmdW5jdGlvbiBqdXN0IGNvbnZlcnRzXG4gKiB0aGUgaW5wdXQgY29sbGVjdGlvbiBpbnRvIGFuIGFycmF5LlxuICpcbiAqIGBgYFxuICogaW1wb3J0IHsgYXNBcnJheSwgbWFwIH0gZnJvbSBcIkBjaGFua28veGR1Y2VcIjtcbiAqXG4gKiBjb25zdCB4Zm9ybSA9IG1hcCh4ID0+IHggKyAxKTtcbiAqXG4gKiBsZXQgcmVzdWx0ID0gYXNBcnJheShbMSwgMiwgMywgNCwgNV0sIHhmb3JtKTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdCk7ICAgLy8gLT4gWzIsIDMsIDQsIDUsIDZdXG4gKlxuICogcmVzdWx0ID0gYXNBcnJheSgnMTIzNDUnLCB4Zm9ybSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQpOyAgIC8vIC0+IFsyLCAzLCA0LCA1LCA2XVxuICpcbiAqIHJlc3VsdCA9IGFzQXJyYXkoJzEyMzQ1Jyk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQpOyAgIC8vIC0+IFsxLCAyLCAzLCA0LCA1XVxuICpcbiAqIHJlc3VsdCA9IGFzQXJyYXkoe2E6IDEsIGI6IDJ9KTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdCk7ICAgLy8gLT4gW3sgYTogMSB9LCB7IGI6IDIgfV1cbiAqIGBgYFxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwYXJhbSB7bW9kdWxlOmNvcmUuSXRlcmFibGV9IGNvbGxlY3Rpb24gVGhlIGlucHV0IGNvbGxlY3Rpb24uIFRoZSBvbmx5XG4gKiAgICAgcmVxdWlyZW1lbnQgb2YgdGhpcyBjb2xsZWN0aW9uIGlzIHRoYXQgaXQgaW1wbGVtZW50IHRoZSBgaXRlcmFibGVgXG4gKiAgICAgcHJvdG9jb2wuIFNwZWNpYWwgc3VwcG9ydCBpcyBwcm92aWRlZCBieSB0aGUgbGlicmFyeSBmb3Igb2JqZWN0cywgc28gdGhleVxuICogICAgIGNhbiBhbHNvIGJlIHVzZWQuXG4gKiBAcGFyYW0ge21vZHVsZTpjb3JlLlRyYW5zZHVjZXJGdW5jdGlvbn0gW3hmb3JtXSBBIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyBhXG4gKiAgICAgdHJhbnNkdWNlciBvYmplY3QgdGhhdCBkZWZpbmVzIHRoZSB0cmFuc2Zvcm1hdGlvbiBiZWluZyBkb25lIHRvIHRoZSBpbnB1dFxuICogICAgIGNvbGxlY3Rpb24ncyBlbGVtZW50cy4gQW55IG9mIHRoZSB0cmFuc2R1Y2VycyBpbiB0aGVcbiAqICAgICB7QGxpbmsgbW9kdWxlOnhkdWNlfHhkdWNlfSBtb2R1bGUgY2FuIHByb2R1Y2UgYSBzdWl0YWJsZSB0cmFuc2R1Y2VyXG4gKiAgICAgZnVuY3Rpb24uIElmIHRoaXMgaXNuJ3QgcHJlc2VudCwgdGhlIGlucHV0IGNvbGxlY3Rpb24gd2lsbCBzaW1wbHkgYmVcbiAqICAgICByZWR1Y2VkIGludG8gYW4gYXJyYXkgd2l0aG91dCB0cmFuc2Zvcm1hdGlvbi5cbiAqIEByZXR1cm4ge0FycmF5fSBBbiBhcnJheSBjb250YWluaW5nIGFsbCBvZiB0aGUgdHJhbnNmb3JtZWQgdmFsdWVzIGZyb20gdGhlXG4gKiAgICAgaW5wdXQgY29sbGVjdGlvbiBlbGVtZW50cy5cbiAqL1xuZnVuY3Rpb24gYXNBcnJheShjb2xsZWN0aW9uLCB4Zm9ybSkge1xuICByZXR1cm4gdHJhbnNkdWNlKGNvbGxlY3Rpb24sIHhmb3JtLCB0b1JlZHVjZXIoW10pKTtcbn1cblxuLyoqXG4gKiBUcmFuc2Zvcm1zIHRoZSBlbGVtZW50cyBvZiB0aGUgaW5wdXQgY29sbGVjdGlvbiBhbmQgcmVkdWNlcyB0aGVtIGludG8gYSBuZXdcbiAqIG9iamVjdC5cbiAqXG4gKiBUaGUgdHJhbnNmb3JtZXIgaXMgb3B0aW9uYWwuIElmIGl0IGlzbid0IHByZXNlbnQsIHRoaXMgZnVuY3Rpb24ganVzdCBjb252ZXJ0c1xuICogdGhlIGlucHV0IGNvbGxlY3Rpb24gaW50byBhbiBvYmplY3QuIFdoZW4gdGhpcyBoYXBwZW5zLCBpZiB0aGUgaW5wdXRcbiAqIGNvbGxlY3Rpb24gaXMgbm90IGFuIG9iamVjdCBvciBhbiBhcnJheSBvZiBvYmplY3RzLCBudW1iZXJzIHN0YXJ0aW5nIGF0IGAwYFxuICogd2lsbCBiZSB1c2VkIGFzIGtleXMgZm9yIHRoZSB2YWx1ZXMgcHJvdmlkZWQgYnkgdGhlIGlucHV0IGNvbGxlY3Rpb24uXG4gKlxuICogYGBgXG4gKiBpbXBvcnQgeyBhc09iamVjdCwga3YsIG1hcCB9IGZyb20gXCJAY2hhbmtvL3hkdWNlXCI7XG4gKlxuICogY29uc3QgZm4gPSBwcm9wID0+IHtcbiAqICAgY29uc3QgeyBrLCB2IH0gPSBrdihwcm9wKTtcbiAqICAgcmV0dXJuIHsgW2tdOiB2ICsgMSB9O1xuICogfVxuICogY29uc3QgeGZvcm0gPSBtYXAoZm4pO1xuICpcbiAqIGxldCByZXN1bHQgPSBhc09iamVjdCh7IGE6IDEsIGI6IDIgfSwgeGZvcm0pO1xuICogY29uc29sZS5sb2cocmVzdWx0KTsgICAvLyAtPiB7IGE6IDIsIGI6IDMgfVxuICpcbiAqIHJlc3VsdCA9IGFzT2JqZWN0KFt7IGE6IDEgfSwgeyBiOiAyIH1dLCB4Zm9ybSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQpOyAgIC8vIC0+IHsgYTogMiwgYjogMyB9XG4gKlxuICogcmVzdWx0ID0gYXNPYmplY3QoWzEsIDIsIDMsIDQsIDVdKTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdCk7ICAgLy8gLT4geyAwOiAxLCAxOiAyLCAyOiAzLCAzOiA0LCA0OiA1IH1cbiAqXG4gKiByZXN1bHQgPSBhc09iamVjdChbeyBhOiAxIH0sIHsgYjogMiB9XSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQpOyAgIC8vIC0+IHsgYTogMSwgYjogMiB9XG4gKlxuICogcmVzdWx0ID0gYXNPYmplY3QoXCJoZWxsb1wiKTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdCk7ICAgLy8gLT4geyAwOiBcImhcIiwgMTogXCJlXCIsIDI6IFwibFwiLCAzOiBcImxcIiwgNDogXCJvXCIgfVxuICogYGBgXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHBhcmFtIHttb2R1bGU6Y29yZS5JdGVyYWJsZX0gY29sbGVjdGlvbiBUaGUgaW5wdXQgY29sbGVjdGlvbi4gVGhlIG9ubHlcbiAqICAgICByZXF1aXJlbWVudCBvZiB0aGlzIGNvbGxlY3Rpb24gaXMgdGhhdCBpdCBpbXBsZW1lbnQgdGhlIGBpdGVyYWJsZWBcbiAqICAgICBwcm90b2NvbC4gU3BlY2lhbCBzdXBwb3J0IGlzIHByb3ZpZGVkIGJ5IHRoZSBsaWJyYXJ5IGZvciBvYmplY3RzLCBzbyB0aGV5XG4gKiAgICAgY2FuIGFsc28gYmUgdXNlZC5cbiAqIEBwYXJhbSB7bW9kdWxlOmNvcmUuVHJhbmR1Y2VyfSBbeGZvcm1dIEEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIGEgdHJhbnNkdWNlclxuICogICAgIG9iamVjdCB0aGF0IGRlZmluZXMgdGhlIHRyYW5zZm9ybWF0aW9uIGJlaW5nIGRvbmUgdG8gdGhlIGlucHV0XG4gKiAgICAgY29sbGVjdGlvbidzIGVsZW1lbnRzLiBBbnkgb2YgdGhlIHRyYW5zZHVjZXJzIGluIHRoZVxuICogICAgIHtAbGluayBtb2R1bGU6eGR1Y2V8eGR1Y2V9IG1vZHVsZSBjYW4gcHJvZHVjZSBhIHN1aXRhYmxlIHRyYW5zZHVjZXJcbiAqICAgICBmdW5jdGlvbi4gSWYgdGhpcyBpc24ndCBwcmVzZW50LCB0aGUgaW5wdXQgY29sbGVjdGlvbiB3aWxsIHNpbXBseSBiZVxuICogICAgIHJlZHVjZWQgaW50byBhbiBvYmplY3Qgd2l0aG91dCB0cmFuc2Zvcm1hdGlvbi5cbiAqIEByZXR1cm4ge09iamVjdH0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgYWxsIG9mIHRoZSB0cmFuc2Zvcm1lZCB2YWx1ZXMgZnJvbSB0aGVcbiAqICAgICBpbnB1dCBjb2xsZWN0aW9uIGVsZW1lbnRzLlxuICovXG5mdW5jdGlvbiBhc09iamVjdChjb2xsZWN0aW9uLCB4Zm9ybSkge1xuICByZXR1cm4gdHJhbnNkdWNlKGNvbGxlY3Rpb24sIHhmb3JtLCB0b1JlZHVjZXIoe30pKTtcbn1cblxuLyoqXG4gKiBUcmFuc2Zvcm1zIHRoZSBlbGVtZW50cyBvZiB0aGUgaW5wdXQgY29sbGVjdGlvbiBhbmQgcmVkdWNlcyB0aGVtIGludG8gYSBuZXdcbiAqIHN0cmluZy5cbiAqXG4gKiBUaGUgdHJhbnNmb3JtZXIgaXMgb3B0aW9uYWwuIElmIGl0IGlzbid0IHByZXNlbnQsIHRoaXMgZnVuY3Rpb24ganVzdCBjb252ZXJ0c1xuICogdGhlIGlucHV0IGNvbGxlY3Rpb24gaW50byBhbiBzdHJpbmcuIElmIHRoaXMgaXMgdGhlIGNhc2UgYW5kIHRoZSBpbnB1dFxuICogY29sbGVjdGlvbiBpcyBhbiBvYmplY3QsIG9ubHkgdGhlIHZhbHVlcyB3aWxsIGJlIGNvbmNhdGVuYXRlZCBpbnRvIGEgc3RyaW5nLlxuICpcbiAqIE90aGVyd2lzZSwgdHJhbnNmb3JtaW5nIG9iamVjdHMgaW50byBzdHJpbmdzIG9ubHkgbWFrZXMgbXVjaCBzZW5zZSBpZiB0aGVcbiAqIHRyYW5zZHVjZXIgcHJvZHVjZXMgb25seSBhIHNpbmdsZSBvdXRwdXQgZnJvbSBlYWNoIG9mIHRoZSBvYmplY3RzIGtleS92YWx1ZVxuICogcGFpcnMuXG4gKlxuICogYGBgXG4gKiBpbXBvcnQgeyB0cmFuc2R1Y2UsIGtleSwgbWFwIH0gZnJvbSBcIkBjaGFua28veGR1Y2VcIjtcbiAqXG4gKiBjb25zdCB4Zm9ybSA9IG1hcCh4ID0+IHgudG9VcHBlckNhc2UoKSk7XG4gKlxuICogbGV0IHJlc3VsdCA9IGFzU3RyaW5nKCdoZWxsbycsIHhmb3JtKTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdCk7ICAgLy8gLT4gXCJIRUxMT1wiXG4gKlxuICogcmVzdWx0ID0gYXNTdHJpbmcoWydoJywgJ2UnLCAnbCcsICdsJywgJ28nXSwgeGZvcm0pO1xuICogY29uc29sZS5sb2cocmVzdWx0KTsgICAvLyAtPiBcIkhFTExPXCJcbiAqXG4gKiByZXN1bHQgPSBhc1N0cmluZyh7IGE6IDEsIGM6IDIsIGI6IDMgfSwgbWFwKGtleSkpO1xuICogY29uc29sZS5sb2cocmVzdWx0KTsgICAvLyAtPiBcImFjYlwiXG4gKlxuICogcmVzdWx0ID0gYXNTdHJpbmcoWzEsIDIsIDMsIDQsIDVdKTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdCk7ICAgLy8gLT4gXCIxMjM0NVwiXG4gKlxuICogcmVzdWx0ID0gYXNTdHJpbmcoeyBhOiAxLCBjOiAyLCBiOiAzIH0pO1xuICogY29uc29sZS5sb2cocmVzdWx0KTsgICAvLyAtPiBcIjEyM1wiXG4gKiBgYGBcbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcGFyYW0ge21vZHVsZTpjb3JlLkl0ZXJhYmxlfSBjb2xsZWN0aW9uIFRoZSBpbnB1dCBjb2xsZWN0aW9uLiBUaGUgb25seVxuICogICAgIHJlcXVpcmVtZW50IG9mIHRoaXMgY29sbGVjdGlvbiBpcyB0aGF0IGl0IGltcGxlbWVudCB0aGUgYGl0ZXJhYmxlYFxuICogICAgIHByb3RvY29sLiBTcGVjaWFsIHN1cHBvcnQgaXMgcHJvdmlkZWQgYnkgdGhlIGxpYnJhcnkgZm9yIG9iamVjdHMsIHNvIHRoZXlcbiAqICAgICBjYW4gYWxzbyBiZSB1c2VkLlxuICogQHBhcmFtIHttb2R1bGU6Y29yZS5UcmFuc2R1Y2VyRnVuY3Rpb259IFt4Zm9ybV0gQSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgYVxuICogICAgIHRyYW5zZHVjZXIgb2JqZWN0IHRoYXQgZGVmaW5lcyB0aGUgdHJhbnNmb3JtYXRpb24gYmVpbmcgZG9uZSB0byB0aGUgaW5wdXRcbiAqICAgICBjb2xsZWN0aW9uJ3MgZWxlbWVudHMuIEFueSBvZiB0aGUgdHJhbnNkdWNlcnMgaW4gdGhlXG4gKiAgICAge0BsaW5rIG1vZHVsZTp0cmFuc2R1Y2Vyc3x0cmFuc2R1Y2Vyc30gbW9kdWxlIGNhbiBwcm9kdWNlIGEgc3VpdGFibGVcbiAqICAgICB0cmFuc2R1Y2VyIGZ1bmN0aW9uLiBJZiB0aGlzIGlzbid0IHByZXNlbnQsIHRoZSBpbnB1dCBjb2xsZWN0aW9uIHdpbGxcbiAqICAgICBzaW1wbHkgYmUgcmVkdWNlZCBpbnRvIGEgc3RyaW5nIHdpdGhvdXQgdHJhbnNmb3JtYXRpb24uXG4gKiBAcmV0dXJuIHtTdHJpbmd9IEEgc3RyaW5nIGNvbnRhaW5pbmcgYWxsIG9mIHRoZSB0cmFuc2Zvcm1lZCB2YWx1ZXMgZnJvbSB0aGVcbiAqICAgICBpbnB1dCBjb2xsZWN0aW9uIGVsZW1lbnRzLlxuICovXG5mdW5jdGlvbiBhc1N0cmluZyhjb2xsZWN0aW9uLCB4Zm9ybSkge1xuICByZXR1cm4gdHJhbnNkdWNlKGNvbGxlY3Rpb24sIHhmb3JtLCB0b1JlZHVjZXIoXCJcIikpO1xufVxuXG4vKipcbiAqIFRyYW5zZm9ybXMgdGhlIGVsZW1lbnRzIG9mIHRoZSBpbnB1dCBjb2xsZWN0aW9uIGFuZCByZWR1Y2VzIHRoZW0gaW50byBhIG5ld1xuICogaXRlcmF0b3IuXG4gKlxuICogVGhlIHRyYW5zZm9ybWVyIGlzIG9wdGlvbmFsLiBJZiBpdCBpc24ndCBwcmVzZW50LCB0aGlzIGZ1bmN0aW9uIGp1c3QgY29udmVydHNcbiAqIHRoZSBpbnB1dCBjb2xsZWN0aW9uIGludG8gYW4gaXRlcmF0b3IuXG4gKlxuICogKihUaGUgcmVzdWx0cyBoZXJlIGFyZSBzaG93biBwYXNzZWQgdGhyb3VnaCBgYXNBcnJheWAgYmVjYXVzZSB0aGVyZSdzIG5vXG4gKiBwcmludGFibGUgcmVwcmVzZW50YXRpb24gb2YgYW4gaXRlcmF0b3IgdG8gc2hvdy4gVGhlIGBhc0FycmF5YCBjYWxscyBhcmUgZm9yXG4gKiBkZW1vbnN0cmF0aW9uIHB1cnBvc2VzIG9ubHkuKSpcbiAqXG4gKiBgYGBcbiAqIGltcG9ydCB7IGFzSXRlcmF0b3IsIGFzQXJyYXksIG1hcCB9IGZyb20gXCJAY2hhbmtvL3hkdWNlXCI7XG4gKlxuICogY29uc3QgeGZvcm0gPSBtYXAoeCA9PiB4ICsgMSk7XG4gKiBmdW5jdGlvbiogZml2ZSgpIHtcbiAqICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNTsgKytpKSB7XG4gKiAgICAgeWllbGQgaTtcbiAqICAgfVxuICogfTtcbiAqXG4gKiBsZXQgcmVzdWx0ID0gYXNJdGVyYXRvcihmaXZlKCksIHhmb3JtKTtcbiAqIGNvbnNvbGUubG9nKGFzQXJyYXkocmVzdWx0KSk7ICAgLy8gLT4gWzIsIDMsIDQsIDUsIDZdXG4gKlxuICogcmVzdWx0ID0gYXNJdGVyYXRvcihbMSwgMiwgMywgNCwgNV0sIHhmb3JtKTtcbiAqIGNvbnNvbGUubG9nKGFzQXJyYXkocmVzdWx0KSk7ICAgLy8gLT4gWzIsIDMsIDQsIDUsIDZdXG4gKlxuICogcmVzdWx0ID0gYXNJdGVyYXRvcihbMSwgMiwgMywgNCwgNV0pO1xuICogY29uc29sZS5sb2coYXNBcnJheShyZXN1bHQpKTsgICAvLyAtPiBbMSwgMiwgMywgNCwgNV1cbiAqXG4gKiByZXN1bHQgPSBhc0l0ZXJhdG9yKHthOiAxLCBiOiAyfSk7XG4gKiBjb25zb2xlLmxvZyhhc0FycmF5KHJlc3VsdCkpOyAgIC8vIC0+IFt7IGE6IDEgfSwgeyBiOiAyIH1dXG4gKiBgYGBcbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcGFyYW0ge21vZHVsZTpjb3JlLkl0ZXJhYmxlfSBjb2xsZWN0aW9uIFRoZSBpbnB1dCBjb2xsZWN0aW9uLiBUaGUgb25seVxuICogICAgIHJlcXVpcmVtZW50IG9mIHRoaXMgY29sbGVjdGlvbiBpcyB0aGF0IGl0IGltcGxlbWVudCB0aGUgYGl0ZXJhYmxlYFxuICogICAgIHByb3RvY29sLiBTcGVjaWFsIHN1cHBvcnQgaXMgcHJvdmlkZWQgYnkgdGhlIGxpYnJhcnkgZm9yIG9iamVjdHMsIHNvIHRoZXlcbiAqICAgICBjYW4gYWxzbyBiZSB1c2VkLlxuICogQHBhcmFtIHttb2R1bGU6Y29yZS5UcmFuc2R1Y2VyRnVuY3Rpb259IFt4Zm9ybV0gQSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgYVxuICogICAgIHRyYW5zZHVjZXIgb2JqZWN0IHRoYXQgZGVmaW5lcyB0aGUgdHJhbnNmb3JtYXRpb24gYmVpbmcgZG9uZSB0byB0aGUgaW5wdXRcbiAqICAgICBjb2xsZWN0aW9uJ3MgZWxlbWVudHMuIEFueSBvZiB0aGUgdHJhbnNkdWNlcnMgaW4gdGhlXG4gKiAgICAge0BsaW5rIG1vZHVsZTp0cmFuc2R1Y2Vyc3x0cmFuc2R1Y2Vyc30gbW9kdWxlIGNhbiBwcm9kdWNlIGEgc3VpdGFibGVcbiAqICAgICB0cmFuc2R1Y2VyIGZ1bmN0aW9uLiBJZiB0aGlzIGlzbid0IHByZXNlbnQsIHRoZSBpbnB1dCBjb2xsZWN0aW9uIHdpbGxcbiAqICAgICBzaW1wbHkgYmUgcmVkdWNlZCBpbnRvIGFuIGl0ZXJhdG9yIHdpdGhvdXQgdHJhbnNmb3JtYXRpb24uXG4gKiBAcmV0dXJuIHttb2R1bGU6Y29yZS5JdGVyYXRvcn0gQW4gaXRlcmF0b3IgY29udGFpbmluZyBhbGwgb2YgdGhlIHRyYW5zZm9ybWVkXG4gKiAgICAgdmFsdWVzIGZyb20gdGhlIGlucHV0IGNvbGxlY3Rpb24gZWxlbWVudHMuXG4gKi9cbmZ1bmN0aW9uIGFzSXRlcmF0b3IoY29sbGVjdGlvbiwgeGZvcm0pIHtcbiAgcmV0dXJuIHhmb3JtID8gdHJhbnNkdWNpbmdJdGVyYXRvcihjb2xsZWN0aW9uLCB4Zm9ybSkgOiBpdGVyYXRvcihjb2xsZWN0aW9uKTtcbn1cblxuLyoqXG4gKiBUcmFuc2Zvcm1zIHRoZSBlbGVtZW50cyBvZiB0aGUgaW5wdXQgY29sbGVjdGlvbiBhbmQgcmVkdWNlcyB0aGVtIGludG8gYSBuZXdcbiAqIGNvbGxlY3Rpb24gb2YgdGhlIHNhbWUgdHlwZS5cbiAqXG4gKiBUaGlzIGlzIHRoZSBoaWdoZXN0IGxldmVsIG9mIHRoZSB0aHJlZSBtYWluIHRyYW5zZHVjdGlvbiBmdW5jdGlvbnNcbiAqIChgc2VxdWVuY2VgLCBge0BsaW5rIG1vZHVsZTp4ZHVjZS5pbnRvfGludG99YCwgYW5kXG4gKiBge0BsaW5rIG1vZHVsZTp4ZHVjZS50cmFuc2R1Y2V8dHJhbnNkdWNlfWApLiBJdCBjcmVhdGVzIGEgbmV3IGNvbGxlY3Rpb24gb2ZcbiAqIHRoZSBzYW1lIHR5cGUgYXMgdGhlIGlucHV0IGNvbGxlY3Rpb24gYW5kIHJlZHVjZXMgdGhlIHRyYW5zZm9ybWVkIGVsZW1lbnRzXG4gKiBpbnRvIGl0LiBBZGRpdGlvbmFsbHksIHVubGlrZSBge0BsaW5rIG1vZHVsZTp4ZHVjZS5pbnRvfGludG99YCBhbmRcbiAqIGB7QGxpbmsgbW9kdWxlOnhkdWNlLnRyYW5zZHVjZXx0cmFuc2R1Y2V9YCwgdGhpcyBmdW5jdGlvbiBpcyBjYXBhYmxlIG9mXG4gKiBwcm9kdWNpbmcgYW4gaXRlcmF0b3IgKGFzIGxvbmcgYXMgdGhlIGlucHV0IGlzIGFuIGl0ZXJhdG9yKS5cbiAqXG4gKiBUaGUgaW5wdXQgY29sbGVjdGlvbiBtdXN0IG5vdCBvbmx5IGltcGxlbWVudCB0aGUgYGl0ZXJhdG9yYCBwcm90b2NvbCAoYXMgaW5cbiAqIHRoZSBsYXN0IHR3byBmdW5jdGlvbnMpIGJ1dCBhbHNvIHRoZSBgaW5pdGAsIGByZXN1bHRgLCBhbmQgYHN0ZXBgIHRyYW5zZHVjZXJcbiAqIHByb3RvY29scy4gU3BlY2lhbCBzdXBwb3J0IGlzIHByb3ZpZGVkIGZvciBhcnJheXMsIHN0cmluZ3MsIG9iamVjdHMsIGFuZFxuICogaXRlcmF0b3JzLCBzbyB0aGV5IG5lZWQgbm90IGltcGxlbWVudCBhbnkgcHJvdG9jb2wuXG4gKlxuICogVGhlIG9idmlvdXMgbGltaXRhdGlvbiBvZiB0aGlzIGZ1bmN0aW9uIGlzIHRoYXQgdGhlIHR5cGUgb2Ygb3V0cHV0IGNvbGxlY3Rpb25cbiAqIGNhbm5vdCBiZSBjaG9zZW4uIFNpbmNlIGl0IGlzIGFsd2F5cyB0aGUgc2FtZSBhcyB0aGUgaW5wdXQgY29sbGVjdGlvbiwgdGhpc1xuICogZnVuY3Rpb24gY2Fubm90IGJlIHVzZWQgdG8gY29udmVydCBhIGNvbGxlY3Rpb24gaW50byBhIGRpZmZlcmVudCB0eXBlLlxuICpcbiAqIGBgYFxuICogaW1wb3J0IHsgc2VxdWVuY2UsIG1hcCB9IGZyb20gXCJAY2hhbmtvL3hkdWNlXCI7XG4gKlxuICogY29uc3QgeGZvcm0gPSBtYXAoeCA9PiB4ICsgMSk7XG4gKlxuICogbGV0IHJlc3VsdCA9IHNlcXVlbmNlKFsxLCAyLCAzLCA0LCA1XSwgeGZvcm0pO1xuICogY29uc29sZS5sb2cocmVzdWx0KTsgICAvLyAtPiByZXN1bHQgPSBbMiwgMywgNCwgNSwgNl1cbiAqXG4gKiByZXN1bHQgPSBzZXF1ZW5jZSgnMTIzNDUnLCB4Zm9ybSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQpOyAgIC8vIC0+IHJlc3VsdCA9ICcyMzQ1NidcbiAqIGBgYFxuICpcbiAqIFRoZXNlIGV4YW1wbGVzIGFyZSBpZGVudGljYWwgdG8gc29tZSBvZiB0aGUgZXhhbXBsZXMgZnJvbSB0aGUgYGFzWGBcbiAqIGZ1bmN0aW9ucy4gT3RoZXIgZXhhbXBsZXMgYXJlIG5vdCBwb3NzaWJsZSB3aXRoIGBzZXF1ZW5jZWAgYmVjYXVzZSB0aGV5IGhhdmVcbiAqIGRpZmZlcmVudCBpbnB1dCBhbmQgb3V0cHV0IGNvbGxlY3Rpb24gdHlwZXMuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHBhcmFtIHttb2R1bGU6Y29yZS5SZWR1Y2libGVJdGVyYWJsZX0gY29sbGVjdGlvbiBUaGUgaW5wdXQgY29sbGVjdGlvbi4gVGhpc1xuICogICAgIG11c3QgaW1wbGVtZW50IHRoZSBgaXRlcmF0b3JgLCBgaW5pdGAsIGByZXN1bHRgLCBhbmQgYHN0ZXBgIHByb3RvY29scy5cbiAqICAgICBTcGVjaWFsIHN1cHBvcnQgaXMgcHJvdmlkZWQgZm9yIGFycmF5cywgc3RyaW5ncywgb2JqZWN0cywgYW5kIGl0ZXJhdG9ycyxcbiAqICAgICBzbyB0aGV5IGRvIG5vdCBoYXZlIHRvIGltcGxlbWVudCBhbnkgcHJvdG9jb2xzLlxuICogQHBhcmFtIHttb2R1bGU6Y29yZS5UcmFuc2R1Y2VyRnVuY3Rpb259IHhmb3JtIEEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIGFcbiAqICAgICB0cmFuc2R1Y2VyIG9iamVjdCB0aGF0IGRlZmluZXMgdGhlIHRyYW5zZm9ybWF0aW9uIGJlaW5nIGRvbmUgdG8gdGhlIGlucHV0XG4gKiAgICAgY29sbGVjdGlvbidzIGVsZW1lbnRzLiBBbnkgb2YgdGhlIHRyYW5zZHVjZXJzIGluIHRoZVxuICogICAgIHtAbGluayBtb2R1bGU6Y29yZS50cmFuc2R1Y2Vyc3x0cmFuc2R1Y2Vyc30gbW9kdWxlIGNhbiBwcm9kdWNlIGEgc3VpdGFibGVcbiAqICAgICB0cmFuc2R1Y2VyIGZ1bmN0aW9uLlxuICogQHJldHVybiB7bW9kdWxlOmNvcmUuUmVkdWNpYmxlSXRlcmFibGV9IEEgY29sbGVjdGlvbiBvZiB0aGUgc2FtZSB0eXBlIGFzIHRoZVxuICogICAgIGlucHV0IGNvbGxlY3Rpb24sIGNvbnRhaW5pbmcgYWxsIG9mIHRoZSB0cmFuc2Zvcm1lZCB2YWx1ZXMgZnJvbSB0aGUgaW5wdXRcbiAqICAgICBjb2xsZWN0aW9uIGVsZW1lbnRzLlxuICovXG5mdW5jdGlvbiBzZXF1ZW5jZShjb2xsZWN0aW9uLCB4Zm9ybSkge1xuICBzd2l0Y2ggKHRydWUpIHtcbiAgICBjYXNlIGlzQXJyYXkoY29sbGVjdGlvbik6XG4gICAgICByZXR1cm4gYXNBcnJheShjb2xsZWN0aW9uLCB4Zm9ybSk7XG4gICAgY2FzZSBpc09iamVjdChjb2xsZWN0aW9uKTpcbiAgICAgIHJldHVybiBhc09iamVjdChjb2xsZWN0aW9uLCB4Zm9ybSk7XG4gICAgY2FzZSBpc1N0cmluZyhjb2xsZWN0aW9uKTpcbiAgICAgIHJldHVybiBhc1N0cmluZyhjb2xsZWN0aW9uLCB4Zm9ybSk7XG4gICAgY2FzZSBpc0ltcGxlbWVudGVkKGNvbGxlY3Rpb24sIFwic3RlcFwiKTpcbiAgICAgIHJldHVybiB0cmFuc2R1Y2UoY29sbGVjdGlvbiwgeGZvcm0sIGNvbGxlY3Rpb24pO1xuICAgIGNhc2UgaXNJbXBsZW1lbnRlZChjb2xsZWN0aW9uLCBcIml0ZXJhdG9yXCIpOlxuICAgICAgcmV0dXJuIGFzSXRlcmF0b3IoY29sbGVjdGlvbiwgeGZvcm0pO1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBFcnJvcihgQ2Fubm90IHNlcXVlbmNlIGNvbGxlY3Rpb246ICR7Y29sbGVjdGlvbn1gKTtcbiAgfVxufVxuXG4vKipcbiAqIFRyYW5zZm9ybXMgdGhlIGVsZW1lbnRzIG9mIHRoZSBpbnB1dCBjb2xsZWN0aW9uIGFuZCByZWR1Y2VzIHRoZW0gaW50byB0aGVcbiAqIHRhcmdldCBjb2xsZWN0aW9uLlxuICpcbiAqIFRoaXMgaXMgbXVjaCBsaWtlIGB7QGxpbmsgbW9kdWxlOnhkdWNlLnRyYW5zZHVjZXx0cmFuc2R1Y2V9YCwgZXhjZXB0IHRoYXRcbiAqIGluc3RlYWQgb2YgZXhwbGljaXRseSBwcm92aWRpbmcgYSByZWR1Y2VyIChhbmQgcGVyaGFwcyBhbiBpbml0aWFsXG4gKiBjb2xsZWN0aW9uKSwgdGhlIHRhcmdldCBjb2xsZWN0aW9uIGFjdHMgYXMgYSByZWR1Y2VyIGl0c2VsZi4gVGhpcyByZXF1aXJlc1xuICogdGhhdCB0aGUgY29sbGVjdGlvbiBpbXBsZW1lbnQgdGhlIGBpbml0YCwgYHJlc3VsdGAsIGFuZCBgc3RlcGAgdHJhbnNkdWNlclxuICogcHJvdG9jb2wgZnVuY3Rpb25zLlxuICpcbiAqIElmIG5vIHRyYW5zZHVjZXIgZnVuY3Rpb24gaXMgcHJvdmlkZWQsIHRoZSBpbnB1dCBjb2xsZWN0aW9uIGVsZW1lbnRzIGFyZVxuICogcmVkdWNlZCBpbnRvIHRoZSB0YXJnZXQgY29sbGVjdGlvbiB3aXRob3V0IGJlaW5nIHRyYW5zZm9ybWVkLiBUaGlzIGNhbiBiZVxuICogdXNlZCB0byBjb252ZXJ0IG9uZSBraW5kIG9mIGNvbGxlY3Rpb24gaW50byBhbm90aGVyLlxuICpcbiAqIGBgYFxuICogaW1wb3J0IHsgaW50bywgbWFwIH0gZnJvbSBcIkBjaGFua28veGR1Y2VcIjtcbiAqXG4gKiBjb25zdCB4Zm9ybSA9IG1hcCh4ID0+IHggKyAxKTtcbiAqXG4gKiBsZXQgcmVzdWx0ID0gaW50byhbXSwgWzEsIDIsIDMsIDQsIDVdLCB4Zm9ybSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQpOyAgIC8vIC0+IFsyLCAzLCA0LCA1LCA2XVxuICpcbiAqIHJlc3VsdCA9IGludG8oXCJcIiwgWzEsIDIsIDMsIDQsIDVdLCB4Zm9ybSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQpOyAgIC8vIC0+IFwiMjM0NTZcIlxuICpcbiAqIHJlc3VsdCA9IGludG8oW10sIFwiMTIzNDVcIiwgeGZvcm0pO1xuICogY29uc29sZS5sb2cocmVzdWx0KTsgICAvLyAtPiBbMiwgMywgNCwgNSwgNl1cbiAqXG4gKiByZXN1bHQgPSBpbnRvKFwiXCIsIFwiMTIzNDVcIiwgeGZvcm0pO1xuICogY29uc29sZS5sb2cocmVzdWx0KTsgICAvLyAtPiBcIjIzNDU2XCJcbiAqIGBgYFxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwYXJhbSB7bW9kdWxlOmNvcmUuUmVkdWNpYmxlfSB0YXJnZXQgVGhlIGNvbGxlY3Rpb24gaW50byB3aGljaCBhbGwgb2YgdGhlXG4gKiAgICAgdHJhbnNmb3JtZWQgaW5wdXQgY29sbGVjdGlvbiBlbGVtZW50cyB3aWxsIGJlIHJlZHVjZWQuIFRoaXMgY29sbGVjdGlvblxuICogICAgIG11c3QgaW1wbGVtZW50IHRoZSBgaW5pdGAsIGByZXN1bHRgLCBhbmQgYHN0ZXBgIHByb3RvY29sIGZ1bmN0aW9ucyBmcm9tXG4gKiAgICAgdGhlIHRyYW5zZHVjZXIgcHJvdG9jb2wuIFNwZWNpYWwgc3VwcG9ydCBpcyBwcm92aWRlZCBmb3IgYXJyYXlzLCBzdHJpbmdzLFxuICogICAgIGFuZCBvYmplY3RzLCBzbyB0aGV5IG5lZWQgbm90IGltcGxlbWVudCB0aGUgcHJvdG9jb2wuXG4gKiBAcGFyYW0ge21vZHVsZTpjb3JlLkl0ZXJhYmxlfSBjb2xsZWN0aW9uIFRoZSBpbnB1dCBjb2xsZWN0aW9uLiBUaGUgb25seVxuICogICAgIHJlcXVpcmVtZW50IG9mIHRoaXMgY29sbGVjdGlvbiBpcyB0aGF0IGl0IGltcGxlbWVudCB0aGUgYGl0ZXJhdG9yYFxuICogICAgIHByb3RvY29sLiBTcGVjaWFsIHN1cHBvcnQgaXMgcHJvdmlkZWQgYnkgdGhlIGxpYnJhcnkgZm9yIG9iamVjdHMsIHRvIHRoZXlcbiAqICAgICBjYW4gYWxzbyBiZSB1c2VkLlxuICogQHBhcmFtIHttb2R1bGU6Y29yZS5UcmFuc2R1Y2VyRnVuY3Rpb259IFt4Zm9ybV0gQSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgYVxuICogICAgIHRyYW5zZHVjZXIgb2JqZWN0IHRoYXQgZGVmaW5lcyB0aGUgdHJhbnNmb3JtYXRpb24gYmVpbmcgZG9uZSB0byB0aGUgaW5wdXRcbiAqICAgICBjb2xsZWN0aW9uJ3MgZWxlbWVudHMuIEFueSBvZiB0aGUgdHJhbnNkdWNlcnMgaW4gdGhlXG4gKiAgICAge0BsaW5rIG1vZHVsZTp4ZHVjZXx4ZHVjZX0gbW5vZHVsZSBjYW4gcHJvZHVjZSBhIHN1aXRhYmxlIHRyYW5zZHVjZXJcbiAqICAgICBmdW5jdGlvbi4gSWYgdGhpcyBpc24ndCBwcmVzZW50LCB0aGUgaW5wdXQgY29sbGVjdGlvbiB3aWxsIHNpbXBseSBiZVxuICogICAgIHJlZHVjZWQgaW50byB0aGUgdGFyZ2V0IGNvbGxlY3Rpb24gd2l0aG91dCB0cmFuc2Zvcm1hdGlvbi5cbiAqIEByZXR1cm4ge21vZHVsZTpjb3JlLlJlZHVjaWJsZX0gVGhlIGB0YXJnZXRgIGNvbGxlY3Rpb24sIHdpdGggYWxsIG9mIHRoZVxuICogICAgIHRyYW5mb3JtZWQgaW5wdXQgY29sbGVjdGlvbiBlbGVtZW50cyByZWR1Y2VkIG9udG8gaXQuXG4gKi9cbmZ1bmN0aW9uIGludG8odGFyZ2V0LCBjb2xsZWN0aW9uLCB4Zm9ybSkge1xuICBzd2l0Y2ggKHRydWUpIHtcbiAgICBjYXNlIGlzQXJyYXkodGFyZ2V0KTpcbiAgICAgIHJldHVybiB0cmFuc2R1Y2UoY29sbGVjdGlvbiwgeGZvcm0sIHRvUmVkdWNlcihbXSksIHRhcmdldCk7XG4gICAgY2FzZSBpc09iamVjdCh0YXJnZXQpOlxuICAgICAgcmV0dXJuIHRyYW5zZHVjZShjb2xsZWN0aW9uLCB4Zm9ybSwgdG9SZWR1Y2VyKHt9KSwgdGFyZ2V0KTtcbiAgICBjYXNlIGlzU3RyaW5nKHRhcmdldCk6XG4gICAgICByZXR1cm4gdHJhbnNkdWNlKGNvbGxlY3Rpb24sIHhmb3JtLCB0b1JlZHVjZXIoXCJcIiksIHRhcmdldCk7XG4gICAgY2FzZSBpc0ltcGxlbWVudGVkKHRhcmdldCwgXCJzdGVwXCIpOlxuICAgICAgcmV0dXJuIHRyYW5zZHVjZShjb2xsZWN0aW9uLCB4Zm9ybSwgdGFyZ2V0LCB0YXJnZXQpO1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBFcnJvcihgQ2Fubm90IHJlZHVjZSBjb2xsZWN0aW9uIGludG8gJHt0YXJnZXR9OiAke2NvbGxlY3Rpb259YCk7XG4gIH1cbn1cblxuLyoqXG4gKiBDb21wb3NlcyB0d28gb3IgbW9yZSB0cmFuc2R1Y2VyIGZ1bmN0aW9ucyBpbnRvIGEgc2luZ2xlIHRyYW5zZHVjZXIgZnVuY3Rpb24uXG4gKlxuICogRWFjaCBmdW5jdGlvbiB0aGF0IHRha2VzIGEgdHJhbnNkdWNlciBmdW5jdGlvblxuICogKGB7QGxpbmsgbW9kdWxlOnhkdWNlLnNlcXVlbmNlfHNlcXVlbmNlfWAsIGB7QGxpbmsgbW9kdWxlOnhkdWNlLmludG98aW50b31gLFxuICogZXRjLikgaXMgb25seSBjYXBhYmxlIG9mIGFjY2VwdGluZyBvbmUgb2YgdGhlbS4gSWYgdGhlcmUgaXMgYSBuZWVkIHRvIGhhdmVcbiAqIHNldmVyYWwgdHJhbnNkdWNlcnMgY2hhaW5lZCB0b2dldGhlciwgdGhlbiB1c2UgYGNvbXBvc2VgIHRvIGNyZWF0ZSBhXG4gKiB0cmFuc2R1Y2VyIGZ1bmN0aW9uIHRoYXQgZG9lcyB3aGF0IGFsbCBvZiB0aGVtIGRvLlxuICpcbiAqIE5PVEU6IEluIGZ1bmN0aW9uYWwgcHJvZ3JhbW1pbmcsIGEgY29tcG9zZSBmdW5jdGlvbiBpcyBnZW5lcmFsbHkgb3JkZXJlZCBzb1xuICogdGhhdCB0aGUgZmlyc3QtZXhlY3V0ZWQgZnVuY3Rpb24gaXMgbGlzdGVkIGxhc3QuIFRoaXMgaXMgZG9uZSBpbiB0aGUgb3Bwb3NpdGVcbiAqIHdheSwgd2l0aCB0aGUgZmlyc3QgdHJhbnNkdWNlciBleGVjdXRpbmcgZmlyc3QsIGV0Yy4gVGhpcyBpcyBhIG1vcmUgbmF0dXJhbFxuICogb3JkZXJpbmcgZm9yIHRyYW5zZHVjZXIgZnVuY3Rpb25zIGJlY2F1c2UgdGhlcmUgaXMgYSB2ZXJ5IHJlYWwgZGlyZWN0aW9uYWxcbiAqIHB1bGwgb2YgZWxlbWVudHMgdGhyb3VnaCBhIGNoYWluIG9mIGNvbXBvc2VkIHRyYW5zZHVjZXIgZnVuY3Rpb25zLlxuICpcbiAqIGBgYFxuICogaW1wb3J0IHsgY29tcG9zZSwgc2VxdWVuY2UgfSBmcm9tIFwiQGNoYW5rby94ZHVjZVwiO1xuICogaW1wb3J0IHsgbWFwLCBmaWx0ZXIsIHRha2UgfSBmcm9tIFwiQGNoYW5rby90cmFuc2R1Y2Vyc1wiO1xuICpcbiAqIGNvbnN0IGFkZDEgPSB4ID0+IHggKyAxO1xuICogY29uc3Qgb2RkID0geCA9PiB4ICUgMiAhPT0gMDtcbiAqXG4gKiBjb25zdCB4Zm9ybSA9IGNvbXBvc2UobWFwKGFkZDEpLCBmaWx0ZXIob2RkKSwgdGFrZSgzKSk7XG4gKlxuICogY29uc3QgcmVzdWx0ID0gc2VxdWVuY2UoWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwXSwgeGZvcm0pO1xuICogY29uc29sZS5sb2cocmVzdWx0KTsgICAvLyAtPiBbMywgNSwgN107XG4gKiBgYGBcbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcGFyYW0gey4uLm1vZHVsZTpjb3JlLlRyYW5zZHVjZXJGdW5jdGlvbn0gZm5zIE9uZSBvciBtb3JlIGZ1bmN0aW9uIHRoYXQgZWFjaFxuICogICAgIGNyZWF0ZSBhIHRyYW5zZHVjZXIgb2JqZWN0IHRoYXQgZGVmaW5lcyB0aGUgdHJhbnNmb3JtYXRpb24gYmVpbmcgZG9uZSB0b1xuICogICAgIGEgY29sbGVjdGlvbidzIGVsZW1lbnRzLiBBbnkgb2YgdGhlIHRyYW5zZHVjZXJzIGluIHRoZVxuICogICAgIHtAbGluayBtb2R1bGU6eGR1Y2V8eGR1Y2V9IG1vZHVsZSBjYW4gcHJvZHVjZSBhIHN1aXRhYmxlIHRyYW5zZHVjZXJcbiAqICAgICBmdW5jdGlvbi5cbiAqIEByZXR1cm4ge21vZHVsZTpjb3JlLlRyYW5zZHVjZXJGdW5jdGlvbn0gQSB0cmFuc2R1Y2VyIGZ1bmN0aW9uIHRoYXQgcHJvZHVjZXNcbiAqICAgICBhIHRyYW5zZHVjZXIgb2JqZWN0IHRoYXQgcGVyZm9ybXMgKmFsbCogb2YgdGhlIHRyYW5zZm9ybWF0aW9ucyBvZiB0aGVcbiAqICAgICBvYmplY3RzIHByb2R1Y2VkIGJ5IHRoZSBpbnB1dCB0cmFuc2R1Y2VyIGZ1bmN0aW9ucy5cbiAqL1xuZnVuY3Rpb24gY29tcG9zZSguLi5mbnMpIHtcbiAgY29uc3QgcmV2ZXJzZWQgPSBmbnMucmV2ZXJzZSgpO1xuICByZXR1cm4gdmFsdWUgPT4gcmV2ZXJzZWQucmVkdWNlKChhY2MsIGZuKSA9PiBmbihhY2MpLCB2YWx1ZSk7XG59XG5cbmV4cG9ydCB7XG4gIHRyYW5zZHVjZSxcbiAgc2VxdWVuY2UsXG4gIGludG8sXG4gIGFzQXJyYXksXG4gIGFzT2JqZWN0LFxuICBhc1N0cmluZyxcbiAgYXNJdGVyYXRvcixcbiAgY29tcG9zZSxcbiAgdG9SZWR1Y2VyLFxuICB0b0Z1bmN0aW9uXG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG5cbi8qKlxuICogQSBjb2xsZWN0aW9uIG9mIG1pc2NlbGxhbmVvdXMgZnVuY3Rpb25zIHRoYXQgZG9uJ3QgcGFydGljdWxhcmx5IGZpdCBhbnl3aGVyZVxuICogZWxzZS5cbiAqXG4gKiBAbW9kdWxlIHhkdWNlL3V0aWxzXG4gKiBAcHJpdmF0ZVxuICovXG5cbmltcG9ydCB7IGlzTnVtYmVyLCBpc0Z1bmN0aW9uIH0gZnJvbSBcIkBjaGFua28vY29yZVwiO1xuXG4vKipcbiAqIERldGVybWluZXMgZXF1YWxpdHkgYnkgdGhlIFNhbWVWYWx1ZVplcm8gbWV0aG9kLCB3aGljaCBkZWZpbmVzIHRoYXQgYE5hTmBcbiAqIGVxdWFscyBpdHNlbGYgYW5kIGArMGAgZXF1YWxzIGAtMGAuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGEgVGhlIGZpcnN0IG51bWJlciB0byBjb21wYXJlLlxuICogQHBhcmFtIHtudW1iZXJ9IGIgVGhlIHNlY29uZCBudW1iZXIgdG8gY29tcGFyZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBFaXRoZXIgYHRydWVgIGlmIHRoZSB0d28gbnVtYmVycyBhcmUgZXF1YWwsIG9yIGBmYWxzZWAgaWZcbiAqICAgICB0aGV5IGFyZSBub3QuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBzYW1lVmFsdWVaZXJvKGEsIGIpIHtcbiAgcmV0dXJuIGEgPT09IGIgfHwgKGlzTmFOKGEpICYmIGlzTmFOKGIpKTtcbn1cblxuLyoqXG4gKiBQYXJzZXMgYXJndW1lbnRzIGZvciB0cmFuc2R1Y2VycyB0aGF0IHRha2UgbnVtYmVycy4gVGhlIHR3byBhcmd1bWVudHMgYXJlXG4gKiBhIGNvbGxlY3Rpb24gYW5kIGEgbnVtYmVyLCBidXQgdGhlIGNvbGxlY3Rpb24gaXMgb3B0aW9uYWwuIFRoaXMgZnVuY3Rpb25cbiAqIHdvcmtzIG91dCB3aGV0aGVyIGEgY29sbGVjdGlvbiBleGlzdHMgYW5kIHJldHVybnMgYSBjb2xsZWN0aW9uICh3aGljaCBtYXkgYmVcbiAqIGBudWxsYCkgYW5kIGEgbnVtYmVyLlxuICpcbiAqIEBwYXJhbSB7Kn0gW2NvbGxlY3Rpb25dIEFuIG9wdGlvbmFsIGNvbGxlY3Rpb24gdGhhdCB0aGUgdHJhbnNkdWNlciB3aWxsIGFjdFxuICogICAgIHVwb24uXG4gKiBAcGFyYW0ge251bWJlcn0gbiBBIG51bWJlciB3aG9zZSBwdXJwb3NlIGRlcGVuZHMgb24gdGhlIHRyYW5zZHVjZXIuXG4gKiBAcmV0dXJucyB7QXJyYXk8KiwgbnVtYmVyPn0gQW4gYXJyYXkgY29udGFpbmluZyB0aGUgY29sbGVjdGlvbiAod2hpY2ggbWF5IGJlXG4gKiAgICAgYG51bGxgKSBhcyB0aGUgZmlyc3QgZWxlbWVudCBhbmQgdGhlIG51bWJlciBhcyB0aGUgc2Vjb25kLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gcGFyc2VOdW1iZXJBcmdzKGNvbGxlY3Rpb24sIG4pIHtcbiAgcmV0dXJuIGlzTnVtYmVyKGNvbGxlY3Rpb24pID8gW251bGwsIGNvbGxlY3Rpb25dIDogW2NvbGxlY3Rpb24sIG5dO1xufVxuXG4vKipcbiAqIFBhcnNlcyBhcmd1bWVudHMgZm9yIHRyYW5zZHVjZXJzIHRoYXQgdGFrZSBmdW5jdGlvbnMuIFRoZSB0d28gYXJndW1lbnRzIGFyZSBhXG4gKiBjb2xsZWN0aW9uIGFuZCBhIGZ1bmN0aW9uLCBidXQgdGhlIGNvbGxlY3Rpb24gaXMgb3B0aW9uYWwuIFRoaXMgZnVuY3Rpb25cbiAqIHdvcmtzIG91dCB3aGljaCBleGlzdCBhbmQgcmV0dXJucyBhIGNvbGxlY3Rpb24gKHdoaWNoIG1heSBiZSBgbnVsbGApIGFuZCBhXG4gKiBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0geyp9IFtjb2xsZWN0aW9uXSBBbiBvcHRpb25hbCBjb2xsZWN0aW9uIHRoYXQgdGhlIHRyYW5zZHVjZXIgd2lsbCBhY3RcbiAqICAgICB1cG9uLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gQSBmdW5jdGlvbiBtZWFudCB0byBhY3QgdmlhIHRoZSB0cmFuc2R1Y2VyLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gcGFyc2VGdW5jdGlvbkFyZ3MoY29sbGVjdGlvbiwgZm4pIHtcbiAgcmV0dXJuIGlzRnVuY3Rpb24oY29sbGVjdGlvbikgPyBbbnVsbCwgY29sbGVjdGlvbl0gOiBbY29sbGVjdGlvbiwgZm5dO1xufVxuXG4vKipcbiAqIEEgY29udmVuaWVuY2UgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBmaXJzdCBrZXkgYW5kIHZhbHVlIGluIGFuIG9iamVjdCBhcyBhXG4gKiB0d28tcHJvcGVydHkgb2JqZWN0LCBvbmUgcHJvcGVydHkgZm9yIHRoZSBrZXkgYW5kIG9uZSBmb3IgdGhlIHZhbHVlLiBUaGlzIGlzXG4gKiBpbnRlbmRlZCB0byB3b3JrIHdpdGggdGhlIHZhbHVlcyBwcm92aWRlZCBieSBhbiBvYmplY3QgaXRlcmF0b3IsIGFzIHRoZVxuICogc3ludGF4IG9mIG9iamVjdHMgZG9lc24ndCB3b3JrIHZlcnkgbmljZWx5IHdpdGggc2luZ2xlLXByb3BlcnR5IG9iamVjdHMuXG4gKlxuICogYGBgXG4gKiBjb25zdCBvYmogPSB7IGM6IDEsIGE6IDIsIGI6IDMgfTtcbiAqIGNvbnN0IGl0ZXIgPSBhc0l0ZXJhdG9yKG9iaik7XG4gKlxuICogbGV0IHZhbHVlID0gaXRlci5uZXh0KCkudmFsdWU7XG4gKiBjb25zb2xlLmxvZyh2YWx1ZSk7ICAgICAgICAgICAgIC8vIC0+IHsgYzogMSB9XG4gKiBjb25zb2xlLmxvZyhwcm9wZXJ0eSh2YWx1ZSkpOyAgIC8vIC0+IHsgazogXCJjXCIsIHY6IDEgfVxuICpcbiAqIHZhbHVlID0gaXRlci5uZXh0KCkudmFsdWU7XG4gKiBjb25zb2xlLmxvZyh2YWx1ZSk7ICAgICAgICAgICAgIC8vIC0+IHsgYTogMiB9XG4gKiBjb25zb2xlLmxvZyhwcm9wZXJ0eSh2YWx1ZSkpOyAgIC8vIC0+IHsgazogXCJhXCIsIHY6IDIgfVxuICpcbiAqIHZhbHVlID0gaXRlci5uZXh0KCkudmFsdWU7XG4gKiBjb25zb2xlLmxvZyh2YWx1ZSk7ICAgICAgICAgICAgIC8vIC0+IHsgYjogMyB9XG4gKiBjb25zb2xlLmxvZyhwcm9wZXJ0eSh2YWx1ZSkpOyAgIC8vIC0+IHsgazogXCJiXCIsIHY6IDMgfVxuICogYGBgXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHBhcmFtIHtvYmplY3R9IG9iaiBUaGUgb2JqZWN0IHdob3NlIGZpcnN0IHByb3BlcnR5IGlzIHJldHVybmVkLlxuICogQHJldHVybiB7bW9kdWxlOmNvcmUuUHJvcGVydHlPYmplY3R9IFRoZSBwcm9wZXJ0eSBhcyBhIHR3by1wcm9wZXJ0eSBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIGt2KG9iaikge1xuICBjb25zdCBrZXkgPSBPYmplY3Qua2V5cyhvYmopWzBdO1xuICByZXR1cm4geyBrOiBrZXksIHY6IG9ialtrZXldIH07XG59XG5cbi8qKlxuICogQSBjb252ZW5pZW5jZSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIGtleSBvZiB0aGUgZmlyc3QgcHJvcGVydHkgb2YgYW5cbiAqIG9iamVjdC4gVGhpcyBpcyBtZWFudCBmb3IgdXNlIHdpdGggb2JqZWN0IGl0ZXJhdG9ycyB0byBtb3JlIGNvbnZlbmllbnRseVxuICogYWNjZXNzIHBhcnRzIG9mIHRoZSBzaW5nbGUtcHJvcGVydHkgb2JqZWN0cyB0aGF0IHRoZXkgZW1pdC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIFRoZSBvYmplY3Qgd2hvc2UgZmlyc3Qga2V5IGlzIHJldHVybmVkLlxuICogQHJldHVybiB7KFN0cmluZ3xTeW1ib2wpfSBUaGUga2V5IG9mIHRoZSBvYmplY3QncyBmaXJzdCBwcm9wZXJ0eS5cbiAqL1xuZnVuY3Rpb24ga2V5KG9iaikge1xuICByZXR1cm4ga3Yob2JqKS5rO1xufVxuXG4vKipcbiAqIEEgY29udmVuaWVuY2UgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSB2YWx1ZSBvZiB0aGUgZmlyc3QgcHJvcGVydHkgb2YgYW5cbiAqIG9iamVjdC4gVGhpcyBpcyBtZWFudCBmb3IgdXNlIHdpdGggb2JqZWN0IGl0ZXJhdG9ycyB0byBtb3JlIGNvbnZlbmllbnRseVxuICogYWNjZXNzIHBhcnRzIG9mIHRoZSBzaW5nbGUtcHJvcGVydHkgb2JqZWN0cyB0aGF0IHRoZXkgZW1pdC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIFRoZSBvYmplY3Qgd2hvc2UgZmlyc3QgdmFsdWUgaXMgcmV0dXJuZWQuXG4gKiBAcmV0dXJuIHsqfSBUaGUgdmFsdWUgb2YgdGhlIG9iamVjdCdzIGZpcnN0IHByb3BlcnR5LlxuICovXG5mdW5jdGlvbiB2YWx1ZShvYmopIHtcbiAgcmV0dXJuIGt2KG9iaikudjtcbn1cblxuLyoqXG4gKiBBY2NlcHRzIGEgcHJlZGljYXRlIGZ1bmN0aW9uIGFuZCByZXR1cm5zIGEgbmV3IHByZWRpY2F0ZSBmdW5jdGlvbiB3aGljaFxuICogcmV0dXJucyB0aGUgb3Bwb3NpdGUgb2YgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwYXJhbSB7bW9kdWxlOnhkdWNlLlByZWRpY2F0ZUZ1bmN0aW9ufSBmbiBBIHByZWRpY2F0ZSBmdW5jdGlvbi5cbiAqIEByZXR1cm5zIHttb2R1bGU6eGR1Y2UuUHJlZGljYXRlRnVuY3Rpb259IEEgcHJlZGljYXRlIGZ1bmN0aW9uIHRoYXQgcmV0dXJuc1xuICogICAgIHRoZSBvcHBvc2l0ZSB2YWx1ZSBhcyB0aGUgc3VwcGxpZWQgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGNvbXBsZW1lbnQoZm4pIHtcbiAgcmV0dXJuICguLi5hcmdzKSA9PiAhZm4oLi4uYXJncyk7XG59XG5cbmV4cG9ydCB7XG4gIHNhbWVWYWx1ZVplcm8sXG4gIHBhcnNlTnVtYmVyQXJncyxcbiAgcGFyc2VGdW5jdGlvbkFyZ3MsXG4gIGt2LFxuICBrZXksXG4gIHZhbHVlLFxuICBjb21wbGVtZW50XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==