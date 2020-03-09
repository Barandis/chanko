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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: protocols, iterator, isIterable, kv, key, value, complete, uncomplete, isCompleted, ensureCompleted, ensureUncompleted, reduce, toFunction, toReducer, toTransducer, transduce, sequence, into, asArray, asObject, asString, asIterator, compose, isArray, isFunction, isGeneratorFunction, isNumber, isObject, isString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var modules_protocol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! modules/protocol */ "./src/modules/protocol.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "protocols", function() { return modules_protocol__WEBPACK_IMPORTED_MODULE_0__["protocols"]; });

/* harmony import */ var modules_iteration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! modules/iteration */ "./src/modules/iteration.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "iterator", function() { return modules_iteration__WEBPACK_IMPORTED_MODULE_1__["iterator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isIterable", function() { return modules_iteration__WEBPACK_IMPORTED_MODULE_1__["isIterable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "kv", function() { return modules_iteration__WEBPACK_IMPORTED_MODULE_1__["kv"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "key", function() { return modules_iteration__WEBPACK_IMPORTED_MODULE_1__["key"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "value", function() { return modules_iteration__WEBPACK_IMPORTED_MODULE_1__["value"]; });

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

/* harmony import */ var modules_transformation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! modules/transformation */ "./src/modules/transformation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transduce", function() { return modules_transformation__WEBPACK_IMPORTED_MODULE_3__["transduce"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sequence", function() { return modules_transformation__WEBPACK_IMPORTED_MODULE_3__["sequence"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "into", function() { return modules_transformation__WEBPACK_IMPORTED_MODULE_3__["into"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "asArray", function() { return modules_transformation__WEBPACK_IMPORTED_MODULE_3__["asArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "asObject", function() { return modules_transformation__WEBPACK_IMPORTED_MODULE_3__["asObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "asString", function() { return modules_transformation__WEBPACK_IMPORTED_MODULE_3__["asString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "asIterator", function() { return modules_transformation__WEBPACK_IMPORTED_MODULE_3__["asIterator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return modules_transformation__WEBPACK_IMPORTED_MODULE_3__["compose"]; });

/* harmony import */ var modules_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! modules/utils */ "./src/modules/utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return modules_utils__WEBPACK_IMPORTED_MODULE_4__["isArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return modules_utils__WEBPACK_IMPORTED_MODULE_4__["isFunction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isGeneratorFunction", function() { return modules_utils__WEBPACK_IMPORTED_MODULE_4__["isGeneratorFunction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return modules_utils__WEBPACK_IMPORTED_MODULE_4__["isNumber"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return modules_utils__WEBPACK_IMPORTED_MODULE_4__["isObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return modules_utils__WEBPACK_IMPORTED_MODULE_4__["isString"]; });

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
 * `{@link module:xduce.protocols|protocols}` is for.
 *
 * The best way to use these keys can be seen in the immutable-js example above.
 * Instead of worrying about the name of the key for the `init` protocol, the
 * value of `protocols.init` is used.
 *
 * `{@link module:xduce.protocols|protocols}` defines these protocol property
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
 * The `{@link module:xduce.iterator|iterator}` function can be passed a sorting
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
 * A helper function named `{@link module:xduce.property|property}` can improve
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
 * Every transducer function except for `{@link module:xduce.sequence|sequence}`
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
 * @module xduce
 */





/**
 * An iterable as defined by JavaScript.
 *
 * @typedef JsIterable
 * @memberof module:xduce
 * @property {module:xduce.JsIterableFunction} Symbol.iterator A function that
 *     produces an iterator when called.
 */

/**
 * A function that produces an iterator. This is the characteristic property of
 * a JavaScript iterable.
 *
 * @callback JsIterableFunction
 * @memberof module:xduce
 * @returns {module:xduce.Iterator} An iterator over the
 *     {@link module:xduce.JsIterable} that produced it.
 */

/**
 * An iterable as defined by this library. Since it provides specific support
 * for objects, this type is merely a normal JavaScript iterable *or* a plain
 * object.
 *
 * @typedef {(Object|module:xduce.JsIterable)} Iterable
 * @memberof module:xduce
 */

/**
 * A generic iterator. This conforms to the `iterator` protocol in that it has
 * a `{@link module:xduce.NextFunction|next}` function that produces
 * {@link module:xduce.NextValue|`iterator`-compatible objects}.
 *
 * @typedef Iterator
 * @memberof module:xduce
 * @property {module:xduce.NextFunction} next A function that, when called,
 *     returns the next iterator value.
 */

/**
 * The function that satisfies the `iterator` protocol on an object. When
 * called, it returns the next value in the iterator.
 *
 * @callback NextFunction
 * @memberof module:xduce
 * @returns {module:xduce.NextValue} The next value in the iterator.
 */

/**
 * The object returned by a call to `{@link module:xduce.NextFunction|next}`.
 * It indicates whether the iterator is complete and, if not, what the next
 * value is.
 *
 * @typedef {object} NextValue
 * @memberof module:xduce
 * @property {*} value The value that the iterator has provided.
 * @property {boolean} done Indicates whether the iterator has completed. If
 *     this is `true`, then `value` will be `undefined` and every subsequent
 *     call to `{@link module:xduce.NextFunction|next}` will continue to produce
 *     the same value. If it's `false`, then `value` represents the net value in
 *     the iterator, and the next call to
 *     `{@link module:xduce.NextFunction|next}` will continue to produce the
 *     next value.
 */

/**
 * A sort function for the keys of an object. This conforms to the normal sort
 * function used in `Array.prototype.sort`.
 *
 * @callback SortFunction
 * @memberof module:xduce
 * @property {*} a The first value to be sorted.
 * @property {*} b The second value to be sorted.
 * @returns {number} Either `-1` if `a > b`, `1` if `a < b`, or `0` if `a ===
 *     b`.
 */

/**
 * A function that can have an iterator created for it.
 *
 * @callback IterableFunction
 * @memberof module:xduce
 * @param {number} [index] The number of times that
 *     `{@link module:xduce.NextFunction|next}` has been called on the
 *     function's iterator. This will start at `0` for the first call to
 *     `{@link module:xduce.NextFunction|next}` and increase by one for each
 *     subsequent call.
 * @param {*} [last] The return value of the function the last time
 *     `{@link module:xduce.NextFunction|next}` was called on its iterator. For
 *     the first call, this is set to `undefined`.
 * @returns {*} The return value for that iteration.
 */

/**
 * An object representation of a single-property object, but using one property
 * for the key and one for the value. This format is easier to use in
 * transformation functions.
 *
 * @typedef {object} PropertyObject
 * @memberof module:xduce
 * @property {(String|Symbol)} k The key of the single-property object that this
 *     object represents.
 * @property {*} v The value of the single-property object that this object
 *     represents.
 */

/**
 * An init function, which provides a new, empty instance of a collection.
 *
 * @callback InitFunction
 * @memberof module:xduce
 * @returns {*} A new, empty instance of a collection.
 */

/**
 * A step function, that reduces a collection and a new value to the
 * collection with the value added.
 *
 * @callback StepFunction
 * @memberof module:xduce
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
 * @memberof module:xduce
 * @param {*} input The value to be modified before being output.
 * @returns {*} The modified value to be output by a transducer.
 */

/**
 * An object with all of the information necessary to reduce values into a
 * particular kind of collection. These are passed to
 * {@link module:xduce.reduce|reduce} and like functions.
 *
 * @typedef Reducer
 * @memberof module:xduce
 * @property {module:xduce.InitFunction} [Symbol.for("transducer/init")] The
 *     reducer's init function.
 * @property {module:xduce.StepFunction} Symbol.for("transducer/step") The
 *     reducer's step function.
 * @property {module:xduce.ResultFunction} Symbol.for("transducer/result") The
 *     reducer's result function.
 */

/**
 * A collection that can have values reduced into it. Since this library
 * provides explicit support for arrays, objects, and strings, those three are
 * added to the {@link module:xduce.Reducer} type to define this.
 *
 * @typedef {(Array|String|Object|module:xduce.Reducer)} Reducible
 * @memberof module:xduce
 */

/**
 * A collection that supports not only the regular iteraion over its contents,
 * but also reduction of values into it. It is an intersection type combining
 * {@link module:xduce.Iterable|Iterable} and
 * {@link module:xduce.Reducible|Reducible}.
 *
 * @typedef ExplicitIterableReducible
 * @memberof module:xduce
 * @property {module:xduce.JsIterableFunction} Symbol.iterator A function that
 *     produces an iterator when called.
 * @property {module:xduce.InitFunction} [Symbol.for("transducer/init")] The
 *     collection's init function.
 * @property {module:xduce.StepFunction} Symbol.for("transducer/step") The
 *     collection's step function.
 * @property {module:xduce.ResultFunction} Symbol.for("transducer/result") The
 *     collection's result function.
 */

/**
 * The actual type used by reducible collections in this library. It takes the
 * property-based definition and adds built-in types that are specially
 * supported by the library.
 *
 * @typedef {(Array|Object|String|module:xduce.ExplicitIterableReducible)}
 *     IterableReducible
 * @memberof module:xduce
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
 * @memberof module:xduce
 * @param {module:xduce.TransducerFunction} xform A transducer to chain this
 *     transducer to.
 * @return {module:xduce.TransducerFunction} A new transducer consisting of the
 *     composition of this one and `xform`.
 */

/**
 * An object containing all of the necessary function properties for
 * transforming data and then reducing it into an output value. This is the
 * same as {@link module:xduce.Reducer|Reducer} except that the `init` property
 * is not optional.
 *
 * @typedef Transducer
 * @memberof module:xduce
 * @property {module:xduce.InitFunction} Symbol.for("transducer/init") The
 *     transducer's init function.
 * @property {module:xduce.StepFunction} Symbol.for("transducer/step") The
 *     transducer's step function.
 * @property {module:xduce.ResultFunction} Symbol.for("transducer/result") The
 *     transducer's result function.
 */

/***/ }),

/***/ "./src/modules/iteration.js":
/*!**********************************!*\
  !*** ./src/modules/iteration.js ***!
  \**********************************/
/*! exports provided: iterator, isIterable, kv, key, value */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iterator", function() { return iterator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIterable", function() { return isIterable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kv", function() { return kv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "key", function() { return key; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "value", function() { return value; });
/* harmony import */ var modules_protocol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! modules/protocol */ "./src/modules/protocol.js");
/* harmony import */ var modules_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! modules/utils */ "./src/modules/utils.js");
/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */


/**
 * Creates an iterator over an object.
 *
 * Details about this function are included in the documentation for
 * {@link module:xduce.iterator|iterator}.
 *
 * @param {object} obj The object being iterated over.
 * @param {module:xduce.SortFunction} [sortFn] An optional function used to sort
 *     the object keys before iteration. If it isn't provided, the keys will be
 *     sorted in the same order as `Object.keys(obj)` would sort them.
 * @returns {module:xduce.Iterator} An iterator over the properties of `obj`.
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
 * A convenience function that returns the first key and value in an object as
 * a two-property object, one property for the key and one for the value. This
 * is intended to work with the values provided by an object iterator, as the
 * syntax of objects doesn't work very nicely with single-property objects.
 *
 * ```
 * const obj = { c: 1, a: 2, b: 3 };
 * const iter = iterator(obj);
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
 * Creates an iterator over a function.
 *
 * Details about this function are included in the documentation for
 * {@link module:xduce.iterator|iterator}.
 *
 * @param {module:xduce.IterableFunction} fn The function to iterate over.
 * @returns {module:xduce.Iterator} An iterator over the return values of `fn`.
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
 * @memberof module:xduce
 * @param {*} value The value to create an iterator over.
 * @param {module:xduce.SortFunction} [sortFn] An optional sort function for
 *     sorting the keys of an object before iteration. It is ignored if `value`
 *     isn't a plain object.
 * @returns {module:xduce.Iterator} An iterator over `value`.
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
 * {@link module:xduce.iterator|iterator} can produce an iterator for them,
 * because not all functions work well with
 * {@link module:xduce.iterator|iterator}.
 *
 * @param {*} value The value to test for iterability.
 * @return {boolean} Either `true` if the value is iterable
 *     (`{@link module:xduce.iterator}` will return an iterator for it) or
 *     `false` if it is not.
 * @private
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
 * The names for these protocols came from a discussion thread
 * ({@link https://github.com/cognitect-labs/transducers-js/issues/20}) from a
 * time when transducers were very much in the forefront. It's the closest thing
 * there is to a standard, so it was adopted here.
 *
 * These are the same symbols as available in my transducer library. They are
 * publicly available from there.
 *
 * @module xduce/protocol
 * @private
 */

/**
 * The mapping of protocol names to their respective property key names. The
 * values of this map will depend on whether symbols are available.
 *
 * @typedef {object} ProtocolMap
 * @memberof module:xduce
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
 * @type {module:xduce.ProtocolMap}
 * @memberof module:xduce
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



/***/ }),

/***/ "./src/modules/reduction.js":
/*!**********************************!*\
  !*** ./src/modules/reduction.js ***!
  \**********************************/
/*! exports provided: init, step, result, toReducer, ARRAY_REDUCER, OBJECT_REDUCER, STRING_REDUCER, toTransducer, toFunction, complete, uncomplete, isCompleted, ensureCompleted, ensureUncompleted, reduce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "step", function() { return step; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "result", function() { return result; });
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
 * @module reduction
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
 * @return {module:xduce.InitFunction} A function that, when called, returns an
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
 * @return {module:xduce.StepFunction} A reduction function for the provided
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
        const value = Object(modules_utils__WEBPACK_IMPORTED_MODULE_1__["isObject"])(input) ? Object(modules_iteration__WEBPACK_IMPORTED_MODULE_2__["kv"])(input).v : input;
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

        const {
          k,
          v
        } = Object(modules_iteration__WEBPACK_IMPORTED_MODULE_2__["kv"])(value);
        acc[k] = v;
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
 * @return {module:xduce.ResultFunction} A function that, when given a reduced
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
 * @memberof module:xduce
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
 * @type {module:xduce.Reducer}
 * @private
 */


const ARRAY_REDUCER = toReducer([]);
/**
 * A reducer object for objects.
 *
 * @type {module:xduce.Reducer}
 * @private
 */

const OBJECT_REDUCER = toReducer({});
/**
 * A reducer object for strings.
 *
 * @type {module:xduce.Reducer}
 * @private
 */

const STRING_REDUCER = toReducer("");
/**
 * Creates a transducer from a function and a transducer to chain it to.
 *
 * This is in most respects just like {@link module:xduce.toReducer|toReducer},
 * with two notable differences. One is that it requires a transducer to chain
 * to, and it does the chaining as a part of creating the new transducer. The
 * other is that it includes a usable `init` function, where passing a function
 * to {@link module:xduce.toReducer|toReducer} would create an init function
 * that throws an error if it's called.
 *
 * This function applies the given function as the `step` function of the
 * returned transducer, and the `init` and `result` functions simply call the
 * same functions in the next transducer down the chain. This is precisely what
 * *most* transducers want...`init` and `result` functions are normally handled
 * by the reducer at the end of the transducer chain...but in the rare case
 * when `init` or `result` must do more than this, the transducer must be
 * created manually.
 *
 * This function does not automatically chain the `step` function to the next
 * one down the line, as that can be done in any number of different ways. Thus
 * the function itself should call the `step` function in `xform` in whatever
 * way is appropriate.
 *
 * @memberof module:xduce
 * @param {module:xduce.StepFunction} fn The step function for the transducer.
 * @param {module:xduce.Transducer} xform The next transducer object in the
 *     chain.
 * @returns {module:xduce.Transducer} A new transducer, chaining the supplied
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
 * to`{@link module:xduce.transduce|transduce}` or
 * `{@link module:xduce.reduce|reduce}`, or it can be a plain function that
 * takes two parameters and returns the result of reducing the second parameter
 * into the first.
 *
 * If there is no need for a transformation, then pass in the
 * `{@link module:transducers.identity|identity}` transducer.
 *
 * @memberof module:xduce
 * @param {module:xduce.Reducer} xform A transducer object whose step
 *     function will become the returned reduction function.
 * @param {(module:xduce.StepFunction|module:xduce.Reducer)} reducer A
 *     reducer that knows how to reduce values into an output collection. This
 *     can either be a reducing function or a transducer object whose `step`
 *     function knows how to perform this reduction.
 * @returns {module:xduce.StepFunction} A function that handles both the
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
 * @memberof module:xduce
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
 * @memberof module:xduce
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
 * @memberof module:xduce
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
 * This differs from {@link module:xduce.complete|complete} in that
 * if the value is already complete, this function won't complete it again.
 * Therefore thus function can't be used to make a value complete multiple
 * times.
 *
 * @memberof module:xduce
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
 * @memberof module:xduce
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
 * @memberof module:xduce
 * @param {*} collection The input collection. The only requirement of this
 *     collection is that it implement the `iterable` protocol. Special support
 *     is provided by the library for objects, so they can be used as well.
 * @param {module:xduce.Reducer} reducer An object that implements the `step`
 *     and `result` protocols. This object must know how to produce an output
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



/***/ }),

/***/ "./src/modules/transformation.js":
/*!***************************************!*\
  !*** ./src/modules/transformation.js ***!
  \***************************************/
/*! exports provided: transduce, sequence, into, asArray, asObject, asString, asIterator, compose */
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
/* harmony import */ var modules_protocol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! modules/protocol */ "./src/modules/protocol.js");
/* harmony import */ var modules_iteration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! modules/iteration */ "./src/modules/iteration.js");
/* harmony import */ var modules_reduction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! modules/reduction */ "./src/modules/reduction.js");
/* harmony import */ var modules_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! modules/utils */ "./src/modules/utils.js");
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
 * @param {module:xduce.Iterable} collection the input collection that the
 *     produced iterator will be iterating over.
 * @param {module:xduce.TransducerFunction} xform A function that creates a transducer
 *     object that defines the transformation being done to the iterator's
 *     elements. Any of the transducers in the
 *     {@link module:transducers|transducers} module can produce a suitable
 *     transducer function.
 * @return {module:xduce.Iterator} An iterator that will transform its input
 *     elements using the transducer function as its
 *     `{@link module:xduce.NextFunction|next}` function is called.
 * @private
 */

function transducingIterator(collection, xform) {
  const stepReducer = {
    [modules_protocol__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](xiter, input) {
      xiter.items.unshift(input);
      return xiter;
    },

    [modules_protocol__WEBPACK_IMPORTED_MODULE_0__["protocols"].result](value) {
      return value;
    }

  };
  const iter = Object(modules_iteration__WEBPACK_IMPORTED_MODULE_1__["iterator"])(collection);
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
        xf[modules_protocol__WEBPACK_IMPORTED_MODULE_0__["protocols"].result](result);
        break;
      }

      completed = Object(modules_reduction__WEBPACK_IMPORTED_MODULE_2__["isCompleted"])(xf[modules_protocol__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](result, stepValue.value));
    }
  } // The resulting object is an iterator, so to satisfy the iterable protocol
  // we just return that object itself


  function sIterator() {
    return result;
  } // The `result` name is hoisted and used in functions further up, so we have
  // to retain that name and can't just return the object without naming it


  const result = {
    items,
    next,
    step,
    [Symbol.iterator]: sIterator
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
 * import { protocols as p, transduce } from "@chanko/xduce";
 * import { map } from "@chanko/transducers";
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
 * `{@link module:xduce.protocols}`) and that know how to produce the output
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
 * @param {module:xduce.Iterable} collection The input collection. The only
 *     requirement of this collection is that it implement the `iterable`
 *     protocol. Special support is provided by the library for objects, so they
 *     can also be used.
 * @param {module:xduce.TransducerFunction} [xform] A function that creates a transducer
 *     object that defines the transformation being done to the input
 *     collection's elements. Any of the transducers in the
 *     {@link module:transducers|transducers} module can produce a suitable
 *     transducer function.
 * @param {(module:xduce.StepFunction|module:xduce.Reducer)} reducer Either a
 *     function or a reducer object that implements the transducer protocols
 *     (`init` is  only required if the `init` parameter is not present). This
 *     object must know how to produce an output collection through its `step`
 *     and `result` protocol functions. If this parameter is a function, then it
 *     is turned into a valid reducer object.
 * @param {module:xduce.Reducible} [init] A collection of the same type as the
 *     output collection. If this is not present, then the reducer's `init`
 *     protocol function is called instead to get the initial collection. If it
 *     is present and not empty, then the existing elements remain and the
 *     transformed input collection elements are added to it.
 * @return {*} A collection of a type determined by the passed reducer. The
 *     elements of this collection are the results from the transformer function
 *     being applied to each element of the input collection.
 */


function transduce(collection, xform, reducer, init) {
  const r = Object(modules_utils__WEBPACK_IMPORTED_MODULE_3__["isFunction"])(reducer) ? Object(modules_reduction__WEBPACK_IMPORTED_MODULE_2__["toReducer"])(reducer) : reducer;
  const i = init !== null && init !== void 0 ? init : r[modules_protocol__WEBPACK_IMPORTED_MODULE_0__["protocols"].init]();
  const xf = xform ? xform(r) : r;
  return Object(modules_reduction__WEBPACK_IMPORTED_MODULE_2__["reduce"])(collection, xf, i);
}
/**
 * Transforms the elements of the input collection and reduces them into a new
 * array.
 *
 * The transformer is optional. If it isn't present, this function just converts
 * the input collection into an array.
 *
 * ```
 * import { asArray } from "@chanko/xduce";
 * import { map } from "@chanko/transducers";
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
 * @param {module:xduce.Iterable} collection The input collection. The only
 *     requirement of this collection is that it implement the `iterable`
 *     protocol. Special support is provided by the library for objects, so they
 *     can also be used.
 * @param {module:xduce.TransducerFunction} [xform] A function that creates a transducer
 *     object that defines the transformation being done to the input
 *     collection's elements. Any of the transducers in the
 *     {@link module:transducers|transducers} module can produce a suitable
 *     transducer function. If this isn't present, the input collection will
 *     simply be reduced into an array without transformation.
 * @return {Array} An array containing all of the transformed values from the
 *     input collection elements.
 */


function asArray(collection, xform) {
  return transduce(collection, xform, modules_reduction__WEBPACK_IMPORTED_MODULE_2__["ARRAY_REDUCER"]);
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
 * import { asObject, kv } from "@chanko/xduce";
 * import { map } from "@chanko/transducers";
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
 * @param {module:xduce.Iterable} collection The input collection. The only
 *     requirement of this collection is that it implement the `iterable`
 *     protocol. Special support is provided by the library for objects, so they
 *     can also be used.
 * @param {module:xduce.Tranducer} [xform] A function that creates a transducer
 *     object that defines the transformation being done to the input
 *     collection's elements. Any of the transducers in the
 *     {@link module:transducers|transducers} module can produce a suitable
 *     transducer function. If this isn't present, the input collection will
 *     simply be reduced into an object without transformation.
 * @return {Object} An object containing all of the transformed values from the
 *     input collection elements.
 */


function asObject(collection, xform) {
  return transduce(collection, xform, modules_reduction__WEBPACK_IMPORTED_MODULE_2__["OBJECT_REDUCER"]);
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
 * import { transduce, key } from "@chanko/xduce";
 * import { map } from "@chanko/transducers";
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
 * @param {module:xduce.Iterable} collection The input collection. The only
 *     requirement of this collection is that it implement the `iterable`
 *     protocol. Special support is provided by the library for objects, so they
 *     can also be used.
 * @param {module:xduce.TransducerFunction} [xform] A function that creates a transducer
 *     object that defines the transformation being done to the input
 *     collection's elements. Any of the transducers in the
 *     {@link module:transducers|transducers} module can produce a suitable
 *     transducer function. If this isn't present, the input collection will
 *     simply be reduced into a string without transformation.
 * @return {String} A string containing all of the transformed values from the
 *     input collection elements.
 */


function asString(collection, xform) {
  return transduce(collection, xform, modules_reduction__WEBPACK_IMPORTED_MODULE_2__["STRING_REDUCER"]);
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
 * import { asIterator, asArray } from "@chanko/xduce";
 * import { map } from "@chanko/transducers";
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
 * @param {module:xduce.Iterable} collection The input collection. The only
 *     requirement of this collection is that it implement the `iterable`
 *     protocol. Special support is provided by the library for objects, so they
 *     can also be used.
 * @param {module:xduce.TransducerFunction} [xform] A function that creates a transducer
 *     object that defines the transformation being done to the input
 *     collection's elements. Any of the transducers in the
 *     {@link module:transducers|transducers} module can produce a suitable
 *     transducer function. If this isn't present, the input collection will
 *     simply be reduced into an iterator without transformation.
 * @return {module:xduce.Iterator} An iterator containing all of the transformed
 *     values from the input collection elements.
 */


function asIterator(collection, xform) {
  return xform ? transducingIterator(collection, xform) : Object(modules_iteration__WEBPACK_IMPORTED_MODULE_1__["iterator"])(collection);
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
 * import { sequence } from "@chanko/xduce";
 * import { map } from "@chanko/transducers";
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
 * @param {module:xduce.ReducibleIterable} collection The input collection. This
 *     must implement the `iterator`, `init`, `result`, and `step` protocols.
 *     Special support is provided for arrays, strings, objects, and iterators,
 *     so they do not have to implement any protocols.
 * @param {module:xduce.TransducerFunction} xform A function that creates a transducer
 *     object that defines the transformation being done to the input
 *     collection's elements. Any of the transducers in the
 *     {@link module:xduce.transducers|transducers} module can produce a
 *     suitable transducer function.
 * @return {module:xduce.ReducibleIterable} A collection of the same type as the
 *     input collection, containing all of the transformed values from the input
 *     collection elements.
 */


function sequence(collection, xform) {
  switch (true) {
    case Object(modules_utils__WEBPACK_IMPORTED_MODULE_3__["isArray"])(collection):
      return asArray(collection, xform);

    case Object(modules_utils__WEBPACK_IMPORTED_MODULE_3__["isObject"])(collection):
      return asObject(collection, xform);

    case Object(modules_utils__WEBPACK_IMPORTED_MODULE_3__["isString"])(collection):
      return asString(collection, xform);

    case Object(modules_protocol__WEBPACK_IMPORTED_MODULE_0__["isImplemented"])(collection, "step"):
      return transduce(collection, xform, collection);

    case Object(modules_protocol__WEBPACK_IMPORTED_MODULE_0__["isImplemented"])(collection, "iterator"):
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
 * import { into } from "@chanko/xduce";
 * import { map } from "@chanko/transducers";
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
 * @param {module:xduce.Reducible} target The collection into which all of the
 *     transformed input collection elements will be reduced. This collection
 *     must implement the `init`, `result`, and `step` protocol functions from
 *     the transducer protocol. Special support is provided for arrays, strings,
 *     and objects, so they need not implement the protocol.
 * @param {module:xduce.Iterable} collection The input collection. The only
 *     requirement of this collection is that it implement the `iterator`
 *     protocol. Special support is provided by the library for objects, to they
 *     can also be used.
 * @param {module:xduce.TransducerFunction} [xform] A function that creates a transducer
 *     object that defines the transformation being done to the input
 *     collection's elements. Any of the transducers in the
 *     {@link module:transducers|transducers} mnodule can produce a suitable
 *     transducer function. If this isn't present, the input collection will
 *     simply be reduced into the target collection without transformation.
 * @return {module:xduce.Reducible} The `target` collection, with all of the
 *     tranformed input collection elements reduced onto it.
 */


function into(target, collection, xform) {
  switch (true) {
    case Object(modules_utils__WEBPACK_IMPORTED_MODULE_3__["isArray"])(target):
      return transduce(collection, xform, modules_reduction__WEBPACK_IMPORTED_MODULE_2__["ARRAY_REDUCER"], target);

    case Object(modules_utils__WEBPACK_IMPORTED_MODULE_3__["isObject"])(target):
      return transduce(collection, xform, modules_reduction__WEBPACK_IMPORTED_MODULE_2__["OBJECT_REDUCER"], target);

    case Object(modules_utils__WEBPACK_IMPORTED_MODULE_3__["isString"])(target):
      return transduce(collection, xform, modules_reduction__WEBPACK_IMPORTED_MODULE_2__["STRING_REDUCER"], target);

    case Object(modules_protocol__WEBPACK_IMPORTED_MODULE_0__["isImplemented"])(target, "step"):
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
 * @param {...module:xduce.TransducerFunction} fns One or more function that each create
 *     a transducer object that defines the transformation being done to a
 *     collection's elements. Any of the transducers in the
 *     {@link module:transducers|transducers} module can produce a suitable
 *     transducer function.
 * @return {module:xduce.TransducerFunction} A transducer function that produces a
 *     transducer object that performs *all* of the transformations of the
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
 * @module xduce/utils
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
 * @memberof module:xduce
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
 * @memberof module:xduce
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
 * @memberof module:xduce
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
 * @memberof module:xduce
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
 * @memberof module:xduce
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
 * @memberof module:xduce
 * @param {*} x The value being tested to see if it is an array.
 * @return {boolean} Either `true` if the test value is an array or `false` if
 *     it is not.
 */


const isArray = Array.isArray;


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly94ZHVjZS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8veGR1Y2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8veGR1Y2UvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8veGR1Y2UvLi9zcmMvbW9kdWxlcy9pdGVyYXRpb24uanMiLCJ3ZWJwYWNrOi8veGR1Y2UvLi9zcmMvbW9kdWxlcy9wcm90b2NvbC5qcyIsIndlYnBhY2s6Ly94ZHVjZS8uL3NyYy9tb2R1bGVzL3JlZHVjdGlvbi5qcyIsIndlYnBhY2s6Ly94ZHVjZS8uL3NyYy9tb2R1bGVzL3RyYW5zZm9ybWF0aW9uLmpzIiwid2VicGFjazovL3hkdWNlLy4vc3JjL21vZHVsZXMvdXRpbHMuanMiXSwibmFtZXMiOlsib2JqZWN0SXRlcmF0b3IiLCJvYmoiLCJzb3J0Rm4iLCJrZXlzIiwiT2JqZWN0Iiwic29ydCIsImluZGV4IiwibGVuZ3RoIiwiayIsImt2Iiwia2V5IiwidiIsInZhbHVlIiwiZnVuY3Rpb25JdGVyYXRvciIsImZuIiwiY3VycmVudCIsIml0ZXJhdG9yIiwiaXNGdW5jdGlvbiIsIlN5bWJvbCIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJpc09iamVjdCIsImlzSXRlcmFibGUiLCJpc0ltcGxlbWVudGVkIiwicHJvdG9jb2xzIiwiY3JlYXRlIiwiaW5pdCIsImZvciIsInN0ZXAiLCJyZXN1bHQiLCJyZWR1Y2VkIiwicHJvdG9jb2wiLCJhc3luY0l0ZXJhdG9yIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwiaW5jbHVkZXMiLCJjb2xsZWN0aW9uIiwicCIsImlzU3RyaW5nIiwiaXNBcnJheSIsIkVycm9yIiwiYWNjIiwiaW5wdXQiLCJwdXNoIiwibWF4IiwicmVkdWNlIiwiYSIsImIiLCJNYXRoIiwidG9SZWR1Y2VyIiwiZnJlZXplIiwiQVJSQVlfUkVEVUNFUiIsIk9CSkVDVF9SRURVQ0VSIiwiU1RSSU5HX1JFRFVDRVIiLCJ0b1RyYW5zZHVjZXIiLCJ4Zm9ybSIsInRvRnVuY3Rpb24iLCJyZWR1Y2VyIiwiciIsImJpbmQiLCJjb21wbGV0ZSIsInVuY29tcGxldGUiLCJpc0NvbXBsZXRlZCIsImVuc3VyZUNvbXBsZXRlZCIsImVuc3VyZVVuY29tcGxldGVkIiwiaXRlciIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm5leHQiLCJkb25lIiwidHJhbnNkdWNpbmdJdGVyYXRvciIsInN0ZXBSZWR1Y2VyIiwieGl0ZXIiLCJpdGVtcyIsInVuc2hpZnQiLCJ4ZiIsImNvbXBsZXRlZCIsInBvcCIsImNvdW50Iiwic3RlcFZhbHVlIiwic0l0ZXJhdG9yIiwidHJhbnNkdWNlIiwiaSIsImFzQXJyYXkiLCJhc09iamVjdCIsImFzU3RyaW5nIiwiYXNJdGVyYXRvciIsInNlcXVlbmNlIiwiaW50byIsInRhcmdldCIsImNvbXBvc2UiLCJmbnMiLCJyZXZlcnNlZCIsInJldmVyc2UiLCJ0b1N0cmluZyIsInByb3RvdHlwZSIsIngiLCJjYWxsIiwicHJvdG8iLCJnZXRQcm90b3R5cGVPZiIsImN0b3IiLCJoYXNPd25Qcm9wZXJ0eSIsImlzTnVtYmVyIiwiaXNGaW5pdGUiLCJBcnJheSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFD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cUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFJRixRQUFRLENBQUNHLElBQVQsQ0FBY0QsQ0FBZCxNQUFxQixpQkFBekIsRUFBNEM7QUFDMUMsV0FBTyxLQUFQO0FBQ0QsR0FQa0IsQ0FTbkI7OztBQUNBLFFBQU1FLEtBQUssR0FBRzVGLE1BQU0sQ0FBQzZGLGNBQVAsQ0FBc0JILENBQXRCLENBQWQ7O0FBQ0EsTUFBSUUsS0FBSyxLQUFLLElBQWQsRUFBb0I7QUFDbEIsV0FBTyxJQUFQO0FBQ0QsR0Fia0IsQ0FlbkI7QUFDQTs7O0FBQ0EsUUFBTUUsSUFBSSxHQUNSOUYsTUFBTSxDQUFDeUYsU0FBUCxDQUFpQk0sY0FBakIsQ0FBZ0NKLElBQWhDLENBQXFDQyxLQUFyQyxFQUE0QyxhQUE1QyxLQUNBQSxLQUFLLENBQUNoQyxXQUZSO0FBR0EsU0FBTyxPQUFPa0MsSUFBUCxLQUFnQixVQUFoQixJQUE4QkEsSUFBSSxLQUFLOUYsTUFBOUM7QUFDRDtBQUVEOzs7Ozs7Ozs7Ozs7Ozs7QUFhQSxTQUFTZ0csUUFBVCxDQUFrQk4sQ0FBbEIsRUFBcUI7QUFDbkIsU0FBT0YsUUFBUSxDQUFDRyxJQUFULENBQWNELENBQWQsTUFBcUIsaUJBQXJCLElBQTBDTyxRQUFRLENBQUNQLENBQUQsQ0FBekQ7QUFDRDtBQUVEOzs7Ozs7Ozs7Ozs7QUFVQSxTQUFTMUQsUUFBVCxDQUFrQjBELENBQWxCLEVBQXFCO0FBQ25CLFNBQU9GLFFBQVEsQ0FBQ0csSUFBVCxDQUFjRCxDQUFkLE1BQXFCLGlCQUE1QjtBQUNEO0FBRUQ7Ozs7Ozs7Ozs7Ozs7O0FBWUEsTUFBTXpELE9BQU8sR0FBR2lFLEtBQUssQ0FBQ2pFLE9BQXRCIiwiZmlsZSI6ImNoYW5rby14ZHVjZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInhkdWNlXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInhkdWNlXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cbi8qKlxuICogVGhlIGNlbnRyYWwgbW9kdWxlIGZvciB0aGUgdHJhbnNkdWNlciBlbmdpbmUuXG4gKlxuICogQWxsIG9mIHRoZSBmdW5jdGlvbnMgaW4gdGhpcyBtb2R1bGUgZGVhbCBkaXJlY3RseSB3aXRoIHRyYW5zZHVjZXJzLiBCdXRcbiAqIGZpcnN0LCBsZXQncyB0YWxrIGFib3V0IHRoZSBwcm90b2NvbHMgdGhhdCBhcmUgZ29pbmcgdG8gYmUgcmVmZXJyZWQgdG9cbiAqIHRocm91Z2hvdXQgbWFueSBvZiB0aGUgZnVuY3Rpb24gZGlzY3Vzc2lvbnMuXG4gKlxuICogIyMgUHJvdG9jb2xzXG4gKlxuICogT25lIG9mIHRoZSBrZXkgc2VsbGluZyBwb2ludHMgZm9yIHRyYW5zZHVjZXJzIGlzIHRoYXQgdGhlIHNhbWUgdHJhbnNkdWNlciBjYW5cbiAqIGJlIHVzZWQgb24gYW55IHR5cGUgb2YgY29sbGVjdGlvbi4gUmF0aGVyIHRoYW4gaGF2aW5nIHRvIHdyaXRlIGEgbmV3IGBtYXBgXG4gKiBmdW5jdGlvbiAoZm9yIGV4YW1wbGUpIGZvciBldmVyeSBraW5kIG9mIGNvbGxlY3Rpb24gLSBvbmUgZm9yIGFuIGFycmF5LCBvbmVcbiAqIGZvciBhIHN0cmluZywgb25lIGZvciBhbiBpdGVyYXRvciwgZXRjLiAtIHRoZXJlIGlzIGEgc2luZ2xlIGBtYXBgIHRyYW5zZHVjZXJcbiAqIHRoYXQgd2lsbCB3b3JrIHdpdGggYWxsIG9mIHRoZW0sIGFuZCBwb3RlbnRpYWxseSB3aXRoICphbnkqIGtpbmQgb2ZcbiAqIGNvbGxlY3Rpb24uIFRoaXMgaXMgcG9zc2libGUgaW1wbGVtZW50aW5nICpwcm90b2NvbHMqIG9uIHRoZSBjb2xsZWN0aW9ucy5cbiAqXG4gKiBBIHByb3RvY29sIGluIEphdmFTY3JpcHQgaXMgbXVjaCBsaWtlIGFuIGludGVyZmFjZSBpbiBsYW5ndWFnZXMgbGlrZSBKYXZhIGFuZFxuICogQyMuIEl0IGlzIGEgY29tbWl0bWVudCB0byBwcm92aWRpbmcgYSBjZXJ0YWluIGZ1bmN0aW9uYWxpdHkgdW5kZXIgYSBjZXJ0YWluXG4gKiBuYW1lLiBFUzIwMTUgaGFzIHNlZW4gdGhlIGludHJvZHVjdGlvbiBvZiBhbiBgaXRlcmF0b3JgIHByb3RvY29sLCBmb3JcbiAqIGV4YW1wbGUsIGFuZCBsYW5ndWFnZSBzdXBwb3J0IGZvciBpdCAodGhlIG5ldyBgZm9yLi4ub2ZgIGxvb3AgY2FuIHdvcmsgd2l0aFxuICogYW55IG9iamVjdCB0aGF0IGNvcnJlY3RseSBpbXBsZW1lbnRzIHRoZSBgaXRlcmF0b3JgIHByb3RvY29sKS5cbiAqXG4gKiBUbyBzdXBwb3J0IHRyYW5zZHVjdGlvbiwgWGR1Y2UgZXhwZWN0cyBjb2xsZWN0aW9ucyB0byBpbXBsZW1lbnQgZm91clxuICogcHJvdG9jb2xzLlxuICpcbiAqIC0gYGl0ZXJhdG9yYDogYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYW4gaXRlcmF0b3IgKHRoaXMgb25lIGlzIGJ1aWx0IGluIHRvXG4gKiAgIEVTNiBKYXZhU2NyaXB0KVxuICogLSBgdHJhbnNkdWNlci9pbml0YDogYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBuZXcsIGVtcHR5IGluc3RhbmNlIG9mIHRoZVxuICogICBvdXRwdXQgY29sbGVjdGlvblxuICogLSBgdHJhbnNkdWNlci9zdGVwYDogYSBmdW5jdGlvbiB0aGF0IHRha2VzIGFuIGFjY3VtdWxhdG9yICh0aGUgcmVzdWx0IG9mIHRoZVxuICogICByZWR1Y3Rpb24gc28gZmFyKSBhbmQgdGhlIG5leHQgaW5wdXQgdmFsdWUsIGFuZCB0aGVuIHJldHVybnMgdGhlXG4gKiAgIGFjY3VtdWxhdG9yIHdpdGggdGhlIG5leHQgaW5wdXQgdmFsdWUgYWRkZWQgdG8gaXRcbiAqIC0gYHRyYW5zZHVjZXIvcmVzdWx0YDogYSBmdW5jdGlvbiB0aGF0IHRha2VzIHRoZSByZWR1Y2VkIGNvbGxlY3Rpb24gYW5kXG4gKiAgIHJldHVybnMgdGhlIGZpbmFsIG91dHB1dCBjb2xsZWN0aW9uXG4gKlxuICogYGl0ZXJhdG9yYCBpcyB0aGUgYnVpbHQtaW4gSmF2YVNjcmlwdCBwcm90b2NvbC4gV2hlbiBjYWxsZWQsIGl0IGlzIGV4cGVjdGVkXG4gKiB0byByZXR1cm4gYW4gaXRlcmF0b3Igb3ZlciB0aGUgaW1wbGVtZW50aW5nIGNvbGxlY3Rpb24uIFRoaXMgaXRlcmF0b3IgaXMgYW5cbiAqIG9iamVjdCB0aGF0IGhhcyBhIGBuZXh0YCBmdW5jdGlvbi4gRWFjaCBjYWxsIHRvIGBuZXh0YCBpcyBleHBlY3RlZCB0byByZXR1cm5cbiAqIGFuIG9iamVjdCB3aXRoIGB2YWx1ZWAgYW5kIGBkb25lYCBwcm9wZXJ0aWVzLCB3aGljaCByZXNwZWN0aXZlbHkgaG9sZCB0aGVcbiAqIG5leHQgdmFsdWUgb2YgdGhlIGl0ZXJhdG9yIGFuZCBhIGJvb2xlYW4gdG8gaW5kaWNhdGUgd2hldGhlciB0aGUgaXRlcmF0aW9uXG4gKiBoYXMgcmVhY2hlZCBpdHMgZW5kLiAoVGhpcyBpcyBhIHNpbXBsaWZpZWQgZXhwbGFuYXRpb247IHNlZVxuICoge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvR3VpZGUvSXRlcmF0b3JzX2FuZF9HZW5lcmF0b3JzfHRoaXMgTUROIHBhZ2V9XG4gKiBmb3IgbW9yZSBkZXRhaWxlZCBpbmZvcm1hdGlvbi4pXG4gKlxuICogYHRyYW5zZHVjZXIvaW5pdGAgKHJlZmVycmVkIHRvIGZyb20gbm93IG9uIGFzIGBpbml0YCkgc2hvdWxkIGJlIGEgZnVuY3Rpb25cbiAqIHRoYXQgdGFrZXMgbm8gcGFyYW1ldGVycyBhbmQgcmV0dXJucyBhIG5ldywgZW1wdHkgaW5zdGFuY2Ugb2YgdGhlIG91dHB1dFxuICogY29sbGVjdGlvbi4gVGhpcyBpcyB0aGUgZnVuY3Rpb24gdGhhdCBkZWZpbmVzIGhvdyB0byBjcmVhdGUgYSBuZXcgY29sbGVjdGlvblxuICogb2YgdGhlIGNvcnJlY3QgdHlwZS5cbiAqXG4gKiBgdHJhbnNkdWNlci9zdGVwYCAocmVmZXJyZWQgdG8gZnJvbSBub3cgb24gYXMgYHN0ZXBgKSBzaG91bGQgYmUgYSBmdW5jdGlvblxuICogdGhhdCB0YWtlcyB0d28gcGFyYW1ldGVycy4gVGhlc2UgcGFyYW1ldGVycyBhcmUgdGhlIHJlc3VsdCBvZiB0aGUgcmVkdWN0aW9uXG4gKiBzbyBmYXIgKGFuZCBzbyBpcyBhIGNvbGxlY3Rpb24gb2YgdGhlIG91dHB1dCB0eXBlKSBhbmQgdGhlIG5leHQgdmFsdWUgZnJvbVxuICogdGhlIGlucHV0IGNvbGxlY3Rpb24uIEl0IG11c3QgcmV0dXJuIHRoZSBuZXcgcmVkdWN0aW9uIHJlc3VsdCwgd2l0aCB0aGUgbmV4dFxuICogdmFsdWUgaW5jb3Jwb3JhdGVkIGludG8gaXQuIFRoaXMgaXMgdGhlIGZ1bmN0aW9uIHRoYXQgZGVmaW5lcyBob3cgcmVkdWNlIGFcbiAqIHZhbHVlIG9udG8gdGhlIGNvbGxlY3Rpb24uXG4gKlxuICogYHRyYW5zZHVjZXIvcmVzdWx0YCAocmVmZXJyZWQgdG8gZnJvbSBub3cgb24gYXMgYHJlc3VsdGApIHNob3VsZCBiZSBhXG4gKiBmdW5jdGlvbiB0aGF0IHRha2VzIG9uZSBwYXJhbWV0ZXIsIHdoaWNoIGlzIHRoZSBmdWxseSByZWR1Y2VkIGNvbGxlY3Rpb24uIEl0XG4gKiBzaG91bGQgcmV0dXJuIHRoZSBmaW5hbCBvdXRwdXQgY29sbGVjdGlvbi4gVGhpcyBhZmZvcmRzIGEgY2hhbmNlIHRvIG1ha2UgYW55XG4gKiBsYXN0LW1pbnV0ZSBhZGp1c3RtZW50cyB0byB0aGUgcmVkdWNlZCBjb2xsZWN0aW9uIGJlZm9yZSByZXR1cm5pbmcgaXQuXG4gKlxuICogQXJyYXlzLCBzdHJpbmdzLCBhbmQgb2JqZWN0cyBhcmUgYWxsIGdpdmVuIHN1cHBvcnQgZm9yIGFsbCBvZiB0aGVzZVxuICogcHJvdG9jb2xzLiBPdGhlciBjb2xsZWN0aW9ucyB3aWxsIGhhdmUgdG8gcHJvdmlkZSB0aGVpciBvd24gKHRob3VnaCBpdCBzaG91bGRcbiAqIGJlIG5vdGVkIHRoYXQgc2luY2UgYGl0ZXJhdG9yYCBpcyBidWlsdC1pbiwgbWFueSB0aGlyZC1wYXJ0eSBjb2xsZWN0aW9ucyB3aWxsXG4gKiBhbHJlYWR5IGltcGxlbWVudCB0aGlzIHByb3RvY29sKS4gQXMgYW4gZXhhbXBsZSwgbGV0J3MgYWRkIHRyYW5zZHVjZXIgc3VwcG9ydFxuICogdG8gYSB0aGlyZC1wYXJ0eSBjb2xsZWN0aW9uLCB0aGUgYEltbXV0YWJsZS5MaXN0YCBjb2xsZWN0aW9uIGZyb21cbiAqIHtAbGluayBodHRwczovL2ZhY2Vib29rLmdpdGh1Yi5pby9pbW11dGFibGUtanMvfGltbXV0YWJsZS1qc30uXG4gKlxuICogYGBgXG4gKiBJbW11dGFibGUuTGlzdC5wcm90b3R5cGVbcHJvdG9jb2xzLmluaXRdID0gKCkgPT4gSW1tdXRhYmxlLkxpc3QoKS5hc011dGFibGUoKTtcbiAqIEltbXV0YWJsZS5MaXN0LnByb3RvdHlwZVtwcm90b2NvbHMuc3RlcF0gPSAoYWNjLCBpbnB1dCkgPT4gYWNjLnB1c2goaW5wdXQpO1xuICogSW1tdXRhYmxlLkxpc3QucHJvdG90eXBlW3Byb3RvY29scy5yZXN1bHRdID0gKHZhbHVlKSA9PiB2YWx1ZS5hc0ltbXV0YWJsZSgpO1xuICogYGBgXG4gKlxuICogYEltbXV0YWJsZS5MaXN0YCBhbHJlYWR5IGltcGxlbWVudHMgYGl0ZXJhdG9yYCwgc28gd2UgZG9uJ3QgaGF2ZSB0byBkbyBpdFxuICogb3Vyc2VsdmVzLlxuICpcbiAqIFRoZSBgaW5pdGAgZnVuY3Rpb24gcmV0dXJucyBhbiBlbXB0eSBtdXRhYmxlIGxpc3QuIFRoaXMgaXMgaW1wb3J0YW50IGZvclxuICogaW1tdXRhYmxlLWpzIGJlY2F1c2UgaXRzIGRlZmF1bHQgbGlzdHMgYXJlIGltbXV0YWJsZSwgYW5kIGltbXV0YWJsZSBsaXN0c1xuICogbWVhbiB0aGF0IGEgbmV3IGxpc3QgaGFzIHRvIGJlIGNyZWF0ZWQgd2l0aCBldmVyeSByZWR1Y3Rpb24gc3RlcC4gSXQgd291bGRcbiAqIHdvcmsgZmluZSwgYnV0IGl0J3MgcXVpdGUgaW5lZmZpY2llbnQuXG4gKlxuICogVGhlIGBzdGVwYCBmdW5jdGlvbiBhZGRzIHRoZSBuZXh0IHZhbHVlIHRvIHRoZSBhbHJlYWR5LWNyZWF0ZWQgbGlzdC5cbiAqIGBJbW11dGFibGUuTGlzdGAgcHJvdmlkZXMgYSBgcHVzaGAgZnVuY3Rpb24gdGhhdCB3b3JrcyBsaWtlIGFuIGFycmF5J3NcbiAqIGBwdXNoYCwgZXhjZXB0IHRoYXQgaXQgcmV0dXJucyB0aGUgbmV3IGxpc3Qgd2l0aCB0aGUgdmFsdWUgcHVzaGVkIG9udG8gaXQuXG4gKiBUaGlzIGlzIHBlcmZlY3QgZm9yIG91ciBgc3RlcGAgZnVuY3Rpb24uXG4gKlxuICogVGhlIGByZXN1bHRgIGZ1bmN0aW9uIGNvbnZlcnRzIHRoZSBub3ctZmluaXNoZWQgbXV0YWJsZSBsaXN0IGludG8gYW5cbiAqIGltbXV0YWJsZSBvbmUsIHdoaWNoIGlzIHdoYXQncyBnb2luZyB0byBiZSBleHBlY3RlZCBpZiB3ZSdyZSB0cmFuc2R1Y2luZ1xuICogc29tZXRoaW5nIGludG8gYW4gYEltbXV0YWJsZS5MaXN0YC4gSW4gbW9zdCBjYXNlcywgYHJlc3VsdGAgZG9lc24ndCBoYXZlIHRvXG4gKiBkbyBhbnkgd29yaywgYnV0IHNpbmNlIHdlJ3JlIGNyZWF0aW5nIGFuIGludGVybWVkaWF0ZSByZXByZXNlbnRhdGlvbiBvZiBvdXJcbiAqIGNvbGxlY3Rpb24gdHlwZSBoZXJlLCB0aGlzIGxldHMgdXMgY3JlYXRlIHRoZSBjb2xsZWN0aW9uIHRoYXQgd2UgYWN0dWFsbHlcbiAqIHdhbnQgdG8gb3V0cHV0LiAoV2l0aG91dCBgcmVzdWx0YCwgd2Ugd291bGQgaGF2ZSB0byB1c2UgaW1tdXRhYmxlIGxpc3RzIGFsbFxuICogdGhlIHdheSB0aHJvdWdoLCBjcmVhdGluZyBhIG5ldyBvbmUgd2l0aCBlYWNoIGBzdGVwYCBmdW5jdGlvbiwgc2luY2Ugd2VcbiAqIHdvdWxkbid0IGJlIGFibGUgdG8gbWFrZSB0aGlzIGNvbnZlcnN0aW9uIGF0IHRoZSBlbmQuKVxuICpcbiAqIFdpdGggdGhvc2UgcHJvdG9jb2xzIGltcGxlbWVudGVkIG9uIHRoZSBwcm90b3R5cGUsIGBJbW11dGFibGUuTGlzdGBcbiAqIGNvbGxlY3Rpb25zIGNhbiBub3cgc3VwcG9ydCBhbnkgdHJhbnNkdWN0aW9uIHdlIGNhbiBvZmZlci5cbiAqXG4gKiAjIyMgUHJvdG9jb2xzXG4gKlxuICogQWZ0ZXIgdGFsa2luZyBhIGxvdCBhYm91dCBwcm90b2NvbHMgYW5kIHNob3dpbmcgaG93IHRoZXkncmUgcHJvcGVydGllcyBhZGRlZFxuICogdG8gYW4gb2JqZWN0LCBpdCdzIHByb2JhYmx5IHByZXR0eSBvYnZpb3VzIHRoYXQgdGhlcmUncyBiZWVuIG5vIG1lbnRpb24gb2ZcbiAqIHdoYXQgdGhlIGFjdHVhbCBuYW1lcyBvZiB0aG9zZSBwcm9wZXJ0aWVzIGFyZS4gVGhhdCdzIHdoYXRcbiAqIGB7QGxpbmsgbW9kdWxlOnhkdWNlLnByb3RvY29sc3xwcm90b2NvbHN9YCBpcyBmb3IuXG4gKlxuICogVGhlIGJlc3Qgd2F5IHRvIHVzZSB0aGVzZSBrZXlzIGNhbiBiZSBzZWVuIGluIHRoZSBpbW11dGFibGUtanMgZXhhbXBsZSBhYm92ZS5cbiAqIEluc3RlYWQgb2Ygd29ycnlpbmcgYWJvdXQgdGhlIG5hbWUgb2YgdGhlIGtleSBmb3IgdGhlIGBpbml0YCBwcm90b2NvbCwgdGhlXG4gKiB2YWx1ZSBvZiBgcHJvdG9jb2xzLmluaXRgIGlzIHVzZWQuXG4gKlxuICogYHtAbGluayBtb2R1bGU6eGR1Y2UucHJvdG9jb2xzfHByb3RvY29sc31gIGRlZmluZXMgdGhlc2UgcHJvdG9jb2wgcHJvcGVydHlcbiAqIG5hbWVzLlxuICpcbiAqIC0gYGluaXRgXG4gKiAtIGBzdGVwYFxuICogLSBgcmVzdWx0YFxuICogLSBgcmVkdWNlZGA6IHVzZWQgaW50ZXJuYWxseSB0byBtYXJrIGEgY29sbGVjdGlvbiBhcyBhbHJlYWR5IHJlZHVjZWRcbiAqIC0gYHZhbHVlYDogdXNlZCBpbnRlcm5hbGx5IHRvIHByb3ZpZGUgdGhlIGFjdHVhbCB2YWx1ZSBvZiBhIHJlZHVjZWRcbiAqICAgY29sbGVjdGlvblxuICpcbiAqIFRoZSBmaW5hbCB0d28gdmFsdWVzIGRvbid0IGhhdmUgYSBsb3Qgb2YgdXNlIG91dHNpZGUgdGhlIGxpYnJhcnkgdW5sZXNzXG4gKiB5b3UncmUgd3JpdGluZyB5b3VyIG93biB0cmFuc2R1Y2Vycy5cbiAqXG4gKiAjIyBIb3cgT2JqZWN0cyBBcmUgVHJlYXRlZFxuICpcbiAqIE9iamVjdHMgYmVhciBzb21lIHRob3VnaHQgYmVjYXVzZSByZWd1bGFybHksIHRoZXkgYXJlbid0IGNhbmRpZGF0ZXMgZm9yXG4gKiBpdGVyYXRpb24gKGFuZCB0aGVyZWZvcmUgZm9yIHRyYW5zZHVjdGlvbiBpbiBnZW5lcmFsKS4gVGhleSBkb24ndCBoYXZlIGEgdmVyeVxuICogc3RyYWlnaHRmb3J3YXJkIGlkZWEgb2Ygb3JkZXIsIGFuZCB0aGV5IGhhdmUgKnR3byogcGllY2VzIG9mIGRhdGEgKGtleSBhbmRcbiAqIHZhbHVlKSBmb3IgZXZlcnkgZWxlbWVudCBpbnN0ZWFkIG9mIG9uZS4gWWV0IGl0J3MgdW5kZW5pYWJsZSB0aGF0IGF0IGxlYXN0XG4gKiBmb3IgbW9zdCB0cmFuc2Zvcm1hdGlvbnMsIGJlaW5nIGFibGUgdG8gYXBwbHkgdGhlbSB0byBvYmplY3RzIHdvdWxkIGJlIHF1aXRlXG4gKiBoYW5keS5cbiAqXG4gKiBGb3IgdGhhdCByZWFzb24sIHNwZWNpYWwgc3VwcG9ydCBpcyBwcm92aWRlZCBlbmQtdG8tZW5kIGZvciBvYmplY3RzLlxuICpcbiAqICMjIyBPYmplY3QgaXRlcmF0aW9uXG4gKlxuICogSXRlcmF0aW5nIG92ZXIgYW4gb2JqZWN0IHdpbGwgcHJvZHVjZSBvbmUgb2JqZWN0IHBlciBwcm9wZXJ0eSBvZiB0aGUgb3JpZ2luYWxcbiAqIG9iamVjdC4gQW4gb3JkZXIgaXMgaW1wb3NlZDsgYnkgZGVmYXVsdCwgdGhpcyBvcmRlciB0aGUgc2FtZSBhcyB0aGUgb3JkZXJpbmdcbiAqIG9mIGtleXMgaW4gcG9zdC1FUzYgSmF2YXNjcmlwdDpcbiAqXG4gKiAxLiBLZXlzIHRoYXQgYXJlIGludGVnZXJzLCBpbiBhc2NlbmRpbmcgbnVtZXJpY2FsIG9yZGVyXG4gKiAyLiBBbGwgb3RoZXIgc3RyaW5nIGtleXMsIGluIHRoZSBvcmRlciBpbiB3aGljaCB0aGV5IHdlcmUgYWRkZWQgdG8gdGhlIG9iamVjdFxuICogMy4gQWxsIHN5bWJvbCBrZXlzLCBpbiB0aGUgb3JkZXIgaW4gd2hpY2ggdGhleSB3ZXJlIGFkZGVkIHRvIHRoZSBvYmplY3RcbiAqXG4gKiBUaGUgYHtAbGluayBtb2R1bGU6eGR1Y2UuaXRlcmF0b3J8aXRlcmF0b3J9YCBmdW5jdGlvbiBjYW4gYmUgcGFzc2VkIGEgc29ydGluZ1xuICogZnVuY3Rpb24gdGhhdCBjYW4gc29ydCBrZXlzIGluIGFueSBvdGhlciB3YXkuXG4gKlxuICogVGhlIHJlc3VsdCBvZiB0aGUgaXRlcmF0aW9uLCBpcyBhIHNldCBvZiBvYmplY3RzIGVhY2ggd2l0aCBhIHNpbmdsZSBwcm9wZXJ0eSxcbiAqIG9uZSBmb3IgZWFjaCBlbnVtZXJhYmxlIG93biBwcm9wZXJ0eSBvbiB0aGUgb3JpZ2luYWwgb2JqZWN0LiBUaGUgc3RhbmRhcmRcbiAqIG9yZGVyaW5nIGZvciBvYmplY3RzIChmcm9tIEVTNiBvbndhcmQpIGlzIGFzIGZvbGxvd3M6XG4gKlxuICogIyMjIFRyYW5zZm9ybWluZyBvYmplY3RzXG4gKlxuICogV2hpbGUgaXRlcmF0aW5nIG92ZXIgb2JqZWN0cyBpbiB0aGlzIHdheSBpcyBzdHJhaWdodGZvcndhcmQsIHRoZSBzeW50YXggb2ZcbiAqIG9iamVjdHMgbWFrZXMgaXQgdWdseSB0byB0cmFuc2Zvcm0gdGhlbSBpbiB0aGlzIGZvcm0uIEhlcmUncyBhbiBleGFtcGxlIG9mIGFcbiAqIHRyYW5zZm9ybWF0aW9uIGZ1bmN0aW9uIHRoYXQgbWFrZXMgdGhlIG9iamVjdCdzIGtleXMgdXBwZXItY2FzZSBhbmQgYWRkcyBvbmVcbiAqIHRvIGVhY2ggb2YgdGhlIHZhbHVlczpcbiAqXG4gKiBgYGBcbiAqIGZ1bmN0aW9uIHRyYW5zZm9ybShvYmopIHtcbiAqICAgY29uc3Qga2V5ID0gT2JqZWN0LmtleXMob2JqKVswXTtcbiAqICAgY29uc3QgdmFsdWUgPSBvYmpba2V5XTtcbiAqICAgcmV0dXJuIHsgW2tleS50b1VwcGVyQ2FzZSgpXTogdmFsdWUgKyAxIH07XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBBIGhlbHBlciBmdW5jdGlvbiBuYW1lZCBge0BsaW5rIG1vZHVsZTp4ZHVjZS5wcm9wZXJ0eXxwcm9wZXJ0eX1gIGNhbiBpbXByb3ZlXG4gKiB0aGlzIGJ5IGhhbmRsaW5nIHRoZSBib2lsZXJwbGF0ZS5cbiAqXG4gKiBgYGBcbiAqIGZ1bmN0aW9uIGltcHJvdmVkVHJhbnNmb3JtKG9iaikge1xuICogICBjb25zdCB7aywgdn0gPSBwcm9wZXJ0eShvYmopO1xuICogICByZXR1cm4geyBbay50b1VwcGVyQ2FzZSgpXTogdiArIDEgfTtcbiAqIH1cbiAqIGBgYFxuICpcbiAqICMjIyBSZWR1Y2luZyBvYmplY3RzXG4gKlxuICogVGhlIGJ1aWx0LWluIHJlZHVjZXJzIChmb3IgYXJyYXlzLCBvYmplY3RzLCBzdHJpbmdzLCBhbmQgaXRlcmF0b3JzKVxuICogdW5kZXJzdGFuZCB0aGVzZSBzaW5nbGUtcHJvcGVydHkgb2JqZWN0cyBhbmQgcmVkdWNlIHRoZW0gaW4gdGhlIHByb3BlciBtYW5uZXJcbiAqIHdpdGhvdXQgYW55IGZ1cnRoZXIgd29yay5cbiAqXG4gKiBUaGF0J3MgaXQgZm9yIG9iamVjdC1vYmplY3QgcmVkdWN0aW9uLiBDb252ZXJ0aW5nIGJldHdlZW4gb2JqZWN0cyBhbmQgb3RoZXJcbiAqIHR5cGVzIGlzIGFub3RoZXIgbWF0dGVyLlxuICpcbiAqIEV2ZXJ5IHRyYW5zZHVjZXIgZnVuY3Rpb24gZXhjZXB0IGZvciBge0BsaW5rIG1vZHVsZTp4ZHVjZS5zZXF1ZW5jZXxzZXF1ZW5jZX1gXG4gKiBpcyBjYXBhYmxlIG9mIHR1cm5pbmcgYW4gb2JqZWN0IGludG8gYSBkaWZmZXJlbnQgdHlwZSBvZiBjb2xsZWN0aW9uLCB0dXJuaW5nXG4gKiBhIGRpZmZlcmVudCB0eXBlIG9mIGNvbGxlY3Rpb24gaW50byBhbiBvYmplY3QsIG9yIGJvdGguIE9iamVjdHMgYXJlIGRpZmZlcmVudFxuICogYmVjYXVzZSB0aGV5J3JlIHRoZSBvbmx5IFwiY29sbGVjdGlvbnNcIiB0aGF0IGhhdmUgdHdvIGRpZmZlcmVudCBwaWVjZXMgb2YgZGF0YVxuICogcGVyIGVsZW1lbnQuIEJlY2F1c2Ugb2YgdGhpcywgd2UgaGF2ZSB0byBoYXZlIGEgc3RyYXRlZ3kgb24gaG93IHRvIG1vdmUgZnJvbVxuICogb25lIHRvIGFub3RoZXIuXG4gKlxuICogVHJhbnNkdWNpbmcgYW4gb2JqZWN0IGludG8gYSBkaWZmZXJlbnQgdHlwZSBpcyBnZW5lcmFsbHkgcHJldHR5IGVhc3kuIElmIGFuXG4gKiBvYmplY3QgaXMgY29udmVydGVkIGludG8gYW4gYXJyYXksIGZvciBpbnN0YW5jZSwgdGhlIGFycmF5IGVsZW1lbnRzIHdpbGwgZWFjaFxuICogYmUgc2luZ2xlLXByb3BlcnR5IG9iamVjdHMsIG9uZSBwZXIgcHJvcGVydHkgb2YgdGhlIG9yaWdpbmFsIG9iamVjdC5cbiAqXG4gKiBTdHJpbmdzIGFyZSBhIGRpZmZlcmVudCBzdG9yeSwgc2luY2UgZW5jb2RpbmcgYSBzaW5nbGUtcHJvcGVydHkgb2JqZWN0IHRvIGFcbiAqIHN0cmluZyBpc24ndCBwb3NzaWJsZSAoYmVjYXVzZSBldmVyeSBcImVsZW1lbnRcIiBvZiBhIHN0cmluZyBoYXMgdG8gYmUgYSBzaW5nbGVcbiAqIGNoYXJhY3RlcikuIFN0cmluZ3MgdGhhdCBhcmUgcHJvZHVjZWQgZnJvbSBvYmplY3RzIHdpbGwgaW5zdGVhZCBqdXN0IGJlIHRoZVxuICogb2JqZWN0IHZhbHVlcywgY29uY2F0ZW5hdGVkLiBCZWNhdXNlIG9iamVjdHMgYXJlIGl0ZXJhdGVkIGluIGEgcGFydGljdWxhclxuICogb3JkZXIsIHRoaXMgY29udmVyc2lvbiB3aWxsIGFsd2F5cyBwcm9kdWNlIHRoZSBzYW1lIHN0cmluZywgYnV0IGV4Y2VwdCBpblxuICogc29tZSB2ZXJ5IHNwZWNpZmljIGNhc2VzIHRoZXJlIHJlYWxseSBpc24ndCBhIGxvdCBvZiB1c2UgZm9yIHRoaXMgY29udmVyc2lvbi5cbiAqXG4gKiBgYGBcbiAqIGNvbnN0IG9iaiA9IHthOiAxLCBiOiAyfTtcbiAqXG4gKiBsZXQgcmVzdWx0ID0gYXNBcnJheShvYmopO1xuICogLy8gcmVzdWx0ID0gW3thOiAxfSwge2I6IDJ9XVxuICpcbiAqIHJlc3VsdCA9IGFzSXRlcmF0b3Iob2JqKTtcbiAqIC8vIHJlc3VsdCBpcyBhbiBpdGVyYXRvciB3aXRoIHR3byB2YWx1ZXM6IHthOiAxfSBhbmQge2I6IDJ9XG4gKlxuICogcmVzdWx0ID0gaW50byhJbW11dGFibGUuTGlzdCgpLCBvYmopXG4gKiAvLyByZXN1bHQgaXMgYW4gaW1tdXRhYmxlIGxpc3Qgd2l0aCB0d28gZWxlbWVudHM6IHthOiAxfSBhbmQge2I6IDJ9XG4gKlxuICogcmVzdWx0ID0gYXNTdHJpbmcob2JqKTtcbiAqIC8vIHJlc3VsdCBpcyAnMTInXG4gKiBgYGBcbiAqXG4gKiBUaGUgb3Bwb3NpdGUgY29udmVyc2lvbiBkZXBlbmRzIG9uIHRoZSB2YWx1ZXMgaW5zaWRlIHRoZSBjb2xsZWN0aW9ucy4gSWZcbiAqIHRob3NlIHZhbHVlcyBhcmUgb2JqZWN0cywgdGhlbiB0aGUgcmVzdWx0IGlzIGFuIG9iamVjdCB3aXRoIGFsbCBvZiB0aGVcbiAqIG9iamVjdHMgY29tYmluZWQgKGlmIG1vcmUgdGhhbiBvbmUgaGFzIHRoZSBzYW1lIGtleSwgdGhlIGxhc3Qgb25lIGlzIHRoZSBvbmVcbiAqIHRoYXQncyBrZXB0KS4gT3RoZXJ3aXNlLCBrZXlzIGFyZSBjcmVhdGVkIGZvciBlYWNoIG9mIHRoZSBlbGVtZW50cywgc3RhcnRpbmdcbiAqIHdpdGggYDBgIGFuZCBpbmNyZWFzaW5nIGZyb20gdGhlcmUuXG4gKlxuICogVGhpcyBtZWFucyB0aGF0IGNvbnZlcnRpbmcgYW4gb2JqZWN0IHRvIGFueSBub24tc3RyaW5nIGNvbGxlY3Rpb24gYW5kIGJhY2tcbiAqIHByb2R1Y2VzIHRoZSBvcmlnaW5hbCBvYmplY3QuXG4gKlxuICogYGBgXG4gKiBsZXQgcmVzdWx0ID0gYXNPYmplY3QoW3thOiAxfSwge2I6IDJ9XSk7XG4gKiAvLyByZXN1bHQgPSB7YTogMSwgYjogMn1cbiAqXG4gKiByZXN1bHQgPSBhc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gcmVzdWx0ID0gezA6IDEsIDE6IDIsIDI6IDN9XG4gKlxuICogcmVzdWx0ID0gYXNPYmplY3QoJ2hlbGxvJyk7XG4gKiAvLyByZXN1bHQgPSB7MDogJ2gnLCAxOiAnZScsIDI6ICdsJywgMzogJ2wnLCA0OiAnbyd9XG4gKiBgYGBcbiAqXG4gKiBAbW9kdWxlIHhkdWNlXG4gKi9cblxuZXhwb3J0IHsgcHJvdG9jb2xzIH0gZnJvbSBcIm1vZHVsZXMvcHJvdG9jb2xcIjtcbmV4cG9ydCB7IGl0ZXJhdG9yLCBpc0l0ZXJhYmxlLCBrdiwga2V5LCB2YWx1ZSB9IGZyb20gXCJtb2R1bGVzL2l0ZXJhdGlvblwiO1xuZXhwb3J0IHtcbiAgY29tcGxldGUsXG4gIHVuY29tcGxldGUsXG4gIGlzQ29tcGxldGVkLFxuICBlbnN1cmVDb21wbGV0ZWQsXG4gIGVuc3VyZVVuY29tcGxldGVkLFxuICByZWR1Y2UsXG4gIHRvRnVuY3Rpb24sXG4gIHRvUmVkdWNlcixcbiAgdG9UcmFuc2R1Y2VyLFxufSBmcm9tIFwibW9kdWxlcy9yZWR1Y3Rpb25cIjtcbmV4cG9ydCB7XG4gIHRyYW5zZHVjZSxcbiAgc2VxdWVuY2UsXG4gIGludG8sXG4gIGFzQXJyYXksXG4gIGFzT2JqZWN0LFxuICBhc1N0cmluZyxcbiAgYXNJdGVyYXRvcixcbiAgY29tcG9zZSxcbn0gZnJvbSBcIm1vZHVsZXMvdHJhbnNmb3JtYXRpb25cIjtcbmV4cG9ydCB7XG4gIGlzQXJyYXksXG4gIGlzRnVuY3Rpb24sXG4gIGlzR2VuZXJhdG9yRnVuY3Rpb24sXG4gIGlzTnVtYmVyLFxuICBpc09iamVjdCxcbiAgaXNTdHJpbmcsXG59IGZyb20gXCJtb2R1bGVzL3V0aWxzXCI7XG5cbi8qKlxuICogQW4gaXRlcmFibGUgYXMgZGVmaW5lZCBieSBKYXZhU2NyaXB0LlxuICpcbiAqIEB0eXBlZGVmIEpzSXRlcmFibGVcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwcm9wZXJ0eSB7bW9kdWxlOnhkdWNlLkpzSXRlcmFibGVGdW5jdGlvbn0gU3ltYm9sLml0ZXJhdG9yIEEgZnVuY3Rpb24gdGhhdFxuICogICAgIHByb2R1Y2VzIGFuIGl0ZXJhdG9yIHdoZW4gY2FsbGVkLlxuICovXG5cbi8qKlxuICogQSBmdW5jdGlvbiB0aGF0IHByb2R1Y2VzIGFuIGl0ZXJhdG9yLiBUaGlzIGlzIHRoZSBjaGFyYWN0ZXJpc3RpYyBwcm9wZXJ0eSBvZlxuICogYSBKYXZhU2NyaXB0IGl0ZXJhYmxlLlxuICpcbiAqIEBjYWxsYmFjayBKc0l0ZXJhYmxlRnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEByZXR1cm5zIHttb2R1bGU6eGR1Y2UuSXRlcmF0b3J9IEFuIGl0ZXJhdG9yIG92ZXIgdGhlXG4gKiAgICAge0BsaW5rIG1vZHVsZTp4ZHVjZS5Kc0l0ZXJhYmxlfSB0aGF0IHByb2R1Y2VkIGl0LlxuICovXG5cbi8qKlxuICogQW4gaXRlcmFibGUgYXMgZGVmaW5lZCBieSB0aGlzIGxpYnJhcnkuIFNpbmNlIGl0IHByb3ZpZGVzIHNwZWNpZmljIHN1cHBvcnRcbiAqIGZvciBvYmplY3RzLCB0aGlzIHR5cGUgaXMgbWVyZWx5IGEgbm9ybWFsIEphdmFTY3JpcHQgaXRlcmFibGUgKm9yKiBhIHBsYWluXG4gKiBvYmplY3QuXG4gKlxuICogQHR5cGVkZWYgeyhPYmplY3R8bW9kdWxlOnhkdWNlLkpzSXRlcmFibGUpfSBJdGVyYWJsZVxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICovXG5cbi8qKlxuICogQSBnZW5lcmljIGl0ZXJhdG9yLiBUaGlzIGNvbmZvcm1zIHRvIHRoZSBgaXRlcmF0b3JgIHByb3RvY29sIGluIHRoYXQgaXQgaGFzXG4gKiBhIGB7QGxpbmsgbW9kdWxlOnhkdWNlLk5leHRGdW5jdGlvbnxuZXh0fWAgZnVuY3Rpb24gdGhhdCBwcm9kdWNlc1xuICoge0BsaW5rIG1vZHVsZTp4ZHVjZS5OZXh0VmFsdWV8YGl0ZXJhdG9yYC1jb21wYXRpYmxlIG9iamVjdHN9LlxuICpcbiAqIEB0eXBlZGVmIEl0ZXJhdG9yXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcHJvcGVydHkge21vZHVsZTp4ZHVjZS5OZXh0RnVuY3Rpb259IG5leHQgQSBmdW5jdGlvbiB0aGF0LCB3aGVuIGNhbGxlZCxcbiAqICAgICByZXR1cm5zIHRoZSBuZXh0IGl0ZXJhdG9yIHZhbHVlLlxuICovXG5cbi8qKlxuICogVGhlIGZ1bmN0aW9uIHRoYXQgc2F0aXNmaWVzIHRoZSBgaXRlcmF0b3JgIHByb3RvY29sIG9uIGFuIG9iamVjdC4gV2hlblxuICogY2FsbGVkLCBpdCByZXR1cm5zIHRoZSBuZXh0IHZhbHVlIGluIHRoZSBpdGVyYXRvci5cbiAqXG4gKiBAY2FsbGJhY2sgTmV4dEZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcmV0dXJucyB7bW9kdWxlOnhkdWNlLk5leHRWYWx1ZX0gVGhlIG5leHQgdmFsdWUgaW4gdGhlIGl0ZXJhdG9yLlxuICovXG5cbi8qKlxuICogVGhlIG9iamVjdCByZXR1cm5lZCBieSBhIGNhbGwgdG8gYHtAbGluayBtb2R1bGU6eGR1Y2UuTmV4dEZ1bmN0aW9ufG5leHR9YC5cbiAqIEl0IGluZGljYXRlcyB3aGV0aGVyIHRoZSBpdGVyYXRvciBpcyBjb21wbGV0ZSBhbmQsIGlmIG5vdCwgd2hhdCB0aGUgbmV4dFxuICogdmFsdWUgaXMuXG4gKlxuICogQHR5cGVkZWYge29iamVjdH0gTmV4dFZhbHVlXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcHJvcGVydHkgeyp9IHZhbHVlIFRoZSB2YWx1ZSB0aGF0IHRoZSBpdGVyYXRvciBoYXMgcHJvdmlkZWQuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IGRvbmUgSW5kaWNhdGVzIHdoZXRoZXIgdGhlIGl0ZXJhdG9yIGhhcyBjb21wbGV0ZWQuIElmXG4gKiAgICAgdGhpcyBpcyBgdHJ1ZWAsIHRoZW4gYHZhbHVlYCB3aWxsIGJlIGB1bmRlZmluZWRgIGFuZCBldmVyeSBzdWJzZXF1ZW50XG4gKiAgICAgY2FsbCB0byBge0BsaW5rIG1vZHVsZTp4ZHVjZS5OZXh0RnVuY3Rpb258bmV4dH1gIHdpbGwgY29udGludWUgdG8gcHJvZHVjZVxuICogICAgIHRoZSBzYW1lIHZhbHVlLiBJZiBpdCdzIGBmYWxzZWAsIHRoZW4gYHZhbHVlYCByZXByZXNlbnRzIHRoZSBuZXQgdmFsdWUgaW5cbiAqICAgICB0aGUgaXRlcmF0b3IsIGFuZCB0aGUgbmV4dCBjYWxsIHRvXG4gKiAgICAgYHtAbGluayBtb2R1bGU6eGR1Y2UuTmV4dEZ1bmN0aW9ufG5leHR9YCB3aWxsIGNvbnRpbnVlIHRvIHByb2R1Y2UgdGhlXG4gKiAgICAgbmV4dCB2YWx1ZS5cbiAqL1xuXG4vKipcbiAqIEEgc29ydCBmdW5jdGlvbiBmb3IgdGhlIGtleXMgb2YgYW4gb2JqZWN0LiBUaGlzIGNvbmZvcm1zIHRvIHRoZSBub3JtYWwgc29ydFxuICogZnVuY3Rpb24gdXNlZCBpbiBgQXJyYXkucHJvdG90eXBlLnNvcnRgLlxuICpcbiAqIEBjYWxsYmFjayBTb3J0RnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwcm9wZXJ0eSB7Kn0gYSBUaGUgZmlyc3QgdmFsdWUgdG8gYmUgc29ydGVkLlxuICogQHByb3BlcnR5IHsqfSBiIFRoZSBzZWNvbmQgdmFsdWUgdG8gYmUgc29ydGVkLlxuICogQHJldHVybnMge251bWJlcn0gRWl0aGVyIGAtMWAgaWYgYGEgPiBiYCwgYDFgIGlmIGBhIDwgYmAsIG9yIGAwYCBpZiBgYSA9PT1cbiAqICAgICBiYC5cbiAqL1xuXG4vKipcbiAqIEEgZnVuY3Rpb24gdGhhdCBjYW4gaGF2ZSBhbiBpdGVyYXRvciBjcmVhdGVkIGZvciBpdC5cbiAqXG4gKiBAY2FsbGJhY2sgSXRlcmFibGVGdW5jdGlvblxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHBhcmFtIHtudW1iZXJ9IFtpbmRleF0gVGhlIG51bWJlciBvZiB0aW1lcyB0aGF0XG4gKiAgICAgYHtAbGluayBtb2R1bGU6eGR1Y2UuTmV4dEZ1bmN0aW9ufG5leHR9YCBoYXMgYmVlbiBjYWxsZWQgb24gdGhlXG4gKiAgICAgZnVuY3Rpb24ncyBpdGVyYXRvci4gVGhpcyB3aWxsIHN0YXJ0IGF0IGAwYCBmb3IgdGhlIGZpcnN0IGNhbGwgdG9cbiAqICAgICBge0BsaW5rIG1vZHVsZTp4ZHVjZS5OZXh0RnVuY3Rpb258bmV4dH1gIGFuZCBpbmNyZWFzZSBieSBvbmUgZm9yIGVhY2hcbiAqICAgICBzdWJzZXF1ZW50IGNhbGwuXG4gKiBAcGFyYW0geyp9IFtsYXN0XSBUaGUgcmV0dXJuIHZhbHVlIG9mIHRoZSBmdW5jdGlvbiB0aGUgbGFzdCB0aW1lXG4gKiAgICAgYHtAbGluayBtb2R1bGU6eGR1Y2UuTmV4dEZ1bmN0aW9ufG5leHR9YCB3YXMgY2FsbGVkIG9uIGl0cyBpdGVyYXRvci4gRm9yXG4gKiAgICAgdGhlIGZpcnN0IGNhbGwsIHRoaXMgaXMgc2V0IHRvIGB1bmRlZmluZWRgLlxuICogQHJldHVybnMgeyp9IFRoZSByZXR1cm4gdmFsdWUgZm9yIHRoYXQgaXRlcmF0aW9uLlxuICovXG5cbi8qKlxuICogQW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIGEgc2luZ2xlLXByb3BlcnR5IG9iamVjdCwgYnV0IHVzaW5nIG9uZSBwcm9wZXJ0eVxuICogZm9yIHRoZSBrZXkgYW5kIG9uZSBmb3IgdGhlIHZhbHVlLiBUaGlzIGZvcm1hdCBpcyBlYXNpZXIgdG8gdXNlIGluXG4gKiB0cmFuc2Zvcm1hdGlvbiBmdW5jdGlvbnMuXG4gKlxuICogQHR5cGVkZWYge29iamVjdH0gUHJvcGVydHlPYmplY3RcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwcm9wZXJ0eSB7KFN0cmluZ3xTeW1ib2wpfSBrIFRoZSBrZXkgb2YgdGhlIHNpbmdsZS1wcm9wZXJ0eSBvYmplY3QgdGhhdCB0aGlzXG4gKiAgICAgb2JqZWN0IHJlcHJlc2VudHMuXG4gKiBAcHJvcGVydHkgeyp9IHYgVGhlIHZhbHVlIG9mIHRoZSBzaW5nbGUtcHJvcGVydHkgb2JqZWN0IHRoYXQgdGhpcyBvYmplY3RcbiAqICAgICByZXByZXNlbnRzLlxuICovXG5cbi8qKlxuICogQW4gaW5pdCBmdW5jdGlvbiwgd2hpY2ggcHJvdmlkZXMgYSBuZXcsIGVtcHR5IGluc3RhbmNlIG9mIGEgY29sbGVjdGlvbi5cbiAqXG4gKiBAY2FsbGJhY2sgSW5pdEZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcmV0dXJucyB7Kn0gQSBuZXcsIGVtcHR5IGluc3RhbmNlIG9mIGEgY29sbGVjdGlvbi5cbiAqL1xuXG4vKipcbiAqIEEgc3RlcCBmdW5jdGlvbiwgdGhhdCByZWR1Y2VzIGEgY29sbGVjdGlvbiBhbmQgYSBuZXcgdmFsdWUgdG8gdGhlXG4gKiBjb2xsZWN0aW9uIHdpdGggdGhlIHZhbHVlIGFkZGVkLlxuICpcbiAqIEBjYWxsYmFjayBTdGVwRnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwYXJhbSB7Kn0gYWNjIEFuIGFjY3VtdWxhdGVkIHZhbHVlIHRvIHdoaWNoIHRoZSBuZXcgdmFsdWUgaXMgYmVpbmcgYWRkZWQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSBuZXcgdmFsdWUgdG8gYmUgYWRkZWQgdG8gdGhlIGFjY3VtdWxhdGVkIHZhbHVlLlxuICogQHJldHVybnMgeyp9IFRoZSBhY2N1bXVsYXRlZCB2YWx1ZSB3aXRoIHRoZSBuZXcgdmFsdWUgaW50ZWdyYXRlZCBpbnRvIGl0LlxuICovXG5cbi8qKlxuICogQSByZXN1bHQgZnVuY3Rpb24gdGhhdCBvcHRpb25hbGx5IG1vZGlmaWVzIHRoZSBpbnB1dCBjb2xsZWN0aW9uIGFuZCB0aGVuXG4gKiByZXR1cm5zIGl0LiBUaGlzIGlzIHVzZWQgYXQgdGhlIGVuZCBvZiBhIHJlZHVjdGlvbiB0byBhZmZvcmQgYSBsYXN0IGNoYW5jZVxuICogZm9yIHRoZSB0cmFuc2R1Y2VyIHRvIG1vZGlmeSB0aGUgb3V0cHV0IHZhbHVlLlxuICpcbiAqIEBjYWxsYmFjayBSZXN1bHRGdW5jdGlvblxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHBhcmFtIHsqfSBpbnB1dCBUaGUgdmFsdWUgdG8gYmUgbW9kaWZpZWQgYmVmb3JlIGJlaW5nIG91dHB1dC5cbiAqIEByZXR1cm5zIHsqfSBUaGUgbW9kaWZpZWQgdmFsdWUgdG8gYmUgb3V0cHV0IGJ5IGEgdHJhbnNkdWNlci5cbiAqL1xuXG4vKipcbiAqIEFuIG9iamVjdCB3aXRoIGFsbCBvZiB0aGUgaW5mb3JtYXRpb24gbmVjZXNzYXJ5IHRvIHJlZHVjZSB2YWx1ZXMgaW50byBhXG4gKiBwYXJ0aWN1bGFyIGtpbmQgb2YgY29sbGVjdGlvbi4gVGhlc2UgYXJlIHBhc3NlZCB0b1xuICoge0BsaW5rIG1vZHVsZTp4ZHVjZS5yZWR1Y2V8cmVkdWNlfSBhbmQgbGlrZSBmdW5jdGlvbnMuXG4gKlxuICogQHR5cGVkZWYgUmVkdWNlclxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHByb3BlcnR5IHttb2R1bGU6eGR1Y2UuSW5pdEZ1bmN0aW9ufSBbU3ltYm9sLmZvcihcInRyYW5zZHVjZXIvaW5pdFwiKV0gVGhlXG4gKiAgICAgcmVkdWNlcidzIGluaXQgZnVuY3Rpb24uXG4gKiBAcHJvcGVydHkge21vZHVsZTp4ZHVjZS5TdGVwRnVuY3Rpb259IFN5bWJvbC5mb3IoXCJ0cmFuc2R1Y2VyL3N0ZXBcIikgVGhlXG4gKiAgICAgcmVkdWNlcidzIHN0ZXAgZnVuY3Rpb24uXG4gKiBAcHJvcGVydHkge21vZHVsZTp4ZHVjZS5SZXN1bHRGdW5jdGlvbn0gU3ltYm9sLmZvcihcInRyYW5zZHVjZXIvcmVzdWx0XCIpIFRoZVxuICogICAgIHJlZHVjZXIncyByZXN1bHQgZnVuY3Rpb24uXG4gKi9cblxuLyoqXG4gKiBBIGNvbGxlY3Rpb24gdGhhdCBjYW4gaGF2ZSB2YWx1ZXMgcmVkdWNlZCBpbnRvIGl0LiBTaW5jZSB0aGlzIGxpYnJhcnlcbiAqIHByb3ZpZGVzIGV4cGxpY2l0IHN1cHBvcnQgZm9yIGFycmF5cywgb2JqZWN0cywgYW5kIHN0cmluZ3MsIHRob3NlIHRocmVlIGFyZVxuICogYWRkZWQgdG8gdGhlIHtAbGluayBtb2R1bGU6eGR1Y2UuUmVkdWNlcn0gdHlwZSB0byBkZWZpbmUgdGhpcy5cbiAqXG4gKiBAdHlwZWRlZiB7KEFycmF5fFN0cmluZ3xPYmplY3R8bW9kdWxlOnhkdWNlLlJlZHVjZXIpfSBSZWR1Y2libGVcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqL1xuXG4vKipcbiAqIEEgY29sbGVjdGlvbiB0aGF0IHN1cHBvcnRzIG5vdCBvbmx5IHRoZSByZWd1bGFyIGl0ZXJhaW9uIG92ZXIgaXRzIGNvbnRlbnRzLFxuICogYnV0IGFsc28gcmVkdWN0aW9uIG9mIHZhbHVlcyBpbnRvIGl0LiBJdCBpcyBhbiBpbnRlcnNlY3Rpb24gdHlwZSBjb21iaW5pbmdcbiAqIHtAbGluayBtb2R1bGU6eGR1Y2UuSXRlcmFibGV8SXRlcmFibGV9IGFuZFxuICoge0BsaW5rIG1vZHVsZTp4ZHVjZS5SZWR1Y2libGV8UmVkdWNpYmxlfS5cbiAqXG4gKiBAdHlwZWRlZiBFeHBsaWNpdEl0ZXJhYmxlUmVkdWNpYmxlXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcHJvcGVydHkge21vZHVsZTp4ZHVjZS5Kc0l0ZXJhYmxlRnVuY3Rpb259IFN5bWJvbC5pdGVyYXRvciBBIGZ1bmN0aW9uIHRoYXRcbiAqICAgICBwcm9kdWNlcyBhbiBpdGVyYXRvciB3aGVuIGNhbGxlZC5cbiAqIEBwcm9wZXJ0eSB7bW9kdWxlOnhkdWNlLkluaXRGdW5jdGlvbn0gW1N5bWJvbC5mb3IoXCJ0cmFuc2R1Y2VyL2luaXRcIildIFRoZVxuICogICAgIGNvbGxlY3Rpb24ncyBpbml0IGZ1bmN0aW9uLlxuICogQHByb3BlcnR5IHttb2R1bGU6eGR1Y2UuU3RlcEZ1bmN0aW9ufSBTeW1ib2wuZm9yKFwidHJhbnNkdWNlci9zdGVwXCIpIFRoZVxuICogICAgIGNvbGxlY3Rpb24ncyBzdGVwIGZ1bmN0aW9uLlxuICogQHByb3BlcnR5IHttb2R1bGU6eGR1Y2UuUmVzdWx0RnVuY3Rpb259IFN5bWJvbC5mb3IoXCJ0cmFuc2R1Y2VyL3Jlc3VsdFwiKSBUaGVcbiAqICAgICBjb2xsZWN0aW9uJ3MgcmVzdWx0IGZ1bmN0aW9uLlxuICovXG5cbi8qKlxuICogVGhlIGFjdHVhbCB0eXBlIHVzZWQgYnkgcmVkdWNpYmxlIGNvbGxlY3Rpb25zIGluIHRoaXMgbGlicmFyeS4gSXQgdGFrZXMgdGhlXG4gKiBwcm9wZXJ0eS1iYXNlZCBkZWZpbml0aW9uIGFuZCBhZGRzIGJ1aWx0LWluIHR5cGVzIHRoYXQgYXJlIHNwZWNpYWxseVxuICogc3VwcG9ydGVkIGJ5IHRoZSBsaWJyYXJ5LlxuICpcbiAqIEB0eXBlZGVmIHsoQXJyYXl8T2JqZWN0fFN0cmluZ3xtb2R1bGU6eGR1Y2UuRXhwbGljaXRJdGVyYWJsZVJlZHVjaWJsZSl9XG4gKiAgICAgSXRlcmFibGVSZWR1Y2libGVcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqL1xuXG4vKipcbiAqIEEgZnVuY3Rpb24gdGhhdCB0cmFuc2Zvcm1zIGRhdGEgYW5kIGNhbiBiZSBjb21wb3NlZCB3aXRoIG90aGVyIHRyYW5zZHVjZXJzXG4gKiBpbnRvIGEgc2luZ2xlIHRyYW5zZHVjZXIuIFRoZSB0cmFuc2R1Y2VycyB0aGVtc2VsdmVzIGFyZSBwcm92aWRlZCBieSBvdGhlclxuICogbGlicmFyaWVzOyB0aGUgb25seSBpbnZvbHZlbWVudCBvZiB0aGlzIGxpYnJhciBpcyBhcyBhIGNvbnN1bWVyIG9mXG4gKiB0cmFuc2R1Y2Vycy5cbiAqXG4gKiBUcmFuc2R1Y2VycyB3b3JrIGJ5IGhhdmluZyBzdGVwIGZ1bmN0aW9ucyB0aGF0IGFyZSBrbm93biB2aWEgcHJvdG9jb2wsIGFuZCBpdFxuICogaXMgdGhlc2Ugc3RlcCBmdW5jdGlvbnMgdGhhdCB0YWtlIGEgdmFsdWUgYXQgYSB0aW1lIHRvIGJlIHRyYW5zZm9ybWVkIGFzXG4gKiB0aGVpciBhcmd1bWVudHMuIFRoZSBhcmd1bWVudHMgdG8gdGhlIHRyYW5zZHVjZXJzIHRoZW1zZWx2ZXMgYXJlIG90aGVyXG4gKiB0cmFuc2R1Y2VycyB0aGF0IGFyZSB0aGVuIGNvbXBvc2VkIGludG8gYSBzaW5nbGUgdHJhbnNkdWNlciwgd2hpY2ggaXMgdGhlblxuICogcmV0dXJuZWQuIFRoZSB2YWx1ZXMgdGhhdCBhcmUgcHJvZHVjZWQgYXJlIHNlbGRvbSBvZiBjb25zZXF1ZW5jZSB0byB0aGUgZW5kXG4gKiB1c2VyOyB0aGVzZSBmdW5jdGlvbnMgZXhpc3QgdG8gYmUgcGFzc2VkIHRvIG90aGVyIGZ1bmN0aW9ucyB0aGF0IGRlYWwgd2l0aFxuICogdHJhbnNkdWNlcnMuXG4gKlxuICogQGNhbGxiYWNrIFRyYW5zZHVjZXJcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwYXJhbSB7bW9kdWxlOnhkdWNlLlRyYW5zZHVjZXJGdW5jdGlvbn0geGZvcm0gQSB0cmFuc2R1Y2VyIHRvIGNoYWluIHRoaXNcbiAqICAgICB0cmFuc2R1Y2VyIHRvLlxuICogQHJldHVybiB7bW9kdWxlOnhkdWNlLlRyYW5zZHVjZXJGdW5jdGlvbn0gQSBuZXcgdHJhbnNkdWNlciBjb25zaXN0aW5nIG9mIHRoZVxuICogICAgIGNvbXBvc2l0aW9uIG9mIHRoaXMgb25lIGFuZCBgeGZvcm1gLlxuICovXG5cbi8qKlxuICogQW4gb2JqZWN0IGNvbnRhaW5pbmcgYWxsIG9mIHRoZSBuZWNlc3NhcnkgZnVuY3Rpb24gcHJvcGVydGllcyBmb3JcbiAqIHRyYW5zZm9ybWluZyBkYXRhIGFuZCB0aGVuIHJlZHVjaW5nIGl0IGludG8gYW4gb3V0cHV0IHZhbHVlLiBUaGlzIGlzIHRoZVxuICogc2FtZSBhcyB7QGxpbmsgbW9kdWxlOnhkdWNlLlJlZHVjZXJ8UmVkdWNlcn0gZXhjZXB0IHRoYXQgdGhlIGBpbml0YCBwcm9wZXJ0eVxuICogaXMgbm90IG9wdGlvbmFsLlxuICpcbiAqIEB0eXBlZGVmIFRyYW5zZHVjZXJcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwcm9wZXJ0eSB7bW9kdWxlOnhkdWNlLkluaXRGdW5jdGlvbn0gU3ltYm9sLmZvcihcInRyYW5zZHVjZXIvaW5pdFwiKSBUaGVcbiAqICAgICB0cmFuc2R1Y2VyJ3MgaW5pdCBmdW5jdGlvbi5cbiAqIEBwcm9wZXJ0eSB7bW9kdWxlOnhkdWNlLlN0ZXBGdW5jdGlvbn0gU3ltYm9sLmZvcihcInRyYW5zZHVjZXIvc3RlcFwiKSBUaGVcbiAqICAgICB0cmFuc2R1Y2VyJ3Mgc3RlcCBmdW5jdGlvbi5cbiAqIEBwcm9wZXJ0eSB7bW9kdWxlOnhkdWNlLlJlc3VsdEZ1bmN0aW9ufSBTeW1ib2wuZm9yKFwidHJhbnNkdWNlci9yZXN1bHRcIikgVGhlXG4gKiAgICAgdHJhbnNkdWNlcidzIHJlc3VsdCBmdW5jdGlvbi5cbiAqL1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG5cbmltcG9ydCB7IGlzSW1wbGVtZW50ZWQgfSBmcm9tIFwibW9kdWxlcy9wcm90b2NvbFwiO1xuaW1wb3J0IHsgaXNGdW5jdGlvbiwgaXNPYmplY3QsIGlzR2VuZXJhdG9yRnVuY3Rpb24gfSBmcm9tIFwibW9kdWxlcy91dGlsc1wiO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gaXRlcmF0b3Igb3ZlciBhbiBvYmplY3QuXG4gKlxuICogRGV0YWlscyBhYm91dCB0aGlzIGZ1bmN0aW9uIGFyZSBpbmNsdWRlZCBpbiB0aGUgZG9jdW1lbnRhdGlvbiBmb3JcbiAqIHtAbGluayBtb2R1bGU6eGR1Y2UuaXRlcmF0b3J8aXRlcmF0b3J9LlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmogVGhlIG9iamVjdCBiZWluZyBpdGVyYXRlZCBvdmVyLlxuICogQHBhcmFtIHttb2R1bGU6eGR1Y2UuU29ydEZ1bmN0aW9ufSBbc29ydEZuXSBBbiBvcHRpb25hbCBmdW5jdGlvbiB1c2VkIHRvIHNvcnRcbiAqICAgICB0aGUgb2JqZWN0IGtleXMgYmVmb3JlIGl0ZXJhdGlvbi4gSWYgaXQgaXNuJ3QgcHJvdmlkZWQsIHRoZSBrZXlzIHdpbGwgYmVcbiAqICAgICBzb3J0ZWQgaW4gdGhlIHNhbWUgb3JkZXIgYXMgYE9iamVjdC5rZXlzKG9iailgIHdvdWxkIHNvcnQgdGhlbS5cbiAqIEByZXR1cm5zIHttb2R1bGU6eGR1Y2UuSXRlcmF0b3J9IEFuIGl0ZXJhdG9yIG92ZXIgdGhlIHByb3BlcnRpZXMgb2YgYG9iamAuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBvYmplY3RJdGVyYXRvcihvYmosIHNvcnRGbikge1xuICByZXR1cm4gKGZ1bmN0aW9uKigpIHtcbiAgICBjb25zdCBrZXlzID1cbiAgICAgIHR5cGVvZiBzb3J0Rm4gPT09IFwiZnVuY3Rpb25cIlxuICAgICAgICA/IE9iamVjdC5rZXlzKG9iaikuc29ydChzb3J0Rm4pXG4gICAgICAgIDogT2JqZWN0LmtleXMob2JqKTtcbiAgICBsZXQgaW5kZXggPSAwO1xuXG4gICAgd2hpbGUgKGluZGV4IDwga2V5cy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IGsgPSBrZXlzW2luZGV4KytdO1xuICAgICAgeWllbGQgeyBba106IG9ialtrXSB9O1xuICAgIH1cbiAgfSkoKTtcbn1cblxuLyoqXG4gKiBBIGNvbnZlbmllbmNlIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgZmlyc3Qga2V5IGFuZCB2YWx1ZSBpbiBhbiBvYmplY3QgYXNcbiAqIGEgdHdvLXByb3BlcnR5IG9iamVjdCwgb25lIHByb3BlcnR5IGZvciB0aGUga2V5IGFuZCBvbmUgZm9yIHRoZSB2YWx1ZS4gVGhpc1xuICogaXMgaW50ZW5kZWQgdG8gd29yayB3aXRoIHRoZSB2YWx1ZXMgcHJvdmlkZWQgYnkgYW4gb2JqZWN0IGl0ZXJhdG9yLCBhcyB0aGVcbiAqIHN5bnRheCBvZiBvYmplY3RzIGRvZXNuJ3Qgd29yayB2ZXJ5IG5pY2VseSB3aXRoIHNpbmdsZS1wcm9wZXJ0eSBvYmplY3RzLlxuICpcbiAqIGBgYFxuICogY29uc3Qgb2JqID0geyBjOiAxLCBhOiAyLCBiOiAzIH07XG4gKiBjb25zdCBpdGVyID0gaXRlcmF0b3Iob2JqKTtcbiAqXG4gKiBsZXQgdmFsdWUgPSBpdGVyLm5leHQoKS52YWx1ZTtcbiAqIGNvbnNvbGUubG9nKHZhbHVlKTsgICAgICAgICAgICAgLy8gLT4geyBjOiAxIH1cbiAqIGNvbnNvbGUubG9nKHByb3BlcnR5KHZhbHVlKSk7ICAgLy8gLT4geyBrOiBcImNcIiwgdjogMSB9XG4gKlxuICogdmFsdWUgPSBpdGVyLm5leHQoKS52YWx1ZTtcbiAqIGNvbnNvbGUubG9nKHZhbHVlKTsgICAgICAgICAgICAgLy8gLT4geyBhOiAyIH1cbiAqIGNvbnNvbGUubG9nKHByb3BlcnR5KHZhbHVlKSk7ICAgLy8gLT4geyBrOiBcImFcIiwgdjogMiB9XG4gKlxuICogdmFsdWUgPSBpdGVyLm5leHQoKS52YWx1ZTtcbiAqIGNvbnNvbGUubG9nKHZhbHVlKTsgICAgICAgICAgICAgLy8gLT4geyBiOiAzIH1cbiAqIGNvbnNvbGUubG9nKHByb3BlcnR5KHZhbHVlKSk7ICAgLy8gLT4geyBrOiBcImJcIiwgdjogMyB9XG4gKiBgYGBcbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIFRoZSBvYmplY3Qgd2hvc2UgZmlyc3QgcHJvcGVydHkgaXMgcmV0dXJuZWQuXG4gKiBAcmV0dXJuIHttb2R1bGU6eGR1Y2UuUHJvcGVydHlPYmplY3R9IFRoZSBwcm9wZXJ0eSBhcyBhIHR3by1wcm9wZXJ0eSBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIGt2KG9iaikge1xuICBjb25zdCBrZXkgPSBPYmplY3Qua2V5cyhvYmopWzBdO1xuICByZXR1cm4geyBrOiBrZXksIHY6IG9ialtrZXldIH07XG59XG5cbi8qKlxuICogQSBjb252ZW5pZW5jZSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIGtleSBvZiB0aGUgZmlyc3QgcHJvcGVydHkgb2YgYW5cbiAqIG9iamVjdC4gVGhpcyBpcyBtZWFudCBmb3IgdXNlIHdpdGggb2JqZWN0IGl0ZXJhdG9ycyB0byBtb3JlIGNvbnZlbmllbnRseVxuICogYWNjZXNzIHBhcnRzIG9mIHRoZSBzaW5nbGUtcHJvcGVydHkgb2JqZWN0cyB0aGF0IHRoZXkgZW1pdC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIFRoZSBvYmplY3Qgd2hvc2UgZmlyc3Qga2V5IGlzIHJldHVybmVkLlxuICogQHJldHVybiB7KFN0cmluZ3xTeW1ib2wpfSBUaGUga2V5IG9mIHRoZSBvYmplY3QncyBmaXJzdCBwcm9wZXJ0eS5cbiAqL1xuZnVuY3Rpb24ga2V5KG9iaikge1xuICByZXR1cm4ga3Yob2JqKS5rO1xufVxuXG4vKipcbiAqIEEgY29udmVuaWVuY2UgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSB2YWx1ZSBvZiB0aGUgZmlyc3QgcHJvcGVydHkgb2YgYW5cbiAqIG9iamVjdC4gVGhpcyBpcyBtZWFudCBmb3IgdXNlIHdpdGggb2JqZWN0IGl0ZXJhdG9ycyB0byBtb3JlIGNvbnZlbmllbnRseVxuICogYWNjZXNzIHBhcnRzIG9mIHRoZSBzaW5nbGUtcHJvcGVydHkgb2JqZWN0cyB0aGF0IHRoZXkgZW1pdC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIFRoZSBvYmplY3Qgd2hvc2UgZmlyc3QgdmFsdWUgaXMgcmV0dXJuZWQuXG4gKiBAcmV0dXJuIHsqfSBUaGUgdmFsdWUgb2YgdGhlIG9iamVjdCdzIGZpcnN0IHByb3BlcnR5LlxuICovXG5mdW5jdGlvbiB2YWx1ZShvYmopIHtcbiAgcmV0dXJuIGt2KG9iaikudjtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuIGl0ZXJhdG9yIG92ZXIgYSBmdW5jdGlvbi5cbiAqXG4gKiBEZXRhaWxzIGFib3V0IHRoaXMgZnVuY3Rpb24gYXJlIGluY2x1ZGVkIGluIHRoZSBkb2N1bWVudGF0aW9uIGZvclxuICoge0BsaW5rIG1vZHVsZTp4ZHVjZS5pdGVyYXRvcnxpdGVyYXRvcn0uXG4gKlxuICogQHBhcmFtIHttb2R1bGU6eGR1Y2UuSXRlcmFibGVGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEByZXR1cm5zIHttb2R1bGU6eGR1Y2UuSXRlcmF0b3J9IEFuIGl0ZXJhdG9yIG92ZXIgdGhlIHJldHVybiB2YWx1ZXMgb2YgYGZuYC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGZ1bmN0aW9uSXRlcmF0b3IoZm4pIHtcbiAgcmV0dXJuIChmdW5jdGlvbiooKSB7XG4gICAgbGV0IGN1cnJlbnQ7XG4gICAgbGV0IGluZGV4ID0gMDtcblxuICAgIGZvciAoOzspIHtcbiAgICAgIGN1cnJlbnQgPSBmbihpbmRleCsrLCBjdXJyZW50KTtcbiAgICAgIGlmICh0eXBlb2YgY3VycmVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHlpZWxkIGN1cnJlbnQ7XG4gICAgfVxuICB9KSgpO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYW4gaXRlcmF0b3Igb3ZlciB0aGUgcHJvdmlkZWQgdmFsdWUuXG4gKlxuICogRm9yIGNvbGxlY3Rpb25zIHRoYXQgaW1wbGVtZW50IHRoZSBpdGVyYWJsZSBwcm90b2NvbCwgaXQncyBhcyBzaW1wbGUgYXNcbiAqIHJldHVybmluZyB0aGUgaXRlcmF0b3IgYWxyZWFkeSBkZWZpbmVkIGZvciB0aGF0IGNvbGxlY3Rpb24uXG4gKlxuICogYGBgXG4gKiBjb25zdCBpdGVyID0gaXRlcmF0b3IoWzEsIDIsIDNdKTtcbiAqIGNvbnNvbGUubG9nKGl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiAxXG4gKiBjb25zb2xlLmxvZyhpdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4gMlxuICogY29uc29sZS5sb2coaXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IDNcbiAqIGNvbnNvbGUubG9nKGl0ZXIubmV4dCgpLmRvbmUpOyAgICAvLyAtPiB0cnVlXG4gKiBgYGBcbiAqXG4gKiBPYmplY3RzIGFyZSBzcGVjaWFsbHkgc3VwcG9ydGVkIHRvIHJldHVybiBhbiBpdGVyYXRvciBhcyB3ZWxsLCBldmVuIHRob3VnaFxuICogdGhleSBkb24ndCBuYXRpdmVseSBzdXBwb3J0IHRoZSBpdGVyYWJsZSBwcm90b2NvbC4gVGhlIGl0ZXJhdG9yJ3MgYG5leHRgXG4gKiBmdW5jdGlvbiBwcm92aWRlcyBzaW5nbGUtcHJvcGVydHkgb2JqZWN0cywgb25lIGZvciBlYWNoIHByb3BlcnR5IGluIHRoZVxuICogb3JpZ2luYWwgb2JqZWN0LCBvcmRlcmVkIGluIHRoZSBzdGFuZGFyZCBwb3N0LUVTNiBvcmRlciBmb3IgaXRlcmF0aW5nIG92ZXJcbiAqIG9iamVjdCBrZXlzOlxuICpcbiAqIDEuIEtleXMgdGhhdCBhcmUgaW50ZWdlcnMsIGluIGFzY2VuZGluZyBudW1lcmljYWwgb3JkZXJcbiAqIDIuIEFsbCBvdGhlciBzdHJpbmcga2V5cywgaW4gdGhlIG9yZGVyIGluIHdoaWNoIHRoZXkgd2VyZSBhZGRlZCB0byB0aGUgb2JqZWN0XG4gKiAzLiBBbGwgc3ltYm9sIGtleXMsIGluIHRoZSBvcmRlciBpbiB3aGljaCB0aGV5IHdlcmUgYWRkZWQgdG8gdGhlIG9iamVjdFxuICpcbiAqIElmIGEgZGlmZmVyZW50IG9yZGVyIGlzIG5lZWRlZCwgdGhpcyBmdW5jdGlvbiB0YWtlcyBhIHNlY29uZCBhcmd1bWVudCwgYSBzb3J0XG4gKiBmdW5jdGlvbiwgdGhhdCBhZmZlY3RzIG9iamVjdHMgb25seS4gSXQgaXMgYSBzdGFuZGFyZCBmdW5jdGlvbiB0aGF0IHdvdWxkIGJlXG4gKiBwYXNzZWQgdG8gYEFycmF5LnByb3RvdHlwZS5zb3J0YCBhbmQgc29ydHMgdGhlIGtleXMgYWNjb3JkaW5nbHkuXG4gKlxuICogYGBgXG4gKiBjb25zdCBhbHBoYSA9IChhLCBiKSA9PiAoYSA8IGIgPyAtMSA6IGIgPCBhID8gMSA6IDApO1xuICogY29uc3Qgb2JqID0geyBjOiAxLCBhOiAyLCBiOiAzIH07XG4gKlxuICogY29uc3Qgb2JqSXRlciA9IGl0ZXJhdG9yKG9iaik7XG4gKiBjb25zb2xlLmxvZyhvYmpJdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4geyBjOiAxIH1cbiAqIGNvbnNvbGUubG9nKG9iakl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiB7IGE6IDIgfVxuICogY29uc29sZS5sb2cob2JqSXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IHsgYjogMyB9XG4gKlxuICogY29uc3Qgc29ydGVkSXRlciA9IGl0ZXJhdG9yKG9iaiwgYWxwaGEpO1xuICogY29uc29sZS5sb2cob2JqSXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IHsgYTogMiB9XG4gKiBjb25zb2xlLmxvZyhvYmpJdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4geyBiOiAzIH1cbiAqIGNvbnNvbGUubG9nKG9iakl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiB7IGM6IDEgfVxuICogYGBgXG4gKlxuICogQWRkaXRpb25hbGx5LCB0aGVyZSBpcyBzcGVjaWFsIHN1cHBvcnQgZm9yIHBhc3NpbmcgYSBmdW5jdGlvbiB0byB0aGlzXG4gKiBmdW5jdGlvbi4gVGhlIGl0ZXJhdG9yIHJldHVybmVkIHJ1bnMgdGhhdCBmdW5jdGlvbiBmb3IgZWFjaCBjYWxsIHRvIGBuZXh0YC5cbiAqIFRoYXQgZnVuY3Rpb24gaXMgcHJvdmlkZWQgdHdvIGFyZ3VtZW50czogdGhlIGluZGV4IChzdGFydGluZyBhdCBgMGAgZm9yIHRoZVxuICogZmlyc3QgY2FsbCB0byBgbmV4dGAgYW5kIGluY3JlYXNpbmcgYnkgMSBmb3IgZWFjaCBjYWxsIHRvIGBuZXh0YCBhZnRlcikgYW5kXG4gKiB0aGUgcmV0dXJuIHZhbHVlIG9mIHRoZSBwcmV2aW91cyBjYWxsIHRvIGBuZXh0YCAoZm9yIHRoZSBmaXJzdCBjYWxsIHRvXG4gKiBgbmV4dGAsIHRoaXMgd2lsbCBiZSBgdW5kZWZpbmVkYCkuIFRoZSBpdGVyYXRpb24gd2lsbCBjb250aW51ZSB1bnRpbCB0aGVcbiAqIGZpcnN0IHRpbWUgdGhlIGl0ZXJhdGVkIGZ1bmN0aW9uIHJldHVybnMgYHVuZGVmaW5lZGA7IGF0IHRoYXQgcG9pbnQgdGhlXG4gKiBpdGVyYXRvciB3aWxsIHRlcm1pbmF0ZSBhbmQgcmV0dXJuIGB7IGRvbmU6IHRydWUgfWAgb2ZmIHN1YnNlcXVlbnQgYG5leHRgXG4gKiBjYWxscy5cbiAqXG4gKiBgYGBcbiAqIGNvbnN0IGNvbnN0SXRlciA9IGl0ZXJhdG9yKCgpID0+IDYpO1xuICogY29uc29sZS5sb2coY29uc3RJdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4gNlxuICogY29uc29sZS5sb2coY29uc3RJdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4gNlxuICogLy8gVGhpcyB3aWxsIGNvbnRpbnVlIGZvcmV2ZXIsIGFzIGxvbmcgYXMgYG5leHRgIGtlZXBzIGdldHRpbmcgY2FsbGVkXG4gKlxuICogY29uc3QgaW5kZXhJdGVyID0gaXRlcmF0b3IoeCA9PiB4ICogeCk7XG4gKiBjb25zb2xlLmxvZyhpbmRleEl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiAwO1xuICogY29uc29sZS5sb2coaW5kZXhJdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4gMTtcbiAqIGNvbnNvbGUubG9nKGluZGV4SXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IDQ7XG4gKiBjb25zb2xlLmxvZyhpbmRleEl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiA5O1xuICogLy8gVGhpcyB3aWxsIGNvbnRpbnVlIGZvcmV2ZXIgb3IgdW50aWwgdGhlIG51bWJlcnMgZ2V0IHRvbyBiaWcgZm9yXG4gKiAvLyBKYXZhU2NyaXB0IHRvIGRlYWwgd3RpaFxuICpcbiAqIC8vIFVzaW5nIGEgZGVmYXVsdCB2YWx1ZSBmb3IgdGhlIGBsYXN0YCBwYXJhbWV0ZXIsIHdoaWNoIHNldHMgaXRzIHZhbHVlXG4gKiAvLyBmb3IgdGhlIGZpcnN0IHJ1biB3aGVuIGl0IGlzIG5vcm1hbGx5IGB1bmRlZmluZWRgXG4gKiBjb25zdCBsYXN0SXRlciA9IGl0ZXJhdG9yKCh4LCBsYXN0ID0gMSkgPT4gbGFzdCAqICh4ICsgMSkpOyAvLyBmYWN0b3JpYWwhXG4gKiBjb25zb2xlLmxvZyhsYXN0SXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IDFcbiAqIGNvbnNvbGUubG9nKGxhc3RJdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4gMlxuICogY29uc29sZS5sb2cobGFzdEl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiA2XG4gKiBjb25zb2xlLmxvZyhsYXN0SXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IDI0XG4gKiAvLyBBZ2FpbiwgcnVucyBmb3JldmVyLCB0aG91Z2ggZmFjdG9yaWFscyBnZXQgYmlnIHZlcnkgcXVpY2tseVxuICpcbiAqIC8vIEl0ZXJhdG9ycyB0ZXJtaW5hdGUgd2hlbiB0aGUgZnVuY3Rpb24gcmV0dXJucyBgdW5kZWZpbmVkYFxuICogY29uc3Qgc3RvcEl0ZXIgPSBpdGVyYXRvcih4ID0+IHggPCAyID8geCA6IHVuZGVmaW5lZCk7XG4gKiBjb25zb2xlLmxvZyhzdG9wSXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IDBcbiAqIGNvbnNvbGUubG9nKHN0b3BJdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4gMVxuICogY29uc29sZS5sb2coc3RvcEl0ZXIubmV4dCgpLmRvbmUpOyAgICAvLyAtPiB0cnVlXG4gKiBgYGBcbiAqXG4gKiBJZiB0aGUgcHJvdmlkZWQgdmFsdWUgaXMgbm90IGFjdHVhbGx5IGl0ZXJhYmxlIChvciBhbiBvYmplY3Qgb3IgYSBmdW5jdGlvbiksXG4gKiBgbnVsbGAgaXMgcmV0dXJuZWQgaW4gcGxhY2Ugb2YgdGhlIGl0ZXJhdG9yLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNyZWF0ZSBhbiBpdGVyYXRvciBvdmVyLlxuICogQHBhcmFtIHttb2R1bGU6eGR1Y2UuU29ydEZ1bmN0aW9ufSBbc29ydEZuXSBBbiBvcHRpb25hbCBzb3J0IGZ1bmN0aW9uIGZvclxuICogICAgIHNvcnRpbmcgdGhlIGtleXMgb2YgYW4gb2JqZWN0IGJlZm9yZSBpdGVyYXRpb24uIEl0IGlzIGlnbm9yZWQgaWYgYHZhbHVlYFxuICogICAgIGlzbid0IGEgcGxhaW4gb2JqZWN0LlxuICogQHJldHVybnMge21vZHVsZTp4ZHVjZS5JdGVyYXRvcn0gQW4gaXRlcmF0b3Igb3ZlciBgdmFsdWVgLlxuICovXG5mdW5jdGlvbiBpdGVyYXRvcih2YWx1ZSwgc29ydEZuID0gbnVsbCkge1xuICBzd2l0Y2ggKHRydWUpIHtcbiAgICBjYXNlIGlzRnVuY3Rpb24odmFsdWVbU3ltYm9sLml0ZXJhdG9yXSk6XG4gICAgY2FzZSBpc0dlbmVyYXRvckZ1bmN0aW9uKHZhbHVlW1N5bWJvbC5pdGVyYXRvcl0pOlxuICAgICAgcmV0dXJuIHZhbHVlW1N5bWJvbC5pdGVyYXRvcl0oKTtcbiAgICBjYXNlIGlzRnVuY3Rpb24odmFsdWUpOlxuICAgICAgcmV0dXJuIGZ1bmN0aW9uSXRlcmF0b3IodmFsdWUpO1xuICAgIGNhc2UgaXNPYmplY3QodmFsdWUpOlxuICAgICAgcmV0dXJuIG9iamVjdEl0ZXJhdG9yKHZhbHVlLCBzb3J0Rm4pO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgcGFzc2VkIG9iamVjdCBpcyBpdGVyYWJsZSwgaW4gdGVybXMgb2Ygd2hhdCAnaXRlcmFibGUnXG4gKiBtZWFucyB0byB0aGlzIGxpYnJhcnkuIEluIG90aGVyIHdvcmRzLCB2YWx1ZXMgaW1wbGVtZW50aW5nIHRoZSBgaXRlcmFibGVgXG4gKiBwcm90b2NvbCBhbmQgcGxhaW4gb2JqZWN0cyByZXR1cm4gYHRydWVgLCB3aGlsZSBldmVyeXRoaW5nIGVsc2UgcmV0dXJuc1xuICogYGZhbHNlYC4gVGhpcyBkb2VzIG5vdCByZXR1cm4gYHRydWVgIGZvciBmdW5jdGlvbnMgZXZlbiB0aG91Z2hcbiAqIHtAbGluayBtb2R1bGU6eGR1Y2UuaXRlcmF0b3J8aXRlcmF0b3J9IGNhbiBwcm9kdWNlIGFuIGl0ZXJhdG9yIGZvciB0aGVtLFxuICogYmVjYXVzZSBub3QgYWxsIGZ1bmN0aW9ucyB3b3JrIHdlbGwgd2l0aFxuICoge0BsaW5rIG1vZHVsZTp4ZHVjZS5pdGVyYXRvcnxpdGVyYXRvcn0uXG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gdGVzdCBmb3IgaXRlcmFiaWxpdHkuXG4gKiBAcmV0dXJuIHtib29sZWFufSBFaXRoZXIgYHRydWVgIGlmIHRoZSB2YWx1ZSBpcyBpdGVyYWJsZVxuICogICAgIChge0BsaW5rIG1vZHVsZTp4ZHVjZS5pdGVyYXRvcn1gIHdpbGwgcmV0dXJuIGFuIGl0ZXJhdG9yIGZvciBpdCkgb3JcbiAqICAgICBgZmFsc2VgIGlmIGl0IGlzIG5vdC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGlzSXRlcmFibGUodmFsdWUpIHtcbiAgcmV0dXJuIGlzSW1wbGVtZW50ZWQodmFsdWUsIFwiaXRlcmF0b3JcIikgfHwgaXNPYmplY3QodmFsdWUpO1xufVxuXG5leHBvcnQgeyBpdGVyYXRvciwgaXNJdGVyYWJsZSwga3YsIGtleSwgdmFsdWUgfTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG4vKipcbiAqIFByb3RvY29scyBmb3IgaXRlcmF0aW9uIGFuZCByZWR1Y3Rpb24uXG4gKlxuICogVGhlIG5hbWVzIGZvciB0aGVzZSBwcm90b2NvbHMgY2FtZSBmcm9tIGEgZGlzY3Vzc2lvbiB0aHJlYWRcbiAqICh7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2NvZ25pdGVjdC1sYWJzL3RyYW5zZHVjZXJzLWpzL2lzc3Vlcy8yMH0pIGZyb20gYVxuICogdGltZSB3aGVuIHRyYW5zZHVjZXJzIHdlcmUgdmVyeSBtdWNoIGluIHRoZSBmb3JlZnJvbnQuIEl0J3MgdGhlIGNsb3Nlc3QgdGhpbmdcbiAqIHRoZXJlIGlzIHRvIGEgc3RhbmRhcmQsIHNvIGl0IHdhcyBhZG9wdGVkIGhlcmUuXG4gKlxuICogVGhlc2UgYXJlIHRoZSBzYW1lIHN5bWJvbHMgYXMgYXZhaWxhYmxlIGluIG15IHRyYW5zZHVjZXIgbGlicmFyeS4gVGhleSBhcmVcbiAqIHB1YmxpY2x5IGF2YWlsYWJsZSBmcm9tIHRoZXJlLlxuICpcbiAqIEBtb2R1bGUgeGR1Y2UvcHJvdG9jb2xcbiAqIEBwcml2YXRlXG4gKi9cblxuaW1wb3J0IHsgaXNGdW5jdGlvbiwgaXNHZW5lcmF0b3JGdW5jdGlvbiB9IGZyb20gXCJtb2R1bGVzL3V0aWxzXCI7XG5cbi8qKlxuICogVGhlIG1hcHBpbmcgb2YgcHJvdG9jb2wgbmFtZXMgdG8gdGhlaXIgcmVzcGVjdGl2ZSBwcm9wZXJ0eSBrZXkgbmFtZXMuIFRoZVxuICogdmFsdWVzIG9mIHRoaXMgbWFwIHdpbGwgZGVwZW5kIG9uIHdoZXRoZXIgc3ltYm9scyBhcmUgYXZhaWxhYmxlLlxuICpcbiAqIEB0eXBlZGVmIHtvYmplY3R9IFByb3RvY29sTWFwXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcHJvcGVydHkge1N5bWJvbH0gaW5pdCBUaGUgYHRyYW5zZHVjZXIvaW5pdGAgcHJvdG9jb2wuIFRoaXMgaXMgdXNlZFxuICogICAgIHRvIG1hcmsgZnVuY3Rpb25zIHRoYXQgaW5pdGlhbGl6ZSBhIHRhcmdldCBjb2xsZWN0aW9uIGJlZm9yZSBhZGRpbmcgaXRlbXNcbiAqICAgICB0byBpdC5cbiAqIEBwcm9wZXJ0eSB7U3ltYm9sfSBzdGVwIFRoZSBgdHJhbnNkdWNlci9zdGVwYCBwcm90b2NvbC4gVGhpcyBpcyB1c2VkXG4gKiAgICAgdG8gbWFyayBmdW5jdGlvbnMgdGhhdCBhcmUgdXNlZCBpbiB0aGUgdHJhbnNkdWNlcidzIHN0ZXAgcHJvY2Vzcywgd2hlcmVcbiAqICAgICBvYmplY3RzIGFyZSBhZGRlZCB0byB0aGUgdGFyZ2V0IGNvbGxlY3Rpb24gb25lIGF0IGEgdGltZS5cbiAqIEBwcm9wZXJ0eSB7U3ltYm9sfSByZXN1bHQgVGhlIGB0cmFuc2R1Y2VyL3Jlc3VsdGAgcHJvdG9jb2wuIFRoaXMgaXNcbiAqICAgICB1c2VkIHRvIG1hcmsgZnVuY3Rpb25zIHRoYXQgdGFrZSB0aGUgZmluYWwgcmVzdWx0IG9mIHRoZSBzdGVwIHByb2Nlc3MgYW5kXG4gKiAgICAgcmV0dXJuIHRoZSBmaW5hbCBmb3JtIHRvIGJlIG91dHB1dC4gVGhpcyBpcyBvcHRpb25hbDsgaWYgdGhlIHRyYW5zZHVjZXJcbiAqICAgICBkb2VzIG5vdCB3YW50IHRvIHRyYW5zZm9ybSB0aGUgZmluYWwgcmVzdWx0LCBpdCBzaG91bGQganVzdCByZXR1cm4gdGhlXG4gKiAgICAgcmVzdWx0IG9mIGl0cyBjaGFpbmVkIHRyYW5zZHVjZXIncyBgcmVzdWx0YCBmdW5jdGlvbi5cbiAqIEBwcm9wZXJ0eSB7U3ltYm9sfSByZWR1Y2VkIFRoZSBgdHJhbnNkdWNlci9yZWR1Y2VkYCBwcm90b2NvbC4gVGhlXG4gKiAgICAgcHJlc2VuY2Ugb2YgdGhpcyBrZXkgb24gYW4gb2JqZWN0IGluZGljYXRlcyB0aGF0IGl0cyB0cmFuc2Zvcm1hdGlvbiBoYXNcbiAqICAgICBiZWVuIGNvbXBsZXRlZC4gSXQgaXMgdXNlZCBpbnRlcm5hbGx5IHRvIG1hcmsgY29sbGVjdGlvbnMgd2hvc2VcbiAqICAgICB0cmFuc2Zvcm1hdGlvbnMgY29uY2x1ZGUgYmVmb3JlIGV2ZXJ5IG9iamVjdCBpcyBpdGVyYXRlZCBvdmVyIChhcyBpblxuICogICAgIGB7QGxpbmsgeGR1Y2UudGFrZX1gIHRyYW5zZHVjZXJzLikgSXQgaXMgb2YgbGl0dGxlIHVzZSBiZXlvbmQgdHJhbnNkdWNlclxuICogICAgIGF1dGhvcmluZy5cbiAqIEBwcm9wZXJ0eSB7U3ltYm9sfSB2YWx1ZSBUaGUgYHRyYW5zZHVjZXIvdmFsdWVgIHByb3RvY29sLiBUaGlzIGlzXG4gKiAgICAgdXNlZCBpbnRlcm5hbGx5IHRvIG1hcmsgcHJvcGVydGllcyB0aGF0IGNvbnRhaW4gdGhlIHZhbHVlIG9mIGEgcmVkdWNlZFxuICogICAgIHRyYW5zZm9ybWF0aW9uLiBJdCBpcyBvZiBsaXR0bGUgdXNlIGJleW9uZCB0cmFuc2R1Y2VyIGF1dGhvcmluZy5cbiAqL1xuXG4vKipcbiAqIFRoZSBtYXBwaW5nIG9mIHByb3RvY29sIG5hbWVzIHRvIHRoZWlyIHJlc3BlY3RpdmUgcHJvcGVydHkga2V5IG5hbWVzLlxuICpcbiAqIEB0eXBlIHttb2R1bGU6eGR1Y2UuUHJvdG9jb2xNYXB9XG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKi9cbmNvbnN0IHByb3RvY29scyA9IE9iamVjdC5jcmVhdGUobnVsbCwge1xuICBpbml0OiB7XG4gICAgdmFsdWU6IFN5bWJvbC5mb3IoXCJ0cmFuc2R1Y2VyL2luaXRcIilcbiAgfSxcbiAgc3RlcDoge1xuICAgIHZhbHVlOiBTeW1ib2wuZm9yKFwidHJhbnNkdWNlci9zdGVwXCIpXG4gIH0sXG4gIHJlc3VsdDoge1xuICAgIHZhbHVlOiBTeW1ib2wuZm9yKFwidHJhbnNkdWNlci9yZXN1bHRcIilcbiAgfSxcbiAgcmVkdWNlZDoge1xuICAgIHZhbHVlOiBTeW1ib2wuZm9yKFwidHJhbnNkdWNlci9yZWR1Y2VkXCIpXG4gIH0sXG4gIHZhbHVlOiB7XG4gICAgdmFsdWU6IFN5bWJvbC5mb3IoXCJ0cmFuc2R1Y2VyL3ZhbHVlXCIpXG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBpc0ltcGxlbWVudGVkKG9iaiwgcHJvdG9jb2wpIHtcbiAgaWYgKG9iaiA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3dpdGNoIChwcm90b2NvbCkge1xuICAgIGNhc2UgXCJpdGVyYXRvclwiOlxuICAgICAgcmV0dXJuIChcbiAgICAgICAgaXNGdW5jdGlvbihvYmpbU3ltYm9sLml0ZXJhdG9yXSkgfHxcbiAgICAgICAgaXNHZW5lcmF0b3JGdW5jdGlvbihvYmpbU3ltYm9sLml0ZXJhdG9yXSlcbiAgICAgICk7XG4gICAgY2FzZSBcImFzeW5jSXRlcmF0b3JcIjpcbiAgICAgIHJldHVybiBpc0dlbmVyYXRvckZ1bmN0aW9uKG9ialtTeW1ib2wuYXN5bmNJdGVyYXRvcl0pO1xuICAgIGNhc2UgXCJyZWR1Y2VkXCI6XG4gICAgY2FzZSBcInZhbHVlXCI6XG4gICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmopLmluY2x1ZGVzKHByb3RvY29sc1twcm90b2NvbF0pO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gaXNGdW5jdGlvbihvYmpbcHJvdG9jb2xzW3Byb3RvY29sXV0pO1xuICB9XG59XG5cbmV4cG9ydCB7IHByb3RvY29scywgaXNJbXBsZW1lbnRlZCB9O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG5cbi8qKlxuICogQSBzZXQgb2YgZnVuY3Rpb25zIHJlbGF0ZWQgdG8gdGhlIHByb2R1Y2luZyByZWR1Y2VyIG9iamVjdHMsIG1hcmtpbmdcbiAqIGNvbXBsZXRlZCBvYmplY3RzLCBhbmQgcGVyZm9ybWluZyBnZW5lcmFsIHJlZHVjdGlvbiBvcGVyYXRpb25zLlxuICpcbiAqIEBtb2R1bGUgcmVkdWN0aW9uXG4gKiBAcHJpdmF0ZVxuICovXG5cbmltcG9ydCB7IGlzSW1wbGVtZW50ZWQsIHByb3RvY29scyBhcyBwIH0gZnJvbSBcIm1vZHVsZXMvcHJvdG9jb2xcIjtcbmltcG9ydCB7IGlzU3RyaW5nLCBpc0FycmF5LCBpc09iamVjdCwgaXNGdW5jdGlvbiB9IGZyb20gXCJtb2R1bGVzL3V0aWxzXCI7XG5pbXBvcnQgeyBrdiwgaXRlcmF0b3IgfSBmcm9tIFwibW9kdWxlcy9pdGVyYXRpb25cIjtcblxuLyoqXG4gKiBSZXR1cm5zIGFuIGluaXQgZnVuY3Rpb24gZm9yIGEgY29sbGVjdGlvbi4gVGhpcyBpcyBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhXG4gKiBuZXcsIGVtcHR5IGluc3RhbmNlIG9mIHRoZSBjb2xsZWN0aW9uIGluIHF1ZXN0aW9uLiBJZiB0aGUgY29sbGVjdGlvbiBkb2Vzbid0XG4gKiBzdXBwb3J0IHJlZHVjdGlvbiwgYG51bGxgIGlzIHJldHVybmVkLiBUaGlzIG1ha2VzIGNvbmRpdGlvbmFscyBhIGJpdCBlYXNpZXJcbiAqIHRvIHdvcmsgd2l0aC5cbiAqXG4gKiBJbiBvcmRlciB0byBzdXBwb3J0IHRoZSBjb252ZXJzaW9uIG9mIGZ1bmN0aW9ucyBpbnRvIHJlZHVjZXJzLCBmdW5jdGlvblxuICogc3VwcG9ydCBpcyBhbHNvIHByb3ZpZGVkLlxuICpcbiAqIEBwYXJhbSB7Kn0gY29sbGVjdGlvbiBBIGNvbGxlY3Rpb24gdG8gY3JlYXRlIGFuIGluaXQgZnVuY3Rpb24gZm9yLiBUaGlzIGNhblxuICogICAgIGJlIGFueXRoaW5nIHRoYXQgc3VwcG9ydHMgdGhlIGl0ZXJhdGlvbiBwcm90b2NvbCBvciBhIHBsYWluIG9iamVjdC5cbiAqIEByZXR1cm4ge21vZHVsZTp4ZHVjZS5Jbml0RnVuY3Rpb259IEEgZnVuY3Rpb24gdGhhdCwgd2hlbiBjYWxsZWQsIHJldHVybnMgYW5cbiAqICAgICBpbml0aWFsIHZlcnNpb24gb2YgdGhlIHByb3ZpZGVkIGNvbGxlY3Rpb24uIElmIHRoZSBwcm92aWRlZCBjb2xsZWN0aW9uIGlzXG4gKiAgICAgbm90IGl0ZXJhYmxlLCB0aGVuIGBudWxsYCBpcyByZXR1cm5lZC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGluaXQoY29sbGVjdGlvbikge1xuICBzd2l0Y2ggKHRydWUpIHtcbiAgICBjYXNlIGlzSW1wbGVtZW50ZWQoY29sbGVjdGlvbiwgXCJpbml0XCIpOlxuICAgICAgcmV0dXJuIGNvbGxlY3Rpb25bcC5pbml0XTtcbiAgICBjYXNlIGlzU3RyaW5nKGNvbGxlY3Rpb24pOlxuICAgICAgcmV0dXJuICgpID0+IFwiXCI7XG4gICAgY2FzZSBpc0FycmF5KGNvbGxlY3Rpb24pOlxuICAgICAgcmV0dXJuICgpID0+IFtdO1xuICAgIGNhc2UgaXNPYmplY3QoY29sbGVjdGlvbik6XG4gICAgICByZXR1cm4gKCkgPT4gKHt9KTtcbiAgICBjYXNlIGlzRnVuY3Rpb24oY29sbGVjdGlvbik6XG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICB0aHJvdyBFcnJvcihcImluaXQgbm90IGF2YWlsYWJsZVwiKTtcbiAgICAgIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbi8qKlxuICogUmV0dXJucyBhIHN0ZXAgZnVuY3Rpb24gZm9yIGEgY29sbGVjdGlvbi4gVGhpcyBpcyBhIGZ1bmN0aW9uIHRoYXQgdGFrZXMgYW5cbiAqIGFjY3VtdWxhdG9yIGFuZCBhIHZhbHVlIGFuZCByZXR1cm5zIHRoZSByZXN1bHQgb2YgcmVkdWNpbmcgdGhlIHZhbHVlIGludG8gdGhlXG4gKiBhY2N1bXVsYXRvci4gSWYgdGhlIGNvbGxlY3Rpb24gZG9lc24ndCBzdXBwb3J0IHJlZHVjdGlvbiwgYG51bGxgIGlzIHJldHVybmVkLlxuICogVGhlIHJldHVybmVkIGZ1bmN0aW9uIGl0c2VsZiBzaW1wbHkgcmVkdWNlcyB0aGUgaW5wdXQgaW50byB0aGUgdGFyZ2V0XG4gKiBjb2xsZWN0aW9uIHdpdGhvdXQgbW9kaWZ5aW5nIGl0LlxuICpcbiAqIEluIG9yZGVyIHRvIHN1cHBvcnQgdGhlIGNvbnZlcnNpb24gb2YgZnVuY3Rpb25zIGludG8gcmVkdWNlcnMsIGZ1bmN0aW9uXG4gKiBzdXBwb3J0IGlzIGFsc28gcHJvdmlkZWQuXG4gKlxuICogQHBhcmFtIHsqfSBjb2xsZWN0aW9uIEEgY29sbGVjdGlvbiB0byBjcmVhdGUgYSBzdGVwIGZ1bmN0aW9uIGZvci4gVGhpcyBjYW4gYmVcbiAqICAgICBhbnl0aGluZyB0aGF0IHN1cHBvcnRzIHRoZSBpdGVyYXRpb24gcHJvdG9jb2wsIGEgcGxhaW4gb2JqZWN0LCBvciBhXG4gKiAgICAgZnVuY3Rpb24uXG4gKiBAcmV0dXJuIHttb2R1bGU6eGR1Y2UuU3RlcEZ1bmN0aW9ufSBBIHJlZHVjdGlvbiBmdW5jdGlvbiBmb3IgdGhlIHByb3ZpZGVkXG4gKiAgICAgY29sbGVjdGlvbiB0aGF0IHNpbXBseSBhZGRzIGFuIGVsZW1lbnQgdG8gdGhlIHRhcmdldCBjb2xsZWN0aW9uIHdpdGhvdXRcbiAqICAgICBtb2RpZnlpbmcgaXQuIElmIHRoZSBwcm92aWRlZCBjb2xsZWN0aW9uIGlzIG5vdCBpdGVyYWJsZSwgYG51bGxgIGlzXG4gKiAgICAgcmV0dXJuZWQuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBzdGVwKGNvbGxlY3Rpb24pIHtcbiAgc3dpdGNoICh0cnVlKSB7XG4gICAgY2FzZSBpc0ltcGxlbWVudGVkKGNvbGxlY3Rpb24sIFwic3RlcFwiKTpcbiAgICAgIHJldHVybiBjb2xsZWN0aW9uW3Auc3RlcF07XG5cbiAgICBjYXNlIGlzU3RyaW5nKGNvbGxlY3Rpb24pOlxuICAgICAgcmV0dXJuIChhY2MsIGlucHV0KSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gaXNPYmplY3QoaW5wdXQpID8ga3YoaW5wdXQpLnYgOiBpbnB1dDtcbiAgICAgICAgcmV0dXJuIGFjYyArIHZhbHVlO1xuICAgICAgfTtcblxuICAgIGNhc2UgaXNBcnJheShjb2xsZWN0aW9uKTpcbiAgICAgIHJldHVybiAoYWNjLCBpbnB1dCkgPT4ge1xuICAgICAgICBhY2MucHVzaChpbnB1dCk7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9O1xuXG4gICAgY2FzZSBpc09iamVjdChjb2xsZWN0aW9uKTpcbiAgICAgIHJldHVybiAoYWNjLCBpbnB1dCkgPT4ge1xuICAgICAgICBsZXQgdmFsdWUgPSBpbnB1dDtcblxuICAgICAgICBpZiAoIWlzT2JqZWN0KGlucHV0KSkge1xuICAgICAgICAgIC8vIGlmIHRoZSBpbnB1dCBpc24ndCBhbiBvYmplY3QsIHR1cm4gaXQgaW50byBhbiBvYmplY3Qgd2l0aCBhXG4gICAgICAgICAgLy8gbnVtZXJpY2FsIGtleSBvbmUgZ3JlYXRlciB0aGFuIHRoZSBtYXgga2V5IGFscmVhZHkgaW4gdGhlXG4gICAgICAgICAgLy8gYWNjdW11bGF0b3JcbiAgICAgICAgICBjb25zdCBtYXggPSBPYmplY3Qua2V5cyhhY2MpLnJlZHVjZSgoYSwgYikgPT4gTWF0aC5tYXgoYSwgYiksIC0xKTtcbiAgICAgICAgICB2YWx1ZSA9IHsgW21heCArIDFdOiBpbnB1dCB9O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgeyBrLCB2IH0gPSBrdih2YWx1ZSk7XG4gICAgICAgIGFjY1trXSA9IHY7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9O1xuXG4gICAgY2FzZSBpc0Z1bmN0aW9uKGNvbGxlY3Rpb24pOlxuICAgICAgcmV0dXJuIChhY2MsIGlucHV0KSA9PiBjb2xsZWN0aW9uKGFjYywgaW5wdXQpO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbi8qKlxuICogUmV0dXJucyBhIHJlc3VsdCBmdW5jdGlvbiBmb3IgYSBjb2xsZWN0aW9uLiBUaGlzIGlzIGEgZnVuY3Rpb24gdGhhdCBwZXJmb3Jtc1xuICogYW55IGZpbmFsIHByb2Nlc3NpbmcgdGhhdCBzaG91bGQgYmUgZG9uZSBvbiB0aGUgcmVzdWx0IG9mIGEgcmVkdWN0aW9uLiBJZiB0aGVcbiAqIGNvbGxlY3Rpb24gZG9lc24ndCBzdXBwb3J0IHJlZHVjdGlvbiwgYG51bGxgIGlzIHJldHVybmVkLlxuICpcbiAqIEluIG9yZGVyIHRvIHN1cHBvcnQgdGhlIGNvbnZlcnNpb24gb2YgZnVuY3Rpb25zIGludG8gcmVkdWNlcnMsIGZ1bmN0aW9uXG4gKiBzdXBwb3J0IGlzIGFsc28gcHJvdmlkZWQuXG4gKlxuICogQHBhcmFtIHsqfSBjb2xsZWN0aW9uIEEgY29sbGVjdGlvbiB0byBjcmVhdGUgYSBzdGVwIGZ1bmN0aW9uIGZvci4gVGhpcyBjYW4gYmVcbiAqICAgICBhbnl0aGluZyB0aGF0IHN1cHBvcnRzIHRoZSBpdGVyYXRpb24gcHJvdG9jb2wsIGEgcGxhaW4gb2JqZWN0LCBvciBhXG4gKiAgICAgZnVuY3Rpb24uXG4gKiBAcmV0dXJuIHttb2R1bGU6eGR1Y2UuUmVzdWx0RnVuY3Rpb259IEEgZnVuY3Rpb24gdGhhdCwgd2hlbiBnaXZlbiBhIHJlZHVjZWRcbiAqICAgICBjb2xsZWN0aW9uLCBwcm9kdWNlcyB0aGUgZmluYWwgb3V0cHV0LiBJZiB0aGUgcHJvdmlkZWQgY29sbGVjdGlvbiBpcyBub3RcbiAqICAgICBpdGVyYWJsZSwgYG51bGxgIHdpbGwgYmUgcmV0dXJuZWQuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiByZXN1bHQoY29sbGVjdGlvbikge1xuICBzd2l0Y2ggKHRydWUpIHtcbiAgICBjYXNlIGlzSW1wbGVtZW50ZWQoY29sbGVjdGlvbiwgXCJyZXN1bHRcIik6XG4gICAgICByZXR1cm4gY29sbGVjdGlvbltwLnJlc3VsdF07XG4gICAgY2FzZSBpc1N0cmluZyhjb2xsZWN0aW9uKTpcbiAgICBjYXNlIGlzQXJyYXkoY29sbGVjdGlvbik6XG4gICAgY2FzZSBpc09iamVjdChjb2xsZWN0aW9uKTpcbiAgICBjYXNlIGlzRnVuY3Rpb24oY29sbGVjdGlvbik6XG4gICAgICByZXR1cm4gdmFsdWUgPT4gdmFsdWU7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHJlZHVjZXIgb2JqZWN0IGZyb20gYSBmdW5jdGlvbiBvciBmcm9tIGEgYnVpbHQtaW4gcmVkdWNpYmxlIHR5cGVcbiAqIChhcnJheSwgb2JqZWN0LCBvciBzdHJpbmcpLlxuICpcbiAqIFRvIGNyZWF0ZSBhIHJlZHVjZXIgZm9yIGFycmF5cywgb2JqZWN0cywgb3Igc3RyaW5ncywgc2ltcGx5IHBhc3MgYW4gZW1wdHlcbiAqIHZlcnNpb24gb2YgdGhhdCBjb2xsZWN0aW9uIHRvIHRoaXMgZnVuY3Rpb24gKGUuZy4sIGB0b1JlZHVjZXIoW10pYCkuXG4gKlxuICogVGhlIG5vdGFibGUgdXNlIGZvciB0aGlzIGZ1bmN0aW9uIHRob3VnaCBpcyB0byB0dXJuIGEgcmVkdWN0aW9uIGZ1bmN0aW9uIGludG9cbiAqIGEgcmVkdWNlciBvYmplY3QuIFRoZSBmdW5jdGlvbiBpcyBhIGZ1bmN0aW9uIG9mIHR3byBwYXJhbWV0ZXJzLCBhblxuICogYWNjdW11bGF0b3IgYW5kIGEgdmFsdWUsIGFuZCByZXR1cm5zIHRoZSBhY2N1bXVsYXRvciB3aXRoIHRoZSB2YWx1ZSBpbiBpdC5cbiAqIFRoaXMgaXMgZXhhY3RseSB0aGUgc2FtZSBraW5kIG9mIGZ1bmN0aW9uIHRoYXQgaXMgcGFzc2VkIHRvIHJlZHVjdGlvblxuICogZnVuY3Rpb25zIGxpa2UgSmF2YVNjcmlwdCdzIGBBcnJheS5wcm90b3R5cGUucmVkdWNlYCBhbmQgTG9kYXNoJ3MgYF8ucmVkdWNlYC5cbiAqXG4gKiBOb3RlIGluIHBhcnRpY3VsYXIgdGhhdCB0aGUgb3V0cHV0IG9mIHRoaXMgcmVkdWNlciBkb2VzIG5vdCBuZWVkIHRvIGJlIGFcbiAqIGNvbGxlY3Rpb24uIEl0IGNhbiBiZSBhbnl0aGluZy4gV2hpbGUgdHJhbnNkdWNpbmcgbm9ybWFsbHkgaW52b2x2ZXNcbiAqIHRyYW5zZm9ybWluZyBvbmUgY29sbGVjdGlvbiBpbnRvIGFub3RoZXIsIGl0IG5lZWQgbm90IGJlIHNvLiBGb3IgZXhhbXBsZSxcbiAqIGhlcmUgaXMgYSByZWR1Y2VyIHRoYXQgd2lsbCByZXN1bHQgaW4gc3VtbWluZyBvZiB0aGUgY29sbGVjdGlvbiB2YWx1ZXMuXG4gKlxuICogYGBgXG4gKiBpbXBvcnQgeyB0b1JlZHVjZXIsIHJlZHVjZSB9IGZyb20gXCJAY2hhbmtvL3hkdWNlXCI7XG4gKlxuICogY29uc3Qgc3VtUmVkdWNlciA9IHRvUmVkdWNlcigoYWNjLCBpbnB1dCkgPT4gYWNjICsgaW5wdXQpO1xuICogY29uc3Qgc3VtID0gcmVkdWNlKFsxLCAyLCAzLCA0LCA1XSwgc3VtUmVkdWNlciwgMCk7XG4gKiBjb25zb2xlLmxvZyhzdW0pOyAgIC8vIC0+IDE1XG4gKiBgYGBcbiAqXG4gKiBUaGlzIGNhbiBiZSBjb21iaW5lZCB3aXRoIHRyYW5zZHVjZXJzIGFzIHdlbGwsIGFzIGluIHRoaXMgY2FsY3VsYXRpb24gb2YgdGhlXG4gKiBzdW0gb2YgdGhlICpzcXVhcmVzKiBvZiB0aGUgY29sbGVjdGlvbiB2YWx1ZXMuXG4gKlxuICogYGBgXG4gKiBpbXBvcnQgeyB0b1JlZHVjZXIsIHRyYW5zZHVjZSB9IGZyb20gXCJAY2hhbmtvL3hkdWNlXCI7XG4gKiBpbXBvcnQgeyBtYXAgfSBmcm9tIFwiQGNoYW5rby90cmFuc2R1Y2Vyc1wiO1xuICpcbiAqIGNvbnN0IHN1bVJlZHVjZXIgPSB0b1JlZHVjZXIoKGFjYywgaW5wdXQpID0+IGFjYyArIGlucHV0KTtcbiAqIGNvbnN0IHN1bSA9IHRyYW5zZHVjZShbMSwgMiwgMywgNCwgNV0sIG1hcCh4ID0+IHggKiB4KSwgc3VtUmVkdWNlciwgMCk7XG4gKiBjb25zb2xlLmxvZyhzdW0pOyAgIC8vIC0+IDU1XG4gKiBgYGBcbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcGFyYW0geyp9IGNvbGxlY3Rpb24gQW4gaXRlcmFibGUgY29sbGVjdGlvbiBvciBhIHJlZHVjZXIgZnVuY3Rpb24uXG4gKiBAcmV0dXJuIHtvYmplY3R9IEFuIG9iamVjdCBjb250YWluaW5nIHByb3RvY29sIHByb3BlcnRpZXMgZm9yIGluaXQsIHN0ZXAsIGFuZFxuICogICAgIHJlc3VsdC4gVGhpcyBvYmplY3QgaXMgc3VpdGFibGUgZm9yIHVzZSBhcyBhIHJlZHVjZXIgb2JqZWN0IChvbmUgcHJvdmlkZWRcbiAqICAgICB0byBge0BsaW5rIHhkdWNlLnJlZHVjZXxyZWR1Y2V9YCBvciBge0BsaW5rIHhkdWNlLnRyYW5zZHVjZXx0cmFuc2R1Y2V9YCkuXG4gKiAgICAgSWYgdGhlIHByb3ZpZGVkIGNvbGxlY3Rpb24gaXMgbm90IGl0ZXJhYmxlLCBhbGwgb2YgdGhlIHByb3BlcnRpZXMgb2YgdGhpc1xuICogICAgIG9iamVjdCB3aWxsIGJlIGBudWxsYC5cbiAqL1xuZnVuY3Rpb24gdG9SZWR1Y2VyKGNvbGxlY3Rpb24pIHtcbiAgcmV0dXJuIE9iamVjdC5mcmVlemUoe1xuICAgIFtwLmluaXRdOiBpbml0KGNvbGxlY3Rpb24pLFxuICAgIFtwLnN0ZXBdOiBzdGVwKGNvbGxlY3Rpb24pLFxuICAgIFtwLnJlc3VsdF06IHJlc3VsdChjb2xsZWN0aW9uKVxuICB9KTtcbn1cblxuLyoqXG4gKiBBIHJlZHVjZXIgb2JqZWN0IGZvciBhcnJheXMuXG4gKlxuICogQHR5cGUge21vZHVsZTp4ZHVjZS5SZWR1Y2VyfVxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgQVJSQVlfUkVEVUNFUiA9IHRvUmVkdWNlcihbXSk7XG5cbi8qKlxuICogQSByZWR1Y2VyIG9iamVjdCBmb3Igb2JqZWN0cy5cbiAqXG4gKiBAdHlwZSB7bW9kdWxlOnhkdWNlLlJlZHVjZXJ9XG4gKiBAcHJpdmF0ZVxuICovXG5jb25zdCBPQkpFQ1RfUkVEVUNFUiA9IHRvUmVkdWNlcih7fSk7XG5cbi8qKlxuICogQSByZWR1Y2VyIG9iamVjdCBmb3Igc3RyaW5ncy5cbiAqXG4gKiBAdHlwZSB7bW9kdWxlOnhkdWNlLlJlZHVjZXJ9XG4gKiBAcHJpdmF0ZVxuICovXG5jb25zdCBTVFJJTkdfUkVEVUNFUiA9IHRvUmVkdWNlcihcIlwiKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgdHJhbnNkdWNlciBmcm9tIGEgZnVuY3Rpb24gYW5kIGEgdHJhbnNkdWNlciB0byBjaGFpbiBpdCB0by5cbiAqXG4gKiBUaGlzIGlzIGluIG1vc3QgcmVzcGVjdHMganVzdCBsaWtlIHtAbGluayBtb2R1bGU6eGR1Y2UudG9SZWR1Y2VyfHRvUmVkdWNlcn0sXG4gKiB3aXRoIHR3byBub3RhYmxlIGRpZmZlcmVuY2VzLiBPbmUgaXMgdGhhdCBpdCByZXF1aXJlcyBhIHRyYW5zZHVjZXIgdG8gY2hhaW5cbiAqIHRvLCBhbmQgaXQgZG9lcyB0aGUgY2hhaW5pbmcgYXMgYSBwYXJ0IG9mIGNyZWF0aW5nIHRoZSBuZXcgdHJhbnNkdWNlci4gVGhlXG4gKiBvdGhlciBpcyB0aGF0IGl0IGluY2x1ZGVzIGEgdXNhYmxlIGBpbml0YCBmdW5jdGlvbiwgd2hlcmUgcGFzc2luZyBhIGZ1bmN0aW9uXG4gKiB0byB7QGxpbmsgbW9kdWxlOnhkdWNlLnRvUmVkdWNlcnx0b1JlZHVjZXJ9IHdvdWxkIGNyZWF0ZSBhbiBpbml0IGZ1bmN0aW9uXG4gKiB0aGF0IHRocm93cyBhbiBlcnJvciBpZiBpdCdzIGNhbGxlZC5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIGFwcGxpZXMgdGhlIGdpdmVuIGZ1bmN0aW9uIGFzIHRoZSBgc3RlcGAgZnVuY3Rpb24gb2YgdGhlXG4gKiByZXR1cm5lZCB0cmFuc2R1Y2VyLCBhbmQgdGhlIGBpbml0YCBhbmQgYHJlc3VsdGAgZnVuY3Rpb25zIHNpbXBseSBjYWxsIHRoZVxuICogc2FtZSBmdW5jdGlvbnMgaW4gdGhlIG5leHQgdHJhbnNkdWNlciBkb3duIHRoZSBjaGFpbi4gVGhpcyBpcyBwcmVjaXNlbHkgd2hhdFxuICogKm1vc3QqIHRyYW5zZHVjZXJzIHdhbnQuLi5gaW5pdGAgYW5kIGByZXN1bHRgIGZ1bmN0aW9ucyBhcmUgbm9ybWFsbHkgaGFuZGxlZFxuICogYnkgdGhlIHJlZHVjZXIgYXQgdGhlIGVuZCBvZiB0aGUgdHJhbnNkdWNlciBjaGFpbi4uLmJ1dCBpbiB0aGUgcmFyZSBjYXNlXG4gKiB3aGVuIGBpbml0YCBvciBgcmVzdWx0YCBtdXN0IGRvIG1vcmUgdGhhbiB0aGlzLCB0aGUgdHJhbnNkdWNlciBtdXN0IGJlXG4gKiBjcmVhdGVkIG1hbnVhbGx5LlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gZG9lcyBub3QgYXV0b21hdGljYWxseSBjaGFpbiB0aGUgYHN0ZXBgIGZ1bmN0aW9uIHRvIHRoZSBuZXh0XG4gKiBvbmUgZG93biB0aGUgbGluZSwgYXMgdGhhdCBjYW4gYmUgZG9uZSBpbiBhbnkgbnVtYmVyIG9mIGRpZmZlcmVudCB3YXlzLiBUaHVzXG4gKiB0aGUgZnVuY3Rpb24gaXRzZWxmIHNob3VsZCBjYWxsIHRoZSBgc3RlcGAgZnVuY3Rpb24gaW4gYHhmb3JtYCBpbiB3aGF0ZXZlclxuICogd2F5IGlzIGFwcHJvcHJpYXRlLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwYXJhbSB7bW9kdWxlOnhkdWNlLlN0ZXBGdW5jdGlvbn0gZm4gVGhlIHN0ZXAgZnVuY3Rpb24gZm9yIHRoZSB0cmFuc2R1Y2VyLlxuICogQHBhcmFtIHttb2R1bGU6eGR1Y2UuVHJhbnNkdWNlcn0geGZvcm0gVGhlIG5leHQgdHJhbnNkdWNlciBvYmplY3QgaW4gdGhlXG4gKiAgICAgY2hhaW4uXG4gKiBAcmV0dXJucyB7bW9kdWxlOnhkdWNlLlRyYW5zZHVjZXJ9IEEgbmV3IHRyYW5zZHVjZXIsIGNoYWluaW5nIHRoZSBzdXBwbGllZFxuICogICAgIGZ1bmN0aW9uIHRvIHRoZSBzdXBwbGllZCB0cmFuc2R1Y2VyLlxuICovXG5mdW5jdGlvbiB0b1RyYW5zZHVjZXIoZm4sIHhmb3JtKSB7XG4gIHJldHVybiB7XG4gICAgW3AuaW5pdF0oKSB7XG4gICAgICByZXR1cm4geGZvcm1bcC5pbml0XSgpO1xuICAgIH0sXG5cbiAgICBbcC5zdGVwXTogZm4sXG5cbiAgICBbcC5yZXN1bHRdKHZhbHVlKSB7XG4gICAgICByZXR1cm4geGZvcm1bcC5yZXN1bHRdKHZhbHVlKTtcbiAgICB9XG4gIH07XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHJlZHVjdGlvbiBmdW5jdGlvbiBmcm9tIGEgdHJhbnNkdWNlciBhbmQgYSByZWR1Y2VyLlxuICpcbiAqIFRoaXMgcHJvZHVjZXMgYSBmdW5jdGlvbiB0aGF0J3Mgc3VpdGFibGUgZm9yIGJlaW5nIHBhc3NlZCBpbnRvIG90aGVyXG4gKiBsaWJyYXJpZXMnIHJlZHVjZSBmdW5jdGlvbnMsIHN1Y2ggYXMgSmF2YVNjcmlwdCdzIGBBcnJheS5wcm90b3R5cGUucmVkdWNlYCBvclxuICogTG9kYXNoJ3MgYF8ucmVkdWNlYC4gSXQgcmVxdWlyZXMgYm90aCBhIHRyYW5zZm9ybWVyIGFuZCBhIHJlZHVjZXIgYmVjYXVzZVxuICogcmVkdWN0aW9uIGZ1bmN0aW9ucyBmb3IgdGhvc2UgbGlicmFyaWVzIG11c3Qga25vdyBob3cgdG8gZG8gYm90aC4gVGhlIHJlZHVjZXJcbiAqIGNhbiBiZSBhIHN0YW5kYXJkIHJlZHVjZXIgb2JqZWN0IGxpa2UgdGhlIG9uZXMgc2VudFxuICogdG9ge0BsaW5rIG1vZHVsZTp4ZHVjZS50cmFuc2R1Y2V8dHJhbnNkdWNlfWAgb3JcbiAqIGB7QGxpbmsgbW9kdWxlOnhkdWNlLnJlZHVjZXxyZWR1Y2V9YCwgb3IgaXQgY2FuIGJlIGEgcGxhaW4gZnVuY3Rpb24gdGhhdFxuICogdGFrZXMgdHdvIHBhcmFtZXRlcnMgYW5kIHJldHVybnMgdGhlIHJlc3VsdCBvZiByZWR1Y2luZyB0aGUgc2Vjb25kIHBhcmFtZXRlclxuICogaW50byB0aGUgZmlyc3QuXG4gKlxuICogSWYgdGhlcmUgaXMgbm8gbmVlZCBmb3IgYSB0cmFuc2Zvcm1hdGlvbiwgdGhlbiBwYXNzIGluIHRoZVxuICogYHtAbGluayBtb2R1bGU6dHJhbnNkdWNlcnMuaWRlbnRpdHl8aWRlbnRpdHl9YCB0cmFuc2R1Y2VyLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwYXJhbSB7bW9kdWxlOnhkdWNlLlJlZHVjZXJ9IHhmb3JtIEEgdHJhbnNkdWNlciBvYmplY3Qgd2hvc2Ugc3RlcFxuICogICAgIGZ1bmN0aW9uIHdpbGwgYmVjb21lIHRoZSByZXR1cm5lZCByZWR1Y3Rpb24gZnVuY3Rpb24uXG4gKiBAcGFyYW0geyhtb2R1bGU6eGR1Y2UuU3RlcEZ1bmN0aW9ufG1vZHVsZTp4ZHVjZS5SZWR1Y2VyKX0gcmVkdWNlciBBXG4gKiAgICAgcmVkdWNlciB0aGF0IGtub3dzIGhvdyB0byByZWR1Y2UgdmFsdWVzIGludG8gYW4gb3V0cHV0IGNvbGxlY3Rpb24uIFRoaXNcbiAqICAgICBjYW4gZWl0aGVyIGJlIGEgcmVkdWNpbmcgZnVuY3Rpb24gb3IgYSB0cmFuc2R1Y2VyIG9iamVjdCB3aG9zZSBgc3RlcGBcbiAqICAgICBmdW5jdGlvbiBrbm93cyBob3cgdG8gcGVyZm9ybSB0aGlzIHJlZHVjdGlvbi5cbiAqIEByZXR1cm5zIHttb2R1bGU6eGR1Y2UuU3RlcEZ1bmN0aW9ufSBBIGZ1bmN0aW9uIHRoYXQgaGFuZGxlcyBib3RoIHRoZVxuICogICAgIHRyYW5zZm9ybWF0aW9uIGFuZCB0aGUgcmVkdWN0aW9uIG9mIGEgdmFsdWUgb250byBhIHRhcmdldCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gdG9GdW5jdGlvbih4Zm9ybSwgcmVkdWNlcikge1xuICBjb25zdCByID0gdHlwZW9mIHJlZHVjZXIgPT09IFwiZnVuY3Rpb25cIiA/IHRvUmVkdWNlcihyZWR1Y2VyKSA6IHJlZHVjZXI7XG4gIGNvbnN0IHJlc3VsdCA9IHhmb3JtKHIpO1xuICByZXR1cm4gcmVzdWx0W3Auc3RlcF0uYmluZChyZXN1bHQpO1xufVxuXG4vKipcbiAqIE1hcmtzIGEgdmFsdWUgYXMgY29tcGxldGUuXG4gKlxuICogVGhpcyBpcyBkb25lIGJ5IHdyYXBwaW5nIHRoZSB2YWx1ZS4gVGhpcyBtZWFucyB0aHJlZSB0aGluZ3M6IGZpcnN0LCBhXG4gKiBjb21wbGV0ZSBvYmplY3QgbWF5IGJlIG1hcmtlZCBhcyBjb21wbGV0ZSBhZ2Fpbjsgc2Vjb25kLCBhIGNvbXBsZXRlIHZhbHVlXG4gKiBpc24ndCB1c2FibGUgd2l0aG91dCBiZWluZyB1bmNvbXBsZXRlZCBmaXJzdDsgYW5kIHRoaXJkIGFueSB0eXBlIG9mIHZhbHVlXG4gKiAoaW5jbHVkaW5nIGB1bmRlZmluZWRgKSBtYXkgYmUgbWFya2VkIGFzIGNvbXBsZXRlLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGJlIGNvbXBsZXRlZC5cbiAqIEByZXR1cm4geyp9IEEgY29tcGxldGVkIHZlcnNpb24gb2YgdGhlIHByb3ZpZGVkIHZhbHVlLiBUaGlzIHJlZHVjdGlvbiBpc1xuICogICAgIGFjaGlldmVkIGJ5IHdyYXBwaW5nIHRoZSB2YWx1ZSBpbiBhIG1hcmtlciBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIGNvbXBsZXRlKHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgW3AucmVkdWNlZF06IHRydWUsXG4gICAgW3AudmFsdWVdOiB2YWx1ZVxuICB9O1xufVxuXG4vKipcbiAqIFJlbW92ZXMgdGhlIGNvbXBsZXRlIHN0YXR1cyBmcm9tIGEgY29tcGxldGVkIHZhbHVlLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gaXMgaW50ZW5kZWQgdG8gYmUgdXNlZCB3aGVuIGl0J3MgY2VydGFpbiB0aGF0IGEgdmFsdWUgaXNcbiAqIGFscmVhZHkgbWFya2VkIGFzIGNvbXBsZXRlLiBJZiBpdCBpcyBub3QsIGB1bmRlZmluZWRgIHdpbGwgYmUgcmV0dXJuZWRcbiAqIGluc3RlYWQgb2YgdGhlIHZhbHVlLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGJlIHVuY29tcGxldGVkLlxuICogQHJldHVybiB7Kn0gQW4gdW5jb21wbGV0ZWQgdmVyc2lvbiBvZiB0aGUgcHJvdmlkZWQgdmFsdWUuIElmIHRoZSB2YWx1ZSB3YXNcbiAqICAgICBub3QgY29tcGxldGUgaW4gdGhlIGZpcnN0IHBsYWNlLCBgdW5kZWZpbmVkYCB3aWxsIGJlIHJldHVybmVkIGluc3RlYWQuXG4gKi9cbmZ1bmN0aW9uIHVuY29tcGxldGUodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlPy5bcC52YWx1ZV07XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGEgdmFsdWUgaXMgbWFya2VkIGFzIGNvbXBsZXRlLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3QgZm9yIGl0cyBjb21wbGV0ZSBzdGF0dXMuXG4gKiBAcmV0dXJuIHtib29sZWFufSBFaXRoZXIgYHRydWVgIGlmIHRoZSB2YWx1ZSBpcyBjb21wbGV0ZSwgb3IgYGZhbHNlYCBpZiBpdCBpc1xuICogICAgIG5vdC5cbiAqL1xuZnVuY3Rpb24gaXNDb21wbGV0ZWQodmFsdWUpIHtcbiAgcmV0dXJuICEhdmFsdWU/LltwLnJlZHVjZWRdO1xufVxuXG4vKipcbiAqIE1ha2VzIHN1cmUgdGhhdCBhIHZhbHVlIGlzIG1hcmtlZCBhcyBjb21wbGV0ZTsgaWYgaXQgaXMgbm90LCBpdCB3aWxsIGJlXG4gKiBtYXJrZWQgYXMgY29tcGxldGUuXG4gKlxuICogVGhpcyBkaWZmZXJzIGZyb20ge0BsaW5rIG1vZHVsZTp4ZHVjZS5jb21wbGV0ZXxjb21wbGV0ZX0gaW4gdGhhdFxuICogaWYgdGhlIHZhbHVlIGlzIGFscmVhZHkgY29tcGxldGUsIHRoaXMgZnVuY3Rpb24gd29uJ3QgY29tcGxldGUgaXQgYWdhaW4uXG4gKiBUaGVyZWZvcmUgdGh1cyBmdW5jdGlvbiBjYW4ndCBiZSB1c2VkIHRvIG1ha2UgYSB2YWx1ZSBjb21wbGV0ZSBtdWx0aXBsZVxuICogdGltZXMuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gYmUgY29tcGxldGVkLlxuICogQHJldHVybiB7Kn0gSWYgdGhlIHZhbHVlIGlzIGFscmVhZHkgY29tcGxldGUsIHRoZW4gdGhlIHZhbHVlIGlzIHNpbXBseVxuICogICAgIHJldHVybmVkLiBPdGhlcndpc2UsIGEgY29tcGxldGVkIHZlcnNpb24gb2YgdGhlIHZhbHVlIGlzIHJldHVybmVkLlxuICovXG5mdW5jdGlvbiBlbnN1cmVDb21wbGV0ZWQodmFsdWUpIHtcbiAgcmV0dXJuIGlzQ29tcGxldGVkKHZhbHVlKSA/IHZhbHVlIDogY29tcGxldGUodmFsdWUpO1xufVxuXG4vKipcbiAqIFJlbW92ZXMgdGhlIGNvbXBsZXRlIHN0YXR1cyBmcm9tIGEgdmFsdWUsIGFzIGxvbmcgYXMgaXQgYWN0dWFsbHkgaXMgY29tcGxldGUuXG4gKlxuICogVGhpcyBkb2VzIGEgY2hlY2sgdG8gbWFrZSBzdXJlIHRoZSB2YWx1ZSBwYXNzZWQgaW4gYWN0dWFsbHkgaXMgY29tcGxldGUuIElmXG4gKiBpdCBpc24ndCwgdGhlIHZhbHVlIGl0c2VsZiBpcyByZXR1cm5lZC4gSXQncyBtZWFudCB0byBiZSB1c2VkIHdoZW4gdGhlXG4gKiBjb21wbGV0ZWQgc3RhdHVzIGlzIHVuY2VydGFpbi5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSBjb21wbGV0ZSB2YWx1ZSB0byBiZSB1bmNvbXBsZXRlZC5cbiAqIEByZXR1cm4geyp9IElmIHRoZSB2YWx1ZSBpcyBhbHJlYWR5IHVuY29tcGxldGVkLCB0aGUgdmFsdWUgaXMgc2ltcGx5XG4gKiAgICAgcmV0dXJuZWQuIE90aGVyd2lzZSBhbiB1bmNvbXBsZXRlZCB2ZXJzaW9uIG9mIHRoZSB2YWx1ZSBpcyByZXR1cm5lZC5cbiAqL1xuZnVuY3Rpb24gZW5zdXJlVW5jb21wbGV0ZWQodmFsdWUpIHtcbiAgcmV0dXJuIGlzQ29tcGxldGVkKHZhbHVlKSA/IHVuY29tcGxldGUodmFsdWUpIDogdmFsdWU7XG59XG5cbi8qKlxuICogUmVkdWNlcyB0aGUgZWxlbWVudHMgb2YgdGhlIGlucHV0IGNvbGxlY3Rpb24gdGhyb3VnaCBhIHJlZHVjZXIgaW50byBhbiBvdXRwdXRcbiAqIGNvbGxlY3Rpb24uXG4gKlxuICogVGhpcyBpcyB0aGUgbG93ZXN0LWxldmVsIG9mIHRoZSB0cmFuc2R1Y3Rpb24gZnVuY3Rpb25zLiBJbiBmYWN0LCB0aGlzIG9uZSBpc1xuICogc28gbG93LWxldmVsIHRoYXQgaXQgZG9lc24ndCBoYXZlIGEgbG90IG9mIHVzZSBpbiBub3JtYWwgb3BlcmF0aW9uLiBJdCdzIG1vcmVcbiAqIHVzZWZ1bCBmb3Igd3JpdGluZyB5b3VyIG93biB0cmFuc2Zvcm1hdGlvbiBmdW5jdGlvbnMuXG4gKlxuICogYHJlZHVjZWAgZG9lc24ndCBhc3N1bWUgdGhhdCB0aGVyZSdzIGV2ZW4gYSB0cmFuc2Zvcm1hdGlvbi4gSXQgcmVxdWlyZXMgYW5cbiAqIGluaXRpYWwgY29sbGVjdGlvbiBhbmQgYSByZWR1Y2VyIG9iamVjdCB0aGF0IGlzIG1hdGNoZWQgdG8gdGhhdCBpbml0aWFsXG4gKiBjb2xsZWN0aW9uLiBUaGUgcmVkdWNlciBvYmplY3QgbXVzdCBpbXBsZW1lbnQgdGhlIGBzdGVwYCBhbmQgYHJlc3VsdGBcbiAqIHByb3RvY29scywgd2hpY2ggaW5zdHJ1Y3QgYHJlZHVjZWAgb24gaG93IHRvIGJ1aWxkIHVwIHRoZSBjb2xsZWN0aW9uLiBUaGVcbiAqIHJlZHVjZXIgbWF5IGltcGxlbWVudCBhIHRyYW5zZm9ybWF0aW9uIGFzIHdlbGwsIGJ1dCBhbGwgdGhhdCdzIGltcG9ydGFudCBoZXJlXG4gKiBpcyB0aGF0IGl0IGNhbiBkbyB0aGUgcmVkdWN0aW9uLlxuICpcbiAqIFRoZSBpbnB1dCBjb2xsZWN0aW9uIG5lZWQgb25seSBpbXBsZW1lbnQgYGl0ZXJhYmxlYC4gSXQgaXMgbm90IG5lY2Vzc2FyeSBmb3JcbiAqIHRoZSBpbnB1dCBhbmQgb3V0cHV0IGNvbGxlY3Rpb25zIHRvIGJlIG9mIHRoZSBzYW1lIHR5cGU7IGFzIGxvbmcgYXMgdGhlIGlucHV0XG4gKiBpbXBsZW1lbnRzIGBpdGVyYWJsZWAgYW5kIHRoZSByZWR1Y2VyIGltcGxlbWVudHMgYHN0ZXBgIGFuZCBgcmVzdWx0YFxuICogYXBwcm9wcmlhdGUgdG8gdGhlIHR5cGUgb2YgdGhlIGBpbml0YCBjb2xsZWN0aW9uLCB0aGVuIGFueSB0cmFuc2xhdGlvblxuICogYmV0d2VlbiBjb2xsZWN0aW9uIHR5cGVzIGNhbiBvY2N1ci5cbiAqXG4gKiBUaGUgbm9ybWFsIGNvdXJzZSBvZiBvcGVyYXRpb24gd2lsbCBiZSB0byBjYWxsXG4gKiB7QGxpbmsgbW9kdWxlOnhkdWNlLnRyYW5zZHVjZXx0cmFuc2R1Y2V9IGluc3RlYWQsIGFzIHRoYXQgZnVuY3Rpb24gbWFrZXMgaXRcbiAqIGVhc3kgdG8gY29tYmluZSB0cmFuc2Zvcm1hdGlvbnMgd2l0aCByZWR1Y3Rpb25zIGFuZCBjYW4gb3B0aW9uYWxseSBmaWd1cmUgb3V0XG4gKiB0aGUgaW5pdGlhbCBjb2xsZWN0aW9uIGl0c2VsZi5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcGFyYW0geyp9IGNvbGxlY3Rpb24gVGhlIGlucHV0IGNvbGxlY3Rpb24uIFRoZSBvbmx5IHJlcXVpcmVtZW50IG9mIHRoaXNcbiAqICAgICBjb2xsZWN0aW9uIGlzIHRoYXQgaXQgaW1wbGVtZW50IHRoZSBgaXRlcmFibGVgIHByb3RvY29sLiBTcGVjaWFsIHN1cHBvcnRcbiAqICAgICBpcyBwcm92aWRlZCBieSB0aGUgbGlicmFyeSBmb3Igb2JqZWN0cywgc28gdGhleSBjYW4gYmUgdXNlZCBhcyB3ZWxsLlxuICogQHBhcmFtIHttb2R1bGU6eGR1Y2UuUmVkdWNlcn0gcmVkdWNlciBBbiBvYmplY3QgdGhhdCBpbXBsZW1lbnRzIHRoZSBgc3RlcGBcbiAqICAgICBhbmQgYHJlc3VsdGAgcHJvdG9jb2xzLiBUaGlzIG9iamVjdCBtdXN0IGtub3cgaG93IHRvIHByb2R1Y2UgYW4gb3V0cHV0XG4gKiAgICAgY29sbGVjdGlvbiB0aHJvdWdoIHRob3NlIHByb3RvY29sIGZ1bmN0aW9ucy5cbiAqIEBwYXJhbSB7Kn0gaW5pdCBhIGNvbGxlY3Rpb24gb2YgdGhlIHNhbWUgdHlwZSBhcyB0aGUgb3V0cHV0IGNvbGxlY3Rpb24uIEl0XG4gKiAgICAgbmVlZCBub3QgYmUgZW1wdHk7IGlmIGl0IGlzIG5vdCwgdGhlIGV4aXN0aW5nIGVsZW1lbnRzIGFyZSByZXRhaW5lZCBhc1xuICogICAgIHRoZSBpbnB1dCBjb2xsZWN0aW9uIGlzIHJlZHVjZWQgaW50byBpdC5cbiAqIEByZXR1cm4geyp9IEEgbmV3IGNvbGxlY3Rpb24sIGNvbnNpc3Rpbmcgb2YgdGhlIGBpbml0YCBjb2xsZWN0aW9uIHdpdGggYWxsIG9mXG4gKiAgICAgdGhlIGVsZW1lbnRzIG9mIHRoZSBgY29sbGVjdGlvbmAgY29sbGVjdGlvbiByZWR1Y2VkIGludG8gaXQuXG4gKi9cbmZ1bmN0aW9uIHJlZHVjZShjb2xsZWN0aW9uLCByZWR1Y2VyLCBpbml0KSB7XG4gIGlmIChjb2xsZWN0aW9uID09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IGl0ZXIgPSBpdGVyYXRvcihjb2xsZWN0aW9uKTtcbiAgaWYgKCFpdGVyKSB7XG4gICAgdGhyb3cgRXJyb3IoYENhbm5vdCByZWR1Y2UgYW4gaW5zdGFuY2Ugb2YgJHtjb2xsZWN0aW9uLmNvbnN0cnVjdG9yLm5hbWV9YCk7XG4gIH1cblxuICBsZXQgYWNjID0gaW5pdDtcbiAgbGV0IHN0ZXAgPSBpdGVyLm5leHQoKTtcblxuICB3aGlsZSAoIXN0ZXAuZG9uZSkge1xuICAgIGFjYyA9IHJlZHVjZXJbcC5zdGVwXShhY2MsIHN0ZXAudmFsdWUpO1xuICAgIGlmIChpc0NvbXBsZXRlZChhY2MpKSB7XG4gICAgICBhY2MgPSB1bmNvbXBsZXRlKGFjYyk7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgc3RlcCA9IGl0ZXIubmV4dCgpO1xuICB9XG5cbiAgcmV0dXJuIHJlZHVjZXJbcC5yZXN1bHRdKGFjYyk7XG59XG5cbmV4cG9ydCB7XG4gIGluaXQsXG4gIHN0ZXAsXG4gIHJlc3VsdCxcbiAgdG9SZWR1Y2VyLFxuICBBUlJBWV9SRURVQ0VSLFxuICBPQkpFQ1RfUkVEVUNFUixcbiAgU1RSSU5HX1JFRFVDRVIsXG4gIHRvVHJhbnNkdWNlcixcbiAgdG9GdW5jdGlvbixcbiAgY29tcGxldGUsXG4gIHVuY29tcGxldGUsXG4gIGlzQ29tcGxldGVkLFxuICBlbnN1cmVDb21wbGV0ZWQsXG4gIGVuc3VyZVVuY29tcGxldGVkLFxuICByZWR1Y2Vcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuLyoqXG4gKiBGdW5jdGlvbnMgZGVhbGluZyB3aXRoIHRoZSBhY3R1YWwgdHJhbnNmb3JtYXRpb24gb2YgdmFsdWVzIGFuZCBmb3IgY2hvb3NpbmdcbiAqIHRoZSByZWR1Y2VyIGR1cmluZyB0cmFuc2R1Y3Rpb24uXG4gKlxuICogQG1vZHVsZSB4ZHVjZS90cmFuc2Zvcm1hdGlvblxuICogQHByaXZhdGVcbiAqL1xuXG5pbXBvcnQgeyBwcm90b2NvbHMgYXMgcCwgaXNJbXBsZW1lbnRlZCB9IGZyb20gXCJtb2R1bGVzL3Byb3RvY29sXCI7XG5pbXBvcnQgeyBpdGVyYXRvciB9IGZyb20gXCJtb2R1bGVzL2l0ZXJhdGlvblwiO1xuaW1wb3J0IHtcbiAgaXNDb21wbGV0ZWQsXG4gIHRvUmVkdWNlcixcbiAgcmVkdWNlLFxuICBBUlJBWV9SRURVQ0VSLFxuICBPQkpFQ1RfUkVEVUNFUixcbiAgU1RSSU5HX1JFRFVDRVJcbn0gZnJvbSBcIm1vZHVsZXMvcmVkdWN0aW9uXCI7XG5pbXBvcnQgeyBpc0Z1bmN0aW9uLCBpc0FycmF5LCBpc09iamVjdCwgaXNTdHJpbmcgfSBmcm9tIFwibW9kdWxlcy91dGlsc1wiO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gaXRlcmF0b3IgdGhhdCBpcyBhbHNvIGEgdHJhbnNkdWNlciwgdHJhbnNmb3JtaW5nIGl0cyBjb2xsZWN0aW9uXG4gKiBvbmUgZWxlbWVudCBhdCBhIHRpbWUuIFRoaXMgaXMgdGhlIGFjdHVhbCBvdXRwdXQgb2YgdGhlXG4gKiB7QGxpbmsgbW9kdWxlOnhkdWNlLmFzSXRlcmF0b3J8YXNJdGVyYXRvcn0gZnVuY3Rpb24sIGFzIHdlbGwgYXMgdGhlIG91dHB1dCBvZlxuICogdGhlIHtAbGluayBtb2R1bGU6eGR1Y2Uuc2VxdWVuY2V8c2VxdWVuY2V9IGZ1bmN0aW9uIHdoZW4gdGhlIGlucHV0IGlzIGFuXG4gKiBpdGVyYXRvci5cbiAqXG4gKiBUaGUgZW5kIHVzZXIgbmVlZCBub3QgYmUgY29uY2VybmVkIHdpdGggdGhlIHR5cGUgb2YgdGhlIG91dHB1dCBpdGVyYXRvciBpblxuICogdGhlc2UgY2lyY3Vtc3RhbmNlczsgdGhlIGVuZCB1c2VyIG5lZWQgb25seSBjYXJlIHRoYXQgdGhlIG91dHB1dCBpcywgaW4gZmFjdCxcbiAqIGFuIGl0ZXJhdG9yIGFuZCBjYW4gYmUgZXhwZWN0ZWQgdG8gYWN0IGxpa2Ugb25lLiBGb3IgdGhpcyByZWFzb24sIHRoaXNcbiAqIGZ1bmN0aW9uIGFuZCB0aGUgdHlwZSBpdCByZXR1cm5zIGFyZSBub3QgZXhwb3J0ZWQuXG4gKlxuICogVGhpcyBvYmplY3Qgc3VwcG9ydHMgbm9uLTEtdG8tMSBjb3JyZXNwb25kZW5jZXMgYmV0d2VlbiBpbnB1dCBhbmQgb3V0cHV0XG4gKiB2YWx1ZXMuIEZvciBleGFtcGxlLCBhIGZpbHRlciB0cmFuc2Zvcm1hdGlvbiBtaWdodCByZXR1cm4gZmV3ZXIgb3V0cHV0XG4gKiBlbGVtZW50cyB0aGFuIHdlcmUgaW4gdGhlIGlucHV0IGNvbGxlY3Rpb24sIHdoaWxlIGEgcmVwZWF0IHRyYW5zZm9ybWF0aW9uXG4gKiB3aWxsIHJldHVybiBtb3JlLiBJbiBlaXRoZXIgY2FzZSwgYG5leHRgIGluIHRoaXMgY2xhc3Mgd2lsbCByZXR1cm4gb25lXG4gKiBlbGVtZW50IHBlciBjYWxsLlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOnhkdWNlLkl0ZXJhYmxlfSBjb2xsZWN0aW9uIHRoZSBpbnB1dCBjb2xsZWN0aW9uIHRoYXQgdGhlXG4gKiAgICAgcHJvZHVjZWQgaXRlcmF0b3Igd2lsbCBiZSBpdGVyYXRpbmcgb3Zlci5cbiAqIEBwYXJhbSB7bW9kdWxlOnhkdWNlLlRyYW5zZHVjZXJGdW5jdGlvbn0geGZvcm0gQSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgYSB0cmFuc2R1Y2VyXG4gKiAgICAgb2JqZWN0IHRoYXQgZGVmaW5lcyB0aGUgdHJhbnNmb3JtYXRpb24gYmVpbmcgZG9uZSB0byB0aGUgaXRlcmF0b3Inc1xuICogICAgIGVsZW1lbnRzLiBBbnkgb2YgdGhlIHRyYW5zZHVjZXJzIGluIHRoZVxuICogICAgIHtAbGluayBtb2R1bGU6dHJhbnNkdWNlcnN8dHJhbnNkdWNlcnN9IG1vZHVsZSBjYW4gcHJvZHVjZSBhIHN1aXRhYmxlXG4gKiAgICAgdHJhbnNkdWNlciBmdW5jdGlvbi5cbiAqIEByZXR1cm4ge21vZHVsZTp4ZHVjZS5JdGVyYXRvcn0gQW4gaXRlcmF0b3IgdGhhdCB3aWxsIHRyYW5zZm9ybSBpdHMgaW5wdXRcbiAqICAgICBlbGVtZW50cyB1c2luZyB0aGUgdHJhbnNkdWNlciBmdW5jdGlvbiBhcyBpdHNcbiAqICAgICBge0BsaW5rIG1vZHVsZTp4ZHVjZS5OZXh0RnVuY3Rpb258bmV4dH1gIGZ1bmN0aW9uIGlzIGNhbGxlZC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHRyYW5zZHVjaW5nSXRlcmF0b3IoY29sbGVjdGlvbiwgeGZvcm0pIHtcbiAgY29uc3Qgc3RlcFJlZHVjZXIgPSB7XG4gICAgW3Auc3RlcF0oeGl0ZXIsIGlucHV0KSB7XG4gICAgICB4aXRlci5pdGVtcy51bnNoaWZ0KGlucHV0KTtcbiAgICAgIHJldHVybiB4aXRlcjtcbiAgICB9LFxuICAgIFtwLnJlc3VsdF0odmFsdWUpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaXRlciA9IGl0ZXJhdG9yKGNvbGxlY3Rpb24pO1xuICBjb25zdCB4ZiA9IHhmb3JtKHN0ZXBSZWR1Y2VyKTtcbiAgbGV0IGNvbXBsZXRlZCA9IGZhbHNlO1xuXG4gIC8vIFRoaXMgYXJyYXkgaXMgdGhlIGtleSB0byB3b3JraW5nIHByb3Blcmx5IHdpdGggc3RlcCBmdW5jdGlvbnMgdGhhdCByZXR1cm5cbiAgLy8gbW9yZSB0aGFuIG9uZSB2YWx1ZS4gQWxsIG9mIHRoZW0gYXJlIHB1dCBpbnRvIHRoZSBpdGVtcyBhcnJheS4gQXMgbG9uZyBhc1xuICAvLyB0aGlzIGFycmF5IGhhcyB2YWx1ZXMgaW4gaXQsIHRoZSBgbmV4dGAgZnVuY3Rpb24gd2lsbCByZXR1cm4gb25lIHZhbHVlXG4gIC8vIHBvcHBlZCBmcm9tIGl0IHJhdGhlciB0aGFuIHJ1bm5pbmcgdGhlIHN0ZXAgZnVuY3Rpb24gYWdhaW4uXG4gIGNvbnN0IGl0ZW1zID0gW107XG5cbiAgLy8gVGhlIGBuZXh0YCBmdW5jdGlvbiBoZXJlIGlzIHJhdGhlciBzaW1wbGUuIElmIHRoZXJlIGlzIGFscmVhZHkgc29tZXRoaW5nIGluXG4gIC8vIHRoZSBgaXRlbXNgIGFycmF5LCBpdCdzIHJldHVybmVkLiBJZiBub3QsIHRoZSBgc3RlcGAgZnVuY3Rpb24gaXMgcnVuIGFuZCxcbiAgLy8gaWYgdGhhdCByZXN1bHRzIGluIGEgdmFsdWUgaW4gdGhlIGBpdGVtc2AgYXJyYXksIGl0J3MgcmV0dXJuZWQuIE90aGVyd2lzZVxuICAvLyBhbiBvYmplY3Qgd2l0aCBgeyBkb25lOiB0cnVlIH1gIGlzIHJldHVybmVkLlxuICBmdW5jdGlvbiBuZXh0KCkge1xuICAgIGlmIChpdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHN0ZXAoKTtcbiAgICB9XG4gICAgaWYgKGl0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHsgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IGl0ZW1zLnBvcCgpLFxuICAgICAgZG9uZTogZmFsc2VcbiAgICB9O1xuICB9XG5cbiAgLy8gVGhpcyBpcyB3aGVyZSBtb3N0IG9mIHRoZSB3b3JrIGhhcHBlbnMuIEl0IGdldHMgdGhlIG5leHQgdmFsdWUgZnJvbSB0aGVcbiAgLy8gaW5wdXQgY29sbGVjdGlvbiBhbmQgcnVucyBpdCB0aHJvdWdoIHRoZSByZWR1Y3Rpb24gc3RlcCBmdW5jdGlvbnMuIElmIHRoYXRcbiAgLy8gcmVzdWx0cyBpbiBhIHZhbHVlLCBpdCdzIGdpdmVuIHRvIHRoZSBzdGVwcGVyIG9iamVjdCAod2hpY2ggYWRkcyBpdCB0byB0aGVcbiAgLy8gYGl0ZW1zYCBhcnJheSk7IG90aGVyd2lzZSB0aGUgd2hpbGUgbG9vcCBjb250aW51ZXMgdG8gdGhlIG5leHQgZWxlbWVudCBvZlxuICAvLyB0aGUgaW5wdXQgY29sbGVjdGlvbi4gVGhpcyBlbnN1cmVzIHRoYXQgdGhlcmUncyBzb21ldGhpbmcgZm9yIHRoZSBgbmV4dGBcbiAgLy8gZnVuY3Rpb24gdG8gcmV0dXJuIGVhY2ggdGltZSBpdCdzIGNhbGxlZC5cbiAgLy9cbiAgLy8gSWYgdGhlIGNvbGxlY3Rpb24gaGFzIGZpbmlzaGVkIG9yIGlmIHRoZSBzdGVwIGZ1bmN0aW9uIHJldHVybnMgYSBjb21wbGV0ZWRcbiAgLy8gb2JqZWN0ICh3aGljaCB0YWtlIHdpbGwgZG8gYWZ0ZXIgaXRzIGxpbWl0IG9mIGVsZW1lbnRzIGhhcyBiZWVuIHJlYWNoZWQsXG4gIC8vIGZvciBpbnN0YW5jZSksIHRoZSBpdGVyYXRpb24gaXMgZmluaXNoZWQgYnkgY2FsbGluZyB0aGUgcmVzdWx0IGZ1bmN0aW9uLlxuICBmdW5jdGlvbiBzdGVwKCkge1xuICAgIGNvbnN0IGNvdW50ID0gaXRlbXMubGVuZ3RoO1xuICAgIHdoaWxlIChpdGVtcy5sZW5ndGggPT09IGNvdW50KSB7XG4gICAgICBjb25zdCBzdGVwVmFsdWUgPSBpdGVyLm5leHQoKTtcbiAgICAgIGlmIChzdGVwVmFsdWUuZG9uZSB8fCBjb21wbGV0ZWQpIHtcbiAgICAgICAgeGZbcC5yZXN1bHRdKHJlc3VsdCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY29tcGxldGVkID0gaXNDb21wbGV0ZWQoeGZbcC5zdGVwXShyZXN1bHQsIHN0ZXBWYWx1ZS52YWx1ZSkpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFRoZSByZXN1bHRpbmcgb2JqZWN0IGlzIGFuIGl0ZXJhdG9yLCBzbyB0byBzYXRpc2Z5IHRoZSBpdGVyYWJsZSBwcm90b2NvbFxuICAvLyB3ZSBqdXN0IHJldHVybiB0aGF0IG9iamVjdCBpdHNlbGZcbiAgZnVuY3Rpb24gc0l0ZXJhdG9yKCkge1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvLyBUaGUgYHJlc3VsdGAgbmFtZSBpcyBob2lzdGVkIGFuZCB1c2VkIGluIGZ1bmN0aW9ucyBmdXJ0aGVyIHVwLCBzbyB3ZSBoYXZlXG4gIC8vIHRvIHJldGFpbiB0aGF0IG5hbWUgYW5kIGNhbid0IGp1c3QgcmV0dXJuIHRoZSBvYmplY3Qgd2l0aG91dCBuYW1pbmcgaXRcbiAgY29uc3QgcmVzdWx0ID0geyBpdGVtcywgbmV4dCwgc3RlcCwgW1N5bWJvbC5pdGVyYXRvcl06IHNJdGVyYXRvciB9O1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIFRyYW5zZm9ybXMgdGhlIGVsZW1lbnRzIG9mIHRoZSBpbnB1dCBjb2xsZWN0aW9uIGFuZCByZWR1Y2VzIHRoZW0gaW50byBhblxuICogb3V0cHV0IGNvbGxlY3Rpb24uXG4gKlxuICogVGhpcyBpcyB0aGUgbG93ZXN0LWxldmVsIG9mIHRoZSB0cmFuc2R1Y3Rpb24gZnVuY3Rpb25zIHRoYXQgaXMgbGlrZWx5IHRvIHNlZVxuICogcmVndWxhciB1c2UuIEl0IGRvZXMgbm90IGFzc3VtZSBhbnl0aGluZyBhYm91dCB0aGUgcmVkdWNlciwgYXMgaXQgYXNrcyBmb3IgaXRcbiAqIHRvIGJlIHBhc3NlZCBleHBsaWNpdGx5LiBUaGlzIG1lYW5zIHRoYXQgYW55IGtpbmQgb2YgY29sbGVjdGlvbiBjYW4gYmVcbiAqIHByb2R1Y2VkLCBzaW5jZSB0aGUgcmVkdWNlciBpcyBub3QgdGllZCB0byB0aGUgaW5wdXQgY29sbGVjdGlvbiBpbiBhbnkgd2F5LlxuICpcbiAqIGB0cmFuc2R1Y2VgIGFsc28gd2lsbCBhY2NlcHQgYW4gaW5pdGlhbCB2YWx1ZSBmb3IgdGhlIHJlc3VsdGluZyBjb2xsZWN0aW9uIGFzXG4gKiB0aGUgb3B0aW9uYWwgbGFzdCBwYXJhbWV0ZXIuIElmIHRoaXMgcGFyYW1ldGVyIGlzbid0IHByZXNlbnQsIHRoZW4gdGhlXG4gKiBpbml0aWFsIHZhbHVlIGlzIGRldGVybWluZWQgZnJvbSB0aGUgdHJhbnNkdWNlciBpbml0IHByb3RvY29sIHByb3BlcnR5IG9uIHRoZVxuICogcmVkdWNlci4gTm90ZSBob3dldmVyIHRoYXQgbWFueSByZWR1Y2VycyBtYXkgbm90IHByb3ZpZGUgYW4gaW5pdGlhbCB2YWx1ZSxcbiAqIGFuZCBpbiB0aG9zZSBjYXNlcyBpdCB3aWxsICpoYXZlKiB0byBiZSBwYXNzZWQgYXMgYSBwYXJhbWV0ZXIuXG4gKlxuICogYGBgXG4gKiBpbXBvcnQgeyBwcm90b2NvbHMgYXMgcCwgdHJhbnNkdWNlIH0gZnJvbSBcIkBjaGFua28veGR1Y2VcIjtcbiAqIGltcG9ydCB7IG1hcCB9IGZyb20gXCJAY2hhbmtvL3RyYW5zZHVjZXJzXCI7XG4gKlxuICogY29uc3QgeGZvcm0gPSBtYXAoeCA9PiB4ICsgMSk7XG4gKlxuICogY29uc3QgYXJyYXlSZWR1Y2VyID0ge1xuICogICBbcC5pbml0XSgpIHsgcmV0dXJuIFtdOyB9LFxuICogICBbcC5yZXN1bHRdKHgpIHsgcmV0dXJuIHg7IH0sXG4gKiAgIFtwLnN0ZXBdKGFjYywgeCkge1xuICogICAgIGFjYy5wdXNoKHgpO1xuICogICAgIHJldHVybiBhY2M7XG4gKiAgIH1cbiAqIH07XG4gKlxuICogY29uc3Qgc3RyaW5nUmVkdWNlciA9IHtcbiAqICAgW3AuaW5pdF0oKSB7IHJldHVybiAnJzsgfSxcbiAqICAgW3AucmVzdWx0XSh4KSB7IHJldHVybiB4OyB9LFxuICogICBbcC5zdGVwXShhY2MsIHgpIHsgcmV0dXJuIGFjYyArIHg7IH1cbiAqIH07XG4gKlxuICogbGV0IHJlc3VsdCA9IHRyYW5zZHVjZShbMSwgMiwgMywgNCwgNV0sIHhmb3JtLCBhcnJheVJlZHVjZXIpO1xuICogY29uc29sZS5sb2cocmVzdWx0KTsgICAvLyAtPiBbMiwgMywgNCwgNSwgNl1cbiAqXG4gKiByZXN1bHQgPSB0cmFuc2R1Y2UoWzEsIDIsIDMsIDQsIDVdLCB4Zm9ybSwgc3RyaW5nUmVkdWNlcik7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQpOyAgIC8vIC0+IFwiMjM0NTZcIlxuICpcbiAqIHJlc3VsdCA9IHRyYW5zZHVjZSgnMTIzNDUnLCB4Zm9ybSwgYXJyYXlSZWR1Y2VyKTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdCk7ICAgLy8gLT4gWzIsIDMsIDQsIDUsIDZdXG4gKlxuICogcmVzdWx0ID0gdHJhbnNkdWNlKCcxMjM0NScsIHhmb3JtLCBzdHJpbmdSZWR1Y2VyKTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdCk7ICAgLy8gLT4gXCIyMzQ1NlwiXG4gKiBgYGBcbiAqXG4gKiBUaGVzZSBleGFtcGxlcyBpbGx1c3RyYXRlIGEgbnVtYmVyIG9mIGltcG9ydGFudCBjb25jZXB0cy4gRmlyc3Qgb2YgYWxsLCB0aGVcbiAqIHRyYW5zZHVjZXIgZnVuY3Rpb24gaXMgaW5kZXBlbmRlbnQgb2YgdGhlIHR5cGUgb2YgdGhlIGNvbGxlY3Rpb247IHRoZSBzYW1lXG4gKiB0cmFuc2R1Y2VyIGZ1bmN0aW9uIGlzIHVzZWQgbm8gbWF0dGVyIHRoZSB0eXBlIG9mIGlucHV0IG9yIG91dHB1dFxuICogY29sbGVjdGlvbnMuIFNlY29uZGx5LCB0d28gcmVkdWNlcnMgYXJlIGRlZmluZWQuIFRoZXNlIGFyZSBvYmplY3RzIHRoYXRcbiAqIGNvbmZvcm0gdG8gdGhlIHRyYW5zZHVjZXIgcHJvdG9jb2wgKHNlZSB0aGUgZG9jdW1lbnRhdGlvbiBvblxuICogYHtAbGluayBtb2R1bGU6eGR1Y2UucHJvdG9jb2xzfWApIGFuZCB0aGF0IGtub3cgaG93IHRvIHByb2R1Y2UgdGhlIG91dHB1dFxuICogY29sbGVjdGlvbiBvZiBjaG9pY2UuIEluIHRoaXMgY2FzZSwgdGhlIHJlZHVjZXJzIGtub3cgaG93IHRvIGNyZWF0ZSBuZXdcbiAqIGFycmF5cyBhbmQgc3RyaW5ncyAodGhlIGBpbml0YCBwcm90b2NvbCkgYW5kIGhvdyB0byBhZGQgZWxlbWVudHMgdG8gYXJyYXlzXG4gKiBhbmQgc3RyaW5ncyAodGhlIGBzdGVwYCBwcm90b2NvbCkuIEJlY2F1c2UgdGhlc2UgcmVkdWNlcnMgZG8gaGF2ZSBgaW5pdGBcbiAqIHByb3RvY29sIHByb3BlcnRpZXMsIHRoZSBgdHJhbnNkdWNlYCBjYWxscyBkbyBub3QgcmVxdWlyZSBleHBsaWNpdCBpbml0aWFsXG4gKiBjb2xsZWN0aW9ucy5cbiAqXG4gKiBUaGUgZmluYWwgcG9pbnQgaXMgdGhhdCBgdHJhbnNkdWNlYCBjYW4gYWNjZXB0IGFueSBraW5kIG9mIGl0ZXJhYmxlXG4gKiBjb2xsZWN0aW9uLCBhbmQgYnkgcGFzc2luZyBpbiB0aGUgcHJvcGVyIHJlZHVjZXIsIGl0IGNhbiBwcm9kdWNlIGFueSBraW5kIG9mXG4gKiBvdXRwdXQgY29sbGVjdGlvbi4gVGhlIHNhbWUgYHRyYW5zZHVjZWAgZnVuY3Rpb24gYW5kIHRoZSBzYW1lIG1hcCB0cmFuc2Zvcm1lclxuICogaXMgdXNlZCBpbiBhbGwgZm91ciBleGFtcGxlcywgZGVzcGl0ZSB0aGUgaW5wdXQvb3V0cHV0IGNvbWJpbmF0aW9uIGJlaW5nXG4gKiBkaWZmZXJlbnQgaW4gYWxsIGZvdXIuXG4gKlxuICogVGhlIGByZWR1Y2VyYCBwYXJhbWV0ZXIgKmNhbiogYmUgYSByZWR1Y2VyIGZ1bmN0aW9uIGluc3RlYWQgb2YgYSByZWR1Y2VyXG4gKiBvYmplY3QuIElmIHRoaXMgaXMgdGhlIGNhc2UsIHRoZSBgaW5pdGAgcGFyYW1ldGVyIGlzIHJlcXVpcmVkIGJlY2F1c2UgYVxuICogZnVuY3Rpb24gY2Fubm90IGRlZmluZSBhbiBpbml0aWFsIHZhbHVlIGl0c2VsZi5cbiAqXG4gKiBUaGUgYGluaXRgIGNvbGxlY3Rpb24gZG9lc24ndCBoYXZlIHRvIGJlIGVtcHR5LiBJZiBpdCBpc24ndCwgdGhlIGVsZW1lbnRzXG4gKiB0aGF0IGFyZSBhbHJlYWR5IGluIGl0IGFyZSByZXRhaW5lZCBhbmQgdGhlIHRyYW5zZm9ybWVkIGlucHV0IGVsZW1lbnRzIGFyZVxuICogcmVkdWNlZCBpbnRvIHRoZSBjb2xsZWN0aW9uIG5vcm1hbGx5LlxuICpcbiAqIE9mIGNvdXJzZSwgdGhlIGV4YW1wbGVzIGFyZSBub3QgcmVhbGx5IG5lY2Vzc2FyeSAtIHRoZSBzYW1lIHRoaW5nIGNvdWxkIGJlXG4gKiBhY2NvbXBsaXNoZWQgdXNpbmcgYHtAbGluayBtb2R1bGU6eGR1Y2UuaW50b3xpbnRvfWAgd2l0aG91dCBoYXZpbmcgdG8gY3JlYXRlXG4gKiB0aGUgcmVkdWNlcnMgKHN0cmluZ3MgYW5kIGFycmF5cyBwYXNzZWQgdG8gYHtAbGluayBtb2R1bGU6eGR1Y2UuaW50b3xpbnRvfWBcbiAqIGFzIHRhcmdldHMga25vdyBob3cgdG8gcmVkdWNlIHRoZW1zZWx2ZXMgYWxyZWFkeSkuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHBhcmFtIHttb2R1bGU6eGR1Y2UuSXRlcmFibGV9IGNvbGxlY3Rpb24gVGhlIGlucHV0IGNvbGxlY3Rpb24uIFRoZSBvbmx5XG4gKiAgICAgcmVxdWlyZW1lbnQgb2YgdGhpcyBjb2xsZWN0aW9uIGlzIHRoYXQgaXQgaW1wbGVtZW50IHRoZSBgaXRlcmFibGVgXG4gKiAgICAgcHJvdG9jb2wuIFNwZWNpYWwgc3VwcG9ydCBpcyBwcm92aWRlZCBieSB0aGUgbGlicmFyeSBmb3Igb2JqZWN0cywgc28gdGhleVxuICogICAgIGNhbiBhbHNvIGJlIHVzZWQuXG4gKiBAcGFyYW0ge21vZHVsZTp4ZHVjZS5UcmFuc2R1Y2VyRnVuY3Rpb259IFt4Zm9ybV0gQSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgYSB0cmFuc2R1Y2VyXG4gKiAgICAgb2JqZWN0IHRoYXQgZGVmaW5lcyB0aGUgdHJhbnNmb3JtYXRpb24gYmVpbmcgZG9uZSB0byB0aGUgaW5wdXRcbiAqICAgICBjb2xsZWN0aW9uJ3MgZWxlbWVudHMuIEFueSBvZiB0aGUgdHJhbnNkdWNlcnMgaW4gdGhlXG4gKiAgICAge0BsaW5rIG1vZHVsZTp0cmFuc2R1Y2Vyc3x0cmFuc2R1Y2Vyc30gbW9kdWxlIGNhbiBwcm9kdWNlIGEgc3VpdGFibGVcbiAqICAgICB0cmFuc2R1Y2VyIGZ1bmN0aW9uLlxuICogQHBhcmFtIHsobW9kdWxlOnhkdWNlLlN0ZXBGdW5jdGlvbnxtb2R1bGU6eGR1Y2UuUmVkdWNlcil9IHJlZHVjZXIgRWl0aGVyIGFcbiAqICAgICBmdW5jdGlvbiBvciBhIHJlZHVjZXIgb2JqZWN0IHRoYXQgaW1wbGVtZW50cyB0aGUgdHJhbnNkdWNlciBwcm90b2NvbHNcbiAqICAgICAoYGluaXRgIGlzICBvbmx5IHJlcXVpcmVkIGlmIHRoZSBgaW5pdGAgcGFyYW1ldGVyIGlzIG5vdCBwcmVzZW50KS4gVGhpc1xuICogICAgIG9iamVjdCBtdXN0IGtub3cgaG93IHRvIHByb2R1Y2UgYW4gb3V0cHV0IGNvbGxlY3Rpb24gdGhyb3VnaCBpdHMgYHN0ZXBgXG4gKiAgICAgYW5kIGByZXN1bHRgIHByb3RvY29sIGZ1bmN0aW9ucy4gSWYgdGhpcyBwYXJhbWV0ZXIgaXMgYSBmdW5jdGlvbiwgdGhlbiBpdFxuICogICAgIGlzIHR1cm5lZCBpbnRvIGEgdmFsaWQgcmVkdWNlciBvYmplY3QuXG4gKiBAcGFyYW0ge21vZHVsZTp4ZHVjZS5SZWR1Y2libGV9IFtpbml0XSBBIGNvbGxlY3Rpb24gb2YgdGhlIHNhbWUgdHlwZSBhcyB0aGVcbiAqICAgICBvdXRwdXQgY29sbGVjdGlvbi4gSWYgdGhpcyBpcyBub3QgcHJlc2VudCwgdGhlbiB0aGUgcmVkdWNlcidzIGBpbml0YFxuICogICAgIHByb3RvY29sIGZ1bmN0aW9uIGlzIGNhbGxlZCBpbnN0ZWFkIHRvIGdldCB0aGUgaW5pdGlhbCBjb2xsZWN0aW9uLiBJZiBpdFxuICogICAgIGlzIHByZXNlbnQgYW5kIG5vdCBlbXB0eSwgdGhlbiB0aGUgZXhpc3RpbmcgZWxlbWVudHMgcmVtYWluIGFuZCB0aGVcbiAqICAgICB0cmFuc2Zvcm1lZCBpbnB1dCBjb2xsZWN0aW9uIGVsZW1lbnRzIGFyZSBhZGRlZCB0byBpdC5cbiAqIEByZXR1cm4geyp9IEEgY29sbGVjdGlvbiBvZiBhIHR5cGUgZGV0ZXJtaW5lZCBieSB0aGUgcGFzc2VkIHJlZHVjZXIuIFRoZVxuICogICAgIGVsZW1lbnRzIG9mIHRoaXMgY29sbGVjdGlvbiBhcmUgdGhlIHJlc3VsdHMgZnJvbSB0aGUgdHJhbnNmb3JtZXIgZnVuY3Rpb25cbiAqICAgICBiZWluZyBhcHBsaWVkIHRvIGVhY2ggZWxlbWVudCBvZiB0aGUgaW5wdXQgY29sbGVjdGlvbi5cbiAqL1xuZnVuY3Rpb24gdHJhbnNkdWNlKGNvbGxlY3Rpb24sIHhmb3JtLCByZWR1Y2VyLCBpbml0KSB7XG4gIGNvbnN0IHIgPSBpc0Z1bmN0aW9uKHJlZHVjZXIpID8gdG9SZWR1Y2VyKHJlZHVjZXIpIDogcmVkdWNlcjtcbiAgY29uc3QgaSA9IGluaXQgPz8gcltwLmluaXRdKCk7XG4gIGNvbnN0IHhmID0geGZvcm0gPyB4Zm9ybShyKSA6IHI7XG4gIHJldHVybiByZWR1Y2UoY29sbGVjdGlvbiwgeGYsIGkpO1xufVxuXG4vKipcbiAqIFRyYW5zZm9ybXMgdGhlIGVsZW1lbnRzIG9mIHRoZSBpbnB1dCBjb2xsZWN0aW9uIGFuZCByZWR1Y2VzIHRoZW0gaW50byBhIG5ld1xuICogYXJyYXkuXG4gKlxuICogVGhlIHRyYW5zZm9ybWVyIGlzIG9wdGlvbmFsLiBJZiBpdCBpc24ndCBwcmVzZW50LCB0aGlzIGZ1bmN0aW9uIGp1c3QgY29udmVydHNcbiAqIHRoZSBpbnB1dCBjb2xsZWN0aW9uIGludG8gYW4gYXJyYXkuXG4gKlxuICogYGBgXG4gKiBpbXBvcnQgeyBhc0FycmF5IH0gZnJvbSBcIkBjaGFua28veGR1Y2VcIjtcbiAqIGltcG9ydCB7IG1hcCB9IGZyb20gXCJAY2hhbmtvL3RyYW5zZHVjZXJzXCI7XG4gKlxuICogY29uc3QgeGZvcm0gPSBtYXAoeCA9PiB4ICsgMSk7XG4gKlxuICogbGV0IHJlc3VsdCA9IGFzQXJyYXkoWzEsIDIsIDMsIDQsIDVdLCB4Zm9ybSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQpOyAgIC8vIC0+IFsyLCAzLCA0LCA1LCA2XVxuICpcbiAqIHJlc3VsdCA9IGFzQXJyYXkoJzEyMzQ1JywgeGZvcm0pO1xuICogY29uc29sZS5sb2cocmVzdWx0KTsgICAvLyAtPiBbMiwgMywgNCwgNSwgNl1cbiAqXG4gKiByZXN1bHQgPSBhc0FycmF5KCcxMjM0NScpO1xuICogY29uc29sZS5sb2cocmVzdWx0KTsgICAvLyAtPiBbMSwgMiwgMywgNCwgNV1cbiAqXG4gKiByZXN1bHQgPSBhc0FycmF5KHthOiAxLCBiOiAyfSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQpOyAgIC8vIC0+IFt7IGE6IDEgfSwgeyBiOiAyIH1dXG4gKiBgYGBcbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcGFyYW0ge21vZHVsZTp4ZHVjZS5JdGVyYWJsZX0gY29sbGVjdGlvbiBUaGUgaW5wdXQgY29sbGVjdGlvbi4gVGhlIG9ubHlcbiAqICAgICByZXF1aXJlbWVudCBvZiB0aGlzIGNvbGxlY3Rpb24gaXMgdGhhdCBpdCBpbXBsZW1lbnQgdGhlIGBpdGVyYWJsZWBcbiAqICAgICBwcm90b2NvbC4gU3BlY2lhbCBzdXBwb3J0IGlzIHByb3ZpZGVkIGJ5IHRoZSBsaWJyYXJ5IGZvciBvYmplY3RzLCBzbyB0aGV5XG4gKiAgICAgY2FuIGFsc28gYmUgdXNlZC5cbiAqIEBwYXJhbSB7bW9kdWxlOnhkdWNlLlRyYW5zZHVjZXJGdW5jdGlvbn0gW3hmb3JtXSBBIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyBhIHRyYW5zZHVjZXJcbiAqICAgICBvYmplY3QgdGhhdCBkZWZpbmVzIHRoZSB0cmFuc2Zvcm1hdGlvbiBiZWluZyBkb25lIHRvIHRoZSBpbnB1dFxuICogICAgIGNvbGxlY3Rpb24ncyBlbGVtZW50cy4gQW55IG9mIHRoZSB0cmFuc2R1Y2VycyBpbiB0aGVcbiAqICAgICB7QGxpbmsgbW9kdWxlOnRyYW5zZHVjZXJzfHRyYW5zZHVjZXJzfSBtb2R1bGUgY2FuIHByb2R1Y2UgYSBzdWl0YWJsZVxuICogICAgIHRyYW5zZHVjZXIgZnVuY3Rpb24uIElmIHRoaXMgaXNuJ3QgcHJlc2VudCwgdGhlIGlucHV0IGNvbGxlY3Rpb24gd2lsbFxuICogICAgIHNpbXBseSBiZSByZWR1Y2VkIGludG8gYW4gYXJyYXkgd2l0aG91dCB0cmFuc2Zvcm1hdGlvbi5cbiAqIEByZXR1cm4ge0FycmF5fSBBbiBhcnJheSBjb250YWluaW5nIGFsbCBvZiB0aGUgdHJhbnNmb3JtZWQgdmFsdWVzIGZyb20gdGhlXG4gKiAgICAgaW5wdXQgY29sbGVjdGlvbiBlbGVtZW50cy5cbiAqL1xuZnVuY3Rpb24gYXNBcnJheShjb2xsZWN0aW9uLCB4Zm9ybSkge1xuICByZXR1cm4gdHJhbnNkdWNlKGNvbGxlY3Rpb24sIHhmb3JtLCBBUlJBWV9SRURVQ0VSKTtcbn1cblxuLyoqXG4gKiBUcmFuc2Zvcm1zIHRoZSBlbGVtZW50cyBvZiB0aGUgaW5wdXQgY29sbGVjdGlvbiBhbmQgcmVkdWNlcyB0aGVtIGludG8gYSBuZXdcbiAqIG9iamVjdC5cbiAqXG4gKiBUaGUgdHJhbnNmb3JtZXIgaXMgb3B0aW9uYWwuIElmIGl0IGlzbid0IHByZXNlbnQsIHRoaXMgZnVuY3Rpb24ganVzdCBjb252ZXJ0c1xuICogdGhlIGlucHV0IGNvbGxlY3Rpb24gaW50byBhbiBvYmplY3QuIFdoZW4gdGhpcyBoYXBwZW5zLCBpZiB0aGUgaW5wdXRcbiAqIGNvbGxlY3Rpb24gaXMgbm90IGFuIG9iamVjdCBvciBhbiBhcnJheSBvZiBvYmplY3RzLCBudW1iZXJzIHN0YXJ0aW5nIGF0IGAwYFxuICogd2lsbCBiZSB1c2VkIGFzIGtleXMgZm9yIHRoZSB2YWx1ZXMgcHJvdmlkZWQgYnkgdGhlIGlucHV0IGNvbGxlY3Rpb24uXG4gKlxuICogYGBgXG4gKiBpbXBvcnQgeyBhc09iamVjdCwga3YgfSBmcm9tIFwiQGNoYW5rby94ZHVjZVwiO1xuICogaW1wb3J0IHsgbWFwIH0gZnJvbSBcIkBjaGFua28vdHJhbnNkdWNlcnNcIjtcbiAqXG4gKiBjb25zdCBmbiA9IHByb3AgPT4ge1xuICogICBjb25zdCB7IGssIHYgfSA9IGt2KHByb3ApO1xuICogICByZXR1cm4geyBba106IHYgKyAxIH07XG4gKiB9XG4gKiBjb25zdCB4Zm9ybSA9IG1hcChmbik7XG4gKlxuICogbGV0IHJlc3VsdCA9IGFzT2JqZWN0KHsgYTogMSwgYjogMiB9LCB4Zm9ybSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQpOyAgIC8vIC0+IHsgYTogMiwgYjogMyB9XG4gKlxuICogcmVzdWx0ID0gYXNPYmplY3QoW3sgYTogMSB9LCB7IGI6IDIgfV0sIHhmb3JtKTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdCk7ICAgLy8gLT4geyBhOiAyLCBiOiAzIH1cbiAqXG4gKiByZXN1bHQgPSBhc09iamVjdChbMSwgMiwgMywgNCwgNV0pO1xuICogY29uc29sZS5sb2cocmVzdWx0KTsgICAvLyAtPiB7IDA6IDEsIDE6IDIsIDI6IDMsIDM6IDQsIDQ6IDUgfVxuICpcbiAqIHJlc3VsdCA9IGFzT2JqZWN0KFt7IGE6IDEgfSwgeyBiOiAyIH1dKTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdCk7ICAgLy8gLT4geyBhOiAxLCBiOiAyIH1cbiAqXG4gKiByZXN1bHQgPSBhc09iamVjdChcImhlbGxvXCIpO1xuICogY29uc29sZS5sb2cocmVzdWx0KTsgICAvLyAtPiB7IDA6IFwiaFwiLCAxOiBcImVcIiwgMjogXCJsXCIsIDM6IFwibFwiLCA0OiBcIm9cIiB9XG4gKiBgYGBcbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcGFyYW0ge21vZHVsZTp4ZHVjZS5JdGVyYWJsZX0gY29sbGVjdGlvbiBUaGUgaW5wdXQgY29sbGVjdGlvbi4gVGhlIG9ubHlcbiAqICAgICByZXF1aXJlbWVudCBvZiB0aGlzIGNvbGxlY3Rpb24gaXMgdGhhdCBpdCBpbXBsZW1lbnQgdGhlIGBpdGVyYWJsZWBcbiAqICAgICBwcm90b2NvbC4gU3BlY2lhbCBzdXBwb3J0IGlzIHByb3ZpZGVkIGJ5IHRoZSBsaWJyYXJ5IGZvciBvYmplY3RzLCBzbyB0aGV5XG4gKiAgICAgY2FuIGFsc28gYmUgdXNlZC5cbiAqIEBwYXJhbSB7bW9kdWxlOnhkdWNlLlRyYW5kdWNlcn0gW3hmb3JtXSBBIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyBhIHRyYW5zZHVjZXJcbiAqICAgICBvYmplY3QgdGhhdCBkZWZpbmVzIHRoZSB0cmFuc2Zvcm1hdGlvbiBiZWluZyBkb25lIHRvIHRoZSBpbnB1dFxuICogICAgIGNvbGxlY3Rpb24ncyBlbGVtZW50cy4gQW55IG9mIHRoZSB0cmFuc2R1Y2VycyBpbiB0aGVcbiAqICAgICB7QGxpbmsgbW9kdWxlOnRyYW5zZHVjZXJzfHRyYW5zZHVjZXJzfSBtb2R1bGUgY2FuIHByb2R1Y2UgYSBzdWl0YWJsZVxuICogICAgIHRyYW5zZHVjZXIgZnVuY3Rpb24uIElmIHRoaXMgaXNuJ3QgcHJlc2VudCwgdGhlIGlucHV0IGNvbGxlY3Rpb24gd2lsbFxuICogICAgIHNpbXBseSBiZSByZWR1Y2VkIGludG8gYW4gb2JqZWN0IHdpdGhvdXQgdHJhbnNmb3JtYXRpb24uXG4gKiBAcmV0dXJuIHtPYmplY3R9IEFuIG9iamVjdCBjb250YWluaW5nIGFsbCBvZiB0aGUgdHJhbnNmb3JtZWQgdmFsdWVzIGZyb20gdGhlXG4gKiAgICAgaW5wdXQgY29sbGVjdGlvbiBlbGVtZW50cy5cbiAqL1xuZnVuY3Rpb24gYXNPYmplY3QoY29sbGVjdGlvbiwgeGZvcm0pIHtcbiAgcmV0dXJuIHRyYW5zZHVjZShjb2xsZWN0aW9uLCB4Zm9ybSwgT0JKRUNUX1JFRFVDRVIpO1xufVxuXG4vKipcbiAqIFRyYW5zZm9ybXMgdGhlIGVsZW1lbnRzIG9mIHRoZSBpbnB1dCBjb2xsZWN0aW9uIGFuZCByZWR1Y2VzIHRoZW0gaW50byBhIG5ld1xuICogc3RyaW5nLlxuICpcbiAqIFRoZSB0cmFuc2Zvcm1lciBpcyBvcHRpb25hbC4gSWYgaXQgaXNuJ3QgcHJlc2VudCwgdGhpcyBmdW5jdGlvbiBqdXN0IGNvbnZlcnRzXG4gKiB0aGUgaW5wdXQgY29sbGVjdGlvbiBpbnRvIGFuIHN0cmluZy4gSWYgdGhpcyBpcyB0aGUgY2FzZSBhbmQgdGhlIGlucHV0XG4gKiBjb2xsZWN0aW9uIGlzIGFuIG9iamVjdCwgb25seSB0aGUgdmFsdWVzIHdpbGwgYmUgY29uY2F0ZW5hdGVkIGludG8gYSBzdHJpbmcuXG4gKlxuICogT3RoZXJ3aXNlLCB0cmFuc2Zvcm1pbmcgb2JqZWN0cyBpbnRvIHN0cmluZ3Mgb25seSBtYWtlcyBtdWNoIHNlbnNlIGlmIHRoZVxuICogdHJhbnNkdWNlciBwcm9kdWNlcyBvbmx5IGEgc2luZ2xlIG91dHB1dCBmcm9tIGVhY2ggb2YgdGhlIG9iamVjdHMga2V5L3ZhbHVlXG4gKiBwYWlycy5cbiAqXG4gKiBgYGBcbiAqIGltcG9ydCB7IHRyYW5zZHVjZSwga2V5IH0gZnJvbSBcIkBjaGFua28veGR1Y2VcIjtcbiAqIGltcG9ydCB7IG1hcCB9IGZyb20gXCJAY2hhbmtvL3RyYW5zZHVjZXJzXCI7XG4gKlxuICogY29uc3QgeGZvcm0gPSBtYXAoeCA9PiB4LnRvVXBwZXJDYXNlKCkpO1xuICpcbiAqIGxldCByZXN1bHQgPSBhc1N0cmluZygnaGVsbG8nLCB4Zm9ybSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQpOyAgIC8vIC0+IFwiSEVMTE9cIlxuICpcbiAqIHJlc3VsdCA9IGFzU3RyaW5nKFsnaCcsICdlJywgJ2wnLCAnbCcsICdvJ10sIHhmb3JtKTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdCk7ICAgLy8gLT4gXCJIRUxMT1wiXG4gKlxuICogcmVzdWx0ID0gYXNTdHJpbmcoeyBhOiAxLCBjOiAyLCBiOiAzIH0sIG1hcChrZXkpKTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdCk7ICAgLy8gLT4gXCJhY2JcIlxuICpcbiAqIHJlc3VsdCA9IGFzU3RyaW5nKFsxLCAyLCAzLCA0LCA1XSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQpOyAgIC8vIC0+IFwiMTIzNDVcIlxuICpcbiAqIHJlc3VsdCA9IGFzU3RyaW5nKHsgYTogMSwgYzogMiwgYjogMyB9KTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdCk7ICAgLy8gLT4gXCIxMjNcIlxuICogYGBgXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHBhcmFtIHttb2R1bGU6eGR1Y2UuSXRlcmFibGV9IGNvbGxlY3Rpb24gVGhlIGlucHV0IGNvbGxlY3Rpb24uIFRoZSBvbmx5XG4gKiAgICAgcmVxdWlyZW1lbnQgb2YgdGhpcyBjb2xsZWN0aW9uIGlzIHRoYXQgaXQgaW1wbGVtZW50IHRoZSBgaXRlcmFibGVgXG4gKiAgICAgcHJvdG9jb2wuIFNwZWNpYWwgc3VwcG9ydCBpcyBwcm92aWRlZCBieSB0aGUgbGlicmFyeSBmb3Igb2JqZWN0cywgc28gdGhleVxuICogICAgIGNhbiBhbHNvIGJlIHVzZWQuXG4gKiBAcGFyYW0ge21vZHVsZTp4ZHVjZS5UcmFuc2R1Y2VyRnVuY3Rpb259IFt4Zm9ybV0gQSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgYSB0cmFuc2R1Y2VyXG4gKiAgICAgb2JqZWN0IHRoYXQgZGVmaW5lcyB0aGUgdHJhbnNmb3JtYXRpb24gYmVpbmcgZG9uZSB0byB0aGUgaW5wdXRcbiAqICAgICBjb2xsZWN0aW9uJ3MgZWxlbWVudHMuIEFueSBvZiB0aGUgdHJhbnNkdWNlcnMgaW4gdGhlXG4gKiAgICAge0BsaW5rIG1vZHVsZTp0cmFuc2R1Y2Vyc3x0cmFuc2R1Y2Vyc30gbW9kdWxlIGNhbiBwcm9kdWNlIGEgc3VpdGFibGVcbiAqICAgICB0cmFuc2R1Y2VyIGZ1bmN0aW9uLiBJZiB0aGlzIGlzbid0IHByZXNlbnQsIHRoZSBpbnB1dCBjb2xsZWN0aW9uIHdpbGxcbiAqICAgICBzaW1wbHkgYmUgcmVkdWNlZCBpbnRvIGEgc3RyaW5nIHdpdGhvdXQgdHJhbnNmb3JtYXRpb24uXG4gKiBAcmV0dXJuIHtTdHJpbmd9IEEgc3RyaW5nIGNvbnRhaW5pbmcgYWxsIG9mIHRoZSB0cmFuc2Zvcm1lZCB2YWx1ZXMgZnJvbSB0aGVcbiAqICAgICBpbnB1dCBjb2xsZWN0aW9uIGVsZW1lbnRzLlxuICovXG5mdW5jdGlvbiBhc1N0cmluZyhjb2xsZWN0aW9uLCB4Zm9ybSkge1xuICByZXR1cm4gdHJhbnNkdWNlKGNvbGxlY3Rpb24sIHhmb3JtLCBTVFJJTkdfUkVEVUNFUik7XG59XG5cbi8qKlxuICogVHJhbnNmb3JtcyB0aGUgZWxlbWVudHMgb2YgdGhlIGlucHV0IGNvbGxlY3Rpb24gYW5kIHJlZHVjZXMgdGhlbSBpbnRvIGEgbmV3XG4gKiBpdGVyYXRvci5cbiAqXG4gKiBUaGUgdHJhbnNmb3JtZXIgaXMgb3B0aW9uYWwuIElmIGl0IGlzbid0IHByZXNlbnQsIHRoaXMgZnVuY3Rpb24ganVzdCBjb252ZXJ0c1xuICogdGhlIGlucHV0IGNvbGxlY3Rpb24gaW50byBhbiBpdGVyYXRvci5cbiAqXG4gKiAqKFRoZSByZXN1bHRzIGhlcmUgYXJlIHNob3duIHBhc3NlZCB0aHJvdWdoIGBhc0FycmF5YCBiZWNhdXNlIHRoZXJlJ3Mgbm9cbiAqIHByaW50YWJsZSByZXByZXNlbnRhdGlvbiBvZiBhbiBpdGVyYXRvciB0byBzaG93LiBUaGUgYGFzQXJyYXlgIGNhbGxzIGFyZSBmb3JcbiAqIGRlbW9uc3RyYXRpb24gcHVycG9zZXMgb25seS4pKlxuICpcbiAqIGBgYFxuICogaW1wb3J0IHsgYXNJdGVyYXRvciwgYXNBcnJheSB9IGZyb20gXCJAY2hhbmtvL3hkdWNlXCI7XG4gKiBpbXBvcnQgeyBtYXAgfSBmcm9tIFwiQGNoYW5rby90cmFuc2R1Y2Vyc1wiO1xuICpcbiAqIGNvbnN0IHhmb3JtID0gbWFwKHggPT4geCArIDEpO1xuICogZnVuY3Rpb24qIGZpdmUoKSB7XG4gKiAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDU7ICsraSkge1xuICogICAgIHlpZWxkIGk7XG4gKiAgIH1cbiAqIH07XG4gKlxuICogbGV0IHJlc3VsdCA9IGFzSXRlcmF0b3IoZml2ZSgpLCB4Zm9ybSk7XG4gKiBjb25zb2xlLmxvZyhhc0FycmF5KHJlc3VsdCkpOyAgIC8vIC0+IFsyLCAzLCA0LCA1LCA2XVxuICpcbiAqIHJlc3VsdCA9IGFzSXRlcmF0b3IoWzEsIDIsIDMsIDQsIDVdLCB4Zm9ybSk7XG4gKiBjb25zb2xlLmxvZyhhc0FycmF5KHJlc3VsdCkpOyAgIC8vIC0+IFsyLCAzLCA0LCA1LCA2XVxuICpcbiAqIHJlc3VsdCA9IGFzSXRlcmF0b3IoWzEsIDIsIDMsIDQsIDVdKTtcbiAqIGNvbnNvbGUubG9nKGFzQXJyYXkocmVzdWx0KSk7ICAgLy8gLT4gWzEsIDIsIDMsIDQsIDVdXG4gKlxuICogcmVzdWx0ID0gYXNJdGVyYXRvcih7YTogMSwgYjogMn0pO1xuICogY29uc29sZS5sb2coYXNBcnJheShyZXN1bHQpKTsgICAvLyAtPiBbeyBhOiAxIH0sIHsgYjogMiB9XVxuICogYGBgXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHBhcmFtIHttb2R1bGU6eGR1Y2UuSXRlcmFibGV9IGNvbGxlY3Rpb24gVGhlIGlucHV0IGNvbGxlY3Rpb24uIFRoZSBvbmx5XG4gKiAgICAgcmVxdWlyZW1lbnQgb2YgdGhpcyBjb2xsZWN0aW9uIGlzIHRoYXQgaXQgaW1wbGVtZW50IHRoZSBgaXRlcmFibGVgXG4gKiAgICAgcHJvdG9jb2wuIFNwZWNpYWwgc3VwcG9ydCBpcyBwcm92aWRlZCBieSB0aGUgbGlicmFyeSBmb3Igb2JqZWN0cywgc28gdGhleVxuICogICAgIGNhbiBhbHNvIGJlIHVzZWQuXG4gKiBAcGFyYW0ge21vZHVsZTp4ZHVjZS5UcmFuc2R1Y2VyRnVuY3Rpb259IFt4Zm9ybV0gQSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgYSB0cmFuc2R1Y2VyXG4gKiAgICAgb2JqZWN0IHRoYXQgZGVmaW5lcyB0aGUgdHJhbnNmb3JtYXRpb24gYmVpbmcgZG9uZSB0byB0aGUgaW5wdXRcbiAqICAgICBjb2xsZWN0aW9uJ3MgZWxlbWVudHMuIEFueSBvZiB0aGUgdHJhbnNkdWNlcnMgaW4gdGhlXG4gKiAgICAge0BsaW5rIG1vZHVsZTp0cmFuc2R1Y2Vyc3x0cmFuc2R1Y2Vyc30gbW9kdWxlIGNhbiBwcm9kdWNlIGEgc3VpdGFibGVcbiAqICAgICB0cmFuc2R1Y2VyIGZ1bmN0aW9uLiBJZiB0aGlzIGlzbid0IHByZXNlbnQsIHRoZSBpbnB1dCBjb2xsZWN0aW9uIHdpbGxcbiAqICAgICBzaW1wbHkgYmUgcmVkdWNlZCBpbnRvIGFuIGl0ZXJhdG9yIHdpdGhvdXQgdHJhbnNmb3JtYXRpb24uXG4gKiBAcmV0dXJuIHttb2R1bGU6eGR1Y2UuSXRlcmF0b3J9IEFuIGl0ZXJhdG9yIGNvbnRhaW5pbmcgYWxsIG9mIHRoZSB0cmFuc2Zvcm1lZFxuICogICAgIHZhbHVlcyBmcm9tIHRoZSBpbnB1dCBjb2xsZWN0aW9uIGVsZW1lbnRzLlxuICovXG5mdW5jdGlvbiBhc0l0ZXJhdG9yKGNvbGxlY3Rpb24sIHhmb3JtKSB7XG4gIHJldHVybiB4Zm9ybSA/IHRyYW5zZHVjaW5nSXRlcmF0b3IoY29sbGVjdGlvbiwgeGZvcm0pIDogaXRlcmF0b3IoY29sbGVjdGlvbik7XG59XG5cbi8qKlxuICogVHJhbnNmb3JtcyB0aGUgZWxlbWVudHMgb2YgdGhlIGlucHV0IGNvbGxlY3Rpb24gYW5kIHJlZHVjZXMgdGhlbSBpbnRvIGEgbmV3XG4gKiBjb2xsZWN0aW9uIG9mIHRoZSBzYW1lIHR5cGUuXG4gKlxuICogVGhpcyBpcyB0aGUgaGlnaGVzdCBsZXZlbCBvZiB0aGUgdGhyZWUgbWFpbiB0cmFuc2R1Y3Rpb24gZnVuY3Rpb25zXG4gKiAoYHNlcXVlbmNlYCwgYHtAbGluayBtb2R1bGU6eGR1Y2UuaW50b3xpbnRvfWAsIGFuZFxuICogYHtAbGluayBtb2R1bGU6eGR1Y2UudHJhbnNkdWNlfHRyYW5zZHVjZX1gKS4gSXQgY3JlYXRlcyBhIG5ldyBjb2xsZWN0aW9uIG9mXG4gKiB0aGUgc2FtZSB0eXBlIGFzIHRoZSBpbnB1dCBjb2xsZWN0aW9uIGFuZCByZWR1Y2VzIHRoZSB0cmFuc2Zvcm1lZCBlbGVtZW50c1xuICogaW50byBpdC4gQWRkaXRpb25hbGx5LCB1bmxpa2UgYHtAbGluayBtb2R1bGU6eGR1Y2UuaW50b3xpbnRvfWAgYW5kXG4gKiBge0BsaW5rIG1vZHVsZTp4ZHVjZS50cmFuc2R1Y2V8dHJhbnNkdWNlfWAsIHRoaXMgZnVuY3Rpb24gaXMgY2FwYWJsZSBvZlxuICogcHJvZHVjaW5nIGFuIGl0ZXJhdG9yIChhcyBsb25nIGFzIHRoZSBpbnB1dCBpcyBhbiBpdGVyYXRvcikuXG4gKlxuICogVGhlIGlucHV0IGNvbGxlY3Rpb24gbXVzdCBub3Qgb25seSBpbXBsZW1lbnQgdGhlIGBpdGVyYXRvcmAgcHJvdG9jb2wgKGFzIGluXG4gKiB0aGUgbGFzdCB0d28gZnVuY3Rpb25zKSBidXQgYWxzbyB0aGUgYGluaXRgLCBgcmVzdWx0YCwgYW5kIGBzdGVwYCB0cmFuc2R1Y2VyXG4gKiBwcm90b2NvbHMuIFNwZWNpYWwgc3VwcG9ydCBpcyBwcm92aWRlZCBmb3IgYXJyYXlzLCBzdHJpbmdzLCBvYmplY3RzLCBhbmRcbiAqIGl0ZXJhdG9ycywgc28gdGhleSBuZWVkIG5vdCBpbXBsZW1lbnQgYW55IHByb3RvY29sLlxuICpcbiAqIFRoZSBvYnZpb3VzIGxpbWl0YXRpb24gb2YgdGhpcyBmdW5jdGlvbiBpcyB0aGF0IHRoZSB0eXBlIG9mIG91dHB1dCBjb2xsZWN0aW9uXG4gKiBjYW5ub3QgYmUgY2hvc2VuLiBTaW5jZSBpdCBpcyBhbHdheXMgdGhlIHNhbWUgYXMgdGhlIGlucHV0IGNvbGxlY3Rpb24sIHRoaXNcbiAqIGZ1bmN0aW9uIGNhbm5vdCBiZSB1c2VkIHRvIGNvbnZlcnQgYSBjb2xsZWN0aW9uIGludG8gYSBkaWZmZXJlbnQgdHlwZS5cbiAqXG4gKiBgYGBcbiAqIGltcG9ydCB7IHNlcXVlbmNlIH0gZnJvbSBcIkBjaGFua28veGR1Y2VcIjtcbiAqIGltcG9ydCB7IG1hcCB9IGZyb20gXCJAY2hhbmtvL3RyYW5zZHVjZXJzXCI7XG4gKlxuICogY29uc3QgeGZvcm0gPSBtYXAoeCA9PiB4ICsgMSk7XG4gKlxuICogbGV0IHJlc3VsdCA9IHNlcXVlbmNlKFsxLCAyLCAzLCA0LCA1XSwgeGZvcm0pO1xuICogY29uc29sZS5sb2cocmVzdWx0KTsgICAvLyAtPiByZXN1bHQgPSBbMiwgMywgNCwgNSwgNl1cbiAqXG4gKiByZXN1bHQgPSBzZXF1ZW5jZSgnMTIzNDUnLCB4Zm9ybSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQpOyAgIC8vIC0+IHJlc3VsdCA9ICcyMzQ1NidcbiAqIGBgYFxuICpcbiAqIFRoZXNlIGV4YW1wbGVzIGFyZSBpZGVudGljYWwgdG8gc29tZSBvZiB0aGUgZXhhbXBsZXMgZnJvbSB0aGUgYGFzWGBcbiAqIGZ1bmN0aW9ucy4gT3RoZXIgZXhhbXBsZXMgYXJlIG5vdCBwb3NzaWJsZSB3aXRoIGBzZXF1ZW5jZWAgYmVjYXVzZSB0aGV5IGhhdmVcbiAqIGRpZmZlcmVudCBpbnB1dCBhbmQgb3V0cHV0IGNvbGxlY3Rpb24gdHlwZXMuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHBhcmFtIHttb2R1bGU6eGR1Y2UuUmVkdWNpYmxlSXRlcmFibGV9IGNvbGxlY3Rpb24gVGhlIGlucHV0IGNvbGxlY3Rpb24uIFRoaXNcbiAqICAgICBtdXN0IGltcGxlbWVudCB0aGUgYGl0ZXJhdG9yYCwgYGluaXRgLCBgcmVzdWx0YCwgYW5kIGBzdGVwYCBwcm90b2NvbHMuXG4gKiAgICAgU3BlY2lhbCBzdXBwb3J0IGlzIHByb3ZpZGVkIGZvciBhcnJheXMsIHN0cmluZ3MsIG9iamVjdHMsIGFuZCBpdGVyYXRvcnMsXG4gKiAgICAgc28gdGhleSBkbyBub3QgaGF2ZSB0byBpbXBsZW1lbnQgYW55IHByb3RvY29scy5cbiAqIEBwYXJhbSB7bW9kdWxlOnhkdWNlLlRyYW5zZHVjZXJGdW5jdGlvbn0geGZvcm0gQSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgYSB0cmFuc2R1Y2VyXG4gKiAgICAgb2JqZWN0IHRoYXQgZGVmaW5lcyB0aGUgdHJhbnNmb3JtYXRpb24gYmVpbmcgZG9uZSB0byB0aGUgaW5wdXRcbiAqICAgICBjb2xsZWN0aW9uJ3MgZWxlbWVudHMuIEFueSBvZiB0aGUgdHJhbnNkdWNlcnMgaW4gdGhlXG4gKiAgICAge0BsaW5rIG1vZHVsZTp4ZHVjZS50cmFuc2R1Y2Vyc3x0cmFuc2R1Y2Vyc30gbW9kdWxlIGNhbiBwcm9kdWNlIGFcbiAqICAgICBzdWl0YWJsZSB0cmFuc2R1Y2VyIGZ1bmN0aW9uLlxuICogQHJldHVybiB7bW9kdWxlOnhkdWNlLlJlZHVjaWJsZUl0ZXJhYmxlfSBBIGNvbGxlY3Rpb24gb2YgdGhlIHNhbWUgdHlwZSBhcyB0aGVcbiAqICAgICBpbnB1dCBjb2xsZWN0aW9uLCBjb250YWluaW5nIGFsbCBvZiB0aGUgdHJhbnNmb3JtZWQgdmFsdWVzIGZyb20gdGhlIGlucHV0XG4gKiAgICAgY29sbGVjdGlvbiBlbGVtZW50cy5cbiAqL1xuZnVuY3Rpb24gc2VxdWVuY2UoY29sbGVjdGlvbiwgeGZvcm0pIHtcbiAgc3dpdGNoICh0cnVlKSB7XG4gICAgY2FzZSBpc0FycmF5KGNvbGxlY3Rpb24pOlxuICAgICAgcmV0dXJuIGFzQXJyYXkoY29sbGVjdGlvbiwgeGZvcm0pO1xuICAgIGNhc2UgaXNPYmplY3QoY29sbGVjdGlvbik6XG4gICAgICByZXR1cm4gYXNPYmplY3QoY29sbGVjdGlvbiwgeGZvcm0pO1xuICAgIGNhc2UgaXNTdHJpbmcoY29sbGVjdGlvbik6XG4gICAgICByZXR1cm4gYXNTdHJpbmcoY29sbGVjdGlvbiwgeGZvcm0pO1xuICAgIGNhc2UgaXNJbXBsZW1lbnRlZChjb2xsZWN0aW9uLCBcInN0ZXBcIik6XG4gICAgICByZXR1cm4gdHJhbnNkdWNlKGNvbGxlY3Rpb24sIHhmb3JtLCBjb2xsZWN0aW9uKTtcbiAgICBjYXNlIGlzSW1wbGVtZW50ZWQoY29sbGVjdGlvbiwgXCJpdGVyYXRvclwiKTpcbiAgICAgIHJldHVybiBhc0l0ZXJhdG9yKGNvbGxlY3Rpb24sIHhmb3JtKTtcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgRXJyb3IoYENhbm5vdCBzZXF1ZW5jZSBjb2xsZWN0aW9uOiAke2NvbGxlY3Rpb259YCk7XG4gIH1cbn1cblxuLyoqXG4gKiBUcmFuc2Zvcm1zIHRoZSBlbGVtZW50cyBvZiB0aGUgaW5wdXQgY29sbGVjdGlvbiBhbmQgcmVkdWNlcyB0aGVtIGludG8gdGhlXG4gKiB0YXJnZXQgY29sbGVjdGlvbi5cbiAqXG4gKiBUaGlzIGlzIG11Y2ggbGlrZSBge0BsaW5rIG1vZHVsZTp4ZHVjZS50cmFuc2R1Y2V8dHJhbnNkdWNlfWAsIGV4Y2VwdCB0aGF0XG4gKiBpbnN0ZWFkIG9mIGV4cGxpY2l0bHkgcHJvdmlkaW5nIGEgcmVkdWNlciAoYW5kIHBlcmhhcHMgYW4gaW5pdGlhbFxuICogY29sbGVjdGlvbiksIHRoZSB0YXJnZXQgY29sbGVjdGlvbiBhY3RzIGFzIGEgcmVkdWNlciBpdHNlbGYuIFRoaXMgcmVxdWlyZXNcbiAqIHRoYXQgdGhlIGNvbGxlY3Rpb24gaW1wbGVtZW50IHRoZSBgaW5pdGAsIGByZXN1bHRgLCBhbmQgYHN0ZXBgIHRyYW5zZHVjZXJcbiAqIHByb3RvY29sIGZ1bmN0aW9ucy5cbiAqXG4gKiBJZiBubyB0cmFuc2R1Y2VyIGZ1bmN0aW9uIGlzIHByb3ZpZGVkLCB0aGUgaW5wdXQgY29sbGVjdGlvbiBlbGVtZW50cyBhcmVcbiAqIHJlZHVjZWQgaW50byB0aGUgdGFyZ2V0IGNvbGxlY3Rpb24gd2l0aG91dCBiZWluZyB0cmFuc2Zvcm1lZC4gVGhpcyBjYW4gYmVcbiAqIHVzZWQgdG8gY29udmVydCBvbmUga2luZCBvZiBjb2xsZWN0aW9uIGludG8gYW5vdGhlci5cbiAqXG4gKiBgYGBcbiAqIGltcG9ydCB7IGludG8gfSBmcm9tIFwiQGNoYW5rby94ZHVjZVwiO1xuICogaW1wb3J0IHsgbWFwIH0gZnJvbSBcIkBjaGFua28vdHJhbnNkdWNlcnNcIjtcbiAqXG4gKiBjb25zdCB4Zm9ybSA9IG1hcCh4ID0+IHggKyAxKTtcbiAqXG4gKiBsZXQgcmVzdWx0ID0gaW50byhbXSwgWzEsIDIsIDMsIDQsIDVdLCB4Zm9ybSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQpOyAgIC8vIC0+IFsyLCAzLCA0LCA1LCA2XVxuICpcbiAqIHJlc3VsdCA9IGludG8oXCJcIiwgWzEsIDIsIDMsIDQsIDVdLCB4Zm9ybSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQpOyAgIC8vIC0+IFwiMjM0NTZcIlxuICpcbiAqIHJlc3VsdCA9IGludG8oW10sIFwiMTIzNDVcIiwgeGZvcm0pO1xuICogY29uc29sZS5sb2cocmVzdWx0KTsgICAvLyAtPiBbMiwgMywgNCwgNSwgNl1cbiAqXG4gKiByZXN1bHQgPSBpbnRvKFwiXCIsIFwiMTIzNDVcIiwgeGZvcm0pO1xuICogY29uc29sZS5sb2cocmVzdWx0KTsgICAvLyAtPiBcIjIzNDU2XCJcbiAqIGBgYFxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwYXJhbSB7bW9kdWxlOnhkdWNlLlJlZHVjaWJsZX0gdGFyZ2V0IFRoZSBjb2xsZWN0aW9uIGludG8gd2hpY2ggYWxsIG9mIHRoZVxuICogICAgIHRyYW5zZm9ybWVkIGlucHV0IGNvbGxlY3Rpb24gZWxlbWVudHMgd2lsbCBiZSByZWR1Y2VkLiBUaGlzIGNvbGxlY3Rpb25cbiAqICAgICBtdXN0IGltcGxlbWVudCB0aGUgYGluaXRgLCBgcmVzdWx0YCwgYW5kIGBzdGVwYCBwcm90b2NvbCBmdW5jdGlvbnMgZnJvbVxuICogICAgIHRoZSB0cmFuc2R1Y2VyIHByb3RvY29sLiBTcGVjaWFsIHN1cHBvcnQgaXMgcHJvdmlkZWQgZm9yIGFycmF5cywgc3RyaW5ncyxcbiAqICAgICBhbmQgb2JqZWN0cywgc28gdGhleSBuZWVkIG5vdCBpbXBsZW1lbnQgdGhlIHByb3RvY29sLlxuICogQHBhcmFtIHttb2R1bGU6eGR1Y2UuSXRlcmFibGV9IGNvbGxlY3Rpb24gVGhlIGlucHV0IGNvbGxlY3Rpb24uIFRoZSBvbmx5XG4gKiAgICAgcmVxdWlyZW1lbnQgb2YgdGhpcyBjb2xsZWN0aW9uIGlzIHRoYXQgaXQgaW1wbGVtZW50IHRoZSBgaXRlcmF0b3JgXG4gKiAgICAgcHJvdG9jb2wuIFNwZWNpYWwgc3VwcG9ydCBpcyBwcm92aWRlZCBieSB0aGUgbGlicmFyeSBmb3Igb2JqZWN0cywgdG8gdGhleVxuICogICAgIGNhbiBhbHNvIGJlIHVzZWQuXG4gKiBAcGFyYW0ge21vZHVsZTp4ZHVjZS5UcmFuc2R1Y2VyRnVuY3Rpb259IFt4Zm9ybV0gQSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgYSB0cmFuc2R1Y2VyXG4gKiAgICAgb2JqZWN0IHRoYXQgZGVmaW5lcyB0aGUgdHJhbnNmb3JtYXRpb24gYmVpbmcgZG9uZSB0byB0aGUgaW5wdXRcbiAqICAgICBjb2xsZWN0aW9uJ3MgZWxlbWVudHMuIEFueSBvZiB0aGUgdHJhbnNkdWNlcnMgaW4gdGhlXG4gKiAgICAge0BsaW5rIG1vZHVsZTp0cmFuc2R1Y2Vyc3x0cmFuc2R1Y2Vyc30gbW5vZHVsZSBjYW4gcHJvZHVjZSBhIHN1aXRhYmxlXG4gKiAgICAgdHJhbnNkdWNlciBmdW5jdGlvbi4gSWYgdGhpcyBpc24ndCBwcmVzZW50LCB0aGUgaW5wdXQgY29sbGVjdGlvbiB3aWxsXG4gKiAgICAgc2ltcGx5IGJlIHJlZHVjZWQgaW50byB0aGUgdGFyZ2V0IGNvbGxlY3Rpb24gd2l0aG91dCB0cmFuc2Zvcm1hdGlvbi5cbiAqIEByZXR1cm4ge21vZHVsZTp4ZHVjZS5SZWR1Y2libGV9IFRoZSBgdGFyZ2V0YCBjb2xsZWN0aW9uLCB3aXRoIGFsbCBvZiB0aGVcbiAqICAgICB0cmFuZm9ybWVkIGlucHV0IGNvbGxlY3Rpb24gZWxlbWVudHMgcmVkdWNlZCBvbnRvIGl0LlxuICovXG5mdW5jdGlvbiBpbnRvKHRhcmdldCwgY29sbGVjdGlvbiwgeGZvcm0pIHtcbiAgc3dpdGNoICh0cnVlKSB7XG4gICAgY2FzZSBpc0FycmF5KHRhcmdldCk6XG4gICAgICByZXR1cm4gdHJhbnNkdWNlKGNvbGxlY3Rpb24sIHhmb3JtLCBBUlJBWV9SRURVQ0VSLCB0YXJnZXQpO1xuICAgIGNhc2UgaXNPYmplY3QodGFyZ2V0KTpcbiAgICAgIHJldHVybiB0cmFuc2R1Y2UoY29sbGVjdGlvbiwgeGZvcm0sIE9CSkVDVF9SRURVQ0VSLCB0YXJnZXQpO1xuICAgIGNhc2UgaXNTdHJpbmcodGFyZ2V0KTpcbiAgICAgIHJldHVybiB0cmFuc2R1Y2UoY29sbGVjdGlvbiwgeGZvcm0sIFNUUklOR19SRURVQ0VSLCB0YXJnZXQpO1xuICAgIGNhc2UgaXNJbXBsZW1lbnRlZCh0YXJnZXQsIFwic3RlcFwiKTpcbiAgICAgIHJldHVybiB0cmFuc2R1Y2UoY29sbGVjdGlvbiwgeGZvcm0sIHRhcmdldCwgdGFyZ2V0KTtcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgRXJyb3IoYENhbm5vdCByZWR1Y2UgY29sbGVjdGlvbiBpbnRvICR7dGFyZ2V0fTogJHtjb2xsZWN0aW9ufWApO1xuICB9XG59XG5cbi8qKlxuICogQ29tcG9zZXMgdHdvIG9yIG1vcmUgdHJhbnNkdWNlciBmdW5jdGlvbnMgaW50byBhIHNpbmdsZSB0cmFuc2R1Y2VyIGZ1bmN0aW9uLlxuICpcbiAqIEVhY2ggZnVuY3Rpb24gdGhhdCB0YWtlcyBhIHRyYW5zZHVjZXIgZnVuY3Rpb25cbiAqIChge0BsaW5rIG1vZHVsZTp4ZHVjZS5zZXF1ZW5jZXxzZXF1ZW5jZX1gLCBge0BsaW5rIG1vZHVsZTp4ZHVjZS5pbnRvfGludG99YCxcbiAqIGV0Yy4pIGlzIG9ubHkgY2FwYWJsZSBvZiBhY2NlcHRpbmcgb25lIG9mIHRoZW0uIElmIHRoZXJlIGlzIGEgbmVlZCB0byBoYXZlXG4gKiBzZXZlcmFsIHRyYW5zZHVjZXJzIGNoYWluZWQgdG9nZXRoZXIsIHRoZW4gdXNlIGBjb21wb3NlYCB0byBjcmVhdGUgYVxuICogdHJhbnNkdWNlciBmdW5jdGlvbiB0aGF0IGRvZXMgd2hhdCBhbGwgb2YgdGhlbSBkby5cbiAqXG4gKiBOT1RFOiBJbiBmdW5jdGlvbmFsIHByb2dyYW1taW5nLCBhIGNvbXBvc2UgZnVuY3Rpb24gaXMgZ2VuZXJhbGx5IG9yZGVyZWQgc29cbiAqIHRoYXQgdGhlIGZpcnN0LWV4ZWN1dGVkIGZ1bmN0aW9uIGlzIGxpc3RlZCBsYXN0LiBUaGlzIGlzIGRvbmUgaW4gdGhlIG9wcG9zaXRlXG4gKiB3YXksIHdpdGggdGhlIGZpcnN0IHRyYW5zZHVjZXIgZXhlY3V0aW5nIGZpcnN0LCBldGMuIFRoaXMgaXMgYSBtb3JlIG5hdHVyYWxcbiAqIG9yZGVyaW5nIGZvciB0cmFuc2R1Y2VyIGZ1bmN0aW9ucyBiZWNhdXNlIHRoZXJlIGlzIGEgdmVyeSByZWFsIGRpcmVjdGlvbmFsXG4gKiBwdWxsIG9mIGVsZW1lbnRzIHRocm91Z2ggYSBjaGFpbiBvZiBjb21wb3NlZCB0cmFuc2R1Y2VyIGZ1bmN0aW9ucy5cbiAqXG4gKiBgYGBcbiAqIGltcG9ydCB7IGNvbXBvc2UsIHNlcXVlbmNlIH0gZnJvbSBcIkBjaGFua28veGR1Y2VcIjtcbiAqIGltcG9ydCB7IG1hcCwgZmlsdGVyLCB0YWtlIH0gZnJvbSBcIkBjaGFua28vdHJhbnNkdWNlcnNcIjtcbiAqXG4gKiBjb25zdCBhZGQxID0geCA9PiB4ICsgMTtcbiAqIGNvbnN0IG9kZCA9IHggPT4geCAlIDIgIT09IDA7XG4gKlxuICogY29uc3QgeGZvcm0gPSBjb21wb3NlKG1hcChhZGQxKSwgZmlsdGVyKG9kZCksIHRha2UoMykpO1xuICpcbiAqIGNvbnN0IHJlc3VsdCA9IHNlcXVlbmNlKFsxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMF0sIHhmb3JtKTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdCk7ICAgLy8gLT4gWzMsIDUsIDddO1xuICogYGBgXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHBhcmFtIHsuLi5tb2R1bGU6eGR1Y2UuVHJhbnNkdWNlckZ1bmN0aW9ufSBmbnMgT25lIG9yIG1vcmUgZnVuY3Rpb24gdGhhdCBlYWNoIGNyZWF0ZVxuICogICAgIGEgdHJhbnNkdWNlciBvYmplY3QgdGhhdCBkZWZpbmVzIHRoZSB0cmFuc2Zvcm1hdGlvbiBiZWluZyBkb25lIHRvIGFcbiAqICAgICBjb2xsZWN0aW9uJ3MgZWxlbWVudHMuIEFueSBvZiB0aGUgdHJhbnNkdWNlcnMgaW4gdGhlXG4gKiAgICAge0BsaW5rIG1vZHVsZTp0cmFuc2R1Y2Vyc3x0cmFuc2R1Y2Vyc30gbW9kdWxlIGNhbiBwcm9kdWNlIGEgc3VpdGFibGVcbiAqICAgICB0cmFuc2R1Y2VyIGZ1bmN0aW9uLlxuICogQHJldHVybiB7bW9kdWxlOnhkdWNlLlRyYW5zZHVjZXJGdW5jdGlvbn0gQSB0cmFuc2R1Y2VyIGZ1bmN0aW9uIHRoYXQgcHJvZHVjZXMgYVxuICogICAgIHRyYW5zZHVjZXIgb2JqZWN0IHRoYXQgcGVyZm9ybXMgKmFsbCogb2YgdGhlIHRyYW5zZm9ybWF0aW9ucyBvZiB0aGVcbiAqICAgICBvYmplY3RzIHByb2R1Y2VkIGJ5IHRoZSBpbnB1dCB0cmFuc2R1Y2VyIGZ1bmN0aW9ucy5cbiAqL1xuZnVuY3Rpb24gY29tcG9zZSguLi5mbnMpIHtcbiAgY29uc3QgcmV2ZXJzZWQgPSBmbnMucmV2ZXJzZSgpO1xuICByZXR1cm4gdmFsdWUgPT4gcmV2ZXJzZWQucmVkdWNlKChhY2MsIGZuKSA9PiBmbihhY2MpLCB2YWx1ZSk7XG59XG5cbmV4cG9ydCB7XG4gIHRyYW5zZHVjZSxcbiAgc2VxdWVuY2UsXG4gIGludG8sXG4gIGFzQXJyYXksXG4gIGFzT2JqZWN0LFxuICBhc1N0cmluZyxcbiAgYXNJdGVyYXRvcixcbiAgY29tcG9zZVxufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG4vKipcbiAqIEEgYnVuY2ggb2YgdXRpbGl0eSBmdW5jdGlvbnMuIFRoZXNlIGFyZSBhbGwgdXNlZCBieSB0aGUgbGlicmFyeSBpdHNlbGYgaW5cbiAqIHBsYWNlcywgYnV0IG1hbnkgb2YgdGhlbSBhcmUgc3VpdGFibGUgZm9yIGdlbmVyYWwgdXNlIGFzIHdlbGwuXG4gKiBeXG4gKiBAbW9kdWxlIHhkdWNlL3V0aWxzXG4gKiBAcHJpdmF0ZVxuICovXG5cbi8qKlxuICogYE9iamVjdGAncyBgdG9TdHJpbmdgIGlzIGV4cGxpY2l0bHkgdXNlZCB0aHJvdWdob3V0IGJlY2F1c2UgaXQgY291bGQgYmVcbiAqIHJlZGVmaW5lZCBpbiBhbnkgc3VidHlwZSBvZiBgT2JqZWN0YC5cbiAqXG4gKiBAZnVuY3Rpb24gdG9TdHJpbmdcbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgYSB2YWx1ZSBpcyBhIGZ1bmN0aW9uLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwYXJhbSB7Kn0geCBUaGUgdmFsdWUgYmVpbmcgdGVzdGVkIHRvIHNlZSBpZiBpdCBpcyBhIGZ1bmN0aW9uLlxuICogQHJldHVybiB7Ym9vbGVhbn0gRWl0aGVyIGB0cnVlYCBpZiB0aGUgdGVzdCB2YWx1ZSBpcyBhIGZ1bmN0aW9uIG9yIGBmYWxzZWAgaWZcbiAqICAgICBpdCBpcyBub3QuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHgpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoeCkgPT09IFwiW29iamVjdCBGdW5jdGlvbl1cIjtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgYSB2YWx1ZSBpcyBhIGdlbmVyYXRvciBmdW5jdGlvbi5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcGFyYW0geyp9IHggVGhlIHZhbHVlIGJlaW5nIHRlc3RlZCB0byBzZWUgaWYgaXQgaXMgYSBnZW5lcmF0b3IgZnVuY3Rpb24uXG4gKiBAcmV0dXJuIHtib29sZWFufSBFaXRoZXIgYHRydWVgIGlmIHRoZSB0ZXN0IHZhbHVlIGlzIGEgZ2VuZXJhdG9yIGZ1bmN0aW9uIG9yXG4gKiAgICAgYGZhbHNlYCBpZiBpdCBpcyBub3QuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBpc0dlbmVyYXRvckZ1bmN0aW9uKHgpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoeCkgPT09IFwiW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl1cIjtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgYSB2YWx1ZSBpcyBhIHBsYWluIG9iamVjdC5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgYGZhbHNlYCBpZiB0aGUgdmFsdWUgaXMgYW55IG90aGVyIHNvcnQgb2YgYnVpbHQtaW5cbiAqIG9iamVjdCAoc3VjaCBhcyBhbiBhcnJheSBvciBhIHN0cmluZykuIEl0IGFsc28gcmV0dXJucyBgZmFsc2VgIGZvciBhbnkgb2JqZWN0XG4gKiB0aGF0IGlzIGNyZWF0ZWQgYnkgYSBjb25zdHJ1Y3RvciB0aGF0IGlzIG5vdCBgT2JqZWN0YCdzIGNvbnN0cnVjdG9yLCBtZWFuaW5nXG4gKiB0aGF0IFwiaW5zdGFuY2VzXCIgb2YgY3VzdG9tIFwiY2xhc3Nlc1wiIHdpbGwgcmV0dXJuIGBmYWxzZWAuIFRoZXJlZm9yZSBpdCdzIG9ubHlcbiAqIGdvaW5nIHRvIHJldHVybiBgdHJ1ZWAgZm9yIGxpdGVyYWwgb2JqZWN0cyBvciB0aG9zZSBjcmVhdGVkIHdpdGhcbiAqIGBPYmplY3QuY3JlYXRlKClgLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwYXJhbSB7Kn0geCBUaGUgdmFsdWUgYmVpbmcgdGVzdGVkIHRvIHNlZSBpZiBpdCBpcyBhIHBsYWluIG9iamVjdC5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IEVpdGhlciBgdHJ1ZWAgaWYgdGhlIHRlc3QgdmFsdWUgaXMgYSBwbGFpbiBvYmplY3Qgb3JcbiAqICAgICBgZmFsc2VgIGlmIGl0IGlzIG5vdC5cbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QoeCkge1xuICAvLyBUaGlzIGNoZWNrIGV4Y2x1ZGVzIGJ1aWx0LWluIG5vbi1PYmplY3Qgb2JqZWN0cyAoc3VjaCBhcyBBcnJheSBhbmQgU3RyaW5nKS5cbiAgLy8gSXQgYWxzbyBleGNsdWRlcyBvYmplY3RzIGNyZWF0ZWQgZnJvbSBFUzIwMTUgY2xhc3NlcywgYnV0IGl0IGRvZXMgbm90XG4gIC8vIGV4Y2x1ZGUgb2JqZWN0cyBjcmVhdGVkIHdpdGggYG5ld2Agb24gY29uc3RydWN0b3IgZnVuY3Rpb25zICh0aGF0IGhhcHBlbnNcbiAgLy8gYmVsb3cpLlxuICBpZiAodG9TdHJpbmcuY2FsbCh4KSAhPT0gXCJbb2JqZWN0IE9iamVjdF1cIikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIFByb3RvdHlwZS1sZXNzIG9iamVjdHMgKGNyZWF0ZWQgd2l0aCBgT2JqZWN0LmNyZWF0ZShudWxsKSlgIHBhc3NcbiAgY29uc3QgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoeCk7XG4gIGlmIChwcm90byA9PT0gbnVsbCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLy8gQ2hlY2sgdG8gc2VlIHdoZXRoZXIgdGhlIGNvbnN0cnVjdG9yIG9mIHRoZSB0ZXN0ZWQgb2JqZWN0IGlzIHRoZSBPYmplY3RcbiAgLy8gY29uc3RydWN0b3IuIFRoaXMgaXMgdGhlIG9ubHkgY29uc3RydWN0b3IgdGhhdCBwcm9kdWNlcyBhIFwicGxhaW5cIiBvYmplY3QuXG4gIGNvbnN0IGN0b3IgPVxuICAgIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwcm90bywgXCJjb25zdHJ1Y3RvclwiKSAmJlxuICAgIHByb3RvLmNvbnN0cnVjdG9yO1xuICByZXR1cm4gdHlwZW9mIGN0b3IgPT09IFwiZnVuY3Rpb25cIiAmJiBjdG9yID09PSBPYmplY3Q7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGEgdmFsdWUgaXMgYSBudW1iZXIuXG4gKlxuICogVGhpcyBmdW5jdGlvbiB3aWxsIHJldHVybiBgdHJ1ZWAgZm9yIGFueSBudW1iZXIgbGl0ZXJhbCBvciBpbnN0YW5jZSBvZlxuICogYE51bWJlcmAgZXhjZXB0IGZvciBgSW5maW5pdHlgIG9yIGBOYU5gLiBJdCB3aWxsIHJldHVybiBgZmFsc2VgIGZvciBzdHJpbmdzXG4gKiB0aGF0IGhhcHBlbiB0byBhbHNvIGJlIG51bWJlcnM7IHRoZSB2YWx1ZSBtdXN0IGJlIGFuIGFjdHVhbCBgTnVtYmVyYCBpbnN0YW5jZVxuICogb3IgbnVtYmVyIGxpdGVyYWwgdG8gcmV0dXJuIGB0cnVlYC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcGFyYW0geyp9IHggVGhlIHZhbHVlIGJlaW5nIHRlc3RlZCB0byBzZWUgaWYgaXQgaXMgYSBudW1iZXIuXG4gKiBAcmV0dXJuIHtib29sZWFufSBFaXRoZXIgYHRydWVgIGlmIHRoZSB0ZXN0IHZhbHVlIGlzIGEgZmluaXRlIG51bWJlciAobm90XG4gKiAgICAgaW5jbHVkaW5nIHN0cmluZyByZXByZXNlbnRhdGlvbnMgb2YgbnVtYmVycykgb3IgYGZhbHNlYCBpZiBpdCBpcyBub3QuXG4gKi9cbmZ1bmN0aW9uIGlzTnVtYmVyKHgpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoeCkgPT09IFwiW29iamVjdCBOdW1iZXJdXCIgJiYgaXNGaW5pdGUoeCk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGEgdmFsdWUgaXMgYSBzdHJpbmcuXG4gKlxuICogTGl0ZXJhbCBzdHJpbmdzIHdpbGwgcmV0dXJuIGB0cnVlYCwgYXMgd2lsbCBpbnN0YW5jZXMgb2YgdGhlIGBTdHJpbmdgIG9iamVjdC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcGFyYW0geyp9IHggVGhlIHZhbHVlIGJlaW5nIHRlc3RlZCB0byBzZWUgaWYgaXQgaXMgYSBzdHJpbmcuXG4gKiBAcmV0dXJuIHtib29sZWFufSBFaXRoZXIgYHRydWVgIGlmIHRoZSB0ZXN0IHZhbHVlIGlzIGEgc3RyaW5nIG9yIGBmYWxzZWAgaWZcbiAqICAgIGl0IGlzIG5vdC5cbiAqL1xuZnVuY3Rpb24gaXNTdHJpbmcoeCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh4KSA9PT0gXCJbb2JqZWN0IFN0cmluZ11cIjtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgYSB2YWx1ZSBpcyBhbiBhcnJheS5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIG1lcmVseSBkZWxlZ2F0ZXMgdG8gYEFycmF5LmlzQXJyYXlgLiBJdCBpcyBwcm92aWRlZCBmb3JcbiAqIGNvbnNpc3RlbmN5IGluIGNhbGxpbmcgc3R5bGUgb25seS5cbiAqXG4gKiBAZnVuY3Rpb24gaXNBcnJheVxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHBhcmFtIHsqfSB4IFRoZSB2YWx1ZSBiZWluZyB0ZXN0ZWQgdG8gc2VlIGlmIGl0IGlzIGFuIGFycmF5LlxuICogQHJldHVybiB7Ym9vbGVhbn0gRWl0aGVyIGB0cnVlYCBpZiB0aGUgdGVzdCB2YWx1ZSBpcyBhbiBhcnJheSBvciBgZmFsc2VgIGlmXG4gKiAgICAgaXQgaXMgbm90LlxuICovXG5jb25zdCBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxuZXhwb3J0IHtcbiAgaXNGdW5jdGlvbixcbiAgaXNHZW5lcmF0b3JGdW5jdGlvbixcbiAgaXNPYmplY3QsXG4gIGlzTnVtYmVyLFxuICBpc1N0cmluZyxcbiAgaXNBcnJheVxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=