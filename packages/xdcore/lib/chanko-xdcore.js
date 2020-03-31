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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly94ZGNvcmUvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL3hkY29yZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly94ZGNvcmUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8veGRjb3JlLy4vc3JjL21vZHVsZXMvaXRlcmF0aW9uLmpzIiwid2VicGFjazovL3hkY29yZS8uL3NyYy9tb2R1bGVzL3Byb3RvY29sLmpzIiwid2VicGFjazovL3hkY29yZS8uL3NyYy9tb2R1bGVzL3JlZHVjdGlvbi5qcyIsIndlYnBhY2s6Ly94ZGNvcmUvLi9zcmMvbW9kdWxlcy91dGlscy5qcyJdLCJuYW1lcyI6WyJvYmplY3RJdGVyYXRvciIsIm9iaiIsImtleXMiLCJPYmplY3QiLCJpbmRleCIsImxlbmd0aCIsImsiLCJmdW5jdGlvbkl0ZXJhdG9yIiwiZm4iLCJjdXJyZW50IiwiaXRlcmF0b3IiLCJ2YWx1ZSIsImlzRnVuY3Rpb24iLCJTeW1ib2wiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiaXNPYmplY3QiLCJpc0l0ZXJhYmxlIiwiaXNJbXBsZW1lbnRlZCIsInByb3RvY29scyIsImNyZWF0ZSIsImluaXQiLCJmb3IiLCJzdGVwIiwicmVzdWx0IiwiY29tcGxldGVkIiwicHJvdG9jb2wiLCJhc3luY0l0ZXJhdG9yIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwiaW5jbHVkZXMiLCJjb2xsZWN0aW9uIiwicCIsImlzU3RyaW5nIiwiaXNBcnJheSIsIkVycm9yIiwiYWNjIiwidiIsInB1c2giLCJtYXgiLCJyZWR1Y2UiLCJhIiwiYiIsIk1hdGgiLCJ0b1JlZHVjZXIiLCJmcmVlemUiLCJBUlJBWV9SRURVQ0VSIiwiT0JKRUNUX1JFRFVDRVIiLCJTVFJJTkdfUkVEVUNFUiIsInRvVHJhbnNkdWNlciIsInJlZHVjZXIiLCJ0b0Z1bmN0aW9uIiwidHJhbnNkdWNlciIsInIiLCJiaW5kIiwiY29tcGxldGUiLCJ1bmNvbXBsZXRlIiwiaXNDb21wbGV0ZWQiLCJlbnN1cmVDb21wbGV0ZWQiLCJlbnN1cmVVbmNvbXBsZXRlZCIsIml0ZXIiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJuZXh0IiwiZG9uZSIsInRvU3RyaW5nIiwicHJvdG90eXBlIiwieCIsImNhbGwiLCJwcm90byIsImdldFByb3RvdHlwZU9mIiwiY3RvciIsImhhc093blByb3BlcnR5IiwiaXNOdW1iZXIiLCJpc0Zpbml0ZSIsIkFycmF5Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7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QUFRLENBQUNHLElBQVQsQ0FBY0QsQ0FBZCxNQUFxQixpQkFBekIsRUFBNEM7QUFDMUMsV0FBTyxLQUFQO0FBQ0QsR0FQa0IsQ0FTbkI7OztBQUNBLFFBQU1FLEtBQUssR0FBR2hFLE1BQU0sQ0FBQ2lFLGNBQVAsQ0FBc0JILENBQXRCLENBQWQ7O0FBQ0EsTUFBSUUsS0FBSyxLQUFLLElBQWQsRUFBb0I7QUFDbEIsV0FBTyxJQUFQO0FBQ0QsR0Fia0IsQ0FlbkI7QUFDQTs7O0FBQ0EsUUFBTUUsSUFBSSxHQUNSbEUsTUFBTSxDQUFDNkQsU0FBUCxDQUFpQk0sY0FBakIsQ0FBZ0NKLElBQWhDLENBQXFDQyxLQUFyQyxFQUE0QyxhQUE1QyxLQUNBQSxLQUFLLENBQUNSLFdBRlI7QUFHQSxTQUFPLE9BQU9VLElBQVAsS0FBZ0IsVUFBaEIsSUFBOEJBLElBQUksS0FBS2xFLE1BQTlDO0FBQ0Q7QUFFRDs7Ozs7Ozs7Ozs7Ozs7O0FBYUEsU0FBU29FLFFBQVQsQ0FBa0JOLENBQWxCLEVBQXFCO0FBQ25CLFNBQU9GLFFBQVEsQ0FBQ0csSUFBVCxDQUFjRCxDQUFkLE1BQXFCLGlCQUFyQixJQUEwQ08sUUFBUSxDQUFDUCxDQUFELENBQXpEO0FBQ0Q7QUFFRDs7Ozs7Ozs7Ozs7O0FBVUEsU0FBU2xDLFFBQVQsQ0FBa0JrQyxDQUFsQixFQUFxQjtBQUNuQixTQUFPRixRQUFRLENBQUNHLElBQVQsQ0FBY0QsQ0FBZCxNQUFxQixpQkFBNUI7QUFDRDtBQUVEOzs7Ozs7Ozs7Ozs7OztBQVlBLE1BQU1qQyxPQUFPLEdBQUd5QyxLQUFLLENBQUN6QyxPQUF0QiIsImZpbGUiOiJjaGFua28teGRjb3JlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wieGRjb3JlXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInhkY29yZVwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG4vKipcbiAqIFRoZSBjZW50cmFsIG1vZHVsZSBmb3IgdGhlIHRyYW5zZHVjZXIgZW5naW5lLlxuICpcbiAqIEFsbCBvZiB0aGUgZnVuY3Rpb25zIGluIHRoaXMgbW9kdWxlIGRlYWwgZGlyZWN0bHkgd2l0aCB0cmFuc2R1Y2Vycy4gQnV0XG4gKiBmaXJzdCwgbGV0J3MgdGFsayBhYm91dCB0aGUgcHJvdG9jb2xzIHRoYXQgYXJlIGdvaW5nIHRvIGJlIHJlZmVycmVkIHRvXG4gKiB0aHJvdWdob3V0IG1hbnkgb2YgdGhlIGZ1bmN0aW9uIGRpc2N1c3Npb25zLlxuICpcbiAqICMjIFByb3RvY29sc1xuICpcbiAqIE9uZSBvZiB0aGUga2V5IHNlbGxpbmcgcG9pbnRzIGZvciB0cmFuc2R1Y2VycyBpcyB0aGF0IHRoZSBzYW1lIHRyYW5zZHVjZXIgY2FuXG4gKiBiZSB1c2VkIG9uIGFueSB0eXBlIG9mIGNvbGxlY3Rpb24uIFJhdGhlciB0aGFuIGhhdmluZyB0byB3cml0ZSBhIG5ldyBgbWFwYFxuICogZnVuY3Rpb24gKGZvciBleGFtcGxlKSBmb3IgZXZlcnkga2luZCBvZiBjb2xsZWN0aW9uIC0gb25lIGZvciBhbiBhcnJheSwgb25lXG4gKiBmb3IgYSBzdHJpbmcsIG9uZSBmb3IgYW4gaXRlcmF0b3IsIGV0Yy4gLSB0aGVyZSBpcyBhIHNpbmdsZSBgbWFwYCB0cmFuc2R1Y2VyXG4gKiB0aGF0IHdpbGwgd29yayB3aXRoIGFsbCBvZiB0aGVtLCBhbmQgcG90ZW50aWFsbHkgd2l0aCAqYW55KiBraW5kIG9mXG4gKiBjb2xsZWN0aW9uLiBUaGlzIGlzIHBvc3NpYmxlIGltcGxlbWVudGluZyAqcHJvdG9jb2xzKiBvbiB0aGUgY29sbGVjdGlvbnMuXG4gKlxuICogQSBwcm90b2NvbCBpbiBKYXZhU2NyaXB0IGlzIG11Y2ggbGlrZSBhbiBpbnRlcmZhY2UgaW4gbGFuZ3VhZ2VzIGxpa2UgSmF2YSBhbmRcbiAqIEMjLiBJdCBpcyBhIGNvbW1pdG1lbnQgdG8gcHJvdmlkaW5nIGEgY2VydGFpbiBmdW5jdGlvbmFsaXR5IHVuZGVyIGEgY2VydGFpblxuICogbmFtZS4gRVMyMDE1IGhhcyBzZWVuIHRoZSBpbnRyb2R1Y3Rpb24gb2YgYW4gYGl0ZXJhdG9yYCBwcm90b2NvbCwgZm9yXG4gKiBleGFtcGxlLCBhbmQgbGFuZ3VhZ2Ugc3VwcG9ydCBmb3IgaXQgKHRoZSBuZXcgYGZvci4uLm9mYCBsb29wIGNhbiB3b3JrIHdpdGhcbiAqIGFueSBvYmplY3QgdGhhdCBjb3JyZWN0bHkgaW1wbGVtZW50cyB0aGUgYGl0ZXJhdG9yYCBwcm90b2NvbCkuXG4gKlxuICogVG8gc3VwcG9ydCB0cmFuc2R1Y3Rpb24sIFhkdWNlIGV4cGVjdHMgY29sbGVjdGlvbnMgdG8gaW1wbGVtZW50IGZvdXJcbiAqIHByb3RvY29scy5cbiAqXG4gKiAtIGBpdGVyYXRvcmA6IGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGFuIGl0ZXJhdG9yICh0aGlzIG9uZSBpcyBidWlsdCBpbiB0b1xuICogICBFUzYgSmF2YVNjcmlwdClcbiAqIC0gYHRyYW5zZHVjZXIvaW5pdGA6IGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgbmV3LCBlbXB0eSBpbnN0YW5jZSBvZiB0aGVcbiAqICAgb3V0cHV0IGNvbGxlY3Rpb25cbiAqIC0gYHRyYW5zZHVjZXIvc3RlcGA6IGEgZnVuY3Rpb24gdGhhdCB0YWtlcyBhbiBhY2N1bXVsYXRvciAodGhlIHJlc3VsdCBvZiB0aGVcbiAqICAgcmVkdWN0aW9uIHNvIGZhcikgYW5kIHRoZSBuZXh0IGlucHV0IHZhbHVlLCBhbmQgdGhlbiByZXR1cm5zIHRoZVxuICogICBhY2N1bXVsYXRvciB3aXRoIHRoZSBuZXh0IGlucHV0IHZhbHVlIGFkZGVkIHRvIGl0XG4gKiAtIGB0cmFuc2R1Y2VyL3Jlc3VsdGA6IGEgZnVuY3Rpb24gdGhhdCB0YWtlcyB0aGUgcmVkdWNlZCBjb2xsZWN0aW9uIGFuZFxuICogICByZXR1cm5zIHRoZSBmaW5hbCBvdXRwdXQgY29sbGVjdGlvblxuICpcbiAqIGBpdGVyYXRvcmAgaXMgdGhlIGJ1aWx0LWluIEphdmFTY3JpcHQgcHJvdG9jb2wuIFdoZW4gY2FsbGVkLCBpdCBpcyBleHBlY3RlZFxuICogdG8gcmV0dXJuIGFuIGl0ZXJhdG9yIG92ZXIgdGhlIGltcGxlbWVudGluZyBjb2xsZWN0aW9uLiBUaGlzIGl0ZXJhdG9yIGlzIGFuXG4gKiBvYmplY3QgdGhhdCBoYXMgYSBgbmV4dGAgZnVuY3Rpb24uIEVhY2ggY2FsbCB0byBgbmV4dGAgaXMgZXhwZWN0ZWQgdG8gcmV0dXJuXG4gKiBhbiBvYmplY3Qgd2l0aCBgdmFsdWVgIGFuZCBgZG9uZWAgcHJvcGVydGllcywgd2hpY2ggcmVzcGVjdGl2ZWx5IGhvbGQgdGhlXG4gKiBuZXh0IHZhbHVlIG9mIHRoZSBpdGVyYXRvciBhbmQgYSBib29sZWFuIHRvIGluZGljYXRlIHdoZXRoZXIgdGhlIGl0ZXJhdGlvblxuICogaGFzIHJlYWNoZWQgaXRzIGVuZC4gKFRoaXMgaXMgYSBzaW1wbGlmaWVkIGV4cGxhbmF0aW9uOyBzZWVcbiAqIHtAbGluayBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L0d1aWRlL0l0ZXJhdG9yc19hbmRfR2VuZXJhdG9yc3x0aGlzIE1ETiBwYWdlfVxuICogZm9yIG1vcmUgZGV0YWlsZWQgaW5mb3JtYXRpb24uKVxuICpcbiAqIGB0cmFuc2R1Y2VyL2luaXRgIChyZWZlcnJlZCB0byBmcm9tIG5vdyBvbiBhcyBgaW5pdGApIHNob3VsZCBiZSBhIGZ1bmN0aW9uXG4gKiB0aGF0IHRha2VzIG5vIHBhcmFtZXRlcnMgYW5kIHJldHVybnMgYSBuZXcsIGVtcHR5IGluc3RhbmNlIG9mIHRoZSBvdXRwdXRcbiAqIGNvbGxlY3Rpb24uIFRoaXMgaXMgdGhlIGZ1bmN0aW9uIHRoYXQgZGVmaW5lcyBob3cgdG8gY3JlYXRlIGEgbmV3IGNvbGxlY3Rpb25cbiAqIG9mIHRoZSBjb3JyZWN0IHR5cGUuXG4gKlxuICogYHRyYW5zZHVjZXIvc3RlcGAgKHJlZmVycmVkIHRvIGZyb20gbm93IG9uIGFzIGBzdGVwYCkgc2hvdWxkIGJlIGEgZnVuY3Rpb25cbiAqIHRoYXQgdGFrZXMgdHdvIHBhcmFtZXRlcnMuIFRoZXNlIHBhcmFtZXRlcnMgYXJlIHRoZSByZXN1bHQgb2YgdGhlIHJlZHVjdGlvblxuICogc28gZmFyIChhbmQgc28gaXMgYSBjb2xsZWN0aW9uIG9mIHRoZSBvdXRwdXQgdHlwZSkgYW5kIHRoZSBuZXh0IHZhbHVlIGZyb21cbiAqIHRoZSBpbnB1dCBjb2xsZWN0aW9uLiBJdCBtdXN0IHJldHVybiB0aGUgbmV3IHJlZHVjdGlvbiByZXN1bHQsIHdpdGggdGhlIG5leHRcbiAqIHZhbHVlIGluY29ycG9yYXRlZCBpbnRvIGl0LiBUaGlzIGlzIHRoZSBmdW5jdGlvbiB0aGF0IGRlZmluZXMgaG93IHJlZHVjZSBhXG4gKiB2YWx1ZSBvbnRvIHRoZSBjb2xsZWN0aW9uLlxuICpcbiAqIGB0cmFuc2R1Y2VyL3Jlc3VsdGAgKHJlZmVycmVkIHRvIGZyb20gbm93IG9uIGFzIGByZXN1bHRgKSBzaG91bGQgYmUgYVxuICogZnVuY3Rpb24gdGhhdCB0YWtlcyBvbmUgcGFyYW1ldGVyLCB3aGljaCBpcyB0aGUgZnVsbHkgcmVkdWNlZCBjb2xsZWN0aW9uLiBJdFxuICogc2hvdWxkIHJldHVybiB0aGUgZmluYWwgb3V0cHV0IGNvbGxlY3Rpb24uIFRoaXMgYWZmb3JkcyBhIGNoYW5jZSB0byBtYWtlIGFueVxuICogbGFzdC1taW51dGUgYWRqdXN0bWVudHMgdG8gdGhlIHJlZHVjZWQgY29sbGVjdGlvbiBiZWZvcmUgcmV0dXJuaW5nIGl0LlxuICpcbiAqIEFycmF5cywgc3RyaW5ncywgYW5kIG9iamVjdHMgYXJlIGFsbCBnaXZlbiBzdXBwb3J0IGZvciBhbGwgb2YgdGhlc2VcbiAqIHByb3RvY29scy4gT3RoZXIgY29sbGVjdGlvbnMgd2lsbCBoYXZlIHRvIHByb3ZpZGUgdGhlaXIgb3duICh0aG91Z2ggaXQgc2hvdWxkXG4gKiBiZSBub3RlZCB0aGF0IHNpbmNlIGBpdGVyYXRvcmAgaXMgYnVpbHQtaW4sIG1hbnkgdGhpcmQtcGFydHkgY29sbGVjdGlvbnMgd2lsbFxuICogYWxyZWFkeSBpbXBsZW1lbnQgdGhpcyBwcm90b2NvbCkuIEFzIGFuIGV4YW1wbGUsIGxldCdzIGFkZCB0cmFuc2R1Y2VyIHN1cHBvcnRcbiAqIHRvIGEgdGhpcmQtcGFydHkgY29sbGVjdGlvbiwgdGhlIGBJbW11dGFibGUuTGlzdGAgY29sbGVjdGlvbiBmcm9tXG4gKiB7QGxpbmsgaHR0cHM6Ly9mYWNlYm9vay5naXRodWIuaW8vaW1tdXRhYmxlLWpzL3xpbW11dGFibGUtanN9LlxuICpcbiAqIGBgYFxuICogSW1tdXRhYmxlLkxpc3QucHJvdG90eXBlW3Byb3RvY29scy5pbml0XSA9ICgpID0+IEltbXV0YWJsZS5MaXN0KCkuYXNNdXRhYmxlKCk7XG4gKiBJbW11dGFibGUuTGlzdC5wcm90b3R5cGVbcHJvdG9jb2xzLnN0ZXBdID0gKGFjYywgaW5wdXQpID0+IGFjYy5wdXNoKGlucHV0KTtcbiAqIEltbXV0YWJsZS5MaXN0LnByb3RvdHlwZVtwcm90b2NvbHMucmVzdWx0XSA9ICh2YWx1ZSkgPT4gdmFsdWUuYXNJbW11dGFibGUoKTtcbiAqIGBgYFxuICpcbiAqIGBJbW11dGFibGUuTGlzdGAgYWxyZWFkeSBpbXBsZW1lbnRzIGBpdGVyYXRvcmAsIHNvIHdlIGRvbid0IGhhdmUgdG8gZG8gaXRcbiAqIG91cnNlbHZlcy5cbiAqXG4gKiBUaGUgYGluaXRgIGZ1bmN0aW9uIHJldHVybnMgYW4gZW1wdHkgbXV0YWJsZSBsaXN0LiBUaGlzIGlzIGltcG9ydGFudCBmb3JcbiAqIGltbXV0YWJsZS1qcyBiZWNhdXNlIGl0cyBkZWZhdWx0IGxpc3RzIGFyZSBpbW11dGFibGUsIGFuZCBpbW11dGFibGUgbGlzdHNcbiAqIG1lYW4gdGhhdCBhIG5ldyBsaXN0IGhhcyB0byBiZSBjcmVhdGVkIHdpdGggZXZlcnkgcmVkdWN0aW9uIHN0ZXAuIEl0IHdvdWxkXG4gKiB3b3JrIGZpbmUsIGJ1dCBpdCdzIHF1aXRlIGluZWZmaWNpZW50LlxuICpcbiAqIFRoZSBgc3RlcGAgZnVuY3Rpb24gYWRkcyB0aGUgbmV4dCB2YWx1ZSB0byB0aGUgYWxyZWFkeS1jcmVhdGVkIGxpc3QuXG4gKiBgSW1tdXRhYmxlLkxpc3RgIHByb3ZpZGVzIGEgYHB1c2hgIGZ1bmN0aW9uIHRoYXQgd29ya3MgbGlrZSBhbiBhcnJheSdzXG4gKiBgcHVzaGAsIGV4Y2VwdCB0aGF0IGl0IHJldHVybnMgdGhlIG5ldyBsaXN0IHdpdGggdGhlIHZhbHVlIHB1c2hlZCBvbnRvIGl0LlxuICogVGhpcyBpcyBwZXJmZWN0IGZvciBvdXIgYHN0ZXBgIGZ1bmN0aW9uLlxuICpcbiAqIFRoZSBgcmVzdWx0YCBmdW5jdGlvbiBjb252ZXJ0cyB0aGUgbm93LWZpbmlzaGVkIG11dGFibGUgbGlzdCBpbnRvIGFuXG4gKiBpbW11dGFibGUgb25lLCB3aGljaCBpcyB3aGF0J3MgZ29pbmcgdG8gYmUgZXhwZWN0ZWQgaWYgd2UncmUgdHJhbnNkdWNpbmdcbiAqIHNvbWV0aGluZyBpbnRvIGFuIGBJbW11dGFibGUuTGlzdGAuIEluIG1vc3QgY2FzZXMsIGByZXN1bHRgIGRvZXNuJ3QgaGF2ZSB0b1xuICogZG8gYW55IHdvcmssIGJ1dCBzaW5jZSB3ZSdyZSBjcmVhdGluZyBhbiBpbnRlcm1lZGlhdGUgcmVwcmVzZW50YXRpb24gb2Ygb3VyXG4gKiBjb2xsZWN0aW9uIHR5cGUgaGVyZSwgdGhpcyBsZXRzIHVzIGNyZWF0ZSB0aGUgY29sbGVjdGlvbiB0aGF0IHdlIGFjdHVhbGx5XG4gKiB3YW50IHRvIG91dHB1dC4gKFdpdGhvdXQgYHJlc3VsdGAsIHdlIHdvdWxkIGhhdmUgdG8gdXNlIGltbXV0YWJsZSBsaXN0cyBhbGxcbiAqIHRoZSB3YXkgdGhyb3VnaCwgY3JlYXRpbmcgYSBuZXcgb25lIHdpdGggZWFjaCBgc3RlcGAgZnVuY3Rpb24sIHNpbmNlIHdlXG4gKiB3b3VsZG4ndCBiZSBhYmxlIHRvIG1ha2UgdGhpcyBjb252ZXJzdGlvbiBhdCB0aGUgZW5kLilcbiAqXG4gKiBXaXRoIHRob3NlIHByb3RvY29scyBpbXBsZW1lbnRlZCBvbiB0aGUgcHJvdG90eXBlLCBgSW1tdXRhYmxlLkxpc3RgXG4gKiBjb2xsZWN0aW9ucyBjYW4gbm93IHN1cHBvcnQgYW55IHRyYW5zZHVjdGlvbiB3ZSBjYW4gb2ZmZXIuXG4gKlxuICogIyMjIFByb3RvY29sc1xuICpcbiAqIEFmdGVyIHRhbGtpbmcgYSBsb3QgYWJvdXQgcHJvdG9jb2xzIGFuZCBzaG93aW5nIGhvdyB0aGV5J3JlIHByb3BlcnRpZXMgYWRkZWRcbiAqIHRvIGFuIG9iamVjdCwgaXQncyBwcm9iYWJseSBwcmV0dHkgb2J2aW91cyB0aGF0IHRoZXJlJ3MgYmVlbiBubyBtZW50aW9uIG9mXG4gKiB3aGF0IHRoZSBhY3R1YWwgbmFtZXMgb2YgdGhvc2UgcHJvcGVydGllcyBhcmUuIFRoYXQncyB3aGF0XG4gKiBge0BsaW5rIG1vZHVsZTp4ZHVjZS10b29scy5wcm90b2NvbHN8cHJvdG9jb2xzfWAgaXMgZm9yLlxuICpcbiAqIFRoZSBiZXN0IHdheSB0byB1c2UgdGhlc2Uga2V5cyBjYW4gYmUgc2VlbiBpbiB0aGUgaW1tdXRhYmxlLWpzIGV4YW1wbGUgYWJvdmUuXG4gKiBJbnN0ZWFkIG9mIHdvcnJ5aW5nIGFib3V0IHRoZSBuYW1lIG9mIHRoZSBrZXkgZm9yIHRoZSBgaW5pdGAgcHJvdG9jb2wsIHRoZVxuICogdmFsdWUgb2YgYHByb3RvY29scy5pbml0YCBpcyB1c2VkLlxuICpcbiAqIGB7QGxpbmsgbW9kdWxlOnhkdWNlLXRvb2xzLnByb3RvY29sc3xwcm90b2NvbHN9YCBkZWZpbmVzIHRoZXNlIHByb3RvY29sXG4gKiBwcm9wZXJ0eSBuYW1lcy5cbiAqXG4gKiAtIGBpbml0YFxuICogLSBgc3RlcGBcbiAqIC0gYHJlc3VsdGBcbiAqIC0gYHJlZHVjZWRgOiB1c2VkIGludGVybmFsbHkgdG8gbWFyayBhIGNvbGxlY3Rpb24gYXMgYWxyZWFkeSByZWR1Y2VkXG4gKiAtIGB2YWx1ZWA6IHVzZWQgaW50ZXJuYWxseSB0byBwcm92aWRlIHRoZSBhY3R1YWwgdmFsdWUgb2YgYSByZWR1Y2VkXG4gKiAgIGNvbGxlY3Rpb25cbiAqXG4gKiBUaGUgZmluYWwgdHdvIHZhbHVlcyBkb24ndCBoYXZlIGEgbG90IG9mIHVzZSBvdXRzaWRlIHRoZSBsaWJyYXJ5IHVubGVzc1xuICogeW91J3JlIHdyaXRpbmcgeW91ciBvd24gdHJhbnNkdWNlcnMuXG4gKlxuICogIyMgSG93IE9iamVjdHMgQXJlIFRyZWF0ZWRcbiAqXG4gKiBPYmplY3RzIGJlYXIgc29tZSB0aG91Z2h0IGJlY2F1c2UgcmVndWxhcmx5LCB0aGV5IGFyZW4ndCBjYW5kaWRhdGVzIGZvclxuICogaXRlcmF0aW9uIChhbmQgdGhlcmVmb3JlIGZvciB0cmFuc2R1Y3Rpb24gaW4gZ2VuZXJhbCkuIFRoZXkgZG9uJ3QgaGF2ZSBhIHZlcnlcbiAqIHN0cmFpZ2h0Zm9yd2FyZCBpZGVhIG9mIG9yZGVyLCBhbmQgdGhleSBoYXZlICp0d28qIHBpZWNlcyBvZiBkYXRhIChrZXkgYW5kXG4gKiB2YWx1ZSkgZm9yIGV2ZXJ5IGVsZW1lbnQgaW5zdGVhZCBvZiBvbmUuIFlldCBpdCdzIHVuZGVuaWFibGUgdGhhdCBhdCBsZWFzdFxuICogZm9yIG1vc3QgdHJhbnNmb3JtYXRpb25zLCBiZWluZyBhYmxlIHRvIGFwcGx5IHRoZW0gdG8gb2JqZWN0cyB3b3VsZCBiZSBxdWl0ZVxuICogaGFuZHkuXG4gKlxuICogRm9yIHRoYXQgcmVhc29uLCBzcGVjaWFsIHN1cHBvcnQgaXMgcHJvdmlkZWQgZW5kLXRvLWVuZCBmb3Igb2JqZWN0cy5cbiAqXG4gKiAjIyMgT2JqZWN0IGl0ZXJhdGlvblxuICpcbiAqIEl0ZXJhdGluZyBvdmVyIGFuIG9iamVjdCB3aWxsIHByb2R1Y2Ugb25lIG9iamVjdCBwZXIgcHJvcGVydHkgb2YgdGhlIG9yaWdpbmFsXG4gKiBvYmplY3QuIEFuIG9yZGVyIGlzIGltcG9zZWQ7IGJ5IGRlZmF1bHQsIHRoaXMgb3JkZXIgdGhlIHNhbWUgYXMgdGhlIG9yZGVyaW5nXG4gKiBvZiBrZXlzIGluIHBvc3QtRVM2IEphdmFzY3JpcHQ6XG4gKlxuICogMS4gS2V5cyB0aGF0IGFyZSBpbnRlZ2VycywgaW4gYXNjZW5kaW5nIG51bWVyaWNhbCBvcmRlclxuICogMi4gQWxsIG90aGVyIHN0cmluZyBrZXlzLCBpbiB0aGUgb3JkZXIgaW4gd2hpY2ggdGhleSB3ZXJlIGFkZGVkIHRvIHRoZSBvYmplY3RcbiAqIDMuIEFsbCBzeW1ib2wga2V5cywgaW4gdGhlIG9yZGVyIGluIHdoaWNoIHRoZXkgd2VyZSBhZGRlZCB0byB0aGUgb2JqZWN0XG4gKlxuICogVGhlIGB7QGxpbmsgbW9kdWxlOnhkdWNlLXRvb2xzLml0ZXJhdG9yfGl0ZXJhdG9yfWAgZnVuY3Rpb24gY2FuIGJlIHBhc3NlZCBhXG4gKiBzb3J0aW5nIGZ1bmN0aW9uIHRoYXQgY2FuIHNvcnQga2V5cyBpbiBhbnkgb3RoZXIgd2F5LlxuICpcbiAqIFRoZSByZXN1bHQgb2YgdGhlIGl0ZXJhdGlvbiwgaXMgYSBzZXQgb2Ygb2JqZWN0cyBlYWNoIHdpdGggYSBzaW5nbGUgcHJvcGVydHksXG4gKiBvbmUgZm9yIGVhY2ggZW51bWVyYWJsZSBvd24gcHJvcGVydHkgb24gdGhlIG9yaWdpbmFsIG9iamVjdC4gVGhlIHN0YW5kYXJkXG4gKiBvcmRlcmluZyBmb3Igb2JqZWN0cyAoZnJvbSBFUzYgb253YXJkKSBpcyBhcyBmb2xsb3dzOlxuICpcbiAqICMjIyBUcmFuc2Zvcm1pbmcgb2JqZWN0c1xuICpcbiAqIFdoaWxlIGl0ZXJhdGluZyBvdmVyIG9iamVjdHMgaW4gdGhpcyB3YXkgaXMgc3RyYWlnaHRmb3J3YXJkLCB0aGUgc3ludGF4IG9mXG4gKiBvYmplY3RzIG1ha2VzIGl0IHVnbHkgdG8gdHJhbnNmb3JtIHRoZW0gaW4gdGhpcyBmb3JtLiBIZXJlJ3MgYW4gZXhhbXBsZSBvZiBhXG4gKiB0cmFuc2Zvcm1hdGlvbiBmdW5jdGlvbiB0aGF0IG1ha2VzIHRoZSBvYmplY3QncyBrZXlzIHVwcGVyLWNhc2UgYW5kIGFkZHMgb25lXG4gKiB0byBlYWNoIG9mIHRoZSB2YWx1ZXM6XG4gKlxuICogYGBgXG4gKiBmdW5jdGlvbiB0cmFuc2Zvcm0ob2JqKSB7XG4gKiAgIGNvbnN0IGtleSA9IE9iamVjdC5rZXlzKG9iailbMF07XG4gKiAgIGNvbnN0IHZhbHVlID0gb2JqW2tleV07XG4gKiAgIHJldHVybiB7IFtrZXkudG9VcHBlckNhc2UoKV06IHZhbHVlICsgMSB9O1xuICogfVxuICogYGBgXG4gKlxuICogQSBoZWxwZXIgZnVuY3Rpb24gbmFtZWQgYHtAbGluayBtb2R1bGU6eGR1Y2UtdG9vbHMucHJvcGVydHl8cHJvcGVydHl9YCBjYW5cbiAqIGltcHJvdmUgdGhpcyBieSBoYW5kbGluZyB0aGUgYm9pbGVycGxhdGUuXG4gKlxuICogYGBgXG4gKiBmdW5jdGlvbiBpbXByb3ZlZFRyYW5zZm9ybShvYmopIHtcbiAqICAgY29uc3Qge2ssIHZ9ID0gcHJvcGVydHkob2JqKTtcbiAqICAgcmV0dXJuIHsgW2sudG9VcHBlckNhc2UoKV06IHYgKyAxIH07XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiAjIyMgUmVkdWNpbmcgb2JqZWN0c1xuICpcbiAqIFRoZSBidWlsdC1pbiByZWR1Y2VycyAoZm9yIGFycmF5cywgb2JqZWN0cywgc3RyaW5ncywgYW5kIGl0ZXJhdG9ycylcbiAqIHVuZGVyc3RhbmQgdGhlc2Ugc2luZ2xlLXByb3BlcnR5IG9iamVjdHMgYW5kIHJlZHVjZSB0aGVtIGluIHRoZSBwcm9wZXIgbWFubmVyXG4gKiB3aXRob3V0IGFueSBmdXJ0aGVyIHdvcmsuXG4gKlxuICogVGhhdCdzIGl0IGZvciBvYmplY3Qtb2JqZWN0IHJlZHVjdGlvbi4gQ29udmVydGluZyBiZXR3ZWVuIG9iamVjdHMgYW5kIG90aGVyXG4gKiB0eXBlcyBpcyBhbm90aGVyIG1hdHRlci5cbiAqXG4gKiBFdmVyeSB0cmFuc2R1Y2VyIGZ1bmN0aW9uIGV4Y2VwdCBmb3JcbiAqIGB7QGxpbmsgbW9kdWxlOnhkdWNlLXRvb2xzLnNlcXVlbmNlfHNlcXVlbmNlfWAgaXMgY2FwYWJsZSBvZiB0dXJuaW5nIGFuXG4gKiBvYmplY3QgaW50byBhIGRpZmZlcmVudCB0eXBlIG9mIGNvbGxlY3Rpb24sIHR1cm5pbmcgYSBkaWZmZXJlbnQgdHlwZSBvZlxuICogY29sbGVjdGlvbiBpbnRvIGFuIG9iamVjdCwgb3IgYm90aC4gT2JqZWN0cyBhcmUgZGlmZmVyZW50IGJlY2F1c2UgdGhleSdyZSB0aGVcbiAqIG9ubHkgXCJjb2xsZWN0aW9uc1wiIHRoYXQgaGF2ZSB0d28gZGlmZmVyZW50IHBpZWNlcyBvZiBkYXRhIHBlciBlbGVtZW50LlxuICogQmVjYXVzZSBvZiB0aGlzLCB3ZSBoYXZlIHRvIGhhdmUgYSBzdHJhdGVneSBvbiBob3cgdG8gbW92ZSBmcm9tIG9uZSB0b1xuICogYW5vdGhlci5cbiAqXG4gKiBUcmFuc2R1Y2luZyBhbiBvYmplY3QgaW50byBhIGRpZmZlcmVudCB0eXBlIGlzIGdlbmVyYWxseSBwcmV0dHkgZWFzeS4gSWYgYW5cbiAqIG9iamVjdCBpcyBjb252ZXJ0ZWQgaW50byBhbiBhcnJheSwgZm9yIGluc3RhbmNlLCB0aGUgYXJyYXkgZWxlbWVudHMgd2lsbCBlYWNoXG4gKiBiZSBzaW5nbGUtcHJvcGVydHkgb2JqZWN0cywgb25lIHBlciBwcm9wZXJ0eSBvZiB0aGUgb3JpZ2luYWwgb2JqZWN0LlxuICpcbiAqIFN0cmluZ3MgYXJlIGEgZGlmZmVyZW50IHN0b3J5LCBzaW5jZSBlbmNvZGluZyBhIHNpbmdsZS1wcm9wZXJ0eSBvYmplY3QgdG8gYVxuICogc3RyaW5nIGlzbid0IHBvc3NpYmxlIChiZWNhdXNlIGV2ZXJ5IFwiZWxlbWVudFwiIG9mIGEgc3RyaW5nIGhhcyB0byBiZSBhIHNpbmdsZVxuICogY2hhcmFjdGVyKS4gU3RyaW5ncyB0aGF0IGFyZSBwcm9kdWNlZCBmcm9tIG9iamVjdHMgd2lsbCBpbnN0ZWFkIGp1c3QgYmUgdGhlXG4gKiBvYmplY3QgdmFsdWVzLCBjb25jYXRlbmF0ZWQuIEJlY2F1c2Ugb2JqZWN0cyBhcmUgaXRlcmF0ZWQgaW4gYSBwYXJ0aWN1bGFyXG4gKiBvcmRlciwgdGhpcyBjb252ZXJzaW9uIHdpbGwgYWx3YXlzIHByb2R1Y2UgdGhlIHNhbWUgc3RyaW5nLCBidXQgZXhjZXB0IGluXG4gKiBzb21lIHZlcnkgc3BlY2lmaWMgY2FzZXMgdGhlcmUgcmVhbGx5IGlzbid0IGEgbG90IG9mIHVzZSBmb3IgdGhpcyBjb252ZXJzaW9uLlxuICpcbiAqIGBgYFxuICogY29uc3Qgb2JqID0ge2E6IDEsIGI6IDJ9O1xuICpcbiAqIGxldCByZXN1bHQgPSBhc0FycmF5KG9iaik7XG4gKiAvLyByZXN1bHQgPSBbe2E6IDF9LCB7YjogMn1dXG4gKlxuICogcmVzdWx0ID0gYXNJdGVyYXRvcihvYmopO1xuICogLy8gcmVzdWx0IGlzIGFuIGl0ZXJhdG9yIHdpdGggdHdvIHZhbHVlczoge2E6IDF9IGFuZCB7YjogMn1cbiAqXG4gKiByZXN1bHQgPSBpbnRvKEltbXV0YWJsZS5MaXN0KCksIG9iailcbiAqIC8vIHJlc3VsdCBpcyBhbiBpbW11dGFibGUgbGlzdCB3aXRoIHR3byBlbGVtZW50czoge2E6IDF9IGFuZCB7YjogMn1cbiAqXG4gKiByZXN1bHQgPSBhc1N0cmluZyhvYmopO1xuICogLy8gcmVzdWx0IGlzICcxMidcbiAqIGBgYFxuICpcbiAqIFRoZSBvcHBvc2l0ZSBjb252ZXJzaW9uIGRlcGVuZHMgb24gdGhlIHZhbHVlcyBpbnNpZGUgdGhlIGNvbGxlY3Rpb25zLiBJZlxuICogdGhvc2UgdmFsdWVzIGFyZSBvYmplY3RzLCB0aGVuIHRoZSByZXN1bHQgaXMgYW4gb2JqZWN0IHdpdGggYWxsIG9mIHRoZVxuICogb2JqZWN0cyBjb21iaW5lZCAoaWYgbW9yZSB0aGFuIG9uZSBoYXMgdGhlIHNhbWUga2V5LCB0aGUgbGFzdCBvbmUgaXMgdGhlIG9uZVxuICogdGhhdCdzIGtlcHQpLiBPdGhlcndpc2UsIGtleXMgYXJlIGNyZWF0ZWQgZm9yIGVhY2ggb2YgdGhlIGVsZW1lbnRzLCBzdGFydGluZ1xuICogd2l0aCBgMGAgYW5kIGluY3JlYXNpbmcgZnJvbSB0aGVyZS5cbiAqXG4gKiBUaGlzIG1lYW5zIHRoYXQgY29udmVydGluZyBhbiBvYmplY3QgdG8gYW55IG5vbi1zdHJpbmcgY29sbGVjdGlvbiBhbmQgYmFja1xuICogcHJvZHVjZXMgdGhlIG9yaWdpbmFsIG9iamVjdC5cbiAqXG4gKiBgYGBcbiAqIGxldCByZXN1bHQgPSBhc09iamVjdChbe2E6IDF9LCB7YjogMn1dKTtcbiAqIC8vIHJlc3VsdCA9IHthOiAxLCBiOiAyfVxuICpcbiAqIHJlc3VsdCA9IGFzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyByZXN1bHQgPSB7MDogMSwgMTogMiwgMjogM31cbiAqXG4gKiByZXN1bHQgPSBhc09iamVjdCgnaGVsbG8nKTtcbiAqIC8vIHJlc3VsdCA9IHswOiAnaCcsIDE6ICdlJywgMjogJ2wnLCAzOiAnbCcsIDQ6ICdvJ31cbiAqIGBgYFxuICpcbiAqIEBtb2R1bGUgeGRjb3JlXG4gKi9cblxuZXhwb3J0IHsgcHJvdG9jb2xzLCBpc0ltcGxlbWVudGVkIH0gZnJvbSBcIm1vZHVsZXMvcHJvdG9jb2xcIjtcbmV4cG9ydCB7IGl0ZXJhdG9yLCBpc0l0ZXJhYmxlIH0gZnJvbSBcIm1vZHVsZXMvaXRlcmF0aW9uXCI7XG5leHBvcnQge1xuICBjb21wbGV0ZSxcbiAgdW5jb21wbGV0ZSxcbiAgaXNDb21wbGV0ZWQsXG4gIGVuc3VyZUNvbXBsZXRlZCxcbiAgZW5zdXJlVW5jb21wbGV0ZWQsXG4gIHJlZHVjZSxcbiAgdG9GdW5jdGlvbixcbiAgdG9SZWR1Y2VyLFxuICB0b1RyYW5zZHVjZXJcbn0gZnJvbSBcIm1vZHVsZXMvcmVkdWN0aW9uXCI7XG5leHBvcnQge1xuICBpc0FycmF5LFxuICBpc0Z1bmN0aW9uLFxuICBpc0dlbmVyYXRvckZ1bmN0aW9uLFxuICBpc051bWJlcixcbiAgaXNPYmplY3QsXG4gIGlzU3RyaW5nXG59IGZyb20gXCJtb2R1bGVzL3V0aWxzXCI7XG5cbi8qKlxuICogQSBzdGFuZGFyZCBKYXZhU2NyaXB0IGl0ZXJhYmxlLiBUaGlzIG9iamVjdCBoYXMgYSBwcm9wZXJ0eSBuYW1lZFxuICogYFtTeW1ib2wuaXRlcmF0b3JdYCB3aGljaCBwcm92aWRlcyBhbiBvYmplY3QgdGhhdCBzYXRpc2ZpZXMgdGhlXG4gKiB7QGxpbmsgZXh0ZXJuYWw6SXRlcmF0b3J8SXRlcmF0b3J9IHByb3RvY29sLlxuICpcbiAqIEBleHRlcm5hbCBJdGVyYWJsZVxuICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9JdGVyYXRpb25fcHJvdG9jb2xzI1RoZV9pdGVyYWJsZV9wcm90b2NvbFxuICovXG5cbi8qKlxuICogQSBzdGFuZGFyZCBKYXZhU2NyaXB0IGl0ZXJhdG9yLiBUaGlzIG9iamVjdCBoYXMgYSBmdW5jdGlvbiBwcm9wZXJ0eSBuYW1lZFxuICogYG5leHRgIHRoYXQsIGVhY2ggdGltZSBpdCdzIGNhbGxlZCwgcmV0dXJucyBhIG5ldyBvYmplY3Qgd2l0aCB0d29cbiAqIHByb3BlcnRpZXM6IGB2YWx1ZWAsIHdoaWNoIGNvbnRhaW5zIHRoZSBpdGVyYXRvcidzIHZhbHVlIGF0IHRoYXQgcG9pbnQsIGFuZFxuICogYGRvbmVgLCB3aGljaCBpcyBgZmFsc2VgIHVudGlsIHRoZSBpdGVyYXRvciBoYXMgaGFkIGFsbCBvZiBpdHMgdmFsdWVzIHJlYWQuXG4gKlxuICogQGV4dGVybmFsIEl0ZXJhdG9yXG4gKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0l0ZXJhdGlvbl9wcm90b2NvbHMjVGhlX2l0ZXJhdG9yX3Byb3RvY29sXG4gKi9cblxuLyoqXG4gKiBBIGZ1bmN0aW9uIHRoYXQgY2FuIGhhdmUgYW4gaXRlcmF0b3IgY3JlYXRlZCBmb3IgaXQuXG4gKlxuICogQGNhbGxiYWNrIEl0ZXJhYmxlRnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGRjb3JlXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IGZvciB0aGUgaXRlcmF0aW9uLiBUaGlzIGlzIGAwYCB0aGUgZmlyc3RcbiAqICAgICB0aW1lIHRoZSBmdW5jdGlvbiBpcyBjYWxsZWQgYW5kIGluY3JlYXNlcyBieSAxIGZvciBlYWNoIGNhbGxcbiAqICAgICB0aGVyZWFmdGVyLlxuICogQHBhcmFtIHsqfSBsYXN0IFRoZSByZXR1cm4gdmFsdWUgb2YgdGhlIGZ1bmN0aW9uIHdoZW4gaXQgd2FzIGNhbGxlZCBvbiB0aGVcbiAqICAgICBwcmV2aW91cyBpdGVyYXRpb24uIElmIHRoaXMgaXMgdGhlIGZpcnN0IGNhbGwgdG8gdGhlIGZ1bmN0aW9uLCB0aGVuXG4gKiAgICAgdGhpcyB2YWx1ZSB3aWxsIGJlIGB1bmRlZmluZWRgLCBtZWFuaW5nIHRoYXQgdGhlIGZ1bmN0aW9uIGNhbiBzZXQgYVxuICogICAgIGRlZmF1bHQgdmFsdWUgZm9yIHRoYXQgZmlyc3QgcGFzcy5cbiAqIEByZXR1cm5zIHsqfSBUaGUgcmV0dXJuIHZhbHVlIG9mIHRoZSBmdW5jdGlvbiwgd2hpY2ggd2lsbCBiZSB0aGUgdmFsdWUgZm9yXG4gKiAgICAgdGhhdCBpdGVyYXRpb24uXG4gKi9cblxuLyoqXG4gKiBBIGZ1bmN0aW9uIHRoYXQsIHdoZW4gY2FsbGVkLCBwcm9kdWNlcyBhIG5ldywgZW1wdHkgY29sbGVjdGlvbiBvZiB3aGF0ZXZlclxuICogdHlwZSBpcyBiZWluZyB3b3JrZWQgd2l0aC5cbiAqXG4gKiBAY2FsbGJhY2sgSW5pdEZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkY29yZVxuICogQHJldHVybnMgeyp9IEEgbmV3LCBlbXB0eSByZXByZXNlbnRhdGl2ZSBvZiB0aGUgY29sbGVjdGlvbi5cbiAqL1xuXG4vKipcbiAqIEEgZnVuY3Rpb24gdGhhdCBhY2NlcHRzIGEgY29sbGVjdGlvbiBhbmQgYSBuZXcgZWxlbWVudCBvZiB0aGF0IGNvbGxlY3Rpb24gYW5kXG4gKiByZXR1cm5zIHRoZSBjb2xsZWN0aW9uIHdpdGggdGhlIG5ldyBlbGVtZW50IGFkZGVkIHRvIGl0LiBUaGlzIGlzIHVzZWQgdG9cbiAqIGJ1aWxkIHVwIGEgbmV3IGNvbGxlY3Rpb24gKHN0YXJ0aW5nIHdpdGggd2hhdGV2ZXJcbiAqIHtAbGluayBtb2R1bGU6eGRjb3JlLkluaXRGdW5jdGlvbnx0aGUgaW5pdCBmdW5jdGlvbn0gcmV0dXJucykgcGllY2UgYnkgcGllY2VcbiAqIGZyb20gaXRzIGVsZW1lbnRzLlxuICpcbiAqIFRoaXMgaXMgaW4gZXZlcnkgd2F5IGEgcmVkdWNlciBmdW5jdGlvbi4gVGhlIG5hbWUgJ3N0ZXAnIGNvbWVzIGZyb20gdGhlIGZhY3RcbiAqIHRoYXQgdGhlc2UgcmVkdWN0aW9uIGZ1bmN0aW9ucyByZWR1Y2Ugb25lIGVsZW1lbnQgYXQgYSB0aW1lLCBzdGVwIGJ5IHN0ZXAuXG4gKlxuICogSXQgaXMgdXAgdG8gdGhlIGltcGxlbWVudGF0aW9uIHdoZXRoZXIgdGhlIHJldHVybmVkIGNvbGxlY3Rpb24gaXMgYSBtb2RpZmllZFxuICogZm9ybSBvZiB0aGUgb3JpZ2luYWwgY29sbGVjdGlvbiBvciB3aGV0aGVyIGl0IGlzIGEgbmV3IGNvbGxlY3Rpb24gYWx0b2dldGhlci5cbiAqXG4gKiBAY2FsbGJhY2sgU3RlcEZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkY29yZVxuICogQHBhcmFtIHsqfSBhY2MgQSBjb2xsZWN0aW9uLCBwZXJoYXBzIHdpdGggc29tZSBtZW1iZXJzIGFscmVhZHkgYWRkZWQgdG8gaXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIEEgbmV3IGVsZW1lbnQgdG8gYmUgYWRkZWQgdG8gdGhhdCBjb2xsZWN0aW9uLlxuICogQHJldHVybnMgVGhlIG9yaWdpbmFsIGNvbGxlY3Rpb24gd2l0aCB0aGUgbmV3IHZhbHVlIGFkZGVkIHRvIGl0LlxuICovXG5cbi8qKlxuICogQSBmdW5jdGlvbiB0aGF0IGFjY2VwdHMgYSBmdWxseSByZWR1Y2VkIGNvbGxlY3Rpb24gYW5kIHJldHVybnMgdGhhdFxuICogY29sbGVjdGlvbiB3aXRoIGFueSBsYXN0LW1pbnV0ZSBtb2RpZmljYXRpb25zIHRoYXQgbWlnaHQgbmVlZCB0byBiZSBkb25lIHRvXG4gKiBpdC5cbiAqXG4gKiBJbiBtb3N0IGNhc2VzIHRoaXMgZnVuY3Rpb24gd2lsbCBzaW1wbHkgcmV0dXJuIGl0cyBhcmd1bWVudCwgdW5tb2RpZmllZCwgYnV0XG4gKiBpdCBkb2VzIGFmZm9yZCB0aGUgdHJhbnNkdWNlciBhbiBvcHBvcnR1bml0eSB0byBtYWtlIGFueSBmaW5hbCBtb2RpZmljYXRpb25zXG4gKiB0aGF0IG1pZ2h0IGJlIG5lY2Vzc2FyeSBiZWZvcmUgdGhlIHJlc3VsdCBpcyByZXR1cm5lZCBmcm9tIHRoZSB0cmFuc2R1Y3Rpb25cbiAqIHByb2Nlc3MuXG4gKlxuICogQGNhbGxiYWNrIFJlc3VsdEZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkY29yZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgZnVsbHkgcmVkdWNlZCBjb2xsZWN0aW9uLlxuICogQHJldHVybnMgeyp9IFRoZSByZWR1Y2VkIGNvbGxlY3Rpb24gd2l0aCBhbnkgaW1wbGVtZW50YXRpb24tZGVwZW5kZW50IGNoYW5nZXNcbiAqICAgICB0aGF0IG1pZ2h0IGJlIGRlZW1lZCBuZWNlc3NhcnkuXG4gKi9cblxuLyoqXG4gKiBBbiBvYmplY3QgdGhhdCBwcm92aWRlcyB0aGUgaW5mb3JtYXRpb24gbmVjZXNzYXJ5IHRvIGJ1aWxkIGFuZCBwb3B1bGF0ZSBhIG5ld1xuICogb2JqZWN0IG9mIGEgcmVkdWNpYmxlIHR5cGUuIFRoaXMgaW5mb3JtYXRpb24gaXMgdXNlZCBieSB0aGUgdHJhbnNkdWN0aW9uXG4gKiBlbmdpbmUgdG8gY3JlYXRlIGEgcmVzdWx0IGZyb20gYSByZWR1Y3Rpb24gd2l0aG91dCBoYXZpbmcgdG8gaGF2ZSBpdHMgb3duXG4gKiB0eXBlLXNwZWNpZmljIGNvZGU7IHRoZSBjcmVhdGlvbiwgcG9wdWxhdGlvbiwgYW5kIGZpbmFsaXphdGlvbiBvZiB0aGUgcmVzdWx0XG4gKiBhcmUgZGVsZWdhdGVkIGluc3RlYWQgdG8gdGhpcyByZWR1Y2VyIG9iamVjdC5cbiAqIFxuICogTm90ZSB0aGF0IGEgXCJ0cmFuc2R1Y2VyIG9iamVjdFwiIGhhcyBleGFjdGx5IHRoZSBzYW1lIHN0cnVjdHVyZS4gVGhlIG9ubHlcbiAqIGRpZmZlcmVuY2UgaXMgdGhhdCB0aGUgc3RlcCBmdW5jdGlvbiBpbiBhIHRyYW5zZHVjZXIgb2JqZWN0IG1vZGlmaWVzIHRoZVxuICogZWxlbWVudHMgYmVmb3JlIGl0IHJlZHVjZXMgdGhlbSwgd2hpbGUgYSByZWR1Y2VyIG9iamVjdCB3aWxsIG5vdC4gQXMgYVxuICogY29yb2xsYXJ5LCBldmVyeSByZWR1Y2VyIG9iamVjdCBpcyBhbHNvIGEgdHJhbnNkdWNlciBvYmplY3QsIGJ1dCB0aGUgY29udmVyc2VcbiAqIGlzIG5vdCB0cnVlLlxuICpcbiAqIEB0eXBlZGVmIFJlZHVjZXJPYmplY3RcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGRjb3JlXG4gKiBAcHJvcGVydHkge21vZHVsZTp4ZGNvcmUuSW5pdEZ1bmN0aW9ufSBTeW1ib2wuZm9yKFwidHJhbnNkdWNlci9pbml0XCIpIEFcbiAqICAgICBmdW5jdGlvbiB0aGF0IGNhbiBjcmVhdGUgYSBuZXcsIGVtcHR5IGNvcHkgb2YgdGhlIHJlZHVjaWJsZSB0eXBlLlxuICogQHByb3BlcnR5IHttb2R1bGU6eGRjb3JlLlN0ZXBGdW5jdGlvbn0gU3ltYm9sLmZvcihcInRyYW5zZHVjZXIvc3RlcFwiKSBBXG4gKiAgICAgZnVuY3Rpb24gdGhhdCBjYW4gYWNjZXB0IGEgdmFsdWUgb2YgdGhlIHJlZHVjaWJsZSB0eXBlIGFuZCBhIG5ldyBlbGVtZW50XG4gKiAgICAgdG8gYmUgYWRkZWQgdG8gaXQgYW5kIHJldHVybiB0aGUgcmVkdWNpYmxlIHdpdGggdGhlIG5ldyBlbGVtZW50XG4gKiAgICAgaW5jb3Jwb3JhdGVkLlxuICogQHByb3BlcnR5IHttb2R1bGU6eGRjb3JlLlJlc3VsdEZ1bmN0aW9ufSBTeW1ib2wuZm9yKFwidHJhbnNkdWNlci9yZXN1bHRcIikgQVxuICogICAgIGZ1bmN0aW9uIHRoYXQgYWNjZXB0cyBhIHZhbHVlIG9mIHRoZSByZWR1Y2libGUgdHlwZSBhbmQgcmV0dXJucyB0aGUgc2FtZVxuICogICAgIHZhbHVlIHdpdGggYW55IGZpbmFsIG1vZGlmaWNhdGlvbnMgdGhhdCBtaWdodCBiZSBuZWNlc3NhcnkgZm9yIGl0LlxuICovXG5cbi8qKlxuICogQSBmdW5jdGlvbiB0aGF0IGFjY2VwdHMgYSByZWR1Y2VyIG9iamVjdCwgd2hpY2ggaXQgdGhlbiBjaGFpbnMgYSB0cmFuc2R1Y2VyXG4gKiBvYmplY3QgdG8uIFRoaXMgaXMgdGhlIHByaW1hcnkgd2F5IG9mIGNyZWF0aW5nIGNvbXBvc2VkIHRyYW5zZHVjZXIgY2hhaW5zLlxuICogXG4gKiBBIHRyYW5zZHVjZXIgZnVuY3Rpb24gYmFzaWNhbGx5IGVuY2Fwc3VsYXRlcyBhIHRyYW5zZHVjZXIgb2JqZWN0IGFuZCB0aGVcbiAqIGFiaWxpdHkgdG8gY2hhaW4gaXQgdG8gd2hhdGV2ZXIgcmVkdWNlciBvYmplY3QgaXMgcGFzc2VkIHRvIGl0LlxuICogXG4gKiBAY2FsbGJhY2sgVHJhbnNkdWNlckZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkY29yZVxuICogQHBhcmFtIHttb2R1bGU6eGRjb3JlLlJlZHVjZXJPYmplY3R9IHJlZHVjZXIgVGhlIHJlZHVjZXIgb2JqZWN0ICh3aGljaCBtYXlcbiAqICAgICBhbHNvIGJlIGEgdHJhbnNkdWNlciBvYmplY3QpIHRoYXQgaXMgdGhlIG5leHQgcmVkdWNlciBpbiB0aGUgY2hhaW4uXG4gKiBAcmV0dXJucyB7bW9kdWxlOnhkY29yZS5SZWR1Y2VyT2JqZWN0fSBBIHRyYW5zZHVjZXIgb2JqZWN0IGNvbnNpc3Rpbmcgb2Ygc29tZVxuICogICAgIG5ldyB0cmFuc2R1Y2VyIG9iamVjdCBjaGFpbmVkIHRvIHRoZSBzdXBwbGllZCByZWR1Y2VyIG9iamVjdC5cbiAqLyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG4vKipcbiAqIEZ1bmN0aW9ucyB0byBoZWxwIHdpdGggaXRlcmF0aW9uIG92ZXIgaXRlcmFibGUgb2JqZWN0cyBhbmQgcGxhaW4gb2JqZWN0cy5cbiAqXG4gKiBAbW9kdWxlIHhkY29yZS9pdGVyYXRpb25cbiAqIEBwcml2YXRlXG4gKi9cblxuaW1wb3J0IHsgaXNJbXBsZW1lbnRlZCB9IGZyb20gXCJtb2R1bGVzL3Byb3RvY29sXCI7XG5pbXBvcnQgeyBpc0Z1bmN0aW9uLCBpc09iamVjdCwgaXNHZW5lcmF0b3JGdW5jdGlvbiB9IGZyb20gXCJtb2R1bGVzL3V0aWxzXCI7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBpdGVyYXRvciBvdmVyIGFuIG9iamVjdC5cbiAqXG4gKiBEZXRhaWxzIGFib3V0IHRoaXMgZnVuY3Rpb24gYXJlIGluY2x1ZGVkIGluIHRoZSBkb2N1bWVudGF0aW9uIGZvclxuICoge0BsaW5rIG1vZHVsZTp4ZGNvcmUuaXRlcmF0b3J8aXRlcmF0b3J9LlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmogVGhlIG9iamVjdCBiZWluZyBpdGVyYXRlZCBvdmVyLlxuICogQHJldHVybnMge2V4dGVybmFsOkl0ZXJhdG9yfSBBbiBpdGVyYXRvciBvdmVyIHRoZSBwcm9wZXJ0aWVzIG9mIGBvYmpgLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gb2JqZWN0SXRlcmF0b3Iob2JqKSB7XG4gIHJldHVybiAoZnVuY3Rpb24qKCkge1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuICAgIGxldCBpbmRleCA9IDA7XG5cbiAgICB3aGlsZSAoaW5kZXggPCBrZXlzLmxlbmd0aCkge1xuICAgICAgY29uc3QgayA9IGtleXNbaW5kZXgrK107XG4gICAgICB5aWVsZCB7IFtrXTogb2JqW2tdIH07XG4gICAgfVxuICB9KSgpO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYW4gaXRlcmF0b3Igb3ZlciBhIGZ1bmN0aW9uLlxuICpcbiAqIERldGFpbHMgYWJvdXQgdGhpcyBmdW5jdGlvbiBhcmUgaW5jbHVkZWQgaW4gdGhlIGRvY3VtZW50YXRpb24gZm9yXG4gKiB7QGxpbmsgbW9kdWxlOnhkY29yZS5pdGVyYXRvcnxpdGVyYXRvcn0uXG4gKlxuICogQHBhcmFtIHttb2R1bGU6eGRjb3JlLkl0ZXJhYmxlRnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcmV0dXJucyB7ZXh0ZXJuYWw6SXRlcmF0b3J9IEFuIGl0ZXJhdG9yIG92ZXIgdGhlIHJldHVybiB2YWx1ZXMgb2YgYGZuYC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGZ1bmN0aW9uSXRlcmF0b3IoZm4pIHtcbiAgcmV0dXJuIChmdW5jdGlvbiooKSB7XG4gICAgbGV0IGN1cnJlbnQ7XG4gICAgbGV0IGluZGV4ID0gMDtcblxuICAgIGZvciAoOzspIHtcbiAgICAgIGN1cnJlbnQgPSBmbihpbmRleCsrLCBjdXJyZW50KTtcbiAgICAgIGlmICh0eXBlb2YgY3VycmVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHlpZWxkIGN1cnJlbnQ7XG4gICAgfVxuICB9KSgpO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYW4gaXRlcmF0b3Igb3ZlciB0aGUgcHJvdmlkZWQgdmFsdWUuIFRoZSBmb3JtIG9mIHRoZSBpdGVyYXRpb25cbiAqIGRlcGVuZHMgb24gd2hhdCBraW5kIG9mIHZhbHVlIGlzIGJlaW5nIGl0ZXJhdGVkIG92ZXIuXG4gKlxuICogSWYgdGhlIHZhbHVlIGlzIGEgY29sbGVjdGlvbiBpbXBsZW1lbnRpbmcgdGhlIFtpdGVyYWJsZSBwcm90b2NvbF1bMV0gKGFycmF5cyxcbiAqIHN0cmluZ3MsIGdlbmVyYXRvcnMsIG9yIGEgY3VzdG9tIG9iamVjdCBzdXBwb3J0aW5nIHRoZSBwcm90b2NvbCkgdGhlbiB0aGVcbiAqIHByb2R1Y2VkIGl0ZXJhdG9yIHdpbGwgYmUgYXMgZXhwZWN0ZWQ6IGFuIG9iamVjdCB0aGF0IGltcGxlbWVudHMgdGhlXG4gKiBbaXRlcmF0b3IgcHJvdG9jb2xdWzJdIGJ5IHByb3ZpZGluZyBhIGBuZXh0YCBmdW5jdGlvbiB0aGF0IHJldHVybnMgZWFjaFxuICogY29sbGVjdGlvbiB2YWx1ZSBpbiB0dXJuLlxuICpcbiAqIGBgYFxuICogY29uc3QgaXRlciA9IGl0ZXJhdG9yKFsxLCAyLCAzXSk7XG4gKiBjb25zb2xlLmxvZyhpdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4gMVxuICogY29uc29sZS5sb2coaXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IDJcbiAqIGNvbnNvbGUubG9nKGl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiAzXG4gKiBjb25zb2xlLmxvZyhpdGVyLm5leHQoKS5kb25lKTsgICAgLy8gLT4gdHJ1ZVxuICogYGBgXG4gKlxuICogU3BlY2lhbCBzdXBwb3J0IGlzIHByb3ZpZGVkIGZvciB0d28gdHlwZXMgdGhhdCBhcmUgbm90IG5vcm1hbGx5IGl0ZXJhYmxlOlxuICogb2JqZWN0cyBhbmQgZnVuY3Rpb25zLlxuICpcbiAqIE9iamVjdHMgcmVzdWx0IGluIGFuIGl0ZXJhdG9yIHRoYXQgcHJvZHVjZXMgYSBzaW5nbGUtcHJvcGVydHkgb2JqZWN0IGZvclxuICogZXZlcnkga2V5L3ZhbHVlIHBhaXIgaW4gdGhlIHN1cHBsaWVkIG9iamVjdC4gVGhlIFtvcmRlciBvZiBpdGVyYXRpb25dWzNdIGlzXG4gKiB0aGUgc2FtZSBhcyBpdCBpcyBmb3Igb2JqZWN0cyBwb3N0LUVTMjAxNTpcbiAqXG4gKiAxLiBTdHJpbmcga2V5cyB0aGF0IGFyZSBpbnRlZ2VyIGluZGljZXMgaW4gYXNjZW5kaW5nIG51bWVyaWNhbCBvcmRlclxuICogMi4gQWxsIG90aGVyIHN0cmluZyBrZXlzIGluIHRoZSBvcmRlciBpbiB3aGljaCB0aGV5IHdlcmUgYWRkZWQgdG8gdGhlIG9iamVjdFxuICogMy4gQWxsIHN5bWJvbCBrZXlzIGluIHRoZSBvcmRlciBpbiB3aGljaCB0aGV5IHdlcmUgYWRkZWQgdG8gdGhlIG9iamVjdFxuICpcbiAqIGBgYFxuICogY29uc3Qgb2JqID0ge1xuICogICBbU3ltYm9sKFwiZmlyc3RcIildOiB0cnVlLFxuICogICAwMjogdHJ1ZSxcbiAqICAgMTA6IHRydWUsXG4gKiAgIDAxOiB0cnVlLFxuICogICAyOiB0cnVlLFxuICogICBbU3ltYm9sKFwic2Vjb25kXCIpXTogdHJ1ZVxuICogfTtcbiAqIGNvbnN0IGl0ZXIgPSBpdGVyYXRvcihvYmopO1xuICogY29uc29sZS5sb2coaXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IHsgJzInOiB0cnVlIH1cbiAqIGNvbnNvbGUubG9nKGl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiB7ICcxMCc6IHRydWUgfVxuICogY29uc29sZS5sb2coaXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IHsgJzAyJzogdHJ1ZSB9XG4gKiBjb25zb2xlLmxvZyhpdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4geyAnMDEnOiB0cnVlIH1cbiAqIGNvbnNvbGUubG9nKGl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiB7IFtTeW1ib2woJ2ZpcnN0JyldOiB0cnVlIH1cbiAqIGNvbnNvbGUubG9nKGl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiB7IFtTeW1ib2woJ3NlY29uZCcpXTogdHJ1ZSB9XG4gKiBjb25zb2xlLmxvZyhpdGVyLm5leHQoKS5kb25lKTsgICAgLy8gLT4gdHJ1ZVxuICogYGBgXG4gKlxuICogRnVuY3Rpb25zIGFyZSBydW4gZWFjaCB0aW1lIHRoZSBpdGVyYXRvcidzIGBuZXh0YCBtZXRob2QgaXMgY2FsbGVkLCBhbmQgdGhlXG4gKiByZXR1cm4gdmFsdWUgb2YgdGhlIGZ1bmN0aW9uIGlzIHN1cHBsaWVkIGFzIHRoZSBpdGVyYXRvcidzIHZhbHVlIGF0IHRoYXRcbiAqIHBvaW50LlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gaXMgcHJvdmlkZWQgdHdvIGFyZ3VtZW50czogdGhlIHplcm8tYmFzZWQgaW5kZXggb2YgdGhhdFxuICogaXRlcmF0aW9uLCBhbmQgdGhlIHZhbHVlIHByb2R1Y2VkIGJ5IHRoZSBsYXN0IGludm9jYXRpb24gb2YgdGhlIGl0ZXJhdG9yLiBUaGVcbiAqIGxhc3QgdmFsdWUgaXMgYHVuZGVmaW5lZGAgb24gdGhlIGZpcnN0IHBhc3MsIGJ1dCBhIGRlZmF1bHQgcGFyYW1ldGVyIG9uIHRoZVxuICogZnVuY3Rpb24gY2FuIGRlZmluZSB0aGUgZmlyc3QgcGFzcyB2YWx1ZSB0byBiZSB3aGF0ZXZlciBpcyBuZWVkZWQuXG4gKlxuICogYGBgXG4gKiBjb25zdCBmbiA9IChpbmRleCwgbGFzdCA9IDEpID0+IGxhc3QgKiAoaW5kZXggKyAxKTtcbiAqIGNvbnN0IGl0ZXIgPSBpdGVyYXRvcihmbik7XG4gKiBjb25zb2xlLmxvZyhpdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4gMVxuICogY29uc29sZS5sb2coaXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IDJcbiAqIGNvbnNvbGUubG9nKGl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiA2XG4gKiBjb25zb2xlLmxvZyhpdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4gMjRcbiAqIGNvbnNvbGUubG9nKGl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiAxMjBcbiAqIGBgYFxuICpcbiAqIElmIHRoZSBpbnB1dCB2YWx1ZSBpcyBuZWl0aGVyIGl0ZXJhYmxlLCBvYmplY3QsIG9yIGZ1bmN0aW9uLCB0aGVuIHRoZSByZXN1bHRcbiAqIHdpbGwgYmUgYG51bGxgLlxuICpcbiAqIFsxXTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvSXRlcmF0aW9uX3Byb3RvY29scyNUaGVfaXRlcmFibGVfcHJvdG9jb2xcbiAqIFsyXTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvSXRlcmF0aW9uX3Byb3RvY29scyNUaGVfaXRlcmF0b3JfcHJvdG9jb2xcbiAqIFszXTogaHR0cHM6Ly8yYWxpdHkuY29tLzIwMTUvMTAvcHJvcGVydHktdHJhdmVyc2FsLW9yZGVyLWVzNi5odG1sXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZGNvcmVcbiAqIEBwYXJhbSB7KG9iamVjdHxtb2R1bGU6eGRjb3JlLkl0ZXJhYmxlRnVuY3Rpb258ZXh0ZXJuYWw6SXRlcmFibGUpfSB2YWx1ZVxuICogICAgIFRoZSB2YWx1ZSB0byBjcmVhdGUgYW4gaXRlcmF0b3Igb3Zlci5cbiAqIEByZXR1cm5zIHtleHRlcm5hbDpJdGVyYXRvcn0gQW4gaXRlcmF0b3Igb3ZlciBgdmFsdWVgLlxuICovXG5mdW5jdGlvbiBpdGVyYXRvcih2YWx1ZSkge1xuICBzd2l0Y2ggKHRydWUpIHtcbiAgICBjYXNlIGlzRnVuY3Rpb24odmFsdWVbU3ltYm9sLml0ZXJhdG9yXSk6XG4gICAgY2FzZSBpc0dlbmVyYXRvckZ1bmN0aW9uKHZhbHVlW1N5bWJvbC5pdGVyYXRvcl0pOlxuICAgICAgcmV0dXJuIHZhbHVlW1N5bWJvbC5pdGVyYXRvcl0oKTtcbiAgICBjYXNlIGlzRnVuY3Rpb24odmFsdWUpOlxuICAgICAgcmV0dXJuIGZ1bmN0aW9uSXRlcmF0b3IodmFsdWUpO1xuICAgIGNhc2UgaXNPYmplY3QodmFsdWUpOlxuICAgICAgcmV0dXJuIG9iamVjdEl0ZXJhdG9yKHZhbHVlKTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHBhc3NlZCBvYmplY3QgaXMgaXRlcmFibGUsIGluIHRlcm1zIG9mIHdoYXQgJ2l0ZXJhYmxlJ1xuICogbWVhbnMgdG8gdGhpcyBsaWJyYXJ5LiBJbiBvdGhlciB3b3JkcywgdmFsdWVzIGltcGxlbWVudGluZyB0aGUgYGl0ZXJhYmxlYFxuICogcHJvdG9jb2wgYW5kIHBsYWluIG9iamVjdHMgcmV0dXJuIGB0cnVlYCwgd2hpbGUgZXZlcnl0aGluZyBlbHNlIHJldHVybnNcbiAqIGBmYWxzZWAuIFRoaXMgZG9lcyBub3QgcmV0dXJuIGB0cnVlYCBmb3IgZnVuY3Rpb25zIGV2ZW4gdGhvdWdoXG4gKiB7QGxpbmsgbW9kdWxlOnhkY29yZS5pdGVyYXRvcnxpdGVyYXRvcn0gY2FuIHByb2R1Y2UgYW4gaXRlcmF0b3IgZm9yIHRoZW0sXG4gKiBiZWNhdXNlIG5vdCBhbGwgZnVuY3Rpb25zIHdvcmsgd2VsbCB3aXRoXG4gKiB7QGxpbmsgbW9kdWxlOnhkY29yZS5pdGVyYXRvcnxpdGVyYXRvcn0uXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZGNvcmVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3QgZm9yIGl0ZXJhYmlsaXR5LlxuICogQHJldHVybiB7Ym9vbGVhbn0gRWl0aGVyIGB0cnVlYCBpZiB0aGUgdmFsdWUgaXMgaXRlcmFibGVcbiAqICAgICAoYHtAbGluayBtb2R1bGU6eGRjb3JlLml0ZXJhdG9yfGl0ZXJhdG9yfWAgd2lsbCByZXR1cm4gYW4gaXRlcmF0b3IgZm9yXG4gKiAgICAgaXQpIG9yIGBmYWxzZWAgaWYgaXQgaXMgbm90LlxuICovXG5mdW5jdGlvbiBpc0l0ZXJhYmxlKHZhbHVlKSB7XG4gIHJldHVybiBpc0ltcGxlbWVudGVkKHZhbHVlLCBcIml0ZXJhdG9yXCIpIHx8IGlzT2JqZWN0KHZhbHVlKTtcbn1cblxuZXhwb3J0IHsgaXRlcmF0b3IsIGlzSXRlcmFibGUgfTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG4vKipcbiAqIFByb3RvY29scyBmb3IgaXRlcmF0aW9uIGFuZCByZWR1Y3Rpb24uXG4gKlxuICogQG1vZHVsZSB4ZGNvcmUvcHJvdG9jb2xcbiAqIEBwcml2YXRlXG4gKi9cblxuaW1wb3J0IHsgaXNGdW5jdGlvbiwgaXNHZW5lcmF0b3JGdW5jdGlvbiB9IGZyb20gXCJtb2R1bGVzL3V0aWxzXCI7XG5cbi8qKlxuICogVGhlIG1hcHBpbmcgb2YgcHJvdG9jb2wgbmFtZXMgdG8gdGhlaXIgcmVzcGVjdGl2ZSBwcm9wZXJ0eSBrZXkgbmFtZXMuIFRoaXNcbiAqIG1hcHBpbmcgbWFrZXMgaXQgZWFzaWVyIHRvIGRlYWwgd2l0aCB0aGVzZSBwcm90b2NvbHMgYXMgdGhleSBjYW4gYmUgbG9va2VkIHVwXG4gKiBieSBzdHJpbmcgbmFtZSByYXRoZXIgdGhhbiBieSBtb3JlIGRpZmZpY3VsdC10by13b3JrLXdpdGggc3ltYm9scy5cbiAqXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBQcm90b2NvbE1hcFxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZGNvcmVcbiAqIEBwcm9wZXJ0eSB7U3ltYm9sfSBpbml0IFRoZSBgcmVkdWNlci9pbml0YCBwcm90b2NvbC4gVGhpcyBpcyB1c2VkIHRvIG1hcmtcbiAqICAgICBmdW5jdGlvbnMgdGhhdCBpbml0aWFsaXplIGEgdGFyZ2V0IGNvbGxlY3Rpb24gYmVmb3JlIGFkZGluZyBpdGVtcyB0byBpdC5cbiAqIEBwcm9wZXJ0eSB7U3ltYm9sfSBzdGVwIFRoZSBgcmVkdWNlci9zdGVwYCBwcm90b2NvbC4gVGhpcyBpcyB1c2VkIHRvIG1hcmtcbiAqICAgICBmdW5jdGlvbnMgdGhhdCBhcmUgdXNlZCBpbiB0aGUgcmVkdWNlcidzIHN0ZXAgcHJvY2Vzcywgd2hlcmUgb2JqZWN0cyBhcmVcbiAqICAgICBhZGRlZCB0byB0aGUgdGFyZ2V0IGNvbGxlY3Rpb24gb25lIGF0IGEgdGltZS5cbiAqIEBwcm9wZXJ0eSB7U3ltYm9sfSByZXN1bHQgVGhlIGByZWR1Y2VyL3Jlc3VsdGAgcHJvdG9jb2wuIFRoaXMgaXMgdXNlZCB0byBtYXJrXG4gKiAgICAgZnVuY3Rpb25zIHRoYXQgdGFrZSB0aGUgZmluYWwgcmVzdWx0IG9mIHRoZSBzdGVwIHByb2Nlc3MgYW5kIHJldHVybiB0aGVcbiAqICAgICBmaW5hbCBmb3JtIHRvIGJlIG91dHB1dC4gVGhpcyBpcyBvcHRpb25hbDsgaWYgdGhlIHJlZHVjZXIgZG9lcyBub3Qgd2FudFxuICogICAgIHRvIHRyYW5zZm9ybSB0aGUgZmluYWwgcmVzdWx0LCBpdCBzaG91bGQganVzdCByZXR1cm4gdGhlIHJlc3VsdCBvZiBpdHNcbiAqICAgICBjaGFpbmVkIHJlZHVjZXIncyBgcmVzdWx0YCBmdW5jdGlvbi5cbiAqIEBwcm9wZXJ0eSB7U3ltYm9sfSByZWR1Y2VkIFRoZSBgcmVkdWNlci9jb21wbGV0ZWRgIHByb3RvY29sLiBUaGUgcHJlc2VuY2Ugb2ZcbiAqICAgICB0aGlzIGtleSBvbiBhbiBvYmplY3QgaW5kaWNhdGVzIHRoYXQgaXRzIHRyYW5zZm9ybWF0aW9uIGhhcyBiZWVuXG4gKiAgICAgY29tcGxldGVkLiBJdCBpcyB1c2VkIGludGVybmFsbHkgdG8gbWFyayBjb2xsZWN0aW9ucyB3aG9zZVxuICogICAgIHRyYW5zZm9ybWF0aW9ucyBjb25jbHVkZSBiZWZvcmUgZXZlcnkgb2JqZWN0IGlzIGl0ZXJhdGVkIG92ZXIgKGFzIGluXG4gKiAgICAgYHtAbGluayBtb2R1bGU6eGR1Y2UudGFrZX1gIHRyYW5zZHVjZXJzLikgSXQgaXMgb2YgbGl0dGxlIHVzZSBiZXlvbmRcbiAqICAgICB0cmFuc2R1Y2VyIGF1dGhvcmluZy5cbiAqIEBwcm9wZXJ0eSB7U3ltYm9sfSB2YWx1ZSBUaGUgYHJlZHVjZXIvdmFsdWVgIHByb3RvY29sLiBUaGlzIGlzIHVzZWRcbiAqICAgICBpbnRlcm5hbGx5IHRvIG1hcmsgcHJvcGVydGllcyB0aGF0IGNvbnRhaW4gdGhlIHZhbHVlIG9mIGEgY29tcGxldGVkXG4gKiAgICAgdHJhbnNmb3JtYXRpb24uIEl0IGlzIG9mIGxpdHRsZSB1c2UgYmV5b25kIHRyYW5zZHVjZXIgYXV0aG9yaW5nLlxuICovXG5cbi8qKlxuICogVGhlIG1hcHBpbmcgb2YgcHJvdG9jb2wgbmFtZXMgdG8gdGhlaXIgcmVzcGVjdGl2ZSBwcm9wZXJ0eSBrZXkgbmFtZXMuXG4gKlxuICogQHR5cGUge21vZHVsZTp4ZGNvcmUuUHJvdG9jb2xNYXB9XG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkY29yZVxuICovXG5jb25zdCBwcm90b2NvbHMgPSBPYmplY3QuY3JlYXRlKG51bGwsIHtcbiAgaW5pdDoge1xuICAgIHZhbHVlOiBTeW1ib2wuZm9yKFwicmVkdWNlci9pbml0XCIpXG4gIH0sXG4gIHN0ZXA6IHtcbiAgICB2YWx1ZTogU3ltYm9sLmZvcihcInJlZHVjZXIvc3RlcFwiKVxuICB9LFxuICByZXN1bHQ6IHtcbiAgICB2YWx1ZTogU3ltYm9sLmZvcihcInJlZHVjZXIvcmVzdWx0XCIpXG4gIH0sXG4gIGNvbXBsZXRlZDoge1xuICAgIHZhbHVlOiBTeW1ib2wuZm9yKFwicmVkdWNlci9jb21wbGV0ZWRcIilcbiAgfSxcbiAgdmFsdWU6IHtcbiAgICB2YWx1ZTogU3ltYm9sLmZvcihcInJlZHVjZXIvdmFsdWVcIilcbiAgfVxufSk7XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGEgcGFydGljdWxhciBwcm90b2NvbCBpcyBpbXBsZW1lbnRlZCBieSBhIHZhbHVlLiBUaGVcbiAqIHBvc3NpYmxlIHZhbHVlcyBmb3IgYHByb3RvY29sYCBhcmUgdGhlIGZvbGxvd2luZywgcmVwcmVzZW50aW5nIHRoZSB0d29cbiAqIGJ1aWx0LWluIGl0ZXJhdG9yIHByb3RvY29scyBhbmQgdGhlIGZpdmUgY3VzdG9tIHRyYW5zZHVjZXIgcHJvdG9jb2xzOlxuICpcbiAqICogYGl0ZXJhdG9yYFxuICogKiBgYXN5bmNJdHJlcmF0b3JgXG4gKiAqIGBpbml0YFxuICogKiBgc3RlcGBcbiAqICogYHJlc3VsdGBcbiAqICogYGNvbXBsZXRlZGBcbiAqICogYHZhbHVlYFxuICpcbiAqIEFueSBvZiB0aGVzZSB3aWxsIHJlc3VsdCBpbiBgdHJ1ZWAgaWYgdGhlIG9iamVjdCBpbiBxdWVzdGlvbiBoYXMgYSBwcm9wZXJ0eVxuICogdGhhdCBtYXRjaGVzIHRoZSBvbmUgbmVjZXNzYXJ5IHRvIGltcGxlbWVudCB0aGUgcHJvdG9jb2wuIEZ1cnRoZXIsIGFueSBvZlxuICogdGhlIHByb3BlcnRpZXMgb3RoZXIgdGhhbiBgY29tcGxldGVkYCBhbmQgYHN0ZXBgIG11c3QgYmUgZnVuY3Rpb25zLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGRjb3JlXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIFRoZSBvYmplY3QgdG8gY2hlY2sgZm9yIHByb3RvY29sIGltcGxlbWVudGF0aW9uLlxuICogQHBhcmFtIHtzdHJpbmd9IHByb3RvY29sIFRoZSBuYW1lIG9mIHRoZSBwcm90b2NvbCB0byBjaGVjayBmb3IuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gRWl0aGVyIGB0cnVlYCBpZiB0aGUgb2JqZWN0IHN1cHBvcnRzIHRoZSBuYW1lZCBwcm90b2NvbCBvclxuICogICAgIGBmYWxzZWAgaWYgaXQgZG9lcyBub3QuXG4gKi9cbmZ1bmN0aW9uIGlzSW1wbGVtZW50ZWQob2JqLCBwcm90b2NvbCkge1xuICBpZiAob2JqID09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzd2l0Y2ggKHByb3RvY29sKSB7XG4gICAgY2FzZSBcIml0ZXJhdG9yXCI6XG4gICAgICByZXR1cm4gKFxuICAgICAgICBpc0Z1bmN0aW9uKG9ialtTeW1ib2wuaXRlcmF0b3JdKSB8fFxuICAgICAgICBpc0dlbmVyYXRvckZ1bmN0aW9uKG9ialtTeW1ib2wuaXRlcmF0b3JdKVxuICAgICAgKTtcbiAgICBjYXNlIFwiYXN5bmNJdGVyYXRvclwiOlxuICAgICAgcmV0dXJuIGlzR2VuZXJhdG9yRnVuY3Rpb24ob2JqW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSk7XG4gICAgY2FzZSBcImNvbXBsZXRlZFwiOlxuICAgIGNhc2UgXCJ2YWx1ZVwiOlxuICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqKS5pbmNsdWRlcyhwcm90b2NvbHNbcHJvdG9jb2xdKTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGlzRnVuY3Rpb24ob2JqW3Byb3RvY29sc1twcm90b2NvbF1dKTtcbiAgfVxufVxuXG5leHBvcnQgeyBwcm90b2NvbHMsIGlzSW1wbGVtZW50ZWQgfTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG4vKipcbiAqIEEgc2V0IG9mIGZ1bmN0aW9ucyByZWxhdGVkIHRvIHRoZSBwcm9kdWNpbmcgcmVkdWNlciBvYmplY3RzLCBtYXJraW5nXG4gKiBjb21wbGV0ZWQgb2JqZWN0cywgYW5kIHBlcmZvcm1pbmcgZ2VuZXJhbCByZWR1Y3Rpb24gb3BlcmF0aW9ucy5cbiAqXG4gKiBAbW9kdWxlIHhkY29yZS9yZWR1Y3Rpb25cbiAqIEBwcml2YXRlXG4gKi9cblxuaW1wb3J0IHsgaXNJbXBsZW1lbnRlZCwgcHJvdG9jb2xzIGFzIHAgfSBmcm9tIFwibW9kdWxlcy9wcm90b2NvbFwiO1xuaW1wb3J0IHsgaXNTdHJpbmcsIGlzQXJyYXksIGlzT2JqZWN0LCBpc0Z1bmN0aW9uIH0gZnJvbSBcIm1vZHVsZXMvdXRpbHNcIjtcbmltcG9ydCB7IGl0ZXJhdG9yIH0gZnJvbSBcIm1vZHVsZXMvaXRlcmF0aW9uXCI7XG5cbi8qKlxuICogUmV0dXJucyBhbiBpbml0IGZ1bmN0aW9uIGZvciBhIGNvbGxlY3Rpb24uIFRoaXMgaXMgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYVxuICogbmV3LCBlbXB0eSBpbnN0YW5jZSBvZiB0aGUgY29sbGVjdGlvbiBpbiBxdWVzdGlvbi4gSWYgdGhlIGNvbGxlY3Rpb24gZG9lc24ndFxuICogc3VwcG9ydCByZWR1Y3Rpb24sIGBudWxsYCBpcyByZXR1cm5lZC4gVGhpcyBtYWtlcyBjb25kaXRpb25hbHMgYSBiaXQgZWFzaWVyXG4gKiB0byB3b3JrIHdpdGguXG4gKlxuICogSW4gb3JkZXIgdG8gc3VwcG9ydCB0aGUgY29udmVyc2lvbiBvZiBmdW5jdGlvbnMgaW50byByZWR1Y2VycywgZnVuY3Rpb25cbiAqIHN1cHBvcnQgaXMgYWxzbyBwcm92aWRlZC5cbiAqXG4gKiBAcGFyYW0geyhvYmplY3R8ZnVuY3Rpb258ZXh0ZXJuYWw6SXRlcmFibGUpfSBjb2xsZWN0aW9uIEEgY29sbGVjdGlvbiB0b1xuICogICAgIGNyZWF0ZSBhbiBpbml0IGZ1bmN0aW9uIGZvci4gVGhpcyBjYW4gYmUgYW55dGhpbmcgdGhhdCBzdXBwb3J0cyB0aGVcbiAqICAgICBpdGVyYXRhYmxlIHByb3RvY29sLCBhIHBsYWluIG9iamVjdCwgb3IgYSBmdW5jdGlvbi5cbiAqIEByZXR1cm4ge21vZHVsZTp4ZGNvcmUuSW5pdEZ1bmN0aW9ufSBBIGZ1bmN0aW9uIHRoYXQsIHdoZW4gY2FsbGVkLCByZXR1cm5zIGFuXG4gKiAgICAgaW5pdGlhbCB2ZXJzaW9uIG9mIHRoZSBwcm92aWRlZCBjb2xsZWN0aW9uLiBJZiB0aGUgcHJvdmlkZWQgY29sbGVjdGlvbiBpc1xuICogICAgIG5vdCBpdGVyYWJsZSwgdGhlbiBgbnVsbGAgaXMgcmV0dXJuZWQuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBpbml0KGNvbGxlY3Rpb24pIHtcbiAgc3dpdGNoICh0cnVlKSB7XG4gICAgY2FzZSBpc0ltcGxlbWVudGVkKGNvbGxlY3Rpb24sIFwiaW5pdFwiKTpcbiAgICAgIHJldHVybiBjb2xsZWN0aW9uW3AuaW5pdF07XG4gICAgY2FzZSBpc1N0cmluZyhjb2xsZWN0aW9uKTpcbiAgICAgIHJldHVybiAoKSA9PiBcIlwiO1xuICAgIGNhc2UgaXNBcnJheShjb2xsZWN0aW9uKTpcbiAgICAgIHJldHVybiAoKSA9PiBbXTtcbiAgICBjYXNlIGlzT2JqZWN0KGNvbGxlY3Rpb24pOlxuICAgICAgcmV0dXJuICgpID0+ICh7fSk7XG4gICAgY2FzZSBpc0Z1bmN0aW9uKGNvbGxlY3Rpb24pOlxuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoXCJpbml0IG5vdCBhdmFpbGFibGVcIik7XG4gICAgICB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG4vKipcbiAqIFJldHVybnMgYSBzdGVwIGZ1bmN0aW9uIGZvciBhIGNvbGxlY3Rpb24uIFRoaXMgaXMgYSBmdW5jdGlvbiB0aGF0IHRha2VzIGFuXG4gKiBhY2N1bXVsYXRvciBhbmQgYSB2YWx1ZSBhbmQgcmV0dXJucyB0aGUgcmVzdWx0IG9mIHJlZHVjaW5nIHRoZSB2YWx1ZSBpbnRvIHRoZVxuICogYWNjdW11bGF0b3IuIElmIHRoZSBjb2xsZWN0aW9uIGRvZXNuJ3Qgc3VwcG9ydCByZWR1Y3Rpb24sIGBudWxsYCBpcyByZXR1cm5lZC5cbiAqIFRoZSByZXR1cm5lZCBmdW5jdGlvbiBpdHNlbGYgc2ltcGx5IHJlZHVjZXMgdGhlIGlucHV0IGludG8gdGhlIHRhcmdldFxuICogY29sbGVjdGlvbiB3aXRob3V0IG1vZGlmeWluZyBpdC5cbiAqXG4gKiBJbiBvcmRlciB0byBzdXBwb3J0IHRoZSBjb252ZXJzaW9uIG9mIGZ1bmN0aW9ucyBpbnRvIHJlZHVjZXJzLCBmdW5jdGlvblxuICogc3VwcG9ydCBpcyBhbHNvIHByb3ZpZGVkLlxuICpcbiAqIEBwYXJhbSB7KG9iamVjdHxmdW5jdGlvbnxleHRlcm5hbDpJdGVyYWJsZSl9fSBjb2xsZWN0aW9uIEEgY29sbGVjdGlvbiB0b1xuICogICAgIGNyZWF0ZSBhIHN0ZXAgZnVuY3Rpb24gZm9yLiBUaGlzIGNhbiBiZSBhbnl0aGluZyB0aGF0IHN1cHBvcnRzIHRoZVxuICogICAgIGl0ZXJhdGlvbiBwcm90b2NvbCwgYSBwbGFpbiBvYmplY3QsIG9yIGEgZnVuY3Rpb24uXG4gKiBAcmV0dXJuIHttb2R1bGU6eGRjb3JlLlN0ZXBGdW5jdGlvbn0gQSByZWR1Y3Rpb24gZnVuY3Rpb24gZm9yIHRoZSBwcm92aWRlZFxuICogICAgIGNvbGxlY3Rpb24gdGhhdCBzaW1wbHkgYWRkcyBhbiBlbGVtZW50IHRvIHRoZSB0YXJnZXQgY29sbGVjdGlvbiB3aXRob3V0XG4gKiAgICAgbW9kaWZ5aW5nIGl0LiBJZiB0aGUgcHJvdmlkZWQgY29sbGVjdGlvbiBpcyBub3QgaXRlcmFibGUsIGBudWxsYCBpc1xuICogICAgIHJldHVybmVkLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gc3RlcChjb2xsZWN0aW9uKSB7XG4gIHN3aXRjaCAodHJ1ZSkge1xuICAgIGNhc2UgaXNJbXBsZW1lbnRlZChjb2xsZWN0aW9uLCBcInN0ZXBcIik6XG4gICAgICByZXR1cm4gY29sbGVjdGlvbltwLnN0ZXBdO1xuXG4gICAgY2FzZSBpc1N0cmluZyhjb2xsZWN0aW9uKTpcbiAgICAgIHJldHVybiAoYWNjLCB2YWx1ZSkgPT4ge1xuICAgICAgICBjb25zdCB2ID0gaXNPYmplY3QodmFsdWUpID8gdmFsdWVbT2JqZWN0LmtleXModmFsdWUpWzBdXSA6IHZhbHVlO1xuICAgICAgICByZXR1cm4gYWNjICsgdjtcbiAgICAgIH07XG5cbiAgICBjYXNlIGlzQXJyYXkoY29sbGVjdGlvbik6XG4gICAgICByZXR1cm4gKGFjYywgdmFsdWUpID0+IHtcbiAgICAgICAgYWNjLnB1c2godmFsdWUpO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfTtcblxuICAgIGNhc2UgaXNPYmplY3QoY29sbGVjdGlvbik6XG4gICAgICByZXR1cm4gKGFjYywgdmFsdWUpID0+IHtcbiAgICAgICAgbGV0IHYgPSB2YWx1ZTtcblxuICAgICAgICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgICAgIC8vIGlmIHRoZSBpbnB1dCBpc24ndCBhbiBvYmplY3QsIHR1cm4gaXQgaW50byBhbiBvYmplY3Qgd2l0aCBhXG4gICAgICAgICAgLy8gbnVtZXJpY2FsIGtleSBvbmUgZ3JlYXRlciB0aGFuIHRoZSBtYXgga2V5IGFscmVhZHkgaW4gdGhlXG4gICAgICAgICAgLy8gYWNjdW11bGF0b3JcbiAgICAgICAgICBjb25zdCBtYXggPSBPYmplY3Qua2V5cyhhY2MpLnJlZHVjZSgoYSwgYikgPT4gTWF0aC5tYXgoYSwgYiksIC0xKTtcbiAgICAgICAgICB2ID0geyBbbWF4ICsgMV06IHZhbHVlIH07XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBrID0gT2JqZWN0LmtleXModilbMF07XG4gICAgICAgIGFjY1trXSA9IHZba107XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9O1xuXG4gICAgY2FzZSBpc0Z1bmN0aW9uKGNvbGxlY3Rpb24pOlxuICAgICAgcmV0dXJuIChhY2MsIHZhbHVlKSA9PiBjb2xsZWN0aW9uKGFjYywgdmFsdWUpO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbi8qKlxuICogUmV0dXJucyBhIHJlc3VsdCBmdW5jdGlvbiBmb3IgYSBjb2xsZWN0aW9uLiBUaGlzIGlzIGEgZnVuY3Rpb24gdGhhdCBwZXJmb3Jtc1xuICogYW55IGZpbmFsIHByb2Nlc3NpbmcgdGhhdCBzaG91bGQgYmUgZG9uZSBvbiB0aGUgcmVzdWx0IG9mIGEgcmVkdWN0aW9uLiBJZiB0aGVcbiAqIGNvbGxlY3Rpb24gZG9lc24ndCBzdXBwb3J0IHJlZHVjdGlvbiwgYG51bGxgIGlzIHJldHVybmVkLlxuICpcbiAqIEluIG9yZGVyIHRvIHN1cHBvcnQgdGhlIGNvbnZlcnNpb24gb2YgZnVuY3Rpb25zIGludG8gcmVkdWNlcnMsIGZ1bmN0aW9uXG4gKiBzdXBwb3J0IGlzIGFsc28gcHJvdmlkZWQuXG4gKlxuICogQHBhcmFtIHsob2JqZWN0fGZ1bmN0aW9ufGV4dGVybmFsOkl0ZXJhYmxlKX19IGNvbGxlY3Rpb24gQSBjb2xsZWN0aW9uIHRvXG4gKiAgICAgY3JlYXRlIGEgc3RlcCBmdW5jdGlvbiBmb3IuIFRoaXMgY2FuIGJlIGFueXRoaW5nIHRoYXQgc3VwcG9ydHMgdGhlXG4gKiAgICAgaXRlcmF0aW9uIHByb3RvY29sLCBhIHBsYWluIG9iamVjdCwgb3IgYSBmdW5jdGlvbi5cbiAqIEByZXR1cm4ge21vZHVsZTp4ZGNvcmUuUmVzdWx0RnVuY3Rpb259IEEgZnVuY3Rpb24gdGhhdCwgd2hlbiBnaXZlbiBhIHJlZHVjZWRcbiAqICAgICBjb2xsZWN0aW9uLCBwcm9kdWNlcyB0aGUgZmluYWwgb3V0cHV0LiBJZiB0aGUgcHJvdmlkZWQgY29sbGVjdGlvbiBpcyBub3RcbiAqICAgICBpdGVyYWJsZSwgYG51bGxgIHdpbGwgYmUgcmV0dXJuZWQuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiByZXN1bHQoY29sbGVjdGlvbikge1xuICBzd2l0Y2ggKHRydWUpIHtcbiAgICBjYXNlIGlzSW1wbGVtZW50ZWQoY29sbGVjdGlvbiwgXCJyZXN1bHRcIik6XG4gICAgICByZXR1cm4gY29sbGVjdGlvbltwLnJlc3VsdF07XG4gICAgY2FzZSBpc1N0cmluZyhjb2xsZWN0aW9uKTpcbiAgICBjYXNlIGlzQXJyYXkoY29sbGVjdGlvbik6XG4gICAgY2FzZSBpc09iamVjdChjb2xsZWN0aW9uKTpcbiAgICBjYXNlIGlzRnVuY3Rpb24oY29sbGVjdGlvbik6XG4gICAgICByZXR1cm4gdmFsdWUgPT4gdmFsdWU7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHJlZHVjZXIgb2JqZWN0IGZyb20gYSBmdW5jdGlvbiBvciBmcm9tIGEgcmVkdWNpYmxlIHR5cGUgKGFycmF5LFxuICogb2JqZWN0LCBzdHJpbmcsIG9yIG9iamVjdCBpbXBsZW1lbnRpbmcgdGhlIHJlZHVjZXIgcHJvdG9jb2xzKS5cbiAqXG4gKiBUbyBjcmVhdGUgYSByZWR1Y2VyIGZvciBhcnJheXMsIG9iamVjdHMsIG9yIHN0cmluZ3MsIHNpbXBseSBwYXNzIGFuIGVtcHR5XG4gKiB2ZXJzaW9uIG9mIHRoYXQgY29sbGVjdGlvbiB0byB0aGlzIGZ1bmN0aW9uIChlLmcuLCBgdG9SZWR1Y2VyKFtdKWApLlxuICpcbiAqIFRoZSBub3RhYmxlIHVzZSBmb3IgdGhpcyBmdW5jdGlvbiB0aG91Z2ggaXMgdG8gdHVybiBhIHJlZHVjdGlvbiBmdW5jdGlvbiBpbnRvXG4gKiBhIHJlZHVjZXIgb2JqZWN0LiBUaGUgZnVuY3Rpb24gaXMgYSBmdW5jdGlvbiBvZiB0d28gcGFyYW1ldGVycywgYW5cbiAqIGFjY3VtdWxhdG9yIGFuZCBhIHZhbHVlLCBhbmQgcmV0dXJucyB0aGUgYWNjdW11bGF0b3Igd2l0aCB0aGUgdmFsdWUgaW4gaXQuXG4gKiBUaGlzIGlzIGV4YWN0bHkgdGhlIHNhbWUga2luZCBvZiBmdW5jdGlvbiB0aGF0IGlzIHBhc3NlZCB0byByZWR1Y3Rpb25cbiAqIGZ1bmN0aW9ucyBsaWtlIEphdmFTY3JpcHQncyBgQXJyYXkucHJvdG90eXBlLnJlZHVjZWAgYW5kIExvZGFzaCdzIGBfLnJlZHVjZWAuXG4gKlxuICogTm90ZSBpbiBwYXJ0aWN1bGFyIHRoYXQgdGhlIG91dHB1dCBvZiB0aGlzIHJlZHVjZXIgZG9lcyBub3QgbmVlZCB0byBiZSBhXG4gKiBjb2xsZWN0aW9uLiBJdCBjYW4gYmUgYW55dGhpbmcuIFdoaWxlIHRyYW5zZHVjaW5nIG5vcm1hbGx5IGludm9sdmVzXG4gKiB0cmFuc2Zvcm1pbmcgb25lIGNvbGxlY3Rpb24gaW50byBhbm90aGVyLCBpdCBuZWVkIG5vdCBiZSBzby4gRm9yIGV4YW1wbGUsXG4gKiBoZXJlIGlzIGEgcmVkdWNlciB0aGF0IHdpbGwgcmVzdWx0IGluIHN1bW1pbmcgb2YgdGhlIGNvbGxlY3Rpb24gdmFsdWVzLlxuICpcbiAqIGBgYFxuICogaW1wb3J0IHsgdG9SZWR1Y2VyLCByZWR1Y2UgfSBmcm9tIFwiQGNoYW5rby94ZGNvcmVcIjtcbiAqXG4gKiBjb25zdCBzdW1SZWR1Y2VyID0gdG9SZWR1Y2VyKChhY2MsIGlucHV0KSA9PiBhY2MgKyBpbnB1dCk7XG4gKiBjb25zdCBzdW0gPSByZWR1Y2UoWzEsIDIsIDMsIDQsIDVdLCBzdW1SZWR1Y2VyLCAwKTtcbiAqIGNvbnNvbGUubG9nKHN1bSk7ICAgLy8gLT4gMTVcbiAqIGBgYFxuICpcbiAqIFRoaXMgY2FuIGJlIGNvbWJpbmVkIHdpdGggdHJhbnNkdWNlcnMgYXMgd2VsbCwgYXMgaW4gdGhpcyBjYWxjdWxhdGlvbiBvZiB0aGVcbiAqIHN1bSBvZiB0aGUgKnNxdWFyZXMqIG9mIHRoZSBjb2xsZWN0aW9uIHZhbHVlcy5cbiAqXG4gKiBgYGBcbiAqIGltcG9ydCB7IHRvUmVkdWNlciB9IGZyb20gXCJAY2hhbmtvL3hkY29yZVwiO1xuICogaW1wb3J0IHsgdHJhbnNkdWNlLCBtYXAgfSBmcm9tIFwiQGNoYW5rby94ZHVjZVwiO1xuICpcbiAqIGNvbnN0IHN1bVJlZHVjZXIgPSB0b1JlZHVjZXIoKGFjYywgaW5wdXQpID0+IGFjYyArIGlucHV0KTtcbiAqIGNvbnN0IHN1bSA9IHRyYW5zZHVjZShbMSwgMiwgMywgNCwgNV0sIG1hcCh4ID0+IHggKiB4KSwgc3VtUmVkdWNlciwgMCk7XG4gKiBjb25zb2xlLmxvZyhzdW0pOyAgIC8vIC0+IDU1XG4gKiBgYGBcbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkY29yZVxuICogQHBhcmFtIHsoYXJyYXl8b2JqZWN0fGZ1bmN0aW9ufG1vZHVsZTp4ZGNvcmUuUmVkdWNlck9iamVjdCl9IGNvbGxlY3Rpb24gQVxuICogICAgIHJlZHVjaWJsZSBjb2xsZWN0aW9uIG9yIGEgcmVkdWNlciBmdW5jdGlvbi5cbiAqIEByZXR1cm4ge21vZHVsZTp4ZGNvcmUuUmVkdWNlck9iamVjdH0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgcHJvdG9jb2xcbiAqICAgICBwcm9wZXJ0aWVzIGZvciBgaW5pdGAsIGBzdGVwYCwgYW5kIGByZXN1bHRgLiBUaGlzIG9iamVjdCBpcyBzdWl0YWJsZSBmb3JcbiAqICAgICB1c2UgYXMgYSByZWR1Y2VyIG9iamVjdCAob25lIHByb3ZpZGVkIHRvXG4gKiAgICAgYHtAbGluayBtb2R1bGU6eGRjb3JlLnJlZHVjZXxyZWR1Y2V9YCkuIElmIHRoZSBwcm92aWRlZCBjb2xsZWN0aW9uIGlzIG5vdFxuICogICAgIHJlZHVjaWJsZSwgYWxsIG9mIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgb2JqZWN0IHdpbGwgYmUgYG51bGxgLlxuICovXG5mdW5jdGlvbiB0b1JlZHVjZXIoY29sbGVjdGlvbikge1xuICByZXR1cm4gT2JqZWN0LmZyZWV6ZSh7XG4gICAgW3AuaW5pdF06IGluaXQoY29sbGVjdGlvbiksXG4gICAgW3Auc3RlcF06IHN0ZXAoY29sbGVjdGlvbiksXG4gICAgW3AucmVzdWx0XTogcmVzdWx0KGNvbGxlY3Rpb24pXG4gIH0pO1xufVxuXG4vKipcbiAqIEEgcmVkdWNlciBvYmplY3QgZm9yIGFycmF5cy5cbiAqXG4gKiBAdHlwZSB7bW9kdWxlOnhkY29yZS5SZWR1Y2VyT2JqZWN0fVxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgQVJSQVlfUkVEVUNFUiA9IHRvUmVkdWNlcihbXSk7XG5cbi8qKlxuICogQSByZWR1Y2VyIG9iamVjdCBmb3Igb2JqZWN0cy5cbiAqXG4gKiBAdHlwZSB7bW9kdWxlOnhkY29yZS5SZWR1Y2VyT2JqZWN0fVxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgT0JKRUNUX1JFRFVDRVIgPSB0b1JlZHVjZXIoe30pO1xuXG4vKipcbiAqIEEgcmVkdWNlciBvYmplY3QgZm9yIHN0cmluZ3MuXG4gKlxuICogQHR5cGUge21vZHVsZTp4ZGNvcmUuUmVkdWNlck9iamVjdH1cbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IFNUUklOR19SRURVQ0VSID0gdG9SZWR1Y2VyKFwiXCIpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSB0cmFuc2R1Y2VyIG9iamVjdCBmcm9tIGEgZnVuY3Rpb24gYW5kIGEgcmVkdWNlciBvYmplY3QuXG4gKlxuICogVGhpcyBpcyBzaW1pbGFyIHRvIHtAbGluayBtb2R1bGU6eGRjb3JlLnRvUmVkdWNlcnx0b1JlZHVjZXJ9IGV4Y2VwdCBpbiB0d29cbiAqIHJlc3BlY3RzOlxuICpcbiAqIDEuIEl0IG9ubHkgYWNjZXB0cyBhIHJlZHVjZXIgZnVuY3Rpb24sIG5vdCBhIHJlZHVjZXIgb2JqZWN0XG4gKiAyLiBJdCBjaGFpbnMgdG8gYW5vdGhlciByZWR1Y2VyIG9iamVjdFxuICpcbiAqIFRoaXMgZnVuY3Rpb24gYXBwbGllcyB0aGUgZ2l2ZW4gZnVuY3Rpb24gYXMgdGhlIGBzdGVwYCBmdW5jdGlvbiBvZiB0aGVcbiAqIHJldHVybmVkIHRyYW5zZHVjZXIsIGFuZCB0aGUgYGluaXRgIGFuZCBgcmVzdWx0YCBmdW5jdGlvbnMgc2ltcGx5IGNhbGwgdGhlXG4gKiBzYW1lIGZ1bmN0aW9ucyBpbiB0aGUgbmV4dCByZWR1Y2VyIG9iamVjdC4gVGhpcyBpcyBwcmVjaXNlbHkgd2hhdCAqbW9zdCpcbiAqIHRyYW5zZHVjZXJzIHdhbnQ7IGBpbml0YCBhbmQgYHJlc3VsdGAgZnVuY3Rpb25zIGFyZSBub3JtYWxseSBoYW5kbGVkIGJ5IHRoZVxuICogcmVkdWNlciBhdCB0aGUgZW5kIG9mIHRoZSB0cmFuc2R1Y2VyIGNoYWluLiBJbiB0aGUgcmFyZSBjYXNlIHdoZW4gYW4gYGluaXRgXG4gKiBvciBgcmVzdWx0YCBmdW5jdGlvbiBtdXN0IGRvIG1vcmUgdGhhbiBzaW1wbHkgY2hhaW4sIHRoaXMgZnVuY3Rpb24gd2lsbCBub3RcbiAqIHdvcmsuIEdlbmVyYWxseSB0aGUgdHJhbnNkdWNlciBvYmplY3QgaXMgY3JlYXRlZCBtYW51YWxseSBpbiB0aGF0IGNhc2UuXG4gKlxuICogVGhpcyBmdW5jdGlvbiBkb2VzIG5vdCBhdXRvbWF0aWNhbGx5IGNoYWluIHRoZSBgc3RlcGAgZnVuY3Rpb24gdG8gdGhlIG5leHRcbiAqIG9uZSBkb3duIHRoZSBsaW5lLCBhcyB0aGF0IGNhbiBiZSBkb25lIGluIGFueSBudW1iZXIgb2YgZGlmZmVyZW50IHdheXMuIFRodXNcbiAqIHRoZSBmdW5jdGlvbiBpdHNlbGYgc2hvdWxkIGNhbGwgdGhlIGBzdGVwYCBmdW5jdGlvbiBpbiBgcmVkdWNlcmAgaW4gd2hhdGV2ZXJcbiAqIHdheSBpcyBhcHByb3ByaWF0ZS5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkY29yZVxuICogQHBhcmFtIHttb2R1bGU6eGRjb3JlLlN0ZXBGdW5jdGlvbn0gZm4gVGhlIHN0ZXAgZnVuY3Rpb24gZm9yIHRoZSB0cmFuc2R1Y2VyLlxuICogQHBhcmFtIHttb2R1bGU6eGRjb3JlLlJlZHVjZXJPYmplY3R9IHJlZHVjZXIgVGhlIG5leHQgdHJhbnNkdWNlciBvYmplY3QgaW5cbiAqICAgICB0aGUgY2hhaW4uXG4gKiBAcmV0dXJucyB7bW9kdWxlOnhkY29yZS5SZWR1Y2VyT2JqZWN0fSBBIG5ldyB0cmFuc2R1Y2VyLCBjaGFpbmluZyB0aGVcbiAqICAgICBzdXBwbGllZCBmdW5jdGlvbiB0byB0aGUgc3VwcGxpZWQgdHJhbnNkdWNlci5cbiAqL1xuZnVuY3Rpb24gdG9UcmFuc2R1Y2VyKGZuLCByZWR1Y2VyKSB7XG4gIHJldHVybiB7XG4gICAgW3AuaW5pdF0oKSB7XG4gICAgICByZXR1cm4gcmVkdWNlcltwLmluaXRdKCk7XG4gICAgfSxcblxuICAgIFtwLnN0ZXBdOiBmbixcblxuICAgIFtwLnJlc3VsdF0odmFsdWUpIHtcbiAgICAgIHJldHVybiByZWR1Y2VyW3AucmVzdWx0XSh2YWx1ZSk7XG4gICAgfVxuICB9O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSByZWR1Y2VyIGZ1bmN0aW9uIGZyb20gYSB0cmFuc2R1Y2VyIGZ1bmN0aW9uIGFuZCBhIHJlZHVjZXIuXG4gKlxuICogVGhpcyBwcm9kdWNlcyBhIGZ1bmN0aW9uIHRoYXQncyBzdWl0YWJsZSBmb3IgYmVpbmcgcGFzc2VkIGludG8gb3RoZXJcbiAqIGxpYnJhcmllcycgcmVkdWNlIGZ1bmN0aW9ucywgc3VjaCBhcyBKYXZhU2NyaXB0J3MgYEFycmF5LnByb3RvdHlwZS5yZWR1Y2VgIG9yXG4gKiBMb2Rhc2gncyBgXy5yZWR1Y2VgLiBJdCByZXF1aXJlcyBib3RoIGEgdHJhbnNkdWNlciAqYW5kKiBhIHJlZHVjZXIgYmVjYXVzZVxuICogcmVkdWN0aW9uIGZ1bmN0aW9ucyBmb3IgdGhvc2UgbGlicmFyaWVzIG11c3Qga25vdyBob3cgdG8gcmVkdWNlIGFzIHdlbGwgYXNcbiAqIGhvdyB0byB0cmFuc2Zvcm0uIFRoZSByZWR1Y2VyIGNhbiBiZSBhIHN0YW5kYXJkIHJlZHVjZXIgb2JqZWN0IGxpa2UgdGhlIG9uZXNcbiAqIHNlbnQgdG8gYHtAbGluayBtb2R1bGU6eGRjb3JlLnJlZHVjZXxyZWR1Y2V9YCwgb3IgaXQgY2FuIGJlIGEgcGxhaW4gZnVuY3Rpb25cbiAqIHRoYXQgdGFrZXMgdHdvIHBhcmFtZXRlcnMgYW5kIHJldHVybnMgdGhlIHJlc3VsdCBvZiByZWR1Y2luZyB0aGUgc2Vjb25kXG4gKiBwYXJhbWV0ZXIgaW50byB0aGUgZmlyc3QgKGkuZS4sIGEgcmVkdWNlciBmdW5jdGlvbikuXG4gKlxuICogSWYgdGhlcmUgaXMgbm8gbmVlZCBmb3IgYSB0cmFuc2Zvcm1hdGlvbiwgdGhlbiBwYXNzIGluIHRoZVxuICogYHtAbGluayBtb2R1bGU6eGR1Y2UuaWRlbnRpdHl8aWRlbnRpdHl9YCB0cmFuc2R1Y2VyLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGRjb3JlXG4gKiBAcGFyYW0ge21vZHVsZTp4ZGNvcmUuVHJhbnNkdWNlckZ1bmN0aW9ufSB0cmFuc2R1Y2VyIEEgdHJhbnNkdWNlciBmdW5jdGlvblxuICogICAgIHRoYXQgd3JhcHMgYSB0cmFuc2R1Y2VyIG9iamVjdCB3aG9zZSBgc3RlcGAgZnVuY3Rpb24gd2lsbCBiZSB1c2VkIGFzIGFcbiAqICAgICByZWR1Y2VyIGZ1bmN0aW9uLlxuICogQHBhcmFtIHsobW9kdWxlOnhkY29yZS5TdGVwRnVuY3Rpb258bW9kdWxlOnhkY29yZS5SZWR1Y2VyT2JqZWN0KX0gcmVkdWNlciBBXG4gKiAgICAgcmVkdWNlciB0aGF0IGtub3dzIGhvdyB0byByZWR1Y2UgdmFsdWVzIGludG8gYW4gb3V0cHV0IGNvbGxlY3Rpb24uIFRoaXNcbiAqICAgICBjYW4gZWl0aGVyIGJlIGEgcmVkdWNpbmcgZnVuY3Rpb24gb3IgYSByZWR1Y2VyIG9iamVjdCB3aG9zZSBgc3RlcGBcbiAqICAgICBmdW5jdGlvbiBrbm93cyBob3cgdG8gcGVyZm9ybSB0aGlzIHJlZHVjdGlvbi5cbiAqIEByZXR1cm5zIHttb2R1bGU6eGRjb3JlLlN0ZXBGdW5jdGlvbn0gQSByZWR1Y2VyIGZ1bmN0aW9uIHRoYXQgd2lsbCB0cmFuc2Zvcm1cbiAqICAgICBlbGVtZW50cyB2aWEgdGhlIHRyYW5zZHVjZXIgZnVuY3Rpb24gYW5kIHRoZW4gcmVkdWNlIHRoZW0gaW50byB3aGF0ZXZlclxuICogICAgIGtpbmQgb2YgY29sbGVjdGlvbiB0aGUgcmVkdWNlciBpbXBsZW1lbnRzLlxuICovXG5mdW5jdGlvbiB0b0Z1bmN0aW9uKHRyYW5zZHVjZXIsIHJlZHVjZXIpIHtcbiAgY29uc3QgciA9IHR5cGVvZiByZWR1Y2VyID09PSBcImZ1bmN0aW9uXCIgPyB0b1JlZHVjZXIocmVkdWNlcikgOiByZWR1Y2VyO1xuICBjb25zdCByZXN1bHQgPSB0cmFuc2R1Y2VyKHIpO1xuICByZXR1cm4gcmVzdWx0W3Auc3RlcF0uYmluZChyZXN1bHQpO1xufVxuXG4vKipcbiAqIE1hcmtzIGEgdmFsdWUgYXMgY29tcGxldGUuXG4gKlxuICogVGhpcyBpcyBkb25lIGJ5IHdyYXBwaW5nIHRoZSB2YWx1ZS4gVGhpcyBtZWFucyB0aHJlZSB0aGluZ3M6IGZpcnN0LCBhXG4gKiBjb21wbGV0ZSBvYmplY3QgbWF5IGJlIG1hcmtlZCBhcyBjb21wbGV0ZSBhZ2Fpbjsgc2Vjb25kLCBhIGNvbXBsZXRlIHZhbHVlXG4gKiBpc24ndCB1c2FibGUgd2l0aG91dCBiZWluZyB1bmNvbXBsZXRlZCBmaXJzdDsgYW5kIHRoaXJkIGFueSB0eXBlIG9mIHZhbHVlXG4gKiAoaW5jbHVkaW5nIGB1bmRlZmluZWRgKSBtYXkgYmUgbWFya2VkIGFzIGNvbXBsZXRlLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2UtdG9vbHNcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGJlIGNvbXBsZXRlZC5cbiAqIEByZXR1cm4geyp9IEEgY29tcGxldGVkIHZlcnNpb24gb2YgdGhlIHByb3ZpZGVkIHZhbHVlLiBUaGlzIHJlZHVjdGlvbiBpc1xuICogICAgIGFjaGlldmVkIGJ5IHdyYXBwaW5nIHRoZSB2YWx1ZSBpbiBhIG1hcmtlciBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIGNvbXBsZXRlKHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgW3AuY29tcGxldGVkXTogdHJ1ZSxcbiAgICBbcC52YWx1ZV06IHZhbHVlXG4gIH07XG59XG5cbi8qKlxuICogUmVtb3ZlcyB0aGUgY29tcGxldGUgc3RhdHVzIGZyb20gYSBjb21wbGV0ZWQgdmFsdWUuXG4gKlxuICogVGhpcyBmdW5jdGlvbiBpcyBpbnRlbmRlZCB0byBiZSB1c2VkIHdoZW4gaXQncyBjZXJ0YWluIHRoYXQgYSB2YWx1ZSBpc1xuICogYWxyZWFkeSBtYXJrZWQgYXMgY29tcGxldGUuIElmIGl0IGlzIG5vdCwgYHVuZGVmaW5lZGAgd2lsbCBiZSByZXR1cm5lZFxuICogaW5zdGVhZCBvZiB0aGUgdmFsdWUuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZS10b29sc1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gYmUgdW5jb21wbGV0ZWQuXG4gKiBAcmV0dXJuIHsqfSBBbiB1bmNvbXBsZXRlZCB2ZXJzaW9uIG9mIHRoZSBwcm92aWRlZCB2YWx1ZS4gSWYgdGhlIHZhbHVlIHdhc1xuICogICAgIG5vdCBjb21wbGV0ZSBpbiB0aGUgZmlyc3QgcGxhY2UsIGB1bmRlZmluZWRgIHdpbGwgYmUgcmV0dXJuZWQgaW5zdGVhZC5cbiAqL1xuZnVuY3Rpb24gdW5jb21wbGV0ZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWU/LltwLnZhbHVlXTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgYSB2YWx1ZSBpcyBtYXJrZWQgYXMgY29tcGxldGUuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZS10b29sc1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gdGVzdCBmb3IgaXRzIGNvbXBsZXRlIHN0YXR1cy5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IEVpdGhlciBgdHJ1ZWAgaWYgdGhlIHZhbHVlIGlzIGNvbXBsZXRlLCBvciBgZmFsc2VgIGlmIGl0IGlzXG4gKiAgICAgbm90LlxuICovXG5mdW5jdGlvbiBpc0NvbXBsZXRlZCh2YWx1ZSkge1xuICByZXR1cm4gISF2YWx1ZT8uW3AuY29tcGxldGVkXTtcbn1cblxuLyoqXG4gKiBNYWtlcyBzdXJlIHRoYXQgYSB2YWx1ZSBpcyBtYXJrZWQgYXMgY29tcGxldGU7IGlmIGl0IGlzIG5vdCwgaXQgd2lsbCBiZVxuICogbWFya2VkIGFzIGNvbXBsZXRlLlxuICpcbiAqIFRoaXMgZGlmZmVycyBmcm9tIHtAbGluayBtb2R1bGU6eGR1Y2UtdG9vbHMuY29tcGxldGV8Y29tcGxldGV9IGluIHRoYXQgaWYgdGhlIHZhbHVlXG4gKiBpcyBhbHJlYWR5IGNvbXBsZXRlLCB0aGlzIGZ1bmN0aW9uIHdvbid0IGNvbXBsZXRlIGl0IGFnYWluLiBUaGVyZWZvcmUgdGh1c1xuICogZnVuY3Rpb24gY2FuJ3QgYmUgdXNlZCB0byBtYWtlIGEgdmFsdWUgY29tcGxldGUgbXVsdGlwbGUgdGltZXMuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZS10b29sc1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gYmUgY29tcGxldGVkLlxuICogQHJldHVybiB7Kn0gSWYgdGhlIHZhbHVlIGlzIGFscmVhZHkgY29tcGxldGUsIHRoZW4gdGhlIHZhbHVlIGlzIHNpbXBseVxuICogICAgIHJldHVybmVkLiBPdGhlcndpc2UsIGEgY29tcGxldGVkIHZlcnNpb24gb2YgdGhlIHZhbHVlIGlzIHJldHVybmVkLlxuICovXG5mdW5jdGlvbiBlbnN1cmVDb21wbGV0ZWQodmFsdWUpIHtcbiAgcmV0dXJuIGlzQ29tcGxldGVkKHZhbHVlKSA/IHZhbHVlIDogY29tcGxldGUodmFsdWUpO1xufVxuXG4vKipcbiAqIFJlbW92ZXMgdGhlIGNvbXBsZXRlIHN0YXR1cyBmcm9tIGEgdmFsdWUsIGFzIGxvbmcgYXMgaXQgYWN0dWFsbHkgaXMgY29tcGxldGUuXG4gKlxuICogVGhpcyBkb2VzIGEgY2hlY2sgdG8gbWFrZSBzdXJlIHRoZSB2YWx1ZSBwYXNzZWQgaW4gYWN0dWFsbHkgaXMgY29tcGxldGUuIElmXG4gKiBpdCBpc24ndCwgdGhlIHZhbHVlIGl0c2VsZiBpcyByZXR1cm5lZC4gSXQncyBtZWFudCB0byBiZSB1c2VkIHdoZW4gdGhlXG4gKiBjb21wbGV0ZWQgc3RhdHVzIGlzIHVuY2VydGFpbi5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlLXRvb2xzXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSBjb21wbGV0ZSB2YWx1ZSB0byBiZSB1bmNvbXBsZXRlZC5cbiAqIEByZXR1cm4geyp9IElmIHRoZSB2YWx1ZSBpcyBhbHJlYWR5IHVuY29tcGxldGVkLCB0aGUgdmFsdWUgaXMgc2ltcGx5XG4gKiAgICAgcmV0dXJuZWQuIE90aGVyd2lzZSBhbiB1bmNvbXBsZXRlZCB2ZXJzaW9uIG9mIHRoZSB2YWx1ZSBpcyByZXR1cm5lZC5cbiAqL1xuZnVuY3Rpb24gZW5zdXJlVW5jb21wbGV0ZWQodmFsdWUpIHtcbiAgcmV0dXJuIGlzQ29tcGxldGVkKHZhbHVlKSA/IHVuY29tcGxldGUodmFsdWUpIDogdmFsdWU7XG59XG5cbi8qKlxuICogUmVkdWNlcyB0aGUgZWxlbWVudHMgb2YgdGhlIGlucHV0IGNvbGxlY3Rpb24gdGhyb3VnaCBhIHJlZHVjZXIgaW50byBhbiBvdXRwdXRcbiAqIGNvbGxlY3Rpb24uXG4gKlxuICogVGhpcyBpcyB0aGUgbG93ZXN0LWxldmVsIG9mIHRoZSB0cmFuc2R1Y3Rpb24gZnVuY3Rpb25zLiBJbiBmYWN0LCB0aGlzIG9uZSBpc1xuICogc28gbG93LWxldmVsIHRoYXQgaXQgZG9lc24ndCBoYXZlIGEgbG90IG9mIHVzZSBpbiBub3JtYWwgb3BlcmF0aW9uLiBJdCdzIG1vcmVcbiAqIHVzZWZ1bCBmb3Igd3JpdGluZyB5b3VyIG93biB0cmFuc2Zvcm1hdGlvbiBmdW5jdGlvbnMuXG4gKlxuICogYHJlZHVjZWAgZG9lc24ndCBhc3N1bWUgdGhhdCB0aGVyZSdzIGV2ZW4gYSB0cmFuc2Zvcm1hdGlvbi4gSXQgcmVxdWlyZXMgYW5cbiAqIGluaXRpYWwgY29sbGVjdGlvbiBhbmQgYSByZWR1Y2VyIG9iamVjdCB0aGF0IGlzIG1hdGNoZWQgdG8gdGhhdCBpbml0aWFsXG4gKiBjb2xsZWN0aW9uLiBUaGUgcmVkdWNlciBvYmplY3QgbXVzdCBpbXBsZW1lbnQgdGhlIGBzdGVwYCBhbmQgYHJlc3VsdGBcbiAqIHByb3RvY29scywgd2hpY2ggaW5zdHJ1Y3QgYHJlZHVjZWAgb24gaG93IHRvIGJ1aWxkIHVwIHRoZSBjb2xsZWN0aW9uLiBUaGVcbiAqIHJlZHVjZXIgbWF5IGltcGxlbWVudCBhIHRyYW5zZm9ybWF0aW9uIGFzIHdlbGwsIGJ1dCBhbGwgdGhhdCdzIGltcG9ydGFudCBoZXJlXG4gKiBpcyB0aGF0IGl0IGNhbiBkbyB0aGUgcmVkdWN0aW9uLlxuICpcbiAqIFRoZSBpbnB1dCBjb2xsZWN0aW9uIG5lZWQgb25seSBpbXBsZW1lbnQgYGl0ZXJhYmxlYC4gSXQgaXMgbm90IG5lY2Vzc2FyeSBmb3JcbiAqIHRoZSBpbnB1dCBhbmQgb3V0cHV0IGNvbGxlY3Rpb25zIHRvIGJlIG9mIHRoZSBzYW1lIHR5cGU7IGFzIGxvbmcgYXMgdGhlIGlucHV0XG4gKiBpbXBsZW1lbnRzIGBpdGVyYWJsZWAgYW5kIHRoZSByZWR1Y2VyIGltcGxlbWVudHMgYHN0ZXBgIGFuZCBgcmVzdWx0YFxuICogYXBwcm9wcmlhdGUgdG8gdGhlIHR5cGUgb2YgdGhlIGBpbml0YCBjb2xsZWN0aW9uLCB0aGVuIGFueSB0cmFuc2xhdGlvblxuICogYmV0d2VlbiBjb2xsZWN0aW9uIHR5cGVzIGNhbiBvY2N1ci5cbiAqXG4gKiBUaGUgbm9ybWFsIGNvdXJzZSBvZiBvcGVyYXRpb24gd2lsbCBiZSB0byBjYWxsXG4gKiB7QGxpbmsgbW9kdWxlOnhkdWNlLXRvb2xzLnRyYW5zZHVjZXx0cmFuc2R1Y2V9IGluc3RlYWQsIGFzIHRoYXQgZnVuY3Rpb24gbWFrZXMgaXRcbiAqIGVhc3kgdG8gY29tYmluZSB0cmFuc2Zvcm1hdGlvbnMgd2l0aCByZWR1Y3Rpb25zIGFuZCBjYW4gb3B0aW9uYWxseSBmaWd1cmUgb3V0XG4gKiB0aGUgaW5pdGlhbCBjb2xsZWN0aW9uIGl0c2VsZi5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlLXRvb2xzXG4gKiBAcGFyYW0geyp9IGNvbGxlY3Rpb24gVGhlIGlucHV0IGNvbGxlY3Rpb24uIFRoZSBvbmx5IHJlcXVpcmVtZW50IG9mIHRoaXNcbiAqICAgICBjb2xsZWN0aW9uIGlzIHRoYXQgaXQgaW1wbGVtZW50IHRoZSBgaXRlcmFibGVgIHByb3RvY29sLiBTcGVjaWFsIHN1cHBvcnRcbiAqICAgICBpcyBwcm92aWRlZCBieSB0aGUgbGlicmFyeSBmb3Igb2JqZWN0cywgc28gdGhleSBjYW4gYmUgdXNlZCBhcyB3ZWxsLlxuICogQHBhcmFtIHttb2R1bGU6eGR1Y2UtdG9vbHMuUmVkdWNlcn0gcmVkdWNlciBBbiBvYmplY3QgdGhhdCBpbXBsZW1lbnRzIHRoZSBgc3RlcGAgYW5kXG4gKiAgICAgYHJlc3VsdGAgcHJvdG9jb2xzLiBUaGlzIG9iamVjdCBtdXN0IGtub3cgaG93IHRvIHByb2R1Y2UgYW4gb3V0cHV0XG4gKiAgICAgY29sbGVjdGlvbiB0aHJvdWdoIHRob3NlIHByb3RvY29sIGZ1bmN0aW9ucy5cbiAqIEBwYXJhbSB7Kn0gaW5pdCBhIGNvbGxlY3Rpb24gb2YgdGhlIHNhbWUgdHlwZSBhcyB0aGUgb3V0cHV0IGNvbGxlY3Rpb24uIEl0XG4gKiAgICAgbmVlZCBub3QgYmUgZW1wdHk7IGlmIGl0IGlzIG5vdCwgdGhlIGV4aXN0aW5nIGVsZW1lbnRzIGFyZSByZXRhaW5lZCBhc1xuICogICAgIHRoZSBpbnB1dCBjb2xsZWN0aW9uIGlzIHJlZHVjZWQgaW50byBpdC5cbiAqIEByZXR1cm4geyp9IEEgbmV3IGNvbGxlY3Rpb24sIGNvbnNpc3Rpbmcgb2YgdGhlIGBpbml0YCBjb2xsZWN0aW9uIHdpdGggYWxsIG9mXG4gKiAgICAgdGhlIGVsZW1lbnRzIG9mIHRoZSBgY29sbGVjdGlvbmAgY29sbGVjdGlvbiByZWR1Y2VkIGludG8gaXQuXG4gKi9cbmZ1bmN0aW9uIHJlZHVjZShjb2xsZWN0aW9uLCByZWR1Y2VyLCBpbml0KSB7XG4gIGlmIChjb2xsZWN0aW9uID09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IGl0ZXIgPSBpdGVyYXRvcihjb2xsZWN0aW9uKTtcbiAgaWYgKCFpdGVyKSB7XG4gICAgdGhyb3cgRXJyb3IoYENhbm5vdCByZWR1Y2UgYW4gaW5zdGFuY2Ugb2YgJHtjb2xsZWN0aW9uLmNvbnN0cnVjdG9yLm5hbWV9YCk7XG4gIH1cblxuICBsZXQgYWNjID0gaW5pdDtcbiAgbGV0IHN0ZXAgPSBpdGVyLm5leHQoKTtcblxuICB3aGlsZSAoIXN0ZXAuZG9uZSkge1xuICAgIGFjYyA9IHJlZHVjZXJbcC5zdGVwXShhY2MsIHN0ZXAudmFsdWUpO1xuICAgIGlmIChpc0NvbXBsZXRlZChhY2MpKSB7XG4gICAgICBhY2MgPSB1bmNvbXBsZXRlKGFjYyk7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgc3RlcCA9IGl0ZXIubmV4dCgpO1xuICB9XG5cbiAgcmV0dXJuIHJlZHVjZXJbcC5yZXN1bHRdKGFjYyk7XG59XG5cbmV4cG9ydCB7XG4gIGluaXQsXG4gIHN0ZXAsXG4gIHJlc3VsdCxcbiAgdG9SZWR1Y2VyLFxuICBBUlJBWV9SRURVQ0VSLFxuICBPQkpFQ1RfUkVEVUNFUixcbiAgU1RSSU5HX1JFRFVDRVIsXG4gIHRvVHJhbnNkdWNlcixcbiAgdG9GdW5jdGlvbixcbiAgY29tcGxldGUsXG4gIHVuY29tcGxldGUsXG4gIGlzQ29tcGxldGVkLFxuICBlbnN1cmVDb21wbGV0ZWQsXG4gIGVuc3VyZVVuY29tcGxldGVkLFxuICByZWR1Y2Vcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuLyoqXG4gKiBBIGJ1bmNoIG9mIHV0aWxpdHkgZnVuY3Rpb25zLiBUaGVzZSBhcmUgYWxsIHVzZWQgYnkgdGhlIGxpYnJhcnkgaXRzZWxmIGluXG4gKiBwbGFjZXMsIGJ1dCBtYW55IG9mIHRoZW0gYXJlIHN1aXRhYmxlIGZvciBnZW5lcmFsIHVzZSBhcyB3ZWxsLlxuICogXlxuICogQG1vZHVsZSBjb3JlL3V0aWxzXG4gKiBAcHJpdmF0ZVxuICovXG5cbi8qKlxuICogYE9iamVjdGAncyBgdG9TdHJpbmdgIGlzIGV4cGxpY2l0bHkgdXNlZCB0aHJvdWdob3V0IGJlY2F1c2UgaXQgY291bGQgYmVcbiAqIHJlZGVmaW5lZCBpbiBhbnkgc3VidHlwZSBvZiBgT2JqZWN0YC5cbiAqXG4gKiBAZnVuY3Rpb24gdG9TdHJpbmdcbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgYSB2YWx1ZSBpcyBhIGZ1bmN0aW9uLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2UtdG9vbHNcbiAqIEBwYXJhbSB7Kn0geCBUaGUgdmFsdWUgYmVpbmcgdGVzdGVkIHRvIHNlZSBpZiBpdCBpcyBhIGZ1bmN0aW9uLlxuICogQHJldHVybiB7Ym9vbGVhbn0gRWl0aGVyIGB0cnVlYCBpZiB0aGUgdGVzdCB2YWx1ZSBpcyBhIGZ1bmN0aW9uIG9yIGBmYWxzZWAgaWZcbiAqICAgICBpdCBpcyBub3QuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHgpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoeCkgPT09IFwiW29iamVjdCBGdW5jdGlvbl1cIjtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgYSB2YWx1ZSBpcyBhIGdlbmVyYXRvciBmdW5jdGlvbi5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlLXRvb2xzXG4gKiBAcGFyYW0geyp9IHggVGhlIHZhbHVlIGJlaW5nIHRlc3RlZCB0byBzZWUgaWYgaXQgaXMgYSBnZW5lcmF0b3IgZnVuY3Rpb24uXG4gKiBAcmV0dXJuIHtib29sZWFufSBFaXRoZXIgYHRydWVgIGlmIHRoZSB0ZXN0IHZhbHVlIGlzIGEgZ2VuZXJhdG9yIGZ1bmN0aW9uIG9yXG4gKiAgICAgYGZhbHNlYCBpZiBpdCBpcyBub3QuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBpc0dlbmVyYXRvckZ1bmN0aW9uKHgpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoeCkgPT09IFwiW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl1cIjtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgYSB2YWx1ZSBpcyBhIHBsYWluIG9iamVjdC5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgYGZhbHNlYCBpZiB0aGUgdmFsdWUgaXMgYW55IG90aGVyIHNvcnQgb2YgYnVpbHQtaW5cbiAqIG9iamVjdCAoc3VjaCBhcyBhbiBhcnJheSBvciBhIHN0cmluZykuIEl0IGFsc28gcmV0dXJucyBgZmFsc2VgIGZvciBhbnkgb2JqZWN0XG4gKiB0aGF0IGlzIGNyZWF0ZWQgYnkgYSBjb25zdHJ1Y3RvciB0aGF0IGlzIG5vdCBgT2JqZWN0YCdzIGNvbnN0cnVjdG9yLCBtZWFuaW5nXG4gKiB0aGF0IFwiaW5zdGFuY2VzXCIgb2YgY3VzdG9tIFwiY2xhc3Nlc1wiIHdpbGwgcmV0dXJuIGBmYWxzZWAuIFRoZXJlZm9yZSBpdCdzIG9ubHlcbiAqIGdvaW5nIHRvIHJldHVybiBgdHJ1ZWAgZm9yIGxpdGVyYWwgb2JqZWN0cyBvciB0aG9zZSBjcmVhdGVkIHdpdGhcbiAqIGBPYmplY3QuY3JlYXRlKClgLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2UtdG9vbHNcbiAqIEBwYXJhbSB7Kn0geCBUaGUgdmFsdWUgYmVpbmcgdGVzdGVkIHRvIHNlZSBpZiBpdCBpcyBhIHBsYWluIG9iamVjdC5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IEVpdGhlciBgdHJ1ZWAgaWYgdGhlIHRlc3QgdmFsdWUgaXMgYSBwbGFpbiBvYmplY3Qgb3JcbiAqICAgICBgZmFsc2VgIGlmIGl0IGlzIG5vdC5cbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QoeCkge1xuICAvLyBUaGlzIGNoZWNrIGV4Y2x1ZGVzIGJ1aWx0LWluIG5vbi1PYmplY3Qgb2JqZWN0cyAoc3VjaCBhcyBBcnJheSBhbmQgU3RyaW5nKS5cbiAgLy8gSXQgYWxzbyBleGNsdWRlcyBvYmplY3RzIGNyZWF0ZWQgZnJvbSBFUzIwMTUgY2xhc3NlcywgYnV0IGl0IGRvZXMgbm90XG4gIC8vIGV4Y2x1ZGUgb2JqZWN0cyBjcmVhdGVkIHdpdGggYG5ld2Agb24gY29uc3RydWN0b3IgZnVuY3Rpb25zICh0aGF0IGhhcHBlbnNcbiAgLy8gYmVsb3cpLlxuICBpZiAodG9TdHJpbmcuY2FsbCh4KSAhPT0gXCJbb2JqZWN0IE9iamVjdF1cIikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIFByb3RvdHlwZS1sZXNzIG9iamVjdHMgKGNyZWF0ZWQgd2l0aCBgT2JqZWN0LmNyZWF0ZShudWxsKSlgIHBhc3NcbiAgY29uc3QgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoeCk7XG4gIGlmIChwcm90byA9PT0gbnVsbCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLy8gQ2hlY2sgdG8gc2VlIHdoZXRoZXIgdGhlIGNvbnN0cnVjdG9yIG9mIHRoZSB0ZXN0ZWQgb2JqZWN0IGlzIHRoZSBPYmplY3RcbiAgLy8gY29uc3RydWN0b3IuIFRoaXMgaXMgdGhlIG9ubHkgY29uc3RydWN0b3IgdGhhdCBwcm9kdWNlcyBhIFwicGxhaW5cIiBvYmplY3QuXG4gIGNvbnN0IGN0b3IgPVxuICAgIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwcm90bywgXCJjb25zdHJ1Y3RvclwiKSAmJlxuICAgIHByb3RvLmNvbnN0cnVjdG9yO1xuICByZXR1cm4gdHlwZW9mIGN0b3IgPT09IFwiZnVuY3Rpb25cIiAmJiBjdG9yID09PSBPYmplY3Q7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGEgdmFsdWUgaXMgYSBudW1iZXIuXG4gKlxuICogVGhpcyBmdW5jdGlvbiB3aWxsIHJldHVybiBgdHJ1ZWAgZm9yIGFueSBudW1iZXIgbGl0ZXJhbCBvciBpbnN0YW5jZSBvZlxuICogYE51bWJlcmAgZXhjZXB0IGZvciBgSW5maW5pdHlgIG9yIGBOYU5gLiBJdCB3aWxsIHJldHVybiBgZmFsc2VgIGZvciBzdHJpbmdzXG4gKiB0aGF0IGhhcHBlbiB0byBhbHNvIGJlIG51bWJlcnM7IHRoZSB2YWx1ZSBtdXN0IGJlIGFuIGFjdHVhbCBgTnVtYmVyYCBpbnN0YW5jZVxuICogb3IgbnVtYmVyIGxpdGVyYWwgdG8gcmV0dXJuIGB0cnVlYC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlLXRvb2xzXG4gKiBAcGFyYW0geyp9IHggVGhlIHZhbHVlIGJlaW5nIHRlc3RlZCB0byBzZWUgaWYgaXQgaXMgYSBudW1iZXIuXG4gKiBAcmV0dXJuIHtib29sZWFufSBFaXRoZXIgYHRydWVgIGlmIHRoZSB0ZXN0IHZhbHVlIGlzIGEgZmluaXRlIG51bWJlciAobm90XG4gKiAgICAgaW5jbHVkaW5nIHN0cmluZyByZXByZXNlbnRhdGlvbnMgb2YgbnVtYmVycykgb3IgYGZhbHNlYCBpZiBpdCBpcyBub3QuXG4gKi9cbmZ1bmN0aW9uIGlzTnVtYmVyKHgpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoeCkgPT09IFwiW29iamVjdCBOdW1iZXJdXCIgJiYgaXNGaW5pdGUoeCk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGEgdmFsdWUgaXMgYSBzdHJpbmcuXG4gKlxuICogTGl0ZXJhbCBzdHJpbmdzIHdpbGwgcmV0dXJuIGB0cnVlYCwgYXMgd2lsbCBpbnN0YW5jZXMgb2YgdGhlIGBTdHJpbmdgIG9iamVjdC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlLXRvb2xzXG4gKiBAcGFyYW0geyp9IHggVGhlIHZhbHVlIGJlaW5nIHRlc3RlZCB0byBzZWUgaWYgaXQgaXMgYSBzdHJpbmcuXG4gKiBAcmV0dXJuIHtib29sZWFufSBFaXRoZXIgYHRydWVgIGlmIHRoZSB0ZXN0IHZhbHVlIGlzIGEgc3RyaW5nIG9yIGBmYWxzZWAgaWZcbiAqICAgIGl0IGlzIG5vdC5cbiAqL1xuZnVuY3Rpb24gaXNTdHJpbmcoeCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh4KSA9PT0gXCJbb2JqZWN0IFN0cmluZ11cIjtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgYSB2YWx1ZSBpcyBhbiBhcnJheS5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIG1lcmVseSBkZWxlZ2F0ZXMgdG8gYEFycmF5LmlzQXJyYXlgLiBJdCBpcyBwcm92aWRlZCBmb3JcbiAqIGNvbnNpc3RlbmN5IGluIGNhbGxpbmcgc3R5bGUgb25seS5cbiAqXG4gKiBAZnVuY3Rpb24gaXNBcnJheVxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZS10b29sc1xuICogQHBhcmFtIHsqfSB4IFRoZSB2YWx1ZSBiZWluZyB0ZXN0ZWQgdG8gc2VlIGlmIGl0IGlzIGFuIGFycmF5LlxuICogQHJldHVybiB7Ym9vbGVhbn0gRWl0aGVyIGB0cnVlYCBpZiB0aGUgdGVzdCB2YWx1ZSBpcyBhbiBhcnJheSBvciBgZmFsc2VgIGlmXG4gKiAgICAgaXQgaXMgbm90LlxuICovXG5jb25zdCBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxuZXhwb3J0IHtcbiAgaXNGdW5jdGlvbixcbiAgaXNHZW5lcmF0b3JGdW5jdGlvbixcbiAgaXNPYmplY3QsXG4gIGlzTnVtYmVyLFxuICBpc1N0cmluZyxcbiAgaXNBcnJheVxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=