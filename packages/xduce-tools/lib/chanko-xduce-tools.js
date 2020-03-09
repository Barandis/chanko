(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["xduceTools"] = factory();
	else
		root["xduceTools"] = factory();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly94ZHVjZVRvb2xzL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly94ZHVjZVRvb2xzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3hkdWNlVG9vbHMvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8veGR1Y2VUb29scy8uL3NyYy9tb2R1bGVzL2l0ZXJhdGlvbi5qcyIsIndlYnBhY2s6Ly94ZHVjZVRvb2xzLy4vc3JjL21vZHVsZXMvcHJvdG9jb2wuanMiLCJ3ZWJwYWNrOi8veGR1Y2VUb29scy8uL3NyYy9tb2R1bGVzL3JlZHVjdGlvbi5qcyIsIndlYnBhY2s6Ly94ZHVjZVRvb2xzLy4vc3JjL21vZHVsZXMvdHJhbnNmb3JtYXRpb24uanMiLCJ3ZWJwYWNrOi8veGR1Y2VUb29scy8uL3NyYy9tb2R1bGVzL3V0aWxzLmpzIl0sIm5hbWVzIjpbIm9iamVjdEl0ZXJhdG9yIiwib2JqIiwic29ydEZuIiwia2V5cyIsIk9iamVjdCIsInNvcnQiLCJpbmRleCIsImxlbmd0aCIsImsiLCJrdiIsImtleSIsInYiLCJ2YWx1ZSIsImZ1bmN0aW9uSXRlcmF0b3IiLCJmbiIsImN1cnJlbnQiLCJpdGVyYXRvciIsImlzRnVuY3Rpb24iLCJTeW1ib2wiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiaXNPYmplY3QiLCJpc0l0ZXJhYmxlIiwiaXNJbXBsZW1lbnRlZCIsInByb3RvY29scyIsImNyZWF0ZSIsImluaXQiLCJmb3IiLCJzdGVwIiwicmVzdWx0IiwicmVkdWNlZCIsInByb3RvY29sIiwiYXN5bmNJdGVyYXRvciIsImdldE93blByb3BlcnR5U3ltYm9scyIsImluY2x1ZGVzIiwiY29sbGVjdGlvbiIsInAiLCJpc1N0cmluZyIsImlzQXJyYXkiLCJFcnJvciIsImFjYyIsImlucHV0IiwicHVzaCIsIm1heCIsInJlZHVjZSIsImEiLCJiIiwiTWF0aCIsInRvUmVkdWNlciIsImZyZWV6ZSIsIkFSUkFZX1JFRFVDRVIiLCJPQkpFQ1RfUkVEVUNFUiIsIlNUUklOR19SRURVQ0VSIiwidG9UcmFuc2R1Y2VyIiwieGZvcm0iLCJ0b0Z1bmN0aW9uIiwicmVkdWNlciIsInIiLCJiaW5kIiwiY29tcGxldGUiLCJ1bmNvbXBsZXRlIiwiaXNDb21wbGV0ZWQiLCJlbnN1cmVDb21wbGV0ZWQiLCJlbnN1cmVVbmNvbXBsZXRlZCIsIml0ZXIiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJuZXh0IiwiZG9uZSIsInRyYW5zZHVjaW5nSXRlcmF0b3IiLCJzdGVwUmVkdWNlciIsInhpdGVyIiwiaXRlbXMiLCJ1bnNoaWZ0IiwieGYiLCJjb21wbGV0ZWQiLCJwb3AiLCJjb3VudCIsInN0ZXBWYWx1ZSIsInNJdGVyYXRvciIsInRyYW5zZHVjZSIsImkiLCJhc0FycmF5IiwiYXNPYmplY3QiLCJhc1N0cmluZyIsImFzSXRlcmF0b3IiLCJzZXF1ZW5jZSIsImludG8iLCJ0YXJnZXQiLCJjb21wb3NlIiwiZm5zIiwicmV2ZXJzZWQiLCJyZXZlcnNlIiwidG9TdHJpbmciLCJwcm90b3R5cGUiLCJ4IiwiY2FsbCIsInByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJjdG9yIiwiaGFzT3duUHJvcGVydHkiLCJpc051bWJlciIsImlzRmluaXRlIiwiQXJyYXkiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFD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Ozs7Ozs7QUFlQSxTQUFTMUUsUUFBVCxDQUFrQjBFLENBQWxCLEVBQXFCO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSUYsUUFBUSxDQUFDRyxJQUFULENBQWNELENBQWQsTUFBcUIsaUJBQXpCLEVBQTRDO0FBQzFDLFdBQU8sS0FBUDtBQUNELEdBUGtCLENBU25COzs7QUFDQSxRQUFNRSxLQUFLLEdBQUc1RixNQUFNLENBQUM2RixjQUFQLENBQXNCSCxDQUF0QixDQUFkOztBQUNBLE1BQUlFLEtBQUssS0FBSyxJQUFkLEVBQW9CO0FBQ2xCLFdBQU8sSUFBUDtBQUNELEdBYmtCLENBZW5CO0FBQ0E7OztBQUNBLFFBQU1FLElBQUksR0FDUjlGLE1BQU0sQ0FBQ3lGLFNBQVAsQ0FBaUJNLGNBQWpCLENBQWdDSixJQUFoQyxDQUFxQ0MsS0FBckMsRUFBNEMsYUFBNUMsS0FDQUEsS0FBSyxDQUFDaEMsV0FGUjtBQUdBLFNBQU8sT0FBT2tDLElBQVAsS0FBZ0IsVUFBaEIsSUFBOEJBLElBQUksS0FBSzlGLE1BQTlDO0FBQ0Q7QUFFRDs7Ozs7Ozs7Ozs7Ozs7O0FBYUEsU0FBU2dHLFFBQVQsQ0FBa0JOLENBQWxCLEVBQXFCO0FBQ25CLFNBQU9GLFFBQVEsQ0FBQ0csSUFBVCxDQUFjRCxDQUFkLE1BQXFCLGlCQUFyQixJQUEwQ08sUUFBUSxDQUFDUCxDQUFELENBQXpEO0FBQ0Q7QUFFRDs7Ozs7Ozs7Ozs7O0FBVUEsU0FBUzFELFFBQVQsQ0FBa0IwRCxDQUFsQixFQUFxQjtBQUNuQixTQUFPRixRQUFRLENBQUNHLElBQVQsQ0FBY0QsQ0FBZCxNQUFxQixpQkFBNUI7QUFDRDtBQUVEOzs7Ozs7Ozs7Ozs7OztBQVlBLE1BQU16RCxPQUFPLEdBQUdpRSxLQUFLLENBQUNqRSxPQUF0QiIsImZpbGUiOiJjaGFua28teGR1Y2UtdG9vbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJ4ZHVjZVRvb2xzXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInhkdWNlVG9vbHNcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuLyoqXG4gKiBUaGUgY2VudHJhbCBtb2R1bGUgZm9yIHRoZSB0cmFuc2R1Y2VyIGVuZ2luZS5cbiAqXG4gKiBBbGwgb2YgdGhlIGZ1bmN0aW9ucyBpbiB0aGlzIG1vZHVsZSBkZWFsIGRpcmVjdGx5IHdpdGggdHJhbnNkdWNlcnMuIEJ1dFxuICogZmlyc3QsIGxldCdzIHRhbGsgYWJvdXQgdGhlIHByb3RvY29scyB0aGF0IGFyZSBnb2luZyB0byBiZSByZWZlcnJlZCB0b1xuICogdGhyb3VnaG91dCBtYW55IG9mIHRoZSBmdW5jdGlvbiBkaXNjdXNzaW9ucy5cbiAqXG4gKiAjIyBQcm90b2NvbHNcbiAqXG4gKiBPbmUgb2YgdGhlIGtleSBzZWxsaW5nIHBvaW50cyBmb3IgdHJhbnNkdWNlcnMgaXMgdGhhdCB0aGUgc2FtZSB0cmFuc2R1Y2VyIGNhblxuICogYmUgdXNlZCBvbiBhbnkgdHlwZSBvZiBjb2xsZWN0aW9uLiBSYXRoZXIgdGhhbiBoYXZpbmcgdG8gd3JpdGUgYSBuZXcgYG1hcGBcbiAqIGZ1bmN0aW9uIChmb3IgZXhhbXBsZSkgZm9yIGV2ZXJ5IGtpbmQgb2YgY29sbGVjdGlvbiAtIG9uZSBmb3IgYW4gYXJyYXksIG9uZVxuICogZm9yIGEgc3RyaW5nLCBvbmUgZm9yIGFuIGl0ZXJhdG9yLCBldGMuIC0gdGhlcmUgaXMgYSBzaW5nbGUgYG1hcGAgdHJhbnNkdWNlclxuICogdGhhdCB3aWxsIHdvcmsgd2l0aCBhbGwgb2YgdGhlbSwgYW5kIHBvdGVudGlhbGx5IHdpdGggKmFueSoga2luZCBvZlxuICogY29sbGVjdGlvbi4gVGhpcyBpcyBwb3NzaWJsZSBpbXBsZW1lbnRpbmcgKnByb3RvY29scyogb24gdGhlIGNvbGxlY3Rpb25zLlxuICpcbiAqIEEgcHJvdG9jb2wgaW4gSmF2YVNjcmlwdCBpcyBtdWNoIGxpa2UgYW4gaW50ZXJmYWNlIGluIGxhbmd1YWdlcyBsaWtlIEphdmEgYW5kXG4gKiBDIy4gSXQgaXMgYSBjb21taXRtZW50IHRvIHByb3ZpZGluZyBhIGNlcnRhaW4gZnVuY3Rpb25hbGl0eSB1bmRlciBhIGNlcnRhaW5cbiAqIG5hbWUuIEVTMjAxNSBoYXMgc2VlbiB0aGUgaW50cm9kdWN0aW9uIG9mIGFuIGBpdGVyYXRvcmAgcHJvdG9jb2wsIGZvclxuICogZXhhbXBsZSwgYW5kIGxhbmd1YWdlIHN1cHBvcnQgZm9yIGl0ICh0aGUgbmV3IGBmb3IuLi5vZmAgbG9vcCBjYW4gd29yayB3aXRoXG4gKiBhbnkgb2JqZWN0IHRoYXQgY29ycmVjdGx5IGltcGxlbWVudHMgdGhlIGBpdGVyYXRvcmAgcHJvdG9jb2wpLlxuICpcbiAqIFRvIHN1cHBvcnQgdHJhbnNkdWN0aW9uLCBYZHVjZSBleHBlY3RzIGNvbGxlY3Rpb25zIHRvIGltcGxlbWVudCBmb3VyXG4gKiBwcm90b2NvbHMuXG4gKlxuICogLSBgaXRlcmF0b3JgOiBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhbiBpdGVyYXRvciAodGhpcyBvbmUgaXMgYnVpbHQgaW4gdG9cbiAqICAgRVM2IEphdmFTY3JpcHQpXG4gKiAtIGB0cmFuc2R1Y2VyL2luaXRgOiBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIG5ldywgZW1wdHkgaW5zdGFuY2Ugb2YgdGhlXG4gKiAgIG91dHB1dCBjb2xsZWN0aW9uXG4gKiAtIGB0cmFuc2R1Y2VyL3N0ZXBgOiBhIGZ1bmN0aW9uIHRoYXQgdGFrZXMgYW4gYWNjdW11bGF0b3IgKHRoZSByZXN1bHQgb2YgdGhlXG4gKiAgIHJlZHVjdGlvbiBzbyBmYXIpIGFuZCB0aGUgbmV4dCBpbnB1dCB2YWx1ZSwgYW5kIHRoZW4gcmV0dXJucyB0aGVcbiAqICAgYWNjdW11bGF0b3Igd2l0aCB0aGUgbmV4dCBpbnB1dCB2YWx1ZSBhZGRlZCB0byBpdFxuICogLSBgdHJhbnNkdWNlci9yZXN1bHRgOiBhIGZ1bmN0aW9uIHRoYXQgdGFrZXMgdGhlIHJlZHVjZWQgY29sbGVjdGlvbiBhbmRcbiAqICAgcmV0dXJucyB0aGUgZmluYWwgb3V0cHV0IGNvbGxlY3Rpb25cbiAqXG4gKiBgaXRlcmF0b3JgIGlzIHRoZSBidWlsdC1pbiBKYXZhU2NyaXB0IHByb3RvY29sLiBXaGVuIGNhbGxlZCwgaXQgaXMgZXhwZWN0ZWRcbiAqIHRvIHJldHVybiBhbiBpdGVyYXRvciBvdmVyIHRoZSBpbXBsZW1lbnRpbmcgY29sbGVjdGlvbi4gVGhpcyBpdGVyYXRvciBpcyBhblxuICogb2JqZWN0IHRoYXQgaGFzIGEgYG5leHRgIGZ1bmN0aW9uLiBFYWNoIGNhbGwgdG8gYG5leHRgIGlzIGV4cGVjdGVkIHRvIHJldHVyblxuICogYW4gb2JqZWN0IHdpdGggYHZhbHVlYCBhbmQgYGRvbmVgIHByb3BlcnRpZXMsIHdoaWNoIHJlc3BlY3RpdmVseSBob2xkIHRoZVxuICogbmV4dCB2YWx1ZSBvZiB0aGUgaXRlcmF0b3IgYW5kIGEgYm9vbGVhbiB0byBpbmRpY2F0ZSB3aGV0aGVyIHRoZSBpdGVyYXRpb25cbiAqIGhhcyByZWFjaGVkIGl0cyBlbmQuIChUaGlzIGlzIGEgc2ltcGxpZmllZCBleHBsYW5hdGlvbjsgc2VlXG4gKiB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9HdWlkZS9JdGVyYXRvcnNfYW5kX0dlbmVyYXRvcnN8dGhpcyBNRE4gcGFnZX1cbiAqIGZvciBtb3JlIGRldGFpbGVkIGluZm9ybWF0aW9uLilcbiAqXG4gKiBgdHJhbnNkdWNlci9pbml0YCAocmVmZXJyZWQgdG8gZnJvbSBub3cgb24gYXMgYGluaXRgKSBzaG91bGQgYmUgYSBmdW5jdGlvblxuICogdGhhdCB0YWtlcyBubyBwYXJhbWV0ZXJzIGFuZCByZXR1cm5zIGEgbmV3LCBlbXB0eSBpbnN0YW5jZSBvZiB0aGUgb3V0cHV0XG4gKiBjb2xsZWN0aW9uLiBUaGlzIGlzIHRoZSBmdW5jdGlvbiB0aGF0IGRlZmluZXMgaG93IHRvIGNyZWF0ZSBhIG5ldyBjb2xsZWN0aW9uXG4gKiBvZiB0aGUgY29ycmVjdCB0eXBlLlxuICpcbiAqIGB0cmFuc2R1Y2VyL3N0ZXBgIChyZWZlcnJlZCB0byBmcm9tIG5vdyBvbiBhcyBgc3RlcGApIHNob3VsZCBiZSBhIGZ1bmN0aW9uXG4gKiB0aGF0IHRha2VzIHR3byBwYXJhbWV0ZXJzLiBUaGVzZSBwYXJhbWV0ZXJzIGFyZSB0aGUgcmVzdWx0IG9mIHRoZSByZWR1Y3Rpb25cbiAqIHNvIGZhciAoYW5kIHNvIGlzIGEgY29sbGVjdGlvbiBvZiB0aGUgb3V0cHV0IHR5cGUpIGFuZCB0aGUgbmV4dCB2YWx1ZSBmcm9tXG4gKiB0aGUgaW5wdXQgY29sbGVjdGlvbi4gSXQgbXVzdCByZXR1cm4gdGhlIG5ldyByZWR1Y3Rpb24gcmVzdWx0LCB3aXRoIHRoZSBuZXh0XG4gKiB2YWx1ZSBpbmNvcnBvcmF0ZWQgaW50byBpdC4gVGhpcyBpcyB0aGUgZnVuY3Rpb24gdGhhdCBkZWZpbmVzIGhvdyByZWR1Y2UgYVxuICogdmFsdWUgb250byB0aGUgY29sbGVjdGlvbi5cbiAqXG4gKiBgdHJhbnNkdWNlci9yZXN1bHRgIChyZWZlcnJlZCB0byBmcm9tIG5vdyBvbiBhcyBgcmVzdWx0YCkgc2hvdWxkIGJlIGFcbiAqIGZ1bmN0aW9uIHRoYXQgdGFrZXMgb25lIHBhcmFtZXRlciwgd2hpY2ggaXMgdGhlIGZ1bGx5IHJlZHVjZWQgY29sbGVjdGlvbi4gSXRcbiAqIHNob3VsZCByZXR1cm4gdGhlIGZpbmFsIG91dHB1dCBjb2xsZWN0aW9uLiBUaGlzIGFmZm9yZHMgYSBjaGFuY2UgdG8gbWFrZSBhbnlcbiAqIGxhc3QtbWludXRlIGFkanVzdG1lbnRzIHRvIHRoZSByZWR1Y2VkIGNvbGxlY3Rpb24gYmVmb3JlIHJldHVybmluZyBpdC5cbiAqXG4gKiBBcnJheXMsIHN0cmluZ3MsIGFuZCBvYmplY3RzIGFyZSBhbGwgZ2l2ZW4gc3VwcG9ydCBmb3IgYWxsIG9mIHRoZXNlXG4gKiBwcm90b2NvbHMuIE90aGVyIGNvbGxlY3Rpb25zIHdpbGwgaGF2ZSB0byBwcm92aWRlIHRoZWlyIG93biAodGhvdWdoIGl0IHNob3VsZFxuICogYmUgbm90ZWQgdGhhdCBzaW5jZSBgaXRlcmF0b3JgIGlzIGJ1aWx0LWluLCBtYW55IHRoaXJkLXBhcnR5IGNvbGxlY3Rpb25zIHdpbGxcbiAqIGFscmVhZHkgaW1wbGVtZW50IHRoaXMgcHJvdG9jb2wpLiBBcyBhbiBleGFtcGxlLCBsZXQncyBhZGQgdHJhbnNkdWNlciBzdXBwb3J0XG4gKiB0byBhIHRoaXJkLXBhcnR5IGNvbGxlY3Rpb24sIHRoZSBgSW1tdXRhYmxlLkxpc3RgIGNvbGxlY3Rpb24gZnJvbVxuICoge0BsaW5rIGh0dHBzOi8vZmFjZWJvb2suZ2l0aHViLmlvL2ltbXV0YWJsZS1qcy98aW1tdXRhYmxlLWpzfS5cbiAqXG4gKiBgYGBcbiAqIEltbXV0YWJsZS5MaXN0LnByb3RvdHlwZVtwcm90b2NvbHMuaW5pdF0gPSAoKSA9PiBJbW11dGFibGUuTGlzdCgpLmFzTXV0YWJsZSgpO1xuICogSW1tdXRhYmxlLkxpc3QucHJvdG90eXBlW3Byb3RvY29scy5zdGVwXSA9IChhY2MsIGlucHV0KSA9PiBhY2MucHVzaChpbnB1dCk7XG4gKiBJbW11dGFibGUuTGlzdC5wcm90b3R5cGVbcHJvdG9jb2xzLnJlc3VsdF0gPSAodmFsdWUpID0+IHZhbHVlLmFzSW1tdXRhYmxlKCk7XG4gKiBgYGBcbiAqXG4gKiBgSW1tdXRhYmxlLkxpc3RgIGFscmVhZHkgaW1wbGVtZW50cyBgaXRlcmF0b3JgLCBzbyB3ZSBkb24ndCBoYXZlIHRvIGRvIGl0XG4gKiBvdXJzZWx2ZXMuXG4gKlxuICogVGhlIGBpbml0YCBmdW5jdGlvbiByZXR1cm5zIGFuIGVtcHR5IG11dGFibGUgbGlzdC4gVGhpcyBpcyBpbXBvcnRhbnQgZm9yXG4gKiBpbW11dGFibGUtanMgYmVjYXVzZSBpdHMgZGVmYXVsdCBsaXN0cyBhcmUgaW1tdXRhYmxlLCBhbmQgaW1tdXRhYmxlIGxpc3RzXG4gKiBtZWFuIHRoYXQgYSBuZXcgbGlzdCBoYXMgdG8gYmUgY3JlYXRlZCB3aXRoIGV2ZXJ5IHJlZHVjdGlvbiBzdGVwLiBJdCB3b3VsZFxuICogd29yayBmaW5lLCBidXQgaXQncyBxdWl0ZSBpbmVmZmljaWVudC5cbiAqXG4gKiBUaGUgYHN0ZXBgIGZ1bmN0aW9uIGFkZHMgdGhlIG5leHQgdmFsdWUgdG8gdGhlIGFscmVhZHktY3JlYXRlZCBsaXN0LlxuICogYEltbXV0YWJsZS5MaXN0YCBwcm92aWRlcyBhIGBwdXNoYCBmdW5jdGlvbiB0aGF0IHdvcmtzIGxpa2UgYW4gYXJyYXknc1xuICogYHB1c2hgLCBleGNlcHQgdGhhdCBpdCByZXR1cm5zIHRoZSBuZXcgbGlzdCB3aXRoIHRoZSB2YWx1ZSBwdXNoZWQgb250byBpdC5cbiAqIFRoaXMgaXMgcGVyZmVjdCBmb3Igb3VyIGBzdGVwYCBmdW5jdGlvbi5cbiAqXG4gKiBUaGUgYHJlc3VsdGAgZnVuY3Rpb24gY29udmVydHMgdGhlIG5vdy1maW5pc2hlZCBtdXRhYmxlIGxpc3QgaW50byBhblxuICogaW1tdXRhYmxlIG9uZSwgd2hpY2ggaXMgd2hhdCdzIGdvaW5nIHRvIGJlIGV4cGVjdGVkIGlmIHdlJ3JlIHRyYW5zZHVjaW5nXG4gKiBzb21ldGhpbmcgaW50byBhbiBgSW1tdXRhYmxlLkxpc3RgLiBJbiBtb3N0IGNhc2VzLCBgcmVzdWx0YCBkb2Vzbid0IGhhdmUgdG9cbiAqIGRvIGFueSB3b3JrLCBidXQgc2luY2Ugd2UncmUgY3JlYXRpbmcgYW4gaW50ZXJtZWRpYXRlIHJlcHJlc2VudGF0aW9uIG9mIG91clxuICogY29sbGVjdGlvbiB0eXBlIGhlcmUsIHRoaXMgbGV0cyB1cyBjcmVhdGUgdGhlIGNvbGxlY3Rpb24gdGhhdCB3ZSBhY3R1YWxseVxuICogd2FudCB0byBvdXRwdXQuIChXaXRob3V0IGByZXN1bHRgLCB3ZSB3b3VsZCBoYXZlIHRvIHVzZSBpbW11dGFibGUgbGlzdHMgYWxsXG4gKiB0aGUgd2F5IHRocm91Z2gsIGNyZWF0aW5nIGEgbmV3IG9uZSB3aXRoIGVhY2ggYHN0ZXBgIGZ1bmN0aW9uLCBzaW5jZSB3ZVxuICogd291bGRuJ3QgYmUgYWJsZSB0byBtYWtlIHRoaXMgY29udmVyc3Rpb24gYXQgdGhlIGVuZC4pXG4gKlxuICogV2l0aCB0aG9zZSBwcm90b2NvbHMgaW1wbGVtZW50ZWQgb24gdGhlIHByb3RvdHlwZSwgYEltbXV0YWJsZS5MaXN0YFxuICogY29sbGVjdGlvbnMgY2FuIG5vdyBzdXBwb3J0IGFueSB0cmFuc2R1Y3Rpb24gd2UgY2FuIG9mZmVyLlxuICpcbiAqICMjIyBQcm90b2NvbHNcbiAqXG4gKiBBZnRlciB0YWxraW5nIGEgbG90IGFib3V0IHByb3RvY29scyBhbmQgc2hvd2luZyBob3cgdGhleSdyZSBwcm9wZXJ0aWVzIGFkZGVkXG4gKiB0byBhbiBvYmplY3QsIGl0J3MgcHJvYmFibHkgcHJldHR5IG9idmlvdXMgdGhhdCB0aGVyZSdzIGJlZW4gbm8gbWVudGlvbiBvZlxuICogd2hhdCB0aGUgYWN0dWFsIG5hbWVzIG9mIHRob3NlIHByb3BlcnRpZXMgYXJlLiBUaGF0J3Mgd2hhdFxuICogYHtAbGluayBtb2R1bGU6eGR1Y2UucHJvdG9jb2xzfHByb3RvY29sc31gIGlzIGZvci5cbiAqXG4gKiBUaGUgYmVzdCB3YXkgdG8gdXNlIHRoZXNlIGtleXMgY2FuIGJlIHNlZW4gaW4gdGhlIGltbXV0YWJsZS1qcyBleGFtcGxlIGFib3ZlLlxuICogSW5zdGVhZCBvZiB3b3JyeWluZyBhYm91dCB0aGUgbmFtZSBvZiB0aGUga2V5IGZvciB0aGUgYGluaXRgIHByb3RvY29sLCB0aGVcbiAqIHZhbHVlIG9mIGBwcm90b2NvbHMuaW5pdGAgaXMgdXNlZC5cbiAqXG4gKiBge0BsaW5rIG1vZHVsZTp4ZHVjZS5wcm90b2NvbHN8cHJvdG9jb2xzfWAgZGVmaW5lcyB0aGVzZSBwcm90b2NvbCBwcm9wZXJ0eVxuICogbmFtZXMuXG4gKlxuICogLSBgaW5pdGBcbiAqIC0gYHN0ZXBgXG4gKiAtIGByZXN1bHRgXG4gKiAtIGByZWR1Y2VkYDogdXNlZCBpbnRlcm5hbGx5IHRvIG1hcmsgYSBjb2xsZWN0aW9uIGFzIGFscmVhZHkgcmVkdWNlZFxuICogLSBgdmFsdWVgOiB1c2VkIGludGVybmFsbHkgdG8gcHJvdmlkZSB0aGUgYWN0dWFsIHZhbHVlIG9mIGEgcmVkdWNlZFxuICogICBjb2xsZWN0aW9uXG4gKlxuICogVGhlIGZpbmFsIHR3byB2YWx1ZXMgZG9uJ3QgaGF2ZSBhIGxvdCBvZiB1c2Ugb3V0c2lkZSB0aGUgbGlicmFyeSB1bmxlc3NcbiAqIHlvdSdyZSB3cml0aW5nIHlvdXIgb3duIHRyYW5zZHVjZXJzLlxuICpcbiAqICMjIEhvdyBPYmplY3RzIEFyZSBUcmVhdGVkXG4gKlxuICogT2JqZWN0cyBiZWFyIHNvbWUgdGhvdWdodCBiZWNhdXNlIHJlZ3VsYXJseSwgdGhleSBhcmVuJ3QgY2FuZGlkYXRlcyBmb3JcbiAqIGl0ZXJhdGlvbiAoYW5kIHRoZXJlZm9yZSBmb3IgdHJhbnNkdWN0aW9uIGluIGdlbmVyYWwpLiBUaGV5IGRvbid0IGhhdmUgYSB2ZXJ5XG4gKiBzdHJhaWdodGZvcndhcmQgaWRlYSBvZiBvcmRlciwgYW5kIHRoZXkgaGF2ZSAqdHdvKiBwaWVjZXMgb2YgZGF0YSAoa2V5IGFuZFxuICogdmFsdWUpIGZvciBldmVyeSBlbGVtZW50IGluc3RlYWQgb2Ygb25lLiBZZXQgaXQncyB1bmRlbmlhYmxlIHRoYXQgYXQgbGVhc3RcbiAqIGZvciBtb3N0IHRyYW5zZm9ybWF0aW9ucywgYmVpbmcgYWJsZSB0byBhcHBseSB0aGVtIHRvIG9iamVjdHMgd291bGQgYmUgcXVpdGVcbiAqIGhhbmR5LlxuICpcbiAqIEZvciB0aGF0IHJlYXNvbiwgc3BlY2lhbCBzdXBwb3J0IGlzIHByb3ZpZGVkIGVuZC10by1lbmQgZm9yIG9iamVjdHMuXG4gKlxuICogIyMjIE9iamVjdCBpdGVyYXRpb25cbiAqXG4gKiBJdGVyYXRpbmcgb3ZlciBhbiBvYmplY3Qgd2lsbCBwcm9kdWNlIG9uZSBvYmplY3QgcGVyIHByb3BlcnR5IG9mIHRoZSBvcmlnaW5hbFxuICogb2JqZWN0LiBBbiBvcmRlciBpcyBpbXBvc2VkOyBieSBkZWZhdWx0LCB0aGlzIG9yZGVyIHRoZSBzYW1lIGFzIHRoZSBvcmRlcmluZ1xuICogb2Yga2V5cyBpbiBwb3N0LUVTNiBKYXZhc2NyaXB0OlxuICpcbiAqIDEuIEtleXMgdGhhdCBhcmUgaW50ZWdlcnMsIGluIGFzY2VuZGluZyBudW1lcmljYWwgb3JkZXJcbiAqIDIuIEFsbCBvdGhlciBzdHJpbmcga2V5cywgaW4gdGhlIG9yZGVyIGluIHdoaWNoIHRoZXkgd2VyZSBhZGRlZCB0byB0aGUgb2JqZWN0XG4gKiAzLiBBbGwgc3ltYm9sIGtleXMsIGluIHRoZSBvcmRlciBpbiB3aGljaCB0aGV5IHdlcmUgYWRkZWQgdG8gdGhlIG9iamVjdFxuICpcbiAqIFRoZSBge0BsaW5rIG1vZHVsZTp4ZHVjZS5pdGVyYXRvcnxpdGVyYXRvcn1gIGZ1bmN0aW9uIGNhbiBiZSBwYXNzZWQgYSBzb3J0aW5nXG4gKiBmdW5jdGlvbiB0aGF0IGNhbiBzb3J0IGtleXMgaW4gYW55IG90aGVyIHdheS5cbiAqXG4gKiBUaGUgcmVzdWx0IG9mIHRoZSBpdGVyYXRpb24sIGlzIGEgc2V0IG9mIG9iamVjdHMgZWFjaCB3aXRoIGEgc2luZ2xlIHByb3BlcnR5LFxuICogb25lIGZvciBlYWNoIGVudW1lcmFibGUgb3duIHByb3BlcnR5IG9uIHRoZSBvcmlnaW5hbCBvYmplY3QuIFRoZSBzdGFuZGFyZFxuICogb3JkZXJpbmcgZm9yIG9iamVjdHMgKGZyb20gRVM2IG9ud2FyZCkgaXMgYXMgZm9sbG93czpcbiAqXG4gKiAjIyMgVHJhbnNmb3JtaW5nIG9iamVjdHNcbiAqXG4gKiBXaGlsZSBpdGVyYXRpbmcgb3ZlciBvYmplY3RzIGluIHRoaXMgd2F5IGlzIHN0cmFpZ2h0Zm9yd2FyZCwgdGhlIHN5bnRheCBvZlxuICogb2JqZWN0cyBtYWtlcyBpdCB1Z2x5IHRvIHRyYW5zZm9ybSB0aGVtIGluIHRoaXMgZm9ybS4gSGVyZSdzIGFuIGV4YW1wbGUgb2YgYVxuICogdHJhbnNmb3JtYXRpb24gZnVuY3Rpb24gdGhhdCBtYWtlcyB0aGUgb2JqZWN0J3Mga2V5cyB1cHBlci1jYXNlIGFuZCBhZGRzIG9uZVxuICogdG8gZWFjaCBvZiB0aGUgdmFsdWVzOlxuICpcbiAqIGBgYFxuICogZnVuY3Rpb24gdHJhbnNmb3JtKG9iaikge1xuICogICBjb25zdCBrZXkgPSBPYmplY3Qua2V5cyhvYmopWzBdO1xuICogICBjb25zdCB2YWx1ZSA9IG9ialtrZXldO1xuICogICByZXR1cm4geyBba2V5LnRvVXBwZXJDYXNlKCldOiB2YWx1ZSArIDEgfTtcbiAqIH1cbiAqIGBgYFxuICpcbiAqIEEgaGVscGVyIGZ1bmN0aW9uIG5hbWVkIGB7QGxpbmsgbW9kdWxlOnhkdWNlLnByb3BlcnR5fHByb3BlcnR5fWAgY2FuIGltcHJvdmVcbiAqIHRoaXMgYnkgaGFuZGxpbmcgdGhlIGJvaWxlcnBsYXRlLlxuICpcbiAqIGBgYFxuICogZnVuY3Rpb24gaW1wcm92ZWRUcmFuc2Zvcm0ob2JqKSB7XG4gKiAgIGNvbnN0IHtrLCB2fSA9IHByb3BlcnR5KG9iaik7XG4gKiAgIHJldHVybiB7IFtrLnRvVXBwZXJDYXNlKCldOiB2ICsgMSB9O1xuICogfVxuICogYGBgXG4gKlxuICogIyMjIFJlZHVjaW5nIG9iamVjdHNcbiAqXG4gKiBUaGUgYnVpbHQtaW4gcmVkdWNlcnMgKGZvciBhcnJheXMsIG9iamVjdHMsIHN0cmluZ3MsIGFuZCBpdGVyYXRvcnMpXG4gKiB1bmRlcnN0YW5kIHRoZXNlIHNpbmdsZS1wcm9wZXJ0eSBvYmplY3RzIGFuZCByZWR1Y2UgdGhlbSBpbiB0aGUgcHJvcGVyIG1hbm5lclxuICogd2l0aG91dCBhbnkgZnVydGhlciB3b3JrLlxuICpcbiAqIFRoYXQncyBpdCBmb3Igb2JqZWN0LW9iamVjdCByZWR1Y3Rpb24uIENvbnZlcnRpbmcgYmV0d2VlbiBvYmplY3RzIGFuZCBvdGhlclxuICogdHlwZXMgaXMgYW5vdGhlciBtYXR0ZXIuXG4gKlxuICogRXZlcnkgdHJhbnNkdWNlciBmdW5jdGlvbiBleGNlcHQgZm9yIGB7QGxpbmsgbW9kdWxlOnhkdWNlLnNlcXVlbmNlfHNlcXVlbmNlfWBcbiAqIGlzIGNhcGFibGUgb2YgdHVybmluZyBhbiBvYmplY3QgaW50byBhIGRpZmZlcmVudCB0eXBlIG9mIGNvbGxlY3Rpb24sIHR1cm5pbmdcbiAqIGEgZGlmZmVyZW50IHR5cGUgb2YgY29sbGVjdGlvbiBpbnRvIGFuIG9iamVjdCwgb3IgYm90aC4gT2JqZWN0cyBhcmUgZGlmZmVyZW50XG4gKiBiZWNhdXNlIHRoZXkncmUgdGhlIG9ubHkgXCJjb2xsZWN0aW9uc1wiIHRoYXQgaGF2ZSB0d28gZGlmZmVyZW50IHBpZWNlcyBvZiBkYXRhXG4gKiBwZXIgZWxlbWVudC4gQmVjYXVzZSBvZiB0aGlzLCB3ZSBoYXZlIHRvIGhhdmUgYSBzdHJhdGVneSBvbiBob3cgdG8gbW92ZSBmcm9tXG4gKiBvbmUgdG8gYW5vdGhlci5cbiAqXG4gKiBUcmFuc2R1Y2luZyBhbiBvYmplY3QgaW50byBhIGRpZmZlcmVudCB0eXBlIGlzIGdlbmVyYWxseSBwcmV0dHkgZWFzeS4gSWYgYW5cbiAqIG9iamVjdCBpcyBjb252ZXJ0ZWQgaW50byBhbiBhcnJheSwgZm9yIGluc3RhbmNlLCB0aGUgYXJyYXkgZWxlbWVudHMgd2lsbCBlYWNoXG4gKiBiZSBzaW5nbGUtcHJvcGVydHkgb2JqZWN0cywgb25lIHBlciBwcm9wZXJ0eSBvZiB0aGUgb3JpZ2luYWwgb2JqZWN0LlxuICpcbiAqIFN0cmluZ3MgYXJlIGEgZGlmZmVyZW50IHN0b3J5LCBzaW5jZSBlbmNvZGluZyBhIHNpbmdsZS1wcm9wZXJ0eSBvYmplY3QgdG8gYVxuICogc3RyaW5nIGlzbid0IHBvc3NpYmxlIChiZWNhdXNlIGV2ZXJ5IFwiZWxlbWVudFwiIG9mIGEgc3RyaW5nIGhhcyB0byBiZSBhIHNpbmdsZVxuICogY2hhcmFjdGVyKS4gU3RyaW5ncyB0aGF0IGFyZSBwcm9kdWNlZCBmcm9tIG9iamVjdHMgd2lsbCBpbnN0ZWFkIGp1c3QgYmUgdGhlXG4gKiBvYmplY3QgdmFsdWVzLCBjb25jYXRlbmF0ZWQuIEJlY2F1c2Ugb2JqZWN0cyBhcmUgaXRlcmF0ZWQgaW4gYSBwYXJ0aWN1bGFyXG4gKiBvcmRlciwgdGhpcyBjb252ZXJzaW9uIHdpbGwgYWx3YXlzIHByb2R1Y2UgdGhlIHNhbWUgc3RyaW5nLCBidXQgZXhjZXB0IGluXG4gKiBzb21lIHZlcnkgc3BlY2lmaWMgY2FzZXMgdGhlcmUgcmVhbGx5IGlzbid0IGEgbG90IG9mIHVzZSBmb3IgdGhpcyBjb252ZXJzaW9uLlxuICpcbiAqIGBgYFxuICogY29uc3Qgb2JqID0ge2E6IDEsIGI6IDJ9O1xuICpcbiAqIGxldCByZXN1bHQgPSBhc0FycmF5KG9iaik7XG4gKiAvLyByZXN1bHQgPSBbe2E6IDF9LCB7YjogMn1dXG4gKlxuICogcmVzdWx0ID0gYXNJdGVyYXRvcihvYmopO1xuICogLy8gcmVzdWx0IGlzIGFuIGl0ZXJhdG9yIHdpdGggdHdvIHZhbHVlczoge2E6IDF9IGFuZCB7YjogMn1cbiAqXG4gKiByZXN1bHQgPSBpbnRvKEltbXV0YWJsZS5MaXN0KCksIG9iailcbiAqIC8vIHJlc3VsdCBpcyBhbiBpbW11dGFibGUgbGlzdCB3aXRoIHR3byBlbGVtZW50czoge2E6IDF9IGFuZCB7YjogMn1cbiAqXG4gKiByZXN1bHQgPSBhc1N0cmluZyhvYmopO1xuICogLy8gcmVzdWx0IGlzICcxMidcbiAqIGBgYFxuICpcbiAqIFRoZSBvcHBvc2l0ZSBjb252ZXJzaW9uIGRlcGVuZHMgb24gdGhlIHZhbHVlcyBpbnNpZGUgdGhlIGNvbGxlY3Rpb25zLiBJZlxuICogdGhvc2UgdmFsdWVzIGFyZSBvYmplY3RzLCB0aGVuIHRoZSByZXN1bHQgaXMgYW4gb2JqZWN0IHdpdGggYWxsIG9mIHRoZVxuICogb2JqZWN0cyBjb21iaW5lZCAoaWYgbW9yZSB0aGFuIG9uZSBoYXMgdGhlIHNhbWUga2V5LCB0aGUgbGFzdCBvbmUgaXMgdGhlIG9uZVxuICogdGhhdCdzIGtlcHQpLiBPdGhlcndpc2UsIGtleXMgYXJlIGNyZWF0ZWQgZm9yIGVhY2ggb2YgdGhlIGVsZW1lbnRzLCBzdGFydGluZ1xuICogd2l0aCBgMGAgYW5kIGluY3JlYXNpbmcgZnJvbSB0aGVyZS5cbiAqXG4gKiBUaGlzIG1lYW5zIHRoYXQgY29udmVydGluZyBhbiBvYmplY3QgdG8gYW55IG5vbi1zdHJpbmcgY29sbGVjdGlvbiBhbmQgYmFja1xuICogcHJvZHVjZXMgdGhlIG9yaWdpbmFsIG9iamVjdC5cbiAqXG4gKiBgYGBcbiAqIGxldCByZXN1bHQgPSBhc09iamVjdChbe2E6IDF9LCB7YjogMn1dKTtcbiAqIC8vIHJlc3VsdCA9IHthOiAxLCBiOiAyfVxuICpcbiAqIHJlc3VsdCA9IGFzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyByZXN1bHQgPSB7MDogMSwgMTogMiwgMjogM31cbiAqXG4gKiByZXN1bHQgPSBhc09iamVjdCgnaGVsbG8nKTtcbiAqIC8vIHJlc3VsdCA9IHswOiAnaCcsIDE6ICdlJywgMjogJ2wnLCAzOiAnbCcsIDQ6ICdvJ31cbiAqIGBgYFxuICpcbiAqIEBtb2R1bGUgeGR1Y2VcbiAqL1xuXG5leHBvcnQgeyBwcm90b2NvbHMgfSBmcm9tIFwibW9kdWxlcy9wcm90b2NvbFwiO1xuZXhwb3J0IHsgaXRlcmF0b3IsIGlzSXRlcmFibGUsIGt2LCBrZXksIHZhbHVlIH0gZnJvbSBcIm1vZHVsZXMvaXRlcmF0aW9uXCI7XG5leHBvcnQge1xuICBjb21wbGV0ZSxcbiAgdW5jb21wbGV0ZSxcbiAgaXNDb21wbGV0ZWQsXG4gIGVuc3VyZUNvbXBsZXRlZCxcbiAgZW5zdXJlVW5jb21wbGV0ZWQsXG4gIHJlZHVjZSxcbiAgdG9GdW5jdGlvbixcbiAgdG9SZWR1Y2VyLFxuICB0b1RyYW5zZHVjZXJcbn0gZnJvbSBcIm1vZHVsZXMvcmVkdWN0aW9uXCI7XG5leHBvcnQge1xuICB0cmFuc2R1Y2UsXG4gIHNlcXVlbmNlLFxuICBpbnRvLFxuICBhc0FycmF5LFxuICBhc09iamVjdCxcbiAgYXNTdHJpbmcsXG4gIGFzSXRlcmF0b3IsXG4gIGNvbXBvc2Vcbn0gZnJvbSBcIm1vZHVsZXMvdHJhbnNmb3JtYXRpb25cIjtcbmV4cG9ydCB7XG4gIGlzQXJyYXksXG4gIGlzRnVuY3Rpb24sXG4gIGlzR2VuZXJhdG9yRnVuY3Rpb24sXG4gIGlzTnVtYmVyLFxuICBpc09iamVjdCxcbiAgaXNTdHJpbmdcbn0gZnJvbSBcIm1vZHVsZXMvdXRpbHNcIjtcblxuLyoqXG4gKiBBbiBpdGVyYWJsZSBhcyBkZWZpbmVkIGJ5IEphdmFTY3JpcHQuXG4gKlxuICogQHR5cGVkZWYgSnNJdGVyYWJsZVxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHByb3BlcnR5IHttb2R1bGU6eGR1Y2UuSnNJdGVyYWJsZUZ1bmN0aW9ufSBTeW1ib2wuaXRlcmF0b3IgQSBmdW5jdGlvbiB0aGF0XG4gKiAgICAgcHJvZHVjZXMgYW4gaXRlcmF0b3Igd2hlbiBjYWxsZWQuXG4gKi9cblxuLyoqXG4gKiBBIGZ1bmN0aW9uIHRoYXQgcHJvZHVjZXMgYW4gaXRlcmF0b3IuIFRoaXMgaXMgdGhlIGNoYXJhY3RlcmlzdGljIHByb3BlcnR5IG9mXG4gKiBhIEphdmFTY3JpcHQgaXRlcmFibGUuXG4gKlxuICogQGNhbGxiYWNrIEpzSXRlcmFibGVGdW5jdGlvblxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHJldHVybnMge21vZHVsZTp4ZHVjZS5JdGVyYXRvcn0gQW4gaXRlcmF0b3Igb3ZlciB0aGVcbiAqICAgICB7QGxpbmsgbW9kdWxlOnhkdWNlLkpzSXRlcmFibGV9IHRoYXQgcHJvZHVjZWQgaXQuXG4gKi9cblxuLyoqXG4gKiBBbiBpdGVyYWJsZSBhcyBkZWZpbmVkIGJ5IHRoaXMgbGlicmFyeS4gU2luY2UgaXQgcHJvdmlkZXMgc3BlY2lmaWMgc3VwcG9ydFxuICogZm9yIG9iamVjdHMsIHRoaXMgdHlwZSBpcyBtZXJlbHkgYSBub3JtYWwgSmF2YVNjcmlwdCBpdGVyYWJsZSAqb3IqIGEgcGxhaW5cbiAqIG9iamVjdC5cbiAqXG4gKiBAdHlwZWRlZiB7KE9iamVjdHxtb2R1bGU6eGR1Y2UuSnNJdGVyYWJsZSl9IEl0ZXJhYmxlXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKi9cblxuLyoqXG4gKiBBIGdlbmVyaWMgaXRlcmF0b3IuIFRoaXMgY29uZm9ybXMgdG8gdGhlIGBpdGVyYXRvcmAgcHJvdG9jb2wgaW4gdGhhdCBpdCBoYXNcbiAqIGEgYHtAbGluayBtb2R1bGU6eGR1Y2UuTmV4dEZ1bmN0aW9ufG5leHR9YCBmdW5jdGlvbiB0aGF0IHByb2R1Y2VzXG4gKiB7QGxpbmsgbW9kdWxlOnhkdWNlLk5leHRWYWx1ZXxgaXRlcmF0b3JgLWNvbXBhdGlibGUgb2JqZWN0c30uXG4gKlxuICogQHR5cGVkZWYgSXRlcmF0b3JcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwcm9wZXJ0eSB7bW9kdWxlOnhkdWNlLk5leHRGdW5jdGlvbn0gbmV4dCBBIGZ1bmN0aW9uIHRoYXQsIHdoZW4gY2FsbGVkLFxuICogICAgIHJldHVybnMgdGhlIG5leHQgaXRlcmF0b3IgdmFsdWUuXG4gKi9cblxuLyoqXG4gKiBUaGUgZnVuY3Rpb24gdGhhdCBzYXRpc2ZpZXMgdGhlIGBpdGVyYXRvcmAgcHJvdG9jb2wgb24gYW4gb2JqZWN0LiBXaGVuXG4gKiBjYWxsZWQsIGl0IHJldHVybnMgdGhlIG5leHQgdmFsdWUgaW4gdGhlIGl0ZXJhdG9yLlxuICpcbiAqIEBjYWxsYmFjayBOZXh0RnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEByZXR1cm5zIHttb2R1bGU6eGR1Y2UuTmV4dFZhbHVlfSBUaGUgbmV4dCB2YWx1ZSBpbiB0aGUgaXRlcmF0b3IuXG4gKi9cblxuLyoqXG4gKiBUaGUgb2JqZWN0IHJldHVybmVkIGJ5IGEgY2FsbCB0byBge0BsaW5rIG1vZHVsZTp4ZHVjZS5OZXh0RnVuY3Rpb258bmV4dH1gLlxuICogSXQgaW5kaWNhdGVzIHdoZXRoZXIgdGhlIGl0ZXJhdG9yIGlzIGNvbXBsZXRlIGFuZCwgaWYgbm90LCB3aGF0IHRoZSBuZXh0XG4gKiB2YWx1ZSBpcy5cbiAqXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBOZXh0VmFsdWVcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwcm9wZXJ0eSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRoYXQgdGhlIGl0ZXJhdG9yIGhhcyBwcm92aWRlZC5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gZG9uZSBJbmRpY2F0ZXMgd2hldGhlciB0aGUgaXRlcmF0b3IgaGFzIGNvbXBsZXRlZC4gSWZcbiAqICAgICB0aGlzIGlzIGB0cnVlYCwgdGhlbiBgdmFsdWVgIHdpbGwgYmUgYHVuZGVmaW5lZGAgYW5kIGV2ZXJ5IHN1YnNlcXVlbnRcbiAqICAgICBjYWxsIHRvIGB7QGxpbmsgbW9kdWxlOnhkdWNlLk5leHRGdW5jdGlvbnxuZXh0fWAgd2lsbCBjb250aW51ZSB0byBwcm9kdWNlXG4gKiAgICAgdGhlIHNhbWUgdmFsdWUuIElmIGl0J3MgYGZhbHNlYCwgdGhlbiBgdmFsdWVgIHJlcHJlc2VudHMgdGhlIG5ldCB2YWx1ZSBpblxuICogICAgIHRoZSBpdGVyYXRvciwgYW5kIHRoZSBuZXh0IGNhbGwgdG9cbiAqICAgICBge0BsaW5rIG1vZHVsZTp4ZHVjZS5OZXh0RnVuY3Rpb258bmV4dH1gIHdpbGwgY29udGludWUgdG8gcHJvZHVjZSB0aGVcbiAqICAgICBuZXh0IHZhbHVlLlxuICovXG5cbi8qKlxuICogQSBzb3J0IGZ1bmN0aW9uIGZvciB0aGUga2V5cyBvZiBhbiBvYmplY3QuIFRoaXMgY29uZm9ybXMgdG8gdGhlIG5vcm1hbCBzb3J0XG4gKiBmdW5jdGlvbiB1c2VkIGluIGBBcnJheS5wcm90b3R5cGUuc29ydGAuXG4gKlxuICogQGNhbGxiYWNrIFNvcnRGdW5jdGlvblxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHByb3BlcnR5IHsqfSBhIFRoZSBmaXJzdCB2YWx1ZSB0byBiZSBzb3J0ZWQuXG4gKiBAcHJvcGVydHkgeyp9IGIgVGhlIHNlY29uZCB2YWx1ZSB0byBiZSBzb3J0ZWQuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBFaXRoZXIgYC0xYCBpZiBgYSA+IGJgLCBgMWAgaWYgYGEgPCBiYCwgb3IgYDBgIGlmIGBhID09PVxuICogICAgIGJgLlxuICovXG5cbi8qKlxuICogQSBmdW5jdGlvbiB0aGF0IGNhbiBoYXZlIGFuIGl0ZXJhdG9yIGNyZWF0ZWQgZm9yIGl0LlxuICpcbiAqIEBjYWxsYmFjayBJdGVyYWJsZUZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcGFyYW0ge251bWJlcn0gW2luZGV4XSBUaGUgbnVtYmVyIG9mIHRpbWVzIHRoYXRcbiAqICAgICBge0BsaW5rIG1vZHVsZTp4ZHVjZS5OZXh0RnVuY3Rpb258bmV4dH1gIGhhcyBiZWVuIGNhbGxlZCBvbiB0aGVcbiAqICAgICBmdW5jdGlvbidzIGl0ZXJhdG9yLiBUaGlzIHdpbGwgc3RhcnQgYXQgYDBgIGZvciB0aGUgZmlyc3QgY2FsbCB0b1xuICogICAgIGB7QGxpbmsgbW9kdWxlOnhkdWNlLk5leHRGdW5jdGlvbnxuZXh0fWAgYW5kIGluY3JlYXNlIGJ5IG9uZSBmb3IgZWFjaFxuICogICAgIHN1YnNlcXVlbnQgY2FsbC5cbiAqIEBwYXJhbSB7Kn0gW2xhc3RdIFRoZSByZXR1cm4gdmFsdWUgb2YgdGhlIGZ1bmN0aW9uIHRoZSBsYXN0IHRpbWVcbiAqICAgICBge0BsaW5rIG1vZHVsZTp4ZHVjZS5OZXh0RnVuY3Rpb258bmV4dH1gIHdhcyBjYWxsZWQgb24gaXRzIGl0ZXJhdG9yLiBGb3JcbiAqICAgICB0aGUgZmlyc3QgY2FsbCwgdGhpcyBpcyBzZXQgdG8gYHVuZGVmaW5lZGAuXG4gKiBAcmV0dXJucyB7Kn0gVGhlIHJldHVybiB2YWx1ZSBmb3IgdGhhdCBpdGVyYXRpb24uXG4gKi9cblxuLyoqXG4gKiBBbiBvYmplY3QgcmVwcmVzZW50YXRpb24gb2YgYSBzaW5nbGUtcHJvcGVydHkgb2JqZWN0LCBidXQgdXNpbmcgb25lIHByb3BlcnR5XG4gKiBmb3IgdGhlIGtleSBhbmQgb25lIGZvciB0aGUgdmFsdWUuIFRoaXMgZm9ybWF0IGlzIGVhc2llciB0byB1c2UgaW5cbiAqIHRyYW5zZm9ybWF0aW9uIGZ1bmN0aW9ucy5cbiAqXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBQcm9wZXJ0eU9iamVjdFxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHByb3BlcnR5IHsoU3RyaW5nfFN5bWJvbCl9IGsgVGhlIGtleSBvZiB0aGUgc2luZ2xlLXByb3BlcnR5IG9iamVjdCB0aGF0IHRoaXNcbiAqICAgICBvYmplY3QgcmVwcmVzZW50cy5cbiAqIEBwcm9wZXJ0eSB7Kn0gdiBUaGUgdmFsdWUgb2YgdGhlIHNpbmdsZS1wcm9wZXJ0eSBvYmplY3QgdGhhdCB0aGlzIG9iamVjdFxuICogICAgIHJlcHJlc2VudHMuXG4gKi9cblxuLyoqXG4gKiBBbiBpbml0IGZ1bmN0aW9uLCB3aGljaCBwcm92aWRlcyBhIG5ldywgZW1wdHkgaW5zdGFuY2Ugb2YgYSBjb2xsZWN0aW9uLlxuICpcbiAqIEBjYWxsYmFjayBJbml0RnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEByZXR1cm5zIHsqfSBBIG5ldywgZW1wdHkgaW5zdGFuY2Ugb2YgYSBjb2xsZWN0aW9uLlxuICovXG5cbi8qKlxuICogQSBzdGVwIGZ1bmN0aW9uLCB0aGF0IHJlZHVjZXMgYSBjb2xsZWN0aW9uIGFuZCBhIG5ldyB2YWx1ZSB0byB0aGVcbiAqIGNvbGxlY3Rpb24gd2l0aCB0aGUgdmFsdWUgYWRkZWQuXG4gKlxuICogQGNhbGxiYWNrIFN0ZXBGdW5jdGlvblxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHBhcmFtIHsqfSBhY2MgQW4gYWNjdW11bGF0ZWQgdmFsdWUgdG8gd2hpY2ggdGhlIG5ldyB2YWx1ZSBpcyBiZWluZyBhZGRlZC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIG5ldyB2YWx1ZSB0byBiZSBhZGRlZCB0byB0aGUgYWNjdW11bGF0ZWQgdmFsdWUuXG4gKiBAcmV0dXJucyB7Kn0gVGhlIGFjY3VtdWxhdGVkIHZhbHVlIHdpdGggdGhlIG5ldyB2YWx1ZSBpbnRlZ3JhdGVkIGludG8gaXQuXG4gKi9cblxuLyoqXG4gKiBBIHJlc3VsdCBmdW5jdGlvbiB0aGF0IG9wdGlvbmFsbHkgbW9kaWZpZXMgdGhlIGlucHV0IGNvbGxlY3Rpb24gYW5kIHRoZW5cbiAqIHJldHVybnMgaXQuIFRoaXMgaXMgdXNlZCBhdCB0aGUgZW5kIG9mIGEgcmVkdWN0aW9uIHRvIGFmZm9yZCBhIGxhc3QgY2hhbmNlXG4gKiBmb3IgdGhlIHRyYW5zZHVjZXIgdG8gbW9kaWZ5IHRoZSBvdXRwdXQgdmFsdWUuXG4gKlxuICogQGNhbGxiYWNrIFJlc3VsdEZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcGFyYW0geyp9IGlucHV0IFRoZSB2YWx1ZSB0byBiZSBtb2RpZmllZCBiZWZvcmUgYmVpbmcgb3V0cHV0LlxuICogQHJldHVybnMgeyp9IFRoZSBtb2RpZmllZCB2YWx1ZSB0byBiZSBvdXRwdXQgYnkgYSB0cmFuc2R1Y2VyLlxuICovXG5cbi8qKlxuICogQW4gb2JqZWN0IHdpdGggYWxsIG9mIHRoZSBpbmZvcm1hdGlvbiBuZWNlc3NhcnkgdG8gcmVkdWNlIHZhbHVlcyBpbnRvIGFcbiAqIHBhcnRpY3VsYXIga2luZCBvZiBjb2xsZWN0aW9uLiBUaGVzZSBhcmUgcGFzc2VkIHRvXG4gKiB7QGxpbmsgbW9kdWxlOnhkdWNlLnJlZHVjZXxyZWR1Y2V9IGFuZCBsaWtlIGZ1bmN0aW9ucy5cbiAqXG4gKiBAdHlwZWRlZiBSZWR1Y2VyXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcHJvcGVydHkge21vZHVsZTp4ZHVjZS5Jbml0RnVuY3Rpb259IFtTeW1ib2wuZm9yKFwidHJhbnNkdWNlci9pbml0XCIpXSBUaGVcbiAqICAgICByZWR1Y2VyJ3MgaW5pdCBmdW5jdGlvbi5cbiAqIEBwcm9wZXJ0eSB7bW9kdWxlOnhkdWNlLlN0ZXBGdW5jdGlvbn0gU3ltYm9sLmZvcihcInRyYW5zZHVjZXIvc3RlcFwiKSBUaGVcbiAqICAgICByZWR1Y2VyJ3Mgc3RlcCBmdW5jdGlvbi5cbiAqIEBwcm9wZXJ0eSB7bW9kdWxlOnhkdWNlLlJlc3VsdEZ1bmN0aW9ufSBTeW1ib2wuZm9yKFwidHJhbnNkdWNlci9yZXN1bHRcIikgVGhlXG4gKiAgICAgcmVkdWNlcidzIHJlc3VsdCBmdW5jdGlvbi5cbiAqL1xuXG4vKipcbiAqIEEgY29sbGVjdGlvbiB0aGF0IGNhbiBoYXZlIHZhbHVlcyByZWR1Y2VkIGludG8gaXQuIFNpbmNlIHRoaXMgbGlicmFyeVxuICogcHJvdmlkZXMgZXhwbGljaXQgc3VwcG9ydCBmb3IgYXJyYXlzLCBvYmplY3RzLCBhbmQgc3RyaW5ncywgdGhvc2UgdGhyZWUgYXJlXG4gKiBhZGRlZCB0byB0aGUge0BsaW5rIG1vZHVsZTp4ZHVjZS5SZWR1Y2VyfSB0eXBlIHRvIGRlZmluZSB0aGlzLlxuICpcbiAqIEB0eXBlZGVmIHsoQXJyYXl8U3RyaW5nfE9iamVjdHxtb2R1bGU6eGR1Y2UuUmVkdWNlcil9IFJlZHVjaWJsZVxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICovXG5cbi8qKlxuICogQSBjb2xsZWN0aW9uIHRoYXQgc3VwcG9ydHMgbm90IG9ubHkgdGhlIHJlZ3VsYXIgaXRlcmFpb24gb3ZlciBpdHMgY29udGVudHMsXG4gKiBidXQgYWxzbyByZWR1Y3Rpb24gb2YgdmFsdWVzIGludG8gaXQuIEl0IGlzIGFuIGludGVyc2VjdGlvbiB0eXBlIGNvbWJpbmluZ1xuICoge0BsaW5rIG1vZHVsZTp4ZHVjZS5JdGVyYWJsZXxJdGVyYWJsZX0gYW5kXG4gKiB7QGxpbmsgbW9kdWxlOnhkdWNlLlJlZHVjaWJsZXxSZWR1Y2libGV9LlxuICpcbiAqIEB0eXBlZGVmIEV4cGxpY2l0SXRlcmFibGVSZWR1Y2libGVcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwcm9wZXJ0eSB7bW9kdWxlOnhkdWNlLkpzSXRlcmFibGVGdW5jdGlvbn0gU3ltYm9sLml0ZXJhdG9yIEEgZnVuY3Rpb24gdGhhdFxuICogICAgIHByb2R1Y2VzIGFuIGl0ZXJhdG9yIHdoZW4gY2FsbGVkLlxuICogQHByb3BlcnR5IHttb2R1bGU6eGR1Y2UuSW5pdEZ1bmN0aW9ufSBbU3ltYm9sLmZvcihcInRyYW5zZHVjZXIvaW5pdFwiKV0gVGhlXG4gKiAgICAgY29sbGVjdGlvbidzIGluaXQgZnVuY3Rpb24uXG4gKiBAcHJvcGVydHkge21vZHVsZTp4ZHVjZS5TdGVwRnVuY3Rpb259IFN5bWJvbC5mb3IoXCJ0cmFuc2R1Y2VyL3N0ZXBcIikgVGhlXG4gKiAgICAgY29sbGVjdGlvbidzIHN0ZXAgZnVuY3Rpb24uXG4gKiBAcHJvcGVydHkge21vZHVsZTp4ZHVjZS5SZXN1bHRGdW5jdGlvbn0gU3ltYm9sLmZvcihcInRyYW5zZHVjZXIvcmVzdWx0XCIpIFRoZVxuICogICAgIGNvbGxlY3Rpb24ncyByZXN1bHQgZnVuY3Rpb24uXG4gKi9cblxuLyoqXG4gKiBUaGUgYWN0dWFsIHR5cGUgdXNlZCBieSByZWR1Y2libGUgY29sbGVjdGlvbnMgaW4gdGhpcyBsaWJyYXJ5LiBJdCB0YWtlcyB0aGVcbiAqIHByb3BlcnR5LWJhc2VkIGRlZmluaXRpb24gYW5kIGFkZHMgYnVpbHQtaW4gdHlwZXMgdGhhdCBhcmUgc3BlY2lhbGx5XG4gKiBzdXBwb3J0ZWQgYnkgdGhlIGxpYnJhcnkuXG4gKlxuICogQHR5cGVkZWYgeyhBcnJheXxPYmplY3R8U3RyaW5nfG1vZHVsZTp4ZHVjZS5FeHBsaWNpdEl0ZXJhYmxlUmVkdWNpYmxlKX1cbiAqICAgICBJdGVyYWJsZVJlZHVjaWJsZVxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICovXG5cbi8qKlxuICogQSBmdW5jdGlvbiB0aGF0IHRyYW5zZm9ybXMgZGF0YSBhbmQgY2FuIGJlIGNvbXBvc2VkIHdpdGggb3RoZXIgdHJhbnNkdWNlcnNcbiAqIGludG8gYSBzaW5nbGUgdHJhbnNkdWNlci4gVGhlIHRyYW5zZHVjZXJzIHRoZW1zZWx2ZXMgYXJlIHByb3ZpZGVkIGJ5IG90aGVyXG4gKiBsaWJyYXJpZXM7IHRoZSBvbmx5IGludm9sdmVtZW50IG9mIHRoaXMgbGlicmFyIGlzIGFzIGEgY29uc3VtZXIgb2ZcbiAqIHRyYW5zZHVjZXJzLlxuICpcbiAqIFRyYW5zZHVjZXJzIHdvcmsgYnkgaGF2aW5nIHN0ZXAgZnVuY3Rpb25zIHRoYXQgYXJlIGtub3duIHZpYSBwcm90b2NvbCwgYW5kIGl0XG4gKiBpcyB0aGVzZSBzdGVwIGZ1bmN0aW9ucyB0aGF0IHRha2UgYSB2YWx1ZSBhdCBhIHRpbWUgdG8gYmUgdHJhbnNmb3JtZWQgYXNcbiAqIHRoZWlyIGFyZ3VtZW50cy4gVGhlIGFyZ3VtZW50cyB0byB0aGUgdHJhbnNkdWNlcnMgdGhlbXNlbHZlcyBhcmUgb3RoZXJcbiAqIHRyYW5zZHVjZXJzIHRoYXQgYXJlIHRoZW4gY29tcG9zZWQgaW50byBhIHNpbmdsZSB0cmFuc2R1Y2VyLCB3aGljaCBpcyB0aGVuXG4gKiByZXR1cm5lZC4gVGhlIHZhbHVlcyB0aGF0IGFyZSBwcm9kdWNlZCBhcmUgc2VsZG9tIG9mIGNvbnNlcXVlbmNlIHRvIHRoZSBlbmRcbiAqIHVzZXI7IHRoZXNlIGZ1bmN0aW9ucyBleGlzdCB0byBiZSBwYXNzZWQgdG8gb3RoZXIgZnVuY3Rpb25zIHRoYXQgZGVhbCB3aXRoXG4gKiB0cmFuc2R1Y2Vycy5cbiAqXG4gKiBAY2FsbGJhY2sgVHJhbnNkdWNlclxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHBhcmFtIHttb2R1bGU6eGR1Y2UuVHJhbnNkdWNlckZ1bmN0aW9ufSB4Zm9ybSBBIHRyYW5zZHVjZXIgdG8gY2hhaW4gdGhpc1xuICogICAgIHRyYW5zZHVjZXIgdG8uXG4gKiBAcmV0dXJuIHttb2R1bGU6eGR1Y2UuVHJhbnNkdWNlckZ1bmN0aW9ufSBBIG5ldyB0cmFuc2R1Y2VyIGNvbnNpc3Rpbmcgb2YgdGhlXG4gKiAgICAgY29tcG9zaXRpb24gb2YgdGhpcyBvbmUgYW5kIGB4Zm9ybWAuXG4gKi9cblxuLyoqXG4gKiBBbiBvYmplY3QgY29udGFpbmluZyBhbGwgb2YgdGhlIG5lY2Vzc2FyeSBmdW5jdGlvbiBwcm9wZXJ0aWVzIGZvclxuICogdHJhbnNmb3JtaW5nIGRhdGEgYW5kIHRoZW4gcmVkdWNpbmcgaXQgaW50byBhbiBvdXRwdXQgdmFsdWUuIFRoaXMgaXMgdGhlXG4gKiBzYW1lIGFzIHtAbGluayBtb2R1bGU6eGR1Y2UuUmVkdWNlcnxSZWR1Y2VyfSBleGNlcHQgdGhhdCB0aGUgYGluaXRgIHByb3BlcnR5XG4gKiBpcyBub3Qgb3B0aW9uYWwuXG4gKlxuICogQHR5cGVkZWYgVHJhbnNkdWNlclxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHByb3BlcnR5IHttb2R1bGU6eGR1Y2UuSW5pdEZ1bmN0aW9ufSBTeW1ib2wuZm9yKFwidHJhbnNkdWNlci9pbml0XCIpIFRoZVxuICogICAgIHRyYW5zZHVjZXIncyBpbml0IGZ1bmN0aW9uLlxuICogQHByb3BlcnR5IHttb2R1bGU6eGR1Y2UuU3RlcEZ1bmN0aW9ufSBTeW1ib2wuZm9yKFwidHJhbnNkdWNlci9zdGVwXCIpIFRoZVxuICogICAgIHRyYW5zZHVjZXIncyBzdGVwIGZ1bmN0aW9uLlxuICogQHByb3BlcnR5IHttb2R1bGU6eGR1Y2UuUmVzdWx0RnVuY3Rpb259IFN5bWJvbC5mb3IoXCJ0cmFuc2R1Y2VyL3Jlc3VsdFwiKSBUaGVcbiAqICAgICB0cmFuc2R1Y2VyJ3MgcmVzdWx0IGZ1bmN0aW9uLlxuICovXG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuaW1wb3J0IHsgaXNJbXBsZW1lbnRlZCB9IGZyb20gXCJtb2R1bGVzL3Byb3RvY29sXCI7XG5pbXBvcnQgeyBpc0Z1bmN0aW9uLCBpc09iamVjdCwgaXNHZW5lcmF0b3JGdW5jdGlvbiB9IGZyb20gXCJtb2R1bGVzL3V0aWxzXCI7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBpdGVyYXRvciBvdmVyIGFuIG9iamVjdC5cbiAqXG4gKiBEZXRhaWxzIGFib3V0IHRoaXMgZnVuY3Rpb24gYXJlIGluY2x1ZGVkIGluIHRoZSBkb2N1bWVudGF0aW9uIGZvclxuICoge0BsaW5rIG1vZHVsZTp4ZHVjZS5pdGVyYXRvcnxpdGVyYXRvcn0uXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IG9iaiBUaGUgb2JqZWN0IGJlaW5nIGl0ZXJhdGVkIG92ZXIuXG4gKiBAcGFyYW0ge21vZHVsZTp4ZHVjZS5Tb3J0RnVuY3Rpb259IFtzb3J0Rm5dIEFuIG9wdGlvbmFsIGZ1bmN0aW9uIHVzZWQgdG8gc29ydFxuICogICAgIHRoZSBvYmplY3Qga2V5cyBiZWZvcmUgaXRlcmF0aW9uLiBJZiBpdCBpc24ndCBwcm92aWRlZCwgdGhlIGtleXMgd2lsbCBiZVxuICogICAgIHNvcnRlZCBpbiB0aGUgc2FtZSBvcmRlciBhcyBgT2JqZWN0LmtleXMob2JqKWAgd291bGQgc29ydCB0aGVtLlxuICogQHJldHVybnMge21vZHVsZTp4ZHVjZS5JdGVyYXRvcn0gQW4gaXRlcmF0b3Igb3ZlciB0aGUgcHJvcGVydGllcyBvZiBgb2JqYC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIG9iamVjdEl0ZXJhdG9yKG9iaiwgc29ydEZuKSB7XG4gIHJldHVybiAoZnVuY3Rpb24qKCkge1xuICAgIGNvbnN0IGtleXMgPVxuICAgICAgdHlwZW9mIHNvcnRGbiA9PT0gXCJmdW5jdGlvblwiXG4gICAgICAgID8gT2JqZWN0LmtleXMob2JqKS5zb3J0KHNvcnRGbilcbiAgICAgICAgOiBPYmplY3Qua2V5cyhvYmopO1xuICAgIGxldCBpbmRleCA9IDA7XG5cbiAgICB3aGlsZSAoaW5kZXggPCBrZXlzLmxlbmd0aCkge1xuICAgICAgY29uc3QgayA9IGtleXNbaW5kZXgrK107XG4gICAgICB5aWVsZCB7IFtrXTogb2JqW2tdIH07XG4gICAgfVxuICB9KSgpO1xufVxuXG4vKipcbiAqIEEgY29udmVuaWVuY2UgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBmaXJzdCBrZXkgYW5kIHZhbHVlIGluIGFuIG9iamVjdCBhc1xuICogYSB0d28tcHJvcGVydHkgb2JqZWN0LCBvbmUgcHJvcGVydHkgZm9yIHRoZSBrZXkgYW5kIG9uZSBmb3IgdGhlIHZhbHVlLiBUaGlzXG4gKiBpcyBpbnRlbmRlZCB0byB3b3JrIHdpdGggdGhlIHZhbHVlcyBwcm92aWRlZCBieSBhbiBvYmplY3QgaXRlcmF0b3IsIGFzIHRoZVxuICogc3ludGF4IG9mIG9iamVjdHMgZG9lc24ndCB3b3JrIHZlcnkgbmljZWx5IHdpdGggc2luZ2xlLXByb3BlcnR5IG9iamVjdHMuXG4gKlxuICogYGBgXG4gKiBjb25zdCBvYmogPSB7IGM6IDEsIGE6IDIsIGI6IDMgfTtcbiAqIGNvbnN0IGl0ZXIgPSBpdGVyYXRvcihvYmopO1xuICpcbiAqIGxldCB2YWx1ZSA9IGl0ZXIubmV4dCgpLnZhbHVlO1xuICogY29uc29sZS5sb2codmFsdWUpOyAgICAgICAgICAgICAvLyAtPiB7IGM6IDEgfVxuICogY29uc29sZS5sb2cocHJvcGVydHkodmFsdWUpKTsgICAvLyAtPiB7IGs6IFwiY1wiLCB2OiAxIH1cbiAqXG4gKiB2YWx1ZSA9IGl0ZXIubmV4dCgpLnZhbHVlO1xuICogY29uc29sZS5sb2codmFsdWUpOyAgICAgICAgICAgICAvLyAtPiB7IGE6IDIgfVxuICogY29uc29sZS5sb2cocHJvcGVydHkodmFsdWUpKTsgICAvLyAtPiB7IGs6IFwiYVwiLCB2OiAyIH1cbiAqXG4gKiB2YWx1ZSA9IGl0ZXIubmV4dCgpLnZhbHVlO1xuICogY29uc29sZS5sb2codmFsdWUpOyAgICAgICAgICAgICAvLyAtPiB7IGI6IDMgfVxuICogY29uc29sZS5sb2cocHJvcGVydHkodmFsdWUpKTsgICAvLyAtPiB7IGs6IFwiYlwiLCB2OiAzIH1cbiAqIGBgYFxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmogVGhlIG9iamVjdCB3aG9zZSBmaXJzdCBwcm9wZXJ0eSBpcyByZXR1cm5lZC5cbiAqIEByZXR1cm4ge21vZHVsZTp4ZHVjZS5Qcm9wZXJ0eU9iamVjdH0gVGhlIHByb3BlcnR5IGFzIGEgdHdvLXByb3BlcnR5IG9iamVjdC5cbiAqL1xuZnVuY3Rpb24ga3Yob2JqKSB7XG4gIGNvbnN0IGtleSA9IE9iamVjdC5rZXlzKG9iailbMF07XG4gIHJldHVybiB7IGs6IGtleSwgdjogb2JqW2tleV0gfTtcbn1cblxuLyoqXG4gKiBBIGNvbnZlbmllbmNlIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUga2V5IG9mIHRoZSBmaXJzdCBwcm9wZXJ0eSBvZiBhblxuICogb2JqZWN0LiBUaGlzIGlzIG1lYW50IGZvciB1c2Ugd2l0aCBvYmplY3QgaXRlcmF0b3JzIHRvIG1vcmUgY29udmVuaWVudGx5XG4gKiBhY2Nlc3MgcGFydHMgb2YgdGhlIHNpbmdsZS1wcm9wZXJ0eSBvYmplY3RzIHRoYXQgdGhleSBlbWl0LlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmogVGhlIG9iamVjdCB3aG9zZSBmaXJzdCBrZXkgaXMgcmV0dXJuZWQuXG4gKiBAcmV0dXJuIHsoU3RyaW5nfFN5bWJvbCl9IFRoZSBrZXkgb2YgdGhlIG9iamVjdCdzIGZpcnN0IHByb3BlcnR5LlxuICovXG5mdW5jdGlvbiBrZXkob2JqKSB7XG4gIHJldHVybiBrdihvYmopLms7XG59XG5cbi8qKlxuICogQSBjb252ZW5pZW5jZSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSBmaXJzdCBwcm9wZXJ0eSBvZiBhblxuICogb2JqZWN0LiBUaGlzIGlzIG1lYW50IGZvciB1c2Ugd2l0aCBvYmplY3QgaXRlcmF0b3JzIHRvIG1vcmUgY29udmVuaWVudGx5XG4gKiBhY2Nlc3MgcGFydHMgb2YgdGhlIHNpbmdsZS1wcm9wZXJ0eSBvYmplY3RzIHRoYXQgdGhleSBlbWl0LlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmogVGhlIG9iamVjdCB3aG9zZSBmaXJzdCB2YWx1ZSBpcyByZXR1cm5lZC5cbiAqIEByZXR1cm4geyp9IFRoZSB2YWx1ZSBvZiB0aGUgb2JqZWN0J3MgZmlyc3QgcHJvcGVydHkuXG4gKi9cbmZ1bmN0aW9uIHZhbHVlKG9iaikge1xuICByZXR1cm4ga3Yob2JqKS52O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYW4gaXRlcmF0b3Igb3ZlciBhIGZ1bmN0aW9uLlxuICpcbiAqIERldGFpbHMgYWJvdXQgdGhpcyBmdW5jdGlvbiBhcmUgaW5jbHVkZWQgaW4gdGhlIGRvY3VtZW50YXRpb24gZm9yXG4gKiB7QGxpbmsgbW9kdWxlOnhkdWNlLml0ZXJhdG9yfGl0ZXJhdG9yfS5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTp4ZHVjZS5JdGVyYWJsZUZ1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gaXRlcmF0ZSBvdmVyLlxuICogQHJldHVybnMge21vZHVsZTp4ZHVjZS5JdGVyYXRvcn0gQW4gaXRlcmF0b3Igb3ZlciB0aGUgcmV0dXJuIHZhbHVlcyBvZiBgZm5gLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZnVuY3Rpb25JdGVyYXRvcihmbikge1xuICByZXR1cm4gKGZ1bmN0aW9uKigpIHtcbiAgICBsZXQgY3VycmVudDtcbiAgICBsZXQgaW5kZXggPSAwO1xuXG4gICAgZm9yICg7Oykge1xuICAgICAgY3VycmVudCA9IGZuKGluZGV4KyssIGN1cnJlbnQpO1xuICAgICAgaWYgKHR5cGVvZiBjdXJyZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgeWllbGQgY3VycmVudDtcbiAgICB9XG4gIH0pKCk7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBpdGVyYXRvciBvdmVyIHRoZSBwcm92aWRlZCB2YWx1ZS5cbiAqXG4gKiBGb3IgY29sbGVjdGlvbnMgdGhhdCBpbXBsZW1lbnQgdGhlIGl0ZXJhYmxlIHByb3RvY29sLCBpdCdzIGFzIHNpbXBsZSBhc1xuICogcmV0dXJuaW5nIHRoZSBpdGVyYXRvciBhbHJlYWR5IGRlZmluZWQgZm9yIHRoYXQgY29sbGVjdGlvbi5cbiAqXG4gKiBgYGBcbiAqIGNvbnN0IGl0ZXIgPSBpdGVyYXRvcihbMSwgMiwgM10pO1xuICogY29uc29sZS5sb2coaXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IDFcbiAqIGNvbnNvbGUubG9nKGl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiAyXG4gKiBjb25zb2xlLmxvZyhpdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4gM1xuICogY29uc29sZS5sb2coaXRlci5uZXh0KCkuZG9uZSk7ICAgIC8vIC0+IHRydWVcbiAqIGBgYFxuICpcbiAqIE9iamVjdHMgYXJlIHNwZWNpYWxseSBzdXBwb3J0ZWQgdG8gcmV0dXJuIGFuIGl0ZXJhdG9yIGFzIHdlbGwsIGV2ZW4gdGhvdWdoXG4gKiB0aGV5IGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgdGhlIGl0ZXJhYmxlIHByb3RvY29sLiBUaGUgaXRlcmF0b3IncyBgbmV4dGBcbiAqIGZ1bmN0aW9uIHByb3ZpZGVzIHNpbmdsZS1wcm9wZXJ0eSBvYmplY3RzLCBvbmUgZm9yIGVhY2ggcHJvcGVydHkgaW4gdGhlXG4gKiBvcmlnaW5hbCBvYmplY3QsIG9yZGVyZWQgaW4gdGhlIHN0YW5kYXJkIHBvc3QtRVM2IG9yZGVyIGZvciBpdGVyYXRpbmcgb3ZlclxuICogb2JqZWN0IGtleXM6XG4gKlxuICogMS4gS2V5cyB0aGF0IGFyZSBpbnRlZ2VycywgaW4gYXNjZW5kaW5nIG51bWVyaWNhbCBvcmRlclxuICogMi4gQWxsIG90aGVyIHN0cmluZyBrZXlzLCBpbiB0aGUgb3JkZXIgaW4gd2hpY2ggdGhleSB3ZXJlIGFkZGVkIHRvIHRoZSBvYmplY3RcbiAqIDMuIEFsbCBzeW1ib2wga2V5cywgaW4gdGhlIG9yZGVyIGluIHdoaWNoIHRoZXkgd2VyZSBhZGRlZCB0byB0aGUgb2JqZWN0XG4gKlxuICogSWYgYSBkaWZmZXJlbnQgb3JkZXIgaXMgbmVlZGVkLCB0aGlzIGZ1bmN0aW9uIHRha2VzIGEgc2Vjb25kIGFyZ3VtZW50LCBhIHNvcnRcbiAqIGZ1bmN0aW9uLCB0aGF0IGFmZmVjdHMgb2JqZWN0cyBvbmx5LiBJdCBpcyBhIHN0YW5kYXJkIGZ1bmN0aW9uIHRoYXQgd291bGQgYmVcbiAqIHBhc3NlZCB0byBgQXJyYXkucHJvdG90eXBlLnNvcnRgIGFuZCBzb3J0cyB0aGUga2V5cyBhY2NvcmRpbmdseS5cbiAqXG4gKiBgYGBcbiAqIGNvbnN0IGFscGhhID0gKGEsIGIpID0+IChhIDwgYiA/IC0xIDogYiA8IGEgPyAxIDogMCk7XG4gKiBjb25zdCBvYmogPSB7IGM6IDEsIGE6IDIsIGI6IDMgfTtcbiAqXG4gKiBjb25zdCBvYmpJdGVyID0gaXRlcmF0b3Iob2JqKTtcbiAqIGNvbnNvbGUubG9nKG9iakl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiB7IGM6IDEgfVxuICogY29uc29sZS5sb2cob2JqSXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IHsgYTogMiB9XG4gKiBjb25zb2xlLmxvZyhvYmpJdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4geyBiOiAzIH1cbiAqXG4gKiBjb25zdCBzb3J0ZWRJdGVyID0gaXRlcmF0b3Iob2JqLCBhbHBoYSk7XG4gKiBjb25zb2xlLmxvZyhvYmpJdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4geyBhOiAyIH1cbiAqIGNvbnNvbGUubG9nKG9iakl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiB7IGI6IDMgfVxuICogY29uc29sZS5sb2cob2JqSXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IHsgYzogMSB9XG4gKiBgYGBcbiAqXG4gKiBBZGRpdGlvbmFsbHksIHRoZXJlIGlzIHNwZWNpYWwgc3VwcG9ydCBmb3IgcGFzc2luZyBhIGZ1bmN0aW9uIHRvIHRoaXNcbiAqIGZ1bmN0aW9uLiBUaGUgaXRlcmF0b3IgcmV0dXJuZWQgcnVucyB0aGF0IGZ1bmN0aW9uIGZvciBlYWNoIGNhbGwgdG8gYG5leHRgLlxuICogVGhhdCBmdW5jdGlvbiBpcyBwcm92aWRlZCB0d28gYXJndW1lbnRzOiB0aGUgaW5kZXggKHN0YXJ0aW5nIGF0IGAwYCBmb3IgdGhlXG4gKiBmaXJzdCBjYWxsIHRvIGBuZXh0YCBhbmQgaW5jcmVhc2luZyBieSAxIGZvciBlYWNoIGNhbGwgdG8gYG5leHRgIGFmdGVyKSBhbmRcbiAqIHRoZSByZXR1cm4gdmFsdWUgb2YgdGhlIHByZXZpb3VzIGNhbGwgdG8gYG5leHRgIChmb3IgdGhlIGZpcnN0IGNhbGwgdG9cbiAqIGBuZXh0YCwgdGhpcyB3aWxsIGJlIGB1bmRlZmluZWRgKS4gVGhlIGl0ZXJhdGlvbiB3aWxsIGNvbnRpbnVlIHVudGlsIHRoZVxuICogZmlyc3QgdGltZSB0aGUgaXRlcmF0ZWQgZnVuY3Rpb24gcmV0dXJucyBgdW5kZWZpbmVkYDsgYXQgdGhhdCBwb2ludCB0aGVcbiAqIGl0ZXJhdG9yIHdpbGwgdGVybWluYXRlIGFuZCByZXR1cm4gYHsgZG9uZTogdHJ1ZSB9YCBvZmYgc3Vic2VxdWVudCBgbmV4dGBcbiAqIGNhbGxzLlxuICpcbiAqIGBgYFxuICogY29uc3QgY29uc3RJdGVyID0gaXRlcmF0b3IoKCkgPT4gNik7XG4gKiBjb25zb2xlLmxvZyhjb25zdEl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiA2XG4gKiBjb25zb2xlLmxvZyhjb25zdEl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiA2XG4gKiAvLyBUaGlzIHdpbGwgY29udGludWUgZm9yZXZlciwgYXMgbG9uZyBhcyBgbmV4dGAga2VlcHMgZ2V0dGluZyBjYWxsZWRcbiAqXG4gKiBjb25zdCBpbmRleEl0ZXIgPSBpdGVyYXRvcih4ID0+IHggKiB4KTtcbiAqIGNvbnNvbGUubG9nKGluZGV4SXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IDA7XG4gKiBjb25zb2xlLmxvZyhpbmRleEl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiAxO1xuICogY29uc29sZS5sb2coaW5kZXhJdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4gNDtcbiAqIGNvbnNvbGUubG9nKGluZGV4SXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IDk7XG4gKiAvLyBUaGlzIHdpbGwgY29udGludWUgZm9yZXZlciBvciB1bnRpbCB0aGUgbnVtYmVycyBnZXQgdG9vIGJpZyBmb3JcbiAqIC8vIEphdmFTY3JpcHQgdG8gZGVhbCB3dGloXG4gKlxuICogLy8gVXNpbmcgYSBkZWZhdWx0IHZhbHVlIGZvciB0aGUgYGxhc3RgIHBhcmFtZXRlciwgd2hpY2ggc2V0cyBpdHMgdmFsdWVcbiAqIC8vIGZvciB0aGUgZmlyc3QgcnVuIHdoZW4gaXQgaXMgbm9ybWFsbHkgYHVuZGVmaW5lZGBcbiAqIGNvbnN0IGxhc3RJdGVyID0gaXRlcmF0b3IoKHgsIGxhc3QgPSAxKSA9PiBsYXN0ICogKHggKyAxKSk7IC8vIGZhY3RvcmlhbCFcbiAqIGNvbnNvbGUubG9nKGxhc3RJdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4gMVxuICogY29uc29sZS5sb2cobGFzdEl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiAyXG4gKiBjb25zb2xlLmxvZyhsYXN0SXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IDZcbiAqIGNvbnNvbGUubG9nKGxhc3RJdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4gMjRcbiAqIC8vIEFnYWluLCBydW5zIGZvcmV2ZXIsIHRob3VnaCBmYWN0b3JpYWxzIGdldCBiaWcgdmVyeSBxdWlja2x5XG4gKlxuICogLy8gSXRlcmF0b3JzIHRlcm1pbmF0ZSB3aGVuIHRoZSBmdW5jdGlvbiByZXR1cm5zIGB1bmRlZmluZWRgXG4gKiBjb25zdCBzdG9wSXRlciA9IGl0ZXJhdG9yKHggPT4geCA8IDIgPyB4IDogdW5kZWZpbmVkKTtcbiAqIGNvbnNvbGUubG9nKHN0b3BJdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4gMFxuICogY29uc29sZS5sb2coc3RvcEl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiAxXG4gKiBjb25zb2xlLmxvZyhzdG9wSXRlci5uZXh0KCkuZG9uZSk7ICAgIC8vIC0+IHRydWVcbiAqIGBgYFxuICpcbiAqIElmIHRoZSBwcm92aWRlZCB2YWx1ZSBpcyBub3QgYWN0dWFsbHkgaXRlcmFibGUgKG9yIGFuIG9iamVjdCBvciBhIGZ1bmN0aW9uKSxcbiAqIGBudWxsYCBpcyByZXR1cm5lZCBpbiBwbGFjZSBvZiB0aGUgaXRlcmF0b3IuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY3JlYXRlIGFuIGl0ZXJhdG9yIG92ZXIuXG4gKiBAcGFyYW0ge21vZHVsZTp4ZHVjZS5Tb3J0RnVuY3Rpb259IFtzb3J0Rm5dIEFuIG9wdGlvbmFsIHNvcnQgZnVuY3Rpb24gZm9yXG4gKiAgICAgc29ydGluZyB0aGUga2V5cyBvZiBhbiBvYmplY3QgYmVmb3JlIGl0ZXJhdGlvbi4gSXQgaXMgaWdub3JlZCBpZiBgdmFsdWVgXG4gKiAgICAgaXNuJ3QgYSBwbGFpbiBvYmplY3QuXG4gKiBAcmV0dXJucyB7bW9kdWxlOnhkdWNlLkl0ZXJhdG9yfSBBbiBpdGVyYXRvciBvdmVyIGB2YWx1ZWAuXG4gKi9cbmZ1bmN0aW9uIGl0ZXJhdG9yKHZhbHVlLCBzb3J0Rm4gPSBudWxsKSB7XG4gIHN3aXRjaCAodHJ1ZSkge1xuICAgIGNhc2UgaXNGdW5jdGlvbih2YWx1ZVtTeW1ib2wuaXRlcmF0b3JdKTpcbiAgICBjYXNlIGlzR2VuZXJhdG9yRnVuY3Rpb24odmFsdWVbU3ltYm9sLml0ZXJhdG9yXSk6XG4gICAgICByZXR1cm4gdmFsdWVbU3ltYm9sLml0ZXJhdG9yXSgpO1xuICAgIGNhc2UgaXNGdW5jdGlvbih2YWx1ZSk6XG4gICAgICByZXR1cm4gZnVuY3Rpb25JdGVyYXRvcih2YWx1ZSk7XG4gICAgY2FzZSBpc09iamVjdCh2YWx1ZSk6XG4gICAgICByZXR1cm4gb2JqZWN0SXRlcmF0b3IodmFsdWUsIHNvcnRGbik7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBwYXNzZWQgb2JqZWN0IGlzIGl0ZXJhYmxlLCBpbiB0ZXJtcyBvZiB3aGF0ICdpdGVyYWJsZSdcbiAqIG1lYW5zIHRvIHRoaXMgbGlicmFyeS4gSW4gb3RoZXIgd29yZHMsIHZhbHVlcyBpbXBsZW1lbnRpbmcgdGhlIGBpdGVyYWJsZWBcbiAqIHByb3RvY29sIGFuZCBwbGFpbiBvYmplY3RzIHJldHVybiBgdHJ1ZWAsIHdoaWxlIGV2ZXJ5dGhpbmcgZWxzZSByZXR1cm5zXG4gKiBgZmFsc2VgLiBUaGlzIGRvZXMgbm90IHJldHVybiBgdHJ1ZWAgZm9yIGZ1bmN0aW9ucyBldmVuIHRob3VnaFxuICoge0BsaW5rIG1vZHVsZTp4ZHVjZS5pdGVyYXRvcnxpdGVyYXRvcn0gY2FuIHByb2R1Y2UgYW4gaXRlcmF0b3IgZm9yIHRoZW0sXG4gKiBiZWNhdXNlIG5vdCBhbGwgZnVuY3Rpb25zIHdvcmsgd2VsbCB3aXRoXG4gKiB7QGxpbmsgbW9kdWxlOnhkdWNlLml0ZXJhdG9yfGl0ZXJhdG9yfS5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0IGZvciBpdGVyYWJpbGl0eS5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IEVpdGhlciBgdHJ1ZWAgaWYgdGhlIHZhbHVlIGlzIGl0ZXJhYmxlXG4gKiAgICAgKGB7QGxpbmsgbW9kdWxlOnhkdWNlLml0ZXJhdG9yfWAgd2lsbCByZXR1cm4gYW4gaXRlcmF0b3IgZm9yIGl0KSBvclxuICogICAgIGBmYWxzZWAgaWYgaXQgaXMgbm90LlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaXNJdGVyYWJsZSh2YWx1ZSkge1xuICByZXR1cm4gaXNJbXBsZW1lbnRlZCh2YWx1ZSwgXCJpdGVyYXRvclwiKSB8fCBpc09iamVjdCh2YWx1ZSk7XG59XG5cbmV4cG9ydCB7IGl0ZXJhdG9yLCBpc0l0ZXJhYmxlLCBrdiwga2V5LCB2YWx1ZSB9O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG5cbi8qKlxuICogUHJvdG9jb2xzIGZvciBpdGVyYXRpb24gYW5kIHJlZHVjdGlvbi5cbiAqXG4gKiBUaGUgbmFtZXMgZm9yIHRoZXNlIHByb3RvY29scyBjYW1lIGZyb20gYSBkaXNjdXNzaW9uIHRocmVhZFxuICogKHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vY29nbml0ZWN0LWxhYnMvdHJhbnNkdWNlcnMtanMvaXNzdWVzLzIwfSkgZnJvbSBhXG4gKiB0aW1lIHdoZW4gdHJhbnNkdWNlcnMgd2VyZSB2ZXJ5IG11Y2ggaW4gdGhlIGZvcmVmcm9udC4gSXQncyB0aGUgY2xvc2VzdCB0aGluZ1xuICogdGhlcmUgaXMgdG8gYSBzdGFuZGFyZCwgc28gaXQgd2FzIGFkb3B0ZWQgaGVyZS5cbiAqXG4gKiBUaGVzZSBhcmUgdGhlIHNhbWUgc3ltYm9scyBhcyBhdmFpbGFibGUgaW4gbXkgdHJhbnNkdWNlciBsaWJyYXJ5LiBUaGV5IGFyZVxuICogcHVibGljbHkgYXZhaWxhYmxlIGZyb20gdGhlcmUuXG4gKlxuICogQG1vZHVsZSB4ZHVjZS9wcm90b2NvbFxuICogQHByaXZhdGVcbiAqL1xuXG5pbXBvcnQgeyBpc0Z1bmN0aW9uLCBpc0dlbmVyYXRvckZ1bmN0aW9uIH0gZnJvbSBcIm1vZHVsZXMvdXRpbHNcIjtcblxuLyoqXG4gKiBUaGUgbWFwcGluZyBvZiBwcm90b2NvbCBuYW1lcyB0byB0aGVpciByZXNwZWN0aXZlIHByb3BlcnR5IGtleSBuYW1lcy4gVGhlXG4gKiB2YWx1ZXMgb2YgdGhpcyBtYXAgd2lsbCBkZXBlbmQgb24gd2hldGhlciBzeW1ib2xzIGFyZSBhdmFpbGFibGUuXG4gKlxuICogQHR5cGVkZWYge29iamVjdH0gUHJvdG9jb2xNYXBcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwcm9wZXJ0eSB7U3ltYm9sfSBpbml0IFRoZSBgdHJhbnNkdWNlci9pbml0YCBwcm90b2NvbC4gVGhpcyBpcyB1c2VkXG4gKiAgICAgdG8gbWFyayBmdW5jdGlvbnMgdGhhdCBpbml0aWFsaXplIGEgdGFyZ2V0IGNvbGxlY3Rpb24gYmVmb3JlIGFkZGluZyBpdGVtc1xuICogICAgIHRvIGl0LlxuICogQHByb3BlcnR5IHtTeW1ib2x9IHN0ZXAgVGhlIGB0cmFuc2R1Y2VyL3N0ZXBgIHByb3RvY29sLiBUaGlzIGlzIHVzZWRcbiAqICAgICB0byBtYXJrIGZ1bmN0aW9ucyB0aGF0IGFyZSB1c2VkIGluIHRoZSB0cmFuc2R1Y2VyJ3Mgc3RlcCBwcm9jZXNzLCB3aGVyZVxuICogICAgIG9iamVjdHMgYXJlIGFkZGVkIHRvIHRoZSB0YXJnZXQgY29sbGVjdGlvbiBvbmUgYXQgYSB0aW1lLlxuICogQHByb3BlcnR5IHtTeW1ib2x9IHJlc3VsdCBUaGUgYHRyYW5zZHVjZXIvcmVzdWx0YCBwcm90b2NvbC4gVGhpcyBpc1xuICogICAgIHVzZWQgdG8gbWFyayBmdW5jdGlvbnMgdGhhdCB0YWtlIHRoZSBmaW5hbCByZXN1bHQgb2YgdGhlIHN0ZXAgcHJvY2VzcyBhbmRcbiAqICAgICByZXR1cm4gdGhlIGZpbmFsIGZvcm0gdG8gYmUgb3V0cHV0LiBUaGlzIGlzIG9wdGlvbmFsOyBpZiB0aGUgdHJhbnNkdWNlclxuICogICAgIGRvZXMgbm90IHdhbnQgdG8gdHJhbnNmb3JtIHRoZSBmaW5hbCByZXN1bHQsIGl0IHNob3VsZCBqdXN0IHJldHVybiB0aGVcbiAqICAgICByZXN1bHQgb2YgaXRzIGNoYWluZWQgdHJhbnNkdWNlcidzIGByZXN1bHRgIGZ1bmN0aW9uLlxuICogQHByb3BlcnR5IHtTeW1ib2x9IHJlZHVjZWQgVGhlIGB0cmFuc2R1Y2VyL3JlZHVjZWRgIHByb3RvY29sLiBUaGVcbiAqICAgICBwcmVzZW5jZSBvZiB0aGlzIGtleSBvbiBhbiBvYmplY3QgaW5kaWNhdGVzIHRoYXQgaXRzIHRyYW5zZm9ybWF0aW9uIGhhc1xuICogICAgIGJlZW4gY29tcGxldGVkLiBJdCBpcyB1c2VkIGludGVybmFsbHkgdG8gbWFyayBjb2xsZWN0aW9ucyB3aG9zZVxuICogICAgIHRyYW5zZm9ybWF0aW9ucyBjb25jbHVkZSBiZWZvcmUgZXZlcnkgb2JqZWN0IGlzIGl0ZXJhdGVkIG92ZXIgKGFzIGluXG4gKiAgICAgYHtAbGluayB4ZHVjZS50YWtlfWAgdHJhbnNkdWNlcnMuKSBJdCBpcyBvZiBsaXR0bGUgdXNlIGJleW9uZCB0cmFuc2R1Y2VyXG4gKiAgICAgYXV0aG9yaW5nLlxuICogQHByb3BlcnR5IHtTeW1ib2x9IHZhbHVlIFRoZSBgdHJhbnNkdWNlci92YWx1ZWAgcHJvdG9jb2wuIFRoaXMgaXNcbiAqICAgICB1c2VkIGludGVybmFsbHkgdG8gbWFyayBwcm9wZXJ0aWVzIHRoYXQgY29udGFpbiB0aGUgdmFsdWUgb2YgYSByZWR1Y2VkXG4gKiAgICAgdHJhbnNmb3JtYXRpb24uIEl0IGlzIG9mIGxpdHRsZSB1c2UgYmV5b25kIHRyYW5zZHVjZXIgYXV0aG9yaW5nLlxuICovXG5cbi8qKlxuICogVGhlIG1hcHBpbmcgb2YgcHJvdG9jb2wgbmFtZXMgdG8gdGhlaXIgcmVzcGVjdGl2ZSBwcm9wZXJ0eSBrZXkgbmFtZXMuXG4gKlxuICogQHR5cGUge21vZHVsZTp4ZHVjZS5Qcm90b2NvbE1hcH1cbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqL1xuY29uc3QgcHJvdG9jb2xzID0gT2JqZWN0LmNyZWF0ZShudWxsLCB7XG4gIGluaXQ6IHtcbiAgICB2YWx1ZTogU3ltYm9sLmZvcihcInRyYW5zZHVjZXIvaW5pdFwiKVxuICB9LFxuICBzdGVwOiB7XG4gICAgdmFsdWU6IFN5bWJvbC5mb3IoXCJ0cmFuc2R1Y2VyL3N0ZXBcIilcbiAgfSxcbiAgcmVzdWx0OiB7XG4gICAgdmFsdWU6IFN5bWJvbC5mb3IoXCJ0cmFuc2R1Y2VyL3Jlc3VsdFwiKVxuICB9LFxuICByZWR1Y2VkOiB7XG4gICAgdmFsdWU6IFN5bWJvbC5mb3IoXCJ0cmFuc2R1Y2VyL3JlZHVjZWRcIilcbiAgfSxcbiAgdmFsdWU6IHtcbiAgICB2YWx1ZTogU3ltYm9sLmZvcihcInRyYW5zZHVjZXIvdmFsdWVcIilcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIGlzSW1wbGVtZW50ZWQob2JqLCBwcm90b2NvbCkge1xuICBpZiAob2JqID09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzd2l0Y2ggKHByb3RvY29sKSB7XG4gICAgY2FzZSBcIml0ZXJhdG9yXCI6XG4gICAgICByZXR1cm4gKFxuICAgICAgICBpc0Z1bmN0aW9uKG9ialtTeW1ib2wuaXRlcmF0b3JdKSB8fFxuICAgICAgICBpc0dlbmVyYXRvckZ1bmN0aW9uKG9ialtTeW1ib2wuaXRlcmF0b3JdKVxuICAgICAgKTtcbiAgICBjYXNlIFwiYXN5bmNJdGVyYXRvclwiOlxuICAgICAgcmV0dXJuIGlzR2VuZXJhdG9yRnVuY3Rpb24ob2JqW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSk7XG4gICAgY2FzZSBcInJlZHVjZWRcIjpcbiAgICBjYXNlIFwidmFsdWVcIjpcbiAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iaikuaW5jbHVkZXMocHJvdG9jb2xzW3Byb3RvY29sXSk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBpc0Z1bmN0aW9uKG9ialtwcm90b2NvbHNbcHJvdG9jb2xdXSk7XG4gIH1cbn1cblxuZXhwb3J0IHsgcHJvdG9jb2xzLCBpc0ltcGxlbWVudGVkIH07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuLyoqXG4gKiBBIHNldCBvZiBmdW5jdGlvbnMgcmVsYXRlZCB0byB0aGUgcHJvZHVjaW5nIHJlZHVjZXIgb2JqZWN0cywgbWFya2luZ1xuICogY29tcGxldGVkIG9iamVjdHMsIGFuZCBwZXJmb3JtaW5nIGdlbmVyYWwgcmVkdWN0aW9uIG9wZXJhdGlvbnMuXG4gKlxuICogQG1vZHVsZSByZWR1Y3Rpb25cbiAqIEBwcml2YXRlXG4gKi9cblxuaW1wb3J0IHsgaXNJbXBsZW1lbnRlZCwgcHJvdG9jb2xzIGFzIHAgfSBmcm9tIFwibW9kdWxlcy9wcm90b2NvbFwiO1xuaW1wb3J0IHsgaXNTdHJpbmcsIGlzQXJyYXksIGlzT2JqZWN0LCBpc0Z1bmN0aW9uIH0gZnJvbSBcIm1vZHVsZXMvdXRpbHNcIjtcbmltcG9ydCB7IGt2LCBpdGVyYXRvciB9IGZyb20gXCJtb2R1bGVzL2l0ZXJhdGlvblwiO1xuXG4vKipcbiAqIFJldHVybnMgYW4gaW5pdCBmdW5jdGlvbiBmb3IgYSBjb2xsZWN0aW9uLiBUaGlzIGlzIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGFcbiAqIG5ldywgZW1wdHkgaW5zdGFuY2Ugb2YgdGhlIGNvbGxlY3Rpb24gaW4gcXVlc3Rpb24uIElmIHRoZSBjb2xsZWN0aW9uIGRvZXNuJ3RcbiAqIHN1cHBvcnQgcmVkdWN0aW9uLCBgbnVsbGAgaXMgcmV0dXJuZWQuIFRoaXMgbWFrZXMgY29uZGl0aW9uYWxzIGEgYml0IGVhc2llclxuICogdG8gd29yayB3aXRoLlxuICpcbiAqIEluIG9yZGVyIHRvIHN1cHBvcnQgdGhlIGNvbnZlcnNpb24gb2YgZnVuY3Rpb25zIGludG8gcmVkdWNlcnMsIGZ1bmN0aW9uXG4gKiBzdXBwb3J0IGlzIGFsc28gcHJvdmlkZWQuXG4gKlxuICogQHBhcmFtIHsqfSBjb2xsZWN0aW9uIEEgY29sbGVjdGlvbiB0byBjcmVhdGUgYW4gaW5pdCBmdW5jdGlvbiBmb3IuIFRoaXMgY2FuXG4gKiAgICAgYmUgYW55dGhpbmcgdGhhdCBzdXBwb3J0cyB0aGUgaXRlcmF0aW9uIHByb3RvY29sIG9yIGEgcGxhaW4gb2JqZWN0LlxuICogQHJldHVybiB7bW9kdWxlOnhkdWNlLkluaXRGdW5jdGlvbn0gQSBmdW5jdGlvbiB0aGF0LCB3aGVuIGNhbGxlZCwgcmV0dXJucyBhblxuICogICAgIGluaXRpYWwgdmVyc2lvbiBvZiB0aGUgcHJvdmlkZWQgY29sbGVjdGlvbi4gSWYgdGhlIHByb3ZpZGVkIGNvbGxlY3Rpb24gaXNcbiAqICAgICBub3QgaXRlcmFibGUsIHRoZW4gYG51bGxgIGlzIHJldHVybmVkLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaW5pdChjb2xsZWN0aW9uKSB7XG4gIHN3aXRjaCAodHJ1ZSkge1xuICAgIGNhc2UgaXNJbXBsZW1lbnRlZChjb2xsZWN0aW9uLCBcImluaXRcIik6XG4gICAgICByZXR1cm4gY29sbGVjdGlvbltwLmluaXRdO1xuICAgIGNhc2UgaXNTdHJpbmcoY29sbGVjdGlvbik6XG4gICAgICByZXR1cm4gKCkgPT4gXCJcIjtcbiAgICBjYXNlIGlzQXJyYXkoY29sbGVjdGlvbik6XG4gICAgICByZXR1cm4gKCkgPT4gW107XG4gICAgY2FzZSBpc09iamVjdChjb2xsZWN0aW9uKTpcbiAgICAgIHJldHVybiAoKSA9PiAoe30pO1xuICAgIGNhc2UgaXNGdW5jdGlvbihjb2xsZWN0aW9uKTpcbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIHRocm93IEVycm9yKFwiaW5pdCBub3QgYXZhaWxhYmxlXCIpO1xuICAgICAgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgc3RlcCBmdW5jdGlvbiBmb3IgYSBjb2xsZWN0aW9uLiBUaGlzIGlzIGEgZnVuY3Rpb24gdGhhdCB0YWtlcyBhblxuICogYWNjdW11bGF0b3IgYW5kIGEgdmFsdWUgYW5kIHJldHVybnMgdGhlIHJlc3VsdCBvZiByZWR1Y2luZyB0aGUgdmFsdWUgaW50byB0aGVcbiAqIGFjY3VtdWxhdG9yLiBJZiB0aGUgY29sbGVjdGlvbiBkb2Vzbid0IHN1cHBvcnQgcmVkdWN0aW9uLCBgbnVsbGAgaXMgcmV0dXJuZWQuXG4gKiBUaGUgcmV0dXJuZWQgZnVuY3Rpb24gaXRzZWxmIHNpbXBseSByZWR1Y2VzIHRoZSBpbnB1dCBpbnRvIHRoZSB0YXJnZXRcbiAqIGNvbGxlY3Rpb24gd2l0aG91dCBtb2RpZnlpbmcgaXQuXG4gKlxuICogSW4gb3JkZXIgdG8gc3VwcG9ydCB0aGUgY29udmVyc2lvbiBvZiBmdW5jdGlvbnMgaW50byByZWR1Y2VycywgZnVuY3Rpb25cbiAqIHN1cHBvcnQgaXMgYWxzbyBwcm92aWRlZC5cbiAqXG4gKiBAcGFyYW0geyp9IGNvbGxlY3Rpb24gQSBjb2xsZWN0aW9uIHRvIGNyZWF0ZSBhIHN0ZXAgZnVuY3Rpb24gZm9yLiBUaGlzIGNhbiBiZVxuICogICAgIGFueXRoaW5nIHRoYXQgc3VwcG9ydHMgdGhlIGl0ZXJhdGlvbiBwcm90b2NvbCwgYSBwbGFpbiBvYmplY3QsIG9yIGFcbiAqICAgICBmdW5jdGlvbi5cbiAqIEByZXR1cm4ge21vZHVsZTp4ZHVjZS5TdGVwRnVuY3Rpb259IEEgcmVkdWN0aW9uIGZ1bmN0aW9uIGZvciB0aGUgcHJvdmlkZWRcbiAqICAgICBjb2xsZWN0aW9uIHRoYXQgc2ltcGx5IGFkZHMgYW4gZWxlbWVudCB0byB0aGUgdGFyZ2V0IGNvbGxlY3Rpb24gd2l0aG91dFxuICogICAgIG1vZGlmeWluZyBpdC4gSWYgdGhlIHByb3ZpZGVkIGNvbGxlY3Rpb24gaXMgbm90IGl0ZXJhYmxlLCBgbnVsbGAgaXNcbiAqICAgICByZXR1cm5lZC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHN0ZXAoY29sbGVjdGlvbikge1xuICBzd2l0Y2ggKHRydWUpIHtcbiAgICBjYXNlIGlzSW1wbGVtZW50ZWQoY29sbGVjdGlvbiwgXCJzdGVwXCIpOlxuICAgICAgcmV0dXJuIGNvbGxlY3Rpb25bcC5zdGVwXTtcblxuICAgIGNhc2UgaXNTdHJpbmcoY29sbGVjdGlvbik6XG4gICAgICByZXR1cm4gKGFjYywgaW5wdXQpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBpc09iamVjdChpbnB1dCkgPyBrdihpbnB1dCkudiA6IGlucHV0O1xuICAgICAgICByZXR1cm4gYWNjICsgdmFsdWU7XG4gICAgICB9O1xuXG4gICAgY2FzZSBpc0FycmF5KGNvbGxlY3Rpb24pOlxuICAgICAgcmV0dXJuIChhY2MsIGlucHV0KSA9PiB7XG4gICAgICAgIGFjYy5wdXNoKGlucHV0KTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH07XG5cbiAgICBjYXNlIGlzT2JqZWN0KGNvbGxlY3Rpb24pOlxuICAgICAgcmV0dXJuIChhY2MsIGlucHV0KSA9PiB7XG4gICAgICAgIGxldCB2YWx1ZSA9IGlucHV0O1xuXG4gICAgICAgIGlmICghaXNPYmplY3QoaW5wdXQpKSB7XG4gICAgICAgICAgLy8gaWYgdGhlIGlucHV0IGlzbid0IGFuIG9iamVjdCwgdHVybiBpdCBpbnRvIGFuIG9iamVjdCB3aXRoIGFcbiAgICAgICAgICAvLyBudW1lcmljYWwga2V5IG9uZSBncmVhdGVyIHRoYW4gdGhlIG1heCBrZXkgYWxyZWFkeSBpbiB0aGVcbiAgICAgICAgICAvLyBhY2N1bXVsYXRvclxuICAgICAgICAgIGNvbnN0IG1heCA9IE9iamVjdC5rZXlzKGFjYykucmVkdWNlKChhLCBiKSA9PiBNYXRoLm1heChhLCBiKSwgLTEpO1xuICAgICAgICAgIHZhbHVlID0geyBbbWF4ICsgMV06IGlucHV0IH07XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB7IGssIHYgfSA9IGt2KHZhbHVlKTtcbiAgICAgICAgYWNjW2tdID0gdjtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH07XG5cbiAgICBjYXNlIGlzRnVuY3Rpb24oY29sbGVjdGlvbik6XG4gICAgICByZXR1cm4gKGFjYywgaW5wdXQpID0+IGNvbGxlY3Rpb24oYWNjLCBpbnB1dCk7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgcmVzdWx0IGZ1bmN0aW9uIGZvciBhIGNvbGxlY3Rpb24uIFRoaXMgaXMgYSBmdW5jdGlvbiB0aGF0IHBlcmZvcm1zXG4gKiBhbnkgZmluYWwgcHJvY2Vzc2luZyB0aGF0IHNob3VsZCBiZSBkb25lIG9uIHRoZSByZXN1bHQgb2YgYSByZWR1Y3Rpb24uIElmIHRoZVxuICogY29sbGVjdGlvbiBkb2Vzbid0IHN1cHBvcnQgcmVkdWN0aW9uLCBgbnVsbGAgaXMgcmV0dXJuZWQuXG4gKlxuICogSW4gb3JkZXIgdG8gc3VwcG9ydCB0aGUgY29udmVyc2lvbiBvZiBmdW5jdGlvbnMgaW50byByZWR1Y2VycywgZnVuY3Rpb25cbiAqIHN1cHBvcnQgaXMgYWxzbyBwcm92aWRlZC5cbiAqXG4gKiBAcGFyYW0geyp9IGNvbGxlY3Rpb24gQSBjb2xsZWN0aW9uIHRvIGNyZWF0ZSBhIHN0ZXAgZnVuY3Rpb24gZm9yLiBUaGlzIGNhbiBiZVxuICogICAgIGFueXRoaW5nIHRoYXQgc3VwcG9ydHMgdGhlIGl0ZXJhdGlvbiBwcm90b2NvbCwgYSBwbGFpbiBvYmplY3QsIG9yIGFcbiAqICAgICBmdW5jdGlvbi5cbiAqIEByZXR1cm4ge21vZHVsZTp4ZHVjZS5SZXN1bHRGdW5jdGlvbn0gQSBmdW5jdGlvbiB0aGF0LCB3aGVuIGdpdmVuIGEgcmVkdWNlZFxuICogICAgIGNvbGxlY3Rpb24sIHByb2R1Y2VzIHRoZSBmaW5hbCBvdXRwdXQuIElmIHRoZSBwcm92aWRlZCBjb2xsZWN0aW9uIGlzIG5vdFxuICogICAgIGl0ZXJhYmxlLCBgbnVsbGAgd2lsbCBiZSByZXR1cm5lZC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHJlc3VsdChjb2xsZWN0aW9uKSB7XG4gIHN3aXRjaCAodHJ1ZSkge1xuICAgIGNhc2UgaXNJbXBsZW1lbnRlZChjb2xsZWN0aW9uLCBcInJlc3VsdFwiKTpcbiAgICAgIHJldHVybiBjb2xsZWN0aW9uW3AucmVzdWx0XTtcbiAgICBjYXNlIGlzU3RyaW5nKGNvbGxlY3Rpb24pOlxuICAgIGNhc2UgaXNBcnJheShjb2xsZWN0aW9uKTpcbiAgICBjYXNlIGlzT2JqZWN0KGNvbGxlY3Rpb24pOlxuICAgIGNhc2UgaXNGdW5jdGlvbihjb2xsZWN0aW9uKTpcbiAgICAgIHJldHVybiB2YWx1ZSA9PiB2YWx1ZTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgcmVkdWNlciBvYmplY3QgZnJvbSBhIGZ1bmN0aW9uIG9yIGZyb20gYSBidWlsdC1pbiByZWR1Y2libGUgdHlwZVxuICogKGFycmF5LCBvYmplY3QsIG9yIHN0cmluZykuXG4gKlxuICogVG8gY3JlYXRlIGEgcmVkdWNlciBmb3IgYXJyYXlzLCBvYmplY3RzLCBvciBzdHJpbmdzLCBzaW1wbHkgcGFzcyBhbiBlbXB0eVxuICogdmVyc2lvbiBvZiB0aGF0IGNvbGxlY3Rpb24gdG8gdGhpcyBmdW5jdGlvbiAoZS5nLiwgYHRvUmVkdWNlcihbXSlgKS5cbiAqXG4gKiBUaGUgbm90YWJsZSB1c2UgZm9yIHRoaXMgZnVuY3Rpb24gdGhvdWdoIGlzIHRvIHR1cm4gYSByZWR1Y3Rpb24gZnVuY3Rpb24gaW50b1xuICogYSByZWR1Y2VyIG9iamVjdC4gVGhlIGZ1bmN0aW9uIGlzIGEgZnVuY3Rpb24gb2YgdHdvIHBhcmFtZXRlcnMsIGFuXG4gKiBhY2N1bXVsYXRvciBhbmQgYSB2YWx1ZSwgYW5kIHJldHVybnMgdGhlIGFjY3VtdWxhdG9yIHdpdGggdGhlIHZhbHVlIGluIGl0LlxuICogVGhpcyBpcyBleGFjdGx5IHRoZSBzYW1lIGtpbmQgb2YgZnVuY3Rpb24gdGhhdCBpcyBwYXNzZWQgdG8gcmVkdWN0aW9uXG4gKiBmdW5jdGlvbnMgbGlrZSBKYXZhU2NyaXB0J3MgYEFycmF5LnByb3RvdHlwZS5yZWR1Y2VgIGFuZCBMb2Rhc2gncyBgXy5yZWR1Y2VgLlxuICpcbiAqIE5vdGUgaW4gcGFydGljdWxhciB0aGF0IHRoZSBvdXRwdXQgb2YgdGhpcyByZWR1Y2VyIGRvZXMgbm90IG5lZWQgdG8gYmUgYVxuICogY29sbGVjdGlvbi4gSXQgY2FuIGJlIGFueXRoaW5nLiBXaGlsZSB0cmFuc2R1Y2luZyBub3JtYWxseSBpbnZvbHZlc1xuICogdHJhbnNmb3JtaW5nIG9uZSBjb2xsZWN0aW9uIGludG8gYW5vdGhlciwgaXQgbmVlZCBub3QgYmUgc28uIEZvciBleGFtcGxlLFxuICogaGVyZSBpcyBhIHJlZHVjZXIgdGhhdCB3aWxsIHJlc3VsdCBpbiBzdW1taW5nIG9mIHRoZSBjb2xsZWN0aW9uIHZhbHVlcy5cbiAqXG4gKiBgYGBcbiAqIGltcG9ydCB7IHRvUmVkdWNlciwgcmVkdWNlIH0gZnJvbSBcIkBjaGFua28veGR1Y2VcIjtcbiAqXG4gKiBjb25zdCBzdW1SZWR1Y2VyID0gdG9SZWR1Y2VyKChhY2MsIGlucHV0KSA9PiBhY2MgKyBpbnB1dCk7XG4gKiBjb25zdCBzdW0gPSByZWR1Y2UoWzEsIDIsIDMsIDQsIDVdLCBzdW1SZWR1Y2VyLCAwKTtcbiAqIGNvbnNvbGUubG9nKHN1bSk7ICAgLy8gLT4gMTVcbiAqIGBgYFxuICpcbiAqIFRoaXMgY2FuIGJlIGNvbWJpbmVkIHdpdGggdHJhbnNkdWNlcnMgYXMgd2VsbCwgYXMgaW4gdGhpcyBjYWxjdWxhdGlvbiBvZiB0aGVcbiAqIHN1bSBvZiB0aGUgKnNxdWFyZXMqIG9mIHRoZSBjb2xsZWN0aW9uIHZhbHVlcy5cbiAqXG4gKiBgYGBcbiAqIGltcG9ydCB7IHRvUmVkdWNlciwgdHJhbnNkdWNlIH0gZnJvbSBcIkBjaGFua28veGR1Y2VcIjtcbiAqIGltcG9ydCB7IG1hcCB9IGZyb20gXCJAY2hhbmtvL3RyYW5zZHVjZXJzXCI7XG4gKlxuICogY29uc3Qgc3VtUmVkdWNlciA9IHRvUmVkdWNlcigoYWNjLCBpbnB1dCkgPT4gYWNjICsgaW5wdXQpO1xuICogY29uc3Qgc3VtID0gdHJhbnNkdWNlKFsxLCAyLCAzLCA0LCA1XSwgbWFwKHggPT4geCAqIHgpLCBzdW1SZWR1Y2VyLCAwKTtcbiAqIGNvbnNvbGUubG9nKHN1bSk7ICAgLy8gLT4gNTVcbiAqIGBgYFxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwYXJhbSB7Kn0gY29sbGVjdGlvbiBBbiBpdGVyYWJsZSBjb2xsZWN0aW9uIG9yIGEgcmVkdWNlciBmdW5jdGlvbi5cbiAqIEByZXR1cm4ge29iamVjdH0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgcHJvdG9jb2wgcHJvcGVydGllcyBmb3IgaW5pdCwgc3RlcCwgYW5kXG4gKiAgICAgcmVzdWx0LiBUaGlzIG9iamVjdCBpcyBzdWl0YWJsZSBmb3IgdXNlIGFzIGEgcmVkdWNlciBvYmplY3QgKG9uZSBwcm92aWRlZFxuICogICAgIHRvIGB7QGxpbmsgeGR1Y2UucmVkdWNlfHJlZHVjZX1gIG9yIGB7QGxpbmsgeGR1Y2UudHJhbnNkdWNlfHRyYW5zZHVjZX1gKS5cbiAqICAgICBJZiB0aGUgcHJvdmlkZWQgY29sbGVjdGlvbiBpcyBub3QgaXRlcmFibGUsIGFsbCBvZiB0aGUgcHJvcGVydGllcyBvZiB0aGlzXG4gKiAgICAgb2JqZWN0IHdpbGwgYmUgYG51bGxgLlxuICovXG5mdW5jdGlvbiB0b1JlZHVjZXIoY29sbGVjdGlvbikge1xuICByZXR1cm4gT2JqZWN0LmZyZWV6ZSh7XG4gICAgW3AuaW5pdF06IGluaXQoY29sbGVjdGlvbiksXG4gICAgW3Auc3RlcF06IHN0ZXAoY29sbGVjdGlvbiksXG4gICAgW3AucmVzdWx0XTogcmVzdWx0KGNvbGxlY3Rpb24pXG4gIH0pO1xufVxuXG4vKipcbiAqIEEgcmVkdWNlciBvYmplY3QgZm9yIGFycmF5cy5cbiAqXG4gKiBAdHlwZSB7bW9kdWxlOnhkdWNlLlJlZHVjZXJ9XG4gKiBAcHJpdmF0ZVxuICovXG5jb25zdCBBUlJBWV9SRURVQ0VSID0gdG9SZWR1Y2VyKFtdKTtcblxuLyoqXG4gKiBBIHJlZHVjZXIgb2JqZWN0IGZvciBvYmplY3RzLlxuICpcbiAqIEB0eXBlIHttb2R1bGU6eGR1Y2UuUmVkdWNlcn1cbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IE9CSkVDVF9SRURVQ0VSID0gdG9SZWR1Y2VyKHt9KTtcblxuLyoqXG4gKiBBIHJlZHVjZXIgb2JqZWN0IGZvciBzdHJpbmdzLlxuICpcbiAqIEB0eXBlIHttb2R1bGU6eGR1Y2UuUmVkdWNlcn1cbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IFNUUklOR19SRURVQ0VSID0gdG9SZWR1Y2VyKFwiXCIpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSB0cmFuc2R1Y2VyIGZyb20gYSBmdW5jdGlvbiBhbmQgYSB0cmFuc2R1Y2VyIHRvIGNoYWluIGl0IHRvLlxuICpcbiAqIFRoaXMgaXMgaW4gbW9zdCByZXNwZWN0cyBqdXN0IGxpa2Uge0BsaW5rIG1vZHVsZTp4ZHVjZS50b1JlZHVjZXJ8dG9SZWR1Y2VyfSxcbiAqIHdpdGggdHdvIG5vdGFibGUgZGlmZmVyZW5jZXMuIE9uZSBpcyB0aGF0IGl0IHJlcXVpcmVzIGEgdHJhbnNkdWNlciB0byBjaGFpblxuICogdG8sIGFuZCBpdCBkb2VzIHRoZSBjaGFpbmluZyBhcyBhIHBhcnQgb2YgY3JlYXRpbmcgdGhlIG5ldyB0cmFuc2R1Y2VyLiBUaGVcbiAqIG90aGVyIGlzIHRoYXQgaXQgaW5jbHVkZXMgYSB1c2FibGUgYGluaXRgIGZ1bmN0aW9uLCB3aGVyZSBwYXNzaW5nIGEgZnVuY3Rpb25cbiAqIHRvIHtAbGluayBtb2R1bGU6eGR1Y2UudG9SZWR1Y2VyfHRvUmVkdWNlcn0gd291bGQgY3JlYXRlIGFuIGluaXQgZnVuY3Rpb25cbiAqIHRoYXQgdGhyb3dzIGFuIGVycm9yIGlmIGl0J3MgY2FsbGVkLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gYXBwbGllcyB0aGUgZ2l2ZW4gZnVuY3Rpb24gYXMgdGhlIGBzdGVwYCBmdW5jdGlvbiBvZiB0aGVcbiAqIHJldHVybmVkIHRyYW5zZHVjZXIsIGFuZCB0aGUgYGluaXRgIGFuZCBgcmVzdWx0YCBmdW5jdGlvbnMgc2ltcGx5IGNhbGwgdGhlXG4gKiBzYW1lIGZ1bmN0aW9ucyBpbiB0aGUgbmV4dCB0cmFuc2R1Y2VyIGRvd24gdGhlIGNoYWluLiBUaGlzIGlzIHByZWNpc2VseSB3aGF0XG4gKiAqbW9zdCogdHJhbnNkdWNlcnMgd2FudC4uLmBpbml0YCBhbmQgYHJlc3VsdGAgZnVuY3Rpb25zIGFyZSBub3JtYWxseSBoYW5kbGVkXG4gKiBieSB0aGUgcmVkdWNlciBhdCB0aGUgZW5kIG9mIHRoZSB0cmFuc2R1Y2VyIGNoYWluLi4uYnV0IGluIHRoZSByYXJlIGNhc2VcbiAqIHdoZW4gYGluaXRgIG9yIGByZXN1bHRgIG11c3QgZG8gbW9yZSB0aGFuIHRoaXMsIHRoZSB0cmFuc2R1Y2VyIG11c3QgYmVcbiAqIGNyZWF0ZWQgbWFudWFsbHkuXG4gKlxuICogVGhpcyBmdW5jdGlvbiBkb2VzIG5vdCBhdXRvbWF0aWNhbGx5IGNoYWluIHRoZSBgc3RlcGAgZnVuY3Rpb24gdG8gdGhlIG5leHRcbiAqIG9uZSBkb3duIHRoZSBsaW5lLCBhcyB0aGF0IGNhbiBiZSBkb25lIGluIGFueSBudW1iZXIgb2YgZGlmZmVyZW50IHdheXMuIFRodXNcbiAqIHRoZSBmdW5jdGlvbiBpdHNlbGYgc2hvdWxkIGNhbGwgdGhlIGBzdGVwYCBmdW5jdGlvbiBpbiBgeGZvcm1gIGluIHdoYXRldmVyXG4gKiB3YXkgaXMgYXBwcm9wcmlhdGUuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHBhcmFtIHttb2R1bGU6eGR1Y2UuU3RlcEZ1bmN0aW9ufSBmbiBUaGUgc3RlcCBmdW5jdGlvbiBmb3IgdGhlIHRyYW5zZHVjZXIuXG4gKiBAcGFyYW0ge21vZHVsZTp4ZHVjZS5UcmFuc2R1Y2VyfSB4Zm9ybSBUaGUgbmV4dCB0cmFuc2R1Y2VyIG9iamVjdCBpbiB0aGVcbiAqICAgICBjaGFpbi5cbiAqIEByZXR1cm5zIHttb2R1bGU6eGR1Y2UuVHJhbnNkdWNlcn0gQSBuZXcgdHJhbnNkdWNlciwgY2hhaW5pbmcgdGhlIHN1cHBsaWVkXG4gKiAgICAgZnVuY3Rpb24gdG8gdGhlIHN1cHBsaWVkIHRyYW5zZHVjZXIuXG4gKi9cbmZ1bmN0aW9uIHRvVHJhbnNkdWNlcihmbiwgeGZvcm0pIHtcbiAgcmV0dXJuIHtcbiAgICBbcC5pbml0XSgpIHtcbiAgICAgIHJldHVybiB4Zm9ybVtwLmluaXRdKCk7XG4gICAgfSxcblxuICAgIFtwLnN0ZXBdOiBmbixcblxuICAgIFtwLnJlc3VsdF0odmFsdWUpIHtcbiAgICAgIHJldHVybiB4Zm9ybVtwLnJlc3VsdF0odmFsdWUpO1xuICAgIH1cbiAgfTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgcmVkdWN0aW9uIGZ1bmN0aW9uIGZyb20gYSB0cmFuc2R1Y2VyIGFuZCBhIHJlZHVjZXIuXG4gKlxuICogVGhpcyBwcm9kdWNlcyBhIGZ1bmN0aW9uIHRoYXQncyBzdWl0YWJsZSBmb3IgYmVpbmcgcGFzc2VkIGludG8gb3RoZXJcbiAqIGxpYnJhcmllcycgcmVkdWNlIGZ1bmN0aW9ucywgc3VjaCBhcyBKYXZhU2NyaXB0J3MgYEFycmF5LnByb3RvdHlwZS5yZWR1Y2VgIG9yXG4gKiBMb2Rhc2gncyBgXy5yZWR1Y2VgLiBJdCByZXF1aXJlcyBib3RoIGEgdHJhbnNmb3JtZXIgYW5kIGEgcmVkdWNlciBiZWNhdXNlXG4gKiByZWR1Y3Rpb24gZnVuY3Rpb25zIGZvciB0aG9zZSBsaWJyYXJpZXMgbXVzdCBrbm93IGhvdyB0byBkbyBib3RoLiBUaGUgcmVkdWNlclxuICogY2FuIGJlIGEgc3RhbmRhcmQgcmVkdWNlciBvYmplY3QgbGlrZSB0aGUgb25lcyBzZW50XG4gKiB0b2B7QGxpbmsgbW9kdWxlOnhkdWNlLnRyYW5zZHVjZXx0cmFuc2R1Y2V9YCBvclxuICogYHtAbGluayBtb2R1bGU6eGR1Y2UucmVkdWNlfHJlZHVjZX1gLCBvciBpdCBjYW4gYmUgYSBwbGFpbiBmdW5jdGlvbiB0aGF0XG4gKiB0YWtlcyB0d28gcGFyYW1ldGVycyBhbmQgcmV0dXJucyB0aGUgcmVzdWx0IG9mIHJlZHVjaW5nIHRoZSBzZWNvbmQgcGFyYW1ldGVyXG4gKiBpbnRvIHRoZSBmaXJzdC5cbiAqXG4gKiBJZiB0aGVyZSBpcyBubyBuZWVkIGZvciBhIHRyYW5zZm9ybWF0aW9uLCB0aGVuIHBhc3MgaW4gdGhlXG4gKiBge0BsaW5rIG1vZHVsZTp0cmFuc2R1Y2Vycy5pZGVudGl0eXxpZGVudGl0eX1gIHRyYW5zZHVjZXIuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHBhcmFtIHttb2R1bGU6eGR1Y2UuUmVkdWNlcn0geGZvcm0gQSB0cmFuc2R1Y2VyIG9iamVjdCB3aG9zZSBzdGVwXG4gKiAgICAgZnVuY3Rpb24gd2lsbCBiZWNvbWUgdGhlIHJldHVybmVkIHJlZHVjdGlvbiBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7KG1vZHVsZTp4ZHVjZS5TdGVwRnVuY3Rpb258bW9kdWxlOnhkdWNlLlJlZHVjZXIpfSByZWR1Y2VyIEFcbiAqICAgICByZWR1Y2VyIHRoYXQga25vd3MgaG93IHRvIHJlZHVjZSB2YWx1ZXMgaW50byBhbiBvdXRwdXQgY29sbGVjdGlvbi4gVGhpc1xuICogICAgIGNhbiBlaXRoZXIgYmUgYSByZWR1Y2luZyBmdW5jdGlvbiBvciBhIHRyYW5zZHVjZXIgb2JqZWN0IHdob3NlIGBzdGVwYFxuICogICAgIGZ1bmN0aW9uIGtub3dzIGhvdyB0byBwZXJmb3JtIHRoaXMgcmVkdWN0aW9uLlxuICogQHJldHVybnMge21vZHVsZTp4ZHVjZS5TdGVwRnVuY3Rpb259IEEgZnVuY3Rpb24gdGhhdCBoYW5kbGVzIGJvdGggdGhlXG4gKiAgICAgdHJhbnNmb3JtYXRpb24gYW5kIHRoZSByZWR1Y3Rpb24gb2YgYSB2YWx1ZSBvbnRvIGEgdGFyZ2V0IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiB0b0Z1bmN0aW9uKHhmb3JtLCByZWR1Y2VyKSB7XG4gIGNvbnN0IHIgPSB0eXBlb2YgcmVkdWNlciA9PT0gXCJmdW5jdGlvblwiID8gdG9SZWR1Y2VyKHJlZHVjZXIpIDogcmVkdWNlcjtcbiAgY29uc3QgcmVzdWx0ID0geGZvcm0ocik7XG4gIHJldHVybiByZXN1bHRbcC5zdGVwXS5iaW5kKHJlc3VsdCk7XG59XG5cbi8qKlxuICogTWFya3MgYSB2YWx1ZSBhcyBjb21wbGV0ZS5cbiAqXG4gKiBUaGlzIGlzIGRvbmUgYnkgd3JhcHBpbmcgdGhlIHZhbHVlLiBUaGlzIG1lYW5zIHRocmVlIHRoaW5nczogZmlyc3QsIGFcbiAqIGNvbXBsZXRlIG9iamVjdCBtYXkgYmUgbWFya2VkIGFzIGNvbXBsZXRlIGFnYWluOyBzZWNvbmQsIGEgY29tcGxldGUgdmFsdWVcbiAqIGlzbid0IHVzYWJsZSB3aXRob3V0IGJlaW5nIHVuY29tcGxldGVkIGZpcnN0OyBhbmQgdGhpcmQgYW55IHR5cGUgb2YgdmFsdWVcbiAqIChpbmNsdWRpbmcgYHVuZGVmaW5lZGApIG1heSBiZSBtYXJrZWQgYXMgY29tcGxldGUuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gYmUgY29tcGxldGVkLlxuICogQHJldHVybiB7Kn0gQSBjb21wbGV0ZWQgdmVyc2lvbiBvZiB0aGUgcHJvdmlkZWQgdmFsdWUuIFRoaXMgcmVkdWN0aW9uIGlzXG4gKiAgICAgYWNoaWV2ZWQgYnkgd3JhcHBpbmcgdGhlIHZhbHVlIGluIGEgbWFya2VyIG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gY29tcGxldGUodmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBbcC5yZWR1Y2VkXTogdHJ1ZSxcbiAgICBbcC52YWx1ZV06IHZhbHVlXG4gIH07XG59XG5cbi8qKlxuICogUmVtb3ZlcyB0aGUgY29tcGxldGUgc3RhdHVzIGZyb20gYSBjb21wbGV0ZWQgdmFsdWUuXG4gKlxuICogVGhpcyBmdW5jdGlvbiBpcyBpbnRlbmRlZCB0byBiZSB1c2VkIHdoZW4gaXQncyBjZXJ0YWluIHRoYXQgYSB2YWx1ZSBpc1xuICogYWxyZWFkeSBtYXJrZWQgYXMgY29tcGxldGUuIElmIGl0IGlzIG5vdCwgYHVuZGVmaW5lZGAgd2lsbCBiZSByZXR1cm5lZFxuICogaW5zdGVhZCBvZiB0aGUgdmFsdWUuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gYmUgdW5jb21wbGV0ZWQuXG4gKiBAcmV0dXJuIHsqfSBBbiB1bmNvbXBsZXRlZCB2ZXJzaW9uIG9mIHRoZSBwcm92aWRlZCB2YWx1ZS4gSWYgdGhlIHZhbHVlIHdhc1xuICogICAgIG5vdCBjb21wbGV0ZSBpbiB0aGUgZmlyc3QgcGxhY2UsIGB1bmRlZmluZWRgIHdpbGwgYmUgcmV0dXJuZWQgaW5zdGVhZC5cbiAqL1xuZnVuY3Rpb24gdW5jb21wbGV0ZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWU/LltwLnZhbHVlXTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgYSB2YWx1ZSBpcyBtYXJrZWQgYXMgY29tcGxldGUuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gdGVzdCBmb3IgaXRzIGNvbXBsZXRlIHN0YXR1cy5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IEVpdGhlciBgdHJ1ZWAgaWYgdGhlIHZhbHVlIGlzIGNvbXBsZXRlLCBvciBgZmFsc2VgIGlmIGl0IGlzXG4gKiAgICAgbm90LlxuICovXG5mdW5jdGlvbiBpc0NvbXBsZXRlZCh2YWx1ZSkge1xuICByZXR1cm4gISF2YWx1ZT8uW3AucmVkdWNlZF07XG59XG5cbi8qKlxuICogTWFrZXMgc3VyZSB0aGF0IGEgdmFsdWUgaXMgbWFya2VkIGFzIGNvbXBsZXRlOyBpZiBpdCBpcyBub3QsIGl0IHdpbGwgYmVcbiAqIG1hcmtlZCBhcyBjb21wbGV0ZS5cbiAqXG4gKiBUaGlzIGRpZmZlcnMgZnJvbSB7QGxpbmsgbW9kdWxlOnhkdWNlLmNvbXBsZXRlfGNvbXBsZXRlfSBpbiB0aGF0XG4gKiBpZiB0aGUgdmFsdWUgaXMgYWxyZWFkeSBjb21wbGV0ZSwgdGhpcyBmdW5jdGlvbiB3b24ndCBjb21wbGV0ZSBpdCBhZ2Fpbi5cbiAqIFRoZXJlZm9yZSB0aHVzIGZ1bmN0aW9uIGNhbid0IGJlIHVzZWQgdG8gbWFrZSBhIHZhbHVlIGNvbXBsZXRlIG11bHRpcGxlXG4gKiB0aW1lcy5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBiZSBjb21wbGV0ZWQuXG4gKiBAcmV0dXJuIHsqfSBJZiB0aGUgdmFsdWUgaXMgYWxyZWFkeSBjb21wbGV0ZSwgdGhlbiB0aGUgdmFsdWUgaXMgc2ltcGx5XG4gKiAgICAgcmV0dXJuZWQuIE90aGVyd2lzZSwgYSBjb21wbGV0ZWQgdmVyc2lvbiBvZiB0aGUgdmFsdWUgaXMgcmV0dXJuZWQuXG4gKi9cbmZ1bmN0aW9uIGVuc3VyZUNvbXBsZXRlZCh2YWx1ZSkge1xuICByZXR1cm4gaXNDb21wbGV0ZWQodmFsdWUpID8gdmFsdWUgOiBjb21wbGV0ZSh2YWx1ZSk7XG59XG5cbi8qKlxuICogUmVtb3ZlcyB0aGUgY29tcGxldGUgc3RhdHVzIGZyb20gYSB2YWx1ZSwgYXMgbG9uZyBhcyBpdCBhY3R1YWxseSBpcyBjb21wbGV0ZS5cbiAqXG4gKiBUaGlzIGRvZXMgYSBjaGVjayB0byBtYWtlIHN1cmUgdGhlIHZhbHVlIHBhc3NlZCBpbiBhY3R1YWxseSBpcyBjb21wbGV0ZS4gSWZcbiAqIGl0IGlzbid0LCB0aGUgdmFsdWUgaXRzZWxmIGlzIHJldHVybmVkLiBJdCdzIG1lYW50IHRvIGJlIHVzZWQgd2hlbiB0aGVcbiAqIGNvbXBsZXRlZCBzdGF0dXMgaXMgdW5jZXJ0YWluLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIGNvbXBsZXRlIHZhbHVlIHRvIGJlIHVuY29tcGxldGVkLlxuICogQHJldHVybiB7Kn0gSWYgdGhlIHZhbHVlIGlzIGFscmVhZHkgdW5jb21wbGV0ZWQsIHRoZSB2YWx1ZSBpcyBzaW1wbHlcbiAqICAgICByZXR1cm5lZC4gT3RoZXJ3aXNlIGFuIHVuY29tcGxldGVkIHZlcnNpb24gb2YgdGhlIHZhbHVlIGlzIHJldHVybmVkLlxuICovXG5mdW5jdGlvbiBlbnN1cmVVbmNvbXBsZXRlZCh2YWx1ZSkge1xuICByZXR1cm4gaXNDb21wbGV0ZWQodmFsdWUpID8gdW5jb21wbGV0ZSh2YWx1ZSkgOiB2YWx1ZTtcbn1cblxuLyoqXG4gKiBSZWR1Y2VzIHRoZSBlbGVtZW50cyBvZiB0aGUgaW5wdXQgY29sbGVjdGlvbiB0aHJvdWdoIGEgcmVkdWNlciBpbnRvIGFuIG91dHB1dFxuICogY29sbGVjdGlvbi5cbiAqXG4gKiBUaGlzIGlzIHRoZSBsb3dlc3QtbGV2ZWwgb2YgdGhlIHRyYW5zZHVjdGlvbiBmdW5jdGlvbnMuIEluIGZhY3QsIHRoaXMgb25lIGlzXG4gKiBzbyBsb3ctbGV2ZWwgdGhhdCBpdCBkb2Vzbid0IGhhdmUgYSBsb3Qgb2YgdXNlIGluIG5vcm1hbCBvcGVyYXRpb24uIEl0J3MgbW9yZVxuICogdXNlZnVsIGZvciB3cml0aW5nIHlvdXIgb3duIHRyYW5zZm9ybWF0aW9uIGZ1bmN0aW9ucy5cbiAqXG4gKiBgcmVkdWNlYCBkb2Vzbid0IGFzc3VtZSB0aGF0IHRoZXJlJ3MgZXZlbiBhIHRyYW5zZm9ybWF0aW9uLiBJdCByZXF1aXJlcyBhblxuICogaW5pdGlhbCBjb2xsZWN0aW9uIGFuZCBhIHJlZHVjZXIgb2JqZWN0IHRoYXQgaXMgbWF0Y2hlZCB0byB0aGF0IGluaXRpYWxcbiAqIGNvbGxlY3Rpb24uIFRoZSByZWR1Y2VyIG9iamVjdCBtdXN0IGltcGxlbWVudCB0aGUgYHN0ZXBgIGFuZCBgcmVzdWx0YFxuICogcHJvdG9jb2xzLCB3aGljaCBpbnN0cnVjdCBgcmVkdWNlYCBvbiBob3cgdG8gYnVpbGQgdXAgdGhlIGNvbGxlY3Rpb24uIFRoZVxuICogcmVkdWNlciBtYXkgaW1wbGVtZW50IGEgdHJhbnNmb3JtYXRpb24gYXMgd2VsbCwgYnV0IGFsbCB0aGF0J3MgaW1wb3J0YW50IGhlcmVcbiAqIGlzIHRoYXQgaXQgY2FuIGRvIHRoZSByZWR1Y3Rpb24uXG4gKlxuICogVGhlIGlucHV0IGNvbGxlY3Rpb24gbmVlZCBvbmx5IGltcGxlbWVudCBgaXRlcmFibGVgLiBJdCBpcyBub3QgbmVjZXNzYXJ5IGZvclxuICogdGhlIGlucHV0IGFuZCBvdXRwdXQgY29sbGVjdGlvbnMgdG8gYmUgb2YgdGhlIHNhbWUgdHlwZTsgYXMgbG9uZyBhcyB0aGUgaW5wdXRcbiAqIGltcGxlbWVudHMgYGl0ZXJhYmxlYCBhbmQgdGhlIHJlZHVjZXIgaW1wbGVtZW50cyBgc3RlcGAgYW5kIGByZXN1bHRgXG4gKiBhcHByb3ByaWF0ZSB0byB0aGUgdHlwZSBvZiB0aGUgYGluaXRgIGNvbGxlY3Rpb24sIHRoZW4gYW55IHRyYW5zbGF0aW9uXG4gKiBiZXR3ZWVuIGNvbGxlY3Rpb24gdHlwZXMgY2FuIG9jY3VyLlxuICpcbiAqIFRoZSBub3JtYWwgY291cnNlIG9mIG9wZXJhdGlvbiB3aWxsIGJlIHRvIGNhbGxcbiAqIHtAbGluayBtb2R1bGU6eGR1Y2UudHJhbnNkdWNlfHRyYW5zZHVjZX0gaW5zdGVhZCwgYXMgdGhhdCBmdW5jdGlvbiBtYWtlcyBpdFxuICogZWFzeSB0byBjb21iaW5lIHRyYW5zZm9ybWF0aW9ucyB3aXRoIHJlZHVjdGlvbnMgYW5kIGNhbiBvcHRpb25hbGx5IGZpZ3VyZSBvdXRcbiAqIHRoZSBpbml0aWFsIGNvbGxlY3Rpb24gaXRzZWxmLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwYXJhbSB7Kn0gY29sbGVjdGlvbiBUaGUgaW5wdXQgY29sbGVjdGlvbi4gVGhlIG9ubHkgcmVxdWlyZW1lbnQgb2YgdGhpc1xuICogICAgIGNvbGxlY3Rpb24gaXMgdGhhdCBpdCBpbXBsZW1lbnQgdGhlIGBpdGVyYWJsZWAgcHJvdG9jb2wuIFNwZWNpYWwgc3VwcG9ydFxuICogICAgIGlzIHByb3ZpZGVkIGJ5IHRoZSBsaWJyYXJ5IGZvciBvYmplY3RzLCBzbyB0aGV5IGNhbiBiZSB1c2VkIGFzIHdlbGwuXG4gKiBAcGFyYW0ge21vZHVsZTp4ZHVjZS5SZWR1Y2VyfSByZWR1Y2VyIEFuIG9iamVjdCB0aGF0IGltcGxlbWVudHMgdGhlIGBzdGVwYFxuICogICAgIGFuZCBgcmVzdWx0YCBwcm90b2NvbHMuIFRoaXMgb2JqZWN0IG11c3Qga25vdyBob3cgdG8gcHJvZHVjZSBhbiBvdXRwdXRcbiAqICAgICBjb2xsZWN0aW9uIHRocm91Z2ggdGhvc2UgcHJvdG9jb2wgZnVuY3Rpb25zLlxuICogQHBhcmFtIHsqfSBpbml0IGEgY29sbGVjdGlvbiBvZiB0aGUgc2FtZSB0eXBlIGFzIHRoZSBvdXRwdXQgY29sbGVjdGlvbi4gSXRcbiAqICAgICBuZWVkIG5vdCBiZSBlbXB0eTsgaWYgaXQgaXMgbm90LCB0aGUgZXhpc3RpbmcgZWxlbWVudHMgYXJlIHJldGFpbmVkIGFzXG4gKiAgICAgdGhlIGlucHV0IGNvbGxlY3Rpb24gaXMgcmVkdWNlZCBpbnRvIGl0LlxuICogQHJldHVybiB7Kn0gQSBuZXcgY29sbGVjdGlvbiwgY29uc2lzdGluZyBvZiB0aGUgYGluaXRgIGNvbGxlY3Rpb24gd2l0aCBhbGwgb2ZcbiAqICAgICB0aGUgZWxlbWVudHMgb2YgdGhlIGBjb2xsZWN0aW9uYCBjb2xsZWN0aW9uIHJlZHVjZWQgaW50byBpdC5cbiAqL1xuZnVuY3Rpb24gcmVkdWNlKGNvbGxlY3Rpb24sIHJlZHVjZXIsIGluaXQpIHtcbiAgaWYgKGNvbGxlY3Rpb24gPT0gbnVsbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3QgaXRlciA9IGl0ZXJhdG9yKGNvbGxlY3Rpb24pO1xuICBpZiAoIWl0ZXIpIHtcbiAgICB0aHJvdyBFcnJvcihgQ2Fubm90IHJlZHVjZSBhbiBpbnN0YW5jZSBvZiAke2NvbGxlY3Rpb24uY29uc3RydWN0b3IubmFtZX1gKTtcbiAgfVxuXG4gIGxldCBhY2MgPSBpbml0O1xuICBsZXQgc3RlcCA9IGl0ZXIubmV4dCgpO1xuXG4gIHdoaWxlICghc3RlcC5kb25lKSB7XG4gICAgYWNjID0gcmVkdWNlcltwLnN0ZXBdKGFjYywgc3RlcC52YWx1ZSk7XG4gICAgaWYgKGlzQ29tcGxldGVkKGFjYykpIHtcbiAgICAgIGFjYyA9IHVuY29tcGxldGUoYWNjKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBzdGVwID0gaXRlci5uZXh0KCk7XG4gIH1cblxuICByZXR1cm4gcmVkdWNlcltwLnJlc3VsdF0oYWNjKTtcbn1cblxuZXhwb3J0IHtcbiAgaW5pdCxcbiAgc3RlcCxcbiAgcmVzdWx0LFxuICB0b1JlZHVjZXIsXG4gIEFSUkFZX1JFRFVDRVIsXG4gIE9CSkVDVF9SRURVQ0VSLFxuICBTVFJJTkdfUkVEVUNFUixcbiAgdG9UcmFuc2R1Y2VyLFxuICB0b0Z1bmN0aW9uLFxuICBjb21wbGV0ZSxcbiAgdW5jb21wbGV0ZSxcbiAgaXNDb21wbGV0ZWQsXG4gIGVuc3VyZUNvbXBsZXRlZCxcbiAgZW5zdXJlVW5jb21wbGV0ZWQsXG4gIHJlZHVjZVxufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG4vKipcbiAqIEZ1bmN0aW9ucyBkZWFsaW5nIHdpdGggdGhlIGFjdHVhbCB0cmFuc2Zvcm1hdGlvbiBvZiB2YWx1ZXMgYW5kIGZvciBjaG9vc2luZ1xuICogdGhlIHJlZHVjZXIgZHVyaW5nIHRyYW5zZHVjdGlvbi5cbiAqXG4gKiBAbW9kdWxlIHhkdWNlL3RyYW5zZm9ybWF0aW9uXG4gKiBAcHJpdmF0ZVxuICovXG5cbmltcG9ydCB7IHByb3RvY29scyBhcyBwLCBpc0ltcGxlbWVudGVkIH0gZnJvbSBcIm1vZHVsZXMvcHJvdG9jb2xcIjtcbmltcG9ydCB7IGl0ZXJhdG9yIH0gZnJvbSBcIm1vZHVsZXMvaXRlcmF0aW9uXCI7XG5pbXBvcnQge1xuICBpc0NvbXBsZXRlZCxcbiAgdG9SZWR1Y2VyLFxuICByZWR1Y2UsXG4gIEFSUkFZX1JFRFVDRVIsXG4gIE9CSkVDVF9SRURVQ0VSLFxuICBTVFJJTkdfUkVEVUNFUlxufSBmcm9tIFwibW9kdWxlcy9yZWR1Y3Rpb25cIjtcbmltcG9ydCB7IGlzRnVuY3Rpb24sIGlzQXJyYXksIGlzT2JqZWN0LCBpc1N0cmluZyB9IGZyb20gXCJtb2R1bGVzL3V0aWxzXCI7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBpdGVyYXRvciB0aGF0IGlzIGFsc28gYSB0cmFuc2R1Y2VyLCB0cmFuc2Zvcm1pbmcgaXRzIGNvbGxlY3Rpb25cbiAqIG9uZSBlbGVtZW50IGF0IGEgdGltZS4gVGhpcyBpcyB0aGUgYWN0dWFsIG91dHB1dCBvZiB0aGVcbiAqIHtAbGluayBtb2R1bGU6eGR1Y2UuYXNJdGVyYXRvcnxhc0l0ZXJhdG9yfSBmdW5jdGlvbiwgYXMgd2VsbCBhcyB0aGUgb3V0cHV0IG9mXG4gKiB0aGUge0BsaW5rIG1vZHVsZTp4ZHVjZS5zZXF1ZW5jZXxzZXF1ZW5jZX0gZnVuY3Rpb24gd2hlbiB0aGUgaW5wdXQgaXMgYW5cbiAqIGl0ZXJhdG9yLlxuICpcbiAqIFRoZSBlbmQgdXNlciBuZWVkIG5vdCBiZSBjb25jZXJuZWQgd2l0aCB0aGUgdHlwZSBvZiB0aGUgb3V0cHV0IGl0ZXJhdG9yIGluXG4gKiB0aGVzZSBjaXJjdW1zdGFuY2VzOyB0aGUgZW5kIHVzZXIgbmVlZCBvbmx5IGNhcmUgdGhhdCB0aGUgb3V0cHV0IGlzLCBpbiBmYWN0LFxuICogYW4gaXRlcmF0b3IgYW5kIGNhbiBiZSBleHBlY3RlZCB0byBhY3QgbGlrZSBvbmUuIEZvciB0aGlzIHJlYXNvbiwgdGhpc1xuICogZnVuY3Rpb24gYW5kIHRoZSB0eXBlIGl0IHJldHVybnMgYXJlIG5vdCBleHBvcnRlZC5cbiAqXG4gKiBUaGlzIG9iamVjdCBzdXBwb3J0cyBub24tMS10by0xIGNvcnJlc3BvbmRlbmNlcyBiZXR3ZWVuIGlucHV0IGFuZCBvdXRwdXRcbiAqIHZhbHVlcy4gRm9yIGV4YW1wbGUsIGEgZmlsdGVyIHRyYW5zZm9ybWF0aW9uIG1pZ2h0IHJldHVybiBmZXdlciBvdXRwdXRcbiAqIGVsZW1lbnRzIHRoYW4gd2VyZSBpbiB0aGUgaW5wdXQgY29sbGVjdGlvbiwgd2hpbGUgYSByZXBlYXQgdHJhbnNmb3JtYXRpb25cbiAqIHdpbGwgcmV0dXJuIG1vcmUuIEluIGVpdGhlciBjYXNlLCBgbmV4dGAgaW4gdGhpcyBjbGFzcyB3aWxsIHJldHVybiBvbmVcbiAqIGVsZW1lbnQgcGVyIGNhbGwuXG4gKlxuICogQHBhcmFtIHttb2R1bGU6eGR1Y2UuSXRlcmFibGV9IGNvbGxlY3Rpb24gdGhlIGlucHV0IGNvbGxlY3Rpb24gdGhhdCB0aGVcbiAqICAgICBwcm9kdWNlZCBpdGVyYXRvciB3aWxsIGJlIGl0ZXJhdGluZyBvdmVyLlxuICogQHBhcmFtIHttb2R1bGU6eGR1Y2UuVHJhbnNkdWNlckZ1bmN0aW9ufSB4Zm9ybSBBIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyBhIHRyYW5zZHVjZXJcbiAqICAgICBvYmplY3QgdGhhdCBkZWZpbmVzIHRoZSB0cmFuc2Zvcm1hdGlvbiBiZWluZyBkb25lIHRvIHRoZSBpdGVyYXRvcidzXG4gKiAgICAgZWxlbWVudHMuIEFueSBvZiB0aGUgdHJhbnNkdWNlcnMgaW4gdGhlXG4gKiAgICAge0BsaW5rIG1vZHVsZTp0cmFuc2R1Y2Vyc3x0cmFuc2R1Y2Vyc30gbW9kdWxlIGNhbiBwcm9kdWNlIGEgc3VpdGFibGVcbiAqICAgICB0cmFuc2R1Y2VyIGZ1bmN0aW9uLlxuICogQHJldHVybiB7bW9kdWxlOnhkdWNlLkl0ZXJhdG9yfSBBbiBpdGVyYXRvciB0aGF0IHdpbGwgdHJhbnNmb3JtIGl0cyBpbnB1dFxuICogICAgIGVsZW1lbnRzIHVzaW5nIHRoZSB0cmFuc2R1Y2VyIGZ1bmN0aW9uIGFzIGl0c1xuICogICAgIGB7QGxpbmsgbW9kdWxlOnhkdWNlLk5leHRGdW5jdGlvbnxuZXh0fWAgZnVuY3Rpb24gaXMgY2FsbGVkLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gdHJhbnNkdWNpbmdJdGVyYXRvcihjb2xsZWN0aW9uLCB4Zm9ybSkge1xuICBjb25zdCBzdGVwUmVkdWNlciA9IHtcbiAgICBbcC5zdGVwXSh4aXRlciwgaW5wdXQpIHtcbiAgICAgIHhpdGVyLml0ZW1zLnVuc2hpZnQoaW5wdXQpO1xuICAgICAgcmV0dXJuIHhpdGVyO1xuICAgIH0sXG4gICAgW3AucmVzdWx0XSh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBpdGVyID0gaXRlcmF0b3IoY29sbGVjdGlvbik7XG4gIGNvbnN0IHhmID0geGZvcm0oc3RlcFJlZHVjZXIpO1xuICBsZXQgY29tcGxldGVkID0gZmFsc2U7XG5cbiAgLy8gVGhpcyBhcnJheSBpcyB0aGUga2V5IHRvIHdvcmtpbmcgcHJvcGVybHkgd2l0aCBzdGVwIGZ1bmN0aW9ucyB0aGF0IHJldHVyblxuICAvLyBtb3JlIHRoYW4gb25lIHZhbHVlLiBBbGwgb2YgdGhlbSBhcmUgcHV0IGludG8gdGhlIGl0ZW1zIGFycmF5LiBBcyBsb25nIGFzXG4gIC8vIHRoaXMgYXJyYXkgaGFzIHZhbHVlcyBpbiBpdCwgdGhlIGBuZXh0YCBmdW5jdGlvbiB3aWxsIHJldHVybiBvbmUgdmFsdWVcbiAgLy8gcG9wcGVkIGZyb20gaXQgcmF0aGVyIHRoYW4gcnVubmluZyB0aGUgc3RlcCBmdW5jdGlvbiBhZ2Fpbi5cbiAgY29uc3QgaXRlbXMgPSBbXTtcblxuICAvLyBUaGUgYG5leHRgIGZ1bmN0aW9uIGhlcmUgaXMgcmF0aGVyIHNpbXBsZS4gSWYgdGhlcmUgaXMgYWxyZWFkeSBzb21ldGhpbmcgaW5cbiAgLy8gdGhlIGBpdGVtc2AgYXJyYXksIGl0J3MgcmV0dXJuZWQuIElmIG5vdCwgdGhlIGBzdGVwYCBmdW5jdGlvbiBpcyBydW4gYW5kLFxuICAvLyBpZiB0aGF0IHJlc3VsdHMgaW4gYSB2YWx1ZSBpbiB0aGUgYGl0ZW1zYCBhcnJheSwgaXQncyByZXR1cm5lZC4gT3RoZXJ3aXNlXG4gIC8vIGFuIG9iamVjdCB3aXRoIGB7IGRvbmU6IHRydWUgfWAgaXMgcmV0dXJuZWQuXG4gIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgaWYgKGl0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgc3RlcCgpO1xuICAgIH1cbiAgICBpZiAoaXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4geyBkb25lOiB0cnVlIH07XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogaXRlbXMucG9wKCksXG4gICAgICBkb25lOiBmYWxzZVxuICAgIH07XG4gIH1cblxuICAvLyBUaGlzIGlzIHdoZXJlIG1vc3Qgb2YgdGhlIHdvcmsgaGFwcGVucy4gSXQgZ2V0cyB0aGUgbmV4dCB2YWx1ZSBmcm9tIHRoZVxuICAvLyBpbnB1dCBjb2xsZWN0aW9uIGFuZCBydW5zIGl0IHRocm91Z2ggdGhlIHJlZHVjdGlvbiBzdGVwIGZ1bmN0aW9ucy4gSWYgdGhhdFxuICAvLyByZXN1bHRzIGluIGEgdmFsdWUsIGl0J3MgZ2l2ZW4gdG8gdGhlIHN0ZXBwZXIgb2JqZWN0ICh3aGljaCBhZGRzIGl0IHRvIHRoZVxuICAvLyBgaXRlbXNgIGFycmF5KTsgb3RoZXJ3aXNlIHRoZSB3aGlsZSBsb29wIGNvbnRpbnVlcyB0byB0aGUgbmV4dCBlbGVtZW50IG9mXG4gIC8vIHRoZSBpbnB1dCBjb2xsZWN0aW9uLiBUaGlzIGVuc3VyZXMgdGhhdCB0aGVyZSdzIHNvbWV0aGluZyBmb3IgdGhlIGBuZXh0YFxuICAvLyBmdW5jdGlvbiB0byByZXR1cm4gZWFjaCB0aW1lIGl0J3MgY2FsbGVkLlxuICAvL1xuICAvLyBJZiB0aGUgY29sbGVjdGlvbiBoYXMgZmluaXNoZWQgb3IgaWYgdGhlIHN0ZXAgZnVuY3Rpb24gcmV0dXJucyBhIGNvbXBsZXRlZFxuICAvLyBvYmplY3QgKHdoaWNoIHRha2Ugd2lsbCBkbyBhZnRlciBpdHMgbGltaXQgb2YgZWxlbWVudHMgaGFzIGJlZW4gcmVhY2hlZCxcbiAgLy8gZm9yIGluc3RhbmNlKSwgdGhlIGl0ZXJhdGlvbiBpcyBmaW5pc2hlZCBieSBjYWxsaW5nIHRoZSByZXN1bHQgZnVuY3Rpb24uXG4gIGZ1bmN0aW9uIHN0ZXAoKSB7XG4gICAgY29uc3QgY291bnQgPSBpdGVtcy5sZW5ndGg7XG4gICAgd2hpbGUgKGl0ZW1zLmxlbmd0aCA9PT0gY291bnQpIHtcbiAgICAgIGNvbnN0IHN0ZXBWYWx1ZSA9IGl0ZXIubmV4dCgpO1xuICAgICAgaWYgKHN0ZXBWYWx1ZS5kb25lIHx8IGNvbXBsZXRlZCkge1xuICAgICAgICB4ZltwLnJlc3VsdF0ocmVzdWx0KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjb21wbGV0ZWQgPSBpc0NvbXBsZXRlZCh4ZltwLnN0ZXBdKHJlc3VsdCwgc3RlcFZhbHVlLnZhbHVlKSk7XG4gICAgfVxuICB9XG5cbiAgLy8gVGhlIHJlc3VsdGluZyBvYmplY3QgaXMgYW4gaXRlcmF0b3IsIHNvIHRvIHNhdGlzZnkgdGhlIGl0ZXJhYmxlIHByb3RvY29sXG4gIC8vIHdlIGp1c3QgcmV0dXJuIHRoYXQgb2JqZWN0IGl0c2VsZlxuICBmdW5jdGlvbiBzSXRlcmF0b3IoKSB7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8vIFRoZSBgcmVzdWx0YCBuYW1lIGlzIGhvaXN0ZWQgYW5kIHVzZWQgaW4gZnVuY3Rpb25zIGZ1cnRoZXIgdXAsIHNvIHdlIGhhdmVcbiAgLy8gdG8gcmV0YWluIHRoYXQgbmFtZSBhbmQgY2FuJ3QganVzdCByZXR1cm4gdGhlIG9iamVjdCB3aXRob3V0IG5hbWluZyBpdFxuICBjb25zdCByZXN1bHQgPSB7IGl0ZW1zLCBuZXh0LCBzdGVwLCBbU3ltYm9sLml0ZXJhdG9yXTogc0l0ZXJhdG9yIH07XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogVHJhbnNmb3JtcyB0aGUgZWxlbWVudHMgb2YgdGhlIGlucHV0IGNvbGxlY3Rpb24gYW5kIHJlZHVjZXMgdGhlbSBpbnRvIGFuXG4gKiBvdXRwdXQgY29sbGVjdGlvbi5cbiAqXG4gKiBUaGlzIGlzIHRoZSBsb3dlc3QtbGV2ZWwgb2YgdGhlIHRyYW5zZHVjdGlvbiBmdW5jdGlvbnMgdGhhdCBpcyBsaWtlbHkgdG8gc2VlXG4gKiByZWd1bGFyIHVzZS4gSXQgZG9lcyBub3QgYXNzdW1lIGFueXRoaW5nIGFib3V0IHRoZSByZWR1Y2VyLCBhcyBpdCBhc2tzIGZvciBpdFxuICogdG8gYmUgcGFzc2VkIGV4cGxpY2l0bHkuIFRoaXMgbWVhbnMgdGhhdCBhbnkga2luZCBvZiBjb2xsZWN0aW9uIGNhbiBiZVxuICogcHJvZHVjZWQsIHNpbmNlIHRoZSByZWR1Y2VyIGlzIG5vdCB0aWVkIHRvIHRoZSBpbnB1dCBjb2xsZWN0aW9uIGluIGFueSB3YXkuXG4gKlxuICogYHRyYW5zZHVjZWAgYWxzbyB3aWxsIGFjY2VwdCBhbiBpbml0aWFsIHZhbHVlIGZvciB0aGUgcmVzdWx0aW5nIGNvbGxlY3Rpb24gYXNcbiAqIHRoZSBvcHRpb25hbCBsYXN0IHBhcmFtZXRlci4gSWYgdGhpcyBwYXJhbWV0ZXIgaXNuJ3QgcHJlc2VudCwgdGhlbiB0aGVcbiAqIGluaXRpYWwgdmFsdWUgaXMgZGV0ZXJtaW5lZCBmcm9tIHRoZSB0cmFuc2R1Y2VyIGluaXQgcHJvdG9jb2wgcHJvcGVydHkgb24gdGhlXG4gKiByZWR1Y2VyLiBOb3RlIGhvd2V2ZXIgdGhhdCBtYW55IHJlZHVjZXJzIG1heSBub3QgcHJvdmlkZSBhbiBpbml0aWFsIHZhbHVlLFxuICogYW5kIGluIHRob3NlIGNhc2VzIGl0IHdpbGwgKmhhdmUqIHRvIGJlIHBhc3NlZCBhcyBhIHBhcmFtZXRlci5cbiAqXG4gKiBgYGBcbiAqIGltcG9ydCB7IHByb3RvY29scyBhcyBwLCB0cmFuc2R1Y2UgfSBmcm9tIFwiQGNoYW5rby94ZHVjZVwiO1xuICogaW1wb3J0IHsgbWFwIH0gZnJvbSBcIkBjaGFua28vdHJhbnNkdWNlcnNcIjtcbiAqXG4gKiBjb25zdCB4Zm9ybSA9IG1hcCh4ID0+IHggKyAxKTtcbiAqXG4gKiBjb25zdCBhcnJheVJlZHVjZXIgPSB7XG4gKiAgIFtwLmluaXRdKCkgeyByZXR1cm4gW107IH0sXG4gKiAgIFtwLnJlc3VsdF0oeCkgeyByZXR1cm4geDsgfSxcbiAqICAgW3Auc3RlcF0oYWNjLCB4KSB7XG4gKiAgICAgYWNjLnB1c2goeCk7XG4gKiAgICAgcmV0dXJuIGFjYztcbiAqICAgfVxuICogfTtcbiAqXG4gKiBjb25zdCBzdHJpbmdSZWR1Y2VyID0ge1xuICogICBbcC5pbml0XSgpIHsgcmV0dXJuICcnOyB9LFxuICogICBbcC5yZXN1bHRdKHgpIHsgcmV0dXJuIHg7IH0sXG4gKiAgIFtwLnN0ZXBdKGFjYywgeCkgeyByZXR1cm4gYWNjICsgeDsgfVxuICogfTtcbiAqXG4gKiBsZXQgcmVzdWx0ID0gdHJhbnNkdWNlKFsxLCAyLCAzLCA0LCA1XSwgeGZvcm0sIGFycmF5UmVkdWNlcik7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQpOyAgIC8vIC0+IFsyLCAzLCA0LCA1LCA2XVxuICpcbiAqIHJlc3VsdCA9IHRyYW5zZHVjZShbMSwgMiwgMywgNCwgNV0sIHhmb3JtLCBzdHJpbmdSZWR1Y2VyKTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdCk7ICAgLy8gLT4gXCIyMzQ1NlwiXG4gKlxuICogcmVzdWx0ID0gdHJhbnNkdWNlKCcxMjM0NScsIHhmb3JtLCBhcnJheVJlZHVjZXIpO1xuICogY29uc29sZS5sb2cocmVzdWx0KTsgICAvLyAtPiBbMiwgMywgNCwgNSwgNl1cbiAqXG4gKiByZXN1bHQgPSB0cmFuc2R1Y2UoJzEyMzQ1JywgeGZvcm0sIHN0cmluZ1JlZHVjZXIpO1xuICogY29uc29sZS5sb2cocmVzdWx0KTsgICAvLyAtPiBcIjIzNDU2XCJcbiAqIGBgYFxuICpcbiAqIFRoZXNlIGV4YW1wbGVzIGlsbHVzdHJhdGUgYSBudW1iZXIgb2YgaW1wb3J0YW50IGNvbmNlcHRzLiBGaXJzdCBvZiBhbGwsIHRoZVxuICogdHJhbnNkdWNlciBmdW5jdGlvbiBpcyBpbmRlcGVuZGVudCBvZiB0aGUgdHlwZSBvZiB0aGUgY29sbGVjdGlvbjsgdGhlIHNhbWVcbiAqIHRyYW5zZHVjZXIgZnVuY3Rpb24gaXMgdXNlZCBubyBtYXR0ZXIgdGhlIHR5cGUgb2YgaW5wdXQgb3Igb3V0cHV0XG4gKiBjb2xsZWN0aW9ucy4gU2Vjb25kbHksIHR3byByZWR1Y2VycyBhcmUgZGVmaW5lZC4gVGhlc2UgYXJlIG9iamVjdHMgdGhhdFxuICogY29uZm9ybSB0byB0aGUgdHJhbnNkdWNlciBwcm90b2NvbCAoc2VlIHRoZSBkb2N1bWVudGF0aW9uIG9uXG4gKiBge0BsaW5rIG1vZHVsZTp4ZHVjZS5wcm90b2NvbHN9YCkgYW5kIHRoYXQga25vdyBob3cgdG8gcHJvZHVjZSB0aGUgb3V0cHV0XG4gKiBjb2xsZWN0aW9uIG9mIGNob2ljZS4gSW4gdGhpcyBjYXNlLCB0aGUgcmVkdWNlcnMga25vdyBob3cgdG8gY3JlYXRlIG5ld1xuICogYXJyYXlzIGFuZCBzdHJpbmdzICh0aGUgYGluaXRgIHByb3RvY29sKSBhbmQgaG93IHRvIGFkZCBlbGVtZW50cyB0byBhcnJheXNcbiAqIGFuZCBzdHJpbmdzICh0aGUgYHN0ZXBgIHByb3RvY29sKS4gQmVjYXVzZSB0aGVzZSByZWR1Y2VycyBkbyBoYXZlIGBpbml0YFxuICogcHJvdG9jb2wgcHJvcGVydGllcywgdGhlIGB0cmFuc2R1Y2VgIGNhbGxzIGRvIG5vdCByZXF1aXJlIGV4cGxpY2l0IGluaXRpYWxcbiAqIGNvbGxlY3Rpb25zLlxuICpcbiAqIFRoZSBmaW5hbCBwb2ludCBpcyB0aGF0IGB0cmFuc2R1Y2VgIGNhbiBhY2NlcHQgYW55IGtpbmQgb2YgaXRlcmFibGVcbiAqIGNvbGxlY3Rpb24sIGFuZCBieSBwYXNzaW5nIGluIHRoZSBwcm9wZXIgcmVkdWNlciwgaXQgY2FuIHByb2R1Y2UgYW55IGtpbmQgb2ZcbiAqIG91dHB1dCBjb2xsZWN0aW9uLiBUaGUgc2FtZSBgdHJhbnNkdWNlYCBmdW5jdGlvbiBhbmQgdGhlIHNhbWUgbWFwIHRyYW5zZm9ybWVyXG4gKiBpcyB1c2VkIGluIGFsbCBmb3VyIGV4YW1wbGVzLCBkZXNwaXRlIHRoZSBpbnB1dC9vdXRwdXQgY29tYmluYXRpb24gYmVpbmdcbiAqIGRpZmZlcmVudCBpbiBhbGwgZm91ci5cbiAqXG4gKiBUaGUgYHJlZHVjZXJgIHBhcmFtZXRlciAqY2FuKiBiZSBhIHJlZHVjZXIgZnVuY3Rpb24gaW5zdGVhZCBvZiBhIHJlZHVjZXJcbiAqIG9iamVjdC4gSWYgdGhpcyBpcyB0aGUgY2FzZSwgdGhlIGBpbml0YCBwYXJhbWV0ZXIgaXMgcmVxdWlyZWQgYmVjYXVzZSBhXG4gKiBmdW5jdGlvbiBjYW5ub3QgZGVmaW5lIGFuIGluaXRpYWwgdmFsdWUgaXRzZWxmLlxuICpcbiAqIFRoZSBgaW5pdGAgY29sbGVjdGlvbiBkb2Vzbid0IGhhdmUgdG8gYmUgZW1wdHkuIElmIGl0IGlzbid0LCB0aGUgZWxlbWVudHNcbiAqIHRoYXQgYXJlIGFscmVhZHkgaW4gaXQgYXJlIHJldGFpbmVkIGFuZCB0aGUgdHJhbnNmb3JtZWQgaW5wdXQgZWxlbWVudHMgYXJlXG4gKiByZWR1Y2VkIGludG8gdGhlIGNvbGxlY3Rpb24gbm9ybWFsbHkuXG4gKlxuICogT2YgY291cnNlLCB0aGUgZXhhbXBsZXMgYXJlIG5vdCByZWFsbHkgbmVjZXNzYXJ5IC0gdGhlIHNhbWUgdGhpbmcgY291bGQgYmVcbiAqIGFjY29tcGxpc2hlZCB1c2luZyBge0BsaW5rIG1vZHVsZTp4ZHVjZS5pbnRvfGludG99YCB3aXRob3V0IGhhdmluZyB0byBjcmVhdGVcbiAqIHRoZSByZWR1Y2VycyAoc3RyaW5ncyBhbmQgYXJyYXlzIHBhc3NlZCB0byBge0BsaW5rIG1vZHVsZTp4ZHVjZS5pbnRvfGludG99YFxuICogYXMgdGFyZ2V0cyBrbm93IGhvdyB0byByZWR1Y2UgdGhlbXNlbHZlcyBhbHJlYWR5KS5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcGFyYW0ge21vZHVsZTp4ZHVjZS5JdGVyYWJsZX0gY29sbGVjdGlvbiBUaGUgaW5wdXQgY29sbGVjdGlvbi4gVGhlIG9ubHlcbiAqICAgICByZXF1aXJlbWVudCBvZiB0aGlzIGNvbGxlY3Rpb24gaXMgdGhhdCBpdCBpbXBsZW1lbnQgdGhlIGBpdGVyYWJsZWBcbiAqICAgICBwcm90b2NvbC4gU3BlY2lhbCBzdXBwb3J0IGlzIHByb3ZpZGVkIGJ5IHRoZSBsaWJyYXJ5IGZvciBvYmplY3RzLCBzbyB0aGV5XG4gKiAgICAgY2FuIGFsc28gYmUgdXNlZC5cbiAqIEBwYXJhbSB7bW9kdWxlOnhkdWNlLlRyYW5zZHVjZXJGdW5jdGlvbn0gW3hmb3JtXSBBIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyBhIHRyYW5zZHVjZXJcbiAqICAgICBvYmplY3QgdGhhdCBkZWZpbmVzIHRoZSB0cmFuc2Zvcm1hdGlvbiBiZWluZyBkb25lIHRvIHRoZSBpbnB1dFxuICogICAgIGNvbGxlY3Rpb24ncyBlbGVtZW50cy4gQW55IG9mIHRoZSB0cmFuc2R1Y2VycyBpbiB0aGVcbiAqICAgICB7QGxpbmsgbW9kdWxlOnRyYW5zZHVjZXJzfHRyYW5zZHVjZXJzfSBtb2R1bGUgY2FuIHByb2R1Y2UgYSBzdWl0YWJsZVxuICogICAgIHRyYW5zZHVjZXIgZnVuY3Rpb24uXG4gKiBAcGFyYW0geyhtb2R1bGU6eGR1Y2UuU3RlcEZ1bmN0aW9ufG1vZHVsZTp4ZHVjZS5SZWR1Y2VyKX0gcmVkdWNlciBFaXRoZXIgYVxuICogICAgIGZ1bmN0aW9uIG9yIGEgcmVkdWNlciBvYmplY3QgdGhhdCBpbXBsZW1lbnRzIHRoZSB0cmFuc2R1Y2VyIHByb3RvY29sc1xuICogICAgIChgaW5pdGAgaXMgIG9ubHkgcmVxdWlyZWQgaWYgdGhlIGBpbml0YCBwYXJhbWV0ZXIgaXMgbm90IHByZXNlbnQpLiBUaGlzXG4gKiAgICAgb2JqZWN0IG11c3Qga25vdyBob3cgdG8gcHJvZHVjZSBhbiBvdXRwdXQgY29sbGVjdGlvbiB0aHJvdWdoIGl0cyBgc3RlcGBcbiAqICAgICBhbmQgYHJlc3VsdGAgcHJvdG9jb2wgZnVuY3Rpb25zLiBJZiB0aGlzIHBhcmFtZXRlciBpcyBhIGZ1bmN0aW9uLCB0aGVuIGl0XG4gKiAgICAgaXMgdHVybmVkIGludG8gYSB2YWxpZCByZWR1Y2VyIG9iamVjdC5cbiAqIEBwYXJhbSB7bW9kdWxlOnhkdWNlLlJlZHVjaWJsZX0gW2luaXRdIEEgY29sbGVjdGlvbiBvZiB0aGUgc2FtZSB0eXBlIGFzIHRoZVxuICogICAgIG91dHB1dCBjb2xsZWN0aW9uLiBJZiB0aGlzIGlzIG5vdCBwcmVzZW50LCB0aGVuIHRoZSByZWR1Y2VyJ3MgYGluaXRgXG4gKiAgICAgcHJvdG9jb2wgZnVuY3Rpb24gaXMgY2FsbGVkIGluc3RlYWQgdG8gZ2V0IHRoZSBpbml0aWFsIGNvbGxlY3Rpb24uIElmIGl0XG4gKiAgICAgaXMgcHJlc2VudCBhbmQgbm90IGVtcHR5LCB0aGVuIHRoZSBleGlzdGluZyBlbGVtZW50cyByZW1haW4gYW5kIHRoZVxuICogICAgIHRyYW5zZm9ybWVkIGlucHV0IGNvbGxlY3Rpb24gZWxlbWVudHMgYXJlIGFkZGVkIHRvIGl0LlxuICogQHJldHVybiB7Kn0gQSBjb2xsZWN0aW9uIG9mIGEgdHlwZSBkZXRlcm1pbmVkIGJ5IHRoZSBwYXNzZWQgcmVkdWNlci4gVGhlXG4gKiAgICAgZWxlbWVudHMgb2YgdGhpcyBjb2xsZWN0aW9uIGFyZSB0aGUgcmVzdWx0cyBmcm9tIHRoZSB0cmFuc2Zvcm1lciBmdW5jdGlvblxuICogICAgIGJlaW5nIGFwcGxpZWQgdG8gZWFjaCBlbGVtZW50IG9mIHRoZSBpbnB1dCBjb2xsZWN0aW9uLlxuICovXG5mdW5jdGlvbiB0cmFuc2R1Y2UoY29sbGVjdGlvbiwgeGZvcm0sIHJlZHVjZXIsIGluaXQpIHtcbiAgY29uc3QgciA9IGlzRnVuY3Rpb24ocmVkdWNlcikgPyB0b1JlZHVjZXIocmVkdWNlcikgOiByZWR1Y2VyO1xuICBjb25zdCBpID0gaW5pdCA/PyByW3AuaW5pdF0oKTtcbiAgY29uc3QgeGYgPSB4Zm9ybSA/IHhmb3JtKHIpIDogcjtcbiAgcmV0dXJuIHJlZHVjZShjb2xsZWN0aW9uLCB4ZiwgaSk7XG59XG5cbi8qKlxuICogVHJhbnNmb3JtcyB0aGUgZWxlbWVudHMgb2YgdGhlIGlucHV0IGNvbGxlY3Rpb24gYW5kIHJlZHVjZXMgdGhlbSBpbnRvIGEgbmV3XG4gKiBhcnJheS5cbiAqXG4gKiBUaGUgdHJhbnNmb3JtZXIgaXMgb3B0aW9uYWwuIElmIGl0IGlzbid0IHByZXNlbnQsIHRoaXMgZnVuY3Rpb24ganVzdCBjb252ZXJ0c1xuICogdGhlIGlucHV0IGNvbGxlY3Rpb24gaW50byBhbiBhcnJheS5cbiAqXG4gKiBgYGBcbiAqIGltcG9ydCB7IGFzQXJyYXkgfSBmcm9tIFwiQGNoYW5rby94ZHVjZVwiO1xuICogaW1wb3J0IHsgbWFwIH0gZnJvbSBcIkBjaGFua28vdHJhbnNkdWNlcnNcIjtcbiAqXG4gKiBjb25zdCB4Zm9ybSA9IG1hcCh4ID0+IHggKyAxKTtcbiAqXG4gKiBsZXQgcmVzdWx0ID0gYXNBcnJheShbMSwgMiwgMywgNCwgNV0sIHhmb3JtKTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdCk7ICAgLy8gLT4gWzIsIDMsIDQsIDUsIDZdXG4gKlxuICogcmVzdWx0ID0gYXNBcnJheSgnMTIzNDUnLCB4Zm9ybSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQpOyAgIC8vIC0+IFsyLCAzLCA0LCA1LCA2XVxuICpcbiAqIHJlc3VsdCA9IGFzQXJyYXkoJzEyMzQ1Jyk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQpOyAgIC8vIC0+IFsxLCAyLCAzLCA0LCA1XVxuICpcbiAqIHJlc3VsdCA9IGFzQXJyYXkoe2E6IDEsIGI6IDJ9KTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdCk7ICAgLy8gLT4gW3sgYTogMSB9LCB7IGI6IDIgfV1cbiAqIGBgYFxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwYXJhbSB7bW9kdWxlOnhkdWNlLkl0ZXJhYmxlfSBjb2xsZWN0aW9uIFRoZSBpbnB1dCBjb2xsZWN0aW9uLiBUaGUgb25seVxuICogICAgIHJlcXVpcmVtZW50IG9mIHRoaXMgY29sbGVjdGlvbiBpcyB0aGF0IGl0IGltcGxlbWVudCB0aGUgYGl0ZXJhYmxlYFxuICogICAgIHByb3RvY29sLiBTcGVjaWFsIHN1cHBvcnQgaXMgcHJvdmlkZWQgYnkgdGhlIGxpYnJhcnkgZm9yIG9iamVjdHMsIHNvIHRoZXlcbiAqICAgICBjYW4gYWxzbyBiZSB1c2VkLlxuICogQHBhcmFtIHttb2R1bGU6eGR1Y2UuVHJhbnNkdWNlckZ1bmN0aW9ufSBbeGZvcm1dIEEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIGEgdHJhbnNkdWNlclxuICogICAgIG9iamVjdCB0aGF0IGRlZmluZXMgdGhlIHRyYW5zZm9ybWF0aW9uIGJlaW5nIGRvbmUgdG8gdGhlIGlucHV0XG4gKiAgICAgY29sbGVjdGlvbidzIGVsZW1lbnRzLiBBbnkgb2YgdGhlIHRyYW5zZHVjZXJzIGluIHRoZVxuICogICAgIHtAbGluayBtb2R1bGU6dHJhbnNkdWNlcnN8dHJhbnNkdWNlcnN9IG1vZHVsZSBjYW4gcHJvZHVjZSBhIHN1aXRhYmxlXG4gKiAgICAgdHJhbnNkdWNlciBmdW5jdGlvbi4gSWYgdGhpcyBpc24ndCBwcmVzZW50LCB0aGUgaW5wdXQgY29sbGVjdGlvbiB3aWxsXG4gKiAgICAgc2ltcGx5IGJlIHJlZHVjZWQgaW50byBhbiBhcnJheSB3aXRob3V0IHRyYW5zZm9ybWF0aW9uLlxuICogQHJldHVybiB7QXJyYXl9IEFuIGFycmF5IGNvbnRhaW5pbmcgYWxsIG9mIHRoZSB0cmFuc2Zvcm1lZCB2YWx1ZXMgZnJvbSB0aGVcbiAqICAgICBpbnB1dCBjb2xsZWN0aW9uIGVsZW1lbnRzLlxuICovXG5mdW5jdGlvbiBhc0FycmF5KGNvbGxlY3Rpb24sIHhmb3JtKSB7XG4gIHJldHVybiB0cmFuc2R1Y2UoY29sbGVjdGlvbiwgeGZvcm0sIEFSUkFZX1JFRFVDRVIpO1xufVxuXG4vKipcbiAqIFRyYW5zZm9ybXMgdGhlIGVsZW1lbnRzIG9mIHRoZSBpbnB1dCBjb2xsZWN0aW9uIGFuZCByZWR1Y2VzIHRoZW0gaW50byBhIG5ld1xuICogb2JqZWN0LlxuICpcbiAqIFRoZSB0cmFuc2Zvcm1lciBpcyBvcHRpb25hbC4gSWYgaXQgaXNuJ3QgcHJlc2VudCwgdGhpcyBmdW5jdGlvbiBqdXN0IGNvbnZlcnRzXG4gKiB0aGUgaW5wdXQgY29sbGVjdGlvbiBpbnRvIGFuIG9iamVjdC4gV2hlbiB0aGlzIGhhcHBlbnMsIGlmIHRoZSBpbnB1dFxuICogY29sbGVjdGlvbiBpcyBub3QgYW4gb2JqZWN0IG9yIGFuIGFycmF5IG9mIG9iamVjdHMsIG51bWJlcnMgc3RhcnRpbmcgYXQgYDBgXG4gKiB3aWxsIGJlIHVzZWQgYXMga2V5cyBmb3IgdGhlIHZhbHVlcyBwcm92aWRlZCBieSB0aGUgaW5wdXQgY29sbGVjdGlvbi5cbiAqXG4gKiBgYGBcbiAqIGltcG9ydCB7IGFzT2JqZWN0LCBrdiB9IGZyb20gXCJAY2hhbmtvL3hkdWNlXCI7XG4gKiBpbXBvcnQgeyBtYXAgfSBmcm9tIFwiQGNoYW5rby90cmFuc2R1Y2Vyc1wiO1xuICpcbiAqIGNvbnN0IGZuID0gcHJvcCA9PiB7XG4gKiAgIGNvbnN0IHsgaywgdiB9ID0ga3YocHJvcCk7XG4gKiAgIHJldHVybiB7IFtrXTogdiArIDEgfTtcbiAqIH1cbiAqIGNvbnN0IHhmb3JtID0gbWFwKGZuKTtcbiAqXG4gKiBsZXQgcmVzdWx0ID0gYXNPYmplY3QoeyBhOiAxLCBiOiAyIH0sIHhmb3JtKTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdCk7ICAgLy8gLT4geyBhOiAyLCBiOiAzIH1cbiAqXG4gKiByZXN1bHQgPSBhc09iamVjdChbeyBhOiAxIH0sIHsgYjogMiB9XSwgeGZvcm0pO1xuICogY29uc29sZS5sb2cocmVzdWx0KTsgICAvLyAtPiB7IGE6IDIsIGI6IDMgfVxuICpcbiAqIHJlc3VsdCA9IGFzT2JqZWN0KFsxLCAyLCAzLCA0LCA1XSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQpOyAgIC8vIC0+IHsgMDogMSwgMTogMiwgMjogMywgMzogNCwgNDogNSB9XG4gKlxuICogcmVzdWx0ID0gYXNPYmplY3QoW3sgYTogMSB9LCB7IGI6IDIgfV0pO1xuICogY29uc29sZS5sb2cocmVzdWx0KTsgICAvLyAtPiB7IGE6IDEsIGI6IDIgfVxuICpcbiAqIHJlc3VsdCA9IGFzT2JqZWN0KFwiaGVsbG9cIik7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQpOyAgIC8vIC0+IHsgMDogXCJoXCIsIDE6IFwiZVwiLCAyOiBcImxcIiwgMzogXCJsXCIsIDQ6IFwib1wiIH1cbiAqIGBgYFxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwYXJhbSB7bW9kdWxlOnhkdWNlLkl0ZXJhYmxlfSBjb2xsZWN0aW9uIFRoZSBpbnB1dCBjb2xsZWN0aW9uLiBUaGUgb25seVxuICogICAgIHJlcXVpcmVtZW50IG9mIHRoaXMgY29sbGVjdGlvbiBpcyB0aGF0IGl0IGltcGxlbWVudCB0aGUgYGl0ZXJhYmxlYFxuICogICAgIHByb3RvY29sLiBTcGVjaWFsIHN1cHBvcnQgaXMgcHJvdmlkZWQgYnkgdGhlIGxpYnJhcnkgZm9yIG9iamVjdHMsIHNvIHRoZXlcbiAqICAgICBjYW4gYWxzbyBiZSB1c2VkLlxuICogQHBhcmFtIHttb2R1bGU6eGR1Y2UuVHJhbmR1Y2VyfSBbeGZvcm1dIEEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIGEgdHJhbnNkdWNlclxuICogICAgIG9iamVjdCB0aGF0IGRlZmluZXMgdGhlIHRyYW5zZm9ybWF0aW9uIGJlaW5nIGRvbmUgdG8gdGhlIGlucHV0XG4gKiAgICAgY29sbGVjdGlvbidzIGVsZW1lbnRzLiBBbnkgb2YgdGhlIHRyYW5zZHVjZXJzIGluIHRoZVxuICogICAgIHtAbGluayBtb2R1bGU6dHJhbnNkdWNlcnN8dHJhbnNkdWNlcnN9IG1vZHVsZSBjYW4gcHJvZHVjZSBhIHN1aXRhYmxlXG4gKiAgICAgdHJhbnNkdWNlciBmdW5jdGlvbi4gSWYgdGhpcyBpc24ndCBwcmVzZW50LCB0aGUgaW5wdXQgY29sbGVjdGlvbiB3aWxsXG4gKiAgICAgc2ltcGx5IGJlIHJlZHVjZWQgaW50byBhbiBvYmplY3Qgd2l0aG91dCB0cmFuc2Zvcm1hdGlvbi5cbiAqIEByZXR1cm4ge09iamVjdH0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgYWxsIG9mIHRoZSB0cmFuc2Zvcm1lZCB2YWx1ZXMgZnJvbSB0aGVcbiAqICAgICBpbnB1dCBjb2xsZWN0aW9uIGVsZW1lbnRzLlxuICovXG5mdW5jdGlvbiBhc09iamVjdChjb2xsZWN0aW9uLCB4Zm9ybSkge1xuICByZXR1cm4gdHJhbnNkdWNlKGNvbGxlY3Rpb24sIHhmb3JtLCBPQkpFQ1RfUkVEVUNFUik7XG59XG5cbi8qKlxuICogVHJhbnNmb3JtcyB0aGUgZWxlbWVudHMgb2YgdGhlIGlucHV0IGNvbGxlY3Rpb24gYW5kIHJlZHVjZXMgdGhlbSBpbnRvIGEgbmV3XG4gKiBzdHJpbmcuXG4gKlxuICogVGhlIHRyYW5zZm9ybWVyIGlzIG9wdGlvbmFsLiBJZiBpdCBpc24ndCBwcmVzZW50LCB0aGlzIGZ1bmN0aW9uIGp1c3QgY29udmVydHNcbiAqIHRoZSBpbnB1dCBjb2xsZWN0aW9uIGludG8gYW4gc3RyaW5nLiBJZiB0aGlzIGlzIHRoZSBjYXNlIGFuZCB0aGUgaW5wdXRcbiAqIGNvbGxlY3Rpb24gaXMgYW4gb2JqZWN0LCBvbmx5IHRoZSB2YWx1ZXMgd2lsbCBiZSBjb25jYXRlbmF0ZWQgaW50byBhIHN0cmluZy5cbiAqXG4gKiBPdGhlcndpc2UsIHRyYW5zZm9ybWluZyBvYmplY3RzIGludG8gc3RyaW5ncyBvbmx5IG1ha2VzIG11Y2ggc2Vuc2UgaWYgdGhlXG4gKiB0cmFuc2R1Y2VyIHByb2R1Y2VzIG9ubHkgYSBzaW5nbGUgb3V0cHV0IGZyb20gZWFjaCBvZiB0aGUgb2JqZWN0cyBrZXkvdmFsdWVcbiAqIHBhaXJzLlxuICpcbiAqIGBgYFxuICogaW1wb3J0IHsgdHJhbnNkdWNlLCBrZXkgfSBmcm9tIFwiQGNoYW5rby94ZHVjZVwiO1xuICogaW1wb3J0IHsgbWFwIH0gZnJvbSBcIkBjaGFua28vdHJhbnNkdWNlcnNcIjtcbiAqXG4gKiBjb25zdCB4Zm9ybSA9IG1hcCh4ID0+IHgudG9VcHBlckNhc2UoKSk7XG4gKlxuICogbGV0IHJlc3VsdCA9IGFzU3RyaW5nKCdoZWxsbycsIHhmb3JtKTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdCk7ICAgLy8gLT4gXCJIRUxMT1wiXG4gKlxuICogcmVzdWx0ID0gYXNTdHJpbmcoWydoJywgJ2UnLCAnbCcsICdsJywgJ28nXSwgeGZvcm0pO1xuICogY29uc29sZS5sb2cocmVzdWx0KTsgICAvLyAtPiBcIkhFTExPXCJcbiAqXG4gKiByZXN1bHQgPSBhc1N0cmluZyh7IGE6IDEsIGM6IDIsIGI6IDMgfSwgbWFwKGtleSkpO1xuICogY29uc29sZS5sb2cocmVzdWx0KTsgICAvLyAtPiBcImFjYlwiXG4gKlxuICogcmVzdWx0ID0gYXNTdHJpbmcoWzEsIDIsIDMsIDQsIDVdKTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdCk7ICAgLy8gLT4gXCIxMjM0NVwiXG4gKlxuICogcmVzdWx0ID0gYXNTdHJpbmcoeyBhOiAxLCBjOiAyLCBiOiAzIH0pO1xuICogY29uc29sZS5sb2cocmVzdWx0KTsgICAvLyAtPiBcIjEyM1wiXG4gKiBgYGBcbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcGFyYW0ge21vZHVsZTp4ZHVjZS5JdGVyYWJsZX0gY29sbGVjdGlvbiBUaGUgaW5wdXQgY29sbGVjdGlvbi4gVGhlIG9ubHlcbiAqICAgICByZXF1aXJlbWVudCBvZiB0aGlzIGNvbGxlY3Rpb24gaXMgdGhhdCBpdCBpbXBsZW1lbnQgdGhlIGBpdGVyYWJsZWBcbiAqICAgICBwcm90b2NvbC4gU3BlY2lhbCBzdXBwb3J0IGlzIHByb3ZpZGVkIGJ5IHRoZSBsaWJyYXJ5IGZvciBvYmplY3RzLCBzbyB0aGV5XG4gKiAgICAgY2FuIGFsc28gYmUgdXNlZC5cbiAqIEBwYXJhbSB7bW9kdWxlOnhkdWNlLlRyYW5zZHVjZXJGdW5jdGlvbn0gW3hmb3JtXSBBIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyBhIHRyYW5zZHVjZXJcbiAqICAgICBvYmplY3QgdGhhdCBkZWZpbmVzIHRoZSB0cmFuc2Zvcm1hdGlvbiBiZWluZyBkb25lIHRvIHRoZSBpbnB1dFxuICogICAgIGNvbGxlY3Rpb24ncyBlbGVtZW50cy4gQW55IG9mIHRoZSB0cmFuc2R1Y2VycyBpbiB0aGVcbiAqICAgICB7QGxpbmsgbW9kdWxlOnRyYW5zZHVjZXJzfHRyYW5zZHVjZXJzfSBtb2R1bGUgY2FuIHByb2R1Y2UgYSBzdWl0YWJsZVxuICogICAgIHRyYW5zZHVjZXIgZnVuY3Rpb24uIElmIHRoaXMgaXNuJ3QgcHJlc2VudCwgdGhlIGlucHV0IGNvbGxlY3Rpb24gd2lsbFxuICogICAgIHNpbXBseSBiZSByZWR1Y2VkIGludG8gYSBzdHJpbmcgd2l0aG91dCB0cmFuc2Zvcm1hdGlvbi5cbiAqIEByZXR1cm4ge1N0cmluZ30gQSBzdHJpbmcgY29udGFpbmluZyBhbGwgb2YgdGhlIHRyYW5zZm9ybWVkIHZhbHVlcyBmcm9tIHRoZVxuICogICAgIGlucHV0IGNvbGxlY3Rpb24gZWxlbWVudHMuXG4gKi9cbmZ1bmN0aW9uIGFzU3RyaW5nKGNvbGxlY3Rpb24sIHhmb3JtKSB7XG4gIHJldHVybiB0cmFuc2R1Y2UoY29sbGVjdGlvbiwgeGZvcm0sIFNUUklOR19SRURVQ0VSKTtcbn1cblxuLyoqXG4gKiBUcmFuc2Zvcm1zIHRoZSBlbGVtZW50cyBvZiB0aGUgaW5wdXQgY29sbGVjdGlvbiBhbmQgcmVkdWNlcyB0aGVtIGludG8gYSBuZXdcbiAqIGl0ZXJhdG9yLlxuICpcbiAqIFRoZSB0cmFuc2Zvcm1lciBpcyBvcHRpb25hbC4gSWYgaXQgaXNuJ3QgcHJlc2VudCwgdGhpcyBmdW5jdGlvbiBqdXN0IGNvbnZlcnRzXG4gKiB0aGUgaW5wdXQgY29sbGVjdGlvbiBpbnRvIGFuIGl0ZXJhdG9yLlxuICpcbiAqICooVGhlIHJlc3VsdHMgaGVyZSBhcmUgc2hvd24gcGFzc2VkIHRocm91Z2ggYGFzQXJyYXlgIGJlY2F1c2UgdGhlcmUncyBub1xuICogcHJpbnRhYmxlIHJlcHJlc2VudGF0aW9uIG9mIGFuIGl0ZXJhdG9yIHRvIHNob3cuIFRoZSBgYXNBcnJheWAgY2FsbHMgYXJlIGZvclxuICogZGVtb25zdHJhdGlvbiBwdXJwb3NlcyBvbmx5LikqXG4gKlxuICogYGBgXG4gKiBpbXBvcnQgeyBhc0l0ZXJhdG9yLCBhc0FycmF5IH0gZnJvbSBcIkBjaGFua28veGR1Y2VcIjtcbiAqIGltcG9ydCB7IG1hcCB9IGZyb20gXCJAY2hhbmtvL3RyYW5zZHVjZXJzXCI7XG4gKlxuICogY29uc3QgeGZvcm0gPSBtYXAoeCA9PiB4ICsgMSk7XG4gKiBmdW5jdGlvbiogZml2ZSgpIHtcbiAqICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNTsgKytpKSB7XG4gKiAgICAgeWllbGQgaTtcbiAqICAgfVxuICogfTtcbiAqXG4gKiBsZXQgcmVzdWx0ID0gYXNJdGVyYXRvcihmaXZlKCksIHhmb3JtKTtcbiAqIGNvbnNvbGUubG9nKGFzQXJyYXkocmVzdWx0KSk7ICAgLy8gLT4gWzIsIDMsIDQsIDUsIDZdXG4gKlxuICogcmVzdWx0ID0gYXNJdGVyYXRvcihbMSwgMiwgMywgNCwgNV0sIHhmb3JtKTtcbiAqIGNvbnNvbGUubG9nKGFzQXJyYXkocmVzdWx0KSk7ICAgLy8gLT4gWzIsIDMsIDQsIDUsIDZdXG4gKlxuICogcmVzdWx0ID0gYXNJdGVyYXRvcihbMSwgMiwgMywgNCwgNV0pO1xuICogY29uc29sZS5sb2coYXNBcnJheShyZXN1bHQpKTsgICAvLyAtPiBbMSwgMiwgMywgNCwgNV1cbiAqXG4gKiByZXN1bHQgPSBhc0l0ZXJhdG9yKHthOiAxLCBiOiAyfSk7XG4gKiBjb25zb2xlLmxvZyhhc0FycmF5KHJlc3VsdCkpOyAgIC8vIC0+IFt7IGE6IDEgfSwgeyBiOiAyIH1dXG4gKiBgYGBcbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcGFyYW0ge21vZHVsZTp4ZHVjZS5JdGVyYWJsZX0gY29sbGVjdGlvbiBUaGUgaW5wdXQgY29sbGVjdGlvbi4gVGhlIG9ubHlcbiAqICAgICByZXF1aXJlbWVudCBvZiB0aGlzIGNvbGxlY3Rpb24gaXMgdGhhdCBpdCBpbXBsZW1lbnQgdGhlIGBpdGVyYWJsZWBcbiAqICAgICBwcm90b2NvbC4gU3BlY2lhbCBzdXBwb3J0IGlzIHByb3ZpZGVkIGJ5IHRoZSBsaWJyYXJ5IGZvciBvYmplY3RzLCBzbyB0aGV5XG4gKiAgICAgY2FuIGFsc28gYmUgdXNlZC5cbiAqIEBwYXJhbSB7bW9kdWxlOnhkdWNlLlRyYW5zZHVjZXJGdW5jdGlvbn0gW3hmb3JtXSBBIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyBhIHRyYW5zZHVjZXJcbiAqICAgICBvYmplY3QgdGhhdCBkZWZpbmVzIHRoZSB0cmFuc2Zvcm1hdGlvbiBiZWluZyBkb25lIHRvIHRoZSBpbnB1dFxuICogICAgIGNvbGxlY3Rpb24ncyBlbGVtZW50cy4gQW55IG9mIHRoZSB0cmFuc2R1Y2VycyBpbiB0aGVcbiAqICAgICB7QGxpbmsgbW9kdWxlOnRyYW5zZHVjZXJzfHRyYW5zZHVjZXJzfSBtb2R1bGUgY2FuIHByb2R1Y2UgYSBzdWl0YWJsZVxuICogICAgIHRyYW5zZHVjZXIgZnVuY3Rpb24uIElmIHRoaXMgaXNuJ3QgcHJlc2VudCwgdGhlIGlucHV0IGNvbGxlY3Rpb24gd2lsbFxuICogICAgIHNpbXBseSBiZSByZWR1Y2VkIGludG8gYW4gaXRlcmF0b3Igd2l0aG91dCB0cmFuc2Zvcm1hdGlvbi5cbiAqIEByZXR1cm4ge21vZHVsZTp4ZHVjZS5JdGVyYXRvcn0gQW4gaXRlcmF0b3IgY29udGFpbmluZyBhbGwgb2YgdGhlIHRyYW5zZm9ybWVkXG4gKiAgICAgdmFsdWVzIGZyb20gdGhlIGlucHV0IGNvbGxlY3Rpb24gZWxlbWVudHMuXG4gKi9cbmZ1bmN0aW9uIGFzSXRlcmF0b3IoY29sbGVjdGlvbiwgeGZvcm0pIHtcbiAgcmV0dXJuIHhmb3JtID8gdHJhbnNkdWNpbmdJdGVyYXRvcihjb2xsZWN0aW9uLCB4Zm9ybSkgOiBpdGVyYXRvcihjb2xsZWN0aW9uKTtcbn1cblxuLyoqXG4gKiBUcmFuc2Zvcm1zIHRoZSBlbGVtZW50cyBvZiB0aGUgaW5wdXQgY29sbGVjdGlvbiBhbmQgcmVkdWNlcyB0aGVtIGludG8gYSBuZXdcbiAqIGNvbGxlY3Rpb24gb2YgdGhlIHNhbWUgdHlwZS5cbiAqXG4gKiBUaGlzIGlzIHRoZSBoaWdoZXN0IGxldmVsIG9mIHRoZSB0aHJlZSBtYWluIHRyYW5zZHVjdGlvbiBmdW5jdGlvbnNcbiAqIChgc2VxdWVuY2VgLCBge0BsaW5rIG1vZHVsZTp4ZHVjZS5pbnRvfGludG99YCwgYW5kXG4gKiBge0BsaW5rIG1vZHVsZTp4ZHVjZS50cmFuc2R1Y2V8dHJhbnNkdWNlfWApLiBJdCBjcmVhdGVzIGEgbmV3IGNvbGxlY3Rpb24gb2ZcbiAqIHRoZSBzYW1lIHR5cGUgYXMgdGhlIGlucHV0IGNvbGxlY3Rpb24gYW5kIHJlZHVjZXMgdGhlIHRyYW5zZm9ybWVkIGVsZW1lbnRzXG4gKiBpbnRvIGl0LiBBZGRpdGlvbmFsbHksIHVubGlrZSBge0BsaW5rIG1vZHVsZTp4ZHVjZS5pbnRvfGludG99YCBhbmRcbiAqIGB7QGxpbmsgbW9kdWxlOnhkdWNlLnRyYW5zZHVjZXx0cmFuc2R1Y2V9YCwgdGhpcyBmdW5jdGlvbiBpcyBjYXBhYmxlIG9mXG4gKiBwcm9kdWNpbmcgYW4gaXRlcmF0b3IgKGFzIGxvbmcgYXMgdGhlIGlucHV0IGlzIGFuIGl0ZXJhdG9yKS5cbiAqXG4gKiBUaGUgaW5wdXQgY29sbGVjdGlvbiBtdXN0IG5vdCBvbmx5IGltcGxlbWVudCB0aGUgYGl0ZXJhdG9yYCBwcm90b2NvbCAoYXMgaW5cbiAqIHRoZSBsYXN0IHR3byBmdW5jdGlvbnMpIGJ1dCBhbHNvIHRoZSBgaW5pdGAsIGByZXN1bHRgLCBhbmQgYHN0ZXBgIHRyYW5zZHVjZXJcbiAqIHByb3RvY29scy4gU3BlY2lhbCBzdXBwb3J0IGlzIHByb3ZpZGVkIGZvciBhcnJheXMsIHN0cmluZ3MsIG9iamVjdHMsIGFuZFxuICogaXRlcmF0b3JzLCBzbyB0aGV5IG5lZWQgbm90IGltcGxlbWVudCBhbnkgcHJvdG9jb2wuXG4gKlxuICogVGhlIG9idmlvdXMgbGltaXRhdGlvbiBvZiB0aGlzIGZ1bmN0aW9uIGlzIHRoYXQgdGhlIHR5cGUgb2Ygb3V0cHV0IGNvbGxlY3Rpb25cbiAqIGNhbm5vdCBiZSBjaG9zZW4uIFNpbmNlIGl0IGlzIGFsd2F5cyB0aGUgc2FtZSBhcyB0aGUgaW5wdXQgY29sbGVjdGlvbiwgdGhpc1xuICogZnVuY3Rpb24gY2Fubm90IGJlIHVzZWQgdG8gY29udmVydCBhIGNvbGxlY3Rpb24gaW50byBhIGRpZmZlcmVudCB0eXBlLlxuICpcbiAqIGBgYFxuICogaW1wb3J0IHsgc2VxdWVuY2UgfSBmcm9tIFwiQGNoYW5rby94ZHVjZVwiO1xuICogaW1wb3J0IHsgbWFwIH0gZnJvbSBcIkBjaGFua28vdHJhbnNkdWNlcnNcIjtcbiAqXG4gKiBjb25zdCB4Zm9ybSA9IG1hcCh4ID0+IHggKyAxKTtcbiAqXG4gKiBsZXQgcmVzdWx0ID0gc2VxdWVuY2UoWzEsIDIsIDMsIDQsIDVdLCB4Zm9ybSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQpOyAgIC8vIC0+IHJlc3VsdCA9IFsyLCAzLCA0LCA1LCA2XVxuICpcbiAqIHJlc3VsdCA9IHNlcXVlbmNlKCcxMjM0NScsIHhmb3JtKTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdCk7ICAgLy8gLT4gcmVzdWx0ID0gJzIzNDU2J1xuICogYGBgXG4gKlxuICogVGhlc2UgZXhhbXBsZXMgYXJlIGlkZW50aWNhbCB0byBzb21lIG9mIHRoZSBleGFtcGxlcyBmcm9tIHRoZSBgYXNYYFxuICogZnVuY3Rpb25zLiBPdGhlciBleGFtcGxlcyBhcmUgbm90IHBvc3NpYmxlIHdpdGggYHNlcXVlbmNlYCBiZWNhdXNlIHRoZXkgaGF2ZVxuICogZGlmZmVyZW50IGlucHV0IGFuZCBvdXRwdXQgY29sbGVjdGlvbiB0eXBlcy5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcGFyYW0ge21vZHVsZTp4ZHVjZS5SZWR1Y2libGVJdGVyYWJsZX0gY29sbGVjdGlvbiBUaGUgaW5wdXQgY29sbGVjdGlvbi4gVGhpc1xuICogICAgIG11c3QgaW1wbGVtZW50IHRoZSBgaXRlcmF0b3JgLCBgaW5pdGAsIGByZXN1bHRgLCBhbmQgYHN0ZXBgIHByb3RvY29scy5cbiAqICAgICBTcGVjaWFsIHN1cHBvcnQgaXMgcHJvdmlkZWQgZm9yIGFycmF5cywgc3RyaW5ncywgb2JqZWN0cywgYW5kIGl0ZXJhdG9ycyxcbiAqICAgICBzbyB0aGV5IGRvIG5vdCBoYXZlIHRvIGltcGxlbWVudCBhbnkgcHJvdG9jb2xzLlxuICogQHBhcmFtIHttb2R1bGU6eGR1Y2UuVHJhbnNkdWNlckZ1bmN0aW9ufSB4Zm9ybSBBIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyBhIHRyYW5zZHVjZXJcbiAqICAgICBvYmplY3QgdGhhdCBkZWZpbmVzIHRoZSB0cmFuc2Zvcm1hdGlvbiBiZWluZyBkb25lIHRvIHRoZSBpbnB1dFxuICogICAgIGNvbGxlY3Rpb24ncyBlbGVtZW50cy4gQW55IG9mIHRoZSB0cmFuc2R1Y2VycyBpbiB0aGVcbiAqICAgICB7QGxpbmsgbW9kdWxlOnhkdWNlLnRyYW5zZHVjZXJzfHRyYW5zZHVjZXJzfSBtb2R1bGUgY2FuIHByb2R1Y2UgYVxuICogICAgIHN1aXRhYmxlIHRyYW5zZHVjZXIgZnVuY3Rpb24uXG4gKiBAcmV0dXJuIHttb2R1bGU6eGR1Y2UuUmVkdWNpYmxlSXRlcmFibGV9IEEgY29sbGVjdGlvbiBvZiB0aGUgc2FtZSB0eXBlIGFzIHRoZVxuICogICAgIGlucHV0IGNvbGxlY3Rpb24sIGNvbnRhaW5pbmcgYWxsIG9mIHRoZSB0cmFuc2Zvcm1lZCB2YWx1ZXMgZnJvbSB0aGUgaW5wdXRcbiAqICAgICBjb2xsZWN0aW9uIGVsZW1lbnRzLlxuICovXG5mdW5jdGlvbiBzZXF1ZW5jZShjb2xsZWN0aW9uLCB4Zm9ybSkge1xuICBzd2l0Y2ggKHRydWUpIHtcbiAgICBjYXNlIGlzQXJyYXkoY29sbGVjdGlvbik6XG4gICAgICByZXR1cm4gYXNBcnJheShjb2xsZWN0aW9uLCB4Zm9ybSk7XG4gICAgY2FzZSBpc09iamVjdChjb2xsZWN0aW9uKTpcbiAgICAgIHJldHVybiBhc09iamVjdChjb2xsZWN0aW9uLCB4Zm9ybSk7XG4gICAgY2FzZSBpc1N0cmluZyhjb2xsZWN0aW9uKTpcbiAgICAgIHJldHVybiBhc1N0cmluZyhjb2xsZWN0aW9uLCB4Zm9ybSk7XG4gICAgY2FzZSBpc0ltcGxlbWVudGVkKGNvbGxlY3Rpb24sIFwic3RlcFwiKTpcbiAgICAgIHJldHVybiB0cmFuc2R1Y2UoY29sbGVjdGlvbiwgeGZvcm0sIGNvbGxlY3Rpb24pO1xuICAgIGNhc2UgaXNJbXBsZW1lbnRlZChjb2xsZWN0aW9uLCBcIml0ZXJhdG9yXCIpOlxuICAgICAgcmV0dXJuIGFzSXRlcmF0b3IoY29sbGVjdGlvbiwgeGZvcm0pO1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBFcnJvcihgQ2Fubm90IHNlcXVlbmNlIGNvbGxlY3Rpb246ICR7Y29sbGVjdGlvbn1gKTtcbiAgfVxufVxuXG4vKipcbiAqIFRyYW5zZm9ybXMgdGhlIGVsZW1lbnRzIG9mIHRoZSBpbnB1dCBjb2xsZWN0aW9uIGFuZCByZWR1Y2VzIHRoZW0gaW50byB0aGVcbiAqIHRhcmdldCBjb2xsZWN0aW9uLlxuICpcbiAqIFRoaXMgaXMgbXVjaCBsaWtlIGB7QGxpbmsgbW9kdWxlOnhkdWNlLnRyYW5zZHVjZXx0cmFuc2R1Y2V9YCwgZXhjZXB0IHRoYXRcbiAqIGluc3RlYWQgb2YgZXhwbGljaXRseSBwcm92aWRpbmcgYSByZWR1Y2VyIChhbmQgcGVyaGFwcyBhbiBpbml0aWFsXG4gKiBjb2xsZWN0aW9uKSwgdGhlIHRhcmdldCBjb2xsZWN0aW9uIGFjdHMgYXMgYSByZWR1Y2VyIGl0c2VsZi4gVGhpcyByZXF1aXJlc1xuICogdGhhdCB0aGUgY29sbGVjdGlvbiBpbXBsZW1lbnQgdGhlIGBpbml0YCwgYHJlc3VsdGAsIGFuZCBgc3RlcGAgdHJhbnNkdWNlclxuICogcHJvdG9jb2wgZnVuY3Rpb25zLlxuICpcbiAqIElmIG5vIHRyYW5zZHVjZXIgZnVuY3Rpb24gaXMgcHJvdmlkZWQsIHRoZSBpbnB1dCBjb2xsZWN0aW9uIGVsZW1lbnRzIGFyZVxuICogcmVkdWNlZCBpbnRvIHRoZSB0YXJnZXQgY29sbGVjdGlvbiB3aXRob3V0IGJlaW5nIHRyYW5zZm9ybWVkLiBUaGlzIGNhbiBiZVxuICogdXNlZCB0byBjb252ZXJ0IG9uZSBraW5kIG9mIGNvbGxlY3Rpb24gaW50byBhbm90aGVyLlxuICpcbiAqIGBgYFxuICogaW1wb3J0IHsgaW50byB9IGZyb20gXCJAY2hhbmtvL3hkdWNlXCI7XG4gKiBpbXBvcnQgeyBtYXAgfSBmcm9tIFwiQGNoYW5rby90cmFuc2R1Y2Vyc1wiO1xuICpcbiAqIGNvbnN0IHhmb3JtID0gbWFwKHggPT4geCArIDEpO1xuICpcbiAqIGxldCByZXN1bHQgPSBpbnRvKFtdLCBbMSwgMiwgMywgNCwgNV0sIHhmb3JtKTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdCk7ICAgLy8gLT4gWzIsIDMsIDQsIDUsIDZdXG4gKlxuICogcmVzdWx0ID0gaW50byhcIlwiLCBbMSwgMiwgMywgNCwgNV0sIHhmb3JtKTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdCk7ICAgLy8gLT4gXCIyMzQ1NlwiXG4gKlxuICogcmVzdWx0ID0gaW50byhbXSwgXCIxMjM0NVwiLCB4Zm9ybSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQpOyAgIC8vIC0+IFsyLCAzLCA0LCA1LCA2XVxuICpcbiAqIHJlc3VsdCA9IGludG8oXCJcIiwgXCIxMjM0NVwiLCB4Zm9ybSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQpOyAgIC8vIC0+IFwiMjM0NTZcIlxuICogYGBgXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHBhcmFtIHttb2R1bGU6eGR1Y2UuUmVkdWNpYmxlfSB0YXJnZXQgVGhlIGNvbGxlY3Rpb24gaW50byB3aGljaCBhbGwgb2YgdGhlXG4gKiAgICAgdHJhbnNmb3JtZWQgaW5wdXQgY29sbGVjdGlvbiBlbGVtZW50cyB3aWxsIGJlIHJlZHVjZWQuIFRoaXMgY29sbGVjdGlvblxuICogICAgIG11c3QgaW1wbGVtZW50IHRoZSBgaW5pdGAsIGByZXN1bHRgLCBhbmQgYHN0ZXBgIHByb3RvY29sIGZ1bmN0aW9ucyBmcm9tXG4gKiAgICAgdGhlIHRyYW5zZHVjZXIgcHJvdG9jb2wuIFNwZWNpYWwgc3VwcG9ydCBpcyBwcm92aWRlZCBmb3IgYXJyYXlzLCBzdHJpbmdzLFxuICogICAgIGFuZCBvYmplY3RzLCBzbyB0aGV5IG5lZWQgbm90IGltcGxlbWVudCB0aGUgcHJvdG9jb2wuXG4gKiBAcGFyYW0ge21vZHVsZTp4ZHVjZS5JdGVyYWJsZX0gY29sbGVjdGlvbiBUaGUgaW5wdXQgY29sbGVjdGlvbi4gVGhlIG9ubHlcbiAqICAgICByZXF1aXJlbWVudCBvZiB0aGlzIGNvbGxlY3Rpb24gaXMgdGhhdCBpdCBpbXBsZW1lbnQgdGhlIGBpdGVyYXRvcmBcbiAqICAgICBwcm90b2NvbC4gU3BlY2lhbCBzdXBwb3J0IGlzIHByb3ZpZGVkIGJ5IHRoZSBsaWJyYXJ5IGZvciBvYmplY3RzLCB0byB0aGV5XG4gKiAgICAgY2FuIGFsc28gYmUgdXNlZC5cbiAqIEBwYXJhbSB7bW9kdWxlOnhkdWNlLlRyYW5zZHVjZXJGdW5jdGlvbn0gW3hmb3JtXSBBIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyBhIHRyYW5zZHVjZXJcbiAqICAgICBvYmplY3QgdGhhdCBkZWZpbmVzIHRoZSB0cmFuc2Zvcm1hdGlvbiBiZWluZyBkb25lIHRvIHRoZSBpbnB1dFxuICogICAgIGNvbGxlY3Rpb24ncyBlbGVtZW50cy4gQW55IG9mIHRoZSB0cmFuc2R1Y2VycyBpbiB0aGVcbiAqICAgICB7QGxpbmsgbW9kdWxlOnRyYW5zZHVjZXJzfHRyYW5zZHVjZXJzfSBtbm9kdWxlIGNhbiBwcm9kdWNlIGEgc3VpdGFibGVcbiAqICAgICB0cmFuc2R1Y2VyIGZ1bmN0aW9uLiBJZiB0aGlzIGlzbid0IHByZXNlbnQsIHRoZSBpbnB1dCBjb2xsZWN0aW9uIHdpbGxcbiAqICAgICBzaW1wbHkgYmUgcmVkdWNlZCBpbnRvIHRoZSB0YXJnZXQgY29sbGVjdGlvbiB3aXRob3V0IHRyYW5zZm9ybWF0aW9uLlxuICogQHJldHVybiB7bW9kdWxlOnhkdWNlLlJlZHVjaWJsZX0gVGhlIGB0YXJnZXRgIGNvbGxlY3Rpb24sIHdpdGggYWxsIG9mIHRoZVxuICogICAgIHRyYW5mb3JtZWQgaW5wdXQgY29sbGVjdGlvbiBlbGVtZW50cyByZWR1Y2VkIG9udG8gaXQuXG4gKi9cbmZ1bmN0aW9uIGludG8odGFyZ2V0LCBjb2xsZWN0aW9uLCB4Zm9ybSkge1xuICBzd2l0Y2ggKHRydWUpIHtcbiAgICBjYXNlIGlzQXJyYXkodGFyZ2V0KTpcbiAgICAgIHJldHVybiB0cmFuc2R1Y2UoY29sbGVjdGlvbiwgeGZvcm0sIEFSUkFZX1JFRFVDRVIsIHRhcmdldCk7XG4gICAgY2FzZSBpc09iamVjdCh0YXJnZXQpOlxuICAgICAgcmV0dXJuIHRyYW5zZHVjZShjb2xsZWN0aW9uLCB4Zm9ybSwgT0JKRUNUX1JFRFVDRVIsIHRhcmdldCk7XG4gICAgY2FzZSBpc1N0cmluZyh0YXJnZXQpOlxuICAgICAgcmV0dXJuIHRyYW5zZHVjZShjb2xsZWN0aW9uLCB4Zm9ybSwgU1RSSU5HX1JFRFVDRVIsIHRhcmdldCk7XG4gICAgY2FzZSBpc0ltcGxlbWVudGVkKHRhcmdldCwgXCJzdGVwXCIpOlxuICAgICAgcmV0dXJuIHRyYW5zZHVjZShjb2xsZWN0aW9uLCB4Zm9ybSwgdGFyZ2V0LCB0YXJnZXQpO1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBFcnJvcihgQ2Fubm90IHJlZHVjZSBjb2xsZWN0aW9uIGludG8gJHt0YXJnZXR9OiAke2NvbGxlY3Rpb259YCk7XG4gIH1cbn1cblxuLyoqXG4gKiBDb21wb3NlcyB0d28gb3IgbW9yZSB0cmFuc2R1Y2VyIGZ1bmN0aW9ucyBpbnRvIGEgc2luZ2xlIHRyYW5zZHVjZXIgZnVuY3Rpb24uXG4gKlxuICogRWFjaCBmdW5jdGlvbiB0aGF0IHRha2VzIGEgdHJhbnNkdWNlciBmdW5jdGlvblxuICogKGB7QGxpbmsgbW9kdWxlOnhkdWNlLnNlcXVlbmNlfHNlcXVlbmNlfWAsIGB7QGxpbmsgbW9kdWxlOnhkdWNlLmludG98aW50b31gLFxuICogZXRjLikgaXMgb25seSBjYXBhYmxlIG9mIGFjY2VwdGluZyBvbmUgb2YgdGhlbS4gSWYgdGhlcmUgaXMgYSBuZWVkIHRvIGhhdmVcbiAqIHNldmVyYWwgdHJhbnNkdWNlcnMgY2hhaW5lZCB0b2dldGhlciwgdGhlbiB1c2UgYGNvbXBvc2VgIHRvIGNyZWF0ZSBhXG4gKiB0cmFuc2R1Y2VyIGZ1bmN0aW9uIHRoYXQgZG9lcyB3aGF0IGFsbCBvZiB0aGVtIGRvLlxuICpcbiAqIE5PVEU6IEluIGZ1bmN0aW9uYWwgcHJvZ3JhbW1pbmcsIGEgY29tcG9zZSBmdW5jdGlvbiBpcyBnZW5lcmFsbHkgb3JkZXJlZCBzb1xuICogdGhhdCB0aGUgZmlyc3QtZXhlY3V0ZWQgZnVuY3Rpb24gaXMgbGlzdGVkIGxhc3QuIFRoaXMgaXMgZG9uZSBpbiB0aGUgb3Bwb3NpdGVcbiAqIHdheSwgd2l0aCB0aGUgZmlyc3QgdHJhbnNkdWNlciBleGVjdXRpbmcgZmlyc3QsIGV0Yy4gVGhpcyBpcyBhIG1vcmUgbmF0dXJhbFxuICogb3JkZXJpbmcgZm9yIHRyYW5zZHVjZXIgZnVuY3Rpb25zIGJlY2F1c2UgdGhlcmUgaXMgYSB2ZXJ5IHJlYWwgZGlyZWN0aW9uYWxcbiAqIHB1bGwgb2YgZWxlbWVudHMgdGhyb3VnaCBhIGNoYWluIG9mIGNvbXBvc2VkIHRyYW5zZHVjZXIgZnVuY3Rpb25zLlxuICpcbiAqIGBgYFxuICogaW1wb3J0IHsgY29tcG9zZSwgc2VxdWVuY2UgfSBmcm9tIFwiQGNoYW5rby94ZHVjZVwiO1xuICogaW1wb3J0IHsgbWFwLCBmaWx0ZXIsIHRha2UgfSBmcm9tIFwiQGNoYW5rby90cmFuc2R1Y2Vyc1wiO1xuICpcbiAqIGNvbnN0IGFkZDEgPSB4ID0+IHggKyAxO1xuICogY29uc3Qgb2RkID0geCA9PiB4ICUgMiAhPT0gMDtcbiAqXG4gKiBjb25zdCB4Zm9ybSA9IGNvbXBvc2UobWFwKGFkZDEpLCBmaWx0ZXIob2RkKSwgdGFrZSgzKSk7XG4gKlxuICogY29uc3QgcmVzdWx0ID0gc2VxdWVuY2UoWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwXSwgeGZvcm0pO1xuICogY29uc29sZS5sb2cocmVzdWx0KTsgICAvLyAtPiBbMywgNSwgN107XG4gKiBgYGBcbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcGFyYW0gey4uLm1vZHVsZTp4ZHVjZS5UcmFuc2R1Y2VyRnVuY3Rpb259IGZucyBPbmUgb3IgbW9yZSBmdW5jdGlvbiB0aGF0IGVhY2ggY3JlYXRlXG4gKiAgICAgYSB0cmFuc2R1Y2VyIG9iamVjdCB0aGF0IGRlZmluZXMgdGhlIHRyYW5zZm9ybWF0aW9uIGJlaW5nIGRvbmUgdG8gYVxuICogICAgIGNvbGxlY3Rpb24ncyBlbGVtZW50cy4gQW55IG9mIHRoZSB0cmFuc2R1Y2VycyBpbiB0aGVcbiAqICAgICB7QGxpbmsgbW9kdWxlOnRyYW5zZHVjZXJzfHRyYW5zZHVjZXJzfSBtb2R1bGUgY2FuIHByb2R1Y2UgYSBzdWl0YWJsZVxuICogICAgIHRyYW5zZHVjZXIgZnVuY3Rpb24uXG4gKiBAcmV0dXJuIHttb2R1bGU6eGR1Y2UuVHJhbnNkdWNlckZ1bmN0aW9ufSBBIHRyYW5zZHVjZXIgZnVuY3Rpb24gdGhhdCBwcm9kdWNlcyBhXG4gKiAgICAgdHJhbnNkdWNlciBvYmplY3QgdGhhdCBwZXJmb3JtcyAqYWxsKiBvZiB0aGUgdHJhbnNmb3JtYXRpb25zIG9mIHRoZVxuICogICAgIG9iamVjdHMgcHJvZHVjZWQgYnkgdGhlIGlucHV0IHRyYW5zZHVjZXIgZnVuY3Rpb25zLlxuICovXG5mdW5jdGlvbiBjb21wb3NlKC4uLmZucykge1xuICBjb25zdCByZXZlcnNlZCA9IGZucy5yZXZlcnNlKCk7XG4gIHJldHVybiB2YWx1ZSA9PiByZXZlcnNlZC5yZWR1Y2UoKGFjYywgZm4pID0+IGZuKGFjYyksIHZhbHVlKTtcbn1cblxuZXhwb3J0IHtcbiAgdHJhbnNkdWNlLFxuICBzZXF1ZW5jZSxcbiAgaW50byxcbiAgYXNBcnJheSxcbiAgYXNPYmplY3QsXG4gIGFzU3RyaW5nLFxuICBhc0l0ZXJhdG9yLFxuICBjb21wb3NlXG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG5cbi8qKlxuICogQSBidW5jaCBvZiB1dGlsaXR5IGZ1bmN0aW9ucy4gVGhlc2UgYXJlIGFsbCB1c2VkIGJ5IHRoZSBsaWJyYXJ5IGl0c2VsZiBpblxuICogcGxhY2VzLCBidXQgbWFueSBvZiB0aGVtIGFyZSBzdWl0YWJsZSBmb3IgZ2VuZXJhbCB1c2UgYXMgd2VsbC5cbiAqIF5cbiAqIEBtb2R1bGUgeGR1Y2UvdXRpbHNcbiAqIEBwcml2YXRlXG4gKi9cblxuLyoqXG4gKiBgT2JqZWN0YCdzIGB0b1N0cmluZ2AgaXMgZXhwbGljaXRseSB1c2VkIHRocm91Z2hvdXQgYmVjYXVzZSBpdCBjb3VsZCBiZVxuICogcmVkZWZpbmVkIGluIGFueSBzdWJ0eXBlIG9mIGBPYmplY3RgLlxuICpcbiAqIEBmdW5jdGlvbiB0b1N0cmluZ1xuICogQHByaXZhdGVcbiAqL1xuY29uc3QgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhIHZhbHVlIGlzIGEgZnVuY3Rpb24uXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHBhcmFtIHsqfSB4IFRoZSB2YWx1ZSBiZWluZyB0ZXN0ZWQgdG8gc2VlIGlmIGl0IGlzIGEgZnVuY3Rpb24uXG4gKiBAcmV0dXJuIHtib29sZWFufSBFaXRoZXIgYHRydWVgIGlmIHRoZSB0ZXN0IHZhbHVlIGlzIGEgZnVuY3Rpb24gb3IgYGZhbHNlYCBpZlxuICogICAgIGl0IGlzIG5vdC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24oeCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh4KSA9PT0gXCJbb2JqZWN0IEZ1bmN0aW9uXVwiO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhIHZhbHVlIGlzIGEgZ2VuZXJhdG9yIGZ1bmN0aW9uLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwYXJhbSB7Kn0geCBUaGUgdmFsdWUgYmVpbmcgdGVzdGVkIHRvIHNlZSBpZiBpdCBpcyBhIGdlbmVyYXRvciBmdW5jdGlvbi5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IEVpdGhlciBgdHJ1ZWAgaWYgdGhlIHRlc3QgdmFsdWUgaXMgYSBnZW5lcmF0b3IgZnVuY3Rpb24gb3JcbiAqICAgICBgZmFsc2VgIGlmIGl0IGlzIG5vdC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGlzR2VuZXJhdG9yRnVuY3Rpb24oeCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh4KSA9PT0gXCJbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXVwiO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhIHZhbHVlIGlzIGEgcGxhaW4gb2JqZWN0LlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gcmV0dXJucyBgZmFsc2VgIGlmIHRoZSB2YWx1ZSBpcyBhbnkgb3RoZXIgc29ydCBvZiBidWlsdC1pblxuICogb2JqZWN0IChzdWNoIGFzIGFuIGFycmF5IG9yIGEgc3RyaW5nKS4gSXQgYWxzbyByZXR1cm5zIGBmYWxzZWAgZm9yIGFueSBvYmplY3RcbiAqIHRoYXQgaXMgY3JlYXRlZCBieSBhIGNvbnN0cnVjdG9yIHRoYXQgaXMgbm90IGBPYmplY3RgJ3MgY29uc3RydWN0b3IsIG1lYW5pbmdcbiAqIHRoYXQgXCJpbnN0YW5jZXNcIiBvZiBjdXN0b20gXCJjbGFzc2VzXCIgd2lsbCByZXR1cm4gYGZhbHNlYC4gVGhlcmVmb3JlIGl0J3Mgb25seVxuICogZ29pbmcgdG8gcmV0dXJuIGB0cnVlYCBmb3IgbGl0ZXJhbCBvYmplY3RzIG9yIHRob3NlIGNyZWF0ZWQgd2l0aFxuICogYE9iamVjdC5jcmVhdGUoKWAuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHBhcmFtIHsqfSB4IFRoZSB2YWx1ZSBiZWluZyB0ZXN0ZWQgdG8gc2VlIGlmIGl0IGlzIGEgcGxhaW4gb2JqZWN0LlxuICogQHJldHVybiB7Ym9vbGVhbn0gRWl0aGVyIGB0cnVlYCBpZiB0aGUgdGVzdCB2YWx1ZSBpcyBhIHBsYWluIG9iamVjdCBvclxuICogICAgIGBmYWxzZWAgaWYgaXQgaXMgbm90LlxuICovXG5mdW5jdGlvbiBpc09iamVjdCh4KSB7XG4gIC8vIFRoaXMgY2hlY2sgZXhjbHVkZXMgYnVpbHQtaW4gbm9uLU9iamVjdCBvYmplY3RzIChzdWNoIGFzIEFycmF5IGFuZCBTdHJpbmcpLlxuICAvLyBJdCBhbHNvIGV4Y2x1ZGVzIG9iamVjdHMgY3JlYXRlZCBmcm9tIEVTMjAxNSBjbGFzc2VzLCBidXQgaXQgZG9lcyBub3RcbiAgLy8gZXhjbHVkZSBvYmplY3RzIGNyZWF0ZWQgd2l0aCBgbmV3YCBvbiBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgKHRoYXQgaGFwcGVuc1xuICAvLyBiZWxvdykuXG4gIGlmICh0b1N0cmluZy5jYWxsKHgpICE9PSBcIltvYmplY3QgT2JqZWN0XVwiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gUHJvdG90eXBlLWxlc3Mgb2JqZWN0cyAoY3JlYXRlZCB3aXRoIGBPYmplY3QuY3JlYXRlKG51bGwpKWAgcGFzc1xuICBjb25zdCBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih4KTtcbiAgaWYgKHByb3RvID09PSBudWxsKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvLyBDaGVjayB0byBzZWUgd2hldGhlciB0aGUgY29uc3RydWN0b3Igb2YgdGhlIHRlc3RlZCBvYmplY3QgaXMgdGhlIE9iamVjdFxuICAvLyBjb25zdHJ1Y3Rvci4gVGhpcyBpcyB0aGUgb25seSBjb25zdHJ1Y3RvciB0aGF0IHByb2R1Y2VzIGEgXCJwbGFpblwiIG9iamVjdC5cbiAgY29uc3QgY3RvciA9XG4gICAgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHByb3RvLCBcImNvbnN0cnVjdG9yXCIpICYmXG4gICAgcHJvdG8uY29uc3RydWN0b3I7XG4gIHJldHVybiB0eXBlb2YgY3RvciA9PT0gXCJmdW5jdGlvblwiICYmIGN0b3IgPT09IE9iamVjdDtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgYSB2YWx1ZSBpcyBhIG51bWJlci5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHdpbGwgcmV0dXJuIGB0cnVlYCBmb3IgYW55IG51bWJlciBsaXRlcmFsIG9yIGluc3RhbmNlIG9mXG4gKiBgTnVtYmVyYCBleGNlcHQgZm9yIGBJbmZpbml0eWAgb3IgYE5hTmAuIEl0IHdpbGwgcmV0dXJuIGBmYWxzZWAgZm9yIHN0cmluZ3NcbiAqIHRoYXQgaGFwcGVuIHRvIGFsc28gYmUgbnVtYmVyczsgdGhlIHZhbHVlIG11c3QgYmUgYW4gYWN0dWFsIGBOdW1iZXJgIGluc3RhbmNlXG4gKiBvciBudW1iZXIgbGl0ZXJhbCB0byByZXR1cm4gYHRydWVgLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwYXJhbSB7Kn0geCBUaGUgdmFsdWUgYmVpbmcgdGVzdGVkIHRvIHNlZSBpZiBpdCBpcyBhIG51bWJlci5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IEVpdGhlciBgdHJ1ZWAgaWYgdGhlIHRlc3QgdmFsdWUgaXMgYSBmaW5pdGUgbnVtYmVyIChub3RcbiAqICAgICBpbmNsdWRpbmcgc3RyaW5nIHJlcHJlc2VudGF0aW9ucyBvZiBudW1iZXJzKSBvciBgZmFsc2VgIGlmIGl0IGlzIG5vdC5cbiAqL1xuZnVuY3Rpb24gaXNOdW1iZXIoeCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh4KSA9PT0gXCJbb2JqZWN0IE51bWJlcl1cIiAmJiBpc0Zpbml0ZSh4KTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgYSB2YWx1ZSBpcyBhIHN0cmluZy5cbiAqXG4gKiBMaXRlcmFsIHN0cmluZ3Mgd2lsbCByZXR1cm4gYHRydWVgLCBhcyB3aWxsIGluc3RhbmNlcyBvZiB0aGUgYFN0cmluZ2Agb2JqZWN0LlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwYXJhbSB7Kn0geCBUaGUgdmFsdWUgYmVpbmcgdGVzdGVkIHRvIHNlZSBpZiBpdCBpcyBhIHN0cmluZy5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IEVpdGhlciBgdHJ1ZWAgaWYgdGhlIHRlc3QgdmFsdWUgaXMgYSBzdHJpbmcgb3IgYGZhbHNlYCBpZlxuICogICAgaXQgaXMgbm90LlxuICovXG5mdW5jdGlvbiBpc1N0cmluZyh4KSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHgpID09PSBcIltvYmplY3QgU3RyaW5nXVwiO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhIHZhbHVlIGlzIGFuIGFycmF5LlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gbWVyZWx5IGRlbGVnYXRlcyB0byBgQXJyYXkuaXNBcnJheWAuIEl0IGlzIHByb3ZpZGVkIGZvclxuICogY29uc2lzdGVuY3kgaW4gY2FsbGluZyBzdHlsZSBvbmx5LlxuICpcbiAqIEBmdW5jdGlvbiBpc0FycmF5XG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcGFyYW0geyp9IHggVGhlIHZhbHVlIGJlaW5nIHRlc3RlZCB0byBzZWUgaWYgaXQgaXMgYW4gYXJyYXkuXG4gKiBAcmV0dXJuIHtib29sZWFufSBFaXRoZXIgYHRydWVgIGlmIHRoZSB0ZXN0IHZhbHVlIGlzIGFuIGFycmF5IG9yIGBmYWxzZWAgaWZcbiAqICAgICBpdCBpcyBub3QuXG4gKi9cbmNvbnN0IGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuXG5leHBvcnQge1xuICBpc0Z1bmN0aW9uLFxuICBpc0dlbmVyYXRvckZ1bmN0aW9uLFxuICBpc09iamVjdCxcbiAgaXNOdW1iZXIsXG4gIGlzU3RyaW5nLFxuICBpc0FycmF5XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==