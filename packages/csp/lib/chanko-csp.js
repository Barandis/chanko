(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["csp"] = factory();
	else
		root["csp"] = factory();
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

/***/ "../../node_modules/@babel/runtime/helpers/AsyncGenerator.js":
/*!********************************************************************************************************!*\
  !*** /home/barandis/Development/projects/chanko/node_modules/@babel/runtime/helpers/AsyncGenerator.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var AwaitValue = __webpack_require__(/*! ./AwaitValue */ "../../node_modules/@babel/runtime/helpers/AwaitValue.js");

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

/***/ "../../node_modules/@babel/runtime/helpers/AwaitValue.js":
/*!****************************************************************************************************!*\
  !*** /home/barandis/Development/projects/chanko/node_modules/@babel/runtime/helpers/AwaitValue.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _AwaitValue(value) {
  this.wrapped = value;
}

module.exports = _AwaitValue;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/awaitAsyncGenerator.js":
/*!*************************************************************************************************************!*\
  !*** /home/barandis/Development/projects/chanko/node_modules/@babel/runtime/helpers/awaitAsyncGenerator.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var AwaitValue = __webpack_require__(/*! ./AwaitValue */ "../../node_modules/@babel/runtime/helpers/AwaitValue.js");

function _awaitAsyncGenerator(value) {
  return new AwaitValue(value);
}

module.exports = _awaitAsyncGenerator;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/wrapAsyncGenerator.js":
/*!************************************************************************************************************!*\
  !*** /home/barandis/Development/projects/chanko/node_modules/@babel/runtime/helpers/wrapAsyncGenerator.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var AsyncGenerator = __webpack_require__(/*! ./AsyncGenerator */ "../../node_modules/@babel/runtime/helpers/AsyncGenerator.js");

function _wrapAsyncGenerator(fn) {
  return function () {
    return new AsyncGenerator(fn.apply(this, arguments));
  };
}

module.exports = _wrapAsyncGenerator;

/***/ }),

/***/ "../../node_modules/process/browser.js":
/*!**********************************************************************************!*\
  !*** /home/barandis/Development/projects/chanko/node_modules/process/browser.js ***!
  \**********************************************************************************/
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

/***/ "../../node_modules/setimmediate/setImmediate.js":
/*!********************************************************************************************!*\
  !*** /home/barandis/Development/projects/chanko/node_modules/setimmediate/setImmediate.js ***!
  \********************************************************************************************/
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "../../node_modules/process/browser.js")))

/***/ }),

/***/ "../../node_modules/timers-browserify/main.js":
/*!*****************************************************************************************!*\
  !*** /home/barandis/Development/projects/chanko/node_modules/timers-browserify/main.js ***!
  \*****************************************************************************************/
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
__webpack_require__(/*! setimmediate */ "../../node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../node_modules/webpack/buildin/global.js":
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
 * @module csp
 */





/**
 * An error handling funciton. This is used to handle exceptions thrown in async
 * functions and in transducers. The return value of an exception handler is
 * typically sent to a channel; if the exception happened within an async
 * function, it will be sent to that function's output channel, and if the
 * excpetion happened in a transducer, it will be sent to the channel to which
 * the transducer is attached.
 *
 * @callback ExceptionHandler
 * @memberof module:csp
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
 * @callback OpCallback
 * @memberof module:csp
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
 * @callback SelectCallback
 * @memberof module:csp
 * @param {module:csp.SelectResult} data The value returned from the select
 *     operation.
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
 * @module csp/buffer
 * @private
 */

/**
 * A buffer that stores values sent to a buffered channel until a process
 * receives them.
 *
 * Different buffers differ only in the way that they determine whether they are
 * full and in what happens when a new value is added to a full buffer.
 *
 * @memberof module:csp
 * @typedef {(module:csp.FixedBuffer | module:csp.DroppingBuffer |
 *     module:csp.SlidingBuffer)} Buffer
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
 * A possible value of the `{@link module:csp/buffer.BUFFER|BUFFER} property
 * indicating that the buffer is a fixed buffer.
 *
 * @type {Symbol}
 * @private
 */

const FIXED = Symbol("FIXED");
/**
 * A possible value of the `{@link module:csp/buffer.BUFFER|BUFFER} property
 * indicating that the buffer is a dropping buffer.
 *
 * @type {Symbol}
 * @private
 */

const DROPPING = Symbol("DROPPING");
/**
 * A possible value of the `{@link module:csp/buffer.BUFFER|BUFFER} property
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
 *
 * A buffer of this type exists only as an object that can be passed to a
 * channel creation function (such as {@link module:csp.chan|chan}) to make that
 * channel a buffered channel. It doesn't have any properties that are intended
 * for external use.
 *
 * @typedef FixedBuffer
 * @memberof module:csp
 */

/**
 * Creates a fixed buffer of the specified capacity.
 *
 * A fixed buffer is a 'normal' buffer, one that stores and returns items on
 * demand. While it is capable of being over-filled, that ability is not used in
 * Chanko. A buffer that is full will cause the next put to its channel to block
 * until at least one item is removed from the buffer.
 *
 * This buffer is passed to `{@link module:csp.chan|chan}`, etc. to create a
 * buffered channel. It is not meant to be used directly.
 *
 * @memberof module:csp
 * @param {number} size The number of items that the new buffer can hold before
 *     it's full.
 * @return {module:csp.FixedBuffer} A new fixed buffer of the specified
 *     capacity.
 */


function fixed(size) {
  return Object.create(null, {
    /**
     * The queue backing this buffer.
     *
     * @type {module:csp/queue~Queue}
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
 * A buffer of this type exists only as an object that can be passed to a
 * channel creation function (such as {@link module:csp.chan|chan}) to make that
 * channel a buffered channel. It doesn't have any properties that are intended
 * for external use.
 *
 * @typedef DroppingBuffer
 * @memberof module:csp
 */

/**
 * Creates a dropping buffer of the specified capacity.
 *
 * A dropping buffer silently drops the item being added if the buffer is
 * already at capacity. Since adding a new item will always 'succeed' (even if
 * it succeeds by just ignoring the add), it is never considered full and
 * therefore a put to a channel buffered by a dropping buffer never blocks.
 *
 * This buffer is passed to `{@link module:csp.chan|chan}`, etc. to create a
 * buffered channel. It is not meant to be used directly.
 *
 * @memberof module:csp
 * @param {number} size The number of items that the new buffer can hold before
 *     newest items are dropped on add.
 * @return {module:csp.DroppingBuffer} A new dropping buffer of the specified
 *     capacity.
 */


function dropping(size) {
  return Object.create(null, {
    /**
     * The queue backing this buffer.
     *
     * @type {module:csp/queue~Queue}
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
 * This is very similar to {@link module:csp.DroppingBuffer|DroppingBuffer}; the
 * only difference is in what happens when an item is added. In this buffer, the
 * new item is indeed added to the buffer, but in order to keep the count of the
 * buffer at or below its size, the oldest item in the buffer is silently
 * dropped.
 *
 * A buffer of this type exists only as an object that can be passed to a
 * channel creation function (such as {@link module:csp.chan|chan}) to make that
 * channel a buffered channel. It doesn't have any properties that are intended
 * for external use.
 *
 * @typedef SlidingBuffer
 * @memberof module:csp
 */

/**
 * Creates a sliding buffer of the specified capacity.
 *
 * A sliding buffer drops the first-added (oldest) item already in the buffer if
 * a new item is added when the buffer is already at capacity. Since it's always
 * capable of having items added to it, it's never considered full, and
 * therefore a put to a channel buffered by a sliding buffer never blocks.
 *
 * This buffer is passed to `{@link module:csp.chan|chan}`, etc. to create a
 * buffered channel. It is not meant to be used directly.
 *
 * @memberof module:csp
 * @param {number} size The number of items that the new buffer can hold before
 *     oldest items are dropped on add.
 * @return {module:csp.SlidingBuffer} A new sliding buffer of the specified
 *     capacity.
 */


function sliding(size) {
  return Object.create(null, {
    /**
     * The queue backing this buffer.
     *
     * @type {module:csp/queue~Queue}
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
 * @param {module:csp.Buffer} buffer The buffer whose queue is returned by this
 *     function.
 * @return {module:csp/queue~Queue} The queue that backs the supplied buffer.
 * @private
 */


function queue(buffer) {
  return buffer.queue;
}
/**
 * Returns the number of items a buffer can hold before it's full.
 *
 * @param {module:csp.Buffer} buffer The buffer whose size is returned by this
 *     function.
 * @return {number} The size of the supplied buffer.
 * @private
 */


function size(buffer) {
  return buffer.size;
}
/**
 * Returns the number of items a buffer is currently holding.
 *
 * @param {module:csp.Buffer} buffer The buffer whose current count is returned
 *     by this function.
 * @return {number} The number of items that the supplied buffer is holding.
 * @private
 */


function count(buffer) {
  return Object(modules_queue__WEBPACK_IMPORTED_MODULE_0__["count"])(buffer.queue);
}
/**
 * Determines whether a buffer is at capacity.
 *
 * @param {module:csp.Buffer} buffer The buffer who's being checked to see if
 *     it's at capacity.
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
 * @param {module:csp.Buffer} buffer The buffer where the supplied items will be
 *     added.
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
 * @param {module:csp.Buffer} buffer The buffer from which an item is being
 *     removed.
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
 * @memberof module:csp
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
 * @return {boolean} Either `true` if the value has been reduced, or `false` if
 *     it has not been.
 * @private
 */


function isCompleted(value) {
  return !!(value === null || value === void 0 ? void 0 : value[modules_protocol__WEBPACK_IMPORTED_MODULE_0__["protocols"].completed]);
}
/**
 * A wrapper around a value. This is primarily used as a marker; a put or take
 * returning a Box indicates that the put or take has returned an immediate
 * value, while returning `null` indicates that the operation has been queued.
 *
 * @typedef Box
 * @memberof module:csp/channel
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
 * @memberof module:csp/channel
 * @param {*} value The value to box.
 * @return {module:csp/channel.Box} The boxed value.
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
 * {@link module:csp/channel.Box|Box} except that it also carries a handler to
 * be used when a sent value is received. It is specifically for queueing sends.
 *
 * @typedef SendBox
 * @memberof module:csp/channel
 * @property {*} value The value being wrapped by this box.
 * @property {module:csp/channel.Handler} handler The handler used to process a
 *     send request for the value.
 * @private
 */

/**
 * A box used to wrap a value being sent onto a channel. This is different from
 * a regular box in that the send handler is also included.
 *
 * @memberof module:csp/channel
 * @param  {Object} handler The handler used to process a send request for the
 *     value.
 * @param  {*} value The value to box.
 * @return {module:csp/channel.SendBox} The boxed value.
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
 * `{@link module:csp.chan|chan}`. However, this object is intended to be used
 * as a value to pass to channel operation functions; it doesn't have any
 * properties of interest to an end user.
 *
 * @memberof module:csp
 * @typedef Channel
 */

/**
 * Creates a channel. This is a low-level function;
 * `{@link module:csp.chan|chan}` performs some necessary manipulations on
 * arguments before using this function to perform the actual creation.
 *
 * @memberof module:csp/channel
 * @param {null | module:csp.Buffer} buffer An optional buffer that, if present,
 *     is used to create a buffered channel. If this is `null`, an unbuffered
 *     channel is created.
 * @param {module:core.TransducerFunction} xform The transducer used to
 *     transform values sent to the channel. If no transformations are
 *     necessary, a passthrough transducer should be provided.
 * @param {boolean} isTimed Indicates whether the channel is a timed channel.
 *     The timining mechanism is handled outside the channel, but this property
 *     is provided to be able to query whether that's the case.
 * @param {number} maxDirty=64 The maximum number of dirty operations to allow
 *     before they're purged.
 * @param {number} maxQueued=1024 The maximum number of operations that can be
 *     queued before new ones are rejected.
 * @return {module:csp.Channel} A new channel.
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
 * @memberof module:csp/channel
 * @param {module:csp.Channel} channel The channel that the value is being sent
 *     to.
 * @param {*} value The value to be put onto the channel.
 * @param {boolean} handler.active Determines whether the send is still active
 *     and should still be serviced.
 * @param {function} handler.commit Deactivates the send (so it can't be
 *     serviced a second time) and returns the callback to be fired when the
 *     send completes.
 * @return {module:csp/channel.Box|null} One of three values. A boxed `true` is
 *     returned if the send was immediately consumed by a pending receive. A
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
    const done = isCompleted(channel.xform[modules_protocol__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](channel.buffer, value));

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
 * @memberof module:csp/channel
 * @param {module:csp.Channel} channel The channel that the value is being
 *     received from.
 * @param {boolean} handler.active Determines whether the receive is still
 *     active and should still be serviced.
 * @param {function} handler.commit Deactivates the receive (so it can't be
 *     serviced a second time) and returns the callback to be fired when the
 *     receive completes.
 * @return {module:csp/channel.Box|null} Either the boxed value received from
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

        if (isCompleted(channel.xform[modules_protocol__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](channel.buffer, sender.value))) {
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
    const max = channel.maxQueued;
    throw Error(`No more than ${max} pending receives are allowed on a single channel`);
  }

  Object(modules_queue__WEBPACK_IMPORTED_MODULE_1__["enqueue"])(channel.recvs, handler);
  return null;
}
/**
 * Closes the channel if it isn't already closed. This immediately returns any
 * buffered values to pending receives. If there are no buffered values (or if
 * they've already been taken by other receives), then all of the rest of the
 * receives are completed with the value of {@link module:csp.CLOSED|CLOSED}.
 * Any pending sends are completed with the value of `false`.
 *
 * Note that the buffer is not emptied if there are still values remaining after
 * all of the pending receives have been handled. The channel will still provide
 * those values to any future receives, though no new values may be added to the
 * channel. Once the buffer is depleted, any future receives will return
 * {@link module:csp.CLOSED|CLOSED}.
 *
 * @memberof module:csp
 * @param {module:csp.Channel} channel The channel to be closed.
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
/* harmony import */ var _babel_runtime_helpers_awaitAsyncGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/awaitAsyncGenerator */ "../../node_modules/@babel/runtime/helpers/awaitAsyncGenerator.js");
/* harmony import */ var _babel_runtime_helpers_awaitAsyncGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_awaitAsyncGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_wrapAsyncGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/wrapAsyncGenerator */ "../../node_modules/@babel/runtime/helpers/wrapAsyncGenerator.js");
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
 * `{@link module:csp.fixed|fixed}`, `{@link module:csp.dropping|dropping}`, and
 * `{@link module:csp.sliding|sliding}`.
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
 * @module csp/channel
 * @private
 */




/**
 * A handler function for exceptions that are thrown by a transducer while
 * transforming values on a channel.
 *
 * @param {object} err The error object that was thrown by the transducer.
 * @return {*} A value that should be put into the channel's buffer when the
 *     transducer throws the error. If this value is
 *     {@link module:csp.CLOSED|CLOSED}, then no value at all will be added to
 *     the buffer.
 * @callback
 * @memberof module:csp/channel
 * @private
 */

/**
 * The default exception handler, used when no exception handler is supplied to
 * `{@link module:csp/channel.handleException}`,
 * `{@link module:csp/channel.wrapTransformer}`, `{@link module:csp.chan|chan}`,
 * or `{@link module:csp.transChan|transChan}`. This default handler merely
 * returns `{@link module:csp.CLOSED|CLOSED}`, which will result in no new value
 * being written to the channel.
 *
 * @type {module:csp.ExceptionHandler}
 * @memberof module:csp/channel
 * @private
 */

const DEFAULT_HANDLER = () => _handler__WEBPACK_IMPORTED_MODULE_2__["CLOSED"];
/**
 * Creates a new handler used for `send` and `recv` operations.
 *
 * @memberof module:csp/channel
 * @param {module:csp/channel.HandlerCallback} fn The callback to be run when
 *     (and if) the operation completes.
 * @return {module:csp/channel.Handler} The new handler.
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
 * {@link module:csp.CLOSED|CLOSED}, then it is *not* added to the buffer.
 *
 * @param {module:csp.Buffer} buffer The buffer that backs the channel whose
 *     transducer's exceptions are being handled.
 * @param {module:csp.ExceptionHandler} handler The exception handling function
 *     that is run when an error occurs in a transducer.
 * @param  {Object} ex The error object thrown by the transducer.
 * @return {module:csp.Buffer} The buffer itself. This is done to make it easier
 *     to integrate this function into a transducer's step function.
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
 * @param {module:csp.ExceptionHandler} [handler=DEFAULT_HANDLER] The exception
 *     handling function that is run when an error occurs in the transducer.
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
 * to figure out what was really passed to `{@link module:csp.chan|chan}`.
 *
 * @param {(null|number|module:csp.Buffer)} buffer The buffer argument passed to
 *     `{@link module:csp.chan|chan}`.
 * @param {object} options The options argument passed to
 *     `{@link module:csp.chan|chan}`.
 * @param {object} defaultOptions Default values for options that might not have
 *     been sent to `{@link module:csp.chan|chan}`.
 * @return {object} An object containing the processed values of all of the
 *     arguments sent to `{@link module:csp.chan|chan}`.
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
    // If no buffer is specified but a transducer is, we assume fixed(1) instead
    // of no buffer
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
 * `{@link module:csp.send|send}`, `{@link module:csp.recv|recv}`, and
 * `{@link module:csp.select|select}` invocations, along with their non-blocking
 * variations (`{@link module:csp.sendAsync|sendAsync}`,
 * `{@link module:csp.recvAsync|recvAsync}`, and
 * `{@link module:csp.selectAsync|selectAsync}`).
 *
 * If a buffer value is provided, it defines what buffer should back the
 * channel. If this is `null` or `0`, the channel will be unbuffered. If it's a
 * positive number, the channel will be buffered by a
 * `{@link module:csp.FixedBuffer|FixedBuffer} `of that size. If it's a
 * `{@link module:csp.Buffer|Buffer}` object, that object will be used as the
 * channel's buffer. If it's missing altogether, the channel will be unbuffered
 * unless a `transducer` option is provided (see below), in which case it will
 * be a `{@link module:csp.FixedBuffer|FixedBuffer}` of size 1.
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
 * value is `{@link module:csp.CLOSED|CLOSED}`, then no value will be put onto
 * the channel upon handler completion.
 *
 * @memberof module:csp
 * @param {(number|module:csp.Buffer)} [buffer] The buffer object that should
 *     back this channel. If this is a positive number, a fixed buffer of that
 *     size will be created to back the channel. If it is `0` or `null`, the new
 *     channel will be unbuffered. If it's not present, the new channel will be
 *     unbuffered unless there is a `transducer` option, in in which case it
 *     will be buffered with a size 1
 *     `{@link module:csp.FixedBuffer|FixedBuffer}`.
 * @param {Object} [options] A set of options for configuring the channel's
 *     queue.
 * @param {module:core.TransducerFunction} [options.transducer] A transducer to
 *     run each value through before putting it onto the channel. This function
 *     should expect one parameter (another transducer that it's chained to) and
 *     return an object that conforms to the transducer protocol. If a
 *     transducer is provided on an unbuffered channel, an error will be thrown.
 * @param {module:csp.ExceptionHandler} [options.handler] An error handler that
 *     is run whenever an error occurs inside a transducer function. If that
 *     happens, this function is called with one parameter, which is the error
 *     object. The value that the handler returns (if it is not
 *     `{@link module:csp.CLOSED|CLOSED}`) will be put onto the channel when the
 *     handler finishes running.
 * @param {number} [options.maxDirty=64] The maximum number of dirty operations
 *     that can be in the queue before those operations are subject to being
 *     purged. Dirty operations are those that may not be valid anymore because
 *     they were in the list of operations passed to
 *     `{@link module:csp.select|select}` or
 *     `{@link module:csp.selectAsync|selectAsync}` but were not chosen to run.
 *     This provides a chance for a very minor performance tweak and is best
 *     left alone.
 * @param {number} [options.maxQueued=1024] The maximum number of operations
 *     that can be queued up at the same time. This prevents infinite loops from
 *     accidentally eating up all of the available memory.
 * @param {number} [options.timer] If this value is present, the channel will be
 *     a timed channel that closes automatically after this number of
 *     milliseconds.
 * @return {module:csp.Channel} A new channel.
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
 * @memberof module:csp
 * @param {number} delay The number of milliseconds after the channel is created
 *     that it will be closed automatically.
 * @return {module:csp.Channel} A new timed channel.
 */


function timedChan(delay = 0) {
  return chan({
    timer: delay
  });
}
/**
 * Creates a buffered channel with a transducer and optional error handler. The
 * buffer for this channel is a `{@link module:csp.FixedBuffer|FixedBuffer}` of
 * size 1. This is the equivalent of `chan(1, { transducer, handler })`.
 *
 * @memberof module:csp
 * @param {module:core.TransducerFunction} transducer The transducer used to
 *     transform values on the new channel.
 * @param {module:csp.ExceptionHandler} [handler] An exception handler called
 *     with the error object as its only argument when an error happens inside a
 *     transducer. If this is not provided, a default handler is used that
 *     simply does nothing, including sending no output from the value that
 *     errored.
 * @return {module:csp.Channel} A new channel with a transducer.
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
 * `{@link module:csp.CLOSED|CLOSED}`.
 *
 * @memberof module:csp
 * @param {module:csp.Channel} channel The channel to check.
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
 * argument of `{@link module:csp.chan|chan}` or if a transducer is a part of
 * the channel.
 *
 * @memberof module:csp
 * @param {module:csp.Channel} channel The channel to check.
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
 * `{@link module:csp.chan|chan}` or with the
 * `{@link module:csp.timedChan|timedChan}` function. It will automatically
 * close after a certain period of time.
 *
 * @memberof module:csp
 * @param {module:csp.Channel} channel The channel to check.
 * @return {boolean} Either `true` if the channel is timed or `false` if it
 *     isn't.
 */


function isTimed(channel) {
  return channel.isTimed;
}
/**
 * Sends a value to this channel without blocking.
 *
 * This means that a call to `sendAsync` does not go into an `await` expression,
 * and it is not necessary to use it inside a async function. Rather than
 * blocking until the sent value is taken by another async function, this one
 * returns immediately and then invokes the callback (if provided) when the sent
 * value is taken. It can be seen as a non-blocking version of
 * `{@link module:csp.send|send}`.
 *
 * While the primary use of this function is to send values onto channels in
 * contexts where being inside an async function is impossible (for example, in
 * a DOM element's event handler), it can still be used inside async functions
 * at times when it's important to make sure that the function doesn't block
 * from the send.
 *
 * The callback is a function of one parameter. The parameter that's supplied to
 * the callback is the same as what is supplied to `await send`: `true` if the
 * value was taken, or `false` if the channel was closed. If the callback isn't
 * present, nothing will happen after the value is taken.
 *
 * @memberof module:csp
 * @param {*} [value] The value being put onto the channel.
 * @param {module:csp.OpCallback} [callback] A function that gets invoked either
 *     when the value is taken by another process or when the channel is closed.
 *     This function can take one parameter, which is `true` in the former case
 *     and `false` in the latter.
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
 * expression, and it is not necessary to use it inside a async function. Rather
 * than blocking until a value becomes available on the channel to be received,
 * this one returns immediately and then invokes the callback (if provided) when
 * a value becomes available. It can be regarded as a non-blocking version of
 * {@link module:csp.recv|recv}`.
 *
 * While the primary use of this function is to receive values from channels in
 * contexts where being inside an async function is impossible, it can still be
 * used inside async functions at times when it's important that the receive
 * doesn't block the function.
 *
 * The callback is a function of one parameter, and the value supplied for that
 * parameter is the value received from the channel (either a value that was
 * sent or `{@link module:csp.CLOSED|CLOSED}`). If the callback isn't present,
 * nothing will happen after the value is taken.
 *
 * @memberof module:csp
 * @param {module:csp.OpCallback} [callback] A function that gets invoked when a
 *     value is made available to be received (this value may be
 *     `{@link module:csp.CLOSED|CLOSED}` if the channel closes with no
 *     available value). The function can take one parameter, which is the value
 *     that is received from the channel.
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
 * `{@link module:csp.CLOSED|CLOSED}`.
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
 * @memberof module:csp
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
 * Receives a value from this channel, blocking the async function until a value
 * becomes available to be received (or until the channel closes with no more
 * values on it to be received).
 *
 * This function *must* be called from within an async function and as part of
 * an `await` expression.
 *
 * When `receive` is completed and its function unblocks, its `await` expression
 * evaluates to the actual value that was received. If the target channel
 * closed, then all of the values already placed onto it are resolved by
 * `receive` as normal, and once no more values are available, the special value
 * `{@link module:csp.CLOSED|CLOSED}` is returned.
 *
 * @memberof module:csp
 * @return {Promise} A promise that will resolve to the value received from the
 *     channel once that receive is completed. If the channel closes without a
 *     value being made available, this will resolve to
 *     `{@link module:csp.CLOSED|CLOSED}`.
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
 * It functions in every way like `{@link module:csp.recv|recv}` *except* in the
 * case that the value on the channel is an object that has `Error.prototype` in
 * its prototype chain (any built-in error, any properly-constructed custom
 * error). If that happens, the error is thrown, which will cause the returned
 * promise to be rejected with the error. It can then be handled up the promise
 * chain like any other rejected promise.
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
 * @memberof module:csp
 * @return {Promise} A promise that will resolve to the value taken from the
 *     channel once that take is completed. If the channel closes without a
 *     value being made available, this will resolve to
 *     `{@link module:csp.CLOSED|CLOSED}`. If the taken value is an error, the
 *     promise will instead be rejected with the error object as the reason.
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
 * receives are completed with the value of `{@link module:csp.CLOSED|CLOSED}`.
 * Any pending sends are completed with the value of `false`.
 *
 * Note that the buffer is not emptied if there are still values remaining after
 * all of the pending receives have been handled. The channel will still provide
 * those values to any future receives, though no new values may be added to the
 * channel. Once the buffer is depleted, any future receives will return
 * `{@link module:csp.CLOSED|CLOSED}`.
 *
 * @memberof module:csp
 * @param {module:csp.Channel} channel The channel to be closed.
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
 * `{@link module:csp.send|send}` / `{@link module:csp.recv|recv}` /
 * `{@link module:csp.select|select}` and
 * `{@link module:csp.sendAsync|sendAsync}` /
 * `{@link module:csp.recvAsync|recvAsync}` /
 * `{@link module:csp.selectAsync|selectAsync}`: while the unblocked calls use
 * the callback passed to the function, `send`, `recv`, and `select` simply
 * continue the process where it left off. (This is why `send`, `recv`, and
 * `select` only work inside `async` functions with `await` if the return value
 * is needed, because otherwise there's no process to continue.)
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
 * @memberof module:csp/channel
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
 * @memberof module:csp/channel
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
 * {@link module:csp.select|select}` or sent to the callback in
 * `{@link module:csp.selectAsync|selectAsync}` when the default is returned as
 * its value.
 *
 * This only happens when an `{@link module:csp.select|select} /
 * {@link module:csp.selectAsync|selectAsync}` call is performed, all operations
 * are initially blocking, and a `default` option is sent. The immediate
 * response in that situation is `{ value: options.default, channel: DEFAULT }`.
 *
 * @type {Symbol}
 * @memberof module:csp
 */

const DEFAULT = Symbol("DEFAULT");
/**
 * Creates a new handler used for `select` operations.
 *
 * @memberof module:csp/channel
 * @param {module:csp/channel.Box} active A boxed value indicating whether the
 *     handler is valid. This is a boxed value because the select-handling code
 *     needs to manipulate it directly.
 * @param {module:csp/channel.HandlerCallback} fn The callback to be run when
 *     (and if) the operation completes.
 * @return {module:csp/channel.Handler} The new handler.
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
 * @memberof module:csp/channel
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
 * @property {module:csp.Channel} channel The channel upon which the selected
 *     operation happened.
 * @memberof module:csp
 */

/**
 * Creates a select result from its component properties.
 *
 * @memberof module:csp/channel
 * @param {*} value If the `select` operation resulted in a receive, this is the
 *     value received from the channel. If it resulted in a send, this is `true`
 *     for a successful send and `false` if the channel closed first.
 * @param {module:csp.Channel} channel The channel upon which the selected
 *     operation happened.
 * @return {module:csp.SelectResult} The properties wrapped into an object for
 *     output.
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
 * `{@link module:csp.select|select}`.
 *
 * This function uses an operations list that's identical to the one used by
 * `{@link module:csp.select|select}`. It's an array of values; if a value is a
 * channel, then that operation is a take on that channel, while if it's a
 * two-element array of channel and value, then that operation is a put of that
 * value onto that channel. All options that are available to
 * `{@link module:csp.select|select}` are also available here.
 *
 * The callback is a function of one parameter, which in this case is an object
 * with `value` and `channel` properties.
 *
 * @memberof module:csp
 * @param {Object[]} operations A collection of elements that correspond to recv
 *     and send operations. A recv operation is signified by an element that is
 *     a channel (which is the channel to be received from). A send operation is
 *     specified by an element that is itself a two-element array, which has a
 *     channel followed by a value (which is the channel and value to be sent).
 * @param {module:csp.SelectCallback} callback A function that gets invoked when
 *     one of the operations completes.
 * @param {Object} [options={}] An optional object which can change the behavior
 *     of `selectAsync` through two properties.
 * @param {boolean} [options.priority=false] If `true`, then the priority of
 *     operations to complete when more than one is immediately available is a
 *     priority according to position within the operations array (earlier
 *     positions have the higher priority). If `false` or not present, the
 *     priorty of operation completion is random.
 * @param {*} [options.default] If set and all of the operations initially
 *     block, the `selectAsync` calls its callback immediately with the value of
 *     this option (the channel will be `{@link module:csp.DEFAULT|DEFAULT})`.
 *     If not set, the `selectAsync` call will not call its callback until one
 *     of the operations completes and that value and channel will be the ones
 *     returned.
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
 * channel is set to the special value `{@link module:csp.DEFAULT|DEFAULT}`.
 *
 * @memberof module:csp
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
 *     option (the channel will be `{@link module:csp.DEFAULT|DEFAULT})`. If not
 *     set, the `select` call will block until one of the operations completes
 *     and that value and channel will be the ones returned.
 * @return {Promise<module:csp.SelectResult>} A promise that will resolve to an
 *     object of two properties: `value` will contain the value that would have
 *     been returned by the corresponding `{@link module:csp.send|send}` or
 *     `{@link module:csp.recv|recv}` operation; and `channel` will be a
 *     reference to the channel that completed the operation to allow `select`
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
 * @memberof module:csp
 * @param {module:csp.SelectResult} result The result coming from a select
 *     operation.
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
 * @memberof module:csp
 * @param {module:csp.SelectResult} result The result coming from a select
 *     operation.
 * @return {module:csp.Channel} The channel upon which the select operation
 *     completed.
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
 * @module csp/dispatcher
 * @see module:csp.config
 * @private
 */

const queue = Object(modules_queue__WEBPACK_IMPORTED_MODULE_0__["queue"])();
/**
 * The dispatch method option indicating that `setImmediate` should be used to
 * dispatch tasks.
 *
 * This is the default option. For environments that don't support
 * `setImmediate`, this falls back to
 * `{@link module:csp.MESSAGE_CHANNEL|MESSAGE_CHANNEL}`.
 *
 * @memberof module:csp
 * @type {Symbol}
 * @see {@link module:csp.config|config}
 */

const SET_IMMEDIATE = Symbol("SET_IMMEDIATE");
/**
 * The dispatch method option indicating that a `MessageChannel` should be used
 * to dispatch tasks.
 *
 * For environments that don't support `MessageChannel`, this falls back to
 * `{@link module:csp.SET_TIMEOUT|SET_TIMEOUT}`.
 *
 * @memberof module:csp
 * @type {Symbol}
 * @see {@link module:csp.config|config}
 */

const MESSAGE_CHANNEL = Symbol("MESSAGE_CHANNEL");
/**
 * The dispatch method option indicating that `setTimeout` should be used to
 * dispatch tasks.
 *
 * This method is always available, but it's also always less efficient than any
 * other method, so it should be used as a last resort.
 *
 * @memberof module:csp
 * @type {Symbol}
 * @see  {@link module:csp.config|config}
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
 * that can be set with `{@link module:csp.config|config}`.
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
 * `{@link module:csp.SET_IMMEDIATE|SET_IMMEDIATE}` can still be recorded as the
 * dispatch method, but this function will return
 * `{@link module:csp.MESSAGE_CHANNEL|MESSAGE_CHANNEL}`.
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
 * The configuration of the Chanko dispatcher. An object like this is returned
 * from the {@link module:csp.config} function, and it may also be passed to the
 * same function (though each property is optional in that case).
 *
 * @typedef {object} DispatcherConfig
 * @memberof module:csp
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
 * @memberof module:csp
 * @param {Object} opts A mapping of options to their new values. Extra values
 *     (properties that are not options) are ignored.
 * @param {number} [opts.batchSize] The maximum number of tasks that the
 *     dispatcher will run in a single batch (initially, this is 1024). If the
 *     number of pending tasks exceeds this, the remaining are not discarded.
 *     They're simply run as part of another batch after the current batch
 *     completes.
 * @param {Symbol} [opts.dispatchMethod] The method used to dispatch a process
 *     into a separate line of execution. Possible values are
 *     `{@link module:csp.SET_IMMEDIATE|SET_IMMEDIATE}`,
 *     `{@link module:csp.MESSAGE_CHANNEL|MESSAGE_CHANNEL}`, or
 *     `{@link module:csp.SET_TIMEOUT|SET_TIMEOUT}`, with the initial being
 *     `{@link module:csp.SET_IMMEDIATE|SET_IMMEDIATE}`. If a method is set but
 *     is not available in that environment, then it will silently fall back to
 *     the next method that is available.
 * @return {module:csp.DispatcherConfig} The configuration settings for the
 *     dispatcher after any new values have been set.
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


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/timers-browserify/main.js */ "../../node_modules/timers-browserify/main.js").setImmediate))

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
 * @module csp/process
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
 * @memberof module:csp
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
 * @memberof module:csp
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
 * @memberof module:csp
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
 * The mapping of protocol names to their respective property key names. The
 * values of this map will depend on whether symbols are available.
 *
 * @typedef {object} ProtocolMap
 * @memberof module:core
 * @private
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
 * @property {Symbol} completed The `reducer/completed` protocol. The presence
 *     of this key on an object indicates that its transformation has been
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
 * @type {module:csp.ProtocolMap}
 * @memberof module:csp
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
 * @module csp/queue
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
 * @memberof module:csp
 */
const EMPTY = Symbol("EMPTY");
/**
 * A marker property name to indicate that an object is in fact a queue.
 *
 * A queue has a property with this name whose readonly value is set to `true`.
 * This is not meant to be read except by the
 * `{@link module:queue.isQueue|isQueue}` function.
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
 * @memberof module:csp/queue
 * @returns {module:csp/queue~Queue} A new, empty queue.
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
 * @memberof module:csp/queue
 * @param {module:csp/queue~Queue} queue The queue whose items are being
 *     counted.
 * @return {number} The number of items in the queue.
 * @private
 */


function count(queue) {
  return queue.store.length - queue.pointer;
}
/**
 * Determines whether a queue is empty.
 *
 * @memberof module:csp/queue
 * @param {module:csp/queue~Queue} queue The queue being checked for emptiness.
 * @return {boolean} Either `true` if the queue is empty or `false` if it is
 *     not.
 * @private
 */


function isEmpty(queue) {
  return queue.store.length === 0;
}
/**
 * Adds an item to a queue.
 *
 * @memberof module:csp/queue
 * @param {module:csp/queue~Queue} queue The queue which is having an item added
 *     to it.
 * @param {*} item The item being added to the queue.
 * @private
 */


function enqueue(queue, item) {
  queue.store.push(item);
}
/**
 * Removes an item from a queue and returns that item. If the removal causes the
 * amount of empty space at the head of the backing store to exceed a threshold,
 * that empty space is removed.
 *
 * @memberof module:csp/queue
 * @param {module:csp/queue~Queue} queue The queue whose oldest item is to be
 *     removed.
 * @return {*} The oldest stored item in the queue.
 * @private
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
 * @memberof module:csp/queue
 * @param {module:csp/queue~Queue} queue The queue whose oldest item is to be
 *     peeked at.
 * @return {*} The oldest item stored in the queue.
 * @private
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
 * @memberof module:csp/queue
 * @param {module:csp/queue~Queue} queue The queue being filtered.
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jc3Avd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2NzcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jc3AvL2hvbWUvYmFyYW5kaXMvRGV2ZWxvcG1lbnQvcHJvamVjdHMvY2hhbmtvL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL0FzeW5jR2VuZXJhdG9yLmpzIiwid2VicGFjazovL2NzcC8vaG9tZS9iYXJhbmRpcy9EZXZlbG9wbWVudC9wcm9qZWN0cy9jaGFua28vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvQXdhaXRWYWx1ZS5qcyIsIndlYnBhY2s6Ly9jc3AvL2hvbWUvYmFyYW5kaXMvRGV2ZWxvcG1lbnQvcHJvamVjdHMvY2hhbmtvL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2F3YWl0QXN5bmNHZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vY3NwLy9ob21lL2JhcmFuZGlzL0RldmVsb3BtZW50L3Byb2plY3RzL2NoYW5rby9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy93cmFwQXN5bmNHZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vY3NwLy9ob21lL2JhcmFuZGlzL0RldmVsb3BtZW50L3Byb2plY3RzL2NoYW5rby9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovL2NzcC8vaG9tZS9iYXJhbmRpcy9EZXZlbG9wbWVudC9wcm9qZWN0cy9jaGFua28vbm9kZV9tb2R1bGVzL3NldGltbWVkaWF0ZS9zZXRJbW1lZGlhdGUuanMiLCJ3ZWJwYWNrOi8vY3NwLy9ob21lL2JhcmFuZGlzL0RldmVsb3BtZW50L3Byb2plY3RzL2NoYW5rby9ub2RlX21vZHVsZXMvdGltZXJzLWJyb3dzZXJpZnkvbWFpbi5qcyIsIndlYnBhY2s6Ly9jc3AvKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovL2NzcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9jc3AvLi9zcmMvbW9kdWxlcy9idWZmZXIuanMiLCJ3ZWJwYWNrOi8vY3NwLy4vc3JjL21vZHVsZXMvY2hhbm5lbC9oYW5kbGVyLmpzIiwid2VicGFjazovL2NzcC8uL3NyYy9tb2R1bGVzL2NoYW5uZWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY3NwLy4vc3JjL21vZHVsZXMvY2hhbm5lbC9zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vY3NwLy4vc3JjL21vZHVsZXMvZGlzcGF0Y2hlci5qcyIsIndlYnBhY2s6Ly9jc3AvLi9zcmMvbW9kdWxlcy9wcm9jZXNzLmpzIiwid2VicGFjazovL2NzcC8uL3NyYy9tb2R1bGVzL3Byb3RvY29sLmpzIiwid2VicGFjazovL2NzcC8uL3NyYy9tb2R1bGVzL3F1ZXVlLmpzIl0sIm5hbWVzIjpbIkJVRkZFUiIsIlN5bWJvbCIsIkZJWEVEIiwiRFJPUFBJTkciLCJTTElESU5HIiwiaXNCdWZmZXIiLCJvYmoiLCJmaXhlZCIsInNpemUiLCJPYmplY3QiLCJjcmVhdGUiLCJxdWV1ZSIsInZhbHVlIiwicSIsImRyb3BwaW5nIiwic2xpZGluZyIsImJ1ZmZlciIsImNvdW50IiwicUNvdW50IiwiaXNGdWxsIiwiYWRkIiwiaXRlbXMiLCJpdGVtIiwiZW5xdWV1ZSIsImRlcXVldWUiLCJyZW1vdmUiLCJNQVhfRElSVFkiLCJNQVhfUVVFVUVEIiwiQ0xPU0VEIiwiQk9YIiwiaXNCb3giLCJpc0NvbXBsZXRlZCIsInAiLCJjb21wbGV0ZWQiLCJib3giLCJ3cml0YWJsZSIsInNlbmRCb3giLCJoYW5kbGVyIiwiY2hhbm5lbCIsInhmb3JtIiwiaXNUaW1lZCIsIm1heERpcnR5IiwibWF4UXVldWVkIiwicmVjdnMiLCJzZW5kcyIsImRpcnR5UmVjdnMiLCJkaXJ0eVNlbmRzIiwiY2xvc2VkIiwiaXNCdWZmZXJlZCIsImhhbmRsZVNlbmQiLCJFcnJvciIsImNvbW1pdCIsInJlY2VpdmVyIiwiY2FsbGJhY2siLCJkb25lIiwic3RlcCIsIkVNUFRZIiwiYWN0aXZlIiwidmFsIiwiZGlzcGF0Y2giLCJjbG9zZSIsImZpbHRlciIsInNlbmRlciIsImhhbmRsZVJlY3YiLCJzZW5kSGFuZGxlciIsIm1heCIsInJlc3VsdCIsIkRFRkFVTFRfSEFORExFUiIsIm9wSGFuZGxlciIsImZuIiwiaGFuZGxlRXhjZXB0aW9uIiwiZXgiLCJoYW5kbGVyVHJhbnNkdWNlciIsImlucHV0IiwiYnVmZmVyUmVkdWNlciIsImluaXQiLCJwYXJzZUFyZ3MiLCJvcHRpb25zIiwiZGVmYXVsdE9wdGlvbnMiLCJidWYiLCJvcHRzIiwidHJhbnNkdWNlciIsInRpbWVyIiwiYXNzaWduIiwiY2hhbiIsInhmIiwiY2giLCJjaGFuSW1wbCIsIml0ZXJhdG9yIiwicmVjdiIsImFzeW5jSXRlcmF0b3IiLCJzZXRUaW1lb3V0IiwiY2xvc2VJbXBsIiwidGltZWRDaGFuIiwiZGVsYXkiLCJ0cmFuc0NoYW4iLCJpc0Nsb3NlZCIsInNlbmRBc3luYyIsInJlY3ZBc3luYyIsInNlbmQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlY3ZPclRocm93IiwicmVqZWN0IiwicHJvdG90eXBlIiwiaXNQcm90b3R5cGVPZiIsImNhbGwiLCJERUZBVUxUIiwic2VsZWN0SGFuZGxlciIsImdldCIsInJhbmRvbUFycmF5IiwidXBwZXIiLCJhcnJheSIsImsiLCJwdXNoIiwiaiIsImkiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ0ZW1wIiwic2VsZWN0UmVzdWx0Iiwic2VsZWN0QXN5bmMiLCJvcHMiLCJsZW5ndGgiLCJwcmlvcml0eSIsImluZGljZXMiLCJjcmVhdGVTZWxlY3RIYW5kbGVyIiwib3AiLCJBcnJheSIsImlzQXJyYXkiLCJoYXNPd25Qcm9wZXJ0eSIsImRlZmF1bHQiLCJzZWxlY3QiLCJTRVRfSU1NRURJQVRFIiwiTUVTU0FHRV9DSEFOTkVMIiwiU0VUX1RJTUVPVVQiLCJiYXRjaFNpemUiLCJkaXNwYXRjaE1ldGhvZCIsImRpc3BhdGNoZXIiLCJjcmVhdGVEaXNwYXRjaGVyIiwicnVubmluZyIsInF1ZXVlZCIsImNhbGNEaXNwYXRjaE1ldGhvZCIsInNldEltbWVkaWF0ZSIsInByb2Nlc3NUYXNrcyIsIk1lc3NhZ2VDaGFubmVsIiwicG9ydDEiLCJvbm1lc3NhZ2UiLCJwb3J0MiIsInBvc3RNZXNzYWdlIiwidGFzayIsInNldERpc3BhdGNoZXIiLCJjb25maWciLCJrZXkiLCJzbGVlcCIsImdvIiwiYXJncyIsImpvaW4iLCJmbnMiLCJhbGwiLCJwcm90b2NvbHMiLCJmb3IiLCJRVUVVRSIsImlzUXVldWUiLCJzdG9yZSIsInBvaW50ZXIiLCJpc0VtcHR5Iiwic2xpY2UiLCJwZWVrIiwicHJlZGljYXRlIiwiZW5kIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLGlCQUFpQixtQkFBTyxDQUFDLDZFQUFjOztBQUV2QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGdDOzs7Ozs7Ozs7OztBQ25HQTtBQUNBO0FBQ0E7O0FBRUEsNkI7Ozs7Ozs7Ozs7O0FDSkEsaUJBQWlCLG1CQUFPLENBQUMsNkVBQWM7O0FBRXZDO0FBQ0E7QUFDQTs7QUFFQSxzQzs7Ozs7Ozs7Ozs7QUNOQSxxQkFBcUIsbUJBQU8sQ0FBQyxxRkFBa0I7O0FBRS9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUM7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVTs7Ozs7Ozs7Ozs7O0FDdkx0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsaUJBQWlCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwQ0FBMEMsc0JBQXNCLEVBQUU7QUFDbEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7QUN6TEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLG1CQUFPLENBQUMscUVBQWM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDOURBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDOztBQUU1Qzs7Ozs7Ozs7Ozs7OztBQ25CQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7QUFPQTs7Ozs7Ozs7QUFTQTtBQUNBO0FBbUJBO0FBTUE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUFlQTs7Ozs7Ozs7Ozs7OztBQWFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6RUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7QUFPQTs7Ozs7Ozs7QUFTQTtBQUVBOzs7Ozs7Ozs7Ozs7QUFZQTs7Ozs7Ozs7QUFPQSxNQUFNQSxNQUFNLEdBQUdDLE1BQU0sQ0FBQyxRQUFELENBQXJCO0FB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QXVCK0osU0FBdkIsRUFBa0M7QUFDaEMsT0FBSyxJQUFJdEQsQ0FBQyxHQUFHLENBQVIsRUFBV3VELEdBQUcsR0FBRzFKLEtBQUssQ0FBQ04sS0FBRCxDQUEzQixFQUFvQ3lHLENBQUMsR0FBR3VELEdBQXhDLEVBQTZDdkQsQ0FBQyxFQUE5QyxFQUFrRDtBQUNoRCxVQUFNOUYsSUFBSSxHQUFHRSxPQUFPLENBQUNiLEtBQUQsQ0FBcEI7O0FBQ0EsUUFBSStKLFNBQVMsQ0FBQ3BKLElBQUQsQ0FBYixFQUFxQjtBQUNuQkMsYUFBTyxDQUFDWixLQUFELEVBQVFXLElBQVIsQ0FBUDtBQUNEO0FBQ0Y7QUFDRiIsImZpbGUiOiJjaGFua28tY3NwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiY3NwXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImNzcFwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwidmFyIEF3YWl0VmFsdWUgPSByZXF1aXJlKFwiLi9Bd2FpdFZhbHVlXCIpO1xuXG5mdW5jdGlvbiBBc3luY0dlbmVyYXRvcihnZW4pIHtcbiAgdmFyIGZyb250LCBiYWNrO1xuXG4gIGZ1bmN0aW9uIHNlbmQoa2V5LCBhcmcpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlcXVlc3QgPSB7XG4gICAgICAgIGtleToga2V5LFxuICAgICAgICBhcmc6IGFyZyxcbiAgICAgICAgcmVzb2x2ZTogcmVzb2x2ZSxcbiAgICAgICAgcmVqZWN0OiByZWplY3QsXG4gICAgICAgIG5leHQ6IG51bGxcbiAgICAgIH07XG5cbiAgICAgIGlmIChiYWNrKSB7XG4gICAgICAgIGJhY2sgPSBiYWNrLm5leHQgPSByZXF1ZXN0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZnJvbnQgPSBiYWNrID0gcmVxdWVzdDtcbiAgICAgICAgcmVzdW1lKGtleSwgYXJnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc3VtZShrZXksIGFyZykge1xuICAgIHRyeSB7XG4gICAgICB2YXIgcmVzdWx0ID0gZ2VuW2tleV0oYXJnKTtcbiAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgIHZhciB3cmFwcGVkQXdhaXQgPSB2YWx1ZSBpbnN0YW5jZW9mIEF3YWl0VmFsdWU7XG4gICAgICBQcm9taXNlLnJlc29sdmUod3JhcHBlZEF3YWl0ID8gdmFsdWUud3JhcHBlZCA6IHZhbHVlKS50aGVuKGZ1bmN0aW9uIChhcmcpIHtcbiAgICAgICAgaWYgKHdyYXBwZWRBd2FpdCkge1xuICAgICAgICAgIHJlc3VtZShrZXkgPT09IFwicmV0dXJuXCIgPyBcInJldHVyblwiIDogXCJuZXh0XCIsIGFyZyk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0dGxlKHJlc3VsdC5kb25lID8gXCJyZXR1cm5cIiA6IFwibm9ybWFsXCIsIGFyZyk7XG4gICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIHJlc3VtZShcInRocm93XCIsIGVycik7XG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHNldHRsZShcInRocm93XCIsIGVycik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2V0dGxlKHR5cGUsIHZhbHVlKSB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIFwicmV0dXJuXCI6XG4gICAgICAgIGZyb250LnJlc29sdmUoe1xuICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICBkb25lOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBcInRocm93XCI6XG4gICAgICAgIGZyb250LnJlamVjdCh2YWx1ZSk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBmcm9udC5yZXNvbHZlKHtcbiAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgZG9uZTogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGZyb250ID0gZnJvbnQubmV4dDtcblxuICAgIGlmIChmcm9udCkge1xuICAgICAgcmVzdW1lKGZyb250LmtleSwgZnJvbnQuYXJnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYmFjayA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgdGhpcy5faW52b2tlID0gc2VuZDtcblxuICBpZiAodHlwZW9mIGdlbltcInJldHVyblwiXSAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdGhpc1tcInJldHVyblwiXSA9IHVuZGVmaW5lZDtcbiAgfVxufVxuXG5pZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5hc3luY0l0ZXJhdG9yKSB7XG4gIEFzeW5jR2VuZXJhdG9yLnByb3RvdHlwZVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG59XG5cbkFzeW5jR2VuZXJhdG9yLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKGFyZykge1xuICByZXR1cm4gdGhpcy5faW52b2tlKFwibmV4dFwiLCBhcmcpO1xufTtcblxuQXN5bmNHZW5lcmF0b3IucHJvdG90eXBlW1widGhyb3dcIl0gPSBmdW5jdGlvbiAoYXJnKSB7XG4gIHJldHVybiB0aGlzLl9pbnZva2UoXCJ0aHJvd1wiLCBhcmcpO1xufTtcblxuQXN5bmNHZW5lcmF0b3IucHJvdG90eXBlW1wicmV0dXJuXCJdID0gZnVuY3Rpb24gKGFyZykge1xuICByZXR1cm4gdGhpcy5faW52b2tlKFwicmV0dXJuXCIsIGFyZyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFzeW5jR2VuZXJhdG9yOyIsImZ1bmN0aW9uIF9Bd2FpdFZhbHVlKHZhbHVlKSB7XG4gIHRoaXMud3JhcHBlZCA9IHZhbHVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9Bd2FpdFZhbHVlOyIsInZhciBBd2FpdFZhbHVlID0gcmVxdWlyZShcIi4vQXdhaXRWYWx1ZVwiKTtcblxuZnVuY3Rpb24gX2F3YWl0QXN5bmNHZW5lcmF0b3IodmFsdWUpIHtcbiAgcmV0dXJuIG5ldyBBd2FpdFZhbHVlKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXdhaXRBc3luY0dlbmVyYXRvcjsiLCJ2YXIgQXN5bmNHZW5lcmF0b3IgPSByZXF1aXJlKFwiLi9Bc3luY0dlbmVyYXRvclwiKTtcblxuZnVuY3Rpb24gX3dyYXBBc3luY0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBuZXcgQXN5bmNHZW5lcmF0b3IoZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3dyYXBBc3luY0dlbmVyYXRvcjsiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiKGZ1bmN0aW9uIChnbG9iYWwsIHVuZGVmaW5lZCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgaWYgKGdsb2JhbC5zZXRJbW1lZGlhdGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBuZXh0SGFuZGxlID0gMTsgLy8gU3BlYyBzYXlzIGdyZWF0ZXIgdGhhbiB6ZXJvXG4gICAgdmFyIHRhc2tzQnlIYW5kbGUgPSB7fTtcbiAgICB2YXIgY3VycmVudGx5UnVubmluZ0FUYXNrID0gZmFsc2U7XG4gICAgdmFyIGRvYyA9IGdsb2JhbC5kb2N1bWVudDtcbiAgICB2YXIgcmVnaXN0ZXJJbW1lZGlhdGU7XG5cbiAgICBmdW5jdGlvbiBzZXRJbW1lZGlhdGUoY2FsbGJhY2spIHtcbiAgICAgIC8vIENhbGxiYWNrIGNhbiBlaXRoZXIgYmUgYSBmdW5jdGlvbiBvciBhIHN0cmluZ1xuICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGNhbGxiYWNrID0gbmV3IEZ1bmN0aW9uKFwiXCIgKyBjYWxsYmFjayk7XG4gICAgICB9XG4gICAgICAvLyBDb3B5IGZ1bmN0aW9uIGFyZ3VtZW50c1xuICAgICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpICsgMV07XG4gICAgICB9XG4gICAgICAvLyBTdG9yZSBhbmQgcmVnaXN0ZXIgdGhlIHRhc2tcbiAgICAgIHZhciB0YXNrID0geyBjYWxsYmFjazogY2FsbGJhY2ssIGFyZ3M6IGFyZ3MgfTtcbiAgICAgIHRhc2tzQnlIYW5kbGVbbmV4dEhhbmRsZV0gPSB0YXNrO1xuICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUobmV4dEhhbmRsZSk7XG4gICAgICByZXR1cm4gbmV4dEhhbmRsZSsrO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFySW1tZWRpYXRlKGhhbmRsZSkge1xuICAgICAgICBkZWxldGUgdGFza3NCeUhhbmRsZVtoYW5kbGVdO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJ1bih0YXNrKSB7XG4gICAgICAgIHZhciBjYWxsYmFjayA9IHRhc2suY2FsbGJhY2s7XG4gICAgICAgIHZhciBhcmdzID0gdGFzay5hcmdzO1xuICAgICAgICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJ1bklmUHJlc2VudChoYW5kbGUpIHtcbiAgICAgICAgLy8gRnJvbSB0aGUgc3BlYzogXCJXYWl0IHVudGlsIGFueSBpbnZvY2F0aW9ucyBvZiB0aGlzIGFsZ29yaXRobSBzdGFydGVkIGJlZm9yZSB0aGlzIG9uZSBoYXZlIGNvbXBsZXRlZC5cIlxuICAgICAgICAvLyBTbyBpZiB3ZSdyZSBjdXJyZW50bHkgcnVubmluZyBhIHRhc2ssIHdlJ2xsIG5lZWQgdG8gZGVsYXkgdGhpcyBpbnZvY2F0aW9uLlxuICAgICAgICBpZiAoY3VycmVudGx5UnVubmluZ0FUYXNrKSB7XG4gICAgICAgICAgICAvLyBEZWxheSBieSBkb2luZyBhIHNldFRpbWVvdXQuIHNldEltbWVkaWF0ZSB3YXMgdHJpZWQgaW5zdGVhZCwgYnV0IGluIEZpcmVmb3ggNyBpdCBnZW5lcmF0ZWQgYVxuICAgICAgICAgICAgLy8gXCJ0b28gbXVjaCByZWN1cnNpb25cIiBlcnJvci5cbiAgICAgICAgICAgIHNldFRpbWVvdXQocnVuSWZQcmVzZW50LCAwLCBoYW5kbGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHRhc2sgPSB0YXNrc0J5SGFuZGxlW2hhbmRsZV07XG4gICAgICAgICAgICBpZiAodGFzaykge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IHRydWU7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcnVuKHRhc2spO1xuICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW1tZWRpYXRlKGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxOZXh0VGlja0ltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgcHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbiAoKSB7IHJ1bklmUHJlc2VudChoYW5kbGUpOyB9KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYW5Vc2VQb3N0TWVzc2FnZSgpIHtcbiAgICAgICAgLy8gVGhlIHRlc3QgYWdhaW5zdCBgaW1wb3J0U2NyaXB0c2AgcHJldmVudHMgdGhpcyBpbXBsZW1lbnRhdGlvbiBmcm9tIGJlaW5nIGluc3RhbGxlZCBpbnNpZGUgYSB3ZWIgd29ya2VyLFxuICAgICAgICAvLyB3aGVyZSBgZ2xvYmFsLnBvc3RNZXNzYWdlYCBtZWFucyBzb21ldGhpbmcgY29tcGxldGVseSBkaWZmZXJlbnQgYW5kIGNhbid0IGJlIHVzZWQgZm9yIHRoaXMgcHVycG9zZS5cbiAgICAgICAgaWYgKGdsb2JhbC5wb3N0TWVzc2FnZSAmJiAhZ2xvYmFsLmltcG9ydFNjcmlwdHMpIHtcbiAgICAgICAgICAgIHZhciBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhciBvbGRPbk1lc3NhZ2UgPSBnbG9iYWwub25tZXNzYWdlO1xuICAgICAgICAgICAgZ2xvYmFsLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXMgPSBmYWxzZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBnbG9iYWwucG9zdE1lc3NhZ2UoXCJcIiwgXCIqXCIpO1xuICAgICAgICAgICAgZ2xvYmFsLm9ubWVzc2FnZSA9IG9sZE9uTWVzc2FnZTtcbiAgICAgICAgICAgIHJldHVybiBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbFBvc3RNZXNzYWdlSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIC8vIEluc3RhbGxzIGFuIGV2ZW50IGhhbmRsZXIgb24gYGdsb2JhbGAgZm9yIHRoZSBgbWVzc2FnZWAgZXZlbnQ6IHNlZVxuICAgICAgICAvLyAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuL0RPTS93aW5kb3cucG9zdE1lc3NhZ2VcbiAgICAgICAgLy8gKiBodHRwOi8vd3d3LndoYXR3Zy5vcmcvc3BlY3Mvd2ViLWFwcHMvY3VycmVudC13b3JrL211bHRpcGFnZS9jb21tcy5odG1sI2Nyb3NzRG9jdW1lbnRNZXNzYWdlc1xuXG4gICAgICAgIHZhciBtZXNzYWdlUHJlZml4ID0gXCJzZXRJbW1lZGlhdGUkXCIgKyBNYXRoLnJhbmRvbSgpICsgXCIkXCI7XG4gICAgICAgIHZhciBvbkdsb2JhbE1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnNvdXJjZSA9PT0gZ2xvYmFsICYmXG4gICAgICAgICAgICAgICAgdHlwZW9mIGV2ZW50LmRhdGEgPT09IFwic3RyaW5nXCIgJiZcbiAgICAgICAgICAgICAgICBldmVudC5kYXRhLmluZGV4T2YobWVzc2FnZVByZWZpeCkgPT09IDApIHtcbiAgICAgICAgICAgICAgICBydW5JZlByZXNlbnQoK2V2ZW50LmRhdGEuc2xpY2UobWVzc2FnZVByZWZpeC5sZW5ndGgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBvbkdsb2JhbE1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGdsb2JhbC5hdHRhY2hFdmVudChcIm9ubWVzc2FnZVwiLCBvbkdsb2JhbE1lc3NhZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShtZXNzYWdlUHJlZml4ICsgaGFuZGxlLCBcIipcIik7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbE1lc3NhZ2VDaGFubmVsSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHZhciBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBoYW5kbGUgPSBldmVudC5kYXRhO1xuICAgICAgICAgICAgcnVuSWZQcmVzZW50KGhhbmRsZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIGNoYW5uZWwucG9ydDIucG9zdE1lc3NhZ2UoaGFuZGxlKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsUmVhZHlTdGF0ZUNoYW5nZUltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICB2YXIgaHRtbCA9IGRvYy5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICAvLyBDcmVhdGUgYSA8c2NyaXB0PiBlbGVtZW50OyBpdHMgcmVhZHlzdGF0ZWNoYW5nZSBldmVudCB3aWxsIGJlIGZpcmVkIGFzeW5jaHJvbm91c2x5IG9uY2UgaXQgaXMgaW5zZXJ0ZWRcbiAgICAgICAgICAgIC8vIGludG8gdGhlIGRvY3VtZW50LiBEbyBzbywgdGh1cyBxdWV1aW5nIHVwIHRoZSB0YXNrLiBSZW1lbWJlciB0byBjbGVhbiB1cCBvbmNlIGl0J3MgYmVlbiBjYWxsZWQuXG4gICAgICAgICAgICB2YXIgc2NyaXB0ID0gZG9jLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgICAgICAgICBzY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJ1bklmUHJlc2VudChoYW5kbGUpO1xuICAgICAgICAgICAgICAgIHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBudWxsO1xuICAgICAgICAgICAgICAgIGh0bWwucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgICAgICAgICBzY3JpcHQgPSBudWxsO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsU2V0VGltZW91dEltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgc2V0VGltZW91dChydW5JZlByZXNlbnQsIDAsIGhhbmRsZSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gSWYgc3VwcG9ydGVkLCB3ZSBzaG91bGQgYXR0YWNoIHRvIHRoZSBwcm90b3R5cGUgb2YgZ2xvYmFsLCBzaW5jZSB0aGF0IGlzIHdoZXJlIHNldFRpbWVvdXQgZXQgYWwuIGxpdmUuXG4gICAgdmFyIGF0dGFjaFRvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mICYmIE9iamVjdC5nZXRQcm90b3R5cGVPZihnbG9iYWwpO1xuICAgIGF0dGFjaFRvID0gYXR0YWNoVG8gJiYgYXR0YWNoVG8uc2V0VGltZW91dCA/IGF0dGFjaFRvIDogZ2xvYmFsO1xuXG4gICAgLy8gRG9uJ3QgZ2V0IGZvb2xlZCBieSBlLmcuIGJyb3dzZXJpZnkgZW52aXJvbm1lbnRzLlxuICAgIGlmICh7fS50b1N0cmluZy5jYWxsKGdsb2JhbC5wcm9jZXNzKSA9PT0gXCJbb2JqZWN0IHByb2Nlc3NdXCIpIHtcbiAgICAgICAgLy8gRm9yIE5vZGUuanMgYmVmb3JlIDAuOVxuICAgICAgICBpbnN0YWxsTmV4dFRpY2tJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChjYW5Vc2VQb3N0TWVzc2FnZSgpKSB7XG4gICAgICAgIC8vIEZvciBub24tSUUxMCBtb2Rlcm4gYnJvd3NlcnNcbiAgICAgICAgaW5zdGFsbFBvc3RNZXNzYWdlSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoZ2xvYmFsLk1lc3NhZ2VDaGFubmVsKSB7XG4gICAgICAgIC8vIEZvciB3ZWIgd29ya2Vycywgd2hlcmUgc3VwcG9ydGVkXG4gICAgICAgIGluc3RhbGxNZXNzYWdlQ2hhbm5lbEltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGRvYyAmJiBcIm9ucmVhZHlzdGF0ZWNoYW5nZVwiIGluIGRvYy5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpKSB7XG4gICAgICAgIC8vIEZvciBJRSA24oCTOFxuICAgICAgICBpbnN0YWxsUmVhZHlTdGF0ZUNoYW5nZUltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBGb3Igb2xkZXIgYnJvd3NlcnNcbiAgICAgICAgaW5zdGFsbFNldFRpbWVvdXRJbXBsZW1lbnRhdGlvbigpO1xuICAgIH1cblxuICAgIGF0dGFjaFRvLnNldEltbWVkaWF0ZSA9IHNldEltbWVkaWF0ZTtcbiAgICBhdHRhY2hUby5jbGVhckltbWVkaWF0ZSA9IGNsZWFySW1tZWRpYXRlO1xufSh0eXBlb2Ygc2VsZiA9PT0gXCJ1bmRlZmluZWRcIiA/IHR5cGVvZiBnbG9iYWwgPT09IFwidW5kZWZpbmVkXCIgPyB0aGlzIDogZ2xvYmFsIDogc2VsZikpO1xuIiwidmFyIHNjb3BlID0gKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgJiYgZ2xvYmFsKSB8fFxuICAgICAgICAgICAgKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmIHNlbGYpIHx8XG4gICAgICAgICAgICB3aW5kb3c7XG52YXIgYXBwbHkgPSBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHk7XG5cbi8vIERPTSBBUElzLCBmb3IgY29tcGxldGVuZXNzXG5cbmV4cG9ydHMuc2V0VGltZW91dCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFRpbWVvdXQoYXBwbHkuY2FsbChzZXRUaW1lb3V0LCBzY29wZSwgYXJndW1lbnRzKSwgY2xlYXJUaW1lb3V0KTtcbn07XG5leHBvcnRzLnNldEludGVydmFsID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgVGltZW91dChhcHBseS5jYWxsKHNldEludGVydmFsLCBzY29wZSwgYXJndW1lbnRzKSwgY2xlYXJJbnRlcnZhbCk7XG59O1xuZXhwb3J0cy5jbGVhclRpbWVvdXQgPVxuZXhwb3J0cy5jbGVhckludGVydmFsID0gZnVuY3Rpb24odGltZW91dCkge1xuICBpZiAodGltZW91dCkge1xuICAgIHRpbWVvdXQuY2xvc2UoKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gVGltZW91dChpZCwgY2xlYXJGbikge1xuICB0aGlzLl9pZCA9IGlkO1xuICB0aGlzLl9jbGVhckZuID0gY2xlYXJGbjtcbn1cblRpbWVvdXQucHJvdG90eXBlLnVucmVmID0gVGltZW91dC5wcm90b3R5cGUucmVmID0gZnVuY3Rpb24oKSB7fTtcblRpbWVvdXQucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuX2NsZWFyRm4uY2FsbChzY29wZSwgdGhpcy5faWQpO1xufTtcblxuLy8gRG9lcyBub3Qgc3RhcnQgdGhlIHRpbWUsIGp1c3Qgc2V0cyB1cCB0aGUgbWVtYmVycyBuZWVkZWQuXG5leHBvcnRzLmVucm9sbCA9IGZ1bmN0aW9uKGl0ZW0sIG1zZWNzKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcbiAgaXRlbS5faWRsZVRpbWVvdXQgPSBtc2Vjcztcbn07XG5cbmV4cG9ydHMudW5lbnJvbGwgPSBmdW5jdGlvbihpdGVtKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcbiAgaXRlbS5faWRsZVRpbWVvdXQgPSAtMTtcbn07XG5cbmV4cG9ydHMuX3VucmVmQWN0aXZlID0gZXhwb3J0cy5hY3RpdmUgPSBmdW5jdGlvbihpdGVtKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcblxuICB2YXIgbXNlY3MgPSBpdGVtLl9pZGxlVGltZW91dDtcbiAgaWYgKG1zZWNzID49IDApIHtcbiAgICBpdGVtLl9pZGxlVGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbiBvblRpbWVvdXQoKSB7XG4gICAgICBpZiAoaXRlbS5fb25UaW1lb3V0KVxuICAgICAgICBpdGVtLl9vblRpbWVvdXQoKTtcbiAgICB9LCBtc2Vjcyk7XG4gIH1cbn07XG5cbi8vIHNldGltbWVkaWF0ZSBhdHRhY2hlcyBpdHNlbGYgdG8gdGhlIGdsb2JhbCBvYmplY3RcbnJlcXVpcmUoXCJzZXRpbW1lZGlhdGVcIik7XG4vLyBPbiBzb21lIGV4b3RpYyBlbnZpcm9ubWVudHMsIGl0J3Mgbm90IGNsZWFyIHdoaWNoIG9iamVjdCBgc2V0aW1tZWRpYXRlYCB3YXNcbi8vIGFibGUgdG8gaW5zdGFsbCBvbnRvLiAgU2VhcmNoIGVhY2ggcG9zc2liaWxpdHkgaW4gdGhlIHNhbWUgb3JkZXIgYXMgdGhlXG4vLyBgc2V0aW1tZWRpYXRlYCBsaWJyYXJ5LlxuZXhwb3J0cy5zZXRJbW1lZGlhdGUgPSAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZi5zZXRJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiICYmIGdsb2JhbC5zZXRJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICh0aGlzICYmIHRoaXMuc2V0SW1tZWRpYXRlKTtcbmV4cG9ydHMuY2xlYXJJbW1lZGlhdGUgPSAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZi5jbGVhckltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBnbG9iYWwuY2xlYXJJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMgJiYgdGhpcy5jbGVhckltbWVkaWF0ZSk7XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuLyoqXG4gKiBBbGwgb2YgdGhlIHB1YmxpYy1mYWNpbmcgQ2hhbmtvIGZ1bmN0aW9ucyBhcmUgZ2F0aGVyZWQgaGVyZSBpbiBvbmUgcGxhY2UgdG9cbiAqIGJlIGV4cG9ydGVkIGFzIGEgd2hvbGUuIFRoaXMgaXMgYSBjb21wbGV0ZWx5IGZsYXQgbGlzdCBvZiBleHBvcnRzLCBhc1xuICogaW5sdWRpbmcgYW55IG9iamVjdCBsaXRlcmFscyBmb3IgZXhwb3J0ICh3aGljaCB3b3VsZCBiZSBuYXR1cmFsIGZvciBidWZmZXJzLFxuICogZm9yIGV4YW1wbGUpIHdvdWxkIGtlZXAgdHJlZS1zaGFraW5nIGZyb20gd29ya2luZyByaWdodC5cbiAqXG4gKiBAbW9kdWxlIGNzcFxuICovXG5cbmV4cG9ydCB7IGZpeGVkLCBkcm9wcGluZywgc2xpZGluZyB9IGZyb20gXCJtb2R1bGVzL2J1ZmZlclwiO1xuZXhwb3J0IHtcbiAgQ0xPU0VELFxuICBjaGFuLFxuICB0aW1lZENoYW4sXG4gIHRyYW5zQ2hhbixcbiAgc2VuZCxcbiAgcmVjdixcbiAgc2VuZEFzeW5jLFxuICByZWN2QXN5bmMsXG4gIHJlY3ZPclRocm93LFxuICBjbG9zZSxcbiAgaXNDbG9zZWQsXG4gIGlzQnVmZmVyZWQsXG4gIGlzVGltZWQsXG4gIHNlbGVjdCxcbiAgc2VsZWN0QXN5bmMsXG4gIHZhbHVlLFxuICBjaGFubmVsXG59IGZyb20gXCJtb2R1bGVzL2NoYW5uZWxcIjtcbmV4cG9ydCB7XG4gIGNvbmZpZyxcbiAgU0VUX0lNTUVESUFURSxcbiAgTUVTU0FHRV9DSEFOTkVMLFxuICBTRVRfVElNRU9VVFxufSBmcm9tIFwibW9kdWxlcy9kaXNwYXRjaGVyXCI7XG5leHBvcnQgeyBnbywgc2xlZXAsIGpvaW4gfSBmcm9tIFwibW9kdWxlcy9wcm9jZXNzXCI7XG5leHBvcnQgeyBFTVBUWSB9IGZyb20gXCJtb2R1bGVzL3F1ZXVlXCI7XG5cbi8qKlxuICogQW4gZXJyb3IgaGFuZGxpbmcgZnVuY2l0b24uIFRoaXMgaXMgdXNlZCB0byBoYW5kbGUgZXhjZXB0aW9ucyB0aHJvd24gaW4gYXN5bmNcbiAqIGZ1bmN0aW9ucyBhbmQgaW4gdHJhbnNkdWNlcnMuIFRoZSByZXR1cm4gdmFsdWUgb2YgYW4gZXhjZXB0aW9uIGhhbmRsZXIgaXNcbiAqIHR5cGljYWxseSBzZW50IHRvIGEgY2hhbm5lbDsgaWYgdGhlIGV4Y2VwdGlvbiBoYXBwZW5lZCB3aXRoaW4gYW4gYXN5bmNcbiAqIGZ1bmN0aW9uLCBpdCB3aWxsIGJlIHNlbnQgdG8gdGhhdCBmdW5jdGlvbidzIG91dHB1dCBjaGFubmVsLCBhbmQgaWYgdGhlXG4gKiBleGNwZXRpb24gaGFwcGVuZWQgaW4gYSB0cmFuc2R1Y2VyLCBpdCB3aWxsIGJlIHNlbnQgdG8gdGhlIGNoYW5uZWwgdG8gd2hpY2hcbiAqIHRoZSB0cmFuc2R1Y2VyIGlzIGF0dGFjaGVkLlxuICpcbiAqIEBjYWxsYmFjayBFeGNlcHRpb25IYW5kbGVyXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICogQHBhcmFtIHtvYmplY3R9IGVyciBUaGUgZXJyb3Igb2JqZWN0IHRoYXQgd2FzIHRocm93biB0byBjYXVzZSB0aGUgZXJyb3IgdG9cbiAqICAgICBoYXZlIHRvIGJlIGhhbmRsZWQuXG4gKiBAcmV0dXJuIHsqfSBBIHZhbHVlIGRlY2lkZWQgYnkgdGhlIGhhbmRsZXIgdGhhdCB3aWxsIGJlIHNlbnQgdG8gYSBjaGFubmVsLlxuICovXG5cbi8qKlxuICogQSBjYWxsYmFjayB0aGF0J3MgcnVuIHdoZW4gYSBub24tYmxvY2tpbmcgY2hhbm5lbCBvcGVyYXRpb24gY29tcGxldGVzLiBUaGVcbiAqIHZhbHVlIHRoYXQgdGhpcyBmdW5jdGlvbiByZWNlaXZlcyBpcyBpZGVudGljYWwgdG8gd2hhdCBpcyByZXR1cm5lZCBieSBhXG4gKiBibG9ja2luZyBjYWxsOiB0aGUgdmFsdWUgcmVjZWl2ZWQgZnJvbSB0aGUgY2hhbm5lbCBmb3IgYSBgcmVjdmAsIG9yIGB0cnVlYCBvclxuICogYGZhbHNlYCBkZXBlbmRpbmcgb24gdGhlIGNoYW5uZWwgc3RhdHVzIGZvciBhIGBzZW5kYC4gQW55IHJldHVybiB2YWx1ZSBmcm9tXG4gKiB0aGlzIGNhbGxiYWNrIGlzIGlnbm9yZWQuXG4gKlxuICogQGNhbGxiYWNrIE9wQ2FsbGJhY2tcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcGFyYW0geyp9IHZhbHVlIEVpdGhlciB0aGUgdmFsdWUgcmVjZWl2ZWQgZnJvbSB0aGUgY2hhbm5lbCwgb3Igd2hldGhlciBvclxuICogbm90IGEgdmFsdWUgd2FzIHN1Y2Nlc3NmdWxseSBzZW50LlxuICovXG5cbi8qKlxuICogQSBjYWxsYmFjayB0aGF0J3MgcnVuIHdoZW4gYSBub24tYmxvY2tpbmcgYHNlbGVjdGAgb3BlcmF0aW9uIGNvbXBsZXRlcy4gVGhlXG4gKiB2YWx1ZSB0aGF0IHRoaXMgZnVuY3Rpb24gcmVjZWl2ZXMgaXMgYW4gb2JqZWN0IHdpdGggdHdvIHByb3BlcnRpZXM6IHRoZSB2YWx1ZVxuICogdGhhdCB0aGUgYHNlbGVjdGAgb3BlcmF0aW9uIGNvbXBsZXRlZCB3aXRoIChlaXRoZXIgdGhlIHZhbHVlIHJlY2VpdmVkIGZyb21cbiAqIHRoZSBjaGFubmVsIGluIGEgcmVjZWl2ZSBvcGVyYXRpb24sIG9yIGB0cnVlYCBvciBgZmFsc2VgIGluIGEgc2VuZFxuICogb3BlcmF0aW9uKSwgYWxvbmcgd2l0aCB0aGUgY2hhbm5lbCB3aGVyZSB0aGUgb3BlcmF0aW9uIGFjdHVhbGx5IGhhcHBlbmVkLiBBbnlcbiAqIHJldHVybiB2YWx1ZSBmcm9tIHRoaXMgY2FsbGJhY2sgaXMgaWdub3JlZC5cbiAqXG4gKiBAY2FsbGJhY2sgU2VsZWN0Q2FsbGJhY2tcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuU2VsZWN0UmVzdWx0fSBkYXRhIFRoZSB2YWx1ZSByZXR1cm5lZCBmcm9tIHRoZSBzZWxlY3RcbiAqICAgICBvcGVyYXRpb24uXG4gKi9cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG4vKipcbiAqIFByb3ZpZGVzIHNldmVyYWwgdHlwZXMgb2YgYnVmZmVycyB1c2FibGUgaW4gYnVmZmVyZWQgY2hhbm5lbHMuIFRoZXNlIGFyZSBhbGxcbiAqIGJ1aWx0IG9uIGEgc21hbGwsIGVmZmljaWVudCBxdWV1ZSB3aGljaCBpcyBpbiB0dXJuIGJhY2tlZCBieSBhIEphdmFTY3JpcHRcbiAqIGFycmF5LlxuICpcbiAqIEBtb2R1bGUgY3NwL2J1ZmZlclxuICogQHByaXZhdGVcbiAqL1xuXG5pbXBvcnQgeyBxdWV1ZSBhcyBxLCBjb3VudCBhcyBxQ291bnQsIGVucXVldWUsIGRlcXVldWUgfSBmcm9tIFwibW9kdWxlcy9xdWV1ZVwiO1xuXG4vKipcbiAqIEEgYnVmZmVyIHRoYXQgc3RvcmVzIHZhbHVlcyBzZW50IHRvIGEgYnVmZmVyZWQgY2hhbm5lbCB1bnRpbCBhIHByb2Nlc3NcbiAqIHJlY2VpdmVzIHRoZW0uXG4gKlxuICogRGlmZmVyZW50IGJ1ZmZlcnMgZGlmZmVyIG9ubHkgaW4gdGhlIHdheSB0aGF0IHRoZXkgZGV0ZXJtaW5lIHdoZXRoZXIgdGhleSBhcmVcbiAqIGZ1bGwgYW5kIGluIHdoYXQgaGFwcGVucyB3aGVuIGEgbmV3IHZhbHVlIGlzIGFkZGVkIHRvIGEgZnVsbCBidWZmZXIuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqIEB0eXBlZGVmIHsobW9kdWxlOmNzcC5GaXhlZEJ1ZmZlciB8IG1vZHVsZTpjc3AuRHJvcHBpbmdCdWZmZXIgfFxuICogICAgIG1vZHVsZTpjc3AuU2xpZGluZ0J1ZmZlcil9IEJ1ZmZlclxuICovXG5cbi8qKlxuICogVGhlIG5hbWUgb2YgYSBwcm9wZXJ0eSB0aGF0IGV4aXN0cyBvbiBidWZmZXIgb2JqZWN0cyBmb3IgdGhlIHB1cnBvc2Ugb2ZcbiAqIGl0ZW50aWZ5aW5nIHRoZW0gYXMgYnVmZmVyIG9iamVjdHMuXG4gKlxuICogQHR5cGUge1N5bWJvbH1cbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IEJVRkZFUiA9IFN5bWJvbChcIkJVRkZFUlwiKTtcblxuLyoqXG4gKiBBIHBvc3NpYmxlIHZhbHVlIG9mIHRoZSBge0BsaW5rIG1vZHVsZTpjc3AvYnVmZmVyLkJVRkZFUnxCVUZGRVJ9IHByb3BlcnR5XG4gKiBpbmRpY2F0aW5nIHRoYXQgdGhlIGJ1ZmZlciBpcyBhIGZpeGVkIGJ1ZmZlci5cbiAqXG4gKiBAdHlwZSB7U3ltYm9sfVxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgRklYRUQgPSBTeW1ib2woXCJGSVhFRFwiKTtcblxuLyoqXG4gKiBBIHBvc3NpYmxlIHZhbHVlIG9mIHRoZSBge0BsaW5rIG1vZHVsZTpjc3AvYnVmZmVyLkJVRkZFUnxCVUZGRVJ9IHByb3BlcnR5XG4gKiBpbmRpY2F0aW5nIHRoYXQgdGhlIGJ1ZmZlciBpcyBhIGRyb3BwaW5nIGJ1ZmZlci5cbiAqXG4gKiBAdHlwZSB7U3ltYm9sfVxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgRFJPUFBJTkcgPSBTeW1ib2woXCJEUk9QUElOR1wiKTtcblxuLyoqXG4gKiBBIHBvc3NpYmxlIHZhbHVlIG9mIHRoZSBge0BsaW5rIG1vZHVsZTpjc3AvYnVmZmVyLkJVRkZFUnxCVUZGRVJ9IHByb3BlcnR5XG4gKiBpbmRpY2F0aW5nIHRoYXQgdGhlIGJ1ZmZlciBpcyBhIHNsaWRpbmcgYnVmZmVyLlxuICpcbiAqIEB0eXBlIHtTeW1ib2x9XG4gKiBAcHJpdmF0ZVxuICovXG5jb25zdCBTTElESU5HID0gU3ltYm9sKFwiU0xJRElOR1wiKTtcblxuLyoqXG4gKiBQcmVkaWNhdGUgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBzdXBwbGllZCBvYmplY3QgaXMgYSBidWZmZXIuXG4gKlxuICogQHBhcmFtIHsqfSBvYmogVGhlIHZhbHVlIHRvIHRlc3QgdG8gc2VlIGlmIGl0J3MgYSBidWZmZXIuXG4gKiBAcmV0dXJuIHtib29sZWFufSBFaXRoZXIgYHRydWVgIGlmIHRoZSB2YWx1ZSBpcyBhIGJ1ZmZlciwgb3IgYGZhbHNlYCBpZiBpdCBpc1xuICogICAgIG5vdC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGlzQnVmZmVyKG9iaikge1xuICByZXR1cm4gISFvYmo/LltCVUZGRVJdO1xufVxuXG4vKipcbiAqIEEgYnVmZmVyIGltcGxlbWVudGF0aW9uIHRoYXQgbmV2ZXIgZGlzY2FyZHMgYnVmZmVyZWQgaXRlbXMgd2hlbiBhIG5ldyBpdGVtIGlzXG4gKiBhZGRlZC5cbiAqXG4gKiBUaGlzIGJ1ZmZlciBoYXMgYSBjb25jZXB0IG9mICpmdWxsKiwgYnV0IGl0J3MgYSBzb2Z0IGxpbWl0LiBJZiB0aGUgc2l6ZSBvZlxuICogdGhlIGJ1ZmZlciBpcyBleGNlZWRlZCwgYWRkZWQgaXRlbXMgYXJlIHN0aWxsIHN0b3JlZC5cbiAqXG4gKiBBIGJ1ZmZlciBvZiB0aGlzIHR5cGUgZXhpc3RzIG9ubHkgYXMgYW4gb2JqZWN0IHRoYXQgY2FuIGJlIHBhc3NlZCB0byBhXG4gKiBjaGFubmVsIGNyZWF0aW9uIGZ1bmN0aW9uIChzdWNoIGFzIHtAbGluayBtb2R1bGU6Y3NwLmNoYW58Y2hhbn0pIHRvIG1ha2UgdGhhdFxuICogY2hhbm5lbCBhIGJ1ZmZlcmVkIGNoYW5uZWwuIEl0IGRvZXNuJ3QgaGF2ZSBhbnkgcHJvcGVydGllcyB0aGF0IGFyZSBpbnRlbmRlZFxuICogZm9yIGV4dGVybmFsIHVzZS5cbiAqXG4gKiBAdHlwZWRlZiBGaXhlZEJ1ZmZlclxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgYSBmaXhlZCBidWZmZXIgb2YgdGhlIHNwZWNpZmllZCBjYXBhY2l0eS5cbiAqXG4gKiBBIGZpeGVkIGJ1ZmZlciBpcyBhICdub3JtYWwnIGJ1ZmZlciwgb25lIHRoYXQgc3RvcmVzIGFuZCByZXR1cm5zIGl0ZW1zIG9uXG4gKiBkZW1hbmQuIFdoaWxlIGl0IGlzIGNhcGFibGUgb2YgYmVpbmcgb3Zlci1maWxsZWQsIHRoYXQgYWJpbGl0eSBpcyBub3QgdXNlZCBpblxuICogQ2hhbmtvLiBBIGJ1ZmZlciB0aGF0IGlzIGZ1bGwgd2lsbCBjYXVzZSB0aGUgbmV4dCBwdXQgdG8gaXRzIGNoYW5uZWwgdG8gYmxvY2tcbiAqIHVudGlsIGF0IGxlYXN0IG9uZSBpdGVtIGlzIHJlbW92ZWQgZnJvbSB0aGUgYnVmZmVyLlxuICpcbiAqIFRoaXMgYnVmZmVyIGlzIHBhc3NlZCB0byBge0BsaW5rIG1vZHVsZTpjc3AuY2hhbnxjaGFufWAsIGV0Yy4gdG8gY3JlYXRlIGFcbiAqIGJ1ZmZlcmVkIGNoYW5uZWwuIEl0IGlzIG5vdCBtZWFudCB0byBiZSB1c2VkIGRpcmVjdGx5LlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcGFyYW0ge251bWJlcn0gc2l6ZSBUaGUgbnVtYmVyIG9mIGl0ZW1zIHRoYXQgdGhlIG5ldyBidWZmZXIgY2FuIGhvbGQgYmVmb3JlXG4gKiAgICAgaXQncyBmdWxsLlxuICogQHJldHVybiB7bW9kdWxlOmNzcC5GaXhlZEJ1ZmZlcn0gQSBuZXcgZml4ZWQgYnVmZmVyIG9mIHRoZSBzcGVjaWZpZWRcbiAqICAgICBjYXBhY2l0eS5cbiAqL1xuZnVuY3Rpb24gZml4ZWQoc2l6ZSkge1xuICByZXR1cm4gT2JqZWN0LmNyZWF0ZShudWxsLCB7XG4gICAgLyoqXG4gICAgICogVGhlIHF1ZXVlIGJhY2tpbmcgdGhpcyBidWZmZXIuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7bW9kdWxlOmNzcC9xdWV1ZX5RdWV1ZX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHF1ZXVlOiB7XG4gICAgICB2YWx1ZTogcSgpXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBudW1iZXIgb2YgaXRlbXMgdGhhdCB0aGlzIHF1ZXVlIGNhbiBob2xkIGJlZm9yZSBpdCdzIGNvbnNpZGVyZWQgZnVsbC5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBzaXplOiB7XG4gICAgICB2YWx1ZTogc2l6ZVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBIG1hcmtlciBwcm9wZXJ0eSB1c2VkIHRvIHNob3cgdGhhdCB0aGlzIGlzIGEgZml4ZWQgYnVmZmVyLlxuICAgICAqXG4gICAgICogQHR5cGUge1N5bWJvbH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIFtCVUZGRVJdOiB7XG4gICAgICB2YWx1ZTogRklYRURcbiAgICB9XG4gIH0pO1xufVxuXG4vKipcbiAqIEEgYnVmZmVyIGltcGxlbWVudGF0aW9uIHRoYXQgZHJvcHMgbmV3bHkgYWRkZWQgaXRlbXMgd2hlbiB0aGUgYnVmZmVyIGlzIGZ1bGwuXG4gKlxuICogVGhpcyBkcm9wcGluZyBiZWhhdmlvciBpcyBzaWxlbnQ6IHRoZSBuZXcgaXRlbSBpcyBzaW1wbHkgbm90IGFkZGVkIHRvIHRoZVxuICogcXVldWUuIE5vdGUgdGhhdCB0aGlzIGJ1ZmZlciBpcyBuZXZlciBgZnVsbGAgYmVjYXVzZSBpdCBjYW4gYWx3YXlzIGJlIGFkZGVkXG4gKiB0byB3aXRob3V0IGV4Y2VlZGluZyB0aGUgc2l6ZSwgZXZlbiBpZiB0aGF0ICdhZGRpbmcnIGRvZXNuJ3QgcmVzdWx0IGluIGEgbmV3XG4gKiBpdGVtIGFjdHVhbGx5IGFwcGVhcmluZyBpbiB0aGUgYnVmZmVyLlxuICpcbiAqIEEgYnVmZmVyIG9mIHRoaXMgdHlwZSBleGlzdHMgb25seSBhcyBhbiBvYmplY3QgdGhhdCBjYW4gYmUgcGFzc2VkIHRvIGFcbiAqIGNoYW5uZWwgY3JlYXRpb24gZnVuY3Rpb24gKHN1Y2ggYXMge0BsaW5rIG1vZHVsZTpjc3AuY2hhbnxjaGFufSkgdG8gbWFrZSB0aGF0XG4gKiBjaGFubmVsIGEgYnVmZmVyZWQgY2hhbm5lbC4gSXQgZG9lc24ndCBoYXZlIGFueSBwcm9wZXJ0aWVzIHRoYXQgYXJlIGludGVuZGVkXG4gKiBmb3IgZXh0ZXJuYWwgdXNlLlxuICpcbiAqIEB0eXBlZGVmIERyb3BwaW5nQnVmZmVyXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICovXG5cbi8qKlxuICogQ3JlYXRlcyBhIGRyb3BwaW5nIGJ1ZmZlciBvZiB0aGUgc3BlY2lmaWVkIGNhcGFjaXR5LlxuICpcbiAqIEEgZHJvcHBpbmcgYnVmZmVyIHNpbGVudGx5IGRyb3BzIHRoZSBpdGVtIGJlaW5nIGFkZGVkIGlmIHRoZSBidWZmZXIgaXNcbiAqIGFscmVhZHkgYXQgY2FwYWNpdHkuIFNpbmNlIGFkZGluZyBhIG5ldyBpdGVtIHdpbGwgYWx3YXlzICdzdWNjZWVkJyAoZXZlbiBpZlxuICogaXQgc3VjY2VlZHMgYnkganVzdCBpZ25vcmluZyB0aGUgYWRkKSwgaXQgaXMgbmV2ZXIgY29uc2lkZXJlZCBmdWxsIGFuZFxuICogdGhlcmVmb3JlIGEgcHV0IHRvIGEgY2hhbm5lbCBidWZmZXJlZCBieSBhIGRyb3BwaW5nIGJ1ZmZlciBuZXZlciBibG9ja3MuXG4gKlxuICogVGhpcyBidWZmZXIgaXMgcGFzc2VkIHRvIGB7QGxpbmsgbW9kdWxlOmNzcC5jaGFufGNoYW59YCwgZXRjLiB0byBjcmVhdGUgYVxuICogYnVmZmVyZWQgY2hhbm5lbC4gSXQgaXMgbm90IG1lYW50IHRvIGJlIHVzZWQgZGlyZWN0bHkuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqIEBwYXJhbSB7bnVtYmVyfSBzaXplIFRoZSBudW1iZXIgb2YgaXRlbXMgdGhhdCB0aGUgbmV3IGJ1ZmZlciBjYW4gaG9sZCBiZWZvcmVcbiAqICAgICBuZXdlc3QgaXRlbXMgYXJlIGRyb3BwZWQgb24gYWRkLlxuICogQHJldHVybiB7bW9kdWxlOmNzcC5Ecm9wcGluZ0J1ZmZlcn0gQSBuZXcgZHJvcHBpbmcgYnVmZmVyIG9mIHRoZSBzcGVjaWZpZWRcbiAqICAgICBjYXBhY2l0eS5cbiAqL1xuZnVuY3Rpb24gZHJvcHBpbmcoc2l6ZSkge1xuICByZXR1cm4gT2JqZWN0LmNyZWF0ZShudWxsLCB7XG4gICAgLyoqXG4gICAgICogVGhlIHF1ZXVlIGJhY2tpbmcgdGhpcyBidWZmZXIuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7bW9kdWxlOmNzcC9xdWV1ZX5RdWV1ZX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHF1ZXVlOiB7XG4gICAgICB2YWx1ZTogcSgpXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBudW1iZXIgb2YgaXRlbXMgdGhhdCB0aGlzIHF1ZXVlIGNhbiBob2xkIGJlZm9yZSBpdCdzIGNvbnNpZGVyZWQgZnVsbC5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBzaXplOiB7XG4gICAgICB2YWx1ZTogc2l6ZVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBIG1hcmtlciBwcm9wZXJ0eSB1c2VkIHRvIHNob3cgdGhhdCB0aGlzIGlzIGEgZHJvcHBpbmcgYnVmZmVyLlxuICAgICAqXG4gICAgICogQHR5cGUge1N5bWJvbH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIFtCVUZGRVJdOiB7XG4gICAgICB2YWx1ZTogRFJPUFBJTkdcbiAgICB9XG4gIH0pO1xufVxuXG4vKipcbiAqIEEgYnVmZmVyIGltcGxlbWVudGF0aW9uIHRoYXQgZHJvcHMgdGhlIG9sZGVzdCBpdGVtIHdoZW4gYW4gaXRlbSBpcyBhZGRlZCB0byBhXG4gKiBmdWxsIGJ1ZmZlci5cbiAqXG4gKiBUaGlzIGlzIHZlcnkgc2ltaWxhciB0byB7QGxpbmsgbW9kdWxlOmNzcC5Ecm9wcGluZ0J1ZmZlcnxEcm9wcGluZ0J1ZmZlcn07IHRoZVxuICogb25seSBkaWZmZXJlbmNlIGlzIGluIHdoYXQgaGFwcGVucyB3aGVuIGFuIGl0ZW0gaXMgYWRkZWQuIEluIHRoaXMgYnVmZmVyLCB0aGVcbiAqIG5ldyBpdGVtIGlzIGluZGVlZCBhZGRlZCB0byB0aGUgYnVmZmVyLCBidXQgaW4gb3JkZXIgdG8ga2VlcCB0aGUgY291bnQgb2YgdGhlXG4gKiBidWZmZXIgYXQgb3IgYmVsb3cgaXRzIHNpemUsIHRoZSBvbGRlc3QgaXRlbSBpbiB0aGUgYnVmZmVyIGlzIHNpbGVudGx5XG4gKiBkcm9wcGVkLlxuICpcbiAqIEEgYnVmZmVyIG9mIHRoaXMgdHlwZSBleGlzdHMgb25seSBhcyBhbiBvYmplY3QgdGhhdCBjYW4gYmUgcGFzc2VkIHRvIGFcbiAqIGNoYW5uZWwgY3JlYXRpb24gZnVuY3Rpb24gKHN1Y2ggYXMge0BsaW5rIG1vZHVsZTpjc3AuY2hhbnxjaGFufSkgdG8gbWFrZSB0aGF0XG4gKiBjaGFubmVsIGEgYnVmZmVyZWQgY2hhbm5lbC4gSXQgZG9lc24ndCBoYXZlIGFueSBwcm9wZXJ0aWVzIHRoYXQgYXJlIGludGVuZGVkXG4gKiBmb3IgZXh0ZXJuYWwgdXNlLlxuICpcbiAqIEB0eXBlZGVmIFNsaWRpbmdCdWZmZXJcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIGEgc2xpZGluZyBidWZmZXIgb2YgdGhlIHNwZWNpZmllZCBjYXBhY2l0eS5cbiAqXG4gKiBBIHNsaWRpbmcgYnVmZmVyIGRyb3BzIHRoZSBmaXJzdC1hZGRlZCAob2xkZXN0KSBpdGVtIGFscmVhZHkgaW4gdGhlIGJ1ZmZlciBpZlxuICogYSBuZXcgaXRlbSBpcyBhZGRlZCB3aGVuIHRoZSBidWZmZXIgaXMgYWxyZWFkeSBhdCBjYXBhY2l0eS4gU2luY2UgaXQncyBhbHdheXNcbiAqIGNhcGFibGUgb2YgaGF2aW5nIGl0ZW1zIGFkZGVkIHRvIGl0LCBpdCdzIG5ldmVyIGNvbnNpZGVyZWQgZnVsbCwgYW5kXG4gKiB0aGVyZWZvcmUgYSBwdXQgdG8gYSBjaGFubmVsIGJ1ZmZlcmVkIGJ5IGEgc2xpZGluZyBidWZmZXIgbmV2ZXIgYmxvY2tzLlxuICpcbiAqIFRoaXMgYnVmZmVyIGlzIHBhc3NlZCB0byBge0BsaW5rIG1vZHVsZTpjc3AuY2hhbnxjaGFufWAsIGV0Yy4gdG8gY3JlYXRlIGFcbiAqIGJ1ZmZlcmVkIGNoYW5uZWwuIEl0IGlzIG5vdCBtZWFudCB0byBiZSB1c2VkIGRpcmVjdGx5LlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcGFyYW0ge251bWJlcn0gc2l6ZSBUaGUgbnVtYmVyIG9mIGl0ZW1zIHRoYXQgdGhlIG5ldyBidWZmZXIgY2FuIGhvbGQgYmVmb3JlXG4gKiAgICAgb2xkZXN0IGl0ZW1zIGFyZSBkcm9wcGVkIG9uIGFkZC5cbiAqIEByZXR1cm4ge21vZHVsZTpjc3AuU2xpZGluZ0J1ZmZlcn0gQSBuZXcgc2xpZGluZyBidWZmZXIgb2YgdGhlIHNwZWNpZmllZFxuICogICAgIGNhcGFjaXR5LlxuICovXG5mdW5jdGlvbiBzbGlkaW5nKHNpemUpIHtcbiAgcmV0dXJuIE9iamVjdC5jcmVhdGUobnVsbCwge1xuICAgIC8qKlxuICAgICAqIFRoZSBxdWV1ZSBiYWNraW5nIHRoaXMgYnVmZmVyLlxuICAgICAqXG4gICAgICogQHR5cGUge21vZHVsZTpjc3AvcXVldWV+UXVldWV9XG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBxdWV1ZToge1xuICAgICAgdmFsdWU6IHEoKVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgbnVtYmVyIG9mIGl0ZW1zIHRoYXQgdGhpcyBxdWV1ZSBjYW4gaG9sZCBiZWZvcmUgaXQncyBjb25zaWRlcmVkIGZ1bGwuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgc2l6ZToge1xuICAgICAgdmFsdWU6IHNpemVcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQSBtYXJrZXIgcHJvcGVydHkgdXNlZCB0byBzaG93IHRoYXQgdGhpcyBpcyBhIHNsaWRpbmcgYnVmZmVyLlxuICAgICAqXG4gICAgICogQHR5cGUge1N5bWJvbH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIFtCVUZGRVJdOiB7XG4gICAgICB2YWx1ZTogU0xJRElOR1xuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgcXVldWUgdGhhdCBiYWNrcyBhIGJ1ZmZlci5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuQnVmZmVyfSBidWZmZXIgVGhlIGJ1ZmZlciB3aG9zZSBxdWV1ZSBpcyByZXR1cm5lZCBieSB0aGlzXG4gKiAgICAgZnVuY3Rpb24uXG4gKiBAcmV0dXJuIHttb2R1bGU6Y3NwL3F1ZXVlflF1ZXVlfSBUaGUgcXVldWUgdGhhdCBiYWNrcyB0aGUgc3VwcGxpZWQgYnVmZmVyLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gcXVldWUoYnVmZmVyKSB7XG4gIHJldHVybiBidWZmZXIucXVldWU7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgbnVtYmVyIG9mIGl0ZW1zIGEgYnVmZmVyIGNhbiBob2xkIGJlZm9yZSBpdCdzIGZ1bGwuXG4gKlxuICogQHBhcmFtIHttb2R1bGU6Y3NwLkJ1ZmZlcn0gYnVmZmVyIFRoZSBidWZmZXIgd2hvc2Ugc2l6ZSBpcyByZXR1cm5lZCBieSB0aGlzXG4gKiAgICAgZnVuY3Rpb24uXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBzaXplIG9mIHRoZSBzdXBwbGllZCBidWZmZXIuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBzaXplKGJ1ZmZlcikge1xuICByZXR1cm4gYnVmZmVyLnNpemU7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgbnVtYmVyIG9mIGl0ZW1zIGEgYnVmZmVyIGlzIGN1cnJlbnRseSBob2xkaW5nLlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5CdWZmZXJ9IGJ1ZmZlciBUaGUgYnVmZmVyIHdob3NlIGN1cnJlbnQgY291bnQgaXMgcmV0dXJuZWRcbiAqICAgICBieSB0aGlzIGZ1bmN0aW9uLlxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgbnVtYmVyIG9mIGl0ZW1zIHRoYXQgdGhlIHN1cHBsaWVkIGJ1ZmZlciBpcyBob2xkaW5nLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY291bnQoYnVmZmVyKSB7XG4gIHJldHVybiBxQ291bnQoYnVmZmVyLnF1ZXVlKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgYSBidWZmZXIgaXMgYXQgY2FwYWNpdHkuXG4gKlxuICogQHBhcmFtIHttb2R1bGU6Y3NwLkJ1ZmZlcn0gYnVmZmVyIFRoZSBidWZmZXIgd2hvJ3MgYmVpbmcgY2hlY2tlZCB0byBzZWUgaWZcbiAqICAgICBpdCdzIGF0IGNhcGFjaXR5LlxuICogQHJldHVybiB7bnVtYmVyfSBFaXRoZXIgYHRydWVgIGlmIHRoZSBzdXBwbGllZCBidWZmZXIgaXMgZnVsbCBvciBgZmFsc2VgIGlmXG4gKiAgICAgaXQgaXNuJ3QuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBpc0Z1bGwoYnVmZmVyKSB7XG4gIHJldHVybiBidWZmZXJbQlVGRkVSXSA9PT0gRklYRUQgPyBxQ291bnQoYnVmZmVyLnF1ZXVlKSA+PSBidWZmZXIuc2l6ZSA6IGZhbHNlO1xufVxuXG4vKipcbiAqIEFkZHMgb25lIG9yIG1vcmUgaXRlbXMgdG8gYSBidWZmZXIuXG4gKlxuICogQHBhcmFtIHttb2R1bGU6Y3NwLkJ1ZmZlcn0gYnVmZmVyIFRoZSBidWZmZXIgd2hlcmUgdGhlIHN1cHBsaWVkIGl0ZW1zIHdpbGwgYmVcbiAqICAgICBhZGRlZC5cbiAqIEBwYXJhbSB7Li4uKn0gaXRlbXMgVGhlIHZhbHVlcyBiZWluZyBhZGRlZCB0byB0aGUgc3VwcGxpZWQgYnVmZmVyLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gYWRkKGJ1ZmZlciwgLi4uaXRlbXMpIHtcbiAgc3dpdGNoIChidWZmZXJbQlVGRkVSXSkge1xuICAgIGNhc2UgRklYRUQ6XG4gICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgaXRlbXMpIHtcbiAgICAgICAgZW5xdWV1ZShidWZmZXIucXVldWUsIGl0ZW0pO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIERST1BQSU5HOlxuICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGl0ZW1zKSB7XG4gICAgICAgIGlmIChjb3VudChidWZmZXIpIDwgc2l6ZShidWZmZXIpKSB7XG4gICAgICAgICAgZW5xdWV1ZShidWZmZXIucXVldWUsIGl0ZW0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgU0xJRElORzpcbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBpdGVtcykge1xuICAgICAgICBpZiAoY291bnQoYnVmZmVyKSA+PSBzaXplKGJ1ZmZlcikpIHtcbiAgICAgICAgICBkZXF1ZXVlKGJ1ZmZlci5xdWV1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZW5xdWV1ZShidWZmZXIucXVldWUsIGl0ZW0pO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuO1xuICB9XG59XG5cbi8qKlxuICogUmVtb3ZlcyB0aGUgbmV4dCBpdGVtIGZyb20gYSBxdWV1ZSBhbmQgcmV0dXJucyBpdC5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuQnVmZmVyfSBidWZmZXIgVGhlIGJ1ZmZlciBmcm9tIHdoaWNoIGFuIGl0ZW0gaXMgYmVpbmdcbiAqICAgICByZW1vdmVkLlxuICogQHJldHVybiB7Kn0gVGhlIGl0ZW0gdGhhdCB3YXMgcmVtb3ZlZCBmcm9tIHRoZSBzdXBwbGllZCBidWZmZXIuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiByZW1vdmUoYnVmZmVyKSB7XG4gIHJldHVybiBkZXF1ZXVlKGJ1ZmZlci5xdWV1ZSk7XG59XG5cbmV4cG9ydCB7XG4gIGlzQnVmZmVyLFxuICBmaXhlZCxcbiAgZHJvcHBpbmcsXG4gIHNsaWRpbmcsXG4gIHF1ZXVlLFxuICBzaXplLFxuICBjb3VudCxcbiAgaXNGdWxsLFxuICBhZGQsXG4gIHJlbW92ZVxufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG5pbXBvcnQgeyBwcm90b2NvbHMgYXMgcCB9IGZyb20gXCJtb2R1bGVzL3Byb3RvY29sXCI7XG5pbXBvcnQge1xuICBxdWV1ZSxcbiAgZGVxdWV1ZSxcbiAgRU1QVFksXG4gIGZpbHRlcixcbiAgY291bnQgYXMgcUNvdW50LFxuICBlbnF1ZXVlXG59IGZyb20gXCJtb2R1bGVzL3F1ZXVlXCI7XG5pbXBvcnQgeyBpc0Z1bGwsIGNvdW50LCByZW1vdmUgfSBmcm9tIFwibW9kdWxlcy9idWZmZXJcIjtcbmltcG9ydCB7IGRpc3BhdGNoIH0gZnJvbSBcIm1vZHVsZXMvZGlzcGF0Y2hlclwiO1xuXG4vKipcbiAqIFRoZSBtYXhpbXVtIG51bWJlciBvZiBkaXJ0eSBvcGVyYXRpb25zIHRoYXQgY2FuIGJlIHF1ZXVlZCBvbiBhIGNoYW5uZWwgYmVmb3JlXG4gKiBhIGNsZWFudXAgaXMgdHJpZ2dlcmVkLlxuICpcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAcHJpdmF0ZVxuICovXG5jb25zdCBNQVhfRElSVFkgPSA2NDtcblxuLyoqXG4gKiBUaGUgbWF4aW11bSBudW1iZXIgb2Ygb3BlcnRpb25zIHRoYXQgY2FuIGJlIHF1ZXVlZCBvbiBhIGNoYW5uZWwgYmVmb3JlIG5ld1xuICogb3BlcmF0aW9ucyBhcmUgcmVqZWN0ZWQuXG4gKlxuICogQHR5cGUge251bWJlcn1cbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IE1BWF9RVUVVRUQgPSAxMDI0O1xuXG4vKipcbiAqICpoZSB2YWx1ZSByZXR1cm5lZCBmcm9tIGEgcmVjZWl2ZSBvbiBhIGNoYW5uZWwgd2hlbiB0aGF0IGNoYW5uZWwgaXMgY2xvc2VkXG4gKiBhbmQgaGFzIG5vIG1vcmUgdmFsdWVzIGF2YWlsYWJsZS5cbiAqXG4gKiBUaGlzIGlzIGEgc3BlY2lhbCB2YWx1ZSB0aGF0IGlzIHJldHVybmVkIHVuZGVyIGEgY2VydGFpbiBjaXJjdW1zdGFuY2UsIG5hbWVseVxuICogd2hlbiBhIHJlY2VpdmUgaXMgcGVyZm9ybWVkIG9uIGEgY2xvc2VkIGNoYW5uZWwuIEJlY2F1c2Ugb2YgdGhhdCwgaXQgY2Fubm90XG4gKiBiZSByZXR1cm5lZCBmcm9tIGEgcmVjZWl2ZSBvbiBhbiBvcGVuIGNoYW5uZWwuIEZvciB0aGF0IHJlYXNvbiwgYENMT1NFRGAgaXNcbiAqIHRoZSBvbmx5IHZhbHVlIHRoYXQgY2Fubm90IGJlIHNlbnQgb250byBhIGNoYW5uZWwgJm1kYXNoOyBpdCB3b3VsZCBiZVxuICogaW1wb3NzaWJsZSB0byBkaXN0aW5ndWlzaCBiZXR3ZWVuIGEgbGVnaXRpbWF0ZSB2YWx1ZSBvZiBgQ0xPU0VEYCBhbmQgYW5cbiAqIGFjdHVhbCBjbG9zZWQgY2hhbm5lbC5cbiAqXG4gKiBAdHlwZSB7U3ltYm9sfVxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqL1xuY29uc3QgQ0xPU0VEID0gU3ltYm9sKFwiQ0xPU0VEXCIpO1xuXG4vKipcbiAqIEEgdW5pcXVlIHZhbHVlIHVzZWQgdG8gaW5kaWNhdGUgdGhhdCBhbiBvYmplY3QgaXMgYSBib3guXG4gKlxuICogQHR5cGUge1N5bWJvbH1cbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IEJPWCA9IFN5bWJvbChcIkJPWFwiKTtcblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgYW4gb2JqZWN0IGlzIGEgYm94LlxuICpcbiAqIEBwYXJhbSB7Kn0gb2JqIEEgdmFsdWUgdG8gY2hlY2sgZm9yIGJveGluZXNzLlxuICogQHJldHVybiBFaXRoZXIgYHRydWVgIGlmIHRoZSB2YWx1ZSBpcyBhIGJveCBvciBgZmFsc2VgIGlmIGl0IGlzbid0LlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaXNCb3gob2JqKSB7XG4gIHJldHVybiAhIW9iaj8uW0JPWF07XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGFuIG9iamVjdCBpcyByZWR1Y2VkLiBUaGlzIGlzIGRvbmUgdXNpbmcgdGhlIHRyYW5zZHVjZXJcbiAqIHByb3RvY29sOyBhbiBvYmplY3Qgd2l0aCB0aGUgcHJvdG9jb2wtc3BlY2lmaWVkIGByZWR1Y2VkYCBwcm9wZXJ0eSBpcyBhc3N1bWVkXG4gKiB0byBiZSByZWR1Y2VkLiBJZiBhIHJlc3VsdCBvZiBhIHRyYW5zZm9ybWF0aW9uIGlzIHJlZHVjZWQsIGl0IG1lYW5zIHRoYXQgdGhlXG4gKiB0cmFuc2Zvcm1hdGlvbiBpcyBjb21wbGV0ZSBhbmQgdGhlIGNoYW5uZWwgc2hvdWxkIGJlIGNsb3NlZC5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSBiZWluZyBjaGVja2VkIGZvciByZWR1Y3Rpb24uXG4gKiBAcmV0dXJuIHtib29sZWFufSBFaXRoZXIgYHRydWVgIGlmIHRoZSB2YWx1ZSBoYXMgYmVlbiByZWR1Y2VkLCBvciBgZmFsc2VgIGlmXG4gKiAgICAgaXQgaGFzIG5vdCBiZWVuLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaXNDb21wbGV0ZWQodmFsdWUpIHtcbiAgcmV0dXJuICEhdmFsdWU/LltwLmNvbXBsZXRlZF07XG59XG5cbi8qKlxuICogQSB3cmFwcGVyIGFyb3VuZCBhIHZhbHVlLiBUaGlzIGlzIHByaW1hcmlseSB1c2VkIGFzIGEgbWFya2VyOyBhIHB1dCBvciB0YWtlXG4gKiByZXR1cm5pbmcgYSBCb3ggaW5kaWNhdGVzIHRoYXQgdGhlIHB1dCBvciB0YWtlIGhhcyByZXR1cm5lZCBhbiBpbW1lZGlhdGVcbiAqIHZhbHVlLCB3aGlsZSByZXR1cm5pbmcgYG51bGxgIGluZGljYXRlcyB0aGF0IHRoZSBvcGVyYXRpb24gaGFzIGJlZW4gcXVldWVkLlxuICpcbiAqIEB0eXBlZGVmIEJveFxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3AvY2hhbm5lbFxuICogQHByb3BlcnR5IHsqfSB2YWx1ZSBUaGUgdmFsdWUgYmVpbmcgd3JhcHBlZCBieSB0aGUgYm94LlxuICogQHByaXZhdGVcbiAqL1xuXG4vKipcbiAqIEEgd3JhcHBlciBvYmplY3QgZm9yIGEgdmFsdWUuIFRoaXMgaXMgdXNlZCBhbG1vc3QgZW50aXJlbHkgYXMgYSBtYXJrZXJcbiAqIGludGVyZmFjZSwgdGhvdWdoIHRoZSBmYWN0IHRoYXQgaXQgYmVjb21lcyBhIHBhcmFtZXRlciB0aGF0J3MgcGFzc2VkIGJ5XG4gKiByZWZlcmVuY2UgcmF0aGVyIHRoYW4gdmFsdWUgaXMgYWxzbyBpbXBvcnRhbnQgaW4gYSBjb3VwbGUgcGxhY2VzLiBJZiBhXG4gKiBjaGFubmVsIG9wZXJhdGlvbiAocHV0IG9yIHRha2UpIHJldHVybnMgYSBCb3gsIGl0IG1lYW5zIHRoYXQgYW4gYWN0dWFsIHZhbHVlXG4gKiB3YXMgcmV0dXJuZWQuIEEgbm9uLUJveCAod2hpY2ggYWx3YXlzIGhhcHBlbnMgdG8gYmUgYG51bGxgKSBtZWFucyB0aGF0IHRoZVxuICogb3BlcmF0aW9uIG11c3QgYmxvY2suXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3AvY2hhbm5lbFxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gYm94LlxuICogQHJldHVybiB7bW9kdWxlOmNzcC9jaGFubmVsLkJveH0gVGhlIGJveGVkIHZhbHVlLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gYm94KHZhbHVlKSB7XG4gIHJldHVybiBPYmplY3QuY3JlYXRlKG51bGwsIHtcbiAgICB2YWx1ZToge1xuICAgICAgdmFsdWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0sXG4gICAgW0JPWF06IHtcbiAgICAgIHZhbHVlOiB0cnVlXG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBBIHdyYXBwZXIgYXJvdW5kIGEgdmFsdWUuIFRoaXMgaXMgbXVjaCBsaWtlXG4gKiB7QGxpbmsgbW9kdWxlOmNzcC9jaGFubmVsLkJveHxCb3h9IGV4Y2VwdCB0aGF0IGl0IGFsc28gY2FycmllcyBhIGhhbmRsZXIgdG9cbiAqIGJlIHVzZWQgd2hlbiBhIHNlbnQgdmFsdWUgaXMgcmVjZWl2ZWQuIEl0IGlzIHNwZWNpZmljYWxseSBmb3IgcXVldWVpbmcgc2VuZHMuXG4gKlxuICogQHR5cGVkZWYgU2VuZEJveFxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3AvY2hhbm5lbFxuICogQHByb3BlcnR5IHsqfSB2YWx1ZSBUaGUgdmFsdWUgYmVpbmcgd3JhcHBlZCBieSB0aGlzIGJveC5cbiAqIEBwcm9wZXJ0eSB7bW9kdWxlOmNzcC9jaGFubmVsLkhhbmRsZXJ9IGhhbmRsZXIgVGhlIGhhbmRsZXIgdXNlZCB0byBwcm9jZXNzIGFcbiAqICAgICBzZW5kIHJlcXVlc3QgZm9yIHRoZSB2YWx1ZS5cbiAqIEBwcml2YXRlXG4gKi9cblxuLyoqXG4gKiBBIGJveCB1c2VkIHRvIHdyYXAgYSB2YWx1ZSBiZWluZyBzZW50IG9udG8gYSBjaGFubmVsLiBUaGlzIGlzIGRpZmZlcmVudCBmcm9tXG4gKiBhIHJlZ3VsYXIgYm94IGluIHRoYXQgdGhlIHNlbmQgaGFuZGxlciBpcyBhbHNvIGluY2x1ZGVkLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwL2NoYW5uZWxcbiAqIEBwYXJhbSAge09iamVjdH0gaGFuZGxlciBUaGUgaGFuZGxlciB1c2VkIHRvIHByb2Nlc3MgYSBzZW5kIHJlcXVlc3QgZm9yIHRoZVxuICogICAgIHZhbHVlLlxuICogQHBhcmFtICB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGJveC5cbiAqIEByZXR1cm4ge21vZHVsZTpjc3AvY2hhbm5lbC5TZW5kQm94fSBUaGUgYm94ZWQgdmFsdWUuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBzZW5kQm94KHZhbHVlLCBoYW5kbGVyKSB7XG4gIHJldHVybiBPYmplY3QuY3JlYXRlKG51bGwsIHtcbiAgICB2YWx1ZToge1xuICAgICAgdmFsdWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0sXG4gICAgaGFuZGxlcjoge1xuICAgICAgdmFsdWU6IGhhbmRsZXJcbiAgICB9LFxuICAgIFtCT1hdOiB7XG4gICAgICB2YWx1ZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxuICogQSBjaGFubmVsLCB1c2VkIGJ5IHByb2Nlc3NlcyB0byBjb21tdW5pY2F0ZSB3aXRoIG9uZSBhbm90aGVyLlxuICpcbiAqIEZvciBlYWNoIG9wZXJhdGlvbiwgdGhlIGNoYW5uZWwgZmlyc3QgdGVzdHMgdG8gc2VlIGlmIHRoZXJlJ3MgYSBjb3JyZXNwb25kaW5nXG4gKiBvcGVyYXRpb24gYWxyZWFkeSBxdWV1ZWQgKGkuZS4sIGlmIHdlJ3JlIGRvaW5nIGEgYHNlbmRgIHRoYXQgdGhlcmUncyBhIHF1ZXVlZFxuICogYHJlY3ZgIGFuZCB2aWNlIHZlcnNhKS4gSWYgdGhlcmUgaXMsIHRoYXQgY29ycmVzcG9uZGluZyBvcGVyYXRpb24gaXNcbiAqIHVuYmxvY2tlZCBhbmQgYm90aCBvcGVyYXRpb25zIGNvbXBsZXRlLiBJZiBub3QsIHRoZSBvcGVyYXRpb24gaXMgcXVldWVkIHRvXG4gKiB3YWl0IGZvciBhIGNvcnJlc3BvbmRpbmcgb3BlcmF0aW9uLiBUaGUgcHJvY2VzcyBvciB0aGF0IGNyZWF0ZWQgdGhlIG9wZXJhdGlvblxuICogdGhlbiBibG9ja3MuXG4gKlxuICogVGhlIGNoYW5uZWwgY2FuIGJlIGJhY2tlZCBieSBhIGJ1ZmZlciwgdGhvdWdoIGl0IGlzIG5vdCBieSBkZWZhdWx0LiBJZiBhXG4gKiBidWZmZXIgaXMgaW4gcGxhY2UsIGFuZCB0aGF0IGJ1ZmZlciBpcyBub3QgZnVsbCwgdGhlbiB0aGUgcHJvY2VzcyB0aGF0XG4gKiBjcmVhdGVkIGFuIG9wZXJhdGlvbiB0aGF0IGhhcyB0byBiZSBxdWV1ZWQgaXMgKm5vdCogYmxvY2tlZC5cbiAqXG4gKiBUaGlzIGNoYW5uZWwgb2JqZWN0IHN1cHBvcnRzIHRyYW5zZm9ybWF0aW9ucywgYXNzdW1pbmcgdGhhdCB0aGV5IGZvbGxvdyB0aGVcbiAqIHByb3RvY29sIGNyZWF0ZWQgYnkgYSBmZXcgdHJhbnNkdWNlciBsaWJyYXJ5IGF1dGhvcnMgdG8gYWxsb3cgdGhlbSB0b1xuICogaW50ZXJvcGVyYXRlLiBUaGUgc3VwcG9ydCBtdXN0IGJlIGV4cGxpY2l0bHkgY3JlYXRlZCBiZWNhdXNlIHRoZSBub3JtYWxcbiAqIG1ldGhvZCBvZiBtYWtpbmcgYW4gb2JqZWN0IHN1cHBvcnQgdHJhbnNmb3JtYXRpb25zIHdvbid0IHdvcmsgaGVyZS4gVGhpc1xuICogbWV0aG9kIGlzIHRvIGNyZWF0ZSBhIG5ldyBvYmplY3QgYW5kIGFkZCB0aGUgdHJhbnNmb3JtZWQgdmFsdWVzIHRvIGl0IC0gYnV0XG4gKiBmb3IgYSBjaGFubmVsLCB3ZSBuZWVkIHRvIHJlcGxhY2UgdGhlIHZhbHVlcyBvbiB0aGUgY2hhbm5lbCB3aXRoIHRoZWlyXG4gKiB0cmFuc2Zvcm1lZCB2YWx1ZXMsIGluIHRoZSBzYW1lIG9yZGVyIGV2ZW4gaW4gYSBtdWx0aS1wcm9jZXNzIGVudmlyb25tZW50LlxuICogVGh1cyB0cmFuc2Zvcm1hdGlvbnMgaGFwcGVuIGluIHBsYWNlLlxuICpcbiAqIFRyYW5zZm9ybWF0aW9ucyBhcmUgYXBwbGllZCBiZWZvcmUgdGhlIHZhbHVlIGlzIHF1ZXVlZCwgc28gZXZlbiBpZiB0aGVyZSBpcyBhXG4gKiBjb3JyZXNwb25kaW5nIG9wZXJhdGlvbiByZWFkeSB0byBnbywgdGhlIHRyYW5zZm9ybWF0aW9uIHN0aWxsIGhhcHBlbnMuIEFsc28sXG4gKiB0cmFuc2Zvcm1hdGlvbnMgcmVxdWlyZSB0aGF0IHRoZSBjaGFubmVsIGJlIGJ1ZmZlcmVkICh0aGlzIGJ1ZmZlciBpcyB3aGF0IGlzXG4gKiBzZW50IHRvIHRoZSB0cmFuc2Zvcm1lcidzIHJlZHVjdGlvbiBzdGVwIGZ1bmN0aW9uKTsgdHJ5aW5nIHRvIGNyZWF0ZSBhXG4gKiBjaGFubmVsIHdpdGggYSB0cmFuc2Zvcm1lciBidXQgd2l0aG91dCBhIGJ1ZmZlciB3aWxsIHJlc3VsdCBpbiBhbiBlcnJvciBiZWluZ1xuICogdGhyb3duLlxuICpcbiAqIFRoaXMgaXMgdGhlIG9iamVjdCB0aGF0IGlzIHJldHVybmVkIGZyb20gYSBjYWxsIHRvXG4gKiBge0BsaW5rIG1vZHVsZTpjc3AuY2hhbnxjaGFufWAuIEhvd2V2ZXIsIHRoaXMgb2JqZWN0IGlzIGludGVuZGVkIHRvIGJlIHVzZWRcbiAqIGFzIGEgdmFsdWUgdG8gcGFzcyB0byBjaGFubmVsIG9wZXJhdGlvbiBmdW5jdGlvbnM7IGl0IGRvZXNuJ3QgaGF2ZSBhbnlcbiAqIHByb3BlcnRpZXMgb2YgaW50ZXJlc3QgdG8gYW4gZW5kIHVzZXIuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqIEB0eXBlZGVmIENoYW5uZWxcbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjaGFubmVsLiBUaGlzIGlzIGEgbG93LWxldmVsIGZ1bmN0aW9uO1xuICogYHtAbGluayBtb2R1bGU6Y3NwLmNoYW58Y2hhbn1gIHBlcmZvcm1zIHNvbWUgbmVjZXNzYXJ5IG1hbmlwdWxhdGlvbnMgb25cbiAqIGFyZ3VtZW50cyBiZWZvcmUgdXNpbmcgdGhpcyBmdW5jdGlvbiB0byBwZXJmb3JtIHRoZSBhY3R1YWwgY3JlYXRpb24uXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3AvY2hhbm5lbFxuICogQHBhcmFtIHtudWxsIHwgbW9kdWxlOmNzcC5CdWZmZXJ9IGJ1ZmZlciBBbiBvcHRpb25hbCBidWZmZXIgdGhhdCwgaWYgcHJlc2VudCxcbiAqICAgICBpcyB1c2VkIHRvIGNyZWF0ZSBhIGJ1ZmZlcmVkIGNoYW5uZWwuIElmIHRoaXMgaXMgYG51bGxgLCBhbiB1bmJ1ZmZlcmVkXG4gKiAgICAgY2hhbm5lbCBpcyBjcmVhdGVkLlxuICogQHBhcmFtIHttb2R1bGU6Y29yZS5UcmFuc2R1Y2VyRnVuY3Rpb259IHhmb3JtIFRoZSB0cmFuc2R1Y2VyIHVzZWQgdG9cbiAqICAgICB0cmFuc2Zvcm0gdmFsdWVzIHNlbnQgdG8gdGhlIGNoYW5uZWwuIElmIG5vIHRyYW5zZm9ybWF0aW9ucyBhcmVcbiAqICAgICBuZWNlc3NhcnksIGEgcGFzc3Rocm91Z2ggdHJhbnNkdWNlciBzaG91bGQgYmUgcHJvdmlkZWQuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGlzVGltZWQgSW5kaWNhdGVzIHdoZXRoZXIgdGhlIGNoYW5uZWwgaXMgYSB0aW1lZCBjaGFubmVsLlxuICogICAgIFRoZSB0aW1pbmluZyBtZWNoYW5pc20gaXMgaGFuZGxlZCBvdXRzaWRlIHRoZSBjaGFubmVsLCBidXQgdGhpcyBwcm9wZXJ0eVxuICogICAgIGlzIHByb3ZpZGVkIHRvIGJlIGFibGUgdG8gcXVlcnkgd2hldGhlciB0aGF0J3MgdGhlIGNhc2UuXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4RGlydHk9NjQgVGhlIG1heGltdW0gbnVtYmVyIG9mIGRpcnR5IG9wZXJhdGlvbnMgdG8gYWxsb3dcbiAqICAgICBiZWZvcmUgdGhleSdyZSBwdXJnZWQuXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4UXVldWVkPTEwMjQgVGhlIG1heGltdW0gbnVtYmVyIG9mIG9wZXJhdGlvbnMgdGhhdCBjYW4gYmVcbiAqICAgICBxdWV1ZWQgYmVmb3JlIG5ldyBvbmVzIGFyZSByZWplY3RlZC5cbiAqIEByZXR1cm4ge21vZHVsZTpjc3AuQ2hhbm5lbH0gQSBuZXcgY2hhbm5lbC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNoYW5uZWwoXG4gIGJ1ZmZlcixcbiAgeGZvcm0sXG4gIGlzVGltZWQgPSBmYWxzZSxcbiAgbWF4RGlydHkgPSBNQVhfRElSVFksXG4gIG1heFF1ZXVlZCA9IE1BWF9RVUVVRURcbikge1xuICByZXR1cm4gT2JqZWN0LmNyZWF0ZShudWxsLCB7XG4gICAgYnVmZmVyOiB7XG4gICAgICB2YWx1ZTogYnVmZmVyXG4gICAgfSxcbiAgICB4Zm9ybToge1xuICAgICAgdmFsdWU6IHhmb3JtXG4gICAgfSxcbiAgICBtYXhEaXJ0eToge1xuICAgICAgdmFsdWU6IG1heERpcnR5XG4gICAgfSxcbiAgICBtYXhRdWV1ZWQ6IHtcbiAgICAgIHZhbHVlOiBtYXhRdWV1ZWRcbiAgICB9LFxuICAgIHJlY3ZzOiB7XG4gICAgICB2YWx1ZTogcXVldWUoKVxuICAgIH0sXG4gICAgc2VuZHM6IHtcbiAgICAgIHZhbHVlOiBxdWV1ZSgpXG4gICAgfSxcbiAgICBkaXJ0eVJlY3ZzOiB7XG4gICAgICB2YWx1ZTogMCxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSxcbiAgICBkaXJ0eVNlbmRzOiB7XG4gICAgICB2YWx1ZTogMCxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSxcbiAgICBjbG9zZWQ6IHtcbiAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSxcbiAgICBpc0J1ZmZlcmVkOiB7XG4gICAgICB2YWx1ZTogISFidWZmZXJcbiAgICB9LFxuICAgIGlzVGltZWQ6IHtcbiAgICAgIHZhbHVlOiBpc1RpbWVkXG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBTZW5kcyBhIHZhbHVlIHRvIGEgY2hhbm5lbC4gVGhlIHNwZWNpZmllZCBoYW5kbGVyIGlzIHVzZWQgdG8gY29udHJvbCB3aGV0aGVyXG4gKiB0aGUgc2VuZCBpcyBhY3RpdmUgYW5kIHdoYXQgdG8gZG8gYWZ0ZXIgdGhlIHNlbmQgY29tcGxldGVzLiBBIHNlbmQgY2FuIGJlY29tZVxuICogaW5hY3RpdmUgaWYgaXQgd2FzIHBhcnQgb2YgYW4gYHNlbGVjdGAgY2FsbCBhbmQgc29tZSBvdGhlciBvcGVyYXRpb25cbiAqIHNwZWNpZmllZCBpbiB0aGF0IGNhbGwgaGFzIGFscmVhZHkgY29tcGxldGVkLlxuICpcbiAqIFRoaXMgdmFsdWUgaXMgZ2l2ZW4gdG8gYSByZWNlaXZlIGhhbmRsZXIgaW1tZWRpYXRlbHkgaWYgdGhlcmUncyBvbmUgd2FpdGluZy5cbiAqIE90aGVyd2lzZSB0aGUgdmFsdWUgYW5kIGhhbmRsZXIgYXJlIHF1ZXVlZCB0b2dldGhlciB0byB3YWl0IGZvciBhIHJlY2VpdmUuXG4gKlxuICogVGhpcyBpcyBhIGxvdy1sZXZlbCBvcGVyYXRpb24gdGhhdCdzIHByb3ZpZGVkIGFzIGEgcGFydCBvZiB0aGUgY2hhbm5lbFxuICogaW1wbGVtZW50YXRpb24gc28gdGhhdCBvdGhlciBvcGVyYXRpb25zIGZ1bmN0aW9ucyBjYW4gcHJvcGVybHkgYXBwbHlcbiAqIGhhbmRsZXJzLiBJdCBpcyBub3QgbWVhbnQgZm9yIGdlbmVyYWwgdXNlLiBVc2UgdGhvc2Ugb3RoZXIgb3BlcmF0aW9uc1xuICogZnVuY3Rpb25zIGluc3RlYWQuXG4gKlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwL2NoYW5uZWxcbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5DaGFubmVsfSBjaGFubmVsIFRoZSBjaGFubmVsIHRoYXQgdGhlIHZhbHVlIGlzIGJlaW5nIHNlbnRcbiAqICAgICB0by5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGJlIHB1dCBvbnRvIHRoZSBjaGFubmVsLlxuICogQHBhcmFtIHtib29sZWFufSBoYW5kbGVyLmFjdGl2ZSBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHNlbmQgaXMgc3RpbGwgYWN0aXZlXG4gKiAgICAgYW5kIHNob3VsZCBzdGlsbCBiZSBzZXJ2aWNlZC5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGhhbmRsZXIuY29tbWl0IERlYWN0aXZhdGVzIHRoZSBzZW5kIChzbyBpdCBjYW4ndCBiZVxuICogICAgIHNlcnZpY2VkIGEgc2Vjb25kIHRpbWUpIGFuZCByZXR1cm5zIHRoZSBjYWxsYmFjayB0byBiZSBmaXJlZCB3aGVuIHRoZVxuICogICAgIHNlbmQgY29tcGxldGVzLlxuICogQHJldHVybiB7bW9kdWxlOmNzcC9jaGFubmVsLkJveHxudWxsfSBPbmUgb2YgdGhyZWUgdmFsdWVzLiBBIGJveGVkIGB0cnVlYCBpc1xuICogICAgIHJldHVybmVkIGlmIHRoZSBzZW5kIHdhcyBpbW1lZGlhdGVseSBjb25zdW1lZCBieSBhIHBlbmRpbmcgcmVjZWl2ZS4gQVxuICogICAgIGJveGVkIGBmYWxzZWAgaXMgcmV0dXJuZWQgaWYgdGhlIHNlbmQgd2FzIHBlcmZvcm1lZCBvbiBhIGNoYW5uZWwgdGhhdCB3YXNcbiAqICAgICBhbHJlYWR5IGNsb3NlZCBieSB0aGUgdGltZSB0aGUgc2VuZCB0b29rIHBsYWNlLiBgbnVsbGAgaXMgcmV0dXJuZWQgaWYgdGhlXG4gKiAgICAgc2VuZCB3YXMgcXVldWVkIHBlbmRpbmcgYSBjb3JyZXNwb25kaW5nIHJlY2VpdmUuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBoYW5kbGVTZW5kKGNoYW5uZWwsIHZhbHVlLCBoYW5kbGVyKSB7XG4gIGlmICh2YWx1ZSA9PT0gQ0xPU0VEKSB7XG4gICAgdGhyb3cgRXJyb3IoXCJDYW5ub3Qgc2VuZCBDTE9TRUQgdG8gYSBjaGFubmVsXCIpO1xuICB9XG5cbiAgaWYgKGNoYW5uZWwuY2xvc2VkKSB7XG4gICAgaGFuZGxlci5jb21taXQoKTtcbiAgICByZXR1cm4gYm94KGZhbHNlKTtcbiAgfVxuXG4gIGxldCByZWNlaXZlciwgY2FsbGJhY2s7XG5cbiAgLy8gUHVzaCB0aGUgaW5jb21pbmcgdmFsdWUgdGhyb3VnaCB0aGUgYnVmZmVyLCBldmVuIGlmIHRoZXJlJ3MgYWxyZWFkeSBhXG4gIC8vIHJlY2VpdmVyIHdhaXRpbmcgZm9yIHRoZSB2YWx1ZS4gVGhpcyBpcyB0byBtYWtlIHN1cmUgdGhhdCB0aGUgdHJhbnNkdWNlclxuICAvLyBzdGVwIGZ1bmN0aW9uIGhhcyBhIGNoYW5jZSB0byBhY3Qgb24gdGhlIHZhbHVlIGZpcnN0LCB3aGljaCBjb3VsZCBjaGFuZ2VcbiAgLy8gdGhlIHZhbHVlIG9yIG1ha2UgaXQgYWx0b2dldGhlciB1bmF2YWlsYWJsZS5cbiAgLy9cbiAgLy8gSWYgdGhlIGNoYW5uZWwgaXMgdW5idWZmZXJlZCB0aGlzIHByb2Nlc3MgaXMgc2tpcHBlZCAodGhlcmUgY2FuJ3QgYmUgYVxuICAvLyB0cmFuc2R1Y2VyIG9uIGFuIHVuYnVmZmVyZWQgY2hhbm5lbCBhbnl3YXkpLiBJZiB0aGUgYnVmZmVyIGlzIGZ1bGwsIHRoZVxuICAvLyB0cmFuc2R1Y2VyJ3Mgd29yayBpcyBkZWZlcnJlZCB1bnRpbCBsYXRlciB3aGVuIHRoZSBidWZmZXIgaXMgbm90IGZ1bGwuXG4gIGlmIChjaGFubmVsLmJ1ZmZlciAmJiAhaXNGdWxsKGNoYW5uZWwuYnVmZmVyKSkge1xuICAgIGhhbmRsZXIuY29tbWl0KCk7XG4gICAgY29uc3QgZG9uZSA9IGlzQ29tcGxldGVkKGNoYW5uZWwueGZvcm1bcC5zdGVwXShjaGFubmVsLmJ1ZmZlciwgdmFsdWUpKTtcblxuICAgIGZvciAoOzspIHtcbiAgICAgIGlmIChjb3VudChjaGFubmVsLmJ1ZmZlcikgPT09IDApIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICByZWNlaXZlciA9IGRlcXVldWUoY2hhbm5lbC5yZWN2cyk7XG4gICAgICBpZiAocmVjZWl2ZXIgPT09IEVNUFRZKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgaWYgKHJlY2VpdmVyLmFjdGl2ZSkge1xuICAgICAgICBjYWxsYmFjayA9IHJlY2VpdmVyLmNvbW1pdCgpO1xuICAgICAgICBjb25zdCB2YWwgPSByZW1vdmUoY2hhbm5lbC5idWZmZXIpO1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICBkaXNwYXRjaCgoKSA9PiBjYWxsYmFjayh2YWwpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChkb25lKSB7XG4gICAgICBjbG9zZShjaGFubmVsKTtcbiAgICB9XG4gICAgcmV0dXJuIGJveCh0cnVlKTtcbiAgfVxuXG4gIC8vIFRoaXMgbG9vcCBoYXBwZW5zIGlmIHRoZSBjaGFubmVsIGlzIHVuYnVmZmVyZWQgYW5kIHRoZXJlIGlzIGF0IGxlYXN0IG9uZVxuICAvLyBwZW5kaW5nIHJlY2VpdmUuIChCdWZmZXJlZCBjaGFubmVscyBicmVhayBvdXQgb2YgdGhpcyBsb29wIGltbWVkaWF0ZWx5LFxuICAvLyBiZWNhdXNlIGluIG9yZGVyIGZvciBhIGJ1ZmZlcmVkIGNoYW5uZWwgdG8gcmVhY2ggdGhpcyBwb2ludCwgaXRzIGJ1ZmZlclxuICAvLyBtdXN0IGhhdmUgYmVlbiBmdWxsLiBJZiB0aGUgYnVmZmVyIGlzIGZ1bGwsIHRoYXQgbWVhbnMgdGhlcmUgYXJlIG5vIHBlbmRpbmdcbiAgLy8gcmVjZWl2ZXMgYW5kIHRoZSBmaXJzdCBvbmUgcmVhZCB3aWxsIGJlIEVNUFRZLikgSXQgcHJvY2Vzc2VzIHRoZSBuZXh0XG4gIC8vIHBlbmRpbmcgcmVjZWl2ZSBpbW1lZGlhdGVseS5cbiAgZm9yICg7Oykge1xuICAgIHJlY2VpdmVyID0gZGVxdWV1ZShjaGFubmVsLnJlY3ZzKTtcbiAgICBpZiAocmVjZWl2ZXIgPT09IEVNUFRZKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgaWYgKHJlY2VpdmVyLmFjdGl2ZSkge1xuICAgICAgaGFuZGxlci5jb21taXQoKTtcbiAgICAgIGNhbGxiYWNrID0gcmVjZWl2ZXIuY29tbWl0KCk7XG4gICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgZGlzcGF0Y2goKCkgPT4gY2FsbGJhY2sodmFsdWUpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBib3godHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgLy8gSWYgdGhlcmUgYXJlIG5vIHBlbmRpbmcgcmVjZWl2ZXMgb24gYW4gdW5idWZmZXJlZCBjaGFubmVsLCBvciBvbiBhIGJ1ZmZlcmVkXG4gIC8vIGNoYW5uZWwgd2l0aCBhIGZ1bGwgYnVmZmVyLCB3ZSBxdWV1ZSB0aGUgc2VuZCB0byB0bGV0IGl0IHdhaXQgZm9yIGEgcmVjZWl2ZVxuICAvLyB0byBiZWNvbWUgYXZhaWxhYmxlLiBTZW5kcyB3aG9zZSBoYW5kbGVycyBoYXZlIGdvbmUgaW5hY3RpdmUgKHdoaWNoIGhhcHBlbnNcbiAgLy8gaWYgdGhleSB3ZXJlIHByb2Nlc3NlZCBhcyBwYXJ0IG9mIGEgYHNlbGVjdGAgY2FsbCkgYXJlIHBlcmlvZGljYWxseSBwdXJnZWQuXG4gIGlmIChjaGFubmVsLmRpcnR5U2VuZHMgPiBjaGFubmVsLm1heERpcnR5KSB7XG4gICAgZmlsdGVyKGNoYW5uZWwuc2VuZHMsIHNlbmRlciA9PiBzZW5kZXIuaGFuZGxlci5hY3RpdmUpO1xuICAgIGNoYW5uZWwuZGlydHlTZW5kcyA9IDA7XG4gIH0gZWxzZSB7XG4gICAgY2hhbm5lbC5kaXJ0eVNlbmRzKys7XG4gIH1cblxuICBpZiAocUNvdW50KGNoYW5uZWwuc2VuZHMpID49IGNoYW5uZWwubWF4UXVldWVkKSB7XG4gICAgdGhyb3cgRXJyb3IoXG4gICAgICBgTm8gbW9yZSB0aGFuICR7Y2hhbm5lbC5tYXhRdWV1ZWR9IHBlbmRpbmcgc2VuZHMgYXJlIGFsbG93ZWQgb24gYSBzaW5nbGUgY2hhbm5lbGBcbiAgICApO1xuICB9XG4gIGVucXVldWUoY2hhbm5lbC5zZW5kcywgc2VuZEJveCh2YWx1ZSwgaGFuZGxlcikpO1xuXG4gIHJldHVybiBudWxsO1xufVxuXG4vKipcbiAqIFJlY2VpdmVzIGEgdmFsdWUgZnJvbSBhIGNoYW5uZWwuIFRoZSBzcGVjaWZpZWQgaGFuZGxlciBpcyB1c2VkIHRvIGNvbnRyb2xcbiAqIHdoZXRoZXIgdGhlIHJlY2VpdmUgaXMgYWN0aXZlIGFuZCB3aGF0IHRvIGRvIGFmdGVyIHRoZSByZWNlaXZlIGNvbXBsZXRlcy4gQVxuICogcmVjZWl2ZSBjYW4gYmVjb21lIGluYWN0aXZlIGlmIGl0IHdhcyBwYXJ0IG9mIGFuIGBzZWxlY3RgIGNhbGwgYW5kIHNvbWUgb3RoZXJcbiAqIG9wZXJhdGlvbiBzcGVjaWZpZWQgaW4gdGhhdCBjYWxsIGhhcyBhbHJlYWR5IGNvbXBsZXRlZC5cbiAqXG4gKiBUaGlzIHZhbHVlIGlzIGdpdmVuIHRvIGEgc2VuZCBoYW5kbGVyIGltbWVkaWF0ZWx5IGlmIHRoZXJlJ3Mgb25lIHdhaXRpbmcuXG4gKiBPdGhlcndpc2UgdGhlIHZhbHVlIGFuZCBoYW5kbGVyIGFyZSBxdWV1ZWQgdG9nZXRoZXIgdG8gd2FpdCBmb3IgYSBzZW5kLlxuICpcbiAqIFRoaXMgaXMgYSBsb3ctbGV2ZWwgb3BlcmF0aW9uIHRoYXQncyBwcm92aWRlZCBhcyBhIHBhcnQgb2YgdGhlIGNoYW5uZWxcbiAqIGltcGxlbWVudGF0aW9uIHNvIHRoYXQgb3RoZXIgb3BlcmF0aW9ucyBmdW5jdGlvbnMgY2FuIHByb3Blcmx5IGFwcGx5XG4gKiBoYW5kbGVycy4gSXQgaXMgbm90IG1lYW50IGZvciBnZW5lcmFsIHVzZS4gVXNlIHRob3NlIG90aGVyIG9wZXJhdGlvbnNcbiAqIGZ1bmN0aW9ucyBpbnN0ZWFkLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwL2NoYW5uZWxcbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5DaGFubmVsfSBjaGFubmVsIFRoZSBjaGFubmVsIHRoYXQgdGhlIHZhbHVlIGlzIGJlaW5nXG4gKiAgICAgcmVjZWl2ZWQgZnJvbS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaGFuZGxlci5hY3RpdmUgRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSByZWNlaXZlIGlzIHN0aWxsXG4gKiAgICAgYWN0aXZlIGFuZCBzaG91bGQgc3RpbGwgYmUgc2VydmljZWQuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBoYW5kbGVyLmNvbW1pdCBEZWFjdGl2YXRlcyB0aGUgcmVjZWl2ZSAoc28gaXQgY2FuJ3QgYmVcbiAqICAgICBzZXJ2aWNlZCBhIHNlY29uZCB0aW1lKSBhbmQgcmV0dXJucyB0aGUgY2FsbGJhY2sgdG8gYmUgZmlyZWQgd2hlbiB0aGVcbiAqICAgICByZWNlaXZlIGNvbXBsZXRlcy5cbiAqIEByZXR1cm4ge21vZHVsZTpjc3AvY2hhbm5lbC5Cb3h8bnVsbH0gRWl0aGVyIHRoZSBib3hlZCB2YWx1ZSByZWNlaXZlZCBmcm9tXG4gKiAgICAgdGhlIGNoYW5uZWwsIG9yIGBudWxsYCBpZiB0aGUgcmVjZWl2ZSBtdXN0IGJlIHF1ZXVlZCB0byBhd2FpdCBhXG4gKiAgICAgY29ycmVzcG9uZGluZyBzZW5kLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaGFuZGxlUmVjdihjaGFubmVsLCBoYW5kbGVyKSB7XG4gIGxldCBzZW5kZXIsIHNlbmRIYW5kbGVyLCBjYWxsYmFjaztcblxuICAvLyBSdW5zIGlmIHRoZSBjaGFubmVsIGlzIGJ1ZmZlcmVkIGFuZCB0aGUgYnVmZmVyZWQgaXMgbm90IGVtcHR5IChhbiBlbXB0eVxuICAvLyBidWZmZXIgbWVhbnMgdGhlcmUgYXJlIG5vIHBlbmRpbmcgc2VuZHMpLiBXZSBpbW1lZGlhdGVseSBwcm9jZXNzIGFueSBzZW5kc1xuICAvLyB0aGF0IHdlcmUgcXVldWVkIHdoZW4gdGhlcmUgd2VyZSBubyBwZW5kaW5nIHJlY2VpdmVzLCB1cCB1bnRpbCB0aGUgYnVmZmVyXG4gIC8vIGlzIGZpbGxlZCB3aXRoIHNlbnQgdmFsdWVzLlxuICBpZiAoY2hhbm5lbC5idWZmZXIgJiYgY291bnQoY2hhbm5lbC5idWZmZXIpID4gMCkge1xuICAgIGhhbmRsZXIuY29tbWl0KCk7XG4gICAgY29uc3QgdmFsdWUgPSByZW1vdmUoY2hhbm5lbC5idWZmZXIpO1xuXG4gICAgZm9yICg7Oykge1xuICAgICAgaWYgKGlzRnVsbChjaGFubmVsLmJ1ZmZlcikpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBzZW5kZXIgPSBkZXF1ZXVlKGNoYW5uZWwuc2VuZHMpO1xuICAgICAgaWYgKHNlbmRlciA9PT0gRU1QVFkpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIHNlbmRIYW5kbGVyID0gc2VuZGVyLmhhbmRsZXI7XG4gICAgICBpZiAoc2VuZEhhbmRsZXIuYWN0aXZlKSB7XG4gICAgICAgIGNhbGxiYWNrID0gc2VuZEhhbmRsZXIuY29tbWl0KCk7XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgIGRpc3BhdGNoKCgpID0+IGNhbGxiYWNrKHRydWUpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNDb21wbGV0ZWQoY2hhbm5lbC54Zm9ybVtwLnN0ZXBdKGNoYW5uZWwuYnVmZmVyLCBzZW5kZXIudmFsdWUpKSkge1xuICAgICAgICAgIGNsb3NlKGNoYW5uZWwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBib3godmFsdWUpO1xuICB9XG5cbiAgLy8gVGhpcyBsb29wIHJ1bnMgb24gYW4gdW5idWZmZXJlZCBjaGFubmVsIGlmIHRoZXJlIGFyZSBhbnkgcGVuZGluZyBzZW5kcy5cbiAgLy8gKEJ1ZmZlcmVkIGNoYW5uZWxzIGJyZWFrIG91dCBvZiB0aGlzIGxvb3AgaW1tZWRpYXRlbHkgYmVjYXVzZSBpbiBvcmRlciB0b1xuICAvLyBoYXZlIGNvbWUgdGhpcyBmYXIgd2l0aG91dCByZXR1cm5pbmcsIHRoZSBjaGFubmVsJ3MgYnVmZmVyIG11c3QgaGF2ZSBiZWVuXG4gIC8vIGVtcHR5LiBBbiBlbXB0eSBidWZmZXIgbWVhbnMgdGhlcmUgYXJlIG5vIHBlbmRpbmcgc2VuZHMsIHNvIHRoZSBmaXJzdFxuICAvLyBwZW5kaW5nIHNlbmQgcmVhZCBmcm9tIGl0IHdpbGwgYmUgRU1QVFkuKSBJdCBwcm9jZXNzZXMgdGhlIG5leHQgcGVuZGluZ1xuICAvLyBzZW5kIGltbWVkaWF0ZWx5LlxuICBmb3IgKDs7KSB7XG4gICAgc2VuZGVyID0gZGVxdWV1ZShjaGFubmVsLnNlbmRzKTtcbiAgICBpZiAoc2VuZGVyID09PSBFTVBUWSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHNlbmRIYW5kbGVyID0gc2VuZGVyLmhhbmRsZXI7XG4gICAgaWYgKHNlbmRIYW5kbGVyLmFjdGl2ZSkge1xuICAgICAgY2FsbGJhY2sgPSBzZW5kSGFuZGxlci5jb21taXQoKTtcbiAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICBkaXNwYXRjaCgoKSA9PiBjYWxsYmFjayh0cnVlKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gYm94KHNlbmRlci52YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgLy8gSWYgd2UndmUgZXhoYXVzdGVkIGFsbCBvZiBvdXIgcGVuZGluZyBzZW5kcyBhbmQgdGhlIGNoYW5uZWwgaXMgbWFya2VkXG4gIC8vIGNsb3NlZCwgd2UgY2FuIGZpbmFsbHkgcmV1dHJuIHRoZSBmYWN0IHRoYXQgdGhlIGNoYW5uZWwgaXMgY2xvc2VkLiBUaGlzXG4gIC8vIGVuc3VyZXMgdGhhdCBhbnkgc2VuZHMgdGhhdCB3ZXJlIGFscmVhZHkgcGVuZGluZyBvbiB0aGUgY2hhbm5lbCBhcmVcbiAgLy8gcHJvY2Vzc2VkIGJlZm9yZSBjbG9zdXJlLCBldmVuIGlmIHRoZSBjaGFubmVsIHdhcyBjbG9zZWQgYmVmb3JlIHRoYXQgY291bGRcbiAgLy8gaGFwcGVuLlxuICBpZiAoY2hhbm5lbC5jbG9zZWQpIHtcbiAgICBoYW5kbGVyLmNvbW1pdCgpO1xuICAgIHJldHVybiBib3goQ0xPU0VEKTtcbiAgfVxuXG4gIC8vIElmIGFuIHVuYnVmZmVyZWQgY2hhbm5lbCBvciBhIGJ1ZmZlcmVkIGNoYW5uZWwgd2l0aCBhbiBlbXB0eSBidWZmZXIgaGFzIG5vXG4gIC8vIHBlbmRpbmcgc2VuZHMsIGFuZCBpZiB0aGUgY2hhbm5lbCBpcyBzdGlsbCBvcGVuLCB0aGUgcmVjZWl2ZSBpcyBxdWV1ZWQgdG9cbiAgLy8gYmUgcHJvY2Vzc2VkIHdoZW4gYSBzZW5kIGlzIGF2YWlsYWJsZS4gUmVjZWl2ZXMgd2hvc2UgaGFuZGxlcnMgaGF2ZSBnb25lXG4gIC8vIGluYWN0aXZlIGFzIHRoZSByZXN1bHQgb2YgYHNlbGVjdGAgcHJvY2Vzc2luZyBhcmUgcGVyaW9kaWNhbGx5IHB1cmdlZC5cbiAgaWYgKGNoYW5uZWwuZGlydHlSZWN2cyA+IGNoYW5uZWwubWF4RGlydHkpIHtcbiAgICBmaWx0ZXIoY2hhbm5lbC5yZWN2cywgcmVjZWl2ZXIgPT4gcmVjZWl2ZXIuYWN0aXZlKTtcbiAgICBjaGFubmVsLmRpcnR5UmVjdnMgPSAwO1xuICB9IGVsc2Uge1xuICAgIGNoYW5uZWwuZGlydHlSZWN2cysrO1xuICB9XG5cbiAgaWYgKHFDb3VudChjaGFubmVsLnJlY3ZzKSA+PSBjaGFubmVsLm1heFF1ZXVlZCkge1xuICAgIGNvbnN0IG1heCA9IGNoYW5uZWwubWF4UXVldWVkO1xuICAgIHRocm93IEVycm9yKFxuICAgICAgYE5vIG1vcmUgdGhhbiAke21heH0gcGVuZGluZyByZWNlaXZlcyBhcmUgYWxsb3dlZCBvbiBhIHNpbmdsZSBjaGFubmVsYFxuICAgICk7XG4gIH1cbiAgZW5xdWV1ZShjaGFubmVsLnJlY3ZzLCBoYW5kbGVyKTtcblxuICByZXR1cm4gbnVsbDtcbn1cblxuLyoqXG4gKiBDbG9zZXMgdGhlIGNoYW5uZWwgaWYgaXQgaXNuJ3QgYWxyZWFkeSBjbG9zZWQuIFRoaXMgaW1tZWRpYXRlbHkgcmV0dXJucyBhbnlcbiAqIGJ1ZmZlcmVkIHZhbHVlcyB0byBwZW5kaW5nIHJlY2VpdmVzLiBJZiB0aGVyZSBhcmUgbm8gYnVmZmVyZWQgdmFsdWVzIChvciBpZlxuICogdGhleSd2ZSBhbHJlYWR5IGJlZW4gdGFrZW4gYnkgb3RoZXIgcmVjZWl2ZXMpLCB0aGVuIGFsbCBvZiB0aGUgcmVzdCBvZiB0aGVcbiAqIHJlY2VpdmVzIGFyZSBjb21wbGV0ZWQgd2l0aCB0aGUgdmFsdWUgb2Yge0BsaW5rIG1vZHVsZTpjc3AuQ0xPU0VEfENMT1NFRH0uXG4gKiBBbnkgcGVuZGluZyBzZW5kcyBhcmUgY29tcGxldGVkIHdpdGggdGhlIHZhbHVlIG9mIGBmYWxzZWAuXG4gKlxuICogTm90ZSB0aGF0IHRoZSBidWZmZXIgaXMgbm90IGVtcHRpZWQgaWYgdGhlcmUgYXJlIHN0aWxsIHZhbHVlcyByZW1haW5pbmcgYWZ0ZXJcbiAqIGFsbCBvZiB0aGUgcGVuZGluZyByZWNlaXZlcyBoYXZlIGJlZW4gaGFuZGxlZC4gVGhlIGNoYW5uZWwgd2lsbCBzdGlsbCBwcm92aWRlXG4gKiB0aG9zZSB2YWx1ZXMgdG8gYW55IGZ1dHVyZSByZWNlaXZlcywgdGhvdWdoIG5vIG5ldyB2YWx1ZXMgbWF5IGJlIGFkZGVkIHRvIHRoZVxuICogY2hhbm5lbC4gT25jZSB0aGUgYnVmZmVyIGlzIGRlcGxldGVkLCBhbnkgZnV0dXJlIHJlY2VpdmVzIHdpbGwgcmV0dXJuXG4gKiB7QGxpbmsgbW9kdWxlOmNzcC5DTE9TRUR8Q0xPU0VEfS5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICogQHBhcmFtIHttb2R1bGU6Y3NwLkNoYW5uZWx9IGNoYW5uZWwgVGhlIGNoYW5uZWwgdG8gYmUgY2xvc2VkLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY2xvc2UoY2hhbm5lbCkge1xuICBpZiAoY2hhbm5lbC5jbG9zZWQpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY2hhbm5lbC5jbG9zZWQgPSB0cnVlO1xuXG4gIGxldCByZWNlaXZlciwgc2VuZGVyLCBjYWxsYmFjaztcblxuICAvLyBJZiB0aGVyZSBpcyBhIGJ1ZmZlciBhbmQgaXQgaGFzIGF0IGxlYXN0IG9uZSB2YWx1ZSBpbiBpdCwgc2VuZCB0aG9zZSB2YWx1ZXNcbiAgLy8gdG8gYW55IHBlbmRpbmcgcmVjZWl2ZXMgdGhhdCBtaWdodCBzdGlsbCBiZSBxdWV1ZWQuXG4gIGlmIChjaGFubmVsLmJ1ZmZlcikge1xuICAgIGNoYW5uZWwueGZvcm1bcC5yZXN1bHRdKGNoYW5uZWwuYnVmZmVyKTtcbiAgICBmb3IgKDs7KSB7XG4gICAgICBpZiAoY291bnQoY2hhbm5lbC5idWZmZXIpID09PSAwKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgcmVjZWl2ZXIgPSBkZXF1ZXVlKGNoYW5uZWwucmVjdnMpO1xuICAgICAgaWYgKHJlY2VpdmVyID09PSBFTVBUWSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGlmIChyZWNlaXZlci5hY3RpdmUpIHtcbiAgICAgICAgY2FsbGJhY2sgPSByZWNlaXZlci5jb21taXQoKTtcbiAgICAgICAgY29uc3QgdmFsdWUgPSByZW1vdmUoY2hhbm5lbC5idWZmZXIpO1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICBkaXNwYXRjaCgoKSA9PiBjYWxsYmFjayh2YWx1ZSkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gT25jZSB0aGUgYnVmZmVyIGlzIGVtcHR5IChvciBpZiB0aGVyZSBpc24ndCBhIGJ1ZmZlciBhdCBhbGwpLCBzZW5kIENMT1NFRFxuICAvLyB0byBhbGwgcmVtYWluaW5nIHF1ZXVlZCByZWNlaXZlcy5cbiAgZm9yICg7Oykge1xuICAgIHJlY2VpdmVyID0gZGVxdWV1ZShjaGFubmVsLnJlY3ZzKTtcbiAgICBpZiAocmVjZWl2ZXIgPT09IEVNUFRZKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgaWYgKHJlY2VpdmVyLmFjdGl2ZSkge1xuICAgICAgY2FsbGJhY2sgPSByZWNlaXZlci5jb21taXQoKTtcbiAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICBkaXNwYXRjaCgoKSA9PiBjYWxsYmFjayhDTE9TRUQpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBTZW5kIGBmYWxzZWAgdG8gYW55IHJlbWFpbmluZyBxdWV1ZWQgc2VuZHMuXG4gIGZvciAoOzspIHtcbiAgICBzZW5kZXIgPSBkZXF1ZXVlKGNoYW5uZWwuc2VuZHMpO1xuICAgIGlmIChzZW5kZXIgPT09IEVNUFRZKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgaWYgKHNlbmRlci5oYW5kbGVyLmFjdGl2ZSkge1xuICAgICAgY2FsbGJhY2sgPSBzZW5kZXIuaGFuZGxlci5jb21taXQoKTtcbiAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICBkaXNwYXRjaCgoKSA9PiBjYWxsYmFjayhmYWxzZSkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQge1xuICBDTE9TRUQsXG4gIE1BWF9ESVJUWSxcbiAgTUFYX1FVRVVFRCxcbiAgY2hhbm5lbCxcbiAgaGFuZGxlU2VuZCxcbiAgaGFuZGxlUmVjdixcbiAgY2xvc2UsXG4gIGJveCxcbiAgaXNCb3hcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuLyoqXG4gKiBBbiBpbXBsZW1lbnRhdGlvbiBvZiBjaGFubmVscy4gVGhlc2UgY2hhbm5lbHMgYXJlIGVzc2VudGlhbGx5IHF1ZXVlcyB0aGF0XG4gKiBob2xkIGluc3RydWN0aW9ucyB3YWl0aW5nIGZvciB0aGUgbmV4dCBhdmFpbGFibGUgYXN5bmMgZnVuY3Rpb24gdG8gcHJvY2Vzc1xuICogdGhlbS4gVGhleSBjYW4gYmUgYnVmZmVyZWQsIHdoaWNoIGlzIGFjY29tcGxpc2hlZCB1c2luZyB0aGUgYnVmZmVyIGZ1bmN0aW9uc1xuICogYHtAbGluayBtb2R1bGU6Y3NwLmZpeGVkfGZpeGVkfWAsIGB7QGxpbmsgbW9kdWxlOmNzcC5kcm9wcGluZ3xkcm9wcGluZ31gLCBhbmRcbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC5zbGlkaW5nfHNsaWRpbmd9YC5cbiAqXG4gKiBDaGFubmVscyBkbyBub3QgaW50ZXJhY3Qgd2l0aCBKUyB0YXNrcyBvciB0aGUgZGlzcGF0Y2hlciBpbiBhbnkgbWVhbmluZ2Z1bFxuICogd2F5LiBUaGV5J3JlIGp1c3QgaGVyZSB0byBob2xkIHRhc2tzIHdoaWNoIG1heSB0aGVtc2VsdmVzIHRoZW4gY2F1c2UgbmV3IEpTXG4gKiB0YXNrcyB0byBiZSBjcmVhdGVkIHZpYSB0aGUgZGlzcGF0Y2hlci5cbiAqXG4gKiBDaGFubmVscyBtYXkgaGF2ZSB0cmFuc2R1Y2VycyBhc3NvY2lhdGVkIHdpdGggdGhlbS4gVGhlIHRyYW5zZHVjZXJzIGFyZVxuICogZXhwZWN0ZWQgdG8gZm9sbG93IHRoZSBzYW1lIGNvbnZlbnRpb25zIGFzIGFueSBvZiB0aGUgcG9wdWxhciB0cmFuc2R1Y2VyXG4gKiBsaWJyYXJpZXMuIEV4cGxpY2l0IHN1cHBvcnQgaXMgcmVxdWlyZWQgYmVjYXVzZSBjaGFubmVscyB3b3VsZG4ndCBwbGF5IHdlbGxcbiAqIHdpdGggdGhlIG5vcm1hbCB3YXkgb2YgbWFraW5nIGFuIG9iamVjdCBzdXBwb3J0IHRyYW5zZHVjdGlvbiwgZm9yIHR3b1xuICogZGlmZmVyZW50IHJlYXNvbnMuXG4gKlxuICogKiBUcmFuc2R1Y2VycyByZXF1aXJlIHRoZSBhYmlsaXR5IHRvIGNyZWF0ZSBhIG5ldywgZW1wdHkgY29sbGVjdGlvbiBvZiB0aGVcbiAqICAgc2FtZSB0eXBlIGFzIHRoZSBpbnB1dCBjb2xsZWN0aW9uLiBJbiB0aGlzIGNhc2UsIHRoYXQgd291bGQgbWVhbiBjcmVhdGluZyBhXG4gKiAgIG5ldyBjaGFubmVsLCBtZWFuaW5nIHRoYXQgdGhlIG91dHB1dCBjaGFubmVsIChmcm9tIHdoaWNoIHRoZSB0cmFuc2Zvcm1lZFxuICogICB2YWx1ZXMgYXJlIHJlY2VpdmVkKSB3b3VsZCBiZSBkaWZmZXJlbnQgdGhhbiB0aGUgaW5wdXQgY2hhbm5lbCAod2hlcmVcbiAqICAgdmFsdWVzIGFyZSBzZW50KS5cbiAqICogSWYgd2Ugc29tZWhvdyBnZXQgb3ZlciB0aGF0IHJlcXVpcmVtZW50IGFuZCBrZWVwIGFsbCBhY3Rpb24gb24gdGhlIHNhbWVcbiAqICAgY2hhbm5lbCwgd2UgY2FuJ3QgdGFrZSB2YWx1ZXMgZnJvbSB0aGUgY2hhbm5lbCwgdHJhbnNmb3JtIHRoZW0sIGFuZCBwdXRcbiAqICAgdGhlbSBiYWNrLiBUaGlzIHdvdWxkIHBvdGVudGlhbGx5IGNoYW5nZSB0aGUgb3JkZXIgb2YgdmFsdWVzIGluIHRoZSBjaGFubmVsXG4gKiAgIHNpbmNlIHdlIGFyZSBkZWFsaW5nIHdpdGggYXN5bmNocm9ub3VzIHByb2Nlc3Nlcy5cbiAqXG4gKiBUaGUgZXhwbGljaXQgc3VwcG9ydCBtZWFucyBhIHRyYW5zZHVjZXIgaXMgZGlyZWN0bHkgYXNzb2NpYXRlZCB3aXRoIGFcbiAqIGNoYW5uZWwuIFdoZW4gYSB2YWx1ZSBpcyBzZW50IHRvIHRoZSBjaGFubmVsLCBpdCdzIGZpcnN0IHJ1biB0aHJvdWdoIHRoZVxuICogdHJhbnNkdWNlciBhbmQgdGhlIHRyYW5zZm9ybWVkIHZhbHVlIGlzIHRoZSBvbmUgYWN0dWFsbHkgcHV0IGludG8gdGhlXG4gKiBjaGFubmVsJ3MgYnVmZmVyLiBUaGlzIGF2b2lkcyBib3RoIG9mIHRoZSBwcm9ibGVtcyBub3RlZCBhYm92ZS5cbiAqXG4gKiBAbW9kdWxlIGNzcC9jaGFubmVsXG4gKiBAcHJpdmF0ZVxuICovXG5cbmltcG9ydCB7XG4gIENMT1NFRCxcbiAgY2hhbm5lbCBhcyBjaGFuSW1wbCxcbiAgaGFuZGxlU2VuZCxcbiAgaGFuZGxlUmVjdixcbiAgY2xvc2UgYXMgY2xvc2VJbXBsLFxuICBNQVhfRElSVFksXG4gIE1BWF9RVUVVRURcbn0gZnJvbSBcIi4vaGFuZGxlclwiO1xuaW1wb3J0IHsgREVGQVVMVCwgc2VsZWN0LCBzZWxlY3RBc3luYywgdmFsdWUsIGNoYW5uZWwgfSBmcm9tIFwiLi9zZWxlY3RcIjtcbmltcG9ydCB7IGFkZCwgZml4ZWQsIGlzQnVmZmVyIH0gZnJvbSBcIm1vZHVsZXMvYnVmZmVyXCI7XG5pbXBvcnQgeyBwcm90b2NvbHMgYXMgcCB9IGZyb20gXCJtb2R1bGVzL3Byb3RvY29sXCI7XG5cbi8qKlxuICogQSBoYW5kbGVyIGZ1bmN0aW9uIGZvciBleGNlcHRpb25zIHRoYXQgYXJlIHRocm93biBieSBhIHRyYW5zZHVjZXIgd2hpbGVcbiAqIHRyYW5zZm9ybWluZyB2YWx1ZXMgb24gYSBjaGFubmVsLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBlcnIgVGhlIGVycm9yIG9iamVjdCB0aGF0IHdhcyB0aHJvd24gYnkgdGhlIHRyYW5zZHVjZXIuXG4gKiBAcmV0dXJuIHsqfSBBIHZhbHVlIHRoYXQgc2hvdWxkIGJlIHB1dCBpbnRvIHRoZSBjaGFubmVsJ3MgYnVmZmVyIHdoZW4gdGhlXG4gKiAgICAgdHJhbnNkdWNlciB0aHJvd3MgdGhlIGVycm9yLiBJZiB0aGlzIHZhbHVlIGlzXG4gKiAgICAge0BsaW5rIG1vZHVsZTpjc3AuQ0xPU0VEfENMT1NFRH0sIHRoZW4gbm8gdmFsdWUgYXQgYWxsIHdpbGwgYmUgYWRkZWQgdG9cbiAqICAgICB0aGUgYnVmZmVyLlxuICogQGNhbGxiYWNrXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcC9jaGFubmVsXG4gKiBAcHJpdmF0ZVxuICovXG5cbi8qKlxuICogVGhlIGRlZmF1bHQgZXhjZXB0aW9uIGhhbmRsZXIsIHVzZWQgd2hlbiBubyBleGNlcHRpb24gaGFuZGxlciBpcyBzdXBwbGllZCB0b1xuICogYHtAbGluayBtb2R1bGU6Y3NwL2NoYW5uZWwuaGFuZGxlRXhjZXB0aW9ufWAsXG4gKiBge0BsaW5rIG1vZHVsZTpjc3AvY2hhbm5lbC53cmFwVHJhbnNmb3JtZXJ9YCwgYHtAbGluayBtb2R1bGU6Y3NwLmNoYW58Y2hhbn1gLFxuICogb3IgYHtAbGluayBtb2R1bGU6Y3NwLnRyYW5zQ2hhbnx0cmFuc0NoYW59YC4gVGhpcyBkZWZhdWx0IGhhbmRsZXIgbWVyZWx5XG4gKiByZXR1cm5zIGB7QGxpbmsgbW9kdWxlOmNzcC5DTE9TRUR8Q0xPU0VEfWAsIHdoaWNoIHdpbGwgcmVzdWx0IGluIG5vIG5ldyB2YWx1ZVxuICogYmVpbmcgd3JpdHRlbiB0byB0aGUgY2hhbm5lbC5cbiAqXG4gKiBAdHlwZSB7bW9kdWxlOmNzcC5FeGNlcHRpb25IYW5kbGVyfVxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3AvY2hhbm5lbFxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgREVGQVVMVF9IQU5ETEVSID0gKCkgPT4gQ0xPU0VEO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgaGFuZGxlciB1c2VkIGZvciBgc2VuZGAgYW5kIGByZWN2YCBvcGVyYXRpb25zLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwL2NoYW5uZWxcbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC9jaGFubmVsLkhhbmRsZXJDYWxsYmFja30gZm4gVGhlIGNhbGxiYWNrIHRvIGJlIHJ1biB3aGVuXG4gKiAgICAgKGFuZCBpZikgdGhlIG9wZXJhdGlvbiBjb21wbGV0ZXMuXG4gKiBAcmV0dXJuIHttb2R1bGU6Y3NwL2NoYW5uZWwuSGFuZGxlcn0gVGhlIG5ldyBoYW5kbGVyLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gb3BIYW5kbGVyKGZuKSB7XG4gIHJldHVybiBPYmplY3QuY3JlYXRlKG51bGwsIHtcbiAgICBhY3RpdmU6IHtcbiAgICAgIHZhbHVlOiB0cnVlXG4gICAgfSxcbiAgICBjb21taXQ6IHtcbiAgICAgIHZhbHVlOiAoKSA9PiBmblxuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxuICogSGFuZGxlcyBhbiBleGNlcHRpb24gdGhhdCBpcyB0aHJvd24gaW5zaWRlIGEgdHJhbnNkdWNlci4gVGhlIHRocm93biBlcnJvciBpc1xuICogcGFzc2VkIHRvIHRoZSBgaGFuZGxlcmAgZnVuY3Rpb24sIGFuZCB0aGUgcmVzdWx0IG9mIHRoYXQgaGFuZGxlciBmdW5jdGlvbiBpc1xuICogYWRkZWQgdG8gdGhlIGNoYW5uZWwncyBidWZmZXIuIElmIHRoYXQgdmFsdWUgaXNcbiAqIHtAbGluayBtb2R1bGU6Y3NwLkNMT1NFRHxDTE9TRUR9LCB0aGVuIGl0IGlzICpub3QqIGFkZGVkIHRvIHRoZSBidWZmZXIuXG4gKlxuICogQHBhcmFtIHttb2R1bGU6Y3NwLkJ1ZmZlcn0gYnVmZmVyIFRoZSBidWZmZXIgdGhhdCBiYWNrcyB0aGUgY2hhbm5lbCB3aG9zZVxuICogICAgIHRyYW5zZHVjZXIncyBleGNlcHRpb25zIGFyZSBiZWluZyBoYW5kbGVkLlxuICogQHBhcmFtIHttb2R1bGU6Y3NwLkV4Y2VwdGlvbkhhbmRsZXJ9IGhhbmRsZXIgVGhlIGV4Y2VwdGlvbiBoYW5kbGluZyBmdW5jdGlvblxuICogICAgIHRoYXQgaXMgcnVuIHdoZW4gYW4gZXJyb3Igb2NjdXJzIGluIGEgdHJhbnNkdWNlci5cbiAqIEBwYXJhbSAge09iamVjdH0gZXggVGhlIGVycm9yIG9iamVjdCB0aHJvd24gYnkgdGhlIHRyYW5zZHVjZXIuXG4gKiBAcmV0dXJuIHttb2R1bGU6Y3NwLkJ1ZmZlcn0gVGhlIGJ1ZmZlciBpdHNlbGYuIFRoaXMgaXMgZG9uZSB0byBtYWtlIGl0IGVhc2llclxuICogICAgIHRvIGludGVncmF0ZSB0aGlzIGZ1bmN0aW9uIGludG8gYSB0cmFuc2R1Y2VyJ3Mgc3RlcCBmdW5jdGlvbi5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGhhbmRsZUV4Y2VwdGlvbihidWZmZXIsIGhhbmRsZXIsIGV4KSB7XG4gIGNvbnN0IHZhbHVlID0gaGFuZGxlcihleCk7XG4gIGlmICh2YWx1ZSAhPT0gQ0xPU0VEKSB7XG4gICAgYWRkKGJ1ZmZlciwgdmFsdWUpO1xuICB9XG4gIHJldHVybiBidWZmZXI7XG59XG5cbi8qKlxuICogQSB0cmFuc2R1Y2VyIHRoYXQgd3JhcHMgYW5vdGhlciB0cmFuc2R1Y2VyIHdpdGggZXJyb3IgaGFuZGxpbmcgY29kZS4gQW55XG4gKiBlcnJvciB0aGF0IG9jY3VycyB3aXRoaW4gdGhlIHRyYW5zZHVjZXIsIGVpdGhlciBpbiB0aGUgc3RlcCBmdW5jdGlvbiBvciB0aGVcbiAqIHJlc3VsdCBmdW5jdGlvbiwgd2lsbCBjYXVzZSB0aGUgZXJyb3IgaGFuZGxlciB0byBiZSBydW4uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHhmb3JtIFRoZSB0cmFuc2R1Y2VyIHRvIGFkZCBhbiBlcnJvciBoYW5kbGVyIHRvLlxuICogQHBhcmFtIHttb2R1bGU6Y3NwLkV4Y2VwdGlvbkhhbmRsZXJ9IFtoYW5kbGVyPURFRkFVTFRfSEFORExFUl0gVGhlIGV4Y2VwdGlvblxuICogICAgIGhhbmRsaW5nIGZ1bmN0aW9uIHRoYXQgaXMgcnVuIHdoZW4gYW4gZXJyb3Igb2NjdXJzIGluIHRoZSB0cmFuc2R1Y2VyLlxuICogQHJldHVybiB7T2JqZWN0fSBBIG5ldyB0cmFuc2R1Y2VyIHRoYXQgaXMgdGhlIHJlc3VsdCBvZiB3cmFwcGluZyB0aGUgcHJvdmlkZWRcbiAqICAgICB0cmFuc2R1Y2VyJ3Mgc3RlcCBhbmQgcmVzdWx0IGZ1bmN0aW9ucyB3aXRoIHRoZSBleGNlcHRpb24gaGFuZGxlci5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGhhbmRsZXJUcmFuc2R1Y2VyKHhmb3JtLCBoYW5kbGVyID0gREVGQVVMVF9IQU5ETEVSKSB7XG4gIHJldHVybiB7XG4gICAgW3Auc3RlcF0oYnVmZmVyLCBpbnB1dCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIHhmb3JtW3Auc3RlcF0oYnVmZmVyLCBpbnB1dCk7XG4gICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICByZXR1cm4gaGFuZGxlRXhjZXB0aW9uKGJ1ZmZlciwgaGFuZGxlciwgZXgpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBbcC5yZXN1bHRdKGJ1ZmZlcikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIHhmb3JtW3AucmVzdWx0XShidWZmZXIpO1xuICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgcmV0dXJuIGhhbmRsZUV4Y2VwdGlvbihidWZmZXIsIGhhbmRsZXIsIGV4KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59XG5cbi8qKlxuICogVGhlIHJlZHVjZXIgdXNlZCBhdCB0aGUgZW5kIG9mIGEgdHJhbnNkdWNlciBjaGFpbiB0byBjb250cm9sIGhvdyB0aGVcbiAqIHRyYW5zZm9ybWVkIHZhbHVlcyBhcmUgcmVkdWNlZCBiYWNrIG9udG8gdGhlIGNoYW5uZWwncyBidWZmZXIuIFRoaXMgcmVkdWNlclxuICogZG9lcyBub3RoaW5nIG1vcmUgdGhhbiBhZGQgdGhlIGlucHV0IGl0ZW1zICh3aGljaCBhcmUgdGhlIHRyYW5zZm9ybWVkIHZhbHVlc1xuICogdGhhdCBhcmUgYmVpbmcgcHV0IG9udG8gdGhlIGNoYW5uZWwpIHRvIHRoZSBjaGFubmVsIGJ1ZmZlci5cbiAqXG4gKiBUaGlzIGlzIGEgbmVjZXNzYXJ5IHBhcnQgb2Ygd29ya2luZyB3aXRoIGEgdHJhbnNkdWNlciwgYXMgdGhlIGZpbmFsIHJlZHVjZXJcbiAqIGFsd2F5cyB0YWtlcyB0aGUgdHJhbnNmb3JtZWQgdmFsdWVzIGFuZCByZW5kZXJzIHRoZW0gaW50byB3aGF0ZXZlciBjb2xsZWN0aW9uXG4gKiBpcyBkZXNpcmVkLiBUaGlzIGlzIHRoYXQgZmluYWwgcmVkdWNlciBmb3IgY2hhbm5lbHMuXG4gKlxuICogQHR5cGUge09iamVjdH1cbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IGJ1ZmZlclJlZHVjZXIgPSB7XG4gIFtwLmluaXRdKCkge1xuICAgIHRocm93IEVycm9yKFwiaW5pdCBub3QgYXZhaWxhYmxlXCIpO1xuICB9LFxuXG4gIFtwLnN0ZXBdKGJ1ZmZlciwgaW5wdXQpIHtcbiAgICBhZGQoYnVmZmVyLCBpbnB1dCk7XG4gICAgcmV0dXJuIGJ1ZmZlcjtcbiAgfSxcblxuICBbcC5yZXN1bHRdKGJ1ZmZlcikge1xuICAgIHJldHVybiBidWZmZXI7XG4gIH1cbn07XG5cbi8qKlxuICogUGFyc2VzIHRoZSBidWZmZXIgYXJndW1lbnQgYW5kIG9wdGlvbnMsIGFsb25nIHdpdGggYSBzZXQgb2YgZGVmYXVsdCBvcHRpb25zLFxuICogdG8gZmlndXJlIG91dCB3aGF0IHdhcyByZWFsbHkgcGFzc2VkIHRvIGB7QGxpbmsgbW9kdWxlOmNzcC5jaGFufGNoYW59YC5cbiAqXG4gKiBAcGFyYW0geyhudWxsfG51bWJlcnxtb2R1bGU6Y3NwLkJ1ZmZlcil9IGJ1ZmZlciBUaGUgYnVmZmVyIGFyZ3VtZW50IHBhc3NlZCB0b1xuICogICAgIGB7QGxpbmsgbW9kdWxlOmNzcC5jaGFufGNoYW59YC5cbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIFRoZSBvcHRpb25zIGFyZ3VtZW50IHBhc3NlZCB0b1xuICogICAgIGB7QGxpbmsgbW9kdWxlOmNzcC5jaGFufGNoYW59YC5cbiAqIEBwYXJhbSB7b2JqZWN0fSBkZWZhdWx0T3B0aW9ucyBEZWZhdWx0IHZhbHVlcyBmb3Igb3B0aW9ucyB0aGF0IG1pZ2h0IG5vdCBoYXZlXG4gKiAgICAgYmVlbiBzZW50IHRvIGB7QGxpbmsgbW9kdWxlOmNzcC5jaGFufGNoYW59YC5cbiAqIEByZXR1cm4ge29iamVjdH0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHByb2Nlc3NlZCB2YWx1ZXMgb2YgYWxsIG9mIHRoZVxuICogICAgIGFyZ3VtZW50cyBzZW50IHRvIGB7QGxpbmsgbW9kdWxlOmNzcC5jaGFufGNoYW59YC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHBhcnNlQXJncyhidWZmZXIsIG9wdGlvbnMsIGRlZmF1bHRPcHRpb25zKSB7XG4gIGxldCBidWY7XG4gIGxldCBvcHRzO1xuXG4gIGlmICghYnVmZmVyKSB7XG4gICAgLy8gc2FtZSBmb3IgMCwgbnVsbCwgb3IgdW5kZWZpbmVkXG4gICAgYnVmID0gbnVsbDtcbiAgICBvcHRzID0gb3B0aW9ucztcbiAgfSBlbHNlIGlmICh0eXBlb2YgYnVmZmVyID09PSBcIm51bWJlclwiKSB7XG4gICAgYnVmID0gZml4ZWQoYnVmZmVyKTtcbiAgICBvcHRzID0gb3B0aW9ucztcbiAgfSBlbHNlIGlmIChpc0J1ZmZlcihidWZmZXIpKSB7XG4gICAgYnVmID0gYnVmZmVyO1xuICAgIG9wdHMgPSBvcHRpb25zO1xuICB9IGVsc2Uge1xuICAgIC8vIElmIG5vIGJ1ZmZlciBpcyBzcGVjaWZpZWQgYnV0IGEgdHJhbnNkdWNlciBpcywgd2UgYXNzdW1lIGZpeGVkKDEpIGluc3RlYWRcbiAgICAvLyBvZiBubyBidWZmZXJcbiAgICBidWYgPSBidWZmZXI/LnRyYW5zZHVjZXIgPyBmaXhlZCgxKSA6IG51bGw7XG4gICAgb3B0cyA9IGJ1ZmZlcjtcbiAgfVxuXG4gIGNvbnN0IHsgdHJhbnNkdWNlciwgaGFuZGxlciwgbWF4RGlydHksIG1heFF1ZXVlZCwgdGltZXIgfSA9IE9iamVjdC5hc3NpZ24oXG4gICAge30sXG4gICAgZGVmYXVsdE9wdGlvbnMsXG4gICAgb3B0c1xuICApO1xuICByZXR1cm4geyBidWYsIHRyYW5zZHVjZXIsIGhhbmRsZXIsIG1heERpcnR5LCBtYXhRdWV1ZWQsIHRpbWVyIH07XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbmQgcmV0dXJucyBhIG5ldyBjaGFubmVsLlxuICpcbiAqIEJ5IGRlZmF1bHQgdGhpcyBjaGFubmVsIHdpbGwgYmUgYSBzaW1wbGUgdW5idWZmZXJlZCwgdW50cmFuc2Zvcm1lZCBjaGFubmVsLFxuICogYnV0IHRoYXQgY2FuIGJlIGNoYW5nZWQgdGhyb3VnaCBvcHRpb25zLiBBIGNoYW5uZWwgZG9lcyBub3QgaGF2ZSBhbnlcbiAqIGV4dGVybmFsbHkgdXNlZnVsIGZ1bmN0aW9ucy4gSXQgZXhpc3RzIGxhcmdlbHkgdG8gYmUgcGFzc2VkIGludG9cbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC5zZW5kfHNlbmR9YCwgYHtAbGluayBtb2R1bGU6Y3NwLnJlY3Z8cmVjdn1gLCBhbmRcbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC5zZWxlY3R8c2VsZWN0fWAgaW52b2NhdGlvbnMsIGFsb25nIHdpdGggdGhlaXIgbm9uLWJsb2NraW5nXG4gKiB2YXJpYXRpb25zIChge0BsaW5rIG1vZHVsZTpjc3Auc2VuZEFzeW5jfHNlbmRBc3luY31gLFxuICogYHtAbGluayBtb2R1bGU6Y3NwLnJlY3ZBc3luY3xyZWN2QXN5bmN9YCwgYW5kXG4gKiBge0BsaW5rIG1vZHVsZTpjc3Auc2VsZWN0QXN5bmN8c2VsZWN0QXN5bmN9YCkuXG4gKlxuICogSWYgYSBidWZmZXIgdmFsdWUgaXMgcHJvdmlkZWQsIGl0IGRlZmluZXMgd2hhdCBidWZmZXIgc2hvdWxkIGJhY2sgdGhlXG4gKiBjaGFubmVsLiBJZiB0aGlzIGlzIGBudWxsYCBvciBgMGAsIHRoZSBjaGFubmVsIHdpbGwgYmUgdW5idWZmZXJlZC4gSWYgaXQncyBhXG4gKiBwb3NpdGl2ZSBudW1iZXIsIHRoZSBjaGFubmVsIHdpbGwgYmUgYnVmZmVyZWQgYnkgYVxuICogYHtAbGluayBtb2R1bGU6Y3NwLkZpeGVkQnVmZmVyfEZpeGVkQnVmZmVyfSBgb2YgdGhhdCBzaXplLiBJZiBpdCdzIGFcbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC5CdWZmZXJ8QnVmZmVyfWAgb2JqZWN0LCB0aGF0IG9iamVjdCB3aWxsIGJlIHVzZWQgYXMgdGhlXG4gKiBjaGFubmVsJ3MgYnVmZmVyLiBJZiBpdCdzIG1pc3NpbmcgYWx0b2dldGhlciwgdGhlIGNoYW5uZWwgd2lsbCBiZSB1bmJ1ZmZlcmVkXG4gKiB1bmxlc3MgYSBgdHJhbnNkdWNlcmAgb3B0aW9uIGlzIHByb3ZpZGVkIChzZWUgYmVsb3cpLCBpbiB3aGljaCBjYXNlIGl0IHdpbGxcbiAqIGJlIGEgYHtAbGluayBtb2R1bGU6Y3NwLkZpeGVkQnVmZmVyfEZpeGVkQnVmZmVyfWAgb2Ygc2l6ZSAxLlxuICpcbiAqIGBjaGFuYCBzdXBwb3J0cyB0cmFuc2R1Y2VycyBieSBhbGxvd2luZyBhIHRyYW5zZHVjZXIgZnVuY3Rpb24gdG8gYmVcbiAqIGFzc29jaWF0ZWQgd2l0aCBpdC4gVGhpcyBpcyBwYXNzZWQgYXMgdGhlIGB0cmFuc2R1Y2VyYCBvcHRpb24gYW5kIGNhbiBvbmx5IGJlXG4gKiB1c2VkIGlmIHRoZSBjaGFubmVsIGlzIGJ1ZmZlcmVkIChvdGhlcndpc2UgYW4gZXJyb3IgaXMgdGhyb3duKS4gVGhpc1xuICogdHJhbnNkdWNlciBmdW5jdGlvbiBtdXN0IHRha2UgYW5vdGhlciB0cmFuc2R1Y2VyIGFzIGEgcGFyYW1ldGVyIChhbGxvd2luZ1xuICogdHJhbnNmb3JtZXJzIHRvIGJlIGNoYWluZWQpLCBhbmQgaXQgbXVzdCByZXR1cm4gYW4gb2JqZWN0IGNvbmZvcm1pbmcgdG8gdGhlXG4gKiB0cmFuc2R1Y2VyIHByb3RvY29sLlxuICpcbiAqIEVycm9ycyBpbiB0aGUgdHJhbnNmb3JtYXRpb24gcHJvY2VzcyBjYW4gYmUgaGFuZGxlZCBieSBwYXNzaW5nIGFuIGVycm9yXG4gKiBoYW5kbGVyLiBUaGlzIGlzIGEgZnVuY3Rpb24gdGhhdCBleHBlY3RzIHRvIHJlY2VpdmUgYW4gZXJyb3Igb2JqZWN0IGFzIGFcbiAqIHBhcmFtZXRlciBhbmQgY2FuIHJldHVybiBhIHZhbHVlIHRoYXQgaXMgdGhlbiBwdXQgb250byB0aGUgY2hhbm5lbC4gSWYgdGhpc1xuICogdmFsdWUgaXMgYHtAbGluayBtb2R1bGU6Y3NwLkNMT1NFRHxDTE9TRUR9YCwgdGhlbiBubyB2YWx1ZSB3aWxsIGJlIHB1dCBvbnRvXG4gKiB0aGUgY2hhbm5lbCB1cG9uIGhhbmRsZXIgY29tcGxldGlvbi5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICogQHBhcmFtIHsobnVtYmVyfG1vZHVsZTpjc3AuQnVmZmVyKX0gW2J1ZmZlcl0gVGhlIGJ1ZmZlciBvYmplY3QgdGhhdCBzaG91bGRcbiAqICAgICBiYWNrIHRoaXMgY2hhbm5lbC4gSWYgdGhpcyBpcyBhIHBvc2l0aXZlIG51bWJlciwgYSBmaXhlZCBidWZmZXIgb2YgdGhhdFxuICogICAgIHNpemUgd2lsbCBiZSBjcmVhdGVkIHRvIGJhY2sgdGhlIGNoYW5uZWwuIElmIGl0IGlzIGAwYCBvciBgbnVsbGAsIHRoZSBuZXdcbiAqICAgICBjaGFubmVsIHdpbGwgYmUgdW5idWZmZXJlZC4gSWYgaXQncyBub3QgcHJlc2VudCwgdGhlIG5ldyBjaGFubmVsIHdpbGwgYmVcbiAqICAgICB1bmJ1ZmZlcmVkIHVubGVzcyB0aGVyZSBpcyBhIGB0cmFuc2R1Y2VyYCBvcHRpb24sIGluIGluIHdoaWNoIGNhc2UgaXRcbiAqICAgICB3aWxsIGJlIGJ1ZmZlcmVkIHdpdGggYSBzaXplIDFcbiAqICAgICBge0BsaW5rIG1vZHVsZTpjc3AuRml4ZWRCdWZmZXJ8Rml4ZWRCdWZmZXJ9YC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gQSBzZXQgb2Ygb3B0aW9ucyBmb3IgY29uZmlndXJpbmcgdGhlIGNoYW5uZWwnc1xuICogICAgIHF1ZXVlLlxuICogQHBhcmFtIHttb2R1bGU6Y29yZS5UcmFuc2R1Y2VyRnVuY3Rpb259IFtvcHRpb25zLnRyYW5zZHVjZXJdIEEgdHJhbnNkdWNlciB0b1xuICogICAgIHJ1biBlYWNoIHZhbHVlIHRocm91Z2ggYmVmb3JlIHB1dHRpbmcgaXQgb250byB0aGUgY2hhbm5lbC4gVGhpcyBmdW5jdGlvblxuICogICAgIHNob3VsZCBleHBlY3Qgb25lIHBhcmFtZXRlciAoYW5vdGhlciB0cmFuc2R1Y2VyIHRoYXQgaXQncyBjaGFpbmVkIHRvKSBhbmRcbiAqICAgICByZXR1cm4gYW4gb2JqZWN0IHRoYXQgY29uZm9ybXMgdG8gdGhlIHRyYW5zZHVjZXIgcHJvdG9jb2wuIElmIGFcbiAqICAgICB0cmFuc2R1Y2VyIGlzIHByb3ZpZGVkIG9uIGFuIHVuYnVmZmVyZWQgY2hhbm5lbCwgYW4gZXJyb3Igd2lsbCBiZSB0aHJvd24uXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuRXhjZXB0aW9uSGFuZGxlcn0gW29wdGlvbnMuaGFuZGxlcl0gQW4gZXJyb3IgaGFuZGxlciB0aGF0XG4gKiAgICAgaXMgcnVuIHdoZW5ldmVyIGFuIGVycm9yIG9jY3VycyBpbnNpZGUgYSB0cmFuc2R1Y2VyIGZ1bmN0aW9uLiBJZiB0aGF0XG4gKiAgICAgaGFwcGVucywgdGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgd2l0aCBvbmUgcGFyYW1ldGVyLCB3aGljaCBpcyB0aGUgZXJyb3JcbiAqICAgICBvYmplY3QuIFRoZSB2YWx1ZSB0aGF0IHRoZSBoYW5kbGVyIHJldHVybnMgKGlmIGl0IGlzIG5vdFxuICogICAgIGB7QGxpbmsgbW9kdWxlOmNzcC5DTE9TRUR8Q0xPU0VEfWApIHdpbGwgYmUgcHV0IG9udG8gdGhlIGNoYW5uZWwgd2hlbiB0aGVcbiAqICAgICBoYW5kbGVyIGZpbmlzaGVzIHJ1bm5pbmcuXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMubWF4RGlydHk9NjRdIFRoZSBtYXhpbXVtIG51bWJlciBvZiBkaXJ0eSBvcGVyYXRpb25zXG4gKiAgICAgdGhhdCBjYW4gYmUgaW4gdGhlIHF1ZXVlIGJlZm9yZSB0aG9zZSBvcGVyYXRpb25zIGFyZSBzdWJqZWN0IHRvIGJlaW5nXG4gKiAgICAgcHVyZ2VkLiBEaXJ0eSBvcGVyYXRpb25zIGFyZSB0aG9zZSB0aGF0IG1heSBub3QgYmUgdmFsaWQgYW55bW9yZSBiZWNhdXNlXG4gKiAgICAgdGhleSB3ZXJlIGluIHRoZSBsaXN0IG9mIG9wZXJhdGlvbnMgcGFzc2VkIHRvXG4gKiAgICAgYHtAbGluayBtb2R1bGU6Y3NwLnNlbGVjdHxzZWxlY3R9YCBvclxuICogICAgIGB7QGxpbmsgbW9kdWxlOmNzcC5zZWxlY3RBc3luY3xzZWxlY3RBc3luY31gIGJ1dCB3ZXJlIG5vdCBjaG9zZW4gdG8gcnVuLlxuICogICAgIFRoaXMgcHJvdmlkZXMgYSBjaGFuY2UgZm9yIGEgdmVyeSBtaW5vciBwZXJmb3JtYW5jZSB0d2VhayBhbmQgaXMgYmVzdFxuICogICAgIGxlZnQgYWxvbmUuXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMubWF4UXVldWVkPTEwMjRdIFRoZSBtYXhpbXVtIG51bWJlciBvZiBvcGVyYXRpb25zXG4gKiAgICAgdGhhdCBjYW4gYmUgcXVldWVkIHVwIGF0IHRoZSBzYW1lIHRpbWUuIFRoaXMgcHJldmVudHMgaW5maW5pdGUgbG9vcHMgZnJvbVxuICogICAgIGFjY2lkZW50YWxseSBlYXRpbmcgdXAgYWxsIG9mIHRoZSBhdmFpbGFibGUgbWVtb3J5LlxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLnRpbWVyXSBJZiB0aGlzIHZhbHVlIGlzIHByZXNlbnQsIHRoZSBjaGFubmVsIHdpbGwgYmVcbiAqICAgICBhIHRpbWVkIGNoYW5uZWwgdGhhdCBjbG9zZXMgYXV0b21hdGljYWxseSBhZnRlciB0aGlzIG51bWJlciBvZlxuICogICAgIG1pbGxpc2Vjb25kcy5cbiAqIEByZXR1cm4ge21vZHVsZTpjc3AuQ2hhbm5lbH0gQSBuZXcgY2hhbm5lbC5cbiAqL1xuZnVuY3Rpb24gY2hhbihidWZmZXIsIG9wdGlvbnMpIHtcbiAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgbWF4RGlydHk6IE1BWF9ESVJUWSxcbiAgICBtYXhRdWV1ZWQ6IE1BWF9RVUVVRURcbiAgfTtcbiAgY29uc3QgeyBidWYsIHRyYW5zZHVjZXIsIGhhbmRsZXIsIG1heERpcnR5LCBtYXhRdWV1ZWQsIHRpbWVyIH0gPSBwYXJzZUFyZ3MoXG4gICAgYnVmZmVyLFxuICAgIG9wdGlvbnMsXG4gICAgZGVmYXVsdE9wdGlvbnNcbiAgKTtcblxuICBpZiAodHJhbnNkdWNlciAmJiAhYnVmKSB7XG4gICAgdGhyb3cgRXJyb3IoXCJPbmx5IGJ1ZmZlcmVkIGNoYW5uZWxzIGNhbiB1c2UgdHJhbnNkdWNlcnNcIik7XG4gIH1cblxuICBjb25zdCB4ZiA9IGhhbmRsZXJUcmFuc2R1Y2VyKFxuICAgIHRyYW5zZHVjZXIgPyB0cmFuc2R1Y2VyKGJ1ZmZlclJlZHVjZXIpIDogYnVmZmVyUmVkdWNlcixcbiAgICBoYW5kbGVyXG4gICk7XG5cbiAgY29uc3QgaXNUaW1lZCA9IHR5cGVvZiB0aW1lciA9PT0gXCJudW1iZXJcIjtcblxuICBjb25zdCBjaCA9IGNoYW5JbXBsKGJ1ZiwgeGYsIGlzVGltZWQsIG1heERpcnR5LCBtYXhRdWV1ZWQpO1xuXG4gIGFzeW5jIGZ1bmN0aW9uKiBpdGVyYXRvcigpIHtcbiAgICBmb3IgKDs7KSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGF3YWl0IHJlY3YoY2gpO1xuICAgICAgaWYgKHZhbHVlID09PSBDTE9TRUQpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICB5aWVsZCB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBjaFtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBpdGVyYXRvcjtcblxuICBpZiAoaXNUaW1lZCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4gY2xvc2VJbXBsKGNoKSwgdGltZXIpO1xuICB9XG5cbiAgcmV0dXJuIGNoO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYW4gdW5idWZmZXJlZCwgdGltZWQgY2hhbm5lbC4gVGhpcyBjaGFubmVsIGNsb3NlcyBhdXRvbWF0aWNhbGx5IGFmdGVyXG4gKiB0aGUgc3VwcGxpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBhbmQgaXMgdGhlIGVxdWl2YWxlbnQgb2YgY2FsbGluZyBgY2hhbigwLFxuICogeyB0aW1lcjogZGVsYXkgfSlgLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcGFyYW0ge251bWJlcn0gZGVsYXkgVGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgYWZ0ZXIgdGhlIGNoYW5uZWwgaXMgY3JlYXRlZFxuICogICAgIHRoYXQgaXQgd2lsbCBiZSBjbG9zZWQgYXV0b21hdGljYWxseS5cbiAqIEByZXR1cm4ge21vZHVsZTpjc3AuQ2hhbm5lbH0gQSBuZXcgdGltZWQgY2hhbm5lbC5cbiAqL1xuZnVuY3Rpb24gdGltZWRDaGFuKGRlbGF5ID0gMCkge1xuICByZXR1cm4gY2hhbih7IHRpbWVyOiBkZWxheSB9KTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgYnVmZmVyZWQgY2hhbm5lbCB3aXRoIGEgdHJhbnNkdWNlciBhbmQgb3B0aW9uYWwgZXJyb3IgaGFuZGxlci4gVGhlXG4gKiBidWZmZXIgZm9yIHRoaXMgY2hhbm5lbCBpcyBhIGB7QGxpbmsgbW9kdWxlOmNzcC5GaXhlZEJ1ZmZlcnxGaXhlZEJ1ZmZlcn1gIG9mXG4gKiBzaXplIDEuIFRoaXMgaXMgdGhlIGVxdWl2YWxlbnQgb2YgYGNoYW4oMSwgeyB0cmFuc2R1Y2VyLCBoYW5kbGVyIH0pYC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICogQHBhcmFtIHttb2R1bGU6Y29yZS5UcmFuc2R1Y2VyRnVuY3Rpb259IHRyYW5zZHVjZXIgVGhlIHRyYW5zZHVjZXIgdXNlZCB0b1xuICogICAgIHRyYW5zZm9ybSB2YWx1ZXMgb24gdGhlIG5ldyBjaGFubmVsLlxuICogQHBhcmFtIHttb2R1bGU6Y3NwLkV4Y2VwdGlvbkhhbmRsZXJ9IFtoYW5kbGVyXSBBbiBleGNlcHRpb24gaGFuZGxlciBjYWxsZWRcbiAqICAgICB3aXRoIHRoZSBlcnJvciBvYmplY3QgYXMgaXRzIG9ubHkgYXJndW1lbnQgd2hlbiBhbiBlcnJvciBoYXBwZW5zIGluc2lkZSBhXG4gKiAgICAgdHJhbnNkdWNlci4gSWYgdGhpcyBpcyBub3QgcHJvdmlkZWQsIGEgZGVmYXVsdCBoYW5kbGVyIGlzIHVzZWQgdGhhdFxuICogICAgIHNpbXBseSBkb2VzIG5vdGhpbmcsIGluY2x1ZGluZyBzZW5kaW5nIG5vIG91dHB1dCBmcm9tIHRoZSB2YWx1ZSB0aGF0XG4gKiAgICAgZXJyb3JlZC5cbiAqIEByZXR1cm4ge21vZHVsZTpjc3AuQ2hhbm5lbH0gQSBuZXcgY2hhbm5lbCB3aXRoIGEgdHJhbnNkdWNlci5cbiAqL1xuZnVuY3Rpb24gdHJhbnNDaGFuKHRyYW5zZHVjZXIsIGhhbmRsZXIpIHtcbiAgcmV0dXJuIGNoYW4oeyB0cmFuc2R1Y2VyLCBoYW5kbGVyIH0pO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhIGNoYW5uZWwgaXMgY2xvc2VkLlxuICpcbiAqIEEgY2xvc2VkIGNoYW5uZWwgd2lsbCBjYXVzZSBhbnkgYHNlbmRgIG9wZXJhdGlvbiB0byByZXR1cm4gYGZhbHNlYCBhbmQgYW55XG4gKiBgcmVjdmAgb3BlcmF0aW9uIHRvIHJldHVybiBhbnkgYnVmZmVyZWQgaXRlbXMgdGhhdCByZW1haW4sIGZvbGxvd2VkIGJ5XG4gKiBge0BsaW5rIG1vZHVsZTpjc3AuQ0xPU0VEfENMT1NFRH1gLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuQ2hhbm5lbH0gY2hhbm5lbCBUaGUgY2hhbm5lbCB0byBjaGVjay5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IEVpdGhlciBgdHJ1ZWAgaWYgdGhlIGNoYW5uZWwgaXMgY2xvc2VkIG9yIGBmYWxzZWAgaWYgaXRcbiAqICAgICBpc24ndC5cbiAqL1xuZnVuY3Rpb24gaXNDbG9zZWQoY2hhbm5lbCkge1xuICByZXR1cm4gY2hhbm5lbC5jbG9zZWQ7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGEgY2hhbm5lbCBpcyBidWZmZXJlZC5cbiAqXG4gKiBBIGNoYW5uZWwgaXMgYnVmZmVyZWQgaWYgYSBidWZmZXIgb3IgYSBudW1iZXIgd2FzIHBhc3NlZCBhcyB0aGUgZmlyc3RcbiAqIGFyZ3VtZW50IG9mIGB7QGxpbmsgbW9kdWxlOmNzcC5jaGFufGNoYW59YCBvciBpZiBhIHRyYW5zZHVjZXIgaXMgYSBwYXJ0IG9mXG4gKiB0aGUgY2hhbm5lbC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICogQHBhcmFtIHttb2R1bGU6Y3NwLkNoYW5uZWx9IGNoYW5uZWwgVGhlIGNoYW5uZWwgdG8gY2hlY2suXG4gKiBAcmV0dXJuIHtib29sZWFufSBFaXRoZXIgYHRydWVgIGlmIHRoZSBjaGFubmVsIGlzIGJ1ZmZlcmVkIG9yIGBmYWxzZWAgaWYgaXRcbiAqICAgICBpc24ndC5cbiAqL1xuZnVuY3Rpb24gaXNCdWZmZXJlZChjaGFubmVsKSB7XG4gIHJldHVybiBjaGFubmVsLmlzQnVmZmVyZWQ7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGEgY2hhbm5lbCBpcyB0aW1lZC5cbiAqXG4gKiBBIGNoYW5uZWwgaXMgdGltZWQgaWYgaXQgd2FzIGNyZWF0ZWQgZWl0aGVyIHdpdGggdGhlIGB0aW1lcmAgb3B0aW9uIG9mXG4gKiBge0BsaW5rIG1vZHVsZTpjc3AuY2hhbnxjaGFufWAgb3Igd2l0aCB0aGVcbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC50aW1lZENoYW58dGltZWRDaGFufWAgZnVuY3Rpb24uIEl0IHdpbGwgYXV0b21hdGljYWxseVxuICogY2xvc2UgYWZ0ZXIgYSBjZXJ0YWluIHBlcmlvZCBvZiB0aW1lLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuQ2hhbm5lbH0gY2hhbm5lbCBUaGUgY2hhbm5lbCB0byBjaGVjay5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IEVpdGhlciBgdHJ1ZWAgaWYgdGhlIGNoYW5uZWwgaXMgdGltZWQgb3IgYGZhbHNlYCBpZiBpdFxuICogICAgIGlzbid0LlxuICovXG5mdW5jdGlvbiBpc1RpbWVkKGNoYW5uZWwpIHtcbiAgcmV0dXJuIGNoYW5uZWwuaXNUaW1lZDtcbn1cblxuLyoqXG4gKiBTZW5kcyBhIHZhbHVlIHRvIHRoaXMgY2hhbm5lbCB3aXRob3V0IGJsb2NraW5nLlxuICpcbiAqIFRoaXMgbWVhbnMgdGhhdCBhIGNhbGwgdG8gYHNlbmRBc3luY2AgZG9lcyBub3QgZ28gaW50byBhbiBgYXdhaXRgIGV4cHJlc3Npb24sXG4gKiBhbmQgaXQgaXMgbm90IG5lY2Vzc2FyeSB0byB1c2UgaXQgaW5zaWRlIGEgYXN5bmMgZnVuY3Rpb24uIFJhdGhlciB0aGFuXG4gKiBibG9ja2luZyB1bnRpbCB0aGUgc2VudCB2YWx1ZSBpcyB0YWtlbiBieSBhbm90aGVyIGFzeW5jIGZ1bmN0aW9uLCB0aGlzIG9uZVxuICogcmV0dXJucyBpbW1lZGlhdGVseSBhbmQgdGhlbiBpbnZva2VzIHRoZSBjYWxsYmFjayAoaWYgcHJvdmlkZWQpIHdoZW4gdGhlIHNlbnRcbiAqIHZhbHVlIGlzIHRha2VuLiBJdCBjYW4gYmUgc2VlbiBhcyBhIG5vbi1ibG9ja2luZyB2ZXJzaW9uIG9mXG4gKiBge0BsaW5rIG1vZHVsZTpjc3Auc2VuZHxzZW5kfWAuXG4gKlxuICogV2hpbGUgdGhlIHByaW1hcnkgdXNlIG9mIHRoaXMgZnVuY3Rpb24gaXMgdG8gc2VuZCB2YWx1ZXMgb250byBjaGFubmVscyBpblxuICogY29udGV4dHMgd2hlcmUgYmVpbmcgaW5zaWRlIGFuIGFzeW5jIGZ1bmN0aW9uIGlzIGltcG9zc2libGUgKGZvciBleGFtcGxlLCBpblxuICogYSBET00gZWxlbWVudCdzIGV2ZW50IGhhbmRsZXIpLCBpdCBjYW4gc3RpbGwgYmUgdXNlZCBpbnNpZGUgYXN5bmMgZnVuY3Rpb25zXG4gKiBhdCB0aW1lcyB3aGVuIGl0J3MgaW1wb3J0YW50IHRvIG1ha2Ugc3VyZSB0aGF0IHRoZSBmdW5jdGlvbiBkb2Vzbid0IGJsb2NrXG4gKiBmcm9tIHRoZSBzZW5kLlxuICpcbiAqIFRoZSBjYWxsYmFjayBpcyBhIGZ1bmN0aW9uIG9mIG9uZSBwYXJhbWV0ZXIuIFRoZSBwYXJhbWV0ZXIgdGhhdCdzIHN1cHBsaWVkIHRvXG4gKiB0aGUgY2FsbGJhY2sgaXMgdGhlIHNhbWUgYXMgd2hhdCBpcyBzdXBwbGllZCB0byBgYXdhaXQgc2VuZGA6IGB0cnVlYCBpZiB0aGVcbiAqIHZhbHVlIHdhcyB0YWtlbiwgb3IgYGZhbHNlYCBpZiB0aGUgY2hhbm5lbCB3YXMgY2xvc2VkLiBJZiB0aGUgY2FsbGJhY2sgaXNuJ3RcbiAqIHByZXNlbnQsIG5vdGhpbmcgd2lsbCBoYXBwZW4gYWZ0ZXIgdGhlIHZhbHVlIGlzIHRha2VuLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcGFyYW0geyp9IFt2YWx1ZV0gVGhlIHZhbHVlIGJlaW5nIHB1dCBvbnRvIHRoZSBjaGFubmVsLlxuICogQHBhcmFtIHttb2R1bGU6Y3NwLk9wQ2FsbGJhY2t9IFtjYWxsYmFja10gQSBmdW5jdGlvbiB0aGF0IGdldHMgaW52b2tlZCBlaXRoZXJcbiAqICAgICB3aGVuIHRoZSB2YWx1ZSBpcyB0YWtlbiBieSBhbm90aGVyIHByb2Nlc3Mgb3Igd2hlbiB0aGUgY2hhbm5lbCBpcyBjbG9zZWQuXG4gKiAgICAgVGhpcyBmdW5jdGlvbiBjYW4gdGFrZSBvbmUgcGFyYW1ldGVyLCB3aGljaCBpcyBgdHJ1ZWAgaW4gdGhlIGZvcm1lciBjYXNlXG4gKiAgICAgYW5kIGBmYWxzZWAgaW4gdGhlIGxhdHRlci5cbiAqL1xuZnVuY3Rpb24gc2VuZEFzeW5jKGNoYW5uZWwsIHZhbHVlLCBjYWxsYmFjayA9ICgpID0+IHt9KSB7XG4gIGNvbnN0IHJlc3VsdCA9IGhhbmRsZVNlbmQoY2hhbm5lbCwgdmFsdWUsIG9wSGFuZGxlcihjYWxsYmFjaykpO1xuICBpZiAocmVzdWx0ICYmIGNhbGxiYWNrKSB7XG4gICAgY2FsbGJhY2socmVzdWx0LnZhbHVlKTtcbiAgfVxufVxuXG4vKipcbiAqIFJlY2VpdmVzIGEgdmFsdWUgZnJvbSB0aGlzIGNoYW5uZWwgd2l0aG91dCBibG9ja2luZy5cbiAqXG4gKiBUaGlzIG1lYW5zIHRoYXQgYSBjYWxsIHRvIGByZWNlaXZlQXN5bmNgIGRvZXMgbm90IGdvIGludG8gYW4gYGF3YWl0YFxuICogZXhwcmVzc2lvbiwgYW5kIGl0IGlzIG5vdCBuZWNlc3NhcnkgdG8gdXNlIGl0IGluc2lkZSBhIGFzeW5jIGZ1bmN0aW9uLiBSYXRoZXJcbiAqIHRoYW4gYmxvY2tpbmcgdW50aWwgYSB2YWx1ZSBiZWNvbWVzIGF2YWlsYWJsZSBvbiB0aGUgY2hhbm5lbCB0byBiZSByZWNlaXZlZCxcbiAqIHRoaXMgb25lIHJldHVybnMgaW1tZWRpYXRlbHkgYW5kIHRoZW4gaW52b2tlcyB0aGUgY2FsbGJhY2sgKGlmIHByb3ZpZGVkKSB3aGVuXG4gKiBhIHZhbHVlIGJlY29tZXMgYXZhaWxhYmxlLiBJdCBjYW4gYmUgcmVnYXJkZWQgYXMgYSBub24tYmxvY2tpbmcgdmVyc2lvbiBvZlxuICoge0BsaW5rIG1vZHVsZTpjc3AucmVjdnxyZWN2fWAuXG4gKlxuICogV2hpbGUgdGhlIHByaW1hcnkgdXNlIG9mIHRoaXMgZnVuY3Rpb24gaXMgdG8gcmVjZWl2ZSB2YWx1ZXMgZnJvbSBjaGFubmVscyBpblxuICogY29udGV4dHMgd2hlcmUgYmVpbmcgaW5zaWRlIGFuIGFzeW5jIGZ1bmN0aW9uIGlzIGltcG9zc2libGUsIGl0IGNhbiBzdGlsbCBiZVxuICogdXNlZCBpbnNpZGUgYXN5bmMgZnVuY3Rpb25zIGF0IHRpbWVzIHdoZW4gaXQncyBpbXBvcnRhbnQgdGhhdCB0aGUgcmVjZWl2ZVxuICogZG9lc24ndCBibG9jayB0aGUgZnVuY3Rpb24uXG4gKlxuICogVGhlIGNhbGxiYWNrIGlzIGEgZnVuY3Rpb24gb2Ygb25lIHBhcmFtZXRlciwgYW5kIHRoZSB2YWx1ZSBzdXBwbGllZCBmb3IgdGhhdFxuICogcGFyYW1ldGVyIGlzIHRoZSB2YWx1ZSByZWNlaXZlZCBmcm9tIHRoZSBjaGFubmVsIChlaXRoZXIgYSB2YWx1ZSB0aGF0IHdhc1xuICogc2VudCBvciBge0BsaW5rIG1vZHVsZTpjc3AuQ0xPU0VEfENMT1NFRH1gKS4gSWYgdGhlIGNhbGxiYWNrIGlzbid0IHByZXNlbnQsXG4gKiBub3RoaW5nIHdpbGwgaGFwcGVuIGFmdGVyIHRoZSB2YWx1ZSBpcyB0YWtlbi5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICogQHBhcmFtIHttb2R1bGU6Y3NwLk9wQ2FsbGJhY2t9IFtjYWxsYmFja10gQSBmdW5jdGlvbiB0aGF0IGdldHMgaW52b2tlZCB3aGVuIGFcbiAqICAgICB2YWx1ZSBpcyBtYWRlIGF2YWlsYWJsZSB0byBiZSByZWNlaXZlZCAodGhpcyB2YWx1ZSBtYXkgYmVcbiAqICAgICBge0BsaW5rIG1vZHVsZTpjc3AuQ0xPU0VEfENMT1NFRH1gIGlmIHRoZSBjaGFubmVsIGNsb3NlcyB3aXRoIG5vXG4gKiAgICAgYXZhaWxhYmxlIHZhbHVlKS4gVGhlIGZ1bmN0aW9uIGNhbiB0YWtlIG9uZSBwYXJhbWV0ZXIsIHdoaWNoIGlzIHRoZSB2YWx1ZVxuICogICAgIHRoYXQgaXMgcmVjZWl2ZWQgZnJvbSB0aGUgY2hhbm5lbC5cbiAqL1xuZnVuY3Rpb24gcmVjdkFzeW5jKGNoYW5uZWwsIGNhbGxiYWNrID0gKCkgPT4ge30pIHtcbiAgY29uc3QgcmVzdWx0ID0gaGFuZGxlUmVjdihjaGFubmVsLCBvcEhhbmRsZXIoY2FsbGJhY2spKTtcbiAgaWYgKHJlc3VsdCAmJiBjYWxsYmFjaykge1xuICAgIGNhbGxiYWNrKHJlc3VsdC52YWx1ZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBTZW5kcyBhIHZhbHVlIHRvIGEgY2hhbm5lbCwgYmxvY2tpbmcgdGhlIGFzeW5jIGZ1bmN0aW9uIHVudGlsIHRoYXQgdmFsdWUgaXNcbiAqIHJlY2VpdmVkIGZyb20gdGhlIGNoYW5uZWwgYnkgYSBkaWZmZXJlbnQgZnVuY3Rpb24gKG9yIHVudGlsIHRoZSBjaGFubmVsXG4gKiBjbG9zZXMpLlxuICpcbiAqIEEgdmFsdWUgaXMgYWx3YXlzIHNlbnQgdG8gdGhlIGNoYW5uZWwsIGJ1dCBpZiB0aGF0IHZhbHVlIGlzbid0IHNwZWNpZmllZCBieVxuICogdGhlIHNlY29uZCBwYXJhbWV0ZXIsIGl0IGlzIGB1bmRlZmluZWRgLiBBbnkgdmFsdWUgbWF5IGJlIHNlbnQgdG8gYSBjaGFubmVsLFxuICogd2l0aCB0aGUgc29sZSBleGNlcHRpb24gb2YgdGhlIHNwZWNpYWwgdmFsdWVcbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC5DTE9TRUR8Q0xPU0VEfWAuXG4gKlxuICogVGhpcyBmdW5jdGlvbiAqbXVzdCogYmUgY2FsbGVkIGZyb20gd2l0aGluIGFuIGFzeW5jIGZ1bmN0aW9uIGFuZCBhcyBwYXJ0IG9mXG4gKiBhbiBgYXdhaXRgIGV4cHJlc3Npb24uXG4gKlxuICogV2hlbiBgc2VuZGAgaXMgY29tcGxldGVkIGFuZCBpdHMgZnVuY3Rpb24gdW5ibG9ja3MsIGl0cyBgYXdhaXRgIGV4cHJlc3Npb25cbiAqIGV2YWx1YXRlcyB0byBhIHN0YXR1cyBib29sZWFuIHRoYXQgaW5kaWNhdGVzIHdoYXQgY2F1c2VkIHRoZSBmdW5jdGlvbiB0b1xuICogdW5ibG9jay4gVGhhdCB2YWx1ZSBpcyBgdHJ1ZWAgaWYgdGhlIHNlbnQgdmFsdWUgd2FzIHN1Y2Nlc3NmdWxseSB0YWtlbiBieVxuICogYW5vdGhlciBwcm9jZXNzLCBvciBgZmFsc2VgIGlmIHRoZSB1bmJsb2NraW5nIGhhcHBlbmVkIGJlY2F1c2UgdGhlIHRhcmdldFxuICogY2hhbm5lbCBjbG9zZWQuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqIEBwYXJhbSB7Kn0gW3ZhbHVlXSBUaGUgdmFsdWUgYmVpbmcgcHV0IG9udG8gdGhlIGNoYW5uZWwuXG4gKiBAcmV0dXJuIHtQcm9taXNlPGJvb2xlYW4+fSBBIHByb21pc2UgdGhhdCB3aWxsIHJlc29sdmUgdG8gYHRydWVgIG9yIGBmYWxzZWBcbiAqICAgICBkZXBlbmRpbmcgb24gd2hldGhlciB0aGUgcHV0IHZhbHVlIGlzIGFjdHVhbGx5IHRha2VuLlxuICovXG5mdW5jdGlvbiBzZW5kKGNoYW5uZWwsIHZhbHVlKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICBzZW5kQXN5bmMoY2hhbm5lbCwgdmFsdWUsIHJlc29sdmUpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBSZWNlaXZlcyBhIHZhbHVlIGZyb20gdGhpcyBjaGFubmVsLCBibG9ja2luZyB0aGUgYXN5bmMgZnVuY3Rpb24gdW50aWwgYSB2YWx1ZVxuICogYmVjb21lcyBhdmFpbGFibGUgdG8gYmUgcmVjZWl2ZWQgKG9yIHVudGlsIHRoZSBjaGFubmVsIGNsb3NlcyB3aXRoIG5vIG1vcmVcbiAqIHZhbHVlcyBvbiBpdCB0byBiZSByZWNlaXZlZCkuXG4gKlxuICogVGhpcyBmdW5jdGlvbiAqbXVzdCogYmUgY2FsbGVkIGZyb20gd2l0aGluIGFuIGFzeW5jIGZ1bmN0aW9uIGFuZCBhcyBwYXJ0IG9mXG4gKiBhbiBgYXdhaXRgIGV4cHJlc3Npb24uXG4gKlxuICogV2hlbiBgcmVjZWl2ZWAgaXMgY29tcGxldGVkIGFuZCBpdHMgZnVuY3Rpb24gdW5ibG9ja3MsIGl0cyBgYXdhaXRgIGV4cHJlc3Npb25cbiAqIGV2YWx1YXRlcyB0byB0aGUgYWN0dWFsIHZhbHVlIHRoYXQgd2FzIHJlY2VpdmVkLiBJZiB0aGUgdGFyZ2V0IGNoYW5uZWxcbiAqIGNsb3NlZCwgdGhlbiBhbGwgb2YgdGhlIHZhbHVlcyBhbHJlYWR5IHBsYWNlZCBvbnRvIGl0IGFyZSByZXNvbHZlZCBieVxuICogYHJlY2VpdmVgIGFzIG5vcm1hbCwgYW5kIG9uY2Ugbm8gbW9yZSB2YWx1ZXMgYXJlIGF2YWlsYWJsZSwgdGhlIHNwZWNpYWwgdmFsdWVcbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC5DTE9TRUR8Q0xPU0VEfWAgaXMgcmV0dXJuZWQuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqIEByZXR1cm4ge1Byb21pc2V9IEEgcHJvbWlzZSB0aGF0IHdpbGwgcmVzb2x2ZSB0byB0aGUgdmFsdWUgcmVjZWl2ZWQgZnJvbSB0aGVcbiAqICAgICBjaGFubmVsIG9uY2UgdGhhdCByZWNlaXZlIGlzIGNvbXBsZXRlZC4gSWYgdGhlIGNoYW5uZWwgY2xvc2VzIHdpdGhvdXQgYVxuICogICAgIHZhbHVlIGJlaW5nIG1hZGUgYXZhaWxhYmxlLCB0aGlzIHdpbGwgcmVzb2x2ZSB0b1xuICogICAgIGB7QGxpbmsgbW9kdWxlOmNzcC5DTE9TRUR8Q0xPU0VEfWAuXG4gKi9cbmZ1bmN0aW9uIHJlY3YoY2hhbm5lbCkge1xuICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgcmVjdkFzeW5jKGNoYW5uZWwsIHJlc29sdmUpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBSZWNlaXZlcyBhIHZhbHVlIGZyb20gYSBjaGFubmVsLCBibG9ja2luZyB0aGUgYXN5bmMgZnVuY3Rpb24gdW50aWwgYSB2YWx1ZVxuICogYmVjb21lcyBhdmFpbGFibGUgdG8gYmUgcmVjZWl2ZWQgKG9yIHVudGlsIHRoZSBjaGFubmVsIGNsb3NlcyB3aXRoIG5vIG1vcmVcbiAqIHZhbHVlcyBvbiBpdCB0byBiZSByZWNlaXZlZCkuIElmIHRoZSByZWNlaXZlZCB2YWx1ZSBpcyBhbiBlcnJvciBvYmplY3QsIHRoYXRcbiAqIGVycm9yIGlzIHRocm93biBhdCB0aGF0IHBvaW50LlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gKm11c3QqIGJlIGNhbGxlZCBmcm9tIHdpdGhpbiBhbiBhc3luYyBmdW5jdGlvbiBhbmQgYXMgcGFydCBvZlxuICogYW4gYGF3YWl0YCBleHByZXNzaW9uLlxuICpcbiAqIEl0IGZ1bmN0aW9ucyBpbiBldmVyeSB3YXkgbGlrZSBge0BsaW5rIG1vZHVsZTpjc3AucmVjdnxyZWN2fWAgKmV4Y2VwdCogaW4gdGhlXG4gKiBjYXNlIHRoYXQgdGhlIHZhbHVlIG9uIHRoZSBjaGFubmVsIGlzIGFuIG9iamVjdCB0aGF0IGhhcyBgRXJyb3IucHJvdG90eXBlYCBpblxuICogaXRzIHByb3RvdHlwZSBjaGFpbiAoYW55IGJ1aWx0LWluIGVycm9yLCBhbnkgcHJvcGVybHktY29uc3RydWN0ZWQgY3VzdG9tXG4gKiBlcnJvcikuIElmIHRoYXQgaGFwcGVucywgdGhlIGVycm9yIGlzIHRocm93biwgd2hpY2ggd2lsbCBjYXVzZSB0aGUgcmV0dXJuZWRcbiAqIHByb21pc2UgdG8gYmUgcmVqZWN0ZWQgd2l0aCB0aGUgZXJyb3IuIEl0IGNhbiB0aGVuIGJlIGhhbmRsZWQgdXAgdGhlIHByb21pc2VcbiAqIGNoYWluIGxpa2UgYW55IG90aGVyIHJlamVjdGVkIHByb21pc2UuXG4gKlxuICogYHRha2VPclRocm93YCBpcyByb3VnaGx5IGVxdWl2YWxlbnQgdG86XG4gKlxuICogYGBgXG4gKiBjb25zdCB2YWx1ZSA9IGF3YWl0IHJlY3YoY2gpO1xuICogaWYgKEVycm9yLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKHZhbHVlKSkge1xuICogICB0aHJvdyB2YWx1ZTtcbiAqIH1cbiAqIGBgYFxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcmV0dXJuIHtQcm9taXNlfSBBIHByb21pc2UgdGhhdCB3aWxsIHJlc29sdmUgdG8gdGhlIHZhbHVlIHRha2VuIGZyb20gdGhlXG4gKiAgICAgY2hhbm5lbCBvbmNlIHRoYXQgdGFrZSBpcyBjb21wbGV0ZWQuIElmIHRoZSBjaGFubmVsIGNsb3NlcyB3aXRob3V0IGFcbiAqICAgICB2YWx1ZSBiZWluZyBtYWRlIGF2YWlsYWJsZSwgdGhpcyB3aWxsIHJlc29sdmUgdG9cbiAqICAgICBge0BsaW5rIG1vZHVsZTpjc3AuQ0xPU0VEfENMT1NFRH1gLiBJZiB0aGUgdGFrZW4gdmFsdWUgaXMgYW4gZXJyb3IsIHRoZVxuICogICAgIHByb21pc2Ugd2lsbCBpbnN0ZWFkIGJlIHJlamVjdGVkIHdpdGggdGhlIGVycm9yIG9iamVjdCBhcyB0aGUgcmVhc29uLlxuICovXG5mdW5jdGlvbiByZWN2T3JUaHJvdyhjaGFubmVsKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgcmVjdkFzeW5jKGNoYW5uZWwsIHJlc3VsdCA9PiB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mLmNhbGwoRXJyb3IucHJvdG90eXBlLCByZXN1bHQpKSB7XG4gICAgICAgIHJlamVjdChyZXN1bHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxuLyoqXG4gKiBDbG9zZXMgdGhlIGNoYW5uZWwsIGlmIGl0IGlzbid0IGFscmVhZHkgY2xvc2VkLiBUaGlzIGltbWVkaWF0ZWx5IHJldHVybnMgYW55XG4gKiBidWZmZXJlZCB2YWx1ZXMgdG8gcGVuZGluZyByZWNlaXZlcy4gSWYgdGhlcmUgYXJlIG5vIGJ1ZmZlcmVkIHZhbHVlcyAob3IgaWZcbiAqIHRoZXkndmUgYWxyZWFkeSBiZWVuIHRha2VuIGJ5IG90aGVyIHJlY2VpdmVzKSwgdGhlbiBhbGwgb2YgdGhlIHJlc3Qgb2YgdGhlXG4gKiByZWNlaXZlcyBhcmUgY29tcGxldGVkIHdpdGggdGhlIHZhbHVlIG9mIGB7QGxpbmsgbW9kdWxlOmNzcC5DTE9TRUR8Q0xPU0VEfWAuXG4gKiBBbnkgcGVuZGluZyBzZW5kcyBhcmUgY29tcGxldGVkIHdpdGggdGhlIHZhbHVlIG9mIGBmYWxzZWAuXG4gKlxuICogTm90ZSB0aGF0IHRoZSBidWZmZXIgaXMgbm90IGVtcHRpZWQgaWYgdGhlcmUgYXJlIHN0aWxsIHZhbHVlcyByZW1haW5pbmcgYWZ0ZXJcbiAqIGFsbCBvZiB0aGUgcGVuZGluZyByZWNlaXZlcyBoYXZlIGJlZW4gaGFuZGxlZC4gVGhlIGNoYW5uZWwgd2lsbCBzdGlsbCBwcm92aWRlXG4gKiB0aG9zZSB2YWx1ZXMgdG8gYW55IGZ1dHVyZSByZWNlaXZlcywgdGhvdWdoIG5vIG5ldyB2YWx1ZXMgbWF5IGJlIGFkZGVkIHRvIHRoZVxuICogY2hhbm5lbC4gT25jZSB0aGUgYnVmZmVyIGlzIGRlcGxldGVkLCBhbnkgZnV0dXJlIHJlY2VpdmVzIHdpbGwgcmV0dXJuXG4gKiBge0BsaW5rIG1vZHVsZTpjc3AuQ0xPU0VEfENMT1NFRH1gLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuQ2hhbm5lbH0gY2hhbm5lbCBUaGUgY2hhbm5lbCB0byBiZSBjbG9zZWQuXG4gKi9cbmZ1bmN0aW9uIGNsb3NlKGNoYW5uZWwpIHtcbiAgY2xvc2VJbXBsKGNoYW5uZWwpO1xufVxuXG5leHBvcnQge1xuICBDTE9TRUQsXG4gIERFRkFVTFQsXG4gIGNoYW4sXG4gIHRpbWVkQ2hhbixcbiAgdHJhbnNDaGFuLFxuICBpc0Nsb3NlZCxcbiAgaXNCdWZmZXJlZCxcbiAgaXNUaW1lZCxcbiAgc2VuZEFzeW5jLFxuICByZWN2QXN5bmMsXG4gIHNlbGVjdEFzeW5jLFxuICBzZW5kLFxuICByZWN2LFxuICByZWN2T3JUaHJvdyxcbiAgc2VsZWN0LFxuICBjbG9zZSxcbiAgdmFsdWUsXG4gIGNoYW5uZWxcbn07XG5cbi8qKlxuICogVXNlZCBieSBjaGFubmVscyB0byB0cmFjayBleGVjdXRpb24gb2Ygb3BlcmF0aW9ucyAoYHNlbmRgLCBgcmVjdmAsIGFuZFxuICogYHNlbGVjdGApLiBUaGV5IHByb3ZpZGUgdHdvIHBpZWNlcyBvZiBpbmZvcm1hdGlvbjogdGhlIGZ1bmN0aW9uIHRvIGNhbGwgd2hlblxuICogYSBgc2VuZGAgb3IgYHJlY3ZgIHVuYmxvY2tzIChiZWNhdXNlIGEgdmFsdWUgZ2l2ZW4gdG8gc2VuZCBoYXMgYmVlbiByZWNlaXZlZCxcbiAqIG9yIGEgYHJlY3ZgIGhhcyBhY2NlcHRlZCBhIHZhbHVlIHRoYXQgaGFzIGJlZW4gc2VudCkgYW5kIHdoZXRoZXIgb3Igbm90IHRoZVxuICogaGFuZGxlciBpcyBzdGlsbCBhY3RpdmUuXG4gKlxuICogVGhlIGZ1bmN0aW9uIGlzIGEgY2FsbGJhY2sgdGhhdCBhY3R1YWxseSBkZWZpbmVzIHRoZSBkaWZmZXJlbmNlIGJldHdlZW5cbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC5zZW5kfHNlbmR9YCAvIGB7QGxpbmsgbW9kdWxlOmNzcC5yZWN2fHJlY3Z9YCAvXG4gKiBge0BsaW5rIG1vZHVsZTpjc3Auc2VsZWN0fHNlbGVjdH1gIGFuZFxuICogYHtAbGluayBtb2R1bGU6Y3NwLnNlbmRBc3luY3xzZW5kQXN5bmN9YCAvXG4gKiBge0BsaW5rIG1vZHVsZTpjc3AucmVjdkFzeW5jfHJlY3ZBc3luY31gIC9cbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC5zZWxlY3RBc3luY3xzZWxlY3RBc3luY31gOiB3aGlsZSB0aGUgdW5ibG9ja2VkIGNhbGxzIHVzZVxuICogdGhlIGNhbGxiYWNrIHBhc3NlZCB0byB0aGUgZnVuY3Rpb24sIGBzZW5kYCwgYHJlY3ZgLCBhbmQgYHNlbGVjdGAgc2ltcGx5XG4gKiBjb250aW51ZSB0aGUgcHJvY2VzcyB3aGVyZSBpdCBsZWZ0IG9mZi4gKFRoaXMgaXMgd2h5IGBzZW5kYCwgYHJlY3ZgLCBhbmRcbiAqIGBzZWxlY3RgIG9ubHkgd29yayBpbnNpZGUgYGFzeW5jYCBmdW5jdGlvbnMgd2l0aCBgYXdhaXRgIGlmIHRoZSByZXR1cm4gdmFsdWVcbiAqIGlzIG5lZWRlZCwgYmVjYXVzZSBvdGhlcndpc2UgdGhlcmUncyBubyBwcm9jZXNzIHRvIGNvbnRpbnVlLilcbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIHByb3ZpZGVkIGFzIHRoZSByZXR1cm4gdmFsdWUgb2YgdGhlIGBjb21taXRgIG1ldGhvZC4gQ2FsbGluZ1xuICogYGNvbW1pdGAgaGFzIG5vIGV4dHJhIGVmZmVjdCB3aXRoIGBzZW5kYCBhbmQgYHJlY3ZgIG9wZXJhdGlvbnMsIGJ1dCBmb3JcbiAqIGBzZWxlY3RgLCBpdCBhbHNvIG1hcmtzIHRoZSBoYW5kbGVyIGFzIG5vIGxvbmdlciBiZWluZyBhY3RpdmUuIFRoaXMgbWVhbnNcbiAqIHRoYXQgb25seSBvbmUgb2YgdGhlIG9wZXJhdGlvbnMgcGFzc2VkIHRvIHNlbGVjdCBjYW4gYmUgY29tcGxldGVkLCBiZWNhdXNlXG4gKiBhZnRlciB0aGUgZmlyc3Qgb25lLCB0aGUgaGFuZGxlciBpcyBubyBsb25nZXIgYWN0aXZlIGFuZCB3aWxsIG5vdCBiZSBhbGxvd2VkXG4gKiB0byBwcm9jZXNzIGEgc2Vjb25kIG9wZXJhdGlvbi5cbiAqXG4gKiBJZiBhIGBzZW5kYCBvciBgcmVjdmAgKG9yIGVxdWl2YWxlbnQgYHNlbGVjdGAgb3BlcmF0aW9uKSBjYW5ub3QgYmVcbiAqIGltbWVkaWF0ZWx5IGNvbXBsZXRlZCBiZWNhdXNlIHRoZXJlIGlzbid0IGEgY29ycmVzcG9uZGluZyBwZW5kaW5nIGByZWN2YCBvclxuICogYHNlbmRgLCB0aGUgaGFuZGxlciBpcyBxdWV1ZWQgdG8gYmUgcnVuIHdoZW4gYSBuZXcgYHJlY3ZgIG9yIGBzZW5kYCBiZWNvbWVzXG4gKiBhdmFpbGFibGUuXG4gKlxuICogQHR5cGVkZWYgSGFuZGxlclxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3AvY2hhbm5lbFxuICogQHByb3BlcnR5IHtib29sZWFufSBhY3RpdmUgV2hldGhlciBvciBub3QgdGhlIG9wZXJhdGlvbiBpcyBzdGlsbCBhY3RpdmUuIEFuXG4gKiAgICAgaW5hY3RpdmUgb3BlcmF0aW9uIGlzIG5vdCBzZXJ2aWNlZCBhbmQgd2lsbCBiZSBjbGVhcmVkIGZyb20gdGhlIHF1ZXVlIG9uXG4gKiAgICAgdGhlIG5leHQgZGlydHkgb3BlcmF0aW9uIHB1cmdlLlxuICogQHByb3BlcnR5IHtmdW5jdGlvbn0gY29tbWl0IE1hcmtzIHRoZSBoYW5kbGVyIGFzIGluYWN0aXZlIChzbyBpdCBkb2Vzbid0IHJ1blxuICogICAgIHR3aWNlKSBhbmQgcmV0dXJucyB0aGUgY2FsbGJhY2sgdG8gYmUgcnVuIHdoZW4gdGhlIG9wZXJhdGlvbiBjb21wbGV0ZXMuXG4gKiBAcHJpdmF0ZVxuICovXG5cbi8qKlxuICogQSBjYWxsYmFjayBmdW5jdGlvbiBydW4gd2hlbiBhIGBzZW5kYCBvciBgcmVjdmAgb3BlcmF0aW9uIGNvbXBsZXRlcy5cbiAqXG4gKiBAY2FsbGJhY2sgSGFuZGxlckNhbGxiYWNrXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcC9jaGFubmVsXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSBwcm92aWRlZCBieSB0aGUgY2hhbm5lbC4gSW4gYSBgcmVjdmAsIHRoaXMgaXMgdGhlXG4gKiAgICAgdmFsdWUgcmVjZWl2ZWQgZnJvbSB0aGUgY2hhbm5lbC4gSW4gYSBgc2VuZGAsIHRoaXMgaXMgYHRydWVgIGZvciBhXG4gKiAgICAgc3VjY2Vzc2Z1bCBzZW5kIGFuZCBgZmFsc2VgIGlmIHRoZSBjaGFubmVsIGlzIGNsb3NlZCBiZWZvcmUgdGhlIHNlbmQgY2FuXG4gKiAgICAgY29tcGxldGUuXG4gKiBAcHJpdmF0ZVxuICovXG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuaW1wb3J0IHsgYm94LCBoYW5kbGVTZW5kLCBoYW5kbGVSZWN2LCBpc0JveCB9IGZyb20gXCIuL2hhbmRsZXJcIjtcblxuLyoqXG4gKiBUaGUgbmFtZSBvZiB0aGUgY2hhbm5lbCByZXR1cm5lZCBmcm9tIGBhd2FpdFxuICoge0BsaW5rIG1vZHVsZTpjc3Auc2VsZWN0fHNlbGVjdH1gIG9yIHNlbnQgdG8gdGhlIGNhbGxiYWNrIGluXG4gKiBge0BsaW5rIG1vZHVsZTpjc3Auc2VsZWN0QXN5bmN8c2VsZWN0QXN5bmN9YCB3aGVuIHRoZSBkZWZhdWx0IGlzIHJldHVybmVkIGFzXG4gKiBpdHMgdmFsdWUuXG4gKlxuICogVGhpcyBvbmx5IGhhcHBlbnMgd2hlbiBhbiBge0BsaW5rIG1vZHVsZTpjc3Auc2VsZWN0fHNlbGVjdH0gL1xuICoge0BsaW5rIG1vZHVsZTpjc3Auc2VsZWN0QXN5bmN8c2VsZWN0QXN5bmN9YCBjYWxsIGlzIHBlcmZvcm1lZCwgYWxsIG9wZXJhdGlvbnNcbiAqIGFyZSBpbml0aWFsbHkgYmxvY2tpbmcsIGFuZCBhIGBkZWZhdWx0YCBvcHRpb24gaXMgc2VudC4gVGhlIGltbWVkaWF0ZVxuICogcmVzcG9uc2UgaW4gdGhhdCBzaXR1YXRpb24gaXMgYHsgdmFsdWU6IG9wdGlvbnMuZGVmYXVsdCwgY2hhbm5lbDogREVGQVVMVCB9YC5cbiAqXG4gKiBAdHlwZSB7U3ltYm9sfVxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqL1xuY29uc3QgREVGQVVMVCA9IFN5bWJvbChcIkRFRkFVTFRcIik7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBoYW5kbGVyIHVzZWQgZm9yIGBzZWxlY3RgIG9wZXJhdGlvbnMuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3AvY2hhbm5lbFxuICogQHBhcmFtIHttb2R1bGU6Y3NwL2NoYW5uZWwuQm94fSBhY3RpdmUgQSBib3hlZCB2YWx1ZSBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlXG4gKiAgICAgaGFuZGxlciBpcyB2YWxpZC4gVGhpcyBpcyBhIGJveGVkIHZhbHVlIGJlY2F1c2UgdGhlIHNlbGVjdC1oYW5kbGluZyBjb2RlXG4gKiAgICAgbmVlZHMgdG8gbWFuaXB1bGF0ZSBpdCBkaXJlY3RseS5cbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC9jaGFubmVsLkhhbmRsZXJDYWxsYmFja30gZm4gVGhlIGNhbGxiYWNrIHRvIGJlIHJ1biB3aGVuXG4gKiAgICAgKGFuZCBpZikgdGhlIG9wZXJhdGlvbiBjb21wbGV0ZXMuXG4gKiBAcmV0dXJuIHttb2R1bGU6Y3NwL2NoYW5uZWwuSGFuZGxlcn0gVGhlIG5ldyBoYW5kbGVyLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gc2VsZWN0SGFuZGxlcihhY3RpdmUsIGZuKSB7XG4gIHJldHVybiBPYmplY3QuY3JlYXRlKG51bGwsIHtcbiAgICBhY3RpdmU6IHtcbiAgICAgIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIGFjdGl2ZS52YWx1ZTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgY29tbWl0OiB7XG4gICAgICB2YWx1ZTogKCkgPT4ge1xuICAgICAgICBhY3RpdmUudmFsdWUgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIGZuO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHJhbmRvbWx5IHNodWZmbGVkIGFycmF5IGNvbnRhaW5pbmcgb25lIG9mIGVhY2ggaW50ZWdlciB2YWx1ZSBmcm9tXG4gKiBgMGAgdG8gYW4gdXBwZXIgbGltaXQuIEl0IGlzIHVzZWQgdG8gcmFuZG9tbHkgc2VsZWN0IGEgY2hhbm5lbCB0byBiZSBhY3RpdmVcbiAqIHdoZW4gbXVsdGlwbGVzIHVuYmxvY2sgaW4gYSBgc2VsZWN0YCBvcGVyYXRpb24uXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3AvY2hhbm5lbFxuICogQHBhcmFtIHtudW1iZXJ9IHVwcGVyIFRoZSB1cHBlciBsaW1pdCBvZiB0aGUgYXJyYXkgdmFsdWVzLCBleGNsdXNpdmUuXG4gKiBAcmV0dXJuIHtudW1iZXJbXX0gQW4gYXJyYXkgb2YgaW50ZWdlcnMgZnJvbSBgMGAgdG8gYHVwcGVyIC0gMWAsIHNodWZmbGVkXG4gKiAgICAgaW50byBhIHJhbmRvbSBvcmRlci5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHJhbmRvbUFycmF5KHVwcGVyKSB7XG4gIGNvbnN0IGFycmF5ID0gW107XG4gIGZvciAobGV0IGsgPSAwOyBrIDwgdXBwZXI7IGsrKykge1xuICAgIGFycmF5LnB1c2goayk7XG4gIH1cbiAgZm9yIChsZXQgaiA9IHVwcGVyIC0gMTsgaiA+IDA7IGotLSkge1xuICAgIGNvbnN0IGkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoaiArIDEpKTtcbiAgICBjb25zdCB0ZW1wID0gYXJyYXlbal07XG4gICAgYXJyYXlbal0gPSBhcnJheVtpXTtcbiAgICBhcnJheVtpXSA9IHRlbXA7XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG4vKipcbiAqIEEgcmVzdWx0IHRoYXQgY29tZXMgZnJvbSBgc2VsZWN0YCBvcGVyYXRpb25zLlxuICpcbiAqIEB0eXBlZGVmIFNlbGVjdFJlc3VsdFxuICogQHByb3BlcnR5IHsqfSB2YWx1ZSBJZiB0aGUgYHNlbGVjdGAgb3BlcmF0aW9uIHJlc3VsdGVkIGluIGEgcmVjZWl2ZSwgdGhpcyBpc1xuICogICAgIHRoZSB2YWx1ZSByZWNlaXZlZCBmcm9tIHRoZSBjaGFubmVsLiBJZiBpdCByZXN1bHRlZCBpbiBhIHNlbmQsIHRoaXMgaXNcbiAqICAgICBgdHJ1ZWAgZm9yIGEgc3VjY2Vzc2Z1bCBzZW5kIGFuZCBgZmFsc2VgIGlmIHRoZSBjaGFubmVsIGNsb3NlZCBmaXJzdC5cbiAqIEBwcm9wZXJ0eSB7bW9kdWxlOmNzcC5DaGFubmVsfSBjaGFubmVsIFRoZSBjaGFubmVsIHVwb24gd2hpY2ggdGhlIHNlbGVjdGVkXG4gKiAgICAgb3BlcmF0aW9uIGhhcHBlbmVkLlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgYSBzZWxlY3QgcmVzdWx0IGZyb20gaXRzIGNvbXBvbmVudCBwcm9wZXJ0aWVzLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwL2NoYW5uZWxcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgSWYgdGhlIGBzZWxlY3RgIG9wZXJhdGlvbiByZXN1bHRlZCBpbiBhIHJlY2VpdmUsIHRoaXMgaXMgdGhlXG4gKiAgICAgdmFsdWUgcmVjZWl2ZWQgZnJvbSB0aGUgY2hhbm5lbC4gSWYgaXQgcmVzdWx0ZWQgaW4gYSBzZW5kLCB0aGlzIGlzIGB0cnVlYFxuICogICAgIGZvciBhIHN1Y2Nlc3NmdWwgc2VuZCBhbmQgYGZhbHNlYCBpZiB0aGUgY2hhbm5lbCBjbG9zZWQgZmlyc3QuXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuQ2hhbm5lbH0gY2hhbm5lbCBUaGUgY2hhbm5lbCB1cG9uIHdoaWNoIHRoZSBzZWxlY3RlZFxuICogICAgIG9wZXJhdGlvbiBoYXBwZW5lZC5cbiAqIEByZXR1cm4ge21vZHVsZTpjc3AuU2VsZWN0UmVzdWx0fSBUaGUgcHJvcGVydGllcyB3cmFwcGVkIGludG8gYW4gb2JqZWN0IGZvclxuICogICAgIG91dHB1dC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHNlbGVjdFJlc3VsdCh2YWx1ZSwgY2hhbm5lbCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuY3JlYXRlKG51bGwpLCB7IHZhbHVlLCBjaGFubmVsIH0pO1xufVxuXG4vKipcbiAqIENvbXBsZXRlcyB0aGUgZmlyc3Qgb3BlcmF0aW9uIGFtb25nIHRoZSBwcm92aWRlZCBvcGVyYXRpb25zIHRoYXQgY29tZXNcbiAqIGF2YWlsYWJsZSwgd2l0aG91dCBibG9ja2luZy5cbiAqXG4gKiBUaGlzIG1lYW5zIHRoYXQgYSBjYWxsIHRvIGBzZWxlY3RBc3luY2AgZG9lcyBub3QgZ28gaW50byBhbiBgYXdhaXRgXG4gKiBleHByZXNzaW9uLCBhbmQgaXQgaXMgbm90IG5lY2Vzc2FyeSB0byB1c2UgaXQgaW5zaWRlIGEgcHJvY2Vzcy4gUmF0aGVyIHRoYW5cbiAqIGJsb2NraW5nIHVudGlsIGFuIG9wZXJhdGlvbiBjb21wbGV0ZXMsIHRoaXMgb25lIHJldHVybnMgaW1tZWRpYXRlbHkgYW5kIHRoZW5cbiAqIGludm9rZXMgdGhlIGNhbGxiYWNrIChpZiBwcm92aWRlZCkgYXMgc29vbiBhcyBvbmUgb2YgdGhlIHN1cHBsaWVkIG9wZXJhdGlvbnNcbiAqIGNvbXBsZXRlcy4gSXQgY2FuIGJlIHJlZ2FyZGVkIGFzIGEgbm9uLWJsb2NraW5nIHZlcnNpb24gb2ZcbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC5zZWxlY3R8c2VsZWN0fWAuXG4gKlxuICogVGhpcyBmdW5jdGlvbiB1c2VzIGFuIG9wZXJhdGlvbnMgbGlzdCB0aGF0J3MgaWRlbnRpY2FsIHRvIHRoZSBvbmUgdXNlZCBieVxuICogYHtAbGluayBtb2R1bGU6Y3NwLnNlbGVjdHxzZWxlY3R9YC4gSXQncyBhbiBhcnJheSBvZiB2YWx1ZXM7IGlmIGEgdmFsdWUgaXMgYVxuICogY2hhbm5lbCwgdGhlbiB0aGF0IG9wZXJhdGlvbiBpcyBhIHRha2Ugb24gdGhhdCBjaGFubmVsLCB3aGlsZSBpZiBpdCdzIGFcbiAqIHR3by1lbGVtZW50IGFycmF5IG9mIGNoYW5uZWwgYW5kIHZhbHVlLCB0aGVuIHRoYXQgb3BlcmF0aW9uIGlzIGEgcHV0IG9mIHRoYXRcbiAqIHZhbHVlIG9udG8gdGhhdCBjaGFubmVsLiBBbGwgb3B0aW9ucyB0aGF0IGFyZSBhdmFpbGFibGUgdG9cbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC5zZWxlY3R8c2VsZWN0fWAgYXJlIGFsc28gYXZhaWxhYmxlIGhlcmUuXG4gKlxuICogVGhlIGNhbGxiYWNrIGlzIGEgZnVuY3Rpb24gb2Ygb25lIHBhcmFtZXRlciwgd2hpY2ggaW4gdGhpcyBjYXNlIGlzIGFuIG9iamVjdFxuICogd2l0aCBgdmFsdWVgIGFuZCBgY2hhbm5lbGAgcHJvcGVydGllcy5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICogQHBhcmFtIHtPYmplY3RbXX0gb3BlcmF0aW9ucyBBIGNvbGxlY3Rpb24gb2YgZWxlbWVudHMgdGhhdCBjb3JyZXNwb25kIHRvIHJlY3ZcbiAqICAgICBhbmQgc2VuZCBvcGVyYXRpb25zLiBBIHJlY3Ygb3BlcmF0aW9uIGlzIHNpZ25pZmllZCBieSBhbiBlbGVtZW50IHRoYXQgaXNcbiAqICAgICBhIGNoYW5uZWwgKHdoaWNoIGlzIHRoZSBjaGFubmVsIHRvIGJlIHJlY2VpdmVkIGZyb20pLiBBIHNlbmQgb3BlcmF0aW9uIGlzXG4gKiAgICAgc3BlY2lmaWVkIGJ5IGFuIGVsZW1lbnQgdGhhdCBpcyBpdHNlbGYgYSB0d28tZWxlbWVudCBhcnJheSwgd2hpY2ggaGFzIGFcbiAqICAgICBjaGFubmVsIGZvbGxvd2VkIGJ5IGEgdmFsdWUgKHdoaWNoIGlzIHRoZSBjaGFubmVsIGFuZCB2YWx1ZSB0byBiZSBzZW50KS5cbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5TZWxlY3RDYWxsYmFja30gY2FsbGJhY2sgQSBmdW5jdGlvbiB0aGF0IGdldHMgaW52b2tlZCB3aGVuXG4gKiAgICAgb25lIG9mIHRoZSBvcGVyYXRpb25zIGNvbXBsZXRlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gQW4gb3B0aW9uYWwgb2JqZWN0IHdoaWNoIGNhbiBjaGFuZ2UgdGhlIGJlaGF2aW9yXG4gKiAgICAgb2YgYHNlbGVjdEFzeW5jYCB0aHJvdWdoIHR3byBwcm9wZXJ0aWVzLlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5wcmlvcml0eT1mYWxzZV0gSWYgYHRydWVgLCB0aGVuIHRoZSBwcmlvcml0eSBvZlxuICogICAgIG9wZXJhdGlvbnMgdG8gY29tcGxldGUgd2hlbiBtb3JlIHRoYW4gb25lIGlzIGltbWVkaWF0ZWx5IGF2YWlsYWJsZSBpcyBhXG4gKiAgICAgcHJpb3JpdHkgYWNjb3JkaW5nIHRvIHBvc2l0aW9uIHdpdGhpbiB0aGUgb3BlcmF0aW9ucyBhcnJheSAoZWFybGllclxuICogICAgIHBvc2l0aW9ucyBoYXZlIHRoZSBoaWdoZXIgcHJpb3JpdHkpLiBJZiBgZmFsc2VgIG9yIG5vdCBwcmVzZW50LCB0aGVcbiAqICAgICBwcmlvcnR5IG9mIG9wZXJhdGlvbiBjb21wbGV0aW9uIGlzIHJhbmRvbS5cbiAqIEBwYXJhbSB7Kn0gW29wdGlvbnMuZGVmYXVsdF0gSWYgc2V0IGFuZCBhbGwgb2YgdGhlIG9wZXJhdGlvbnMgaW5pdGlhbGx5XG4gKiAgICAgYmxvY2ssIHRoZSBgc2VsZWN0QXN5bmNgIGNhbGxzIGl0cyBjYWxsYmFjayBpbW1lZGlhdGVseSB3aXRoIHRoZSB2YWx1ZSBvZlxuICogICAgIHRoaXMgb3B0aW9uICh0aGUgY2hhbm5lbCB3aWxsIGJlIGB7QGxpbmsgbW9kdWxlOmNzcC5ERUZBVUxUfERFRkFVTFR9KWAuXG4gKiAgICAgSWYgbm90IHNldCwgdGhlIGBzZWxlY3RBc3luY2AgY2FsbCB3aWxsIG5vdCBjYWxsIGl0cyBjYWxsYmFjayB1bnRpbCBvbmVcbiAqICAgICBvZiB0aGUgb3BlcmF0aW9ucyBjb21wbGV0ZXMgYW5kIHRoYXQgdmFsdWUgYW5kIGNoYW5uZWwgd2lsbCBiZSB0aGUgb25lc1xuICogICAgIHJldHVybmVkLlxuICovXG5mdW5jdGlvbiBzZWxlY3RBc3luYyhvcHMsIGNhbGxiYWNrID0gKCkgPT4ge30sIG9wdGlvbnMgPSB7fSkge1xuICBjb25zdCBjb3VudCA9IG9wcy5sZW5ndGg7XG4gIGlmIChjb3VudCA9PT0gMCkge1xuICAgIHRocm93IEVycm9yKFwic2VsZWN0IGNhbGxlZCB3aXRoIG5vIG9wZXJhdGlvbnNcIik7XG4gIH1cblxuICBjb25zdCBwcmlvcml0eSA9ICEhb3B0aW9ucy5wcmlvcml0eTtcbiAgY29uc3QgaW5kaWNlcyA9IHByaW9yaXR5ID8gW10gOiByYW5kb21BcnJheShjb3VudCk7XG5cbiAgY29uc3QgYWN0aXZlID0gYm94KHRydWUpO1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZVNlbGVjdEhhbmRsZXIoY2hhbm5lbCkge1xuICAgIHJldHVybiBzZWxlY3RIYW5kbGVyKGFjdGl2ZSwgdmFsdWUgPT4ge1xuICAgICAgY2FsbGJhY2soc2VsZWN0UmVzdWx0KHZhbHVlLCBjaGFubmVsKSk7XG4gICAgfSk7XG4gIH1cblxuICBsZXQgcmVzdWx0O1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgIC8vIENob29zZSBhbiBvcGVyYXRpb24uIElmIGBwcmlvcml0eWAgaXMgdHJ1ZSB0aGVuIGl0J3MgdGhlIG5leHQgaW5kZXgsXG4gICAgLy8gb3RoZXJ3aXNlIGl0J3MgcmFuZG9tXG4gICAgY29uc3Qgb3AgPSBvcHNbcHJpb3JpdHkgPyBpIDogaW5kaWNlc1tpXV07XG4gICAgbGV0IGNoYW5uZWwsIHZhbHVlO1xuXG4gICAgLy8gQXBwbHkgZXZlcnkgb3BlcmF0aW9uIHRvIGl0cyBjaGFubmVsLCBvbmUgYXQgYSB0aW1lXG4gICAgaWYgKEFycmF5LmlzQXJyYXkob3ApKSB7XG4gICAgICBbY2hhbm5lbCwgdmFsdWVdID0gb3A7XG4gICAgICByZXN1bHQgPSBoYW5kbGVTZW5kKGNoYW5uZWwsIHZhbHVlLCBjcmVhdGVTZWxlY3RIYW5kbGVyKGNoYW5uZWwpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2hhbm5lbCA9IG9wO1xuICAgICAgcmVzdWx0ID0gaGFuZGxlUmVjdihjaGFubmVsLCBjcmVhdGVTZWxlY3RIYW5kbGVyKGNoYW5uZWwpKTtcbiAgICB9XG5cbiAgICAvLyBXZSBjaGVjayBmb3IgYm94IGhlcmUgYmVjYXVzZSBhIGJveCBmcm9tIGEgY2hhbm5lbCBpbmRpY2F0ZXMgdGhhdCB0aGVcbiAgICAvLyB2YWx1ZSBpcyBpbW1lZGlhdGVseSBhdmFpbGFibGUgKHRoYXQgdGhlcmUgaXMgbm8gbmVlZCB0byBibG9jayB0byBnZXQgdGhlXG4gICAgLy8gdmFsdWUpLiBJZiB0aGlzIGhhcHBlbnMsIHdlIGV4ZWN1dGUgdGhlIGNhbGxiYWNrIGltbWVkaWF0ZWx5IHdpdGggdGhhdFxuICAgIC8vIHZhbHVlIGFuZCBjaGFubmVsIGFuZCBzdG9wIHF1ZXVlaW5nIG90aGVyIG9wZXJhdGlvbnMuXG4gICAgaWYgKGlzQm94KHJlc3VsdCkpIHtcbiAgICAgIGNhbGxiYWNrKHNlbGVjdFJlc3VsdChyZXN1bHQudmFsdWUsIGNoYW5uZWwpKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIC8vIElmIG5vbmUgb2YgdGhlIG9wZXJhZXRpb25zIGltbWVkaWF0ZWx5IHJldHVybmVkIHZhbHVlcyAodGhleSBhcmUgYWxsXG4gIC8vIGJsb2NrZWQpLCBhbmQgd2UgaGF2ZSBzZXQgYSBkZWZhdWx0IGNoYW5uZWwgb3B0aW9uLCB0aGVuIHJldHVybiB0aGUgdmFsdWVcbiAgLy8gaWYgdGhlIGRlZmF1bHQgY2hhbm5lbCByYXRoZXIgdGhhbiB3YWl0aW5nIGZvciB0aGUgcXVldWVkIG9wZXJhdGlvbnMgdG9cbiAgLy8gY29tcGxldGUuXG4gIGlmIChcbiAgICAhaXNCb3gocmVzdWx0KSAmJlxuICAgIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvcHRpb25zLCBcImRlZmF1bHRcIilcbiAgKSB7XG4gICAgaWYgKGFjdGl2ZS52YWx1ZSkge1xuICAgICAgYWN0aXZlLnZhbHVlID0gZmFsc2U7XG4gICAgICBjYWxsYmFjayhzZWxlY3RSZXN1bHQob3B0aW9ucy5kZWZhdWx0LCBERUZBVUxUKSk7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQ29tcGxldGVzIHRoZSBmaXJzdCBvcGVyYXRpb24gYW1vbmcgdGhlIHByb3ZpZGVkIG9wZXJhdGlvbnMgdGhhdCBjb21lc1xuICogYXZhaWxhYmxlLCBibG9ja2luZyB0aGUgcHJvY2VzcyB1bnRpbCB0aGVuLlxuICpcbiAqIGBvcGVyYXRpb25zYCBpcyBhbiBhcnJheSB3aG9zZSBlbGVtZW50cyBtdXN0IGJlIGNoYW5uZWxzIG9yIHR3by1lbGVtZW50XG4gKiBzdWItYXJyYXlzIG9mIGNoYW5uZWxzIGFuZCB2YWx1ZXMsIGluIGFueSBjb21iaW5hdGlvbi4gQW4gb3BlcmF0aW9uIHRoYXQgaXMgYVxuICogY2hhbm5lbCBpcyBhIHRha2Ugb3BlcmF0aW9uIG9uIHRoYXQgY2hhbm5lbC4gQW4gb3BlcmF0aW9uIHRoYXQgaXMgYVxuICogdHdvLWVsZW1lbnQgYXJyYXkgaXMgYSBwdXQgb3BlcmF0aW9uIG9uIHRoYXQgY2hhbm5lbCB1c2luZyB0aGF0IHZhbHVlLlxuICogRXhhY3RseSBvbmUgb2YgdGhlc2Ugb3BlcmF0aW9ucyB3aWxsIGNvbXBsZXRlLCBhbmQgaXQgd2lsbCBiZSB0aGUgZmlyc3RcbiAqIG9wZXJhdGlvbiB0aGF0IHVuYmxvY2tzLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gKm11c3QqIGJlIGNhbGxlZCBmcm9tIHdpdGhpbiBhbiBgYXN5bmNgIGZ1bmN0aW9uIGFuZCBhcyBwYXJ0IG9mXG4gKiBhbiBgYXdhaXRgIGV4cHJlc3Npb24gaWYgdGhlIHJldHVybiB2YWx1ZSBpcyBuZWVkZWQuXG4gKlxuICogV2hlbiBgc2VsZWN0YCBpcyBjb21wbGV0ZWQgYW5kIGl0cyBwcm9jZXNzIHVuYmxvY2tzLCBpdHMgYGF3YWl0YCBleHByZXNzaW9uXG4gKiBldmFsdWF0ZXMgdG8gYW4gb2JqZWN0IG9mIHR3byBwcm9wZXJ0aWVzLiBUaGUgYHZhbHVlYCBwcm9wZXJ0eSBiZWNvbWVzXG4gKiBleGFjdGx5IHdoYXQgd291bGQgaGF2ZSBiZWVuIHJldHVybmVkIGJ5IHRoZSBlcXVpdmFsZW50IGBhd2FpdCBwdXRgIG9yIGBhd2FpdFxuICogdGFrZWAgb3BlcmF0aW9uOiBhIGJvb2xlYW4gaW4gdGhlIGNhc2Ugb2YgYSBwdXQsIG9yIHRoZSB0YWtlbiB2YWx1ZSBpbiB0aGVcbiAqIGNhc2Ugb2YgYSB0YWtlLiBUaGUgYGNoYW5uZWxgIHByb3BlcnR5IGlzIHNldCB0byB0aGUgY2hhbm5lbCB3aGVyZSB0aGVcbiAqIG9wZXJhdGlvbiBhY3R1YWxseSB0b29rIHBsYWNlLiBUaGlzIHdpbGwgYmUgZXF1aXZhbGVudCB0byB0aGUgY2hhbm5lbCBpbiB0aGVcbiAqIGBvcGVyYXRpb25zYCBhcnJheSB3aGljaCBjb21wbGV0ZWQgZmlyc3QsIGFsbG93aW5nIHRoZSBwcm9jZXNzIHRvIHVuYmxvY2suXG4gKlxuICogSWYgdGhlcmUgaXMgbW9yZSB0aGFuIG9uZSBvcGVyYXRpb24gYWxyZWFkeSBhdmFpbGFibGUgdG8gY29tcGxldGUgd2hlbiB0aGVcbiAqIGNhbGwgdG8gYHNlbGVjdGAgaXMgbWFkZSwgdGhlIG9wZXJhdGlvbiB3aXRoIHRoZSBoaWdoZXN0IHByaW9yaXR5IHdpbGwgYmUgdGhlXG4gKiBvbmUgdG8gY29tcGxldGUuIFJlZ3VsYXJseSwgcHJpb3JpdHkgaXMgbm9uLWRldGVybWluaXN0aWMgKGkuZS4sIGl0J3Mgc2V0XG4gKiByYW5kb21seSkuIEhvd2V2ZXIsIGlmIHRoZSBvcHRpb25zIG9iamVjdCBoYXMgYSBgcHJpb3JpdHlgIHZhbHVlIHNldCB0b1xuICogYHRydWVgLCBwcmlvcml0eSB3aWxsIGJlIGFzc2lnbmVkIGluIHRoZSBvcmRlciBvZiB0aGUgb3BlcmF0aW9ucyBpbiB0aGVcbiAqIHN1cHBsaWVkIGFycmF5LlxuICpcbiAqIElmIGFsbCBvZiB0aGUgb3BlcmF0aW9ucyBtdXN0IGJsb2NrIChpLmUuLCB0aGVyZSBhcmUgbm8gcGVuZGluZyBwdXRzIGZvciB0YWtlXG4gKiBvcGVyYXRpb25zLCBvciB0YWtlcyBmb3IgcHV0IG9wZXJhdGlvbnMpLCBhIGRlZmF1bHQgdmFsdWUgbWF5IGJlIHJldHVybmVkLlxuICogVGhpcyBpcyBvbmx5IGRvbmUgaWYgdGhlcmUgaXMgYSBgZGVmYXVsdGAgcHJvcGVydHkgaW4gdGhlIG9wdGlvbnMgb2JqZWN0LCBhbmRcbiAqIHRoZSB2YWx1ZSBvZiB0aGF0IHByb3BlcnR5IGJlY29tZXMgdGhlIHZhbHVlIHJldHVybmVkIGJ5IGBhd2FpdCBzZWxlY3RgLiBUaGVcbiAqIGNoYW5uZWwgaXMgc2V0IHRvIHRoZSBzcGVjaWFsIHZhbHVlIGB7QGxpbmsgbW9kdWxlOmNzcC5ERUZBVUxUfERFRkFVTFR9YC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICogQHBhcmFtIHtvYmplY3RbXX0gb3BlcmF0aW9ucyBBIGNvbGxlY3Rpb24gb2YgZWxlbWVudHMgdGhhdCBjb3JyZXNwb25kIHRvIHJlY3ZcbiAqICAgICBhbmQgc2VuZCBvcGVyYXRpb25zLiBBIHJlY3Ygb3BlcmF0aW9uIGlzIHNpZ25pZmllZCBieSBhbiBlbGVtZW50IHRoYXQgaXNcbiAqICAgICBhIGNoYW5uZWwgKHdoaWNoIGlzIHRoZSBjaGFubmVsIHRvIGJlIHRha2VuIGZyb20pLiBBIHNlbmQgb3BlcmF0aW9uIGlzXG4gKiAgICAgc3BlY2lmaWVkIGJ5IGFuIGVsZW1lbnQgdGhhdCBpcyBpdHNlbGYgYSB0d28tZWxlbWVudCBhcnJheSwgd2hpY2ggaGFzIGFcbiAqICAgICBjaGFubmVsIGZvbGxvd2VkIGJ5IGEgdmFsdWUgKHdoaWNoIGlzIHRoZSBjaGFubmVsIGFuZCB2YWx1ZSB0byBiZSBzZW50KS5cbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9ucz17fV0gQW4gb3B0aW9uYWwgb2JqZWN0IHdoaWNoIGNhbiBjaGFuZ2UgdGhlIGJlaGF2aW9yXG4gKiAgICAgb2YgYHNlbGVjdGAgdGhyb3VnaCB0d28gcHJvcGVydGllcy5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMucHJpb3JpdHk9ZmFsc2VdIElmIGB0cnVlYCwgdGhlbiB0aGUgcHJpb3JpdHkgb2ZcbiAqICAgICBvcGVyYXRpb25zIHRvIGNvbXBsZXRlIHdoZW4gbW9yZSB0aGFuIG9uZSBpcyBpbW1lZGlhdGVseSBhdmFpbGFibGUgaXMgYVxuICogICAgIHByaW9yaXR5IGFjY29yZGluZyB0byBwb3NpdGlvbiB3aXRoaW4gdGhlIG9wZXJhdGlvbnMgYXJyYXkgKGVhcmxpZXJcbiAqICAgICBwb3NpdGlvbnMgaGF2ZSB0aGUgaGlnaGVyIHByaW9yaXR5KS4gSWYgYGZhbHNlYCBvciBub3QgcHJlc2VudCwgdGhlXG4gKiAgICAgcHJpb3J0eSBvZiBvcGVyYXRpb24gY29tcGxldGlvbiBpcyByYW5kb20uXG4gKiBAcGFyYW0geyp9IFtvcHRpb25zLmRlZmF1bHRdIElmIHNldCBhbmQgYWxsIG9mIHRoZSBvcGVyYXRpb25zIGluaXRpYWxseVxuICogICAgIGJsb2NrLCB0aGUgYHNlbGVjdGAgY2FsbCBjb21wbGV0ZXMgaW1tZWRpYXRlbHkgd2l0aCB0aGUgdmFsdWUgb2YgdGhpc1xuICogICAgIG9wdGlvbiAodGhlIGNoYW5uZWwgd2lsbCBiZSBge0BsaW5rIG1vZHVsZTpjc3AuREVGQVVMVHxERUZBVUxUfSlgLiBJZiBub3RcbiAqICAgICBzZXQsIHRoZSBgc2VsZWN0YCBjYWxsIHdpbGwgYmxvY2sgdW50aWwgb25lIG9mIHRoZSBvcGVyYXRpb25zIGNvbXBsZXRlc1xuICogICAgIGFuZCB0aGF0IHZhbHVlIGFuZCBjaGFubmVsIHdpbGwgYmUgdGhlIG9uZXMgcmV0dXJuZWQuXG4gKiBAcmV0dXJuIHtQcm9taXNlPG1vZHVsZTpjc3AuU2VsZWN0UmVzdWx0Pn0gQSBwcm9taXNlIHRoYXQgd2lsbCByZXNvbHZlIHRvIGFuXG4gKiAgICAgb2JqZWN0IG9mIHR3byBwcm9wZXJ0aWVzOiBgdmFsdWVgIHdpbGwgY29udGFpbiB0aGUgdmFsdWUgdGhhdCB3b3VsZCBoYXZlXG4gKiAgICAgYmVlbiByZXR1cm5lZCBieSB0aGUgY29ycmVzcG9uZGluZyBge0BsaW5rIG1vZHVsZTpjc3Auc2VuZHxzZW5kfWAgb3JcbiAqICAgICBge0BsaW5rIG1vZHVsZTpjc3AucmVjdnxyZWN2fWAgb3BlcmF0aW9uOyBhbmQgYGNoYW5uZWxgIHdpbGwgYmUgYVxuICogICAgIHJlZmVyZW5jZSB0byB0aGUgY2hhbm5lbCB0aGF0IGNvbXBsZXRlZCB0aGUgb3BlcmF0aW9uIHRvIGFsbG93IGBzZWxlY3RgXG4gKiAgICAgdG8gdW5ibG9jay5cbiAqL1xuZnVuY3Rpb24gc2VsZWN0KG9wcywgb3B0aW9ucyA9IHt9KSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICBzZWxlY3RBc3luYyhvcHMsIHJlc29sdmUsIG9wdGlvbnMpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBBIGNvbnZlbmllbmNlIGZ1bmN0aW9uIHRvIHJlYWQgdGhlIHZhbHVlIG91dCBvZiBhIHNlbGVjdCByZXN1bHQuIFRoaXNcbiAqIGZ1bmN0aW9uIGlzIG5vdCBuZWNlc3NhcnkgLSBhZnRlciBhbGwsIGl0J3MgYWJzb2x1dGVseSBhcyBjb3JyZWN0IHRvIHNpbXBseVxuICogdXNlIGByZXN1bHQudmFsdWVgIGluc3RlYWQgb2YgYHZhbHVlKHJlc3VsdClgLCBidXQgaXQncyBwcm92aWRlZCBmb3JcbiAqIGNvbnNpc3RlbmN5IHdpdGggdGhlIHJlc3Qgb2YgdGhlIGZ1bmN0aW9uLWNlbnRyaWMgQVBJLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuU2VsZWN0UmVzdWx0fSByZXN1bHQgVGhlIHJlc3VsdCBjb21pbmcgZnJvbSBhIHNlbGVjdFxuICogICAgIG9wZXJhdGlvbi5cbiAqIEByZXR1cm4geyp9IFRoZSB2YWx1ZSBwcm92aWRlZCBieSB0aGUgc2VsZWN0IG9wZXJhdGlvbi5cbiAqL1xuZnVuY3Rpb24gdmFsdWUocmVzdWx0KSB7XG4gIHJldHVybiByZXN1bHQudmFsdWU7XG59XG5cbi8qKlxuICogQSBjb252ZW5pZW5jZSBmdW5jdGlvbiB0byByZWFkIHRoZSBjaGFubmVsIG91dCBvZiBhIHNlbGVjdCByZXN1bHQuIFRoaXNcbiAqIGZ1bmN0aW9uIGlzIG5vdCBuZWNlc3NhcnkgLSBhZnRlciBhbGwsIGl0J3MgYWJzb2x1dGVseSBhcyBjb3JyZWN0IHRvIHNpbXBseVxuICogdXNlIGByZXN1bHQuY2hhbm5lbGAgaW5zdGVhZCBvZiBgY2hhbm5lbChyZXN1bHQpYCwgYnV0IGl0J3MgcHJvdmlkZWQgZm9yXG4gKiBjb25zaXN0ZW5jeSB3aXRoIHRoZSByZXN0IG9mIHRoZSBmdW5jdGlvbi1jZW50cmljIEFQSS5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICogQHBhcmFtIHttb2R1bGU6Y3NwLlNlbGVjdFJlc3VsdH0gcmVzdWx0IFRoZSByZXN1bHQgY29taW5nIGZyb20gYSBzZWxlY3RcbiAqICAgICBvcGVyYXRpb24uXG4gKiBAcmV0dXJuIHttb2R1bGU6Y3NwLkNoYW5uZWx9IFRoZSBjaGFubmVsIHVwb24gd2hpY2ggdGhlIHNlbGVjdCBvcGVyYXRpb25cbiAqICAgICBjb21wbGV0ZWQuXG4gKi9cbmZ1bmN0aW9uIGNoYW5uZWwocmVzdWx0KSB7XG4gIHJldHVybiByZXN1bHQuY2hhbm5lbDtcbn1cblxuZXhwb3J0IHsgREVGQVVMVCwgc2VsZWN0LCBzZWxlY3RBc3luYywgdmFsdWUsIGNoYW5uZWwgfTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG4vKipcbiAqIFRoaXMgaXMgdGhlIHBsYWNlIHdoZXJlIHRoZSBuZXcgSlMgdGFza3MgYXJlIGFjdHVhbGx5IGNyZWF0ZWQuIEEgcXVldWUgaXNcbiAqIG1haW50YWluZWQgZm9yIHRoZW0sIGFuZCBhcyBlYWNoIGJhdGNoIG9mIHRhc2tzIGFyZSBjb21wbGV0ZWQsIHRoZSBuZXh0IG9uZXNcbiAqIHJ1bi4gQXMgZWFjaCBwcm9jZXNzIHJ1bnMsIGl0IGFkZHMgdGFza3MgdG8gYmUgcnVuIHRvIHRoZSBxdWV1ZSwgd2hpY2ggYXJlXG4gKiBlYWNoIHJ1biBpbiB0aGVpciBvd24gSlMgdGFzay5cbiAqXG4gKiBUaGUgZnVuY3Rpb24gdGhhdCBzcGF3bnMgdGhlIG5ldyBKUyB0YXNrIGRlcGVuZHMgb24gZW52aXJvbm1lbnQuIFRoZVxuICogYHNldEltbWVkaWF0ZWAgZnVuY3Rpb24gaXMgcHJlZmVycmVkIGFzIGl0J3MgdGhlIGZhc3Rlc3QsIG5vdCB3YWl0aW5nIGZvclxuICogZXZlbnQgcXVldWVzIHRvIGVtcHR5IGJlZm9yZSBzcGF3bmluZyB0aGUgbmV3IHByb2Nlc3MuIEhvd2V2ZXIsIGl0IGlzIG5vdCBKU1xuICogc3RhbmRhcmQgYW5kIGN1cnJlbnRseSBvbmx5IHdvcmtzIGluIElFIGFuZCBOb2RlLiBJZiBgc2V0SW1tZWRpYXRlYCBpc24ndFxuICogYXZhaWxhYmxlLCBhbiBhdHRlbXB0IGlzIG1hZGUgdG8gdXNlIGBNZXNzYWdlQ2hhbm5lbGAncyBgb25NZXNzYWdlYCBpcyB0cmllZFxuICogbmV4dC4gSWYgdGhhdCBpcyBhbHNvIG5vdCBhdmFpbGFibGUsIHRoZW4gYHNldFRpbWVvdXRgIHdpdGggYDBgIGRlbGF5IGlzXG4gKiB1c2VkLCB3aGljaCBpcyBhdmFpbGFibGUgZXZlcnl3aGVyZSBidXQgd2hpY2ggaXMgdGhlIGxlYXN0IHBlcmZvcm1hbnQgb2YgYWxsXG4gKiBvZiB0aGUgc29sdXRpb25zLlxuICpcbiAqIFRoZXJlIGFyZSBvdGhlciBwb3NzaWJpbGl0aWVzIGZvciBjcmVhdGluZyBwcm9jZXNzZXMsIGJ1dCB0aGV5IHdlcmUgcmVqZWN0ZWRcbiAqIGFzIG9ic29sZXRlIChgcHJvY2Vzcy5uZXh0VGlja2AgYW5kIGBvbnJlYWR5c3RhdGVjaGFuZ2VgKSBvciB1bm5lY2Vzc2FyeVxuICogKGB3aW5kb3cucG9zdE1lc3NhZ2VgLCB3aGljaCB3b3JrcyBsaWtlIGBNZXNzYWdlQ2hhbm5lbGAgYnV0IGRvZXNuJ3Qgd29yayBpblxuICogV2ViIFdvcmtlcnMpLlxuICpcbiAqIEl0IGlzIG5vdGFibGUgYW5kIGltcG9ydGFudCB0aGF0IHdlIGFjdCBhcyBnb29kIGNpdGl6ZW5zIGhlcmUuIFRoaXNcbiAqIGRpc3BhdGNoZXIgaXMgY2FwYWJsZSBvZiB0YWtpbmcgY29udHJvbCBvZiB0aGUgSmF2YVNjcmlwdCBlbmdpbmUgdW50aWxcbiAqIHRob3VzYW5kcywgbWlsbGlvbnMsIG9yIG1vcmUgdGFza3MgYXJlIGhhbmRsZWQuIEJ1dCB0aGF0IGNvdWxkIGNhdXNlIHRoZVxuICogc3lzdGVtIGV2ZW50IGxvb3AgdG8gaGF2ZSB0byB3YWl0IGFuIHVuYWNjZXB0YWJsZSBhbW91bnQgb2YgdGltZS4gU28gd2UgbGltaXRcbiAqIG91cnNlbHZlcyB0byBhIGJhdGNoIG9mIHRhc2tzIGF0IGEgdGltZSwgYW5kIGlmIHRoZXJlIGFyZSBzdGlsbCBtb3JlIHRvIGJlXG4gKiBydW4sIHdlIGxldCB0aGUgZXZlbnQgbG9vcCBydW4gYmVmb3JlIHRoYXQgbmV4dCBiYXRjaCBpcyBwcm9jZXNzZWQuXG4gKlxuICogVGhlIGRpc3BhdGNoZXIgaXMgKipnbG9iYWwqKi4gVGhlcmUgaXMgYSBzaW5nbGUgaW5zdGFuY2UgdGhhdCBydW5zIGZvciBhbGxcbiAqIGNoYW5uZWxzIGFuZCBwcm9jZXNzZXMuIFRoaXMgaXMgdGhlIG9ubHkgZWxlbWVudCBvZiB0aGUgc3lzdGVtIHRoYXQgd29ya3NcbiAqIGxpa2UgdGhpcy5cbiAqXG4gKiBAbW9kdWxlIGNzcC9kaXNwYXRjaGVyXG4gKiBAc2VlIG1vZHVsZTpjc3AuY29uZmlnXG4gKiBAcHJpdmF0ZVxuICovXG5cbmltcG9ydCB7XG4gIHF1ZXVlIGFzIHEsXG4gIEVNUFRZLFxuICBjb3VudCBhcyBxQ291bnQsXG4gIGRlcXVldWUsXG4gIGVucXVldWVcbn0gZnJvbSBcIm1vZHVsZXMvcXVldWVcIjtcbmNvbnN0IHF1ZXVlID0gcSgpO1xuXG4vKipcbiAqIFRoZSBkaXNwYXRjaCBtZXRob2Qgb3B0aW9uIGluZGljYXRpbmcgdGhhdCBgc2V0SW1tZWRpYXRlYCBzaG91bGQgYmUgdXNlZCB0b1xuICogZGlzcGF0Y2ggdGFza3MuXG4gKlxuICogVGhpcyBpcyB0aGUgZGVmYXVsdCBvcHRpb24uIEZvciBlbnZpcm9ubWVudHMgdGhhdCBkb24ndCBzdXBwb3J0XG4gKiBgc2V0SW1tZWRpYXRlYCwgdGhpcyBmYWxscyBiYWNrIHRvXG4gKiBge0BsaW5rIG1vZHVsZTpjc3AuTUVTU0FHRV9DSEFOTkVMfE1FU1NBR0VfQ0hBTk5FTH1gLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAdHlwZSB7U3ltYm9sfVxuICogQHNlZSB7QGxpbmsgbW9kdWxlOmNzcC5jb25maWd8Y29uZmlnfVxuICovXG5jb25zdCBTRVRfSU1NRURJQVRFID0gU3ltYm9sKFwiU0VUX0lNTUVESUFURVwiKTtcblxuLyoqXG4gKiBUaGUgZGlzcGF0Y2ggbWV0aG9kIG9wdGlvbiBpbmRpY2F0aW5nIHRoYXQgYSBgTWVzc2FnZUNoYW5uZWxgIHNob3VsZCBiZSB1c2VkXG4gKiB0byBkaXNwYXRjaCB0YXNrcy5cbiAqXG4gKiBGb3IgZW52aXJvbm1lbnRzIHRoYXQgZG9uJ3Qgc3VwcG9ydCBgTWVzc2FnZUNoYW5uZWxgLCB0aGlzIGZhbGxzIGJhY2sgdG9cbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC5TRVRfVElNRU9VVHxTRVRfVElNRU9VVH1gLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAdHlwZSB7U3ltYm9sfVxuICogQHNlZSB7QGxpbmsgbW9kdWxlOmNzcC5jb25maWd8Y29uZmlnfVxuICovXG5jb25zdCBNRVNTQUdFX0NIQU5ORUwgPSBTeW1ib2woXCJNRVNTQUdFX0NIQU5ORUxcIik7XG5cbi8qKlxuICogVGhlIGRpc3BhdGNoIG1ldGhvZCBvcHRpb24gaW5kaWNhdGluZyB0aGF0IGBzZXRUaW1lb3V0YCBzaG91bGQgYmUgdXNlZCB0b1xuICogZGlzcGF0Y2ggdGFza3MuXG4gKlxuICogVGhpcyBtZXRob2QgaXMgYWx3YXlzIGF2YWlsYWJsZSwgYnV0IGl0J3MgYWxzbyBhbHdheXMgbGVzcyBlZmZpY2llbnQgdGhhbiBhbnlcbiAqIG90aGVyIG1ldGhvZCwgc28gaXQgc2hvdWxkIGJlIHVzZWQgYXMgYSBsYXN0IHJlc29ydC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICogQHR5cGUge1N5bWJvbH1cbiAqIEBzZWUgIHtAbGluayBtb2R1bGU6Y3NwLmNvbmZpZ3xjb25maWd9XG4gKi9cbmNvbnN0IFNFVF9USU1FT1VUID0gU3ltYm9sKFwiU0VUX1RJTUVPVVRcIik7XG5cbmNvbnN0IG9wdGlvbnMgPSB7XG4gIGJhdGNoU2l6ZTogMTAyNCxcbiAgZGlzcGF0Y2hNZXRob2Q6IFNFVF9JTU1FRElBVEVcbn07XG5cbmxldCBkaXNwYXRjaGVyID0gY3JlYXRlRGlzcGF0Y2hlcigpO1xubGV0IHJ1bm5pbmcgPSBmYWxzZTtcbmxldCBxdWV1ZWQgPSB0cnVlO1xuXG4vKipcbiAqIENyZWF0ZXMgYW5kIHJldHVybnMgYSBmdW5jdGlvbiB0aGF0IGNhbiBiZSB1c2VkIHRvIGRpc3BhdGNoIHRhc2tzLiBUaGVcbiAqIGZ1bmN0aW9uIHRoYXQgaXMgY3JlYXRlZCBkZXBlbmRzIG9uIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgYGRpc3BhdGNoTWV0aG9kYFxuICogdGhhdCBjYW4gYmUgc2V0IHdpdGggYHtAbGluayBtb2R1bGU6Y3NwLmNvbmZpZ3xjb25maWd9YC5cbiAqXG4gKiBAcmV0dXJuIEEgZGlzcGF0Y2hlciBmdW5jdGlvbiB1c2luZyB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGRpc3BhdGNoIG1ldGhvZC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZURpc3BhdGNoZXIoKSB7XG4gIHN3aXRjaCAoY2FsY0Rpc3BhdGNoTWV0aG9kKCkpIHtcbiAgICAvLyBXZSBwcmVmZXIgYHNldEltbWVkaWF0ZWAgaWYgaXQncyBhdmFpbGFibGUsIGJ1dCBpdCdzIG9ubHkgYXZhaWxhYmxlIGluXG4gICAgLy8gTm9kZSBhbmQgc29tZSBvbGQgYnJvd3NlcnMuXG4gICAgY2FzZSBTRVRfSU1NRURJQVRFOlxuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgaWYgKCEocXVldWVkICYmIHJ1bm5pbmcpKSB7XG4gICAgICAgICAgcXVldWVkID0gdHJ1ZTtcbiAgICAgICAgICBzZXRJbW1lZGlhdGUocHJvY2Vzc1Rhc2tzKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgIC8vIE1vc3QgbW9kZXJuIGJyb3dzZXJzIGltcGxlbWVudCBgTWVzc2FnZUNoYW5uZWxgLiBUaGlzIGlzIHRoZSBwcmVmZXJyZWRcbiAgICAvLyBtZXRob2QgaW4gYnJvd3NlciBlbnZpcm9ubWVudHMgd2hlcmUgYHNldEltbWVkaWF0ZWAgaXNuJ3QgYXZhaWxhYmxlLlxuICAgIGNhc2UgTUVTU0FHRV9DSEFOTkVMOiB7XG4gICAgICBjb25zdCBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9ICgpID0+IHByb2Nlc3NUYXNrcygpO1xuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgaWYgKCEocXVldWVkICYmIHJ1bm5pbmcpKSB7XG4gICAgICAgICAgcXVldWVkID0gdHJ1ZTtcbiAgICAgICAgICBjaGFubmVsLnBvcnQyLnBvc3RNZXNzYWdlKDApO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIElmIGFsbCBlbHNlIGZhaWxzLCBqdXN0IHVzZSBgc2V0VGltZW91dGAuIEl0J3MgYSBsaXR0bGUgc2xvd2VyIHRoYW4gdGhlXG4gICAgLy8gb3RoZXIgbWV0aG9kcywgYnV0IGl0J3MgYXZhaWxhYmxlIGV2ZXJ5d2hlcmUuXG4gICAgY2FzZSBTRVRfVElNRU9VVDpcbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGlmICghKHF1ZXVlZCAmJiBydW5uaW5nKSkge1xuICAgICAgICAgIHF1ZXVlZCA9IHRydWU7XG4gICAgICAgICAgc2V0VGltZW91dChwcm9jZXNzVGFza3MsIDApO1xuICAgICAgICB9XG4gICAgICB9O1xuICB9XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgYWN0dWFsIGRpc3BhdGNoIG1ldGhvZCBiYXNlZCBvbiB0aGUgY3VycmVudCBkaXNwYXRjaCBtZXRob2RcbiAqIHNldHRpbmcgYW5kIGVudmlyb25tZW50YWwgYXZhaWxhYmlsaXR5LlxuICpcbiAqIFRoZSBkaXNwYXRjaCBtZXRob2QgaXMgc3RvcmVkIHJhdywgc28gdGhpcyBmdW5jdGlvbiBpcyBuZWNlc3NhcnkgdG8gdGFrZVxuICogZW52aXJvbm1lbnQgaW50byBhY2NvdW50LiBGb3IgZXhhbXBsZSwgaWYgd2UncmUgcnVubmluZyBpbiBhIG1vZGVybiBicm93c2VyXG4gKiAod2hpY2ggZG9lcyBub3QgaGF2ZSBgc2V0SW1tZWRpYXRlYCksXG4gKiBge0BsaW5rIG1vZHVsZTpjc3AuU0VUX0lNTUVESUFURXxTRVRfSU1NRURJQVRFfWAgY2FuIHN0aWxsIGJlIHJlY29yZGVkIGFzIHRoZVxuICogZGlzcGF0Y2ggbWV0aG9kLCBidXQgdGhpcyBmdW5jdGlvbiB3aWxsIHJldHVyblxuICogYHtAbGluayBtb2R1bGU6Y3NwLk1FU1NBR0VfQ0hBTk5FTHxNRVNTQUdFX0NIQU5ORUx9YC5cbiAqXG4gKiBAcmV0dXJuIHtTeW1ib2x9IFRoZSBkaXNwYXRjaCBtZXRob2QgdG8gdXNlIGJhc2VkIG9uIHNldHRpbmcgYW5kIGVudmlyb25tZW50LlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY2FsY0Rpc3BhdGNoTWV0aG9kKCkge1xuICBzd2l0Y2ggKG9wdGlvbnMuZGlzcGF0Y2hNZXRob2QpIHtcbiAgICBjYXNlIE1FU1NBR0VfQ0hBTk5FTDpcbiAgICAgIGlmICh0eXBlb2YgTWVzc2FnZUNoYW5uZWwgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgcmV0dXJuIE1FU1NBR0VfQ0hBTk5FTDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBTRVRfVElNRU9VVDtcblxuICAgIGNhc2UgU0VUX1RJTUVPVVQ6XG4gICAgICByZXR1cm4gU0VUX1RJTUVPVVQ7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgaWYgKHR5cGVvZiBzZXRJbW1lZGlhdGUgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgcmV0dXJuIFNFVF9JTU1FRElBVEU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIE1lc3NhZ2VDaGFubmVsICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIHJldHVybiBNRVNTQUdFX0NIQU5ORUw7XG4gICAgICB9XG4gICAgICByZXR1cm4gU0VUX1RJTUVPVVQ7XG4gIH1cbn1cblxuLyoqXG4gKiBUaGUgaGVhcnQgb2YgdGhlIGRpc3BhdGNoIHByb2Nlc3MsIHRoaXMgaXMgdGhlIGZ1bmN0aW9uIHJ1biBieSB0aGUgZGlzcGF0Y2hcbiAqIGZ1bmN0aW9uIGluIG9yZGVyIHRvIGFjdHVhbGx5IHJ1biBxdWV1ZWQgdGFza3MuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gcHJvY2Vzc1Rhc2tzKCkge1xuICBydW5uaW5nID0gdHJ1ZTtcbiAgcXVldWVkID0gZmFsc2U7XG4gIGxldCBjb3VudCA9IDA7XG5cbiAgZm9yICg7Oykge1xuICAgIGNvbnN0IHRhc2sgPSBkZXF1ZXVlKHF1ZXVlKTtcbiAgICBpZiAodGFzayA9PT0gRU1QVFkpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHRhc2soKTtcblxuICAgIGlmIChjb3VudCA+PSBvcHRpb25zLmJhdGNoU2l6ZSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNvdW50Kys7XG5cbiAgICBydW5uaW5nID0gZmFsc2U7XG4gICAgaWYgKHFDb3VudChxdWV1ZSkpIHtcbiAgICAgIGRpc3BhdGNoZXIoKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuZCBhc3NpZ25zIHRoZSBnbG9iYWwgZGlzcGF0Y2ggZnVuY3Rpb24gYmFzZWQgb24gZGlzcGF0Y2ggbWV0aG9kXG4gKiBzZXR0aW5nIGFuZCBlbnZpcm9ubWVudGFsIGF2YWlsYWJpbGl0eS5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBzZXREaXNwYXRjaGVyKCkge1xuICBkaXNwYXRjaGVyID0gY3JlYXRlRGlzcGF0Y2hlcigpO1xufVxuXG4vKipcbiAqIFRoZSBjb25maWd1cmF0aW9uIG9mIHRoZSBDaGFua28gZGlzcGF0Y2hlci4gQW4gb2JqZWN0IGxpa2UgdGhpcyBpcyByZXR1cm5lZFxuICogZnJvbSB0aGUge0BsaW5rIG1vZHVsZTpjc3AuY29uZmlnfSBmdW5jdGlvbiwgYW5kIGl0IG1heSBhbHNvIGJlIHBhc3NlZCB0byB0aGVcbiAqIHNhbWUgZnVuY3Rpb24gKHRob3VnaCBlYWNoIHByb3BlcnR5IGlzIG9wdGlvbmFsIGluIHRoYXQgY2FzZSkuXG4gKlxuICogQHR5cGVkZWYge29iamVjdH0gRGlzcGF0Y2hlckNvbmZpZ1xuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBiYXRjaFNpemUgVGhlIG1heGltdW0gbnVtYmVyIG9mIHRhc2tzIHRoYXQgdGhlIGRpc3BhdGNoZXJcbiAqICAgICB3aWxsIHJ1biBpbiBhIHNpbmdsZSBiYXRjaC5cbiAqIEBwcm9wZXJ0eSB7U3ltYm9sfSBkaXNwYXRjaE1ldGhvZCBUaGUgbWV0aG9kIHVzZWQgdG8gZGlzcGF0Y2ggYSBwcm9jZXNzIGludG9cbiAqICAgICBhIHNlcGFyYXRlIGxpbmUgb2YgZXhlY3V0aW9uLlxuICovXG5cbi8qKlxuICogU2V0cyBvbmUgb3IgbW9yZSBvZiB0aGUgZGlzcGF0Y2hlciBjb25maWd1cmF0aW9uIG9wdGlvbnMuXG4gKlxuICogVGhpcyBpcyBhZHZhbmNlZCBzZXR0aW5nIGZvciB0aGUgZGlzcGF0Y2hlciB0aGF0IGlzIHJlc3BvbnNpYmxlIGZvciBxdWV1ZWluZ1xuICogdXAgY2hhbm5lbCBvcGVyYXRpb25zIGFuZCBwcm9jZXNzZXMuIEl0IGlzIGxpa2VseSB0aGF0IHRoaXMgZnVuY3Rpb24gd2lsbFxuICogbmV2ZXIgbmVlZCB0byBiZSBjYWxsZWQgaW4gbm9ybWFsIG9wZXJhdGlvbi5cbiAqXG4gKiBJZiBhbnkgcmVjb2duaXplZCBvcHRpb25zIGFyZSBzcGVjaWZpZWQgaW4gdGhlIG9wdGlvbnMgb2JqZWN0IHBhc3NlZCB0b1xuICogYGNvbmZpZ2AsIHRoZW4gdGhlIG9wdGlvbiBpcyBzZXQgdG8gdGhlIHZhbHVlIHNlbnQgaW4uIFByb3BlcnRpZXMgdGhhdCBhcmVuJ3RcbiAqIGFueSBvZiB0aGVzZSBvcHRpb25zIGFyZSBpZ25vcmVkLCBhbmQgYW55IG9mIHRoZXNlIG9wdGlvbnMgdGhhdCBkbyBub3QgYXBwZWFyXG4gKiBpbiB0aGUgcGFzc2VkIG9iamVjdCBhcmUgbGVmdCB3aXRoIHRoZWlyIGN1cnJlbnQgdmFsdWVzLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0cyBBIG1hcHBpbmcgb2Ygb3B0aW9ucyB0byB0aGVpciBuZXcgdmFsdWVzLiBFeHRyYSB2YWx1ZXNcbiAqICAgICAocHJvcGVydGllcyB0aGF0IGFyZSBub3Qgb3B0aW9ucykgYXJlIGlnbm9yZWQuXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdHMuYmF0Y2hTaXplXSBUaGUgbWF4aW11bSBudW1iZXIgb2YgdGFza3MgdGhhdCB0aGVcbiAqICAgICBkaXNwYXRjaGVyIHdpbGwgcnVuIGluIGEgc2luZ2xlIGJhdGNoIChpbml0aWFsbHksIHRoaXMgaXMgMTAyNCkuIElmIHRoZVxuICogICAgIG51bWJlciBvZiBwZW5kaW5nIHRhc2tzIGV4Y2VlZHMgdGhpcywgdGhlIHJlbWFpbmluZyBhcmUgbm90IGRpc2NhcmRlZC5cbiAqICAgICBUaGV5J3JlIHNpbXBseSBydW4gYXMgcGFydCBvZiBhbm90aGVyIGJhdGNoIGFmdGVyIHRoZSBjdXJyZW50IGJhdGNoXG4gKiAgICAgY29tcGxldGVzLlxuICogQHBhcmFtIHtTeW1ib2x9IFtvcHRzLmRpc3BhdGNoTWV0aG9kXSBUaGUgbWV0aG9kIHVzZWQgdG8gZGlzcGF0Y2ggYSBwcm9jZXNzXG4gKiAgICAgaW50byBhIHNlcGFyYXRlIGxpbmUgb2YgZXhlY3V0aW9uLiBQb3NzaWJsZSB2YWx1ZXMgYXJlXG4gKiAgICAgYHtAbGluayBtb2R1bGU6Y3NwLlNFVF9JTU1FRElBVEV8U0VUX0lNTUVESUFURX1gLFxuICogICAgIGB7QGxpbmsgbW9kdWxlOmNzcC5NRVNTQUdFX0NIQU5ORUx8TUVTU0FHRV9DSEFOTkVMfWAsIG9yXG4gKiAgICAgYHtAbGluayBtb2R1bGU6Y3NwLlNFVF9USU1FT1VUfFNFVF9USU1FT1VUfWAsIHdpdGggdGhlIGluaXRpYWwgYmVpbmdcbiAqICAgICBge0BsaW5rIG1vZHVsZTpjc3AuU0VUX0lNTUVESUFURXxTRVRfSU1NRURJQVRFfWAuIElmIGEgbWV0aG9kIGlzIHNldCBidXRcbiAqICAgICBpcyBub3QgYXZhaWxhYmxlIGluIHRoYXQgZW52aXJvbm1lbnQsIHRoZW4gaXQgd2lsbCBzaWxlbnRseSBmYWxsIGJhY2sgdG9cbiAqICAgICB0aGUgbmV4dCBtZXRob2QgdGhhdCBpcyBhdmFpbGFibGUuXG4gKiBAcmV0dXJuIHttb2R1bGU6Y3NwLkRpc3BhdGNoZXJDb25maWd9IFRoZSBjb25maWd1cmF0aW9uIHNldHRpbmdzIGZvciB0aGVcbiAqICAgICBkaXNwYXRjaGVyIGFmdGVyIGFueSBuZXcgdmFsdWVzIGhhdmUgYmVlbiBzZXQuXG4gKi9cbmZ1bmN0aW9uIGNvbmZpZyhvcHRzID0ge30pIHtcbiAgZm9yIChjb25zdCBrZXkgaW4gb3B0aW9ucykge1xuICAgIGlmIChrZXkgaW4gb3B0cykge1xuICAgICAgb3B0aW9uc1trZXldID0gb3B0c1trZXldO1xuXG4gICAgICBpZiAoa2V5ID09PSBcImRpc3BhdGNoTWV0aG9kXCIpIHtcbiAgICAgICAgc2V0RGlzcGF0Y2hlcigpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucyk7XG59XG5cbi8qKlxuICogUXVldWVzIGEgdGFzayB0byBiZSBydW4gYW5kIHN0YXJ0cyB0aGUgZGlzcGF0Y2ggcHJvY2Vzcy5cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSB0YXNrIEEgdGFzayB0byBiZSBxdWV1ZWQgYW5kIHJ1biB0aGUgbmV4dCB0aW1lIGEgYmF0Y2ggb2ZcbiAqICAgICB0YXNrcyBpcyBydW4uXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBkaXNwYXRjaCh0YXNrKSB7XG4gIGVucXVldWUocXVldWUsIHRhc2spO1xuICBkaXNwYXRjaGVyKCk7XG59XG5cbmV4cG9ydCB7IFNFVF9JTU1FRElBVEUsIE1FU1NBR0VfQ0hBTk5FTCwgU0VUX1RJTUVPVVQsIGNvbmZpZywgZGlzcGF0Y2ggfTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG4vKipcbiAqIFByb3ZpZGVzIHNtYWxsIHV0aWxpdHkgZnVuY3Rpb25zIHRvIG1ha2UgaXQgZWFzaWVyIHRvIGludGVyYWN0IHdpdGggYXN5bmNcbiAqIGZ1bmN0aW9ucyBhcyBwcm9jZXNzZXMuXG4gKlxuICogQG1vZHVsZSBjc3AvcHJvY2Vzc1xuICogQHByaXZhdGVcbiAqL1xuXG5pbXBvcnQgeyB0aW1lZENoYW4sIHJlY3ZBc3luYyB9IGZyb20gXCJtb2R1bGVzL2NoYW5uZWxcIjtcblxuLyoqXG4gKiBCbG9ja3MgdGhlIHByb2Nlc3MgZm9yIHRoZSBzcGVjaWZpZWQgdGltZSAoaW4gbWlsbGlzZWNvbmRzKSBhbmQgdGhlbiB1bmJsb2Nrc1xuICogaXQuXG4gKlxuICogVGhpcyBpbXBsZW1lbnRzIGEgZGVsYXksIGJ1dCBvbmUgdGhhdCdzIHN1cGVyaW9yIHRvIG90aGVyIGtpbmRzIG9mIGRlbGF5c1xuICogKGBzZXRUaW1lb3V0YCwgZXRjLikgYmVjYXVzZSBpdCBibG9ja3MgdGhlIHByb2Nlc3MgYW5kIGFsbG93cyB0aGUgZGlzcGF0Y2hlclxuICogdG8gYWxsb3cgb3RoZXIgcHJvY2Vzc2VzIHRvIHJ1biB3aGlsZSB0aGlzIG9uZSB3YWl0cy4gVGhlIGRlZmF1bHQgZGVsYXkgaXMgMCxcbiAqIHdoaWNoIHdpbGwgcmVsZWFzZSB0aGUgcHJvY2VzcyB0byBhbGxvdyBvdGhlcnMgdG8gcnVuIGFuZCB0aGVuIGltbWVkaWF0ZWx5XG4gKiByZS1xdWV1ZSBpdC5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uICptdXN0KiBiZSBjYWxsZWQgZnJvbSB3aXRoaW4gYW4gYGFzeW5jYCBmdW5jdGlvbiBhbmQgYXMgcGFydCBvZlxuICogYW4gYGF3YWl0YCBleHByZXNzaW9uLlxuICpcbiAqIFdoZW4gdGhpcyBmdW5jdGlvbiBjb21wbGV0ZXMgYW5kIGl0cyBwcm9jZXNzIHVuYmxvY2tzLCB0aGUgYGF3YWl0YCBleHByZXNzaW9uXG4gKiBkb2Vzbid0IHRha2Ugb24gYW55IG1lYW5pbmdmdWwgdmFsdWUuIFRoZSBwdXJwb3NlIG9mIHRoaXMgZnVuY3Rpb24gaXMgc2ltcGx5XG4gKiB0byBkZWxheSwgbm90IHRvIGNvbW11bmljYXRlIGFueSBkYXRhLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcGFyYW0ge251bWJlcn0gW2RlbGF5PTBdIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRoYXQgdGhlIHByb2Nlc3Mgd2lsbFxuICogICAgIGJsb2NrIGZvci4gQXQgdGhlIGVuZCBvZiB0aGF0IHRpbWUsIHRoZSBwcm9jZXNzIGlzIGFnYWluIGVsaWdpYmxlIHRvIGJlXG4gKiAgICAgcnVuIGJ5IHRoZSBkaXNwYXRjaGVyLiBJZiB0aGlzIGlzIG1pc3Npbmcgb3Igc2V0IHRvIGAwYCwgdGhlIHByb2Nlc3Mgd2lsbFxuICogICAgIGNlZGUgZXhlY3V0aW9uIHRvIHRoZSBuZXh0IG9uZSBidXQgaW1tZWRpYXRlbHkgcmVxdWV1ZSBpdHNlbGYgdG8gYmUgcnVuXG4gKiAgICAgYWdhaW4uXG4gKiBAcmV0dXJuIHtQcm9taXNlfSBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIG5vIG1lYW5pbmdmdWwgcmVzdWx0IHdoZW4gdGhlXG4gKiAgICAgdGltZSBoYXMgZWxhcHNlZC5cbiAqL1xuZnVuY3Rpb24gc2xlZXAoZGVsYXkgPSAwKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICBjb25zdCBjaCA9IHRpbWVkQ2hhbihkZWxheSk7XG4gICAgcmVjdkFzeW5jKGNoLCByZXNvbHZlKTtcbiAgfSk7XG59XG5cbi8qKlxuICogSW52b2tlcyBhbiBhc3luYyBmdW5jdGlvbiBhY3RpbmcgYXMgYSBwcm9jZXNzLlxuICpcbiAqIFRoaXMgaXMgcHVyZWx5IGEgY29udmVuaWVuY2UgZnVuY3Rpb24sIGRyaXZlbiBieSB0aGUgZmFjdCB0aGF0IGl0J3MgbmVjZXNzYXJ5XG4gKiB0byB1c2UgYW4gSUlGRSB0byBpbnZva2UgYW4gYW5vbnltb3VzIGFzeW5jIGZ1bmN0aW9uLCBhbmQgdGhhdCdzIG5vdCB2ZXJ5XG4gKiBhZXN0aGV0aWNhbGx5IHBsZWFzaW5nLiBJdCBkb2VzIG5vIG1vcmUgdGhhbiBpbnZva2UgdGhlIHBhc3NlZCBmdW5jdGlvbiwgYnV0XG4gKiB0aGF0IGF0IGxlYXN0IHJlbGVhc2VzIHVzIGZyb20gdGhlIG5lZWQgdG8gcHV0IHRoZSBlbXB0eSBwYXJlbnRoZXNlcyBhZnRlclxuICogdGhlIGZ1bmN0aW9uIGRlZmluaXRpb24uXG4gKlxuICogQSBuYW1lZCBhc3luYyBmdW5jdGlvbiBjYW4gc2ltcGx5IGJlIGludm9rZWQgKHdpdGhvdXQgYmVpbmcgYW4gSUlGRSkgYW5kXG4gKiBkb2Vzbid0IGJlbmVmaXQgZnJvbSB0aGlzIGNvbnZlbmllbmNlLlxuICpcbiAqIEFub255bW91cyBwcm9jZXNzIHdpdGhvdXQgYGdvYDpcbiAqIGBgYFxuICogKGFzeW5jICgpID0+IHtcbiAqICAgLi4uIGRvIHNvbWUgcHJvY2VzcyBzdHVmZiBoZXJlIC4uLlxuICogfSkoKTtcbiAqIGBgYFxuICogQW5vbnltb3VzIHByb2Nlc3Mgd2l0aCBgZ29gOlxuICogYGBgXG4gKiBnbyhhc3luYyAoKSA9PiB7XG4gKiAgIC4uLiBkbyBzb21lIHByb2Nlc3Mgc3R1ZmYgaGVyZSAuLi5cbiAqIH0pO1xuICogYGBgXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuIFRoZSBhc3luYyBmdW5jdGlvbiBiZWluZyB1c2VkIGFzIGEgcHJvY2Vzcy5cbiAqIEBwYXJhbSB7Li4uKn0gYXJncyBBcmd1bWVudHMgdGhhdCBhcmUgc2VudCB0byB0aGUgYXN5bmMgZnVuY3Rpb24gd2hlbiBpdCdzXG4gKiAgICAgaW52b2tlZC5cbiAqIEByZXR1cm4ge1Byb21pc2V9IFRoZSBwcm9taXNlIHJldHVybmVkIGJ5IHRoZSBhc3luYyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gZ28oZm4sIC4uLmFyZ3MpIHtcbiAgcmV0dXJuIGZuKC4uLmFyZ3MpO1xufVxuXG4vKipcbiAqIEpvaW5zIGFsbCBvZiB0aGUgcHJvdmlkZWQgcHJvY2Vzc2VzIGludG8gYSBzaW5nbGUgcHJvY2VzcywgcmV0dXJuaW5nIGFcbiAqIHByb21pc2UgdGhhdCB3cmFwcyBhbGwgb2YgdGhlIGluZGl2aWR1YWwgcHJvY2Vzc2VzJyBwcm9taXNlcy4gUHV0dGluZyB0aGlzIGluXG4gKiBhbiBgYXdhaXRgIHN0YXRlbWVudCB3aWxsIGJsb2NrIHVudGlsIGFsbCBvZiB0aGUgcHJvY2Vzc2VzIGNvbXBsZXRlLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcGFyYW0gey4uLmZ1bmN0aW9ufSBmbnMgQW55IG51bWJlciBvZiBhc3luYyBmdW5jdGlvbnMgd2hvc2UgcmVzb2x1dGlvbnMgYXJlXG4gKiAgICAgYmVpbmcgd2FpdGVkIGZvci5cbiAqIEByZXR1cm4ge1Byb21pc2V9IEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gYWxsIG9mIHRoZSBwcm9jZXNzZXMgcHJvbWlzZXNcbiAqICAgICByZXNvbHZlLlxuICovXG5mdW5jdGlvbiBqb2luKC4uLmZucykge1xuICByZXR1cm4gUHJvbWlzZS5hbGwoZm5zKTtcbn1cblxuZXhwb3J0IHsgc2xlZXAsIGdvLCBqb2luIH07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuLyoqXG4gKiBUaGUgbWFwcGluZyBvZiBwcm90b2NvbCBuYW1lcyB0byB0aGVpciByZXNwZWN0aXZlIHByb3BlcnR5IGtleSBuYW1lcy4gVGhlXG4gKiB2YWx1ZXMgb2YgdGhpcyBtYXAgd2lsbCBkZXBlbmQgb24gd2hldGhlciBzeW1ib2xzIGFyZSBhdmFpbGFibGUuXG4gKlxuICogQHR5cGVkZWYge29iamVjdH0gUHJvdG9jb2xNYXBcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y29yZVxuICogQHByaXZhdGVcbiAqIEBwcm9wZXJ0eSB7U3ltYm9sfSBpbml0IFRoZSBgcmVkdWNlci9pbml0YCBwcm90b2NvbC4gVGhpcyBpcyB1c2VkIHRvIG1hcmtcbiAqICAgICBmdW5jdGlvbnMgdGhhdCBpbml0aWFsaXplIGEgdGFyZ2V0IGNvbGxlY3Rpb24gYmVmb3JlIGFkZGluZyBpdGVtcyB0byBpdC5cbiAqIEBwcm9wZXJ0eSB7U3ltYm9sfSBzdGVwIFRoZSBgcmVkdWNlci9zdGVwYCBwcm90b2NvbC4gVGhpcyBpcyB1c2VkIHRvIG1hcmtcbiAqICAgICBmdW5jdGlvbnMgdGhhdCBhcmUgdXNlZCBpbiB0aGUgcmVkdWNlcidzIHN0ZXAgcHJvY2Vzcywgd2hlcmUgb2JqZWN0cyBhcmVcbiAqICAgICBhZGRlZCB0byB0aGUgdGFyZ2V0IGNvbGxlY3Rpb24gb25lIGF0IGEgdGltZS5cbiAqIEBwcm9wZXJ0eSB7U3ltYm9sfSByZXN1bHQgVGhlIGByZWR1Y2VyL3Jlc3VsdGAgcHJvdG9jb2wuIFRoaXMgaXMgdXNlZCB0byBtYXJrXG4gKiAgICAgZnVuY3Rpb25zIHRoYXQgdGFrZSB0aGUgZmluYWwgcmVzdWx0IG9mIHRoZSBzdGVwIHByb2Nlc3MgYW5kIHJldHVybiB0aGVcbiAqICAgICBmaW5hbCBmb3JtIHRvIGJlIG91dHB1dC4gVGhpcyBpcyBvcHRpb25hbDsgaWYgdGhlIHJlZHVjZXIgZG9lcyBub3Qgd2FudFxuICogICAgIHRvIHRyYW5zZm9ybSB0aGUgZmluYWwgcmVzdWx0LCBpdCBzaG91bGQganVzdCByZXR1cm4gdGhlIHJlc3VsdCBvZiBpdHNcbiAqICAgICBjaGFpbmVkIHJlZHVjZXIncyBgcmVzdWx0YCBmdW5jdGlvbi5cbiAqIEBwcm9wZXJ0eSB7U3ltYm9sfSBjb21wbGV0ZWQgVGhlIGByZWR1Y2VyL2NvbXBsZXRlZGAgcHJvdG9jb2wuIFRoZSBwcmVzZW5jZVxuICogICAgIG9mIHRoaXMga2V5IG9uIGFuIG9iamVjdCBpbmRpY2F0ZXMgdGhhdCBpdHMgdHJhbnNmb3JtYXRpb24gaGFzIGJlZW5cbiAqICAgICBjb21wbGV0ZWQuIEl0IGlzIHVzZWQgaW50ZXJuYWxseSB0byBtYXJrIGNvbGxlY3Rpb25zIHdob3NlXG4gKiAgICAgdHJhbnNmb3JtYXRpb25zIGNvbmNsdWRlIGJlZm9yZSBldmVyeSBvYmplY3QgaXMgaXRlcmF0ZWQgb3ZlciAoYXMgaW5cbiAqICAgICBge0BsaW5rIG1vZHVsZTp4ZHVjZS50YWtlfWAgdHJhbnNkdWNlcnMuKSBJdCBpcyBvZiBsaXR0bGUgdXNlIGJleW9uZFxuICogICAgIHRyYW5zZHVjZXIgYXV0aG9yaW5nLlxuICogQHByb3BlcnR5IHtTeW1ib2x9IHZhbHVlIFRoZSBgcmVkdWNlci92YWx1ZWAgcHJvdG9jb2wuIFRoaXMgaXMgdXNlZFxuICogICAgIGludGVybmFsbHkgdG8gbWFyayBwcm9wZXJ0aWVzIHRoYXQgY29udGFpbiB0aGUgdmFsdWUgb2YgYSBjb21wbGV0ZWRcbiAqICAgICB0cmFuc2Zvcm1hdGlvbi4gSXQgaXMgb2YgbGl0dGxlIHVzZSBiZXlvbmQgdHJhbnNkdWNlciBhdXRob3JpbmcuXG4gKi9cblxuLyoqXG4gKiBUaGUgbWFwcGluZyBvZiBwcm90b2NvbCBuYW1lcyB0byB0aGVpciByZXNwZWN0aXZlIHByb3BlcnR5IGtleSBuYW1lcy5cbiAqXG4gKiBAdHlwZSB7bW9kdWxlOmNzcC5Qcm90b2NvbE1hcH1cbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKi9cbmNvbnN0IHByb3RvY29scyA9IE9iamVjdC5jcmVhdGUobnVsbCwge1xuICBpbml0OiB7XG4gICAgdmFsdWU6IFN5bWJvbC5mb3IoXCJyZWR1Y2VyL2luaXRcIilcbiAgfSxcbiAgc3RlcDoge1xuICAgIHZhbHVlOiBTeW1ib2wuZm9yKFwicmVkdWNlci9zdGVwXCIpXG4gIH0sXG4gIHJlc3VsdDoge1xuICAgIHZhbHVlOiBTeW1ib2wuZm9yKFwicmVkdWNlci9yZXN1bHRcIilcbiAgfSxcbiAgY29tcGxldGVkOiB7XG4gICAgdmFsdWU6IFN5bWJvbC5mb3IoXCJyZWR1Y2VyL2NvbXBsZXRlZFwiKVxuICB9LFxuICB2YWx1ZToge1xuICAgIHZhbHVlOiBTeW1ib2wuZm9yKFwicmVkdWNlci92YWx1ZVwiKVxuICB9XG59KTtcblxuZXhwb3J0IHsgcHJvdG9jb2xzIH07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuLyoqXG4gKiBQcm92aWRlcyBhbiBlZmZpY2llbnQgZ2VuZXJhbC1wdXJwb3NlIHF1ZXVlLlxuICpcbiAqIEBtb2R1bGUgY3NwL3F1ZXVlXG4gKiBAcHJpdmF0ZVxuICovXG5cbi8qKlxuICogQSBnZW5lcmFsIHB1cnBvc2UsIGhpZ2hseSBlZmZpY2llbnQgSmF2YVNjcmlwdCBxdWV1ZS4gSXQgaXMgYmFja2VkIGJ5IGFcbiAqIEphdmFTY3JpcHQgYXJyYXksIGJ1dCBpdCBkb2VzIG5vdCB1c2UgYHVuc2hpZnRgIHRvIHRha2UgZWxlbWVudHMgb2ZmIHRoZVxuICogYXJyYXkgYmVjYXVzZSB1bnNoaWZ0IGNhdXNlcyBlbGVtZW50cyB0byBiZSBjb3BpZWQgZXZlcnkgdGltZSBpdCdzIHVzZWQuXG4gKiBJbnN0ZWFkLCBhIHBvaW50ZXIgaXMgbWFpbnRhaW5lZCB0aGF0IGtlZXBzIHRyYWNrIG9mIHRoZSBsb2NhdGlvbiBvZiB0aGUgbmV4dFxuICogZWxlbWVudCB0byBiZSBkZXF1ZXVlZCwgYW5kIHdoZW4gdGhhdCBkZXF1ZXVlIGhhcHBlbnMsIHRoZSBwb2ludGVyIHNpbXBseVxuICogbW92ZXMuIFdoZW4gdGhlIGVtcHR5IHNwYWNlIGF0IHRoZSBoZWFkIG9mIHRoZSBhcnJheSBnZXRzIGxhcmdlIGVub3VnaCwgaXQnc1xuICogcmVtb3ZlZCBieSBhIHNpbmdsZSBzbGljZSBvcGVyYXRpb24uXG4gKlxuICogUHV0dGluZyBlbGVtZW50cyBpbnRvIHRoZSBxdWV1ZSBpcyBqdXN0IGRvbmUgd2l0aCBhIGJhc2ljIGBwdXNoYCwgd2hpY2ggKmlzKlxuICogaGlnaGx5IGVmZmljaWVudC5cbiAqXG4gKiBUaGlzIHR5cGUgb2YgcXVldWUgaXMgcG9zc2libGUgaW4gSmF2YVNjcmlwdCBiZWNhdXNlIEpTIGFycmF5cyBhcmUgcmVzaXphYmxlLlxuICogSW4gbGFuZ3VhZ2VzIHdpdGggZml4ZWQtc2l6ZSBhcnJheXMsIGEgcmVzaXppbmcgb3BlcmF0aW9uIHdvdWxkIGhhdmUgdG8gYmVcbiAqIHJ1biBlYWNoIHRpbWUgdGhlIHF1ZXVlIGZpbGxzLlxuICpcbiAqIEBuYW1lc3BhY2UgUXVldWVcbiAqIEBwcml2YXRlXG4gKi9cblxuLyoqXG4gKiBUaGUgdmFsdWUgcmV0dXJuZWQgd2hlbiBhIHF1ZXVlIGlzIHJlYWQgd2hlbiBpdCdzIGVtcHR5LlxuICpcbiAqIFRoaXMgc3BlY2lhbCB2YWx1ZSBpcyB1c2VkIGJlY2F1c2UgYG51bGxgIGFuZCBgdW5kZWZpbmVkYCBhcmUgcG9zc2libGVcbiAqIGxlZ2l0aW1hdGUgdmFsdWVzIHRoYXQgY2FuIGJlIHN0b3JlZCBpbiBhIHF1ZXVlLiBBbm90aGVyIG9wdGlvbiBpcyB0byB1c2VcbiAqIHNvbWUga2luZCBvZiBgTWF5YmVgIG9yIGBPcHRpb25gIHR5cGUsIGJ1dCB0aGF0IHJlcXVpcmVzIG1vcmUgZWZmb3J0IG9uIHRoZVxuICogcGFydCBvZiB0aGUgZW5kIHVzZXIgdG8gaW50ZXJmYWNlIHdpdGguXG4gKlxuICogQHR5cGUge1N5bWJvbH1cbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKi9cbmNvbnN0IEVNUFRZID0gU3ltYm9sKFwiRU1QVFlcIik7XG5cbi8qKlxuICogQSBtYXJrZXIgcHJvcGVydHkgbmFtZSB0byBpbmRpY2F0ZSB0aGF0IGFuIG9iamVjdCBpcyBpbiBmYWN0IGEgcXVldWUuXG4gKlxuICogQSBxdWV1ZSBoYXMgYSBwcm9wZXJ0eSB3aXRoIHRoaXMgbmFtZSB3aG9zZSByZWFkb25seSB2YWx1ZSBpcyBzZXQgdG8gYHRydWVgLlxuICogVGhpcyBpcyBub3QgbWVhbnQgdG8gYmUgcmVhZCBleGNlcHQgYnkgdGhlXG4gKiBge0BsaW5rIG1vZHVsZTpxdWV1ZS5pc1F1ZXVlfGlzUXVldWV9YCBmdW5jdGlvbi5cbiAqXG4gKiBAdHlwZSB7U3ltYm9sfVxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgUVVFVUUgPSBTeW1ib2woXCJRVUVVRVwiKTtcblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgYW4gb2JqZWN0IGlzIGEgcXVldWUuXG4gKlxuICogQHBhcmFtIHsqfSBvYmogVGhlIG9iamVjdCB0byBiZSB0ZXN0ZWQuXG4gKiBAcmV0dXJuIHtib29sZWFufSBFaXRoZXIgYHRydWVgIGlmIHRoZSBvYmplY3QgaXMgYSBxdWV1ZSBvciBgZmFsc2VgIGlmIGl0IGlzXG4gKiBub3QuXG4gKi9cbmZ1bmN0aW9uIGlzUXVldWUob2JqKSB7XG4gIHJldHVybiAhIW9iaj8uW1FVRVVFXTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IHF1ZXVlLiBUaGlzIHF1ZXVlIGlzIGNyZWF0ZWQgZW1wdHksIHdpdGggYSBiYWNraW5nIGFycmF5IG9mXG4gKiBsZW5ndGggMC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcC9xdWV1ZVxuICogQHJldHVybnMge21vZHVsZTpjc3AvcXVldWV+UXVldWV9IEEgbmV3LCBlbXB0eSBxdWV1ZS5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHF1ZXVlKCkge1xuICByZXR1cm4gT2JqZWN0LmNyZWF0ZShudWxsLCB7XG4gICAgc3RvcmU6IHtcbiAgICAgIHZhbHVlOiBbXSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSxcblxuICAgIHBvaW50ZXI6IHtcbiAgICAgIHZhbHVlOiAwLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9LFxuXG4gICAgW1FVRVVFXToge1xuICAgICAgdmFsdWU6IHRydWVcbiAgICB9XG4gIH0pO1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIG51bWJlciBvZiBlbGVtZW50cyBzdG9yZWQgaW4gYSBxdWV1ZS4gVGhpcyBtYXkgb3IgbWF5IG5vdCBlcXVhbFxuICogdGhlIGxlbmd0aCBvZiB0aGUgYmFja2luZyBzdG9yZSwgYXMgdGhlcmUgaXMgb2Z0ZW4gZW1wdHkgc3BhY2UgYXQgdGhlIGhlYWQgb2ZcbiAqIHRoZSBiYWNraW5nIHN0b3JlLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwL3F1ZXVlXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AvcXVldWV+UXVldWV9IHF1ZXVlIFRoZSBxdWV1ZSB3aG9zZSBpdGVtcyBhcmUgYmVpbmdcbiAqICAgICBjb3VudGVkLlxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgbnVtYmVyIG9mIGl0ZW1zIGluIHRoZSBxdWV1ZS5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNvdW50KHF1ZXVlKSB7XG4gIHJldHVybiBxdWV1ZS5zdG9yZS5sZW5ndGggLSBxdWV1ZS5wb2ludGVyO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhIHF1ZXVlIGlzIGVtcHR5LlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwL3F1ZXVlXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AvcXVldWV+UXVldWV9IHF1ZXVlIFRoZSBxdWV1ZSBiZWluZyBjaGVja2VkIGZvciBlbXB0aW5lc3MuXG4gKiBAcmV0dXJuIHtib29sZWFufSBFaXRoZXIgYHRydWVgIGlmIHRoZSBxdWV1ZSBpcyBlbXB0eSBvciBgZmFsc2VgIGlmIGl0IGlzXG4gKiAgICAgbm90LlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaXNFbXB0eShxdWV1ZSkge1xuICByZXR1cm4gcXVldWUuc3RvcmUubGVuZ3RoID09PSAwO1xufVxuXG4vKipcbiAqIEFkZHMgYW4gaXRlbSB0byBhIHF1ZXVlLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwL3F1ZXVlXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AvcXVldWV+UXVldWV9IHF1ZXVlIFRoZSBxdWV1ZSB3aGljaCBpcyBoYXZpbmcgYW4gaXRlbSBhZGRlZFxuICogICAgIHRvIGl0LlxuICogQHBhcmFtIHsqfSBpdGVtIFRoZSBpdGVtIGJlaW5nIGFkZGVkIHRvIHRoZSBxdWV1ZS5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGVucXVldWUocXVldWUsIGl0ZW0pIHtcbiAgcXVldWUuc3RvcmUucHVzaChpdGVtKTtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFuIGl0ZW0gZnJvbSBhIHF1ZXVlIGFuZCByZXR1cm5zIHRoYXQgaXRlbS4gSWYgdGhlIHJlbW92YWwgY2F1c2VzIHRoZVxuICogYW1vdW50IG9mIGVtcHR5IHNwYWNlIGF0IHRoZSBoZWFkIG9mIHRoZSBiYWNraW5nIHN0b3JlIHRvIGV4Y2VlZCBhIHRocmVzaG9sZCxcbiAqIHRoYXQgZW1wdHkgc3BhY2UgaXMgcmVtb3ZlZC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcC9xdWV1ZVxuICogQHBhcmFtIHttb2R1bGU6Y3NwL3F1ZXVlflF1ZXVlfSBxdWV1ZSBUaGUgcXVldWUgd2hvc2Ugb2xkZXN0IGl0ZW0gaXMgdG8gYmVcbiAqICAgICByZW1vdmVkLlxuICogQHJldHVybiB7Kn0gVGhlIG9sZGVzdCBzdG9yZWQgaXRlbSBpbiB0aGUgcXVldWUuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBkZXF1ZXVlKHF1ZXVlKSB7XG4gIGlmIChxdWV1ZS5zdG9yZS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gRU1QVFk7XG4gIH1cblxuICBjb25zdCBpdGVtID0gcXVldWUuc3RvcmVbcXVldWUucG9pbnRlcl07XG4gIC8vIFJlbW92ZXMgdGhlIGl0ZW1zIGluIHRoZSBiYWNraW5nIHN0b3JlIGJlZm9yZSB0aGUgY3VycmVudCBwb2ludGVyLCBpZiB0aGVyZVxuICAvLyBpcyBlbm91Z2ggXCJlbXB0eVwiIHNwYWNlIGJlZm9yZSB0aGUgcG9pbnRlciB0byBqdXN0aWZ5IGl0IChpLmUuLCB0aGUgdW51c2VkXG4gIC8vIHBvcnRpb24gaXMgYXQgbGVhc3QgaGFsZiBhcyBsYXJnZSBhcyB0aGUgdXNlZCBwb3J0aW9uKVxuICBpZiAoKytxdWV1ZS5wb2ludGVyICogMiA+PSBxdWV1ZS5zdG9yZS5sZW5ndGgpIHtcbiAgICBxdWV1ZS5zdG9yZSA9IHF1ZXVlLnN0b3JlLnNsaWNlKHF1ZXVlLnBvaW50ZXIpO1xuICAgIHF1ZXVlLnBvaW50ZXIgPSAwO1xuICB9XG4gIHJldHVybiBpdGVtO1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIG5leHQgaXRlbSBpbiBhIHF1ZXVlIHdpdGhvdXQgcmVtb3ZpbmcgaXQuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3AvcXVldWVcbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC9xdWV1ZX5RdWV1ZX0gcXVldWUgVGhlIHF1ZXVlIHdob3NlIG9sZGVzdCBpdGVtIGlzIHRvIGJlXG4gKiAgICAgcGVla2VkIGF0LlxuICogQHJldHVybiB7Kn0gVGhlIG9sZGVzdCBpdGVtIHN0b3JlZCBpbiB0aGUgcXVldWUuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBwZWVrKHF1ZXVlKSB7XG4gIHJldHVybiBxdWV1ZS5zdG9yZS5sZW5ndGggPT09IDAgPyBFTVBUWSA6IHF1ZXVlLnN0b3JlW3F1ZXVlLnBvaW50ZXJdO1xufVxuXG4vKipcbiAqIEZpbHRlcnMgb3V0IGFueSBpdGVtIGluIGEgcXVldWUgdGhhdCBkb2VzIG5vdCBjYXVzZSB0aGUgc3VwcGxpZWQgcHJlZGljYXRlXG4gKiBmdW5jdGlvbiB0byByZXR1cm4gYHRydWVgIHdoZW4gcGFzc2VkIHRoYXQgaXRlbS4gVGhpcyBpcyBub3QgZXhhY3RseSBhXG4gKiBnZW5lcmFsIHB1cnBvc2UgcXVldWUgb3BlcmF0aW9uLCBidXQgd2UgbmVlZCBpdCB3aXRoIGNoYW5uZWxzIHRoYXQgd2lsbFxuICogb2NjYXNpb25hbGx5IHdhbnQgdG8gZ2V0IHJpZCBvZiBpbmFjdGl2ZSBoYW5kbGVycy5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcC9xdWV1ZVxuICogQHBhcmFtIHttb2R1bGU6Y3NwL3F1ZXVlflF1ZXVlfSBxdWV1ZSBUaGUgcXVldWUgYmVpbmcgZmlsdGVyZWQuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmbiBUaGUgcHJlZGljYXRlIGZ1bmN0aW9uIHRoYXQgZGV0ZXJtaW5lcyB3aGV0aGVyIGFuXG4gKiAgICAgZWxlbWVudCByZW1haW5zIGluIHRoZSBxdWV1ZS5cbiAqL1xuZnVuY3Rpb24gZmlsdGVyKHF1ZXVlLCBwcmVkaWNhdGUpIHtcbiAgZm9yIChsZXQgaSA9IDAsIGVuZCA9IGNvdW50KHF1ZXVlKTsgaSA8IGVuZDsgaSsrKSB7XG4gICAgY29uc3QgaXRlbSA9IGRlcXVldWUocXVldWUpO1xuICAgIGlmIChwcmVkaWNhdGUoaXRlbSkpIHtcbiAgICAgIGVucXVldWUocXVldWUsIGl0ZW0pO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQge1xuICBFTVBUWSxcbiAgcXVldWUsXG4gIGlzUXVldWUsXG4gIGNvdW50LFxuICBpc0VtcHR5LFxuICBlbnF1ZXVlLFxuICBkZXF1ZXVlLFxuICBwZWVrLFxuICBmaWx0ZXJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9