(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["chanko"] = factory();
	else
		root["chanko"] = factory();
})(window, function() {
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

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: fixed, dropping, sliding, CLOSED, chan, timedChan, transChan, send, recv, sendAsync, recvAsync, recvOrThrow, close, isClosed, isBuffered, isTimed, config, SET_IMMEDIATE, MESSAGE_CHANNEL, SET_TIMEOUT, go, sleep, EMPTY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var modules_buffer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! modules/buffer */ "./src/modules/buffer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fixed", function() { return modules_buffer__WEBPACK_IMPORTED_MODULE_0__["fixed"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dropping", function() { return modules_buffer__WEBPACK_IMPORTED_MODULE_0__["dropping"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sliding", function() { return modules_buffer__WEBPACK_IMPORTED_MODULE_0__["sliding"]; });

/* harmony import */ var modules_channel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! modules/channel */ "./src/modules/channel/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CLOSED", function() { return modules_channel__WEBPACK_IMPORTED_MODULE_1__["CLOSED"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chan", function() { return modules_channel__WEBPACK_IMPORTED_MODULE_1__["chan"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timedChan", function() { return modules_channel__WEBPACK_IMPORTED_MODULE_1__["timedChan"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transChan", function() { return modules_channel__WEBPACK_IMPORTED_MODULE_1__["transChan"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "send", function() { return modules_channel__WEBPACK_IMPORTED_MODULE_1__["send"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recv", function() { return modules_channel__WEBPACK_IMPORTED_MODULE_1__["recv"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sendAsync", function() { return modules_channel__WEBPACK_IMPORTED_MODULE_1__["sendAsync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recvAsync", function() { return modules_channel__WEBPACK_IMPORTED_MODULE_1__["recvAsync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recvOrThrow", function() { return modules_channel__WEBPACK_IMPORTED_MODULE_1__["recvOrThrow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "close", function() { return modules_channel__WEBPACK_IMPORTED_MODULE_1__["close"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isClosed", function() { return modules_channel__WEBPACK_IMPORTED_MODULE_1__["isClosed"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isBuffered", function() { return modules_channel__WEBPACK_IMPORTED_MODULE_1__["isBuffered"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isTimed", function() { return modules_channel__WEBPACK_IMPORTED_MODULE_1__["isTimed"]; });

/* harmony import */ var modules_dispatcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! modules/dispatcher */ "./src/modules/dispatcher.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "config", function() { return modules_dispatcher__WEBPACK_IMPORTED_MODULE_2__["config"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SET_IMMEDIATE", function() { return modules_dispatcher__WEBPACK_IMPORTED_MODULE_2__["SET_IMMEDIATE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MESSAGE_CHANNEL", function() { return modules_dispatcher__WEBPACK_IMPORTED_MODULE_2__["MESSAGE_CHANNEL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SET_TIMEOUT", function() { return modules_dispatcher__WEBPACK_IMPORTED_MODULE_2__["SET_TIMEOUT"]; });

/* harmony import */ var modules_process__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! modules/process */ "./src/modules/process.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "go", function() { return modules_process__WEBPACK_IMPORTED_MODULE_3__["go"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sleep", function() { return modules_process__WEBPACK_IMPORTED_MODULE_3__["sleep"]; });

/* harmony import */ var modules_queue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! modules/queue */ "./src/modules/queue.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EMPTY", function() { return modules_queue__WEBPACK_IMPORTED_MODULE_4__["EMPTY"]; });

/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */






/***/ }),

/***/ "./src/modules/buffer.js":
/*!*******************************!*\
  !*** ./src/modules/buffer.js ***!
  \*******************************/
/*! exports provided: isBuffer, fixed, dropping, sliding, queue, size, count, isFull, add, remove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBuffer", function() { return isBuffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fixed", function() { return fixed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dropping", function() { return dropping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sliding", function() { return sliding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queue", function() { return queue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "size", function() { return size; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "count", function() { return count; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFull", function() { return isFull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony import */ var modules_queue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! modules/queue */ "./src/modules/queue.js");
/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

const BUFFER = Symbol("buffer");
const FIXED = Symbol("fixed");
const DROPPING = Symbol("dropping");
const SLIDING = Symbol("sliding");

function isBuffer(obj) {
  return !!(obj === null || obj === void 0 ? void 0 : obj[BUFFER]);
}

function fixed(size) {
  return Object.create(null, {
    queue: {
      value: Object(modules_queue__WEBPACK_IMPORTED_MODULE_0__["queue"])()
    },
    size: {
      value: size
    },
    [BUFFER]: {
      value: FIXED
    }
  });
}

function dropping(size) {
  return Object.create(null, {
    queue: {
      value: Object(modules_queue__WEBPACK_IMPORTED_MODULE_0__["queue"])()
    },
    size: {
      value: size
    },
    [BUFFER]: {
      value: DROPPING
    }
  });
}

function sliding(size) {
  return Object.create(null, {
    queue: {
      value: Object(modules_queue__WEBPACK_IMPORTED_MODULE_0__["queue"])()
    },
    size: {
      value: size
    },
    [BUFFER]: {
      value: SLIDING
    }
  });
}

function queue(buffer) {
  return buffer.queue;
}

function size(buffer) {
  return buffer.size;
}

function count(buffer) {
  return Object(modules_queue__WEBPACK_IMPORTED_MODULE_0__["count"])(buffer.queue);
}

function isFull(buffer) {
  return buffer[BUFFER] === FIXED ? Object(modules_queue__WEBPACK_IMPORTED_MODULE_0__["count"])(buffer.queue) >= buffer.size : false;
}

function add(buffer, ...items) {
  switch (buffer[BUFFER]) {
    case FIXED:
      for (const item of items) {
        Object(modules_queue__WEBPACK_IMPORTED_MODULE_0__["enqueue"])(buffer.queue, item);
      }

      break;

    case DROPPING:
      for (const item of items) {
        if (count(buffer) < size(buffer)) {
          Object(modules_queue__WEBPACK_IMPORTED_MODULE_0__["enqueue"])(buffer.queue, item);
        }
      }

      break;

    case SLIDING:
      for (const item of items) {
        if (count(buffer) >= size(buffer)) {
          Object(modules_queue__WEBPACK_IMPORTED_MODULE_0__["dequeue"])(buffer.queue);
        }

        Object(modules_queue__WEBPACK_IMPORTED_MODULE_0__["enqueue"])(buffer.queue, item);
      }

      break;

    default:
      return;
  }
}

function remove(buffer) {
  return Object(modules_queue__WEBPACK_IMPORTED_MODULE_0__["dequeue"])(buffer.queue);
}



/***/ }),

/***/ "./src/modules/channel/handler.js":
/*!****************************************!*\
  !*** ./src/modules/channel/handler.js ***!
  \****************************************/
/*! exports provided: CLOSED, MAX_DIRTY, MAX_QUEUED, channel, handleSend, handleRecv, close */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLOSED", function() { return CLOSED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_DIRTY", function() { return MAX_DIRTY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_QUEUED", function() { return MAX_QUEUED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "channel", function() { return channel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleSend", function() { return handleSend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleRecv", function() { return handleRecv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "close", function() { return close; });
/* harmony import */ var modules_protocol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! modules/protocol */ "./src/modules/protocol.js");
/* harmony import */ var modules_queue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! modules/queue */ "./src/modules/queue.js");
/* harmony import */ var modules_buffer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! modules/buffer */ "./src/modules/buffer.js");
/* harmony import */ var modules_dispatcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! modules/dispatcher */ "./src/modules/dispatcher.js");
/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */




const MAX_DIRTY = 64;
const MAX_QUEUED = 1024;
const BOX = Symbol("box");
const CLOSED = Symbol("closed");

function isReduced(value) {
  return !!(value === null || value === void 0 ? void 0 : value[modules_protocol__WEBPACK_IMPORTED_MODULE_0__["protocols"].reduced]);
}

function box(value) {
  return Object.create(null, {
    value: {
      value,
      writable: true
    },
    [BOX]: {
      value: true
    }
  });
}

function sendBox(value, handler) {
  return Object.create(null, {
    value: {
      value,
      writable: true
    },
    handler: {
      value: handler
    },
    [BOX]: {
      value: true
    }
  });
}

function channel(buffer, xform, maxDirty = MAX_DIRTY, maxQueued = MAX_QUEUED) {
  return Object.create(null, {
    buffer: {
      value: buffer
    },
    xform: {
      value: xform
    },
    maxDirty: {
      value: maxDirty
    },
    maxQueued: {
      value: maxQueued
    },
    recvs: {
      value: Object(modules_queue__WEBPACK_IMPORTED_MODULE_1__["queue"])()
    },
    sends: {
      value: Object(modules_queue__WEBPACK_IMPORTED_MODULE_1__["queue"])()
    },
    dirtyRecvs: {
      value: 0,
      writable: true
    },
    dirtySends: {
      value: 0,
      writable: true
    },
    closed: {
      value: false,
      writable: true
    }
  });
}

function handleSend(impl, value, handler) {
  if (value === CLOSED) {
    throw Error("Cannot send CLOSED to a channel");
  }

  if (impl.closed) {
    handler.commit();
    return box(false);
  }

  let receiver, callback; // Push the incoming value through the buffer, even if there's already a
  // receiver waiting for the value. This is to make sure that the transducer
  // step function has a chance to act on the value first, which could change
  // the value or make it altogether unavailable.
  //
  // If the channel is unbuffered this process is skipped (there can't be a
  // transducer on an unbuffered channel anyway). If the buffer is full, the
  // transducer's work is deferred until later when the buffer is not full.

  if (impl.buffer && !Object(modules_buffer__WEBPACK_IMPORTED_MODULE_2__["isFull"])(impl.buffer)) {
    handler.commit();
    const done = isReduced(impl.xform[modules_protocol__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](impl.buffer, value));

    for (;;) {
      if (Object(modules_buffer__WEBPACK_IMPORTED_MODULE_2__["count"])(impl.buffer) === 0) {
        break;
      }

      receiver = Object(modules_queue__WEBPACK_IMPORTED_MODULE_1__["dequeue"])(impl.recvs);

      if (receiver === modules_queue__WEBPACK_IMPORTED_MODULE_1__["EMPTY"]) {
        break;
      }

      if (receiver.active) {
        callback = receiver.commit();
        const val = Object(modules_buffer__WEBPACK_IMPORTED_MODULE_2__["remove"])(impl.buffer);

        if (callback) {
          Object(modules_dispatcher__WEBPACK_IMPORTED_MODULE_3__["dispatch"])(() => callback(val));
        }
      }
    }

    if (done) {
      close(impl);
    }

    return box(true);
  } // This loop happens if the channel is unbuffered and there is at least one
  // pending receive. (Buffered channels break out of this loop immediately,
  // because in order for a buffered channel to reach this point, its buffer
  // must have been full. If the buffer is full, that means there are no pending
  // receives and the first one read will be EMPTY.) It processes the next
  // pending receive immediately.


  for (;;) {
    receiver = Object(modules_queue__WEBPACK_IMPORTED_MODULE_1__["dequeue"])(impl.recvs);

    if (receiver === modules_queue__WEBPACK_IMPORTED_MODULE_1__["EMPTY"]) {
      break;
    }

    if (receiver.active) {
      handler.commit();
      callback = receiver.commit();

      if (callback) {
        Object(modules_dispatcher__WEBPACK_IMPORTED_MODULE_3__["dispatch"])(() => callback(value));
      }

      return box(true);
    }
  } // If there are no pending receives on an unbuffered channel, or on a buffered
  // channel with a full buffer, we queue the send to tlet it wait for a receive
  // to become available. Sends whose handlers have gone inactive (which happens
  // if they were processed as part of a `select` call) are periodically purged.


  if (impl.dirtySends > impl.maxDirty) {
    Object(modules_queue__WEBPACK_IMPORTED_MODULE_1__["filter"])(impl.sends, sender => sender.handler.active);
    impl.dirtySends = 0;
  } else {
    impl.dirtySends++;
  }

  if (Object(modules_queue__WEBPACK_IMPORTED_MODULE_1__["count"])(impl.sends) >= impl.maxQueued) {
    throw Error(`No more than ${impl.maxQueued} pending sends are allowed on a single channel`);
  }

  Object(modules_queue__WEBPACK_IMPORTED_MODULE_1__["enqueue"])(impl.sends, sendBox(value, handler));
  return null;
}

function handleRecv(impl, handler) {
  let sender, sendHandler, callback; // Runs if the channel is buffered and the buffered is not empty (an empty
  // buffer means there are no pending sends). We immediately process any sends
  // that were queued when there were no pending receives, up until the buffer
  // is filled with sent values.

  if (impl.buffer && Object(modules_buffer__WEBPACK_IMPORTED_MODULE_2__["count"])(impl.buffer) > 0) {
    handler.commit();
    const value = Object(modules_buffer__WEBPACK_IMPORTED_MODULE_2__["remove"])(impl.buffer);

    for (;;) {
      if (Object(modules_buffer__WEBPACK_IMPORTED_MODULE_2__["isFull"])(impl.buffer)) {
        break;
      }

      sender = Object(modules_queue__WEBPACK_IMPORTED_MODULE_1__["dequeue"])(impl.sends);

      if (sender === modules_queue__WEBPACK_IMPORTED_MODULE_1__["EMPTY"]) {
        break;
      }

      sendHandler = sender.handler;

      if (sendHandler.active) {
        callback = sendHandler.commit();

        if (callback) {
          Object(modules_dispatcher__WEBPACK_IMPORTED_MODULE_3__["dispatch"])(() => callback(true));
        }

        if (isReduced(impl.xform[modules_protocol__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](impl.buffer, sender.value))) {
          close(impl);
        }
      }
    }

    return box(value);
  } // This loop runs on an unbuffered channel if there are any pending sends.
  // (Buffered channels break out of this loop immediately because in order to
  // have come this far without returning, the channel's buffer must have been
  // empty. An empty buffer means there are no pending sends, so the first
  // pending send read from it will be EMPTY.) It processes the next pending
  // send immediately.


  for (;;) {
    sender = Object(modules_queue__WEBPACK_IMPORTED_MODULE_1__["dequeue"])(impl.sends);

    if (sender === modules_queue__WEBPACK_IMPORTED_MODULE_1__["EMPTY"]) {
      break;
    }

    sendHandler = sender.handler;

    if (sendHandler.active) {
      callback = sendHandler.commit();

      if (callback) {
        Object(modules_dispatcher__WEBPACK_IMPORTED_MODULE_3__["dispatch"])(() => callback(true));
      }

      return box(sender.value);
    }
  } // If we've exhausted all of our pending sends and the channel is marked
  // closed, we can finally reutrn the fact that the channel is closed. This
  // ensures that any sends that were already pending on the channel are
  // processed before closure, even if the channel was closed before that could
  // happen.


  if (impl.closed) {
    handler.commit();
    return box(CLOSED);
  } // If an unbuffered channel or a buffered channel with an empty buffer has no
  // pending sends, and if the channel is still open, the receive is queued to
  // be processed when a send is available. Receives whose handlers have gone
  // inactive as the result of `select` processing are periodically purged.


  if (impl.dirtyRecvs > impl.maxDirty) {
    Object(modules_queue__WEBPACK_IMPORTED_MODULE_1__["filter"])(impl.recvs, receiver => receiver.active);
    impl.dirtyRecvs = 0;
  } else {
    impl.dirtyRecvs++;
  }

  if (Object(modules_queue__WEBPACK_IMPORTED_MODULE_1__["count"])(impl.recvs) >= impl.maxQueued) {
    throw Error(`No more than ${impl.maxQueued} pending receives are allowed on a single channel`);
  }

  Object(modules_queue__WEBPACK_IMPORTED_MODULE_1__["enqueue"])(impl.recvs, handler);
  return null;
}

function close(impl) {
  if (impl.closed) {
    return;
  }

  impl.closed = true;
  let receiver, sender, callback; // If there is a buffer and it has at least one value in it, send those values
  // to any pending receives that might still be queued.

  if (impl.buffer) {
    impl.xform[modules_protocol__WEBPACK_IMPORTED_MODULE_0__["protocols"].result](impl.buffer);

    for (;;) {
      if (Object(modules_buffer__WEBPACK_IMPORTED_MODULE_2__["count"])(impl.buffer) === 0) {
        break;
      }

      receiver = Object(modules_queue__WEBPACK_IMPORTED_MODULE_1__["dequeue"])(impl.recvs);

      if (receiver === modules_queue__WEBPACK_IMPORTED_MODULE_1__["EMPTY"]) {
        break;
      }

      if (receiver.active) {
        callback = receiver.commit();
        const value = Object(modules_buffer__WEBPACK_IMPORTED_MODULE_2__["remove"])(impl.buffer);

        if (callback) {
          Object(modules_dispatcher__WEBPACK_IMPORTED_MODULE_3__["dispatch"])(() => callback(value));
        }
      }
    }
  } // Once the buffer is empty (or if there isn't a buffer at all), send CLOSED
  // to all remaining queued receives.


  for (;;) {
    receiver = Object(modules_queue__WEBPACK_IMPORTED_MODULE_1__["dequeue"])(impl.recvs);

    if (receiver === modules_queue__WEBPACK_IMPORTED_MODULE_1__["EMPTY"]) {
      break;
    }

    if (receiver.active) {
      callback = receiver.commit();

      if (callback) {
        Object(modules_dispatcher__WEBPACK_IMPORTED_MODULE_3__["dispatch"])(() => callback(CLOSED));
      }
    }
  } // Send `false` to any remaining queued sends.


  for (;;) {
    sender = Object(modules_queue__WEBPACK_IMPORTED_MODULE_1__["dequeue"])(impl.sends);

    if (sender === modules_queue__WEBPACK_IMPORTED_MODULE_1__["EMPTY"]) {
      break;
    }

    if (sender.handler.active) {
      callback = sender.handler.commit();

      if (callback) {
        Object(modules_dispatcher__WEBPACK_IMPORTED_MODULE_3__["dispatch"])(() => callback(false));
      }
    }
  }
}



/***/ }),

/***/ "./src/modules/channel/index.js":
/*!**************************************!*\
  !*** ./src/modules/channel/index.js ***!
  \**************************************/
/*! exports provided: CLOSED, chan, timedChan, transChan, isClosed, isBuffered, isTimed, sendAsync, recvAsync, send, recv, recvOrThrow, close */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chan", function() { return chan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timedChan", function() { return timedChan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transChan", function() { return transChan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isClosed", function() { return isClosed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBuffered", function() { return isBuffered; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTimed", function() { return isTimed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendAsync", function() { return sendAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recvAsync", function() { return recvAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "send", function() { return send; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recv", function() { return recv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recvOrThrow", function() { return recvOrThrow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "close", function() { return close; });
/* harmony import */ var _handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handler */ "./src/modules/channel/handler.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CLOSED", function() { return _handler__WEBPACK_IMPORTED_MODULE_0__["CLOSED"]; });

/* harmony import */ var modules_buffer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! modules/buffer */ "./src/modules/buffer.js");
/* harmony import */ var modules_protocol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! modules/protocol */ "./src/modules/protocol.js");
// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT




const DEFAULT_HANDLER = () => _handler__WEBPACK_IMPORTED_MODULE_0__["CLOSED"];

function opHandler(fn) {
  return Object.create(null, {
    active: {
      value: true
    },
    commit: {
      value: () => fn
    }
  });
}

function handleException(buffer, handler, ex) {
  const value = handler(ex);

  if (value !== _handler__WEBPACK_IMPORTED_MODULE_0__["CLOSED"]) {
    Object(modules_buffer__WEBPACK_IMPORTED_MODULE_1__["add"])(buffer, value);
  }

  return buffer;
}

function handlerTransducer(xform, handler = DEFAULT_HANDLER) {
  return {
    [modules_protocol__WEBPACK_IMPORTED_MODULE_2__["protocols"].step](buffer, input) {
      try {
        return xform[modules_protocol__WEBPACK_IMPORTED_MODULE_2__["protocols"].step](buffer, input);
      } catch (ex) {
        return handleException(buffer, handler, ex);
      }
    },

    [modules_protocol__WEBPACK_IMPORTED_MODULE_2__["protocols"].result](buffer) {
      try {
        return xform[modules_protocol__WEBPACK_IMPORTED_MODULE_2__["protocols"].result](buffer);
      } catch (ex) {
        return handleException(buffer, handler, ex);
      }
    }

  };
}

const bufferReducer = {
  [modules_protocol__WEBPACK_IMPORTED_MODULE_2__["protocols"].init]() {
    throw Error("init not available");
  },

  [modules_protocol__WEBPACK_IMPORTED_MODULE_2__["protocols"].step](buffer, input) {
    Object(modules_buffer__WEBPACK_IMPORTED_MODULE_1__["add"])(buffer, input);
    return buffer;
  },

  [modules_protocol__WEBPACK_IMPORTED_MODULE_2__["protocols"].result](buffer) {
    return buffer;
  }

};

function parseArgs(buffer, options, defaultOptions) {
  let buf;
  let opts;

  if (!buffer) {
    // same for 0, null, or undefined
    buf = null;
    opts = options;
  } else if (typeof buffer === "number") {
    buf = Object(modules_buffer__WEBPACK_IMPORTED_MODULE_1__["fixed"])(buffer);
    opts = options;
  } else if (Object(modules_buffer__WEBPACK_IMPORTED_MODULE_1__["isBuffer"])(buffer)) {
    buf = buffer;
    opts = options;
  } else {
    // If no buffer is specified but a transducer is, we assume fixed(1)
    // instead of no buffer
    buf = (buffer === null || buffer === void 0 ? void 0 : buffer.transducer) ? Object(modules_buffer__WEBPACK_IMPORTED_MODULE_1__["fixed"])(1) : null;
    opts = buffer;
  }

  const {
    transducer,
    handler,
    maxDirty,
    maxQueued,
    timeout
  } = Object.assign({}, defaultOptions, opts);
  return {
    buf,
    transducer,
    handler,
    maxDirty,
    maxQueued,
    timeout
  };
}

function chan(buffer, options) {
  const defaultOptions = {
    maxDirty: _handler__WEBPACK_IMPORTED_MODULE_0__["MAX_DIRTY"],
    maxQueued: _handler__WEBPACK_IMPORTED_MODULE_0__["MAX_QUEUED"]
  };
  const {
    buf,
    transducer,
    handler,
    maxDirty,
    maxQueued,
    timeout
  } = parseArgs(buffer, options, defaultOptions);

  if (transducer && !buf) {
    throw Error("Only buffered channels can use transducers");
  }

  const xf = handlerTransducer(transducer ? transducer(bufferReducer) : bufferReducer, handler);
  const impl = Object(_handler__WEBPACK_IMPORTED_MODULE_0__["channel"])(buf, xf, maxDirty, maxQueued);
  const isTimed = typeof timeout === "number";

  if (isTimed) {
    setTimeout(() => Object(_handler__WEBPACK_IMPORTED_MODULE_0__["close"])(impl), timeout);
  }

  return Object.create(null, {
    impl: {
      value: impl
    },
    isBuffered: {
      value: !!buf
    },
    isTimed: {
      value: isTimed
    }
  });
}

function timedChan(delay = 0) {
  return chan({
    timeout: delay
  });
}

function transChan(transducer, handler) {
  return chan({
    transducer,
    handler
  });
}

function isClosed(channel) {
  return channel.impl.closed;
}

function isBuffered(channel) {
  return channel.isBuffered;
}

function isTimed(channel) {
  return channel.isTimed;
}

function sendAsync(channel, value, callback = () => {}) {
  const result = Object(_handler__WEBPACK_IMPORTED_MODULE_0__["handleSend"])(channel.impl, value, opHandler(callback));

  if (result && callback) {
    callback(result.value);
  }
}

function recvAsync(channel, callback = () => {}) {
  const result = Object(_handler__WEBPACK_IMPORTED_MODULE_0__["handleRecv"])(channel.impl, opHandler(callback));

  if (result && callback) {
    callback(result.value);
  }
}

function send(channel, value) {
  return new Promise(resolve => {
    sendAsync(channel, value, resolve);
  });
}

function recv(channel) {
  return new Promise(resolve => {
    recvAsync(channel, resolve);
  });
}

function recvOrThrow(channel) {
  return new Promise((resolve, reject) => {
    recvAsync(channel, result => {
      if (Object.prototype.isPrototypeOf.call(Error.prototype, result)) {
        reject(result);
      } else {
        resolve(result);
      }
    });
  });
}

function close(channel) {
  Object(_handler__WEBPACK_IMPORTED_MODULE_0__["close"])(channel.impl);
}



/***/ }),

/***/ "./src/modules/dispatcher.js":
/*!***********************************!*\
  !*** ./src/modules/dispatcher.js ***!
  \***********************************/
/*! exports provided: SET_IMMEDIATE, MESSAGE_CHANNEL, SET_TIMEOUT, config, dispatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(setImmediate) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_IMMEDIATE", function() { return SET_IMMEDIATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MESSAGE_CHANNEL", function() { return MESSAGE_CHANNEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_TIMEOUT", function() { return SET_TIMEOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dispatch", function() { return dispatch; });
/* harmony import */ var modules_queue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! modules/queue */ "./src/modules/queue.js");
/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

const queue = Object(modules_queue__WEBPACK_IMPORTED_MODULE_0__["queue"])();
const SET_IMMEDIATE = Symbol("setImmediate");
const MESSAGE_CHANNEL = Symbol("MessageChannel");
const SET_TIMEOUT = Symbol("setTimeout");
const options = {
  batchSize: 1024,
  dispatchMethod: SET_IMMEDIATE
};
let dispatcher = createDispatcher();
let running = false;
let queued = true;

function createDispatcher() {
  switch (calcDispatchMethod()) {
    // We prefer `setImmediate` if it's available, but it's only available in
    // Node and some old browsers.
    case SET_IMMEDIATE:
      return () => {
        if (!(queued && running)) {
          queued = true;
          setImmediate(processTasks);
        }
      };
    // Most modern browsers implement `MessageChannel`. This is the preferred
    // method in browser environments where `setImmediate` isn't available.

    case MESSAGE_CHANNEL:
      {
        const channel = new MessageChannel();

        channel.port1.onmessage = () => processTasks();

        return () => {
          if (!(queued && running)) {
            queued = true;
            channel.port2.postMessage(0);
          }
        };
      }
    // If all else fails, just use `setTimeout`. It's a little slower than the
    // other methods, but it's available everywhere.

    case SET_TIMEOUT:
      return () => {
        if (!(queued && running)) {
          queued = true;
          setTimeout(processTasks, 0);
        }
      };
  }
}

function calcDispatchMethod() {
  switch (options.dispatchMethod) {
    case MESSAGE_CHANNEL:
      if (typeof MessageChannel !== "undefined") {
        return MESSAGE_CHANNEL;
      }

      return SET_TIMEOUT;

    case SET_TIMEOUT:
      return SET_TIMEOUT;

    default:
      if (typeof setImmediate !== "undefined") {
        return SET_IMMEDIATE;
      }

      if (typeof MessageChannel !== "undefined") {
        return MESSAGE_CHANNEL;
      }

      return SET_TIMEOUT;
  }
}

function processTasks() {
  running = true;
  queued = false;
  let count = 0;

  for (;;) {
    const task = Object(modules_queue__WEBPACK_IMPORTED_MODULE_0__["dequeue"])(queue);

    if (task === modules_queue__WEBPACK_IMPORTED_MODULE_0__["EMPTY"]) {
      break;
    }

    task();

    if (count >= options.batchSize) {
      break;
    }

    count++;
    running = false;

    if (Object(modules_queue__WEBPACK_IMPORTED_MODULE_0__["count"])(queue)) {
      dispatcher();
    }
  }
}

function setDispatcher() {
  dispatcher = createDispatcher();
}

function config(opts = null) {
  if (opts === null) {
    return Object.assign({}, options);
  }

  for (const key in options) {
    if (key in opts) {
      options[key] = opts[key];

      if (key === "dispatchMethod") {
        setDispatcher();
      }
    }
  }
}

function dispatch(task) {
  Object(modules_queue__WEBPACK_IMPORTED_MODULE_0__["enqueue"])(queue, task);
  dispatcher();
}


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./src/modules/process.js":
/*!********************************!*\
  !*** ./src/modules/process.js ***!
  \********************************/
/*! exports provided: sleep, go */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sleep", function() { return sleep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "go", function() { return go; });
/* harmony import */ var modules_channel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! modules/channel */ "./src/modules/channel/index.js");
/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */


function sleep(delay = 0) {
  return new Promise(resolve => {
    const ch = Object(modules_channel__WEBPACK_IMPORTED_MODULE_0__["timedChan"])(delay);
    Object(modules_channel__WEBPACK_IMPORTED_MODULE_0__["recvAsync"])(ch, resolve);
  });
}

function go(fn, ...args) {
  return fn(...args);
}



/***/ }),

/***/ "./src/modules/protocol.js":
/*!*********************************!*\
  !*** ./src/modules/protocol.js ***!
  \*********************************/
/*! exports provided: protocols */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "protocols", function() { return protocols; });
/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
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


/***/ }),

/***/ "./src/modules/queue.js":
/*!******************************!*\
  !*** ./src/modules/queue.js ***!
  \******************************/
/*! exports provided: EMPTY, queue, isQueue, count, isEmpty, enqueue, dequeue, peek, filter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMPTY", function() { return EMPTY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queue", function() { return queue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isQueue", function() { return isQueue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "count", function() { return count; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmpty", function() { return isEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enqueue", function() { return enqueue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dequeue", function() { return dequeue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "peek", function() { return peek; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return filter; });
/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

/**
 * Provides an efficient general-purpose queue.
 *
 * @module chanko/queue
 */

/**
 * A general purpose, highly efficient JavaScript queue. It is backed by a
 * JavaScript array, but it does not use `unshift` to take elements off the
 * array because unshift causes elements to be copied every time it's used.
 * Instead, a pointer is maintained that keeps track of the location of the next
 * element to be dequeued, and when that dequeue happens, the pointer simply
 * moves. When the empty space at the head of the array gets large enough, it's
 * removed by a single slice operation.
 *
 * Putting elements into the queue is just done with a basic `push`, which *is*
 * highly efficient.
 *
 * This type of queue is possible in JavaScript because JS arrays are resizable.
 * In languages with fixed-size arrays, a resizing operation would have to be
 * run each time the queue fills.
 *
 * @namespace Queue
 */

/**
 * The value returned when a queue is read when it's empty.
 *
 * This special value is used because `null` and `undefined` are possible
 * legitimate values that can be stored in a queue. Another option is to use
 * some kind of `Maybe` or `Option` type, but that requires more effort on the
 * part of the end user to interface with.
 *
 * @type {Symbol}
 * @private
 */
const EMPTY = Symbol("empty");
/**
 * A marker property name to indicate that an object is in fact a queue.
 *
 * A queue has a property with this name whose readonly value is set to `true`.
 * This is not meant to be read except by the
 * `{@link module:chanko/queue~Queue.isQueue|isQueue}` function.
 *
 * @type {Symbol}
 * @private
 */

const QUEUE = Symbol("queue");
/**
 * Determines whether an object is a queue.
 *
 * @param {*} obj The object to be tested.
 * @return {boolean} Either `true` if the object is a queue or `false` if it is
 * not.
 */

function isQueue(obj) {
  return !!(obj === null || obj === void 0 ? void 0 : obj[QUEUE]);
}
/**
 * Creates a new queue. This queue is created empty, with a backing array of
 * length 0.
 *
 * @returns {module:chanko/queue~Queue} A new, empty queue.
 * @private
 */


function queue() {
  return Object.create(null, {
    store: {
      value: [],
      writable: true
    },
    pointer: {
      value: 0,
      writable: true
    },
    [QUEUE]: {
      value: true
    }
  });
}
/**
 * Returns the number of elements stored in a queue. This may or may not equal
 * the length of the backing store, as there is often empty space at the head of
 * the backing store.
 *
 * @param {module:chanko/queue~Queue} queue The queue whose items are being
 * counted.
 * @return {number} The number of items in the queue.
 */


function count(queue) {
  return queue.store.length - queue.pointer;
}
/**
 * Determines whether a queue is empty.
 *
 * @param {module:chanko/queue~Queue} queue The queue being checked for
 * emptiness.
 * @return {boolean} Either `true` if the queue is empty or `false` if it is
 * not.
 */


function isEmpty(queue) {
  return queue.store.length === 0;
}
/**
 * Adds an item to a queue.
 *
 * @param {module:chanko/queue~Queue} queue The queue which is having an item
 * added to it.
 * @param {*} item The item being added to the queue.
 */


function enqueue(queue, item) {
  queue.store.push(item);
}
/**
 * Removes an item from a queue and returns that item. If the removal causes the
 * amount of empty space at the head of the backing store to exceed a threshold,
 * that empty space is removed.
 *
 * @param {module:chanko/queue~Queue} queue The queue whose oldest item is to be
 * removed.
 * @return {*} The oldest stored item in the queue.
 */


function dequeue(queue) {
  if (queue.store.length === 0) {
    return EMPTY;
  }

  const item = queue.store[queue.pointer]; // Removes the items in the backing store before the current pointer, if there
  // is enough "empty" space before the pointer to justify it (i.e., the unused
  // portion is at least half as large as the used portion)

  if (++queue.pointer * 2 >= queue.store.length) {
    queue.store = queue.store.slice(queue.pointer);
    queue.pointer = 0;
  }

  return item;
}
/**
 * Returns the next item in a queue without removing it.
 *
 * @param {module:chanko/queue~Queue} queue The queue whose oldest item is to be
 * peeked at.
 * @return {*} The oldest item stored in the queue.
 */


function peek(queue) {
  return queue.store.length === 0 ? EMPTY : queue.store[queue.pointer];
}
/**
 * Filters out any item in a queue that does not cause the supplied predicate
 * function to return `true` when passed that item. This is not exactly a
 * general purpose queue operation, but we need it with channels that will
 * occasionally want to get rid of inactive handlers.
 *
 * @param {module:chanko/queue~Queue} queue The queue being filtered.
 * @param {function} fn The predicate function that determines whether an
 * element remains in the queue.
 */


function filter(queue, predicate) {
  for (let i = 0, end = count(queue); i < end; i++) {
    const item = dequeue(queue);

    if (predicate(item)) {
      enqueue(queue, item);
    }
  }
}



/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGFua28vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2NoYW5rby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jaGFua28vLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovL2NoYW5rby8uL25vZGVfbW9kdWxlcy9zZXRpbW1lZGlhdGUvc2V0SW1tZWRpYXRlLmpzIiwid2VicGFjazovL2NoYW5rby8uL25vZGVfbW9kdWxlcy90aW1lcnMtYnJvd3NlcmlmeS9tYWluLmpzIiwid2VicGFjazovL2NoYW5rby8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vY2hhbmtvLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2NoYW5rby8uL3NyYy9tb2R1bGVzL2J1ZmZlci5qcyIsIndlYnBhY2s6Ly9jaGFua28vLi9zcmMvbW9kdWxlcy9jaGFubmVsL2hhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vY2hhbmtvLy4vc3JjL21vZHVsZXMvY2hhbm5lbC9pbmRleC5qcyIsIndlYnBhY2s6Ly9jaGFua28vLi9zcmMvbW9kdWxlcy9kaXNwYXRjaGVyLmpzIiwid2VicGFjazovL2NoYW5rby8uL3NyYy9tb2R1bGVzL3Byb2Nlc3MuanMiLCJ3ZWJwYWNrOi8vY2hhbmtvLy4vc3JjL21vZHVsZXMvcHJvdG9jb2wuanMiLCJ3ZWJwYWNrOi8vY2hhbmtvLy4vc3JjL21vZHVsZXMvcXVldWUuanMiXSwibmFtZXMiOlsiQlVGRkVSIiwiU3ltYm9sIiwiRklYRUQiLCJEUk9QUElORyIsIlNMSURJTkciLCJpc0J1ZmZlciIsIm9iaiIsImZpeGVkIiwic2l6ZSIsIk9iamVjdCIsImNyZWF0ZSIsInF1ZXVlIiwidmFsdWUiLCJxIiwiZHJvcHBpbmciLCJzbGlkaW5nIiwiYnVmZmVyIiwiY291bnQiLCJxQ291bnQiLCJpc0Z1bGwiLCJhZGQiLCJpdGVtcyIsIml0ZW0iLCJlbnF1ZXVlIiwiZGVxdWV1ZSIsInJlbW92ZSIsIk1BWF9ESVJUWSIsIk1BWF9RVUVVRUQiLCJCT1giLCJDTE9TRUQiLCJpc1JlZHVjZWQiLCJwIiwicmVkdWNlZCIsImJveCIsIndyaXRhYmxlIiwic2VuZEJveCIsImhhbmRsZXIiLCJjaGFubmVsIiwieGZvcm0iLCJtYXhEaXJ0eSIsIm1heFF1ZXVlZCIsInJlY3ZzIiwic2VuZHMiLCJkaXJ0eVJlY3ZzIiwiZGlydHlTZW5kcyIsImNsb3NlZCIsImhhbmRsZVNlbmQiLCJpbXBsIiwiRXJyb3IiLCJjb21taXQiLCJyZWNlaXZlciIsImNhbGxiYWNrIiwiZG9uZSIsInN0ZXAiLCJFTVBUWSIsImFjdGl2ZSIsInZhbCIsImRpc3BhdGNoIiwiY2xvc2UiLCJmaWx0ZXIiLCJzZW5kZXIiLCJoYW5kbGVSZWN2Iiwic2VuZEhhbmRsZXIiLCJyZXN1bHQiLCJERUZBVUxUX0hBTkRMRVIiLCJvcEhhbmRsZXIiLCJmbiIsImhhbmRsZUV4Y2VwdGlvbiIsImV4IiwiaGFuZGxlclRyYW5zZHVjZXIiLCJpbnB1dCIsImJ1ZmZlclJlZHVjZXIiLCJpbml0IiwicGFyc2VBcmdzIiwib3B0aW9ucyIsImRlZmF1bHRPcHRpb25zIiwiYnVmIiwib3B0cyIsInRyYW5zZHVjZXIiLCJ0aW1lb3V0IiwiYXNzaWduIiwiY2hhbiIsInhmIiwiY2hhbkltcGwiLCJpc1RpbWVkIiwic2V0VGltZW91dCIsImNsb3NlSW1wbCIsImlzQnVmZmVyZWQiLCJ0aW1lZENoYW4iLCJkZWxheSIsInRyYW5zQ2hhbiIsImlzQ2xvc2VkIiwic2VuZEFzeW5jIiwicmVjdkFzeW5jIiwic2VuZCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVjdiIsInJlY3ZPclRocm93IiwicmVqZWN0IiwicHJvdG90eXBlIiwiaXNQcm90b3R5cGVPZiIsImNhbGwiLCJTRVRfSU1NRURJQVRFIiwiTUVTU0FHRV9DSEFOTkVMIiwiU0VUX1RJTUVPVVQiLCJiYXRjaFNpemUiLCJkaXNwYXRjaE1ldGhvZCIsImRpc3BhdGNoZXIiLCJjcmVhdGVEaXNwYXRjaGVyIiwicnVubmluZyIsInF1ZXVlZCIsImNhbGNEaXNwYXRjaE1ldGhvZCIsInNldEltbWVkaWF0ZSIsInByb2Nlc3NUYXNrcyIsIk1lc3NhZ2VDaGFubmVsIiwicG9ydDEiLCJvbm1lc3NhZ2UiLCJwb3J0MiIsInBvc3RNZXNzYWdlIiwidGFzayIsInNldERpc3BhdGNoZXIiLCJjb25maWciLCJrZXkiLCJzbGVlcCIsImNoIiwiZ28iLCJhcmdzIiwicHJvdG9jb2xzIiwiZm9yIiwiUVVFVUUiLCJpc1F1ZXVlIiwic3RvcmUiLCJwb2ludGVyIiwibGVuZ3RoIiwiaXNFbXB0eSIsInB1c2giLCJzbGljZSIsInBlZWsiLCJwcmVkaWNhdGUiLCJpIiwiZW5kIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFVBQVU7Ozs7Ozs7Ozs7OztBQ3ZMdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGlCQUFpQjtBQUN0QztBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMENBQTBDLHNCQUFzQixFQUFFO0FBQ2xFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDekxEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxtQkFBTyxDQUFDLGlFQUFjO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzlEQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0Qzs7QUFFNUM7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7O0FBT0E7QUFDQTtBQWVBO0FBTUE7Ozs7Ozs7Ozs7Ozs7QUM3QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7OztBQU9BO0FBRUEsTUFBTUEsTUFBTSxHQUFHQyxNQUFNLENBQUMsUUFBRCxDQUFyQjtBQUNBLE1BQU1DLEtBQUssR0FBR0QsTUFBTSxDQUFDLE9BQUQsQ0FBcEI7QUFDQSxNQUFNRSxRQUFRLEdBQUdGLE1BQU0sQ0FBQyxVQUFELENBQXZCO0FBQ0EsTUFBTUcsT0FBTyxHQUFHSCxNQUFNLENBQUMsU0FBRCxDQUF0Qjs7QUFFQSxTQUFTSSxRQUFULENBQWtCQyxHQUFsQixFQUF1QjtBQUNyQixTQUFPLENBQUMsRUFBQ0EsR0FBRCxhQUFDQSxHQUFELHVCQUFDQSxHQUFHLENBQUdOLE1BQUgsQ0FBSixDQUFSO0FBQ0Q7O0FBRUQsU0FBU08sS0FBVCxDQUFlQyxJQUFmLEVBQXFCO0FBQ25CLFNBQU9DLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLElBQWQsRUFBb0I7QUFDekJDLFNBQUssRUFBRTtBQUNMQyxXQUFLLEVBQUVDLDJEQUFDO0FBREgsS0FEa0I7QUFLekJMLFFBQUksRUFBRTtBQUNKSSxXQUFLLEVBQUVKO0FBREgsS0FMbUI7QUFTekIsS0FBQ1IsTUFBRCxHQUFVO0FBQ1JZLFdBQUssRUFBRVY7QUFEQztBQVRlLEdBQXBCLENBQVA7QUFhRDs7QUFFRCxTQUFTWSxRQUFULENBQWtCTixJQUFsQixFQUF3QjtBQUN0QixTQUFPQyxNQUFNLENBQUNDLE1BQVAsQ0FBYyxJQUFkLEVBQW9CO0FBQ3pCQyxTQUFLLEVBQUU7QUFDTEMsV0FBSyxFQUFFQywyREFBQztBQURILEtBRGtCO0FBS3pCTCxRQUFJLEVBQUU7QUFDSkksV0FBSyxFQUFFSjtBQURILEtBTG1CO0FBU3pCLEtBQUNSLE1BQUQsR0FBVTtBQUNSWSxXQUFLLEVBQUVUO0FBREM7QUFUZSxHQUFwQixDQUFQO0FBYUQ7O0FBRUQsU0FBU1ksT0FBVCxDQUFpQlAsSUFBakIsRUFBdUI7QUFDckIsU0FBT0MsTUFBTSxDQUFDQyxNQUFQLENBQWMsSUFBZCxFQUFvQjtBQUN6QkMsU0FBSyxFQUFFO0FBQ0xDLFdBQUssRUFBRUMsMkRBQUM7QUFESCxLQURrQjtBQUt6QkwsUUFBSSxFQUFFO0FBQ0pJLFdBQUssRUFBRUo7QUFESCxLQUxtQjtBQVN6QixLQUFDUixNQUFELEdBQVU7QUFDUlksV0FBSyxFQUFFUjtBQURDO0FBVGUsR0FBcEIsQ0FBUDtBQWFEOztBQUVELFNBQVNPLEtBQVQsQ0FBZUssTUFBZixFQUF1QjtBQUNyQixTQUFPQSxNQUFNLENBQUNMLEtBQWQ7QUFDRDs7QUFFRCxTQUFTSCxJQUFULENBQWNRLE1BQWQsRUFBc0I7QUFDcEIsU0FBT0EsTUFBTSxDQUFDUixJQUFkO0FBQ0Q7O0FBRUQsU0FBU1MsS0FBVCxDQUFlRCxNQUFmLEVBQXVCO0FBQ3JCLFNBQU9FLDJEQUFNLENBQUNGLE1BQU0sQ0FBQ0wsS0FBUixDQUFiO0FBQ0Q7O0FBRUQsU0FBU1EsTUFBVCxDQUFnQkgsTUFBaEIsRUFBd0I7QUFDdEIsU0FBT0EsTUFBTSxDQUFDaEIsTUFBRCxDQUFOLEtBQW1CRSxLQUFuQixHQUEyQmdCLDJEQUFNLENBQUNGLE1BQU0sQ0FBQ0wsS0FBUixDQUFOLElBQXdCSyxNQUFNLENBQUNSLElBQTFELEdBQWlFLEtBQXhFO0FBQ0Q7O0FBRUQsU0FBU1ksR0FBVCxDQUFhSixNQUFiLEVBQXFCLEdBQUdLLEtBQXhCLEVBQStCO0FBQzdCLFVBQVFMLE1BQU0sQ0FBQ2hCLE1BQUQsQ0FBZDtBQUNFLFNBQUtFLEtBQUw7QUFDRSxXQUFLLE1BQU1vQixJQUFYLElBQW1CRCxLQUFuQixFQUEwQjtBQUN4QkUscUVBQU8sQ0FBQ1AsTUFBTSxDQUFDTCxLQUFSLEVBQWVXLElBQWYsQ0FBUDtBQUNEOztBQUNEOztBQUVGLFNBQUtuQixRQUFMO0FBQ0UsV0FBSyxNQUFNbUIsSUFBWCxJQUFtQkQsS0FBbkIsRUFBMEI7QUFDeEIsWUFBSUosS0FBSyxDQUFDRCxNQUFELENBQUwsR0FBZ0JSLElBQUksQ0FBQ1EsTUFBRCxDQUF4QixFQUFrQztBQUNoQ08sdUVBQU8sQ0FBQ1AsTUFBTSxDQUFDTCxLQUFSLEVBQWVXLElBQWYsQ0FBUDtBQUNEO0FBQ0Y7O0FBQ0Q7O0FBRUYsU0FBS2xCLE9BQUw7QUFDRSxXQUFLLE1BQU1rQixJQUFYLElBQW1CRCxLQUFuQixFQUEwQjtBQUN4QixZQUFJSixLQUFLLENBQUNELE1BQUQsQ0FBTCxJQUFpQlIsSUFBSSxDQUFDUSxNQUFELENBQXpCLEVBQW1DO0FBQ2pDUSx1RUFBTyxDQUFDUixNQUFNLENBQUNMLEtBQVIsQ0FBUDtBQUNEOztBQUNEWSxxRUFBTyxDQUFDUCxNQUFNLENBQUNMLEtBQVIsRUFBZVcsSUFBZixDQUFQO0FBQ0Q7O0FBQ0Q7O0FBRUY7QUFDRTtBQXpCSjtBQTJCRDs7QUFFRCxTQUFTRyxNQUFULENBQWdCVCxNQUFoQixFQUF3QjtBQUN0QixTQUFPUSw2REFBTyxDQUFDUixNQUFNLENBQUNMLEtBQVIsQ0FBZDtBQUNEOzs7Ozs7Ozs7Ozs7OztBQ2xIRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7O0FBT0E7QUFDQTtBQVFBO0FBQ0E7QUFFQSxNQUFNZSxTQUFTLEdBQUcsRUFBbEI7QUFDQSxNQUFNQyxVQUFVLEdBQUcsSUFBbkI7QUFFQSxNQUFNQyxHQUFHLEdBQUczQixNQUFNLENBQUMsS0FBRCxDQUFsQjtBQUVBLE1BQU00QixNQUFNLEdBQUc1QixNQUFNLENBQUMsUUFBRCxDQUFyQjs7QUFFQSxTQUFTNkIsU0FBVCxDQUFtQmxCLEtBQW5CLEVBQTBCO0FBQ3hCLFNBQU8sQ0FBQyxFQUFDQSxLQUFELGFBQUNBLEtBQUQsdUJBQUNBLEtBQUssQ0FBR21CLDBEQUFDLENBQUNDLE9BQUwsQ0FBTixDQUFSO0FBQ0Q7O0FBRUQsU0FBU0MsR0FBVCxDQUFhckIsS0FBYixFQUFvQjtBQUNsQixTQUFPSCxNQUFNLENBQUNDLE1BQVAsQ0FBYyxJQUFkLEVBQW9CO0FBQ3pCRSxTQUFLLEVBQUU7QUFDTEEsV0FESztBQUVMc0IsY0FBUSxFQUFFO0FBRkwsS0FEa0I7QUFLekIsS0FBQ04sR0FBRCxHQUFPO0FBQ0xoQixXQUFLLEVBQUU7QUFERjtBQUxrQixHQUFwQixDQUFQO0FBU0Q7O0FBRUQsU0FBU3VCLE9BQVQsQ0FBaUJ2QixLQUFqQixFQUF3QndCLE9BQXhCLEVBQWlDO0FBQy9CLFNBQU8zQixNQUFNLENBQUNDLE1BQVAsQ0FBYyxJQUFkLEVBQW9CO0FBQ3pCRSxTQUFLLEVBQUU7QUFDTEEsV0FESztBQUVMc0IsY0FBUSxFQUFFO0FBRkwsS0FEa0I7QUFLekJFLFdBQU8sRUFBRTtBQUNQeEIsV0FBSyxFQUFFd0I7QUFEQSxLQUxnQjtBQVF6QixLQUFDUixHQUFELEdBQU87QUFDTGhCLFdBQUssRUFBRTtBQURGO0FBUmtCLEdBQXBCLENBQVA7QUFZRDs7QUFFRCxTQUFTeUIsT0FBVCxDQUFpQnJCLE1BQWpCLEVBQXlCc0IsS0FBekIsRUFBZ0NDLFFBQVEsR0FBR2IsU0FBM0MsRUFBc0RjLFNBQVMsR0FBR2IsVUFBbEUsRUFBOEU7QUFDNUUsU0FBT2xCLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLElBQWQsRUFBb0I7QUFDekJNLFVBQU0sRUFBRTtBQUNOSixXQUFLLEVBQUVJO0FBREQsS0FEaUI7QUFJekJzQixTQUFLLEVBQUU7QUFDTDFCLFdBQUssRUFBRTBCO0FBREYsS0FKa0I7QUFPekJDLFlBQVEsRUFBRTtBQUNSM0IsV0FBSyxFQUFFMkI7QUFEQyxLQVBlO0FBVXpCQyxhQUFTLEVBQUU7QUFDVDVCLFdBQUssRUFBRTRCO0FBREUsS0FWYztBQWF6QkMsU0FBSyxFQUFFO0FBQ0w3QixXQUFLLEVBQUVELDJEQUFLO0FBRFAsS0Fia0I7QUFnQnpCK0IsU0FBSyxFQUFFO0FBQ0w5QixXQUFLLEVBQUVELDJEQUFLO0FBRFAsS0FoQmtCO0FBbUJ6QmdDLGNBQVUsRUFBRTtBQUNWL0IsV0FBSyxFQUFFLENBREc7QUFFVnNCLGNBQVEsRUFBRTtBQUZBLEtBbkJhO0FBdUJ6QlUsY0FBVSxFQUFFO0FBQ1ZoQyxXQUFLLEVBQUUsQ0FERztBQUVWc0IsY0FBUSxFQUFFO0FBRkEsS0F2QmE7QUEyQnpCVyxVQUFNLEVBQUU7QUFDTmpDLFdBQUssRUFBRSxLQUREO0FBRU5zQixjQUFRLEVBQUU7QUFGSjtBQTNCaUIsR0FBcEIsQ0FBUDtBQWdDRDs7QUFFRCxTQUFTWSxVQUFULENBQW9CQyxJQUFwQixFQUEwQm5DLEtBQTFCLEVBQWlDd0IsT0FBakMsRUFBMEM7QUFDeEMsTUFBSXhCLEtBQUssS0FBS2lCLE1BQWQsRUFBc0I7QUFDcEIsVUFBTW1CLEtBQUssQ0FBQyxpQ0FBRCxDQUFYO0FBQ0Q7O0FBRUQsTUFBSUQsSUFBSSxDQUFDRixNQUFULEVBQWlCO0FBQ2ZULFdBQU8sQ0FBQ2EsTUFBUjtBQUNBLFdBQU9oQixHQUFHLENBQUMsS0FBRCxDQUFWO0FBQ0Q7O0FBRUQsTUFBSWlCLFFBQUosRUFBY0MsUUFBZCxDQVZ3QyxDQVl4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLE1BQUlKLElBQUksQ0FBQy9CLE1BQUwsSUFBZSxDQUFDRyw2REFBTSxDQUFDNEIsSUFBSSxDQUFDL0IsTUFBTixDQUExQixFQUF5QztBQUN2Q29CLFdBQU8sQ0FBQ2EsTUFBUjtBQUNBLFVBQU1HLElBQUksR0FBR3RCLFNBQVMsQ0FBQ2lCLElBQUksQ0FBQ1QsS0FBTCxDQUFXUCwwREFBQyxDQUFDc0IsSUFBYixFQUFtQk4sSUFBSSxDQUFDL0IsTUFBeEIsRUFBZ0NKLEtBQWhDLENBQUQsQ0FBdEI7O0FBRUEsYUFBUztBQUNQLFVBQUlLLDREQUFLLENBQUM4QixJQUFJLENBQUMvQixNQUFOLENBQUwsS0FBdUIsQ0FBM0IsRUFBOEI7QUFDNUI7QUFDRDs7QUFDRGtDLGNBQVEsR0FBRzFCLDZEQUFPLENBQUN1QixJQUFJLENBQUNOLEtBQU4sQ0FBbEI7O0FBQ0EsVUFBSVMsUUFBUSxLQUFLSSxtREFBakIsRUFBd0I7QUFDdEI7QUFDRDs7QUFDRCxVQUFJSixRQUFRLENBQUNLLE1BQWIsRUFBcUI7QUFDbkJKLGdCQUFRLEdBQUdELFFBQVEsQ0FBQ0QsTUFBVCxFQUFYO0FBQ0EsY0FBTU8sR0FBRyxHQUFHL0IsNkRBQU0sQ0FBQ3NCLElBQUksQ0FBQy9CLE1BQU4sQ0FBbEI7O0FBQ0EsWUFBSW1DLFFBQUosRUFBYztBQUNaTSw2RUFBUSxDQUFDLE1BQU1OLFFBQVEsQ0FBQ0ssR0FBRCxDQUFmLENBQVI7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQsUUFBSUosSUFBSixFQUFVO0FBQ1JNLFdBQUssQ0FBQ1gsSUFBRCxDQUFMO0FBQ0Q7O0FBQ0QsV0FBT2QsR0FBRyxDQUFDLElBQUQsQ0FBVjtBQUNELEdBN0N1QyxDQStDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxXQUFTO0FBQ1BpQixZQUFRLEdBQUcxQiw2REFBTyxDQUFDdUIsSUFBSSxDQUFDTixLQUFOLENBQWxCOztBQUNBLFFBQUlTLFFBQVEsS0FBS0ksbURBQWpCLEVBQXdCO0FBQ3RCO0FBQ0Q7O0FBQ0QsUUFBSUosUUFBUSxDQUFDSyxNQUFiLEVBQXFCO0FBQ25CbkIsYUFBTyxDQUFDYSxNQUFSO0FBQ0FFLGNBQVEsR0FBR0QsUUFBUSxDQUFDRCxNQUFULEVBQVg7O0FBQ0EsVUFBSUUsUUFBSixFQUFjO0FBQ1pNLDJFQUFRLENBQUMsTUFBTU4sUUFBUSxDQUFDdkMsS0FBRCxDQUFmLENBQVI7QUFDRDs7QUFDRCxhQUFPcUIsR0FBRyxDQUFDLElBQUQsQ0FBVjtBQUNEO0FBQ0YsR0FsRXVDLENBb0V4QztBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsTUFBSWMsSUFBSSxDQUFDSCxVQUFMLEdBQWtCRyxJQUFJLENBQUNSLFFBQTNCLEVBQXFDO0FBQ25Db0IsZ0VBQU0sQ0FBQ1osSUFBSSxDQUFDTCxLQUFOLEVBQWFrQixNQUFNLElBQUlBLE1BQU0sQ0FBQ3hCLE9BQVAsQ0FBZW1CLE1BQXRDLENBQU47QUFDQVIsUUFBSSxDQUFDSCxVQUFMLEdBQWtCLENBQWxCO0FBQ0QsR0FIRCxNQUdPO0FBQ0xHLFFBQUksQ0FBQ0gsVUFBTDtBQUNEOztBQUVELE1BQUkxQiwyREFBTSxDQUFDNkIsSUFBSSxDQUFDTCxLQUFOLENBQU4sSUFBc0JLLElBQUksQ0FBQ1AsU0FBL0IsRUFBMEM7QUFDeEMsVUFBTVEsS0FBSyxDQUNSLGdCQUFlRCxJQUFJLENBQUNQLFNBQVUsZ0RBRHRCLENBQVg7QUFHRDs7QUFDRGpCLCtEQUFPLENBQUN3QixJQUFJLENBQUNMLEtBQU4sRUFBYVAsT0FBTyxDQUFDdkIsS0FBRCxFQUFRd0IsT0FBUixDQUFwQixDQUFQO0FBRUEsU0FBTyxJQUFQO0FBQ0Q7O0FBRUQsU0FBU3lCLFVBQVQsQ0FBb0JkLElBQXBCLEVBQTBCWCxPQUExQixFQUFtQztBQUNqQyxNQUFJd0IsTUFBSixFQUFZRSxXQUFaLEVBQXlCWCxRQUF6QixDQURpQyxDQUdqQztBQUNBO0FBQ0E7QUFDQTs7QUFDQSxNQUFJSixJQUFJLENBQUMvQixNQUFMLElBQWVDLDREQUFLLENBQUM4QixJQUFJLENBQUMvQixNQUFOLENBQUwsR0FBcUIsQ0FBeEMsRUFBMkM7QUFDekNvQixXQUFPLENBQUNhLE1BQVI7QUFDQSxVQUFNckMsS0FBSyxHQUFHYSw2REFBTSxDQUFDc0IsSUFBSSxDQUFDL0IsTUFBTixDQUFwQjs7QUFFQSxhQUFTO0FBQ1AsVUFBSUcsNkRBQU0sQ0FBQzRCLElBQUksQ0FBQy9CLE1BQU4sQ0FBVixFQUF5QjtBQUN2QjtBQUNEOztBQUNENEMsWUFBTSxHQUFHcEMsNkRBQU8sQ0FBQ3VCLElBQUksQ0FBQ0wsS0FBTixDQUFoQjs7QUFDQSxVQUFJa0IsTUFBTSxLQUFLTixtREFBZixFQUFzQjtBQUNwQjtBQUNEOztBQUVEUSxpQkFBVyxHQUFHRixNQUFNLENBQUN4QixPQUFyQjs7QUFDQSxVQUFJMEIsV0FBVyxDQUFDUCxNQUFoQixFQUF3QjtBQUN0QkosZ0JBQVEsR0FBR1csV0FBVyxDQUFDYixNQUFaLEVBQVg7O0FBQ0EsWUFBSUUsUUFBSixFQUFjO0FBQ1pNLDZFQUFRLENBQUMsTUFBTU4sUUFBUSxDQUFDLElBQUQsQ0FBZixDQUFSO0FBQ0Q7O0FBQ0QsWUFBSXJCLFNBQVMsQ0FBQ2lCLElBQUksQ0FBQ1QsS0FBTCxDQUFXUCwwREFBQyxDQUFDc0IsSUFBYixFQUFtQk4sSUFBSSxDQUFDL0IsTUFBeEIsRUFBZ0M0QyxNQUFNLENBQUNoRCxLQUF2QyxDQUFELENBQWIsRUFBOEQ7QUFDNUQ4QyxlQUFLLENBQUNYLElBQUQsQ0FBTDtBQUNEO0FBQ0Y7QUFDRjs7QUFDRCxXQUFPZCxHQUFHLENBQUNyQixLQUFELENBQVY7QUFDRCxHQWhDZ0MsQ0FrQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsV0FBUztBQUNQZ0QsVUFBTSxHQUFHcEMsNkRBQU8sQ0FBQ3VCLElBQUksQ0FBQ0wsS0FBTixDQUFoQjs7QUFDQSxRQUFJa0IsTUFBTSxLQUFLTixtREFBZixFQUFzQjtBQUNwQjtBQUNEOztBQUNEUSxlQUFXLEdBQUdGLE1BQU0sQ0FBQ3hCLE9BQXJCOztBQUNBLFFBQUkwQixXQUFXLENBQUNQLE1BQWhCLEVBQXdCO0FBQ3RCSixjQUFRLEdBQUdXLFdBQVcsQ0FBQ2IsTUFBWixFQUFYOztBQUNBLFVBQUlFLFFBQUosRUFBYztBQUNaTSwyRUFBUSxDQUFDLE1BQU1OLFFBQVEsQ0FBQyxJQUFELENBQWYsQ0FBUjtBQUNEOztBQUNELGFBQU9sQixHQUFHLENBQUMyQixNQUFNLENBQUNoRCxLQUFSLENBQVY7QUFDRDtBQUNGLEdBckRnQyxDQXVEakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsTUFBSW1DLElBQUksQ0FBQ0YsTUFBVCxFQUFpQjtBQUNmVCxXQUFPLENBQUNhLE1BQVI7QUFDQSxXQUFPaEIsR0FBRyxDQUFDSixNQUFELENBQVY7QUFDRCxHQS9EZ0MsQ0FpRWpDO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxNQUFJa0IsSUFBSSxDQUFDSixVQUFMLEdBQWtCSSxJQUFJLENBQUNSLFFBQTNCLEVBQXFDO0FBQ25Db0IsZ0VBQU0sQ0FBQ1osSUFBSSxDQUFDTixLQUFOLEVBQWFTLFFBQVEsSUFBSUEsUUFBUSxDQUFDSyxNQUFsQyxDQUFOO0FBQ0FSLFFBQUksQ0FBQ0osVUFBTCxHQUFrQixDQUFsQjtBQUNELEdBSEQsTUFHTztBQUNMSSxRQUFJLENBQUNKLFVBQUw7QUFDRDs7QUFFRCxNQUFJekIsMkRBQU0sQ0FBQzZCLElBQUksQ0FBQ04sS0FBTixDQUFOLElBQXNCTSxJQUFJLENBQUNQLFNBQS9CLEVBQTBDO0FBQ3hDLFVBQU1RLEtBQUssQ0FDUixnQkFBZUQsSUFBSSxDQUFDUCxTQUFVLG1EQUR0QixDQUFYO0FBR0Q7O0FBQ0RqQiwrREFBTyxDQUFDd0IsSUFBSSxDQUFDTixLQUFOLEVBQWFMLE9BQWIsQ0FBUDtBQUVBLFNBQU8sSUFBUDtBQUNEOztBQUVELFNBQVNzQixLQUFULENBQWVYLElBQWYsRUFBcUI7QUFDbkIsTUFBSUEsSUFBSSxDQUFDRixNQUFULEVBQWlCO0FBQ2Y7QUFDRDs7QUFDREUsTUFBSSxDQUFDRixNQUFMLEdBQWMsSUFBZDtBQUVBLE1BQUlLLFFBQUosRUFBY1UsTUFBZCxFQUFzQlQsUUFBdEIsQ0FObUIsQ0FRbkI7QUFDQTs7QUFDQSxNQUFJSixJQUFJLENBQUMvQixNQUFULEVBQWlCO0FBQ2YrQixRQUFJLENBQUNULEtBQUwsQ0FBV1AsMERBQUMsQ0FBQ2dDLE1BQWIsRUFBcUJoQixJQUFJLENBQUMvQixNQUExQjs7QUFDQSxhQUFTO0FBQ1AsVUFBSUMsNERBQUssQ0FBQzhCLElBQUksQ0FBQy9CLE1BQU4sQ0FBTCxLQUF1QixDQUEzQixFQUE4QjtBQUM1QjtBQUNEOztBQUNEa0MsY0FBUSxHQUFHMUIsNkRBQU8sQ0FBQ3VCLElBQUksQ0FBQ04sS0FBTixDQUFsQjs7QUFDQSxVQUFJUyxRQUFRLEtBQUtJLG1EQUFqQixFQUF3QjtBQUN0QjtBQUNEOztBQUNELFVBQUlKLFFBQVEsQ0FBQ0ssTUFBYixFQUFxQjtBQUNuQkosZ0JBQVEsR0FBR0QsUUFBUSxDQUFDRCxNQUFULEVBQVg7QUFDQSxjQUFNckMsS0FBSyxHQUFHYSw2REFBTSxDQUFDc0IsSUFBSSxDQUFDL0IsTUFBTixDQUFwQjs7QUFDQSxZQUFJbUMsUUFBSixFQUFjO0FBQ1pNLDZFQUFRLENBQUMsTUFBTU4sUUFBUSxDQUFDdkMsS0FBRCxDQUFmLENBQVI7QUFDRDtBQUNGO0FBQ0Y7QUFDRixHQTVCa0IsQ0E4Qm5CO0FBQ0E7OztBQUNBLFdBQVM7QUFDUHNDLFlBQVEsR0FBRzFCLDZEQUFPLENBQUN1QixJQUFJLENBQUNOLEtBQU4sQ0FBbEI7O0FBQ0EsUUFBSVMsUUFBUSxLQUFLSSxtREFBakIsRUFBd0I7QUFDdEI7QUFDRDs7QUFDRCxRQUFJSixRQUFRLENBQUNLLE1BQWIsRUFBcUI7QUFDbkJKLGNBQVEsR0FBR0QsUUFBUSxDQUFDRCxNQUFULEVBQVg7O0FBQ0EsVUFBSUUsUUFBSixFQUFjO0FBQ1pNLDJFQUFRLENBQUMsTUFBTU4sUUFBUSxDQUFDdEIsTUFBRCxDQUFmLENBQVI7QUFDRDtBQUNGO0FBQ0YsR0EzQ2tCLENBNkNuQjs7O0FBQ0EsV0FBUztBQUNQK0IsVUFBTSxHQUFHcEMsNkRBQU8sQ0FBQ3VCLElBQUksQ0FBQ0wsS0FBTixDQUFoQjs7QUFDQSxRQUFJa0IsTUFBTSxLQUFLTixtREFBZixFQUFzQjtBQUNwQjtBQUNEOztBQUNELFFBQUlNLE1BQU0sQ0FBQ3hCLE9BQVAsQ0FBZW1CLE1BQW5CLEVBQTJCO0FBQ3pCSixjQUFRLEdBQUdTLE1BQU0sQ0FBQ3hCLE9BQVAsQ0FBZWEsTUFBZixFQUFYOztBQUNBLFVBQUlFLFFBQUosRUFBYztBQUNaTSwyRUFBUSxDQUFDLE1BQU1OLFFBQVEsQ0FBQyxLQUFELENBQWYsQ0FBUjtBQUNEO0FBQ0Y7QUFDRjtBQUNGOzs7Ozs7Ozs7Ozs7OztBQ3JVRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBU0E7QUFDQTs7QUFFQSxNQUFNYSxlQUFlLEdBQUcsTUFBTW5DLCtDQUE5Qjs7QUFFQSxTQUFTb0MsU0FBVCxDQUFtQkMsRUFBbkIsRUFBdUI7QUFDckIsU0FBT3pELE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLElBQWQsRUFBb0I7QUFDekI2QyxVQUFNLEVBQUU7QUFDTjNDLFdBQUssRUFBRTtBQURELEtBRGlCO0FBSXpCcUMsVUFBTSxFQUFFO0FBQ05yQyxXQUFLLEVBQUUsTUFBTXNEO0FBRFA7QUFKaUIsR0FBcEIsQ0FBUDtBQVFEOztBQUVELFNBQVNDLGVBQVQsQ0FBeUJuRCxNQUF6QixFQUFpQ29CLE9BQWpDLEVBQTBDZ0MsRUFBMUMsRUFBOEM7QUFDNUMsUUFBTXhELEtBQUssR0FBR3dCLE9BQU8sQ0FBQ2dDLEVBQUQsQ0FBckI7O0FBQ0EsTUFBSXhELEtBQUssS0FBS2lCLCtDQUFkLEVBQXNCO0FBQ3BCVCw4REFBRyxDQUFDSixNQUFELEVBQVNKLEtBQVQsQ0FBSDtBQUNEOztBQUNELFNBQU9JLE1BQVA7QUFDRDs7QUFFRCxTQUFTcUQsaUJBQVQsQ0FBMkIvQixLQUEzQixFQUFrQ0YsT0FBTyxHQUFHNEIsZUFBNUMsRUFBNkQ7QUFDM0QsU0FBTztBQUNMLEtBQUNqQywwREFBQyxDQUFDc0IsSUFBSCxFQUFTckMsTUFBVCxFQUFpQnNELEtBQWpCLEVBQXdCO0FBQ3RCLFVBQUk7QUFDRixlQUFPaEMsS0FBSyxDQUFDUCwwREFBQyxDQUFDc0IsSUFBSCxDQUFMLENBQWNyQyxNQUFkLEVBQXNCc0QsS0FBdEIsQ0FBUDtBQUNELE9BRkQsQ0FFRSxPQUFPRixFQUFQLEVBQVc7QUFDWCxlQUFPRCxlQUFlLENBQUNuRCxNQUFELEVBQVNvQixPQUFULEVBQWtCZ0MsRUFBbEIsQ0FBdEI7QUFDRDtBQUNGLEtBUEk7O0FBU0wsS0FBQ3JDLDBEQUFDLENBQUNnQyxNQUFILEVBQVcvQyxNQUFYLEVBQW1CO0FBQ2pCLFVBQUk7QUFDRixlQUFPc0IsS0FBSyxDQUFDUCwwREFBQyxDQUFDZ0MsTUFBSCxDQUFMLENBQWdCL0MsTUFBaEIsQ0FBUDtBQUNELE9BRkQsQ0FFRSxPQUFPb0QsRUFBUCxFQUFXO0FBQ1gsZUFBT0QsZUFBZSxDQUFDbkQsTUFBRCxFQUFTb0IsT0FBVCxFQUFrQmdDLEVBQWxCLENBQXRCO0FBQ0Q7QUFDRjs7QUFmSSxHQUFQO0FBaUJEOztBQUVELE1BQU1HLGFBQWEsR0FBRztBQUNwQixHQUFDeEMsMERBQUMsQ0FBQ3lDLElBQUgsSUFBVztBQUNULFVBQU14QixLQUFLLENBQUMsb0JBQUQsQ0FBWDtBQUNELEdBSG1COztBQUtwQixHQUFDakIsMERBQUMsQ0FBQ3NCLElBQUgsRUFBU3JDLE1BQVQsRUFBaUJzRCxLQUFqQixFQUF3QjtBQUN0QmxELDhEQUFHLENBQUNKLE1BQUQsRUFBU3NELEtBQVQsQ0FBSDtBQUNBLFdBQU90RCxNQUFQO0FBQ0QsR0FSbUI7O0FBVXBCLEdBQUNlLDBEQUFDLENBQUNnQyxNQUFILEVBQVcvQyxNQUFYLEVBQW1CO0FBQ2pCLFdBQU9BLE1BQVA7QUFDRDs7QUFabUIsQ0FBdEI7O0FBZUEsU0FBU3lELFNBQVQsQ0FBbUJ6RCxNQUFuQixFQUEyQjBELE9BQTNCLEVBQW9DQyxjQUFwQyxFQUFvRDtBQUNsRCxNQUFJQyxHQUFKO0FBQ0EsTUFBSUMsSUFBSjs7QUFFQSxNQUFJLENBQUM3RCxNQUFMLEVBQWE7QUFDWDtBQUNBNEQsT0FBRyxHQUFHLElBQU47QUFDQUMsUUFBSSxHQUFHSCxPQUFQO0FBQ0QsR0FKRCxNQUlPLElBQUksT0FBTzFELE1BQVAsS0FBa0IsUUFBdEIsRUFBZ0M7QUFDckM0RCxPQUFHLEdBQUdyRSw0REFBSyxDQUFDUyxNQUFELENBQVg7QUFDQTZELFFBQUksR0FBR0gsT0FBUDtBQUNELEdBSE0sTUFHQSxJQUFJckUsK0RBQVEsQ0FBQ1csTUFBRCxDQUFaLEVBQXNCO0FBQzNCNEQsT0FBRyxHQUFHNUQsTUFBTjtBQUNBNkQsUUFBSSxHQUFHSCxPQUFQO0FBQ0QsR0FITSxNQUdBO0FBQ0w7QUFDQTtBQUNBRSxPQUFHLEdBQUcsQ0FBQTVELE1BQU0sU0FBTixJQUFBQSxNQUFNLFdBQU4sWUFBQUEsTUFBTSxDQUFFOEQsVUFBUixJQUFxQnZFLDREQUFLLENBQUMsQ0FBRCxDQUExQixHQUFnQyxJQUF0QztBQUNBc0UsUUFBSSxHQUFHN0QsTUFBUDtBQUNEOztBQUVELFFBQU07QUFBRThELGNBQUY7QUFBYzFDLFdBQWQ7QUFBdUJHLFlBQXZCO0FBQWlDQyxhQUFqQztBQUE0Q3VDO0FBQTVDLE1BQXdEdEUsTUFBTSxDQUFDdUUsTUFBUCxDQUM1RCxFQUQ0RCxFQUU1REwsY0FGNEQsRUFHNURFLElBSDRELENBQTlEO0FBS0EsU0FBTztBQUFFRCxPQUFGO0FBQU9FLGNBQVA7QUFBbUIxQyxXQUFuQjtBQUE0QkcsWUFBNUI7QUFBc0NDLGFBQXRDO0FBQWlEdUM7QUFBakQsR0FBUDtBQUNEOztBQUVELFNBQVNFLElBQVQsQ0FBY2pFLE1BQWQsRUFBc0IwRCxPQUF0QixFQUErQjtBQUM3QixRQUFNQyxjQUFjLEdBQUc7QUFDckJwQyxZQUFRLEVBQUViLGtEQURXO0FBRXJCYyxhQUFTLEVBQUViLG1EQUFVQTtBQUZBLEdBQXZCO0FBSUEsUUFBTTtBQUFFaUQsT0FBRjtBQUFPRSxjQUFQO0FBQW1CMUMsV0FBbkI7QUFBNEJHLFlBQTVCO0FBQXNDQyxhQUF0QztBQUFpRHVDO0FBQWpELE1BQTZETixTQUFTLENBQzFFekQsTUFEMEUsRUFFMUUwRCxPQUYwRSxFQUcxRUMsY0FIMEUsQ0FBNUU7O0FBTUEsTUFBSUcsVUFBVSxJQUFJLENBQUNGLEdBQW5CLEVBQXdCO0FBQ3RCLFVBQU01QixLQUFLLENBQUMsNENBQUQsQ0FBWDtBQUNEOztBQUVELFFBQU1rQyxFQUFFLEdBQUdiLGlCQUFpQixDQUMxQlMsVUFBVSxHQUFHQSxVQUFVLENBQUNQLGFBQUQsQ0FBYixHQUErQkEsYUFEZixFQUUxQm5DLE9BRjBCLENBQTVCO0FBS0EsUUFBTVcsSUFBSSxHQUFHb0Msd0RBQVEsQ0FBQ1AsR0FBRCxFQUFNTSxFQUFOLEVBQVUzQyxRQUFWLEVBQW9CQyxTQUFwQixDQUFyQjtBQUVBLFFBQU00QyxPQUFPLEdBQUcsT0FBT0wsT0FBUCxLQUFtQixRQUFuQzs7QUFDQSxNQUFJSyxPQUFKLEVBQWE7QUFDWEMsY0FBVSxDQUFDLE1BQU1DLHNEQUFTLENBQUN2QyxJQUFELENBQWhCLEVBQXdCZ0MsT0FBeEIsQ0FBVjtBQUNEOztBQUVELFNBQU90RSxNQUFNLENBQUNDLE1BQVAsQ0FBYyxJQUFkLEVBQW9CO0FBQ3pCcUMsUUFBSSxFQUFFO0FBQ0puQyxXQUFLLEVBQUVtQztBQURILEtBRG1CO0FBSXpCd0MsY0FBVSxFQUFFO0FBQ1YzRSxXQUFLLEVBQUUsQ0FBQyxDQUFDZ0U7QUFEQyxLQUphO0FBT3pCUSxXQUFPLEVBQUU7QUFDUHhFLFdBQUssRUFBRXdFO0FBREE7QUFQZ0IsR0FBcEIsQ0FBUDtBQVdEOztBQUVELFNBQVNJLFNBQVQsQ0FBbUJDLEtBQUssR0FBRyxDQUEzQixFQUE4QjtBQUM1QixTQUFPUixJQUFJLENBQUM7QUFBRUYsV0FBTyxFQUFFVTtBQUFYLEdBQUQsQ0FBWDtBQUNEOztBQUVELFNBQVNDLFNBQVQsQ0FBbUJaLFVBQW5CLEVBQStCMUMsT0FBL0IsRUFBd0M7QUFDdEMsU0FBTzZDLElBQUksQ0FBQztBQUFFSCxjQUFGO0FBQWMxQztBQUFkLEdBQUQsQ0FBWDtBQUNEOztBQUVELFNBQVN1RCxRQUFULENBQWtCdEQsT0FBbEIsRUFBMkI7QUFDekIsU0FBT0EsT0FBTyxDQUFDVSxJQUFSLENBQWFGLE1BQXBCO0FBQ0Q7O0FBRUQsU0FBUzBDLFVBQVQsQ0FBb0JsRCxPQUFwQixFQUE2QjtBQUMzQixTQUFPQSxPQUFPLENBQUNrRCxVQUFmO0FBQ0Q7O0FBRUQsU0FBU0gsT0FBVCxDQUFpQi9DLE9BQWpCLEVBQTBCO0FBQ3hCLFNBQU9BLE9BQU8sQ0FBQytDLE9BQWY7QUFDRDs7QUFFRCxTQUFTUSxTQUFULENBQW1CdkQsT0FBbkIsRUFBNEJ6QixLQUE1QixFQUFtQ3VDLFFBQVEsR0FBRyxNQUFNLENBQUUsQ0FBdEQsRUFBd0Q7QUFDdEQsUUFBTVksTUFBTSxHQUFHakIsMkRBQVUsQ0FBQ1QsT0FBTyxDQUFDVSxJQUFULEVBQWVuQyxLQUFmLEVBQXNCcUQsU0FBUyxDQUFDZCxRQUFELENBQS9CLENBQXpCOztBQUNBLE1BQUlZLE1BQU0sSUFBSVosUUFBZCxFQUF3QjtBQUN0QkEsWUFBUSxDQUFDWSxNQUFNLENBQUNuRCxLQUFSLENBQVI7QUFDRDtBQUNGOztBQUVELFNBQVNpRixTQUFULENBQW1CeEQsT0FBbkIsRUFBNEJjLFFBQVEsR0FBRyxNQUFNLENBQUUsQ0FBL0MsRUFBaUQ7QUFDL0MsUUFBTVksTUFBTSxHQUFHRiwyREFBVSxDQUFDeEIsT0FBTyxDQUFDVSxJQUFULEVBQWVrQixTQUFTLENBQUNkLFFBQUQsQ0FBeEIsQ0FBekI7O0FBQ0EsTUFBSVksTUFBTSxJQUFJWixRQUFkLEVBQXdCO0FBQ3RCQSxZQUFRLENBQUNZLE1BQU0sQ0FBQ25ELEtBQVIsQ0FBUjtBQUNEO0FBQ0Y7O0FBRUQsU0FBU2tGLElBQVQsQ0FBY3pELE9BQWQsRUFBdUJ6QixLQUF2QixFQUE4QjtBQUM1QixTQUFPLElBQUltRixPQUFKLENBQVlDLE9BQU8sSUFBSTtBQUM1QkosYUFBUyxDQUFDdkQsT0FBRCxFQUFVekIsS0FBVixFQUFpQm9GLE9BQWpCLENBQVQ7QUFDRCxHQUZNLENBQVA7QUFHRDs7QUFFRCxTQUFTQyxJQUFULENBQWM1RCxPQUFkLEVBQXVCO0FBQ3JCLFNBQU8sSUFBSTBELE9BQUosQ0FBWUMsT0FBTyxJQUFJO0FBQzVCSCxhQUFTLENBQUN4RCxPQUFELEVBQVUyRCxPQUFWLENBQVQ7QUFDRCxHQUZNLENBQVA7QUFHRDs7QUFFRCxTQUFTRSxXQUFULENBQXFCN0QsT0FBckIsRUFBOEI7QUFDNUIsU0FBTyxJQUFJMEQsT0FBSixDQUFZLENBQUNDLE9BQUQsRUFBVUcsTUFBVixLQUFxQjtBQUN0Q04sYUFBUyxDQUFDeEQsT0FBRCxFQUFVMEIsTUFBTSxJQUFJO0FBQzNCLFVBQUl0RCxNQUFNLENBQUMyRixTQUFQLENBQWlCQyxhQUFqQixDQUErQkMsSUFBL0IsQ0FBb0N0RCxLQUFLLENBQUNvRCxTQUExQyxFQUFxRHJDLE1BQXJELENBQUosRUFBa0U7QUFDaEVvQyxjQUFNLENBQUNwQyxNQUFELENBQU47QUFDRCxPQUZELE1BRU87QUFDTGlDLGVBQU8sQ0FBQ2pDLE1BQUQsQ0FBUDtBQUNEO0FBQ0YsS0FOUSxDQUFUO0FBT0QsR0FSTSxDQUFQO0FBU0Q7O0FBRUQsU0FBU0wsS0FBVCxDQUFlckIsT0FBZixFQUF3QjtBQUN0QmlELHdEQUFTLENBQUNqRCxPQUFPLENBQUNVLElBQVQsQ0FBVDtBQUNEOzs7Ozs7Ozs7Ozs7OztBQzFNRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7QUFPQTtBQU9BLE1BQU1wQyxLQUFLLEdBQUdFLDJEQUFDLEVBQWY7QUFFQSxNQUFNMEYsYUFBYSxHQUFHdEcsTUFBTSxDQUFDLGNBQUQsQ0FBNUI7QUFDQSxNQUFNdUcsZUFBZSxHQUFHdkcsTUFBTSxDQUFDLGdCQUFELENBQTlCO0FBQ0EsTUFBTXdHLFdBQVcsR0FBR3hHLE1BQU0sQ0FBQyxZQUFELENBQTFCO0FBRUEsTUFBTXlFLE9BQU8sR0FBRztBQUNkZ0MsV0FBUyxFQUFFLElBREc7QUFFZEMsZ0JBQWMsRUFBRUo7QUFGRixDQUFoQjtBQUtBLElBQUlLLFVBQVUsR0FBR0MsZ0JBQWdCLEVBQWpDO0FBQ0EsSUFBSUMsT0FBTyxHQUFHLEtBQWQ7QUFDQSxJQUFJQyxNQUFNLEdBQUcsSUFBYjs7QUFFQSxTQUFTRixnQkFBVCxHQUE0QjtBQUMxQixVQUFRRyxrQkFBa0IsRUFBMUI7QUFDRTtBQUNBO0FBQ0EsU0FBS1QsYUFBTDtBQUNFLGFBQU8sTUFBTTtBQUNYLFlBQUksRUFBRVEsTUFBTSxJQUFJRCxPQUFaLENBQUosRUFBMEI7QUFDeEJDLGdCQUFNLEdBQUcsSUFBVDtBQUNBRSxzQkFBWSxDQUFDQyxZQUFELENBQVo7QUFDRDtBQUNGLE9BTEQ7QUFPRjtBQUNBOztBQUNBLFNBQUtWLGVBQUw7QUFBc0I7QUFDcEIsY0FBTW5FLE9BQU8sR0FBRyxJQUFJOEUsY0FBSixFQUFoQjs7QUFDQTlFLGVBQU8sQ0FBQytFLEtBQVIsQ0FBY0MsU0FBZCxHQUEwQixNQUFNSCxZQUFZLEVBQTVDOztBQUNBLGVBQU8sTUFBTTtBQUNYLGNBQUksRUFBRUgsTUFBTSxJQUFJRCxPQUFaLENBQUosRUFBMEI7QUFDeEJDLGtCQUFNLEdBQUcsSUFBVDtBQUNBMUUsbUJBQU8sQ0FBQ2lGLEtBQVIsQ0FBY0MsV0FBZCxDQUEwQixDQUExQjtBQUNEO0FBQ0YsU0FMRDtBQU1EO0FBRUQ7QUFDQTs7QUFDQSxTQUFLZCxXQUFMO0FBQ0UsYUFBTyxNQUFNO0FBQ1gsWUFBSSxFQUFFTSxNQUFNLElBQUlELE9BQVosQ0FBSixFQUEwQjtBQUN4QkMsZ0JBQU0sR0FBRyxJQUFUO0FBQ0ExQixvQkFBVSxDQUFDNkIsWUFBRCxFQUFlLENBQWYsQ0FBVjtBQUNEO0FBQ0YsT0FMRDtBQTNCSjtBQWtDRDs7QUFFRCxTQUFTRixrQkFBVCxHQUE4QjtBQUM1QixVQUFRdEMsT0FBTyxDQUFDaUMsY0FBaEI7QUFDRSxTQUFLSCxlQUFMO0FBQ0UsVUFBSSxPQUFPVyxjQUFQLEtBQTBCLFdBQTlCLEVBQTJDO0FBQ3pDLGVBQU9YLGVBQVA7QUFDRDs7QUFDRCxhQUFPQyxXQUFQOztBQUVGLFNBQUtBLFdBQUw7QUFDRSxhQUFPQSxXQUFQOztBQUVGO0FBQ0UsVUFBSSxPQUFPUSxZQUFQLEtBQXdCLFdBQTVCLEVBQXlDO0FBQ3ZDLGVBQU9WLGFBQVA7QUFDRDs7QUFDRCxVQUFJLE9BQU9ZLGNBQVAsS0FBMEIsV0FBOUIsRUFBMkM7QUFDekMsZUFBT1gsZUFBUDtBQUNEOztBQUNELGFBQU9DLFdBQVA7QUFqQko7QUFtQkQ7O0FBRUQsU0FBU1MsWUFBVCxHQUF3QjtBQUN0QkosU0FBTyxHQUFHLElBQVY7QUFDQUMsUUFBTSxHQUFHLEtBQVQ7QUFDQSxNQUFJOUYsS0FBSyxHQUFHLENBQVo7O0FBRUEsV0FBUztBQUNQLFVBQU11RyxJQUFJLEdBQUdoRyw2REFBTyxDQUFDYixLQUFELENBQXBCOztBQUNBLFFBQUk2RyxJQUFJLEtBQUtsRSxtREFBYixFQUFvQjtBQUNsQjtBQUNEOztBQUVEa0UsUUFBSTs7QUFFSixRQUFJdkcsS0FBSyxJQUFJeUQsT0FBTyxDQUFDZ0MsU0FBckIsRUFBZ0M7QUFDOUI7QUFDRDs7QUFDRHpGLFNBQUs7QUFFTDZGLFdBQU8sR0FBRyxLQUFWOztBQUNBLFFBQUk1RiwyREFBTSxDQUFDUCxLQUFELENBQVYsRUFBbUI7QUFDakJpRyxnQkFBVTtBQUNYO0FBQ0Y7QUFDRjs7QUFFRCxTQUFTYSxhQUFULEdBQXlCO0FBQ3ZCYixZQUFVLEdBQUdDLGdCQUFnQixFQUE3QjtBQUNEOztBQUVELFNBQVNhLE1BQVQsQ0FBZ0I3QyxJQUFJLEdBQUcsSUFBdkIsRUFBNkI7QUFDM0IsTUFBSUEsSUFBSSxLQUFLLElBQWIsRUFBbUI7QUFDakIsV0FBT3BFLE1BQU0sQ0FBQ3VFLE1BQVAsQ0FBYyxFQUFkLEVBQWtCTixPQUFsQixDQUFQO0FBQ0Q7O0FBRUQsT0FBSyxNQUFNaUQsR0FBWCxJQUFrQmpELE9BQWxCLEVBQTJCO0FBQ3pCLFFBQUlpRCxHQUFHLElBQUk5QyxJQUFYLEVBQWlCO0FBQ2ZILGFBQU8sQ0FBQ2lELEdBQUQsQ0FBUCxHQUFlOUMsSUFBSSxDQUFDOEMsR0FBRCxDQUFuQjs7QUFFQSxVQUFJQSxHQUFHLEtBQUssZ0JBQVosRUFBOEI7QUFDNUJGLHFCQUFhO0FBQ2Q7QUFDRjtBQUNGO0FBQ0Y7O0FBRUQsU0FBU2hFLFFBQVQsQ0FBa0IrRCxJQUFsQixFQUF3QjtBQUN0QmpHLCtEQUFPLENBQUNaLEtBQUQsRUFBUTZHLElBQVIsQ0FBUDtBQUNBWixZQUFVO0FBQ1g7Ozs7Ozs7Ozs7Ozs7OztBQ3hJRDtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7QUFPQTs7QUFFQSxTQUFTZ0IsS0FBVCxDQUFlbkMsS0FBSyxHQUFHLENBQXZCLEVBQTBCO0FBQ3hCLFNBQU8sSUFBSU0sT0FBSixDQUFZQyxPQUFPLElBQUk7QUFDNUIsVUFBTTZCLEVBQUUsR0FBR3JDLGlFQUFTLENBQUNDLEtBQUQsQ0FBcEI7QUFDQUkscUVBQVMsQ0FBQ2dDLEVBQUQsRUFBSzdCLE9BQUwsQ0FBVDtBQUNELEdBSE0sQ0FBUDtBQUlEOztBQUVELFNBQVM4QixFQUFULENBQVk1RCxFQUFaLEVBQWdCLEdBQUc2RCxJQUFuQixFQUF5QjtBQUN2QixTQUFPN0QsRUFBRSxDQUFDLEdBQUc2RCxJQUFKLENBQVQ7QUFDRDs7Ozs7Ozs7Ozs7Ozs7QUNsQkQ7QUFBQTtBQUFBOzs7Ozs7QUFPQSxNQUFNQyxTQUFTLEdBQUd2SCxNQUFNLENBQUNDLE1BQVAsQ0FBYyxJQUFkLEVBQW9CO0FBQ3BDOEQsTUFBSSxFQUFFO0FBQ0o1RCxTQUFLLEVBQUVYLE1BQU0sQ0FBQ2dJLEdBQVAsQ0FBVyxpQkFBWDtBQURILEdBRDhCO0FBSXBDNUUsTUFBSSxFQUFFO0FBQ0p6QyxTQUFLLEVBQUVYLE1BQU0sQ0FBQ2dJLEdBQVAsQ0FBVyxpQkFBWDtBQURILEdBSjhCO0FBT3BDbEUsUUFBTSxFQUFFO0FBQ05uRCxTQUFLLEVBQUVYLE1BQU0sQ0FBQ2dJLEdBQVAsQ0FBVyxtQkFBWDtBQURELEdBUDRCO0FBVXBDakcsU0FBTyxFQUFFO0FBQ1BwQixTQUFLLEVBQUVYLE1BQU0sQ0FBQ2dJLEdBQVAsQ0FBVyxvQkFBWDtBQURBLEdBVjJCO0FBYXBDckgsT0FBSyxFQUFFO0FBQ0xBLFNBQUssRUFBRVgsTUFBTSxDQUFDZ0ksR0FBUCxDQUFXLGtCQUFYO0FBREY7QUFiNkIsQ0FBcEIsQ0FBbEI7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7O0FBT0E7Ozs7OztBQU1BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUJBOzs7Ozs7Ozs7OztBQVdBLE1BQU0zRSxLQUFLLEdBQUdyRCxNQUFNLENBQUMsT0FBRCxDQUFwQjtBQUVBOzs7Ozs7Ozs7OztBQVVBLE1BQU1pSSxLQUFLLEdBQUdqSSxNQUFNLENBQUMsT0FBRCxDQUFwQjtBQUVBOzs7Ozs7OztBQU9BLFNBQVNrSSxPQUFULENBQWlCN0gsR0FBakIsRUFBc0I7QUFDcEIsU0FBTyxDQUFDLEVBQUNBLEdBQUQsYUFBQ0EsR0FBRCx1QkFBQ0EsR0FBRyxDQUFHNEgsS0FBSCxDQUFKLENBQVI7QUFDRDtBQUVEOzs7Ozs7Ozs7QUFPQSxTQUFTdkgsS0FBVCxHQUFpQjtBQUNmLFNBQU9GLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLElBQWQsRUFBb0I7QUFDekIwSCxTQUFLLEVBQUU7QUFDTHhILFdBQUssRUFBRSxFQURGO0FBRUxzQixjQUFRLEVBQUU7QUFGTCxLQURrQjtBQU16Qm1HLFdBQU8sRUFBRTtBQUNQekgsV0FBSyxFQUFFLENBREE7QUFFUHNCLGNBQVEsRUFBRTtBQUZILEtBTmdCO0FBV3pCLEtBQUNnRyxLQUFELEdBQVM7QUFDUHRILFdBQUssRUFBRTtBQURBO0FBWGdCLEdBQXBCLENBQVA7QUFlRDtBQUVEOzs7Ozs7Ozs7OztBQVNBLFNBQVNLLEtBQVQsQ0FBZU4sS0FBZixFQUFzQjtBQUNwQixTQUFPQSxLQUFLLENBQUN5SCxLQUFOLENBQVlFLE1BQVosR0FBcUIzSCxLQUFLLENBQUMwSCxPQUFsQztBQUNEO0FBRUQ7Ozs7Ozs7Ozs7QUFRQSxTQUFTRSxPQUFULENBQWlCNUgsS0FBakIsRUFBd0I7QUFDdEIsU0FBT0EsS0FBSyxDQUFDeUgsS0FBTixDQUFZRSxNQUFaLEtBQXVCLENBQTlCO0FBQ0Q7QUFFRDs7Ozs7Ozs7O0FBT0EsU0FBUy9HLE9BQVQsQ0FBaUJaLEtBQWpCLEVBQXdCVyxJQUF4QixFQUE4QjtBQUM1QlgsT0FBSyxDQUFDeUgsS0FBTixDQUFZSSxJQUFaLENBQWlCbEgsSUFBakI7QUFDRDtBQUVEOzs7Ozs7Ozs7OztBQVNBLFNBQVNFLE9BQVQsQ0FBaUJiLEtBQWpCLEVBQXdCO0FBQ3RCLE1BQUlBLEtBQUssQ0FBQ3lILEtBQU4sQ0FBWUUsTUFBWixLQUF1QixDQUEzQixFQUE4QjtBQUM1QixXQUFPaEYsS0FBUDtBQUNEOztBQUVELFFBQU1oQyxJQUFJLEdBQUdYLEtBQUssQ0FBQ3lILEtBQU4sQ0FBWXpILEtBQUssQ0FBQzBILE9BQWxCLENBQWIsQ0FMc0IsQ0FNdEI7QUFDQTtBQUNBOztBQUNBLE1BQUksRUFBRTFILEtBQUssQ0FBQzBILE9BQVIsR0FBa0IsQ0FBbEIsSUFBdUIxSCxLQUFLLENBQUN5SCxLQUFOLENBQVlFLE1BQXZDLEVBQStDO0FBQzdDM0gsU0FBSyxDQUFDeUgsS0FBTixHQUFjekgsS0FBSyxDQUFDeUgsS0FBTixDQUFZSyxLQUFaLENBQWtCOUgsS0FBSyxDQUFDMEgsT0FBeEIsQ0FBZDtBQUNBMUgsU0FBSyxDQUFDMEgsT0FBTixHQUFnQixDQUFoQjtBQUNEOztBQUNELFNBQU8vRyxJQUFQO0FBQ0Q7QUFFRDs7Ozs7Ozs7O0FBT0EsU0FBU29ILElBQVQsQ0FBYy9ILEtBQWQsRUFBcUI7QUFDbkIsU0FBT0EsS0FBSyxDQUFDeUgsS0FBTixDQUFZRSxNQUFaLEtBQXVCLENBQXZCLEdBQTJCaEYsS0FBM0IsR0FBbUMzQyxLQUFLLENBQUN5SCxLQUFOLENBQVl6SCxLQUFLLENBQUMwSCxPQUFsQixDQUExQztBQUNEO0FBRUQ7Ozs7Ozs7Ozs7OztBQVVBLFNBQVMxRSxNQUFULENBQWdCaEQsS0FBaEIsRUFBdUJnSSxTQUF2QixFQUFrQztBQUNoQyxPQUFLLElBQUlDLENBQUMsR0FBRyxDQUFSLEVBQVdDLEdBQUcsR0FBRzVILEtBQUssQ0FBQ04sS0FBRCxDQUEzQixFQUFvQ2lJLENBQUMsR0FBR0MsR0FBeEMsRUFBNkNELENBQUMsRUFBOUMsRUFBa0Q7QUFDaEQsVUFBTXRILElBQUksR0FBR0UsT0FBTyxDQUFDYixLQUFELENBQXBCOztBQUNBLFFBQUlnSSxTQUFTLENBQUNySCxJQUFELENBQWIsRUFBcUI7QUFDbkJDLGFBQU8sQ0FBQ1osS0FBRCxFQUFRVyxJQUFSLENBQVA7QUFDRDtBQUNGO0FBQ0YiLCJmaWxlIjoiY2hhbmtvLmRldi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImNoYW5rb1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJjaGFua29cIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsIihmdW5jdGlvbiAoZ2xvYmFsLCB1bmRlZmluZWQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIGlmIChnbG9iYWwuc2V0SW1tZWRpYXRlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgbmV4dEhhbmRsZSA9IDE7IC8vIFNwZWMgc2F5cyBncmVhdGVyIHRoYW4gemVyb1xuICAgIHZhciB0YXNrc0J5SGFuZGxlID0ge307XG4gICAgdmFyIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IGZhbHNlO1xuICAgIHZhciBkb2MgPSBnbG9iYWwuZG9jdW1lbnQ7XG4gICAgdmFyIHJlZ2lzdGVySW1tZWRpYXRlO1xuXG4gICAgZnVuY3Rpb24gc2V0SW1tZWRpYXRlKGNhbGxiYWNrKSB7XG4gICAgICAvLyBDYWxsYmFjayBjYW4gZWl0aGVyIGJlIGEgZnVuY3Rpb24gb3IgYSBzdHJpbmdcbiAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBjYWxsYmFjayA9IG5ldyBGdW5jdGlvbihcIlwiICsgY2FsbGJhY2spO1xuICAgICAgfVxuICAgICAgLy8gQ29weSBmdW5jdGlvbiBhcmd1bWVudHNcbiAgICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaSArIDFdO1xuICAgICAgfVxuICAgICAgLy8gU3RvcmUgYW5kIHJlZ2lzdGVyIHRoZSB0YXNrXG4gICAgICB2YXIgdGFzayA9IHsgY2FsbGJhY2s6IGNhbGxiYWNrLCBhcmdzOiBhcmdzIH07XG4gICAgICB0YXNrc0J5SGFuZGxlW25leHRIYW5kbGVdID0gdGFzaztcbiAgICAgIHJlZ2lzdGVySW1tZWRpYXRlKG5leHRIYW5kbGUpO1xuICAgICAgcmV0dXJuIG5leHRIYW5kbGUrKztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhckltbWVkaWF0ZShoYW5kbGUpIHtcbiAgICAgICAgZGVsZXRlIHRhc2tzQnlIYW5kbGVbaGFuZGxlXTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBydW4odGFzaykge1xuICAgICAgICB2YXIgY2FsbGJhY2sgPSB0YXNrLmNhbGxiYWNrO1xuICAgICAgICB2YXIgYXJncyA9IHRhc2suYXJncztcbiAgICAgICAgc3dpdGNoIChhcmdzLmxlbmd0aCkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIGNhbGxiYWNrKGFyZ3NbMF0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIGNhbGxiYWNrKGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIGNhbGxiYWNrKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBjYWxsYmFjay5hcHBseSh1bmRlZmluZWQsIGFyZ3MpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBydW5JZlByZXNlbnQoaGFuZGxlKSB7XG4gICAgICAgIC8vIEZyb20gdGhlIHNwZWM6IFwiV2FpdCB1bnRpbCBhbnkgaW52b2NhdGlvbnMgb2YgdGhpcyBhbGdvcml0aG0gc3RhcnRlZCBiZWZvcmUgdGhpcyBvbmUgaGF2ZSBjb21wbGV0ZWQuXCJcbiAgICAgICAgLy8gU28gaWYgd2UncmUgY3VycmVudGx5IHJ1bm5pbmcgYSB0YXNrLCB3ZSdsbCBuZWVkIHRvIGRlbGF5IHRoaXMgaW52b2NhdGlvbi5cbiAgICAgICAgaWYgKGN1cnJlbnRseVJ1bm5pbmdBVGFzaykge1xuICAgICAgICAgICAgLy8gRGVsYXkgYnkgZG9pbmcgYSBzZXRUaW1lb3V0LiBzZXRJbW1lZGlhdGUgd2FzIHRyaWVkIGluc3RlYWQsIGJ1dCBpbiBGaXJlZm94IDcgaXQgZ2VuZXJhdGVkIGFcbiAgICAgICAgICAgIC8vIFwidG9vIG11Y2ggcmVjdXJzaW9uXCIgZXJyb3IuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KHJ1bklmUHJlc2VudCwgMCwgaGFuZGxlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciB0YXNrID0gdGFza3NCeUhhbmRsZVtoYW5kbGVdO1xuICAgICAgICAgICAgaWYgKHRhc2spIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50bHlSdW5uaW5nQVRhc2sgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJ1bih0YXNrKTtcbiAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckltbWVkaWF0ZShoYW5kbGUpO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50bHlSdW5uaW5nQVRhc2sgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsTmV4dFRpY2tJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIHByb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24gKCkgeyBydW5JZlByZXNlbnQoaGFuZGxlKTsgfSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FuVXNlUG9zdE1lc3NhZ2UoKSB7XG4gICAgICAgIC8vIFRoZSB0ZXN0IGFnYWluc3QgYGltcG9ydFNjcmlwdHNgIHByZXZlbnRzIHRoaXMgaW1wbGVtZW50YXRpb24gZnJvbSBiZWluZyBpbnN0YWxsZWQgaW5zaWRlIGEgd2ViIHdvcmtlcixcbiAgICAgICAgLy8gd2hlcmUgYGdsb2JhbC5wb3N0TWVzc2FnZWAgbWVhbnMgc29tZXRoaW5nIGNvbXBsZXRlbHkgZGlmZmVyZW50IGFuZCBjYW4ndCBiZSB1c2VkIGZvciB0aGlzIHB1cnBvc2UuXG4gICAgICAgIGlmIChnbG9iYWwucG9zdE1lc3NhZ2UgJiYgIWdsb2JhbC5pbXBvcnRTY3JpcHRzKSB7XG4gICAgICAgICAgICB2YXIgcG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cyA9IHRydWU7XG4gICAgICAgICAgICB2YXIgb2xkT25NZXNzYWdlID0gZ2xvYmFsLm9ubWVzc2FnZTtcbiAgICAgICAgICAgIGdsb2JhbC5vbm1lc3NhZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzID0gZmFsc2U7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKFwiXCIsIFwiKlwiKTtcbiAgICAgICAgICAgIGdsb2JhbC5vbm1lc3NhZ2UgPSBvbGRPbk1lc3NhZ2U7XG4gICAgICAgICAgICByZXR1cm4gcG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxQb3N0TWVzc2FnZUltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICAvLyBJbnN0YWxscyBhbiBldmVudCBoYW5kbGVyIG9uIGBnbG9iYWxgIGZvciB0aGUgYG1lc3NhZ2VgIGV2ZW50OiBzZWVcbiAgICAgICAgLy8gKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9ET00vd2luZG93LnBvc3RNZXNzYWdlXG4gICAgICAgIC8vICogaHR0cDovL3d3dy53aGF0d2cub3JnL3NwZWNzL3dlYi1hcHBzL2N1cnJlbnQtd29yay9tdWx0aXBhZ2UvY29tbXMuaHRtbCNjcm9zc0RvY3VtZW50TWVzc2FnZXNcblxuICAgICAgICB2YXIgbWVzc2FnZVByZWZpeCA9IFwic2V0SW1tZWRpYXRlJFwiICsgTWF0aC5yYW5kb20oKSArIFwiJFwiO1xuICAgICAgICB2YXIgb25HbG9iYWxNZXNzYWdlID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChldmVudC5zb3VyY2UgPT09IGdsb2JhbCAmJlxuICAgICAgICAgICAgICAgIHR5cGVvZiBldmVudC5kYXRhID09PSBcInN0cmluZ1wiICYmXG4gICAgICAgICAgICAgICAgZXZlbnQuZGF0YS5pbmRleE9mKG1lc3NhZ2VQcmVmaXgpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcnVuSWZQcmVzZW50KCtldmVudC5kYXRhLnNsaWNlKG1lc3NhZ2VQcmVmaXgubGVuZ3RoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICAgICAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgb25HbG9iYWxNZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBnbG9iYWwuYXR0YWNoRXZlbnQoXCJvbm1lc3NhZ2VcIiwgb25HbG9iYWxNZXNzYWdlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBnbG9iYWwucG9zdE1lc3NhZ2UobWVzc2FnZVByZWZpeCArIGhhbmRsZSwgXCIqXCIpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxNZXNzYWdlQ2hhbm5lbEltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICB2YXIgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICAgICAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgaGFuZGxlID0gZXZlbnQuZGF0YTtcbiAgICAgICAgICAgIHJ1bklmUHJlc2VudChoYW5kbGUpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBjaGFubmVsLnBvcnQyLnBvc3RNZXNzYWdlKGhhbmRsZSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbFJlYWR5U3RhdGVDaGFuZ2VJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgdmFyIGh0bWwgPSBkb2MuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgLy8gQ3JlYXRlIGEgPHNjcmlwdD4gZWxlbWVudDsgaXRzIHJlYWR5c3RhdGVjaGFuZ2UgZXZlbnQgd2lsbCBiZSBmaXJlZCBhc3luY2hyb25vdXNseSBvbmNlIGl0IGlzIGluc2VydGVkXG4gICAgICAgICAgICAvLyBpbnRvIHRoZSBkb2N1bWVudC4gRG8gc28sIHRodXMgcXVldWluZyB1cCB0aGUgdGFzay4gUmVtZW1iZXIgdG8gY2xlYW4gdXAgb25jZSBpdCdzIGJlZW4gY2FsbGVkLlxuICAgICAgICAgICAgdmFyIHNjcmlwdCA9IGRvYy5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICAgICAgICAgICAgc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBydW5JZlByZXNlbnQoaGFuZGxlKTtcbiAgICAgICAgICAgICAgICBzY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlID0gbnVsbDtcbiAgICAgICAgICAgICAgICBodG1sLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG4gICAgICAgICAgICAgICAgc2NyaXB0ID0gbnVsbDtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBodG1sLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbFNldFRpbWVvdXRJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQocnVuSWZQcmVzZW50LCAwLCBoYW5kbGUpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8vIElmIHN1cHBvcnRlZCwgd2Ugc2hvdWxkIGF0dGFjaCB0byB0aGUgcHJvdG90eXBlIG9mIGdsb2JhbCwgc2luY2UgdGhhdCBpcyB3aGVyZSBzZXRUaW1lb3V0IGV0IGFsLiBsaXZlLlxuICAgIHZhciBhdHRhY2hUbyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiAmJiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoZ2xvYmFsKTtcbiAgICBhdHRhY2hUbyA9IGF0dGFjaFRvICYmIGF0dGFjaFRvLnNldFRpbWVvdXQgPyBhdHRhY2hUbyA6IGdsb2JhbDtcblxuICAgIC8vIERvbid0IGdldCBmb29sZWQgYnkgZS5nLiBicm93c2VyaWZ5IGVudmlyb25tZW50cy5cbiAgICBpZiAoe30udG9TdHJpbmcuY2FsbChnbG9iYWwucHJvY2VzcykgPT09IFwiW29iamVjdCBwcm9jZXNzXVwiKSB7XG4gICAgICAgIC8vIEZvciBOb2RlLmpzIGJlZm9yZSAwLjlcbiAgICAgICAgaW5zdGFsbE5leHRUaWNrSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoY2FuVXNlUG9zdE1lc3NhZ2UoKSkge1xuICAgICAgICAvLyBGb3Igbm9uLUlFMTAgbW9kZXJuIGJyb3dzZXJzXG4gICAgICAgIGluc3RhbGxQb3N0TWVzc2FnZUltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGdsb2JhbC5NZXNzYWdlQ2hhbm5lbCkge1xuICAgICAgICAvLyBGb3Igd2ViIHdvcmtlcnMsIHdoZXJlIHN1cHBvcnRlZFxuICAgICAgICBpbnN0YWxsTWVzc2FnZUNoYW5uZWxJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChkb2MgJiYgXCJvbnJlYWR5c3RhdGVjaGFuZ2VcIiBpbiBkb2MuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKSkge1xuICAgICAgICAvLyBGb3IgSUUgNuKAkzhcbiAgICAgICAgaW5zdGFsbFJlYWR5U3RhdGVDaGFuZ2VJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gRm9yIG9sZGVyIGJyb3dzZXJzXG4gICAgICAgIGluc3RhbGxTZXRUaW1lb3V0SW1wbGVtZW50YXRpb24oKTtcbiAgICB9XG5cbiAgICBhdHRhY2hUby5zZXRJbW1lZGlhdGUgPSBzZXRJbW1lZGlhdGU7XG4gICAgYXR0YWNoVG8uY2xlYXJJbW1lZGlhdGUgPSBjbGVhckltbWVkaWF0ZTtcbn0odHlwZW9mIHNlbGYgPT09IFwidW5kZWZpbmVkXCIgPyB0eXBlb2YgZ2xvYmFsID09PSBcInVuZGVmaW5lZFwiID8gdGhpcyA6IGdsb2JhbCA6IHNlbGYpKTtcbiIsInZhciBzY29wZSA9ICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiICYmIGdsb2JhbCkgfHxcbiAgICAgICAgICAgICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzZWxmKSB8fFxuICAgICAgICAgICAgd2luZG93O1xudmFyIGFwcGx5ID0gRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5O1xuXG4vLyBET00gQVBJcywgZm9yIGNvbXBsZXRlbmVzc1xuXG5leHBvcnRzLnNldFRpbWVvdXQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBUaW1lb3V0KGFwcGx5LmNhbGwoc2V0VGltZW91dCwgc2NvcGUsIGFyZ3VtZW50cyksIGNsZWFyVGltZW91dCk7XG59O1xuZXhwb3J0cy5zZXRJbnRlcnZhbCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFRpbWVvdXQoYXBwbHkuY2FsbChzZXRJbnRlcnZhbCwgc2NvcGUsIGFyZ3VtZW50cyksIGNsZWFySW50ZXJ2YWwpO1xufTtcbmV4cG9ydHMuY2xlYXJUaW1lb3V0ID1cbmV4cG9ydHMuY2xlYXJJbnRlcnZhbCA9IGZ1bmN0aW9uKHRpbWVvdXQpIHtcbiAgaWYgKHRpbWVvdXQpIHtcbiAgICB0aW1lb3V0LmNsb3NlKCk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIFRpbWVvdXQoaWQsIGNsZWFyRm4pIHtcbiAgdGhpcy5faWQgPSBpZDtcbiAgdGhpcy5fY2xlYXJGbiA9IGNsZWFyRm47XG59XG5UaW1lb3V0LnByb3RvdHlwZS51bnJlZiA9IFRpbWVvdXQucHJvdG90eXBlLnJlZiA9IGZ1bmN0aW9uKCkge307XG5UaW1lb3V0LnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLl9jbGVhckZuLmNhbGwoc2NvcGUsIHRoaXMuX2lkKTtcbn07XG5cbi8vIERvZXMgbm90IHN0YXJ0IHRoZSB0aW1lLCBqdXN0IHNldHMgdXAgdGhlIG1lbWJlcnMgbmVlZGVkLlxuZXhwb3J0cy5lbnJvbGwgPSBmdW5jdGlvbihpdGVtLCBtc2Vjcykge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG4gIGl0ZW0uX2lkbGVUaW1lb3V0ID0gbXNlY3M7XG59O1xuXG5leHBvcnRzLnVuZW5yb2xsID0gZnVuY3Rpb24oaXRlbSkge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG4gIGl0ZW0uX2lkbGVUaW1lb3V0ID0gLTE7XG59O1xuXG5leHBvcnRzLl91bnJlZkFjdGl2ZSA9IGV4cG9ydHMuYWN0aXZlID0gZnVuY3Rpb24oaXRlbSkge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG5cbiAgdmFyIG1zZWNzID0gaXRlbS5faWRsZVRpbWVvdXQ7XG4gIGlmIChtc2VjcyA+PSAwKSB7XG4gICAgaXRlbS5faWRsZVRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gb25UaW1lb3V0KCkge1xuICAgICAgaWYgKGl0ZW0uX29uVGltZW91dClcbiAgICAgICAgaXRlbS5fb25UaW1lb3V0KCk7XG4gICAgfSwgbXNlY3MpO1xuICB9XG59O1xuXG4vLyBzZXRpbW1lZGlhdGUgYXR0YWNoZXMgaXRzZWxmIHRvIHRoZSBnbG9iYWwgb2JqZWN0XG5yZXF1aXJlKFwic2V0aW1tZWRpYXRlXCIpO1xuLy8gT24gc29tZSBleG90aWMgZW52aXJvbm1lbnRzLCBpdCdzIG5vdCBjbGVhciB3aGljaCBvYmplY3QgYHNldGltbWVkaWF0ZWAgd2FzXG4vLyBhYmxlIHRvIGluc3RhbGwgb250by4gIFNlYXJjaCBlYWNoIHBvc3NpYmlsaXR5IGluIHRoZSBzYW1lIG9yZGVyIGFzIHRoZVxuLy8gYHNldGltbWVkaWF0ZWAgbGlicmFyeS5cbmV4cG9ydHMuc2V0SW1tZWRpYXRlID0gKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmIHNlbGYuc2V0SW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBnbG9iYWwuc2V0SW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAodGhpcyAmJiB0aGlzLnNldEltbWVkaWF0ZSk7XG5leHBvcnRzLmNsZWFySW1tZWRpYXRlID0gKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmIHNlbGYuY2xlYXJJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgJiYgZ2xvYmFsLmNsZWFySW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzICYmIHRoaXMuY2xlYXJJbW1lZGlhdGUpO1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG5cbmV4cG9ydCB7IGZpeGVkLCBkcm9wcGluZywgc2xpZGluZyB9IGZyb20gXCJtb2R1bGVzL2J1ZmZlclwiO1xuZXhwb3J0IHtcbiAgQ0xPU0VELFxuICBjaGFuLFxuICB0aW1lZENoYW4sXG4gIHRyYW5zQ2hhbixcbiAgc2VuZCxcbiAgcmVjdixcbiAgc2VuZEFzeW5jLFxuICByZWN2QXN5bmMsXG4gIHJlY3ZPclRocm93LFxuICBjbG9zZSxcbiAgaXNDbG9zZWQsXG4gIGlzQnVmZmVyZWQsXG4gIGlzVGltZWQsXG59IGZyb20gXCJtb2R1bGVzL2NoYW5uZWxcIjtcbmV4cG9ydCB7XG4gIGNvbmZpZyxcbiAgU0VUX0lNTUVESUFURSxcbiAgTUVTU0FHRV9DSEFOTkVMLFxuICBTRVRfVElNRU9VVCxcbn0gZnJvbSBcIm1vZHVsZXMvZGlzcGF0Y2hlclwiO1xuZXhwb3J0IHsgZ28sIHNsZWVwIH0gZnJvbSBcIm1vZHVsZXMvcHJvY2Vzc1wiO1xuZXhwb3J0IHsgRU1QVFkgfSBmcm9tIFwibW9kdWxlcy9xdWV1ZVwiO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG5cbmltcG9ydCB7IHF1ZXVlIGFzIHEsIGNvdW50IGFzIHFDb3VudCwgZW5xdWV1ZSwgZGVxdWV1ZSB9IGZyb20gXCJtb2R1bGVzL3F1ZXVlXCI7XG5cbmNvbnN0IEJVRkZFUiA9IFN5bWJvbChcImJ1ZmZlclwiKTtcbmNvbnN0IEZJWEVEID0gU3ltYm9sKFwiZml4ZWRcIik7XG5jb25zdCBEUk9QUElORyA9IFN5bWJvbChcImRyb3BwaW5nXCIpO1xuY29uc3QgU0xJRElORyA9IFN5bWJvbChcInNsaWRpbmdcIik7XG5cbmZ1bmN0aW9uIGlzQnVmZmVyKG9iaikge1xuICByZXR1cm4gISFvYmo/LltCVUZGRVJdO1xufVxuXG5mdW5jdGlvbiBmaXhlZChzaXplKSB7XG4gIHJldHVybiBPYmplY3QuY3JlYXRlKG51bGwsIHtcbiAgICBxdWV1ZToge1xuICAgICAgdmFsdWU6IHEoKVxuICAgIH0sXG5cbiAgICBzaXplOiB7XG4gICAgICB2YWx1ZTogc2l6ZVxuICAgIH0sXG5cbiAgICBbQlVGRkVSXToge1xuICAgICAgdmFsdWU6IEZJWEVEXG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gZHJvcHBpbmcoc2l6ZSkge1xuICByZXR1cm4gT2JqZWN0LmNyZWF0ZShudWxsLCB7XG4gICAgcXVldWU6IHtcbiAgICAgIHZhbHVlOiBxKClcbiAgICB9LFxuXG4gICAgc2l6ZToge1xuICAgICAgdmFsdWU6IHNpemVcbiAgICB9LFxuXG4gICAgW0JVRkZFUl06IHtcbiAgICAgIHZhbHVlOiBEUk9QUElOR1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNsaWRpbmcoc2l6ZSkge1xuICByZXR1cm4gT2JqZWN0LmNyZWF0ZShudWxsLCB7XG4gICAgcXVldWU6IHtcbiAgICAgIHZhbHVlOiBxKClcbiAgICB9LFxuXG4gICAgc2l6ZToge1xuICAgICAgdmFsdWU6IHNpemVcbiAgICB9LFxuXG4gICAgW0JVRkZFUl06IHtcbiAgICAgIHZhbHVlOiBTTElESU5HXG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gcXVldWUoYnVmZmVyKSB7XG4gIHJldHVybiBidWZmZXIucXVldWU7XG59XG5cbmZ1bmN0aW9uIHNpemUoYnVmZmVyKSB7XG4gIHJldHVybiBidWZmZXIuc2l6ZTtcbn1cblxuZnVuY3Rpb24gY291bnQoYnVmZmVyKSB7XG4gIHJldHVybiBxQ291bnQoYnVmZmVyLnF1ZXVlKTtcbn1cblxuZnVuY3Rpb24gaXNGdWxsKGJ1ZmZlcikge1xuICByZXR1cm4gYnVmZmVyW0JVRkZFUl0gPT09IEZJWEVEID8gcUNvdW50KGJ1ZmZlci5xdWV1ZSkgPj0gYnVmZmVyLnNpemUgOiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gYWRkKGJ1ZmZlciwgLi4uaXRlbXMpIHtcbiAgc3dpdGNoIChidWZmZXJbQlVGRkVSXSkge1xuICAgIGNhc2UgRklYRUQ6XG4gICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgaXRlbXMpIHtcbiAgICAgICAgZW5xdWV1ZShidWZmZXIucXVldWUsIGl0ZW0pO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIERST1BQSU5HOlxuICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGl0ZW1zKSB7XG4gICAgICAgIGlmIChjb3VudChidWZmZXIpIDwgc2l6ZShidWZmZXIpKSB7XG4gICAgICAgICAgZW5xdWV1ZShidWZmZXIucXVldWUsIGl0ZW0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgU0xJRElORzpcbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBpdGVtcykge1xuICAgICAgICBpZiAoY291bnQoYnVmZmVyKSA+PSBzaXplKGJ1ZmZlcikpIHtcbiAgICAgICAgICBkZXF1ZXVlKGJ1ZmZlci5xdWV1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZW5xdWV1ZShidWZmZXIucXVldWUsIGl0ZW0pO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZShidWZmZXIpIHtcbiAgcmV0dXJuIGRlcXVldWUoYnVmZmVyLnF1ZXVlKTtcbn1cblxuZXhwb3J0IHtcbiAgaXNCdWZmZXIsXG4gIGZpeGVkLFxuICBkcm9wcGluZyxcbiAgc2xpZGluZyxcbiAgcXVldWUsXG4gIHNpemUsXG4gIGNvdW50LFxuICBpc0Z1bGwsXG4gIGFkZCxcbiAgcmVtb3ZlXG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG5cbmltcG9ydCB7IHByb3RvY29scyBhcyBwIH0gZnJvbSBcIm1vZHVsZXMvcHJvdG9jb2xcIjtcbmltcG9ydCB7XG4gIHF1ZXVlLFxuICBkZXF1ZXVlLFxuICBFTVBUWSxcbiAgZmlsdGVyLFxuICBjb3VudCBhcyBxQ291bnQsXG4gIGVucXVldWUsXG59IGZyb20gXCJtb2R1bGVzL3F1ZXVlXCI7XG5pbXBvcnQgeyBpc0Z1bGwsIGNvdW50LCByZW1vdmUgfSBmcm9tIFwibW9kdWxlcy9idWZmZXJcIjtcbmltcG9ydCB7IGRpc3BhdGNoIH0gZnJvbSBcIm1vZHVsZXMvZGlzcGF0Y2hlclwiO1xuXG5jb25zdCBNQVhfRElSVFkgPSA2NDtcbmNvbnN0IE1BWF9RVUVVRUQgPSAxMDI0O1xuXG5jb25zdCBCT1ggPSBTeW1ib2woXCJib3hcIik7XG5cbmNvbnN0IENMT1NFRCA9IFN5bWJvbChcImNsb3NlZFwiKTtcblxuZnVuY3Rpb24gaXNSZWR1Y2VkKHZhbHVlKSB7XG4gIHJldHVybiAhIXZhbHVlPy5bcC5yZWR1Y2VkXTtcbn1cblxuZnVuY3Rpb24gYm94KHZhbHVlKSB7XG4gIHJldHVybiBPYmplY3QuY3JlYXRlKG51bGwsIHtcbiAgICB2YWx1ZToge1xuICAgICAgdmFsdWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICB9LFxuICAgIFtCT1hdOiB7XG4gICAgICB2YWx1ZTogdHJ1ZSxcbiAgICB9LFxuICB9KTtcbn1cblxuZnVuY3Rpb24gc2VuZEJveCh2YWx1ZSwgaGFuZGxlcikge1xuICByZXR1cm4gT2JqZWN0LmNyZWF0ZShudWxsLCB7XG4gICAgdmFsdWU6IHtcbiAgICAgIHZhbHVlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgfSxcbiAgICBoYW5kbGVyOiB7XG4gICAgICB2YWx1ZTogaGFuZGxlcixcbiAgICB9LFxuICAgIFtCT1hdOiB7XG4gICAgICB2YWx1ZTogdHJ1ZSxcbiAgICB9LFxuICB9KTtcbn1cblxuZnVuY3Rpb24gY2hhbm5lbChidWZmZXIsIHhmb3JtLCBtYXhEaXJ0eSA9IE1BWF9ESVJUWSwgbWF4UXVldWVkID0gTUFYX1FVRVVFRCkge1xuICByZXR1cm4gT2JqZWN0LmNyZWF0ZShudWxsLCB7XG4gICAgYnVmZmVyOiB7XG4gICAgICB2YWx1ZTogYnVmZmVyLFxuICAgIH0sXG4gICAgeGZvcm06IHtcbiAgICAgIHZhbHVlOiB4Zm9ybSxcbiAgICB9LFxuICAgIG1heERpcnR5OiB7XG4gICAgICB2YWx1ZTogbWF4RGlydHksXG4gICAgfSxcbiAgICBtYXhRdWV1ZWQ6IHtcbiAgICAgIHZhbHVlOiBtYXhRdWV1ZWQsXG4gICAgfSxcbiAgICByZWN2czoge1xuICAgICAgdmFsdWU6IHF1ZXVlKCksXG4gICAgfSxcbiAgICBzZW5kczoge1xuICAgICAgdmFsdWU6IHF1ZXVlKCksXG4gICAgfSxcbiAgICBkaXJ0eVJlY3ZzOiB7XG4gICAgICB2YWx1ZTogMCxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgIH0sXG4gICAgZGlydHlTZW5kczoge1xuICAgICAgdmFsdWU6IDAsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICB9LFxuICAgIGNsb3NlZDoge1xuICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgfSxcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVNlbmQoaW1wbCwgdmFsdWUsIGhhbmRsZXIpIHtcbiAgaWYgKHZhbHVlID09PSBDTE9TRUQpIHtcbiAgICB0aHJvdyBFcnJvcihcIkNhbm5vdCBzZW5kIENMT1NFRCB0byBhIGNoYW5uZWxcIik7XG4gIH1cblxuICBpZiAoaW1wbC5jbG9zZWQpIHtcbiAgICBoYW5kbGVyLmNvbW1pdCgpO1xuICAgIHJldHVybiBib3goZmFsc2UpO1xuICB9XG5cbiAgbGV0IHJlY2VpdmVyLCBjYWxsYmFjaztcblxuICAvLyBQdXNoIHRoZSBpbmNvbWluZyB2YWx1ZSB0aHJvdWdoIHRoZSBidWZmZXIsIGV2ZW4gaWYgdGhlcmUncyBhbHJlYWR5IGFcbiAgLy8gcmVjZWl2ZXIgd2FpdGluZyBmb3IgdGhlIHZhbHVlLiBUaGlzIGlzIHRvIG1ha2Ugc3VyZSB0aGF0IHRoZSB0cmFuc2R1Y2VyXG4gIC8vIHN0ZXAgZnVuY3Rpb24gaGFzIGEgY2hhbmNlIHRvIGFjdCBvbiB0aGUgdmFsdWUgZmlyc3QsIHdoaWNoIGNvdWxkIGNoYW5nZVxuICAvLyB0aGUgdmFsdWUgb3IgbWFrZSBpdCBhbHRvZ2V0aGVyIHVuYXZhaWxhYmxlLlxuICAvL1xuICAvLyBJZiB0aGUgY2hhbm5lbCBpcyB1bmJ1ZmZlcmVkIHRoaXMgcHJvY2VzcyBpcyBza2lwcGVkICh0aGVyZSBjYW4ndCBiZSBhXG4gIC8vIHRyYW5zZHVjZXIgb24gYW4gdW5idWZmZXJlZCBjaGFubmVsIGFueXdheSkuIElmIHRoZSBidWZmZXIgaXMgZnVsbCwgdGhlXG4gIC8vIHRyYW5zZHVjZXIncyB3b3JrIGlzIGRlZmVycmVkIHVudGlsIGxhdGVyIHdoZW4gdGhlIGJ1ZmZlciBpcyBub3QgZnVsbC5cbiAgaWYgKGltcGwuYnVmZmVyICYmICFpc0Z1bGwoaW1wbC5idWZmZXIpKSB7XG4gICAgaGFuZGxlci5jb21taXQoKTtcbiAgICBjb25zdCBkb25lID0gaXNSZWR1Y2VkKGltcGwueGZvcm1bcC5zdGVwXShpbXBsLmJ1ZmZlciwgdmFsdWUpKTtcblxuICAgIGZvciAoOzspIHtcbiAgICAgIGlmIChjb3VudChpbXBsLmJ1ZmZlcikgPT09IDApIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICByZWNlaXZlciA9IGRlcXVldWUoaW1wbC5yZWN2cyk7XG4gICAgICBpZiAocmVjZWl2ZXIgPT09IEVNUFRZKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgaWYgKHJlY2VpdmVyLmFjdGl2ZSkge1xuICAgICAgICBjYWxsYmFjayA9IHJlY2VpdmVyLmNvbW1pdCgpO1xuICAgICAgICBjb25zdCB2YWwgPSByZW1vdmUoaW1wbC5idWZmZXIpO1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICBkaXNwYXRjaCgoKSA9PiBjYWxsYmFjayh2YWwpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChkb25lKSB7XG4gICAgICBjbG9zZShpbXBsKTtcbiAgICB9XG4gICAgcmV0dXJuIGJveCh0cnVlKTtcbiAgfVxuXG4gIC8vIFRoaXMgbG9vcCBoYXBwZW5zIGlmIHRoZSBjaGFubmVsIGlzIHVuYnVmZmVyZWQgYW5kIHRoZXJlIGlzIGF0IGxlYXN0IG9uZVxuICAvLyBwZW5kaW5nIHJlY2VpdmUuIChCdWZmZXJlZCBjaGFubmVscyBicmVhayBvdXQgb2YgdGhpcyBsb29wIGltbWVkaWF0ZWx5LFxuICAvLyBiZWNhdXNlIGluIG9yZGVyIGZvciBhIGJ1ZmZlcmVkIGNoYW5uZWwgdG8gcmVhY2ggdGhpcyBwb2ludCwgaXRzIGJ1ZmZlclxuICAvLyBtdXN0IGhhdmUgYmVlbiBmdWxsLiBJZiB0aGUgYnVmZmVyIGlzIGZ1bGwsIHRoYXQgbWVhbnMgdGhlcmUgYXJlIG5vIHBlbmRpbmdcbiAgLy8gcmVjZWl2ZXMgYW5kIHRoZSBmaXJzdCBvbmUgcmVhZCB3aWxsIGJlIEVNUFRZLikgSXQgcHJvY2Vzc2VzIHRoZSBuZXh0XG4gIC8vIHBlbmRpbmcgcmVjZWl2ZSBpbW1lZGlhdGVseS5cbiAgZm9yICg7Oykge1xuICAgIHJlY2VpdmVyID0gZGVxdWV1ZShpbXBsLnJlY3ZzKTtcbiAgICBpZiAocmVjZWl2ZXIgPT09IEVNUFRZKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgaWYgKHJlY2VpdmVyLmFjdGl2ZSkge1xuICAgICAgaGFuZGxlci5jb21taXQoKTtcbiAgICAgIGNhbGxiYWNrID0gcmVjZWl2ZXIuY29tbWl0KCk7XG4gICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgZGlzcGF0Y2goKCkgPT4gY2FsbGJhY2sodmFsdWUpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBib3godHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgLy8gSWYgdGhlcmUgYXJlIG5vIHBlbmRpbmcgcmVjZWl2ZXMgb24gYW4gdW5idWZmZXJlZCBjaGFubmVsLCBvciBvbiBhIGJ1ZmZlcmVkXG4gIC8vIGNoYW5uZWwgd2l0aCBhIGZ1bGwgYnVmZmVyLCB3ZSBxdWV1ZSB0aGUgc2VuZCB0byB0bGV0IGl0IHdhaXQgZm9yIGEgcmVjZWl2ZVxuICAvLyB0byBiZWNvbWUgYXZhaWxhYmxlLiBTZW5kcyB3aG9zZSBoYW5kbGVycyBoYXZlIGdvbmUgaW5hY3RpdmUgKHdoaWNoIGhhcHBlbnNcbiAgLy8gaWYgdGhleSB3ZXJlIHByb2Nlc3NlZCBhcyBwYXJ0IG9mIGEgYHNlbGVjdGAgY2FsbCkgYXJlIHBlcmlvZGljYWxseSBwdXJnZWQuXG4gIGlmIChpbXBsLmRpcnR5U2VuZHMgPiBpbXBsLm1heERpcnR5KSB7XG4gICAgZmlsdGVyKGltcGwuc2VuZHMsIHNlbmRlciA9PiBzZW5kZXIuaGFuZGxlci5hY3RpdmUpO1xuICAgIGltcGwuZGlydHlTZW5kcyA9IDA7XG4gIH0gZWxzZSB7XG4gICAgaW1wbC5kaXJ0eVNlbmRzKys7XG4gIH1cblxuICBpZiAocUNvdW50KGltcGwuc2VuZHMpID49IGltcGwubWF4UXVldWVkKSB7XG4gICAgdGhyb3cgRXJyb3IoXG4gICAgICBgTm8gbW9yZSB0aGFuICR7aW1wbC5tYXhRdWV1ZWR9IHBlbmRpbmcgc2VuZHMgYXJlIGFsbG93ZWQgb24gYSBzaW5nbGUgY2hhbm5lbGAsXG4gICAgKTtcbiAgfVxuICBlbnF1ZXVlKGltcGwuc2VuZHMsIHNlbmRCb3godmFsdWUsIGhhbmRsZXIpKTtcblxuICByZXR1cm4gbnVsbDtcbn1cblxuZnVuY3Rpb24gaGFuZGxlUmVjdihpbXBsLCBoYW5kbGVyKSB7XG4gIGxldCBzZW5kZXIsIHNlbmRIYW5kbGVyLCBjYWxsYmFjaztcblxuICAvLyBSdW5zIGlmIHRoZSBjaGFubmVsIGlzIGJ1ZmZlcmVkIGFuZCB0aGUgYnVmZmVyZWQgaXMgbm90IGVtcHR5IChhbiBlbXB0eVxuICAvLyBidWZmZXIgbWVhbnMgdGhlcmUgYXJlIG5vIHBlbmRpbmcgc2VuZHMpLiBXZSBpbW1lZGlhdGVseSBwcm9jZXNzIGFueSBzZW5kc1xuICAvLyB0aGF0IHdlcmUgcXVldWVkIHdoZW4gdGhlcmUgd2VyZSBubyBwZW5kaW5nIHJlY2VpdmVzLCB1cCB1bnRpbCB0aGUgYnVmZmVyXG4gIC8vIGlzIGZpbGxlZCB3aXRoIHNlbnQgdmFsdWVzLlxuICBpZiAoaW1wbC5idWZmZXIgJiYgY291bnQoaW1wbC5idWZmZXIpID4gMCkge1xuICAgIGhhbmRsZXIuY29tbWl0KCk7XG4gICAgY29uc3QgdmFsdWUgPSByZW1vdmUoaW1wbC5idWZmZXIpO1xuXG4gICAgZm9yICg7Oykge1xuICAgICAgaWYgKGlzRnVsbChpbXBsLmJ1ZmZlcikpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBzZW5kZXIgPSBkZXF1ZXVlKGltcGwuc2VuZHMpO1xuICAgICAgaWYgKHNlbmRlciA9PT0gRU1QVFkpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIHNlbmRIYW5kbGVyID0gc2VuZGVyLmhhbmRsZXI7XG4gICAgICBpZiAoc2VuZEhhbmRsZXIuYWN0aXZlKSB7XG4gICAgICAgIGNhbGxiYWNrID0gc2VuZEhhbmRsZXIuY29tbWl0KCk7XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgIGRpc3BhdGNoKCgpID0+IGNhbGxiYWNrKHRydWUpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNSZWR1Y2VkKGltcGwueGZvcm1bcC5zdGVwXShpbXBsLmJ1ZmZlciwgc2VuZGVyLnZhbHVlKSkpIHtcbiAgICAgICAgICBjbG9zZShpbXBsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYm94KHZhbHVlKTtcbiAgfVxuXG4gIC8vIFRoaXMgbG9vcCBydW5zIG9uIGFuIHVuYnVmZmVyZWQgY2hhbm5lbCBpZiB0aGVyZSBhcmUgYW55IHBlbmRpbmcgc2VuZHMuXG4gIC8vIChCdWZmZXJlZCBjaGFubmVscyBicmVhayBvdXQgb2YgdGhpcyBsb29wIGltbWVkaWF0ZWx5IGJlY2F1c2UgaW4gb3JkZXIgdG9cbiAgLy8gaGF2ZSBjb21lIHRoaXMgZmFyIHdpdGhvdXQgcmV0dXJuaW5nLCB0aGUgY2hhbm5lbCdzIGJ1ZmZlciBtdXN0IGhhdmUgYmVlblxuICAvLyBlbXB0eS4gQW4gZW1wdHkgYnVmZmVyIG1lYW5zIHRoZXJlIGFyZSBubyBwZW5kaW5nIHNlbmRzLCBzbyB0aGUgZmlyc3RcbiAgLy8gcGVuZGluZyBzZW5kIHJlYWQgZnJvbSBpdCB3aWxsIGJlIEVNUFRZLikgSXQgcHJvY2Vzc2VzIHRoZSBuZXh0IHBlbmRpbmdcbiAgLy8gc2VuZCBpbW1lZGlhdGVseS5cbiAgZm9yICg7Oykge1xuICAgIHNlbmRlciA9IGRlcXVldWUoaW1wbC5zZW5kcyk7XG4gICAgaWYgKHNlbmRlciA9PT0gRU1QVFkpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBzZW5kSGFuZGxlciA9IHNlbmRlci5oYW5kbGVyO1xuICAgIGlmIChzZW5kSGFuZGxlci5hY3RpdmUpIHtcbiAgICAgIGNhbGxiYWNrID0gc2VuZEhhbmRsZXIuY29tbWl0KCk7XG4gICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgZGlzcGF0Y2goKCkgPT4gY2FsbGJhY2sodHJ1ZSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGJveChzZW5kZXIudmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIC8vIElmIHdlJ3ZlIGV4aGF1c3RlZCBhbGwgb2Ygb3VyIHBlbmRpbmcgc2VuZHMgYW5kIHRoZSBjaGFubmVsIGlzIG1hcmtlZFxuICAvLyBjbG9zZWQsIHdlIGNhbiBmaW5hbGx5IHJldXRybiB0aGUgZmFjdCB0aGF0IHRoZSBjaGFubmVsIGlzIGNsb3NlZC4gVGhpc1xuICAvLyBlbnN1cmVzIHRoYXQgYW55IHNlbmRzIHRoYXQgd2VyZSBhbHJlYWR5IHBlbmRpbmcgb24gdGhlIGNoYW5uZWwgYXJlXG4gIC8vIHByb2Nlc3NlZCBiZWZvcmUgY2xvc3VyZSwgZXZlbiBpZiB0aGUgY2hhbm5lbCB3YXMgY2xvc2VkIGJlZm9yZSB0aGF0IGNvdWxkXG4gIC8vIGhhcHBlbi5cbiAgaWYgKGltcGwuY2xvc2VkKSB7XG4gICAgaGFuZGxlci5jb21taXQoKTtcbiAgICByZXR1cm4gYm94KENMT1NFRCk7XG4gIH1cblxuICAvLyBJZiBhbiB1bmJ1ZmZlcmVkIGNoYW5uZWwgb3IgYSBidWZmZXJlZCBjaGFubmVsIHdpdGggYW4gZW1wdHkgYnVmZmVyIGhhcyBub1xuICAvLyBwZW5kaW5nIHNlbmRzLCBhbmQgaWYgdGhlIGNoYW5uZWwgaXMgc3RpbGwgb3BlbiwgdGhlIHJlY2VpdmUgaXMgcXVldWVkIHRvXG4gIC8vIGJlIHByb2Nlc3NlZCB3aGVuIGEgc2VuZCBpcyBhdmFpbGFibGUuIFJlY2VpdmVzIHdob3NlIGhhbmRsZXJzIGhhdmUgZ29uZVxuICAvLyBpbmFjdGl2ZSBhcyB0aGUgcmVzdWx0IG9mIGBzZWxlY3RgIHByb2Nlc3NpbmcgYXJlIHBlcmlvZGljYWxseSBwdXJnZWQuXG4gIGlmIChpbXBsLmRpcnR5UmVjdnMgPiBpbXBsLm1heERpcnR5KSB7XG4gICAgZmlsdGVyKGltcGwucmVjdnMsIHJlY2VpdmVyID0+IHJlY2VpdmVyLmFjdGl2ZSk7XG4gICAgaW1wbC5kaXJ0eVJlY3ZzID0gMDtcbiAgfSBlbHNlIHtcbiAgICBpbXBsLmRpcnR5UmVjdnMrKztcbiAgfVxuXG4gIGlmIChxQ291bnQoaW1wbC5yZWN2cykgPj0gaW1wbC5tYXhRdWV1ZWQpIHtcbiAgICB0aHJvdyBFcnJvcihcbiAgICAgIGBObyBtb3JlIHRoYW4gJHtpbXBsLm1heFF1ZXVlZH0gcGVuZGluZyByZWNlaXZlcyBhcmUgYWxsb3dlZCBvbiBhIHNpbmdsZSBjaGFubmVsYCxcbiAgICApO1xuICB9XG4gIGVucXVldWUoaW1wbC5yZWN2cywgaGFuZGxlcik7XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIGNsb3NlKGltcGwpIHtcbiAgaWYgKGltcGwuY2xvc2VkKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGltcGwuY2xvc2VkID0gdHJ1ZTtcblxuICBsZXQgcmVjZWl2ZXIsIHNlbmRlciwgY2FsbGJhY2s7XG5cbiAgLy8gSWYgdGhlcmUgaXMgYSBidWZmZXIgYW5kIGl0IGhhcyBhdCBsZWFzdCBvbmUgdmFsdWUgaW4gaXQsIHNlbmQgdGhvc2UgdmFsdWVzXG4gIC8vIHRvIGFueSBwZW5kaW5nIHJlY2VpdmVzIHRoYXQgbWlnaHQgc3RpbGwgYmUgcXVldWVkLlxuICBpZiAoaW1wbC5idWZmZXIpIHtcbiAgICBpbXBsLnhmb3JtW3AucmVzdWx0XShpbXBsLmJ1ZmZlcik7XG4gICAgZm9yICg7Oykge1xuICAgICAgaWYgKGNvdW50KGltcGwuYnVmZmVyKSA9PT0gMCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHJlY2VpdmVyID0gZGVxdWV1ZShpbXBsLnJlY3ZzKTtcbiAgICAgIGlmIChyZWNlaXZlciA9PT0gRU1QVFkpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBpZiAocmVjZWl2ZXIuYWN0aXZlKSB7XG4gICAgICAgIGNhbGxiYWNrID0gcmVjZWl2ZXIuY29tbWl0KCk7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gcmVtb3ZlKGltcGwuYnVmZmVyKTtcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgZGlzcGF0Y2goKCkgPT4gY2FsbGJhY2sodmFsdWUpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIE9uY2UgdGhlIGJ1ZmZlciBpcyBlbXB0eSAob3IgaWYgdGhlcmUgaXNuJ3QgYSBidWZmZXIgYXQgYWxsKSwgc2VuZCBDTE9TRURcbiAgLy8gdG8gYWxsIHJlbWFpbmluZyBxdWV1ZWQgcmVjZWl2ZXMuXG4gIGZvciAoOzspIHtcbiAgICByZWNlaXZlciA9IGRlcXVldWUoaW1wbC5yZWN2cyk7XG4gICAgaWYgKHJlY2VpdmVyID09PSBFTVBUWSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGlmIChyZWNlaXZlci5hY3RpdmUpIHtcbiAgICAgIGNhbGxiYWNrID0gcmVjZWl2ZXIuY29tbWl0KCk7XG4gICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgZGlzcGF0Y2goKCkgPT4gY2FsbGJhY2soQ0xPU0VEKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gU2VuZCBgZmFsc2VgIHRvIGFueSByZW1haW5pbmcgcXVldWVkIHNlbmRzLlxuICBmb3IgKDs7KSB7XG4gICAgc2VuZGVyID0gZGVxdWV1ZShpbXBsLnNlbmRzKTtcbiAgICBpZiAoc2VuZGVyID09PSBFTVBUWSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGlmIChzZW5kZXIuaGFuZGxlci5hY3RpdmUpIHtcbiAgICAgIGNhbGxiYWNrID0gc2VuZGVyLmhhbmRsZXIuY29tbWl0KCk7XG4gICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgZGlzcGF0Y2goKCkgPT4gY2FsbGJhY2soZmFsc2UpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IHtcbiAgQ0xPU0VELFxuICBNQVhfRElSVFksXG4gIE1BWF9RVUVVRUQsXG4gIGNoYW5uZWwsXG4gIGhhbmRsZVNlbmQsXG4gIGhhbmRsZVJlY3YsXG4gIGNsb3NlLFxufTtcbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbi8vIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG5cbmltcG9ydCB7XG4gIENMT1NFRCxcbiAgY2hhbm5lbCBhcyBjaGFuSW1wbCxcbiAgaGFuZGxlU2VuZCxcbiAgaGFuZGxlUmVjdixcbiAgY2xvc2UgYXMgY2xvc2VJbXBsLFxuICBNQVhfRElSVFksXG4gIE1BWF9RVUVVRUQsXG59IGZyb20gXCIuL2hhbmRsZXJcIjtcbmltcG9ydCB7IGFkZCwgZml4ZWQsIGlzQnVmZmVyIH0gZnJvbSBcIm1vZHVsZXMvYnVmZmVyXCI7XG5pbXBvcnQgeyBwcm90b2NvbHMgYXMgcCB9IGZyb20gXCJtb2R1bGVzL3Byb3RvY29sXCI7XG5cbmNvbnN0IERFRkFVTFRfSEFORExFUiA9ICgpID0+IENMT1NFRDtcblxuZnVuY3Rpb24gb3BIYW5kbGVyKGZuKSB7XG4gIHJldHVybiBPYmplY3QuY3JlYXRlKG51bGwsIHtcbiAgICBhY3RpdmU6IHtcbiAgICAgIHZhbHVlOiB0cnVlLFxuICAgIH0sXG4gICAgY29tbWl0OiB7XG4gICAgICB2YWx1ZTogKCkgPT4gZm4sXG4gICAgfSxcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUV4Y2VwdGlvbihidWZmZXIsIGhhbmRsZXIsIGV4KSB7XG4gIGNvbnN0IHZhbHVlID0gaGFuZGxlcihleCk7XG4gIGlmICh2YWx1ZSAhPT0gQ0xPU0VEKSB7XG4gICAgYWRkKGJ1ZmZlciwgdmFsdWUpO1xuICB9XG4gIHJldHVybiBidWZmZXI7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZXJUcmFuc2R1Y2VyKHhmb3JtLCBoYW5kbGVyID0gREVGQVVMVF9IQU5ETEVSKSB7XG4gIHJldHVybiB7XG4gICAgW3Auc3RlcF0oYnVmZmVyLCBpbnB1dCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIHhmb3JtW3Auc3RlcF0oYnVmZmVyLCBpbnB1dCk7XG4gICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICByZXR1cm4gaGFuZGxlRXhjZXB0aW9uKGJ1ZmZlciwgaGFuZGxlciwgZXgpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBbcC5yZXN1bHRdKGJ1ZmZlcikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIHhmb3JtW3AucmVzdWx0XShidWZmZXIpO1xuICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgcmV0dXJuIGhhbmRsZUV4Y2VwdGlvbihidWZmZXIsIGhhbmRsZXIsIGV4KTtcbiAgICAgIH1cbiAgICB9LFxuICB9O1xufVxuXG5jb25zdCBidWZmZXJSZWR1Y2VyID0ge1xuICBbcC5pbml0XSgpIHtcbiAgICB0aHJvdyBFcnJvcihcImluaXQgbm90IGF2YWlsYWJsZVwiKTtcbiAgfSxcblxuICBbcC5zdGVwXShidWZmZXIsIGlucHV0KSB7XG4gICAgYWRkKGJ1ZmZlciwgaW5wdXQpO1xuICAgIHJldHVybiBidWZmZXI7XG4gIH0sXG5cbiAgW3AucmVzdWx0XShidWZmZXIpIHtcbiAgICByZXR1cm4gYnVmZmVyO1xuICB9LFxufTtcblxuZnVuY3Rpb24gcGFyc2VBcmdzKGJ1ZmZlciwgb3B0aW9ucywgZGVmYXVsdE9wdGlvbnMpIHtcbiAgbGV0IGJ1ZjtcbiAgbGV0IG9wdHM7XG5cbiAgaWYgKCFidWZmZXIpIHtcbiAgICAvLyBzYW1lIGZvciAwLCBudWxsLCBvciB1bmRlZmluZWRcbiAgICBidWYgPSBudWxsO1xuICAgIG9wdHMgPSBvcHRpb25zO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBidWZmZXIgPT09IFwibnVtYmVyXCIpIHtcbiAgICBidWYgPSBmaXhlZChidWZmZXIpO1xuICAgIG9wdHMgPSBvcHRpb25zO1xuICB9IGVsc2UgaWYgKGlzQnVmZmVyKGJ1ZmZlcikpIHtcbiAgICBidWYgPSBidWZmZXI7XG4gICAgb3B0cyA9IG9wdGlvbnM7XG4gIH0gZWxzZSB7XG4gICAgLy8gSWYgbm8gYnVmZmVyIGlzIHNwZWNpZmllZCBidXQgYSB0cmFuc2R1Y2VyIGlzLCB3ZSBhc3N1bWUgZml4ZWQoMSlcbiAgICAvLyBpbnN0ZWFkIG9mIG5vIGJ1ZmZlclxuICAgIGJ1ZiA9IGJ1ZmZlcj8udHJhbnNkdWNlciA/IGZpeGVkKDEpIDogbnVsbDtcbiAgICBvcHRzID0gYnVmZmVyO1xuICB9XG5cbiAgY29uc3QgeyB0cmFuc2R1Y2VyLCBoYW5kbGVyLCBtYXhEaXJ0eSwgbWF4UXVldWVkLCB0aW1lb3V0IH0gPSBPYmplY3QuYXNzaWduKFxuICAgIHt9LFxuICAgIGRlZmF1bHRPcHRpb25zLFxuICAgIG9wdHMsXG4gICk7XG4gIHJldHVybiB7IGJ1ZiwgdHJhbnNkdWNlciwgaGFuZGxlciwgbWF4RGlydHksIG1heFF1ZXVlZCwgdGltZW91dCB9O1xufVxuXG5mdW5jdGlvbiBjaGFuKGJ1ZmZlciwgb3B0aW9ucykge1xuICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICBtYXhEaXJ0eTogTUFYX0RJUlRZLFxuICAgIG1heFF1ZXVlZDogTUFYX1FVRVVFRCxcbiAgfTtcbiAgY29uc3QgeyBidWYsIHRyYW5zZHVjZXIsIGhhbmRsZXIsIG1heERpcnR5LCBtYXhRdWV1ZWQsIHRpbWVvdXQgfSA9IHBhcnNlQXJncyhcbiAgICBidWZmZXIsXG4gICAgb3B0aW9ucyxcbiAgICBkZWZhdWx0T3B0aW9ucyxcbiAgKTtcblxuICBpZiAodHJhbnNkdWNlciAmJiAhYnVmKSB7XG4gICAgdGhyb3cgRXJyb3IoXCJPbmx5IGJ1ZmZlcmVkIGNoYW5uZWxzIGNhbiB1c2UgdHJhbnNkdWNlcnNcIik7XG4gIH1cbiAgXG4gIGNvbnN0IHhmID0gaGFuZGxlclRyYW5zZHVjZXIoXG4gICAgdHJhbnNkdWNlciA/IHRyYW5zZHVjZXIoYnVmZmVyUmVkdWNlcikgOiBidWZmZXJSZWR1Y2VyLFxuICAgIGhhbmRsZXIsXG4gICk7XG5cbiAgY29uc3QgaW1wbCA9IGNoYW5JbXBsKGJ1ZiwgeGYsIG1heERpcnR5LCBtYXhRdWV1ZWQpO1xuXG4gIGNvbnN0IGlzVGltZWQgPSB0eXBlb2YgdGltZW91dCA9PT0gXCJudW1iZXJcIjtcbiAgaWYgKGlzVGltZWQpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IGNsb3NlSW1wbChpbXBsKSwgdGltZW91dCk7XG4gIH1cblxuICByZXR1cm4gT2JqZWN0LmNyZWF0ZShudWxsLCB7XG4gICAgaW1wbDoge1xuICAgICAgdmFsdWU6IGltcGwsXG4gICAgfSxcbiAgICBpc0J1ZmZlcmVkOiB7XG4gICAgICB2YWx1ZTogISFidWYsXG4gICAgfSxcbiAgICBpc1RpbWVkOiB7XG4gICAgICB2YWx1ZTogaXNUaW1lZCxcbiAgICB9LFxuICB9KTtcbn1cblxuZnVuY3Rpb24gdGltZWRDaGFuKGRlbGF5ID0gMCkge1xuICByZXR1cm4gY2hhbih7IHRpbWVvdXQ6IGRlbGF5IH0pO1xufVxuXG5mdW5jdGlvbiB0cmFuc0NoYW4odHJhbnNkdWNlciwgaGFuZGxlcikge1xuICByZXR1cm4gY2hhbih7IHRyYW5zZHVjZXIsIGhhbmRsZXIgfSk7XG59XG5cbmZ1bmN0aW9uIGlzQ2xvc2VkKGNoYW5uZWwpIHtcbiAgcmV0dXJuIGNoYW5uZWwuaW1wbC5jbG9zZWQ7XG59XG5cbmZ1bmN0aW9uIGlzQnVmZmVyZWQoY2hhbm5lbCkge1xuICByZXR1cm4gY2hhbm5lbC5pc0J1ZmZlcmVkO1xufVxuXG5mdW5jdGlvbiBpc1RpbWVkKGNoYW5uZWwpIHtcbiAgcmV0dXJuIGNoYW5uZWwuaXNUaW1lZDtcbn1cblxuZnVuY3Rpb24gc2VuZEFzeW5jKGNoYW5uZWwsIHZhbHVlLCBjYWxsYmFjayA9ICgpID0+IHt9KSB7XG4gIGNvbnN0IHJlc3VsdCA9IGhhbmRsZVNlbmQoY2hhbm5lbC5pbXBsLCB2YWx1ZSwgb3BIYW5kbGVyKGNhbGxiYWNrKSk7XG4gIGlmIChyZXN1bHQgJiYgY2FsbGJhY2spIHtcbiAgICBjYWxsYmFjayhyZXN1bHQudmFsdWUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlY3ZBc3luYyhjaGFubmVsLCBjYWxsYmFjayA9ICgpID0+IHt9KSB7XG4gIGNvbnN0IHJlc3VsdCA9IGhhbmRsZVJlY3YoY2hhbm5lbC5pbXBsLCBvcEhhbmRsZXIoY2FsbGJhY2spKTtcbiAgaWYgKHJlc3VsdCAmJiBjYWxsYmFjaykge1xuICAgIGNhbGxiYWNrKHJlc3VsdC52YWx1ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2VuZChjaGFubmVsLCB2YWx1ZSkge1xuICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgc2VuZEFzeW5jKGNoYW5uZWwsIHZhbHVlLCByZXNvbHZlKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlY3YoY2hhbm5lbCkge1xuICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgcmVjdkFzeW5jKGNoYW5uZWwsIHJlc29sdmUpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVjdk9yVGhyb3coY2hhbm5lbCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHJlY3ZBc3luYyhjaGFubmVsLCByZXN1bHQgPT4ge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaXNQcm90b3R5cGVPZi5jYWxsKEVycm9yLnByb3RvdHlwZSwgcmVzdWx0KSkge1xuICAgICAgICByZWplY3QocmVzdWx0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNsb3NlKGNoYW5uZWwpIHtcbiAgY2xvc2VJbXBsKGNoYW5uZWwuaW1wbCk7XG59XG5cbmV4cG9ydCB7XG4gIENMT1NFRCxcbiAgY2hhbixcbiAgdGltZWRDaGFuLFxuICB0cmFuc0NoYW4sXG4gIGlzQ2xvc2VkLFxuICBpc0J1ZmZlcmVkLFxuICBpc1RpbWVkLFxuICBzZW5kQXN5bmMsXG4gIHJlY3ZBc3luYyxcbiAgc2VuZCxcbiAgcmVjdixcbiAgcmVjdk9yVGhyb3csXG4gIGNsb3NlLFxufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG5pbXBvcnQge1xuICBxdWV1ZSBhcyBxLFxuICBFTVBUWSxcbiAgY291bnQgYXMgcUNvdW50LFxuICBkZXF1ZXVlLFxuICBlbnF1ZXVlXG59IGZyb20gXCJtb2R1bGVzL3F1ZXVlXCI7XG5jb25zdCBxdWV1ZSA9IHEoKTtcblxuY29uc3QgU0VUX0lNTUVESUFURSA9IFN5bWJvbChcInNldEltbWVkaWF0ZVwiKTtcbmNvbnN0IE1FU1NBR0VfQ0hBTk5FTCA9IFN5bWJvbChcIk1lc3NhZ2VDaGFubmVsXCIpO1xuY29uc3QgU0VUX1RJTUVPVVQgPSBTeW1ib2woXCJzZXRUaW1lb3V0XCIpO1xuXG5jb25zdCBvcHRpb25zID0ge1xuICBiYXRjaFNpemU6IDEwMjQsXG4gIGRpc3BhdGNoTWV0aG9kOiBTRVRfSU1NRURJQVRFXG59O1xuXG5sZXQgZGlzcGF0Y2hlciA9IGNyZWF0ZURpc3BhdGNoZXIoKTtcbmxldCBydW5uaW5nID0gZmFsc2U7XG5sZXQgcXVldWVkID0gdHJ1ZTtcblxuZnVuY3Rpb24gY3JlYXRlRGlzcGF0Y2hlcigpIHtcbiAgc3dpdGNoIChjYWxjRGlzcGF0Y2hNZXRob2QoKSkge1xuICAgIC8vIFdlIHByZWZlciBgc2V0SW1tZWRpYXRlYCBpZiBpdCdzIGF2YWlsYWJsZSwgYnV0IGl0J3Mgb25seSBhdmFpbGFibGUgaW5cbiAgICAvLyBOb2RlIGFuZCBzb21lIG9sZCBicm93c2Vycy5cbiAgICBjYXNlIFNFVF9JTU1FRElBVEU6XG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBpZiAoIShxdWV1ZWQgJiYgcnVubmluZykpIHtcbiAgICAgICAgICBxdWV1ZWQgPSB0cnVlO1xuICAgICAgICAgIHNldEltbWVkaWF0ZShwcm9jZXNzVGFza3MpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgLy8gTW9zdCBtb2Rlcm4gYnJvd3NlcnMgaW1wbGVtZW50IGBNZXNzYWdlQ2hhbm5lbGAuIFRoaXMgaXMgdGhlIHByZWZlcnJlZFxuICAgIC8vIG1ldGhvZCBpbiBicm93c2VyIGVudmlyb25tZW50cyB3aGVyZSBgc2V0SW1tZWRpYXRlYCBpc24ndCBhdmFpbGFibGUuXG4gICAgY2FzZSBNRVNTQUdFX0NIQU5ORUw6IHtcbiAgICAgIGNvbnN0IGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gKCkgPT4gcHJvY2Vzc1Rhc2tzKCk7XG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBpZiAoIShxdWV1ZWQgJiYgcnVubmluZykpIHtcbiAgICAgICAgICBxdWV1ZWQgPSB0cnVlO1xuICAgICAgICAgIGNoYW5uZWwucG9ydDIucG9zdE1lc3NhZ2UoMCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gSWYgYWxsIGVsc2UgZmFpbHMsIGp1c3QgdXNlIGBzZXRUaW1lb3V0YC4gSXQncyBhIGxpdHRsZSBzbG93ZXIgdGhhbiB0aGVcbiAgICAvLyBvdGhlciBtZXRob2RzLCBidXQgaXQncyBhdmFpbGFibGUgZXZlcnl3aGVyZS5cbiAgICBjYXNlIFNFVF9USU1FT1VUOlxuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgaWYgKCEocXVldWVkICYmIHJ1bm5pbmcpKSB7XG4gICAgICAgICAgcXVldWVkID0gdHJ1ZTtcbiAgICAgICAgICBzZXRUaW1lb3V0KHByb2Nlc3NUYXNrcywgMCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FsY0Rpc3BhdGNoTWV0aG9kKCkge1xuICBzd2l0Y2ggKG9wdGlvbnMuZGlzcGF0Y2hNZXRob2QpIHtcbiAgICBjYXNlIE1FU1NBR0VfQ0hBTk5FTDpcbiAgICAgIGlmICh0eXBlb2YgTWVzc2FnZUNoYW5uZWwgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgcmV0dXJuIE1FU1NBR0VfQ0hBTk5FTDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBTRVRfVElNRU9VVDtcblxuICAgIGNhc2UgU0VUX1RJTUVPVVQ6XG4gICAgICByZXR1cm4gU0VUX1RJTUVPVVQ7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgaWYgKHR5cGVvZiBzZXRJbW1lZGlhdGUgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgcmV0dXJuIFNFVF9JTU1FRElBVEU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIE1lc3NhZ2VDaGFubmVsICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIHJldHVybiBNRVNTQUdFX0NIQU5ORUw7XG4gICAgICB9XG4gICAgICByZXR1cm4gU0VUX1RJTUVPVVQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gcHJvY2Vzc1Rhc2tzKCkge1xuICBydW5uaW5nID0gdHJ1ZTtcbiAgcXVldWVkID0gZmFsc2U7XG4gIGxldCBjb3VudCA9IDA7XG5cbiAgZm9yICg7Oykge1xuICAgIGNvbnN0IHRhc2sgPSBkZXF1ZXVlKHF1ZXVlKTtcbiAgICBpZiAodGFzayA9PT0gRU1QVFkpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHRhc2soKTtcblxuICAgIGlmIChjb3VudCA+PSBvcHRpb25zLmJhdGNoU2l6ZSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNvdW50Kys7XG5cbiAgICBydW5uaW5nID0gZmFsc2U7XG4gICAgaWYgKHFDb3VudChxdWV1ZSkpIHtcbiAgICAgIGRpc3BhdGNoZXIoKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0RGlzcGF0Y2hlcigpIHtcbiAgZGlzcGF0Y2hlciA9IGNyZWF0ZURpc3BhdGNoZXIoKTtcbn1cblxuZnVuY3Rpb24gY29uZmlnKG9wdHMgPSBudWxsKSB7XG4gIGlmIChvcHRzID09PSBudWxsKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMpO1xuICB9XG5cbiAgZm9yIChjb25zdCBrZXkgaW4gb3B0aW9ucykge1xuICAgIGlmIChrZXkgaW4gb3B0cykge1xuICAgICAgb3B0aW9uc1trZXldID0gb3B0c1trZXldO1xuXG4gICAgICBpZiAoa2V5ID09PSBcImRpc3BhdGNoTWV0aG9kXCIpIHtcbiAgICAgICAgc2V0RGlzcGF0Y2hlcigpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBkaXNwYXRjaCh0YXNrKSB7XG4gIGVucXVldWUocXVldWUsIHRhc2spO1xuICBkaXNwYXRjaGVyKCk7XG59XG5cbmV4cG9ydCB7IFNFVF9JTU1FRElBVEUsIE1FU1NBR0VfQ0hBTk5FTCwgU0VUX1RJTUVPVVQsIGNvbmZpZywgZGlzcGF0Y2ggfTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG5pbXBvcnQgeyB0aW1lZENoYW4sIHJlY3ZBc3luYyB9IGZyb20gXCJtb2R1bGVzL2NoYW5uZWxcIjtcblxuZnVuY3Rpb24gc2xlZXAoZGVsYXkgPSAwKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICBjb25zdCBjaCA9IHRpbWVkQ2hhbihkZWxheSk7XG4gICAgcmVjdkFzeW5jKGNoLCByZXNvbHZlKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdvKGZuLCAuLi5hcmdzKSB7XG4gIHJldHVybiBmbiguLi5hcmdzKTtcbn1cblxuZXhwb3J0IHsgc2xlZXAsIGdvIH07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuY29uc3QgcHJvdG9jb2xzID0gT2JqZWN0LmNyZWF0ZShudWxsLCB7XG4gIGluaXQ6IHtcbiAgICB2YWx1ZTogU3ltYm9sLmZvcihcInRyYW5zZHVjZXIvaW5pdFwiKSxcbiAgfSxcbiAgc3RlcDoge1xuICAgIHZhbHVlOiBTeW1ib2wuZm9yKFwidHJhbnNkdWNlci9zdGVwXCIpLFxuICB9LFxuICByZXN1bHQ6IHtcbiAgICB2YWx1ZTogU3ltYm9sLmZvcihcInRyYW5zZHVjZXIvcmVzdWx0XCIpLFxuICB9LFxuICByZWR1Y2VkOiB7XG4gICAgdmFsdWU6IFN5bWJvbC5mb3IoXCJ0cmFuc2R1Y2VyL3JlZHVjZWRcIiksXG4gIH0sXG4gIHZhbHVlOiB7XG4gICAgdmFsdWU6IFN5bWJvbC5mb3IoXCJ0cmFuc2R1Y2VyL3ZhbHVlXCIpLFxuICB9LFxufSk7XG5cbmV4cG9ydCB7IHByb3RvY29scyB9O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG5cbi8qKlxuICogUHJvdmlkZXMgYW4gZWZmaWNpZW50IGdlbmVyYWwtcHVycG9zZSBxdWV1ZS5cbiAqXG4gKiBAbW9kdWxlIGNoYW5rby9xdWV1ZVxuICovXG5cbi8qKlxuICogQSBnZW5lcmFsIHB1cnBvc2UsIGhpZ2hseSBlZmZpY2llbnQgSmF2YVNjcmlwdCBxdWV1ZS4gSXQgaXMgYmFja2VkIGJ5IGFcbiAqIEphdmFTY3JpcHQgYXJyYXksIGJ1dCBpdCBkb2VzIG5vdCB1c2UgYHVuc2hpZnRgIHRvIHRha2UgZWxlbWVudHMgb2ZmIHRoZVxuICogYXJyYXkgYmVjYXVzZSB1bnNoaWZ0IGNhdXNlcyBlbGVtZW50cyB0byBiZSBjb3BpZWQgZXZlcnkgdGltZSBpdCdzIHVzZWQuXG4gKiBJbnN0ZWFkLCBhIHBvaW50ZXIgaXMgbWFpbnRhaW5lZCB0aGF0IGtlZXBzIHRyYWNrIG9mIHRoZSBsb2NhdGlvbiBvZiB0aGUgbmV4dFxuICogZWxlbWVudCB0byBiZSBkZXF1ZXVlZCwgYW5kIHdoZW4gdGhhdCBkZXF1ZXVlIGhhcHBlbnMsIHRoZSBwb2ludGVyIHNpbXBseVxuICogbW92ZXMuIFdoZW4gdGhlIGVtcHR5IHNwYWNlIGF0IHRoZSBoZWFkIG9mIHRoZSBhcnJheSBnZXRzIGxhcmdlIGVub3VnaCwgaXQnc1xuICogcmVtb3ZlZCBieSBhIHNpbmdsZSBzbGljZSBvcGVyYXRpb24uXG4gKlxuICogUHV0dGluZyBlbGVtZW50cyBpbnRvIHRoZSBxdWV1ZSBpcyBqdXN0IGRvbmUgd2l0aCBhIGJhc2ljIGBwdXNoYCwgd2hpY2ggKmlzKlxuICogaGlnaGx5IGVmZmljaWVudC5cbiAqXG4gKiBUaGlzIHR5cGUgb2YgcXVldWUgaXMgcG9zc2libGUgaW4gSmF2YVNjcmlwdCBiZWNhdXNlIEpTIGFycmF5cyBhcmUgcmVzaXphYmxlLlxuICogSW4gbGFuZ3VhZ2VzIHdpdGggZml4ZWQtc2l6ZSBhcnJheXMsIGEgcmVzaXppbmcgb3BlcmF0aW9uIHdvdWxkIGhhdmUgdG8gYmVcbiAqIHJ1biBlYWNoIHRpbWUgdGhlIHF1ZXVlIGZpbGxzLlxuICpcbiAqIEBuYW1lc3BhY2UgUXVldWVcbiAqL1xuXG4vKipcbiAqIFRoZSB2YWx1ZSByZXR1cm5lZCB3aGVuIGEgcXVldWUgaXMgcmVhZCB3aGVuIGl0J3MgZW1wdHkuXG4gKlxuICogVGhpcyBzcGVjaWFsIHZhbHVlIGlzIHVzZWQgYmVjYXVzZSBgbnVsbGAgYW5kIGB1bmRlZmluZWRgIGFyZSBwb3NzaWJsZVxuICogbGVnaXRpbWF0ZSB2YWx1ZXMgdGhhdCBjYW4gYmUgc3RvcmVkIGluIGEgcXVldWUuIEFub3RoZXIgb3B0aW9uIGlzIHRvIHVzZVxuICogc29tZSBraW5kIG9mIGBNYXliZWAgb3IgYE9wdGlvbmAgdHlwZSwgYnV0IHRoYXQgcmVxdWlyZXMgbW9yZSBlZmZvcnQgb24gdGhlXG4gKiBwYXJ0IG9mIHRoZSBlbmQgdXNlciB0byBpbnRlcmZhY2Ugd2l0aC5cbiAqXG4gKiBAdHlwZSB7U3ltYm9sfVxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgRU1QVFkgPSBTeW1ib2woXCJlbXB0eVwiKTtcblxuLyoqXG4gKiBBIG1hcmtlciBwcm9wZXJ0eSBuYW1lIHRvIGluZGljYXRlIHRoYXQgYW4gb2JqZWN0IGlzIGluIGZhY3QgYSBxdWV1ZS5cbiAqXG4gKiBBIHF1ZXVlIGhhcyBhIHByb3BlcnR5IHdpdGggdGhpcyBuYW1lIHdob3NlIHJlYWRvbmx5IHZhbHVlIGlzIHNldCB0byBgdHJ1ZWAuXG4gKiBUaGlzIGlzIG5vdCBtZWFudCB0byBiZSByZWFkIGV4Y2VwdCBieSB0aGVcbiAqIGB7QGxpbmsgbW9kdWxlOmNoYW5rby9xdWV1ZX5RdWV1ZS5pc1F1ZXVlfGlzUXVldWV9YCBmdW5jdGlvbi5cbiAqXG4gKiBAdHlwZSB7U3ltYm9sfVxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgUVVFVUUgPSBTeW1ib2woXCJxdWV1ZVwiKTtcblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgYW4gb2JqZWN0IGlzIGEgcXVldWUuXG4gKlxuICogQHBhcmFtIHsqfSBvYmogVGhlIG9iamVjdCB0byBiZSB0ZXN0ZWQuXG4gKiBAcmV0dXJuIHtib29sZWFufSBFaXRoZXIgYHRydWVgIGlmIHRoZSBvYmplY3QgaXMgYSBxdWV1ZSBvciBgZmFsc2VgIGlmIGl0IGlzXG4gKiBub3QuXG4gKi9cbmZ1bmN0aW9uIGlzUXVldWUob2JqKSB7XG4gIHJldHVybiAhIW9iaj8uW1FVRVVFXTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IHF1ZXVlLiBUaGlzIHF1ZXVlIGlzIGNyZWF0ZWQgZW1wdHksIHdpdGggYSBiYWNraW5nIGFycmF5IG9mXG4gKiBsZW5ndGggMC5cbiAqXG4gKiBAcmV0dXJucyB7bW9kdWxlOmNoYW5rby9xdWV1ZX5RdWV1ZX0gQSBuZXcsIGVtcHR5IHF1ZXVlLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gcXVldWUoKSB7XG4gIHJldHVybiBPYmplY3QuY3JlYXRlKG51bGwsIHtcbiAgICBzdG9yZToge1xuICAgICAgdmFsdWU6IFtdLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9LFxuXG4gICAgcG9pbnRlcjoge1xuICAgICAgdmFsdWU6IDAsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0sXG5cbiAgICBbUVVFVUVdOiB7XG4gICAgICB2YWx1ZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgbnVtYmVyIG9mIGVsZW1lbnRzIHN0b3JlZCBpbiBhIHF1ZXVlLiBUaGlzIG1heSBvciBtYXkgbm90IGVxdWFsXG4gKiB0aGUgbGVuZ3RoIG9mIHRoZSBiYWNraW5nIHN0b3JlLCBhcyB0aGVyZSBpcyBvZnRlbiBlbXB0eSBzcGFjZSBhdCB0aGUgaGVhZCBvZlxuICogdGhlIGJhY2tpbmcgc3RvcmUuXG4gKlxuICogQHBhcmFtIHttb2R1bGU6Y2hhbmtvL3F1ZXVlflF1ZXVlfSBxdWV1ZSBUaGUgcXVldWUgd2hvc2UgaXRlbXMgYXJlIGJlaW5nXG4gKiBjb3VudGVkLlxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgbnVtYmVyIG9mIGl0ZW1zIGluIHRoZSBxdWV1ZS5cbiAqL1xuZnVuY3Rpb24gY291bnQocXVldWUpIHtcbiAgcmV0dXJuIHF1ZXVlLnN0b3JlLmxlbmd0aCAtIHF1ZXVlLnBvaW50ZXI7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGEgcXVldWUgaXMgZW1wdHkuXG4gKlxuICogQHBhcmFtIHttb2R1bGU6Y2hhbmtvL3F1ZXVlflF1ZXVlfSBxdWV1ZSBUaGUgcXVldWUgYmVpbmcgY2hlY2tlZCBmb3JcbiAqIGVtcHRpbmVzcy5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IEVpdGhlciBgdHJ1ZWAgaWYgdGhlIHF1ZXVlIGlzIGVtcHR5IG9yIGBmYWxzZWAgaWYgaXQgaXNcbiAqIG5vdC5cbiAqL1xuZnVuY3Rpb24gaXNFbXB0eShxdWV1ZSkge1xuICByZXR1cm4gcXVldWUuc3RvcmUubGVuZ3RoID09PSAwO1xufVxuXG4vKipcbiAqIEFkZHMgYW4gaXRlbSB0byBhIHF1ZXVlLlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOmNoYW5rby9xdWV1ZX5RdWV1ZX0gcXVldWUgVGhlIHF1ZXVlIHdoaWNoIGlzIGhhdmluZyBhbiBpdGVtXG4gKiBhZGRlZCB0byBpdC5cbiAqIEBwYXJhbSB7Kn0gaXRlbSBUaGUgaXRlbSBiZWluZyBhZGRlZCB0byB0aGUgcXVldWUuXG4gKi9cbmZ1bmN0aW9uIGVucXVldWUocXVldWUsIGl0ZW0pIHtcbiAgcXVldWUuc3RvcmUucHVzaChpdGVtKTtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFuIGl0ZW0gZnJvbSBhIHF1ZXVlIGFuZCByZXR1cm5zIHRoYXQgaXRlbS4gSWYgdGhlIHJlbW92YWwgY2F1c2VzIHRoZVxuICogYW1vdW50IG9mIGVtcHR5IHNwYWNlIGF0IHRoZSBoZWFkIG9mIHRoZSBiYWNraW5nIHN0b3JlIHRvIGV4Y2VlZCBhIHRocmVzaG9sZCxcbiAqIHRoYXQgZW1wdHkgc3BhY2UgaXMgcmVtb3ZlZC5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTpjaGFua28vcXVldWV+UXVldWV9IHF1ZXVlIFRoZSBxdWV1ZSB3aG9zZSBvbGRlc3QgaXRlbSBpcyB0byBiZVxuICogcmVtb3ZlZC5cbiAqIEByZXR1cm4geyp9IFRoZSBvbGRlc3Qgc3RvcmVkIGl0ZW0gaW4gdGhlIHF1ZXVlLlxuICovXG5mdW5jdGlvbiBkZXF1ZXVlKHF1ZXVlKSB7XG4gIGlmIChxdWV1ZS5zdG9yZS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gRU1QVFk7XG4gIH1cblxuICBjb25zdCBpdGVtID0gcXVldWUuc3RvcmVbcXVldWUucG9pbnRlcl07XG4gIC8vIFJlbW92ZXMgdGhlIGl0ZW1zIGluIHRoZSBiYWNraW5nIHN0b3JlIGJlZm9yZSB0aGUgY3VycmVudCBwb2ludGVyLCBpZiB0aGVyZVxuICAvLyBpcyBlbm91Z2ggXCJlbXB0eVwiIHNwYWNlIGJlZm9yZSB0aGUgcG9pbnRlciB0byBqdXN0aWZ5IGl0IChpLmUuLCB0aGUgdW51c2VkXG4gIC8vIHBvcnRpb24gaXMgYXQgbGVhc3QgaGFsZiBhcyBsYXJnZSBhcyB0aGUgdXNlZCBwb3J0aW9uKVxuICBpZiAoKytxdWV1ZS5wb2ludGVyICogMiA+PSBxdWV1ZS5zdG9yZS5sZW5ndGgpIHtcbiAgICBxdWV1ZS5zdG9yZSA9IHF1ZXVlLnN0b3JlLnNsaWNlKHF1ZXVlLnBvaW50ZXIpO1xuICAgIHF1ZXVlLnBvaW50ZXIgPSAwO1xuICB9XG4gIHJldHVybiBpdGVtO1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIG5leHQgaXRlbSBpbiBhIHF1ZXVlIHdpdGhvdXQgcmVtb3ZpbmcgaXQuXG4gKlxuICogQHBhcmFtIHttb2R1bGU6Y2hhbmtvL3F1ZXVlflF1ZXVlfSBxdWV1ZSBUaGUgcXVldWUgd2hvc2Ugb2xkZXN0IGl0ZW0gaXMgdG8gYmVcbiAqIHBlZWtlZCBhdC5cbiAqIEByZXR1cm4geyp9IFRoZSBvbGRlc3QgaXRlbSBzdG9yZWQgaW4gdGhlIHF1ZXVlLlxuICovXG5mdW5jdGlvbiBwZWVrKHF1ZXVlKSB7XG4gIHJldHVybiBxdWV1ZS5zdG9yZS5sZW5ndGggPT09IDAgPyBFTVBUWSA6IHF1ZXVlLnN0b3JlW3F1ZXVlLnBvaW50ZXJdO1xufVxuXG4vKipcbiAqIEZpbHRlcnMgb3V0IGFueSBpdGVtIGluIGEgcXVldWUgdGhhdCBkb2VzIG5vdCBjYXVzZSB0aGUgc3VwcGxpZWQgcHJlZGljYXRlXG4gKiBmdW5jdGlvbiB0byByZXR1cm4gYHRydWVgIHdoZW4gcGFzc2VkIHRoYXQgaXRlbS4gVGhpcyBpcyBub3QgZXhhY3RseSBhXG4gKiBnZW5lcmFsIHB1cnBvc2UgcXVldWUgb3BlcmF0aW9uLCBidXQgd2UgbmVlZCBpdCB3aXRoIGNoYW5uZWxzIHRoYXQgd2lsbFxuICogb2NjYXNpb25hbGx5IHdhbnQgdG8gZ2V0IHJpZCBvZiBpbmFjdGl2ZSBoYW5kbGVycy5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTpjaGFua28vcXVldWV+UXVldWV9IHF1ZXVlIFRoZSBxdWV1ZSBiZWluZyBmaWx0ZXJlZC5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuIFRoZSBwcmVkaWNhdGUgZnVuY3Rpb24gdGhhdCBkZXRlcm1pbmVzIHdoZXRoZXIgYW5cbiAqIGVsZW1lbnQgcmVtYWlucyBpbiB0aGUgcXVldWUuXG4gKi9cbmZ1bmN0aW9uIGZpbHRlcihxdWV1ZSwgcHJlZGljYXRlKSB7XG4gIGZvciAobGV0IGkgPSAwLCBlbmQgPSBjb3VudChxdWV1ZSk7IGkgPCBlbmQ7IGkrKykge1xuICAgIGNvbnN0IGl0ZW0gPSBkZXF1ZXVlKHF1ZXVlKTtcbiAgICBpZiAocHJlZGljYXRlKGl0ZW0pKSB7XG4gICAgICBlbnF1ZXVlKHF1ZXVlLCBpdGVtKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IHtcbiAgRU1QVFksXG4gIHF1ZXVlLFxuICBpc1F1ZXVlLFxuICBjb3VudCxcbiAgaXNFbXB0eSxcbiAgZW5xdWV1ZSxcbiAgZGVxdWV1ZSxcbiAgcGVlayxcbiAgZmlsdGVyXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==