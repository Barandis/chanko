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
/*! exports provided: fixed, dropping, sliding, CLOSED, chan, timedChan, transChan, send, recv, sendAsync, recvAsync, recvOrThrow, close, isClosed, isBuffered, isTimed, select, selectAsync, value, channel, config, SET_IMMEDIATE, MESSAGE_CHANNEL, SET_TIMEOUT, go, sleep, EMPTY */
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




const MAX_DIRTY = 64;
const MAX_QUEUED = 1024;
const CLOSED = Symbol("closed");
const BOX = Symbol("box");

function isBox(obj) {
  return !!(obj === null || obj === void 0 ? void 0 : obj[BOX]);
}

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


// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT





const DEFAULT_HANDLER = () => _handler__WEBPACK_IMPORTED_MODULE_2__["CLOSED"];

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

  if (value !== _handler__WEBPACK_IMPORTED_MODULE_2__["CLOSED"]) {
    Object(modules_buffer__WEBPACK_IMPORTED_MODULE_4__["add"])(buffer, value);
  }

  return buffer;
}

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
    maxDirty: _handler__WEBPACK_IMPORTED_MODULE_2__["MAX_DIRTY"],
    maxQueued: _handler__WEBPACK_IMPORTED_MODULE_2__["MAX_QUEUED"]
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
  const impl = Object(_handler__WEBPACK_IMPORTED_MODULE_2__["channel"])(buf, xf, maxDirty, maxQueued);
  const isTimed = typeof timeout === "number";

  if (isTimed) {
    setTimeout(() => Object(_handler__WEBPACK_IMPORTED_MODULE_2__["close"])(impl), timeout);
  }

  const ch = Object.create(null, {
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
  return ch;
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
  const result = Object(_handler__WEBPACK_IMPORTED_MODULE_2__["handleSend"])(channel.impl, value, opHandler(callback));

  if (result && callback) {
    callback(result.value);
  }
}

function recvAsync(channel, callback = () => {}) {
  const result = Object(_handler__WEBPACK_IMPORTED_MODULE_2__["handleRecv"])(channel.impl, opHandler(callback));

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
  Object(_handler__WEBPACK_IMPORTED_MODULE_2__["close"])(channel.impl);
}



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

const DEFAULT = Symbol("DEFAULT");

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

function selectResult(value, channel) {
  return Object.assign(Object.create(null), {
    value,
    channel
  });
}

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
      result = Object(_handler__WEBPACK_IMPORTED_MODULE_0__["handleSend"])(channel.impl, value, createSelectHandler(channel));
    } else {
      channel = op;
      result = Object(_handler__WEBPACK_IMPORTED_MODULE_0__["handleRecv"])(channel.impl, createSelectHandler(channel));
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

function select(ops, options = {}) {
  return new Promise(resolve => {
    selectAsync(ops, resolve, options);
  });
}

function value(selectResult) {
  return selectResult.value;
}

function channel(selectResult) {
  return selectResult.channel;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGFua28vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2NoYW5rby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jaGFua28vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9Bc3luY0dlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly9jaGFua28vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9Bd2FpdFZhbHVlLmpzIiwid2VicGFjazovL2NoYW5rby8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2F3YWl0QXN5bmNHZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vY2hhbmtvLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvd3JhcEFzeW5jR2VuZXJhdG9yLmpzIiwid2VicGFjazovL2NoYW5rby8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vY2hhbmtvLy4vbm9kZV9tb2R1bGVzL3NldGltbWVkaWF0ZS9zZXRJbW1lZGlhdGUuanMiLCJ3ZWJwYWNrOi8vY2hhbmtvLy4vbm9kZV9tb2R1bGVzL3RpbWVycy1icm93c2VyaWZ5L21haW4uanMiLCJ3ZWJwYWNrOi8vY2hhbmtvLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly9jaGFua28vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2hhbmtvLy4vc3JjL21vZHVsZXMvYnVmZmVyLmpzIiwid2VicGFjazovL2NoYW5rby8uL3NyYy9tb2R1bGVzL2NoYW5uZWwvaGFuZGxlci5qcyIsIndlYnBhY2s6Ly9jaGFua28vLi9zcmMvbW9kdWxlcy9jaGFubmVsL2luZGV4LmpzIiwid2VicGFjazovL2NoYW5rby8uL3NyYy9tb2R1bGVzL2NoYW5uZWwvc2VsZWN0LmpzIiwid2VicGFjazovL2NoYW5rby8uL3NyYy9tb2R1bGVzL2Rpc3BhdGNoZXIuanMiLCJ3ZWJwYWNrOi8vY2hhbmtvLy4vc3JjL21vZHVsZXMvcHJvY2Vzcy5qcyIsIndlYnBhY2s6Ly9jaGFua28vLi9zcmMvbW9kdWxlcy9wcm90b2NvbC5qcyIsIndlYnBhY2s6Ly9jaGFua28vLi9zcmMvbW9kdWxlcy9xdWV1ZS5qcyJdLCJuYW1lcyI6WyJCVUZGRVIiLCJTeW1ib2wiLCJGSVhFRCIsIkRST1BQSU5HIiwiU0xJRElORyIsImlzQnVmZmVyIiwib2JqIiwiZml4ZWQiLCJzaXplIiwiT2JqZWN0IiwiY3JlYXRlIiwicXVldWUiLCJ2YWx1ZSIsInEiLCJkcm9wcGluZyIsInNsaWRpbmciLCJidWZmZXIiLCJjb3VudCIsInFDb3VudCIsImlzRnVsbCIsImFkZCIsIml0ZW1zIiwiaXRlbSIsImVucXVldWUiLCJkZXF1ZXVlIiwicmVtb3ZlIiwiTUFYX0RJUlRZIiwiTUFYX1FVRVVFRCIsIkNMT1NFRCIsIkJPWCIsImlzQm94IiwiaXNSZWR1Y2VkIiwicCIsInJlZHVjZWQiLCJib3giLCJ3cml0YWJsZSIsInNlbmRCb3giLCJoYW5kbGVyIiwiY2hhbm5lbCIsInhmb3JtIiwibWF4RGlydHkiLCJtYXhRdWV1ZWQiLCJyZWN2cyIsInNlbmRzIiwiZGlydHlSZWN2cyIsImRpcnR5U2VuZHMiLCJjbG9zZWQiLCJoYW5kbGVTZW5kIiwiaW1wbCIsIkVycm9yIiwiY29tbWl0IiwicmVjZWl2ZXIiLCJjYWxsYmFjayIsImRvbmUiLCJzdGVwIiwiRU1QVFkiLCJhY3RpdmUiLCJ2YWwiLCJkaXNwYXRjaCIsImNsb3NlIiwiZmlsdGVyIiwic2VuZGVyIiwiaGFuZGxlUmVjdiIsInNlbmRIYW5kbGVyIiwicmVzdWx0IiwiREVGQVVMVF9IQU5ETEVSIiwib3BIYW5kbGVyIiwiZm4iLCJoYW5kbGVFeGNlcHRpb24iLCJleCIsImhhbmRsZXJUcmFuc2R1Y2VyIiwiaW5wdXQiLCJidWZmZXJSZWR1Y2VyIiwiaW5pdCIsInBhcnNlQXJncyIsIm9wdGlvbnMiLCJkZWZhdWx0T3B0aW9ucyIsImJ1ZiIsIm9wdHMiLCJ0cmFuc2R1Y2VyIiwidGltZW91dCIsImFzc2lnbiIsImNoYW4iLCJ4ZiIsImNoYW5JbXBsIiwiaXNUaW1lZCIsInNldFRpbWVvdXQiLCJjbG9zZUltcGwiLCJjaCIsImlzQnVmZmVyZWQiLCJpdGVyYXRvciIsInJlY3YiLCJhc3luY0l0ZXJhdG9yIiwidGltZWRDaGFuIiwiZGVsYXkiLCJ0cmFuc0NoYW4iLCJpc0Nsb3NlZCIsInNlbmRBc3luYyIsInJlY3ZBc3luYyIsInNlbmQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlY3ZPclRocm93IiwicmVqZWN0IiwicHJvdG90eXBlIiwiaXNQcm90b3R5cGVPZiIsImNhbGwiLCJERUZBVUxUIiwic2VsZWN0SGFuZGxlciIsImdldCIsInJhbmRvbUFycmF5IiwidXBwZXIiLCJhcnJheSIsImsiLCJwdXNoIiwiaiIsImkiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ0ZW1wIiwic2VsZWN0UmVzdWx0Iiwic2VsZWN0QXN5bmMiLCJvcHMiLCJsZW5ndGgiLCJwcmlvcml0eSIsImluZGljZXMiLCJjcmVhdGVTZWxlY3RIYW5kbGVyIiwib3AiLCJBcnJheSIsImlzQXJyYXkiLCJoYXNPd25Qcm9wZXJ0eSIsImRlZmF1bHQiLCJzZWxlY3QiLCJTRVRfSU1NRURJQVRFIiwiTUVTU0FHRV9DSEFOTkVMIiwiU0VUX1RJTUVPVVQiLCJiYXRjaFNpemUiLCJkaXNwYXRjaE1ldGhvZCIsImRpc3BhdGNoZXIiLCJjcmVhdGVEaXNwYXRjaGVyIiwicnVubmluZyIsInF1ZXVlZCIsImNhbGNEaXNwYXRjaE1ldGhvZCIsInNldEltbWVkaWF0ZSIsInByb2Nlc3NUYXNrcyIsIk1lc3NhZ2VDaGFubmVsIiwicG9ydDEiLCJvbm1lc3NhZ2UiLCJwb3J0MiIsInBvc3RNZXNzYWdlIiwidGFzayIsInNldERpc3BhdGNoZXIiLCJjb25maWciLCJrZXkiLCJzbGVlcCIsImdvIiwiYXJncyIsInByb3RvY29scyIsImZvciIsIlFVRVVFIiwiaXNRdWV1ZSIsInN0b3JlIiwicG9pbnRlciIsImlzRW1wdHkiLCJzbGljZSIsInBlZWsiLCJwcmVkaWNhdGUiLCJlbmQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsaUJBQWlCLG1CQUFPLENBQUMseUVBQWM7O0FBRXZDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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c0IsRUFBRTtBQUNsRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ3pMRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsbUJBQU8sQ0FBQyxpRUFBYztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM5REE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFD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QUFLLENBQUN1SixLQUFOLENBQVl2SixLQUFLLENBQUN3SixPQUFsQixDQUFiLENBTHNCLENBTXRCO0FBQ0E7QUFDQTs7QUFDQSxNQUFJLEVBQUV4SixLQUFLLENBQUN3SixPQUFSLEdBQWtCLENBQWxCLElBQXVCeEosS0FBSyxDQUFDdUosS0FBTixDQUFZdEMsTUFBdkMsRUFBK0M7QUFDN0NqSCxTQUFLLENBQUN1SixLQUFOLEdBQWN2SixLQUFLLENBQUN1SixLQUFOLENBQVlHLEtBQVosQ0FBa0IxSixLQUFLLENBQUN3SixPQUF4QixDQUFkO0FBQ0F4SixTQUFLLENBQUN3SixPQUFOLEdBQWdCLENBQWhCO0FBQ0Q7O0FBQ0QsU0FBTzdJLElBQVA7QUFDRDtBQUVEOzs7Ozs7Ozs7QUFPQSxTQUFTZ0osSUFBVCxDQUFjM0osS0FBZCxFQUFxQjtBQUNuQixTQUFPQSxLQUFLLENBQUN1SixLQUFOLENBQVl0QyxNQUFaLEtBQXVCLENBQXZCLEdBQTJCckUsS0FBM0IsR0FBbUM1QyxLQUFLLENBQUN1SixLQUFOLENBQVl2SixLQUFLLENBQUN3SixPQUFsQixDQUExQztBQUNEO0FBRUQ7Ozs7Ozs7Ozs7OztBQVVBLFNBQVN2RyxNQUFULENBQWdCakQsS0FBaEIsRUFBdUI0SixTQUF2QixFQUFrQztBQUNoQyxPQUFLLElBQUluRCxDQUFDLEdBQUcsQ0FBUixFQUFXb0QsR0FBRyxHQUFHdkosS0FBSyxDQUFDTixLQUFELENBQTNCLEVBQW9DeUcsQ0FBQyxHQUFHb0QsR0FBeEMsRUFBNkNwRCxDQUFDLEVBQTlDLEVBQWtEO0FBQ2hELFVBQU05RixJQUFJLEdBQUdFLE9BQU8sQ0FBQ2IsS0FBRCxDQUFwQjs7QUFDQSxRQUFJNEosU0FBUyxDQUFDakosSUFBRCxDQUFiLEVBQXFCO0FBQ25CQyxhQUFPLENBQUNaLEtBQUQsRUFBUVcsSUFBUixDQUFQO0FBQ0Q7QUFDRjtBQUNGIiwiZmlsZSI6ImNoYW5rby5kZXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJjaGFua29cIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiY2hhbmtvXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsInZhciBBd2FpdFZhbHVlID0gcmVxdWlyZShcIi4vQXdhaXRWYWx1ZVwiKTtcblxuZnVuY3Rpb24gQXN5bmNHZW5lcmF0b3IoZ2VuKSB7XG4gIHZhciBmcm9udCwgYmFjaztcblxuICBmdW5jdGlvbiBzZW5kKGtleSwgYXJnKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZXF1ZXN0ID0ge1xuICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgYXJnOiBhcmcsXG4gICAgICAgIHJlc29sdmU6IHJlc29sdmUsXG4gICAgICAgIHJlamVjdDogcmVqZWN0LFxuICAgICAgICBuZXh0OiBudWxsXG4gICAgICB9O1xuXG4gICAgICBpZiAoYmFjaykge1xuICAgICAgICBiYWNrID0gYmFjay5uZXh0ID0gcmVxdWVzdDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZyb250ID0gYmFjayA9IHJlcXVlc3Q7XG4gICAgICAgIHJlc3VtZShrZXksIGFyZyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXN1bWUoa2V5LCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgdmFyIHJlc3VsdCA9IGdlbltrZXldKGFyZyk7XG4gICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICB2YXIgd3JhcHBlZEF3YWl0ID0gdmFsdWUgaW5zdGFuY2VvZiBBd2FpdFZhbHVlO1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKHdyYXBwZWRBd2FpdCA/IHZhbHVlLndyYXBwZWQgOiB2YWx1ZSkudGhlbihmdW5jdGlvbiAoYXJnKSB7XG4gICAgICAgIGlmICh3cmFwcGVkQXdhaXQpIHtcbiAgICAgICAgICByZXN1bWUoa2V5ID09PSBcInJldHVyblwiID8gXCJyZXR1cm5cIiA6IFwibmV4dFwiLCBhcmcpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldHRsZShyZXN1bHQuZG9uZSA/IFwicmV0dXJuXCIgOiBcIm5vcm1hbFwiLCBhcmcpO1xuICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICByZXN1bWUoXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBzZXR0bGUoXCJ0aHJvd1wiLCBlcnIpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNldHRsZSh0eXBlLCB2YWx1ZSkge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBcInJldHVyblwiOlxuICAgICAgICBmcm9udC5yZXNvbHZlKHtcbiAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgZG9uZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgXCJ0aHJvd1wiOlxuICAgICAgICBmcm9udC5yZWplY3QodmFsdWUpO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgZnJvbnQucmVzb2x2ZSh7XG4gICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgIGRvbmU6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBmcm9udCA9IGZyb250Lm5leHQ7XG5cbiAgICBpZiAoZnJvbnQpIHtcbiAgICAgIHJlc3VtZShmcm9udC5rZXksIGZyb250LmFyZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJhY2sgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHRoaXMuX2ludm9rZSA9IHNlbmQ7XG5cbiAgaWYgKHR5cGVvZiBnZW5bXCJyZXR1cm5cIl0gIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHRoaXNbXCJyZXR1cm5cIl0gPSB1bmRlZmluZWQ7XG4gIH1cbn1cblxuaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuYXN5bmNJdGVyYXRvcikge1xuICBBc3luY0dlbmVyYXRvci5wcm90b3R5cGVbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xufVxuXG5Bc3luY0dlbmVyYXRvci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uIChhcmcpIHtcbiAgcmV0dXJuIHRoaXMuX2ludm9rZShcIm5leHRcIiwgYXJnKTtcbn07XG5cbkFzeW5jR2VuZXJhdG9yLnByb3RvdHlwZVtcInRocm93XCJdID0gZnVuY3Rpb24gKGFyZykge1xuICByZXR1cm4gdGhpcy5faW52b2tlKFwidGhyb3dcIiwgYXJnKTtcbn07XG5cbkFzeW5jR2VuZXJhdG9yLnByb3RvdHlwZVtcInJldHVyblwiXSA9IGZ1bmN0aW9uIChhcmcpIHtcbiAgcmV0dXJuIHRoaXMuX2ludm9rZShcInJldHVyblwiLCBhcmcpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBBc3luY0dlbmVyYXRvcjsiLCJmdW5jdGlvbiBfQXdhaXRWYWx1ZSh2YWx1ZSkge1xuICB0aGlzLndyYXBwZWQgPSB2YWx1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfQXdhaXRWYWx1ZTsiLCJ2YXIgQXdhaXRWYWx1ZSA9IHJlcXVpcmUoXCIuL0F3YWl0VmFsdWVcIik7XG5cbmZ1bmN0aW9uIF9hd2FpdEFzeW5jR2VuZXJhdG9yKHZhbHVlKSB7XG4gIHJldHVybiBuZXcgQXdhaXRWYWx1ZSh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2F3YWl0QXN5bmNHZW5lcmF0b3I7IiwidmFyIEFzeW5jR2VuZXJhdG9yID0gcmVxdWlyZShcIi4vQXN5bmNHZW5lcmF0b3JcIik7XG5cbmZ1bmN0aW9uIF93cmFwQXN5bmNHZW5lcmF0b3IoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbmV3IEFzeW5jR2VuZXJhdG9yKGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF93cmFwQXN5bmNHZW5lcmF0b3I7IiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsIihmdW5jdGlvbiAoZ2xvYmFsLCB1bmRlZmluZWQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIGlmIChnbG9iYWwuc2V0SW1tZWRpYXRlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgbmV4dEhhbmRsZSA9IDE7IC8vIFNwZWMgc2F5cyBncmVhdGVyIHRoYW4gemVyb1xuICAgIHZhciB0YXNrc0J5SGFuZGxlID0ge307XG4gICAgdmFyIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IGZhbHNlO1xuICAgIHZhciBkb2MgPSBnbG9iYWwuZG9jdW1lbnQ7XG4gICAgdmFyIHJlZ2lzdGVySW1tZWRpYXRlO1xuXG4gICAgZnVuY3Rpb24gc2V0SW1tZWRpYXRlKGNhbGxiYWNrKSB7XG4gICAgICAvLyBDYWxsYmFjayBjYW4gZWl0aGVyIGJlIGEgZnVuY3Rpb24gb3IgYSBzdHJpbmdcbiAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBjYWxsYmFjayA9IG5ldyBGdW5jdGlvbihcIlwiICsgY2FsbGJhY2spO1xuICAgICAgfVxuICAgICAgLy8gQ29weSBmdW5jdGlvbiBhcmd1bWVudHNcbiAgICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaSArIDFdO1xuICAgICAgfVxuICAgICAgLy8gU3RvcmUgYW5kIHJlZ2lzdGVyIHRoZSB0YXNrXG4gICAgICB2YXIgdGFzayA9IHsgY2FsbGJhY2s6IGNhbGxiYWNrLCBhcmdzOiBhcmdzIH07XG4gICAgICB0YXNrc0J5SGFuZGxlW25leHRIYW5kbGVdID0gdGFzaztcbiAgICAgIHJlZ2lzdGVySW1tZWRpYXRlKG5leHRIYW5kbGUpO1xuICAgICAgcmV0dXJuIG5leHRIYW5kbGUrKztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhckltbWVkaWF0ZShoYW5kbGUpIHtcbiAgICAgICAgZGVsZXRlIHRhc2tzQnlIYW5kbGVbaGFuZGxlXTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBydW4odGFzaykge1xuICAgICAgICB2YXIgY2FsbGJhY2sgPSB0YXNrLmNhbGxiYWNrO1xuICAgICAgICB2YXIgYXJncyA9IHRhc2suYXJncztcbiAgICAgICAgc3dpdGNoIChhcmdzLmxlbmd0aCkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIGNhbGxiYWNrKGFyZ3NbMF0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIGNhbGxiYWNrKGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIGNhbGxiYWNrKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBjYWxsYmFjay5hcHBseSh1bmRlZmluZWQsIGFyZ3MpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBydW5JZlByZXNlbnQoaGFuZGxlKSB7XG4gICAgICAgIC8vIEZyb20gdGhlIHNwZWM6IFwiV2FpdCB1bnRpbCBhbnkgaW52b2NhdGlvbnMgb2YgdGhpcyBhbGdvcml0aG0gc3RhcnRlZCBiZWZvcmUgdGhpcyBvbmUgaGF2ZSBjb21wbGV0ZWQuXCJcbiAgICAgICAgLy8gU28gaWYgd2UncmUgY3VycmVudGx5IHJ1bm5pbmcgYSB0YXNrLCB3ZSdsbCBuZWVkIHRvIGRlbGF5IHRoaXMgaW52b2NhdGlvbi5cbiAgICAgICAgaWYgKGN1cnJlbnRseVJ1bm5pbmdBVGFzaykge1xuICAgICAgICAgICAgLy8gRGVsYXkgYnkgZG9pbmcgYSBzZXRUaW1lb3V0LiBzZXRJbW1lZGlhdGUgd2FzIHRyaWVkIGluc3RlYWQsIGJ1dCBpbiBGaXJlZm94IDcgaXQgZ2VuZXJhdGVkIGFcbiAgICAgICAgICAgIC8vIFwidG9vIG11Y2ggcmVjdXJzaW9uXCIgZXJyb3IuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KHJ1bklmUHJlc2VudCwgMCwgaGFuZGxlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciB0YXNrID0gdGFza3NCeUhhbmRsZVtoYW5kbGVdO1xuICAgICAgICAgICAgaWYgKHRhc2spIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50bHlSdW5uaW5nQVRhc2sgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJ1bih0YXNrKTtcbiAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckltbWVkaWF0ZShoYW5kbGUpO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50bHlSdW5uaW5nQVRhc2sgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsTmV4dFRpY2tJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIHByb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24gKCkgeyBydW5JZlByZXNlbnQoaGFuZGxlKTsgfSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FuVXNlUG9zdE1lc3NhZ2UoKSB7XG4gICAgICAgIC8vIFRoZSB0ZXN0IGFnYWluc3QgYGltcG9ydFNjcmlwdHNgIHByZXZlbnRzIHRoaXMgaW1wbGVtZW50YXRpb24gZnJvbSBiZWluZyBpbnN0YWxsZWQgaW5zaWRlIGEgd2ViIHdvcmtlcixcbiAgICAgICAgLy8gd2hlcmUgYGdsb2JhbC5wb3N0TWVzc2FnZWAgbWVhbnMgc29tZXRoaW5nIGNvbXBsZXRlbHkgZGlmZmVyZW50IGFuZCBjYW4ndCBiZSB1c2VkIGZvciB0aGlzIHB1cnBvc2UuXG4gICAgICAgIGlmIChnbG9iYWwucG9zdE1lc3NhZ2UgJiYgIWdsb2JhbC5pbXBvcnRTY3JpcHRzKSB7XG4gICAgICAgICAgICB2YXIgcG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cyA9IHRydWU7XG4gICAgICAgICAgICB2YXIgb2xkT25NZXNzYWdlID0gZ2xvYmFsLm9ubWVzc2FnZTtcbiAgICAgICAgICAgIGdsb2JhbC5vbm1lc3NhZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzID0gZmFsc2U7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKFwiXCIsIFwiKlwiKTtcbiAgICAgICAgICAgIGdsb2JhbC5vbm1lc3NhZ2UgPSBvbGRPbk1lc3NhZ2U7XG4gICAgICAgICAgICByZXR1cm4gcG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxQb3N0TWVzc2FnZUltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICAvLyBJbnN0YWxscyBhbiBldmVudCBoYW5kbGVyIG9uIGBnbG9iYWxgIGZvciB0aGUgYG1lc3NhZ2VgIGV2ZW50OiBzZWVcbiAgICAgICAgLy8gKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9ET00vd2luZG93LnBvc3RNZXNzYWdlXG4gICAgICAgIC8vICogaHR0cDovL3d3dy53aGF0d2cub3JnL3NwZWNzL3dlYi1hcHBzL2N1cnJlbnQtd29yay9tdWx0aXBhZ2UvY29tbXMuaHRtbCNjcm9zc0RvY3VtZW50TWVzc2FnZXNcblxuICAgICAgICB2YXIgbWVzc2FnZVByZWZpeCA9IFwic2V0SW1tZWRpYXRlJFwiICsgTWF0aC5yYW5kb20oKSArIFwiJFwiO1xuICAgICAgICB2YXIgb25HbG9iYWxNZXNzYWdlID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChldmVudC5zb3VyY2UgPT09IGdsb2JhbCAmJlxuICAgICAgICAgICAgICAgIHR5cGVvZiBldmVudC5kYXRhID09PSBcInN0cmluZ1wiICYmXG4gICAgICAgICAgICAgICAgZXZlbnQuZGF0YS5pbmRleE9mKG1lc3NhZ2VQcmVmaXgpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcnVuSWZQcmVzZW50KCtldmVudC5kYXRhLnNsaWNlKG1lc3NhZ2VQcmVmaXgubGVuZ3RoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICAgICAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgb25HbG9iYWxNZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBnbG9iYWwuYXR0YWNoRXZlbnQoXCJvbm1lc3NhZ2VcIiwgb25HbG9iYWxNZXNzYWdlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBnbG9iYWwucG9zdE1lc3NhZ2UobWVzc2FnZVByZWZpeCArIGhhbmRsZSwgXCIqXCIpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxNZXNzYWdlQ2hhbm5lbEltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICB2YXIgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICAgICAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgaGFuZGxlID0gZXZlbnQuZGF0YTtcbiAgICAgICAgICAgIHJ1bklmUHJlc2VudChoYW5kbGUpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBjaGFubmVsLnBvcnQyLnBvc3RNZXNzYWdlKGhhbmRsZSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbFJlYWR5U3RhdGVDaGFuZ2VJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgdmFyIGh0bWwgPSBkb2MuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgLy8gQ3JlYXRlIGEgPHNjcmlwdD4gZWxlbWVudDsgaXRzIHJlYWR5c3RhdGVjaGFuZ2UgZXZlbnQgd2lsbCBiZSBmaXJlZCBhc3luY2hyb25vdXNseSBvbmNlIGl0IGlzIGluc2VydGVkXG4gICAgICAgICAgICAvLyBpbnRvIHRoZSBkb2N1bWVudC4gRG8gc28sIHRodXMgcXVldWluZyB1cCB0aGUgdGFzay4gUmVtZW1iZXIgdG8gY2xlYW4gdXAgb25jZSBpdCdzIGJlZW4gY2FsbGVkLlxuICAgICAgICAgICAgdmFyIHNjcmlwdCA9IGRvYy5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICAgICAgICAgICAgc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBydW5JZlByZXNlbnQoaGFuZGxlKTtcbiAgICAgICAgICAgICAgICBzY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlID0gbnVsbDtcbiAgICAgICAgICAgICAgICBodG1sLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG4gICAgICAgICAgICAgICAgc2NyaXB0ID0gbnVsbDtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBodG1sLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbFNldFRpbWVvdXRJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQocnVuSWZQcmVzZW50LCAwLCBoYW5kbGUpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8vIElmIHN1cHBvcnRlZCwgd2Ugc2hvdWxkIGF0dGFjaCB0byB0aGUgcHJvdG90eXBlIG9mIGdsb2JhbCwgc2luY2UgdGhhdCBpcyB3aGVyZSBzZXRUaW1lb3V0IGV0IGFsLiBsaXZlLlxuICAgIHZhciBhdHRhY2hUbyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiAmJiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoZ2xvYmFsKTtcbiAgICBhdHRhY2hUbyA9IGF0dGFjaFRvICYmIGF0dGFjaFRvLnNldFRpbWVvdXQgPyBhdHRhY2hUbyA6IGdsb2JhbDtcblxuICAgIC8vIERvbid0IGdldCBmb29sZWQgYnkgZS5nLiBicm93c2VyaWZ5IGVudmlyb25tZW50cy5cbiAgICBpZiAoe30udG9TdHJpbmcuY2FsbChnbG9iYWwucHJvY2VzcykgPT09IFwiW29iamVjdCBwcm9jZXNzXVwiKSB7XG4gICAgICAgIC8vIEZvciBOb2RlLmpzIGJlZm9yZSAwLjlcbiAgICAgICAgaW5zdGFsbE5leHRUaWNrSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoY2FuVXNlUG9zdE1lc3NhZ2UoKSkge1xuICAgICAgICAvLyBGb3Igbm9uLUlFMTAgbW9kZXJuIGJyb3dzZXJzXG4gICAgICAgIGluc3RhbGxQb3N0TWVzc2FnZUltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGdsb2JhbC5NZXNzYWdlQ2hhbm5lbCkge1xuICAgICAgICAvLyBGb3Igd2ViIHdvcmtlcnMsIHdoZXJlIHN1cHBvcnRlZFxuICAgICAgICBpbnN0YWxsTWVzc2FnZUNoYW5uZWxJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChkb2MgJiYgXCJvbnJlYWR5c3RhdGVjaGFuZ2VcIiBpbiBkb2MuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKSkge1xuICAgICAgICAvLyBGb3IgSUUgNuKAkzhcbiAgICAgICAgaW5zdGFsbFJlYWR5U3RhdGVDaGFuZ2VJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gRm9yIG9sZGVyIGJyb3dzZXJzXG4gICAgICAgIGluc3RhbGxTZXRUaW1lb3V0SW1wbGVtZW50YXRpb24oKTtcbiAgICB9XG5cbiAgICBhdHRhY2hUby5zZXRJbW1lZGlhdGUgPSBzZXRJbW1lZGlhdGU7XG4gICAgYXR0YWNoVG8uY2xlYXJJbW1lZGlhdGUgPSBjbGVhckltbWVkaWF0ZTtcbn0odHlwZW9mIHNlbGYgPT09IFwidW5kZWZpbmVkXCIgPyB0eXBlb2YgZ2xvYmFsID09PSBcInVuZGVmaW5lZFwiID8gdGhpcyA6IGdsb2JhbCA6IHNlbGYpKTtcbiIsInZhciBzY29wZSA9ICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiICYmIGdsb2JhbCkgfHxcbiAgICAgICAgICAgICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzZWxmKSB8fFxuICAgICAgICAgICAgd2luZG93O1xudmFyIGFwcGx5ID0gRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5O1xuXG4vLyBET00gQVBJcywgZm9yIGNvbXBsZXRlbmVzc1xuXG5leHBvcnRzLnNldFRpbWVvdXQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBUaW1lb3V0KGFwcGx5LmNhbGwoc2V0VGltZW91dCwgc2NvcGUsIGFyZ3VtZW50cyksIGNsZWFyVGltZW91dCk7XG59O1xuZXhwb3J0cy5zZXRJbnRlcnZhbCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFRpbWVvdXQoYXBwbHkuY2FsbChzZXRJbnRlcnZhbCwgc2NvcGUsIGFyZ3VtZW50cyksIGNsZWFySW50ZXJ2YWwpO1xufTtcbmV4cG9ydHMuY2xlYXJUaW1lb3V0ID1cbmV4cG9ydHMuY2xlYXJJbnRlcnZhbCA9IGZ1bmN0aW9uKHRpbWVvdXQpIHtcbiAgaWYgKHRpbWVvdXQpIHtcbiAgICB0aW1lb3V0LmNsb3NlKCk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIFRpbWVvdXQoaWQsIGNsZWFyRm4pIHtcbiAgdGhpcy5faWQgPSBpZDtcbiAgdGhpcy5fY2xlYXJGbiA9IGNsZWFyRm47XG59XG5UaW1lb3V0LnByb3RvdHlwZS51bnJlZiA9IFRpbWVvdXQucHJvdG90eXBlLnJlZiA9IGZ1bmN0aW9uKCkge307XG5UaW1lb3V0LnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLl9jbGVhckZuLmNhbGwoc2NvcGUsIHRoaXMuX2lkKTtcbn07XG5cbi8vIERvZXMgbm90IHN0YXJ0IHRoZSB0aW1lLCBqdXN0IHNldHMgdXAgdGhlIG1lbWJlcnMgbmVlZGVkLlxuZXhwb3J0cy5lbnJvbGwgPSBmdW5jdGlvbihpdGVtLCBtc2Vjcykge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG4gIGl0ZW0uX2lkbGVUaW1lb3V0ID0gbXNlY3M7XG59O1xuXG5leHBvcnRzLnVuZW5yb2xsID0gZnVuY3Rpb24oaXRlbSkge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG4gIGl0ZW0uX2lkbGVUaW1lb3V0ID0gLTE7XG59O1xuXG5leHBvcnRzLl91bnJlZkFjdGl2ZSA9IGV4cG9ydHMuYWN0aXZlID0gZnVuY3Rpb24oaXRlbSkge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG5cbiAgdmFyIG1zZWNzID0gaXRlbS5faWRsZVRpbWVvdXQ7XG4gIGlmIChtc2VjcyA+PSAwKSB7XG4gICAgaXRlbS5faWRsZVRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gb25UaW1lb3V0KCkge1xuICAgICAgaWYgKGl0ZW0uX29uVGltZW91dClcbiAgICAgICAgaXRlbS5fb25UaW1lb3V0KCk7XG4gICAgfSwgbXNlY3MpO1xuICB9XG59O1xuXG4vLyBzZXRpbW1lZGlhdGUgYXR0YWNoZXMgaXRzZWxmIHRvIHRoZSBnbG9iYWwgb2JqZWN0XG5yZXF1aXJlKFwic2V0aW1tZWRpYXRlXCIpO1xuLy8gT24gc29tZSBleG90aWMgZW52aXJvbm1lbnRzLCBpdCdzIG5vdCBjbGVhciB3aGljaCBvYmplY3QgYHNldGltbWVkaWF0ZWAgd2FzXG4vLyBhYmxlIHRvIGluc3RhbGwgb250by4gIFNlYXJjaCBlYWNoIHBvc3NpYmlsaXR5IGluIHRoZSBzYW1lIG9yZGVyIGFzIHRoZVxuLy8gYHNldGltbWVkaWF0ZWAgbGlicmFyeS5cbmV4cG9ydHMuc2V0SW1tZWRpYXRlID0gKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmIHNlbGYuc2V0SW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBnbG9iYWwuc2V0SW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAodGhpcyAmJiB0aGlzLnNldEltbWVkaWF0ZSk7XG5leHBvcnRzLmNsZWFySW1tZWRpYXRlID0gKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmIHNlbGYuY2xlYXJJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgJiYgZ2xvYmFsLmNsZWFySW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzICYmIHRoaXMuY2xlYXJJbW1lZGlhdGUpO1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG5cbmV4cG9ydCB7IGZpeGVkLCBkcm9wcGluZywgc2xpZGluZyB9IGZyb20gXCJtb2R1bGVzL2J1ZmZlclwiO1xuZXhwb3J0IHtcbiAgQ0xPU0VELFxuICBjaGFuLFxuICB0aW1lZENoYW4sXG4gIHRyYW5zQ2hhbixcbiAgc2VuZCxcbiAgcmVjdixcbiAgc2VuZEFzeW5jLFxuICByZWN2QXN5bmMsXG4gIHJlY3ZPclRocm93LFxuICBjbG9zZSxcbiAgaXNDbG9zZWQsXG4gIGlzQnVmZmVyZWQsXG4gIGlzVGltZWQsXG4gIHNlbGVjdCxcbiAgc2VsZWN0QXN5bmMsXG4gIHZhbHVlLFxuICBjaGFubmVsXG59IGZyb20gXCJtb2R1bGVzL2NoYW5uZWxcIjtcbmV4cG9ydCB7XG4gIGNvbmZpZyxcbiAgU0VUX0lNTUVESUFURSxcbiAgTUVTU0FHRV9DSEFOTkVMLFxuICBTRVRfVElNRU9VVFxufSBmcm9tIFwibW9kdWxlcy9kaXNwYXRjaGVyXCI7XG5leHBvcnQgeyBnbywgc2xlZXAgfSBmcm9tIFwibW9kdWxlcy9wcm9jZXNzXCI7XG5leHBvcnQgeyBFTVBUWSB9IGZyb20gXCJtb2R1bGVzL3F1ZXVlXCI7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuaW1wb3J0IHsgcXVldWUgYXMgcSwgY291bnQgYXMgcUNvdW50LCBlbnF1ZXVlLCBkZXF1ZXVlIH0gZnJvbSBcIm1vZHVsZXMvcXVldWVcIjtcblxuY29uc3QgQlVGRkVSID0gU3ltYm9sKFwiYnVmZmVyXCIpO1xuY29uc3QgRklYRUQgPSBTeW1ib2woXCJmaXhlZFwiKTtcbmNvbnN0IERST1BQSU5HID0gU3ltYm9sKFwiZHJvcHBpbmdcIik7XG5jb25zdCBTTElESU5HID0gU3ltYm9sKFwic2xpZGluZ1wiKTtcblxuZnVuY3Rpb24gaXNCdWZmZXIob2JqKSB7XG4gIHJldHVybiAhIW9iaj8uW0JVRkZFUl07XG59XG5cbmZ1bmN0aW9uIGZpeGVkKHNpemUpIHtcbiAgcmV0dXJuIE9iamVjdC5jcmVhdGUobnVsbCwge1xuICAgIHF1ZXVlOiB7XG4gICAgICB2YWx1ZTogcSgpXG4gICAgfSxcblxuICAgIHNpemU6IHtcbiAgICAgIHZhbHVlOiBzaXplXG4gICAgfSxcblxuICAgIFtCVUZGRVJdOiB7XG4gICAgICB2YWx1ZTogRklYRURcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBkcm9wcGluZyhzaXplKSB7XG4gIHJldHVybiBPYmplY3QuY3JlYXRlKG51bGwsIHtcbiAgICBxdWV1ZToge1xuICAgICAgdmFsdWU6IHEoKVxuICAgIH0sXG5cbiAgICBzaXplOiB7XG4gICAgICB2YWx1ZTogc2l6ZVxuICAgIH0sXG5cbiAgICBbQlVGRkVSXToge1xuICAgICAgdmFsdWU6IERST1BQSU5HXG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gc2xpZGluZyhzaXplKSB7XG4gIHJldHVybiBPYmplY3QuY3JlYXRlKG51bGwsIHtcbiAgICBxdWV1ZToge1xuICAgICAgdmFsdWU6IHEoKVxuICAgIH0sXG5cbiAgICBzaXplOiB7XG4gICAgICB2YWx1ZTogc2l6ZVxuICAgIH0sXG5cbiAgICBbQlVGRkVSXToge1xuICAgICAgdmFsdWU6IFNMSURJTkdcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBxdWV1ZShidWZmZXIpIHtcbiAgcmV0dXJuIGJ1ZmZlci5xdWV1ZTtcbn1cblxuZnVuY3Rpb24gc2l6ZShidWZmZXIpIHtcbiAgcmV0dXJuIGJ1ZmZlci5zaXplO1xufVxuXG5mdW5jdGlvbiBjb3VudChidWZmZXIpIHtcbiAgcmV0dXJuIHFDb3VudChidWZmZXIucXVldWUpO1xufVxuXG5mdW5jdGlvbiBpc0Z1bGwoYnVmZmVyKSB7XG4gIHJldHVybiBidWZmZXJbQlVGRkVSXSA9PT0gRklYRUQgPyBxQ291bnQoYnVmZmVyLnF1ZXVlKSA+PSBidWZmZXIuc2l6ZSA6IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBhZGQoYnVmZmVyLCAuLi5pdGVtcykge1xuICBzd2l0Y2ggKGJ1ZmZlcltCVUZGRVJdKSB7XG4gICAgY2FzZSBGSVhFRDpcbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBpdGVtcykge1xuICAgICAgICBlbnF1ZXVlKGJ1ZmZlci5xdWV1ZSwgaXRlbSk7XG4gICAgICB9XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgRFJPUFBJTkc6XG4gICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgaXRlbXMpIHtcbiAgICAgICAgaWYgKGNvdW50KGJ1ZmZlcikgPCBzaXplKGJ1ZmZlcikpIHtcbiAgICAgICAgICBlbnF1ZXVlKGJ1ZmZlci5xdWV1ZSwgaXRlbSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBTTElESU5HOlxuICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGl0ZW1zKSB7XG4gICAgICAgIGlmIChjb3VudChidWZmZXIpID49IHNpemUoYnVmZmVyKSkge1xuICAgICAgICAgIGRlcXVldWUoYnVmZmVyLnF1ZXVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbnF1ZXVlKGJ1ZmZlci5xdWV1ZSwgaXRlbSk7XG4gICAgICB9XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm47XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlKGJ1ZmZlcikge1xuICByZXR1cm4gZGVxdWV1ZShidWZmZXIucXVldWUpO1xufVxuXG5leHBvcnQge1xuICBpc0J1ZmZlcixcbiAgZml4ZWQsXG4gIGRyb3BwaW5nLFxuICBzbGlkaW5nLFxuICBxdWV1ZSxcbiAgc2l6ZSxcbiAgY291bnQsXG4gIGlzRnVsbCxcbiAgYWRkLFxuICByZW1vdmVcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuaW1wb3J0IHsgcHJvdG9jb2xzIGFzIHAgfSBmcm9tIFwibW9kdWxlcy9wcm90b2NvbFwiO1xuaW1wb3J0IHtcbiAgcXVldWUsXG4gIGRlcXVldWUsXG4gIEVNUFRZLFxuICBmaWx0ZXIsXG4gIGNvdW50IGFzIHFDb3VudCxcbiAgZW5xdWV1ZVxufSBmcm9tIFwibW9kdWxlcy9xdWV1ZVwiO1xuaW1wb3J0IHsgaXNGdWxsLCBjb3VudCwgcmVtb3ZlIH0gZnJvbSBcIm1vZHVsZXMvYnVmZmVyXCI7XG5pbXBvcnQgeyBkaXNwYXRjaCB9IGZyb20gXCJtb2R1bGVzL2Rpc3BhdGNoZXJcIjtcblxuY29uc3QgTUFYX0RJUlRZID0gNjQ7XG5jb25zdCBNQVhfUVVFVUVEID0gMTAyNDtcblxuY29uc3QgQ0xPU0VEID0gU3ltYm9sKFwiY2xvc2VkXCIpO1xuXG5jb25zdCBCT1ggPSBTeW1ib2woXCJib3hcIik7XG5cbmZ1bmN0aW9uIGlzQm94KG9iaikge1xuICByZXR1cm4gISFvYmo/LltCT1hdO1xufVxuXG5mdW5jdGlvbiBpc1JlZHVjZWQodmFsdWUpIHtcbiAgcmV0dXJuICEhdmFsdWU/LltwLnJlZHVjZWRdO1xufVxuXG5mdW5jdGlvbiBib3godmFsdWUpIHtcbiAgcmV0dXJuIE9iamVjdC5jcmVhdGUobnVsbCwge1xuICAgIHZhbHVlOiB7XG4gICAgICB2YWx1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSxcbiAgICBbQk9YXToge1xuICAgICAgdmFsdWU6IHRydWVcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzZW5kQm94KHZhbHVlLCBoYW5kbGVyKSB7XG4gIHJldHVybiBPYmplY3QuY3JlYXRlKG51bGwsIHtcbiAgICB2YWx1ZToge1xuICAgICAgdmFsdWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0sXG4gICAgaGFuZGxlcjoge1xuICAgICAgdmFsdWU6IGhhbmRsZXJcbiAgICB9LFxuICAgIFtCT1hdOiB7XG4gICAgICB2YWx1ZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNoYW5uZWwoYnVmZmVyLCB4Zm9ybSwgbWF4RGlydHkgPSBNQVhfRElSVFksIG1heFF1ZXVlZCA9IE1BWF9RVUVVRUQpIHtcbiAgcmV0dXJuIE9iamVjdC5jcmVhdGUobnVsbCwge1xuICAgIGJ1ZmZlcjoge1xuICAgICAgdmFsdWU6IGJ1ZmZlclxuICAgIH0sXG4gICAgeGZvcm06IHtcbiAgICAgIHZhbHVlOiB4Zm9ybVxuICAgIH0sXG4gICAgbWF4RGlydHk6IHtcbiAgICAgIHZhbHVlOiBtYXhEaXJ0eVxuICAgIH0sXG4gICAgbWF4UXVldWVkOiB7XG4gICAgICB2YWx1ZTogbWF4UXVldWVkXG4gICAgfSxcbiAgICByZWN2czoge1xuICAgICAgdmFsdWU6IHF1ZXVlKClcbiAgICB9LFxuICAgIHNlbmRzOiB7XG4gICAgICB2YWx1ZTogcXVldWUoKVxuICAgIH0sXG4gICAgZGlydHlSZWN2czoge1xuICAgICAgdmFsdWU6IDAsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0sXG4gICAgZGlydHlTZW5kczoge1xuICAgICAgdmFsdWU6IDAsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0sXG4gICAgY2xvc2VkOiB7XG4gICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVNlbmQoaW1wbCwgdmFsdWUsIGhhbmRsZXIpIHtcbiAgaWYgKHZhbHVlID09PSBDTE9TRUQpIHtcbiAgICB0aHJvdyBFcnJvcihcIkNhbm5vdCBzZW5kIENMT1NFRCB0byBhIGNoYW5uZWxcIik7XG4gIH1cblxuICBpZiAoaW1wbC5jbG9zZWQpIHtcbiAgICBoYW5kbGVyLmNvbW1pdCgpO1xuICAgIHJldHVybiBib3goZmFsc2UpO1xuICB9XG5cbiAgbGV0IHJlY2VpdmVyLCBjYWxsYmFjaztcblxuICAvLyBQdXNoIHRoZSBpbmNvbWluZyB2YWx1ZSB0aHJvdWdoIHRoZSBidWZmZXIsIGV2ZW4gaWYgdGhlcmUncyBhbHJlYWR5IGFcbiAgLy8gcmVjZWl2ZXIgd2FpdGluZyBmb3IgdGhlIHZhbHVlLiBUaGlzIGlzIHRvIG1ha2Ugc3VyZSB0aGF0IHRoZSB0cmFuc2R1Y2VyXG4gIC8vIHN0ZXAgZnVuY3Rpb24gaGFzIGEgY2hhbmNlIHRvIGFjdCBvbiB0aGUgdmFsdWUgZmlyc3QsIHdoaWNoIGNvdWxkIGNoYW5nZVxuICAvLyB0aGUgdmFsdWUgb3IgbWFrZSBpdCBhbHRvZ2V0aGVyIHVuYXZhaWxhYmxlLlxuICAvL1xuICAvLyBJZiB0aGUgY2hhbm5lbCBpcyB1bmJ1ZmZlcmVkIHRoaXMgcHJvY2VzcyBpcyBza2lwcGVkICh0aGVyZSBjYW4ndCBiZSBhXG4gIC8vIHRyYW5zZHVjZXIgb24gYW4gdW5idWZmZXJlZCBjaGFubmVsIGFueXdheSkuIElmIHRoZSBidWZmZXIgaXMgZnVsbCwgdGhlXG4gIC8vIHRyYW5zZHVjZXIncyB3b3JrIGlzIGRlZmVycmVkIHVudGlsIGxhdGVyIHdoZW4gdGhlIGJ1ZmZlciBpcyBub3QgZnVsbC5cbiAgaWYgKGltcGwuYnVmZmVyICYmICFpc0Z1bGwoaW1wbC5idWZmZXIpKSB7XG4gICAgaGFuZGxlci5jb21taXQoKTtcbiAgICBjb25zdCBkb25lID0gaXNSZWR1Y2VkKGltcGwueGZvcm1bcC5zdGVwXShpbXBsLmJ1ZmZlciwgdmFsdWUpKTtcblxuICAgIGZvciAoOzspIHtcbiAgICAgIGlmIChjb3VudChpbXBsLmJ1ZmZlcikgPT09IDApIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICByZWNlaXZlciA9IGRlcXVldWUoaW1wbC5yZWN2cyk7XG4gICAgICBpZiAocmVjZWl2ZXIgPT09IEVNUFRZKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgaWYgKHJlY2VpdmVyLmFjdGl2ZSkge1xuICAgICAgICBjYWxsYmFjayA9IHJlY2VpdmVyLmNvbW1pdCgpO1xuICAgICAgICBjb25zdCB2YWwgPSByZW1vdmUoaW1wbC5idWZmZXIpO1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICBkaXNwYXRjaCgoKSA9PiBjYWxsYmFjayh2YWwpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChkb25lKSB7XG4gICAgICBjbG9zZShpbXBsKTtcbiAgICB9XG4gICAgcmV0dXJuIGJveCh0cnVlKTtcbiAgfVxuXG4gIC8vIFRoaXMgbG9vcCBoYXBwZW5zIGlmIHRoZSBjaGFubmVsIGlzIHVuYnVmZmVyZWQgYW5kIHRoZXJlIGlzIGF0IGxlYXN0IG9uZVxuICAvLyBwZW5kaW5nIHJlY2VpdmUuIChCdWZmZXJlZCBjaGFubmVscyBicmVhayBvdXQgb2YgdGhpcyBsb29wIGltbWVkaWF0ZWx5LFxuICAvLyBiZWNhdXNlIGluIG9yZGVyIGZvciBhIGJ1ZmZlcmVkIGNoYW5uZWwgdG8gcmVhY2ggdGhpcyBwb2ludCwgaXRzIGJ1ZmZlclxuICAvLyBtdXN0IGhhdmUgYmVlbiBmdWxsLiBJZiB0aGUgYnVmZmVyIGlzIGZ1bGwsIHRoYXQgbWVhbnMgdGhlcmUgYXJlIG5vIHBlbmRpbmdcbiAgLy8gcmVjZWl2ZXMgYW5kIHRoZSBmaXJzdCBvbmUgcmVhZCB3aWxsIGJlIEVNUFRZLikgSXQgcHJvY2Vzc2VzIHRoZSBuZXh0XG4gIC8vIHBlbmRpbmcgcmVjZWl2ZSBpbW1lZGlhdGVseS5cbiAgZm9yICg7Oykge1xuICAgIHJlY2VpdmVyID0gZGVxdWV1ZShpbXBsLnJlY3ZzKTtcbiAgICBpZiAocmVjZWl2ZXIgPT09IEVNUFRZKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgaWYgKHJlY2VpdmVyLmFjdGl2ZSkge1xuICAgICAgaGFuZGxlci5jb21taXQoKTtcbiAgICAgIGNhbGxiYWNrID0gcmVjZWl2ZXIuY29tbWl0KCk7XG4gICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgZGlzcGF0Y2goKCkgPT4gY2FsbGJhY2sodmFsdWUpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBib3godHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgLy8gSWYgdGhlcmUgYXJlIG5vIHBlbmRpbmcgcmVjZWl2ZXMgb24gYW4gdW5idWZmZXJlZCBjaGFubmVsLCBvciBvbiBhIGJ1ZmZlcmVkXG4gIC8vIGNoYW5uZWwgd2l0aCBhIGZ1bGwgYnVmZmVyLCB3ZSBxdWV1ZSB0aGUgc2VuZCB0byB0bGV0IGl0IHdhaXQgZm9yIGEgcmVjZWl2ZVxuICAvLyB0byBiZWNvbWUgYXZhaWxhYmxlLiBTZW5kcyB3aG9zZSBoYW5kbGVycyBoYXZlIGdvbmUgaW5hY3RpdmUgKHdoaWNoIGhhcHBlbnNcbiAgLy8gaWYgdGhleSB3ZXJlIHByb2Nlc3NlZCBhcyBwYXJ0IG9mIGEgYHNlbGVjdGAgY2FsbCkgYXJlIHBlcmlvZGljYWxseSBwdXJnZWQuXG4gIGlmIChpbXBsLmRpcnR5U2VuZHMgPiBpbXBsLm1heERpcnR5KSB7XG4gICAgZmlsdGVyKGltcGwuc2VuZHMsIHNlbmRlciA9PiBzZW5kZXIuaGFuZGxlci5hY3RpdmUpO1xuICAgIGltcGwuZGlydHlTZW5kcyA9IDA7XG4gIH0gZWxzZSB7XG4gICAgaW1wbC5kaXJ0eVNlbmRzKys7XG4gIH1cblxuICBpZiAocUNvdW50KGltcGwuc2VuZHMpID49IGltcGwubWF4UXVldWVkKSB7XG4gICAgdGhyb3cgRXJyb3IoXG4gICAgICBgTm8gbW9yZSB0aGFuICR7aW1wbC5tYXhRdWV1ZWR9IHBlbmRpbmcgc2VuZHMgYXJlIGFsbG93ZWQgb24gYSBzaW5nbGUgY2hhbm5lbGBcbiAgICApO1xuICB9XG4gIGVucXVldWUoaW1wbC5zZW5kcywgc2VuZEJveCh2YWx1ZSwgaGFuZGxlcikpO1xuXG4gIHJldHVybiBudWxsO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVSZWN2KGltcGwsIGhhbmRsZXIpIHtcbiAgbGV0IHNlbmRlciwgc2VuZEhhbmRsZXIsIGNhbGxiYWNrO1xuXG4gIC8vIFJ1bnMgaWYgdGhlIGNoYW5uZWwgaXMgYnVmZmVyZWQgYW5kIHRoZSBidWZmZXJlZCBpcyBub3QgZW1wdHkgKGFuIGVtcHR5XG4gIC8vIGJ1ZmZlciBtZWFucyB0aGVyZSBhcmUgbm8gcGVuZGluZyBzZW5kcykuIFdlIGltbWVkaWF0ZWx5IHByb2Nlc3MgYW55IHNlbmRzXG4gIC8vIHRoYXQgd2VyZSBxdWV1ZWQgd2hlbiB0aGVyZSB3ZXJlIG5vIHBlbmRpbmcgcmVjZWl2ZXMsIHVwIHVudGlsIHRoZSBidWZmZXJcbiAgLy8gaXMgZmlsbGVkIHdpdGggc2VudCB2YWx1ZXMuXG4gIGlmIChpbXBsLmJ1ZmZlciAmJiBjb3VudChpbXBsLmJ1ZmZlcikgPiAwKSB7XG4gICAgaGFuZGxlci5jb21taXQoKTtcbiAgICBjb25zdCB2YWx1ZSA9IHJlbW92ZShpbXBsLmJ1ZmZlcik7XG5cbiAgICBmb3IgKDs7KSB7XG4gICAgICBpZiAoaXNGdWxsKGltcGwuYnVmZmVyKSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHNlbmRlciA9IGRlcXVldWUoaW1wbC5zZW5kcyk7XG4gICAgICBpZiAoc2VuZGVyID09PSBFTVBUWSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgc2VuZEhhbmRsZXIgPSBzZW5kZXIuaGFuZGxlcjtcbiAgICAgIGlmIChzZW5kSGFuZGxlci5hY3RpdmUpIHtcbiAgICAgICAgY2FsbGJhY2sgPSBzZW5kSGFuZGxlci5jb21taXQoKTtcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgZGlzcGF0Y2goKCkgPT4gY2FsbGJhY2sodHJ1ZSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc1JlZHVjZWQoaW1wbC54Zm9ybVtwLnN0ZXBdKGltcGwuYnVmZmVyLCBzZW5kZXIudmFsdWUpKSkge1xuICAgICAgICAgIGNsb3NlKGltcGwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBib3godmFsdWUpO1xuICB9XG5cbiAgLy8gVGhpcyBsb29wIHJ1bnMgb24gYW4gdW5idWZmZXJlZCBjaGFubmVsIGlmIHRoZXJlIGFyZSBhbnkgcGVuZGluZyBzZW5kcy5cbiAgLy8gKEJ1ZmZlcmVkIGNoYW5uZWxzIGJyZWFrIG91dCBvZiB0aGlzIGxvb3AgaW1tZWRpYXRlbHkgYmVjYXVzZSBpbiBvcmRlciB0b1xuICAvLyBoYXZlIGNvbWUgdGhpcyBmYXIgd2l0aG91dCByZXR1cm5pbmcsIHRoZSBjaGFubmVsJ3MgYnVmZmVyIG11c3QgaGF2ZSBiZWVuXG4gIC8vIGVtcHR5LiBBbiBlbXB0eSBidWZmZXIgbWVhbnMgdGhlcmUgYXJlIG5vIHBlbmRpbmcgc2VuZHMsIHNvIHRoZSBmaXJzdFxuICAvLyBwZW5kaW5nIHNlbmQgcmVhZCBmcm9tIGl0IHdpbGwgYmUgRU1QVFkuKSBJdCBwcm9jZXNzZXMgdGhlIG5leHQgcGVuZGluZ1xuICAvLyBzZW5kIGltbWVkaWF0ZWx5LlxuICBmb3IgKDs7KSB7XG4gICAgc2VuZGVyID0gZGVxdWV1ZShpbXBsLnNlbmRzKTtcbiAgICBpZiAoc2VuZGVyID09PSBFTVBUWSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHNlbmRIYW5kbGVyID0gc2VuZGVyLmhhbmRsZXI7XG4gICAgaWYgKHNlbmRIYW5kbGVyLmFjdGl2ZSkge1xuICAgICAgY2FsbGJhY2sgPSBzZW5kSGFuZGxlci5jb21taXQoKTtcbiAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICBkaXNwYXRjaCgoKSA9PiBjYWxsYmFjayh0cnVlKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gYm94KHNlbmRlci52YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgLy8gSWYgd2UndmUgZXhoYXVzdGVkIGFsbCBvZiBvdXIgcGVuZGluZyBzZW5kcyBhbmQgdGhlIGNoYW5uZWwgaXMgbWFya2VkXG4gIC8vIGNsb3NlZCwgd2UgY2FuIGZpbmFsbHkgcmV1dHJuIHRoZSBmYWN0IHRoYXQgdGhlIGNoYW5uZWwgaXMgY2xvc2VkLiBUaGlzXG4gIC8vIGVuc3VyZXMgdGhhdCBhbnkgc2VuZHMgdGhhdCB3ZXJlIGFscmVhZHkgcGVuZGluZyBvbiB0aGUgY2hhbm5lbCBhcmVcbiAgLy8gcHJvY2Vzc2VkIGJlZm9yZSBjbG9zdXJlLCBldmVuIGlmIHRoZSBjaGFubmVsIHdhcyBjbG9zZWQgYmVmb3JlIHRoYXQgY291bGRcbiAgLy8gaGFwcGVuLlxuICBpZiAoaW1wbC5jbG9zZWQpIHtcbiAgICBoYW5kbGVyLmNvbW1pdCgpO1xuICAgIHJldHVybiBib3goQ0xPU0VEKTtcbiAgfVxuXG4gIC8vIElmIGFuIHVuYnVmZmVyZWQgY2hhbm5lbCBvciBhIGJ1ZmZlcmVkIGNoYW5uZWwgd2l0aCBhbiBlbXB0eSBidWZmZXIgaGFzIG5vXG4gIC8vIHBlbmRpbmcgc2VuZHMsIGFuZCBpZiB0aGUgY2hhbm5lbCBpcyBzdGlsbCBvcGVuLCB0aGUgcmVjZWl2ZSBpcyBxdWV1ZWQgdG9cbiAgLy8gYmUgcHJvY2Vzc2VkIHdoZW4gYSBzZW5kIGlzIGF2YWlsYWJsZS4gUmVjZWl2ZXMgd2hvc2UgaGFuZGxlcnMgaGF2ZSBnb25lXG4gIC8vIGluYWN0aXZlIGFzIHRoZSByZXN1bHQgb2YgYHNlbGVjdGAgcHJvY2Vzc2luZyBhcmUgcGVyaW9kaWNhbGx5IHB1cmdlZC5cbiAgaWYgKGltcGwuZGlydHlSZWN2cyA+IGltcGwubWF4RGlydHkpIHtcbiAgICBmaWx0ZXIoaW1wbC5yZWN2cywgcmVjZWl2ZXIgPT4gcmVjZWl2ZXIuYWN0aXZlKTtcbiAgICBpbXBsLmRpcnR5UmVjdnMgPSAwO1xuICB9IGVsc2Uge1xuICAgIGltcGwuZGlydHlSZWN2cysrO1xuICB9XG5cbiAgaWYgKHFDb3VudChpbXBsLnJlY3ZzKSA+PSBpbXBsLm1heFF1ZXVlZCkge1xuICAgIHRocm93IEVycm9yKFxuICAgICAgYE5vIG1vcmUgdGhhbiAke2ltcGwubWF4UXVldWVkfSBwZW5kaW5nIHJlY2VpdmVzIGFyZSBhbGxvd2VkIG9uIGEgc2luZ2xlIGNoYW5uZWxgXG4gICAgKTtcbiAgfVxuICBlbnF1ZXVlKGltcGwucmVjdnMsIGhhbmRsZXIpO1xuXG4gIHJldHVybiBudWxsO1xufVxuXG5mdW5jdGlvbiBjbG9zZShpbXBsKSB7XG4gIGlmIChpbXBsLmNsb3NlZCkge1xuICAgIHJldHVybjtcbiAgfVxuICBpbXBsLmNsb3NlZCA9IHRydWU7XG5cbiAgbGV0IHJlY2VpdmVyLCBzZW5kZXIsIGNhbGxiYWNrO1xuXG4gIC8vIElmIHRoZXJlIGlzIGEgYnVmZmVyIGFuZCBpdCBoYXMgYXQgbGVhc3Qgb25lIHZhbHVlIGluIGl0LCBzZW5kIHRob3NlIHZhbHVlc1xuICAvLyB0byBhbnkgcGVuZGluZyByZWNlaXZlcyB0aGF0IG1pZ2h0IHN0aWxsIGJlIHF1ZXVlZC5cbiAgaWYgKGltcGwuYnVmZmVyKSB7XG4gICAgaW1wbC54Zm9ybVtwLnJlc3VsdF0oaW1wbC5idWZmZXIpO1xuICAgIGZvciAoOzspIHtcbiAgICAgIGlmIChjb3VudChpbXBsLmJ1ZmZlcikgPT09IDApIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICByZWNlaXZlciA9IGRlcXVldWUoaW1wbC5yZWN2cyk7XG4gICAgICBpZiAocmVjZWl2ZXIgPT09IEVNUFRZKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgaWYgKHJlY2VpdmVyLmFjdGl2ZSkge1xuICAgICAgICBjYWxsYmFjayA9IHJlY2VpdmVyLmNvbW1pdCgpO1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHJlbW92ZShpbXBsLmJ1ZmZlcik7XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgIGRpc3BhdGNoKCgpID0+IGNhbGxiYWNrKHZhbHVlKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBPbmNlIHRoZSBidWZmZXIgaXMgZW1wdHkgKG9yIGlmIHRoZXJlIGlzbid0IGEgYnVmZmVyIGF0IGFsbCksIHNlbmQgQ0xPU0VEXG4gIC8vIHRvIGFsbCByZW1haW5pbmcgcXVldWVkIHJlY2VpdmVzLlxuICBmb3IgKDs7KSB7XG4gICAgcmVjZWl2ZXIgPSBkZXF1ZXVlKGltcGwucmVjdnMpO1xuICAgIGlmIChyZWNlaXZlciA9PT0gRU1QVFkpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBpZiAocmVjZWl2ZXIuYWN0aXZlKSB7XG4gICAgICBjYWxsYmFjayA9IHJlY2VpdmVyLmNvbW1pdCgpO1xuICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIGRpc3BhdGNoKCgpID0+IGNhbGxiYWNrKENMT1NFRCkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFNlbmQgYGZhbHNlYCB0byBhbnkgcmVtYWluaW5nIHF1ZXVlZCBzZW5kcy5cbiAgZm9yICg7Oykge1xuICAgIHNlbmRlciA9IGRlcXVldWUoaW1wbC5zZW5kcyk7XG4gICAgaWYgKHNlbmRlciA9PT0gRU1QVFkpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBpZiAoc2VuZGVyLmhhbmRsZXIuYWN0aXZlKSB7XG4gICAgICBjYWxsYmFjayA9IHNlbmRlci5oYW5kbGVyLmNvbW1pdCgpO1xuICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIGRpc3BhdGNoKCgpID0+IGNhbGxiYWNrKGZhbHNlKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCB7XG4gIENMT1NFRCxcbiAgTUFYX0RJUlRZLFxuICBNQVhfUVVFVUVELFxuICBjaGFubmVsLFxuICBoYW5kbGVTZW5kLFxuICBoYW5kbGVSZWN2LFxuICBjbG9zZSxcbiAgYm94LFxuICBpc0JveFxufTtcbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbi8vIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG5cbmltcG9ydCB7XG4gIENMT1NFRCxcbiAgY2hhbm5lbCBhcyBjaGFuSW1wbCxcbiAgaGFuZGxlU2VuZCxcbiAgaGFuZGxlUmVjdixcbiAgY2xvc2UgYXMgY2xvc2VJbXBsLFxuICBNQVhfRElSVFksXG4gIE1BWF9RVUVVRURcbn0gZnJvbSBcIi4vaGFuZGxlclwiO1xuaW1wb3J0IHsgREVGQVVMVCwgc2VsZWN0LCBzZWxlY3RBc3luYywgdmFsdWUsIGNoYW5uZWwgfSBmcm9tIFwiLi9zZWxlY3RcIjtcbmltcG9ydCB7IGFkZCwgZml4ZWQsIGlzQnVmZmVyIH0gZnJvbSBcIm1vZHVsZXMvYnVmZmVyXCI7XG5pbXBvcnQgeyBwcm90b2NvbHMgYXMgcCB9IGZyb20gXCJtb2R1bGVzL3Byb3RvY29sXCI7XG5cbmNvbnN0IERFRkFVTFRfSEFORExFUiA9ICgpID0+IENMT1NFRDtcblxuZnVuY3Rpb24gb3BIYW5kbGVyKGZuKSB7XG4gIHJldHVybiBPYmplY3QuY3JlYXRlKG51bGwsIHtcbiAgICBhY3RpdmU6IHtcbiAgICAgIHZhbHVlOiB0cnVlXG4gICAgfSxcbiAgICBjb21taXQ6IHtcbiAgICAgIHZhbHVlOiAoKSA9PiBmblxuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUV4Y2VwdGlvbihidWZmZXIsIGhhbmRsZXIsIGV4KSB7XG4gIGNvbnN0IHZhbHVlID0gaGFuZGxlcihleCk7XG4gIGlmICh2YWx1ZSAhPT0gQ0xPU0VEKSB7XG4gICAgYWRkKGJ1ZmZlciwgdmFsdWUpO1xuICB9XG4gIHJldHVybiBidWZmZXI7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZXJUcmFuc2R1Y2VyKHhmb3JtLCBoYW5kbGVyID0gREVGQVVMVF9IQU5ETEVSKSB7XG4gIHJldHVybiB7XG4gICAgW3Auc3RlcF0oYnVmZmVyLCBpbnB1dCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIHhmb3JtW3Auc3RlcF0oYnVmZmVyLCBpbnB1dCk7XG4gICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICByZXR1cm4gaGFuZGxlRXhjZXB0aW9uKGJ1ZmZlciwgaGFuZGxlciwgZXgpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBbcC5yZXN1bHRdKGJ1ZmZlcikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIHhmb3JtW3AucmVzdWx0XShidWZmZXIpO1xuICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgcmV0dXJuIGhhbmRsZUV4Y2VwdGlvbihidWZmZXIsIGhhbmRsZXIsIGV4KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59XG5cbmNvbnN0IGJ1ZmZlclJlZHVjZXIgPSB7XG4gIFtwLmluaXRdKCkge1xuICAgIHRocm93IEVycm9yKFwiaW5pdCBub3QgYXZhaWxhYmxlXCIpO1xuICB9LFxuXG4gIFtwLnN0ZXBdKGJ1ZmZlciwgaW5wdXQpIHtcbiAgICBhZGQoYnVmZmVyLCBpbnB1dCk7XG4gICAgcmV0dXJuIGJ1ZmZlcjtcbiAgfSxcblxuICBbcC5yZXN1bHRdKGJ1ZmZlcikge1xuICAgIHJldHVybiBidWZmZXI7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIHBhcnNlQXJncyhidWZmZXIsIG9wdGlvbnMsIGRlZmF1bHRPcHRpb25zKSB7XG4gIGxldCBidWY7XG4gIGxldCBvcHRzO1xuXG4gIGlmICghYnVmZmVyKSB7XG4gICAgLy8gc2FtZSBmb3IgMCwgbnVsbCwgb3IgdW5kZWZpbmVkXG4gICAgYnVmID0gbnVsbDtcbiAgICBvcHRzID0gb3B0aW9ucztcbiAgfSBlbHNlIGlmICh0eXBlb2YgYnVmZmVyID09PSBcIm51bWJlclwiKSB7XG4gICAgYnVmID0gZml4ZWQoYnVmZmVyKTtcbiAgICBvcHRzID0gb3B0aW9ucztcbiAgfSBlbHNlIGlmIChpc0J1ZmZlcihidWZmZXIpKSB7XG4gICAgYnVmID0gYnVmZmVyO1xuICAgIG9wdHMgPSBvcHRpb25zO1xuICB9IGVsc2Uge1xuICAgIC8vIElmIG5vIGJ1ZmZlciBpcyBzcGVjaWZpZWQgYnV0IGEgdHJhbnNkdWNlciBpcywgd2UgYXNzdW1lIGZpeGVkKDEpXG4gICAgLy8gaW5zdGVhZCBvZiBubyBidWZmZXJcbiAgICBidWYgPSBidWZmZXI/LnRyYW5zZHVjZXIgPyBmaXhlZCgxKSA6IG51bGw7XG4gICAgb3B0cyA9IGJ1ZmZlcjtcbiAgfVxuXG4gIGNvbnN0IHsgdHJhbnNkdWNlciwgaGFuZGxlciwgbWF4RGlydHksIG1heFF1ZXVlZCwgdGltZW91dCB9ID0gT2JqZWN0LmFzc2lnbihcbiAgICB7fSxcbiAgICBkZWZhdWx0T3B0aW9ucyxcbiAgICBvcHRzXG4gICk7XG4gIHJldHVybiB7IGJ1ZiwgdHJhbnNkdWNlciwgaGFuZGxlciwgbWF4RGlydHksIG1heFF1ZXVlZCwgdGltZW91dCB9O1xufVxuXG5mdW5jdGlvbiBjaGFuKGJ1ZmZlciwgb3B0aW9ucykge1xuICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICBtYXhEaXJ0eTogTUFYX0RJUlRZLFxuICAgIG1heFF1ZXVlZDogTUFYX1FVRVVFRFxuICB9O1xuICBjb25zdCB7IGJ1ZiwgdHJhbnNkdWNlciwgaGFuZGxlciwgbWF4RGlydHksIG1heFF1ZXVlZCwgdGltZW91dCB9ID0gcGFyc2VBcmdzKFxuICAgIGJ1ZmZlcixcbiAgICBvcHRpb25zLFxuICAgIGRlZmF1bHRPcHRpb25zXG4gICk7XG5cbiAgaWYgKHRyYW5zZHVjZXIgJiYgIWJ1Zikge1xuICAgIHRocm93IEVycm9yKFwiT25seSBidWZmZXJlZCBjaGFubmVscyBjYW4gdXNlIHRyYW5zZHVjZXJzXCIpO1xuICB9XG5cbiAgY29uc3QgeGYgPSBoYW5kbGVyVHJhbnNkdWNlcihcbiAgICB0cmFuc2R1Y2VyID8gdHJhbnNkdWNlcihidWZmZXJSZWR1Y2VyKSA6IGJ1ZmZlclJlZHVjZXIsXG4gICAgaGFuZGxlclxuICApO1xuXG4gIGNvbnN0IGltcGwgPSBjaGFuSW1wbChidWYsIHhmLCBtYXhEaXJ0eSwgbWF4UXVldWVkKTtcblxuICBjb25zdCBpc1RpbWVkID0gdHlwZW9mIHRpbWVvdXQgPT09IFwibnVtYmVyXCI7XG4gIGlmIChpc1RpbWVkKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiBjbG9zZUltcGwoaW1wbCksIHRpbWVvdXQpO1xuICB9XG5cbiAgY29uc3QgY2ggPSBPYmplY3QuY3JlYXRlKG51bGwsIHtcbiAgICBpbXBsOiB7XG4gICAgICB2YWx1ZTogaW1wbFxuICAgIH0sXG4gICAgaXNCdWZmZXJlZDoge1xuICAgICAgdmFsdWU6ICEhYnVmXG4gICAgfSxcbiAgICBpc1RpbWVkOiB7XG4gICAgICB2YWx1ZTogaXNUaW1lZFxuICAgIH1cbiAgfSk7XG5cbiAgYXN5bmMgZnVuY3Rpb24qIGl0ZXJhdG9yKCkge1xuICAgIGZvciAoOzspIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gYXdhaXQgcmVjdihjaCk7XG4gICAgICBpZiAodmFsdWUgPT09IENMT1NFRCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHlpZWxkIHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIGNoW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGl0ZXJhdG9yO1xuXG4gIHJldHVybiBjaDtcbn1cblxuZnVuY3Rpb24gdGltZWRDaGFuKGRlbGF5ID0gMCkge1xuICByZXR1cm4gY2hhbih7IHRpbWVvdXQ6IGRlbGF5IH0pO1xufVxuXG5mdW5jdGlvbiB0cmFuc0NoYW4odHJhbnNkdWNlciwgaGFuZGxlcikge1xuICByZXR1cm4gY2hhbih7IHRyYW5zZHVjZXIsIGhhbmRsZXIgfSk7XG59XG5cbmZ1bmN0aW9uIGlzQ2xvc2VkKGNoYW5uZWwpIHtcbiAgcmV0dXJuIGNoYW5uZWwuaW1wbC5jbG9zZWQ7XG59XG5cbmZ1bmN0aW9uIGlzQnVmZmVyZWQoY2hhbm5lbCkge1xuICByZXR1cm4gY2hhbm5lbC5pc0J1ZmZlcmVkO1xufVxuXG5mdW5jdGlvbiBpc1RpbWVkKGNoYW5uZWwpIHtcbiAgcmV0dXJuIGNoYW5uZWwuaXNUaW1lZDtcbn1cblxuZnVuY3Rpb24gc2VuZEFzeW5jKGNoYW5uZWwsIHZhbHVlLCBjYWxsYmFjayA9ICgpID0+IHt9KSB7XG4gIGNvbnN0IHJlc3VsdCA9IGhhbmRsZVNlbmQoY2hhbm5lbC5pbXBsLCB2YWx1ZSwgb3BIYW5kbGVyKGNhbGxiYWNrKSk7XG4gIGlmIChyZXN1bHQgJiYgY2FsbGJhY2spIHtcbiAgICBjYWxsYmFjayhyZXN1bHQudmFsdWUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlY3ZBc3luYyhjaGFubmVsLCBjYWxsYmFjayA9ICgpID0+IHt9KSB7XG4gIGNvbnN0IHJlc3VsdCA9IGhhbmRsZVJlY3YoY2hhbm5lbC5pbXBsLCBvcEhhbmRsZXIoY2FsbGJhY2spKTtcbiAgaWYgKHJlc3VsdCAmJiBjYWxsYmFjaykge1xuICAgIGNhbGxiYWNrKHJlc3VsdC52YWx1ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2VuZChjaGFubmVsLCB2YWx1ZSkge1xuICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgc2VuZEFzeW5jKGNoYW5uZWwsIHZhbHVlLCByZXNvbHZlKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlY3YoY2hhbm5lbCkge1xuICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgcmVjdkFzeW5jKGNoYW5uZWwsIHJlc29sdmUpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVjdk9yVGhyb3coY2hhbm5lbCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHJlY3ZBc3luYyhjaGFubmVsLCByZXN1bHQgPT4ge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaXNQcm90b3R5cGVPZi5jYWxsKEVycm9yLnByb3RvdHlwZSwgcmVzdWx0KSkge1xuICAgICAgICByZWplY3QocmVzdWx0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNsb3NlKGNoYW5uZWwpIHtcbiAgY2xvc2VJbXBsKGNoYW5uZWwuaW1wbCk7XG59XG5cbmV4cG9ydCB7XG4gIENMT1NFRCxcbiAgREVGQVVMVCxcbiAgY2hhbixcbiAgdGltZWRDaGFuLFxuICB0cmFuc0NoYW4sXG4gIGlzQ2xvc2VkLFxuICBpc0J1ZmZlcmVkLFxuICBpc1RpbWVkLFxuICBzZW5kQXN5bmMsXG4gIHJlY3ZBc3luYyxcbiAgc2VsZWN0QXN5bmMsXG4gIHNlbmQsXG4gIHJlY3YsXG4gIHJlY3ZPclRocm93LFxuICBzZWxlY3QsXG4gIGNsb3NlLFxuICB2YWx1ZSxcbiAgY2hhbm5lbFxufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG5pbXBvcnQgeyBib3gsIGhhbmRsZVNlbmQsIGhhbmRsZVJlY3YsIGlzQm94IH0gZnJvbSBcIi4vaGFuZGxlclwiO1xuXG5jb25zdCBERUZBVUxUID0gU3ltYm9sKFwiREVGQVVMVFwiKTtcblxuZnVuY3Rpb24gc2VsZWN0SGFuZGxlcihhY3RpdmUsIGZuKSB7XG4gIHJldHVybiBPYmplY3QuY3JlYXRlKG51bGwsIHtcbiAgICBhY3RpdmU6IHtcbiAgICAgIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIGFjdGl2ZS52YWx1ZTtcbiAgICAgIH0sXG4gICAgfSxcblxuICAgIGNvbW1pdDoge1xuICAgICAgdmFsdWU6ICgpID0+IHtcbiAgICAgICAgYWN0aXZlLnZhbHVlID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBmbjtcbiAgICAgIH0sXG4gICAgfSxcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJhbmRvbUFycmF5KHVwcGVyKSB7XG4gIGNvbnN0IGFycmF5ID0gW107XG4gIGZvciAobGV0IGsgPSAwOyBrIDwgdXBwZXI7IGsrKykge1xuICAgIGFycmF5LnB1c2goayk7XG4gIH1cbiAgZm9yIChsZXQgaiA9IHVwcGVyIC0gMTsgaiA+IDA7IGotLSkge1xuICAgIGNvbnN0IGkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoaiArIDEpKTtcbiAgICBjb25zdCB0ZW1wID0gYXJyYXlbal07XG4gICAgYXJyYXlbal0gPSBhcnJheVtpXTtcbiAgICBhcnJheVtpXSA9IHRlbXA7XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5mdW5jdGlvbiBzZWxlY3RSZXN1bHQodmFsdWUsIGNoYW5uZWwpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmNyZWF0ZShudWxsKSwgeyB2YWx1ZSwgY2hhbm5lbCB9KTtcbn1cblxuZnVuY3Rpb24gc2VsZWN0QXN5bmMob3BzLCBjYWxsYmFjayA9ICgpID0+IHt9LCBvcHRpb25zID0ge30pIHtcbiAgY29uc3QgY291bnQgPSBvcHMubGVuZ3RoO1xuICBpZiAoY291bnQgPT09IDApIHtcbiAgICB0aHJvdyBFcnJvcihcInNlbGVjdCBjYWxsZWQgd2l0aCBubyBvcGVyYXRpb25zXCIpO1xuICB9XG5cbiAgY29uc3QgcHJpb3JpdHkgPSAhIW9wdGlvbnMucHJpb3JpdHk7XG4gIGNvbnN0IGluZGljZXMgPSBwcmlvcml0eSA/IFtdIDogcmFuZG9tQXJyYXkoY291bnQpO1xuXG4gIGNvbnN0IGFjdGl2ZSA9IGJveCh0cnVlKTtcblxuICBmdW5jdGlvbiBjcmVhdGVTZWxlY3RIYW5kbGVyKGNoYW5uZWwpIHtcbiAgICByZXR1cm4gc2VsZWN0SGFuZGxlcihhY3RpdmUsIHZhbHVlID0+IHtcbiAgICAgIGNhbGxiYWNrKHNlbGVjdFJlc3VsdCh2YWx1ZSwgY2hhbm5lbCkpO1xuICAgIH0pO1xuICB9XG5cbiAgbGV0IHJlc3VsdDtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAvLyBDaG9vc2UgYW4gb3BlcmF0aW9uLiBJZiBgcHJpb3JpdHlgIGlzIHRydWUgdGhlbiBpdCdzIHRoZSBuZXh0IGluZGV4LFxuICAgIC8vIG90aGVyd2lzZSBpdCdzIHJhbmRvbVxuICAgIGNvbnN0IG9wID0gb3BzW3ByaW9yaXR5ID8gaSA6IGluZGljZXNbaV1dO1xuICAgIGxldCBjaGFubmVsLCB2YWx1ZTtcblxuICAgIC8vIEFwcGx5IGV2ZXJ5IG9wZXJhdGlvbiB0byBpdHMgY2hhbm5lbCwgb25lIGF0IGEgdGltZVxuICAgIGlmIChBcnJheS5pc0FycmF5KG9wKSkge1xuICAgICAgW2NoYW5uZWwsIHZhbHVlXSA9IG9wO1xuICAgICAgcmVzdWx0ID0gaGFuZGxlU2VuZChjaGFubmVsLmltcGwsIHZhbHVlLCBjcmVhdGVTZWxlY3RIYW5kbGVyKGNoYW5uZWwpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2hhbm5lbCA9IG9wO1xuICAgICAgcmVzdWx0ID0gaGFuZGxlUmVjdihjaGFubmVsLmltcGwsIGNyZWF0ZVNlbGVjdEhhbmRsZXIoY2hhbm5lbCkpO1xuICAgIH1cblxuICAgIC8vIFdlIGNoZWNrIGZvciBib3ggaGVyZSBiZWNhdXNlIGEgYm94IGZyb20gYSBjaGFubmVsIGluZGljYXRlcyB0aGF0IHRoZVxuICAgIC8vIHZhbHVlIGlzIGltbWVkaWF0ZWx5IGF2YWlsYWJsZSAodGhhdCB0aGVyZSBpcyBubyBuZWVkIHRvIGJsb2NrIHRvIGdldCB0aGVcbiAgICAvLyB2YWx1ZSkuIElmIHRoaXMgaGFwcGVucywgd2UgZXhlY3V0ZSB0aGUgY2FsbGJhY2sgaW1tZWRpYXRlbHkgd2l0aCB0aGF0XG4gICAgLy8gdmFsdWUgYW5kIGNoYW5uZWwgYW5kIHN0b3AgcXVldWVpbmcgb3RoZXIgb3BlcmF0aW9ucy5cbiAgICBpZiAoaXNCb3gocmVzdWx0KSkge1xuICAgICAgY2FsbGJhY2soc2VsZWN0UmVzdWx0KHJlc3VsdC52YWx1ZSwgY2hhbm5lbCkpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgLy8gSWYgbm9uZSBvZiB0aGUgb3BlcmFldGlvbnMgaW1tZWRpYXRlbHkgcmV0dXJuZWQgdmFsdWVzICh0aGV5IGFyZSBhbGxcbiAgLy8gYmxvY2tlZCksIGFuZCB3ZSBoYXZlIHNldCBhIGRlZmF1bHQgY2hhbm5lbCBvcHRpb24sIHRoZW4gcmV0dXJuIHRoZSB2YWx1ZVxuICAvLyBpZiB0aGUgZGVmYXVsdCBjaGFubmVsIHJhdGhlciB0aGFuIHdhaXRpbmcgZm9yIHRoZSBxdWV1ZWQgb3BlcmF0aW9ucyB0b1xuICAvLyBjb21wbGV0ZS5cbiAgaWYgKFxuICAgICFpc0JveChyZXN1bHQpICYmXG4gICAgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9wdGlvbnMsIFwiZGVmYXVsdFwiKVxuICApIHtcbiAgICBpZiAoYWN0aXZlLnZhbHVlKSB7XG4gICAgICBhY3RpdmUudmFsdWUgPSBmYWxzZTtcbiAgICAgIGNhbGxiYWNrKHNlbGVjdFJlc3VsdChvcHRpb25zLmRlZmF1bHQsIERFRkFVTFQpKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gc2VsZWN0KG9wcywgb3B0aW9ucyA9IHt9KSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICBzZWxlY3RBc3luYyhvcHMsIHJlc29sdmUsIG9wdGlvbnMpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdmFsdWUoc2VsZWN0UmVzdWx0KSB7XG4gIHJldHVybiBzZWxlY3RSZXN1bHQudmFsdWU7XG59XG5cbmZ1bmN0aW9uIGNoYW5uZWwoc2VsZWN0UmVzdWx0KSB7XG4gIHJldHVybiBzZWxlY3RSZXN1bHQuY2hhbm5lbDtcbn1cblxuZXhwb3J0IHsgREVGQVVMVCwgc2VsZWN0LCBzZWxlY3RBc3luYywgdmFsdWUsIGNoYW5uZWwgfTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG5pbXBvcnQge1xuICBxdWV1ZSBhcyBxLFxuICBFTVBUWSxcbiAgY291bnQgYXMgcUNvdW50LFxuICBkZXF1ZXVlLFxuICBlbnF1ZXVlXG59IGZyb20gXCJtb2R1bGVzL3F1ZXVlXCI7XG5jb25zdCBxdWV1ZSA9IHEoKTtcblxuY29uc3QgU0VUX0lNTUVESUFURSA9IFN5bWJvbChcInNldEltbWVkaWF0ZVwiKTtcbmNvbnN0IE1FU1NBR0VfQ0hBTk5FTCA9IFN5bWJvbChcIk1lc3NhZ2VDaGFubmVsXCIpO1xuY29uc3QgU0VUX1RJTUVPVVQgPSBTeW1ib2woXCJzZXRUaW1lb3V0XCIpO1xuXG5jb25zdCBvcHRpb25zID0ge1xuICBiYXRjaFNpemU6IDEwMjQsXG4gIGRpc3BhdGNoTWV0aG9kOiBTRVRfSU1NRURJQVRFXG59O1xuXG5sZXQgZGlzcGF0Y2hlciA9IGNyZWF0ZURpc3BhdGNoZXIoKTtcbmxldCBydW5uaW5nID0gZmFsc2U7XG5sZXQgcXVldWVkID0gdHJ1ZTtcblxuZnVuY3Rpb24gY3JlYXRlRGlzcGF0Y2hlcigpIHtcbiAgc3dpdGNoIChjYWxjRGlzcGF0Y2hNZXRob2QoKSkge1xuICAgIC8vIFdlIHByZWZlciBgc2V0SW1tZWRpYXRlYCBpZiBpdCdzIGF2YWlsYWJsZSwgYnV0IGl0J3Mgb25seSBhdmFpbGFibGUgaW5cbiAgICAvLyBOb2RlIGFuZCBzb21lIG9sZCBicm93c2Vycy5cbiAgICBjYXNlIFNFVF9JTU1FRElBVEU6XG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBpZiAoIShxdWV1ZWQgJiYgcnVubmluZykpIHtcbiAgICAgICAgICBxdWV1ZWQgPSB0cnVlO1xuICAgICAgICAgIHNldEltbWVkaWF0ZShwcm9jZXNzVGFza3MpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgLy8gTW9zdCBtb2Rlcm4gYnJvd3NlcnMgaW1wbGVtZW50IGBNZXNzYWdlQ2hhbm5lbGAuIFRoaXMgaXMgdGhlIHByZWZlcnJlZFxuICAgIC8vIG1ldGhvZCBpbiBicm93c2VyIGVudmlyb25tZW50cyB3aGVyZSBgc2V0SW1tZWRpYXRlYCBpc24ndCBhdmFpbGFibGUuXG4gICAgY2FzZSBNRVNTQUdFX0NIQU5ORUw6IHtcbiAgICAgIGNvbnN0IGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gKCkgPT4gcHJvY2Vzc1Rhc2tzKCk7XG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBpZiAoIShxdWV1ZWQgJiYgcnVubmluZykpIHtcbiAgICAgICAgICBxdWV1ZWQgPSB0cnVlO1xuICAgICAgICAgIGNoYW5uZWwucG9ydDIucG9zdE1lc3NhZ2UoMCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gSWYgYWxsIGVsc2UgZmFpbHMsIGp1c3QgdXNlIGBzZXRUaW1lb3V0YC4gSXQncyBhIGxpdHRsZSBzbG93ZXIgdGhhbiB0aGVcbiAgICAvLyBvdGhlciBtZXRob2RzLCBidXQgaXQncyBhdmFpbGFibGUgZXZlcnl3aGVyZS5cbiAgICBjYXNlIFNFVF9USU1FT1VUOlxuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgaWYgKCEocXVldWVkICYmIHJ1bm5pbmcpKSB7XG4gICAgICAgICAgcXVldWVkID0gdHJ1ZTtcbiAgICAgICAgICBzZXRUaW1lb3V0KHByb2Nlc3NUYXNrcywgMCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FsY0Rpc3BhdGNoTWV0aG9kKCkge1xuICBzd2l0Y2ggKG9wdGlvbnMuZGlzcGF0Y2hNZXRob2QpIHtcbiAgICBjYXNlIE1FU1NBR0VfQ0hBTk5FTDpcbiAgICAgIGlmICh0eXBlb2YgTWVzc2FnZUNoYW5uZWwgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgcmV0dXJuIE1FU1NBR0VfQ0hBTk5FTDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBTRVRfVElNRU9VVDtcblxuICAgIGNhc2UgU0VUX1RJTUVPVVQ6XG4gICAgICByZXR1cm4gU0VUX1RJTUVPVVQ7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgaWYgKHR5cGVvZiBzZXRJbW1lZGlhdGUgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgcmV0dXJuIFNFVF9JTU1FRElBVEU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIE1lc3NhZ2VDaGFubmVsICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIHJldHVybiBNRVNTQUdFX0NIQU5ORUw7XG4gICAgICB9XG4gICAgICByZXR1cm4gU0VUX1RJTUVPVVQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gcHJvY2Vzc1Rhc2tzKCkge1xuICBydW5uaW5nID0gdHJ1ZTtcbiAgcXVldWVkID0gZmFsc2U7XG4gIGxldCBjb3VudCA9IDA7XG5cbiAgZm9yICg7Oykge1xuICAgIGNvbnN0IHRhc2sgPSBkZXF1ZXVlKHF1ZXVlKTtcbiAgICBpZiAodGFzayA9PT0gRU1QVFkpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHRhc2soKTtcblxuICAgIGlmIChjb3VudCA+PSBvcHRpb25zLmJhdGNoU2l6ZSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNvdW50Kys7XG5cbiAgICBydW5uaW5nID0gZmFsc2U7XG4gICAgaWYgKHFDb3VudChxdWV1ZSkpIHtcbiAgICAgIGRpc3BhdGNoZXIoKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0RGlzcGF0Y2hlcigpIHtcbiAgZGlzcGF0Y2hlciA9IGNyZWF0ZURpc3BhdGNoZXIoKTtcbn1cblxuZnVuY3Rpb24gY29uZmlnKG9wdHMgPSBudWxsKSB7XG4gIGlmIChvcHRzID09PSBudWxsKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMpO1xuICB9XG5cbiAgZm9yIChjb25zdCBrZXkgaW4gb3B0aW9ucykge1xuICAgIGlmIChrZXkgaW4gb3B0cykge1xuICAgICAgb3B0aW9uc1trZXldID0gb3B0c1trZXldO1xuXG4gICAgICBpZiAoa2V5ID09PSBcImRpc3BhdGNoTWV0aG9kXCIpIHtcbiAgICAgICAgc2V0RGlzcGF0Y2hlcigpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBkaXNwYXRjaCh0YXNrKSB7XG4gIGVucXVldWUocXVldWUsIHRhc2spO1xuICBkaXNwYXRjaGVyKCk7XG59XG5cbmV4cG9ydCB7IFNFVF9JTU1FRElBVEUsIE1FU1NBR0VfQ0hBTk5FTCwgU0VUX1RJTUVPVVQsIGNvbmZpZywgZGlzcGF0Y2ggfTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG5pbXBvcnQgeyB0aW1lZENoYW4sIHJlY3ZBc3luYyB9IGZyb20gXCJtb2R1bGVzL2NoYW5uZWxcIjtcblxuZnVuY3Rpb24gc2xlZXAoZGVsYXkgPSAwKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICBjb25zdCBjaCA9IHRpbWVkQ2hhbihkZWxheSk7XG4gICAgcmVjdkFzeW5jKGNoLCByZXNvbHZlKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdvKGZuLCAuLi5hcmdzKSB7XG4gIHJldHVybiBmbiguLi5hcmdzKTtcbn1cblxuZXhwb3J0IHsgc2xlZXAsIGdvIH07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuY29uc3QgcHJvdG9jb2xzID0gT2JqZWN0LmNyZWF0ZShudWxsLCB7XG4gIGluaXQ6IHtcbiAgICB2YWx1ZTogU3ltYm9sLmZvcihcInRyYW5zZHVjZXIvaW5pdFwiKVxuICB9LFxuICBzdGVwOiB7XG4gICAgdmFsdWU6IFN5bWJvbC5mb3IoXCJ0cmFuc2R1Y2VyL3N0ZXBcIilcbiAgfSxcbiAgcmVzdWx0OiB7XG4gICAgdmFsdWU6IFN5bWJvbC5mb3IoXCJ0cmFuc2R1Y2VyL3Jlc3VsdFwiKVxuICB9LFxuICByZWR1Y2VkOiB7XG4gICAgdmFsdWU6IFN5bWJvbC5mb3IoXCJ0cmFuc2R1Y2VyL3JlZHVjZWRcIilcbiAgfSxcbiAgdmFsdWU6IHtcbiAgICB2YWx1ZTogU3ltYm9sLmZvcihcInRyYW5zZHVjZXIvdmFsdWVcIilcbiAgfVxufSk7XG5cbmV4cG9ydCB7IHByb3RvY29scyB9O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG5cbi8qKlxuICogUHJvdmlkZXMgYW4gZWZmaWNpZW50IGdlbmVyYWwtcHVycG9zZSBxdWV1ZS5cbiAqXG4gKiBAbW9kdWxlIGNoYW5rby9xdWV1ZVxuICovXG5cbi8qKlxuICogQSBnZW5lcmFsIHB1cnBvc2UsIGhpZ2hseSBlZmZpY2llbnQgSmF2YVNjcmlwdCBxdWV1ZS4gSXQgaXMgYmFja2VkIGJ5IGFcbiAqIEphdmFTY3JpcHQgYXJyYXksIGJ1dCBpdCBkb2VzIG5vdCB1c2UgYHVuc2hpZnRgIHRvIHRha2UgZWxlbWVudHMgb2ZmIHRoZVxuICogYXJyYXkgYmVjYXVzZSB1bnNoaWZ0IGNhdXNlcyBlbGVtZW50cyB0byBiZSBjb3BpZWQgZXZlcnkgdGltZSBpdCdzIHVzZWQuXG4gKiBJbnN0ZWFkLCBhIHBvaW50ZXIgaXMgbWFpbnRhaW5lZCB0aGF0IGtlZXBzIHRyYWNrIG9mIHRoZSBsb2NhdGlvbiBvZiB0aGUgbmV4dFxuICogZWxlbWVudCB0byBiZSBkZXF1ZXVlZCwgYW5kIHdoZW4gdGhhdCBkZXF1ZXVlIGhhcHBlbnMsIHRoZSBwb2ludGVyIHNpbXBseVxuICogbW92ZXMuIFdoZW4gdGhlIGVtcHR5IHNwYWNlIGF0IHRoZSBoZWFkIG9mIHRoZSBhcnJheSBnZXRzIGxhcmdlIGVub3VnaCwgaXQnc1xuICogcmVtb3ZlZCBieSBhIHNpbmdsZSBzbGljZSBvcGVyYXRpb24uXG4gKlxuICogUHV0dGluZyBlbGVtZW50cyBpbnRvIHRoZSBxdWV1ZSBpcyBqdXN0IGRvbmUgd2l0aCBhIGJhc2ljIGBwdXNoYCwgd2hpY2ggKmlzKlxuICogaGlnaGx5IGVmZmljaWVudC5cbiAqXG4gKiBUaGlzIHR5cGUgb2YgcXVldWUgaXMgcG9zc2libGUgaW4gSmF2YVNjcmlwdCBiZWNhdXNlIEpTIGFycmF5cyBhcmUgcmVzaXphYmxlLlxuICogSW4gbGFuZ3VhZ2VzIHdpdGggZml4ZWQtc2l6ZSBhcnJheXMsIGEgcmVzaXppbmcgb3BlcmF0aW9uIHdvdWxkIGhhdmUgdG8gYmVcbiAqIHJ1biBlYWNoIHRpbWUgdGhlIHF1ZXVlIGZpbGxzLlxuICpcbiAqIEBuYW1lc3BhY2UgUXVldWVcbiAqL1xuXG4vKipcbiAqIFRoZSB2YWx1ZSByZXR1cm5lZCB3aGVuIGEgcXVldWUgaXMgcmVhZCB3aGVuIGl0J3MgZW1wdHkuXG4gKlxuICogVGhpcyBzcGVjaWFsIHZhbHVlIGlzIHVzZWQgYmVjYXVzZSBgbnVsbGAgYW5kIGB1bmRlZmluZWRgIGFyZSBwb3NzaWJsZVxuICogbGVnaXRpbWF0ZSB2YWx1ZXMgdGhhdCBjYW4gYmUgc3RvcmVkIGluIGEgcXVldWUuIEFub3RoZXIgb3B0aW9uIGlzIHRvIHVzZVxuICogc29tZSBraW5kIG9mIGBNYXliZWAgb3IgYE9wdGlvbmAgdHlwZSwgYnV0IHRoYXQgcmVxdWlyZXMgbW9yZSBlZmZvcnQgb24gdGhlXG4gKiBwYXJ0IG9mIHRoZSBlbmQgdXNlciB0byBpbnRlcmZhY2Ugd2l0aC5cbiAqXG4gKiBAdHlwZSB7U3ltYm9sfVxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgRU1QVFkgPSBTeW1ib2woXCJlbXB0eVwiKTtcblxuLyoqXG4gKiBBIG1hcmtlciBwcm9wZXJ0eSBuYW1lIHRvIGluZGljYXRlIHRoYXQgYW4gb2JqZWN0IGlzIGluIGZhY3QgYSBxdWV1ZS5cbiAqXG4gKiBBIHF1ZXVlIGhhcyBhIHByb3BlcnR5IHdpdGggdGhpcyBuYW1lIHdob3NlIHJlYWRvbmx5IHZhbHVlIGlzIHNldCB0byBgdHJ1ZWAuXG4gKiBUaGlzIGlzIG5vdCBtZWFudCB0byBiZSByZWFkIGV4Y2VwdCBieSB0aGVcbiAqIGB7QGxpbmsgbW9kdWxlOmNoYW5rby9xdWV1ZX5RdWV1ZS5pc1F1ZXVlfGlzUXVldWV9YCBmdW5jdGlvbi5cbiAqXG4gKiBAdHlwZSB7U3ltYm9sfVxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgUVVFVUUgPSBTeW1ib2woXCJxdWV1ZVwiKTtcblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgYW4gb2JqZWN0IGlzIGEgcXVldWUuXG4gKlxuICogQHBhcmFtIHsqfSBvYmogVGhlIG9iamVjdCB0byBiZSB0ZXN0ZWQuXG4gKiBAcmV0dXJuIHtib29sZWFufSBFaXRoZXIgYHRydWVgIGlmIHRoZSBvYmplY3QgaXMgYSBxdWV1ZSBvciBgZmFsc2VgIGlmIGl0IGlzXG4gKiBub3QuXG4gKi9cbmZ1bmN0aW9uIGlzUXVldWUob2JqKSB7XG4gIHJldHVybiAhIW9iaj8uW1FVRVVFXTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IHF1ZXVlLiBUaGlzIHF1ZXVlIGlzIGNyZWF0ZWQgZW1wdHksIHdpdGggYSBiYWNraW5nIGFycmF5IG9mXG4gKiBsZW5ndGggMC5cbiAqXG4gKiBAcmV0dXJucyB7bW9kdWxlOmNoYW5rby9xdWV1ZX5RdWV1ZX0gQSBuZXcsIGVtcHR5IHF1ZXVlLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gcXVldWUoKSB7XG4gIHJldHVybiBPYmplY3QuY3JlYXRlKG51bGwsIHtcbiAgICBzdG9yZToge1xuICAgICAgdmFsdWU6IFtdLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9LFxuXG4gICAgcG9pbnRlcjoge1xuICAgICAgdmFsdWU6IDAsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0sXG5cbiAgICBbUVVFVUVdOiB7XG4gICAgICB2YWx1ZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgbnVtYmVyIG9mIGVsZW1lbnRzIHN0b3JlZCBpbiBhIHF1ZXVlLiBUaGlzIG1heSBvciBtYXkgbm90IGVxdWFsXG4gKiB0aGUgbGVuZ3RoIG9mIHRoZSBiYWNraW5nIHN0b3JlLCBhcyB0aGVyZSBpcyBvZnRlbiBlbXB0eSBzcGFjZSBhdCB0aGUgaGVhZCBvZlxuICogdGhlIGJhY2tpbmcgc3RvcmUuXG4gKlxuICogQHBhcmFtIHttb2R1bGU6Y2hhbmtvL3F1ZXVlflF1ZXVlfSBxdWV1ZSBUaGUgcXVldWUgd2hvc2UgaXRlbXMgYXJlIGJlaW5nXG4gKiBjb3VudGVkLlxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgbnVtYmVyIG9mIGl0ZW1zIGluIHRoZSBxdWV1ZS5cbiAqL1xuZnVuY3Rpb24gY291bnQocXVldWUpIHtcbiAgcmV0dXJuIHF1ZXVlLnN0b3JlLmxlbmd0aCAtIHF1ZXVlLnBvaW50ZXI7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGEgcXVldWUgaXMgZW1wdHkuXG4gKlxuICogQHBhcmFtIHttb2R1bGU6Y2hhbmtvL3F1ZXVlflF1ZXVlfSBxdWV1ZSBUaGUgcXVldWUgYmVpbmcgY2hlY2tlZCBmb3JcbiAqIGVtcHRpbmVzcy5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IEVpdGhlciBgdHJ1ZWAgaWYgdGhlIHF1ZXVlIGlzIGVtcHR5IG9yIGBmYWxzZWAgaWYgaXQgaXNcbiAqIG5vdC5cbiAqL1xuZnVuY3Rpb24gaXNFbXB0eShxdWV1ZSkge1xuICByZXR1cm4gcXVldWUuc3RvcmUubGVuZ3RoID09PSAwO1xufVxuXG4vKipcbiAqIEFkZHMgYW4gaXRlbSB0byBhIHF1ZXVlLlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOmNoYW5rby9xdWV1ZX5RdWV1ZX0gcXVldWUgVGhlIHF1ZXVlIHdoaWNoIGlzIGhhdmluZyBhbiBpdGVtXG4gKiBhZGRlZCB0byBpdC5cbiAqIEBwYXJhbSB7Kn0gaXRlbSBUaGUgaXRlbSBiZWluZyBhZGRlZCB0byB0aGUgcXVldWUuXG4gKi9cbmZ1bmN0aW9uIGVucXVldWUocXVldWUsIGl0ZW0pIHtcbiAgcXVldWUuc3RvcmUucHVzaChpdGVtKTtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFuIGl0ZW0gZnJvbSBhIHF1ZXVlIGFuZCByZXR1cm5zIHRoYXQgaXRlbS4gSWYgdGhlIHJlbW92YWwgY2F1c2VzIHRoZVxuICogYW1vdW50IG9mIGVtcHR5IHNwYWNlIGF0IHRoZSBoZWFkIG9mIHRoZSBiYWNraW5nIHN0b3JlIHRvIGV4Y2VlZCBhIHRocmVzaG9sZCxcbiAqIHRoYXQgZW1wdHkgc3BhY2UgaXMgcmVtb3ZlZC5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTpjaGFua28vcXVldWV+UXVldWV9IHF1ZXVlIFRoZSBxdWV1ZSB3aG9zZSBvbGRlc3QgaXRlbSBpcyB0byBiZVxuICogcmVtb3ZlZC5cbiAqIEByZXR1cm4geyp9IFRoZSBvbGRlc3Qgc3RvcmVkIGl0ZW0gaW4gdGhlIHF1ZXVlLlxuICovXG5mdW5jdGlvbiBkZXF1ZXVlKHF1ZXVlKSB7XG4gIGlmIChxdWV1ZS5zdG9yZS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gRU1QVFk7XG4gIH1cblxuICBjb25zdCBpdGVtID0gcXVldWUuc3RvcmVbcXVldWUucG9pbnRlcl07XG4gIC8vIFJlbW92ZXMgdGhlIGl0ZW1zIGluIHRoZSBiYWNraW5nIHN0b3JlIGJlZm9yZSB0aGUgY3VycmVudCBwb2ludGVyLCBpZiB0aGVyZVxuICAvLyBpcyBlbm91Z2ggXCJlbXB0eVwiIHNwYWNlIGJlZm9yZSB0aGUgcG9pbnRlciB0byBqdXN0aWZ5IGl0IChpLmUuLCB0aGUgdW51c2VkXG4gIC8vIHBvcnRpb24gaXMgYXQgbGVhc3QgaGFsZiBhcyBsYXJnZSBhcyB0aGUgdXNlZCBwb3J0aW9uKVxuICBpZiAoKytxdWV1ZS5wb2ludGVyICogMiA+PSBxdWV1ZS5zdG9yZS5sZW5ndGgpIHtcbiAgICBxdWV1ZS5zdG9yZSA9IHF1ZXVlLnN0b3JlLnNsaWNlKHF1ZXVlLnBvaW50ZXIpO1xuICAgIHF1ZXVlLnBvaW50ZXIgPSAwO1xuICB9XG4gIHJldHVybiBpdGVtO1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIG5leHQgaXRlbSBpbiBhIHF1ZXVlIHdpdGhvdXQgcmVtb3ZpbmcgaXQuXG4gKlxuICogQHBhcmFtIHttb2R1bGU6Y2hhbmtvL3F1ZXVlflF1ZXVlfSBxdWV1ZSBUaGUgcXVldWUgd2hvc2Ugb2xkZXN0IGl0ZW0gaXMgdG8gYmVcbiAqIHBlZWtlZCBhdC5cbiAqIEByZXR1cm4geyp9IFRoZSBvbGRlc3QgaXRlbSBzdG9yZWQgaW4gdGhlIHF1ZXVlLlxuICovXG5mdW5jdGlvbiBwZWVrKHF1ZXVlKSB7XG4gIHJldHVybiBxdWV1ZS5zdG9yZS5sZW5ndGggPT09IDAgPyBFTVBUWSA6IHF1ZXVlLnN0b3JlW3F1ZXVlLnBvaW50ZXJdO1xufVxuXG4vKipcbiAqIEZpbHRlcnMgb3V0IGFueSBpdGVtIGluIGEgcXVldWUgdGhhdCBkb2VzIG5vdCBjYXVzZSB0aGUgc3VwcGxpZWQgcHJlZGljYXRlXG4gKiBmdW5jdGlvbiB0byByZXR1cm4gYHRydWVgIHdoZW4gcGFzc2VkIHRoYXQgaXRlbS4gVGhpcyBpcyBub3QgZXhhY3RseSBhXG4gKiBnZW5lcmFsIHB1cnBvc2UgcXVldWUgb3BlcmF0aW9uLCBidXQgd2UgbmVlZCBpdCB3aXRoIGNoYW5uZWxzIHRoYXQgd2lsbFxuICogb2NjYXNpb25hbGx5IHdhbnQgdG8gZ2V0IHJpZCBvZiBpbmFjdGl2ZSBoYW5kbGVycy5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTpjaGFua28vcXVldWV+UXVldWV9IHF1ZXVlIFRoZSBxdWV1ZSBiZWluZyBmaWx0ZXJlZC5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuIFRoZSBwcmVkaWNhdGUgZnVuY3Rpb24gdGhhdCBkZXRlcm1pbmVzIHdoZXRoZXIgYW5cbiAqIGVsZW1lbnQgcmVtYWlucyBpbiB0aGUgcXVldWUuXG4gKi9cbmZ1bmN0aW9uIGZpbHRlcihxdWV1ZSwgcHJlZGljYXRlKSB7XG4gIGZvciAobGV0IGkgPSAwLCBlbmQgPSBjb3VudChxdWV1ZSk7IGkgPCBlbmQ7IGkrKykge1xuICAgIGNvbnN0IGl0ZW0gPSBkZXF1ZXVlKHF1ZXVlKTtcbiAgICBpZiAocHJlZGljYXRlKGl0ZW0pKSB7XG4gICAgICBlbnF1ZXVlKHF1ZXVlLCBpdGVtKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IHtcbiAgRU1QVFksXG4gIHF1ZXVlLFxuICBpc1F1ZXVlLFxuICBjb3VudCxcbiAgaXNFbXB0eSxcbiAgZW5xdWV1ZSxcbiAgZGVxdWV1ZSxcbiAgcGVlayxcbiAgZmlsdGVyXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==