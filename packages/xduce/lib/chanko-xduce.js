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
         * `{@link module:xduce-tools.protocols|protocols}` is for.
         *
         * The best way to use these keys can be seen in the immutable-js example above.
         * Instead of worrying about the name of the key for the `init` protocol, the
         * value of `protocols.init` is used.
         *
         * `{@link module:xduce-tools.protocols|protocols}` defines these protocol
         * property names.
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
         * The `{@link module:xduce-tools.iterator|iterator}` function can be passed a
         * sorting function that can sort keys in any other way.
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
         * A helper function named `{@link module:xduce-tools.property|property}` can
         * improve this by handling the boilerplate.
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
         * Every transducer function except for
         * `{@link module:xduce-tools.sequence|sequence}` is capable of turning an
         * object into a different type of collection, turning a different type of
         * collection into an object, or both. Objects are different because they're the
         * only "collections" that have two different pieces of data per element.
         * Because of this, we have to have a strategy on how to move from one to
         * another.
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
         * @callback ResultFunction
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
         * @property {module:xdcore.InitFunction} Symbol.for("transducer/init") A
         *     function that can create a new, empty copy of the reducible type.
         * @property {module:xdcore.StepFunction} Symbol.for("transducer/step") A
         *     function that can accept a value of the reducible type and a new element
         *     to be added to it and return the reducible with the new element
         *     incorporated.
         * @property {module:xdcore.ResultFunction} Symbol.for("transducer/result") A
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
         * Returns a result function for a collection. This is a function that performs
         * any final processing that should be done on the result of a reduction. If the
         * collection doesn't support reduction, `null` is returned.
         *
         * In order to support the conversion of functions into reducers, function
         * support is also provided.
         *
         * @param {(object|function|external:Iterable)}} collection A collection to
         *     create a step function for. This can be anything that supports the
         *     iteration protocol, a plain object, or a function.
         * @return {module:xdcore.ResultFunction} A function that, when given a reduced
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
         *     properties for `init`, `step`, and `result`. This object is suitable for
         *     use as a reducer object (one provided to
         *     `{@link module:xdcore.reduce|reduce}`). If the provided collection is not
         *     reducible, all of the properties of this object will be `null`.
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

            [modules_protocol__WEBPACK_IMPORTED_MODULE_0__["protocols"].result](value) {
              return reducer[modules_protocol__WEBPACK_IMPORTED_MODULE_0__["protocols"].result](value);
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
          return !!(value === null || value === void 0 ? void 0 : value[modules_protocol__WEBPACK_IMPORTED_MODULE_0__["protocols"].completed]);
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

      [_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["protocols"].result](value) {
        if (count > 0) {
          return Object(_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["ensureUncompleted"])(xform[_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](value, part.slice(0, count)));
        }

        return xform[_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["protocols"].result](value);
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

      [_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["protocols"].result](value) {
        const count = part.length;

        if (count > 0) {
          return Object(_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["ensureUncompleted"])(xform[_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](value, part.slice(0, count)));
        }

        return xform[_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["protocols"].result](value);
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

    [_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["protocols"].result](value) {
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
        xf[_chanko_xdcore__WEBPACK_IMPORTED_MODULE_0__["protocols"].result](result);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly94ZHVjZS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8veGR1Y2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8veGR1Y2UveGRjb3JlL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly94ZHVjZS94ZGNvcmUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8veGR1Y2UveGRjb3JlL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly94ZHVjZS94ZGNvcmUvc3JjL21vZHVsZXMvaXRlcmF0aW9uLmpzIiwid2VicGFjazovL3hkdWNlL3hkY29yZS9zcmMvbW9kdWxlcy9wcm90b2NvbC5qcyIsIndlYnBhY2s6Ly94ZHVjZS94ZGNvcmUvc3JjL21vZHVsZXMvcmVkdWN0aW9uLmpzIiwid2VicGFjazovL3hkdWNlL3hkY29yZS9zcmMvbW9kdWxlcy91dGlscy5qcyIsIndlYnBhY2s6Ly94ZHVjZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly94ZHVjZS8uL3NyYy9tb2R1bGVzL2Jhc2ljLmpzIiwid2VicGFjazovL3hkdWNlLy4vc3JjL21vZHVsZXMvY2h1bmsuanMiLCJ3ZWJwYWNrOi8veGR1Y2UvLi9zcmMvbW9kdWxlcy9kaXN0aW5jdC5qcyIsIndlYnBhY2s6Ly94ZHVjZS8uL3NyYy9tb2R1bGVzL2Ryb3AuanMiLCJ3ZWJwYWNrOi8veGR1Y2UvLi9zcmMvbW9kdWxlcy9maWx0ZXIuanMiLCJ3ZWJwYWNrOi8veGR1Y2UvLi9zcmMvbW9kdWxlcy9tYXAuanMiLCJ3ZWJwYWNrOi8veGR1Y2UvLi9zcmMvbW9kdWxlcy90YWtlLmpzIiwid2VicGFjazovL3hkdWNlLy4vc3JjL21vZHVsZXMvdHJhbnNkdWN0aW9uLmpzIiwid2VicGFjazovL3hkdWNlLy4vc3JjL21vZHVsZXMvdW5pcXVlLmpzIiwid2VicGFjazovL3hkdWNlLy4vc3JjL21vZHVsZXMvdXRpbHMuanMiXSwibmFtZXMiOlsia2V5cyIsIk9iamVjdCIsImluZGV4IiwiayIsIm9iaiIsImN1cnJlbnQiLCJmbiIsImlzRnVuY3Rpb24iLCJ2YWx1ZSIsIlN5bWJvbCIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJmdW5jdGlvbkl0ZXJhdG9yIiwiaXNPYmplY3QiLCJvYmplY3RJdGVyYXRvciIsImlzSW1wbGVtZW50ZWQiLCJwcm90b2NvbHMiLCJpbml0Iiwic3RlcCIsInJlc3VsdCIsImNvbXBsZXRlZCIsImNvbGxlY3Rpb24iLCJwIiwiaXNTdHJpbmciLCJpc0FycmF5IiwiRXJyb3IiLCJ2IiwiYWNjIiwibWF4IiwiTWF0aCIsIkFSUkFZX1JFRFVDRVIiLCJ0b1JlZHVjZXIiLCJPQkpFQ1RfUkVEVUNFUiIsIlNUUklOR19SRURVQ0VSIiwicmVkdWNlciIsInIiLCJ0cmFuc2R1Y2VyIiwiaXNDb21wbGV0ZWQiLCJjb21wbGV0ZSIsInVuY29tcGxldGUiLCJpdGVyIiwiaXRlcmF0b3IiLCJuYW1lIiwidG9TdHJpbmciLCJwcm90byIsImN0b3IiLCJpc0Zpbml0ZSIsIkFycmF5IiwiaWRlbnRpdHkiLCJzZXF1ZW5jZSIsInhmb3JtIiwidG9UcmFuc2R1Y2VyIiwiZmxhdHRlbiIsInN1Ylhmb3JtIiwiaXNJdGVyYWJsZSIsInJlZHVjZSIsInJlcGVhdCIsIm4iLCJjb2wiLCJudW0iLCJwYXJzZU51bWJlckFyZ3MiLCJpIiwiTk9fVkFMVUUiLCJjaHVuayIsImNvdW50IiwicGFydCIsIm91dCIsInNsaWNlIiwiZW5zdXJlVW5jb21wbGV0ZWQiLCJjaHVua0J5IiwiZnVuYyIsInBhcnNlRnVuY3Rpb25BcmdzIiwibGFzdCIsInNhbWVWYWx1ZVplcm8iLCJwdXNoIiwibGVuZ3RoIiwiZGlzdGluY3RXaXRoIiwiZGlzdGluY3RCeSIsImEiLCJiIiwiZGlzdGluY3QiLCJkcm9wIiwiZHJvcFdoaWxlIiwiZHJvcHBpbmciLCJmaWx0ZXIiLCJyZWplY3QiLCJjb21wbGVtZW50IiwibWFwIiwiZmxhdE1hcCIsImNvbXBvc2UiLCJ0YWtlIiwiZW5zdXJlQ29tcGxldGVkIiwidGFrZVdoaWxlIiwidGFrZU50aCIsInRyYW5zZHVjaW5nSXRlcmF0b3IiLCJzdGVwUmVkdWNlciIsInhpdGVyIiwiaW5wdXQiLCJpdGVtcyIsInVuc2hpZnQiLCJ4ZiIsIm5leHQiLCJkb25lIiwicG9wIiwic3RlcFZhbHVlIiwidHJhbnNkdWNlIiwiYXNBcnJheSIsImFzT2JqZWN0IiwiYXNTdHJpbmciLCJhc0l0ZXJhdG9yIiwiaW50byIsInRhcmdldCIsImZucyIsInJldmVyc2VkIiwicmV2ZXJzZSIsInVuaXF1ZVdpdGgiLCJ1bmlxdWVzIiwic29tZSIsInUiLCJ1bmlxdWVCeSIsInVuaXF1ZSIsImlzTmFOIiwiaXNOdW1iZXIiLCJrdiIsImtleSIsImFyZ3MiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQSxZQUNBLDJCQURBLEtBRUEsRUFLQTtBQUNDLENBVEQsRUFTQyxJQVRELEVBU0M7QUFDRDs7Ozs7QUNWQTtBQUFBOztBQUNBO0FBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUE7OztBQUVBO0FBQUE7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTs7QUFDQTs7O0FBQUE7QUFDQTtBQUFBLHFCQURBOztBQUVBO0FBQUEsa0JBRkE7O0FBR0E7QUFBQTtBQUNBOztBQUpBOzs7QUFNQTtBQUFBOztBQUNBOztBQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBO0FBQ0E7QUFBQTs7Ozs7QUFHQTtBQUFBOztBQUNBOzs7QUFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQTBDLDRCQUExQztBQUEwQztBQUExQztBQUNBO0FBQUE7QUFDQTs7QUFBQSxPQUpBOzs7QUFNQTtBQUFBOztBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQXdEO0FBQXhEO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUFpRDtBQUFqRDtBQUNBO0FBQUEsT0FMQTs7O0FBT0E7QUFBQTs7QUFDQTtBQUFBOztBQUNBO0FBQUE7O0FBQ0E7QUFBQTs7QUFDQTtBQUFBOztBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7QUFBQTtBQUNBOztBQUFBO0FBQ0E7O0FBQUE7QUFDQTs7QUFBQTtBQUNBOzs7QUFBQTtBQUF5QywwQkFBekM7QUFBeUM7QUFBekM7QUFDQTs7QUFBQTtBQUFnSDtBQUFxQixTQUFySSxDQUFxSSxJQUFySSxDQUFxSSxJQUFySSxFQUFxSSxHQUFySTtBQUNBOztBQUFBO0FBQ0E7QUFBQSxPQVRBOzs7QUFXQTtBQUFBOztBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQTJCO0FBQTRCLFNBRHZEO0FBRUE7QUFBQTtBQUFpQztBQUFlLFNBRmhEO0FBR0E7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBLE9BTkE7OztBQVFBO0FBQUE7O0FBQ0E7OztBQUFBO0FBQXNEO0FBQStELE9BQXJIOzs7QUFFQTtBQUFBOztBQUNBOzs7QUFBQTs7Ozs7QUFHQTtBQUFBOztBQUNBOztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7OztBQU1BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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RUFBYWQsRUFBYixDQUFyRDtBQUNEO0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkJBLFNBQVNvSCxFQUFULENBQVl0SCxHQUFaLEVBQWlCO0FBQ2YsUUFBTXVILEdBQUcsR0FBRzFILE1BQU0sQ0FBQ0QsSUFBUCxDQUFZSSxHQUFaLEVBQWlCLENBQWpCLENBQVo7QUFDQSxTQUFPO0FBQUVELEtBQUMsRUFBRXdILEdBQUw7QUFBVWxHLEtBQUMsRUFBRXJCLEdBQUcsQ0FBQ3VILEdBQUQ7QUFBaEIsR0FBUDtBQUNEO0FBRUQ7Ozs7Ozs7Ozs7O0FBU0EsU0FBU0EsR0FBVCxDQUFhdkgsR0FBYixFQUFrQjtBQUNoQixTQUFPc0gsRUFBRSxDQUFDdEgsR0FBRCxDQUFGLENBQVFELENBQWY7QUFDRDtBQUVEOzs7Ozs7Ozs7OztBQVNBLFNBQVNLLEtBQVQsQ0FBZUosR0FBZixFQUFvQjtBQUNsQixTQUFPc0gsRUFBRSxDQUFDdEgsR0FBRCxDQUFGLENBQVFxQixDQUFmO0FBQ0Q7QUFFRDs7Ozs7Ozs7Ozs7QUFTQSxTQUFTNEQsVUFBVCxDQUFvQi9FLEVBQXBCLEVBQXdCO0FBQ3RCLFNBQU8sQ0FBQyxHQUFHc0gsSUFBSixLQUFhLENBQUN0SCxFQUFFLENBQUMsR0FBR3NILElBQUosQ0FBdkI7QUFDRCIsImZpbGUiOiJjaGFua28teGR1Y2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJ4ZHVjZVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJ4ZHVjZVwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wieGRjb3JlXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInhkY29yZVwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG4vKipcbiAqIFRoZSBjZW50cmFsIG1vZHVsZSBmb3IgdGhlIHRyYW5zZHVjZXIgZW5naW5lLlxuICpcbiAqIEFsbCBvZiB0aGUgZnVuY3Rpb25zIGluIHRoaXMgbW9kdWxlIGRlYWwgZGlyZWN0bHkgd2l0aCB0cmFuc2R1Y2Vycy4gQnV0XG4gKiBmaXJzdCwgbGV0J3MgdGFsayBhYm91dCB0aGUgcHJvdG9jb2xzIHRoYXQgYXJlIGdvaW5nIHRvIGJlIHJlZmVycmVkIHRvXG4gKiB0aHJvdWdob3V0IG1hbnkgb2YgdGhlIGZ1bmN0aW9uIGRpc2N1c3Npb25zLlxuICpcbiAqICMjIFByb3RvY29sc1xuICpcbiAqIE9uZSBvZiB0aGUga2V5IHNlbGxpbmcgcG9pbnRzIGZvciB0cmFuc2R1Y2VycyBpcyB0aGF0IHRoZSBzYW1lIHRyYW5zZHVjZXIgY2FuXG4gKiBiZSB1c2VkIG9uIGFueSB0eXBlIG9mIGNvbGxlY3Rpb24uIFJhdGhlciB0aGFuIGhhdmluZyB0byB3cml0ZSBhIG5ldyBgbWFwYFxuICogZnVuY3Rpb24gKGZvciBleGFtcGxlKSBmb3IgZXZlcnkga2luZCBvZiBjb2xsZWN0aW9uIC0gb25lIGZvciBhbiBhcnJheSwgb25lXG4gKiBmb3IgYSBzdHJpbmcsIG9uZSBmb3IgYW4gaXRlcmF0b3IsIGV0Yy4gLSB0aGVyZSBpcyBhIHNpbmdsZSBgbWFwYCB0cmFuc2R1Y2VyXG4gKiB0aGF0IHdpbGwgd29yayB3aXRoIGFsbCBvZiB0aGVtLCBhbmQgcG90ZW50aWFsbHkgd2l0aCAqYW55KiBraW5kIG9mXG4gKiBjb2xsZWN0aW9uLiBUaGlzIGlzIHBvc3NpYmxlIGltcGxlbWVudGluZyAqcHJvdG9jb2xzKiBvbiB0aGUgY29sbGVjdGlvbnMuXG4gKlxuICogQSBwcm90b2NvbCBpbiBKYXZhU2NyaXB0IGlzIG11Y2ggbGlrZSBhbiBpbnRlcmZhY2UgaW4gbGFuZ3VhZ2VzIGxpa2UgSmF2YSBhbmRcbiAqIEMjLiBJdCBpcyBhIGNvbW1pdG1lbnQgdG8gcHJvdmlkaW5nIGEgY2VydGFpbiBmdW5jdGlvbmFsaXR5IHVuZGVyIGEgY2VydGFpblxuICogbmFtZS4gRVMyMDE1IGhhcyBzZWVuIHRoZSBpbnRyb2R1Y3Rpb24gb2YgYW4gYGl0ZXJhdG9yYCBwcm90b2NvbCwgZm9yXG4gKiBleGFtcGxlLCBhbmQgbGFuZ3VhZ2Ugc3VwcG9ydCBmb3IgaXQgKHRoZSBuZXcgYGZvci4uLm9mYCBsb29wIGNhbiB3b3JrIHdpdGhcbiAqIGFueSBvYmplY3QgdGhhdCBjb3JyZWN0bHkgaW1wbGVtZW50cyB0aGUgYGl0ZXJhdG9yYCBwcm90b2NvbCkuXG4gKlxuICogVG8gc3VwcG9ydCB0cmFuc2R1Y3Rpb24sIFhkdWNlIGV4cGVjdHMgY29sbGVjdGlvbnMgdG8gaW1wbGVtZW50IGZvdXJcbiAqIHByb3RvY29scy5cbiAqXG4gKiAtIGBpdGVyYXRvcmA6IGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGFuIGl0ZXJhdG9yICh0aGlzIG9uZSBpcyBidWlsdCBpbiB0b1xuICogICBFUzYgSmF2YVNjcmlwdClcbiAqIC0gYHRyYW5zZHVjZXIvaW5pdGA6IGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgbmV3LCBlbXB0eSBpbnN0YW5jZSBvZiB0aGVcbiAqICAgb3V0cHV0IGNvbGxlY3Rpb25cbiAqIC0gYHRyYW5zZHVjZXIvc3RlcGA6IGEgZnVuY3Rpb24gdGhhdCB0YWtlcyBhbiBhY2N1bXVsYXRvciAodGhlIHJlc3VsdCBvZiB0aGVcbiAqICAgcmVkdWN0aW9uIHNvIGZhcikgYW5kIHRoZSBuZXh0IGlucHV0IHZhbHVlLCBhbmQgdGhlbiByZXR1cm5zIHRoZVxuICogICBhY2N1bXVsYXRvciB3aXRoIHRoZSBuZXh0IGlucHV0IHZhbHVlIGFkZGVkIHRvIGl0XG4gKiAtIGB0cmFuc2R1Y2VyL3Jlc3VsdGA6IGEgZnVuY3Rpb24gdGhhdCB0YWtlcyB0aGUgcmVkdWNlZCBjb2xsZWN0aW9uIGFuZFxuICogICByZXR1cm5zIHRoZSBmaW5hbCBvdXRwdXQgY29sbGVjdGlvblxuICpcbiAqIGBpdGVyYXRvcmAgaXMgdGhlIGJ1aWx0LWluIEphdmFTY3JpcHQgcHJvdG9jb2wuIFdoZW4gY2FsbGVkLCBpdCBpcyBleHBlY3RlZFxuICogdG8gcmV0dXJuIGFuIGl0ZXJhdG9yIG92ZXIgdGhlIGltcGxlbWVudGluZyBjb2xsZWN0aW9uLiBUaGlzIGl0ZXJhdG9yIGlzIGFuXG4gKiBvYmplY3QgdGhhdCBoYXMgYSBgbmV4dGAgZnVuY3Rpb24uIEVhY2ggY2FsbCB0byBgbmV4dGAgaXMgZXhwZWN0ZWQgdG8gcmV0dXJuXG4gKiBhbiBvYmplY3Qgd2l0aCBgdmFsdWVgIGFuZCBgZG9uZWAgcHJvcGVydGllcywgd2hpY2ggcmVzcGVjdGl2ZWx5IGhvbGQgdGhlXG4gKiBuZXh0IHZhbHVlIG9mIHRoZSBpdGVyYXRvciBhbmQgYSBib29sZWFuIHRvIGluZGljYXRlIHdoZXRoZXIgdGhlIGl0ZXJhdGlvblxuICogaGFzIHJlYWNoZWQgaXRzIGVuZC4gKFRoaXMgaXMgYSBzaW1wbGlmaWVkIGV4cGxhbmF0aW9uOyBzZWVcbiAqIHtAbGluayBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L0d1aWRlL0l0ZXJhdG9yc19hbmRfR2VuZXJhdG9yc3x0aGlzIE1ETiBwYWdlfVxuICogZm9yIG1vcmUgZGV0YWlsZWQgaW5mb3JtYXRpb24uKVxuICpcbiAqIGB0cmFuc2R1Y2VyL2luaXRgIChyZWZlcnJlZCB0byBmcm9tIG5vdyBvbiBhcyBgaW5pdGApIHNob3VsZCBiZSBhIGZ1bmN0aW9uXG4gKiB0aGF0IHRha2VzIG5vIHBhcmFtZXRlcnMgYW5kIHJldHVybnMgYSBuZXcsIGVtcHR5IGluc3RhbmNlIG9mIHRoZSBvdXRwdXRcbiAqIGNvbGxlY3Rpb24uIFRoaXMgaXMgdGhlIGZ1bmN0aW9uIHRoYXQgZGVmaW5lcyBob3cgdG8gY3JlYXRlIGEgbmV3IGNvbGxlY3Rpb25cbiAqIG9mIHRoZSBjb3JyZWN0IHR5cGUuXG4gKlxuICogYHRyYW5zZHVjZXIvc3RlcGAgKHJlZmVycmVkIHRvIGZyb20gbm93IG9uIGFzIGBzdGVwYCkgc2hvdWxkIGJlIGEgZnVuY3Rpb25cbiAqIHRoYXQgdGFrZXMgdHdvIHBhcmFtZXRlcnMuIFRoZXNlIHBhcmFtZXRlcnMgYXJlIHRoZSByZXN1bHQgb2YgdGhlIHJlZHVjdGlvblxuICogc28gZmFyIChhbmQgc28gaXMgYSBjb2xsZWN0aW9uIG9mIHRoZSBvdXRwdXQgdHlwZSkgYW5kIHRoZSBuZXh0IHZhbHVlIGZyb21cbiAqIHRoZSBpbnB1dCBjb2xsZWN0aW9uLiBJdCBtdXN0IHJldHVybiB0aGUgbmV3IHJlZHVjdGlvbiByZXN1bHQsIHdpdGggdGhlIG5leHRcbiAqIHZhbHVlIGluY29ycG9yYXRlZCBpbnRvIGl0LiBUaGlzIGlzIHRoZSBmdW5jdGlvbiB0aGF0IGRlZmluZXMgaG93IHJlZHVjZSBhXG4gKiB2YWx1ZSBvbnRvIHRoZSBjb2xsZWN0aW9uLlxuICpcbiAqIGB0cmFuc2R1Y2VyL3Jlc3VsdGAgKHJlZmVycmVkIHRvIGZyb20gbm93IG9uIGFzIGByZXN1bHRgKSBzaG91bGQgYmUgYVxuICogZnVuY3Rpb24gdGhhdCB0YWtlcyBvbmUgcGFyYW1ldGVyLCB3aGljaCBpcyB0aGUgZnVsbHkgcmVkdWNlZCBjb2xsZWN0aW9uLiBJdFxuICogc2hvdWxkIHJldHVybiB0aGUgZmluYWwgb3V0cHV0IGNvbGxlY3Rpb24uIFRoaXMgYWZmb3JkcyBhIGNoYW5jZSB0byBtYWtlIGFueVxuICogbGFzdC1taW51dGUgYWRqdXN0bWVudHMgdG8gdGhlIHJlZHVjZWQgY29sbGVjdGlvbiBiZWZvcmUgcmV0dXJuaW5nIGl0LlxuICpcbiAqIEFycmF5cywgc3RyaW5ncywgYW5kIG9iamVjdHMgYXJlIGFsbCBnaXZlbiBzdXBwb3J0IGZvciBhbGwgb2YgdGhlc2VcbiAqIHByb3RvY29scy4gT3RoZXIgY29sbGVjdGlvbnMgd2lsbCBoYXZlIHRvIHByb3ZpZGUgdGhlaXIgb3duICh0aG91Z2ggaXQgc2hvdWxkXG4gKiBiZSBub3RlZCB0aGF0IHNpbmNlIGBpdGVyYXRvcmAgaXMgYnVpbHQtaW4sIG1hbnkgdGhpcmQtcGFydHkgY29sbGVjdGlvbnMgd2lsbFxuICogYWxyZWFkeSBpbXBsZW1lbnQgdGhpcyBwcm90b2NvbCkuIEFzIGFuIGV4YW1wbGUsIGxldCdzIGFkZCB0cmFuc2R1Y2VyIHN1cHBvcnRcbiAqIHRvIGEgdGhpcmQtcGFydHkgY29sbGVjdGlvbiwgdGhlIGBJbW11dGFibGUuTGlzdGAgY29sbGVjdGlvbiBmcm9tXG4gKiB7QGxpbmsgaHR0cHM6Ly9mYWNlYm9vay5naXRodWIuaW8vaW1tdXRhYmxlLWpzL3xpbW11dGFibGUtanN9LlxuICpcbiAqIGBgYFxuICogSW1tdXRhYmxlLkxpc3QucHJvdG90eXBlW3Byb3RvY29scy5pbml0XSA9ICgpID0+IEltbXV0YWJsZS5MaXN0KCkuYXNNdXRhYmxlKCk7XG4gKiBJbW11dGFibGUuTGlzdC5wcm90b3R5cGVbcHJvdG9jb2xzLnN0ZXBdID0gKGFjYywgaW5wdXQpID0+IGFjYy5wdXNoKGlucHV0KTtcbiAqIEltbXV0YWJsZS5MaXN0LnByb3RvdHlwZVtwcm90b2NvbHMucmVzdWx0XSA9ICh2YWx1ZSkgPT4gdmFsdWUuYXNJbW11dGFibGUoKTtcbiAqIGBgYFxuICpcbiAqIGBJbW11dGFibGUuTGlzdGAgYWxyZWFkeSBpbXBsZW1lbnRzIGBpdGVyYXRvcmAsIHNvIHdlIGRvbid0IGhhdmUgdG8gZG8gaXRcbiAqIG91cnNlbHZlcy5cbiAqXG4gKiBUaGUgYGluaXRgIGZ1bmN0aW9uIHJldHVybnMgYW4gZW1wdHkgbXV0YWJsZSBsaXN0LiBUaGlzIGlzIGltcG9ydGFudCBmb3JcbiAqIGltbXV0YWJsZS1qcyBiZWNhdXNlIGl0cyBkZWZhdWx0IGxpc3RzIGFyZSBpbW11dGFibGUsIGFuZCBpbW11dGFibGUgbGlzdHNcbiAqIG1lYW4gdGhhdCBhIG5ldyBsaXN0IGhhcyB0byBiZSBjcmVhdGVkIHdpdGggZXZlcnkgcmVkdWN0aW9uIHN0ZXAuIEl0IHdvdWxkXG4gKiB3b3JrIGZpbmUsIGJ1dCBpdCdzIHF1aXRlIGluZWZmaWNpZW50LlxuICpcbiAqIFRoZSBgc3RlcGAgZnVuY3Rpb24gYWRkcyB0aGUgbmV4dCB2YWx1ZSB0byB0aGUgYWxyZWFkeS1jcmVhdGVkIGxpc3QuXG4gKiBgSW1tdXRhYmxlLkxpc3RgIHByb3ZpZGVzIGEgYHB1c2hgIGZ1bmN0aW9uIHRoYXQgd29ya3MgbGlrZSBhbiBhcnJheSdzXG4gKiBgcHVzaGAsIGV4Y2VwdCB0aGF0IGl0IHJldHVybnMgdGhlIG5ldyBsaXN0IHdpdGggdGhlIHZhbHVlIHB1c2hlZCBvbnRvIGl0LlxuICogVGhpcyBpcyBwZXJmZWN0IGZvciBvdXIgYHN0ZXBgIGZ1bmN0aW9uLlxuICpcbiAqIFRoZSBgcmVzdWx0YCBmdW5jdGlvbiBjb252ZXJ0cyB0aGUgbm93LWZpbmlzaGVkIG11dGFibGUgbGlzdCBpbnRvIGFuXG4gKiBpbW11dGFibGUgb25lLCB3aGljaCBpcyB3aGF0J3MgZ29pbmcgdG8gYmUgZXhwZWN0ZWQgaWYgd2UncmUgdHJhbnNkdWNpbmdcbiAqIHNvbWV0aGluZyBpbnRvIGFuIGBJbW11dGFibGUuTGlzdGAuIEluIG1vc3QgY2FzZXMsIGByZXN1bHRgIGRvZXNuJ3QgaGF2ZSB0b1xuICogZG8gYW55IHdvcmssIGJ1dCBzaW5jZSB3ZSdyZSBjcmVhdGluZyBhbiBpbnRlcm1lZGlhdGUgcmVwcmVzZW50YXRpb24gb2Ygb3VyXG4gKiBjb2xsZWN0aW9uIHR5cGUgaGVyZSwgdGhpcyBsZXRzIHVzIGNyZWF0ZSB0aGUgY29sbGVjdGlvbiB0aGF0IHdlIGFjdHVhbGx5XG4gKiB3YW50IHRvIG91dHB1dC4gKFdpdGhvdXQgYHJlc3VsdGAsIHdlIHdvdWxkIGhhdmUgdG8gdXNlIGltbXV0YWJsZSBsaXN0cyBhbGxcbiAqIHRoZSB3YXkgdGhyb3VnaCwgY3JlYXRpbmcgYSBuZXcgb25lIHdpdGggZWFjaCBgc3RlcGAgZnVuY3Rpb24sIHNpbmNlIHdlXG4gKiB3b3VsZG4ndCBiZSBhYmxlIHRvIG1ha2UgdGhpcyBjb252ZXJzdGlvbiBhdCB0aGUgZW5kLilcbiAqXG4gKiBXaXRoIHRob3NlIHByb3RvY29scyBpbXBsZW1lbnRlZCBvbiB0aGUgcHJvdG90eXBlLCBgSW1tdXRhYmxlLkxpc3RgXG4gKiBjb2xsZWN0aW9ucyBjYW4gbm93IHN1cHBvcnQgYW55IHRyYW5zZHVjdGlvbiB3ZSBjYW4gb2ZmZXIuXG4gKlxuICogIyMjIFByb3RvY29sc1xuICpcbiAqIEFmdGVyIHRhbGtpbmcgYSBsb3QgYWJvdXQgcHJvdG9jb2xzIGFuZCBzaG93aW5nIGhvdyB0aGV5J3JlIHByb3BlcnRpZXMgYWRkZWRcbiAqIHRvIGFuIG9iamVjdCwgaXQncyBwcm9iYWJseSBwcmV0dHkgb2J2aW91cyB0aGF0IHRoZXJlJ3MgYmVlbiBubyBtZW50aW9uIG9mXG4gKiB3aGF0IHRoZSBhY3R1YWwgbmFtZXMgb2YgdGhvc2UgcHJvcGVydGllcyBhcmUuIFRoYXQncyB3aGF0XG4gKiBge0BsaW5rIG1vZHVsZTp4ZHVjZS10b29scy5wcm90b2NvbHN8cHJvdG9jb2xzfWAgaXMgZm9yLlxuICpcbiAqIFRoZSBiZXN0IHdheSB0byB1c2UgdGhlc2Uga2V5cyBjYW4gYmUgc2VlbiBpbiB0aGUgaW1tdXRhYmxlLWpzIGV4YW1wbGUgYWJvdmUuXG4gKiBJbnN0ZWFkIG9mIHdvcnJ5aW5nIGFib3V0IHRoZSBuYW1lIG9mIHRoZSBrZXkgZm9yIHRoZSBgaW5pdGAgcHJvdG9jb2wsIHRoZVxuICogdmFsdWUgb2YgYHByb3RvY29scy5pbml0YCBpcyB1c2VkLlxuICpcbiAqIGB7QGxpbmsgbW9kdWxlOnhkdWNlLXRvb2xzLnByb3RvY29sc3xwcm90b2NvbHN9YCBkZWZpbmVzIHRoZXNlIHByb3RvY29sXG4gKiBwcm9wZXJ0eSBuYW1lcy5cbiAqXG4gKiAtIGBpbml0YFxuICogLSBgc3RlcGBcbiAqIC0gYHJlc3VsdGBcbiAqIC0gYHJlZHVjZWRgOiB1c2VkIGludGVybmFsbHkgdG8gbWFyayBhIGNvbGxlY3Rpb24gYXMgYWxyZWFkeSByZWR1Y2VkXG4gKiAtIGB2YWx1ZWA6IHVzZWQgaW50ZXJuYWxseSB0byBwcm92aWRlIHRoZSBhY3R1YWwgdmFsdWUgb2YgYSByZWR1Y2VkXG4gKiAgIGNvbGxlY3Rpb25cbiAqXG4gKiBUaGUgZmluYWwgdHdvIHZhbHVlcyBkb24ndCBoYXZlIGEgbG90IG9mIHVzZSBvdXRzaWRlIHRoZSBsaWJyYXJ5IHVubGVzc1xuICogeW91J3JlIHdyaXRpbmcgeW91ciBvd24gdHJhbnNkdWNlcnMuXG4gKlxuICogIyMgSG93IE9iamVjdHMgQXJlIFRyZWF0ZWRcbiAqXG4gKiBPYmplY3RzIGJlYXIgc29tZSB0aG91Z2h0IGJlY2F1c2UgcmVndWxhcmx5LCB0aGV5IGFyZW4ndCBjYW5kaWRhdGVzIGZvclxuICogaXRlcmF0aW9uIChhbmQgdGhlcmVmb3JlIGZvciB0cmFuc2R1Y3Rpb24gaW4gZ2VuZXJhbCkuIFRoZXkgZG9uJ3QgaGF2ZSBhIHZlcnlcbiAqIHN0cmFpZ2h0Zm9yd2FyZCBpZGVhIG9mIG9yZGVyLCBhbmQgdGhleSBoYXZlICp0d28qIHBpZWNlcyBvZiBkYXRhIChrZXkgYW5kXG4gKiB2YWx1ZSkgZm9yIGV2ZXJ5IGVsZW1lbnQgaW5zdGVhZCBvZiBvbmUuIFlldCBpdCdzIHVuZGVuaWFibGUgdGhhdCBhdCBsZWFzdFxuICogZm9yIG1vc3QgdHJhbnNmb3JtYXRpb25zLCBiZWluZyBhYmxlIHRvIGFwcGx5IHRoZW0gdG8gb2JqZWN0cyB3b3VsZCBiZSBxdWl0ZVxuICogaGFuZHkuXG4gKlxuICogRm9yIHRoYXQgcmVhc29uLCBzcGVjaWFsIHN1cHBvcnQgaXMgcHJvdmlkZWQgZW5kLXRvLWVuZCBmb3Igb2JqZWN0cy5cbiAqXG4gKiAjIyMgT2JqZWN0IGl0ZXJhdGlvblxuICpcbiAqIEl0ZXJhdGluZyBvdmVyIGFuIG9iamVjdCB3aWxsIHByb2R1Y2Ugb25lIG9iamVjdCBwZXIgcHJvcGVydHkgb2YgdGhlIG9yaWdpbmFsXG4gKiBvYmplY3QuIEFuIG9yZGVyIGlzIGltcG9zZWQ7IGJ5IGRlZmF1bHQsIHRoaXMgb3JkZXIgdGhlIHNhbWUgYXMgdGhlIG9yZGVyaW5nXG4gKiBvZiBrZXlzIGluIHBvc3QtRVM2IEphdmFzY3JpcHQ6XG4gKlxuICogMS4gS2V5cyB0aGF0IGFyZSBpbnRlZ2VycywgaW4gYXNjZW5kaW5nIG51bWVyaWNhbCBvcmRlclxuICogMi4gQWxsIG90aGVyIHN0cmluZyBrZXlzLCBpbiB0aGUgb3JkZXIgaW4gd2hpY2ggdGhleSB3ZXJlIGFkZGVkIHRvIHRoZSBvYmplY3RcbiAqIDMuIEFsbCBzeW1ib2wga2V5cywgaW4gdGhlIG9yZGVyIGluIHdoaWNoIHRoZXkgd2VyZSBhZGRlZCB0byB0aGUgb2JqZWN0XG4gKlxuICogVGhlIGB7QGxpbmsgbW9kdWxlOnhkdWNlLXRvb2xzLml0ZXJhdG9yfGl0ZXJhdG9yfWAgZnVuY3Rpb24gY2FuIGJlIHBhc3NlZCBhXG4gKiBzb3J0aW5nIGZ1bmN0aW9uIHRoYXQgY2FuIHNvcnQga2V5cyBpbiBhbnkgb3RoZXIgd2F5LlxuICpcbiAqIFRoZSByZXN1bHQgb2YgdGhlIGl0ZXJhdGlvbiwgaXMgYSBzZXQgb2Ygb2JqZWN0cyBlYWNoIHdpdGggYSBzaW5nbGUgcHJvcGVydHksXG4gKiBvbmUgZm9yIGVhY2ggZW51bWVyYWJsZSBvd24gcHJvcGVydHkgb24gdGhlIG9yaWdpbmFsIG9iamVjdC4gVGhlIHN0YW5kYXJkXG4gKiBvcmRlcmluZyBmb3Igb2JqZWN0cyAoZnJvbSBFUzYgb253YXJkKSBpcyBhcyBmb2xsb3dzOlxuICpcbiAqICMjIyBUcmFuc2Zvcm1pbmcgb2JqZWN0c1xuICpcbiAqIFdoaWxlIGl0ZXJhdGluZyBvdmVyIG9iamVjdHMgaW4gdGhpcyB3YXkgaXMgc3RyYWlnaHRmb3J3YXJkLCB0aGUgc3ludGF4IG9mXG4gKiBvYmplY3RzIG1ha2VzIGl0IHVnbHkgdG8gdHJhbnNmb3JtIHRoZW0gaW4gdGhpcyBmb3JtLiBIZXJlJ3MgYW4gZXhhbXBsZSBvZiBhXG4gKiB0cmFuc2Zvcm1hdGlvbiBmdW5jdGlvbiB0aGF0IG1ha2VzIHRoZSBvYmplY3QncyBrZXlzIHVwcGVyLWNhc2UgYW5kIGFkZHMgb25lXG4gKiB0byBlYWNoIG9mIHRoZSB2YWx1ZXM6XG4gKlxuICogYGBgXG4gKiBmdW5jdGlvbiB0cmFuc2Zvcm0ob2JqKSB7XG4gKiAgIGNvbnN0IGtleSA9IE9iamVjdC5rZXlzKG9iailbMF07XG4gKiAgIGNvbnN0IHZhbHVlID0gb2JqW2tleV07XG4gKiAgIHJldHVybiB7IFtrZXkudG9VcHBlckNhc2UoKV06IHZhbHVlICsgMSB9O1xuICogfVxuICogYGBgXG4gKlxuICogQSBoZWxwZXIgZnVuY3Rpb24gbmFtZWQgYHtAbGluayBtb2R1bGU6eGR1Y2UtdG9vbHMucHJvcGVydHl8cHJvcGVydHl9YCBjYW5cbiAqIGltcHJvdmUgdGhpcyBieSBoYW5kbGluZyB0aGUgYm9pbGVycGxhdGUuXG4gKlxuICogYGBgXG4gKiBmdW5jdGlvbiBpbXByb3ZlZFRyYW5zZm9ybShvYmopIHtcbiAqICAgY29uc3Qge2ssIHZ9ID0gcHJvcGVydHkob2JqKTtcbiAqICAgcmV0dXJuIHsgW2sudG9VcHBlckNhc2UoKV06IHYgKyAxIH07XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiAjIyMgUmVkdWNpbmcgb2JqZWN0c1xuICpcbiAqIFRoZSBidWlsdC1pbiByZWR1Y2VycyAoZm9yIGFycmF5cywgb2JqZWN0cywgc3RyaW5ncywgYW5kIGl0ZXJhdG9ycylcbiAqIHVuZGVyc3RhbmQgdGhlc2Ugc2luZ2xlLXByb3BlcnR5IG9iamVjdHMgYW5kIHJlZHVjZSB0aGVtIGluIHRoZSBwcm9wZXIgbWFubmVyXG4gKiB3aXRob3V0IGFueSBmdXJ0aGVyIHdvcmsuXG4gKlxuICogVGhhdCdzIGl0IGZvciBvYmplY3Qtb2JqZWN0IHJlZHVjdGlvbi4gQ29udmVydGluZyBiZXR3ZWVuIG9iamVjdHMgYW5kIG90aGVyXG4gKiB0eXBlcyBpcyBhbm90aGVyIG1hdHRlci5cbiAqXG4gKiBFdmVyeSB0cmFuc2R1Y2VyIGZ1bmN0aW9uIGV4Y2VwdCBmb3JcbiAqIGB7QGxpbmsgbW9kdWxlOnhkdWNlLXRvb2xzLnNlcXVlbmNlfHNlcXVlbmNlfWAgaXMgY2FwYWJsZSBvZiB0dXJuaW5nIGFuXG4gKiBvYmplY3QgaW50byBhIGRpZmZlcmVudCB0eXBlIG9mIGNvbGxlY3Rpb24sIHR1cm5pbmcgYSBkaWZmZXJlbnQgdHlwZSBvZlxuICogY29sbGVjdGlvbiBpbnRvIGFuIG9iamVjdCwgb3IgYm90aC4gT2JqZWN0cyBhcmUgZGlmZmVyZW50IGJlY2F1c2UgdGhleSdyZSB0aGVcbiAqIG9ubHkgXCJjb2xsZWN0aW9uc1wiIHRoYXQgaGF2ZSB0d28gZGlmZmVyZW50IHBpZWNlcyBvZiBkYXRhIHBlciBlbGVtZW50LlxuICogQmVjYXVzZSBvZiB0aGlzLCB3ZSBoYXZlIHRvIGhhdmUgYSBzdHJhdGVneSBvbiBob3cgdG8gbW92ZSBmcm9tIG9uZSB0b1xuICogYW5vdGhlci5cbiAqXG4gKiBUcmFuc2R1Y2luZyBhbiBvYmplY3QgaW50byBhIGRpZmZlcmVudCB0eXBlIGlzIGdlbmVyYWxseSBwcmV0dHkgZWFzeS4gSWYgYW5cbiAqIG9iamVjdCBpcyBjb252ZXJ0ZWQgaW50byBhbiBhcnJheSwgZm9yIGluc3RhbmNlLCB0aGUgYXJyYXkgZWxlbWVudHMgd2lsbCBlYWNoXG4gKiBiZSBzaW5nbGUtcHJvcGVydHkgb2JqZWN0cywgb25lIHBlciBwcm9wZXJ0eSBvZiB0aGUgb3JpZ2luYWwgb2JqZWN0LlxuICpcbiAqIFN0cmluZ3MgYXJlIGEgZGlmZmVyZW50IHN0b3J5LCBzaW5jZSBlbmNvZGluZyBhIHNpbmdsZS1wcm9wZXJ0eSBvYmplY3QgdG8gYVxuICogc3RyaW5nIGlzbid0IHBvc3NpYmxlIChiZWNhdXNlIGV2ZXJ5IFwiZWxlbWVudFwiIG9mIGEgc3RyaW5nIGhhcyB0byBiZSBhIHNpbmdsZVxuICogY2hhcmFjdGVyKS4gU3RyaW5ncyB0aGF0IGFyZSBwcm9kdWNlZCBmcm9tIG9iamVjdHMgd2lsbCBpbnN0ZWFkIGp1c3QgYmUgdGhlXG4gKiBvYmplY3QgdmFsdWVzLCBjb25jYXRlbmF0ZWQuIEJlY2F1c2Ugb2JqZWN0cyBhcmUgaXRlcmF0ZWQgaW4gYSBwYXJ0aWN1bGFyXG4gKiBvcmRlciwgdGhpcyBjb252ZXJzaW9uIHdpbGwgYWx3YXlzIHByb2R1Y2UgdGhlIHNhbWUgc3RyaW5nLCBidXQgZXhjZXB0IGluXG4gKiBzb21lIHZlcnkgc3BlY2lmaWMgY2FzZXMgdGhlcmUgcmVhbGx5IGlzbid0IGEgbG90IG9mIHVzZSBmb3IgdGhpcyBjb252ZXJzaW9uLlxuICpcbiAqIGBgYFxuICogY29uc3Qgb2JqID0ge2E6IDEsIGI6IDJ9O1xuICpcbiAqIGxldCByZXN1bHQgPSBhc0FycmF5KG9iaik7XG4gKiAvLyByZXN1bHQgPSBbe2E6IDF9LCB7YjogMn1dXG4gKlxuICogcmVzdWx0ID0gYXNJdGVyYXRvcihvYmopO1xuICogLy8gcmVzdWx0IGlzIGFuIGl0ZXJhdG9yIHdpdGggdHdvIHZhbHVlczoge2E6IDF9IGFuZCB7YjogMn1cbiAqXG4gKiByZXN1bHQgPSBpbnRvKEltbXV0YWJsZS5MaXN0KCksIG9iailcbiAqIC8vIHJlc3VsdCBpcyBhbiBpbW11dGFibGUgbGlzdCB3aXRoIHR3byBlbGVtZW50czoge2E6IDF9IGFuZCB7YjogMn1cbiAqXG4gKiByZXN1bHQgPSBhc1N0cmluZyhvYmopO1xuICogLy8gcmVzdWx0IGlzICcxMidcbiAqIGBgYFxuICpcbiAqIFRoZSBvcHBvc2l0ZSBjb252ZXJzaW9uIGRlcGVuZHMgb24gdGhlIHZhbHVlcyBpbnNpZGUgdGhlIGNvbGxlY3Rpb25zLiBJZlxuICogdGhvc2UgdmFsdWVzIGFyZSBvYmplY3RzLCB0aGVuIHRoZSByZXN1bHQgaXMgYW4gb2JqZWN0IHdpdGggYWxsIG9mIHRoZVxuICogb2JqZWN0cyBjb21iaW5lZCAoaWYgbW9yZSB0aGFuIG9uZSBoYXMgdGhlIHNhbWUga2V5LCB0aGUgbGFzdCBvbmUgaXMgdGhlIG9uZVxuICogdGhhdCdzIGtlcHQpLiBPdGhlcndpc2UsIGtleXMgYXJlIGNyZWF0ZWQgZm9yIGVhY2ggb2YgdGhlIGVsZW1lbnRzLCBzdGFydGluZ1xuICogd2l0aCBgMGAgYW5kIGluY3JlYXNpbmcgZnJvbSB0aGVyZS5cbiAqXG4gKiBUaGlzIG1lYW5zIHRoYXQgY29udmVydGluZyBhbiBvYmplY3QgdG8gYW55IG5vbi1zdHJpbmcgY29sbGVjdGlvbiBhbmQgYmFja1xuICogcHJvZHVjZXMgdGhlIG9yaWdpbmFsIG9iamVjdC5cbiAqXG4gKiBgYGBcbiAqIGxldCByZXN1bHQgPSBhc09iamVjdChbe2E6IDF9LCB7YjogMn1dKTtcbiAqIC8vIHJlc3VsdCA9IHthOiAxLCBiOiAyfVxuICpcbiAqIHJlc3VsdCA9IGFzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyByZXN1bHQgPSB7MDogMSwgMTogMiwgMjogM31cbiAqXG4gKiByZXN1bHQgPSBhc09iamVjdCgnaGVsbG8nKTtcbiAqIC8vIHJlc3VsdCA9IHswOiAnaCcsIDE6ICdlJywgMjogJ2wnLCAzOiAnbCcsIDQ6ICdvJ31cbiAqIGBgYFxuICpcbiAqIEBtb2R1bGUgeGRjb3JlXG4gKi9cblxuZXhwb3J0IHsgcHJvdG9jb2xzLCBpc0ltcGxlbWVudGVkIH0gZnJvbSBcIm1vZHVsZXMvcHJvdG9jb2xcIjtcbmV4cG9ydCB7IGl0ZXJhdG9yLCBpc0l0ZXJhYmxlIH0gZnJvbSBcIm1vZHVsZXMvaXRlcmF0aW9uXCI7XG5leHBvcnQge1xuICBjb21wbGV0ZSxcbiAgdW5jb21wbGV0ZSxcbiAgaXNDb21wbGV0ZWQsXG4gIGVuc3VyZUNvbXBsZXRlZCxcbiAgZW5zdXJlVW5jb21wbGV0ZWQsXG4gIHJlZHVjZSxcbiAgdG9GdW5jdGlvbixcbiAgdG9SZWR1Y2VyLFxuICB0b1RyYW5zZHVjZXJcbn0gZnJvbSBcIm1vZHVsZXMvcmVkdWN0aW9uXCI7XG5leHBvcnQge1xuICBpc0FycmF5LFxuICBpc0Z1bmN0aW9uLFxuICBpc0dlbmVyYXRvckZ1bmN0aW9uLFxuICBpc051bWJlcixcbiAgaXNPYmplY3QsXG4gIGlzU3RyaW5nXG59IGZyb20gXCJtb2R1bGVzL3V0aWxzXCI7XG5cbi8qKlxuICogQSBzdGFuZGFyZCBKYXZhU2NyaXB0IGl0ZXJhYmxlLiBUaGlzIG9iamVjdCBoYXMgYSBwcm9wZXJ0eSBuYW1lZFxuICogYFtTeW1ib2wuaXRlcmF0b3JdYCB3aGljaCBwcm92aWRlcyBhbiBvYmplY3QgdGhhdCBzYXRpc2ZpZXMgdGhlXG4gKiB7QGxpbmsgZXh0ZXJuYWw6SXRlcmF0b3J8SXRlcmF0b3J9IHByb3RvY29sLlxuICpcbiAqIEBleHRlcm5hbCBJdGVyYWJsZVxuICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9JdGVyYXRpb25fcHJvdG9jb2xzI1RoZV9pdGVyYWJsZV9wcm90b2NvbFxuICovXG5cbi8qKlxuICogQSBzdGFuZGFyZCBKYXZhU2NyaXB0IGl0ZXJhdG9yLiBUaGlzIG9iamVjdCBoYXMgYSBmdW5jdGlvbiBwcm9wZXJ0eSBuYW1lZFxuICogYG5leHRgIHRoYXQsIGVhY2ggdGltZSBpdCdzIGNhbGxlZCwgcmV0dXJucyBhIG5ldyBvYmplY3Qgd2l0aCB0d29cbiAqIHByb3BlcnRpZXM6IGB2YWx1ZWAsIHdoaWNoIGNvbnRhaW5zIHRoZSBpdGVyYXRvcidzIHZhbHVlIGF0IHRoYXQgcG9pbnQsIGFuZFxuICogYGRvbmVgLCB3aGljaCBpcyBgZmFsc2VgIHVudGlsIHRoZSBpdGVyYXRvciBoYXMgaGFkIGFsbCBvZiBpdHMgdmFsdWVzIHJlYWQuXG4gKlxuICogQGV4dGVybmFsIEl0ZXJhdG9yXG4gKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0l0ZXJhdGlvbl9wcm90b2NvbHMjVGhlX2l0ZXJhdG9yX3Byb3RvY29sXG4gKi9cblxuLyoqXG4gKiBBIGZ1bmN0aW9uIHRoYXQgY2FuIGhhdmUgYW4gaXRlcmF0b3IgY3JlYXRlZCBmb3IgaXQuXG4gKlxuICogQGNhbGxiYWNrIEl0ZXJhYmxlRnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGRjb3JlXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IGZvciB0aGUgaXRlcmF0aW9uLiBUaGlzIGlzIGAwYCB0aGUgZmlyc3RcbiAqICAgICB0aW1lIHRoZSBmdW5jdGlvbiBpcyBjYWxsZWQgYW5kIGluY3JlYXNlcyBieSAxIGZvciBlYWNoIGNhbGxcbiAqICAgICB0aGVyZWFmdGVyLlxuICogQHBhcmFtIHsqfSBsYXN0IFRoZSByZXR1cm4gdmFsdWUgb2YgdGhlIGZ1bmN0aW9uIHdoZW4gaXQgd2FzIGNhbGxlZCBvbiB0aGVcbiAqICAgICBwcmV2aW91cyBpdGVyYXRpb24uIElmIHRoaXMgaXMgdGhlIGZpcnN0IGNhbGwgdG8gdGhlIGZ1bmN0aW9uLCB0aGVuXG4gKiAgICAgdGhpcyB2YWx1ZSB3aWxsIGJlIGB1bmRlZmluZWRgLCBtZWFuaW5nIHRoYXQgdGhlIGZ1bmN0aW9uIGNhbiBzZXQgYVxuICogICAgIGRlZmF1bHQgdmFsdWUgZm9yIHRoYXQgZmlyc3QgcGFzcy5cbiAqIEByZXR1cm5zIHsqfSBUaGUgcmV0dXJuIHZhbHVlIG9mIHRoZSBmdW5jdGlvbiwgd2hpY2ggd2lsbCBiZSB0aGUgdmFsdWUgZm9yXG4gKiAgICAgdGhhdCBpdGVyYXRpb24uXG4gKi9cblxuLyoqXG4gKiBBIGZ1bmN0aW9uIHRoYXQsIHdoZW4gY2FsbGVkLCBwcm9kdWNlcyBhIG5ldywgZW1wdHkgY29sbGVjdGlvbiBvZiB3aGF0ZXZlclxuICogdHlwZSBpcyBiZWluZyB3b3JrZWQgd2l0aC5cbiAqXG4gKiBAY2FsbGJhY2sgSW5pdEZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkY29yZVxuICogQHJldHVybnMgeyp9IEEgbmV3LCBlbXB0eSByZXByZXNlbnRhdGl2ZSBvZiB0aGUgY29sbGVjdGlvbi5cbiAqL1xuXG4vKipcbiAqIEEgZnVuY3Rpb24gdGhhdCBhY2NlcHRzIGEgY29sbGVjdGlvbiBhbmQgYSBuZXcgZWxlbWVudCBvZiB0aGF0IGNvbGxlY3Rpb24gYW5kXG4gKiByZXR1cm5zIHRoZSBjb2xsZWN0aW9uIHdpdGggdGhlIG5ldyBlbGVtZW50IGFkZGVkIHRvIGl0LiBUaGlzIGlzIHVzZWQgdG9cbiAqIGJ1aWxkIHVwIGEgbmV3IGNvbGxlY3Rpb24gKHN0YXJ0aW5nIHdpdGggd2hhdGV2ZXJcbiAqIHtAbGluayBtb2R1bGU6eGRjb3JlLkluaXRGdW5jdGlvbnx0aGUgaW5pdCBmdW5jdGlvbn0gcmV0dXJucykgcGllY2UgYnkgcGllY2VcbiAqIGZyb20gaXRzIGVsZW1lbnRzLlxuICpcbiAqIFRoaXMgaXMgaW4gZXZlcnkgd2F5IGEgcmVkdWNlciBmdW5jdGlvbi4gVGhlIG5hbWUgJ3N0ZXAnIGNvbWVzIGZyb20gdGhlIGZhY3RcbiAqIHRoYXQgdGhlc2UgcmVkdWN0aW9uIGZ1bmN0aW9ucyByZWR1Y2Ugb25lIGVsZW1lbnQgYXQgYSB0aW1lLCBzdGVwIGJ5IHN0ZXAuXG4gKlxuICogSXQgaXMgdXAgdG8gdGhlIGltcGxlbWVudGF0aW9uIHdoZXRoZXIgdGhlIHJldHVybmVkIGNvbGxlY3Rpb24gaXMgYSBtb2RpZmllZFxuICogZm9ybSBvZiB0aGUgb3JpZ2luYWwgY29sbGVjdGlvbiBvciB3aGV0aGVyIGl0IGlzIGEgbmV3IGNvbGxlY3Rpb24gYWx0b2dldGhlci5cbiAqXG4gKiBAY2FsbGJhY2sgU3RlcEZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkY29yZVxuICogQHBhcmFtIHsqfSBhY2MgQSBjb2xsZWN0aW9uLCBwZXJoYXBzIHdpdGggc29tZSBtZW1iZXJzIGFscmVhZHkgYWRkZWQgdG8gaXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIEEgbmV3IGVsZW1lbnQgdG8gYmUgYWRkZWQgdG8gdGhhdCBjb2xsZWN0aW9uLlxuICogQHJldHVybnMgVGhlIG9yaWdpbmFsIGNvbGxlY3Rpb24gd2l0aCB0aGUgbmV3IHZhbHVlIGFkZGVkIHRvIGl0LlxuICovXG5cbi8qKlxuICogQSBmdW5jdGlvbiB0aGF0IGFjY2VwdHMgYSBmdWxseSByZWR1Y2VkIGNvbGxlY3Rpb24gYW5kIHJldHVybnMgdGhhdFxuICogY29sbGVjdGlvbiB3aXRoIGFueSBsYXN0LW1pbnV0ZSBtb2RpZmljYXRpb25zIHRoYXQgbWlnaHQgbmVlZCB0byBiZSBkb25lIHRvXG4gKiBpdC5cbiAqXG4gKiBJbiBtb3N0IGNhc2VzIHRoaXMgZnVuY3Rpb24gd2lsbCBzaW1wbHkgcmV0dXJuIGl0cyBhcmd1bWVudCwgdW5tb2RpZmllZCwgYnV0XG4gKiBpdCBkb2VzIGFmZm9yZCB0aGUgdHJhbnNkdWNlciBhbiBvcHBvcnR1bml0eSB0byBtYWtlIGFueSBmaW5hbCBtb2RpZmljYXRpb25zXG4gKiB0aGF0IG1pZ2h0IGJlIG5lY2Vzc2FyeSBiZWZvcmUgdGhlIHJlc3VsdCBpcyByZXR1cm5lZCBmcm9tIHRoZSB0cmFuc2R1Y3Rpb25cbiAqIHByb2Nlc3MuXG4gKlxuICogQGNhbGxiYWNrIFJlc3VsdEZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkY29yZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgZnVsbHkgcmVkdWNlZCBjb2xsZWN0aW9uLlxuICogQHJldHVybnMgeyp9IFRoZSByZWR1Y2VkIGNvbGxlY3Rpb24gd2l0aCBhbnkgaW1wbGVtZW50YXRpb24tZGVwZW5kZW50IGNoYW5nZXNcbiAqICAgICB0aGF0IG1pZ2h0IGJlIGRlZW1lZCBuZWNlc3NhcnkuXG4gKi9cblxuLyoqXG4gKiBBbiBvYmplY3QgdGhhdCBwcm92aWRlcyB0aGUgaW5mb3JtYXRpb24gbmVjZXNzYXJ5IHRvIGJ1aWxkIGFuZCBwb3B1bGF0ZSBhIG5ld1xuICogb2JqZWN0IG9mIGEgcmVkdWNpYmxlIHR5cGUuIFRoaXMgaW5mb3JtYXRpb24gaXMgdXNlZCBieSB0aGUgdHJhbnNkdWN0aW9uXG4gKiBlbmdpbmUgdG8gY3JlYXRlIGEgcmVzdWx0IGZyb20gYSByZWR1Y3Rpb24gd2l0aG91dCBoYXZpbmcgdG8gaGF2ZSBpdHMgb3duXG4gKiB0eXBlLXNwZWNpZmljIGNvZGU7IHRoZSBjcmVhdGlvbiwgcG9wdWxhdGlvbiwgYW5kIGZpbmFsaXphdGlvbiBvZiB0aGUgcmVzdWx0XG4gKiBhcmUgZGVsZWdhdGVkIGluc3RlYWQgdG8gdGhpcyByZWR1Y2VyIG9iamVjdC5cbiAqIFxuICogTm90ZSB0aGF0IGEgXCJ0cmFuc2R1Y2VyIG9iamVjdFwiIGhhcyBleGFjdGx5IHRoZSBzYW1lIHN0cnVjdHVyZS4gVGhlIG9ubHlcbiAqIGRpZmZlcmVuY2UgaXMgdGhhdCB0aGUgc3RlcCBmdW5jdGlvbiBpbiBhIHRyYW5zZHVjZXIgb2JqZWN0IG1vZGlmaWVzIHRoZVxuICogZWxlbWVudHMgYmVmb3JlIGl0IHJlZHVjZXMgdGhlbSwgd2hpbGUgYSByZWR1Y2VyIG9iamVjdCB3aWxsIG5vdC4gQXMgYVxuICogY29yb2xsYXJ5LCBldmVyeSByZWR1Y2VyIG9iamVjdCBpcyBhbHNvIGEgdHJhbnNkdWNlciBvYmplY3QsIGJ1dCB0aGUgY29udmVyc2VcbiAqIGlzIG5vdCB0cnVlLlxuICpcbiAqIEB0eXBlZGVmIFJlZHVjZXJPYmplY3RcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGRjb3JlXG4gKiBAcHJvcGVydHkge21vZHVsZTp4ZGNvcmUuSW5pdEZ1bmN0aW9ufSBTeW1ib2wuZm9yKFwidHJhbnNkdWNlci9pbml0XCIpIEFcbiAqICAgICBmdW5jdGlvbiB0aGF0IGNhbiBjcmVhdGUgYSBuZXcsIGVtcHR5IGNvcHkgb2YgdGhlIHJlZHVjaWJsZSB0eXBlLlxuICogQHByb3BlcnR5IHttb2R1bGU6eGRjb3JlLlN0ZXBGdW5jdGlvbn0gU3ltYm9sLmZvcihcInRyYW5zZHVjZXIvc3RlcFwiKSBBXG4gKiAgICAgZnVuY3Rpb24gdGhhdCBjYW4gYWNjZXB0IGEgdmFsdWUgb2YgdGhlIHJlZHVjaWJsZSB0eXBlIGFuZCBhIG5ldyBlbGVtZW50XG4gKiAgICAgdG8gYmUgYWRkZWQgdG8gaXQgYW5kIHJldHVybiB0aGUgcmVkdWNpYmxlIHdpdGggdGhlIG5ldyBlbGVtZW50XG4gKiAgICAgaW5jb3Jwb3JhdGVkLlxuICogQHByb3BlcnR5IHttb2R1bGU6eGRjb3JlLlJlc3VsdEZ1bmN0aW9ufSBTeW1ib2wuZm9yKFwidHJhbnNkdWNlci9yZXN1bHRcIikgQVxuICogICAgIGZ1bmN0aW9uIHRoYXQgYWNjZXB0cyBhIHZhbHVlIG9mIHRoZSByZWR1Y2libGUgdHlwZSBhbmQgcmV0dXJucyB0aGUgc2FtZVxuICogICAgIHZhbHVlIHdpdGggYW55IGZpbmFsIG1vZGlmaWNhdGlvbnMgdGhhdCBtaWdodCBiZSBuZWNlc3NhcnkgZm9yIGl0LlxuICovXG5cbi8qKlxuICogQSBmdW5jdGlvbiB0aGF0IGFjY2VwdHMgYSByZWR1Y2VyIG9iamVjdCwgd2hpY2ggaXQgdGhlbiBjaGFpbnMgYSB0cmFuc2R1Y2VyXG4gKiBvYmplY3QgdG8uIFRoaXMgaXMgdGhlIHByaW1hcnkgd2F5IG9mIGNyZWF0aW5nIGNvbXBvc2VkIHRyYW5zZHVjZXIgY2hhaW5zLlxuICogXG4gKiBBIHRyYW5zZHVjZXIgZnVuY3Rpb24gYmFzaWNhbGx5IGVuY2Fwc3VsYXRlcyBhIHRyYW5zZHVjZXIgb2JqZWN0IGFuZCB0aGVcbiAqIGFiaWxpdHkgdG8gY2hhaW4gaXQgdG8gd2hhdGV2ZXIgcmVkdWNlciBvYmplY3QgaXMgcGFzc2VkIHRvIGl0LlxuICogXG4gKiBAY2FsbGJhY2sgVHJhbnNkdWNlckZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkY29yZVxuICogQHBhcmFtIHttb2R1bGU6eGRjb3JlLlJlZHVjZXJPYmplY3R9IHJlZHVjZXIgVGhlIHJlZHVjZXIgb2JqZWN0ICh3aGljaCBtYXlcbiAqICAgICBhbHNvIGJlIGEgdHJhbnNkdWNlciBvYmplY3QpIHRoYXQgaXMgdGhlIG5leHQgcmVkdWNlciBpbiB0aGUgY2hhaW4uXG4gKiBAcmV0dXJucyB7bW9kdWxlOnhkY29yZS5SZWR1Y2VyT2JqZWN0fSBBIHRyYW5zZHVjZXIgb2JqZWN0IGNvbnNpc3Rpbmcgb2Ygc29tZVxuICogICAgIG5ldyB0cmFuc2R1Y2VyIG9iamVjdCBjaGFpbmVkIHRvIHRoZSBzdXBwbGllZCByZWR1Y2VyIG9iamVjdC5cbiAqLyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG4vKipcbiAqIEZ1bmN0aW9ucyB0byBoZWxwIHdpdGggaXRlcmF0aW9uIG92ZXIgaXRlcmFibGUgb2JqZWN0cyBhbmQgcGxhaW4gb2JqZWN0cy5cbiAqXG4gKiBAbW9kdWxlIHhkY29yZS9pdGVyYXRpb25cbiAqIEBwcml2YXRlXG4gKi9cblxuaW1wb3J0IHsgaXNJbXBsZW1lbnRlZCB9IGZyb20gXCJtb2R1bGVzL3Byb3RvY29sXCI7XG5pbXBvcnQgeyBpc0Z1bmN0aW9uLCBpc09iamVjdCwgaXNHZW5lcmF0b3JGdW5jdGlvbiB9IGZyb20gXCJtb2R1bGVzL3V0aWxzXCI7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBpdGVyYXRvciBvdmVyIGFuIG9iamVjdC5cbiAqXG4gKiBEZXRhaWxzIGFib3V0IHRoaXMgZnVuY3Rpb24gYXJlIGluY2x1ZGVkIGluIHRoZSBkb2N1bWVudGF0aW9uIGZvclxuICoge0BsaW5rIG1vZHVsZTp4ZGNvcmUuaXRlcmF0b3J8aXRlcmF0b3J9LlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmogVGhlIG9iamVjdCBiZWluZyBpdGVyYXRlZCBvdmVyLlxuICogQHJldHVybnMge2V4dGVybmFsOkl0ZXJhdG9yfSBBbiBpdGVyYXRvciBvdmVyIHRoZSBwcm9wZXJ0aWVzIG9mIGBvYmpgLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gb2JqZWN0SXRlcmF0b3Iob2JqKSB7XG4gIHJldHVybiAoZnVuY3Rpb24qKCkge1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuICAgIGxldCBpbmRleCA9IDA7XG5cbiAgICB3aGlsZSAoaW5kZXggPCBrZXlzLmxlbmd0aCkge1xuICAgICAgY29uc3QgayA9IGtleXNbaW5kZXgrK107XG4gICAgICB5aWVsZCB7IFtrXTogb2JqW2tdIH07XG4gICAgfVxuICB9KSgpO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYW4gaXRlcmF0b3Igb3ZlciBhIGZ1bmN0aW9uLlxuICpcbiAqIERldGFpbHMgYWJvdXQgdGhpcyBmdW5jdGlvbiBhcmUgaW5jbHVkZWQgaW4gdGhlIGRvY3VtZW50YXRpb24gZm9yXG4gKiB7QGxpbmsgbW9kdWxlOnhkY29yZS5pdGVyYXRvcnxpdGVyYXRvcn0uXG4gKlxuICogQHBhcmFtIHttb2R1bGU6eGRjb3JlLkl0ZXJhYmxlRnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcmV0dXJucyB7ZXh0ZXJuYWw6SXRlcmF0b3J9IEFuIGl0ZXJhdG9yIG92ZXIgdGhlIHJldHVybiB2YWx1ZXMgb2YgYGZuYC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGZ1bmN0aW9uSXRlcmF0b3IoZm4pIHtcbiAgcmV0dXJuIChmdW5jdGlvbiooKSB7XG4gICAgbGV0IGN1cnJlbnQ7XG4gICAgbGV0IGluZGV4ID0gMDtcblxuICAgIGZvciAoOzspIHtcbiAgICAgIGN1cnJlbnQgPSBmbihpbmRleCsrLCBjdXJyZW50KTtcbiAgICAgIGlmICh0eXBlb2YgY3VycmVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHlpZWxkIGN1cnJlbnQ7XG4gICAgfVxuICB9KSgpO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYW4gaXRlcmF0b3Igb3ZlciB0aGUgcHJvdmlkZWQgdmFsdWUuIFRoZSBmb3JtIG9mIHRoZSBpdGVyYXRpb25cbiAqIGRlcGVuZHMgb24gd2hhdCBraW5kIG9mIHZhbHVlIGlzIGJlaW5nIGl0ZXJhdGVkIG92ZXIuXG4gKlxuICogSWYgdGhlIHZhbHVlIGlzIGEgY29sbGVjdGlvbiBpbXBsZW1lbnRpbmcgdGhlIFtpdGVyYWJsZSBwcm90b2NvbF1bMV0gKGFycmF5cyxcbiAqIHN0cmluZ3MsIGdlbmVyYXRvcnMsIG9yIGEgY3VzdG9tIG9iamVjdCBzdXBwb3J0aW5nIHRoZSBwcm90b2NvbCkgdGhlbiB0aGVcbiAqIHByb2R1Y2VkIGl0ZXJhdG9yIHdpbGwgYmUgYXMgZXhwZWN0ZWQ6IGFuIG9iamVjdCB0aGF0IGltcGxlbWVudHMgdGhlXG4gKiBbaXRlcmF0b3IgcHJvdG9jb2xdWzJdIGJ5IHByb3ZpZGluZyBhIGBuZXh0YCBmdW5jdGlvbiB0aGF0IHJldHVybnMgZWFjaFxuICogY29sbGVjdGlvbiB2YWx1ZSBpbiB0dXJuLlxuICpcbiAqIGBgYFxuICogY29uc3QgaXRlciA9IGl0ZXJhdG9yKFsxLCAyLCAzXSk7XG4gKiBjb25zb2xlLmxvZyhpdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4gMVxuICogY29uc29sZS5sb2coaXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IDJcbiAqIGNvbnNvbGUubG9nKGl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiAzXG4gKiBjb25zb2xlLmxvZyhpdGVyLm5leHQoKS5kb25lKTsgICAgLy8gLT4gdHJ1ZVxuICogYGBgXG4gKlxuICogU3BlY2lhbCBzdXBwb3J0IGlzIHByb3ZpZGVkIGZvciB0d28gdHlwZXMgdGhhdCBhcmUgbm90IG5vcm1hbGx5IGl0ZXJhYmxlOlxuICogb2JqZWN0cyBhbmQgZnVuY3Rpb25zLlxuICpcbiAqIE9iamVjdHMgcmVzdWx0IGluIGFuIGl0ZXJhdG9yIHRoYXQgcHJvZHVjZXMgYSBzaW5nbGUtcHJvcGVydHkgb2JqZWN0IGZvclxuICogZXZlcnkga2V5L3ZhbHVlIHBhaXIgaW4gdGhlIHN1cHBsaWVkIG9iamVjdC4gVGhlIFtvcmRlciBvZiBpdGVyYXRpb25dWzNdIGlzXG4gKiB0aGUgc2FtZSBhcyBpdCBpcyBmb3Igb2JqZWN0cyBwb3N0LUVTMjAxNTpcbiAqXG4gKiAxLiBTdHJpbmcga2V5cyB0aGF0IGFyZSBpbnRlZ2VyIGluZGljZXMgaW4gYXNjZW5kaW5nIG51bWVyaWNhbCBvcmRlclxuICogMi4gQWxsIG90aGVyIHN0cmluZyBrZXlzIGluIHRoZSBvcmRlciBpbiB3aGljaCB0aGV5IHdlcmUgYWRkZWQgdG8gdGhlIG9iamVjdFxuICogMy4gQWxsIHN5bWJvbCBrZXlzIGluIHRoZSBvcmRlciBpbiB3aGljaCB0aGV5IHdlcmUgYWRkZWQgdG8gdGhlIG9iamVjdFxuICpcbiAqIGBgYFxuICogY29uc3Qgb2JqID0ge1xuICogICBbU3ltYm9sKFwiZmlyc3RcIildOiB0cnVlLFxuICogICAwMjogdHJ1ZSxcbiAqICAgMTA6IHRydWUsXG4gKiAgIDAxOiB0cnVlLFxuICogICAyOiB0cnVlLFxuICogICBbU3ltYm9sKFwic2Vjb25kXCIpXTogdHJ1ZVxuICogfTtcbiAqIGNvbnN0IGl0ZXIgPSBpdGVyYXRvcihvYmopO1xuICogY29uc29sZS5sb2coaXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IHsgJzInOiB0cnVlIH1cbiAqIGNvbnNvbGUubG9nKGl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiB7ICcxMCc6IHRydWUgfVxuICogY29uc29sZS5sb2coaXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IHsgJzAyJzogdHJ1ZSB9XG4gKiBjb25zb2xlLmxvZyhpdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4geyAnMDEnOiB0cnVlIH1cbiAqIGNvbnNvbGUubG9nKGl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiB7IFtTeW1ib2woJ2ZpcnN0JyldOiB0cnVlIH1cbiAqIGNvbnNvbGUubG9nKGl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiB7IFtTeW1ib2woJ3NlY29uZCcpXTogdHJ1ZSB9XG4gKiBjb25zb2xlLmxvZyhpdGVyLm5leHQoKS5kb25lKTsgICAgLy8gLT4gdHJ1ZVxuICogYGBgXG4gKlxuICogRnVuY3Rpb25zIGFyZSBydW4gZWFjaCB0aW1lIHRoZSBpdGVyYXRvcidzIGBuZXh0YCBtZXRob2QgaXMgY2FsbGVkLCBhbmQgdGhlXG4gKiByZXR1cm4gdmFsdWUgb2YgdGhlIGZ1bmN0aW9uIGlzIHN1cHBsaWVkIGFzIHRoZSBpdGVyYXRvcidzIHZhbHVlIGF0IHRoYXRcbiAqIHBvaW50LlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gaXMgcHJvdmlkZWQgdHdvIGFyZ3VtZW50czogdGhlIHplcm8tYmFzZWQgaW5kZXggb2YgdGhhdFxuICogaXRlcmF0aW9uLCBhbmQgdGhlIHZhbHVlIHByb2R1Y2VkIGJ5IHRoZSBsYXN0IGludm9jYXRpb24gb2YgdGhlIGl0ZXJhdG9yLiBUaGVcbiAqIGxhc3QgdmFsdWUgaXMgYHVuZGVmaW5lZGAgb24gdGhlIGZpcnN0IHBhc3MsIGJ1dCBhIGRlZmF1bHQgcGFyYW1ldGVyIG9uIHRoZVxuICogZnVuY3Rpb24gY2FuIGRlZmluZSB0aGUgZmlyc3QgcGFzcyB2YWx1ZSB0byBiZSB3aGF0ZXZlciBpcyBuZWVkZWQuXG4gKlxuICogYGBgXG4gKiBjb25zdCBmbiA9IChpbmRleCwgbGFzdCA9IDEpID0+IGxhc3QgKiAoaW5kZXggKyAxKTtcbiAqIGNvbnN0IGl0ZXIgPSBpdGVyYXRvcihmbik7XG4gKiBjb25zb2xlLmxvZyhpdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4gMVxuICogY29uc29sZS5sb2coaXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IDJcbiAqIGNvbnNvbGUubG9nKGl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiA2XG4gKiBjb25zb2xlLmxvZyhpdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4gMjRcbiAqIGNvbnNvbGUubG9nKGl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiAxMjBcbiAqIGBgYFxuICpcbiAqIElmIHRoZSBpbnB1dCB2YWx1ZSBpcyBuZWl0aGVyIGl0ZXJhYmxlLCBvYmplY3QsIG9yIGZ1bmN0aW9uLCB0aGVuIHRoZSByZXN1bHRcbiAqIHdpbGwgYmUgYG51bGxgLlxuICpcbiAqIFsxXTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvSXRlcmF0aW9uX3Byb3RvY29scyNUaGVfaXRlcmFibGVfcHJvdG9jb2xcbiAqIFsyXTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvSXRlcmF0aW9uX3Byb3RvY29scyNUaGVfaXRlcmF0b3JfcHJvdG9jb2xcbiAqIFszXTogaHR0cHM6Ly8yYWxpdHkuY29tLzIwMTUvMTAvcHJvcGVydHktdHJhdmVyc2FsLW9yZGVyLWVzNi5odG1sXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZGNvcmVcbiAqIEBwYXJhbSB7KG9iamVjdHxtb2R1bGU6eGRjb3JlLkl0ZXJhYmxlRnVuY3Rpb258ZXh0ZXJuYWw6SXRlcmFibGUpfSB2YWx1ZVxuICogICAgIFRoZSB2YWx1ZSB0byBjcmVhdGUgYW4gaXRlcmF0b3Igb3Zlci5cbiAqIEByZXR1cm5zIHtleHRlcm5hbDpJdGVyYXRvcn0gQW4gaXRlcmF0b3Igb3ZlciBgdmFsdWVgLlxuICovXG5mdW5jdGlvbiBpdGVyYXRvcih2YWx1ZSkge1xuICBzd2l0Y2ggKHRydWUpIHtcbiAgICBjYXNlIGlzRnVuY3Rpb24odmFsdWVbU3ltYm9sLml0ZXJhdG9yXSk6XG4gICAgY2FzZSBpc0dlbmVyYXRvckZ1bmN0aW9uKHZhbHVlW1N5bWJvbC5pdGVyYXRvcl0pOlxuICAgICAgcmV0dXJuIHZhbHVlW1N5bWJvbC5pdGVyYXRvcl0oKTtcbiAgICBjYXNlIGlzRnVuY3Rpb24odmFsdWUpOlxuICAgICAgcmV0dXJuIGZ1bmN0aW9uSXRlcmF0b3IodmFsdWUpO1xuICAgIGNhc2UgaXNPYmplY3QodmFsdWUpOlxuICAgICAgcmV0dXJuIG9iamVjdEl0ZXJhdG9yKHZhbHVlKTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHBhc3NlZCBvYmplY3QgaXMgaXRlcmFibGUsIGluIHRlcm1zIG9mIHdoYXQgJ2l0ZXJhYmxlJ1xuICogbWVhbnMgdG8gdGhpcyBsaWJyYXJ5LiBJbiBvdGhlciB3b3JkcywgdmFsdWVzIGltcGxlbWVudGluZyB0aGUgYGl0ZXJhYmxlYFxuICogcHJvdG9jb2wgYW5kIHBsYWluIG9iamVjdHMgcmV0dXJuIGB0cnVlYCwgd2hpbGUgZXZlcnl0aGluZyBlbHNlIHJldHVybnNcbiAqIGBmYWxzZWAuIFRoaXMgZG9lcyBub3QgcmV0dXJuIGB0cnVlYCBmb3IgZnVuY3Rpb25zIGV2ZW4gdGhvdWdoXG4gKiB7QGxpbmsgbW9kdWxlOnhkY29yZS5pdGVyYXRvcnxpdGVyYXRvcn0gY2FuIHByb2R1Y2UgYW4gaXRlcmF0b3IgZm9yIHRoZW0sXG4gKiBiZWNhdXNlIG5vdCBhbGwgZnVuY3Rpb25zIHdvcmsgd2VsbCB3aXRoXG4gKiB7QGxpbmsgbW9kdWxlOnhkY29yZS5pdGVyYXRvcnxpdGVyYXRvcn0uXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZGNvcmVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3QgZm9yIGl0ZXJhYmlsaXR5LlxuICogQHJldHVybiB7Ym9vbGVhbn0gRWl0aGVyIGB0cnVlYCBpZiB0aGUgdmFsdWUgaXMgaXRlcmFibGVcbiAqICAgICAoYHtAbGluayBtb2R1bGU6eGRjb3JlLml0ZXJhdG9yfGl0ZXJhdG9yfWAgd2lsbCByZXR1cm4gYW4gaXRlcmF0b3IgZm9yXG4gKiAgICAgaXQpIG9yIGBmYWxzZWAgaWYgaXQgaXMgbm90LlxuICovXG5mdW5jdGlvbiBpc0l0ZXJhYmxlKHZhbHVlKSB7XG4gIHJldHVybiBpc0ltcGxlbWVudGVkKHZhbHVlLCBcIml0ZXJhdG9yXCIpIHx8IGlzT2JqZWN0KHZhbHVlKTtcbn1cblxuZXhwb3J0IHsgaXRlcmF0b3IsIGlzSXRlcmFibGUgfTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG4vKipcbiAqIFByb3RvY29scyBmb3IgaXRlcmF0aW9uIGFuZCByZWR1Y3Rpb24uXG4gKlxuICogQG1vZHVsZSB4ZGNvcmUvcHJvdG9jb2xcbiAqIEBwcml2YXRlXG4gKi9cblxuaW1wb3J0IHsgaXNGdW5jdGlvbiwgaXNHZW5lcmF0b3JGdW5jdGlvbiB9IGZyb20gXCJtb2R1bGVzL3V0aWxzXCI7XG5cbi8qKlxuICogVGhlIG1hcHBpbmcgb2YgcHJvdG9jb2wgbmFtZXMgdG8gdGhlaXIgcmVzcGVjdGl2ZSBwcm9wZXJ0eSBrZXkgbmFtZXMuIFRoaXNcbiAqIG1hcHBpbmcgbWFrZXMgaXQgZWFzaWVyIHRvIGRlYWwgd2l0aCB0aGVzZSBwcm90b2NvbHMgYXMgdGhleSBjYW4gYmUgbG9va2VkIHVwXG4gKiBieSBzdHJpbmcgbmFtZSByYXRoZXIgdGhhbiBieSBtb3JlIGRpZmZpY3VsdC10by13b3JrLXdpdGggc3ltYm9scy5cbiAqXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBQcm90b2NvbE1hcFxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZGNvcmVcbiAqIEBwcm9wZXJ0eSB7U3ltYm9sfSBpbml0IFRoZSBgcmVkdWNlci9pbml0YCBwcm90b2NvbC4gVGhpcyBpcyB1c2VkIHRvIG1hcmtcbiAqICAgICBmdW5jdGlvbnMgdGhhdCBpbml0aWFsaXplIGEgdGFyZ2V0IGNvbGxlY3Rpb24gYmVmb3JlIGFkZGluZyBpdGVtcyB0byBpdC5cbiAqIEBwcm9wZXJ0eSB7U3ltYm9sfSBzdGVwIFRoZSBgcmVkdWNlci9zdGVwYCBwcm90b2NvbC4gVGhpcyBpcyB1c2VkIHRvIG1hcmtcbiAqICAgICBmdW5jdGlvbnMgdGhhdCBhcmUgdXNlZCBpbiB0aGUgcmVkdWNlcidzIHN0ZXAgcHJvY2Vzcywgd2hlcmUgb2JqZWN0cyBhcmVcbiAqICAgICBhZGRlZCB0byB0aGUgdGFyZ2V0IGNvbGxlY3Rpb24gb25lIGF0IGEgdGltZS5cbiAqIEBwcm9wZXJ0eSB7U3ltYm9sfSByZXN1bHQgVGhlIGByZWR1Y2VyL3Jlc3VsdGAgcHJvdG9jb2wuIFRoaXMgaXMgdXNlZCB0byBtYXJrXG4gKiAgICAgZnVuY3Rpb25zIHRoYXQgdGFrZSB0aGUgZmluYWwgcmVzdWx0IG9mIHRoZSBzdGVwIHByb2Nlc3MgYW5kIHJldHVybiB0aGVcbiAqICAgICBmaW5hbCBmb3JtIHRvIGJlIG91dHB1dC4gVGhpcyBpcyBvcHRpb25hbDsgaWYgdGhlIHJlZHVjZXIgZG9lcyBub3Qgd2FudFxuICogICAgIHRvIHRyYW5zZm9ybSB0aGUgZmluYWwgcmVzdWx0LCBpdCBzaG91bGQganVzdCByZXR1cm4gdGhlIHJlc3VsdCBvZiBpdHNcbiAqICAgICBjaGFpbmVkIHJlZHVjZXIncyBgcmVzdWx0YCBmdW5jdGlvbi5cbiAqIEBwcm9wZXJ0eSB7U3ltYm9sfSByZWR1Y2VkIFRoZSBgcmVkdWNlci9jb21wbGV0ZWRgIHByb3RvY29sLiBUaGUgcHJlc2VuY2Ugb2ZcbiAqICAgICB0aGlzIGtleSBvbiBhbiBvYmplY3QgaW5kaWNhdGVzIHRoYXQgaXRzIHRyYW5zZm9ybWF0aW9uIGhhcyBiZWVuXG4gKiAgICAgY29tcGxldGVkLiBJdCBpcyB1c2VkIGludGVybmFsbHkgdG8gbWFyayBjb2xsZWN0aW9ucyB3aG9zZVxuICogICAgIHRyYW5zZm9ybWF0aW9ucyBjb25jbHVkZSBiZWZvcmUgZXZlcnkgb2JqZWN0IGlzIGl0ZXJhdGVkIG92ZXIgKGFzIGluXG4gKiAgICAgYHtAbGluayBtb2R1bGU6eGR1Y2UudGFrZX1gIHRyYW5zZHVjZXJzLikgSXQgaXMgb2YgbGl0dGxlIHVzZSBiZXlvbmRcbiAqICAgICB0cmFuc2R1Y2VyIGF1dGhvcmluZy5cbiAqIEBwcm9wZXJ0eSB7U3ltYm9sfSB2YWx1ZSBUaGUgYHJlZHVjZXIvdmFsdWVgIHByb3RvY29sLiBUaGlzIGlzIHVzZWRcbiAqICAgICBpbnRlcm5hbGx5IHRvIG1hcmsgcHJvcGVydGllcyB0aGF0IGNvbnRhaW4gdGhlIHZhbHVlIG9mIGEgY29tcGxldGVkXG4gKiAgICAgdHJhbnNmb3JtYXRpb24uIEl0IGlzIG9mIGxpdHRsZSB1c2UgYmV5b25kIHRyYW5zZHVjZXIgYXV0aG9yaW5nLlxuICovXG5cbi8qKlxuICogVGhlIG1hcHBpbmcgb2YgcHJvdG9jb2wgbmFtZXMgdG8gdGhlaXIgcmVzcGVjdGl2ZSBwcm9wZXJ0eSBrZXkgbmFtZXMuXG4gKlxuICogQHR5cGUge21vZHVsZTp4ZGNvcmUuUHJvdG9jb2xNYXB9XG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkY29yZVxuICovXG5jb25zdCBwcm90b2NvbHMgPSBPYmplY3QuY3JlYXRlKG51bGwsIHtcbiAgaW5pdDoge1xuICAgIHZhbHVlOiBTeW1ib2wuZm9yKFwicmVkdWNlci9pbml0XCIpXG4gIH0sXG4gIHN0ZXA6IHtcbiAgICB2YWx1ZTogU3ltYm9sLmZvcihcInJlZHVjZXIvc3RlcFwiKVxuICB9LFxuICByZXN1bHQ6IHtcbiAgICB2YWx1ZTogU3ltYm9sLmZvcihcInJlZHVjZXIvcmVzdWx0XCIpXG4gIH0sXG4gIGNvbXBsZXRlZDoge1xuICAgIHZhbHVlOiBTeW1ib2wuZm9yKFwicmVkdWNlci9jb21wbGV0ZWRcIilcbiAgfSxcbiAgdmFsdWU6IHtcbiAgICB2YWx1ZTogU3ltYm9sLmZvcihcInJlZHVjZXIvdmFsdWVcIilcbiAgfVxufSk7XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGEgcGFydGljdWxhciBwcm90b2NvbCBpcyBpbXBsZW1lbnRlZCBieSBhIHZhbHVlLiBUaGVcbiAqIHBvc3NpYmxlIHZhbHVlcyBmb3IgYHByb3RvY29sYCBhcmUgdGhlIGZvbGxvd2luZywgcmVwcmVzZW50aW5nIHRoZSB0d29cbiAqIGJ1aWx0LWluIGl0ZXJhdG9yIHByb3RvY29scyBhbmQgdGhlIGZpdmUgY3VzdG9tIHRyYW5zZHVjZXIgcHJvdG9jb2xzOlxuICpcbiAqICogYGl0ZXJhdG9yYFxuICogKiBgYXN5bmNJdHJlcmF0b3JgXG4gKiAqIGBpbml0YFxuICogKiBgc3RlcGBcbiAqICogYHJlc3VsdGBcbiAqICogYGNvbXBsZXRlZGBcbiAqICogYHZhbHVlYFxuICpcbiAqIEFueSBvZiB0aGVzZSB3aWxsIHJlc3VsdCBpbiBgdHJ1ZWAgaWYgdGhlIG9iamVjdCBpbiBxdWVzdGlvbiBoYXMgYSBwcm9wZXJ0eVxuICogdGhhdCBtYXRjaGVzIHRoZSBvbmUgbmVjZXNzYXJ5IHRvIGltcGxlbWVudCB0aGUgcHJvdG9jb2wuIEZ1cnRoZXIsIGFueSBvZlxuICogdGhlIHByb3BlcnRpZXMgb3RoZXIgdGhhbiBgY29tcGxldGVkYCBhbmQgYHN0ZXBgIG11c3QgYmUgZnVuY3Rpb25zLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGRjb3JlXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIFRoZSBvYmplY3QgdG8gY2hlY2sgZm9yIHByb3RvY29sIGltcGxlbWVudGF0aW9uLlxuICogQHBhcmFtIHtzdHJpbmd9IHByb3RvY29sIFRoZSBuYW1lIG9mIHRoZSBwcm90b2NvbCB0byBjaGVjayBmb3IuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gRWl0aGVyIGB0cnVlYCBpZiB0aGUgb2JqZWN0IHN1cHBvcnRzIHRoZSBuYW1lZCBwcm90b2NvbCBvclxuICogICAgIGBmYWxzZWAgaWYgaXQgZG9lcyBub3QuXG4gKi9cbmZ1bmN0aW9uIGlzSW1wbGVtZW50ZWQob2JqLCBwcm90b2NvbCkge1xuICBpZiAob2JqID09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzd2l0Y2ggKHByb3RvY29sKSB7XG4gICAgY2FzZSBcIml0ZXJhdG9yXCI6XG4gICAgICByZXR1cm4gKFxuICAgICAgICBpc0Z1bmN0aW9uKG9ialtTeW1ib2wuaXRlcmF0b3JdKSB8fFxuICAgICAgICBpc0dlbmVyYXRvckZ1bmN0aW9uKG9ialtTeW1ib2wuaXRlcmF0b3JdKVxuICAgICAgKTtcbiAgICBjYXNlIFwiYXN5bmNJdGVyYXRvclwiOlxuICAgICAgcmV0dXJuIGlzR2VuZXJhdG9yRnVuY3Rpb24ob2JqW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSk7XG4gICAgY2FzZSBcImNvbXBsZXRlZFwiOlxuICAgIGNhc2UgXCJ2YWx1ZVwiOlxuICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqKS5pbmNsdWRlcyhwcm90b2NvbHNbcHJvdG9jb2xdKTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGlzRnVuY3Rpb24ob2JqW3Byb3RvY29sc1twcm90b2NvbF1dKTtcbiAgfVxufVxuXG5leHBvcnQgeyBwcm90b2NvbHMsIGlzSW1wbGVtZW50ZWQgfTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG4vKipcbiAqIEEgc2V0IG9mIGZ1bmN0aW9ucyByZWxhdGVkIHRvIHRoZSBwcm9kdWNpbmcgcmVkdWNlciBvYmplY3RzLCBtYXJraW5nXG4gKiBjb21wbGV0ZWQgb2JqZWN0cywgYW5kIHBlcmZvcm1pbmcgZ2VuZXJhbCByZWR1Y3Rpb24gb3BlcmF0aW9ucy5cbiAqXG4gKiBAbW9kdWxlIHhkY29yZS9yZWR1Y3Rpb25cbiAqIEBwcml2YXRlXG4gKi9cblxuaW1wb3J0IHsgaXNJbXBsZW1lbnRlZCwgcHJvdG9jb2xzIGFzIHAgfSBmcm9tIFwibW9kdWxlcy9wcm90b2NvbFwiO1xuaW1wb3J0IHsgaXNTdHJpbmcsIGlzQXJyYXksIGlzT2JqZWN0LCBpc0Z1bmN0aW9uIH0gZnJvbSBcIm1vZHVsZXMvdXRpbHNcIjtcbmltcG9ydCB7IGl0ZXJhdG9yIH0gZnJvbSBcIm1vZHVsZXMvaXRlcmF0aW9uXCI7XG5cbi8qKlxuICogUmV0dXJucyBhbiBpbml0IGZ1bmN0aW9uIGZvciBhIGNvbGxlY3Rpb24uIFRoaXMgaXMgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYVxuICogbmV3LCBlbXB0eSBpbnN0YW5jZSBvZiB0aGUgY29sbGVjdGlvbiBpbiBxdWVzdGlvbi4gSWYgdGhlIGNvbGxlY3Rpb24gZG9lc24ndFxuICogc3VwcG9ydCByZWR1Y3Rpb24sIGBudWxsYCBpcyByZXR1cm5lZC4gVGhpcyBtYWtlcyBjb25kaXRpb25hbHMgYSBiaXQgZWFzaWVyXG4gKiB0byB3b3JrIHdpdGguXG4gKlxuICogSW4gb3JkZXIgdG8gc3VwcG9ydCB0aGUgY29udmVyc2lvbiBvZiBmdW5jdGlvbnMgaW50byByZWR1Y2VycywgZnVuY3Rpb25cbiAqIHN1cHBvcnQgaXMgYWxzbyBwcm92aWRlZC5cbiAqXG4gKiBAcGFyYW0geyhvYmplY3R8ZnVuY3Rpb258ZXh0ZXJuYWw6SXRlcmFibGUpfSBjb2xsZWN0aW9uIEEgY29sbGVjdGlvbiB0b1xuICogICAgIGNyZWF0ZSBhbiBpbml0IGZ1bmN0aW9uIGZvci4gVGhpcyBjYW4gYmUgYW55dGhpbmcgdGhhdCBzdXBwb3J0cyB0aGVcbiAqICAgICBpdGVyYXRhYmxlIHByb3RvY29sLCBhIHBsYWluIG9iamVjdCwgb3IgYSBmdW5jdGlvbi5cbiAqIEByZXR1cm4ge21vZHVsZTp4ZGNvcmUuSW5pdEZ1bmN0aW9ufSBBIGZ1bmN0aW9uIHRoYXQsIHdoZW4gY2FsbGVkLCByZXR1cm5zIGFuXG4gKiAgICAgaW5pdGlhbCB2ZXJzaW9uIG9mIHRoZSBwcm92aWRlZCBjb2xsZWN0aW9uLiBJZiB0aGUgcHJvdmlkZWQgY29sbGVjdGlvbiBpc1xuICogICAgIG5vdCBpdGVyYWJsZSwgdGhlbiBgbnVsbGAgaXMgcmV0dXJuZWQuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBpbml0KGNvbGxlY3Rpb24pIHtcbiAgc3dpdGNoICh0cnVlKSB7XG4gICAgY2FzZSBpc0ltcGxlbWVudGVkKGNvbGxlY3Rpb24sIFwiaW5pdFwiKTpcbiAgICAgIHJldHVybiBjb2xsZWN0aW9uW3AuaW5pdF07XG4gICAgY2FzZSBpc1N0cmluZyhjb2xsZWN0aW9uKTpcbiAgICAgIHJldHVybiAoKSA9PiBcIlwiO1xuICAgIGNhc2UgaXNBcnJheShjb2xsZWN0aW9uKTpcbiAgICAgIHJldHVybiAoKSA9PiBbXTtcbiAgICBjYXNlIGlzT2JqZWN0KGNvbGxlY3Rpb24pOlxuICAgICAgcmV0dXJuICgpID0+ICh7fSk7XG4gICAgY2FzZSBpc0Z1bmN0aW9uKGNvbGxlY3Rpb24pOlxuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoXCJpbml0IG5vdCBhdmFpbGFibGVcIik7XG4gICAgICB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG4vKipcbiAqIFJldHVybnMgYSBzdGVwIGZ1bmN0aW9uIGZvciBhIGNvbGxlY3Rpb24uIFRoaXMgaXMgYSBmdW5jdGlvbiB0aGF0IHRha2VzIGFuXG4gKiBhY2N1bXVsYXRvciBhbmQgYSB2YWx1ZSBhbmQgcmV0dXJucyB0aGUgcmVzdWx0IG9mIHJlZHVjaW5nIHRoZSB2YWx1ZSBpbnRvIHRoZVxuICogYWNjdW11bGF0b3IuIElmIHRoZSBjb2xsZWN0aW9uIGRvZXNuJ3Qgc3VwcG9ydCByZWR1Y3Rpb24sIGBudWxsYCBpcyByZXR1cm5lZC5cbiAqIFRoZSByZXR1cm5lZCBmdW5jdGlvbiBpdHNlbGYgc2ltcGx5IHJlZHVjZXMgdGhlIGlucHV0IGludG8gdGhlIHRhcmdldFxuICogY29sbGVjdGlvbiB3aXRob3V0IG1vZGlmeWluZyBpdC5cbiAqXG4gKiBJbiBvcmRlciB0byBzdXBwb3J0IHRoZSBjb252ZXJzaW9uIG9mIGZ1bmN0aW9ucyBpbnRvIHJlZHVjZXJzLCBmdW5jdGlvblxuICogc3VwcG9ydCBpcyBhbHNvIHByb3ZpZGVkLlxuICpcbiAqIEBwYXJhbSB7KG9iamVjdHxmdW5jdGlvbnxleHRlcm5hbDpJdGVyYWJsZSl9fSBjb2xsZWN0aW9uIEEgY29sbGVjdGlvbiB0b1xuICogICAgIGNyZWF0ZSBhIHN0ZXAgZnVuY3Rpb24gZm9yLiBUaGlzIGNhbiBiZSBhbnl0aGluZyB0aGF0IHN1cHBvcnRzIHRoZVxuICogICAgIGl0ZXJhdGlvbiBwcm90b2NvbCwgYSBwbGFpbiBvYmplY3QsIG9yIGEgZnVuY3Rpb24uXG4gKiBAcmV0dXJuIHttb2R1bGU6eGRjb3JlLlN0ZXBGdW5jdGlvbn0gQSByZWR1Y3Rpb24gZnVuY3Rpb24gZm9yIHRoZSBwcm92aWRlZFxuICogICAgIGNvbGxlY3Rpb24gdGhhdCBzaW1wbHkgYWRkcyBhbiBlbGVtZW50IHRvIHRoZSB0YXJnZXQgY29sbGVjdGlvbiB3aXRob3V0XG4gKiAgICAgbW9kaWZ5aW5nIGl0LiBJZiB0aGUgcHJvdmlkZWQgY29sbGVjdGlvbiBpcyBub3QgaXRlcmFibGUsIGBudWxsYCBpc1xuICogICAgIHJldHVybmVkLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gc3RlcChjb2xsZWN0aW9uKSB7XG4gIHN3aXRjaCAodHJ1ZSkge1xuICAgIGNhc2UgaXNJbXBsZW1lbnRlZChjb2xsZWN0aW9uLCBcInN0ZXBcIik6XG4gICAgICByZXR1cm4gY29sbGVjdGlvbltwLnN0ZXBdO1xuXG4gICAgY2FzZSBpc1N0cmluZyhjb2xsZWN0aW9uKTpcbiAgICAgIHJldHVybiAoYWNjLCB2YWx1ZSkgPT4ge1xuICAgICAgICBjb25zdCB2ID0gaXNPYmplY3QodmFsdWUpID8gdmFsdWVbT2JqZWN0LmtleXModmFsdWUpWzBdXSA6IHZhbHVlO1xuICAgICAgICByZXR1cm4gYWNjICsgdjtcbiAgICAgIH07XG5cbiAgICBjYXNlIGlzQXJyYXkoY29sbGVjdGlvbik6XG4gICAgICByZXR1cm4gKGFjYywgdmFsdWUpID0+IHtcbiAgICAgICAgYWNjLnB1c2godmFsdWUpO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfTtcblxuICAgIGNhc2UgaXNPYmplY3QoY29sbGVjdGlvbik6XG4gICAgICByZXR1cm4gKGFjYywgdmFsdWUpID0+IHtcbiAgICAgICAgbGV0IHYgPSB2YWx1ZTtcblxuICAgICAgICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgICAgIC8vIGlmIHRoZSBpbnB1dCBpc24ndCBhbiBvYmplY3QsIHR1cm4gaXQgaW50byBhbiBvYmplY3Qgd2l0aCBhXG4gICAgICAgICAgLy8gbnVtZXJpY2FsIGtleSBvbmUgZ3JlYXRlciB0aGFuIHRoZSBtYXgga2V5IGFscmVhZHkgaW4gdGhlXG4gICAgICAgICAgLy8gYWNjdW11bGF0b3JcbiAgICAgICAgICBjb25zdCBtYXggPSBPYmplY3Qua2V5cyhhY2MpLnJlZHVjZSgoYSwgYikgPT4gTWF0aC5tYXgoYSwgYiksIC0xKTtcbiAgICAgICAgICB2ID0geyBbbWF4ICsgMV06IHZhbHVlIH07XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBrID0gT2JqZWN0LmtleXModilbMF07XG4gICAgICAgIGFjY1trXSA9IHZba107XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9O1xuXG4gICAgY2FzZSBpc0Z1bmN0aW9uKGNvbGxlY3Rpb24pOlxuICAgICAgcmV0dXJuIChhY2MsIHZhbHVlKSA9PiBjb2xsZWN0aW9uKGFjYywgdmFsdWUpO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbi8qKlxuICogUmV0dXJucyBhIHJlc3VsdCBmdW5jdGlvbiBmb3IgYSBjb2xsZWN0aW9uLiBUaGlzIGlzIGEgZnVuY3Rpb24gdGhhdCBwZXJmb3Jtc1xuICogYW55IGZpbmFsIHByb2Nlc3NpbmcgdGhhdCBzaG91bGQgYmUgZG9uZSBvbiB0aGUgcmVzdWx0IG9mIGEgcmVkdWN0aW9uLiBJZiB0aGVcbiAqIGNvbGxlY3Rpb24gZG9lc24ndCBzdXBwb3J0IHJlZHVjdGlvbiwgYG51bGxgIGlzIHJldHVybmVkLlxuICpcbiAqIEluIG9yZGVyIHRvIHN1cHBvcnQgdGhlIGNvbnZlcnNpb24gb2YgZnVuY3Rpb25zIGludG8gcmVkdWNlcnMsIGZ1bmN0aW9uXG4gKiBzdXBwb3J0IGlzIGFsc28gcHJvdmlkZWQuXG4gKlxuICogQHBhcmFtIHsob2JqZWN0fGZ1bmN0aW9ufGV4dGVybmFsOkl0ZXJhYmxlKX19IGNvbGxlY3Rpb24gQSBjb2xsZWN0aW9uIHRvXG4gKiAgICAgY3JlYXRlIGEgc3RlcCBmdW5jdGlvbiBmb3IuIFRoaXMgY2FuIGJlIGFueXRoaW5nIHRoYXQgc3VwcG9ydHMgdGhlXG4gKiAgICAgaXRlcmF0aW9uIHByb3RvY29sLCBhIHBsYWluIG9iamVjdCwgb3IgYSBmdW5jdGlvbi5cbiAqIEByZXR1cm4ge21vZHVsZTp4ZGNvcmUuUmVzdWx0RnVuY3Rpb259IEEgZnVuY3Rpb24gdGhhdCwgd2hlbiBnaXZlbiBhIHJlZHVjZWRcbiAqICAgICBjb2xsZWN0aW9uLCBwcm9kdWNlcyB0aGUgZmluYWwgb3V0cHV0LiBJZiB0aGUgcHJvdmlkZWQgY29sbGVjdGlvbiBpcyBub3RcbiAqICAgICBpdGVyYWJsZSwgYG51bGxgIHdpbGwgYmUgcmV0dXJuZWQuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiByZXN1bHQoY29sbGVjdGlvbikge1xuICBzd2l0Y2ggKHRydWUpIHtcbiAgICBjYXNlIGlzSW1wbGVtZW50ZWQoY29sbGVjdGlvbiwgXCJyZXN1bHRcIik6XG4gICAgICByZXR1cm4gY29sbGVjdGlvbltwLnJlc3VsdF07XG4gICAgY2FzZSBpc1N0cmluZyhjb2xsZWN0aW9uKTpcbiAgICBjYXNlIGlzQXJyYXkoY29sbGVjdGlvbik6XG4gICAgY2FzZSBpc09iamVjdChjb2xsZWN0aW9uKTpcbiAgICBjYXNlIGlzRnVuY3Rpb24oY29sbGVjdGlvbik6XG4gICAgICByZXR1cm4gdmFsdWUgPT4gdmFsdWU7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHJlZHVjZXIgb2JqZWN0IGZyb20gYSBmdW5jdGlvbiBvciBmcm9tIGEgcmVkdWNpYmxlIHR5cGUgKGFycmF5LFxuICogb2JqZWN0LCBzdHJpbmcsIG9yIG9iamVjdCBpbXBsZW1lbnRpbmcgdGhlIHJlZHVjZXIgcHJvdG9jb2xzKS5cbiAqXG4gKiBUbyBjcmVhdGUgYSByZWR1Y2VyIGZvciBhcnJheXMsIG9iamVjdHMsIG9yIHN0cmluZ3MsIHNpbXBseSBwYXNzIGFuIGVtcHR5XG4gKiB2ZXJzaW9uIG9mIHRoYXQgY29sbGVjdGlvbiB0byB0aGlzIGZ1bmN0aW9uIChlLmcuLCBgdG9SZWR1Y2VyKFtdKWApLlxuICpcbiAqIFRoZSBub3RhYmxlIHVzZSBmb3IgdGhpcyBmdW5jdGlvbiB0aG91Z2ggaXMgdG8gdHVybiBhIHJlZHVjdGlvbiBmdW5jdGlvbiBpbnRvXG4gKiBhIHJlZHVjZXIgb2JqZWN0LiBUaGUgZnVuY3Rpb24gaXMgYSBmdW5jdGlvbiBvZiB0d28gcGFyYW1ldGVycywgYW5cbiAqIGFjY3VtdWxhdG9yIGFuZCBhIHZhbHVlLCBhbmQgcmV0dXJucyB0aGUgYWNjdW11bGF0b3Igd2l0aCB0aGUgdmFsdWUgaW4gaXQuXG4gKiBUaGlzIGlzIGV4YWN0bHkgdGhlIHNhbWUga2luZCBvZiBmdW5jdGlvbiB0aGF0IGlzIHBhc3NlZCB0byByZWR1Y3Rpb25cbiAqIGZ1bmN0aW9ucyBsaWtlIEphdmFTY3JpcHQncyBgQXJyYXkucHJvdG90eXBlLnJlZHVjZWAgYW5kIExvZGFzaCdzIGBfLnJlZHVjZWAuXG4gKlxuICogTm90ZSBpbiBwYXJ0aWN1bGFyIHRoYXQgdGhlIG91dHB1dCBvZiB0aGlzIHJlZHVjZXIgZG9lcyBub3QgbmVlZCB0byBiZSBhXG4gKiBjb2xsZWN0aW9uLiBJdCBjYW4gYmUgYW55dGhpbmcuIFdoaWxlIHRyYW5zZHVjaW5nIG5vcm1hbGx5IGludm9sdmVzXG4gKiB0cmFuc2Zvcm1pbmcgb25lIGNvbGxlY3Rpb24gaW50byBhbm90aGVyLCBpdCBuZWVkIG5vdCBiZSBzby4gRm9yIGV4YW1wbGUsXG4gKiBoZXJlIGlzIGEgcmVkdWNlciB0aGF0IHdpbGwgcmVzdWx0IGluIHN1bW1pbmcgb2YgdGhlIGNvbGxlY3Rpb24gdmFsdWVzLlxuICpcbiAqIGBgYFxuICogaW1wb3J0IHsgdG9SZWR1Y2VyLCByZWR1Y2UgfSBmcm9tIFwiQGNoYW5rby94ZGNvcmVcIjtcbiAqXG4gKiBjb25zdCBzdW1SZWR1Y2VyID0gdG9SZWR1Y2VyKChhY2MsIGlucHV0KSA9PiBhY2MgKyBpbnB1dCk7XG4gKiBjb25zdCBzdW0gPSByZWR1Y2UoWzEsIDIsIDMsIDQsIDVdLCBzdW1SZWR1Y2VyLCAwKTtcbiAqIGNvbnNvbGUubG9nKHN1bSk7ICAgLy8gLT4gMTVcbiAqIGBgYFxuICpcbiAqIFRoaXMgY2FuIGJlIGNvbWJpbmVkIHdpdGggdHJhbnNkdWNlcnMgYXMgd2VsbCwgYXMgaW4gdGhpcyBjYWxjdWxhdGlvbiBvZiB0aGVcbiAqIHN1bSBvZiB0aGUgKnNxdWFyZXMqIG9mIHRoZSBjb2xsZWN0aW9uIHZhbHVlcy5cbiAqXG4gKiBgYGBcbiAqIGltcG9ydCB7IHRvUmVkdWNlciB9IGZyb20gXCJAY2hhbmtvL3hkY29yZVwiO1xuICogaW1wb3J0IHsgdHJhbnNkdWNlLCBtYXAgfSBmcm9tIFwiQGNoYW5rby94ZHVjZVwiO1xuICpcbiAqIGNvbnN0IHN1bVJlZHVjZXIgPSB0b1JlZHVjZXIoKGFjYywgaW5wdXQpID0+IGFjYyArIGlucHV0KTtcbiAqIGNvbnN0IHN1bSA9IHRyYW5zZHVjZShbMSwgMiwgMywgNCwgNV0sIG1hcCh4ID0+IHggKiB4KSwgc3VtUmVkdWNlciwgMCk7XG4gKiBjb25zb2xlLmxvZyhzdW0pOyAgIC8vIC0+IDU1XG4gKiBgYGBcbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkY29yZVxuICogQHBhcmFtIHsoYXJyYXl8b2JqZWN0fGZ1bmN0aW9ufG1vZHVsZTp4ZGNvcmUuUmVkdWNlck9iamVjdCl9IGNvbGxlY3Rpb24gQVxuICogICAgIHJlZHVjaWJsZSBjb2xsZWN0aW9uIG9yIGEgcmVkdWNlciBmdW5jdGlvbi5cbiAqIEByZXR1cm4ge21vZHVsZTp4ZGNvcmUuUmVkdWNlck9iamVjdH0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgcHJvdG9jb2xcbiAqICAgICBwcm9wZXJ0aWVzIGZvciBgaW5pdGAsIGBzdGVwYCwgYW5kIGByZXN1bHRgLiBUaGlzIG9iamVjdCBpcyBzdWl0YWJsZSBmb3JcbiAqICAgICB1c2UgYXMgYSByZWR1Y2VyIG9iamVjdCAob25lIHByb3ZpZGVkIHRvXG4gKiAgICAgYHtAbGluayBtb2R1bGU6eGRjb3JlLnJlZHVjZXxyZWR1Y2V9YCkuIElmIHRoZSBwcm92aWRlZCBjb2xsZWN0aW9uIGlzIG5vdFxuICogICAgIHJlZHVjaWJsZSwgYWxsIG9mIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgb2JqZWN0IHdpbGwgYmUgYG51bGxgLlxuICovXG5mdW5jdGlvbiB0b1JlZHVjZXIoY29sbGVjdGlvbikge1xuICByZXR1cm4gT2JqZWN0LmZyZWV6ZSh7XG4gICAgW3AuaW5pdF06IGluaXQoY29sbGVjdGlvbiksXG4gICAgW3Auc3RlcF06IHN0ZXAoY29sbGVjdGlvbiksXG4gICAgW3AucmVzdWx0XTogcmVzdWx0KGNvbGxlY3Rpb24pXG4gIH0pO1xufVxuXG4vKipcbiAqIEEgcmVkdWNlciBvYmplY3QgZm9yIGFycmF5cy5cbiAqXG4gKiBAdHlwZSB7bW9kdWxlOnhkY29yZS5SZWR1Y2VyT2JqZWN0fVxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgQVJSQVlfUkVEVUNFUiA9IHRvUmVkdWNlcihbXSk7XG5cbi8qKlxuICogQSByZWR1Y2VyIG9iamVjdCBmb3Igb2JqZWN0cy5cbiAqXG4gKiBAdHlwZSB7bW9kdWxlOnhkY29yZS5SZWR1Y2VyT2JqZWN0fVxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgT0JKRUNUX1JFRFVDRVIgPSB0b1JlZHVjZXIoe30pO1xuXG4vKipcbiAqIEEgcmVkdWNlciBvYmplY3QgZm9yIHN0cmluZ3MuXG4gKlxuICogQHR5cGUge21vZHVsZTp4ZGNvcmUuUmVkdWNlck9iamVjdH1cbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IFNUUklOR19SRURVQ0VSID0gdG9SZWR1Y2VyKFwiXCIpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSB0cmFuc2R1Y2VyIG9iamVjdCBmcm9tIGEgZnVuY3Rpb24gYW5kIGEgcmVkdWNlciBvYmplY3QuXG4gKlxuICogVGhpcyBpcyBzaW1pbGFyIHRvIHtAbGluayBtb2R1bGU6eGRjb3JlLnRvUmVkdWNlcnx0b1JlZHVjZXJ9IGV4Y2VwdCBpbiB0d29cbiAqIHJlc3BlY3RzOlxuICpcbiAqIDEuIEl0IG9ubHkgYWNjZXB0cyBhIHJlZHVjZXIgZnVuY3Rpb24sIG5vdCBhIHJlZHVjZXIgb2JqZWN0XG4gKiAyLiBJdCBjaGFpbnMgdG8gYW5vdGhlciByZWR1Y2VyIG9iamVjdFxuICpcbiAqIFRoaXMgZnVuY3Rpb24gYXBwbGllcyB0aGUgZ2l2ZW4gZnVuY3Rpb24gYXMgdGhlIGBzdGVwYCBmdW5jdGlvbiBvZiB0aGVcbiAqIHJldHVybmVkIHRyYW5zZHVjZXIsIGFuZCB0aGUgYGluaXRgIGFuZCBgcmVzdWx0YCBmdW5jdGlvbnMgc2ltcGx5IGNhbGwgdGhlXG4gKiBzYW1lIGZ1bmN0aW9ucyBpbiB0aGUgbmV4dCByZWR1Y2VyIG9iamVjdC4gVGhpcyBpcyBwcmVjaXNlbHkgd2hhdCAqbW9zdCpcbiAqIHRyYW5zZHVjZXJzIHdhbnQ7IGBpbml0YCBhbmQgYHJlc3VsdGAgZnVuY3Rpb25zIGFyZSBub3JtYWxseSBoYW5kbGVkIGJ5IHRoZVxuICogcmVkdWNlciBhdCB0aGUgZW5kIG9mIHRoZSB0cmFuc2R1Y2VyIGNoYWluLiBJbiB0aGUgcmFyZSBjYXNlIHdoZW4gYW4gYGluaXRgXG4gKiBvciBgcmVzdWx0YCBmdW5jdGlvbiBtdXN0IGRvIG1vcmUgdGhhbiBzaW1wbHkgY2hhaW4sIHRoaXMgZnVuY3Rpb24gd2lsbCBub3RcbiAqIHdvcmsuIEdlbmVyYWxseSB0aGUgdHJhbnNkdWNlciBvYmplY3QgaXMgY3JlYXRlZCBtYW51YWxseSBpbiB0aGF0IGNhc2UuXG4gKlxuICogVGhpcyBmdW5jdGlvbiBkb2VzIG5vdCBhdXRvbWF0aWNhbGx5IGNoYWluIHRoZSBgc3RlcGAgZnVuY3Rpb24gdG8gdGhlIG5leHRcbiAqIG9uZSBkb3duIHRoZSBsaW5lLCBhcyB0aGF0IGNhbiBiZSBkb25lIGluIGFueSBudW1iZXIgb2YgZGlmZmVyZW50IHdheXMuIFRodXNcbiAqIHRoZSBmdW5jdGlvbiBpdHNlbGYgc2hvdWxkIGNhbGwgdGhlIGBzdGVwYCBmdW5jdGlvbiBpbiBgcmVkdWNlcmAgaW4gd2hhdGV2ZXJcbiAqIHdheSBpcyBhcHByb3ByaWF0ZS5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkY29yZVxuICogQHBhcmFtIHttb2R1bGU6eGRjb3JlLlN0ZXBGdW5jdGlvbn0gZm4gVGhlIHN0ZXAgZnVuY3Rpb24gZm9yIHRoZSB0cmFuc2R1Y2VyLlxuICogQHBhcmFtIHttb2R1bGU6eGRjb3JlLlJlZHVjZXJPYmplY3R9IHJlZHVjZXIgVGhlIG5leHQgdHJhbnNkdWNlciBvYmplY3QgaW5cbiAqICAgICB0aGUgY2hhaW4uXG4gKiBAcmV0dXJucyB7bW9kdWxlOnhkY29yZS5SZWR1Y2VyT2JqZWN0fSBBIG5ldyB0cmFuc2R1Y2VyLCBjaGFpbmluZyB0aGVcbiAqICAgICBzdXBwbGllZCBmdW5jdGlvbiB0byB0aGUgc3VwcGxpZWQgdHJhbnNkdWNlci5cbiAqL1xuZnVuY3Rpb24gdG9UcmFuc2R1Y2VyKGZuLCByZWR1Y2VyKSB7XG4gIHJldHVybiB7XG4gICAgW3AuaW5pdF0oKSB7XG4gICAgICByZXR1cm4gcmVkdWNlcltwLmluaXRdKCk7XG4gICAgfSxcblxuICAgIFtwLnN0ZXBdOiBmbixcblxuICAgIFtwLnJlc3VsdF0odmFsdWUpIHtcbiAgICAgIHJldHVybiByZWR1Y2VyW3AucmVzdWx0XSh2YWx1ZSk7XG4gICAgfVxuICB9O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSByZWR1Y2VyIGZ1bmN0aW9uIGZyb20gYSB0cmFuc2R1Y2VyIGZ1bmN0aW9uIGFuZCBhIHJlZHVjZXIuXG4gKlxuICogVGhpcyBwcm9kdWNlcyBhIGZ1bmN0aW9uIHRoYXQncyBzdWl0YWJsZSBmb3IgYmVpbmcgcGFzc2VkIGludG8gb3RoZXJcbiAqIGxpYnJhcmllcycgcmVkdWNlIGZ1bmN0aW9ucywgc3VjaCBhcyBKYXZhU2NyaXB0J3MgYEFycmF5LnByb3RvdHlwZS5yZWR1Y2VgIG9yXG4gKiBMb2Rhc2gncyBgXy5yZWR1Y2VgLiBJdCByZXF1aXJlcyBib3RoIGEgdHJhbnNkdWNlciAqYW5kKiBhIHJlZHVjZXIgYmVjYXVzZVxuICogcmVkdWN0aW9uIGZ1bmN0aW9ucyBmb3IgdGhvc2UgbGlicmFyaWVzIG11c3Qga25vdyBob3cgdG8gcmVkdWNlIGFzIHdlbGwgYXNcbiAqIGhvdyB0byB0cmFuc2Zvcm0uIFRoZSByZWR1Y2VyIGNhbiBiZSBhIHN0YW5kYXJkIHJlZHVjZXIgb2JqZWN0IGxpa2UgdGhlIG9uZXNcbiAqIHNlbnQgdG8gYHtAbGluayBtb2R1bGU6eGRjb3JlLnJlZHVjZXxyZWR1Y2V9YCwgb3IgaXQgY2FuIGJlIGEgcGxhaW4gZnVuY3Rpb25cbiAqIHRoYXQgdGFrZXMgdHdvIHBhcmFtZXRlcnMgYW5kIHJldHVybnMgdGhlIHJlc3VsdCBvZiByZWR1Y2luZyB0aGUgc2Vjb25kXG4gKiBwYXJhbWV0ZXIgaW50byB0aGUgZmlyc3QgKGkuZS4sIGEgcmVkdWNlciBmdW5jdGlvbikuXG4gKlxuICogSWYgdGhlcmUgaXMgbm8gbmVlZCBmb3IgYSB0cmFuc2Zvcm1hdGlvbiwgdGhlbiBwYXNzIGluIHRoZVxuICogYHtAbGluayBtb2R1bGU6eGR1Y2UuaWRlbnRpdHl8aWRlbnRpdHl9YCB0cmFuc2R1Y2VyLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGRjb3JlXG4gKiBAcGFyYW0ge21vZHVsZTp4ZGNvcmUuVHJhbnNkdWNlckZ1bmN0aW9ufSB0cmFuc2R1Y2VyIEEgdHJhbnNkdWNlciBmdW5jdGlvblxuICogICAgIHRoYXQgd3JhcHMgYSB0cmFuc2R1Y2VyIG9iamVjdCB3aG9zZSBgc3RlcGAgZnVuY3Rpb24gd2lsbCBiZSB1c2VkIGFzIGFcbiAqICAgICByZWR1Y2VyIGZ1bmN0aW9uLlxuICogQHBhcmFtIHsobW9kdWxlOnhkY29yZS5TdGVwRnVuY3Rpb258bW9kdWxlOnhkY29yZS5SZWR1Y2VyT2JqZWN0KX0gcmVkdWNlciBBXG4gKiAgICAgcmVkdWNlciB0aGF0IGtub3dzIGhvdyB0byByZWR1Y2UgdmFsdWVzIGludG8gYW4gb3V0cHV0IGNvbGxlY3Rpb24uIFRoaXNcbiAqICAgICBjYW4gZWl0aGVyIGJlIGEgcmVkdWNpbmcgZnVuY3Rpb24gb3IgYSByZWR1Y2VyIG9iamVjdCB3aG9zZSBgc3RlcGBcbiAqICAgICBmdW5jdGlvbiBrbm93cyBob3cgdG8gcGVyZm9ybSB0aGlzIHJlZHVjdGlvbi5cbiAqIEByZXR1cm5zIHttb2R1bGU6eGRjb3JlLlN0ZXBGdW5jdGlvbn0gQSByZWR1Y2VyIGZ1bmN0aW9uIHRoYXQgd2lsbCB0cmFuc2Zvcm1cbiAqICAgICBlbGVtZW50cyB2aWEgdGhlIHRyYW5zZHVjZXIgZnVuY3Rpb24gYW5kIHRoZW4gcmVkdWNlIHRoZW0gaW50byB3aGF0ZXZlclxuICogICAgIGtpbmQgb2YgY29sbGVjdGlvbiB0aGUgcmVkdWNlciBpbXBsZW1lbnRzLlxuICovXG5mdW5jdGlvbiB0b0Z1bmN0aW9uKHRyYW5zZHVjZXIsIHJlZHVjZXIpIHtcbiAgY29uc3QgciA9IHR5cGVvZiByZWR1Y2VyID09PSBcImZ1bmN0aW9uXCIgPyB0b1JlZHVjZXIocmVkdWNlcikgOiByZWR1Y2VyO1xuICBjb25zdCByZXN1bHQgPSB0cmFuc2R1Y2VyKHIpO1xuICByZXR1cm4gcmVzdWx0W3Auc3RlcF0uYmluZChyZXN1bHQpO1xufVxuXG4vKipcbiAqIE1hcmtzIGEgdmFsdWUgYXMgY29tcGxldGUuXG4gKlxuICogVGhpcyBpcyBkb25lIGJ5IHdyYXBwaW5nIHRoZSB2YWx1ZS4gVGhpcyBtZWFucyB0aHJlZSB0aGluZ3M6IGZpcnN0LCBhXG4gKiBjb21wbGV0ZSBvYmplY3QgbWF5IGJlIG1hcmtlZCBhcyBjb21wbGV0ZSBhZ2Fpbjsgc2Vjb25kLCBhIGNvbXBsZXRlIHZhbHVlXG4gKiBpc24ndCB1c2FibGUgd2l0aG91dCBiZWluZyB1bmNvbXBsZXRlZCBmaXJzdDsgYW5kIHRoaXJkIGFueSB0eXBlIG9mIHZhbHVlXG4gKiAoaW5jbHVkaW5nIGB1bmRlZmluZWRgKSBtYXkgYmUgbWFya2VkIGFzIGNvbXBsZXRlLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2UtdG9vbHNcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGJlIGNvbXBsZXRlZC5cbiAqIEByZXR1cm4geyp9IEEgY29tcGxldGVkIHZlcnNpb24gb2YgdGhlIHByb3ZpZGVkIHZhbHVlLiBUaGlzIHJlZHVjdGlvbiBpc1xuICogICAgIGFjaGlldmVkIGJ5IHdyYXBwaW5nIHRoZSB2YWx1ZSBpbiBhIG1hcmtlciBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIGNvbXBsZXRlKHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgW3AuY29tcGxldGVkXTogdHJ1ZSxcbiAgICBbcC52YWx1ZV06IHZhbHVlXG4gIH07XG59XG5cbi8qKlxuICogUmVtb3ZlcyB0aGUgY29tcGxldGUgc3RhdHVzIGZyb20gYSBjb21wbGV0ZWQgdmFsdWUuXG4gKlxuICogVGhpcyBmdW5jdGlvbiBpcyBpbnRlbmRlZCB0byBiZSB1c2VkIHdoZW4gaXQncyBjZXJ0YWluIHRoYXQgYSB2YWx1ZSBpc1xuICogYWxyZWFkeSBtYXJrZWQgYXMgY29tcGxldGUuIElmIGl0IGlzIG5vdCwgYHVuZGVmaW5lZGAgd2lsbCBiZSByZXR1cm5lZFxuICogaW5zdGVhZCBvZiB0aGUgdmFsdWUuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZS10b29sc1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gYmUgdW5jb21wbGV0ZWQuXG4gKiBAcmV0dXJuIHsqfSBBbiB1bmNvbXBsZXRlZCB2ZXJzaW9uIG9mIHRoZSBwcm92aWRlZCB2YWx1ZS4gSWYgdGhlIHZhbHVlIHdhc1xuICogICAgIG5vdCBjb21wbGV0ZSBpbiB0aGUgZmlyc3QgcGxhY2UsIGB1bmRlZmluZWRgIHdpbGwgYmUgcmV0dXJuZWQgaW5zdGVhZC5cbiAqL1xuZnVuY3Rpb24gdW5jb21wbGV0ZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWU/LltwLnZhbHVlXTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgYSB2YWx1ZSBpcyBtYXJrZWQgYXMgY29tcGxldGUuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZS10b29sc1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gdGVzdCBmb3IgaXRzIGNvbXBsZXRlIHN0YXR1cy5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IEVpdGhlciBgdHJ1ZWAgaWYgdGhlIHZhbHVlIGlzIGNvbXBsZXRlLCBvciBgZmFsc2VgIGlmIGl0IGlzXG4gKiAgICAgbm90LlxuICovXG5mdW5jdGlvbiBpc0NvbXBsZXRlZCh2YWx1ZSkge1xuICByZXR1cm4gISF2YWx1ZT8uW3AuY29tcGxldGVkXTtcbn1cblxuLyoqXG4gKiBNYWtlcyBzdXJlIHRoYXQgYSB2YWx1ZSBpcyBtYXJrZWQgYXMgY29tcGxldGU7IGlmIGl0IGlzIG5vdCwgaXQgd2lsbCBiZVxuICogbWFya2VkIGFzIGNvbXBsZXRlLlxuICpcbiAqIFRoaXMgZGlmZmVycyBmcm9tIHtAbGluayBtb2R1bGU6eGR1Y2UtdG9vbHMuY29tcGxldGV8Y29tcGxldGV9IGluIHRoYXQgaWYgdGhlIHZhbHVlXG4gKiBpcyBhbHJlYWR5IGNvbXBsZXRlLCB0aGlzIGZ1bmN0aW9uIHdvbid0IGNvbXBsZXRlIGl0IGFnYWluLiBUaGVyZWZvcmUgdGh1c1xuICogZnVuY3Rpb24gY2FuJ3QgYmUgdXNlZCB0byBtYWtlIGEgdmFsdWUgY29tcGxldGUgbXVsdGlwbGUgdGltZXMuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZS10b29sc1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gYmUgY29tcGxldGVkLlxuICogQHJldHVybiB7Kn0gSWYgdGhlIHZhbHVlIGlzIGFscmVhZHkgY29tcGxldGUsIHRoZW4gdGhlIHZhbHVlIGlzIHNpbXBseVxuICogICAgIHJldHVybmVkLiBPdGhlcndpc2UsIGEgY29tcGxldGVkIHZlcnNpb24gb2YgdGhlIHZhbHVlIGlzIHJldHVybmVkLlxuICovXG5mdW5jdGlvbiBlbnN1cmVDb21wbGV0ZWQodmFsdWUpIHtcbiAgcmV0dXJuIGlzQ29tcGxldGVkKHZhbHVlKSA/IHZhbHVlIDogY29tcGxldGUodmFsdWUpO1xufVxuXG4vKipcbiAqIFJlbW92ZXMgdGhlIGNvbXBsZXRlIHN0YXR1cyBmcm9tIGEgdmFsdWUsIGFzIGxvbmcgYXMgaXQgYWN0dWFsbHkgaXMgY29tcGxldGUuXG4gKlxuICogVGhpcyBkb2VzIGEgY2hlY2sgdG8gbWFrZSBzdXJlIHRoZSB2YWx1ZSBwYXNzZWQgaW4gYWN0dWFsbHkgaXMgY29tcGxldGUuIElmXG4gKiBpdCBpc24ndCwgdGhlIHZhbHVlIGl0c2VsZiBpcyByZXR1cm5lZC4gSXQncyBtZWFudCB0byBiZSB1c2VkIHdoZW4gdGhlXG4gKiBjb21wbGV0ZWQgc3RhdHVzIGlzIHVuY2VydGFpbi5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlLXRvb2xzXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSBjb21wbGV0ZSB2YWx1ZSB0byBiZSB1bmNvbXBsZXRlZC5cbiAqIEByZXR1cm4geyp9IElmIHRoZSB2YWx1ZSBpcyBhbHJlYWR5IHVuY29tcGxldGVkLCB0aGUgdmFsdWUgaXMgc2ltcGx5XG4gKiAgICAgcmV0dXJuZWQuIE90aGVyd2lzZSBhbiB1bmNvbXBsZXRlZCB2ZXJzaW9uIG9mIHRoZSB2YWx1ZSBpcyByZXR1cm5lZC5cbiAqL1xuZnVuY3Rpb24gZW5zdXJlVW5jb21wbGV0ZWQodmFsdWUpIHtcbiAgcmV0dXJuIGlzQ29tcGxldGVkKHZhbHVlKSA/IHVuY29tcGxldGUodmFsdWUpIDogdmFsdWU7XG59XG5cbi8qKlxuICogUmVkdWNlcyB0aGUgZWxlbWVudHMgb2YgdGhlIGlucHV0IGNvbGxlY3Rpb24gdGhyb3VnaCBhIHJlZHVjZXIgaW50byBhbiBvdXRwdXRcbiAqIGNvbGxlY3Rpb24uXG4gKlxuICogVGhpcyBpcyB0aGUgbG93ZXN0LWxldmVsIG9mIHRoZSB0cmFuc2R1Y3Rpb24gZnVuY3Rpb25zLiBJbiBmYWN0LCB0aGlzIG9uZSBpc1xuICogc28gbG93LWxldmVsIHRoYXQgaXQgZG9lc24ndCBoYXZlIGEgbG90IG9mIHVzZSBpbiBub3JtYWwgb3BlcmF0aW9uLiBJdCdzIG1vcmVcbiAqIHVzZWZ1bCBmb3Igd3JpdGluZyB5b3VyIG93biB0cmFuc2Zvcm1hdGlvbiBmdW5jdGlvbnMuXG4gKlxuICogYHJlZHVjZWAgZG9lc24ndCBhc3N1bWUgdGhhdCB0aGVyZSdzIGV2ZW4gYSB0cmFuc2Zvcm1hdGlvbi4gSXQgcmVxdWlyZXMgYW5cbiAqIGluaXRpYWwgY29sbGVjdGlvbiBhbmQgYSByZWR1Y2VyIG9iamVjdCB0aGF0IGlzIG1hdGNoZWQgdG8gdGhhdCBpbml0aWFsXG4gKiBjb2xsZWN0aW9uLiBUaGUgcmVkdWNlciBvYmplY3QgbXVzdCBpbXBsZW1lbnQgdGhlIGBzdGVwYCBhbmQgYHJlc3VsdGBcbiAqIHByb3RvY29scywgd2hpY2ggaW5zdHJ1Y3QgYHJlZHVjZWAgb24gaG93IHRvIGJ1aWxkIHVwIHRoZSBjb2xsZWN0aW9uLiBUaGVcbiAqIHJlZHVjZXIgbWF5IGltcGxlbWVudCBhIHRyYW5zZm9ybWF0aW9uIGFzIHdlbGwsIGJ1dCBhbGwgdGhhdCdzIGltcG9ydGFudCBoZXJlXG4gKiBpcyB0aGF0IGl0IGNhbiBkbyB0aGUgcmVkdWN0aW9uLlxuICpcbiAqIFRoZSBpbnB1dCBjb2xsZWN0aW9uIG5lZWQgb25seSBpbXBsZW1lbnQgYGl0ZXJhYmxlYC4gSXQgaXMgbm90IG5lY2Vzc2FyeSBmb3JcbiAqIHRoZSBpbnB1dCBhbmQgb3V0cHV0IGNvbGxlY3Rpb25zIHRvIGJlIG9mIHRoZSBzYW1lIHR5cGU7IGFzIGxvbmcgYXMgdGhlIGlucHV0XG4gKiBpbXBsZW1lbnRzIGBpdGVyYWJsZWAgYW5kIHRoZSByZWR1Y2VyIGltcGxlbWVudHMgYHN0ZXBgIGFuZCBgcmVzdWx0YFxuICogYXBwcm9wcmlhdGUgdG8gdGhlIHR5cGUgb2YgdGhlIGBpbml0YCBjb2xsZWN0aW9uLCB0aGVuIGFueSB0cmFuc2xhdGlvblxuICogYmV0d2VlbiBjb2xsZWN0aW9uIHR5cGVzIGNhbiBvY2N1ci5cbiAqXG4gKiBUaGUgbm9ybWFsIGNvdXJzZSBvZiBvcGVyYXRpb24gd2lsbCBiZSB0byBjYWxsXG4gKiB7QGxpbmsgbW9kdWxlOnhkdWNlLXRvb2xzLnRyYW5zZHVjZXx0cmFuc2R1Y2V9IGluc3RlYWQsIGFzIHRoYXQgZnVuY3Rpb24gbWFrZXMgaXRcbiAqIGVhc3kgdG8gY29tYmluZSB0cmFuc2Zvcm1hdGlvbnMgd2l0aCByZWR1Y3Rpb25zIGFuZCBjYW4gb3B0aW9uYWxseSBmaWd1cmUgb3V0XG4gKiB0aGUgaW5pdGlhbCBjb2xsZWN0aW9uIGl0c2VsZi5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlLXRvb2xzXG4gKiBAcGFyYW0geyp9IGNvbGxlY3Rpb24gVGhlIGlucHV0IGNvbGxlY3Rpb24uIFRoZSBvbmx5IHJlcXVpcmVtZW50IG9mIHRoaXNcbiAqICAgICBjb2xsZWN0aW9uIGlzIHRoYXQgaXQgaW1wbGVtZW50IHRoZSBgaXRlcmFibGVgIHByb3RvY29sLiBTcGVjaWFsIHN1cHBvcnRcbiAqICAgICBpcyBwcm92aWRlZCBieSB0aGUgbGlicmFyeSBmb3Igb2JqZWN0cywgc28gdGhleSBjYW4gYmUgdXNlZCBhcyB3ZWxsLlxuICogQHBhcmFtIHttb2R1bGU6eGR1Y2UtdG9vbHMuUmVkdWNlcn0gcmVkdWNlciBBbiBvYmplY3QgdGhhdCBpbXBsZW1lbnRzIHRoZSBgc3RlcGAgYW5kXG4gKiAgICAgYHJlc3VsdGAgcHJvdG9jb2xzLiBUaGlzIG9iamVjdCBtdXN0IGtub3cgaG93IHRvIHByb2R1Y2UgYW4gb3V0cHV0XG4gKiAgICAgY29sbGVjdGlvbiB0aHJvdWdoIHRob3NlIHByb3RvY29sIGZ1bmN0aW9ucy5cbiAqIEBwYXJhbSB7Kn0gaW5pdCBhIGNvbGxlY3Rpb24gb2YgdGhlIHNhbWUgdHlwZSBhcyB0aGUgb3V0cHV0IGNvbGxlY3Rpb24uIEl0XG4gKiAgICAgbmVlZCBub3QgYmUgZW1wdHk7IGlmIGl0IGlzIG5vdCwgdGhlIGV4aXN0aW5nIGVsZW1lbnRzIGFyZSByZXRhaW5lZCBhc1xuICogICAgIHRoZSBpbnB1dCBjb2xsZWN0aW9uIGlzIHJlZHVjZWQgaW50byBpdC5cbiAqIEByZXR1cm4geyp9IEEgbmV3IGNvbGxlY3Rpb24sIGNvbnNpc3Rpbmcgb2YgdGhlIGBpbml0YCBjb2xsZWN0aW9uIHdpdGggYWxsIG9mXG4gKiAgICAgdGhlIGVsZW1lbnRzIG9mIHRoZSBgY29sbGVjdGlvbmAgY29sbGVjdGlvbiByZWR1Y2VkIGludG8gaXQuXG4gKi9cbmZ1bmN0aW9uIHJlZHVjZShjb2xsZWN0aW9uLCByZWR1Y2VyLCBpbml0KSB7XG4gIGlmIChjb2xsZWN0aW9uID09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IGl0ZXIgPSBpdGVyYXRvcihjb2xsZWN0aW9uKTtcbiAgaWYgKCFpdGVyKSB7XG4gICAgdGhyb3cgRXJyb3IoYENhbm5vdCByZWR1Y2UgYW4gaW5zdGFuY2Ugb2YgJHtjb2xsZWN0aW9uLmNvbnN0cnVjdG9yLm5hbWV9YCk7XG4gIH1cblxuICBsZXQgYWNjID0gaW5pdDtcbiAgbGV0IHN0ZXAgPSBpdGVyLm5leHQoKTtcblxuICB3aGlsZSAoIXN0ZXAuZG9uZSkge1xuICAgIGFjYyA9IHJlZHVjZXJbcC5zdGVwXShhY2MsIHN0ZXAudmFsdWUpO1xuICAgIGlmIChpc0NvbXBsZXRlZChhY2MpKSB7XG4gICAgICBhY2MgPSB1bmNvbXBsZXRlKGFjYyk7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgc3RlcCA9IGl0ZXIubmV4dCgpO1xuICB9XG5cbiAgcmV0dXJuIHJlZHVjZXJbcC5yZXN1bHRdKGFjYyk7XG59XG5cbmV4cG9ydCB7XG4gIGluaXQsXG4gIHN0ZXAsXG4gIHJlc3VsdCxcbiAgdG9SZWR1Y2VyLFxuICBBUlJBWV9SRURVQ0VSLFxuICBPQkpFQ1RfUkVEVUNFUixcbiAgU1RSSU5HX1JFRFVDRVIsXG4gIHRvVHJhbnNkdWNlcixcbiAgdG9GdW5jdGlvbixcbiAgY29tcGxldGUsXG4gIHVuY29tcGxldGUsXG4gIGlzQ29tcGxldGVkLFxuICBlbnN1cmVDb21wbGV0ZWQsXG4gIGVuc3VyZVVuY29tcGxldGVkLFxuICByZWR1Y2Vcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuLyoqXG4gKiBBIGJ1bmNoIG9mIHV0aWxpdHkgZnVuY3Rpb25zLiBUaGVzZSBhcmUgYWxsIHVzZWQgYnkgdGhlIGxpYnJhcnkgaXRzZWxmIGluXG4gKiBwbGFjZXMsIGJ1dCBtYW55IG9mIHRoZW0gYXJlIHN1aXRhYmxlIGZvciBnZW5lcmFsIHVzZSBhcyB3ZWxsLlxuICogXlxuICogQG1vZHVsZSBjb3JlL3V0aWxzXG4gKiBAcHJpdmF0ZVxuICovXG5cbi8qKlxuICogYE9iamVjdGAncyBgdG9TdHJpbmdgIGlzIGV4cGxpY2l0bHkgdXNlZCB0aHJvdWdob3V0IGJlY2F1c2UgaXQgY291bGQgYmVcbiAqIHJlZGVmaW5lZCBpbiBhbnkgc3VidHlwZSBvZiBgT2JqZWN0YC5cbiAqXG4gKiBAZnVuY3Rpb24gdG9TdHJpbmdcbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgYSB2YWx1ZSBpcyBhIGZ1bmN0aW9uLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2UtdG9vbHNcbiAqIEBwYXJhbSB7Kn0geCBUaGUgdmFsdWUgYmVpbmcgdGVzdGVkIHRvIHNlZSBpZiBpdCBpcyBhIGZ1bmN0aW9uLlxuICogQHJldHVybiB7Ym9vbGVhbn0gRWl0aGVyIGB0cnVlYCBpZiB0aGUgdGVzdCB2YWx1ZSBpcyBhIGZ1bmN0aW9uIG9yIGBmYWxzZWAgaWZcbiAqICAgICBpdCBpcyBub3QuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHgpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoeCkgPT09IFwiW29iamVjdCBGdW5jdGlvbl1cIjtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgYSB2YWx1ZSBpcyBhIGdlbmVyYXRvciBmdW5jdGlvbi5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlLXRvb2xzXG4gKiBAcGFyYW0geyp9IHggVGhlIHZhbHVlIGJlaW5nIHRlc3RlZCB0byBzZWUgaWYgaXQgaXMgYSBnZW5lcmF0b3IgZnVuY3Rpb24uXG4gKiBAcmV0dXJuIHtib29sZWFufSBFaXRoZXIgYHRydWVgIGlmIHRoZSB0ZXN0IHZhbHVlIGlzIGEgZ2VuZXJhdG9yIGZ1bmN0aW9uIG9yXG4gKiAgICAgYGZhbHNlYCBpZiBpdCBpcyBub3QuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBpc0dlbmVyYXRvckZ1bmN0aW9uKHgpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoeCkgPT09IFwiW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl1cIjtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgYSB2YWx1ZSBpcyBhIHBsYWluIG9iamVjdC5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgYGZhbHNlYCBpZiB0aGUgdmFsdWUgaXMgYW55IG90aGVyIHNvcnQgb2YgYnVpbHQtaW5cbiAqIG9iamVjdCAoc3VjaCBhcyBhbiBhcnJheSBvciBhIHN0cmluZykuIEl0IGFsc28gcmV0dXJucyBgZmFsc2VgIGZvciBhbnkgb2JqZWN0XG4gKiB0aGF0IGlzIGNyZWF0ZWQgYnkgYSBjb25zdHJ1Y3RvciB0aGF0IGlzIG5vdCBgT2JqZWN0YCdzIGNvbnN0cnVjdG9yLCBtZWFuaW5nXG4gKiB0aGF0IFwiaW5zdGFuY2VzXCIgb2YgY3VzdG9tIFwiY2xhc3Nlc1wiIHdpbGwgcmV0dXJuIGBmYWxzZWAuIFRoZXJlZm9yZSBpdCdzIG9ubHlcbiAqIGdvaW5nIHRvIHJldHVybiBgdHJ1ZWAgZm9yIGxpdGVyYWwgb2JqZWN0cyBvciB0aG9zZSBjcmVhdGVkIHdpdGhcbiAqIGBPYmplY3QuY3JlYXRlKClgLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2UtdG9vbHNcbiAqIEBwYXJhbSB7Kn0geCBUaGUgdmFsdWUgYmVpbmcgdGVzdGVkIHRvIHNlZSBpZiBpdCBpcyBhIHBsYWluIG9iamVjdC5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IEVpdGhlciBgdHJ1ZWAgaWYgdGhlIHRlc3QgdmFsdWUgaXMgYSBwbGFpbiBvYmplY3Qgb3JcbiAqICAgICBgZmFsc2VgIGlmIGl0IGlzIG5vdC5cbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QoeCkge1xuICAvLyBUaGlzIGNoZWNrIGV4Y2x1ZGVzIGJ1aWx0LWluIG5vbi1PYmplY3Qgb2JqZWN0cyAoc3VjaCBhcyBBcnJheSBhbmQgU3RyaW5nKS5cbiAgLy8gSXQgYWxzbyBleGNsdWRlcyBvYmplY3RzIGNyZWF0ZWQgZnJvbSBFUzIwMTUgY2xhc3NlcywgYnV0IGl0IGRvZXMgbm90XG4gIC8vIGV4Y2x1ZGUgb2JqZWN0cyBjcmVhdGVkIHdpdGggYG5ld2Agb24gY29uc3RydWN0b3IgZnVuY3Rpb25zICh0aGF0IGhhcHBlbnNcbiAgLy8gYmVsb3cpLlxuICBpZiAodG9TdHJpbmcuY2FsbCh4KSAhPT0gXCJbb2JqZWN0IE9iamVjdF1cIikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIFByb3RvdHlwZS1sZXNzIG9iamVjdHMgKGNyZWF0ZWQgd2l0aCBgT2JqZWN0LmNyZWF0ZShudWxsKSlgIHBhc3NcbiAgY29uc3QgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoeCk7XG4gIGlmIChwcm90byA9PT0gbnVsbCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLy8gQ2hlY2sgdG8gc2VlIHdoZXRoZXIgdGhlIGNvbnN0cnVjdG9yIG9mIHRoZSB0ZXN0ZWQgb2JqZWN0IGlzIHRoZSBPYmplY3RcbiAgLy8gY29uc3RydWN0b3IuIFRoaXMgaXMgdGhlIG9ubHkgY29uc3RydWN0b3IgdGhhdCBwcm9kdWNlcyBhIFwicGxhaW5cIiBvYmplY3QuXG4gIGNvbnN0IGN0b3IgPVxuICAgIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwcm90bywgXCJjb25zdHJ1Y3RvclwiKSAmJlxuICAgIHByb3RvLmNvbnN0cnVjdG9yO1xuICByZXR1cm4gdHlwZW9mIGN0b3IgPT09IFwiZnVuY3Rpb25cIiAmJiBjdG9yID09PSBPYmplY3Q7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGEgdmFsdWUgaXMgYSBudW1iZXIuXG4gKlxuICogVGhpcyBmdW5jdGlvbiB3aWxsIHJldHVybiBgdHJ1ZWAgZm9yIGFueSBudW1iZXIgbGl0ZXJhbCBvciBpbnN0YW5jZSBvZlxuICogYE51bWJlcmAgZXhjZXB0IGZvciBgSW5maW5pdHlgIG9yIGBOYU5gLiBJdCB3aWxsIHJldHVybiBgZmFsc2VgIGZvciBzdHJpbmdzXG4gKiB0aGF0IGhhcHBlbiB0byBhbHNvIGJlIG51bWJlcnM7IHRoZSB2YWx1ZSBtdXN0IGJlIGFuIGFjdHVhbCBgTnVtYmVyYCBpbnN0YW5jZVxuICogb3IgbnVtYmVyIGxpdGVyYWwgdG8gcmV0dXJuIGB0cnVlYC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlLXRvb2xzXG4gKiBAcGFyYW0geyp9IHggVGhlIHZhbHVlIGJlaW5nIHRlc3RlZCB0byBzZWUgaWYgaXQgaXMgYSBudW1iZXIuXG4gKiBAcmV0dXJuIHtib29sZWFufSBFaXRoZXIgYHRydWVgIGlmIHRoZSB0ZXN0IHZhbHVlIGlzIGEgZmluaXRlIG51bWJlciAobm90XG4gKiAgICAgaW5jbHVkaW5nIHN0cmluZyByZXByZXNlbnRhdGlvbnMgb2YgbnVtYmVycykgb3IgYGZhbHNlYCBpZiBpdCBpcyBub3QuXG4gKi9cbmZ1bmN0aW9uIGlzTnVtYmVyKHgpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoeCkgPT09IFwiW29iamVjdCBOdW1iZXJdXCIgJiYgaXNGaW5pdGUoeCk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGEgdmFsdWUgaXMgYSBzdHJpbmcuXG4gKlxuICogTGl0ZXJhbCBzdHJpbmdzIHdpbGwgcmV0dXJuIGB0cnVlYCwgYXMgd2lsbCBpbnN0YW5jZXMgb2YgdGhlIGBTdHJpbmdgIG9iamVjdC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlLXRvb2xzXG4gKiBAcGFyYW0geyp9IHggVGhlIHZhbHVlIGJlaW5nIHRlc3RlZCB0byBzZWUgaWYgaXQgaXMgYSBzdHJpbmcuXG4gKiBAcmV0dXJuIHtib29sZWFufSBFaXRoZXIgYHRydWVgIGlmIHRoZSB0ZXN0IHZhbHVlIGlzIGEgc3RyaW5nIG9yIGBmYWxzZWAgaWZcbiAqICAgIGl0IGlzIG5vdC5cbiAqL1xuZnVuY3Rpb24gaXNTdHJpbmcoeCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh4KSA9PT0gXCJbb2JqZWN0IFN0cmluZ11cIjtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgYSB2YWx1ZSBpcyBhbiBhcnJheS5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIG1lcmVseSBkZWxlZ2F0ZXMgdG8gYEFycmF5LmlzQXJyYXlgLiBJdCBpcyBwcm92aWRlZCBmb3JcbiAqIGNvbnNpc3RlbmN5IGluIGNhbGxpbmcgc3R5bGUgb25seS5cbiAqXG4gKiBAZnVuY3Rpb24gaXNBcnJheVxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZS10b29sc1xuICogQHBhcmFtIHsqfSB4IFRoZSB2YWx1ZSBiZWluZyB0ZXN0ZWQgdG8gc2VlIGlmIGl0IGlzIGFuIGFycmF5LlxuICogQHJldHVybiB7Ym9vbGVhbn0gRWl0aGVyIGB0cnVlYCBpZiB0aGUgdGVzdCB2YWx1ZSBpcyBhbiBhcnJheSBvciBgZmFsc2VgIGlmXG4gKiAgICAgaXQgaXMgbm90LlxuICovXG5jb25zdCBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxuZXhwb3J0IHtcbiAgaXNGdW5jdGlvbixcbiAgaXNHZW5lcmF0b3JGdW5jdGlvbixcbiAgaXNPYmplY3QsXG4gIGlzTnVtYmVyLFxuICBpc1N0cmluZyxcbiAgaXNBcnJheVxufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG4vKipcbiAqIEBtb2R1bGUgeGR1Y2VcbiAqL1xuXG5leHBvcnQgeyBrdiwga2V5LCB2YWx1ZSwgY29tcGxlbWVudCB9IGZyb20gXCJtb2R1bGVzL3V0aWxzXCI7XG5leHBvcnQge1xuICB0cmFuc2R1Y2UsXG4gIHNlcXVlbmNlLFxuICBpbnRvLFxuICBhc0FycmF5LFxuICBhc09iamVjdCxcbiAgYXNTdHJpbmcsXG4gIGFzSXRlcmF0b3IsXG4gIGNvbXBvc2UsXG4gIHRvUmVkdWNlcixcbiAgdG9GdW5jdGlvblxufSBmcm9tIFwibW9kdWxlcy90cmFuc2R1Y3Rpb25cIjtcbmV4cG9ydCB7IGlkZW50aXR5LCBmbGF0dGVuLCByZXBlYXQgfSBmcm9tIFwibW9kdWxlcy9iYXNpY1wiO1xuZXhwb3J0IHsgY2h1bmssIGNodW5rQnkgfSBmcm9tIFwibW9kdWxlcy9jaHVua1wiO1xuZXhwb3J0IHsgZGlzdGluY3QsIGRpc3RpbmN0QnksIGRpc3RpbmN0V2l0aCB9IGZyb20gXCJtb2R1bGVzL2Rpc3RpbmN0XCI7XG5leHBvcnQgeyBkcm9wLCBkcm9wV2hpbGUgfSBmcm9tIFwibW9kdWxlcy9kcm9wXCI7XG5leHBvcnQgeyBmaWx0ZXIsIHJlamVjdCB9IGZyb20gXCJtb2R1bGVzL2ZpbHRlclwiO1xuZXhwb3J0IHsgbWFwLCBmbGF0TWFwIH0gZnJvbSBcIm1vZHVsZXMvbWFwXCI7XG5leHBvcnQgeyB0YWtlLCB0YWtlV2hpbGUsIHRha2VOdGggfSBmcm9tIFwibW9kdWxlcy90YWtlXCI7XG5leHBvcnQgeyB1bmlxdWUsIHVuaXF1ZUJ5LCB1bmlxdWVXaXRoIH0gZnJvbSBcIm1vZHVsZXMvdW5pcXVlXCI7XG5cbi8qKlxuICpcbiAqXG4gKiBAY2FsbGJhY2tcbiAqL1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG5cbmltcG9ydCB7XG4gIHByb3RvY29scyBhcyBwLFxuICBpc0NvbXBsZXRlZCxcbiAgY29tcGxldGUsXG4gIGlzSXRlcmFibGUsXG4gIHJlZHVjZSxcbiAgdG9UcmFuc2R1Y2VyXG59IGZyb20gXCJAY2hhbmtvL3hkY29yZVwiO1xuXG5pbXBvcnQgeyBwYXJzZU51bWJlckFyZ3MgfSBmcm9tIFwibW9kdWxlcy91dGlsc1wiO1xuaW1wb3J0IHsgc2VxdWVuY2UgfSBmcm9tIFwibW9kdWxlcy90cmFuc2R1Y3Rpb25cIjtcblxuLyoqXG4gKiBSZXR1cm5zIGV4YWN0bHkgdGhlIHNhbWUgY29sbGVjdGlvbiBzZW50IHRvIGl0LlxuICpcbiAqIFRoaXMgaXMgZ2VuZXJhbGx5IGEgZnVuY3Rpb24gdXNlZCB3aGVuIGEgdHJhbnNkdWNlciBmdW5jdGlvbiBpcyByZXF1aXJlZCBidXRcbiAqIHRoZXJlIGlzIG5vIGRlc2lyZSB0byBkbyBhbiBhY3R1YWwgdHJhbnNmb3JtYXRpb24uIFRoZSBcInRyYW5zZm9ybWF0aW9uXCJcbiAqIGltcGxlbWVudGVkIGhlcmUgaXMgdG8gcGFzcyBlYWNoIGVsZW1lbnQgdGhyb3VnaCBleGFjdGx5IGFzIGl0IGlzLlxuICpcbiAqIElmIG5vIGNvbGxlY3Rpb24gaXMgcHJvdmlkZWQsIGEgZnVuY3Rpb24gaXMgcmV0dXJuZWQgdGhhdCBjYW4gYmUgcGFzc2VkIHRvXG4gKiBge0BsaW5rIG1vZHVsZTp4ZHVjZS5zZXF1ZW5jZXxzZXF1ZW5jZX1gLCBldCBhbC5cbiAqXG4gKiBgYGBcbiAqIGNvbnN0IHJlc3VsdCA9IGlkZW50aXR5KFsxLCAyLCAzLCA0LCA1XSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQpOyAgIC8vIC0+IFsxLCAyLCAzLCA0LCA1XVxuICogYGBgXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHBhcmFtIHttb2R1bGU6eGR1Y2UuQ29sbGVjdGlvbn0gW2NvbGxlY3Rpb25dIEFuIG9wdGlvbmFsIGlucHV0IGNvbGxlY3Rpb25cbiAqICAgICB0aGF0IGlzIHRvIGJlIHRyYW5zZHVjZWQuXG4gKiBAcmV0dXJuIHsobW9kdWxlOnhkdWNlLkNvbGxlY3Rpb258bW9kdWxlOnhkdWNlLlRyYW5zZHVjZXJGdW5jdGlvbil9IElmIGFcbiAqICAgICBjb2xsZWN0aW9uIGlzIHN1cHBsaWVkLCB0aGVuIHRoZSBmdW5jdGlvbiByZXR1cm5zIGEgbmV3IGNvbGxlY3Rpb24gb2YgdGhlXG4gKiAgICAgc2FtZSB0eXBlIHdpdGggYWxsIG9mIHRoZSBlbGVtZW50cyBvZiB0aGUgaW5wdXQgY29sbGVjdGlvbiB1bnRvdWNoZWQuIElmXG4gKiAgICAgbm8gY29sbGVjdGlvbiBpcyBzdXBwbGllZCwgYSB0cmFuc2R1Y2VyIGZ1bmN0aW9uLCBzdWl0YWJsZSBmb3IgcGFzc2luZyB0b1xuICogICAgIGB7QGxpbmsgbW9kdWxlOnhkdWNlLnNlcXVlbmNlfHNlcXVlbmNlfWAsXG4gKiAgICAgYHtAbGluayBtb2R1bGU6eGR1Y2UuaW50b3xpbnRvfWAsIGV0Yy4gaXMgcmV0dXJuZWQuXG4gKi9cbmZ1bmN0aW9uIGlkZW50aXR5KGNvbGxlY3Rpb24pIHtcbiAgcmV0dXJuIGNvbGxlY3Rpb25cbiAgICA/IHNlcXVlbmNlKGNvbGxlY3Rpb24sIGlkZW50aXR5KCkpXG4gICAgOiB4Zm9ybSA9PiB0b1RyYW5zZHVjZXIoKGFjYywgdmFsdWUpID0+IHhmb3JtW3Auc3RlcF0oYWNjLCB2YWx1ZSksIHhmb3JtKTtcbn1cblxuLyoqXG4gKiBGbGF0dGVucyBhIGNvbGxlY3Rpb24gYnkgbWVyZ2luZyBlbGVtZW50cyBpbiBhbnkgc3ViLWNvbGxlY3Rpb24gaW50byB0aGUgbWFpblxuICogY29sbGVjdGlvbi5cbiAqXG4gKiBFbGVtZW50cyBvZiB0aGUgbWFpbiBjb2xsZWN0aW9uIHRoYXQgYXJlIG5vdCBjb2xsZWN0aW9ucyB0aGVtc2VsdmVzIGFyZSBub3RcbiAqIGNoYW5nZWQuIEl0J3MgZmluZSB0byBoYXZlIGEgY29tYmluYXRpb24gb2YgdGhlIHR3bywgc29tZSBlbGVtZW50cyB0aGF0IGFyZVxuICogY29sbGVjdGlvbnMgYW5kIHNvbWUgdGhhdCBhcmUgbm90LiBJZiBhbiBlbGVtZW50IGlzIGEgY29sbGVjdGlvbiB0aGF0XG4gKiBjb250YWlucyBvdGhlciBjb2xsZWN0aW9ucywgdGhvc2UgY29sbGVjdGlvbnMgd2lsbCAqbm90KiBiZSBmbGF0dGVuZWQ7IHRoZVxuICogZmxhdHRlbmluZyBvbmx5IGhhcHBlbnMgdG8gb25lIGxldmVsLlxuICpcbiAqIFNpbmNlIHRoZXJlIGFyZW4ndCBzdWItY29sbGVjdGlvbnMgaW4gb2JqZWN0cywgc3RyaW5ncywgb3IgaXRlcmF0b3JzLFxuICogYGZsYXR0ZW5gIGRvZXNuJ3QgbWFrZSBzZW5zZSB3aXRoIHRob3NlIHR5cGVzIG9mIGNvbGxlY3Rpb25zLlxuICpcbiAqIElmIG5vIGNvbGxlY3Rpb24gaXMgcHJvdmlkZWQsIGEgZnVuY3Rpb24gaXMgcmV0dXJuZWQgdGhhdCBjYW4gYmUgcGFzc2VkIHRvXG4gKiBge0BsaW5rIG1vZHVsZTp4ZHVjZS5zZXF1ZW5jZXxzZXF1ZW5jZX1gLCBldCBhbC5cbiAqXG4gKiBgYGBcbiAqIGNvbnN0IHJlc3VsdCA9IGZsYXR0ZW4oW1sxLCAyXSwgWzMsIDQsIDVdLCA2LCBbN11dKTtcbiAqIGNvbnNvbGUubG9nKHJldXNsdCk7ICAgLy8gLT4gWzEsIDIsIDMsIDQsIDUsIDYsIDddXG4gKlxuICogY29uc3QgcmVzdWx0ID0gZmxhdHRlbihbWzEsIDJdLCBbMywgWzQsIDVdXSwgNiwgWzddXSk7XG4gKiBjb25zb2xlLmxvZyhyZXVzbHQpOyAgIC8vIC0+IFsxLCAyLCAzLCBbNCwgNV0sIDYsIDddXG4gKiBgYGBcbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlLnRyYW5zZHVjZXJzXG4gKiBAcGFyYW0ge21vZHVsZTp4ZHVjZS5Db2xsZWN0aW9ufSBbY29sbGVjdGlvbl0gQW4gb3B0aW9uYWwgaW5wdXQgY29sbGVjdGlvblxuICogICAgIHRoYXQgaXMgdG8gYmUgdHJhbnNkdWNlZC5cbiAqIEByZXR1cm4geyhtb2R1bGU6eGR1Y2UuQ29sbGVjdGlvbnxtb2R1bGU6eGR1Y2UuVHJhbnNkdWNlckZ1bmN0aW9uKX0gSWYgYVxuICogICAgIGNvbGxlY3Rpb24gaXMgc3VwcGxpZWQsIHRoZW4gdGhlIGZ1bmN0aW9uIHJldHVybnMgYSBuZXcgY29sbGVjdGlvbiBvZiB0aGVcbiAqICAgICBzYW1lIHR5cGUgd2l0aCBhbGwgb2YgdGhlIGVsZW1lbnRzIG9mIHRoZSBpbnB1dCBjb2xsZWN0aW9uIGZsYXR0ZW5lZC4gSWZcbiAqICAgICBubyBjb2xsZWN0aW9uIGlzIHN1cHBsaWVkLCBhIHRyYW5zZHVjZXIgZnVuY3Rpb24sIHN1aXRhYmxlIGZvciBwYXNzaW5nIHRvXG4gKiAgICAgYHtAbGluayBtb2R1bGU6eGR1Y2Uuc2VxdWVuY2V8c2VxdWVuY2V9YCxcbiAqICAgICBge0BsaW5rIG1vZHVsZTp4ZHVjZS5pbnRvfGludG99YCwgZXRjLiBpcyByZXR1cm5lZC5cbiAqL1xuZnVuY3Rpb24gZmxhdHRlbihjb2xsZWN0aW9uKSB7XG4gIHJldHVybiBjb2xsZWN0aW9uXG4gICAgPyBzZXF1ZW5jZShjb2xsZWN0aW9uLCBmbGF0dGVuKCkpXG4gICAgOiB4Zm9ybSA9PlxuICAgICAgICB0b1RyYW5zZHVjZXIoKGFjYywgdmFsdWUpID0+IHtcbiAgICAgICAgICBjb25zdCBzdWJYZm9ybSA9IHRvVHJhbnNkdWNlcigoYWNjLCB2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdiA9IHhmb3JtW3Auc3RlcF0oYWNjLCB2YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm4gaXNDb21wbGV0ZWQodikgPyBjb21wbGV0ZSh2KSA6IHY7XG4gICAgICAgICAgfSwgeGZvcm0pO1xuXG4gICAgICAgICAgcmV0dXJuIGlzSXRlcmFibGUodmFsdWUpXG4gICAgICAgICAgICA/IHJlZHVjZSh2YWx1ZSwgc3ViWGZvcm0sIGFjYylcbiAgICAgICAgICAgIDogc3ViWGZvcm1bcC5zdGVwXShhY2MsIHZhbHVlKTtcbiAgICAgICAgfSwgeGZvcm0pO1xufVxuXG4vKipcbiAqIFJlcGVhdHMgZWFjaCBlbGVtZW50IGZyb20gdGhlIGlucHV0IGNvbGxlY3Rpb24gYG5gIHRpbWVzIGluIHRoZSBvdXRwdXRcbiAqIGNvbGxlY3Rpb24uXG4gKlxuICogVGhlc2UgZWxlbWVudHMgYXJlIHB1dCBpbnRvIHRoZSBtYWluIG91dHB1dCBjb2xsZWN0aW9uLCBub3QgaW50b1xuICogc3ViY29sbGVjdGlvbnMuIEluIG90aGVyIHdvcmRzLCBlYWNoIGlucHV0IGVsZW1lbnQgY3JlYXRlcyBgbmAgb3V0cHV0XG4gKiBlbGVtZW50cy5cbiAqXG4gKiBJZiBubyBjb2xsZWN0aW9uIGlzIHByb3ZpZGVkLCBhIGZ1bmN0aW9uIGlzIHJldHVybmVkIHRoYXQgY2FuIGJlIHBhc3NlZCB0b1xuICogYHtAbGluayBtb2R1bGU6eGR1Y2Uuc2VxdWVuY2V8c2VxdWVuY2V9YCwgZXQgYWwuXG4gKlxuICogYGBgXG4gKiBjb25zdCByZXN1bHQgPSByZXBlYXQoWzEsIDIsIDMsIDQsIDVdLCAzKTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdCk7ICAgLy8gLT4gWzEsIDEsIDEsIDIsIDIsIDIsIDMsIDMsIDMsIDQsIDQsIDQsIDUsIDUsIDVdXG4gKiBgYGBcbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcGFyYW0ge21vZHVsZTp4ZHVjZS5Db2xsZWN0aW9ufSBbY29sbGVjdGlvbl0gQW4gb3B0aW9uYWwgaW5wdXQgY29sbGVjdGlvblxuICogICAgIHRoYXQgaXMgdG8gYmUgdHJhbnNkdWNlZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBudW1iZXIgb2YgdGltZXMgdGhhdCBlYWNoIGVsZW1lbnQgZnJvbSB0aGUgaW5wdXRcbiAqICAgICBjb2xsZWN0aW9uIHNob3VsZCBiZSByZXBlYXRlZCBpbiB0aGUgb3V0cHV0IGNvbGxlY3Rpb24uXG4gKiBAcmV0dXJuIHsobW9kdWxlOnhkdWNlLkNvbGxlY3Rpb258bW9kdWxlOnhkdWNlLlRyYW5zZHVjZXJGdW5jdGlvbil9IElmIGFcbiAqICAgICBjb2xsZWN0aW9uIGlzIHN1cHBsaWVkLCB0aGVuIHRoZSBmdW5jdGlvbiByZXR1cm5zIGEgbmV3IGNvbGxlY3Rpb24gb2YgdGhlXG4gKiAgICAgc2FtZSB0eXBlIHdpdGggYWxsIG9mIHRoZSBlbGVtZW50cyBvZiB0aGUgaW5wdXQgY29sbGVjdGlvbiByZXBlYXRlZC4gSWZcbiAqICAgICBubyBjb2xsZWN0aW9uIGlzIHN1cHBsaWVkLCBhIHRyYW5zZHVjZXIgZnVuY3Rpb24sIHN1aXRhYmxlIGZvciBwYXNzaW5nIHRvXG4gKiAgICAgYHtAbGluayBtb2R1bGU6eGR1Y2Uuc2VxdWVuY2V8c2VxdWVuY2V9YCxcbiAqICAgICBge0BsaW5rIG1vZHVsZTp4ZHVjZS5pbnRvfGludG99YCwgZXRjLiBpcyByZXR1cm5lZC5cbiAqL1xuZnVuY3Rpb24gcmVwZWF0KGNvbGxlY3Rpb24sIG4pIHtcbiAgY29uc3QgW2NvbCwgbnVtXSA9IHBhcnNlTnVtYmVyQXJncyhjb2xsZWN0aW9uLCBuKTtcbiAgcmV0dXJuIGNvbFxuICAgID8gc2VxdWVuY2UoY29sLCByZXBlYXQobnVtKSlcbiAgICA6IHhmb3JtID0+XG4gICAgICAgIHRvVHJhbnNkdWNlcigoYWNjLCB2YWx1ZSkgPT4ge1xuICAgICAgICAgIGxldCByZXN1bHQgPSBhY2M7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW07IGkrKykge1xuICAgICAgICAgICAgcmVzdWx0ID0geGZvcm1bcC5zdGVwXShyZXN1bHQsIHZhbHVlKTtcbiAgICAgICAgICAgIGlmIChpc0NvbXBsZXRlZChyZXN1bHQpKSB7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9LCB4Zm9ybSk7XG59XG5cbmV4cG9ydCB7IGlkZW50aXR5LCBmbGF0dGVuLCByZXBlYXQgfTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG5pbXBvcnQgeyBwcm90b2NvbHMgYXMgcCwgZW5zdXJlVW5jb21wbGV0ZWQgfSBmcm9tIFwiQGNoYW5rby94ZGNvcmVcIjtcbmltcG9ydCB7XG4gIHBhcnNlTnVtYmVyQXJncyxcbiAgcGFyc2VGdW5jdGlvbkFyZ3MsXG4gIHNhbWVWYWx1ZVplcm9cbn0gZnJvbSBcIm1vZHVsZXMvdXRpbHNcIjtcbmltcG9ydCB7IHNlcXVlbmNlIH0gZnJvbSBcIm1vZHVsZXMvdHJhbnNkdWN0aW9uXCI7XG5cbmNvbnN0IE5PX1ZBTFVFID0gU3ltYm9sKFwiTk9fVkFMVUVcIik7XG5cbmZ1bmN0aW9uIGNodW5rKGNvbGxlY3Rpb24sIG4pIHtcbiAgY29uc3QgW2NvbCwgbnVtXSA9IHBhcnNlTnVtYmVyQXJncyhjb2xsZWN0aW9uLCBuKTtcbiAgcmV0dXJuIGNvbFxuICAgID8gc2VxdWVuY2UoY29sLCBjaHVuayhudW0pKVxuICAgIDogeGZvcm0gPT4ge1xuICAgICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgICBsZXQgcGFydCA9IFtdO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgW3AuaW5pdF0oKSB7XG4gICAgICAgICAgICByZXR1cm4geGZvcm1bcC5pbml0XSgpO1xuICAgICAgICAgIH0sXG5cbiAgICAgICAgICBbcC5zdGVwXShhY2MsIHZhbHVlKSB7XG4gICAgICAgICAgICBwYXJ0W2NvdW50KytdID0gdmFsdWU7XG4gICAgICAgICAgICBpZiAoY291bnQgPT09IG51bSkge1xuICAgICAgICAgICAgICBjb25zdCBvdXQgPSBwYXJ0LnNsaWNlKDAsIG51bSk7XG4gICAgICAgICAgICAgIHBhcnQgPSBbXTtcbiAgICAgICAgICAgICAgY291bnQgPSAwO1xuICAgICAgICAgICAgICByZXR1cm4geGZvcm1bcC5zdGVwXShhY2MsIG91dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgIH0sXG5cbiAgICAgICAgICBbcC5yZXN1bHRdKHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoY291bnQgPiAwKSB7XG4gICAgICAgICAgICAgIHJldHVybiBlbnN1cmVVbmNvbXBsZXRlZChcbiAgICAgICAgICAgICAgICB4Zm9ybVtwLnN0ZXBdKHZhbHVlLCBwYXJ0LnNsaWNlKDAsIGNvdW50KSlcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB4Zm9ybVtwLnJlc3VsdF0odmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH07XG59XG5cbmZ1bmN0aW9uIGNodW5rQnkoY29sbGVjdGlvbiwgZm4pIHtcbiAgY29uc3QgW2NvbCwgZnVuY10gPSBwYXJzZUZ1bmN0aW9uQXJncyhjb2xsZWN0aW9uLCBmbik7XG4gIHJldHVybiBjb2xcbiAgICA/IHNlcXVlbmNlKGNvbCwgY2h1bmtCeShmdW5jKSlcbiAgICA6IHhmb3JtID0+IHtcbiAgICAgICAgbGV0IHBhcnQgPSBbXTtcbiAgICAgICAgbGV0IGxhc3QgPSBOT19WQUxVRTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIFtwLmluaXRdKCkge1xuICAgICAgICAgICAgcmV0dXJuIHhmb3JtW3AuaW5pdF0oKTtcbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgW3Auc3RlcF0oYWNjLCB2YWx1ZSkge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudCA9IGZ1bmModmFsdWUpO1xuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGFjYztcbiAgICAgICAgICAgIGlmIChsYXN0ID09PSBOT19WQUxVRSB8fCBzYW1lVmFsdWVaZXJvKGN1cnJlbnQsIGxhc3QpKSB7XG4gICAgICAgICAgICAgIHBhcnQucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXN1bHQgPSB4Zm9ybVtwLnN0ZXBdKHJlc3VsdCwgcGFydCk7XG4gICAgICAgICAgICAgIHBhcnQgPSBbdmFsdWVdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGFzdCA9IGN1cnJlbnQ7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgIH0sXG5cbiAgICAgICAgICBbcC5yZXN1bHRdKHZhbHVlKSB7XG4gICAgICAgICAgICBjb25zdCBjb3VudCA9IHBhcnQubGVuZ3RoO1xuICAgICAgICAgICAgaWYgKGNvdW50ID4gMCkge1xuICAgICAgICAgICAgICByZXR1cm4gZW5zdXJlVW5jb21wbGV0ZWQoXG4gICAgICAgICAgICAgICAgeGZvcm1bcC5zdGVwXSh2YWx1ZSwgcGFydC5zbGljZSgwLCBjb3VudCkpXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4geGZvcm1bcC5yZXN1bHRdKHZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9O1xufVxuXG5leHBvcnQgeyBjaHVuaywgY2h1bmtCeSB9O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG5cbmltcG9ydCB7IHByb3RvY29scyBhcyBwLCB0b1RyYW5zZHVjZXIgfSBmcm9tIFwiQGNoYW5rby94ZGNvcmVcIjtcbmltcG9ydCB7IHBhcnNlRnVuY3Rpb25BcmdzLCBzYW1lVmFsdWVaZXJvIH0gZnJvbSBcIm1vZHVsZXMvdXRpbHNcIjtcbmltcG9ydCB7IHNlcXVlbmNlIH0gZnJvbSBcIm1vZHVsZXMvdHJhbnNkdWN0aW9uXCI7XG5cbmNvbnN0IE5PX1ZBTFVFID0gU3ltYm9sKFwiTk9fVkFMVUVcIik7XG5cbmZ1bmN0aW9uIGRpc3RpbmN0V2l0aChjb2xsZWN0aW9uLCBmbikge1xuICBjb25zdCBbY29sLCBmdW5jXSA9IHBhcnNlRnVuY3Rpb25BcmdzKGNvbGxlY3Rpb24sIGZuKTtcbiAgcmV0dXJuIGNvbFxuICAgID8gc2VxdWVuY2UoY29sLCBkaXN0aW5jdFdpdGgoZnVuYykpXG4gICAgOiB4Zm9ybSA9PiB7XG4gICAgICAgIGxldCBsYXN0ID0gTk9fVkFMVUU7XG4gICAgICAgIHJldHVybiB0b1RyYW5zZHVjZXIoKGFjYywgdmFsdWUpID0+IHtcbiAgICAgICAgICBpZiAobGFzdCAhPT0gTk9fVkFMVUUgJiYgZnVuYyh2YWx1ZSwgbGFzdCkpIHtcbiAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxhc3QgPSB2YWx1ZTtcbiAgICAgICAgICByZXR1cm4geGZvcm1bcC5zdGVwXShhY2MsIHZhbHVlKTtcbiAgICAgICAgfSwgeGZvcm0pO1xuICAgICAgfTtcbn1cblxuZnVuY3Rpb24gZGlzdGluY3RCeShjb2xsZWN0aW9uLCBmbikge1xuICBjb25zdCBbY29sLCBmdW5jXSA9IHBhcnNlRnVuY3Rpb25BcmdzKGNvbGxlY3Rpb24sIGZuKTtcbiAgcmV0dXJuIGRpc3RpbmN0V2l0aChjb2wsIChhLCBiKSA9PiBzYW1lVmFsdWVaZXJvKGZ1bmMoYSksIGZ1bmMoYikpKTtcbn1cblxuZnVuY3Rpb24gZGlzdGluY3QoY29sbGVjdGlvbikge1xuICByZXR1cm4gZGlzdGluY3RXaXRoKGNvbGxlY3Rpb24sIHNhbWVWYWx1ZVplcm8pO1xufVxuXG5leHBvcnQgeyBkaXN0aW5jdCwgZGlzdGluY3RCeSwgZGlzdGluY3RXaXRoIH07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuaW1wb3J0IHsgcHJvdG9jb2xzIGFzIHAsIHRvVHJhbnNkdWNlciB9IGZyb20gXCJAY2hhbmtvL3hkY29yZVwiO1xuaW1wb3J0IHsgcGFyc2VOdW1iZXJBcmdzLCBwYXJzZUZ1bmN0aW9uQXJncyB9IGZyb20gXCJtb2R1bGVzL3V0aWxzXCI7XG5pbXBvcnQgeyBzZXF1ZW5jZSB9IGZyb20gXCJtb2R1bGVzL3RyYW5zZHVjdGlvblwiO1xuXG5mdW5jdGlvbiBkcm9wKGNvbGxlY3Rpb24sIG4pIHtcbiAgY29uc3QgW2NvbCwgbnVtXSA9IHBhcnNlTnVtYmVyQXJncyhjb2xsZWN0aW9uLCBuKTtcbiAgcmV0dXJuIGNvbFxuICAgID8gc2VxdWVuY2UoY29sLCBkcm9wKG51bSkpXG4gICAgOiB4Zm9ybSA9PiB7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgcmV0dXJuIHRvVHJhbnNkdWNlcihcbiAgICAgICAgICAoYWNjLCB2YWx1ZSkgPT4gKGkrKyA8IG51bSA/IGFjYyA6IHhmb3JtW3Auc3RlcF0oYWNjLCB2YWx1ZSkpLFxuICAgICAgICAgIHhmb3JtXG4gICAgICAgICk7XG4gICAgICB9O1xufVxuXG5mdW5jdGlvbiBkcm9wV2hpbGUoY29sbGVjdGlvbiwgZm4pIHtcbiAgY29uc3QgW2NvbCwgZnVuY10gPSBwYXJzZUZ1bmN0aW9uQXJncyhjb2xsZWN0aW9uLCBmbik7XG4gIHJldHVybiBjb2xcbiAgICA/IHNlcXVlbmNlKGNvbCwgZHJvcFdoaWxlKGZ1bmMpKVxuICAgIDogeGZvcm0gPT4ge1xuICAgICAgICBsZXQgZHJvcHBpbmcgPSB0cnVlO1xuICAgICAgICByZXR1cm4gdG9UcmFuc2R1Y2VyKChhY2MsIHZhbHVlKSA9PiB7XG4gICAgICAgICAgaWYgKGRyb3BwaW5nKSB7XG4gICAgICAgICAgICBpZiAoZnVuYyh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRyb3BwaW5nID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB4Zm9ybVtwLnN0ZXBdKGFjYywgdmFsdWUpO1xuICAgICAgICB9LCB4Zm9ybSk7XG4gICAgICB9O1xufVxuXG5leHBvcnQgeyBkcm9wLCBkcm9wV2hpbGUgfTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG5pbXBvcnQgeyBwcm90b2NvbHMgYXMgcCwgdG9UcmFuc2R1Y2VyIH0gZnJvbSBcIkBjaGFua28veGRjb3JlXCI7XG5pbXBvcnQgeyBwYXJzZUZ1bmN0aW9uQXJncywgY29tcGxlbWVudCB9IGZyb20gXCJtb2R1bGVzL3V0aWxzXCI7XG5pbXBvcnQgeyBzZXF1ZW5jZSB9IGZyb20gXCJtb2R1bGVzL3RyYW5zZHVjdGlvblwiO1xuXG5mdW5jdGlvbiBmaWx0ZXIoY29sbGVjdGlvbiwgZm4pIHtcbiAgY29uc3QgW2NvbCwgZnVuY10gPSBwYXJzZUZ1bmN0aW9uQXJncyhjb2xsZWN0aW9uLCBmbik7XG4gIHJldHVybiBjb2xcbiAgICA/IHNlcXVlbmNlKGNvbCwgZmlsdGVyKGZ1bmMpKVxuICAgIDogeGZvcm0gPT5cbiAgICAgICAgdG9UcmFuc2R1Y2VyKFxuICAgICAgICAgIChhY2MsIHZhbHVlKSA9PiAoZnVuYyh2YWx1ZSkgPyB4Zm9ybVtwLnN0ZXBdKGFjYywgdmFsdWUpIDogYWNjKSxcbiAgICAgICAgICB4Zm9ybVxuICAgICAgICApO1xufVxuXG5mdW5jdGlvbiByZWplY3QoY29sbGVjdGlvbiwgZm4pIHtcbiAgY29uc3QgW2NvbCwgZnVuY10gPSBwYXJzZUZ1bmN0aW9uQXJncyhjb2xsZWN0aW9uLCBmbik7XG4gIHJldHVybiBmaWx0ZXIoY29sLCBjb21wbGVtZW50KGZ1bmMpKTtcbn1cblxuZXhwb3J0IHsgZmlsdGVyLCByZWplY3QgfTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG5pbXBvcnQgeyBwcm90b2NvbHMgYXMgcCwgdG9UcmFuc2R1Y2VyIH0gZnJvbSBcIkBjaGFua28veGRjb3JlXCI7XG5pbXBvcnQgeyBwYXJzZUZ1bmN0aW9uQXJncyB9IGZyb20gXCJtb2R1bGVzL3V0aWxzXCI7XG5pbXBvcnQgeyBzZXF1ZW5jZSwgY29tcG9zZSB9IGZyb20gXCJtb2R1bGVzL3RyYW5zZHVjdGlvblwiO1xuaW1wb3J0IHsgZmxhdHRlbiB9IGZyb20gXCJtb2R1bGVzL2Jhc2ljXCI7XG5cbmZ1bmN0aW9uIG1hcChjb2xsZWN0aW9uLCBmbikge1xuICBjb25zdCBbY29sLCBmdW5jXSA9IHBhcnNlRnVuY3Rpb25BcmdzKGNvbGxlY3Rpb24sIGZuKTtcbiAgcmV0dXJuIGNvbFxuICAgID8gc2VxdWVuY2UoY29sLCBtYXAoZnVuYykpXG4gICAgOiB4Zm9ybSA9PlxuICAgICAgICB0b1RyYW5zZHVjZXIoKGFjYywgdmFsdWUpID0+IHhmb3JtW3Auc3RlcF0oYWNjLCBmdW5jKHZhbHVlKSksIHhmb3JtKTtcbn1cblxuZnVuY3Rpb24gZmxhdE1hcChjb2xsZWN0aW9uLCBmbikge1xuICBjb25zdCBbY29sLCBmdW5jXSA9IHBhcnNlRnVuY3Rpb25BcmdzKGNvbGxlY3Rpb24sIGZuKTtcbiAgcmV0dXJuIGNvbFxuICAgID8gc2VxdWVuY2UoY29sLCBjb21wb3NlKG1hcChmdW5jKSwgZmxhdHRlbigpKSlcbiAgICA6IGNvbXBvc2UobWFwKGZ1bmMpLCBmbGF0dGVuKCkpO1xufVxuXG5leHBvcnQgeyBtYXAsIGZsYXRNYXAgfTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG5pbXBvcnQgeyBwcm90b2NvbHMgYXMgcCwgdG9UcmFuc2R1Y2VyLCBlbnN1cmVDb21wbGV0ZWQgfSBmcm9tIFwiQGNoYW5rby94ZGNvcmVcIjtcbmltcG9ydCB7IHBhcnNlTnVtYmVyQXJncywgcGFyc2VGdW5jdGlvbkFyZ3MgfSBmcm9tIFwibW9kdWxlcy91dGlsc1wiO1xuaW1wb3J0IHsgc2VxdWVuY2UgfSBmcm9tIFwibW9kdWxlcy90cmFuc2R1Y3Rpb25cIjtcblxuZnVuY3Rpb24gdGFrZShjb2xsZWN0aW9uLCBuKSB7XG4gIGNvbnN0IFtjb2wsIG51bV0gPSBwYXJzZU51bWJlckFyZ3MoY29sbGVjdGlvbiwgbik7XG4gIHJldHVybiBjb2xcbiAgICA/IHNlcXVlbmNlKGNvbCwgdGFrZShudW0pKVxuICAgIDogeGZvcm0gPT4ge1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIHJldHVybiB0b1RyYW5zZHVjZXIoKGFjYywgdmFsdWUpID0+IHtcbiAgICAgICAgICBsZXQgcmVzdWx0ID0gYWNjO1xuXG4gICAgICAgICAgaWYgKGkgPCBudW0pIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHhmb3JtW3Auc3RlcF0oYWNjLCB2YWx1ZSk7XG4gICAgICAgICAgICBpZiAoaSA9PT0gbnVtIC0gMSkge1xuICAgICAgICAgICAgICByZXN1bHQgPSBlbnN1cmVDb21wbGV0ZWQocmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaSsrO1xuICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0sIHhmb3JtKTtcbiAgICAgIH07XG59XG5cbmZ1bmN0aW9uIHRha2VXaGlsZShjb2xsZWN0aW9uLCBmbikge1xuICBjb25zdCBbY29sLCBmdW5jXSA9IHBhcnNlRnVuY3Rpb25BcmdzKGNvbGxlY3Rpb24sIGZuKTtcbiAgcmV0dXJuIGNvbFxuICAgID8gc2VxdWVuY2UoY29sLCB0YWtlV2hpbGUoZnVuYykpXG4gICAgOiB4Zm9ybSA9PlxuICAgICAgICB0b1RyYW5zZHVjZXIoXG4gICAgICAgICAgKGFjYywgdmFsdWUpID0+XG4gICAgICAgICAgICBmdW5jKHZhbHVlKSA/IHhmb3JtW3Auc3RlcF0oYWNjLCB2YWx1ZSkgOiBlbnN1cmVDb21wbGV0ZWQoYWNjKSxcbiAgICAgICAgICB4Zm9ybVxuICAgICAgICApO1xufVxuXG5mdW5jdGlvbiB0YWtlTnRoKGNvbGxlY3Rpb24sIG4pIHtcbiAgY29uc3QgW2NvbCwgbnVtXSA9IHBhcnNlTnVtYmVyQXJncyhjb2xsZWN0aW9uLCBuKTtcbiAgcmV0dXJuIGNvbFxuICAgID8gc2VxdWVuY2UoY29sLCB0YWtlTnRoKG51bSkpXG4gICAgOiB4Zm9ybSA9PiB7XG4gICAgICAgIGxldCBpID0gLTE7XG4gICAgICAgIHJldHVybiB0b1RyYW5zZHVjZXIoXG4gICAgICAgICAgKGFjYywgdmFsdWUpID0+ICgrK2kgJSBudW0gPT09IDAgPyB4Zm9ybVtwLnN0ZXBdKGFjYywgdmFsdWUpIDogYWNjKSxcbiAgICAgICAgICB4Zm9ybVxuICAgICAgICApO1xuICAgICAgfTtcbn1cblxuZXhwb3J0IHsgdGFrZSwgdGFrZVdoaWxlLCB0YWtlTnRoIH07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuLyoqXG4gKiBGdW5jdGlvbnMgZGVhbGluZyB3aXRoIHRoZSBhY3R1YWwgdHJhbnNmb3JtYXRpb24gb2YgdmFsdWVzIGFuZCBmb3IgY2hvb3NpbmdcbiAqIHRoZSByZWR1Y2VyIGR1cmluZyB0cmFuc2R1Y3Rpb24uXG4gKlxuICogQG1vZHVsZSB4ZHVjZS90cmFuc2Zvcm1hdGlvblxuICogQHByaXZhdGVcbiAqL1xuXG5pbXBvcnQge1xuICBwcm90b2NvbHMgYXMgcCxcbiAgaXNJbXBsZW1lbnRlZCxcbiAgaXRlcmF0b3IsXG4gIGlzQ29tcGxldGVkLFxuICB0b1JlZHVjZXIsXG4gIHRvRnVuY3Rpb24sXG4gIHJlZHVjZSxcbiAgaXNGdW5jdGlvbixcbiAgaXNBcnJheSxcbiAgaXNPYmplY3QsXG4gIGlzU3RyaW5nXG59IGZyb20gXCJAY2hhbmtvL3hkY29yZVwiO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gaXRlcmF0b3IgdGhhdCBpcyBhbHNvIGEgdHJhbnNkdWNlciwgdHJhbnNmb3JtaW5nIGl0cyBjb2xsZWN0aW9uXG4gKiBvbmUgZWxlbWVudCBhdCBhIHRpbWUuIFRoaXMgaXMgdGhlIGFjdHVhbCBvdXRwdXQgb2YgdGhlXG4gKiB7QGxpbmsgbW9kdWxlOnhkdWNlLmFzSXRlcmF0b3J8YXNJdGVyYXRvcn0gZnVuY3Rpb24sIGFzIHdlbGwgYXMgdGhlIG91dHB1dCBvZlxuICogdGhlIHtAbGluayBtb2R1bGU6eGR1Y2Uuc2VxdWVuY2V8c2VxdWVuY2V9IGZ1bmN0aW9uIHdoZW4gdGhlIGlucHV0IGlzIGFuXG4gKiBpdGVyYXRvci5cbiAqXG4gKiBUaGUgZW5kIHVzZXIgbmVlZCBub3QgYmUgY29uY2VybmVkIHdpdGggdGhlIHR5cGUgb2YgdGhlIG91dHB1dCBpdGVyYXRvciBpblxuICogdGhlc2UgY2lyY3Vtc3RhbmNlczsgdGhlIGVuZCB1c2VyIG5lZWQgb25seSBjYXJlIHRoYXQgdGhlIG91dHB1dCBpcywgaW4gZmFjdCxcbiAqIGFuIGl0ZXJhdG9yIGFuZCBjYW4gYmUgZXhwZWN0ZWQgdG8gYWN0IGxpa2Ugb25lLiBGb3IgdGhpcyByZWFzb24sIHRoaXNcbiAqIGZ1bmN0aW9uIGFuZCB0aGUgdHlwZSBpdCByZXR1cm5zIGFyZSBub3QgZXhwb3J0ZWQuXG4gKlxuICogVGhpcyBvYmplY3Qgc3VwcG9ydHMgbm9uLTEtdG8tMSBjb3JyZXNwb25kZW5jZXMgYmV0d2VlbiBpbnB1dCBhbmQgb3V0cHV0XG4gKiB2YWx1ZXMuIEZvciBleGFtcGxlLCBhIGZpbHRlciB0cmFuc2Zvcm1hdGlvbiBtaWdodCByZXR1cm4gZmV3ZXIgb3V0cHV0XG4gKiBlbGVtZW50cyB0aGFuIHdlcmUgaW4gdGhlIGlucHV0IGNvbGxlY3Rpb24sIHdoaWxlIGEgcmVwZWF0IHRyYW5zZm9ybWF0aW9uXG4gKiB3aWxsIHJldHVybiBtb3JlLiBJbiBlaXRoZXIgY2FzZSwgYG5leHRgIGluIHRoaXMgY2xhc3Mgd2lsbCByZXR1cm4gb25lXG4gKiBlbGVtZW50IHBlciBjYWxsLlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOnhkdWNlLXRvb2xzLkl0ZXJhYmxlfSBjb2xsZWN0aW9uIHRoZSBpbnB1dCBjb2xsZWN0aW9uIHRoYXQgdGhlXG4gKiAgICAgcHJvZHVjZWQgaXRlcmF0b3Igd2lsbCBiZSBpdGVyYXRpbmcgb3Zlci5cbiAqIEBwYXJhbSB7bW9kdWxlOnhkdWNlLXRvb2xzLlRyYW5zZHVjZXJGdW5jdGlvbn0geGZvcm0gQSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgYVxuICogICAgIHRyYW5zZHVjZXIgb2JqZWN0IHRoYXQgZGVmaW5lcyB0aGUgdHJhbnNmb3JtYXRpb24gYmVpbmcgZG9uZSB0byB0aGVcbiAqICAgICBpdGVyYXRvcidzIGVsZW1lbnRzLiBBbnkgb2YgdGhlIHRyYW5zZHVjZXJzIGluIHRoZVxuICogICAgIHtAbGluayBtb2R1bGU6eGR1Y2V8eGR1Y2V9IG1vZHVsZSBjYW4gcHJvZHVjZSBhIHN1aXRhYmxlIHRyYW5zZHVjZXJcbiAqICAgICBmdW5jdGlvbi5cbiAqIEByZXR1cm4ge21vZHVsZTp4ZHVjZS10b29scy5JdGVyYXRvcn0gQW4gaXRlcmF0b3IgdGhhdCB3aWxsIHRyYW5zZm9ybSBpdHMgaW5wdXRcbiAqICAgICBlbGVtZW50cyB1c2luZyB0aGUgdHJhbnNkdWNlciBmdW5jdGlvbiBhcyBpdHNcbiAqICAgICBge0BsaW5rIG1vZHVsZTp4ZHVjZS10b29scy5OZXh0RnVuY3Rpb258bmV4dH1gIGZ1bmN0aW9uIGlzIGNhbGxlZC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHRyYW5zZHVjaW5nSXRlcmF0b3IoY29sbGVjdGlvbiwgeGZvcm0pIHtcbiAgY29uc3Qgc3RlcFJlZHVjZXIgPSB7XG4gICAgW3Auc3RlcF0oeGl0ZXIsIGlucHV0KSB7XG4gICAgICB4aXRlci5pdGVtcy51bnNoaWZ0KGlucHV0KTtcbiAgICAgIHJldHVybiB4aXRlcjtcbiAgICB9LFxuICAgIFtwLnJlc3VsdF0odmFsdWUpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaXRlciA9IGl0ZXJhdG9yKGNvbGxlY3Rpb24pO1xuICBjb25zdCB4ZiA9IHhmb3JtKHN0ZXBSZWR1Y2VyKTtcbiAgbGV0IGNvbXBsZXRlZCA9IGZhbHNlO1xuXG4gIC8vIFRoaXMgYXJyYXkgaXMgdGhlIGtleSB0byB3b3JraW5nIHByb3Blcmx5IHdpdGggc3RlcCBmdW5jdGlvbnMgdGhhdCByZXR1cm5cbiAgLy8gbW9yZSB0aGFuIG9uZSB2YWx1ZS4gQWxsIG9mIHRoZW0gYXJlIHB1dCBpbnRvIHRoZSBpdGVtcyBhcnJheS4gQXMgbG9uZyBhc1xuICAvLyB0aGlzIGFycmF5IGhhcyB2YWx1ZXMgaW4gaXQsIHRoZSBgbmV4dGAgZnVuY3Rpb24gd2lsbCByZXR1cm4gb25lIHZhbHVlXG4gIC8vIHBvcHBlZCBmcm9tIGl0IHJhdGhlciB0aGFuIHJ1bm5pbmcgdGhlIHN0ZXAgZnVuY3Rpb24gYWdhaW4uXG4gIGNvbnN0IGl0ZW1zID0gW107XG5cbiAgLy8gVGhlIGBuZXh0YCBmdW5jdGlvbiBoZXJlIGlzIHJhdGhlciBzaW1wbGUuIElmIHRoZXJlIGlzIGFscmVhZHkgc29tZXRoaW5nIGluXG4gIC8vIHRoZSBgaXRlbXNgIGFycmF5LCBpdCdzIHJldHVybmVkLiBJZiBub3QsIHRoZSBgc3RlcGAgZnVuY3Rpb24gaXMgcnVuIGFuZCxcbiAgLy8gaWYgdGhhdCByZXN1bHRzIGluIGEgdmFsdWUgaW4gdGhlIGBpdGVtc2AgYXJyYXksIGl0J3MgcmV0dXJuZWQuIE90aGVyd2lzZVxuICAvLyBhbiBvYmplY3Qgd2l0aCBgeyBkb25lOiB0cnVlIH1gIGlzIHJldHVybmVkLlxuICBmdW5jdGlvbiBuZXh0KCkge1xuICAgIGlmIChpdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHN0ZXAoKTtcbiAgICB9XG4gICAgaWYgKGl0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHsgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IGl0ZW1zLnBvcCgpLFxuICAgICAgZG9uZTogZmFsc2VcbiAgICB9O1xuICB9XG5cbiAgLy8gVGhpcyBpcyB3aGVyZSBtb3N0IG9mIHRoZSB3b3JrIGhhcHBlbnMuIEl0IGdldHMgdGhlIG5leHQgdmFsdWUgZnJvbSB0aGVcbiAgLy8gaW5wdXQgY29sbGVjdGlvbiBhbmQgcnVucyBpdCB0aHJvdWdoIHRoZSByZWR1Y3Rpb24gc3RlcCBmdW5jdGlvbnMuIElmIHRoYXRcbiAgLy8gcmVzdWx0cyBpbiBhIHZhbHVlLCBpdCdzIGdpdmVuIHRvIHRoZSBzdGVwcGVyIG9iamVjdCAod2hpY2ggYWRkcyBpdCB0byB0aGVcbiAgLy8gYGl0ZW1zYCBhcnJheSk7IG90aGVyd2lzZSB0aGUgd2hpbGUgbG9vcCBjb250aW51ZXMgdG8gdGhlIG5leHQgZWxlbWVudCBvZlxuICAvLyB0aGUgaW5wdXQgY29sbGVjdGlvbi4gVGhpcyBlbnN1cmVzIHRoYXQgdGhlcmUncyBzb21ldGhpbmcgZm9yIHRoZSBgbmV4dGBcbiAgLy8gZnVuY3Rpb24gdG8gcmV0dXJuIGVhY2ggdGltZSBpdCdzIGNhbGxlZC5cbiAgLy9cbiAgLy8gSWYgdGhlIGNvbGxlY3Rpb24gaGFzIGZpbmlzaGVkIG9yIGlmIHRoZSBzdGVwIGZ1bmN0aW9uIHJldHVybnMgYSBjb21wbGV0ZWRcbiAgLy8gb2JqZWN0ICh3aGljaCB0YWtlIHdpbGwgZG8gYWZ0ZXIgaXRzIGxpbWl0IG9mIGVsZW1lbnRzIGhhcyBiZWVuIHJlYWNoZWQsXG4gIC8vIGZvciBpbnN0YW5jZSksIHRoZSBpdGVyYXRpb24gaXMgZmluaXNoZWQgYnkgY2FsbGluZyB0aGUgcmVzdWx0IGZ1bmN0aW9uLlxuICBmdW5jdGlvbiBzdGVwKCkge1xuICAgIGNvbnN0IGNvdW50ID0gaXRlbXMubGVuZ3RoO1xuICAgIHdoaWxlIChpdGVtcy5sZW5ndGggPT09IGNvdW50KSB7XG4gICAgICBjb25zdCBzdGVwVmFsdWUgPSBpdGVyLm5leHQoKTtcbiAgICAgIGlmIChzdGVwVmFsdWUuZG9uZSB8fCBjb21wbGV0ZWQpIHtcbiAgICAgICAgeGZbcC5yZXN1bHRdKHJlc3VsdCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY29tcGxldGVkID0gaXNDb21wbGV0ZWQoeGZbcC5zdGVwXShyZXN1bHQsIHN0ZXBWYWx1ZS52YWx1ZSkpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFRoZSBgcmVzdWx0YCBuYW1lIGlzIGhvaXN0ZWQgYW5kIHVzZWQgaW4gZnVuY3Rpb25zIGZ1cnRoZXIgdXAsIHNvIHdlIGhhdmVcbiAgLy8gdG8gcmV0YWluIHRoYXQgbmFtZSBhbmQgY2FuJ3QganVzdCByZXR1cm4gdGhlIG9iamVjdCB3aXRob3V0IG5hbWluZyBpdFxuICBjb25zdCByZXN1bHQgPSB7IGl0ZW1zLCBuZXh0LCBzdGVwIH07XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogVHJhbnNmb3JtcyB0aGUgZWxlbWVudHMgb2YgdGhlIGlucHV0IGNvbGxlY3Rpb24gYW5kIHJlZHVjZXMgdGhlbSBpbnRvIGFuXG4gKiBvdXRwdXQgY29sbGVjdGlvbi5cbiAqXG4gKiBUaGlzIGlzIHRoZSBsb3dlc3QtbGV2ZWwgb2YgdGhlIHRyYW5zZHVjdGlvbiBmdW5jdGlvbnMgdGhhdCBpcyBsaWtlbHkgdG8gc2VlXG4gKiByZWd1bGFyIHVzZS4gSXQgZG9lcyBub3QgYXNzdW1lIGFueXRoaW5nIGFib3V0IHRoZSByZWR1Y2VyLCBhcyBpdCBhc2tzIGZvciBpdFxuICogdG8gYmUgcGFzc2VkIGV4cGxpY2l0bHkuIFRoaXMgbWVhbnMgdGhhdCBhbnkga2luZCBvZiBjb2xsZWN0aW9uIGNhbiBiZVxuICogcHJvZHVjZWQsIHNpbmNlIHRoZSByZWR1Y2VyIGlzIG5vdCB0aWVkIHRvIHRoZSBpbnB1dCBjb2xsZWN0aW9uIGluIGFueSB3YXkuXG4gKlxuICogYHRyYW5zZHVjZWAgYWxzbyB3aWxsIGFjY2VwdCBhbiBpbml0aWFsIHZhbHVlIGZvciB0aGUgcmVzdWx0aW5nIGNvbGxlY3Rpb24gYXNcbiAqIHRoZSBvcHRpb25hbCBsYXN0IHBhcmFtZXRlci4gSWYgdGhpcyBwYXJhbWV0ZXIgaXNuJ3QgcHJlc2VudCwgdGhlbiB0aGVcbiAqIGluaXRpYWwgdmFsdWUgaXMgZGV0ZXJtaW5lZCBmcm9tIHRoZSB0cmFuc2R1Y2VyIGluaXQgcHJvdG9jb2wgcHJvcGVydHkgb24gdGhlXG4gKiByZWR1Y2VyLiBOb3RlIGhvd2V2ZXIgdGhhdCBtYW55IHJlZHVjZXJzIG1heSBub3QgcHJvdmlkZSBhbiBpbml0aWFsIHZhbHVlLFxuICogYW5kIGluIHRob3NlIGNhc2VzIGl0IHdpbGwgKmhhdmUqIHRvIGJlIHBhc3NlZCBhcyBhIHBhcmFtZXRlci5cbiAqXG4gKiBgYGBcbiAqIGltcG9ydCB7IG1hcCwgdHJhbnNkdWNlIH0gZnJvbSBcIkBjaGFua28veGR1Y2VcIjtcbiAqIGltcG9ydCB7IHByb3RvY29scyBhcyBwIH0gZnJvbSBcIkBjaGFua28veGR1Y2UtdG9vbHNcIjtcbiAqXG4gKiBjb25zdCB4Zm9ybSA9IG1hcCh4ID0+IHggKyAxKTtcbiAqXG4gKiBjb25zdCBhcnJheVJlZHVjZXIgPSB7XG4gKiAgIFtwLmluaXRdKCkgeyByZXR1cm4gW107IH0sXG4gKiAgIFtwLnJlc3VsdF0oeCkgeyByZXR1cm4geDsgfSxcbiAqICAgW3Auc3RlcF0oYWNjLCB4KSB7XG4gKiAgICAgYWNjLnB1c2goeCk7XG4gKiAgICAgcmV0dXJuIGFjYztcbiAqICAgfVxuICogfTtcbiAqXG4gKiBjb25zdCBzdHJpbmdSZWR1Y2VyID0ge1xuICogICBbcC5pbml0XSgpIHsgcmV0dXJuICcnOyB9LFxuICogICBbcC5yZXN1bHRdKHgpIHsgcmV0dXJuIHg7IH0sXG4gKiAgIFtwLnN0ZXBdKGFjYywgeCkgeyByZXR1cm4gYWNjICsgeDsgfVxuICogfTtcbiAqXG4gKiBsZXQgcmVzdWx0ID0gdHJhbnNkdWNlKFsxLCAyLCAzLCA0LCA1XSwgeGZvcm0sIGFycmF5UmVkdWNlcik7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQpOyAgIC8vIC0+IFsyLCAzLCA0LCA1LCA2XVxuICpcbiAqIHJlc3VsdCA9IHRyYW5zZHVjZShbMSwgMiwgMywgNCwgNV0sIHhmb3JtLCBzdHJpbmdSZWR1Y2VyKTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdCk7ICAgLy8gLT4gXCIyMzQ1NlwiXG4gKlxuICogcmVzdWx0ID0gdHJhbnNkdWNlKCcxMjM0NScsIHhmb3JtLCBhcnJheVJlZHVjZXIpO1xuICogY29uc29sZS5sb2cocmVzdWx0KTsgICAvLyAtPiBbMiwgMywgNCwgNSwgNl1cbiAqXG4gKiByZXN1bHQgPSB0cmFuc2R1Y2UoJzEyMzQ1JywgeGZvcm0sIHN0cmluZ1JlZHVjZXIpO1xuICogY29uc29sZS5sb2cocmVzdWx0KTsgICAvLyAtPiBcIjIzNDU2XCJcbiAqIGBgYFxuICpcbiAqIFRoZXNlIGV4YW1wbGVzIGlsbHVzdHJhdGUgYSBudW1iZXIgb2YgaW1wb3J0YW50IGNvbmNlcHRzLiBGaXJzdCBvZiBhbGwsIHRoZVxuICogdHJhbnNkdWNlciBmdW5jdGlvbiBpcyBpbmRlcGVuZGVudCBvZiB0aGUgdHlwZSBvZiB0aGUgY29sbGVjdGlvbjsgdGhlIHNhbWVcbiAqIHRyYW5zZHVjZXIgZnVuY3Rpb24gaXMgdXNlZCBubyBtYXR0ZXIgdGhlIHR5cGUgb2YgaW5wdXQgb3Igb3V0cHV0XG4gKiBjb2xsZWN0aW9ucy4gU2Vjb25kbHksIHR3byByZWR1Y2VycyBhcmUgZGVmaW5lZC4gVGhlc2UgYXJlIG9iamVjdHMgdGhhdFxuICogY29uZm9ybSB0byB0aGUgdHJhbnNkdWNlciBwcm90b2NvbCAoc2VlIHRoZSBkb2N1bWVudGF0aW9uIG9uXG4gKiBge0BsaW5rIG1vZHVsZTp4ZHVjZS10b29scy5wcm90b2NvbHN9YCkgYW5kIHRoYXQga25vdyBob3cgdG8gcHJvZHVjZSB0aGUgb3V0cHV0XG4gKiBjb2xsZWN0aW9uIG9mIGNob2ljZS4gSW4gdGhpcyBjYXNlLCB0aGUgcmVkdWNlcnMga25vdyBob3cgdG8gY3JlYXRlIG5ld1xuICogYXJyYXlzIGFuZCBzdHJpbmdzICh0aGUgYGluaXRgIHByb3RvY29sKSBhbmQgaG93IHRvIGFkZCBlbGVtZW50cyB0byBhcnJheXNcbiAqIGFuZCBzdHJpbmdzICh0aGUgYHN0ZXBgIHByb3RvY29sKS4gQmVjYXVzZSB0aGVzZSByZWR1Y2VycyBkbyBoYXZlIGBpbml0YFxuICogcHJvdG9jb2wgcHJvcGVydGllcywgdGhlIGB0cmFuc2R1Y2VgIGNhbGxzIGRvIG5vdCByZXF1aXJlIGV4cGxpY2l0IGluaXRpYWxcbiAqIGNvbGxlY3Rpb25zLlxuICpcbiAqIFRoZSBmaW5hbCBwb2ludCBpcyB0aGF0IGB0cmFuc2R1Y2VgIGNhbiBhY2NlcHQgYW55IGtpbmQgb2YgaXRlcmFibGVcbiAqIGNvbGxlY3Rpb24sIGFuZCBieSBwYXNzaW5nIGluIHRoZSBwcm9wZXIgcmVkdWNlciwgaXQgY2FuIHByb2R1Y2UgYW55IGtpbmQgb2ZcbiAqIG91dHB1dCBjb2xsZWN0aW9uLiBUaGUgc2FtZSBgdHJhbnNkdWNlYCBmdW5jdGlvbiBhbmQgdGhlIHNhbWUgbWFwIHRyYW5zZm9ybWVyXG4gKiBpcyB1c2VkIGluIGFsbCBmb3VyIGV4YW1wbGVzLCBkZXNwaXRlIHRoZSBpbnB1dC9vdXRwdXQgY29tYmluYXRpb24gYmVpbmdcbiAqIGRpZmZlcmVudCBpbiBhbGwgZm91ci5cbiAqXG4gKiBUaGUgYHJlZHVjZXJgIHBhcmFtZXRlciAqY2FuKiBiZSBhIHJlZHVjZXIgZnVuY3Rpb24gaW5zdGVhZCBvZiBhIHJlZHVjZXJcbiAqIG9iamVjdC4gSWYgdGhpcyBpcyB0aGUgY2FzZSwgdGhlIGBpbml0YCBwYXJhbWV0ZXIgaXMgcmVxdWlyZWQgYmVjYXVzZSBhXG4gKiBmdW5jdGlvbiBjYW5ub3QgZGVmaW5lIGFuIGluaXRpYWwgdmFsdWUgaXRzZWxmLlxuICpcbiAqIFRoZSBgaW5pdGAgY29sbGVjdGlvbiBkb2Vzbid0IGhhdmUgdG8gYmUgZW1wdHkuIElmIGl0IGlzbid0LCB0aGUgZWxlbWVudHNcbiAqIHRoYXQgYXJlIGFscmVhZHkgaW4gaXQgYXJlIHJldGFpbmVkIGFuZCB0aGUgdHJhbnNmb3JtZWQgaW5wdXQgZWxlbWVudHMgYXJlXG4gKiByZWR1Y2VkIGludG8gdGhlIGNvbGxlY3Rpb24gbm9ybWFsbHkuXG4gKlxuICogT2YgY291cnNlLCB0aGUgZXhhbXBsZXMgYXJlIG5vdCByZWFsbHkgbmVjZXNzYXJ5IC0gdGhlIHNhbWUgdGhpbmcgY291bGQgYmVcbiAqIGFjY29tcGxpc2hlZCB1c2luZyBge0BsaW5rIG1vZHVsZTp4ZHVjZS5pbnRvfGludG99YCB3aXRob3V0IGhhdmluZyB0byBjcmVhdGVcbiAqIHRoZSByZWR1Y2VycyAoc3RyaW5ncyBhbmQgYXJyYXlzIHBhc3NlZCB0byBge0BsaW5rIG1vZHVsZTp4ZHVjZS5pbnRvfGludG99YFxuICogYXMgdGFyZ2V0cyBrbm93IGhvdyB0byByZWR1Y2UgdGhlbXNlbHZlcyBhbHJlYWR5KS5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcGFyYW0ge21vZHVsZTp4ZHVjZS10b29scy5JdGVyYWJsZX0gY29sbGVjdGlvbiBUaGUgaW5wdXQgY29sbGVjdGlvbi4gVGhlIG9ubHlcbiAqICAgICByZXF1aXJlbWVudCBvZiB0aGlzIGNvbGxlY3Rpb24gaXMgdGhhdCBpdCBpbXBsZW1lbnQgdGhlIGBpdGVyYWJsZWBcbiAqICAgICBwcm90b2NvbC4gU3BlY2lhbCBzdXBwb3J0IGlzIHByb3ZpZGVkIGJ5IHRoZSBsaWJyYXJ5IGZvciBvYmplY3RzLCBzbyB0aGV5XG4gKiAgICAgY2FuIGFsc28gYmUgdXNlZC5cbiAqIEBwYXJhbSB7bW9kdWxlOnhkdWNlLXRvb2xzLlRyYW5zZHVjZXJGdW5jdGlvbn0gW3hmb3JtXSBBIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyBhXG4gKiAgICAgdHJhbnNkdWNlciBvYmplY3QgdGhhdCBkZWZpbmVzIHRoZSB0cmFuc2Zvcm1hdGlvbiBiZWluZyBkb25lIHRvIHRoZSBpbnB1dFxuICogICAgIGNvbGxlY3Rpb24ncyBlbGVtZW50cy4gQW55IG9mIHRoZSB0cmFuc2R1Y2VycyBpbiB0aGVcbiAqICAgICB7QGxpbmsgbW9kdWxlOnRyYW5zZHVjZXJzfHRyYW5zZHVjZXJzfSBtb2R1bGUgY2FuIHByb2R1Y2UgYSBzdWl0YWJsZVxuICogICAgIHRyYW5zZHVjZXIgZnVuY3Rpb24uXG4gKiBAcGFyYW0geyhtb2R1bGU6eGR1Y2UtdG9vbHMuU3RlcEZ1bmN0aW9ufG1vZHVsZTp4ZHVjZS10b29scy5SZWR1Y2VyKX0gcmVkdWNlciBFaXRoZXIgYVxuICogICAgIGZ1bmN0aW9uIG9yIGEgcmVkdWNlciBvYmplY3QgdGhhdCBpbXBsZW1lbnRzIHRoZSB0cmFuc2R1Y2VyIHByb3RvY29sc1xuICogICAgIChgaW5pdGAgaXMgIG9ubHkgcmVxdWlyZWQgaWYgdGhlIGBpbml0YCBwYXJhbWV0ZXIgaXMgbm90IHByZXNlbnQpLiBUaGlzXG4gKiAgICAgb2JqZWN0IG11c3Qga25vdyBob3cgdG8gcHJvZHVjZSBhbiBvdXRwdXQgY29sbGVjdGlvbiB0aHJvdWdoIGl0cyBgc3RlcGBcbiAqICAgICBhbmQgYHJlc3VsdGAgcHJvdG9jb2wgZnVuY3Rpb25zLiBJZiB0aGlzIHBhcmFtZXRlciBpcyBhIGZ1bmN0aW9uLCB0aGVuIGl0XG4gKiAgICAgaXMgdHVybmVkIGludG8gYSB2YWxpZCByZWR1Y2VyIG9iamVjdC5cbiAqIEBwYXJhbSB7bW9kdWxlOnhkdWNlLXRvb2xzLlJlZHVjaWJsZX0gW2luaXRdIEEgY29sbGVjdGlvbiBvZiB0aGUgc2FtZSB0eXBlIGFzIHRoZVxuICogICAgIG91dHB1dCBjb2xsZWN0aW9uLiBJZiB0aGlzIGlzIG5vdCBwcmVzZW50LCB0aGVuIHRoZSByZWR1Y2VyJ3MgYGluaXRgXG4gKiAgICAgcHJvdG9jb2wgZnVuY3Rpb24gaXMgY2FsbGVkIGluc3RlYWQgdG8gZ2V0IHRoZSBpbml0aWFsIGNvbGxlY3Rpb24uIElmIGl0XG4gKiAgICAgaXMgcHJlc2VudCBhbmQgbm90IGVtcHR5LCB0aGVuIHRoZSBleGlzdGluZyBlbGVtZW50cyByZW1haW4gYW5kIHRoZVxuICogICAgIHRyYW5zZm9ybWVkIGlucHV0IGNvbGxlY3Rpb24gZWxlbWVudHMgYXJlIGFkZGVkIHRvIGl0LlxuICogQHJldHVybiB7Kn0gQSBjb2xsZWN0aW9uIG9mIGEgdHlwZSBkZXRlcm1pbmVkIGJ5IHRoZSBwYXNzZWQgcmVkdWNlci4gVGhlXG4gKiAgICAgZWxlbWVudHMgb2YgdGhpcyBjb2xsZWN0aW9uIGFyZSB0aGUgcmVzdWx0cyBmcm9tIHRoZSB0cmFuc2Zvcm1lciBmdW5jdGlvblxuICogICAgIGJlaW5nIGFwcGxpZWQgdG8gZWFjaCBlbGVtZW50IG9mIHRoZSBpbnB1dCBjb2xsZWN0aW9uLlxuICovXG5mdW5jdGlvbiB0cmFuc2R1Y2UoY29sbGVjdGlvbiwgeGZvcm0sIHJlZHVjZXIsIGluaXQpIHtcbiAgY29uc3QgciA9IGlzRnVuY3Rpb24ocmVkdWNlcikgPyB0b1JlZHVjZXIocmVkdWNlcikgOiByZWR1Y2VyO1xuICBjb25zdCBpID0gaW5pdCA/PyByW3AuaW5pdF0oKTtcbiAgY29uc3QgeGYgPSB4Zm9ybSA/IHhmb3JtKHIpIDogcjtcbiAgcmV0dXJuIHJlZHVjZShjb2xsZWN0aW9uLCB4ZiwgaSk7XG59XG5cbi8qKlxuICogVHJhbnNmb3JtcyB0aGUgZWxlbWVudHMgb2YgdGhlIGlucHV0IGNvbGxlY3Rpb24gYW5kIHJlZHVjZXMgdGhlbSBpbnRvIGEgbmV3XG4gKiBhcnJheS5cbiAqXG4gKiBUaGUgdHJhbnNmb3JtZXIgaXMgb3B0aW9uYWwuIElmIGl0IGlzbid0IHByZXNlbnQsIHRoaXMgZnVuY3Rpb24ganVzdCBjb252ZXJ0c1xuICogdGhlIGlucHV0IGNvbGxlY3Rpb24gaW50byBhbiBhcnJheS5cbiAqXG4gKiBgYGBcbiAqIGltcG9ydCB7IGFzQXJyYXksIG1hcCB9IGZyb20gXCJAY2hhbmtvL3hkdWNlXCI7XG4gKlxuICogY29uc3QgeGZvcm0gPSBtYXAoeCA9PiB4ICsgMSk7XG4gKlxuICogbGV0IHJlc3VsdCA9IGFzQXJyYXkoWzEsIDIsIDMsIDQsIDVdLCB4Zm9ybSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQpOyAgIC8vIC0+IFsyLCAzLCA0LCA1LCA2XVxuICpcbiAqIHJlc3VsdCA9IGFzQXJyYXkoJzEyMzQ1JywgeGZvcm0pO1xuICogY29uc29sZS5sb2cocmVzdWx0KTsgICAvLyAtPiBbMiwgMywgNCwgNSwgNl1cbiAqXG4gKiByZXN1bHQgPSBhc0FycmF5KCcxMjM0NScpO1xuICogY29uc29sZS5sb2cocmVzdWx0KTsgICAvLyAtPiBbMSwgMiwgMywgNCwgNV1cbiAqXG4gKiByZXN1bHQgPSBhc0FycmF5KHthOiAxLCBiOiAyfSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQpOyAgIC8vIC0+IFt7IGE6IDEgfSwgeyBiOiAyIH1dXG4gKiBgYGBcbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcGFyYW0ge21vZHVsZTp4ZHVjZS10b29scy5JdGVyYWJsZX0gY29sbGVjdGlvbiBUaGUgaW5wdXQgY29sbGVjdGlvbi4gVGhlIG9ubHlcbiAqICAgICByZXF1aXJlbWVudCBvZiB0aGlzIGNvbGxlY3Rpb24gaXMgdGhhdCBpdCBpbXBsZW1lbnQgdGhlIGBpdGVyYWJsZWBcbiAqICAgICBwcm90b2NvbC4gU3BlY2lhbCBzdXBwb3J0IGlzIHByb3ZpZGVkIGJ5IHRoZSBsaWJyYXJ5IGZvciBvYmplY3RzLCBzbyB0aGV5XG4gKiAgICAgY2FuIGFsc28gYmUgdXNlZC5cbiAqIEBwYXJhbSB7bW9kdWxlOnhkdWNlLXRvb2xzLlRyYW5zZHVjZXJGdW5jdGlvbn0gW3hmb3JtXSBBIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyBhXG4gKiAgICAgdHJhbnNkdWNlciBvYmplY3QgdGhhdCBkZWZpbmVzIHRoZSB0cmFuc2Zvcm1hdGlvbiBiZWluZyBkb25lIHRvIHRoZSBpbnB1dFxuICogICAgIGNvbGxlY3Rpb24ncyBlbGVtZW50cy4gQW55IG9mIHRoZSB0cmFuc2R1Y2VycyBpbiB0aGVcbiAqICAgICB7QGxpbmsgbW9kdWxlOnhkdWNlfHhkdWNlfSBtb2R1bGUgY2FuIHByb2R1Y2UgYSBzdWl0YWJsZSB0cmFuc2R1Y2VyXG4gKiAgICAgZnVuY3Rpb24uIElmIHRoaXMgaXNuJ3QgcHJlc2VudCwgdGhlIGlucHV0IGNvbGxlY3Rpb24gd2lsbCBzaW1wbHkgYmVcbiAqICAgICByZWR1Y2VkIGludG8gYW4gYXJyYXkgd2l0aG91dCB0cmFuc2Zvcm1hdGlvbi5cbiAqIEByZXR1cm4ge0FycmF5fSBBbiBhcnJheSBjb250YWluaW5nIGFsbCBvZiB0aGUgdHJhbnNmb3JtZWQgdmFsdWVzIGZyb20gdGhlXG4gKiAgICAgaW5wdXQgY29sbGVjdGlvbiBlbGVtZW50cy5cbiAqL1xuZnVuY3Rpb24gYXNBcnJheShjb2xsZWN0aW9uLCB4Zm9ybSkge1xuICByZXR1cm4gdHJhbnNkdWNlKGNvbGxlY3Rpb24sIHhmb3JtLCB0b1JlZHVjZXIoW10pKTtcbn1cblxuLyoqXG4gKiBUcmFuc2Zvcm1zIHRoZSBlbGVtZW50cyBvZiB0aGUgaW5wdXQgY29sbGVjdGlvbiBhbmQgcmVkdWNlcyB0aGVtIGludG8gYSBuZXdcbiAqIG9iamVjdC5cbiAqXG4gKiBUaGUgdHJhbnNmb3JtZXIgaXMgb3B0aW9uYWwuIElmIGl0IGlzbid0IHByZXNlbnQsIHRoaXMgZnVuY3Rpb24ganVzdCBjb252ZXJ0c1xuICogdGhlIGlucHV0IGNvbGxlY3Rpb24gaW50byBhbiBvYmplY3QuIFdoZW4gdGhpcyBoYXBwZW5zLCBpZiB0aGUgaW5wdXRcbiAqIGNvbGxlY3Rpb24gaXMgbm90IGFuIG9iamVjdCBvciBhbiBhcnJheSBvZiBvYmplY3RzLCBudW1iZXJzIHN0YXJ0aW5nIGF0IGAwYFxuICogd2lsbCBiZSB1c2VkIGFzIGtleXMgZm9yIHRoZSB2YWx1ZXMgcHJvdmlkZWQgYnkgdGhlIGlucHV0IGNvbGxlY3Rpb24uXG4gKlxuICogYGBgXG4gKiBpbXBvcnQgeyBhc09iamVjdCwga3YsIG1hcCB9IGZyb20gXCJAY2hhbmtvL3hkdWNlXCI7XG4gKlxuICogY29uc3QgZm4gPSBwcm9wID0+IHtcbiAqICAgY29uc3QgeyBrLCB2IH0gPSBrdihwcm9wKTtcbiAqICAgcmV0dXJuIHsgW2tdOiB2ICsgMSB9O1xuICogfVxuICogY29uc3QgeGZvcm0gPSBtYXAoZm4pO1xuICpcbiAqIGxldCByZXN1bHQgPSBhc09iamVjdCh7IGE6IDEsIGI6IDIgfSwgeGZvcm0pO1xuICogY29uc29sZS5sb2cocmVzdWx0KTsgICAvLyAtPiB7IGE6IDIsIGI6IDMgfVxuICpcbiAqIHJlc3VsdCA9IGFzT2JqZWN0KFt7IGE6IDEgfSwgeyBiOiAyIH1dLCB4Zm9ybSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQpOyAgIC8vIC0+IHsgYTogMiwgYjogMyB9XG4gKlxuICogcmVzdWx0ID0gYXNPYmplY3QoWzEsIDIsIDMsIDQsIDVdKTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdCk7ICAgLy8gLT4geyAwOiAxLCAxOiAyLCAyOiAzLCAzOiA0LCA0OiA1IH1cbiAqXG4gKiByZXN1bHQgPSBhc09iamVjdChbeyBhOiAxIH0sIHsgYjogMiB9XSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQpOyAgIC8vIC0+IHsgYTogMSwgYjogMiB9XG4gKlxuICogcmVzdWx0ID0gYXNPYmplY3QoXCJoZWxsb1wiKTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdCk7ICAgLy8gLT4geyAwOiBcImhcIiwgMTogXCJlXCIsIDI6IFwibFwiLCAzOiBcImxcIiwgNDogXCJvXCIgfVxuICogYGBgXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHBhcmFtIHttb2R1bGU6eGR1Y2UtdG9vbHMuSXRlcmFibGV9IGNvbGxlY3Rpb24gVGhlIGlucHV0IGNvbGxlY3Rpb24uIFRoZSBvbmx5XG4gKiAgICAgcmVxdWlyZW1lbnQgb2YgdGhpcyBjb2xsZWN0aW9uIGlzIHRoYXQgaXQgaW1wbGVtZW50IHRoZSBgaXRlcmFibGVgXG4gKiAgICAgcHJvdG9jb2wuIFNwZWNpYWwgc3VwcG9ydCBpcyBwcm92aWRlZCBieSB0aGUgbGlicmFyeSBmb3Igb2JqZWN0cywgc28gdGhleVxuICogICAgIGNhbiBhbHNvIGJlIHVzZWQuXG4gKiBAcGFyYW0ge21vZHVsZTp4ZHVjZS10b29scy5UcmFuZHVjZXJ9IFt4Zm9ybV0gQSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgYSB0cmFuc2R1Y2VyXG4gKiAgICAgb2JqZWN0IHRoYXQgZGVmaW5lcyB0aGUgdHJhbnNmb3JtYXRpb24gYmVpbmcgZG9uZSB0byB0aGUgaW5wdXRcbiAqICAgICBjb2xsZWN0aW9uJ3MgZWxlbWVudHMuIEFueSBvZiB0aGUgdHJhbnNkdWNlcnMgaW4gdGhlXG4gKiAgICAge0BsaW5rIG1vZHVsZTp4ZHVjZXx4ZHVjZX0gbW9kdWxlIGNhbiBwcm9kdWNlIGEgc3VpdGFibGUgdHJhbnNkdWNlclxuICogICAgIGZ1bmN0aW9uLiBJZiB0aGlzIGlzbid0IHByZXNlbnQsIHRoZSBpbnB1dCBjb2xsZWN0aW9uIHdpbGwgc2ltcGx5IGJlXG4gKiAgICAgcmVkdWNlZCBpbnRvIGFuIG9iamVjdCB3aXRob3V0IHRyYW5zZm9ybWF0aW9uLlxuICogQHJldHVybiB7T2JqZWN0fSBBbiBvYmplY3QgY29udGFpbmluZyBhbGwgb2YgdGhlIHRyYW5zZm9ybWVkIHZhbHVlcyBmcm9tIHRoZVxuICogICAgIGlucHV0IGNvbGxlY3Rpb24gZWxlbWVudHMuXG4gKi9cbmZ1bmN0aW9uIGFzT2JqZWN0KGNvbGxlY3Rpb24sIHhmb3JtKSB7XG4gIHJldHVybiB0cmFuc2R1Y2UoY29sbGVjdGlvbiwgeGZvcm0sIHRvUmVkdWNlcih7fSkpO1xufVxuXG4vKipcbiAqIFRyYW5zZm9ybXMgdGhlIGVsZW1lbnRzIG9mIHRoZSBpbnB1dCBjb2xsZWN0aW9uIGFuZCByZWR1Y2VzIHRoZW0gaW50byBhIG5ld1xuICogc3RyaW5nLlxuICpcbiAqIFRoZSB0cmFuc2Zvcm1lciBpcyBvcHRpb25hbC4gSWYgaXQgaXNuJ3QgcHJlc2VudCwgdGhpcyBmdW5jdGlvbiBqdXN0IGNvbnZlcnRzXG4gKiB0aGUgaW5wdXQgY29sbGVjdGlvbiBpbnRvIGFuIHN0cmluZy4gSWYgdGhpcyBpcyB0aGUgY2FzZSBhbmQgdGhlIGlucHV0XG4gKiBjb2xsZWN0aW9uIGlzIGFuIG9iamVjdCwgb25seSB0aGUgdmFsdWVzIHdpbGwgYmUgY29uY2F0ZW5hdGVkIGludG8gYSBzdHJpbmcuXG4gKlxuICogT3RoZXJ3aXNlLCB0cmFuc2Zvcm1pbmcgb2JqZWN0cyBpbnRvIHN0cmluZ3Mgb25seSBtYWtlcyBtdWNoIHNlbnNlIGlmIHRoZVxuICogdHJhbnNkdWNlciBwcm9kdWNlcyBvbmx5IGEgc2luZ2xlIG91dHB1dCBmcm9tIGVhY2ggb2YgdGhlIG9iamVjdHMga2V5L3ZhbHVlXG4gKiBwYWlycy5cbiAqXG4gKiBgYGBcbiAqIGltcG9ydCB7IHRyYW5zZHVjZSwga2V5LCBtYXAgfSBmcm9tIFwiQGNoYW5rby94ZHVjZVwiO1xuICpcbiAqIGNvbnN0IHhmb3JtID0gbWFwKHggPT4geC50b1VwcGVyQ2FzZSgpKTtcbiAqXG4gKiBsZXQgcmVzdWx0ID0gYXNTdHJpbmcoJ2hlbGxvJywgeGZvcm0pO1xuICogY29uc29sZS5sb2cocmVzdWx0KTsgICAvLyAtPiBcIkhFTExPXCJcbiAqXG4gKiByZXN1bHQgPSBhc1N0cmluZyhbJ2gnLCAnZScsICdsJywgJ2wnLCAnbyddLCB4Zm9ybSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQpOyAgIC8vIC0+IFwiSEVMTE9cIlxuICpcbiAqIHJlc3VsdCA9IGFzU3RyaW5nKHsgYTogMSwgYzogMiwgYjogMyB9LCBtYXAoa2V5KSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQpOyAgIC8vIC0+IFwiYWNiXCJcbiAqXG4gKiByZXN1bHQgPSBhc1N0cmluZyhbMSwgMiwgMywgNCwgNV0pO1xuICogY29uc29sZS5sb2cocmVzdWx0KTsgICAvLyAtPiBcIjEyMzQ1XCJcbiAqXG4gKiByZXN1bHQgPSBhc1N0cmluZyh7IGE6IDEsIGM6IDIsIGI6IDMgfSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQpOyAgIC8vIC0+IFwiMTIzXCJcbiAqIGBgYFxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwYXJhbSB7bW9kdWxlOnhkdWNlLXRvb2xzLkl0ZXJhYmxlfSBjb2xsZWN0aW9uIFRoZSBpbnB1dCBjb2xsZWN0aW9uLiBUaGUgb25seVxuICogICAgIHJlcXVpcmVtZW50IG9mIHRoaXMgY29sbGVjdGlvbiBpcyB0aGF0IGl0IGltcGxlbWVudCB0aGUgYGl0ZXJhYmxlYFxuICogICAgIHByb3RvY29sLiBTcGVjaWFsIHN1cHBvcnQgaXMgcHJvdmlkZWQgYnkgdGhlIGxpYnJhcnkgZm9yIG9iamVjdHMsIHNvIHRoZXlcbiAqICAgICBjYW4gYWxzbyBiZSB1c2VkLlxuICogQHBhcmFtIHttb2R1bGU6eGR1Y2UtdG9vbHMuVHJhbnNkdWNlckZ1bmN0aW9ufSBbeGZvcm1dIEEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIGFcbiAqICAgICB0cmFuc2R1Y2VyIG9iamVjdCB0aGF0IGRlZmluZXMgdGhlIHRyYW5zZm9ybWF0aW9uIGJlaW5nIGRvbmUgdG8gdGhlIGlucHV0XG4gKiAgICAgY29sbGVjdGlvbidzIGVsZW1lbnRzLiBBbnkgb2YgdGhlIHRyYW5zZHVjZXJzIGluIHRoZVxuICogICAgIHtAbGluayBtb2R1bGU6dHJhbnNkdWNlcnN8dHJhbnNkdWNlcnN9IG1vZHVsZSBjYW4gcHJvZHVjZSBhIHN1aXRhYmxlXG4gKiAgICAgdHJhbnNkdWNlciBmdW5jdGlvbi4gSWYgdGhpcyBpc24ndCBwcmVzZW50LCB0aGUgaW5wdXQgY29sbGVjdGlvbiB3aWxsXG4gKiAgICAgc2ltcGx5IGJlIHJlZHVjZWQgaW50byBhIHN0cmluZyB3aXRob3V0IHRyYW5zZm9ybWF0aW9uLlxuICogQHJldHVybiB7U3RyaW5nfSBBIHN0cmluZyBjb250YWluaW5nIGFsbCBvZiB0aGUgdHJhbnNmb3JtZWQgdmFsdWVzIGZyb20gdGhlXG4gKiAgICAgaW5wdXQgY29sbGVjdGlvbiBlbGVtZW50cy5cbiAqL1xuZnVuY3Rpb24gYXNTdHJpbmcoY29sbGVjdGlvbiwgeGZvcm0pIHtcbiAgcmV0dXJuIHRyYW5zZHVjZShjb2xsZWN0aW9uLCB4Zm9ybSwgdG9SZWR1Y2VyKFwiXCIpKTtcbn1cblxuLyoqXG4gKiBUcmFuc2Zvcm1zIHRoZSBlbGVtZW50cyBvZiB0aGUgaW5wdXQgY29sbGVjdGlvbiBhbmQgcmVkdWNlcyB0aGVtIGludG8gYSBuZXdcbiAqIGl0ZXJhdG9yLlxuICpcbiAqIFRoZSB0cmFuc2Zvcm1lciBpcyBvcHRpb25hbC4gSWYgaXQgaXNuJ3QgcHJlc2VudCwgdGhpcyBmdW5jdGlvbiBqdXN0IGNvbnZlcnRzXG4gKiB0aGUgaW5wdXQgY29sbGVjdGlvbiBpbnRvIGFuIGl0ZXJhdG9yLlxuICpcbiAqICooVGhlIHJlc3VsdHMgaGVyZSBhcmUgc2hvd24gcGFzc2VkIHRocm91Z2ggYGFzQXJyYXlgIGJlY2F1c2UgdGhlcmUncyBub1xuICogcHJpbnRhYmxlIHJlcHJlc2VudGF0aW9uIG9mIGFuIGl0ZXJhdG9yIHRvIHNob3cuIFRoZSBgYXNBcnJheWAgY2FsbHMgYXJlIGZvclxuICogZGVtb25zdHJhdGlvbiBwdXJwb3NlcyBvbmx5LikqXG4gKlxuICogYGBgXG4gKiBpbXBvcnQgeyBhc0l0ZXJhdG9yLCBhc0FycmF5LCBtYXAgfSBmcm9tIFwiQGNoYW5rby94ZHVjZVwiO1xuICpcbiAqIGNvbnN0IHhmb3JtID0gbWFwKHggPT4geCArIDEpO1xuICogZnVuY3Rpb24qIGZpdmUoKSB7XG4gKiAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDU7ICsraSkge1xuICogICAgIHlpZWxkIGk7XG4gKiAgIH1cbiAqIH07XG4gKlxuICogbGV0IHJlc3VsdCA9IGFzSXRlcmF0b3IoZml2ZSgpLCB4Zm9ybSk7XG4gKiBjb25zb2xlLmxvZyhhc0FycmF5KHJlc3VsdCkpOyAgIC8vIC0+IFsyLCAzLCA0LCA1LCA2XVxuICpcbiAqIHJlc3VsdCA9IGFzSXRlcmF0b3IoWzEsIDIsIDMsIDQsIDVdLCB4Zm9ybSk7XG4gKiBjb25zb2xlLmxvZyhhc0FycmF5KHJlc3VsdCkpOyAgIC8vIC0+IFsyLCAzLCA0LCA1LCA2XVxuICpcbiAqIHJlc3VsdCA9IGFzSXRlcmF0b3IoWzEsIDIsIDMsIDQsIDVdKTtcbiAqIGNvbnNvbGUubG9nKGFzQXJyYXkocmVzdWx0KSk7ICAgLy8gLT4gWzEsIDIsIDMsIDQsIDVdXG4gKlxuICogcmVzdWx0ID0gYXNJdGVyYXRvcih7YTogMSwgYjogMn0pO1xuICogY29uc29sZS5sb2coYXNBcnJheShyZXN1bHQpKTsgICAvLyAtPiBbeyBhOiAxIH0sIHsgYjogMiB9XVxuICogYGBgXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHBhcmFtIHttb2R1bGU6eGR1Y2UtdG9vbHMuSXRlcmFibGV9IGNvbGxlY3Rpb24gVGhlIGlucHV0IGNvbGxlY3Rpb24uIFRoZSBvbmx5XG4gKiAgICAgcmVxdWlyZW1lbnQgb2YgdGhpcyBjb2xsZWN0aW9uIGlzIHRoYXQgaXQgaW1wbGVtZW50IHRoZSBgaXRlcmFibGVgXG4gKiAgICAgcHJvdG9jb2wuIFNwZWNpYWwgc3VwcG9ydCBpcyBwcm92aWRlZCBieSB0aGUgbGlicmFyeSBmb3Igb2JqZWN0cywgc28gdGhleVxuICogICAgIGNhbiBhbHNvIGJlIHVzZWQuXG4gKiBAcGFyYW0ge21vZHVsZTp4ZHVjZS10b29scy5UcmFuc2R1Y2VyRnVuY3Rpb259IFt4Zm9ybV0gQSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgYVxuICogICAgIHRyYW5zZHVjZXIgb2JqZWN0IHRoYXQgZGVmaW5lcyB0aGUgdHJhbnNmb3JtYXRpb24gYmVpbmcgZG9uZSB0byB0aGUgaW5wdXRcbiAqICAgICBjb2xsZWN0aW9uJ3MgZWxlbWVudHMuIEFueSBvZiB0aGUgdHJhbnNkdWNlcnMgaW4gdGhlXG4gKiAgICAge0BsaW5rIG1vZHVsZTp0cmFuc2R1Y2Vyc3x0cmFuc2R1Y2Vyc30gbW9kdWxlIGNhbiBwcm9kdWNlIGEgc3VpdGFibGVcbiAqICAgICB0cmFuc2R1Y2VyIGZ1bmN0aW9uLiBJZiB0aGlzIGlzbid0IHByZXNlbnQsIHRoZSBpbnB1dCBjb2xsZWN0aW9uIHdpbGxcbiAqICAgICBzaW1wbHkgYmUgcmVkdWNlZCBpbnRvIGFuIGl0ZXJhdG9yIHdpdGhvdXQgdHJhbnNmb3JtYXRpb24uXG4gKiBAcmV0dXJuIHttb2R1bGU6eGR1Y2UtdG9vbHMuSXRlcmF0b3J9IEFuIGl0ZXJhdG9yIGNvbnRhaW5pbmcgYWxsIG9mIHRoZSB0cmFuc2Zvcm1lZFxuICogICAgIHZhbHVlcyBmcm9tIHRoZSBpbnB1dCBjb2xsZWN0aW9uIGVsZW1lbnRzLlxuICovXG5mdW5jdGlvbiBhc0l0ZXJhdG9yKGNvbGxlY3Rpb24sIHhmb3JtKSB7XG4gIHJldHVybiB4Zm9ybSA/IHRyYW5zZHVjaW5nSXRlcmF0b3IoY29sbGVjdGlvbiwgeGZvcm0pIDogaXRlcmF0b3IoY29sbGVjdGlvbik7XG59XG5cbi8qKlxuICogVHJhbnNmb3JtcyB0aGUgZWxlbWVudHMgb2YgdGhlIGlucHV0IGNvbGxlY3Rpb24gYW5kIHJlZHVjZXMgdGhlbSBpbnRvIGEgbmV3XG4gKiBjb2xsZWN0aW9uIG9mIHRoZSBzYW1lIHR5cGUuXG4gKlxuICogVGhpcyBpcyB0aGUgaGlnaGVzdCBsZXZlbCBvZiB0aGUgdGhyZWUgbWFpbiB0cmFuc2R1Y3Rpb24gZnVuY3Rpb25zXG4gKiAoYHNlcXVlbmNlYCwgYHtAbGluayBtb2R1bGU6eGR1Y2UuaW50b3xpbnRvfWAsIGFuZFxuICogYHtAbGluayBtb2R1bGU6eGR1Y2UudHJhbnNkdWNlfHRyYW5zZHVjZX1gKS4gSXQgY3JlYXRlcyBhIG5ldyBjb2xsZWN0aW9uIG9mXG4gKiB0aGUgc2FtZSB0eXBlIGFzIHRoZSBpbnB1dCBjb2xsZWN0aW9uIGFuZCByZWR1Y2VzIHRoZSB0cmFuc2Zvcm1lZCBlbGVtZW50c1xuICogaW50byBpdC4gQWRkaXRpb25hbGx5LCB1bmxpa2UgYHtAbGluayBtb2R1bGU6eGR1Y2UuaW50b3xpbnRvfWAgYW5kXG4gKiBge0BsaW5rIG1vZHVsZTp4ZHVjZS50cmFuc2R1Y2V8dHJhbnNkdWNlfWAsIHRoaXMgZnVuY3Rpb24gaXMgY2FwYWJsZSBvZlxuICogcHJvZHVjaW5nIGFuIGl0ZXJhdG9yIChhcyBsb25nIGFzIHRoZSBpbnB1dCBpcyBhbiBpdGVyYXRvcikuXG4gKlxuICogVGhlIGlucHV0IGNvbGxlY3Rpb24gbXVzdCBub3Qgb25seSBpbXBsZW1lbnQgdGhlIGBpdGVyYXRvcmAgcHJvdG9jb2wgKGFzIGluXG4gKiB0aGUgbGFzdCB0d28gZnVuY3Rpb25zKSBidXQgYWxzbyB0aGUgYGluaXRgLCBgcmVzdWx0YCwgYW5kIGBzdGVwYCB0cmFuc2R1Y2VyXG4gKiBwcm90b2NvbHMuIFNwZWNpYWwgc3VwcG9ydCBpcyBwcm92aWRlZCBmb3IgYXJyYXlzLCBzdHJpbmdzLCBvYmplY3RzLCBhbmRcbiAqIGl0ZXJhdG9ycywgc28gdGhleSBuZWVkIG5vdCBpbXBsZW1lbnQgYW55IHByb3RvY29sLlxuICpcbiAqIFRoZSBvYnZpb3VzIGxpbWl0YXRpb24gb2YgdGhpcyBmdW5jdGlvbiBpcyB0aGF0IHRoZSB0eXBlIG9mIG91dHB1dCBjb2xsZWN0aW9uXG4gKiBjYW5ub3QgYmUgY2hvc2VuLiBTaW5jZSBpdCBpcyBhbHdheXMgdGhlIHNhbWUgYXMgdGhlIGlucHV0IGNvbGxlY3Rpb24sIHRoaXNcbiAqIGZ1bmN0aW9uIGNhbm5vdCBiZSB1c2VkIHRvIGNvbnZlcnQgYSBjb2xsZWN0aW9uIGludG8gYSBkaWZmZXJlbnQgdHlwZS5cbiAqXG4gKiBgYGBcbiAqIGltcG9ydCB7IHNlcXVlbmNlLCBtYXAgfSBmcm9tIFwiQGNoYW5rby94ZHVjZVwiO1xuICpcbiAqIGNvbnN0IHhmb3JtID0gbWFwKHggPT4geCArIDEpO1xuICpcbiAqIGxldCByZXN1bHQgPSBzZXF1ZW5jZShbMSwgMiwgMywgNCwgNV0sIHhmb3JtKTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdCk7ICAgLy8gLT4gcmVzdWx0ID0gWzIsIDMsIDQsIDUsIDZdXG4gKlxuICogcmVzdWx0ID0gc2VxdWVuY2UoJzEyMzQ1JywgeGZvcm0pO1xuICogY29uc29sZS5sb2cocmVzdWx0KTsgICAvLyAtPiByZXN1bHQgPSAnMjM0NTYnXG4gKiBgYGBcbiAqXG4gKiBUaGVzZSBleGFtcGxlcyBhcmUgaWRlbnRpY2FsIHRvIHNvbWUgb2YgdGhlIGV4YW1wbGVzIGZyb20gdGhlIGBhc1hgXG4gKiBmdW5jdGlvbnMuIE90aGVyIGV4YW1wbGVzIGFyZSBub3QgcG9zc2libGUgd2l0aCBgc2VxdWVuY2VgIGJlY2F1c2UgdGhleSBoYXZlXG4gKiBkaWZmZXJlbnQgaW5wdXQgYW5kIG91dHB1dCBjb2xsZWN0aW9uIHR5cGVzLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwYXJhbSB7bW9kdWxlOnhkdWNlLXRvb2xzLlJlZHVjaWJsZUl0ZXJhYmxlfSBjb2xsZWN0aW9uIFRoZSBpbnB1dCBjb2xsZWN0aW9uLiBUaGlzXG4gKiAgICAgbXVzdCBpbXBsZW1lbnQgdGhlIGBpdGVyYXRvcmAsIGBpbml0YCwgYHJlc3VsdGAsIGFuZCBgc3RlcGAgcHJvdG9jb2xzLlxuICogICAgIFNwZWNpYWwgc3VwcG9ydCBpcyBwcm92aWRlZCBmb3IgYXJyYXlzLCBzdHJpbmdzLCBvYmplY3RzLCBhbmQgaXRlcmF0b3JzLFxuICogICAgIHNvIHRoZXkgZG8gbm90IGhhdmUgdG8gaW1wbGVtZW50IGFueSBwcm90b2NvbHMuXG4gKiBAcGFyYW0ge21vZHVsZTp4ZHVjZS10b29scy5UcmFuc2R1Y2VyRnVuY3Rpb259IHhmb3JtIEEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIGFcbiAqICAgICB0cmFuc2R1Y2VyIG9iamVjdCB0aGF0IGRlZmluZXMgdGhlIHRyYW5zZm9ybWF0aW9uIGJlaW5nIGRvbmUgdG8gdGhlIGlucHV0XG4gKiAgICAgY29sbGVjdGlvbidzIGVsZW1lbnRzLiBBbnkgb2YgdGhlIHRyYW5zZHVjZXJzIGluIHRoZVxuICogICAgIHtAbGluayBtb2R1bGU6eGR1Y2UtdG9vbHMudHJhbnNkdWNlcnN8dHJhbnNkdWNlcnN9IG1vZHVsZSBjYW4gcHJvZHVjZSBhIHN1aXRhYmxlXG4gKiAgICAgdHJhbnNkdWNlciBmdW5jdGlvbi5cbiAqIEByZXR1cm4ge21vZHVsZTp4ZHVjZS10b29scy5SZWR1Y2libGVJdGVyYWJsZX0gQSBjb2xsZWN0aW9uIG9mIHRoZSBzYW1lIHR5cGUgYXMgdGhlXG4gKiAgICAgaW5wdXQgY29sbGVjdGlvbiwgY29udGFpbmluZyBhbGwgb2YgdGhlIHRyYW5zZm9ybWVkIHZhbHVlcyBmcm9tIHRoZSBpbnB1dFxuICogICAgIGNvbGxlY3Rpb24gZWxlbWVudHMuXG4gKi9cbmZ1bmN0aW9uIHNlcXVlbmNlKGNvbGxlY3Rpb24sIHhmb3JtKSB7XG4gIHN3aXRjaCAodHJ1ZSkge1xuICAgIGNhc2UgaXNBcnJheShjb2xsZWN0aW9uKTpcbiAgICAgIHJldHVybiBhc0FycmF5KGNvbGxlY3Rpb24sIHhmb3JtKTtcbiAgICBjYXNlIGlzT2JqZWN0KGNvbGxlY3Rpb24pOlxuICAgICAgcmV0dXJuIGFzT2JqZWN0KGNvbGxlY3Rpb24sIHhmb3JtKTtcbiAgICBjYXNlIGlzU3RyaW5nKGNvbGxlY3Rpb24pOlxuICAgICAgcmV0dXJuIGFzU3RyaW5nKGNvbGxlY3Rpb24sIHhmb3JtKTtcbiAgICBjYXNlIGlzSW1wbGVtZW50ZWQoY29sbGVjdGlvbiwgXCJzdGVwXCIpOlxuICAgICAgcmV0dXJuIHRyYW5zZHVjZShjb2xsZWN0aW9uLCB4Zm9ybSwgY29sbGVjdGlvbik7XG4gICAgY2FzZSBpc0ltcGxlbWVudGVkKGNvbGxlY3Rpb24sIFwiaXRlcmF0b3JcIik6XG4gICAgICByZXR1cm4gYXNJdGVyYXRvcihjb2xsZWN0aW9uLCB4Zm9ybSk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IEVycm9yKGBDYW5ub3Qgc2VxdWVuY2UgY29sbGVjdGlvbjogJHtjb2xsZWN0aW9ufWApO1xuICB9XG59XG5cbi8qKlxuICogVHJhbnNmb3JtcyB0aGUgZWxlbWVudHMgb2YgdGhlIGlucHV0IGNvbGxlY3Rpb24gYW5kIHJlZHVjZXMgdGhlbSBpbnRvIHRoZVxuICogdGFyZ2V0IGNvbGxlY3Rpb24uXG4gKlxuICogVGhpcyBpcyBtdWNoIGxpa2UgYHtAbGluayBtb2R1bGU6eGR1Y2UudHJhbnNkdWNlfHRyYW5zZHVjZX1gLCBleGNlcHQgdGhhdFxuICogaW5zdGVhZCBvZiBleHBsaWNpdGx5IHByb3ZpZGluZyBhIHJlZHVjZXIgKGFuZCBwZXJoYXBzIGFuIGluaXRpYWxcbiAqIGNvbGxlY3Rpb24pLCB0aGUgdGFyZ2V0IGNvbGxlY3Rpb24gYWN0cyBhcyBhIHJlZHVjZXIgaXRzZWxmLiBUaGlzIHJlcXVpcmVzXG4gKiB0aGF0IHRoZSBjb2xsZWN0aW9uIGltcGxlbWVudCB0aGUgYGluaXRgLCBgcmVzdWx0YCwgYW5kIGBzdGVwYCB0cmFuc2R1Y2VyXG4gKiBwcm90b2NvbCBmdW5jdGlvbnMuXG4gKlxuICogSWYgbm8gdHJhbnNkdWNlciBmdW5jdGlvbiBpcyBwcm92aWRlZCwgdGhlIGlucHV0IGNvbGxlY3Rpb24gZWxlbWVudHMgYXJlXG4gKiByZWR1Y2VkIGludG8gdGhlIHRhcmdldCBjb2xsZWN0aW9uIHdpdGhvdXQgYmVpbmcgdHJhbnNmb3JtZWQuIFRoaXMgY2FuIGJlXG4gKiB1c2VkIHRvIGNvbnZlcnQgb25lIGtpbmQgb2YgY29sbGVjdGlvbiBpbnRvIGFub3RoZXIuXG4gKlxuICogYGBgXG4gKiBpbXBvcnQgeyBpbnRvLCBtYXAgfSBmcm9tIFwiQGNoYW5rby94ZHVjZVwiO1xuICpcbiAqIGNvbnN0IHhmb3JtID0gbWFwKHggPT4geCArIDEpO1xuICpcbiAqIGxldCByZXN1bHQgPSBpbnRvKFtdLCBbMSwgMiwgMywgNCwgNV0sIHhmb3JtKTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdCk7ICAgLy8gLT4gWzIsIDMsIDQsIDUsIDZdXG4gKlxuICogcmVzdWx0ID0gaW50byhcIlwiLCBbMSwgMiwgMywgNCwgNV0sIHhmb3JtKTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdCk7ICAgLy8gLT4gXCIyMzQ1NlwiXG4gKlxuICogcmVzdWx0ID0gaW50byhbXSwgXCIxMjM0NVwiLCB4Zm9ybSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQpOyAgIC8vIC0+IFsyLCAzLCA0LCA1LCA2XVxuICpcbiAqIHJlc3VsdCA9IGludG8oXCJcIiwgXCIxMjM0NVwiLCB4Zm9ybSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQpOyAgIC8vIC0+IFwiMjM0NTZcIlxuICogYGBgXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHBhcmFtIHttb2R1bGU6eGR1Y2UtdG9vbHMuUmVkdWNpYmxlfSB0YXJnZXQgVGhlIGNvbGxlY3Rpb24gaW50byB3aGljaCBhbGwgb2YgdGhlXG4gKiAgICAgdHJhbnNmb3JtZWQgaW5wdXQgY29sbGVjdGlvbiBlbGVtZW50cyB3aWxsIGJlIHJlZHVjZWQuIFRoaXMgY29sbGVjdGlvblxuICogICAgIG11c3QgaW1wbGVtZW50IHRoZSBgaW5pdGAsIGByZXN1bHRgLCBhbmQgYHN0ZXBgIHByb3RvY29sIGZ1bmN0aW9ucyBmcm9tXG4gKiAgICAgdGhlIHRyYW5zZHVjZXIgcHJvdG9jb2wuIFNwZWNpYWwgc3VwcG9ydCBpcyBwcm92aWRlZCBmb3IgYXJyYXlzLCBzdHJpbmdzLFxuICogICAgIGFuZCBvYmplY3RzLCBzbyB0aGV5IG5lZWQgbm90IGltcGxlbWVudCB0aGUgcHJvdG9jb2wuXG4gKiBAcGFyYW0ge21vZHVsZTp4ZHVjZS10b29scy5JdGVyYWJsZX0gY29sbGVjdGlvbiBUaGUgaW5wdXQgY29sbGVjdGlvbi4gVGhlIG9ubHlcbiAqICAgICByZXF1aXJlbWVudCBvZiB0aGlzIGNvbGxlY3Rpb24gaXMgdGhhdCBpdCBpbXBsZW1lbnQgdGhlIGBpdGVyYXRvcmBcbiAqICAgICBwcm90b2NvbC4gU3BlY2lhbCBzdXBwb3J0IGlzIHByb3ZpZGVkIGJ5IHRoZSBsaWJyYXJ5IGZvciBvYmplY3RzLCB0byB0aGV5XG4gKiAgICAgY2FuIGFsc28gYmUgdXNlZC5cbiAqIEBwYXJhbSB7bW9kdWxlOnhkdWNlLXRvb2xzLlRyYW5zZHVjZXJGdW5jdGlvbn0gW3hmb3JtXSBBIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyBhXG4gKiAgICAgdHJhbnNkdWNlciBvYmplY3QgdGhhdCBkZWZpbmVzIHRoZSB0cmFuc2Zvcm1hdGlvbiBiZWluZyBkb25lIHRvIHRoZSBpbnB1dFxuICogICAgIGNvbGxlY3Rpb24ncyBlbGVtZW50cy4gQW55IG9mIHRoZSB0cmFuc2R1Y2VycyBpbiB0aGVcbiAqICAgICB7QGxpbmsgbW9kdWxlOnhkdWNlfHhkdWNlfSBtbm9kdWxlIGNhbiBwcm9kdWNlIGEgc3VpdGFibGUgdHJhbnNkdWNlclxuICogICAgIGZ1bmN0aW9uLiBJZiB0aGlzIGlzbid0IHByZXNlbnQsIHRoZSBpbnB1dCBjb2xsZWN0aW9uIHdpbGwgc2ltcGx5IGJlXG4gKiAgICAgcmVkdWNlZCBpbnRvIHRoZSB0YXJnZXQgY29sbGVjdGlvbiB3aXRob3V0IHRyYW5zZm9ybWF0aW9uLlxuICogQHJldHVybiB7bW9kdWxlOnhkdWNlLXRvb2xzLlJlZHVjaWJsZX0gVGhlIGB0YXJnZXRgIGNvbGxlY3Rpb24sIHdpdGggYWxsIG9mIHRoZVxuICogICAgIHRyYW5mb3JtZWQgaW5wdXQgY29sbGVjdGlvbiBlbGVtZW50cyByZWR1Y2VkIG9udG8gaXQuXG4gKi9cbmZ1bmN0aW9uIGludG8odGFyZ2V0LCBjb2xsZWN0aW9uLCB4Zm9ybSkge1xuICBzd2l0Y2ggKHRydWUpIHtcbiAgICBjYXNlIGlzQXJyYXkodGFyZ2V0KTpcbiAgICAgIHJldHVybiB0cmFuc2R1Y2UoY29sbGVjdGlvbiwgeGZvcm0sIHRvUmVkdWNlcihbXSksIHRhcmdldCk7XG4gICAgY2FzZSBpc09iamVjdCh0YXJnZXQpOlxuICAgICAgcmV0dXJuIHRyYW5zZHVjZShjb2xsZWN0aW9uLCB4Zm9ybSwgdG9SZWR1Y2VyKHt9KSwgdGFyZ2V0KTtcbiAgICBjYXNlIGlzU3RyaW5nKHRhcmdldCk6XG4gICAgICByZXR1cm4gdHJhbnNkdWNlKGNvbGxlY3Rpb24sIHhmb3JtLCB0b1JlZHVjZXIoXCJcIiksIHRhcmdldCk7XG4gICAgY2FzZSBpc0ltcGxlbWVudGVkKHRhcmdldCwgXCJzdGVwXCIpOlxuICAgICAgcmV0dXJuIHRyYW5zZHVjZShjb2xsZWN0aW9uLCB4Zm9ybSwgdGFyZ2V0LCB0YXJnZXQpO1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBFcnJvcihgQ2Fubm90IHJlZHVjZSBjb2xsZWN0aW9uIGludG8gJHt0YXJnZXR9OiAke2NvbGxlY3Rpb259YCk7XG4gIH1cbn1cblxuLyoqXG4gKiBDb21wb3NlcyB0d28gb3IgbW9yZSB0cmFuc2R1Y2VyIGZ1bmN0aW9ucyBpbnRvIGEgc2luZ2xlIHRyYW5zZHVjZXIgZnVuY3Rpb24uXG4gKlxuICogRWFjaCBmdW5jdGlvbiB0aGF0IHRha2VzIGEgdHJhbnNkdWNlciBmdW5jdGlvblxuICogKGB7QGxpbmsgbW9kdWxlOnhkdWNlLnNlcXVlbmNlfHNlcXVlbmNlfWAsIGB7QGxpbmsgbW9kdWxlOnhkdWNlLmludG98aW50b31gLFxuICogZXRjLikgaXMgb25seSBjYXBhYmxlIG9mIGFjY2VwdGluZyBvbmUgb2YgdGhlbS4gSWYgdGhlcmUgaXMgYSBuZWVkIHRvIGhhdmVcbiAqIHNldmVyYWwgdHJhbnNkdWNlcnMgY2hhaW5lZCB0b2dldGhlciwgdGhlbiB1c2UgYGNvbXBvc2VgIHRvIGNyZWF0ZSBhXG4gKiB0cmFuc2R1Y2VyIGZ1bmN0aW9uIHRoYXQgZG9lcyB3aGF0IGFsbCBvZiB0aGVtIGRvLlxuICpcbiAqIE5PVEU6IEluIGZ1bmN0aW9uYWwgcHJvZ3JhbW1pbmcsIGEgY29tcG9zZSBmdW5jdGlvbiBpcyBnZW5lcmFsbHkgb3JkZXJlZCBzb1xuICogdGhhdCB0aGUgZmlyc3QtZXhlY3V0ZWQgZnVuY3Rpb24gaXMgbGlzdGVkIGxhc3QuIFRoaXMgaXMgZG9uZSBpbiB0aGUgb3Bwb3NpdGVcbiAqIHdheSwgd2l0aCB0aGUgZmlyc3QgdHJhbnNkdWNlciBleGVjdXRpbmcgZmlyc3QsIGV0Yy4gVGhpcyBpcyBhIG1vcmUgbmF0dXJhbFxuICogb3JkZXJpbmcgZm9yIHRyYW5zZHVjZXIgZnVuY3Rpb25zIGJlY2F1c2UgdGhlcmUgaXMgYSB2ZXJ5IHJlYWwgZGlyZWN0aW9uYWxcbiAqIHB1bGwgb2YgZWxlbWVudHMgdGhyb3VnaCBhIGNoYWluIG9mIGNvbXBvc2VkIHRyYW5zZHVjZXIgZnVuY3Rpb25zLlxuICpcbiAqIGBgYFxuICogaW1wb3J0IHsgY29tcG9zZSwgc2VxdWVuY2UgfSBmcm9tIFwiQGNoYW5rby94ZHVjZVwiO1xuICogaW1wb3J0IHsgbWFwLCBmaWx0ZXIsIHRha2UgfSBmcm9tIFwiQGNoYW5rby90cmFuc2R1Y2Vyc1wiO1xuICpcbiAqIGNvbnN0IGFkZDEgPSB4ID0+IHggKyAxO1xuICogY29uc3Qgb2RkID0geCA9PiB4ICUgMiAhPT0gMDtcbiAqXG4gKiBjb25zdCB4Zm9ybSA9IGNvbXBvc2UobWFwKGFkZDEpLCBmaWx0ZXIob2RkKSwgdGFrZSgzKSk7XG4gKlxuICogY29uc3QgcmVzdWx0ID0gc2VxdWVuY2UoWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwXSwgeGZvcm0pO1xuICogY29uc29sZS5sb2cocmVzdWx0KTsgICAvLyAtPiBbMywgNSwgN107XG4gKiBgYGBcbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcGFyYW0gey4uLm1vZHVsZTp4ZHVjZS10b29scy5UcmFuc2R1Y2VyRnVuY3Rpb259IGZucyBPbmUgb3IgbW9yZSBmdW5jdGlvbiB0aGF0IGVhY2hcbiAqICAgICBjcmVhdGUgYSB0cmFuc2R1Y2VyIG9iamVjdCB0aGF0IGRlZmluZXMgdGhlIHRyYW5zZm9ybWF0aW9uIGJlaW5nIGRvbmUgdG9cbiAqICAgICBhIGNvbGxlY3Rpb24ncyBlbGVtZW50cy4gQW55IG9mIHRoZSB0cmFuc2R1Y2VycyBpbiB0aGVcbiAqICAgICB7QGxpbmsgbW9kdWxlOnhkdWNlfHhkdWNlfSBtb2R1bGUgY2FuIHByb2R1Y2UgYSBzdWl0YWJsZSB0cmFuc2R1Y2VyXG4gKiAgICAgZnVuY3Rpb24uXG4gKiBAcmV0dXJuIHttb2R1bGU6eGR1Y2UtdG9vbHMuVHJhbnNkdWNlckZ1bmN0aW9ufSBBIHRyYW5zZHVjZXIgZnVuY3Rpb24gdGhhdCBwcm9kdWNlc1xuICogICAgIGEgdHJhbnNkdWNlciBvYmplY3QgdGhhdCBwZXJmb3JtcyAqYWxsKiBvZiB0aGUgdHJhbnNmb3JtYXRpb25zIG9mIHRoZVxuICogICAgIG9iamVjdHMgcHJvZHVjZWQgYnkgdGhlIGlucHV0IHRyYW5zZHVjZXIgZnVuY3Rpb25zLlxuICovXG5mdW5jdGlvbiBjb21wb3NlKC4uLmZucykge1xuICBjb25zdCByZXZlcnNlZCA9IGZucy5yZXZlcnNlKCk7XG4gIHJldHVybiB2YWx1ZSA9PiByZXZlcnNlZC5yZWR1Y2UoKGFjYywgZm4pID0+IGZuKGFjYyksIHZhbHVlKTtcbn1cblxuZXhwb3J0IHtcbiAgdHJhbnNkdWNlLFxuICBzZXF1ZW5jZSxcbiAgaW50byxcbiAgYXNBcnJheSxcbiAgYXNPYmplY3QsXG4gIGFzU3RyaW5nLFxuICBhc0l0ZXJhdG9yLFxuICBjb21wb3NlLFxuICB0b1JlZHVjZXIsXG4gIHRvRnVuY3Rpb25cbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuaW1wb3J0IHsgcHJvdG9jb2xzIGFzIHAsIHRvVHJhbnNkdWNlciB9IGZyb20gXCJAY2hhbmtvL3hkY29yZVwiO1xuaW1wb3J0IHsgcGFyc2VGdW5jdGlvbkFyZ3MsIHNhbWVWYWx1ZVplcm8gfSBmcm9tIFwibW9kdWxlcy91dGlsc1wiO1xuaW1wb3J0IHsgc2VxdWVuY2UgfSBmcm9tIFwibW9kdWxlcy90cmFuc2R1Y3Rpb25cIjtcblxuZnVuY3Rpb24gdW5pcXVlV2l0aChjb2xsZWN0aW9uLCBmbikge1xuICBjb25zdCBbY29sLCBmdW5jXSA9IHBhcnNlRnVuY3Rpb25BcmdzKGNvbGxlY3Rpb24sIGZuKTtcbiAgcmV0dXJuIGNvbFxuICAgID8gc2VxdWVuY2UoY29sLCB1bmlxdWVXaXRoKGZ1bmMpKVxuICAgIDogeGZvcm0gPT4ge1xuICAgICAgICBjb25zdCB1bmlxdWVzID0gW107XG4gICAgICAgIHJldHVybiB0b1RyYW5zZHVjZXIoKGFjYywgdmFsdWUpID0+IHtcbiAgICAgICAgICBpZiAodW5pcXVlcy5zb21lKHUgPT4gZnVuYyh2YWx1ZSwgdSkpKSB7XG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgIH1cbiAgICAgICAgICB1bmlxdWVzLnB1c2godmFsdWUpO1xuICAgICAgICAgIHJldHVybiB4Zm9ybVtwLnN0ZXBdKGFjYywgdmFsdWUpO1xuICAgICAgICB9LCB4Zm9ybSk7XG4gICAgICB9O1xufVxuXG5mdW5jdGlvbiB1bmlxdWVCeShjb2xsZWN0aW9uLCBmbikge1xuICBjb25zdCBbY29sLCBmdW5jXSA9IHBhcnNlRnVuY3Rpb25BcmdzKGNvbGxlY3Rpb24sIGZuKTtcbiAgcmV0dXJuIHVuaXF1ZVdpdGgoY29sLCAoYSwgYikgPT4gc2FtZVZhbHVlWmVybyhmdW5jKGEpLCBmdW5jKGIpKSk7XG59XG5cbmZ1bmN0aW9uIHVuaXF1ZShjb2xsZWN0aW9uKSB7XG4gIHJldHVybiB1bmlxdWVXaXRoKGNvbGxlY3Rpb24sIHNhbWVWYWx1ZVplcm8pO1xufVxuXG5leHBvcnQgeyB1bmlxdWUsIHVuaXF1ZUJ5LCB1bmlxdWVXaXRoIH07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuLyoqXG4gKiBBIGNvbGxlY3Rpb24gb2YgbWlzY2VsbGFuZW91cyBmdW5jdGlvbnMgdGhhdCBkb24ndCBwYXJ0aWN1bGFybHkgZml0IGFueXdoZXJlXG4gKiBlbHNlLlxuICpcbiAqIEBtb2R1bGUgeGR1Y2UvdXRpbHNcbiAqIEBwcml2YXRlXG4gKi9cblxuaW1wb3J0IHsgaXNOdW1iZXIsIGlzRnVuY3Rpb24gfSBmcm9tIFwiQGNoYW5rby94ZGNvcmVcIjtcblxuLyoqXG4gKiBEZXRlcm1pbmVzIGVxdWFsaXR5IGJ5IHRoZSBTYW1lVmFsdWVaZXJvIG1ldGhvZCwgd2hpY2ggZGVmaW5lcyB0aGF0IGBOYU5gXG4gKiBlcXVhbHMgaXRzZWxmIGFuZCBgKzBgIGVxdWFscyBgLTBgLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBhIFRoZSBmaXJzdCBudW1iZXIgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBiIFRoZSBzZWNvbmQgbnVtYmVyIHRvIGNvbXBhcmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gRWl0aGVyIGB0cnVlYCBpZiB0aGUgdHdvIG51bWJlcnMgYXJlIGVxdWFsLCBvciBgZmFsc2VgIGlmXG4gKiAgICAgdGhleSBhcmUgbm90LlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gc2FtZVZhbHVlWmVybyhhLCBiKSB7XG4gIHJldHVybiBhID09PSBiIHx8IChpc05hTihhKSAmJiBpc05hTihiKSk7XG59XG5cbi8qKlxuICogUGFyc2VzIGFyZ3VtZW50cyBmb3IgdHJhbnNkdWNlcnMgdGhhdCB0YWtlIG51bWJlcnMuIFRoZSB0d28gYXJndW1lbnRzIGFyZVxuICogYSBjb2xsZWN0aW9uIGFuZCBhIG51bWJlciwgYnV0IHRoZSBjb2xsZWN0aW9uIGlzIG9wdGlvbmFsLiBUaGlzIGZ1bmN0aW9uXG4gKiB3b3JrcyBvdXQgd2hldGhlciBhIGNvbGxlY3Rpb24gZXhpc3RzIGFuZCByZXR1cm5zIGEgY29sbGVjdGlvbiAod2hpY2ggbWF5IGJlXG4gKiBgbnVsbGApIGFuZCBhIG51bWJlci5cbiAqXG4gKiBAcGFyYW0geyp9IFtjb2xsZWN0aW9uXSBBbiBvcHRpb25hbCBjb2xsZWN0aW9uIHRoYXQgdGhlIHRyYW5zZHVjZXIgd2lsbCBhY3RcbiAqICAgICB1cG9uLlxuICogQHBhcmFtIHtudW1iZXJ9IG4gQSBudW1iZXIgd2hvc2UgcHVycG9zZSBkZXBlbmRzIG9uIHRoZSB0cmFuc2R1Y2VyLlxuICogQHJldHVybnMge0FycmF5PCosIG51bWJlcj59IEFuIGFycmF5IGNvbnRhaW5pbmcgdGhlIGNvbGxlY3Rpb24gKHdoaWNoIG1heSBiZVxuICogICAgIGBudWxsYCkgYXMgdGhlIGZpcnN0IGVsZW1lbnQgYW5kIHRoZSBudW1iZXIgYXMgdGhlIHNlY29uZC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHBhcnNlTnVtYmVyQXJncyhjb2xsZWN0aW9uLCBuKSB7XG4gIHJldHVybiBpc051bWJlcihjb2xsZWN0aW9uKSA/IFtudWxsLCBjb2xsZWN0aW9uXSA6IFtjb2xsZWN0aW9uLCBuXTtcbn1cblxuLyoqXG4gKiBQYXJzZXMgYXJndW1lbnRzIGZvciB0cmFuc2R1Y2VycyB0aGF0IHRha2UgZnVuY3Rpb25zLiBUaGUgdHdvIGFyZ3VtZW50cyBhcmUgYVxuICogY29sbGVjdGlvbiBhbmQgYSBmdW5jdGlvbiwgYnV0IHRoZSBjb2xsZWN0aW9uIGlzIG9wdGlvbmFsLiBUaGlzIGZ1bmN0aW9uXG4gKiB3b3JrcyBvdXQgd2hpY2ggZXhpc3QgYW5kIHJldHVybnMgYSBjb2xsZWN0aW9uICh3aGljaCBtYXkgYmUgYG51bGxgKSBhbmQgYVxuICogZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHsqfSBbY29sbGVjdGlvbl0gQW4gb3B0aW9uYWwgY29sbGVjdGlvbiB0aGF0IHRoZSB0cmFuc2R1Y2VyIHdpbGwgYWN0XG4gKiAgICAgdXBvbi5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIEEgZnVuY3Rpb24gbWVhbnQgdG8gYWN0IHZpYSB0aGUgdHJhbnNkdWNlci5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHBhcnNlRnVuY3Rpb25BcmdzKGNvbGxlY3Rpb24sIGZuKSB7XG4gIHJldHVybiBpc0Z1bmN0aW9uKGNvbGxlY3Rpb24pID8gW251bGwsIGNvbGxlY3Rpb25dIDogW2NvbGxlY3Rpb24sIGZuXTtcbn1cblxuLyoqXG4gKiBBIGNvbnZlbmllbmNlIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgZmlyc3Qga2V5IGFuZCB2YWx1ZSBpbiBhbiBvYmplY3QgYXMgYVxuICogdHdvLXByb3BlcnR5IG9iamVjdCwgb25lIHByb3BlcnR5IGZvciB0aGUga2V5IGFuZCBvbmUgZm9yIHRoZSB2YWx1ZS4gVGhpcyBpc1xuICogaW50ZW5kZWQgdG8gd29yayB3aXRoIHRoZSB2YWx1ZXMgcHJvdmlkZWQgYnkgYW4gb2JqZWN0IGl0ZXJhdG9yLCBhcyB0aGVcbiAqIHN5bnRheCBvZiBvYmplY3RzIGRvZXNuJ3Qgd29yayB2ZXJ5IG5pY2VseSB3aXRoIHNpbmdsZS1wcm9wZXJ0eSBvYmplY3RzLlxuICpcbiAqIGBgYFxuICogY29uc3Qgb2JqID0geyBjOiAxLCBhOiAyLCBiOiAzIH07XG4gKiBjb25zdCBpdGVyID0gYXNJdGVyYXRvcihvYmopO1xuICpcbiAqIGxldCB2YWx1ZSA9IGl0ZXIubmV4dCgpLnZhbHVlO1xuICogY29uc29sZS5sb2codmFsdWUpOyAgICAgICAgICAgICAvLyAtPiB7IGM6IDEgfVxuICogY29uc29sZS5sb2cocHJvcGVydHkodmFsdWUpKTsgICAvLyAtPiB7IGs6IFwiY1wiLCB2OiAxIH1cbiAqXG4gKiB2YWx1ZSA9IGl0ZXIubmV4dCgpLnZhbHVlO1xuICogY29uc29sZS5sb2codmFsdWUpOyAgICAgICAgICAgICAvLyAtPiB7IGE6IDIgfVxuICogY29uc29sZS5sb2cocHJvcGVydHkodmFsdWUpKTsgICAvLyAtPiB7IGs6IFwiYVwiLCB2OiAyIH1cbiAqXG4gKiB2YWx1ZSA9IGl0ZXIubmV4dCgpLnZhbHVlO1xuICogY29uc29sZS5sb2codmFsdWUpOyAgICAgICAgICAgICAvLyAtPiB7IGI6IDMgfVxuICogY29uc29sZS5sb2cocHJvcGVydHkodmFsdWUpKTsgICAvLyAtPiB7IGs6IFwiYlwiLCB2OiAzIH1cbiAqIGBgYFxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmogVGhlIG9iamVjdCB3aG9zZSBmaXJzdCBwcm9wZXJ0eSBpcyByZXR1cm5lZC5cbiAqIEByZXR1cm4ge21vZHVsZTp4ZHVjZS10b29scy5Qcm9wZXJ0eU9iamVjdH0gVGhlIHByb3BlcnR5IGFzIGEgdHdvLXByb3BlcnR5IG9iamVjdC5cbiAqL1xuZnVuY3Rpb24ga3Yob2JqKSB7XG4gIGNvbnN0IGtleSA9IE9iamVjdC5rZXlzKG9iailbMF07XG4gIHJldHVybiB7IGs6IGtleSwgdjogb2JqW2tleV0gfTtcbn1cblxuLyoqXG4gKiBBIGNvbnZlbmllbmNlIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUga2V5IG9mIHRoZSBmaXJzdCBwcm9wZXJ0eSBvZiBhblxuICogb2JqZWN0LiBUaGlzIGlzIG1lYW50IGZvciB1c2Ugd2l0aCBvYmplY3QgaXRlcmF0b3JzIHRvIG1vcmUgY29udmVuaWVudGx5XG4gKiBhY2Nlc3MgcGFydHMgb2YgdGhlIHNpbmdsZS1wcm9wZXJ0eSBvYmplY3RzIHRoYXQgdGhleSBlbWl0LlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmogVGhlIG9iamVjdCB3aG9zZSBmaXJzdCBrZXkgaXMgcmV0dXJuZWQuXG4gKiBAcmV0dXJuIHsoU3RyaW5nfFN5bWJvbCl9IFRoZSBrZXkgb2YgdGhlIG9iamVjdCdzIGZpcnN0IHByb3BlcnR5LlxuICovXG5mdW5jdGlvbiBrZXkob2JqKSB7XG4gIHJldHVybiBrdihvYmopLms7XG59XG5cbi8qKlxuICogQSBjb252ZW5pZW5jZSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSBmaXJzdCBwcm9wZXJ0eSBvZiBhblxuICogb2JqZWN0LiBUaGlzIGlzIG1lYW50IGZvciB1c2Ugd2l0aCBvYmplY3QgaXRlcmF0b3JzIHRvIG1vcmUgY29udmVuaWVudGx5XG4gKiBhY2Nlc3MgcGFydHMgb2YgdGhlIHNpbmdsZS1wcm9wZXJ0eSBvYmplY3RzIHRoYXQgdGhleSBlbWl0LlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmogVGhlIG9iamVjdCB3aG9zZSBmaXJzdCB2YWx1ZSBpcyByZXR1cm5lZC5cbiAqIEByZXR1cm4geyp9IFRoZSB2YWx1ZSBvZiB0aGUgb2JqZWN0J3MgZmlyc3QgcHJvcGVydHkuXG4gKi9cbmZ1bmN0aW9uIHZhbHVlKG9iaikge1xuICByZXR1cm4ga3Yob2JqKS52O1xufVxuXG4vKipcbiAqIEFjY2VwdHMgYSBwcmVkaWNhdGUgZnVuY3Rpb24gYW5kIHJldHVybnMgYSBuZXcgcHJlZGljYXRlIGZ1bmN0aW9uIHdoaWNoXG4gKiByZXR1cm5zIHRoZSBvcHBvc2l0ZSBvZiB0aGUgb3JpZ2luYWwgZnVuY3Rpb24uXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHBhcmFtIHttb2R1bGU6eGR1Y2UuUHJlZGljYXRlRnVuY3Rpb259IGZuIEEgcHJlZGljYXRlIGZ1bmN0aW9uLlxuICogQHJldHVybnMge21vZHVsZTp4ZHVjZS5QcmVkaWNhdGVGdW5jdGlvbn0gQSBwcmVkaWNhdGUgZnVuY3Rpb24gdGhhdCByZXR1cm5zXG4gKiAgICAgdGhlIG9wcG9zaXRlIHZhbHVlIGFzIHRoZSBzdXBwbGllZCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gY29tcGxlbWVudChmbikge1xuICByZXR1cm4gKC4uLmFyZ3MpID0+ICFmbiguLi5hcmdzKTtcbn1cblxuZXhwb3J0IHtcbiAgc2FtZVZhbHVlWmVybyxcbiAgcGFyc2VOdW1iZXJBcmdzLFxuICBwYXJzZUZ1bmN0aW9uQXJncyxcbiAga3YsXG4gIGtleSxcbiAgdmFsdWUsXG4gIGNvbXBsZW1lbnRcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9