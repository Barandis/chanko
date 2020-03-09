(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["core"] = factory();
	else
		root["core"] = factory();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb3JlL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9jb3JlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NvcmUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY29yZS8uL3NyYy9tb2R1bGVzL2l0ZXJhdGlvbi5qcyIsIndlYnBhY2s6Ly9jb3JlLy4vc3JjL21vZHVsZXMvcHJvdG9jb2wuanMiLCJ3ZWJwYWNrOi8vY29yZS8uL3NyYy9tb2R1bGVzL3JlZHVjdGlvbi5qcyIsIndlYnBhY2s6Ly9jb3JlLy4vc3JjL21vZHVsZXMvdHJhbnNmb3JtYXRpb24uanMiLCJ3ZWJwYWNrOi8vY29yZS8uL3NyYy9tb2R1bGVzL3V0aWxzLmpzIl0sIm5hbWVzIjpbIm9iamVjdEl0ZXJhdG9yIiwib2JqIiwic29ydEZuIiwia2V5cyIsIk9iamVjdCIsInNvcnQiLCJpbmRleCIsImxlbmd0aCIsImsiLCJrdiIsImtleSIsInYiLCJ2YWx1ZSIsImZ1bmN0aW9uSXRlcmF0b3IiLCJmbiIsImN1cnJlbnQiLCJpdGVyYXRvciIsImlzRnVuY3Rpb24iLCJTeW1ib2wiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiaXNPYmplY3QiLCJpc0l0ZXJhYmxlIiwiaXNJbXBsZW1lbnRlZCIsInByb3RvY29scyIsImNyZWF0ZSIsImluaXQiLCJmb3IiLCJzdGVwIiwicmVzdWx0IiwicmVkdWNlZCIsInByb3RvY29sIiwiYXN5bmNJdGVyYXRvciIsImdldE93blByb3BlcnR5U3ltYm9scyIsImluY2x1ZGVzIiwiY29sbGVjdGlvbiIsInAiLCJpc1N0cmluZyIsImlzQXJyYXkiLCJFcnJvciIsImFjYyIsImlucHV0IiwicHVzaCIsIm1heCIsInJlZHVjZSIsImEiLCJiIiwiTWF0aCIsInRvUmVkdWNlciIsImZyZWV6ZSIsIkFSUkFZX1JFRFVDRVIiLCJPQkpFQ1RfUkVEVUNFUiIsIlNUUklOR19SRURVQ0VSIiwidG9UcmFuc2R1Y2VyIiwieGZvcm0iLCJ0b0Z1bmN0aW9uIiwicmVkdWNlciIsInIiLCJiaW5kIiwiY29tcGxldGUiLCJ1bmNvbXBsZXRlIiwiaXNDb21wbGV0ZWQiLCJlbnN1cmVDb21wbGV0ZWQiLCJlbnN1cmVVbmNvbXBsZXRlZCIsIml0ZXIiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJuZXh0IiwiZG9uZSIsInRyYW5zZHVjaW5nSXRlcmF0b3IiLCJzdGVwUmVkdWNlciIsInhpdGVyIiwiaXRlbXMiLCJ1bnNoaWZ0IiwieGYiLCJjb21wbGV0ZWQiLCJwb3AiLCJjb3VudCIsInN0ZXBWYWx1ZSIsInNJdGVyYXRvciIsInRyYW5zZHVjZSIsImkiLCJhc0FycmF5IiwiYXNPYmplY3QiLCJhc1N0cmluZyIsImFzSXRlcmF0b3IiLCJzZXF1ZW5jZSIsImludG8iLCJ0YXJnZXQiLCJjb21wb3NlIiwiZm5zIiwicmV2ZXJzZWQiLCJyZXZlcnNlIiwidG9TdHJpbmciLCJwcm90b3R5cGUiLCJ4IiwiY2FsbCIsInByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJjdG9yIiwiaGFzT3duUHJvcGVydHkiLCJpc051bWJlciIsImlzRmluaXRlIiwiQXJyYXkiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7QUFNQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtQQTtBQUNBO0FBQ0E7QUFXQTtBQVVBO0FBU0E7Ozs7Ozs7OztBQVNBOzs7Ozs7Ozs7O0FBVUE7Ozs7Ozs7OztBQVNBOzs7Ozs7Ozs7OztBQVdBOzs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkE7Ozs7Ozs7Ozs7OztBQVlBOzs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBOzs7Ozs7Ozs7Ozs7O0FBYUE7Ozs7Ozs7O0FBUUE7Ozs7Ozs7Ozs7O0FBV0E7Ozs7Ozs7Ozs7O0FBV0E7Ozs7Ozs7Ozs7Ozs7OztBQWVBOzs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JBOzs7Ozs7Ozs7O0FBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMWVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7O0FBT0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7OztBQWFBLFNBQVNBLGNBQVQsQ0FBd0JDLEdBQXhCLEVBQTZCQyxNQUE3QixFQUFxQztBQUNuQyxTQUFRLGFBQVk7QUFDbEIsVUFBTUMsSUFBSSxHQUNSLE9BQU9ELE1BQVAsS0FBa0IsVUFBbEIsR0FDSUUsTUFBTSxDQUFDRCxJQUFQLENBQVlGLEdBQVosRUFBaUJJLElBQWpCLENBQXNCSCxNQUF0QixDQURKLEdBRUlFLE1BQU0sQ0FBQ0QsSUFBUCxDQUFZRixHQUFaLENBSE47QUFJQSxRQUFJSyxLQUFLLEdBQUcsQ0FBWjs7QUFFQSxXQUFPQSxLQUFLLEdBQUdILElBQUksQ0FBQ0ksTUFBcEIsRUFBNEI7QUFDMUIsWUFBTUMsQ0FBQyxHQUFHTCxJQUFJLENBQUNHLEtBQUssRUFBTixDQUFkO0FBQ0EsWUFBTTtBQUFFLFNBQUNFLENBQUQsR0FBS1AsR0FBRyxDQUFDTyxDQUFEO0FBQVYsT0FBTjtBQUNEO0FBQ0YsR0FYTSxFQUFQO0FBWUQ7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyQkEsU0FBU0MsRUFBVCxDQUFZUixHQUFaLEVBQWlCO0FBQ2YsUUFBTVMsR0FBRyxHQUFHTixNQUFNLENBQUNELElBQVAsQ0FBWUYsR0FBWixFQUFpQixDQUFqQixDQUFaO0FBQ0EsU0FBTztBQUFFTyxLQUFDLEVBQUVFLEdBQUw7QUFBVUMsS0FBQyxFQUFFVixHQUFHLENBQUNTLEdBQUQ7QUFBaEIsR0FBUDtBQUNEO0FBRUQ7Ozs7Ozs7Ozs7O0FBU0EsU0FBU0EsR0FBVCxDQUFhVCxHQUFiLEVBQWtCO0FBQ2hCLFNBQU9RLEVBQUUsQ0FBQ1IsR0FBRCxDQUFGLENBQVFPLENBQWY7QUFDRDtBQUVEOzs7Ozs7Ozs7OztBQVNBLFNBQVNJLEtBQVQsQ0FBZVgsR0FBZixFQUFvQjtBQUNsQixTQUFPUSxFQUFFLENBQUNSLEdBQUQsQ0FBRixDQUFRVSxDQUFmO0FBQ0Q7QUFFRDs7Ozs7Ozs7Ozs7O0FBVUEsU0FBU0UsZ0JBQVQsQ0FBMEJDLEVBQTFCLEVBQThCO0FBQzVCLFNBQVEsYUFBWTtBQUNsQixRQUFJQyxPQUFKO0FBQ0EsUUFBSVQsS0FBSyxHQUFHLENBQVo7O0FBRUEsYUFBUztBQUNQUyxhQUFPLEdBQUdELEVBQUUsQ0FBQ1IsS0FBSyxFQUFOLEVBQVVTLE9BQVYsQ0FBWjs7QUFDQSxVQUFJLE9BQU9BLE9BQVAsS0FBbUIsV0FBdkIsRUFBb0M7QUFDbEM7QUFDRDs7QUFDRCxZQUFNQSxPQUFOO0FBQ0Q7QUFDRixHQVhNLEVBQVA7QUFZRDtBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTZGQSxTQUFTQyxRQUFULENBQWtCSixLQUFsQixFQUF5QlYsTUFBTSxHQUFHLElBQWxDLEVBQXdDO0FBQ3RDLFVBQVEsSUFBUjtBQUNFLFNBQUtlLGdFQUFVLENBQUNMLEtBQUssQ0FBQ00sTUFBTSxDQUFDRixRQUFSLENBQU4sQ0FBZjtBQUNBLFNBQUtHLHlFQUFtQixDQUFDUCxLQUFLLENBQUNNLE1BQU0sQ0FBQ0YsUUFBUixDQUFOLENBQXhCO0FBQ0UsYUFBT0osS0FBSyxDQUFDTSxNQUFNLENBQUNGLFFBQVIsQ0FBTCxFQUFQOztBQUNGLFNBQUtDLGdFQUFVLENBQUNMLEtBQUQsQ0FBZjtBQUNFLGFBQU9DLGdCQUFnQixDQUFDRCxLQUFELENBQXZCOztBQUNGLFNBQUtRLDhEQUFRLENBQUNSLEtBQUQsQ0FBYjtBQUNFLGFBQU9aLGNBQWMsQ0FBQ1ksS0FBRCxFQUFRVixNQUFSLENBQXJCOztBQUNGO0FBQ0UsYUFBTyxJQUFQO0FBVEo7QUFXRDtBQUVEOzs7Ozs7Ozs7Ozs7Ozs7OztBQWVBLFNBQVNtQixVQUFULENBQW9CVCxLQUFwQixFQUEyQjtBQUN6QixTQUFPVSxzRUFBYSxDQUFDVixLQUFELEVBQVEsVUFBUixDQUFiLElBQW9DUSw4REFBUSxDQUFDUixLQUFELENBQW5EO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7O0FDclBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7QUFPQTs7Ozs7Ozs7Ozs7Ozs7QUFlQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNEJBOzs7Ozs7O0FBTUEsTUFBTVcsU0FBUyxHQUFHbkIsTUFBTSxDQUFDb0IsTUFBUCxDQUFjLElBQWQsRUFBb0I7QUFDcENDLE1BQUksRUFBRTtBQUNKYixTQUFLLEVBQUVNLE1BQU0sQ0FBQ1EsR0FBUCxDQUFXLGlCQUFYO0FBREgsR0FEOEI7QUFJcENDLE1BQUksRUFBRTtBQUNKZixTQUFLLEVBQUVNLE1BQU0sQ0FBQ1EsR0FBUCxDQUFXLGlCQUFYO0FBREgsR0FKOEI7QUFPcENFLFFBQU0sRUFBRTtBQUNOaEIsU0FBSyxFQUFFTSxNQUFNLENBQUNRLEdBQVAsQ0FBVyxtQkFBWDtBQURELEdBUDRCO0FBVXBDRyxTQUFPLEVBQUU7QUFDUGpCLFNBQUssRUFBRU0sTUFBTSxDQUFDUSxHQUFQLENBQVcsb0JBQVg7QUFEQSxHQVYyQjtBQWFwQ2QsT0FBSyxFQUFFO0FBQ0xBLFNBQUssRUFBRU0sTUFBTSxDQUFDUSxHQUFQLENBQVcsa0JBQVg7QUFERjtBQWI2QixDQUFwQixDQUFsQjs7QUFrQkEsU0FBU0osYUFBVCxDQUF1QnJCLEdBQXZCLEVBQTRCNkIsUUFBNUIsRUFBc0M7QUFDcEMsTUFBSTdCLEdBQUcsSUFBSSxJQUFYLEVBQWlCO0FBQ2YsV0FBTyxLQUFQO0FBQ0Q7O0FBRUQsVUFBUTZCLFFBQVI7QUFDRSxTQUFLLFVBQUw7QUFDRSxhQUNFYixnRUFBVSxDQUFDaEIsR0FBRyxDQUFDaUIsTUFBTSxDQUFDRixRQUFSLENBQUosQ0FBVixJQUNBRyx5RUFBbUIsQ0FBQ2xCLEdBQUcsQ0FBQ2lCLE1BQU0sQ0FBQ0YsUUFBUixDQUFKLENBRnJCOztBQUlGLFNBQUssZUFBTDtBQUNFLGFBQU9HLHlFQUFtQixDQUFDbEIsR0FBRyxDQUFDaUIsTUFBTSxDQUFDYSxhQUFSLENBQUosQ0FBMUI7O0FBQ0YsU0FBSyxTQUFMO0FBQ0EsU0FBSyxPQUFMO0FBQ0UsYUFBTzNCLE1BQU0sQ0FBQzRCLHFCQUFQLENBQTZCL0IsR0FBN0IsRUFBa0NnQyxRQUFsQyxDQUEyQ1YsU0FBUyxDQUFDTyxRQUFELENBQXBELENBQVA7O0FBQ0Y7QUFDRSxhQUFPYixnRUFBVSxDQUFDaEIsR0FBRyxDQUFDc0IsU0FBUyxDQUFDTyxRQUFELENBQVYsQ0FBSixDQUFqQjtBQVpKO0FBY0Q7Ozs7Ozs7Ozs7Ozs7O0FDL0ZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7QUFPQTs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQSxTQUFTTCxJQUFULENBQWNTLFVBQWQsRUFBMEI7QUFDeEIsVUFBUSxJQUFSO0FBQ0UsU0FBS1osc0VBQWEsQ0FBQ1ksVUFBRCxFQUFhLE1BQWIsQ0FBbEI7QUFDRSxhQUFPQSxVQUFVLENBQUNDLDBEQUFDLENBQUNWLElBQUgsQ0FBakI7O0FBQ0YsU0FBS1csOERBQVEsQ0FBQ0YsVUFBRCxDQUFiO0FBQ0UsYUFBTyxNQUFNLEVBQWI7O0FBQ0YsU0FBS0csNkRBQU8sQ0FBQ0gsVUFBRCxDQUFaO0FBQ0UsYUFBTyxNQUFNLEVBQWI7O0FBQ0YsU0FBS2QsOERBQVEsQ0FBQ2MsVUFBRCxDQUFiO0FBQ0UsYUFBTyxPQUFPLEVBQVAsQ0FBUDs7QUFDRixTQUFLakIsZ0VBQVUsQ0FBQ2lCLFVBQUQsQ0FBZjtBQUNFLGFBQU8sTUFBTTtBQUNYLGNBQU1JLEtBQUssQ0FBQyxvQkFBRCxDQUFYO0FBQ0QsT0FGRDs7QUFHRjtBQUNFLGFBQU8sSUFBUDtBQWRKO0FBZ0JEO0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1CQSxTQUFTWCxJQUFULENBQWNPLFVBQWQsRUFBMEI7QUFDeEIsVUFBUSxJQUFSO0FBQ0UsU0FBS1osc0VBQWEsQ0FBQ1ksVUFBRCxFQUFhLE1BQWIsQ0FBbEI7QUFDRSxhQUFPQSxVQUFVLENBQUNDLDBEQUFDLENBQUNSLElBQUgsQ0FBakI7O0FBRUYsU0FBS1MsOERBQVEsQ0FBQ0YsVUFBRCxDQUFiO0FBQ0UsYUFBTyxDQUFDSyxHQUFELEVBQU1DLEtBQU4sS0FBZ0I7QUFDckIsY0FBTTVCLEtBQUssR0FBR1EsOERBQVEsQ0FBQ29CLEtBQUQsQ0FBUixHQUFrQi9CLDREQUFFLENBQUMrQixLQUFELENBQUYsQ0FBVTdCLENBQTVCLEdBQWdDNkIsS0FBOUM7QUFDQSxlQUFPRCxHQUFHLEdBQUczQixLQUFiO0FBQ0QsT0FIRDs7QUFLRixTQUFLeUIsNkRBQU8sQ0FBQ0gsVUFBRCxDQUFaO0FBQ0UsYUFBTyxDQUFDSyxHQUFELEVBQU1DLEtBQU4sS0FBZ0I7QUFDckJELFdBQUcsQ0FBQ0UsSUFBSixDQUFTRCxLQUFUO0FBQ0EsZUFBT0QsR0FBUDtBQUNELE9BSEQ7O0FBS0YsU0FBS25CLDhEQUFRLENBQUNjLFVBQUQsQ0FBYjtBQUNFLGFBQU8sQ0FBQ0ssR0FBRCxFQUFNQyxLQUFOLEtBQWdCO0FBQ3JCLFlBQUk1QixLQUFLLEdBQUc0QixLQUFaOztBQUVBLFlBQUksQ0FBQ3BCLDhEQUFRLENBQUNvQixLQUFELENBQWIsRUFBc0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0EsZ0JBQU1FLEdBQUcsR0FBR3RDLE1BQU0sQ0FBQ0QsSUFBUCxDQUFZb0MsR0FBWixFQUFpQkksTUFBakIsQ0FBd0IsQ0FBQ0MsQ0FBRCxFQUFJQyxDQUFKLEtBQVVDLElBQUksQ0FBQ0osR0FBTCxDQUFTRSxDQUFULEVBQVlDLENBQVosQ0FBbEMsRUFBa0QsQ0FBQyxDQUFuRCxDQUFaO0FBQ0FqQyxlQUFLLEdBQUc7QUFBRSxhQUFDOEIsR0FBRyxHQUFHLENBQVAsR0FBV0Y7QUFBYixXQUFSO0FBQ0Q7O0FBRUQsY0FBTTtBQUFFaEMsV0FBRjtBQUFLRztBQUFMLFlBQVdGLDREQUFFLENBQUNHLEtBQUQsQ0FBbkI7QUFDQTJCLFdBQUcsQ0FBQy9CLENBQUQsQ0FBSCxHQUFTRyxDQUFUO0FBQ0EsZUFBTzRCLEdBQVA7QUFDRCxPQWREOztBQWdCRixTQUFLdEIsZ0VBQVUsQ0FBQ2lCLFVBQUQsQ0FBZjtBQUNFLGFBQU8sQ0FBQ0ssR0FBRCxFQUFNQyxLQUFOLEtBQWdCTixVQUFVLENBQUNLLEdBQUQsRUFBTUMsS0FBTixDQUFqQzs7QUFFRjtBQUNFLGFBQU8sSUFBUDtBQXJDSjtBQXVDRDtBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkEsU0FBU1osTUFBVCxDQUFnQk0sVUFBaEIsRUFBNEI7QUFDMUIsVUFBUSxJQUFSO0FBQ0UsU0FBS1osc0VBQWEsQ0FBQ1ksVUFBRCxFQUFhLFFBQWIsQ0FBbEI7QUFDRSxhQUFPQSxVQUFVLENBQUNDLDBEQUFDLENBQUNQLE1BQUgsQ0FBakI7O0FBQ0YsU0FBS1EsOERBQVEsQ0FBQ0YsVUFBRCxDQUFiO0FBQ0EsU0FBS0csNkRBQU8sQ0FBQ0gsVUFBRCxDQUFaO0FBQ0EsU0FBS2QsOERBQVEsQ0FBQ2MsVUFBRCxDQUFiO0FBQ0EsU0FBS2pCLGdFQUFVLENBQUNpQixVQUFELENBQWY7QUFDRSxhQUFPdEIsS0FBSyxJQUFJQSxLQUFoQjs7QUFDRjtBQUNFLGFBQU8sSUFBUDtBQVRKO0FBV0Q7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOENBLFNBQVNtQyxTQUFULENBQW1CYixVQUFuQixFQUErQjtBQUM3QixTQUFPOUIsTUFBTSxDQUFDNEMsTUFBUCxDQUFjO0FBQ25CLEtBQUNiLDBEQUFDLENBQUNWLElBQUgsR0FBVUEsSUFBSSxDQUFDUyxVQUFELENBREs7QUFFbkIsS0FBQ0MsMERBQUMsQ0FBQ1IsSUFBSCxHQUFVQSxJQUFJLENBQUNPLFVBQUQsQ0FGSztBQUduQixLQUFDQywwREFBQyxDQUFDUCxNQUFILEdBQVlBLE1BQU0sQ0FBQ00sVUFBRDtBQUhDLEdBQWQsQ0FBUDtBQUtEO0FBRUQ7Ozs7Ozs7O0FBTUEsTUFBTWUsYUFBYSxHQUFHRixTQUFTLENBQUMsRUFBRCxDQUEvQjtBQUVBOzs7Ozs7O0FBTUEsTUFBTUcsY0FBYyxHQUFHSCxTQUFTLENBQUMsRUFBRCxDQUFoQztBQUVBOzs7Ozs7O0FBTUEsTUFBTUksY0FBYyxHQUFHSixTQUFTLENBQUMsRUFBRCxDQUFoQztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOEJBLFNBQVNLLFlBQVQsQ0FBc0J0QyxFQUF0QixFQUEwQnVDLEtBQTFCLEVBQWlDO0FBQy9CLFNBQU87QUFDTCxLQUFDbEIsMERBQUMsQ0FBQ1YsSUFBSCxJQUFXO0FBQ1QsYUFBTzRCLEtBQUssQ0FBQ2xCLDBEQUFDLENBQUNWLElBQUgsQ0FBTCxFQUFQO0FBQ0QsS0FISTs7QUFLTCxLQUFDVSwwREFBQyxDQUFDUixJQUFILEdBQVViLEVBTEw7O0FBT0wsS0FBQ3FCLDBEQUFDLENBQUNQLE1BQUgsRUFBV2hCLEtBQVgsRUFBa0I7QUFDaEIsYUFBT3lDLEtBQUssQ0FBQ2xCLDBEQUFDLENBQUNQLE1BQUgsQ0FBTCxDQUFnQmhCLEtBQWhCLENBQVA7QUFDRDs7QUFUSSxHQUFQO0FBV0Q7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBCQSxTQUFTMEMsVUFBVCxDQUFvQkQsS0FBcEIsRUFBMkJFLE9BQTNCLEVBQW9DO0FBQ2xDLFFBQU1DLENBQUMsR0FBRyxPQUFPRCxPQUFQLEtBQW1CLFVBQW5CLEdBQWdDUixTQUFTLENBQUNRLE9BQUQsQ0FBekMsR0FBcURBLE9BQS9EO0FBQ0EsUUFBTTNCLE1BQU0sR0FBR3lCLEtBQUssQ0FBQ0csQ0FBRCxDQUFwQjtBQUNBLFNBQU81QixNQUFNLENBQUNPLDBEQUFDLENBQUNSLElBQUgsQ0FBTixDQUFlOEIsSUFBZixDQUFvQjdCLE1BQXBCLENBQVA7QUFDRDtBQUVEOzs7Ozs7Ozs7Ozs7Ozs7QUFhQSxTQUFTOEIsUUFBVCxDQUFrQjlDLEtBQWxCLEVBQXlCO0FBQ3ZCLFNBQU87QUFDTCxLQUFDdUIsMERBQUMsQ0FBQ04sT0FBSCxHQUFhLElBRFI7QUFFTCxLQUFDTSwwREFBQyxDQUFDdkIsS0FBSCxHQUFXQTtBQUZOLEdBQVA7QUFJRDtBQUVEOzs7Ozs7Ozs7Ozs7OztBQVlBLFNBQVMrQyxVQUFULENBQW9CL0MsS0FBcEIsRUFBMkI7QUFDekIsU0FBT0EsS0FBUCxhQUFPQSxLQUFQLHVCQUFPQSxLQUFLLENBQUd1QiwwREFBQyxDQUFDdkIsS0FBTCxDQUFaO0FBQ0Q7QUFFRDs7Ozs7Ozs7OztBQVFBLFNBQVNnRCxXQUFULENBQXFCaEQsS0FBckIsRUFBNEI7QUFDMUIsU0FBTyxDQUFDLEVBQUNBLEtBQUQsYUFBQ0EsS0FBRCx1QkFBQ0EsS0FBSyxDQUFHdUIsMERBQUMsQ0FBQ04sT0FBTCxDQUFOLENBQVI7QUFDRDtBQUVEOzs7Ozs7Ozs7Ozs7Ozs7O0FBY0EsU0FBU2dDLGVBQVQsQ0FBeUJqRCxLQUF6QixFQUFnQztBQUM5QixTQUFPZ0QsV0FBVyxDQUFDaEQsS0FBRCxDQUFYLEdBQXFCQSxLQUFyQixHQUE2QjhDLFFBQVEsQ0FBQzlDLEtBQUQsQ0FBNUM7QUFDRDtBQUVEOzs7Ozs7Ozs7Ozs7OztBQVlBLFNBQVNrRCxpQkFBVCxDQUEyQmxELEtBQTNCLEVBQWtDO0FBQ2hDLFNBQU9nRCxXQUFXLENBQUNoRCxLQUFELENBQVgsR0FBcUIrQyxVQUFVLENBQUMvQyxLQUFELENBQS9CLEdBQXlDQSxLQUFoRDtBQUNEO0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUNBLFNBQVMrQixNQUFULENBQWdCVCxVQUFoQixFQUE0QnFCLE9BQTVCLEVBQXFDOUIsSUFBckMsRUFBMkM7QUFDekMsTUFBSVMsVUFBVSxJQUFJLElBQWxCLEVBQXdCO0FBQ3RCLFdBQU8sSUFBUDtBQUNEOztBQUVELFFBQU02QixJQUFJLEdBQUcvQyxrRUFBUSxDQUFDa0IsVUFBRCxDQUFyQjs7QUFDQSxNQUFJLENBQUM2QixJQUFMLEVBQVc7QUFDVCxVQUFNekIsS0FBSyxDQUFFLGdDQUErQkosVUFBVSxDQUFDOEIsV0FBWCxDQUF1QkMsSUFBSyxFQUE3RCxDQUFYO0FBQ0Q7O0FBRUQsTUFBSTFCLEdBQUcsR0FBR2QsSUFBVjtBQUNBLE1BQUlFLElBQUksR0FBR29DLElBQUksQ0FBQ0csSUFBTCxFQUFYOztBQUVBLFNBQU8sQ0FBQ3ZDLElBQUksQ0FBQ3dDLElBQWIsRUFBbUI7QUFDakI1QixPQUFHLEdBQUdnQixPQUFPLENBQUNwQiwwREFBQyxDQUFDUixJQUFILENBQVAsQ0FBZ0JZLEdBQWhCLEVBQXFCWixJQUFJLENBQUNmLEtBQTFCLENBQU47O0FBQ0EsUUFBSWdELFdBQVcsQ0FBQ3JCLEdBQUQsQ0FBZixFQUFzQjtBQUNwQkEsU0FBRyxHQUFHb0IsVUFBVSxDQUFDcEIsR0FBRCxDQUFoQjtBQUNBO0FBQ0Q7O0FBQ0RaLFFBQUksR0FBR29DLElBQUksQ0FBQ0csSUFBTCxFQUFQO0FBQ0Q7O0FBRUQsU0FBT1gsT0FBTyxDQUFDcEIsMERBQUMsQ0FBQ1AsTUFBSCxDQUFQLENBQWtCVyxHQUFsQixDQUFQO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7O0FDM2JEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7QUFPQTs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQVFBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4QkEsU0FBUzZCLG1CQUFULENBQTZCbEMsVUFBN0IsRUFBeUNtQixLQUF6QyxFQUFnRDtBQUM5QyxRQUFNZ0IsV0FBVyxHQUFHO0FBQ2xCLEtBQUNsQywwREFBQyxDQUFDUixJQUFILEVBQVMyQyxLQUFULEVBQWdCOUIsS0FBaEIsRUFBdUI7QUFDckI4QixXQUFLLENBQUNDLEtBQU4sQ0FBWUMsT0FBWixDQUFvQmhDLEtBQXBCO0FBQ0EsYUFBTzhCLEtBQVA7QUFDRCxLQUppQjs7QUFLbEIsS0FBQ25DLDBEQUFDLENBQUNQLE1BQUgsRUFBV2hCLEtBQVgsRUFBa0I7QUFDaEIsYUFBT0EsS0FBUDtBQUNEOztBQVBpQixHQUFwQjtBQVVBLFFBQU1tRCxJQUFJLEdBQUcvQyxrRUFBUSxDQUFDa0IsVUFBRCxDQUFyQjtBQUNBLFFBQU11QyxFQUFFLEdBQUdwQixLQUFLLENBQUNnQixXQUFELENBQWhCO0FBQ0EsTUFBSUssU0FBUyxHQUFHLEtBQWhCLENBYjhDLENBZTlDO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFFBQU1ILEtBQUssR0FBRyxFQUFkLENBbkI4QyxDQXFCOUM7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsV0FBU0wsSUFBVCxHQUFnQjtBQUNkLFFBQUlLLEtBQUssQ0FBQ2hFLE1BQU4sS0FBaUIsQ0FBckIsRUFBd0I7QUFDdEJvQixVQUFJO0FBQ0w7O0FBQ0QsUUFBSTRDLEtBQUssQ0FBQ2hFLE1BQU4sS0FBaUIsQ0FBckIsRUFBd0I7QUFDdEIsYUFBTztBQUFFNEQsWUFBSSxFQUFFO0FBQVIsT0FBUDtBQUNEOztBQUNELFdBQU87QUFDTHZELFdBQUssRUFBRTJELEtBQUssQ0FBQ0ksR0FBTixFQURGO0FBRUxSLFVBQUksRUFBRTtBQUZELEtBQVA7QUFJRCxHQXBDNkMsQ0FzQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxXQUFTeEMsSUFBVCxHQUFnQjtBQUNkLFVBQU1pRCxLQUFLLEdBQUdMLEtBQUssQ0FBQ2hFLE1BQXBCOztBQUNBLFdBQU9nRSxLQUFLLENBQUNoRSxNQUFOLEtBQWlCcUUsS0FBeEIsRUFBK0I7QUFDN0IsWUFBTUMsU0FBUyxHQUFHZCxJQUFJLENBQUNHLElBQUwsRUFBbEI7O0FBQ0EsVUFBSVcsU0FBUyxDQUFDVixJQUFWLElBQWtCTyxTQUF0QixFQUFpQztBQUMvQkQsVUFBRSxDQUFDdEMsMERBQUMsQ0FBQ1AsTUFBSCxDQUFGLENBQWFBLE1BQWI7QUFDQTtBQUNEOztBQUNEOEMsZUFBUyxHQUFHZCxxRUFBVyxDQUFDYSxFQUFFLENBQUN0QywwREFBQyxDQUFDUixJQUFILENBQUYsQ0FBV0MsTUFBWCxFQUFtQmlELFNBQVMsQ0FBQ2pFLEtBQTdCLENBQUQsQ0FBdkI7QUFDRDtBQUNGLEdBMUQ2QyxDQTREOUM7QUFDQTs7O0FBQ0EsV0FBU2tFLFNBQVQsR0FBcUI7QUFDbkIsV0FBT2xELE1BQVA7QUFDRCxHQWhFNkMsQ0FrRTlDO0FBQ0E7OztBQUNBLFFBQU1BLE1BQU0sR0FBRztBQUFFMkMsU0FBRjtBQUFTTCxRQUFUO0FBQWV2QyxRQUFmO0FBQXFCLEtBQUNULE1BQU0sQ0FBQ0YsUUFBUixHQUFtQjhEO0FBQXhDLEdBQWY7QUFDQSxTQUFPbEQsTUFBUDtBQUNEO0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUdBLFNBQVNtRCxTQUFULENBQW1CN0MsVUFBbkIsRUFBK0JtQixLQUEvQixFQUFzQ0UsT0FBdEMsRUFBK0M5QixJQUEvQyxFQUFxRDtBQUNuRCxRQUFNK0IsQ0FBQyxHQUFHdkMsZ0VBQVUsQ0FBQ3NDLE9BQUQsQ0FBVixHQUFzQlIsbUVBQVMsQ0FBQ1EsT0FBRCxDQUEvQixHQUEyQ0EsT0FBckQ7QUFDQSxRQUFNeUIsQ0FBQyxHQUFHdkQsSUFBSCxhQUFHQSxJQUFILGNBQUdBLElBQUgsR0FBVytCLENBQUMsQ0FBQ3JCLDBEQUFDLENBQUNWLElBQUgsQ0FBRCxFQUFsQjtBQUNBLFFBQU1nRCxFQUFFLEdBQUdwQixLQUFLLEdBQUdBLEtBQUssQ0FBQ0csQ0FBRCxDQUFSLEdBQWNBLENBQTlCO0FBQ0EsU0FBT2IsZ0VBQU0sQ0FBQ1QsVUFBRCxFQUFhdUMsRUFBYixFQUFpQk8sQ0FBakIsQ0FBYjtBQUNEO0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdDQSxTQUFTQyxPQUFULENBQWlCL0MsVUFBakIsRUFBNkJtQixLQUE3QixFQUFvQztBQUNsQyxTQUFPMEIsU0FBUyxDQUFDN0MsVUFBRCxFQUFhbUIsS0FBYixFQUFvQkosK0RBQXBCLENBQWhCO0FBQ0Q7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaURBLFNBQVNpQyxRQUFULENBQWtCaEQsVUFBbEIsRUFBOEJtQixLQUE5QixFQUFxQztBQUNuQyxTQUFPMEIsU0FBUyxDQUFDN0MsVUFBRCxFQUFhbUIsS0FBYixFQUFvQkgsZ0VBQXBCLENBQWhCO0FBQ0Q7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnREEsU0FBU2lDLFFBQVQsQ0FBa0JqRCxVQUFsQixFQUE4Qm1CLEtBQTlCLEVBQXFDO0FBQ25DLFNBQU8wQixTQUFTLENBQUM3QyxVQUFELEVBQWFtQixLQUFiLEVBQW9CRixnRUFBcEIsQ0FBaEI7QUFDRDtBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpREEsU0FBU2lDLFVBQVQsQ0FBb0JsRCxVQUFwQixFQUFnQ21CLEtBQWhDLEVBQXVDO0FBQ3JDLFNBQU9BLEtBQUssR0FBR2UsbUJBQW1CLENBQUNsQyxVQUFELEVBQWFtQixLQUFiLENBQXRCLEdBQTRDckMsa0VBQVEsQ0FBQ2tCLFVBQUQsQ0FBaEU7QUFDRDtBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvREEsU0FBU21ELFFBQVQsQ0FBa0JuRCxVQUFsQixFQUE4Qm1CLEtBQTlCLEVBQXFDO0FBQ25DLFVBQVEsSUFBUjtBQUNFLFNBQUtoQiw2REFBTyxDQUFDSCxVQUFELENBQVo7QUFDRSxhQUFPK0MsT0FBTyxDQUFDL0MsVUFBRCxFQUFhbUIsS0FBYixDQUFkOztBQUNGLFNBQUtqQyw4REFBUSxDQUFDYyxVQUFELENBQWI7QUFDRSxhQUFPZ0QsUUFBUSxDQUFDaEQsVUFBRCxFQUFhbUIsS0FBYixDQUFmOztBQUNGLFNBQUtqQiw4REFBUSxDQUFDRixVQUFELENBQWI7QUFDRSxhQUFPaUQsUUFBUSxDQUFDakQsVUFBRCxFQUFhbUIsS0FBYixDQUFmOztBQUNGLFNBQUsvQixzRUFBYSxDQUFDWSxVQUFELEVBQWEsTUFBYixDQUFsQjtBQUNFLGFBQU82QyxTQUFTLENBQUM3QyxVQUFELEVBQWFtQixLQUFiLEVBQW9CbkIsVUFBcEIsQ0FBaEI7O0FBQ0YsU0FBS1osc0VBQWEsQ0FBQ1ksVUFBRCxFQUFhLFVBQWIsQ0FBbEI7QUFDRSxhQUFPa0QsVUFBVSxDQUFDbEQsVUFBRCxFQUFhbUIsS0FBYixDQUFqQjs7QUFDRjtBQUNFLFlBQU1mLEtBQUssQ0FBRSwrQkFBOEJKLFVBQVcsRUFBM0MsQ0FBWDtBQVpKO0FBY0Q7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0RBLFNBQVNvRCxJQUFULENBQWNDLE1BQWQsRUFBc0JyRCxVQUF0QixFQUFrQ21CLEtBQWxDLEVBQXlDO0FBQ3ZDLFVBQVEsSUFBUjtBQUNFLFNBQUtoQiw2REFBTyxDQUFDa0QsTUFBRCxDQUFaO0FBQ0UsYUFBT1IsU0FBUyxDQUFDN0MsVUFBRCxFQUFhbUIsS0FBYixFQUFvQkosK0RBQXBCLEVBQW1Dc0MsTUFBbkMsQ0FBaEI7O0FBQ0YsU0FBS25FLDhEQUFRLENBQUNtRSxNQUFELENBQWI7QUFDRSxhQUFPUixTQUFTLENBQUM3QyxVQUFELEVBQWFtQixLQUFiLEVBQW9CSCxnRUFBcEIsRUFBb0NxQyxNQUFwQyxDQUFoQjs7QUFDRixTQUFLbkQsOERBQVEsQ0FBQ21ELE1BQUQsQ0FBYjtBQUNFLGFBQU9SLFNBQVMsQ0FBQzdDLFVBQUQsRUFBYW1CLEtBQWIsRUFBb0JGLGdFQUFwQixFQUFvQ29DLE1BQXBDLENBQWhCOztBQUNGLFNBQUtqRSxzRUFBYSxDQUFDaUUsTUFBRCxFQUFTLE1BQVQsQ0FBbEI7QUFDRSxhQUFPUixTQUFTLENBQUM3QyxVQUFELEVBQWFtQixLQUFiLEVBQW9Ca0MsTUFBcEIsRUFBNEJBLE1BQTVCLENBQWhCOztBQUNGO0FBQ0UsWUFBTWpELEtBQUssQ0FBRSxpQ0FBZ0NpRCxNQUFPLEtBQUlyRCxVQUFXLEVBQXhELENBQVg7QUFWSjtBQVlEO0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQ0EsU0FBU3NELE9BQVQsQ0FBaUIsR0FBR0MsR0FBcEIsRUFBeUI7QUFDdkIsUUFBTUMsUUFBUSxHQUFHRCxHQUFHLENBQUNFLE9BQUosRUFBakI7QUFDQSxTQUFPL0UsS0FBSyxJQUFJOEUsUUFBUSxDQUFDL0MsTUFBVCxDQUFnQixDQUFDSixHQUFELEVBQU16QixFQUFOLEtBQWFBLEVBQUUsQ0FBQ3lCLEdBQUQsQ0FBL0IsRUFBc0MzQixLQUF0QyxDQUFoQjtBQUNEOzs7Ozs7Ozs7Ozs7OztBQzVtQkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7OztBQU9BOzs7Ozs7OztBQVFBOzs7Ozs7O0FBT0EsTUFBTWdGLFFBQVEsR0FBR3hGLE1BQU0sQ0FBQ3lGLFNBQVAsQ0FBaUJELFFBQWxDO0FBRUE7Ozs7Ozs7Ozs7QUFTQSxTQUFTM0UsVUFBVCxDQUFvQjZFLENBQXBCLEVBQXVCO0FBQ3JCLFNBQU9GLFFBQVEsQ0FBQ0csSUFBVCxDQUFjRCxDQUFkLE1BQXFCLG1CQUE1QjtBQUNEO0FBRUQ7Ozs7Ozs7Ozs7O0FBU0EsU0FBUzNFLG1CQUFULENBQTZCMkUsQ0FBN0IsRUFBZ0M7QUFDOUIsU0FBT0YsUUFBUSxDQUFDRyxJQUFULENBQWNELENBQWQsTUFBcUIsNEJBQTVCO0FBQ0Q7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlQSxTQUFTMUUsUUFBVCxDQUFrQjBFLENBQWxCLEVBQXFCO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSUYsUUFBUSxDQUFDRyxJQUFULENBQWNELENBQWQsTUFBcUIsaUJBQXpCLEVBQTRDO0FBQzFDLFdBQU8sS0FBUDtBQUNELEdBUGtCLENBU25COzs7QUFDQSxRQUFNRSxLQUFLLEdBQUc1RixNQUFNLENBQUM2RixjQUFQLENBQXNCSCxDQUF0QixDQUFkOztBQUNBLE1BQUlFLEtBQUssS0FBSyxJQUFkLEVBQW9CO0FBQ2xCLFdBQU8sSUFBUDtBQUNELEdBYmtCLENBZW5CO0FBQ0E7OztBQUNBLFFBQU1FLElBQUksR0FDUjlGLE1BQU0sQ0FBQ3lGLFNBQVAsQ0FBaUJNLGNBQWpCLENBQWdDSixJQUFoQyxDQUFxQ0MsS0FBckMsRUFBNEMsYUFBNUMsS0FDQUEsS0FBSyxDQUFDaEMsV0FGUjtBQUdBLFNBQU8sT0FBT2tDLElBQVAsS0FBZ0IsVUFBaEIsSUFBOEJBLElBQUksS0FBSzlGLE1BQTlDO0FBQ0Q7QUFFRDs7Ozs7Ozs7Ozs7Ozs7O0FBYUEsU0FBU2dHLFFBQVQsQ0FBa0JOLENBQWxCLEVBQXFCO0FBQ25CLFNBQU9GLFFBQVEsQ0FBQ0csSUFBVCxDQUFjRCxDQUFkLE1BQXFCLGlCQUFyQixJQUEwQ08sUUFBUSxDQUFDUCxDQUFELENBQXpEO0FBQ0Q7QUFFRDs7Ozs7Ozs7Ozs7O0FBVUEsU0FBUzFELFFBQVQsQ0FBa0IwRCxDQUFsQixFQUFxQjtBQUNuQixTQUFPRixRQUFRLENBQUNHLElBQVQsQ0FBY0QsQ0FBZCxNQUFxQixpQkFBNUI7QUFDRDtBQUVEOzs7Ozs7Ozs7Ozs7OztBQVlBLE1BQU16RCxPQUFPLEdBQUdpRSxLQUFLLENBQUNqRSxPQUF0QiIsImZpbGUiOiJjaGFua28tY29yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImNvcmVcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiY29yZVwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG4vKipcbiAqIFRoZSBjZW50cmFsIG1vZHVsZSBmb3IgdGhlIHRyYW5zZHVjZXIgZW5naW5lLlxuICpcbiAqIEFsbCBvZiB0aGUgZnVuY3Rpb25zIGluIHRoaXMgbW9kdWxlIGRlYWwgZGlyZWN0bHkgd2l0aCB0cmFuc2R1Y2Vycy4gQnV0XG4gKiBmaXJzdCwgbGV0J3MgdGFsayBhYm91dCB0aGUgcHJvdG9jb2xzIHRoYXQgYXJlIGdvaW5nIHRvIGJlIHJlZmVycmVkIHRvXG4gKiB0aHJvdWdob3V0IG1hbnkgb2YgdGhlIGZ1bmN0aW9uIGRpc2N1c3Npb25zLlxuICpcbiAqICMjIFByb3RvY29sc1xuICpcbiAqIE9uZSBvZiB0aGUga2V5IHNlbGxpbmcgcG9pbnRzIGZvciB0cmFuc2R1Y2VycyBpcyB0aGF0IHRoZSBzYW1lIHRyYW5zZHVjZXIgY2FuXG4gKiBiZSB1c2VkIG9uIGFueSB0eXBlIG9mIGNvbGxlY3Rpb24uIFJhdGhlciB0aGFuIGhhdmluZyB0byB3cml0ZSBhIG5ldyBgbWFwYFxuICogZnVuY3Rpb24gKGZvciBleGFtcGxlKSBmb3IgZXZlcnkga2luZCBvZiBjb2xsZWN0aW9uIC0gb25lIGZvciBhbiBhcnJheSwgb25lXG4gKiBmb3IgYSBzdHJpbmcsIG9uZSBmb3IgYW4gaXRlcmF0b3IsIGV0Yy4gLSB0aGVyZSBpcyBhIHNpbmdsZSBgbWFwYCB0cmFuc2R1Y2VyXG4gKiB0aGF0IHdpbGwgd29yayB3aXRoIGFsbCBvZiB0aGVtLCBhbmQgcG90ZW50aWFsbHkgd2l0aCAqYW55KiBraW5kIG9mXG4gKiBjb2xsZWN0aW9uLiBUaGlzIGlzIHBvc3NpYmxlIGltcGxlbWVudGluZyAqcHJvdG9jb2xzKiBvbiB0aGUgY29sbGVjdGlvbnMuXG4gKlxuICogQSBwcm90b2NvbCBpbiBKYXZhU2NyaXB0IGlzIG11Y2ggbGlrZSBhbiBpbnRlcmZhY2UgaW4gbGFuZ3VhZ2VzIGxpa2UgSmF2YSBhbmRcbiAqIEMjLiBJdCBpcyBhIGNvbW1pdG1lbnQgdG8gcHJvdmlkaW5nIGEgY2VydGFpbiBmdW5jdGlvbmFsaXR5IHVuZGVyIGEgY2VydGFpblxuICogbmFtZS4gRVMyMDE1IGhhcyBzZWVuIHRoZSBpbnRyb2R1Y3Rpb24gb2YgYW4gYGl0ZXJhdG9yYCBwcm90b2NvbCwgZm9yXG4gKiBleGFtcGxlLCBhbmQgbGFuZ3VhZ2Ugc3VwcG9ydCBmb3IgaXQgKHRoZSBuZXcgYGZvci4uLm9mYCBsb29wIGNhbiB3b3JrIHdpdGhcbiAqIGFueSBvYmplY3QgdGhhdCBjb3JyZWN0bHkgaW1wbGVtZW50cyB0aGUgYGl0ZXJhdG9yYCBwcm90b2NvbCkuXG4gKlxuICogVG8gc3VwcG9ydCB0cmFuc2R1Y3Rpb24sIFhkdWNlIGV4cGVjdHMgY29sbGVjdGlvbnMgdG8gaW1wbGVtZW50IGZvdXJcbiAqIHByb3RvY29scy5cbiAqXG4gKiAtIGBpdGVyYXRvcmA6IGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGFuIGl0ZXJhdG9yICh0aGlzIG9uZSBpcyBidWlsdCBpbiB0b1xuICogICBFUzYgSmF2YVNjcmlwdClcbiAqIC0gYHRyYW5zZHVjZXIvaW5pdGA6IGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgbmV3LCBlbXB0eSBpbnN0YW5jZSBvZiB0aGVcbiAqICAgb3V0cHV0IGNvbGxlY3Rpb25cbiAqIC0gYHRyYW5zZHVjZXIvc3RlcGA6IGEgZnVuY3Rpb24gdGhhdCB0YWtlcyBhbiBhY2N1bXVsYXRvciAodGhlIHJlc3VsdCBvZiB0aGVcbiAqICAgcmVkdWN0aW9uIHNvIGZhcikgYW5kIHRoZSBuZXh0IGlucHV0IHZhbHVlLCBhbmQgdGhlbiByZXR1cm5zIHRoZVxuICogICBhY2N1bXVsYXRvciB3aXRoIHRoZSBuZXh0IGlucHV0IHZhbHVlIGFkZGVkIHRvIGl0XG4gKiAtIGB0cmFuc2R1Y2VyL3Jlc3VsdGA6IGEgZnVuY3Rpb24gdGhhdCB0YWtlcyB0aGUgcmVkdWNlZCBjb2xsZWN0aW9uIGFuZFxuICogICByZXR1cm5zIHRoZSBmaW5hbCBvdXRwdXQgY29sbGVjdGlvblxuICpcbiAqIGBpdGVyYXRvcmAgaXMgdGhlIGJ1aWx0LWluIEphdmFTY3JpcHQgcHJvdG9jb2wuIFdoZW4gY2FsbGVkLCBpdCBpcyBleHBlY3RlZFxuICogdG8gcmV0dXJuIGFuIGl0ZXJhdG9yIG92ZXIgdGhlIGltcGxlbWVudGluZyBjb2xsZWN0aW9uLiBUaGlzIGl0ZXJhdG9yIGlzIGFuXG4gKiBvYmplY3QgdGhhdCBoYXMgYSBgbmV4dGAgZnVuY3Rpb24uIEVhY2ggY2FsbCB0byBgbmV4dGAgaXMgZXhwZWN0ZWQgdG8gcmV0dXJuXG4gKiBhbiBvYmplY3Qgd2l0aCBgdmFsdWVgIGFuZCBgZG9uZWAgcHJvcGVydGllcywgd2hpY2ggcmVzcGVjdGl2ZWx5IGhvbGQgdGhlXG4gKiBuZXh0IHZhbHVlIG9mIHRoZSBpdGVyYXRvciBhbmQgYSBib29sZWFuIHRvIGluZGljYXRlIHdoZXRoZXIgdGhlIGl0ZXJhdGlvblxuICogaGFzIHJlYWNoZWQgaXRzIGVuZC4gKFRoaXMgaXMgYSBzaW1wbGlmaWVkIGV4cGxhbmF0aW9uOyBzZWVcbiAqIHtAbGluayBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L0d1aWRlL0l0ZXJhdG9yc19hbmRfR2VuZXJhdG9yc3x0aGlzIE1ETiBwYWdlfVxuICogZm9yIG1vcmUgZGV0YWlsZWQgaW5mb3JtYXRpb24uKVxuICpcbiAqIGB0cmFuc2R1Y2VyL2luaXRgIChyZWZlcnJlZCB0byBmcm9tIG5vdyBvbiBhcyBgaW5pdGApIHNob3VsZCBiZSBhIGZ1bmN0aW9uXG4gKiB0aGF0IHRha2VzIG5vIHBhcmFtZXRlcnMgYW5kIHJldHVybnMgYSBuZXcsIGVtcHR5IGluc3RhbmNlIG9mIHRoZSBvdXRwdXRcbiAqIGNvbGxlY3Rpb24uIFRoaXMgaXMgdGhlIGZ1bmN0aW9uIHRoYXQgZGVmaW5lcyBob3cgdG8gY3JlYXRlIGEgbmV3IGNvbGxlY3Rpb25cbiAqIG9mIHRoZSBjb3JyZWN0IHR5cGUuXG4gKlxuICogYHRyYW5zZHVjZXIvc3RlcGAgKHJlZmVycmVkIHRvIGZyb20gbm93IG9uIGFzIGBzdGVwYCkgc2hvdWxkIGJlIGEgZnVuY3Rpb25cbiAqIHRoYXQgdGFrZXMgdHdvIHBhcmFtZXRlcnMuIFRoZXNlIHBhcmFtZXRlcnMgYXJlIHRoZSByZXN1bHQgb2YgdGhlIHJlZHVjdGlvblxuICogc28gZmFyIChhbmQgc28gaXMgYSBjb2xsZWN0aW9uIG9mIHRoZSBvdXRwdXQgdHlwZSkgYW5kIHRoZSBuZXh0IHZhbHVlIGZyb21cbiAqIHRoZSBpbnB1dCBjb2xsZWN0aW9uLiBJdCBtdXN0IHJldHVybiB0aGUgbmV3IHJlZHVjdGlvbiByZXN1bHQsIHdpdGggdGhlIG5leHRcbiAqIHZhbHVlIGluY29ycG9yYXRlZCBpbnRvIGl0LiBUaGlzIGlzIHRoZSBmdW5jdGlvbiB0aGF0IGRlZmluZXMgaG93IHJlZHVjZSBhXG4gKiB2YWx1ZSBvbnRvIHRoZSBjb2xsZWN0aW9uLlxuICpcbiAqIGB0cmFuc2R1Y2VyL3Jlc3VsdGAgKHJlZmVycmVkIHRvIGZyb20gbm93IG9uIGFzIGByZXN1bHRgKSBzaG91bGQgYmUgYVxuICogZnVuY3Rpb24gdGhhdCB0YWtlcyBvbmUgcGFyYW1ldGVyLCB3aGljaCBpcyB0aGUgZnVsbHkgcmVkdWNlZCBjb2xsZWN0aW9uLiBJdFxuICogc2hvdWxkIHJldHVybiB0aGUgZmluYWwgb3V0cHV0IGNvbGxlY3Rpb24uIFRoaXMgYWZmb3JkcyBhIGNoYW5jZSB0byBtYWtlIGFueVxuICogbGFzdC1taW51dGUgYWRqdXN0bWVudHMgdG8gdGhlIHJlZHVjZWQgY29sbGVjdGlvbiBiZWZvcmUgcmV0dXJuaW5nIGl0LlxuICpcbiAqIEFycmF5cywgc3RyaW5ncywgYW5kIG9iamVjdHMgYXJlIGFsbCBnaXZlbiBzdXBwb3J0IGZvciBhbGwgb2YgdGhlc2VcbiAqIHByb3RvY29scy4gT3RoZXIgY29sbGVjdGlvbnMgd2lsbCBoYXZlIHRvIHByb3ZpZGUgdGhlaXIgb3duICh0aG91Z2ggaXQgc2hvdWxkXG4gKiBiZSBub3RlZCB0aGF0IHNpbmNlIGBpdGVyYXRvcmAgaXMgYnVpbHQtaW4sIG1hbnkgdGhpcmQtcGFydHkgY29sbGVjdGlvbnMgd2lsbFxuICogYWxyZWFkeSBpbXBsZW1lbnQgdGhpcyBwcm90b2NvbCkuIEFzIGFuIGV4YW1wbGUsIGxldCdzIGFkZCB0cmFuc2R1Y2VyIHN1cHBvcnRcbiAqIHRvIGEgdGhpcmQtcGFydHkgY29sbGVjdGlvbiwgdGhlIGBJbW11dGFibGUuTGlzdGAgY29sbGVjdGlvbiBmcm9tXG4gKiB7QGxpbmsgaHR0cHM6Ly9mYWNlYm9vay5naXRodWIuaW8vaW1tdXRhYmxlLWpzL3xpbW11dGFibGUtanN9LlxuICpcbiAqIGBgYFxuICogSW1tdXRhYmxlLkxpc3QucHJvdG90eXBlW3Byb3RvY29scy5pbml0XSA9ICgpID0+IEltbXV0YWJsZS5MaXN0KCkuYXNNdXRhYmxlKCk7XG4gKiBJbW11dGFibGUuTGlzdC5wcm90b3R5cGVbcHJvdG9jb2xzLnN0ZXBdID0gKGFjYywgaW5wdXQpID0+IGFjYy5wdXNoKGlucHV0KTtcbiAqIEltbXV0YWJsZS5MaXN0LnByb3RvdHlwZVtwcm90b2NvbHMucmVzdWx0XSA9ICh2YWx1ZSkgPT4gdmFsdWUuYXNJbW11dGFibGUoKTtcbiAqIGBgYFxuICpcbiAqIGBJbW11dGFibGUuTGlzdGAgYWxyZWFkeSBpbXBsZW1lbnRzIGBpdGVyYXRvcmAsIHNvIHdlIGRvbid0IGhhdmUgdG8gZG8gaXRcbiAqIG91cnNlbHZlcy5cbiAqXG4gKiBUaGUgYGluaXRgIGZ1bmN0aW9uIHJldHVybnMgYW4gZW1wdHkgbXV0YWJsZSBsaXN0LiBUaGlzIGlzIGltcG9ydGFudCBmb3JcbiAqIGltbXV0YWJsZS1qcyBiZWNhdXNlIGl0cyBkZWZhdWx0IGxpc3RzIGFyZSBpbW11dGFibGUsIGFuZCBpbW11dGFibGUgbGlzdHNcbiAqIG1lYW4gdGhhdCBhIG5ldyBsaXN0IGhhcyB0byBiZSBjcmVhdGVkIHdpdGggZXZlcnkgcmVkdWN0aW9uIHN0ZXAuIEl0IHdvdWxkXG4gKiB3b3JrIGZpbmUsIGJ1dCBpdCdzIHF1aXRlIGluZWZmaWNpZW50LlxuICpcbiAqIFRoZSBgc3RlcGAgZnVuY3Rpb24gYWRkcyB0aGUgbmV4dCB2YWx1ZSB0byB0aGUgYWxyZWFkeS1jcmVhdGVkIGxpc3QuXG4gKiBgSW1tdXRhYmxlLkxpc3RgIHByb3ZpZGVzIGEgYHB1c2hgIGZ1bmN0aW9uIHRoYXQgd29ya3MgbGlrZSBhbiBhcnJheSdzXG4gKiBgcHVzaGAsIGV4Y2VwdCB0aGF0IGl0IHJldHVybnMgdGhlIG5ldyBsaXN0IHdpdGggdGhlIHZhbHVlIHB1c2hlZCBvbnRvIGl0LlxuICogVGhpcyBpcyBwZXJmZWN0IGZvciBvdXIgYHN0ZXBgIGZ1bmN0aW9uLlxuICpcbiAqIFRoZSBgcmVzdWx0YCBmdW5jdGlvbiBjb252ZXJ0cyB0aGUgbm93LWZpbmlzaGVkIG11dGFibGUgbGlzdCBpbnRvIGFuXG4gKiBpbW11dGFibGUgb25lLCB3aGljaCBpcyB3aGF0J3MgZ29pbmcgdG8gYmUgZXhwZWN0ZWQgaWYgd2UncmUgdHJhbnNkdWNpbmdcbiAqIHNvbWV0aGluZyBpbnRvIGFuIGBJbW11dGFibGUuTGlzdGAuIEluIG1vc3QgY2FzZXMsIGByZXN1bHRgIGRvZXNuJ3QgaGF2ZSB0b1xuICogZG8gYW55IHdvcmssIGJ1dCBzaW5jZSB3ZSdyZSBjcmVhdGluZyBhbiBpbnRlcm1lZGlhdGUgcmVwcmVzZW50YXRpb24gb2Ygb3VyXG4gKiBjb2xsZWN0aW9uIHR5cGUgaGVyZSwgdGhpcyBsZXRzIHVzIGNyZWF0ZSB0aGUgY29sbGVjdGlvbiB0aGF0IHdlIGFjdHVhbGx5XG4gKiB3YW50IHRvIG91dHB1dC4gKFdpdGhvdXQgYHJlc3VsdGAsIHdlIHdvdWxkIGhhdmUgdG8gdXNlIGltbXV0YWJsZSBsaXN0cyBhbGxcbiAqIHRoZSB3YXkgdGhyb3VnaCwgY3JlYXRpbmcgYSBuZXcgb25lIHdpdGggZWFjaCBgc3RlcGAgZnVuY3Rpb24sIHNpbmNlIHdlXG4gKiB3b3VsZG4ndCBiZSBhYmxlIHRvIG1ha2UgdGhpcyBjb252ZXJzdGlvbiBhdCB0aGUgZW5kLilcbiAqXG4gKiBXaXRoIHRob3NlIHByb3RvY29scyBpbXBsZW1lbnRlZCBvbiB0aGUgcHJvdG90eXBlLCBgSW1tdXRhYmxlLkxpc3RgXG4gKiBjb2xsZWN0aW9ucyBjYW4gbm93IHN1cHBvcnQgYW55IHRyYW5zZHVjdGlvbiB3ZSBjYW4gb2ZmZXIuXG4gKlxuICogIyMjIFByb3RvY29sc1xuICpcbiAqIEFmdGVyIHRhbGtpbmcgYSBsb3QgYWJvdXQgcHJvdG9jb2xzIGFuZCBzaG93aW5nIGhvdyB0aGV5J3JlIHByb3BlcnRpZXMgYWRkZWRcbiAqIHRvIGFuIG9iamVjdCwgaXQncyBwcm9iYWJseSBwcmV0dHkgb2J2aW91cyB0aGF0IHRoZXJlJ3MgYmVlbiBubyBtZW50aW9uIG9mXG4gKiB3aGF0IHRoZSBhY3R1YWwgbmFtZXMgb2YgdGhvc2UgcHJvcGVydGllcyBhcmUuIFRoYXQncyB3aGF0XG4gKiBge0BsaW5rIG1vZHVsZTp4ZHVjZS5wcm90b2NvbHN8cHJvdG9jb2xzfWAgaXMgZm9yLlxuICpcbiAqIFRoZSBiZXN0IHdheSB0byB1c2UgdGhlc2Uga2V5cyBjYW4gYmUgc2VlbiBpbiB0aGUgaW1tdXRhYmxlLWpzIGV4YW1wbGUgYWJvdmUuXG4gKiBJbnN0ZWFkIG9mIHdvcnJ5aW5nIGFib3V0IHRoZSBuYW1lIG9mIHRoZSBrZXkgZm9yIHRoZSBgaW5pdGAgcHJvdG9jb2wsIHRoZVxuICogdmFsdWUgb2YgYHByb3RvY29scy5pbml0YCBpcyB1c2VkLlxuICpcbiAqIGB7QGxpbmsgbW9kdWxlOnhkdWNlLnByb3RvY29sc3xwcm90b2NvbHN9YCBkZWZpbmVzIHRoZXNlIHByb3RvY29sIHByb3BlcnR5XG4gKiBuYW1lcy5cbiAqXG4gKiAtIGBpbml0YFxuICogLSBgc3RlcGBcbiAqIC0gYHJlc3VsdGBcbiAqIC0gYHJlZHVjZWRgOiB1c2VkIGludGVybmFsbHkgdG8gbWFyayBhIGNvbGxlY3Rpb24gYXMgYWxyZWFkeSByZWR1Y2VkXG4gKiAtIGB2YWx1ZWA6IHVzZWQgaW50ZXJuYWxseSB0byBwcm92aWRlIHRoZSBhY3R1YWwgdmFsdWUgb2YgYSByZWR1Y2VkXG4gKiAgIGNvbGxlY3Rpb25cbiAqXG4gKiBUaGUgZmluYWwgdHdvIHZhbHVlcyBkb24ndCBoYXZlIGEgbG90IG9mIHVzZSBvdXRzaWRlIHRoZSBsaWJyYXJ5IHVubGVzc1xuICogeW91J3JlIHdyaXRpbmcgeW91ciBvd24gdHJhbnNkdWNlcnMuXG4gKlxuICogIyMgSG93IE9iamVjdHMgQXJlIFRyZWF0ZWRcbiAqXG4gKiBPYmplY3RzIGJlYXIgc29tZSB0aG91Z2h0IGJlY2F1c2UgcmVndWxhcmx5LCB0aGV5IGFyZW4ndCBjYW5kaWRhdGVzIGZvclxuICogaXRlcmF0aW9uIChhbmQgdGhlcmVmb3JlIGZvciB0cmFuc2R1Y3Rpb24gaW4gZ2VuZXJhbCkuIFRoZXkgZG9uJ3QgaGF2ZSBhIHZlcnlcbiAqIHN0cmFpZ2h0Zm9yd2FyZCBpZGVhIG9mIG9yZGVyLCBhbmQgdGhleSBoYXZlICp0d28qIHBpZWNlcyBvZiBkYXRhIChrZXkgYW5kXG4gKiB2YWx1ZSkgZm9yIGV2ZXJ5IGVsZW1lbnQgaW5zdGVhZCBvZiBvbmUuIFlldCBpdCdzIHVuZGVuaWFibGUgdGhhdCBhdCBsZWFzdFxuICogZm9yIG1vc3QgdHJhbnNmb3JtYXRpb25zLCBiZWluZyBhYmxlIHRvIGFwcGx5IHRoZW0gdG8gb2JqZWN0cyB3b3VsZCBiZSBxdWl0ZVxuICogaGFuZHkuXG4gKlxuICogRm9yIHRoYXQgcmVhc29uLCBzcGVjaWFsIHN1cHBvcnQgaXMgcHJvdmlkZWQgZW5kLXRvLWVuZCBmb3Igb2JqZWN0cy5cbiAqXG4gKiAjIyMgT2JqZWN0IGl0ZXJhdGlvblxuICpcbiAqIEl0ZXJhdGluZyBvdmVyIGFuIG9iamVjdCB3aWxsIHByb2R1Y2Ugb25lIG9iamVjdCBwZXIgcHJvcGVydHkgb2YgdGhlIG9yaWdpbmFsXG4gKiBvYmplY3QuIEFuIG9yZGVyIGlzIGltcG9zZWQ7IGJ5IGRlZmF1bHQsIHRoaXMgb3JkZXIgdGhlIHNhbWUgYXMgdGhlIG9yZGVyaW5nXG4gKiBvZiBrZXlzIGluIHBvc3QtRVM2IEphdmFzY3JpcHQ6XG4gKlxuICogMS4gS2V5cyB0aGF0IGFyZSBpbnRlZ2VycywgaW4gYXNjZW5kaW5nIG51bWVyaWNhbCBvcmRlclxuICogMi4gQWxsIG90aGVyIHN0cmluZyBrZXlzLCBpbiB0aGUgb3JkZXIgaW4gd2hpY2ggdGhleSB3ZXJlIGFkZGVkIHRvIHRoZSBvYmplY3RcbiAqIDMuIEFsbCBzeW1ib2wga2V5cywgaW4gdGhlIG9yZGVyIGluIHdoaWNoIHRoZXkgd2VyZSBhZGRlZCB0byB0aGUgb2JqZWN0XG4gKlxuICogVGhlIGB7QGxpbmsgbW9kdWxlOnhkdWNlLml0ZXJhdG9yfGl0ZXJhdG9yfWAgZnVuY3Rpb24gY2FuIGJlIHBhc3NlZCBhIHNvcnRpbmdcbiAqIGZ1bmN0aW9uIHRoYXQgY2FuIHNvcnQga2V5cyBpbiBhbnkgb3RoZXIgd2F5LlxuICpcbiAqIFRoZSByZXN1bHQgb2YgdGhlIGl0ZXJhdGlvbiwgaXMgYSBzZXQgb2Ygb2JqZWN0cyBlYWNoIHdpdGggYSBzaW5nbGUgcHJvcGVydHksXG4gKiBvbmUgZm9yIGVhY2ggZW51bWVyYWJsZSBvd24gcHJvcGVydHkgb24gdGhlIG9yaWdpbmFsIG9iamVjdC4gVGhlIHN0YW5kYXJkXG4gKiBvcmRlcmluZyBmb3Igb2JqZWN0cyAoZnJvbSBFUzYgb253YXJkKSBpcyBhcyBmb2xsb3dzOlxuICpcbiAqICMjIyBUcmFuc2Zvcm1pbmcgb2JqZWN0c1xuICpcbiAqIFdoaWxlIGl0ZXJhdGluZyBvdmVyIG9iamVjdHMgaW4gdGhpcyB3YXkgaXMgc3RyYWlnaHRmb3J3YXJkLCB0aGUgc3ludGF4IG9mXG4gKiBvYmplY3RzIG1ha2VzIGl0IHVnbHkgdG8gdHJhbnNmb3JtIHRoZW0gaW4gdGhpcyBmb3JtLiBIZXJlJ3MgYW4gZXhhbXBsZSBvZiBhXG4gKiB0cmFuc2Zvcm1hdGlvbiBmdW5jdGlvbiB0aGF0IG1ha2VzIHRoZSBvYmplY3QncyBrZXlzIHVwcGVyLWNhc2UgYW5kIGFkZHMgb25lXG4gKiB0byBlYWNoIG9mIHRoZSB2YWx1ZXM6XG4gKlxuICogYGBgXG4gKiBmdW5jdGlvbiB0cmFuc2Zvcm0ob2JqKSB7XG4gKiAgIGNvbnN0IGtleSA9IE9iamVjdC5rZXlzKG9iailbMF07XG4gKiAgIGNvbnN0IHZhbHVlID0gb2JqW2tleV07XG4gKiAgIHJldHVybiB7IFtrZXkudG9VcHBlckNhc2UoKV06IHZhbHVlICsgMSB9O1xuICogfVxuICogYGBgXG4gKlxuICogQSBoZWxwZXIgZnVuY3Rpb24gbmFtZWQgYHtAbGluayBtb2R1bGU6eGR1Y2UucHJvcGVydHl8cHJvcGVydHl9YCBjYW4gaW1wcm92ZVxuICogdGhpcyBieSBoYW5kbGluZyB0aGUgYm9pbGVycGxhdGUuXG4gKlxuICogYGBgXG4gKiBmdW5jdGlvbiBpbXByb3ZlZFRyYW5zZm9ybShvYmopIHtcbiAqICAgY29uc3Qge2ssIHZ9ID0gcHJvcGVydHkob2JqKTtcbiAqICAgcmV0dXJuIHsgW2sudG9VcHBlckNhc2UoKV06IHYgKyAxIH07XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiAjIyMgUmVkdWNpbmcgb2JqZWN0c1xuICpcbiAqIFRoZSBidWlsdC1pbiByZWR1Y2VycyAoZm9yIGFycmF5cywgb2JqZWN0cywgc3RyaW5ncywgYW5kIGl0ZXJhdG9ycylcbiAqIHVuZGVyc3RhbmQgdGhlc2Ugc2luZ2xlLXByb3BlcnR5IG9iamVjdHMgYW5kIHJlZHVjZSB0aGVtIGluIHRoZSBwcm9wZXIgbWFubmVyXG4gKiB3aXRob3V0IGFueSBmdXJ0aGVyIHdvcmsuXG4gKlxuICogVGhhdCdzIGl0IGZvciBvYmplY3Qtb2JqZWN0IHJlZHVjdGlvbi4gQ29udmVydGluZyBiZXR3ZWVuIG9iamVjdHMgYW5kIG90aGVyXG4gKiB0eXBlcyBpcyBhbm90aGVyIG1hdHRlci5cbiAqXG4gKiBFdmVyeSB0cmFuc2R1Y2VyIGZ1bmN0aW9uIGV4Y2VwdCBmb3IgYHtAbGluayBtb2R1bGU6eGR1Y2Uuc2VxdWVuY2V8c2VxdWVuY2V9YFxuICogaXMgY2FwYWJsZSBvZiB0dXJuaW5nIGFuIG9iamVjdCBpbnRvIGEgZGlmZmVyZW50IHR5cGUgb2YgY29sbGVjdGlvbiwgdHVybmluZ1xuICogYSBkaWZmZXJlbnQgdHlwZSBvZiBjb2xsZWN0aW9uIGludG8gYW4gb2JqZWN0LCBvciBib3RoLiBPYmplY3RzIGFyZSBkaWZmZXJlbnRcbiAqIGJlY2F1c2UgdGhleSdyZSB0aGUgb25seSBcImNvbGxlY3Rpb25zXCIgdGhhdCBoYXZlIHR3byBkaWZmZXJlbnQgcGllY2VzIG9mIGRhdGFcbiAqIHBlciBlbGVtZW50LiBCZWNhdXNlIG9mIHRoaXMsIHdlIGhhdmUgdG8gaGF2ZSBhIHN0cmF0ZWd5IG9uIGhvdyB0byBtb3ZlIGZyb21cbiAqIG9uZSB0byBhbm90aGVyLlxuICpcbiAqIFRyYW5zZHVjaW5nIGFuIG9iamVjdCBpbnRvIGEgZGlmZmVyZW50IHR5cGUgaXMgZ2VuZXJhbGx5IHByZXR0eSBlYXN5LiBJZiBhblxuICogb2JqZWN0IGlzIGNvbnZlcnRlZCBpbnRvIGFuIGFycmF5LCBmb3IgaW5zdGFuY2UsIHRoZSBhcnJheSBlbGVtZW50cyB3aWxsIGVhY2hcbiAqIGJlIHNpbmdsZS1wcm9wZXJ0eSBvYmplY3RzLCBvbmUgcGVyIHByb3BlcnR5IG9mIHRoZSBvcmlnaW5hbCBvYmplY3QuXG4gKlxuICogU3RyaW5ncyBhcmUgYSBkaWZmZXJlbnQgc3RvcnksIHNpbmNlIGVuY29kaW5nIGEgc2luZ2xlLXByb3BlcnR5IG9iamVjdCB0byBhXG4gKiBzdHJpbmcgaXNuJ3QgcG9zc2libGUgKGJlY2F1c2UgZXZlcnkgXCJlbGVtZW50XCIgb2YgYSBzdHJpbmcgaGFzIHRvIGJlIGEgc2luZ2xlXG4gKiBjaGFyYWN0ZXIpLiBTdHJpbmdzIHRoYXQgYXJlIHByb2R1Y2VkIGZyb20gb2JqZWN0cyB3aWxsIGluc3RlYWQganVzdCBiZSB0aGVcbiAqIG9iamVjdCB2YWx1ZXMsIGNvbmNhdGVuYXRlZC4gQmVjYXVzZSBvYmplY3RzIGFyZSBpdGVyYXRlZCBpbiBhIHBhcnRpY3VsYXJcbiAqIG9yZGVyLCB0aGlzIGNvbnZlcnNpb24gd2lsbCBhbHdheXMgcHJvZHVjZSB0aGUgc2FtZSBzdHJpbmcsIGJ1dCBleGNlcHQgaW5cbiAqIHNvbWUgdmVyeSBzcGVjaWZpYyBjYXNlcyB0aGVyZSByZWFsbHkgaXNuJ3QgYSBsb3Qgb2YgdXNlIGZvciB0aGlzIGNvbnZlcnNpb24uXG4gKlxuICogYGBgXG4gKiBjb25zdCBvYmogPSB7YTogMSwgYjogMn07XG4gKlxuICogbGV0IHJlc3VsdCA9IGFzQXJyYXkob2JqKTtcbiAqIC8vIHJlc3VsdCA9IFt7YTogMX0sIHtiOiAyfV1cbiAqXG4gKiByZXN1bHQgPSBhc0l0ZXJhdG9yKG9iaik7XG4gKiAvLyByZXN1bHQgaXMgYW4gaXRlcmF0b3Igd2l0aCB0d28gdmFsdWVzOiB7YTogMX0gYW5kIHtiOiAyfVxuICpcbiAqIHJlc3VsdCA9IGludG8oSW1tdXRhYmxlLkxpc3QoKSwgb2JqKVxuICogLy8gcmVzdWx0IGlzIGFuIGltbXV0YWJsZSBsaXN0IHdpdGggdHdvIGVsZW1lbnRzOiB7YTogMX0gYW5kIHtiOiAyfVxuICpcbiAqIHJlc3VsdCA9IGFzU3RyaW5nKG9iaik7XG4gKiAvLyByZXN1bHQgaXMgJzEyJ1xuICogYGBgXG4gKlxuICogVGhlIG9wcG9zaXRlIGNvbnZlcnNpb24gZGVwZW5kcyBvbiB0aGUgdmFsdWVzIGluc2lkZSB0aGUgY29sbGVjdGlvbnMuIElmXG4gKiB0aG9zZSB2YWx1ZXMgYXJlIG9iamVjdHMsIHRoZW4gdGhlIHJlc3VsdCBpcyBhbiBvYmplY3Qgd2l0aCBhbGwgb2YgdGhlXG4gKiBvYmplY3RzIGNvbWJpbmVkIChpZiBtb3JlIHRoYW4gb25lIGhhcyB0aGUgc2FtZSBrZXksIHRoZSBsYXN0IG9uZSBpcyB0aGUgb25lXG4gKiB0aGF0J3Mga2VwdCkuIE90aGVyd2lzZSwga2V5cyBhcmUgY3JlYXRlZCBmb3IgZWFjaCBvZiB0aGUgZWxlbWVudHMsIHN0YXJ0aW5nXG4gKiB3aXRoIGAwYCBhbmQgaW5jcmVhc2luZyBmcm9tIHRoZXJlLlxuICpcbiAqIFRoaXMgbWVhbnMgdGhhdCBjb252ZXJ0aW5nIGFuIG9iamVjdCB0byBhbnkgbm9uLXN0cmluZyBjb2xsZWN0aW9uIGFuZCBiYWNrXG4gKiBwcm9kdWNlcyB0aGUgb3JpZ2luYWwgb2JqZWN0LlxuICpcbiAqIGBgYFxuICogbGV0IHJlc3VsdCA9IGFzT2JqZWN0KFt7YTogMX0sIHtiOiAyfV0pO1xuICogLy8gcmVzdWx0ID0ge2E6IDEsIGI6IDJ9XG4gKlxuICogcmVzdWx0ID0gYXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vIHJlc3VsdCA9IHswOiAxLCAxOiAyLCAyOiAzfVxuICpcbiAqIHJlc3VsdCA9IGFzT2JqZWN0KCdoZWxsbycpO1xuICogLy8gcmVzdWx0ID0gezA6ICdoJywgMTogJ2UnLCAyOiAnbCcsIDM6ICdsJywgNDogJ28nfVxuICogYGBgXG4gKlxuICogQG1vZHVsZSB4ZHVjZVxuICovXG5cbmV4cG9ydCB7IHByb3RvY29scyB9IGZyb20gXCJtb2R1bGVzL3Byb3RvY29sXCI7XG5leHBvcnQgeyBpdGVyYXRvciwgaXNJdGVyYWJsZSwga3YsIGtleSwgdmFsdWUgfSBmcm9tIFwibW9kdWxlcy9pdGVyYXRpb25cIjtcbmV4cG9ydCB7XG4gIGNvbXBsZXRlLFxuICB1bmNvbXBsZXRlLFxuICBpc0NvbXBsZXRlZCxcbiAgZW5zdXJlQ29tcGxldGVkLFxuICBlbnN1cmVVbmNvbXBsZXRlZCxcbiAgcmVkdWNlLFxuICB0b0Z1bmN0aW9uLFxuICB0b1JlZHVjZXIsXG4gIHRvVHJhbnNkdWNlclxufSBmcm9tIFwibW9kdWxlcy9yZWR1Y3Rpb25cIjtcbmV4cG9ydCB7XG4gIHRyYW5zZHVjZSxcbiAgc2VxdWVuY2UsXG4gIGludG8sXG4gIGFzQXJyYXksXG4gIGFzT2JqZWN0LFxuICBhc1N0cmluZyxcbiAgYXNJdGVyYXRvcixcbiAgY29tcG9zZVxufSBmcm9tIFwibW9kdWxlcy90cmFuc2Zvcm1hdGlvblwiO1xuZXhwb3J0IHtcbiAgaXNBcnJheSxcbiAgaXNGdW5jdGlvbixcbiAgaXNHZW5lcmF0b3JGdW5jdGlvbixcbiAgaXNOdW1iZXIsXG4gIGlzT2JqZWN0LFxuICBpc1N0cmluZ1xufSBmcm9tIFwibW9kdWxlcy91dGlsc1wiO1xuXG4vKipcbiAqIEFuIGl0ZXJhYmxlIGFzIGRlZmluZWQgYnkgSmF2YVNjcmlwdC5cbiAqXG4gKiBAdHlwZWRlZiBKc0l0ZXJhYmxlXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcHJvcGVydHkge21vZHVsZTp4ZHVjZS5Kc0l0ZXJhYmxlRnVuY3Rpb259IFN5bWJvbC5pdGVyYXRvciBBIGZ1bmN0aW9uIHRoYXRcbiAqICAgICBwcm9kdWNlcyBhbiBpdGVyYXRvciB3aGVuIGNhbGxlZC5cbiAqL1xuXG4vKipcbiAqIEEgZnVuY3Rpb24gdGhhdCBwcm9kdWNlcyBhbiBpdGVyYXRvci4gVGhpcyBpcyB0aGUgY2hhcmFjdGVyaXN0aWMgcHJvcGVydHkgb2ZcbiAqIGEgSmF2YVNjcmlwdCBpdGVyYWJsZS5cbiAqXG4gKiBAY2FsbGJhY2sgSnNJdGVyYWJsZUZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcmV0dXJucyB7bW9kdWxlOnhkdWNlLkl0ZXJhdG9yfSBBbiBpdGVyYXRvciBvdmVyIHRoZVxuICogICAgIHtAbGluayBtb2R1bGU6eGR1Y2UuSnNJdGVyYWJsZX0gdGhhdCBwcm9kdWNlZCBpdC5cbiAqL1xuXG4vKipcbiAqIEFuIGl0ZXJhYmxlIGFzIGRlZmluZWQgYnkgdGhpcyBsaWJyYXJ5LiBTaW5jZSBpdCBwcm92aWRlcyBzcGVjaWZpYyBzdXBwb3J0XG4gKiBmb3Igb2JqZWN0cywgdGhpcyB0eXBlIGlzIG1lcmVseSBhIG5vcm1hbCBKYXZhU2NyaXB0IGl0ZXJhYmxlICpvciogYSBwbGFpblxuICogb2JqZWN0LlxuICpcbiAqIEB0eXBlZGVmIHsoT2JqZWN0fG1vZHVsZTp4ZHVjZS5Kc0l0ZXJhYmxlKX0gSXRlcmFibGVcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqL1xuXG4vKipcbiAqIEEgZ2VuZXJpYyBpdGVyYXRvci4gVGhpcyBjb25mb3JtcyB0byB0aGUgYGl0ZXJhdG9yYCBwcm90b2NvbCBpbiB0aGF0IGl0IGhhc1xuICogYSBge0BsaW5rIG1vZHVsZTp4ZHVjZS5OZXh0RnVuY3Rpb258bmV4dH1gIGZ1bmN0aW9uIHRoYXQgcHJvZHVjZXNcbiAqIHtAbGluayBtb2R1bGU6eGR1Y2UuTmV4dFZhbHVlfGBpdGVyYXRvcmAtY29tcGF0aWJsZSBvYmplY3RzfS5cbiAqXG4gKiBAdHlwZWRlZiBJdGVyYXRvclxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHByb3BlcnR5IHttb2R1bGU6eGR1Y2UuTmV4dEZ1bmN0aW9ufSBuZXh0IEEgZnVuY3Rpb24gdGhhdCwgd2hlbiBjYWxsZWQsXG4gKiAgICAgcmV0dXJucyB0aGUgbmV4dCBpdGVyYXRvciB2YWx1ZS5cbiAqL1xuXG4vKipcbiAqIFRoZSBmdW5jdGlvbiB0aGF0IHNhdGlzZmllcyB0aGUgYGl0ZXJhdG9yYCBwcm90b2NvbCBvbiBhbiBvYmplY3QuIFdoZW5cbiAqIGNhbGxlZCwgaXQgcmV0dXJucyB0aGUgbmV4dCB2YWx1ZSBpbiB0aGUgaXRlcmF0b3IuXG4gKlxuICogQGNhbGxiYWNrIE5leHRGdW5jdGlvblxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHJldHVybnMge21vZHVsZTp4ZHVjZS5OZXh0VmFsdWV9IFRoZSBuZXh0IHZhbHVlIGluIHRoZSBpdGVyYXRvci5cbiAqL1xuXG4vKipcbiAqIFRoZSBvYmplY3QgcmV0dXJuZWQgYnkgYSBjYWxsIHRvIGB7QGxpbmsgbW9kdWxlOnhkdWNlLk5leHRGdW5jdGlvbnxuZXh0fWAuXG4gKiBJdCBpbmRpY2F0ZXMgd2hldGhlciB0aGUgaXRlcmF0b3IgaXMgY29tcGxldGUgYW5kLCBpZiBub3QsIHdoYXQgdGhlIG5leHRcbiAqIHZhbHVlIGlzLlxuICpcbiAqIEB0eXBlZGVmIHtvYmplY3R9IE5leHRWYWx1ZVxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHByb3BlcnR5IHsqfSB2YWx1ZSBUaGUgdmFsdWUgdGhhdCB0aGUgaXRlcmF0b3IgaGFzIHByb3ZpZGVkLlxuICogQHByb3BlcnR5IHtib29sZWFufSBkb25lIEluZGljYXRlcyB3aGV0aGVyIHRoZSBpdGVyYXRvciBoYXMgY29tcGxldGVkLiBJZlxuICogICAgIHRoaXMgaXMgYHRydWVgLCB0aGVuIGB2YWx1ZWAgd2lsbCBiZSBgdW5kZWZpbmVkYCBhbmQgZXZlcnkgc3Vic2VxdWVudFxuICogICAgIGNhbGwgdG8gYHtAbGluayBtb2R1bGU6eGR1Y2UuTmV4dEZ1bmN0aW9ufG5leHR9YCB3aWxsIGNvbnRpbnVlIHRvIHByb2R1Y2VcbiAqICAgICB0aGUgc2FtZSB2YWx1ZS4gSWYgaXQncyBgZmFsc2VgLCB0aGVuIGB2YWx1ZWAgcmVwcmVzZW50cyB0aGUgbmV0IHZhbHVlIGluXG4gKiAgICAgdGhlIGl0ZXJhdG9yLCBhbmQgdGhlIG5leHQgY2FsbCB0b1xuICogICAgIGB7QGxpbmsgbW9kdWxlOnhkdWNlLk5leHRGdW5jdGlvbnxuZXh0fWAgd2lsbCBjb250aW51ZSB0byBwcm9kdWNlIHRoZVxuICogICAgIG5leHQgdmFsdWUuXG4gKi9cblxuLyoqXG4gKiBBIHNvcnQgZnVuY3Rpb24gZm9yIHRoZSBrZXlzIG9mIGFuIG9iamVjdC4gVGhpcyBjb25mb3JtcyB0byB0aGUgbm9ybWFsIHNvcnRcbiAqIGZ1bmN0aW9uIHVzZWQgaW4gYEFycmF5LnByb3RvdHlwZS5zb3J0YC5cbiAqXG4gKiBAY2FsbGJhY2sgU29ydEZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcHJvcGVydHkgeyp9IGEgVGhlIGZpcnN0IHZhbHVlIHRvIGJlIHNvcnRlZC5cbiAqIEBwcm9wZXJ0eSB7Kn0gYiBUaGUgc2Vjb25kIHZhbHVlIHRvIGJlIHNvcnRlZC5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IEVpdGhlciBgLTFgIGlmIGBhID4gYmAsIGAxYCBpZiBgYSA8IGJgLCBvciBgMGAgaWYgYGEgPT09XG4gKiAgICAgYmAuXG4gKi9cblxuLyoqXG4gKiBBIGZ1bmN0aW9uIHRoYXQgY2FuIGhhdmUgYW4gaXRlcmF0b3IgY3JlYXRlZCBmb3IgaXQuXG4gKlxuICogQGNhbGxiYWNrIEl0ZXJhYmxlRnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwYXJhbSB7bnVtYmVyfSBbaW5kZXhdIFRoZSBudW1iZXIgb2YgdGltZXMgdGhhdFxuICogICAgIGB7QGxpbmsgbW9kdWxlOnhkdWNlLk5leHRGdW5jdGlvbnxuZXh0fWAgaGFzIGJlZW4gY2FsbGVkIG9uIHRoZVxuICogICAgIGZ1bmN0aW9uJ3MgaXRlcmF0b3IuIFRoaXMgd2lsbCBzdGFydCBhdCBgMGAgZm9yIHRoZSBmaXJzdCBjYWxsIHRvXG4gKiAgICAgYHtAbGluayBtb2R1bGU6eGR1Y2UuTmV4dEZ1bmN0aW9ufG5leHR9YCBhbmQgaW5jcmVhc2UgYnkgb25lIGZvciBlYWNoXG4gKiAgICAgc3Vic2VxdWVudCBjYWxsLlxuICogQHBhcmFtIHsqfSBbbGFzdF0gVGhlIHJldHVybiB2YWx1ZSBvZiB0aGUgZnVuY3Rpb24gdGhlIGxhc3QgdGltZVxuICogICAgIGB7QGxpbmsgbW9kdWxlOnhkdWNlLk5leHRGdW5jdGlvbnxuZXh0fWAgd2FzIGNhbGxlZCBvbiBpdHMgaXRlcmF0b3IuIEZvclxuICogICAgIHRoZSBmaXJzdCBjYWxsLCB0aGlzIGlzIHNldCB0byBgdW5kZWZpbmVkYC5cbiAqIEByZXR1cm5zIHsqfSBUaGUgcmV0dXJuIHZhbHVlIGZvciB0aGF0IGl0ZXJhdGlvbi5cbiAqL1xuXG4vKipcbiAqIEFuIG9iamVjdCByZXByZXNlbnRhdGlvbiBvZiBhIHNpbmdsZS1wcm9wZXJ0eSBvYmplY3QsIGJ1dCB1c2luZyBvbmUgcHJvcGVydHlcbiAqIGZvciB0aGUga2V5IGFuZCBvbmUgZm9yIHRoZSB2YWx1ZS4gVGhpcyBmb3JtYXQgaXMgZWFzaWVyIHRvIHVzZSBpblxuICogdHJhbnNmb3JtYXRpb24gZnVuY3Rpb25zLlxuICpcbiAqIEB0eXBlZGVmIHtvYmplY3R9IFByb3BlcnR5T2JqZWN0XG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcHJvcGVydHkgeyhTdHJpbmd8U3ltYm9sKX0gayBUaGUga2V5IG9mIHRoZSBzaW5nbGUtcHJvcGVydHkgb2JqZWN0IHRoYXQgdGhpc1xuICogICAgIG9iamVjdCByZXByZXNlbnRzLlxuICogQHByb3BlcnR5IHsqfSB2IFRoZSB2YWx1ZSBvZiB0aGUgc2luZ2xlLXByb3BlcnR5IG9iamVjdCB0aGF0IHRoaXMgb2JqZWN0XG4gKiAgICAgcmVwcmVzZW50cy5cbiAqL1xuXG4vKipcbiAqIEFuIGluaXQgZnVuY3Rpb24sIHdoaWNoIHByb3ZpZGVzIGEgbmV3LCBlbXB0eSBpbnN0YW5jZSBvZiBhIGNvbGxlY3Rpb24uXG4gKlxuICogQGNhbGxiYWNrIEluaXRGdW5jdGlvblxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHJldHVybnMgeyp9IEEgbmV3LCBlbXB0eSBpbnN0YW5jZSBvZiBhIGNvbGxlY3Rpb24uXG4gKi9cblxuLyoqXG4gKiBBIHN0ZXAgZnVuY3Rpb24sIHRoYXQgcmVkdWNlcyBhIGNvbGxlY3Rpb24gYW5kIGEgbmV3IHZhbHVlIHRvIHRoZVxuICogY29sbGVjdGlvbiB3aXRoIHRoZSB2YWx1ZSBhZGRlZC5cbiAqXG4gKiBAY2FsbGJhY2sgU3RlcEZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcGFyYW0geyp9IGFjYyBBbiBhY2N1bXVsYXRlZCB2YWx1ZSB0byB3aGljaCB0aGUgbmV3IHZhbHVlIGlzIGJlaW5nIGFkZGVkLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgbmV3IHZhbHVlIHRvIGJlIGFkZGVkIHRvIHRoZSBhY2N1bXVsYXRlZCB2YWx1ZS5cbiAqIEByZXR1cm5zIHsqfSBUaGUgYWNjdW11bGF0ZWQgdmFsdWUgd2l0aCB0aGUgbmV3IHZhbHVlIGludGVncmF0ZWQgaW50byBpdC5cbiAqL1xuXG4vKipcbiAqIEEgcmVzdWx0IGZ1bmN0aW9uIHRoYXQgb3B0aW9uYWxseSBtb2RpZmllcyB0aGUgaW5wdXQgY29sbGVjdGlvbiBhbmQgdGhlblxuICogcmV0dXJucyBpdC4gVGhpcyBpcyB1c2VkIGF0IHRoZSBlbmQgb2YgYSByZWR1Y3Rpb24gdG8gYWZmb3JkIGEgbGFzdCBjaGFuY2VcbiAqIGZvciB0aGUgdHJhbnNkdWNlciB0byBtb2RpZnkgdGhlIG91dHB1dCB2YWx1ZS5cbiAqXG4gKiBAY2FsbGJhY2sgUmVzdWx0RnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwYXJhbSB7Kn0gaW5wdXQgVGhlIHZhbHVlIHRvIGJlIG1vZGlmaWVkIGJlZm9yZSBiZWluZyBvdXRwdXQuXG4gKiBAcmV0dXJucyB7Kn0gVGhlIG1vZGlmaWVkIHZhbHVlIHRvIGJlIG91dHB1dCBieSBhIHRyYW5zZHVjZXIuXG4gKi9cblxuLyoqXG4gKiBBbiBvYmplY3Qgd2l0aCBhbGwgb2YgdGhlIGluZm9ybWF0aW9uIG5lY2Vzc2FyeSB0byByZWR1Y2UgdmFsdWVzIGludG8gYVxuICogcGFydGljdWxhciBraW5kIG9mIGNvbGxlY3Rpb24uIFRoZXNlIGFyZSBwYXNzZWQgdG9cbiAqIHtAbGluayBtb2R1bGU6eGR1Y2UucmVkdWNlfHJlZHVjZX0gYW5kIGxpa2UgZnVuY3Rpb25zLlxuICpcbiAqIEB0eXBlZGVmIFJlZHVjZXJcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwcm9wZXJ0eSB7bW9kdWxlOnhkdWNlLkluaXRGdW5jdGlvbn0gW1N5bWJvbC5mb3IoXCJ0cmFuc2R1Y2VyL2luaXRcIildIFRoZVxuICogICAgIHJlZHVjZXIncyBpbml0IGZ1bmN0aW9uLlxuICogQHByb3BlcnR5IHttb2R1bGU6eGR1Y2UuU3RlcEZ1bmN0aW9ufSBTeW1ib2wuZm9yKFwidHJhbnNkdWNlci9zdGVwXCIpIFRoZVxuICogICAgIHJlZHVjZXIncyBzdGVwIGZ1bmN0aW9uLlxuICogQHByb3BlcnR5IHttb2R1bGU6eGR1Y2UuUmVzdWx0RnVuY3Rpb259IFN5bWJvbC5mb3IoXCJ0cmFuc2R1Y2VyL3Jlc3VsdFwiKSBUaGVcbiAqICAgICByZWR1Y2VyJ3MgcmVzdWx0IGZ1bmN0aW9uLlxuICovXG5cbi8qKlxuICogQSBjb2xsZWN0aW9uIHRoYXQgY2FuIGhhdmUgdmFsdWVzIHJlZHVjZWQgaW50byBpdC4gU2luY2UgdGhpcyBsaWJyYXJ5XG4gKiBwcm92aWRlcyBleHBsaWNpdCBzdXBwb3J0IGZvciBhcnJheXMsIG9iamVjdHMsIGFuZCBzdHJpbmdzLCB0aG9zZSB0aHJlZSBhcmVcbiAqIGFkZGVkIHRvIHRoZSB7QGxpbmsgbW9kdWxlOnhkdWNlLlJlZHVjZXJ9IHR5cGUgdG8gZGVmaW5lIHRoaXMuXG4gKlxuICogQHR5cGVkZWYgeyhBcnJheXxTdHJpbmd8T2JqZWN0fG1vZHVsZTp4ZHVjZS5SZWR1Y2VyKX0gUmVkdWNpYmxlXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKi9cblxuLyoqXG4gKiBBIGNvbGxlY3Rpb24gdGhhdCBzdXBwb3J0cyBub3Qgb25seSB0aGUgcmVndWxhciBpdGVyYWlvbiBvdmVyIGl0cyBjb250ZW50cyxcbiAqIGJ1dCBhbHNvIHJlZHVjdGlvbiBvZiB2YWx1ZXMgaW50byBpdC4gSXQgaXMgYW4gaW50ZXJzZWN0aW9uIHR5cGUgY29tYmluaW5nXG4gKiB7QGxpbmsgbW9kdWxlOnhkdWNlLkl0ZXJhYmxlfEl0ZXJhYmxlfSBhbmRcbiAqIHtAbGluayBtb2R1bGU6eGR1Y2UuUmVkdWNpYmxlfFJlZHVjaWJsZX0uXG4gKlxuICogQHR5cGVkZWYgRXhwbGljaXRJdGVyYWJsZVJlZHVjaWJsZVxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHByb3BlcnR5IHttb2R1bGU6eGR1Y2UuSnNJdGVyYWJsZUZ1bmN0aW9ufSBTeW1ib2wuaXRlcmF0b3IgQSBmdW5jdGlvbiB0aGF0XG4gKiAgICAgcHJvZHVjZXMgYW4gaXRlcmF0b3Igd2hlbiBjYWxsZWQuXG4gKiBAcHJvcGVydHkge21vZHVsZTp4ZHVjZS5Jbml0RnVuY3Rpb259IFtTeW1ib2wuZm9yKFwidHJhbnNkdWNlci9pbml0XCIpXSBUaGVcbiAqICAgICBjb2xsZWN0aW9uJ3MgaW5pdCBmdW5jdGlvbi5cbiAqIEBwcm9wZXJ0eSB7bW9kdWxlOnhkdWNlLlN0ZXBGdW5jdGlvbn0gU3ltYm9sLmZvcihcInRyYW5zZHVjZXIvc3RlcFwiKSBUaGVcbiAqICAgICBjb2xsZWN0aW9uJ3Mgc3RlcCBmdW5jdGlvbi5cbiAqIEBwcm9wZXJ0eSB7bW9kdWxlOnhkdWNlLlJlc3VsdEZ1bmN0aW9ufSBTeW1ib2wuZm9yKFwidHJhbnNkdWNlci9yZXN1bHRcIikgVGhlXG4gKiAgICAgY29sbGVjdGlvbidzIHJlc3VsdCBmdW5jdGlvbi5cbiAqL1xuXG4vKipcbiAqIFRoZSBhY3R1YWwgdHlwZSB1c2VkIGJ5IHJlZHVjaWJsZSBjb2xsZWN0aW9ucyBpbiB0aGlzIGxpYnJhcnkuIEl0IHRha2VzIHRoZVxuICogcHJvcGVydHktYmFzZWQgZGVmaW5pdGlvbiBhbmQgYWRkcyBidWlsdC1pbiB0eXBlcyB0aGF0IGFyZSBzcGVjaWFsbHlcbiAqIHN1cHBvcnRlZCBieSB0aGUgbGlicmFyeS5cbiAqXG4gKiBAdHlwZWRlZiB7KEFycmF5fE9iamVjdHxTdHJpbmd8bW9kdWxlOnhkdWNlLkV4cGxpY2l0SXRlcmFibGVSZWR1Y2libGUpfVxuICogICAgIEl0ZXJhYmxlUmVkdWNpYmxlXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKi9cblxuLyoqXG4gKiBBIGZ1bmN0aW9uIHRoYXQgdHJhbnNmb3JtcyBkYXRhIGFuZCBjYW4gYmUgY29tcG9zZWQgd2l0aCBvdGhlciB0cmFuc2R1Y2Vyc1xuICogaW50byBhIHNpbmdsZSB0cmFuc2R1Y2VyLiBUaGUgdHJhbnNkdWNlcnMgdGhlbXNlbHZlcyBhcmUgcHJvdmlkZWQgYnkgb3RoZXJcbiAqIGxpYnJhcmllczsgdGhlIG9ubHkgaW52b2x2ZW1lbnQgb2YgdGhpcyBsaWJyYXIgaXMgYXMgYSBjb25zdW1lciBvZlxuICogdHJhbnNkdWNlcnMuXG4gKlxuICogVHJhbnNkdWNlcnMgd29yayBieSBoYXZpbmcgc3RlcCBmdW5jdGlvbnMgdGhhdCBhcmUga25vd24gdmlhIHByb3RvY29sLCBhbmQgaXRcbiAqIGlzIHRoZXNlIHN0ZXAgZnVuY3Rpb25zIHRoYXQgdGFrZSBhIHZhbHVlIGF0IGEgdGltZSB0byBiZSB0cmFuc2Zvcm1lZCBhc1xuICogdGhlaXIgYXJndW1lbnRzLiBUaGUgYXJndW1lbnRzIHRvIHRoZSB0cmFuc2R1Y2VycyB0aGVtc2VsdmVzIGFyZSBvdGhlclxuICogdHJhbnNkdWNlcnMgdGhhdCBhcmUgdGhlbiBjb21wb3NlZCBpbnRvIGEgc2luZ2xlIHRyYW5zZHVjZXIsIHdoaWNoIGlzIHRoZW5cbiAqIHJldHVybmVkLiBUaGUgdmFsdWVzIHRoYXQgYXJlIHByb2R1Y2VkIGFyZSBzZWxkb20gb2YgY29uc2VxdWVuY2UgdG8gdGhlIGVuZFxuICogdXNlcjsgdGhlc2UgZnVuY3Rpb25zIGV4aXN0IHRvIGJlIHBhc3NlZCB0byBvdGhlciBmdW5jdGlvbnMgdGhhdCBkZWFsIHdpdGhcbiAqIHRyYW5zZHVjZXJzLlxuICpcbiAqIEBjYWxsYmFjayBUcmFuc2R1Y2VyXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcGFyYW0ge21vZHVsZTp4ZHVjZS5UcmFuc2R1Y2VyRnVuY3Rpb259IHhmb3JtIEEgdHJhbnNkdWNlciB0byBjaGFpbiB0aGlzXG4gKiAgICAgdHJhbnNkdWNlciB0by5cbiAqIEByZXR1cm4ge21vZHVsZTp4ZHVjZS5UcmFuc2R1Y2VyRnVuY3Rpb259IEEgbmV3IHRyYW5zZHVjZXIgY29uc2lzdGluZyBvZiB0aGVcbiAqICAgICBjb21wb3NpdGlvbiBvZiB0aGlzIG9uZSBhbmQgYHhmb3JtYC5cbiAqL1xuXG4vKipcbiAqIEFuIG9iamVjdCBjb250YWluaW5nIGFsbCBvZiB0aGUgbmVjZXNzYXJ5IGZ1bmN0aW9uIHByb3BlcnRpZXMgZm9yXG4gKiB0cmFuc2Zvcm1pbmcgZGF0YSBhbmQgdGhlbiByZWR1Y2luZyBpdCBpbnRvIGFuIG91dHB1dCB2YWx1ZS4gVGhpcyBpcyB0aGVcbiAqIHNhbWUgYXMge0BsaW5rIG1vZHVsZTp4ZHVjZS5SZWR1Y2VyfFJlZHVjZXJ9IGV4Y2VwdCB0aGF0IHRoZSBgaW5pdGAgcHJvcGVydHlcbiAqIGlzIG5vdCBvcHRpb25hbC5cbiAqXG4gKiBAdHlwZWRlZiBUcmFuc2R1Y2VyXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcHJvcGVydHkge21vZHVsZTp4ZHVjZS5Jbml0RnVuY3Rpb259IFN5bWJvbC5mb3IoXCJ0cmFuc2R1Y2VyL2luaXRcIikgVGhlXG4gKiAgICAgdHJhbnNkdWNlcidzIGluaXQgZnVuY3Rpb24uXG4gKiBAcHJvcGVydHkge21vZHVsZTp4ZHVjZS5TdGVwRnVuY3Rpb259IFN5bWJvbC5mb3IoXCJ0cmFuc2R1Y2VyL3N0ZXBcIikgVGhlXG4gKiAgICAgdHJhbnNkdWNlcidzIHN0ZXAgZnVuY3Rpb24uXG4gKiBAcHJvcGVydHkge21vZHVsZTp4ZHVjZS5SZXN1bHRGdW5jdGlvbn0gU3ltYm9sLmZvcihcInRyYW5zZHVjZXIvcmVzdWx0XCIpIFRoZVxuICogICAgIHRyYW5zZHVjZXIncyByZXN1bHQgZnVuY3Rpb24uXG4gKi9cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG5pbXBvcnQgeyBpc0ltcGxlbWVudGVkIH0gZnJvbSBcIm1vZHVsZXMvcHJvdG9jb2xcIjtcbmltcG9ydCB7IGlzRnVuY3Rpb24sIGlzT2JqZWN0LCBpc0dlbmVyYXRvckZ1bmN0aW9uIH0gZnJvbSBcIm1vZHVsZXMvdXRpbHNcIjtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGl0ZXJhdG9yIG92ZXIgYW4gb2JqZWN0LlxuICpcbiAqIERldGFpbHMgYWJvdXQgdGhpcyBmdW5jdGlvbiBhcmUgaW5jbHVkZWQgaW4gdGhlIGRvY3VtZW50YXRpb24gZm9yXG4gKiB7QGxpbmsgbW9kdWxlOnhkdWNlLml0ZXJhdG9yfGl0ZXJhdG9yfS5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIFRoZSBvYmplY3QgYmVpbmcgaXRlcmF0ZWQgb3Zlci5cbiAqIEBwYXJhbSB7bW9kdWxlOnhkdWNlLlNvcnRGdW5jdGlvbn0gW3NvcnRGbl0gQW4gb3B0aW9uYWwgZnVuY3Rpb24gdXNlZCB0byBzb3J0XG4gKiAgICAgdGhlIG9iamVjdCBrZXlzIGJlZm9yZSBpdGVyYXRpb24uIElmIGl0IGlzbid0IHByb3ZpZGVkLCB0aGUga2V5cyB3aWxsIGJlXG4gKiAgICAgc29ydGVkIGluIHRoZSBzYW1lIG9yZGVyIGFzIGBPYmplY3Qua2V5cyhvYmopYCB3b3VsZCBzb3J0IHRoZW0uXG4gKiBAcmV0dXJucyB7bW9kdWxlOnhkdWNlLkl0ZXJhdG9yfSBBbiBpdGVyYXRvciBvdmVyIHRoZSBwcm9wZXJ0aWVzIG9mIGBvYmpgLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gb2JqZWN0SXRlcmF0b3Iob2JqLCBzb3J0Rm4pIHtcbiAgcmV0dXJuIChmdW5jdGlvbiooKSB7XG4gICAgY29uc3Qga2V5cyA9XG4gICAgICB0eXBlb2Ygc29ydEZuID09PSBcImZ1bmN0aW9uXCJcbiAgICAgICAgPyBPYmplY3Qua2V5cyhvYmopLnNvcnQoc29ydEZuKVxuICAgICAgICA6IE9iamVjdC5rZXlzKG9iaik7XG4gICAgbGV0IGluZGV4ID0gMDtcblxuICAgIHdoaWxlIChpbmRleCA8IGtleXMubGVuZ3RoKSB7XG4gICAgICBjb25zdCBrID0ga2V5c1tpbmRleCsrXTtcbiAgICAgIHlpZWxkIHsgW2tdOiBvYmpba10gfTtcbiAgICB9XG4gIH0pKCk7XG59XG5cbi8qKlxuICogQSBjb252ZW5pZW5jZSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIGZpcnN0IGtleSBhbmQgdmFsdWUgaW4gYW4gb2JqZWN0IGFzXG4gKiBhIHR3by1wcm9wZXJ0eSBvYmplY3QsIG9uZSBwcm9wZXJ0eSBmb3IgdGhlIGtleSBhbmQgb25lIGZvciB0aGUgdmFsdWUuIFRoaXNcbiAqIGlzIGludGVuZGVkIHRvIHdvcmsgd2l0aCB0aGUgdmFsdWVzIHByb3ZpZGVkIGJ5IGFuIG9iamVjdCBpdGVyYXRvciwgYXMgdGhlXG4gKiBzeW50YXggb2Ygb2JqZWN0cyBkb2Vzbid0IHdvcmsgdmVyeSBuaWNlbHkgd2l0aCBzaW5nbGUtcHJvcGVydHkgb2JqZWN0cy5cbiAqXG4gKiBgYGBcbiAqIGNvbnN0IG9iaiA9IHsgYzogMSwgYTogMiwgYjogMyB9O1xuICogY29uc3QgaXRlciA9IGl0ZXJhdG9yKG9iaik7XG4gKlxuICogbGV0IHZhbHVlID0gaXRlci5uZXh0KCkudmFsdWU7XG4gKiBjb25zb2xlLmxvZyh2YWx1ZSk7ICAgICAgICAgICAgIC8vIC0+IHsgYzogMSB9XG4gKiBjb25zb2xlLmxvZyhwcm9wZXJ0eSh2YWx1ZSkpOyAgIC8vIC0+IHsgazogXCJjXCIsIHY6IDEgfVxuICpcbiAqIHZhbHVlID0gaXRlci5uZXh0KCkudmFsdWU7XG4gKiBjb25zb2xlLmxvZyh2YWx1ZSk7ICAgICAgICAgICAgIC8vIC0+IHsgYTogMiB9XG4gKiBjb25zb2xlLmxvZyhwcm9wZXJ0eSh2YWx1ZSkpOyAgIC8vIC0+IHsgazogXCJhXCIsIHY6IDIgfVxuICpcbiAqIHZhbHVlID0gaXRlci5uZXh0KCkudmFsdWU7XG4gKiBjb25zb2xlLmxvZyh2YWx1ZSk7ICAgICAgICAgICAgIC8vIC0+IHsgYjogMyB9XG4gKiBjb25zb2xlLmxvZyhwcm9wZXJ0eSh2YWx1ZSkpOyAgIC8vIC0+IHsgazogXCJiXCIsIHY6IDMgfVxuICogYGBgXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHBhcmFtIHtvYmplY3R9IG9iaiBUaGUgb2JqZWN0IHdob3NlIGZpcnN0IHByb3BlcnR5IGlzIHJldHVybmVkLlxuICogQHJldHVybiB7bW9kdWxlOnhkdWNlLlByb3BlcnR5T2JqZWN0fSBUaGUgcHJvcGVydHkgYXMgYSB0d28tcHJvcGVydHkgb2JqZWN0LlxuICovXG5mdW5jdGlvbiBrdihvYmopIHtcbiAgY29uc3Qga2V5ID0gT2JqZWN0LmtleXMob2JqKVswXTtcbiAgcmV0dXJuIHsgazoga2V5LCB2OiBvYmpba2V5XSB9O1xufVxuXG4vKipcbiAqIEEgY29udmVuaWVuY2UgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBrZXkgb2YgdGhlIGZpcnN0IHByb3BlcnR5IG9mIGFuXG4gKiBvYmplY3QuIFRoaXMgaXMgbWVhbnQgZm9yIHVzZSB3aXRoIG9iamVjdCBpdGVyYXRvcnMgdG8gbW9yZSBjb252ZW5pZW50bHlcbiAqIGFjY2VzcyBwYXJ0cyBvZiB0aGUgc2luZ2xlLXByb3BlcnR5IG9iamVjdHMgdGhhdCB0aGV5IGVtaXQuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHBhcmFtIHtvYmplY3R9IG9iaiBUaGUgb2JqZWN0IHdob3NlIGZpcnN0IGtleSBpcyByZXR1cm5lZC5cbiAqIEByZXR1cm4geyhTdHJpbmd8U3ltYm9sKX0gVGhlIGtleSBvZiB0aGUgb2JqZWN0J3MgZmlyc3QgcHJvcGVydHkuXG4gKi9cbmZ1bmN0aW9uIGtleShvYmopIHtcbiAgcmV0dXJuIGt2KG9iaikuaztcbn1cblxuLyoqXG4gKiBBIGNvbnZlbmllbmNlIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgdmFsdWUgb2YgdGhlIGZpcnN0IHByb3BlcnR5IG9mIGFuXG4gKiBvYmplY3QuIFRoaXMgaXMgbWVhbnQgZm9yIHVzZSB3aXRoIG9iamVjdCBpdGVyYXRvcnMgdG8gbW9yZSBjb252ZW5pZW50bHlcbiAqIGFjY2VzcyBwYXJ0cyBvZiB0aGUgc2luZ2xlLXByb3BlcnR5IG9iamVjdHMgdGhhdCB0aGV5IGVtaXQuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHBhcmFtIHtvYmplY3R9IG9iaiBUaGUgb2JqZWN0IHdob3NlIGZpcnN0IHZhbHVlIGlzIHJldHVybmVkLlxuICogQHJldHVybiB7Kn0gVGhlIHZhbHVlIG9mIHRoZSBvYmplY3QncyBmaXJzdCBwcm9wZXJ0eS5cbiAqL1xuZnVuY3Rpb24gdmFsdWUob2JqKSB7XG4gIHJldHVybiBrdihvYmopLnY7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBpdGVyYXRvciBvdmVyIGEgZnVuY3Rpb24uXG4gKlxuICogRGV0YWlscyBhYm91dCB0aGlzIGZ1bmN0aW9uIGFyZSBpbmNsdWRlZCBpbiB0aGUgZG9jdW1lbnRhdGlvbiBmb3JcbiAqIHtAbGluayBtb2R1bGU6eGR1Y2UuaXRlcmF0b3J8aXRlcmF0b3J9LlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOnhkdWNlLkl0ZXJhYmxlRnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcmV0dXJucyB7bW9kdWxlOnhkdWNlLkl0ZXJhdG9yfSBBbiBpdGVyYXRvciBvdmVyIHRoZSByZXR1cm4gdmFsdWVzIG9mIGBmbmAuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBmdW5jdGlvbkl0ZXJhdG9yKGZuKSB7XG4gIHJldHVybiAoZnVuY3Rpb24qKCkge1xuICAgIGxldCBjdXJyZW50O1xuICAgIGxldCBpbmRleCA9IDA7XG5cbiAgICBmb3IgKDs7KSB7XG4gICAgICBjdXJyZW50ID0gZm4oaW5kZXgrKywgY3VycmVudCk7XG4gICAgICBpZiAodHlwZW9mIGN1cnJlbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICB5aWVsZCBjdXJyZW50O1xuICAgIH1cbiAgfSkoKTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuIGl0ZXJhdG9yIG92ZXIgdGhlIHByb3ZpZGVkIHZhbHVlLlxuICpcbiAqIEZvciBjb2xsZWN0aW9ucyB0aGF0IGltcGxlbWVudCB0aGUgaXRlcmFibGUgcHJvdG9jb2wsIGl0J3MgYXMgc2ltcGxlIGFzXG4gKiByZXR1cm5pbmcgdGhlIGl0ZXJhdG9yIGFscmVhZHkgZGVmaW5lZCBmb3IgdGhhdCBjb2xsZWN0aW9uLlxuICpcbiAqIGBgYFxuICogY29uc3QgaXRlciA9IGl0ZXJhdG9yKFsxLCAyLCAzXSk7XG4gKiBjb25zb2xlLmxvZyhpdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4gMVxuICogY29uc29sZS5sb2coaXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IDJcbiAqIGNvbnNvbGUubG9nKGl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiAzXG4gKiBjb25zb2xlLmxvZyhpdGVyLm5leHQoKS5kb25lKTsgICAgLy8gLT4gdHJ1ZVxuICogYGBgXG4gKlxuICogT2JqZWN0cyBhcmUgc3BlY2lhbGx5IHN1cHBvcnRlZCB0byByZXR1cm4gYW4gaXRlcmF0b3IgYXMgd2VsbCwgZXZlbiB0aG91Z2hcbiAqIHRoZXkgZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCB0aGUgaXRlcmFibGUgcHJvdG9jb2wuIFRoZSBpdGVyYXRvcidzIGBuZXh0YFxuICogZnVuY3Rpb24gcHJvdmlkZXMgc2luZ2xlLXByb3BlcnR5IG9iamVjdHMsIG9uZSBmb3IgZWFjaCBwcm9wZXJ0eSBpbiB0aGVcbiAqIG9yaWdpbmFsIG9iamVjdCwgb3JkZXJlZCBpbiB0aGUgc3RhbmRhcmQgcG9zdC1FUzYgb3JkZXIgZm9yIGl0ZXJhdGluZyBvdmVyXG4gKiBvYmplY3Qga2V5czpcbiAqXG4gKiAxLiBLZXlzIHRoYXQgYXJlIGludGVnZXJzLCBpbiBhc2NlbmRpbmcgbnVtZXJpY2FsIG9yZGVyXG4gKiAyLiBBbGwgb3RoZXIgc3RyaW5nIGtleXMsIGluIHRoZSBvcmRlciBpbiB3aGljaCB0aGV5IHdlcmUgYWRkZWQgdG8gdGhlIG9iamVjdFxuICogMy4gQWxsIHN5bWJvbCBrZXlzLCBpbiB0aGUgb3JkZXIgaW4gd2hpY2ggdGhleSB3ZXJlIGFkZGVkIHRvIHRoZSBvYmplY3RcbiAqXG4gKiBJZiBhIGRpZmZlcmVudCBvcmRlciBpcyBuZWVkZWQsIHRoaXMgZnVuY3Rpb24gdGFrZXMgYSBzZWNvbmQgYXJndW1lbnQsIGEgc29ydFxuICogZnVuY3Rpb24sIHRoYXQgYWZmZWN0cyBvYmplY3RzIG9ubHkuIEl0IGlzIGEgc3RhbmRhcmQgZnVuY3Rpb24gdGhhdCB3b3VsZCBiZVxuICogcGFzc2VkIHRvIGBBcnJheS5wcm90b3R5cGUuc29ydGAgYW5kIHNvcnRzIHRoZSBrZXlzIGFjY29yZGluZ2x5LlxuICpcbiAqIGBgYFxuICogY29uc3QgYWxwaGEgPSAoYSwgYikgPT4gKGEgPCBiID8gLTEgOiBiIDwgYSA/IDEgOiAwKTtcbiAqIGNvbnN0IG9iaiA9IHsgYzogMSwgYTogMiwgYjogMyB9O1xuICpcbiAqIGNvbnN0IG9iakl0ZXIgPSBpdGVyYXRvcihvYmopO1xuICogY29uc29sZS5sb2cob2JqSXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IHsgYzogMSB9XG4gKiBjb25zb2xlLmxvZyhvYmpJdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4geyBhOiAyIH1cbiAqIGNvbnNvbGUubG9nKG9iakl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiB7IGI6IDMgfVxuICpcbiAqIGNvbnN0IHNvcnRlZEl0ZXIgPSBpdGVyYXRvcihvYmosIGFscGhhKTtcbiAqIGNvbnNvbGUubG9nKG9iakl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiB7IGE6IDIgfVxuICogY29uc29sZS5sb2cob2JqSXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IHsgYjogMyB9XG4gKiBjb25zb2xlLmxvZyhvYmpJdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4geyBjOiAxIH1cbiAqIGBgYFxuICpcbiAqIEFkZGl0aW9uYWxseSwgdGhlcmUgaXMgc3BlY2lhbCBzdXBwb3J0IGZvciBwYXNzaW5nIGEgZnVuY3Rpb24gdG8gdGhpc1xuICogZnVuY3Rpb24uIFRoZSBpdGVyYXRvciByZXR1cm5lZCBydW5zIHRoYXQgZnVuY3Rpb24gZm9yIGVhY2ggY2FsbCB0byBgbmV4dGAuXG4gKiBUaGF0IGZ1bmN0aW9uIGlzIHByb3ZpZGVkIHR3byBhcmd1bWVudHM6IHRoZSBpbmRleCAoc3RhcnRpbmcgYXQgYDBgIGZvciB0aGVcbiAqIGZpcnN0IGNhbGwgdG8gYG5leHRgIGFuZCBpbmNyZWFzaW5nIGJ5IDEgZm9yIGVhY2ggY2FsbCB0byBgbmV4dGAgYWZ0ZXIpIGFuZFxuICogdGhlIHJldHVybiB2YWx1ZSBvZiB0aGUgcHJldmlvdXMgY2FsbCB0byBgbmV4dGAgKGZvciB0aGUgZmlyc3QgY2FsbCB0b1xuICogYG5leHRgLCB0aGlzIHdpbGwgYmUgYHVuZGVmaW5lZGApLiBUaGUgaXRlcmF0aW9uIHdpbGwgY29udGludWUgdW50aWwgdGhlXG4gKiBmaXJzdCB0aW1lIHRoZSBpdGVyYXRlZCBmdW5jdGlvbiByZXR1cm5zIGB1bmRlZmluZWRgOyBhdCB0aGF0IHBvaW50IHRoZVxuICogaXRlcmF0b3Igd2lsbCB0ZXJtaW5hdGUgYW5kIHJldHVybiBgeyBkb25lOiB0cnVlIH1gIG9mZiBzdWJzZXF1ZW50IGBuZXh0YFxuICogY2FsbHMuXG4gKlxuICogYGBgXG4gKiBjb25zdCBjb25zdEl0ZXIgPSBpdGVyYXRvcigoKSA9PiA2KTtcbiAqIGNvbnNvbGUubG9nKGNvbnN0SXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IDZcbiAqIGNvbnNvbGUubG9nKGNvbnN0SXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IDZcbiAqIC8vIFRoaXMgd2lsbCBjb250aW51ZSBmb3JldmVyLCBhcyBsb25nIGFzIGBuZXh0YCBrZWVwcyBnZXR0aW5nIGNhbGxlZFxuICpcbiAqIGNvbnN0IGluZGV4SXRlciA9IGl0ZXJhdG9yKHggPT4geCAqIHgpO1xuICogY29uc29sZS5sb2coaW5kZXhJdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4gMDtcbiAqIGNvbnNvbGUubG9nKGluZGV4SXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IDE7XG4gKiBjb25zb2xlLmxvZyhpbmRleEl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiA0O1xuICogY29uc29sZS5sb2coaW5kZXhJdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4gOTtcbiAqIC8vIFRoaXMgd2lsbCBjb250aW51ZSBmb3JldmVyIG9yIHVudGlsIHRoZSBudW1iZXJzIGdldCB0b28gYmlnIGZvclxuICogLy8gSmF2YVNjcmlwdCB0byBkZWFsIHd0aWhcbiAqXG4gKiAvLyBVc2luZyBhIGRlZmF1bHQgdmFsdWUgZm9yIHRoZSBgbGFzdGAgcGFyYW1ldGVyLCB3aGljaCBzZXRzIGl0cyB2YWx1ZVxuICogLy8gZm9yIHRoZSBmaXJzdCBydW4gd2hlbiBpdCBpcyBub3JtYWxseSBgdW5kZWZpbmVkYFxuICogY29uc3QgbGFzdEl0ZXIgPSBpdGVyYXRvcigoeCwgbGFzdCA9IDEpID0+IGxhc3QgKiAoeCArIDEpKTsgLy8gZmFjdG9yaWFsIVxuICogY29uc29sZS5sb2cobGFzdEl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiAxXG4gKiBjb25zb2xlLmxvZyhsYXN0SXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IDJcbiAqIGNvbnNvbGUubG9nKGxhc3RJdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4gNlxuICogY29uc29sZS5sb2cobGFzdEl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiAyNFxuICogLy8gQWdhaW4sIHJ1bnMgZm9yZXZlciwgdGhvdWdoIGZhY3RvcmlhbHMgZ2V0IGJpZyB2ZXJ5IHF1aWNrbHlcbiAqXG4gKiAvLyBJdGVyYXRvcnMgdGVybWluYXRlIHdoZW4gdGhlIGZ1bmN0aW9uIHJldHVybnMgYHVuZGVmaW5lZGBcbiAqIGNvbnN0IHN0b3BJdGVyID0gaXRlcmF0b3IoeCA9PiB4IDwgMiA/IHggOiB1bmRlZmluZWQpO1xuICogY29uc29sZS5sb2coc3RvcEl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiAwXG4gKiBjb25zb2xlLmxvZyhzdG9wSXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IDFcbiAqIGNvbnNvbGUubG9nKHN0b3BJdGVyLm5leHQoKS5kb25lKTsgICAgLy8gLT4gdHJ1ZVxuICogYGBgXG4gKlxuICogSWYgdGhlIHByb3ZpZGVkIHZhbHVlIGlzIG5vdCBhY3R1YWxseSBpdGVyYWJsZSAob3IgYW4gb2JqZWN0IG9yIGEgZnVuY3Rpb24pLFxuICogYG51bGxgIGlzIHJldHVybmVkIGluIHBsYWNlIG9mIHRoZSBpdGVyYXRvci5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjcmVhdGUgYW4gaXRlcmF0b3Igb3Zlci5cbiAqIEBwYXJhbSB7bW9kdWxlOnhkdWNlLlNvcnRGdW5jdGlvbn0gW3NvcnRGbl0gQW4gb3B0aW9uYWwgc29ydCBmdW5jdGlvbiBmb3JcbiAqICAgICBzb3J0aW5nIHRoZSBrZXlzIG9mIGFuIG9iamVjdCBiZWZvcmUgaXRlcmF0aW9uLiBJdCBpcyBpZ25vcmVkIGlmIGB2YWx1ZWBcbiAqICAgICBpc24ndCBhIHBsYWluIG9iamVjdC5cbiAqIEByZXR1cm5zIHttb2R1bGU6eGR1Y2UuSXRlcmF0b3J9IEFuIGl0ZXJhdG9yIG92ZXIgYHZhbHVlYC5cbiAqL1xuZnVuY3Rpb24gaXRlcmF0b3IodmFsdWUsIHNvcnRGbiA9IG51bGwpIHtcbiAgc3dpdGNoICh0cnVlKSB7XG4gICAgY2FzZSBpc0Z1bmN0aW9uKHZhbHVlW1N5bWJvbC5pdGVyYXRvcl0pOlxuICAgIGNhc2UgaXNHZW5lcmF0b3JGdW5jdGlvbih2YWx1ZVtTeW1ib2wuaXRlcmF0b3JdKTpcbiAgICAgIHJldHVybiB2YWx1ZVtTeW1ib2wuaXRlcmF0b3JdKCk7XG4gICAgY2FzZSBpc0Z1bmN0aW9uKHZhbHVlKTpcbiAgICAgIHJldHVybiBmdW5jdGlvbkl0ZXJhdG9yKHZhbHVlKTtcbiAgICBjYXNlIGlzT2JqZWN0KHZhbHVlKTpcbiAgICAgIHJldHVybiBvYmplY3RJdGVyYXRvcih2YWx1ZSwgc29ydEZuKTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHBhc3NlZCBvYmplY3QgaXMgaXRlcmFibGUsIGluIHRlcm1zIG9mIHdoYXQgJ2l0ZXJhYmxlJ1xuICogbWVhbnMgdG8gdGhpcyBsaWJyYXJ5LiBJbiBvdGhlciB3b3JkcywgdmFsdWVzIGltcGxlbWVudGluZyB0aGUgYGl0ZXJhYmxlYFxuICogcHJvdG9jb2wgYW5kIHBsYWluIG9iamVjdHMgcmV0dXJuIGB0cnVlYCwgd2hpbGUgZXZlcnl0aGluZyBlbHNlIHJldHVybnNcbiAqIGBmYWxzZWAuIFRoaXMgZG9lcyBub3QgcmV0dXJuIGB0cnVlYCBmb3IgZnVuY3Rpb25zIGV2ZW4gdGhvdWdoXG4gKiB7QGxpbmsgbW9kdWxlOnhkdWNlLml0ZXJhdG9yfGl0ZXJhdG9yfSBjYW4gcHJvZHVjZSBhbiBpdGVyYXRvciBmb3IgdGhlbSxcbiAqIGJlY2F1c2Ugbm90IGFsbCBmdW5jdGlvbnMgd29yayB3ZWxsIHdpdGhcbiAqIHtAbGluayBtb2R1bGU6eGR1Y2UuaXRlcmF0b3J8aXRlcmF0b3J9LlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3QgZm9yIGl0ZXJhYmlsaXR5LlxuICogQHJldHVybiB7Ym9vbGVhbn0gRWl0aGVyIGB0cnVlYCBpZiB0aGUgdmFsdWUgaXMgaXRlcmFibGVcbiAqICAgICAoYHtAbGluayBtb2R1bGU6eGR1Y2UuaXRlcmF0b3J9YCB3aWxsIHJldHVybiBhbiBpdGVyYXRvciBmb3IgaXQpIG9yXG4gKiAgICAgYGZhbHNlYCBpZiBpdCBpcyBub3QuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBpc0l0ZXJhYmxlKHZhbHVlKSB7XG4gIHJldHVybiBpc0ltcGxlbWVudGVkKHZhbHVlLCBcIml0ZXJhdG9yXCIpIHx8IGlzT2JqZWN0KHZhbHVlKTtcbn1cblxuZXhwb3J0IHsgaXRlcmF0b3IsIGlzSXRlcmFibGUsIGt2LCBrZXksIHZhbHVlIH07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuLyoqXG4gKiBQcm90b2NvbHMgZm9yIGl0ZXJhdGlvbiBhbmQgcmVkdWN0aW9uLlxuICpcbiAqIFRoZSBuYW1lcyBmb3IgdGhlc2UgcHJvdG9jb2xzIGNhbWUgZnJvbSBhIGRpc2N1c3Npb24gdGhyZWFkXG4gKiAoe0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9jb2duaXRlY3QtbGFicy90cmFuc2R1Y2Vycy1qcy9pc3N1ZXMvMjB9KSBmcm9tIGFcbiAqIHRpbWUgd2hlbiB0cmFuc2R1Y2VycyB3ZXJlIHZlcnkgbXVjaCBpbiB0aGUgZm9yZWZyb250LiBJdCdzIHRoZSBjbG9zZXN0IHRoaW5nXG4gKiB0aGVyZSBpcyB0byBhIHN0YW5kYXJkLCBzbyBpdCB3YXMgYWRvcHRlZCBoZXJlLlxuICpcbiAqIFRoZXNlIGFyZSB0aGUgc2FtZSBzeW1ib2xzIGFzIGF2YWlsYWJsZSBpbiBteSB0cmFuc2R1Y2VyIGxpYnJhcnkuIFRoZXkgYXJlXG4gKiBwdWJsaWNseSBhdmFpbGFibGUgZnJvbSB0aGVyZS5cbiAqXG4gKiBAbW9kdWxlIHhkdWNlL3Byb3RvY29sXG4gKiBAcHJpdmF0ZVxuICovXG5cbmltcG9ydCB7IGlzRnVuY3Rpb24sIGlzR2VuZXJhdG9yRnVuY3Rpb24gfSBmcm9tIFwibW9kdWxlcy91dGlsc1wiO1xuXG4vKipcbiAqIFRoZSBtYXBwaW5nIG9mIHByb3RvY29sIG5hbWVzIHRvIHRoZWlyIHJlc3BlY3RpdmUgcHJvcGVydHkga2V5IG5hbWVzLiBUaGVcbiAqIHZhbHVlcyBvZiB0aGlzIG1hcCB3aWxsIGRlcGVuZCBvbiB3aGV0aGVyIHN5bWJvbHMgYXJlIGF2YWlsYWJsZS5cbiAqXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBQcm90b2NvbE1hcFxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHByb3BlcnR5IHtTeW1ib2x9IGluaXQgVGhlIGB0cmFuc2R1Y2VyL2luaXRgIHByb3RvY29sLiBUaGlzIGlzIHVzZWRcbiAqICAgICB0byBtYXJrIGZ1bmN0aW9ucyB0aGF0IGluaXRpYWxpemUgYSB0YXJnZXQgY29sbGVjdGlvbiBiZWZvcmUgYWRkaW5nIGl0ZW1zXG4gKiAgICAgdG8gaXQuXG4gKiBAcHJvcGVydHkge1N5bWJvbH0gc3RlcCBUaGUgYHRyYW5zZHVjZXIvc3RlcGAgcHJvdG9jb2wuIFRoaXMgaXMgdXNlZFxuICogICAgIHRvIG1hcmsgZnVuY3Rpb25zIHRoYXQgYXJlIHVzZWQgaW4gdGhlIHRyYW5zZHVjZXIncyBzdGVwIHByb2Nlc3MsIHdoZXJlXG4gKiAgICAgb2JqZWN0cyBhcmUgYWRkZWQgdG8gdGhlIHRhcmdldCBjb2xsZWN0aW9uIG9uZSBhdCBhIHRpbWUuXG4gKiBAcHJvcGVydHkge1N5bWJvbH0gcmVzdWx0IFRoZSBgdHJhbnNkdWNlci9yZXN1bHRgIHByb3RvY29sLiBUaGlzIGlzXG4gKiAgICAgdXNlZCB0byBtYXJrIGZ1bmN0aW9ucyB0aGF0IHRha2UgdGhlIGZpbmFsIHJlc3VsdCBvZiB0aGUgc3RlcCBwcm9jZXNzIGFuZFxuICogICAgIHJldHVybiB0aGUgZmluYWwgZm9ybSB0byBiZSBvdXRwdXQuIFRoaXMgaXMgb3B0aW9uYWw7IGlmIHRoZSB0cmFuc2R1Y2VyXG4gKiAgICAgZG9lcyBub3Qgd2FudCB0byB0cmFuc2Zvcm0gdGhlIGZpbmFsIHJlc3VsdCwgaXQgc2hvdWxkIGp1c3QgcmV0dXJuIHRoZVxuICogICAgIHJlc3VsdCBvZiBpdHMgY2hhaW5lZCB0cmFuc2R1Y2VyJ3MgYHJlc3VsdGAgZnVuY3Rpb24uXG4gKiBAcHJvcGVydHkge1N5bWJvbH0gcmVkdWNlZCBUaGUgYHRyYW5zZHVjZXIvcmVkdWNlZGAgcHJvdG9jb2wuIFRoZVxuICogICAgIHByZXNlbmNlIG9mIHRoaXMga2V5IG9uIGFuIG9iamVjdCBpbmRpY2F0ZXMgdGhhdCBpdHMgdHJhbnNmb3JtYXRpb24gaGFzXG4gKiAgICAgYmVlbiBjb21wbGV0ZWQuIEl0IGlzIHVzZWQgaW50ZXJuYWxseSB0byBtYXJrIGNvbGxlY3Rpb25zIHdob3NlXG4gKiAgICAgdHJhbnNmb3JtYXRpb25zIGNvbmNsdWRlIGJlZm9yZSBldmVyeSBvYmplY3QgaXMgaXRlcmF0ZWQgb3ZlciAoYXMgaW5cbiAqICAgICBge0BsaW5rIHhkdWNlLnRha2V9YCB0cmFuc2R1Y2Vycy4pIEl0IGlzIG9mIGxpdHRsZSB1c2UgYmV5b25kIHRyYW5zZHVjZXJcbiAqICAgICBhdXRob3JpbmcuXG4gKiBAcHJvcGVydHkge1N5bWJvbH0gdmFsdWUgVGhlIGB0cmFuc2R1Y2VyL3ZhbHVlYCBwcm90b2NvbC4gVGhpcyBpc1xuICogICAgIHVzZWQgaW50ZXJuYWxseSB0byBtYXJrIHByb3BlcnRpZXMgdGhhdCBjb250YWluIHRoZSB2YWx1ZSBvZiBhIHJlZHVjZWRcbiAqICAgICB0cmFuc2Zvcm1hdGlvbi4gSXQgaXMgb2YgbGl0dGxlIHVzZSBiZXlvbmQgdHJhbnNkdWNlciBhdXRob3JpbmcuXG4gKi9cblxuLyoqXG4gKiBUaGUgbWFwcGluZyBvZiBwcm90b2NvbCBuYW1lcyB0byB0aGVpciByZXNwZWN0aXZlIHByb3BlcnR5IGtleSBuYW1lcy5cbiAqXG4gKiBAdHlwZSB7bW9kdWxlOnhkdWNlLlByb3RvY29sTWFwfVxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICovXG5jb25zdCBwcm90b2NvbHMgPSBPYmplY3QuY3JlYXRlKG51bGwsIHtcbiAgaW5pdDoge1xuICAgIHZhbHVlOiBTeW1ib2wuZm9yKFwidHJhbnNkdWNlci9pbml0XCIpXG4gIH0sXG4gIHN0ZXA6IHtcbiAgICB2YWx1ZTogU3ltYm9sLmZvcihcInRyYW5zZHVjZXIvc3RlcFwiKVxuICB9LFxuICByZXN1bHQ6IHtcbiAgICB2YWx1ZTogU3ltYm9sLmZvcihcInRyYW5zZHVjZXIvcmVzdWx0XCIpXG4gIH0sXG4gIHJlZHVjZWQ6IHtcbiAgICB2YWx1ZTogU3ltYm9sLmZvcihcInRyYW5zZHVjZXIvcmVkdWNlZFwiKVxuICB9LFxuICB2YWx1ZToge1xuICAgIHZhbHVlOiBTeW1ib2wuZm9yKFwidHJhbnNkdWNlci92YWx1ZVwiKVxuICB9XG59KTtcblxuZnVuY3Rpb24gaXNJbXBsZW1lbnRlZChvYmosIHByb3RvY29sKSB7XG4gIGlmIChvYmogPT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN3aXRjaCAocHJvdG9jb2wpIHtcbiAgICBjYXNlIFwiaXRlcmF0b3JcIjpcbiAgICAgIHJldHVybiAoXG4gICAgICAgIGlzRnVuY3Rpb24ob2JqW1N5bWJvbC5pdGVyYXRvcl0pIHx8XG4gICAgICAgIGlzR2VuZXJhdG9yRnVuY3Rpb24ob2JqW1N5bWJvbC5pdGVyYXRvcl0pXG4gICAgICApO1xuICAgIGNhc2UgXCJhc3luY0l0ZXJhdG9yXCI6XG4gICAgICByZXR1cm4gaXNHZW5lcmF0b3JGdW5jdGlvbihvYmpbU3ltYm9sLmFzeW5jSXRlcmF0b3JdKTtcbiAgICBjYXNlIFwicmVkdWNlZFwiOlxuICAgIGNhc2UgXCJ2YWx1ZVwiOlxuICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqKS5pbmNsdWRlcyhwcm90b2NvbHNbcHJvdG9jb2xdKTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGlzRnVuY3Rpb24ob2JqW3Byb3RvY29sc1twcm90b2NvbF1dKTtcbiAgfVxufVxuXG5leHBvcnQgeyBwcm90b2NvbHMsIGlzSW1wbGVtZW50ZWQgfTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG4vKipcbiAqIEEgc2V0IG9mIGZ1bmN0aW9ucyByZWxhdGVkIHRvIHRoZSBwcm9kdWNpbmcgcmVkdWNlciBvYmplY3RzLCBtYXJraW5nXG4gKiBjb21wbGV0ZWQgb2JqZWN0cywgYW5kIHBlcmZvcm1pbmcgZ2VuZXJhbCByZWR1Y3Rpb24gb3BlcmF0aW9ucy5cbiAqXG4gKiBAbW9kdWxlIHJlZHVjdGlvblxuICogQHByaXZhdGVcbiAqL1xuXG5pbXBvcnQgeyBpc0ltcGxlbWVudGVkLCBwcm90b2NvbHMgYXMgcCB9IGZyb20gXCJtb2R1bGVzL3Byb3RvY29sXCI7XG5pbXBvcnQgeyBpc1N0cmluZywgaXNBcnJheSwgaXNPYmplY3QsIGlzRnVuY3Rpb24gfSBmcm9tIFwibW9kdWxlcy91dGlsc1wiO1xuaW1wb3J0IHsga3YsIGl0ZXJhdG9yIH0gZnJvbSBcIm1vZHVsZXMvaXRlcmF0aW9uXCI7XG5cbi8qKlxuICogUmV0dXJucyBhbiBpbml0IGZ1bmN0aW9uIGZvciBhIGNvbGxlY3Rpb24uIFRoaXMgaXMgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYVxuICogbmV3LCBlbXB0eSBpbnN0YW5jZSBvZiB0aGUgY29sbGVjdGlvbiBpbiBxdWVzdGlvbi4gSWYgdGhlIGNvbGxlY3Rpb24gZG9lc24ndFxuICogc3VwcG9ydCByZWR1Y3Rpb24sIGBudWxsYCBpcyByZXR1cm5lZC4gVGhpcyBtYWtlcyBjb25kaXRpb25hbHMgYSBiaXQgZWFzaWVyXG4gKiB0byB3b3JrIHdpdGguXG4gKlxuICogSW4gb3JkZXIgdG8gc3VwcG9ydCB0aGUgY29udmVyc2lvbiBvZiBmdW5jdGlvbnMgaW50byByZWR1Y2VycywgZnVuY3Rpb25cbiAqIHN1cHBvcnQgaXMgYWxzbyBwcm92aWRlZC5cbiAqXG4gKiBAcGFyYW0geyp9IGNvbGxlY3Rpb24gQSBjb2xsZWN0aW9uIHRvIGNyZWF0ZSBhbiBpbml0IGZ1bmN0aW9uIGZvci4gVGhpcyBjYW5cbiAqICAgICBiZSBhbnl0aGluZyB0aGF0IHN1cHBvcnRzIHRoZSBpdGVyYXRpb24gcHJvdG9jb2wgb3IgYSBwbGFpbiBvYmplY3QuXG4gKiBAcmV0dXJuIHttb2R1bGU6eGR1Y2UuSW5pdEZ1bmN0aW9ufSBBIGZ1bmN0aW9uIHRoYXQsIHdoZW4gY2FsbGVkLCByZXR1cm5zIGFuXG4gKiAgICAgaW5pdGlhbCB2ZXJzaW9uIG9mIHRoZSBwcm92aWRlZCBjb2xsZWN0aW9uLiBJZiB0aGUgcHJvdmlkZWQgY29sbGVjdGlvbiBpc1xuICogICAgIG5vdCBpdGVyYWJsZSwgdGhlbiBgbnVsbGAgaXMgcmV0dXJuZWQuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBpbml0KGNvbGxlY3Rpb24pIHtcbiAgc3dpdGNoICh0cnVlKSB7XG4gICAgY2FzZSBpc0ltcGxlbWVudGVkKGNvbGxlY3Rpb24sIFwiaW5pdFwiKTpcbiAgICAgIHJldHVybiBjb2xsZWN0aW9uW3AuaW5pdF07XG4gICAgY2FzZSBpc1N0cmluZyhjb2xsZWN0aW9uKTpcbiAgICAgIHJldHVybiAoKSA9PiBcIlwiO1xuICAgIGNhc2UgaXNBcnJheShjb2xsZWN0aW9uKTpcbiAgICAgIHJldHVybiAoKSA9PiBbXTtcbiAgICBjYXNlIGlzT2JqZWN0KGNvbGxlY3Rpb24pOlxuICAgICAgcmV0dXJuICgpID0+ICh7fSk7XG4gICAgY2FzZSBpc0Z1bmN0aW9uKGNvbGxlY3Rpb24pOlxuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoXCJpbml0IG5vdCBhdmFpbGFibGVcIik7XG4gICAgICB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG4vKipcbiAqIFJldHVybnMgYSBzdGVwIGZ1bmN0aW9uIGZvciBhIGNvbGxlY3Rpb24uIFRoaXMgaXMgYSBmdW5jdGlvbiB0aGF0IHRha2VzIGFuXG4gKiBhY2N1bXVsYXRvciBhbmQgYSB2YWx1ZSBhbmQgcmV0dXJucyB0aGUgcmVzdWx0IG9mIHJlZHVjaW5nIHRoZSB2YWx1ZSBpbnRvIHRoZVxuICogYWNjdW11bGF0b3IuIElmIHRoZSBjb2xsZWN0aW9uIGRvZXNuJ3Qgc3VwcG9ydCByZWR1Y3Rpb24sIGBudWxsYCBpcyByZXR1cm5lZC5cbiAqIFRoZSByZXR1cm5lZCBmdW5jdGlvbiBpdHNlbGYgc2ltcGx5IHJlZHVjZXMgdGhlIGlucHV0IGludG8gdGhlIHRhcmdldFxuICogY29sbGVjdGlvbiB3aXRob3V0IG1vZGlmeWluZyBpdC5cbiAqXG4gKiBJbiBvcmRlciB0byBzdXBwb3J0IHRoZSBjb252ZXJzaW9uIG9mIGZ1bmN0aW9ucyBpbnRvIHJlZHVjZXJzLCBmdW5jdGlvblxuICogc3VwcG9ydCBpcyBhbHNvIHByb3ZpZGVkLlxuICpcbiAqIEBwYXJhbSB7Kn0gY29sbGVjdGlvbiBBIGNvbGxlY3Rpb24gdG8gY3JlYXRlIGEgc3RlcCBmdW5jdGlvbiBmb3IuIFRoaXMgY2FuIGJlXG4gKiAgICAgYW55dGhpbmcgdGhhdCBzdXBwb3J0cyB0aGUgaXRlcmF0aW9uIHByb3RvY29sLCBhIHBsYWluIG9iamVjdCwgb3IgYVxuICogICAgIGZ1bmN0aW9uLlxuICogQHJldHVybiB7bW9kdWxlOnhkdWNlLlN0ZXBGdW5jdGlvbn0gQSByZWR1Y3Rpb24gZnVuY3Rpb24gZm9yIHRoZSBwcm92aWRlZFxuICogICAgIGNvbGxlY3Rpb24gdGhhdCBzaW1wbHkgYWRkcyBhbiBlbGVtZW50IHRvIHRoZSB0YXJnZXQgY29sbGVjdGlvbiB3aXRob3V0XG4gKiAgICAgbW9kaWZ5aW5nIGl0LiBJZiB0aGUgcHJvdmlkZWQgY29sbGVjdGlvbiBpcyBub3QgaXRlcmFibGUsIGBudWxsYCBpc1xuICogICAgIHJldHVybmVkLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gc3RlcChjb2xsZWN0aW9uKSB7XG4gIHN3aXRjaCAodHJ1ZSkge1xuICAgIGNhc2UgaXNJbXBsZW1lbnRlZChjb2xsZWN0aW9uLCBcInN0ZXBcIik6XG4gICAgICByZXR1cm4gY29sbGVjdGlvbltwLnN0ZXBdO1xuXG4gICAgY2FzZSBpc1N0cmluZyhjb2xsZWN0aW9uKTpcbiAgICAgIHJldHVybiAoYWNjLCBpbnB1dCkgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGlzT2JqZWN0KGlucHV0KSA/IGt2KGlucHV0KS52IDogaW5wdXQ7XG4gICAgICAgIHJldHVybiBhY2MgKyB2YWx1ZTtcbiAgICAgIH07XG5cbiAgICBjYXNlIGlzQXJyYXkoY29sbGVjdGlvbik6XG4gICAgICByZXR1cm4gKGFjYywgaW5wdXQpID0+IHtcbiAgICAgICAgYWNjLnB1c2goaW5wdXQpO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfTtcblxuICAgIGNhc2UgaXNPYmplY3QoY29sbGVjdGlvbik6XG4gICAgICByZXR1cm4gKGFjYywgaW5wdXQpID0+IHtcbiAgICAgICAgbGV0IHZhbHVlID0gaW5wdXQ7XG5cbiAgICAgICAgaWYgKCFpc09iamVjdChpbnB1dCkpIHtcbiAgICAgICAgICAvLyBpZiB0aGUgaW5wdXQgaXNuJ3QgYW4gb2JqZWN0LCB0dXJuIGl0IGludG8gYW4gb2JqZWN0IHdpdGggYVxuICAgICAgICAgIC8vIG51bWVyaWNhbCBrZXkgb25lIGdyZWF0ZXIgdGhhbiB0aGUgbWF4IGtleSBhbHJlYWR5IGluIHRoZVxuICAgICAgICAgIC8vIGFjY3VtdWxhdG9yXG4gICAgICAgICAgY29uc3QgbWF4ID0gT2JqZWN0LmtleXMoYWNjKS5yZWR1Y2UoKGEsIGIpID0+IE1hdGgubWF4KGEsIGIpLCAtMSk7XG4gICAgICAgICAgdmFsdWUgPSB7IFttYXggKyAxXTogaW5wdXQgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHsgaywgdiB9ID0ga3YodmFsdWUpO1xuICAgICAgICBhY2Nba10gPSB2O1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfTtcblxuICAgIGNhc2UgaXNGdW5jdGlvbihjb2xsZWN0aW9uKTpcbiAgICAgIHJldHVybiAoYWNjLCBpbnB1dCkgPT4gY29sbGVjdGlvbihhY2MsIGlucHV0KTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG4vKipcbiAqIFJldHVybnMgYSByZXN1bHQgZnVuY3Rpb24gZm9yIGEgY29sbGVjdGlvbi4gVGhpcyBpcyBhIGZ1bmN0aW9uIHRoYXQgcGVyZm9ybXNcbiAqIGFueSBmaW5hbCBwcm9jZXNzaW5nIHRoYXQgc2hvdWxkIGJlIGRvbmUgb24gdGhlIHJlc3VsdCBvZiBhIHJlZHVjdGlvbi4gSWYgdGhlXG4gKiBjb2xsZWN0aW9uIGRvZXNuJ3Qgc3VwcG9ydCByZWR1Y3Rpb24sIGBudWxsYCBpcyByZXR1cm5lZC5cbiAqXG4gKiBJbiBvcmRlciB0byBzdXBwb3J0IHRoZSBjb252ZXJzaW9uIG9mIGZ1bmN0aW9ucyBpbnRvIHJlZHVjZXJzLCBmdW5jdGlvblxuICogc3VwcG9ydCBpcyBhbHNvIHByb3ZpZGVkLlxuICpcbiAqIEBwYXJhbSB7Kn0gY29sbGVjdGlvbiBBIGNvbGxlY3Rpb24gdG8gY3JlYXRlIGEgc3RlcCBmdW5jdGlvbiBmb3IuIFRoaXMgY2FuIGJlXG4gKiAgICAgYW55dGhpbmcgdGhhdCBzdXBwb3J0cyB0aGUgaXRlcmF0aW9uIHByb3RvY29sLCBhIHBsYWluIG9iamVjdCwgb3IgYVxuICogICAgIGZ1bmN0aW9uLlxuICogQHJldHVybiB7bW9kdWxlOnhkdWNlLlJlc3VsdEZ1bmN0aW9ufSBBIGZ1bmN0aW9uIHRoYXQsIHdoZW4gZ2l2ZW4gYSByZWR1Y2VkXG4gKiAgICAgY29sbGVjdGlvbiwgcHJvZHVjZXMgdGhlIGZpbmFsIG91dHB1dC4gSWYgdGhlIHByb3ZpZGVkIGNvbGxlY3Rpb24gaXMgbm90XG4gKiAgICAgaXRlcmFibGUsIGBudWxsYCB3aWxsIGJlIHJldHVybmVkLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gcmVzdWx0KGNvbGxlY3Rpb24pIHtcbiAgc3dpdGNoICh0cnVlKSB7XG4gICAgY2FzZSBpc0ltcGxlbWVudGVkKGNvbGxlY3Rpb24sIFwicmVzdWx0XCIpOlxuICAgICAgcmV0dXJuIGNvbGxlY3Rpb25bcC5yZXN1bHRdO1xuICAgIGNhc2UgaXNTdHJpbmcoY29sbGVjdGlvbik6XG4gICAgY2FzZSBpc0FycmF5KGNvbGxlY3Rpb24pOlxuICAgIGNhc2UgaXNPYmplY3QoY29sbGVjdGlvbik6XG4gICAgY2FzZSBpc0Z1bmN0aW9uKGNvbGxlY3Rpb24pOlxuICAgICAgcmV0dXJuIHZhbHVlID0+IHZhbHVlO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG4vKipcbiAqIENyZWF0ZXMgYSByZWR1Y2VyIG9iamVjdCBmcm9tIGEgZnVuY3Rpb24gb3IgZnJvbSBhIGJ1aWx0LWluIHJlZHVjaWJsZSB0eXBlXG4gKiAoYXJyYXksIG9iamVjdCwgb3Igc3RyaW5nKS5cbiAqXG4gKiBUbyBjcmVhdGUgYSByZWR1Y2VyIGZvciBhcnJheXMsIG9iamVjdHMsIG9yIHN0cmluZ3MsIHNpbXBseSBwYXNzIGFuIGVtcHR5XG4gKiB2ZXJzaW9uIG9mIHRoYXQgY29sbGVjdGlvbiB0byB0aGlzIGZ1bmN0aW9uIChlLmcuLCBgdG9SZWR1Y2VyKFtdKWApLlxuICpcbiAqIFRoZSBub3RhYmxlIHVzZSBmb3IgdGhpcyBmdW5jdGlvbiB0aG91Z2ggaXMgdG8gdHVybiBhIHJlZHVjdGlvbiBmdW5jdGlvbiBpbnRvXG4gKiBhIHJlZHVjZXIgb2JqZWN0LiBUaGUgZnVuY3Rpb24gaXMgYSBmdW5jdGlvbiBvZiB0d28gcGFyYW1ldGVycywgYW5cbiAqIGFjY3VtdWxhdG9yIGFuZCBhIHZhbHVlLCBhbmQgcmV0dXJucyB0aGUgYWNjdW11bGF0b3Igd2l0aCB0aGUgdmFsdWUgaW4gaXQuXG4gKiBUaGlzIGlzIGV4YWN0bHkgdGhlIHNhbWUga2luZCBvZiBmdW5jdGlvbiB0aGF0IGlzIHBhc3NlZCB0byByZWR1Y3Rpb25cbiAqIGZ1bmN0aW9ucyBsaWtlIEphdmFTY3JpcHQncyBgQXJyYXkucHJvdG90eXBlLnJlZHVjZWAgYW5kIExvZGFzaCdzIGBfLnJlZHVjZWAuXG4gKlxuICogTm90ZSBpbiBwYXJ0aWN1bGFyIHRoYXQgdGhlIG91dHB1dCBvZiB0aGlzIHJlZHVjZXIgZG9lcyBub3QgbmVlZCB0byBiZSBhXG4gKiBjb2xsZWN0aW9uLiBJdCBjYW4gYmUgYW55dGhpbmcuIFdoaWxlIHRyYW5zZHVjaW5nIG5vcm1hbGx5IGludm9sdmVzXG4gKiB0cmFuc2Zvcm1pbmcgb25lIGNvbGxlY3Rpb24gaW50byBhbm90aGVyLCBpdCBuZWVkIG5vdCBiZSBzby4gRm9yIGV4YW1wbGUsXG4gKiBoZXJlIGlzIGEgcmVkdWNlciB0aGF0IHdpbGwgcmVzdWx0IGluIHN1bW1pbmcgb2YgdGhlIGNvbGxlY3Rpb24gdmFsdWVzLlxuICpcbiAqIGBgYFxuICogaW1wb3J0IHsgdG9SZWR1Y2VyLCByZWR1Y2UgfSBmcm9tIFwiQGNoYW5rby94ZHVjZVwiO1xuICpcbiAqIGNvbnN0IHN1bVJlZHVjZXIgPSB0b1JlZHVjZXIoKGFjYywgaW5wdXQpID0+IGFjYyArIGlucHV0KTtcbiAqIGNvbnN0IHN1bSA9IHJlZHVjZShbMSwgMiwgMywgNCwgNV0sIHN1bVJlZHVjZXIsIDApO1xuICogY29uc29sZS5sb2coc3VtKTsgICAvLyAtPiAxNVxuICogYGBgXG4gKlxuICogVGhpcyBjYW4gYmUgY29tYmluZWQgd2l0aCB0cmFuc2R1Y2VycyBhcyB3ZWxsLCBhcyBpbiB0aGlzIGNhbGN1bGF0aW9uIG9mIHRoZVxuICogc3VtIG9mIHRoZSAqc3F1YXJlcyogb2YgdGhlIGNvbGxlY3Rpb24gdmFsdWVzLlxuICpcbiAqIGBgYFxuICogaW1wb3J0IHsgdG9SZWR1Y2VyLCB0cmFuc2R1Y2UgfSBmcm9tIFwiQGNoYW5rby94ZHVjZVwiO1xuICogaW1wb3J0IHsgbWFwIH0gZnJvbSBcIkBjaGFua28vdHJhbnNkdWNlcnNcIjtcbiAqXG4gKiBjb25zdCBzdW1SZWR1Y2VyID0gdG9SZWR1Y2VyKChhY2MsIGlucHV0KSA9PiBhY2MgKyBpbnB1dCk7XG4gKiBjb25zdCBzdW0gPSB0cmFuc2R1Y2UoWzEsIDIsIDMsIDQsIDVdLCBtYXAoeCA9PiB4ICogeCksIHN1bVJlZHVjZXIsIDApO1xuICogY29uc29sZS5sb2coc3VtKTsgICAvLyAtPiA1NVxuICogYGBgXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHBhcmFtIHsqfSBjb2xsZWN0aW9uIEFuIGl0ZXJhYmxlIGNvbGxlY3Rpb24gb3IgYSByZWR1Y2VyIGZ1bmN0aW9uLlxuICogQHJldHVybiB7b2JqZWN0fSBBbiBvYmplY3QgY29udGFpbmluZyBwcm90b2NvbCBwcm9wZXJ0aWVzIGZvciBpbml0LCBzdGVwLCBhbmRcbiAqICAgICByZXN1bHQuIFRoaXMgb2JqZWN0IGlzIHN1aXRhYmxlIGZvciB1c2UgYXMgYSByZWR1Y2VyIG9iamVjdCAob25lIHByb3ZpZGVkXG4gKiAgICAgdG8gYHtAbGluayB4ZHVjZS5yZWR1Y2V8cmVkdWNlfWAgb3IgYHtAbGluayB4ZHVjZS50cmFuc2R1Y2V8dHJhbnNkdWNlfWApLlxuICogICAgIElmIHRoZSBwcm92aWRlZCBjb2xsZWN0aW9uIGlzIG5vdCBpdGVyYWJsZSwgYWxsIG9mIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXNcbiAqICAgICBvYmplY3Qgd2lsbCBiZSBgbnVsbGAuXG4gKi9cbmZ1bmN0aW9uIHRvUmVkdWNlcihjb2xsZWN0aW9uKSB7XG4gIHJldHVybiBPYmplY3QuZnJlZXplKHtcbiAgICBbcC5pbml0XTogaW5pdChjb2xsZWN0aW9uKSxcbiAgICBbcC5zdGVwXTogc3RlcChjb2xsZWN0aW9uKSxcbiAgICBbcC5yZXN1bHRdOiByZXN1bHQoY29sbGVjdGlvbilcbiAgfSk7XG59XG5cbi8qKlxuICogQSByZWR1Y2VyIG9iamVjdCBmb3IgYXJyYXlzLlxuICpcbiAqIEB0eXBlIHttb2R1bGU6eGR1Y2UuUmVkdWNlcn1cbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IEFSUkFZX1JFRFVDRVIgPSB0b1JlZHVjZXIoW10pO1xuXG4vKipcbiAqIEEgcmVkdWNlciBvYmplY3QgZm9yIG9iamVjdHMuXG4gKlxuICogQHR5cGUge21vZHVsZTp4ZHVjZS5SZWR1Y2VyfVxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgT0JKRUNUX1JFRFVDRVIgPSB0b1JlZHVjZXIoe30pO1xuXG4vKipcbiAqIEEgcmVkdWNlciBvYmplY3QgZm9yIHN0cmluZ3MuXG4gKlxuICogQHR5cGUge21vZHVsZTp4ZHVjZS5SZWR1Y2VyfVxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgU1RSSU5HX1JFRFVDRVIgPSB0b1JlZHVjZXIoXCJcIik7XG5cbi8qKlxuICogQ3JlYXRlcyBhIHRyYW5zZHVjZXIgZnJvbSBhIGZ1bmN0aW9uIGFuZCBhIHRyYW5zZHVjZXIgdG8gY2hhaW4gaXQgdG8uXG4gKlxuICogVGhpcyBpcyBpbiBtb3N0IHJlc3BlY3RzIGp1c3QgbGlrZSB7QGxpbmsgbW9kdWxlOnhkdWNlLnRvUmVkdWNlcnx0b1JlZHVjZXJ9LFxuICogd2l0aCB0d28gbm90YWJsZSBkaWZmZXJlbmNlcy4gT25lIGlzIHRoYXQgaXQgcmVxdWlyZXMgYSB0cmFuc2R1Y2VyIHRvIGNoYWluXG4gKiB0bywgYW5kIGl0IGRvZXMgdGhlIGNoYWluaW5nIGFzIGEgcGFydCBvZiBjcmVhdGluZyB0aGUgbmV3IHRyYW5zZHVjZXIuIFRoZVxuICogb3RoZXIgaXMgdGhhdCBpdCBpbmNsdWRlcyBhIHVzYWJsZSBgaW5pdGAgZnVuY3Rpb24sIHdoZXJlIHBhc3NpbmcgYSBmdW5jdGlvblxuICogdG8ge0BsaW5rIG1vZHVsZTp4ZHVjZS50b1JlZHVjZXJ8dG9SZWR1Y2VyfSB3b3VsZCBjcmVhdGUgYW4gaW5pdCBmdW5jdGlvblxuICogdGhhdCB0aHJvd3MgYW4gZXJyb3IgaWYgaXQncyBjYWxsZWQuXG4gKlxuICogVGhpcyBmdW5jdGlvbiBhcHBsaWVzIHRoZSBnaXZlbiBmdW5jdGlvbiBhcyB0aGUgYHN0ZXBgIGZ1bmN0aW9uIG9mIHRoZVxuICogcmV0dXJuZWQgdHJhbnNkdWNlciwgYW5kIHRoZSBgaW5pdGAgYW5kIGByZXN1bHRgIGZ1bmN0aW9ucyBzaW1wbHkgY2FsbCB0aGVcbiAqIHNhbWUgZnVuY3Rpb25zIGluIHRoZSBuZXh0IHRyYW5zZHVjZXIgZG93biB0aGUgY2hhaW4uIFRoaXMgaXMgcHJlY2lzZWx5IHdoYXRcbiAqICptb3N0KiB0cmFuc2R1Y2VycyB3YW50Li4uYGluaXRgIGFuZCBgcmVzdWx0YCBmdW5jdGlvbnMgYXJlIG5vcm1hbGx5IGhhbmRsZWRcbiAqIGJ5IHRoZSByZWR1Y2VyIGF0IHRoZSBlbmQgb2YgdGhlIHRyYW5zZHVjZXIgY2hhaW4uLi5idXQgaW4gdGhlIHJhcmUgY2FzZVxuICogd2hlbiBgaW5pdGAgb3IgYHJlc3VsdGAgbXVzdCBkbyBtb3JlIHRoYW4gdGhpcywgdGhlIHRyYW5zZHVjZXIgbXVzdCBiZVxuICogY3JlYXRlZCBtYW51YWxseS5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIGRvZXMgbm90IGF1dG9tYXRpY2FsbHkgY2hhaW4gdGhlIGBzdGVwYCBmdW5jdGlvbiB0byB0aGUgbmV4dFxuICogb25lIGRvd24gdGhlIGxpbmUsIGFzIHRoYXQgY2FuIGJlIGRvbmUgaW4gYW55IG51bWJlciBvZiBkaWZmZXJlbnQgd2F5cy4gVGh1c1xuICogdGhlIGZ1bmN0aW9uIGl0c2VsZiBzaG91bGQgY2FsbCB0aGUgYHN0ZXBgIGZ1bmN0aW9uIGluIGB4Zm9ybWAgaW4gd2hhdGV2ZXJcbiAqIHdheSBpcyBhcHByb3ByaWF0ZS5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcGFyYW0ge21vZHVsZTp4ZHVjZS5TdGVwRnVuY3Rpb259IGZuIFRoZSBzdGVwIGZ1bmN0aW9uIGZvciB0aGUgdHJhbnNkdWNlci5cbiAqIEBwYXJhbSB7bW9kdWxlOnhkdWNlLlRyYW5zZHVjZXJ9IHhmb3JtIFRoZSBuZXh0IHRyYW5zZHVjZXIgb2JqZWN0IGluIHRoZVxuICogICAgIGNoYWluLlxuICogQHJldHVybnMge21vZHVsZTp4ZHVjZS5UcmFuc2R1Y2VyfSBBIG5ldyB0cmFuc2R1Y2VyLCBjaGFpbmluZyB0aGUgc3VwcGxpZWRcbiAqICAgICBmdW5jdGlvbiB0byB0aGUgc3VwcGxpZWQgdHJhbnNkdWNlci5cbiAqL1xuZnVuY3Rpb24gdG9UcmFuc2R1Y2VyKGZuLCB4Zm9ybSkge1xuICByZXR1cm4ge1xuICAgIFtwLmluaXRdKCkge1xuICAgICAgcmV0dXJuIHhmb3JtW3AuaW5pdF0oKTtcbiAgICB9LFxuXG4gICAgW3Auc3RlcF06IGZuLFxuXG4gICAgW3AucmVzdWx0XSh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHhmb3JtW3AucmVzdWx0XSh2YWx1ZSk7XG4gICAgfVxuICB9O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSByZWR1Y3Rpb24gZnVuY3Rpb24gZnJvbSBhIHRyYW5zZHVjZXIgYW5kIGEgcmVkdWNlci5cbiAqXG4gKiBUaGlzIHByb2R1Y2VzIGEgZnVuY3Rpb24gdGhhdCdzIHN1aXRhYmxlIGZvciBiZWluZyBwYXNzZWQgaW50byBvdGhlclxuICogbGlicmFyaWVzJyByZWR1Y2UgZnVuY3Rpb25zLCBzdWNoIGFzIEphdmFTY3JpcHQncyBgQXJyYXkucHJvdG90eXBlLnJlZHVjZWAgb3JcbiAqIExvZGFzaCdzIGBfLnJlZHVjZWAuIEl0IHJlcXVpcmVzIGJvdGggYSB0cmFuc2Zvcm1lciBhbmQgYSByZWR1Y2VyIGJlY2F1c2VcbiAqIHJlZHVjdGlvbiBmdW5jdGlvbnMgZm9yIHRob3NlIGxpYnJhcmllcyBtdXN0IGtub3cgaG93IHRvIGRvIGJvdGguIFRoZSByZWR1Y2VyXG4gKiBjYW4gYmUgYSBzdGFuZGFyZCByZWR1Y2VyIG9iamVjdCBsaWtlIHRoZSBvbmVzIHNlbnRcbiAqIHRvYHtAbGluayBtb2R1bGU6eGR1Y2UudHJhbnNkdWNlfHRyYW5zZHVjZX1gIG9yXG4gKiBge0BsaW5rIG1vZHVsZTp4ZHVjZS5yZWR1Y2V8cmVkdWNlfWAsIG9yIGl0IGNhbiBiZSBhIHBsYWluIGZ1bmN0aW9uIHRoYXRcbiAqIHRha2VzIHR3byBwYXJhbWV0ZXJzIGFuZCByZXR1cm5zIHRoZSByZXN1bHQgb2YgcmVkdWNpbmcgdGhlIHNlY29uZCBwYXJhbWV0ZXJcbiAqIGludG8gdGhlIGZpcnN0LlxuICpcbiAqIElmIHRoZXJlIGlzIG5vIG5lZWQgZm9yIGEgdHJhbnNmb3JtYXRpb24sIHRoZW4gcGFzcyBpbiB0aGVcbiAqIGB7QGxpbmsgbW9kdWxlOnRyYW5zZHVjZXJzLmlkZW50aXR5fGlkZW50aXR5fWAgdHJhbnNkdWNlci5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcGFyYW0ge21vZHVsZTp4ZHVjZS5SZWR1Y2VyfSB4Zm9ybSBBIHRyYW5zZHVjZXIgb2JqZWN0IHdob3NlIHN0ZXBcbiAqICAgICBmdW5jdGlvbiB3aWxsIGJlY29tZSB0aGUgcmV0dXJuZWQgcmVkdWN0aW9uIGZ1bmN0aW9uLlxuICogQHBhcmFtIHsobW9kdWxlOnhkdWNlLlN0ZXBGdW5jdGlvbnxtb2R1bGU6eGR1Y2UuUmVkdWNlcil9IHJlZHVjZXIgQVxuICogICAgIHJlZHVjZXIgdGhhdCBrbm93cyBob3cgdG8gcmVkdWNlIHZhbHVlcyBpbnRvIGFuIG91dHB1dCBjb2xsZWN0aW9uLiBUaGlzXG4gKiAgICAgY2FuIGVpdGhlciBiZSBhIHJlZHVjaW5nIGZ1bmN0aW9uIG9yIGEgdHJhbnNkdWNlciBvYmplY3Qgd2hvc2UgYHN0ZXBgXG4gKiAgICAgZnVuY3Rpb24ga25vd3MgaG93IHRvIHBlcmZvcm0gdGhpcyByZWR1Y3Rpb24uXG4gKiBAcmV0dXJucyB7bW9kdWxlOnhkdWNlLlN0ZXBGdW5jdGlvbn0gQSBmdW5jdGlvbiB0aGF0IGhhbmRsZXMgYm90aCB0aGVcbiAqICAgICB0cmFuc2Zvcm1hdGlvbiBhbmQgdGhlIHJlZHVjdGlvbiBvZiBhIHZhbHVlIG9udG8gYSB0YXJnZXQgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIHRvRnVuY3Rpb24oeGZvcm0sIHJlZHVjZXIpIHtcbiAgY29uc3QgciA9IHR5cGVvZiByZWR1Y2VyID09PSBcImZ1bmN0aW9uXCIgPyB0b1JlZHVjZXIocmVkdWNlcikgOiByZWR1Y2VyO1xuICBjb25zdCByZXN1bHQgPSB4Zm9ybShyKTtcbiAgcmV0dXJuIHJlc3VsdFtwLnN0ZXBdLmJpbmQocmVzdWx0KTtcbn1cblxuLyoqXG4gKiBNYXJrcyBhIHZhbHVlIGFzIGNvbXBsZXRlLlxuICpcbiAqIFRoaXMgaXMgZG9uZSBieSB3cmFwcGluZyB0aGUgdmFsdWUuIFRoaXMgbWVhbnMgdGhyZWUgdGhpbmdzOiBmaXJzdCwgYVxuICogY29tcGxldGUgb2JqZWN0IG1heSBiZSBtYXJrZWQgYXMgY29tcGxldGUgYWdhaW47IHNlY29uZCwgYSBjb21wbGV0ZSB2YWx1ZVxuICogaXNuJ3QgdXNhYmxlIHdpdGhvdXQgYmVpbmcgdW5jb21wbGV0ZWQgZmlyc3Q7IGFuZCB0aGlyZCBhbnkgdHlwZSBvZiB2YWx1ZVxuICogKGluY2x1ZGluZyBgdW5kZWZpbmVkYCkgbWF5IGJlIG1hcmtlZCBhcyBjb21wbGV0ZS5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBiZSBjb21wbGV0ZWQuXG4gKiBAcmV0dXJuIHsqfSBBIGNvbXBsZXRlZCB2ZXJzaW9uIG9mIHRoZSBwcm92aWRlZCB2YWx1ZS4gVGhpcyByZWR1Y3Rpb24gaXNcbiAqICAgICBhY2hpZXZlZCBieSB3cmFwcGluZyB0aGUgdmFsdWUgaW4gYSBtYXJrZXIgb2JqZWN0LlxuICovXG5mdW5jdGlvbiBjb21wbGV0ZSh2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIFtwLnJlZHVjZWRdOiB0cnVlLFxuICAgIFtwLnZhbHVlXTogdmFsdWVcbiAgfTtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIHRoZSBjb21wbGV0ZSBzdGF0dXMgZnJvbSBhIGNvbXBsZXRlZCB2YWx1ZS5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIGludGVuZGVkIHRvIGJlIHVzZWQgd2hlbiBpdCdzIGNlcnRhaW4gdGhhdCBhIHZhbHVlIGlzXG4gKiBhbHJlYWR5IG1hcmtlZCBhcyBjb21wbGV0ZS4gSWYgaXQgaXMgbm90LCBgdW5kZWZpbmVkYCB3aWxsIGJlIHJldHVybmVkXG4gKiBpbnN0ZWFkIG9mIHRoZSB2YWx1ZS5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBiZSB1bmNvbXBsZXRlZC5cbiAqIEByZXR1cm4geyp9IEFuIHVuY29tcGxldGVkIHZlcnNpb24gb2YgdGhlIHByb3ZpZGVkIHZhbHVlLiBJZiB0aGUgdmFsdWUgd2FzXG4gKiAgICAgbm90IGNvbXBsZXRlIGluIHRoZSBmaXJzdCBwbGFjZSwgYHVuZGVmaW5lZGAgd2lsbCBiZSByZXR1cm5lZCBpbnN0ZWFkLlxuICovXG5mdW5jdGlvbiB1bmNvbXBsZXRlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZT8uW3AudmFsdWVdO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhIHZhbHVlIGlzIG1hcmtlZCBhcyBjb21wbGV0ZS5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0IGZvciBpdHMgY29tcGxldGUgc3RhdHVzLlxuICogQHJldHVybiB7Ym9vbGVhbn0gRWl0aGVyIGB0cnVlYCBpZiB0aGUgdmFsdWUgaXMgY29tcGxldGUsIG9yIGBmYWxzZWAgaWYgaXQgaXNcbiAqICAgICBub3QuXG4gKi9cbmZ1bmN0aW9uIGlzQ29tcGxldGVkKHZhbHVlKSB7XG4gIHJldHVybiAhIXZhbHVlPy5bcC5yZWR1Y2VkXTtcbn1cblxuLyoqXG4gKiBNYWtlcyBzdXJlIHRoYXQgYSB2YWx1ZSBpcyBtYXJrZWQgYXMgY29tcGxldGU7IGlmIGl0IGlzIG5vdCwgaXQgd2lsbCBiZVxuICogbWFya2VkIGFzIGNvbXBsZXRlLlxuICpcbiAqIFRoaXMgZGlmZmVycyBmcm9tIHtAbGluayBtb2R1bGU6eGR1Y2UuY29tcGxldGV8Y29tcGxldGV9IGluIHRoYXRcbiAqIGlmIHRoZSB2YWx1ZSBpcyBhbHJlYWR5IGNvbXBsZXRlLCB0aGlzIGZ1bmN0aW9uIHdvbid0IGNvbXBsZXRlIGl0IGFnYWluLlxuICogVGhlcmVmb3JlIHRodXMgZnVuY3Rpb24gY2FuJ3QgYmUgdXNlZCB0byBtYWtlIGEgdmFsdWUgY29tcGxldGUgbXVsdGlwbGVcbiAqIHRpbWVzLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGJlIGNvbXBsZXRlZC5cbiAqIEByZXR1cm4geyp9IElmIHRoZSB2YWx1ZSBpcyBhbHJlYWR5IGNvbXBsZXRlLCB0aGVuIHRoZSB2YWx1ZSBpcyBzaW1wbHlcbiAqICAgICByZXR1cm5lZC4gT3RoZXJ3aXNlLCBhIGNvbXBsZXRlZCB2ZXJzaW9uIG9mIHRoZSB2YWx1ZSBpcyByZXR1cm5lZC5cbiAqL1xuZnVuY3Rpb24gZW5zdXJlQ29tcGxldGVkKHZhbHVlKSB7XG4gIHJldHVybiBpc0NvbXBsZXRlZCh2YWx1ZSkgPyB2YWx1ZSA6IGNvbXBsZXRlKHZhbHVlKTtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIHRoZSBjb21wbGV0ZSBzdGF0dXMgZnJvbSBhIHZhbHVlLCBhcyBsb25nIGFzIGl0IGFjdHVhbGx5IGlzIGNvbXBsZXRlLlxuICpcbiAqIFRoaXMgZG9lcyBhIGNoZWNrIHRvIG1ha2Ugc3VyZSB0aGUgdmFsdWUgcGFzc2VkIGluIGFjdHVhbGx5IGlzIGNvbXBsZXRlLiBJZlxuICogaXQgaXNuJ3QsIHRoZSB2YWx1ZSBpdHNlbGYgaXMgcmV0dXJuZWQuIEl0J3MgbWVhbnQgdG8gYmUgdXNlZCB3aGVuIHRoZVxuICogY29tcGxldGVkIHN0YXR1cyBpcyB1bmNlcnRhaW4uXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgY29tcGxldGUgdmFsdWUgdG8gYmUgdW5jb21wbGV0ZWQuXG4gKiBAcmV0dXJuIHsqfSBJZiB0aGUgdmFsdWUgaXMgYWxyZWFkeSB1bmNvbXBsZXRlZCwgdGhlIHZhbHVlIGlzIHNpbXBseVxuICogICAgIHJldHVybmVkLiBPdGhlcndpc2UgYW4gdW5jb21wbGV0ZWQgdmVyc2lvbiBvZiB0aGUgdmFsdWUgaXMgcmV0dXJuZWQuXG4gKi9cbmZ1bmN0aW9uIGVuc3VyZVVuY29tcGxldGVkKHZhbHVlKSB7XG4gIHJldHVybiBpc0NvbXBsZXRlZCh2YWx1ZSkgPyB1bmNvbXBsZXRlKHZhbHVlKSA6IHZhbHVlO1xufVxuXG4vKipcbiAqIFJlZHVjZXMgdGhlIGVsZW1lbnRzIG9mIHRoZSBpbnB1dCBjb2xsZWN0aW9uIHRocm91Z2ggYSByZWR1Y2VyIGludG8gYW4gb3V0cHV0XG4gKiBjb2xsZWN0aW9uLlxuICpcbiAqIFRoaXMgaXMgdGhlIGxvd2VzdC1sZXZlbCBvZiB0aGUgdHJhbnNkdWN0aW9uIGZ1bmN0aW9ucy4gSW4gZmFjdCwgdGhpcyBvbmUgaXNcbiAqIHNvIGxvdy1sZXZlbCB0aGF0IGl0IGRvZXNuJ3QgaGF2ZSBhIGxvdCBvZiB1c2UgaW4gbm9ybWFsIG9wZXJhdGlvbi4gSXQncyBtb3JlXG4gKiB1c2VmdWwgZm9yIHdyaXRpbmcgeW91ciBvd24gdHJhbnNmb3JtYXRpb24gZnVuY3Rpb25zLlxuICpcbiAqIGByZWR1Y2VgIGRvZXNuJ3QgYXNzdW1lIHRoYXQgdGhlcmUncyBldmVuIGEgdHJhbnNmb3JtYXRpb24uIEl0IHJlcXVpcmVzIGFuXG4gKiBpbml0aWFsIGNvbGxlY3Rpb24gYW5kIGEgcmVkdWNlciBvYmplY3QgdGhhdCBpcyBtYXRjaGVkIHRvIHRoYXQgaW5pdGlhbFxuICogY29sbGVjdGlvbi4gVGhlIHJlZHVjZXIgb2JqZWN0IG11c3QgaW1wbGVtZW50IHRoZSBgc3RlcGAgYW5kIGByZXN1bHRgXG4gKiBwcm90b2NvbHMsIHdoaWNoIGluc3RydWN0IGByZWR1Y2VgIG9uIGhvdyB0byBidWlsZCB1cCB0aGUgY29sbGVjdGlvbi4gVGhlXG4gKiByZWR1Y2VyIG1heSBpbXBsZW1lbnQgYSB0cmFuc2Zvcm1hdGlvbiBhcyB3ZWxsLCBidXQgYWxsIHRoYXQncyBpbXBvcnRhbnQgaGVyZVxuICogaXMgdGhhdCBpdCBjYW4gZG8gdGhlIHJlZHVjdGlvbi5cbiAqXG4gKiBUaGUgaW5wdXQgY29sbGVjdGlvbiBuZWVkIG9ubHkgaW1wbGVtZW50IGBpdGVyYWJsZWAuIEl0IGlzIG5vdCBuZWNlc3NhcnkgZm9yXG4gKiB0aGUgaW5wdXQgYW5kIG91dHB1dCBjb2xsZWN0aW9ucyB0byBiZSBvZiB0aGUgc2FtZSB0eXBlOyBhcyBsb25nIGFzIHRoZSBpbnB1dFxuICogaW1wbGVtZW50cyBgaXRlcmFibGVgIGFuZCB0aGUgcmVkdWNlciBpbXBsZW1lbnRzIGBzdGVwYCBhbmQgYHJlc3VsdGBcbiAqIGFwcHJvcHJpYXRlIHRvIHRoZSB0eXBlIG9mIHRoZSBgaW5pdGAgY29sbGVjdGlvbiwgdGhlbiBhbnkgdHJhbnNsYXRpb25cbiAqIGJldHdlZW4gY29sbGVjdGlvbiB0eXBlcyBjYW4gb2NjdXIuXG4gKlxuICogVGhlIG5vcm1hbCBjb3Vyc2Ugb2Ygb3BlcmF0aW9uIHdpbGwgYmUgdG8gY2FsbFxuICoge0BsaW5rIG1vZHVsZTp4ZHVjZS50cmFuc2R1Y2V8dHJhbnNkdWNlfSBpbnN0ZWFkLCBhcyB0aGF0IGZ1bmN0aW9uIG1ha2VzIGl0XG4gKiBlYXN5IHRvIGNvbWJpbmUgdHJhbnNmb3JtYXRpb25zIHdpdGggcmVkdWN0aW9ucyBhbmQgY2FuIG9wdGlvbmFsbHkgZmlndXJlIG91dFxuICogdGhlIGluaXRpYWwgY29sbGVjdGlvbiBpdHNlbGYuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHBhcmFtIHsqfSBjb2xsZWN0aW9uIFRoZSBpbnB1dCBjb2xsZWN0aW9uLiBUaGUgb25seSByZXF1aXJlbWVudCBvZiB0aGlzXG4gKiAgICAgY29sbGVjdGlvbiBpcyB0aGF0IGl0IGltcGxlbWVudCB0aGUgYGl0ZXJhYmxlYCBwcm90b2NvbC4gU3BlY2lhbCBzdXBwb3J0XG4gKiAgICAgaXMgcHJvdmlkZWQgYnkgdGhlIGxpYnJhcnkgZm9yIG9iamVjdHMsIHNvIHRoZXkgY2FuIGJlIHVzZWQgYXMgd2VsbC5cbiAqIEBwYXJhbSB7bW9kdWxlOnhkdWNlLlJlZHVjZXJ9IHJlZHVjZXIgQW4gb2JqZWN0IHRoYXQgaW1wbGVtZW50cyB0aGUgYHN0ZXBgXG4gKiAgICAgYW5kIGByZXN1bHRgIHByb3RvY29scy4gVGhpcyBvYmplY3QgbXVzdCBrbm93IGhvdyB0byBwcm9kdWNlIGFuIG91dHB1dFxuICogICAgIGNvbGxlY3Rpb24gdGhyb3VnaCB0aG9zZSBwcm90b2NvbCBmdW5jdGlvbnMuXG4gKiBAcGFyYW0geyp9IGluaXQgYSBjb2xsZWN0aW9uIG9mIHRoZSBzYW1lIHR5cGUgYXMgdGhlIG91dHB1dCBjb2xsZWN0aW9uLiBJdFxuICogICAgIG5lZWQgbm90IGJlIGVtcHR5OyBpZiBpdCBpcyBub3QsIHRoZSBleGlzdGluZyBlbGVtZW50cyBhcmUgcmV0YWluZWQgYXNcbiAqICAgICB0aGUgaW5wdXQgY29sbGVjdGlvbiBpcyByZWR1Y2VkIGludG8gaXQuXG4gKiBAcmV0dXJuIHsqfSBBIG5ldyBjb2xsZWN0aW9uLCBjb25zaXN0aW5nIG9mIHRoZSBgaW5pdGAgY29sbGVjdGlvbiB3aXRoIGFsbCBvZlxuICogICAgIHRoZSBlbGVtZW50cyBvZiB0aGUgYGNvbGxlY3Rpb25gIGNvbGxlY3Rpb24gcmVkdWNlZCBpbnRvIGl0LlxuICovXG5mdW5jdGlvbiByZWR1Y2UoY29sbGVjdGlvbiwgcmVkdWNlciwgaW5pdCkge1xuICBpZiAoY29sbGVjdGlvbiA9PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCBpdGVyID0gaXRlcmF0b3IoY29sbGVjdGlvbik7XG4gIGlmICghaXRlcikge1xuICAgIHRocm93IEVycm9yKGBDYW5ub3QgcmVkdWNlIGFuIGluc3RhbmNlIG9mICR7Y29sbGVjdGlvbi5jb25zdHJ1Y3Rvci5uYW1lfWApO1xuICB9XG5cbiAgbGV0IGFjYyA9IGluaXQ7XG4gIGxldCBzdGVwID0gaXRlci5uZXh0KCk7XG5cbiAgd2hpbGUgKCFzdGVwLmRvbmUpIHtcbiAgICBhY2MgPSByZWR1Y2VyW3Auc3RlcF0oYWNjLCBzdGVwLnZhbHVlKTtcbiAgICBpZiAoaXNDb21wbGV0ZWQoYWNjKSkge1xuICAgICAgYWNjID0gdW5jb21wbGV0ZShhY2MpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHN0ZXAgPSBpdGVyLm5leHQoKTtcbiAgfVxuXG4gIHJldHVybiByZWR1Y2VyW3AucmVzdWx0XShhY2MpO1xufVxuXG5leHBvcnQge1xuICBpbml0LFxuICBzdGVwLFxuICByZXN1bHQsXG4gIHRvUmVkdWNlcixcbiAgQVJSQVlfUkVEVUNFUixcbiAgT0JKRUNUX1JFRFVDRVIsXG4gIFNUUklOR19SRURVQ0VSLFxuICB0b1RyYW5zZHVjZXIsXG4gIHRvRnVuY3Rpb24sXG4gIGNvbXBsZXRlLFxuICB1bmNvbXBsZXRlLFxuICBpc0NvbXBsZXRlZCxcbiAgZW5zdXJlQ29tcGxldGVkLFxuICBlbnN1cmVVbmNvbXBsZXRlZCxcbiAgcmVkdWNlXG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG5cbi8qKlxuICogRnVuY3Rpb25zIGRlYWxpbmcgd2l0aCB0aGUgYWN0dWFsIHRyYW5zZm9ybWF0aW9uIG9mIHZhbHVlcyBhbmQgZm9yIGNob29zaW5nXG4gKiB0aGUgcmVkdWNlciBkdXJpbmcgdHJhbnNkdWN0aW9uLlxuICpcbiAqIEBtb2R1bGUgeGR1Y2UvdHJhbnNmb3JtYXRpb25cbiAqIEBwcml2YXRlXG4gKi9cblxuaW1wb3J0IHsgcHJvdG9jb2xzIGFzIHAsIGlzSW1wbGVtZW50ZWQgfSBmcm9tIFwibW9kdWxlcy9wcm90b2NvbFwiO1xuaW1wb3J0IHsgaXRlcmF0b3IgfSBmcm9tIFwibW9kdWxlcy9pdGVyYXRpb25cIjtcbmltcG9ydCB7XG4gIGlzQ29tcGxldGVkLFxuICB0b1JlZHVjZXIsXG4gIHJlZHVjZSxcbiAgQVJSQVlfUkVEVUNFUixcbiAgT0JKRUNUX1JFRFVDRVIsXG4gIFNUUklOR19SRURVQ0VSXG59IGZyb20gXCJtb2R1bGVzL3JlZHVjdGlvblwiO1xuaW1wb3J0IHsgaXNGdW5jdGlvbiwgaXNBcnJheSwgaXNPYmplY3QsIGlzU3RyaW5nIH0gZnJvbSBcIm1vZHVsZXMvdXRpbHNcIjtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGl0ZXJhdG9yIHRoYXQgaXMgYWxzbyBhIHRyYW5zZHVjZXIsIHRyYW5zZm9ybWluZyBpdHMgY29sbGVjdGlvblxuICogb25lIGVsZW1lbnQgYXQgYSB0aW1lLiBUaGlzIGlzIHRoZSBhY3R1YWwgb3V0cHV0IG9mIHRoZVxuICoge0BsaW5rIG1vZHVsZTp4ZHVjZS5hc0l0ZXJhdG9yfGFzSXRlcmF0b3J9IGZ1bmN0aW9uLCBhcyB3ZWxsIGFzIHRoZSBvdXRwdXQgb2ZcbiAqIHRoZSB7QGxpbmsgbW9kdWxlOnhkdWNlLnNlcXVlbmNlfHNlcXVlbmNlfSBmdW5jdGlvbiB3aGVuIHRoZSBpbnB1dCBpcyBhblxuICogaXRlcmF0b3IuXG4gKlxuICogVGhlIGVuZCB1c2VyIG5lZWQgbm90IGJlIGNvbmNlcm5lZCB3aXRoIHRoZSB0eXBlIG9mIHRoZSBvdXRwdXQgaXRlcmF0b3IgaW5cbiAqIHRoZXNlIGNpcmN1bXN0YW5jZXM7IHRoZSBlbmQgdXNlciBuZWVkIG9ubHkgY2FyZSB0aGF0IHRoZSBvdXRwdXQgaXMsIGluIGZhY3QsXG4gKiBhbiBpdGVyYXRvciBhbmQgY2FuIGJlIGV4cGVjdGVkIHRvIGFjdCBsaWtlIG9uZS4gRm9yIHRoaXMgcmVhc29uLCB0aGlzXG4gKiBmdW5jdGlvbiBhbmQgdGhlIHR5cGUgaXQgcmV0dXJucyBhcmUgbm90IGV4cG9ydGVkLlxuICpcbiAqIFRoaXMgb2JqZWN0IHN1cHBvcnRzIG5vbi0xLXRvLTEgY29ycmVzcG9uZGVuY2VzIGJldHdlZW4gaW5wdXQgYW5kIG91dHB1dFxuICogdmFsdWVzLiBGb3IgZXhhbXBsZSwgYSBmaWx0ZXIgdHJhbnNmb3JtYXRpb24gbWlnaHQgcmV0dXJuIGZld2VyIG91dHB1dFxuICogZWxlbWVudHMgdGhhbiB3ZXJlIGluIHRoZSBpbnB1dCBjb2xsZWN0aW9uLCB3aGlsZSBhIHJlcGVhdCB0cmFuc2Zvcm1hdGlvblxuICogd2lsbCByZXR1cm4gbW9yZS4gSW4gZWl0aGVyIGNhc2UsIGBuZXh0YCBpbiB0aGlzIGNsYXNzIHdpbGwgcmV0dXJuIG9uZVxuICogZWxlbWVudCBwZXIgY2FsbC5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTp4ZHVjZS5JdGVyYWJsZX0gY29sbGVjdGlvbiB0aGUgaW5wdXQgY29sbGVjdGlvbiB0aGF0IHRoZVxuICogICAgIHByb2R1Y2VkIGl0ZXJhdG9yIHdpbGwgYmUgaXRlcmF0aW5nIG92ZXIuXG4gKiBAcGFyYW0ge21vZHVsZTp4ZHVjZS5UcmFuc2R1Y2VyRnVuY3Rpb259IHhmb3JtIEEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIGEgdHJhbnNkdWNlclxuICogICAgIG9iamVjdCB0aGF0IGRlZmluZXMgdGhlIHRyYW5zZm9ybWF0aW9uIGJlaW5nIGRvbmUgdG8gdGhlIGl0ZXJhdG9yJ3NcbiAqICAgICBlbGVtZW50cy4gQW55IG9mIHRoZSB0cmFuc2R1Y2VycyBpbiB0aGVcbiAqICAgICB7QGxpbmsgbW9kdWxlOnRyYW5zZHVjZXJzfHRyYW5zZHVjZXJzfSBtb2R1bGUgY2FuIHByb2R1Y2UgYSBzdWl0YWJsZVxuICogICAgIHRyYW5zZHVjZXIgZnVuY3Rpb24uXG4gKiBAcmV0dXJuIHttb2R1bGU6eGR1Y2UuSXRlcmF0b3J9IEFuIGl0ZXJhdG9yIHRoYXQgd2lsbCB0cmFuc2Zvcm0gaXRzIGlucHV0XG4gKiAgICAgZWxlbWVudHMgdXNpbmcgdGhlIHRyYW5zZHVjZXIgZnVuY3Rpb24gYXMgaXRzXG4gKiAgICAgYHtAbGluayBtb2R1bGU6eGR1Y2UuTmV4dEZ1bmN0aW9ufG5leHR9YCBmdW5jdGlvbiBpcyBjYWxsZWQuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiB0cmFuc2R1Y2luZ0l0ZXJhdG9yKGNvbGxlY3Rpb24sIHhmb3JtKSB7XG4gIGNvbnN0IHN0ZXBSZWR1Y2VyID0ge1xuICAgIFtwLnN0ZXBdKHhpdGVyLCBpbnB1dCkge1xuICAgICAgeGl0ZXIuaXRlbXMudW5zaGlmdChpbnB1dCk7XG4gICAgICByZXR1cm4geGl0ZXI7XG4gICAgfSxcbiAgICBbcC5yZXN1bHRdKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGl0ZXIgPSBpdGVyYXRvcihjb2xsZWN0aW9uKTtcbiAgY29uc3QgeGYgPSB4Zm9ybShzdGVwUmVkdWNlcik7XG4gIGxldCBjb21wbGV0ZWQgPSBmYWxzZTtcblxuICAvLyBUaGlzIGFycmF5IGlzIHRoZSBrZXkgdG8gd29ya2luZyBwcm9wZXJseSB3aXRoIHN0ZXAgZnVuY3Rpb25zIHRoYXQgcmV0dXJuXG4gIC8vIG1vcmUgdGhhbiBvbmUgdmFsdWUuIEFsbCBvZiB0aGVtIGFyZSBwdXQgaW50byB0aGUgaXRlbXMgYXJyYXkuIEFzIGxvbmcgYXNcbiAgLy8gdGhpcyBhcnJheSBoYXMgdmFsdWVzIGluIGl0LCB0aGUgYG5leHRgIGZ1bmN0aW9uIHdpbGwgcmV0dXJuIG9uZSB2YWx1ZVxuICAvLyBwb3BwZWQgZnJvbSBpdCByYXRoZXIgdGhhbiBydW5uaW5nIHRoZSBzdGVwIGZ1bmN0aW9uIGFnYWluLlxuICBjb25zdCBpdGVtcyA9IFtdO1xuXG4gIC8vIFRoZSBgbmV4dGAgZnVuY3Rpb24gaGVyZSBpcyByYXRoZXIgc2ltcGxlLiBJZiB0aGVyZSBpcyBhbHJlYWR5IHNvbWV0aGluZyBpblxuICAvLyB0aGUgYGl0ZW1zYCBhcnJheSwgaXQncyByZXR1cm5lZC4gSWYgbm90LCB0aGUgYHN0ZXBgIGZ1bmN0aW9uIGlzIHJ1biBhbmQsXG4gIC8vIGlmIHRoYXQgcmVzdWx0cyBpbiBhIHZhbHVlIGluIHRoZSBgaXRlbXNgIGFycmF5LCBpdCdzIHJldHVybmVkLiBPdGhlcndpc2VcbiAgLy8gYW4gb2JqZWN0IHdpdGggYHsgZG9uZTogdHJ1ZSB9YCBpcyByZXR1cm5lZC5cbiAgZnVuY3Rpb24gbmV4dCgpIHtcbiAgICBpZiAoaXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICBzdGVwKCk7XG4gICAgfVxuICAgIGlmIChpdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB7IGRvbmU6IHRydWUgfTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiBpdGVtcy5wb3AoKSxcbiAgICAgIGRvbmU6IGZhbHNlXG4gICAgfTtcbiAgfVxuXG4gIC8vIFRoaXMgaXMgd2hlcmUgbW9zdCBvZiB0aGUgd29yayBoYXBwZW5zLiBJdCBnZXRzIHRoZSBuZXh0IHZhbHVlIGZyb20gdGhlXG4gIC8vIGlucHV0IGNvbGxlY3Rpb24gYW5kIHJ1bnMgaXQgdGhyb3VnaCB0aGUgcmVkdWN0aW9uIHN0ZXAgZnVuY3Rpb25zLiBJZiB0aGF0XG4gIC8vIHJlc3VsdHMgaW4gYSB2YWx1ZSwgaXQncyBnaXZlbiB0byB0aGUgc3RlcHBlciBvYmplY3QgKHdoaWNoIGFkZHMgaXQgdG8gdGhlXG4gIC8vIGBpdGVtc2AgYXJyYXkpOyBvdGhlcndpc2UgdGhlIHdoaWxlIGxvb3AgY29udGludWVzIHRvIHRoZSBuZXh0IGVsZW1lbnQgb2ZcbiAgLy8gdGhlIGlucHV0IGNvbGxlY3Rpb24uIFRoaXMgZW5zdXJlcyB0aGF0IHRoZXJlJ3Mgc29tZXRoaW5nIGZvciB0aGUgYG5leHRgXG4gIC8vIGZ1bmN0aW9uIHRvIHJldHVybiBlYWNoIHRpbWUgaXQncyBjYWxsZWQuXG4gIC8vXG4gIC8vIElmIHRoZSBjb2xsZWN0aW9uIGhhcyBmaW5pc2hlZCBvciBpZiB0aGUgc3RlcCBmdW5jdGlvbiByZXR1cm5zIGEgY29tcGxldGVkXG4gIC8vIG9iamVjdCAod2hpY2ggdGFrZSB3aWxsIGRvIGFmdGVyIGl0cyBsaW1pdCBvZiBlbGVtZW50cyBoYXMgYmVlbiByZWFjaGVkLFxuICAvLyBmb3IgaW5zdGFuY2UpLCB0aGUgaXRlcmF0aW9uIGlzIGZpbmlzaGVkIGJ5IGNhbGxpbmcgdGhlIHJlc3VsdCBmdW5jdGlvbi5cbiAgZnVuY3Rpb24gc3RlcCgpIHtcbiAgICBjb25zdCBjb3VudCA9IGl0ZW1zLmxlbmd0aDtcbiAgICB3aGlsZSAoaXRlbXMubGVuZ3RoID09PSBjb3VudCkge1xuICAgICAgY29uc3Qgc3RlcFZhbHVlID0gaXRlci5uZXh0KCk7XG4gICAgICBpZiAoc3RlcFZhbHVlLmRvbmUgfHwgY29tcGxldGVkKSB7XG4gICAgICAgIHhmW3AucmVzdWx0XShyZXN1bHQpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNvbXBsZXRlZCA9IGlzQ29tcGxldGVkKHhmW3Auc3RlcF0ocmVzdWx0LCBzdGVwVmFsdWUudmFsdWUpKTtcbiAgICB9XG4gIH1cblxuICAvLyBUaGUgcmVzdWx0aW5nIG9iamVjdCBpcyBhbiBpdGVyYXRvciwgc28gdG8gc2F0aXNmeSB0aGUgaXRlcmFibGUgcHJvdG9jb2xcbiAgLy8gd2UganVzdCByZXR1cm4gdGhhdCBvYmplY3QgaXRzZWxmXG4gIGZ1bmN0aW9uIHNJdGVyYXRvcigpIHtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLy8gVGhlIGByZXN1bHRgIG5hbWUgaXMgaG9pc3RlZCBhbmQgdXNlZCBpbiBmdW5jdGlvbnMgZnVydGhlciB1cCwgc28gd2UgaGF2ZVxuICAvLyB0byByZXRhaW4gdGhhdCBuYW1lIGFuZCBjYW4ndCBqdXN0IHJldHVybiB0aGUgb2JqZWN0IHdpdGhvdXQgbmFtaW5nIGl0XG4gIGNvbnN0IHJlc3VsdCA9IHsgaXRlbXMsIG5leHQsIHN0ZXAsIFtTeW1ib2wuaXRlcmF0b3JdOiBzSXRlcmF0b3IgfTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBUcmFuc2Zvcm1zIHRoZSBlbGVtZW50cyBvZiB0aGUgaW5wdXQgY29sbGVjdGlvbiBhbmQgcmVkdWNlcyB0aGVtIGludG8gYW5cbiAqIG91dHB1dCBjb2xsZWN0aW9uLlxuICpcbiAqIFRoaXMgaXMgdGhlIGxvd2VzdC1sZXZlbCBvZiB0aGUgdHJhbnNkdWN0aW9uIGZ1bmN0aW9ucyB0aGF0IGlzIGxpa2VseSB0byBzZWVcbiAqIHJlZ3VsYXIgdXNlLiBJdCBkb2VzIG5vdCBhc3N1bWUgYW55dGhpbmcgYWJvdXQgdGhlIHJlZHVjZXIsIGFzIGl0IGFza3MgZm9yIGl0XG4gKiB0byBiZSBwYXNzZWQgZXhwbGljaXRseS4gVGhpcyBtZWFucyB0aGF0IGFueSBraW5kIG9mIGNvbGxlY3Rpb24gY2FuIGJlXG4gKiBwcm9kdWNlZCwgc2luY2UgdGhlIHJlZHVjZXIgaXMgbm90IHRpZWQgdG8gdGhlIGlucHV0IGNvbGxlY3Rpb24gaW4gYW55IHdheS5cbiAqXG4gKiBgdHJhbnNkdWNlYCBhbHNvIHdpbGwgYWNjZXB0IGFuIGluaXRpYWwgdmFsdWUgZm9yIHRoZSByZXN1bHRpbmcgY29sbGVjdGlvbiBhc1xuICogdGhlIG9wdGlvbmFsIGxhc3QgcGFyYW1ldGVyLiBJZiB0aGlzIHBhcmFtZXRlciBpc24ndCBwcmVzZW50LCB0aGVuIHRoZVxuICogaW5pdGlhbCB2YWx1ZSBpcyBkZXRlcm1pbmVkIGZyb20gdGhlIHRyYW5zZHVjZXIgaW5pdCBwcm90b2NvbCBwcm9wZXJ0eSBvbiB0aGVcbiAqIHJlZHVjZXIuIE5vdGUgaG93ZXZlciB0aGF0IG1hbnkgcmVkdWNlcnMgbWF5IG5vdCBwcm92aWRlIGFuIGluaXRpYWwgdmFsdWUsXG4gKiBhbmQgaW4gdGhvc2UgY2FzZXMgaXQgd2lsbCAqaGF2ZSogdG8gYmUgcGFzc2VkIGFzIGEgcGFyYW1ldGVyLlxuICpcbiAqIGBgYFxuICogaW1wb3J0IHsgcHJvdG9jb2xzIGFzIHAsIHRyYW5zZHVjZSB9IGZyb20gXCJAY2hhbmtvL3hkdWNlXCI7XG4gKiBpbXBvcnQgeyBtYXAgfSBmcm9tIFwiQGNoYW5rby90cmFuc2R1Y2Vyc1wiO1xuICpcbiAqIGNvbnN0IHhmb3JtID0gbWFwKHggPT4geCArIDEpO1xuICpcbiAqIGNvbnN0IGFycmF5UmVkdWNlciA9IHtcbiAqICAgW3AuaW5pdF0oKSB7IHJldHVybiBbXTsgfSxcbiAqICAgW3AucmVzdWx0XSh4KSB7IHJldHVybiB4OyB9LFxuICogICBbcC5zdGVwXShhY2MsIHgpIHtcbiAqICAgICBhY2MucHVzaCh4KTtcbiAqICAgICByZXR1cm4gYWNjO1xuICogICB9XG4gKiB9O1xuICpcbiAqIGNvbnN0IHN0cmluZ1JlZHVjZXIgPSB7XG4gKiAgIFtwLmluaXRdKCkgeyByZXR1cm4gJyc7IH0sXG4gKiAgIFtwLnJlc3VsdF0oeCkgeyByZXR1cm4geDsgfSxcbiAqICAgW3Auc3RlcF0oYWNjLCB4KSB7IHJldHVybiBhY2MgKyB4OyB9XG4gKiB9O1xuICpcbiAqIGxldCByZXN1bHQgPSB0cmFuc2R1Y2UoWzEsIDIsIDMsIDQsIDVdLCB4Zm9ybSwgYXJyYXlSZWR1Y2VyKTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdCk7ICAgLy8gLT4gWzIsIDMsIDQsIDUsIDZdXG4gKlxuICogcmVzdWx0ID0gdHJhbnNkdWNlKFsxLCAyLCAzLCA0LCA1XSwgeGZvcm0sIHN0cmluZ1JlZHVjZXIpO1xuICogY29uc29sZS5sb2cocmVzdWx0KTsgICAvLyAtPiBcIjIzNDU2XCJcbiAqXG4gKiByZXN1bHQgPSB0cmFuc2R1Y2UoJzEyMzQ1JywgeGZvcm0sIGFycmF5UmVkdWNlcik7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQpOyAgIC8vIC0+IFsyLCAzLCA0LCA1LCA2XVxuICpcbiAqIHJlc3VsdCA9IHRyYW5zZHVjZSgnMTIzNDUnLCB4Zm9ybSwgc3RyaW5nUmVkdWNlcik7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQpOyAgIC8vIC0+IFwiMjM0NTZcIlxuICogYGBgXG4gKlxuICogVGhlc2UgZXhhbXBsZXMgaWxsdXN0cmF0ZSBhIG51bWJlciBvZiBpbXBvcnRhbnQgY29uY2VwdHMuIEZpcnN0IG9mIGFsbCwgdGhlXG4gKiB0cmFuc2R1Y2VyIGZ1bmN0aW9uIGlzIGluZGVwZW5kZW50IG9mIHRoZSB0eXBlIG9mIHRoZSBjb2xsZWN0aW9uOyB0aGUgc2FtZVxuICogdHJhbnNkdWNlciBmdW5jdGlvbiBpcyB1c2VkIG5vIG1hdHRlciB0aGUgdHlwZSBvZiBpbnB1dCBvciBvdXRwdXRcbiAqIGNvbGxlY3Rpb25zLiBTZWNvbmRseSwgdHdvIHJlZHVjZXJzIGFyZSBkZWZpbmVkLiBUaGVzZSBhcmUgb2JqZWN0cyB0aGF0XG4gKiBjb25mb3JtIHRvIHRoZSB0cmFuc2R1Y2VyIHByb3RvY29sIChzZWUgdGhlIGRvY3VtZW50YXRpb24gb25cbiAqIGB7QGxpbmsgbW9kdWxlOnhkdWNlLnByb3RvY29sc31gKSBhbmQgdGhhdCBrbm93IGhvdyB0byBwcm9kdWNlIHRoZSBvdXRwdXRcbiAqIGNvbGxlY3Rpb24gb2YgY2hvaWNlLiBJbiB0aGlzIGNhc2UsIHRoZSByZWR1Y2VycyBrbm93IGhvdyB0byBjcmVhdGUgbmV3XG4gKiBhcnJheXMgYW5kIHN0cmluZ3MgKHRoZSBgaW5pdGAgcHJvdG9jb2wpIGFuZCBob3cgdG8gYWRkIGVsZW1lbnRzIHRvIGFycmF5c1xuICogYW5kIHN0cmluZ3MgKHRoZSBgc3RlcGAgcHJvdG9jb2wpLiBCZWNhdXNlIHRoZXNlIHJlZHVjZXJzIGRvIGhhdmUgYGluaXRgXG4gKiBwcm90b2NvbCBwcm9wZXJ0aWVzLCB0aGUgYHRyYW5zZHVjZWAgY2FsbHMgZG8gbm90IHJlcXVpcmUgZXhwbGljaXQgaW5pdGlhbFxuICogY29sbGVjdGlvbnMuXG4gKlxuICogVGhlIGZpbmFsIHBvaW50IGlzIHRoYXQgYHRyYW5zZHVjZWAgY2FuIGFjY2VwdCBhbnkga2luZCBvZiBpdGVyYWJsZVxuICogY29sbGVjdGlvbiwgYW5kIGJ5IHBhc3NpbmcgaW4gdGhlIHByb3BlciByZWR1Y2VyLCBpdCBjYW4gcHJvZHVjZSBhbnkga2luZCBvZlxuICogb3V0cHV0IGNvbGxlY3Rpb24uIFRoZSBzYW1lIGB0cmFuc2R1Y2VgIGZ1bmN0aW9uIGFuZCB0aGUgc2FtZSBtYXAgdHJhbnNmb3JtZXJcbiAqIGlzIHVzZWQgaW4gYWxsIGZvdXIgZXhhbXBsZXMsIGRlc3BpdGUgdGhlIGlucHV0L291dHB1dCBjb21iaW5hdGlvbiBiZWluZ1xuICogZGlmZmVyZW50IGluIGFsbCBmb3VyLlxuICpcbiAqIFRoZSBgcmVkdWNlcmAgcGFyYW1ldGVyICpjYW4qIGJlIGEgcmVkdWNlciBmdW5jdGlvbiBpbnN0ZWFkIG9mIGEgcmVkdWNlclxuICogb2JqZWN0LiBJZiB0aGlzIGlzIHRoZSBjYXNlLCB0aGUgYGluaXRgIHBhcmFtZXRlciBpcyByZXF1aXJlZCBiZWNhdXNlIGFcbiAqIGZ1bmN0aW9uIGNhbm5vdCBkZWZpbmUgYW4gaW5pdGlhbCB2YWx1ZSBpdHNlbGYuXG4gKlxuICogVGhlIGBpbml0YCBjb2xsZWN0aW9uIGRvZXNuJ3QgaGF2ZSB0byBiZSBlbXB0eS4gSWYgaXQgaXNuJ3QsIHRoZSBlbGVtZW50c1xuICogdGhhdCBhcmUgYWxyZWFkeSBpbiBpdCBhcmUgcmV0YWluZWQgYW5kIHRoZSB0cmFuc2Zvcm1lZCBpbnB1dCBlbGVtZW50cyBhcmVcbiAqIHJlZHVjZWQgaW50byB0aGUgY29sbGVjdGlvbiBub3JtYWxseS5cbiAqXG4gKiBPZiBjb3Vyc2UsIHRoZSBleGFtcGxlcyBhcmUgbm90IHJlYWxseSBuZWNlc3NhcnkgLSB0aGUgc2FtZSB0aGluZyBjb3VsZCBiZVxuICogYWNjb21wbGlzaGVkIHVzaW5nIGB7QGxpbmsgbW9kdWxlOnhkdWNlLmludG98aW50b31gIHdpdGhvdXQgaGF2aW5nIHRvIGNyZWF0ZVxuICogdGhlIHJlZHVjZXJzIChzdHJpbmdzIGFuZCBhcnJheXMgcGFzc2VkIHRvIGB7QGxpbmsgbW9kdWxlOnhkdWNlLmludG98aW50b31gXG4gKiBhcyB0YXJnZXRzIGtub3cgaG93IHRvIHJlZHVjZSB0aGVtc2VsdmVzIGFscmVhZHkpLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwYXJhbSB7bW9kdWxlOnhkdWNlLkl0ZXJhYmxlfSBjb2xsZWN0aW9uIFRoZSBpbnB1dCBjb2xsZWN0aW9uLiBUaGUgb25seVxuICogICAgIHJlcXVpcmVtZW50IG9mIHRoaXMgY29sbGVjdGlvbiBpcyB0aGF0IGl0IGltcGxlbWVudCB0aGUgYGl0ZXJhYmxlYFxuICogICAgIHByb3RvY29sLiBTcGVjaWFsIHN1cHBvcnQgaXMgcHJvdmlkZWQgYnkgdGhlIGxpYnJhcnkgZm9yIG9iamVjdHMsIHNvIHRoZXlcbiAqICAgICBjYW4gYWxzbyBiZSB1c2VkLlxuICogQHBhcmFtIHttb2R1bGU6eGR1Y2UuVHJhbnNkdWNlckZ1bmN0aW9ufSBbeGZvcm1dIEEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIGEgdHJhbnNkdWNlclxuICogICAgIG9iamVjdCB0aGF0IGRlZmluZXMgdGhlIHRyYW5zZm9ybWF0aW9uIGJlaW5nIGRvbmUgdG8gdGhlIGlucHV0XG4gKiAgICAgY29sbGVjdGlvbidzIGVsZW1lbnRzLiBBbnkgb2YgdGhlIHRyYW5zZHVjZXJzIGluIHRoZVxuICogICAgIHtAbGluayBtb2R1bGU6dHJhbnNkdWNlcnN8dHJhbnNkdWNlcnN9IG1vZHVsZSBjYW4gcHJvZHVjZSBhIHN1aXRhYmxlXG4gKiAgICAgdHJhbnNkdWNlciBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7KG1vZHVsZTp4ZHVjZS5TdGVwRnVuY3Rpb258bW9kdWxlOnhkdWNlLlJlZHVjZXIpfSByZWR1Y2VyIEVpdGhlciBhXG4gKiAgICAgZnVuY3Rpb24gb3IgYSByZWR1Y2VyIG9iamVjdCB0aGF0IGltcGxlbWVudHMgdGhlIHRyYW5zZHVjZXIgcHJvdG9jb2xzXG4gKiAgICAgKGBpbml0YCBpcyAgb25seSByZXF1aXJlZCBpZiB0aGUgYGluaXRgIHBhcmFtZXRlciBpcyBub3QgcHJlc2VudCkuIFRoaXNcbiAqICAgICBvYmplY3QgbXVzdCBrbm93IGhvdyB0byBwcm9kdWNlIGFuIG91dHB1dCBjb2xsZWN0aW9uIHRocm91Z2ggaXRzIGBzdGVwYFxuICogICAgIGFuZCBgcmVzdWx0YCBwcm90b2NvbCBmdW5jdGlvbnMuIElmIHRoaXMgcGFyYW1ldGVyIGlzIGEgZnVuY3Rpb24sIHRoZW4gaXRcbiAqICAgICBpcyB0dXJuZWQgaW50byBhIHZhbGlkIHJlZHVjZXIgb2JqZWN0LlxuICogQHBhcmFtIHttb2R1bGU6eGR1Y2UuUmVkdWNpYmxlfSBbaW5pdF0gQSBjb2xsZWN0aW9uIG9mIHRoZSBzYW1lIHR5cGUgYXMgdGhlXG4gKiAgICAgb3V0cHV0IGNvbGxlY3Rpb24uIElmIHRoaXMgaXMgbm90IHByZXNlbnQsIHRoZW4gdGhlIHJlZHVjZXIncyBgaW5pdGBcbiAqICAgICBwcm90b2NvbCBmdW5jdGlvbiBpcyBjYWxsZWQgaW5zdGVhZCB0byBnZXQgdGhlIGluaXRpYWwgY29sbGVjdGlvbi4gSWYgaXRcbiAqICAgICBpcyBwcmVzZW50IGFuZCBub3QgZW1wdHksIHRoZW4gdGhlIGV4aXN0aW5nIGVsZW1lbnRzIHJlbWFpbiBhbmQgdGhlXG4gKiAgICAgdHJhbnNmb3JtZWQgaW5wdXQgY29sbGVjdGlvbiBlbGVtZW50cyBhcmUgYWRkZWQgdG8gaXQuXG4gKiBAcmV0dXJuIHsqfSBBIGNvbGxlY3Rpb24gb2YgYSB0eXBlIGRldGVybWluZWQgYnkgdGhlIHBhc3NlZCByZWR1Y2VyLiBUaGVcbiAqICAgICBlbGVtZW50cyBvZiB0aGlzIGNvbGxlY3Rpb24gYXJlIHRoZSByZXN1bHRzIGZyb20gdGhlIHRyYW5zZm9ybWVyIGZ1bmN0aW9uXG4gKiAgICAgYmVpbmcgYXBwbGllZCB0byBlYWNoIGVsZW1lbnQgb2YgdGhlIGlucHV0IGNvbGxlY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIHRyYW5zZHVjZShjb2xsZWN0aW9uLCB4Zm9ybSwgcmVkdWNlciwgaW5pdCkge1xuICBjb25zdCByID0gaXNGdW5jdGlvbihyZWR1Y2VyKSA/IHRvUmVkdWNlcihyZWR1Y2VyKSA6IHJlZHVjZXI7XG4gIGNvbnN0IGkgPSBpbml0ID8/IHJbcC5pbml0XSgpO1xuICBjb25zdCB4ZiA9IHhmb3JtID8geGZvcm0ocikgOiByO1xuICByZXR1cm4gcmVkdWNlKGNvbGxlY3Rpb24sIHhmLCBpKTtcbn1cblxuLyoqXG4gKiBUcmFuc2Zvcm1zIHRoZSBlbGVtZW50cyBvZiB0aGUgaW5wdXQgY29sbGVjdGlvbiBhbmQgcmVkdWNlcyB0aGVtIGludG8gYSBuZXdcbiAqIGFycmF5LlxuICpcbiAqIFRoZSB0cmFuc2Zvcm1lciBpcyBvcHRpb25hbC4gSWYgaXQgaXNuJ3QgcHJlc2VudCwgdGhpcyBmdW5jdGlvbiBqdXN0IGNvbnZlcnRzXG4gKiB0aGUgaW5wdXQgY29sbGVjdGlvbiBpbnRvIGFuIGFycmF5LlxuICpcbiAqIGBgYFxuICogaW1wb3J0IHsgYXNBcnJheSB9IGZyb20gXCJAY2hhbmtvL3hkdWNlXCI7XG4gKiBpbXBvcnQgeyBtYXAgfSBmcm9tIFwiQGNoYW5rby90cmFuc2R1Y2Vyc1wiO1xuICpcbiAqIGNvbnN0IHhmb3JtID0gbWFwKHggPT4geCArIDEpO1xuICpcbiAqIGxldCByZXN1bHQgPSBhc0FycmF5KFsxLCAyLCAzLCA0LCA1XSwgeGZvcm0pO1xuICogY29uc29sZS5sb2cocmVzdWx0KTsgICAvLyAtPiBbMiwgMywgNCwgNSwgNl1cbiAqXG4gKiByZXN1bHQgPSBhc0FycmF5KCcxMjM0NScsIHhmb3JtKTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdCk7ICAgLy8gLT4gWzIsIDMsIDQsIDUsIDZdXG4gKlxuICogcmVzdWx0ID0gYXNBcnJheSgnMTIzNDUnKTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdCk7ICAgLy8gLT4gWzEsIDIsIDMsIDQsIDVdXG4gKlxuICogcmVzdWx0ID0gYXNBcnJheSh7YTogMSwgYjogMn0pO1xuICogY29uc29sZS5sb2cocmVzdWx0KTsgICAvLyAtPiBbeyBhOiAxIH0sIHsgYjogMiB9XVxuICogYGBgXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHBhcmFtIHttb2R1bGU6eGR1Y2UuSXRlcmFibGV9IGNvbGxlY3Rpb24gVGhlIGlucHV0IGNvbGxlY3Rpb24uIFRoZSBvbmx5XG4gKiAgICAgcmVxdWlyZW1lbnQgb2YgdGhpcyBjb2xsZWN0aW9uIGlzIHRoYXQgaXQgaW1wbGVtZW50IHRoZSBgaXRlcmFibGVgXG4gKiAgICAgcHJvdG9jb2wuIFNwZWNpYWwgc3VwcG9ydCBpcyBwcm92aWRlZCBieSB0aGUgbGlicmFyeSBmb3Igb2JqZWN0cywgc28gdGhleVxuICogICAgIGNhbiBhbHNvIGJlIHVzZWQuXG4gKiBAcGFyYW0ge21vZHVsZTp4ZHVjZS5UcmFuc2R1Y2VyRnVuY3Rpb259IFt4Zm9ybV0gQSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgYSB0cmFuc2R1Y2VyXG4gKiAgICAgb2JqZWN0IHRoYXQgZGVmaW5lcyB0aGUgdHJhbnNmb3JtYXRpb24gYmVpbmcgZG9uZSB0byB0aGUgaW5wdXRcbiAqICAgICBjb2xsZWN0aW9uJ3MgZWxlbWVudHMuIEFueSBvZiB0aGUgdHJhbnNkdWNlcnMgaW4gdGhlXG4gKiAgICAge0BsaW5rIG1vZHVsZTp0cmFuc2R1Y2Vyc3x0cmFuc2R1Y2Vyc30gbW9kdWxlIGNhbiBwcm9kdWNlIGEgc3VpdGFibGVcbiAqICAgICB0cmFuc2R1Y2VyIGZ1bmN0aW9uLiBJZiB0aGlzIGlzbid0IHByZXNlbnQsIHRoZSBpbnB1dCBjb2xsZWN0aW9uIHdpbGxcbiAqICAgICBzaW1wbHkgYmUgcmVkdWNlZCBpbnRvIGFuIGFycmF5IHdpdGhvdXQgdHJhbnNmb3JtYXRpb24uXG4gKiBAcmV0dXJuIHtBcnJheX0gQW4gYXJyYXkgY29udGFpbmluZyBhbGwgb2YgdGhlIHRyYW5zZm9ybWVkIHZhbHVlcyBmcm9tIHRoZVxuICogICAgIGlucHV0IGNvbGxlY3Rpb24gZWxlbWVudHMuXG4gKi9cbmZ1bmN0aW9uIGFzQXJyYXkoY29sbGVjdGlvbiwgeGZvcm0pIHtcbiAgcmV0dXJuIHRyYW5zZHVjZShjb2xsZWN0aW9uLCB4Zm9ybSwgQVJSQVlfUkVEVUNFUik7XG59XG5cbi8qKlxuICogVHJhbnNmb3JtcyB0aGUgZWxlbWVudHMgb2YgdGhlIGlucHV0IGNvbGxlY3Rpb24gYW5kIHJlZHVjZXMgdGhlbSBpbnRvIGEgbmV3XG4gKiBvYmplY3QuXG4gKlxuICogVGhlIHRyYW5zZm9ybWVyIGlzIG9wdGlvbmFsLiBJZiBpdCBpc24ndCBwcmVzZW50LCB0aGlzIGZ1bmN0aW9uIGp1c3QgY29udmVydHNcbiAqIHRoZSBpbnB1dCBjb2xsZWN0aW9uIGludG8gYW4gb2JqZWN0LiBXaGVuIHRoaXMgaGFwcGVucywgaWYgdGhlIGlucHV0XG4gKiBjb2xsZWN0aW9uIGlzIG5vdCBhbiBvYmplY3Qgb3IgYW4gYXJyYXkgb2Ygb2JqZWN0cywgbnVtYmVycyBzdGFydGluZyBhdCBgMGBcbiAqIHdpbGwgYmUgdXNlZCBhcyBrZXlzIGZvciB0aGUgdmFsdWVzIHByb3ZpZGVkIGJ5IHRoZSBpbnB1dCBjb2xsZWN0aW9uLlxuICpcbiAqIGBgYFxuICogaW1wb3J0IHsgYXNPYmplY3QsIGt2IH0gZnJvbSBcIkBjaGFua28veGR1Y2VcIjtcbiAqIGltcG9ydCB7IG1hcCB9IGZyb20gXCJAY2hhbmtvL3RyYW5zZHVjZXJzXCI7XG4gKlxuICogY29uc3QgZm4gPSBwcm9wID0+IHtcbiAqICAgY29uc3QgeyBrLCB2IH0gPSBrdihwcm9wKTtcbiAqICAgcmV0dXJuIHsgW2tdOiB2ICsgMSB9O1xuICogfVxuICogY29uc3QgeGZvcm0gPSBtYXAoZm4pO1xuICpcbiAqIGxldCByZXN1bHQgPSBhc09iamVjdCh7IGE6IDEsIGI6IDIgfSwgeGZvcm0pO1xuICogY29uc29sZS5sb2cocmVzdWx0KTsgICAvLyAtPiB7IGE6IDIsIGI6IDMgfVxuICpcbiAqIHJlc3VsdCA9IGFzT2JqZWN0KFt7IGE6IDEgfSwgeyBiOiAyIH1dLCB4Zm9ybSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQpOyAgIC8vIC0+IHsgYTogMiwgYjogMyB9XG4gKlxuICogcmVzdWx0ID0gYXNPYmplY3QoWzEsIDIsIDMsIDQsIDVdKTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdCk7ICAgLy8gLT4geyAwOiAxLCAxOiAyLCAyOiAzLCAzOiA0LCA0OiA1IH1cbiAqXG4gKiByZXN1bHQgPSBhc09iamVjdChbeyBhOiAxIH0sIHsgYjogMiB9XSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQpOyAgIC8vIC0+IHsgYTogMSwgYjogMiB9XG4gKlxuICogcmVzdWx0ID0gYXNPYmplY3QoXCJoZWxsb1wiKTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdCk7ICAgLy8gLT4geyAwOiBcImhcIiwgMTogXCJlXCIsIDI6IFwibFwiLCAzOiBcImxcIiwgNDogXCJvXCIgfVxuICogYGBgXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHBhcmFtIHttb2R1bGU6eGR1Y2UuSXRlcmFibGV9IGNvbGxlY3Rpb24gVGhlIGlucHV0IGNvbGxlY3Rpb24uIFRoZSBvbmx5XG4gKiAgICAgcmVxdWlyZW1lbnQgb2YgdGhpcyBjb2xsZWN0aW9uIGlzIHRoYXQgaXQgaW1wbGVtZW50IHRoZSBgaXRlcmFibGVgXG4gKiAgICAgcHJvdG9jb2wuIFNwZWNpYWwgc3VwcG9ydCBpcyBwcm92aWRlZCBieSB0aGUgbGlicmFyeSBmb3Igb2JqZWN0cywgc28gdGhleVxuICogICAgIGNhbiBhbHNvIGJlIHVzZWQuXG4gKiBAcGFyYW0ge21vZHVsZTp4ZHVjZS5UcmFuZHVjZXJ9IFt4Zm9ybV0gQSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgYSB0cmFuc2R1Y2VyXG4gKiAgICAgb2JqZWN0IHRoYXQgZGVmaW5lcyB0aGUgdHJhbnNmb3JtYXRpb24gYmVpbmcgZG9uZSB0byB0aGUgaW5wdXRcbiAqICAgICBjb2xsZWN0aW9uJ3MgZWxlbWVudHMuIEFueSBvZiB0aGUgdHJhbnNkdWNlcnMgaW4gdGhlXG4gKiAgICAge0BsaW5rIG1vZHVsZTp0cmFuc2R1Y2Vyc3x0cmFuc2R1Y2Vyc30gbW9kdWxlIGNhbiBwcm9kdWNlIGEgc3VpdGFibGVcbiAqICAgICB0cmFuc2R1Y2VyIGZ1bmN0aW9uLiBJZiB0aGlzIGlzbid0IHByZXNlbnQsIHRoZSBpbnB1dCBjb2xsZWN0aW9uIHdpbGxcbiAqICAgICBzaW1wbHkgYmUgcmVkdWNlZCBpbnRvIGFuIG9iamVjdCB3aXRob3V0IHRyYW5zZm9ybWF0aW9uLlxuICogQHJldHVybiB7T2JqZWN0fSBBbiBvYmplY3QgY29udGFpbmluZyBhbGwgb2YgdGhlIHRyYW5zZm9ybWVkIHZhbHVlcyBmcm9tIHRoZVxuICogICAgIGlucHV0IGNvbGxlY3Rpb24gZWxlbWVudHMuXG4gKi9cbmZ1bmN0aW9uIGFzT2JqZWN0KGNvbGxlY3Rpb24sIHhmb3JtKSB7XG4gIHJldHVybiB0cmFuc2R1Y2UoY29sbGVjdGlvbiwgeGZvcm0sIE9CSkVDVF9SRURVQ0VSKTtcbn1cblxuLyoqXG4gKiBUcmFuc2Zvcm1zIHRoZSBlbGVtZW50cyBvZiB0aGUgaW5wdXQgY29sbGVjdGlvbiBhbmQgcmVkdWNlcyB0aGVtIGludG8gYSBuZXdcbiAqIHN0cmluZy5cbiAqXG4gKiBUaGUgdHJhbnNmb3JtZXIgaXMgb3B0aW9uYWwuIElmIGl0IGlzbid0IHByZXNlbnQsIHRoaXMgZnVuY3Rpb24ganVzdCBjb252ZXJ0c1xuICogdGhlIGlucHV0IGNvbGxlY3Rpb24gaW50byBhbiBzdHJpbmcuIElmIHRoaXMgaXMgdGhlIGNhc2UgYW5kIHRoZSBpbnB1dFxuICogY29sbGVjdGlvbiBpcyBhbiBvYmplY3QsIG9ubHkgdGhlIHZhbHVlcyB3aWxsIGJlIGNvbmNhdGVuYXRlZCBpbnRvIGEgc3RyaW5nLlxuICpcbiAqIE90aGVyd2lzZSwgdHJhbnNmb3JtaW5nIG9iamVjdHMgaW50byBzdHJpbmdzIG9ubHkgbWFrZXMgbXVjaCBzZW5zZSBpZiB0aGVcbiAqIHRyYW5zZHVjZXIgcHJvZHVjZXMgb25seSBhIHNpbmdsZSBvdXRwdXQgZnJvbSBlYWNoIG9mIHRoZSBvYmplY3RzIGtleS92YWx1ZVxuICogcGFpcnMuXG4gKlxuICogYGBgXG4gKiBpbXBvcnQgeyB0cmFuc2R1Y2UsIGtleSB9IGZyb20gXCJAY2hhbmtvL3hkdWNlXCI7XG4gKiBpbXBvcnQgeyBtYXAgfSBmcm9tIFwiQGNoYW5rby90cmFuc2R1Y2Vyc1wiO1xuICpcbiAqIGNvbnN0IHhmb3JtID0gbWFwKHggPT4geC50b1VwcGVyQ2FzZSgpKTtcbiAqXG4gKiBsZXQgcmVzdWx0ID0gYXNTdHJpbmcoJ2hlbGxvJywgeGZvcm0pO1xuICogY29uc29sZS5sb2cocmVzdWx0KTsgICAvLyAtPiBcIkhFTExPXCJcbiAqXG4gKiByZXN1bHQgPSBhc1N0cmluZyhbJ2gnLCAnZScsICdsJywgJ2wnLCAnbyddLCB4Zm9ybSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQpOyAgIC8vIC0+IFwiSEVMTE9cIlxuICpcbiAqIHJlc3VsdCA9IGFzU3RyaW5nKHsgYTogMSwgYzogMiwgYjogMyB9LCBtYXAoa2V5KSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQpOyAgIC8vIC0+IFwiYWNiXCJcbiAqXG4gKiByZXN1bHQgPSBhc1N0cmluZyhbMSwgMiwgMywgNCwgNV0pO1xuICogY29uc29sZS5sb2cocmVzdWx0KTsgICAvLyAtPiBcIjEyMzQ1XCJcbiAqXG4gKiByZXN1bHQgPSBhc1N0cmluZyh7IGE6IDEsIGM6IDIsIGI6IDMgfSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQpOyAgIC8vIC0+IFwiMTIzXCJcbiAqIGBgYFxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwYXJhbSB7bW9kdWxlOnhkdWNlLkl0ZXJhYmxlfSBjb2xsZWN0aW9uIFRoZSBpbnB1dCBjb2xsZWN0aW9uLiBUaGUgb25seVxuICogICAgIHJlcXVpcmVtZW50IG9mIHRoaXMgY29sbGVjdGlvbiBpcyB0aGF0IGl0IGltcGxlbWVudCB0aGUgYGl0ZXJhYmxlYFxuICogICAgIHByb3RvY29sLiBTcGVjaWFsIHN1cHBvcnQgaXMgcHJvdmlkZWQgYnkgdGhlIGxpYnJhcnkgZm9yIG9iamVjdHMsIHNvIHRoZXlcbiAqICAgICBjYW4gYWxzbyBiZSB1c2VkLlxuICogQHBhcmFtIHttb2R1bGU6eGR1Y2UuVHJhbnNkdWNlckZ1bmN0aW9ufSBbeGZvcm1dIEEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIGEgdHJhbnNkdWNlclxuICogICAgIG9iamVjdCB0aGF0IGRlZmluZXMgdGhlIHRyYW5zZm9ybWF0aW9uIGJlaW5nIGRvbmUgdG8gdGhlIGlucHV0XG4gKiAgICAgY29sbGVjdGlvbidzIGVsZW1lbnRzLiBBbnkgb2YgdGhlIHRyYW5zZHVjZXJzIGluIHRoZVxuICogICAgIHtAbGluayBtb2R1bGU6dHJhbnNkdWNlcnN8dHJhbnNkdWNlcnN9IG1vZHVsZSBjYW4gcHJvZHVjZSBhIHN1aXRhYmxlXG4gKiAgICAgdHJhbnNkdWNlciBmdW5jdGlvbi4gSWYgdGhpcyBpc24ndCBwcmVzZW50LCB0aGUgaW5wdXQgY29sbGVjdGlvbiB3aWxsXG4gKiAgICAgc2ltcGx5IGJlIHJlZHVjZWQgaW50byBhIHN0cmluZyB3aXRob3V0IHRyYW5zZm9ybWF0aW9uLlxuICogQHJldHVybiB7U3RyaW5nfSBBIHN0cmluZyBjb250YWluaW5nIGFsbCBvZiB0aGUgdHJhbnNmb3JtZWQgdmFsdWVzIGZyb20gdGhlXG4gKiAgICAgaW5wdXQgY29sbGVjdGlvbiBlbGVtZW50cy5cbiAqL1xuZnVuY3Rpb24gYXNTdHJpbmcoY29sbGVjdGlvbiwgeGZvcm0pIHtcbiAgcmV0dXJuIHRyYW5zZHVjZShjb2xsZWN0aW9uLCB4Zm9ybSwgU1RSSU5HX1JFRFVDRVIpO1xufVxuXG4vKipcbiAqIFRyYW5zZm9ybXMgdGhlIGVsZW1lbnRzIG9mIHRoZSBpbnB1dCBjb2xsZWN0aW9uIGFuZCByZWR1Y2VzIHRoZW0gaW50byBhIG5ld1xuICogaXRlcmF0b3IuXG4gKlxuICogVGhlIHRyYW5zZm9ybWVyIGlzIG9wdGlvbmFsLiBJZiBpdCBpc24ndCBwcmVzZW50LCB0aGlzIGZ1bmN0aW9uIGp1c3QgY29udmVydHNcbiAqIHRoZSBpbnB1dCBjb2xsZWN0aW9uIGludG8gYW4gaXRlcmF0b3IuXG4gKlxuICogKihUaGUgcmVzdWx0cyBoZXJlIGFyZSBzaG93biBwYXNzZWQgdGhyb3VnaCBgYXNBcnJheWAgYmVjYXVzZSB0aGVyZSdzIG5vXG4gKiBwcmludGFibGUgcmVwcmVzZW50YXRpb24gb2YgYW4gaXRlcmF0b3IgdG8gc2hvdy4gVGhlIGBhc0FycmF5YCBjYWxscyBhcmUgZm9yXG4gKiBkZW1vbnN0cmF0aW9uIHB1cnBvc2VzIG9ubHkuKSpcbiAqXG4gKiBgYGBcbiAqIGltcG9ydCB7IGFzSXRlcmF0b3IsIGFzQXJyYXkgfSBmcm9tIFwiQGNoYW5rby94ZHVjZVwiO1xuICogaW1wb3J0IHsgbWFwIH0gZnJvbSBcIkBjaGFua28vdHJhbnNkdWNlcnNcIjtcbiAqXG4gKiBjb25zdCB4Zm9ybSA9IG1hcCh4ID0+IHggKyAxKTtcbiAqIGZ1bmN0aW9uKiBmaXZlKCkge1xuICogICBmb3IgKGxldCBpID0gMTsgaSA8PSA1OyArK2kpIHtcbiAqICAgICB5aWVsZCBpO1xuICogICB9XG4gKiB9O1xuICpcbiAqIGxldCByZXN1bHQgPSBhc0l0ZXJhdG9yKGZpdmUoKSwgeGZvcm0pO1xuICogY29uc29sZS5sb2coYXNBcnJheShyZXN1bHQpKTsgICAvLyAtPiBbMiwgMywgNCwgNSwgNl1cbiAqXG4gKiByZXN1bHQgPSBhc0l0ZXJhdG9yKFsxLCAyLCAzLCA0LCA1XSwgeGZvcm0pO1xuICogY29uc29sZS5sb2coYXNBcnJheShyZXN1bHQpKTsgICAvLyAtPiBbMiwgMywgNCwgNSwgNl1cbiAqXG4gKiByZXN1bHQgPSBhc0l0ZXJhdG9yKFsxLCAyLCAzLCA0LCA1XSk7XG4gKiBjb25zb2xlLmxvZyhhc0FycmF5KHJlc3VsdCkpOyAgIC8vIC0+IFsxLCAyLCAzLCA0LCA1XVxuICpcbiAqIHJlc3VsdCA9IGFzSXRlcmF0b3Ioe2E6IDEsIGI6IDJ9KTtcbiAqIGNvbnNvbGUubG9nKGFzQXJyYXkocmVzdWx0KSk7ICAgLy8gLT4gW3sgYTogMSB9LCB7IGI6IDIgfV1cbiAqIGBgYFxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwYXJhbSB7bW9kdWxlOnhkdWNlLkl0ZXJhYmxlfSBjb2xsZWN0aW9uIFRoZSBpbnB1dCBjb2xsZWN0aW9uLiBUaGUgb25seVxuICogICAgIHJlcXVpcmVtZW50IG9mIHRoaXMgY29sbGVjdGlvbiBpcyB0aGF0IGl0IGltcGxlbWVudCB0aGUgYGl0ZXJhYmxlYFxuICogICAgIHByb3RvY29sLiBTcGVjaWFsIHN1cHBvcnQgaXMgcHJvdmlkZWQgYnkgdGhlIGxpYnJhcnkgZm9yIG9iamVjdHMsIHNvIHRoZXlcbiAqICAgICBjYW4gYWxzbyBiZSB1c2VkLlxuICogQHBhcmFtIHttb2R1bGU6eGR1Y2UuVHJhbnNkdWNlckZ1bmN0aW9ufSBbeGZvcm1dIEEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIGEgdHJhbnNkdWNlclxuICogICAgIG9iamVjdCB0aGF0IGRlZmluZXMgdGhlIHRyYW5zZm9ybWF0aW9uIGJlaW5nIGRvbmUgdG8gdGhlIGlucHV0XG4gKiAgICAgY29sbGVjdGlvbidzIGVsZW1lbnRzLiBBbnkgb2YgdGhlIHRyYW5zZHVjZXJzIGluIHRoZVxuICogICAgIHtAbGluayBtb2R1bGU6dHJhbnNkdWNlcnN8dHJhbnNkdWNlcnN9IG1vZHVsZSBjYW4gcHJvZHVjZSBhIHN1aXRhYmxlXG4gKiAgICAgdHJhbnNkdWNlciBmdW5jdGlvbi4gSWYgdGhpcyBpc24ndCBwcmVzZW50LCB0aGUgaW5wdXQgY29sbGVjdGlvbiB3aWxsXG4gKiAgICAgc2ltcGx5IGJlIHJlZHVjZWQgaW50byBhbiBpdGVyYXRvciB3aXRob3V0IHRyYW5zZm9ybWF0aW9uLlxuICogQHJldHVybiB7bW9kdWxlOnhkdWNlLkl0ZXJhdG9yfSBBbiBpdGVyYXRvciBjb250YWluaW5nIGFsbCBvZiB0aGUgdHJhbnNmb3JtZWRcbiAqICAgICB2YWx1ZXMgZnJvbSB0aGUgaW5wdXQgY29sbGVjdGlvbiBlbGVtZW50cy5cbiAqL1xuZnVuY3Rpb24gYXNJdGVyYXRvcihjb2xsZWN0aW9uLCB4Zm9ybSkge1xuICByZXR1cm4geGZvcm0gPyB0cmFuc2R1Y2luZ0l0ZXJhdG9yKGNvbGxlY3Rpb24sIHhmb3JtKSA6IGl0ZXJhdG9yKGNvbGxlY3Rpb24pO1xufVxuXG4vKipcbiAqIFRyYW5zZm9ybXMgdGhlIGVsZW1lbnRzIG9mIHRoZSBpbnB1dCBjb2xsZWN0aW9uIGFuZCByZWR1Y2VzIHRoZW0gaW50byBhIG5ld1xuICogY29sbGVjdGlvbiBvZiB0aGUgc2FtZSB0eXBlLlxuICpcbiAqIFRoaXMgaXMgdGhlIGhpZ2hlc3QgbGV2ZWwgb2YgdGhlIHRocmVlIG1haW4gdHJhbnNkdWN0aW9uIGZ1bmN0aW9uc1xuICogKGBzZXF1ZW5jZWAsIGB7QGxpbmsgbW9kdWxlOnhkdWNlLmludG98aW50b31gLCBhbmRcbiAqIGB7QGxpbmsgbW9kdWxlOnhkdWNlLnRyYW5zZHVjZXx0cmFuc2R1Y2V9YCkuIEl0IGNyZWF0ZXMgYSBuZXcgY29sbGVjdGlvbiBvZlxuICogdGhlIHNhbWUgdHlwZSBhcyB0aGUgaW5wdXQgY29sbGVjdGlvbiBhbmQgcmVkdWNlcyB0aGUgdHJhbnNmb3JtZWQgZWxlbWVudHNcbiAqIGludG8gaXQuIEFkZGl0aW9uYWxseSwgdW5saWtlIGB7QGxpbmsgbW9kdWxlOnhkdWNlLmludG98aW50b31gIGFuZFxuICogYHtAbGluayBtb2R1bGU6eGR1Y2UudHJhbnNkdWNlfHRyYW5zZHVjZX1gLCB0aGlzIGZ1bmN0aW9uIGlzIGNhcGFibGUgb2ZcbiAqIHByb2R1Y2luZyBhbiBpdGVyYXRvciAoYXMgbG9uZyBhcyB0aGUgaW5wdXQgaXMgYW4gaXRlcmF0b3IpLlxuICpcbiAqIFRoZSBpbnB1dCBjb2xsZWN0aW9uIG11c3Qgbm90IG9ubHkgaW1wbGVtZW50IHRoZSBgaXRlcmF0b3JgIHByb3RvY29sIChhcyBpblxuICogdGhlIGxhc3QgdHdvIGZ1bmN0aW9ucykgYnV0IGFsc28gdGhlIGBpbml0YCwgYHJlc3VsdGAsIGFuZCBgc3RlcGAgdHJhbnNkdWNlclxuICogcHJvdG9jb2xzLiBTcGVjaWFsIHN1cHBvcnQgaXMgcHJvdmlkZWQgZm9yIGFycmF5cywgc3RyaW5ncywgb2JqZWN0cywgYW5kXG4gKiBpdGVyYXRvcnMsIHNvIHRoZXkgbmVlZCBub3QgaW1wbGVtZW50IGFueSBwcm90b2NvbC5cbiAqXG4gKiBUaGUgb2J2aW91cyBsaW1pdGF0aW9uIG9mIHRoaXMgZnVuY3Rpb24gaXMgdGhhdCB0aGUgdHlwZSBvZiBvdXRwdXQgY29sbGVjdGlvblxuICogY2Fubm90IGJlIGNob3Nlbi4gU2luY2UgaXQgaXMgYWx3YXlzIHRoZSBzYW1lIGFzIHRoZSBpbnB1dCBjb2xsZWN0aW9uLCB0aGlzXG4gKiBmdW5jdGlvbiBjYW5ub3QgYmUgdXNlZCB0byBjb252ZXJ0IGEgY29sbGVjdGlvbiBpbnRvIGEgZGlmZmVyZW50IHR5cGUuXG4gKlxuICogYGBgXG4gKiBpbXBvcnQgeyBzZXF1ZW5jZSB9IGZyb20gXCJAY2hhbmtvL3hkdWNlXCI7XG4gKiBpbXBvcnQgeyBtYXAgfSBmcm9tIFwiQGNoYW5rby90cmFuc2R1Y2Vyc1wiO1xuICpcbiAqIGNvbnN0IHhmb3JtID0gbWFwKHggPT4geCArIDEpO1xuICpcbiAqIGxldCByZXN1bHQgPSBzZXF1ZW5jZShbMSwgMiwgMywgNCwgNV0sIHhmb3JtKTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdCk7ICAgLy8gLT4gcmVzdWx0ID0gWzIsIDMsIDQsIDUsIDZdXG4gKlxuICogcmVzdWx0ID0gc2VxdWVuY2UoJzEyMzQ1JywgeGZvcm0pO1xuICogY29uc29sZS5sb2cocmVzdWx0KTsgICAvLyAtPiByZXN1bHQgPSAnMjM0NTYnXG4gKiBgYGBcbiAqXG4gKiBUaGVzZSBleGFtcGxlcyBhcmUgaWRlbnRpY2FsIHRvIHNvbWUgb2YgdGhlIGV4YW1wbGVzIGZyb20gdGhlIGBhc1hgXG4gKiBmdW5jdGlvbnMuIE90aGVyIGV4YW1wbGVzIGFyZSBub3QgcG9zc2libGUgd2l0aCBgc2VxdWVuY2VgIGJlY2F1c2UgdGhleSBoYXZlXG4gKiBkaWZmZXJlbnQgaW5wdXQgYW5kIG91dHB1dCBjb2xsZWN0aW9uIHR5cGVzLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwYXJhbSB7bW9kdWxlOnhkdWNlLlJlZHVjaWJsZUl0ZXJhYmxlfSBjb2xsZWN0aW9uIFRoZSBpbnB1dCBjb2xsZWN0aW9uLiBUaGlzXG4gKiAgICAgbXVzdCBpbXBsZW1lbnQgdGhlIGBpdGVyYXRvcmAsIGBpbml0YCwgYHJlc3VsdGAsIGFuZCBgc3RlcGAgcHJvdG9jb2xzLlxuICogICAgIFNwZWNpYWwgc3VwcG9ydCBpcyBwcm92aWRlZCBmb3IgYXJyYXlzLCBzdHJpbmdzLCBvYmplY3RzLCBhbmQgaXRlcmF0b3JzLFxuICogICAgIHNvIHRoZXkgZG8gbm90IGhhdmUgdG8gaW1wbGVtZW50IGFueSBwcm90b2NvbHMuXG4gKiBAcGFyYW0ge21vZHVsZTp4ZHVjZS5UcmFuc2R1Y2VyRnVuY3Rpb259IHhmb3JtIEEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIGEgdHJhbnNkdWNlclxuICogICAgIG9iamVjdCB0aGF0IGRlZmluZXMgdGhlIHRyYW5zZm9ybWF0aW9uIGJlaW5nIGRvbmUgdG8gdGhlIGlucHV0XG4gKiAgICAgY29sbGVjdGlvbidzIGVsZW1lbnRzLiBBbnkgb2YgdGhlIHRyYW5zZHVjZXJzIGluIHRoZVxuICogICAgIHtAbGluayBtb2R1bGU6eGR1Y2UudHJhbnNkdWNlcnN8dHJhbnNkdWNlcnN9IG1vZHVsZSBjYW4gcHJvZHVjZSBhXG4gKiAgICAgc3VpdGFibGUgdHJhbnNkdWNlciBmdW5jdGlvbi5cbiAqIEByZXR1cm4ge21vZHVsZTp4ZHVjZS5SZWR1Y2libGVJdGVyYWJsZX0gQSBjb2xsZWN0aW9uIG9mIHRoZSBzYW1lIHR5cGUgYXMgdGhlXG4gKiAgICAgaW5wdXQgY29sbGVjdGlvbiwgY29udGFpbmluZyBhbGwgb2YgdGhlIHRyYW5zZm9ybWVkIHZhbHVlcyBmcm9tIHRoZSBpbnB1dFxuICogICAgIGNvbGxlY3Rpb24gZWxlbWVudHMuXG4gKi9cbmZ1bmN0aW9uIHNlcXVlbmNlKGNvbGxlY3Rpb24sIHhmb3JtKSB7XG4gIHN3aXRjaCAodHJ1ZSkge1xuICAgIGNhc2UgaXNBcnJheShjb2xsZWN0aW9uKTpcbiAgICAgIHJldHVybiBhc0FycmF5KGNvbGxlY3Rpb24sIHhmb3JtKTtcbiAgICBjYXNlIGlzT2JqZWN0KGNvbGxlY3Rpb24pOlxuICAgICAgcmV0dXJuIGFzT2JqZWN0KGNvbGxlY3Rpb24sIHhmb3JtKTtcbiAgICBjYXNlIGlzU3RyaW5nKGNvbGxlY3Rpb24pOlxuICAgICAgcmV0dXJuIGFzU3RyaW5nKGNvbGxlY3Rpb24sIHhmb3JtKTtcbiAgICBjYXNlIGlzSW1wbGVtZW50ZWQoY29sbGVjdGlvbiwgXCJzdGVwXCIpOlxuICAgICAgcmV0dXJuIHRyYW5zZHVjZShjb2xsZWN0aW9uLCB4Zm9ybSwgY29sbGVjdGlvbik7XG4gICAgY2FzZSBpc0ltcGxlbWVudGVkKGNvbGxlY3Rpb24sIFwiaXRlcmF0b3JcIik6XG4gICAgICByZXR1cm4gYXNJdGVyYXRvcihjb2xsZWN0aW9uLCB4Zm9ybSk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IEVycm9yKGBDYW5ub3Qgc2VxdWVuY2UgY29sbGVjdGlvbjogJHtjb2xsZWN0aW9ufWApO1xuICB9XG59XG5cbi8qKlxuICogVHJhbnNmb3JtcyB0aGUgZWxlbWVudHMgb2YgdGhlIGlucHV0IGNvbGxlY3Rpb24gYW5kIHJlZHVjZXMgdGhlbSBpbnRvIHRoZVxuICogdGFyZ2V0IGNvbGxlY3Rpb24uXG4gKlxuICogVGhpcyBpcyBtdWNoIGxpa2UgYHtAbGluayBtb2R1bGU6eGR1Y2UudHJhbnNkdWNlfHRyYW5zZHVjZX1gLCBleGNlcHQgdGhhdFxuICogaW5zdGVhZCBvZiBleHBsaWNpdGx5IHByb3ZpZGluZyBhIHJlZHVjZXIgKGFuZCBwZXJoYXBzIGFuIGluaXRpYWxcbiAqIGNvbGxlY3Rpb24pLCB0aGUgdGFyZ2V0IGNvbGxlY3Rpb24gYWN0cyBhcyBhIHJlZHVjZXIgaXRzZWxmLiBUaGlzIHJlcXVpcmVzXG4gKiB0aGF0IHRoZSBjb2xsZWN0aW9uIGltcGxlbWVudCB0aGUgYGluaXRgLCBgcmVzdWx0YCwgYW5kIGBzdGVwYCB0cmFuc2R1Y2VyXG4gKiBwcm90b2NvbCBmdW5jdGlvbnMuXG4gKlxuICogSWYgbm8gdHJhbnNkdWNlciBmdW5jdGlvbiBpcyBwcm92aWRlZCwgdGhlIGlucHV0IGNvbGxlY3Rpb24gZWxlbWVudHMgYXJlXG4gKiByZWR1Y2VkIGludG8gdGhlIHRhcmdldCBjb2xsZWN0aW9uIHdpdGhvdXQgYmVpbmcgdHJhbnNmb3JtZWQuIFRoaXMgY2FuIGJlXG4gKiB1c2VkIHRvIGNvbnZlcnQgb25lIGtpbmQgb2YgY29sbGVjdGlvbiBpbnRvIGFub3RoZXIuXG4gKlxuICogYGBgXG4gKiBpbXBvcnQgeyBpbnRvIH0gZnJvbSBcIkBjaGFua28veGR1Y2VcIjtcbiAqIGltcG9ydCB7IG1hcCB9IGZyb20gXCJAY2hhbmtvL3RyYW5zZHVjZXJzXCI7XG4gKlxuICogY29uc3QgeGZvcm0gPSBtYXAoeCA9PiB4ICsgMSk7XG4gKlxuICogbGV0IHJlc3VsdCA9IGludG8oW10sIFsxLCAyLCAzLCA0LCA1XSwgeGZvcm0pO1xuICogY29uc29sZS5sb2cocmVzdWx0KTsgICAvLyAtPiBbMiwgMywgNCwgNSwgNl1cbiAqXG4gKiByZXN1bHQgPSBpbnRvKFwiXCIsIFsxLCAyLCAzLCA0LCA1XSwgeGZvcm0pO1xuICogY29uc29sZS5sb2cocmVzdWx0KTsgICAvLyAtPiBcIjIzNDU2XCJcbiAqXG4gKiByZXN1bHQgPSBpbnRvKFtdLCBcIjEyMzQ1XCIsIHhmb3JtKTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdCk7ICAgLy8gLT4gWzIsIDMsIDQsIDUsIDZdXG4gKlxuICogcmVzdWx0ID0gaW50byhcIlwiLCBcIjEyMzQ1XCIsIHhmb3JtKTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdCk7ICAgLy8gLT4gXCIyMzQ1NlwiXG4gKiBgYGBcbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcGFyYW0ge21vZHVsZTp4ZHVjZS5SZWR1Y2libGV9IHRhcmdldCBUaGUgY29sbGVjdGlvbiBpbnRvIHdoaWNoIGFsbCBvZiB0aGVcbiAqICAgICB0cmFuc2Zvcm1lZCBpbnB1dCBjb2xsZWN0aW9uIGVsZW1lbnRzIHdpbGwgYmUgcmVkdWNlZC4gVGhpcyBjb2xsZWN0aW9uXG4gKiAgICAgbXVzdCBpbXBsZW1lbnQgdGhlIGBpbml0YCwgYHJlc3VsdGAsIGFuZCBgc3RlcGAgcHJvdG9jb2wgZnVuY3Rpb25zIGZyb21cbiAqICAgICB0aGUgdHJhbnNkdWNlciBwcm90b2NvbC4gU3BlY2lhbCBzdXBwb3J0IGlzIHByb3ZpZGVkIGZvciBhcnJheXMsIHN0cmluZ3MsXG4gKiAgICAgYW5kIG9iamVjdHMsIHNvIHRoZXkgbmVlZCBub3QgaW1wbGVtZW50IHRoZSBwcm90b2NvbC5cbiAqIEBwYXJhbSB7bW9kdWxlOnhkdWNlLkl0ZXJhYmxlfSBjb2xsZWN0aW9uIFRoZSBpbnB1dCBjb2xsZWN0aW9uLiBUaGUgb25seVxuICogICAgIHJlcXVpcmVtZW50IG9mIHRoaXMgY29sbGVjdGlvbiBpcyB0aGF0IGl0IGltcGxlbWVudCB0aGUgYGl0ZXJhdG9yYFxuICogICAgIHByb3RvY29sLiBTcGVjaWFsIHN1cHBvcnQgaXMgcHJvdmlkZWQgYnkgdGhlIGxpYnJhcnkgZm9yIG9iamVjdHMsIHRvIHRoZXlcbiAqICAgICBjYW4gYWxzbyBiZSB1c2VkLlxuICogQHBhcmFtIHttb2R1bGU6eGR1Y2UuVHJhbnNkdWNlckZ1bmN0aW9ufSBbeGZvcm1dIEEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIGEgdHJhbnNkdWNlclxuICogICAgIG9iamVjdCB0aGF0IGRlZmluZXMgdGhlIHRyYW5zZm9ybWF0aW9uIGJlaW5nIGRvbmUgdG8gdGhlIGlucHV0XG4gKiAgICAgY29sbGVjdGlvbidzIGVsZW1lbnRzLiBBbnkgb2YgdGhlIHRyYW5zZHVjZXJzIGluIHRoZVxuICogICAgIHtAbGluayBtb2R1bGU6dHJhbnNkdWNlcnN8dHJhbnNkdWNlcnN9IG1ub2R1bGUgY2FuIHByb2R1Y2UgYSBzdWl0YWJsZVxuICogICAgIHRyYW5zZHVjZXIgZnVuY3Rpb24uIElmIHRoaXMgaXNuJ3QgcHJlc2VudCwgdGhlIGlucHV0IGNvbGxlY3Rpb24gd2lsbFxuICogICAgIHNpbXBseSBiZSByZWR1Y2VkIGludG8gdGhlIHRhcmdldCBjb2xsZWN0aW9uIHdpdGhvdXQgdHJhbnNmb3JtYXRpb24uXG4gKiBAcmV0dXJuIHttb2R1bGU6eGR1Y2UuUmVkdWNpYmxlfSBUaGUgYHRhcmdldGAgY29sbGVjdGlvbiwgd2l0aCBhbGwgb2YgdGhlXG4gKiAgICAgdHJhbmZvcm1lZCBpbnB1dCBjb2xsZWN0aW9uIGVsZW1lbnRzIHJlZHVjZWQgb250byBpdC5cbiAqL1xuZnVuY3Rpb24gaW50byh0YXJnZXQsIGNvbGxlY3Rpb24sIHhmb3JtKSB7XG4gIHN3aXRjaCAodHJ1ZSkge1xuICAgIGNhc2UgaXNBcnJheSh0YXJnZXQpOlxuICAgICAgcmV0dXJuIHRyYW5zZHVjZShjb2xsZWN0aW9uLCB4Zm9ybSwgQVJSQVlfUkVEVUNFUiwgdGFyZ2V0KTtcbiAgICBjYXNlIGlzT2JqZWN0KHRhcmdldCk6XG4gICAgICByZXR1cm4gdHJhbnNkdWNlKGNvbGxlY3Rpb24sIHhmb3JtLCBPQkpFQ1RfUkVEVUNFUiwgdGFyZ2V0KTtcbiAgICBjYXNlIGlzU3RyaW5nKHRhcmdldCk6XG4gICAgICByZXR1cm4gdHJhbnNkdWNlKGNvbGxlY3Rpb24sIHhmb3JtLCBTVFJJTkdfUkVEVUNFUiwgdGFyZ2V0KTtcbiAgICBjYXNlIGlzSW1wbGVtZW50ZWQodGFyZ2V0LCBcInN0ZXBcIik6XG4gICAgICByZXR1cm4gdHJhbnNkdWNlKGNvbGxlY3Rpb24sIHhmb3JtLCB0YXJnZXQsIHRhcmdldCk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IEVycm9yKGBDYW5ub3QgcmVkdWNlIGNvbGxlY3Rpb24gaW50byAke3RhcmdldH06ICR7Y29sbGVjdGlvbn1gKTtcbiAgfVxufVxuXG4vKipcbiAqIENvbXBvc2VzIHR3byBvciBtb3JlIHRyYW5zZHVjZXIgZnVuY3Rpb25zIGludG8gYSBzaW5nbGUgdHJhbnNkdWNlciBmdW5jdGlvbi5cbiAqXG4gKiBFYWNoIGZ1bmN0aW9uIHRoYXQgdGFrZXMgYSB0cmFuc2R1Y2VyIGZ1bmN0aW9uXG4gKiAoYHtAbGluayBtb2R1bGU6eGR1Y2Uuc2VxdWVuY2V8c2VxdWVuY2V9YCwgYHtAbGluayBtb2R1bGU6eGR1Y2UuaW50b3xpbnRvfWAsXG4gKiBldGMuKSBpcyBvbmx5IGNhcGFibGUgb2YgYWNjZXB0aW5nIG9uZSBvZiB0aGVtLiBJZiB0aGVyZSBpcyBhIG5lZWQgdG8gaGF2ZVxuICogc2V2ZXJhbCB0cmFuc2R1Y2VycyBjaGFpbmVkIHRvZ2V0aGVyLCB0aGVuIHVzZSBgY29tcG9zZWAgdG8gY3JlYXRlIGFcbiAqIHRyYW5zZHVjZXIgZnVuY3Rpb24gdGhhdCBkb2VzIHdoYXQgYWxsIG9mIHRoZW0gZG8uXG4gKlxuICogTk9URTogSW4gZnVuY3Rpb25hbCBwcm9ncmFtbWluZywgYSBjb21wb3NlIGZ1bmN0aW9uIGlzIGdlbmVyYWxseSBvcmRlcmVkIHNvXG4gKiB0aGF0IHRoZSBmaXJzdC1leGVjdXRlZCBmdW5jdGlvbiBpcyBsaXN0ZWQgbGFzdC4gVGhpcyBpcyBkb25lIGluIHRoZSBvcHBvc2l0ZVxuICogd2F5LCB3aXRoIHRoZSBmaXJzdCB0cmFuc2R1Y2VyIGV4ZWN1dGluZyBmaXJzdCwgZXRjLiBUaGlzIGlzIGEgbW9yZSBuYXR1cmFsXG4gKiBvcmRlcmluZyBmb3IgdHJhbnNkdWNlciBmdW5jdGlvbnMgYmVjYXVzZSB0aGVyZSBpcyBhIHZlcnkgcmVhbCBkaXJlY3Rpb25hbFxuICogcHVsbCBvZiBlbGVtZW50cyB0aHJvdWdoIGEgY2hhaW4gb2YgY29tcG9zZWQgdHJhbnNkdWNlciBmdW5jdGlvbnMuXG4gKlxuICogYGBgXG4gKiBpbXBvcnQgeyBjb21wb3NlLCBzZXF1ZW5jZSB9IGZyb20gXCJAY2hhbmtvL3hkdWNlXCI7XG4gKiBpbXBvcnQgeyBtYXAsIGZpbHRlciwgdGFrZSB9IGZyb20gXCJAY2hhbmtvL3RyYW5zZHVjZXJzXCI7XG4gKlxuICogY29uc3QgYWRkMSA9IHggPT4geCArIDE7XG4gKiBjb25zdCBvZGQgPSB4ID0+IHggJSAyICE9PSAwO1xuICpcbiAqIGNvbnN0IHhmb3JtID0gY29tcG9zZShtYXAoYWRkMSksIGZpbHRlcihvZGQpLCB0YWtlKDMpKTtcbiAqXG4gKiBjb25zdCByZXN1bHQgPSBzZXF1ZW5jZShbMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTBdLCB4Zm9ybSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQpOyAgIC8vIC0+IFszLCA1LCA3XTtcbiAqIGBgYFxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwYXJhbSB7Li4ubW9kdWxlOnhkdWNlLlRyYW5zZHVjZXJGdW5jdGlvbn0gZm5zIE9uZSBvciBtb3JlIGZ1bmN0aW9uIHRoYXQgZWFjaCBjcmVhdGVcbiAqICAgICBhIHRyYW5zZHVjZXIgb2JqZWN0IHRoYXQgZGVmaW5lcyB0aGUgdHJhbnNmb3JtYXRpb24gYmVpbmcgZG9uZSB0byBhXG4gKiAgICAgY29sbGVjdGlvbidzIGVsZW1lbnRzLiBBbnkgb2YgdGhlIHRyYW5zZHVjZXJzIGluIHRoZVxuICogICAgIHtAbGluayBtb2R1bGU6dHJhbnNkdWNlcnN8dHJhbnNkdWNlcnN9IG1vZHVsZSBjYW4gcHJvZHVjZSBhIHN1aXRhYmxlXG4gKiAgICAgdHJhbnNkdWNlciBmdW5jdGlvbi5cbiAqIEByZXR1cm4ge21vZHVsZTp4ZHVjZS5UcmFuc2R1Y2VyRnVuY3Rpb259IEEgdHJhbnNkdWNlciBmdW5jdGlvbiB0aGF0IHByb2R1Y2VzIGFcbiAqICAgICB0cmFuc2R1Y2VyIG9iamVjdCB0aGF0IHBlcmZvcm1zICphbGwqIG9mIHRoZSB0cmFuc2Zvcm1hdGlvbnMgb2YgdGhlXG4gKiAgICAgb2JqZWN0cyBwcm9kdWNlZCBieSB0aGUgaW5wdXQgdHJhbnNkdWNlciBmdW5jdGlvbnMuXG4gKi9cbmZ1bmN0aW9uIGNvbXBvc2UoLi4uZm5zKSB7XG4gIGNvbnN0IHJldmVyc2VkID0gZm5zLnJldmVyc2UoKTtcbiAgcmV0dXJuIHZhbHVlID0+IHJldmVyc2VkLnJlZHVjZSgoYWNjLCBmbikgPT4gZm4oYWNjKSwgdmFsdWUpO1xufVxuXG5leHBvcnQge1xuICB0cmFuc2R1Y2UsXG4gIHNlcXVlbmNlLFxuICBpbnRvLFxuICBhc0FycmF5LFxuICBhc09iamVjdCxcbiAgYXNTdHJpbmcsXG4gIGFzSXRlcmF0b3IsXG4gIGNvbXBvc2Vcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuLyoqXG4gKiBBIGJ1bmNoIG9mIHV0aWxpdHkgZnVuY3Rpb25zLiBUaGVzZSBhcmUgYWxsIHVzZWQgYnkgdGhlIGxpYnJhcnkgaXRzZWxmIGluXG4gKiBwbGFjZXMsIGJ1dCBtYW55IG9mIHRoZW0gYXJlIHN1aXRhYmxlIGZvciBnZW5lcmFsIHVzZSBhcyB3ZWxsLlxuICogXlxuICogQG1vZHVsZSB4ZHVjZS91dGlsc1xuICogQHByaXZhdGVcbiAqL1xuXG4vKipcbiAqIGBPYmplY3RgJ3MgYHRvU3RyaW5nYCBpcyBleHBsaWNpdGx5IHVzZWQgdGhyb3VnaG91dCBiZWNhdXNlIGl0IGNvdWxkIGJlXG4gKiByZWRlZmluZWQgaW4gYW55IHN1YnR5cGUgb2YgYE9iamVjdGAuXG4gKlxuICogQGZ1bmN0aW9uIHRvU3RyaW5nXG4gKiBAcHJpdmF0ZVxuICovXG5jb25zdCB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGEgdmFsdWUgaXMgYSBmdW5jdGlvbi5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcGFyYW0geyp9IHggVGhlIHZhbHVlIGJlaW5nIHRlc3RlZCB0byBzZWUgaWYgaXQgaXMgYSBmdW5jdGlvbi5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IEVpdGhlciBgdHJ1ZWAgaWYgdGhlIHRlc3QgdmFsdWUgaXMgYSBmdW5jdGlvbiBvciBgZmFsc2VgIGlmXG4gKiAgICAgaXQgaXMgbm90LlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih4KSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHgpID09PSBcIltvYmplY3QgRnVuY3Rpb25dXCI7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGEgdmFsdWUgaXMgYSBnZW5lcmF0b3IgZnVuY3Rpb24uXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHBhcmFtIHsqfSB4IFRoZSB2YWx1ZSBiZWluZyB0ZXN0ZWQgdG8gc2VlIGlmIGl0IGlzIGEgZ2VuZXJhdG9yIGZ1bmN0aW9uLlxuICogQHJldHVybiB7Ym9vbGVhbn0gRWl0aGVyIGB0cnVlYCBpZiB0aGUgdGVzdCB2YWx1ZSBpcyBhIGdlbmVyYXRvciBmdW5jdGlvbiBvclxuICogICAgIGBmYWxzZWAgaWYgaXQgaXMgbm90LlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaXNHZW5lcmF0b3JGdW5jdGlvbih4KSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHgpID09PSBcIltvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dXCI7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGEgdmFsdWUgaXMgYSBwbGFpbiBvYmplY3QuXG4gKlxuICogVGhpcyBmdW5jdGlvbiByZXR1cm5zIGBmYWxzZWAgaWYgdGhlIHZhbHVlIGlzIGFueSBvdGhlciBzb3J0IG9mIGJ1aWx0LWluXG4gKiBvYmplY3QgKHN1Y2ggYXMgYW4gYXJyYXkgb3IgYSBzdHJpbmcpLiBJdCBhbHNvIHJldHVybnMgYGZhbHNlYCBmb3IgYW55IG9iamVjdFxuICogdGhhdCBpcyBjcmVhdGVkIGJ5IGEgY29uc3RydWN0b3IgdGhhdCBpcyBub3QgYE9iamVjdGAncyBjb25zdHJ1Y3RvciwgbWVhbmluZ1xuICogdGhhdCBcImluc3RhbmNlc1wiIG9mIGN1c3RvbSBcImNsYXNzZXNcIiB3aWxsIHJldHVybiBgZmFsc2VgLiBUaGVyZWZvcmUgaXQncyBvbmx5XG4gKiBnb2luZyB0byByZXR1cm4gYHRydWVgIGZvciBsaXRlcmFsIG9iamVjdHMgb3IgdGhvc2UgY3JlYXRlZCB3aXRoXG4gKiBgT2JqZWN0LmNyZWF0ZSgpYC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcGFyYW0geyp9IHggVGhlIHZhbHVlIGJlaW5nIHRlc3RlZCB0byBzZWUgaWYgaXQgaXMgYSBwbGFpbiBvYmplY3QuXG4gKiBAcmV0dXJuIHtib29sZWFufSBFaXRoZXIgYHRydWVgIGlmIHRoZSB0ZXN0IHZhbHVlIGlzIGEgcGxhaW4gb2JqZWN0IG9yXG4gKiAgICAgYGZhbHNlYCBpZiBpdCBpcyBub3QuXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHgpIHtcbiAgLy8gVGhpcyBjaGVjayBleGNsdWRlcyBidWlsdC1pbiBub24tT2JqZWN0IG9iamVjdHMgKHN1Y2ggYXMgQXJyYXkgYW5kIFN0cmluZykuXG4gIC8vIEl0IGFsc28gZXhjbHVkZXMgb2JqZWN0cyBjcmVhdGVkIGZyb20gRVMyMDE1IGNsYXNzZXMsIGJ1dCBpdCBkb2VzIG5vdFxuICAvLyBleGNsdWRlIG9iamVjdHMgY3JlYXRlZCB3aXRoIGBuZXdgIG9uIGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyAodGhhdCBoYXBwZW5zXG4gIC8vIGJlbG93KS5cbiAgaWYgKHRvU3RyaW5nLmNhbGwoeCkgIT09IFwiW29iamVjdCBPYmplY3RdXCIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBQcm90b3R5cGUtbGVzcyBvYmplY3RzIChjcmVhdGVkIHdpdGggYE9iamVjdC5jcmVhdGUobnVsbCkpYCBwYXNzXG4gIGNvbnN0IHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHgpO1xuICBpZiAocHJvdG8gPT09IG51bGwpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8vIENoZWNrIHRvIHNlZSB3aGV0aGVyIHRoZSBjb25zdHJ1Y3RvciBvZiB0aGUgdGVzdGVkIG9iamVjdCBpcyB0aGUgT2JqZWN0XG4gIC8vIGNvbnN0cnVjdG9yLiBUaGlzIGlzIHRoZSBvbmx5IGNvbnN0cnVjdG9yIHRoYXQgcHJvZHVjZXMgYSBcInBsYWluXCIgb2JqZWN0LlxuICBjb25zdCBjdG9yID1cbiAgICBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocHJvdG8sIFwiY29uc3RydWN0b3JcIikgJiZcbiAgICBwcm90by5jb25zdHJ1Y3RvcjtcbiAgcmV0dXJuIHR5cGVvZiBjdG9yID09PSBcImZ1bmN0aW9uXCIgJiYgY3RvciA9PT0gT2JqZWN0O1xufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhIHZhbHVlIGlzIGEgbnVtYmVyLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gd2lsbCByZXR1cm4gYHRydWVgIGZvciBhbnkgbnVtYmVyIGxpdGVyYWwgb3IgaW5zdGFuY2Ugb2ZcbiAqIGBOdW1iZXJgIGV4Y2VwdCBmb3IgYEluZmluaXR5YCBvciBgTmFOYC4gSXQgd2lsbCByZXR1cm4gYGZhbHNlYCBmb3Igc3RyaW5nc1xuICogdGhhdCBoYXBwZW4gdG8gYWxzbyBiZSBudW1iZXJzOyB0aGUgdmFsdWUgbXVzdCBiZSBhbiBhY3R1YWwgYE51bWJlcmAgaW5zdGFuY2VcbiAqIG9yIG51bWJlciBsaXRlcmFsIHRvIHJldHVybiBgdHJ1ZWAuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHBhcmFtIHsqfSB4IFRoZSB2YWx1ZSBiZWluZyB0ZXN0ZWQgdG8gc2VlIGlmIGl0IGlzIGEgbnVtYmVyLlxuICogQHJldHVybiB7Ym9vbGVhbn0gRWl0aGVyIGB0cnVlYCBpZiB0aGUgdGVzdCB2YWx1ZSBpcyBhIGZpbml0ZSBudW1iZXIgKG5vdFxuICogICAgIGluY2x1ZGluZyBzdHJpbmcgcmVwcmVzZW50YXRpb25zIG9mIG51bWJlcnMpIG9yIGBmYWxzZWAgaWYgaXQgaXMgbm90LlxuICovXG5mdW5jdGlvbiBpc051bWJlcih4KSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHgpID09PSBcIltvYmplY3QgTnVtYmVyXVwiICYmIGlzRmluaXRlKHgpO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhIHZhbHVlIGlzIGEgc3RyaW5nLlxuICpcbiAqIExpdGVyYWwgc3RyaW5ncyB3aWxsIHJldHVybiBgdHJ1ZWAsIGFzIHdpbGwgaW5zdGFuY2VzIG9mIHRoZSBgU3RyaW5nYCBvYmplY3QuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHBhcmFtIHsqfSB4IFRoZSB2YWx1ZSBiZWluZyB0ZXN0ZWQgdG8gc2VlIGlmIGl0IGlzIGEgc3RyaW5nLlxuICogQHJldHVybiB7Ym9vbGVhbn0gRWl0aGVyIGB0cnVlYCBpZiB0aGUgdGVzdCB2YWx1ZSBpcyBhIHN0cmluZyBvciBgZmFsc2VgIGlmXG4gKiAgICBpdCBpcyBub3QuXG4gKi9cbmZ1bmN0aW9uIGlzU3RyaW5nKHgpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoeCkgPT09IFwiW29iamVjdCBTdHJpbmddXCI7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGEgdmFsdWUgaXMgYW4gYXJyYXkuXG4gKlxuICogVGhpcyBmdW5jdGlvbiBtZXJlbHkgZGVsZWdhdGVzIHRvIGBBcnJheS5pc0FycmF5YC4gSXQgaXMgcHJvdmlkZWQgZm9yXG4gKiBjb25zaXN0ZW5jeSBpbiBjYWxsaW5nIHN0eWxlIG9ubHkuXG4gKlxuICogQGZ1bmN0aW9uIGlzQXJyYXlcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwYXJhbSB7Kn0geCBUaGUgdmFsdWUgYmVpbmcgdGVzdGVkIHRvIHNlZSBpZiBpdCBpcyBhbiBhcnJheS5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IEVpdGhlciBgdHJ1ZWAgaWYgdGhlIHRlc3QgdmFsdWUgaXMgYW4gYXJyYXkgb3IgYGZhbHNlYCBpZlxuICogICAgIGl0IGlzIG5vdC5cbiAqL1xuY29uc3QgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5cbmV4cG9ydCB7XG4gIGlzRnVuY3Rpb24sXG4gIGlzR2VuZXJhdG9yRnVuY3Rpb24sXG4gIGlzT2JqZWN0LFxuICBpc051bWJlcixcbiAgaXNTdHJpbmcsXG4gIGlzQXJyYXlcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9