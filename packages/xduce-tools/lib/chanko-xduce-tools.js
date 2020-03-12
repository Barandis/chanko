(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["tools"] = factory();
	else
		root["tools"] = factory();
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


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b29scy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vdG9vbHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9vbHMvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9vbHMvLi9zcmMvbW9kdWxlcy9pdGVyYXRpb24uanMiLCJ3ZWJwYWNrOi8vdG9vbHMvLi9zcmMvbW9kdWxlcy9wcm90b2NvbC5qcyIsIndlYnBhY2s6Ly90b29scy8uL3NyYy9tb2R1bGVzL3JlZHVjdGlvbi5qcyIsIndlYnBhY2s6Ly90b29scy8uL3NyYy9tb2R1bGVzL3V0aWxzLmpzIl0sIm5hbWVzIjpbIm9iamVjdEl0ZXJhdG9yIiwib2JqIiwic29ydEZuIiwia2V5cyIsIk9iamVjdCIsInNvcnQiLCJpbmRleCIsImxlbmd0aCIsImsiLCJmdW5jdGlvbkl0ZXJhdG9yIiwiZm4iLCJjdXJyZW50IiwiaXRlcmF0b3IiLCJ2YWx1ZSIsImlzRnVuY3Rpb24iLCJTeW1ib2wiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiaXNPYmplY3QiLCJpc0l0ZXJhYmxlIiwiaXNJbXBsZW1lbnRlZCIsInByb3RvY29scyIsImNyZWF0ZSIsImluaXQiLCJmb3IiLCJzdGVwIiwicmVzdWx0IiwicmVkdWNlZCIsInByb3RvY29sIiwiYXN5bmNJdGVyYXRvciIsImdldE93blByb3BlcnR5U3ltYm9scyIsImluY2x1ZGVzIiwiY29sbGVjdGlvbiIsInAiLCJpc1N0cmluZyIsImlzQXJyYXkiLCJFcnJvciIsImFjYyIsImlucHV0IiwicHVzaCIsIm1heCIsInJlZHVjZSIsImEiLCJiIiwiTWF0aCIsInRvUmVkdWNlciIsImZyZWV6ZSIsIkFSUkFZX1JFRFVDRVIiLCJPQkpFQ1RfUkVEVUNFUiIsIlNUUklOR19SRURVQ0VSIiwidG9UcmFuc2R1Y2VyIiwieGZvcm0iLCJ0b0Z1bmN0aW9uIiwicmVkdWNlciIsInIiLCJiaW5kIiwiY29tcGxldGUiLCJ1bmNvbXBsZXRlIiwiaXNDb21wbGV0ZWQiLCJlbnN1cmVDb21wbGV0ZWQiLCJlbnN1cmVVbmNvbXBsZXRlZCIsIml0ZXIiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJuZXh0IiwiZG9uZSIsInRvU3RyaW5nIiwicHJvdG90eXBlIiwieCIsImNhbGwiLCJwcm90byIsImdldFByb3RvdHlwZU9mIiwiY3RvciIsImhhc093blByb3BlcnR5IiwiaXNOdW1iZXIiLCJpc0Zpbml0ZSIsIkFycmF5Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7O0FBTUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrUEE7QUFDQTtBQUNBO0FBV0E7QUFTQTs7Ozs7Ozs7O0FBU0E7Ozs7Ozs7Ozs7QUFVQTs7Ozs7Ozs7O0FBU0E7Ozs7Ozs7Ozs7O0FBV0E7Ozs7Ozs7OztBQVNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQTs7Ozs7Ozs7Ozs7O0FBWUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkE7Ozs7Ozs7Ozs7Ozs7QUFhQTs7Ozs7Ozs7QUFRQTs7Ozs7Ozs7Ozs7QUFXQTs7Ozs7Ozs7Ozs7QUFXQTs7Ozs7Ozs7Ozs7Ozs7O0FBZUE7Ozs7Ozs7OztBQVNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQkE7Ozs7Ozs7Ozs7QUFVQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoZUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7O0FBT0E7Ozs7OztBQU9BO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUFhQSxTQUFTQSxjQUFULENBQXdCQyxHQUF4QixFQUE2QkMsTUFBN0IsRUFBcUM7QUFDbkMsU0FBUSxhQUFZO0FBQ2xCLFVBQU1DLElBQUksR0FDUixPQUFPRCxNQUFQLEtBQWtCLFVBQWxCLEdBQ0lFLE1BQU0sQ0FBQ0QsSUFBUCxDQUFZRixHQUFaLEVBQWlCSSxJQUFqQixDQUFzQkgsTUFBdEIsQ0FESixHQUVJRSxNQUFNLENBQUNELElBQVAsQ0FBWUYsR0FBWixDQUhOO0FBSUEsUUFBSUssS0FBSyxHQUFHLENBQVo7O0FBRUEsV0FBT0EsS0FBSyxHQUFHSCxJQUFJLENBQUNJLE1BQXBCLEVBQTRCO0FBQzFCLFlBQU1DLENBQUMsR0FBR0wsSUFBSSxDQUFDRyxLQUFLLEVBQU4sQ0FBZDtBQUNBLFlBQU07QUFBRSxTQUFDRSxDQUFELEdBQUtQLEdBQUcsQ0FBQ08sQ0FBRDtBQUFWLE9BQU47QUFDRDtBQUNGLEdBWE0sRUFBUDtBQVlEO0FBRUQ7Ozs7Ozs7Ozs7OztBQVVBLFNBQVNDLGdCQUFULENBQTBCQyxFQUExQixFQUE4QjtBQUM1QixTQUFRLGFBQVk7QUFDbEIsUUFBSUMsT0FBSjtBQUNBLFFBQUlMLEtBQUssR0FBRyxDQUFaOztBQUVBLGFBQVM7QUFDUEssYUFBTyxHQUFHRCxFQUFFLENBQUNKLEtBQUssRUFBTixFQUFVSyxPQUFWLENBQVo7O0FBQ0EsVUFBSSxPQUFPQSxPQUFQLEtBQW1CLFdBQXZCLEVBQW9DO0FBQ2xDO0FBQ0Q7O0FBQ0QsWUFBTUEsT0FBTjtBQUNEO0FBQ0YsR0FYTSxFQUFQO0FBWUQ7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2RkEsU0FBU0MsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUJYLE1BQU0sR0FBRyxJQUFsQyxFQUF3QztBQUN0QyxVQUFRLElBQVI7QUFDRSxTQUFLWSxnRUFBVSxDQUFDRCxLQUFLLENBQUNFLE1BQU0sQ0FBQ0gsUUFBUixDQUFOLENBQWY7QUFDQSxTQUFLSSx5RUFBbUIsQ0FBQ0gsS0FBSyxDQUFDRSxNQUFNLENBQUNILFFBQVIsQ0FBTixDQUF4QjtBQUNFLGFBQU9DLEtBQUssQ0FBQ0UsTUFBTSxDQUFDSCxRQUFSLENBQUwsRUFBUDs7QUFDRixTQUFLRSxnRUFBVSxDQUFDRCxLQUFELENBQWY7QUFDRSxhQUFPSixnQkFBZ0IsQ0FBQ0ksS0FBRCxDQUF2Qjs7QUFDRixTQUFLSSw4REFBUSxDQUFDSixLQUFELENBQWI7QUFDRSxhQUFPYixjQUFjLENBQUNhLEtBQUQsRUFBUVgsTUFBUixDQUFyQjs7QUFDRjtBQUNFLGFBQU8sSUFBUDtBQVRKO0FBV0Q7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlQSxTQUFTZ0IsVUFBVCxDQUFvQkwsS0FBcEIsRUFBMkI7QUFDekIsU0FBT00sc0VBQWEsQ0FBQ04sS0FBRCxFQUFRLFVBQVIsQ0FBYixJQUFvQ0ksOERBQVEsQ0FBQ0osS0FBRCxDQUFuRDtBQUNEOzs7Ozs7Ozs7Ozs7OztBQ2xNRDtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7O0FBT0E7Ozs7Ozs7Ozs7Ozs7O0FBZUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRCQTs7Ozs7OztBQU1BLE1BQU1PLFNBQVMsR0FBR2hCLE1BQU0sQ0FBQ2lCLE1BQVAsQ0FBYyxJQUFkLEVBQW9CO0FBQ3BDQyxNQUFJLEVBQUU7QUFDSlQsU0FBSyxFQUFFRSxNQUFNLENBQUNRLEdBQVAsQ0FBVyxpQkFBWDtBQURILEdBRDhCO0FBSXBDQyxNQUFJLEVBQUU7QUFDSlgsU0FBSyxFQUFFRSxNQUFNLENBQUNRLEdBQVAsQ0FBVyxpQkFBWDtBQURILEdBSjhCO0FBT3BDRSxRQUFNLEVBQUU7QUFDTlosU0FBSyxFQUFFRSxNQUFNLENBQUNRLEdBQVAsQ0FBVyxtQkFBWDtBQURELEdBUDRCO0FBVXBDRyxTQUFPLEVBQUU7QUFDUGIsU0FBSyxFQUFFRSxNQUFNLENBQUNRLEdBQVAsQ0FBVyxvQkFBWDtBQURBLEdBVjJCO0FBYXBDVixPQUFLLEVBQUU7QUFDTEEsU0FBSyxFQUFFRSxNQUFNLENBQUNRLEdBQVAsQ0FBVyxrQkFBWDtBQURGO0FBYjZCLENBQXBCLENBQWxCOztBQWtCQSxTQUFTSixhQUFULENBQXVCbEIsR0FBdkIsRUFBNEIwQixRQUE1QixFQUFzQztBQUNwQyxNQUFJMUIsR0FBRyxJQUFJLElBQVgsRUFBaUI7QUFDZixXQUFPLEtBQVA7QUFDRDs7QUFFRCxVQUFRMEIsUUFBUjtBQUNFLFNBQUssVUFBTDtBQUNFLGFBQ0ViLGdFQUFVLENBQUNiLEdBQUcsQ0FBQ2MsTUFBTSxDQUFDSCxRQUFSLENBQUosQ0FBVixJQUNBSSx5RUFBbUIsQ0FBQ2YsR0FBRyxDQUFDYyxNQUFNLENBQUNILFFBQVIsQ0FBSixDQUZyQjs7QUFJRixTQUFLLGVBQUw7QUFDRSxhQUFPSSx5RUFBbUIsQ0FBQ2YsR0FBRyxDQUFDYyxNQUFNLENBQUNhLGFBQVIsQ0FBSixDQUExQjs7QUFDRixTQUFLLFNBQUw7QUFDQSxTQUFLLE9BQUw7QUFDRSxhQUFPeEIsTUFBTSxDQUFDeUIscUJBQVAsQ0FBNkI1QixHQUE3QixFQUFrQzZCLFFBQWxDLENBQTJDVixTQUFTLENBQUNPLFFBQUQsQ0FBcEQsQ0FBUDs7QUFDRjtBQUNFLGFBQU9iLGdFQUFVLENBQUNiLEdBQUcsQ0FBQ21CLFNBQVMsQ0FBQ08sUUFBRCxDQUFWLENBQUosQ0FBakI7QUFaSjtBQWNEOzs7Ozs7Ozs7Ozs7OztBQy9GRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7O0FBT0E7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkEsU0FBU0wsSUFBVCxDQUFjUyxVQUFkLEVBQTBCO0FBQ3hCLFVBQVEsSUFBUjtBQUNFLFNBQUtaLHNFQUFhLENBQUNZLFVBQUQsRUFBYSxNQUFiLENBQWxCO0FBQ0UsYUFBT0EsVUFBVSxDQUFDQywwREFBQyxDQUFDVixJQUFILENBQWpCOztBQUNGLFNBQUtXLDhEQUFRLENBQUNGLFVBQUQsQ0FBYjtBQUNFLGFBQU8sTUFBTSxFQUFiOztBQUNGLFNBQUtHLDZEQUFPLENBQUNILFVBQUQsQ0FBWjtBQUNFLGFBQU8sTUFBTSxFQUFiOztBQUNGLFNBQUtkLDhEQUFRLENBQUNjLFVBQUQsQ0FBYjtBQUNFLGFBQU8sT0FBTyxFQUFQLENBQVA7O0FBQ0YsU0FBS2pCLGdFQUFVLENBQUNpQixVQUFELENBQWY7QUFDRSxhQUFPLE1BQU07QUFDWCxjQUFNSSxLQUFLLENBQUMsb0JBQUQsQ0FBWDtBQUNELE9BRkQ7O0FBR0Y7QUFDRSxhQUFPLElBQVA7QUFkSjtBQWdCRDtBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQkEsU0FBU1gsSUFBVCxDQUFjTyxVQUFkLEVBQTBCO0FBQ3hCLFVBQVEsSUFBUjtBQUNFLFNBQUtaLHNFQUFhLENBQUNZLFVBQUQsRUFBYSxNQUFiLENBQWxCO0FBQ0UsYUFBT0EsVUFBVSxDQUFDQywwREFBQyxDQUFDUixJQUFILENBQWpCOztBQUVGLFNBQUtTLDhEQUFRLENBQUNGLFVBQUQsQ0FBYjtBQUNFLGFBQU8sQ0FBQ0ssR0FBRCxFQUFNQyxLQUFOLEtBQWdCO0FBQ3JCLGNBQU14QixLQUFLLEdBQUdJLDhEQUFRLENBQUNvQixLQUFELENBQVIsR0FBa0JBLEtBQUssQ0FBQ2pDLE1BQU0sQ0FBQ0QsSUFBUCxDQUFZa0MsS0FBWixFQUFtQixDQUFuQixDQUFELENBQXZCLEdBQWlEQSxLQUEvRDtBQUNBLGVBQU9ELEdBQUcsR0FBR3ZCLEtBQWI7QUFDRCxPQUhEOztBQUtGLFNBQUtxQiw2REFBTyxDQUFDSCxVQUFELENBQVo7QUFDRSxhQUFPLENBQUNLLEdBQUQsRUFBTUMsS0FBTixLQUFnQjtBQUNyQkQsV0FBRyxDQUFDRSxJQUFKLENBQVNELEtBQVQ7QUFDQSxlQUFPRCxHQUFQO0FBQ0QsT0FIRDs7QUFLRixTQUFLbkIsOERBQVEsQ0FBQ2MsVUFBRCxDQUFiO0FBQ0UsYUFBTyxDQUFDSyxHQUFELEVBQU1DLEtBQU4sS0FBZ0I7QUFDckIsWUFBSXhCLEtBQUssR0FBR3dCLEtBQVo7O0FBRUEsWUFBSSxDQUFDcEIsOERBQVEsQ0FBQ29CLEtBQUQsQ0FBYixFQUFzQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQSxnQkFBTUUsR0FBRyxHQUFHbkMsTUFBTSxDQUFDRCxJQUFQLENBQVlpQyxHQUFaLEVBQWlCSSxNQUFqQixDQUF3QixDQUFDQyxDQUFELEVBQUlDLENBQUosS0FBVUMsSUFBSSxDQUFDSixHQUFMLENBQVNFLENBQVQsRUFBWUMsQ0FBWixDQUFsQyxFQUFrRCxDQUFDLENBQW5ELENBQVo7QUFDQTdCLGVBQUssR0FBRztBQUFFLGFBQUMwQixHQUFHLEdBQUcsQ0FBUCxHQUFXRjtBQUFiLFdBQVI7QUFDRDs7QUFFRCxjQUFNN0IsQ0FBQyxHQUFHSixNQUFNLENBQUNELElBQVAsQ0FBWVUsS0FBWixFQUFtQixDQUFuQixDQUFWO0FBQ0F1QixXQUFHLENBQUM1QixDQUFELENBQUgsR0FBU0ssS0FBSyxDQUFDTCxDQUFELENBQWQ7QUFDQSxlQUFPNEIsR0FBUDtBQUNELE9BZEQ7O0FBZ0JGLFNBQUt0QixnRUFBVSxDQUFDaUIsVUFBRCxDQUFmO0FBQ0UsYUFBTyxDQUFDSyxHQUFELEVBQU1DLEtBQU4sS0FBZ0JOLFVBQVUsQ0FBQ0ssR0FBRCxFQUFNQyxLQUFOLENBQWpDOztBQUVGO0FBQ0UsYUFBTyxJQUFQO0FBckNKO0FBdUNEO0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQSxTQUFTWixNQUFULENBQWdCTSxVQUFoQixFQUE0QjtBQUMxQixVQUFRLElBQVI7QUFDRSxTQUFLWixzRUFBYSxDQUFDWSxVQUFELEVBQWEsUUFBYixDQUFsQjtBQUNFLGFBQU9BLFVBQVUsQ0FBQ0MsMERBQUMsQ0FBQ1AsTUFBSCxDQUFqQjs7QUFDRixTQUFLUSw4REFBUSxDQUFDRixVQUFELENBQWI7QUFDQSxTQUFLRyw2REFBTyxDQUFDSCxVQUFELENBQVo7QUFDQSxTQUFLZCw4REFBUSxDQUFDYyxVQUFELENBQWI7QUFDQSxTQUFLakIsZ0VBQVUsQ0FBQ2lCLFVBQUQsQ0FBZjtBQUNFLGFBQU9sQixLQUFLLElBQUlBLEtBQWhCOztBQUNGO0FBQ0UsYUFBTyxJQUFQO0FBVEo7QUFXRDtBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4Q0EsU0FBUytCLFNBQVQsQ0FBbUJiLFVBQW5CLEVBQStCO0FBQzdCLFNBQU8zQixNQUFNLENBQUN5QyxNQUFQLENBQWM7QUFDbkIsS0FBQ2IsMERBQUMsQ0FBQ1YsSUFBSCxHQUFVQSxJQUFJLENBQUNTLFVBQUQsQ0FESztBQUVuQixLQUFDQywwREFBQyxDQUFDUixJQUFILEdBQVVBLElBQUksQ0FBQ08sVUFBRCxDQUZLO0FBR25CLEtBQUNDLDBEQUFDLENBQUNQLE1BQUgsR0FBWUEsTUFBTSxDQUFDTSxVQUFEO0FBSEMsR0FBZCxDQUFQO0FBS0Q7QUFFRDs7Ozs7Ozs7QUFNQSxNQUFNZSxhQUFhLEdBQUdGLFNBQVMsQ0FBQyxFQUFELENBQS9CO0FBRUE7Ozs7Ozs7QUFNQSxNQUFNRyxjQUFjLEdBQUdILFNBQVMsQ0FBQyxFQUFELENBQWhDO0FBRUE7Ozs7Ozs7QUFNQSxNQUFNSSxjQUFjLEdBQUdKLFNBQVMsQ0FBQyxFQUFELENBQWhDO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4QkEsU0FBU0ssWUFBVCxDQUFzQnZDLEVBQXRCLEVBQTBCd0MsS0FBMUIsRUFBaUM7QUFDL0IsU0FBTztBQUNMLEtBQUNsQiwwREFBQyxDQUFDVixJQUFILElBQVc7QUFDVCxhQUFPNEIsS0FBSyxDQUFDbEIsMERBQUMsQ0FBQ1YsSUFBSCxDQUFMLEVBQVA7QUFDRCxLQUhJOztBQUtMLEtBQUNVLDBEQUFDLENBQUNSLElBQUgsR0FBVWQsRUFMTDs7QUFPTCxLQUFDc0IsMERBQUMsQ0FBQ1AsTUFBSCxFQUFXWixLQUFYLEVBQWtCO0FBQ2hCLGFBQU9xQyxLQUFLLENBQUNsQiwwREFBQyxDQUFDUCxNQUFILENBQUwsQ0FBZ0JaLEtBQWhCLENBQVA7QUFDRDs7QUFUSSxHQUFQO0FBV0Q7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBCQSxTQUFTc0MsVUFBVCxDQUFvQkQsS0FBcEIsRUFBMkJFLE9BQTNCLEVBQW9DO0FBQ2xDLFFBQU1DLENBQUMsR0FBRyxPQUFPRCxPQUFQLEtBQW1CLFVBQW5CLEdBQWdDUixTQUFTLENBQUNRLE9BQUQsQ0FBekMsR0FBcURBLE9BQS9EO0FBQ0EsUUFBTTNCLE1BQU0sR0FBR3lCLEtBQUssQ0FBQ0csQ0FBRCxDQUFwQjtBQUNBLFNBQU81QixNQUFNLENBQUNPLDBEQUFDLENBQUNSLElBQUgsQ0FBTixDQUFlOEIsSUFBZixDQUFvQjdCLE1BQXBCLENBQVA7QUFDRDtBQUVEOzs7Ozs7Ozs7Ozs7Ozs7QUFhQSxTQUFTOEIsUUFBVCxDQUFrQjFDLEtBQWxCLEVBQXlCO0FBQ3ZCLFNBQU87QUFDTCxLQUFDbUIsMERBQUMsQ0FBQ04sT0FBSCxHQUFhLElBRFI7QUFFTCxLQUFDTSwwREFBQyxDQUFDbkIsS0FBSCxHQUFXQTtBQUZOLEdBQVA7QUFJRDtBQUVEOzs7Ozs7Ozs7Ozs7OztBQVlBLFNBQVMyQyxVQUFULENBQW9CM0MsS0FBcEIsRUFBMkI7QUFDekIsU0FBT0EsS0FBUCxhQUFPQSxLQUFQLHVCQUFPQSxLQUFLLENBQUdtQiwwREFBQyxDQUFDbkIsS0FBTCxDQUFaO0FBQ0Q7QUFFRDs7Ozs7Ozs7OztBQVFBLFNBQVM0QyxXQUFULENBQXFCNUMsS0FBckIsRUFBNEI7QUFDMUIsU0FBTyxDQUFDLEVBQUNBLEtBQUQsYUFBQ0EsS0FBRCx1QkFBQ0EsS0FBSyxDQUFHbUIsMERBQUMsQ0FBQ04sT0FBTCxDQUFOLENBQVI7QUFDRDtBQUVEOzs7Ozs7Ozs7Ozs7Ozs7QUFhQSxTQUFTZ0MsZUFBVCxDQUF5QjdDLEtBQXpCLEVBQWdDO0FBQzlCLFNBQU80QyxXQUFXLENBQUM1QyxLQUFELENBQVgsR0FBcUJBLEtBQXJCLEdBQTZCMEMsUUFBUSxDQUFDMUMsS0FBRCxDQUE1QztBQUNEO0FBRUQ7Ozs7Ozs7Ozs7Ozs7O0FBWUEsU0FBUzhDLGlCQUFULENBQTJCOUMsS0FBM0IsRUFBa0M7QUFDaEMsU0FBTzRDLFdBQVcsQ0FBQzVDLEtBQUQsQ0FBWCxHQUFxQjJDLFVBQVUsQ0FBQzNDLEtBQUQsQ0FBL0IsR0FBeUNBLEtBQWhEO0FBQ0Q7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1Q0EsU0FBUzJCLE1BQVQsQ0FBZ0JULFVBQWhCLEVBQTRCcUIsT0FBNUIsRUFBcUM5QixJQUFyQyxFQUEyQztBQUN6QyxNQUFJUyxVQUFVLElBQUksSUFBbEIsRUFBd0I7QUFDdEIsV0FBTyxJQUFQO0FBQ0Q7O0FBRUQsUUFBTTZCLElBQUksR0FBR2hELGtFQUFRLENBQUNtQixVQUFELENBQXJCOztBQUNBLE1BQUksQ0FBQzZCLElBQUwsRUFBVztBQUNULFVBQU16QixLQUFLLENBQUUsZ0NBQStCSixVQUFVLENBQUM4QixXQUFYLENBQXVCQyxJQUFLLEVBQTdELENBQVg7QUFDRDs7QUFFRCxNQUFJMUIsR0FBRyxHQUFHZCxJQUFWO0FBQ0EsTUFBSUUsSUFBSSxHQUFHb0MsSUFBSSxDQUFDRyxJQUFMLEVBQVg7O0FBRUEsU0FBTyxDQUFDdkMsSUFBSSxDQUFDd0MsSUFBYixFQUFtQjtBQUNqQjVCLE9BQUcsR0FBR2dCLE9BQU8sQ0FBQ3BCLDBEQUFDLENBQUNSLElBQUgsQ0FBUCxDQUFnQlksR0FBaEIsRUFBcUJaLElBQUksQ0FBQ1gsS0FBMUIsQ0FBTjs7QUFDQSxRQUFJNEMsV0FBVyxDQUFDckIsR0FBRCxDQUFmLEVBQXNCO0FBQ3BCQSxTQUFHLEdBQUdvQixVQUFVLENBQUNwQixHQUFELENBQWhCO0FBQ0E7QUFDRDs7QUFDRFosUUFBSSxHQUFHb0MsSUFBSSxDQUFDRyxJQUFMLEVBQVA7QUFDRDs7QUFFRCxTQUFPWCxPQUFPLENBQUNwQiwwREFBQyxDQUFDUCxNQUFILENBQVAsQ0FBa0JXLEdBQWxCLENBQVA7QUFDRDs7Ozs7Ozs7Ozs7Ozs7QUMxYkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7OztBQU9BOzs7Ozs7OztBQVFBOzs7Ozs7O0FBT0EsTUFBTTZCLFFBQVEsR0FBRzdELE1BQU0sQ0FBQzhELFNBQVAsQ0FBaUJELFFBQWxDO0FBRUE7Ozs7Ozs7Ozs7QUFTQSxTQUFTbkQsVUFBVCxDQUFvQnFELENBQXBCLEVBQXVCO0FBQ3JCLFNBQU9GLFFBQVEsQ0FBQ0csSUFBVCxDQUFjRCxDQUFkLE1BQXFCLG1CQUE1QjtBQUNEO0FBRUQ7Ozs7Ozs7Ozs7O0FBU0EsU0FBU25ELG1CQUFULENBQTZCbUQsQ0FBN0IsRUFBZ0M7QUFDOUIsU0FBT0YsUUFBUSxDQUFDRyxJQUFULENBQWNELENBQWQsTUFBcUIsNEJBQTVCO0FBQ0Q7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlQSxTQUFTbEQsUUFBVCxDQUFrQmtELENBQWxCLEVBQXFCO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSUYsUUFBUSxDQUFDRyxJQUFULENBQWNELENBQWQsTUFBcUIsaUJBQXpCLEVBQTRDO0FBQzFDLFdBQU8sS0FBUDtBQUNELEdBUGtCLENBU25COzs7QUFDQSxRQUFNRSxLQUFLLEdBQUdqRSxNQUFNLENBQUNrRSxjQUFQLENBQXNCSCxDQUF0QixDQUFkOztBQUNBLE1BQUlFLEtBQUssS0FBSyxJQUFkLEVBQW9CO0FBQ2xCLFdBQU8sSUFBUDtBQUNELEdBYmtCLENBZW5CO0FBQ0E7OztBQUNBLFFBQU1FLElBQUksR0FDUm5FLE1BQU0sQ0FBQzhELFNBQVAsQ0FBaUJNLGNBQWpCLENBQWdDSixJQUFoQyxDQUFxQ0MsS0FBckMsRUFBNEMsYUFBNUMsS0FDQUEsS0FBSyxDQUFDUixXQUZSO0FBR0EsU0FBTyxPQUFPVSxJQUFQLEtBQWdCLFVBQWhCLElBQThCQSxJQUFJLEtBQUtuRSxNQUE5QztBQUNEO0FBRUQ7Ozs7Ozs7Ozs7Ozs7OztBQWFBLFNBQVNxRSxRQUFULENBQWtCTixDQUFsQixFQUFxQjtBQUNuQixTQUFPRixRQUFRLENBQUNHLElBQVQsQ0FBY0QsQ0FBZCxNQUFxQixpQkFBckIsSUFBMENPLFFBQVEsQ0FBQ1AsQ0FBRCxDQUF6RDtBQUNEO0FBRUQ7Ozs7Ozs7Ozs7OztBQVVBLFNBQVNsQyxRQUFULENBQWtCa0MsQ0FBbEIsRUFBcUI7QUFDbkIsU0FBT0YsUUFBUSxDQUFDRyxJQUFULENBQWNELENBQWQsTUFBcUIsaUJBQTVCO0FBQ0Q7QUFFRDs7Ozs7Ozs7Ozs7Ozs7QUFZQSxNQUFNakMsT0FBTyxHQUFHeUMsS0FBSyxDQUFDekMsT0FBdEIiLCJmaWxlIjoiY2hhbmtvLXhkdWNlLXRvb2xzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1widG9vbHNcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1widG9vbHNcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuLyoqXG4gKiBUaGUgY2VudHJhbCBtb2R1bGUgZm9yIHRoZSB0cmFuc2R1Y2VyIGVuZ2luZS5cbiAqXG4gKiBBbGwgb2YgdGhlIGZ1bmN0aW9ucyBpbiB0aGlzIG1vZHVsZSBkZWFsIGRpcmVjdGx5IHdpdGggdHJhbnNkdWNlcnMuIEJ1dFxuICogZmlyc3QsIGxldCdzIHRhbGsgYWJvdXQgdGhlIHByb3RvY29scyB0aGF0IGFyZSBnb2luZyB0byBiZSByZWZlcnJlZCB0b1xuICogdGhyb3VnaG91dCBtYW55IG9mIHRoZSBmdW5jdGlvbiBkaXNjdXNzaW9ucy5cbiAqXG4gKiAjIyBQcm90b2NvbHNcbiAqXG4gKiBPbmUgb2YgdGhlIGtleSBzZWxsaW5nIHBvaW50cyBmb3IgdHJhbnNkdWNlcnMgaXMgdGhhdCB0aGUgc2FtZSB0cmFuc2R1Y2VyIGNhblxuICogYmUgdXNlZCBvbiBhbnkgdHlwZSBvZiBjb2xsZWN0aW9uLiBSYXRoZXIgdGhhbiBoYXZpbmcgdG8gd3JpdGUgYSBuZXcgYG1hcGBcbiAqIGZ1bmN0aW9uIChmb3IgZXhhbXBsZSkgZm9yIGV2ZXJ5IGtpbmQgb2YgY29sbGVjdGlvbiAtIG9uZSBmb3IgYW4gYXJyYXksIG9uZVxuICogZm9yIGEgc3RyaW5nLCBvbmUgZm9yIGFuIGl0ZXJhdG9yLCBldGMuIC0gdGhlcmUgaXMgYSBzaW5nbGUgYG1hcGAgdHJhbnNkdWNlclxuICogdGhhdCB3aWxsIHdvcmsgd2l0aCBhbGwgb2YgdGhlbSwgYW5kIHBvdGVudGlhbGx5IHdpdGggKmFueSoga2luZCBvZlxuICogY29sbGVjdGlvbi4gVGhpcyBpcyBwb3NzaWJsZSBpbXBsZW1lbnRpbmcgKnByb3RvY29scyogb24gdGhlIGNvbGxlY3Rpb25zLlxuICpcbiAqIEEgcHJvdG9jb2wgaW4gSmF2YVNjcmlwdCBpcyBtdWNoIGxpa2UgYW4gaW50ZXJmYWNlIGluIGxhbmd1YWdlcyBsaWtlIEphdmEgYW5kXG4gKiBDIy4gSXQgaXMgYSBjb21taXRtZW50IHRvIHByb3ZpZGluZyBhIGNlcnRhaW4gZnVuY3Rpb25hbGl0eSB1bmRlciBhIGNlcnRhaW5cbiAqIG5hbWUuIEVTMjAxNSBoYXMgc2VlbiB0aGUgaW50cm9kdWN0aW9uIG9mIGFuIGBpdGVyYXRvcmAgcHJvdG9jb2wsIGZvclxuICogZXhhbXBsZSwgYW5kIGxhbmd1YWdlIHN1cHBvcnQgZm9yIGl0ICh0aGUgbmV3IGBmb3IuLi5vZmAgbG9vcCBjYW4gd29yayB3aXRoXG4gKiBhbnkgb2JqZWN0IHRoYXQgY29ycmVjdGx5IGltcGxlbWVudHMgdGhlIGBpdGVyYXRvcmAgcHJvdG9jb2wpLlxuICpcbiAqIFRvIHN1cHBvcnQgdHJhbnNkdWN0aW9uLCBYZHVjZSBleHBlY3RzIGNvbGxlY3Rpb25zIHRvIGltcGxlbWVudCBmb3VyXG4gKiBwcm90b2NvbHMuXG4gKlxuICogLSBgaXRlcmF0b3JgOiBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhbiBpdGVyYXRvciAodGhpcyBvbmUgaXMgYnVpbHQgaW4gdG9cbiAqICAgRVM2IEphdmFTY3JpcHQpXG4gKiAtIGB0cmFuc2R1Y2VyL2luaXRgOiBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIG5ldywgZW1wdHkgaW5zdGFuY2Ugb2YgdGhlXG4gKiAgIG91dHB1dCBjb2xsZWN0aW9uXG4gKiAtIGB0cmFuc2R1Y2VyL3N0ZXBgOiBhIGZ1bmN0aW9uIHRoYXQgdGFrZXMgYW4gYWNjdW11bGF0b3IgKHRoZSByZXN1bHQgb2YgdGhlXG4gKiAgIHJlZHVjdGlvbiBzbyBmYXIpIGFuZCB0aGUgbmV4dCBpbnB1dCB2YWx1ZSwgYW5kIHRoZW4gcmV0dXJucyB0aGVcbiAqICAgYWNjdW11bGF0b3Igd2l0aCB0aGUgbmV4dCBpbnB1dCB2YWx1ZSBhZGRlZCB0byBpdFxuICogLSBgdHJhbnNkdWNlci9yZXN1bHRgOiBhIGZ1bmN0aW9uIHRoYXQgdGFrZXMgdGhlIHJlZHVjZWQgY29sbGVjdGlvbiBhbmRcbiAqICAgcmV0dXJucyB0aGUgZmluYWwgb3V0cHV0IGNvbGxlY3Rpb25cbiAqXG4gKiBgaXRlcmF0b3JgIGlzIHRoZSBidWlsdC1pbiBKYXZhU2NyaXB0IHByb3RvY29sLiBXaGVuIGNhbGxlZCwgaXQgaXMgZXhwZWN0ZWRcbiAqIHRvIHJldHVybiBhbiBpdGVyYXRvciBvdmVyIHRoZSBpbXBsZW1lbnRpbmcgY29sbGVjdGlvbi4gVGhpcyBpdGVyYXRvciBpcyBhblxuICogb2JqZWN0IHRoYXQgaGFzIGEgYG5leHRgIGZ1bmN0aW9uLiBFYWNoIGNhbGwgdG8gYG5leHRgIGlzIGV4cGVjdGVkIHRvIHJldHVyblxuICogYW4gb2JqZWN0IHdpdGggYHZhbHVlYCBhbmQgYGRvbmVgIHByb3BlcnRpZXMsIHdoaWNoIHJlc3BlY3RpdmVseSBob2xkIHRoZVxuICogbmV4dCB2YWx1ZSBvZiB0aGUgaXRlcmF0b3IgYW5kIGEgYm9vbGVhbiB0byBpbmRpY2F0ZSB3aGV0aGVyIHRoZSBpdGVyYXRpb25cbiAqIGhhcyByZWFjaGVkIGl0cyBlbmQuIChUaGlzIGlzIGEgc2ltcGxpZmllZCBleHBsYW5hdGlvbjsgc2VlXG4gKiB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9HdWlkZS9JdGVyYXRvcnNfYW5kX0dlbmVyYXRvcnN8dGhpcyBNRE4gcGFnZX1cbiAqIGZvciBtb3JlIGRldGFpbGVkIGluZm9ybWF0aW9uLilcbiAqXG4gKiBgdHJhbnNkdWNlci9pbml0YCAocmVmZXJyZWQgdG8gZnJvbSBub3cgb24gYXMgYGluaXRgKSBzaG91bGQgYmUgYSBmdW5jdGlvblxuICogdGhhdCB0YWtlcyBubyBwYXJhbWV0ZXJzIGFuZCByZXR1cm5zIGEgbmV3LCBlbXB0eSBpbnN0YW5jZSBvZiB0aGUgb3V0cHV0XG4gKiBjb2xsZWN0aW9uLiBUaGlzIGlzIHRoZSBmdW5jdGlvbiB0aGF0IGRlZmluZXMgaG93IHRvIGNyZWF0ZSBhIG5ldyBjb2xsZWN0aW9uXG4gKiBvZiB0aGUgY29ycmVjdCB0eXBlLlxuICpcbiAqIGB0cmFuc2R1Y2VyL3N0ZXBgIChyZWZlcnJlZCB0byBmcm9tIG5vdyBvbiBhcyBgc3RlcGApIHNob3VsZCBiZSBhIGZ1bmN0aW9uXG4gKiB0aGF0IHRha2VzIHR3byBwYXJhbWV0ZXJzLiBUaGVzZSBwYXJhbWV0ZXJzIGFyZSB0aGUgcmVzdWx0IG9mIHRoZSByZWR1Y3Rpb25cbiAqIHNvIGZhciAoYW5kIHNvIGlzIGEgY29sbGVjdGlvbiBvZiB0aGUgb3V0cHV0IHR5cGUpIGFuZCB0aGUgbmV4dCB2YWx1ZSBmcm9tXG4gKiB0aGUgaW5wdXQgY29sbGVjdGlvbi4gSXQgbXVzdCByZXR1cm4gdGhlIG5ldyByZWR1Y3Rpb24gcmVzdWx0LCB3aXRoIHRoZSBuZXh0XG4gKiB2YWx1ZSBpbmNvcnBvcmF0ZWQgaW50byBpdC4gVGhpcyBpcyB0aGUgZnVuY3Rpb24gdGhhdCBkZWZpbmVzIGhvdyByZWR1Y2UgYVxuICogdmFsdWUgb250byB0aGUgY29sbGVjdGlvbi5cbiAqXG4gKiBgdHJhbnNkdWNlci9yZXN1bHRgIChyZWZlcnJlZCB0byBmcm9tIG5vdyBvbiBhcyBgcmVzdWx0YCkgc2hvdWxkIGJlIGFcbiAqIGZ1bmN0aW9uIHRoYXQgdGFrZXMgb25lIHBhcmFtZXRlciwgd2hpY2ggaXMgdGhlIGZ1bGx5IHJlZHVjZWQgY29sbGVjdGlvbi4gSXRcbiAqIHNob3VsZCByZXR1cm4gdGhlIGZpbmFsIG91dHB1dCBjb2xsZWN0aW9uLiBUaGlzIGFmZm9yZHMgYSBjaGFuY2UgdG8gbWFrZSBhbnlcbiAqIGxhc3QtbWludXRlIGFkanVzdG1lbnRzIHRvIHRoZSByZWR1Y2VkIGNvbGxlY3Rpb24gYmVmb3JlIHJldHVybmluZyBpdC5cbiAqXG4gKiBBcnJheXMsIHN0cmluZ3MsIGFuZCBvYmplY3RzIGFyZSBhbGwgZ2l2ZW4gc3VwcG9ydCBmb3IgYWxsIG9mIHRoZXNlXG4gKiBwcm90b2NvbHMuIE90aGVyIGNvbGxlY3Rpb25zIHdpbGwgaGF2ZSB0byBwcm92aWRlIHRoZWlyIG93biAodGhvdWdoIGl0IHNob3VsZFxuICogYmUgbm90ZWQgdGhhdCBzaW5jZSBgaXRlcmF0b3JgIGlzIGJ1aWx0LWluLCBtYW55IHRoaXJkLXBhcnR5IGNvbGxlY3Rpb25zIHdpbGxcbiAqIGFscmVhZHkgaW1wbGVtZW50IHRoaXMgcHJvdG9jb2wpLiBBcyBhbiBleGFtcGxlLCBsZXQncyBhZGQgdHJhbnNkdWNlciBzdXBwb3J0XG4gKiB0byBhIHRoaXJkLXBhcnR5IGNvbGxlY3Rpb24sIHRoZSBgSW1tdXRhYmxlLkxpc3RgIGNvbGxlY3Rpb24gZnJvbVxuICoge0BsaW5rIGh0dHBzOi8vZmFjZWJvb2suZ2l0aHViLmlvL2ltbXV0YWJsZS1qcy98aW1tdXRhYmxlLWpzfS5cbiAqXG4gKiBgYGBcbiAqIEltbXV0YWJsZS5MaXN0LnByb3RvdHlwZVtwcm90b2NvbHMuaW5pdF0gPSAoKSA9PiBJbW11dGFibGUuTGlzdCgpLmFzTXV0YWJsZSgpO1xuICogSW1tdXRhYmxlLkxpc3QucHJvdG90eXBlW3Byb3RvY29scy5zdGVwXSA9IChhY2MsIGlucHV0KSA9PiBhY2MucHVzaChpbnB1dCk7XG4gKiBJbW11dGFibGUuTGlzdC5wcm90b3R5cGVbcHJvdG9jb2xzLnJlc3VsdF0gPSAodmFsdWUpID0+IHZhbHVlLmFzSW1tdXRhYmxlKCk7XG4gKiBgYGBcbiAqXG4gKiBgSW1tdXRhYmxlLkxpc3RgIGFscmVhZHkgaW1wbGVtZW50cyBgaXRlcmF0b3JgLCBzbyB3ZSBkb24ndCBoYXZlIHRvIGRvIGl0XG4gKiBvdXJzZWx2ZXMuXG4gKlxuICogVGhlIGBpbml0YCBmdW5jdGlvbiByZXR1cm5zIGFuIGVtcHR5IG11dGFibGUgbGlzdC4gVGhpcyBpcyBpbXBvcnRhbnQgZm9yXG4gKiBpbW11dGFibGUtanMgYmVjYXVzZSBpdHMgZGVmYXVsdCBsaXN0cyBhcmUgaW1tdXRhYmxlLCBhbmQgaW1tdXRhYmxlIGxpc3RzXG4gKiBtZWFuIHRoYXQgYSBuZXcgbGlzdCBoYXMgdG8gYmUgY3JlYXRlZCB3aXRoIGV2ZXJ5IHJlZHVjdGlvbiBzdGVwLiBJdCB3b3VsZFxuICogd29yayBmaW5lLCBidXQgaXQncyBxdWl0ZSBpbmVmZmljaWVudC5cbiAqXG4gKiBUaGUgYHN0ZXBgIGZ1bmN0aW9uIGFkZHMgdGhlIG5leHQgdmFsdWUgdG8gdGhlIGFscmVhZHktY3JlYXRlZCBsaXN0LlxuICogYEltbXV0YWJsZS5MaXN0YCBwcm92aWRlcyBhIGBwdXNoYCBmdW5jdGlvbiB0aGF0IHdvcmtzIGxpa2UgYW4gYXJyYXknc1xuICogYHB1c2hgLCBleGNlcHQgdGhhdCBpdCByZXR1cm5zIHRoZSBuZXcgbGlzdCB3aXRoIHRoZSB2YWx1ZSBwdXNoZWQgb250byBpdC5cbiAqIFRoaXMgaXMgcGVyZmVjdCBmb3Igb3VyIGBzdGVwYCBmdW5jdGlvbi5cbiAqXG4gKiBUaGUgYHJlc3VsdGAgZnVuY3Rpb24gY29udmVydHMgdGhlIG5vdy1maW5pc2hlZCBtdXRhYmxlIGxpc3QgaW50byBhblxuICogaW1tdXRhYmxlIG9uZSwgd2hpY2ggaXMgd2hhdCdzIGdvaW5nIHRvIGJlIGV4cGVjdGVkIGlmIHdlJ3JlIHRyYW5zZHVjaW5nXG4gKiBzb21ldGhpbmcgaW50byBhbiBgSW1tdXRhYmxlLkxpc3RgLiBJbiBtb3N0IGNhc2VzLCBgcmVzdWx0YCBkb2Vzbid0IGhhdmUgdG9cbiAqIGRvIGFueSB3b3JrLCBidXQgc2luY2Ugd2UncmUgY3JlYXRpbmcgYW4gaW50ZXJtZWRpYXRlIHJlcHJlc2VudGF0aW9uIG9mIG91clxuICogY29sbGVjdGlvbiB0eXBlIGhlcmUsIHRoaXMgbGV0cyB1cyBjcmVhdGUgdGhlIGNvbGxlY3Rpb24gdGhhdCB3ZSBhY3R1YWxseVxuICogd2FudCB0byBvdXRwdXQuIChXaXRob3V0IGByZXN1bHRgLCB3ZSB3b3VsZCBoYXZlIHRvIHVzZSBpbW11dGFibGUgbGlzdHMgYWxsXG4gKiB0aGUgd2F5IHRocm91Z2gsIGNyZWF0aW5nIGEgbmV3IG9uZSB3aXRoIGVhY2ggYHN0ZXBgIGZ1bmN0aW9uLCBzaW5jZSB3ZVxuICogd291bGRuJ3QgYmUgYWJsZSB0byBtYWtlIHRoaXMgY29udmVyc3Rpb24gYXQgdGhlIGVuZC4pXG4gKlxuICogV2l0aCB0aG9zZSBwcm90b2NvbHMgaW1wbGVtZW50ZWQgb24gdGhlIHByb3RvdHlwZSwgYEltbXV0YWJsZS5MaXN0YFxuICogY29sbGVjdGlvbnMgY2FuIG5vdyBzdXBwb3J0IGFueSB0cmFuc2R1Y3Rpb24gd2UgY2FuIG9mZmVyLlxuICpcbiAqICMjIyBQcm90b2NvbHNcbiAqXG4gKiBBZnRlciB0YWxraW5nIGEgbG90IGFib3V0IHByb3RvY29scyBhbmQgc2hvd2luZyBob3cgdGhleSdyZSBwcm9wZXJ0aWVzIGFkZGVkXG4gKiB0byBhbiBvYmplY3QsIGl0J3MgcHJvYmFibHkgcHJldHR5IG9idmlvdXMgdGhhdCB0aGVyZSdzIGJlZW4gbm8gbWVudGlvbiBvZlxuICogd2hhdCB0aGUgYWN0dWFsIG5hbWVzIG9mIHRob3NlIHByb3BlcnRpZXMgYXJlLiBUaGF0J3Mgd2hhdFxuICogYHtAbGluayBtb2R1bGU6Y29yZS5wcm90b2NvbHN8cHJvdG9jb2xzfWAgaXMgZm9yLlxuICpcbiAqIFRoZSBiZXN0IHdheSB0byB1c2UgdGhlc2Uga2V5cyBjYW4gYmUgc2VlbiBpbiB0aGUgaW1tdXRhYmxlLWpzIGV4YW1wbGUgYWJvdmUuXG4gKiBJbnN0ZWFkIG9mIHdvcnJ5aW5nIGFib3V0IHRoZSBuYW1lIG9mIHRoZSBrZXkgZm9yIHRoZSBgaW5pdGAgcHJvdG9jb2wsIHRoZVxuICogdmFsdWUgb2YgYHByb3RvY29scy5pbml0YCBpcyB1c2VkLlxuICpcbiAqIGB7QGxpbmsgbW9kdWxlOmNvcmUucHJvdG9jb2xzfHByb3RvY29sc31gIGRlZmluZXMgdGhlc2UgcHJvdG9jb2wgcHJvcGVydHlcbiAqIG5hbWVzLlxuICpcbiAqIC0gYGluaXRgXG4gKiAtIGBzdGVwYFxuICogLSBgcmVzdWx0YFxuICogLSBgcmVkdWNlZGA6IHVzZWQgaW50ZXJuYWxseSB0byBtYXJrIGEgY29sbGVjdGlvbiBhcyBhbHJlYWR5IHJlZHVjZWRcbiAqIC0gYHZhbHVlYDogdXNlZCBpbnRlcm5hbGx5IHRvIHByb3ZpZGUgdGhlIGFjdHVhbCB2YWx1ZSBvZiBhIHJlZHVjZWRcbiAqICAgY29sbGVjdGlvblxuICpcbiAqIFRoZSBmaW5hbCB0d28gdmFsdWVzIGRvbid0IGhhdmUgYSBsb3Qgb2YgdXNlIG91dHNpZGUgdGhlIGxpYnJhcnkgdW5sZXNzXG4gKiB5b3UncmUgd3JpdGluZyB5b3VyIG93biB0cmFuc2R1Y2Vycy5cbiAqXG4gKiAjIyBIb3cgT2JqZWN0cyBBcmUgVHJlYXRlZFxuICpcbiAqIE9iamVjdHMgYmVhciBzb21lIHRob3VnaHQgYmVjYXVzZSByZWd1bGFybHksIHRoZXkgYXJlbid0IGNhbmRpZGF0ZXMgZm9yXG4gKiBpdGVyYXRpb24gKGFuZCB0aGVyZWZvcmUgZm9yIHRyYW5zZHVjdGlvbiBpbiBnZW5lcmFsKS4gVGhleSBkb24ndCBoYXZlIGEgdmVyeVxuICogc3RyYWlnaHRmb3J3YXJkIGlkZWEgb2Ygb3JkZXIsIGFuZCB0aGV5IGhhdmUgKnR3byogcGllY2VzIG9mIGRhdGEgKGtleSBhbmRcbiAqIHZhbHVlKSBmb3IgZXZlcnkgZWxlbWVudCBpbnN0ZWFkIG9mIG9uZS4gWWV0IGl0J3MgdW5kZW5pYWJsZSB0aGF0IGF0IGxlYXN0XG4gKiBmb3IgbW9zdCB0cmFuc2Zvcm1hdGlvbnMsIGJlaW5nIGFibGUgdG8gYXBwbHkgdGhlbSB0byBvYmplY3RzIHdvdWxkIGJlIHF1aXRlXG4gKiBoYW5keS5cbiAqXG4gKiBGb3IgdGhhdCByZWFzb24sIHNwZWNpYWwgc3VwcG9ydCBpcyBwcm92aWRlZCBlbmQtdG8tZW5kIGZvciBvYmplY3RzLlxuICpcbiAqICMjIyBPYmplY3QgaXRlcmF0aW9uXG4gKlxuICogSXRlcmF0aW5nIG92ZXIgYW4gb2JqZWN0IHdpbGwgcHJvZHVjZSBvbmUgb2JqZWN0IHBlciBwcm9wZXJ0eSBvZiB0aGUgb3JpZ2luYWxcbiAqIG9iamVjdC4gQW4gb3JkZXIgaXMgaW1wb3NlZDsgYnkgZGVmYXVsdCwgdGhpcyBvcmRlciB0aGUgc2FtZSBhcyB0aGUgb3JkZXJpbmdcbiAqIG9mIGtleXMgaW4gcG9zdC1FUzYgSmF2YXNjcmlwdDpcbiAqXG4gKiAxLiBLZXlzIHRoYXQgYXJlIGludGVnZXJzLCBpbiBhc2NlbmRpbmcgbnVtZXJpY2FsIG9yZGVyXG4gKiAyLiBBbGwgb3RoZXIgc3RyaW5nIGtleXMsIGluIHRoZSBvcmRlciBpbiB3aGljaCB0aGV5IHdlcmUgYWRkZWQgdG8gdGhlIG9iamVjdFxuICogMy4gQWxsIHN5bWJvbCBrZXlzLCBpbiB0aGUgb3JkZXIgaW4gd2hpY2ggdGhleSB3ZXJlIGFkZGVkIHRvIHRoZSBvYmplY3RcbiAqXG4gKiBUaGUgYHtAbGluayBtb2R1bGU6Y29yZS5pdGVyYXRvcnxpdGVyYXRvcn1gIGZ1bmN0aW9uIGNhbiBiZSBwYXNzZWQgYSBzb3J0aW5nXG4gKiBmdW5jdGlvbiB0aGF0IGNhbiBzb3J0IGtleXMgaW4gYW55IG90aGVyIHdheS5cbiAqXG4gKiBUaGUgcmVzdWx0IG9mIHRoZSBpdGVyYXRpb24sIGlzIGEgc2V0IG9mIG9iamVjdHMgZWFjaCB3aXRoIGEgc2luZ2xlIHByb3BlcnR5LFxuICogb25lIGZvciBlYWNoIGVudW1lcmFibGUgb3duIHByb3BlcnR5IG9uIHRoZSBvcmlnaW5hbCBvYmplY3QuIFRoZSBzdGFuZGFyZFxuICogb3JkZXJpbmcgZm9yIG9iamVjdHMgKGZyb20gRVM2IG9ud2FyZCkgaXMgYXMgZm9sbG93czpcbiAqXG4gKiAjIyMgVHJhbnNmb3JtaW5nIG9iamVjdHNcbiAqXG4gKiBXaGlsZSBpdGVyYXRpbmcgb3ZlciBvYmplY3RzIGluIHRoaXMgd2F5IGlzIHN0cmFpZ2h0Zm9yd2FyZCwgdGhlIHN5bnRheCBvZlxuICogb2JqZWN0cyBtYWtlcyBpdCB1Z2x5IHRvIHRyYW5zZm9ybSB0aGVtIGluIHRoaXMgZm9ybS4gSGVyZSdzIGFuIGV4YW1wbGUgb2YgYVxuICogdHJhbnNmb3JtYXRpb24gZnVuY3Rpb24gdGhhdCBtYWtlcyB0aGUgb2JqZWN0J3Mga2V5cyB1cHBlci1jYXNlIGFuZCBhZGRzIG9uZVxuICogdG8gZWFjaCBvZiB0aGUgdmFsdWVzOlxuICpcbiAqIGBgYFxuICogZnVuY3Rpb24gdHJhbnNmb3JtKG9iaikge1xuICogICBjb25zdCBrZXkgPSBPYmplY3Qua2V5cyhvYmopWzBdO1xuICogICBjb25zdCB2YWx1ZSA9IG9ialtrZXldO1xuICogICByZXR1cm4geyBba2V5LnRvVXBwZXJDYXNlKCldOiB2YWx1ZSArIDEgfTtcbiAqIH1cbiAqIGBgYFxuICpcbiAqIEEgaGVscGVyIGZ1bmN0aW9uIG5hbWVkIGB7QGxpbmsgbW9kdWxlOmNvcmUucHJvcGVydHl8cHJvcGVydHl9YCBjYW4gaW1wcm92ZVxuICogdGhpcyBieSBoYW5kbGluZyB0aGUgYm9pbGVycGxhdGUuXG4gKlxuICogYGBgXG4gKiBmdW5jdGlvbiBpbXByb3ZlZFRyYW5zZm9ybShvYmopIHtcbiAqICAgY29uc3Qge2ssIHZ9ID0gcHJvcGVydHkob2JqKTtcbiAqICAgcmV0dXJuIHsgW2sudG9VcHBlckNhc2UoKV06IHYgKyAxIH07XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiAjIyMgUmVkdWNpbmcgb2JqZWN0c1xuICpcbiAqIFRoZSBidWlsdC1pbiByZWR1Y2VycyAoZm9yIGFycmF5cywgb2JqZWN0cywgc3RyaW5ncywgYW5kIGl0ZXJhdG9ycylcbiAqIHVuZGVyc3RhbmQgdGhlc2Ugc2luZ2xlLXByb3BlcnR5IG9iamVjdHMgYW5kIHJlZHVjZSB0aGVtIGluIHRoZSBwcm9wZXIgbWFubmVyXG4gKiB3aXRob3V0IGFueSBmdXJ0aGVyIHdvcmsuXG4gKlxuICogVGhhdCdzIGl0IGZvciBvYmplY3Qtb2JqZWN0IHJlZHVjdGlvbi4gQ29udmVydGluZyBiZXR3ZWVuIG9iamVjdHMgYW5kIG90aGVyXG4gKiB0eXBlcyBpcyBhbm90aGVyIG1hdHRlci5cbiAqXG4gKiBFdmVyeSB0cmFuc2R1Y2VyIGZ1bmN0aW9uIGV4Y2VwdCBmb3IgYHtAbGluayBtb2R1bGU6Y29yZS5zZXF1ZW5jZXxzZXF1ZW5jZX1gXG4gKiBpcyBjYXBhYmxlIG9mIHR1cm5pbmcgYW4gb2JqZWN0IGludG8gYSBkaWZmZXJlbnQgdHlwZSBvZiBjb2xsZWN0aW9uLCB0dXJuaW5nXG4gKiBhIGRpZmZlcmVudCB0eXBlIG9mIGNvbGxlY3Rpb24gaW50byBhbiBvYmplY3QsIG9yIGJvdGguIE9iamVjdHMgYXJlIGRpZmZlcmVudFxuICogYmVjYXVzZSB0aGV5J3JlIHRoZSBvbmx5IFwiY29sbGVjdGlvbnNcIiB0aGF0IGhhdmUgdHdvIGRpZmZlcmVudCBwaWVjZXMgb2YgZGF0YVxuICogcGVyIGVsZW1lbnQuIEJlY2F1c2Ugb2YgdGhpcywgd2UgaGF2ZSB0byBoYXZlIGEgc3RyYXRlZ3kgb24gaG93IHRvIG1vdmUgZnJvbVxuICogb25lIHRvIGFub3RoZXIuXG4gKlxuICogVHJhbnNkdWNpbmcgYW4gb2JqZWN0IGludG8gYSBkaWZmZXJlbnQgdHlwZSBpcyBnZW5lcmFsbHkgcHJldHR5IGVhc3kuIElmIGFuXG4gKiBvYmplY3QgaXMgY29udmVydGVkIGludG8gYW4gYXJyYXksIGZvciBpbnN0YW5jZSwgdGhlIGFycmF5IGVsZW1lbnRzIHdpbGwgZWFjaFxuICogYmUgc2luZ2xlLXByb3BlcnR5IG9iamVjdHMsIG9uZSBwZXIgcHJvcGVydHkgb2YgdGhlIG9yaWdpbmFsIG9iamVjdC5cbiAqXG4gKiBTdHJpbmdzIGFyZSBhIGRpZmZlcmVudCBzdG9yeSwgc2luY2UgZW5jb2RpbmcgYSBzaW5nbGUtcHJvcGVydHkgb2JqZWN0IHRvIGFcbiAqIHN0cmluZyBpc24ndCBwb3NzaWJsZSAoYmVjYXVzZSBldmVyeSBcImVsZW1lbnRcIiBvZiBhIHN0cmluZyBoYXMgdG8gYmUgYSBzaW5nbGVcbiAqIGNoYXJhY3RlcikuIFN0cmluZ3MgdGhhdCBhcmUgcHJvZHVjZWQgZnJvbSBvYmplY3RzIHdpbGwgaW5zdGVhZCBqdXN0IGJlIHRoZVxuICogb2JqZWN0IHZhbHVlcywgY29uY2F0ZW5hdGVkLiBCZWNhdXNlIG9iamVjdHMgYXJlIGl0ZXJhdGVkIGluIGEgcGFydGljdWxhclxuICogb3JkZXIsIHRoaXMgY29udmVyc2lvbiB3aWxsIGFsd2F5cyBwcm9kdWNlIHRoZSBzYW1lIHN0cmluZywgYnV0IGV4Y2VwdCBpblxuICogc29tZSB2ZXJ5IHNwZWNpZmljIGNhc2VzIHRoZXJlIHJlYWxseSBpc24ndCBhIGxvdCBvZiB1c2UgZm9yIHRoaXMgY29udmVyc2lvbi5cbiAqXG4gKiBgYGBcbiAqIGNvbnN0IG9iaiA9IHthOiAxLCBiOiAyfTtcbiAqXG4gKiBsZXQgcmVzdWx0ID0gYXNBcnJheShvYmopO1xuICogLy8gcmVzdWx0ID0gW3thOiAxfSwge2I6IDJ9XVxuICpcbiAqIHJlc3VsdCA9IGFzSXRlcmF0b3Iob2JqKTtcbiAqIC8vIHJlc3VsdCBpcyBhbiBpdGVyYXRvciB3aXRoIHR3byB2YWx1ZXM6IHthOiAxfSBhbmQge2I6IDJ9XG4gKlxuICogcmVzdWx0ID0gaW50byhJbW11dGFibGUuTGlzdCgpLCBvYmopXG4gKiAvLyByZXN1bHQgaXMgYW4gaW1tdXRhYmxlIGxpc3Qgd2l0aCB0d28gZWxlbWVudHM6IHthOiAxfSBhbmQge2I6IDJ9XG4gKlxuICogcmVzdWx0ID0gYXNTdHJpbmcob2JqKTtcbiAqIC8vIHJlc3VsdCBpcyAnMTInXG4gKiBgYGBcbiAqXG4gKiBUaGUgb3Bwb3NpdGUgY29udmVyc2lvbiBkZXBlbmRzIG9uIHRoZSB2YWx1ZXMgaW5zaWRlIHRoZSBjb2xsZWN0aW9ucy4gSWZcbiAqIHRob3NlIHZhbHVlcyBhcmUgb2JqZWN0cywgdGhlbiB0aGUgcmVzdWx0IGlzIGFuIG9iamVjdCB3aXRoIGFsbCBvZiB0aGVcbiAqIG9iamVjdHMgY29tYmluZWQgKGlmIG1vcmUgdGhhbiBvbmUgaGFzIHRoZSBzYW1lIGtleSwgdGhlIGxhc3Qgb25lIGlzIHRoZSBvbmVcbiAqIHRoYXQncyBrZXB0KS4gT3RoZXJ3aXNlLCBrZXlzIGFyZSBjcmVhdGVkIGZvciBlYWNoIG9mIHRoZSBlbGVtZW50cywgc3RhcnRpbmdcbiAqIHdpdGggYDBgIGFuZCBpbmNyZWFzaW5nIGZyb20gdGhlcmUuXG4gKlxuICogVGhpcyBtZWFucyB0aGF0IGNvbnZlcnRpbmcgYW4gb2JqZWN0IHRvIGFueSBub24tc3RyaW5nIGNvbGxlY3Rpb24gYW5kIGJhY2tcbiAqIHByb2R1Y2VzIHRoZSBvcmlnaW5hbCBvYmplY3QuXG4gKlxuICogYGBgXG4gKiBsZXQgcmVzdWx0ID0gYXNPYmplY3QoW3thOiAxfSwge2I6IDJ9XSk7XG4gKiAvLyByZXN1bHQgPSB7YTogMSwgYjogMn1cbiAqXG4gKiByZXN1bHQgPSBhc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gcmVzdWx0ID0gezA6IDEsIDE6IDIsIDI6IDN9XG4gKlxuICogcmVzdWx0ID0gYXNPYmplY3QoJ2hlbGxvJyk7XG4gKiAvLyByZXN1bHQgPSB7MDogJ2gnLCAxOiAnZScsIDI6ICdsJywgMzogJ2wnLCA0OiAnbyd9XG4gKiBgYGBcbiAqXG4gKiBAbW9kdWxlIHhkdWNlLXRvb2xzXG4gKi9cblxuZXhwb3J0IHsgcHJvdG9jb2xzLCBpc0ltcGxlbWVudGVkIH0gZnJvbSBcIm1vZHVsZXMvcHJvdG9jb2xcIjtcbmV4cG9ydCB7IGl0ZXJhdG9yLCBpc0l0ZXJhYmxlIH0gZnJvbSBcIm1vZHVsZXMvaXRlcmF0aW9uXCI7XG5leHBvcnQge1xuICBjb21wbGV0ZSxcbiAgdW5jb21wbGV0ZSxcbiAgaXNDb21wbGV0ZWQsXG4gIGVuc3VyZUNvbXBsZXRlZCxcbiAgZW5zdXJlVW5jb21wbGV0ZWQsXG4gIHJlZHVjZSxcbiAgdG9GdW5jdGlvbixcbiAgdG9SZWR1Y2VyLFxuICB0b1RyYW5zZHVjZXJcbn0gZnJvbSBcIm1vZHVsZXMvcmVkdWN0aW9uXCI7XG5leHBvcnQge1xuICBpc0FycmF5LFxuICBpc0Z1bmN0aW9uLFxuICBpc0dlbmVyYXRvckZ1bmN0aW9uLFxuICBpc051bWJlcixcbiAgaXNPYmplY3QsXG4gIGlzU3RyaW5nXG59IGZyb20gXCJtb2R1bGVzL3V0aWxzXCI7XG5cbi8qKlxuICogQW4gaXRlcmFibGUgYXMgZGVmaW5lZCBieSBKYXZhU2NyaXB0LlxuICpcbiAqIEB0eXBlZGVmIEpzSXRlcmFibGVcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y29yZVxuICogQHByb3BlcnR5IHttb2R1bGU6Y29yZS5Kc0l0ZXJhYmxlRnVuY3Rpb259IFN5bWJvbC5pdGVyYXRvciBBIGZ1bmN0aW9uIHRoYXRcbiAqICAgICBwcm9kdWNlcyBhbiBpdGVyYXRvciB3aGVuIGNhbGxlZC5cbiAqL1xuXG4vKipcbiAqIEEgZnVuY3Rpb24gdGhhdCBwcm9kdWNlcyBhbiBpdGVyYXRvci4gVGhpcyBpcyB0aGUgY2hhcmFjdGVyaXN0aWMgcHJvcGVydHkgb2ZcbiAqIGEgSmF2YVNjcmlwdCBpdGVyYWJsZS5cbiAqXG4gKiBAY2FsbGJhY2sgSnNJdGVyYWJsZUZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNvcmVcbiAqIEByZXR1cm5zIHttb2R1bGU6Y29yZS5JdGVyYXRvcn0gQW4gaXRlcmF0b3Igb3ZlciB0aGVcbiAqICAgICB7QGxpbmsgbW9kdWxlOmNvcmUuSnNJdGVyYWJsZX0gdGhhdCBwcm9kdWNlZCBpdC5cbiAqL1xuXG4vKipcbiAqIEFuIGl0ZXJhYmxlIGFzIGRlZmluZWQgYnkgdGhpcyBsaWJyYXJ5LiBTaW5jZSBpdCBwcm92aWRlcyBzcGVjaWZpYyBzdXBwb3J0XG4gKiBmb3Igb2JqZWN0cywgdGhpcyB0eXBlIGlzIG1lcmVseSBhIG5vcm1hbCBKYXZhU2NyaXB0IGl0ZXJhYmxlICpvciogYSBwbGFpblxuICogb2JqZWN0LlxuICpcbiAqIEB0eXBlZGVmIHsoT2JqZWN0fG1vZHVsZTpjb3JlLkpzSXRlcmFibGUpfSBJdGVyYWJsZVxuICogQG1lbWJlcm9mIG1vZHVsZTpjb3JlXG4gKi9cblxuLyoqXG4gKiBBIGdlbmVyaWMgaXRlcmF0b3IuIFRoaXMgY29uZm9ybXMgdG8gdGhlIGBpdGVyYXRvcmAgcHJvdG9jb2wgaW4gdGhhdCBpdCBoYXMgYVxuICogYHtAbGluayBtb2R1bGU6Y29yZS5OZXh0RnVuY3Rpb258bmV4dH1gIGZ1bmN0aW9uIHRoYXQgcHJvZHVjZXNcbiAqIHtAbGluayBtb2R1bGU6Y29yZS5OZXh0VmFsdWV8YGl0ZXJhdG9yYC1jb21wYXRpYmxlIG9iamVjdHN9LlxuICpcbiAqIEB0eXBlZGVmIEl0ZXJhdG9yXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNvcmVcbiAqIEBwcm9wZXJ0eSB7bW9kdWxlOmNvcmUuTmV4dEZ1bmN0aW9ufSBuZXh0IEEgZnVuY3Rpb24gdGhhdCwgd2hlbiBjYWxsZWQsXG4gKiAgICAgcmV0dXJucyB0aGUgbmV4dCBpdGVyYXRvciB2YWx1ZS5cbiAqL1xuXG4vKipcbiAqIFRoZSBmdW5jdGlvbiB0aGF0IHNhdGlzZmllcyB0aGUgYGl0ZXJhdG9yYCBwcm90b2NvbCBvbiBhbiBvYmplY3QuIFdoZW5cbiAqIGNhbGxlZCwgaXQgcmV0dXJucyB0aGUgbmV4dCB2YWx1ZSBpbiB0aGUgaXRlcmF0b3IuXG4gKlxuICogQGNhbGxiYWNrIE5leHRGdW5jdGlvblxuICogQG1lbWJlcm9mIG1vZHVsZTpjb3JlXG4gKiBAcmV0dXJucyB7bW9kdWxlOmNvcmUuTmV4dFZhbHVlfSBUaGUgbmV4dCB2YWx1ZSBpbiB0aGUgaXRlcmF0b3IuXG4gKi9cblxuLyoqXG4gKiBUaGUgb2JqZWN0IHJldHVybmVkIGJ5IGEgY2FsbCB0byBge0BsaW5rIG1vZHVsZTpjb3JlLk5leHRGdW5jdGlvbnxuZXh0fWAuIEl0XG4gKiBpbmRpY2F0ZXMgd2hldGhlciB0aGUgaXRlcmF0b3IgaXMgY29tcGxldGUgYW5kLCBpZiBub3QsIHdoYXQgdGhlIG5leHQgdmFsdWVcbiAqIGlzLlxuICpcbiAqIEB0eXBlZGVmIHtvYmplY3R9IE5leHRWYWx1ZVxuICogQG1lbWJlcm9mIG1vZHVsZTpjb3JlXG4gKiBAcHJvcGVydHkgeyp9IHZhbHVlIFRoZSB2YWx1ZSB0aGF0IHRoZSBpdGVyYXRvciBoYXMgcHJvdmlkZWQuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IGRvbmUgSW5kaWNhdGVzIHdoZXRoZXIgdGhlIGl0ZXJhdG9yIGhhcyBjb21wbGV0ZWQuIElmXG4gKiAgICAgdGhpcyBpcyBgdHJ1ZWAsIHRoZW4gYHZhbHVlYCB3aWxsIGJlIGB1bmRlZmluZWRgIGFuZCBldmVyeSBzdWJzZXF1ZW50XG4gKiAgICAgY2FsbCB0byBge0BsaW5rIG1vZHVsZTpjb3JlLk5leHRGdW5jdGlvbnxuZXh0fWAgd2lsbCBjb250aW51ZSB0byBwcm9kdWNlXG4gKiAgICAgdGhlIHNhbWUgdmFsdWUuIElmIGl0J3MgYGZhbHNlYCwgdGhlbiBgdmFsdWVgIHJlcHJlc2VudHMgdGhlIG5ldCB2YWx1ZSBpblxuICogICAgIHRoZSBpdGVyYXRvciwgYW5kIHRoZSBuZXh0IGNhbGwgdG9cbiAqICAgICBge0BsaW5rIG1vZHVsZTpjb3JlLk5leHRGdW5jdGlvbnxuZXh0fWAgd2lsbCBjb250aW51ZSB0byBwcm9kdWNlIHRoZSBuZXh0XG4gKiAgICAgdmFsdWUuXG4gKi9cblxuLyoqXG4gKiBBIHNvcnQgZnVuY3Rpb24gZm9yIHRoZSBrZXlzIG9mIGFuIG9iamVjdC4gVGhpcyBjb25mb3JtcyB0byB0aGUgbm9ybWFsIHNvcnRcbiAqIGZ1bmN0aW9uIHVzZWQgaW4gYEFycmF5LnByb3RvdHlwZS5zb3J0YC5cbiAqXG4gKiBAY2FsbGJhY2sgU29ydEZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNvcmVcbiAqIEBwcm9wZXJ0eSB7Kn0gYSBUaGUgZmlyc3QgdmFsdWUgdG8gYmUgc29ydGVkLlxuICogQHByb3BlcnR5IHsqfSBiIFRoZSBzZWNvbmQgdmFsdWUgdG8gYmUgc29ydGVkLlxuICogQHJldHVybnMge251bWJlcn0gRWl0aGVyIGAtMWAgaWYgYGEgPiBiYCwgYDFgIGlmIGBhIDwgYmAsIG9yIGAwYCBpZiBgYSA9PT1cbiAqICAgICBiYC5cbiAqL1xuXG4vKipcbiAqIEEgZnVuY3Rpb24gdGhhdCBjYW4gaGF2ZSBhbiBpdGVyYXRvciBjcmVhdGVkIGZvciBpdC5cbiAqXG4gKiBAY2FsbGJhY2sgSXRlcmFibGVGdW5jdGlvblxuICogQG1lbWJlcm9mIG1vZHVsZTpjb3JlXG4gKiBAcGFyYW0ge251bWJlcn0gW2luZGV4XSBUaGUgbnVtYmVyIG9mIHRpbWVzIHRoYXRcbiAqICAgICBge0BsaW5rIG1vZHVsZTpjb3JlLk5leHRGdW5jdGlvbnxuZXh0fWAgaGFzIGJlZW4gY2FsbGVkIG9uIHRoZSBmdW5jdGlvbidzXG4gKiAgICAgaXRlcmF0b3IuIFRoaXMgd2lsbCBzdGFydCBhdCBgMGAgZm9yIHRoZSBmaXJzdCBjYWxsIHRvXG4gKiAgICAgYHtAbGluayBtb2R1bGU6Y29yZS5OZXh0RnVuY3Rpb258bmV4dH1gIGFuZCBpbmNyZWFzZSBieSBvbmUgZm9yIGVhY2hcbiAqICAgICBzdWJzZXF1ZW50IGNhbGwuXG4gKiBAcGFyYW0geyp9IFtsYXN0XSBUaGUgcmV0dXJuIHZhbHVlIG9mIHRoZSBmdW5jdGlvbiB0aGUgbGFzdCB0aW1lXG4gKiAgICAgYHtAbGluayBtb2R1bGU6Y29yZS5OZXh0RnVuY3Rpb258bmV4dH1gIHdhcyBjYWxsZWQgb24gaXRzIGl0ZXJhdG9yLiBGb3JcbiAqICAgICB0aGUgZmlyc3QgY2FsbCwgdGhpcyBpcyBzZXQgdG8gYHVuZGVmaW5lZGAuXG4gKiBAcmV0dXJucyB7Kn0gVGhlIHJldHVybiB2YWx1ZSBmb3IgdGhhdCBpdGVyYXRpb24uXG4gKi9cblxuLyoqXG4gKiBBbiBvYmplY3QgcmVwcmVzZW50YXRpb24gb2YgYSBzaW5nbGUtcHJvcGVydHkgb2JqZWN0LCBidXQgdXNpbmcgb25lIHByb3BlcnR5XG4gKiBmb3IgdGhlIGtleSBhbmQgb25lIGZvciB0aGUgdmFsdWUuIFRoaXMgZm9ybWF0IGlzIGVhc2llciB0byB1c2UgaW5cbiAqIHRyYW5zZm9ybWF0aW9uIGZ1bmN0aW9ucy5cbiAqXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBQcm9wZXJ0eU9iamVjdFxuICogQG1lbWJlcm9mIG1vZHVsZTpjb3JlXG4gKiBAcHJvcGVydHkgeyhTdHJpbmd8U3ltYm9sKX0gayBUaGUga2V5IG9mIHRoZSBzaW5nbGUtcHJvcGVydHkgb2JqZWN0IHRoYXQgdGhpc1xuICogICAgIG9iamVjdCByZXByZXNlbnRzLlxuICogQHByb3BlcnR5IHsqfSB2IFRoZSB2YWx1ZSBvZiB0aGUgc2luZ2xlLXByb3BlcnR5IG9iamVjdCB0aGF0IHRoaXMgb2JqZWN0XG4gKiAgICAgcmVwcmVzZW50cy5cbiAqL1xuXG4vKipcbiAqIEFuIGluaXQgZnVuY3Rpb24sIHdoaWNoIHByb3ZpZGVzIGEgbmV3LCBlbXB0eSBpbnN0YW5jZSBvZiBhIGNvbGxlY3Rpb24uXG4gKlxuICogQGNhbGxiYWNrIEluaXRGdW5jdGlvblxuICogQG1lbWJlcm9mIG1vZHVsZTpjb3JlXG4gKiBAcmV0dXJucyB7Kn0gQSBuZXcsIGVtcHR5IGluc3RhbmNlIG9mIGEgY29sbGVjdGlvbi5cbiAqL1xuXG4vKipcbiAqIEEgc3RlcCBmdW5jdGlvbiwgdGhhdCByZWR1Y2VzIGEgY29sbGVjdGlvbiBhbmQgYSBuZXcgdmFsdWUgdG8gdGhlIGNvbGxlY3Rpb25cbiAqIHdpdGggdGhlIHZhbHVlIGFkZGVkLlxuICpcbiAqIEBjYWxsYmFjayBTdGVwRnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y29yZVxuICogQHBhcmFtIHsqfSBhY2MgQW4gYWNjdW11bGF0ZWQgdmFsdWUgdG8gd2hpY2ggdGhlIG5ldyB2YWx1ZSBpcyBiZWluZyBhZGRlZC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIG5ldyB2YWx1ZSB0byBiZSBhZGRlZCB0byB0aGUgYWNjdW11bGF0ZWQgdmFsdWUuXG4gKiBAcmV0dXJucyB7Kn0gVGhlIGFjY3VtdWxhdGVkIHZhbHVlIHdpdGggdGhlIG5ldyB2YWx1ZSBpbnRlZ3JhdGVkIGludG8gaXQuXG4gKi9cblxuLyoqXG4gKiBBIHJlc3VsdCBmdW5jdGlvbiB0aGF0IG9wdGlvbmFsbHkgbW9kaWZpZXMgdGhlIGlucHV0IGNvbGxlY3Rpb24gYW5kIHRoZW5cbiAqIHJldHVybnMgaXQuIFRoaXMgaXMgdXNlZCBhdCB0aGUgZW5kIG9mIGEgcmVkdWN0aW9uIHRvIGFmZm9yZCBhIGxhc3QgY2hhbmNlXG4gKiBmb3IgdGhlIHRyYW5zZHVjZXIgdG8gbW9kaWZ5IHRoZSBvdXRwdXQgdmFsdWUuXG4gKlxuICogQGNhbGxiYWNrIFJlc3VsdEZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNvcmVcbiAqIEBwYXJhbSB7Kn0gaW5wdXQgVGhlIHZhbHVlIHRvIGJlIG1vZGlmaWVkIGJlZm9yZSBiZWluZyBvdXRwdXQuXG4gKiBAcmV0dXJucyB7Kn0gVGhlIG1vZGlmaWVkIHZhbHVlIHRvIGJlIG91dHB1dCBieSBhIHRyYW5zZHVjZXIuXG4gKi9cblxuLyoqXG4gKiBBbiBvYmplY3Qgd2l0aCBhbGwgb2YgdGhlIGluZm9ybWF0aW9uIG5lY2Vzc2FyeSB0byByZWR1Y2UgdmFsdWVzIGludG8gYVxuICogcGFydGljdWxhciBraW5kIG9mIGNvbGxlY3Rpb24uIFRoZXNlIGFyZSBwYXNzZWQgdG9cbiAqIHtAbGluayBtb2R1bGU6Y29yZS5yZWR1Y2V8cmVkdWNlfSBhbmQgbGlrZSBmdW5jdGlvbnMuXG4gKlxuICogQHR5cGVkZWYgUmVkdWNlclxuICogQG1lbWJlcm9mIG1vZHVsZTpjb3JlXG4gKiBAcHJvcGVydHkge21vZHVsZTpjb3JlLkluaXRGdW5jdGlvbn0gW1N5bWJvbC5mb3IoXCJ0cmFuc2R1Y2VyL2luaXRcIildIFRoZVxuICogICAgIHJlZHVjZXIncyBpbml0IGZ1bmN0aW9uLlxuICogQHByb3BlcnR5IHttb2R1bGU6Y29yZS5TdGVwRnVuY3Rpb259IFN5bWJvbC5mb3IoXCJ0cmFuc2R1Y2VyL3N0ZXBcIikgVGhlXG4gKiAgICAgcmVkdWNlcidzIHN0ZXAgZnVuY3Rpb24uXG4gKiBAcHJvcGVydHkge21vZHVsZTpjb3JlLlJlc3VsdEZ1bmN0aW9ufSBTeW1ib2wuZm9yKFwidHJhbnNkdWNlci9yZXN1bHRcIikgVGhlXG4gKiAgICAgcmVkdWNlcidzIHJlc3VsdCBmdW5jdGlvbi5cbiAqL1xuXG4vKipcbiAqIEEgY29sbGVjdGlvbiB0aGF0IGNhbiBoYXZlIHZhbHVlcyByZWR1Y2VkIGludG8gaXQuIFNpbmNlIHRoaXMgbGlicmFyeVxuICogcHJvdmlkZXMgZXhwbGljaXQgc3VwcG9ydCBmb3IgYXJyYXlzLCBvYmplY3RzLCBhbmQgc3RyaW5ncywgdGhvc2UgdGhyZWUgYXJlXG4gKiBhZGRlZCB0byB0aGUge0BsaW5rIG1vZHVsZTpjb3JlLlJlZHVjZXJ9IHR5cGUgdG8gZGVmaW5lIHRoaXMuXG4gKlxuICogQHR5cGVkZWYgeyhBcnJheXxTdHJpbmd8T2JqZWN0fG1vZHVsZTpjb3JlLlJlZHVjZXIpfSBSZWR1Y2libGVcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y29yZVxuICovXG5cbi8qKlxuICogQSBjb2xsZWN0aW9uIHRoYXQgc3VwcG9ydHMgbm90IG9ubHkgdGhlIHJlZ3VsYXIgaXRlcmFpb24gb3ZlciBpdHMgY29udGVudHMsXG4gKiBidXQgYWxzbyByZWR1Y3Rpb24gb2YgdmFsdWVzIGludG8gaXQuIEl0IGlzIGFuIGludGVyc2VjdGlvbiB0eXBlIGNvbWJpbmluZ1xuICoge0BsaW5rIG1vZHVsZTpjb3JlLkl0ZXJhYmxlfEl0ZXJhYmxlfSBhbmRcbiAqIHtAbGluayBtb2R1bGU6Y29yZS5SZWR1Y2libGV8UmVkdWNpYmxlfS5cbiAqXG4gKiBAdHlwZWRlZiBFeHBsaWNpdEl0ZXJhYmxlUmVkdWNpYmxlXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNvcmVcbiAqIEBwcm9wZXJ0eSB7bW9kdWxlOmNvcmUuSnNJdGVyYWJsZUZ1bmN0aW9ufSBTeW1ib2wuaXRlcmF0b3IgQSBmdW5jdGlvbiB0aGF0XG4gKiAgICAgcHJvZHVjZXMgYW4gaXRlcmF0b3Igd2hlbiBjYWxsZWQuXG4gKiBAcHJvcGVydHkge21vZHVsZTpjb3JlLkluaXRGdW5jdGlvbn0gW1N5bWJvbC5mb3IoXCJ0cmFuc2R1Y2VyL2luaXRcIildIFRoZVxuICogICAgIGNvbGxlY3Rpb24ncyBpbml0IGZ1bmN0aW9uLlxuICogQHByb3BlcnR5IHttb2R1bGU6Y29yZS5TdGVwRnVuY3Rpb259IFN5bWJvbC5mb3IoXCJ0cmFuc2R1Y2VyL3N0ZXBcIikgVGhlXG4gKiAgICAgY29sbGVjdGlvbidzIHN0ZXAgZnVuY3Rpb24uXG4gKiBAcHJvcGVydHkge21vZHVsZTpjb3JlLlJlc3VsdEZ1bmN0aW9ufSBTeW1ib2wuZm9yKFwidHJhbnNkdWNlci9yZXN1bHRcIikgVGhlXG4gKiAgICAgY29sbGVjdGlvbidzIHJlc3VsdCBmdW5jdGlvbi5cbiAqL1xuXG4vKipcbiAqIFRoZSBhY3R1YWwgdHlwZSB1c2VkIGJ5IHJlZHVjaWJsZSBjb2xsZWN0aW9ucyBpbiB0aGlzIGxpYnJhcnkuIEl0IHRha2VzIHRoZVxuICogcHJvcGVydHktYmFzZWQgZGVmaW5pdGlvbiBhbmQgYWRkcyBidWlsdC1pbiB0eXBlcyB0aGF0IGFyZSBzcGVjaWFsbHlcbiAqIHN1cHBvcnRlZCBieSB0aGUgbGlicmFyeS5cbiAqXG4gKiBAdHlwZWRlZiB7KEFycmF5fE9iamVjdHxTdHJpbmd8bW9kdWxlOmNvcmUuRXhwbGljaXRJdGVyYWJsZVJlZHVjaWJsZSl9XG4gKiAgICAgSXRlcmFibGVSZWR1Y2libGVcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y29yZVxuICovXG5cbi8qKlxuICogQSBmdW5jdGlvbiB0aGF0IHRyYW5zZm9ybXMgZGF0YSBhbmQgY2FuIGJlIGNvbXBvc2VkIHdpdGggb3RoZXIgdHJhbnNkdWNlcnNcbiAqIGludG8gYSBzaW5nbGUgdHJhbnNkdWNlci4gVGhlIHRyYW5zZHVjZXJzIHRoZW1zZWx2ZXMgYXJlIHByb3ZpZGVkIGJ5IG90aGVyXG4gKiBsaWJyYXJpZXM7IHRoZSBvbmx5IGludm9sdmVtZW50IG9mIHRoaXMgbGlicmFyIGlzIGFzIGEgY29uc3VtZXIgb2ZcbiAqIHRyYW5zZHVjZXJzLlxuICpcbiAqIFRyYW5zZHVjZXJzIHdvcmsgYnkgaGF2aW5nIHN0ZXAgZnVuY3Rpb25zIHRoYXQgYXJlIGtub3duIHZpYSBwcm90b2NvbCwgYW5kIGl0XG4gKiBpcyB0aGVzZSBzdGVwIGZ1bmN0aW9ucyB0aGF0IHRha2UgYSB2YWx1ZSBhdCBhIHRpbWUgdG8gYmUgdHJhbnNmb3JtZWQgYXNcbiAqIHRoZWlyIGFyZ3VtZW50cy4gVGhlIGFyZ3VtZW50cyB0byB0aGUgdHJhbnNkdWNlcnMgdGhlbXNlbHZlcyBhcmUgb3RoZXJcbiAqIHRyYW5zZHVjZXJzIHRoYXQgYXJlIHRoZW4gY29tcG9zZWQgaW50byBhIHNpbmdsZSB0cmFuc2R1Y2VyLCB3aGljaCBpcyB0aGVuXG4gKiByZXR1cm5lZC4gVGhlIHZhbHVlcyB0aGF0IGFyZSBwcm9kdWNlZCBhcmUgc2VsZG9tIG9mIGNvbnNlcXVlbmNlIHRvIHRoZSBlbmRcbiAqIHVzZXI7IHRoZXNlIGZ1bmN0aW9ucyBleGlzdCB0byBiZSBwYXNzZWQgdG8gb3RoZXIgZnVuY3Rpb25zIHRoYXQgZGVhbCB3aXRoXG4gKiB0cmFuc2R1Y2Vycy5cbiAqXG4gKiBAY2FsbGJhY2sgVHJhbnNkdWNlclxuICogQG1lbWJlcm9mIG1vZHVsZTpjb3JlXG4gKiBAcGFyYW0ge21vZHVsZTpjb3JlLlRyYW5zZHVjZXJGdW5jdGlvbn0geGZvcm0gQSB0cmFuc2R1Y2VyIHRvIGNoYWluIHRoaXNcbiAqICAgICB0cmFuc2R1Y2VyIHRvLlxuICogQHJldHVybiB7bW9kdWxlOmNvcmUuVHJhbnNkdWNlckZ1bmN0aW9ufSBBIG5ldyB0cmFuc2R1Y2VyIGNvbnNpc3Rpbmcgb2YgdGhlXG4gKiAgICAgY29tcG9zaXRpb24gb2YgdGhpcyBvbmUgYW5kIGB4Zm9ybWAuXG4gKi9cblxuLyoqXG4gKiBBbiBvYmplY3QgY29udGFpbmluZyBhbGwgb2YgdGhlIG5lY2Vzc2FyeSBmdW5jdGlvbiBwcm9wZXJ0aWVzIGZvclxuICogdHJhbnNmb3JtaW5nIGRhdGEgYW5kIHRoZW4gcmVkdWNpbmcgaXQgaW50byBhbiBvdXRwdXQgdmFsdWUuIFRoaXMgaXMgdGhlIHNhbWVcbiAqIGFzIHtAbGluayBtb2R1bGU6Y29yZS5SZWR1Y2VyfFJlZHVjZXJ9IGV4Y2VwdCB0aGF0IHRoZSBgaW5pdGAgcHJvcGVydHkgaXMgbm90XG4gKiBvcHRpb25hbC5cbiAqXG4gKiBAdHlwZWRlZiBUcmFuc2R1Y2VyXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNvcmVcbiAqIEBwcm9wZXJ0eSB7bW9kdWxlOmNvcmUuSW5pdEZ1bmN0aW9ufSBTeW1ib2wuZm9yKFwidHJhbnNkdWNlci9pbml0XCIpIFRoZVxuICogICAgIHRyYW5zZHVjZXIncyBpbml0IGZ1bmN0aW9uLlxuICogQHByb3BlcnR5IHttb2R1bGU6Y29yZS5TdGVwRnVuY3Rpb259IFN5bWJvbC5mb3IoXCJ0cmFuc2R1Y2VyL3N0ZXBcIikgVGhlXG4gKiAgICAgdHJhbnNkdWNlcidzIHN0ZXAgZnVuY3Rpb24uXG4gKiBAcHJvcGVydHkge21vZHVsZTpjb3JlLlJlc3VsdEZ1bmN0aW9ufSBTeW1ib2wuZm9yKFwidHJhbnNkdWNlci9yZXN1bHRcIikgVGhlXG4gKiAgICAgdHJhbnNkdWNlcidzIHJlc3VsdCBmdW5jdGlvbi5cbiAqL1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG5cbi8qKlxuICogRnVuY3Rpb25zIHRvIGhlbHAgd2l0aCBpdGVyYXRpb24gb3ZlciBpdGVyYWJsZSBvYmplY3RzIGFuZCBwbGFpbiBvYmplY3RzLlxuICpcbiAqIEBtb2R1bGUgY29yZS9pdGVyYXRpb25cbiAqIEBwcml2YXRlXG4gKi9cblxuaW1wb3J0IHsgaXNJbXBsZW1lbnRlZCB9IGZyb20gXCJtb2R1bGVzL3Byb3RvY29sXCI7XG5pbXBvcnQgeyBpc0Z1bmN0aW9uLCBpc09iamVjdCwgaXNHZW5lcmF0b3JGdW5jdGlvbiB9IGZyb20gXCJtb2R1bGVzL3V0aWxzXCI7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBpdGVyYXRvciBvdmVyIGFuIG9iamVjdC5cbiAqXG4gKiBEZXRhaWxzIGFib3V0IHRoaXMgZnVuY3Rpb24gYXJlIGluY2x1ZGVkIGluIHRoZSBkb2N1bWVudGF0aW9uIGZvclxuICoge0BsaW5rIG1vZHVsZTp4ZHVjZS10b29scy5pdGVyYXRvcnxpdGVyYXRvcn0uXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IG9iaiBUaGUgb2JqZWN0IGJlaW5nIGl0ZXJhdGVkIG92ZXIuXG4gKiBAcGFyYW0ge21vZHVsZTp4ZHVjZS10b29scy5Tb3J0RnVuY3Rpb259IFtzb3J0Rm5dIEFuIG9wdGlvbmFsIGZ1bmN0aW9uIHVzZWQgdG8gc29ydFxuICogICAgIHRoZSBvYmplY3Qga2V5cyBiZWZvcmUgaXRlcmF0aW9uLiBJZiBpdCBpc24ndCBwcm92aWRlZCwgdGhlIGtleXMgd2lsbCBiZVxuICogICAgIHNvcnRlZCBpbiB0aGUgc2FtZSBvcmRlciBhcyBgT2JqZWN0LmtleXMob2JqKWAgd291bGQgc29ydCB0aGVtLlxuICogQHJldHVybnMge21vZHVsZTp4ZHVjZS10b29scy5JdGVyYXRvcn0gQW4gaXRlcmF0b3Igb3ZlciB0aGUgcHJvcGVydGllcyBvZiBgb2JqYC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIG9iamVjdEl0ZXJhdG9yKG9iaiwgc29ydEZuKSB7XG4gIHJldHVybiAoZnVuY3Rpb24qKCkge1xuICAgIGNvbnN0IGtleXMgPVxuICAgICAgdHlwZW9mIHNvcnRGbiA9PT0gXCJmdW5jdGlvblwiXG4gICAgICAgID8gT2JqZWN0LmtleXMob2JqKS5zb3J0KHNvcnRGbilcbiAgICAgICAgOiBPYmplY3Qua2V5cyhvYmopO1xuICAgIGxldCBpbmRleCA9IDA7XG5cbiAgICB3aGlsZSAoaW5kZXggPCBrZXlzLmxlbmd0aCkge1xuICAgICAgY29uc3QgayA9IGtleXNbaW5kZXgrK107XG4gICAgICB5aWVsZCB7IFtrXTogb2JqW2tdIH07XG4gICAgfVxuICB9KSgpO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYW4gaXRlcmF0b3Igb3ZlciBhIGZ1bmN0aW9uLlxuICpcbiAqIERldGFpbHMgYWJvdXQgdGhpcyBmdW5jdGlvbiBhcmUgaW5jbHVkZWQgaW4gdGhlIGRvY3VtZW50YXRpb24gZm9yXG4gKiB7QGxpbmsgbW9kdWxlOnhkdWNlLXRvb2xzLml0ZXJhdG9yfGl0ZXJhdG9yfS5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTp4ZHVjZS10b29scy5JdGVyYWJsZUZ1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gaXRlcmF0ZSBvdmVyLlxuICogQHJldHVybnMge21vZHVsZTp4ZHVjZS10b29scy5JdGVyYXRvcn0gQW4gaXRlcmF0b3Igb3ZlciB0aGUgcmV0dXJuIHZhbHVlcyBvZiBgZm5gLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZnVuY3Rpb25JdGVyYXRvcihmbikge1xuICByZXR1cm4gKGZ1bmN0aW9uKigpIHtcbiAgICBsZXQgY3VycmVudDtcbiAgICBsZXQgaW5kZXggPSAwO1xuXG4gICAgZm9yICg7Oykge1xuICAgICAgY3VycmVudCA9IGZuKGluZGV4KyssIGN1cnJlbnQpO1xuICAgICAgaWYgKHR5cGVvZiBjdXJyZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgeWllbGQgY3VycmVudDtcbiAgICB9XG4gIH0pKCk7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBpdGVyYXRvciBvdmVyIHRoZSBwcm92aWRlZCB2YWx1ZS5cbiAqXG4gKiBGb3IgY29sbGVjdGlvbnMgdGhhdCBpbXBsZW1lbnQgdGhlIGl0ZXJhYmxlIHByb3RvY29sLCBpdCdzIGFzIHNpbXBsZSBhc1xuICogcmV0dXJuaW5nIHRoZSBpdGVyYXRvciBhbHJlYWR5IGRlZmluZWQgZm9yIHRoYXQgY29sbGVjdGlvbi5cbiAqXG4gKiBgYGBcbiAqIGNvbnN0IGl0ZXIgPSBpdGVyYXRvcihbMSwgMiwgM10pO1xuICogY29uc29sZS5sb2coaXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IDFcbiAqIGNvbnNvbGUubG9nKGl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiAyXG4gKiBjb25zb2xlLmxvZyhpdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4gM1xuICogY29uc29sZS5sb2coaXRlci5uZXh0KCkuZG9uZSk7ICAgIC8vIC0+IHRydWVcbiAqIGBgYFxuICpcbiAqIE9iamVjdHMgYXJlIHNwZWNpYWxseSBzdXBwb3J0ZWQgdG8gcmV0dXJuIGFuIGl0ZXJhdG9yIGFzIHdlbGwsIGV2ZW4gdGhvdWdoXG4gKiB0aGV5IGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgdGhlIGl0ZXJhYmxlIHByb3RvY29sLiBUaGUgaXRlcmF0b3IncyBgbmV4dGBcbiAqIGZ1bmN0aW9uIHByb3ZpZGVzIHNpbmdsZS1wcm9wZXJ0eSBvYmplY3RzLCBvbmUgZm9yIGVhY2ggcHJvcGVydHkgaW4gdGhlXG4gKiBvcmlnaW5hbCBvYmplY3QsIG9yZGVyZWQgaW4gdGhlIHN0YW5kYXJkIHBvc3QtRVM2IG9yZGVyIGZvciBpdGVyYXRpbmcgb3ZlclxuICogb2JqZWN0IGtleXM6XG4gKlxuICogMS4gS2V5cyB0aGF0IGFyZSBpbnRlZ2VycywgaW4gYXNjZW5kaW5nIG51bWVyaWNhbCBvcmRlclxuICogMi4gQWxsIG90aGVyIHN0cmluZyBrZXlzLCBpbiB0aGUgb3JkZXIgaW4gd2hpY2ggdGhleSB3ZXJlIGFkZGVkIHRvIHRoZSBvYmplY3RcbiAqIDMuIEFsbCBzeW1ib2wga2V5cywgaW4gdGhlIG9yZGVyIGluIHdoaWNoIHRoZXkgd2VyZSBhZGRlZCB0byB0aGUgb2JqZWN0XG4gKlxuICogSWYgYSBkaWZmZXJlbnQgb3JkZXIgaXMgbmVlZGVkLCB0aGlzIGZ1bmN0aW9uIHRha2VzIGEgc2Vjb25kIGFyZ3VtZW50LCBhIHNvcnRcbiAqIGZ1bmN0aW9uLCB0aGF0IGFmZmVjdHMgb2JqZWN0cyBvbmx5LiBJdCBpcyBhIHN0YW5kYXJkIGZ1bmN0aW9uIHRoYXQgd291bGQgYmVcbiAqIHBhc3NlZCB0byBgQXJyYXkucHJvdG90eXBlLnNvcnRgIGFuZCBzb3J0cyB0aGUga2V5cyBhY2NvcmRpbmdseS5cbiAqXG4gKiBgYGBcbiAqIGNvbnN0IGFscGhhID0gKGEsIGIpID0+IChhIDwgYiA/IC0xIDogYiA8IGEgPyAxIDogMCk7XG4gKiBjb25zdCBvYmogPSB7IGM6IDEsIGE6IDIsIGI6IDMgfTtcbiAqXG4gKiBjb25zdCBvYmpJdGVyID0gaXRlcmF0b3Iob2JqKTtcbiAqIGNvbnNvbGUubG9nKG9iakl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiB7IGM6IDEgfVxuICogY29uc29sZS5sb2cob2JqSXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IHsgYTogMiB9XG4gKiBjb25zb2xlLmxvZyhvYmpJdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4geyBiOiAzIH1cbiAqXG4gKiBjb25zdCBzb3J0ZWRJdGVyID0gaXRlcmF0b3Iob2JqLCBhbHBoYSk7XG4gKiBjb25zb2xlLmxvZyhvYmpJdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4geyBhOiAyIH1cbiAqIGNvbnNvbGUubG9nKG9iakl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiB7IGI6IDMgfVxuICogY29uc29sZS5sb2cob2JqSXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IHsgYzogMSB9XG4gKiBgYGBcbiAqXG4gKiBBZGRpdGlvbmFsbHksIHRoZXJlIGlzIHNwZWNpYWwgc3VwcG9ydCBmb3IgcGFzc2luZyBhIGZ1bmN0aW9uIHRvIHRoaXNcbiAqIGZ1bmN0aW9uLiBUaGUgaXRlcmF0b3IgcmV0dXJuZWQgcnVucyB0aGF0IGZ1bmN0aW9uIGZvciBlYWNoIGNhbGwgdG8gYG5leHRgLlxuICogVGhhdCBmdW5jdGlvbiBpcyBwcm92aWRlZCB0d28gYXJndW1lbnRzOiB0aGUgaW5kZXggKHN0YXJ0aW5nIGF0IGAwYCBmb3IgdGhlXG4gKiBmaXJzdCBjYWxsIHRvIGBuZXh0YCBhbmQgaW5jcmVhc2luZyBieSAxIGZvciBlYWNoIGNhbGwgdG8gYG5leHRgIGFmdGVyKSBhbmRcbiAqIHRoZSByZXR1cm4gdmFsdWUgb2YgdGhlIHByZXZpb3VzIGNhbGwgdG8gYG5leHRgIChmb3IgdGhlIGZpcnN0IGNhbGwgdG9cbiAqIGBuZXh0YCwgdGhpcyB3aWxsIGJlIGB1bmRlZmluZWRgKS4gVGhlIGl0ZXJhdGlvbiB3aWxsIGNvbnRpbnVlIHVudGlsIHRoZVxuICogZmlyc3QgdGltZSB0aGUgaXRlcmF0ZWQgZnVuY3Rpb24gcmV0dXJucyBgdW5kZWZpbmVkYDsgYXQgdGhhdCBwb2ludCB0aGVcbiAqIGl0ZXJhdG9yIHdpbGwgdGVybWluYXRlIGFuZCByZXR1cm4gYHsgZG9uZTogdHJ1ZSB9YCBvZmYgc3Vic2VxdWVudCBgbmV4dGBcbiAqIGNhbGxzLlxuICpcbiAqIGBgYFxuICogY29uc3QgY29uc3RJdGVyID0gaXRlcmF0b3IoKCkgPT4gNik7XG4gKiBjb25zb2xlLmxvZyhjb25zdEl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiA2XG4gKiBjb25zb2xlLmxvZyhjb25zdEl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiA2XG4gKiAvLyBUaGlzIHdpbGwgY29udGludWUgZm9yZXZlciwgYXMgbG9uZyBhcyBgbmV4dGAga2VlcHMgZ2V0dGluZyBjYWxsZWRcbiAqXG4gKiBjb25zdCBpbmRleEl0ZXIgPSBpdGVyYXRvcih4ID0+IHggKiB4KTtcbiAqIGNvbnNvbGUubG9nKGluZGV4SXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IDA7XG4gKiBjb25zb2xlLmxvZyhpbmRleEl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiAxO1xuICogY29uc29sZS5sb2coaW5kZXhJdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4gNDtcbiAqIGNvbnNvbGUubG9nKGluZGV4SXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IDk7XG4gKiAvLyBUaGlzIHdpbGwgY29udGludWUgZm9yZXZlciBvciB1bnRpbCB0aGUgbnVtYmVycyBnZXQgdG9vIGJpZyBmb3JcbiAqIC8vIEphdmFTY3JpcHQgdG8gZGVhbCB3dGloXG4gKlxuICogLy8gVXNpbmcgYSBkZWZhdWx0IHZhbHVlIGZvciB0aGUgYGxhc3RgIHBhcmFtZXRlciwgd2hpY2ggc2V0cyBpdHMgdmFsdWVcbiAqIC8vIGZvciB0aGUgZmlyc3QgcnVuIHdoZW4gaXQgaXMgbm9ybWFsbHkgYHVuZGVmaW5lZGBcbiAqIGNvbnN0IGxhc3RJdGVyID0gaXRlcmF0b3IoKHgsIGxhc3QgPSAxKSA9PiBsYXN0ICogKHggKyAxKSk7IC8vIGZhY3RvcmlhbCFcbiAqIGNvbnNvbGUubG9nKGxhc3RJdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4gMVxuICogY29uc29sZS5sb2cobGFzdEl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiAyXG4gKiBjb25zb2xlLmxvZyhsYXN0SXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IDZcbiAqIGNvbnNvbGUubG9nKGxhc3RJdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4gMjRcbiAqIC8vIEFnYWluLCBydW5zIGZvcmV2ZXIsIHRob3VnaCBmYWN0b3JpYWxzIGdldCBiaWcgdmVyeSBxdWlja2x5XG4gKlxuICogLy8gSXRlcmF0b3JzIHRlcm1pbmF0ZSB3aGVuIHRoZSBmdW5jdGlvbiByZXR1cm5zIGB1bmRlZmluZWRgXG4gKiBjb25zdCBzdG9wSXRlciA9IGl0ZXJhdG9yKHggPT4geCA8IDIgPyB4IDogdW5kZWZpbmVkKTtcbiAqIGNvbnNvbGUubG9nKHN0b3BJdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4gMFxuICogY29uc29sZS5sb2coc3RvcEl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiAxXG4gKiBjb25zb2xlLmxvZyhzdG9wSXRlci5uZXh0KCkuZG9uZSk7ICAgIC8vIC0+IHRydWVcbiAqIGBgYFxuICpcbiAqIElmIHRoZSBwcm92aWRlZCB2YWx1ZSBpcyBub3QgYWN0dWFsbHkgaXRlcmFibGUgKG9yIGFuIG9iamVjdCBvciBhIGZ1bmN0aW9uKSxcbiAqIGBudWxsYCBpcyByZXR1cm5lZCBpbiBwbGFjZSBvZiB0aGUgaXRlcmF0b3IuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZS10b29sc1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY3JlYXRlIGFuIGl0ZXJhdG9yIG92ZXIuXG4gKiBAcGFyYW0ge21vZHVsZTp4ZHVjZS10b29scy5Tb3J0RnVuY3Rpb259IFtzb3J0Rm5dIEFuIG9wdGlvbmFsIHNvcnQgZnVuY3Rpb24gZm9yXG4gKiAgICAgc29ydGluZyB0aGUga2V5cyBvZiBhbiBvYmplY3QgYmVmb3JlIGl0ZXJhdGlvbi4gSXQgaXMgaWdub3JlZCBpZiBgdmFsdWVgXG4gKiAgICAgaXNuJ3QgYSBwbGFpbiBvYmplY3QuXG4gKiBAcmV0dXJucyB7bW9kdWxlOnhkdWNlLXRvb2xzLkl0ZXJhdG9yfSBBbiBpdGVyYXRvciBvdmVyIGB2YWx1ZWAuXG4gKi9cbmZ1bmN0aW9uIGl0ZXJhdG9yKHZhbHVlLCBzb3J0Rm4gPSBudWxsKSB7XG4gIHN3aXRjaCAodHJ1ZSkge1xuICAgIGNhc2UgaXNGdW5jdGlvbih2YWx1ZVtTeW1ib2wuaXRlcmF0b3JdKTpcbiAgICBjYXNlIGlzR2VuZXJhdG9yRnVuY3Rpb24odmFsdWVbU3ltYm9sLml0ZXJhdG9yXSk6XG4gICAgICByZXR1cm4gdmFsdWVbU3ltYm9sLml0ZXJhdG9yXSgpO1xuICAgIGNhc2UgaXNGdW5jdGlvbih2YWx1ZSk6XG4gICAgICByZXR1cm4gZnVuY3Rpb25JdGVyYXRvcih2YWx1ZSk7XG4gICAgY2FzZSBpc09iamVjdCh2YWx1ZSk6XG4gICAgICByZXR1cm4gb2JqZWN0SXRlcmF0b3IodmFsdWUsIHNvcnRGbik7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBwYXNzZWQgb2JqZWN0IGlzIGl0ZXJhYmxlLCBpbiB0ZXJtcyBvZiB3aGF0ICdpdGVyYWJsZSdcbiAqIG1lYW5zIHRvIHRoaXMgbGlicmFyeS4gSW4gb3RoZXIgd29yZHMsIHZhbHVlcyBpbXBsZW1lbnRpbmcgdGhlIGBpdGVyYWJsZWBcbiAqIHByb3RvY29sIGFuZCBwbGFpbiBvYmplY3RzIHJldHVybiBgdHJ1ZWAsIHdoaWxlIGV2ZXJ5dGhpbmcgZWxzZSByZXR1cm5zXG4gKiBgZmFsc2VgLiBUaGlzIGRvZXMgbm90IHJldHVybiBgdHJ1ZWAgZm9yIGZ1bmN0aW9ucyBldmVuIHRob3VnaFxuICoge0BsaW5rIG1vZHVsZTp4ZHVjZS10b29scy5pdGVyYXRvcnxpdGVyYXRvcn0gY2FuIHByb2R1Y2UgYW4gaXRlcmF0b3IgZm9yIHRoZW0sXG4gKiBiZWNhdXNlIG5vdCBhbGwgZnVuY3Rpb25zIHdvcmsgd2VsbCB3aXRoXG4gKiB7QGxpbmsgbW9kdWxlOnhkdWNlLXRvb2xzLml0ZXJhdG9yfGl0ZXJhdG9yfS5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlLXRvb2xzXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0IGZvciBpdGVyYWJpbGl0eS5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IEVpdGhlciBgdHJ1ZWAgaWYgdGhlIHZhbHVlIGlzIGl0ZXJhYmxlXG4gKiAgICAgKGB7QGxpbmsgbW9kdWxlOnhkdWNlLXRvb2xzLml0ZXJhdG9yfWAgd2lsbCByZXR1cm4gYW4gaXRlcmF0b3IgZm9yIGl0KSBvclxuICogICAgIGBmYWxzZWAgaWYgaXQgaXMgbm90LlxuICovXG5mdW5jdGlvbiBpc0l0ZXJhYmxlKHZhbHVlKSB7XG4gIHJldHVybiBpc0ltcGxlbWVudGVkKHZhbHVlLCBcIml0ZXJhdG9yXCIpIHx8IGlzT2JqZWN0KHZhbHVlKTtcbn1cblxuZXhwb3J0IHsgaXRlcmF0b3IsIGlzSXRlcmFibGUgfTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG4vKipcbiAqIFByb3RvY29scyBmb3IgaXRlcmF0aW9uIGFuZCByZWR1Y3Rpb24uXG4gKlxuICogVGhlIG5hbWVzIGZvciB0aGVzZSBwcm90b2NvbHMgY2FtZSBmcm9tIGEgZGlzY3Vzc2lvbiB0aHJlYWRcbiAqICh7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2NvZ25pdGVjdC1sYWJzL3RyYW5zZHVjZXJzLWpzL2lzc3Vlcy8yMH0pIGZyb20gYVxuICogdGltZSB3aGVuIHRyYW5zZHVjZXJzIHdlcmUgdmVyeSBtdWNoIGluIHRoZSBmb3JlZnJvbnQuIEl0J3MgdGhlIGNsb3Nlc3QgdGhpbmdcbiAqIHRoZXJlIGlzIHRvIGEgc3RhbmRhcmQsIHNvIGl0IHdhcyBhZG9wdGVkIGhlcmUuXG4gKlxuICogVGhlc2UgYXJlIHRoZSBzYW1lIHN5bWJvbHMgYXMgYXZhaWxhYmxlIGluIG15IHRyYW5zZHVjZXIgbGlicmFyeS4gVGhleSBhcmVcbiAqIHB1YmxpY2x5IGF2YWlsYWJsZSBmcm9tIHRoZXJlLlxuICpcbiAqIEBtb2R1bGUgY29yZS9wcm90b2NvbFxuICogQHByaXZhdGVcbiAqL1xuXG5pbXBvcnQgeyBpc0Z1bmN0aW9uLCBpc0dlbmVyYXRvckZ1bmN0aW9uIH0gZnJvbSBcIm1vZHVsZXMvdXRpbHNcIjtcblxuLyoqXG4gKiBUaGUgbWFwcGluZyBvZiBwcm90b2NvbCBuYW1lcyB0byB0aGVpciByZXNwZWN0aXZlIHByb3BlcnR5IGtleSBuYW1lcy4gVGhlXG4gKiB2YWx1ZXMgb2YgdGhpcyBtYXAgd2lsbCBkZXBlbmQgb24gd2hldGhlciBzeW1ib2xzIGFyZSBhdmFpbGFibGUuXG4gKlxuICogQHR5cGVkZWYge29iamVjdH0gUHJvdG9jb2xNYXBcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2UtdG9vbHNcbiAqIEBwcm9wZXJ0eSB7U3ltYm9sfSBpbml0IFRoZSBgdHJhbnNkdWNlci9pbml0YCBwcm90b2NvbC4gVGhpcyBpcyB1c2VkXG4gKiAgICAgdG8gbWFyayBmdW5jdGlvbnMgdGhhdCBpbml0aWFsaXplIGEgdGFyZ2V0IGNvbGxlY3Rpb24gYmVmb3JlIGFkZGluZyBpdGVtc1xuICogICAgIHRvIGl0LlxuICogQHByb3BlcnR5IHtTeW1ib2x9IHN0ZXAgVGhlIGB0cmFuc2R1Y2VyL3N0ZXBgIHByb3RvY29sLiBUaGlzIGlzIHVzZWRcbiAqICAgICB0byBtYXJrIGZ1bmN0aW9ucyB0aGF0IGFyZSB1c2VkIGluIHRoZSB0cmFuc2R1Y2VyJ3Mgc3RlcCBwcm9jZXNzLCB3aGVyZVxuICogICAgIG9iamVjdHMgYXJlIGFkZGVkIHRvIHRoZSB0YXJnZXQgY29sbGVjdGlvbiBvbmUgYXQgYSB0aW1lLlxuICogQHByb3BlcnR5IHtTeW1ib2x9IHJlc3VsdCBUaGUgYHRyYW5zZHVjZXIvcmVzdWx0YCBwcm90b2NvbC4gVGhpcyBpc1xuICogICAgIHVzZWQgdG8gbWFyayBmdW5jdGlvbnMgdGhhdCB0YWtlIHRoZSBmaW5hbCByZXN1bHQgb2YgdGhlIHN0ZXAgcHJvY2VzcyBhbmRcbiAqICAgICByZXR1cm4gdGhlIGZpbmFsIGZvcm0gdG8gYmUgb3V0cHV0LiBUaGlzIGlzIG9wdGlvbmFsOyBpZiB0aGUgdHJhbnNkdWNlclxuICogICAgIGRvZXMgbm90IHdhbnQgdG8gdHJhbnNmb3JtIHRoZSBmaW5hbCByZXN1bHQsIGl0IHNob3VsZCBqdXN0IHJldHVybiB0aGVcbiAqICAgICByZXN1bHQgb2YgaXRzIGNoYWluZWQgdHJhbnNkdWNlcidzIGByZXN1bHRgIGZ1bmN0aW9uLlxuICogQHByb3BlcnR5IHtTeW1ib2x9IHJlZHVjZWQgVGhlIGB0cmFuc2R1Y2VyL3JlZHVjZWRgIHByb3RvY29sLiBUaGVcbiAqICAgICBwcmVzZW5jZSBvZiB0aGlzIGtleSBvbiBhbiBvYmplY3QgaW5kaWNhdGVzIHRoYXQgaXRzIHRyYW5zZm9ybWF0aW9uIGhhc1xuICogICAgIGJlZW4gY29tcGxldGVkLiBJdCBpcyB1c2VkIGludGVybmFsbHkgdG8gbWFyayBjb2xsZWN0aW9ucyB3aG9zZVxuICogICAgIHRyYW5zZm9ybWF0aW9ucyBjb25jbHVkZSBiZWZvcmUgZXZlcnkgb2JqZWN0IGlzIGl0ZXJhdGVkIG92ZXIgKGFzIGluXG4gKiAgICAgYHtAbGluayB4ZHVjZS50YWtlfWAgdHJhbnNkdWNlcnMuKSBJdCBpcyBvZiBsaXR0bGUgdXNlIGJleW9uZCB0cmFuc2R1Y2VyXG4gKiAgICAgYXV0aG9yaW5nLlxuICogQHByb3BlcnR5IHtTeW1ib2x9IHZhbHVlIFRoZSBgdHJhbnNkdWNlci92YWx1ZWAgcHJvdG9jb2wuIFRoaXMgaXNcbiAqICAgICB1c2VkIGludGVybmFsbHkgdG8gbWFyayBwcm9wZXJ0aWVzIHRoYXQgY29udGFpbiB0aGUgdmFsdWUgb2YgYSByZWR1Y2VkXG4gKiAgICAgdHJhbnNmb3JtYXRpb24uIEl0IGlzIG9mIGxpdHRsZSB1c2UgYmV5b25kIHRyYW5zZHVjZXIgYXV0aG9yaW5nLlxuICovXG5cbi8qKlxuICogVGhlIG1hcHBpbmcgb2YgcHJvdG9jb2wgbmFtZXMgdG8gdGhlaXIgcmVzcGVjdGl2ZSBwcm9wZXJ0eSBrZXkgbmFtZXMuXG4gKlxuICogQHR5cGUge21vZHVsZTp4ZHVjZS10b29scy5Qcm90b2NvbE1hcH1cbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2UtdG9vbHNcbiAqL1xuY29uc3QgcHJvdG9jb2xzID0gT2JqZWN0LmNyZWF0ZShudWxsLCB7XG4gIGluaXQ6IHtcbiAgICB2YWx1ZTogU3ltYm9sLmZvcihcInRyYW5zZHVjZXIvaW5pdFwiKVxuICB9LFxuICBzdGVwOiB7XG4gICAgdmFsdWU6IFN5bWJvbC5mb3IoXCJ0cmFuc2R1Y2VyL3N0ZXBcIilcbiAgfSxcbiAgcmVzdWx0OiB7XG4gICAgdmFsdWU6IFN5bWJvbC5mb3IoXCJ0cmFuc2R1Y2VyL3Jlc3VsdFwiKVxuICB9LFxuICByZWR1Y2VkOiB7XG4gICAgdmFsdWU6IFN5bWJvbC5mb3IoXCJ0cmFuc2R1Y2VyL3JlZHVjZWRcIilcbiAgfSxcbiAgdmFsdWU6IHtcbiAgICB2YWx1ZTogU3ltYm9sLmZvcihcInRyYW5zZHVjZXIvdmFsdWVcIilcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIGlzSW1wbGVtZW50ZWQob2JqLCBwcm90b2NvbCkge1xuICBpZiAob2JqID09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzd2l0Y2ggKHByb3RvY29sKSB7XG4gICAgY2FzZSBcIml0ZXJhdG9yXCI6XG4gICAgICByZXR1cm4gKFxuICAgICAgICBpc0Z1bmN0aW9uKG9ialtTeW1ib2wuaXRlcmF0b3JdKSB8fFxuICAgICAgICBpc0dlbmVyYXRvckZ1bmN0aW9uKG9ialtTeW1ib2wuaXRlcmF0b3JdKVxuICAgICAgKTtcbiAgICBjYXNlIFwiYXN5bmNJdGVyYXRvclwiOlxuICAgICAgcmV0dXJuIGlzR2VuZXJhdG9yRnVuY3Rpb24ob2JqW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSk7XG4gICAgY2FzZSBcInJlZHVjZWRcIjpcbiAgICBjYXNlIFwidmFsdWVcIjpcbiAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iaikuaW5jbHVkZXMocHJvdG9jb2xzW3Byb3RvY29sXSk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBpc0Z1bmN0aW9uKG9ialtwcm90b2NvbHNbcHJvdG9jb2xdXSk7XG4gIH1cbn1cblxuZXhwb3J0IHsgcHJvdG9jb2xzLCBpc0ltcGxlbWVudGVkIH07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuLyoqXG4gKiBBIHNldCBvZiBmdW5jdGlvbnMgcmVsYXRlZCB0byB0aGUgcHJvZHVjaW5nIHJlZHVjZXIgb2JqZWN0cywgbWFya2luZ1xuICogY29tcGxldGVkIG9iamVjdHMsIGFuZCBwZXJmb3JtaW5nIGdlbmVyYWwgcmVkdWN0aW9uIG9wZXJhdGlvbnMuXG4gKlxuICogQG1vZHVsZSBjb3JlL3JlZHVjdGlvblxuICogQHByaXZhdGVcbiAqL1xuXG5pbXBvcnQgeyBpc0ltcGxlbWVudGVkLCBwcm90b2NvbHMgYXMgcCB9IGZyb20gXCJtb2R1bGVzL3Byb3RvY29sXCI7XG5pbXBvcnQgeyBpc1N0cmluZywgaXNBcnJheSwgaXNPYmplY3QsIGlzRnVuY3Rpb24gfSBmcm9tIFwibW9kdWxlcy91dGlsc1wiO1xuaW1wb3J0IHsgaXRlcmF0b3IgfSBmcm9tIFwibW9kdWxlcy9pdGVyYXRpb25cIjtcblxuLyoqXG4gKiBSZXR1cm5zIGFuIGluaXQgZnVuY3Rpb24gZm9yIGEgY29sbGVjdGlvbi4gVGhpcyBpcyBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhXG4gKiBuZXcsIGVtcHR5IGluc3RhbmNlIG9mIHRoZSBjb2xsZWN0aW9uIGluIHF1ZXN0aW9uLiBJZiB0aGUgY29sbGVjdGlvbiBkb2Vzbid0XG4gKiBzdXBwb3J0IHJlZHVjdGlvbiwgYG51bGxgIGlzIHJldHVybmVkLiBUaGlzIG1ha2VzIGNvbmRpdGlvbmFscyBhIGJpdCBlYXNpZXJcbiAqIHRvIHdvcmsgd2l0aC5cbiAqXG4gKiBJbiBvcmRlciB0byBzdXBwb3J0IHRoZSBjb252ZXJzaW9uIG9mIGZ1bmN0aW9ucyBpbnRvIHJlZHVjZXJzLCBmdW5jdGlvblxuICogc3VwcG9ydCBpcyBhbHNvIHByb3ZpZGVkLlxuICpcbiAqIEBwYXJhbSB7Kn0gY29sbGVjdGlvbiBBIGNvbGxlY3Rpb24gdG8gY3JlYXRlIGFuIGluaXQgZnVuY3Rpb24gZm9yLiBUaGlzIGNhblxuICogICAgIGJlIGFueXRoaW5nIHRoYXQgc3VwcG9ydHMgdGhlIGl0ZXJhdGlvbiBwcm90b2NvbCBvciBhIHBsYWluIG9iamVjdC5cbiAqIEByZXR1cm4ge21vZHVsZTp4ZHVjZS10b29scy5Jbml0RnVuY3Rpb259IEEgZnVuY3Rpb24gdGhhdCwgd2hlbiBjYWxsZWQsIHJldHVybnMgYW5cbiAqICAgICBpbml0aWFsIHZlcnNpb24gb2YgdGhlIHByb3ZpZGVkIGNvbGxlY3Rpb24uIElmIHRoZSBwcm92aWRlZCBjb2xsZWN0aW9uIGlzXG4gKiAgICAgbm90IGl0ZXJhYmxlLCB0aGVuIGBudWxsYCBpcyByZXR1cm5lZC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGluaXQoY29sbGVjdGlvbikge1xuICBzd2l0Y2ggKHRydWUpIHtcbiAgICBjYXNlIGlzSW1wbGVtZW50ZWQoY29sbGVjdGlvbiwgXCJpbml0XCIpOlxuICAgICAgcmV0dXJuIGNvbGxlY3Rpb25bcC5pbml0XTtcbiAgICBjYXNlIGlzU3RyaW5nKGNvbGxlY3Rpb24pOlxuICAgICAgcmV0dXJuICgpID0+IFwiXCI7XG4gICAgY2FzZSBpc0FycmF5KGNvbGxlY3Rpb24pOlxuICAgICAgcmV0dXJuICgpID0+IFtdO1xuICAgIGNhc2UgaXNPYmplY3QoY29sbGVjdGlvbik6XG4gICAgICByZXR1cm4gKCkgPT4gKHt9KTtcbiAgICBjYXNlIGlzRnVuY3Rpb24oY29sbGVjdGlvbik6XG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICB0aHJvdyBFcnJvcihcImluaXQgbm90IGF2YWlsYWJsZVwiKTtcbiAgICAgIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbi8qKlxuICogUmV0dXJucyBhIHN0ZXAgZnVuY3Rpb24gZm9yIGEgY29sbGVjdGlvbi4gVGhpcyBpcyBhIGZ1bmN0aW9uIHRoYXQgdGFrZXMgYW5cbiAqIGFjY3VtdWxhdG9yIGFuZCBhIHZhbHVlIGFuZCByZXR1cm5zIHRoZSByZXN1bHQgb2YgcmVkdWNpbmcgdGhlIHZhbHVlIGludG8gdGhlXG4gKiBhY2N1bXVsYXRvci4gSWYgdGhlIGNvbGxlY3Rpb24gZG9lc24ndCBzdXBwb3J0IHJlZHVjdGlvbiwgYG51bGxgIGlzIHJldHVybmVkLlxuICogVGhlIHJldHVybmVkIGZ1bmN0aW9uIGl0c2VsZiBzaW1wbHkgcmVkdWNlcyB0aGUgaW5wdXQgaW50byB0aGUgdGFyZ2V0XG4gKiBjb2xsZWN0aW9uIHdpdGhvdXQgbW9kaWZ5aW5nIGl0LlxuICpcbiAqIEluIG9yZGVyIHRvIHN1cHBvcnQgdGhlIGNvbnZlcnNpb24gb2YgZnVuY3Rpb25zIGludG8gcmVkdWNlcnMsIGZ1bmN0aW9uXG4gKiBzdXBwb3J0IGlzIGFsc28gcHJvdmlkZWQuXG4gKlxuICogQHBhcmFtIHsqfSBjb2xsZWN0aW9uIEEgY29sbGVjdGlvbiB0byBjcmVhdGUgYSBzdGVwIGZ1bmN0aW9uIGZvci4gVGhpcyBjYW4gYmVcbiAqICAgICBhbnl0aGluZyB0aGF0IHN1cHBvcnRzIHRoZSBpdGVyYXRpb24gcHJvdG9jb2wsIGEgcGxhaW4gb2JqZWN0LCBvciBhXG4gKiAgICAgZnVuY3Rpb24uXG4gKiBAcmV0dXJuIHttb2R1bGU6eGR1Y2UtdG9vbHMuU3RlcEZ1bmN0aW9ufSBBIHJlZHVjdGlvbiBmdW5jdGlvbiBmb3IgdGhlIHByb3ZpZGVkXG4gKiAgICAgY29sbGVjdGlvbiB0aGF0IHNpbXBseSBhZGRzIGFuIGVsZW1lbnQgdG8gdGhlIHRhcmdldCBjb2xsZWN0aW9uIHdpdGhvdXRcbiAqICAgICBtb2RpZnlpbmcgaXQuIElmIHRoZSBwcm92aWRlZCBjb2xsZWN0aW9uIGlzIG5vdCBpdGVyYWJsZSwgYG51bGxgIGlzXG4gKiAgICAgcmV0dXJuZWQuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBzdGVwKGNvbGxlY3Rpb24pIHtcbiAgc3dpdGNoICh0cnVlKSB7XG4gICAgY2FzZSBpc0ltcGxlbWVudGVkKGNvbGxlY3Rpb24sIFwic3RlcFwiKTpcbiAgICAgIHJldHVybiBjb2xsZWN0aW9uW3Auc3RlcF07XG5cbiAgICBjYXNlIGlzU3RyaW5nKGNvbGxlY3Rpb24pOlxuICAgICAgcmV0dXJuIChhY2MsIGlucHV0KSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gaXNPYmplY3QoaW5wdXQpID8gaW5wdXRbT2JqZWN0LmtleXMoaW5wdXQpWzBdXSA6IGlucHV0O1xuICAgICAgICByZXR1cm4gYWNjICsgdmFsdWU7XG4gICAgICB9O1xuXG4gICAgY2FzZSBpc0FycmF5KGNvbGxlY3Rpb24pOlxuICAgICAgcmV0dXJuIChhY2MsIGlucHV0KSA9PiB7XG4gICAgICAgIGFjYy5wdXNoKGlucHV0KTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH07XG5cbiAgICBjYXNlIGlzT2JqZWN0KGNvbGxlY3Rpb24pOlxuICAgICAgcmV0dXJuIChhY2MsIGlucHV0KSA9PiB7XG4gICAgICAgIGxldCB2YWx1ZSA9IGlucHV0O1xuXG4gICAgICAgIGlmICghaXNPYmplY3QoaW5wdXQpKSB7XG4gICAgICAgICAgLy8gaWYgdGhlIGlucHV0IGlzbid0IGFuIG9iamVjdCwgdHVybiBpdCBpbnRvIGFuIG9iamVjdCB3aXRoIGFcbiAgICAgICAgICAvLyBudW1lcmljYWwga2V5IG9uZSBncmVhdGVyIHRoYW4gdGhlIG1heCBrZXkgYWxyZWFkeSBpbiB0aGVcbiAgICAgICAgICAvLyBhY2N1bXVsYXRvclxuICAgICAgICAgIGNvbnN0IG1heCA9IE9iamVjdC5rZXlzKGFjYykucmVkdWNlKChhLCBiKSA9PiBNYXRoLm1heChhLCBiKSwgLTEpO1xuICAgICAgICAgIHZhbHVlID0geyBbbWF4ICsgMV06IGlucHV0IH07XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBrID0gT2JqZWN0LmtleXModmFsdWUpWzBdO1xuICAgICAgICBhY2Nba10gPSB2YWx1ZVtrXTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH07XG5cbiAgICBjYXNlIGlzRnVuY3Rpb24oY29sbGVjdGlvbik6XG4gICAgICByZXR1cm4gKGFjYywgaW5wdXQpID0+IGNvbGxlY3Rpb24oYWNjLCBpbnB1dCk7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgcmVzdWx0IGZ1bmN0aW9uIGZvciBhIGNvbGxlY3Rpb24uIFRoaXMgaXMgYSBmdW5jdGlvbiB0aGF0IHBlcmZvcm1zXG4gKiBhbnkgZmluYWwgcHJvY2Vzc2luZyB0aGF0IHNob3VsZCBiZSBkb25lIG9uIHRoZSByZXN1bHQgb2YgYSByZWR1Y3Rpb24uIElmIHRoZVxuICogY29sbGVjdGlvbiBkb2Vzbid0IHN1cHBvcnQgcmVkdWN0aW9uLCBgbnVsbGAgaXMgcmV0dXJuZWQuXG4gKlxuICogSW4gb3JkZXIgdG8gc3VwcG9ydCB0aGUgY29udmVyc2lvbiBvZiBmdW5jdGlvbnMgaW50byByZWR1Y2VycywgZnVuY3Rpb25cbiAqIHN1cHBvcnQgaXMgYWxzbyBwcm92aWRlZC5cbiAqXG4gKiBAcGFyYW0geyp9IGNvbGxlY3Rpb24gQSBjb2xsZWN0aW9uIHRvIGNyZWF0ZSBhIHN0ZXAgZnVuY3Rpb24gZm9yLiBUaGlzIGNhbiBiZVxuICogICAgIGFueXRoaW5nIHRoYXQgc3VwcG9ydHMgdGhlIGl0ZXJhdGlvbiBwcm90b2NvbCwgYSBwbGFpbiBvYmplY3QsIG9yIGFcbiAqICAgICBmdW5jdGlvbi5cbiAqIEByZXR1cm4ge21vZHVsZTp4ZHVjZS10b29scy5SZXN1bHRGdW5jdGlvbn0gQSBmdW5jdGlvbiB0aGF0LCB3aGVuIGdpdmVuIGEgcmVkdWNlZFxuICogICAgIGNvbGxlY3Rpb24sIHByb2R1Y2VzIHRoZSBmaW5hbCBvdXRwdXQuIElmIHRoZSBwcm92aWRlZCBjb2xsZWN0aW9uIGlzIG5vdFxuICogICAgIGl0ZXJhYmxlLCBgbnVsbGAgd2lsbCBiZSByZXR1cm5lZC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHJlc3VsdChjb2xsZWN0aW9uKSB7XG4gIHN3aXRjaCAodHJ1ZSkge1xuICAgIGNhc2UgaXNJbXBsZW1lbnRlZChjb2xsZWN0aW9uLCBcInJlc3VsdFwiKTpcbiAgICAgIHJldHVybiBjb2xsZWN0aW9uW3AucmVzdWx0XTtcbiAgICBjYXNlIGlzU3RyaW5nKGNvbGxlY3Rpb24pOlxuICAgIGNhc2UgaXNBcnJheShjb2xsZWN0aW9uKTpcbiAgICBjYXNlIGlzT2JqZWN0KGNvbGxlY3Rpb24pOlxuICAgIGNhc2UgaXNGdW5jdGlvbihjb2xsZWN0aW9uKTpcbiAgICAgIHJldHVybiB2YWx1ZSA9PiB2YWx1ZTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgcmVkdWNlciBvYmplY3QgZnJvbSBhIGZ1bmN0aW9uIG9yIGZyb20gYSBidWlsdC1pbiByZWR1Y2libGUgdHlwZVxuICogKGFycmF5LCBvYmplY3QsIG9yIHN0cmluZykuXG4gKlxuICogVG8gY3JlYXRlIGEgcmVkdWNlciBmb3IgYXJyYXlzLCBvYmplY3RzLCBvciBzdHJpbmdzLCBzaW1wbHkgcGFzcyBhbiBlbXB0eVxuICogdmVyc2lvbiBvZiB0aGF0IGNvbGxlY3Rpb24gdG8gdGhpcyBmdW5jdGlvbiAoZS5nLiwgYHRvUmVkdWNlcihbXSlgKS5cbiAqXG4gKiBUaGUgbm90YWJsZSB1c2UgZm9yIHRoaXMgZnVuY3Rpb24gdGhvdWdoIGlzIHRvIHR1cm4gYSByZWR1Y3Rpb24gZnVuY3Rpb24gaW50b1xuICogYSByZWR1Y2VyIG9iamVjdC4gVGhlIGZ1bmN0aW9uIGlzIGEgZnVuY3Rpb24gb2YgdHdvIHBhcmFtZXRlcnMsIGFuXG4gKiBhY2N1bXVsYXRvciBhbmQgYSB2YWx1ZSwgYW5kIHJldHVybnMgdGhlIGFjY3VtdWxhdG9yIHdpdGggdGhlIHZhbHVlIGluIGl0LlxuICogVGhpcyBpcyBleGFjdGx5IHRoZSBzYW1lIGtpbmQgb2YgZnVuY3Rpb24gdGhhdCBpcyBwYXNzZWQgdG8gcmVkdWN0aW9uXG4gKiBmdW5jdGlvbnMgbGlrZSBKYXZhU2NyaXB0J3MgYEFycmF5LnByb3RvdHlwZS5yZWR1Y2VgIGFuZCBMb2Rhc2gncyBgXy5yZWR1Y2VgLlxuICpcbiAqIE5vdGUgaW4gcGFydGljdWxhciB0aGF0IHRoZSBvdXRwdXQgb2YgdGhpcyByZWR1Y2VyIGRvZXMgbm90IG5lZWQgdG8gYmUgYVxuICogY29sbGVjdGlvbi4gSXQgY2FuIGJlIGFueXRoaW5nLiBXaGlsZSB0cmFuc2R1Y2luZyBub3JtYWxseSBpbnZvbHZlc1xuICogdHJhbnNmb3JtaW5nIG9uZSBjb2xsZWN0aW9uIGludG8gYW5vdGhlciwgaXQgbmVlZCBub3QgYmUgc28uIEZvciBleGFtcGxlLFxuICogaGVyZSBpcyBhIHJlZHVjZXIgdGhhdCB3aWxsIHJlc3VsdCBpbiBzdW1taW5nIG9mIHRoZSBjb2xsZWN0aW9uIHZhbHVlcy5cbiAqXG4gKiBgYGBcbiAqIGltcG9ydCB7IHRvUmVkdWNlciwgcmVkdWNlIH0gZnJvbSBcIkBjaGFua28veGR1Y2VcIjtcbiAqXG4gKiBjb25zdCBzdW1SZWR1Y2VyID0gdG9SZWR1Y2VyKChhY2MsIGlucHV0KSA9PiBhY2MgKyBpbnB1dCk7XG4gKiBjb25zdCBzdW0gPSByZWR1Y2UoWzEsIDIsIDMsIDQsIDVdLCBzdW1SZWR1Y2VyLCAwKTtcbiAqIGNvbnNvbGUubG9nKHN1bSk7ICAgLy8gLT4gMTVcbiAqIGBgYFxuICpcbiAqIFRoaXMgY2FuIGJlIGNvbWJpbmVkIHdpdGggdHJhbnNkdWNlcnMgYXMgd2VsbCwgYXMgaW4gdGhpcyBjYWxjdWxhdGlvbiBvZiB0aGVcbiAqIHN1bSBvZiB0aGUgKnNxdWFyZXMqIG9mIHRoZSBjb2xsZWN0aW9uIHZhbHVlcy5cbiAqXG4gKiBgYGBcbiAqIGltcG9ydCB7IHRvUmVkdWNlciwgdHJhbnNkdWNlIH0gZnJvbSBcIkBjaGFua28veGR1Y2VcIjtcbiAqIGltcG9ydCB7IG1hcCB9IGZyb20gXCJAY2hhbmtvL3RyYW5zZHVjZXJzXCI7XG4gKlxuICogY29uc3Qgc3VtUmVkdWNlciA9IHRvUmVkdWNlcigoYWNjLCBpbnB1dCkgPT4gYWNjICsgaW5wdXQpO1xuICogY29uc3Qgc3VtID0gdHJhbnNkdWNlKFsxLCAyLCAzLCA0LCA1XSwgbWFwKHggPT4geCAqIHgpLCBzdW1SZWR1Y2VyLCAwKTtcbiAqIGNvbnNvbGUubG9nKHN1bSk7ICAgLy8gLT4gNTVcbiAqIGBgYFxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2UtdG9vbHNcbiAqIEBwYXJhbSB7Kn0gY29sbGVjdGlvbiBBbiBpdGVyYWJsZSBjb2xsZWN0aW9uIG9yIGEgcmVkdWNlciBmdW5jdGlvbi5cbiAqIEByZXR1cm4ge29iamVjdH0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgcHJvdG9jb2wgcHJvcGVydGllcyBmb3IgaW5pdCwgc3RlcCwgYW5kXG4gKiAgICAgcmVzdWx0LiBUaGlzIG9iamVjdCBpcyBzdWl0YWJsZSBmb3IgdXNlIGFzIGEgcmVkdWNlciBvYmplY3QgKG9uZSBwcm92aWRlZFxuICogICAgIHRvIGB7QGxpbmsgeGR1Y2UucmVkdWNlfHJlZHVjZX1gIG9yIGB7QGxpbmsgeGR1Y2UudHJhbnNkdWNlfHRyYW5zZHVjZX1gKS5cbiAqICAgICBJZiB0aGUgcHJvdmlkZWQgY29sbGVjdGlvbiBpcyBub3QgaXRlcmFibGUsIGFsbCBvZiB0aGUgcHJvcGVydGllcyBvZiB0aGlzXG4gKiAgICAgb2JqZWN0IHdpbGwgYmUgYG51bGxgLlxuICovXG5mdW5jdGlvbiB0b1JlZHVjZXIoY29sbGVjdGlvbikge1xuICByZXR1cm4gT2JqZWN0LmZyZWV6ZSh7XG4gICAgW3AuaW5pdF06IGluaXQoY29sbGVjdGlvbiksXG4gICAgW3Auc3RlcF06IHN0ZXAoY29sbGVjdGlvbiksXG4gICAgW3AucmVzdWx0XTogcmVzdWx0KGNvbGxlY3Rpb24pXG4gIH0pO1xufVxuXG4vKipcbiAqIEEgcmVkdWNlciBvYmplY3QgZm9yIGFycmF5cy5cbiAqXG4gKiBAdHlwZSB7bW9kdWxlOnhkdWNlLXRvb2xzLlJlZHVjZXJ9XG4gKiBAcHJpdmF0ZVxuICovXG5jb25zdCBBUlJBWV9SRURVQ0VSID0gdG9SZWR1Y2VyKFtdKTtcblxuLyoqXG4gKiBBIHJlZHVjZXIgb2JqZWN0IGZvciBvYmplY3RzLlxuICpcbiAqIEB0eXBlIHttb2R1bGU6eGR1Y2UtdG9vbHMuUmVkdWNlcn1cbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IE9CSkVDVF9SRURVQ0VSID0gdG9SZWR1Y2VyKHt9KTtcblxuLyoqXG4gKiBBIHJlZHVjZXIgb2JqZWN0IGZvciBzdHJpbmdzLlxuICpcbiAqIEB0eXBlIHttb2R1bGU6eGR1Y2UtdG9vbHMuUmVkdWNlcn1cbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IFNUUklOR19SRURVQ0VSID0gdG9SZWR1Y2VyKFwiXCIpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSB0cmFuc2R1Y2VyIGZyb20gYSBmdW5jdGlvbiBhbmQgYSB0cmFuc2R1Y2VyIHRvIGNoYWluIGl0IHRvLlxuICpcbiAqIFRoaXMgaXMgaW4gbW9zdCByZXNwZWN0cyBqdXN0IGxpa2Uge0BsaW5rIG1vZHVsZTp4ZHVjZS10b29scy50b1JlZHVjZXJ8dG9SZWR1Y2VyfSxcbiAqIHdpdGggdHdvIG5vdGFibGUgZGlmZmVyZW5jZXMuIE9uZSBpcyB0aGF0IGl0IHJlcXVpcmVzIGEgdHJhbnNkdWNlciB0byBjaGFpblxuICogdG8sIGFuZCBpdCBkb2VzIHRoZSBjaGFpbmluZyBhcyBhIHBhcnQgb2YgY3JlYXRpbmcgdGhlIG5ldyB0cmFuc2R1Y2VyLiBUaGVcbiAqIG90aGVyIGlzIHRoYXQgaXQgaW5jbHVkZXMgYSB1c2FibGUgYGluaXRgIGZ1bmN0aW9uLCB3aGVyZSBwYXNzaW5nIGEgZnVuY3Rpb25cbiAqIHRvIHtAbGluayBtb2R1bGU6eGR1Y2UtdG9vbHMudG9SZWR1Y2VyfHRvUmVkdWNlcn0gd291bGQgY3JlYXRlIGFuIGluaXQgZnVuY3Rpb24gdGhhdFxuICogdGhyb3dzIGFuIGVycm9yIGlmIGl0J3MgY2FsbGVkLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gYXBwbGllcyB0aGUgZ2l2ZW4gZnVuY3Rpb24gYXMgdGhlIGBzdGVwYCBmdW5jdGlvbiBvZiB0aGVcbiAqIHJldHVybmVkIHRyYW5zZHVjZXIsIGFuZCB0aGUgYGluaXRgIGFuZCBgcmVzdWx0YCBmdW5jdGlvbnMgc2ltcGx5IGNhbGwgdGhlXG4gKiBzYW1lIGZ1bmN0aW9ucyBpbiB0aGUgbmV4dCB0cmFuc2R1Y2VyIGRvd24gdGhlIGNoYWluLiBUaGlzIGlzIHByZWNpc2VseSB3aGF0XG4gKiAqbW9zdCogdHJhbnNkdWNlcnMgd2FudC4uLmBpbml0YCBhbmQgYHJlc3VsdGAgZnVuY3Rpb25zIGFyZSBub3JtYWxseSBoYW5kbGVkXG4gKiBieSB0aGUgcmVkdWNlciBhdCB0aGUgZW5kIG9mIHRoZSB0cmFuc2R1Y2VyIGNoYWluLi4uYnV0IGluIHRoZSByYXJlIGNhc2Ugd2hlblxuICogYGluaXRgIG9yIGByZXN1bHRgIG11c3QgZG8gbW9yZSB0aGFuIHRoaXMsIHRoZSB0cmFuc2R1Y2VyIG11c3QgYmUgY3JlYXRlZFxuICogbWFudWFsbHkuXG4gKlxuICogVGhpcyBmdW5jdGlvbiBkb2VzIG5vdCBhdXRvbWF0aWNhbGx5IGNoYWluIHRoZSBgc3RlcGAgZnVuY3Rpb24gdG8gdGhlIG5leHRcbiAqIG9uZSBkb3duIHRoZSBsaW5lLCBhcyB0aGF0IGNhbiBiZSBkb25lIGluIGFueSBudW1iZXIgb2YgZGlmZmVyZW50IHdheXMuIFRodXNcbiAqIHRoZSBmdW5jdGlvbiBpdHNlbGYgc2hvdWxkIGNhbGwgdGhlIGBzdGVwYCBmdW5jdGlvbiBpbiBgeGZvcm1gIGluIHdoYXRldmVyXG4gKiB3YXkgaXMgYXBwcm9wcmlhdGUuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZS10b29sc1xuICogQHBhcmFtIHttb2R1bGU6eGR1Y2UtdG9vbHMuU3RlcEZ1bmN0aW9ufSBmbiBUaGUgc3RlcCBmdW5jdGlvbiBmb3IgdGhlIHRyYW5zZHVjZXIuXG4gKiBAcGFyYW0ge21vZHVsZTp4ZHVjZS10b29scy5UcmFuc2R1Y2VyfSB4Zm9ybSBUaGUgbmV4dCB0cmFuc2R1Y2VyIG9iamVjdCBpbiB0aGVcbiAqICAgICBjaGFpbi5cbiAqIEByZXR1cm5zIHttb2R1bGU6eGR1Y2UtdG9vbHMuVHJhbnNkdWNlcn0gQSBuZXcgdHJhbnNkdWNlciwgY2hhaW5pbmcgdGhlIHN1cHBsaWVkXG4gKiAgICAgZnVuY3Rpb24gdG8gdGhlIHN1cHBsaWVkIHRyYW5zZHVjZXIuXG4gKi9cbmZ1bmN0aW9uIHRvVHJhbnNkdWNlcihmbiwgeGZvcm0pIHtcbiAgcmV0dXJuIHtcbiAgICBbcC5pbml0XSgpIHtcbiAgICAgIHJldHVybiB4Zm9ybVtwLmluaXRdKCk7XG4gICAgfSxcblxuICAgIFtwLnN0ZXBdOiBmbixcblxuICAgIFtwLnJlc3VsdF0odmFsdWUpIHtcbiAgICAgIHJldHVybiB4Zm9ybVtwLnJlc3VsdF0odmFsdWUpO1xuICAgIH1cbiAgfTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgcmVkdWN0aW9uIGZ1bmN0aW9uIGZyb20gYSB0cmFuc2R1Y2VyIGFuZCBhIHJlZHVjZXIuXG4gKlxuICogVGhpcyBwcm9kdWNlcyBhIGZ1bmN0aW9uIHRoYXQncyBzdWl0YWJsZSBmb3IgYmVpbmcgcGFzc2VkIGludG8gb3RoZXJcbiAqIGxpYnJhcmllcycgcmVkdWNlIGZ1bmN0aW9ucywgc3VjaCBhcyBKYXZhU2NyaXB0J3MgYEFycmF5LnByb3RvdHlwZS5yZWR1Y2VgIG9yXG4gKiBMb2Rhc2gncyBgXy5yZWR1Y2VgLiBJdCByZXF1aXJlcyBib3RoIGEgdHJhbnNmb3JtZXIgYW5kIGEgcmVkdWNlciBiZWNhdXNlXG4gKiByZWR1Y3Rpb24gZnVuY3Rpb25zIGZvciB0aG9zZSBsaWJyYXJpZXMgbXVzdCBrbm93IGhvdyB0byBkbyBib3RoLiBUaGUgcmVkdWNlclxuICogY2FuIGJlIGEgc3RhbmRhcmQgcmVkdWNlciBvYmplY3QgbGlrZSB0aGUgb25lcyBzZW50XG4gKiB0b2B7QGxpbmsgbW9kdWxlOnhkdWNlLXRvb2xzLnRyYW5zZHVjZXx0cmFuc2R1Y2V9YCBvclxuICogYHtAbGluayBtb2R1bGU6eGR1Y2UtdG9vbHMucmVkdWNlfHJlZHVjZX1gLCBvciBpdCBjYW4gYmUgYSBwbGFpbiBmdW5jdGlvbiB0aGF0IHRha2VzXG4gKiB0d28gcGFyYW1ldGVycyBhbmQgcmV0dXJucyB0aGUgcmVzdWx0IG9mIHJlZHVjaW5nIHRoZSBzZWNvbmQgcGFyYW1ldGVyIGludG9cbiAqIHRoZSBmaXJzdC5cbiAqXG4gKiBJZiB0aGVyZSBpcyBubyBuZWVkIGZvciBhIHRyYW5zZm9ybWF0aW9uLCB0aGVuIHBhc3MgaW4gdGhlXG4gKiBge0BsaW5rIG1vZHVsZTp0cmFuc2R1Y2Vycy5pZGVudGl0eXxpZGVudGl0eX1gIHRyYW5zZHVjZXIuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZS10b29sc1xuICogQHBhcmFtIHttb2R1bGU6eGR1Y2UtdG9vbHMuUmVkdWNlcn0geGZvcm0gQSB0cmFuc2R1Y2VyIG9iamVjdCB3aG9zZSBzdGVwIGZ1bmN0aW9uXG4gKiAgICAgd2lsbCBiZWNvbWUgdGhlIHJldHVybmVkIHJlZHVjdGlvbiBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7KG1vZHVsZTp4ZHVjZS10b29scy5TdGVwRnVuY3Rpb258bW9kdWxlOnhkdWNlLXRvb2xzLlJlZHVjZXIpfSByZWR1Y2VyIEEgcmVkdWNlclxuICogICAgIHRoYXQga25vd3MgaG93IHRvIHJlZHVjZSB2YWx1ZXMgaW50byBhbiBvdXRwdXQgY29sbGVjdGlvbi4gVGhpcyBjYW5cbiAqICAgICBlaXRoZXIgYmUgYSByZWR1Y2luZyBmdW5jdGlvbiBvciBhIHRyYW5zZHVjZXIgb2JqZWN0IHdob3NlIGBzdGVwYFxuICogICAgIGZ1bmN0aW9uIGtub3dzIGhvdyB0byBwZXJmb3JtIHRoaXMgcmVkdWN0aW9uLlxuICogQHJldHVybnMge21vZHVsZTp4ZHVjZS10b29scy5TdGVwRnVuY3Rpb259IEEgZnVuY3Rpb24gdGhhdCBoYW5kbGVzIGJvdGggdGhlXG4gKiAgICAgdHJhbnNmb3JtYXRpb24gYW5kIHRoZSByZWR1Y3Rpb24gb2YgYSB2YWx1ZSBvbnRvIGEgdGFyZ2V0IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiB0b0Z1bmN0aW9uKHhmb3JtLCByZWR1Y2VyKSB7XG4gIGNvbnN0IHIgPSB0eXBlb2YgcmVkdWNlciA9PT0gXCJmdW5jdGlvblwiID8gdG9SZWR1Y2VyKHJlZHVjZXIpIDogcmVkdWNlcjtcbiAgY29uc3QgcmVzdWx0ID0geGZvcm0ocik7XG4gIHJldHVybiByZXN1bHRbcC5zdGVwXS5iaW5kKHJlc3VsdCk7XG59XG5cbi8qKlxuICogTWFya3MgYSB2YWx1ZSBhcyBjb21wbGV0ZS5cbiAqXG4gKiBUaGlzIGlzIGRvbmUgYnkgd3JhcHBpbmcgdGhlIHZhbHVlLiBUaGlzIG1lYW5zIHRocmVlIHRoaW5nczogZmlyc3QsIGFcbiAqIGNvbXBsZXRlIG9iamVjdCBtYXkgYmUgbWFya2VkIGFzIGNvbXBsZXRlIGFnYWluOyBzZWNvbmQsIGEgY29tcGxldGUgdmFsdWVcbiAqIGlzbid0IHVzYWJsZSB3aXRob3V0IGJlaW5nIHVuY29tcGxldGVkIGZpcnN0OyBhbmQgdGhpcmQgYW55IHR5cGUgb2YgdmFsdWVcbiAqIChpbmNsdWRpbmcgYHVuZGVmaW5lZGApIG1heSBiZSBtYXJrZWQgYXMgY29tcGxldGUuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZS10b29sc1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gYmUgY29tcGxldGVkLlxuICogQHJldHVybiB7Kn0gQSBjb21wbGV0ZWQgdmVyc2lvbiBvZiB0aGUgcHJvdmlkZWQgdmFsdWUuIFRoaXMgcmVkdWN0aW9uIGlzXG4gKiAgICAgYWNoaWV2ZWQgYnkgd3JhcHBpbmcgdGhlIHZhbHVlIGluIGEgbWFya2VyIG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gY29tcGxldGUodmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBbcC5yZWR1Y2VkXTogdHJ1ZSxcbiAgICBbcC52YWx1ZV06IHZhbHVlXG4gIH07XG59XG5cbi8qKlxuICogUmVtb3ZlcyB0aGUgY29tcGxldGUgc3RhdHVzIGZyb20gYSBjb21wbGV0ZWQgdmFsdWUuXG4gKlxuICogVGhpcyBmdW5jdGlvbiBpcyBpbnRlbmRlZCB0byBiZSB1c2VkIHdoZW4gaXQncyBjZXJ0YWluIHRoYXQgYSB2YWx1ZSBpc1xuICogYWxyZWFkeSBtYXJrZWQgYXMgY29tcGxldGUuIElmIGl0IGlzIG5vdCwgYHVuZGVmaW5lZGAgd2lsbCBiZSByZXR1cm5lZFxuICogaW5zdGVhZCBvZiB0aGUgdmFsdWUuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZS10b29sc1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gYmUgdW5jb21wbGV0ZWQuXG4gKiBAcmV0dXJuIHsqfSBBbiB1bmNvbXBsZXRlZCB2ZXJzaW9uIG9mIHRoZSBwcm92aWRlZCB2YWx1ZS4gSWYgdGhlIHZhbHVlIHdhc1xuICogICAgIG5vdCBjb21wbGV0ZSBpbiB0aGUgZmlyc3QgcGxhY2UsIGB1bmRlZmluZWRgIHdpbGwgYmUgcmV0dXJuZWQgaW5zdGVhZC5cbiAqL1xuZnVuY3Rpb24gdW5jb21wbGV0ZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWU/LltwLnZhbHVlXTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgYSB2YWx1ZSBpcyBtYXJrZWQgYXMgY29tcGxldGUuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZS10b29sc1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gdGVzdCBmb3IgaXRzIGNvbXBsZXRlIHN0YXR1cy5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IEVpdGhlciBgdHJ1ZWAgaWYgdGhlIHZhbHVlIGlzIGNvbXBsZXRlLCBvciBgZmFsc2VgIGlmIGl0IGlzXG4gKiAgICAgbm90LlxuICovXG5mdW5jdGlvbiBpc0NvbXBsZXRlZCh2YWx1ZSkge1xuICByZXR1cm4gISF2YWx1ZT8uW3AucmVkdWNlZF07XG59XG5cbi8qKlxuICogTWFrZXMgc3VyZSB0aGF0IGEgdmFsdWUgaXMgbWFya2VkIGFzIGNvbXBsZXRlOyBpZiBpdCBpcyBub3QsIGl0IHdpbGwgYmVcbiAqIG1hcmtlZCBhcyBjb21wbGV0ZS5cbiAqXG4gKiBUaGlzIGRpZmZlcnMgZnJvbSB7QGxpbmsgbW9kdWxlOnhkdWNlLXRvb2xzLmNvbXBsZXRlfGNvbXBsZXRlfSBpbiB0aGF0IGlmIHRoZSB2YWx1ZVxuICogaXMgYWxyZWFkeSBjb21wbGV0ZSwgdGhpcyBmdW5jdGlvbiB3b24ndCBjb21wbGV0ZSBpdCBhZ2Fpbi4gVGhlcmVmb3JlIHRodXNcbiAqIGZ1bmN0aW9uIGNhbid0IGJlIHVzZWQgdG8gbWFrZSBhIHZhbHVlIGNvbXBsZXRlIG11bHRpcGxlIHRpbWVzLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2UtdG9vbHNcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGJlIGNvbXBsZXRlZC5cbiAqIEByZXR1cm4geyp9IElmIHRoZSB2YWx1ZSBpcyBhbHJlYWR5IGNvbXBsZXRlLCB0aGVuIHRoZSB2YWx1ZSBpcyBzaW1wbHlcbiAqICAgICByZXR1cm5lZC4gT3RoZXJ3aXNlLCBhIGNvbXBsZXRlZCB2ZXJzaW9uIG9mIHRoZSB2YWx1ZSBpcyByZXR1cm5lZC5cbiAqL1xuZnVuY3Rpb24gZW5zdXJlQ29tcGxldGVkKHZhbHVlKSB7XG4gIHJldHVybiBpc0NvbXBsZXRlZCh2YWx1ZSkgPyB2YWx1ZSA6IGNvbXBsZXRlKHZhbHVlKTtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIHRoZSBjb21wbGV0ZSBzdGF0dXMgZnJvbSBhIHZhbHVlLCBhcyBsb25nIGFzIGl0IGFjdHVhbGx5IGlzIGNvbXBsZXRlLlxuICpcbiAqIFRoaXMgZG9lcyBhIGNoZWNrIHRvIG1ha2Ugc3VyZSB0aGUgdmFsdWUgcGFzc2VkIGluIGFjdHVhbGx5IGlzIGNvbXBsZXRlLiBJZlxuICogaXQgaXNuJ3QsIHRoZSB2YWx1ZSBpdHNlbGYgaXMgcmV0dXJuZWQuIEl0J3MgbWVhbnQgdG8gYmUgdXNlZCB3aGVuIHRoZVxuICogY29tcGxldGVkIHN0YXR1cyBpcyB1bmNlcnRhaW4uXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZS10b29sc1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgY29tcGxldGUgdmFsdWUgdG8gYmUgdW5jb21wbGV0ZWQuXG4gKiBAcmV0dXJuIHsqfSBJZiB0aGUgdmFsdWUgaXMgYWxyZWFkeSB1bmNvbXBsZXRlZCwgdGhlIHZhbHVlIGlzIHNpbXBseVxuICogICAgIHJldHVybmVkLiBPdGhlcndpc2UgYW4gdW5jb21wbGV0ZWQgdmVyc2lvbiBvZiB0aGUgdmFsdWUgaXMgcmV0dXJuZWQuXG4gKi9cbmZ1bmN0aW9uIGVuc3VyZVVuY29tcGxldGVkKHZhbHVlKSB7XG4gIHJldHVybiBpc0NvbXBsZXRlZCh2YWx1ZSkgPyB1bmNvbXBsZXRlKHZhbHVlKSA6IHZhbHVlO1xufVxuXG4vKipcbiAqIFJlZHVjZXMgdGhlIGVsZW1lbnRzIG9mIHRoZSBpbnB1dCBjb2xsZWN0aW9uIHRocm91Z2ggYSByZWR1Y2VyIGludG8gYW4gb3V0cHV0XG4gKiBjb2xsZWN0aW9uLlxuICpcbiAqIFRoaXMgaXMgdGhlIGxvd2VzdC1sZXZlbCBvZiB0aGUgdHJhbnNkdWN0aW9uIGZ1bmN0aW9ucy4gSW4gZmFjdCwgdGhpcyBvbmUgaXNcbiAqIHNvIGxvdy1sZXZlbCB0aGF0IGl0IGRvZXNuJ3QgaGF2ZSBhIGxvdCBvZiB1c2UgaW4gbm9ybWFsIG9wZXJhdGlvbi4gSXQncyBtb3JlXG4gKiB1c2VmdWwgZm9yIHdyaXRpbmcgeW91ciBvd24gdHJhbnNmb3JtYXRpb24gZnVuY3Rpb25zLlxuICpcbiAqIGByZWR1Y2VgIGRvZXNuJ3QgYXNzdW1lIHRoYXQgdGhlcmUncyBldmVuIGEgdHJhbnNmb3JtYXRpb24uIEl0IHJlcXVpcmVzIGFuXG4gKiBpbml0aWFsIGNvbGxlY3Rpb24gYW5kIGEgcmVkdWNlciBvYmplY3QgdGhhdCBpcyBtYXRjaGVkIHRvIHRoYXQgaW5pdGlhbFxuICogY29sbGVjdGlvbi4gVGhlIHJlZHVjZXIgb2JqZWN0IG11c3QgaW1wbGVtZW50IHRoZSBgc3RlcGAgYW5kIGByZXN1bHRgXG4gKiBwcm90b2NvbHMsIHdoaWNoIGluc3RydWN0IGByZWR1Y2VgIG9uIGhvdyB0byBidWlsZCB1cCB0aGUgY29sbGVjdGlvbi4gVGhlXG4gKiByZWR1Y2VyIG1heSBpbXBsZW1lbnQgYSB0cmFuc2Zvcm1hdGlvbiBhcyB3ZWxsLCBidXQgYWxsIHRoYXQncyBpbXBvcnRhbnQgaGVyZVxuICogaXMgdGhhdCBpdCBjYW4gZG8gdGhlIHJlZHVjdGlvbi5cbiAqXG4gKiBUaGUgaW5wdXQgY29sbGVjdGlvbiBuZWVkIG9ubHkgaW1wbGVtZW50IGBpdGVyYWJsZWAuIEl0IGlzIG5vdCBuZWNlc3NhcnkgZm9yXG4gKiB0aGUgaW5wdXQgYW5kIG91dHB1dCBjb2xsZWN0aW9ucyB0byBiZSBvZiB0aGUgc2FtZSB0eXBlOyBhcyBsb25nIGFzIHRoZSBpbnB1dFxuICogaW1wbGVtZW50cyBgaXRlcmFibGVgIGFuZCB0aGUgcmVkdWNlciBpbXBsZW1lbnRzIGBzdGVwYCBhbmQgYHJlc3VsdGBcbiAqIGFwcHJvcHJpYXRlIHRvIHRoZSB0eXBlIG9mIHRoZSBgaW5pdGAgY29sbGVjdGlvbiwgdGhlbiBhbnkgdHJhbnNsYXRpb25cbiAqIGJldHdlZW4gY29sbGVjdGlvbiB0eXBlcyBjYW4gb2NjdXIuXG4gKlxuICogVGhlIG5vcm1hbCBjb3Vyc2Ugb2Ygb3BlcmF0aW9uIHdpbGwgYmUgdG8gY2FsbFxuICoge0BsaW5rIG1vZHVsZTp4ZHVjZS10b29scy50cmFuc2R1Y2V8dHJhbnNkdWNlfSBpbnN0ZWFkLCBhcyB0aGF0IGZ1bmN0aW9uIG1ha2VzIGl0XG4gKiBlYXN5IHRvIGNvbWJpbmUgdHJhbnNmb3JtYXRpb25zIHdpdGggcmVkdWN0aW9ucyBhbmQgY2FuIG9wdGlvbmFsbHkgZmlndXJlIG91dFxuICogdGhlIGluaXRpYWwgY29sbGVjdGlvbiBpdHNlbGYuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZS10b29sc1xuICogQHBhcmFtIHsqfSBjb2xsZWN0aW9uIFRoZSBpbnB1dCBjb2xsZWN0aW9uLiBUaGUgb25seSByZXF1aXJlbWVudCBvZiB0aGlzXG4gKiAgICAgY29sbGVjdGlvbiBpcyB0aGF0IGl0IGltcGxlbWVudCB0aGUgYGl0ZXJhYmxlYCBwcm90b2NvbC4gU3BlY2lhbCBzdXBwb3J0XG4gKiAgICAgaXMgcHJvdmlkZWQgYnkgdGhlIGxpYnJhcnkgZm9yIG9iamVjdHMsIHNvIHRoZXkgY2FuIGJlIHVzZWQgYXMgd2VsbC5cbiAqIEBwYXJhbSB7bW9kdWxlOnhkdWNlLXRvb2xzLlJlZHVjZXJ9IHJlZHVjZXIgQW4gb2JqZWN0IHRoYXQgaW1wbGVtZW50cyB0aGUgYHN0ZXBgIGFuZFxuICogICAgIGByZXN1bHRgIHByb3RvY29scy4gVGhpcyBvYmplY3QgbXVzdCBrbm93IGhvdyB0byBwcm9kdWNlIGFuIG91dHB1dFxuICogICAgIGNvbGxlY3Rpb24gdGhyb3VnaCB0aG9zZSBwcm90b2NvbCBmdW5jdGlvbnMuXG4gKiBAcGFyYW0geyp9IGluaXQgYSBjb2xsZWN0aW9uIG9mIHRoZSBzYW1lIHR5cGUgYXMgdGhlIG91dHB1dCBjb2xsZWN0aW9uLiBJdFxuICogICAgIG5lZWQgbm90IGJlIGVtcHR5OyBpZiBpdCBpcyBub3QsIHRoZSBleGlzdGluZyBlbGVtZW50cyBhcmUgcmV0YWluZWQgYXNcbiAqICAgICB0aGUgaW5wdXQgY29sbGVjdGlvbiBpcyByZWR1Y2VkIGludG8gaXQuXG4gKiBAcmV0dXJuIHsqfSBBIG5ldyBjb2xsZWN0aW9uLCBjb25zaXN0aW5nIG9mIHRoZSBgaW5pdGAgY29sbGVjdGlvbiB3aXRoIGFsbCBvZlxuICogICAgIHRoZSBlbGVtZW50cyBvZiB0aGUgYGNvbGxlY3Rpb25gIGNvbGxlY3Rpb24gcmVkdWNlZCBpbnRvIGl0LlxuICovXG5mdW5jdGlvbiByZWR1Y2UoY29sbGVjdGlvbiwgcmVkdWNlciwgaW5pdCkge1xuICBpZiAoY29sbGVjdGlvbiA9PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCBpdGVyID0gaXRlcmF0b3IoY29sbGVjdGlvbik7XG4gIGlmICghaXRlcikge1xuICAgIHRocm93IEVycm9yKGBDYW5ub3QgcmVkdWNlIGFuIGluc3RhbmNlIG9mICR7Y29sbGVjdGlvbi5jb25zdHJ1Y3Rvci5uYW1lfWApO1xuICB9XG5cbiAgbGV0IGFjYyA9IGluaXQ7XG4gIGxldCBzdGVwID0gaXRlci5uZXh0KCk7XG5cbiAgd2hpbGUgKCFzdGVwLmRvbmUpIHtcbiAgICBhY2MgPSByZWR1Y2VyW3Auc3RlcF0oYWNjLCBzdGVwLnZhbHVlKTtcbiAgICBpZiAoaXNDb21wbGV0ZWQoYWNjKSkge1xuICAgICAgYWNjID0gdW5jb21wbGV0ZShhY2MpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHN0ZXAgPSBpdGVyLm5leHQoKTtcbiAgfVxuXG4gIHJldHVybiByZWR1Y2VyW3AucmVzdWx0XShhY2MpO1xufVxuXG5leHBvcnQge1xuICBpbml0LFxuICBzdGVwLFxuICByZXN1bHQsXG4gIHRvUmVkdWNlcixcbiAgQVJSQVlfUkVEVUNFUixcbiAgT0JKRUNUX1JFRFVDRVIsXG4gIFNUUklOR19SRURVQ0VSLFxuICB0b1RyYW5zZHVjZXIsXG4gIHRvRnVuY3Rpb24sXG4gIGNvbXBsZXRlLFxuICB1bmNvbXBsZXRlLFxuICBpc0NvbXBsZXRlZCxcbiAgZW5zdXJlQ29tcGxldGVkLFxuICBlbnN1cmVVbmNvbXBsZXRlZCxcbiAgcmVkdWNlXG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG5cbi8qKlxuICogQSBidW5jaCBvZiB1dGlsaXR5IGZ1bmN0aW9ucy4gVGhlc2UgYXJlIGFsbCB1c2VkIGJ5IHRoZSBsaWJyYXJ5IGl0c2VsZiBpblxuICogcGxhY2VzLCBidXQgbWFueSBvZiB0aGVtIGFyZSBzdWl0YWJsZSBmb3IgZ2VuZXJhbCB1c2UgYXMgd2VsbC5cbiAqIF5cbiAqIEBtb2R1bGUgY29yZS91dGlsc1xuICogQHByaXZhdGVcbiAqL1xuXG4vKipcbiAqIGBPYmplY3RgJ3MgYHRvU3RyaW5nYCBpcyBleHBsaWNpdGx5IHVzZWQgdGhyb3VnaG91dCBiZWNhdXNlIGl0IGNvdWxkIGJlXG4gKiByZWRlZmluZWQgaW4gYW55IHN1YnR5cGUgb2YgYE9iamVjdGAuXG4gKlxuICogQGZ1bmN0aW9uIHRvU3RyaW5nXG4gKiBAcHJpdmF0ZVxuICovXG5jb25zdCB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGEgdmFsdWUgaXMgYSBmdW5jdGlvbi5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlLXRvb2xzXG4gKiBAcGFyYW0geyp9IHggVGhlIHZhbHVlIGJlaW5nIHRlc3RlZCB0byBzZWUgaWYgaXQgaXMgYSBmdW5jdGlvbi5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IEVpdGhlciBgdHJ1ZWAgaWYgdGhlIHRlc3QgdmFsdWUgaXMgYSBmdW5jdGlvbiBvciBgZmFsc2VgIGlmXG4gKiAgICAgaXQgaXMgbm90LlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih4KSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHgpID09PSBcIltvYmplY3QgRnVuY3Rpb25dXCI7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGEgdmFsdWUgaXMgYSBnZW5lcmF0b3IgZnVuY3Rpb24uXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZS10b29sc1xuICogQHBhcmFtIHsqfSB4IFRoZSB2YWx1ZSBiZWluZyB0ZXN0ZWQgdG8gc2VlIGlmIGl0IGlzIGEgZ2VuZXJhdG9yIGZ1bmN0aW9uLlxuICogQHJldHVybiB7Ym9vbGVhbn0gRWl0aGVyIGB0cnVlYCBpZiB0aGUgdGVzdCB2YWx1ZSBpcyBhIGdlbmVyYXRvciBmdW5jdGlvbiBvclxuICogICAgIGBmYWxzZWAgaWYgaXQgaXMgbm90LlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaXNHZW5lcmF0b3JGdW5jdGlvbih4KSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHgpID09PSBcIltvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dXCI7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGEgdmFsdWUgaXMgYSBwbGFpbiBvYmplY3QuXG4gKlxuICogVGhpcyBmdW5jdGlvbiByZXR1cm5zIGBmYWxzZWAgaWYgdGhlIHZhbHVlIGlzIGFueSBvdGhlciBzb3J0IG9mIGJ1aWx0LWluXG4gKiBvYmplY3QgKHN1Y2ggYXMgYW4gYXJyYXkgb3IgYSBzdHJpbmcpLiBJdCBhbHNvIHJldHVybnMgYGZhbHNlYCBmb3IgYW55IG9iamVjdFxuICogdGhhdCBpcyBjcmVhdGVkIGJ5IGEgY29uc3RydWN0b3IgdGhhdCBpcyBub3QgYE9iamVjdGAncyBjb25zdHJ1Y3RvciwgbWVhbmluZ1xuICogdGhhdCBcImluc3RhbmNlc1wiIG9mIGN1c3RvbSBcImNsYXNzZXNcIiB3aWxsIHJldHVybiBgZmFsc2VgLiBUaGVyZWZvcmUgaXQncyBvbmx5XG4gKiBnb2luZyB0byByZXR1cm4gYHRydWVgIGZvciBsaXRlcmFsIG9iamVjdHMgb3IgdGhvc2UgY3JlYXRlZCB3aXRoXG4gKiBgT2JqZWN0LmNyZWF0ZSgpYC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlLXRvb2xzXG4gKiBAcGFyYW0geyp9IHggVGhlIHZhbHVlIGJlaW5nIHRlc3RlZCB0byBzZWUgaWYgaXQgaXMgYSBwbGFpbiBvYmplY3QuXG4gKiBAcmV0dXJuIHtib29sZWFufSBFaXRoZXIgYHRydWVgIGlmIHRoZSB0ZXN0IHZhbHVlIGlzIGEgcGxhaW4gb2JqZWN0IG9yXG4gKiAgICAgYGZhbHNlYCBpZiBpdCBpcyBub3QuXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHgpIHtcbiAgLy8gVGhpcyBjaGVjayBleGNsdWRlcyBidWlsdC1pbiBub24tT2JqZWN0IG9iamVjdHMgKHN1Y2ggYXMgQXJyYXkgYW5kIFN0cmluZykuXG4gIC8vIEl0IGFsc28gZXhjbHVkZXMgb2JqZWN0cyBjcmVhdGVkIGZyb20gRVMyMDE1IGNsYXNzZXMsIGJ1dCBpdCBkb2VzIG5vdFxuICAvLyBleGNsdWRlIG9iamVjdHMgY3JlYXRlZCB3aXRoIGBuZXdgIG9uIGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyAodGhhdCBoYXBwZW5zXG4gIC8vIGJlbG93KS5cbiAgaWYgKHRvU3RyaW5nLmNhbGwoeCkgIT09IFwiW29iamVjdCBPYmplY3RdXCIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBQcm90b3R5cGUtbGVzcyBvYmplY3RzIChjcmVhdGVkIHdpdGggYE9iamVjdC5jcmVhdGUobnVsbCkpYCBwYXNzXG4gIGNvbnN0IHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHgpO1xuICBpZiAocHJvdG8gPT09IG51bGwpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8vIENoZWNrIHRvIHNlZSB3aGV0aGVyIHRoZSBjb25zdHJ1Y3RvciBvZiB0aGUgdGVzdGVkIG9iamVjdCBpcyB0aGUgT2JqZWN0XG4gIC8vIGNvbnN0cnVjdG9yLiBUaGlzIGlzIHRoZSBvbmx5IGNvbnN0cnVjdG9yIHRoYXQgcHJvZHVjZXMgYSBcInBsYWluXCIgb2JqZWN0LlxuICBjb25zdCBjdG9yID1cbiAgICBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocHJvdG8sIFwiY29uc3RydWN0b3JcIikgJiZcbiAgICBwcm90by5jb25zdHJ1Y3RvcjtcbiAgcmV0dXJuIHR5cGVvZiBjdG9yID09PSBcImZ1bmN0aW9uXCIgJiYgY3RvciA9PT0gT2JqZWN0O1xufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhIHZhbHVlIGlzIGEgbnVtYmVyLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gd2lsbCByZXR1cm4gYHRydWVgIGZvciBhbnkgbnVtYmVyIGxpdGVyYWwgb3IgaW5zdGFuY2Ugb2ZcbiAqIGBOdW1iZXJgIGV4Y2VwdCBmb3IgYEluZmluaXR5YCBvciBgTmFOYC4gSXQgd2lsbCByZXR1cm4gYGZhbHNlYCBmb3Igc3RyaW5nc1xuICogdGhhdCBoYXBwZW4gdG8gYWxzbyBiZSBudW1iZXJzOyB0aGUgdmFsdWUgbXVzdCBiZSBhbiBhY3R1YWwgYE51bWJlcmAgaW5zdGFuY2VcbiAqIG9yIG51bWJlciBsaXRlcmFsIHRvIHJldHVybiBgdHJ1ZWAuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZS10b29sc1xuICogQHBhcmFtIHsqfSB4IFRoZSB2YWx1ZSBiZWluZyB0ZXN0ZWQgdG8gc2VlIGlmIGl0IGlzIGEgbnVtYmVyLlxuICogQHJldHVybiB7Ym9vbGVhbn0gRWl0aGVyIGB0cnVlYCBpZiB0aGUgdGVzdCB2YWx1ZSBpcyBhIGZpbml0ZSBudW1iZXIgKG5vdFxuICogICAgIGluY2x1ZGluZyBzdHJpbmcgcmVwcmVzZW50YXRpb25zIG9mIG51bWJlcnMpIG9yIGBmYWxzZWAgaWYgaXQgaXMgbm90LlxuICovXG5mdW5jdGlvbiBpc051bWJlcih4KSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHgpID09PSBcIltvYmplY3QgTnVtYmVyXVwiICYmIGlzRmluaXRlKHgpO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhIHZhbHVlIGlzIGEgc3RyaW5nLlxuICpcbiAqIExpdGVyYWwgc3RyaW5ncyB3aWxsIHJldHVybiBgdHJ1ZWAsIGFzIHdpbGwgaW5zdGFuY2VzIG9mIHRoZSBgU3RyaW5nYCBvYmplY3QuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZS10b29sc1xuICogQHBhcmFtIHsqfSB4IFRoZSB2YWx1ZSBiZWluZyB0ZXN0ZWQgdG8gc2VlIGlmIGl0IGlzIGEgc3RyaW5nLlxuICogQHJldHVybiB7Ym9vbGVhbn0gRWl0aGVyIGB0cnVlYCBpZiB0aGUgdGVzdCB2YWx1ZSBpcyBhIHN0cmluZyBvciBgZmFsc2VgIGlmXG4gKiAgICBpdCBpcyBub3QuXG4gKi9cbmZ1bmN0aW9uIGlzU3RyaW5nKHgpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoeCkgPT09IFwiW29iamVjdCBTdHJpbmddXCI7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGEgdmFsdWUgaXMgYW4gYXJyYXkuXG4gKlxuICogVGhpcyBmdW5jdGlvbiBtZXJlbHkgZGVsZWdhdGVzIHRvIGBBcnJheS5pc0FycmF5YC4gSXQgaXMgcHJvdmlkZWQgZm9yXG4gKiBjb25zaXN0ZW5jeSBpbiBjYWxsaW5nIHN0eWxlIG9ubHkuXG4gKlxuICogQGZ1bmN0aW9uIGlzQXJyYXlcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2UtdG9vbHNcbiAqIEBwYXJhbSB7Kn0geCBUaGUgdmFsdWUgYmVpbmcgdGVzdGVkIHRvIHNlZSBpZiBpdCBpcyBhbiBhcnJheS5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IEVpdGhlciBgdHJ1ZWAgaWYgdGhlIHRlc3QgdmFsdWUgaXMgYW4gYXJyYXkgb3IgYGZhbHNlYCBpZlxuICogICAgIGl0IGlzIG5vdC5cbiAqL1xuY29uc3QgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5cbmV4cG9ydCB7XG4gIGlzRnVuY3Rpb24sXG4gIGlzR2VuZXJhdG9yRnVuY3Rpb24sXG4gIGlzT2JqZWN0LFxuICBpc051bWJlcixcbiAgaXNTdHJpbmcsXG4gIGlzQXJyYXlcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9