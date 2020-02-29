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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGFua28vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2NoYW5rby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jaGFua28vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9Bc3luY0dlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly9jaGFua28vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9Bd2FpdFZhbHVlLmpzIiwid2VicGFjazovL2NoYW5rby8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2F3YWl0QXN5bmNHZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vY2hhbmtvLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvd3JhcEFzeW5jR2VuZXJhdG9yLmpzIiwid2VicGFjazovL2NoYW5rby8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vY2hhbmtvLy4vbm9kZV9tb2R1bGVzL3NldGltbWVkaWF0ZS9zZXRJbW1lZGlhdGUuanMiLCJ3ZWJwYWNrOi8vY2hhbmtvLy4vbm9kZV9tb2R1bGVzL3RpbWVycy1icm93c2VyaWZ5L21haW4uanMiLCJ3ZWJwYWNrOi8vY2hhbmtvLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly9jaGFua28vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2hhbmtvLy4vc3JjL21vZHVsZXMvYnVmZmVyLmpzIiwid2VicGFjazovL2NoYW5rby8uL3NyYy9tb2R1bGVzL2NoYW5uZWwvaGFuZGxlci5qcyIsIndlYnBhY2s6Ly9jaGFua28vLi9zcmMvbW9kdWxlcy9jaGFubmVsL2luZGV4LmpzIiwid2VicGFjazovL2NoYW5rby8uL3NyYy9tb2R1bGVzL2NoYW5uZWwvc2VsZWN0LmpzIiwid2VicGFjazovL2NoYW5rby8uL3NyYy9tb2R1bGVzL2Rpc3BhdGNoZXIuanMiLCJ3ZWJwYWNrOi8vY2hhbmtvLy4vc3JjL21vZHVsZXMvcHJvY2Vzcy5qcyIsIndlYnBhY2s6Ly9jaGFua28vLi9zcmMvbW9kdWxlcy9wcm90b2NvbC5qcyIsIndlYnBhY2s6Ly9jaGFua28vLi9zcmMvbW9kdWxlcy9xdWV1ZS5qcyJdLCJuYW1lcyI6WyJCVUZGRVIiLCJTeW1ib2wiLCJGSVhFRCIsIkRST1BQSU5HIiwiU0xJRElORyIsImlzQnVmZmVyIiwib2JqIiwiZml4ZWQiLCJzaXplIiwiT2JqZWN0IiwiY3JlYXRlIiwicXVldWUiLCJ2YWx1ZSIsInEiLCJkcm9wcGluZyIsInNsaWRpbmciLCJidWZmZXIiLCJjb3VudCIsInFDb3VudCIsImlzRnVsbCIsImFkZCIsIml0ZW1zIiwiaXRlbSIsImVucXVldWUiLCJkZXF1ZXVlIiwicmVtb3ZlIiwiTUFYX0RJUlRZIiwiTUFYX1FVRVVFRCIsIkNMT1NFRCIsIkJPWCIsImlzQm94IiwiaXNSZWR1Y2VkIiwicCIsInJlZHVjZWQiLCJib3giLCJ3cml0YWJsZSIsInNlbmRCb3giLCJoYW5kbGVyIiwiY2hhbm5lbCIsInhmb3JtIiwiaXNUaW1lZCIsIm1heERpcnR5IiwibWF4UXVldWVkIiwicmVjdnMiLCJzZW5kcyIsImRpcnR5UmVjdnMiLCJkaXJ0eVNlbmRzIiwiY2xvc2VkIiwiaXNCdWZmZXJlZCIsImhhbmRsZVNlbmQiLCJFcnJvciIsImNvbW1pdCIsInJlY2VpdmVyIiwiY2FsbGJhY2siLCJkb25lIiwic3RlcCIsIkVNUFRZIiwiYWN0aXZlIiwidmFsIiwiZGlzcGF0Y2giLCJjbG9zZSIsImZpbHRlciIsInNlbmRlciIsImhhbmRsZVJlY3YiLCJzZW5kSGFuZGxlciIsInJlc3VsdCIsIkRFRkFVTFRfSEFORExFUiIsIm9wSGFuZGxlciIsImZuIiwiaGFuZGxlRXhjZXB0aW9uIiwiZXgiLCJoYW5kbGVyVHJhbnNkdWNlciIsImlucHV0IiwiYnVmZmVyUmVkdWNlciIsImluaXQiLCJwYXJzZUFyZ3MiLCJvcHRpb25zIiwiZGVmYXVsdE9wdGlvbnMiLCJidWYiLCJvcHRzIiwidHJhbnNkdWNlciIsInRpbWVyIiwiYXNzaWduIiwiY2hhbiIsInhmIiwiY2giLCJjaGFuSW1wbCIsIml0ZXJhdG9yIiwicmVjdiIsImFzeW5jSXRlcmF0b3IiLCJzZXRUaW1lb3V0IiwiY2xvc2VJbXBsIiwidGltZWRDaGFuIiwiZGVsYXkiLCJ0cmFuc0NoYW4iLCJpc0Nsb3NlZCIsInNlbmRBc3luYyIsInJlY3ZBc3luYyIsInNlbmQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlY3ZPclRocm93IiwicmVqZWN0IiwicHJvdG90eXBlIiwiaXNQcm90b3R5cGVPZiIsImNhbGwiLCJERUZBVUxUIiwic2VsZWN0SGFuZGxlciIsImdldCIsInJhbmRvbUFycmF5IiwidXBwZXIiLCJhcnJheSIsImsiLCJwdXNoIiwiaiIsImkiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ0ZW1wIiwic2VsZWN0UmVzdWx0Iiwic2VsZWN0QXN5bmMiLCJvcHMiLCJsZW5ndGgiLCJwcmlvcml0eSIsImluZGljZXMiLCJjcmVhdGVTZWxlY3RIYW5kbGVyIiwib3AiLCJBcnJheSIsImlzQXJyYXkiLCJoYXNPd25Qcm9wZXJ0eSIsImRlZmF1bHQiLCJzZWxlY3QiLCJTRVRfSU1NRURJQVRFIiwiTUVTU0FHRV9DSEFOTkVMIiwiU0VUX1RJTUVPVVQiLCJiYXRjaFNpemUiLCJkaXNwYXRjaE1ldGhvZCIsImRpc3BhdGNoZXIiLCJjcmVhdGVEaXNwYXRjaGVyIiwicnVubmluZyIsInF1ZXVlZCIsImNhbGNEaXNwYXRjaE1ldGhvZCIsInNldEltbWVkaWF0ZSIsInByb2Nlc3NUYXNrcyIsIk1lc3NhZ2VDaGFubmVsIiwicG9ydDEiLCJvbm1lc3NhZ2UiLCJwb3J0MiIsInBvc3RNZXNzYWdlIiwidGFzayIsInNldERpc3BhdGNoZXIiLCJjb25maWciLCJrZXkiLCJzbGVlcCIsImdvIiwiYXJncyIsInByb3RvY29scyIsImZvciIsIlFVRVVFIiwiaXNRdWV1ZSIsInN0b3JlIiwi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QUNsRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ3pMRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsbUJBQU8sQ0FBQyxpRUFBYztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM5REE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FB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QUFOLENBQVl0SixLQUFLLENBQUN1SixPQUFsQixDQUFiLENBTHNCLENBTXRCO0FBQ0E7QUFDQTs7QUFDQSxNQUFJLEVBQUV2SixLQUFLLENBQUN1SixPQUFSLEdBQWtCLENBQWxCLElBQXVCdkosS0FBSyxDQUFDc0osS0FBTixDQUFZdEMsTUFBdkMsRUFBK0M7QUFDN0NoSCxTQUFLLENBQUNzSixLQUFOLEdBQWN0SixLQUFLLENBQUNzSixLQUFOLENBQVlHLEtBQVosQ0FBa0J6SixLQUFLLENBQUN1SixPQUF4QixDQUFkO0FBQ0F2SixTQUFLLENBQUN1SixPQUFOLEdBQWdCLENBQWhCO0FBQ0Q7O0FBQ0QsU0FBTzVJLElBQVA7QUFDRDtBQUVEOzs7Ozs7Ozs7QUFPQSxTQUFTK0ksSUFBVCxDQUFjMUosS0FBZCxFQUFxQjtBQUNuQixTQUFPQSxLQUFLLENBQUNzSixLQUFOLENBQVl0QyxNQUFaLEtBQXVCLENBQXZCLEdBQTJCbkUsS0FBM0IsR0FBbUM3QyxLQUFLLENBQUNzSixLQUFOLENBQVl0SixLQUFLLENBQUN1SixPQUFsQixDQUExQztBQUNEO0FBRUQ7Ozs7Ozs7Ozs7OztBQVVBLFNBQVNyRyxNQUFULENBQWdCbEQsS0FBaEIsRUFBdUIySixTQUF2QixFQUFrQztBQUNoQyxPQUFLLElBQUluRCxDQUFDLEdBQUcsQ0FBUixFQUFXb0QsR0FBRyxHQUFHdEosS0FBSyxDQUFDTixLQUFELENBQTNCLEVBQW9Dd0csQ0FBQyxHQUFHb0QsR0FBeEMsRUFBNkNwRCxDQUFDLEVBQTlDLEVBQWtEO0FBQ2hELFVBQU03RixJQUFJLEdBQUdFLE9BQU8sQ0FBQ2IsS0FBRCxDQUFwQjs7QUFDQSxRQUFJMkosU0FBUyxDQUFDaEosSUFBRCxDQUFiLEVBQXFCO0FBQ25CQyxhQUFPLENBQUNaLEtBQUQsRUFBUVcsSUFBUixDQUFQO0FBQ0Q7QUFDRjtBQUNGIiwiZmlsZSI6ImNoYW5rby5kZXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJjaGFua29cIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiY2hhbmtvXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJ2YXIgQXdhaXRWYWx1ZSA9IHJlcXVpcmUoXCIuL0F3YWl0VmFsdWVcIik7XG5cbmZ1bmN0aW9uIEFzeW5jR2VuZXJhdG9yKGdlbikge1xuICB2YXIgZnJvbnQsIGJhY2s7XG5cbiAgZnVuY3Rpb24gc2VuZChrZXksIGFyZykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVxdWVzdCA9IHtcbiAgICAgICAga2V5OiBrZXksXG4gICAgICAgIGFyZzogYXJnLFxuICAgICAgICByZXNvbHZlOiByZXNvbHZlLFxuICAgICAgICByZWplY3Q6IHJlamVjdCxcbiAgICAgICAgbmV4dDogbnVsbFxuICAgICAgfTtcblxuICAgICAgaWYgKGJhY2spIHtcbiAgICAgICAgYmFjayA9IGJhY2submV4dCA9IHJlcXVlc3Q7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmcm9udCA9IGJhY2sgPSByZXF1ZXN0O1xuICAgICAgICByZXN1bWUoa2V5LCBhcmcpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzdW1lKGtleSwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHZhciByZXN1bHQgPSBnZW5ba2V5XShhcmcpO1xuICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgdmFyIHdyYXBwZWRBd2FpdCA9IHZhbHVlIGluc3RhbmNlb2YgQXdhaXRWYWx1ZTtcbiAgICAgIFByb21pc2UucmVzb2x2ZSh3cmFwcGVkQXdhaXQgPyB2YWx1ZS53cmFwcGVkIDogdmFsdWUpLnRoZW4oZnVuY3Rpb24gKGFyZykge1xuICAgICAgICBpZiAod3JhcHBlZEF3YWl0KSB7XG4gICAgICAgICAgcmVzdW1lKGtleSA9PT0gXCJyZXR1cm5cIiA/IFwicmV0dXJuXCIgOiBcIm5leHRcIiwgYXJnKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBzZXR0bGUocmVzdWx0LmRvbmUgPyBcInJldHVyblwiIDogXCJub3JtYWxcIiwgYXJnKTtcbiAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgcmVzdW1lKFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgc2V0dGxlKFwidGhyb3dcIiwgZXJyKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzZXR0bGUodHlwZSwgdmFsdWUpIHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgXCJyZXR1cm5cIjpcbiAgICAgICAgZnJvbnQucmVzb2x2ZSh7XG4gICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgIGRvbmU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFwidGhyb3dcIjpcbiAgICAgICAgZnJvbnQucmVqZWN0KHZhbHVlKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGZyb250LnJlc29sdmUoe1xuICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICBkb25lOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgZnJvbnQgPSBmcm9udC5uZXh0O1xuXG4gICAgaWYgKGZyb250KSB7XG4gICAgICByZXN1bWUoZnJvbnQua2V5LCBmcm9udC5hcmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBiYWNrID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICB0aGlzLl9pbnZva2UgPSBzZW5kO1xuXG4gIGlmICh0eXBlb2YgZ2VuW1wicmV0dXJuXCJdICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB0aGlzW1wicmV0dXJuXCJdID0gdW5kZWZpbmVkO1xuICB9XG59XG5cbmlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHtcbiAgQXN5bmNHZW5lcmF0b3IucHJvdG90eXBlW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbn1cblxuQXN5bmNHZW5lcmF0b3IucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAoYXJnKSB7XG4gIHJldHVybiB0aGlzLl9pbnZva2UoXCJuZXh0XCIsIGFyZyk7XG59O1xuXG5Bc3luY0dlbmVyYXRvci5wcm90b3R5cGVbXCJ0aHJvd1wiXSA9IGZ1bmN0aW9uIChhcmcpIHtcbiAgcmV0dXJuIHRoaXMuX2ludm9rZShcInRocm93XCIsIGFyZyk7XG59O1xuXG5Bc3luY0dlbmVyYXRvci5wcm90b3R5cGVbXCJyZXR1cm5cIl0gPSBmdW5jdGlvbiAoYXJnKSB7XG4gIHJldHVybiB0aGlzLl9pbnZva2UoXCJyZXR1cm5cIiwgYXJnKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQXN5bmNHZW5lcmF0b3I7IiwiZnVuY3Rpb24gX0F3YWl0VmFsdWUodmFsdWUpIHtcbiAgdGhpcy53cmFwcGVkID0gdmFsdWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX0F3YWl0VmFsdWU7IiwidmFyIEF3YWl0VmFsdWUgPSByZXF1aXJlKFwiLi9Bd2FpdFZhbHVlXCIpO1xuXG5mdW5jdGlvbiBfYXdhaXRBc3luY0dlbmVyYXRvcih2YWx1ZSkge1xuICByZXR1cm4gbmV3IEF3YWl0VmFsdWUodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hd2FpdEFzeW5jR2VuZXJhdG9yOyIsInZhciBBc3luY0dlbmVyYXRvciA9IHJlcXVpcmUoXCIuL0FzeW5jR2VuZXJhdG9yXCIpO1xuXG5mdW5jdGlvbiBfd3JhcEFzeW5jR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG5ldyBBc3luY0dlbmVyYXRvcihmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfd3JhcEFzeW5jR2VuZXJhdG9yOyIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCIoZnVuY3Rpb24gKGdsb2JhbCwgdW5kZWZpbmVkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICBpZiAoZ2xvYmFsLnNldEltbWVkaWF0ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIG5leHRIYW5kbGUgPSAxOyAvLyBTcGVjIHNheXMgZ3JlYXRlciB0aGFuIHplcm9cbiAgICB2YXIgdGFza3NCeUhhbmRsZSA9IHt9O1xuICAgIHZhciBjdXJyZW50bHlSdW5uaW5nQVRhc2sgPSBmYWxzZTtcbiAgICB2YXIgZG9jID0gZ2xvYmFsLmRvY3VtZW50O1xuICAgIHZhciByZWdpc3RlckltbWVkaWF0ZTtcblxuICAgIGZ1bmN0aW9uIHNldEltbWVkaWF0ZShjYWxsYmFjaykge1xuICAgICAgLy8gQ2FsbGJhY2sgY2FuIGVpdGhlciBiZSBhIGZ1bmN0aW9uIG9yIGEgc3RyaW5nXG4gICAgICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgY2FsbGJhY2sgPSBuZXcgRnVuY3Rpb24oXCJcIiArIGNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICAgIC8vIENvcHkgZnVuY3Rpb24gYXJndW1lbnRzXG4gICAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2kgKyAxXTtcbiAgICAgIH1cbiAgICAgIC8vIFN0b3JlIGFuZCByZWdpc3RlciB0aGUgdGFza1xuICAgICAgdmFyIHRhc2sgPSB7IGNhbGxiYWNrOiBjYWxsYmFjaywgYXJnczogYXJncyB9O1xuICAgICAgdGFza3NCeUhhbmRsZVtuZXh0SGFuZGxlXSA9IHRhc2s7XG4gICAgICByZWdpc3RlckltbWVkaWF0ZShuZXh0SGFuZGxlKTtcbiAgICAgIHJldHVybiBuZXh0SGFuZGxlKys7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYXJJbW1lZGlhdGUoaGFuZGxlKSB7XG4gICAgICAgIGRlbGV0ZSB0YXNrc0J5SGFuZGxlW2hhbmRsZV07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcnVuKHRhc2spIHtcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gdGFzay5jYWxsYmFjaztcbiAgICAgICAgdmFyIGFyZ3MgPSB0YXNrLmFyZ3M7XG4gICAgICAgIHN3aXRjaCAoYXJncy5sZW5ndGgpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgY2FsbGJhY2suYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcnVuSWZQcmVzZW50KGhhbmRsZSkge1xuICAgICAgICAvLyBGcm9tIHRoZSBzcGVjOiBcIldhaXQgdW50aWwgYW55IGludm9jYXRpb25zIG9mIHRoaXMgYWxnb3JpdGhtIHN0YXJ0ZWQgYmVmb3JlIHRoaXMgb25lIGhhdmUgY29tcGxldGVkLlwiXG4gICAgICAgIC8vIFNvIGlmIHdlJ3JlIGN1cnJlbnRseSBydW5uaW5nIGEgdGFzaywgd2UnbGwgbmVlZCB0byBkZWxheSB0aGlzIGludm9jYXRpb24uXG4gICAgICAgIGlmIChjdXJyZW50bHlSdW5uaW5nQVRhc2spIHtcbiAgICAgICAgICAgIC8vIERlbGF5IGJ5IGRvaW5nIGEgc2V0VGltZW91dC4gc2V0SW1tZWRpYXRlIHdhcyB0cmllZCBpbnN0ZWFkLCBidXQgaW4gRmlyZWZveCA3IGl0IGdlbmVyYXRlZCBhXG4gICAgICAgICAgICAvLyBcInRvbyBtdWNoIHJlY3Vyc2lvblwiIGVycm9yLlxuICAgICAgICAgICAgc2V0VGltZW91dChydW5JZlByZXNlbnQsIDAsIGhhbmRsZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgdGFzayA9IHRhc2tzQnlIYW5kbGVbaGFuZGxlXTtcbiAgICAgICAgICAgIGlmICh0YXNrKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudGx5UnVubmluZ0FUYXNrID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBydW4odGFzayk7XG4gICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbW1lZGlhdGUoaGFuZGxlKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudGx5UnVubmluZ0FUYXNrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbE5leHRUaWNrSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uICgpIHsgcnVuSWZQcmVzZW50KGhhbmRsZSk7IH0pO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhblVzZVBvc3RNZXNzYWdlKCkge1xuICAgICAgICAvLyBUaGUgdGVzdCBhZ2FpbnN0IGBpbXBvcnRTY3JpcHRzYCBwcmV2ZW50cyB0aGlzIGltcGxlbWVudGF0aW9uIGZyb20gYmVpbmcgaW5zdGFsbGVkIGluc2lkZSBhIHdlYiB3b3JrZXIsXG4gICAgICAgIC8vIHdoZXJlIGBnbG9iYWwucG9zdE1lc3NhZ2VgIG1lYW5zIHNvbWV0aGluZyBjb21wbGV0ZWx5IGRpZmZlcmVudCBhbmQgY2FuJ3QgYmUgdXNlZCBmb3IgdGhpcyBwdXJwb3NlLlxuICAgICAgICBpZiAoZ2xvYmFsLnBvc3RNZXNzYWdlICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cykge1xuICAgICAgICAgICAgdmFyIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXMgPSB0cnVlO1xuICAgICAgICAgICAgdmFyIG9sZE9uTWVzc2FnZSA9IGdsb2JhbC5vbm1lc3NhZ2U7XG4gICAgICAgICAgICBnbG9iYWwub25tZXNzYWdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cyA9IGZhbHNlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShcIlwiLCBcIipcIik7XG4gICAgICAgICAgICBnbG9iYWwub25tZXNzYWdlID0gb2xkT25NZXNzYWdlO1xuICAgICAgICAgICAgcmV0dXJuIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsUG9zdE1lc3NhZ2VJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgLy8gSW5zdGFsbHMgYW4gZXZlbnQgaGFuZGxlciBvbiBgZ2xvYmFsYCBmb3IgdGhlIGBtZXNzYWdlYCBldmVudDogc2VlXG4gICAgICAgIC8vICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4vRE9NL3dpbmRvdy5wb3N0TWVzc2FnZVxuICAgICAgICAvLyAqIGh0dHA6Ly93d3cud2hhdHdnLm9yZy9zcGVjcy93ZWItYXBwcy9jdXJyZW50LXdvcmsvbXVsdGlwYWdlL2NvbW1zLmh0bWwjY3Jvc3NEb2N1bWVudE1lc3NhZ2VzXG5cbiAgICAgICAgdmFyIG1lc3NhZ2VQcmVmaXggPSBcInNldEltbWVkaWF0ZSRcIiArIE1hdGgucmFuZG9tKCkgKyBcIiRcIjtcbiAgICAgICAgdmFyIG9uR2xvYmFsTWVzc2FnZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuc291cmNlID09PSBnbG9iYWwgJiZcbiAgICAgICAgICAgICAgICB0eXBlb2YgZXZlbnQuZGF0YSA9PT0gXCJzdHJpbmdcIiAmJlxuICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEuaW5kZXhPZihtZXNzYWdlUHJlZml4KSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJ1bklmUHJlc2VudCgrZXZlbnQuZGF0YS5zbGljZShtZXNzYWdlUHJlZml4Lmxlbmd0aCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICAgICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIG9uR2xvYmFsTWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ2xvYmFsLmF0dGFjaEV2ZW50KFwib25tZXNzYWdlXCIsIG9uR2xvYmFsTWVzc2FnZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKG1lc3NhZ2VQcmVmaXggKyBoYW5kbGUsIFwiKlwiKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsTWVzc2FnZUNoYW5uZWxJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgdmFyIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICAgICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgdmFyIGhhbmRsZSA9IGV2ZW50LmRhdGE7XG4gICAgICAgICAgICBydW5JZlByZXNlbnQoaGFuZGxlKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgY2hhbm5lbC5wb3J0Mi5wb3N0TWVzc2FnZShoYW5kbGUpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxSZWFkeVN0YXRlQ2hhbmdlSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHZhciBodG1sID0gZG9jLmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhIDxzY3JpcHQ+IGVsZW1lbnQ7IGl0cyByZWFkeXN0YXRlY2hhbmdlIGV2ZW50IHdpbGwgYmUgZmlyZWQgYXN5bmNocm9ub3VzbHkgb25jZSBpdCBpcyBpbnNlcnRlZFxuICAgICAgICAgICAgLy8gaW50byB0aGUgZG9jdW1lbnQuIERvIHNvLCB0aHVzIHF1ZXVpbmcgdXAgdGhlIHRhc2suIFJlbWVtYmVyIHRvIGNsZWFuIHVwIG9uY2UgaXQncyBiZWVuIGNhbGxlZC5cbiAgICAgICAgICAgIHZhciBzY3JpcHQgPSBkb2MuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgICAgICAgICAgIHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcnVuSWZQcmVzZW50KGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgaHRtbC5yZW1vdmVDaGlsZChzY3JpcHQpO1xuICAgICAgICAgICAgICAgIHNjcmlwdCA9IG51bGw7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaHRtbC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxTZXRUaW1lb3V0SW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KHJ1bklmUHJlc2VudCwgMCwgaGFuZGxlKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBJZiBzdXBwb3J0ZWQsIHdlIHNob3VsZCBhdHRhY2ggdG8gdGhlIHByb3RvdHlwZSBvZiBnbG9iYWwsIHNpbmNlIHRoYXQgaXMgd2hlcmUgc2V0VGltZW91dCBldCBhbC4gbGl2ZS5cbiAgICB2YXIgYXR0YWNoVG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgJiYgT2JqZWN0LmdldFByb3RvdHlwZU9mKGdsb2JhbCk7XG4gICAgYXR0YWNoVG8gPSBhdHRhY2hUbyAmJiBhdHRhY2hUby5zZXRUaW1lb3V0ID8gYXR0YWNoVG8gOiBnbG9iYWw7XG5cbiAgICAvLyBEb24ndCBnZXQgZm9vbGVkIGJ5IGUuZy4gYnJvd3NlcmlmeSBlbnZpcm9ubWVudHMuXG4gICAgaWYgKHt9LnRvU3RyaW5nLmNhbGwoZ2xvYmFsLnByb2Nlc3MpID09PSBcIltvYmplY3QgcHJvY2Vzc11cIikge1xuICAgICAgICAvLyBGb3IgTm9kZS5qcyBiZWZvcmUgMC45XG4gICAgICAgIGluc3RhbGxOZXh0VGlja0ltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGNhblVzZVBvc3RNZXNzYWdlKCkpIHtcbiAgICAgICAgLy8gRm9yIG5vbi1JRTEwIG1vZGVybiBicm93c2Vyc1xuICAgICAgICBpbnN0YWxsUG9zdE1lc3NhZ2VJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChnbG9iYWwuTWVzc2FnZUNoYW5uZWwpIHtcbiAgICAgICAgLy8gRm9yIHdlYiB3b3JrZXJzLCB3aGVyZSBzdXBwb3J0ZWRcbiAgICAgICAgaW5zdGFsbE1lc3NhZ2VDaGFubmVsSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoZG9jICYmIFwib25yZWFkeXN0YXRlY2hhbmdlXCIgaW4gZG9jLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIikpIHtcbiAgICAgICAgLy8gRm9yIElFIDbigJM4XG4gICAgICAgIGluc3RhbGxSZWFkeVN0YXRlQ2hhbmdlSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEZvciBvbGRlciBicm93c2Vyc1xuICAgICAgICBpbnN0YWxsU2V0VGltZW91dEltcGxlbWVudGF0aW9uKCk7XG4gICAgfVxuXG4gICAgYXR0YWNoVG8uc2V0SW1tZWRpYXRlID0gc2V0SW1tZWRpYXRlO1xuICAgIGF0dGFjaFRvLmNsZWFySW1tZWRpYXRlID0gY2xlYXJJbW1lZGlhdGU7XG59KHR5cGVvZiBzZWxmID09PSBcInVuZGVmaW5lZFwiID8gdHlwZW9mIGdsb2JhbCA9PT0gXCJ1bmRlZmluZWRcIiA/IHRoaXMgOiBnbG9iYWwgOiBzZWxmKSk7XG4iLCJ2YXIgc2NvcGUgPSAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBnbG9iYWwpIHx8XG4gICAgICAgICAgICAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZikgfHxcbiAgICAgICAgICAgIHdpbmRvdztcbnZhciBhcHBseSA9IEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseTtcblxuLy8gRE9NIEFQSXMsIGZvciBjb21wbGV0ZW5lc3NcblxuZXhwb3J0cy5zZXRUaW1lb3V0ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgVGltZW91dChhcHBseS5jYWxsKHNldFRpbWVvdXQsIHNjb3BlLCBhcmd1bWVudHMpLCBjbGVhclRpbWVvdXQpO1xufTtcbmV4cG9ydHMuc2V0SW50ZXJ2YWwgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBUaW1lb3V0KGFwcGx5LmNhbGwoc2V0SW50ZXJ2YWwsIHNjb3BlLCBhcmd1bWVudHMpLCBjbGVhckludGVydmFsKTtcbn07XG5leHBvcnRzLmNsZWFyVGltZW91dCA9XG5leHBvcnRzLmNsZWFySW50ZXJ2YWwgPSBmdW5jdGlvbih0aW1lb3V0KSB7XG4gIGlmICh0aW1lb3V0KSB7XG4gICAgdGltZW91dC5jbG9zZSgpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBUaW1lb3V0KGlkLCBjbGVhckZuKSB7XG4gIHRoaXMuX2lkID0gaWQ7XG4gIHRoaXMuX2NsZWFyRm4gPSBjbGVhckZuO1xufVxuVGltZW91dC5wcm90b3R5cGUudW5yZWYgPSBUaW1lb3V0LnByb3RvdHlwZS5yZWYgPSBmdW5jdGlvbigpIHt9O1xuVGltZW91dC5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5fY2xlYXJGbi5jYWxsKHNjb3BlLCB0aGlzLl9pZCk7XG59O1xuXG4vLyBEb2VzIG5vdCBzdGFydCB0aGUgdGltZSwganVzdCBzZXRzIHVwIHRoZSBtZW1iZXJzIG5lZWRlZC5cbmV4cG9ydHMuZW5yb2xsID0gZnVuY3Rpb24oaXRlbSwgbXNlY3MpIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuICBpdGVtLl9pZGxlVGltZW91dCA9IG1zZWNzO1xufTtcblxuZXhwb3J0cy51bmVucm9sbCA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuICBpdGVtLl9pZGxlVGltZW91dCA9IC0xO1xufTtcblxuZXhwb3J0cy5fdW5yZWZBY3RpdmUgPSBleHBvcnRzLmFjdGl2ZSA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuXG4gIHZhciBtc2VjcyA9IGl0ZW0uX2lkbGVUaW1lb3V0O1xuICBpZiAobXNlY3MgPj0gMCkge1xuICAgIGl0ZW0uX2lkbGVUaW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uIG9uVGltZW91dCgpIHtcbiAgICAgIGlmIChpdGVtLl9vblRpbWVvdXQpXG4gICAgICAgIGl0ZW0uX29uVGltZW91dCgpO1xuICAgIH0sIG1zZWNzKTtcbiAgfVxufTtcblxuLy8gc2V0aW1tZWRpYXRlIGF0dGFjaGVzIGl0c2VsZiB0byB0aGUgZ2xvYmFsIG9iamVjdFxucmVxdWlyZShcInNldGltbWVkaWF0ZVwiKTtcbi8vIE9uIHNvbWUgZXhvdGljIGVudmlyb25tZW50cywgaXQncyBub3QgY2xlYXIgd2hpY2ggb2JqZWN0IGBzZXRpbW1lZGlhdGVgIHdhc1xuLy8gYWJsZSB0byBpbnN0YWxsIG9udG8uICBTZWFyY2ggZWFjaCBwb3NzaWJpbGl0eSBpbiB0aGUgc2FtZSBvcmRlciBhcyB0aGVcbi8vIGBzZXRpbW1lZGlhdGVgIGxpYnJhcnkuXG5leHBvcnRzLnNldEltbWVkaWF0ZSA9ICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzZWxmLnNldEltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgJiYgZ2xvYmFsLnNldEltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMgJiYgdGhpcy5zZXRJbW1lZGlhdGUpO1xuZXhwb3J0cy5jbGVhckltbWVkaWF0ZSA9ICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzZWxmLmNsZWFySW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiICYmIGdsb2JhbC5jbGVhckltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcyAmJiB0aGlzLmNsZWFySW1tZWRpYXRlKTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG4vKipcbiAqIEFsbCBvZiB0aGUgcHVibGljLWZhY2luZyBDaGFua28gZnVuY3Rpb25zIGFyZSBnYXRoZXJlZCBoZXJlIGluIG9uZSBwbGFjZSB0b1xuICogYmUgZXhwb3J0ZWQgYXMgYSB3aG9sZS4gVGhpcyBpcyBhIGNvbXBsZXRlbHkgZmxhdCBsaXN0IG9mIGV4cG9ydHMsIGFzXG4gKiBpbmx1ZGluZyBhbnkgb2JqZWN0IGxpdGVyYWxzIGZvciBleHBvcnQgKHdoaWNoIHdvdWxkIGJlIG5hdHVyYWwgZm9yIGJ1ZmZlcnMsXG4gKiBmb3IgZXhhbXBsZSkgd291bGQga2VlcCB0cmVlLXNoYWtpbmcgZnJvbSB3b3JraW5nIHJpZ2h0LlxuICpcbiAqIEBtb2R1bGUgY2hhbmtvXG4gKi9cblxuLyoqXG4gKiBUaGUgY29yZSBuYW1lc3BhY2UgdW5kZXIgd2hpY2ggYWxsIG9mIHRoZSBtYWluIGZ1bmN0aW9ucyByZXNpZGUgaW4gdGhlIEFQSS5cbiAqIEV2ZXJ5dGhpbmcgaW4gdGhpcyBuYW1lc3BhY2UgaXMgYWNjZXNzaWJsZSBhcyBhIG1lbWJlciBvZiB0aGUgbWFpbiBgY2hhbmtvYFxuICogb2JqZWN0IHRoYXQgaXMgcmVxdWlyZWQsIGltcG9ydGVkLCBvciBhY2Nlc3NlZCBhcyBhIGdsb2JhbCBvYmplY3QuXG4gKlxuICogQG5hbWVzcGFjZSBDaGFua29cbiAqL1xuZXhwb3J0IHsgZml4ZWQsIGRyb3BwaW5nLCBzbGlkaW5nIH0gZnJvbSBcIm1vZHVsZXMvYnVmZmVyXCI7XG5leHBvcnQge1xuICBDTE9TRUQsXG4gIGNoYW4sXG4gIHRpbWVkQ2hhbixcbiAgdHJhbnNDaGFuLFxuICBzZW5kLFxuICByZWN2LFxuICBzZW5kQXN5bmMsXG4gIHJlY3ZBc3luYyxcbiAgcmVjdk9yVGhyb3csXG4gIGNsb3NlLFxuICBpc0Nsb3NlZCxcbiAgaXNCdWZmZXJlZCxcbiAgaXNUaW1lZCxcbiAgc2VsZWN0LFxuICBzZWxlY3RBc3luYyxcbiAgdmFsdWUsXG4gIGNoYW5uZWxcbn0gZnJvbSBcIm1vZHVsZXMvY2hhbm5lbFwiO1xuZXhwb3J0IHtcbiAgY29uZmlnLFxuICBTRVRfSU1NRURJQVRFLFxuICBNRVNTQUdFX0NIQU5ORUwsXG4gIFNFVF9USU1FT1VUXG59IGZyb20gXCJtb2R1bGVzL2Rpc3BhdGNoZXJcIjtcbmV4cG9ydCB7IGdvLCBzbGVlcCB9IGZyb20gXCJtb2R1bGVzL3Byb2Nlc3NcIjtcbmV4cG9ydCB7IEVNUFRZIH0gZnJvbSBcIm1vZHVsZXMvcXVldWVcIjtcblxuLyoqXG4gKiBBbiBlcnJvciBoYW5kbGluZyBmdW5jaXRvbi4gVGhpcyBpcyB1c2VkIHRvIGhhbmRsZSBleGNlcHRpb25zIHRocm93biBpbiBhc3luY1xuICogZnVuY3Rpb25zIGFuZCBpbiB0cmFuc2R1Y2Vycy4gVGhlIHJldHVybiB2YWx1ZSBvZiBhbiBleGNlcHRpb24gaGFuZGxlciBpc1xuICogdHlwaWNhbGx5IHNlbnQgdG8gYSBjaGFubmVsOyBpZiB0aGUgZXhjZXB0aW9uIGhhcHBlbmVkIHdpdGhpbiBhbiBhc3luY1xuICogZnVuY3Rpb24sIGl0IHdpbGwgYmUgc2VudCB0byB0aGF0IGZ1bmN0aW9uJ3Mgb3V0cHV0IGNoYW5uZWwsIGFuZCBpZiB0aGVcbiAqIGV4Y3BldGlvbiBoYXBwZW5lZCBpbiBhIHRyYW5zZHVjZXIsIGl0IHdpbGwgYmUgc2VudCB0byB0aGUgY2hhbm5lbCB0byB3aGljaFxuICogdGhlIHRyYW5zZHVjZXIgaXMgYXR0YWNoZWQuXG4gKlxuICogQGNhbGxiYWNrIGV4Y2VwdGlvbkhhbmRsZXJcbiAqIEBwYXJhbSB7b2JqZWN0fSBlcnIgVGhlIGVycm9yIG9iamVjdCB0aGF0IHdhcyB0aHJvd24gdG8gY2F1c2UgdGhlIGVycm9yIHRvXG4gKiAgICAgaGF2ZSB0byBiZSBoYW5kbGVkLlxuICogQHJldHVybiB7Kn0gQSB2YWx1ZSBkZWNpZGVkIGJ5IHRoZSBoYW5kbGVyIHRoYXQgd2lsbCBiZSBzZW50IHRvIGEgY2hhbm5lbC5cbiAqL1xuXG4vKipcbiAqIEEgY2FsbGJhY2sgdGhhdCdzIHJ1biB3aGVuIGEgbm9uLWJsb2NraW5nIGNoYW5uZWwgb3BlcmF0aW9uIGNvbXBsZXRlcy4gVGhlXG4gKiB2YWx1ZSB0aGF0IHRoaXMgZnVuY3Rpb24gcmVjZWl2ZXMgaXMgaWRlbnRpY2FsIHRvIHdoYXQgaXMgcmV0dXJuZWQgYnkgYVxuICogYmxvY2tpbmcgY2FsbDogdGhlIHZhbHVlIHJlY2VpdmVkIGZyb20gdGhlIGNoYW5uZWwgZm9yIGEgYHJlY3ZgLCBvciBgdHJ1ZWAgb3JcbiAqIGBmYWxzZWAgZGVwZW5kaW5nIG9uIHRoZSBjaGFubmVsIHN0YXR1cyBmb3IgYSBgc2VuZGAuIEFueSByZXR1cm4gdmFsdWUgZnJvbVxuICogdGhpcyBjYWxsYmFjayBpcyBpZ25vcmVkLlxuICpcbiAqIEBjYWxsYmFjayBvcENhbGxiYWNrXG4gKiBAcGFyYW0geyp9IHZhbHVlIEVpdGhlciB0aGUgdmFsdWUgcmVjZWl2ZWQgZnJvbSB0aGUgY2hhbm5lbCwgb3Igd2hldGhlciBvclxuICogbm90IGEgdmFsdWUgd2FzIHN1Y2Nlc3NmdWxseSBzZW50LlxuICovXG5cbi8qKlxuICogQSBjYWxsYmFjayB0aGF0J3MgcnVuIHdoZW4gYSBub24tYmxvY2tpbmcgYHNlbGVjdGAgb3BlcmF0aW9uIGNvbXBsZXRlcy4gVGhlXG4gKiB2YWx1ZSB0aGF0IHRoaXMgZnVuY3Rpb24gcmVjZWl2ZXMgaXMgYW4gb2JqZWN0IHdpdGggdHdvIHByb3BlcnRpZXM6IHRoZSB2YWx1ZVxuICogdGhhdCB0aGUgYHNlbGVjdGAgb3BlcmF0aW9uIGNvbXBsZXRlZCB3aXRoIChlaXRoZXIgdGhlIHZhbHVlIHJlY2VpdmVkIGZyb21cbiAqIHRoZSBjaGFubmVsIGluIGEgcmVjZWl2ZSBvcGVyYXRpb24sIG9yIGB0cnVlYCBvciBgZmFsc2VgIGluIGEgc2VuZFxuICogb3BlcmF0aW9uKSwgYWxvbmcgd2l0aCB0aGUgY2hhbm5lbCB3aGVyZSB0aGUgb3BlcmF0aW9uIGFjdHVhbGx5IGhhcHBlbmVkLiBBbnlcbiAqIHJldHVybiB2YWx1ZSBmcm9tIHRoaXMgY2FsbGJhY2sgaXMgaWdub3JlZC5cbiAqXG4gKiBAY2FsbGJhY2sgc2VsZWN0Q2FsbGJhY2tcbiAqIEBwYXJhbSB7bW9kdWxlOmNoYW5rby9jaGFubmVsLlNlbGVjdFJlc3VsdH0gZGF0YSBUaGUgdmFsdWUgcmV0dXJuZWQgZnJvbSB0aGVcbiAqICAgICBzZWxlY3Qgb3BlcmF0aW9uLlxuICovXG5cbi8qKlxuICogQSBmdW5jdGlvbiB0aGF0IHRyYW5zZm9ybXMgZGF0YSBhbmQgY2FuIGJlIGNvbXBvc2VkIHdpdGggb3RoZXIgdHJhbnNkdWNlcnNcbiAqIGludG8gYSBzaW5nbGUgdHJhbnNkdWNlci4gVGhlIHRyYW5zZHVjZXJzIHRoZW1zZWx2ZXMgYXJlIHByb3ZpZGVkIGJ5IG90aGVyXG4gKiBsaWJyYXJpZXM7IHRoZSBvbmx5IGludm9sdmVtZW50IG9mIHRoaXMgbGlicmFyIGlzIGFzIGEgY29uc3VtZXIgb2ZcbiAqIHRyYW5zZHVjZXJzLlxuICpcbiAqIFRyYW5zZHVjZXJzIHdvcmsgYnkgaGF2aW5nIHN0ZXAgZnVuY3Rpb25zIHRoYXQgYXJlIGtub3duIHZpYSBwcm90b2NvbCwgYW5kIGl0XG4gKiBpcyB0aGVzZSBzdGVwIGZ1bmN0aW9ucyB0aGF0IHRha2UgYSB2YWx1ZSBhdCBhIHRpbWUgdG8gYmUgdHJhbnNmb3JtZWQgYXNcbiAqIHRoZWlyIGFyZ3VtZW50cy4gVGhlIGFyZ3VtZW50cyB0byB0aGUgdHJhbnNkdWNlcnMgdGhlbXNlbHZlcyBhcmUgb3RoZXJcbiAqIHRyYW5zZHVjZXJzIHRoYXQgYXJlIHRoZW4gY29tcG9zZWQgaW50byBhIHNpbmdsZSB0cmFuc2R1Y2VyLCB3aGljaCBpcyB0aGVuXG4gKiByZXR1cm5lZC4gVGhlc2UgdmFsdWVzIG5lZWQgbm90IGNvbmNlcm4gYSB1c2VyIG9mIHRocyBsaWJyYXJ5OyBqdXN0IHBhc3MgYVxuICogdHJhbnNkdWNlciB0byBge0BsaW5rIG1vZHVsZTpjaGFua28uY2hhbnxjaGFufWAgb3JcbiAqIGB7QGxpbmsgbW9kdWxlOmNoYW5rby50cmFuc0NoYW58dHJhbnNDaGFufWAgYW5kIGV2ZXJ5dGhpbmcgZWxzZSB3aWxsIGJlXG4gKiBoYW5kbGVkLlxuICpcbiAqIEBjYWxsYmFjayB0cmFuc2R1Y2VyXG4gKiBAcGFyYW0ge21vZHVsZTpjaGFua29+dHJhbnNkdWNlcn0geGZvcm0gQSB0cmFuc2R1Y2VyIHRvIGNoYWluIHRoaXMgdHJhbnNkdWNlclxuICogICAgIHRvLlxuICogQHJldHVybiB7bW9kdWxlOmNoYW5rb350cmFuc2R1Y2VyfSBBIG5ldyB0cmFuc2R1Y2VyIGNvbnNpc3Rpbmcgb2YgdGhlXG4gKiAgICAgY29tcG9zaXRpb24gb2YgdGhpcyBvbmUgYW5kIGB4Zm9ybWAuXG4gKi9cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG4vKipcbiAqIFByb3ZpZGVzIHNldmVyYWwgdHlwZXMgb2YgYnVmZmVycyB1c2FibGUgaW4gYnVmZmVyZWQgY2hhbm5lbHMuIFRoZXNlIGFyZSBhbGxcbiAqIGJ1aWx0IG9uIGEgc21hbGwsIGVmZmljaWVudCBxdWV1ZSB3aGljaCBpcyBpbiB0dXJuIGJhY2tlZCBieSBhIEphdmFTY3JpcHRcbiAqIGFycmF5LlxuICpcbiAqIEBtb2R1bGUgY2hhbmtvL2J1ZmZlclxuICovXG5cbmltcG9ydCB7IHF1ZXVlIGFzIHEsIGNvdW50IGFzIHFDb3VudCwgZW5xdWV1ZSwgZGVxdWV1ZSB9IGZyb20gXCJtb2R1bGVzL3F1ZXVlXCI7XG5cbi8qKlxuICogQSBidWZmZXIgdGhhdCBzdG9yZXMgdmFsdWVzIHNlbnQgdG8gYSBidWZmZXJlZCBjaGFubmVsIHVudGlsIGEgcHJvY2Vzc1xuICogcmVjZWl2ZXMgdGhlbS5cbiAqXG4gKiBEaWZmZXJlbnQgYnVmZmVyIGRpZmZlciBvbmx5IGluIHRoZSB3YXkgdGhhdCB0aGV5IGRldGVybWluZSB3aGV0aGVyIHRoZXkgYXJlXG4gKiBmdWxsIGFuZCBpbiB3aGF0IGhhcHBlbnMgd2hlbiBhIG5ldyB2YWx1ZSBpcyBhZGRlZCB0byBhIGZ1bGwgYnVmZmVyLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y2hhbmtvL2J1ZmZlclxuICogQHR5cGVkZWYgeyhtb2R1bGU6Y2hhbmtvL2J1ZmZlcn5GaXhlZEJ1ZmZlciB8XG4gKiAgICAgbW9kdWxlOmNoYW5rby9idWZmZXJ+RHJvcHBpbmdCdWZmZXIgfFxuICogICAgIG1vZHVsZTpjaGFua28vYnVmZmVyflNsaWRpbmdCdWZmZXIpfSBCdWZmZXJcbiAqL1xuXG4vKipcbiAqIFRoZSBuYW1lIG9mIGEgcHJvcGVydHkgdGhhdCBleGlzdHMgb24gYnVmZmVyIG9iamVjdHMgZm9yIHRoZSBwdXJwb3NlIG9mXG4gKiBpdGVudGlmeWluZyB0aGVtIGFzIGJ1ZmZlciBvYmplY3RzLlxuICpcbiAqIEB0eXBlIHtTeW1ib2x9XG4gKiBAcHJpdmF0ZVxuICovXG5jb25zdCBCVUZGRVIgPSBTeW1ib2woXCJCVUZGRVJcIik7XG5cbi8qKlxuICogQSBwb3NzaWJsZSB2YWx1ZSBvZiB0aGUgYHtAbGluayBtb2R1bGU6Y2hhbmtvL2J1ZmZlcn5CVUZGRVJ8QlVGRkVSfSBwcm9wZXJ0eVxuICogaW5kaWNhdGluZyB0aGF0IHRoZSBidWZmZXIgaXMgYSBmaXhlZCBidWZmZXIuXG4gKlxuICogQHR5cGUge1N5bWJvbH1cbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IEZJWEVEID0gU3ltYm9sKFwiRklYRURcIik7XG5cbi8qKlxuICogQSBwb3NzaWJsZSB2YWx1ZSBvZiB0aGUgYHtAbGluayBtb2R1bGU6Y2hhbmtvL2J1ZmZlcn5CVUZGRVJ8QlVGRkVSfSBwcm9wZXJ0eVxuICogaW5kaWNhdGluZyB0aGF0IHRoZSBidWZmZXIgaXMgYSBkcm9wcGluZyBidWZmZXIuXG4gKlxuICogQHR5cGUge1N5bWJvbH1cbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IERST1BQSU5HID0gU3ltYm9sKFwiRFJPUFBJTkdcIik7XG5cbi8qKlxuICogQSBwb3NzaWJsZSB2YWx1ZSBvZiB0aGUgYHtAbGluayBtb2R1bGU6Y2hhbmtvL2J1ZmZlcn5CVUZGRVJ8QlVGRkVSfSBwcm9wZXJ0eVxuICogaW5kaWNhdGluZyB0aGF0IHRoZSBidWZmZXIgaXMgYSBzbGlkaW5nIGJ1ZmZlci5cbiAqXG4gKiBAdHlwZSB7U3ltYm9sfVxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgU0xJRElORyA9IFN5bWJvbChcIlNMSURJTkdcIik7XG5cbi8qKlxuICogUHJlZGljYXRlIGluZGljYXRpbmcgd2hldGhlciB0aGUgc3VwcGxpZWQgb2JqZWN0IGlzIGEgYnVmZmVyLlxuICpcbiAqIEBwYXJhbSB7Kn0gb2JqIFRoZSB2YWx1ZSB0byB0ZXN0IHRvIHNlZSBpZiBpdCdzIGEgYnVmZmVyLlxuICogQHJldHVybiB7Ym9vbGVhbn0gRWl0aGVyIGB0cnVlYCBpZiB0aGUgdmFsdWUgaXMgYSBidWZmZXIsIG9yIGBmYWxzZWAgaWYgaXQgaXNcbiAqICAgICBub3QuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBpc0J1ZmZlcihvYmopIHtcbiAgcmV0dXJuICEhb2JqPy5bQlVGRkVSXTtcbn1cblxuLyoqXG4gKiBBIGJ1ZmZlciBpbXBsZW1lbnRhdGlvbiB0aGF0IG5ldmVyIGRpc2NhcmRzIGJ1ZmZlcmVkIGl0ZW1zIHdoZW4gYSBuZXcgaXRlbSBpc1xuICogYWRkZWQuXG4gKlxuICogVGhpcyBidWZmZXIgaGFzIGEgY29uY2VwdCBvZiAqZnVsbCosIGJ1dCBpdCdzIGEgc29mdCBsaW1pdC4gSWYgdGhlIHNpemUgb2ZcbiAqIHRoZSBidWZmZXIgaXMgZXhjZWVkZWQsIGFkZGVkIGl0ZW1zIGFyZSBzdGlsbCBzdG9yZWQuXG4gKiB7QGxpbmsgbW9kdWxlOmNoYW5rb35DaGFua28uaXNGdWxsfGlzRnVsbH0gcmV0dXJucyBgdHJ1ZWAgYW55IHRpbWUgdGhhdCB0aGVcbiAqIHNpemUgaXMgcmVhY2hlZCBvciBleGNlZWRlZCwgc28gaXQncyBlbnRpcmVseSBwb3NzaWJsZSB0byBjYWxsXG4gKiB7QGxpbmsgbW9kdWxlOmNoYW5rb35DaGFua28ucmVtb3ZlfHJlbW92ZX0gb24gYSBmdWxsIGJ1ZmZlciBhbmQgaGF2ZSBpdCBzdGlsbFxuICogYmUgZnVsbC5cbiAqXG4gKiBAdHlwZWRlZiBGaXhlZEJ1ZmZlclxuICovXG5cbi8qKlxuICogQ3JlYXRlcyBhIGZpeGVkIGJ1ZmZlciBvZiB0aGUgc3BlY2lmaWVkIGNhcGFjaXR5LlxuICpcbiAqIEEgZml4ZWQgYnVmZmVyIGlzIGEgJ25vcm1hbCcgYnVmZmVyLCBvbmUgdGhhdCBzdG9yZXMgYW5kIHJldHVybnMgaXRlbXMgb25cbiAqIGRlbWFuZC4gV2hpbGUgaXQgaXMgY2FwYWJsZSBvZiBiZWluZyBvdmVyLWZpbGxlZCwgdGhhdCBhYmlsaXR5IGlzIG5vdCB1c2VkIGluXG4gKiBDaGFua28uIEEgYnVmZmVyIHRoYXQgaXMgZnVsbCB3aWxsIGNhdXNlIHRoZSBuZXh0IHB1dCB0byBpdHMgY2hhbm5lbCB0byBibG9ja1xuICogdW50aWwgYXQgbGVhc3Qgb25lIGl0ZW0gaXMgcmVtb3ZlZCBmcm9tIHRoZSBidWZmZXIuXG4gKlxuICogVGhpcyBidWZmZXIgaXMgcGFzc2VkIHRvIGB7QGxpbmsgbW9kdWxlOmNoYW5rb35DaGFua28uY2hhbnxjaGFufWAsIGV0Yy4gdG9cbiAqIGNyZWF0ZSBhIGJ1ZmZlcmVkIGNoYW5uZWwuIEl0IGlzIG5vdCBtZWFudCB0byBiZSB1c2VkIGRpcmVjdGx5LlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y2hhbmtvfkNoYW5rb1xuICogQHBhcmFtIHtudW1iZXJ9IHNpemUgVGhlIG51bWJlciBvZiBpdGVtcyB0aGF0IHRoZSBuZXcgYnVmZmVyIGNhbiBob2xkIGJlZm9yZVxuICogICAgIGl0J3MgZnVsbC5cbiAqIEByZXR1cm4ge21vZHVsZTpjaGFua28vYnVmZmVyfkZpeGVkQnVmZmVyfSBBIG5ldyBmaXhlZCBidWZmZXIgb2YgdGhlXG4gKiAgICAgc3BlY2lmaWVkIGNhcGFjaXR5LlxuICovXG5mdW5jdGlvbiBmaXhlZChzaXplKSB7XG4gIHJldHVybiBPYmplY3QuY3JlYXRlKG51bGwsIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcXVldWUgYmFja2luZyB0aGlzIGJ1ZmZlci5cbiAgICAgKlxuICAgICAqIEB0eXBlIHttb2R1bGU6Y2hhbmtvL3F1ZXVlflF1ZXVlfVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgcXVldWU6IHtcbiAgICAgIHZhbHVlOiBxKClcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIG51bWJlciBvZiBpdGVtcyB0aGF0IHRoaXMgcXVldWUgY2FuIGhvbGQgYmVmb3JlIGl0J3MgY29uc2lkZXJlZCBmdWxsLlxuICAgICAqXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHNpemU6IHtcbiAgICAgIHZhbHVlOiBzaXplXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEEgbWFya2VyIHByb3BlcnR5IHVzZWQgdG8gc2hvdyB0aGF0IHRoaXMgaXMgYSBmaXhlZCBidWZmZXIuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7U3ltYm9sfVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgW0JVRkZFUl06IHtcbiAgICAgIHZhbHVlOiBGSVhFRFxuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxuICogQSBidWZmZXIgaW1wbGVtZW50YXRpb24gdGhhdCBkcm9wcyBuZXdseSBhZGRlZCBpdGVtcyB3aGVuIHRoZSBidWZmZXIgaXMgZnVsbC5cbiAqXG4gKiBUaGlzIGRyb3BwaW5nIGJlaGF2aW9yIGlzIHNpbGVudDogdGhlIG5ldyBpdGVtIGlzIHNpbXBseSBub3QgYWRkZWQgdG8gdGhlXG4gKiBxdWV1ZS4gTm90ZSB0aGF0IHRoaXMgYnVmZmVyIGlzIG5ldmVyIGBmdWxsYCBiZWNhdXNlIGl0IGNhbiBhbHdheXMgYmUgYWRkZWRcbiAqIHRvIHdpdGhvdXQgZXhjZWVkaW5nIHRoZSBzaXplLCBldmVuIGlmIHRoYXQgJ2FkZGluZycgZG9lc24ndCByZXN1bHQgaW4gYSBuZXdcbiAqIGl0ZW0gYWN0dWFsbHkgYXBwZWFyaW5nIGluIHRoZSBidWZmZXIuXG4gKlxuICogQHR5cGVkZWYgRHJvcHBpbmdCdWZmZXJcbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgYSBkcm9wcGluZyBidWZmZXIgb2YgdGhlIHNwZWNpZmllZCBjYXBhY2l0eS5cbiAqXG4gKiBBIGRyb3BwaW5nIGJ1ZmZlciBzaWxlbnRseSBkcm9wcyB0aGUgaXRlbSBiZWluZyBhZGRlZCBpZiB0aGUgYnVmZmVyIGlzXG4gKiBhbHJlYWR5IGF0IGNhcGFjaXR5LiBTaW5jZSBhZGRpbmcgYSBuZXcgaXRlbSB3aWxsIGFsd2F5cyAnc3VjY2VlZCcgKGV2ZW4gaWZcbiAqIGl0IHN1Y2NlZWRzIGJ5IGp1c3QgaWdub3JpbmcgdGhlIGFkZCksIGl0IGlzIG5ldmVyIGNvbnNpZGVyZWQgZnVsbCBhbmRcbiAqIHRoZXJlZm9yZSBhIHB1dCB0byBhIGNoYW5uZWwgYnVmZmVyZWQgYnkgYSBkcm9wcGluZyBidWZmZXIgbmV2ZXIgYmxvY2tzLlxuICpcbiAqIFRoaXMgYnVmZmVyIGlzIHBhc3NlZCB0byBge0BsaW5rIG1vZHVsZTpjaGFua29+Q2hhbmtvLmNoYW58Y2hhbn1gLCBldGMuIHRvXG4gKiBjcmVhdGUgYSBidWZmZXJlZCBjaGFubmVsLiBJdCBpcyBub3QgbWVhbnQgdG8gYmUgdXNlZCBkaXJlY3RseS5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNoYW5rb35DaGFua29cbiAqIEBwYXJhbSB7bnVtYmVyfSBzaXplIFRoZSBudW1iZXIgb2YgaXRlbXMgdGhhdCB0aGUgbmV3IGJ1ZmZlciBjYW4gaG9sZCBiZWZvcmVcbiAqICAgICBuZXdlc3QgaXRlbXMgYXJlIGRyb3BwZWQgb24gYWRkLlxuICogQHJldHVybiB7bW9kdWxlOmNoYW5rby9idWZmZXJ+RHJvcHBpbmdCdWZmZXJ9IEEgbmV3IGRyb3BwaW5nIGJ1ZmZlciBvZiB0aGVcbiAqICAgICBzcGVjaWZpZWQgY2FwYWNpdHkuXG4gKi9cbmZ1bmN0aW9uIGRyb3BwaW5nKHNpemUpIHtcbiAgcmV0dXJuIE9iamVjdC5jcmVhdGUobnVsbCwge1xuICAgIC8qKlxuICAgICAqIFRoZSBxdWV1ZSBiYWNraW5nIHRoaXMgYnVmZmVyLlxuICAgICAqXG4gICAgICogQHR5cGUge21vZHVsZTpjaGFua28vcXVldWV+UXVldWV9XG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBxdWV1ZToge1xuICAgICAgdmFsdWU6IHEoKVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgbnVtYmVyIG9mIGl0ZW1zIHRoYXQgdGhpcyBxdWV1ZSBjYW4gaG9sZCBiZWZvcmUgaXQncyBjb25zaWRlcmVkIGZ1bGwuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgc2l6ZToge1xuICAgICAgdmFsdWU6IHNpemVcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQSBtYXJrZXIgcHJvcGVydHkgdXNlZCB0byBzaG93IHRoYXQgdGhpcyBpcyBhIGRyb3BwaW5nIGJ1ZmZlci5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtTeW1ib2x9XG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBbQlVGRkVSXToge1xuICAgICAgdmFsdWU6IERST1BQSU5HXG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBBIGJ1ZmZlciBpbXBsZW1lbnRhdGlvbiB0aGF0IGRyb3BzIHRoZSBvbGRlc3QgaXRlbSB3aGVuIGFuIGl0ZW0gaXMgYWRkZWQgdG8gYVxuICogZnVsbCBidWZmZXIuXG4gKlxuICogVGhpcyBpcyB2ZXJ5IHNpbWlsYXIgdG9cbiAqIHtAbGluayBtb2R1bGU6Y2hhbmtvL2J1ZmZlci5Ecm9wcGluZ0J1ZmZlcnxEcm9wcGluZ0J1ZmZlcn07IHRoZSBvbmx5XG4gKiBkaWZmZXJlbmNlIGlzIGluIHdoYXQgaGFwcGVucyB3aGVuIGFuIGl0ZW0gaXMgYWRkZWQuIEluIHRoaXMgYnVmZmVyLCB0aGUgbmV3XG4gKiBpdGVtIGlzIGluZGVlZCBhZGRlZCB0byB0aGUgYnVmZmVyLCBidXQgaW4gb3JkZXIgdG8ga2VlcCB0aGUgY291bnQgb2YgdGhlXG4gKiBidWZmZXIgYXQgb3IgYmVsb3cgaXRzIHNpemUsIHRoZSBvbGRlc3QgaXRlbSBpbiB0aGUgYnVmZmVyIGlzIHNpbGVudGx5XG4gKiBkcm9wcGVkLlxuICpcbiAqIEB0eXBlZGVmIFNsaWRpbmdCdWZmZXJcbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgYSBzbGlkaW5nIGJ1ZmZlciBvZiB0aGUgc3BlY2lmaWVkIGNhcGFjaXR5LlxuICpcbiAqIEEgc2xpZGluZyBidWZmZXIgZHJvcHMgdGhlIGZpcnN0LWFkZGVkIChvbGRlc3QpIGl0ZW0gYWxyZWFkeSBpbiB0aGUgYnVmZmVyIGlmXG4gKiBhIG5ldyBpdGVtIGlzIGFkZGVkIHdoZW4gdGhlIGJ1ZmZlciBpcyBhbHJlYWR5IGF0IGNhcGFjaXR5LiBTaW5jZSBpdCdzIGFsd2F5c1xuICogY2FwYWJsZSBvZiBoYXZpbmcgaXRlbXMgYWRkZWQgdG8gaXQsIGl0J3MgbmV2ZXIgY29uc2lkZXJlZCBmdWxsLCBhbmRcbiAqIHRoZXJlZm9yZSBhIHB1dCB0byBhIGNoYW5uZWwgYnVmZmVyZWQgYnkgYSBzbGlkaW5nIGJ1ZmZlciBuZXZlciBibG9ja3MuXG4gKlxuICogVGhpcyBidWZmZXIgaXMgcGFzc2VkIHRvIGB7QGxpbmsgbW9kdWxlOmNoYW5rb35DaGFua28uY2hhbnxjaGFufWAsIGV0Yy4gdG9cbiAqIGNyZWF0ZSBhIGJ1ZmZlcmVkIGNoYW5uZWwuIEl0IGlzIG5vdCBtZWFudCB0byBiZSB1c2VkIGRpcmVjdGx5LlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y2hhbmtvfkNoYW5rb1xuICogQHBhcmFtIHtudW1iZXJ9IHNpemUgVGhlIG51bWJlciBvZiBpdGVtcyB0aGF0IHRoZSBuZXcgYnVmZmVyIGNhbiBob2xkIGJlZm9yZVxuICogICAgIG9sZGVzdCBpdGVtcyBhcmUgZHJvcHBlZCBvbiBhZGQuXG4gKiBAcmV0dXJuIHttb2R1bGU6Y2hhbmtvL2J1ZmZlcn5TbGlkaW5nQnVmZmVyfSBBIG5ldyBzbGlkaW5nIGJ1ZmZlciBvZiB0aGVcbiAqICAgICBzcGVjaWZpZWQgY2FwYWNpdHkuXG4gKi9cbmZ1bmN0aW9uIHNsaWRpbmcoc2l6ZSkge1xuICByZXR1cm4gT2JqZWN0LmNyZWF0ZShudWxsLCB7XG4gICAgLyoqXG4gICAgICogVGhlIHF1ZXVlIGJhY2tpbmcgdGhpcyBidWZmZXIuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7bW9kdWxlOmNoYW5rby9xdWV1ZX5RdWV1ZX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHF1ZXVlOiB7XG4gICAgICB2YWx1ZTogcSgpXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBudW1iZXIgb2YgaXRlbXMgdGhhdCB0aGlzIHF1ZXVlIGNhbiBob2xkIGJlZm9yZSBpdCdzIGNvbnNpZGVyZWQgZnVsbC5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBzaXplOiB7XG4gICAgICB2YWx1ZTogc2l6ZVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBIG1hcmtlciBwcm9wZXJ0eSB1c2VkIHRvIHNob3cgdGhhdCB0aGlzIGlzIGEgc2xpZGluZyBidWZmZXIuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7U3ltYm9sfVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgW0JVRkZFUl06IHtcbiAgICAgIHZhbHVlOiBTTElESU5HXG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBxdWV1ZSB0aGF0IGJhY2tzIGEgYnVmZmVyLlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOmNoYW5rby9idWZmZXJ+QnVmZmVyfSBidWZmZXIgVGhlIGJ1ZmZlciB3aG9zZSBxdWV1ZSBpc1xuICogICAgIHJldHVybmVkIGJ5IHRoaXMgZnVuY3Rpb24uXG4gKiBAcmV0dXJuIHttb2R1bGU6Y2hhbmtvL3F1ZXVlflF1ZXVlfSBUaGUgcXVldWUgdGhhdCBiYWNrcyB0aGUgc3VwcGxpZWQgYnVmZmVyLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gcXVldWUoYnVmZmVyKSB7XG4gIHJldHVybiBidWZmZXIucXVldWU7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgbnVtYmVyIG9mIGl0ZW1zIGEgYnVmZmVyIGNhbiBob2xkIGJlZm9yZSBpdCdzIGZ1bGwuXG4gKlxuICogQHBhcmFtIHttb2R1bGU6Y2hhbmtvL2J1ZmZlcn5CdWZmZXJ9IGJ1ZmZlciBUaGUgYnVmZmVyIHdob3NlIHNpemUgaXMgcmV0dXJuZWRcbiAqICAgICBieSB0aGlzIGZ1bmN0aW9uLlxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgc2l6ZSBvZiB0aGUgc3VwcGxpZWQgYnVmZmVyLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gc2l6ZShidWZmZXIpIHtcbiAgcmV0dXJuIGJ1ZmZlci5zaXplO1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIG51bWJlciBvZiBpdGVtcyBhIGJ1ZmZlciBpcyBjdXJyZW50bHkgaG9sZGluZy5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTpjaGFua28vYnVmZmVyfkJ1ZmZlcn0gYnVmZmVyIFRoZSBidWZmZXIgd2hvc2UgY3VycmVudCBjb3VudCBpc1xuICogICAgIHJldHVybmVkIGJ5IHRoaXMgZnVuY3Rpb24uXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBudW1iZXIgb2YgaXRlbXMgdGhhdCB0aGUgc3VwcGxpZWQgYnVmZmVyIGlzIGhvbGRpbmcuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjb3VudChidWZmZXIpIHtcbiAgcmV0dXJuIHFDb3VudChidWZmZXIucXVldWUpO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhIGJ1ZmZlciBpcyBhdCBjYXBhY2l0eS5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTpjaGFua28vYnVmZmVyfkJ1ZmZlcn0gYnVmZmVyIFRoZSBidWZmZXIgd2hvJ3MgYmVpbmcgY2hlY2tlZCB0b1xuICogICAgIHNlZSBpZiBpdCdzIGF0IGNhcGFjaXR5LlxuICogQHJldHVybiB7bnVtYmVyfSBFaXRoZXIgYHRydWVgIGlmIHRoZSBzdXBwbGllZCBidWZmZXIgaXMgZnVsbCBvciBgZmFsc2VgIGlmXG4gKiAgICAgaXQgaXNuJ3QuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBpc0Z1bGwoYnVmZmVyKSB7XG4gIHJldHVybiBidWZmZXJbQlVGRkVSXSA9PT0gRklYRUQgPyBxQ291bnQoYnVmZmVyLnF1ZXVlKSA+PSBidWZmZXIuc2l6ZSA6IGZhbHNlO1xufVxuXG4vKipcbiAqIEFkZHMgb25lIG9yIG1vcmUgaXRlbXMgdG8gYSBidWZmZXIuXG4gKlxuICogQHBhcmFtIHttb2R1bGU6Y2hhbmtvL2J1ZmZlcn5CdWZmZXJ9IGJ1ZmZlciBUaGUgYnVmZmVyIHdoZXJlIHRoZSBzdXBwbGllZFxuICogICAgIGl0ZW1zIHdpbGwgYmUgYWRkZWQuXG4gKiBAcGFyYW0gey4uLip9IGl0ZW1zIFRoZSB2YWx1ZXMgYmVpbmcgYWRkZWQgdG8gdGhlIHN1cHBsaWVkIGJ1ZmZlci5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGFkZChidWZmZXIsIC4uLml0ZW1zKSB7XG4gIHN3aXRjaCAoYnVmZmVyW0JVRkZFUl0pIHtcbiAgICBjYXNlIEZJWEVEOlxuICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGl0ZW1zKSB7XG4gICAgICAgIGVucXVldWUoYnVmZmVyLnF1ZXVlLCBpdGVtKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBEUk9QUElORzpcbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBpdGVtcykge1xuICAgICAgICBpZiAoY291bnQoYnVmZmVyKSA8IHNpemUoYnVmZmVyKSkge1xuICAgICAgICAgIGVucXVldWUoYnVmZmVyLnF1ZXVlLCBpdGVtKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIFNMSURJTkc6XG4gICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgaXRlbXMpIHtcbiAgICAgICAgaWYgKGNvdW50KGJ1ZmZlcikgPj0gc2l6ZShidWZmZXIpKSB7XG4gICAgICAgICAgZGVxdWV1ZShidWZmZXIucXVldWUpO1xuICAgICAgICB9XG4gICAgICAgIGVucXVldWUoYnVmZmVyLnF1ZXVlLCBpdGVtKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybjtcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZXMgdGhlIG5leHQgaXRlbSBmcm9tIGEgcXVldWUgYW5kIHJldHVybnMgaXQuXG4gKlxuICogQHBhcmFtIHttb2R1bGU6Y2hhbmtvL2J1ZmZlcn5CdWZmZXJ9IGJ1ZmZlciBUaGUgYnVmZmVyIGZyb20gd2hpY2ggYW4gaXRlbSBpc1xuICogICAgIGJlaW5nIHJlbW92ZWQuXG4gKiBAcmV0dXJuIHsqfSBUaGUgaXRlbSB0aGF0IHdhcyByZW1vdmVkIGZyb20gdGhlIHN1cHBsaWVkIGJ1ZmZlci5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHJlbW92ZShidWZmZXIpIHtcbiAgcmV0dXJuIGRlcXVldWUoYnVmZmVyLnF1ZXVlKTtcbn1cblxuZXhwb3J0IHtcbiAgaXNCdWZmZXIsXG4gIGZpeGVkLFxuICBkcm9wcGluZyxcbiAgc2xpZGluZyxcbiAgcXVldWUsXG4gIHNpemUsXG4gIGNvdW50LFxuICBpc0Z1bGwsXG4gIGFkZCxcbiAgcmVtb3ZlXG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG5cbmltcG9ydCB7IHByb3RvY29scyBhcyBwIH0gZnJvbSBcIm1vZHVsZXMvcHJvdG9jb2xcIjtcbmltcG9ydCB7XG4gIHF1ZXVlLFxuICBkZXF1ZXVlLFxuICBFTVBUWSxcbiAgZmlsdGVyLFxuICBjb3VudCBhcyBxQ291bnQsXG4gIGVucXVldWVcbn0gZnJvbSBcIm1vZHVsZXMvcXVldWVcIjtcbmltcG9ydCB7IGlzRnVsbCwgY291bnQsIHJlbW92ZSB9IGZyb20gXCJtb2R1bGVzL2J1ZmZlclwiO1xuaW1wb3J0IHsgZGlzcGF0Y2ggfSBmcm9tIFwibW9kdWxlcy9kaXNwYXRjaGVyXCI7XG5cbi8qKlxuICogVGhlIG1heGltdW0gbnVtYmVyIG9mIGRpcnR5IG9wZXJhdGlvbnMgdGhhdCBjYW4gYmUgcXVldWVkIG9uIGEgY2hhbm5lbCBiZWZvcmVcbiAqIGEgY2xlYW51cCBpcyB0cmlnZ2VyZWQuXG4gKlxuICogQHR5cGUge251bWJlcn1cbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IE1BWF9ESVJUWSA9IDY0O1xuXG4vKipcbiAqIFRoZSBtYXhpbXVtIG51bWJlciBvZiBvcGVydGlvbnMgdGhhdCBjYW4gYmUgcXVldWVkIG9uIGEgY2hhbm5lbCBiZWZvcmUgbmV3XG4gKiBvcGVyYXRpb25zIGFyZSByZWplY3RlZC5cbiAqXG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgTUFYX1FVRVVFRCA9IDEwMjQ7XG5cbi8qKlxuICogKmhlIHZhbHVlIHJldHVybmVkIGZyb20gYSByZWNlaXZlIG9uIGEgY2hhbm5lbCB3aGVuIHRoYXQgY2hhbm5lbCBpcyBjbG9zZWRcbiAqIGFuZCBoYXMgbm8gbW9yZSB2YWx1ZXMgYXZhaWxhYmxlLlxuICpcbiAqIFRoaXMgaXMgYSBzcGVjaWFsIHZhbHVlIHRoYXQgaXMgcmV0dXJuZWQgdW5kZXIgYSBjZXJ0YWluIGNpcmN1bXN0YW5jZSwgbmFtZWx5XG4gKiB3aGVuIGEgcmVjZWl2ZSBpcyBwZXJmb3JtZWQgb24gYSBjbG9zZWQgY2hhbm5lbC4gQmVjYXVzZSBvZiB0aGF0LCBpdCBjYW5ub3RcbiAqIGJlIHJldHVybmVkIGZyb20gYSByZWNlaXZlIG9uIGFuIG9wZW4gY2hhbm5lbC4gRm9yIHRoYXQgcmVhc29uLCBgQ0xPU0VEYCBpc1xuICogdGhlIG9ubHkgdmFsdWUgdGhhdCBjYW5ub3QgYmUgc2VudCBvbnRvIGEgY2hhbm5lbCAmbWRhc2g7IGl0IHdvdWxkIGJlXG4gKiBpbXBvc3NpYmxlIHRvIGRpc3Rpbmd1aXNoIGJldHdlZW4gYSBsZWdpdGltYXRlIHZhbHVlIG9mIGBDTE9TRURgIGFuZCBhblxuICogYWN0dWFsIGNsb3NlZCBjaGFubmVsLlxuICpcbiAqIEB0eXBlIHtTeW1ib2x9XG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNoYW5rb35DaGFua29cbiAqL1xuY29uc3QgQ0xPU0VEID0gU3ltYm9sKFwiQ0xPU0VEXCIpO1xuXG4vKipcbiAqIEEgdW5pcXVlIHZhbHVlIHVzZWQgdG8gaW5kaWNhdGUgdGhhdCBhbiBvYmplY3QgaXMgYSBib3guXG4gKlxuICogQHR5cGUge1N5bWJvbH1cbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IEJPWCA9IFN5bWJvbChcIkJPWFwiKTtcblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgYW4gb2JqZWN0IGlzIGEgYm94LlxuICpcbiAqIEBwYXJhbSB7Kn0gb2JqIEEgdmFsdWUgdG8gY2hlY2sgZm9yIGJveGluZXNzLlxuICogQHJldHVybiBFaXRoZXIgYHRydWVgIGlmIHRoZSB2YWx1ZSBpcyBhIGJveCBvciBgZmFsc2VgIGlmIGl0IGlzbid0LlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaXNCb3gob2JqKSB7XG4gIHJldHVybiAhIW9iaj8uW0JPWF07XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGFuIG9iamVjdCBpcyByZWR1Y2VkLiBUaGlzIGlzIGRvbmUgdXNpbmcgdGhlIHRyYW5zZHVjZXJcbiAqIHByb3RvY29sOyBhbiBvYmplY3Qgd2l0aCB0aGUgcHJvdG9jb2wtc3BlY2lmaWVkIGByZWR1Y2VkYCBwcm9wZXJ0eSBpcyBhc3N1bWVkXG4gKiB0byBiZSByZWR1Y2VkLiBJZiBhIHJlc3VsdCBvZiBhIHRyYW5zZm9ybWF0aW9uIGlzIHJlZHVjZWQsIGl0IG1lYW5zIHRoYXQgdGhlXG4gKiB0cmFuc2Zvcm1hdGlvbiBpcyBjb21wbGV0ZSBhbmQgdGhlIGNoYW5uZWwgc2hvdWxkIGJlIGNsb3NlZC5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSBiZWluZyBjaGVja2VkIGZvciByZWR1Y3Rpb24uXG4gKiBAcmV0dXJuIHtib29sZWFufSBFaXRoZXIgYHRydWVgIGlmIHRoZSB2YWx1ZSBoYXMgYmVlbiByZWR1Y2VkLCBvciBgZmFsc2VgIGlmIGl0IGhhc1xuICogICAgIG5vdCBiZWVuLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaXNSZWR1Y2VkKHZhbHVlKSB7XG4gIHJldHVybiAhIXZhbHVlPy5bcC5yZWR1Y2VkXTtcbn1cblxuLyoqXG4gKiBBIHdyYXBwZXIgYXJvdW5kIGEgdmFsdWUuIFRoaXMgaXMgcHJpbWFyaWx5IHVzZWQgYXMgYSBtYXJrZXI7IGEgcHV0IG9yIHRha2VcbiAqIHJldHVybmluZyBhIEJveCBpbmRpY2F0ZXMgdGhhdCB0aGUgcHV0IG9yIHRha2UgaGFzIHJldHVybmVkIGFuIGltbWVkaWF0ZVxuICogdmFsdWUsIHdoaWxlIHJldHVybmluZyBgbnVsbGAgaW5kaWNhdGVzIHRoYXQgdGhlIG9wZXJhdGlvbiBoYXMgYmVlbiBxdWV1ZWQuXG4gKlxuICogQHR5cGVkZWYgQm94XG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNoYW5rby9jaGFubmVsXG4gKiBAcHJvcGVydHkgeyp9IHZhbHVlIFRoZSB2YWx1ZSBiZWluZyB3cmFwcGVkIGJ5IHRoZSBib3guXG4gKiBAcHJpdmF0ZVxuICovXG5cbi8qKlxuICogQSB3cmFwcGVyIG9iamVjdCBmb3IgYSB2YWx1ZS4gVGhpcyBpcyB1c2VkIGFsbW9zdCBlbnRpcmVseSBhcyBhIG1hcmtlclxuICogaW50ZXJmYWNlLCB0aG91Z2ggdGhlIGZhY3QgdGhhdCBpdCBiZWNvbWVzIGEgcGFyYW1ldGVyIHRoYXQncyBwYXNzZWQgYnlcbiAqIHJlZmVyZW5jZSByYXRoZXIgdGhhbiB2YWx1ZSBpcyBhbHNvIGltcG9ydGFudCBpbiBhIGNvdXBsZSBwbGFjZXMuIElmIGFcbiAqIGNoYW5uZWwgb3BlcmF0aW9uIChwdXQgb3IgdGFrZSkgcmV0dXJucyBhIEJveCwgaXQgbWVhbnMgdGhhdCBhbiBhY3R1YWwgdmFsdWVcbiAqIHdhcyByZXR1cm5lZC4gQSBub24tQm94ICh3aGljaCBhbHdheXMgaGFwcGVucyB0byBiZSBgbnVsbGApIG1lYW5zIHRoYXQgdGhlXG4gKiBvcGVyYXRpb24gbXVzdCBibG9jay5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNoYW5rby9jaGFubmVsXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBib3guXG4gKiBAcmV0dXJuIHttb2R1bGU6Y2hhbmtvL2NoYW5uZWx+Qm94fSBUaGUgYm94ZWQgdmFsdWUuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBib3godmFsdWUpIHtcbiAgcmV0dXJuIE9iamVjdC5jcmVhdGUobnVsbCwge1xuICAgIHZhbHVlOiB7XG4gICAgICB2YWx1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSxcbiAgICBbQk9YXToge1xuICAgICAgdmFsdWU6IHRydWVcbiAgICB9XG4gIH0pO1xufVxuXG4vKipcbiAqIEEgd3JhcHBlciBhcm91bmQgYSB2YWx1ZS4gVGhpcyBpcyBtdWNoIGxpa2VcbiAqIHtAbGluayBtb2R1bGU6Y2hhbmtvL2NoYW5uZWx+Qm94fEJveH0gZXhjZXB0IHRoYXQgaXQgYWxzbyBjYXJyaWVzIGEgaGFuZGxlclxuICogdG8gYmUgdXNlZCB3aGVuIGEgc2VudCB2YWx1ZSBpcyByZWNlaXZlZC4gSXQgaXMgc3BlY2lmaWNhbGx5IGZvciBxdWV1ZWluZ1xuICogc2VuZHMuXG4gKlxuICogQHR5cGVkZWYgU2VuZEJveFxuICogQG1lbWJlcm9mIG1vZHVsZTpjaGFua28vY2hhbm5lbFxuICogQHByb3BlcnR5IHsqfSB2YWx1ZSBUaGUgdmFsdWUgYmVpbmcgd3JhcHBlZCBieSB0aGlzIGJveC5cbiAqIEBwcm9wZXJ0eSB7bW9kdWxlOmNoYW5rby9jaGFubmVsfkhhbmRsZXJ9IGhhbmRsZXIgVGhlIGhhbmRsZXIgdXNlZCB0byBwcm9jZXNzXG4gKiAgICAgYSBzZW5kIHJlcXVlc3QgZm9yIHRoZSB2YWx1ZS5cbiAqIEBwcml2YXRlXG4gKi9cblxuLyoqXG4gKiBBIGJveCB1c2VkIHRvIHdyYXAgYSB2YWx1ZSBiZWluZyBzZW50IG9udG8gYSBjaGFubmVsLiBUaGlzIGlzIGRpZmZlcmVudCBmcm9tXG4gKiBhIHJlZ3VsYXIgYm94IGluIHRoYXQgdGhlIHNlbmQgaGFuZGxlciBpcyBhbHNvIGluY2x1ZGVkLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y2hhbmtvL2NoYW5uZWxcbiAqIEBwYXJhbSAge09iamVjdH0gaGFuZGxlciBUaGUgaGFuZGxlciB1c2VkIHRvIHByb2Nlc3MgYSBzZW5kIHJlcXVlc3QgZm9yIHRoZVxuICogICAgIHZhbHVlLlxuICogQHBhcmFtICB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGJveC5cbiAqIEByZXR1cm4ge21vZHVsZTpjaGFua28vY2hhbm5lbH5TZW5kQm94fSBUaGUgYm94ZWQgdmFsdWUuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBzZW5kQm94KHZhbHVlLCBoYW5kbGVyKSB7XG4gIHJldHVybiBPYmplY3QuY3JlYXRlKG51bGwsIHtcbiAgICB2YWx1ZToge1xuICAgICAgdmFsdWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0sXG4gICAgaGFuZGxlcjoge1xuICAgICAgdmFsdWU6IGhhbmRsZXJcbiAgICB9LFxuICAgIFtCT1hdOiB7XG4gICAgICB2YWx1ZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxuICogQSBjaGFubmVsLCB1c2VkIGJ5IHByb2Nlc3NlcyB0byBjb21tdW5pY2F0ZSB3aXRoIG9uZSBhbm90aGVyLlxuICpcbiAqIEZvciBlYWNoIG9wZXJhdGlvbiwgdGhlIGNoYW5uZWwgZmlyc3QgdGVzdHMgdG8gc2VlIGlmIHRoZXJlJ3MgYSBjb3JyZXNwb25kaW5nXG4gKiBvcGVyYXRpb24gYWxyZWFkeSBxdWV1ZWQgKGkuZS4sIGlmIHdlJ3JlIGRvaW5nIGEgYHNlbmRgIHRoYXQgdGhlcmUncyBhIHF1ZXVlZFxuICogYHJlY3ZgIGFuZCB2aWNlIHZlcnNhKS4gSWYgdGhlcmUgaXMsIHRoYXQgY29ycmVzcG9uZGluZyBvcGVyYXRpb24gaXNcbiAqIHVuYmxvY2tlZCBhbmQgYm90aCBvcGVyYXRpb25zIGNvbXBsZXRlLiBJZiBub3QsIHRoZSBvcGVyYXRpb24gaXMgcXVldWVkIHRvXG4gKiB3YWl0IGZvciBhIGNvcnJlc3BvbmRpbmcgb3BlcmF0aW9uLiBUaGUgcHJvY2VzcyBvciB0aGF0IGNyZWF0ZWQgdGhlIG9wZXJhdGlvblxuICogdGhlbiBibG9ja3MuXG4gKlxuICogVGhlIGNoYW5uZWwgY2FuIGJlIGJhY2tlZCBieSBhIGJ1ZmZlciwgdGhvdWdoIGl0IGlzIG5vdCBieSBkZWZhdWx0LiBJZiBhXG4gKiBidWZmZXIgaXMgaW4gcGxhY2UsIGFuZCB0aGF0IGJ1ZmZlciBpcyBub3QgZnVsbCwgdGhlbiB0aGUgcHJvY2VzcyB0aGF0XG4gKiBjcmVhdGVkIGFuIG9wZXJhdGlvbiB0aGF0IGhhcyB0byBiZSBxdWV1ZWQgaXMgKm5vdCogYmxvY2tlZC5cbiAqXG4gKiBUaGlzIGNoYW5uZWwgb2JqZWN0IHN1cHBvcnRzIHRyYW5zZm9ybWF0aW9ucywgYXNzdW1pbmcgdGhhdCB0aGV5IGZvbGxvdyB0aGVcbiAqIHByb3RvY29sIGNyZWF0ZWQgYnkgYSBmZXcgdHJhbnNkdWNlciBsaWJyYXJ5IGF1dGhvcnMgdG8gYWxsb3cgdGhlbSB0b1xuICogaW50ZXJvcGVyYXRlLiBUaGUgc3VwcG9ydCBtdXN0IGJlIGV4cGxpY2l0bHkgY3JlYXRlZCBiZWNhdXNlIHRoZSBub3JtYWxcbiAqIG1ldGhvZCBvZiBtYWtpbmcgYW4gb2JqZWN0IHN1cHBvcnQgdHJhbnNmb3JtYXRpb25zIHdvbid0IHdvcmsgaGVyZS4gVGhpc1xuICogbWV0aG9kIGlzIHRvIGNyZWF0ZSBhIG5ldyBvYmplY3QgYW5kIGFkZCB0aGUgdHJhbnNmb3JtZWQgdmFsdWVzIHRvIGl0IC0gYnV0XG4gKiBmb3IgYSBjaGFubmVsLCB3ZSBuZWVkIHRvIHJlcGxhY2UgdGhlIHZhbHVlcyBvbiB0aGUgY2hhbm5lbCB3aXRoIHRoZWlyXG4gKiB0cmFuc2Zvcm1lZCB2YWx1ZXMsIGluIHRoZSBzYW1lIG9yZGVyIGV2ZW4gaW4gYSBtdWx0aS1wcm9jZXNzIGVudmlyb25tZW50LlxuICogVGh1cyB0cmFuc2Zvcm1hdGlvbnMgaGFwcGVuIGluIHBsYWNlLlxuICpcbiAqIFRyYW5zZm9ybWF0aW9ucyBhcmUgYXBwbGllZCBiZWZvcmUgdGhlIHZhbHVlIGlzIHF1ZXVlZCwgc28gZXZlbiBpZiB0aGVyZSBpcyBhXG4gKiBjb3JyZXNwb25kaW5nIG9wZXJhdGlvbiByZWFkeSB0byBnbywgdGhlIHRyYW5zZm9ybWF0aW9uIHN0aWxsIGhhcHBlbnMuIEFsc28sXG4gKiB0cmFuc2Zvcm1hdGlvbnMgcmVxdWlyZSB0aGF0IHRoZSBjaGFubmVsIGJlIGJ1ZmZlcmVkICh0aGlzIGJ1ZmZlciBpcyB3aGF0IGlzXG4gKiBzZW50IHRvIHRoZSB0cmFuc2Zvcm1lcidzIHJlZHVjdGlvbiBzdGVwIGZ1bmN0aW9uKTsgdHJ5aW5nIHRvIGNyZWF0ZSBhXG4gKiBjaGFubmVsIHdpdGggYSB0cmFuc2Zvcm1lciBidXQgd2l0aG91dCBhIGJ1ZmZlciB3aWxsIHJlc3VsdCBpbiBhbiBlcnJvciBiZWluZ1xuICogdGhyb3duLlxuICpcbiAqIFRoaXMgaXMgdGhlIG9iamVjdCB0aGF0IGlzIHJldHVybmVkIGZyb20gYSBjYWxsIHRvXG4gKiBge0BsaW5rIG1vZHVsZTpjaGFua29+Q2hhbmtvLmNoYW58Y2hhbn1gLiBIb3dldmVyLCB0aGlzIG9iamVjdCBpcyBpbnRlbmRlZCB0b1xuICogYmUgdXNlZCBhcyBhIHZhbHVlIHRvIHBhc3MgdG8gY2hhbm5lbCBvcGVyYXRpb24gZnVuY3Rpb25zOyBpdCBkb2Vzbid0IGhhdmVcbiAqIGFueSBwcm9wZXJ0aWVzIG9mIGludGVyZXN0IHRvIGFuIGVuZCB1c2VyLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y2hhbmtvL2NoYW5uZWxcbiAqIEB0eXBlZGVmIENoYW5uZWxcbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjaGFubmVsLiBUaGlzIGlzIGEgbG93LWxldmVsIGZ1bmN0aW9uO1xuICogYHtAbGluayBtb2R1bGU6Y2hhbmtvfkNoYW5rby5jaGFufGNoYW59YCBwZXJmb3JtcyBzb21lIG5lY2Vzc2FyeVxuICogbWFuaXB1bGF0aW9ucyBvbiBhcmd1bWVudHMgYmVmb3JlIHVzaW5nIHRoaXMgZnVuY3Rpb24gdG8gcGVyZm9ybSB0aGUgYWN0dWFsXG4gKiBjcmVhdGlvbi5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNoYW5rby9jaGFubmVsXG4gKiBAcGFyYW0ge251bGwgfCBtb2R1bGU6Y2hhbmtvL2J1ZmZlcn5CdWZmZXJ9IGJ1ZmZlciBBbiBvcHRpb25hbCBidWZmZXIgdGhhdCxcbiAqICAgICBpZiBwcmVzZW50LCBpcyB1c2VkIHRvIGNyZWF0ZSBhIGJ1ZmZlcmVkIGNoYW5uZWwuIElmIHRoaXMgaXMgYG51bGxgLCBhblxuICogICAgIHVuYnVmZmVyZWQgY2hhbm5lbCBpcyBjcmVhdGVkLlxuICogQHBhcmFtIHttb2R1bGU6Y2hhbmtvfnRyYW5zZHVjZXJ9IHhmb3JtIFRoZSB0cmFuc2R1Y2VyIHVzZWQgdG8gdHJhbnNmb3JtXG4gKiAgICAgdmFsdWVzIHNlbnQgdG8gdGhlIGNoYW5uZWwuIElmIG5vIHRyYW5zZm9ybWF0aW9ucyBhcmUgbmVjZXNzYXJ5LCBhXG4gKiAgICAgcGFzc3Rocm91Z2ggdHJhbnNkdWNlciBzaG91bGQgYmUgcHJvdmlkZWQuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGlzVGltZWQgSW5kaWNhdGVzIHdoZXRoZXIgdGhlIGNoYW5uZWwgaXMgYSB0aW1lZCBjaGFubmVsLlxuICogICAgIFRoZSB0aW1pbmluZyBtZWNoYW5pc20gaXMgaGFuZGxlZCBvdXRzaWRlIHRoZSBjaGFubmVsLCBidXQgdGhpcyBwcm9wZXJ0eVxuICogICAgIGlzIHByb3ZpZGVkIHRvIGJlIGFibGUgdG8gcXVlcnkgd2hldGhlciB0aGF0J3MgdGhlIGNhc2UuXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4RGlydHk9NjQgVGhlIG1heGltdW0gbnVtYmVyIG9mIGRpcnR5IG9wZXJhdGlvbnMgdG8gYWxsb3dcbiAqICAgICBiZWZvcmUgdGhleSdyZSBwdXJnZWQuXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4UXVldWVkPTEwMjQgVGhlIG1heGltdW0gbnVtYmVyIG9mIG9wZXJhdGlvbnMgdGhhdCBjYW4gYmVcbiAqICAgICBxdWV1ZWQgYmVmb3JlIG5ldyBvbmVzIGFyZSByZWplY3RlZC5cbiAqIEByZXR1cm4ge21vZHVsZTpjaGFua28vY2hhbm5lbC5DaGFubmVsfSBBIG5ldyBjaGFubmVsLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY2hhbm5lbChcbiAgYnVmZmVyLFxuICB4Zm9ybSxcbiAgaXNUaW1lZCA9IGZhbHNlLFxuICBtYXhEaXJ0eSA9IE1BWF9ESVJUWSxcbiAgbWF4UXVldWVkID0gTUFYX1FVRVVFRFxuKSB7XG4gIHJldHVybiBPYmplY3QuY3JlYXRlKG51bGwsIHtcbiAgICBidWZmZXI6IHtcbiAgICAgIHZhbHVlOiBidWZmZXJcbiAgICB9LFxuICAgIHhmb3JtOiB7XG4gICAgICB2YWx1ZTogeGZvcm1cbiAgICB9LFxuICAgIG1heERpcnR5OiB7XG4gICAgICB2YWx1ZTogbWF4RGlydHlcbiAgICB9LFxuICAgIG1heFF1ZXVlZDoge1xuICAgICAgdmFsdWU6IG1heFF1ZXVlZFxuICAgIH0sXG4gICAgcmVjdnM6IHtcbiAgICAgIHZhbHVlOiBxdWV1ZSgpXG4gICAgfSxcbiAgICBzZW5kczoge1xuICAgICAgdmFsdWU6IHF1ZXVlKClcbiAgICB9LFxuICAgIGRpcnR5UmVjdnM6IHtcbiAgICAgIHZhbHVlOiAwLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9LFxuICAgIGRpcnR5U2VuZHM6IHtcbiAgICAgIHZhbHVlOiAwLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9LFxuICAgIGNsb3NlZDoge1xuICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9LFxuICAgIGlzQnVmZmVyZWQ6IHtcbiAgICAgIHZhbHVlOiAhIWJ1ZmZlclxuICAgIH0sXG4gICAgaXNUaW1lZDoge1xuICAgICAgdmFsdWU6IGlzVGltZWRcbiAgICB9XG4gIH0pO1xufVxuXG4vKipcbiAqIFNlbmRzIGEgdmFsdWUgdG8gYSBjaGFubmVsLiBUaGUgc3BlY2lmaWVkIGhhbmRsZXIgaXMgdXNlZCB0byBjb250cm9sIHdoZXRoZXJcbiAqIHRoZSBzZW5kIGlzIGFjdGl2ZSBhbmQgd2hhdCB0byBkbyBhZnRlciB0aGUgc2VuZCBjb21wbGV0ZXMuIEEgc2VuZCBjYW4gYmVjb21lXG4gKiBpbmFjdGl2ZSBpZiBpdCB3YXMgcGFydCBvZiBhbiBgc2VsZWN0YCBjYWxsIGFuZCBzb21lIG90aGVyIG9wZXJhdGlvblxuICogc3BlY2lmaWVkIGluIHRoYXQgY2FsbCBoYXMgYWxyZWFkeSBjb21wbGV0ZWQuXG4gKlxuICogVGhpcyB2YWx1ZSBpcyBnaXZlbiB0byBhIHJlY2VpdmUgaGFuZGxlciBpbW1lZGlhdGVseSBpZiB0aGVyZSdzIG9uZSB3YWl0aW5nLlxuICogT3RoZXJ3aXNlIHRoZSB2YWx1ZSBhbmQgaGFuZGxlciBhcmUgcXVldWVkIHRvZ2V0aGVyIHRvIHdhaXQgZm9yIGEgcmVjZWl2ZS5cbiAqXG4gKiBUaGlzIGlzIGEgbG93LWxldmVsIG9wZXJhdGlvbiB0aGF0J3MgcHJvdmlkZWQgYXMgYSBwYXJ0IG9mIHRoZSBjaGFubmVsXG4gKiBpbXBsZW1lbnRhdGlvbiBzbyB0aGF0IG90aGVyIG9wZXJhdGlvbnMgZnVuY3Rpb25zIGNhbiBwcm9wZXJseSBhcHBseVxuICogaGFuZGxlcnMuIEl0IGlzIG5vdCBtZWFudCBmb3IgZ2VuZXJhbCB1c2UuIFVzZSB0aG9zZSBvdGhlciBvcGVyYXRpb25zXG4gKiBmdW5jdGlvbnMgaW5zdGVhZC5cbiAqXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjaGFua28vY2hhbm5lbFxuICogQHBhcmFtIHttb2R1bGU6Y2hhbmtvL2NoYW5uZWwuQ2hhbm5lbH0gY2hhbm5lbCBUaGUgY2hhbm5lbCB0aGF0IHRoZSB2YWx1ZSBpc1xuICogICAgIGJlaW5nIHNlbnQgdG8uXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBiZSBwdXQgb250byB0aGUgY2hhbm5lbC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaGFuZGxlci5hY3RpdmUgRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBzZW5kIGlzIHN0aWxsIGFjdGl2ZVxuICogICAgIGFuZCBzaG91bGQgc3RpbGwgYmUgc2VydmljZWQuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBoYW5kbGVyLmNvbW1pdCBEZWFjdGl2YXRlcyB0aGUgc2VuZCAoc28gaXQgY2FuJ3QgYmVcbiAqICAgICBzZXJ2aWNlZCBhIHNlY29uZCB0aW1lKSBhbmQgcmV0dXJucyB0aGUgY2FsbGJhY2sgdG8gYmUgZmlyZWQgd2hlbiB0aGVcbiAqICAgICBzZW5kIGNvbXBsZXRlcy5cbiAqIEByZXR1cm4ge21vZHVsZTpjaGFua28vY2hhbm5lbH5Cb3h8bnVsbH0gT25lIG9mIHRocmVlIHZhbHVlcy4gQSBib3hlZCBgdHJ1ZWBcbiAqICAgICBpcyByZXR1cm5lZCBpZiB0aGUgc2VuZCB3YXMgaW1tZWRpYXRlbHkgY29uc3VtZWQgYnkgYSBwZW5kaW5nIHJlY2VpdmUuIEFcbiAqICAgICBib3hlZCBgZmFsc2VgIGlzIHJldHVybmVkIGlmIHRoZSBzZW5kIHdhcyBwZXJmb3JtZWQgb24gYSBjaGFubmVsIHRoYXQgd2FzXG4gKiAgICAgYWxyZWFkeSBjbG9zZWQgYnkgdGhlIHRpbWUgdGhlIHNlbmQgdG9vayBwbGFjZS4gYG51bGxgIGlzIHJldHVybmVkIGlmIHRoZVxuICogICAgIHNlbmQgd2FzIHF1ZXVlZCBwZW5kaW5nIGEgY29ycmVzcG9uZGluZyByZWNlaXZlLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaGFuZGxlU2VuZChjaGFubmVsLCB2YWx1ZSwgaGFuZGxlcikge1xuICBpZiAodmFsdWUgPT09IENMT1NFRCkge1xuICAgIHRocm93IEVycm9yKFwiQ2Fubm90IHNlbmQgQ0xPU0VEIHRvIGEgY2hhbm5lbFwiKTtcbiAgfVxuXG4gIGlmIChjaGFubmVsLmNsb3NlZCkge1xuICAgIGhhbmRsZXIuY29tbWl0KCk7XG4gICAgcmV0dXJuIGJveChmYWxzZSk7XG4gIH1cblxuICBsZXQgcmVjZWl2ZXIsIGNhbGxiYWNrO1xuXG4gIC8vIFB1c2ggdGhlIGluY29taW5nIHZhbHVlIHRocm91Z2ggdGhlIGJ1ZmZlciwgZXZlbiBpZiB0aGVyZSdzIGFscmVhZHkgYVxuICAvLyByZWNlaXZlciB3YWl0aW5nIGZvciB0aGUgdmFsdWUuIFRoaXMgaXMgdG8gbWFrZSBzdXJlIHRoYXQgdGhlIHRyYW5zZHVjZXJcbiAgLy8gc3RlcCBmdW5jdGlvbiBoYXMgYSBjaGFuY2UgdG8gYWN0IG9uIHRoZSB2YWx1ZSBmaXJzdCwgd2hpY2ggY291bGQgY2hhbmdlXG4gIC8vIHRoZSB2YWx1ZSBvciBtYWtlIGl0IGFsdG9nZXRoZXIgdW5hdmFpbGFibGUuXG4gIC8vXG4gIC8vIElmIHRoZSBjaGFubmVsIGlzIHVuYnVmZmVyZWQgdGhpcyBwcm9jZXNzIGlzIHNraXBwZWQgKHRoZXJlIGNhbid0IGJlIGFcbiAgLy8gdHJhbnNkdWNlciBvbiBhbiB1bmJ1ZmZlcmVkIGNoYW5uZWwgYW55d2F5KS4gSWYgdGhlIGJ1ZmZlciBpcyBmdWxsLCB0aGVcbiAgLy8gdHJhbnNkdWNlcidzIHdvcmsgaXMgZGVmZXJyZWQgdW50aWwgbGF0ZXIgd2hlbiB0aGUgYnVmZmVyIGlzIG5vdCBmdWxsLlxuICBpZiAoY2hhbm5lbC5idWZmZXIgJiYgIWlzRnVsbChjaGFubmVsLmJ1ZmZlcikpIHtcbiAgICBoYW5kbGVyLmNvbW1pdCgpO1xuICAgIGNvbnN0IGRvbmUgPSBpc1JlZHVjZWQoY2hhbm5lbC54Zm9ybVtwLnN0ZXBdKGNoYW5uZWwuYnVmZmVyLCB2YWx1ZSkpO1xuXG4gICAgZm9yICg7Oykge1xuICAgICAgaWYgKGNvdW50KGNoYW5uZWwuYnVmZmVyKSA9PT0gMCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHJlY2VpdmVyID0gZGVxdWV1ZShjaGFubmVsLnJlY3ZzKTtcbiAgICAgIGlmIChyZWNlaXZlciA9PT0gRU1QVFkpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBpZiAocmVjZWl2ZXIuYWN0aXZlKSB7XG4gICAgICAgIGNhbGxiYWNrID0gcmVjZWl2ZXIuY29tbWl0KCk7XG4gICAgICAgIGNvbnN0IHZhbCA9IHJlbW92ZShjaGFubmVsLmJ1ZmZlcik7XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgIGRpc3BhdGNoKCgpID0+IGNhbGxiYWNrKHZhbCkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGRvbmUpIHtcbiAgICAgIGNsb3NlKGNoYW5uZWwpO1xuICAgIH1cbiAgICByZXR1cm4gYm94KHRydWUpO1xuICB9XG5cbiAgLy8gVGhpcyBsb29wIGhhcHBlbnMgaWYgdGhlIGNoYW5uZWwgaXMgdW5idWZmZXJlZCBhbmQgdGhlcmUgaXMgYXQgbGVhc3Qgb25lXG4gIC8vIHBlbmRpbmcgcmVjZWl2ZS4gKEJ1ZmZlcmVkIGNoYW5uZWxzIGJyZWFrIG91dCBvZiB0aGlzIGxvb3AgaW1tZWRpYXRlbHksXG4gIC8vIGJlY2F1c2UgaW4gb3JkZXIgZm9yIGEgYnVmZmVyZWQgY2hhbm5lbCB0byByZWFjaCB0aGlzIHBvaW50LCBpdHMgYnVmZmVyXG4gIC8vIG11c3QgaGF2ZSBiZWVuIGZ1bGwuIElmIHRoZSBidWZmZXIgaXMgZnVsbCwgdGhhdCBtZWFucyB0aGVyZSBhcmUgbm8gcGVuZGluZ1xuICAvLyByZWNlaXZlcyBhbmQgdGhlIGZpcnN0IG9uZSByZWFkIHdpbGwgYmUgRU1QVFkuKSBJdCBwcm9jZXNzZXMgdGhlIG5leHRcbiAgLy8gcGVuZGluZyByZWNlaXZlIGltbWVkaWF0ZWx5LlxuICBmb3IgKDs7KSB7XG4gICAgcmVjZWl2ZXIgPSBkZXF1ZXVlKGNoYW5uZWwucmVjdnMpO1xuICAgIGlmIChyZWNlaXZlciA9PT0gRU1QVFkpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBpZiAocmVjZWl2ZXIuYWN0aXZlKSB7XG4gICAgICBoYW5kbGVyLmNvbW1pdCgpO1xuICAgICAgY2FsbGJhY2sgPSByZWNlaXZlci5jb21taXQoKTtcbiAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICBkaXNwYXRjaCgoKSA9PiBjYWxsYmFjayh2YWx1ZSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGJveCh0cnVlKTtcbiAgICB9XG4gIH1cblxuICAvLyBJZiB0aGVyZSBhcmUgbm8gcGVuZGluZyByZWNlaXZlcyBvbiBhbiB1bmJ1ZmZlcmVkIGNoYW5uZWwsIG9yIG9uIGEgYnVmZmVyZWRcbiAgLy8gY2hhbm5lbCB3aXRoIGEgZnVsbCBidWZmZXIsIHdlIHF1ZXVlIHRoZSBzZW5kIHRvIHRsZXQgaXQgd2FpdCBmb3IgYSByZWNlaXZlXG4gIC8vIHRvIGJlY29tZSBhdmFpbGFibGUuIFNlbmRzIHdob3NlIGhhbmRsZXJzIGhhdmUgZ29uZSBpbmFjdGl2ZSAod2hpY2ggaGFwcGVuc1xuICAvLyBpZiB0aGV5IHdlcmUgcHJvY2Vzc2VkIGFzIHBhcnQgb2YgYSBgc2VsZWN0YCBjYWxsKSBhcmUgcGVyaW9kaWNhbGx5IHB1cmdlZC5cbiAgaWYgKGNoYW5uZWwuZGlydHlTZW5kcyA+IGNoYW5uZWwubWF4RGlydHkpIHtcbiAgICBmaWx0ZXIoY2hhbm5lbC5zZW5kcywgc2VuZGVyID0+IHNlbmRlci5oYW5kbGVyLmFjdGl2ZSk7XG4gICAgY2hhbm5lbC5kaXJ0eVNlbmRzID0gMDtcbiAgfSBlbHNlIHtcbiAgICBjaGFubmVsLmRpcnR5U2VuZHMrKztcbiAgfVxuXG4gIGlmIChxQ291bnQoY2hhbm5lbC5zZW5kcykgPj0gY2hhbm5lbC5tYXhRdWV1ZWQpIHtcbiAgICB0aHJvdyBFcnJvcihcbiAgICAgIGBObyBtb3JlIHRoYW4gJHtjaGFubmVsLm1heFF1ZXVlZH0gcGVuZGluZyBzZW5kcyBhcmUgYWxsb3dlZCBvbiBhIHNpbmdsZSBjaGFubmVsYFxuICAgICk7XG4gIH1cbiAgZW5xdWV1ZShjaGFubmVsLnNlbmRzLCBzZW5kQm94KHZhbHVlLCBoYW5kbGVyKSk7XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8qKlxuICogUmVjZWl2ZXMgYSB2YWx1ZSBmcm9tIGEgY2hhbm5lbC4gVGhlIHNwZWNpZmllZCBoYW5kbGVyIGlzIHVzZWQgdG8gY29udHJvbFxuICogd2hldGhlciB0aGUgcmVjZWl2ZSBpcyBhY3RpdmUgYW5kIHdoYXQgdG8gZG8gYWZ0ZXIgdGhlIHJlY2VpdmUgY29tcGxldGVzLiBBXG4gKiByZWNlaXZlIGNhbiBiZWNvbWUgaW5hY3RpdmUgaWYgaXQgd2FzIHBhcnQgb2YgYW4gYHNlbGVjdGAgY2FsbCBhbmQgc29tZSBvdGhlclxuICogb3BlcmF0aW9uIHNwZWNpZmllZCBpbiB0aGF0IGNhbGwgaGFzIGFscmVhZHkgY29tcGxldGVkLlxuICpcbiAqIFRoaXMgdmFsdWUgaXMgZ2l2ZW4gdG8gYSBzZW5kIGhhbmRsZXIgaW1tZWRpYXRlbHkgaWYgdGhlcmUncyBvbmUgd2FpdGluZy5cbiAqIE90aGVyd2lzZSB0aGUgdmFsdWUgYW5kIGhhbmRsZXIgYXJlIHF1ZXVlZCB0b2dldGhlciB0byB3YWl0IGZvciBhIHNlbmQuXG4gKlxuICogVGhpcyBpcyBhIGxvdy1sZXZlbCBvcGVyYXRpb24gdGhhdCdzIHByb3ZpZGVkIGFzIGEgcGFydCBvZiB0aGUgY2hhbm5lbFxuICogaW1wbGVtZW50YXRpb24gc28gdGhhdCBvdGhlciBvcGVyYXRpb25zIGZ1bmN0aW9ucyBjYW4gcHJvcGVybHkgYXBwbHlcbiAqIGhhbmRsZXJzLiBJdCBpcyBub3QgbWVhbnQgZm9yIGdlbmVyYWwgdXNlLiBVc2UgdGhvc2Ugb3RoZXIgb3BlcmF0aW9uc1xuICogZnVuY3Rpb25zIGluc3RlYWQuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjaGFua28vY2hhbm5lbFxuICogQHBhcmFtIHttb2R1bGU6Y2hhbmtvL2NoYW5uZWwuQ2hhbm5lbH0gY2hhbm5lbCBUaGUgY2hhbm5lbCB0aGF0IHRoZSB2YWx1ZSBpc1xuICogICAgIGJlaW5nIHJlY2VpdmVkIGZyb20uXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGhhbmRsZXIuYWN0aXZlIERldGVybWluZXMgd2hldGhlciB0aGUgcmVjZWl2ZSBpcyBzdGlsbFxuICogICAgIGFjdGl2ZSBhbmQgc2hvdWxkIHN0aWxsIGJlIHNlcnZpY2VkLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gaGFuZGxlci5jb21taXQgRGVhY3RpdmF0ZXMgdGhlIHJlY2VpdmUgKHNvIGl0IGNhbid0IGJlXG4gKiAgICAgc2VydmljZWQgYSBzZWNvbmQgdGltZSkgYW5kIHJldHVybnMgdGhlIGNhbGxiYWNrIHRvIGJlIGZpcmVkIHdoZW4gdGhlXG4gKiAgICAgcmVjZWl2ZSBjb21wbGV0ZXMuXG4gKiBAcmV0dXJuIHttb2R1bGU6Y2hhbmtvL2NoYW5uZWx+Qm94fG51bGx9IEVpdGhlciB0aGUgYm94ZWQgdmFsdWUgcmVjZWl2ZWQgZnJvbVxuICogICAgIHRoZSBjaGFubmVsLCBvciBgbnVsbGAgaWYgdGhlIHJlY2VpdmUgbXVzdCBiZSBxdWV1ZWQgdG8gYXdhaXQgYVxuICogICAgIGNvcnJlc3BvbmRpbmcgc2VuZC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGhhbmRsZVJlY3YoY2hhbm5lbCwgaGFuZGxlcikge1xuICBsZXQgc2VuZGVyLCBzZW5kSGFuZGxlciwgY2FsbGJhY2s7XG5cbiAgLy8gUnVucyBpZiB0aGUgY2hhbm5lbCBpcyBidWZmZXJlZCBhbmQgdGhlIGJ1ZmZlcmVkIGlzIG5vdCBlbXB0eSAoYW4gZW1wdHlcbiAgLy8gYnVmZmVyIG1lYW5zIHRoZXJlIGFyZSBubyBwZW5kaW5nIHNlbmRzKS4gV2UgaW1tZWRpYXRlbHkgcHJvY2VzcyBhbnkgc2VuZHNcbiAgLy8gdGhhdCB3ZXJlIHF1ZXVlZCB3aGVuIHRoZXJlIHdlcmUgbm8gcGVuZGluZyByZWNlaXZlcywgdXAgdW50aWwgdGhlIGJ1ZmZlclxuICAvLyBpcyBmaWxsZWQgd2l0aCBzZW50IHZhbHVlcy5cbiAgaWYgKGNoYW5uZWwuYnVmZmVyICYmIGNvdW50KGNoYW5uZWwuYnVmZmVyKSA+IDApIHtcbiAgICBoYW5kbGVyLmNvbW1pdCgpO1xuICAgIGNvbnN0IHZhbHVlID0gcmVtb3ZlKGNoYW5uZWwuYnVmZmVyKTtcblxuICAgIGZvciAoOzspIHtcbiAgICAgIGlmIChpc0Z1bGwoY2hhbm5lbC5idWZmZXIpKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgc2VuZGVyID0gZGVxdWV1ZShjaGFubmVsLnNlbmRzKTtcbiAgICAgIGlmIChzZW5kZXIgPT09IEVNUFRZKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBzZW5kSGFuZGxlciA9IHNlbmRlci5oYW5kbGVyO1xuICAgICAgaWYgKHNlbmRIYW5kbGVyLmFjdGl2ZSkge1xuICAgICAgICBjYWxsYmFjayA9IHNlbmRIYW5kbGVyLmNvbW1pdCgpO1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICBkaXNwYXRjaCgoKSA9PiBjYWxsYmFjayh0cnVlKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzUmVkdWNlZChjaGFubmVsLnhmb3JtW3Auc3RlcF0oY2hhbm5lbC5idWZmZXIsIHNlbmRlci52YWx1ZSkpKSB7XG4gICAgICAgICAgY2xvc2UoY2hhbm5lbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGJveCh2YWx1ZSk7XG4gIH1cblxuICAvLyBUaGlzIGxvb3AgcnVucyBvbiBhbiB1bmJ1ZmZlcmVkIGNoYW5uZWwgaWYgdGhlcmUgYXJlIGFueSBwZW5kaW5nIHNlbmRzLlxuICAvLyAoQnVmZmVyZWQgY2hhbm5lbHMgYnJlYWsgb3V0IG9mIHRoaXMgbG9vcCBpbW1lZGlhdGVseSBiZWNhdXNlIGluIG9yZGVyIHRvXG4gIC8vIGhhdmUgY29tZSB0aGlzIGZhciB3aXRob3V0IHJldHVybmluZywgdGhlIGNoYW5uZWwncyBidWZmZXIgbXVzdCBoYXZlIGJlZW5cbiAgLy8gZW1wdHkuIEFuIGVtcHR5IGJ1ZmZlciBtZWFucyB0aGVyZSBhcmUgbm8gcGVuZGluZyBzZW5kcywgc28gdGhlIGZpcnN0XG4gIC8vIHBlbmRpbmcgc2VuZCByZWFkIGZyb20gaXQgd2lsbCBiZSBFTVBUWS4pIEl0IHByb2Nlc3NlcyB0aGUgbmV4dCBwZW5kaW5nXG4gIC8vIHNlbmQgaW1tZWRpYXRlbHkuXG4gIGZvciAoOzspIHtcbiAgICBzZW5kZXIgPSBkZXF1ZXVlKGNoYW5uZWwuc2VuZHMpO1xuICAgIGlmIChzZW5kZXIgPT09IEVNUFRZKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgc2VuZEhhbmRsZXIgPSBzZW5kZXIuaGFuZGxlcjtcbiAgICBpZiAoc2VuZEhhbmRsZXIuYWN0aXZlKSB7XG4gICAgICBjYWxsYmFjayA9IHNlbmRIYW5kbGVyLmNvbW1pdCgpO1xuICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIGRpc3BhdGNoKCgpID0+IGNhbGxiYWNrKHRydWUpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBib3goc2VuZGVyLnZhbHVlKTtcbiAgICB9XG4gIH1cblxuICAvLyBJZiB3ZSd2ZSBleGhhdXN0ZWQgYWxsIG9mIG91ciBwZW5kaW5nIHNlbmRzIGFuZCB0aGUgY2hhbm5lbCBpcyBtYXJrZWRcbiAgLy8gY2xvc2VkLCB3ZSBjYW4gZmluYWxseSByZXV0cm4gdGhlIGZhY3QgdGhhdCB0aGUgY2hhbm5lbCBpcyBjbG9zZWQuIFRoaXNcbiAgLy8gZW5zdXJlcyB0aGF0IGFueSBzZW5kcyB0aGF0IHdlcmUgYWxyZWFkeSBwZW5kaW5nIG9uIHRoZSBjaGFubmVsIGFyZVxuICAvLyBwcm9jZXNzZWQgYmVmb3JlIGNsb3N1cmUsIGV2ZW4gaWYgdGhlIGNoYW5uZWwgd2FzIGNsb3NlZCBiZWZvcmUgdGhhdCBjb3VsZFxuICAvLyBoYXBwZW4uXG4gIGlmIChjaGFubmVsLmNsb3NlZCkge1xuICAgIGhhbmRsZXIuY29tbWl0KCk7XG4gICAgcmV0dXJuIGJveChDTE9TRUQpO1xuICB9XG5cbiAgLy8gSWYgYW4gdW5idWZmZXJlZCBjaGFubmVsIG9yIGEgYnVmZmVyZWQgY2hhbm5lbCB3aXRoIGFuIGVtcHR5IGJ1ZmZlciBoYXMgbm9cbiAgLy8gcGVuZGluZyBzZW5kcywgYW5kIGlmIHRoZSBjaGFubmVsIGlzIHN0aWxsIG9wZW4sIHRoZSByZWNlaXZlIGlzIHF1ZXVlZCB0b1xuICAvLyBiZSBwcm9jZXNzZWQgd2hlbiBhIHNlbmQgaXMgYXZhaWxhYmxlLiBSZWNlaXZlcyB3aG9zZSBoYW5kbGVycyBoYXZlIGdvbmVcbiAgLy8gaW5hY3RpdmUgYXMgdGhlIHJlc3VsdCBvZiBgc2VsZWN0YCBwcm9jZXNzaW5nIGFyZSBwZXJpb2RpY2FsbHkgcHVyZ2VkLlxuICBpZiAoY2hhbm5lbC5kaXJ0eVJlY3ZzID4gY2hhbm5lbC5tYXhEaXJ0eSkge1xuICAgIGZpbHRlcihjaGFubmVsLnJlY3ZzLCByZWNlaXZlciA9PiByZWNlaXZlci5hY3RpdmUpO1xuICAgIGNoYW5uZWwuZGlydHlSZWN2cyA9IDA7XG4gIH0gZWxzZSB7XG4gICAgY2hhbm5lbC5kaXJ0eVJlY3ZzKys7XG4gIH1cblxuICBpZiAocUNvdW50KGNoYW5uZWwucmVjdnMpID49IGNoYW5uZWwubWF4UXVldWVkKSB7XG4gICAgdGhyb3cgRXJyb3IoXG4gICAgICBgTm8gbW9yZSB0aGFuICR7Y2hhbm5lbC5tYXhRdWV1ZWR9IHBlbmRpbmcgcmVjZWl2ZXMgYXJlIGFsbG93ZWQgb24gYSBzaW5nbGUgY2hhbm5lbGBcbiAgICApO1xuICB9XG4gIGVucXVldWUoY2hhbm5lbC5yZWN2cywgaGFuZGxlcik7XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8qKlxuICogQ2xvc2VzIHRoZSBjaGFubmVsIGlmIGl0IGlzbid0IGFscmVhZHkgY2xvc2VkLiBUaGlzIGltbWVkaWF0ZWx5IHJldHVybnMgYW55XG4gKiBidWZmZXJlZCB2YWx1ZXMgdG8gcGVuZGluZyByZWNlaXZlcy4gSWYgdGhlcmUgYXJlIG5vIGJ1ZmZlcmVkIHZhbHVlcyAob3IgaWZcbiAqIHRoZXkndmUgYWxyZWFkeSBiZWVuIHRha2VuIGJ5IG90aGVyIHJlY2VpdmVzKSwgdGhlbiBhbGwgb2YgdGhlIHJlc3Qgb2YgdGhlXG4gKiByZWNlaXZlcyBhcmUgY29tcGxldGVkIHdpdGggdGhlIHZhbHVlIG9mIHtAbGluayBtb2R1bGU6Y2hhbmtvfkNMT1NFRHxDTE9TRUR9LlxuICogQW55IHBlbmRpbmcgc2VuZHMgYXJlIGNvbXBsZXRlZCB3aXRoIHRoZSB2YWx1ZSBvZiBgZmFsc2VgLlxuICpcbiAqIE5vdGUgdGhhdCB0aGUgYnVmZmVyIGlzIG5vdCBlbXB0aWVkIGlmIHRoZXJlIGFyZSBzdGlsbCB2YWx1ZXMgcmVtYWluaW5nIGFmdGVyXG4gKiBhbGwgb2YgdGhlIHBlbmRpbmcgcmVjZWl2ZXMgaGF2ZSBiZWVuIGhhbmRsZWQuIFRoZSBjaGFubmVsIHdpbGwgc3RpbGwgcHJvdmlkZVxuICogdGhvc2UgdmFsdWVzIHRvIGFueSBmdXR1cmUgcmVjZWl2ZXMsIHRob3VnaCBubyBuZXcgdmFsdWVzIG1heSBiZSBhZGRlZCB0byB0aGVcbiAqIGNoYW5uZWwuIE9uY2UgdGhlIGJ1ZmZlciBpcyBkZXBsZXRlZCwgYW55IGZ1dHVyZSByZWNlaXZlcyB3aWxsIHJldHVyblxuICoge0BsaW5rIG1vZHVsZTpjaGFua29+Q0xPU0VEfENMT1NFRH0uXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjaGFua28vY2hhbm5lbFxuICogQHBhcmFtIHttb2R1bGU6Y2hhbmtvL2NoYW5uZWwuQ2hhbm5lbH0gY2hhbm5lbCBUaGUgY2hhbm5lbCB0byBiZSBjbG9zZWQuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjbG9zZShjaGFubmVsKSB7XG4gIGlmIChjaGFubmVsLmNsb3NlZCkge1xuICAgIHJldHVybjtcbiAgfVxuICBjaGFubmVsLmNsb3NlZCA9IHRydWU7XG5cbiAgbGV0IHJlY2VpdmVyLCBzZW5kZXIsIGNhbGxiYWNrO1xuXG4gIC8vIElmIHRoZXJlIGlzIGEgYnVmZmVyIGFuZCBpdCBoYXMgYXQgbGVhc3Qgb25lIHZhbHVlIGluIGl0LCBzZW5kIHRob3NlIHZhbHVlc1xuICAvLyB0byBhbnkgcGVuZGluZyByZWNlaXZlcyB0aGF0IG1pZ2h0IHN0aWxsIGJlIHF1ZXVlZC5cbiAgaWYgKGNoYW5uZWwuYnVmZmVyKSB7XG4gICAgY2hhbm5lbC54Zm9ybVtwLnJlc3VsdF0oY2hhbm5lbC5idWZmZXIpO1xuICAgIGZvciAoOzspIHtcbiAgICAgIGlmIChjb3VudChjaGFubmVsLmJ1ZmZlcikgPT09IDApIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICByZWNlaXZlciA9IGRlcXVldWUoY2hhbm5lbC5yZWN2cyk7XG4gICAgICBpZiAocmVjZWl2ZXIgPT09IEVNUFRZKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgaWYgKHJlY2VpdmVyLmFjdGl2ZSkge1xuICAgICAgICBjYWxsYmFjayA9IHJlY2VpdmVyLmNvbW1pdCgpO1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHJlbW92ZShjaGFubmVsLmJ1ZmZlcik7XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgIGRpc3BhdGNoKCgpID0+IGNhbGxiYWNrKHZhbHVlKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBPbmNlIHRoZSBidWZmZXIgaXMgZW1wdHkgKG9yIGlmIHRoZXJlIGlzbid0IGEgYnVmZmVyIGF0IGFsbCksIHNlbmQgQ0xPU0VEXG4gIC8vIHRvIGFsbCByZW1haW5pbmcgcXVldWVkIHJlY2VpdmVzLlxuICBmb3IgKDs7KSB7XG4gICAgcmVjZWl2ZXIgPSBkZXF1ZXVlKGNoYW5uZWwucmVjdnMpO1xuICAgIGlmIChyZWNlaXZlciA9PT0gRU1QVFkpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBpZiAocmVjZWl2ZXIuYWN0aXZlKSB7XG4gICAgICBjYWxsYmFjayA9IHJlY2VpdmVyLmNvbW1pdCgpO1xuICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIGRpc3BhdGNoKCgpID0+IGNhbGxiYWNrKENMT1NFRCkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFNlbmQgYGZhbHNlYCB0byBhbnkgcmVtYWluaW5nIHF1ZXVlZCBzZW5kcy5cbiAgZm9yICg7Oykge1xuICAgIHNlbmRlciA9IGRlcXVldWUoY2hhbm5lbC5zZW5kcyk7XG4gICAgaWYgKHNlbmRlciA9PT0gRU1QVFkpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBpZiAoc2VuZGVyLmhhbmRsZXIuYWN0aXZlKSB7XG4gICAgICBjYWxsYmFjayA9IHNlbmRlci5oYW5kbGVyLmNvbW1pdCgpO1xuICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIGRpc3BhdGNoKCgpID0+IGNhbGxiYWNrKGZhbHNlKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCB7XG4gIENMT1NFRCxcbiAgTUFYX0RJUlRZLFxuICBNQVhfUVVFVUVELFxuICBjaGFubmVsLFxuICBoYW5kbGVTZW5kLFxuICBoYW5kbGVSZWN2LFxuICBjbG9zZSxcbiAgYm94LFxuICBpc0JveFxufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG4vKipcbiAqIEFuIGltcGxlbWVudGF0aW9uIG9mIGNoYW5uZWxzLiBUaGVzZSBjaGFubmVscyBhcmUgZXNzZW50aWFsbHkgcXVldWVzIHRoYXRcbiAqIGhvbGQgaW5zdHJ1Y3Rpb25zIHdhaXRpbmcgZm9yIHRoZSBuZXh0IGF2YWlsYWJsZSBhc3luYyBmdW5jdGlvbiB0byBwcm9jZXNzXG4gKiB0aGVtLiBUaGV5IGNhbiBiZSBidWZmZXJlZCwgd2hpY2ggaXMgYWNjb21wbGlzaGVkIHVzaW5nIHRoZSBidWZmZXIgZnVuY3Rpb25zXG4gKiBge0BsaW5rIG1vZHVsZTpjaGFua29+Q2hhbmtvLmZpeGVkfGZpeGVkfWAsXG4gKiBge0BsaW5rIG1vZHVsZTpjaGFua29+Q2hhbmtvLmRyb3BwaW5nfGRyb3BwaW5nfWAsIGFuZFxuICogYHtAbGluayBtb2R1bGU6Y2hhbmtvfkNoYW5rby5zbGlkaW5nfHNsaWRpbmd9YC5cbiAqXG4gKiBDaGFubmVscyBkbyBub3QgaW50ZXJhY3Qgd2l0aCBKUyB0YXNrcyBvciB0aGUgZGlzcGF0Y2hlciBpbiBhbnkgbWVhbmluZ2Z1bFxuICogd2F5LiBUaGV5J3JlIGp1c3QgaGVyZSB0byBob2xkIHRhc2tzIHdoaWNoIG1heSB0aGVtc2VsdmVzIHRoZW4gY2F1c2UgbmV3IEpTXG4gKiB0YXNrcyB0byBiZSBjcmVhdGVkIHZpYSB0aGUgZGlzcGF0Y2hlci5cbiAqXG4gKiBDaGFubmVscyBtYXkgaGF2ZSB0cmFuc2R1Y2VycyBhc3NvY2lhdGVkIHdpdGggdGhlbS4gVGhlIHRyYW5zZHVjZXJzIGFyZVxuICogZXhwZWN0ZWQgdG8gZm9sbG93IHRoZSBzYW1lIGNvbnZlbnRpb25zIGFzIGFueSBvZiB0aGUgcG9wdWxhciB0cmFuc2R1Y2VyXG4gKiBsaWJyYXJpZXMuIEV4cGxpY2l0IHN1cHBvcnQgaXMgcmVxdWlyZWQgYmVjYXVzZSBjaGFubmVscyB3b3VsZG4ndCBwbGF5IHdlbGxcbiAqIHdpdGggdGhlIG5vcm1hbCB3YXkgb2YgbWFraW5nIGFuIG9iamVjdCBzdXBwb3J0IHRyYW5zZHVjdGlvbiwgZm9yIHR3b1xuICogZGlmZmVyZW50IHJlYXNvbnMuXG4gKlxuICogKiBUcmFuc2R1Y2VycyByZXF1aXJlIHRoZSBhYmlsaXR5IHRvIGNyZWF0ZSBhIG5ldywgZW1wdHkgY29sbGVjdGlvbiBvZiB0aGVcbiAqICAgc2FtZSB0eXBlIGFzIHRoZSBpbnB1dCBjb2xsZWN0aW9uLiBJbiB0aGlzIGNhc2UsIHRoYXQgd291bGQgbWVhbiBjcmVhdGluZyBhXG4gKiAgIG5ldyBjaGFubmVsLCBtZWFuaW5nIHRoYXQgdGhlIG91dHB1dCBjaGFubmVsIChmcm9tIHdoaWNoIHRoZSB0cmFuc2Zvcm1lZFxuICogICB2YWx1ZXMgYXJlIHJlY2VpdmVkKSB3b3VsZCBiZSBkaWZmZXJlbnQgdGhhbiB0aGUgaW5wdXQgY2hhbm5lbCAod2hlcmVcbiAqICAgdmFsdWVzIGFyZSBzZW50KS5cbiAqICogSWYgd2Ugc29tZWhvdyBnZXQgb3ZlciB0aGF0IHJlcXVpcmVtZW50IGFuZCBrZWVwIGFsbCBhY3Rpb24gb24gdGhlIHNhbWVcbiAqICAgY2hhbm5lbCwgd2UgY2FuJ3QgdGFrZSB2YWx1ZXMgZnJvbSB0aGUgY2hhbm5lbCwgdHJhbnNmb3JtIHRoZW0sIGFuZCBwdXRcbiAqICAgdGhlbSBiYWNrLiBUaGlzIHdvdWxkIHBvdGVudGlhbGx5IGNoYW5nZSB0aGUgb3JkZXIgb2YgdmFsdWVzIGluIHRoZSBjaGFubmVsXG4gKiAgIHNpbmNlIHdlIGFyZSBkZWFsaW5nIHdpdGggYXN5bmNocm9ub3VzIHByb2Nlc3Nlcy5cbiAqXG4gKiBUaGUgZXhwbGljaXQgc3VwcG9ydCBtZWFucyBhIHRyYW5zZHVjZXIgaXMgZGlyZWN0bHkgYXNzb2NpYXRlZCB3aXRoIGFcbiAqIGNoYW5uZWwuIFdoZW4gYSB2YWx1ZSBpcyBzZW50IHRvIHRoZSBjaGFubmVsLCBpdCdzIGZpcnN0IHJ1biB0aHJvdWdoIHRoZVxuICogdHJhbnNkdWNlciBhbmQgdGhlIHRyYW5zZm9ybWVkIHZhbHVlIGlzIHRoZSBvbmUgYWN0dWFsbHkgcHV0IGludG8gdGhlXG4gKiBjaGFubmVsJ3MgYnVmZmVyLiBUaGlzIGF2b2lkcyBib3RoIG9mIHRoZSBwcm9ibGVtcyBub3RlZCBhYm92ZS5cbiAqXG4gKiBAbW9kdWxlIGNoYW5rby9jaGFubmVsXG4gKi9cblxuaW1wb3J0IHtcbiAgQ0xPU0VELFxuICBjaGFubmVsIGFzIGNoYW5JbXBsLFxuICBoYW5kbGVTZW5kLFxuICBoYW5kbGVSZWN2LFxuICBjbG9zZSBhcyBjbG9zZUltcGwsXG4gIE1BWF9ESVJUWSxcbiAgTUFYX1FVRVVFRFxufSBmcm9tIFwiLi9oYW5kbGVyXCI7XG5pbXBvcnQgeyBERUZBVUxULCBzZWxlY3QsIHNlbGVjdEFzeW5jLCB2YWx1ZSwgY2hhbm5lbCB9IGZyb20gXCIuL3NlbGVjdFwiO1xuaW1wb3J0IHsgYWRkLCBmaXhlZCwgaXNCdWZmZXIgfSBmcm9tIFwibW9kdWxlcy9idWZmZXJcIjtcbmltcG9ydCB7IHByb3RvY29scyBhcyBwIH0gZnJvbSBcIm1vZHVsZXMvcHJvdG9jb2xcIjtcblxuLyoqXG4gKiBBIGhhbmRsZXIgZnVuY3Rpb24gZm9yIGV4Y2VwdGlvbnMgdGhhdCBhcmUgdGhyb3duIGJ5IGEgdHJhbnNkdWNlciB3aGlsZVxuICogdHJhbnNmb3JtaW5nIHZhbHVlcyBvbiBhIGNoYW5uZWwuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGVyciBUaGUgZXJyb3Igb2JqZWN0IHRoYXQgd2FzIHRocm93biBieSB0aGUgdHJhbnNkdWNlci5cbiAqIEByZXR1cm4geyp9IEEgdmFsdWUgdGhhdCBzaG91bGQgYmUgcHV0IGludG8gdGhlIGNoYW5uZWwncyBidWZmZXIgd2hlbiB0aGVcbiAqICAgICB0cmFuc2R1Y2VyIHRocm93cyB0aGUgZXJyb3IuIElmIHRoaXMgdmFsdWUgaXNcbiAqICAgICB7QGxpbmsgbW9kdWxlOmNoYW5rb35DaGFua28uQ0xPU0VEfENMT1NFRH0sIHRoZW4gbm8gdmFsdWUgYXQgYWxsIHdpbGwgYmVcbiAqICAgICBhZGRlZCB0byB0aGUgYnVmZmVyLlxuICogQGNhbGxiYWNrIEV4Y2VwdGlvbkhhbmRsZXJcbiAqIEBwcml2YXRlXG4gKi9cblxuLyoqXG4gKiBUaGUgZGVmYXVsdCBleGNlcHRpb24gaGFuZGxlciwgdXNlZCB3aGVuIG5vIGV4Y2VwdGlvbiBoYW5kbGVyIGlzIHN1cHBsaWVkIHRvXG4gKiBge0BsaW5rIGhhbmRsZUV4Y2VwdGlvbn1gLCBge0BsaW5rIHdyYXBUcmFuc2Zvcm1lcn1gLFxuICogYHtAbGluayBtb2R1bGU6Y2hhbmtvfkNoYW5rby5jaGFufGNoYW59YCwgb3JcbiAqIGB7QGxpbmsgbW9kdWxlOmNoYW5rb35DaGFua28udHJhbnNDaGFufHRyYW5zQ2hhbn1gLiBUaGlzIGRlZmF1bHQgaGFuZGxlclxuICogbWVyZWx5IHJldHVybnMgYHtAbGluayBtb2R1bGU6Y2hhbmtvfkNoYW5rby5DTE9TRUR8Q0xPU0VEfWAsIHdoaWNoIHdpbGxcbiAqIHJlc3VsdCBpbiBubyBuZXcgdmFsdWUgYmVpbmcgd3JpdHRlbiB0byB0aGUgY2hhbm5lbC5cbiAqXG4gKiBAdHlwZSB7bW9kdWxlOmNoYW5rb35leGNlcHRpb25IYW5kbGVyfVxuICogQG1lbWJlcm9mIG1vZHVsZTpjaGFua28vY2hhbm5lbFxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgREVGQVVMVF9IQU5ETEVSID0gKCkgPT4gQ0xPU0VEO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgaGFuZGxlciB1c2VkIGZvciBgc2VuZGAgYW5kIGByZWN2YCBvcGVyYXRpb25zLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y2hhbmtvL2NoYW5uZWxcbiAqIEBwYXJhbSB7bW9kdWxlOmNoYW5rby9jaGFubmVsfkhhbmRsZXJDYWxsYmFja30gZm4gVGhlIGNhbGxiYWNrIHRvIGJlIHJ1biB3aGVuXG4gKiAgICAgKGFuZCBpZikgdGhlIG9wZXJhdGlvbiBjb21wbGV0ZXMuXG4gKiBAcmV0dXJuIHttb2R1bGU6Y2hhbmtvL2NoYW5uZWx+SGFuZGxlcn0gVGhlIG5ldyBoYW5kbGVyLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gb3BIYW5kbGVyKGZuKSB7XG4gIHJldHVybiBPYmplY3QuY3JlYXRlKG51bGwsIHtcbiAgICBhY3RpdmU6IHtcbiAgICAgIHZhbHVlOiB0cnVlXG4gICAgfSxcbiAgICBjb21taXQ6IHtcbiAgICAgIHZhbHVlOiAoKSA9PiBmblxuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxuICogSGFuZGxlcyBhbiBleGNlcHRpb24gdGhhdCBpcyB0aHJvd24gaW5zaWRlIGEgdHJhbnNkdWNlci4gVGhlIHRocm93biBlcnJvciBpc1xuICogcGFzc2VkIHRvIHRoZSBgaGFuZGxlcmAgZnVuY3Rpb24sIGFuZCB0aGUgcmVzdWx0IG9mIHRoYXQgaGFuZGxlciBmdW5jdGlvbiBpc1xuICogYWRkZWQgdG8gdGhlIGNoYW5uZWwncyBidWZmZXIuIElmIHRoYXQgdmFsdWUgaXNcbiAqIHtAbGluayBtb2R1bGU6Y2hhbmtvfkNoYW5rby5DTE9TRUR8Q0xPU0VEfSwgdGhlbiBpdCBpcyAqbm90KiBhZGRlZCB0byB0aGVcbiAqIGJ1ZmZlci5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTpjaGFua28vYnVmZmVyc35CdWZmZXJ9IGJ1ZmZlciBUaGUgYnVmZmVyIHRoYXQgYmFja3MgdGhlXG4gKiAgICAgY2hhbm5lbCB3aG9zZSB0cmFuc2R1Y2VyJ3MgZXhjZXB0aW9ucyBhcmUgYmVpbmcgaGFuZGxlZC5cbiAqIEBwYXJhbSB7bW9kdWxlOmNoYW5rby9jaGFubmVsfmV4Y2VwdGlvbkhhbmRsZXJ9IGhhbmRsZXIgVGhlIGV4Y2VwdGlvblxuICogICAgIGhhbmRsaW5nIGZ1bmN0aW9uIHRoYXQgaXMgcnVuIHdoZW4gYW4gZXJyb3Igb2NjdXJzIGluIGEgdHJhbnNkdWNlci5cbiAqIEBwYXJhbSAge09iamVjdH0gZXggVGhlIGVycm9yIG9iamVjdCB0aHJvd24gYnkgdGhlIHRyYW5zZHVjZXIuXG4gKiBAcmV0dXJuIHttb2R1bGU6Y2hhbmtvL2J1ZmZlcnN+QnVmZmVyfSBUaGUgYnVmZmVyIGl0c2VsZi4gVGhpcyBpcyBkb25lIHRvXG4gKiAgICAgbWFrZSBpdCBlYXNpZXIgdG8gaW50ZWdyYXRlIHRoaXMgZnVuY3Rpb24gaW50byBhIHRyYW5zZHVjZXIncyBzdGVwXG4gKiAgICAgZnVuY3Rpb24uXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBoYW5kbGVFeGNlcHRpb24oYnVmZmVyLCBoYW5kbGVyLCBleCkge1xuICBjb25zdCB2YWx1ZSA9IGhhbmRsZXIoZXgpO1xuICBpZiAodmFsdWUgIT09IENMT1NFRCkge1xuICAgIGFkZChidWZmZXIsIHZhbHVlKTtcbiAgfVxuICByZXR1cm4gYnVmZmVyO1xufVxuXG4vKipcbiAqIEEgdHJhbnNkdWNlciB0aGF0IHdyYXBzIGFub3RoZXIgdHJhbnNkdWNlciB3aXRoIGVycm9yIGhhbmRsaW5nIGNvZGUuIEFueVxuICogZXJyb3IgdGhhdCBvY2N1cnMgd2l0aGluIHRoZSB0cmFuc2R1Y2VyLCBlaXRoZXIgaW4gdGhlIHN0ZXAgZnVuY3Rpb24gb3IgdGhlXG4gKiByZXN1bHQgZnVuY3Rpb24sIHdpbGwgY2F1c2UgdGhlIGVycm9yIGhhbmRsZXIgdG8gYmUgcnVuLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB4Zm9ybSBUaGUgdHJhbnNkdWNlciB0byBhZGQgYW4gZXJyb3IgaGFuZGxlciB0by5cbiAqIEBwYXJhbSB7RXhjZXB0aW9uSGFuZGxlcn0gW2hhbmRsZXI9REVGQVVMVF9IQU5ETEVSXSBUaGUgZXhjZXB0aW9uIGhhbmRsaW5nXG4gKiAgICAgZnVuY3Rpb24gdGhhdCBpcyBydW4gd2hlbiBhbiBlcnJvciBvY2N1cnMgaW4gdGhlIHRyYW5zZHVjZXIuXG4gKiBAcmV0dXJuIHtPYmplY3R9IEEgbmV3IHRyYW5zZHVjZXIgdGhhdCBpcyB0aGUgcmVzdWx0IG9mIHdyYXBwaW5nIHRoZSBwcm92aWRlZFxuICogICAgIHRyYW5zZHVjZXIncyBzdGVwIGFuZCByZXN1bHQgZnVuY3Rpb25zIHdpdGggdGhlIGV4Y2VwdGlvbiBoYW5kbGVyLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaGFuZGxlclRyYW5zZHVjZXIoeGZvcm0sIGhhbmRsZXIgPSBERUZBVUxUX0hBTkRMRVIpIHtcbiAgcmV0dXJuIHtcbiAgICBbcC5zdGVwXShidWZmZXIsIGlucHV0KSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4geGZvcm1bcC5zdGVwXShidWZmZXIsIGlucHV0KTtcbiAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgIHJldHVybiBoYW5kbGVFeGNlcHRpb24oYnVmZmVyLCBoYW5kbGVyLCBleCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIFtwLnJlc3VsdF0oYnVmZmVyKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4geGZvcm1bcC5yZXN1bHRdKGJ1ZmZlcik7XG4gICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICByZXR1cm4gaGFuZGxlRXhjZXB0aW9uKGJ1ZmZlciwgaGFuZGxlciwgZXgpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cblxuLyoqXG4gKiBUaGUgcmVkdWNlciB1c2VkIGF0IHRoZSBlbmQgb2YgYSB0cmFuc2R1Y2VyIGNoYWluIHRvIGNvbnRyb2wgaG93IHRoZVxuICogdHJhbnNmb3JtZWQgdmFsdWVzIGFyZSByZWR1Y2VkIGJhY2sgb250byB0aGUgY2hhbm5lbCdzIGJ1ZmZlci4gVGhpcyByZWR1Y2VyXG4gKiBkb2VzIG5vdGhpbmcgbW9yZSB0aGFuIGFkZCB0aGUgaW5wdXQgaXRlbXMgKHdoaWNoIGFyZSB0aGUgdHJhbnNmb3JtZWQgdmFsdWVzXG4gKiB0aGF0IGFyZSBiZWluZyBwdXQgb250byB0aGUgY2hhbm5lbCkgdG8gdGhlIGNoYW5uZWwgYnVmZmVyLlxuICpcbiAqIFRoaXMgaXMgYSBuZWNlc3NhcnkgcGFydCBvZiB3b3JraW5nIHdpdGggYSB0cmFuc2R1Y2VyLCBhcyB0aGUgZmluYWwgcmVkdWNlclxuICogYWx3YXlzIHRha2VzIHRoZSB0cmFuc2Zvcm1lZCB2YWx1ZXMgYW5kIHJlbmRlcnMgdGhlbSBpbnRvIHdoYXRldmVyIGNvbGxlY3Rpb25cbiAqIGlzIGRlc2lyZWQuIFRoaXMgaXMgdGhhdCBmaW5hbCByZWR1Y2VyIGZvciBjaGFubmVscy5cbiAqXG4gKiBAdHlwZSB7T2JqZWN0fVxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgYnVmZmVyUmVkdWNlciA9IHtcbiAgW3AuaW5pdF0oKSB7XG4gICAgdGhyb3cgRXJyb3IoXCJpbml0IG5vdCBhdmFpbGFibGVcIik7XG4gIH0sXG5cbiAgW3Auc3RlcF0oYnVmZmVyLCBpbnB1dCkge1xuICAgIGFkZChidWZmZXIsIGlucHV0KTtcbiAgICByZXR1cm4gYnVmZmVyO1xuICB9LFxuXG4gIFtwLnJlc3VsdF0oYnVmZmVyKSB7XG4gICAgcmV0dXJuIGJ1ZmZlcjtcbiAgfVxufTtcblxuLyoqXG4gKiBQYXJzZXMgdGhlIGJ1ZmZlciBhcmd1bWVudCBhbmQgb3B0aW9ucywgYWxvbmcgd2l0aCBhIHNldCBvZiBkZWZhdWx0IG9wdGlvbnMsXG4gKiB0byBmaWd1cmUgb3V0IHdoYXQgd2FzIHJlYWxseSBwYXNzZWQgdG9cbiAqIGB7QGxpbmsgbW9kdWxlOmNoYW5rb35DaGFua28uY2hhbnxjaGFufWAuXG4gKlxuICogQHBhcmFtIHsobnVsbHxudW1iZXJ8bW9kdWxlOmNoYW5rby9idWZmZXJ+QnVmZmVyKX0gYnVmZmVyIFRoZSBidWZmZXIgYXJndW1lbnRcbiAqICAgICBwYXNzZWQgdG8gYHtAbGluayBtb2R1bGU6Y2hhbmtvfkNoYW5rby5jaGFufGNoYW59YC5cbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIFRoZSBvcHRpb25zIGFyZ3VtZW50IHBhc3NlZCB0b1xuICogICAgIGB7QGxpbmsgbW9kdWxlOmNoYW5rb35DaGFua28uY2hhbnxjaGFufWAuXG4gKiBAcGFyYW0ge29iamVjdH0gZGVmYXVsdE9wdGlvbnMgRGVmYXVsdCB2YWx1ZXMgZm9yIG9wdGlvbnMgdGhhdCBtaWdodCBub3QgaGF2ZVxuICogICAgIGJlZW4gc2VudCB0byBge0BsaW5rIG1vZHVsZTpjaGFua29+Q2hhbmtvLmNoYW58Y2hhbn1gLlxuICogQHJldHVybiB7b2JqZWN0fSBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgcHJvY2Vzc2VkIHZhbHVlcyBvZiBhbGwgb2YgdGhlXG4gKiAgICAgYXJndW1lbnRzIHNlbnQgdG8gYHtAbGluayBtb2R1bGU6Y2hhbmtvfkNoYW5rby5jaGFufGNoYW59YC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHBhcnNlQXJncyhidWZmZXIsIG9wdGlvbnMsIGRlZmF1bHRPcHRpb25zKSB7XG4gIGxldCBidWY7XG4gIGxldCBvcHRzO1xuXG4gIGlmICghYnVmZmVyKSB7XG4gICAgLy8gc2FtZSBmb3IgMCwgbnVsbCwgb3IgdW5kZWZpbmVkXG4gICAgYnVmID0gbnVsbDtcbiAgICBvcHRzID0gb3B0aW9ucztcbiAgfSBlbHNlIGlmICh0eXBlb2YgYnVmZmVyID09PSBcIm51bWJlclwiKSB7XG4gICAgYnVmID0gZml4ZWQoYnVmZmVyKTtcbiAgICBvcHRzID0gb3B0aW9ucztcbiAgfSBlbHNlIGlmIChpc0J1ZmZlcihidWZmZXIpKSB7XG4gICAgYnVmID0gYnVmZmVyO1xuICAgIG9wdHMgPSBvcHRpb25zO1xuICB9IGVsc2Uge1xuICAgIC8vIElmIG5vIGJ1ZmZlciBpcyBzcGVjaWZpZWQgYnV0IGEgdHJhbnNkdWNlciBpcywgd2UgYXNzdW1lIGZpeGVkKDEpXG4gICAgLy8gaW5zdGVhZCBvZiBubyBidWZmZXJcbiAgICBidWYgPSBidWZmZXI/LnRyYW5zZHVjZXIgPyBmaXhlZCgxKSA6IG51bGw7XG4gICAgb3B0cyA9IGJ1ZmZlcjtcbiAgfVxuXG4gIGNvbnN0IHsgdHJhbnNkdWNlciwgaGFuZGxlciwgbWF4RGlydHksIG1heFF1ZXVlZCwgdGltZXIgfSA9IE9iamVjdC5hc3NpZ24oXG4gICAge30sXG4gICAgZGVmYXVsdE9wdGlvbnMsXG4gICAgb3B0c1xuICApO1xuICByZXR1cm4geyBidWYsIHRyYW5zZHVjZXIsIGhhbmRsZXIsIG1heERpcnR5LCBtYXhRdWV1ZWQsIHRpbWVyIH07XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbmQgcmV0dXJucyBhIG5ldyBjaGFubmVsLlxuICpcbiAqIEJ5IGRlZmF1bHQgdGhpcyBjaGFubmVsIHdpbGwgYmUgYSBzaW1wbGUgdW5idWZmZXJlZCwgdW50cmFuc2Zvcm1lZCBjaGFubmVsLFxuICogYnV0IHRoYXQgY2FuIGJlIGNoYW5nZWQgdGhyb3VnaCBvcHRpb25zLiBBIGNoYW5uZWwgZG9lcyBub3QgaGF2ZSBhbnlcbiAqIGV4dGVybmFsbHkgdXNlZnVsIGZ1bmN0aW9ucy4gSXQgZXhpc3RzIGxhcmdlbHkgdG8gYmUgcGFzc2VkIGludG9cbiAqIGB7QGxpbmsgbW9kdWxlOmNoYW5rb35DaGFua28uc2VuZHxzZW5kfWAsXG4gKiBge0BsaW5rIG1vZHVsZTpjaGFua29+Q2hhbmtvLnJlY3Z8cmVjdn1gLCBhbmRcbiAqIGB7QGxpbmsgbW9kdWxlOmNoYW5rb35DaGFua28uc2VsZWN0fHNlbGVjdH1gIGludm9jYXRpb25zLCBhbG9uZyB3aXRoIHRoZWlyXG4gKiBub24tYmxvY2tpbmcgdmFyaWF0aW9ucyAoYHtAbGluayBtb2R1bGU6Y2hhbmtvfkNoYW5rby5zZW5kQXN5bmN8c2VuZEFzeW5jfWAsXG4gKiBge0BsaW5rIG1vZHVsZTpjaGFua29+Q2hhbmtvLnJlY3ZBc3luY3xyZWN2QXN5bmN9YCwgYW5kXG4gKiBge0BsaW5rIG1vZHVsZTpjaGFua29+Q2hhbmtvLnNlbGVjdEFzeW5jfHNlbGVjdEFzeW5jfWApLlxuICpcbiAqIElmIGEgYnVmZmVyIHZhbHVlIGlzIHByb3ZpZGVkLCBpdCBkZWZpbmVzIHdoYXQgYnVmZmVyIHNob3VsZCBiYWNrIHRoZVxuICogY2hhbm5lbC4gSWYgdGhpcyBpcyBgbnVsbGAgb3IgYDBgLCB0aGUgY2hhbm5lbCB3aWxsIGJlIHVuYnVmZmVyZWQuIElmIGl0J3MgYVxuICogcG9zaXRpdmUgbnVtYmVyLCB0aGUgY2hhbm5lbCB3aWxsIGJlIGJ1ZmZlcmVkIGJ5IGFcbiAqIGB7QGxpbmsgbW9kdWxlOmNoYW5rby9idWZmZXJ+Rml4ZWRCdWZmZXJ8Rml4ZWRCdWZmZXJ9IGBvZiB0aGF0IHNpemUuIElmIGl0J3MgYVxuICogYHtAbGluayBtb2R1bGU6Y2hhbmtvL2J1ZmZlci5CdWZmZXJ8QnVmZmVyfWAgb2JqZWN0LCB0aGF0IG9iamVjdCB3aWxsIGJlIHVzZWRcbiAqIGFzIHRoZSBjaGFubmVsJ3MgYnVmZmVyLiBJZiBpdCdzIG1pc3NpbmcgYWx0b2dldGhlciwgdGhlIGNoYW5uZWwgd2lsbCBiZVxuICogdW5idWZmZXJlZCB1bmxlc3MgYSBgdHJhbnNkdWNlcmAgb3B0aW9uIGlzIHByb3ZpZGVkIChzZWUgYmVsb3cpLCBpbiB3aGljaFxuICogY2FzZSBpdCB3aWxsIGJlIGEgYHtAbGluayBtb2R1bGU6Y2hhbmtvL2J1ZmZlcn5GaXhlZEJ1ZmZlcnxGaXhlZEJ1ZmZlcn1gIG9mXG4gKiBzaXplIDEuXG4gKlxuICogYGNoYW5gIHN1cHBvcnRzIHRyYW5zZHVjZXJzIGJ5IGFsbG93aW5nIGEgdHJhbnNkdWNlciBmdW5jdGlvbiB0byBiZVxuICogYXNzb2NpYXRlZCB3aXRoIGl0LiBUaGlzIGlzIHBhc3NlZCBhcyB0aGUgYHRyYW5zZHVjZXJgIG9wdGlvbiBhbmQgY2FuIG9ubHkgYmVcbiAqIHVzZWQgaWYgdGhlIGNoYW5uZWwgaXMgYnVmZmVyZWQgKG90aGVyd2lzZSBhbiBlcnJvciBpcyB0aHJvd24pLiBUaGlzXG4gKiB0cmFuc2R1Y2VyIGZ1bmN0aW9uIG11c3QgdGFrZSBhbm90aGVyIHRyYW5zZHVjZXIgYXMgYSBwYXJhbWV0ZXIgKGFsbG93aW5nXG4gKiB0cmFuc2Zvcm1lcnMgdG8gYmUgY2hhaW5lZCksIGFuZCBpdCBtdXN0IHJldHVybiBhbiBvYmplY3QgY29uZm9ybWluZyB0byB0aGVcbiAqIHRyYW5zZHVjZXIgcHJvdG9jb2wuXG4gKlxuICogRXJyb3JzIGluIHRoZSB0cmFuc2Zvcm1hdGlvbiBwcm9jZXNzIGNhbiBiZSBoYW5kbGVkIGJ5IHBhc3NpbmcgYW4gZXJyb3JcbiAqIGhhbmRsZXIuIFRoaXMgaXMgYSBmdW5jdGlvbiB0aGF0IGV4cGVjdHMgdG8gcmVjZWl2ZSBhbiBlcnJvciBvYmplY3QgYXMgYVxuICogcGFyYW1ldGVyIGFuZCBjYW4gcmV0dXJuIGEgdmFsdWUgdGhhdCBpcyB0aGVuIHB1dCBvbnRvIHRoZSBjaGFubmVsLiBJZiB0aGlzXG4gKiB2YWx1ZSBpcyBge0BsaW5rIG1vZHVsZTpjaGFua29+Q2hhbmtvLkNMT1NFRHxDTE9TRUR9YCwgdGhlbiBubyB2YWx1ZSB3aWxsIGJlXG4gKiBwdXQgb250byB0aGUgY2hhbm5lbCB1cG9uIGhhbmRsZXIgY29tcGxldGlvbi5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNoYW5rb35DaGFua29cbiAqIEBwYXJhbSB7KG51bWJlcnxtb2R1bGU6Y2hhbmtvL2J1ZmZlci5CdWZmZXIpfSBbYnVmZmVyXSBUaGUgYnVmZmVyIG9iamVjdFxuICogICAgIHRoYXQgc2hvdWxkIGJhY2sgdGhpcyBjaGFubmVsLiBJZiB0aGlzIGlzIGEgcG9zaXRpdmUgbnVtYmVyLCBhIGZpeGVkXG4gKiAgICAgYnVmZmVyIG9mIHRoYXQgc2l6ZSB3aWxsIGJlIGNyZWF0ZWQgdG8gYmFjayB0aGUgY2hhbm5lbC4gSWYgaXQgaXMgYDBgIG9yXG4gKiAgICAgYG51bGxgLCB0aGUgbmV3IGNoYW5uZWwgd2lsbCBiZSB1bmJ1ZmZlcmVkLiBJZiBpdCdzIG5vdCBwcmVzZW50LCB0aGUgbmV3XG4gKiAgICAgY2hhbm5lbCB3aWxsIGJlIHVuYnVmZmVyZWQgdW5sZXNzIHRoZXJlIGlzIGEgYHRyYW5zZHVjZXJgIG9wdGlvbiwgaW4gaW5cbiAqICAgICB3aGljaCBjYXNlIGl0IHdpbGwgYmUgYnVmZmVyZWQgd2l0aCBhIHNpemUgMVxuICogICAgIGB7QGxpbmsgbW9kdWxlOmNoYW5rby9idWZmZXJ+Rml4ZWRCdWZmZXJ8Rml4ZWRCdWZmZXJ9YC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gQSBzZXQgb2Ygb3B0aW9ucyBmb3IgY29uZmlndXJpbmcgdGhlIGNoYW5uZWwnc1xuICogICAgIHF1ZXVlLlxuICogQHBhcmFtIHttb2R1bGU6Y2hhbmtvfnRyYW5zZHVjZXJ9IFtvcHRpb25zLnRyYW5zZHVjZXJdIEEgdHJhbnNkdWNlciB0byBydW5cbiAqICAgICBlYWNoIHZhbHVlIHRocm91Z2ggYmVmb3JlIHB1dHRpbmcgaXQgb250byB0aGUgY2hhbm5lbC4gVGhpcyBmdW5jdGlvblxuICogICAgIHNob3VsZCBleHBlY3Qgb25lIHBhcmFtZXRlciAoYW5vdGhlciB0cmFuc2R1Y2VyIHRoYXQgaXQncyBjaGFpbmVkIHRvKSBhbmRcbiAqICAgICByZXR1cm4gYW4gb2JqZWN0IHRoYXQgY29uZm9ybXMgdG8gdGhlIHRyYW5zZHVjZXIgcHJvdG9jb2wuIElmIGFcbiAqICAgICB0cmFuc2R1Y2VyIGlzIHByb3ZpZGVkIG9uIGFuIHVuYnVmZmVyZWQgY2hhbm5lbCwgYW4gZXJyb3Igd2lsbCBiZSB0aHJvd24uXG4gKiBAcGFyYW0ge21vZHVsZTpjaGFua29+ZXhjZXB0aW9uSGFuZGxlcn0gW29wdGlvbnMuaGFuZGxlcl0gQW4gZXJyb3IgaGFuZGxlclxuICogICAgIHRoYXQgaXMgcnVuIHdoZW5ldmVyIGFuIGVycm9yIG9jY3VycyBpbnNpZGUgYSB0cmFuc2R1Y2VyIGZ1bmN0aW9uLiBJZlxuICogICAgIHRoYXQgaGFwcGVucywgdGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgd2l0aCBvbmUgcGFyYW1ldGVyLCB3aGljaCBpcyB0aGVcbiAqICAgICBlcnJvciBvYmplY3QuIFRoZSB2YWx1ZSB0aGF0IHRoZSBoYW5kbGVyIHJldHVybnMgKGlmIGl0IGlzIG5vdFxuICogICAgIGB7QGxpbmsgbW9kdWxlOmNoYW5rb35DaGFua28uQ0xPU0VEfENMT1NFRH1gKSB3aWxsIGJlIHB1dCBvbnRvIHRoZVxuICogICAgIGNoYW5uZWwgd2hlbiB0aGUgaGFuZGxlciBmaW5pc2hlcyBydW5uaW5nLlxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLm1heERpcnR5PTY0XSBUaGUgbWF4aW11bSBudW1iZXIgb2YgZGlydHkgb3BlcmF0aW9uc1xuICogICAgIHRoYXQgY2FuIGJlIGluIHRoZSBxdWV1ZSBiZWZvcmUgdGhvc2Ugb3BlcmF0aW9ucyBhcmUgc3ViamVjdCB0byBiZWluZ1xuICogICAgIHB1cmdlZC4gRGlydHkgb3BlcmF0aW9ucyBhcmUgdGhvc2UgdGhhdCBtYXkgbm90IGJlIHZhbGlkIGFueW1vcmUgYmVjYXVzZVxuICogICAgIHRoZXkgd2VyZSBpbiB0aGUgbGlzdCBvZiBvcGVyYXRpb25zIHBhc3NlZCB0b1xuICogICAgIGB7QGxpbmsgbW9kdWxlOmNoYW5rb35DaGFua28uc2VsZWN0fHNlbGVjdH1gIG9yXG4gKiAgICAgYHtAbGluayBtb2R1bGU6Y2hhbmtvfkNoYW5rby5zZWxlY3RBc3luY3xzZWxlY3RBc3luY31gIGJ1dCB3ZXJlIG5vdFxuICogICAgIGNob3NlbiB0byBydW4uIFRoaXMgcHJvdmlkZXMgYSBjaGFuY2UgZm9yIGEgdmVyeSBtaW5vciBwZXJmb3JtYW5jZSB0d2Vha1xuICogICAgIGFuZCBpcyBiZXN0IGxlZnQgYWxvbmUuXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMubWF4UXVldWVkPTEwMjRdIFRoZSBtYXhpbXVtIG51bWJlciBvZiBvcGVyYXRpb25zXG4gKiAgICAgdGhhdCBjYW4gYmUgcXVldWVkIHVwIGF0IHRoZSBzYW1lIHRpbWUuIFRoaXMgcHJldmVudHMgaW5maW5pdGUgbG9vcHMgZnJvbVxuICogICAgIGFjY2lkZW50YWxseSBlYXRpbmcgdXAgYWxsIG9mIHRoZSBhdmFpbGFibGUgbWVtb3J5LlxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLnRpbWVyXSBJZiB0aGlzIHZhbHVlIGlzIHByZXNlbnQsIHRoZSBjaGFubmVsIHdpbGxcbiAqICAgICBiZSBhIHRpbWVkIGNoYW5uZWwgdGhhdCBjbG9zZXMgYXV0b21hdGljYWxseSBhZnRlciB0aGlzIG51bWJlciBvZlxuICogICAgIG1pbGxpc2Vjb25kcy5cbiAqIEByZXR1cm4ge21vZHVsZTpjaGFua28vY2hhbm5lbC5DaGFubmVsfSBBIG5ldyBjaGFubmVsLlxuICovXG5mdW5jdGlvbiBjaGFuKGJ1ZmZlciwgb3B0aW9ucykge1xuICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICBtYXhEaXJ0eTogTUFYX0RJUlRZLFxuICAgIG1heFF1ZXVlZDogTUFYX1FVRVVFRFxuICB9O1xuICBjb25zdCB7IGJ1ZiwgdHJhbnNkdWNlciwgaGFuZGxlciwgbWF4RGlydHksIG1heFF1ZXVlZCwgdGltZXIgfSA9IHBhcnNlQXJncyhcbiAgICBidWZmZXIsXG4gICAgb3B0aW9ucyxcbiAgICBkZWZhdWx0T3B0aW9uc1xuICApO1xuXG4gIGlmICh0cmFuc2R1Y2VyICYmICFidWYpIHtcbiAgICB0aHJvdyBFcnJvcihcIk9ubHkgYnVmZmVyZWQgY2hhbm5lbHMgY2FuIHVzZSB0cmFuc2R1Y2Vyc1wiKTtcbiAgfVxuXG4gIGNvbnN0IHhmID0gaGFuZGxlclRyYW5zZHVjZXIoXG4gICAgdHJhbnNkdWNlciA/IHRyYW5zZHVjZXIoYnVmZmVyUmVkdWNlcikgOiBidWZmZXJSZWR1Y2VyLFxuICAgIGhhbmRsZXJcbiAgKTtcblxuICBjb25zdCBpc1RpbWVkID0gdHlwZW9mIHRpbWVyID09PSBcIm51bWJlclwiO1xuXG4gIGNvbnN0IGNoID0gY2hhbkltcGwoYnVmLCB4ZiwgaXNUaW1lZCwgbWF4RGlydHksIG1heFF1ZXVlZCk7XG5cbiAgYXN5bmMgZnVuY3Rpb24qIGl0ZXJhdG9yKCkge1xuICAgIGZvciAoOzspIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gYXdhaXQgcmVjdihjaCk7XG4gICAgICBpZiAodmFsdWUgPT09IENMT1NFRCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHlpZWxkIHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIGNoW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGl0ZXJhdG9yO1xuXG4gIGlmIChpc1RpbWVkKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiBjbG9zZUltcGwoY2gpLCB0aW1lcik7XG4gIH1cblxuICByZXR1cm4gY2g7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbiB1bmJ1ZmZlcmVkLCB0aW1lZCBjaGFubmVsLiBUaGlzIGNoYW5uZWwgY2xvc2VzIGF1dG9tYXRpY2FsbHkgYWZ0ZXJcbiAqIHRoZSBzdXBwbGllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGFuZCBpcyB0aGUgZXF1aXZhbGVudCBvZiBjYWxsaW5nIGBjaGFuKDAsXG4gKiB7IHRpbWVyOiBkZWxheSB9KWAuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjaGFua29+Q2hhbmtvXG4gKiBAcGFyYW0ge251bWJlcn0gZGVsYXkgVGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgYWZ0ZXIgdGhlIGNoYW5uZWwgaXMgY3JlYXRlZFxuICogICAgIHRoYXQgaXQgd2lsbCBiZSBjbG9zZWQgYXV0b21hdGljYWxseS5cbiAqIEByZXR1cm4ge21vZHVsZTpjaGFua28vY2hhbm5lbC5DaGFubmVsfSBBIG5ldyB0aW1lZCBjaGFubmVsLlxuICovXG5mdW5jdGlvbiB0aW1lZENoYW4oZGVsYXkgPSAwKSB7XG4gIHJldHVybiBjaGFuKHsgdGltZXI6IGRlbGF5IH0pO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBidWZmZXJlZCBjaGFubmVsIHdpdGggYSB0cmFuc2R1Y2VyIGFuZCBvcHRpb25hbCBlcnJvciBoYW5kbGVyLiBUaGVcbiAqIGJ1ZmZlciBmb3IgdGhpcyBjaGFubmVsIGlzIGFcbiAqIGB7QGxpbmsgbW9kdWxlOmNoYW5rby9idWZmZXJzfkZpeGVkQnVmZmVyfEZpeGVkQnVmZmVyfWAgb2Ygc2l6ZSAxLiBUaGlzIGlzXG4gKiB0aGUgZXF1aXZhbGVudCBvZiBgY2hhbigxLCB7IHRyYW5zZHVjZXIsIGhhbmRsZXIgfSlgLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y2hhbmtvfkNoYW5rb1xuICogQHBhcmFtIHttb2R1bGU6Y2hhbmtvfnRyYW5zZHVjZXJ9IHRyYW5zZHVjZXIgVGhlIHRyYW5zZHVjZXIgdXNlZCB0byB0cmFuc2Zvcm1cbiAqICAgICB2YWx1ZXMgb24gdGhlIG5ldyBjaGFubmVsLlxuICogQHBhcmFtIHttb2R1bGU6Y2hhbmtvfmV4Y2VwdGlvbkhhbmRsZXJ9IFtoYW5kbGVyXSBBbiBleGNlcHRpb24gaGFuZGxlciBjYWxsZWRcbiAqICAgICB3aXRoIHRoZSBlcnJvciBvYmplY3QgYXMgaXRzIG9ubHkgYXJndW1lbnQgd2hlbiBhbiBlcnJvciBoYXBwZW5zIGluc2lkZSBhXG4gKiAgICAgdHJhbnNkdWNlci4gSWYgdGhpcyBpcyBub3QgcHJvdmlkZWQsIGEgZGVmYXVsdCBoYW5kbGVyIGlzIHVzZWQgdGhhdFxuICogICAgIHNpbXBseSBkb2VzIG5vdGhpbmcsIGluY2x1ZGluZyBzZW5kaW5nIG5vIG91dHB1dCBmcm9tIHRoZSB2YWx1ZSB0aGF0XG4gKiAgICAgZXJyb3JlZC5cbiAqIEByZXR1cm4ge21vZHVsZTpjaGFua28vY2hhbm5lbC5DaGFubmVsfSBBIG5ldyBjaGFubmVsIHdpdGggYSB0cmFuc2R1Y2VyLlxuICovXG5mdW5jdGlvbiB0cmFuc0NoYW4odHJhbnNkdWNlciwgaGFuZGxlcikge1xuICByZXR1cm4gY2hhbih7IHRyYW5zZHVjZXIsIGhhbmRsZXIgfSk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGEgY2hhbm5lbCBpcyBjbG9zZWQuXG4gKlxuICogQSBjbG9zZWQgY2hhbm5lbCB3aWxsIGNhdXNlIGFueSBgc2VuZGAgb3BlcmF0aW9uIHRvIHJldHVybiBgZmFsc2VgIGFuZCBhbnlcbiAqIGByZWN2YCBvcGVyYXRpb24gdG8gcmV0dXJuIGFueSBidWZmZXJlZCBpdGVtcyB0aGF0IHJlbWFpbiwgZm9sbG93ZWQgYnlcbiAqIGB7QGxpbmsgbW9kdWxlOmNoYW5rb35DaGFua28uQ0xPU0VEfENMT1NFRH0uXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjaGFua29+Q2hhbmtvXG4gKiBAcGFyYW0ge21vZHVsZTpjaGFua28vY2hhbm5lbC5DaGFubmVsfSBjaGFubmVsIFRoZSBjaGFubmVsIHRvIGNoZWNrLlxuICogQHJldHVybiB7Ym9vbGVhbn0gRWl0aGVyIGB0cnVlYCBpZiB0aGUgY2hhbm5lbCBpcyBjbG9zZWQgb3IgYGZhbHNlYCBpZiBpdFxuICogICAgIGlzbid0LlxuICovXG5mdW5jdGlvbiBpc0Nsb3NlZChjaGFubmVsKSB7XG4gIHJldHVybiBjaGFubmVsLmNsb3NlZDtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgYSBjaGFubmVsIGlzIGJ1ZmZlcmVkLlxuICpcbiAqIEEgY2hhbm5lbCBpcyBidWZmZXJlZCBpZiBhIGJ1ZmZlciBvciBhIG51bWJlciB3YXMgcGFzc2VkIGFzIHRoZSBmaXJzdFxuICogYXJndW1lbnQgb2YgYHtAbGluayBtb2R1bGU6Y2hhbmtvfkNoYW5rby5jaGFufGNoYW59YCBvciBpZiBhIHRyYW5zZHVjZXIgaXMgYVxuICogcGFydCBvZiB0aGUgY2hhbm5lbC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNoYW5rb35DaGFua29cbiAqIEBwYXJhbSB7bW9kdWxlOmNoYW5rby9jaGFubmVsLkNoYW5uZWx9IGNoYW5uZWwgVGhlIGNoYW5uZWwgdG8gY2hlY2suXG4gKiBAcmV0dXJuIHtib29sZWFufSBFaXRoZXIgYHRydWVgIGlmIHRoZSBjaGFubmVsIGlzIGJ1ZmZlcmVkIG9yIGBmYWxzZWAgaWYgaXRcbiAqICAgICBpc24ndC5cbiAqL1xuZnVuY3Rpb24gaXNCdWZmZXJlZChjaGFubmVsKSB7XG4gIHJldHVybiBjaGFubmVsLmlzQnVmZmVyZWQ7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGEgY2hhbm5lbCBpcyB0aW1lZC5cbiAqXG4gKiBBIGNoYW5uZWwgaXMgdGltZWQgaWYgaXQgd2FzIGNyZWF0ZWQgZWl0aGVyIHdpdGggdGhlIGB0aW1lcmAgb3B0aW9uIG9mXG4gKiBge0BsaW5rIG1vZHVsZTpjaGFua29+Q2hhbmtvLmNoYW58Y2hhbn1gIG9yIHdpdGggdGhlXG4gKiBge0BsaW5rIG1vZHVsZTpjaGFua29+Q2hhbmtvLnRpbWVkQ2hhbnx0aW1lZENoYW59YCBmdW5jdGlvbi4gSXQgd2lsbFxuICogYXV0b21hdGljYWxseSBjbG9zZSBhZnRlciBhIGNlcnRhaW4gcGVyaW9kIG9mIHRpbWUuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjaGFua29+Q2hhbmtvXG4gKiBAcGFyYW0ge21vZHVsZTpjaGFua28vY2hhbm5lbC5DaGFubmVsfSBjaGFubmVsIFRoZSBjaGFubmVsIHRvIGNoZWNrLlxuICogQHJldHVybiB7Ym9vbGVhbn0gRWl0aGVyIGB0cnVlYCBpZiB0aGUgY2hhbm5lbCBpcyB0aW1lZCBvciBgZmFsc2VgIGlmIGl0XG4gKiAgICAgaXNuJ3QuXG4gKi9cbmZ1bmN0aW9uIGlzVGltZWQoY2hhbm5lbCkge1xuICByZXR1cm4gY2hhbm5lbC5pc1RpbWVkO1xufVxuXG4vKipcbiAqIFNlbmRzIGEgdmFsdWUgdG8gdGhpcyBjaGFubmVsIHdpdGhvdXQgYmxvY2tpbmcuXG4gKlxuICogVGhpcyBtZWFucyB0aGF0IGEgY2FsbCB0byBgc2VuZEFzeW5jYCBkb2VzIG5vdCBnbyBpbnRvIGFuIGBhd2FpdGBcbiAqIGV4cHJlc3Npb24sIGFuZCBpdCBpcyBub3QgbmVjZXNzYXJ5IHRvIHVzZSBpdCBpbnNpZGUgYSBhc3luYyBmdW5jdGlvbi5cbiAqIFJhdGhlciB0aGFuIGJsb2NraW5nIHVudGlsIHRoZSBzZW50IHZhbHVlIGlzIHRha2VuIGJ5IGFub3RoZXIgYXN5bmNcbiAqIGZ1bmN0aW9uLCB0aGlzIG9uZSByZXR1cm5zIGltbWVkaWF0ZWx5IGFuZCB0aGVuIGludm9rZXMgdGhlIGNhbGxiYWNrIChpZlxuICogcHJvdmlkZWQpIHdoZW4gdGhlIHNlbnQgdmFsdWUgaXMgdGFrZW4uIEl0IGNhbiBiZSBzZWVuIGFzIGEgbm9uLWJsb2NraW5nXG4gKiB2ZXJzaW9uIG9mIGB7QGxpbmsgbW9kdWxlOmNoYW5rb35DaGFua28uc2VuZHxzZW5kfWAuXG4gKlxuICogV2hpbGUgdGhlIHByaW1hcnkgdXNlIG9mIHRoaXMgZnVuY3Rpb24gaXMgdG8gc2VuZCB2YWx1ZXMgb250byBjaGFubmVscyBpblxuICogY29udGV4dHMgd2hlcmUgYmVpbmcgaW5zaWRlIGFuIGFzeW5jIGZ1bmN0aW9uIGlzIGltcG9zc2libGUgKGZvciBleGFtcGxlLFxuICogaW4gYSBET00gZWxlbWVudCdzIGV2ZW50IGhhbmRsZXIpLCBpdCBjYW4gc3RpbGwgYmUgdXNlZCBpbnNpZGUgYXN5bmNcbiAqIGZ1bmN0aW9ucyBhdCB0aW1lcyB3aGVuIGl0J3MgaW1wb3J0YW50IHRvIG1ha2Ugc3VyZSB0aGF0IHRoZSBmdW5jdGlvblxuICogZG9lc24ndCBibG9jayBmcm9tIHRoZSBzZW5kLlxuICpcbiAqIFRoZSBjYWxsYmFjayBpcyBhIGZ1bmN0aW9uIG9mIG9uZSBwYXJhbWV0ZXIuIFRoZSBwYXJhbWV0ZXIgdGhhdCdzXG4gKiBzdXBwbGllZCB0byB0aGUgY2FsbGJhY2sgaXMgdGhlIHNhbWUgYXMgd2hhdCBpcyBzdXBwbGllZCB0byBgYXdhaXQgc2VuZGA6XG4gKiBgdHJ1ZWAgaWYgdGhlIHZhbHVlIHdhcyB0YWtlbiwgb3IgYGZhbHNlYCBpZiB0aGUgY2hhbm5lbCB3YXMgY2xvc2VkLiBJZlxuICogdGhlIGNhbGxiYWNrIGlzbid0IHByZXNlbnQsIG5vdGhpbmcgd2lsbCBoYXBwZW4gYWZ0ZXIgdGhlIHZhbHVlIGlzIHRha2VuLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y2hhbmtvfkNoYW5rb1xuICogQHBhcmFtIHsqfSBbdmFsdWVdIFRoZSB2YWx1ZSBiZWluZyBwdXQgb250byB0aGUgY2hhbm5lbC5cbiAqIEBwYXJhbSB7bW9kdWxlOmNoYW5rb35vcENhbGxiYWNrfSBbY2FsbGJhY2tdIEEgZnVuY3Rpb24gdGhhdCBnZXRzIGludm9rZWRcbiAqICAgICBlaXRoZXIgd2hlbiB0aGUgdmFsdWUgaXMgdGFrZW4gYnkgYW5vdGhlciBwcm9jZXNzIG9yIHdoZW4gdGhlIGNoYW5uZWxcbiAqICAgICBpcyBjbG9zZWQuIFRoaXMgZnVuY3Rpb24gY2FuIHRha2Ugb25lIHBhcmFtZXRlciwgd2hpY2ggaXMgYHRydWVgIGluXG4gKiAgICAgdGhlIGZvcm1lciBjYXNlIGFuZCBgZmFsc2VgIGluIHRoZSBsYXR0ZXIuXG4gKi9cbmZ1bmN0aW9uIHNlbmRBc3luYyhjaGFubmVsLCB2YWx1ZSwgY2FsbGJhY2sgPSAoKSA9PiB7fSkge1xuICBjb25zdCByZXN1bHQgPSBoYW5kbGVTZW5kKGNoYW5uZWwsIHZhbHVlLCBvcEhhbmRsZXIoY2FsbGJhY2spKTtcbiAgaWYgKHJlc3VsdCAmJiBjYWxsYmFjaykge1xuICAgIGNhbGxiYWNrKHJlc3VsdC52YWx1ZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZWNlaXZlcyBhIHZhbHVlIGZyb20gdGhpcyBjaGFubmVsIHdpdGhvdXQgYmxvY2tpbmcuXG4gKlxuICogVGhpcyBtZWFucyB0aGF0IGEgY2FsbCB0byBgcmVjZWl2ZUFzeW5jYCBkb2VzIG5vdCBnbyBpbnRvIGFuIGBhd2FpdGBcbiAqIGV4cHJlc3Npb24sIGFuZCBpdCBpcyBub3QgbmVjZXNzYXJ5IHRvIHVzZSBpdCBpbnNpZGUgYSBhc3luYyBmdW5jdGlvbi5cbiAqIFJhdGhlciB0aGFuIGJsb2NraW5nIHVudGlsIGEgdmFsdWUgYmVjb21lcyBhdmFpbGFibGUgb24gdGhlIGNoYW5uZWwgdG8gYmVcbiAqIHJlY2VpdmVkLCB0aGlzIG9uZSByZXR1cm5zIGltbWVkaWF0ZWx5IGFuZCB0aGVuIGludm9rZXMgdGhlIGNhbGxiYWNrIChpZlxuICogcHJvdmlkZWQpIHdoZW4gYSB2YWx1ZSBiZWNvbWVzIGF2YWlsYWJsZS4gSXQgY2FuIGJlIHJlZ2FyZGVkIGFzIGFcbiAqIG5vbi1ibG9ja2luZyB2ZXJzaW9uIG9mIHtAbGluayBtb2R1bGU6Y2hhbmtvfkNoYW5rby5yZWN2fHJlY3Z9YC5cbiAqXG4gKiBXaGlsZSB0aGUgcHJpbWFyeSB1c2Ugb2YgdGhpcyBmdW5jdGlvbiBpcyB0byByZWNlaXZlIHZhbHVlcyBmcm9tIGNoYW5uZWxzXG4gKiBpbiBjb250ZXh0cyB3aGVyZSBiZWluZyBpbnNpZGUgYW4gYXN5bmMgZnVuY3Rpb24gaXMgaW1wb3NzaWJsZSwgaXQgY2FuXG4gKiBzdGlsbCBiZSB1c2VkIGluc2lkZSBhc3luYyBmdW5jdGlvbnMgYXQgdGltZXMgd2hlbiBpdCdzIGltcG9ydGFudCB0aGF0XG4gKiB0aGUgcmVjZWl2ZSBkb2Vzbid0IGJsb2NrIHRoZSBmdW5jdGlvbi5cbiAqXG4gKiBUaGUgY2FsbGJhY2sgaXMgYSBmdW5jdGlvbiBvZiBvbmUgcGFyYW1ldGVyLCBhbmQgdGhlIHZhbHVlIHN1cHBsaWVkIGZvclxuICogdGhhdCBwYXJhbWV0ZXIgaXMgdGhlIHZhbHVlIHJlY2VpdmVkIGZyb20gdGhlIGNoYW5uZWwgKGVpdGhlciBhIHZhbHVlXG4gKiB0aGF0IHdhcyBzZW50IG9yIGB7QGxpbmsgbW9kdWxlOmNoYW5rb35DaGFua28uQ0xPU0VEfENMT1NFRH1gKS4gSWYgdGhlXG4gKiBjYWxsYmFjayBpc24ndCBwcmVzZW50LCBub3RoaW5nIHdpbGwgaGFwcGVuIGFmdGVyIHRoZSB2YWx1ZSBpcyB0YWtlbi5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNoYW5rb35DaGFua29cbiAqIEBwYXJhbSB7bW9kdWxlOmNoYW5rb35vcENhbGxiYWNrfSBbY2FsbGJhY2tdIEEgZnVuY3Rpb24gdGhhdCBnZXRzIGludm9rZWRcbiAqICAgICB3aGVuIGEgdmFsdWUgaXMgbWFkZSBhdmFpbGFibGUgdG8gYmUgcmVjZWl2ZWQgKHRoaXMgdmFsdWUgbWF5IGJlXG4gKiAgICAgYHtAbGluayBtb2R1bGU6Y2hhbmtvfkNoYW5rby5DTE9TRUR8Q0xPU0VEfWAgaWYgdGhlIGNoYW5uZWwgY2xvc2VzIHdpdGhcbiAqICAgICBubyBhdmFpbGFibGUgdmFsdWUpLiBUaGUgZnVuY3Rpb24gY2FuIHRha2Ugb25lIHBhcmFtZXRlciwgd2hpY2ggaXNcbiAqICAgICB0aGUgdmFsdWUgdGhhdCBpcyByZWNlaXZlZCBmcm9tIHRoZSBjaGFubmVsLlxuICovXG5mdW5jdGlvbiByZWN2QXN5bmMoY2hhbm5lbCwgY2FsbGJhY2sgPSAoKSA9PiB7fSkge1xuICBjb25zdCByZXN1bHQgPSBoYW5kbGVSZWN2KGNoYW5uZWwsIG9wSGFuZGxlcihjYWxsYmFjaykpO1xuICBpZiAocmVzdWx0ICYmIGNhbGxiYWNrKSB7XG4gICAgY2FsbGJhY2socmVzdWx0LnZhbHVlKTtcbiAgfVxufVxuXG4vKipcbiAqIFNlbmRzIGEgdmFsdWUgdG8gYSBjaGFubmVsLCBibG9ja2luZyB0aGUgYXN5bmMgZnVuY3Rpb24gdW50aWwgdGhhdCB2YWx1ZSBpc1xuICogcmVjZWl2ZWQgZnJvbSB0aGUgY2hhbm5lbCBieSBhIGRpZmZlcmVudCBmdW5jdGlvbiAob3IgdW50aWwgdGhlIGNoYW5uZWxcbiAqIGNsb3NlcykuXG4gKlxuICogQSB2YWx1ZSBpcyBhbHdheXMgc2VudCB0byB0aGUgY2hhbm5lbCwgYnV0IGlmIHRoYXQgdmFsdWUgaXNuJ3Qgc3BlY2lmaWVkIGJ5XG4gKiB0aGUgc2Vjb25kIHBhcmFtZXRlciwgaXQgaXMgYHVuZGVmaW5lZGAuIEFueSB2YWx1ZSBtYXkgYmUgc2VudCB0byBhIGNoYW5uZWwsXG4gKiB3aXRoIHRoZSBzb2xlIGV4Y2VwdGlvbiBvZiB0aGUgc3BlY2lhbCB2YWx1ZVxuICogYHtAbGluayBtb2R1bGU6Y2hhbmtvfkNoYW5rby5DTE9TRUR8Q0xPU0VEfWAuXG4gKlxuICogVGhpcyBmdW5jdGlvbiAqbXVzdCogYmUgY2FsbGVkIGZyb20gd2l0aGluIGFuIGFzeW5jIGZ1bmN0aW9uIGFuZCBhcyBwYXJ0IG9mXG4gKiBhbiBgYXdhaXRgIGV4cHJlc3Npb24uXG4gKlxuICogV2hlbiBgc2VuZGAgaXMgY29tcGxldGVkIGFuZCBpdHMgZnVuY3Rpb24gdW5ibG9ja3MsIGl0cyBgYXdhaXRgIGV4cHJlc3Npb25cbiAqIGV2YWx1YXRlcyB0byBhIHN0YXR1cyBib29sZWFuIHRoYXQgaW5kaWNhdGVzIHdoYXQgY2F1c2VkIHRoZSBmdW5jdGlvbiB0b1xuICogdW5ibG9jay4gVGhhdCB2YWx1ZSBpcyBgdHJ1ZWAgaWYgdGhlIHNlbnQgdmFsdWUgd2FzIHN1Y2Nlc3NmdWxseSB0YWtlbiBieVxuICogYW5vdGhlciBwcm9jZXNzLCBvciBgZmFsc2VgIGlmIHRoZSB1bmJsb2NraW5nIGhhcHBlbmVkIGJlY2F1c2UgdGhlIHRhcmdldFxuICogY2hhbm5lbCBjbG9zZWQuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjaGFua29+Q2hhbmtvXG4gKiBAcGFyYW0geyp9IFt2YWx1ZV0gVGhlIHZhbHVlIGJlaW5nIHB1dCBvbnRvIHRoZSBjaGFubmVsLlxuICogQHJldHVybiB7UHJvbWlzZTxib29sZWFuPn0gQSBwcm9taXNlIHRoYXQgd2lsbCByZXNvbHZlIHRvIGB0cnVlYCBvciBgZmFsc2VgXG4gKiAgICAgZGVwZW5kaW5nIG9uIHdoZXRoZXIgdGhlIHB1dCB2YWx1ZSBpcyBhY3R1YWxseSB0YWtlbi5cbiAqL1xuZnVuY3Rpb24gc2VuZChjaGFubmVsLCB2YWx1ZSkge1xuICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgc2VuZEFzeW5jKGNoYW5uZWwsIHZhbHVlLCByZXNvbHZlKTtcbiAgfSk7XG59XG5cbi8qKlxuICogUmVjZWl2ZXMgYSB2YWx1ZSBmcm9tIHRoaXMgY2hhbm5lbCwgYmxvY2tpbmcgdGhlIGFzeW5jIGZ1bmN0aW9uIHVudGlsIGFcbiAqIHZhbHVlIGJlY29tZXMgYXZhaWxhYmxlIHRvIGJlIHJlY2VpdmVkIChvciB1bnRpbCB0aGUgY2hhbm5lbCBjbG9zZXMgd2l0aFxuICogbm8gbW9yZSB2YWx1ZXMgb24gaXQgdG8gYmUgcmVjZWl2ZWQpLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gKm11c3QqIGJlIGNhbGxlZCBmcm9tIHdpdGhpbiBhbiBhc3luYyBmdW5jdGlvbiBhbmQgYXMgcGFydFxuICogb2YgYW4gYGF3YWl0YCBleHByZXNzaW9uLlxuICpcbiAqIFdoZW4gYHJlY2VpdmVgIGlzIGNvbXBsZXRlZCBhbmQgaXRzIGZ1bmN0aW9uIHVuYmxvY2tzLCBpdHMgYGF3YWl0YFxuICogZXhwcmVzc2lvbiBldmFsdWF0ZXMgdG8gdGhlIGFjdHVhbCB2YWx1ZSB0aGF0IHdhcyByZWNlaXZlZC4gSWYgdGhlIHRhcmdldFxuICogY2hhbm5lbCBjbG9zZWQsIHRoZW4gYWxsIG9mIHRoZSB2YWx1ZXMgYWxyZWFkeSBwbGFjZWQgb250byBpdCBhcmVcbiAqIHJlc29sdmVkIGJ5IGByZWNlaXZlYCBhcyBub3JtYWwsIGFuZCBvbmNlIG5vIG1vcmUgdmFsdWVzIGFyZSBhdmFpbGFibGUsXG4gKiB0aGUgc3BlY2lhbCB2YWx1ZSBge0BsaW5rIG1vZHVsZTpjaGFua29+Q2hhbmtvLkNMT1NFRHxDTE9TRUR9YCBpcyByZXR1cm5lZC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNoYW5rb35DaGFua29cbiAqIEByZXR1cm4ge1Byb21pc2V9IEEgcHJvbWlzZSB0aGF0IHdpbGwgcmVzb2x2ZSB0byB0aGUgdmFsdWUgcmVjZWl2ZWQgZnJvbVxuICogICAgIHRoZSBjaGFubmVsIG9uY2UgdGhhdCByZWNlaXZlIGlzIGNvbXBsZXRlZC4gSWYgdGhlIGNoYW5uZWwgY2xvc2VzXG4gKiAgICAgd2l0aG91dCBhIHZhbHVlIGJlaW5nIG1hZGUgYXZhaWxhYmxlLCB0aGlzIHdpbGwgcmVzb2x2ZSB0b1xuICogICAgIGB7QGxpbmsgbW9kdWxlOmNoYW5rb35DaGFua28uQ0xPU0VEfENMT1NFRH1gLlxuICovXG5mdW5jdGlvbiByZWN2KGNoYW5uZWwpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgIHJlY3ZBc3luYyhjaGFubmVsLCByZXNvbHZlKTtcbiAgfSk7XG59XG5cbi8qKlxuICogUmVjZWl2ZXMgYSB2YWx1ZSBmcm9tIGEgY2hhbm5lbCwgYmxvY2tpbmcgdGhlIGFzeW5jIGZ1bmN0aW9uIHVudGlsIGEgdmFsdWVcbiAqIGJlY29tZXMgYXZhaWxhYmxlIHRvIGJlIHJlY2VpdmVkIChvciB1bnRpbCB0aGUgY2hhbm5lbCBjbG9zZXMgd2l0aCBubyBtb3JlXG4gKiB2YWx1ZXMgb24gaXQgdG8gYmUgcmVjZWl2ZWQpLiBJZiB0aGUgcmVjZWl2ZWQgdmFsdWUgaXMgYW4gZXJyb3Igb2JqZWN0LCB0aGF0XG4gKiBlcnJvciBpcyB0aHJvd24gYXQgdGhhdCBwb2ludC5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uICptdXN0KiBiZSBjYWxsZWQgZnJvbSB3aXRoaW4gYW4gYXN5bmMgZnVuY3Rpb24gYW5kIGFzIHBhcnQgb2ZcbiAqIGFuIGBhd2FpdGAgZXhwcmVzc2lvbi5cbiAqXG4gKiBJdCBmdW5jdGlvbnMgaW4gZXZlcnkgd2F5IGxpa2UgYHtAbGluayBtb2R1bGU6Y2hhbmtvfkNoYW5rby5yZWN2fHJlY3Z9YFxuICogKmV4Y2VwdCogaW4gdGhlIGNhc2UgdGhhdCB0aGUgdmFsdWUgb24gdGhlIGNoYW5uZWwgaXMgYW4gb2JqZWN0IHRoYXQgaGFzXG4gKiBgRXJyb3IucHJvdG90eXBlYCBpbiBpdHMgcHJvdG90eXBlIGNoYWluIChhbnkgYnVpbHQtaW4gZXJyb3IsIGFueVxuICogcHJvcGVybHktY29uc3RydWN0ZWQgY3VzdG9tIGVycm9yKS4gSWYgdGhhdCBoYXBwZW5zLCB0aGUgZXJyb3IgaXMgdGhyb3duLFxuICogd2hpY2ggd2lsbCBjYXVzZSB0aGUgcmV0dXJuZWQgcHJvbWlzZSB0byBiZSByZWplY3RlZCB3aXRoIHRoZSBlcnJvci4gSXQgY2FuXG4gKiB0aGVuIGJlIGhhbmRsZWQgdXAgdGhlIHByb21pc2UgY2hhaW4gbGlrZSBhbnkgb3RoZXIgcmVqZWN0ZWQgcHJvbWlzZS5cbiAqXG4gKiBgdGFrZU9yVGhyb3dgIGlzIHJvdWdobHkgZXF1aXZhbGVudCB0bzpcbiAqXG4gKiBgYGBcbiAqIGNvbnN0IHZhbHVlID0gYXdhaXQgcmVjdihjaCk7XG4gKiBpZiAoRXJyb3IucHJvdG90eXBlLmlzUHJvdG90eXBlT2YodmFsdWUpKSB7XG4gKiAgIHRocm93IHZhbHVlO1xuICogfVxuICogYGBgXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjaGFua29+Q2hhbmtvXG4gKiBAcmV0dXJuIHtQcm9taXNlfSBBIHByb21pc2UgdGhhdCB3aWxsIHJlc29sdmUgdG8gdGhlIHZhbHVlIHRha2VuIGZyb20gdGhlXG4gKiAgICAgY2hhbm5lbCBvbmNlIHRoYXQgdGFrZSBpcyBjb21wbGV0ZWQuIElmIHRoZSBjaGFubmVsIGNsb3NlcyB3aXRob3V0IGFcbiAqICAgICB2YWx1ZSBiZWluZyBtYWRlIGF2YWlsYWJsZSwgdGhpcyB3aWxsIHJlc29sdmUgdG9cbiAqICAgICBge0BsaW5rIG1vZHVsZTpjaGFua29+Q2hhbmtvLkNMT1NFRHxDTE9TRUR9YC4gSWYgdGhlIHRha2VuIHZhbHVlIGlzIGFuXG4gKiAgICAgZXJyb3IsIHRoZSBwcm9taXNlIHdpbGwgaW5zdGVhZCBiZSByZWplY3RlZCB3aXRoIHRoZSBlcnJvciBvYmplY3QgYXMgdGhlXG4gKiAgICAgcmVhc29uLlxuICovXG5mdW5jdGlvbiByZWN2T3JUaHJvdyhjaGFubmVsKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgcmVjdkFzeW5jKGNoYW5uZWwsIHJlc3VsdCA9PiB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mLmNhbGwoRXJyb3IucHJvdG90eXBlLCByZXN1bHQpKSB7XG4gICAgICAgIHJlamVjdChyZXN1bHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxuLyoqXG4gKiBDbG9zZXMgdGhlIGNoYW5uZWwsIGlmIGl0IGlzbid0IGFscmVhZHkgY2xvc2VkLiBUaGlzIGltbWVkaWF0ZWx5IHJldHVybnMgYW55XG4gKiBidWZmZXJlZCB2YWx1ZXMgdG8gcGVuZGluZyByZWNlaXZlcy4gSWYgdGhlcmUgYXJlIG5vIGJ1ZmZlcmVkIHZhbHVlcyAob3IgaWZcbiAqIHRoZXkndmUgYWxyZWFkeSBiZWVuIHRha2VuIGJ5IG90aGVyIHJlY2VpdmVzKSwgdGhlbiBhbGwgb2YgdGhlIHJlc3Qgb2YgdGhlXG4gKiByZWNlaXZlcyBhcmUgY29tcGxldGVkIHdpdGggdGhlIHZhbHVlIG9mXG4gKiB7QGxpbmsgbW9kdWxlOmNoYW5rb35DaGFua28uQ0xPU0VEfENMT1NFRH0uIEFueSBwZW5kaW5nIHNlbmRzIGFyZSBjb21wbGV0ZWRcbiAqIHdpdGggdGhlIHZhbHVlIG9mIGBmYWxzZWAuXG4gKlxuICogTm90ZSB0aGF0IHRoZSBidWZmZXIgaXMgbm90IGVtcHRpZWQgaWYgdGhlcmUgYXJlIHN0aWxsIHZhbHVlcyByZW1haW5pbmcgYWZ0ZXJcbiAqIGFsbCBvZiB0aGUgcGVuZGluZyByZWNlaXZlcyBoYXZlIGJlZW4gaGFuZGxlZC4gVGhlIGNoYW5uZWwgd2lsbCBzdGlsbCBwcm92aWRlXG4gKiB0aG9zZSB2YWx1ZXMgdG8gYW55IGZ1dHVyZSByZWNlaXZlcywgdGhvdWdoIG5vIG5ldyB2YWx1ZXMgbWF5IGJlIGFkZGVkIHRvIHRoZVxuICogY2hhbm5lbC4gT25jZSB0aGUgYnVmZmVyIGlzIGRlcGxldGVkLCBhbnkgZnV0dXJlIHJlY2VpdmVzIHdpbGwgcmV0dXJuXG4gKiB7QGxpbmsgbW9kdWxlOmNoYW5rb35DaGFua28uQ0xPU0VEfENMT1NFRH0uXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjaGFua29+Q2hhbmtvXG4gKiBAcGFyYW0ge21vZHVsZTpjaGFua28vY2hhbm5lbC5DaGFubmVsfSBjaGFubmVsIFRoZSBjaGFubmVsIHRvIGJlIGNsb3NlZC5cbiAqL1xuZnVuY3Rpb24gY2xvc2UoY2hhbm5lbCkge1xuICBjbG9zZUltcGwoY2hhbm5lbCk7XG59XG5cbmV4cG9ydCB7XG4gIENMT1NFRCxcbiAgREVGQVVMVCxcbiAgY2hhbixcbiAgdGltZWRDaGFuLFxuICB0cmFuc0NoYW4sXG4gIGlzQ2xvc2VkLFxuICBpc0J1ZmZlcmVkLFxuICBpc1RpbWVkLFxuICBzZW5kQXN5bmMsXG4gIHJlY3ZBc3luYyxcbiAgc2VsZWN0QXN5bmMsXG4gIHNlbmQsXG4gIHJlY3YsXG4gIHJlY3ZPclRocm93LFxuICBzZWxlY3QsXG4gIGNsb3NlLFxuICB2YWx1ZSxcbiAgY2hhbm5lbFxufTtcblxuLyoqXG4gKiBVc2VkIGJ5IGNoYW5uZWxzIHRvIHRyYWNrIGV4ZWN1dGlvbiBvZiBvcGVyYXRpb25zIChgc2VuZGAsIGByZWN2YCwgYW5kXG4gKiBgc2VsZWN0YCkuIFRoZXkgcHJvdmlkZSB0d28gcGllY2VzIG9mIGluZm9ybWF0aW9uOiB0aGUgZnVuY3Rpb24gdG8gY2FsbCB3aGVuXG4gKiBhIGBzZW5kYCBvciBgcmVjdmAgdW5ibG9ja3MgKGJlY2F1c2UgYSB2YWx1ZSBnaXZlbiB0byBzZW5kIGhhcyBiZWVuIHJlY2VpdmVkLFxuICogb3IgYSBgcmVjdmAgaGFzIGFjY2VwdGVkIGEgdmFsdWUgdGhhdCBoYXMgYmVlbiBzZW50KSBhbmQgd2hldGhlciBvciBub3QgdGhlXG4gKiBoYW5kbGVyIGlzIHN0aWxsIGFjdGl2ZS5cbiAqXG4gKiBUaGUgZnVuY3Rpb24gaXMgYSBjYWxsYmFjayB0aGF0IGFjdHVhbGx5IGRlZmluZXMgdGhlIGRpZmZlcmVuY2UgYmV0d2VlblxuICogYHtAbGluayBtb2R1bGU6Y2hhbmtvfkNoYW5rby5zZW5kfHNlbmR9YCAvXG4gKiBge0BsaW5rIG1vZHVsZTpjaGFua29+Q2hhbmtvLnJlY3Z8cmVjdn1gIC9cbiAqIGB7QGxpbmsgbW9kdWxlOmNoYW5rb35DaGFua28uc2VsZWN0fHNlbGVjdH1gIGFuZFxuICogYHtAbGluayBtb2R1bGU6Y2hhbmtvfkNoYW5rby5zZW5kQXN5bmN8c2VuZEFzeW5jfWAgL1xuICogYHtAbGluayBtb2R1bGU6Y2hhbmtvfkNoYW5rby5yZWN2QXN5bmN8cmVjdkFzeW5jfWAgL1xuICogYHtAbGluayBtb2R1bGU6Y2hhbmtvfkNoYW5rby5zZWxlY3RBc3luY3xzZWxlY3RBc3luY31gOiB3aGlsZSB0aGUgdW5ibG9ja2VkXG4gKiBjYWxscyB1c2UgdGhlIGNhbGxiYWNrIHBhc3NlZCB0byB0aGUgZnVuY3Rpb24sIGBzZW5kYCwgYHJlY3ZgLCBhbmQgYHNlbGVjdGBcbiAqIHNpbXBseSBjb250aW51ZSB0aGUgcHJvY2VzcyB3aGVyZSBpdCBsZWZ0IG9mZi4gKFRoaXMgaXMgd2h5IGBzZW5kYCwgYHJlY3ZgLFxuICogYW5kIGBzZWxlY3RgIG9ubHkgd29yayBpbnNpZGUgYGFzeW5jYCBmdW5jdGlvbnMgd2l0aCBgYXdhaXRgIGlmIHRoZSByZXR1cm5cbiAqIHZhbHVlIGlzIG5lZWRlZCwgYmVjYXVzZSBvdGhlcndpc2UgdGhlcmUncyBubyBwcm9jZXNzIHRvIGNvbnRpbnVlLilcbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIHByb3ZpZGVkIGFzIHRoZSByZXR1cm4gdmFsdWUgb2YgdGhlIGBjb21taXRgIG1ldGhvZC4gQ2FsbGluZ1xuICogYGNvbW1pdGAgaGFzIG5vIGV4dHJhIGVmZmVjdCB3aXRoIGBzZW5kYCBhbmQgYHJlY3ZgIG9wZXJhdGlvbnMsIGJ1dCBmb3JcbiAqIGBzZWxlY3RgLCBpdCBhbHNvIG1hcmtzIHRoZSBoYW5kbGVyIGFzIG5vIGxvbmdlciBiZWluZyBhY3RpdmUuIFRoaXMgbWVhbnNcbiAqIHRoYXQgb25seSBvbmUgb2YgdGhlIG9wZXJhdGlvbnMgcGFzc2VkIHRvIHNlbGVjdCBjYW4gYmUgY29tcGxldGVkLCBiZWNhdXNlXG4gKiBhZnRlciB0aGUgZmlyc3Qgb25lLCB0aGUgaGFuZGxlciBpcyBubyBsb25nZXIgYWN0aXZlIGFuZCB3aWxsIG5vdCBiZSBhbGxvd2VkXG4gKiB0byBwcm9jZXNzIGEgc2Vjb25kIG9wZXJhdGlvbi5cbiAqXG4gKiBJZiBhIGBzZW5kYCBvciBgcmVjdmAgKG9yIGVxdWl2YWxlbnQgYHNlbGVjdGAgb3BlcmF0aW9uKSBjYW5ub3QgYmVcbiAqIGltbWVkaWF0ZWx5IGNvbXBsZXRlZCBiZWNhdXNlIHRoZXJlIGlzbid0IGEgY29ycmVzcG9uZGluZyBwZW5kaW5nIGByZWN2YCBvclxuICogYHNlbmRgLCB0aGUgaGFuZGxlciBpcyBxdWV1ZWQgdG8gYmUgcnVuIHdoZW4gYSBuZXcgYHJlY3ZgIG9yIGBzZW5kYCBiZWNvbWVzXG4gKiBhdmFpbGFibGUuXG4gKlxuICogQHR5cGVkZWYgSGFuZGxlclxuICogQHByb3BlcnR5IHtib29sZWFufSBhY3RpdmUgV2hldGhlciBvciBub3QgdGhlIG9wZXJhdGlvbiBpcyBzdGlsbCBhY3RpdmUuIEFuXG4gKiAgICAgaW5hY3RpdmUgb3BlcmF0aW9uIGlzIG5vdCBzZXJ2aWNlZCBhbmQgd2lsbCBiZSBjbGVhcmVkIGZyb20gdGhlIHF1ZXVlIG9uXG4gKiAgICAgdGhlIG5leHQgZGlydHkgb3BlcmF0aW9uIHB1cmdlLlxuICogQHByb3BlcnR5IHtmdW5jdGlvbn0gY29tbWl0IE1hcmtzIHRoZSBoYW5kbGVyIGFzIGluYWN0aXZlIChzbyBpdCBkb2Vzbid0IHJ1blxuICogICAgIHR3aWNlKSBhbmQgcmV0dXJucyB0aGUgY2FsbGJhY2sgdG8gYmUgcnVuIHdoZW4gdGhlIG9wZXJhdGlvbiBjb21wbGV0ZXMuXG4gKiBAcHJpdmF0ZVxuICovXG5cbi8qKlxuICogQSBjYWxsYmFjayBmdW5jdGlvbiBydW4gd2hlbiBhIGBzZW5kYCBvciBgcmVjdmAgb3BlcmF0aW9uIGNvbXBsZXRlcy5cbiAqXG4gKiBAY2FsbGJhY2sgSGFuZGxlckNhbGxiYWNrXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSBwcm92aWRlZCBieSB0aGUgY2hhbm5lbC4gSW4gYSBgcmVjdmAsIHRoaXMgaXMgdGhlXG4gKiAgICAgdmFsdWUgcmVjZWl2ZWQgZnJvbSB0aGUgY2hhbm5lbC4gSW4gYSBgc2VuZGAsIHRoaXMgaXMgYHRydWVgIGZvciBhXG4gKiAgICAgc3VjY2Vzc2Z1bCBzZW5kIGFuZCBgZmFsc2VgIGlmIHRoZSBjaGFubmVsIGlzIGNsb3NlZCBiZWZvcmUgdGhlIHNlbmQgY2FuXG4gKiAgICAgY29tcGxldGUuXG4gKiBAcHJpdmF0ZVxuICovXG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuaW1wb3J0IHsgYm94LCBoYW5kbGVTZW5kLCBoYW5kbGVSZWN2LCBpc0JveCB9IGZyb20gXCIuL2hhbmRsZXJcIjtcblxuLyoqXG4gKiBUaGUgbmFtZSBvZiB0aGUgY2hhbm5lbCByZXR1cm5lZCBmcm9tIGBhd2FpdFxuICoge0BsaW5rIG1vZHVsZTpjaGFua29+Q2hhbmtvLnNlbGVjdHxzZWxlY3R9YCBvciBzZW50IHRvIHRoZSBjYWxsYmFjayBpblxuICogYHtAbGluayBtb2R1bGU6Y2hhbmtvfkNoYW5rby5zZWxlY3RBc3luY3xzZWxlY3RBc3luY31gIHdoZW4gdGhlIGRlZmF1bHQgaXNcbiAqIHJldHVybmVkIGFzIGl0cyB2YWx1ZS5cbiAqXG4gKiBUaGlzIG9ubHkgaGFwcGVucyB3aGVuIGFuIGB7QGxpbmsgbW9kdWxlOmNoYW5rb35DaGFua28uc2VsZWN0fHNlbGVjdH0gL1xuICoge0BsaW5rIG1vZHVsZTpjaGFua29+Q2hhbmtvLnNlbGVjdEFzeW5jfHNlbGVjdEFzeW5jfWAgY2FsbCBpcyBwZXJmb3JtZWQsIGFsbFxuICogb3BlcmF0aW9ucyBhcmUgaW5pdGlhbGx5IGJsb2NraW5nLCBhbmQgYSBgZGVmYXVsdGAgb3B0aW9uIGlzIHNlbnQuIFRoZVxuICogaW1tZWRpYXRlIHJlc3BvbnNlIGluIHRoYXQgc2l0dWF0aW9uIGlzIGB7IHZhbHVlOiBvcHRpb25zLmRlZmF1bHQsIGNoYW5uZWw6XG4gKiBERUZBVUxUIH1gLlxuICpcbiAqIEB0eXBlIHtTeW1ib2x9XG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNoYW5rb35DaGFua29cbiAqL1xuY29uc3QgREVGQVVMVCA9IFN5bWJvbChcIkRFRkFVTFRcIik7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBoYW5kbGVyIHVzZWQgZm9yIGBzZWxlY3RgIG9wZXJhdGlvbnMuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjaGFua28vY2hhbm5lbFxuICogQHBhcmFtIHttb2R1bGU6Y2hhbmtvL2NoYW5uZWx+Qm94fSBhY3RpdmUgQSBib3hlZCB2YWx1ZSBpbmRpY2F0aW5nIHdoZXRoZXJcbiAqICAgICB0aGUgaGFuZGxlciBpcyB2YWxpZC4gVGhpcyBpcyBhIGJveGVkIHZhbHVlIGJlY2F1c2UgdGhlIHNlbGVjdC1oYW5kbGluZ1xuICogICAgIGNvZGUgbmVlZHMgdG8gbWFuaXB1bGF0ZSBpdCBkaXJlY3RseS5cbiAqIEBwYXJhbSB7bW9kdWxlOmNoYW5rby9jaGFubmVsfkhhbmRsZXJDYWxsYmFja30gZm4gVGhlIGNhbGxiYWNrIHRvIGJlIHJ1biB3aGVuXG4gKiAgICAgKGFuZCBpZikgdGhlIG9wZXJhdGlvbiBjb21wbGV0ZXMuXG4gKiBAcmV0dXJuIHttb2R1bGU6Y2hhbmtvL2NoYW5uZWx+SGFuZGxlcn0gVGhlIG5ldyBoYW5kbGVyLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gc2VsZWN0SGFuZGxlcihhY3RpdmUsIGZuKSB7XG4gIHJldHVybiBPYmplY3QuY3JlYXRlKG51bGwsIHtcbiAgICBhY3RpdmU6IHtcbiAgICAgIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIGFjdGl2ZS52YWx1ZTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgY29tbWl0OiB7XG4gICAgICB2YWx1ZTogKCkgPT4ge1xuICAgICAgICBhY3RpdmUudmFsdWUgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIGZuO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHJhbmRvbWx5IHNodWZmbGVkIGFycmF5IGNvbnRhaW5pbmcgb25lIG9mIGVhY2ggaW50ZWdlciB2YWx1ZSBmcm9tXG4gKiBgMGAgdG8gYW4gdXBwZXIgbGltaXQuIEl0IGlzIHVzZWQgdG8gcmFuZG9tbHkgc2VsZWN0IGEgY2hhbm5lbCB0byBiZSBhY3RpdmVcbiAqIHdoZW4gbXVsdGlwbGVzIHVuYmxvY2sgaW4gYSBgc2VsZWN0YCBvcGVyYXRpb24uXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjaGFua28vY2hhbm5lbFxuICogQHBhcmFtIHtudW1iZXJ9IHVwcGVyIFRoZSB1cHBlciBsaW1pdCBvZiB0aGUgYXJyYXkgdmFsdWVzLCBleGNsdXNpdmUuXG4gKiBAcmV0dXJuIHtudW1iZXJbXX0gQW4gYXJyYXkgb2YgaW50ZWdlcnMgZnJvbSBgMGAgdG8gYHVwcGVyIC0gMWAsIHNodWZmbGVkXG4gKiAgICAgaW50byBhIHJhbmRvbSBvcmRlci5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHJhbmRvbUFycmF5KHVwcGVyKSB7XG4gIGNvbnN0IGFycmF5ID0gW107XG4gIGZvciAobGV0IGsgPSAwOyBrIDwgdXBwZXI7IGsrKykge1xuICAgIGFycmF5LnB1c2goayk7XG4gIH1cbiAgZm9yIChsZXQgaiA9IHVwcGVyIC0gMTsgaiA+IDA7IGotLSkge1xuICAgIGNvbnN0IGkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoaiArIDEpKTtcbiAgICBjb25zdCB0ZW1wID0gYXJyYXlbal07XG4gICAgYXJyYXlbal0gPSBhcnJheVtpXTtcbiAgICBhcnJheVtpXSA9IHRlbXA7XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG4vKipcbiAqIEEgcmVzdWx0IHRoYXQgY29tZXMgZnJvbSBgc2VsZWN0YCBvcGVyYXRpb25zLlxuICpcbiAqIEB0eXBlZGVmIFNlbGVjdFJlc3VsdFxuICogQHByb3BlcnR5IHsqfSB2YWx1ZSBJZiB0aGUgYHNlbGVjdGAgb3BlcmF0aW9uIHJlc3VsdGVkIGluIGEgcmVjZWl2ZSwgdGhpcyBpc1xuICogICAgIHRoZSB2YWx1ZSByZWNlaXZlZCBmcm9tIHRoZSBjaGFubmVsLiBJZiBpdCByZXN1bHRlZCBpbiBhIHNlbmQsIHRoaXMgaXNcbiAqICAgICBgdHJ1ZWAgZm9yIGEgc3VjY2Vzc2Z1bCBzZW5kIGFuZCBgZmFsc2VgIGlmIHRoZSBjaGFubmVsIGNsb3NlZCBmaXJzdC5cbiAqIEBwcm9wZXJ0eSB7bW9kdWxlOmNoYW5rby9jaGFubmVsLkNoYW5uZWx9IGNoYW5uZWwgVGhlIGNoYW5uZWwgdXBvbiB3aGljaCB0aGVcbiAqICAgICBzZWxlY3RlZCBvcGVyYXRpb24gaGFwcGVuZWQuXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNoYW5rby9jaGFubmVsXG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIGEgc2VsZWN0IHJlc3VsdCBmcm9tIGl0cyBjb21wb25lbnQgcHJvcGVydGllcy5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNoYW5rby9jaGFubmVsXG4gKiBAcGFyYW0geyp9IHZhbHVlIElmIHRoZSBgc2VsZWN0YCBvcGVyYXRpb24gcmVzdWx0ZWQgaW4gYSByZWNlaXZlLCB0aGlzIGlzXG4gKiAgICAgdGhlIHZhbHVlIHJlY2VpdmVkIGZyb20gdGhlIGNoYW5uZWwuIElmIGl0IHJlc3VsdGVkIGluIGEgc2VuZCwgdGhpcyBpc1xuICogICAgIGB0cnVlYCBmb3IgYSBzdWNjZXNzZnVsIHNlbmQgYW5kIGBmYWxzZWAgaWYgdGhlIGNoYW5uZWwgY2xvc2VkIGZpcnN0LlxuICogQHBhcmFtIHttb2R1bGU6Y2hhbmtvL2NoYW5uZWwuQ2hhbm5lbH0gY2hhbm5lbCBUaGUgY2hhbm5lbCB1cG9uIHdoaWNoIHRoZVxuICogICAgIHNlbGVjdGVkIG9wZXJhdGlvbiBoYXBwZW5lZC5cbiAqIEByZXR1cm4ge21vZHVsZTpjaGFua28vY2hhbm5lbC5TZWxlY3RSZXN1bHR9IFRoZSBwcm9wZXJ0aWVzIHdyYXBwZWQgaW50byBhblxuICogICAgIG9iamVjdCBmb3Igb3V0cHV0LlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gc2VsZWN0UmVzdWx0KHZhbHVlLCBjaGFubmVsKSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5jcmVhdGUobnVsbCksIHsgdmFsdWUsIGNoYW5uZWwgfSk7XG59XG5cbi8qKlxuICogQ29tcGxldGVzIHRoZSBmaXJzdCBvcGVyYXRpb24gYW1vbmcgdGhlIHByb3ZpZGVkIG9wZXJhdGlvbnMgdGhhdCBjb21lc1xuICogYXZhaWxhYmxlLCB3aXRob3V0IGJsb2NraW5nLlxuICpcbiAqIFRoaXMgbWVhbnMgdGhhdCBhIGNhbGwgdG8gYHNlbGVjdEFzeW5jYCBkb2VzIG5vdCBnbyBpbnRvIGFuIGBhd2FpdGBcbiAqIGV4cHJlc3Npb24sIGFuZCBpdCBpcyBub3QgbmVjZXNzYXJ5IHRvIHVzZSBpdCBpbnNpZGUgYSBwcm9jZXNzLiBSYXRoZXIgdGhhblxuICogYmxvY2tpbmcgdW50aWwgYW4gb3BlcmF0aW9uIGNvbXBsZXRlcywgdGhpcyBvbmUgcmV0dXJucyBpbW1lZGlhdGVseSBhbmQgdGhlblxuICogaW52b2tlcyB0aGUgY2FsbGJhY2sgKGlmIHByb3ZpZGVkKSBhcyBzb29uIGFzIG9uZSBvZiB0aGUgc3VwcGxpZWQgb3BlcmF0aW9uc1xuICogY29tcGxldGVzLiBJdCBjYW4gYmUgcmVnYXJkZWQgYXMgYSBub24tYmxvY2tpbmcgdmVyc2lvbiBvZlxuICogYHtAbGluayBtb2R1bGU6Y2hhbmtvfkNoYW5rby5zZWxlY3R8c2VsZWN0fWAuXG4gKlxuICogVGhpcyBmdW5jdGlvbiB1c2VzIGFuIG9wZXJhdGlvbnMgbGlzdCB0aGF0J3MgaWRlbnRpY2FsIHRvIHRoZSBvbmUgdXNlZCBieVxuICogYHtAbGluayBtb2R1bGU6Y2hhbmtvfkNoYW5rby5zZWxlY3R8c2VsZWN0fWAuIEl0J3MgYW4gYXJyYXkgb2YgdmFsdWVzOyBpZiBhXG4gKiB2YWx1ZSBpcyBhIGNoYW5uZWwsIHRoZW4gdGhhdCBvcGVyYXRpb24gaXMgYSB0YWtlIG9uIHRoYXQgY2hhbm5lbCwgd2hpbGUgaWZcbiAqIGl0J3MgYSB0d28tZWxlbWVudCBhcnJheSBvZiBjaGFubmVsIGFuZCB2YWx1ZSwgdGhlbiB0aGF0IG9wZXJhdGlvbiBpcyBhIHB1dFxuICogb2YgdGhhdCB2YWx1ZSBvbnRvIHRoYXQgY2hhbm5lbC4gQWxsIG9wdGlvbnMgdGhhdCBhcmUgYXZhaWxhYmxlIHRvXG4gKiBge0BsaW5rIG1vZHVsZTpjaGFua29+Q2hhbmtvLnNlbGVjdHxzZWxlY3R9YCBhcmUgYWxzbyBhdmFpbGFibGUgaGVyZS5cbiAqXG4gKiBUaGUgY2FsbGJhY2sgaXMgYSBmdW5jdGlvbiBvZiBvbmUgcGFyYW1ldGVyLCB3aGljaCBpbiB0aGlzIGNhc2UgaXMgYW4gb2JqZWN0XG4gKiB3aXRoIGB2YWx1ZWAgYW5kIGBjaGFubmVsYCBwcm9wZXJ0aWVzLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y2hhbmtvfkNoYW5rb1xuICogQHBhcmFtIHtPYmplY3RbXX0gb3BlcmF0aW9ucyBBIGNvbGxlY3Rpb24gb2YgZWxlbWVudHMgdGhhdCBjb3JyZXNwb25kIHRvIHJlY3ZcbiAqICAgICBhbmQgc2VuZCBvcGVyYXRpb25zLiBBIHJlY3Ygb3BlcmF0aW9uIGlzIHNpZ25pZmllZCBieSBhbiBlbGVtZW50IHRoYXQgaXNcbiAqICAgICBhIGNoYW5uZWwgKHdoaWNoIGlzIHRoZSBjaGFubmVsIHRvIGJlIHJlY2VpdmVkIGZyb20pLiBBIHNlbmQgb3BlcmF0aW9uIGlzXG4gKiAgICAgc3BlY2lmaWVkIGJ5IGFuIGVsZW1lbnQgdGhhdCBpcyBpdHNlbGYgYSB0d28tZWxlbWVudCBhcnJheSwgd2hpY2ggaGFzIGFcbiAqICAgICBjaGFubmVsIGZvbGxvd2VkIGJ5IGEgdmFsdWUgKHdoaWNoIGlzIHRoZSBjaGFubmVsIGFuZCB2YWx1ZSB0byBiZSBzZW50KS5cbiAqIEBwYXJhbSB7bW9kdWxlOmNoYW5rb35zZWxlY3RDYWxsYmFja30gY2FsbGJhY2sgQSBmdW5jdGlvbiB0aGF0IGdldHMgaW52b2tlZFxuICogICAgIHdoZW4gb25lIG9mIHRoZSBvcGVyYXRpb25zIGNvbXBsZXRlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gQW4gb3B0aW9uYWwgb2JqZWN0IHdoaWNoIGNhbiBjaGFuZ2UgdGhlIGJlaGF2aW9yXG4gKiAgICAgb2YgYHNlbGVjdEFzeW5jYCB0aHJvdWdoIHR3byBwcm9wZXJ0aWVzLlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5wcmlvcml0eT1mYWxzZV0gSWYgYHRydWVgLCB0aGVuIHRoZSBwcmlvcml0eSBvZlxuICogICAgIG9wZXJhdGlvbnMgdG8gY29tcGxldGUgd2hlbiBtb3JlIHRoYW4gb25lIGlzIGltbWVkaWF0ZWx5IGF2YWlsYWJsZSBpcyBhXG4gKiAgICAgcHJpb3JpdHkgYWNjb3JkaW5nIHRvIHBvc2l0aW9uIHdpdGhpbiB0aGUgb3BlcmF0aW9ucyBhcnJheSAoZWFybGllclxuICogICAgIHBvc2l0aW9ucyBoYXZlIHRoZSBoaWdoZXIgcHJpb3JpdHkpLiBJZiBgZmFsc2VgIG9yIG5vdCBwcmVzZW50LCB0aGVcbiAqICAgICBwcmlvcnR5IG9mIG9wZXJhdGlvbiBjb21wbGV0aW9uIGlzIHJhbmRvbS5cbiAqIEBwYXJhbSB7Kn0gW29wdGlvbnMuZGVmYXVsdF0gSWYgc2V0IGFuZCBhbGwgb2YgdGhlIG9wZXJhdGlvbnMgaW5pdGlhbGx5XG4gKiAgICAgYmxvY2ssIHRoZSBgc2VsZWN0QXN5bmNgIGNhbGxzIGl0cyBjYWxsYmFjayBpbW1lZGlhdGVseSB3aXRoIHRoZSB2YWx1ZSBvZlxuICogICAgIHRoaXMgb3B0aW9uICh0aGUgY2hhbm5lbCB3aWxsIGJlXG4gKiAgICAgYHtAbGluayBtb2R1bGU6Y2hhbmtvfkNoYW5rby5ERUZBVUxUfERFRkFVTFR9KWAuIElmIG5vdCBzZXQsIHRoZVxuICogICAgIGBzZWxlY3RBc3luY2AgY2FsbCB3aWxsIG5vdCBjYWxsIGl0cyBjYWxsYmFjayB1bnRpbCBvbmUgb2YgdGhlIG9wZXJhdGlvbnNcbiAqICAgICBjb21wbGV0ZXMgYW5kIHRoYXQgdmFsdWUgYW5kIGNoYW5uZWwgd2lsbCBiZSB0aGUgb25lcyByZXR1cm5lZC5cbiAqL1xuZnVuY3Rpb24gc2VsZWN0QXN5bmMob3BzLCBjYWxsYmFjayA9ICgpID0+IHt9LCBvcHRpb25zID0ge30pIHtcbiAgY29uc3QgY291bnQgPSBvcHMubGVuZ3RoO1xuICBpZiAoY291bnQgPT09IDApIHtcbiAgICB0aHJvdyBFcnJvcihcInNlbGVjdCBjYWxsZWQgd2l0aCBubyBvcGVyYXRpb25zXCIpO1xuICB9XG5cbiAgY29uc3QgcHJpb3JpdHkgPSAhIW9wdGlvbnMucHJpb3JpdHk7XG4gIGNvbnN0IGluZGljZXMgPSBwcmlvcml0eSA/IFtdIDogcmFuZG9tQXJyYXkoY291bnQpO1xuXG4gIGNvbnN0IGFjdGl2ZSA9IGJveCh0cnVlKTtcblxuICBmdW5jdGlvbiBjcmVhdGVTZWxlY3RIYW5kbGVyKGNoYW5uZWwpIHtcbiAgICByZXR1cm4gc2VsZWN0SGFuZGxlcihhY3RpdmUsIHZhbHVlID0+IHtcbiAgICAgIGNhbGxiYWNrKHNlbGVjdFJlc3VsdCh2YWx1ZSwgY2hhbm5lbCkpO1xuICAgIH0pO1xuICB9XG5cbiAgbGV0IHJlc3VsdDtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAvLyBDaG9vc2UgYW4gb3BlcmF0aW9uLiBJZiBgcHJpb3JpdHlgIGlzIHRydWUgdGhlbiBpdCdzIHRoZSBuZXh0IGluZGV4LFxuICAgIC8vIG90aGVyd2lzZSBpdCdzIHJhbmRvbVxuICAgIGNvbnN0IG9wID0gb3BzW3ByaW9yaXR5ID8gaSA6IGluZGljZXNbaV1dO1xuICAgIGxldCBjaGFubmVsLCB2YWx1ZTtcblxuICAgIC8vIEFwcGx5IGV2ZXJ5IG9wZXJhdGlvbiB0byBpdHMgY2hhbm5lbCwgb25lIGF0IGEgdGltZVxuICAgIGlmIChBcnJheS5pc0FycmF5KG9wKSkge1xuICAgICAgW2NoYW5uZWwsIHZhbHVlXSA9IG9wO1xuICAgICAgcmVzdWx0ID0gaGFuZGxlU2VuZChjaGFubmVsLCB2YWx1ZSwgY3JlYXRlU2VsZWN0SGFuZGxlcihjaGFubmVsKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNoYW5uZWwgPSBvcDtcbiAgICAgIHJlc3VsdCA9IGhhbmRsZVJlY3YoY2hhbm5lbCwgY3JlYXRlU2VsZWN0SGFuZGxlcihjaGFubmVsKSk7XG4gICAgfVxuXG4gICAgLy8gV2UgY2hlY2sgZm9yIGJveCBoZXJlIGJlY2F1c2UgYSBib3ggZnJvbSBhIGNoYW5uZWwgaW5kaWNhdGVzIHRoYXQgdGhlXG4gICAgLy8gdmFsdWUgaXMgaW1tZWRpYXRlbHkgYXZhaWxhYmxlICh0aGF0IHRoZXJlIGlzIG5vIG5lZWQgdG8gYmxvY2sgdG8gZ2V0IHRoZVxuICAgIC8vIHZhbHVlKS4gSWYgdGhpcyBoYXBwZW5zLCB3ZSBleGVjdXRlIHRoZSBjYWxsYmFjayBpbW1lZGlhdGVseSB3aXRoIHRoYXRcbiAgICAvLyB2YWx1ZSBhbmQgY2hhbm5lbCBhbmQgc3RvcCBxdWV1ZWluZyBvdGhlciBvcGVyYXRpb25zLlxuICAgIGlmIChpc0JveChyZXN1bHQpKSB7XG4gICAgICBjYWxsYmFjayhzZWxlY3RSZXN1bHQocmVzdWx0LnZhbHVlLCBjaGFubmVsKSk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICAvLyBJZiBub25lIG9mIHRoZSBvcGVyYWV0aW9ucyBpbW1lZGlhdGVseSByZXR1cm5lZCB2YWx1ZXMgKHRoZXkgYXJlIGFsbFxuICAvLyBibG9ja2VkKSwgYW5kIHdlIGhhdmUgc2V0IGEgZGVmYXVsdCBjaGFubmVsIG9wdGlvbiwgdGhlbiByZXR1cm4gdGhlIHZhbHVlXG4gIC8vIGlmIHRoZSBkZWZhdWx0IGNoYW5uZWwgcmF0aGVyIHRoYW4gd2FpdGluZyBmb3IgdGhlIHF1ZXVlZCBvcGVyYXRpb25zIHRvXG4gIC8vIGNvbXBsZXRlLlxuICBpZiAoXG4gICAgIWlzQm94KHJlc3VsdCkgJiZcbiAgICBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob3B0aW9ucywgXCJkZWZhdWx0XCIpXG4gICkge1xuICAgIGlmIChhY3RpdmUudmFsdWUpIHtcbiAgICAgIGFjdGl2ZS52YWx1ZSA9IGZhbHNlO1xuICAgICAgY2FsbGJhY2soc2VsZWN0UmVzdWx0KG9wdGlvbnMuZGVmYXVsdCwgREVGQVVMVCkpO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIENvbXBsZXRlcyB0aGUgZmlyc3Qgb3BlcmF0aW9uIGFtb25nIHRoZSBwcm92aWRlZCBvcGVyYXRpb25zIHRoYXQgY29tZXNcbiAqIGF2YWlsYWJsZSwgYmxvY2tpbmcgdGhlIHByb2Nlc3MgdW50aWwgdGhlbi5cbiAqXG4gKiBgb3BlcmF0aW9uc2AgaXMgYW4gYXJyYXkgd2hvc2UgZWxlbWVudHMgbXVzdCBiZSBjaGFubmVscyBvciB0d28tZWxlbWVudFxuICogc3ViLWFycmF5cyBvZiBjaGFubmVscyBhbmQgdmFsdWVzLCBpbiBhbnkgY29tYmluYXRpb24uIEFuIG9wZXJhdGlvbiB0aGF0IGlzIGFcbiAqIGNoYW5uZWwgaXMgYSB0YWtlIG9wZXJhdGlvbiBvbiB0aGF0IGNoYW5uZWwuIEFuIG9wZXJhdGlvbiB0aGF0IGlzIGFcbiAqIHR3by1lbGVtZW50IGFycmF5IGlzIGEgcHV0IG9wZXJhdGlvbiBvbiB0aGF0IGNoYW5uZWwgdXNpbmcgdGhhdCB2YWx1ZS5cbiAqIEV4YWN0bHkgb25lIG9mIHRoZXNlIG9wZXJhdGlvbnMgd2lsbCBjb21wbGV0ZSwgYW5kIGl0IHdpbGwgYmUgdGhlIGZpcnN0XG4gKiBvcGVyYXRpb24gdGhhdCB1bmJsb2Nrcy5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uICptdXN0KiBiZSBjYWxsZWQgZnJvbSB3aXRoaW4gYW4gYGFzeW5jYCBmdW5jdGlvbiBhbmQgYXMgcGFydCBvZlxuICogYW4gYGF3YWl0YCBleHByZXNzaW9uIGlmIHRoZSByZXR1cm4gdmFsdWUgaXMgbmVlZGVkLlxuICpcbiAqIFdoZW4gYHNlbGVjdGAgaXMgY29tcGxldGVkIGFuZCBpdHMgcHJvY2VzcyB1bmJsb2NrcywgaXRzIGBhd2FpdGAgZXhwcmVzc2lvblxuICogZXZhbHVhdGVzIHRvIGFuIG9iamVjdCBvZiB0d28gcHJvcGVydGllcy4gVGhlIGB2YWx1ZWAgcHJvcGVydHkgYmVjb21lc1xuICogZXhhY3RseSB3aGF0IHdvdWxkIGhhdmUgYmVlbiByZXR1cm5lZCBieSB0aGUgZXF1aXZhbGVudCBgYXdhaXQgcHV0YCBvciBgYXdhaXRcbiAqIHRha2VgIG9wZXJhdGlvbjogYSBib29sZWFuIGluIHRoZSBjYXNlIG9mIGEgcHV0LCBvciB0aGUgdGFrZW4gdmFsdWUgaW4gdGhlXG4gKiBjYXNlIG9mIGEgdGFrZS4gVGhlIGBjaGFubmVsYCBwcm9wZXJ0eSBpcyBzZXQgdG8gdGhlIGNoYW5uZWwgd2hlcmUgdGhlXG4gKiBvcGVyYXRpb24gYWN0dWFsbHkgdG9vayBwbGFjZS4gVGhpcyB3aWxsIGJlIGVxdWl2YWxlbnQgdG8gdGhlIGNoYW5uZWwgaW4gdGhlXG4gKiBgb3BlcmF0aW9uc2AgYXJyYXkgd2hpY2ggY29tcGxldGVkIGZpcnN0LCBhbGxvd2luZyB0aGUgcHJvY2VzcyB0byB1bmJsb2NrLlxuICpcbiAqIElmIHRoZXJlIGlzIG1vcmUgdGhhbiBvbmUgb3BlcmF0aW9uIGFscmVhZHkgYXZhaWxhYmxlIHRvIGNvbXBsZXRlIHdoZW4gdGhlXG4gKiBjYWxsIHRvIGBzZWxlY3RgIGlzIG1hZGUsIHRoZSBvcGVyYXRpb24gd2l0aCB0aGUgaGlnaGVzdCBwcmlvcml0eSB3aWxsIGJlIHRoZVxuICogb25lIHRvIGNvbXBsZXRlLiBSZWd1bGFybHksIHByaW9yaXR5IGlzIG5vbi1kZXRlcm1pbmlzdGljIChpLmUuLCBpdCdzIHNldFxuICogcmFuZG9tbHkpLiBIb3dldmVyLCBpZiB0aGUgb3B0aW9ucyBvYmplY3QgaGFzIGEgYHByaW9yaXR5YCB2YWx1ZSBzZXQgdG9cbiAqIGB0cnVlYCwgcHJpb3JpdHkgd2lsbCBiZSBhc3NpZ25lZCBpbiB0aGUgb3JkZXIgb2YgdGhlIG9wZXJhdGlvbnMgaW4gdGhlXG4gKiBzdXBwbGllZCBhcnJheS5cbiAqXG4gKiBJZiBhbGwgb2YgdGhlIG9wZXJhdGlvbnMgbXVzdCBibG9jayAoaS5lLiwgdGhlcmUgYXJlIG5vIHBlbmRpbmcgcHV0cyBmb3IgdGFrZVxuICogb3BlcmF0aW9ucywgb3IgdGFrZXMgZm9yIHB1dCBvcGVyYXRpb25zKSwgYSBkZWZhdWx0IHZhbHVlIG1heSBiZSByZXR1cm5lZC5cbiAqIFRoaXMgaXMgb25seSBkb25lIGlmIHRoZXJlIGlzIGEgYGRlZmF1bHRgIHByb3BlcnR5IGluIHRoZSBvcHRpb25zIG9iamVjdCwgYW5kXG4gKiB0aGUgdmFsdWUgb2YgdGhhdCBwcm9wZXJ0eSBiZWNvbWVzIHRoZSB2YWx1ZSByZXR1cm5lZCBieSBgYXdhaXQgc2VsZWN0YC4gVGhlXG4gKiBjaGFubmVsIGlzIHNldCB0byB0aGUgc3BlY2lhbCB2YWx1ZVxuICogYHtAbGluayBtb2R1bGU6Y2hhbmtvfkNoYW5rby5ERUZBVUxUfERFRkFVTFR9YC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNoYW5rb35DaGFua29cbiAqIEBwYXJhbSB7b2JqZWN0W119IG9wZXJhdGlvbnMgQSBjb2xsZWN0aW9uIG9mIGVsZW1lbnRzIHRoYXQgY29ycmVzcG9uZCB0byByZWN2XG4gKiAgICAgYW5kIHNlbmQgb3BlcmF0aW9ucy4gQSByZWN2IG9wZXJhdGlvbiBpcyBzaWduaWZpZWQgYnkgYW4gZWxlbWVudCB0aGF0IGlzXG4gKiAgICAgYSBjaGFubmVsICh3aGljaCBpcyB0aGUgY2hhbm5lbCB0byBiZSB0YWtlbiBmcm9tKS4gQSBzZW5kIG9wZXJhdGlvbiBpc1xuICogICAgIHNwZWNpZmllZCBieSBhbiBlbGVtZW50IHRoYXQgaXMgaXRzZWxmIGEgdHdvLWVsZW1lbnQgYXJyYXksIHdoaWNoIGhhcyBhXG4gKiAgICAgY2hhbm5lbCBmb2xsb3dlZCBieSBhIHZhbHVlICh3aGljaCBpcyB0aGUgY2hhbm5lbCBhbmQgdmFsdWUgdG8gYmUgc2VudCkuXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnM9e31dIEFuIG9wdGlvbmFsIG9iamVjdCB3aGljaCBjYW4gY2hhbmdlIHRoZSBiZWhhdmlvclxuICogICAgIG9mIGBzZWxlY3RgIHRocm91Z2ggdHdvIHByb3BlcnRpZXMuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnByaW9yaXR5PWZhbHNlXSBJZiBgdHJ1ZWAsIHRoZW4gdGhlIHByaW9yaXR5IG9mXG4gKiAgICAgb3BlcmF0aW9ucyB0byBjb21wbGV0ZSB3aGVuIG1vcmUgdGhhbiBvbmUgaXMgaW1tZWRpYXRlbHkgYXZhaWxhYmxlIGlzIGFcbiAqICAgICBwcmlvcml0eSBhY2NvcmRpbmcgdG8gcG9zaXRpb24gd2l0aGluIHRoZSBvcGVyYXRpb25zIGFycmF5IChlYXJsaWVyXG4gKiAgICAgcG9zaXRpb25zIGhhdmUgdGhlIGhpZ2hlciBwcmlvcml0eSkuIElmIGBmYWxzZWAgb3Igbm90IHByZXNlbnQsIHRoZVxuICogICAgIHByaW9ydHkgb2Ygb3BlcmF0aW9uIGNvbXBsZXRpb24gaXMgcmFuZG9tLlxuICogQHBhcmFtIHsqfSBbb3B0aW9ucy5kZWZhdWx0XSBJZiBzZXQgYW5kIGFsbCBvZiB0aGUgb3BlcmF0aW9ucyBpbml0aWFsbHlcbiAqICAgICBibG9jaywgdGhlIGBzZWxlY3RgIGNhbGwgY29tcGxldGVzIGltbWVkaWF0ZWx5IHdpdGggdGhlIHZhbHVlIG9mIHRoaXNcbiAqICAgICBvcHRpb24gKHRoZSBjaGFubmVsIHdpbGwgYmVcbiAqICAgICBge0BsaW5rIG1vZHVsZTpjaGFua29+Q2hhbmtvLkRFRkFVTFR8REVGQVVMVH0pYC4gSWYgbm90IHNldCwgdGhlIGBzZWxlY3RgXG4gKiAgICAgY2FsbCB3aWxsIGJsb2NrIHVudGlsIG9uZSBvZiB0aGUgb3BlcmF0aW9ucyBjb21wbGV0ZXMgYW5kIHRoYXQgdmFsdWUgYW5kXG4gKiAgICAgY2hhbm5lbCB3aWxsIGJlIHRoZSBvbmVzIHJldHVybmVkLlxuICogQHJldHVybiB7UHJvbWlzZTxtb2R1bGU6Y2hhbmtvL2NoYW5uZWwuU2VsZWN0UmVzdWx0Pn0gQSBwcm9taXNlIHRoYXQgd2lsbFxuICogICAgIHJlc29sdmUgdG8gYW4gb2JqZWN0IG9mIHR3byBwcm9wZXJ0aWVzOiBgdmFsdWVgIHdpbGwgY29udGFpbiB0aGUgdmFsdWVcbiAqICAgICB0aGF0IHdvdWxkIGhhdmUgYmVlbiByZXR1cm5lZCBieSB0aGUgY29ycmVzcG9uZGluZ1xuICogICAgIGB7QGxpbmsgbW9kdWxlOmNoYW5rb35DaGFua28uc2VuZHxzZW5kfWAgb3JcbiAqICAgICBge0BsaW5rIG1vZHVsZTpjaGFua29+Q2hhbmtvLnJlY3Z8cmVjdn1gIG9wZXJhdGlvbjsgYW5kIGBjaGFubmVsYCB3aWxsIGJlXG4gKiAgICAgYSByZWZlcmVuY2UgdG8gdGhlIGNoYW5uZWwgdGhhdCBjb21wbGV0ZWQgdGhlIG9wZXJhdGlvbiB0byBhbGxvdyBgc2VsZWN0YFxuICogICAgIHRvIHVuYmxvY2suXG4gKi9cbmZ1bmN0aW9uIHNlbGVjdChvcHMsIG9wdGlvbnMgPSB7fSkge1xuICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgc2VsZWN0QXN5bmMob3BzLCByZXNvbHZlLCBvcHRpb25zKTtcbiAgfSk7XG59XG5cbi8qKlxuICogQSBjb252ZW5pZW5jZSBmdW5jdGlvbiB0byByZWFkIHRoZSB2YWx1ZSBvdXQgb2YgYSBzZWxlY3QgcmVzdWx0LiBUaGlzXG4gKiBmdW5jdGlvbiBpcyBub3QgbmVjZXNzYXJ5IC0gYWZ0ZXIgYWxsLCBpdCdzIGFic29sdXRlbHkgYXMgY29ycmVjdCB0byBzaW1wbHlcbiAqIHVzZSBgcmVzdWx0LnZhbHVlYCBpbnN0ZWFkIG9mIGB2YWx1ZShyZXN1bHQpYCwgYnV0IGl0J3MgcHJvdmlkZWQgZm9yXG4gKiBjb25zaXN0ZW5jeSB3aXRoIHRoZSByZXN0IG9mIHRoZSBmdW5jdGlvbi1jZW50cmljIEFQSS5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNoYW5rb35DaGFua29cbiAqIEBwYXJhbSB7bW9kdWxlOmNoYW5rby9jaGFubmVsLlNlbGVjdFJlc3VsdH0gcmVzdWx0IFRoZSByZXN1bHQgY29taW5nIGZyb20gYVxuICogICAgIHNlbGVjdCBvcGVyYXRpb24uXG4gKiBAcmV0dXJuIHsqfSBUaGUgdmFsdWUgcHJvdmlkZWQgYnkgdGhlIHNlbGVjdCBvcGVyYXRpb24uXG4gKi9cbmZ1bmN0aW9uIHZhbHVlKHJlc3VsdCkge1xuICByZXR1cm4gcmVzdWx0LnZhbHVlO1xufVxuXG4vKipcbiAqIEEgY29udmVuaWVuY2UgZnVuY3Rpb24gdG8gcmVhZCB0aGUgY2hhbm5lbCBvdXQgb2YgYSBzZWxlY3QgcmVzdWx0LiBUaGlzXG4gKiBmdW5jdGlvbiBpcyBub3QgbmVjZXNzYXJ5IC0gYWZ0ZXIgYWxsLCBpdCdzIGFic29sdXRlbHkgYXMgY29ycmVjdCB0byBzaW1wbHlcbiAqIHVzZSBgcmVzdWx0LmNoYW5uZWxgIGluc3RlYWQgb2YgYGNoYW5uZWwocmVzdWx0KWAsIGJ1dCBpdCdzIHByb3ZpZGVkIGZvclxuICogY29uc2lzdGVuY3kgd2l0aCB0aGUgcmVzdCBvZiB0aGUgZnVuY3Rpb24tY2VudHJpYyBBUEkuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjaGFua29+Q2hhbmtvXG4gKiBAcGFyYW0ge21vZHVsZTpjaGFua28vY2hhbm5lbC5TZWxlY3RSZXN1bHR9IHJlc3VsdCBUaGUgcmVzdWx0IGNvbWluZyBmcm9tIGFcbiAqICAgICBzZWxlY3Qgb3BlcmF0aW9uLlxuICogQHJldHVybiB7bW9kdWxlOmNoYW5rby9jaGFubmVsLkNoYW5uZWx9IFRoZSBjaGFubmVsIHVwb24gd2hpY2ggdGhlIHNlbGVjdFxuICogICAgIG9wZXJhdGlvbiBjb21wbGV0ZWQuXG4gKi9cbmZ1bmN0aW9uIGNoYW5uZWwocmVzdWx0KSB7XG4gIHJldHVybiByZXN1bHQuY2hhbm5lbDtcbn1cblxuZXhwb3J0IHsgREVGQVVMVCwgc2VsZWN0LCBzZWxlY3RBc3luYywgdmFsdWUsIGNoYW5uZWwgfTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG4vKipcbiAqIFRoaXMgaXMgdGhlIHBsYWNlIHdoZXJlIHRoZSBuZXcgSlMgdGFza3MgYXJlIGFjdHVhbGx5IGNyZWF0ZWQuIEEgcXVldWUgaXNcbiAqIG1haW50YWluZWQgZm9yIHRoZW0sIGFuZCBhcyBlYWNoIGJhdGNoIG9mIHRhc2tzIGFyZSBjb21wbGV0ZWQsIHRoZSBuZXh0IG9uZXNcbiAqIHJ1bi4gQXMgZWFjaCBwcm9jZXNzIHJ1bnMsIGl0IGFkZHMgdGFza3MgdG8gYmUgcnVuIHRvIHRoZSBxdWV1ZSwgd2hpY2ggYXJlXG4gKiBlYWNoIHJ1biBpbiB0aGVpciBvd24gSlMgdGFzay5cbiAqXG4gKiBUaGUgZnVuY3Rpb24gdGhhdCBzcGF3bnMgdGhlIG5ldyBKUyB0YXNrIGRlcGVuZHMgb24gZW52aXJvbm1lbnQuIFRoZVxuICogYHNldEltbWVkaWF0ZWAgZnVuY3Rpb24gaXMgcHJlZmVycmVkIGFzIGl0J3MgdGhlIGZhc3Rlc3QsIG5vdCB3YWl0aW5nIGZvclxuICogZXZlbnQgcXVldWVzIHRvIGVtcHR5IGJlZm9yZSBzcGF3bmluZyB0aGUgbmV3IHByb2Nlc3MuIEhvd2V2ZXIsIGl0IGlzIG5vdCBKU1xuICogc3RhbmRhcmQgYW5kIGN1cnJlbnRseSBvbmx5IHdvcmtzIGluIElFIGFuZCBOb2RlLiBJZiBgc2V0SW1tZWRpYXRlYCBpc24ndFxuICogYXZhaWxhYmxlLCBhbiBhdHRlbXB0IGlzIG1hZGUgdG8gdXNlIGBNZXNzYWdlQ2hhbm5lbGAncyBgb25NZXNzYWdlYCBpcyB0cmllZFxuICogbmV4dC4gSWYgdGhhdCBpcyBhbHNvIG5vdCBhdmFpbGFibGUsIHRoZW4gYHNldFRpbWVvdXRgIHdpdGggYDBgIGRlbGF5IGlzXG4gKiB1c2VkLCB3aGljaCBpcyBhdmFpbGFibGUgZXZlcnl3aGVyZSBidXQgd2hpY2ggaXMgdGhlIGxlYXN0IHBlcmZvcm1hbnQgb2YgYWxsXG4gKiBvZiB0aGUgc29sdXRpb25zLlxuICpcbiAqIFRoZXJlIGFyZSBvdGhlciBwb3NzaWJpbGl0aWVzIGZvciBjcmVhdGluZyBwcm9jZXNzZXMsIGJ1dCB0aGV5IHdlcmUgcmVqZWN0ZWRcbiAqIGFzIG9ic29sZXRlIChgcHJvY2Vzcy5uZXh0VGlja2AgYW5kIGBvbnJlYWR5c3RhdGVjaGFuZ2VgKSBvciB1bm5lY2Vzc2FyeVxuICogKGB3aW5kb3cucG9zdE1lc3NhZ2VgLCB3aGljaCB3b3JrcyBsaWtlIGBNZXNzYWdlQ2hhbm5lbGAgYnV0IGRvZXNuJ3Qgd29yayBpblxuICogV2ViIFdvcmtlcnMpLlxuICpcbiAqIEl0IGlzIG5vdGFibGUgYW5kIGltcG9ydGFudCB0aGF0IHdlIGFjdCBhcyBnb29kIGNpdGl6ZW5zIGhlcmUuIFRoaXNcbiAqIGRpc3BhdGNoZXIgaXMgY2FwYWJsZSBvZiB0YWtpbmcgY29udHJvbCBvZiB0aGUgSmF2YVNjcmlwdCBlbmdpbmUgdW50aWxcbiAqIHRob3VzYW5kcywgbWlsbGlvbnMsIG9yIG1vcmUgdGFza3MgYXJlIGhhbmRsZWQuIEJ1dCB0aGF0IGNvdWxkIGNhdXNlIHRoZVxuICogc3lzdGVtIGV2ZW50IGxvb3AgdG8gaGF2ZSB0byB3YWl0IGFuIHVuYWNjZXB0YWJsZSBhbW91bnQgb2YgdGltZS4gU28gd2UgbGltaXRcbiAqIG91cnNlbHZlcyB0byBhIGJhdGNoIG9mIHRhc2tzIGF0IGEgdGltZSwgYW5kIGlmIHRoZXJlIGFyZSBzdGlsbCBtb3JlIHRvIGJlXG4gKiBydW4sIHdlIGxldCB0aGUgZXZlbnQgbG9vcCBydW4gYmVmb3JlIHRoYXQgbmV4dCBiYXRjaCBpcyBwcm9jZXNzZWQuXG4gKlxuICogVGhlIGRpc3BhdGNoZXIgaXMgKipnbG9iYWwqKi4gVGhlcmUgaXMgYSBzaW5nbGUgaW5zdGFuY2UgdGhhdCBydW5zIGZvciBhbGxcbiAqIGNoYW5uZWxzIGFuZCBwcm9jZXNzZXMuIFRoaXMgaXMgdGhlIG9ubHkgZWxlbWVudCBvZiB0aGUgc3lzdGVtIHRoYXQgd29ya3NcbiAqIGxpa2UgdGhpcy5cbiAqXG4gKiBAbW9kdWxlIGNoYW5rby9kaXNwYXRjaGVyXG4gKiBAc2VlIG1vZHVsZTpjaGFua29+Q2hhbmtvLmNvbmZpZ1xuICovXG5cbmltcG9ydCB7XG4gIHF1ZXVlIGFzIHEsXG4gIEVNUFRZLFxuICBjb3VudCBhcyBxQ291bnQsXG4gIGRlcXVldWUsXG4gIGVucXVldWVcbn0gZnJvbSBcIm1vZHVsZXMvcXVldWVcIjtcbmNvbnN0IHF1ZXVlID0gcSgpO1xuXG4vKipcbiAqIFRoZSBkaXNwYXRjaCBtZXRob2Qgb3B0aW9uIGluZGljYXRpbmcgdGhhdCBgc2V0SW1tZWRpYXRlYCBzaG91bGQgYmUgdXNlZCB0b1xuICogZGlzcGF0Y2ggdGFza3MuXG4gKlxuICogVGhpcyBpcyB0aGUgZGVmYXVsdCBvcHRpb24uIEZvciBlbnZpcm9ubWVudHMgdGhhdCBkb24ndCBzdXBwb3J0XG4gKiBgc2V0SW1tZWRpYXRlYCwgdGhpcyBmYWxscyBiYWNrIHRvXG4gKiBge0BsaW5rIG1vZHVsZTpjaGFua29+Q2hhbmtvLk1FU1NBR0VfQ0hBTk5FTHxNRVNTQUdFX0NIQU5ORUx9YC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNoYW5rb35DaGFua29cbiAqIEB0eXBlIHtTeW1ib2x9XG4gKiBAc2VlIHtAbGluayBtb2R1bGU6Y2hhbmtvfkNoYW5rby5jb25maWd8Y29uZmlnfVxuICovXG5jb25zdCBTRVRfSU1NRURJQVRFID0gU3ltYm9sKFwiU0VUX0lNTUVESUFURVwiKTtcblxuLyoqXG4gKiBUaGUgZGlzcGF0Y2ggbWV0aG9kIG9wdGlvbiBpbmRpY2F0aW5nIHRoYXQgYSBgTWVzc2FnZUNoYW5uZWxgIHNob3VsZCBiZSB1c2VkXG4gKiB0byBkaXNwYXRjaCB0YXNrcy5cbiAqXG4gKiBGb3IgZW52aXJvbm1lbnRzIHRoYXQgZG9uJ3Qgc3VwcG9ydCBgTWVzc2FnZUNoYW5uZWxgLCB0aGlzIGZhbGxzIGJhY2sgdG9cbiAqIGB7QGxpbmsgbW9kdWxlOmNoYW5rb35DaGFua28uU0VUX1RJTUVPVVR8U0VUX1RJTUVPVVR9YC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNoYW5rb35DaGFua29cbiAqIEB0eXBlIHtTeW1ib2x9XG4gKiBAc2VlIHtAbGluayBtb2R1bGU6Y2hhbmtvfkNoYW5rby5jb25maWd8Y29uZmlnfVxuICovXG5jb25zdCBNRVNTQUdFX0NIQU5ORUwgPSBTeW1ib2woXCJNRVNTQUdFX0NIQU5ORUxcIik7XG5cbi8qKlxuICogVGhlIGRpc3BhdGNoIG1ldGhvZCBvcHRpb24gaW5kaWNhdGluZyB0aGF0IGBzZXRUaW1lb3V0YCBzaG91bGQgYmUgdXNlZCB0b1xuICogZGlzcGF0Y2ggdGFza3MuXG4gKlxuICogVGhpcyBtZXRob2QgaXMgYWx3YXlzIGF2YWlsYWJsZSwgYnV0IGl0J3MgYWxzbyBhbHdheXMgbGVzcyBlZmZpY2llbnQgdGhhbiBhbnlcbiAqIG90aGVyIG1ldGhvZCwgc28gaXQgc2hvdWxkIGJlIHVzZWQgYXMgYSBsYXN0IHJlc29ydC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNoYW5rb35DaGFua29cbiAqIEB0eXBlIHtTeW1ib2x9XG4gKiBAc2VlICB7QGxpbmsgbW9kdWxlOmNoYW5rb35DaGFua28uY29uZmlnfGNvbmZpZ31cbiAqL1xuY29uc3QgU0VUX1RJTUVPVVQgPSBTeW1ib2woXCJTRVRfVElNRU9VVFwiKTtcblxuY29uc3Qgb3B0aW9ucyA9IHtcbiAgYmF0Y2hTaXplOiAxMDI0LFxuICBkaXNwYXRjaE1ldGhvZDogU0VUX0lNTUVESUFURVxufTtcblxubGV0IGRpc3BhdGNoZXIgPSBjcmVhdGVEaXNwYXRjaGVyKCk7XG5sZXQgcnVubmluZyA9IGZhbHNlO1xubGV0IHF1ZXVlZCA9IHRydWU7XG5cbi8qKlxuICogQ3JlYXRlcyBhbmQgcmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgY2FuIGJlIHVzZWQgdG8gZGlzcGF0Y2ggdGFza3MuIFRoZVxuICogZnVuY3Rpb24gdGhhdCBpcyBjcmVhdGVkIGRlcGVuZHMgb24gdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBgZGlzcGF0Y2hNZXRob2RgXG4gKiB0aGF0IGNhbiBiZSBzZXQgd2l0aCBge0BsaW5rIG1vZHVsZTpjaGFua29+Q2hhbmtvLmNvbmZpZ3xjb25maWd9YC5cbiAqXG4gKiBAcmV0dXJuIEEgZGlzcGF0Y2hlciBmdW5jdGlvbiB1c2luZyB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGRpc3BhdGNoIG1ldGhvZC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZURpc3BhdGNoZXIoKSB7XG4gIHN3aXRjaCAoY2FsY0Rpc3BhdGNoTWV0aG9kKCkpIHtcbiAgICAvLyBXZSBwcmVmZXIgYHNldEltbWVkaWF0ZWAgaWYgaXQncyBhdmFpbGFibGUsIGJ1dCBpdCdzIG9ubHkgYXZhaWxhYmxlIGluXG4gICAgLy8gTm9kZSBhbmQgc29tZSBvbGQgYnJvd3NlcnMuXG4gICAgY2FzZSBTRVRfSU1NRURJQVRFOlxuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgaWYgKCEocXVldWVkICYmIHJ1bm5pbmcpKSB7XG4gICAgICAgICAgcXVldWVkID0gdHJ1ZTtcbiAgICAgICAgICBzZXRJbW1lZGlhdGUocHJvY2Vzc1Rhc2tzKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgIC8vIE1vc3QgbW9kZXJuIGJyb3dzZXJzIGltcGxlbWVudCBgTWVzc2FnZUNoYW5uZWxgLiBUaGlzIGlzIHRoZSBwcmVmZXJyZWRcbiAgICAvLyBtZXRob2QgaW4gYnJvd3NlciBlbnZpcm9ubWVudHMgd2hlcmUgYHNldEltbWVkaWF0ZWAgaXNuJ3QgYXZhaWxhYmxlLlxuICAgIGNhc2UgTUVTU0FHRV9DSEFOTkVMOiB7XG4gICAgICBjb25zdCBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9ICgpID0+IHByb2Nlc3NUYXNrcygpO1xuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgaWYgKCEocXVldWVkICYmIHJ1bm5pbmcpKSB7XG4gICAgICAgICAgcXVldWVkID0gdHJ1ZTtcbiAgICAgICAgICBjaGFubmVsLnBvcnQyLnBvc3RNZXNzYWdlKDApO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIElmIGFsbCBlbHNlIGZhaWxzLCBqdXN0IHVzZSBgc2V0VGltZW91dGAuIEl0J3MgYSBsaXR0bGUgc2xvd2VyIHRoYW4gdGhlXG4gICAgLy8gb3RoZXIgbWV0aG9kcywgYnV0IGl0J3MgYXZhaWxhYmxlIGV2ZXJ5d2hlcmUuXG4gICAgY2FzZSBTRVRfVElNRU9VVDpcbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGlmICghKHF1ZXVlZCAmJiBydW5uaW5nKSkge1xuICAgICAgICAgIHF1ZXVlZCA9IHRydWU7XG4gICAgICAgICAgc2V0VGltZW91dChwcm9jZXNzVGFza3MsIDApO1xuICAgICAgICB9XG4gICAgICB9O1xuICB9XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgYWN0dWFsIGRpc3BhdGNoIG1ldGhvZCBiYXNlZCBvbiB0aGUgY3VycmVudCBkaXNwYXRjaCBtZXRob2RcbiAqIHNldHRpbmcgYW5kIGVudmlyb25tZW50YWwgYXZhaWxhYmlsaXR5LlxuICpcbiAqIFRoZSBkaXNwYXRjaCBtZXRob2QgaXMgc3RvcmVkIHJhdywgc28gdGhpcyBmdW5jdGlvbiBpcyBuZWNlc3NhcnkgdG8gdGFrZVxuICogZW52aXJvbm1lbnQgaW50byBhY2NvdW50LiBGb3IgZXhhbXBsZSwgaWYgd2UncmUgcnVubmluZyBpbiBhIG1vZGVybiBicm93c2VyXG4gKiAod2hpY2ggZG9lcyBub3QgaGF2ZSBgc2V0SW1tZWRpYXRlYCksXG4gKiBge0BsaW5rIG1vZHVsZTpjaGFua29+Q2hhbmtvLlNFVF9JTU1FRElBVEV8U0VUX0lNTUVESUFURX1gIGNhbiBzdGlsbCBiZVxuICogcmVjb3JkZWQgYXMgdGhlIGRpc3BhdGNoIG1ldGhvZCwgYnV0IHRoaXMgZnVuY3Rpb24gd2lsbCByZXR1cm5cbiAqIGB7QGxpbmsgbW9kdWxlOmNoYW5rb35DaGFua28uTUVTU0FHRV9DSEFOTkVMfE1FU1NBR0VfQ0hBTk5FTH1gLlxuICpcbiAqIEByZXR1cm4ge1N5bWJvbH0gVGhlIGRpc3BhdGNoIG1ldGhvZCB0byB1c2UgYmFzZWQgb24gc2V0dGluZyBhbmQgZW52aXJvbm1lbnQuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjYWxjRGlzcGF0Y2hNZXRob2QoKSB7XG4gIHN3aXRjaCAob3B0aW9ucy5kaXNwYXRjaE1ldGhvZCkge1xuICAgIGNhc2UgTUVTU0FHRV9DSEFOTkVMOlxuICAgICAgaWYgKHR5cGVvZiBNZXNzYWdlQ2hhbm5lbCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICByZXR1cm4gTUVTU0FHRV9DSEFOTkVMO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFNFVF9USU1FT1VUO1xuXG4gICAgY2FzZSBTRVRfVElNRU9VVDpcbiAgICAgIHJldHVybiBTRVRfVElNRU9VVDtcblxuICAgIGRlZmF1bHQ6XG4gICAgICBpZiAodHlwZW9mIHNldEltbWVkaWF0ZSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICByZXR1cm4gU0VUX0lNTUVESUFURTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgTWVzc2FnZUNoYW5uZWwgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgcmV0dXJuIE1FU1NBR0VfQ0hBTk5FTDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBTRVRfVElNRU9VVDtcbiAgfVxufVxuXG4vKipcbiAqIFRoZSBoZWFydCBvZiB0aGUgZGlzcGF0Y2ggcHJvY2VzcywgdGhpcyBpcyB0aGUgZnVuY3Rpb24gcnVuIGJ5IHRoZSBkaXNwYXRjaFxuICogZnVuY3Rpb24gaW4gb3JkZXIgdG8gYWN0dWFsbHkgcnVuIHF1ZXVlZCB0YXNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBwcm9jZXNzVGFza3MoKSB7XG4gIHJ1bm5pbmcgPSB0cnVlO1xuICBxdWV1ZWQgPSBmYWxzZTtcbiAgbGV0IGNvdW50ID0gMDtcblxuICBmb3IgKDs7KSB7XG4gICAgY29uc3QgdGFzayA9IGRlcXVldWUocXVldWUpO1xuICAgIGlmICh0YXNrID09PSBFTVBUWSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgdGFzaygpO1xuXG4gICAgaWYgKGNvdW50ID49IG9wdGlvbnMuYmF0Y2hTaXplKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgY291bnQrKztcblxuICAgIHJ1bm5pbmcgPSBmYWxzZTtcbiAgICBpZiAocUNvdW50KHF1ZXVlKSkge1xuICAgICAgZGlzcGF0Y2hlcigpO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIENyZWF0ZXMgYW5kIGFzc2lnbnMgdGhlIGdsb2JhbCBkaXNwYXRjaCBmdW5jdGlvbiBiYXNlZCBvbiBkaXNwYXRjaCBtZXRob2RcbiAqIHNldHRpbmcgYW5kIGVudmlyb25tZW50YWwgYXZhaWxhYmlsaXR5LlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHNldERpc3BhdGNoZXIoKSB7XG4gIGRpc3BhdGNoZXIgPSBjcmVhdGVEaXNwYXRjaGVyKCk7XG59XG5cbi8qKlxuICogQHR5cGVkZWYge29iamVjdH0gRGlzcGF0Y2hlckNvbmZpZ1xuICogQHByb3BlcnR5IHtudW1iZXJ9IGJhdGNoU2l6ZSBUaGUgbWF4aW11bSBudW1iZXIgb2YgdGFza3MgdGhhdCB0aGUgZGlzcGF0Y2hlclxuICogICAgIHdpbGwgcnVuIGluIGEgc2luZ2xlIGJhdGNoLlxuICogQHByb3BlcnR5IHtTeW1ib2x9IGRpc3BhdGNoTWV0aG9kIFRoZSBtZXRob2QgdXNlZCB0byBkaXNwYXRjaCBhIHByb2Nlc3MgaW50b1xuICogICAgIGEgc2VwYXJhdGUgbGluZSBvZiBleGVjdXRpb24uXG4gKi9cblxuLyoqXG4gKiBTZXRzIG9uZSBvciBtb3JlIG9mIHRoZSBkaXNwYXRjaGVyIGNvbmZpZ3VyYXRpb24gb3B0aW9ucy5cbiAqXG4gKiBUaGlzIGlzIGFkdmFuY2VkIHNldHRpbmcgZm9yIHRoZSBkaXNwYXRjaGVyIHRoYXQgaXMgcmVzcG9uc2libGUgZm9yIHF1ZXVlaW5nXG4gKiB1cCBjaGFubmVsIG9wZXJhdGlvbnMgYW5kIHByb2Nlc3Nlcy4gSXQgaXMgbGlrZWx5IHRoYXQgdGhpcyBmdW5jdGlvbiB3aWxsXG4gKiBuZXZlciBuZWVkIHRvIGJlIGNhbGxlZCBpbiBub3JtYWwgb3BlcmF0aW9uLlxuICpcbiAqIElmIGFueSByZWNvZ25pemVkIG9wdGlvbnMgYXJlIHNwZWNpZmllZCBpbiB0aGUgb3B0aW9ucyBvYmplY3QgcGFzc2VkIHRvXG4gKiBgY29uZmlnYCwgdGhlbiB0aGUgb3B0aW9uIGlzIHNldCB0byB0aGUgdmFsdWUgc2VudCBpbi4gUHJvcGVydGllcyB0aGF0IGFyZW4ndFxuICogYW55IG9mIHRoZXNlIG9wdGlvbnMgYXJlIGlnbm9yZWQsIGFuZCBhbnkgb2YgdGhlc2Ugb3B0aW9ucyB0aGF0IGRvIG5vdCBhcHBlYXJcbiAqIGluIHRoZSBwYXNzZWQgb2JqZWN0IGFyZSBsZWZ0IHdpdGggdGhlaXIgY3VycmVudCB2YWx1ZXMuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjaGFua29+Q2hhbmtvXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0cyBBIG1hcHBpbmcgb2Ygb3B0aW9ucyB0byB0aGVpciBuZXcgdmFsdWVzLiBFeHRyYSB2YWx1ZXNcbiAqICAgICAocHJvcGVydGllcyB0aGF0IGFyZSBub3Qgb3B0aW9ucykgYXJlIGlnbm9yZWQuXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdHMuYmF0Y2hTaXplXSBUaGUgbWF4aW11bSBudW1iZXIgb2YgdGFza3MgdGhhdCB0aGVcbiAqICAgICBkaXNwYXRjaGVyIHdpbGwgcnVuIGluIGEgc2luZ2xlIGJhdGNoIChpbml0aWFsbHksIHRoaXMgaXMgMTAyNCkuIElmIHRoZVxuICogICAgIG51bWJlciBvZiBwZW5kaW5nIHRhc2tzIGV4Y2VlZHMgdGhpcywgdGhlIHJlbWFpbmluZyBhcmUgbm90IGRpc2NhcmRlZC5cbiAqICAgICBUaGV5J3JlIHNpbXBseSBydW4gYXMgcGFydCBvZiBhbm90aGVyIGJhdGNoIGFmdGVyIHRoZSBjdXJyZW50IGJhdGNoXG4gKiAgICAgY29tcGxldGVzLlxuICogQHBhcmFtIHtTeW1ib2x9IFtvcHRzLmRpc3BhdGNoTWV0aG9kXSBUaGUgbWV0aG9kIHVzZWQgdG8gZGlzcGF0Y2ggYSBwcm9jZXNzXG4gKiAgICAgaW50byBhIHNlcGFyYXRlIGxpbmUgb2YgZXhlY3V0aW9uLiBQb3NzaWJsZSB2YWx1ZXMgYXJlXG4gKiAgICAgYHtAbGluayBtb2R1bGU6Y2hhbmtvfkNoYW5rby5TRVRfSU1NRURJQVRFfFNFVF9JTU1FRElBVEV9YCxcbiAqICAgICBge0BsaW5rIG1vZHVsZTpjaGFua29+Q2hhbmtvLk1FU1NBR0VfQ0hBTk5FTHxNRVNTQUdFX0NIQU5ORUx9YCwgb3JcbiAqICAgICBge0BsaW5rIG1vZHVsZTpjaGFua29+Q2hhbmtvLlNFVF9USU1FT1VUfFNFVF9USU1FT1VUfWAsIHdpdGggdGhlIGluaXRpYWxcbiAqICAgICBiZWluZyBge0BsaW5rIG1vZHVsZTpjaGFua29+Q2hhbmtvLlNFVF9JTU1FRElBVEV8U0VUX0lNTUVESUFURX1gLiBJZiBhXG4gKiAgICAgbWV0aG9kIGlzIHNldCBidXQgaXMgbm90IGF2YWlsYWJsZSBpbiB0aGF0IGVudmlyb25tZW50LCB0aGVuIGl0IHdpbGxcbiAqICAgICBzaWxlbnRseSBmYWxsIGJhY2sgdG8gdGhlIG5leHQgbWV0aG9kIHRoYXQgaXMgYXZhaWxhYmxlLlxuICogQHJldHVybiB7bW9kdWxlOmNoYW5rby9kaXNwYXRjaGVyfkRpc3BhdGNoZXJDb25maWd9IFRoZSBjb25maWd1cmF0aW9uXG4gKiAgICAgc2V0dGluZ3MgZm9yIHRoZSBkaXNwYXRjaGVyIGFmdGVyIGFueSBuZXcgdmFsdWVzIGhhdmUgYmVlbiBzZXQuXG4gKi9cbmZ1bmN0aW9uIGNvbmZpZyhvcHRzID0ge30pIHtcbiAgZm9yIChjb25zdCBrZXkgaW4gb3B0aW9ucykge1xuICAgIGlmIChrZXkgaW4gb3B0cykge1xuICAgICAgb3B0aW9uc1trZXldID0gb3B0c1trZXldO1xuXG4gICAgICBpZiAoa2V5ID09PSBcImRpc3BhdGNoTWV0aG9kXCIpIHtcbiAgICAgICAgc2V0RGlzcGF0Y2hlcigpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucyk7XG59XG5cbi8qKlxuICogUXVldWVzIGEgdGFzayB0byBiZSBydW4gYW5kIHN0YXJ0cyB0aGUgZGlzcGF0Y2ggcHJvY2Vzcy5cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSB0YXNrIEEgdGFzayB0byBiZSBxdWV1ZWQgYW5kIHJ1biB0aGUgbmV4dCB0aW1lIGEgYmF0Y2ggb2ZcbiAqICAgICB0YXNrcyBpcyBydW4uXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBkaXNwYXRjaCh0YXNrKSB7XG4gIGVucXVldWUocXVldWUsIHRhc2spO1xuICBkaXNwYXRjaGVyKCk7XG59XG5cbmV4cG9ydCB7IFNFVF9JTU1FRElBVEUsIE1FU1NBR0VfQ0hBTk5FTCwgU0VUX1RJTUVPVVQsIGNvbmZpZywgZGlzcGF0Y2ggfTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG4vKipcbiAqIFByb3ZpZGVzIHNtYWxsIHV0aWxpdHkgZnVuY3Rpb25zIHRvIG1ha2UgaXQgZWFzaWVyIHRvIGludGVyYWN0IHdpdGggYXN5bmNcbiAqIGZ1bmN0aW9ucyBhcyBwcm9jZXNzZXMuXG4gKlxuICogQG1vZHVsZSBjaGFua28vcHJvY2Vzc1xuICogQHByaXZhdGVcbiAqL1xuXG5pbXBvcnQgeyB0aW1lZENoYW4sIHJlY3ZBc3luYyB9IGZyb20gXCJtb2R1bGVzL2NoYW5uZWxcIjtcblxuLyoqXG4gKiBCbG9ja3MgdGhlIHByb2Nlc3MgZm9yIHRoZSBzcGVjaWZpZWQgdGltZSAoaW4gbWlsbGlzZWNvbmRzKSBhbmQgdGhlbiB1bmJsb2Nrc1xuICogaXQuXG4gKlxuICogVGhpcyBpbXBsZW1lbnRzIGEgZGVsYXksIGJ1dCBvbmUgdGhhdCdzIHN1cGVyaW9yIHRvIG90aGVyIGtpbmRzIG9mIGRlbGF5c1xuICogKGBzZXRUaW1lb3V0YCwgZXRjLikgYmVjYXVzZSBpdCBibG9ja3MgdGhlIHByb2Nlc3MgYW5kIGFsbG93cyB0aGUgZGlzcGF0Y2hlclxuICogdG8gYWxsb3cgb3RoZXIgcHJvY2Vzc2VzIHRvIHJ1biB3aGlsZSB0aGlzIG9uZSB3YWl0cy4gVGhlIGRlZmF1bHQgZGVsYXkgaXMgMCxcbiAqIHdoaWNoIHdpbGwgcmVsZWFzZSB0aGUgcHJvY2VzcyB0byBhbGxvdyBvdGhlcnMgdG8gcnVuIGFuZCB0aGVuIGltbWVkaWF0ZWx5XG4gKiByZS1xdWV1ZSBpdC5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uICptdXN0KiBiZSBjYWxsZWQgZnJvbSB3aXRoaW4gYW4gYGFzeW5jYCBmdW5jdGlvbiBhbmQgYXMgcGFydCBvZlxuICogYW4gYGF3YWl0YCBleHByZXNzaW9uLlxuICpcbiAqIFdoZW4gdGhpcyBmdW5jdGlvbiBjb21wbGV0ZXMgYW5kIGl0cyBwcm9jZXNzIHVuYmxvY2tzLCB0aGUgYGF3YWl0YCBleHByZXNzaW9uXG4gKiBkb2Vzbid0IHRha2Ugb24gYW55IG1lYW5pbmdmdWwgdmFsdWUuIFRoZSBwdXJwb3NlIG9mIHRoaXMgZnVuY3Rpb24gaXMgc2ltcGx5XG4gKiB0byBkZWxheSwgbm90IHRvIGNvbW11bmljYXRlIGFueSBkYXRhLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y2hhbmtvfkNoYW5rb1xuICogQHBhcmFtIHtudW1iZXJ9IFtkZWxheT0wXSB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0aGF0IHRoZSBwcm9jZXNzIHdpbGxcbiAqICAgICBibG9jayBmb3IuIEF0IHRoZSBlbmQgb2YgdGhhdCB0aW1lLCB0aGUgcHJvY2VzcyBpcyBhZ2FpbiBlbGlnaWJsZSB0byBiZVxuICogICAgIHJ1biBieSB0aGUgZGlzcGF0Y2hlci4gSWYgdGhpcyBpcyBtaXNzaW5nIG9yIHNldCB0byBgMGAsIHRoZSBwcm9jZXNzIHdpbGxcbiAqICAgICBjZWRlIGV4ZWN1dGlvbiB0byB0aGUgbmV4dCBvbmUgYnV0IGltbWVkaWF0ZWx5IHJlcXVldWUgaXRzZWxmIHRvIGJlIHJ1blxuICogICAgIGFnYWluLlxuICogQHJldHVybiB7UHJvbWlzZX0gQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBubyBtZWFuaW5nZnVsIHJlc3VsdCB3aGVuIHRoZVxuICogICAgIHRpbWUgaGFzIGVsYXBzZWQuXG4gKi9cbmZ1bmN0aW9uIHNsZWVwKGRlbGF5ID0gMCkge1xuICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgY29uc3QgY2ggPSB0aW1lZENoYW4oZGVsYXkpO1xuICAgIHJlY3ZBc3luYyhjaCwgcmVzb2x2ZSk7XG4gIH0pO1xufVxuXG4vKipcbiAqIEludm9rZXMgYW4gYXN5bmMgZnVuY3Rpb24gYWN0aW5nIGFzIGEgcHJvY2Vzcy5cbiAqXG4gKiBUaGlzIGlzIHB1cmVseSBhIGNvbnZlbmllbmNlIGZ1bmN0aW9uLCBkcml2ZW4gYnkgdGhlIGZhY3QgdGhhdCBpdCdzIG5lY2Vzc2FyeVxuICogdG8gdXNlIGFuIElJRkUgdG8gaW52b2tlIGFuIGFub255bW91cyBhc3luYyBmdW5jdGlvbiwgYW5kIHRoYXQncyBub3QgdmVyeVxuICogYWVzdGhldGljYWxseSBwbGVhc2luZy4gSXQgZG9lcyBubyBtb3JlIHRoYW4gaW52b2tlIHRoZSBwYXNzZWQgZnVuY3Rpb24sIGJ1dFxuICogdGhhdCBhdCBsZWFzdCByZWxlYXNlcyB1cyBmcm9tIHRoZSBuZWVkIHRvIHB1dCB0aGUgZW1wdHkgcGFyZW50aGVzZXMgYWZ0ZXJcbiAqIHRoZSBmdW5jdGlvbiBkZWZpbml0aW9uLlxuICpcbiAqIEEgbmFtZWQgYXN5bmMgZnVuY3Rpb24gY2FuIHNpbXBseSBiZSBpbnZva2VkICh3aXRob3V0IGJlaW5nIGFuIElJRkUpIGFuZFxuICogZG9lc24ndCBiZW5lZml0IGZyb20gdGhpcyBjb252ZW5pZW5jZS5cbiAqXG4gKiBBbm9ueW1vdXMgcHJvY2VzcyB3aXRob3V0IGBnb2A6XG4gKiBgYGBcbiAqIChhc3luYyAoKSA9PiB7XG4gKiAgIC4uLiBkbyBzb21lIHByb2Nlc3Mgc3R1ZmYgaGVyZSAuLi5cbiAqIH0pKCk7XG4gKiBgYGBcbiAqIEFub255bW91cyBwcm9jZXNzIHdpdGggYGdvYDpcbiAqIGBgYFxuICogZ28oYXN5bmMgKCkgPT4ge1xuICogICAuLi4gZG8gc29tZSBwcm9jZXNzIHN0dWZmIGhlcmUgLi4uXG4gKiB9KTtcbiAqIGBgYFxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y2hhbmtvfkNoYW5rb1xuICogQHBhcmFtIHtmdW5jdGlvbn0gZm4gVGhlIGFzeW5jIGZ1bmN0aW9uIGJlaW5nIHVzZWQgYXMgYSBwcm9jZXNzLlxuICogQHBhcmFtIHsuLi4qfSBhcmdzIEFyZ3VtZW50cyB0aGF0IGFyZSBzZW50IHRvIHRoZSBhc3luYyBmdW5jdGlvbiB3aGVuIGl0J3NcbiAqICAgICBpbnZva2VkLlxuICogQHJldHVybiB7UHJvbWlzZX0gVGhlIHByb21pc2UgcmV0dXJuZWQgYnkgdGhlIGFzeW5jIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBnbyhmbiwgLi4uYXJncykge1xuICByZXR1cm4gZm4oLi4uYXJncyk7XG59XG5cbmV4cG9ydCB7IHNsZWVwLCBnbyB9O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG5cbi8qKlxuICogUHJvdG9jb2xzIGZvciBpdGVyYXRpb24gYW5kIHJlZHVjdGlvbi5cbiAqXG4gKiBUaGUgbmFtZXMgZm9yIHRoZXNlIHByb3RvY29scyBjYW1lIGZyb20gYSBkaXNjdXNzaW9uIHRocmVhZFxuICogKHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vY29nbml0ZWN0LWxhYnMvdHJhbnNkdWNlcnMtanMvaXNzdWVzLzIwfSkgZnJvbSBhXG4gKiB0aW1lIHdoZW4gdHJhbnNkdWNlcnMgd2VyZSB2ZXJ5IG11Y2ggaW4gdGhlIGZvcmVmcm9udC4gSXQncyB0aGUgY2xvc2VzdCB0aGluZ1xuICogdGhlcmUgaXMgdG8gYSBzdGFuZGFyZCwgc28gaXQgd2FzIGFkb3B0ZWQgaGVyZS5cbiAqXG4gKiBUaGVzZSBhcmUgdGhlIHNhbWUgc3ltYm9scyBhcyBhdmFpbGFibGUgaW4gbXkgdHJhbnNkdWNlciBsaWJyYXJ5LiBUaGV5IGFyZVxuICogcHVibGljbHkgYXZhaWxhYmxlIGZyb20gdGhlcmUuXG4gKlxuICogQG1vZHVsZSBjaGFua28vcHJvdG9jb2xcbiAqIEBwcml2YXRlXG4gKi9cblxuLyoqXG4gKiBUaGUgbWFwcGluZyBvZiBwcm90b2NvbCBuYW1lcyB0byB0aGVpciByZXNwZWN0aXZlIHByb3BlcnR5IGtleSBuYW1lcy4gVGhlXG4gKiB2YWx1ZXMgb2YgdGhpcyBtYXAgd2lsbCBkZXBlbmQgb24gd2hldGhlciBzeW1ib2xzIGFyZSBhdmFpbGFibGUuXG4gKlxuICogQHR5cGVkZWYge29iamVjdH0gcHJvdG9jb2xNYXBcbiAqIEBwcm9wZXJ0eSB7U3ltYm9sfSBpbml0IFRoZSBgdHJhbnNkdWNlci9pbml0YCBwcm90b2NvbC4gVGhpcyBpcyB1c2VkXG4gKiAgICAgdG8gbWFyayBmdW5jdGlvbnMgdGhhdCBpbml0aWFsaXplIGEgdGFyZ2V0IGNvbGxlY3Rpb24gYmVmb3JlIGFkZGluZyBpdGVtc1xuICogICAgIHRvIGl0LlxuICogQHByb3BlcnR5IHtTeW1ib2x9IHN0ZXAgVGhlIGB0cmFuc2R1Y2VyL3N0ZXBgIHByb3RvY29sLiBUaGlzIGlzIHVzZWRcbiAqICAgICB0byBtYXJrIGZ1bmN0aW9ucyB0aGF0IGFyZSB1c2VkIGluIHRoZSB0cmFuc2R1Y2VyJ3Mgc3RlcCBwcm9jZXNzLCB3aGVyZVxuICogICAgIG9iamVjdHMgYXJlIGFkZGVkIHRvIHRoZSB0YXJnZXQgY29sbGVjdGlvbiBvbmUgYXQgYSB0aW1lLlxuICogQHByb3BlcnR5IHtTeW1ib2x9IHJlc3VsdCBUaGUgYHRyYW5zZHVjZXIvcmVzdWx0YCBwcm90b2NvbC4gVGhpcyBpc1xuICogICAgIHVzZWQgdG8gbWFyayBmdW5jdGlvbnMgdGhhdCB0YWtlIHRoZSBmaW5hbCByZXN1bHQgb2YgdGhlIHN0ZXAgcHJvY2VzcyBhbmRcbiAqICAgICByZXR1cm4gdGhlIGZpbmFsIGZvcm0gdG8gYmUgb3V0cHV0LiBUaGlzIGlzIG9wdGlvbmFsOyBpZiB0aGUgdHJhbnNkdWNlclxuICogICAgIGRvZXMgbm90IHdhbnQgdG8gdHJhbnNmb3JtIHRoZSBmaW5hbCByZXN1bHQsIGl0IHNob3VsZCBqdXN0IHJldHVybiB0aGVcbiAqICAgICByZXN1bHQgb2YgaXRzIGNoYWluZWQgdHJhbnNkdWNlcidzIGByZXN1bHRgIGZ1bmN0aW9uLlxuICogQHByb3BlcnR5IHtTeW1ib2x9IHJlZHVjZWQgVGhlIGB0cmFuc2R1Y2VyL3JlZHVjZWRgIHByb3RvY29sLiBUaGVcbiAqICAgICBwcmVzZW5jZSBvZiB0aGlzIGtleSBvbiBhbiBvYmplY3QgaW5kaWNhdGVzIHRoYXQgaXRzIHRyYW5zZm9ybWF0aW9uIGhhc1xuICogICAgIGJlZW4gY29tcGxldGVkLiBJdCBpcyB1c2VkIGludGVybmFsbHkgdG8gbWFyayBjb2xsZWN0aW9ucyB3aG9zZVxuICogICAgIHRyYW5zZm9ybWF0aW9ucyBjb25jbHVkZSBiZWZvcmUgZXZlcnkgb2JqZWN0IGlzIGl0ZXJhdGVkIG92ZXIgKGFzIGluXG4gKiAgICAgYHtAbGluayB4ZHVjZS50YWtlfWAgdHJhbnNkdWNlcnMuKSBJdCBpcyBvZiBsaXR0bGUgdXNlIGJleW9uZCB0cmFuc2R1Y2VyXG4gKiAgICAgYXV0aG9yaW5nLlxuICogQHByb3BlcnR5IHtTeW1ib2x9IHZhbHVlIFRoZSBgdHJhbnNkdWNlci92YWx1ZWAgcHJvdG9jb2wuIFRoaXMgaXNcbiAqICAgICB1c2VkIGludGVybmFsbHkgdG8gbWFyayBwcm9wZXJ0aWVzIHRoYXQgY29udGFpbiB0aGUgdmFsdWUgb2YgYSByZWR1Y2VkXG4gKiAgICAgdHJhbnNmb3JtYXRpb24uIEl0IGlzIG9mIGxpdHRsZSB1c2UgYmV5b25kIHRyYW5zZHVjZXIgYXV0aG9yaW5nLlxuICovXG5cbi8qKlxuICogVGhlIG1hcHBpbmcgb2YgcHJvdG9jb2wgbmFtZXMgdG8gdGhlaXIgcmVzcGVjdGl2ZSBwcm9wZXJ0eSBrZXkgbmFtZXMuXG4gKlxuICogQHR5cGUge21vZHVsZTpjaGFua28vcHJvdG9jb2xzfnByb3RvY29sTWFwfVxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgcHJvdG9jb2xzID0gT2JqZWN0LmNyZWF0ZShudWxsLCB7XG4gIGluaXQ6IHtcbiAgICB2YWx1ZTogU3ltYm9sLmZvcihcInRyYW5zZHVjZXIvaW5pdFwiKVxuICB9LFxuICBzdGVwOiB7XG4gICAgdmFsdWU6IFN5bWJvbC5mb3IoXCJ0cmFuc2R1Y2VyL3N0ZXBcIilcbiAgfSxcbiAgcmVzdWx0OiB7XG4gICAgdmFsdWU6IFN5bWJvbC5mb3IoXCJ0cmFuc2R1Y2VyL3Jlc3VsdFwiKVxuICB9LFxuICByZWR1Y2VkOiB7XG4gICAgdmFsdWU6IFN5bWJvbC5mb3IoXCJ0cmFuc2R1Y2VyL3JlZHVjZWRcIilcbiAgfSxcbiAgdmFsdWU6IHtcbiAgICB2YWx1ZTogU3ltYm9sLmZvcihcInRyYW5zZHVjZXIvdmFsdWVcIilcbiAgfVxufSk7XG5cbmV4cG9ydCB7IHByb3RvY29scyB9O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG5cbi8qKlxuICogUHJvdmlkZXMgYW4gZWZmaWNpZW50IGdlbmVyYWwtcHVycG9zZSBxdWV1ZS5cbiAqXG4gKiBAbW9kdWxlIGNoYW5rby9xdWV1ZVxuICogQHByaXZhdGVcbiAqL1xuXG4vKipcbiAqIEEgZ2VuZXJhbCBwdXJwb3NlLCBoaWdobHkgZWZmaWNpZW50IEphdmFTY3JpcHQgcXVldWUuIEl0IGlzIGJhY2tlZCBieSBhXG4gKiBKYXZhU2NyaXB0IGFycmF5LCBidXQgaXQgZG9lcyBub3QgdXNlIGB1bnNoaWZ0YCB0byB0YWtlIGVsZW1lbnRzIG9mZiB0aGVcbiAqIGFycmF5IGJlY2F1c2UgdW5zaGlmdCBjYXVzZXMgZWxlbWVudHMgdG8gYmUgY29waWVkIGV2ZXJ5IHRpbWUgaXQncyB1c2VkLlxuICogSW5zdGVhZCwgYSBwb2ludGVyIGlzIG1haW50YWluZWQgdGhhdCBrZWVwcyB0cmFjayBvZiB0aGUgbG9jYXRpb24gb2YgdGhlIG5leHRcbiAqIGVsZW1lbnQgdG8gYmUgZGVxdWV1ZWQsIGFuZCB3aGVuIHRoYXQgZGVxdWV1ZSBoYXBwZW5zLCB0aGUgcG9pbnRlciBzaW1wbHlcbiAqIG1vdmVzLiBXaGVuIHRoZSBlbXB0eSBzcGFjZSBhdCB0aGUgaGVhZCBvZiB0aGUgYXJyYXkgZ2V0cyBsYXJnZSBlbm91Z2gsIGl0J3NcbiAqIHJlbW92ZWQgYnkgYSBzaW5nbGUgc2xpY2Ugb3BlcmF0aW9uLlxuICpcbiAqIFB1dHRpbmcgZWxlbWVudHMgaW50byB0aGUgcXVldWUgaXMganVzdCBkb25lIHdpdGggYSBiYXNpYyBgcHVzaGAsIHdoaWNoICppcypcbiAqIGhpZ2hseSBlZmZpY2llbnQuXG4gKlxuICogVGhpcyB0eXBlIG9mIHF1ZXVlIGlzIHBvc3NpYmxlIGluIEphdmFTY3JpcHQgYmVjYXVzZSBKUyBhcnJheXMgYXJlIHJlc2l6YWJsZS5cbiAqIEluIGxhbmd1YWdlcyB3aXRoIGZpeGVkLXNpemUgYXJyYXlzLCBhIHJlc2l6aW5nIG9wZXJhdGlvbiB3b3VsZCBoYXZlIHRvIGJlXG4gKiBydW4gZWFjaCB0aW1lIHRoZSBxdWV1ZSBmaWxscy5cbiAqXG4gKiBAbmFtZXNwYWNlIFF1ZXVlXG4gKiBAcHJpdmF0ZVxuICovXG5cbi8qKlxuICogVGhlIHZhbHVlIHJldHVybmVkIHdoZW4gYSBxdWV1ZSBpcyByZWFkIHdoZW4gaXQncyBlbXB0eS5cbiAqXG4gKiBUaGlzIHNwZWNpYWwgdmFsdWUgaXMgdXNlZCBiZWNhdXNlIGBudWxsYCBhbmQgYHVuZGVmaW5lZGAgYXJlIHBvc3NpYmxlXG4gKiBsZWdpdGltYXRlIHZhbHVlcyB0aGF0IGNhbiBiZSBzdG9yZWQgaW4gYSBxdWV1ZS4gQW5vdGhlciBvcHRpb24gaXMgdG8gdXNlXG4gKiBzb21lIGtpbmQgb2YgYE1heWJlYCBvciBgT3B0aW9uYCB0eXBlLCBidXQgdGhhdCByZXF1aXJlcyBtb3JlIGVmZm9ydCBvbiB0aGVcbiAqIHBhcnQgb2YgdGhlIGVuZCB1c2VyIHRvIGludGVyZmFjZSB3aXRoLlxuICpcbiAqIEB0eXBlIHtTeW1ib2x9XG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNoYW5rb35DaGFua29cbiAqL1xuY29uc3QgRU1QVFkgPSBTeW1ib2woXCJFTVBUWVwiKTtcblxuLyoqXG4gKiBBIG1hcmtlciBwcm9wZXJ0eSBuYW1lIHRvIGluZGljYXRlIHRoYXQgYW4gb2JqZWN0IGlzIGluIGZhY3QgYSBxdWV1ZS5cbiAqXG4gKiBBIHF1ZXVlIGhhcyBhIHByb3BlcnR5IHdpdGggdGhpcyBuYW1lIHdob3NlIHJlYWRvbmx5IHZhbHVlIGlzIHNldCB0byBgdHJ1ZWAuXG4gKiBUaGlzIGlzIG5vdCBtZWFudCB0byBiZSByZWFkIGV4Y2VwdCBieSB0aGVcbiAqIGB7QGxpbmsgbW9kdWxlOmNoYW5rby9xdWV1ZX5RdWV1ZS5pc1F1ZXVlfGlzUXVldWV9YCBmdW5jdGlvbi5cbiAqXG4gKiBAdHlwZSB7U3ltYm9sfVxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgUVVFVUUgPSBTeW1ib2woXCJRVUVVRVwiKTtcblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgYW4gb2JqZWN0IGlzIGEgcXVldWUuXG4gKlxuICogQHBhcmFtIHsqfSBvYmogVGhlIG9iamVjdCB0byBiZSB0ZXN0ZWQuXG4gKiBAcmV0dXJuIHtib29sZWFufSBFaXRoZXIgYHRydWVgIGlmIHRoZSBvYmplY3QgaXMgYSBxdWV1ZSBvciBgZmFsc2VgIGlmIGl0IGlzXG4gKiBub3QuXG4gKi9cbmZ1bmN0aW9uIGlzUXVldWUob2JqKSB7XG4gIHJldHVybiAhIW9iaj8uW1FVRVVFXTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IHF1ZXVlLiBUaGlzIHF1ZXVlIGlzIGNyZWF0ZWQgZW1wdHksIHdpdGggYSBiYWNraW5nIGFycmF5IG9mXG4gKiBsZW5ndGggMC5cbiAqXG4gKiBAcmV0dXJucyB7bW9kdWxlOmNoYW5rby9xdWV1ZX5RdWV1ZX0gQSBuZXcsIGVtcHR5IHF1ZXVlLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gcXVldWUoKSB7XG4gIHJldHVybiBPYmplY3QuY3JlYXRlKG51bGwsIHtcbiAgICBzdG9yZToge1xuICAgICAgdmFsdWU6IFtdLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9LFxuXG4gICAgcG9pbnRlcjoge1xuICAgICAgdmFsdWU6IDAsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0sXG5cbiAgICBbUVVFVUVdOiB7XG4gICAgICB2YWx1ZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgbnVtYmVyIG9mIGVsZW1lbnRzIHN0b3JlZCBpbiBhIHF1ZXVlLiBUaGlzIG1heSBvciBtYXkgbm90IGVxdWFsXG4gKiB0aGUgbGVuZ3RoIG9mIHRoZSBiYWNraW5nIHN0b3JlLCBhcyB0aGVyZSBpcyBvZnRlbiBlbXB0eSBzcGFjZSBhdCB0aGUgaGVhZCBvZlxuICogdGhlIGJhY2tpbmcgc3RvcmUuXG4gKlxuICogQHBhcmFtIHttb2R1bGU6Y2hhbmtvL3F1ZXVlflF1ZXVlfSBxdWV1ZSBUaGUgcXVldWUgd2hvc2UgaXRlbXMgYXJlIGJlaW5nXG4gKiAgICAgY291bnRlZC5cbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIG51bWJlciBvZiBpdGVtcyBpbiB0aGUgcXVldWUuXG4gKi9cbmZ1bmN0aW9uIGNvdW50KHF1ZXVlKSB7XG4gIHJldHVybiBxdWV1ZS5zdG9yZS5sZW5ndGggLSBxdWV1ZS5wb2ludGVyO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhIHF1ZXVlIGlzIGVtcHR5LlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOmNoYW5rby9xdWV1ZX5RdWV1ZX0gcXVldWUgVGhlIHF1ZXVlIGJlaW5nIGNoZWNrZWQgZm9yXG4gKiAgICAgZW1wdGluZXNzLlxuICogQHJldHVybiB7Ym9vbGVhbn0gRWl0aGVyIGB0cnVlYCBpZiB0aGUgcXVldWUgaXMgZW1wdHkgb3IgYGZhbHNlYCBpZiBpdCBpc1xuICogICAgIG5vdC5cbiAqL1xuZnVuY3Rpb24gaXNFbXB0eShxdWV1ZSkge1xuICByZXR1cm4gcXVldWUuc3RvcmUubGVuZ3RoID09PSAwO1xufVxuXG4vKipcbiAqIEFkZHMgYW4gaXRlbSB0byBhIHF1ZXVlLlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOmNoYW5rby9xdWV1ZX5RdWV1ZX0gcXVldWUgVGhlIHF1ZXVlIHdoaWNoIGlzIGhhdmluZyBhbiBpdGVtXG4gKiAgICAgYWRkZWQgdG8gaXQuXG4gKiBAcGFyYW0geyp9IGl0ZW0gVGhlIGl0ZW0gYmVpbmcgYWRkZWQgdG8gdGhlIHF1ZXVlLlxuICovXG5mdW5jdGlvbiBlbnF1ZXVlKHF1ZXVlLCBpdGVtKSB7XG4gIHF1ZXVlLnN0b3JlLnB1c2goaXRlbSk7XG59XG5cbi8qKlxuICogUmVtb3ZlcyBhbiBpdGVtIGZyb20gYSBxdWV1ZSBhbmQgcmV0dXJucyB0aGF0IGl0ZW0uIElmIHRoZSByZW1vdmFsIGNhdXNlcyB0aGVcbiAqIGFtb3VudCBvZiBlbXB0eSBzcGFjZSBhdCB0aGUgaGVhZCBvZiB0aGUgYmFja2luZyBzdG9yZSB0byBleGNlZWQgYSB0aHJlc2hvbGQsXG4gKiB0aGF0IGVtcHR5IHNwYWNlIGlzIHJlbW92ZWQuXG4gKlxuICogQHBhcmFtIHttb2R1bGU6Y2hhbmtvL3F1ZXVlflF1ZXVlfSBxdWV1ZSBUaGUgcXVldWUgd2hvc2Ugb2xkZXN0IGl0ZW0gaXMgdG8gYmVcbiAqIHIgICAgZW1vdmVkLlxuICogQHJldHVybiB7Kn0gVGhlIG9sZGVzdCBzdG9yZWQgaXRlbSBpbiB0aGUgcXVldWUuXG4gKi9cbmZ1bmN0aW9uIGRlcXVldWUocXVldWUpIHtcbiAgaWYgKHF1ZXVlLnN0b3JlLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBFTVBUWTtcbiAgfVxuXG4gIGNvbnN0IGl0ZW0gPSBxdWV1ZS5zdG9yZVtxdWV1ZS5wb2ludGVyXTtcbiAgLy8gUmVtb3ZlcyB0aGUgaXRlbXMgaW4gdGhlIGJhY2tpbmcgc3RvcmUgYmVmb3JlIHRoZSBjdXJyZW50IHBvaW50ZXIsIGlmIHRoZXJlXG4gIC8vIGlzIGVub3VnaCBcImVtcHR5XCIgc3BhY2UgYmVmb3JlIHRoZSBwb2ludGVyIHRvIGp1c3RpZnkgaXQgKGkuZS4sIHRoZSB1bnVzZWRcbiAgLy8gcG9ydGlvbiBpcyBhdCBsZWFzdCBoYWxmIGFzIGxhcmdlIGFzIHRoZSB1c2VkIHBvcnRpb24pXG4gIGlmICgrK3F1ZXVlLnBvaW50ZXIgKiAyID49IHF1ZXVlLnN0b3JlLmxlbmd0aCkge1xuICAgIHF1ZXVlLnN0b3JlID0gcXVldWUuc3RvcmUuc2xpY2UocXVldWUucG9pbnRlcik7XG4gICAgcXVldWUucG9pbnRlciA9IDA7XG4gIH1cbiAgcmV0dXJuIGl0ZW07XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgbmV4dCBpdGVtIGluIGEgcXVldWUgd2l0aG91dCByZW1vdmluZyBpdC5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTpjaGFua28vcXVldWV+UXVldWV9IHF1ZXVlIFRoZSBxdWV1ZSB3aG9zZSBvbGRlc3QgaXRlbSBpcyB0byBiZVxuICogICAgIHBlZWtlZCBhdC5cbiAqIEByZXR1cm4geyp9IFRoZSBvbGRlc3QgaXRlbSBzdG9yZWQgaW4gdGhlIHF1ZXVlLlxuICovXG5mdW5jdGlvbiBwZWVrKHF1ZXVlKSB7XG4gIHJldHVybiBxdWV1ZS5zdG9yZS5sZW5ndGggPT09IDAgPyBFTVBUWSA6IHF1ZXVlLnN0b3JlW3F1ZXVlLnBvaW50ZXJdO1xufVxuXG4vKipcbiAqIEZpbHRlcnMgb3V0IGFueSBpdGVtIGluIGEgcXVldWUgdGhhdCBkb2VzIG5vdCBjYXVzZSB0aGUgc3VwcGxpZWQgcHJlZGljYXRlXG4gKiBmdW5jdGlvbiB0byByZXR1cm4gYHRydWVgIHdoZW4gcGFzc2VkIHRoYXQgaXRlbS4gVGhpcyBpcyBub3QgZXhhY3RseSBhXG4gKiBnZW5lcmFsIHB1cnBvc2UgcXVldWUgb3BlcmF0aW9uLCBidXQgd2UgbmVlZCBpdCB3aXRoIGNoYW5uZWxzIHRoYXQgd2lsbFxuICogb2NjYXNpb25hbGx5IHdhbnQgdG8gZ2V0IHJpZCBvZiBpbmFjdGl2ZSBoYW5kbGVycy5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTpjaGFua28vcXVldWV+UXVldWV9IHF1ZXVlIFRoZSBxdWV1ZSBiZWluZyBmaWx0ZXJlZC5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuIFRoZSBwcmVkaWNhdGUgZnVuY3Rpb24gdGhhdCBkZXRlcm1pbmVzIHdoZXRoZXIgYW5cbiAqICAgICBlbGVtZW50IHJlbWFpbnMgaW4gdGhlIHF1ZXVlLlxuICovXG5mdW5jdGlvbiBmaWx0ZXIocXVldWUsIHByZWRpY2F0ZSkge1xuICBmb3IgKGxldCBpID0gMCwgZW5kID0gY291bnQocXVldWUpOyBpIDwgZW5kOyBpKyspIHtcbiAgICBjb25zdCBpdGVtID0gZGVxdWV1ZShxdWV1ZSk7XG4gICAgaWYgKHByZWRpY2F0ZShpdGVtKSkge1xuICAgICAgZW5xdWV1ZShxdWV1ZSwgaXRlbSk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCB7XG4gIEVNUFRZLFxuICBxdWV1ZSxcbiAgaXNRdWV1ZSxcbiAgY291bnQsXG4gIGlzRW1wdHksXG4gIGVucXVldWUsXG4gIGRlcXVldWUsXG4gIHBlZWssXG4gIGZpbHRlclxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=