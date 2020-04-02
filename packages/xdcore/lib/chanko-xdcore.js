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



/***/ }),

/***/ "./src/modules/reduction.js":
/*!**********************************!*\
  !*** ./src/modules/reduction.js ***!
  \**********************************/
/*! exports provided: init, step, final, toReducer, ARRAY_REDUCER, OBJECT_REDUCER, STRING_REDUCER, toTransducer, toFunction, complete, uncomplete, isCompleted, ensureCompleted, ensureUncompleted, reduce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "step", function() { return step; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "final", function() { return final; });
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


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly94ZGNvcmUvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL3hkY29yZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly94ZGNvcmUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8veGRjb3JlLy4vc3JjL21vZHVsZXMvaXRlcmF0aW9uLmpzIiwid2VicGFjazovL3hkY29yZS8uL3NyYy9tb2R1bGVzL3Byb3RvY29sLmpzIiwid2VicGFjazovL3hkY29yZS8uL3NyYy9tb2R1bGVzL3JlZHVjdGlvbi5qcyIsIndlYnBhY2s6Ly94ZGNvcmUvLi9zcmMvbW9kdWxlcy91dGlscy5qcyJdLCJuYW1lcyI6WyJvYmplY3RJdGVyYXRvciIsIm9iaiIsImtleXMiLCJPYmplY3QiLCJpbmRleCIsImxlbmd0aCIsImsiLCJmdW5jdGlvbkl0ZXJhdG9yIiwiZm4iLCJjdXJyZW50IiwiaXRlcmF0b3IiLCJ2YWx1ZSIsImlzRnVuY3Rpb24iLCJTeW1ib2wiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiaXNPYmplY3QiLCJpc0l0ZXJhYmxlIiwiaXNJbXBsZW1lbnRlZCIsInByb3RvY29scyIsImNyZWF0ZSIsImluaXQiLCJmb3IiLCJzdGVwIiwiZmluYWwiLCJjb21wbGV0ZWQiLCJwcm90b2NvbCIsImFzeW5jSXRlcmF0b3IiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJpbmNsdWRlcyIsImNvbGxlY3Rpb24iLCJwIiwiaXNTdHJpbmciLCJpc0FycmF5IiwiRXJyb3IiLCJhY2MiLCJ2IiwicHVzaCIsIm1heCIsInJlZHVjZSIsImEiLCJiIiwiTWF0aCIsInRvUmVkdWNlciIsImZyZWV6ZSIsIkFSUkFZX1JFRFVDRVIiLCJPQkpFQ1RfUkVEVUNFUiIsIlNUUklOR19SRURVQ0VSIiwidG9UcmFuc2R1Y2VyIiwicmVkdWNlciIsInRvRnVuY3Rpb24iLCJ0cmFuc2R1Y2VyRm4iLCJyIiwicmVzdWx0IiwiYmluZCIsImNvbXBsZXRlIiwidW5jb21wbGV0ZSIsImlzQ29tcGxldGVkIiwiZW5zdXJlQ29tcGxldGVkIiwiZW5zdXJlVW5jb21wbGV0ZWQiLCJpdGVyIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibmV4dCIsImRvbmUiLCJ0b1N0cmluZyIsInByb3RvdHlwZSIsIngiLCJjYWxsIiwicHJvdG8iLCJnZXRQcm90b3R5cGVPZiIsImN0b3IiLCJoYXNPd25Qcm9wZXJ0eSIsImlzTnVtYmVyIiwiaXNGaW5pdGUiLCJBcnJheSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7OztBQU9BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3Z0JBO0FBQ0E7QUFDQTtBQVdBO0FBU0E7Ozs7Ozs7OztBQVNBOzs7Ozs7Ozs7O0FBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkE7Ozs7Ozs7OztBQVNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMEJBOzs7Ozs7Ozs7Ozs7OztBQWNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOXBCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7QUFPQTs7Ozs7O0FBT0E7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QUFDbkIsU0FBT0YsUUFBUSxDQUFDRyxJQUFULENBQWNELENBQWQsTUFBcUIsaUJBQTVCO0FBQ0Q7QUFFRDs7Ozs7Ozs7Ozs7Ozs7QUFZQSxNQUFNbEMsT0FBTyxHQUFHMEMsS0FBSyxDQUFDMUMsT0FBdEIiLCJmaWxlIjoiY2hhbmtvLXhkY29yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInhkY29yZVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJ4ZGNvcmVcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG4vKipcbiAqIFRoZSBjb3JlIGVuZ2luZSBmb3IgdHJhbnNkdWNlcnMuIFRoaXMgY29uc2lzdHMgcHJpbWFyaWx5IG9mIHJlZHVjdGlvbiBzdXBwb3J0XG4gKiBmb3IgY2hhaW5zIG9mIHRyYW5zZHVjZXJzIGJ1dCBhbHNvIHN1cHBsaWVzIHByb3RvY29sIGRlZmluaXRpb25zIGFuZCB1dGlsaXR5XG4gKiBmdW5jdGlvbnMgZm9yIHdyaXRpbmcgbmV3IHRyYW5zZHVjZXJzLlxuICpcbiAqIFRoZSBnZW5lcmFsIGlkZWEgaXMgdGhhdCBpZiB5b3UgbmVlZCB0byB1c2UgYSB0cmFuc2R1Y2VyLCB5b3UgY2FuIGF2b2lkXG4gKiBpbXBvcnRpbmcgdGhpcyBsaWJyYXJ5IGFuZCB3b3JrIHdpdGggdGhlIHtAbGluayBtb2R1bGU6eGR1Y2V8eGR1Y2V9IG1vZHVsZVxuICogaW5zdGVhZCAod2hpY2ggaW50ZXJuYWxseSBkZXBlbmRzIG9uIHRoaXMgbW9kdWxlKS4gSWYgeW91IHdhbnQgdG8gd3JpdGUgYSBuZXdcbiAqIHRyYW5zZHVjZXIgb3IgY29udHJvbCBsb3ctbGV2ZWwgYWNjZXNzIHRvIHRoZSByZWR1Y3Rpb24gZW5naW5lLCB0aGVuIHlvdSBuZWVkXG4gKiB0byB1c2UgdGhpcyBsaWJyYXJ5LiAoVGhlcmUgaXMgYSBzbWFsbCBudW1iZXIgb2YgZnVuY3Rpb25zIHRoYXQgYXJlIHVzZWZ1bFxuICogZm9yIGJvdGgsIGFuZCB7QGxpbmsgbW9kdWxlOnhkdWNlfHhkdWNlfSByZS1leHBvcnRzIHRoZW0gZnJvbSBoZXJlIHNvIHRoZXlcbiAqIGNhbiBiZSB1c2VkIGZyb20gZWl0aGVyIG1vZHVsZS4pXG4gKlxuICogVGhpcyBtb2R1bGUgcHJvdmlkZXMgZm91ciBiYXNpYyBzZXJ2aWNlczpcbiAqXG4gKiAxLiBSZWR1Y3Rpb24gb2YgdHJhbnNkdWNlciBjaGFpbnNcbiAqIDIuIFByb3RvY29sIGRlZmluaXRpb25cbiAqIDMuIEl0ZXJhdGlvbiBzdXBwb3J0XG4gKiA0LiBBdXRob3JpbmcgdXRpbGl0aWVzXG4gKlxuICogV2hhdCBmb2xsb3dzIGlzIGEgc2hvcnQgZGl1c2N1c3Npb24gb2YgZWFjaC5cbiAqXG4gKiAjIyBSZWR1Y3Rpb25cbiAqXG4gKiBBbGwgdHJhbnNmb3JtaW5nIGZ1bmN0aW9ucywgd2hldGhlciBtZXRob2RzIG9mIGBBcnJheWAgb3IgdGhpcmQgcGFydHkgdG9vbHNcbiAqIHN1Y2ggYXMgTG9kYXNoLCBwZXJmb3JtIHJlZHVjdGlvbiBpbiBvcmRlciB0byBidWlsZCB1cCBhIG5ldyBjb2xsZWN0aW9uIG91dFxuICogb2YgdGhlIGVsZW1lbnRzIHRoYXQgdGhleSd2ZSB0cmFuc2Zvcm1lZC9maWx0ZXJlZCwgZXRjLlxuICpcbiAqIFRyYW5zZHVjZXJzIGFyZSBubyBkaWZmZXJlbnQgaW4gdGhhdCByZWdhcmQsIGJ1dCB0aGUgbWFubmVyIGluIHdoaWNoIHRoZXkgZG9cbiAqIHRoZWlyIHJlZHVjdGlvbiBpcyB3aGF0IHNldHMgdGhlbSBhcGFydC5cbiAqXG4gKiBVc2luZyBgQXJyYXkucHJvdG90eXBlLm1hcGAgYXMgYW4gZXhhbXBsZSwgdGhlIHVzZXIgb2YgdGhlIGZ1bmN0aW9uIHByb3ZpZGVzXG4gKiBhIHRyYW5zZm9ybWF0aW9uIGZ1bmN0aW9uLiBUaGUgYG1hcGAgZnVuY3Rpb24gaXRlcmF0ZXMgb3ZlciB0aGUgaW5wdXQgYXJyYXksXG4gKiBwYXNzZXMgdGhlIGVsZW1lbnRzIHRocm91Z2ggdGhlIHByb3ZpZGVkIHRyYW5zZm9ybWF0aW9uIGZ1bmN0aW9uLCBhbmQgdGhlblxuICogcmVkdWNlcyB0aGUgcmVzdWx0cyBpbnRvIGEgbmV3IGFycmF5LiBJZiBgbWFwYCBpcyBjaGFpbmVkIHRvIGFub3RoZXJcbiAqIGZ1bmN0aW9uLCBsaWtlIGBBcnJheS5wcm90b3R5cGUuZmlsdGVyYCwgdGhlIHByb2Nlc3MgbmVlZHMgdG8gYmUgcmVwZWF0ZWQ6XG4gKiBpdGVyYXRlIGFnYWluLCBmaWx0ZXIgdmlhIGEgdXNlci1wcm92aWRlZCBmdW5jdGlvbiwgYW5kIHJlZHVjZSBhZ2Fpbi5cbiAqXG4gKiBUcmFuc2R1Y2VycyBhcmUgZGlmZmVyZW50LiBXaGVuIHVzaW5nIGEgdHJhbnNkdWNlciwgcmF0aGVyIHRoYW4gYVxuICogbWFuaXB1bGF0aW9uIGZ1bmN0aW9uIGJlaW5nIHByb3ZpZGVkIGFzIGluIGBtYXBgIG9yIGBmaWx0ZXJgLCBhICpyZWR1Y2VyXG4gKiBvYmplY3QqIGlzIHVzZWQuIChJdCdzIGFuIG9iamVjdCByYXRoZXIgdGhhbiBhIGZ1bmN0aW9uIGJlY2F1c2UgaXQgaGFzXG4gKiBtdWx0aXBsZSBmdW5jdGlvbnMsIGVhY2ggaW1wbGVtZW50ZWQgYXMgcHJvcGVydGllcyBvZiB0aGUgcmVkdWNlciBvYmplY3QuKVxuICogVGhpcyBtZWFucyB0aGF0IHRoZSB1c2VyIHByb3ZpZGVzIGluc3RydWN0aW9ucyBmb3IgYm90aCB0cmFuc2Zvcm1hdGlvbiAqYW5kKlxuICogcmVkdWN0aW9uLCByYXRoZXIgdGhhbiB0aGUgY29sbGVjdGlvbiBmdW5jdGlvbiBpdHNlbGYgYmVpbmcgcmVzcG9uc2libGUgZm9yXG4gKiBkb2luZyB0aGUgcmVkdWN0aW9uIG9uIGl0cyBvd24uXG4gKlxuICogVGhpcyBoYXMgdHdvIHZlcnkgYmVuZWZpY2lhbCBlZmZlY3RzLiBGaXJzdCwgaWYgYSB1c2VyIHdhbnRzIHRvIGZpbHRlciBhbmRcbiAqIHRoZW4gbWFwIHRoZSBlbGVtZW50cyBvZiBhIGNvbGxlY3Rpb24sIHRoZSB0cmFuc2R1Y2VyIGRvZXMgbm90IGhhdmUgdG8gcmVkdWNlXG4gKiB0aGUgZmlsdGVyZWQgZWxlbWVudHMgaW50byBhIGNvbGxlY3Rpb24ganVzdCB0byBoYXZlIHRoZSBtYXAgcGFydCB0ZWFyIHRoZW1cbiAqIGFwYXJ0IGFnYWluIGFuZCByZS1yZWR1Y2UgdGhlbSBsYXRlci4gVGhlIGZpbHRlciBwYXJ0IG9mIHRoZSB0cmFuc2R1Y2VyIGNhblxuICogcGFzcyBpdHMgZWxlbWVudHMgb25lIGF0IGEgdGltZSB0byB0aGUgbWFwIHBhcnQsIGFuZCByZWR1Y3Rpb24gY2FuIGhhcHBlblxuICogb25seSBhdCB0aGUgZW5kIGFmdGVyIHRoZSBlbGVtZW50cyBoYXZlIGJlZW4gYm90aCBmaWx0ZXJlZCAqYW5kKiBtYXBwZWQuXG4gKlxuICogU2Vjb25kbHksIHNpbmNlIHRoZSB1c2VyIGlzIHByb3ZpZGluZyB0aGUgcmVkdWN0aW9uIGluc3RydWN0aW9ucyBhbG9uZyB3aXRoXG4gKiB0aGUgdHJhbnNmb3JtYXRpb24gaW5zdHJ1Y3Rpb25zLCB0aGUgdHlwZSBvZiBjb2xsZWN0aW9uIHRoYXQgZ2V0cyByZWR1Y2VkXG4gKiBpbnRvIGRvZXMgbm90IGhhdmUgdG8gYmUgdGhlIHNhbWUgdHlwZSBhcyB0aGUgaW5wdXQgY29sbGVjdGlvbi4gWW91IGNvdWxkXG4gKiBwcm9jZXNzIGNoYXJhY3RlcnMgaW4gYSBzdHJpbmcgYW5kIGhhdmUgaXQgb3V0cHV0IGFzIGFuIGFycmF5LiBPciBwcm9jZXNzIHRoZVxuICogdmFsdWVzIGluIGFuIGl0ZXJhdG9yIGFuZCBnZXQgYSBwbGFpbiBvYmplY3QgYXMgb3V0cHV0LlxuICpcbiAqIFByYWN0aWNhbGx5IHNwZWFraW5nLCBtb3N0IG9mIHRoZSByZWR1Y2VyIG9iamVjdCBjcmVhdGlvbiBpcyBhYnN0cmFjdGVkIGF3YXksXG4gKiBzbyB1c2luZyB0cmFuc2R1Y2VycyBpcyBubyBtb3JlIGRpZmZpY3VsdCB0aGFuIGp1c3QgdXNpbmdcbiAqIGBBcnJheS5wcm90b3R5cGUubWFwYC4gVGhlIGB7QGxpbmsgbW9kdWxlOnhkY29yZS5yZWR1Y2V8cmVkdWNlfWAgZnVuY3Rpb25cbiAqIHByb3ZpZGVkIGJ5IHRoaXMgbGlicmFyeSBpcyBsb3cgbGV2ZWwsIHRob3VnaCwgYW5kIGRvZXMgbm90IGRvIGFueSBvZiB0aGF0XG4gKiBhYnN0cmFjdGluZyBvbiBpdHMgb3duLiBUaGUgZnVuY3Rpb25zIGZyb20gdGhlIHtAbGluayBtb2R1bGU6eGR1Y2V8eGR1Y2V9XG4gKiBtb2R1bGUsIG5hbWVseSBge0BsaW5rIG1vZHVsZTp4ZHVjZS50cmFuc2R1Y2V8dHJhbnNkdWNlfWAsXG4gKiBge0BsaW5rIG1vZHVsZTp4ZHVjZS5pbnRvfGludG99YCwgYW5kXG4gKiBge0BsaW5rIG1vZHVsZTp4ZHVjZS5zZXF1ZW5jZXxzZXF1ZW5jZX1gLCB0YWtlIGNhcmUgb2YgdGhhdCBhYnN0cmFjdGlvbiBzb1xuICogYHtAbGluayBtb2R1bGU6eGRjb3JlLnJlZHVjZXxyZWR1Y2V9YCBjYW4ganVzdCBoYW5kbGUgYWN0dWFsIHJlZHVjdGlvbi5cbiAqXG4gKiAjIyBQcm90b2NvbHNcbiAqXG4gKiBJbiBFUzIwMTUsIHRoZSBpZGVhIG9mIHByb3RvY29scyB3YXMgYWRkZWQgdG8gSmF2YVNjcmlwdC4gVGhpcyB3YXMgZG9uZSBhdFxuICogdGhlIGJlZ2lubmluZyB0byBwcm92aWRlIGxhbmd1YWdlLWxldmVsIHN1cHBvcnQgZm9yIHRoZSBuZXcgYGZvci4uLm9mYCBsb29wLlxuICogQXMgbG9uZyBhcyBhIHZhbHVlIHN1cHBvcnRlZCB0aGUgaXRlcmFibGUgcHJvdG9jb2wgYnkgaGF2aW5nIGEgcHJvcGVydHkgbmFtZWRcbiAqIGBTeW1ib2wuaXRlcmF0b3JgIHRoYXQgcmV0dXJucyBhbiBpdGVyYXRvciBmb3IgdGhhdCB2YWx1ZSB3aGVuIGl0J3MgY2FsbGVkLFxuICogdGhlbiBpdCBhdXRvbWF0aWNhbGx5IHF1YWxpZmllZCB0byBiZSB1c2VkIGluIGBmb3IuLi5vZmAuXG4gKlxuICogVGhpcyBtb2R1bGUgdXNlcyB0aGF0IGl0ZXJhYmxlIG1vZHVsZSBpbiB0aGUgc2FtZSB3YXkgdG8gdW5kZXJzdGFuZCBob3cgdG9cbiAqIGJyZWFrIGNvbGxlY3Rpb25zIGFwYXJ0LCBidXQgaXQgYWxzbyB1c2VzIHByb3RvY29scyB0byBsZXQgY29sbGVjdGlvbnMgaW5mb3JtXG4gKiB0aGUgZW5naW5lIGhvdyB0byByZWR1Y2UgYSBjb2xsZWN0aW9uIG9mIHRoYXQgdHlwZSBiYWNrIHRvZ2V0aGVyIGFnYWluLiBTaW5jZVxuICogdGhlcmUgYXJlIG5vIHN0YW5kYXJkIHByb3RvY29scyBmb3IgcmVkdWN0aW9uIHRoZSB3YXkgdGhlcmUgYXJlIGZvclxuICogaXRlcmF0aW9uLCB0aGlzIG1vZHVsZSBwcm92aWRlcyBjdXN0b20gcHJvdG9jb2xzIG9mIGl0cyBvd24uIFRoZXNlIGFyZSBhbHNvXG4gKiBzeW1ib2xzIHVzZWQgYXMgbmFtZXMgZm9yIHByb3BlcnRpZXMsIGJ1dCB0aGV5IGFyZSBzdG9yZWQgaW4gYW4gb2JqZWN0IGNhbGxlZFxuICogYHtAbGluayBtb2R1bGU6eGRjb3JlLnByb3RvY29sc3xwcm90b2NvbHN9YCB0byBiZSBsb29rZWQgdXAgYnkgc3RyaW5nIGtleTpcbiAqXG4gKiAqIGBwcm90b2NvbHMuaW5pdGBcbiAqICogYHByb3RvY29scy5zdGVwYFxuICogKiBgcHJvdG9jb2xzLmZpbmFsYFxuICogKiBgcHJvdG9jb2xzLmNvbXBsZXRlZGBcbiAqICogYHByb3RvY29scy52YWx1ZWBcbiAqXG4gKiBUaGUgbGFzdCB0d28gKGBjb21wbGV0ZWRgIGFuZCBgdmFsdWVgKSBhcmUgdXNlZCBpbnRlcm5hbGx5IGZvciBrZWVwaW5nIHRyYWNrXG4gKiBvZiB0aGUgcmVkdWN0aW9uIHN0YXR1cyBvZiBhIHZhbHVlIGFuZCBzaG91bGRuJ3QgbmVlZCB0byBiZSB1c2VkIGV4dGVybmFsbHkuXG4gKiBUaGUgZmlyc3QgdGhyZWUsIGhvd2V2ZXIsIGFyZSBob3cgdGhlIGVuZ2luZSBrbm93cyBob3cgdG8gcmVkdWNlIHRvIGEgY2VydGFpblxuICogY29sbGVjdGlvbiB0eXBlLlxuICpcbiAqIGBpbml0YCBpcyBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIG5ldywgZW1wdHkgdmVyc2lvbiBvZiB0aGF0IGNvbGxlY3Rpb24gdG9cbiAqIGJlIGJ1aWx0IHVwb24uIGBzdGVwYCBpcyBhIGZ1bmN0aW9uIHRoYXQgZ2V0cyBwYXNzZWQgYSBjb2xsZWN0aW9uIG9mIHRoYXRcbiAqIHR5cGUgcGx1cyBhIG5ldyB2YWx1ZSB0byBiZSBhZGRlZCB0byBpdCwgYW5kIHJldHVybnMgdGhlIGNvbGxlY3Rpb24gd2l0aCB0aGF0XG4gKiB2YWx1ZSBhZGRlZCB0byBpdCAoaS5lLiwgaXQncyBhIHN0YW5kYXJkIHJlZHVjdGlvbiBmdW5jdGlvbikuIGBmaW5hbGAgaXMgYVxuICogZnVuY3Rpb24gdGhhdCBnZXRzIHBhc3NlZCB0aGUgZnVsbHkgcmVkdWNlZCBuZXcgY29sbGVjdGlvbiBhbmQgcmV0dXJucyB3aGF0XG4gKiB0aGUgZmluYWwgb3V0cHV0IHNob3VsZCBiZSwgZ2l2aW5nIHRoZSBlbmdpbmUgb25lIGxhc3QgY2hhbmNlIHRvIG1vZGlmeSB0aGVcbiAqIGZpbmFsIHZhbHVlICh0aGlzICpub3JtYWxseSoganVzdCByZXR1cm5zIGl0cyBhcmd1bWVudCB1bm1vZGlmaWVkKS4gSWYgdGhlc2VcbiAqIHRocmVlIHByb3BlcnRpZXMgYXJlIGFkZGVkIHRvIGFuIG9iamVjdCwgdGhlbiB0aGlzIG1vZHVsZSB3aWxsIHJlY29nbml6ZSB0aGF0XG4gKiBvYmplY3QgYXMgcmVkdWNpYmxlIGFuZCBiZSBhYmxlIHRvIGNyZWF0ZSBhbmQgZmlsbCBvbmUuXG4gKlxuICogQXMgYW4gZXhhbXBsZSwgbGV0J3MgYWRkIHN1cHBvcnQgZm9yIHRyYW5zZHVjdGlvbiB0byB0aGUgYExpc3RgIGNvbGxlY3Rpb25cbiAqIGZyb20gW2ltbXV0YWJsZS5qc11bMV0uXG4gKlxuICogYGBgXG4gKiBpbXBvcnQgeyBwcm90b2NvbHMgYXMgcCB9IGZyb20gXCJAY2hhbmtvL3hkY29yZVwiO1xuICogaW1wb3J0IHsgTGlzdCB9IGZyb20gXCJpbW11dGFibGVcIjtcbiAqXG4gKiBMaXN0LnByb3RvdHlwZVtwLmluaXRdID0gKCkgPT4gTGlzdCgpLmFzTXV0YWJsZSgpO1xuICogTGlzdC5wcm90b3R5cGVbcC5zdGVwXSA9IChhY2MsIHZhbHVlKSA9PiBhY2MucHVzaCh2YWx1ZSk7XG4gKiBMaXN0LnByb3RvdHlwZVtwLmZpbmFsXSA9IHZhbHVlID0+IHZhbHVlLmFzSW1tdXRhYmxlKCk7XG4gKiBgYGBcbiAqXG4gKiBUaGUgYGluaXRgIGZ1bmN0aW9uIGhlcmUgcmV0dXJucyBhIG5ldywgZW1wdHkgbGlzdC4gVGhlIGBzdGVwYCBmdW5jdGlvblxuICogZGVzY3JpYmVzIGhvdyB0byBhZGQgYSB2YWx1ZSB0byB0aGF0IGxpc3QgKHRocm91Z2ggdGhlIGBwdXNoYCBtZXRob2QpLiBUaGVcbiAqIGBmaW5hbGAgZnVuY3Rpb24gcnVucyBhdCB0aGUgdmVyeSBlbmQgdG8gZGV0ZXJtaW5lIHRoZSBlbmQgdmFsdWUuIEluIHRoZSBjYXNlXG4gKiBvZiB0aGlzIGltbXV0YWJsZSBsaXN0LCB0aGUgYGluaXRgIGZ1bmN0aW9uIGFjdHVhbGx5IHJldHVybnMgYSBtdXRhYmxlIGxpc3RcbiAqIHRoYXQgd2UgY2FuIGFkZCB0byB3aXRoIGBzdGVwYCwgYW5kIHRoZW4gYGZpbmFsYCB0dXJucyB0aGF0IGludG8gYW4gaW1tdXRhYmxlXG4gKiBsaXN0IHRvIGJlIHJldHVybmVkLiBUaGlzIGlzIGEgdGV4dGJvb2sgdXNlIG9mIGBmaW5hbGA7IG1vc3Qgb2YgdGhlIHRpbWUsXG4gKiBgZmluYWxgIHdpbGwgc2ltcGx5IHJldHVybiB0aGUgdmFsdWUgdGhhdCdzIHBhc3NlZCB0byBpdCwgdW5jaGFuZ2VkLlxuICpcbiAqIFdpdGggdGhlc2UgbGluZXMgb2YgY29kZSBpbiBwbGFjZSwgYWRkaW5nIHRoZSBwcm90b2NvbCBmdW5jdGlvbnMgdG8gYExpc3RgJ3NcbiAqIHByb3RvdHlwZSwgcmVkdWN0aW9uIHdpbGwganVzdCB3b3JrLlxuICpcbiAqIEl0IGlzIG5vdCBuZWNlc3NhcnkgdG8gcHJvdmlkZSB0aGVzZSBmdW5jdGlvbnMgZm9yIG5hdGl2ZSBhcnJheXMsIHN0cmluZ3MsXG4gKiBwbGFpbiBvYmplY3RzLCBvciBpdGVyYXRvcnMsIGFzIHN1cHBvcnQgZm9yIHRoZW0gaXMgYnVpbHQgaW4uXG4gKlxuICogIyMgSXRlcmF0b3JzXG4gKlxuICogQXMgbWVudGlvbmVkIGFib3ZlLCB0aGVyZSBpcyBhIGJ1aWx0LWluIHByb3RvY29sIGZvciBpdGVyYXRpb24gaW4gSmF2YVNjcmlwdFxuICogc2luY2UgRVMyMDE1LCBhbmQgdGhpcyBtb2R1bGUgZG9lcyByZWNvZ25pemUgYW5kIHVzZSB0aGF0IHByb3RvY29sLiAoQmVjYXVzZVxuICogdGhpcyBpcyBhIGJ1aWx0LWluIHByb3RvY29sLCBldmVuIG1hbnkgdGhpcmQtcGFydHkgbGlicmFyaWVzIHRha2UgYWR2YW50YWdlXG4gKiBvZiBpdDsgd2UgZGlkIG5vdCBoYXZlIHRvIGFkZCB0aGUgaXRlcmFibGUgcHJvdG9jb2wgdG8gdGhlIGltbXV0YWJsZSBgTGlzdGBcbiAqIGFib3ZlIGJlY2F1c2UgaW1tdXRhYmxlLmpzIGFscmVhZHkgYWRkcyBpdC4pXG4gKlxuICogSXRlcmF0YWJsZSBwcm90b2NvbCBzdXBwb3J0IHdvcmtzIG91dCBvZiB0aGUgYm94IGZvciBhbnkgdHlwZSB0aGF0IGltcGxlbWVudHNcbiAqIGl0LiBIb3dldmVyLCB0aGVyZSBpcyBhbHNvIHN1cHBvcnQgYnVpbHQgaW50byB0aGlzIG1vZHVsZSBmb3IgdHdvIHR5cGVzIHRoYXRcbiAqIGRvIG5vdCBzdXBwb3J0IHRoZSBwcm90b2NvbDogcGxhaW4gb2JqZWN0cyBhbmQgZnVuY3Rpb25zLlxuICpcbiAqIFRoZSB2YWx1ZXMgdGhhdCBjb21lIG91dCBvZiB0aGUgaXRlcmF0b3IgZm9yIHBsYWluIG9iamVjdHMgYXJlIHRoZW1zZWx2ZXNcbiAqIG9iamVjdHMsIGJ1dCB0aGV5J3JlIG9iamVjdHMgb2Ygb25seSBvbmUgcHJvcGVydHkgZWFjaCwgb25lIGZvciBlYWNoIHByb3BlcnR5XG4gKiBpbiB0aGUgb3JpZ2luYWwgb2JqZWN0LiBGb3IgZXhhbXBsZTpcbiAqXG4gKiBgYGBcbiAqIGltcG9ydCB7IGl0ZXJhdG9yIH0gZnJvbSBcIkBjaGFua28veGRjb3JlXCI7XG4gKlxuICogY29uc3Qgb2JqID0geyBjOiAxLCBhOiAyLCBiOiAzIH07XG4gKiBjb25zdCBpdGVyID0gaXRlcmF0b3Iob2JqKTtcbiAqIGNvbnNvbGUubG9nKGl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiB7IGM6IDEgfVxuICogY29uc29sZS5sb2coaXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IHsgYTogMiB9XG4gKiBjb25zb2xlLmxvZyhpdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4geyBiOiAzIH1cbiAqIGNvbnNvbGUubG9nKGl0ZXIubmV4dCgpLmRvbmUpOyAgICAvLyAtPiB0cnVlXG4gKiBgYGBcbiAqXG4gKiBUaGUgb3JkZXJpbmcgaXMgdGhlIHNhbWUgYXMgb3JkZXJpbmcgZnJvbSBgT2JqZWN0LmtleXMoKWAgYW5kIHRoZSBsaWtlOlxuICpcbiAqIDEuIFN0cmluZyBrZXlzIHRoYXQgYXJlIGludGVnZXIgaW5kaWNlcyBpbiBhc2NlbmRpbmcgbnVtZXJpY2FsIG9yZGVyXG4gKiAyLiBBbGwgb3RoZXIgc3RyaW5nIGtleXMgaW4gdGhlIG9yZGVyIGluIHdoaWNoIHRoZXkgd2VyZSBhZGRlZCB0byB0aGUgb2JqZWN0XG4gKiAzLiBBbGwgc3ltYm9sIGtleXMgaW4gdGhlIG9yZGVyIGluIHdoaWNoIHRoZXkgd2VyZSBhZGRlZCB0byB0aGUgb2JqZWN0XG4gKlxuICogSXRlcmF0aW9uIHN1cHBvcnQgZm9yIGZ1bmN0aW9ucyBoYXBwZW5zIGJ5IGludm9raW5nIHRoZSBmdW5jdGlvbiBmb3IgZWFjaFxuICogaXRlcmF0aW9uIGFuZCB1c2luZyB0aGUgcmV0dXJuIHZhbHVlIGZvciB0aGUgdmFsdWUgb2YgdGhlIGl0ZXJhdG9yIGF0IHRoYXRcbiAqIHBvaW50LiBUd28gdmFsdWVzIGFyZSBmZWQgaW50byB0aGUgZnVuY3Rpb246IHRoZSBpbmRleCBvZiB0aGUgaXRlcmF0aW9uXG4gKiAoc3RhcnRpbmcgYXQgMCBmb3IgdGhlIGZpcnN0IGl0ZXJhdGlvbiBhbmQgaW5jcmVhc2luZyBieSBvbmUgZm9yIGVhY2hcbiAqIHN1YnNlcXVlbnQgaXRlcmF0aW9uKSBhbmQgdGhlIGZ1bmN0aW9uJ3MgcmV0dXJuIHZhbHVlIGZyb20gdGhlIHByZXZpb3VzXG4gKiBpdGVyYXRpb24gKHN0YXJ0aW5nIGFzIGB1bmRlZmluZWRgIGZvciB0aGUgZmlyc3QgaXRlcmF0aW9uKS4gVGhlIGZ1bmN0aW9uIGlzXG4gKiBmcmVlIHRvIHVzZSBvciBpZ25vcmUgdGhlc2UgdmFsdWVzIGFzIGl0IGxpa2VzOyBhbGwgdGhhdCBpcyBpbXBvcnRhbnQgaXMgdGhhdFxuICogaXQgcmV0dXJucyBhIHZhbHVlLlxuICpcbiAqIGBgYFxuICogaW1wb3J0IHsgaXRlcmF0b3IgfSBmcm9tIFwiQGNoYW5rby94ZGNvcmVcIjtcbiAqXG4gKiBjb25zdCBmbiA9IChpbmRleCwgbGFzdCA9IDEpID0+IGxhc3QgKiAoaW5kZXggKyAxKTtcbiAqIGNvbnN0IGl0ZXIgPSBpdGVyYXRvcihmbik7XG4gKiBjb25zb2xlLmxvZyhpdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4gMVxuICogY29uc29sZS5sb2coaXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IDJcbiAqIGNvbnNvbGUubG9nKGl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiA2XG4gKiBjb25zb2xlLmxvZyhpdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4gMjRcbiAqIGNvbnNvbGUubG9nKGl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiAxMjBcbiAqIGBgYFxuICpcbiAqIFRoaXMgZWZmZWN0aXZlbHkgY2FsY3VsYXRlcyB0aGUgZmFjdG9yaWFsIG9mIGAoaW5kZXggKyAxKWAuIEFzIGluIHRoaXNcbiAqIGV4YW1wbGUsIGl0ZXJhdG9ycyBjcmVhdGVkIGZyb20gZnVuY3Rpb25zIGNhbiBiZSBpbmZpbml0ZTsgaWYgdGhlIGZ1bmN0aW9uXG4gKiByZXR1cm5zIGB1bmRlZmluZWRgIGl0J2xsIHRlcm1pbmF0ZSB0aGUgaXRlcmF0b3IgaW1tZWRpYXRlbHkuXG4gKlxuICogIyMgQXV0aG9yaW5nXG4gKlxuICogVGhlIHRvb2xzIGZyb20gdGhpcyBtb2R1bGUgYXJlIHVzZWQgYnkgdGhlIHtAbGluayBtb2R1bGU6eGR1Y2V8eGR1Y2V9IG1vZHVsZVxuICogdG8gYnVpbGQgaXRzIHRyYW5zZHVjZXJzLCBhbmQgYWxsIG9mIHRob3NlIHNhbWUgdG9vbHMgYXJlIGF2YWlsYWJsZSBmb3JcbiAqIGN1c3RvbSB0cmFuc2R1Y2VycyBhcyB3ZWxsLlxuICpcbiAqIEluIGJyaWVmLCBhIHRyYW5zZHVjZXIgd29ya3MgYnkgaGF2aW5nICp0cmFuc2R1Y2VyIG9iamVjdHMqIHdoaWNoIGFyZSBmb3JtZWRcbiAqIGludG8gYSBjaGFpbiwgb25lIGZvciBlYWNoIHRyYW5zZm9ybWF0aW9uLiBBdCB0aGUgZW5kIG9mIHRoZSBjaGFpbiBpcyBhXG4gKiAqcmVkdWNlciBvYmplY3QqIHdoaWNoIGRlc2NyaWJlcyBob3cgdG8gY3JlYXRlIGEgbmV3IGNvbGxlY3Rpb24gZnJvbSB0aGVcbiAqIGVsZW1lbnRzIHRoYXQgdGhlIHRyYW5zZHVjZXIgb2JqZWN0cyBtb2RpZmllZC4gRWxlbWVudHMgYXJlIHB1bGxlZCBvbmUgYXQgYVxuICogdGltZSB0aHJvdWdoIHRoYXQgY2hhaW4sIGJlaW5nIG1vZGlmaWVkLCBmaWx0ZXJlZCBvdXQsIGV0Yy4gZXZlcnkgc3RlcCBvZiB0aGVcbiAqIHdheSB1bnRpbCB0aGUgcmVkdWNlciBhdCB0aGUgZW5kIGFkZHMgaXQgaW50byB0aGUgdGFyZ2V0IGNvbGxlY3Rpb24uXG4gKlxuICogVmlzdWFsbHksIGEgdHJhbnNkdWNlciB0aGF0IG1hcHMgZWxlbWVudCB2YWx1ZXMsIGZpbHRlcnMgdGhlbSwgYW5kIG91dHB1dHMgYW5cbiAqIGFycmF5IGNvbnRhaW5pbmcgdGhvc2UgZWxlbWVudHMgd291bGQgbG9vayBsaWtlIHRoaXM6XG4gKlxuICogYGBgXG4gKiArLS0tLS0tLS0tLS0tLS0tKyAgICArLS0tLS0tLS0tLS0tLS0tKyAgICArLS0tLS0tLS0tLS0tLS0tK1xuICogfCAgbWFwIHhkdWNlciAgIHwgLT4gfCBmaWx0ZXIgeGR1Y2VyIHwgLT4gfCBhcnJheSByZWR1Y2VyIHxcbiAqICstLS0tLS0tLS0tLS0tLS0rICAgICstLS0tLS0tLS0tLS0tLS0rICAgICstLS0tLS0tLS0tLS0tLS0rXG4gKiBgYGBcbiAqXG4gKiBUaGVyZSBpcyBhbHdheXMgb25lIHJlZHVjZXIgb2JqZWN0IGF0IHRoZSBlbmQgYW5kIGFuIGFyYml0cmFyeSBudW1iZXIgb2ZcbiAqIHRyYW5zZHVjZXIgb2JqZWN0cyBiZWZvcmUgaXQuXG4gKlxuICogVHJhbnNkdWNlciBhbmQgcmVkdWNlciBvYmplY3RzIGFyZSBzdHJ1Y3R1cmFsbHkgaWRlbnRpY2FsLiBUaGV5IGJvdGggYXJlXG4gKiByZXF1aXJlZCB0byBoYXZlIHRoZSB0aHJlZSByZWR1Y3Rpb24gcHJvdG9jb2wgbWV0aG9kcyAoYGluaXRgLCBgc3RlcGAsIGFuZFxuICogYGZpbmFsYCkuIFRoZWlyIGRpZmZlcmVuY2UgaXMgaW4gdGhlaXIgcHVycG9zZS5cbiAqXG4gKiBBIHJlZHVjZXIgb2JqZWN0IGlzIHJlc3BvbnNpYmxlIGZvciBwcm92aWRpbmcgYW4gaW5pdGlhbCBjb2xsZWN0aW9uIChgaW5pdGApLFxuICogYWRkaW5nIGVsZW1lbnRzIG9uZSBieSBvbmUgdG8gdGhhdCBjb2xsZWN0aW9uIChgc3RlcGApLCBhbmQgZmluYWxpemluZyB0aGVcbiAqIHJlc3VsdCAoYGZpbmFsYCkuIEl0IGlzIHNlbGYtY29udGFpbmVkIGFuZCBpdHMgcHJvdG9jb2wgbWV0aG9kcyBkb24ndFxuICogdHlwaWNhbGx5IG5lZWQgdG8gY2FsbCBhbnkgb3RoZXIgcmVkdWNlciBvYmplY3RzLiBTaW5jZSBpdCBpcyB0aGUgbGFzdCBvYmplY3RcbiAqIGluIHRoZSBjaGFpbiwgaXQncyBwb3NzaWJsZSBmb3IgYSBjaGFpbiB0byBjb25zaXN0IG9mICpvbmx5KiBhIHJlZHVjZXIgKHRoaXNcbiAqIGlzIHVzZWZ1bCBmb3IgdHVybmluZyBvbmUga2luZCBvZiBjb2xsZWN0aW9uIGludG8gYW5vdGhlciB3aXRob3V0IGNoYW5naW5nXG4gKiBhbnkgb2YgdGhlIGVsZW1lbnRzKS5cbiAqXG4gKiBBIHRyYW5zZHVjZXIgb2JqZWN0IGlzIHJlc3BvbnNpYmxlIGZvciB0d28gdGhpbmdzOiBtYW5pcHVsYXRpbmcgZGF0YSwgYW5kXG4gKiB0aGVuIHBhc3NpbmcgdGhhdCBkYXRhIGFsb25nIHRvIHRoZSBuZXh0IG9iamVjdCBpbiB0aGUgY2hhaW4uIEZvciB0aGF0XG4gKiByZWFzb24sIHRoZSBgaW5pdGAgYW5kIGBmaW5hbGAgbWV0aG9kcyB0eXBpY2FsbHkgc2ltcGx5IGNhbGwgdGhlIHNhbWUgbWV0aG9kXG4gKiBvbiB0aGUgbmV4dCBvYmplY3QgYW5kIHJldHVybiBpdHMgdmFsdWUgKGkuZS4sIHRoZXkgZG8gbm90aGluZyB0aGVtc2VsdmVzKS5cbiAqIFRoZSBgc3RlcGAgbWV0aG9kIGlzIHdoZXJlIHRoZSB3b3JrIGhhcHBlbnMsIGFuZCB3aGVuIHRoYXQgd29yayBpcyBkb25lLCBpdCdzXG4gKiBzZW50IHRvIHRoZSBuZXh0IG9iamVjdCBieSBjYWxsaW5nICppdHMqIGBzdGVwYCBtZXRob2QuIEEgdHJhbnNkdWNlciBvYmplY3RcbiAqIGNhbm5vdCBtYWtlIGEgY2hhaW4gYnkgaXRzZWxmOyBpdCBhbHdheXMgcmVxdWlyZXMgYSByZWR1Y2VyIG9iamVjdCB0b1xuICogYWN0dWFsbHkgcHV0IHRoZSBtYW5pcHVsYXRlZCBkYXRhIGJhY2sgdG9nZXRoZXIuXG4gKlxuICogVGhlIHJlYXNvbiB0aGF0IGEgdHJhbnNkdWNlciBvYmplY3QgbmVlZHMgdGhlc2UgcHJvdG9jb2wgbWV0aG9kcyBldmVuIGlmIHRoZXlcbiAqIG9ubHkgY2FsbCB0aGUgbmV4dCBvbmUgaXMgYmVjYXVzZSBhIHRyYW5zZHVjZXIgb2JqZWN0IHNob3VsZCBub3QgbmVlZCB0byBrbm93XG4gKiB3aGV0aGVyIHRoZSBuZXh0IG9iamVjdCBpbiB0aGUgY2hhaW4gaXMgYSB0cmFuc2R1Y2VyIG9iamVjdCBvciBhIHJlZHVjZXJcbiAqIG9iamVjdC4gQWxsIGl0IG5lZWRzIHRvIGtub3cgaXMgdGhhdCB0aGVyZSB3aWxsIGJlIGFuIG9iamVjdCB3aXRoIHRoZSB0aHJlZVxuICogcmVkdWN0aW9uIHByb3RvY29sIG1ldGhvZHMgdGhhdCBpdCBjYW4gY2FsbC4gKFRoZXJlIGFyZSBhbHNvIGVkZ2UgY2FzZXMgd2hlcmVcbiAqIGEgdHJhbnNkdWNlciBvYmplY3QgbWF5IGRvIG1vcmUgd2l0aCBhbiBgaW5pdGAgb3IgYGZpbmFsYCBtZXRob2QsIGJ1dCB0aG9zZVxuICogYXJlIGZhaXJseSByYXJlLilcbiAqXG4gKiBIZXJlIGlzIGFuIGV4YW1wbGUgb2YgdHJhbnNkdWNlciBkZWZpbml0aW9ucywgdXNpbmcgdGhlIHNhbWUgdHdvIHRyYW5zZHVjZXJcbiAqIG9iamVjdHMgYXMgaW4gdGhlIGFib3ZlIGRpYWdyYW0uIEl0IGRlZmluZXMgdHdvICp0cmFuc2R1Y2VyIGZ1bmN0aW9ucyosIHdoaWNoXG4gKiBhcmUgZnVuY3Rpb25zIHRoYXQgdGFrZSBhIHRyYW5zZHVjZXIgb3IgcmVkdWNlciBvYmplY3QgKHdoaWNoIGlzIHRoZSBuZXh0XG4gKiBvYmplY3QgaW4gdGhlIGNoYWluKSBhbmQgcmV0dXJuIGl0cyBvd24gdHJhbnNkdWNlciBvYmplY3QgYWxyZWFkeSBjaGFpbmVkIHRvXG4gKiB0aGF0IG5leHQgb2JqZWN0LlxuICpcbiAqIGBgYFxuICogaW1wb3J0IHsgcHJvdG9jb2xzIGFzIHAgfSBmcm9tIFwiQGNoYW5rby94ZGNvcmVcIjtcbiAqXG4gKiBmdW5jdGlvbiBtYXBUcmFuc2R1Y2VyKGZuLCBuZXh0KSB7XG4gKiAgIHJldHVybiB7XG4gKiAgICAgW3AuaW5pdF06ICgpID0+IG5leHRbcC5pbml0XSgpLFxuICogICAgIFtwLnN0ZXBdOiAoYWNjLCB2YWx1ZSkgPT4gbmV4dFtwLnN0ZXBdKGFjYywgZm4odmFsdWUpKSxcbiAqICAgICBbcC5maW5hbF06IHZhbHVlID0+IG5leHRbcC5maW5hbF0odmFsdWUpLFxuICogICB9O1xuICogfVxuICpcbiAqIGZ1bmN0aW9uIGZpbHRlclRyYW5zZHVjZXIoZm4sIG5leHQpIHtcbiAqICAgcmV0dXJuIHtcbiAqICAgICBbcC5pbml0XTogKCkgPT4gbmV4dFtwLmluaXRdKCksXG4gKiAgICAgW3Auc3RlcF06IChhY2MsIHZhbHVlKSA9PiBmbih2YWx1ZSkgPyBuZXh0W3Auc3RlcF0oYWNjLCB2YWx1ZSkgOiBhY2MsXG4gKiAgICAgW3AuZmluYWxdOiB2YWx1ZSA9PiBuZXh0W3AuZmluYWxdKHZhbHVlKSxcbiAqICAgfTtcbiAqIH1cbiAqIGBgYFxuICpcbiAqIEFzIGV4cGVjdGVkLCB0aGUgYGluaXRgIGFuZCBgZmluYWxgIG1ldGhvZHMgaW4gYm90aCB0cmFuc2R1Y2VyIG9iamVjdHMgc2ltcGx5XG4gKiBjYWxsIHRoZSBzYW1lIGZ1bmN0aW9ucyBpbiB0aGUgbmV4dCBvYmplY3QsIHdoaWxlIHRoZSBgc3RlcGAgZnVuY3Rpb24gZG9lc1xuICogdGhlIGFjdHVhbCB3b3JrLCBlaXRoZXIgcGFzc2luZyBlYWNoIHZhbHVlIHRocm91Z2ggdGhlIG1hcHBpbmcgZnVuY3Rpb24gaW5cbiAqIGBtYXBUcmFuc2R1Y2VyYCBvciBkZWNpZGluZyB3aGV0aGVyIHRvIGFkZCBpdCB0byB0aGUgY29sbGVjdGlvbiBhdCBhbGwgaW5cbiAqIGBmaWx0ZXJUcmFuc2R1Y2VyYC5cbiAqXG4gKiBTaW5jZSBpdCAqaXMqIHNvIGNvbW1vbiB0byBjcmVhdGUgdHJhbnNkdWNlciBvYmplY3RzIHdob3NlIGBpbml0YCBhbmQgYGZpbmFsYFxuICogbWV0aG9kcyBzaW1wbHkgY2hhaW4gdG8gdGhlIG5leHQgb2JqZWN0LCB0aGVyZSBpcyBhIGhlbHBlciBmdW5jdGlvbiB0byBtYWtlXG4gKiB0cmFuc2R1Y2VyIG9iamVjdCBjcmVhdGlvbiBlYXNpZXIuIFRoZSBzYW1lIHR3byB0cmFuc2R1Y2VyIGZ1bmN0aW9ucyBmcm9tXG4gKiBhYm92ZSBjYW4gYmUgd3JpdHRlbiBsaWtlIHRoaXMuXG4gKlxuICogYGBgXG4gKiBpbXBvcnQgeyBwcm90b2NvbHMgYXMgcCwgdG9UcmFuc2R1Y2VyIH0gZnJvbSBcIkBjaGFua28veGRjb3JlXCI7XG4gKlxuICogZnVuY3Rpb24gbWFwVHJhbnNkdWNlcihmbiwgbmV4dCkge1xuICogICBjb25zdCBzdGVwID0gKGFjYywgdmFsdWUpID0+IG5leHRbcC5zdGVwXShhY2MsIGZuKHZhbHVlKSk7XG4gKiAgIHJldHVybiB0b1RyYW5zZHVjZXIoc3RlcCwgbmV4dCk7XG4gKiB9XG4gKlxuICogZnVuY3Rpb24gZmlsdGVyVHJhbnNkdWNlcihmbiwgbmV4dCkge1xuICogICBjb25zdCBzdGVwID0gKGFjYywgdmFsdWUpID0+IGZuKHZhbHVlKSA/IG5leHRbcC5zdGVwXShhY2MsIHZhbHVlKSA6IGFjYztcbiAqICAgcmV0dXJuIHRvVHJhbnNkdWNlcihzdGVwLCBuZXh0KTtcbiAqIH1cbiAqIGBgYFxuICpcbiAqIGB7QGxpbmsgbW9kdWxlOnhkY29yZS50b1RyYW5zZHVjZXJ8dG9UcmFuc2R1Y2VyfWAgdGFrZXMgYSBzdGVwIGZ1bmN0aW9uIGFuZFxuICogdGhlIG5leHQgb2JqZWN0IGFuZCB0YWtlcyBjYXJlIG9mIHRoZSBgaW5pdGAgYW5kIGBmaW5hbGAgbWV0aG9kcyBmb3IgeW91LlxuICpcbiAqIElmIHlvdSBwbGFuIHRvIHdyaXRlIHlvdXIgdHJhbnNkdWNlcnMgdG8gd29yayB3aXRoIGhpZ2gtbGV2ZWxcbiAqIHtAbGluayBtb2R1bGU6eGR1Y2V8eGR1Y2V9IGZ1bmN0aW9ucyBsaWtlXG4gKiBge0BsaW5rIG1vZHVsZTp4ZHVjZS5zZXF1ZW5jZXxzZXF1ZW5jZX1gIG9yXG4gKiBge0BsaW5rIG1vZHVsZTp4ZHVjZS50cmFuc2R1Y2V8dHJhbnNkdWNlfWAsIHRoZW4gdGhpcyBpcyBlbm91Z2guIFlvdSBkb24ndFxuICogbmVlZCB0byBnbyBhbnkgZnVydGhlci4gSG93ZXZlciwgdGhpcyBpcyBub3QgZW5vdWdoIGZvciB0aGVcbiAqIGB7QGxpbmsgbW9kdWxlOnhkY29yZS5yZWR1Y2V8cmVkdWNlfWAgZnVuY3Rpb24sIHdoaWNoIGV4cGVjdHMgYSAqcmVkdWNlcipcbiAqIG9iamVjdCwgbm90IGEgdHJhbnNkdWNlciBvYmplY3QuIChge0BsaW5rIG1vZHVsZTp4ZHVjZS50cmFuc2R1Y2V8dHJhbnNkdWNlfWBcbiAqIGFsc28gZXhwZWN0cyBhIHJlZHVjZXIgb2JqZWN0LCBidXQgdGhhdCdzICppbiBhZGRpdGlvbiB0byogYSB0cmFuc2R1Y2VyXG4gKiBvYmplY3QgYW5kIG5vdCBpbiBwbGFjZSBvZiBvbmUuKSBge0BsaW5rIG1vZHVsZTp4ZGNvcmUucmVkdWNlfHJlZHVjZX1gXG4gKiBkb2Vzbid0IGNhcmUgaWYgdGhhdCByZWR1Y2VyIG9iamVjdCBoYXMgb3RoZXIgdHJhbnNkdWNlciBvYmplY3RzIGNoYWluZWQgdG9cbiAqIGl0OyBpdCBvbmx5IGNhcmVzIHRoYXQgdGhlIHdob2xlIG9iamVjdCBhY3RzIGxpa2UgYSByZWR1Y2VyLCB3aGljaCBpdCB3aWxsXG4gKiB1c2UgdG8gYnVpbGQgYSBuZXcgY29sbGVjdGlvbi5cbiAqXG4gKiBUaGVyZSBpcyBhIHNpbWlsYXIgZnVuY3Rpb24gZm9yIHJlZHVjZXIgb2JqZWN0cywgY2FsbGVkXG4gKiBge0BsaW5rIG1vZHVsZTp4ZGNvcmUudG9SZWR1Y2VyfHRvUmVkdWNlcn1gLiBJdCB0YWtlcyBhICpyZWR1Y2libGUgb2JqZWN0KlxuICogYW5kIHJldHVybnMgYSByZWR1Y2VyIG9iamVjdCBmb3IgaXQuIEEgcmVkdWNpYmxlIG9iamVjdCBpcyBhbnkgb2JqZWN0IHRoYXRcbiAqIGhhcyB0aGUgdGhyZWUgcmVkdWNlciBwcm90b2NvbCBmdW5jdGlvbnMgb24gaXQgdG8gZGVzY3JpYmUgaG93IGEgbmV3XG4gKiBjb2xsZWN0aW9uIG9mIGl0cyB0eXBlIGlzIG1hZGU7IGluIHRoZSBpbW11dGFibGUgbGlzdCBleGFtcGxlIGFib3ZlLCBhZnRlclxuICogeW91IGFkZCB0aGUgcHJvdG9jb2wgbWV0aG9kcyB0byBpdCwgYExpc3RgIGlzIGEgcmVkdWNpYmxlIG9iamVjdC4gQXJyYXlzLFxuICogc3RyaW5ncywgZnVuY3Rpb25zLCBhbmQgcGxhaW4gb2JqZWN0cyBhcmUgYWxzbyByZWR1Y2libGUgb2JqZWN0cyBieSB2aXJ0dWUgb2ZcbiAqIHNwZWNpZmljIHN1cHBvcnQgYnVpbHQgaW50byBge0BsaW5rIG1vZHVsZTp4ZGNvcmUudG9SZWR1Y2VyfHRvUmVkdWNlcn1gLlxuICpcbiAqIFdpdGggdGhlc2UgdHdvIHNpbXBsZSBmdW5jdGlvbnMsIHdlIGNhbiBwcmV0dHkgZWFzaWx5IHVzZVxuICogYHtAbGluayBtb2R1bGU6eGRjb3JlLnJlZHVjZXxyZWR1Y2V9YCBkaXJlY3RseSB0byBwZXJmb3JtIHRoZSB0cmFuc2R1Y3Rpb25cbiAqIGRpYWdyYW1tZWQgYWJvdmUuXG4gKlxuICogYGBgXG4gKiBpbXBvcnQgeyB0b1JlZHVjZXIsIHJlZHVjZSB9IGZyb20gXCJAY2hhbmtvL3hkY29yZVwiO1xuICpcbiAqIGNvbnN0IGlzRXZlbiA9IHggPT4geCAlIDIgPT09IDA7XG4gKiBjb25zdCBhZGRPbmUgPSB4ID0+IHggKyAxO1xuICpcbiAqIGxldCByZWR1Y2VyID0gdG9SZWR1Y2VyKFtdKTtcbiAqIHJlZHVjZXIgPSBmaWx0ZXJUcmFuc2R1Y2VyKGlzRXZlbiwgcmVkdWNlcik7XG4gKiByZWR1Y2VyID0gbWFwVHJhbnNkdWNlcihhZGRPbmUsIHJlZHVjZXIpO1xuICpcbiAqIGNvbnN0IHIgPSByZWR1Y2UoWzEsIDIsIDMsIDQsIDVdLCByZWR1Y2VyLCBbXSk7XG4gKiBjb25zb2xlLmxvZyhyKTsgICAvLyAtPiBbMiwgNCwgNl1cbiAqIGBgYFxuICpcbiAqIFRoZXJlIGFyZSBzb21lIGltcG9ydGFudCBwb2ludHMgdG8gbm90aWNlIGFib3V0IHRoaXMgZXhhbXBsZS5cbiAqXG4gKiAxLiBUaGUgdHJhbnNkdWNlciBjaGFpbiBpcyBidWlsdCBiYWNrd2FyZHMsIHN0YXJ0aW5nIGZyb20gdGhlIHJlZHVjZXIgYW5kXG4gKiAgICBhZGRpbmcgdGhlIHRyYW5zZHVjZXJzIGluIHJldmVyc2Ugb3JkZXIuIFRoaXMgbWFrZXMgc2Vuc2UsIGFzIGVhY2hcbiAqICAgIHRyYW5zZHVjZXIgZnVuY3Rpb24gcmVxdWlyZXMgYSByZWZlcmVuY2UgdG8gdGhlIGZvbGxvd2luZ1xuICogICAgdHJhbnNkdWNlci9yZWR1Y2VyIG9iamVjdCB3aGVuIGl0J3MgY2FsbGVkLlxuICogMi4gVGhpcyBjcmVhdGVzIGFuIGFycmF5LCBidXQgc2luY2VcbiAqICAgIGB7QGxpbmsgbW9kdWxlOnhkY29yZS50b1JlZHVjZXJ8dG9SZWR1Y2VyfWAgY2FuIGNyZWF0ZSBhIHJlZHVjZXIgb2JqZWN0XG4gKiAgICBmcm9tIGFueSByZWR1Y2libGUgb2JqZWN0LCB3ZSBjb3VsZCBoYXZlIHBhc3NlZCBgTGlzdGAgdG8gaXQgKGFmdGVyIGFkZGluZ1xuICogICAgdGhlIHRocmVlIHByb3RvY29sIHByb3BlcnRpZXMgYXMgaW4gdGhlIGVhcmxpZXIgaW1tdXRhYmxlIGxpc3QgZXhhbXBsZSlcbiAqICAgIGFuZCBge0BsaW5rIG1vZHVsZTp4ZGNvcmUucmVkdWNlfHJlZHVjZX1gIHdvdWxkIHJldHVybiBhbiBpbW11dGFibGUgbGlzdFxuICogICAgaW5zdGVhZC4gKFNvcnQgb2YuLi5ge0BsaW5rIG1vZHVsZTp4ZGNvcmUucmVkdWNlfHJlZHVjZX1gIGFjdHVhbGx5IG9ubHlcbiAqICAgIGRlYWxzIHdpdGggYHN0ZXBgIGFuZCBgZmluYWxgIHByb3RvY29sIG1ldGhvZHMgYmVjYXVzZSBpbnRlcm5hbGx5LCBpdFxuICogICAgc29tZXRpbWVzIHdvcmtzIHdpdGggcmVkdWNlciBvYmplY3RzIHRoYXQgZG9uJ3QgaGF2ZSBhbiBgaW5pdGAgcHJvdG9jb2xcbiAqICAgIG1ldGhvZCwgbGlrZSBvbmVzIGNyZWF0ZWQgZnJvbSBmdW5jdGlvbnMuIFRoaXMgaXMgd2h5XG4gKiAgICBge0BsaW5rIG1vZHVsZTp4ZGNvcmUucmVkdWNlfHJlZHVjZX1gIHRha2VzIGEgdGhpcmQgcGFyYW1ldGVyLCBjYWxsZWRcbiAqICAgIGBpbml0YC4gU28gZm9yIHRoaXMgdG8gd29yayBwcm9wZXJseSB3aXRoIGFuIGltbXV0YWJsZSBsaXN0LCB5b3Ugd291bGRcbiAqICAgIGFsc28gaGF2ZSB0byBwYXNzIGBMaXN0KCkuYXNNdXRhYmxlKClgIGFzIHRoZSB0aGlyZCBwYXJhbWV0ZXIsIGluIHBsYWNlIG9mXG4gKiAgICBgW11gIGluIHRoZSBleGFtcGxlIGNvZGUuIFRoaXMgaXMgbm90IHNvbWV0aGluZyB5b3UgaGF2ZSB0byB3b3JyeSBhYm91dFxuICogICAgd2l0aCBoaWdoZXItbGV2ZWwgZnVuY3Rpb25zIGluIHRoZSB7QGxpbmsgbW9kdWxlOnhkdWNlfHhkdWNlfSBtb2R1bGUuKVxuICogMy4gVGhpcyBpcyBhbGwgbW9yZSBlYXNpbHkgZG9uZSB1c2luZyB0aGUge0BsaW5rIG1vZHVsZTp4ZHVjZXx4ZHVjZX0gbW9kdWxlLFxuICogICAgd2hpY2ggaGFuZGxlcyBtdWNoIG9mIHRoaXMgd29yayBmb3IgeW91LiBUaGlzIGV4YW1wbGUganVzdCBzaG93cyBob3cgeW91XG4gKiAgICBjYW4gYnVpbGQgeW91ciBvd24gdHJhbnNkdWNlciBvYmplY3RzLCBjaGFpbiB0aGVtIHRvZ2V0aGVyLCBhbmQgdXNlXG4gKiAgICBge0BsaW5rIG1vZHVsZTp4ZGNvcmUucmVkdWNlfHJlZHVjZX1gIHRvIHByb2Nlc3MgdGhlbS5cbiAqXG4gKiBIZXJlIGlzIHdoYXQgaXQgd291bGQgbG9vayBsaWtlIHdpdGggdGhlIHtAbGluayBtb2R1bGU6eGR1Y2V8eGR1Y2V9IG1vZHVsZS5cbiAqXG4gKiBgYGBcbiAqIGltcG9ydCB7IG1hcCwgZmlsdGVyLCBzZXF1ZW5jZSwgY29tcG9zZSB9IGZyb20gXCJAY2hhbmtvL3hkdWNlXCI7XG4gKlxuICogY29uc3QgaXNFdmVuID0geCA9PiB4ICUgMiA9PT0gMDtcbiAqIGNvbnN0IGFkZE9uZSA9IHggPT4geCArIDE7XG4gKlxuICogY29uc3QgciA9IHNlcXVlbmNlKFsxLCAyLCAzLCA0LCA1XSwgY29tcG9zZShtYXAoYWRkT25lKSwgZmlsdGVyKGlzRXZlbikpKTtcbiAqIGNvbnNvbGUubG9nKHIpOyAgIC8vIC0+IFsyLCA0LCA2XVxuICogYGBgXG4gKlxuICogTW9yZSBkZXRhaWxzIGFyZSBhdmFpbGFibGUgaW4gdGhlIGRvY3VtZW50YXRpb24gZm9yIHRoZVxuICoge0BsaW5rIG1vZHVsZTp4ZHVjZXx4ZHVjZX0gbW9kdWxlLCBidXQgYmFzaWNhbGx5XG4gKiBge0BsaW5rIG1vZHVsZTp4ZHVjZS5jb21wb3NlfGNvbXBvc2V9YCBjaGFpbnMgdHJhbnNkdWNlciBvYmplY3RzIHRvZ2V0aGVyLFxuICogd2hpbGUgYHtAbGluayBtb2R1bGU6eGR1Y2Uuc2VxdWVuY2V8c2VxdWVuY2V9YCBmaWd1cmVzIG91dCB3aGF0IGluaXRpYWxcbiAqIGNvbGxlY3Rpb24gYW5kIHdoYXQgcmVkdWNlciBvYmplY3QgdG8gdXNlIChmcm9tIHRoZSBpbnB1dCBjb2xsZWN0aW9uKSwgY2hhaW5zXG4gKiB0aGUgdHJhbnNkdWNlciBvYmplY3RzIHRvIHRoZSByZWR1Y2VyIG9iamVjdCwgYW5kIHBhc3NlcyBhbGwgb2YgdGhlIHJlbGV2YW50XG4gKiBpbmZvcm1hdGlvbiB0byBge0BsaW5rIG1vZHVsZTp4ZGNvcmUucmVkdWNlfHJlZHVjZX1gLlxuICpcbiAqIGB7QGxpbmsgbW9kdWxlOnhkY29yZS5yZWR1Y2V8cmVkdWNlfWAgd29ya3MgaW4gYSBzaW1wbGUgd2F5LCBidXQgdGhlcmUgaXMgb25lXG4gKiBiaXQgb2Ygc3BlY2lhbCBmdW5jdGlvbmFsaXR5IHRoYXQncyByZWxldmFudCB0byB3cml0aW5nIHRyYW5zZHVjZXJzLiBJZiBpdFxuICogcHJvY2Vzc2VzIGFuIGVsZW1lbnQgYW5kIHRoZSB2YWx1ZSByZXR1cm5lZCBieSB0aGUgcmVkdWNlci90cmFuc2R1Y2VyIGNoYWluXG4gKiBpcyBhICpjb21wbGV0ZWQgdmFsdWUqLCBpdCB3aWxsIGNlYXNlIHRoZSByZWR1Y3Rpb24gcmlnaHQgdGhlcmUgZXZlbiBpZiB0aGVyZVxuICogYXJlIG1vcmUgZWxlbWVudHMgaW4gdGhlIGlucHV0IGNvbGxlY3Rpb24uIEEgY29tcGxldGVkIHZhbHVlIGlzIGEgdmFsdWUgdGhhdFxuICogaXMgd3JhcHBlZCBpbiBhbiBvYmplY3QgdXNpbmcgdGhlIG90aGVyIHR3byByZWR1Y2VyIHByb3RvY29sIHByb3BlcnRpZXMsXG4gKiBgY29tcGxldGVkYCBhbmQgYHZhbHVlYDpcbiAqXG4gKiBgYGBcbiAqIGltcG9ydCB7IHByb3RvY29scyBhcyBwIH0gZnJvbSBcIkBjaGFua28veGRjb3JlXCI7XG4gKlxuICogLy8gQSByZWd1bGFyIHZhbHVlXG4gKiBjb25zdCB2YWx1ZSA9IDE3Mjk7XG4gKlxuICogLy8gQSBjb21wbGV0ZWQgdmVyc2lvbiBvZiB0aGF0IHNhbWUgdmFsdWVcbiAqIGNvbnN0IGNvbXBsZXRlZCA9IHtcbiAqICAgW3AuY29tcGxldGVkXTogdHJ1ZSxcbiAqICAgW3AudmFsdWVdOiAxNzI5LFxuICogfTtcbiAqIGBgYFxuICpcbiAqIFRoZSByZWFzb24gZm9yIHRoZSBsb25nLXdpbmRlZG5lc3Mgb2YgdXNpbmcgYSB3cmFwcGVyIGlzIHNvIHRoYXQgYSBjb21wbGV0ZWRcbiAqIHZhbHVlIGNhbiBiZSBjb21wbGV0ZWQgYWdhaW4sIG1ha2luZyBpdCBkb3VibGUtd3JhcHBlZC4gVGhpcyBpcyBvY2Nhc2lvbmFsbHlcbiAqIHVzZWZ1bCBpbiB3cml0aW5nIG1vcmUgY29tcGxleCB0cmFuc2R1Y2VycywgYW5kIGl0IGlzIHNpbXBsZXN0IHRvIGFjaGlldmVcbiAqIHdpdGggYSB3cmFwcGVyLlxuICpcbiAqIEEgZ29vZCBleGFtcGxlIG9mIHRoZSB1c2Ugb2YgYSBjb21wbGV0ZWQgdmFsdWUgaXMgdGhlXG4gKiBge0BsaW5rIG1vZHVsZTp4ZHVjZS50YWtlfHRha2V9YCB0cmFuc2R1Y2VyLCB3aGljaCByZXR1cm5zIGEgY2VydGFpbiBudW1iZXJcbiAqIG9mIGVsZW1lbnRzIGFuZCB0aGVuIHJldHVybnMgbm8gbW9yZS4gSGVyZSdzIGhvdyBpdCB3b3VsZCBsb29rIHVzaW5nXG4gKiB7QGxpbmsgbW9kdWxlOnhkdWNlfHhkdWNlfTpcbiAqXG4gKiBgYGBcbiAqIGltcG9ydCB7IHRha2UgfSBmcm9tIFwiQGNoYW5rby94ZHVjZVwiO1xuICogY29uc3QgciA9IHRha2UoWzEsIDIsIDMsIDQsIDVdLCAyKTtcbiAqIGNvbnNvbGUubG9nKHIpOyAgIC8vIC0+IFsxLCAyXVxuICogYGBgXG4gKlxuICogTm8gbWF0dGVyIGhvdyBtYW55IGVsZW1lbnRzIGFyZSBpbiB0aGUgaW5wdXQgY29sbGVjdGlvbixcbiAqIGB7QGxpbmsgbW9kdWxlOnhkdWNlLnRha2V8dGFrZX1gIHdpbGwgb25seSBwcm9jZXNzIGEgY2VydGFpbiBudW1iZXIgKGluIHRoaXNcbiAqIGNhc2UsIDIpLiBUaGUgaW5wdXQgY29sbGVjdGlvbiBjb3VsZCBldmVuIGJlIGEgZ2VuZXJhdG9yIHRoYXQgbmV2ZXJcbiAqIHRlcm1pbmF0ZXMsIGFuZCBpdCB3b3VsZCBzdGlsbCB3b3JrIGZpbmUuIGB7QGxpbmsgbW9kdWxlOnhkdWNlLnRha2V8dGFrZX1gXG4gKiBkb2VzIHRoaXMgYnksIGF0IHNvbWUgcG9pbnQsIHJldHVybmluZyBhIGNvbXBsZXRlZCwgd2hpY2ggaW4gdHVybiBjYXVzZXNcbiAqIGB7QGxpbmsgbW9kdWxlOnhkY29yZS5yZWR1Y2V8cmVkdWNlfWAgdG8gc3RvcCBwcm9jZXNzaW5nLlxuICpcbiAqIGBgYFxuICogaW1wb3J0IHsgcHJvdG9jb2xzIGFzIHAsIHRvVHJhbnNkdWNlciB9IGZyb20gXCJAY2hhbmtvL3hkY29yZVwiO1xuICpcbiAqIGZ1bmN0aW9uIHRha2VUcmFuc2R1Y2VyKG4sIG5leHQpIHtcbiAqICAgbGV0IGkgPSAwO1xuICogICBjb25zdCBzdGVwID0gKGFjYywgdmFsdWUpID0+IHtcbiAqICAgICBsZXQgcmVzdWx0ID0gbmV4dFtwLnN0ZXBdKGFjYywgdmFsdWUpO1xuICogICAgIGlmIChpID09PSBuIC0gMSkge1xuICogICAgICAgcmVzdWx0ID0ge1xuICogICAgICAgICBbcC5jb21wbGV0ZWRdOiB0cnVlLFxuICogICAgICAgICBbcC52YWx1ZV06IHJlc3VsdCxcbiAqICAgICAgIH07XG4gKiAgICAgfVxuICogICAgIGkrKztcbiAqICAgICByZXR1cm4gcmVzdWx0O1xuICogICB9O1xuICogICByZXR1cm4gdG9UcmFuc2R1Y2VyKHN0ZXAsIG5leHQpO1xuICogfVxuICogYGBgXG4gKlxuICogVGhpcyBpcyBhIGJpdCBtb3JlIGNvbXBsZXgsIGJ1dCB0aGUgZ2lzdCBvZiBpdCBpcyB0aGF0IHRoZSB0cmFuc2R1Y2VyIG9iamVjdFxuICogc2ltcGx5IHBhc3NlcyB0aGUgdmFsdWUgb24gZG93biB0aGUgY2hhaW4uIEhvd2V2ZXIsIGlmIHRoZSBlbGVtZW50IGJlaW5nXG4gKiBwcm9jZXNzZWQgaXMgdGhlIGxhc3Qgb25lIGJlZm9yZSBpdCByZWFjaGVzIHRoZSB0YXJnZXQgbnVtYmVyIG9mIGVsZW1lbnRzLFxuICogdGhlIHZhbHVlIHJldHVybmVkIGZyb20gdGhlIGNoYWluIGlzIHdyYXBwZWQgYXMgYSBjb21wbGV0ZWQgb2JqZWN0LlxuICogYHtAbGluayBtb2R1bGU6eGRjb3JlLnJlZHVjZXxyZWR1Y2V9YCB3aWxsIHNlZSB0aGlzIHZhbHVlIGFuZCBzdG9wIHRoZVxuICogcHJvY2VzcyBhcyBzb29uIGFzIGl0IGRvZXMuXG4gKlxuICogQXMgeW91IG1pZ2h0IGV4cGVjdCwgdGhlcmUgYXJlIGhlbHBlciBmdW5jdGlvbnMgZm9yIHdyaXRpbmcgdHJhbnNkdWNlcnMgbGlrZVxuICogdGhpczpcbiAqXG4gKiAqIGB7QGxpbmsgbW9kdWxlOnhkY29yZS5jb21wbGV0ZXxjb21wbGV0ZX1gXG4gKiAqIGB7QGxpbmsgbW9kdWxlOnhkY29yZS51bmNvbXBsZXRlfHVuY29tcGxldGV9YFxuICogKiBge0BsaW5rIG1vZHVsZTp4ZGNvcmUuZW5zdXJlQ29tcGxldGVkfGVuc3VyZUNvbXBsZXRlZH1gXG4gKiAqIGB7QGxpbmsgbW9kdWxlOnhkY29yZS5lbnN1cmVVbmNvbXBsZXRlZHxlbnN1cmVVbmNvbXBsZXRlZH1gXG4gKiAqIGB7QGxpbmsgbW9kdWxlOnhkY29yZS5pc0NvbXBsZXRlZHxpc0NvbXBsZXRlZH1gXG4gKlxuICogVGhlIGZpcnN0IHR3byBlaXRoZXIgd3JhcCBvciB1bndyYXAgYSB2YWx1ZSBpbiB0aGUgY29tcGxldGVkIHdyYXBwZXIuIFRoZVxuICogdGhpcmQgYW5kIGZvdXJ0aCBkbyB0aGUgc2FtZSB0aGluZywgYnV0IHRoZXkgb25seSBkbyBpdCBpZiBpdCdzIGFjdHVhbGx5XG4gKiBuZWNlc3NhcnkgdG8gZG8gc28gKGB7QGxpbmsgbW9kdWxlOnhkY29yZS5jb21wbGV0ZXxjb21wbGV0ZX1gIHdpbGxcbiAqIGRvdWJsZS13cmFwIGEgdmFsdWUgaWYgcGFzc2VkIGFuIGFscmVhZHktY29tcGxldGVkIHZhbHVlO1xuICogYHtAbGluayBtb2R1bGU6eGRjb3JlLmVuc3VyZUNvbXBsZXRlZHxlbnN1cmVDb21wbGV0ZWR9YCB3aWxsIG5vdCBkbyB0aGlzXG4gKiBkb3VibGUgd3JhcHBpbmcpLiBUaGUgZmluYWwgZnVuY3Rpb24gc2ltcGx5IHJldHVybnMgd2hldGhlciBvciBub3QgdGhlIHZhbHVlXG4gKiBwYXNzZWQgdG8gaXQgaXMgYSBjb21wbGV0ZWQgb2JqZWN0LlxuICpcbiAqIFRoZXNlIGZ1bmN0aW9ucyBtZWFuIHRoYXQgeW91IHNob3VsZCBuZXZlciBoYXZlIHRvIHdvcmsgZGlyZWN0bHkgd2l0aCBlaXRoZXJcbiAqIHRoZSBgY29tcGxldGVkYCBvciBgdmFsdWVgIHJlZHVjZXIgcHJvdG9jb2wgcHJvcGVydGllcy5cbiAqXG4gKiBXaXRoIHRob3NlIGluIG1pbmQsIHRoZSBhY3R1YWwgc3RlcCBmdW5jdGlvbiBmb3IgdGhlIHRha2UgdHJhbnNkdWNlciBpcyBhXG4gKiBsaXR0bGUgc2ltcGxlci5cbiAqXG4gKiBgYGBcbiAqIGNvbnN0IHN0ZXAgPSAoYWNjLCB2YWx1ZSkgPT4ge1xuICogICBsZXQgcmVzdWx0ID0gbmV4dFtwLnN0ZXBdKGFjYywgdmFsdWUpO1xuICogICBpZiAoaSA9PT0gbiAtIDEpIHtcbiAqICAgICByZXN1bHQgPSBjb21wbGV0ZShyZXN1bHQpO1xuICogICB9XG4gKiAgIGkrKztcbiAqICAgcmV0dXJuIHJlc3VsdDtcbiAqIH07XG4gKiBgYGBcbiAqXG4gKiBBZnRlciBhbGwgdGhhdCwgb25lIGZpbmFsIGJpdCBvZiBwcm92aWRlZCBmdW5jdGlvbmFsaXR5OiB0aGVyZSBhcmUgYSBzZXJpZXNcbiAqIG9mIGhlbHBlciBmdW5jdGlvbnMgdG8gZGV0ZXJtaW5lIHRoZSB0eXBlIG9mIGEgdmFsdWUuXG4gKlxuICogKiBge0BsaW5rIG1vZHVsZTp4ZGNvcmUuaXNBcnJheXxpc0FycmF5fWBcbiAqICogYHtAbGluayBtb2R1bGU6eGRjb3JlLmlzRnVuY3Rpb258aXNGdW5jdGlvbn1gXG4gKiAqIGB7QGxpbmsgbW9kdWxlOnhkY29yZS5pc0dlbmVyYXRvckZ1bmN0aW9ufGlzR2VuZXJhdG9yRnVuY3Rpb259YFxuICogKiBge0BsaW5rIG1vZHVsZTp4ZGNvcmUuaXNOdW1iZXJ8aXNOdW1iZXJ9YFxuICogKiBge0BsaW5rIG1vZHVsZTp4ZGNvcmUuaXNPYmplY3R8aXNPYmplY3R9YFxuICogKiBge0BsaW5rIG1vZHVsZTp4ZGNvcmUuaXNTdHJpbmd8aXNTdHJpbmd9YFxuICpcbiAqIFRoZXNlIGFsbCB3b3JrIGFzIHlvdSBtaWdodCBleHBlY3QsIHdpdGggYSBmZXcgY2F2ZWF0cy5cbiAqXG4gKiAxLiBge0BsaW5rIG1vZHVsZTp4ZGNvcmUuaXNGdW5jdGlvbnxpc0Z1bmN0aW9ufWAgd2lsbCByZXR1cm4gYGZhbHNlYCBpZlxuICogICAgcGFzc2VkIGEgZ2VuZXJhdG9yIGZ1bmN0aW9uLiBVc2VcbiAqICAgIGB7QGxpbmsgbW9kdWxlOnhkY29yZS5pc0dlbmVyYXRvckZ1bmN0aW9ufGlzR2VuZXJhdG9yRnVuY3Rpb259YCB0byBjaGVja1xuICogICAgZm9yIHRob3NlLlxuICogMi4gYHtAbGluayBtb2R1bGU6eGRjb3JlLmlzTnVtYmVyfGlzTnVtYmVyfWAgaXMgb25seSBmb3IgY29uY3JldGUgbnVtYmVyc1xuICogICAgdGhhdCBhcmUgbm90IHN0cmluZ3MuIEl0IHdpbGwgcmV0dXJuIGBmYWxzZWAgZm9yIGBJbmZpbml0eWAsIGBOYU5gLCBhbmRcbiAqICAgIHRoaW5ncyBsaWtlIGBcIjE3MjlcImAuXG4gKiAzLiBge0BsaW5rIG1vZHVsZTp4ZGNvcmUuaXNPYmplY3R8aXNPYmplY3R9YCByZXR1cm5zIGB0cnVlYCBvbmx5IGZvciBwbGFpblxuICogICAgb2JqZWN0cy4gSXQgd2lsbCByZXR1cm4gYGZhbHNlYCBmb3IgYW55IG90aGVyIHNvcnQgb2Ygb2JqZWN0LCBpbmNsdWRpbmdcbiAqICAgIHRoaW5ncyBsaWtlIGFycmF5cywgb2JqZWN0cyB3aXRoIGNvbnN0cnVjdG9ycyAoZnJvbSBjbGFzc2VzIG9yIGZyb21cbiAqICAgIGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyksIGFuZCBgbnVsbGAgKHdoaWNoIGZhbW91c2x5IHJldHVybnMgYFwib2JqZWN0XCJgIHdoZW5cbiAqICAgIGB0eXBlb2ZgIGlzIHVzZWQgb24gaXQpLlxuICogNC4gYHtAbGluayBtb2R1bGU6eGRjb3JlLmlzQXJyYXl8aXNBcnJheX1gIGlzIGp1c3QgdGhlIHJlZ3VsYXJcbiAqICAgIGBBcnJheS5pc0FycmF5YCwgcGFja2FnZWQgaGVyZSBmb3IgY29uc2lzdGVuY3kuXG4gKlxuICogWzFdOiBodHRwczovL2ltbXV0YWJsZS1qcy5naXRodWIuaW8vaW1tdXRhYmxlLWpzL1xuICpcbiAqIEBtb2R1bGUgeGRjb3JlXG4gKi9cblxuZXhwb3J0IHsgcHJvdG9jb2xzLCBpc0ltcGxlbWVudGVkIH0gZnJvbSBcIm1vZHVsZXMvcHJvdG9jb2xcIjtcbmV4cG9ydCB7IGl0ZXJhdG9yLCBpc0l0ZXJhYmxlIH0gZnJvbSBcIm1vZHVsZXMvaXRlcmF0aW9uXCI7XG5leHBvcnQge1xuICBjb21wbGV0ZSxcbiAgdW5jb21wbGV0ZSxcbiAgaXNDb21wbGV0ZWQsXG4gIGVuc3VyZUNvbXBsZXRlZCxcbiAgZW5zdXJlVW5jb21wbGV0ZWQsXG4gIHJlZHVjZSxcbiAgdG9GdW5jdGlvbixcbiAgdG9SZWR1Y2VyLFxuICB0b1RyYW5zZHVjZXJcbn0gZnJvbSBcIm1vZHVsZXMvcmVkdWN0aW9uXCI7XG5leHBvcnQge1xuICBpc0FycmF5LFxuICBpc0Z1bmN0aW9uLFxuICBpc0dlbmVyYXRvckZ1bmN0aW9uLFxuICBpc051bWJlcixcbiAgaXNPYmplY3QsXG4gIGlzU3RyaW5nXG59IGZyb20gXCJtb2R1bGVzL3V0aWxzXCI7XG5cbi8qKlxuICogQSBzdGFuZGFyZCBKYXZhU2NyaXB0IGl0ZXJhYmxlLiBUaGlzIG9iamVjdCBoYXMgYSBwcm9wZXJ0eSBuYW1lZFxuICogYFtTeW1ib2wuaXRlcmF0b3JdYCB3aGljaCBwcm92aWRlcyBhbiBvYmplY3QgdGhhdCBzYXRpc2ZpZXMgdGhlXG4gKiB7QGxpbmsgZXh0ZXJuYWw6SXRlcmF0b3J8SXRlcmF0b3J9IHByb3RvY29sLlxuICpcbiAqIEBleHRlcm5hbCBJdGVyYWJsZVxuICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9JdGVyYXRpb25fcHJvdG9jb2xzI1RoZV9pdGVyYWJsZV9wcm90b2NvbFxuICovXG5cbi8qKlxuICogQSBzdGFuZGFyZCBKYXZhU2NyaXB0IGl0ZXJhdG9yLiBUaGlzIG9iamVjdCBoYXMgYSBmdW5jdGlvbiBwcm9wZXJ0eSBuYW1lZFxuICogYG5leHRgIHRoYXQsIGVhY2ggdGltZSBpdCdzIGNhbGxlZCwgcmV0dXJucyBhIG5ldyBvYmplY3Qgd2l0aCB0d29cbiAqIHByb3BlcnRpZXM6IGB2YWx1ZWAsIHdoaWNoIGNvbnRhaW5zIHRoZSBpdGVyYXRvcidzIHZhbHVlIGF0IHRoYXQgcG9pbnQsIGFuZFxuICogYGRvbmVgLCB3aGljaCBpcyBgZmFsc2VgIHVudGlsIHRoZSBpdGVyYXRvciBoYXMgaGFkIGFsbCBvZiBpdHMgdmFsdWVzIHJlYWQuXG4gKlxuICogQGV4dGVybmFsIEl0ZXJhdG9yXG4gKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0l0ZXJhdGlvbl9wcm90b2NvbHMjVGhlX2l0ZXJhdG9yX3Byb3RvY29sXG4gKi9cblxuLyoqXG4gKiBBIGZ1bmN0aW9uIHRoYXQgY2FuIGhhdmUgYW4gaXRlcmF0b3IgY3JlYXRlZCBmb3IgaXQuXG4gKlxuICogQGNhbGxiYWNrIEl0ZXJhYmxlRnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGRjb3JlXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IGZvciB0aGUgaXRlcmF0aW9uLiBUaGlzIGlzIGAwYCB0aGUgZmlyc3RcbiAqICAgICB0aW1lIHRoZSBmdW5jdGlvbiBpcyBjYWxsZWQgYW5kIGluY3JlYXNlcyBieSAxIGZvciBlYWNoIGNhbGxcbiAqICAgICB0aGVyZWFmdGVyLlxuICogQHBhcmFtIHsqfSBsYXN0IFRoZSByZXR1cm4gdmFsdWUgb2YgdGhlIGZ1bmN0aW9uIHdoZW4gaXQgd2FzIGNhbGxlZCBvbiB0aGVcbiAqICAgICBwcmV2aW91cyBpdGVyYXRpb24uIElmIHRoaXMgaXMgdGhlIGZpcnN0IGNhbGwgdG8gdGhlIGZ1bmN0aW9uLCB0aGVuXG4gKiAgICAgdGhpcyB2YWx1ZSB3aWxsIGJlIGB1bmRlZmluZWRgLCBtZWFuaW5nIHRoYXQgdGhlIGZ1bmN0aW9uIGNhbiBzZXQgYVxuICogICAgIGRlZmF1bHQgdmFsdWUgZm9yIHRoYXQgZmlyc3QgcGFzcy5cbiAqIEByZXR1cm5zIHsqfSBUaGUgcmV0dXJuIHZhbHVlIG9mIHRoZSBmdW5jdGlvbiwgd2hpY2ggd2lsbCBiZSB0aGUgdmFsdWUgZm9yXG4gKiAgICAgdGhhdCBpdGVyYXRpb24uXG4gKi9cblxuLyoqXG4gKiBBIGZ1bmN0aW9uIHRoYXQsIHdoZW4gY2FsbGVkLCBwcm9kdWNlcyBhIG5ldywgZW1wdHkgY29sbGVjdGlvbiBvZiB3aGF0ZXZlclxuICogdHlwZSBpcyBiZWluZyB3b3JrZWQgd2l0aC5cbiAqXG4gKiBAY2FsbGJhY2sgSW5pdEZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkY29yZVxuICogQHJldHVybnMgeyp9IEEgbmV3LCBlbXB0eSByZXByZXNlbnRhdGl2ZSBvZiB0aGUgY29sbGVjdGlvbi5cbiAqL1xuXG4vKipcbiAqIEEgZnVuY3Rpb24gdGhhdCBhY2NlcHRzIGEgY29sbGVjdGlvbiBhbmQgYSBuZXcgZWxlbWVudCBvZiB0aGF0IGNvbGxlY3Rpb24gYW5kXG4gKiByZXR1cm5zIHRoZSBjb2xsZWN0aW9uIHdpdGggdGhlIG5ldyBlbGVtZW50IGFkZGVkIHRvIGl0LiBUaGlzIGlzIHVzZWQgdG9cbiAqIGJ1aWxkIHVwIGEgbmV3IGNvbGxlY3Rpb24gKHN0YXJ0aW5nIHdpdGggd2hhdGV2ZXJcbiAqIHtAbGluayBtb2R1bGU6eGRjb3JlLkluaXRGdW5jdGlvbnx0aGUgaW5pdCBmdW5jdGlvbn0gcmV0dXJucykgcGllY2UgYnkgcGllY2VcbiAqIGZyb20gaXRzIGVsZW1lbnRzLlxuICpcbiAqIFRoaXMgaXMgaW4gZXZlcnkgd2F5IGEgcmVkdWNlciBmdW5jdGlvbi4gVGhlIG5hbWUgJ3N0ZXAnIGNvbWVzIGZyb20gdGhlIGZhY3RcbiAqIHRoYXQgdGhlc2UgcmVkdWN0aW9uIGZ1bmN0aW9ucyByZWR1Y2Ugb25lIGVsZW1lbnQgYXQgYSB0aW1lLCBzdGVwIGJ5IHN0ZXAuXG4gKlxuICogSXQgaXMgdXAgdG8gdGhlIGltcGxlbWVudGF0aW9uIHdoZXRoZXIgdGhlIHJldHVybmVkIGNvbGxlY3Rpb24gaXMgYSBtb2RpZmllZFxuICogZm9ybSBvZiB0aGUgb3JpZ2luYWwgY29sbGVjdGlvbiBvciB3aGV0aGVyIGl0IGlzIGEgbmV3IGNvbGxlY3Rpb24gYWx0b2dldGhlci5cbiAqXG4gKiBAY2FsbGJhY2sgU3RlcEZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkY29yZVxuICogQHBhcmFtIHsqfSBhY2MgQSBjb2xsZWN0aW9uLCBwZXJoYXBzIHdpdGggc29tZSBtZW1iZXJzIGFscmVhZHkgYWRkZWQgdG8gaXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIEEgbmV3IGVsZW1lbnQgdG8gYmUgYWRkZWQgdG8gdGhhdCBjb2xsZWN0aW9uLlxuICogQHJldHVybnMgVGhlIG9yaWdpbmFsIGNvbGxlY3Rpb24gd2l0aCB0aGUgbmV3IHZhbHVlIGFkZGVkIHRvIGl0LlxuICovXG5cbi8qKlxuICogQSBmdW5jdGlvbiB0aGF0IGFjY2VwdHMgYSBmdWxseSByZWR1Y2VkIGNvbGxlY3Rpb24gYW5kIHJldHVybnMgdGhhdFxuICogY29sbGVjdGlvbiB3aXRoIGFueSBsYXN0LW1pbnV0ZSBtb2RpZmljYXRpb25zIHRoYXQgbWlnaHQgbmVlZCB0byBiZSBkb25lIHRvXG4gKiBpdC5cbiAqXG4gKiBJbiBtb3N0IGNhc2VzIHRoaXMgZnVuY3Rpb24gd2lsbCBzaW1wbHkgcmV0dXJuIGl0cyBhcmd1bWVudCwgdW5tb2RpZmllZCwgYnV0XG4gKiBpdCBkb2VzIGFmZm9yZCB0aGUgdHJhbnNkdWNlciBhbiBvcHBvcnR1bml0eSB0byBtYWtlIGFueSBmaW5hbCBtb2RpZmljYXRpb25zXG4gKiB0aGF0IG1pZ2h0IGJlIG5lY2Vzc2FyeSBiZWZvcmUgdGhlIHJlc3VsdCBpcyByZXR1cm5lZCBmcm9tIHRoZSB0cmFuc2R1Y3Rpb25cbiAqIHByb2Nlc3MuXG4gKlxuICogQGNhbGxiYWNrIEZpbmFsRnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGRjb3JlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSBmdWxseSByZWR1Y2VkIGNvbGxlY3Rpb24uXG4gKiBAcmV0dXJucyB7Kn0gVGhlIHJlZHVjZWQgY29sbGVjdGlvbiB3aXRoIGFueSBpbXBsZW1lbnRhdGlvbi1kZXBlbmRlbnQgY2hhbmdlc1xuICogICAgIHRoYXQgbWlnaHQgYmUgZGVlbWVkIG5lY2Vzc2FyeS5cbiAqL1xuXG4vKipcbiAqIEFuIG9iamVjdCB0aGF0IHByb3ZpZGVzIHRoZSBpbmZvcm1hdGlvbiBuZWNlc3NhcnkgdG8gYnVpbGQgYW5kIHBvcHVsYXRlIGEgbmV3XG4gKiBvYmplY3Qgb2YgYSByZWR1Y2libGUgdHlwZS4gVGhpcyBpbmZvcm1hdGlvbiBpcyB1c2VkIGJ5IHRoZSB0cmFuc2R1Y3Rpb25cbiAqIGVuZ2luZSB0byBjcmVhdGUgYSByZXN1bHQgZnJvbSBhIHJlZHVjdGlvbiB3aXRob3V0IGhhdmluZyB0byBoYXZlIGl0cyBvd25cbiAqIHR5cGUtc3BlY2lmaWMgY29kZTsgdGhlIGNyZWF0aW9uLCBwb3B1bGF0aW9uLCBhbmQgZmluYWxpemF0aW9uIG9mIHRoZSByZXN1bHRcbiAqIGFyZSBkZWxlZ2F0ZWQgaW5zdGVhZCB0byB0aGlzIHJlZHVjZXIgb2JqZWN0LlxuICpcbiAqIE5vdGUgdGhhdCBhICp0cmFuc2R1Y2VyIG9iamVjdCogaGFzIGV4YWN0bHkgdGhlIHNhbWUgc3RydWN0dXJlLiBUaGUgb25seVxuICogZGlmZmVyZW5jZXMgYXJlIHRoYXQgdGhlIHN0ZXAgZnVuY3Rpb24gaW4gYSB0cmFuc2R1Y2VyIG9iamVjdCBtb2RpZmllcyB0aGVcbiAqIGVsZW1lbnRzIGJlZm9yZSBpdCByZWR1Y2VzIHRoZW0sIHdoaWxlIGEgcmVkdWNlciBvYmplY3Qgd2lsbCBub3Q7IGFuZCBhXG4gKiB0cmFuc2R1Y2VyIG9iamVjdCB3aWxsIGNhbGwgdGhlIGVxdWl2YWxlbnQgZnVuY3Rpb25zIGluIHRoZSBuZXh0IG9iamVjdCBpblxuICogdGhlIGNoYWluLCB3aGlsZSBhIHJlZHVjZXIgb2JqZWN0IHdpbGwgbm90LiBBcyBhIGNvcm9sbGFyeSwgZXZlcnkgcmVkdWNlclxuICogb2JqZWN0IGlzIGFsc28gYSB0cmFuc2R1Y2VyIG9iamVjdCwgYnV0IHRoZSBjb252ZXJzZSBpcyBub3QgdHJ1ZS5cbiAqXG4gKiBAdHlwZWRlZiBSZWR1Y2VyT2JqZWN0XG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkY29yZVxuICogQHByb3BlcnR5IHttb2R1bGU6eGRjb3JlLkluaXRGdW5jdGlvbn0gU3ltYm9sLmZvcihcInJlZHVjZXIvaW5pdFwiKSBBIGZ1bmN0aW9uXG4gKiAgICAgdGhhdCBjYW4gY3JlYXRlIGEgbmV3LCBlbXB0eSBjb3B5IG9mIHRoZSByZWR1Y2libGUgdHlwZS5cbiAqIEBwcm9wZXJ0eSB7bW9kdWxlOnhkY29yZS5TdGVwRnVuY3Rpb259IFN5bWJvbC5mb3IoXCJyZWR1Y2VyL3N0ZXBcIikgQSBmdW5jdGlvblxuICogICAgIHRoYXQgY2FuIGFjY2VwdCBhIHZhbHVlIG9mIHRoZSByZWR1Y2libGUgdHlwZSBhbmQgYSBuZXcgZWxlbWVudCB0byBiZVxuICogICAgIGFkZGVkIHRvIGl0IGFuZCByZXR1cm4gdGhlIHJlZHVjaWJsZSB3aXRoIHRoZSBuZXcgZWxlbWVudCBpbmNvcnBvcmF0ZWQuXG4gKiBAcHJvcGVydHkge21vZHVsZTp4ZGNvcmUuRmluYWxGdW5jdGlvbn0gU3ltYm9sLmZvcihcInJlZHVjZXIvZmluYWxcIikgQVxuICogICAgIGZ1bmN0aW9uIHRoYXQgYWNjZXB0cyBhIHZhbHVlIG9mIHRoZSByZWR1Y2libGUgdHlwZSBhbmQgcmV0dXJucyB0aGUgc2FtZVxuICogICAgIHZhbHVlIHdpdGggYW55IGZpbmFsIG1vZGlmaWNhdGlvbnMgdGhhdCBtaWdodCBiZSBuZWNlc3NhcnkgZm9yIGl0LlxuICovXG5cbi8qKlxuICogQSBjb2xsZWN0aW9uIHRoYXQgY2FycmllcyBpdHMgb3duIGluZm9ybWF0aW9uIGFib3V0IGhvdyB0byBwcm9kdWNlIGl0c2VsZi5cbiAqIFRoaXMgaXMgc3RydWN0dXJhbGx5IHRoZSBzYW1lIGFzIGFcbiAqIGB7QGxpbmsgbW9kdWxlOnhkY29yZS5SZWR1Y2VyT2JqZWN0fFJlZHVjZXJPYmplY3R9YC4gSXQgaXMgZ2l2ZW4gYSBkaXN0aW5jdFxuICogdHlwZSBiZWNhdXNlIGl0J3MgYXNzdW1lZCB0aGF0IHRoaXMgdHlwZSB3aWxsIGJlIGEgY29sbGVjdGlvbiB3aXRoIHRoZVxuICogcmVkdWNlciBwcm90b2NvbCBtZXRob2RzIGFkZGVkIHRvIGl0OyBhXG4gKiBge0BsaW5rIG1vZHVsZTp4ZGNvcmUuUmVkdWNlck9iamVjdHxSZWR1Y2VyT2JqZWN0fWAgaXMgbm9ybWFsbHkgYW4gb2JqZWN0XG4gKiB0aGF0IGhhcyAqb25seSogdGhvc2UgcHJvdG9jb2wgbWV0aG9kcyBhbmQgc2VydmVzIG5vIHB1cnBvc2Ugb3RoZXIgdGhhblxuICogcHJvdmlkaW5nIHJlZHVjdGlvbiBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAdHlwZWRlZiB7bW9kdWxlOnhkY29yZS5SZWR1Y2VyT2JqZWN0fSBSZWR1Y2libGVcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGRjb3JlXG4gKi9cblxuLyoqXG4gKiBBIGZ1bmN0aW9uIHRoYXQgYWNjZXB0cyBhIHJlZHVjZXIgb2JqZWN0LCB3aGljaCBpdCB0aGVuIGNoYWlucyBhIHRyYW5zZHVjZXJcbiAqIG9iamVjdCB0by4gVGhpcyBpcyB0aGUgcHJpbWFyeSB3YXkgb2YgY3JlYXRpbmcgY29tcG9zZWQgdHJhbnNkdWNlciBjaGFpbnMuXG4gKlxuICogQSB0cmFuc2R1Y2VyIGZ1bmN0aW9uIGJhc2ljYWxseSBlbmNhcHN1bGF0ZXMgYSB0cmFuc2R1Y2VyIG9iamVjdCBhbmQgdGhlXG4gKiBhYmlsaXR5IHRvIGNoYWluIGl0IHRvIHdoYXRldmVyIHJlZHVjZXIgb2JqZWN0IGlzIHBhc3NlZCB0byBpdC5cbiAqXG4gKiBAY2FsbGJhY2sgVHJhbnNkdWNlckZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkY29yZVxuICogQHBhcmFtIHttb2R1bGU6eGRjb3JlLlJlZHVjZXJPYmplY3R9IHJlZHVjZXIgVGhlIHJlZHVjZXIgb2JqZWN0ICh3aGljaCBtYXlcbiAqICAgICBhbHNvIGJlIGEgdHJhbnNkdWNlciBvYmplY3QpIHRoYXQgaXMgdGhlIG5leHQgcmVkdWNlciBpbiB0aGUgY2hhaW4uXG4gKiBAcmV0dXJucyB7bW9kdWxlOnhkY29yZS5SZWR1Y2VyT2JqZWN0fSBBIHRyYW5zZHVjZXIgb2JqZWN0IGNvbnNpc3Rpbmcgb2Ygc29tZVxuICogICAgIG5ldyB0cmFuc2R1Y2VyIG9iamVjdCBjaGFpbmVkIHRvIHRoZSBzdXBwbGllZCByZWR1Y2VyIG9iamVjdC5cbiAqL1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG5cbi8qKlxuICogRnVuY3Rpb25zIHRvIGhlbHAgd2l0aCBpdGVyYXRpb24gb3ZlciBpdGVyYWJsZSBvYmplY3RzIGFuZCBwbGFpbiBvYmplY3RzLlxuICpcbiAqIEBtb2R1bGUgeGRjb3JlL2l0ZXJhdGlvblxuICogQHByaXZhdGVcbiAqL1xuXG5pbXBvcnQgeyBpc0ltcGxlbWVudGVkIH0gZnJvbSBcIm1vZHVsZXMvcHJvdG9jb2xcIjtcbmltcG9ydCB7IGlzRnVuY3Rpb24sIGlzT2JqZWN0LCBpc0dlbmVyYXRvckZ1bmN0aW9uIH0gZnJvbSBcIm1vZHVsZXMvdXRpbHNcIjtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGl0ZXJhdG9yIG92ZXIgYW4gb2JqZWN0LlxuICpcbiAqIERldGFpbHMgYWJvdXQgdGhpcyBmdW5jdGlvbiBhcmUgaW5jbHVkZWQgaW4gdGhlIGRvY3VtZW50YXRpb24gZm9yXG4gKiB7QGxpbmsgbW9kdWxlOnhkY29yZS5pdGVyYXRvcnxpdGVyYXRvcn0uXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IG9iaiBUaGUgb2JqZWN0IGJlaW5nIGl0ZXJhdGVkIG92ZXIuXG4gKiBAcmV0dXJucyB7ZXh0ZXJuYWw6SXRlcmF0b3J9IEFuIGl0ZXJhdG9yIG92ZXIgdGhlIHByb3BlcnRpZXMgb2YgYG9iamAuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBvYmplY3RJdGVyYXRvcihvYmopIHtcbiAgcmV0dXJuIChmdW5jdGlvbiooKSB7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gICAgbGV0IGluZGV4ID0gMDtcblxuICAgIHdoaWxlIChpbmRleCA8IGtleXMubGVuZ3RoKSB7XG4gICAgICBjb25zdCBrID0ga2V5c1tpbmRleCsrXTtcbiAgICAgIHlpZWxkIHsgW2tdOiBvYmpba10gfTtcbiAgICB9XG4gIH0pKCk7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBpdGVyYXRvciBvdmVyIGEgZnVuY3Rpb24uXG4gKlxuICogRGV0YWlscyBhYm91dCB0aGlzIGZ1bmN0aW9uIGFyZSBpbmNsdWRlZCBpbiB0aGUgZG9jdW1lbnRhdGlvbiBmb3JcbiAqIHtAbGluayBtb2R1bGU6eGRjb3JlLml0ZXJhdG9yfGl0ZXJhdG9yfS5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTp4ZGNvcmUuSXRlcmFibGVGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEByZXR1cm5zIHtleHRlcm5hbDpJdGVyYXRvcn0gQW4gaXRlcmF0b3Igb3ZlciB0aGUgcmV0dXJuIHZhbHVlcyBvZiBgZm5gLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZnVuY3Rpb25JdGVyYXRvcihmbikge1xuICByZXR1cm4gKGZ1bmN0aW9uKigpIHtcbiAgICBsZXQgY3VycmVudDtcbiAgICBsZXQgaW5kZXggPSAwO1xuXG4gICAgZm9yICg7Oykge1xuICAgICAgY3VycmVudCA9IGZuKGluZGV4KyssIGN1cnJlbnQpO1xuICAgICAgaWYgKHR5cGVvZiBjdXJyZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgeWllbGQgY3VycmVudDtcbiAgICB9XG4gIH0pKCk7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBpdGVyYXRvciBvdmVyIHRoZSBwcm92aWRlZCB2YWx1ZS4gVGhlIGZvcm0gb2YgdGhlIGl0ZXJhdGlvblxuICogZGVwZW5kcyBvbiB3aGF0IGtpbmQgb2YgdmFsdWUgaXMgYmVpbmcgaXRlcmF0ZWQgb3Zlci5cbiAqXG4gKiBJZiB0aGUgdmFsdWUgaXMgYSBjb2xsZWN0aW9uIGltcGxlbWVudGluZyB0aGUgW2l0ZXJhYmxlIHByb3RvY29sXVsxXSAoYXJyYXlzLFxuICogc3RyaW5ncywgZ2VuZXJhdG9ycywgb3IgYSBjdXN0b20gb2JqZWN0IHN1cHBvcnRpbmcgdGhlIHByb3RvY29sKSB0aGVuIHRoZVxuICogcHJvZHVjZWQgaXRlcmF0b3Igd2lsbCBiZSBhcyBleHBlY3RlZDogYW4gb2JqZWN0IHRoYXQgaW1wbGVtZW50cyB0aGVcbiAqIFtpdGVyYXRvciBwcm90b2NvbF1bMl0gYnkgcHJvdmlkaW5nIGEgYG5leHRgIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBlYWNoXG4gKiBjb2xsZWN0aW9uIHZhbHVlIGluIHR1cm4uXG4gKlxuICogYGBgXG4gKiBjb25zdCBpdGVyID0gaXRlcmF0b3IoWzEsIDIsIDNdKTtcbiAqIGNvbnNvbGUubG9nKGl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiAxXG4gKiBjb25zb2xlLmxvZyhpdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4gMlxuICogY29uc29sZS5sb2coaXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IDNcbiAqIGNvbnNvbGUubG9nKGl0ZXIubmV4dCgpLmRvbmUpOyAgICAvLyAtPiB0cnVlXG4gKiBgYGBcbiAqXG4gKiBTcGVjaWFsIHN1cHBvcnQgaXMgcHJvdmlkZWQgZm9yIHR3byB0eXBlcyB0aGF0IGFyZSBub3Qgbm9ybWFsbHkgaXRlcmFibGU6XG4gKiBvYmplY3RzIGFuZCBmdW5jdGlvbnMuXG4gKlxuICogT2JqZWN0cyByZXN1bHQgaW4gYW4gaXRlcmF0b3IgdGhhdCBwcm9kdWNlcyBhIHNpbmdsZS1wcm9wZXJ0eSBvYmplY3QgZm9yXG4gKiBldmVyeSBrZXkvdmFsdWUgcGFpciBpbiB0aGUgc3VwcGxpZWQgb2JqZWN0LiBUaGUgW29yZGVyIG9mIGl0ZXJhdGlvbl1bM10gaXNcbiAqIHRoZSBzYW1lIGFzIGl0IGlzIGZvciBvYmplY3RzIHBvc3QtRVMyMDE1OlxuICpcbiAqIDEuIFN0cmluZyBrZXlzIHRoYXQgYXJlIGludGVnZXIgaW5kaWNlcyBpbiBhc2NlbmRpbmcgbnVtZXJpY2FsIG9yZGVyXG4gKiAyLiBBbGwgb3RoZXIgc3RyaW5nIGtleXMgaW4gdGhlIG9yZGVyIGluIHdoaWNoIHRoZXkgd2VyZSBhZGRlZCB0byB0aGUgb2JqZWN0XG4gKiAzLiBBbGwgc3ltYm9sIGtleXMgaW4gdGhlIG9yZGVyIGluIHdoaWNoIHRoZXkgd2VyZSBhZGRlZCB0byB0aGUgb2JqZWN0XG4gKlxuICogYGBgXG4gKiBjb25zdCBvYmogPSB7XG4gKiAgIFtTeW1ib2woXCJmaXJzdFwiKV06IHRydWUsXG4gKiAgIDAyOiB0cnVlLFxuICogICAxMDogdHJ1ZSxcbiAqICAgMDE6IHRydWUsXG4gKiAgIDI6IHRydWUsXG4gKiAgIFtTeW1ib2woXCJzZWNvbmRcIildOiB0cnVlXG4gKiB9O1xuICogY29uc3QgaXRlciA9IGl0ZXJhdG9yKG9iaik7XG4gKiBjb25zb2xlLmxvZyhpdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4geyAnMic6IHRydWUgfVxuICogY29uc29sZS5sb2coaXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IHsgJzEwJzogdHJ1ZSB9XG4gKiBjb25zb2xlLmxvZyhpdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4geyAnMDInOiB0cnVlIH1cbiAqIGNvbnNvbGUubG9nKGl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiB7ICcwMSc6IHRydWUgfVxuICogY29uc29sZS5sb2coaXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IHsgW1N5bWJvbCgnZmlyc3QnKV06IHRydWUgfVxuICogY29uc29sZS5sb2coaXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IHsgW1N5bWJvbCgnc2Vjb25kJyldOiB0cnVlIH1cbiAqIGNvbnNvbGUubG9nKGl0ZXIubmV4dCgpLmRvbmUpOyAgICAvLyAtPiB0cnVlXG4gKiBgYGBcbiAqXG4gKiBGdW5jdGlvbnMgYXJlIHJ1biBlYWNoIHRpbWUgdGhlIGl0ZXJhdG9yJ3MgYG5leHRgIG1ldGhvZCBpcyBjYWxsZWQsIGFuZCB0aGVcbiAqIHJldHVybiB2YWx1ZSBvZiB0aGUgZnVuY3Rpb24gaXMgc3VwcGxpZWQgYXMgdGhlIGl0ZXJhdG9yJ3MgdmFsdWUgYXQgdGhhdFxuICogcG9pbnQuXG4gKlxuICogVGhpcyBmdW5jdGlvbiBpcyBwcm92aWRlZCB0d28gYXJndW1lbnRzOiB0aGUgemVyby1iYXNlZCBpbmRleCBvZiB0aGF0XG4gKiBpdGVyYXRpb24sIGFuZCB0aGUgdmFsdWUgcHJvZHVjZWQgYnkgdGhlIGxhc3QgaW52b2NhdGlvbiBvZiB0aGUgaXRlcmF0b3IuIFRoZVxuICogbGFzdCB2YWx1ZSBpcyBgdW5kZWZpbmVkYCBvbiB0aGUgZmlyc3QgcGFzcywgYnV0IGEgZGVmYXVsdCBwYXJhbWV0ZXIgb24gdGhlXG4gKiBmdW5jdGlvbiBjYW4gZGVmaW5lIHRoZSBmaXJzdCBwYXNzIHZhbHVlIHRvIGJlIHdoYXRldmVyIGlzIG5lZWRlZC5cbiAqXG4gKiBgYGBcbiAqIGNvbnN0IGZuID0gKGluZGV4LCBsYXN0ID0gMSkgPT4gbGFzdCAqIChpbmRleCArIDEpO1xuICogY29uc3QgaXRlciA9IGl0ZXJhdG9yKGZuKTtcbiAqIGNvbnNvbGUubG9nKGl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiAxXG4gKiBjb25zb2xlLmxvZyhpdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4gMlxuICogY29uc29sZS5sb2coaXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IDZcbiAqIGNvbnNvbGUubG9nKGl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiAyNFxuICogY29uc29sZS5sb2coaXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IDEyMFxuICogYGBgXG4gKlxuICogSXRlcmF0b3JzIGNyZWF0ZWQgZnJvbSBmdW5jdGlvbnMgYXJlLCBieSBkZWZhdWx0LCBpbmZpbml0ZSBzaW5jZSB0aGVyZSBpcyBub1xuICogY29uZGl0aW9uIGZvciB0aGVtIHRvIG5vdCBiZSBhYmxlIHRvIGJlIGFwcGxpZWQgb25lIG1vcmUgdGltZS4gVG8gY3JlYXRlIGFcbiAqIGZpbml0ZSBpdGVyYXRvciBmcm9tIGEgZnVuY3Rpb24sIGhhdmUgaXQgcmV0dXJuIGB1bmRlZmluZWRgIGF0IHNvbWUgcG9pbnQuXG4gKiBXaGVuIGEgcmV0dXJuIHZhbHVlIG9mIGB1bmRlZmluZWRgIGlzIGVuY291bnRlcmVkLCBgaXRlcmF0b3JgIHdpbGwgdGVybWluYXRlXG4gKiB0aGUgaXRlcmF0b3IsIHNldHRpbmcgaXRzIG5leHQgYGRvbmVgIHByb3BlcnR5IHRvIGB0cnVlYC5cbiAqXG4gKiBJZiB0aGUgaW5wdXQgdmFsdWUgaXMgbmVpdGhlciBpdGVyYWJsZSwgb2JqZWN0LCBvciBmdW5jdGlvbiwgdGhlbiB0aGUgcmVzdWx0XG4gKiB3aWxsIGJlIGBudWxsYC5cbiAqXG4gKiBbMV06IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0l0ZXJhdGlvbl9wcm90b2NvbHMjVGhlX2l0ZXJhYmxlX3Byb3RvY29sXG4gKiBbMl06IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0l0ZXJhdGlvbl9wcm90b2NvbHMjVGhlX2l0ZXJhdG9yX3Byb3RvY29sXG4gKiBbM106IGh0dHBzOi8vMmFsaXR5LmNvbS8yMDE1LzEwL3Byb3BlcnR5LXRyYXZlcnNhbC1vcmRlci1lczYuaHRtbFxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGRjb3JlXG4gKiBAcGFyYW0geyhvYmplY3R8bW9kdWxlOnhkY29yZS5JdGVyYWJsZUZ1bmN0aW9ufGV4dGVybmFsOkl0ZXJhYmxlKX0gdmFsdWVcbiAqICAgICBUaGUgdmFsdWUgdG8gY3JlYXRlIGFuIGl0ZXJhdG9yIG92ZXIuXG4gKiBAcmV0dXJucyB7ZXh0ZXJuYWw6SXRlcmF0b3J9IEFuIGl0ZXJhdG9yIG92ZXIgYHZhbHVlYC5cbiAqL1xuZnVuY3Rpb24gaXRlcmF0b3IodmFsdWUpIHtcbiAgc3dpdGNoICh0cnVlKSB7XG4gICAgY2FzZSBpc0Z1bmN0aW9uKHZhbHVlW1N5bWJvbC5pdGVyYXRvcl0pOlxuICAgIGNhc2UgaXNHZW5lcmF0b3JGdW5jdGlvbih2YWx1ZVtTeW1ib2wuaXRlcmF0b3JdKTpcbiAgICAgIHJldHVybiB2YWx1ZVtTeW1ib2wuaXRlcmF0b3JdKCk7XG4gICAgY2FzZSBpc0Z1bmN0aW9uKHZhbHVlKTpcbiAgICAgIHJldHVybiBmdW5jdGlvbkl0ZXJhdG9yKHZhbHVlKTtcbiAgICBjYXNlIGlzT2JqZWN0KHZhbHVlKTpcbiAgICAgIHJldHVybiBvYmplY3RJdGVyYXRvcih2YWx1ZSk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBwYXNzZWQgb2JqZWN0IGlzIGl0ZXJhYmxlLCBpbiB0ZXJtcyBvZiB3aGF0ICdpdGVyYWJsZSdcbiAqIG1lYW5zIHRvIHRoaXMgbGlicmFyeS4gSW4gb3RoZXIgd29yZHMsIHZhbHVlcyBpbXBsZW1lbnRpbmcgdGhlIGBpdGVyYWJsZWBcbiAqIHByb3RvY29sIGFuZCBwbGFpbiBvYmplY3RzIHJldHVybiBgdHJ1ZWAsIHdoaWxlIGV2ZXJ5dGhpbmcgZWxzZSByZXR1cm5zXG4gKiBgZmFsc2VgLiBUaGlzIGRvZXMgbm90IHJldHVybiBgdHJ1ZWAgZm9yIGZ1bmN0aW9ucyBldmVuIHRob3VnaFxuICoge0BsaW5rIG1vZHVsZTp4ZGNvcmUuaXRlcmF0b3J8aXRlcmF0b3J9IGNhbiBwcm9kdWNlIGFuIGl0ZXJhdG9yIGZvciB0aGVtLFxuICogYmVjYXVzZSBub3QgYWxsIGZ1bmN0aW9ucyB3b3JrIHdlbGwgd2l0aFxuICoge0BsaW5rIG1vZHVsZTp4ZGNvcmUuaXRlcmF0b3J8aXRlcmF0b3J9LlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGRjb3JlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0IGZvciBpdGVyYWJpbGl0eS5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IEVpdGhlciBgdHJ1ZWAgaWYgdGhlIHZhbHVlIGlzIGl0ZXJhYmxlXG4gKiAgICAgKGB7QGxpbmsgbW9kdWxlOnhkY29yZS5pdGVyYXRvcnxpdGVyYXRvcn1gIHdpbGwgcmV0dXJuIGFuIGl0ZXJhdG9yIGZvclxuICogICAgIGl0KSBvciBgZmFsc2VgIGlmIGl0IGlzIG5vdC5cbiAqL1xuZnVuY3Rpb24gaXNJdGVyYWJsZSh2YWx1ZSkge1xuICByZXR1cm4gaXNJbXBsZW1lbnRlZCh2YWx1ZSwgXCJpdGVyYXRvclwiKSB8fCBpc09iamVjdCh2YWx1ZSk7XG59XG5cbmV4cG9ydCB7IGl0ZXJhdG9yLCBpc0l0ZXJhYmxlIH07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuLyoqXG4gKiBQcm90b2NvbHMgZm9yIGl0ZXJhdGlvbiBhbmQgcmVkdWN0aW9uLlxuICpcbiAqIEBtb2R1bGUgeGRjb3JlL3Byb3RvY29sXG4gKiBAcHJpdmF0ZVxuICovXG5cbmltcG9ydCB7IGlzRnVuY3Rpb24sIGlzR2VuZXJhdG9yRnVuY3Rpb24gfSBmcm9tIFwibW9kdWxlcy91dGlsc1wiO1xuXG4vKipcbiAqIFRoZSBtYXBwaW5nIG9mIHByb3RvY29sIG5hbWVzIHRvIHRoZWlyIHJlc3BlY3RpdmUgcHJvcGVydHkga2V5IG5hbWVzLiBUaGlzXG4gKiBtYXBwaW5nIG1ha2VzIGl0IGVhc2llciB0byBkZWFsIHdpdGggdGhlc2UgcHJvdG9jb2xzIGFzIHRoZXkgY2FuIGJlIGxvb2tlZCB1cFxuICogYnkgc3RyaW5nIG5hbWUgcmF0aGVyIHRoYW4gYnkgbW9yZSBkaWZmaWN1bHQtdG8td29yay13aXRoIHN5bWJvbHMuXG4gKlxuICogQHR5cGVkZWYge29iamVjdH0gUHJvdG9jb2xNYXBcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGRjb3JlXG4gKiBAcHJvcGVydHkge1N5bWJvbH0gaW5pdCBUaGUgYHJlZHVjZXIvaW5pdGAgcHJvdG9jb2wuIFRoaXMgaXMgdXNlZCB0byBtYXJrXG4gKiAgICAgZnVuY3Rpb25zIHRoYXQgaW5pdGlhbGl6ZSBhIHRhcmdldCBjb2xsZWN0aW9uIGJlZm9yZSBhZGRpbmcgaXRlbXMgdG8gaXQuXG4gKiBAcHJvcGVydHkge1N5bWJvbH0gc3RlcCBUaGUgYHJlZHVjZXIvc3RlcGAgcHJvdG9jb2wuIFRoaXMgaXMgdXNlZCB0byBtYXJrXG4gKiAgICAgZnVuY3Rpb25zIHRoYXQgYXJlIHVzZWQgaW4gdGhlIHJlZHVjZXIncyBzdGVwIHByb2Nlc3MsIHdoZXJlIG9iamVjdHMgYXJlXG4gKiAgICAgYWRkZWQgdG8gdGhlIHRhcmdldCBjb2xsZWN0aW9uIG9uZSBhdCBhIHRpbWUuXG4gKiBAcHJvcGVydHkge1N5bWJvbH0gZmluYWwgVGhlIGByZWR1Y2VyL2ZpbmFsYCBwcm90b2NvbC4gVGhpcyBpcyB1c2VkIHRvIG1hcmtcbiAqICAgICBmdW5jdGlvbnMgdGhhdCB0YWtlIHRoZSBmaW5hbCByZXN1bHQgb2YgdGhlIHN0ZXAgcHJvY2VzcyBhbmQgcmV0dXJuIHRoZVxuICogICAgIGZpbmFsIGZvcm0gdG8gYmUgb3V0cHV0LiBUaGlzIGlzIG9wdGlvbmFsOyBpZiB0aGUgcmVkdWNlciBkb2VzIG5vdCB3YW50XG4gKiAgICAgdG8gdHJhbnNmb3JtIHRoZSBmaW5hbCByZXN1bHQsIGl0IHNob3VsZCBqdXN0IHJldHVybiB0aGUgcmVzdWx0IG9mIGl0c1xuICogICAgIGNoYWluZWQgcmVkdWNlcidzIGBmaW5hbGAgZnVuY3Rpb24uXG4gKiBAcHJvcGVydHkge1N5bWJvbH0gcmVkdWNlZCBUaGUgYHJlZHVjZXIvY29tcGxldGVkYCBwcm90b2NvbC4gVGhlIHByZXNlbmNlIG9mXG4gKiAgICAgdGhpcyBrZXkgb24gYW4gb2JqZWN0IGluZGljYXRlcyB0aGF0IGl0cyB0cmFuc2Zvcm1hdGlvbiBoYXMgYmVlblxuICogICAgIGNvbXBsZXRlZC4gSXQgaXMgdXNlZCBpbnRlcm5hbGx5IHRvIG1hcmsgY29sbGVjdGlvbnMgd2hvc2VcbiAqICAgICB0cmFuc2Zvcm1hdGlvbnMgY29uY2x1ZGUgYmVmb3JlIGV2ZXJ5IG9iamVjdCBpcyBpdGVyYXRlZCBvdmVyIChhcyBpblxuICogICAgIGB7QGxpbmsgbW9kdWxlOnhkdWNlLnRha2V9YCB0cmFuc2R1Y2Vycy4pIEl0IGlzIG9mIGxpdHRsZSB1c2UgYmV5b25kXG4gKiAgICAgdHJhbnNkdWNlciBhdXRob3JpbmcuXG4gKiBAcHJvcGVydHkge1N5bWJvbH0gdmFsdWUgVGhlIGByZWR1Y2VyL3ZhbHVlYCBwcm90b2NvbC4gVGhpcyBpcyB1c2VkXG4gKiAgICAgaW50ZXJuYWxseSB0byBtYXJrIHByb3BlcnRpZXMgdGhhdCBjb250YWluIHRoZSB2YWx1ZSBvZiBhIGNvbXBsZXRlZFxuICogICAgIHRyYW5zZm9ybWF0aW9uLiBJdCBpcyBvZiBsaXR0bGUgdXNlIGJleW9uZCB0cmFuc2R1Y2VyIGF1dGhvcmluZy5cbiAqL1xuXG4vKipcbiAqIFRoZSBtYXBwaW5nIG9mIHByb3RvY29sIG5hbWVzIHRvIHRoZWlyIHJlc3BlY3RpdmUgcHJvcGVydHkga2V5IG5hbWVzLlxuICpcbiAqIEB0eXBlIHttb2R1bGU6eGRjb3JlLlByb3RvY29sTWFwfVxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZGNvcmVcbiAqL1xuY29uc3QgcHJvdG9jb2xzID0gT2JqZWN0LmNyZWF0ZShudWxsLCB7XG4gIGluaXQ6IHtcbiAgICB2YWx1ZTogU3ltYm9sLmZvcihcInJlZHVjZXIvaW5pdFwiKVxuICB9LFxuICBzdGVwOiB7XG4gICAgdmFsdWU6IFN5bWJvbC5mb3IoXCJyZWR1Y2VyL3N0ZXBcIilcbiAgfSxcbiAgZmluYWw6IHtcbiAgICB2YWx1ZTogU3ltYm9sLmZvcihcInJlZHVjZXIvZmluYWxcIilcbiAgfSxcbiAgY29tcGxldGVkOiB7XG4gICAgdmFsdWU6IFN5bWJvbC5mb3IoXCJyZWR1Y2VyL2NvbXBsZXRlZFwiKVxuICB9LFxuICB2YWx1ZToge1xuICAgIHZhbHVlOiBTeW1ib2wuZm9yKFwicmVkdWNlci92YWx1ZVwiKVxuICB9XG59KTtcblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgYSBwYXJ0aWN1bGFyIHByb3RvY29sIGlzIGltcGxlbWVudGVkIGJ5IGEgdmFsdWUuIFRoZVxuICogcG9zc2libGUgdmFsdWVzIGZvciBgcHJvdG9jb2xgIGFyZSB0aGUgZm9sbG93aW5nLCByZXByZXNlbnRpbmcgdGhlIHR3b1xuICogYnVpbHQtaW4gaXRlcmF0b3IgcHJvdG9jb2xzIGFuZCB0aGUgZml2ZSBjdXN0b20gdHJhbnNkdWNlciBwcm90b2NvbHM6XG4gKlxuICogKiBgaXRlcmF0b3JgXG4gKiAqIGBhc3luY0l0cmVyYXRvcmBcbiAqICogYGluaXRgXG4gKiAqIGBzdGVwYFxuICogKiBgZmluYWxgXG4gKiAqIGBjb21wbGV0ZWRgXG4gKiAqIGB2YWx1ZWBcbiAqXG4gKiBBbnkgb2YgdGhlc2Ugd2lsbCByZXN1bHQgaW4gYHRydWVgIGlmIHRoZSBvYmplY3QgaW4gcXVlc3Rpb24gaGFzIGEgcHJvcGVydHlcbiAqIHRoYXQgbWF0Y2hlcyB0aGUgb25lIG5lY2Vzc2FyeSB0byBpbXBsZW1lbnQgdGhlIHByb3RvY29sLiBGdXJ0aGVyLCBhbnkgb2ZcbiAqIHRoZSBwcm9wZXJ0aWVzIG90aGVyIHRoYW4gYGNvbXBsZXRlZGAgYW5kIGBzdGVwYCBtdXN0IGJlIGZ1bmN0aW9ucy5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkY29yZVxuICogQHBhcmFtIHtvYmplY3R9IG9iaiBUaGUgb2JqZWN0IHRvIGNoZWNrIGZvciBwcm90b2NvbCBpbXBsZW1lbnRhdGlvbi5cbiAqIEBwYXJhbSB7c3RyaW5nfSBwcm90b2NvbCBUaGUgbmFtZSBvZiB0aGUgcHJvdG9jb2wgdG8gY2hlY2sgZm9yLlxuICogQHJldHVybnMge2Jvb2xlYW59IEVpdGhlciBgdHJ1ZWAgaWYgdGhlIG9iamVjdCBzdXBwb3J0cyB0aGUgbmFtZWQgcHJvdG9jb2wgb3JcbiAqICAgICBgZmFsc2VgIGlmIGl0IGRvZXMgbm90LlxuICovXG5mdW5jdGlvbiBpc0ltcGxlbWVudGVkKG9iaiwgcHJvdG9jb2wpIHtcbiAgaWYgKG9iaiA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3dpdGNoIChwcm90b2NvbCkge1xuICAgIGNhc2UgXCJpdGVyYXRvclwiOlxuICAgICAgcmV0dXJuIChcbiAgICAgICAgaXNGdW5jdGlvbihvYmpbU3ltYm9sLml0ZXJhdG9yXSkgfHxcbiAgICAgICAgaXNHZW5lcmF0b3JGdW5jdGlvbihvYmpbU3ltYm9sLml0ZXJhdG9yXSlcbiAgICAgICk7XG4gICAgY2FzZSBcImFzeW5jSXRlcmF0b3JcIjpcbiAgICAgIHJldHVybiBpc0dlbmVyYXRvckZ1bmN0aW9uKG9ialtTeW1ib2wuYXN5bmNJdGVyYXRvcl0pO1xuICAgIGNhc2UgXCJjb21wbGV0ZWRcIjpcbiAgICBjYXNlIFwidmFsdWVcIjpcbiAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iaikuaW5jbHVkZXMocHJvdG9jb2xzW3Byb3RvY29sXSk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBpc0Z1bmN0aW9uKG9ialtwcm90b2NvbHNbcHJvdG9jb2xdXSk7XG4gIH1cbn1cblxuZXhwb3J0IHsgcHJvdG9jb2xzLCBpc0ltcGxlbWVudGVkIH07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuLyoqXG4gKiBBIHNldCBvZiBmdW5jdGlvbnMgcmVsYXRlZCB0byB0aGUgcHJvZHVjaW5nIHJlZHVjZXIgb2JqZWN0cywgbWFya2luZ1xuICogY29tcGxldGVkIG9iamVjdHMsIGFuZCBwZXJmb3JtaW5nIGdlbmVyYWwgcmVkdWN0aW9uIG9wZXJhdGlvbnMuXG4gKlxuICogQG1vZHVsZSB4ZGNvcmUvcmVkdWN0aW9uXG4gKiBAcHJpdmF0ZVxuICovXG5cbmltcG9ydCB7IGlzSW1wbGVtZW50ZWQsIHByb3RvY29scyBhcyBwIH0gZnJvbSBcIm1vZHVsZXMvcHJvdG9jb2xcIjtcbmltcG9ydCB7IGlzU3RyaW5nLCBpc0FycmF5LCBpc09iamVjdCwgaXNGdW5jdGlvbiB9IGZyb20gXCJtb2R1bGVzL3V0aWxzXCI7XG5pbXBvcnQgeyBpdGVyYXRvciB9IGZyb20gXCJtb2R1bGVzL2l0ZXJhdGlvblwiO1xuXG4vKipcbiAqIFJldHVybnMgYW4gaW5pdCBmdW5jdGlvbiBmb3IgYSBjb2xsZWN0aW9uLiBUaGlzIGlzIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGFcbiAqIG5ldywgZW1wdHkgaW5zdGFuY2Ugb2YgdGhlIGNvbGxlY3Rpb24gaW4gcXVlc3Rpb24uIElmIHRoZSBjb2xsZWN0aW9uIGRvZXNuJ3RcbiAqIHN1cHBvcnQgcmVkdWN0aW9uLCBgbnVsbGAgaXMgcmV0dXJuZWQuIFRoaXMgbWFrZXMgY29uZGl0aW9uYWxzIGEgYml0IGVhc2llclxuICogdG8gd29yayB3aXRoLlxuICpcbiAqIEluIG9yZGVyIHRvIHN1cHBvcnQgdGhlIGNvbnZlcnNpb24gb2YgZnVuY3Rpb25zIGludG8gcmVkdWNlcnMsIGZ1bmN0aW9uXG4gKiBzdXBwb3J0IGlzIGFsc28gcHJvdmlkZWQuXG4gKlxuICogQHBhcmFtIHsob2JqZWN0fGZ1bmN0aW9ufGV4dGVybmFsOkl0ZXJhYmxlKX0gY29sbGVjdGlvbiBBIGNvbGxlY3Rpb24gdG9cbiAqICAgICBjcmVhdGUgYW4gaW5pdCBmdW5jdGlvbiBmb3IuIFRoaXMgY2FuIGJlIGFueXRoaW5nIHRoYXQgc3VwcG9ydHMgdGhlXG4gKiAgICAgaXRlcmF0YWJsZSBwcm90b2NvbCwgYSBwbGFpbiBvYmplY3QsIG9yIGEgZnVuY3Rpb24uXG4gKiBAcmV0dXJuIHttb2R1bGU6eGRjb3JlLkluaXRGdW5jdGlvbn0gQSBmdW5jdGlvbiB0aGF0LCB3aGVuIGNhbGxlZCwgcmV0dXJucyBhblxuICogICAgIGluaXRpYWwgdmVyc2lvbiBvZiB0aGUgcHJvdmlkZWQgY29sbGVjdGlvbi4gSWYgdGhlIHByb3ZpZGVkIGNvbGxlY3Rpb24gaXNcbiAqICAgICBub3QgaXRlcmFibGUsIHRoZW4gYG51bGxgIGlzIHJldHVybmVkLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaW5pdChjb2xsZWN0aW9uKSB7XG4gIHN3aXRjaCAodHJ1ZSkge1xuICAgIGNhc2UgaXNJbXBsZW1lbnRlZChjb2xsZWN0aW9uLCBcImluaXRcIik6XG4gICAgICByZXR1cm4gY29sbGVjdGlvbltwLmluaXRdO1xuICAgIGNhc2UgaXNTdHJpbmcoY29sbGVjdGlvbik6XG4gICAgICByZXR1cm4gKCkgPT4gXCJcIjtcbiAgICBjYXNlIGlzQXJyYXkoY29sbGVjdGlvbik6XG4gICAgICByZXR1cm4gKCkgPT4gW107XG4gICAgY2FzZSBpc09iamVjdChjb2xsZWN0aW9uKTpcbiAgICAgIHJldHVybiAoKSA9PiAoe30pO1xuICAgIGNhc2UgaXNGdW5jdGlvbihjb2xsZWN0aW9uKTpcbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIHRocm93IEVycm9yKFwiaW5pdCBub3QgYXZhaWxhYmxlXCIpO1xuICAgICAgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgc3RlcCBmdW5jdGlvbiBmb3IgYSBjb2xsZWN0aW9uLiBUaGlzIGlzIGEgZnVuY3Rpb24gdGhhdCB0YWtlcyBhblxuICogYWNjdW11bGF0b3IgYW5kIGEgdmFsdWUgYW5kIHJldHVybnMgdGhlIHJlc3VsdCBvZiByZWR1Y2luZyB0aGUgdmFsdWUgaW50byB0aGVcbiAqIGFjY3VtdWxhdG9yLiBJZiB0aGUgY29sbGVjdGlvbiBkb2Vzbid0IHN1cHBvcnQgcmVkdWN0aW9uLCBgbnVsbGAgaXMgcmV0dXJuZWQuXG4gKiBUaGUgcmV0dXJuZWQgZnVuY3Rpb24gaXRzZWxmIHNpbXBseSByZWR1Y2VzIHRoZSBpbnB1dCBpbnRvIHRoZSB0YXJnZXRcbiAqIGNvbGxlY3Rpb24gd2l0aG91dCBtb2RpZnlpbmcgaXQuXG4gKlxuICogSW4gb3JkZXIgdG8gc3VwcG9ydCB0aGUgY29udmVyc2lvbiBvZiBmdW5jdGlvbnMgaW50byByZWR1Y2VycywgZnVuY3Rpb25cbiAqIHN1cHBvcnQgaXMgYWxzbyBwcm92aWRlZC5cbiAqXG4gKiBAcGFyYW0geyhvYmplY3R8ZnVuY3Rpb258ZXh0ZXJuYWw6SXRlcmFibGUpfX0gY29sbGVjdGlvbiBBIGNvbGxlY3Rpb24gdG9cbiAqICAgICBjcmVhdGUgYSBzdGVwIGZ1bmN0aW9uIGZvci4gVGhpcyBjYW4gYmUgYW55dGhpbmcgdGhhdCBzdXBwb3J0cyB0aGVcbiAqICAgICBpdGVyYXRpb24gcHJvdG9jb2wsIGEgcGxhaW4gb2JqZWN0LCBvciBhIGZ1bmN0aW9uLlxuICogQHJldHVybiB7bW9kdWxlOnhkY29yZS5TdGVwRnVuY3Rpb259IEEgcmVkdWN0aW9uIGZ1bmN0aW9uIGZvciB0aGUgcHJvdmlkZWRcbiAqICAgICBjb2xsZWN0aW9uIHRoYXQgc2ltcGx5IGFkZHMgYW4gZWxlbWVudCB0byB0aGUgdGFyZ2V0IGNvbGxlY3Rpb24gd2l0aG91dFxuICogICAgIG1vZGlmeWluZyBpdC4gSWYgdGhlIHByb3ZpZGVkIGNvbGxlY3Rpb24gaXMgbm90IGl0ZXJhYmxlLCBgbnVsbGAgaXNcbiAqICAgICByZXR1cm5lZC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHN0ZXAoY29sbGVjdGlvbikge1xuICBzd2l0Y2ggKHRydWUpIHtcbiAgICBjYXNlIGlzSW1wbGVtZW50ZWQoY29sbGVjdGlvbiwgXCJzdGVwXCIpOlxuICAgICAgcmV0dXJuIGNvbGxlY3Rpb25bcC5zdGVwXTtcblxuICAgIGNhc2UgaXNTdHJpbmcoY29sbGVjdGlvbik6XG4gICAgICByZXR1cm4gKGFjYywgdmFsdWUpID0+IHtcbiAgICAgICAgY29uc3QgdiA9IGlzT2JqZWN0KHZhbHVlKSA/IHZhbHVlW09iamVjdC5rZXlzKHZhbHVlKVswXV0gOiB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIGFjYyArIHY7XG4gICAgICB9O1xuXG4gICAgY2FzZSBpc0FycmF5KGNvbGxlY3Rpb24pOlxuICAgICAgcmV0dXJuIChhY2MsIHZhbHVlKSA9PiB7XG4gICAgICAgIGFjYy5wdXNoKHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH07XG5cbiAgICBjYXNlIGlzT2JqZWN0KGNvbGxlY3Rpb24pOlxuICAgICAgcmV0dXJuIChhY2MsIHZhbHVlKSA9PiB7XG4gICAgICAgIGxldCB2ID0gdmFsdWU7XG5cbiAgICAgICAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgICAvLyBpZiB0aGUgaW5wdXQgaXNuJ3QgYW4gb2JqZWN0LCB0dXJuIGl0IGludG8gYW4gb2JqZWN0IHdpdGggYVxuICAgICAgICAgIC8vIG51bWVyaWNhbCBrZXkgb25lIGdyZWF0ZXIgdGhhbiB0aGUgbWF4IGtleSBhbHJlYWR5IGluIHRoZVxuICAgICAgICAgIC8vIGFjY3VtdWxhdG9yXG4gICAgICAgICAgY29uc3QgbWF4ID0gT2JqZWN0LmtleXMoYWNjKS5yZWR1Y2UoKGEsIGIpID0+IE1hdGgubWF4KGEsIGIpLCAtMSk7XG4gICAgICAgICAgdiA9IHsgW21heCArIDFdOiB2YWx1ZSB9O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgayA9IE9iamVjdC5rZXlzKHYpWzBdO1xuICAgICAgICBhY2Nba10gPSB2W2tdO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfTtcblxuICAgIGNhc2UgaXNGdW5jdGlvbihjb2xsZWN0aW9uKTpcbiAgICAgIHJldHVybiAoYWNjLCB2YWx1ZSkgPT4gY29sbGVjdGlvbihhY2MsIHZhbHVlKTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG4vKipcbiAqIFJldHVybnMgYSBmaW5hbCBmdW5jdGlvbiBmb3IgYSBjb2xsZWN0aW9uLiBUaGlzIGlzIGEgZnVuY3Rpb24gdGhhdCBwZXJmb3Jtc1xuICogYW55IGZpbmFsIHByb2Nlc3NpbmcgdGhhdCBzaG91bGQgYmUgZG9uZSBvbiB0aGUgcmVzdWx0IG9mIGEgcmVkdWN0aW9uLiBJZiB0aGVcbiAqIGNvbGxlY3Rpb24gZG9lc24ndCBzdXBwb3J0IHJlZHVjdGlvbiwgYG51bGxgIGlzIHJldHVybmVkLlxuICpcbiAqIEluIG9yZGVyIHRvIHN1cHBvcnQgdGhlIGNvbnZlcnNpb24gb2YgZnVuY3Rpb25zIGludG8gcmVkdWNlcnMsIGZ1bmN0aW9uXG4gKiBzdXBwb3J0IGlzIGFsc28gcHJvdmlkZWQuXG4gKlxuICogQHBhcmFtIHsob2JqZWN0fGZ1bmN0aW9ufGV4dGVybmFsOkl0ZXJhYmxlKX19IGNvbGxlY3Rpb24gQSBjb2xsZWN0aW9uIHRvXG4gKiAgICAgY3JlYXRlIGEgc3RlcCBmdW5jdGlvbiBmb3IuIFRoaXMgY2FuIGJlIGFueXRoaW5nIHRoYXQgc3VwcG9ydHMgdGhlXG4gKiAgICAgaXRlcmF0aW9uIHByb3RvY29sLCBhIHBsYWluIG9iamVjdCwgb3IgYSBmdW5jdGlvbi5cbiAqIEByZXR1cm4ge21vZHVsZTp4ZGNvcmUuRmluYWxGdW5jdGlvbn0gQSBmdW5jdGlvbiB0aGF0LCB3aGVuIGdpdmVuIGEgcmVkdWNlZFxuICogICAgIGNvbGxlY3Rpb24sIHByb2R1Y2VzIHRoZSBmaW5hbCBvdXRwdXQuIElmIHRoZSBwcm92aWRlZCBjb2xsZWN0aW9uIGlzIG5vdFxuICogICAgIGl0ZXJhYmxlLCBgbnVsbGAgd2lsbCBiZSByZXR1cm5lZC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGZpbmFsKGNvbGxlY3Rpb24pIHtcbiAgc3dpdGNoICh0cnVlKSB7XG4gICAgY2FzZSBpc0ltcGxlbWVudGVkKGNvbGxlY3Rpb24sIFwiZmluYWxcIik6XG4gICAgICByZXR1cm4gY29sbGVjdGlvbltwLmZpbmFsXTtcbiAgICBjYXNlIGlzU3RyaW5nKGNvbGxlY3Rpb24pOlxuICAgIGNhc2UgaXNBcnJheShjb2xsZWN0aW9uKTpcbiAgICBjYXNlIGlzT2JqZWN0KGNvbGxlY3Rpb24pOlxuICAgIGNhc2UgaXNGdW5jdGlvbihjb2xsZWN0aW9uKTpcbiAgICAgIHJldHVybiB2YWx1ZSA9PiB2YWx1ZTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgcmVkdWNlciBvYmplY3QgZnJvbSBhIGZ1bmN0aW9uIG9yIGZyb20gYSByZWR1Y2libGUgdHlwZSAoYXJyYXksXG4gKiBvYmplY3QsIHN0cmluZywgb3Igb2JqZWN0IGltcGxlbWVudGluZyB0aGUgcmVkdWNlciBwcm90b2NvbHMpLlxuICpcbiAqIFRvIGNyZWF0ZSBhIHJlZHVjZXIgZm9yIGFycmF5cywgb2JqZWN0cywgb3Igc3RyaW5ncywgc2ltcGx5IHBhc3MgYW4gZW1wdHlcbiAqIHZlcnNpb24gb2YgdGhhdCBjb2xsZWN0aW9uIHRvIHRoaXMgZnVuY3Rpb24gKGUuZy4sIGB0b1JlZHVjZXIoW10pYCkuXG4gKlxuICogVGhlIG5vdGFibGUgdXNlIGZvciB0aGlzIGZ1bmN0aW9uIHRob3VnaCBpcyB0byB0dXJuIGEgcmVkdWN0aW9uIGZ1bmN0aW9uIGludG9cbiAqIGEgcmVkdWNlciBvYmplY3QuIFRoZSBmdW5jdGlvbiBpcyBhIGZ1bmN0aW9uIG9mIHR3byBwYXJhbWV0ZXJzLCBhblxuICogYWNjdW11bGF0b3IgYW5kIGEgdmFsdWUsIGFuZCByZXR1cm5zIHRoZSBhY2N1bXVsYXRvciB3aXRoIHRoZSB2YWx1ZSBpbiBpdC5cbiAqIFRoaXMgaXMgZXhhY3RseSB0aGUgc2FtZSBraW5kIG9mIGZ1bmN0aW9uIHRoYXQgaXMgcGFzc2VkIHRvIHJlZHVjdGlvblxuICogZnVuY3Rpb25zIGxpa2UgSmF2YVNjcmlwdCdzIGBBcnJheS5wcm90b3R5cGUucmVkdWNlYCBhbmQgTG9kYXNoJ3MgYF8ucmVkdWNlYC5cbiAqXG4gKiBOb3RlIGluIHBhcnRpY3VsYXIgdGhhdCB0aGUgb3V0cHV0IG9mIHRoaXMgcmVkdWNlciBkb2VzIG5vdCBuZWVkIHRvIGJlIGFcbiAqIGNvbGxlY3Rpb24uIEl0IGNhbiBiZSBhbnl0aGluZy4gV2hpbGUgdHJhbnNkdWNpbmcgbm9ybWFsbHkgaW52b2x2ZXNcbiAqIHRyYW5zZm9ybWluZyBvbmUgY29sbGVjdGlvbiBpbnRvIGFub3RoZXIsIGl0IG5lZWQgbm90IGJlIHNvLiBGb3IgZXhhbXBsZSxcbiAqIGhlcmUgaXMgYSByZWR1Y2VyIHRoYXQgd2lsbCByZXN1bHQgaW4gc3VtbWluZyBvZiB0aGUgY29sbGVjdGlvbiB2YWx1ZXMuXG4gKlxuICogYGBgXG4gKiBpbXBvcnQgeyB0b1JlZHVjZXIsIHJlZHVjZSB9IGZyb20gXCJAY2hhbmtvL3hkY29yZVwiO1xuICpcbiAqIGNvbnN0IHN1bVJlZHVjZXIgPSB0b1JlZHVjZXIoKGFjYywgaW5wdXQpID0+IGFjYyArIGlucHV0KTtcbiAqIGNvbnN0IHN1bSA9IHJlZHVjZShbMSwgMiwgMywgNCwgNV0sIHN1bVJlZHVjZXIsIDApO1xuICogY29uc29sZS5sb2coc3VtKTsgICAvLyAtPiAxNVxuICogYGBgXG4gKlxuICogVGhpcyBjYW4gYmUgY29tYmluZWQgd2l0aCB0cmFuc2R1Y2VycyBhcyB3ZWxsLCBhcyBpbiB0aGlzIGNhbGN1bGF0aW9uIG9mIHRoZVxuICogc3VtIG9mIHRoZSAqc3F1YXJlcyogb2YgdGhlIGNvbGxlY3Rpb24gdmFsdWVzLlxuICpcbiAqIGBgYFxuICogaW1wb3J0IHsgdG9SZWR1Y2VyIH0gZnJvbSBcIkBjaGFua28veGRjb3JlXCI7XG4gKiBpbXBvcnQgeyB0cmFuc2R1Y2UsIG1hcCB9IGZyb20gXCJAY2hhbmtvL3hkdWNlXCI7XG4gKlxuICogY29uc3Qgc3VtUmVkdWNlciA9IHRvUmVkdWNlcigoYWNjLCBpbnB1dCkgPT4gYWNjICsgaW5wdXQpO1xuICogY29uc3Qgc3VtID0gdHJhbnNkdWNlKFsxLCAyLCAzLCA0LCA1XSwgbWFwKHggPT4geCAqIHgpLCBzdW1SZWR1Y2VyLCAwKTtcbiAqIGNvbnNvbGUubG9nKHN1bSk7ICAgLy8gLT4gNTVcbiAqIGBgYFxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGRjb3JlXG4gKiBAcGFyYW0geyhhcnJheXxvYmplY3R8ZnVuY3Rpb258bW9kdWxlOnhkY29yZS5SZWR1Y2VyT2JqZWN0KX0gY29sbGVjdGlvbiBBXG4gKiAgICAgcmVkdWNpYmxlIGNvbGxlY3Rpb24gb3IgYSByZWR1Y2VyIGZ1bmN0aW9uLlxuICogQHJldHVybnMge21vZHVsZTp4ZGNvcmUuUmVkdWNlck9iamVjdH0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgcHJvdG9jb2xcbiAqICAgICBwcm9wZXJ0aWVzIGZvciBgaW5pdGAsIGBzdGVwYCwgYW5kIGBmaW5hbGAuIFRoaXMgb2JqZWN0IGlzIHN1aXRhYmxlIGZvclxuICogICAgIHVzZSBhcyBhIHJlZHVjZXIgb2JqZWN0IChvbmUgcHJvdmlkZWQgdG9cbiAqICAgICBge0BsaW5rIG1vZHVsZTp4ZGNvcmUucmVkdWNlfHJlZHVjZX1gKS4gSWYgdGhlIHByb3ZpZGVkIGNvbGxlY3Rpb24gaXMgbm90XG4gKiAgICAgcmVkdWNpYmxlLCBhbGwgb2YgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBvYmplY3Qgd2lsbCBiZSBgbnVsbGAuXG4gKi9cbmZ1bmN0aW9uIHRvUmVkdWNlcihjb2xsZWN0aW9uKSB7XG4gIHJldHVybiBPYmplY3QuZnJlZXplKHtcbiAgICBbcC5pbml0XTogaW5pdChjb2xsZWN0aW9uKSxcbiAgICBbcC5zdGVwXTogc3RlcChjb2xsZWN0aW9uKSxcbiAgICBbcC5maW5hbF06IGZpbmFsKGNvbGxlY3Rpb24pXG4gIH0pO1xufVxuXG4vKipcbiAqIEEgcmVkdWNlciBvYmplY3QgZm9yIGFycmF5cy5cbiAqXG4gKiBAdHlwZSB7bW9kdWxlOnhkY29yZS5SZWR1Y2VyT2JqZWN0fVxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgQVJSQVlfUkVEVUNFUiA9IHRvUmVkdWNlcihbXSk7XG5cbi8qKlxuICogQSByZWR1Y2VyIG9iamVjdCBmb3Igb2JqZWN0cy5cbiAqXG4gKiBAdHlwZSB7bW9kdWxlOnhkY29yZS5SZWR1Y2VyT2JqZWN0fVxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgT0JKRUNUX1JFRFVDRVIgPSB0b1JlZHVjZXIoe30pO1xuXG4vKipcbiAqIEEgcmVkdWNlciBvYmplY3QgZm9yIHN0cmluZ3MuXG4gKlxuICogQHR5cGUge21vZHVsZTp4ZGNvcmUuUmVkdWNlck9iamVjdH1cbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IFNUUklOR19SRURVQ0VSID0gdG9SZWR1Y2VyKFwiXCIpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSB0cmFuc2R1Y2VyIG9iamVjdCBmcm9tIGEgZnVuY3Rpb24gYW5kIGEgcmVkdWNlciBvYmplY3QuXG4gKlxuICogVGhpcyBpcyBzaW1pbGFyIHRvIHtAbGluayBtb2R1bGU6eGRjb3JlLnRvUmVkdWNlcnx0b1JlZHVjZXJ9IGV4Y2VwdCBpbiB0d29cbiAqIHJlc3BlY3RzOlxuICpcbiAqIDEuIEl0IG9ubHkgYWNjZXB0cyBhIHJlZHVjZXIgZnVuY3Rpb24sIG5vdCBhIHJlZHVjZXIgb2JqZWN0XG4gKiAyLiBJdCBjaGFpbnMgdG8gYW5vdGhlciByZWR1Y2VyIG9iamVjdFxuICpcbiAqIFRoaXMgZnVuY3Rpb24gYXBwbGllcyB0aGUgZ2l2ZW4gZnVuY3Rpb24gYXMgdGhlIGBzdGVwYCBmdW5jdGlvbiBvZiB0aGVcbiAqIHJldHVybmVkIHRyYW5zZHVjZXIsIGFuZCB0aGUgYGluaXRgIGFuZCBgcmVzdWx0YCBmdW5jdGlvbnMgc2ltcGx5IGNhbGwgdGhlXG4gKiBzYW1lIGZ1bmN0aW9ucyBpbiB0aGUgbmV4dCByZWR1Y2VyIG9iamVjdC4gVGhpcyBpcyBwcmVjaXNlbHkgd2hhdCAqbW9zdCpcbiAqIHRyYW5zZHVjZXJzIHdhbnQ7IGBpbml0YCBhbmQgYHJlc3VsdGAgZnVuY3Rpb25zIGFyZSBub3JtYWxseSBoYW5kbGVkIGJ5IHRoZVxuICogcmVkdWNlciBhdCB0aGUgZW5kIG9mIHRoZSB0cmFuc2R1Y2VyIGNoYWluLiBJbiB0aGUgcmFyZSBjYXNlIHdoZW4gYW4gYGluaXRgXG4gKiBvciBgcmVzdWx0YCBmdW5jdGlvbiBtdXN0IGRvIG1vcmUgdGhhbiBzaW1wbHkgY2hhaW4sIHRoaXMgZnVuY3Rpb24gd2lsbCBub3RcbiAqIHdvcmsuIEdlbmVyYWxseSB0aGUgdHJhbnNkdWNlciBvYmplY3QgaXMgY3JlYXRlZCBtYW51YWxseSBpbiB0aGF0IGNhc2UuXG4gKlxuICogVGhpcyBmdW5jdGlvbiBkb2VzIG5vdCBhdXRvbWF0aWNhbGx5IGNoYWluIHRoZSBgc3RlcGAgZnVuY3Rpb24gdG8gdGhlIG5leHRcbiAqIG9uZSBkb3duIHRoZSBsaW5lLCBhcyB0aGF0IGNhbiBiZSBkb25lIGluIGFueSBudW1iZXIgb2YgZGlmZmVyZW50IHdheXMuIFRodXNcbiAqIHRoZSBmdW5jdGlvbiBpdHNlbGYgc2hvdWxkIGNhbGwgdGhlIGBzdGVwYCBmdW5jdGlvbiBpbiBgcmVkdWNlcmAgaW4gd2hhdGV2ZXJcbiAqIHdheSBpcyBhcHByb3ByaWF0ZS5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkY29yZVxuICogQHBhcmFtIHttb2R1bGU6eGRjb3JlLlN0ZXBGdW5jdGlvbn0gZm4gVGhlIHN0ZXAgZnVuY3Rpb24gZm9yIHRoZSB0cmFuc2R1Y2VyLlxuICogQHBhcmFtIHttb2R1bGU6eGRjb3JlLlJlZHVjZXJPYmplY3R9IHJlZHVjZXIgVGhlIG5leHQgdHJhbnNkdWNlciBvYmplY3QgaW5cbiAqICAgICB0aGUgY2hhaW4uXG4gKiBAcmV0dXJucyB7bW9kdWxlOnhkY29yZS5SZWR1Y2VyT2JqZWN0fSBBIG5ldyB0cmFuc2R1Y2VyLCBjaGFpbmluZyB0aGVcbiAqICAgICBzdXBwbGllZCBmdW5jdGlvbiB0byB0aGUgc3VwcGxpZWQgdHJhbnNkdWNlci5cbiAqL1xuZnVuY3Rpb24gdG9UcmFuc2R1Y2VyKGZuLCByZWR1Y2VyKSB7XG4gIHJldHVybiB7XG4gICAgW3AuaW5pdF0oKSB7XG4gICAgICByZXR1cm4gcmVkdWNlcltwLmluaXRdKCk7XG4gICAgfSxcblxuICAgIFtwLnN0ZXBdOiBmbixcblxuICAgIFtwLmZpbmFsXSh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHJlZHVjZXJbcC5maW5hbF0odmFsdWUpO1xuICAgIH1cbiAgfTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgcmVkdWNlciBmdW5jdGlvbiBmcm9tIGEgdHJhbnNkdWNlciBmdW5jdGlvbiBhbmQgYSByZWR1Y2VyLlxuICpcbiAqIFRoaXMgcHJvZHVjZXMgYSBmdW5jdGlvbiB0aGF0J3Mgc3VpdGFibGUgZm9yIGJlaW5nIHBhc3NlZCBpbnRvIG90aGVyXG4gKiBsaWJyYXJpZXMnIHJlZHVjZSBmdW5jdGlvbnMsIHN1Y2ggYXMgSmF2YVNjcmlwdCdzIGBBcnJheS5wcm90b3R5cGUucmVkdWNlYCBvclxuICogTG9kYXNoJ3MgYF8ucmVkdWNlYC4gSXQgcmVxdWlyZXMgYm90aCBhIHRyYW5zZHVjZXIgKmFuZCogYSByZWR1Y2VyIGJlY2F1c2VcbiAqIHJlZHVjdGlvbiBmdW5jdGlvbnMgZm9yIHRob3NlIGxpYnJhcmllcyBtdXN0IGtub3cgaG93IHRvIHJlZHVjZSBhcyB3ZWxsIGFzXG4gKiBob3cgdG8gdHJhbnNmb3JtLiBUaGUgcmVkdWNlciBjYW4gYmUgYSBzdGFuZGFyZCByZWR1Y2VyIG9iamVjdCBsaWtlIHRoZSBvbmVzXG4gKiBzZW50IHRvIGB7QGxpbmsgbW9kdWxlOnhkY29yZS5yZWR1Y2V8cmVkdWNlfWAsIG9yIGl0IGNhbiBiZSBhIHBsYWluIGZ1bmN0aW9uXG4gKiB0aGF0IHRha2VzIHR3byBwYXJhbWV0ZXJzIGFuZCByZXR1cm5zIHRoZSByZXN1bHQgb2YgcmVkdWNpbmcgdGhlIHNlY29uZFxuICogcGFyYW1ldGVyIGludG8gdGhlIGZpcnN0IChpLmUuLCBhIHJlZHVjZXIgZnVuY3Rpb24pLlxuICpcbiAqIElmIHRoZXJlIGlzIG5vIG5lZWQgZm9yIGEgdHJhbnNmb3JtYXRpb24sIHRoZW4gcGFzcyBpbiB0aGVcbiAqIGB7QGxpbmsgbW9kdWxlOnhkdWNlLmlkZW50aXR5fGlkZW50aXR5fWAgdHJhbnNkdWNlci5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkY29yZVxuICogQHBhcmFtIHttb2R1bGU6eGRjb3JlLlRyYW5zZHVjZXJGdW5jdGlvbn0gdHJhbnNkdWNlckZuIEEgdHJhbnNkdWNlciBmdW5jdGlvblxuICogICAgIHRoYXQgd3JhcHMgYSB0cmFuc2R1Y2VyIG9iamVjdCB3aG9zZSBgc3RlcGAgZnVuY3Rpb24gd2lsbCBiZSB1c2VkIGFzIGFcbiAqICAgICByZWR1Y2VyIGZ1bmN0aW9uLlxuICogQHBhcmFtIHsobW9kdWxlOnhkY29yZS5TdGVwRnVuY3Rpb258bW9kdWxlOnhkY29yZS5SZWR1Y2VyT2JqZWN0KX0gcmVkdWNlciBBXG4gKiAgICAgcmVkdWNlciB0aGF0IGtub3dzIGhvdyB0byByZWR1Y2UgdmFsdWVzIGludG8gYW4gb3V0cHV0IGNvbGxlY3Rpb24uIFRoaXNcbiAqICAgICBjYW4gZWl0aGVyIGJlIGEgcmVkdWNpbmcgZnVuY3Rpb24gb3IgYSByZWR1Y2VyIG9iamVjdCB3aG9zZSBgc3RlcGBcbiAqICAgICBmdW5jdGlvbiBrbm93cyBob3cgdG8gcGVyZm9ybSB0aGlzIHJlZHVjdGlvbi5cbiAqIEByZXR1cm5zIHttb2R1bGU6eGRjb3JlLlN0ZXBGdW5jdGlvbn0gQSByZWR1Y2VyIGZ1bmN0aW9uIHRoYXQgd2lsbCB0cmFuc2Zvcm1cbiAqICAgICBlbGVtZW50cyB2aWEgdGhlIHRyYW5zZHVjZXIgZnVuY3Rpb24gYW5kIHRoZW4gcmVkdWNlIHRoZW0gaW50byB3aGF0ZXZlclxuICogICAgIGtpbmQgb2YgY29sbGVjdGlvbiB0aGUgcmVkdWNlciBpbXBsZW1lbnRzLlxuICovXG5mdW5jdGlvbiB0b0Z1bmN0aW9uKHRyYW5zZHVjZXJGbiwgcmVkdWNlcikge1xuICBjb25zdCByID0gdHlwZW9mIHJlZHVjZXIgPT09IFwiZnVuY3Rpb25cIiA/IHRvUmVkdWNlcihyZWR1Y2VyKSA6IHJlZHVjZXI7XG4gIGNvbnN0IHJlc3VsdCA9IHRyYW5zZHVjZXJGbihyKTtcbiAgcmV0dXJuIHJlc3VsdFtwLnN0ZXBdLmJpbmQocmVzdWx0KTtcbn1cblxuLyoqXG4gKiBBIGNvbXBsZXRlZCB2YWx1ZS4gVGhpcyBpcyBhIHdyYXBwZXIgYXJvdW5kIHRoZSBhY3R1YWwgdmFsdWUsIHdoaWNoIGlzXG4gKiByZXRhaW5lZCBhcyBvbmUgb2YgdGhlIHByb3BlcnRpZXMsIGFsb25nIHdpdGggYSBtYXJrZXIgcHJvcGVydHkgdG8gc2hvdyB0aGF0XG4gKiB0aGlzIGlzIGEgd3JhcHBlZCB2YWx1ZS5cbiAqXG4gKiBAdHlwZWRlZiBDb21wbGV0ZWRWYWx1ZVxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZGNvcmVcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gU3ltYm9sLmZvcihcImNvbXBsZXRlZFwiKSBBIG1hcmtlciBwcm9wZXJ0eSB0byBpbmRpY2F0ZVxuICogICAgIHRoYXQgdGhpcyBpcywgaW4gZmFjdCwgYSB3cmFwcGVkIGNvbXBsZXRlZCB2YWx1ZS5cbiAqIEBwcm9wZXJ0eSB7Kn0gU3ltYm9sLmZvcihcInZhbHVlXCIpIFRoZSB3cmFwcGVkIHZhbHVlLlxuICovXG5cbi8qKlxuICogTWFya3MgYSB2YWx1ZSBhcyBjb21wbGV0ZS5cbiAqXG4gKiBUaGlzIGlzIGRvbmUgYnkgd3JhcHBpbmcgdGhlIHZhbHVlLiBUaGlzIG1lYW5zIHRocmVlIHRoaW5nczogZmlyc3QsIGFcbiAqIGNvbXBsZXRlIG9iamVjdCBtYXkgYmUgbWFya2VkIGFzIGNvbXBsZXRlIGFnYWluOyBzZWNvbmQsIGEgY29tcGxldGUgdmFsdWVcbiAqIGlzbid0IHVzYWJsZSB3aXRob3V0IGJlaW5nIHVuY29tcGxldGVkIGZpcnN0OyBhbmQgdGhpcmQgYW55IHR5cGUgb2YgdmFsdWVcbiAqIChpbmNsdWRpbmcgYHVuZGVmaW5lZGApIG1heSBiZSBtYXJrZWQgYXMgY29tcGxldGUuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZGNvcmVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGJlIGNvbXBsZXRlZC5cbiAqIEByZXR1cm4ge21vZHVsZTp4ZGNvcmUuQ29tcGxldGVkVmFsdWV9IEEgY29tcGxldGVkIHZlcnNpb24gb2YgdGhlIHByb3ZpZGVkXG4gKiAgICAgdmFsdWUuIFRoaXMgZWZmZWN0IGlzIGFjaGlldmVkIGJ5IHdyYXBwaW5nIHRoZSB2YWx1ZSBpbiBhIG1hcmtlciBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIGNvbXBsZXRlKHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgW3AuY29tcGxldGVkXTogdHJ1ZSxcbiAgICBbcC52YWx1ZV06IHZhbHVlXG4gIH07XG59XG5cbi8qKlxuICogUmVtb3ZlcyB0aGUgY29tcGxldGUgc3RhdHVzIGZyb20gYSBjb21wbGV0ZWQgdmFsdWUuXG4gKlxuICogVGhpcyBmdW5jdGlvbiBpcyBpbnRlbmRlZCB0byBiZSB1c2VkIHdoZW4gaXQncyBjZXJ0YWluIHRoYXQgYSB2YWx1ZSBpc1xuICogYWxyZWFkeSBtYXJrZWQgYXMgY29tcGxldGUuIElmIGl0IGlzIG5vdCwgYHVuZGVmaW5lZGAgd2lsbCBiZSByZXR1cm5lZFxuICogaW5zdGVhZCBvZiB0aGUgdmFsdWUuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZGNvcmVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGJlIHVuY29tcGxldGVkLlxuICogQHJldHVybiB7Kn0gQW4gdW5jb21wbGV0ZWQgdmVyc2lvbiBvZiB0aGUgcHJvdmlkZWQgdmFsdWUuIElmIHRoZSB2YWx1ZSB3YXNcbiAqICAgICBub3QgY29tcGxldGUgaW4gdGhlIGZpcnN0IHBsYWNlLCBgdW5kZWZpbmVkYCB3aWxsIGJlIHJldHVybmVkIGluc3RlYWQuXG4gKi9cbmZ1bmN0aW9uIHVuY29tcGxldGUodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlPy5bcC52YWx1ZV07XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGEgdmFsdWUgaXMgbWFya2VkIGFzIGNvbXBsZXRlLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGRjb3JlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0IGZvciBpdHMgY29tcGxldGUgc3RhdHVzLlxuICogQHJldHVybiB7Ym9vbGVhbn0gRWl0aGVyIGB0cnVlYCBpZiB0aGUgdmFsdWUgaXMgY29tcGxldGVkLCBvciBgZmFsc2VgIGlmIGl0XG4gKiAgICAgaXMgbm90LlxuICovXG5mdW5jdGlvbiBpc0NvbXBsZXRlZCh2YWx1ZSkge1xuICByZXR1cm4gISF2YWx1ZT8uW3AuY29tcGxldGVkXTtcbn1cblxuLyoqXG4gKiBNYWtlcyBzdXJlIHRoYXQgYSB2YWx1ZSBpcyBtYXJrZWQgYXMgY29tcGxldGU7IGlmIGl0IGlzIG5vdCwgaXQgd2lsbCBiZVxuICogbWFya2VkIGFzIGNvbXBsZXRlLlxuICpcbiAqIFRoaXMgZGlmZmVycyBmcm9tIHtAbGluayBtb2R1bGU6eGRjb3JlLmNvbXBsZXRlfGNvbXBsZXRlfSBpbiB0aGF0IGlmIHRoZVxuICogdmFsdWUgaXMgYWxyZWFkeSBjb21wbGV0ZSwgdGhpcyBmdW5jdGlvbiB3b24ndCBjb21wbGV0ZSBpdCBhZ2Fpbi4gVGhlcmVmb3JlXG4gKiB0aHVzIGZ1bmN0aW9uIGNhbid0IGJlIHVzZWQgdG8gbWFrZSBhIHZhbHVlIGNvbXBsZXRlIG11bHRpcGxlIHRpbWVzLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGRjb3JlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBiZSBjb21wbGV0ZWQuXG4gKiBAcmV0dXJuIHsqfSBJZiB0aGUgdmFsdWUgaXMgYWxyZWFkeSBjb21wbGV0ZSwgdGhlbiB0aGUgdmFsdWUgaXMgc2ltcGx5XG4gKiAgICAgcmV0dXJuZWQuIE90aGVyd2lzZSwgYSBjb21wbGV0ZWQgdmVyc2lvbiBvZiB0aGUgdmFsdWUgaXMgcmV0dXJuZWQuXG4gKi9cbmZ1bmN0aW9uIGVuc3VyZUNvbXBsZXRlZCh2YWx1ZSkge1xuICByZXR1cm4gaXNDb21wbGV0ZWQodmFsdWUpID8gdmFsdWUgOiBjb21wbGV0ZSh2YWx1ZSk7XG59XG5cbi8qKlxuICogUmVtb3ZlcyB0aGUgY29tcGxldGUgc3RhdHVzIGZyb20gYSB2YWx1ZSwgYXMgbG9uZyBhcyBpdCBhY3R1YWxseSBpcyBjb21wbGV0ZS5cbiAqXG4gKiBUaGlzIGRvZXMgYSBjaGVjayB0byBtYWtlIHN1cmUgdGhlIHZhbHVlIHBhc3NlZCBpbiBhY3R1YWxseSBpcyBjb21wbGV0ZS4gSWZcbiAqIGl0IGlzbid0LCB0aGUgdmFsdWUgaXRzZWxmIGlzIHJldHVybmVkLiBJdCdzIG1lYW50IHRvIGJlIHVzZWQgd2hlbiB0aGVcbiAqIGNvbXBsZXRlZCBzdGF0dXMgaXMgdW5jZXJ0YWluLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGRjb3JlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSBjb21wbGV0ZSB2YWx1ZSB0byBiZSB1bmNvbXBsZXRlZC5cbiAqIEByZXR1cm4geyp9IElmIHRoZSB2YWx1ZSBpcyBhbHJlYWR5IHVuY29tcGxldGVkLCB0aGUgdmFsdWUgaXMgc2ltcGx5XG4gKiAgICAgcmV0dXJuZWQuIE90aGVyd2lzZSBhbiB1bmNvbXBsZXRlZCB2ZXJzaW9uIG9mIHRoZSB2YWx1ZSBpcyByZXR1cm5lZC5cbiAqL1xuZnVuY3Rpb24gZW5zdXJlVW5jb21wbGV0ZWQodmFsdWUpIHtcbiAgcmV0dXJuIGlzQ29tcGxldGVkKHZhbHVlKSA/IHVuY29tcGxldGUodmFsdWUpIDogdmFsdWU7XG59XG5cbi8qKlxuICogUmVkdWNlcyB0aGUgZWxlbWVudHMgb2YgdGhlIGlucHV0IGNvbGxlY3Rpb24gdGhyb3VnaCBhIHJlZHVjZXIgaW50byBhbiBvdXRwdXRcbiAqIGNvbGxlY3Rpb24uXG4gKlxuICogVGhpcyBpcyB0aGUgbG93ZXN0LWxldmVsIG9mIHRoZSB0cmFuc2R1Y3Rpb24gZnVuY3Rpb25zLiBJbiBmYWN0LCB0aGlzIG9uZSBpc1xuICogc28gbG93LWxldmVsIHRoYXQgaXQgZG9lc24ndCBoYXZlIGEgbG90IG9mIHVzZSBpbiBub3JtYWwgb3BlcmF0aW9uLiBJdCdzIG1vcmVcbiAqIHVzZWZ1bCBmb3Igd3JpdGluZyB5b3VyIG93biB0cmFuc2Zvcm1hdGlvbiBmdW5jdGlvbnMuXG4gKlxuICogYHJlZHVjZWAgZG9lc24ndCBhc3N1bWUgdGhhdCB0aGVyZSdzIGV2ZW4gYSB0cmFuc2Zvcm1hdGlvbi4gSXQgcmVxdWlyZXMgYW5cbiAqIGluaXRpYWwgY29sbGVjdGlvbiBhbmQgYSByZWR1Y2VyIG9iamVjdCB0aGF0IGlzIG1hdGNoZWQgdG8gdGhhdCBpbml0aWFsXG4gKiBjb2xsZWN0aW9uLiBUaGUgcmVkdWNlciBvYmplY3QgbXVzdCBpbXBsZW1lbnQgdGhlIGBzdGVwYCBhbmQgYHJlc3VsdGBcbiAqIHByb3RvY29scywgd2hpY2ggaW5zdHJ1Y3QgYHJlZHVjZWAgb24gaG93IHRvIGJ1aWxkIHVwIHRoZSBjb2xsZWN0aW9uLiBUaGVcbiAqIHJlZHVjZXIgbWF5IGltcGxlbWVudCBhIHRyYW5zZm9ybWF0aW9uIGFzIHdlbGwsIGJ1dCBhbGwgdGhhdCdzIGltcG9ydGFudCBoZXJlXG4gKiBpcyB0aGF0IGl0IGNhbiBkbyB0aGUgcmVkdWN0aW9uLlxuICpcbiAqIFRoZSBpbnB1dCBjb2xsZWN0aW9uIG5lZWQgb25seSBpbXBsZW1lbnQgYGl0ZXJhYmxlYC4gSXQgaXMgbm90IG5lY2Vzc2FyeSBmb3JcbiAqIHRoZSBpbnB1dCBhbmQgb3V0cHV0IGNvbGxlY3Rpb25zIHRvIGJlIG9mIHRoZSBzYW1lIHR5cGU7IGFzIGxvbmcgYXMgdGhlIGlucHV0XG4gKiBpbXBsZW1lbnRzIGBpdGVyYWJsZWAgYW5kIHRoZSByZWR1Y2VyIGltcGxlbWVudHMgYHN0ZXBgIGFuZCBgcmVzdWx0YFxuICogYXBwcm9wcmlhdGUgdG8gdGhlIHR5cGUgb2YgdGhlIGBpbml0YCBjb2xsZWN0aW9uLCB0aGVuIGFueSB0cmFuc2xhdGlvblxuICogYmV0d2VlbiBjb2xsZWN0aW9uIHR5cGVzIGNhbiBvY2N1ci5cbiAqXG4gKiBUaGUgbm9ybWFsIGNvdXJzZSBvZiBvcGVyYXRpb24gd2lsbCBiZSB0byBjYWxsXG4gKiB7QGxpbmsgbW9kdWxlOnhkdWNlLnRyYW5zZHVjZXx0cmFuc2R1Y2V9IGluc3RlYWQsIGFzIHRoYXQgZnVuY3Rpb24gbWFrZXMgaXRcbiAqIGVhc3kgdG8gY29tYmluZSB0cmFuc2Zvcm1hdGlvbnMgd2l0aCByZWR1Y3Rpb25zIGFuZCBjYW4gb3B0aW9uYWxseSBmaWd1cmUgb3V0XG4gKiB0aGUgaW5pdGlhbCBjb2xsZWN0aW9uIGl0c2VsZi5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkY29yZVxuICogQHBhcmFtIHsqfSBjb2xsZWN0aW9uIFRoZSBpbnB1dCBjb2xsZWN0aW9uLiBUaGUgb25seSByZXF1aXJlbWVudCBvZiB0aGlzXG4gKiAgICAgY29sbGVjdGlvbiBpcyB0aGF0IGl0IGltcGxlbWVudCB0aGUgYGl0ZXJhYmxlYCBwcm90b2NvbC4gU3BlY2lhbCBzdXBwb3J0XG4gKiAgICAgaXMgcHJvdmlkZWQgYnkgdGhlIGxpYnJhcnkgZm9yIG9iamVjdHMsIHNvIHRoZXkgY2FuIGJlIHVzZWQgYXMgd2VsbC5cbiAqIEBwYXJhbSB7bW9kdWxlOnhkY29yZS5SZWR1Y2VyT2JqZWN0fSByZWR1Y2VyIEFuIG9iamVjdCB0aGF0IGltcGxlbWVudHMgdGhlXG4gKiAgICAgYHN0ZXBgIGFuZCBgcmVzdWx0YCBwcm90b2NvbHMuIFRoaXMgb2JqZWN0IG11c3Qga25vdyBob3cgdG8gcHJvZHVjZSBhblxuICogICAgIG91dHB1dCBjb2xsZWN0aW9uIHRocm91Z2ggdGhvc2UgcHJvdG9jb2wgZnVuY3Rpb25zLlxuICogQHBhcmFtIHsqfSBpbml0IGEgY29sbGVjdGlvbiBvZiB0aGUgc2FtZSB0eXBlIGFzIHRoZSBvdXRwdXQgY29sbGVjdGlvbi4gSXRcbiAqICAgICBuZWVkIG5vdCBiZSBlbXB0eTsgaWYgaXQgaXMgbm90LCB0aGUgZXhpc3RpbmcgZWxlbWVudHMgYXJlIHJldGFpbmVkIGFzXG4gKiAgICAgdGhlIGlucHV0IGNvbGxlY3Rpb24gaXMgcmVkdWNlZCBpbnRvIGl0LlxuICogQHJldHVybiB7Kn0gQSBuZXcgY29sbGVjdGlvbiwgY29uc2lzdGluZyBvZiB0aGUgYGluaXRgIGNvbGxlY3Rpb24gd2l0aCBhbGwgb2ZcbiAqICAgICB0aGUgZWxlbWVudHMgb2YgdGhlIGBjb2xsZWN0aW9uYCBjb2xsZWN0aW9uIHJlZHVjZWQgaW50byBpdC5cbiAqL1xuZnVuY3Rpb24gcmVkdWNlKGNvbGxlY3Rpb24sIHJlZHVjZXIsIGluaXQpIHtcbiAgaWYgKGNvbGxlY3Rpb24gPT0gbnVsbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3QgaXRlciA9IGl0ZXJhdG9yKGNvbGxlY3Rpb24pO1xuICBpZiAoIWl0ZXIpIHtcbiAgICB0aHJvdyBFcnJvcihgQ2Fubm90IHJlZHVjZSBhbiBpbnN0YW5jZSBvZiAke2NvbGxlY3Rpb24uY29uc3RydWN0b3IubmFtZX1gKTtcbiAgfVxuXG4gIGxldCBhY2MgPSBpbml0O1xuICBsZXQgc3RlcCA9IGl0ZXIubmV4dCgpO1xuXG4gIHdoaWxlICghc3RlcC5kb25lKSB7XG4gICAgYWNjID0gcmVkdWNlcltwLnN0ZXBdKGFjYywgc3RlcC52YWx1ZSk7XG4gICAgaWYgKGlzQ29tcGxldGVkKGFjYykpIHtcbiAgICAgIGFjYyA9IHVuY29tcGxldGUoYWNjKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBzdGVwID0gaXRlci5uZXh0KCk7XG4gIH1cblxuICByZXR1cm4gcmVkdWNlcltwLmZpbmFsXShhY2MpO1xufVxuXG5leHBvcnQge1xuICBpbml0LFxuICBzdGVwLFxuICBmaW5hbCxcbiAgdG9SZWR1Y2VyLFxuICBBUlJBWV9SRURVQ0VSLFxuICBPQkpFQ1RfUkVEVUNFUixcbiAgU1RSSU5HX1JFRFVDRVIsXG4gIHRvVHJhbnNkdWNlcixcbiAgdG9GdW5jdGlvbixcbiAgY29tcGxldGUsXG4gIHVuY29tcGxldGUsXG4gIGlzQ29tcGxldGVkLFxuICBlbnN1cmVDb21wbGV0ZWQsXG4gIGVuc3VyZVVuY29tcGxldGVkLFxuICByZWR1Y2Vcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuLyoqXG4gKiBBIGJ1bmNoIG9mIHV0aWxpdHkgZnVuY3Rpb25zLiBUaGVzZSBhcmUgYWxsIHVzZWQgYnkgdGhlIGxpYnJhcnkgaXRzZWxmIGluXG4gKiBwbGFjZXMsIGJ1dCBtYW55IG9mIHRoZW0gYXJlIHN1aXRhYmxlIGZvciBnZW5lcmFsIHVzZSBhcyB3ZWxsLlxuICogXlxuICogQG1vZHVsZSB4ZGNvcmUvdXRpbHNcbiAqIEBwcml2YXRlXG4gKi9cblxuLyoqXG4gKiBgT2JqZWN0YCdzIGB0b1N0cmluZ2AgaXMgZXhwbGljaXRseSB1c2VkIHRocm91Z2hvdXQgYmVjYXVzZSBpdCBjb3VsZCBiZVxuICogcmVkZWZpbmVkIGluIGFueSBzdWJ0eXBlIG9mIGBPYmplY3RgLlxuICpcbiAqIEBmdW5jdGlvbiB0b1N0cmluZ1xuICogQHByaXZhdGVcbiAqL1xuY29uc3QgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhIHZhbHVlIGlzIGEgZnVuY3Rpb24uXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZGNvcmVcbiAqIEBwYXJhbSB7Kn0geCBUaGUgdmFsdWUgYmVpbmcgdGVzdGVkIHRvIHNlZSBpZiBpdCBpcyBhIGZ1bmN0aW9uLlxuICogQHJldHVybiB7Ym9vbGVhbn0gRWl0aGVyIGB0cnVlYCBpZiB0aGUgdGVzdCB2YWx1ZSBpcyBhIGZ1bmN0aW9uIG9yIGBmYWxzZWAgaWZcbiAqICAgICBpdCBpcyBub3QuXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24oeCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh4KSA9PT0gXCJbb2JqZWN0IEZ1bmN0aW9uXVwiO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhIHZhbHVlIGlzIGEgZ2VuZXJhdG9yIGZ1bmN0aW9uLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGRjb3JlXG4gKiBAcGFyYW0geyp9IHggVGhlIHZhbHVlIGJlaW5nIHRlc3RlZCB0byBzZWUgaWYgaXQgaXMgYSBnZW5lcmF0b3IgZnVuY3Rpb24uXG4gKiBAcmV0dXJuIHtib29sZWFufSBFaXRoZXIgYHRydWVgIGlmIHRoZSB0ZXN0IHZhbHVlIGlzIGEgZ2VuZXJhdG9yIGZ1bmN0aW9uIG9yXG4gKiAgICAgYGZhbHNlYCBpZiBpdCBpcyBub3QuXG4gKi9cbmZ1bmN0aW9uIGlzR2VuZXJhdG9yRnVuY3Rpb24oeCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh4KSA9PT0gXCJbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXVwiO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhIHZhbHVlIGlzIGEgcGxhaW4gb2JqZWN0LlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gcmV0dXJucyBgZmFsc2VgIGlmIHRoZSB2YWx1ZSBpcyBhbnkgb3RoZXIgc29ydCBvZiBidWlsdC1pblxuICogb2JqZWN0IChzdWNoIGFzIGFuIGFycmF5IG9yIGEgc3RyaW5nKS4gSXQgYWxzbyByZXR1cm5zIGBmYWxzZWAgZm9yIGFueSBvYmplY3RcbiAqIHRoYXQgaXMgY3JlYXRlZCBieSBhIGNvbnN0cnVjdG9yIHRoYXQgaXMgbm90IGBPYmplY3RgJ3MgY29uc3RydWN0b3IsIG1lYW5pbmdcbiAqIHRoYXQgXCJpbnN0YW5jZXNcIiBvZiBjdXN0b20gXCJjbGFzc2VzXCIgd2lsbCByZXR1cm4gYGZhbHNlYC4gVGhlcmVmb3JlIGl0J3Mgb25seVxuICogZ29pbmcgdG8gcmV0dXJuIGB0cnVlYCBmb3IgbGl0ZXJhbCBvYmplY3RzIG9yIHRob3NlIGNyZWF0ZWQgd2l0aFxuICogYE9iamVjdC5jcmVhdGUoKWAuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZGNvcmVcbiAqIEBwYXJhbSB7Kn0geCBUaGUgdmFsdWUgYmVpbmcgdGVzdGVkIHRvIHNlZSBpZiBpdCBpcyBhIHBsYWluIG9iamVjdC5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IEVpdGhlciBgdHJ1ZWAgaWYgdGhlIHRlc3QgdmFsdWUgaXMgYSBwbGFpbiBvYmplY3Qgb3JcbiAqICAgICBgZmFsc2VgIGlmIGl0IGlzIG5vdC5cbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QoeCkge1xuICAvLyBUaGlzIGNoZWNrIGV4Y2x1ZGVzIGJ1aWx0LWluIG5vbi1PYmplY3Qgb2JqZWN0cyAoc3VjaCBhcyBBcnJheSBhbmQgU3RyaW5nKS5cbiAgLy8gSXQgYWxzbyBleGNsdWRlcyBvYmplY3RzIGNyZWF0ZWQgZnJvbSBFUzIwMTUgY2xhc3NlcywgYnV0IGl0IGRvZXMgbm90XG4gIC8vIGV4Y2x1ZGUgb2JqZWN0cyBjcmVhdGVkIHdpdGggYG5ld2Agb24gY29uc3RydWN0b3IgZnVuY3Rpb25zICh0aGF0IGhhcHBlbnNcbiAgLy8gYmVsb3cpLlxuICBpZiAodG9TdHJpbmcuY2FsbCh4KSAhPT0gXCJbb2JqZWN0IE9iamVjdF1cIikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIFByb3RvdHlwZS1sZXNzIG9iamVjdHMgKGNyZWF0ZWQgd2l0aCBgT2JqZWN0LmNyZWF0ZShudWxsKSlgIHBhc3NcbiAgY29uc3QgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoeCk7XG4gIGlmIChwcm90byA9PT0gbnVsbCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLy8gQ2hlY2sgdG8gc2VlIHdoZXRoZXIgdGhlIGNvbnN0cnVjdG9yIG9mIHRoZSB0ZXN0ZWQgb2JqZWN0IGlzIHRoZSBPYmplY3RcbiAgLy8gY29uc3RydWN0b3IuIFRoaXMgaXMgdGhlIG9ubHkgY29uc3RydWN0b3IgdGhhdCBwcm9kdWNlcyBhIFwicGxhaW5cIiBvYmplY3QuXG4gIGNvbnN0IGN0b3IgPVxuICAgIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwcm90bywgXCJjb25zdHJ1Y3RvclwiKSAmJlxuICAgIHByb3RvLmNvbnN0cnVjdG9yO1xuICByZXR1cm4gdHlwZW9mIGN0b3IgPT09IFwiZnVuY3Rpb25cIiAmJiBjdG9yID09PSBPYmplY3Q7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGEgdmFsdWUgaXMgYSBjb25jcmV0ZSBudW1iZXIuXG4gKlxuICogVGhpcyBmdW5jdGlvbiB3aWxsIHJldHVybiBgdHJ1ZWAgZm9yIGFueSBudW1iZXIgbGl0ZXJhbCBvciBpbnN0YW5jZSBvZlxuICogYE51bWJlcmAgZXhjZXB0IGZvciBgSW5maW5pdHlgIG9yIGBOYU5gLiBJdCB3aWxsIHJldHVybiBgZmFsc2VgIGZvciBzdHJpbmdzXG4gKiB0aGF0IGhhcHBlbiB0byBhbHNvIGJlIG51bWJlcnM7IHRoZSB2YWx1ZSBtdXN0IGJlIGFuIGFjdHVhbCBgTnVtYmVyYCBpbnN0YW5jZVxuICogb3IgbnVtYmVyIGxpdGVyYWwgdG8gcmV0dXJuIGB0cnVlYC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkY29yZVxuICogQHBhcmFtIHsqfSB4IFRoZSB2YWx1ZSBiZWluZyB0ZXN0ZWQgdG8gc2VlIGlmIGl0IGlzIGEgbnVtYmVyLlxuICogQHJldHVybiB7Ym9vbGVhbn0gRWl0aGVyIGB0cnVlYCBpZiB0aGUgdGVzdCB2YWx1ZSBpcyBhIGZpbml0ZSBudW1iZXIgKG5vdFxuICogICAgIGluY2x1ZGluZyBzdHJpbmcgcmVwcmVzZW50YXRpb25zIG9mIG51bWJlcnMpIG9yIGBmYWxzZWAgaWYgaXQgaXMgbm90LlxuICovXG5mdW5jdGlvbiBpc051bWJlcih4KSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHgpID09PSBcIltvYmplY3QgTnVtYmVyXVwiICYmIGlzRmluaXRlKHgpO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhIHZhbHVlIGlzIGEgc3RyaW5nLlxuICpcbiAqIExpdGVyYWwgc3RyaW5ncyB3aWxsIHJldHVybiBgdHJ1ZWAsIGFzIHdpbGwgaW5zdGFuY2VzIG9mIHRoZSBgU3RyaW5nYCBvYmplY3QuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZGNvcmVcbiAqIEBwYXJhbSB7Kn0geCBUaGUgdmFsdWUgYmVpbmcgdGVzdGVkIHRvIHNlZSBpZiBpdCBpcyBhIHN0cmluZy5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IEVpdGhlciBgdHJ1ZWAgaWYgdGhlIHRlc3QgdmFsdWUgaXMgYSBzdHJpbmcgb3IgYGZhbHNlYCBpZlxuICogICAgaXQgaXMgbm90LlxuICovXG5mdW5jdGlvbiBpc1N0cmluZyh4KSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHgpID09PSBcIltvYmplY3QgU3RyaW5nXVwiO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhIHZhbHVlIGlzIGFuIGFycmF5LlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gbWVyZWx5IGRlbGVnYXRlcyB0byBgQXJyYXkuaXNBcnJheWAuIEl0IGlzIHByb3ZpZGVkIGZvclxuICogY29uc2lzdGVuY3kgaW4gY2FsbGluZyBzdHlsZSBvbmx5LlxuICpcbiAqIEBmdW5jdGlvbiBpc0FycmF5XG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkY29yZVxuICogQHBhcmFtIHsqfSB4IFRoZSB2YWx1ZSBiZWluZyB0ZXN0ZWQgdG8gc2VlIGlmIGl0IGlzIGFuIGFycmF5LlxuICogQHJldHVybiB7Ym9vbGVhbn0gRWl0aGVyIGB0cnVlYCBpZiB0aGUgdGVzdCB2YWx1ZSBpcyBhbiBhcnJheSBvciBgZmFsc2VgIGlmXG4gKiAgICAgaXQgaXMgbm90LlxuICovXG5jb25zdCBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxuZXhwb3J0IHtcbiAgaXNGdW5jdGlvbixcbiAgaXNHZW5lcmF0b3JGdW5jdGlvbixcbiAgaXNPYmplY3QsXG4gIGlzTnVtYmVyLFxuICBpc1N0cmluZyxcbiAgaXNBcnJheVxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=