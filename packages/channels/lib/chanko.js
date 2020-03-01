(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["chanko"] = factory();
	else
		root["chanko"] = factory();
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

/***/ "./node_modules/@babel/runtime/helpers/AsyncGenerator.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/AsyncGenerator.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var AwaitValue = __webpack_require__(/*! ./AwaitValue */ "./node_modules/@babel/runtime/helpers/AwaitValue.js");

function AsyncGenerator(gen) {
  var front, back;

  function send(key, arg) {
    return new Promise(function (resolve, reject) {
      var request = {
        key: key,
        arg: arg,
        resolve: resolve,
        reject: reject,
        next: null
      };

      if (back) {
        back = back.next = request;
      } else {
        front = back = request;
        resume(key, arg);
      }
    });
  }

  function resume(key, arg) {
    try {
      var result = gen[key](arg);
      var value = result.value;
      var wrappedAwait = value instanceof AwaitValue;
      Promise.resolve(wrappedAwait ? value.wrapped : value).then(function (arg) {
        if (wrappedAwait) {
          resume(key === "return" ? "return" : "next", arg);
          return;
        }

        settle(result.done ? "return" : "normal", arg);
      }, function (err) {
        resume("throw", err);
      });
    } catch (err) {
      settle("throw", err);
    }
  }

  function settle(type, value) {
    switch (type) {
      case "return":
        front.resolve({
          value: value,
          done: true
        });
        break;

      case "throw":
        front.reject(value);
        break;

      default:
        front.resolve({
          value: value,
          done: false
        });
        break;
    }

    front = front.next;

    if (front) {
      resume(front.key, front.arg);
    } else {
      back = null;
    }
  }

  this._invoke = send;

  if (typeof gen["return"] !== "function") {
    this["return"] = undefined;
  }
}

if (typeof Symbol === "function" && Symbol.asyncIterator) {
  AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
    return this;
  };
}

AsyncGenerator.prototype.next = function (arg) {
  return this._invoke("next", arg);
};

AsyncGenerator.prototype["throw"] = function (arg) {
  return this._invoke("throw", arg);
};

AsyncGenerator.prototype["return"] = function (arg) {
  return this._invoke("return", arg);
};

module.exports = AsyncGenerator;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/AwaitValue.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/AwaitValue.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _AwaitValue(value) {
  this.wrapped = value;
}

module.exports = _AwaitValue;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/awaitAsyncGenerator.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/awaitAsyncGenerator.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var AwaitValue = __webpack_require__(/*! ./AwaitValue */ "./node_modules/@babel/runtime/helpers/AwaitValue.js");

function _awaitAsyncGenerator(value) {
  return new AwaitValue(value);
}

module.exports = _awaitAsyncGenerator;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/wrapAsyncGenerator.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/wrapAsyncGenerator.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var AsyncGenerator = __webpack_require__(/*! ./AsyncGenerator */ "./node_modules/@babel/runtime/helpers/AsyncGenerator.js");

function _wrapAsyncGenerator(fn) {
  return function () {
    return new AsyncGenerator(fn.apply(this, arguments));
  };
}

module.exports = _wrapAsyncGenerator;

/***/ }),

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
/*! exports provided: fixed, dropping, sliding, CLOSED, chan, timedChan, transChan, send, recv, sendAsync, recvAsync, recvOrThrow, close, isClosed, isBuffered, isTimed, select, selectAsync, value, channel, config, SET_IMMEDIATE, MESSAGE_CHANNEL, SET_TIMEOUT, go, sleep, join, EMPTY */
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

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "select", function() { return modules_channel__WEBPACK_IMPORTED_MODULE_1__["select"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAsync", function() { return modules_channel__WEBPACK_IMPORTED_MODULE_1__["selectAsync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "value", function() { return modules_channel__WEBPACK_IMPORTED_MODULE_1__["value"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "channel", function() { return modules_channel__WEBPACK_IMPORTED_MODULE_1__["channel"]; });

/* harmony import */ var modules_dispatcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! modules/dispatcher */ "./src/modules/dispatcher.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "config", function() { return modules_dispatcher__WEBPACK_IMPORTED_MODULE_2__["config"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SET_IMMEDIATE", function() { return modules_dispatcher__WEBPACK_IMPORTED_MODULE_2__["SET_IMMEDIATE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MESSAGE_CHANNEL", function() { return modules_dispatcher__WEBPACK_IMPORTED_MODULE_2__["MESSAGE_CHANNEL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SET_TIMEOUT", function() { return modules_dispatcher__WEBPACK_IMPORTED_MODULE_2__["SET_TIMEOUT"]; });

/* harmony import */ var modules_process__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! modules/process */ "./src/modules/process.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "go", function() { return modules_process__WEBPACK_IMPORTED_MODULE_3__["go"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sleep", function() { return modules_process__WEBPACK_IMPORTED_MODULE_3__["sleep"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "join", function() { return modules_process__WEBPACK_IMPORTED_MODULE_3__["join"]; });

/* harmony import */ var modules_queue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! modules/queue */ "./src/modules/queue.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EMPTY", function() { return modules_queue__WEBPACK_IMPORTED_MODULE_4__["EMPTY"]; });

/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

/**
 * All of the public-facing Chanko functions are gathered here in one place to
 * be exported as a whole. This is a completely flat list of exports, as
 * inluding any object literals for export (which would be natural for buffers,
 * for example) would keep tree-shaking from working right.
 *
 * @module chanko
 */

/**
 * The core namespace under which all of the main functions reside in the API.
 * Everything in this namespace is accessible as a member of the main `chanko`
 * object that is required, imported, or accessed as a global object.
 *
 * @namespace Chanko
 */





/**
 * An error handling funciton. This is used to handle exceptions thrown in async
 * functions and in transducers. The return value of an exception handler is
 * typically sent to a channel; if the exception happened within an async
 * function, it will be sent to that function's output channel, and if the
 * excpetion happened in a transducer, it will be sent to the channel to which
 * the transducer is attached.
 *
 * @callback exceptionHandler
 * @param {object} err The error object that was thrown to cause the error to
 *     have to be handled.
 * @return {*} A value decided by the handler that will be sent to a channel.
 */

/**
 * A callback that's run when a non-blocking channel operation completes. The
 * value that this function receives is identical to what is returned by a
 * blocking call: the value received from the channel for a `recv`, or `true` or
 * `false` depending on the channel status for a `send`. Any return value from
 * this callback is ignored.
 *
 * @callback opCallback
 * @param {*} value Either the value received from the channel, or whether or
 * not a value was successfully sent.
 */

/**
 * A callback that's run when a non-blocking `select` operation completes. The
 * value that this function receives is an object with two properties: the value
 * that the `select` operation completed with (either the value received from
 * the channel in a receive operation, or `true` or `false` in a send
 * operation), along with the channel where the operation actually happened. Any
 * return value from this callback is ignored.
 *
 * @callback selectCallback
 * @param {module:chanko/channel.SelectResult} data The value returned from the
 *     select operation.
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
 * returned. These values need not concern a user of ths library; just pass a
 * transducer to `{@link module:chanko.chan|chan}` or
 * `{@link module:chanko.transChan|transChan}` and everything else will be
 * handled.
 *
 * @callback transducer
 * @param {module:chanko~transducer} xform A transducer to chain this transducer
 *     to.
 * @return {module:chanko~transducer} A new transducer consisting of the
 *     composition of this one and `xform`.
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

/**
 * Provides several types of buffers usable in buffered channels. These are all
 * built on a small, efficient queue which is in turn backed by a JavaScript
 * array.
 *
 * @module chanko/buffer
 */

/**
 * A buffer that stores values sent to a buffered channel until a process
 * receives them.
 *
 * Different buffer differ only in the way that they determine whether they are
 * full and in what happens when a new value is added to a full buffer.
 *
 * @memberof module:chanko/buffer
 * @typedef {(module:chanko/buffer~FixedBuffer |
 *     module:chanko/buffer~DroppingBuffer |
 *     module:chanko/buffer~SlidingBuffer)} Buffer
 */

/**
 * The name of a property that exists on buffer objects for the purpose of
 * itentifying them as buffer objects.
 *
 * @type {Symbol}
 * @private
 */

const BUFFER = Symbol("BUFFER");
/**
 * A possible value of the `{@link module:chanko/buffer~BUFFER|BUFFER} property
 * indicating that the buffer is a fixed buffer.
 *
 * @type {Symbol}
 * @private
 */

const FIXED = Symbol("FIXED");
/**
 * A possible value of the `{@link module:chanko/buffer~BUFFER|BUFFER} property
 * indicating that the buffer is a dropping buffer.
 *
 * @type {Symbol}
 * @private
 */

const DROPPING = Symbol("DROPPING");
/**
 * A possible value of the `{@link module:chanko/buffer~BUFFER|BUFFER} property
 * indicating that the buffer is a sliding buffer.
 *
 * @type {Symbol}
 * @private
 */

const SLIDING = Symbol("SLIDING");
/**
 * Predicate indicating whether the supplied object is a buffer.
 *
 * @param {*} obj The value to test to see if it's a buffer.
 * @return {boolean} Either `true` if the value is a buffer, or `false` if it is
 *     not.
 * @private
 */

function isBuffer(obj) {
  return !!(obj === null || obj === void 0 ? void 0 : obj[BUFFER]);
}
/**
 * A buffer implementation that never discards buffered items when a new item is
 * added.
 *
 * This buffer has a concept of *full*, but it's a soft limit. If the size of
 * the buffer is exceeded, added items are still stored.
 * {@link module:chanko~Chanko.isFull|isFull} returns `true` any time that the
 * size is reached or exceeded, so it's entirely possible to call
 * {@link module:chanko~Chanko.remove|remove} on a full buffer and have it still
 * be full.
 *
 * @typedef FixedBuffer
 */

/**
 * Creates a fixed buffer of the specified capacity.
 *
 * A fixed buffer is a 'normal' buffer, one that stores and returns items on
 * demand. While it is capable of being over-filled, that ability is not used in
 * Chanko. A buffer that is full will cause the next put to its channel to block
 * until at least one item is removed from the buffer.
 *
 * This buffer is passed to `{@link module:chanko~Chanko.chan|chan}`, etc. to
 * create a buffered channel. It is not meant to be used directly.
 *
 * @memberof module:chanko~Chanko
 * @param {number} size The number of items that the new buffer can hold before
 *     it's full.
 * @return {module:chanko/buffer~FixedBuffer} A new fixed buffer of the
 *     specified capacity.
 */


function fixed(size) {
  return Object.create(null, {
    /**
     * The queue backing this buffer.
     *
     * @type {module:chanko/queue~Queue}
     * @private
     * @instance
     */
    queue: {
      value: Object(modules_queue__WEBPACK_IMPORTED_MODULE_0__["queue"])()
    },

    /**
     * The number of items that this queue can hold before it's considered full.
     *
     * @type {number}
     * @private
     * @instance
     */
    size: {
      value: size
    },

    /**
     * A marker property used to show that this is a fixed buffer.
     *
     * @type {Symbol}
     * @private
     * @instance
     */
    [BUFFER]: {
      value: FIXED
    }
  });
}
/**
 * A buffer implementation that drops newly added items when the buffer is full.
 *
 * This dropping behavior is silent: the new item is simply not added to the
 * queue. Note that this buffer is never `full` because it can always be added
 * to without exceeding the size, even if that 'adding' doesn't result in a new
 * item actually appearing in the buffer.
 *
 * @typedef DroppingBuffer
 */

/**
 * Creates a dropping buffer of the specified capacity.
 *
 * A dropping buffer silently drops the item being added if the buffer is
 * already at capacity. Since adding a new item will always 'succeed' (even if
 * it succeeds by just ignoring the add), it is never considered full and
 * therefore a put to a channel buffered by a dropping buffer never blocks.
 *
 * This buffer is passed to `{@link module:chanko~Chanko.chan|chan}`, etc. to
 * create a buffered channel. It is not meant to be used directly.
 *
 * @memberof module:chanko~Chanko
 * @param {number} size The number of items that the new buffer can hold before
 *     newest items are dropped on add.
 * @return {module:chanko/buffer~DroppingBuffer} A new dropping buffer of the
 *     specified capacity.
 */


function dropping(size) {
  return Object.create(null, {
    /**
     * The queue backing this buffer.
     *
     * @type {module:chanko/queue~Queue}
     * @private
     * @instance
     */
    queue: {
      value: Object(modules_queue__WEBPACK_IMPORTED_MODULE_0__["queue"])()
    },

    /**
     * The number of items that this queue can hold before it's considered full.
     *
     * @type {number}
     * @private
     * @instance
     */
    size: {
      value: size
    },

    /**
     * A marker property used to show that this is a dropping buffer.
     *
     * @type {Symbol}
     * @private
     * @instance
     */
    [BUFFER]: {
      value: DROPPING
    }
  });
}
/**
 * A buffer implementation that drops the oldest item when an item is added to a
 * full buffer.
 *
 * This is very similar to
 * {@link module:chanko/buffer.DroppingBuffer|DroppingBuffer}; the only
 * difference is in what happens when an item is added. In this buffer, the new
 * item is indeed added to the buffer, but in order to keep the count of the
 * buffer at or below its size, the oldest item in the buffer is silently
 * dropped.
 *
 * @typedef SlidingBuffer
 */

/**
 * Creates a sliding buffer of the specified capacity.
 *
 * A sliding buffer drops the first-added (oldest) item already in the buffer if
 * a new item is added when the buffer is already at capacity. Since it's always
 * capable of having items added to it, it's never considered full, and
 * therefore a put to a channel buffered by a sliding buffer never blocks.
 *
 * This buffer is passed to `{@link module:chanko~Chanko.chan|chan}`, etc. to
 * create a buffered channel. It is not meant to be used directly.
 *
 * @memberof module:chanko~Chanko
 * @param {number} size The number of items that the new buffer can hold before
 *     oldest items are dropped on add.
 * @return {module:chanko/buffer~SlidingBuffer} A new sliding buffer of the
 *     specified capacity.
 */


function sliding(size) {
  return Object.create(null, {
    /**
     * The queue backing this buffer.
     *
     * @type {module:chanko/queue~Queue}
     * @private
     * @instance
     */
    queue: {
      value: Object(modules_queue__WEBPACK_IMPORTED_MODULE_0__["queue"])()
    },

    /**
     * The number of items that this queue can hold before it's considered full.
     *
     * @type {number}
     * @private
     * @instance
     */
    size: {
      value: size
    },

    /**
     * A marker property used to show that this is a sliding buffer.
     *
     * @type {Symbol}
     * @private
     * @instance
     */
    [BUFFER]: {
      value: SLIDING
    }
  });
}
/**
 * Returns the queue that backs a buffer.
 *
 * @param {module:chanko/buffer~Buffer} buffer The buffer whose queue is
 *     returned by this function.
 * @return {module:chanko/queue~Queue} The queue that backs the supplied buffer.
 * @private
 */


function queue(buffer) {
  return buffer.queue;
}
/**
 * Returns the number of items a buffer can hold before it's full.
 *
 * @param {module:chanko/buffer~Buffer} buffer The buffer whose size is returned
 *     by this function.
 * @return {number} The size of the supplied buffer.
 * @private
 */


function size(buffer) {
  return buffer.size;
}
/**
 * Returns the number of items a buffer is currently holding.
 *
 * @param {module:chanko/buffer~Buffer} buffer The buffer whose current count is
 *     returned by this function.
 * @return {number} The number of items that the supplied buffer is holding.
 * @private
 */


function count(buffer) {
  return Object(modules_queue__WEBPACK_IMPORTED_MODULE_0__["count"])(buffer.queue);
}
/**
 * Determines whether a buffer is at capacity.
 *
 * @param {module:chanko/buffer~Buffer} buffer The buffer who's being checked to
 *     see if it's at capacity.
 * @return {number} Either `true` if the supplied buffer is full or `false` if
 *     it isn't.
 * @private
 */


function isFull(buffer) {
  return buffer[BUFFER] === FIXED ? Object(modules_queue__WEBPACK_IMPORTED_MODULE_0__["count"])(buffer.queue) >= buffer.size : false;
}
/**
 * Adds one or more items to a buffer.
 *
 * @param {module:chanko/buffer~Buffer} buffer The buffer where the supplied
 *     items will be added.
 * @param {...*} items The values being added to the supplied buffer.
 * @private
 */


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
/**
 * Removes the next item from a queue and returns it.
 *
 * @param {module:chanko/buffer~Buffer} buffer The buffer from which an item is
 *     being removed.
 * @return {*} The item that was removed from the supplied buffer.
 * @private
 */


function remove(buffer) {
  return Object(modules_queue__WEBPACK_IMPORTED_MODULE_0__["dequeue"])(buffer.queue);
}



/***/ }),

/***/ "./src/modules/channel/handler.js":
/*!****************************************!*\
  !*** ./src/modules/channel/handler.js ***!
  \****************************************/
/*! exports provided: CLOSED, MAX_DIRTY, MAX_QUEUED, channel, handleSend, handleRecv, close, box, isBox */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "box", function() { return box; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBox", function() { return isBox; });
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




/**
 * The maximum number of dirty operations that can be queued on a channel before
 * a cleanup is triggered.
 *
 * @type {number}
 * @private
 */

const MAX_DIRTY = 64;
/**
 * The maximum number of opertions that can be queued on a channel before new
 * operations are rejected.
 *
 * @type {number}
 * @private
 */

const MAX_QUEUED = 1024;
/**
 * *he value returned from a receive on a channel when that channel is closed
 * and has no more values available.
 *
 * This is a special value that is returned under a certain circumstance, namely
 * when a receive is performed on a closed channel. Because of that, it cannot
 * be returned from a receive on an open channel. For that reason, `CLOSED` is
 * the only value that cannot be sent onto a channel &mdash; it would be
 * impossible to distinguish between a legitimate value of `CLOSED` and an
 * actual closed channel.
 *
 * @type {Symbol}
 * @memberof module:chanko~Chanko
 */

const CLOSED = Symbol("CLOSED");
/**
 * A unique value used to indicate that an object is a box.
 *
 * @type {Symbol}
 * @private
 */

const BOX = Symbol("BOX");
/**
 * Determines whether an object is a box.
 *
 * @param {*} obj A value to check for boxiness.
 * @return Either `true` if the value is a box or `false` if it isn't.
 * @private
 */

function isBox(obj) {
  return !!(obj === null || obj === void 0 ? void 0 : obj[BOX]);
}
/**
 * Determines whether an object is reduced. This is done using the transducer
 * protocol; an object with the protocol-specified `reduced` property is assumed
 * to be reduced. If a result of a transformation is reduced, it means that the
 * transformation is complete and the channel should be closed.
 *
 * @param {*} value The value being checked for reduction.
 * @return {boolean} Either `true` if the value has been reduced, or `false` if it has
 *     not been.
 * @private
 */


function isReduced(value) {
  return !!(value === null || value === void 0 ? void 0 : value[modules_protocol__WEBPACK_IMPORTED_MODULE_0__["protocols"].reduced]);
}
/**
 * A wrapper around a value. This is primarily used as a marker; a put or take
 * returning a Box indicates that the put or take has returned an immediate
 * value, while returning `null` indicates that the operation has been queued.
 *
 * @typedef Box
 * @memberof module:chanko/channel
 * @property {*} value The value being wrapped by the box.
 * @private
 */

/**
 * A wrapper object for a value. This is used almost entirely as a marker
 * interface, though the fact that it becomes a parameter that's passed by
 * reference rather than value is also important in a couple places. If a
 * channel operation (put or take) returns a Box, it means that an actual value
 * was returned. A non-Box (which always happens to be `null`) means that the
 * operation must block.
 *
 * @memberof module:chanko/channel
 * @param {*} value The value to box.
 * @return {module:chanko/channel~Box} The boxed value.
 * @private
 */


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
/**
 * A wrapper around a value. This is much like
 * {@link module:chanko/channel~Box|Box} except that it also carries a handler
 * to be used when a sent value is received. It is specifically for queueing
 * sends.
 *
 * @typedef SendBox
 * @memberof module:chanko/channel
 * @property {*} value The value being wrapped by this box.
 * @property {module:chanko/channel~Handler} handler The handler used to process
 *     a send request for the value.
 * @private
 */

/**
 * A box used to wrap a value being sent onto a channel. This is different from
 * a regular box in that the send handler is also included.
 *
 * @memberof module:chanko/channel
 * @param  {Object} handler The handler used to process a send request for the
 *     value.
 * @param  {*} value The value to box.
 * @return {module:chanko/channel~SendBox} The boxed value.
 * @private
 */


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
/**
 * A channel, used by processes to communicate with one another.
 *
 * For each operation, the channel first tests to see if there's a corresponding
 * operation already queued (i.e., if we're doing a `send` that there's a queued
 * `recv` and vice versa). If there is, that corresponding operation is
 * unblocked and both operations complete. If not, the operation is queued to
 * wait for a corresponding operation. The process or that created the operation
 * then blocks.
 *
 * The channel can be backed by a buffer, though it is not by default. If a
 * buffer is in place, and that buffer is not full, then the process that
 * created an operation that has to be queued is *not* blocked.
 *
 * This channel object supports transformations, assuming that they follow the
 * protocol created by a few transducer library authors to allow them to
 * interoperate. The support must be explicitly created because the normal
 * method of making an object support transformations won't work here. This
 * method is to create a new object and add the transformed values to it - but
 * for a channel, we need to replace the values on the channel with their
 * transformed values, in the same order even in a multi-process environment.
 * Thus transformations happen in place.
 *
 * Transformations are applied before the value is queued, so even if there is a
 * corresponding operation ready to go, the transformation still happens. Also,
 * transformations require that the channel be buffered (this buffer is what is
 * sent to the transformer's reduction step function); trying to create a
 * channel with a transformer but without a buffer will result in an error being
 * thrown.
 *
 * This is the object that is returned from a call to
 * `{@link module:chanko~Chanko.chan|chan}`. However, this object is intended to
 * be used as a value to pass to channel operation functions; it doesn't have
 * any properties of interest to an end user.
 *
 * @memberof module:chanko/channel
 * @typedef Channel
 */

/**
 * Creates a channel. This is a low-level function;
 * `{@link module:chanko~Chanko.chan|chan}` performs some necessary
 * manipulations on arguments before using this function to perform the actual
 * creation.
 *
 * @memberof module:chanko/channel
 * @param {null | module:chanko/buffer~Buffer} buffer An optional buffer that,
 *     if present, is used to create a buffered channel. If this is `null`, an
 *     unbuffered channel is created.
 * @param {module:chanko~transducer} xform The transducer used to transform
 *     values sent to the channel. If no transformations are necessary, a
 *     passthrough transducer should be provided.
 * @param {boolean} isTimed Indicates whether the channel is a timed channel.
 *     The timining mechanism is handled outside the channel, but this property
 *     is provided to be able to query whether that's the case.
 * @param {number} maxDirty=64 The maximum number of dirty operations to allow
 *     before they're purged.
 * @param {number} maxQueued=1024 The maximum number of operations that can be
 *     queued before new ones are rejected.
 * @return {module:chanko/channel.Channel} A new channel.
 * @private
 */


function channel(buffer, xform, isTimed = false, maxDirty = MAX_DIRTY, maxQueued = MAX_QUEUED) {
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
    },
    isBuffered: {
      value: !!buffer
    },
    isTimed: {
      value: isTimed
    }
  });
}
/**
 * Sends a value to a channel. The specified handler is used to control whether
 * the send is active and what to do after the send completes. A send can become
 * inactive if it was part of an `select` call and some other operation
 * specified in that call has already completed.
 *
 * This value is given to a receive handler immediately if there's one waiting.
 * Otherwise the value and handler are queued together to wait for a receive.
 *
 * This is a low-level operation that's provided as a part of the channel
 * implementation so that other operations functions can properly apply
 * handlers. It is not meant for general use. Use those other operations
 * functions instead.
 *
 *
 * @memberof module:chanko/channel
 * @param {module:chanko/channel.Channel} channel The channel that the value is
 *     being sent to.
 * @param {*} value The value to be put onto the channel.
 * @param {boolean} handler.active Determines whether the send is still active
 *     and should still be serviced.
 * @param {function} handler.commit Deactivates the send (so it can't be
 *     serviced a second time) and returns the callback to be fired when the
 *     send completes.
 * @return {module:chanko/channel~Box|null} One of three values. A boxed `true`
 *     is returned if the send was immediately consumed by a pending receive. A
 *     boxed `false` is returned if the send was performed on a channel that was
 *     already closed by the time the send took place. `null` is returned if the
 *     send was queued pending a corresponding receive.
 * @private
 */


function handleSend(channel, value, handler) {
  if (value === CLOSED) {
    throw Error("Cannot send CLOSED to a channel");
  }

  if (channel.closed) {
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

  if (channel.buffer && !Object(modules_buffer__WEBPACK_IMPORTED_MODULE_2__["isFull"])(channel.buffer)) {
    handler.commit();
    const done = isReduced(channel.xform[modules_protocol__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](channel.buffer, value));

    for (;;) {
      if (Object(modules_buffer__WEBPACK_IMPORTED_MODULE_2__["count"])(channel.buffer) === 0) {
        break;
      }

      receiver = Object(modules_queue__WEBPACK_IMPORTED_MODULE_1__["dequeue"])(channel.recvs);

      if (receiver === modules_queue__WEBPACK_IMPORTED_MODULE_1__["EMPTY"]) {
        break;
      }

      if (receiver.active) {
        callback = receiver.commit();
        const val = Object(modules_buffer__WEBPACK_IMPORTED_MODULE_2__["remove"])(channel.buffer);

        if (callback) {
          Object(modules_dispatcher__WEBPACK_IMPORTED_MODULE_3__["dispatch"])(() => callback(val));
        }
      }
    }

    if (done) {
      close(channel);
    }

    return box(true);
  } // This loop happens if the channel is unbuffered and there is at least one
  // pending receive. (Buffered channels break out of this loop immediately,
  // because in order for a buffered channel to reach this point, its buffer
  // must have been full. If the buffer is full, that means there are no pending
  // receives and the first one read will be EMPTY.) It processes the next
  // pending receive immediately.


  for (;;) {
    receiver = Object(modules_queue__WEBPACK_IMPORTED_MODULE_1__["dequeue"])(channel.recvs);

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


  if (channel.dirtySends > channel.maxDirty) {
    Object(modules_queue__WEBPACK_IMPORTED_MODULE_1__["filter"])(channel.sends, sender => sender.handler.active);
    channel.dirtySends = 0;
  } else {
    channel.dirtySends++;
  }

  if (Object(modules_queue__WEBPACK_IMPORTED_MODULE_1__["count"])(channel.sends) >= channel.maxQueued) {
    throw Error(`No more than ${channel.maxQueued} pending sends are allowed on a single channel`);
  }

  Object(modules_queue__WEBPACK_IMPORTED_MODULE_1__["enqueue"])(channel.sends, sendBox(value, handler));
  return null;
}
/**
 * Receives a value from a channel. The specified handler is used to control
 * whether the receive is active and what to do after the receive completes. A
 * receive can become inactive if it was part of an `select` call and some other
 * operation specified in that call has already completed.
 *
 * This value is given to a send handler immediately if there's one waiting.
 * Otherwise the value and handler are queued together to wait for a send.
 *
 * This is a low-level operation that's provided as a part of the channel
 * implementation so that other operations functions can properly apply
 * handlers. It is not meant for general use. Use those other operations
 * functions instead.
 *
 * @memberof module:chanko/channel
 * @param {module:chanko/channel.Channel} channel The channel that the value is
 *     being received from.
 * @param {boolean} handler.active Determines whether the receive is still
 *     active and should still be serviced.
 * @param {function} handler.commit Deactivates the receive (so it can't be
 *     serviced a second time) and returns the callback to be fired when the
 *     receive completes.
 * @return {module:chanko/channel~Box|null} Either the boxed value received from
 *     the channel, or `null` if the receive must be queued to await a
 *     corresponding send.
 * @private
 */


function handleRecv(channel, handler) {
  let sender, sendHandler, callback; // Runs if the channel is buffered and the buffered is not empty (an empty
  // buffer means there are no pending sends). We immediately process any sends
  // that were queued when there were no pending receives, up until the buffer
  // is filled with sent values.

  if (channel.buffer && Object(modules_buffer__WEBPACK_IMPORTED_MODULE_2__["count"])(channel.buffer) > 0) {
    handler.commit();
    const value = Object(modules_buffer__WEBPACK_IMPORTED_MODULE_2__["remove"])(channel.buffer);

    for (;;) {
      if (Object(modules_buffer__WEBPACK_IMPORTED_MODULE_2__["isFull"])(channel.buffer)) {
        break;
      }

      sender = Object(modules_queue__WEBPACK_IMPORTED_MODULE_1__["dequeue"])(channel.sends);

      if (sender === modules_queue__WEBPACK_IMPORTED_MODULE_1__["EMPTY"]) {
        break;
      }

      sendHandler = sender.handler;

      if (sendHandler.active) {
        callback = sendHandler.commit();

        if (callback) {
          Object(modules_dispatcher__WEBPACK_IMPORTED_MODULE_3__["dispatch"])(() => callback(true));
        }

        if (isReduced(channel.xform[modules_protocol__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](channel.buffer, sender.value))) {
          close(channel);
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
    sender = Object(modules_queue__WEBPACK_IMPORTED_MODULE_1__["dequeue"])(channel.sends);

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


  if (channel.closed) {
    handler.commit();
    return box(CLOSED);
  } // If an unbuffered channel or a buffered channel with an empty buffer has no
  // pending sends, and if the channel is still open, the receive is queued to
  // be processed when a send is available. Receives whose handlers have gone
  // inactive as the result of `select` processing are periodically purged.


  if (channel.dirtyRecvs > channel.maxDirty) {
    Object(modules_queue__WEBPACK_IMPORTED_MODULE_1__["filter"])(channel.recvs, receiver => receiver.active);
    channel.dirtyRecvs = 0;
  } else {
    channel.dirtyRecvs++;
  }

  if (Object(modules_queue__WEBPACK_IMPORTED_MODULE_1__["count"])(channel.recvs) >= channel.maxQueued) {
    throw Error(`No more than ${channel.maxQueued} pending receives are allowed on a single channel`);
  }

  Object(modules_queue__WEBPACK_IMPORTED_MODULE_1__["enqueue"])(channel.recvs, handler);
  return null;
}
/**
 * Closes the channel if it isn't already closed. This immediately returns any
 * buffered values to pending receives. If there are no buffered values (or if
 * they've already been taken by other receives), then all of the rest of the
 * receives are completed with the value of {@link module:chanko~CLOSED|CLOSED}.
 * Any pending sends are completed with the value of `false`.
 *
 * Note that the buffer is not emptied if there are still values remaining after
 * all of the pending receives have been handled. The channel will still provide
 * those values to any future receives, though no new values may be added to the
 * channel. Once the buffer is depleted, any future receives will return
 * {@link module:chanko~CLOSED|CLOSED}.
 *
 * @memberof module:chanko/channel
 * @param {module:chanko/channel.Channel} channel The channel to be closed.
 * @private
 */


function close(channel) {
  if (channel.closed) {
    return;
  }

  channel.closed = true;
  let receiver, sender, callback; // If there is a buffer and it has at least one value in it, send those values
  // to any pending receives that might still be queued.

  if (channel.buffer) {
    channel.xform[modules_protocol__WEBPACK_IMPORTED_MODULE_0__["protocols"].result](channel.buffer);

    for (;;) {
      if (Object(modules_buffer__WEBPACK_IMPORTED_MODULE_2__["count"])(channel.buffer) === 0) {
        break;
      }

      receiver = Object(modules_queue__WEBPACK_IMPORTED_MODULE_1__["dequeue"])(channel.recvs);

      if (receiver === modules_queue__WEBPACK_IMPORTED_MODULE_1__["EMPTY"]) {
        break;
      }

      if (receiver.active) {
        callback = receiver.commit();
        const value = Object(modules_buffer__WEBPACK_IMPORTED_MODULE_2__["remove"])(channel.buffer);

        if (callback) {
          Object(modules_dispatcher__WEBPACK_IMPORTED_MODULE_3__["dispatch"])(() => callback(value));
        }
      }
    }
  } // Once the buffer is empty (or if there isn't a buffer at all), send CLOSED
  // to all remaining queued receives.


  for (;;) {
    receiver = Object(modules_queue__WEBPACK_IMPORTED_MODULE_1__["dequeue"])(channel.recvs);

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
    sender = Object(modules_queue__WEBPACK_IMPORTED_MODULE_1__["dequeue"])(channel.sends);

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
/*! exports provided: CLOSED, DEFAULT, chan, timedChan, transChan, isClosed, isBuffered, isTimed, sendAsync, recvAsync, selectAsync, send, recv, recvOrThrow, select, close, value, channel */
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
/* harmony import */ var _babel_runtime_helpers_awaitAsyncGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/awaitAsyncGenerator */ "./node_modules/@babel/runtime/helpers/awaitAsyncGenerator.js");
/* harmony import */ var _babel_runtime_helpers_awaitAsyncGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_awaitAsyncGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_wrapAsyncGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/wrapAsyncGenerator */ "./node_modules/@babel/runtime/helpers/wrapAsyncGenerator.js");
/* harmony import */ var _babel_runtime_helpers_wrapAsyncGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_wrapAsyncGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handler */ "./src/modules/channel/handler.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CLOSED", function() { return _handler__WEBPACK_IMPORTED_MODULE_2__["CLOSED"]; });

/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./select */ "./src/modules/channel/select.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT", function() { return _select__WEBPACK_IMPORTED_MODULE_3__["DEFAULT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAsync", function() { return _select__WEBPACK_IMPORTED_MODULE_3__["selectAsync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "select", function() { return _select__WEBPACK_IMPORTED_MODULE_3__["select"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "value", function() { return _select__WEBPACK_IMPORTED_MODULE_3__["value"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "channel", function() { return _select__WEBPACK_IMPORTED_MODULE_3__["channel"]; });

/* harmony import */ var modules_buffer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! modules/buffer */ "./src/modules/buffer.js");
/* harmony import */ var modules_protocol__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! modules/protocol */ "./src/modules/protocol.js");



/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

/**
 * An implementation of channels. These channels are essentially queues that
 * hold instructions waiting for the next available async function to process
 * them. They can be buffered, which is accomplished using the buffer functions
 * `{@link module:chanko~Chanko.fixed|fixed}`,
 * `{@link module:chanko~Chanko.dropping|dropping}`, and
 * `{@link module:chanko~Chanko.sliding|sliding}`.
 *
 * Channels do not interact with JS tasks or the dispatcher in any meaningful
 * way. They're just here to hold tasks which may themselves then cause new JS
 * tasks to be created via the dispatcher.
 *
 * Channels may have transducers associated with them. The transducers are
 * expected to follow the same conventions as any of the popular transducer
 * libraries. Explicit support is required because channels wouldn't play well
 * with the normal way of making an object support transduction, for two
 * different reasons.
 *
 * * Transducers require the ability to create a new, empty collection of the
 *   same type as the input collection. In this case, that would mean creating a
 *   new channel, meaning that the output channel (from which the transformed
 *   values are received) would be different than the input channel (where
 *   values are sent).
 * * If we somehow get over that requirement and keep all action on the same
 *   channel, we can't take values from the channel, transform them, and put
 *   them back. This would potentially change the order of values in the channel
 *   since we are dealing with asynchronous processes.
 *
 * The explicit support means a transducer is directly associated with a
 * channel. When a value is sent to the channel, it's first run through the
 * transducer and the transformed value is the one actually put into the
 * channel's buffer. This avoids both of the problems noted above.
 *
 * @module chanko/channel
 */




/**
 * A handler function for exceptions that are thrown by a transducer while
 * transforming values on a channel.
 *
 * @param {object} err The error object that was thrown by the transducer.
 * @return {*} A value that should be put into the channel's buffer when the
 *     transducer throws the error. If this value is
 *     {@link module:chanko~Chanko.CLOSED|CLOSED}, then no value at all will be
 *     added to the buffer.
 * @callback ExceptionHandler
 * @private
 */

/**
 * The default exception handler, used when no exception handler is supplied to
 * `{@link handleException}`, `{@link wrapTransformer}`,
 * `{@link module:chanko~Chanko.chan|chan}`, or
 * `{@link module:chanko~Chanko.transChan|transChan}`. This default handler
 * merely returns `{@link module:chanko~Chanko.CLOSED|CLOSED}`, which will
 * result in no new value being written to the channel.
 *
 * @type {module:chanko~exceptionHandler}
 * @memberof module:chanko/channel
 * @private
 */

const DEFAULT_HANDLER = () => _handler__WEBPACK_IMPORTED_MODULE_2__["CLOSED"];
/**
 * Creates a new handler used for `send` and `recv` operations.
 *
 * @memberof module:chanko/channel
 * @param {module:chanko/channel~HandlerCallback} fn The callback to be run when
 *     (and if) the operation completes.
 * @return {module:chanko/channel~Handler} The new handler.
 * @private
 */


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
/**
 * Handles an exception that is thrown inside a transducer. The thrown error is
 * passed to the `handler` function, and the result of that handler function is
 * added to the channel's buffer. If that value is
 * {@link module:chanko~Chanko.CLOSED|CLOSED}, then it is *not* added to the
 * buffer.
 *
 * @param {module:chanko/buffers~Buffer} buffer The buffer that backs the
 *     channel whose transducer's exceptions are being handled.
 * @param {module:chanko/channel~exceptionHandler} handler The exception
 *     handling function that is run when an error occurs in a transducer.
 * @param  {Object} ex The error object thrown by the transducer.
 * @return {module:chanko/buffers~Buffer} The buffer itself. This is done to
 *     make it easier to integrate this function into a transducer's step
 *     function.
 * @private
 */


function handleException(buffer, handler, ex) {
  const value = handler(ex);

  if (value !== _handler__WEBPACK_IMPORTED_MODULE_2__["CLOSED"]) {
    Object(modules_buffer__WEBPACK_IMPORTED_MODULE_4__["add"])(buffer, value);
  }

  return buffer;
}
/**
 * A transducer that wraps another transducer with error handling code. Any
 * error that occurs within the transducer, either in the step function or the
 * result function, will cause the error handler to be run.
 *
 * @param {Object} xform The transducer to add an error handler to.
 * @param {ExceptionHandler} [handler=DEFAULT_HANDLER] The exception handling
 *     function that is run when an error occurs in the transducer.
 * @return {Object} A new transducer that is the result of wrapping the provided
 *     transducer's step and result functions with the exception handler.
 * @private
 */


function handlerTransducer(xform, handler = DEFAULT_HANDLER) {
  return {
    [modules_protocol__WEBPACK_IMPORTED_MODULE_5__["protocols"].step](buffer, input) {
      try {
        return xform[modules_protocol__WEBPACK_IMPORTED_MODULE_5__["protocols"].step](buffer, input);
      } catch (ex) {
        return handleException(buffer, handler, ex);
      }
    },

    [modules_protocol__WEBPACK_IMPORTED_MODULE_5__["protocols"].result](buffer) {
      try {
        return xform[modules_protocol__WEBPACK_IMPORTED_MODULE_5__["protocols"].result](buffer);
      } catch (ex) {
        return handleException(buffer, handler, ex);
      }
    }

  };
}
/**
 * The reducer used at the end of a transducer chain to control how the
 * transformed values are reduced back onto the channel's buffer. This reducer
 * does nothing more than add the input items (which are the transformed values
 * that are being put onto the channel) to the channel buffer.
 *
 * This is a necessary part of working with a transducer, as the final reducer
 * always takes the transformed values and renders them into whatever collection
 * is desired. This is that final reducer for channels.
 *
 * @type {Object}
 * @private
 */


const bufferReducer = {
  [modules_protocol__WEBPACK_IMPORTED_MODULE_5__["protocols"].init]() {
    throw Error("init not available");
  },

  [modules_protocol__WEBPACK_IMPORTED_MODULE_5__["protocols"].step](buffer, input) {
    Object(modules_buffer__WEBPACK_IMPORTED_MODULE_4__["add"])(buffer, input);
    return buffer;
  },

  [modules_protocol__WEBPACK_IMPORTED_MODULE_5__["protocols"].result](buffer) {
    return buffer;
  }

};
/**
 * Parses the buffer argument and options, along with a set of default options,
 * to figure out what was really passed to
 * `{@link module:chanko~Chanko.chan|chan}`.
 *
 * @param {(null|number|module:chanko/buffer~Buffer)} buffer The buffer argument
 *     passed to `{@link module:chanko~Chanko.chan|chan}`.
 * @param {object} options The options argument passed to
 *     `{@link module:chanko~Chanko.chan|chan}`.
 * @param {object} defaultOptions Default values for options that might not have
 *     been sent to `{@link module:chanko~Chanko.chan|chan}`.
 * @return {object} An object containing the processed values of all of the
 *     arguments sent to `{@link module:chanko~Chanko.chan|chan}`.
 * @private
 */

function parseArgs(buffer, options, defaultOptions) {
  let buf;
  let opts;

  if (!buffer) {
    // same for 0, null, or undefined
    buf = null;
    opts = options;
  } else if (typeof buffer === "number") {
    buf = Object(modules_buffer__WEBPACK_IMPORTED_MODULE_4__["fixed"])(buffer);
    opts = options;
  } else if (Object(modules_buffer__WEBPACK_IMPORTED_MODULE_4__["isBuffer"])(buffer)) {
    buf = buffer;
    opts = options;
  } else {
    // If no buffer is specified but a transducer is, we assume fixed(1)
    // instead of no buffer
    buf = (buffer === null || buffer === void 0 ? void 0 : buffer.transducer) ? Object(modules_buffer__WEBPACK_IMPORTED_MODULE_4__["fixed"])(1) : null;
    opts = buffer;
  }

  const {
    transducer,
    handler,
    maxDirty,
    maxQueued,
    timer
  } = Object.assign({}, defaultOptions, opts);
  return {
    buf,
    transducer,
    handler,
    maxDirty,
    maxQueued,
    timer
  };
}
/**
 * Creates and returns a new channel.
 *
 * By default this channel will be a simple unbuffered, untransformed channel,
 * but that can be changed through options. A channel does not have any
 * externally useful functions. It exists largely to be passed into
 * `{@link module:chanko~Chanko.send|send}`,
 * `{@link module:chanko~Chanko.recv|recv}`, and
 * `{@link module:chanko~Chanko.select|select}` invocations, along with their
 * non-blocking variations (`{@link module:chanko~Chanko.sendAsync|sendAsync}`,
 * `{@link module:chanko~Chanko.recvAsync|recvAsync}`, and
 * `{@link module:chanko~Chanko.selectAsync|selectAsync}`).
 *
 * If a buffer value is provided, it defines what buffer should back the
 * channel. If this is `null` or `0`, the channel will be unbuffered. If it's a
 * positive number, the channel will be buffered by a
 * `{@link module:chanko/buffer~FixedBuffer|FixedBuffer} `of that size. If it's a
 * `{@link module:chanko/buffer.Buffer|Buffer}` object, that object will be used
 * as the channel's buffer. If it's missing altogether, the channel will be
 * unbuffered unless a `transducer` option is provided (see below), in which
 * case it will be a `{@link module:chanko/buffer~FixedBuffer|FixedBuffer}` of
 * size 1.
 *
 * `chan` supports transducers by allowing a transducer function to be
 * associated with it. This is passed as the `transducer` option and can only be
 * used if the channel is buffered (otherwise an error is thrown). This
 * transducer function must take another transducer as a parameter (allowing
 * transformers to be chained), and it must return an object conforming to the
 * transducer protocol.
 *
 * Errors in the transformation process can be handled by passing an error
 * handler. This is a function that expects to receive an error object as a
 * parameter and can return a value that is then put onto the channel. If this
 * value is `{@link module:chanko~Chanko.CLOSED|CLOSED}`, then no value will be
 * put onto the channel upon handler completion.
 *
 * @memberof module:chanko~Chanko
 * @param {(number|module:chanko/buffer.Buffer)} [buffer] The buffer object
 *     that should back this channel. If this is a positive number, a fixed
 *     buffer of that size will be created to back the channel. If it is `0` or
 *     `null`, the new channel will be unbuffered. If it's not present, the new
 *     channel will be unbuffered unless there is a `transducer` option, in in
 *     which case it will be buffered with a size 1
 *     `{@link module:chanko/buffer~FixedBuffer|FixedBuffer}`.
 * @param {Object} [options] A set of options for configuring the channel's
 *     queue.
 * @param {module:chanko~transducer} [options.transducer] A transducer to run
 *     each value through before putting it onto the channel. This function
 *     should expect one parameter (another transducer that it's chained to) and
 *     return an object that conforms to the transducer protocol. If a
 *     transducer is provided on an unbuffered channel, an error will be thrown.
 * @param {module:chanko~exceptionHandler} [options.handler] An error handler
 *     that is run whenever an error occurs inside a transducer function. If
 *     that happens, this function is called with one parameter, which is the
 *     error object. The value that the handler returns (if it is not
 *     `{@link module:chanko~Chanko.CLOSED|CLOSED}`) will be put onto the
 *     channel when the handler finishes running.
 * @param {number} [options.maxDirty=64] The maximum number of dirty operations
 *     that can be in the queue before those operations are subject to being
 *     purged. Dirty operations are those that may not be valid anymore because
 *     they were in the list of operations passed to
 *     `{@link module:chanko~Chanko.select|select}` or
 *     `{@link module:chanko~Chanko.selectAsync|selectAsync}` but were not
 *     chosen to run. This provides a chance for a very minor performance tweak
 *     and is best left alone.
 * @param {number} [options.maxQueued=1024] The maximum number of operations
 *     that can be queued up at the same time. This prevents infinite loops from
 *     accidentally eating up all of the available memory.
 * @param {number} [options.timer] If this value is present, the channel will
 *     be a timed channel that closes automatically after this number of
 *     milliseconds.
 * @return {module:chanko/channel.Channel} A new channel.
 */


function chan(buffer, options) {
  const defaultOptions = {
    maxDirty: _handler__WEBPACK_IMPORTED_MODULE_2__["MAX_DIRTY"],
    maxQueued: _handler__WEBPACK_IMPORTED_MODULE_2__["MAX_QUEUED"]
  };
  const {
    buf,
    transducer,
    handler,
    maxDirty,
    maxQueued,
    timer
  } = parseArgs(buffer, options, defaultOptions);

  if (transducer && !buf) {
    throw Error("Only buffered channels can use transducers");
  }

  const xf = handlerTransducer(transducer ? transducer(bufferReducer) : bufferReducer, handler);
  const isTimed = typeof timer === "number";
  const ch = Object(_handler__WEBPACK_IMPORTED_MODULE_2__["channel"])(buf, xf, isTimed, maxDirty, maxQueued);

  function iterator() {
    return _iterator.apply(this, arguments);
  }

  function _iterator() {
    _iterator = _babel_runtime_helpers_wrapAsyncGenerator__WEBPACK_IMPORTED_MODULE_1___default()(function* () {
      for (;;) {
        const value = yield _babel_runtime_helpers_awaitAsyncGenerator__WEBPACK_IMPORTED_MODULE_0___default()(recv(ch));

        if (value === _handler__WEBPACK_IMPORTED_MODULE_2__["CLOSED"]) {
          break;
        }

        yield value;
      }
    });
    return _iterator.apply(this, arguments);
  }

  ch[Symbol.asyncIterator] = iterator;

  if (isTimed) {
    setTimeout(() => Object(_handler__WEBPACK_IMPORTED_MODULE_2__["close"])(ch), timer);
  }

  return ch;
}
/**
 * Creates an unbuffered, timed channel. This channel closes automatically after
 * the supplied number of milliseconds and is the equivalent of calling `chan(0,
 * { timer: delay })`.
 *
 * @memberof module:chanko~Chanko
 * @param {number} delay The number of milliseconds after the channel is created
 *     that it will be closed automatically.
 * @return {module:chanko/channel.Channel} A new timed channel.
 */


function timedChan(delay = 0) {
  return chan({
    timer: delay
  });
}
/**
 * Creates a buffered channel with a transducer and optional error handler. The
 * buffer for this channel is a
 * `{@link module:chanko/buffers~FixedBuffer|FixedBuffer}` of size 1. This is
 * the equivalent of `chan(1, { transducer, handler })`.
 *
 * @memberof module:chanko~Chanko
 * @param {module:chanko~transducer} transducer The transducer used to transform
 *     values on the new channel.
 * @param {module:chanko~exceptionHandler} [handler] An exception handler called
 *     with the error object as its only argument when an error happens inside a
 *     transducer. If this is not provided, a default handler is used that
 *     simply does nothing, including sending no output from the value that
 *     errored.
 * @return {module:chanko/channel.Channel} A new channel with a transducer.
 */


function transChan(transducer, handler) {
  return chan({
    transducer,
    handler
  });
}
/**
 * Determines whether a channel is closed.
 *
 * A closed channel will cause any `send` operation to return `false` and any
 * `recv` operation to return any buffered items that remain, followed by
 * `{@link module:chanko~Chanko.CLOSED|CLOSED}.
 *
 * @memberof module:chanko~Chanko
 * @param {module:chanko/channel.Channel} channel The channel to check.
 * @return {boolean} Either `true` if the channel is closed or `false` if it
 *     isn't.
 */


function isClosed(channel) {
  return channel.closed;
}
/**
 * Determines whether a channel is buffered.
 *
 * A channel is buffered if a buffer or a number was passed as the first
 * argument of `{@link module:chanko~Chanko.chan|chan}` or if a transducer is a
 * part of the channel.
 *
 * @memberof module:chanko~Chanko
 * @param {module:chanko/channel.Channel} channel The channel to check.
 * @return {boolean} Either `true` if the channel is buffered or `false` if it
 *     isn't.
 */


function isBuffered(channel) {
  return channel.isBuffered;
}
/**
 * Determines whether a channel is timed.
 *
 * A channel is timed if it was created either with the `timer` option of
 * `{@link module:chanko~Chanko.chan|chan}` or with the
 * `{@link module:chanko~Chanko.timedChan|timedChan}` function. It will
 * automatically close after a certain period of time.
 *
 * @memberof module:chanko~Chanko
 * @param {module:chanko/channel.Channel} channel The channel to check.
 * @return {boolean} Either `true` if the channel is timed or `false` if it
 *     isn't.
 */


function isTimed(channel) {
  return channel.isTimed;
}
/**
 * Sends a value to this channel without blocking.
 *
 * This means that a call to `sendAsync` does not go into an `await`
 * expression, and it is not necessary to use it inside a async function.
 * Rather than blocking until the sent value is taken by another async
 * function, this one returns immediately and then invokes the callback (if
 * provided) when the sent value is taken. It can be seen as a non-blocking
 * version of `{@link module:chanko~Chanko.send|send}`.
 *
 * While the primary use of this function is to send values onto channels in
 * contexts where being inside an async function is impossible (for example,
 * in a DOM element's event handler), it can still be used inside async
 * functions at times when it's important to make sure that the function
 * doesn't block from the send.
 *
 * The callback is a function of one parameter. The parameter that's
 * supplied to the callback is the same as what is supplied to `await send`:
 * `true` if the value was taken, or `false` if the channel was closed. If
 * the callback isn't present, nothing will happen after the value is taken.
 *
 * @memberof module:chanko~Chanko
 * @param {*} [value] The value being put onto the channel.
 * @param {module:chanko~opCallback} [callback] A function that gets invoked
 *     either when the value is taken by another process or when the channel
 *     is closed. This function can take one parameter, which is `true` in
 *     the former case and `false` in the latter.
 */


function sendAsync(channel, value, callback = () => {}) {
  const result = Object(_handler__WEBPACK_IMPORTED_MODULE_2__["handleSend"])(channel, value, opHandler(callback));

  if (result && callback) {
    callback(result.value);
  }
}
/**
 * Receives a value from this channel without blocking.
 *
 * This means that a call to `receiveAsync` does not go into an `await`
 * expression, and it is not necessary to use it inside a async function.
 * Rather than blocking until a value becomes available on the channel to be
 * received, this one returns immediately and then invokes the callback (if
 * provided) when a value becomes available. It can be regarded as a
 * non-blocking version of {@link module:chanko~Chanko.recv|recv}`.
 *
 * While the primary use of this function is to receive values from channels
 * in contexts where being inside an async function is impossible, it can
 * still be used inside async functions at times when it's important that
 * the receive doesn't block the function.
 *
 * The callback is a function of one parameter, and the value supplied for
 * that parameter is the value received from the channel (either a value
 * that was sent or `{@link module:chanko~Chanko.CLOSED|CLOSED}`). If the
 * callback isn't present, nothing will happen after the value is taken.
 *
 * @memberof module:chanko~Chanko
 * @param {module:chanko~opCallback} [callback] A function that gets invoked
 *     when a value is made available to be received (this value may be
 *     `{@link module:chanko~Chanko.CLOSED|CLOSED}` if the channel closes with
 *     no available value). The function can take one parameter, which is
 *     the value that is received from the channel.
 */


function recvAsync(channel, callback = () => {}) {
  const result = Object(_handler__WEBPACK_IMPORTED_MODULE_2__["handleRecv"])(channel, opHandler(callback));

  if (result && callback) {
    callback(result.value);
  }
}
/**
 * Sends a value to a channel, blocking the async function until that value is
 * received from the channel by a different function (or until the channel
 * closes).
 *
 * A value is always sent to the channel, but if that value isn't specified by
 * the second parameter, it is `undefined`. Any value may be sent to a channel,
 * with the sole exception of the special value
 * `{@link module:chanko~Chanko.CLOSED|CLOSED}`.
 *
 * This function *must* be called from within an async function and as part of
 * an `await` expression.
 *
 * When `send` is completed and its function unblocks, its `await` expression
 * evaluates to a status boolean that indicates what caused the function to
 * unblock. That value is `true` if the sent value was successfully taken by
 * another process, or `false` if the unblocking happened because the target
 * channel closed.
 *
 * @memberof module:chanko~Chanko
 * @param {*} [value] The value being put onto the channel.
 * @return {Promise<boolean>} A promise that will resolve to `true` or `false`
 *     depending on whether the put value is actually taken.
 */


function send(channel, value) {
  return new Promise(resolve => {
    sendAsync(channel, value, resolve);
  });
}
/**
 * Receives a value from this channel, blocking the async function until a
 * value becomes available to be received (or until the channel closes with
 * no more values on it to be received).
 *
 * This function *must* be called from within an async function and as part
 * of an `await` expression.
 *
 * When `receive` is completed and its function unblocks, its `await`
 * expression evaluates to the actual value that was received. If the target
 * channel closed, then all of the values already placed onto it are
 * resolved by `receive` as normal, and once no more values are available,
 * the special value `{@link module:chanko~Chanko.CLOSED|CLOSED}` is returned.
 *
 * @memberof module:chanko~Chanko
 * @return {Promise} A promise that will resolve to the value received from
 *     the channel once that receive is completed. If the channel closes
 *     without a value being made available, this will resolve to
 *     `{@link module:chanko~Chanko.CLOSED|CLOSED}`.
 */


function recv(channel) {
  return new Promise(resolve => {
    recvAsync(channel, resolve);
  });
}
/**
 * Receives a value from a channel, blocking the async function until a value
 * becomes available to be received (or until the channel closes with no more
 * values on it to be received). If the received value is an error object, that
 * error is thrown at that point.
 *
 * This function *must* be called from within an async function and as part of
 * an `await` expression.
 *
 * It functions in every way like `{@link module:chanko~Chanko.recv|recv}`
 * *except* in the case that the value on the channel is an object that has
 * `Error.prototype` in its prototype chain (any built-in error, any
 * properly-constructed custom error). If that happens, the error is thrown,
 * which will cause the returned promise to be rejected with the error. It can
 * then be handled up the promise chain like any other rejected promise.
 *
 * `takeOrThrow` is roughly equivalent to:
 *
 * ```
 * const value = await recv(ch);
 * if (Error.prototype.isPrototypeOf(value)) {
 *   throw value;
 * }
 * ```
 *
 * @memberof module:chanko~Chanko
 * @return {Promise} A promise that will resolve to the value taken from the
 *     channel once that take is completed. If the channel closes without a
 *     value being made available, this will resolve to
 *     `{@link module:chanko~Chanko.CLOSED|CLOSED}`. If the taken value is an
 *     error, the promise will instead be rejected with the error object as the
 *     reason.
 */


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
/**
 * Closes the channel, if it isn't already closed. This immediately returns any
 * buffered values to pending receives. If there are no buffered values (or if
 * they've already been taken by other receives), then all of the rest of the
 * receives are completed with the value of
 * {@link module:chanko~Chanko.CLOSED|CLOSED}. Any pending sends are completed
 * with the value of `false`.
 *
 * Note that the buffer is not emptied if there are still values remaining after
 * all of the pending receives have been handled. The channel will still provide
 * those values to any future receives, though no new values may be added to the
 * channel. Once the buffer is depleted, any future receives will return
 * {@link module:chanko~Chanko.CLOSED|CLOSED}.
 *
 * @memberof module:chanko~Chanko
 * @param {module:chanko/channel.Channel} channel The channel to be closed.
 */


function close(channel) {
  Object(_handler__WEBPACK_IMPORTED_MODULE_2__["close"])(channel);
}


/**
 * Used by channels to track execution of operations (`send`, `recv`, and
 * `select`). They provide two pieces of information: the function to call when
 * a `send` or `recv` unblocks (because a value given to send has been received,
 * or a `recv` has accepted a value that has been sent) and whether or not the
 * handler is still active.
 *
 * The function is a callback that actually defines the difference between
 * `{@link module:chanko~Chanko.send|send}` /
 * `{@link module:chanko~Chanko.recv|recv}` /
 * `{@link module:chanko~Chanko.select|select}` and
 * `{@link module:chanko~Chanko.sendAsync|sendAsync}` /
 * `{@link module:chanko~Chanko.recvAsync|recvAsync}` /
 * `{@link module:chanko~Chanko.selectAsync|selectAsync}`: while the unblocked
 * calls use the callback passed to the function, `send`, `recv`, and `select`
 * simply continue the process where it left off. (This is why `send`, `recv`,
 * and `select` only work inside `async` functions with `await` if the return
 * value is needed, because otherwise there's no process to continue.)
 *
 * This function is provided as the return value of the `commit` method. Calling
 * `commit` has no extra effect with `send` and `recv` operations, but for
 * `select`, it also marks the handler as no longer being active. This means
 * that only one of the operations passed to select can be completed, because
 * after the first one, the handler is no longer active and will not be allowed
 * to process a second operation.
 *
 * If a `send` or `recv` (or equivalent `select` operation) cannot be
 * immediately completed because there isn't a corresponding pending `recv` or
 * `send`, the handler is queued to be run when a new `recv` or `send` becomes
 * available.
 *
 * @typedef Handler
 * @property {boolean} active Whether or not the operation is still active. An
 *     inactive operation is not serviced and will be cleared from the queue on
 *     the next dirty operation purge.
 * @property {function} commit Marks the handler as inactive (so it doesn't run
 *     twice) and returns the callback to be run when the operation completes.
 * @private
 */

/**
 * A callback function run when a `send` or `recv` operation completes.
 *
 * @callback HandlerCallback
 * @param {*} value The value provided by the channel. In a `recv`, this is the
 *     value received from the channel. In a `send`, this is `true` for a
 *     successful send and `false` if the channel is closed before the send can
 *     complete.
 * @private
 */

/***/ }),

/***/ "./src/modules/channel/select.js":
/*!***************************************!*\
  !*** ./src/modules/channel/select.js ***!
  \***************************************/
/*! exports provided: DEFAULT, select, selectAsync, value, channel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT", function() { return DEFAULT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "select", function() { return select; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAsync", function() { return selectAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "value", function() { return value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "channel", function() { return channel; });
/* harmony import */ var _handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handler */ "./src/modules/channel/handler.js");
/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

/**
 * The name of the channel returned from `await
 * {@link module:chanko~Chanko.select|select}` or sent to the callback in
 * `{@link module:chanko~Chanko.selectAsync|selectAsync}` when the default is
 * returned as its value.
 *
 * This only happens when an `{@link module:chanko~Chanko.select|select} /
 * {@link module:chanko~Chanko.selectAsync|selectAsync}` call is performed, all
 * operations are initially blocking, and a `default` option is sent. The
 * immediate response in that situation is `{ value: options.default, channel:
 * DEFAULT }`.
 *
 * @type {Symbol}
 * @memberof module:chanko~Chanko
 */

const DEFAULT = Symbol("DEFAULT");
/**
 * Creates a new handler used for `select` operations.
 *
 * @memberof module:chanko/channel
 * @param {module:chanko/channel~Box} active A boxed value indicating whether
 *     the handler is valid. This is a boxed value because the select-handling
 *     code needs to manipulate it directly.
 * @param {module:chanko/channel~HandlerCallback} fn The callback to be run when
 *     (and if) the operation completes.
 * @return {module:chanko/channel~Handler} The new handler.
 * @private
 */

function selectHandler(active, fn) {
  return Object.create(null, {
    active: {
      get() {
        return active.value;
      }

    },
    commit: {
      value: () => {
        active.value = false;
        return fn;
      }
    }
  });
}
/**
 * Creates a randomly shuffled array containing one of each integer value from
 * `0` to an upper limit. It is used to randomly select a channel to be active
 * when multiples unblock in a `select` operation.
 *
 * @memberof module:chanko/channel
 * @param {number} upper The upper limit of the array values, exclusive.
 * @return {number[]} An array of integers from `0` to `upper - 1`, shuffled
 *     into a random order.
 * @private
 */


function randomArray(upper) {
  const array = [];

  for (let k = 0; k < upper; k++) {
    array.push(k);
  }

  for (let j = upper - 1; j > 0; j--) {
    const i = Math.floor(Math.random() * (j + 1));
    const temp = array[j];
    array[j] = array[i];
    array[i] = temp;
  }

  return array;
}
/**
 * A result that comes from `select` operations.
 *
 * @typedef SelectResult
 * @property {*} value If the `select` operation resulted in a receive, this is
 *     the value received from the channel. If it resulted in a send, this is
 *     `true` for a successful send and `false` if the channel closed first.
 * @property {module:chanko/channel.Channel} channel The channel upon which the
 *     selected operation happened.
 * @memberof module:chanko/channel
 */

/**
 * Creates a select result from its component properties.
 *
 * @memberof module:chanko/channel
 * @param {*} value If the `select` operation resulted in a receive, this is
 *     the value received from the channel. If it resulted in a send, this is
 *     `true` for a successful send and `false` if the channel closed first.
 * @param {module:chanko/channel.Channel} channel The channel upon which the
 *     selected operation happened.
 * @return {module:chanko/channel.SelectResult} The properties wrapped into an
 *     object for output.
 * @private
 */


function selectResult(value, channel) {
  return Object.assign(Object.create(null), {
    value,
    channel
  });
}
/**
 * Completes the first operation among the provided operations that comes
 * available, without blocking.
 *
 * This means that a call to `selectAsync` does not go into an `await`
 * expression, and it is not necessary to use it inside a process. Rather than
 * blocking until an operation completes, this one returns immediately and then
 * invokes the callback (if provided) as soon as one of the supplied operations
 * completes. It can be regarded as a non-blocking version of
 * `{@link module:chanko~Chanko.select|select}`.
 *
 * This function uses an operations list that's identical to the one used by
 * `{@link module:chanko~Chanko.select|select}`. It's an array of values; if a
 * value is a channel, then that operation is a take on that channel, while if
 * it's a two-element array of channel and value, then that operation is a put
 * of that value onto that channel. All options that are available to
 * `{@link module:chanko~Chanko.select|select}` are also available here.
 *
 * The callback is a function of one parameter, which in this case is an object
 * with `value` and `channel` properties.
 *
 * @memberof module:chanko~Chanko
 * @param {Object[]} operations A collection of elements that correspond to recv
 *     and send operations. A recv operation is signified by an element that is
 *     a channel (which is the channel to be received from). A send operation is
 *     specified by an element that is itself a two-element array, which has a
 *     channel followed by a value (which is the channel and value to be sent).
 * @param {module:chanko~selectCallback} callback A function that gets invoked
 *     when one of the operations completes.
 * @param {Object} [options={}] An optional object which can change the behavior
 *     of `selectAsync` through two properties.
 * @param {boolean} [options.priority=false] If `true`, then the priority of
 *     operations to complete when more than one is immediately available is a
 *     priority according to position within the operations array (earlier
 *     positions have the higher priority). If `false` or not present, the
 *     priorty of operation completion is random.
 * @param {*} [options.default] If set and all of the operations initially
 *     block, the `selectAsync` calls its callback immediately with the value of
 *     this option (the channel will be
 *     `{@link module:chanko~Chanko.DEFAULT|DEFAULT})`. If not set, the
 *     `selectAsync` call will not call its callback until one of the operations
 *     completes and that value and channel will be the ones returned.
 */


function selectAsync(ops, callback = () => {}, options = {}) {
  const count = ops.length;

  if (count === 0) {
    throw Error("select called with no operations");
  }

  const priority = !!options.priority;
  const indices = priority ? [] : randomArray(count);
  const active = Object(_handler__WEBPACK_IMPORTED_MODULE_0__["box"])(true);

  function createSelectHandler(channel) {
    return selectHandler(active, value => {
      callback(selectResult(value, channel));
    });
  }

  let result;

  for (let i = 0; i < count; i++) {
    // Choose an operation. If `priority` is true then it's the next index,
    // otherwise it's random
    const op = ops[priority ? i : indices[i]];
    let channel, value; // Apply every operation to its channel, one at a time

    if (Array.isArray(op)) {
      [channel, value] = op;
      result = Object(_handler__WEBPACK_IMPORTED_MODULE_0__["handleSend"])(channel, value, createSelectHandler(channel));
    } else {
      channel = op;
      result = Object(_handler__WEBPACK_IMPORTED_MODULE_0__["handleRecv"])(channel, createSelectHandler(channel));
    } // We check for box here because a box from a channel indicates that the
    // value is immediately available (that there is no need to block to get the
    // value). If this happens, we execute the callback immediately with that
    // value and channel and stop queueing other operations.


    if (Object(_handler__WEBPACK_IMPORTED_MODULE_0__["isBox"])(result)) {
      callback(selectResult(result.value, channel));
      break;
    }
  } // If none of the operaetions immediately returned values (they are all
  // blocked), and we have set a default channel option, then return the value
  // if the default channel rather than waiting for the queued operations to
  // complete.


  if (!Object(_handler__WEBPACK_IMPORTED_MODULE_0__["isBox"])(result) && Object.prototype.hasOwnProperty.call(options, "default")) {
    if (active.value) {
      active.value = false;
      callback(selectResult(options.default, DEFAULT));
    }
  }
}
/**
 * Completes the first operation among the provided operations that comes
 * available, blocking the process until then.
 *
 * `operations` is an array whose elements must be channels or two-element
 * sub-arrays of channels and values, in any combination. An operation that is a
 * channel is a take operation on that channel. An operation that is a
 * two-element array is a put operation on that channel using that value.
 * Exactly one of these operations will complete, and it will be the first
 * operation that unblocks.
 *
 * This function *must* be called from within an `async` function and as part of
 * an `await` expression if the return value is needed.
 *
 * When `select` is completed and its process unblocks, its `await` expression
 * evaluates to an object of two properties. The `value` property becomes
 * exactly what would have been returned by the equivalent `await put` or `await
 * take` operation: a boolean in the case of a put, or the taken value in the
 * case of a take. The `channel` property is set to the channel where the
 * operation actually took place. This will be equivalent to the channel in the
 * `operations` array which completed first, allowing the process to unblock.
 *
 * If there is more than one operation already available to complete when the
 * call to `select` is made, the operation with the highest priority will be the
 * one to complete. Regularly, priority is non-deterministic (i.e., it's set
 * randomly). However, if the options object has a `priority` value set to
 * `true`, priority will be assigned in the order of the operations in the
 * supplied array.
 *
 * If all of the operations must block (i.e., there are no pending puts for take
 * operations, or takes for put operations), a default value may be returned.
 * This is only done if there is a `default` property in the options object, and
 * the value of that property becomes the value returned by `await select`. The
 * channel is set to the special value
 * `{@link module:chanko~Chanko.DEFAULT|DEFAULT}`.
 *
 * @memberof module:chanko~Chanko
 * @param {object[]} operations A collection of elements that correspond to recv
 *     and send operations. A recv operation is signified by an element that is
 *     a channel (which is the channel to be taken from). A send operation is
 *     specified by an element that is itself a two-element array, which has a
 *     channel followed by a value (which is the channel and value to be sent).
 * @param {object} [options={}] An optional object which can change the behavior
 *     of `select` through two properties.
 * @param {boolean} [options.priority=false] If `true`, then the priority of
 *     operations to complete when more than one is immediately available is a
 *     priority according to position within the operations array (earlier
 *     positions have the higher priority). If `false` or not present, the
 *     priorty of operation completion is random.
 * @param {*} [options.default] If set and all of the operations initially
 *     block, the `select` call completes immediately with the value of this
 *     option (the channel will be
 *     `{@link module:chanko~Chanko.DEFAULT|DEFAULT})`. If not set, the `select`
 *     call will block until one of the operations completes and that value and
 *     channel will be the ones returned.
 * @return {Promise<module:chanko/channel.SelectResult>} A promise that will
 *     resolve to an object of two properties: `value` will contain the value
 *     that would have been returned by the corresponding
 *     `{@link module:chanko~Chanko.send|send}` or
 *     `{@link module:chanko~Chanko.recv|recv}` operation; and `channel` will be
 *     a reference to the channel that completed the operation to allow `select`
 *     to unblock.
 */


function select(ops, options = {}) {
  return new Promise(resolve => {
    selectAsync(ops, resolve, options);
  });
}
/**
 * A convenience function to read the value out of a select result. This
 * function is not necessary - after all, it's absolutely as correct to simply
 * use `result.value` instead of `value(result)`, but it's provided for
 * consistency with the rest of the function-centric API.
 *
 * @memberof module:chanko~Chanko
 * @param {module:chanko/channel.SelectResult} result The result coming from a
 *     select operation.
 * @return {*} The value provided by the select operation.
 */


function value(result) {
  return result.value;
}
/**
 * A convenience function to read the channel out of a select result. This
 * function is not necessary - after all, it's absolutely as correct to simply
 * use `result.channel` instead of `channel(result)`, but it's provided for
 * consistency with the rest of the function-centric API.
 *
 * @memberof module:chanko~Chanko
 * @param {module:chanko/channel.SelectResult} result The result coming from a
 *     select operation.
 * @return {module:chanko/channel.Channel} The channel upon which the select
 *     operation completed.
 */


function channel(result) {
  return result.channel;
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

/**
 * This is the place where the new JS tasks are actually created. A queue is
 * maintained for them, and as each batch of tasks are completed, the next ones
 * run. As each process runs, it adds tasks to be run to the queue, which are
 * each run in their own JS task.
 *
 * The function that spawns the new JS task depends on environment. The
 * `setImmediate` function is preferred as it's the fastest, not waiting for
 * event queues to empty before spawning the new process. However, it is not JS
 * standard and currently only works in IE and Node. If `setImmediate` isn't
 * available, an attempt is made to use `MessageChannel`'s `onMessage` is tried
 * next. If that is also not available, then `setTimeout` with `0` delay is
 * used, which is available everywhere but which is the least performant of all
 * of the solutions.
 *
 * There are other possibilities for creating processes, but they were rejected
 * as obsolete (`process.nextTick` and `onreadystatechange`) or unnecessary
 * (`window.postMessage`, which works like `MessageChannel` but doesn't work in
 * Web Workers).
 *
 * It is notable and important that we act as good citizens here. This
 * dispatcher is capable of taking control of the JavaScript engine until
 * thousands, millions, or more tasks are handled. But that could cause the
 * system event loop to have to wait an unacceptable amount of time. So we limit
 * ourselves to a batch of tasks at a time, and if there are still more to be
 * run, we let the event loop run before that next batch is processed.
 *
 * The dispatcher is **global**. There is a single instance that runs for all
 * channels and processes. This is the only element of the system that works
 * like this.
 *
 * @module chanko/dispatcher
 * @see module:chanko~Chanko.config
 */

const queue = Object(modules_queue__WEBPACK_IMPORTED_MODULE_0__["queue"])();
/**
 * The dispatch method option indicating that `setImmediate` should be used to
 * dispatch tasks.
 *
 * This is the default option. For environments that don't support
 * `setImmediate`, this falls back to
 * `{@link module:chanko~Chanko.MESSAGE_CHANNEL|MESSAGE_CHANNEL}`.
 *
 * @memberof module:chanko~Chanko
 * @type {Symbol}
 * @see {@link module:chanko~Chanko.config|config}
 */

const SET_IMMEDIATE = Symbol("SET_IMMEDIATE");
/**
 * The dispatch method option indicating that a `MessageChannel` should be used
 * to dispatch tasks.
 *
 * For environments that don't support `MessageChannel`, this falls back to
 * `{@link module:chanko~Chanko.SET_TIMEOUT|SET_TIMEOUT}`.
 *
 * @memberof module:chanko~Chanko
 * @type {Symbol}
 * @see {@link module:chanko~Chanko.config|config}
 */

const MESSAGE_CHANNEL = Symbol("MESSAGE_CHANNEL");
/**
 * The dispatch method option indicating that `setTimeout` should be used to
 * dispatch tasks.
 *
 * This method is always available, but it's also always less efficient than any
 * other method, so it should be used as a last resort.
 *
 * @memberof module:chanko~Chanko
 * @type {Symbol}
 * @see  {@link module:chanko~Chanko.config|config}
 */

const SET_TIMEOUT = Symbol("SET_TIMEOUT");
const options = {
  batchSize: 1024,
  dispatchMethod: SET_IMMEDIATE
};
let dispatcher = createDispatcher();
let running = false;
let queued = true;
/**
 * Creates and returns a function that can be used to dispatch tasks. The
 * function that is created depends on the currently selected `dispatchMethod`
 * that can be set with `{@link module:chanko~Chanko.config|config}`.
 *
 * @return A dispatcher function using the currently selected dispatch method.
 * @private
 */

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
/**
 * Calculates the actual dispatch method based on the current dispatch method
 * setting and environmental availability.
 *
 * The dispatch method is stored raw, so this function is necessary to take
 * environment into account. For example, if we're running in a modern browser
 * (which does not have `setImmediate`),
 * `{@link module:chanko~Chanko.SET_IMMEDIATE|SET_IMMEDIATE}` can still be
 * recorded as the dispatch method, but this function will return
 * `{@link module:chanko~Chanko.MESSAGE_CHANNEL|MESSAGE_CHANNEL}`.
 *
 * @return {Symbol} The dispatch method to use based on setting and environment.
 * @private
 */


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
/**
 * The heart of the dispatch process, this is the function run by the dispatch
 * function in order to actually run queued tasks.
 *
 * @private
 */


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
/**
 * Creates and assigns the global dispatch function based on dispatch method
 * setting and environmental availability.
 *
 * @private
 */


function setDispatcher() {
  dispatcher = createDispatcher();
}
/**
 * @typedef {object} DispatcherConfig
 * @property {number} batchSize The maximum number of tasks that the dispatcher
 *     will run in a single batch.
 * @property {Symbol} dispatchMethod The method used to dispatch a process into
 *     a separate line of execution.
 */

/**
 * Sets one or more of the dispatcher configuration options.
 *
 * This is advanced setting for the dispatcher that is responsible for queueing
 * up channel operations and processes. It is likely that this function will
 * never need to be called in normal operation.
 *
 * If any recognized options are specified in the options object passed to
 * `config`, then the option is set to the value sent in. Properties that aren't
 * any of these options are ignored, and any of these options that do not appear
 * in the passed object are left with their current values.
 *
 * @memberof module:chanko~Chanko
 * @param {Object} opts A mapping of options to their new values. Extra values
 *     (properties that are not options) are ignored.
 * @param {number} [opts.batchSize] The maximum number of tasks that the
 *     dispatcher will run in a single batch (initially, this is 1024). If the
 *     number of pending tasks exceeds this, the remaining are not discarded.
 *     They're simply run as part of another batch after the current batch
 *     completes.
 * @param {Symbol} [opts.dispatchMethod] The method used to dispatch a process
 *     into a separate line of execution. Possible values are
 *     `{@link module:chanko~Chanko.SET_IMMEDIATE|SET_IMMEDIATE}`,
 *     `{@link module:chanko~Chanko.MESSAGE_CHANNEL|MESSAGE_CHANNEL}`, or
 *     `{@link module:chanko~Chanko.SET_TIMEOUT|SET_TIMEOUT}`, with the initial
 *     being `{@link module:chanko~Chanko.SET_IMMEDIATE|SET_IMMEDIATE}`. If a
 *     method is set but is not available in that environment, then it will
 *     silently fall back to the next method that is available.
 * @return {module:chanko/dispatcher~DispatcherConfig} The configuration
 *     settings for the dispatcher after any new values have been set.
 */


function config(opts = {}) {
  for (const key in options) {
    if (key in opts) {
      options[key] = opts[key];

      if (key === "dispatchMethod") {
        setDispatcher();
      }
    }
  }

  return Object.assign({}, options);
}
/**
 * Queues a task to be run and starts the dispatch process.
 *
 * @param {function} task A task to be queued and run the next time a batch of
 *     tasks is run.
 * @private
 */


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
/*! exports provided: sleep, go, join */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sleep", function() { return sleep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "go", function() { return go; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "join", function() { return join; });
/* harmony import */ var modules_channel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! modules/channel */ "./src/modules/channel/index.js");
/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

/**
 * Provides small utility functions to make it easier to interact with async
 * functions as processes.
 *
 * @module chanko/process
 * @private
 */

/**
 * Blocks the process for the specified time (in milliseconds) and then unblocks
 * it.
 *
 * This implements a delay, but one that's superior to other kinds of delays
 * (`setTimeout`, etc.) because it blocks the process and allows the dispatcher
 * to allow other processes to run while this one waits. The default delay is 0,
 * which will release the process to allow others to run and then immediately
 * re-queue it.
 *
 * This function *must* be called from within an `async` function and as part of
 * an `await` expression.
 *
 * When this function completes and its process unblocks, the `await` expression
 * doesn't take on any meaningful value. The purpose of this function is simply
 * to delay, not to communicate any data.
 *
 * @memberof module:chanko~Chanko
 * @param {number} [delay=0] the number of milliseconds that the process will
 *     block for. At the end of that time, the process is again eligible to be
 *     run by the dispatcher. If this is missing or set to `0`, the process will
 *     cede execution to the next one but immediately requeue itself to be run
 *     again.
 * @return {Promise} A promise that resolves with no meaningful result when the
 *     time has elapsed.
 */

function sleep(delay = 0) {
  return new Promise(resolve => {
    const ch = Object(modules_channel__WEBPACK_IMPORTED_MODULE_0__["timedChan"])(delay);
    Object(modules_channel__WEBPACK_IMPORTED_MODULE_0__["recvAsync"])(ch, resolve);
  });
}
/**
 * Invokes an async function acting as a process.
 *
 * This is purely a convenience function, driven by the fact that it's necessary
 * to use an IIFE to invoke an anonymous async function, and that's not very
 * aesthetically pleasing. It does no more than invoke the passed function, but
 * that at least releases us from the need to put the empty parentheses after
 * the function definition.
 *
 * A named async function can simply be invoked (without being an IIFE) and
 * doesn't benefit from this convenience.
 *
 * Anonymous process without `go`:
 * ```
 * (async () => {
 *   ... do some process stuff here ...
 * })();
 * ```
 * Anonymous process with `go`:
 * ```
 * go(async () => {
 *   ... do some process stuff here ...
 * });
 * ```
 *
 * @memberof module:chanko~Chanko
 * @param {function} fn The async function being used as a process.
 * @param {...*} args Arguments that are sent to the async function when it's
 *     invoked.
 * @return {Promise} The promise returned by the async function.
 */


function go(fn, ...args) {
  return fn(...args);
}
/**
 * Joins all of the provided processes into a single process, returning a
 * promise that wraps all of the individual processes' promises. Putting this in
 * an `await` statement will block until all of the processes complete.
 * 
 * @memberof module:chanko~Chanko
 * @param {...function} fns Any number of async functions whose resolutions are
 *     being waited for.
 * @return {Promise} A promise that resolves when all of the processes promises
 *     resolve.
 */


function join(...fns) {
  return Promise.all(fns);
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
 * @module chanko/protocol
 * @private
 */

/**
 * The mapping of protocol names to their respective property key names. The
 * values of this map will depend on whether symbols are available.
 *
 * @typedef {object} protocolMap
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
 * @type {module:chanko/protocols~protocolMap}
 * @private
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
 * @private
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
 * @private
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
 * @memberof module:chanko~Chanko
 */
const EMPTY = Symbol("EMPTY");
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

const QUEUE = Symbol("QUEUE");
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
 *     counted.
 * @return {number} The number of items in the queue.
 */


function count(queue) {
  return queue.store.length - queue.pointer;
}
/**
 * Determines whether a queue is empty.
 *
 * @param {module:chanko/queue~Queue} queue The queue being checked for
 *     emptiness.
 * @return {boolean} Either `true` if the queue is empty or `false` if it is
 *     not.
 */


function isEmpty(queue) {
  return queue.store.length === 0;
}
/**
 * Adds an item to a queue.
 *
 * @param {module:chanko/queue~Queue} queue The queue which is having an item
 *     added to it.
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
 * r    emoved.
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
 *     peeked at.
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
 *     element remains in the queue.
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGFua28vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2NoYW5rby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jaGFua28vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9Bc3luY0dlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly9jaGFua28vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9Bd2FpdFZhbHVlLmpzIiwid2VicGFjazovL2NoYW5rby8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2F3YWl0QXN5bmNHZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vY2hhbmtvLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvd3JhcEFzeW5jR2VuZXJhdG9yLmpzIiwid2VicGFjazovL2NoYW5rby8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vY2hhbmtvLy4vbm9kZV9tb2R1bGVzL3NldGltbWVkaWF0ZS9zZXRJbW1lZGlhdGUuanMiLCJ3ZWJwYWNrOi8vY2hhbmtvLy4vbm9kZV9tb2R1bGVzL3RpbWVycy1icm93c2VyaWZ5L21haW4uanMiLCJ3ZWJwYWNrOi8vY2hhbmtvLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly9jaGFua28vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2hhbmtvLy4vc3JjL21vZHVsZXMvYnVmZmVyLmpzIiwid2VicGFjazovL2NoYW5rby8uL3NyYy9tb2R1bGVzL2NoYW5uZWwvaGFuZGxlci5qcyIsIndlYnBhY2s6Ly9jaGFua28vLi9zcmMvbW9kdWxlcy9jaGFubmVsL2luZGV4LmpzIiwid2VicGFjazovL2NoYW5rby8uL3NyYy9tb2R1bGVzL2NoYW5uZWwvc2VsZWN0LmpzIiwid2VicGFjazovL2NoYW5rby8uL3NyYy9tb2R1bGVzL2Rpc3BhdGNoZXIuanMiLCJ3ZWJwYWNrOi8vY2hhbmtvLy4vc3JjL21vZHVsZXMvcHJvY2Vzcy5qcyIsIndlYnBhY2s6Ly9jaGFua28vLi9zcmMvbW9kdWxlcy9wcm90b2NvbC5qcyIsIndlYnBhY2s6Ly9jaGFua28vLi9zcmMvbW9kdWxlcy9xdWV1ZS5qcyJdLCJuYW1lcyI6WyJCVUZGRVIiLCJTeW1ib2wiLCJGSVhFRCIsIkRST1BQSU5HIiwiU0xJRElORyIsImlzQnVmZmVyIiwib2JqIiwiZml4ZWQiLCJzaXplIiwiT2JqZWN0IiwiY3JlYXRlIiwicXVldWUiLCJ2YWx1ZSIsInEiLCJkcm9wcGluZyIsInNsaWRpbmciLCJidWZmZXIiLCJjb3VudCIsInFDb3VudCIsImlzRnVsbCIsImFkZCIsIml0ZW1zIiwiaXRlbSIsImVucXVldWUiLCJkZXF1ZXVlIiwicmVtb3ZlIiwiTUFYX0RJUlRZIiwiTUFYX1FVRVVFRCIsIkNMT1NFRCIsIkJPWCIsImlzQm94IiwiaXNSZWR1Y2VkIiwicCIsInJlZHVjZWQiLCJib3giLCJ3cml0YWJsZSIsInNlbmRCb3giLCJoYW5kbGVyIiwiY2hhbm5lbCIsInhmb3JtIiwiaXNUaW1lZCIsIm1heERpcnR5IiwibWF4UXVldWVkIiwicmVjdnMiLCJzZW5kcyIsImRpcnR5UmVjdnMiLCJkaXJ0eVNlbmRzIiwiY2xvc2VkIiwiaXNCdWZmZXJlZCIsImhhbmRsZVNlbmQiLCJFcnJvciIsImNvbW1pdCIsInJlY2VpdmVyIiwiY2FsbGJhY2siLCJkb25lIiwic3RlcCIsIkVNUFRZIiwiYWN0aXZlIiwidmFsIiwiZGlzcGF0Y2giLCJjbG9zZSIsImZpbHRlciIsInNlbmRlciIsImhhbmRsZVJlY3YiLCJzZW5kSGFuZGxlciIsInJlc3VsdCIsIkRFRkFVTFRfSEFORExFUiIsIm9wSGFuZGxlciIsImZuIiwiaGFuZGxlRXhjZXB0aW9uIiwiZXgiLCJoYW5kbGVyVHJhbnNkdWNlciIsImlucHV0IiwiYnVmZmVyUmVkdWNlciIsImluaXQiLCJwYXJzZUFyZ3MiLCJvcHRpb25zIiwiZGVmYXVsdE9wdGlvbnMiLCJidWYiLCJvcHRzIiwidHJhbnNkdWNlciIsInRpbWVyIiwiYXNzaWduIiwiY2hhbiIsInhmIiwiY2giLCJjaGFuSW1wbCIsIml0ZXJhdG9yIiwicmVjdiIsImFzeW5jSXRlcmF0b3IiLCJzZXRUaW1lb3V0IiwiY2xvc2VJbXBsIiwidGltZWRDaGFuIiwiZGVsYXkiLCJ0cmFuc0NoYW4iLCJpc0Nsb3NlZCIsInNlbmRBc3luYyIsInJlY3ZBc3luYyIsInNlbmQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlY3ZPclRocm93IiwicmVqZWN0IiwicHJvdG90eXBlIiwiaXNQcm90b3R5cGVPZiIsImNhbGwiLCJERUZBVUxUIiwic2VsZWN0SGFuZGxlciIsImdldCIsInJhbmRvbUFycmF5IiwidXBwZXIiLCJhcnJheSIsImsiLCJwdXNoIiwiaiIsImkiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ0ZW1wIiwic2VsZWN0UmVzdWx0Iiwic2VsZWN0QXN5bmMiLCJvcHMiLCJsZW5ndGgiLCJwcmlvcml0eSIsImluZGljZXMiLCJjcmVhdGVTZWxlY3RIYW5kbGVyIiwib3AiLCJBcnJheSIsImlzQXJyYXkiLCJoYXNPd25Qcm9wZXJ0eSIsImRlZmF1bHQiLCJzZWxlY3QiLCJTRVRfSU1NRURJQVRFIiwiTUVTU0FHRV9DSEFOTkVMIiwiU0VUX1RJTUVPVVQiLCJiYXRjaFNpemUiLCJkaXNwYXRjaE1ldGhvZCIsImRpc3BhdGNoZXIiLCJjcmVhdGVEaXNwYXRjaGVyIiwicnVubmluZyIsInF1ZXVlZCIsImNhbGNEaXNwYXRjaE1ldGhvZCIsInNldEltbWVkaWF0ZSIsInByb2Nlc3NUYXNrcyIsIk1lc3NhZ2VDaGFubmVsIiwicG9ydDEiLCJvbm1lc3NhZ2UiLCJwb3J0MiIsInBvc3RNZXNzYWdlIiwidGFzayIsInNldERpc3BhdGNoZXIiLCJjb25maWciLCJrZXkiLCJzbGVlcCIsImdvIiwiYXJncyIsImpvaW4iLCJmbnMiLCJhbGwiLCJwcm90b2NvbHMiLCJmb3IiLCJRVUVVRSIsImlzUXVldWUiLCJzdG9yZSIsInBvaW50ZXIiLCJpc0VtcHR5Iiwic2xpY2UiLCJwZWVrIiwicHJlZGljYXRlIiwiZW5kIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLGlCQUFpQixtQkFBTyxDQUFDLHlFQUFjOztBQUV2QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGdDOzs7Ozs7Ozs7OztBQ25HQTtBQUNBO0FBQ0E7O0FBRUEsNkI7Ozs7Ozs7Ozs7O0FDSkEsaUJBQWlCLG1CQUFPLENBQUMseUVBQWM7O0FBRXZDO0FBQ0E7QUFDQTs7QUFFQSxzQzs7Ozs7Ozs7Ozs7QUNOQSxxQkFBcUIsbUJBQU8sQ0FBQyxpRkFBa0I7O0FBRS9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUM7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVTs7Ozs7Ozs7Ozs7O0FDdkx0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsaUJBQWlCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwQ0FBMEMsc0JBQXNCLEVBQUU7QUFDbEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7QUN6TEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLG1CQUFPLENBQUMsaUVBQWM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDOURBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFD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Q25CQyxhQUFPLENBQUNaLEtBQUQsRUFBUVcsSUFBUixDQUFQO0FBQ0Q7QUFDRjtBQUNGIiwiZmlsZSI6ImNoYW5rby5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImNoYW5rb1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJjaGFua29cIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsInZhciBBd2FpdFZhbHVlID0gcmVxdWlyZShcIi4vQXdhaXRWYWx1ZVwiKTtcblxuZnVuY3Rpb24gQXN5bmNHZW5lcmF0b3IoZ2VuKSB7XG4gIHZhciBmcm9udCwgYmFjaztcblxuICBmdW5jdGlvbiBzZW5kKGtleSwgYXJnKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZXF1ZXN0ID0ge1xuICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgYXJnOiBhcmcsXG4gICAgICAgIHJlc29sdmU6IHJlc29sdmUsXG4gICAgICAgIHJlamVjdDogcmVqZWN0LFxuICAgICAgICBuZXh0OiBudWxsXG4gICAgICB9O1xuXG4gICAgICBpZiAoYmFjaykge1xuICAgICAgICBiYWNrID0gYmFjay5uZXh0ID0gcmVxdWVzdDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZyb250ID0gYmFjayA9IHJlcXVlc3Q7XG4gICAgICAgIHJlc3VtZShrZXksIGFyZyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXN1bWUoa2V5LCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgdmFyIHJlc3VsdCA9IGdlbltrZXldKGFyZyk7XG4gICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICB2YXIgd3JhcHBlZEF3YWl0ID0gdmFsdWUgaW5zdGFuY2VvZiBBd2FpdFZhbHVlO1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKHdyYXBwZWRBd2FpdCA/IHZhbHVlLndyYXBwZWQgOiB2YWx1ZSkudGhlbihmdW5jdGlvbiAoYXJnKSB7XG4gICAgICAgIGlmICh3cmFwcGVkQXdhaXQpIHtcbiAgICAgICAgICByZXN1bWUoa2V5ID09PSBcInJldHVyblwiID8gXCJyZXR1cm5cIiA6IFwibmV4dFwiLCBhcmcpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldHRsZShyZXN1bHQuZG9uZSA/IFwicmV0dXJuXCIgOiBcIm5vcm1hbFwiLCBhcmcpO1xuICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICByZXN1bWUoXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBzZXR0bGUoXCJ0aHJvd1wiLCBlcnIpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNldHRsZSh0eXBlLCB2YWx1ZSkge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBcInJldHVyblwiOlxuICAgICAgICBmcm9udC5yZXNvbHZlKHtcbiAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgZG9uZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgXCJ0aHJvd1wiOlxuICAgICAgICBmcm9udC5yZWplY3QodmFsdWUpO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgZnJvbnQucmVzb2x2ZSh7XG4gICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgIGRvbmU6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBmcm9udCA9IGZyb250Lm5leHQ7XG5cbiAgICBpZiAoZnJvbnQpIHtcbiAgICAgIHJlc3VtZShmcm9udC5rZXksIGZyb250LmFyZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJhY2sgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHRoaXMuX2ludm9rZSA9IHNlbmQ7XG5cbiAgaWYgKHR5cGVvZiBnZW5bXCJyZXR1cm5cIl0gIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHRoaXNbXCJyZXR1cm5cIl0gPSB1bmRlZmluZWQ7XG4gIH1cbn1cblxuaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuYXN5bmNJdGVyYXRvcikge1xuICBBc3luY0dlbmVyYXRvci5wcm90b3R5cGVbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xufVxuXG5Bc3luY0dlbmVyYXRvci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uIChhcmcpIHtcbiAgcmV0dXJuIHRoaXMuX2ludm9rZShcIm5leHRcIiwgYXJnKTtcbn07XG5cbkFzeW5jR2VuZXJhdG9yLnByb3RvdHlwZVtcInRocm93XCJdID0gZnVuY3Rpb24gKGFyZykge1xuICByZXR1cm4gdGhpcy5faW52b2tlKFwidGhyb3dcIiwgYXJnKTtcbn07XG5cbkFzeW5jR2VuZXJhdG9yLnByb3RvdHlwZVtcInJldHVyblwiXSA9IGZ1bmN0aW9uIChhcmcpIHtcbiAgcmV0dXJuIHRoaXMuX2ludm9rZShcInJldHVyblwiLCBhcmcpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBBc3luY0dlbmVyYXRvcjsiLCJmdW5jdGlvbiBfQXdhaXRWYWx1ZSh2YWx1ZSkge1xuICB0aGlzLndyYXBwZWQgPSB2YWx1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfQXdhaXRWYWx1ZTsiLCJ2YXIgQXdhaXRWYWx1ZSA9IHJlcXVpcmUoXCIuL0F3YWl0VmFsdWVcIik7XG5cbmZ1bmN0aW9uIF9hd2FpdEFzeW5jR2VuZXJhdG9yKHZhbHVlKSB7XG4gIHJldHVybiBuZXcgQXdhaXRWYWx1ZSh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2F3YWl0QXN5bmNHZW5lcmF0b3I7IiwidmFyIEFzeW5jR2VuZXJhdG9yID0gcmVxdWlyZShcIi4vQXN5bmNHZW5lcmF0b3JcIik7XG5cbmZ1bmN0aW9uIF93cmFwQXN5bmNHZW5lcmF0b3IoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbmV3IEFzeW5jR2VuZXJhdG9yKGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF93cmFwQXN5bmNHZW5lcmF0b3I7IiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsIihmdW5jdGlvbiAoZ2xvYmFsLCB1bmRlZmluZWQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIGlmIChnbG9iYWwuc2V0SW1tZWRpYXRlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgbmV4dEhhbmRsZSA9IDE7IC8vIFNwZWMgc2F5cyBncmVhdGVyIHRoYW4gemVyb1xuICAgIHZhciB0YXNrc0J5SGFuZGxlID0ge307XG4gICAgdmFyIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IGZhbHNlO1xuICAgIHZhciBkb2MgPSBnbG9iYWwuZG9jdW1lbnQ7XG4gICAgdmFyIHJlZ2lzdGVySW1tZWRpYXRlO1xuXG4gICAgZnVuY3Rpb24gc2V0SW1tZWRpYXRlKGNhbGxiYWNrKSB7XG4gICAgICAvLyBDYWxsYmFjayBjYW4gZWl0aGVyIGJlIGEgZnVuY3Rpb24gb3IgYSBzdHJpbmdcbiAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBjYWxsYmFjayA9IG5ldyBGdW5jdGlvbihcIlwiICsgY2FsbGJhY2spO1xuICAgICAgfVxuICAgICAgLy8gQ29weSBmdW5jdGlvbiBhcmd1bWVudHNcbiAgICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaSArIDFdO1xuICAgICAgfVxuICAgICAgLy8gU3RvcmUgYW5kIHJlZ2lzdGVyIHRoZSB0YXNrXG4gICAgICB2YXIgdGFzayA9IHsgY2FsbGJhY2s6IGNhbGxiYWNrLCBhcmdzOiBhcmdzIH07XG4gICAgICB0YXNrc0J5SGFuZGxlW25leHRIYW5kbGVdID0gdGFzaztcbiAgICAgIHJlZ2lzdGVySW1tZWRpYXRlKG5leHRIYW5kbGUpO1xuICAgICAgcmV0dXJuIG5leHRIYW5kbGUrKztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhckltbWVkaWF0ZShoYW5kbGUpIHtcbiAgICAgICAgZGVsZXRlIHRhc2tzQnlIYW5kbGVbaGFuZGxlXTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBydW4odGFzaykge1xuICAgICAgICB2YXIgY2FsbGJhY2sgPSB0YXNrLmNhbGxiYWNrO1xuICAgICAgICB2YXIgYXJncyA9IHRhc2suYXJncztcbiAgICAgICAgc3dpdGNoIChhcmdzLmxlbmd0aCkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIGNhbGxiYWNrKGFyZ3NbMF0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIGNhbGxiYWNrKGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIGNhbGxiYWNrKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBjYWxsYmFjay5hcHBseSh1bmRlZmluZWQsIGFyZ3MpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBydW5JZlByZXNlbnQoaGFuZGxlKSB7XG4gICAgICAgIC8vIEZyb20gdGhlIHNwZWM6IFwiV2FpdCB1bnRpbCBhbnkgaW52b2NhdGlvbnMgb2YgdGhpcyBhbGdvcml0aG0gc3RhcnRlZCBiZWZvcmUgdGhpcyBvbmUgaGF2ZSBjb21wbGV0ZWQuXCJcbiAgICAgICAgLy8gU28gaWYgd2UncmUgY3VycmVudGx5IHJ1bm5pbmcgYSB0YXNrLCB3ZSdsbCBuZWVkIHRvIGRlbGF5IHRoaXMgaW52b2NhdGlvbi5cbiAgICAgICAgaWYgKGN1cnJlbnRseVJ1bm5pbmdBVGFzaykge1xuICAgICAgICAgICAgLy8gRGVsYXkgYnkgZG9pbmcgYSBzZXRUaW1lb3V0LiBzZXRJbW1lZGlhdGUgd2FzIHRyaWVkIGluc3RlYWQsIGJ1dCBpbiBGaXJlZm94IDcgaXQgZ2VuZXJhdGVkIGFcbiAgICAgICAgICAgIC8vIFwidG9vIG11Y2ggcmVjdXJzaW9uXCIgZXJyb3IuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KHJ1bklmUHJlc2VudCwgMCwgaGFuZGxlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciB0YXNrID0gdGFza3NCeUhhbmRsZVtoYW5kbGVdO1xuICAgICAgICAgICAgaWYgKHRhc2spIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50bHlSdW5uaW5nQVRhc2sgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJ1bih0YXNrKTtcbiAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckltbWVkaWF0ZShoYW5kbGUpO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50bHlSdW5uaW5nQVRhc2sgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsTmV4dFRpY2tJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIHByb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24gKCkgeyBydW5JZlByZXNlbnQoaGFuZGxlKTsgfSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FuVXNlUG9zdE1lc3NhZ2UoKSB7XG4gICAgICAgIC8vIFRoZSB0ZXN0IGFnYWluc3QgYGltcG9ydFNjcmlwdHNgIHByZXZlbnRzIHRoaXMgaW1wbGVtZW50YXRpb24gZnJvbSBiZWluZyBpbnN0YWxsZWQgaW5zaWRlIGEgd2ViIHdvcmtlcixcbiAgICAgICAgLy8gd2hlcmUgYGdsb2JhbC5wb3N0TWVzc2FnZWAgbWVhbnMgc29tZXRoaW5nIGNvbXBsZXRlbHkgZGlmZmVyZW50IGFuZCBjYW4ndCBiZSB1c2VkIGZvciB0aGlzIHB1cnBvc2UuXG4gICAgICAgIGlmIChnbG9iYWwucG9zdE1lc3NhZ2UgJiYgIWdsb2JhbC5pbXBvcnRTY3JpcHRzKSB7XG4gICAgICAgICAgICB2YXIgcG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cyA9IHRydWU7XG4gICAgICAgICAgICB2YXIgb2xkT25NZXNzYWdlID0gZ2xvYmFsLm9ubWVzc2FnZTtcbiAgICAgICAgICAgIGdsb2JhbC5vbm1lc3NhZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzID0gZmFsc2U7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKFwiXCIsIFwiKlwiKTtcbiAgICAgICAgICAgIGdsb2JhbC5vbm1lc3NhZ2UgPSBvbGRPbk1lc3NhZ2U7XG4gICAgICAgICAgICByZXR1cm4gcG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxQb3N0TWVzc2FnZUltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICAvLyBJbnN0YWxscyBhbiBldmVudCBoYW5kbGVyIG9uIGBnbG9iYWxgIGZvciB0aGUgYG1lc3NhZ2VgIGV2ZW50OiBzZWVcbiAgICAgICAgLy8gKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9ET00vd2luZG93LnBvc3RNZXNzYWdlXG4gICAgICAgIC8vICogaHR0cDovL3d3dy53aGF0d2cub3JnL3NwZWNzL3dlYi1hcHBzL2N1cnJlbnQtd29yay9tdWx0aXBhZ2UvY29tbXMuaHRtbCNjcm9zc0RvY3VtZW50TWVzc2FnZXNcblxuICAgICAgICB2YXIgbWVzc2FnZVByZWZpeCA9IFwic2V0SW1tZWRpYXRlJFwiICsgTWF0aC5yYW5kb20oKSArIFwiJFwiO1xuICAgICAgICB2YXIgb25HbG9iYWxNZXNzYWdlID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChldmVudC5zb3VyY2UgPT09IGdsb2JhbCAmJlxuICAgICAgICAgICAgICAgIHR5cGVvZiBldmVudC5kYXRhID09PSBcInN0cmluZ1wiICYmXG4gICAgICAgICAgICAgICAgZXZlbnQuZGF0YS5pbmRleE9mKG1lc3NhZ2VQcmVmaXgpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcnVuSWZQcmVzZW50KCtldmVudC5kYXRhLnNsaWNlKG1lc3NhZ2VQcmVmaXgubGVuZ3RoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICAgICAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgb25HbG9iYWxNZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBnbG9iYWwuYXR0YWNoRXZlbnQoXCJvbm1lc3NhZ2VcIiwgb25HbG9iYWxNZXNzYWdlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBnbG9iYWwucG9zdE1lc3NhZ2UobWVzc2FnZVByZWZpeCArIGhhbmRsZSwgXCIqXCIpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxNZXNzYWdlQ2hhbm5lbEltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICB2YXIgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICAgICAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgaGFuZGxlID0gZXZlbnQuZGF0YTtcbiAgICAgICAgICAgIHJ1bklmUHJlc2VudChoYW5kbGUpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBjaGFubmVsLnBvcnQyLnBvc3RNZXNzYWdlKGhhbmRsZSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbFJlYWR5U3RhdGVDaGFuZ2VJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgdmFyIGh0bWwgPSBkb2MuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgLy8gQ3JlYXRlIGEgPHNjcmlwdD4gZWxlbWVudDsgaXRzIHJlYWR5c3RhdGVjaGFuZ2UgZXZlbnQgd2lsbCBiZSBmaXJlZCBhc3luY2hyb25vdXNseSBvbmNlIGl0IGlzIGluc2VydGVkXG4gICAgICAgICAgICAvLyBpbnRvIHRoZSBkb2N1bWVudC4gRG8gc28sIHRodXMgcXVldWluZyB1cCB0aGUgdGFzay4gUmVtZW1iZXIgdG8gY2xlYW4gdXAgb25jZSBpdCdzIGJlZW4gY2FsbGVkLlxuICAgICAgICAgICAgdmFyIHNjcmlwdCA9IGRvYy5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICAgICAgICAgICAgc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBydW5JZlByZXNlbnQoaGFuZGxlKTtcbiAgICAgICAgICAgICAgICBzY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlID0gbnVsbDtcbiAgICAgICAgICAgICAgICBodG1sLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG4gICAgICAgICAgICAgICAgc2NyaXB0ID0gbnVsbDtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBodG1sLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbFNldFRpbWVvdXRJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQocnVuSWZQcmVzZW50LCAwLCBoYW5kbGUpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8vIElmIHN1cHBvcnRlZCwgd2Ugc2hvdWxkIGF0dGFjaCB0byB0aGUgcHJvdG90eXBlIG9mIGdsb2JhbCwgc2luY2UgdGhhdCBpcyB3aGVyZSBzZXRUaW1lb3V0IGV0IGFsLiBsaXZlLlxuICAgIHZhciBhdHRhY2hUbyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiAmJiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoZ2xvYmFsKTtcbiAgICBhdHRhY2hUbyA9IGF0dGFjaFRvICYmIGF0dGFjaFRvLnNldFRpbWVvdXQgPyBhdHRhY2hUbyA6IGdsb2JhbDtcblxuICAgIC8vIERvbid0IGdldCBmb29sZWQgYnkgZS5nLiBicm93c2VyaWZ5IGVudmlyb25tZW50cy5cbiAgICBpZiAoe30udG9TdHJpbmcuY2FsbChnbG9iYWwucHJvY2VzcykgPT09IFwiW29iamVjdCBwcm9jZXNzXVwiKSB7XG4gICAgICAgIC8vIEZvciBOb2RlLmpzIGJlZm9yZSAwLjlcbiAgICAgICAgaW5zdGFsbE5leHRUaWNrSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoY2FuVXNlUG9zdE1lc3NhZ2UoKSkge1xuICAgICAgICAvLyBGb3Igbm9uLUlFMTAgbW9kZXJuIGJyb3dzZXJzXG4gICAgICAgIGluc3RhbGxQb3N0TWVzc2FnZUltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGdsb2JhbC5NZXNzYWdlQ2hhbm5lbCkge1xuICAgICAgICAvLyBGb3Igd2ViIHdvcmtlcnMsIHdoZXJlIHN1cHBvcnRlZFxuICAgICAgICBpbnN0YWxsTWVzc2FnZUNoYW5uZWxJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChkb2MgJiYgXCJvbnJlYWR5c3RhdGVjaGFuZ2VcIiBpbiBkb2MuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKSkge1xuICAgICAgICAvLyBGb3IgSUUgNuKAkzhcbiAgICAgICAgaW5zdGFsbFJlYWR5U3RhdGVDaGFuZ2VJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gRm9yIG9sZGVyIGJyb3dzZXJzXG4gICAgICAgIGluc3RhbGxTZXRUaW1lb3V0SW1wbGVtZW50YXRpb24oKTtcbiAgICB9XG5cbiAgICBhdHRhY2hUby5zZXRJbW1lZGlhdGUgPSBzZXRJbW1lZGlhdGU7XG4gICAgYXR0YWNoVG8uY2xlYXJJbW1lZGlhdGUgPSBjbGVhckltbWVkaWF0ZTtcbn0odHlwZW9mIHNlbGYgPT09IFwidW5kZWZpbmVkXCIgPyB0eXBlb2YgZ2xvYmFsID09PSBcInVuZGVmaW5lZFwiID8gdGhpcyA6IGdsb2JhbCA6IHNlbGYpKTtcbiIsInZhciBzY29wZSA9ICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiICYmIGdsb2JhbCkgfHxcbiAgICAgICAgICAgICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzZWxmKSB8fFxuICAgICAgICAgICAgd2luZG93O1xudmFyIGFwcGx5ID0gRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5O1xuXG4vLyBET00gQVBJcywgZm9yIGNvbXBsZXRlbmVzc1xuXG5leHBvcnRzLnNldFRpbWVvdXQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBUaW1lb3V0KGFwcGx5LmNhbGwoc2V0VGltZW91dCwgc2NvcGUsIGFyZ3VtZW50cyksIGNsZWFyVGltZW91dCk7XG59O1xuZXhwb3J0cy5zZXRJbnRlcnZhbCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFRpbWVvdXQoYXBwbHkuY2FsbChzZXRJbnRlcnZhbCwgc2NvcGUsIGFyZ3VtZW50cyksIGNsZWFySW50ZXJ2YWwpO1xufTtcbmV4cG9ydHMuY2xlYXJUaW1lb3V0ID1cbmV4cG9ydHMuY2xlYXJJbnRlcnZhbCA9IGZ1bmN0aW9uKHRpbWVvdXQpIHtcbiAgaWYgKHRpbWVvdXQpIHtcbiAgICB0aW1lb3V0LmNsb3NlKCk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIFRpbWVvdXQoaWQsIGNsZWFyRm4pIHtcbiAgdGhpcy5faWQgPSBpZDtcbiAgdGhpcy5fY2xlYXJGbiA9IGNsZWFyRm47XG59XG5UaW1lb3V0LnByb3RvdHlwZS51bnJlZiA9IFRpbWVvdXQucHJvdG90eXBlLnJlZiA9IGZ1bmN0aW9uKCkge307XG5UaW1lb3V0LnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLl9jbGVhckZuLmNhbGwoc2NvcGUsIHRoaXMuX2lkKTtcbn07XG5cbi8vIERvZXMgbm90IHN0YXJ0IHRoZSB0aW1lLCBqdXN0IHNldHMgdXAgdGhlIG1lbWJlcnMgbmVlZGVkLlxuZXhwb3J0cy5lbnJvbGwgPSBmdW5jdGlvbihpdGVtLCBtc2Vjcykge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG4gIGl0ZW0uX2lkbGVUaW1lb3V0ID0gbXNlY3M7XG59O1xuXG5leHBvcnRzLnVuZW5yb2xsID0gZnVuY3Rpb24oaXRlbSkge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG4gIGl0ZW0uX2lkbGVUaW1lb3V0ID0gLTE7XG59O1xuXG5leHBvcnRzLl91bnJlZkFjdGl2ZSA9IGV4cG9ydHMuYWN0aXZlID0gZnVuY3Rpb24oaXRlbSkge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG5cbiAgdmFyIG1zZWNzID0gaXRlbS5faWRsZVRpbWVvdXQ7XG4gIGlmIChtc2VjcyA+PSAwKSB7XG4gICAgaXRlbS5faWRsZVRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gb25UaW1lb3V0KCkge1xuICAgICAgaWYgKGl0ZW0uX29uVGltZW91dClcbiAgICAgICAgaXRlbS5fb25UaW1lb3V0KCk7XG4gICAgfSwgbXNlY3MpO1xuICB9XG59O1xuXG4vLyBzZXRpbW1lZGlhdGUgYXR0YWNoZXMgaXRzZWxmIHRvIHRoZSBnbG9iYWwgb2JqZWN0XG5yZXF1aXJlKFwic2V0aW1tZWRpYXRlXCIpO1xuLy8gT24gc29tZSBleG90aWMgZW52aXJvbm1lbnRzLCBpdCdzIG5vdCBjbGVhciB3aGljaCBvYmplY3QgYHNldGltbWVkaWF0ZWAgd2FzXG4vLyBhYmxlIHRvIGluc3RhbGwgb250by4gIFNlYXJjaCBlYWNoIHBvc3NpYmlsaXR5IGluIHRoZSBzYW1lIG9yZGVyIGFzIHRoZVxuLy8gYHNldGltbWVkaWF0ZWAgbGlicmFyeS5cbmV4cG9ydHMuc2V0SW1tZWRpYXRlID0gKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmIHNlbGYuc2V0SW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBnbG9iYWwuc2V0SW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAodGhpcyAmJiB0aGlzLnNldEltbWVkaWF0ZSk7XG5leHBvcnRzLmNsZWFySW1tZWRpYXRlID0gKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmIHNlbGYuY2xlYXJJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgJiYgZ2xvYmFsLmNsZWFySW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzICYmIHRoaXMuY2xlYXJJbW1lZGlhdGUpO1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG5cbi8qKlxuICogQWxsIG9mIHRoZSBwdWJsaWMtZmFjaW5nIENoYW5rbyBmdW5jdGlvbnMgYXJlIGdhdGhlcmVkIGhlcmUgaW4gb25lIHBsYWNlIHRvXG4gKiBiZSBleHBvcnRlZCBhcyBhIHdob2xlLiBUaGlzIGlzIGEgY29tcGxldGVseSBmbGF0IGxpc3Qgb2YgZXhwb3J0cywgYXNcbiAqIGlubHVkaW5nIGFueSBvYmplY3QgbGl0ZXJhbHMgZm9yIGV4cG9ydCAod2hpY2ggd291bGQgYmUgbmF0dXJhbCBmb3IgYnVmZmVycyxcbiAqIGZvciBleGFtcGxlKSB3b3VsZCBrZWVwIHRyZWUtc2hha2luZyBmcm9tIHdvcmtpbmcgcmlnaHQuXG4gKlxuICogQG1vZHVsZSBjaGFua29cbiAqL1xuXG4vKipcbiAqIFRoZSBjb3JlIG5hbWVzcGFjZSB1bmRlciB3aGljaCBhbGwgb2YgdGhlIG1haW4gZnVuY3Rpb25zIHJlc2lkZSBpbiB0aGUgQVBJLlxuICogRXZlcnl0aGluZyBpbiB0aGlzIG5hbWVzcGFjZSBpcyBhY2Nlc3NpYmxlIGFzIGEgbWVtYmVyIG9mIHRoZSBtYWluIGBjaGFua29gXG4gKiBvYmplY3QgdGhhdCBpcyByZXF1aXJlZCwgaW1wb3J0ZWQsIG9yIGFjY2Vzc2VkIGFzIGEgZ2xvYmFsIG9iamVjdC5cbiAqXG4gKiBAbmFtZXNwYWNlIENoYW5rb1xuICovXG5leHBvcnQgeyBmaXhlZCwgZHJvcHBpbmcsIHNsaWRpbmcgfSBmcm9tIFwibW9kdWxlcy9idWZmZXJcIjtcbmV4cG9ydCB7XG4gIENMT1NFRCxcbiAgY2hhbixcbiAgdGltZWRDaGFuLFxuICB0cmFuc0NoYW4sXG4gIHNlbmQsXG4gIHJlY3YsXG4gIHNlbmRBc3luYyxcbiAgcmVjdkFzeW5jLFxuICByZWN2T3JUaHJvdyxcbiAgY2xvc2UsXG4gIGlzQ2xvc2VkLFxuICBpc0J1ZmZlcmVkLFxuICBpc1RpbWVkLFxuICBzZWxlY3QsXG4gIHNlbGVjdEFzeW5jLFxuICB2YWx1ZSxcbiAgY2hhbm5lbFxufSBmcm9tIFwibW9kdWxlcy9jaGFubmVsXCI7XG5leHBvcnQge1xuICBjb25maWcsXG4gIFNFVF9JTU1FRElBVEUsXG4gIE1FU1NBR0VfQ0hBTk5FTCxcbiAgU0VUX1RJTUVPVVRcbn0gZnJvbSBcIm1vZHVsZXMvZGlzcGF0Y2hlclwiO1xuZXhwb3J0IHsgZ28sIHNsZWVwLCBqb2luIH0gZnJvbSBcIm1vZHVsZXMvcHJvY2Vzc1wiO1xuZXhwb3J0IHsgRU1QVFkgfSBmcm9tIFwibW9kdWxlcy9xdWV1ZVwiO1xuXG4vKipcbiAqIEFuIGVycm9yIGhhbmRsaW5nIGZ1bmNpdG9uLiBUaGlzIGlzIHVzZWQgdG8gaGFuZGxlIGV4Y2VwdGlvbnMgdGhyb3duIGluIGFzeW5jXG4gKiBmdW5jdGlvbnMgYW5kIGluIHRyYW5zZHVjZXJzLiBUaGUgcmV0dXJuIHZhbHVlIG9mIGFuIGV4Y2VwdGlvbiBoYW5kbGVyIGlzXG4gKiB0eXBpY2FsbHkgc2VudCB0byBhIGNoYW5uZWw7IGlmIHRoZSBleGNlcHRpb24gaGFwcGVuZWQgd2l0aGluIGFuIGFzeW5jXG4gKiBmdW5jdGlvbiwgaXQgd2lsbCBiZSBzZW50IHRvIHRoYXQgZnVuY3Rpb24ncyBvdXRwdXQgY2hhbm5lbCwgYW5kIGlmIHRoZVxuICogZXhjcGV0aW9uIGhhcHBlbmVkIGluIGEgdHJhbnNkdWNlciwgaXQgd2lsbCBiZSBzZW50IHRvIHRoZSBjaGFubmVsIHRvIHdoaWNoXG4gKiB0aGUgdHJhbnNkdWNlciBpcyBhdHRhY2hlZC5cbiAqXG4gKiBAY2FsbGJhY2sgZXhjZXB0aW9uSGFuZGxlclxuICogQHBhcmFtIHtvYmplY3R9IGVyciBUaGUgZXJyb3Igb2JqZWN0IHRoYXQgd2FzIHRocm93biB0byBjYXVzZSB0aGUgZXJyb3IgdG9cbiAqICAgICBoYXZlIHRvIGJlIGhhbmRsZWQuXG4gKiBAcmV0dXJuIHsqfSBBIHZhbHVlIGRlY2lkZWQgYnkgdGhlIGhhbmRsZXIgdGhhdCB3aWxsIGJlIHNlbnQgdG8gYSBjaGFubmVsLlxuICovXG5cbi8qKlxuICogQSBjYWxsYmFjayB0aGF0J3MgcnVuIHdoZW4gYSBub24tYmxvY2tpbmcgY2hhbm5lbCBvcGVyYXRpb24gY29tcGxldGVzLiBUaGVcbiAqIHZhbHVlIHRoYXQgdGhpcyBmdW5jdGlvbiByZWNlaXZlcyBpcyBpZGVudGljYWwgdG8gd2hhdCBpcyByZXR1cm5lZCBieSBhXG4gKiBibG9ja2luZyBjYWxsOiB0aGUgdmFsdWUgcmVjZWl2ZWQgZnJvbSB0aGUgY2hhbm5lbCBmb3IgYSBgcmVjdmAsIG9yIGB0cnVlYCBvclxuICogYGZhbHNlYCBkZXBlbmRpbmcgb24gdGhlIGNoYW5uZWwgc3RhdHVzIGZvciBhIGBzZW5kYC4gQW55IHJldHVybiB2YWx1ZSBmcm9tXG4gKiB0aGlzIGNhbGxiYWNrIGlzIGlnbm9yZWQuXG4gKlxuICogQGNhbGxiYWNrIG9wQ2FsbGJhY2tcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgRWl0aGVyIHRoZSB2YWx1ZSByZWNlaXZlZCBmcm9tIHRoZSBjaGFubmVsLCBvciB3aGV0aGVyIG9yXG4gKiBub3QgYSB2YWx1ZSB3YXMgc3VjY2Vzc2Z1bGx5IHNlbnQuXG4gKi9cblxuLyoqXG4gKiBBIGNhbGxiYWNrIHRoYXQncyBydW4gd2hlbiBhIG5vbi1ibG9ja2luZyBgc2VsZWN0YCBvcGVyYXRpb24gY29tcGxldGVzLiBUaGVcbiAqIHZhbHVlIHRoYXQgdGhpcyBmdW5jdGlvbiByZWNlaXZlcyBpcyBhbiBvYmplY3Qgd2l0aCB0d28gcHJvcGVydGllczogdGhlIHZhbHVlXG4gKiB0aGF0IHRoZSBgc2VsZWN0YCBvcGVyYXRpb24gY29tcGxldGVkIHdpdGggKGVpdGhlciB0aGUgdmFsdWUgcmVjZWl2ZWQgZnJvbVxuICogdGhlIGNoYW5uZWwgaW4gYSByZWNlaXZlIG9wZXJhdGlvbiwgb3IgYHRydWVgIG9yIGBmYWxzZWAgaW4gYSBzZW5kXG4gKiBvcGVyYXRpb24pLCBhbG9uZyB3aXRoIHRoZSBjaGFubmVsIHdoZXJlIHRoZSBvcGVyYXRpb24gYWN0dWFsbHkgaGFwcGVuZWQuIEFueVxuICogcmV0dXJuIHZhbHVlIGZyb20gdGhpcyBjYWxsYmFjayBpcyBpZ25vcmVkLlxuICpcbiAqIEBjYWxsYmFjayBzZWxlY3RDYWxsYmFja1xuICogQHBhcmFtIHttb2R1bGU6Y2hhbmtvL2NoYW5uZWwuU2VsZWN0UmVzdWx0fSBkYXRhIFRoZSB2YWx1ZSByZXR1cm5lZCBmcm9tIHRoZVxuICogICAgIHNlbGVjdCBvcGVyYXRpb24uXG4gKi9cblxuLyoqXG4gKiBBIGZ1bmN0aW9uIHRoYXQgdHJhbnNmb3JtcyBkYXRhIGFuZCBjYW4gYmUgY29tcG9zZWQgd2l0aCBvdGhlciB0cmFuc2R1Y2Vyc1xuICogaW50byBhIHNpbmdsZSB0cmFuc2R1Y2VyLiBUaGUgdHJhbnNkdWNlcnMgdGhlbXNlbHZlcyBhcmUgcHJvdmlkZWQgYnkgb3RoZXJcbiAqIGxpYnJhcmllczsgdGhlIG9ubHkgaW52b2x2ZW1lbnQgb2YgdGhpcyBsaWJyYXIgaXMgYXMgYSBjb25zdW1lciBvZlxuICogdHJhbnNkdWNlcnMuXG4gKlxuICogVHJhbnNkdWNlcnMgd29yayBieSBoYXZpbmcgc3RlcCBmdW5jdGlvbnMgdGhhdCBhcmUga25vd24gdmlhIHByb3RvY29sLCBhbmQgaXRcbiAqIGlzIHRoZXNlIHN0ZXAgZnVuY3Rpb25zIHRoYXQgdGFrZSBhIHZhbHVlIGF0IGEgdGltZSB0byBiZSB0cmFuc2Zvcm1lZCBhc1xuICogdGhlaXIgYXJndW1lbnRzLiBUaGUgYXJndW1lbnRzIHRvIHRoZSB0cmFuc2R1Y2VycyB0aGVtc2VsdmVzIGFyZSBvdGhlclxuICogdHJhbnNkdWNlcnMgdGhhdCBhcmUgdGhlbiBjb21wb3NlZCBpbnRvIGEgc2luZ2xlIHRyYW5zZHVjZXIsIHdoaWNoIGlzIHRoZW5cbiAqIHJldHVybmVkLiBUaGVzZSB2YWx1ZXMgbmVlZCBub3QgY29uY2VybiBhIHVzZXIgb2YgdGhzIGxpYnJhcnk7IGp1c3QgcGFzcyBhXG4gKiB0cmFuc2R1Y2VyIHRvIGB7QGxpbmsgbW9kdWxlOmNoYW5rby5jaGFufGNoYW59YCBvclxuICogYHtAbGluayBtb2R1bGU6Y2hhbmtvLnRyYW5zQ2hhbnx0cmFuc0NoYW59YCBhbmQgZXZlcnl0aGluZyBlbHNlIHdpbGwgYmVcbiAqIGhhbmRsZWQuXG4gKlxuICogQGNhbGxiYWNrIHRyYW5zZHVjZXJcbiAqIEBwYXJhbSB7bW9kdWxlOmNoYW5rb350cmFuc2R1Y2VyfSB4Zm9ybSBBIHRyYW5zZHVjZXIgdG8gY2hhaW4gdGhpcyB0cmFuc2R1Y2VyXG4gKiAgICAgdG8uXG4gKiBAcmV0dXJuIHttb2R1bGU6Y2hhbmtvfnRyYW5zZHVjZXJ9IEEgbmV3IHRyYW5zZHVjZXIgY29uc2lzdGluZyBvZiB0aGVcbiAqICAgICBjb21wb3NpdGlvbiBvZiB0aGlzIG9uZSBhbmQgYHhmb3JtYC5cbiAqL1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG5cbi8qKlxuICogUHJvdmlkZXMgc2V2ZXJhbCB0eXBlcyBvZiBidWZmZXJzIHVzYWJsZSBpbiBidWZmZXJlZCBjaGFubmVscy4gVGhlc2UgYXJlIGFsbFxuICogYnVpbHQgb24gYSBzbWFsbCwgZWZmaWNpZW50IHF1ZXVlIHdoaWNoIGlzIGluIHR1cm4gYmFja2VkIGJ5IGEgSmF2YVNjcmlwdFxuICogYXJyYXkuXG4gKlxuICogQG1vZHVsZSBjaGFua28vYnVmZmVyXG4gKi9cblxuaW1wb3J0IHsgcXVldWUgYXMgcSwgY291bnQgYXMgcUNvdW50LCBlbnF1ZXVlLCBkZXF1ZXVlIH0gZnJvbSBcIm1vZHVsZXMvcXVldWVcIjtcblxuLyoqXG4gKiBBIGJ1ZmZlciB0aGF0IHN0b3JlcyB2YWx1ZXMgc2VudCB0byBhIGJ1ZmZlcmVkIGNoYW5uZWwgdW50aWwgYSBwcm9jZXNzXG4gKiByZWNlaXZlcyB0aGVtLlxuICpcbiAqIERpZmZlcmVudCBidWZmZXIgZGlmZmVyIG9ubHkgaW4gdGhlIHdheSB0aGF0IHRoZXkgZGV0ZXJtaW5lIHdoZXRoZXIgdGhleSBhcmVcbiAqIGZ1bGwgYW5kIGluIHdoYXQgaGFwcGVucyB3aGVuIGEgbmV3IHZhbHVlIGlzIGFkZGVkIHRvIGEgZnVsbCBidWZmZXIuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjaGFua28vYnVmZmVyXG4gKiBAdHlwZWRlZiB7KG1vZHVsZTpjaGFua28vYnVmZmVyfkZpeGVkQnVmZmVyIHxcbiAqICAgICBtb2R1bGU6Y2hhbmtvL2J1ZmZlcn5Ecm9wcGluZ0J1ZmZlciB8XG4gKiAgICAgbW9kdWxlOmNoYW5rby9idWZmZXJ+U2xpZGluZ0J1ZmZlcil9IEJ1ZmZlclxuICovXG5cbi8qKlxuICogVGhlIG5hbWUgb2YgYSBwcm9wZXJ0eSB0aGF0IGV4aXN0cyBvbiBidWZmZXIgb2JqZWN0cyBmb3IgdGhlIHB1cnBvc2Ugb2ZcbiAqIGl0ZW50aWZ5aW5nIHRoZW0gYXMgYnVmZmVyIG9iamVjdHMuXG4gKlxuICogQHR5cGUge1N5bWJvbH1cbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IEJVRkZFUiA9IFN5bWJvbChcIkJVRkZFUlwiKTtcblxuLyoqXG4gKiBBIHBvc3NpYmxlIHZhbHVlIG9mIHRoZSBge0BsaW5rIG1vZHVsZTpjaGFua28vYnVmZmVyfkJVRkZFUnxCVUZGRVJ9IHByb3BlcnR5XG4gKiBpbmRpY2F0aW5nIHRoYXQgdGhlIGJ1ZmZlciBpcyBhIGZpeGVkIGJ1ZmZlci5cbiAqXG4gKiBAdHlwZSB7U3ltYm9sfVxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgRklYRUQgPSBTeW1ib2woXCJGSVhFRFwiKTtcblxuLyoqXG4gKiBBIHBvc3NpYmxlIHZhbHVlIG9mIHRoZSBge0BsaW5rIG1vZHVsZTpjaGFua28vYnVmZmVyfkJVRkZFUnxCVUZGRVJ9IHByb3BlcnR5XG4gKiBpbmRpY2F0aW5nIHRoYXQgdGhlIGJ1ZmZlciBpcyBhIGRyb3BwaW5nIGJ1ZmZlci5cbiAqXG4gKiBAdHlwZSB7U3ltYm9sfVxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgRFJPUFBJTkcgPSBTeW1ib2woXCJEUk9QUElOR1wiKTtcblxuLyoqXG4gKiBBIHBvc3NpYmxlIHZhbHVlIG9mIHRoZSBge0BsaW5rIG1vZHVsZTpjaGFua28vYnVmZmVyfkJVRkZFUnxCVUZGRVJ9IHByb3BlcnR5XG4gKiBpbmRpY2F0aW5nIHRoYXQgdGhlIGJ1ZmZlciBpcyBhIHNsaWRpbmcgYnVmZmVyLlxuICpcbiAqIEB0eXBlIHtTeW1ib2x9XG4gKiBAcHJpdmF0ZVxuICovXG5jb25zdCBTTElESU5HID0gU3ltYm9sKFwiU0xJRElOR1wiKTtcblxuLyoqXG4gKiBQcmVkaWNhdGUgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBzdXBwbGllZCBvYmplY3QgaXMgYSBidWZmZXIuXG4gKlxuICogQHBhcmFtIHsqfSBvYmogVGhlIHZhbHVlIHRvIHRlc3QgdG8gc2VlIGlmIGl0J3MgYSBidWZmZXIuXG4gKiBAcmV0dXJuIHtib29sZWFufSBFaXRoZXIgYHRydWVgIGlmIHRoZSB2YWx1ZSBpcyBhIGJ1ZmZlciwgb3IgYGZhbHNlYCBpZiBpdCBpc1xuICogICAgIG5vdC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGlzQnVmZmVyKG9iaikge1xuICByZXR1cm4gISFvYmo/LltCVUZGRVJdO1xufVxuXG4vKipcbiAqIEEgYnVmZmVyIGltcGxlbWVudGF0aW9uIHRoYXQgbmV2ZXIgZGlzY2FyZHMgYnVmZmVyZWQgaXRlbXMgd2hlbiBhIG5ldyBpdGVtIGlzXG4gKiBhZGRlZC5cbiAqXG4gKiBUaGlzIGJ1ZmZlciBoYXMgYSBjb25jZXB0IG9mICpmdWxsKiwgYnV0IGl0J3MgYSBzb2Z0IGxpbWl0LiBJZiB0aGUgc2l6ZSBvZlxuICogdGhlIGJ1ZmZlciBpcyBleGNlZWRlZCwgYWRkZWQgaXRlbXMgYXJlIHN0aWxsIHN0b3JlZC5cbiAqIHtAbGluayBtb2R1bGU6Y2hhbmtvfkNoYW5rby5pc0Z1bGx8aXNGdWxsfSByZXR1cm5zIGB0cnVlYCBhbnkgdGltZSB0aGF0IHRoZVxuICogc2l6ZSBpcyByZWFjaGVkIG9yIGV4Y2VlZGVkLCBzbyBpdCdzIGVudGlyZWx5IHBvc3NpYmxlIHRvIGNhbGxcbiAqIHtAbGluayBtb2R1bGU6Y2hhbmtvfkNoYW5rby5yZW1vdmV8cmVtb3ZlfSBvbiBhIGZ1bGwgYnVmZmVyIGFuZCBoYXZlIGl0IHN0aWxsXG4gKiBiZSBmdWxsLlxuICpcbiAqIEB0eXBlZGVmIEZpeGVkQnVmZmVyXG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIGEgZml4ZWQgYnVmZmVyIG9mIHRoZSBzcGVjaWZpZWQgY2FwYWNpdHkuXG4gKlxuICogQSBmaXhlZCBidWZmZXIgaXMgYSAnbm9ybWFsJyBidWZmZXIsIG9uZSB0aGF0IHN0b3JlcyBhbmQgcmV0dXJucyBpdGVtcyBvblxuICogZGVtYW5kLiBXaGlsZSBpdCBpcyBjYXBhYmxlIG9mIGJlaW5nIG92ZXItZmlsbGVkLCB0aGF0IGFiaWxpdHkgaXMgbm90IHVzZWQgaW5cbiAqIENoYW5rby4gQSBidWZmZXIgdGhhdCBpcyBmdWxsIHdpbGwgY2F1c2UgdGhlIG5leHQgcHV0IHRvIGl0cyBjaGFubmVsIHRvIGJsb2NrXG4gKiB1bnRpbCBhdCBsZWFzdCBvbmUgaXRlbSBpcyByZW1vdmVkIGZyb20gdGhlIGJ1ZmZlci5cbiAqXG4gKiBUaGlzIGJ1ZmZlciBpcyBwYXNzZWQgdG8gYHtAbGluayBtb2R1bGU6Y2hhbmtvfkNoYW5rby5jaGFufGNoYW59YCwgZXRjLiB0b1xuICogY3JlYXRlIGEgYnVmZmVyZWQgY2hhbm5lbC4gSXQgaXMgbm90IG1lYW50IHRvIGJlIHVzZWQgZGlyZWN0bHkuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjaGFua29+Q2hhbmtvXG4gKiBAcGFyYW0ge251bWJlcn0gc2l6ZSBUaGUgbnVtYmVyIG9mIGl0ZW1zIHRoYXQgdGhlIG5ldyBidWZmZXIgY2FuIGhvbGQgYmVmb3JlXG4gKiAgICAgaXQncyBmdWxsLlxuICogQHJldHVybiB7bW9kdWxlOmNoYW5rby9idWZmZXJ+Rml4ZWRCdWZmZXJ9IEEgbmV3IGZpeGVkIGJ1ZmZlciBvZiB0aGVcbiAqICAgICBzcGVjaWZpZWQgY2FwYWNpdHkuXG4gKi9cbmZ1bmN0aW9uIGZpeGVkKHNpemUpIHtcbiAgcmV0dXJuIE9iamVjdC5jcmVhdGUobnVsbCwge1xuICAgIC8qKlxuICAgICAqIFRoZSBxdWV1ZSBiYWNraW5nIHRoaXMgYnVmZmVyLlxuICAgICAqXG4gICAgICogQHR5cGUge21vZHVsZTpjaGFua28vcXVldWV+UXVldWV9XG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBxdWV1ZToge1xuICAgICAgdmFsdWU6IHEoKVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgbnVtYmVyIG9mIGl0ZW1zIHRoYXQgdGhpcyBxdWV1ZSBjYW4gaG9sZCBiZWZvcmUgaXQncyBjb25zaWRlcmVkIGZ1bGwuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgc2l6ZToge1xuICAgICAgdmFsdWU6IHNpemVcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQSBtYXJrZXIgcHJvcGVydHkgdXNlZCB0byBzaG93IHRoYXQgdGhpcyBpcyBhIGZpeGVkIGJ1ZmZlci5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtTeW1ib2x9XG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBbQlVGRkVSXToge1xuICAgICAgdmFsdWU6IEZJWEVEXG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBBIGJ1ZmZlciBpbXBsZW1lbnRhdGlvbiB0aGF0IGRyb3BzIG5ld2x5IGFkZGVkIGl0ZW1zIHdoZW4gdGhlIGJ1ZmZlciBpcyBmdWxsLlxuICpcbiAqIFRoaXMgZHJvcHBpbmcgYmVoYXZpb3IgaXMgc2lsZW50OiB0aGUgbmV3IGl0ZW0gaXMgc2ltcGx5IG5vdCBhZGRlZCB0byB0aGVcbiAqIHF1ZXVlLiBOb3RlIHRoYXQgdGhpcyBidWZmZXIgaXMgbmV2ZXIgYGZ1bGxgIGJlY2F1c2UgaXQgY2FuIGFsd2F5cyBiZSBhZGRlZFxuICogdG8gd2l0aG91dCBleGNlZWRpbmcgdGhlIHNpemUsIGV2ZW4gaWYgdGhhdCAnYWRkaW5nJyBkb2Vzbid0IHJlc3VsdCBpbiBhIG5ld1xuICogaXRlbSBhY3R1YWxseSBhcHBlYXJpbmcgaW4gdGhlIGJ1ZmZlci5cbiAqXG4gKiBAdHlwZWRlZiBEcm9wcGluZ0J1ZmZlclxuICovXG5cbi8qKlxuICogQ3JlYXRlcyBhIGRyb3BwaW5nIGJ1ZmZlciBvZiB0aGUgc3BlY2lmaWVkIGNhcGFjaXR5LlxuICpcbiAqIEEgZHJvcHBpbmcgYnVmZmVyIHNpbGVudGx5IGRyb3BzIHRoZSBpdGVtIGJlaW5nIGFkZGVkIGlmIHRoZSBidWZmZXIgaXNcbiAqIGFscmVhZHkgYXQgY2FwYWNpdHkuIFNpbmNlIGFkZGluZyBhIG5ldyBpdGVtIHdpbGwgYWx3YXlzICdzdWNjZWVkJyAoZXZlbiBpZlxuICogaXQgc3VjY2VlZHMgYnkganVzdCBpZ25vcmluZyB0aGUgYWRkKSwgaXQgaXMgbmV2ZXIgY29uc2lkZXJlZCBmdWxsIGFuZFxuICogdGhlcmVmb3JlIGEgcHV0IHRvIGEgY2hhbm5lbCBidWZmZXJlZCBieSBhIGRyb3BwaW5nIGJ1ZmZlciBuZXZlciBibG9ja3MuXG4gKlxuICogVGhpcyBidWZmZXIgaXMgcGFzc2VkIHRvIGB7QGxpbmsgbW9kdWxlOmNoYW5rb35DaGFua28uY2hhbnxjaGFufWAsIGV0Yy4gdG9cbiAqIGNyZWF0ZSBhIGJ1ZmZlcmVkIGNoYW5uZWwuIEl0IGlzIG5vdCBtZWFudCB0byBiZSB1c2VkIGRpcmVjdGx5LlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y2hhbmtvfkNoYW5rb1xuICogQHBhcmFtIHtudW1iZXJ9IHNpemUgVGhlIG51bWJlciBvZiBpdGVtcyB0aGF0IHRoZSBuZXcgYnVmZmVyIGNhbiBob2xkIGJlZm9yZVxuICogICAgIG5ld2VzdCBpdGVtcyBhcmUgZHJvcHBlZCBvbiBhZGQuXG4gKiBAcmV0dXJuIHttb2R1bGU6Y2hhbmtvL2J1ZmZlcn5Ecm9wcGluZ0J1ZmZlcn0gQSBuZXcgZHJvcHBpbmcgYnVmZmVyIG9mIHRoZVxuICogICAgIHNwZWNpZmllZCBjYXBhY2l0eS5cbiAqL1xuZnVuY3Rpb24gZHJvcHBpbmcoc2l6ZSkge1xuICByZXR1cm4gT2JqZWN0LmNyZWF0ZShudWxsLCB7XG4gICAgLyoqXG4gICAgICogVGhlIHF1ZXVlIGJhY2tpbmcgdGhpcyBidWZmZXIuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7bW9kdWxlOmNoYW5rby9xdWV1ZX5RdWV1ZX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHF1ZXVlOiB7XG4gICAgICB2YWx1ZTogcSgpXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBudW1iZXIgb2YgaXRlbXMgdGhhdCB0aGlzIHF1ZXVlIGNhbiBob2xkIGJlZm9yZSBpdCdzIGNvbnNpZGVyZWQgZnVsbC5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBzaXplOiB7XG4gICAgICB2YWx1ZTogc2l6ZVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBIG1hcmtlciBwcm9wZXJ0eSB1c2VkIHRvIHNob3cgdGhhdCB0aGlzIGlzIGEgZHJvcHBpbmcgYnVmZmVyLlxuICAgICAqXG4gICAgICogQHR5cGUge1N5bWJvbH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIFtCVUZGRVJdOiB7XG4gICAgICB2YWx1ZTogRFJPUFBJTkdcbiAgICB9XG4gIH0pO1xufVxuXG4vKipcbiAqIEEgYnVmZmVyIGltcGxlbWVudGF0aW9uIHRoYXQgZHJvcHMgdGhlIG9sZGVzdCBpdGVtIHdoZW4gYW4gaXRlbSBpcyBhZGRlZCB0byBhXG4gKiBmdWxsIGJ1ZmZlci5cbiAqXG4gKiBUaGlzIGlzIHZlcnkgc2ltaWxhciB0b1xuICoge0BsaW5rIG1vZHVsZTpjaGFua28vYnVmZmVyLkRyb3BwaW5nQnVmZmVyfERyb3BwaW5nQnVmZmVyfTsgdGhlIG9ubHlcbiAqIGRpZmZlcmVuY2UgaXMgaW4gd2hhdCBoYXBwZW5zIHdoZW4gYW4gaXRlbSBpcyBhZGRlZC4gSW4gdGhpcyBidWZmZXIsIHRoZSBuZXdcbiAqIGl0ZW0gaXMgaW5kZWVkIGFkZGVkIHRvIHRoZSBidWZmZXIsIGJ1dCBpbiBvcmRlciB0byBrZWVwIHRoZSBjb3VudCBvZiB0aGVcbiAqIGJ1ZmZlciBhdCBvciBiZWxvdyBpdHMgc2l6ZSwgdGhlIG9sZGVzdCBpdGVtIGluIHRoZSBidWZmZXIgaXMgc2lsZW50bHlcbiAqIGRyb3BwZWQuXG4gKlxuICogQHR5cGVkZWYgU2xpZGluZ0J1ZmZlclxuICovXG5cbi8qKlxuICogQ3JlYXRlcyBhIHNsaWRpbmcgYnVmZmVyIG9mIHRoZSBzcGVjaWZpZWQgY2FwYWNpdHkuXG4gKlxuICogQSBzbGlkaW5nIGJ1ZmZlciBkcm9wcyB0aGUgZmlyc3QtYWRkZWQgKG9sZGVzdCkgaXRlbSBhbHJlYWR5IGluIHRoZSBidWZmZXIgaWZcbiAqIGEgbmV3IGl0ZW0gaXMgYWRkZWQgd2hlbiB0aGUgYnVmZmVyIGlzIGFscmVhZHkgYXQgY2FwYWNpdHkuIFNpbmNlIGl0J3MgYWx3YXlzXG4gKiBjYXBhYmxlIG9mIGhhdmluZyBpdGVtcyBhZGRlZCB0byBpdCwgaXQncyBuZXZlciBjb25zaWRlcmVkIGZ1bGwsIGFuZFxuICogdGhlcmVmb3JlIGEgcHV0IHRvIGEgY2hhbm5lbCBidWZmZXJlZCBieSBhIHNsaWRpbmcgYnVmZmVyIG5ldmVyIGJsb2Nrcy5cbiAqXG4gKiBUaGlzIGJ1ZmZlciBpcyBwYXNzZWQgdG8gYHtAbGluayBtb2R1bGU6Y2hhbmtvfkNoYW5rby5jaGFufGNoYW59YCwgZXRjLiB0b1xuICogY3JlYXRlIGEgYnVmZmVyZWQgY2hhbm5lbC4gSXQgaXMgbm90IG1lYW50IHRvIGJlIHVzZWQgZGlyZWN0bHkuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjaGFua29+Q2hhbmtvXG4gKiBAcGFyYW0ge251bWJlcn0gc2l6ZSBUaGUgbnVtYmVyIG9mIGl0ZW1zIHRoYXQgdGhlIG5ldyBidWZmZXIgY2FuIGhvbGQgYmVmb3JlXG4gKiAgICAgb2xkZXN0IGl0ZW1zIGFyZSBkcm9wcGVkIG9uIGFkZC5cbiAqIEByZXR1cm4ge21vZHVsZTpjaGFua28vYnVmZmVyflNsaWRpbmdCdWZmZXJ9IEEgbmV3IHNsaWRpbmcgYnVmZmVyIG9mIHRoZVxuICogICAgIHNwZWNpZmllZCBjYXBhY2l0eS5cbiAqL1xuZnVuY3Rpb24gc2xpZGluZyhzaXplKSB7XG4gIHJldHVybiBPYmplY3QuY3JlYXRlKG51bGwsIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcXVldWUgYmFja2luZyB0aGlzIGJ1ZmZlci5cbiAgICAgKlxuICAgICAqIEB0eXBlIHttb2R1bGU6Y2hhbmtvL3F1ZXVlflF1ZXVlfVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgcXVldWU6IHtcbiAgICAgIHZhbHVlOiBxKClcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIG51bWJlciBvZiBpdGVtcyB0aGF0IHRoaXMgcXVldWUgY2FuIGhvbGQgYmVmb3JlIGl0J3MgY29uc2lkZXJlZCBmdWxsLlxuICAgICAqXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHNpemU6IHtcbiAgICAgIHZhbHVlOiBzaXplXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEEgbWFya2VyIHByb3BlcnR5IHVzZWQgdG8gc2hvdyB0aGF0IHRoaXMgaXMgYSBzbGlkaW5nIGJ1ZmZlci5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtTeW1ib2x9XG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBbQlVGRkVSXToge1xuICAgICAgdmFsdWU6IFNMSURJTkdcbiAgICB9XG4gIH0pO1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIHF1ZXVlIHRoYXQgYmFja3MgYSBidWZmZXIuXG4gKlxuICogQHBhcmFtIHttb2R1bGU6Y2hhbmtvL2J1ZmZlcn5CdWZmZXJ9IGJ1ZmZlciBUaGUgYnVmZmVyIHdob3NlIHF1ZXVlIGlzXG4gKiAgICAgcmV0dXJuZWQgYnkgdGhpcyBmdW5jdGlvbi5cbiAqIEByZXR1cm4ge21vZHVsZTpjaGFua28vcXVldWV+UXVldWV9IFRoZSBxdWV1ZSB0aGF0IGJhY2tzIHRoZSBzdXBwbGllZCBidWZmZXIuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBxdWV1ZShidWZmZXIpIHtcbiAgcmV0dXJuIGJ1ZmZlci5xdWV1ZTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBudW1iZXIgb2YgaXRlbXMgYSBidWZmZXIgY2FuIGhvbGQgYmVmb3JlIGl0J3MgZnVsbC5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTpjaGFua28vYnVmZmVyfkJ1ZmZlcn0gYnVmZmVyIFRoZSBidWZmZXIgd2hvc2Ugc2l6ZSBpcyByZXR1cm5lZFxuICogICAgIGJ5IHRoaXMgZnVuY3Rpb24uXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBzaXplIG9mIHRoZSBzdXBwbGllZCBidWZmZXIuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBzaXplKGJ1ZmZlcikge1xuICByZXR1cm4gYnVmZmVyLnNpemU7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgbnVtYmVyIG9mIGl0ZW1zIGEgYnVmZmVyIGlzIGN1cnJlbnRseSBob2xkaW5nLlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOmNoYW5rby9idWZmZXJ+QnVmZmVyfSBidWZmZXIgVGhlIGJ1ZmZlciB3aG9zZSBjdXJyZW50IGNvdW50IGlzXG4gKiAgICAgcmV0dXJuZWQgYnkgdGhpcyBmdW5jdGlvbi5cbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIG51bWJlciBvZiBpdGVtcyB0aGF0IHRoZSBzdXBwbGllZCBidWZmZXIgaXMgaG9sZGluZy5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNvdW50KGJ1ZmZlcikge1xuICByZXR1cm4gcUNvdW50KGJ1ZmZlci5xdWV1ZSk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGEgYnVmZmVyIGlzIGF0IGNhcGFjaXR5LlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOmNoYW5rby9idWZmZXJ+QnVmZmVyfSBidWZmZXIgVGhlIGJ1ZmZlciB3aG8ncyBiZWluZyBjaGVja2VkIHRvXG4gKiAgICAgc2VlIGlmIGl0J3MgYXQgY2FwYWNpdHkuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IEVpdGhlciBgdHJ1ZWAgaWYgdGhlIHN1cHBsaWVkIGJ1ZmZlciBpcyBmdWxsIG9yIGBmYWxzZWAgaWZcbiAqICAgICBpdCBpc24ndC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGlzRnVsbChidWZmZXIpIHtcbiAgcmV0dXJuIGJ1ZmZlcltCVUZGRVJdID09PSBGSVhFRCA/IHFDb3VudChidWZmZXIucXVldWUpID49IGJ1ZmZlci5zaXplIDogZmFsc2U7XG59XG5cbi8qKlxuICogQWRkcyBvbmUgb3IgbW9yZSBpdGVtcyB0byBhIGJ1ZmZlci5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTpjaGFua28vYnVmZmVyfkJ1ZmZlcn0gYnVmZmVyIFRoZSBidWZmZXIgd2hlcmUgdGhlIHN1cHBsaWVkXG4gKiAgICAgaXRlbXMgd2lsbCBiZSBhZGRlZC5cbiAqIEBwYXJhbSB7Li4uKn0gaXRlbXMgVGhlIHZhbHVlcyBiZWluZyBhZGRlZCB0byB0aGUgc3VwcGxpZWQgYnVmZmVyLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gYWRkKGJ1ZmZlciwgLi4uaXRlbXMpIHtcbiAgc3dpdGNoIChidWZmZXJbQlVGRkVSXSkge1xuICAgIGNhc2UgRklYRUQ6XG4gICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgaXRlbXMpIHtcbiAgICAgICAgZW5xdWV1ZShidWZmZXIucXVldWUsIGl0ZW0pO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIERST1BQSU5HOlxuICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGl0ZW1zKSB7XG4gICAgICAgIGlmIChjb3VudChidWZmZXIpIDwgc2l6ZShidWZmZXIpKSB7XG4gICAgICAgICAgZW5xdWV1ZShidWZmZXIucXVldWUsIGl0ZW0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgU0xJRElORzpcbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBpdGVtcykge1xuICAgICAgICBpZiAoY291bnQoYnVmZmVyKSA+PSBzaXplKGJ1ZmZlcikpIHtcbiAgICAgICAgICBkZXF1ZXVlKGJ1ZmZlci5xdWV1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZW5xdWV1ZShidWZmZXIucXVldWUsIGl0ZW0pO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuO1xuICB9XG59XG5cbi8qKlxuICogUmVtb3ZlcyB0aGUgbmV4dCBpdGVtIGZyb20gYSBxdWV1ZSBhbmQgcmV0dXJucyBpdC5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTpjaGFua28vYnVmZmVyfkJ1ZmZlcn0gYnVmZmVyIFRoZSBidWZmZXIgZnJvbSB3aGljaCBhbiBpdGVtIGlzXG4gKiAgICAgYmVpbmcgcmVtb3ZlZC5cbiAqIEByZXR1cm4geyp9IFRoZSBpdGVtIHRoYXQgd2FzIHJlbW92ZWQgZnJvbSB0aGUgc3VwcGxpZWQgYnVmZmVyLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gcmVtb3ZlKGJ1ZmZlcikge1xuICByZXR1cm4gZGVxdWV1ZShidWZmZXIucXVldWUpO1xufVxuXG5leHBvcnQge1xuICBpc0J1ZmZlcixcbiAgZml4ZWQsXG4gIGRyb3BwaW5nLFxuICBzbGlkaW5nLFxuICBxdWV1ZSxcbiAgc2l6ZSxcbiAgY291bnQsXG4gIGlzRnVsbCxcbiAgYWRkLFxuICByZW1vdmVcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuaW1wb3J0IHsgcHJvdG9jb2xzIGFzIHAgfSBmcm9tIFwibW9kdWxlcy9wcm90b2NvbFwiO1xuaW1wb3J0IHtcbiAgcXVldWUsXG4gIGRlcXVldWUsXG4gIEVNUFRZLFxuICBmaWx0ZXIsXG4gIGNvdW50IGFzIHFDb3VudCxcbiAgZW5xdWV1ZVxufSBmcm9tIFwibW9kdWxlcy9xdWV1ZVwiO1xuaW1wb3J0IHsgaXNGdWxsLCBjb3VudCwgcmVtb3ZlIH0gZnJvbSBcIm1vZHVsZXMvYnVmZmVyXCI7XG5pbXBvcnQgeyBkaXNwYXRjaCB9IGZyb20gXCJtb2R1bGVzL2Rpc3BhdGNoZXJcIjtcblxuLyoqXG4gKiBUaGUgbWF4aW11bSBudW1iZXIgb2YgZGlydHkgb3BlcmF0aW9ucyB0aGF0IGNhbiBiZSBxdWV1ZWQgb24gYSBjaGFubmVsIGJlZm9yZVxuICogYSBjbGVhbnVwIGlzIHRyaWdnZXJlZC5cbiAqXG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgTUFYX0RJUlRZID0gNjQ7XG5cbi8qKlxuICogVGhlIG1heGltdW0gbnVtYmVyIG9mIG9wZXJ0aW9ucyB0aGF0IGNhbiBiZSBxdWV1ZWQgb24gYSBjaGFubmVsIGJlZm9yZSBuZXdcbiAqIG9wZXJhdGlvbnMgYXJlIHJlamVjdGVkLlxuICpcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAcHJpdmF0ZVxuICovXG5jb25zdCBNQVhfUVVFVUVEID0gMTAyNDtcblxuLyoqXG4gKiAqaGUgdmFsdWUgcmV0dXJuZWQgZnJvbSBhIHJlY2VpdmUgb24gYSBjaGFubmVsIHdoZW4gdGhhdCBjaGFubmVsIGlzIGNsb3NlZFxuICogYW5kIGhhcyBubyBtb3JlIHZhbHVlcyBhdmFpbGFibGUuXG4gKlxuICogVGhpcyBpcyBhIHNwZWNpYWwgdmFsdWUgdGhhdCBpcyByZXR1cm5lZCB1bmRlciBhIGNlcnRhaW4gY2lyY3Vtc3RhbmNlLCBuYW1lbHlcbiAqIHdoZW4gYSByZWNlaXZlIGlzIHBlcmZvcm1lZCBvbiBhIGNsb3NlZCBjaGFubmVsLiBCZWNhdXNlIG9mIHRoYXQsIGl0IGNhbm5vdFxuICogYmUgcmV0dXJuZWQgZnJvbSBhIHJlY2VpdmUgb24gYW4gb3BlbiBjaGFubmVsLiBGb3IgdGhhdCByZWFzb24sIGBDTE9TRURgIGlzXG4gKiB0aGUgb25seSB2YWx1ZSB0aGF0IGNhbm5vdCBiZSBzZW50IG9udG8gYSBjaGFubmVsICZtZGFzaDsgaXQgd291bGQgYmVcbiAqIGltcG9zc2libGUgdG8gZGlzdGluZ3Vpc2ggYmV0d2VlbiBhIGxlZ2l0aW1hdGUgdmFsdWUgb2YgYENMT1NFRGAgYW5kIGFuXG4gKiBhY3R1YWwgY2xvc2VkIGNoYW5uZWwuXG4gKlxuICogQHR5cGUge1N5bWJvbH1cbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y2hhbmtvfkNoYW5rb1xuICovXG5jb25zdCBDTE9TRUQgPSBTeW1ib2woXCJDTE9TRURcIik7XG5cbi8qKlxuICogQSB1bmlxdWUgdmFsdWUgdXNlZCB0byBpbmRpY2F0ZSB0aGF0IGFuIG9iamVjdCBpcyBhIGJveC5cbiAqXG4gKiBAdHlwZSB7U3ltYm9sfVxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgQk9YID0gU3ltYm9sKFwiQk9YXCIpO1xuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhbiBvYmplY3QgaXMgYSBib3guXG4gKlxuICogQHBhcmFtIHsqfSBvYmogQSB2YWx1ZSB0byBjaGVjayBmb3IgYm94aW5lc3MuXG4gKiBAcmV0dXJuIEVpdGhlciBgdHJ1ZWAgaWYgdGhlIHZhbHVlIGlzIGEgYm94IG9yIGBmYWxzZWAgaWYgaXQgaXNuJ3QuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBpc0JveChvYmopIHtcbiAgcmV0dXJuICEhb2JqPy5bQk9YXTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgYW4gb2JqZWN0IGlzIHJlZHVjZWQuIFRoaXMgaXMgZG9uZSB1c2luZyB0aGUgdHJhbnNkdWNlclxuICogcHJvdG9jb2w7IGFuIG9iamVjdCB3aXRoIHRoZSBwcm90b2NvbC1zcGVjaWZpZWQgYHJlZHVjZWRgIHByb3BlcnR5IGlzIGFzc3VtZWRcbiAqIHRvIGJlIHJlZHVjZWQuIElmIGEgcmVzdWx0IG9mIGEgdHJhbnNmb3JtYXRpb24gaXMgcmVkdWNlZCwgaXQgbWVhbnMgdGhhdCB0aGVcbiAqIHRyYW5zZm9ybWF0aW9uIGlzIGNvbXBsZXRlIGFuZCB0aGUgY2hhbm5lbCBzaG91bGQgYmUgY2xvc2VkLlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIGJlaW5nIGNoZWNrZWQgZm9yIHJlZHVjdGlvbi5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IEVpdGhlciBgdHJ1ZWAgaWYgdGhlIHZhbHVlIGhhcyBiZWVuIHJlZHVjZWQsIG9yIGBmYWxzZWAgaWYgaXQgaGFzXG4gKiAgICAgbm90IGJlZW4uXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBpc1JlZHVjZWQodmFsdWUpIHtcbiAgcmV0dXJuICEhdmFsdWU/LltwLnJlZHVjZWRdO1xufVxuXG4vKipcbiAqIEEgd3JhcHBlciBhcm91bmQgYSB2YWx1ZS4gVGhpcyBpcyBwcmltYXJpbHkgdXNlZCBhcyBhIG1hcmtlcjsgYSBwdXQgb3IgdGFrZVxuICogcmV0dXJuaW5nIGEgQm94IGluZGljYXRlcyB0aGF0IHRoZSBwdXQgb3IgdGFrZSBoYXMgcmV0dXJuZWQgYW4gaW1tZWRpYXRlXG4gKiB2YWx1ZSwgd2hpbGUgcmV0dXJuaW5nIGBudWxsYCBpbmRpY2F0ZXMgdGhhdCB0aGUgb3BlcmF0aW9uIGhhcyBiZWVuIHF1ZXVlZC5cbiAqXG4gKiBAdHlwZWRlZiBCb3hcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y2hhbmtvL2NoYW5uZWxcbiAqIEBwcm9wZXJ0eSB7Kn0gdmFsdWUgVGhlIHZhbHVlIGJlaW5nIHdyYXBwZWQgYnkgdGhlIGJveC5cbiAqIEBwcml2YXRlXG4gKi9cblxuLyoqXG4gKiBBIHdyYXBwZXIgb2JqZWN0IGZvciBhIHZhbHVlLiBUaGlzIGlzIHVzZWQgYWxtb3N0IGVudGlyZWx5IGFzIGEgbWFya2VyXG4gKiBpbnRlcmZhY2UsIHRob3VnaCB0aGUgZmFjdCB0aGF0IGl0IGJlY29tZXMgYSBwYXJhbWV0ZXIgdGhhdCdzIHBhc3NlZCBieVxuICogcmVmZXJlbmNlIHJhdGhlciB0aGFuIHZhbHVlIGlzIGFsc28gaW1wb3J0YW50IGluIGEgY291cGxlIHBsYWNlcy4gSWYgYVxuICogY2hhbm5lbCBvcGVyYXRpb24gKHB1dCBvciB0YWtlKSByZXR1cm5zIGEgQm94LCBpdCBtZWFucyB0aGF0IGFuIGFjdHVhbCB2YWx1ZVxuICogd2FzIHJldHVybmVkLiBBIG5vbi1Cb3ggKHdoaWNoIGFsd2F5cyBoYXBwZW5zIHRvIGJlIGBudWxsYCkgbWVhbnMgdGhhdCB0aGVcbiAqIG9wZXJhdGlvbiBtdXN0IGJsb2NrLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y2hhbmtvL2NoYW5uZWxcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGJveC5cbiAqIEByZXR1cm4ge21vZHVsZTpjaGFua28vY2hhbm5lbH5Cb3h9IFRoZSBib3hlZCB2YWx1ZS5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGJveCh2YWx1ZSkge1xuICByZXR1cm4gT2JqZWN0LmNyZWF0ZShudWxsLCB7XG4gICAgdmFsdWU6IHtcbiAgICAgIHZhbHVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9LFxuICAgIFtCT1hdOiB7XG4gICAgICB2YWx1ZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxuICogQSB3cmFwcGVyIGFyb3VuZCBhIHZhbHVlLiBUaGlzIGlzIG11Y2ggbGlrZVxuICoge0BsaW5rIG1vZHVsZTpjaGFua28vY2hhbm5lbH5Cb3h8Qm94fSBleGNlcHQgdGhhdCBpdCBhbHNvIGNhcnJpZXMgYSBoYW5kbGVyXG4gKiB0byBiZSB1c2VkIHdoZW4gYSBzZW50IHZhbHVlIGlzIHJlY2VpdmVkLiBJdCBpcyBzcGVjaWZpY2FsbHkgZm9yIHF1ZXVlaW5nXG4gKiBzZW5kcy5cbiAqXG4gKiBAdHlwZWRlZiBTZW5kQm94XG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNoYW5rby9jaGFubmVsXG4gKiBAcHJvcGVydHkgeyp9IHZhbHVlIFRoZSB2YWx1ZSBiZWluZyB3cmFwcGVkIGJ5IHRoaXMgYm94LlxuICogQHByb3BlcnR5IHttb2R1bGU6Y2hhbmtvL2NoYW5uZWx+SGFuZGxlcn0gaGFuZGxlciBUaGUgaGFuZGxlciB1c2VkIHRvIHByb2Nlc3NcbiAqICAgICBhIHNlbmQgcmVxdWVzdCBmb3IgdGhlIHZhbHVlLlxuICogQHByaXZhdGVcbiAqL1xuXG4vKipcbiAqIEEgYm94IHVzZWQgdG8gd3JhcCBhIHZhbHVlIGJlaW5nIHNlbnQgb250byBhIGNoYW5uZWwuIFRoaXMgaXMgZGlmZmVyZW50IGZyb21cbiAqIGEgcmVndWxhciBib3ggaW4gdGhhdCB0aGUgc2VuZCBoYW5kbGVyIGlzIGFsc28gaW5jbHVkZWQuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjaGFua28vY2hhbm5lbFxuICogQHBhcmFtICB7T2JqZWN0fSBoYW5kbGVyIFRoZSBoYW5kbGVyIHVzZWQgdG8gcHJvY2VzcyBhIHNlbmQgcmVxdWVzdCBmb3IgdGhlXG4gKiAgICAgdmFsdWUuXG4gKiBAcGFyYW0gIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gYm94LlxuICogQHJldHVybiB7bW9kdWxlOmNoYW5rby9jaGFubmVsflNlbmRCb3h9IFRoZSBib3hlZCB2YWx1ZS5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHNlbmRCb3godmFsdWUsIGhhbmRsZXIpIHtcbiAgcmV0dXJuIE9iamVjdC5jcmVhdGUobnVsbCwge1xuICAgIHZhbHVlOiB7XG4gICAgICB2YWx1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSxcbiAgICBoYW5kbGVyOiB7XG4gICAgICB2YWx1ZTogaGFuZGxlclxuICAgIH0sXG4gICAgW0JPWF06IHtcbiAgICAgIHZhbHVlOiB0cnVlXG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBBIGNoYW5uZWwsIHVzZWQgYnkgcHJvY2Vzc2VzIHRvIGNvbW11bmljYXRlIHdpdGggb25lIGFub3RoZXIuXG4gKlxuICogRm9yIGVhY2ggb3BlcmF0aW9uLCB0aGUgY2hhbm5lbCBmaXJzdCB0ZXN0cyB0byBzZWUgaWYgdGhlcmUncyBhIGNvcnJlc3BvbmRpbmdcbiAqIG9wZXJhdGlvbiBhbHJlYWR5IHF1ZXVlZCAoaS5lLiwgaWYgd2UncmUgZG9pbmcgYSBgc2VuZGAgdGhhdCB0aGVyZSdzIGEgcXVldWVkXG4gKiBgcmVjdmAgYW5kIHZpY2UgdmVyc2EpLiBJZiB0aGVyZSBpcywgdGhhdCBjb3JyZXNwb25kaW5nIG9wZXJhdGlvbiBpc1xuICogdW5ibG9ja2VkIGFuZCBib3RoIG9wZXJhdGlvbnMgY29tcGxldGUuIElmIG5vdCwgdGhlIG9wZXJhdGlvbiBpcyBxdWV1ZWQgdG9cbiAqIHdhaXQgZm9yIGEgY29ycmVzcG9uZGluZyBvcGVyYXRpb24uIFRoZSBwcm9jZXNzIG9yIHRoYXQgY3JlYXRlZCB0aGUgb3BlcmF0aW9uXG4gKiB0aGVuIGJsb2Nrcy5cbiAqXG4gKiBUaGUgY2hhbm5lbCBjYW4gYmUgYmFja2VkIGJ5IGEgYnVmZmVyLCB0aG91Z2ggaXQgaXMgbm90IGJ5IGRlZmF1bHQuIElmIGFcbiAqIGJ1ZmZlciBpcyBpbiBwbGFjZSwgYW5kIHRoYXQgYnVmZmVyIGlzIG5vdCBmdWxsLCB0aGVuIHRoZSBwcm9jZXNzIHRoYXRcbiAqIGNyZWF0ZWQgYW4gb3BlcmF0aW9uIHRoYXQgaGFzIHRvIGJlIHF1ZXVlZCBpcyAqbm90KiBibG9ja2VkLlxuICpcbiAqIFRoaXMgY2hhbm5lbCBvYmplY3Qgc3VwcG9ydHMgdHJhbnNmb3JtYXRpb25zLCBhc3N1bWluZyB0aGF0IHRoZXkgZm9sbG93IHRoZVxuICogcHJvdG9jb2wgY3JlYXRlZCBieSBhIGZldyB0cmFuc2R1Y2VyIGxpYnJhcnkgYXV0aG9ycyB0byBhbGxvdyB0aGVtIHRvXG4gKiBpbnRlcm9wZXJhdGUuIFRoZSBzdXBwb3J0IG11c3QgYmUgZXhwbGljaXRseSBjcmVhdGVkIGJlY2F1c2UgdGhlIG5vcm1hbFxuICogbWV0aG9kIG9mIG1ha2luZyBhbiBvYmplY3Qgc3VwcG9ydCB0cmFuc2Zvcm1hdGlvbnMgd29uJ3Qgd29yayBoZXJlLiBUaGlzXG4gKiBtZXRob2QgaXMgdG8gY3JlYXRlIGEgbmV3IG9iamVjdCBhbmQgYWRkIHRoZSB0cmFuc2Zvcm1lZCB2YWx1ZXMgdG8gaXQgLSBidXRcbiAqIGZvciBhIGNoYW5uZWwsIHdlIG5lZWQgdG8gcmVwbGFjZSB0aGUgdmFsdWVzIG9uIHRoZSBjaGFubmVsIHdpdGggdGhlaXJcbiAqIHRyYW5zZm9ybWVkIHZhbHVlcywgaW4gdGhlIHNhbWUgb3JkZXIgZXZlbiBpbiBhIG11bHRpLXByb2Nlc3MgZW52aXJvbm1lbnQuXG4gKiBUaHVzIHRyYW5zZm9ybWF0aW9ucyBoYXBwZW4gaW4gcGxhY2UuXG4gKlxuICogVHJhbnNmb3JtYXRpb25zIGFyZSBhcHBsaWVkIGJlZm9yZSB0aGUgdmFsdWUgaXMgcXVldWVkLCBzbyBldmVuIGlmIHRoZXJlIGlzIGFcbiAqIGNvcnJlc3BvbmRpbmcgb3BlcmF0aW9uIHJlYWR5IHRvIGdvLCB0aGUgdHJhbnNmb3JtYXRpb24gc3RpbGwgaGFwcGVucy4gQWxzbyxcbiAqIHRyYW5zZm9ybWF0aW9ucyByZXF1aXJlIHRoYXQgdGhlIGNoYW5uZWwgYmUgYnVmZmVyZWQgKHRoaXMgYnVmZmVyIGlzIHdoYXQgaXNcbiAqIHNlbnQgdG8gdGhlIHRyYW5zZm9ybWVyJ3MgcmVkdWN0aW9uIHN0ZXAgZnVuY3Rpb24pOyB0cnlpbmcgdG8gY3JlYXRlIGFcbiAqIGNoYW5uZWwgd2l0aCBhIHRyYW5zZm9ybWVyIGJ1dCB3aXRob3V0IGEgYnVmZmVyIHdpbGwgcmVzdWx0IGluIGFuIGVycm9yIGJlaW5nXG4gKiB0aHJvd24uXG4gKlxuICogVGhpcyBpcyB0aGUgb2JqZWN0IHRoYXQgaXMgcmV0dXJuZWQgZnJvbSBhIGNhbGwgdG9cbiAqIGB7QGxpbmsgbW9kdWxlOmNoYW5rb35DaGFua28uY2hhbnxjaGFufWAuIEhvd2V2ZXIsIHRoaXMgb2JqZWN0IGlzIGludGVuZGVkIHRvXG4gKiBiZSB1c2VkIGFzIGEgdmFsdWUgdG8gcGFzcyB0byBjaGFubmVsIG9wZXJhdGlvbiBmdW5jdGlvbnM7IGl0IGRvZXNuJ3QgaGF2ZVxuICogYW55IHByb3BlcnRpZXMgb2YgaW50ZXJlc3QgdG8gYW4gZW5kIHVzZXIuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjaGFua28vY2hhbm5lbFxuICogQHR5cGVkZWYgQ2hhbm5lbFxuICovXG5cbi8qKlxuICogQ3JlYXRlcyBhIGNoYW5uZWwuIFRoaXMgaXMgYSBsb3ctbGV2ZWwgZnVuY3Rpb247XG4gKiBge0BsaW5rIG1vZHVsZTpjaGFua29+Q2hhbmtvLmNoYW58Y2hhbn1gIHBlcmZvcm1zIHNvbWUgbmVjZXNzYXJ5XG4gKiBtYW5pcHVsYXRpb25zIG9uIGFyZ3VtZW50cyBiZWZvcmUgdXNpbmcgdGhpcyBmdW5jdGlvbiB0byBwZXJmb3JtIHRoZSBhY3R1YWxcbiAqIGNyZWF0aW9uLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y2hhbmtvL2NoYW5uZWxcbiAqIEBwYXJhbSB7bnVsbCB8IG1vZHVsZTpjaGFua28vYnVmZmVyfkJ1ZmZlcn0gYnVmZmVyIEFuIG9wdGlvbmFsIGJ1ZmZlciB0aGF0LFxuICogICAgIGlmIHByZXNlbnQsIGlzIHVzZWQgdG8gY3JlYXRlIGEgYnVmZmVyZWQgY2hhbm5lbC4gSWYgdGhpcyBpcyBgbnVsbGAsIGFuXG4gKiAgICAgdW5idWZmZXJlZCBjaGFubmVsIGlzIGNyZWF0ZWQuXG4gKiBAcGFyYW0ge21vZHVsZTpjaGFua29+dHJhbnNkdWNlcn0geGZvcm0gVGhlIHRyYW5zZHVjZXIgdXNlZCB0byB0cmFuc2Zvcm1cbiAqICAgICB2YWx1ZXMgc2VudCB0byB0aGUgY2hhbm5lbC4gSWYgbm8gdHJhbnNmb3JtYXRpb25zIGFyZSBuZWNlc3NhcnksIGFcbiAqICAgICBwYXNzdGhyb3VnaCB0cmFuc2R1Y2VyIHNob3VsZCBiZSBwcm92aWRlZC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNUaW1lZCBJbmRpY2F0ZXMgd2hldGhlciB0aGUgY2hhbm5lbCBpcyBhIHRpbWVkIGNoYW5uZWwuXG4gKiAgICAgVGhlIHRpbWluaW5nIG1lY2hhbmlzbSBpcyBoYW5kbGVkIG91dHNpZGUgdGhlIGNoYW5uZWwsIGJ1dCB0aGlzIHByb3BlcnR5XG4gKiAgICAgaXMgcHJvdmlkZWQgdG8gYmUgYWJsZSB0byBxdWVyeSB3aGV0aGVyIHRoYXQncyB0aGUgY2FzZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXhEaXJ0eT02NCBUaGUgbWF4aW11bSBudW1iZXIgb2YgZGlydHkgb3BlcmF0aW9ucyB0byBhbGxvd1xuICogICAgIGJlZm9yZSB0aGV5J3JlIHB1cmdlZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXhRdWV1ZWQ9MTAyNCBUaGUgbWF4aW11bSBudW1iZXIgb2Ygb3BlcmF0aW9ucyB0aGF0IGNhbiBiZVxuICogICAgIHF1ZXVlZCBiZWZvcmUgbmV3IG9uZXMgYXJlIHJlamVjdGVkLlxuICogQHJldHVybiB7bW9kdWxlOmNoYW5rby9jaGFubmVsLkNoYW5uZWx9IEEgbmV3IGNoYW5uZWwuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjaGFubmVsKFxuICBidWZmZXIsXG4gIHhmb3JtLFxuICBpc1RpbWVkID0gZmFsc2UsXG4gIG1heERpcnR5ID0gTUFYX0RJUlRZLFxuICBtYXhRdWV1ZWQgPSBNQVhfUVVFVUVEXG4pIHtcbiAgcmV0dXJuIE9iamVjdC5jcmVhdGUobnVsbCwge1xuICAgIGJ1ZmZlcjoge1xuICAgICAgdmFsdWU6IGJ1ZmZlclxuICAgIH0sXG4gICAgeGZvcm06IHtcbiAgICAgIHZhbHVlOiB4Zm9ybVxuICAgIH0sXG4gICAgbWF4RGlydHk6IHtcbiAgICAgIHZhbHVlOiBtYXhEaXJ0eVxuICAgIH0sXG4gICAgbWF4UXVldWVkOiB7XG4gICAgICB2YWx1ZTogbWF4UXVldWVkXG4gICAgfSxcbiAgICByZWN2czoge1xuICAgICAgdmFsdWU6IHF1ZXVlKClcbiAgICB9LFxuICAgIHNlbmRzOiB7XG4gICAgICB2YWx1ZTogcXVldWUoKVxuICAgIH0sXG4gICAgZGlydHlSZWN2czoge1xuICAgICAgdmFsdWU6IDAsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0sXG4gICAgZGlydHlTZW5kczoge1xuICAgICAgdmFsdWU6IDAsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0sXG4gICAgY2xvc2VkOiB7XG4gICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0sXG4gICAgaXNCdWZmZXJlZDoge1xuICAgICAgdmFsdWU6ICEhYnVmZmVyXG4gICAgfSxcbiAgICBpc1RpbWVkOiB7XG4gICAgICB2YWx1ZTogaXNUaW1lZFxuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxuICogU2VuZHMgYSB2YWx1ZSB0byBhIGNoYW5uZWwuIFRoZSBzcGVjaWZpZWQgaGFuZGxlciBpcyB1c2VkIHRvIGNvbnRyb2wgd2hldGhlclxuICogdGhlIHNlbmQgaXMgYWN0aXZlIGFuZCB3aGF0IHRvIGRvIGFmdGVyIHRoZSBzZW5kIGNvbXBsZXRlcy4gQSBzZW5kIGNhbiBiZWNvbWVcbiAqIGluYWN0aXZlIGlmIGl0IHdhcyBwYXJ0IG9mIGFuIGBzZWxlY3RgIGNhbGwgYW5kIHNvbWUgb3RoZXIgb3BlcmF0aW9uXG4gKiBzcGVjaWZpZWQgaW4gdGhhdCBjYWxsIGhhcyBhbHJlYWR5IGNvbXBsZXRlZC5cbiAqXG4gKiBUaGlzIHZhbHVlIGlzIGdpdmVuIHRvIGEgcmVjZWl2ZSBoYW5kbGVyIGltbWVkaWF0ZWx5IGlmIHRoZXJlJ3Mgb25lIHdhaXRpbmcuXG4gKiBPdGhlcndpc2UgdGhlIHZhbHVlIGFuZCBoYW5kbGVyIGFyZSBxdWV1ZWQgdG9nZXRoZXIgdG8gd2FpdCBmb3IgYSByZWNlaXZlLlxuICpcbiAqIFRoaXMgaXMgYSBsb3ctbGV2ZWwgb3BlcmF0aW9uIHRoYXQncyBwcm92aWRlZCBhcyBhIHBhcnQgb2YgdGhlIGNoYW5uZWxcbiAqIGltcGxlbWVudGF0aW9uIHNvIHRoYXQgb3RoZXIgb3BlcmF0aW9ucyBmdW5jdGlvbnMgY2FuIHByb3Blcmx5IGFwcGx5XG4gKiBoYW5kbGVycy4gSXQgaXMgbm90IG1lYW50IGZvciBnZW5lcmFsIHVzZS4gVXNlIHRob3NlIG90aGVyIG9wZXJhdGlvbnNcbiAqIGZ1bmN0aW9ucyBpbnN0ZWFkLlxuICpcbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNoYW5rby9jaGFubmVsXG4gKiBAcGFyYW0ge21vZHVsZTpjaGFua28vY2hhbm5lbC5DaGFubmVsfSBjaGFubmVsIFRoZSBjaGFubmVsIHRoYXQgdGhlIHZhbHVlIGlzXG4gKiAgICAgYmVpbmcgc2VudCB0by5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGJlIHB1dCBvbnRvIHRoZSBjaGFubmVsLlxuICogQHBhcmFtIHtib29sZWFufSBoYW5kbGVyLmFjdGl2ZSBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHNlbmQgaXMgc3RpbGwgYWN0aXZlXG4gKiAgICAgYW5kIHNob3VsZCBzdGlsbCBiZSBzZXJ2aWNlZC5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGhhbmRsZXIuY29tbWl0IERlYWN0aXZhdGVzIHRoZSBzZW5kIChzbyBpdCBjYW4ndCBiZVxuICogICAgIHNlcnZpY2VkIGEgc2Vjb25kIHRpbWUpIGFuZCByZXR1cm5zIHRoZSBjYWxsYmFjayB0byBiZSBmaXJlZCB3aGVuIHRoZVxuICogICAgIHNlbmQgY29tcGxldGVzLlxuICogQHJldHVybiB7bW9kdWxlOmNoYW5rby9jaGFubmVsfkJveHxudWxsfSBPbmUgb2YgdGhyZWUgdmFsdWVzLiBBIGJveGVkIGB0cnVlYFxuICogICAgIGlzIHJldHVybmVkIGlmIHRoZSBzZW5kIHdhcyBpbW1lZGlhdGVseSBjb25zdW1lZCBieSBhIHBlbmRpbmcgcmVjZWl2ZS4gQVxuICogICAgIGJveGVkIGBmYWxzZWAgaXMgcmV0dXJuZWQgaWYgdGhlIHNlbmQgd2FzIHBlcmZvcm1lZCBvbiBhIGNoYW5uZWwgdGhhdCB3YXNcbiAqICAgICBhbHJlYWR5IGNsb3NlZCBieSB0aGUgdGltZSB0aGUgc2VuZCB0b29rIHBsYWNlLiBgbnVsbGAgaXMgcmV0dXJuZWQgaWYgdGhlXG4gKiAgICAgc2VuZCB3YXMgcXVldWVkIHBlbmRpbmcgYSBjb3JyZXNwb25kaW5nIHJlY2VpdmUuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBoYW5kbGVTZW5kKGNoYW5uZWwsIHZhbHVlLCBoYW5kbGVyKSB7XG4gIGlmICh2YWx1ZSA9PT0gQ0xPU0VEKSB7XG4gICAgdGhyb3cgRXJyb3IoXCJDYW5ub3Qgc2VuZCBDTE9TRUQgdG8gYSBjaGFubmVsXCIpO1xuICB9XG5cbiAgaWYgKGNoYW5uZWwuY2xvc2VkKSB7XG4gICAgaGFuZGxlci5jb21taXQoKTtcbiAgICByZXR1cm4gYm94KGZhbHNlKTtcbiAgfVxuXG4gIGxldCByZWNlaXZlciwgY2FsbGJhY2s7XG5cbiAgLy8gUHVzaCB0aGUgaW5jb21pbmcgdmFsdWUgdGhyb3VnaCB0aGUgYnVmZmVyLCBldmVuIGlmIHRoZXJlJ3MgYWxyZWFkeSBhXG4gIC8vIHJlY2VpdmVyIHdhaXRpbmcgZm9yIHRoZSB2YWx1ZS4gVGhpcyBpcyB0byBtYWtlIHN1cmUgdGhhdCB0aGUgdHJhbnNkdWNlclxuICAvLyBzdGVwIGZ1bmN0aW9uIGhhcyBhIGNoYW5jZSB0byBhY3Qgb24gdGhlIHZhbHVlIGZpcnN0LCB3aGljaCBjb3VsZCBjaGFuZ2VcbiAgLy8gdGhlIHZhbHVlIG9yIG1ha2UgaXQgYWx0b2dldGhlciB1bmF2YWlsYWJsZS5cbiAgLy9cbiAgLy8gSWYgdGhlIGNoYW5uZWwgaXMgdW5idWZmZXJlZCB0aGlzIHByb2Nlc3MgaXMgc2tpcHBlZCAodGhlcmUgY2FuJ3QgYmUgYVxuICAvLyB0cmFuc2R1Y2VyIG9uIGFuIHVuYnVmZmVyZWQgY2hhbm5lbCBhbnl3YXkpLiBJZiB0aGUgYnVmZmVyIGlzIGZ1bGwsIHRoZVxuICAvLyB0cmFuc2R1Y2VyJ3Mgd29yayBpcyBkZWZlcnJlZCB1bnRpbCBsYXRlciB3aGVuIHRoZSBidWZmZXIgaXMgbm90IGZ1bGwuXG4gIGlmIChjaGFubmVsLmJ1ZmZlciAmJiAhaXNGdWxsKGNoYW5uZWwuYnVmZmVyKSkge1xuICAgIGhhbmRsZXIuY29tbWl0KCk7XG4gICAgY29uc3QgZG9uZSA9IGlzUmVkdWNlZChjaGFubmVsLnhmb3JtW3Auc3RlcF0oY2hhbm5lbC5idWZmZXIsIHZhbHVlKSk7XG5cbiAgICBmb3IgKDs7KSB7XG4gICAgICBpZiAoY291bnQoY2hhbm5lbC5idWZmZXIpID09PSAwKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgcmVjZWl2ZXIgPSBkZXF1ZXVlKGNoYW5uZWwucmVjdnMpO1xuICAgICAgaWYgKHJlY2VpdmVyID09PSBFTVBUWSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGlmIChyZWNlaXZlci5hY3RpdmUpIHtcbiAgICAgICAgY2FsbGJhY2sgPSByZWNlaXZlci5jb21taXQoKTtcbiAgICAgICAgY29uc3QgdmFsID0gcmVtb3ZlKGNoYW5uZWwuYnVmZmVyKTtcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgZGlzcGF0Y2goKCkgPT4gY2FsbGJhY2sodmFsKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZG9uZSkge1xuICAgICAgY2xvc2UoY2hhbm5lbCk7XG4gICAgfVxuICAgIHJldHVybiBib3godHJ1ZSk7XG4gIH1cblxuICAvLyBUaGlzIGxvb3AgaGFwcGVucyBpZiB0aGUgY2hhbm5lbCBpcyB1bmJ1ZmZlcmVkIGFuZCB0aGVyZSBpcyBhdCBsZWFzdCBvbmVcbiAgLy8gcGVuZGluZyByZWNlaXZlLiAoQnVmZmVyZWQgY2hhbm5lbHMgYnJlYWsgb3V0IG9mIHRoaXMgbG9vcCBpbW1lZGlhdGVseSxcbiAgLy8gYmVjYXVzZSBpbiBvcmRlciBmb3IgYSBidWZmZXJlZCBjaGFubmVsIHRvIHJlYWNoIHRoaXMgcG9pbnQsIGl0cyBidWZmZXJcbiAgLy8gbXVzdCBoYXZlIGJlZW4gZnVsbC4gSWYgdGhlIGJ1ZmZlciBpcyBmdWxsLCB0aGF0IG1lYW5zIHRoZXJlIGFyZSBubyBwZW5kaW5nXG4gIC8vIHJlY2VpdmVzIGFuZCB0aGUgZmlyc3Qgb25lIHJlYWQgd2lsbCBiZSBFTVBUWS4pIEl0IHByb2Nlc3NlcyB0aGUgbmV4dFxuICAvLyBwZW5kaW5nIHJlY2VpdmUgaW1tZWRpYXRlbHkuXG4gIGZvciAoOzspIHtcbiAgICByZWNlaXZlciA9IGRlcXVldWUoY2hhbm5lbC5yZWN2cyk7XG4gICAgaWYgKHJlY2VpdmVyID09PSBFTVBUWSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGlmIChyZWNlaXZlci5hY3RpdmUpIHtcbiAgICAgIGhhbmRsZXIuY29tbWl0KCk7XG4gICAgICBjYWxsYmFjayA9IHJlY2VpdmVyLmNvbW1pdCgpO1xuICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIGRpc3BhdGNoKCgpID0+IGNhbGxiYWNrKHZhbHVlKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gYm94KHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIC8vIElmIHRoZXJlIGFyZSBubyBwZW5kaW5nIHJlY2VpdmVzIG9uIGFuIHVuYnVmZmVyZWQgY2hhbm5lbCwgb3Igb24gYSBidWZmZXJlZFxuICAvLyBjaGFubmVsIHdpdGggYSBmdWxsIGJ1ZmZlciwgd2UgcXVldWUgdGhlIHNlbmQgdG8gdGxldCBpdCB3YWl0IGZvciBhIHJlY2VpdmVcbiAgLy8gdG8gYmVjb21lIGF2YWlsYWJsZS4gU2VuZHMgd2hvc2UgaGFuZGxlcnMgaGF2ZSBnb25lIGluYWN0aXZlICh3aGljaCBoYXBwZW5zXG4gIC8vIGlmIHRoZXkgd2VyZSBwcm9jZXNzZWQgYXMgcGFydCBvZiBhIGBzZWxlY3RgIGNhbGwpIGFyZSBwZXJpb2RpY2FsbHkgcHVyZ2VkLlxuICBpZiAoY2hhbm5lbC5kaXJ0eVNlbmRzID4gY2hhbm5lbC5tYXhEaXJ0eSkge1xuICAgIGZpbHRlcihjaGFubmVsLnNlbmRzLCBzZW5kZXIgPT4gc2VuZGVyLmhhbmRsZXIuYWN0aXZlKTtcbiAgICBjaGFubmVsLmRpcnR5U2VuZHMgPSAwO1xuICB9IGVsc2Uge1xuICAgIGNoYW5uZWwuZGlydHlTZW5kcysrO1xuICB9XG5cbiAgaWYgKHFDb3VudChjaGFubmVsLnNlbmRzKSA+PSBjaGFubmVsLm1heFF1ZXVlZCkge1xuICAgIHRocm93IEVycm9yKFxuICAgICAgYE5vIG1vcmUgdGhhbiAke2NoYW5uZWwubWF4UXVldWVkfSBwZW5kaW5nIHNlbmRzIGFyZSBhbGxvd2VkIG9uIGEgc2luZ2xlIGNoYW5uZWxgXG4gICAgKTtcbiAgfVxuICBlbnF1ZXVlKGNoYW5uZWwuc2VuZHMsIHNlbmRCb3godmFsdWUsIGhhbmRsZXIpKTtcblxuICByZXR1cm4gbnVsbDtcbn1cblxuLyoqXG4gKiBSZWNlaXZlcyBhIHZhbHVlIGZyb20gYSBjaGFubmVsLiBUaGUgc3BlY2lmaWVkIGhhbmRsZXIgaXMgdXNlZCB0byBjb250cm9sXG4gKiB3aGV0aGVyIHRoZSByZWNlaXZlIGlzIGFjdGl2ZSBhbmQgd2hhdCB0byBkbyBhZnRlciB0aGUgcmVjZWl2ZSBjb21wbGV0ZXMuIEFcbiAqIHJlY2VpdmUgY2FuIGJlY29tZSBpbmFjdGl2ZSBpZiBpdCB3YXMgcGFydCBvZiBhbiBgc2VsZWN0YCBjYWxsIGFuZCBzb21lIG90aGVyXG4gKiBvcGVyYXRpb24gc3BlY2lmaWVkIGluIHRoYXQgY2FsbCBoYXMgYWxyZWFkeSBjb21wbGV0ZWQuXG4gKlxuICogVGhpcyB2YWx1ZSBpcyBnaXZlbiB0byBhIHNlbmQgaGFuZGxlciBpbW1lZGlhdGVseSBpZiB0aGVyZSdzIG9uZSB3YWl0aW5nLlxuICogT3RoZXJ3aXNlIHRoZSB2YWx1ZSBhbmQgaGFuZGxlciBhcmUgcXVldWVkIHRvZ2V0aGVyIHRvIHdhaXQgZm9yIGEgc2VuZC5cbiAqXG4gKiBUaGlzIGlzIGEgbG93LWxldmVsIG9wZXJhdGlvbiB0aGF0J3MgcHJvdmlkZWQgYXMgYSBwYXJ0IG9mIHRoZSBjaGFubmVsXG4gKiBpbXBsZW1lbnRhdGlvbiBzbyB0aGF0IG90aGVyIG9wZXJhdGlvbnMgZnVuY3Rpb25zIGNhbiBwcm9wZXJseSBhcHBseVxuICogaGFuZGxlcnMuIEl0IGlzIG5vdCBtZWFudCBmb3IgZ2VuZXJhbCB1c2UuIFVzZSB0aG9zZSBvdGhlciBvcGVyYXRpb25zXG4gKiBmdW5jdGlvbnMgaW5zdGVhZC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNoYW5rby9jaGFubmVsXG4gKiBAcGFyYW0ge21vZHVsZTpjaGFua28vY2hhbm5lbC5DaGFubmVsfSBjaGFubmVsIFRoZSBjaGFubmVsIHRoYXQgdGhlIHZhbHVlIGlzXG4gKiAgICAgYmVpbmcgcmVjZWl2ZWQgZnJvbS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaGFuZGxlci5hY3RpdmUgRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSByZWNlaXZlIGlzIHN0aWxsXG4gKiAgICAgYWN0aXZlIGFuZCBzaG91bGQgc3RpbGwgYmUgc2VydmljZWQuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBoYW5kbGVyLmNvbW1pdCBEZWFjdGl2YXRlcyB0aGUgcmVjZWl2ZSAoc28gaXQgY2FuJ3QgYmVcbiAqICAgICBzZXJ2aWNlZCBhIHNlY29uZCB0aW1lKSBhbmQgcmV0dXJucyB0aGUgY2FsbGJhY2sgdG8gYmUgZmlyZWQgd2hlbiB0aGVcbiAqICAgICByZWNlaXZlIGNvbXBsZXRlcy5cbiAqIEByZXR1cm4ge21vZHVsZTpjaGFua28vY2hhbm5lbH5Cb3h8bnVsbH0gRWl0aGVyIHRoZSBib3hlZCB2YWx1ZSByZWNlaXZlZCBmcm9tXG4gKiAgICAgdGhlIGNoYW5uZWwsIG9yIGBudWxsYCBpZiB0aGUgcmVjZWl2ZSBtdXN0IGJlIHF1ZXVlZCB0byBhd2FpdCBhXG4gKiAgICAgY29ycmVzcG9uZGluZyBzZW5kLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaGFuZGxlUmVjdihjaGFubmVsLCBoYW5kbGVyKSB7XG4gIGxldCBzZW5kZXIsIHNlbmRIYW5kbGVyLCBjYWxsYmFjaztcblxuICAvLyBSdW5zIGlmIHRoZSBjaGFubmVsIGlzIGJ1ZmZlcmVkIGFuZCB0aGUgYnVmZmVyZWQgaXMgbm90IGVtcHR5IChhbiBlbXB0eVxuICAvLyBidWZmZXIgbWVhbnMgdGhlcmUgYXJlIG5vIHBlbmRpbmcgc2VuZHMpLiBXZSBpbW1lZGlhdGVseSBwcm9jZXNzIGFueSBzZW5kc1xuICAvLyB0aGF0IHdlcmUgcXVldWVkIHdoZW4gdGhlcmUgd2VyZSBubyBwZW5kaW5nIHJlY2VpdmVzLCB1cCB1bnRpbCB0aGUgYnVmZmVyXG4gIC8vIGlzIGZpbGxlZCB3aXRoIHNlbnQgdmFsdWVzLlxuICBpZiAoY2hhbm5lbC5idWZmZXIgJiYgY291bnQoY2hhbm5lbC5idWZmZXIpID4gMCkge1xuICAgIGhhbmRsZXIuY29tbWl0KCk7XG4gICAgY29uc3QgdmFsdWUgPSByZW1vdmUoY2hhbm5lbC5idWZmZXIpO1xuXG4gICAgZm9yICg7Oykge1xuICAgICAgaWYgKGlzRnVsbChjaGFubmVsLmJ1ZmZlcikpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBzZW5kZXIgPSBkZXF1ZXVlKGNoYW5uZWwuc2VuZHMpO1xuICAgICAgaWYgKHNlbmRlciA9PT0gRU1QVFkpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIHNlbmRIYW5kbGVyID0gc2VuZGVyLmhhbmRsZXI7XG4gICAgICBpZiAoc2VuZEhhbmRsZXIuYWN0aXZlKSB7XG4gICAgICAgIGNhbGxiYWNrID0gc2VuZEhhbmRsZXIuY29tbWl0KCk7XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgIGRpc3BhdGNoKCgpID0+IGNhbGxiYWNrKHRydWUpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNSZWR1Y2VkKGNoYW5uZWwueGZvcm1bcC5zdGVwXShjaGFubmVsLmJ1ZmZlciwgc2VuZGVyLnZhbHVlKSkpIHtcbiAgICAgICAgICBjbG9zZShjaGFubmVsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYm94KHZhbHVlKTtcbiAgfVxuXG4gIC8vIFRoaXMgbG9vcCBydW5zIG9uIGFuIHVuYnVmZmVyZWQgY2hhbm5lbCBpZiB0aGVyZSBhcmUgYW55IHBlbmRpbmcgc2VuZHMuXG4gIC8vIChCdWZmZXJlZCBjaGFubmVscyBicmVhayBvdXQgb2YgdGhpcyBsb29wIGltbWVkaWF0ZWx5IGJlY2F1c2UgaW4gb3JkZXIgdG9cbiAgLy8gaGF2ZSBjb21lIHRoaXMgZmFyIHdpdGhvdXQgcmV0dXJuaW5nLCB0aGUgY2hhbm5lbCdzIGJ1ZmZlciBtdXN0IGhhdmUgYmVlblxuICAvLyBlbXB0eS4gQW4gZW1wdHkgYnVmZmVyIG1lYW5zIHRoZXJlIGFyZSBubyBwZW5kaW5nIHNlbmRzLCBzbyB0aGUgZmlyc3RcbiAgLy8gcGVuZGluZyBzZW5kIHJlYWQgZnJvbSBpdCB3aWxsIGJlIEVNUFRZLikgSXQgcHJvY2Vzc2VzIHRoZSBuZXh0IHBlbmRpbmdcbiAgLy8gc2VuZCBpbW1lZGlhdGVseS5cbiAgZm9yICg7Oykge1xuICAgIHNlbmRlciA9IGRlcXVldWUoY2hhbm5lbC5zZW5kcyk7XG4gICAgaWYgKHNlbmRlciA9PT0gRU1QVFkpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBzZW5kSGFuZGxlciA9IHNlbmRlci5oYW5kbGVyO1xuICAgIGlmIChzZW5kSGFuZGxlci5hY3RpdmUpIHtcbiAgICAgIGNhbGxiYWNrID0gc2VuZEhhbmRsZXIuY29tbWl0KCk7XG4gICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgZGlzcGF0Y2goKCkgPT4gY2FsbGJhY2sodHJ1ZSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGJveChzZW5kZXIudmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIC8vIElmIHdlJ3ZlIGV4aGF1c3RlZCBhbGwgb2Ygb3VyIHBlbmRpbmcgc2VuZHMgYW5kIHRoZSBjaGFubmVsIGlzIG1hcmtlZFxuICAvLyBjbG9zZWQsIHdlIGNhbiBmaW5hbGx5IHJldXRybiB0aGUgZmFjdCB0aGF0IHRoZSBjaGFubmVsIGlzIGNsb3NlZC4gVGhpc1xuICAvLyBlbnN1cmVzIHRoYXQgYW55IHNlbmRzIHRoYXQgd2VyZSBhbHJlYWR5IHBlbmRpbmcgb24gdGhlIGNoYW5uZWwgYXJlXG4gIC8vIHByb2Nlc3NlZCBiZWZvcmUgY2xvc3VyZSwgZXZlbiBpZiB0aGUgY2hhbm5lbCB3YXMgY2xvc2VkIGJlZm9yZSB0aGF0IGNvdWxkXG4gIC8vIGhhcHBlbi5cbiAgaWYgKGNoYW5uZWwuY2xvc2VkKSB7XG4gICAgaGFuZGxlci5jb21taXQoKTtcbiAgICByZXR1cm4gYm94KENMT1NFRCk7XG4gIH1cblxuICAvLyBJZiBhbiB1bmJ1ZmZlcmVkIGNoYW5uZWwgb3IgYSBidWZmZXJlZCBjaGFubmVsIHdpdGggYW4gZW1wdHkgYnVmZmVyIGhhcyBub1xuICAvLyBwZW5kaW5nIHNlbmRzLCBhbmQgaWYgdGhlIGNoYW5uZWwgaXMgc3RpbGwgb3BlbiwgdGhlIHJlY2VpdmUgaXMgcXVldWVkIHRvXG4gIC8vIGJlIHByb2Nlc3NlZCB3aGVuIGEgc2VuZCBpcyBhdmFpbGFibGUuIFJlY2VpdmVzIHdob3NlIGhhbmRsZXJzIGhhdmUgZ29uZVxuICAvLyBpbmFjdGl2ZSBhcyB0aGUgcmVzdWx0IG9mIGBzZWxlY3RgIHByb2Nlc3NpbmcgYXJlIHBlcmlvZGljYWxseSBwdXJnZWQuXG4gIGlmIChjaGFubmVsLmRpcnR5UmVjdnMgPiBjaGFubmVsLm1heERpcnR5KSB7XG4gICAgZmlsdGVyKGNoYW5uZWwucmVjdnMsIHJlY2VpdmVyID0+IHJlY2VpdmVyLmFjdGl2ZSk7XG4gICAgY2hhbm5lbC5kaXJ0eVJlY3ZzID0gMDtcbiAgfSBlbHNlIHtcbiAgICBjaGFubmVsLmRpcnR5UmVjdnMrKztcbiAgfVxuXG4gIGlmIChxQ291bnQoY2hhbm5lbC5yZWN2cykgPj0gY2hhbm5lbC5tYXhRdWV1ZWQpIHtcbiAgICB0aHJvdyBFcnJvcihcbiAgICAgIGBObyBtb3JlIHRoYW4gJHtjaGFubmVsLm1heFF1ZXVlZH0gcGVuZGluZyByZWNlaXZlcyBhcmUgYWxsb3dlZCBvbiBhIHNpbmdsZSBjaGFubmVsYFxuICAgICk7XG4gIH1cbiAgZW5xdWV1ZShjaGFubmVsLnJlY3ZzLCBoYW5kbGVyKTtcblxuICByZXR1cm4gbnVsbDtcbn1cblxuLyoqXG4gKiBDbG9zZXMgdGhlIGNoYW5uZWwgaWYgaXQgaXNuJ3QgYWxyZWFkeSBjbG9zZWQuIFRoaXMgaW1tZWRpYXRlbHkgcmV0dXJucyBhbnlcbiAqIGJ1ZmZlcmVkIHZhbHVlcyB0byBwZW5kaW5nIHJlY2VpdmVzLiBJZiB0aGVyZSBhcmUgbm8gYnVmZmVyZWQgdmFsdWVzIChvciBpZlxuICogdGhleSd2ZSBhbHJlYWR5IGJlZW4gdGFrZW4gYnkgb3RoZXIgcmVjZWl2ZXMpLCB0aGVuIGFsbCBvZiB0aGUgcmVzdCBvZiB0aGVcbiAqIHJlY2VpdmVzIGFyZSBjb21wbGV0ZWQgd2l0aCB0aGUgdmFsdWUgb2Yge0BsaW5rIG1vZHVsZTpjaGFua29+Q0xPU0VEfENMT1NFRH0uXG4gKiBBbnkgcGVuZGluZyBzZW5kcyBhcmUgY29tcGxldGVkIHdpdGggdGhlIHZhbHVlIG9mIGBmYWxzZWAuXG4gKlxuICogTm90ZSB0aGF0IHRoZSBidWZmZXIgaXMgbm90IGVtcHRpZWQgaWYgdGhlcmUgYXJlIHN0aWxsIHZhbHVlcyByZW1haW5pbmcgYWZ0ZXJcbiAqIGFsbCBvZiB0aGUgcGVuZGluZyByZWNlaXZlcyBoYXZlIGJlZW4gaGFuZGxlZC4gVGhlIGNoYW5uZWwgd2lsbCBzdGlsbCBwcm92aWRlXG4gKiB0aG9zZSB2YWx1ZXMgdG8gYW55IGZ1dHVyZSByZWNlaXZlcywgdGhvdWdoIG5vIG5ldyB2YWx1ZXMgbWF5IGJlIGFkZGVkIHRvIHRoZVxuICogY2hhbm5lbC4gT25jZSB0aGUgYnVmZmVyIGlzIGRlcGxldGVkLCBhbnkgZnV0dXJlIHJlY2VpdmVzIHdpbGwgcmV0dXJuXG4gKiB7QGxpbmsgbW9kdWxlOmNoYW5rb35DTE9TRUR8Q0xPU0VEfS5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNoYW5rby9jaGFubmVsXG4gKiBAcGFyYW0ge21vZHVsZTpjaGFua28vY2hhbm5lbC5DaGFubmVsfSBjaGFubmVsIFRoZSBjaGFubmVsIHRvIGJlIGNsb3NlZC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNsb3NlKGNoYW5uZWwpIHtcbiAgaWYgKGNoYW5uZWwuY2xvc2VkKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNoYW5uZWwuY2xvc2VkID0gdHJ1ZTtcblxuICBsZXQgcmVjZWl2ZXIsIHNlbmRlciwgY2FsbGJhY2s7XG5cbiAgLy8gSWYgdGhlcmUgaXMgYSBidWZmZXIgYW5kIGl0IGhhcyBhdCBsZWFzdCBvbmUgdmFsdWUgaW4gaXQsIHNlbmQgdGhvc2UgdmFsdWVzXG4gIC8vIHRvIGFueSBwZW5kaW5nIHJlY2VpdmVzIHRoYXQgbWlnaHQgc3RpbGwgYmUgcXVldWVkLlxuICBpZiAoY2hhbm5lbC5idWZmZXIpIHtcbiAgICBjaGFubmVsLnhmb3JtW3AucmVzdWx0XShjaGFubmVsLmJ1ZmZlcik7XG4gICAgZm9yICg7Oykge1xuICAgICAgaWYgKGNvdW50KGNoYW5uZWwuYnVmZmVyKSA9PT0gMCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHJlY2VpdmVyID0gZGVxdWV1ZShjaGFubmVsLnJlY3ZzKTtcbiAgICAgIGlmIChyZWNlaXZlciA9PT0gRU1QVFkpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBpZiAocmVjZWl2ZXIuYWN0aXZlKSB7XG4gICAgICAgIGNhbGxiYWNrID0gcmVjZWl2ZXIuY29tbWl0KCk7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gcmVtb3ZlKGNoYW5uZWwuYnVmZmVyKTtcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgZGlzcGF0Y2goKCkgPT4gY2FsbGJhY2sodmFsdWUpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIE9uY2UgdGhlIGJ1ZmZlciBpcyBlbXB0eSAob3IgaWYgdGhlcmUgaXNuJ3QgYSBidWZmZXIgYXQgYWxsKSwgc2VuZCBDTE9TRURcbiAgLy8gdG8gYWxsIHJlbWFpbmluZyBxdWV1ZWQgcmVjZWl2ZXMuXG4gIGZvciAoOzspIHtcbiAgICByZWNlaXZlciA9IGRlcXVldWUoY2hhbm5lbC5yZWN2cyk7XG4gICAgaWYgKHJlY2VpdmVyID09PSBFTVBUWSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGlmIChyZWNlaXZlci5hY3RpdmUpIHtcbiAgICAgIGNhbGxiYWNrID0gcmVjZWl2ZXIuY29tbWl0KCk7XG4gICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgZGlzcGF0Y2goKCkgPT4gY2FsbGJhY2soQ0xPU0VEKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gU2VuZCBgZmFsc2VgIHRvIGFueSByZW1haW5pbmcgcXVldWVkIHNlbmRzLlxuICBmb3IgKDs7KSB7XG4gICAgc2VuZGVyID0gZGVxdWV1ZShjaGFubmVsLnNlbmRzKTtcbiAgICBpZiAoc2VuZGVyID09PSBFTVBUWSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGlmIChzZW5kZXIuaGFuZGxlci5hY3RpdmUpIHtcbiAgICAgIGNhbGxiYWNrID0gc2VuZGVyLmhhbmRsZXIuY29tbWl0KCk7XG4gICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgZGlzcGF0Y2goKCkgPT4gY2FsbGJhY2soZmFsc2UpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IHtcbiAgQ0xPU0VELFxuICBNQVhfRElSVFksXG4gIE1BWF9RVUVVRUQsXG4gIGNoYW5uZWwsXG4gIGhhbmRsZVNlbmQsXG4gIGhhbmRsZVJlY3YsXG4gIGNsb3NlLFxuICBib3gsXG4gIGlzQm94XG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG5cbi8qKlxuICogQW4gaW1wbGVtZW50YXRpb24gb2YgY2hhbm5lbHMuIFRoZXNlIGNoYW5uZWxzIGFyZSBlc3NlbnRpYWxseSBxdWV1ZXMgdGhhdFxuICogaG9sZCBpbnN0cnVjdGlvbnMgd2FpdGluZyBmb3IgdGhlIG5leHQgYXZhaWxhYmxlIGFzeW5jIGZ1bmN0aW9uIHRvIHByb2Nlc3NcbiAqIHRoZW0uIFRoZXkgY2FuIGJlIGJ1ZmZlcmVkLCB3aGljaCBpcyBhY2NvbXBsaXNoZWQgdXNpbmcgdGhlIGJ1ZmZlciBmdW5jdGlvbnNcbiAqIGB7QGxpbmsgbW9kdWxlOmNoYW5rb35DaGFua28uZml4ZWR8Zml4ZWR9YCxcbiAqIGB7QGxpbmsgbW9kdWxlOmNoYW5rb35DaGFua28uZHJvcHBpbmd8ZHJvcHBpbmd9YCwgYW5kXG4gKiBge0BsaW5rIG1vZHVsZTpjaGFua29+Q2hhbmtvLnNsaWRpbmd8c2xpZGluZ31gLlxuICpcbiAqIENoYW5uZWxzIGRvIG5vdCBpbnRlcmFjdCB3aXRoIEpTIHRhc2tzIG9yIHRoZSBkaXNwYXRjaGVyIGluIGFueSBtZWFuaW5nZnVsXG4gKiB3YXkuIFRoZXkncmUganVzdCBoZXJlIHRvIGhvbGQgdGFza3Mgd2hpY2ggbWF5IHRoZW1zZWx2ZXMgdGhlbiBjYXVzZSBuZXcgSlNcbiAqIHRhc2tzIHRvIGJlIGNyZWF0ZWQgdmlhIHRoZSBkaXNwYXRjaGVyLlxuICpcbiAqIENoYW5uZWxzIG1heSBoYXZlIHRyYW5zZHVjZXJzIGFzc29jaWF0ZWQgd2l0aCB0aGVtLiBUaGUgdHJhbnNkdWNlcnMgYXJlXG4gKiBleHBlY3RlZCB0byBmb2xsb3cgdGhlIHNhbWUgY29udmVudGlvbnMgYXMgYW55IG9mIHRoZSBwb3B1bGFyIHRyYW5zZHVjZXJcbiAqIGxpYnJhcmllcy4gRXhwbGljaXQgc3VwcG9ydCBpcyByZXF1aXJlZCBiZWNhdXNlIGNoYW5uZWxzIHdvdWxkbid0IHBsYXkgd2VsbFxuICogd2l0aCB0aGUgbm9ybWFsIHdheSBvZiBtYWtpbmcgYW4gb2JqZWN0IHN1cHBvcnQgdHJhbnNkdWN0aW9uLCBmb3IgdHdvXG4gKiBkaWZmZXJlbnQgcmVhc29ucy5cbiAqXG4gKiAqIFRyYW5zZHVjZXJzIHJlcXVpcmUgdGhlIGFiaWxpdHkgdG8gY3JlYXRlIGEgbmV3LCBlbXB0eSBjb2xsZWN0aW9uIG9mIHRoZVxuICogICBzYW1lIHR5cGUgYXMgdGhlIGlucHV0IGNvbGxlY3Rpb24uIEluIHRoaXMgY2FzZSwgdGhhdCB3b3VsZCBtZWFuIGNyZWF0aW5nIGFcbiAqICAgbmV3IGNoYW5uZWwsIG1lYW5pbmcgdGhhdCB0aGUgb3V0cHV0IGNoYW5uZWwgKGZyb20gd2hpY2ggdGhlIHRyYW5zZm9ybWVkXG4gKiAgIHZhbHVlcyBhcmUgcmVjZWl2ZWQpIHdvdWxkIGJlIGRpZmZlcmVudCB0aGFuIHRoZSBpbnB1dCBjaGFubmVsICh3aGVyZVxuICogICB2YWx1ZXMgYXJlIHNlbnQpLlxuICogKiBJZiB3ZSBzb21laG93IGdldCBvdmVyIHRoYXQgcmVxdWlyZW1lbnQgYW5kIGtlZXAgYWxsIGFjdGlvbiBvbiB0aGUgc2FtZVxuICogICBjaGFubmVsLCB3ZSBjYW4ndCB0YWtlIHZhbHVlcyBmcm9tIHRoZSBjaGFubmVsLCB0cmFuc2Zvcm0gdGhlbSwgYW5kIHB1dFxuICogICB0aGVtIGJhY2suIFRoaXMgd291bGQgcG90ZW50aWFsbHkgY2hhbmdlIHRoZSBvcmRlciBvZiB2YWx1ZXMgaW4gdGhlIGNoYW5uZWxcbiAqICAgc2luY2Ugd2UgYXJlIGRlYWxpbmcgd2l0aCBhc3luY2hyb25vdXMgcHJvY2Vzc2VzLlxuICpcbiAqIFRoZSBleHBsaWNpdCBzdXBwb3J0IG1lYW5zIGEgdHJhbnNkdWNlciBpcyBkaXJlY3RseSBhc3NvY2lhdGVkIHdpdGggYVxuICogY2hhbm5lbC4gV2hlbiBhIHZhbHVlIGlzIHNlbnQgdG8gdGhlIGNoYW5uZWwsIGl0J3MgZmlyc3QgcnVuIHRocm91Z2ggdGhlXG4gKiB0cmFuc2R1Y2VyIGFuZCB0aGUgdHJhbnNmb3JtZWQgdmFsdWUgaXMgdGhlIG9uZSBhY3R1YWxseSBwdXQgaW50byB0aGVcbiAqIGNoYW5uZWwncyBidWZmZXIuIFRoaXMgYXZvaWRzIGJvdGggb2YgdGhlIHByb2JsZW1zIG5vdGVkIGFib3ZlLlxuICpcbiAqIEBtb2R1bGUgY2hhbmtvL2NoYW5uZWxcbiAqL1xuXG5pbXBvcnQge1xuICBDTE9TRUQsXG4gIGNoYW5uZWwgYXMgY2hhbkltcGwsXG4gIGhhbmRsZVNlbmQsXG4gIGhhbmRsZVJlY3YsXG4gIGNsb3NlIGFzIGNsb3NlSW1wbCxcbiAgTUFYX0RJUlRZLFxuICBNQVhfUVVFVUVEXG59IGZyb20gXCIuL2hhbmRsZXJcIjtcbmltcG9ydCB7IERFRkFVTFQsIHNlbGVjdCwgc2VsZWN0QXN5bmMsIHZhbHVlLCBjaGFubmVsIH0gZnJvbSBcIi4vc2VsZWN0XCI7XG5pbXBvcnQgeyBhZGQsIGZpeGVkLCBpc0J1ZmZlciB9IGZyb20gXCJtb2R1bGVzL2J1ZmZlclwiO1xuaW1wb3J0IHsgcHJvdG9jb2xzIGFzIHAgfSBmcm9tIFwibW9kdWxlcy9wcm90b2NvbFwiO1xuXG4vKipcbiAqIEEgaGFuZGxlciBmdW5jdGlvbiBmb3IgZXhjZXB0aW9ucyB0aGF0IGFyZSB0aHJvd24gYnkgYSB0cmFuc2R1Y2VyIHdoaWxlXG4gKiB0cmFuc2Zvcm1pbmcgdmFsdWVzIG9uIGEgY2hhbm5lbC5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gZXJyIFRoZSBlcnJvciBvYmplY3QgdGhhdCB3YXMgdGhyb3duIGJ5IHRoZSB0cmFuc2R1Y2VyLlxuICogQHJldHVybiB7Kn0gQSB2YWx1ZSB0aGF0IHNob3VsZCBiZSBwdXQgaW50byB0aGUgY2hhbm5lbCdzIGJ1ZmZlciB3aGVuIHRoZVxuICogICAgIHRyYW5zZHVjZXIgdGhyb3dzIHRoZSBlcnJvci4gSWYgdGhpcyB2YWx1ZSBpc1xuICogICAgIHtAbGluayBtb2R1bGU6Y2hhbmtvfkNoYW5rby5DTE9TRUR8Q0xPU0VEfSwgdGhlbiBubyB2YWx1ZSBhdCBhbGwgd2lsbCBiZVxuICogICAgIGFkZGVkIHRvIHRoZSBidWZmZXIuXG4gKiBAY2FsbGJhY2sgRXhjZXB0aW9uSGFuZGxlclxuICogQHByaXZhdGVcbiAqL1xuXG4vKipcbiAqIFRoZSBkZWZhdWx0IGV4Y2VwdGlvbiBoYW5kbGVyLCB1c2VkIHdoZW4gbm8gZXhjZXB0aW9uIGhhbmRsZXIgaXMgc3VwcGxpZWQgdG9cbiAqIGB7QGxpbmsgaGFuZGxlRXhjZXB0aW9ufWAsIGB7QGxpbmsgd3JhcFRyYW5zZm9ybWVyfWAsXG4gKiBge0BsaW5rIG1vZHVsZTpjaGFua29+Q2hhbmtvLmNoYW58Y2hhbn1gLCBvclxuICogYHtAbGluayBtb2R1bGU6Y2hhbmtvfkNoYW5rby50cmFuc0NoYW58dHJhbnNDaGFufWAuIFRoaXMgZGVmYXVsdCBoYW5kbGVyXG4gKiBtZXJlbHkgcmV0dXJucyBge0BsaW5rIG1vZHVsZTpjaGFua29+Q2hhbmtvLkNMT1NFRHxDTE9TRUR9YCwgd2hpY2ggd2lsbFxuICogcmVzdWx0IGluIG5vIG5ldyB2YWx1ZSBiZWluZyB3cml0dGVuIHRvIHRoZSBjaGFubmVsLlxuICpcbiAqIEB0eXBlIHttb2R1bGU6Y2hhbmtvfmV4Y2VwdGlvbkhhbmRsZXJ9XG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNoYW5rby9jaGFubmVsXG4gKiBAcHJpdmF0ZVxuICovXG5jb25zdCBERUZBVUxUX0hBTkRMRVIgPSAoKSA9PiBDTE9TRUQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBoYW5kbGVyIHVzZWQgZm9yIGBzZW5kYCBhbmQgYHJlY3ZgIG9wZXJhdGlvbnMuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjaGFua28vY2hhbm5lbFxuICogQHBhcmFtIHttb2R1bGU6Y2hhbmtvL2NoYW5uZWx+SGFuZGxlckNhbGxiYWNrfSBmbiBUaGUgY2FsbGJhY2sgdG8gYmUgcnVuIHdoZW5cbiAqICAgICAoYW5kIGlmKSB0aGUgb3BlcmF0aW9uIGNvbXBsZXRlcy5cbiAqIEByZXR1cm4ge21vZHVsZTpjaGFua28vY2hhbm5lbH5IYW5kbGVyfSBUaGUgbmV3IGhhbmRsZXIuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBvcEhhbmRsZXIoZm4pIHtcbiAgcmV0dXJuIE9iamVjdC5jcmVhdGUobnVsbCwge1xuICAgIGFjdGl2ZToge1xuICAgICAgdmFsdWU6IHRydWVcbiAgICB9LFxuICAgIGNvbW1pdDoge1xuICAgICAgdmFsdWU6ICgpID0+IGZuXG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBIYW5kbGVzIGFuIGV4Y2VwdGlvbiB0aGF0IGlzIHRocm93biBpbnNpZGUgYSB0cmFuc2R1Y2VyLiBUaGUgdGhyb3duIGVycm9yIGlzXG4gKiBwYXNzZWQgdG8gdGhlIGBoYW5kbGVyYCBmdW5jdGlvbiwgYW5kIHRoZSByZXN1bHQgb2YgdGhhdCBoYW5kbGVyIGZ1bmN0aW9uIGlzXG4gKiBhZGRlZCB0byB0aGUgY2hhbm5lbCdzIGJ1ZmZlci4gSWYgdGhhdCB2YWx1ZSBpc1xuICoge0BsaW5rIG1vZHVsZTpjaGFua29+Q2hhbmtvLkNMT1NFRHxDTE9TRUR9LCB0aGVuIGl0IGlzICpub3QqIGFkZGVkIHRvIHRoZVxuICogYnVmZmVyLlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOmNoYW5rby9idWZmZXJzfkJ1ZmZlcn0gYnVmZmVyIFRoZSBidWZmZXIgdGhhdCBiYWNrcyB0aGVcbiAqICAgICBjaGFubmVsIHdob3NlIHRyYW5zZHVjZXIncyBleGNlcHRpb25zIGFyZSBiZWluZyBoYW5kbGVkLlxuICogQHBhcmFtIHttb2R1bGU6Y2hhbmtvL2NoYW5uZWx+ZXhjZXB0aW9uSGFuZGxlcn0gaGFuZGxlciBUaGUgZXhjZXB0aW9uXG4gKiAgICAgaGFuZGxpbmcgZnVuY3Rpb24gdGhhdCBpcyBydW4gd2hlbiBhbiBlcnJvciBvY2N1cnMgaW4gYSB0cmFuc2R1Y2VyLlxuICogQHBhcmFtICB7T2JqZWN0fSBleCBUaGUgZXJyb3Igb2JqZWN0IHRocm93biBieSB0aGUgdHJhbnNkdWNlci5cbiAqIEByZXR1cm4ge21vZHVsZTpjaGFua28vYnVmZmVyc35CdWZmZXJ9IFRoZSBidWZmZXIgaXRzZWxmLiBUaGlzIGlzIGRvbmUgdG9cbiAqICAgICBtYWtlIGl0IGVhc2llciB0byBpbnRlZ3JhdGUgdGhpcyBmdW5jdGlvbiBpbnRvIGEgdHJhbnNkdWNlcidzIHN0ZXBcbiAqICAgICBmdW5jdGlvbi5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGhhbmRsZUV4Y2VwdGlvbihidWZmZXIsIGhhbmRsZXIsIGV4KSB7XG4gIGNvbnN0IHZhbHVlID0gaGFuZGxlcihleCk7XG4gIGlmICh2YWx1ZSAhPT0gQ0xPU0VEKSB7XG4gICAgYWRkKGJ1ZmZlciwgdmFsdWUpO1xuICB9XG4gIHJldHVybiBidWZmZXI7XG59XG5cbi8qKlxuICogQSB0cmFuc2R1Y2VyIHRoYXQgd3JhcHMgYW5vdGhlciB0cmFuc2R1Y2VyIHdpdGggZXJyb3IgaGFuZGxpbmcgY29kZS4gQW55XG4gKiBlcnJvciB0aGF0IG9jY3VycyB3aXRoaW4gdGhlIHRyYW5zZHVjZXIsIGVpdGhlciBpbiB0aGUgc3RlcCBmdW5jdGlvbiBvciB0aGVcbiAqIHJlc3VsdCBmdW5jdGlvbiwgd2lsbCBjYXVzZSB0aGUgZXJyb3IgaGFuZGxlciB0byBiZSBydW4uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHhmb3JtIFRoZSB0cmFuc2R1Y2VyIHRvIGFkZCBhbiBlcnJvciBoYW5kbGVyIHRvLlxuICogQHBhcmFtIHtFeGNlcHRpb25IYW5kbGVyfSBbaGFuZGxlcj1ERUZBVUxUX0hBTkRMRVJdIFRoZSBleGNlcHRpb24gaGFuZGxpbmdcbiAqICAgICBmdW5jdGlvbiB0aGF0IGlzIHJ1biB3aGVuIGFuIGVycm9yIG9jY3VycyBpbiB0aGUgdHJhbnNkdWNlci5cbiAqIEByZXR1cm4ge09iamVjdH0gQSBuZXcgdHJhbnNkdWNlciB0aGF0IGlzIHRoZSByZXN1bHQgb2Ygd3JhcHBpbmcgdGhlIHByb3ZpZGVkXG4gKiAgICAgdHJhbnNkdWNlcidzIHN0ZXAgYW5kIHJlc3VsdCBmdW5jdGlvbnMgd2l0aCB0aGUgZXhjZXB0aW9uIGhhbmRsZXIuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBoYW5kbGVyVHJhbnNkdWNlcih4Zm9ybSwgaGFuZGxlciA9IERFRkFVTFRfSEFORExFUikge1xuICByZXR1cm4ge1xuICAgIFtwLnN0ZXBdKGJ1ZmZlciwgaW5wdXQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiB4Zm9ybVtwLnN0ZXBdKGJ1ZmZlciwgaW5wdXQpO1xuICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgcmV0dXJuIGhhbmRsZUV4Y2VwdGlvbihidWZmZXIsIGhhbmRsZXIsIGV4KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgW3AucmVzdWx0XShidWZmZXIpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiB4Zm9ybVtwLnJlc3VsdF0oYnVmZmVyKTtcbiAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgIHJldHVybiBoYW5kbGVFeGNlcHRpb24oYnVmZmVyLCBoYW5kbGVyLCBleCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuXG4vKipcbiAqIFRoZSByZWR1Y2VyIHVzZWQgYXQgdGhlIGVuZCBvZiBhIHRyYW5zZHVjZXIgY2hhaW4gdG8gY29udHJvbCBob3cgdGhlXG4gKiB0cmFuc2Zvcm1lZCB2YWx1ZXMgYXJlIHJlZHVjZWQgYmFjayBvbnRvIHRoZSBjaGFubmVsJ3MgYnVmZmVyLiBUaGlzIHJlZHVjZXJcbiAqIGRvZXMgbm90aGluZyBtb3JlIHRoYW4gYWRkIHRoZSBpbnB1dCBpdGVtcyAod2hpY2ggYXJlIHRoZSB0cmFuc2Zvcm1lZCB2YWx1ZXNcbiAqIHRoYXQgYXJlIGJlaW5nIHB1dCBvbnRvIHRoZSBjaGFubmVsKSB0byB0aGUgY2hhbm5lbCBidWZmZXIuXG4gKlxuICogVGhpcyBpcyBhIG5lY2Vzc2FyeSBwYXJ0IG9mIHdvcmtpbmcgd2l0aCBhIHRyYW5zZHVjZXIsIGFzIHRoZSBmaW5hbCByZWR1Y2VyXG4gKiBhbHdheXMgdGFrZXMgdGhlIHRyYW5zZm9ybWVkIHZhbHVlcyBhbmQgcmVuZGVycyB0aGVtIGludG8gd2hhdGV2ZXIgY29sbGVjdGlvblxuICogaXMgZGVzaXJlZC4gVGhpcyBpcyB0aGF0IGZpbmFsIHJlZHVjZXIgZm9yIGNoYW5uZWxzLlxuICpcbiAqIEB0eXBlIHtPYmplY3R9XG4gKiBAcHJpdmF0ZVxuICovXG5jb25zdCBidWZmZXJSZWR1Y2VyID0ge1xuICBbcC5pbml0XSgpIHtcbiAgICB0aHJvdyBFcnJvcihcImluaXQgbm90IGF2YWlsYWJsZVwiKTtcbiAgfSxcblxuICBbcC5zdGVwXShidWZmZXIsIGlucHV0KSB7XG4gICAgYWRkKGJ1ZmZlciwgaW5wdXQpO1xuICAgIHJldHVybiBidWZmZXI7XG4gIH0sXG5cbiAgW3AucmVzdWx0XShidWZmZXIpIHtcbiAgICByZXR1cm4gYnVmZmVyO1xuICB9XG59O1xuXG4vKipcbiAqIFBhcnNlcyB0aGUgYnVmZmVyIGFyZ3VtZW50IGFuZCBvcHRpb25zLCBhbG9uZyB3aXRoIGEgc2V0IG9mIGRlZmF1bHQgb3B0aW9ucyxcbiAqIHRvIGZpZ3VyZSBvdXQgd2hhdCB3YXMgcmVhbGx5IHBhc3NlZCB0b1xuICogYHtAbGluayBtb2R1bGU6Y2hhbmtvfkNoYW5rby5jaGFufGNoYW59YC5cbiAqXG4gKiBAcGFyYW0geyhudWxsfG51bWJlcnxtb2R1bGU6Y2hhbmtvL2J1ZmZlcn5CdWZmZXIpfSBidWZmZXIgVGhlIGJ1ZmZlciBhcmd1bWVudFxuICogICAgIHBhc3NlZCB0byBge0BsaW5rIG1vZHVsZTpjaGFua29+Q2hhbmtvLmNoYW58Y2hhbn1gLlxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgVGhlIG9wdGlvbnMgYXJndW1lbnQgcGFzc2VkIHRvXG4gKiAgICAgYHtAbGluayBtb2R1bGU6Y2hhbmtvfkNoYW5rby5jaGFufGNoYW59YC5cbiAqIEBwYXJhbSB7b2JqZWN0fSBkZWZhdWx0T3B0aW9ucyBEZWZhdWx0IHZhbHVlcyBmb3Igb3B0aW9ucyB0aGF0IG1pZ2h0IG5vdCBoYXZlXG4gKiAgICAgYmVlbiBzZW50IHRvIGB7QGxpbmsgbW9kdWxlOmNoYW5rb35DaGFua28uY2hhbnxjaGFufWAuXG4gKiBAcmV0dXJuIHtvYmplY3R9IEFuIG9iamVjdCBjb250YWluaW5nIHRoZSBwcm9jZXNzZWQgdmFsdWVzIG9mIGFsbCBvZiB0aGVcbiAqICAgICBhcmd1bWVudHMgc2VudCB0byBge0BsaW5rIG1vZHVsZTpjaGFua29+Q2hhbmtvLmNoYW58Y2hhbn1gLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gcGFyc2VBcmdzKGJ1ZmZlciwgb3B0aW9ucywgZGVmYXVsdE9wdGlvbnMpIHtcbiAgbGV0IGJ1ZjtcbiAgbGV0IG9wdHM7XG5cbiAgaWYgKCFidWZmZXIpIHtcbiAgICAvLyBzYW1lIGZvciAwLCBudWxsLCBvciB1bmRlZmluZWRcbiAgICBidWYgPSBudWxsO1xuICAgIG9wdHMgPSBvcHRpb25zO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBidWZmZXIgPT09IFwibnVtYmVyXCIpIHtcbiAgICBidWYgPSBmaXhlZChidWZmZXIpO1xuICAgIG9wdHMgPSBvcHRpb25zO1xuICB9IGVsc2UgaWYgKGlzQnVmZmVyKGJ1ZmZlcikpIHtcbiAgICBidWYgPSBidWZmZXI7XG4gICAgb3B0cyA9IG9wdGlvbnM7XG4gIH0gZWxzZSB7XG4gICAgLy8gSWYgbm8gYnVmZmVyIGlzIHNwZWNpZmllZCBidXQgYSB0cmFuc2R1Y2VyIGlzLCB3ZSBhc3N1bWUgZml4ZWQoMSlcbiAgICAvLyBpbnN0ZWFkIG9mIG5vIGJ1ZmZlclxuICAgIGJ1ZiA9IGJ1ZmZlcj8udHJhbnNkdWNlciA/IGZpeGVkKDEpIDogbnVsbDtcbiAgICBvcHRzID0gYnVmZmVyO1xuICB9XG5cbiAgY29uc3QgeyB0cmFuc2R1Y2VyLCBoYW5kbGVyLCBtYXhEaXJ0eSwgbWF4UXVldWVkLCB0aW1lciB9ID0gT2JqZWN0LmFzc2lnbihcbiAgICB7fSxcbiAgICBkZWZhdWx0T3B0aW9ucyxcbiAgICBvcHRzXG4gICk7XG4gIHJldHVybiB7IGJ1ZiwgdHJhbnNkdWNlciwgaGFuZGxlciwgbWF4RGlydHksIG1heFF1ZXVlZCwgdGltZXIgfTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuZCByZXR1cm5zIGEgbmV3IGNoYW5uZWwuXG4gKlxuICogQnkgZGVmYXVsdCB0aGlzIGNoYW5uZWwgd2lsbCBiZSBhIHNpbXBsZSB1bmJ1ZmZlcmVkLCB1bnRyYW5zZm9ybWVkIGNoYW5uZWwsXG4gKiBidXQgdGhhdCBjYW4gYmUgY2hhbmdlZCB0aHJvdWdoIG9wdGlvbnMuIEEgY2hhbm5lbCBkb2VzIG5vdCBoYXZlIGFueVxuICogZXh0ZXJuYWxseSB1c2VmdWwgZnVuY3Rpb25zLiBJdCBleGlzdHMgbGFyZ2VseSB0byBiZSBwYXNzZWQgaW50b1xuICogYHtAbGluayBtb2R1bGU6Y2hhbmtvfkNoYW5rby5zZW5kfHNlbmR9YCxcbiAqIGB7QGxpbmsgbW9kdWxlOmNoYW5rb35DaGFua28ucmVjdnxyZWN2fWAsIGFuZFxuICogYHtAbGluayBtb2R1bGU6Y2hhbmtvfkNoYW5rby5zZWxlY3R8c2VsZWN0fWAgaW52b2NhdGlvbnMsIGFsb25nIHdpdGggdGhlaXJcbiAqIG5vbi1ibG9ja2luZyB2YXJpYXRpb25zIChge0BsaW5rIG1vZHVsZTpjaGFua29+Q2hhbmtvLnNlbmRBc3luY3xzZW5kQXN5bmN9YCxcbiAqIGB7QGxpbmsgbW9kdWxlOmNoYW5rb35DaGFua28ucmVjdkFzeW5jfHJlY3ZBc3luY31gLCBhbmRcbiAqIGB7QGxpbmsgbW9kdWxlOmNoYW5rb35DaGFua28uc2VsZWN0QXN5bmN8c2VsZWN0QXN5bmN9YCkuXG4gKlxuICogSWYgYSBidWZmZXIgdmFsdWUgaXMgcHJvdmlkZWQsIGl0IGRlZmluZXMgd2hhdCBidWZmZXIgc2hvdWxkIGJhY2sgdGhlXG4gKiBjaGFubmVsLiBJZiB0aGlzIGlzIGBudWxsYCBvciBgMGAsIHRoZSBjaGFubmVsIHdpbGwgYmUgdW5idWZmZXJlZC4gSWYgaXQncyBhXG4gKiBwb3NpdGl2ZSBudW1iZXIsIHRoZSBjaGFubmVsIHdpbGwgYmUgYnVmZmVyZWQgYnkgYVxuICogYHtAbGluayBtb2R1bGU6Y2hhbmtvL2J1ZmZlcn5GaXhlZEJ1ZmZlcnxGaXhlZEJ1ZmZlcn0gYG9mIHRoYXQgc2l6ZS4gSWYgaXQncyBhXG4gKiBge0BsaW5rIG1vZHVsZTpjaGFua28vYnVmZmVyLkJ1ZmZlcnxCdWZmZXJ9YCBvYmplY3QsIHRoYXQgb2JqZWN0IHdpbGwgYmUgdXNlZFxuICogYXMgdGhlIGNoYW5uZWwncyBidWZmZXIuIElmIGl0J3MgbWlzc2luZyBhbHRvZ2V0aGVyLCB0aGUgY2hhbm5lbCB3aWxsIGJlXG4gKiB1bmJ1ZmZlcmVkIHVubGVzcyBhIGB0cmFuc2R1Y2VyYCBvcHRpb24gaXMgcHJvdmlkZWQgKHNlZSBiZWxvdyksIGluIHdoaWNoXG4gKiBjYXNlIGl0IHdpbGwgYmUgYSBge0BsaW5rIG1vZHVsZTpjaGFua28vYnVmZmVyfkZpeGVkQnVmZmVyfEZpeGVkQnVmZmVyfWAgb2ZcbiAqIHNpemUgMS5cbiAqXG4gKiBgY2hhbmAgc3VwcG9ydHMgdHJhbnNkdWNlcnMgYnkgYWxsb3dpbmcgYSB0cmFuc2R1Y2VyIGZ1bmN0aW9uIHRvIGJlXG4gKiBhc3NvY2lhdGVkIHdpdGggaXQuIFRoaXMgaXMgcGFzc2VkIGFzIHRoZSBgdHJhbnNkdWNlcmAgb3B0aW9uIGFuZCBjYW4gb25seSBiZVxuICogdXNlZCBpZiB0aGUgY2hhbm5lbCBpcyBidWZmZXJlZCAob3RoZXJ3aXNlIGFuIGVycm9yIGlzIHRocm93bikuIFRoaXNcbiAqIHRyYW5zZHVjZXIgZnVuY3Rpb24gbXVzdCB0YWtlIGFub3RoZXIgdHJhbnNkdWNlciBhcyBhIHBhcmFtZXRlciAoYWxsb3dpbmdcbiAqIHRyYW5zZm9ybWVycyB0byBiZSBjaGFpbmVkKSwgYW5kIGl0IG11c3QgcmV0dXJuIGFuIG9iamVjdCBjb25mb3JtaW5nIHRvIHRoZVxuICogdHJhbnNkdWNlciBwcm90b2NvbC5cbiAqXG4gKiBFcnJvcnMgaW4gdGhlIHRyYW5zZm9ybWF0aW9uIHByb2Nlc3MgY2FuIGJlIGhhbmRsZWQgYnkgcGFzc2luZyBhbiBlcnJvclxuICogaGFuZGxlci4gVGhpcyBpcyBhIGZ1bmN0aW9uIHRoYXQgZXhwZWN0cyB0byByZWNlaXZlIGFuIGVycm9yIG9iamVjdCBhcyBhXG4gKiBwYXJhbWV0ZXIgYW5kIGNhbiByZXR1cm4gYSB2YWx1ZSB0aGF0IGlzIHRoZW4gcHV0IG9udG8gdGhlIGNoYW5uZWwuIElmIHRoaXNcbiAqIHZhbHVlIGlzIGB7QGxpbmsgbW9kdWxlOmNoYW5rb35DaGFua28uQ0xPU0VEfENMT1NFRH1gLCB0aGVuIG5vIHZhbHVlIHdpbGwgYmVcbiAqIHB1dCBvbnRvIHRoZSBjaGFubmVsIHVwb24gaGFuZGxlciBjb21wbGV0aW9uLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y2hhbmtvfkNoYW5rb1xuICogQHBhcmFtIHsobnVtYmVyfG1vZHVsZTpjaGFua28vYnVmZmVyLkJ1ZmZlcil9IFtidWZmZXJdIFRoZSBidWZmZXIgb2JqZWN0XG4gKiAgICAgdGhhdCBzaG91bGQgYmFjayB0aGlzIGNoYW5uZWwuIElmIHRoaXMgaXMgYSBwb3NpdGl2ZSBudW1iZXIsIGEgZml4ZWRcbiAqICAgICBidWZmZXIgb2YgdGhhdCBzaXplIHdpbGwgYmUgY3JlYXRlZCB0byBiYWNrIHRoZSBjaGFubmVsLiBJZiBpdCBpcyBgMGAgb3JcbiAqICAgICBgbnVsbGAsIHRoZSBuZXcgY2hhbm5lbCB3aWxsIGJlIHVuYnVmZmVyZWQuIElmIGl0J3Mgbm90IHByZXNlbnQsIHRoZSBuZXdcbiAqICAgICBjaGFubmVsIHdpbGwgYmUgdW5idWZmZXJlZCB1bmxlc3MgdGhlcmUgaXMgYSBgdHJhbnNkdWNlcmAgb3B0aW9uLCBpbiBpblxuICogICAgIHdoaWNoIGNhc2UgaXQgd2lsbCBiZSBidWZmZXJlZCB3aXRoIGEgc2l6ZSAxXG4gKiAgICAgYHtAbGluayBtb2R1bGU6Y2hhbmtvL2J1ZmZlcn5GaXhlZEJ1ZmZlcnxGaXhlZEJ1ZmZlcn1gLlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSBBIHNldCBvZiBvcHRpb25zIGZvciBjb25maWd1cmluZyB0aGUgY2hhbm5lbCdzXG4gKiAgICAgcXVldWUuXG4gKiBAcGFyYW0ge21vZHVsZTpjaGFua29+dHJhbnNkdWNlcn0gW29wdGlvbnMudHJhbnNkdWNlcl0gQSB0cmFuc2R1Y2VyIHRvIHJ1blxuICogICAgIGVhY2ggdmFsdWUgdGhyb3VnaCBiZWZvcmUgcHV0dGluZyBpdCBvbnRvIHRoZSBjaGFubmVsLiBUaGlzIGZ1bmN0aW9uXG4gKiAgICAgc2hvdWxkIGV4cGVjdCBvbmUgcGFyYW1ldGVyIChhbm90aGVyIHRyYW5zZHVjZXIgdGhhdCBpdCdzIGNoYWluZWQgdG8pIGFuZFxuICogICAgIHJldHVybiBhbiBvYmplY3QgdGhhdCBjb25mb3JtcyB0byB0aGUgdHJhbnNkdWNlciBwcm90b2NvbC4gSWYgYVxuICogICAgIHRyYW5zZHVjZXIgaXMgcHJvdmlkZWQgb24gYW4gdW5idWZmZXJlZCBjaGFubmVsLCBhbiBlcnJvciB3aWxsIGJlIHRocm93bi5cbiAqIEBwYXJhbSB7bW9kdWxlOmNoYW5rb35leGNlcHRpb25IYW5kbGVyfSBbb3B0aW9ucy5oYW5kbGVyXSBBbiBlcnJvciBoYW5kbGVyXG4gKiAgICAgdGhhdCBpcyBydW4gd2hlbmV2ZXIgYW4gZXJyb3Igb2NjdXJzIGluc2lkZSBhIHRyYW5zZHVjZXIgZnVuY3Rpb24uIElmXG4gKiAgICAgdGhhdCBoYXBwZW5zLCB0aGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCB3aXRoIG9uZSBwYXJhbWV0ZXIsIHdoaWNoIGlzIHRoZVxuICogICAgIGVycm9yIG9iamVjdC4gVGhlIHZhbHVlIHRoYXQgdGhlIGhhbmRsZXIgcmV0dXJucyAoaWYgaXQgaXMgbm90XG4gKiAgICAgYHtAbGluayBtb2R1bGU6Y2hhbmtvfkNoYW5rby5DTE9TRUR8Q0xPU0VEfWApIHdpbGwgYmUgcHV0IG9udG8gdGhlXG4gKiAgICAgY2hhbm5lbCB3aGVuIHRoZSBoYW5kbGVyIGZpbmlzaGVzIHJ1bm5pbmcuXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMubWF4RGlydHk9NjRdIFRoZSBtYXhpbXVtIG51bWJlciBvZiBkaXJ0eSBvcGVyYXRpb25zXG4gKiAgICAgdGhhdCBjYW4gYmUgaW4gdGhlIHF1ZXVlIGJlZm9yZSB0aG9zZSBvcGVyYXRpb25zIGFyZSBzdWJqZWN0IHRvIGJlaW5nXG4gKiAgICAgcHVyZ2VkLiBEaXJ0eSBvcGVyYXRpb25zIGFyZSB0aG9zZSB0aGF0IG1heSBub3QgYmUgdmFsaWQgYW55bW9yZSBiZWNhdXNlXG4gKiAgICAgdGhleSB3ZXJlIGluIHRoZSBsaXN0IG9mIG9wZXJhdGlvbnMgcGFzc2VkIHRvXG4gKiAgICAgYHtAbGluayBtb2R1bGU6Y2hhbmtvfkNoYW5rby5zZWxlY3R8c2VsZWN0fWAgb3JcbiAqICAgICBge0BsaW5rIG1vZHVsZTpjaGFua29+Q2hhbmtvLnNlbGVjdEFzeW5jfHNlbGVjdEFzeW5jfWAgYnV0IHdlcmUgbm90XG4gKiAgICAgY2hvc2VuIHRvIHJ1bi4gVGhpcyBwcm92aWRlcyBhIGNoYW5jZSBmb3IgYSB2ZXJ5IG1pbm9yIHBlcmZvcm1hbmNlIHR3ZWFrXG4gKiAgICAgYW5kIGlzIGJlc3QgbGVmdCBhbG9uZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5tYXhRdWV1ZWQ9MTAyNF0gVGhlIG1heGltdW0gbnVtYmVyIG9mIG9wZXJhdGlvbnNcbiAqICAgICB0aGF0IGNhbiBiZSBxdWV1ZWQgdXAgYXQgdGhlIHNhbWUgdGltZS4gVGhpcyBwcmV2ZW50cyBpbmZpbml0ZSBsb29wcyBmcm9tXG4gKiAgICAgYWNjaWRlbnRhbGx5IGVhdGluZyB1cCBhbGwgb2YgdGhlIGF2YWlsYWJsZSBtZW1vcnkuXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMudGltZXJdIElmIHRoaXMgdmFsdWUgaXMgcHJlc2VudCwgdGhlIGNoYW5uZWwgd2lsbFxuICogICAgIGJlIGEgdGltZWQgY2hhbm5lbCB0aGF0IGNsb3NlcyBhdXRvbWF0aWNhbGx5IGFmdGVyIHRoaXMgbnVtYmVyIG9mXG4gKiAgICAgbWlsbGlzZWNvbmRzLlxuICogQHJldHVybiB7bW9kdWxlOmNoYW5rby9jaGFubmVsLkNoYW5uZWx9IEEgbmV3IGNoYW5uZWwuXG4gKi9cbmZ1bmN0aW9uIGNoYW4oYnVmZmVyLCBvcHRpb25zKSB7XG4gIGNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICAgIG1heERpcnR5OiBNQVhfRElSVFksXG4gICAgbWF4UXVldWVkOiBNQVhfUVVFVUVEXG4gIH07XG4gIGNvbnN0IHsgYnVmLCB0cmFuc2R1Y2VyLCBoYW5kbGVyLCBtYXhEaXJ0eSwgbWF4UXVldWVkLCB0aW1lciB9ID0gcGFyc2VBcmdzKFxuICAgIGJ1ZmZlcixcbiAgICBvcHRpb25zLFxuICAgIGRlZmF1bHRPcHRpb25zXG4gICk7XG5cbiAgaWYgKHRyYW5zZHVjZXIgJiYgIWJ1Zikge1xuICAgIHRocm93IEVycm9yKFwiT25seSBidWZmZXJlZCBjaGFubmVscyBjYW4gdXNlIHRyYW5zZHVjZXJzXCIpO1xuICB9XG5cbiAgY29uc3QgeGYgPSBoYW5kbGVyVHJhbnNkdWNlcihcbiAgICB0cmFuc2R1Y2VyID8gdHJhbnNkdWNlcihidWZmZXJSZWR1Y2VyKSA6IGJ1ZmZlclJlZHVjZXIsXG4gICAgaGFuZGxlclxuICApO1xuXG4gIGNvbnN0IGlzVGltZWQgPSB0eXBlb2YgdGltZXIgPT09IFwibnVtYmVyXCI7XG5cbiAgY29uc3QgY2ggPSBjaGFuSW1wbChidWYsIHhmLCBpc1RpbWVkLCBtYXhEaXJ0eSwgbWF4UXVldWVkKTtcblxuICBhc3luYyBmdW5jdGlvbiogaXRlcmF0b3IoKSB7XG4gICAgZm9yICg7Oykge1xuICAgICAgY29uc3QgdmFsdWUgPSBhd2FpdCByZWN2KGNoKTtcbiAgICAgIGlmICh2YWx1ZSA9PT0gQ0xPU0VEKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgeWllbGQgdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgY2hbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gaXRlcmF0b3I7XG5cbiAgaWYgKGlzVGltZWQpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IGNsb3NlSW1wbChjaCksIHRpbWVyKTtcbiAgfVxuXG4gIHJldHVybiBjaDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuIHVuYnVmZmVyZWQsIHRpbWVkIGNoYW5uZWwuIFRoaXMgY2hhbm5lbCBjbG9zZXMgYXV0b21hdGljYWxseSBhZnRlclxuICogdGhlIHN1cHBsaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgYW5kIGlzIHRoZSBlcXVpdmFsZW50IG9mIGNhbGxpbmcgYGNoYW4oMCxcbiAqIHsgdGltZXI6IGRlbGF5IH0pYC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNoYW5rb35DaGFua29cbiAqIEBwYXJhbSB7bnVtYmVyfSBkZWxheSBUaGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBhZnRlciB0aGUgY2hhbm5lbCBpcyBjcmVhdGVkXG4gKiAgICAgdGhhdCBpdCB3aWxsIGJlIGNsb3NlZCBhdXRvbWF0aWNhbGx5LlxuICogQHJldHVybiB7bW9kdWxlOmNoYW5rby9jaGFubmVsLkNoYW5uZWx9IEEgbmV3IHRpbWVkIGNoYW5uZWwuXG4gKi9cbmZ1bmN0aW9uIHRpbWVkQ2hhbihkZWxheSA9IDApIHtcbiAgcmV0dXJuIGNoYW4oeyB0aW1lcjogZGVsYXkgfSk7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGJ1ZmZlcmVkIGNoYW5uZWwgd2l0aCBhIHRyYW5zZHVjZXIgYW5kIG9wdGlvbmFsIGVycm9yIGhhbmRsZXIuIFRoZVxuICogYnVmZmVyIGZvciB0aGlzIGNoYW5uZWwgaXMgYVxuICogYHtAbGluayBtb2R1bGU6Y2hhbmtvL2J1ZmZlcnN+Rml4ZWRCdWZmZXJ8Rml4ZWRCdWZmZXJ9YCBvZiBzaXplIDEuIFRoaXMgaXNcbiAqIHRoZSBlcXVpdmFsZW50IG9mIGBjaGFuKDEsIHsgdHJhbnNkdWNlciwgaGFuZGxlciB9KWAuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjaGFua29+Q2hhbmtvXG4gKiBAcGFyYW0ge21vZHVsZTpjaGFua29+dHJhbnNkdWNlcn0gdHJhbnNkdWNlciBUaGUgdHJhbnNkdWNlciB1c2VkIHRvIHRyYW5zZm9ybVxuICogICAgIHZhbHVlcyBvbiB0aGUgbmV3IGNoYW5uZWwuXG4gKiBAcGFyYW0ge21vZHVsZTpjaGFua29+ZXhjZXB0aW9uSGFuZGxlcn0gW2hhbmRsZXJdIEFuIGV4Y2VwdGlvbiBoYW5kbGVyIGNhbGxlZFxuICogICAgIHdpdGggdGhlIGVycm9yIG9iamVjdCBhcyBpdHMgb25seSBhcmd1bWVudCB3aGVuIGFuIGVycm9yIGhhcHBlbnMgaW5zaWRlIGFcbiAqICAgICB0cmFuc2R1Y2VyLiBJZiB0aGlzIGlzIG5vdCBwcm92aWRlZCwgYSBkZWZhdWx0IGhhbmRsZXIgaXMgdXNlZCB0aGF0XG4gKiAgICAgc2ltcGx5IGRvZXMgbm90aGluZywgaW5jbHVkaW5nIHNlbmRpbmcgbm8gb3V0cHV0IGZyb20gdGhlIHZhbHVlIHRoYXRcbiAqICAgICBlcnJvcmVkLlxuICogQHJldHVybiB7bW9kdWxlOmNoYW5rby9jaGFubmVsLkNoYW5uZWx9IEEgbmV3IGNoYW5uZWwgd2l0aCBhIHRyYW5zZHVjZXIuXG4gKi9cbmZ1bmN0aW9uIHRyYW5zQ2hhbih0cmFuc2R1Y2VyLCBoYW5kbGVyKSB7XG4gIHJldHVybiBjaGFuKHsgdHJhbnNkdWNlciwgaGFuZGxlciB9KTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgYSBjaGFubmVsIGlzIGNsb3NlZC5cbiAqXG4gKiBBIGNsb3NlZCBjaGFubmVsIHdpbGwgY2F1c2UgYW55IGBzZW5kYCBvcGVyYXRpb24gdG8gcmV0dXJuIGBmYWxzZWAgYW5kIGFueVxuICogYHJlY3ZgIG9wZXJhdGlvbiB0byByZXR1cm4gYW55IGJ1ZmZlcmVkIGl0ZW1zIHRoYXQgcmVtYWluLCBmb2xsb3dlZCBieVxuICogYHtAbGluayBtb2R1bGU6Y2hhbmtvfkNoYW5rby5DTE9TRUR8Q0xPU0VEfS5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNoYW5rb35DaGFua29cbiAqIEBwYXJhbSB7bW9kdWxlOmNoYW5rby9jaGFubmVsLkNoYW5uZWx9IGNoYW5uZWwgVGhlIGNoYW5uZWwgdG8gY2hlY2suXG4gKiBAcmV0dXJuIHtib29sZWFufSBFaXRoZXIgYHRydWVgIGlmIHRoZSBjaGFubmVsIGlzIGNsb3NlZCBvciBgZmFsc2VgIGlmIGl0XG4gKiAgICAgaXNuJ3QuXG4gKi9cbmZ1bmN0aW9uIGlzQ2xvc2VkKGNoYW5uZWwpIHtcbiAgcmV0dXJuIGNoYW5uZWwuY2xvc2VkO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhIGNoYW5uZWwgaXMgYnVmZmVyZWQuXG4gKlxuICogQSBjaGFubmVsIGlzIGJ1ZmZlcmVkIGlmIGEgYnVmZmVyIG9yIGEgbnVtYmVyIHdhcyBwYXNzZWQgYXMgdGhlIGZpcnN0XG4gKiBhcmd1bWVudCBvZiBge0BsaW5rIG1vZHVsZTpjaGFua29+Q2hhbmtvLmNoYW58Y2hhbn1gIG9yIGlmIGEgdHJhbnNkdWNlciBpcyBhXG4gKiBwYXJ0IG9mIHRoZSBjaGFubmVsLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y2hhbmtvfkNoYW5rb1xuICogQHBhcmFtIHttb2R1bGU6Y2hhbmtvL2NoYW5uZWwuQ2hhbm5lbH0gY2hhbm5lbCBUaGUgY2hhbm5lbCB0byBjaGVjay5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IEVpdGhlciBgdHJ1ZWAgaWYgdGhlIGNoYW5uZWwgaXMgYnVmZmVyZWQgb3IgYGZhbHNlYCBpZiBpdFxuICogICAgIGlzbid0LlxuICovXG5mdW5jdGlvbiBpc0J1ZmZlcmVkKGNoYW5uZWwpIHtcbiAgcmV0dXJuIGNoYW5uZWwuaXNCdWZmZXJlZDtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgYSBjaGFubmVsIGlzIHRpbWVkLlxuICpcbiAqIEEgY2hhbm5lbCBpcyB0aW1lZCBpZiBpdCB3YXMgY3JlYXRlZCBlaXRoZXIgd2l0aCB0aGUgYHRpbWVyYCBvcHRpb24gb2ZcbiAqIGB7QGxpbmsgbW9kdWxlOmNoYW5rb35DaGFua28uY2hhbnxjaGFufWAgb3Igd2l0aCB0aGVcbiAqIGB7QGxpbmsgbW9kdWxlOmNoYW5rb35DaGFua28udGltZWRDaGFufHRpbWVkQ2hhbn1gIGZ1bmN0aW9uLiBJdCB3aWxsXG4gKiBhdXRvbWF0aWNhbGx5IGNsb3NlIGFmdGVyIGEgY2VydGFpbiBwZXJpb2Qgb2YgdGltZS5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNoYW5rb35DaGFua29cbiAqIEBwYXJhbSB7bW9kdWxlOmNoYW5rby9jaGFubmVsLkNoYW5uZWx9IGNoYW5uZWwgVGhlIGNoYW5uZWwgdG8gY2hlY2suXG4gKiBAcmV0dXJuIHtib29sZWFufSBFaXRoZXIgYHRydWVgIGlmIHRoZSBjaGFubmVsIGlzIHRpbWVkIG9yIGBmYWxzZWAgaWYgaXRcbiAqICAgICBpc24ndC5cbiAqL1xuZnVuY3Rpb24gaXNUaW1lZChjaGFubmVsKSB7XG4gIHJldHVybiBjaGFubmVsLmlzVGltZWQ7XG59XG5cbi8qKlxuICogU2VuZHMgYSB2YWx1ZSB0byB0aGlzIGNoYW5uZWwgd2l0aG91dCBibG9ja2luZy5cbiAqXG4gKiBUaGlzIG1lYW5zIHRoYXQgYSBjYWxsIHRvIGBzZW5kQXN5bmNgIGRvZXMgbm90IGdvIGludG8gYW4gYGF3YWl0YFxuICogZXhwcmVzc2lvbiwgYW5kIGl0IGlzIG5vdCBuZWNlc3NhcnkgdG8gdXNlIGl0IGluc2lkZSBhIGFzeW5jIGZ1bmN0aW9uLlxuICogUmF0aGVyIHRoYW4gYmxvY2tpbmcgdW50aWwgdGhlIHNlbnQgdmFsdWUgaXMgdGFrZW4gYnkgYW5vdGhlciBhc3luY1xuICogZnVuY3Rpb24sIHRoaXMgb25lIHJldHVybnMgaW1tZWRpYXRlbHkgYW5kIHRoZW4gaW52b2tlcyB0aGUgY2FsbGJhY2sgKGlmXG4gKiBwcm92aWRlZCkgd2hlbiB0aGUgc2VudCB2YWx1ZSBpcyB0YWtlbi4gSXQgY2FuIGJlIHNlZW4gYXMgYSBub24tYmxvY2tpbmdcbiAqIHZlcnNpb24gb2YgYHtAbGluayBtb2R1bGU6Y2hhbmtvfkNoYW5rby5zZW5kfHNlbmR9YC5cbiAqXG4gKiBXaGlsZSB0aGUgcHJpbWFyeSB1c2Ugb2YgdGhpcyBmdW5jdGlvbiBpcyB0byBzZW5kIHZhbHVlcyBvbnRvIGNoYW5uZWxzIGluXG4gKiBjb250ZXh0cyB3aGVyZSBiZWluZyBpbnNpZGUgYW4gYXN5bmMgZnVuY3Rpb24gaXMgaW1wb3NzaWJsZSAoZm9yIGV4YW1wbGUsXG4gKiBpbiBhIERPTSBlbGVtZW50J3MgZXZlbnQgaGFuZGxlciksIGl0IGNhbiBzdGlsbCBiZSB1c2VkIGluc2lkZSBhc3luY1xuICogZnVuY3Rpb25zIGF0IHRpbWVzIHdoZW4gaXQncyBpbXBvcnRhbnQgdG8gbWFrZSBzdXJlIHRoYXQgdGhlIGZ1bmN0aW9uXG4gKiBkb2Vzbid0IGJsb2NrIGZyb20gdGhlIHNlbmQuXG4gKlxuICogVGhlIGNhbGxiYWNrIGlzIGEgZnVuY3Rpb24gb2Ygb25lIHBhcmFtZXRlci4gVGhlIHBhcmFtZXRlciB0aGF0J3NcbiAqIHN1cHBsaWVkIHRvIHRoZSBjYWxsYmFjayBpcyB0aGUgc2FtZSBhcyB3aGF0IGlzIHN1cHBsaWVkIHRvIGBhd2FpdCBzZW5kYDpcbiAqIGB0cnVlYCBpZiB0aGUgdmFsdWUgd2FzIHRha2VuLCBvciBgZmFsc2VgIGlmIHRoZSBjaGFubmVsIHdhcyBjbG9zZWQuIElmXG4gKiB0aGUgY2FsbGJhY2sgaXNuJ3QgcHJlc2VudCwgbm90aGluZyB3aWxsIGhhcHBlbiBhZnRlciB0aGUgdmFsdWUgaXMgdGFrZW4uXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjaGFua29+Q2hhbmtvXG4gKiBAcGFyYW0geyp9IFt2YWx1ZV0gVGhlIHZhbHVlIGJlaW5nIHB1dCBvbnRvIHRoZSBjaGFubmVsLlxuICogQHBhcmFtIHttb2R1bGU6Y2hhbmtvfm9wQ2FsbGJhY2t9IFtjYWxsYmFja10gQSBmdW5jdGlvbiB0aGF0IGdldHMgaW52b2tlZFxuICogICAgIGVpdGhlciB3aGVuIHRoZSB2YWx1ZSBpcyB0YWtlbiBieSBhbm90aGVyIHByb2Nlc3Mgb3Igd2hlbiB0aGUgY2hhbm5lbFxuICogICAgIGlzIGNsb3NlZC4gVGhpcyBmdW5jdGlvbiBjYW4gdGFrZSBvbmUgcGFyYW1ldGVyLCB3aGljaCBpcyBgdHJ1ZWAgaW5cbiAqICAgICB0aGUgZm9ybWVyIGNhc2UgYW5kIGBmYWxzZWAgaW4gdGhlIGxhdHRlci5cbiAqL1xuZnVuY3Rpb24gc2VuZEFzeW5jKGNoYW5uZWwsIHZhbHVlLCBjYWxsYmFjayA9ICgpID0+IHt9KSB7XG4gIGNvbnN0IHJlc3VsdCA9IGhhbmRsZVNlbmQoY2hhbm5lbCwgdmFsdWUsIG9wSGFuZGxlcihjYWxsYmFjaykpO1xuICBpZiAocmVzdWx0ICYmIGNhbGxiYWNrKSB7XG4gICAgY2FsbGJhY2socmVzdWx0LnZhbHVlKTtcbiAgfVxufVxuXG4vKipcbiAqIFJlY2VpdmVzIGEgdmFsdWUgZnJvbSB0aGlzIGNoYW5uZWwgd2l0aG91dCBibG9ja2luZy5cbiAqXG4gKiBUaGlzIG1lYW5zIHRoYXQgYSBjYWxsIHRvIGByZWNlaXZlQXN5bmNgIGRvZXMgbm90IGdvIGludG8gYW4gYGF3YWl0YFxuICogZXhwcmVzc2lvbiwgYW5kIGl0IGlzIG5vdCBuZWNlc3NhcnkgdG8gdXNlIGl0IGluc2lkZSBhIGFzeW5jIGZ1bmN0aW9uLlxuICogUmF0aGVyIHRoYW4gYmxvY2tpbmcgdW50aWwgYSB2YWx1ZSBiZWNvbWVzIGF2YWlsYWJsZSBvbiB0aGUgY2hhbm5lbCB0byBiZVxuICogcmVjZWl2ZWQsIHRoaXMgb25lIHJldHVybnMgaW1tZWRpYXRlbHkgYW5kIHRoZW4gaW52b2tlcyB0aGUgY2FsbGJhY2sgKGlmXG4gKiBwcm92aWRlZCkgd2hlbiBhIHZhbHVlIGJlY29tZXMgYXZhaWxhYmxlLiBJdCBjYW4gYmUgcmVnYXJkZWQgYXMgYVxuICogbm9uLWJsb2NraW5nIHZlcnNpb24gb2Yge0BsaW5rIG1vZHVsZTpjaGFua29+Q2hhbmtvLnJlY3Z8cmVjdn1gLlxuICpcbiAqIFdoaWxlIHRoZSBwcmltYXJ5IHVzZSBvZiB0aGlzIGZ1bmN0aW9uIGlzIHRvIHJlY2VpdmUgdmFsdWVzIGZyb20gY2hhbm5lbHNcbiAqIGluIGNvbnRleHRzIHdoZXJlIGJlaW5nIGluc2lkZSBhbiBhc3luYyBmdW5jdGlvbiBpcyBpbXBvc3NpYmxlLCBpdCBjYW5cbiAqIHN0aWxsIGJlIHVzZWQgaW5zaWRlIGFzeW5jIGZ1bmN0aW9ucyBhdCB0aW1lcyB3aGVuIGl0J3MgaW1wb3J0YW50IHRoYXRcbiAqIHRoZSByZWNlaXZlIGRvZXNuJ3QgYmxvY2sgdGhlIGZ1bmN0aW9uLlxuICpcbiAqIFRoZSBjYWxsYmFjayBpcyBhIGZ1bmN0aW9uIG9mIG9uZSBwYXJhbWV0ZXIsIGFuZCB0aGUgdmFsdWUgc3VwcGxpZWQgZm9yXG4gKiB0aGF0IHBhcmFtZXRlciBpcyB0aGUgdmFsdWUgcmVjZWl2ZWQgZnJvbSB0aGUgY2hhbm5lbCAoZWl0aGVyIGEgdmFsdWVcbiAqIHRoYXQgd2FzIHNlbnQgb3IgYHtAbGluayBtb2R1bGU6Y2hhbmtvfkNoYW5rby5DTE9TRUR8Q0xPU0VEfWApLiBJZiB0aGVcbiAqIGNhbGxiYWNrIGlzbid0IHByZXNlbnQsIG5vdGhpbmcgd2lsbCBoYXBwZW4gYWZ0ZXIgdGhlIHZhbHVlIGlzIHRha2VuLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y2hhbmtvfkNoYW5rb1xuICogQHBhcmFtIHttb2R1bGU6Y2hhbmtvfm9wQ2FsbGJhY2t9IFtjYWxsYmFja10gQSBmdW5jdGlvbiB0aGF0IGdldHMgaW52b2tlZFxuICogICAgIHdoZW4gYSB2YWx1ZSBpcyBtYWRlIGF2YWlsYWJsZSB0byBiZSByZWNlaXZlZCAodGhpcyB2YWx1ZSBtYXkgYmVcbiAqICAgICBge0BsaW5rIG1vZHVsZTpjaGFua29+Q2hhbmtvLkNMT1NFRHxDTE9TRUR9YCBpZiB0aGUgY2hhbm5lbCBjbG9zZXMgd2l0aFxuICogICAgIG5vIGF2YWlsYWJsZSB2YWx1ZSkuIFRoZSBmdW5jdGlvbiBjYW4gdGFrZSBvbmUgcGFyYW1ldGVyLCB3aGljaCBpc1xuICogICAgIHRoZSB2YWx1ZSB0aGF0IGlzIHJlY2VpdmVkIGZyb20gdGhlIGNoYW5uZWwuXG4gKi9cbmZ1bmN0aW9uIHJlY3ZBc3luYyhjaGFubmVsLCBjYWxsYmFjayA9ICgpID0+IHt9KSB7XG4gIGNvbnN0IHJlc3VsdCA9IGhhbmRsZVJlY3YoY2hhbm5lbCwgb3BIYW5kbGVyKGNhbGxiYWNrKSk7XG4gIGlmIChyZXN1bHQgJiYgY2FsbGJhY2spIHtcbiAgICBjYWxsYmFjayhyZXN1bHQudmFsdWUpO1xuICB9XG59XG5cbi8qKlxuICogU2VuZHMgYSB2YWx1ZSB0byBhIGNoYW5uZWwsIGJsb2NraW5nIHRoZSBhc3luYyBmdW5jdGlvbiB1bnRpbCB0aGF0IHZhbHVlIGlzXG4gKiByZWNlaXZlZCBmcm9tIHRoZSBjaGFubmVsIGJ5IGEgZGlmZmVyZW50IGZ1bmN0aW9uIChvciB1bnRpbCB0aGUgY2hhbm5lbFxuICogY2xvc2VzKS5cbiAqXG4gKiBBIHZhbHVlIGlzIGFsd2F5cyBzZW50IHRvIHRoZSBjaGFubmVsLCBidXQgaWYgdGhhdCB2YWx1ZSBpc24ndCBzcGVjaWZpZWQgYnlcbiAqIHRoZSBzZWNvbmQgcGFyYW1ldGVyLCBpdCBpcyBgdW5kZWZpbmVkYC4gQW55IHZhbHVlIG1heSBiZSBzZW50IHRvIGEgY2hhbm5lbCxcbiAqIHdpdGggdGhlIHNvbGUgZXhjZXB0aW9uIG9mIHRoZSBzcGVjaWFsIHZhbHVlXG4gKiBge0BsaW5rIG1vZHVsZTpjaGFua29+Q2hhbmtvLkNMT1NFRHxDTE9TRUR9YC5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uICptdXN0KiBiZSBjYWxsZWQgZnJvbSB3aXRoaW4gYW4gYXN5bmMgZnVuY3Rpb24gYW5kIGFzIHBhcnQgb2ZcbiAqIGFuIGBhd2FpdGAgZXhwcmVzc2lvbi5cbiAqXG4gKiBXaGVuIGBzZW5kYCBpcyBjb21wbGV0ZWQgYW5kIGl0cyBmdW5jdGlvbiB1bmJsb2NrcywgaXRzIGBhd2FpdGAgZXhwcmVzc2lvblxuICogZXZhbHVhdGVzIHRvIGEgc3RhdHVzIGJvb2xlYW4gdGhhdCBpbmRpY2F0ZXMgd2hhdCBjYXVzZWQgdGhlIGZ1bmN0aW9uIHRvXG4gKiB1bmJsb2NrLiBUaGF0IHZhbHVlIGlzIGB0cnVlYCBpZiB0aGUgc2VudCB2YWx1ZSB3YXMgc3VjY2Vzc2Z1bGx5IHRha2VuIGJ5XG4gKiBhbm90aGVyIHByb2Nlc3MsIG9yIGBmYWxzZWAgaWYgdGhlIHVuYmxvY2tpbmcgaGFwcGVuZWQgYmVjYXVzZSB0aGUgdGFyZ2V0XG4gKiBjaGFubmVsIGNsb3NlZC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNoYW5rb35DaGFua29cbiAqIEBwYXJhbSB7Kn0gW3ZhbHVlXSBUaGUgdmFsdWUgYmVpbmcgcHV0IG9udG8gdGhlIGNoYW5uZWwuXG4gKiBAcmV0dXJuIHtQcm9taXNlPGJvb2xlYW4+fSBBIHByb21pc2UgdGhhdCB3aWxsIHJlc29sdmUgdG8gYHRydWVgIG9yIGBmYWxzZWBcbiAqICAgICBkZXBlbmRpbmcgb24gd2hldGhlciB0aGUgcHV0IHZhbHVlIGlzIGFjdHVhbGx5IHRha2VuLlxuICovXG5mdW5jdGlvbiBzZW5kKGNoYW5uZWwsIHZhbHVlKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICBzZW5kQXN5bmMoY2hhbm5lbCwgdmFsdWUsIHJlc29sdmUpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBSZWNlaXZlcyBhIHZhbHVlIGZyb20gdGhpcyBjaGFubmVsLCBibG9ja2luZyB0aGUgYXN5bmMgZnVuY3Rpb24gdW50aWwgYVxuICogdmFsdWUgYmVjb21lcyBhdmFpbGFibGUgdG8gYmUgcmVjZWl2ZWQgKG9yIHVudGlsIHRoZSBjaGFubmVsIGNsb3NlcyB3aXRoXG4gKiBubyBtb3JlIHZhbHVlcyBvbiBpdCB0byBiZSByZWNlaXZlZCkuXG4gKlxuICogVGhpcyBmdW5jdGlvbiAqbXVzdCogYmUgY2FsbGVkIGZyb20gd2l0aGluIGFuIGFzeW5jIGZ1bmN0aW9uIGFuZCBhcyBwYXJ0XG4gKiBvZiBhbiBgYXdhaXRgIGV4cHJlc3Npb24uXG4gKlxuICogV2hlbiBgcmVjZWl2ZWAgaXMgY29tcGxldGVkIGFuZCBpdHMgZnVuY3Rpb24gdW5ibG9ja3MsIGl0cyBgYXdhaXRgXG4gKiBleHByZXNzaW9uIGV2YWx1YXRlcyB0byB0aGUgYWN0dWFsIHZhbHVlIHRoYXQgd2FzIHJlY2VpdmVkLiBJZiB0aGUgdGFyZ2V0XG4gKiBjaGFubmVsIGNsb3NlZCwgdGhlbiBhbGwgb2YgdGhlIHZhbHVlcyBhbHJlYWR5IHBsYWNlZCBvbnRvIGl0IGFyZVxuICogcmVzb2x2ZWQgYnkgYHJlY2VpdmVgIGFzIG5vcm1hbCwgYW5kIG9uY2Ugbm8gbW9yZSB2YWx1ZXMgYXJlIGF2YWlsYWJsZSxcbiAqIHRoZSBzcGVjaWFsIHZhbHVlIGB7QGxpbmsgbW9kdWxlOmNoYW5rb35DaGFua28uQ0xPU0VEfENMT1NFRH1gIGlzIHJldHVybmVkLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y2hhbmtvfkNoYW5rb1xuICogQHJldHVybiB7UHJvbWlzZX0gQSBwcm9taXNlIHRoYXQgd2lsbCByZXNvbHZlIHRvIHRoZSB2YWx1ZSByZWNlaXZlZCBmcm9tXG4gKiAgICAgdGhlIGNoYW5uZWwgb25jZSB0aGF0IHJlY2VpdmUgaXMgY29tcGxldGVkLiBJZiB0aGUgY2hhbm5lbCBjbG9zZXNcbiAqICAgICB3aXRob3V0IGEgdmFsdWUgYmVpbmcgbWFkZSBhdmFpbGFibGUsIHRoaXMgd2lsbCByZXNvbHZlIHRvXG4gKiAgICAgYHtAbGluayBtb2R1bGU6Y2hhbmtvfkNoYW5rby5DTE9TRUR8Q0xPU0VEfWAuXG4gKi9cbmZ1bmN0aW9uIHJlY3YoY2hhbm5lbCkge1xuICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgcmVjdkFzeW5jKGNoYW5uZWwsIHJlc29sdmUpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBSZWNlaXZlcyBhIHZhbHVlIGZyb20gYSBjaGFubmVsLCBibG9ja2luZyB0aGUgYXN5bmMgZnVuY3Rpb24gdW50aWwgYSB2YWx1ZVxuICogYmVjb21lcyBhdmFpbGFibGUgdG8gYmUgcmVjZWl2ZWQgKG9yIHVudGlsIHRoZSBjaGFubmVsIGNsb3NlcyB3aXRoIG5vIG1vcmVcbiAqIHZhbHVlcyBvbiBpdCB0byBiZSByZWNlaXZlZCkuIElmIHRoZSByZWNlaXZlZCB2YWx1ZSBpcyBhbiBlcnJvciBvYmplY3QsIHRoYXRcbiAqIGVycm9yIGlzIHRocm93biBhdCB0aGF0IHBvaW50LlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gKm11c3QqIGJlIGNhbGxlZCBmcm9tIHdpdGhpbiBhbiBhc3luYyBmdW5jdGlvbiBhbmQgYXMgcGFydCBvZlxuICogYW4gYGF3YWl0YCBleHByZXNzaW9uLlxuICpcbiAqIEl0IGZ1bmN0aW9ucyBpbiBldmVyeSB3YXkgbGlrZSBge0BsaW5rIG1vZHVsZTpjaGFua29+Q2hhbmtvLnJlY3Z8cmVjdn1gXG4gKiAqZXhjZXB0KiBpbiB0aGUgY2FzZSB0aGF0IHRoZSB2YWx1ZSBvbiB0aGUgY2hhbm5lbCBpcyBhbiBvYmplY3QgdGhhdCBoYXNcbiAqIGBFcnJvci5wcm90b3R5cGVgIGluIGl0cyBwcm90b3R5cGUgY2hhaW4gKGFueSBidWlsdC1pbiBlcnJvciwgYW55XG4gKiBwcm9wZXJseS1jb25zdHJ1Y3RlZCBjdXN0b20gZXJyb3IpLiBJZiB0aGF0IGhhcHBlbnMsIHRoZSBlcnJvciBpcyB0aHJvd24sXG4gKiB3aGljaCB3aWxsIGNhdXNlIHRoZSByZXR1cm5lZCBwcm9taXNlIHRvIGJlIHJlamVjdGVkIHdpdGggdGhlIGVycm9yLiBJdCBjYW5cbiAqIHRoZW4gYmUgaGFuZGxlZCB1cCB0aGUgcHJvbWlzZSBjaGFpbiBsaWtlIGFueSBvdGhlciByZWplY3RlZCBwcm9taXNlLlxuICpcbiAqIGB0YWtlT3JUaHJvd2AgaXMgcm91Z2hseSBlcXVpdmFsZW50IHRvOlxuICpcbiAqIGBgYFxuICogY29uc3QgdmFsdWUgPSBhd2FpdCByZWN2KGNoKTtcbiAqIGlmIChFcnJvci5wcm90b3R5cGUuaXNQcm90b3R5cGVPZih2YWx1ZSkpIHtcbiAqICAgdGhyb3cgdmFsdWU7XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNoYW5rb35DaGFua29cbiAqIEByZXR1cm4ge1Byb21pc2V9IEEgcHJvbWlzZSB0aGF0IHdpbGwgcmVzb2x2ZSB0byB0aGUgdmFsdWUgdGFrZW4gZnJvbSB0aGVcbiAqICAgICBjaGFubmVsIG9uY2UgdGhhdCB0YWtlIGlzIGNvbXBsZXRlZC4gSWYgdGhlIGNoYW5uZWwgY2xvc2VzIHdpdGhvdXQgYVxuICogICAgIHZhbHVlIGJlaW5nIG1hZGUgYXZhaWxhYmxlLCB0aGlzIHdpbGwgcmVzb2x2ZSB0b1xuICogICAgIGB7QGxpbmsgbW9kdWxlOmNoYW5rb35DaGFua28uQ0xPU0VEfENMT1NFRH1gLiBJZiB0aGUgdGFrZW4gdmFsdWUgaXMgYW5cbiAqICAgICBlcnJvciwgdGhlIHByb21pc2Ugd2lsbCBpbnN0ZWFkIGJlIHJlamVjdGVkIHdpdGggdGhlIGVycm9yIG9iamVjdCBhcyB0aGVcbiAqICAgICByZWFzb24uXG4gKi9cbmZ1bmN0aW9uIHJlY3ZPclRocm93KGNoYW5uZWwpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICByZWN2QXN5bmMoY2hhbm5lbCwgcmVzdWx0ID0+IHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmlzUHJvdG90eXBlT2YuY2FsbChFcnJvci5wcm90b3R5cGUsIHJlc3VsdCkpIHtcbiAgICAgICAgcmVqZWN0KHJlc3VsdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuXG4vKipcbiAqIENsb3NlcyB0aGUgY2hhbm5lbCwgaWYgaXQgaXNuJ3QgYWxyZWFkeSBjbG9zZWQuIFRoaXMgaW1tZWRpYXRlbHkgcmV0dXJucyBhbnlcbiAqIGJ1ZmZlcmVkIHZhbHVlcyB0byBwZW5kaW5nIHJlY2VpdmVzLiBJZiB0aGVyZSBhcmUgbm8gYnVmZmVyZWQgdmFsdWVzIChvciBpZlxuICogdGhleSd2ZSBhbHJlYWR5IGJlZW4gdGFrZW4gYnkgb3RoZXIgcmVjZWl2ZXMpLCB0aGVuIGFsbCBvZiB0aGUgcmVzdCBvZiB0aGVcbiAqIHJlY2VpdmVzIGFyZSBjb21wbGV0ZWQgd2l0aCB0aGUgdmFsdWUgb2ZcbiAqIHtAbGluayBtb2R1bGU6Y2hhbmtvfkNoYW5rby5DTE9TRUR8Q0xPU0VEfS4gQW55IHBlbmRpbmcgc2VuZHMgYXJlIGNvbXBsZXRlZFxuICogd2l0aCB0aGUgdmFsdWUgb2YgYGZhbHNlYC5cbiAqXG4gKiBOb3RlIHRoYXQgdGhlIGJ1ZmZlciBpcyBub3QgZW1wdGllZCBpZiB0aGVyZSBhcmUgc3RpbGwgdmFsdWVzIHJlbWFpbmluZyBhZnRlclxuICogYWxsIG9mIHRoZSBwZW5kaW5nIHJlY2VpdmVzIGhhdmUgYmVlbiBoYW5kbGVkLiBUaGUgY2hhbm5lbCB3aWxsIHN0aWxsIHByb3ZpZGVcbiAqIHRob3NlIHZhbHVlcyB0byBhbnkgZnV0dXJlIHJlY2VpdmVzLCB0aG91Z2ggbm8gbmV3IHZhbHVlcyBtYXkgYmUgYWRkZWQgdG8gdGhlXG4gKiBjaGFubmVsLiBPbmNlIHRoZSBidWZmZXIgaXMgZGVwbGV0ZWQsIGFueSBmdXR1cmUgcmVjZWl2ZXMgd2lsbCByZXR1cm5cbiAqIHtAbGluayBtb2R1bGU6Y2hhbmtvfkNoYW5rby5DTE9TRUR8Q0xPU0VEfS5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNoYW5rb35DaGFua29cbiAqIEBwYXJhbSB7bW9kdWxlOmNoYW5rby9jaGFubmVsLkNoYW5uZWx9IGNoYW5uZWwgVGhlIGNoYW5uZWwgdG8gYmUgY2xvc2VkLlxuICovXG5mdW5jdGlvbiBjbG9zZShjaGFubmVsKSB7XG4gIGNsb3NlSW1wbChjaGFubmVsKTtcbn1cblxuZXhwb3J0IHtcbiAgQ0xPU0VELFxuICBERUZBVUxULFxuICBjaGFuLFxuICB0aW1lZENoYW4sXG4gIHRyYW5zQ2hhbixcbiAgaXNDbG9zZWQsXG4gIGlzQnVmZmVyZWQsXG4gIGlzVGltZWQsXG4gIHNlbmRBc3luYyxcbiAgcmVjdkFzeW5jLFxuICBzZWxlY3RBc3luYyxcbiAgc2VuZCxcbiAgcmVjdixcbiAgcmVjdk9yVGhyb3csXG4gIHNlbGVjdCxcbiAgY2xvc2UsXG4gIHZhbHVlLFxuICBjaGFubmVsXG59O1xuXG4vKipcbiAqIFVzZWQgYnkgY2hhbm5lbHMgdG8gdHJhY2sgZXhlY3V0aW9uIG9mIG9wZXJhdGlvbnMgKGBzZW5kYCwgYHJlY3ZgLCBhbmRcbiAqIGBzZWxlY3RgKS4gVGhleSBwcm92aWRlIHR3byBwaWVjZXMgb2YgaW5mb3JtYXRpb246IHRoZSBmdW5jdGlvbiB0byBjYWxsIHdoZW5cbiAqIGEgYHNlbmRgIG9yIGByZWN2YCB1bmJsb2NrcyAoYmVjYXVzZSBhIHZhbHVlIGdpdmVuIHRvIHNlbmQgaGFzIGJlZW4gcmVjZWl2ZWQsXG4gKiBvciBhIGByZWN2YCBoYXMgYWNjZXB0ZWQgYSB2YWx1ZSB0aGF0IGhhcyBiZWVuIHNlbnQpIGFuZCB3aGV0aGVyIG9yIG5vdCB0aGVcbiAqIGhhbmRsZXIgaXMgc3RpbGwgYWN0aXZlLlxuICpcbiAqIFRoZSBmdW5jdGlvbiBpcyBhIGNhbGxiYWNrIHRoYXQgYWN0dWFsbHkgZGVmaW5lcyB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuXG4gKiBge0BsaW5rIG1vZHVsZTpjaGFua29+Q2hhbmtvLnNlbmR8c2VuZH1gIC9cbiAqIGB7QGxpbmsgbW9kdWxlOmNoYW5rb35DaGFua28ucmVjdnxyZWN2fWAgL1xuICogYHtAbGluayBtb2R1bGU6Y2hhbmtvfkNoYW5rby5zZWxlY3R8c2VsZWN0fWAgYW5kXG4gKiBge0BsaW5rIG1vZHVsZTpjaGFua29+Q2hhbmtvLnNlbmRBc3luY3xzZW5kQXN5bmN9YCAvXG4gKiBge0BsaW5rIG1vZHVsZTpjaGFua29+Q2hhbmtvLnJlY3ZBc3luY3xyZWN2QXN5bmN9YCAvXG4gKiBge0BsaW5rIG1vZHVsZTpjaGFua29+Q2hhbmtvLnNlbGVjdEFzeW5jfHNlbGVjdEFzeW5jfWA6IHdoaWxlIHRoZSB1bmJsb2NrZWRcbiAqIGNhbGxzIHVzZSB0aGUgY2FsbGJhY2sgcGFzc2VkIHRvIHRoZSBmdW5jdGlvbiwgYHNlbmRgLCBgcmVjdmAsIGFuZCBgc2VsZWN0YFxuICogc2ltcGx5IGNvbnRpbnVlIHRoZSBwcm9jZXNzIHdoZXJlIGl0IGxlZnQgb2ZmLiAoVGhpcyBpcyB3aHkgYHNlbmRgLCBgcmVjdmAsXG4gKiBhbmQgYHNlbGVjdGAgb25seSB3b3JrIGluc2lkZSBgYXN5bmNgIGZ1bmN0aW9ucyB3aXRoIGBhd2FpdGAgaWYgdGhlIHJldHVyblxuICogdmFsdWUgaXMgbmVlZGVkLCBiZWNhdXNlIG90aGVyd2lzZSB0aGVyZSdzIG5vIHByb2Nlc3MgdG8gY29udGludWUuKVxuICpcbiAqIFRoaXMgZnVuY3Rpb24gaXMgcHJvdmlkZWQgYXMgdGhlIHJldHVybiB2YWx1ZSBvZiB0aGUgYGNvbW1pdGAgbWV0aG9kLiBDYWxsaW5nXG4gKiBgY29tbWl0YCBoYXMgbm8gZXh0cmEgZWZmZWN0IHdpdGggYHNlbmRgIGFuZCBgcmVjdmAgb3BlcmF0aW9ucywgYnV0IGZvclxuICogYHNlbGVjdGAsIGl0IGFsc28gbWFya3MgdGhlIGhhbmRsZXIgYXMgbm8gbG9uZ2VyIGJlaW5nIGFjdGl2ZS4gVGhpcyBtZWFuc1xuICogdGhhdCBvbmx5IG9uZSBvZiB0aGUgb3BlcmF0aW9ucyBwYXNzZWQgdG8gc2VsZWN0IGNhbiBiZSBjb21wbGV0ZWQsIGJlY2F1c2VcbiAqIGFmdGVyIHRoZSBmaXJzdCBvbmUsIHRoZSBoYW5kbGVyIGlzIG5vIGxvbmdlciBhY3RpdmUgYW5kIHdpbGwgbm90IGJlIGFsbG93ZWRcbiAqIHRvIHByb2Nlc3MgYSBzZWNvbmQgb3BlcmF0aW9uLlxuICpcbiAqIElmIGEgYHNlbmRgIG9yIGByZWN2YCAob3IgZXF1aXZhbGVudCBgc2VsZWN0YCBvcGVyYXRpb24pIGNhbm5vdCBiZVxuICogaW1tZWRpYXRlbHkgY29tcGxldGVkIGJlY2F1c2UgdGhlcmUgaXNuJ3QgYSBjb3JyZXNwb25kaW5nIHBlbmRpbmcgYHJlY3ZgIG9yXG4gKiBgc2VuZGAsIHRoZSBoYW5kbGVyIGlzIHF1ZXVlZCB0byBiZSBydW4gd2hlbiBhIG5ldyBgcmVjdmAgb3IgYHNlbmRgIGJlY29tZXNcbiAqIGF2YWlsYWJsZS5cbiAqXG4gKiBAdHlwZWRlZiBIYW5kbGVyXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IGFjdGl2ZSBXaGV0aGVyIG9yIG5vdCB0aGUgb3BlcmF0aW9uIGlzIHN0aWxsIGFjdGl2ZS4gQW5cbiAqICAgICBpbmFjdGl2ZSBvcGVyYXRpb24gaXMgbm90IHNlcnZpY2VkIGFuZCB3aWxsIGJlIGNsZWFyZWQgZnJvbSB0aGUgcXVldWUgb25cbiAqICAgICB0aGUgbmV4dCBkaXJ0eSBvcGVyYXRpb24gcHVyZ2UuXG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBjb21taXQgTWFya3MgdGhlIGhhbmRsZXIgYXMgaW5hY3RpdmUgKHNvIGl0IGRvZXNuJ3QgcnVuXG4gKiAgICAgdHdpY2UpIGFuZCByZXR1cm5zIHRoZSBjYWxsYmFjayB0byBiZSBydW4gd2hlbiB0aGUgb3BlcmF0aW9uIGNvbXBsZXRlcy5cbiAqIEBwcml2YXRlXG4gKi9cblxuLyoqXG4gKiBBIGNhbGxiYWNrIGZ1bmN0aW9uIHJ1biB3aGVuIGEgYHNlbmRgIG9yIGByZWN2YCBvcGVyYXRpb24gY29tcGxldGVzLlxuICpcbiAqIEBjYWxsYmFjayBIYW5kbGVyQ2FsbGJhY2tcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHByb3ZpZGVkIGJ5IHRoZSBjaGFubmVsLiBJbiBhIGByZWN2YCwgdGhpcyBpcyB0aGVcbiAqICAgICB2YWx1ZSByZWNlaXZlZCBmcm9tIHRoZSBjaGFubmVsLiBJbiBhIGBzZW5kYCwgdGhpcyBpcyBgdHJ1ZWAgZm9yIGFcbiAqICAgICBzdWNjZXNzZnVsIHNlbmQgYW5kIGBmYWxzZWAgaWYgdGhlIGNoYW5uZWwgaXMgY2xvc2VkIGJlZm9yZSB0aGUgc2VuZCBjYW5cbiAqICAgICBjb21wbGV0ZS5cbiAqIEBwcml2YXRlXG4gKi9cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG5pbXBvcnQgeyBib3gsIGhhbmRsZVNlbmQsIGhhbmRsZVJlY3YsIGlzQm94IH0gZnJvbSBcIi4vaGFuZGxlclwiO1xuXG4vKipcbiAqIFRoZSBuYW1lIG9mIHRoZSBjaGFubmVsIHJldHVybmVkIGZyb20gYGF3YWl0XG4gKiB7QGxpbmsgbW9kdWxlOmNoYW5rb35DaGFua28uc2VsZWN0fHNlbGVjdH1gIG9yIHNlbnQgdG8gdGhlIGNhbGxiYWNrIGluXG4gKiBge0BsaW5rIG1vZHVsZTpjaGFua29+Q2hhbmtvLnNlbGVjdEFzeW5jfHNlbGVjdEFzeW5jfWAgd2hlbiB0aGUgZGVmYXVsdCBpc1xuICogcmV0dXJuZWQgYXMgaXRzIHZhbHVlLlxuICpcbiAqIFRoaXMgb25seSBoYXBwZW5zIHdoZW4gYW4gYHtAbGluayBtb2R1bGU6Y2hhbmtvfkNoYW5rby5zZWxlY3R8c2VsZWN0fSAvXG4gKiB7QGxpbmsgbW9kdWxlOmNoYW5rb35DaGFua28uc2VsZWN0QXN5bmN8c2VsZWN0QXN5bmN9YCBjYWxsIGlzIHBlcmZvcm1lZCwgYWxsXG4gKiBvcGVyYXRpb25zIGFyZSBpbml0aWFsbHkgYmxvY2tpbmcsIGFuZCBhIGBkZWZhdWx0YCBvcHRpb24gaXMgc2VudC4gVGhlXG4gKiBpbW1lZGlhdGUgcmVzcG9uc2UgaW4gdGhhdCBzaXR1YXRpb24gaXMgYHsgdmFsdWU6IG9wdGlvbnMuZGVmYXVsdCwgY2hhbm5lbDpcbiAqIERFRkFVTFQgfWAuXG4gKlxuICogQHR5cGUge1N5bWJvbH1cbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y2hhbmtvfkNoYW5rb1xuICovXG5jb25zdCBERUZBVUxUID0gU3ltYm9sKFwiREVGQVVMVFwiKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGhhbmRsZXIgdXNlZCBmb3IgYHNlbGVjdGAgb3BlcmF0aW9ucy5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNoYW5rby9jaGFubmVsXG4gKiBAcGFyYW0ge21vZHVsZTpjaGFua28vY2hhbm5lbH5Cb3h9IGFjdGl2ZSBBIGJveGVkIHZhbHVlIGluZGljYXRpbmcgd2hldGhlclxuICogICAgIHRoZSBoYW5kbGVyIGlzIHZhbGlkLiBUaGlzIGlzIGEgYm94ZWQgdmFsdWUgYmVjYXVzZSB0aGUgc2VsZWN0LWhhbmRsaW5nXG4gKiAgICAgY29kZSBuZWVkcyB0byBtYW5pcHVsYXRlIGl0IGRpcmVjdGx5LlxuICogQHBhcmFtIHttb2R1bGU6Y2hhbmtvL2NoYW5uZWx+SGFuZGxlckNhbGxiYWNrfSBmbiBUaGUgY2FsbGJhY2sgdG8gYmUgcnVuIHdoZW5cbiAqICAgICAoYW5kIGlmKSB0aGUgb3BlcmF0aW9uIGNvbXBsZXRlcy5cbiAqIEByZXR1cm4ge21vZHVsZTpjaGFua28vY2hhbm5lbH5IYW5kbGVyfSBUaGUgbmV3IGhhbmRsZXIuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBzZWxlY3RIYW5kbGVyKGFjdGl2ZSwgZm4pIHtcbiAgcmV0dXJuIE9iamVjdC5jcmVhdGUobnVsbCwge1xuICAgIGFjdGl2ZToge1xuICAgICAgZ2V0KCkge1xuICAgICAgICByZXR1cm4gYWN0aXZlLnZhbHVlO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBjb21taXQ6IHtcbiAgICAgIHZhbHVlOiAoKSA9PiB7XG4gICAgICAgIGFjdGl2ZS52YWx1ZSA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gZm47XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgcmFuZG9tbHkgc2h1ZmZsZWQgYXJyYXkgY29udGFpbmluZyBvbmUgb2YgZWFjaCBpbnRlZ2VyIHZhbHVlIGZyb21cbiAqIGAwYCB0byBhbiB1cHBlciBsaW1pdC4gSXQgaXMgdXNlZCB0byByYW5kb21seSBzZWxlY3QgYSBjaGFubmVsIHRvIGJlIGFjdGl2ZVxuICogd2hlbiBtdWx0aXBsZXMgdW5ibG9jayBpbiBhIGBzZWxlY3RgIG9wZXJhdGlvbi5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNoYW5rby9jaGFubmVsXG4gKiBAcGFyYW0ge251bWJlcn0gdXBwZXIgVGhlIHVwcGVyIGxpbWl0IG9mIHRoZSBhcnJheSB2YWx1ZXMsIGV4Y2x1c2l2ZS5cbiAqIEByZXR1cm4ge251bWJlcltdfSBBbiBhcnJheSBvZiBpbnRlZ2VycyBmcm9tIGAwYCB0byBgdXBwZXIgLSAxYCwgc2h1ZmZsZWRcbiAqICAgICBpbnRvIGEgcmFuZG9tIG9yZGVyLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gcmFuZG9tQXJyYXkodXBwZXIpIHtcbiAgY29uc3QgYXJyYXkgPSBbXTtcbiAgZm9yIChsZXQgayA9IDA7IGsgPCB1cHBlcjsgaysrKSB7XG4gICAgYXJyYXkucHVzaChrKTtcbiAgfVxuICBmb3IgKGxldCBqID0gdXBwZXIgLSAxOyBqID4gMDsgai0tKSB7XG4gICAgY29uc3QgaSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChqICsgMSkpO1xuICAgIGNvbnN0IHRlbXAgPSBhcnJheVtqXTtcbiAgICBhcnJheVtqXSA9IGFycmF5W2ldO1xuICAgIGFycmF5W2ldID0gdGVtcDtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbi8qKlxuICogQSByZXN1bHQgdGhhdCBjb21lcyBmcm9tIGBzZWxlY3RgIG9wZXJhdGlvbnMuXG4gKlxuICogQHR5cGVkZWYgU2VsZWN0UmVzdWx0XG4gKiBAcHJvcGVydHkgeyp9IHZhbHVlIElmIHRoZSBgc2VsZWN0YCBvcGVyYXRpb24gcmVzdWx0ZWQgaW4gYSByZWNlaXZlLCB0aGlzIGlzXG4gKiAgICAgdGhlIHZhbHVlIHJlY2VpdmVkIGZyb20gdGhlIGNoYW5uZWwuIElmIGl0IHJlc3VsdGVkIGluIGEgc2VuZCwgdGhpcyBpc1xuICogICAgIGB0cnVlYCBmb3IgYSBzdWNjZXNzZnVsIHNlbmQgYW5kIGBmYWxzZWAgaWYgdGhlIGNoYW5uZWwgY2xvc2VkIGZpcnN0LlxuICogQHByb3BlcnR5IHttb2R1bGU6Y2hhbmtvL2NoYW5uZWwuQ2hhbm5lbH0gY2hhbm5lbCBUaGUgY2hhbm5lbCB1cG9uIHdoaWNoIHRoZVxuICogICAgIHNlbGVjdGVkIG9wZXJhdGlvbiBoYXBwZW5lZC5cbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y2hhbmtvL2NoYW5uZWxcbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgYSBzZWxlY3QgcmVzdWx0IGZyb20gaXRzIGNvbXBvbmVudCBwcm9wZXJ0aWVzLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y2hhbmtvL2NoYW5uZWxcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgSWYgdGhlIGBzZWxlY3RgIG9wZXJhdGlvbiByZXN1bHRlZCBpbiBhIHJlY2VpdmUsIHRoaXMgaXNcbiAqICAgICB0aGUgdmFsdWUgcmVjZWl2ZWQgZnJvbSB0aGUgY2hhbm5lbC4gSWYgaXQgcmVzdWx0ZWQgaW4gYSBzZW5kLCB0aGlzIGlzXG4gKiAgICAgYHRydWVgIGZvciBhIHN1Y2Nlc3NmdWwgc2VuZCBhbmQgYGZhbHNlYCBpZiB0aGUgY2hhbm5lbCBjbG9zZWQgZmlyc3QuXG4gKiBAcGFyYW0ge21vZHVsZTpjaGFua28vY2hhbm5lbC5DaGFubmVsfSBjaGFubmVsIFRoZSBjaGFubmVsIHVwb24gd2hpY2ggdGhlXG4gKiAgICAgc2VsZWN0ZWQgb3BlcmF0aW9uIGhhcHBlbmVkLlxuICogQHJldHVybiB7bW9kdWxlOmNoYW5rby9jaGFubmVsLlNlbGVjdFJlc3VsdH0gVGhlIHByb3BlcnRpZXMgd3JhcHBlZCBpbnRvIGFuXG4gKiAgICAgb2JqZWN0IGZvciBvdXRwdXQuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBzZWxlY3RSZXN1bHQodmFsdWUsIGNoYW5uZWwpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmNyZWF0ZShudWxsKSwgeyB2YWx1ZSwgY2hhbm5lbCB9KTtcbn1cblxuLyoqXG4gKiBDb21wbGV0ZXMgdGhlIGZpcnN0IG9wZXJhdGlvbiBhbW9uZyB0aGUgcHJvdmlkZWQgb3BlcmF0aW9ucyB0aGF0IGNvbWVzXG4gKiBhdmFpbGFibGUsIHdpdGhvdXQgYmxvY2tpbmcuXG4gKlxuICogVGhpcyBtZWFucyB0aGF0IGEgY2FsbCB0byBgc2VsZWN0QXN5bmNgIGRvZXMgbm90IGdvIGludG8gYW4gYGF3YWl0YFxuICogZXhwcmVzc2lvbiwgYW5kIGl0IGlzIG5vdCBuZWNlc3NhcnkgdG8gdXNlIGl0IGluc2lkZSBhIHByb2Nlc3MuIFJhdGhlciB0aGFuXG4gKiBibG9ja2luZyB1bnRpbCBhbiBvcGVyYXRpb24gY29tcGxldGVzLCB0aGlzIG9uZSByZXR1cm5zIGltbWVkaWF0ZWx5IGFuZCB0aGVuXG4gKiBpbnZva2VzIHRoZSBjYWxsYmFjayAoaWYgcHJvdmlkZWQpIGFzIHNvb24gYXMgb25lIG9mIHRoZSBzdXBwbGllZCBvcGVyYXRpb25zXG4gKiBjb21wbGV0ZXMuIEl0IGNhbiBiZSByZWdhcmRlZCBhcyBhIG5vbi1ibG9ja2luZyB2ZXJzaW9uIG9mXG4gKiBge0BsaW5rIG1vZHVsZTpjaGFua29+Q2hhbmtvLnNlbGVjdHxzZWxlY3R9YC5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHVzZXMgYW4gb3BlcmF0aW9ucyBsaXN0IHRoYXQncyBpZGVudGljYWwgdG8gdGhlIG9uZSB1c2VkIGJ5XG4gKiBge0BsaW5rIG1vZHVsZTpjaGFua29+Q2hhbmtvLnNlbGVjdHxzZWxlY3R9YC4gSXQncyBhbiBhcnJheSBvZiB2YWx1ZXM7IGlmIGFcbiAqIHZhbHVlIGlzIGEgY2hhbm5lbCwgdGhlbiB0aGF0IG9wZXJhdGlvbiBpcyBhIHRha2Ugb24gdGhhdCBjaGFubmVsLCB3aGlsZSBpZlxuICogaXQncyBhIHR3by1lbGVtZW50IGFycmF5IG9mIGNoYW5uZWwgYW5kIHZhbHVlLCB0aGVuIHRoYXQgb3BlcmF0aW9uIGlzIGEgcHV0XG4gKiBvZiB0aGF0IHZhbHVlIG9udG8gdGhhdCBjaGFubmVsLiBBbGwgb3B0aW9ucyB0aGF0IGFyZSBhdmFpbGFibGUgdG9cbiAqIGB7QGxpbmsgbW9kdWxlOmNoYW5rb35DaGFua28uc2VsZWN0fHNlbGVjdH1gIGFyZSBhbHNvIGF2YWlsYWJsZSBoZXJlLlxuICpcbiAqIFRoZSBjYWxsYmFjayBpcyBhIGZ1bmN0aW9uIG9mIG9uZSBwYXJhbWV0ZXIsIHdoaWNoIGluIHRoaXMgY2FzZSBpcyBhbiBvYmplY3RcbiAqIHdpdGggYHZhbHVlYCBhbmQgYGNoYW5uZWxgIHByb3BlcnRpZXMuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjaGFua29+Q2hhbmtvXG4gKiBAcGFyYW0ge09iamVjdFtdfSBvcGVyYXRpb25zIEEgY29sbGVjdGlvbiBvZiBlbGVtZW50cyB0aGF0IGNvcnJlc3BvbmQgdG8gcmVjdlxuICogICAgIGFuZCBzZW5kIG9wZXJhdGlvbnMuIEEgcmVjdiBvcGVyYXRpb24gaXMgc2lnbmlmaWVkIGJ5IGFuIGVsZW1lbnQgdGhhdCBpc1xuICogICAgIGEgY2hhbm5lbCAod2hpY2ggaXMgdGhlIGNoYW5uZWwgdG8gYmUgcmVjZWl2ZWQgZnJvbSkuIEEgc2VuZCBvcGVyYXRpb24gaXNcbiAqICAgICBzcGVjaWZpZWQgYnkgYW4gZWxlbWVudCB0aGF0IGlzIGl0c2VsZiBhIHR3by1lbGVtZW50IGFycmF5LCB3aGljaCBoYXMgYVxuICogICAgIGNoYW5uZWwgZm9sbG93ZWQgYnkgYSB2YWx1ZSAod2hpY2ggaXMgdGhlIGNoYW5uZWwgYW5kIHZhbHVlIHRvIGJlIHNlbnQpLlxuICogQHBhcmFtIHttb2R1bGU6Y2hhbmtvfnNlbGVjdENhbGxiYWNrfSBjYWxsYmFjayBBIGZ1bmN0aW9uIHRoYXQgZ2V0cyBpbnZva2VkXG4gKiAgICAgd2hlbiBvbmUgb2YgdGhlIG9wZXJhdGlvbnMgY29tcGxldGVzLlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSBBbiBvcHRpb25hbCBvYmplY3Qgd2hpY2ggY2FuIGNoYW5nZSB0aGUgYmVoYXZpb3JcbiAqICAgICBvZiBgc2VsZWN0QXN5bmNgIHRocm91Z2ggdHdvIHByb3BlcnRpZXMuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnByaW9yaXR5PWZhbHNlXSBJZiBgdHJ1ZWAsIHRoZW4gdGhlIHByaW9yaXR5IG9mXG4gKiAgICAgb3BlcmF0aW9ucyB0byBjb21wbGV0ZSB3aGVuIG1vcmUgdGhhbiBvbmUgaXMgaW1tZWRpYXRlbHkgYXZhaWxhYmxlIGlzIGFcbiAqICAgICBwcmlvcml0eSBhY2NvcmRpbmcgdG8gcG9zaXRpb24gd2l0aGluIHRoZSBvcGVyYXRpb25zIGFycmF5IChlYXJsaWVyXG4gKiAgICAgcG9zaXRpb25zIGhhdmUgdGhlIGhpZ2hlciBwcmlvcml0eSkuIElmIGBmYWxzZWAgb3Igbm90IHByZXNlbnQsIHRoZVxuICogICAgIHByaW9ydHkgb2Ygb3BlcmF0aW9uIGNvbXBsZXRpb24gaXMgcmFuZG9tLlxuICogQHBhcmFtIHsqfSBbb3B0aW9ucy5kZWZhdWx0XSBJZiBzZXQgYW5kIGFsbCBvZiB0aGUgb3BlcmF0aW9ucyBpbml0aWFsbHlcbiAqICAgICBibG9jaywgdGhlIGBzZWxlY3RBc3luY2AgY2FsbHMgaXRzIGNhbGxiYWNrIGltbWVkaWF0ZWx5IHdpdGggdGhlIHZhbHVlIG9mXG4gKiAgICAgdGhpcyBvcHRpb24gKHRoZSBjaGFubmVsIHdpbGwgYmVcbiAqICAgICBge0BsaW5rIG1vZHVsZTpjaGFua29+Q2hhbmtvLkRFRkFVTFR8REVGQVVMVH0pYC4gSWYgbm90IHNldCwgdGhlXG4gKiAgICAgYHNlbGVjdEFzeW5jYCBjYWxsIHdpbGwgbm90IGNhbGwgaXRzIGNhbGxiYWNrIHVudGlsIG9uZSBvZiB0aGUgb3BlcmF0aW9uc1xuICogICAgIGNvbXBsZXRlcyBhbmQgdGhhdCB2YWx1ZSBhbmQgY2hhbm5lbCB3aWxsIGJlIHRoZSBvbmVzIHJldHVybmVkLlxuICovXG5mdW5jdGlvbiBzZWxlY3RBc3luYyhvcHMsIGNhbGxiYWNrID0gKCkgPT4ge30sIG9wdGlvbnMgPSB7fSkge1xuICBjb25zdCBjb3VudCA9IG9wcy5sZW5ndGg7XG4gIGlmIChjb3VudCA9PT0gMCkge1xuICAgIHRocm93IEVycm9yKFwic2VsZWN0IGNhbGxlZCB3aXRoIG5vIG9wZXJhdGlvbnNcIik7XG4gIH1cblxuICBjb25zdCBwcmlvcml0eSA9ICEhb3B0aW9ucy5wcmlvcml0eTtcbiAgY29uc3QgaW5kaWNlcyA9IHByaW9yaXR5ID8gW10gOiByYW5kb21BcnJheShjb3VudCk7XG5cbiAgY29uc3QgYWN0aXZlID0gYm94KHRydWUpO1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZVNlbGVjdEhhbmRsZXIoY2hhbm5lbCkge1xuICAgIHJldHVybiBzZWxlY3RIYW5kbGVyKGFjdGl2ZSwgdmFsdWUgPT4ge1xuICAgICAgY2FsbGJhY2soc2VsZWN0UmVzdWx0KHZhbHVlLCBjaGFubmVsKSk7XG4gICAgfSk7XG4gIH1cblxuICBsZXQgcmVzdWx0O1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgIC8vIENob29zZSBhbiBvcGVyYXRpb24uIElmIGBwcmlvcml0eWAgaXMgdHJ1ZSB0aGVuIGl0J3MgdGhlIG5leHQgaW5kZXgsXG4gICAgLy8gb3RoZXJ3aXNlIGl0J3MgcmFuZG9tXG4gICAgY29uc3Qgb3AgPSBvcHNbcHJpb3JpdHkgPyBpIDogaW5kaWNlc1tpXV07XG4gICAgbGV0IGNoYW5uZWwsIHZhbHVlO1xuXG4gICAgLy8gQXBwbHkgZXZlcnkgb3BlcmF0aW9uIHRvIGl0cyBjaGFubmVsLCBvbmUgYXQgYSB0aW1lXG4gICAgaWYgKEFycmF5LmlzQXJyYXkob3ApKSB7XG4gICAgICBbY2hhbm5lbCwgdmFsdWVdID0gb3A7XG4gICAgICByZXN1bHQgPSBoYW5kbGVTZW5kKGNoYW5uZWwsIHZhbHVlLCBjcmVhdGVTZWxlY3RIYW5kbGVyKGNoYW5uZWwpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2hhbm5lbCA9IG9wO1xuICAgICAgcmVzdWx0ID0gaGFuZGxlUmVjdihjaGFubmVsLCBjcmVhdGVTZWxlY3RIYW5kbGVyKGNoYW5uZWwpKTtcbiAgICB9XG5cbiAgICAvLyBXZSBjaGVjayBmb3IgYm94IGhlcmUgYmVjYXVzZSBhIGJveCBmcm9tIGEgY2hhbm5lbCBpbmRpY2F0ZXMgdGhhdCB0aGVcbiAgICAvLyB2YWx1ZSBpcyBpbW1lZGlhdGVseSBhdmFpbGFibGUgKHRoYXQgdGhlcmUgaXMgbm8gbmVlZCB0byBibG9jayB0byBnZXQgdGhlXG4gICAgLy8gdmFsdWUpLiBJZiB0aGlzIGhhcHBlbnMsIHdlIGV4ZWN1dGUgdGhlIGNhbGxiYWNrIGltbWVkaWF0ZWx5IHdpdGggdGhhdFxuICAgIC8vIHZhbHVlIGFuZCBjaGFubmVsIGFuZCBzdG9wIHF1ZXVlaW5nIG90aGVyIG9wZXJhdGlvbnMuXG4gICAgaWYgKGlzQm94KHJlc3VsdCkpIHtcbiAgICAgIGNhbGxiYWNrKHNlbGVjdFJlc3VsdChyZXN1bHQudmFsdWUsIGNoYW5uZWwpKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIC8vIElmIG5vbmUgb2YgdGhlIG9wZXJhZXRpb25zIGltbWVkaWF0ZWx5IHJldHVybmVkIHZhbHVlcyAodGhleSBhcmUgYWxsXG4gIC8vIGJsb2NrZWQpLCBhbmQgd2UgaGF2ZSBzZXQgYSBkZWZhdWx0IGNoYW5uZWwgb3B0aW9uLCB0aGVuIHJldHVybiB0aGUgdmFsdWVcbiAgLy8gaWYgdGhlIGRlZmF1bHQgY2hhbm5lbCByYXRoZXIgdGhhbiB3YWl0aW5nIGZvciB0aGUgcXVldWVkIG9wZXJhdGlvbnMgdG9cbiAgLy8gY29tcGxldGUuXG4gIGlmIChcbiAgICAhaXNCb3gocmVzdWx0KSAmJlxuICAgIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvcHRpb25zLCBcImRlZmF1bHRcIilcbiAgKSB7XG4gICAgaWYgKGFjdGl2ZS52YWx1ZSkge1xuICAgICAgYWN0aXZlLnZhbHVlID0gZmFsc2U7XG4gICAgICBjYWxsYmFjayhzZWxlY3RSZXN1bHQob3B0aW9ucy5kZWZhdWx0LCBERUZBVUxUKSk7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQ29tcGxldGVzIHRoZSBmaXJzdCBvcGVyYXRpb24gYW1vbmcgdGhlIHByb3ZpZGVkIG9wZXJhdGlvbnMgdGhhdCBjb21lc1xuICogYXZhaWxhYmxlLCBibG9ja2luZyB0aGUgcHJvY2VzcyB1bnRpbCB0aGVuLlxuICpcbiAqIGBvcGVyYXRpb25zYCBpcyBhbiBhcnJheSB3aG9zZSBlbGVtZW50cyBtdXN0IGJlIGNoYW5uZWxzIG9yIHR3by1lbGVtZW50XG4gKiBzdWItYXJyYXlzIG9mIGNoYW5uZWxzIGFuZCB2YWx1ZXMsIGluIGFueSBjb21iaW5hdGlvbi4gQW4gb3BlcmF0aW9uIHRoYXQgaXMgYVxuICogY2hhbm5lbCBpcyBhIHRha2Ugb3BlcmF0aW9uIG9uIHRoYXQgY2hhbm5lbC4gQW4gb3BlcmF0aW9uIHRoYXQgaXMgYVxuICogdHdvLWVsZW1lbnQgYXJyYXkgaXMgYSBwdXQgb3BlcmF0aW9uIG9uIHRoYXQgY2hhbm5lbCB1c2luZyB0aGF0IHZhbHVlLlxuICogRXhhY3RseSBvbmUgb2YgdGhlc2Ugb3BlcmF0aW9ucyB3aWxsIGNvbXBsZXRlLCBhbmQgaXQgd2lsbCBiZSB0aGUgZmlyc3RcbiAqIG9wZXJhdGlvbiB0aGF0IHVuYmxvY2tzLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gKm11c3QqIGJlIGNhbGxlZCBmcm9tIHdpdGhpbiBhbiBgYXN5bmNgIGZ1bmN0aW9uIGFuZCBhcyBwYXJ0IG9mXG4gKiBhbiBgYXdhaXRgIGV4cHJlc3Npb24gaWYgdGhlIHJldHVybiB2YWx1ZSBpcyBuZWVkZWQuXG4gKlxuICogV2hlbiBgc2VsZWN0YCBpcyBjb21wbGV0ZWQgYW5kIGl0cyBwcm9jZXNzIHVuYmxvY2tzLCBpdHMgYGF3YWl0YCBleHByZXNzaW9uXG4gKiBldmFsdWF0ZXMgdG8gYW4gb2JqZWN0IG9mIHR3byBwcm9wZXJ0aWVzLiBUaGUgYHZhbHVlYCBwcm9wZXJ0eSBiZWNvbWVzXG4gKiBleGFjdGx5IHdoYXQgd291bGQgaGF2ZSBiZWVuIHJldHVybmVkIGJ5IHRoZSBlcXVpdmFsZW50IGBhd2FpdCBwdXRgIG9yIGBhd2FpdFxuICogdGFrZWAgb3BlcmF0aW9uOiBhIGJvb2xlYW4gaW4gdGhlIGNhc2Ugb2YgYSBwdXQsIG9yIHRoZSB0YWtlbiB2YWx1ZSBpbiB0aGVcbiAqIGNhc2Ugb2YgYSB0YWtlLiBUaGUgYGNoYW5uZWxgIHByb3BlcnR5IGlzIHNldCB0byB0aGUgY2hhbm5lbCB3aGVyZSB0aGVcbiAqIG9wZXJhdGlvbiBhY3R1YWxseSB0b29rIHBsYWNlLiBUaGlzIHdpbGwgYmUgZXF1aXZhbGVudCB0byB0aGUgY2hhbm5lbCBpbiB0aGVcbiAqIGBvcGVyYXRpb25zYCBhcnJheSB3aGljaCBjb21wbGV0ZWQgZmlyc3QsIGFsbG93aW5nIHRoZSBwcm9jZXNzIHRvIHVuYmxvY2suXG4gKlxuICogSWYgdGhlcmUgaXMgbW9yZSB0aGFuIG9uZSBvcGVyYXRpb24gYWxyZWFkeSBhdmFpbGFibGUgdG8gY29tcGxldGUgd2hlbiB0aGVcbiAqIGNhbGwgdG8gYHNlbGVjdGAgaXMgbWFkZSwgdGhlIG9wZXJhdGlvbiB3aXRoIHRoZSBoaWdoZXN0IHByaW9yaXR5IHdpbGwgYmUgdGhlXG4gKiBvbmUgdG8gY29tcGxldGUuIFJlZ3VsYXJseSwgcHJpb3JpdHkgaXMgbm9uLWRldGVybWluaXN0aWMgKGkuZS4sIGl0J3Mgc2V0XG4gKiByYW5kb21seSkuIEhvd2V2ZXIsIGlmIHRoZSBvcHRpb25zIG9iamVjdCBoYXMgYSBgcHJpb3JpdHlgIHZhbHVlIHNldCB0b1xuICogYHRydWVgLCBwcmlvcml0eSB3aWxsIGJlIGFzc2lnbmVkIGluIHRoZSBvcmRlciBvZiB0aGUgb3BlcmF0aW9ucyBpbiB0aGVcbiAqIHN1cHBsaWVkIGFycmF5LlxuICpcbiAqIElmIGFsbCBvZiB0aGUgb3BlcmF0aW9ucyBtdXN0IGJsb2NrIChpLmUuLCB0aGVyZSBhcmUgbm8gcGVuZGluZyBwdXRzIGZvciB0YWtlXG4gKiBvcGVyYXRpb25zLCBvciB0YWtlcyBmb3IgcHV0IG9wZXJhdGlvbnMpLCBhIGRlZmF1bHQgdmFsdWUgbWF5IGJlIHJldHVybmVkLlxuICogVGhpcyBpcyBvbmx5IGRvbmUgaWYgdGhlcmUgaXMgYSBgZGVmYXVsdGAgcHJvcGVydHkgaW4gdGhlIG9wdGlvbnMgb2JqZWN0LCBhbmRcbiAqIHRoZSB2YWx1ZSBvZiB0aGF0IHByb3BlcnR5IGJlY29tZXMgdGhlIHZhbHVlIHJldHVybmVkIGJ5IGBhd2FpdCBzZWxlY3RgLiBUaGVcbiAqIGNoYW5uZWwgaXMgc2V0IHRvIHRoZSBzcGVjaWFsIHZhbHVlXG4gKiBge0BsaW5rIG1vZHVsZTpjaGFua29+Q2hhbmtvLkRFRkFVTFR8REVGQVVMVH1gLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y2hhbmtvfkNoYW5rb1xuICogQHBhcmFtIHtvYmplY3RbXX0gb3BlcmF0aW9ucyBBIGNvbGxlY3Rpb24gb2YgZWxlbWVudHMgdGhhdCBjb3JyZXNwb25kIHRvIHJlY3ZcbiAqICAgICBhbmQgc2VuZCBvcGVyYXRpb25zLiBBIHJlY3Ygb3BlcmF0aW9uIGlzIHNpZ25pZmllZCBieSBhbiBlbGVtZW50IHRoYXQgaXNcbiAqICAgICBhIGNoYW5uZWwgKHdoaWNoIGlzIHRoZSBjaGFubmVsIHRvIGJlIHRha2VuIGZyb20pLiBBIHNlbmQgb3BlcmF0aW9uIGlzXG4gKiAgICAgc3BlY2lmaWVkIGJ5IGFuIGVsZW1lbnQgdGhhdCBpcyBpdHNlbGYgYSB0d28tZWxlbWVudCBhcnJheSwgd2hpY2ggaGFzIGFcbiAqICAgICBjaGFubmVsIGZvbGxvd2VkIGJ5IGEgdmFsdWUgKHdoaWNoIGlzIHRoZSBjaGFubmVsIGFuZCB2YWx1ZSB0byBiZSBzZW50KS5cbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9ucz17fV0gQW4gb3B0aW9uYWwgb2JqZWN0IHdoaWNoIGNhbiBjaGFuZ2UgdGhlIGJlaGF2aW9yXG4gKiAgICAgb2YgYHNlbGVjdGAgdGhyb3VnaCB0d28gcHJvcGVydGllcy5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMucHJpb3JpdHk9ZmFsc2VdIElmIGB0cnVlYCwgdGhlbiB0aGUgcHJpb3JpdHkgb2ZcbiAqICAgICBvcGVyYXRpb25zIHRvIGNvbXBsZXRlIHdoZW4gbW9yZSB0aGFuIG9uZSBpcyBpbW1lZGlhdGVseSBhdmFpbGFibGUgaXMgYVxuICogICAgIHByaW9yaXR5IGFjY29yZGluZyB0byBwb3NpdGlvbiB3aXRoaW4gdGhlIG9wZXJhdGlvbnMgYXJyYXkgKGVhcmxpZXJcbiAqICAgICBwb3NpdGlvbnMgaGF2ZSB0aGUgaGlnaGVyIHByaW9yaXR5KS4gSWYgYGZhbHNlYCBvciBub3QgcHJlc2VudCwgdGhlXG4gKiAgICAgcHJpb3J0eSBvZiBvcGVyYXRpb24gY29tcGxldGlvbiBpcyByYW5kb20uXG4gKiBAcGFyYW0geyp9IFtvcHRpb25zLmRlZmF1bHRdIElmIHNldCBhbmQgYWxsIG9mIHRoZSBvcGVyYXRpb25zIGluaXRpYWxseVxuICogICAgIGJsb2NrLCB0aGUgYHNlbGVjdGAgY2FsbCBjb21wbGV0ZXMgaW1tZWRpYXRlbHkgd2l0aCB0aGUgdmFsdWUgb2YgdGhpc1xuICogICAgIG9wdGlvbiAodGhlIGNoYW5uZWwgd2lsbCBiZVxuICogICAgIGB7QGxpbmsgbW9kdWxlOmNoYW5rb35DaGFua28uREVGQVVMVHxERUZBVUxUfSlgLiBJZiBub3Qgc2V0LCB0aGUgYHNlbGVjdGBcbiAqICAgICBjYWxsIHdpbGwgYmxvY2sgdW50aWwgb25lIG9mIHRoZSBvcGVyYXRpb25zIGNvbXBsZXRlcyBhbmQgdGhhdCB2YWx1ZSBhbmRcbiAqICAgICBjaGFubmVsIHdpbGwgYmUgdGhlIG9uZXMgcmV0dXJuZWQuXG4gKiBAcmV0dXJuIHtQcm9taXNlPG1vZHVsZTpjaGFua28vY2hhbm5lbC5TZWxlY3RSZXN1bHQ+fSBBIHByb21pc2UgdGhhdCB3aWxsXG4gKiAgICAgcmVzb2x2ZSB0byBhbiBvYmplY3Qgb2YgdHdvIHByb3BlcnRpZXM6IGB2YWx1ZWAgd2lsbCBjb250YWluIHRoZSB2YWx1ZVxuICogICAgIHRoYXQgd291bGQgaGF2ZSBiZWVuIHJldHVybmVkIGJ5IHRoZSBjb3JyZXNwb25kaW5nXG4gKiAgICAgYHtAbGluayBtb2R1bGU6Y2hhbmtvfkNoYW5rby5zZW5kfHNlbmR9YCBvclxuICogICAgIGB7QGxpbmsgbW9kdWxlOmNoYW5rb35DaGFua28ucmVjdnxyZWN2fWAgb3BlcmF0aW9uOyBhbmQgYGNoYW5uZWxgIHdpbGwgYmVcbiAqICAgICBhIHJlZmVyZW5jZSB0byB0aGUgY2hhbm5lbCB0aGF0IGNvbXBsZXRlZCB0aGUgb3BlcmF0aW9uIHRvIGFsbG93IGBzZWxlY3RgXG4gKiAgICAgdG8gdW5ibG9jay5cbiAqL1xuZnVuY3Rpb24gc2VsZWN0KG9wcywgb3B0aW9ucyA9IHt9KSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICBzZWxlY3RBc3luYyhvcHMsIHJlc29sdmUsIG9wdGlvbnMpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBBIGNvbnZlbmllbmNlIGZ1bmN0aW9uIHRvIHJlYWQgdGhlIHZhbHVlIG91dCBvZiBhIHNlbGVjdCByZXN1bHQuIFRoaXNcbiAqIGZ1bmN0aW9uIGlzIG5vdCBuZWNlc3NhcnkgLSBhZnRlciBhbGwsIGl0J3MgYWJzb2x1dGVseSBhcyBjb3JyZWN0IHRvIHNpbXBseVxuICogdXNlIGByZXN1bHQudmFsdWVgIGluc3RlYWQgb2YgYHZhbHVlKHJlc3VsdClgLCBidXQgaXQncyBwcm92aWRlZCBmb3JcbiAqIGNvbnNpc3RlbmN5IHdpdGggdGhlIHJlc3Qgb2YgdGhlIGZ1bmN0aW9uLWNlbnRyaWMgQVBJLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y2hhbmtvfkNoYW5rb1xuICogQHBhcmFtIHttb2R1bGU6Y2hhbmtvL2NoYW5uZWwuU2VsZWN0UmVzdWx0fSByZXN1bHQgVGhlIHJlc3VsdCBjb21pbmcgZnJvbSBhXG4gKiAgICAgc2VsZWN0IG9wZXJhdGlvbi5cbiAqIEByZXR1cm4geyp9IFRoZSB2YWx1ZSBwcm92aWRlZCBieSB0aGUgc2VsZWN0IG9wZXJhdGlvbi5cbiAqL1xuZnVuY3Rpb24gdmFsdWUocmVzdWx0KSB7XG4gIHJldHVybiByZXN1bHQudmFsdWU7XG59XG5cbi8qKlxuICogQSBjb252ZW5pZW5jZSBmdW5jdGlvbiB0byByZWFkIHRoZSBjaGFubmVsIG91dCBvZiBhIHNlbGVjdCByZXN1bHQuIFRoaXNcbiAqIGZ1bmN0aW9uIGlzIG5vdCBuZWNlc3NhcnkgLSBhZnRlciBhbGwsIGl0J3MgYWJzb2x1dGVseSBhcyBjb3JyZWN0IHRvIHNpbXBseVxuICogdXNlIGByZXN1bHQuY2hhbm5lbGAgaW5zdGVhZCBvZiBgY2hhbm5lbChyZXN1bHQpYCwgYnV0IGl0J3MgcHJvdmlkZWQgZm9yXG4gKiBjb25zaXN0ZW5jeSB3aXRoIHRoZSByZXN0IG9mIHRoZSBmdW5jdGlvbi1jZW50cmljIEFQSS5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNoYW5rb35DaGFua29cbiAqIEBwYXJhbSB7bW9kdWxlOmNoYW5rby9jaGFubmVsLlNlbGVjdFJlc3VsdH0gcmVzdWx0IFRoZSByZXN1bHQgY29taW5nIGZyb20gYVxuICogICAgIHNlbGVjdCBvcGVyYXRpb24uXG4gKiBAcmV0dXJuIHttb2R1bGU6Y2hhbmtvL2NoYW5uZWwuQ2hhbm5lbH0gVGhlIGNoYW5uZWwgdXBvbiB3aGljaCB0aGUgc2VsZWN0XG4gKiAgICAgb3BlcmF0aW9uIGNvbXBsZXRlZC5cbiAqL1xuZnVuY3Rpb24gY2hhbm5lbChyZXN1bHQpIHtcbiAgcmV0dXJuIHJlc3VsdC5jaGFubmVsO1xufVxuXG5leHBvcnQgeyBERUZBVUxULCBzZWxlY3QsIHNlbGVjdEFzeW5jLCB2YWx1ZSwgY2hhbm5lbCB9O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG5cbi8qKlxuICogVGhpcyBpcyB0aGUgcGxhY2Ugd2hlcmUgdGhlIG5ldyBKUyB0YXNrcyBhcmUgYWN0dWFsbHkgY3JlYXRlZC4gQSBxdWV1ZSBpc1xuICogbWFpbnRhaW5lZCBmb3IgdGhlbSwgYW5kIGFzIGVhY2ggYmF0Y2ggb2YgdGFza3MgYXJlIGNvbXBsZXRlZCwgdGhlIG5leHQgb25lc1xuICogcnVuLiBBcyBlYWNoIHByb2Nlc3MgcnVucywgaXQgYWRkcyB0YXNrcyB0byBiZSBydW4gdG8gdGhlIHF1ZXVlLCB3aGljaCBhcmVcbiAqIGVhY2ggcnVuIGluIHRoZWlyIG93biBKUyB0YXNrLlxuICpcbiAqIFRoZSBmdW5jdGlvbiB0aGF0IHNwYXducyB0aGUgbmV3IEpTIHRhc2sgZGVwZW5kcyBvbiBlbnZpcm9ubWVudC4gVGhlXG4gKiBgc2V0SW1tZWRpYXRlYCBmdW5jdGlvbiBpcyBwcmVmZXJyZWQgYXMgaXQncyB0aGUgZmFzdGVzdCwgbm90IHdhaXRpbmcgZm9yXG4gKiBldmVudCBxdWV1ZXMgdG8gZW1wdHkgYmVmb3JlIHNwYXduaW5nIHRoZSBuZXcgcHJvY2Vzcy4gSG93ZXZlciwgaXQgaXMgbm90IEpTXG4gKiBzdGFuZGFyZCBhbmQgY3VycmVudGx5IG9ubHkgd29ya3MgaW4gSUUgYW5kIE5vZGUuIElmIGBzZXRJbW1lZGlhdGVgIGlzbid0XG4gKiBhdmFpbGFibGUsIGFuIGF0dGVtcHQgaXMgbWFkZSB0byB1c2UgYE1lc3NhZ2VDaGFubmVsYCdzIGBvbk1lc3NhZ2VgIGlzIHRyaWVkXG4gKiBuZXh0LiBJZiB0aGF0IGlzIGFsc28gbm90IGF2YWlsYWJsZSwgdGhlbiBgc2V0VGltZW91dGAgd2l0aCBgMGAgZGVsYXkgaXNcbiAqIHVzZWQsIHdoaWNoIGlzIGF2YWlsYWJsZSBldmVyeXdoZXJlIGJ1dCB3aGljaCBpcyB0aGUgbGVhc3QgcGVyZm9ybWFudCBvZiBhbGxcbiAqIG9mIHRoZSBzb2x1dGlvbnMuXG4gKlxuICogVGhlcmUgYXJlIG90aGVyIHBvc3NpYmlsaXRpZXMgZm9yIGNyZWF0aW5nIHByb2Nlc3NlcywgYnV0IHRoZXkgd2VyZSByZWplY3RlZFxuICogYXMgb2Jzb2xldGUgKGBwcm9jZXNzLm5leHRUaWNrYCBhbmQgYG9ucmVhZHlzdGF0ZWNoYW5nZWApIG9yIHVubmVjZXNzYXJ5XG4gKiAoYHdpbmRvdy5wb3N0TWVzc2FnZWAsIHdoaWNoIHdvcmtzIGxpa2UgYE1lc3NhZ2VDaGFubmVsYCBidXQgZG9lc24ndCB3b3JrIGluXG4gKiBXZWIgV29ya2VycykuXG4gKlxuICogSXQgaXMgbm90YWJsZSBhbmQgaW1wb3J0YW50IHRoYXQgd2UgYWN0IGFzIGdvb2QgY2l0aXplbnMgaGVyZS4gVGhpc1xuICogZGlzcGF0Y2hlciBpcyBjYXBhYmxlIG9mIHRha2luZyBjb250cm9sIG9mIHRoZSBKYXZhU2NyaXB0IGVuZ2luZSB1bnRpbFxuICogdGhvdXNhbmRzLCBtaWxsaW9ucywgb3IgbW9yZSB0YXNrcyBhcmUgaGFuZGxlZC4gQnV0IHRoYXQgY291bGQgY2F1c2UgdGhlXG4gKiBzeXN0ZW0gZXZlbnQgbG9vcCB0byBoYXZlIHRvIHdhaXQgYW4gdW5hY2NlcHRhYmxlIGFtb3VudCBvZiB0aW1lLiBTbyB3ZSBsaW1pdFxuICogb3Vyc2VsdmVzIHRvIGEgYmF0Y2ggb2YgdGFza3MgYXQgYSB0aW1lLCBhbmQgaWYgdGhlcmUgYXJlIHN0aWxsIG1vcmUgdG8gYmVcbiAqIHJ1biwgd2UgbGV0IHRoZSBldmVudCBsb29wIHJ1biBiZWZvcmUgdGhhdCBuZXh0IGJhdGNoIGlzIHByb2Nlc3NlZC5cbiAqXG4gKiBUaGUgZGlzcGF0Y2hlciBpcyAqKmdsb2JhbCoqLiBUaGVyZSBpcyBhIHNpbmdsZSBpbnN0YW5jZSB0aGF0IHJ1bnMgZm9yIGFsbFxuICogY2hhbm5lbHMgYW5kIHByb2Nlc3Nlcy4gVGhpcyBpcyB0aGUgb25seSBlbGVtZW50IG9mIHRoZSBzeXN0ZW0gdGhhdCB3b3Jrc1xuICogbGlrZSB0aGlzLlxuICpcbiAqIEBtb2R1bGUgY2hhbmtvL2Rpc3BhdGNoZXJcbiAqIEBzZWUgbW9kdWxlOmNoYW5rb35DaGFua28uY29uZmlnXG4gKi9cblxuaW1wb3J0IHtcbiAgcXVldWUgYXMgcSxcbiAgRU1QVFksXG4gIGNvdW50IGFzIHFDb3VudCxcbiAgZGVxdWV1ZSxcbiAgZW5xdWV1ZVxufSBmcm9tIFwibW9kdWxlcy9xdWV1ZVwiO1xuY29uc3QgcXVldWUgPSBxKCk7XG5cbi8qKlxuICogVGhlIGRpc3BhdGNoIG1ldGhvZCBvcHRpb24gaW5kaWNhdGluZyB0aGF0IGBzZXRJbW1lZGlhdGVgIHNob3VsZCBiZSB1c2VkIHRvXG4gKiBkaXNwYXRjaCB0YXNrcy5cbiAqXG4gKiBUaGlzIGlzIHRoZSBkZWZhdWx0IG9wdGlvbi4gRm9yIGVudmlyb25tZW50cyB0aGF0IGRvbid0IHN1cHBvcnRcbiAqIGBzZXRJbW1lZGlhdGVgLCB0aGlzIGZhbGxzIGJhY2sgdG9cbiAqIGB7QGxpbmsgbW9kdWxlOmNoYW5rb35DaGFua28uTUVTU0FHRV9DSEFOTkVMfE1FU1NBR0VfQ0hBTk5FTH1gLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y2hhbmtvfkNoYW5rb1xuICogQHR5cGUge1N5bWJvbH1cbiAqIEBzZWUge0BsaW5rIG1vZHVsZTpjaGFua29+Q2hhbmtvLmNvbmZpZ3xjb25maWd9XG4gKi9cbmNvbnN0IFNFVF9JTU1FRElBVEUgPSBTeW1ib2woXCJTRVRfSU1NRURJQVRFXCIpO1xuXG4vKipcbiAqIFRoZSBkaXNwYXRjaCBtZXRob2Qgb3B0aW9uIGluZGljYXRpbmcgdGhhdCBhIGBNZXNzYWdlQ2hhbm5lbGAgc2hvdWxkIGJlIHVzZWRcbiAqIHRvIGRpc3BhdGNoIHRhc2tzLlxuICpcbiAqIEZvciBlbnZpcm9ubWVudHMgdGhhdCBkb24ndCBzdXBwb3J0IGBNZXNzYWdlQ2hhbm5lbGAsIHRoaXMgZmFsbHMgYmFjayB0b1xuICogYHtAbGluayBtb2R1bGU6Y2hhbmtvfkNoYW5rby5TRVRfVElNRU9VVHxTRVRfVElNRU9VVH1gLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y2hhbmtvfkNoYW5rb1xuICogQHR5cGUge1N5bWJvbH1cbiAqIEBzZWUge0BsaW5rIG1vZHVsZTpjaGFua29+Q2hhbmtvLmNvbmZpZ3xjb25maWd9XG4gKi9cbmNvbnN0IE1FU1NBR0VfQ0hBTk5FTCA9IFN5bWJvbChcIk1FU1NBR0VfQ0hBTk5FTFwiKTtcblxuLyoqXG4gKiBUaGUgZGlzcGF0Y2ggbWV0aG9kIG9wdGlvbiBpbmRpY2F0aW5nIHRoYXQgYHNldFRpbWVvdXRgIHNob3VsZCBiZSB1c2VkIHRvXG4gKiBkaXNwYXRjaCB0YXNrcy5cbiAqXG4gKiBUaGlzIG1ldGhvZCBpcyBhbHdheXMgYXZhaWxhYmxlLCBidXQgaXQncyBhbHNvIGFsd2F5cyBsZXNzIGVmZmljaWVudCB0aGFuIGFueVxuICogb3RoZXIgbWV0aG9kLCBzbyBpdCBzaG91bGQgYmUgdXNlZCBhcyBhIGxhc3QgcmVzb3J0LlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y2hhbmtvfkNoYW5rb1xuICogQHR5cGUge1N5bWJvbH1cbiAqIEBzZWUgIHtAbGluayBtb2R1bGU6Y2hhbmtvfkNoYW5rby5jb25maWd8Y29uZmlnfVxuICovXG5jb25zdCBTRVRfVElNRU9VVCA9IFN5bWJvbChcIlNFVF9USU1FT1VUXCIpO1xuXG5jb25zdCBvcHRpb25zID0ge1xuICBiYXRjaFNpemU6IDEwMjQsXG4gIGRpc3BhdGNoTWV0aG9kOiBTRVRfSU1NRURJQVRFXG59O1xuXG5sZXQgZGlzcGF0Y2hlciA9IGNyZWF0ZURpc3BhdGNoZXIoKTtcbmxldCBydW5uaW5nID0gZmFsc2U7XG5sZXQgcXVldWVkID0gdHJ1ZTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuZCByZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCBjYW4gYmUgdXNlZCB0byBkaXNwYXRjaCB0YXNrcy4gVGhlXG4gKiBmdW5jdGlvbiB0aGF0IGlzIGNyZWF0ZWQgZGVwZW5kcyBvbiB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGBkaXNwYXRjaE1ldGhvZGBcbiAqIHRoYXQgY2FuIGJlIHNldCB3aXRoIGB7QGxpbmsgbW9kdWxlOmNoYW5rb35DaGFua28uY29uZmlnfGNvbmZpZ31gLlxuICpcbiAqIEByZXR1cm4gQSBkaXNwYXRjaGVyIGZ1bmN0aW9uIHVzaW5nIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgZGlzcGF0Y2ggbWV0aG9kLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY3JlYXRlRGlzcGF0Y2hlcigpIHtcbiAgc3dpdGNoIChjYWxjRGlzcGF0Y2hNZXRob2QoKSkge1xuICAgIC8vIFdlIHByZWZlciBgc2V0SW1tZWRpYXRlYCBpZiBpdCdzIGF2YWlsYWJsZSwgYnV0IGl0J3Mgb25seSBhdmFpbGFibGUgaW5cbiAgICAvLyBOb2RlIGFuZCBzb21lIG9sZCBicm93c2Vycy5cbiAgICBjYXNlIFNFVF9JTU1FRElBVEU6XG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBpZiAoIShxdWV1ZWQgJiYgcnVubmluZykpIHtcbiAgICAgICAgICBxdWV1ZWQgPSB0cnVlO1xuICAgICAgICAgIHNldEltbWVkaWF0ZShwcm9jZXNzVGFza3MpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgLy8gTW9zdCBtb2Rlcm4gYnJvd3NlcnMgaW1wbGVtZW50IGBNZXNzYWdlQ2hhbm5lbGAuIFRoaXMgaXMgdGhlIHByZWZlcnJlZFxuICAgIC8vIG1ldGhvZCBpbiBicm93c2VyIGVudmlyb25tZW50cyB3aGVyZSBgc2V0SW1tZWRpYXRlYCBpc24ndCBhdmFpbGFibGUuXG4gICAgY2FzZSBNRVNTQUdFX0NIQU5ORUw6IHtcbiAgICAgIGNvbnN0IGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gKCkgPT4gcHJvY2Vzc1Rhc2tzKCk7XG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBpZiAoIShxdWV1ZWQgJiYgcnVubmluZykpIHtcbiAgICAgICAgICBxdWV1ZWQgPSB0cnVlO1xuICAgICAgICAgIGNoYW5uZWwucG9ydDIucG9zdE1lc3NhZ2UoMCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gSWYgYWxsIGVsc2UgZmFpbHMsIGp1c3QgdXNlIGBzZXRUaW1lb3V0YC4gSXQncyBhIGxpdHRsZSBzbG93ZXIgdGhhbiB0aGVcbiAgICAvLyBvdGhlciBtZXRob2RzLCBidXQgaXQncyBhdmFpbGFibGUgZXZlcnl3aGVyZS5cbiAgICBjYXNlIFNFVF9USU1FT1VUOlxuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgaWYgKCEocXVldWVkICYmIHJ1bm5pbmcpKSB7XG4gICAgICAgICAgcXVldWVkID0gdHJ1ZTtcbiAgICAgICAgICBzZXRUaW1lb3V0KHByb2Nlc3NUYXNrcywgMCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gIH1cbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBhY3R1YWwgZGlzcGF0Y2ggbWV0aG9kIGJhc2VkIG9uIHRoZSBjdXJyZW50IGRpc3BhdGNoIG1ldGhvZFxuICogc2V0dGluZyBhbmQgZW52aXJvbm1lbnRhbCBhdmFpbGFiaWxpdHkuXG4gKlxuICogVGhlIGRpc3BhdGNoIG1ldGhvZCBpcyBzdG9yZWQgcmF3LCBzbyB0aGlzIGZ1bmN0aW9uIGlzIG5lY2Vzc2FyeSB0byB0YWtlXG4gKiBlbnZpcm9ubWVudCBpbnRvIGFjY291bnQuIEZvciBleGFtcGxlLCBpZiB3ZSdyZSBydW5uaW5nIGluIGEgbW9kZXJuIGJyb3dzZXJcbiAqICh3aGljaCBkb2VzIG5vdCBoYXZlIGBzZXRJbW1lZGlhdGVgKSxcbiAqIGB7QGxpbmsgbW9kdWxlOmNoYW5rb35DaGFua28uU0VUX0lNTUVESUFURXxTRVRfSU1NRURJQVRFfWAgY2FuIHN0aWxsIGJlXG4gKiByZWNvcmRlZCBhcyB0aGUgZGlzcGF0Y2ggbWV0aG9kLCBidXQgdGhpcyBmdW5jdGlvbiB3aWxsIHJldHVyblxuICogYHtAbGluayBtb2R1bGU6Y2hhbmtvfkNoYW5rby5NRVNTQUdFX0NIQU5ORUx8TUVTU0FHRV9DSEFOTkVMfWAuXG4gKlxuICogQHJldHVybiB7U3ltYm9sfSBUaGUgZGlzcGF0Y2ggbWV0aG9kIHRvIHVzZSBiYXNlZCBvbiBzZXR0aW5nIGFuZCBlbnZpcm9ubWVudC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNhbGNEaXNwYXRjaE1ldGhvZCgpIHtcbiAgc3dpdGNoIChvcHRpb25zLmRpc3BhdGNoTWV0aG9kKSB7XG4gICAgY2FzZSBNRVNTQUdFX0NIQU5ORUw6XG4gICAgICBpZiAodHlwZW9mIE1lc3NhZ2VDaGFubmVsICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIHJldHVybiBNRVNTQUdFX0NIQU5ORUw7XG4gICAgICB9XG4gICAgICByZXR1cm4gU0VUX1RJTUVPVVQ7XG5cbiAgICBjYXNlIFNFVF9USU1FT1VUOlxuICAgICAgcmV0dXJuIFNFVF9USU1FT1VUO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIGlmICh0eXBlb2Ygc2V0SW1tZWRpYXRlICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIHJldHVybiBTRVRfSU1NRURJQVRFO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBNZXNzYWdlQ2hhbm5lbCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICByZXR1cm4gTUVTU0FHRV9DSEFOTkVMO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFNFVF9USU1FT1VUO1xuICB9XG59XG5cbi8qKlxuICogVGhlIGhlYXJ0IG9mIHRoZSBkaXNwYXRjaCBwcm9jZXNzLCB0aGlzIGlzIHRoZSBmdW5jdGlvbiBydW4gYnkgdGhlIGRpc3BhdGNoXG4gKiBmdW5jdGlvbiBpbiBvcmRlciB0byBhY3R1YWxseSBydW4gcXVldWVkIHRhc2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHByb2Nlc3NUYXNrcygpIHtcbiAgcnVubmluZyA9IHRydWU7XG4gIHF1ZXVlZCA9IGZhbHNlO1xuICBsZXQgY291bnQgPSAwO1xuXG4gIGZvciAoOzspIHtcbiAgICBjb25zdCB0YXNrID0gZGVxdWV1ZShxdWV1ZSk7XG4gICAgaWYgKHRhc2sgPT09IEVNUFRZKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICB0YXNrKCk7XG5cbiAgICBpZiAoY291bnQgPj0gb3B0aW9ucy5iYXRjaFNpemUpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjb3VudCsrO1xuXG4gICAgcnVubmluZyA9IGZhbHNlO1xuICAgIGlmIChxQ291bnQocXVldWUpKSB7XG4gICAgICBkaXNwYXRjaGVyKCk7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbmQgYXNzaWducyB0aGUgZ2xvYmFsIGRpc3BhdGNoIGZ1bmN0aW9uIGJhc2VkIG9uIGRpc3BhdGNoIG1ldGhvZFxuICogc2V0dGluZyBhbmQgZW52aXJvbm1lbnRhbCBhdmFpbGFiaWxpdHkuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gc2V0RGlzcGF0Y2hlcigpIHtcbiAgZGlzcGF0Y2hlciA9IGNyZWF0ZURpc3BhdGNoZXIoKTtcbn1cblxuLyoqXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBEaXNwYXRjaGVyQ29uZmlnXG4gKiBAcHJvcGVydHkge251bWJlcn0gYmF0Y2hTaXplIFRoZSBtYXhpbXVtIG51bWJlciBvZiB0YXNrcyB0aGF0IHRoZSBkaXNwYXRjaGVyXG4gKiAgICAgd2lsbCBydW4gaW4gYSBzaW5nbGUgYmF0Y2guXG4gKiBAcHJvcGVydHkge1N5bWJvbH0gZGlzcGF0Y2hNZXRob2QgVGhlIG1ldGhvZCB1c2VkIHRvIGRpc3BhdGNoIGEgcHJvY2VzcyBpbnRvXG4gKiAgICAgYSBzZXBhcmF0ZSBsaW5lIG9mIGV4ZWN1dGlvbi5cbiAqL1xuXG4vKipcbiAqIFNldHMgb25lIG9yIG1vcmUgb2YgdGhlIGRpc3BhdGNoZXIgY29uZmlndXJhdGlvbiBvcHRpb25zLlxuICpcbiAqIFRoaXMgaXMgYWR2YW5jZWQgc2V0dGluZyBmb3IgdGhlIGRpc3BhdGNoZXIgdGhhdCBpcyByZXNwb25zaWJsZSBmb3IgcXVldWVpbmdcbiAqIHVwIGNoYW5uZWwgb3BlcmF0aW9ucyBhbmQgcHJvY2Vzc2VzLiBJdCBpcyBsaWtlbHkgdGhhdCB0aGlzIGZ1bmN0aW9uIHdpbGxcbiAqIG5ldmVyIG5lZWQgdG8gYmUgY2FsbGVkIGluIG5vcm1hbCBvcGVyYXRpb24uXG4gKlxuICogSWYgYW55IHJlY29nbml6ZWQgb3B0aW9ucyBhcmUgc3BlY2lmaWVkIGluIHRoZSBvcHRpb25zIG9iamVjdCBwYXNzZWQgdG9cbiAqIGBjb25maWdgLCB0aGVuIHRoZSBvcHRpb24gaXMgc2V0IHRvIHRoZSB2YWx1ZSBzZW50IGluLiBQcm9wZXJ0aWVzIHRoYXQgYXJlbid0XG4gKiBhbnkgb2YgdGhlc2Ugb3B0aW9ucyBhcmUgaWdub3JlZCwgYW5kIGFueSBvZiB0aGVzZSBvcHRpb25zIHRoYXQgZG8gbm90IGFwcGVhclxuICogaW4gdGhlIHBhc3NlZCBvYmplY3QgYXJlIGxlZnQgd2l0aCB0aGVpciBjdXJyZW50IHZhbHVlcy5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNoYW5rb35DaGFua29cbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIEEgbWFwcGluZyBvZiBvcHRpb25zIHRvIHRoZWlyIG5ldyB2YWx1ZXMuIEV4dHJhIHZhbHVlc1xuICogICAgIChwcm9wZXJ0aWVzIHRoYXQgYXJlIG5vdCBvcHRpb25zKSBhcmUgaWdub3JlZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0cy5iYXRjaFNpemVdIFRoZSBtYXhpbXVtIG51bWJlciBvZiB0YXNrcyB0aGF0IHRoZVxuICogICAgIGRpc3BhdGNoZXIgd2lsbCBydW4gaW4gYSBzaW5nbGUgYmF0Y2ggKGluaXRpYWxseSwgdGhpcyBpcyAxMDI0KS4gSWYgdGhlXG4gKiAgICAgbnVtYmVyIG9mIHBlbmRpbmcgdGFza3MgZXhjZWVkcyB0aGlzLCB0aGUgcmVtYWluaW5nIGFyZSBub3QgZGlzY2FyZGVkLlxuICogICAgIFRoZXkncmUgc2ltcGx5IHJ1biBhcyBwYXJ0IG9mIGFub3RoZXIgYmF0Y2ggYWZ0ZXIgdGhlIGN1cnJlbnQgYmF0Y2hcbiAqICAgICBjb21wbGV0ZXMuXG4gKiBAcGFyYW0ge1N5bWJvbH0gW29wdHMuZGlzcGF0Y2hNZXRob2RdIFRoZSBtZXRob2QgdXNlZCB0byBkaXNwYXRjaCBhIHByb2Nlc3NcbiAqICAgICBpbnRvIGEgc2VwYXJhdGUgbGluZSBvZiBleGVjdXRpb24uIFBvc3NpYmxlIHZhbHVlcyBhcmVcbiAqICAgICBge0BsaW5rIG1vZHVsZTpjaGFua29+Q2hhbmtvLlNFVF9JTU1FRElBVEV8U0VUX0lNTUVESUFURX1gLFxuICogICAgIGB7QGxpbmsgbW9kdWxlOmNoYW5rb35DaGFua28uTUVTU0FHRV9DSEFOTkVMfE1FU1NBR0VfQ0hBTk5FTH1gLCBvclxuICogICAgIGB7QGxpbmsgbW9kdWxlOmNoYW5rb35DaGFua28uU0VUX1RJTUVPVVR8U0VUX1RJTUVPVVR9YCwgd2l0aCB0aGUgaW5pdGlhbFxuICogICAgIGJlaW5nIGB7QGxpbmsgbW9kdWxlOmNoYW5rb35DaGFua28uU0VUX0lNTUVESUFURXxTRVRfSU1NRURJQVRFfWAuIElmIGFcbiAqICAgICBtZXRob2QgaXMgc2V0IGJ1dCBpcyBub3QgYXZhaWxhYmxlIGluIHRoYXQgZW52aXJvbm1lbnQsIHRoZW4gaXQgd2lsbFxuICogICAgIHNpbGVudGx5IGZhbGwgYmFjayB0byB0aGUgbmV4dCBtZXRob2QgdGhhdCBpcyBhdmFpbGFibGUuXG4gKiBAcmV0dXJuIHttb2R1bGU6Y2hhbmtvL2Rpc3BhdGNoZXJ+RGlzcGF0Y2hlckNvbmZpZ30gVGhlIGNvbmZpZ3VyYXRpb25cbiAqICAgICBzZXR0aW5ncyBmb3IgdGhlIGRpc3BhdGNoZXIgYWZ0ZXIgYW55IG5ldyB2YWx1ZXMgaGF2ZSBiZWVuIHNldC5cbiAqL1xuZnVuY3Rpb24gY29uZmlnKG9wdHMgPSB7fSkge1xuICBmb3IgKGNvbnN0IGtleSBpbiBvcHRpb25zKSB7XG4gICAgaWYgKGtleSBpbiBvcHRzKSB7XG4gICAgICBvcHRpb25zW2tleV0gPSBvcHRzW2tleV07XG5cbiAgICAgIGlmIChrZXkgPT09IFwiZGlzcGF0Y2hNZXRob2RcIikge1xuICAgICAgICBzZXREaXNwYXRjaGVyKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zKTtcbn1cblxuLyoqXG4gKiBRdWV1ZXMgYSB0YXNrIHRvIGJlIHJ1biBhbmQgc3RhcnRzIHRoZSBkaXNwYXRjaCBwcm9jZXNzLlxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IHRhc2sgQSB0YXNrIHRvIGJlIHF1ZXVlZCBhbmQgcnVuIHRoZSBuZXh0IHRpbWUgYSBiYXRjaCBvZlxuICogICAgIHRhc2tzIGlzIHJ1bi5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGRpc3BhdGNoKHRhc2spIHtcbiAgZW5xdWV1ZShxdWV1ZSwgdGFzayk7XG4gIGRpc3BhdGNoZXIoKTtcbn1cblxuZXhwb3J0IHsgU0VUX0lNTUVESUFURSwgTUVTU0FHRV9DSEFOTkVMLCBTRVRfVElNRU9VVCwgY29uZmlnLCBkaXNwYXRjaCB9O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG5cbi8qKlxuICogUHJvdmlkZXMgc21hbGwgdXRpbGl0eSBmdW5jdGlvbnMgdG8gbWFrZSBpdCBlYXNpZXIgdG8gaW50ZXJhY3Qgd2l0aCBhc3luY1xuICogZnVuY3Rpb25zIGFzIHByb2Nlc3Nlcy5cbiAqXG4gKiBAbW9kdWxlIGNoYW5rby9wcm9jZXNzXG4gKiBAcHJpdmF0ZVxuICovXG5cbmltcG9ydCB7IHRpbWVkQ2hhbiwgcmVjdkFzeW5jIH0gZnJvbSBcIm1vZHVsZXMvY2hhbm5lbFwiO1xuXG4vKipcbiAqIEJsb2NrcyB0aGUgcHJvY2VzcyBmb3IgdGhlIHNwZWNpZmllZCB0aW1lIChpbiBtaWxsaXNlY29uZHMpIGFuZCB0aGVuIHVuYmxvY2tzXG4gKiBpdC5cbiAqXG4gKiBUaGlzIGltcGxlbWVudHMgYSBkZWxheSwgYnV0IG9uZSB0aGF0J3Mgc3VwZXJpb3IgdG8gb3RoZXIga2luZHMgb2YgZGVsYXlzXG4gKiAoYHNldFRpbWVvdXRgLCBldGMuKSBiZWNhdXNlIGl0IGJsb2NrcyB0aGUgcHJvY2VzcyBhbmQgYWxsb3dzIHRoZSBkaXNwYXRjaGVyXG4gKiB0byBhbGxvdyBvdGhlciBwcm9jZXNzZXMgdG8gcnVuIHdoaWxlIHRoaXMgb25lIHdhaXRzLiBUaGUgZGVmYXVsdCBkZWxheSBpcyAwLFxuICogd2hpY2ggd2lsbCByZWxlYXNlIHRoZSBwcm9jZXNzIHRvIGFsbG93IG90aGVycyB0byBydW4gYW5kIHRoZW4gaW1tZWRpYXRlbHlcbiAqIHJlLXF1ZXVlIGl0LlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gKm11c3QqIGJlIGNhbGxlZCBmcm9tIHdpdGhpbiBhbiBgYXN5bmNgIGZ1bmN0aW9uIGFuZCBhcyBwYXJ0IG9mXG4gKiBhbiBgYXdhaXRgIGV4cHJlc3Npb24uXG4gKlxuICogV2hlbiB0aGlzIGZ1bmN0aW9uIGNvbXBsZXRlcyBhbmQgaXRzIHByb2Nlc3MgdW5ibG9ja3MsIHRoZSBgYXdhaXRgIGV4cHJlc3Npb25cbiAqIGRvZXNuJ3QgdGFrZSBvbiBhbnkgbWVhbmluZ2Z1bCB2YWx1ZS4gVGhlIHB1cnBvc2Ugb2YgdGhpcyBmdW5jdGlvbiBpcyBzaW1wbHlcbiAqIHRvIGRlbGF5LCBub3QgdG8gY29tbXVuaWNhdGUgYW55IGRhdGEuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjaGFua29+Q2hhbmtvXG4gKiBAcGFyYW0ge251bWJlcn0gW2RlbGF5PTBdIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRoYXQgdGhlIHByb2Nlc3Mgd2lsbFxuICogICAgIGJsb2NrIGZvci4gQXQgdGhlIGVuZCBvZiB0aGF0IHRpbWUsIHRoZSBwcm9jZXNzIGlzIGFnYWluIGVsaWdpYmxlIHRvIGJlXG4gKiAgICAgcnVuIGJ5IHRoZSBkaXNwYXRjaGVyLiBJZiB0aGlzIGlzIG1pc3Npbmcgb3Igc2V0IHRvIGAwYCwgdGhlIHByb2Nlc3Mgd2lsbFxuICogICAgIGNlZGUgZXhlY3V0aW9uIHRvIHRoZSBuZXh0IG9uZSBidXQgaW1tZWRpYXRlbHkgcmVxdWV1ZSBpdHNlbGYgdG8gYmUgcnVuXG4gKiAgICAgYWdhaW4uXG4gKiBAcmV0dXJuIHtQcm9taXNlfSBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIG5vIG1lYW5pbmdmdWwgcmVzdWx0IHdoZW4gdGhlXG4gKiAgICAgdGltZSBoYXMgZWxhcHNlZC5cbiAqL1xuZnVuY3Rpb24gc2xlZXAoZGVsYXkgPSAwKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICBjb25zdCBjaCA9IHRpbWVkQ2hhbihkZWxheSk7XG4gICAgcmVjdkFzeW5jKGNoLCByZXNvbHZlKTtcbiAgfSk7XG59XG5cbi8qKlxuICogSW52b2tlcyBhbiBhc3luYyBmdW5jdGlvbiBhY3RpbmcgYXMgYSBwcm9jZXNzLlxuICpcbiAqIFRoaXMgaXMgcHVyZWx5IGEgY29udmVuaWVuY2UgZnVuY3Rpb24sIGRyaXZlbiBieSB0aGUgZmFjdCB0aGF0IGl0J3MgbmVjZXNzYXJ5XG4gKiB0byB1c2UgYW4gSUlGRSB0byBpbnZva2UgYW4gYW5vbnltb3VzIGFzeW5jIGZ1bmN0aW9uLCBhbmQgdGhhdCdzIG5vdCB2ZXJ5XG4gKiBhZXN0aGV0aWNhbGx5IHBsZWFzaW5nLiBJdCBkb2VzIG5vIG1vcmUgdGhhbiBpbnZva2UgdGhlIHBhc3NlZCBmdW5jdGlvbiwgYnV0XG4gKiB0aGF0IGF0IGxlYXN0IHJlbGVhc2VzIHVzIGZyb20gdGhlIG5lZWQgdG8gcHV0IHRoZSBlbXB0eSBwYXJlbnRoZXNlcyBhZnRlclxuICogdGhlIGZ1bmN0aW9uIGRlZmluaXRpb24uXG4gKlxuICogQSBuYW1lZCBhc3luYyBmdW5jdGlvbiBjYW4gc2ltcGx5IGJlIGludm9rZWQgKHdpdGhvdXQgYmVpbmcgYW4gSUlGRSkgYW5kXG4gKiBkb2Vzbid0IGJlbmVmaXQgZnJvbSB0aGlzIGNvbnZlbmllbmNlLlxuICpcbiAqIEFub255bW91cyBwcm9jZXNzIHdpdGhvdXQgYGdvYDpcbiAqIGBgYFxuICogKGFzeW5jICgpID0+IHtcbiAqICAgLi4uIGRvIHNvbWUgcHJvY2VzcyBzdHVmZiBoZXJlIC4uLlxuICogfSkoKTtcbiAqIGBgYFxuICogQW5vbnltb3VzIHByb2Nlc3Mgd2l0aCBgZ29gOlxuICogYGBgXG4gKiBnbyhhc3luYyAoKSA9PiB7XG4gKiAgIC4uLiBkbyBzb21lIHByb2Nlc3Mgc3R1ZmYgaGVyZSAuLi5cbiAqIH0pO1xuICogYGBgXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjaGFua29+Q2hhbmtvXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmbiBUaGUgYXN5bmMgZnVuY3Rpb24gYmVpbmcgdXNlZCBhcyBhIHByb2Nlc3MuXG4gKiBAcGFyYW0gey4uLip9IGFyZ3MgQXJndW1lbnRzIHRoYXQgYXJlIHNlbnQgdG8gdGhlIGFzeW5jIGZ1bmN0aW9uIHdoZW4gaXQnc1xuICogICAgIGludm9rZWQuXG4gKiBAcmV0dXJuIHtQcm9taXNlfSBUaGUgcHJvbWlzZSByZXR1cm5lZCBieSB0aGUgYXN5bmMgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGdvKGZuLCAuLi5hcmdzKSB7XG4gIHJldHVybiBmbiguLi5hcmdzKTtcbn1cblxuLyoqXG4gKiBKb2lucyBhbGwgb2YgdGhlIHByb3ZpZGVkIHByb2Nlc3NlcyBpbnRvIGEgc2luZ2xlIHByb2Nlc3MsIHJldHVybmluZyBhXG4gKiBwcm9taXNlIHRoYXQgd3JhcHMgYWxsIG9mIHRoZSBpbmRpdmlkdWFsIHByb2Nlc3NlcycgcHJvbWlzZXMuIFB1dHRpbmcgdGhpcyBpblxuICogYW4gYGF3YWl0YCBzdGF0ZW1lbnQgd2lsbCBibG9jayB1bnRpbCBhbGwgb2YgdGhlIHByb2Nlc3NlcyBjb21wbGV0ZS5cbiAqIFxuICogQG1lbWJlcm9mIG1vZHVsZTpjaGFua29+Q2hhbmtvXG4gKiBAcGFyYW0gey4uLmZ1bmN0aW9ufSBmbnMgQW55IG51bWJlciBvZiBhc3luYyBmdW5jdGlvbnMgd2hvc2UgcmVzb2x1dGlvbnMgYXJlXG4gKiAgICAgYmVpbmcgd2FpdGVkIGZvci5cbiAqIEByZXR1cm4ge1Byb21pc2V9IEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gYWxsIG9mIHRoZSBwcm9jZXNzZXMgcHJvbWlzZXNcbiAqICAgICByZXNvbHZlLlxuICovXG5mdW5jdGlvbiBqb2luKC4uLmZucykge1xuICByZXR1cm4gUHJvbWlzZS5hbGwoZm5zKTtcbn1cblxuZXhwb3J0IHsgc2xlZXAsIGdvLCBqb2luIH07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuLyoqXG4gKiBQcm90b2NvbHMgZm9yIGl0ZXJhdGlvbiBhbmQgcmVkdWN0aW9uLlxuICpcbiAqIFRoZSBuYW1lcyBmb3IgdGhlc2UgcHJvdG9jb2xzIGNhbWUgZnJvbSBhIGRpc2N1c3Npb24gdGhyZWFkXG4gKiAoe0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9jb2duaXRlY3QtbGFicy90cmFuc2R1Y2Vycy1qcy9pc3N1ZXMvMjB9KSBmcm9tIGFcbiAqIHRpbWUgd2hlbiB0cmFuc2R1Y2VycyB3ZXJlIHZlcnkgbXVjaCBpbiB0aGUgZm9yZWZyb250LiBJdCdzIHRoZSBjbG9zZXN0IHRoaW5nXG4gKiB0aGVyZSBpcyB0byBhIHN0YW5kYXJkLCBzbyBpdCB3YXMgYWRvcHRlZCBoZXJlLlxuICpcbiAqIFRoZXNlIGFyZSB0aGUgc2FtZSBzeW1ib2xzIGFzIGF2YWlsYWJsZSBpbiBteSB0cmFuc2R1Y2VyIGxpYnJhcnkuIFRoZXkgYXJlXG4gKiBwdWJsaWNseSBhdmFpbGFibGUgZnJvbSB0aGVyZS5cbiAqXG4gKiBAbW9kdWxlIGNoYW5rby9wcm90b2NvbFxuICogQHByaXZhdGVcbiAqL1xuXG4vKipcbiAqIFRoZSBtYXBwaW5nIG9mIHByb3RvY29sIG5hbWVzIHRvIHRoZWlyIHJlc3BlY3RpdmUgcHJvcGVydHkga2V5IG5hbWVzLiBUaGVcbiAqIHZhbHVlcyBvZiB0aGlzIG1hcCB3aWxsIGRlcGVuZCBvbiB3aGV0aGVyIHN5bWJvbHMgYXJlIGF2YWlsYWJsZS5cbiAqXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBwcm90b2NvbE1hcFxuICogQHByb3BlcnR5IHtTeW1ib2x9IGluaXQgVGhlIGB0cmFuc2R1Y2VyL2luaXRgIHByb3RvY29sLiBUaGlzIGlzIHVzZWRcbiAqICAgICB0byBtYXJrIGZ1bmN0aW9ucyB0aGF0IGluaXRpYWxpemUgYSB0YXJnZXQgY29sbGVjdGlvbiBiZWZvcmUgYWRkaW5nIGl0ZW1zXG4gKiAgICAgdG8gaXQuXG4gKiBAcHJvcGVydHkge1N5bWJvbH0gc3RlcCBUaGUgYHRyYW5zZHVjZXIvc3RlcGAgcHJvdG9jb2wuIFRoaXMgaXMgdXNlZFxuICogICAgIHRvIG1hcmsgZnVuY3Rpb25zIHRoYXQgYXJlIHVzZWQgaW4gdGhlIHRyYW5zZHVjZXIncyBzdGVwIHByb2Nlc3MsIHdoZXJlXG4gKiAgICAgb2JqZWN0cyBhcmUgYWRkZWQgdG8gdGhlIHRhcmdldCBjb2xsZWN0aW9uIG9uZSBhdCBhIHRpbWUuXG4gKiBAcHJvcGVydHkge1N5bWJvbH0gcmVzdWx0IFRoZSBgdHJhbnNkdWNlci9yZXN1bHRgIHByb3RvY29sLiBUaGlzIGlzXG4gKiAgICAgdXNlZCB0byBtYXJrIGZ1bmN0aW9ucyB0aGF0IHRha2UgdGhlIGZpbmFsIHJlc3VsdCBvZiB0aGUgc3RlcCBwcm9jZXNzIGFuZFxuICogICAgIHJldHVybiB0aGUgZmluYWwgZm9ybSB0byBiZSBvdXRwdXQuIFRoaXMgaXMgb3B0aW9uYWw7IGlmIHRoZSB0cmFuc2R1Y2VyXG4gKiAgICAgZG9lcyBub3Qgd2FudCB0byB0cmFuc2Zvcm0gdGhlIGZpbmFsIHJlc3VsdCwgaXQgc2hvdWxkIGp1c3QgcmV0dXJuIHRoZVxuICogICAgIHJlc3VsdCBvZiBpdHMgY2hhaW5lZCB0cmFuc2R1Y2VyJ3MgYHJlc3VsdGAgZnVuY3Rpb24uXG4gKiBAcHJvcGVydHkge1N5bWJvbH0gcmVkdWNlZCBUaGUgYHRyYW5zZHVjZXIvcmVkdWNlZGAgcHJvdG9jb2wuIFRoZVxuICogICAgIHByZXNlbmNlIG9mIHRoaXMga2V5IG9uIGFuIG9iamVjdCBpbmRpY2F0ZXMgdGhhdCBpdHMgdHJhbnNmb3JtYXRpb24gaGFzXG4gKiAgICAgYmVlbiBjb21wbGV0ZWQuIEl0IGlzIHVzZWQgaW50ZXJuYWxseSB0byBtYXJrIGNvbGxlY3Rpb25zIHdob3NlXG4gKiAgICAgdHJhbnNmb3JtYXRpb25zIGNvbmNsdWRlIGJlZm9yZSBldmVyeSBvYmplY3QgaXMgaXRlcmF0ZWQgb3ZlciAoYXMgaW5cbiAqICAgICBge0BsaW5rIHhkdWNlLnRha2V9YCB0cmFuc2R1Y2Vycy4pIEl0IGlzIG9mIGxpdHRsZSB1c2UgYmV5b25kIHRyYW5zZHVjZXJcbiAqICAgICBhdXRob3JpbmcuXG4gKiBAcHJvcGVydHkge1N5bWJvbH0gdmFsdWUgVGhlIGB0cmFuc2R1Y2VyL3ZhbHVlYCBwcm90b2NvbC4gVGhpcyBpc1xuICogICAgIHVzZWQgaW50ZXJuYWxseSB0byBtYXJrIHByb3BlcnRpZXMgdGhhdCBjb250YWluIHRoZSB2YWx1ZSBvZiBhIHJlZHVjZWRcbiAqICAgICB0cmFuc2Zvcm1hdGlvbi4gSXQgaXMgb2YgbGl0dGxlIHVzZSBiZXlvbmQgdHJhbnNkdWNlciBhdXRob3JpbmcuXG4gKi9cblxuLyoqXG4gKiBUaGUgbWFwcGluZyBvZiBwcm90b2NvbCBuYW1lcyB0byB0aGVpciByZXNwZWN0aXZlIHByb3BlcnR5IGtleSBuYW1lcy5cbiAqXG4gKiBAdHlwZSB7bW9kdWxlOmNoYW5rby9wcm90b2NvbHN+cHJvdG9jb2xNYXB9XG4gKiBAcHJpdmF0ZVxuICovXG5jb25zdCBwcm90b2NvbHMgPSBPYmplY3QuY3JlYXRlKG51bGwsIHtcbiAgaW5pdDoge1xuICAgIHZhbHVlOiBTeW1ib2wuZm9yKFwidHJhbnNkdWNlci9pbml0XCIpXG4gIH0sXG4gIHN0ZXA6IHtcbiAgICB2YWx1ZTogU3ltYm9sLmZvcihcInRyYW5zZHVjZXIvc3RlcFwiKVxuICB9LFxuICByZXN1bHQ6IHtcbiAgICB2YWx1ZTogU3ltYm9sLmZvcihcInRyYW5zZHVjZXIvcmVzdWx0XCIpXG4gIH0sXG4gIHJlZHVjZWQ6IHtcbiAgICB2YWx1ZTogU3ltYm9sLmZvcihcInRyYW5zZHVjZXIvcmVkdWNlZFwiKVxuICB9LFxuICB2YWx1ZToge1xuICAgIHZhbHVlOiBTeW1ib2wuZm9yKFwidHJhbnNkdWNlci92YWx1ZVwiKVxuICB9XG59KTtcblxuZXhwb3J0IHsgcHJvdG9jb2xzIH07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuLyoqXG4gKiBQcm92aWRlcyBhbiBlZmZpY2llbnQgZ2VuZXJhbC1wdXJwb3NlIHF1ZXVlLlxuICpcbiAqIEBtb2R1bGUgY2hhbmtvL3F1ZXVlXG4gKiBAcHJpdmF0ZVxuICovXG5cbi8qKlxuICogQSBnZW5lcmFsIHB1cnBvc2UsIGhpZ2hseSBlZmZpY2llbnQgSmF2YVNjcmlwdCBxdWV1ZS4gSXQgaXMgYmFja2VkIGJ5IGFcbiAqIEphdmFTY3JpcHQgYXJyYXksIGJ1dCBpdCBkb2VzIG5vdCB1c2UgYHVuc2hpZnRgIHRvIHRha2UgZWxlbWVudHMgb2ZmIHRoZVxuICogYXJyYXkgYmVjYXVzZSB1bnNoaWZ0IGNhdXNlcyBlbGVtZW50cyB0byBiZSBjb3BpZWQgZXZlcnkgdGltZSBpdCdzIHVzZWQuXG4gKiBJbnN0ZWFkLCBhIHBvaW50ZXIgaXMgbWFpbnRhaW5lZCB0aGF0IGtlZXBzIHRyYWNrIG9mIHRoZSBsb2NhdGlvbiBvZiB0aGUgbmV4dFxuICogZWxlbWVudCB0byBiZSBkZXF1ZXVlZCwgYW5kIHdoZW4gdGhhdCBkZXF1ZXVlIGhhcHBlbnMsIHRoZSBwb2ludGVyIHNpbXBseVxuICogbW92ZXMuIFdoZW4gdGhlIGVtcHR5IHNwYWNlIGF0IHRoZSBoZWFkIG9mIHRoZSBhcnJheSBnZXRzIGxhcmdlIGVub3VnaCwgaXQnc1xuICogcmVtb3ZlZCBieSBhIHNpbmdsZSBzbGljZSBvcGVyYXRpb24uXG4gKlxuICogUHV0dGluZyBlbGVtZW50cyBpbnRvIHRoZSBxdWV1ZSBpcyBqdXN0IGRvbmUgd2l0aCBhIGJhc2ljIGBwdXNoYCwgd2hpY2ggKmlzKlxuICogaGlnaGx5IGVmZmljaWVudC5cbiAqXG4gKiBUaGlzIHR5cGUgb2YgcXVldWUgaXMgcG9zc2libGUgaW4gSmF2YVNjcmlwdCBiZWNhdXNlIEpTIGFycmF5cyBhcmUgcmVzaXphYmxlLlxuICogSW4gbGFuZ3VhZ2VzIHdpdGggZml4ZWQtc2l6ZSBhcnJheXMsIGEgcmVzaXppbmcgb3BlcmF0aW9uIHdvdWxkIGhhdmUgdG8gYmVcbiAqIHJ1biBlYWNoIHRpbWUgdGhlIHF1ZXVlIGZpbGxzLlxuICpcbiAqIEBuYW1lc3BhY2UgUXVldWVcbiAqIEBwcml2YXRlXG4gKi9cblxuLyoqXG4gKiBUaGUgdmFsdWUgcmV0dXJuZWQgd2hlbiBhIHF1ZXVlIGlzIHJlYWQgd2hlbiBpdCdzIGVtcHR5LlxuICpcbiAqIFRoaXMgc3BlY2lhbCB2YWx1ZSBpcyB1c2VkIGJlY2F1c2UgYG51bGxgIGFuZCBgdW5kZWZpbmVkYCBhcmUgcG9zc2libGVcbiAqIGxlZ2l0aW1hdGUgdmFsdWVzIHRoYXQgY2FuIGJlIHN0b3JlZCBpbiBhIHF1ZXVlLiBBbm90aGVyIG9wdGlvbiBpcyB0byB1c2VcbiAqIHNvbWUga2luZCBvZiBgTWF5YmVgIG9yIGBPcHRpb25gIHR5cGUsIGJ1dCB0aGF0IHJlcXVpcmVzIG1vcmUgZWZmb3J0IG9uIHRoZVxuICogcGFydCBvZiB0aGUgZW5kIHVzZXIgdG8gaW50ZXJmYWNlIHdpdGguXG4gKlxuICogQHR5cGUge1N5bWJvbH1cbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y2hhbmtvfkNoYW5rb1xuICovXG5jb25zdCBFTVBUWSA9IFN5bWJvbChcIkVNUFRZXCIpO1xuXG4vKipcbiAqIEEgbWFya2VyIHByb3BlcnR5IG5hbWUgdG8gaW5kaWNhdGUgdGhhdCBhbiBvYmplY3QgaXMgaW4gZmFjdCBhIHF1ZXVlLlxuICpcbiAqIEEgcXVldWUgaGFzIGEgcHJvcGVydHkgd2l0aCB0aGlzIG5hbWUgd2hvc2UgcmVhZG9ubHkgdmFsdWUgaXMgc2V0IHRvIGB0cnVlYC5cbiAqIFRoaXMgaXMgbm90IG1lYW50IHRvIGJlIHJlYWQgZXhjZXB0IGJ5IHRoZVxuICogYHtAbGluayBtb2R1bGU6Y2hhbmtvL3F1ZXVlflF1ZXVlLmlzUXVldWV8aXNRdWV1ZX1gIGZ1bmN0aW9uLlxuICpcbiAqIEB0eXBlIHtTeW1ib2x9XG4gKiBAcHJpdmF0ZVxuICovXG5jb25zdCBRVUVVRSA9IFN5bWJvbChcIlFVRVVFXCIpO1xuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhbiBvYmplY3QgaXMgYSBxdWV1ZS5cbiAqXG4gKiBAcGFyYW0geyp9IG9iaiBUaGUgb2JqZWN0IHRvIGJlIHRlc3RlZC5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IEVpdGhlciBgdHJ1ZWAgaWYgdGhlIG9iamVjdCBpcyBhIHF1ZXVlIG9yIGBmYWxzZWAgaWYgaXQgaXNcbiAqIG5vdC5cbiAqL1xuZnVuY3Rpb24gaXNRdWV1ZShvYmopIHtcbiAgcmV0dXJuICEhb2JqPy5bUVVFVUVdO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgcXVldWUuIFRoaXMgcXVldWUgaXMgY3JlYXRlZCBlbXB0eSwgd2l0aCBhIGJhY2tpbmcgYXJyYXkgb2ZcbiAqIGxlbmd0aCAwLlxuICpcbiAqIEByZXR1cm5zIHttb2R1bGU6Y2hhbmtvL3F1ZXVlflF1ZXVlfSBBIG5ldywgZW1wdHkgcXVldWUuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBxdWV1ZSgpIHtcbiAgcmV0dXJuIE9iamVjdC5jcmVhdGUobnVsbCwge1xuICAgIHN0b3JlOiB7XG4gICAgICB2YWx1ZTogW10sXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0sXG5cbiAgICBwb2ludGVyOiB7XG4gICAgICB2YWx1ZTogMCxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSxcblxuICAgIFtRVUVVRV06IHtcbiAgICAgIHZhbHVlOiB0cnVlXG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBudW1iZXIgb2YgZWxlbWVudHMgc3RvcmVkIGluIGEgcXVldWUuIFRoaXMgbWF5IG9yIG1heSBub3QgZXF1YWxcbiAqIHRoZSBsZW5ndGggb2YgdGhlIGJhY2tpbmcgc3RvcmUsIGFzIHRoZXJlIGlzIG9mdGVuIGVtcHR5IHNwYWNlIGF0IHRoZSBoZWFkIG9mXG4gKiB0aGUgYmFja2luZyBzdG9yZS5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTpjaGFua28vcXVldWV+UXVldWV9IHF1ZXVlIFRoZSBxdWV1ZSB3aG9zZSBpdGVtcyBhcmUgYmVpbmdcbiAqICAgICBjb3VudGVkLlxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgbnVtYmVyIG9mIGl0ZW1zIGluIHRoZSBxdWV1ZS5cbiAqL1xuZnVuY3Rpb24gY291bnQocXVldWUpIHtcbiAgcmV0dXJuIHF1ZXVlLnN0b3JlLmxlbmd0aCAtIHF1ZXVlLnBvaW50ZXI7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGEgcXVldWUgaXMgZW1wdHkuXG4gKlxuICogQHBhcmFtIHttb2R1bGU6Y2hhbmtvL3F1ZXVlflF1ZXVlfSBxdWV1ZSBUaGUgcXVldWUgYmVpbmcgY2hlY2tlZCBmb3JcbiAqICAgICBlbXB0aW5lc3MuXG4gKiBAcmV0dXJuIHtib29sZWFufSBFaXRoZXIgYHRydWVgIGlmIHRoZSBxdWV1ZSBpcyBlbXB0eSBvciBgZmFsc2VgIGlmIGl0IGlzXG4gKiAgICAgbm90LlxuICovXG5mdW5jdGlvbiBpc0VtcHR5KHF1ZXVlKSB7XG4gIHJldHVybiBxdWV1ZS5zdG9yZS5sZW5ndGggPT09IDA7XG59XG5cbi8qKlxuICogQWRkcyBhbiBpdGVtIHRvIGEgcXVldWUuXG4gKlxuICogQHBhcmFtIHttb2R1bGU6Y2hhbmtvL3F1ZXVlflF1ZXVlfSBxdWV1ZSBUaGUgcXVldWUgd2hpY2ggaXMgaGF2aW5nIGFuIGl0ZW1cbiAqICAgICBhZGRlZCB0byBpdC5cbiAqIEBwYXJhbSB7Kn0gaXRlbSBUaGUgaXRlbSBiZWluZyBhZGRlZCB0byB0aGUgcXVldWUuXG4gKi9cbmZ1bmN0aW9uIGVucXVldWUocXVldWUsIGl0ZW0pIHtcbiAgcXVldWUuc3RvcmUucHVzaChpdGVtKTtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFuIGl0ZW0gZnJvbSBhIHF1ZXVlIGFuZCByZXR1cm5zIHRoYXQgaXRlbS4gSWYgdGhlIHJlbW92YWwgY2F1c2VzIHRoZVxuICogYW1vdW50IG9mIGVtcHR5IHNwYWNlIGF0IHRoZSBoZWFkIG9mIHRoZSBiYWNraW5nIHN0b3JlIHRvIGV4Y2VlZCBhIHRocmVzaG9sZCxcbiAqIHRoYXQgZW1wdHkgc3BhY2UgaXMgcmVtb3ZlZC5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTpjaGFua28vcXVldWV+UXVldWV9IHF1ZXVlIFRoZSBxdWV1ZSB3aG9zZSBvbGRlc3QgaXRlbSBpcyB0byBiZVxuICogciAgICBlbW92ZWQuXG4gKiBAcmV0dXJuIHsqfSBUaGUgb2xkZXN0IHN0b3JlZCBpdGVtIGluIHRoZSBxdWV1ZS5cbiAqL1xuZnVuY3Rpb24gZGVxdWV1ZShxdWV1ZSkge1xuICBpZiAocXVldWUuc3RvcmUubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIEVNUFRZO1xuICB9XG5cbiAgY29uc3QgaXRlbSA9IHF1ZXVlLnN0b3JlW3F1ZXVlLnBvaW50ZXJdO1xuICAvLyBSZW1vdmVzIHRoZSBpdGVtcyBpbiB0aGUgYmFja2luZyBzdG9yZSBiZWZvcmUgdGhlIGN1cnJlbnQgcG9pbnRlciwgaWYgdGhlcmVcbiAgLy8gaXMgZW5vdWdoIFwiZW1wdHlcIiBzcGFjZSBiZWZvcmUgdGhlIHBvaW50ZXIgdG8ganVzdGlmeSBpdCAoaS5lLiwgdGhlIHVudXNlZFxuICAvLyBwb3J0aW9uIGlzIGF0IGxlYXN0IGhhbGYgYXMgbGFyZ2UgYXMgdGhlIHVzZWQgcG9ydGlvbilcbiAgaWYgKCsrcXVldWUucG9pbnRlciAqIDIgPj0gcXVldWUuc3RvcmUubGVuZ3RoKSB7XG4gICAgcXVldWUuc3RvcmUgPSBxdWV1ZS5zdG9yZS5zbGljZShxdWV1ZS5wb2ludGVyKTtcbiAgICBxdWV1ZS5wb2ludGVyID0gMDtcbiAgfVxuICByZXR1cm4gaXRlbTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBuZXh0IGl0ZW0gaW4gYSBxdWV1ZSB3aXRob3V0IHJlbW92aW5nIGl0LlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOmNoYW5rby9xdWV1ZX5RdWV1ZX0gcXVldWUgVGhlIHF1ZXVlIHdob3NlIG9sZGVzdCBpdGVtIGlzIHRvIGJlXG4gKiAgICAgcGVla2VkIGF0LlxuICogQHJldHVybiB7Kn0gVGhlIG9sZGVzdCBpdGVtIHN0b3JlZCBpbiB0aGUgcXVldWUuXG4gKi9cbmZ1bmN0aW9uIHBlZWsocXVldWUpIHtcbiAgcmV0dXJuIHF1ZXVlLnN0b3JlLmxlbmd0aCA9PT0gMCA/IEVNUFRZIDogcXVldWUuc3RvcmVbcXVldWUucG9pbnRlcl07XG59XG5cbi8qKlxuICogRmlsdGVycyBvdXQgYW55IGl0ZW0gaW4gYSBxdWV1ZSB0aGF0IGRvZXMgbm90IGNhdXNlIHRoZSBzdXBwbGllZCBwcmVkaWNhdGVcbiAqIGZ1bmN0aW9uIHRvIHJldHVybiBgdHJ1ZWAgd2hlbiBwYXNzZWQgdGhhdCBpdGVtLiBUaGlzIGlzIG5vdCBleGFjdGx5IGFcbiAqIGdlbmVyYWwgcHVycG9zZSBxdWV1ZSBvcGVyYXRpb24sIGJ1dCB3ZSBuZWVkIGl0IHdpdGggY2hhbm5lbHMgdGhhdCB3aWxsXG4gKiBvY2Nhc2lvbmFsbHkgd2FudCB0byBnZXQgcmlkIG9mIGluYWN0aXZlIGhhbmRsZXJzLlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOmNoYW5rby9xdWV1ZX5RdWV1ZX0gcXVldWUgVGhlIHF1ZXVlIGJlaW5nIGZpbHRlcmVkLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm4gVGhlIHByZWRpY2F0ZSBmdW5jdGlvbiB0aGF0IGRldGVybWluZXMgd2hldGhlciBhblxuICogICAgIGVsZW1lbnQgcmVtYWlucyBpbiB0aGUgcXVldWUuXG4gKi9cbmZ1bmN0aW9uIGZpbHRlcihxdWV1ZSwgcHJlZGljYXRlKSB7XG4gIGZvciAobGV0IGkgPSAwLCBlbmQgPSBjb3VudChxdWV1ZSk7IGkgPCBlbmQ7IGkrKykge1xuICAgIGNvbnN0IGl0ZW0gPSBkZXF1ZXVlKHF1ZXVlKTtcbiAgICBpZiAocHJlZGljYXRlKGl0ZW0pKSB7XG4gICAgICBlbnF1ZXVlKHF1ZXVlLCBpdGVtKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IHtcbiAgRU1QVFksXG4gIHF1ZXVlLFxuICBpc1F1ZXVlLFxuICBjb3VudCxcbiAgaXNFbXB0eSxcbiAgZW5xdWV1ZSxcbiAgZGVxdWV1ZSxcbiAgcGVlayxcbiAgZmlsdGVyXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==