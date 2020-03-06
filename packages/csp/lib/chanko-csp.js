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
 * @module chanko/channels
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
 * @memberof module:chanko/channels
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
 * @memberof module:chanko/channels
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
 * @memberof module:chanko/channels
 * @param {module:chanko/channels.SelectResult} data The value returned from the
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
 * transducer to `{@link module:chanko/channels.chan|chan}` or
 * `{@link module:chanko/channels.transChan|transChan}` and everything else will
 * be handled.
 *
 * @callback Transducer
 * @memberof module:chanko/channels
 * @param {module:chanko/channels.Transducer} xform A transducer to chain this
 *     transducer to.
 * @return {module:chanko/channels.Transducer} A new transducer consisting of
 *     the composition of this one and `xform`.
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
 * @private
 */

/**
 * A buffer that stores values sent to a buffered channel until a process
 * receives them.
 *
 * Different buffers differ only in the way that they determine whether they are
 * full and in what happens when a new value is added to a full buffer.
 *
 * @memberof module:chanko/channels
 * @typedef {(module:chanko/channels.FixedBuffer |
 *     module:chanko/channels.DroppingBuffer |
 *     module:chanko/channels.SlidingBuffer)} Buffer
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
 *
 * A buffer of this type exists only as an object that can be passed to a
 * channel creation function (such as {@link module:chanko/channels.chan|chan})
 * to make that channel a buffered channel. It doesn't have any properties that
 * are intended for external use.
 *
 * @typedef FixedBuffer
 * @memberof module:chanko/channels
 */

/**
 * Creates a fixed buffer of the specified capacity.
 *
 * A fixed buffer is a 'normal' buffer, one that stores and returns items on
 * demand. While it is capable of being over-filled, that ability is not used in
 * Chanko. A buffer that is full will cause the next put to its channel to block
 * until at least one item is removed from the buffer.
 *
 * This buffer is passed to `{@link module:chanko/channels.chan|chan}`, etc. to
 * create a buffered channel. It is not meant to be used directly.
 *
 * @memberof module:chanko/channels
 * @param {number} size The number of items that the new buffer can hold before
 *     it's full.
 * @return {module:chanko/channels.FixedBuffer} A new fixed buffer of the
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
 * A buffer of this type exists only as an object that can be passed to a
 * channel creation function (such as {@link module:chanko/channels.chan|chan})
 * to make that channel a buffered channel. It doesn't have any properties that
 * are intended for external use.
 *
 * @typedef DroppingBuffer
 * @memberof module:chanko/channels
 */

/**
 * Creates a dropping buffer of the specified capacity.
 *
 * A dropping buffer silently drops the item being added if the buffer is
 * already at capacity. Since adding a new item will always 'succeed' (even if
 * it succeeds by just ignoring the add), it is never considered full and
 * therefore a put to a channel buffered by a dropping buffer never blocks.
 *
 * This buffer is passed to `{@link module:chanko/channels.chan|chan}`, etc. to
 * create a buffered channel. It is not meant to be used directly.
 *
 * @memberof module:chanko/channels
 * @param {number} size The number of items that the new buffer can hold before
 *     newest items are dropped on add.
 * @return {module:chanko/channels.DroppingBuffer} A new dropping buffer of the
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
 * {@link module:chanko/channels.DroppingBuffer|DroppingBuffer}; the only
 * difference is in what happens when an item is added. In this buffer, the new
 * item is indeed added to the buffer, but in order to keep the count of the
 * buffer at or below its size, the oldest item in the buffer is silently
 * dropped.
 *
 * A buffer of this type exists only as an object that can be passed to a
 * channel creation function (such as {@link module:chanko/channels.chan|chan})
 * to make that channel a buffered channel. It doesn't have any properties that
 * are intended for external use.
 *
 * @typedef SlidingBuffer
 * @memberof module:chanko/channels
 */

/**
 * Creates a sliding buffer of the specified capacity.
 *
 * A sliding buffer drops the first-added (oldest) item already in the buffer if
 * a new item is added when the buffer is already at capacity. Since it's always
 * capable of having items added to it, it's never considered full, and
 * therefore a put to a channel buffered by a sliding buffer never blocks.
 *
 * This buffer is passed to `{@link module:chanko/channels.chan|chan}`, etc. to
 * create a buffered channel. It is not meant to be used directly.
 *
 * @memberof module:chanko/channels
 * @param {number} size The number of items that the new buffer can hold before
 *     oldest items are dropped on add.
 * @return {module:chanko/channels.SlidingBuffer} A new sliding buffer of the
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
 * @param {module:chanko/channels.Buffer} buffer The buffer whose queue is
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
 * @param {module:chanko/channels.Buffer} buffer The buffer whose current count
 *     is returned by this function.
 * @return {number} The number of items that the supplied buffer is holding.
 * @private
 */


function count(buffer) {
  return Object(modules_queue__WEBPACK_IMPORTED_MODULE_0__["count"])(buffer.queue);
}
/**
 * Determines whether a buffer is at capacity.
 *
 * @param {module:chanko/channels.Buffer} buffer The buffer who's being checked
 *     to see if it's at capacity.
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
 * @param {module:chanko/channels.Buffer} buffer The buffer where the supplied
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
 * @param {module:chanko/channels.Buffer} buffer The buffer from which an item
 *     is being removed.
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
 * @memberof module:chanko/channels
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
 * `{@link module:chanko/channels.chan|chan}`. However, this object is intended
 * to be used as a value to pass to channel operation functions; it doesn't have
 * any properties of interest to an end user.
 *
 * @memberof module:chanko/channels
 * @typedef Channel
 */

/**
 * Creates a channel. This is a low-level function;
 * `{@link module:chanko/channels.chan|chan}` performs some necessary
 * manipulations on arguments before using this function to perform the actual
 * creation.
 *
 * @memberof module:chanko/channel
 * @param {null | module:chanko/channels.Buffer} buffer An optional buffer that,
 *     if present, is used to create a buffered channel. If this is `null`, an
 *     unbuffered channel is created.
 * @param {module:chanko/channels.Transducer} xform The transducer used to
 *     transform values sent to the channel. If no transformations are
 *     necessary, a passthrough transducer should be provided.
 * @param {boolean} isTimed Indicates whether the channel is a timed channel.
 *     The timining mechanism is handled outside the channel, but this property
 *     is provided to be able to query whether that's the case.
 * @param {number} maxDirty=64 The maximum number of dirty operations to allow
 *     before they're purged.
 * @param {number} maxQueued=1024 The maximum number of operations that can be
 *     queued before new ones are rejected.
 * @return {module:chanko/channels.Channel} A new channel.
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
 * @param {module:chanko/channels.Channel} channel The channel that the value is
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
 * @param {module:chanko/channels.Channel} channel The channel that the value is
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
 * @memberof module:chanko/channels
 * @param {module:chanko/channels.Channel} channel The channel to be closed.
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
 * `{@link module:chanko/channels.fixed|fixed}`,
 * `{@link module:chanko/channels.dropping|dropping}`, and
 * `{@link module:chanko/channels.sliding|sliding}`.
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
 * @private
 */




/**
 * A handler function for exceptions that are thrown by a transducer while
 * transforming values on a channel.
 *
 * @param {object} err The error object that was thrown by the transducer.
 * @return {*} A value that should be put into the channel's buffer when the
 *     transducer throws the error. If this value is
 *     {@link module:chanko/channels.CLOSED|CLOSED}, then no value at all will be
 *     added to the buffer.
 * @callback ExceptionHandler
 * @private
 */

/**
 * The default exception handler, used when no exception handler is supplied to
 * `{@link handleException}`, `{@link wrapTransformer}`,
 * `{@link module:chanko/channels.chan|chan}`, or
 * `{@link module:chanko/channels.transChan|transChan}`. This default handler
 * merely returns `{@link module:chanko/channels.CLOSED|CLOSED}`, which will
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
 * {@link module:chanko/channels.CLOSED|CLOSED}, then it is *not* added to the
 * buffer.
 *
 * @param {module:chanko/channels.Buffer} buffer The buffer that backs the
 *     channel whose transducer's exceptions are being handled.
 * @param {module:chanko/channel~exceptionHandler} handler The exception
 *     handling function that is run when an error occurs in a transducer.
 * @param  {Object} ex The error object thrown by the transducer.
 * @return {module:chanko/channels.Buffer} The buffer itself. This is done to
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
 * `{@link module:chanko/channels.chan|chan}`.
 *
 * @param {(null|number|module:chanko/channels.Buffer)} buffer The buffer
 *     argument passed to `{@link module:chanko/channels.chan|chan}`.
 * @param {object} options The options argument passed to
 *     `{@link module:chanko/channels.chan|chan}`.
 * @param {object} defaultOptions Default values for options that might not have
 *     been sent to `{@link module:chanko/channels.chan|chan}`.
 * @return {object} An object containing the processed values of all of the
 *     arguments sent to `{@link module:chanko/channels.chan|chan}`.
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
 * `{@link module:chanko/channels.send|send}`,
 * `{@link module:chanko/channels.recv|recv}`, and
 * `{@link module:chanko/channels.select|select}` invocations, along with their
 * non-blocking variations
 * (`{@link module:chanko/channels.sendAsync|sendAsync}`,
 * `{@link module:chanko/channels.recvAsync|recvAsync}`, and
 * `{@link module:chanko/channels.selectAsync|selectAsync}`).
 *
 * If a buffer value is provided, it defines what buffer should back the
 * channel. If this is `null` or `0`, the channel will be unbuffered. If it's a
 * positive number, the channel will be buffered by a
 * `{@link module:chanko/channels.FixedBuffer|FixedBuffer} `of that size. If
 * it's a `{@link module:chanko/channels.Buffer|Buffer}` object, that object
 * will be used as the channel's buffer. If it's missing altogether, the channel
 * will be unbuffered unless a `transducer` option is provided (see below), in
 * which case it will be a
 * `{@link module:chanko/channels.FixedBuffer|FixedBuffer}` of size 1.
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
 * value is `{@link module:chanko/channels.CLOSED|CLOSED}`, then no value will
 * be put onto the channel upon handler completion.
 *
 * @memberof module:chanko/channels
 * @param {(number|module:chanko/channels.Buffer)} [buffer] The buffer object
 *     that should back this channel. If this is a positive number, a fixed
 *     buffer of that size will be created to back the channel. If it is `0` or
 *     `null`, the new channel will be unbuffered. If it's not present, the new
 *     channel will be unbuffered unless there is a `transducer` option, in in
 *     which case it will be buffered with a size 1
 *     `{@link module:chanko/channels.FixedBuffer|FixedBuffer}`.
 * @param {Object} [options] A set of options for configuring the channel's
 *     queue.
 * @param {module:chanko/channels.Transducer} [options.transducer] A transducer
 *     to run each value through before putting it onto the channel. This
 *     function should expect one parameter (another transducer that it's
 *     chained to) and return an object that conforms to the transducer
 *     protocol. If a transducer is provided on an unbuffered channel, an error
 *     will be thrown.
 * @param {module:chanko/channels.ExceptionHandler} [options.handler] An error
 *     handler that is run whenever an error occurs inside a transducer
 *     function. If that happens, this function is called with one parameter,
 *     which is the error object. The value that the handler returns (if it is
 *     not `{@link module:chanko/channels.CLOSED|CLOSED}`) will be put onto the
 *     channel when the handler finishes running.
 * @param {number} [options.maxDirty=64] The maximum number of dirty operations
 *     that can be in the queue before those operations are subject to being
 *     purged. Dirty operations are those that may not be valid anymore because
 *     they were in the list of operations passed to
 *     `{@link module:chanko/channels.select|select}` or
 *     `{@link module:chanko/channels.selectAsync|selectAsync}` but were not
 *     chosen to run. This provides a chance for a very minor performance tweak
 *     and is best left alone.
 * @param {number} [options.maxQueued=1024] The maximum number of operations
 *     that can be queued up at the same time. This prevents infinite loops from
 *     accidentally eating up all of the available memory.
 * @param {number} [options.timer] If this value is present, the channel will be
 *     a timed channel that closes automatically after this number of
 *     milliseconds.
 * @return {module:chanko/channels.Channel} A new channel.
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
 * @memberof module:chanko/channels
 * @param {number} delay The number of milliseconds after the channel is created
 *     that it will be closed automatically.
 * @return {module:chanko/channels.Channel} A new timed channel.
 */


function timedChan(delay = 0) {
  return chan({
    timer: delay
  });
}
/**
 * Creates a buffered channel with a transducer and optional error handler. The
 * buffer for this channel is a
 * `{@link module:chanko/channels.FixedBuffer|FixedBuffer}` of size 1. This is
 * the equivalent of `chan(1, { transducer, handler })`.
 *
 * @memberof module:chanko/channels
 * @param {module:chanko/channels.Transducer} transducer The transducer used to
 *     transform values on the new channel.
 * @param {module:chanko/channels.ExceptionHandler} [handler] An exception
 *     handler called with the error object as its only argument when an error
 *     happens inside a transducer. If this is not provided, a default handler
 *     is used that simply does nothing, including sending no output from the
 *     value that errored.
 * @return {module:chanko/channels.Channel} A new channel with a transducer.
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
 * `{@link module:chanko/channels.CLOSED|CLOSED}`.
 *
 * @memberof module:chanko/channels
 * @param {module:chanko/channels.Channel} channel The channel to check.
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
 * argument of `{@link module:chanko/channels.chan|chan}` or if a transducer is a
 * part of the channel.
 *
 * @memberof module:chanko/channels
 * @param {module:chanko/channels.Channel} channel The channel to check.
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
 * `{@link module:chanko/channels.chan|chan}` or with the
 * `{@link module:chanko/channels.timedChan|timedChan}` function. It will
 * automatically close after a certain period of time.
 *
 * @memberof module:chanko/channels
 * @param {module:chanko/channels.Channel} channel The channel to check.
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
 * `{@link module:chanko/channels.send|send}`.
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
 * @memberof module:chanko/channels
 * @param {*} [value] The value being put onto the channel.
 * @param {module:chanko/channels.OpCallback} [callback] A function that gets
 *     invoked either when the value is taken by another process or when the
 *     channel is closed. This function can take one parameter, which is `true`
 *     in the former case and `false` in the latter.
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
 * {@link module:chanko/channels.recv|recv}`.
 *
 * While the primary use of this function is to receive values from channels in
 * contexts where being inside an async function is impossible, it can still be
 * used inside async functions at times when it's important that the receive
 * doesn't block the function.
 *
 * The callback is a function of one parameter, and the value supplied for that
 * parameter is the value received from the channel (either a value that was
 * sent or `{@link module:chanko/channels.CLOSED|CLOSED}`). If the callback
 * isn't present, nothing will happen after the value is taken.
 *
 * @memberof module:chanko/channels
 * @param {module:chanko/channels.OpCallback} [callback] A function that gets
 *     invoked when a value is made available to be received (this value may be
 *     `{@link module:chanko/channels.CLOSED|CLOSED}` if the channel closes with
 *     no available value). The function can take one parameter, which is the
 *     value that is received from the channel.
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
 * `{@link module:chanko/channels.CLOSED|CLOSED}`.
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
 * @memberof module:chanko/channels
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
 * the special value `{@link module:chanko/channels.CLOSED|CLOSED}` is returned.
 *
 * @memberof module:chanko/channels
 * @return {Promise} A promise that will resolve to the value received from
 *     the channel once that receive is completed. If the channel closes
 *     without a value being made available, this will resolve to
 *     `{@link module:chanko/channels.CLOSED|CLOSED}`.
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
 * It functions in every way like `{@link module:chanko/channels.recv|recv}`
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
 * @memberof module:chanko/channels
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
 * `{@link module:chanko/channels.CLOSED|CLOSED}`. Any pending sends are
 * completed with the value of `false`.
 *
 * Note that the buffer is not emptied if there are still values remaining after
 * all of the pending receives have been handled. The channel will still provide
 * those values to any future receives, though no new values may be added to the
 * channel. Once the buffer is depleted, any future receives will return
 * `{@link module:chanko/channels.CLOSED|CLOSED}`.
 *
 * @memberof module:chanko/channels
 * @param {module:chanko/channels.Channel} channel The channel to be closed.
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
 * `{@link module:chanko/channels.send|send}` /
 * `{@link module:chanko/channels.recv|recv}` /
 * `{@link module:chanko/channels.select|select}` and
 * `{@link module:chanko/channels.sendAsync|sendAsync}` /
 * `{@link module:chanko/channels.recvAsync|recvAsync}` /
 * `{@link module:chanko/channels.selectAsync|selectAsync}`: while the unblocked
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
 * {@link module:chanko/channels.select|select}` or sent to the callback in
 * `{@link module:chanko/channels.selectAsync|selectAsync}` when the default is
 * returned as its value.
 *
 * This only happens when an `{@link module:chanko/channels.select|select} /
 * {@link module:chanko/channels.selectAsync|selectAsync}` call is performed,
 * all operations are initially blocking, and a `default` option is sent. The
 * immediate response in that situation is `{ value: options.default, channel:
 * DEFAULT }`.
 *
 * @type {Symbol}
 * @memberof module:chanko/channels
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
 * @property {module:chanko/channels.Channel} channel The channel upon which the
 *     selected operation happened.
 * @memberof module:chanko/channels
 */

/**
 * Creates a select result from its component properties.
 *
 * @memberof module:chanko/channel
 * @param {*} value If the `select` operation resulted in a receive, this is
 *     the value received from the channel. If it resulted in a send, this is
 *     `true` for a successful send and `false` if the channel closed first.
 * @param {module:chanko/channels.Channel} channel The channel upon which the
 *     selected operation happened.
 * @return {module:chanko/channels.SelectResult} The properties wrapped into an
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
 * `{@link module:chanko/channels.select|select}`.
 *
 * This function uses an operations list that's identical to the one used by
 * `{@link module:chanko/channels.select|select}`. It's an array of values; if a
 * value is a channel, then that operation is a take on that channel, while if
 * it's a two-element array of channel and value, then that operation is a put
 * of that value onto that channel. All options that are available to
 * `{@link module:chanko/channels.select|select}` are also available here.
 *
 * The callback is a function of one parameter, which in this case is an object
 * with `value` and `channel` properties.
 *
 * @memberof module:chanko/channels
 * @param {Object[]} operations A collection of elements that correspond to recv
 *     and send operations. A recv operation is signified by an element that is
 *     a channel (which is the channel to be received from). A send operation is
 *     specified by an element that is itself a two-element array, which has a
 *     channel followed by a value (which is the channel and value to be sent).
 * @param {module:chanko/channels.SelectCallback} callback A function that gets
 *     invoked when one of the operations completes.
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
 *     `{@link module:chanko/channels.DEFAULT|DEFAULT})`. If not set, the
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
 * `{@link module:chanko/channels.DEFAULT|DEFAULT}`.
 *
 * @memberof module:chanko/channels
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
 *     `{@link module:chanko/channels.DEFAULT|DEFAULT})`. If not set, the
 *     `select` call will block until one of the operations completes and that
 *     value and channel will be the ones returned.
 * @return {Promise<module:chanko/channels.SelectResult>} A promise that will
 *     resolve to an object of two properties: `value` will contain the value
 *     that would have been returned by the corresponding
 *     `{@link module:chanko/channels.send|send}` or
 *     `{@link module:chanko/channels.recv|recv}` operation; and `channel` will
 *     be a reference to the channel that completed the operation to allow
 *     `select` to unblock.
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
 * @memberof module:chanko/channels
 * @param {module:chanko/channels.SelectResult} result The result coming from a
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
 * @memberof module:chanko/channels
 * @param {module:chanko/channels.SelectResult} result The result coming from a
 *     select operation.
 * @return {module:chanko/channels.Channel} The channel upon which the select
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
 * @see module:chanko/channel.config
 * @private
 */

const queue = Object(modules_queue__WEBPACK_IMPORTED_MODULE_0__["queue"])();
/**
 * The dispatch method option indicating that `setImmediate` should be used to
 * dispatch tasks.
 *
 * This is the default option. For environments that don't support
 * `setImmediate`, this falls back to
 * `{@link module:chanko/channels.MESSAGE_CHANNEL|MESSAGE_CHANNEL}`.
 *
 * @memberof module:chanko/channels
 * @type {Symbol}
 * @see {@link module:chanko/channels.config|config}
 */

const SET_IMMEDIATE = Symbol("SET_IMMEDIATE");
/**
 * The dispatch method option indicating that a `MessageChannel` should be used
 * to dispatch tasks.
 *
 * For environments that don't support `MessageChannel`, this falls back to
 * `{@link module:chanko/channels.SET_TIMEOUT|SET_TIMEOUT}`.
 *
 * @memberof module:chanko/channels
 * @type {Symbol}
 * @see {@link module:chanko/channels.config|config}
 */

const MESSAGE_CHANNEL = Symbol("MESSAGE_CHANNEL");
/**
 * The dispatch method option indicating that `setTimeout` should be used to
 * dispatch tasks.
 *
 * This method is always available, but it's also always less efficient than any
 * other method, so it should be used as a last resort.
 *
 * @memberof module:chanko/channels
 * @type {Symbol}
 * @see  {@link module:chanko/channels.config|config}
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
 * that can be set with `{@link module:chanko/channels.config|config}`.
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
 * `{@link module:chanko/channels.SET_IMMEDIATE|SET_IMMEDIATE}` can still be
 * recorded as the dispatch method, but this function will return
 * `{@link module:chanko/channels.MESSAGE_CHANNEL|MESSAGE_CHANNEL}`.
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
 * from the {@link module:chanko/channels.config} function, and it may also be
 * passed to the same function (though each property is optional in that case).
 *
 * @typedef {object} DispatcherConfig
 * @memberof module:chanko/channels
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
 * @memberof module:chanko/channels
 * @param {Object} opts A mapping of options to their new values. Extra values
 *     (properties that are not options) are ignored.
 * @param {number} [opts.batchSize] The maximum number of tasks that the
 *     dispatcher will run in a single batch (initially, this is 1024). If the
 *     number of pending tasks exceeds this, the remaining are not discarded.
 *     They're simply run as part of another batch after the current batch
 *     completes.
 * @param {Symbol} [opts.dispatchMethod] The method used to dispatch a process
 *     into a separate line of execution. Possible values are
 *     `{@link module:chanko/channels.SET_IMMEDIATE|SET_IMMEDIATE}`,
 *     `{@link module:chanko/channels.MESSAGE_CHANNEL|MESSAGE_CHANNEL}`, or
 *     `{@link module:chanko/channels.SET_TIMEOUT|SET_TIMEOUT}`, with the
 *     initial being
 *     `{@link module:chanko/channels.SET_IMMEDIATE|SET_IMMEDIATE}`. If a method
 *     is set but is not available in that environment, then it will silently
 *     fall back to the next method that is available.
 * @return {module:chanko/channels.DispatcherConfig} The configuration
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
 * @memberof module:chanko/channels
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
 * @memberof module:chanko/channels
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
 * @memberof module:chanko/channels
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
 * @type {module:chanko/protocol~protocolMap}
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
 * @memberof module:chanko/channels
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
 * @private
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
 * @private
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGFua28vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2NoYW5rby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jaGFua28vL2hvbWUvYmFyYW5kaXMvRGV2ZWxvcG1lbnQvcHJvamVjdHMvY2hhbmtvL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL0FzeW5jR2VuZXJhdG9yLmpzIiwid2VicGFjazovL2NoYW5rby8vaG9tZS9iYXJhbmRpcy9EZXZlbG9wbWVudC9wcm9qZWN0cy9jaGFua28vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvQXdhaXRWYWx1ZS5qcyIsIndlYnBhY2s6Ly9jaGFua28vL2hvbWUvYmFyYW5kaXMvRGV2ZWxvcG1lbnQvcHJvamVjdHMvY2hhbmtvL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2F3YWl0QXN5bmNHZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vY2hhbmtvLy9ob21lL2JhcmFuZGlzL0RldmVsb3BtZW50L3Byb2plY3RzL2NoYW5rby9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy93cmFwQXN5bmNHZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vY2hhbmtvLy9ob21lL2JhcmFuZGlzL0RldmVsb3BtZW50L3Byb2plY3RzL2NoYW5rby9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovL2NoYW5rby8vaG9tZS9iYXJhbmRpcy9EZXZlbG9wbWVudC9wcm9qZWN0cy9jaGFua28vbm9kZV9tb2R1bGVzL3NldGltbWVkaWF0ZS9zZXRJbW1lZGlhdGUuanMiLCJ3ZWJwYWNrOi8vY2hhbmtvLy9ob21lL2JhcmFuZGlzL0RldmVsb3BtZW50L3Byb2plY3RzL2NoYW5rby9ub2RlX21vZHVsZXMvdGltZXJzLWJyb3dzZXJpZnkvbWFpbi5qcyIsIndlYnBhY2s6Ly9jaGFua28vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovL2NoYW5rby8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9jaGFua28vLi9zcmMvbW9kdWxlcy9idWZmZXIuanMiLCJ3ZWJwYWNrOi8vY2hhbmtvLy4vc3JjL21vZHVsZXMvY2hhbm5lbC9oYW5kbGVyLmpzIiwid2VicGFjazovL2NoYW5rby8uL3NyYy9tb2R1bGVzL2NoYW5uZWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2hhbmtvLy4vc3JjL21vZHVsZXMvY2hhbm5lbC9zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vY2hhbmtvLy4vc3JjL21vZHVsZXMvZGlzcGF0Y2hlci5qcyIsIndlYnBhY2s6Ly9jaGFua28vLi9zcmMvbW9kdWxlcy9wcm9jZXNzLmpzIiwid2VicGFjazovL2NoYW5rby8uL3NyYy9tb2R1bGVzL3Byb3RvY29sLmpzIiwid2VicGFjazovL2NoYW5rby8uL3NyYy9tb2R1bGVzL3F1ZXVlLmpzIl0sIm5hbWVzIjpbIkJVRkZFUiIsIlN5bWJvbCIsIkZJWEVEIiwiRFJPUFBJTkciLCJTTElESU5HIiwiaXNCdWZmZXIiLCJvYmoiLCJmaXhlZCIsInNpemUiLCJPYmplY3QiLCJjcmVhdGUiLCJxdWV1ZSIsInZhbHVlIiwicSIsImRyb3BwaW5nIiwic2xpZGluZyIsImJ1ZmZlciIsImNvdW50IiwicUNvdW50IiwiaXNGdWxsIiwiYWRkIiwiaXRlbXMiLCJpdGVtIiwiZW5xdWV1ZSIsImRlcXVldWUiLCJyZW1vdmUiLCJNQVhfRElSVFkiLCJNQVhfUVVFVUVEIiwiQ0xPU0VEIiwiQk9YIiwiaXNCb3giLCJpc1JlZHVjZWQiLCJwIiwicmVkdWNlZCIsImJveCIsIndyaXRhYmxlIiwic2VuZEJveCIsImhhbmRsZXIiLCJjaGFubmVsIiwieGZvcm0iLCJpc1RpbWVkIiwibWF4RGlydHkiLCJtYXhRdWV1ZWQiLCJyZWN2cyIsInNlbmRzIiwiZGlydHlSZWN2cyIsImRpcnR5U2VuZHMiLCJjbG9zZWQiLCJpc0J1ZmZlcmVkIiwiaGFuZGxlU2VuZCIsIkVycm9yIiwiY29tbWl0IiwicmVjZWl2ZXIiLCJjYWxsYmFjayIsImRvbmUiLCJzdGVwIiwiRU1QVFkiLCJhY3RpdmUiLCJ2YWwiLCJkaXNwYXRjaCIsImNsb3NlIiwiZmlsdGVyIiwic2VuZGVyIiwiaGFuZGxlUmVjdiIsInNlbmRIYW5kbGVyIiwicmVzdWx0IiwiREVGQVVMVF9IQU5ETEVSIiwib3BIYW5kbGVyIiwiZm4iLCJoYW5kbGVFeGNlcHRpb24iLCJleCIsImhhbmRsZXJUcmFuc2R1Y2VyIiwiaW5wdXQiLCJidWZmZXJSZWR1Y2VyIiwiaW5pdCIsInBhcnNlQXJncyIsIm9wdGlvbnMiLCJkZWZhdWx0T3B0aW9ucyIsImJ1ZiIsIm9wdHMiLCJ0cmFuc2R1Y2VyIiwidGltZXIiLCJhc3NpZ24iLCJjaGFuIiwieGYiLCJjaCIsImNoYW5JbXBsIiwiaXRlcmF0b3IiLCJyZWN2IiwiYXN5bmNJdGVyYXRvciIsInNldFRpbWVvdXQiLCJjbG9zZUltcGwiLCJ0aW1lZENoYW4iLCJkZWxheSIsInRyYW5zQ2hhbiIsImlzQ2xvc2VkIiwic2VuZEFzeW5jIiwicmVjdkFzeW5jIiwic2VuZCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVjdk9yVGhyb3ciLCJyZWplY3QiLCJwcm90b3R5cGUiLCJpc1Byb3RvdHlwZU9mIiwiY2FsbCIsIkRFRkFVTFQiLCJzZWxlY3RIYW5kbGVyIiwiZ2V0IiwicmFuZG9tQXJyYXkiLCJ1cHBlciIsImFycmF5IiwiayIsInB1c2giLCJqIiwiaSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInRlbXAiLCJzZWxlY3RSZXN1bHQiLCJzZWxlY3RBc3luYyIsIm9wcyIsImxlbmd0aCIsInByaW9yaXR5IiwiaW5kaWNlcyIsImNyZWF0ZVNlbGVjdEhhbmRsZXIiLCJvcCIsIkFycmF5IiwiaXNBcnJheSIsImhhc093blByb3BlcnR5IiwiZGVmYXVsdCIsInNlbGVjdCIsIlNFVF9JTU1FRElBVEUiLCJNRVNTQUdFX0NIQU5ORUwiLCJTRVRfVElNRU9VVCIsImJhdGNoU2l6ZSIsImRpc3BhdGNoTWV0aG9kIiwiZGlzcGF0Y2hlciIsImNyZWF0ZURpc3BhdGNoZXIiLCJydW5uaW5nIiwicXVldWVkIiwiY2FsY0Rpc3BhdGNoTWV0aG9kIiwic2V0SW1tZWRpYXRlIiwicHJvY2Vzc1Rhc2tzIiwiTWVzc2FnZUNoYW5uZWwiLCJwb3J0MSIsIm9ubWVzc2FnZSIsInBvcnQyIiwicG9zdE1lc3NhZ2UiLCJ0YXNrIiwic2V0RGlzcGF0Y2hlciIsImNvbmZpZyIsImtleSIsInNsZWVwIiwiZ28iLCJhcmdzIiwiam9pbiIsImZucyIsImFsbCIsInByb3RvY29scyIsImZvciIsIlFVRVVFIiwiaXNRdWV1ZSIsInN0b3JlIiwicG9pbnRlciIsImlzRW1wdHkiLCJzbGljZSIsInBlZWsiLCJwcmVkaWNhdGUiLCJlbmQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsaUJBQWlCLG1CQUFPLENBQUMsNkVBQWM7O0FBRXZDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsZ0M7Ozs7Ozs7Ozs7O0FDbkdBO0FBQ0E7QUFDQTs7QUFFQSw2Qjs7Ozs7Ozs7Ozs7QUNKQSxpQkFBaUIsbUJBQU8sQ0FBQyw2RUFBYzs7QUFFdkM7QUFDQTtBQUNBOztBQUVBLHNDOzs7Ozs7Ozs7OztBQ05BLHFCQUFxQixtQkFBTyxDQUFDLHFGQUFrQjs7QUFFL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQzs7Ozs7Ozs7Ozs7QUNSQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDOztBQUVyQztBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixVQUFVOzs7Ozs7Ozs7Ozs7QUN2THRDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixpQkFBaUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBDQUEwQyxzQkFBc0IsRUFBRTtBQUNsRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ3pMRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsbUJBQU8sQ0FBQyxxRUFBYztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM5REE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDOzs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7OztBQU9BOzs7Ozs7OztBQVNBO0FBQ0E7QUFtQkE7QUFNQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQWVBOzs7Ozs7Ozs7Ozs7O0FBYUE7Ozs7Ozs7Ozs7Ozs7O0FBY0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7OztBQU9BOzs7Ozs7OztBQVNB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S0FBSyxDQUFDMEosT0FBbEIsQ0FBMUM7QUFDRDtBQUVEOzs7Ozs7Ozs7Ozs7QUFVQSxTQUFTeEcsTUFBVCxDQUFnQmxELEtBQWhCLEVBQXVCOEosU0FBdkIsRUFBa0M7QUFDaEMsT0FBSyxJQUFJdEQsQ0FBQyxHQUFHLENBQVIsRUFBV3VELEdBQUcsR0FBR3pKLEtBQUssQ0FBQ04sS0FBRCxDQUEzQixFQUFvQ3dHLENBQUMsR0FBR3VELEdBQXhDLEVBQTZDdkQsQ0FBQyxFQUE5QyxFQUFrRDtBQUNoRCxVQUFNN0YsSUFBSSxHQUFHRSxPQUFPLENBQUNiLEtBQUQsQ0FBcEI7O0FBQ0EsUUFBSThKLFNBQVMsQ0FBQ25KLElBQUQsQ0FBYixFQUFxQjtBQUNuQkMsYUFBTyxDQUFDWixLQUFELEVBQVFXLElBQVIsQ0FBUDtBQUNEO0FBQ0Y7QUFDRiIsImZpbGUiOiJjaGFua28tY3NwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiY2hhbmtvXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImNoYW5rb1wiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwidmFyIEF3YWl0VmFsdWUgPSByZXF1aXJlKFwiLi9Bd2FpdFZhbHVlXCIpO1xuXG5mdW5jdGlvbiBBc3luY0dlbmVyYXRvcihnZW4pIHtcbiAgdmFyIGZyb250LCBiYWNrO1xuXG4gIGZ1bmN0aW9uIHNlbmQoa2V5LCBhcmcpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlcXVlc3QgPSB7XG4gICAgICAgIGtleToga2V5LFxuICAgICAgICBhcmc6IGFyZyxcbiAgICAgICAgcmVzb2x2ZTogcmVzb2x2ZSxcbiAgICAgICAgcmVqZWN0OiByZWplY3QsXG4gICAgICAgIG5leHQ6IG51bGxcbiAgICAgIH07XG5cbiAgICAgIGlmIChiYWNrKSB7XG4gICAgICAgIGJhY2sgPSBiYWNrLm5leHQgPSByZXF1ZXN0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZnJvbnQgPSBiYWNrID0gcmVxdWVzdDtcbiAgICAgICAgcmVzdW1lKGtleSwgYXJnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc3VtZShrZXksIGFyZykge1xuICAgIHRyeSB7XG4gICAgICB2YXIgcmVzdWx0ID0gZ2VuW2tleV0oYXJnKTtcbiAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgIHZhciB3cmFwcGVkQXdhaXQgPSB2YWx1ZSBpbnN0YW5jZW9mIEF3YWl0VmFsdWU7XG4gICAgICBQcm9taXNlLnJlc29sdmUod3JhcHBlZEF3YWl0ID8gdmFsdWUud3JhcHBlZCA6IHZhbHVlKS50aGVuKGZ1bmN0aW9uIChhcmcpIHtcbiAgICAgICAgaWYgKHdyYXBwZWRBd2FpdCkge1xuICAgICAgICAgIHJlc3VtZShrZXkgPT09IFwicmV0dXJuXCIgPyBcInJldHVyblwiIDogXCJuZXh0XCIsIGFyZyk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0dGxlKHJlc3VsdC5kb25lID8gXCJyZXR1cm5cIiA6IFwibm9ybWFsXCIsIGFyZyk7XG4gICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIHJlc3VtZShcInRocm93XCIsIGVycik7XG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHNldHRsZShcInRocm93XCIsIGVycik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2V0dGxlKHR5cGUsIHZhbHVlKSB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIFwicmV0dXJuXCI6XG4gICAgICAgIGZyb250LnJlc29sdmUoe1xuICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICBkb25lOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBcInRocm93XCI6XG4gICAgICAgIGZyb250LnJlamVjdCh2YWx1ZSk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBmcm9udC5yZXNvbHZlKHtcbiAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgZG9uZTogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGZyb250ID0gZnJvbnQubmV4dDtcblxuICAgIGlmIChmcm9udCkge1xuICAgICAgcmVzdW1lKGZyb250LmtleSwgZnJvbnQuYXJnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYmFjayA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgdGhpcy5faW52b2tlID0gc2VuZDtcblxuICBpZiAodHlwZW9mIGdlbltcInJldHVyblwiXSAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdGhpc1tcInJldHVyblwiXSA9IHVuZGVmaW5lZDtcbiAgfVxufVxuXG5pZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5hc3luY0l0ZXJhdG9yKSB7XG4gIEFzeW5jR2VuZXJhdG9yLnByb3RvdHlwZVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG59XG5cbkFzeW5jR2VuZXJhdG9yLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKGFyZykge1xuICByZXR1cm4gdGhpcy5faW52b2tlKFwibmV4dFwiLCBhcmcpO1xufTtcblxuQXN5bmNHZW5lcmF0b3IucHJvdG90eXBlW1widGhyb3dcIl0gPSBmdW5jdGlvbiAoYXJnKSB7XG4gIHJldHVybiB0aGlzLl9pbnZva2UoXCJ0aHJvd1wiLCBhcmcpO1xufTtcblxuQXN5bmNHZW5lcmF0b3IucHJvdG90eXBlW1wicmV0dXJuXCJdID0gZnVuY3Rpb24gKGFyZykge1xuICByZXR1cm4gdGhpcy5faW52b2tlKFwicmV0dXJuXCIsIGFyZyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFzeW5jR2VuZXJhdG9yOyIsImZ1bmN0aW9uIF9Bd2FpdFZhbHVlKHZhbHVlKSB7XG4gIHRoaXMud3JhcHBlZCA9IHZhbHVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9Bd2FpdFZhbHVlOyIsInZhciBBd2FpdFZhbHVlID0gcmVxdWlyZShcIi4vQXdhaXRWYWx1ZVwiKTtcblxuZnVuY3Rpb24gX2F3YWl0QXN5bmNHZW5lcmF0b3IodmFsdWUpIHtcbiAgcmV0dXJuIG5ldyBBd2FpdFZhbHVlKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXdhaXRBc3luY0dlbmVyYXRvcjsiLCJ2YXIgQXN5bmNHZW5lcmF0b3IgPSByZXF1aXJlKFwiLi9Bc3luY0dlbmVyYXRvclwiKTtcblxuZnVuY3Rpb24gX3dyYXBBc3luY0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBuZXcgQXN5bmNHZW5lcmF0b3IoZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3dyYXBBc3luY0dlbmVyYXRvcjsiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiKGZ1bmN0aW9uIChnbG9iYWwsIHVuZGVmaW5lZCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgaWYgKGdsb2JhbC5zZXRJbW1lZGlhdGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBuZXh0SGFuZGxlID0gMTsgLy8gU3BlYyBzYXlzIGdyZWF0ZXIgdGhhbiB6ZXJvXG4gICAgdmFyIHRhc2tzQnlIYW5kbGUgPSB7fTtcbiAgICB2YXIgY3VycmVudGx5UnVubmluZ0FUYXNrID0gZmFsc2U7XG4gICAgdmFyIGRvYyA9IGdsb2JhbC5kb2N1bWVudDtcbiAgICB2YXIgcmVnaXN0ZXJJbW1lZGlhdGU7XG5cbiAgICBmdW5jdGlvbiBzZXRJbW1lZGlhdGUoY2FsbGJhY2spIHtcbiAgICAgIC8vIENhbGxiYWNrIGNhbiBlaXRoZXIgYmUgYSBmdW5jdGlvbiBvciBhIHN0cmluZ1xuICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGNhbGxiYWNrID0gbmV3IEZ1bmN0aW9uKFwiXCIgKyBjYWxsYmFjayk7XG4gICAgICB9XG4gICAgICAvLyBDb3B5IGZ1bmN0aW9uIGFyZ3VtZW50c1xuICAgICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpICsgMV07XG4gICAgICB9XG4gICAgICAvLyBTdG9yZSBhbmQgcmVnaXN0ZXIgdGhlIHRhc2tcbiAgICAgIHZhciB0YXNrID0geyBjYWxsYmFjazogY2FsbGJhY2ssIGFyZ3M6IGFyZ3MgfTtcbiAgICAgIHRhc2tzQnlIYW5kbGVbbmV4dEhhbmRsZV0gPSB0YXNrO1xuICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUobmV4dEhhbmRsZSk7XG4gICAgICByZXR1cm4gbmV4dEhhbmRsZSsrO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFySW1tZWRpYXRlKGhhbmRsZSkge1xuICAgICAgICBkZWxldGUgdGFza3NCeUhhbmRsZVtoYW5kbGVdO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJ1bih0YXNrKSB7XG4gICAgICAgIHZhciBjYWxsYmFjayA9IHRhc2suY2FsbGJhY2s7XG4gICAgICAgIHZhciBhcmdzID0gdGFzay5hcmdzO1xuICAgICAgICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJ1bklmUHJlc2VudChoYW5kbGUpIHtcbiAgICAgICAgLy8gRnJvbSB0aGUgc3BlYzogXCJXYWl0IHVudGlsIGFueSBpbnZvY2F0aW9ucyBvZiB0aGlzIGFsZ29yaXRobSBzdGFydGVkIGJlZm9yZSB0aGlzIG9uZSBoYXZlIGNvbXBsZXRlZC5cIlxuICAgICAgICAvLyBTbyBpZiB3ZSdyZSBjdXJyZW50bHkgcnVubmluZyBhIHRhc2ssIHdlJ2xsIG5lZWQgdG8gZGVsYXkgdGhpcyBpbnZvY2F0aW9uLlxuICAgICAgICBpZiAoY3VycmVudGx5UnVubmluZ0FUYXNrKSB7XG4gICAgICAgICAgICAvLyBEZWxheSBieSBkb2luZyBhIHNldFRpbWVvdXQuIHNldEltbWVkaWF0ZSB3YXMgdHJpZWQgaW5zdGVhZCwgYnV0IGluIEZpcmVmb3ggNyBpdCBnZW5lcmF0ZWQgYVxuICAgICAgICAgICAgLy8gXCJ0b28gbXVjaCByZWN1cnNpb25cIiBlcnJvci5cbiAgICAgICAgICAgIHNldFRpbWVvdXQocnVuSWZQcmVzZW50LCAwLCBoYW5kbGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHRhc2sgPSB0YXNrc0J5SGFuZGxlW2hhbmRsZV07XG4gICAgICAgICAgICBpZiAodGFzaykge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IHRydWU7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcnVuKHRhc2spO1xuICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW1tZWRpYXRlKGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxOZXh0VGlja0ltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgcHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbiAoKSB7IHJ1bklmUHJlc2VudChoYW5kbGUpOyB9KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYW5Vc2VQb3N0TWVzc2FnZSgpIHtcbiAgICAgICAgLy8gVGhlIHRlc3QgYWdhaW5zdCBgaW1wb3J0U2NyaXB0c2AgcHJldmVudHMgdGhpcyBpbXBsZW1lbnRhdGlvbiBmcm9tIGJlaW5nIGluc3RhbGxlZCBpbnNpZGUgYSB3ZWIgd29ya2VyLFxuICAgICAgICAvLyB3aGVyZSBgZ2xvYmFsLnBvc3RNZXNzYWdlYCBtZWFucyBzb21ldGhpbmcgY29tcGxldGVseSBkaWZmZXJlbnQgYW5kIGNhbid0IGJlIHVzZWQgZm9yIHRoaXMgcHVycG9zZS5cbiAgICAgICAgaWYgKGdsb2JhbC5wb3N0TWVzc2FnZSAmJiAhZ2xvYmFsLmltcG9ydFNjcmlwdHMpIHtcbiAgICAgICAgICAgIHZhciBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhciBvbGRPbk1lc3NhZ2UgPSBnbG9iYWwub25tZXNzYWdlO1xuICAgICAgICAgICAgZ2xvYmFsLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXMgPSBmYWxzZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBnbG9iYWwucG9zdE1lc3NhZ2UoXCJcIiwgXCIqXCIpO1xuICAgICAgICAgICAgZ2xvYmFsLm9ubWVzc2FnZSA9IG9sZE9uTWVzc2FnZTtcbiAgICAgICAgICAgIHJldHVybiBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbFBvc3RNZXNzYWdlSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIC8vIEluc3RhbGxzIGFuIGV2ZW50IGhhbmRsZXIgb24gYGdsb2JhbGAgZm9yIHRoZSBgbWVzc2FnZWAgZXZlbnQ6IHNlZVxuICAgICAgICAvLyAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuL0RPTS93aW5kb3cucG9zdE1lc3NhZ2VcbiAgICAgICAgLy8gKiBodHRwOi8vd3d3LndoYXR3Zy5vcmcvc3BlY3Mvd2ViLWFwcHMvY3VycmVudC13b3JrL211bHRpcGFnZS9jb21tcy5odG1sI2Nyb3NzRG9jdW1lbnRNZXNzYWdlc1xuXG4gICAgICAgIHZhciBtZXNzYWdlUHJlZml4ID0gXCJzZXRJbW1lZGlhdGUkXCIgKyBNYXRoLnJhbmRvbSgpICsgXCIkXCI7XG4gICAgICAgIHZhciBvbkdsb2JhbE1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnNvdXJjZSA9PT0gZ2xvYmFsICYmXG4gICAgICAgICAgICAgICAgdHlwZW9mIGV2ZW50LmRhdGEgPT09IFwic3RyaW5nXCIgJiZcbiAgICAgICAgICAgICAgICBldmVudC5kYXRhLmluZGV4T2YobWVzc2FnZVByZWZpeCkgPT09IDApIHtcbiAgICAgICAgICAgICAgICBydW5JZlByZXNlbnQoK2V2ZW50LmRhdGEuc2xpY2UobWVzc2FnZVByZWZpeC5sZW5ndGgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBvbkdsb2JhbE1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGdsb2JhbC5hdHRhY2hFdmVudChcIm9ubWVzc2FnZVwiLCBvbkdsb2JhbE1lc3NhZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShtZXNzYWdlUHJlZml4ICsgaGFuZGxlLCBcIipcIik7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbE1lc3NhZ2VDaGFubmVsSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHZhciBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBoYW5kbGUgPSBldmVudC5kYXRhO1xuICAgICAgICAgICAgcnVuSWZQcmVzZW50KGhhbmRsZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIGNoYW5uZWwucG9ydDIucG9zdE1lc3NhZ2UoaGFuZGxlKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsUmVhZHlTdGF0ZUNoYW5nZUltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICB2YXIgaHRtbCA9IGRvYy5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICAvLyBDcmVhdGUgYSA8c2NyaXB0PiBlbGVtZW50OyBpdHMgcmVhZHlzdGF0ZWNoYW5nZSBldmVudCB3aWxsIGJlIGZpcmVkIGFzeW5jaHJvbm91c2x5IG9uY2UgaXQgaXMgaW5zZXJ0ZWRcbiAgICAgICAgICAgIC8vIGludG8gdGhlIGRvY3VtZW50LiBEbyBzbywgdGh1cyBxdWV1aW5nIHVwIHRoZSB0YXNrLiBSZW1lbWJlciB0byBjbGVhbiB1cCBvbmNlIGl0J3MgYmVlbiBjYWxsZWQuXG4gICAgICAgICAgICB2YXIgc2NyaXB0ID0gZG9jLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgICAgICAgICBzY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJ1bklmUHJlc2VudChoYW5kbGUpO1xuICAgICAgICAgICAgICAgIHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBudWxsO1xuICAgICAgICAgICAgICAgIGh0bWwucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgICAgICAgICBzY3JpcHQgPSBudWxsO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsU2V0VGltZW91dEltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgc2V0VGltZW91dChydW5JZlByZXNlbnQsIDAsIGhhbmRsZSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gSWYgc3VwcG9ydGVkLCB3ZSBzaG91bGQgYXR0YWNoIHRvIHRoZSBwcm90b3R5cGUgb2YgZ2xvYmFsLCBzaW5jZSB0aGF0IGlzIHdoZXJlIHNldFRpbWVvdXQgZXQgYWwuIGxpdmUuXG4gICAgdmFyIGF0dGFjaFRvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mICYmIE9iamVjdC5nZXRQcm90b3R5cGVPZihnbG9iYWwpO1xuICAgIGF0dGFjaFRvID0gYXR0YWNoVG8gJiYgYXR0YWNoVG8uc2V0VGltZW91dCA/IGF0dGFjaFRvIDogZ2xvYmFsO1xuXG4gICAgLy8gRG9uJ3QgZ2V0IGZvb2xlZCBieSBlLmcuIGJyb3dzZXJpZnkgZW52aXJvbm1lbnRzLlxuICAgIGlmICh7fS50b1N0cmluZy5jYWxsKGdsb2JhbC5wcm9jZXNzKSA9PT0gXCJbb2JqZWN0IHByb2Nlc3NdXCIpIHtcbiAgICAgICAgLy8gRm9yIE5vZGUuanMgYmVmb3JlIDAuOVxuICAgICAgICBpbnN0YWxsTmV4dFRpY2tJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChjYW5Vc2VQb3N0TWVzc2FnZSgpKSB7XG4gICAgICAgIC8vIEZvciBub24tSUUxMCBtb2Rlcm4gYnJvd3NlcnNcbiAgICAgICAgaW5zdGFsbFBvc3RNZXNzYWdlSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoZ2xvYmFsLk1lc3NhZ2VDaGFubmVsKSB7XG4gICAgICAgIC8vIEZvciB3ZWIgd29ya2Vycywgd2hlcmUgc3VwcG9ydGVkXG4gICAgICAgIGluc3RhbGxNZXNzYWdlQ2hhbm5lbEltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGRvYyAmJiBcIm9ucmVhZHlzdGF0ZWNoYW5nZVwiIGluIGRvYy5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpKSB7XG4gICAgICAgIC8vIEZvciBJRSA24oCTOFxuICAgICAgICBpbnN0YWxsUmVhZHlTdGF0ZUNoYW5nZUltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBGb3Igb2xkZXIgYnJvd3NlcnNcbiAgICAgICAgaW5zdGFsbFNldFRpbWVvdXRJbXBsZW1lbnRhdGlvbigpO1xuICAgIH1cblxuICAgIGF0dGFjaFRvLnNldEltbWVkaWF0ZSA9IHNldEltbWVkaWF0ZTtcbiAgICBhdHRhY2hUby5jbGVhckltbWVkaWF0ZSA9IGNsZWFySW1tZWRpYXRlO1xufSh0eXBlb2Ygc2VsZiA9PT0gXCJ1bmRlZmluZWRcIiA/IHR5cGVvZiBnbG9iYWwgPT09IFwidW5kZWZpbmVkXCIgPyB0aGlzIDogZ2xvYmFsIDogc2VsZikpO1xuIiwidmFyIHNjb3BlID0gKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgJiYgZ2xvYmFsKSB8fFxuICAgICAgICAgICAgKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmIHNlbGYpIHx8XG4gICAgICAgICAgICB3aW5kb3c7XG52YXIgYXBwbHkgPSBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHk7XG5cbi8vIERPTSBBUElzLCBmb3IgY29tcGxldGVuZXNzXG5cbmV4cG9ydHMuc2V0VGltZW91dCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFRpbWVvdXQoYXBwbHkuY2FsbChzZXRUaW1lb3V0LCBzY29wZSwgYXJndW1lbnRzKSwgY2xlYXJUaW1lb3V0KTtcbn07XG5leHBvcnRzLnNldEludGVydmFsID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgVGltZW91dChhcHBseS5jYWxsKHNldEludGVydmFsLCBzY29wZSwgYXJndW1lbnRzKSwgY2xlYXJJbnRlcnZhbCk7XG59O1xuZXhwb3J0cy5jbGVhclRpbWVvdXQgPVxuZXhwb3J0cy5jbGVhckludGVydmFsID0gZnVuY3Rpb24odGltZW91dCkge1xuICBpZiAodGltZW91dCkge1xuICAgIHRpbWVvdXQuY2xvc2UoKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gVGltZW91dChpZCwgY2xlYXJGbikge1xuICB0aGlzLl9pZCA9IGlkO1xuICB0aGlzLl9jbGVhckZuID0gY2xlYXJGbjtcbn1cblRpbWVvdXQucHJvdG90eXBlLnVucmVmID0gVGltZW91dC5wcm90b3R5cGUucmVmID0gZnVuY3Rpb24oKSB7fTtcblRpbWVvdXQucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuX2NsZWFyRm4uY2FsbChzY29wZSwgdGhpcy5faWQpO1xufTtcblxuLy8gRG9lcyBub3Qgc3RhcnQgdGhlIHRpbWUsIGp1c3Qgc2V0cyB1cCB0aGUgbWVtYmVycyBuZWVkZWQuXG5leHBvcnRzLmVucm9sbCA9IGZ1bmN0aW9uKGl0ZW0sIG1zZWNzKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcbiAgaXRlbS5faWRsZVRpbWVvdXQgPSBtc2Vjcztcbn07XG5cbmV4cG9ydHMudW5lbnJvbGwgPSBmdW5jdGlvbihpdGVtKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcbiAgaXRlbS5faWRsZVRpbWVvdXQgPSAtMTtcbn07XG5cbmV4cG9ydHMuX3VucmVmQWN0aXZlID0gZXhwb3J0cy5hY3RpdmUgPSBmdW5jdGlvbihpdGVtKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcblxuICB2YXIgbXNlY3MgPSBpdGVtLl9pZGxlVGltZW91dDtcbiAgaWYgKG1zZWNzID49IDApIHtcbiAgICBpdGVtLl9pZGxlVGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbiBvblRpbWVvdXQoKSB7XG4gICAgICBpZiAoaXRlbS5fb25UaW1lb3V0KVxuICAgICAgICBpdGVtLl9vblRpbWVvdXQoKTtcbiAgICB9LCBtc2Vjcyk7XG4gIH1cbn07XG5cbi8vIHNldGltbWVkaWF0ZSBhdHRhY2hlcyBpdHNlbGYgdG8gdGhlIGdsb2JhbCBvYmplY3RcbnJlcXVpcmUoXCJzZXRpbW1lZGlhdGVcIik7XG4vLyBPbiBzb21lIGV4b3RpYyBlbnZpcm9ubWVudHMsIGl0J3Mgbm90IGNsZWFyIHdoaWNoIG9iamVjdCBgc2V0aW1tZWRpYXRlYCB3YXNcbi8vIGFibGUgdG8gaW5zdGFsbCBvbnRvLiAgU2VhcmNoIGVhY2ggcG9zc2liaWxpdHkgaW4gdGhlIHNhbWUgb3JkZXIgYXMgdGhlXG4vLyBgc2V0aW1tZWRpYXRlYCBsaWJyYXJ5LlxuZXhwb3J0cy5zZXRJbW1lZGlhdGUgPSAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZi5zZXRJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiICYmIGdsb2JhbC5zZXRJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICh0aGlzICYmIHRoaXMuc2V0SW1tZWRpYXRlKTtcbmV4cG9ydHMuY2xlYXJJbW1lZGlhdGUgPSAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZi5jbGVhckltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBnbG9iYWwuY2xlYXJJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMgJiYgdGhpcy5jbGVhckltbWVkaWF0ZSk7XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuLyoqXG4gKiBBbGwgb2YgdGhlIHB1YmxpYy1mYWNpbmcgQ2hhbmtvIGZ1bmN0aW9ucyBhcmUgZ2F0aGVyZWQgaGVyZSBpbiBvbmUgcGxhY2UgdG9cbiAqIGJlIGV4cG9ydGVkIGFzIGEgd2hvbGUuIFRoaXMgaXMgYSBjb21wbGV0ZWx5IGZsYXQgbGlzdCBvZiBleHBvcnRzLCBhc1xuICogaW5sdWRpbmcgYW55IG9iamVjdCBsaXRlcmFscyBmb3IgZXhwb3J0ICh3aGljaCB3b3VsZCBiZSBuYXR1cmFsIGZvciBidWZmZXJzLFxuICogZm9yIGV4YW1wbGUpIHdvdWxkIGtlZXAgdHJlZS1zaGFraW5nIGZyb20gd29ya2luZyByaWdodC5cbiAqXG4gKiBAbW9kdWxlIGNoYW5rby9jaGFubmVsc1xuICovXG5cbmV4cG9ydCB7IGZpeGVkLCBkcm9wcGluZywgc2xpZGluZyB9IGZyb20gXCJtb2R1bGVzL2J1ZmZlclwiO1xuZXhwb3J0IHtcbiAgQ0xPU0VELFxuICBjaGFuLFxuICB0aW1lZENoYW4sXG4gIHRyYW5zQ2hhbixcbiAgc2VuZCxcbiAgcmVjdixcbiAgc2VuZEFzeW5jLFxuICByZWN2QXN5bmMsXG4gIHJlY3ZPclRocm93LFxuICBjbG9zZSxcbiAgaXNDbG9zZWQsXG4gIGlzQnVmZmVyZWQsXG4gIGlzVGltZWQsXG4gIHNlbGVjdCxcbiAgc2VsZWN0QXN5bmMsXG4gIHZhbHVlLFxuICBjaGFubmVsXG59IGZyb20gXCJtb2R1bGVzL2NoYW5uZWxcIjtcbmV4cG9ydCB7XG4gIGNvbmZpZyxcbiAgU0VUX0lNTUVESUFURSxcbiAgTUVTU0FHRV9DSEFOTkVMLFxuICBTRVRfVElNRU9VVFxufSBmcm9tIFwibW9kdWxlcy9kaXNwYXRjaGVyXCI7XG5leHBvcnQgeyBnbywgc2xlZXAsIGpvaW4gfSBmcm9tIFwibW9kdWxlcy9wcm9jZXNzXCI7XG5leHBvcnQgeyBFTVBUWSB9IGZyb20gXCJtb2R1bGVzL3F1ZXVlXCI7XG5cbi8qKlxuICogQW4gZXJyb3IgaGFuZGxpbmcgZnVuY2l0b24uIFRoaXMgaXMgdXNlZCB0byBoYW5kbGUgZXhjZXB0aW9ucyB0aHJvd24gaW4gYXN5bmNcbiAqIGZ1bmN0aW9ucyBhbmQgaW4gdHJhbnNkdWNlcnMuIFRoZSByZXR1cm4gdmFsdWUgb2YgYW4gZXhjZXB0aW9uIGhhbmRsZXIgaXNcbiAqIHR5cGljYWxseSBzZW50IHRvIGEgY2hhbm5lbDsgaWYgdGhlIGV4Y2VwdGlvbiBoYXBwZW5lZCB3aXRoaW4gYW4gYXN5bmNcbiAqIGZ1bmN0aW9uLCBpdCB3aWxsIGJlIHNlbnQgdG8gdGhhdCBmdW5jdGlvbidzIG91dHB1dCBjaGFubmVsLCBhbmQgaWYgdGhlXG4gKiBleGNwZXRpb24gaGFwcGVuZWQgaW4gYSB0cmFuc2R1Y2VyLCBpdCB3aWxsIGJlIHNlbnQgdG8gdGhlIGNoYW5uZWwgdG8gd2hpY2hcbiAqIHRoZSB0cmFuc2R1Y2VyIGlzIGF0dGFjaGVkLlxuICpcbiAqIEBjYWxsYmFjayBFeGNlcHRpb25IYW5kbGVyXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNoYW5rby9jaGFubmVsc1xuICogQHBhcmFtIHtvYmplY3R9IGVyciBUaGUgZXJyb3Igb2JqZWN0IHRoYXQgd2FzIHRocm93biB0byBjYXVzZSB0aGUgZXJyb3IgdG9cbiAqICAgICBoYXZlIHRvIGJlIGhhbmRsZWQuXG4gKiBAcmV0dXJuIHsqfSBBIHZhbHVlIGRlY2lkZWQgYnkgdGhlIGhhbmRsZXIgdGhhdCB3aWxsIGJlIHNlbnQgdG8gYSBjaGFubmVsLlxuICovXG5cbi8qKlxuICogQSBjYWxsYmFjayB0aGF0J3MgcnVuIHdoZW4gYSBub24tYmxvY2tpbmcgY2hhbm5lbCBvcGVyYXRpb24gY29tcGxldGVzLiBUaGVcbiAqIHZhbHVlIHRoYXQgdGhpcyBmdW5jdGlvbiByZWNlaXZlcyBpcyBpZGVudGljYWwgdG8gd2hhdCBpcyByZXR1cm5lZCBieSBhXG4gKiBibG9ja2luZyBjYWxsOiB0aGUgdmFsdWUgcmVjZWl2ZWQgZnJvbSB0aGUgY2hhbm5lbCBmb3IgYSBgcmVjdmAsIG9yIGB0cnVlYCBvclxuICogYGZhbHNlYCBkZXBlbmRpbmcgb24gdGhlIGNoYW5uZWwgc3RhdHVzIGZvciBhIGBzZW5kYC4gQW55IHJldHVybiB2YWx1ZSBmcm9tXG4gKiB0aGlzIGNhbGxiYWNrIGlzIGlnbm9yZWQuXG4gKlxuICogQGNhbGxiYWNrIE9wQ2FsbGJhY2tcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y2hhbmtvL2NoYW5uZWxzXG4gKiBAcGFyYW0geyp9IHZhbHVlIEVpdGhlciB0aGUgdmFsdWUgcmVjZWl2ZWQgZnJvbSB0aGUgY2hhbm5lbCwgb3Igd2hldGhlciBvclxuICogbm90IGEgdmFsdWUgd2FzIHN1Y2Nlc3NmdWxseSBzZW50LlxuICovXG5cbi8qKlxuICogQSBjYWxsYmFjayB0aGF0J3MgcnVuIHdoZW4gYSBub24tYmxvY2tpbmcgYHNlbGVjdGAgb3BlcmF0aW9uIGNvbXBsZXRlcy4gVGhlXG4gKiB2YWx1ZSB0aGF0IHRoaXMgZnVuY3Rpb24gcmVjZWl2ZXMgaXMgYW4gb2JqZWN0IHdpdGggdHdvIHByb3BlcnRpZXM6IHRoZSB2YWx1ZVxuICogdGhhdCB0aGUgYHNlbGVjdGAgb3BlcmF0aW9uIGNvbXBsZXRlZCB3aXRoIChlaXRoZXIgdGhlIHZhbHVlIHJlY2VpdmVkIGZyb21cbiAqIHRoZSBjaGFubmVsIGluIGEgcmVjZWl2ZSBvcGVyYXRpb24sIG9yIGB0cnVlYCBvciBgZmFsc2VgIGluIGEgc2VuZFxuICogb3BlcmF0aW9uKSwgYWxvbmcgd2l0aCB0aGUgY2hhbm5lbCB3aGVyZSB0aGUgb3BlcmF0aW9uIGFjdHVhbGx5IGhhcHBlbmVkLiBBbnlcbiAqIHJldHVybiB2YWx1ZSBmcm9tIHRoaXMgY2FsbGJhY2sgaXMgaWdub3JlZC5cbiAqXG4gKiBAY2FsbGJhY2sgU2VsZWN0Q2FsbGJhY2tcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y2hhbmtvL2NoYW5uZWxzXG4gKiBAcGFyYW0ge21vZHVsZTpjaGFua28vY2hhbm5lbHMuU2VsZWN0UmVzdWx0fSBkYXRhIFRoZSB2YWx1ZSByZXR1cm5lZCBmcm9tIHRoZVxuICogICAgIHNlbGVjdCBvcGVyYXRpb24uXG4gKi9cblxuLyoqXG4gKiBBIGZ1bmN0aW9uIHRoYXQgdHJhbnNmb3JtcyBkYXRhIGFuZCBjYW4gYmUgY29tcG9zZWQgd2l0aCBvdGhlciB0cmFuc2R1Y2Vyc1xuICogaW50byBhIHNpbmdsZSB0cmFuc2R1Y2VyLiBUaGUgdHJhbnNkdWNlcnMgdGhlbXNlbHZlcyBhcmUgcHJvdmlkZWQgYnkgb3RoZXJcbiAqIGxpYnJhcmllczsgdGhlIG9ubHkgaW52b2x2ZW1lbnQgb2YgdGhpcyBsaWJyYXIgaXMgYXMgYSBjb25zdW1lciBvZlxuICogdHJhbnNkdWNlcnMuXG4gKlxuICogVHJhbnNkdWNlcnMgd29yayBieSBoYXZpbmcgc3RlcCBmdW5jdGlvbnMgdGhhdCBhcmUga25vd24gdmlhIHByb3RvY29sLCBhbmQgaXRcbiAqIGlzIHRoZXNlIHN0ZXAgZnVuY3Rpb25zIHRoYXQgdGFrZSBhIHZhbHVlIGF0IGEgdGltZSB0byBiZSB0cmFuc2Zvcm1lZCBhc1xuICogdGhlaXIgYXJndW1lbnRzLiBUaGUgYXJndW1lbnRzIHRvIHRoZSB0cmFuc2R1Y2VycyB0aGVtc2VsdmVzIGFyZSBvdGhlclxuICogdHJhbnNkdWNlcnMgdGhhdCBhcmUgdGhlbiBjb21wb3NlZCBpbnRvIGEgc2luZ2xlIHRyYW5zZHVjZXIsIHdoaWNoIGlzIHRoZW5cbiAqIHJldHVybmVkLiBUaGVzZSB2YWx1ZXMgbmVlZCBub3QgY29uY2VybiBhIHVzZXIgb2YgdGhzIGxpYnJhcnk7IGp1c3QgcGFzcyBhXG4gKiB0cmFuc2R1Y2VyIHRvIGB7QGxpbmsgbW9kdWxlOmNoYW5rby9jaGFubmVscy5jaGFufGNoYW59YCBvclxuICogYHtAbGluayBtb2R1bGU6Y2hhbmtvL2NoYW5uZWxzLnRyYW5zQ2hhbnx0cmFuc0NoYW59YCBhbmQgZXZlcnl0aGluZyBlbHNlIHdpbGxcbiAqIGJlIGhhbmRsZWQuXG4gKlxuICogQGNhbGxiYWNrIFRyYW5zZHVjZXJcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y2hhbmtvL2NoYW5uZWxzXG4gKiBAcGFyYW0ge21vZHVsZTpjaGFua28vY2hhbm5lbHMuVHJhbnNkdWNlcn0geGZvcm0gQSB0cmFuc2R1Y2VyIHRvIGNoYWluIHRoaXNcbiAqICAgICB0cmFuc2R1Y2VyIHRvLlxuICogQHJldHVybiB7bW9kdWxlOmNoYW5rby9jaGFubmVscy5UcmFuc2R1Y2VyfSBBIG5ldyB0cmFuc2R1Y2VyIGNvbnNpc3Rpbmcgb2ZcbiAqICAgICB0aGUgY29tcG9zaXRpb24gb2YgdGhpcyBvbmUgYW5kIGB4Zm9ybWAuXG4gKi9cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG4vKipcbiAqIFByb3ZpZGVzIHNldmVyYWwgdHlwZXMgb2YgYnVmZmVycyB1c2FibGUgaW4gYnVmZmVyZWQgY2hhbm5lbHMuIFRoZXNlIGFyZSBhbGxcbiAqIGJ1aWx0IG9uIGEgc21hbGwsIGVmZmljaWVudCBxdWV1ZSB3aGljaCBpcyBpbiB0dXJuIGJhY2tlZCBieSBhIEphdmFTY3JpcHRcbiAqIGFycmF5LlxuICpcbiAqIEBtb2R1bGUgY2hhbmtvL2J1ZmZlclxuICogQHByaXZhdGVcbiAqL1xuXG5pbXBvcnQgeyBxdWV1ZSBhcyBxLCBjb3VudCBhcyBxQ291bnQsIGVucXVldWUsIGRlcXVldWUgfSBmcm9tIFwibW9kdWxlcy9xdWV1ZVwiO1xuXG4vKipcbiAqIEEgYnVmZmVyIHRoYXQgc3RvcmVzIHZhbHVlcyBzZW50IHRvIGEgYnVmZmVyZWQgY2hhbm5lbCB1bnRpbCBhIHByb2Nlc3NcbiAqIHJlY2VpdmVzIHRoZW0uXG4gKlxuICogRGlmZmVyZW50IGJ1ZmZlcnMgZGlmZmVyIG9ubHkgaW4gdGhlIHdheSB0aGF0IHRoZXkgZGV0ZXJtaW5lIHdoZXRoZXIgdGhleSBhcmVcbiAqIGZ1bGwgYW5kIGluIHdoYXQgaGFwcGVucyB3aGVuIGEgbmV3IHZhbHVlIGlzIGFkZGVkIHRvIGEgZnVsbCBidWZmZXIuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjaGFua28vY2hhbm5lbHNcbiAqIEB0eXBlZGVmIHsobW9kdWxlOmNoYW5rby9jaGFubmVscy5GaXhlZEJ1ZmZlciB8XG4gKiAgICAgbW9kdWxlOmNoYW5rby9jaGFubmVscy5Ecm9wcGluZ0J1ZmZlciB8XG4gKiAgICAgbW9kdWxlOmNoYW5rby9jaGFubmVscy5TbGlkaW5nQnVmZmVyKX0gQnVmZmVyXG4gKi9cblxuLyoqXG4gKiBUaGUgbmFtZSBvZiBhIHByb3BlcnR5IHRoYXQgZXhpc3RzIG9uIGJ1ZmZlciBvYmplY3RzIGZvciB0aGUgcHVycG9zZSBvZlxuICogaXRlbnRpZnlpbmcgdGhlbSBhcyBidWZmZXIgb2JqZWN0cy5cbiAqXG4gKiBAdHlwZSB7U3ltYm9sfVxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgQlVGRkVSID0gU3ltYm9sKFwiQlVGRkVSXCIpO1xuXG4vKipcbiAqIEEgcG9zc2libGUgdmFsdWUgb2YgdGhlIGB7QGxpbmsgbW9kdWxlOmNoYW5rby9idWZmZXJ+QlVGRkVSfEJVRkZFUn0gcHJvcGVydHlcbiAqIGluZGljYXRpbmcgdGhhdCB0aGUgYnVmZmVyIGlzIGEgZml4ZWQgYnVmZmVyLlxuICpcbiAqIEB0eXBlIHtTeW1ib2x9XG4gKiBAcHJpdmF0ZVxuICovXG5jb25zdCBGSVhFRCA9IFN5bWJvbChcIkZJWEVEXCIpO1xuXG4vKipcbiAqIEEgcG9zc2libGUgdmFsdWUgb2YgdGhlIGB7QGxpbmsgbW9kdWxlOmNoYW5rby9idWZmZXJ+QlVGRkVSfEJVRkZFUn0gcHJvcGVydHlcbiAqIGluZGljYXRpbmcgdGhhdCB0aGUgYnVmZmVyIGlzIGEgZHJvcHBpbmcgYnVmZmVyLlxuICpcbiAqIEB0eXBlIHtTeW1ib2x9XG4gKiBAcHJpdmF0ZVxuICovXG5jb25zdCBEUk9QUElORyA9IFN5bWJvbChcIkRST1BQSU5HXCIpO1xuXG4vKipcbiAqIEEgcG9zc2libGUgdmFsdWUgb2YgdGhlIGB7QGxpbmsgbW9kdWxlOmNoYW5rby9idWZmZXJ+QlVGRkVSfEJVRkZFUn0gcHJvcGVydHlcbiAqIGluZGljYXRpbmcgdGhhdCB0aGUgYnVmZmVyIGlzIGEgc2xpZGluZyBidWZmZXIuXG4gKlxuICogQHR5cGUge1N5bWJvbH1cbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IFNMSURJTkcgPSBTeW1ib2woXCJTTElESU5HXCIpO1xuXG4vKipcbiAqIFByZWRpY2F0ZSBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIHN1cHBsaWVkIG9iamVjdCBpcyBhIGJ1ZmZlci5cbiAqXG4gKiBAcGFyYW0geyp9IG9iaiBUaGUgdmFsdWUgdG8gdGVzdCB0byBzZWUgaWYgaXQncyBhIGJ1ZmZlci5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IEVpdGhlciBgdHJ1ZWAgaWYgdGhlIHZhbHVlIGlzIGEgYnVmZmVyLCBvciBgZmFsc2VgIGlmIGl0IGlzXG4gKiAgICAgbm90LlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaXNCdWZmZXIob2JqKSB7XG4gIHJldHVybiAhIW9iaj8uW0JVRkZFUl07XG59XG5cbi8qKlxuICogQSBidWZmZXIgaW1wbGVtZW50YXRpb24gdGhhdCBuZXZlciBkaXNjYXJkcyBidWZmZXJlZCBpdGVtcyB3aGVuIGEgbmV3IGl0ZW0gaXNcbiAqIGFkZGVkLlxuICpcbiAqIFRoaXMgYnVmZmVyIGhhcyBhIGNvbmNlcHQgb2YgKmZ1bGwqLCBidXQgaXQncyBhIHNvZnQgbGltaXQuIElmIHRoZSBzaXplIG9mXG4gKiB0aGUgYnVmZmVyIGlzIGV4Y2VlZGVkLCBhZGRlZCBpdGVtcyBhcmUgc3RpbGwgc3RvcmVkLlxuICpcbiAqIEEgYnVmZmVyIG9mIHRoaXMgdHlwZSBleGlzdHMgb25seSBhcyBhbiBvYmplY3QgdGhhdCBjYW4gYmUgcGFzc2VkIHRvIGFcbiAqIGNoYW5uZWwgY3JlYXRpb24gZnVuY3Rpb24gKHN1Y2ggYXMge0BsaW5rIG1vZHVsZTpjaGFua28vY2hhbm5lbHMuY2hhbnxjaGFufSlcbiAqIHRvIG1ha2UgdGhhdCBjaGFubmVsIGEgYnVmZmVyZWQgY2hhbm5lbC4gSXQgZG9lc24ndCBoYXZlIGFueSBwcm9wZXJ0aWVzIHRoYXRcbiAqIGFyZSBpbnRlbmRlZCBmb3IgZXh0ZXJuYWwgdXNlLlxuICpcbiAqIEB0eXBlZGVmIEZpeGVkQnVmZmVyXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNoYW5rby9jaGFubmVsc1xuICovXG5cbi8qKlxuICogQ3JlYXRlcyBhIGZpeGVkIGJ1ZmZlciBvZiB0aGUgc3BlY2lmaWVkIGNhcGFjaXR5LlxuICpcbiAqIEEgZml4ZWQgYnVmZmVyIGlzIGEgJ25vcm1hbCcgYnVmZmVyLCBvbmUgdGhhdCBzdG9yZXMgYW5kIHJldHVybnMgaXRlbXMgb25cbiAqIGRlbWFuZC4gV2hpbGUgaXQgaXMgY2FwYWJsZSBvZiBiZWluZyBvdmVyLWZpbGxlZCwgdGhhdCBhYmlsaXR5IGlzIG5vdCB1c2VkIGluXG4gKiBDaGFua28uIEEgYnVmZmVyIHRoYXQgaXMgZnVsbCB3aWxsIGNhdXNlIHRoZSBuZXh0IHB1dCB0byBpdHMgY2hhbm5lbCB0byBibG9ja1xuICogdW50aWwgYXQgbGVhc3Qgb25lIGl0ZW0gaXMgcmVtb3ZlZCBmcm9tIHRoZSBidWZmZXIuXG4gKlxuICogVGhpcyBidWZmZXIgaXMgcGFzc2VkIHRvIGB7QGxpbmsgbW9kdWxlOmNoYW5rby9jaGFubmVscy5jaGFufGNoYW59YCwgZXRjLiB0b1xuICogY3JlYXRlIGEgYnVmZmVyZWQgY2hhbm5lbC4gSXQgaXMgbm90IG1lYW50IHRvIGJlIHVzZWQgZGlyZWN0bHkuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjaGFua28vY2hhbm5lbHNcbiAqIEBwYXJhbSB7bnVtYmVyfSBzaXplIFRoZSBudW1iZXIgb2YgaXRlbXMgdGhhdCB0aGUgbmV3IGJ1ZmZlciBjYW4gaG9sZCBiZWZvcmVcbiAqICAgICBpdCdzIGZ1bGwuXG4gKiBAcmV0dXJuIHttb2R1bGU6Y2hhbmtvL2NoYW5uZWxzLkZpeGVkQnVmZmVyfSBBIG5ldyBmaXhlZCBidWZmZXIgb2YgdGhlXG4gKiAgICAgc3BlY2lmaWVkIGNhcGFjaXR5LlxuICovXG5mdW5jdGlvbiBmaXhlZChzaXplKSB7XG4gIHJldHVybiBPYmplY3QuY3JlYXRlKG51bGwsIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcXVldWUgYmFja2luZyB0aGlzIGJ1ZmZlci5cbiAgICAgKlxuICAgICAqIEB0eXBlIHttb2R1bGU6Y2hhbmtvL3F1ZXVlflF1ZXVlfVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgcXVldWU6IHtcbiAgICAgIHZhbHVlOiBxKClcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIG51bWJlciBvZiBpdGVtcyB0aGF0IHRoaXMgcXVldWUgY2FuIGhvbGQgYmVmb3JlIGl0J3MgY29uc2lkZXJlZCBmdWxsLlxuICAgICAqXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHNpemU6IHtcbiAgICAgIHZhbHVlOiBzaXplXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEEgbWFya2VyIHByb3BlcnR5IHVzZWQgdG8gc2hvdyB0aGF0IHRoaXMgaXMgYSBmaXhlZCBidWZmZXIuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7U3ltYm9sfVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgW0JVRkZFUl06IHtcbiAgICAgIHZhbHVlOiBGSVhFRFxuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxuICogQSBidWZmZXIgaW1wbGVtZW50YXRpb24gdGhhdCBkcm9wcyBuZXdseSBhZGRlZCBpdGVtcyB3aGVuIHRoZSBidWZmZXIgaXMgZnVsbC5cbiAqXG4gKiBUaGlzIGRyb3BwaW5nIGJlaGF2aW9yIGlzIHNpbGVudDogdGhlIG5ldyBpdGVtIGlzIHNpbXBseSBub3QgYWRkZWQgdG8gdGhlXG4gKiBxdWV1ZS4gTm90ZSB0aGF0IHRoaXMgYnVmZmVyIGlzIG5ldmVyIGBmdWxsYCBiZWNhdXNlIGl0IGNhbiBhbHdheXMgYmUgYWRkZWRcbiAqIHRvIHdpdGhvdXQgZXhjZWVkaW5nIHRoZSBzaXplLCBldmVuIGlmIHRoYXQgJ2FkZGluZycgZG9lc24ndCByZXN1bHQgaW4gYSBuZXdcbiAqIGl0ZW0gYWN0dWFsbHkgYXBwZWFyaW5nIGluIHRoZSBidWZmZXIuXG4gKlxuICogQSBidWZmZXIgb2YgdGhpcyB0eXBlIGV4aXN0cyBvbmx5IGFzIGFuIG9iamVjdCB0aGF0IGNhbiBiZSBwYXNzZWQgdG8gYVxuICogY2hhbm5lbCBjcmVhdGlvbiBmdW5jdGlvbiAoc3VjaCBhcyB7QGxpbmsgbW9kdWxlOmNoYW5rby9jaGFubmVscy5jaGFufGNoYW59KVxuICogdG8gbWFrZSB0aGF0IGNoYW5uZWwgYSBidWZmZXJlZCBjaGFubmVsLiBJdCBkb2Vzbid0IGhhdmUgYW55IHByb3BlcnRpZXMgdGhhdFxuICogYXJlIGludGVuZGVkIGZvciBleHRlcm5hbCB1c2UuXG4gKlxuICogQHR5cGVkZWYgRHJvcHBpbmdCdWZmZXJcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y2hhbmtvL2NoYW5uZWxzXG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIGEgZHJvcHBpbmcgYnVmZmVyIG9mIHRoZSBzcGVjaWZpZWQgY2FwYWNpdHkuXG4gKlxuICogQSBkcm9wcGluZyBidWZmZXIgc2lsZW50bHkgZHJvcHMgdGhlIGl0ZW0gYmVpbmcgYWRkZWQgaWYgdGhlIGJ1ZmZlciBpc1xuICogYWxyZWFkeSBhdCBjYXBhY2l0eS4gU2luY2UgYWRkaW5nIGEgbmV3IGl0ZW0gd2lsbCBhbHdheXMgJ3N1Y2NlZWQnIChldmVuIGlmXG4gKiBpdCBzdWNjZWVkcyBieSBqdXN0IGlnbm9yaW5nIHRoZSBhZGQpLCBpdCBpcyBuZXZlciBjb25zaWRlcmVkIGZ1bGwgYW5kXG4gKiB0aGVyZWZvcmUgYSBwdXQgdG8gYSBjaGFubmVsIGJ1ZmZlcmVkIGJ5IGEgZHJvcHBpbmcgYnVmZmVyIG5ldmVyIGJsb2Nrcy5cbiAqXG4gKiBUaGlzIGJ1ZmZlciBpcyBwYXNzZWQgdG8gYHtAbGluayBtb2R1bGU6Y2hhbmtvL2NoYW5uZWxzLmNoYW58Y2hhbn1gLCBldGMuIHRvXG4gKiBjcmVhdGUgYSBidWZmZXJlZCBjaGFubmVsLiBJdCBpcyBub3QgbWVhbnQgdG8gYmUgdXNlZCBkaXJlY3RseS5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNoYW5rby9jaGFubmVsc1xuICogQHBhcmFtIHtudW1iZXJ9IHNpemUgVGhlIG51bWJlciBvZiBpdGVtcyB0aGF0IHRoZSBuZXcgYnVmZmVyIGNhbiBob2xkIGJlZm9yZVxuICogICAgIG5ld2VzdCBpdGVtcyBhcmUgZHJvcHBlZCBvbiBhZGQuXG4gKiBAcmV0dXJuIHttb2R1bGU6Y2hhbmtvL2NoYW5uZWxzLkRyb3BwaW5nQnVmZmVyfSBBIG5ldyBkcm9wcGluZyBidWZmZXIgb2YgdGhlXG4gKiAgICAgc3BlY2lmaWVkIGNhcGFjaXR5LlxuICovXG5mdW5jdGlvbiBkcm9wcGluZyhzaXplKSB7XG4gIHJldHVybiBPYmplY3QuY3JlYXRlKG51bGwsIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcXVldWUgYmFja2luZyB0aGlzIGJ1ZmZlci5cbiAgICAgKlxuICAgICAqIEB0eXBlIHttb2R1bGU6Y2hhbmtvL3F1ZXVlflF1ZXVlfVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgcXVldWU6IHtcbiAgICAgIHZhbHVlOiBxKClcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIG51bWJlciBvZiBpdGVtcyB0aGF0IHRoaXMgcXVldWUgY2FuIGhvbGQgYmVmb3JlIGl0J3MgY29uc2lkZXJlZCBmdWxsLlxuICAgICAqXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHNpemU6IHtcbiAgICAgIHZhbHVlOiBzaXplXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEEgbWFya2VyIHByb3BlcnR5IHVzZWQgdG8gc2hvdyB0aGF0IHRoaXMgaXMgYSBkcm9wcGluZyBidWZmZXIuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7U3ltYm9sfVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgW0JVRkZFUl06IHtcbiAgICAgIHZhbHVlOiBEUk9QUElOR1xuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxuICogQSBidWZmZXIgaW1wbGVtZW50YXRpb24gdGhhdCBkcm9wcyB0aGUgb2xkZXN0IGl0ZW0gd2hlbiBhbiBpdGVtIGlzIGFkZGVkIHRvIGFcbiAqIGZ1bGwgYnVmZmVyLlxuICpcbiAqIFRoaXMgaXMgdmVyeSBzaW1pbGFyIHRvXG4gKiB7QGxpbmsgbW9kdWxlOmNoYW5rby9jaGFubmVscy5Ecm9wcGluZ0J1ZmZlcnxEcm9wcGluZ0J1ZmZlcn07IHRoZSBvbmx5XG4gKiBkaWZmZXJlbmNlIGlzIGluIHdoYXQgaGFwcGVucyB3aGVuIGFuIGl0ZW0gaXMgYWRkZWQuIEluIHRoaXMgYnVmZmVyLCB0aGUgbmV3XG4gKiBpdGVtIGlzIGluZGVlZCBhZGRlZCB0byB0aGUgYnVmZmVyLCBidXQgaW4gb3JkZXIgdG8ga2VlcCB0aGUgY291bnQgb2YgdGhlXG4gKiBidWZmZXIgYXQgb3IgYmVsb3cgaXRzIHNpemUsIHRoZSBvbGRlc3QgaXRlbSBpbiB0aGUgYnVmZmVyIGlzIHNpbGVudGx5XG4gKiBkcm9wcGVkLlxuICpcbiAqIEEgYnVmZmVyIG9mIHRoaXMgdHlwZSBleGlzdHMgb25seSBhcyBhbiBvYmplY3QgdGhhdCBjYW4gYmUgcGFzc2VkIHRvIGFcbiAqIGNoYW5uZWwgY3JlYXRpb24gZnVuY3Rpb24gKHN1Y2ggYXMge0BsaW5rIG1vZHVsZTpjaGFua28vY2hhbm5lbHMuY2hhbnxjaGFufSlcbiAqIHRvIG1ha2UgdGhhdCBjaGFubmVsIGEgYnVmZmVyZWQgY2hhbm5lbC4gSXQgZG9lc24ndCBoYXZlIGFueSBwcm9wZXJ0aWVzIHRoYXRcbiAqIGFyZSBpbnRlbmRlZCBmb3IgZXh0ZXJuYWwgdXNlLlxuICpcbiAqIEB0eXBlZGVmIFNsaWRpbmdCdWZmZXJcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y2hhbmtvL2NoYW5uZWxzXG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIGEgc2xpZGluZyBidWZmZXIgb2YgdGhlIHNwZWNpZmllZCBjYXBhY2l0eS5cbiAqXG4gKiBBIHNsaWRpbmcgYnVmZmVyIGRyb3BzIHRoZSBmaXJzdC1hZGRlZCAob2xkZXN0KSBpdGVtIGFscmVhZHkgaW4gdGhlIGJ1ZmZlciBpZlxuICogYSBuZXcgaXRlbSBpcyBhZGRlZCB3aGVuIHRoZSBidWZmZXIgaXMgYWxyZWFkeSBhdCBjYXBhY2l0eS4gU2luY2UgaXQncyBhbHdheXNcbiAqIGNhcGFibGUgb2YgaGF2aW5nIGl0ZW1zIGFkZGVkIHRvIGl0LCBpdCdzIG5ldmVyIGNvbnNpZGVyZWQgZnVsbCwgYW5kXG4gKiB0aGVyZWZvcmUgYSBwdXQgdG8gYSBjaGFubmVsIGJ1ZmZlcmVkIGJ5IGEgc2xpZGluZyBidWZmZXIgbmV2ZXIgYmxvY2tzLlxuICpcbiAqIFRoaXMgYnVmZmVyIGlzIHBhc3NlZCB0byBge0BsaW5rIG1vZHVsZTpjaGFua28vY2hhbm5lbHMuY2hhbnxjaGFufWAsIGV0Yy4gdG9cbiAqIGNyZWF0ZSBhIGJ1ZmZlcmVkIGNoYW5uZWwuIEl0IGlzIG5vdCBtZWFudCB0byBiZSB1c2VkIGRpcmVjdGx5LlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y2hhbmtvL2NoYW5uZWxzXG4gKiBAcGFyYW0ge251bWJlcn0gc2l6ZSBUaGUgbnVtYmVyIG9mIGl0ZW1zIHRoYXQgdGhlIG5ldyBidWZmZXIgY2FuIGhvbGQgYmVmb3JlXG4gKiAgICAgb2xkZXN0IGl0ZW1zIGFyZSBkcm9wcGVkIG9uIGFkZC5cbiAqIEByZXR1cm4ge21vZHVsZTpjaGFua28vY2hhbm5lbHMuU2xpZGluZ0J1ZmZlcn0gQSBuZXcgc2xpZGluZyBidWZmZXIgb2YgdGhlXG4gKiAgICAgc3BlY2lmaWVkIGNhcGFjaXR5LlxuICovXG5mdW5jdGlvbiBzbGlkaW5nKHNpemUpIHtcbiAgcmV0dXJuIE9iamVjdC5jcmVhdGUobnVsbCwge1xuICAgIC8qKlxuICAgICAqIFRoZSBxdWV1ZSBiYWNraW5nIHRoaXMgYnVmZmVyLlxuICAgICAqXG4gICAgICogQHR5cGUge21vZHVsZTpjaGFua28vcXVldWV+UXVldWV9XG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBxdWV1ZToge1xuICAgICAgdmFsdWU6IHEoKVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgbnVtYmVyIG9mIGl0ZW1zIHRoYXQgdGhpcyBxdWV1ZSBjYW4gaG9sZCBiZWZvcmUgaXQncyBjb25zaWRlcmVkIGZ1bGwuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgc2l6ZToge1xuICAgICAgdmFsdWU6IHNpemVcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQSBtYXJrZXIgcHJvcGVydHkgdXNlZCB0byBzaG93IHRoYXQgdGhpcyBpcyBhIHNsaWRpbmcgYnVmZmVyLlxuICAgICAqXG4gICAgICogQHR5cGUge1N5bWJvbH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIFtCVUZGRVJdOiB7XG4gICAgICB2YWx1ZTogU0xJRElOR1xuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgcXVldWUgdGhhdCBiYWNrcyBhIGJ1ZmZlci5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTpjaGFua28vY2hhbm5lbHMuQnVmZmVyfSBidWZmZXIgVGhlIGJ1ZmZlciB3aG9zZSBxdWV1ZSBpc1xuICogICAgIHJldHVybmVkIGJ5IHRoaXMgZnVuY3Rpb24uXG4gKiBAcmV0dXJuIHttb2R1bGU6Y2hhbmtvL3F1ZXVlflF1ZXVlfSBUaGUgcXVldWUgdGhhdCBiYWNrcyB0aGUgc3VwcGxpZWQgYnVmZmVyLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gcXVldWUoYnVmZmVyKSB7XG4gIHJldHVybiBidWZmZXIucXVldWU7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgbnVtYmVyIG9mIGl0ZW1zIGEgYnVmZmVyIGNhbiBob2xkIGJlZm9yZSBpdCdzIGZ1bGwuXG4gKlxuICogQHBhcmFtIHttb2R1bGU6Y2hhbmtvL2J1ZmZlcn5CdWZmZXJ9IGJ1ZmZlciBUaGUgYnVmZmVyIHdob3NlIHNpemUgaXMgcmV0dXJuZWRcbiAqICAgICBieSB0aGlzIGZ1bmN0aW9uLlxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgc2l6ZSBvZiB0aGUgc3VwcGxpZWQgYnVmZmVyLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gc2l6ZShidWZmZXIpIHtcbiAgcmV0dXJuIGJ1ZmZlci5zaXplO1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIG51bWJlciBvZiBpdGVtcyBhIGJ1ZmZlciBpcyBjdXJyZW50bHkgaG9sZGluZy5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTpjaGFua28vY2hhbm5lbHMuQnVmZmVyfSBidWZmZXIgVGhlIGJ1ZmZlciB3aG9zZSBjdXJyZW50IGNvdW50XG4gKiAgICAgaXMgcmV0dXJuZWQgYnkgdGhpcyBmdW5jdGlvbi5cbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIG51bWJlciBvZiBpdGVtcyB0aGF0IHRoZSBzdXBwbGllZCBidWZmZXIgaXMgaG9sZGluZy5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNvdW50KGJ1ZmZlcikge1xuICByZXR1cm4gcUNvdW50KGJ1ZmZlci5xdWV1ZSk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGEgYnVmZmVyIGlzIGF0IGNhcGFjaXR5LlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOmNoYW5rby9jaGFubmVscy5CdWZmZXJ9IGJ1ZmZlciBUaGUgYnVmZmVyIHdobydzIGJlaW5nIGNoZWNrZWRcbiAqICAgICB0byBzZWUgaWYgaXQncyBhdCBjYXBhY2l0eS5cbiAqIEByZXR1cm4ge251bWJlcn0gRWl0aGVyIGB0cnVlYCBpZiB0aGUgc3VwcGxpZWQgYnVmZmVyIGlzIGZ1bGwgb3IgYGZhbHNlYCBpZlxuICogICAgIGl0IGlzbid0LlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaXNGdWxsKGJ1ZmZlcikge1xuICByZXR1cm4gYnVmZmVyW0JVRkZFUl0gPT09IEZJWEVEID8gcUNvdW50KGJ1ZmZlci5xdWV1ZSkgPj0gYnVmZmVyLnNpemUgOiBmYWxzZTtcbn1cblxuLyoqXG4gKiBBZGRzIG9uZSBvciBtb3JlIGl0ZW1zIHRvIGEgYnVmZmVyLlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOmNoYW5rby9jaGFubmVscy5CdWZmZXJ9IGJ1ZmZlciBUaGUgYnVmZmVyIHdoZXJlIHRoZSBzdXBwbGllZFxuICogICAgIGl0ZW1zIHdpbGwgYmUgYWRkZWQuXG4gKiBAcGFyYW0gey4uLip9IGl0ZW1zIFRoZSB2YWx1ZXMgYmVpbmcgYWRkZWQgdG8gdGhlIHN1cHBsaWVkIGJ1ZmZlci5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGFkZChidWZmZXIsIC4uLml0ZW1zKSB7XG4gIHN3aXRjaCAoYnVmZmVyW0JVRkZFUl0pIHtcbiAgICBjYXNlIEZJWEVEOlxuICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGl0ZW1zKSB7XG4gICAgICAgIGVucXVldWUoYnVmZmVyLnF1ZXVlLCBpdGVtKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBEUk9QUElORzpcbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBpdGVtcykge1xuICAgICAgICBpZiAoY291bnQoYnVmZmVyKSA8IHNpemUoYnVmZmVyKSkge1xuICAgICAgICAgIGVucXVldWUoYnVmZmVyLnF1ZXVlLCBpdGVtKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIFNMSURJTkc6XG4gICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgaXRlbXMpIHtcbiAgICAgICAgaWYgKGNvdW50KGJ1ZmZlcikgPj0gc2l6ZShidWZmZXIpKSB7XG4gICAgICAgICAgZGVxdWV1ZShidWZmZXIucXVldWUpO1xuICAgICAgICB9XG4gICAgICAgIGVucXVldWUoYnVmZmVyLnF1ZXVlLCBpdGVtKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybjtcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZXMgdGhlIG5leHQgaXRlbSBmcm9tIGEgcXVldWUgYW5kIHJldHVybnMgaXQuXG4gKlxuICogQHBhcmFtIHttb2R1bGU6Y2hhbmtvL2NoYW5uZWxzLkJ1ZmZlcn0gYnVmZmVyIFRoZSBidWZmZXIgZnJvbSB3aGljaCBhbiBpdGVtXG4gKiAgICAgaXMgYmVpbmcgcmVtb3ZlZC5cbiAqIEByZXR1cm4geyp9IFRoZSBpdGVtIHRoYXQgd2FzIHJlbW92ZWQgZnJvbSB0aGUgc3VwcGxpZWQgYnVmZmVyLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gcmVtb3ZlKGJ1ZmZlcikge1xuICByZXR1cm4gZGVxdWV1ZShidWZmZXIucXVldWUpO1xufVxuXG5leHBvcnQge1xuICBpc0J1ZmZlcixcbiAgZml4ZWQsXG4gIGRyb3BwaW5nLFxuICBzbGlkaW5nLFxuICBxdWV1ZSxcbiAgc2l6ZSxcbiAgY291bnQsXG4gIGlzRnVsbCxcbiAgYWRkLFxuICByZW1vdmVcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuaW1wb3J0IHsgcHJvdG9jb2xzIGFzIHAgfSBmcm9tIFwibW9kdWxlcy9wcm90b2NvbFwiO1xuaW1wb3J0IHtcbiAgcXVldWUsXG4gIGRlcXVldWUsXG4gIEVNUFRZLFxuICBmaWx0ZXIsXG4gIGNvdW50IGFzIHFDb3VudCxcbiAgZW5xdWV1ZVxufSBmcm9tIFwibW9kdWxlcy9xdWV1ZVwiO1xuaW1wb3J0IHsgaXNGdWxsLCBjb3VudCwgcmVtb3ZlIH0gZnJvbSBcIm1vZHVsZXMvYnVmZmVyXCI7XG5pbXBvcnQgeyBkaXNwYXRjaCB9IGZyb20gXCJtb2R1bGVzL2Rpc3BhdGNoZXJcIjtcblxuLyoqXG4gKiBUaGUgbWF4aW11bSBudW1iZXIgb2YgZGlydHkgb3BlcmF0aW9ucyB0aGF0IGNhbiBiZSBxdWV1ZWQgb24gYSBjaGFubmVsIGJlZm9yZVxuICogYSBjbGVhbnVwIGlzIHRyaWdnZXJlZC5cbiAqXG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgTUFYX0RJUlRZID0gNjQ7XG5cbi8qKlxuICogVGhlIG1heGltdW0gbnVtYmVyIG9mIG9wZXJ0aW9ucyB0aGF0IGNhbiBiZSBxdWV1ZWQgb24gYSBjaGFubmVsIGJlZm9yZSBuZXdcbiAqIG9wZXJhdGlvbnMgYXJlIHJlamVjdGVkLlxuICpcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAcHJpdmF0ZVxuICovXG5jb25zdCBNQVhfUVVFVUVEID0gMTAyNDtcblxuLyoqXG4gKiAqaGUgdmFsdWUgcmV0dXJuZWQgZnJvbSBhIHJlY2VpdmUgb24gYSBjaGFubmVsIHdoZW4gdGhhdCBjaGFubmVsIGlzIGNsb3NlZFxuICogYW5kIGhhcyBubyBtb3JlIHZhbHVlcyBhdmFpbGFibGUuXG4gKlxuICogVGhpcyBpcyBhIHNwZWNpYWwgdmFsdWUgdGhhdCBpcyByZXR1cm5lZCB1bmRlciBhIGNlcnRhaW4gY2lyY3Vtc3RhbmNlLCBuYW1lbHlcbiAqIHdoZW4gYSByZWNlaXZlIGlzIHBlcmZvcm1lZCBvbiBhIGNsb3NlZCBjaGFubmVsLiBCZWNhdXNlIG9mIHRoYXQsIGl0IGNhbm5vdFxuICogYmUgcmV0dXJuZWQgZnJvbSBhIHJlY2VpdmUgb24gYW4gb3BlbiBjaGFubmVsLiBGb3IgdGhhdCByZWFzb24sIGBDTE9TRURgIGlzXG4gKiB0aGUgb25seSB2YWx1ZSB0aGF0IGNhbm5vdCBiZSBzZW50IG9udG8gYSBjaGFubmVsICZtZGFzaDsgaXQgd291bGQgYmVcbiAqIGltcG9zc2libGUgdG8gZGlzdGluZ3Vpc2ggYmV0d2VlbiBhIGxlZ2l0aW1hdGUgdmFsdWUgb2YgYENMT1NFRGAgYW5kIGFuXG4gKiBhY3R1YWwgY2xvc2VkIGNoYW5uZWwuXG4gKlxuICogQHR5cGUge1N5bWJvbH1cbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y2hhbmtvL2NoYW5uZWxzXG4gKi9cbmNvbnN0IENMT1NFRCA9IFN5bWJvbChcIkNMT1NFRFwiKTtcblxuLyoqXG4gKiBBIHVuaXF1ZSB2YWx1ZSB1c2VkIHRvIGluZGljYXRlIHRoYXQgYW4gb2JqZWN0IGlzIGEgYm94LlxuICpcbiAqIEB0eXBlIHtTeW1ib2x9XG4gKiBAcHJpdmF0ZVxuICovXG5jb25zdCBCT1ggPSBTeW1ib2woXCJCT1hcIik7XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGFuIG9iamVjdCBpcyBhIGJveC5cbiAqXG4gKiBAcGFyYW0geyp9IG9iaiBBIHZhbHVlIHRvIGNoZWNrIGZvciBib3hpbmVzcy5cbiAqIEByZXR1cm4gRWl0aGVyIGB0cnVlYCBpZiB0aGUgdmFsdWUgaXMgYSBib3ggb3IgYGZhbHNlYCBpZiBpdCBpc24ndC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGlzQm94KG9iaikge1xuICByZXR1cm4gISFvYmo/LltCT1hdO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhbiBvYmplY3QgaXMgcmVkdWNlZC4gVGhpcyBpcyBkb25lIHVzaW5nIHRoZSB0cmFuc2R1Y2VyXG4gKiBwcm90b2NvbDsgYW4gb2JqZWN0IHdpdGggdGhlIHByb3RvY29sLXNwZWNpZmllZCBgcmVkdWNlZGAgcHJvcGVydHkgaXMgYXNzdW1lZFxuICogdG8gYmUgcmVkdWNlZC4gSWYgYSByZXN1bHQgb2YgYSB0cmFuc2Zvcm1hdGlvbiBpcyByZWR1Y2VkLCBpdCBtZWFucyB0aGF0IHRoZVxuICogdHJhbnNmb3JtYXRpb24gaXMgY29tcGxldGUgYW5kIHRoZSBjaGFubmVsIHNob3VsZCBiZSBjbG9zZWQuXG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgYmVpbmcgY2hlY2tlZCBmb3IgcmVkdWN0aW9uLlxuICogQHJldHVybiB7Ym9vbGVhbn0gRWl0aGVyIGB0cnVlYCBpZiB0aGUgdmFsdWUgaGFzIGJlZW4gcmVkdWNlZCwgb3IgYGZhbHNlYCBpZiBpdCBoYXNcbiAqICAgICBub3QgYmVlbi5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGlzUmVkdWNlZCh2YWx1ZSkge1xuICByZXR1cm4gISF2YWx1ZT8uW3AucmVkdWNlZF07XG59XG5cbi8qKlxuICogQSB3cmFwcGVyIGFyb3VuZCBhIHZhbHVlLiBUaGlzIGlzIHByaW1hcmlseSB1c2VkIGFzIGEgbWFya2VyOyBhIHB1dCBvciB0YWtlXG4gKiByZXR1cm5pbmcgYSBCb3ggaW5kaWNhdGVzIHRoYXQgdGhlIHB1dCBvciB0YWtlIGhhcyByZXR1cm5lZCBhbiBpbW1lZGlhdGVcbiAqIHZhbHVlLCB3aGlsZSByZXR1cm5pbmcgYG51bGxgIGluZGljYXRlcyB0aGF0IHRoZSBvcGVyYXRpb24gaGFzIGJlZW4gcXVldWVkLlxuICpcbiAqIEB0eXBlZGVmIEJveFxuICogQG1lbWJlcm9mIG1vZHVsZTpjaGFua28vY2hhbm5lbFxuICogQHByb3BlcnR5IHsqfSB2YWx1ZSBUaGUgdmFsdWUgYmVpbmcgd3JhcHBlZCBieSB0aGUgYm94LlxuICogQHByaXZhdGVcbiAqL1xuXG4vKipcbiAqIEEgd3JhcHBlciBvYmplY3QgZm9yIGEgdmFsdWUuIFRoaXMgaXMgdXNlZCBhbG1vc3QgZW50aXJlbHkgYXMgYSBtYXJrZXJcbiAqIGludGVyZmFjZSwgdGhvdWdoIHRoZSBmYWN0IHRoYXQgaXQgYmVjb21lcyBhIHBhcmFtZXRlciB0aGF0J3MgcGFzc2VkIGJ5XG4gKiByZWZlcmVuY2UgcmF0aGVyIHRoYW4gdmFsdWUgaXMgYWxzbyBpbXBvcnRhbnQgaW4gYSBjb3VwbGUgcGxhY2VzLiBJZiBhXG4gKiBjaGFubmVsIG9wZXJhdGlvbiAocHV0IG9yIHRha2UpIHJldHVybnMgYSBCb3gsIGl0IG1lYW5zIHRoYXQgYW4gYWN0dWFsIHZhbHVlXG4gKiB3YXMgcmV0dXJuZWQuIEEgbm9uLUJveCAod2hpY2ggYWx3YXlzIGhhcHBlbnMgdG8gYmUgYG51bGxgKSBtZWFucyB0aGF0IHRoZVxuICogb3BlcmF0aW9uIG11c3QgYmxvY2suXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjaGFua28vY2hhbm5lbFxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gYm94LlxuICogQHJldHVybiB7bW9kdWxlOmNoYW5rby9jaGFubmVsfkJveH0gVGhlIGJveGVkIHZhbHVlLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gYm94KHZhbHVlKSB7XG4gIHJldHVybiBPYmplY3QuY3JlYXRlKG51bGwsIHtcbiAgICB2YWx1ZToge1xuICAgICAgdmFsdWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0sXG4gICAgW0JPWF06IHtcbiAgICAgIHZhbHVlOiB0cnVlXG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBBIHdyYXBwZXIgYXJvdW5kIGEgdmFsdWUuIFRoaXMgaXMgbXVjaCBsaWtlXG4gKiB7QGxpbmsgbW9kdWxlOmNoYW5rby9jaGFubmVsfkJveHxCb3h9IGV4Y2VwdCB0aGF0IGl0IGFsc28gY2FycmllcyBhIGhhbmRsZXJcbiAqIHRvIGJlIHVzZWQgd2hlbiBhIHNlbnQgdmFsdWUgaXMgcmVjZWl2ZWQuIEl0IGlzIHNwZWNpZmljYWxseSBmb3IgcXVldWVpbmdcbiAqIHNlbmRzLlxuICpcbiAqIEB0eXBlZGVmIFNlbmRCb3hcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y2hhbmtvL2NoYW5uZWxcbiAqIEBwcm9wZXJ0eSB7Kn0gdmFsdWUgVGhlIHZhbHVlIGJlaW5nIHdyYXBwZWQgYnkgdGhpcyBib3guXG4gKiBAcHJvcGVydHkge21vZHVsZTpjaGFua28vY2hhbm5lbH5IYW5kbGVyfSBoYW5kbGVyIFRoZSBoYW5kbGVyIHVzZWQgdG8gcHJvY2Vzc1xuICogICAgIGEgc2VuZCByZXF1ZXN0IGZvciB0aGUgdmFsdWUuXG4gKiBAcHJpdmF0ZVxuICovXG5cbi8qKlxuICogQSBib3ggdXNlZCB0byB3cmFwIGEgdmFsdWUgYmVpbmcgc2VudCBvbnRvIGEgY2hhbm5lbC4gVGhpcyBpcyBkaWZmZXJlbnQgZnJvbVxuICogYSByZWd1bGFyIGJveCBpbiB0aGF0IHRoZSBzZW5kIGhhbmRsZXIgaXMgYWxzbyBpbmNsdWRlZC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNoYW5rby9jaGFubmVsXG4gKiBAcGFyYW0gIHtPYmplY3R9IGhhbmRsZXIgVGhlIGhhbmRsZXIgdXNlZCB0byBwcm9jZXNzIGEgc2VuZCByZXF1ZXN0IGZvciB0aGVcbiAqICAgICB2YWx1ZS5cbiAqIEBwYXJhbSAgeyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBib3guXG4gKiBAcmV0dXJuIHttb2R1bGU6Y2hhbmtvL2NoYW5uZWx+U2VuZEJveH0gVGhlIGJveGVkIHZhbHVlLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gc2VuZEJveCh2YWx1ZSwgaGFuZGxlcikge1xuICByZXR1cm4gT2JqZWN0LmNyZWF0ZShudWxsLCB7XG4gICAgdmFsdWU6IHtcbiAgICAgIHZhbHVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9LFxuICAgIGhhbmRsZXI6IHtcbiAgICAgIHZhbHVlOiBoYW5kbGVyXG4gICAgfSxcbiAgICBbQk9YXToge1xuICAgICAgdmFsdWU6IHRydWVcbiAgICB9XG4gIH0pO1xufVxuXG4vKipcbiAqIEEgY2hhbm5lbCwgdXNlZCBieSBwcm9jZXNzZXMgdG8gY29tbXVuaWNhdGUgd2l0aCBvbmUgYW5vdGhlci5cbiAqXG4gKiBGb3IgZWFjaCBvcGVyYXRpb24sIHRoZSBjaGFubmVsIGZpcnN0IHRlc3RzIHRvIHNlZSBpZiB0aGVyZSdzIGEgY29ycmVzcG9uZGluZ1xuICogb3BlcmF0aW9uIGFscmVhZHkgcXVldWVkIChpLmUuLCBpZiB3ZSdyZSBkb2luZyBhIGBzZW5kYCB0aGF0IHRoZXJlJ3MgYSBxdWV1ZWRcbiAqIGByZWN2YCBhbmQgdmljZSB2ZXJzYSkuIElmIHRoZXJlIGlzLCB0aGF0IGNvcnJlc3BvbmRpbmcgb3BlcmF0aW9uIGlzXG4gKiB1bmJsb2NrZWQgYW5kIGJvdGggb3BlcmF0aW9ucyBjb21wbGV0ZS4gSWYgbm90LCB0aGUgb3BlcmF0aW9uIGlzIHF1ZXVlZCB0b1xuICogd2FpdCBmb3IgYSBjb3JyZXNwb25kaW5nIG9wZXJhdGlvbi4gVGhlIHByb2Nlc3Mgb3IgdGhhdCBjcmVhdGVkIHRoZSBvcGVyYXRpb25cbiAqIHRoZW4gYmxvY2tzLlxuICpcbiAqIFRoZSBjaGFubmVsIGNhbiBiZSBiYWNrZWQgYnkgYSBidWZmZXIsIHRob3VnaCBpdCBpcyBub3QgYnkgZGVmYXVsdC4gSWYgYVxuICogYnVmZmVyIGlzIGluIHBsYWNlLCBhbmQgdGhhdCBidWZmZXIgaXMgbm90IGZ1bGwsIHRoZW4gdGhlIHByb2Nlc3MgdGhhdFxuICogY3JlYXRlZCBhbiBvcGVyYXRpb24gdGhhdCBoYXMgdG8gYmUgcXVldWVkIGlzICpub3QqIGJsb2NrZWQuXG4gKlxuICogVGhpcyBjaGFubmVsIG9iamVjdCBzdXBwb3J0cyB0cmFuc2Zvcm1hdGlvbnMsIGFzc3VtaW5nIHRoYXQgdGhleSBmb2xsb3cgdGhlXG4gKiBwcm90b2NvbCBjcmVhdGVkIGJ5IGEgZmV3IHRyYW5zZHVjZXIgbGlicmFyeSBhdXRob3JzIHRvIGFsbG93IHRoZW0gdG9cbiAqIGludGVyb3BlcmF0ZS4gVGhlIHN1cHBvcnQgbXVzdCBiZSBleHBsaWNpdGx5IGNyZWF0ZWQgYmVjYXVzZSB0aGUgbm9ybWFsXG4gKiBtZXRob2Qgb2YgbWFraW5nIGFuIG9iamVjdCBzdXBwb3J0IHRyYW5zZm9ybWF0aW9ucyB3b24ndCB3b3JrIGhlcmUuIFRoaXNcbiAqIG1ldGhvZCBpcyB0byBjcmVhdGUgYSBuZXcgb2JqZWN0IGFuZCBhZGQgdGhlIHRyYW5zZm9ybWVkIHZhbHVlcyB0byBpdCAtIGJ1dFxuICogZm9yIGEgY2hhbm5lbCwgd2UgbmVlZCB0byByZXBsYWNlIHRoZSB2YWx1ZXMgb24gdGhlIGNoYW5uZWwgd2l0aCB0aGVpclxuICogdHJhbnNmb3JtZWQgdmFsdWVzLCBpbiB0aGUgc2FtZSBvcmRlciBldmVuIGluIGEgbXVsdGktcHJvY2VzcyBlbnZpcm9ubWVudC5cbiAqIFRodXMgdHJhbnNmb3JtYXRpb25zIGhhcHBlbiBpbiBwbGFjZS5cbiAqXG4gKiBUcmFuc2Zvcm1hdGlvbnMgYXJlIGFwcGxpZWQgYmVmb3JlIHRoZSB2YWx1ZSBpcyBxdWV1ZWQsIHNvIGV2ZW4gaWYgdGhlcmUgaXMgYVxuICogY29ycmVzcG9uZGluZyBvcGVyYXRpb24gcmVhZHkgdG8gZ28sIHRoZSB0cmFuc2Zvcm1hdGlvbiBzdGlsbCBoYXBwZW5zLiBBbHNvLFxuICogdHJhbnNmb3JtYXRpb25zIHJlcXVpcmUgdGhhdCB0aGUgY2hhbm5lbCBiZSBidWZmZXJlZCAodGhpcyBidWZmZXIgaXMgd2hhdCBpc1xuICogc2VudCB0byB0aGUgdHJhbnNmb3JtZXIncyByZWR1Y3Rpb24gc3RlcCBmdW5jdGlvbik7IHRyeWluZyB0byBjcmVhdGUgYVxuICogY2hhbm5lbCB3aXRoIGEgdHJhbnNmb3JtZXIgYnV0IHdpdGhvdXQgYSBidWZmZXIgd2lsbCByZXN1bHQgaW4gYW4gZXJyb3IgYmVpbmdcbiAqIHRocm93bi5cbiAqXG4gKiBUaGlzIGlzIHRoZSBvYmplY3QgdGhhdCBpcyByZXR1cm5lZCBmcm9tIGEgY2FsbCB0b1xuICogYHtAbGluayBtb2R1bGU6Y2hhbmtvL2NoYW5uZWxzLmNoYW58Y2hhbn1gLiBIb3dldmVyLCB0aGlzIG9iamVjdCBpcyBpbnRlbmRlZFxuICogdG8gYmUgdXNlZCBhcyBhIHZhbHVlIHRvIHBhc3MgdG8gY2hhbm5lbCBvcGVyYXRpb24gZnVuY3Rpb25zOyBpdCBkb2Vzbid0IGhhdmVcbiAqIGFueSBwcm9wZXJ0aWVzIG9mIGludGVyZXN0IHRvIGFuIGVuZCB1c2VyLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y2hhbmtvL2NoYW5uZWxzXG4gKiBAdHlwZWRlZiBDaGFubmVsXG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIGEgY2hhbm5lbC4gVGhpcyBpcyBhIGxvdy1sZXZlbCBmdW5jdGlvbjtcbiAqIGB7QGxpbmsgbW9kdWxlOmNoYW5rby9jaGFubmVscy5jaGFufGNoYW59YCBwZXJmb3JtcyBzb21lIG5lY2Vzc2FyeVxuICogbWFuaXB1bGF0aW9ucyBvbiBhcmd1bWVudHMgYmVmb3JlIHVzaW5nIHRoaXMgZnVuY3Rpb24gdG8gcGVyZm9ybSB0aGUgYWN0dWFsXG4gKiBjcmVhdGlvbi5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNoYW5rby9jaGFubmVsXG4gKiBAcGFyYW0ge251bGwgfCBtb2R1bGU6Y2hhbmtvL2NoYW5uZWxzLkJ1ZmZlcn0gYnVmZmVyIEFuIG9wdGlvbmFsIGJ1ZmZlciB0aGF0LFxuICogICAgIGlmIHByZXNlbnQsIGlzIHVzZWQgdG8gY3JlYXRlIGEgYnVmZmVyZWQgY2hhbm5lbC4gSWYgdGhpcyBpcyBgbnVsbGAsIGFuXG4gKiAgICAgdW5idWZmZXJlZCBjaGFubmVsIGlzIGNyZWF0ZWQuXG4gKiBAcGFyYW0ge21vZHVsZTpjaGFua28vY2hhbm5lbHMuVHJhbnNkdWNlcn0geGZvcm0gVGhlIHRyYW5zZHVjZXIgdXNlZCB0b1xuICogICAgIHRyYW5zZm9ybSB2YWx1ZXMgc2VudCB0byB0aGUgY2hhbm5lbC4gSWYgbm8gdHJhbnNmb3JtYXRpb25zIGFyZVxuICogICAgIG5lY2Vzc2FyeSwgYSBwYXNzdGhyb3VnaCB0cmFuc2R1Y2VyIHNob3VsZCBiZSBwcm92aWRlZC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNUaW1lZCBJbmRpY2F0ZXMgd2hldGhlciB0aGUgY2hhbm5lbCBpcyBhIHRpbWVkIGNoYW5uZWwuXG4gKiAgICAgVGhlIHRpbWluaW5nIG1lY2hhbmlzbSBpcyBoYW5kbGVkIG91dHNpZGUgdGhlIGNoYW5uZWwsIGJ1dCB0aGlzIHByb3BlcnR5XG4gKiAgICAgaXMgcHJvdmlkZWQgdG8gYmUgYWJsZSB0byBxdWVyeSB3aGV0aGVyIHRoYXQncyB0aGUgY2FzZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXhEaXJ0eT02NCBUaGUgbWF4aW11bSBudW1iZXIgb2YgZGlydHkgb3BlcmF0aW9ucyB0byBhbGxvd1xuICogICAgIGJlZm9yZSB0aGV5J3JlIHB1cmdlZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXhRdWV1ZWQ9MTAyNCBUaGUgbWF4aW11bSBudW1iZXIgb2Ygb3BlcmF0aW9ucyB0aGF0IGNhbiBiZVxuICogICAgIHF1ZXVlZCBiZWZvcmUgbmV3IG9uZXMgYXJlIHJlamVjdGVkLlxuICogQHJldHVybiB7bW9kdWxlOmNoYW5rby9jaGFubmVscy5DaGFubmVsfSBBIG5ldyBjaGFubmVsLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY2hhbm5lbChcbiAgYnVmZmVyLFxuICB4Zm9ybSxcbiAgaXNUaW1lZCA9IGZhbHNlLFxuICBtYXhEaXJ0eSA9IE1BWF9ESVJUWSxcbiAgbWF4UXVldWVkID0gTUFYX1FVRVVFRFxuKSB7XG4gIHJldHVybiBPYmplY3QuY3JlYXRlKG51bGwsIHtcbiAgICBidWZmZXI6IHtcbiAgICAgIHZhbHVlOiBidWZmZXJcbiAgICB9LFxuICAgIHhmb3JtOiB7XG4gICAgICB2YWx1ZTogeGZvcm1cbiAgICB9LFxuICAgIG1heERpcnR5OiB7XG4gICAgICB2YWx1ZTogbWF4RGlydHlcbiAgICB9LFxuICAgIG1heFF1ZXVlZDoge1xuICAgICAgdmFsdWU6IG1heFF1ZXVlZFxuICAgIH0sXG4gICAgcmVjdnM6IHtcbiAgICAgIHZhbHVlOiBxdWV1ZSgpXG4gICAgfSxcbiAgICBzZW5kczoge1xuICAgICAgdmFsdWU6IHF1ZXVlKClcbiAgICB9LFxuICAgIGRpcnR5UmVjdnM6IHtcbiAgICAgIHZhbHVlOiAwLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9LFxuICAgIGRpcnR5U2VuZHM6IHtcbiAgICAgIHZhbHVlOiAwLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9LFxuICAgIGNsb3NlZDoge1xuICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9LFxuICAgIGlzQnVmZmVyZWQ6IHtcbiAgICAgIHZhbHVlOiAhIWJ1ZmZlclxuICAgIH0sXG4gICAgaXNUaW1lZDoge1xuICAgICAgdmFsdWU6IGlzVGltZWRcbiAgICB9XG4gIH0pO1xufVxuXG4vKipcbiAqIFNlbmRzIGEgdmFsdWUgdG8gYSBjaGFubmVsLiBUaGUgc3BlY2lmaWVkIGhhbmRsZXIgaXMgdXNlZCB0byBjb250cm9sIHdoZXRoZXJcbiAqIHRoZSBzZW5kIGlzIGFjdGl2ZSBhbmQgd2hhdCB0byBkbyBhZnRlciB0aGUgc2VuZCBjb21wbGV0ZXMuIEEgc2VuZCBjYW4gYmVjb21lXG4gKiBpbmFjdGl2ZSBpZiBpdCB3YXMgcGFydCBvZiBhbiBgc2VsZWN0YCBjYWxsIGFuZCBzb21lIG90aGVyIG9wZXJhdGlvblxuICogc3BlY2lmaWVkIGluIHRoYXQgY2FsbCBoYXMgYWxyZWFkeSBjb21wbGV0ZWQuXG4gKlxuICogVGhpcyB2YWx1ZSBpcyBnaXZlbiB0byBhIHJlY2VpdmUgaGFuZGxlciBpbW1lZGlhdGVseSBpZiB0aGVyZSdzIG9uZSB3YWl0aW5nLlxuICogT3RoZXJ3aXNlIHRoZSB2YWx1ZSBhbmQgaGFuZGxlciBhcmUgcXVldWVkIHRvZ2V0aGVyIHRvIHdhaXQgZm9yIGEgcmVjZWl2ZS5cbiAqXG4gKiBUaGlzIGlzIGEgbG93LWxldmVsIG9wZXJhdGlvbiB0aGF0J3MgcHJvdmlkZWQgYXMgYSBwYXJ0IG9mIHRoZSBjaGFubmVsXG4gKiBpbXBsZW1lbnRhdGlvbiBzbyB0aGF0IG90aGVyIG9wZXJhdGlvbnMgZnVuY3Rpb25zIGNhbiBwcm9wZXJseSBhcHBseVxuICogaGFuZGxlcnMuIEl0IGlzIG5vdCBtZWFudCBmb3IgZ2VuZXJhbCB1c2UuIFVzZSB0aG9zZSBvdGhlciBvcGVyYXRpb25zXG4gKiBmdW5jdGlvbnMgaW5zdGVhZC5cbiAqXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjaGFua28vY2hhbm5lbFxuICogQHBhcmFtIHttb2R1bGU6Y2hhbmtvL2NoYW5uZWxzLkNoYW5uZWx9IGNoYW5uZWwgVGhlIGNoYW5uZWwgdGhhdCB0aGUgdmFsdWUgaXNcbiAqICAgICBiZWluZyBzZW50IHRvLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gYmUgcHV0IG9udG8gdGhlIGNoYW5uZWwuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGhhbmRsZXIuYWN0aXZlIERldGVybWluZXMgd2hldGhlciB0aGUgc2VuZCBpcyBzdGlsbCBhY3RpdmVcbiAqICAgICBhbmQgc2hvdWxkIHN0aWxsIGJlIHNlcnZpY2VkLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gaGFuZGxlci5jb21taXQgRGVhY3RpdmF0ZXMgdGhlIHNlbmQgKHNvIGl0IGNhbid0IGJlXG4gKiAgICAgc2VydmljZWQgYSBzZWNvbmQgdGltZSkgYW5kIHJldHVybnMgdGhlIGNhbGxiYWNrIHRvIGJlIGZpcmVkIHdoZW4gdGhlXG4gKiAgICAgc2VuZCBjb21wbGV0ZXMuXG4gKiBAcmV0dXJuIHttb2R1bGU6Y2hhbmtvL2NoYW5uZWx+Qm94fG51bGx9IE9uZSBvZiB0aHJlZSB2YWx1ZXMuIEEgYm94ZWQgYHRydWVgXG4gKiAgICAgaXMgcmV0dXJuZWQgaWYgdGhlIHNlbmQgd2FzIGltbWVkaWF0ZWx5IGNvbnN1bWVkIGJ5IGEgcGVuZGluZyByZWNlaXZlLiBBXG4gKiAgICAgYm94ZWQgYGZhbHNlYCBpcyByZXR1cm5lZCBpZiB0aGUgc2VuZCB3YXMgcGVyZm9ybWVkIG9uIGEgY2hhbm5lbCB0aGF0IHdhc1xuICogICAgIGFscmVhZHkgY2xvc2VkIGJ5IHRoZSB0aW1lIHRoZSBzZW5kIHRvb2sgcGxhY2UuIGBudWxsYCBpcyByZXR1cm5lZCBpZiB0aGVcbiAqICAgICBzZW5kIHdhcyBxdWV1ZWQgcGVuZGluZyBhIGNvcnJlc3BvbmRpbmcgcmVjZWl2ZS5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGhhbmRsZVNlbmQoY2hhbm5lbCwgdmFsdWUsIGhhbmRsZXIpIHtcbiAgaWYgKHZhbHVlID09PSBDTE9TRUQpIHtcbiAgICB0aHJvdyBFcnJvcihcIkNhbm5vdCBzZW5kIENMT1NFRCB0byBhIGNoYW5uZWxcIik7XG4gIH1cblxuICBpZiAoY2hhbm5lbC5jbG9zZWQpIHtcbiAgICBoYW5kbGVyLmNvbW1pdCgpO1xuICAgIHJldHVybiBib3goZmFsc2UpO1xuICB9XG5cbiAgbGV0IHJlY2VpdmVyLCBjYWxsYmFjaztcblxuICAvLyBQdXNoIHRoZSBpbmNvbWluZyB2YWx1ZSB0aHJvdWdoIHRoZSBidWZmZXIsIGV2ZW4gaWYgdGhlcmUncyBhbHJlYWR5IGFcbiAgLy8gcmVjZWl2ZXIgd2FpdGluZyBmb3IgdGhlIHZhbHVlLiBUaGlzIGlzIHRvIG1ha2Ugc3VyZSB0aGF0IHRoZSB0cmFuc2R1Y2VyXG4gIC8vIHN0ZXAgZnVuY3Rpb24gaGFzIGEgY2hhbmNlIHRvIGFjdCBvbiB0aGUgdmFsdWUgZmlyc3QsIHdoaWNoIGNvdWxkIGNoYW5nZVxuICAvLyB0aGUgdmFsdWUgb3IgbWFrZSBpdCBhbHRvZ2V0aGVyIHVuYXZhaWxhYmxlLlxuICAvL1xuICAvLyBJZiB0aGUgY2hhbm5lbCBpcyB1bmJ1ZmZlcmVkIHRoaXMgcHJvY2VzcyBpcyBza2lwcGVkICh0aGVyZSBjYW4ndCBiZSBhXG4gIC8vIHRyYW5zZHVjZXIgb24gYW4gdW5idWZmZXJlZCBjaGFubmVsIGFueXdheSkuIElmIHRoZSBidWZmZXIgaXMgZnVsbCwgdGhlXG4gIC8vIHRyYW5zZHVjZXIncyB3b3JrIGlzIGRlZmVycmVkIHVudGlsIGxhdGVyIHdoZW4gdGhlIGJ1ZmZlciBpcyBub3QgZnVsbC5cbiAgaWYgKGNoYW5uZWwuYnVmZmVyICYmICFpc0Z1bGwoY2hhbm5lbC5idWZmZXIpKSB7XG4gICAgaGFuZGxlci5jb21taXQoKTtcbiAgICBjb25zdCBkb25lID0gaXNSZWR1Y2VkKGNoYW5uZWwueGZvcm1bcC5zdGVwXShjaGFubmVsLmJ1ZmZlciwgdmFsdWUpKTtcblxuICAgIGZvciAoOzspIHtcbiAgICAgIGlmIChjb3VudChjaGFubmVsLmJ1ZmZlcikgPT09IDApIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICByZWNlaXZlciA9IGRlcXVldWUoY2hhbm5lbC5yZWN2cyk7XG4gICAgICBpZiAocmVjZWl2ZXIgPT09IEVNUFRZKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgaWYgKHJlY2VpdmVyLmFjdGl2ZSkge1xuICAgICAgICBjYWxsYmFjayA9IHJlY2VpdmVyLmNvbW1pdCgpO1xuICAgICAgICBjb25zdCB2YWwgPSByZW1vdmUoY2hhbm5lbC5idWZmZXIpO1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICBkaXNwYXRjaCgoKSA9PiBjYWxsYmFjayh2YWwpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChkb25lKSB7XG4gICAgICBjbG9zZShjaGFubmVsKTtcbiAgICB9XG4gICAgcmV0dXJuIGJveCh0cnVlKTtcbiAgfVxuXG4gIC8vIFRoaXMgbG9vcCBoYXBwZW5zIGlmIHRoZSBjaGFubmVsIGlzIHVuYnVmZmVyZWQgYW5kIHRoZXJlIGlzIGF0IGxlYXN0IG9uZVxuICAvLyBwZW5kaW5nIHJlY2VpdmUuIChCdWZmZXJlZCBjaGFubmVscyBicmVhayBvdXQgb2YgdGhpcyBsb29wIGltbWVkaWF0ZWx5LFxuICAvLyBiZWNhdXNlIGluIG9yZGVyIGZvciBhIGJ1ZmZlcmVkIGNoYW5uZWwgdG8gcmVhY2ggdGhpcyBwb2ludCwgaXRzIGJ1ZmZlclxuICAvLyBtdXN0IGhhdmUgYmVlbiBmdWxsLiBJZiB0aGUgYnVmZmVyIGlzIGZ1bGwsIHRoYXQgbWVhbnMgdGhlcmUgYXJlIG5vIHBlbmRpbmdcbiAgLy8gcmVjZWl2ZXMgYW5kIHRoZSBmaXJzdCBvbmUgcmVhZCB3aWxsIGJlIEVNUFRZLikgSXQgcHJvY2Vzc2VzIHRoZSBuZXh0XG4gIC8vIHBlbmRpbmcgcmVjZWl2ZSBpbW1lZGlhdGVseS5cbiAgZm9yICg7Oykge1xuICAgIHJlY2VpdmVyID0gZGVxdWV1ZShjaGFubmVsLnJlY3ZzKTtcbiAgICBpZiAocmVjZWl2ZXIgPT09IEVNUFRZKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgaWYgKHJlY2VpdmVyLmFjdGl2ZSkge1xuICAgICAgaGFuZGxlci5jb21taXQoKTtcbiAgICAgIGNhbGxiYWNrID0gcmVjZWl2ZXIuY29tbWl0KCk7XG4gICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgZGlzcGF0Y2goKCkgPT4gY2FsbGJhY2sodmFsdWUpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBib3godHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgLy8gSWYgdGhlcmUgYXJlIG5vIHBlbmRpbmcgcmVjZWl2ZXMgb24gYW4gdW5idWZmZXJlZCBjaGFubmVsLCBvciBvbiBhIGJ1ZmZlcmVkXG4gIC8vIGNoYW5uZWwgd2l0aCBhIGZ1bGwgYnVmZmVyLCB3ZSBxdWV1ZSB0aGUgc2VuZCB0byB0bGV0IGl0IHdhaXQgZm9yIGEgcmVjZWl2ZVxuICAvLyB0byBiZWNvbWUgYXZhaWxhYmxlLiBTZW5kcyB3aG9zZSBoYW5kbGVycyBoYXZlIGdvbmUgaW5hY3RpdmUgKHdoaWNoIGhhcHBlbnNcbiAgLy8gaWYgdGhleSB3ZXJlIHByb2Nlc3NlZCBhcyBwYXJ0IG9mIGEgYHNlbGVjdGAgY2FsbCkgYXJlIHBlcmlvZGljYWxseSBwdXJnZWQuXG4gIGlmIChjaGFubmVsLmRpcnR5U2VuZHMgPiBjaGFubmVsLm1heERpcnR5KSB7XG4gICAgZmlsdGVyKGNoYW5uZWwuc2VuZHMsIHNlbmRlciA9PiBzZW5kZXIuaGFuZGxlci5hY3RpdmUpO1xuICAgIGNoYW5uZWwuZGlydHlTZW5kcyA9IDA7XG4gIH0gZWxzZSB7XG4gICAgY2hhbm5lbC5kaXJ0eVNlbmRzKys7XG4gIH1cblxuICBpZiAocUNvdW50KGNoYW5uZWwuc2VuZHMpID49IGNoYW5uZWwubWF4UXVldWVkKSB7XG4gICAgdGhyb3cgRXJyb3IoXG4gICAgICBgTm8gbW9yZSB0aGFuICR7Y2hhbm5lbC5tYXhRdWV1ZWR9IHBlbmRpbmcgc2VuZHMgYXJlIGFsbG93ZWQgb24gYSBzaW5nbGUgY2hhbm5lbGBcbiAgICApO1xuICB9XG4gIGVucXVldWUoY2hhbm5lbC5zZW5kcywgc2VuZEJveCh2YWx1ZSwgaGFuZGxlcikpO1xuXG4gIHJldHVybiBudWxsO1xufVxuXG4vKipcbiAqIFJlY2VpdmVzIGEgdmFsdWUgZnJvbSBhIGNoYW5uZWwuIFRoZSBzcGVjaWZpZWQgaGFuZGxlciBpcyB1c2VkIHRvIGNvbnRyb2xcbiAqIHdoZXRoZXIgdGhlIHJlY2VpdmUgaXMgYWN0aXZlIGFuZCB3aGF0IHRvIGRvIGFmdGVyIHRoZSByZWNlaXZlIGNvbXBsZXRlcy4gQVxuICogcmVjZWl2ZSBjYW4gYmVjb21lIGluYWN0aXZlIGlmIGl0IHdhcyBwYXJ0IG9mIGFuIGBzZWxlY3RgIGNhbGwgYW5kIHNvbWUgb3RoZXJcbiAqIG9wZXJhdGlvbiBzcGVjaWZpZWQgaW4gdGhhdCBjYWxsIGhhcyBhbHJlYWR5IGNvbXBsZXRlZC5cbiAqXG4gKiBUaGlzIHZhbHVlIGlzIGdpdmVuIHRvIGEgc2VuZCBoYW5kbGVyIGltbWVkaWF0ZWx5IGlmIHRoZXJlJ3Mgb25lIHdhaXRpbmcuXG4gKiBPdGhlcndpc2UgdGhlIHZhbHVlIGFuZCBoYW5kbGVyIGFyZSBxdWV1ZWQgdG9nZXRoZXIgdG8gd2FpdCBmb3IgYSBzZW5kLlxuICpcbiAqIFRoaXMgaXMgYSBsb3ctbGV2ZWwgb3BlcmF0aW9uIHRoYXQncyBwcm92aWRlZCBhcyBhIHBhcnQgb2YgdGhlIGNoYW5uZWxcbiAqIGltcGxlbWVudGF0aW9uIHNvIHRoYXQgb3RoZXIgb3BlcmF0aW9ucyBmdW5jdGlvbnMgY2FuIHByb3Blcmx5IGFwcGx5XG4gKiBoYW5kbGVycy4gSXQgaXMgbm90IG1lYW50IGZvciBnZW5lcmFsIHVzZS4gVXNlIHRob3NlIG90aGVyIG9wZXJhdGlvbnNcbiAqIGZ1bmN0aW9ucyBpbnN0ZWFkLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y2hhbmtvL2NoYW5uZWxcbiAqIEBwYXJhbSB7bW9kdWxlOmNoYW5rby9jaGFubmVscy5DaGFubmVsfSBjaGFubmVsIFRoZSBjaGFubmVsIHRoYXQgdGhlIHZhbHVlIGlzXG4gKiAgICAgYmVpbmcgcmVjZWl2ZWQgZnJvbS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaGFuZGxlci5hY3RpdmUgRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSByZWNlaXZlIGlzIHN0aWxsXG4gKiAgICAgYWN0aXZlIGFuZCBzaG91bGQgc3RpbGwgYmUgc2VydmljZWQuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBoYW5kbGVyLmNvbW1pdCBEZWFjdGl2YXRlcyB0aGUgcmVjZWl2ZSAoc28gaXQgY2FuJ3QgYmVcbiAqICAgICBzZXJ2aWNlZCBhIHNlY29uZCB0aW1lKSBhbmQgcmV0dXJucyB0aGUgY2FsbGJhY2sgdG8gYmUgZmlyZWQgd2hlbiB0aGVcbiAqICAgICByZWNlaXZlIGNvbXBsZXRlcy5cbiAqIEByZXR1cm4ge21vZHVsZTpjaGFua28vY2hhbm5lbH5Cb3h8bnVsbH0gRWl0aGVyIHRoZSBib3hlZCB2YWx1ZSByZWNlaXZlZCBmcm9tXG4gKiAgICAgdGhlIGNoYW5uZWwsIG9yIGBudWxsYCBpZiB0aGUgcmVjZWl2ZSBtdXN0IGJlIHF1ZXVlZCB0byBhd2FpdCBhXG4gKiAgICAgY29ycmVzcG9uZGluZyBzZW5kLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaGFuZGxlUmVjdihjaGFubmVsLCBoYW5kbGVyKSB7XG4gIGxldCBzZW5kZXIsIHNlbmRIYW5kbGVyLCBjYWxsYmFjaztcblxuICAvLyBSdW5zIGlmIHRoZSBjaGFubmVsIGlzIGJ1ZmZlcmVkIGFuZCB0aGUgYnVmZmVyZWQgaXMgbm90IGVtcHR5IChhbiBlbXB0eVxuICAvLyBidWZmZXIgbWVhbnMgdGhlcmUgYXJlIG5vIHBlbmRpbmcgc2VuZHMpLiBXZSBpbW1lZGlhdGVseSBwcm9jZXNzIGFueSBzZW5kc1xuICAvLyB0aGF0IHdlcmUgcXVldWVkIHdoZW4gdGhlcmUgd2VyZSBubyBwZW5kaW5nIHJlY2VpdmVzLCB1cCB1bnRpbCB0aGUgYnVmZmVyXG4gIC8vIGlzIGZpbGxlZCB3aXRoIHNlbnQgdmFsdWVzLlxuICBpZiAoY2hhbm5lbC5idWZmZXIgJiYgY291bnQoY2hhbm5lbC5idWZmZXIpID4gMCkge1xuICAgIGhhbmRsZXIuY29tbWl0KCk7XG4gICAgY29uc3QgdmFsdWUgPSByZW1vdmUoY2hhbm5lbC5idWZmZXIpO1xuXG4gICAgZm9yICg7Oykge1xuICAgICAgaWYgKGlzRnVsbChjaGFubmVsLmJ1ZmZlcikpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBzZW5kZXIgPSBkZXF1ZXVlKGNoYW5uZWwuc2VuZHMpO1xuICAgICAgaWYgKHNlbmRlciA9PT0gRU1QVFkpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIHNlbmRIYW5kbGVyID0gc2VuZGVyLmhhbmRsZXI7XG4gICAgICBpZiAoc2VuZEhhbmRsZXIuYWN0aXZlKSB7XG4gICAgICAgIGNhbGxiYWNrID0gc2VuZEhhbmRsZXIuY29tbWl0KCk7XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgIGRpc3BhdGNoKCgpID0+IGNhbGxiYWNrKHRydWUpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNSZWR1Y2VkKGNoYW5uZWwueGZvcm1bcC5zdGVwXShjaGFubmVsLmJ1ZmZlciwgc2VuZGVyLnZhbHVlKSkpIHtcbiAgICAgICAgICBjbG9zZShjaGFubmVsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYm94KHZhbHVlKTtcbiAgfVxuXG4gIC8vIFRoaXMgbG9vcCBydW5zIG9uIGFuIHVuYnVmZmVyZWQgY2hhbm5lbCBpZiB0aGVyZSBhcmUgYW55IHBlbmRpbmcgc2VuZHMuXG4gIC8vIChCdWZmZXJlZCBjaGFubmVscyBicmVhayBvdXQgb2YgdGhpcyBsb29wIGltbWVkaWF0ZWx5IGJlY2F1c2UgaW4gb3JkZXIgdG9cbiAgLy8gaGF2ZSBjb21lIHRoaXMgZmFyIHdpdGhvdXQgcmV0dXJuaW5nLCB0aGUgY2hhbm5lbCdzIGJ1ZmZlciBtdXN0IGhhdmUgYmVlblxuICAvLyBlbXB0eS4gQW4gZW1wdHkgYnVmZmVyIG1lYW5zIHRoZXJlIGFyZSBubyBwZW5kaW5nIHNlbmRzLCBzbyB0aGUgZmlyc3RcbiAgLy8gcGVuZGluZyBzZW5kIHJlYWQgZnJvbSBpdCB3aWxsIGJlIEVNUFRZLikgSXQgcHJvY2Vzc2VzIHRoZSBuZXh0IHBlbmRpbmdcbiAgLy8gc2VuZCBpbW1lZGlhdGVseS5cbiAgZm9yICg7Oykge1xuICAgIHNlbmRlciA9IGRlcXVldWUoY2hhbm5lbC5zZW5kcyk7XG4gICAgaWYgKHNlbmRlciA9PT0gRU1QVFkpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBzZW5kSGFuZGxlciA9IHNlbmRlci5oYW5kbGVyO1xuICAgIGlmIChzZW5kSGFuZGxlci5hY3RpdmUpIHtcbiAgICAgIGNhbGxiYWNrID0gc2VuZEhhbmRsZXIuY29tbWl0KCk7XG4gICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgZGlzcGF0Y2goKCkgPT4gY2FsbGJhY2sodHJ1ZSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGJveChzZW5kZXIudmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIC8vIElmIHdlJ3ZlIGV4aGF1c3RlZCBhbGwgb2Ygb3VyIHBlbmRpbmcgc2VuZHMgYW5kIHRoZSBjaGFubmVsIGlzIG1hcmtlZFxuICAvLyBjbG9zZWQsIHdlIGNhbiBmaW5hbGx5IHJldXRybiB0aGUgZmFjdCB0aGF0IHRoZSBjaGFubmVsIGlzIGNsb3NlZC4gVGhpc1xuICAvLyBlbnN1cmVzIHRoYXQgYW55IHNlbmRzIHRoYXQgd2VyZSBhbHJlYWR5IHBlbmRpbmcgb24gdGhlIGNoYW5uZWwgYXJlXG4gIC8vIHByb2Nlc3NlZCBiZWZvcmUgY2xvc3VyZSwgZXZlbiBpZiB0aGUgY2hhbm5lbCB3YXMgY2xvc2VkIGJlZm9yZSB0aGF0IGNvdWxkXG4gIC8vIGhhcHBlbi5cbiAgaWYgKGNoYW5uZWwuY2xvc2VkKSB7XG4gICAgaGFuZGxlci5jb21taXQoKTtcbiAgICByZXR1cm4gYm94KENMT1NFRCk7XG4gIH1cblxuICAvLyBJZiBhbiB1bmJ1ZmZlcmVkIGNoYW5uZWwgb3IgYSBidWZmZXJlZCBjaGFubmVsIHdpdGggYW4gZW1wdHkgYnVmZmVyIGhhcyBub1xuICAvLyBwZW5kaW5nIHNlbmRzLCBhbmQgaWYgdGhlIGNoYW5uZWwgaXMgc3RpbGwgb3BlbiwgdGhlIHJlY2VpdmUgaXMgcXVldWVkIHRvXG4gIC8vIGJlIHByb2Nlc3NlZCB3aGVuIGEgc2VuZCBpcyBhdmFpbGFibGUuIFJlY2VpdmVzIHdob3NlIGhhbmRsZXJzIGhhdmUgZ29uZVxuICAvLyBpbmFjdGl2ZSBhcyB0aGUgcmVzdWx0IG9mIGBzZWxlY3RgIHByb2Nlc3NpbmcgYXJlIHBlcmlvZGljYWxseSBwdXJnZWQuXG4gIGlmIChjaGFubmVsLmRpcnR5UmVjdnMgPiBjaGFubmVsLm1heERpcnR5KSB7XG4gICAgZmlsdGVyKGNoYW5uZWwucmVjdnMsIHJlY2VpdmVyID0+IHJlY2VpdmVyLmFjdGl2ZSk7XG4gICAgY2hhbm5lbC5kaXJ0eVJlY3ZzID0gMDtcbiAgfSBlbHNlIHtcbiAgICBjaGFubmVsLmRpcnR5UmVjdnMrKztcbiAgfVxuXG4gIGlmIChxQ291bnQoY2hhbm5lbC5yZWN2cykgPj0gY2hhbm5lbC5tYXhRdWV1ZWQpIHtcbiAgICB0aHJvdyBFcnJvcihcbiAgICAgIGBObyBtb3JlIHRoYW4gJHtjaGFubmVsLm1heFF1ZXVlZH0gcGVuZGluZyByZWNlaXZlcyBhcmUgYWxsb3dlZCBvbiBhIHNpbmdsZSBjaGFubmVsYFxuICAgICk7XG4gIH1cbiAgZW5xdWV1ZShjaGFubmVsLnJlY3ZzLCBoYW5kbGVyKTtcblxuICByZXR1cm4gbnVsbDtcbn1cblxuLyoqXG4gKiBDbG9zZXMgdGhlIGNoYW5uZWwgaWYgaXQgaXNuJ3QgYWxyZWFkeSBjbG9zZWQuIFRoaXMgaW1tZWRpYXRlbHkgcmV0dXJucyBhbnlcbiAqIGJ1ZmZlcmVkIHZhbHVlcyB0byBwZW5kaW5nIHJlY2VpdmVzLiBJZiB0aGVyZSBhcmUgbm8gYnVmZmVyZWQgdmFsdWVzIChvciBpZlxuICogdGhleSd2ZSBhbHJlYWR5IGJlZW4gdGFrZW4gYnkgb3RoZXIgcmVjZWl2ZXMpLCB0aGVuIGFsbCBvZiB0aGUgcmVzdCBvZiB0aGVcbiAqIHJlY2VpdmVzIGFyZSBjb21wbGV0ZWQgd2l0aCB0aGUgdmFsdWUgb2Yge0BsaW5rIG1vZHVsZTpjaGFua29+Q0xPU0VEfENMT1NFRH0uXG4gKiBBbnkgcGVuZGluZyBzZW5kcyBhcmUgY29tcGxldGVkIHdpdGggdGhlIHZhbHVlIG9mIGBmYWxzZWAuXG4gKlxuICogTm90ZSB0aGF0IHRoZSBidWZmZXIgaXMgbm90IGVtcHRpZWQgaWYgdGhlcmUgYXJlIHN0aWxsIHZhbHVlcyByZW1haW5pbmcgYWZ0ZXJcbiAqIGFsbCBvZiB0aGUgcGVuZGluZyByZWNlaXZlcyBoYXZlIGJlZW4gaGFuZGxlZC4gVGhlIGNoYW5uZWwgd2lsbCBzdGlsbCBwcm92aWRlXG4gKiB0aG9zZSB2YWx1ZXMgdG8gYW55IGZ1dHVyZSByZWNlaXZlcywgdGhvdWdoIG5vIG5ldyB2YWx1ZXMgbWF5IGJlIGFkZGVkIHRvIHRoZVxuICogY2hhbm5lbC4gT25jZSB0aGUgYnVmZmVyIGlzIGRlcGxldGVkLCBhbnkgZnV0dXJlIHJlY2VpdmVzIHdpbGwgcmV0dXJuXG4gKiB7QGxpbmsgbW9kdWxlOmNoYW5rb35DTE9TRUR8Q0xPU0VEfS5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNoYW5rby9jaGFubmVsc1xuICogQHBhcmFtIHttb2R1bGU6Y2hhbmtvL2NoYW5uZWxzLkNoYW5uZWx9IGNoYW5uZWwgVGhlIGNoYW5uZWwgdG8gYmUgY2xvc2VkLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY2xvc2UoY2hhbm5lbCkge1xuICBpZiAoY2hhbm5lbC5jbG9zZWQpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY2hhbm5lbC5jbG9zZWQgPSB0cnVlO1xuXG4gIGxldCByZWNlaXZlciwgc2VuZGVyLCBjYWxsYmFjaztcblxuICAvLyBJZiB0aGVyZSBpcyBhIGJ1ZmZlciBhbmQgaXQgaGFzIGF0IGxlYXN0IG9uZSB2YWx1ZSBpbiBpdCwgc2VuZCB0aG9zZSB2YWx1ZXNcbiAgLy8gdG8gYW55IHBlbmRpbmcgcmVjZWl2ZXMgdGhhdCBtaWdodCBzdGlsbCBiZSBxdWV1ZWQuXG4gIGlmIChjaGFubmVsLmJ1ZmZlcikge1xuICAgIGNoYW5uZWwueGZvcm1bcC5yZXN1bHRdKGNoYW5uZWwuYnVmZmVyKTtcbiAgICBmb3IgKDs7KSB7XG4gICAgICBpZiAoY291bnQoY2hhbm5lbC5idWZmZXIpID09PSAwKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgcmVjZWl2ZXIgPSBkZXF1ZXVlKGNoYW5uZWwucmVjdnMpO1xuICAgICAgaWYgKHJlY2VpdmVyID09PSBFTVBUWSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGlmIChyZWNlaXZlci5hY3RpdmUpIHtcbiAgICAgICAgY2FsbGJhY2sgPSByZWNlaXZlci5jb21taXQoKTtcbiAgICAgICAgY29uc3QgdmFsdWUgPSByZW1vdmUoY2hhbm5lbC5idWZmZXIpO1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICBkaXNwYXRjaCgoKSA9PiBjYWxsYmFjayh2YWx1ZSkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gT25jZSB0aGUgYnVmZmVyIGlzIGVtcHR5IChvciBpZiB0aGVyZSBpc24ndCBhIGJ1ZmZlciBhdCBhbGwpLCBzZW5kIENMT1NFRFxuICAvLyB0byBhbGwgcmVtYWluaW5nIHF1ZXVlZCByZWNlaXZlcy5cbiAgZm9yICg7Oykge1xuICAgIHJlY2VpdmVyID0gZGVxdWV1ZShjaGFubmVsLnJlY3ZzKTtcbiAgICBpZiAocmVjZWl2ZXIgPT09IEVNUFRZKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgaWYgKHJlY2VpdmVyLmFjdGl2ZSkge1xuICAgICAgY2FsbGJhY2sgPSByZWNlaXZlci5jb21taXQoKTtcbiAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICBkaXNwYXRjaCgoKSA9PiBjYWxsYmFjayhDTE9TRUQpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBTZW5kIGBmYWxzZWAgdG8gYW55IHJlbWFpbmluZyBxdWV1ZWQgc2VuZHMuXG4gIGZvciAoOzspIHtcbiAgICBzZW5kZXIgPSBkZXF1ZXVlKGNoYW5uZWwuc2VuZHMpO1xuICAgIGlmIChzZW5kZXIgPT09IEVNUFRZKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgaWYgKHNlbmRlci5oYW5kbGVyLmFjdGl2ZSkge1xuICAgICAgY2FsbGJhY2sgPSBzZW5kZXIuaGFuZGxlci5jb21taXQoKTtcbiAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICBkaXNwYXRjaCgoKSA9PiBjYWxsYmFjayhmYWxzZSkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQge1xuICBDTE9TRUQsXG4gIE1BWF9ESVJUWSxcbiAgTUFYX1FVRVVFRCxcbiAgY2hhbm5lbCxcbiAgaGFuZGxlU2VuZCxcbiAgaGFuZGxlUmVjdixcbiAgY2xvc2UsXG4gIGJveCxcbiAgaXNCb3hcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuLyoqXG4gKiBBbiBpbXBsZW1lbnRhdGlvbiBvZiBjaGFubmVscy4gVGhlc2UgY2hhbm5lbHMgYXJlIGVzc2VudGlhbGx5IHF1ZXVlcyB0aGF0XG4gKiBob2xkIGluc3RydWN0aW9ucyB3YWl0aW5nIGZvciB0aGUgbmV4dCBhdmFpbGFibGUgYXN5bmMgZnVuY3Rpb24gdG8gcHJvY2Vzc1xuICogdGhlbS4gVGhleSBjYW4gYmUgYnVmZmVyZWQsIHdoaWNoIGlzIGFjY29tcGxpc2hlZCB1c2luZyB0aGUgYnVmZmVyIGZ1bmN0aW9uc1xuICogYHtAbGluayBtb2R1bGU6Y2hhbmtvL2NoYW5uZWxzLmZpeGVkfGZpeGVkfWAsXG4gKiBge0BsaW5rIG1vZHVsZTpjaGFua28vY2hhbm5lbHMuZHJvcHBpbmd8ZHJvcHBpbmd9YCwgYW5kXG4gKiBge0BsaW5rIG1vZHVsZTpjaGFua28vY2hhbm5lbHMuc2xpZGluZ3xzbGlkaW5nfWAuXG4gKlxuICogQ2hhbm5lbHMgZG8gbm90IGludGVyYWN0IHdpdGggSlMgdGFza3Mgb3IgdGhlIGRpc3BhdGNoZXIgaW4gYW55IG1lYW5pbmdmdWxcbiAqIHdheS4gVGhleSdyZSBqdXN0IGhlcmUgdG8gaG9sZCB0YXNrcyB3aGljaCBtYXkgdGhlbXNlbHZlcyB0aGVuIGNhdXNlIG5ldyBKU1xuICogdGFza3MgdG8gYmUgY3JlYXRlZCB2aWEgdGhlIGRpc3BhdGNoZXIuXG4gKlxuICogQ2hhbm5lbHMgbWF5IGhhdmUgdHJhbnNkdWNlcnMgYXNzb2NpYXRlZCB3aXRoIHRoZW0uIFRoZSB0cmFuc2R1Y2VycyBhcmVcbiAqIGV4cGVjdGVkIHRvIGZvbGxvdyB0aGUgc2FtZSBjb252ZW50aW9ucyBhcyBhbnkgb2YgdGhlIHBvcHVsYXIgdHJhbnNkdWNlclxuICogbGlicmFyaWVzLiBFeHBsaWNpdCBzdXBwb3J0IGlzIHJlcXVpcmVkIGJlY2F1c2UgY2hhbm5lbHMgd291bGRuJ3QgcGxheSB3ZWxsXG4gKiB3aXRoIHRoZSBub3JtYWwgd2F5IG9mIG1ha2luZyBhbiBvYmplY3Qgc3VwcG9ydCB0cmFuc2R1Y3Rpb24sIGZvciB0d29cbiAqIGRpZmZlcmVudCByZWFzb25zLlxuICpcbiAqICogVHJhbnNkdWNlcnMgcmVxdWlyZSB0aGUgYWJpbGl0eSB0byBjcmVhdGUgYSBuZXcsIGVtcHR5IGNvbGxlY3Rpb24gb2YgdGhlXG4gKiAgIHNhbWUgdHlwZSBhcyB0aGUgaW5wdXQgY29sbGVjdGlvbi4gSW4gdGhpcyBjYXNlLCB0aGF0IHdvdWxkIG1lYW4gY3JlYXRpbmcgYVxuICogICBuZXcgY2hhbm5lbCwgbWVhbmluZyB0aGF0IHRoZSBvdXRwdXQgY2hhbm5lbCAoZnJvbSB3aGljaCB0aGUgdHJhbnNmb3JtZWRcbiAqICAgdmFsdWVzIGFyZSByZWNlaXZlZCkgd291bGQgYmUgZGlmZmVyZW50IHRoYW4gdGhlIGlucHV0IGNoYW5uZWwgKHdoZXJlXG4gKiAgIHZhbHVlcyBhcmUgc2VudCkuXG4gKiAqIElmIHdlIHNvbWVob3cgZ2V0IG92ZXIgdGhhdCByZXF1aXJlbWVudCBhbmQga2VlcCBhbGwgYWN0aW9uIG9uIHRoZSBzYW1lXG4gKiAgIGNoYW5uZWwsIHdlIGNhbid0IHRha2UgdmFsdWVzIGZyb20gdGhlIGNoYW5uZWwsIHRyYW5zZm9ybSB0aGVtLCBhbmQgcHV0XG4gKiAgIHRoZW0gYmFjay4gVGhpcyB3b3VsZCBwb3RlbnRpYWxseSBjaGFuZ2UgdGhlIG9yZGVyIG9mIHZhbHVlcyBpbiB0aGUgY2hhbm5lbFxuICogICBzaW5jZSB3ZSBhcmUgZGVhbGluZyB3aXRoIGFzeW5jaHJvbm91cyBwcm9jZXNzZXMuXG4gKlxuICogVGhlIGV4cGxpY2l0IHN1cHBvcnQgbWVhbnMgYSB0cmFuc2R1Y2VyIGlzIGRpcmVjdGx5IGFzc29jaWF0ZWQgd2l0aCBhXG4gKiBjaGFubmVsLiBXaGVuIGEgdmFsdWUgaXMgc2VudCB0byB0aGUgY2hhbm5lbCwgaXQncyBmaXJzdCBydW4gdGhyb3VnaCB0aGVcbiAqIHRyYW5zZHVjZXIgYW5kIHRoZSB0cmFuc2Zvcm1lZCB2YWx1ZSBpcyB0aGUgb25lIGFjdHVhbGx5IHB1dCBpbnRvIHRoZVxuICogY2hhbm5lbCdzIGJ1ZmZlci4gVGhpcyBhdm9pZHMgYm90aCBvZiB0aGUgcHJvYmxlbXMgbm90ZWQgYWJvdmUuXG4gKlxuICogQG1vZHVsZSBjaGFua28vY2hhbm5lbFxuICogQHByaXZhdGVcbiAqL1xuXG5pbXBvcnQge1xuICBDTE9TRUQsXG4gIGNoYW5uZWwgYXMgY2hhbkltcGwsXG4gIGhhbmRsZVNlbmQsXG4gIGhhbmRsZVJlY3YsXG4gIGNsb3NlIGFzIGNsb3NlSW1wbCxcbiAgTUFYX0RJUlRZLFxuICBNQVhfUVVFVUVEXG59IGZyb20gXCIuL2hhbmRsZXJcIjtcbmltcG9ydCB7IERFRkFVTFQsIHNlbGVjdCwgc2VsZWN0QXN5bmMsIHZhbHVlLCBjaGFubmVsIH0gZnJvbSBcIi4vc2VsZWN0XCI7XG5pbXBvcnQgeyBhZGQsIGZpeGVkLCBpc0J1ZmZlciB9IGZyb20gXCJtb2R1bGVzL2J1ZmZlclwiO1xuaW1wb3J0IHsgcHJvdG9jb2xzIGFzIHAgfSBmcm9tIFwibW9kdWxlcy9wcm90b2NvbFwiO1xuXG4vKipcbiAqIEEgaGFuZGxlciBmdW5jdGlvbiBmb3IgZXhjZXB0aW9ucyB0aGF0IGFyZSB0aHJvd24gYnkgYSB0cmFuc2R1Y2VyIHdoaWxlXG4gKiB0cmFuc2Zvcm1pbmcgdmFsdWVzIG9uIGEgY2hhbm5lbC5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gZXJyIFRoZSBlcnJvciBvYmplY3QgdGhhdCB3YXMgdGhyb3duIGJ5IHRoZSB0cmFuc2R1Y2VyLlxuICogQHJldHVybiB7Kn0gQSB2YWx1ZSB0aGF0IHNob3VsZCBiZSBwdXQgaW50byB0aGUgY2hhbm5lbCdzIGJ1ZmZlciB3aGVuIHRoZVxuICogICAgIHRyYW5zZHVjZXIgdGhyb3dzIHRoZSBlcnJvci4gSWYgdGhpcyB2YWx1ZSBpc1xuICogICAgIHtAbGluayBtb2R1bGU6Y2hhbmtvL2NoYW5uZWxzLkNMT1NFRHxDTE9TRUR9LCB0aGVuIG5vIHZhbHVlIGF0IGFsbCB3aWxsIGJlXG4gKiAgICAgYWRkZWQgdG8gdGhlIGJ1ZmZlci5cbiAqIEBjYWxsYmFjayBFeGNlcHRpb25IYW5kbGVyXG4gKiBAcHJpdmF0ZVxuICovXG5cbi8qKlxuICogVGhlIGRlZmF1bHQgZXhjZXB0aW9uIGhhbmRsZXIsIHVzZWQgd2hlbiBubyBleGNlcHRpb24gaGFuZGxlciBpcyBzdXBwbGllZCB0b1xuICogYHtAbGluayBoYW5kbGVFeGNlcHRpb259YCwgYHtAbGluayB3cmFwVHJhbnNmb3JtZXJ9YCxcbiAqIGB7QGxpbmsgbW9kdWxlOmNoYW5rby9jaGFubmVscy5jaGFufGNoYW59YCwgb3JcbiAqIGB7QGxpbmsgbW9kdWxlOmNoYW5rby9jaGFubmVscy50cmFuc0NoYW58dHJhbnNDaGFufWAuIFRoaXMgZGVmYXVsdCBoYW5kbGVyXG4gKiBtZXJlbHkgcmV0dXJucyBge0BsaW5rIG1vZHVsZTpjaGFua28vY2hhbm5lbHMuQ0xPU0VEfENMT1NFRH1gLCB3aGljaCB3aWxsXG4gKiByZXN1bHQgaW4gbm8gbmV3IHZhbHVlIGJlaW5nIHdyaXR0ZW4gdG8gdGhlIGNoYW5uZWwuXG4gKlxuICogQHR5cGUge21vZHVsZTpjaGFua29+ZXhjZXB0aW9uSGFuZGxlcn1cbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y2hhbmtvL2NoYW5uZWxcbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IERFRkFVTFRfSEFORExFUiA9ICgpID0+IENMT1NFRDtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGhhbmRsZXIgdXNlZCBmb3IgYHNlbmRgIGFuZCBgcmVjdmAgb3BlcmF0aW9ucy5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNoYW5rby9jaGFubmVsXG4gKiBAcGFyYW0ge21vZHVsZTpjaGFua28vY2hhbm5lbH5IYW5kbGVyQ2FsbGJhY2t9IGZuIFRoZSBjYWxsYmFjayB0byBiZSBydW4gd2hlblxuICogICAgIChhbmQgaWYpIHRoZSBvcGVyYXRpb24gY29tcGxldGVzLlxuICogQHJldHVybiB7bW9kdWxlOmNoYW5rby9jaGFubmVsfkhhbmRsZXJ9IFRoZSBuZXcgaGFuZGxlci5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIG9wSGFuZGxlcihmbikge1xuICByZXR1cm4gT2JqZWN0LmNyZWF0ZShudWxsLCB7XG4gICAgYWN0aXZlOiB7XG4gICAgICB2YWx1ZTogdHJ1ZVxuICAgIH0sXG4gICAgY29tbWl0OiB7XG4gICAgICB2YWx1ZTogKCkgPT4gZm5cbiAgICB9XG4gIH0pO1xufVxuXG4vKipcbiAqIEhhbmRsZXMgYW4gZXhjZXB0aW9uIHRoYXQgaXMgdGhyb3duIGluc2lkZSBhIHRyYW5zZHVjZXIuIFRoZSB0aHJvd24gZXJyb3IgaXNcbiAqIHBhc3NlZCB0byB0aGUgYGhhbmRsZXJgIGZ1bmN0aW9uLCBhbmQgdGhlIHJlc3VsdCBvZiB0aGF0IGhhbmRsZXIgZnVuY3Rpb24gaXNcbiAqIGFkZGVkIHRvIHRoZSBjaGFubmVsJ3MgYnVmZmVyLiBJZiB0aGF0IHZhbHVlIGlzXG4gKiB7QGxpbmsgbW9kdWxlOmNoYW5rby9jaGFubmVscy5DTE9TRUR8Q0xPU0VEfSwgdGhlbiBpdCBpcyAqbm90KiBhZGRlZCB0byB0aGVcbiAqIGJ1ZmZlci5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTpjaGFua28vY2hhbm5lbHMuQnVmZmVyfSBidWZmZXIgVGhlIGJ1ZmZlciB0aGF0IGJhY2tzIHRoZVxuICogICAgIGNoYW5uZWwgd2hvc2UgdHJhbnNkdWNlcidzIGV4Y2VwdGlvbnMgYXJlIGJlaW5nIGhhbmRsZWQuXG4gKiBAcGFyYW0ge21vZHVsZTpjaGFua28vY2hhbm5lbH5leGNlcHRpb25IYW5kbGVyfSBoYW5kbGVyIFRoZSBleGNlcHRpb25cbiAqICAgICBoYW5kbGluZyBmdW5jdGlvbiB0aGF0IGlzIHJ1biB3aGVuIGFuIGVycm9yIG9jY3VycyBpbiBhIHRyYW5zZHVjZXIuXG4gKiBAcGFyYW0gIHtPYmplY3R9IGV4IFRoZSBlcnJvciBvYmplY3QgdGhyb3duIGJ5IHRoZSB0cmFuc2R1Y2VyLlxuICogQHJldHVybiB7bW9kdWxlOmNoYW5rby9jaGFubmVscy5CdWZmZXJ9IFRoZSBidWZmZXIgaXRzZWxmLiBUaGlzIGlzIGRvbmUgdG9cbiAqICAgICBtYWtlIGl0IGVhc2llciB0byBpbnRlZ3JhdGUgdGhpcyBmdW5jdGlvbiBpbnRvIGEgdHJhbnNkdWNlcidzIHN0ZXBcbiAqICAgICBmdW5jdGlvbi5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGhhbmRsZUV4Y2VwdGlvbihidWZmZXIsIGhhbmRsZXIsIGV4KSB7XG4gIGNvbnN0IHZhbHVlID0gaGFuZGxlcihleCk7XG4gIGlmICh2YWx1ZSAhPT0gQ0xPU0VEKSB7XG4gICAgYWRkKGJ1ZmZlciwgdmFsdWUpO1xuICB9XG4gIHJldHVybiBidWZmZXI7XG59XG5cbi8qKlxuICogQSB0cmFuc2R1Y2VyIHRoYXQgd3JhcHMgYW5vdGhlciB0cmFuc2R1Y2VyIHdpdGggZXJyb3IgaGFuZGxpbmcgY29kZS4gQW55XG4gKiBlcnJvciB0aGF0IG9jY3VycyB3aXRoaW4gdGhlIHRyYW5zZHVjZXIsIGVpdGhlciBpbiB0aGUgc3RlcCBmdW5jdGlvbiBvciB0aGVcbiAqIHJlc3VsdCBmdW5jdGlvbiwgd2lsbCBjYXVzZSB0aGUgZXJyb3IgaGFuZGxlciB0byBiZSBydW4uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHhmb3JtIFRoZSB0cmFuc2R1Y2VyIHRvIGFkZCBhbiBlcnJvciBoYW5kbGVyIHRvLlxuICogQHBhcmFtIHtFeGNlcHRpb25IYW5kbGVyfSBbaGFuZGxlcj1ERUZBVUxUX0hBTkRMRVJdIFRoZSBleGNlcHRpb24gaGFuZGxpbmdcbiAqICAgICBmdW5jdGlvbiB0aGF0IGlzIHJ1biB3aGVuIGFuIGVycm9yIG9jY3VycyBpbiB0aGUgdHJhbnNkdWNlci5cbiAqIEByZXR1cm4ge09iamVjdH0gQSBuZXcgdHJhbnNkdWNlciB0aGF0IGlzIHRoZSByZXN1bHQgb2Ygd3JhcHBpbmcgdGhlIHByb3ZpZGVkXG4gKiAgICAgdHJhbnNkdWNlcidzIHN0ZXAgYW5kIHJlc3VsdCBmdW5jdGlvbnMgd2l0aCB0aGUgZXhjZXB0aW9uIGhhbmRsZXIuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBoYW5kbGVyVHJhbnNkdWNlcih4Zm9ybSwgaGFuZGxlciA9IERFRkFVTFRfSEFORExFUikge1xuICByZXR1cm4ge1xuICAgIFtwLnN0ZXBdKGJ1ZmZlciwgaW5wdXQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiB4Zm9ybVtwLnN0ZXBdKGJ1ZmZlciwgaW5wdXQpO1xuICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgcmV0dXJuIGhhbmRsZUV4Y2VwdGlvbihidWZmZXIsIGhhbmRsZXIsIGV4KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgW3AucmVzdWx0XShidWZmZXIpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiB4Zm9ybVtwLnJlc3VsdF0oYnVmZmVyKTtcbiAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgIHJldHVybiBoYW5kbGVFeGNlcHRpb24oYnVmZmVyLCBoYW5kbGVyLCBleCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuXG4vKipcbiAqIFRoZSByZWR1Y2VyIHVzZWQgYXQgdGhlIGVuZCBvZiBhIHRyYW5zZHVjZXIgY2hhaW4gdG8gY29udHJvbCBob3cgdGhlXG4gKiB0cmFuc2Zvcm1lZCB2YWx1ZXMgYXJlIHJlZHVjZWQgYmFjayBvbnRvIHRoZSBjaGFubmVsJ3MgYnVmZmVyLiBUaGlzIHJlZHVjZXJcbiAqIGRvZXMgbm90aGluZyBtb3JlIHRoYW4gYWRkIHRoZSBpbnB1dCBpdGVtcyAod2hpY2ggYXJlIHRoZSB0cmFuc2Zvcm1lZCB2YWx1ZXNcbiAqIHRoYXQgYXJlIGJlaW5nIHB1dCBvbnRvIHRoZSBjaGFubmVsKSB0byB0aGUgY2hhbm5lbCBidWZmZXIuXG4gKlxuICogVGhpcyBpcyBhIG5lY2Vzc2FyeSBwYXJ0IG9mIHdvcmtpbmcgd2l0aCBhIHRyYW5zZHVjZXIsIGFzIHRoZSBmaW5hbCByZWR1Y2VyXG4gKiBhbHdheXMgdGFrZXMgdGhlIHRyYW5zZm9ybWVkIHZhbHVlcyBhbmQgcmVuZGVycyB0aGVtIGludG8gd2hhdGV2ZXIgY29sbGVjdGlvblxuICogaXMgZGVzaXJlZC4gVGhpcyBpcyB0aGF0IGZpbmFsIHJlZHVjZXIgZm9yIGNoYW5uZWxzLlxuICpcbiAqIEB0eXBlIHtPYmplY3R9XG4gKiBAcHJpdmF0ZVxuICovXG5jb25zdCBidWZmZXJSZWR1Y2VyID0ge1xuICBbcC5pbml0XSgpIHtcbiAgICB0aHJvdyBFcnJvcihcImluaXQgbm90IGF2YWlsYWJsZVwiKTtcbiAgfSxcblxuICBbcC5zdGVwXShidWZmZXIsIGlucHV0KSB7XG4gICAgYWRkKGJ1ZmZlciwgaW5wdXQpO1xuICAgIHJldHVybiBidWZmZXI7XG4gIH0sXG5cbiAgW3AucmVzdWx0XShidWZmZXIpIHtcbiAgICByZXR1cm4gYnVmZmVyO1xuICB9XG59O1xuXG4vKipcbiAqIFBhcnNlcyB0aGUgYnVmZmVyIGFyZ3VtZW50IGFuZCBvcHRpb25zLCBhbG9uZyB3aXRoIGEgc2V0IG9mIGRlZmF1bHQgb3B0aW9ucyxcbiAqIHRvIGZpZ3VyZSBvdXQgd2hhdCB3YXMgcmVhbGx5IHBhc3NlZCB0b1xuICogYHtAbGluayBtb2R1bGU6Y2hhbmtvL2NoYW5uZWxzLmNoYW58Y2hhbn1gLlxuICpcbiAqIEBwYXJhbSB7KG51bGx8bnVtYmVyfG1vZHVsZTpjaGFua28vY2hhbm5lbHMuQnVmZmVyKX0gYnVmZmVyIFRoZSBidWZmZXJcbiAqICAgICBhcmd1bWVudCBwYXNzZWQgdG8gYHtAbGluayBtb2R1bGU6Y2hhbmtvL2NoYW5uZWxzLmNoYW58Y2hhbn1gLlxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgVGhlIG9wdGlvbnMgYXJndW1lbnQgcGFzc2VkIHRvXG4gKiAgICAgYHtAbGluayBtb2R1bGU6Y2hhbmtvL2NoYW5uZWxzLmNoYW58Y2hhbn1gLlxuICogQHBhcmFtIHtvYmplY3R9IGRlZmF1bHRPcHRpb25zIERlZmF1bHQgdmFsdWVzIGZvciBvcHRpb25zIHRoYXQgbWlnaHQgbm90IGhhdmVcbiAqICAgICBiZWVuIHNlbnQgdG8gYHtAbGluayBtb2R1bGU6Y2hhbmtvL2NoYW5uZWxzLmNoYW58Y2hhbn1gLlxuICogQHJldHVybiB7b2JqZWN0fSBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgcHJvY2Vzc2VkIHZhbHVlcyBvZiBhbGwgb2YgdGhlXG4gKiAgICAgYXJndW1lbnRzIHNlbnQgdG8gYHtAbGluayBtb2R1bGU6Y2hhbmtvL2NoYW5uZWxzLmNoYW58Y2hhbn1gLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gcGFyc2VBcmdzKGJ1ZmZlciwgb3B0aW9ucywgZGVmYXVsdE9wdGlvbnMpIHtcbiAgbGV0IGJ1ZjtcbiAgbGV0IG9wdHM7XG5cbiAgaWYgKCFidWZmZXIpIHtcbiAgICAvLyBzYW1lIGZvciAwLCBudWxsLCBvciB1bmRlZmluZWRcbiAgICBidWYgPSBudWxsO1xuICAgIG9wdHMgPSBvcHRpb25zO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBidWZmZXIgPT09IFwibnVtYmVyXCIpIHtcbiAgICBidWYgPSBmaXhlZChidWZmZXIpO1xuICAgIG9wdHMgPSBvcHRpb25zO1xuICB9IGVsc2UgaWYgKGlzQnVmZmVyKGJ1ZmZlcikpIHtcbiAgICBidWYgPSBidWZmZXI7XG4gICAgb3B0cyA9IG9wdGlvbnM7XG4gIH0gZWxzZSB7XG4gICAgLy8gSWYgbm8gYnVmZmVyIGlzIHNwZWNpZmllZCBidXQgYSB0cmFuc2R1Y2VyIGlzLCB3ZSBhc3N1bWUgZml4ZWQoMSlcbiAgICAvLyBpbnN0ZWFkIG9mIG5vIGJ1ZmZlclxuICAgIGJ1ZiA9IGJ1ZmZlcj8udHJhbnNkdWNlciA/IGZpeGVkKDEpIDogbnVsbDtcbiAgICBvcHRzID0gYnVmZmVyO1xuICB9XG5cbiAgY29uc3QgeyB0cmFuc2R1Y2VyLCBoYW5kbGVyLCBtYXhEaXJ0eSwgbWF4UXVldWVkLCB0aW1lciB9ID0gT2JqZWN0LmFzc2lnbihcbiAgICB7fSxcbiAgICBkZWZhdWx0T3B0aW9ucyxcbiAgICBvcHRzXG4gICk7XG4gIHJldHVybiB7IGJ1ZiwgdHJhbnNkdWNlciwgaGFuZGxlciwgbWF4RGlydHksIG1heFF1ZXVlZCwgdGltZXIgfTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuZCByZXR1cm5zIGEgbmV3IGNoYW5uZWwuXG4gKlxuICogQnkgZGVmYXVsdCB0aGlzIGNoYW5uZWwgd2lsbCBiZSBhIHNpbXBsZSB1bmJ1ZmZlcmVkLCB1bnRyYW5zZm9ybWVkIGNoYW5uZWwsXG4gKiBidXQgdGhhdCBjYW4gYmUgY2hhbmdlZCB0aHJvdWdoIG9wdGlvbnMuIEEgY2hhbm5lbCBkb2VzIG5vdCBoYXZlIGFueVxuICogZXh0ZXJuYWxseSB1c2VmdWwgZnVuY3Rpb25zLiBJdCBleGlzdHMgbGFyZ2VseSB0byBiZSBwYXNzZWQgaW50b1xuICogYHtAbGluayBtb2R1bGU6Y2hhbmtvL2NoYW5uZWxzLnNlbmR8c2VuZH1gLFxuICogYHtAbGluayBtb2R1bGU6Y2hhbmtvL2NoYW5uZWxzLnJlY3Z8cmVjdn1gLCBhbmRcbiAqIGB7QGxpbmsgbW9kdWxlOmNoYW5rby9jaGFubmVscy5zZWxlY3R8c2VsZWN0fWAgaW52b2NhdGlvbnMsIGFsb25nIHdpdGggdGhlaXJcbiAqIG5vbi1ibG9ja2luZyB2YXJpYXRpb25zXG4gKiAoYHtAbGluayBtb2R1bGU6Y2hhbmtvL2NoYW5uZWxzLnNlbmRBc3luY3xzZW5kQXN5bmN9YCxcbiAqIGB7QGxpbmsgbW9kdWxlOmNoYW5rby9jaGFubmVscy5yZWN2QXN5bmN8cmVjdkFzeW5jfWAsIGFuZFxuICogYHtAbGluayBtb2R1bGU6Y2hhbmtvL2NoYW5uZWxzLnNlbGVjdEFzeW5jfHNlbGVjdEFzeW5jfWApLlxuICpcbiAqIElmIGEgYnVmZmVyIHZhbHVlIGlzIHByb3ZpZGVkLCBpdCBkZWZpbmVzIHdoYXQgYnVmZmVyIHNob3VsZCBiYWNrIHRoZVxuICogY2hhbm5lbC4gSWYgdGhpcyBpcyBgbnVsbGAgb3IgYDBgLCB0aGUgY2hhbm5lbCB3aWxsIGJlIHVuYnVmZmVyZWQuIElmIGl0J3MgYVxuICogcG9zaXRpdmUgbnVtYmVyLCB0aGUgY2hhbm5lbCB3aWxsIGJlIGJ1ZmZlcmVkIGJ5IGFcbiAqIGB7QGxpbmsgbW9kdWxlOmNoYW5rby9jaGFubmVscy5GaXhlZEJ1ZmZlcnxGaXhlZEJ1ZmZlcn0gYG9mIHRoYXQgc2l6ZS4gSWZcbiAqIGl0J3MgYSBge0BsaW5rIG1vZHVsZTpjaGFua28vY2hhbm5lbHMuQnVmZmVyfEJ1ZmZlcn1gIG9iamVjdCwgdGhhdCBvYmplY3RcbiAqIHdpbGwgYmUgdXNlZCBhcyB0aGUgY2hhbm5lbCdzIGJ1ZmZlci4gSWYgaXQncyBtaXNzaW5nIGFsdG9nZXRoZXIsIHRoZSBjaGFubmVsXG4gKiB3aWxsIGJlIHVuYnVmZmVyZWQgdW5sZXNzIGEgYHRyYW5zZHVjZXJgIG9wdGlvbiBpcyBwcm92aWRlZCAoc2VlIGJlbG93KSwgaW5cbiAqIHdoaWNoIGNhc2UgaXQgd2lsbCBiZSBhXG4gKiBge0BsaW5rIG1vZHVsZTpjaGFua28vY2hhbm5lbHMuRml4ZWRCdWZmZXJ8Rml4ZWRCdWZmZXJ9YCBvZiBzaXplIDEuXG4gKlxuICogYGNoYW5gIHN1cHBvcnRzIHRyYW5zZHVjZXJzIGJ5IGFsbG93aW5nIGEgdHJhbnNkdWNlciBmdW5jdGlvbiB0byBiZVxuICogYXNzb2NpYXRlZCB3aXRoIGl0LiBUaGlzIGlzIHBhc3NlZCBhcyB0aGUgYHRyYW5zZHVjZXJgIG9wdGlvbiBhbmQgY2FuIG9ubHkgYmVcbiAqIHVzZWQgaWYgdGhlIGNoYW5uZWwgaXMgYnVmZmVyZWQgKG90aGVyd2lzZSBhbiBlcnJvciBpcyB0aHJvd24pLiBUaGlzXG4gKiB0cmFuc2R1Y2VyIGZ1bmN0aW9uIG11c3QgdGFrZSBhbm90aGVyIHRyYW5zZHVjZXIgYXMgYSBwYXJhbWV0ZXIgKGFsbG93aW5nXG4gKiB0cmFuc2Zvcm1lcnMgdG8gYmUgY2hhaW5lZCksIGFuZCBpdCBtdXN0IHJldHVybiBhbiBvYmplY3QgY29uZm9ybWluZyB0byB0aGVcbiAqIHRyYW5zZHVjZXIgcHJvdG9jb2wuXG4gKlxuICogRXJyb3JzIGluIHRoZSB0cmFuc2Zvcm1hdGlvbiBwcm9jZXNzIGNhbiBiZSBoYW5kbGVkIGJ5IHBhc3NpbmcgYW4gZXJyb3JcbiAqIGhhbmRsZXIuIFRoaXMgaXMgYSBmdW5jdGlvbiB0aGF0IGV4cGVjdHMgdG8gcmVjZWl2ZSBhbiBlcnJvciBvYmplY3QgYXMgYVxuICogcGFyYW1ldGVyIGFuZCBjYW4gcmV0dXJuIGEgdmFsdWUgdGhhdCBpcyB0aGVuIHB1dCBvbnRvIHRoZSBjaGFubmVsLiBJZiB0aGlzXG4gKiB2YWx1ZSBpcyBge0BsaW5rIG1vZHVsZTpjaGFua28vY2hhbm5lbHMuQ0xPU0VEfENMT1NFRH1gLCB0aGVuIG5vIHZhbHVlIHdpbGxcbiAqIGJlIHB1dCBvbnRvIHRoZSBjaGFubmVsIHVwb24gaGFuZGxlciBjb21wbGV0aW9uLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y2hhbmtvL2NoYW5uZWxzXG4gKiBAcGFyYW0geyhudW1iZXJ8bW9kdWxlOmNoYW5rby9jaGFubmVscy5CdWZmZXIpfSBbYnVmZmVyXSBUaGUgYnVmZmVyIG9iamVjdFxuICogICAgIHRoYXQgc2hvdWxkIGJhY2sgdGhpcyBjaGFubmVsLiBJZiB0aGlzIGlzIGEgcG9zaXRpdmUgbnVtYmVyLCBhIGZpeGVkXG4gKiAgICAgYnVmZmVyIG9mIHRoYXQgc2l6ZSB3aWxsIGJlIGNyZWF0ZWQgdG8gYmFjayB0aGUgY2hhbm5lbC4gSWYgaXQgaXMgYDBgIG9yXG4gKiAgICAgYG51bGxgLCB0aGUgbmV3IGNoYW5uZWwgd2lsbCBiZSB1bmJ1ZmZlcmVkLiBJZiBpdCdzIG5vdCBwcmVzZW50LCB0aGUgbmV3XG4gKiAgICAgY2hhbm5lbCB3aWxsIGJlIHVuYnVmZmVyZWQgdW5sZXNzIHRoZXJlIGlzIGEgYHRyYW5zZHVjZXJgIG9wdGlvbiwgaW4gaW5cbiAqICAgICB3aGljaCBjYXNlIGl0IHdpbGwgYmUgYnVmZmVyZWQgd2l0aCBhIHNpemUgMVxuICogICAgIGB7QGxpbmsgbW9kdWxlOmNoYW5rby9jaGFubmVscy5GaXhlZEJ1ZmZlcnxGaXhlZEJ1ZmZlcn1gLlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSBBIHNldCBvZiBvcHRpb25zIGZvciBjb25maWd1cmluZyB0aGUgY2hhbm5lbCdzXG4gKiAgICAgcXVldWUuXG4gKiBAcGFyYW0ge21vZHVsZTpjaGFua28vY2hhbm5lbHMuVHJhbnNkdWNlcn0gW29wdGlvbnMudHJhbnNkdWNlcl0gQSB0cmFuc2R1Y2VyXG4gKiAgICAgdG8gcnVuIGVhY2ggdmFsdWUgdGhyb3VnaCBiZWZvcmUgcHV0dGluZyBpdCBvbnRvIHRoZSBjaGFubmVsLiBUaGlzXG4gKiAgICAgZnVuY3Rpb24gc2hvdWxkIGV4cGVjdCBvbmUgcGFyYW1ldGVyIChhbm90aGVyIHRyYW5zZHVjZXIgdGhhdCBpdCdzXG4gKiAgICAgY2hhaW5lZCB0bykgYW5kIHJldHVybiBhbiBvYmplY3QgdGhhdCBjb25mb3JtcyB0byB0aGUgdHJhbnNkdWNlclxuICogICAgIHByb3RvY29sLiBJZiBhIHRyYW5zZHVjZXIgaXMgcHJvdmlkZWQgb24gYW4gdW5idWZmZXJlZCBjaGFubmVsLCBhbiBlcnJvclxuICogICAgIHdpbGwgYmUgdGhyb3duLlxuICogQHBhcmFtIHttb2R1bGU6Y2hhbmtvL2NoYW5uZWxzLkV4Y2VwdGlvbkhhbmRsZXJ9IFtvcHRpb25zLmhhbmRsZXJdIEFuIGVycm9yXG4gKiAgICAgaGFuZGxlciB0aGF0IGlzIHJ1biB3aGVuZXZlciBhbiBlcnJvciBvY2N1cnMgaW5zaWRlIGEgdHJhbnNkdWNlclxuICogICAgIGZ1bmN0aW9uLiBJZiB0aGF0IGhhcHBlbnMsIHRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIHdpdGggb25lIHBhcmFtZXRlcixcbiAqICAgICB3aGljaCBpcyB0aGUgZXJyb3Igb2JqZWN0LiBUaGUgdmFsdWUgdGhhdCB0aGUgaGFuZGxlciByZXR1cm5zIChpZiBpdCBpc1xuICogICAgIG5vdCBge0BsaW5rIG1vZHVsZTpjaGFua28vY2hhbm5lbHMuQ0xPU0VEfENMT1NFRH1gKSB3aWxsIGJlIHB1dCBvbnRvIHRoZVxuICogICAgIGNoYW5uZWwgd2hlbiB0aGUgaGFuZGxlciBmaW5pc2hlcyBydW5uaW5nLlxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLm1heERpcnR5PTY0XSBUaGUgbWF4aW11bSBudW1iZXIgb2YgZGlydHkgb3BlcmF0aW9uc1xuICogICAgIHRoYXQgY2FuIGJlIGluIHRoZSBxdWV1ZSBiZWZvcmUgdGhvc2Ugb3BlcmF0aW9ucyBhcmUgc3ViamVjdCB0byBiZWluZ1xuICogICAgIHB1cmdlZC4gRGlydHkgb3BlcmF0aW9ucyBhcmUgdGhvc2UgdGhhdCBtYXkgbm90IGJlIHZhbGlkIGFueW1vcmUgYmVjYXVzZVxuICogICAgIHRoZXkgd2VyZSBpbiB0aGUgbGlzdCBvZiBvcGVyYXRpb25zIHBhc3NlZCB0b1xuICogICAgIGB7QGxpbmsgbW9kdWxlOmNoYW5rby9jaGFubmVscy5zZWxlY3R8c2VsZWN0fWAgb3JcbiAqICAgICBge0BsaW5rIG1vZHVsZTpjaGFua28vY2hhbm5lbHMuc2VsZWN0QXN5bmN8c2VsZWN0QXN5bmN9YCBidXQgd2VyZSBub3RcbiAqICAgICBjaG9zZW4gdG8gcnVuLiBUaGlzIHByb3ZpZGVzIGEgY2hhbmNlIGZvciBhIHZlcnkgbWlub3IgcGVyZm9ybWFuY2UgdHdlYWtcbiAqICAgICBhbmQgaXMgYmVzdCBsZWZ0IGFsb25lLlxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLm1heFF1ZXVlZD0xMDI0XSBUaGUgbWF4aW11bSBudW1iZXIgb2Ygb3BlcmF0aW9uc1xuICogICAgIHRoYXQgY2FuIGJlIHF1ZXVlZCB1cCBhdCB0aGUgc2FtZSB0aW1lLiBUaGlzIHByZXZlbnRzIGluZmluaXRlIGxvb3BzIGZyb21cbiAqICAgICBhY2NpZGVudGFsbHkgZWF0aW5nIHVwIGFsbCBvZiB0aGUgYXZhaWxhYmxlIG1lbW9yeS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy50aW1lcl0gSWYgdGhpcyB2YWx1ZSBpcyBwcmVzZW50LCB0aGUgY2hhbm5lbCB3aWxsIGJlXG4gKiAgICAgYSB0aW1lZCBjaGFubmVsIHRoYXQgY2xvc2VzIGF1dG9tYXRpY2FsbHkgYWZ0ZXIgdGhpcyBudW1iZXIgb2ZcbiAqICAgICBtaWxsaXNlY29uZHMuXG4gKiBAcmV0dXJuIHttb2R1bGU6Y2hhbmtvL2NoYW5uZWxzLkNoYW5uZWx9IEEgbmV3IGNoYW5uZWwuXG4gKi9cbmZ1bmN0aW9uIGNoYW4oYnVmZmVyLCBvcHRpb25zKSB7XG4gIGNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICAgIG1heERpcnR5OiBNQVhfRElSVFksXG4gICAgbWF4UXVldWVkOiBNQVhfUVVFVUVEXG4gIH07XG4gIGNvbnN0IHsgYnVmLCB0cmFuc2R1Y2VyLCBoYW5kbGVyLCBtYXhEaXJ0eSwgbWF4UXVldWVkLCB0aW1lciB9ID0gcGFyc2VBcmdzKFxuICAgIGJ1ZmZlcixcbiAgICBvcHRpb25zLFxuICAgIGRlZmF1bHRPcHRpb25zXG4gICk7XG5cbiAgaWYgKHRyYW5zZHVjZXIgJiYgIWJ1Zikge1xuICAgIHRocm93IEVycm9yKFwiT25seSBidWZmZXJlZCBjaGFubmVscyBjYW4gdXNlIHRyYW5zZHVjZXJzXCIpO1xuICB9XG5cbiAgY29uc3QgeGYgPSBoYW5kbGVyVHJhbnNkdWNlcihcbiAgICB0cmFuc2R1Y2VyID8gdHJhbnNkdWNlcihidWZmZXJSZWR1Y2VyKSA6IGJ1ZmZlclJlZHVjZXIsXG4gICAgaGFuZGxlclxuICApO1xuXG4gIGNvbnN0IGlzVGltZWQgPSB0eXBlb2YgdGltZXIgPT09IFwibnVtYmVyXCI7XG5cbiAgY29uc3QgY2ggPSBjaGFuSW1wbChidWYsIHhmLCBpc1RpbWVkLCBtYXhEaXJ0eSwgbWF4UXVldWVkKTtcblxuICBhc3luYyBmdW5jdGlvbiogaXRlcmF0b3IoKSB7XG4gICAgZm9yICg7Oykge1xuICAgICAgY29uc3QgdmFsdWUgPSBhd2FpdCByZWN2KGNoKTtcbiAgICAgIGlmICh2YWx1ZSA9PT0gQ0xPU0VEKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgeWllbGQgdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgY2hbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gaXRlcmF0b3I7XG5cbiAgaWYgKGlzVGltZWQpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IGNsb3NlSW1wbChjaCksIHRpbWVyKTtcbiAgfVxuXG4gIHJldHVybiBjaDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuIHVuYnVmZmVyZWQsIHRpbWVkIGNoYW5uZWwuIFRoaXMgY2hhbm5lbCBjbG9zZXMgYXV0b21hdGljYWxseSBhZnRlclxuICogdGhlIHN1cHBsaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgYW5kIGlzIHRoZSBlcXVpdmFsZW50IG9mIGNhbGxpbmcgYGNoYW4oMCxcbiAqIHsgdGltZXI6IGRlbGF5IH0pYC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNoYW5rby9jaGFubmVsc1xuICogQHBhcmFtIHtudW1iZXJ9IGRlbGF5IFRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGFmdGVyIHRoZSBjaGFubmVsIGlzIGNyZWF0ZWRcbiAqICAgICB0aGF0IGl0IHdpbGwgYmUgY2xvc2VkIGF1dG9tYXRpY2FsbHkuXG4gKiBAcmV0dXJuIHttb2R1bGU6Y2hhbmtvL2NoYW5uZWxzLkNoYW5uZWx9IEEgbmV3IHRpbWVkIGNoYW5uZWwuXG4gKi9cbmZ1bmN0aW9uIHRpbWVkQ2hhbihkZWxheSA9IDApIHtcbiAgcmV0dXJuIGNoYW4oeyB0aW1lcjogZGVsYXkgfSk7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGJ1ZmZlcmVkIGNoYW5uZWwgd2l0aCBhIHRyYW5zZHVjZXIgYW5kIG9wdGlvbmFsIGVycm9yIGhhbmRsZXIuIFRoZVxuICogYnVmZmVyIGZvciB0aGlzIGNoYW5uZWwgaXMgYVxuICogYHtAbGluayBtb2R1bGU6Y2hhbmtvL2NoYW5uZWxzLkZpeGVkQnVmZmVyfEZpeGVkQnVmZmVyfWAgb2Ygc2l6ZSAxLiBUaGlzIGlzXG4gKiB0aGUgZXF1aXZhbGVudCBvZiBgY2hhbigxLCB7IHRyYW5zZHVjZXIsIGhhbmRsZXIgfSlgLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y2hhbmtvL2NoYW5uZWxzXG4gKiBAcGFyYW0ge21vZHVsZTpjaGFua28vY2hhbm5lbHMuVHJhbnNkdWNlcn0gdHJhbnNkdWNlciBUaGUgdHJhbnNkdWNlciB1c2VkIHRvXG4gKiAgICAgdHJhbnNmb3JtIHZhbHVlcyBvbiB0aGUgbmV3IGNoYW5uZWwuXG4gKiBAcGFyYW0ge21vZHVsZTpjaGFua28vY2hhbm5lbHMuRXhjZXB0aW9uSGFuZGxlcn0gW2hhbmRsZXJdIEFuIGV4Y2VwdGlvblxuICogICAgIGhhbmRsZXIgY2FsbGVkIHdpdGggdGhlIGVycm9yIG9iamVjdCBhcyBpdHMgb25seSBhcmd1bWVudCB3aGVuIGFuIGVycm9yXG4gKiAgICAgaGFwcGVucyBpbnNpZGUgYSB0cmFuc2R1Y2VyLiBJZiB0aGlzIGlzIG5vdCBwcm92aWRlZCwgYSBkZWZhdWx0IGhhbmRsZXJcbiAqICAgICBpcyB1c2VkIHRoYXQgc2ltcGx5IGRvZXMgbm90aGluZywgaW5jbHVkaW5nIHNlbmRpbmcgbm8gb3V0cHV0IGZyb20gdGhlXG4gKiAgICAgdmFsdWUgdGhhdCBlcnJvcmVkLlxuICogQHJldHVybiB7bW9kdWxlOmNoYW5rby9jaGFubmVscy5DaGFubmVsfSBBIG5ldyBjaGFubmVsIHdpdGggYSB0cmFuc2R1Y2VyLlxuICovXG5mdW5jdGlvbiB0cmFuc0NoYW4odHJhbnNkdWNlciwgaGFuZGxlcikge1xuICByZXR1cm4gY2hhbih7IHRyYW5zZHVjZXIsIGhhbmRsZXIgfSk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGEgY2hhbm5lbCBpcyBjbG9zZWQuXG4gKlxuICogQSBjbG9zZWQgY2hhbm5lbCB3aWxsIGNhdXNlIGFueSBgc2VuZGAgb3BlcmF0aW9uIHRvIHJldHVybiBgZmFsc2VgIGFuZCBhbnlcbiAqIGByZWN2YCBvcGVyYXRpb24gdG8gcmV0dXJuIGFueSBidWZmZXJlZCBpdGVtcyB0aGF0IHJlbWFpbiwgZm9sbG93ZWQgYnlcbiAqIGB7QGxpbmsgbW9kdWxlOmNoYW5rby9jaGFubmVscy5DTE9TRUR8Q0xPU0VEfWAuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjaGFua28vY2hhbm5lbHNcbiAqIEBwYXJhbSB7bW9kdWxlOmNoYW5rby9jaGFubmVscy5DaGFubmVsfSBjaGFubmVsIFRoZSBjaGFubmVsIHRvIGNoZWNrLlxuICogQHJldHVybiB7Ym9vbGVhbn0gRWl0aGVyIGB0cnVlYCBpZiB0aGUgY2hhbm5lbCBpcyBjbG9zZWQgb3IgYGZhbHNlYCBpZiBpdFxuICogICAgIGlzbid0LlxuICovXG5mdW5jdGlvbiBpc0Nsb3NlZChjaGFubmVsKSB7XG4gIHJldHVybiBjaGFubmVsLmNsb3NlZDtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgYSBjaGFubmVsIGlzIGJ1ZmZlcmVkLlxuICpcbiAqIEEgY2hhbm5lbCBpcyBidWZmZXJlZCBpZiBhIGJ1ZmZlciBvciBhIG51bWJlciB3YXMgcGFzc2VkIGFzIHRoZSBmaXJzdFxuICogYXJndW1lbnQgb2YgYHtAbGluayBtb2R1bGU6Y2hhbmtvL2NoYW5uZWxzLmNoYW58Y2hhbn1gIG9yIGlmIGEgdHJhbnNkdWNlciBpcyBhXG4gKiBwYXJ0IG9mIHRoZSBjaGFubmVsLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y2hhbmtvL2NoYW5uZWxzXG4gKiBAcGFyYW0ge21vZHVsZTpjaGFua28vY2hhbm5lbHMuQ2hhbm5lbH0gY2hhbm5lbCBUaGUgY2hhbm5lbCB0byBjaGVjay5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IEVpdGhlciBgdHJ1ZWAgaWYgdGhlIGNoYW5uZWwgaXMgYnVmZmVyZWQgb3IgYGZhbHNlYCBpZiBpdFxuICogICAgIGlzbid0LlxuICovXG5mdW5jdGlvbiBpc0J1ZmZlcmVkKGNoYW5uZWwpIHtcbiAgcmV0dXJuIGNoYW5uZWwuaXNCdWZmZXJlZDtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgYSBjaGFubmVsIGlzIHRpbWVkLlxuICpcbiAqIEEgY2hhbm5lbCBpcyB0aW1lZCBpZiBpdCB3YXMgY3JlYXRlZCBlaXRoZXIgd2l0aCB0aGUgYHRpbWVyYCBvcHRpb24gb2ZcbiAqIGB7QGxpbmsgbW9kdWxlOmNoYW5rby9jaGFubmVscy5jaGFufGNoYW59YCBvciB3aXRoIHRoZVxuICogYHtAbGluayBtb2R1bGU6Y2hhbmtvL2NoYW5uZWxzLnRpbWVkQ2hhbnx0aW1lZENoYW59YCBmdW5jdGlvbi4gSXQgd2lsbFxuICogYXV0b21hdGljYWxseSBjbG9zZSBhZnRlciBhIGNlcnRhaW4gcGVyaW9kIG9mIHRpbWUuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjaGFua28vY2hhbm5lbHNcbiAqIEBwYXJhbSB7bW9kdWxlOmNoYW5rby9jaGFubmVscy5DaGFubmVsfSBjaGFubmVsIFRoZSBjaGFubmVsIHRvIGNoZWNrLlxuICogQHJldHVybiB7Ym9vbGVhbn0gRWl0aGVyIGB0cnVlYCBpZiB0aGUgY2hhbm5lbCBpcyB0aW1lZCBvciBgZmFsc2VgIGlmIGl0XG4gKiAgICAgaXNuJ3QuXG4gKi9cbmZ1bmN0aW9uIGlzVGltZWQoY2hhbm5lbCkge1xuICByZXR1cm4gY2hhbm5lbC5pc1RpbWVkO1xufVxuXG4vKipcbiAqIFNlbmRzIGEgdmFsdWUgdG8gdGhpcyBjaGFubmVsIHdpdGhvdXQgYmxvY2tpbmcuXG4gKlxuICogVGhpcyBtZWFucyB0aGF0IGEgY2FsbCB0byBgc2VuZEFzeW5jYCBkb2VzIG5vdCBnbyBpbnRvIGFuIGBhd2FpdGAgZXhwcmVzc2lvbixcbiAqIGFuZCBpdCBpcyBub3QgbmVjZXNzYXJ5IHRvIHVzZSBpdCBpbnNpZGUgYSBhc3luYyBmdW5jdGlvbi4gUmF0aGVyIHRoYW5cbiAqIGJsb2NraW5nIHVudGlsIHRoZSBzZW50IHZhbHVlIGlzIHRha2VuIGJ5IGFub3RoZXIgYXN5bmMgZnVuY3Rpb24sIHRoaXMgb25lXG4gKiByZXR1cm5zIGltbWVkaWF0ZWx5IGFuZCB0aGVuIGludm9rZXMgdGhlIGNhbGxiYWNrIChpZiBwcm92aWRlZCkgd2hlbiB0aGUgc2VudFxuICogdmFsdWUgaXMgdGFrZW4uIEl0IGNhbiBiZSBzZWVuIGFzIGEgbm9uLWJsb2NraW5nIHZlcnNpb24gb2ZcbiAqIGB7QGxpbmsgbW9kdWxlOmNoYW5rby9jaGFubmVscy5zZW5kfHNlbmR9YC5cbiAqXG4gKiBXaGlsZSB0aGUgcHJpbWFyeSB1c2Ugb2YgdGhpcyBmdW5jdGlvbiBpcyB0byBzZW5kIHZhbHVlcyBvbnRvIGNoYW5uZWxzIGluXG4gKiBjb250ZXh0cyB3aGVyZSBiZWluZyBpbnNpZGUgYW4gYXN5bmMgZnVuY3Rpb24gaXMgaW1wb3NzaWJsZSAoZm9yIGV4YW1wbGUsIGluXG4gKiBhIERPTSBlbGVtZW50J3MgZXZlbnQgaGFuZGxlciksIGl0IGNhbiBzdGlsbCBiZSB1c2VkIGluc2lkZSBhc3luYyBmdW5jdGlvbnNcbiAqIGF0IHRpbWVzIHdoZW4gaXQncyBpbXBvcnRhbnQgdG8gbWFrZSBzdXJlIHRoYXQgdGhlIGZ1bmN0aW9uIGRvZXNuJ3QgYmxvY2tcbiAqIGZyb20gdGhlIHNlbmQuXG4gKlxuICogVGhlIGNhbGxiYWNrIGlzIGEgZnVuY3Rpb24gb2Ygb25lIHBhcmFtZXRlci4gVGhlIHBhcmFtZXRlciB0aGF0J3Mgc3VwcGxpZWQgdG9cbiAqIHRoZSBjYWxsYmFjayBpcyB0aGUgc2FtZSBhcyB3aGF0IGlzIHN1cHBsaWVkIHRvIGBhd2FpdCBzZW5kYDogYHRydWVgIGlmIHRoZVxuICogdmFsdWUgd2FzIHRha2VuLCBvciBgZmFsc2VgIGlmIHRoZSBjaGFubmVsIHdhcyBjbG9zZWQuIElmIHRoZSBjYWxsYmFjayBpc24ndFxuICogcHJlc2VudCwgbm90aGluZyB3aWxsIGhhcHBlbiBhZnRlciB0aGUgdmFsdWUgaXMgdGFrZW4uXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjaGFua28vY2hhbm5lbHNcbiAqIEBwYXJhbSB7Kn0gW3ZhbHVlXSBUaGUgdmFsdWUgYmVpbmcgcHV0IG9udG8gdGhlIGNoYW5uZWwuXG4gKiBAcGFyYW0ge21vZHVsZTpjaGFua28vY2hhbm5lbHMuT3BDYWxsYmFja30gW2NhbGxiYWNrXSBBIGZ1bmN0aW9uIHRoYXQgZ2V0c1xuICogICAgIGludm9rZWQgZWl0aGVyIHdoZW4gdGhlIHZhbHVlIGlzIHRha2VuIGJ5IGFub3RoZXIgcHJvY2VzcyBvciB3aGVuIHRoZVxuICogICAgIGNoYW5uZWwgaXMgY2xvc2VkLiBUaGlzIGZ1bmN0aW9uIGNhbiB0YWtlIG9uZSBwYXJhbWV0ZXIsIHdoaWNoIGlzIGB0cnVlYFxuICogICAgIGluIHRoZSBmb3JtZXIgY2FzZSBhbmQgYGZhbHNlYCBpbiB0aGUgbGF0dGVyLlxuICovXG5mdW5jdGlvbiBzZW5kQXN5bmMoY2hhbm5lbCwgdmFsdWUsIGNhbGxiYWNrID0gKCkgPT4ge30pIHtcbiAgY29uc3QgcmVzdWx0ID0gaGFuZGxlU2VuZChjaGFubmVsLCB2YWx1ZSwgb3BIYW5kbGVyKGNhbGxiYWNrKSk7XG4gIGlmIChyZXN1bHQgJiYgY2FsbGJhY2spIHtcbiAgICBjYWxsYmFjayhyZXN1bHQudmFsdWUpO1xuICB9XG59XG5cbi8qKlxuICogUmVjZWl2ZXMgYSB2YWx1ZSBmcm9tIHRoaXMgY2hhbm5lbCB3aXRob3V0IGJsb2NraW5nLlxuICpcbiAqIFRoaXMgbWVhbnMgdGhhdCBhIGNhbGwgdG8gYHJlY2VpdmVBc3luY2AgZG9lcyBub3QgZ28gaW50byBhbiBgYXdhaXRgXG4gKiBleHByZXNzaW9uLCBhbmQgaXQgaXMgbm90IG5lY2Vzc2FyeSB0byB1c2UgaXQgaW5zaWRlIGEgYXN5bmMgZnVuY3Rpb24uIFJhdGhlclxuICogdGhhbiBibG9ja2luZyB1bnRpbCBhIHZhbHVlIGJlY29tZXMgYXZhaWxhYmxlIG9uIHRoZSBjaGFubmVsIHRvIGJlIHJlY2VpdmVkLFxuICogdGhpcyBvbmUgcmV0dXJucyBpbW1lZGlhdGVseSBhbmQgdGhlbiBpbnZva2VzIHRoZSBjYWxsYmFjayAoaWYgcHJvdmlkZWQpIHdoZW5cbiAqIGEgdmFsdWUgYmVjb21lcyBhdmFpbGFibGUuIEl0IGNhbiBiZSByZWdhcmRlZCBhcyBhIG5vbi1ibG9ja2luZyB2ZXJzaW9uIG9mXG4gKiB7QGxpbmsgbW9kdWxlOmNoYW5rby9jaGFubmVscy5yZWN2fHJlY3Z9YC5cbiAqXG4gKiBXaGlsZSB0aGUgcHJpbWFyeSB1c2Ugb2YgdGhpcyBmdW5jdGlvbiBpcyB0byByZWNlaXZlIHZhbHVlcyBmcm9tIGNoYW5uZWxzIGluXG4gKiBjb250ZXh0cyB3aGVyZSBiZWluZyBpbnNpZGUgYW4gYXN5bmMgZnVuY3Rpb24gaXMgaW1wb3NzaWJsZSwgaXQgY2FuIHN0aWxsIGJlXG4gKiB1c2VkIGluc2lkZSBhc3luYyBmdW5jdGlvbnMgYXQgdGltZXMgd2hlbiBpdCdzIGltcG9ydGFudCB0aGF0IHRoZSByZWNlaXZlXG4gKiBkb2Vzbid0IGJsb2NrIHRoZSBmdW5jdGlvbi5cbiAqXG4gKiBUaGUgY2FsbGJhY2sgaXMgYSBmdW5jdGlvbiBvZiBvbmUgcGFyYW1ldGVyLCBhbmQgdGhlIHZhbHVlIHN1cHBsaWVkIGZvciB0aGF0XG4gKiBwYXJhbWV0ZXIgaXMgdGhlIHZhbHVlIHJlY2VpdmVkIGZyb20gdGhlIGNoYW5uZWwgKGVpdGhlciBhIHZhbHVlIHRoYXQgd2FzXG4gKiBzZW50IG9yIGB7QGxpbmsgbW9kdWxlOmNoYW5rby9jaGFubmVscy5DTE9TRUR8Q0xPU0VEfWApLiBJZiB0aGUgY2FsbGJhY2tcbiAqIGlzbid0IHByZXNlbnQsIG5vdGhpbmcgd2lsbCBoYXBwZW4gYWZ0ZXIgdGhlIHZhbHVlIGlzIHRha2VuLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y2hhbmtvL2NoYW5uZWxzXG4gKiBAcGFyYW0ge21vZHVsZTpjaGFua28vY2hhbm5lbHMuT3BDYWxsYmFja30gW2NhbGxiYWNrXSBBIGZ1bmN0aW9uIHRoYXQgZ2V0c1xuICogICAgIGludm9rZWQgd2hlbiBhIHZhbHVlIGlzIG1hZGUgYXZhaWxhYmxlIHRvIGJlIHJlY2VpdmVkICh0aGlzIHZhbHVlIG1heSBiZVxuICogICAgIGB7QGxpbmsgbW9kdWxlOmNoYW5rby9jaGFubmVscy5DTE9TRUR8Q0xPU0VEfWAgaWYgdGhlIGNoYW5uZWwgY2xvc2VzIHdpdGhcbiAqICAgICBubyBhdmFpbGFibGUgdmFsdWUpLiBUaGUgZnVuY3Rpb24gY2FuIHRha2Ugb25lIHBhcmFtZXRlciwgd2hpY2ggaXMgdGhlXG4gKiAgICAgdmFsdWUgdGhhdCBpcyByZWNlaXZlZCBmcm9tIHRoZSBjaGFubmVsLlxuICovXG5mdW5jdGlvbiByZWN2QXN5bmMoY2hhbm5lbCwgY2FsbGJhY2sgPSAoKSA9PiB7fSkge1xuICBjb25zdCByZXN1bHQgPSBoYW5kbGVSZWN2KGNoYW5uZWwsIG9wSGFuZGxlcihjYWxsYmFjaykpO1xuICBpZiAocmVzdWx0ICYmIGNhbGxiYWNrKSB7XG4gICAgY2FsbGJhY2socmVzdWx0LnZhbHVlKTtcbiAgfVxufVxuXG4vKipcbiAqIFNlbmRzIGEgdmFsdWUgdG8gYSBjaGFubmVsLCBibG9ja2luZyB0aGUgYXN5bmMgZnVuY3Rpb24gdW50aWwgdGhhdCB2YWx1ZSBpc1xuICogcmVjZWl2ZWQgZnJvbSB0aGUgY2hhbm5lbCBieSBhIGRpZmZlcmVudCBmdW5jdGlvbiAob3IgdW50aWwgdGhlIGNoYW5uZWxcbiAqIGNsb3NlcykuXG4gKlxuICogQSB2YWx1ZSBpcyBhbHdheXMgc2VudCB0byB0aGUgY2hhbm5lbCwgYnV0IGlmIHRoYXQgdmFsdWUgaXNuJ3Qgc3BlY2lmaWVkIGJ5XG4gKiB0aGUgc2Vjb25kIHBhcmFtZXRlciwgaXQgaXMgYHVuZGVmaW5lZGAuIEFueSB2YWx1ZSBtYXkgYmUgc2VudCB0byBhIGNoYW5uZWwsXG4gKiB3aXRoIHRoZSBzb2xlIGV4Y2VwdGlvbiBvZiB0aGUgc3BlY2lhbCB2YWx1ZVxuICogYHtAbGluayBtb2R1bGU6Y2hhbmtvL2NoYW5uZWxzLkNMT1NFRHxDTE9TRUR9YC5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uICptdXN0KiBiZSBjYWxsZWQgZnJvbSB3aXRoaW4gYW4gYXN5bmMgZnVuY3Rpb24gYW5kIGFzIHBhcnQgb2ZcbiAqIGFuIGBhd2FpdGAgZXhwcmVzc2lvbi5cbiAqXG4gKiBXaGVuIGBzZW5kYCBpcyBjb21wbGV0ZWQgYW5kIGl0cyBmdW5jdGlvbiB1bmJsb2NrcywgaXRzIGBhd2FpdGAgZXhwcmVzc2lvblxuICogZXZhbHVhdGVzIHRvIGEgc3RhdHVzIGJvb2xlYW4gdGhhdCBpbmRpY2F0ZXMgd2hhdCBjYXVzZWQgdGhlIGZ1bmN0aW9uIHRvXG4gKiB1bmJsb2NrLiBUaGF0IHZhbHVlIGlzIGB0cnVlYCBpZiB0aGUgc2VudCB2YWx1ZSB3YXMgc3VjY2Vzc2Z1bGx5IHRha2VuIGJ5XG4gKiBhbm90aGVyIHByb2Nlc3MsIG9yIGBmYWxzZWAgaWYgdGhlIHVuYmxvY2tpbmcgaGFwcGVuZWQgYmVjYXVzZSB0aGUgdGFyZ2V0XG4gKiBjaGFubmVsIGNsb3NlZC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNoYW5rby9jaGFubmVsc1xuICogQHBhcmFtIHsqfSBbdmFsdWVdIFRoZSB2YWx1ZSBiZWluZyBwdXQgb250byB0aGUgY2hhbm5lbC5cbiAqIEByZXR1cm4ge1Byb21pc2U8Ym9vbGVhbj59IEEgcHJvbWlzZSB0aGF0IHdpbGwgcmVzb2x2ZSB0byBgdHJ1ZWAgb3IgYGZhbHNlYFxuICogICAgIGRlcGVuZGluZyBvbiB3aGV0aGVyIHRoZSBwdXQgdmFsdWUgaXMgYWN0dWFsbHkgdGFrZW4uXG4gKi9cbmZ1bmN0aW9uIHNlbmQoY2hhbm5lbCwgdmFsdWUpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgIHNlbmRBc3luYyhjaGFubmVsLCB2YWx1ZSwgcmVzb2x2ZSk7XG4gIH0pO1xufVxuXG4vKipcbiAqIFJlY2VpdmVzIGEgdmFsdWUgZnJvbSB0aGlzIGNoYW5uZWwsIGJsb2NraW5nIHRoZSBhc3luYyBmdW5jdGlvbiB1bnRpbCBhXG4gKiB2YWx1ZSBiZWNvbWVzIGF2YWlsYWJsZSB0byBiZSByZWNlaXZlZCAob3IgdW50aWwgdGhlIGNoYW5uZWwgY2xvc2VzIHdpdGhcbiAqIG5vIG1vcmUgdmFsdWVzIG9uIGl0IHRvIGJlIHJlY2VpdmVkKS5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uICptdXN0KiBiZSBjYWxsZWQgZnJvbSB3aXRoaW4gYW4gYXN5bmMgZnVuY3Rpb24gYW5kIGFzIHBhcnRcbiAqIG9mIGFuIGBhd2FpdGAgZXhwcmVzc2lvbi5cbiAqXG4gKiBXaGVuIGByZWNlaXZlYCBpcyBjb21wbGV0ZWQgYW5kIGl0cyBmdW5jdGlvbiB1bmJsb2NrcywgaXRzIGBhd2FpdGBcbiAqIGV4cHJlc3Npb24gZXZhbHVhdGVzIHRvIHRoZSBhY3R1YWwgdmFsdWUgdGhhdCB3YXMgcmVjZWl2ZWQuIElmIHRoZSB0YXJnZXRcbiAqIGNoYW5uZWwgY2xvc2VkLCB0aGVuIGFsbCBvZiB0aGUgdmFsdWVzIGFscmVhZHkgcGxhY2VkIG9udG8gaXQgYXJlXG4gKiByZXNvbHZlZCBieSBgcmVjZWl2ZWAgYXMgbm9ybWFsLCBhbmQgb25jZSBubyBtb3JlIHZhbHVlcyBhcmUgYXZhaWxhYmxlLFxuICogdGhlIHNwZWNpYWwgdmFsdWUgYHtAbGluayBtb2R1bGU6Y2hhbmtvL2NoYW5uZWxzLkNMT1NFRHxDTE9TRUR9YCBpcyByZXR1cm5lZC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNoYW5rby9jaGFubmVsc1xuICogQHJldHVybiB7UHJvbWlzZX0gQSBwcm9taXNlIHRoYXQgd2lsbCByZXNvbHZlIHRvIHRoZSB2YWx1ZSByZWNlaXZlZCBmcm9tXG4gKiAgICAgdGhlIGNoYW5uZWwgb25jZSB0aGF0IHJlY2VpdmUgaXMgY29tcGxldGVkLiBJZiB0aGUgY2hhbm5lbCBjbG9zZXNcbiAqICAgICB3aXRob3V0IGEgdmFsdWUgYmVpbmcgbWFkZSBhdmFpbGFibGUsIHRoaXMgd2lsbCByZXNvbHZlIHRvXG4gKiAgICAgYHtAbGluayBtb2R1bGU6Y2hhbmtvL2NoYW5uZWxzLkNMT1NFRHxDTE9TRUR9YC5cbiAqL1xuZnVuY3Rpb24gcmVjdihjaGFubmVsKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICByZWN2QXN5bmMoY2hhbm5lbCwgcmVzb2x2ZSk7XG4gIH0pO1xufVxuXG4vKipcbiAqIFJlY2VpdmVzIGEgdmFsdWUgZnJvbSBhIGNoYW5uZWwsIGJsb2NraW5nIHRoZSBhc3luYyBmdW5jdGlvbiB1bnRpbCBhIHZhbHVlXG4gKiBiZWNvbWVzIGF2YWlsYWJsZSB0byBiZSByZWNlaXZlZCAob3IgdW50aWwgdGhlIGNoYW5uZWwgY2xvc2VzIHdpdGggbm8gbW9yZVxuICogdmFsdWVzIG9uIGl0IHRvIGJlIHJlY2VpdmVkKS4gSWYgdGhlIHJlY2VpdmVkIHZhbHVlIGlzIGFuIGVycm9yIG9iamVjdCwgdGhhdFxuICogZXJyb3IgaXMgdGhyb3duIGF0IHRoYXQgcG9pbnQuXG4gKlxuICogVGhpcyBmdW5jdGlvbiAqbXVzdCogYmUgY2FsbGVkIGZyb20gd2l0aGluIGFuIGFzeW5jIGZ1bmN0aW9uIGFuZCBhcyBwYXJ0IG9mXG4gKiBhbiBgYXdhaXRgIGV4cHJlc3Npb24uXG4gKlxuICogSXQgZnVuY3Rpb25zIGluIGV2ZXJ5IHdheSBsaWtlIGB7QGxpbmsgbW9kdWxlOmNoYW5rby9jaGFubmVscy5yZWN2fHJlY3Z9YFxuICogKmV4Y2VwdCogaW4gdGhlIGNhc2UgdGhhdCB0aGUgdmFsdWUgb24gdGhlIGNoYW5uZWwgaXMgYW4gb2JqZWN0IHRoYXQgaGFzXG4gKiBgRXJyb3IucHJvdG90eXBlYCBpbiBpdHMgcHJvdG90eXBlIGNoYWluIChhbnkgYnVpbHQtaW4gZXJyb3IsIGFueVxuICogcHJvcGVybHktY29uc3RydWN0ZWQgY3VzdG9tIGVycm9yKS4gSWYgdGhhdCBoYXBwZW5zLCB0aGUgZXJyb3IgaXMgdGhyb3duLFxuICogd2hpY2ggd2lsbCBjYXVzZSB0aGUgcmV0dXJuZWQgcHJvbWlzZSB0byBiZSByZWplY3RlZCB3aXRoIHRoZSBlcnJvci4gSXQgY2FuXG4gKiB0aGVuIGJlIGhhbmRsZWQgdXAgdGhlIHByb21pc2UgY2hhaW4gbGlrZSBhbnkgb3RoZXIgcmVqZWN0ZWQgcHJvbWlzZS5cbiAqXG4gKiBgdGFrZU9yVGhyb3dgIGlzIHJvdWdobHkgZXF1aXZhbGVudCB0bzpcbiAqXG4gKiBgYGBcbiAqIGNvbnN0IHZhbHVlID0gYXdhaXQgcmVjdihjaCk7XG4gKiBpZiAoRXJyb3IucHJvdG90eXBlLmlzUHJvdG90eXBlT2YodmFsdWUpKSB7XG4gKiAgIHRocm93IHZhbHVlO1xuICogfVxuICogYGBgXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjaGFua28vY2hhbm5lbHNcbiAqIEByZXR1cm4ge1Byb21pc2V9IEEgcHJvbWlzZSB0aGF0IHdpbGwgcmVzb2x2ZSB0byB0aGUgdmFsdWUgdGFrZW4gZnJvbSB0aGVcbiAqICAgICBjaGFubmVsIG9uY2UgdGhhdCB0YWtlIGlzIGNvbXBsZXRlZC4gSWYgdGhlIGNoYW5uZWwgY2xvc2VzIHdpdGhvdXQgYVxuICogICAgIHZhbHVlIGJlaW5nIG1hZGUgYXZhaWxhYmxlLCB0aGlzIHdpbGwgcmVzb2x2ZSB0b1xuICogICAgIGB7QGxpbmsgbW9kdWxlOmNoYW5rb35DaGFua28uQ0xPU0VEfENMT1NFRH1gLiBJZiB0aGUgdGFrZW4gdmFsdWUgaXMgYW5cbiAqICAgICBlcnJvciwgdGhlIHByb21pc2Ugd2lsbCBpbnN0ZWFkIGJlIHJlamVjdGVkIHdpdGggdGhlIGVycm9yIG9iamVjdCBhcyB0aGVcbiAqICAgICByZWFzb24uXG4gKi9cbmZ1bmN0aW9uIHJlY3ZPclRocm93KGNoYW5uZWwpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICByZWN2QXN5bmMoY2hhbm5lbCwgcmVzdWx0ID0+IHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmlzUHJvdG90eXBlT2YuY2FsbChFcnJvci5wcm90b3R5cGUsIHJlc3VsdCkpIHtcbiAgICAgICAgcmVqZWN0KHJlc3VsdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuXG4vKipcbiAqIENsb3NlcyB0aGUgY2hhbm5lbCwgaWYgaXQgaXNuJ3QgYWxyZWFkeSBjbG9zZWQuIFRoaXMgaW1tZWRpYXRlbHkgcmV0dXJucyBhbnlcbiAqIGJ1ZmZlcmVkIHZhbHVlcyB0byBwZW5kaW5nIHJlY2VpdmVzLiBJZiB0aGVyZSBhcmUgbm8gYnVmZmVyZWQgdmFsdWVzIChvciBpZlxuICogdGhleSd2ZSBhbHJlYWR5IGJlZW4gdGFrZW4gYnkgb3RoZXIgcmVjZWl2ZXMpLCB0aGVuIGFsbCBvZiB0aGUgcmVzdCBvZiB0aGVcbiAqIHJlY2VpdmVzIGFyZSBjb21wbGV0ZWQgd2l0aCB0aGUgdmFsdWUgb2ZcbiAqIGB7QGxpbmsgbW9kdWxlOmNoYW5rby9jaGFubmVscy5DTE9TRUR8Q0xPU0VEfWAuIEFueSBwZW5kaW5nIHNlbmRzIGFyZVxuICogY29tcGxldGVkIHdpdGggdGhlIHZhbHVlIG9mIGBmYWxzZWAuXG4gKlxuICogTm90ZSB0aGF0IHRoZSBidWZmZXIgaXMgbm90IGVtcHRpZWQgaWYgdGhlcmUgYXJlIHN0aWxsIHZhbHVlcyByZW1haW5pbmcgYWZ0ZXJcbiAqIGFsbCBvZiB0aGUgcGVuZGluZyByZWNlaXZlcyBoYXZlIGJlZW4gaGFuZGxlZC4gVGhlIGNoYW5uZWwgd2lsbCBzdGlsbCBwcm92aWRlXG4gKiB0aG9zZSB2YWx1ZXMgdG8gYW55IGZ1dHVyZSByZWNlaXZlcywgdGhvdWdoIG5vIG5ldyB2YWx1ZXMgbWF5IGJlIGFkZGVkIHRvIHRoZVxuICogY2hhbm5lbC4gT25jZSB0aGUgYnVmZmVyIGlzIGRlcGxldGVkLCBhbnkgZnV0dXJlIHJlY2VpdmVzIHdpbGwgcmV0dXJuXG4gKiBge0BsaW5rIG1vZHVsZTpjaGFua28vY2hhbm5lbHMuQ0xPU0VEfENMT1NFRH1gLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y2hhbmtvL2NoYW5uZWxzXG4gKiBAcGFyYW0ge21vZHVsZTpjaGFua28vY2hhbm5lbHMuQ2hhbm5lbH0gY2hhbm5lbCBUaGUgY2hhbm5lbCB0byBiZSBjbG9zZWQuXG4gKi9cbmZ1bmN0aW9uIGNsb3NlKGNoYW5uZWwpIHtcbiAgY2xvc2VJbXBsKGNoYW5uZWwpO1xufVxuXG5leHBvcnQge1xuICBDTE9TRUQsXG4gIERFRkFVTFQsXG4gIGNoYW4sXG4gIHRpbWVkQ2hhbixcbiAgdHJhbnNDaGFuLFxuICBpc0Nsb3NlZCxcbiAgaXNCdWZmZXJlZCxcbiAgaXNUaW1lZCxcbiAgc2VuZEFzeW5jLFxuICByZWN2QXN5bmMsXG4gIHNlbGVjdEFzeW5jLFxuICBzZW5kLFxuICByZWN2LFxuICByZWN2T3JUaHJvdyxcbiAgc2VsZWN0LFxuICBjbG9zZSxcbiAgdmFsdWUsXG4gIGNoYW5uZWxcbn07XG5cbi8qKlxuICogVXNlZCBieSBjaGFubmVscyB0byB0cmFjayBleGVjdXRpb24gb2Ygb3BlcmF0aW9ucyAoYHNlbmRgLCBgcmVjdmAsIGFuZFxuICogYHNlbGVjdGApLiBUaGV5IHByb3ZpZGUgdHdvIHBpZWNlcyBvZiBpbmZvcm1hdGlvbjogdGhlIGZ1bmN0aW9uIHRvIGNhbGwgd2hlblxuICogYSBgc2VuZGAgb3IgYHJlY3ZgIHVuYmxvY2tzIChiZWNhdXNlIGEgdmFsdWUgZ2l2ZW4gdG8gc2VuZCBoYXMgYmVlbiByZWNlaXZlZCxcbiAqIG9yIGEgYHJlY3ZgIGhhcyBhY2NlcHRlZCBhIHZhbHVlIHRoYXQgaGFzIGJlZW4gc2VudCkgYW5kIHdoZXRoZXIgb3Igbm90IHRoZVxuICogaGFuZGxlciBpcyBzdGlsbCBhY3RpdmUuXG4gKlxuICogVGhlIGZ1bmN0aW9uIGlzIGEgY2FsbGJhY2sgdGhhdCBhY3R1YWxseSBkZWZpbmVzIHRoZSBkaWZmZXJlbmNlIGJldHdlZW5cbiAqIGB7QGxpbmsgbW9kdWxlOmNoYW5rby9jaGFubmVscy5zZW5kfHNlbmR9YCAvXG4gKiBge0BsaW5rIG1vZHVsZTpjaGFua28vY2hhbm5lbHMucmVjdnxyZWN2fWAgL1xuICogYHtAbGluayBtb2R1bGU6Y2hhbmtvL2NoYW5uZWxzLnNlbGVjdHxzZWxlY3R9YCBhbmRcbiAqIGB7QGxpbmsgbW9kdWxlOmNoYW5rby9jaGFubmVscy5zZW5kQXN5bmN8c2VuZEFzeW5jfWAgL1xuICogYHtAbGluayBtb2R1bGU6Y2hhbmtvL2NoYW5uZWxzLnJlY3ZBc3luY3xyZWN2QXN5bmN9YCAvXG4gKiBge0BsaW5rIG1vZHVsZTpjaGFua28vY2hhbm5lbHMuc2VsZWN0QXN5bmN8c2VsZWN0QXN5bmN9YDogd2hpbGUgdGhlIHVuYmxvY2tlZFxuICogY2FsbHMgdXNlIHRoZSBjYWxsYmFjayBwYXNzZWQgdG8gdGhlIGZ1bmN0aW9uLCBgc2VuZGAsIGByZWN2YCwgYW5kIGBzZWxlY3RgXG4gKiBzaW1wbHkgY29udGludWUgdGhlIHByb2Nlc3Mgd2hlcmUgaXQgbGVmdCBvZmYuIChUaGlzIGlzIHdoeSBgc2VuZGAsIGByZWN2YCxcbiAqIGFuZCBgc2VsZWN0YCBvbmx5IHdvcmsgaW5zaWRlIGBhc3luY2AgZnVuY3Rpb25zIHdpdGggYGF3YWl0YCBpZiB0aGUgcmV0dXJuXG4gKiB2YWx1ZSBpcyBuZWVkZWQsIGJlY2F1c2Ugb3RoZXJ3aXNlIHRoZXJlJ3Mgbm8gcHJvY2VzcyB0byBjb250aW51ZS4pXG4gKlxuICogVGhpcyBmdW5jdGlvbiBpcyBwcm92aWRlZCBhcyB0aGUgcmV0dXJuIHZhbHVlIG9mIHRoZSBgY29tbWl0YCBtZXRob2QuIENhbGxpbmdcbiAqIGBjb21taXRgIGhhcyBubyBleHRyYSBlZmZlY3Qgd2l0aCBgc2VuZGAgYW5kIGByZWN2YCBvcGVyYXRpb25zLCBidXQgZm9yXG4gKiBgc2VsZWN0YCwgaXQgYWxzbyBtYXJrcyB0aGUgaGFuZGxlciBhcyBubyBsb25nZXIgYmVpbmcgYWN0aXZlLiBUaGlzIG1lYW5zXG4gKiB0aGF0IG9ubHkgb25lIG9mIHRoZSBvcGVyYXRpb25zIHBhc3NlZCB0byBzZWxlY3QgY2FuIGJlIGNvbXBsZXRlZCwgYmVjYXVzZVxuICogYWZ0ZXIgdGhlIGZpcnN0IG9uZSwgdGhlIGhhbmRsZXIgaXMgbm8gbG9uZ2VyIGFjdGl2ZSBhbmQgd2lsbCBub3QgYmUgYWxsb3dlZFxuICogdG8gcHJvY2VzcyBhIHNlY29uZCBvcGVyYXRpb24uXG4gKlxuICogSWYgYSBgc2VuZGAgb3IgYHJlY3ZgIChvciBlcXVpdmFsZW50IGBzZWxlY3RgIG9wZXJhdGlvbikgY2Fubm90IGJlXG4gKiBpbW1lZGlhdGVseSBjb21wbGV0ZWQgYmVjYXVzZSB0aGVyZSBpc24ndCBhIGNvcnJlc3BvbmRpbmcgcGVuZGluZyBgcmVjdmAgb3JcbiAqIGBzZW5kYCwgdGhlIGhhbmRsZXIgaXMgcXVldWVkIHRvIGJlIHJ1biB3aGVuIGEgbmV3IGByZWN2YCBvciBgc2VuZGAgYmVjb21lc1xuICogYXZhaWxhYmxlLlxuICpcbiAqIEB0eXBlZGVmIEhhbmRsZXJcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gYWN0aXZlIFdoZXRoZXIgb3Igbm90IHRoZSBvcGVyYXRpb24gaXMgc3RpbGwgYWN0aXZlLiBBblxuICogICAgIGluYWN0aXZlIG9wZXJhdGlvbiBpcyBub3Qgc2VydmljZWQgYW5kIHdpbGwgYmUgY2xlYXJlZCBmcm9tIHRoZSBxdWV1ZSBvblxuICogICAgIHRoZSBuZXh0IGRpcnR5IG9wZXJhdGlvbiBwdXJnZS5cbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IGNvbW1pdCBNYXJrcyB0aGUgaGFuZGxlciBhcyBpbmFjdGl2ZSAoc28gaXQgZG9lc24ndCBydW5cbiAqICAgICB0d2ljZSkgYW5kIHJldHVybnMgdGhlIGNhbGxiYWNrIHRvIGJlIHJ1biB3aGVuIHRoZSBvcGVyYXRpb24gY29tcGxldGVzLlxuICogQHByaXZhdGVcbiAqL1xuXG4vKipcbiAqIEEgY2FsbGJhY2sgZnVuY3Rpb24gcnVuIHdoZW4gYSBgc2VuZGAgb3IgYHJlY3ZgIG9wZXJhdGlvbiBjb21wbGV0ZXMuXG4gKlxuICogQGNhbGxiYWNrIEhhbmRsZXJDYWxsYmFja1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgcHJvdmlkZWQgYnkgdGhlIGNoYW5uZWwuIEluIGEgYHJlY3ZgLCB0aGlzIGlzIHRoZVxuICogICAgIHZhbHVlIHJlY2VpdmVkIGZyb20gdGhlIGNoYW5uZWwuIEluIGEgYHNlbmRgLCB0aGlzIGlzIGB0cnVlYCBmb3IgYVxuICogICAgIHN1Y2Nlc3NmdWwgc2VuZCBhbmQgYGZhbHNlYCBpZiB0aGUgY2hhbm5lbCBpcyBjbG9zZWQgYmVmb3JlIHRoZSBzZW5kIGNhblxuICogICAgIGNvbXBsZXRlLlxuICogQHByaXZhdGVcbiAqL1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG5cbmltcG9ydCB7IGJveCwgaGFuZGxlU2VuZCwgaGFuZGxlUmVjdiwgaXNCb3ggfSBmcm9tIFwiLi9oYW5kbGVyXCI7XG5cbi8qKlxuICogVGhlIG5hbWUgb2YgdGhlIGNoYW5uZWwgcmV0dXJuZWQgZnJvbSBgYXdhaXRcbiAqIHtAbGluayBtb2R1bGU6Y2hhbmtvL2NoYW5uZWxzLnNlbGVjdHxzZWxlY3R9YCBvciBzZW50IHRvIHRoZSBjYWxsYmFjayBpblxuICogYHtAbGluayBtb2R1bGU6Y2hhbmtvL2NoYW5uZWxzLnNlbGVjdEFzeW5jfHNlbGVjdEFzeW5jfWAgd2hlbiB0aGUgZGVmYXVsdCBpc1xuICogcmV0dXJuZWQgYXMgaXRzIHZhbHVlLlxuICpcbiAqIFRoaXMgb25seSBoYXBwZW5zIHdoZW4gYW4gYHtAbGluayBtb2R1bGU6Y2hhbmtvL2NoYW5uZWxzLnNlbGVjdHxzZWxlY3R9IC9cbiAqIHtAbGluayBtb2R1bGU6Y2hhbmtvL2NoYW5uZWxzLnNlbGVjdEFzeW5jfHNlbGVjdEFzeW5jfWAgY2FsbCBpcyBwZXJmb3JtZWQsXG4gKiBhbGwgb3BlcmF0aW9ucyBhcmUgaW5pdGlhbGx5IGJsb2NraW5nLCBhbmQgYSBgZGVmYXVsdGAgb3B0aW9uIGlzIHNlbnQuIFRoZVxuICogaW1tZWRpYXRlIHJlc3BvbnNlIGluIHRoYXQgc2l0dWF0aW9uIGlzIGB7IHZhbHVlOiBvcHRpb25zLmRlZmF1bHQsIGNoYW5uZWw6XG4gKiBERUZBVUxUIH1gLlxuICpcbiAqIEB0eXBlIHtTeW1ib2x9XG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNoYW5rby9jaGFubmVsc1xuICovXG5jb25zdCBERUZBVUxUID0gU3ltYm9sKFwiREVGQVVMVFwiKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGhhbmRsZXIgdXNlZCBmb3IgYHNlbGVjdGAgb3BlcmF0aW9ucy5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNoYW5rby9jaGFubmVsXG4gKiBAcGFyYW0ge21vZHVsZTpjaGFua28vY2hhbm5lbH5Cb3h9IGFjdGl2ZSBBIGJveGVkIHZhbHVlIGluZGljYXRpbmcgd2hldGhlclxuICogICAgIHRoZSBoYW5kbGVyIGlzIHZhbGlkLiBUaGlzIGlzIGEgYm94ZWQgdmFsdWUgYmVjYXVzZSB0aGUgc2VsZWN0LWhhbmRsaW5nXG4gKiAgICAgY29kZSBuZWVkcyB0byBtYW5pcHVsYXRlIGl0IGRpcmVjdGx5LlxuICogQHBhcmFtIHttb2R1bGU6Y2hhbmtvL2NoYW5uZWx+SGFuZGxlckNhbGxiYWNrfSBmbiBUaGUgY2FsbGJhY2sgdG8gYmUgcnVuIHdoZW5cbiAqICAgICAoYW5kIGlmKSB0aGUgb3BlcmF0aW9uIGNvbXBsZXRlcy5cbiAqIEByZXR1cm4ge21vZHVsZTpjaGFua28vY2hhbm5lbH5IYW5kbGVyfSBUaGUgbmV3IGhhbmRsZXIuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBzZWxlY3RIYW5kbGVyKGFjdGl2ZSwgZm4pIHtcbiAgcmV0dXJuIE9iamVjdC5jcmVhdGUobnVsbCwge1xuICAgIGFjdGl2ZToge1xuICAgICAgZ2V0KCkge1xuICAgICAgICByZXR1cm4gYWN0aXZlLnZhbHVlO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBjb21taXQ6IHtcbiAgICAgIHZhbHVlOiAoKSA9PiB7XG4gICAgICAgIGFjdGl2ZS52YWx1ZSA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gZm47XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgcmFuZG9tbHkgc2h1ZmZsZWQgYXJyYXkgY29udGFpbmluZyBvbmUgb2YgZWFjaCBpbnRlZ2VyIHZhbHVlIGZyb21cbiAqIGAwYCB0byBhbiB1cHBlciBsaW1pdC4gSXQgaXMgdXNlZCB0byByYW5kb21seSBzZWxlY3QgYSBjaGFubmVsIHRvIGJlIGFjdGl2ZVxuICogd2hlbiBtdWx0aXBsZXMgdW5ibG9jayBpbiBhIGBzZWxlY3RgIG9wZXJhdGlvbi5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNoYW5rby9jaGFubmVsXG4gKiBAcGFyYW0ge251bWJlcn0gdXBwZXIgVGhlIHVwcGVyIGxpbWl0IG9mIHRoZSBhcnJheSB2YWx1ZXMsIGV4Y2x1c2l2ZS5cbiAqIEByZXR1cm4ge251bWJlcltdfSBBbiBhcnJheSBvZiBpbnRlZ2VycyBmcm9tIGAwYCB0byBgdXBwZXIgLSAxYCwgc2h1ZmZsZWRcbiAqICAgICBpbnRvIGEgcmFuZG9tIG9yZGVyLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gcmFuZG9tQXJyYXkodXBwZXIpIHtcbiAgY29uc3QgYXJyYXkgPSBbXTtcbiAgZm9yIChsZXQgayA9IDA7IGsgPCB1cHBlcjsgaysrKSB7XG4gICAgYXJyYXkucHVzaChrKTtcbiAgfVxuICBmb3IgKGxldCBqID0gdXBwZXIgLSAxOyBqID4gMDsgai0tKSB7XG4gICAgY29uc3QgaSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChqICsgMSkpO1xuICAgIGNvbnN0IHRlbXAgPSBhcnJheVtqXTtcbiAgICBhcnJheVtqXSA9IGFycmF5W2ldO1xuICAgIGFycmF5W2ldID0gdGVtcDtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbi8qKlxuICogQSByZXN1bHQgdGhhdCBjb21lcyBmcm9tIGBzZWxlY3RgIG9wZXJhdGlvbnMuXG4gKlxuICogQHR5cGVkZWYgU2VsZWN0UmVzdWx0XG4gKiBAcHJvcGVydHkgeyp9IHZhbHVlIElmIHRoZSBgc2VsZWN0YCBvcGVyYXRpb24gcmVzdWx0ZWQgaW4gYSByZWNlaXZlLCB0aGlzIGlzXG4gKiAgICAgdGhlIHZhbHVlIHJlY2VpdmVkIGZyb20gdGhlIGNoYW5uZWwuIElmIGl0IHJlc3VsdGVkIGluIGEgc2VuZCwgdGhpcyBpc1xuICogICAgIGB0cnVlYCBmb3IgYSBzdWNjZXNzZnVsIHNlbmQgYW5kIGBmYWxzZWAgaWYgdGhlIGNoYW5uZWwgY2xvc2VkIGZpcnN0LlxuICogQHByb3BlcnR5IHttb2R1bGU6Y2hhbmtvL2NoYW5uZWxzLkNoYW5uZWx9IGNoYW5uZWwgVGhlIGNoYW5uZWwgdXBvbiB3aGljaCB0aGVcbiAqICAgICBzZWxlY3RlZCBvcGVyYXRpb24gaGFwcGVuZWQuXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNoYW5rby9jaGFubmVsc1xuICovXG5cbi8qKlxuICogQ3JlYXRlcyBhIHNlbGVjdCByZXN1bHQgZnJvbSBpdHMgY29tcG9uZW50IHByb3BlcnRpZXMuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjaGFua28vY2hhbm5lbFxuICogQHBhcmFtIHsqfSB2YWx1ZSBJZiB0aGUgYHNlbGVjdGAgb3BlcmF0aW9uIHJlc3VsdGVkIGluIGEgcmVjZWl2ZSwgdGhpcyBpc1xuICogICAgIHRoZSB2YWx1ZSByZWNlaXZlZCBmcm9tIHRoZSBjaGFubmVsLiBJZiBpdCByZXN1bHRlZCBpbiBhIHNlbmQsIHRoaXMgaXNcbiAqICAgICBgdHJ1ZWAgZm9yIGEgc3VjY2Vzc2Z1bCBzZW5kIGFuZCBgZmFsc2VgIGlmIHRoZSBjaGFubmVsIGNsb3NlZCBmaXJzdC5cbiAqIEBwYXJhbSB7bW9kdWxlOmNoYW5rby9jaGFubmVscy5DaGFubmVsfSBjaGFubmVsIFRoZSBjaGFubmVsIHVwb24gd2hpY2ggdGhlXG4gKiAgICAgc2VsZWN0ZWQgb3BlcmF0aW9uIGhhcHBlbmVkLlxuICogQHJldHVybiB7bW9kdWxlOmNoYW5rby9jaGFubmVscy5TZWxlY3RSZXN1bHR9IFRoZSBwcm9wZXJ0aWVzIHdyYXBwZWQgaW50byBhblxuICogICAgIG9iamVjdCBmb3Igb3V0cHV0LlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gc2VsZWN0UmVzdWx0KHZhbHVlLCBjaGFubmVsKSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5jcmVhdGUobnVsbCksIHsgdmFsdWUsIGNoYW5uZWwgfSk7XG59XG5cbi8qKlxuICogQ29tcGxldGVzIHRoZSBmaXJzdCBvcGVyYXRpb24gYW1vbmcgdGhlIHByb3ZpZGVkIG9wZXJhdGlvbnMgdGhhdCBjb21lc1xuICogYXZhaWxhYmxlLCB3aXRob3V0IGJsb2NraW5nLlxuICpcbiAqIFRoaXMgbWVhbnMgdGhhdCBhIGNhbGwgdG8gYHNlbGVjdEFzeW5jYCBkb2VzIG5vdCBnbyBpbnRvIGFuIGBhd2FpdGBcbiAqIGV4cHJlc3Npb24sIGFuZCBpdCBpcyBub3QgbmVjZXNzYXJ5IHRvIHVzZSBpdCBpbnNpZGUgYSBwcm9jZXNzLiBSYXRoZXIgdGhhblxuICogYmxvY2tpbmcgdW50aWwgYW4gb3BlcmF0aW9uIGNvbXBsZXRlcywgdGhpcyBvbmUgcmV0dXJucyBpbW1lZGlhdGVseSBhbmQgdGhlblxuICogaW52b2tlcyB0aGUgY2FsbGJhY2sgKGlmIHByb3ZpZGVkKSBhcyBzb29uIGFzIG9uZSBvZiB0aGUgc3VwcGxpZWQgb3BlcmF0aW9uc1xuICogY29tcGxldGVzLiBJdCBjYW4gYmUgcmVnYXJkZWQgYXMgYSBub24tYmxvY2tpbmcgdmVyc2lvbiBvZlxuICogYHtAbGluayBtb2R1bGU6Y2hhbmtvL2NoYW5uZWxzLnNlbGVjdHxzZWxlY3R9YC5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHVzZXMgYW4gb3BlcmF0aW9ucyBsaXN0IHRoYXQncyBpZGVudGljYWwgdG8gdGhlIG9uZSB1c2VkIGJ5XG4gKiBge0BsaW5rIG1vZHVsZTpjaGFua28vY2hhbm5lbHMuc2VsZWN0fHNlbGVjdH1gLiBJdCdzIGFuIGFycmF5IG9mIHZhbHVlczsgaWYgYVxuICogdmFsdWUgaXMgYSBjaGFubmVsLCB0aGVuIHRoYXQgb3BlcmF0aW9uIGlzIGEgdGFrZSBvbiB0aGF0IGNoYW5uZWwsIHdoaWxlIGlmXG4gKiBpdCdzIGEgdHdvLWVsZW1lbnQgYXJyYXkgb2YgY2hhbm5lbCBhbmQgdmFsdWUsIHRoZW4gdGhhdCBvcGVyYXRpb24gaXMgYSBwdXRcbiAqIG9mIHRoYXQgdmFsdWUgb250byB0aGF0IGNoYW5uZWwuIEFsbCBvcHRpb25zIHRoYXQgYXJlIGF2YWlsYWJsZSB0b1xuICogYHtAbGluayBtb2R1bGU6Y2hhbmtvL2NoYW5uZWxzLnNlbGVjdHxzZWxlY3R9YCBhcmUgYWxzbyBhdmFpbGFibGUgaGVyZS5cbiAqXG4gKiBUaGUgY2FsbGJhY2sgaXMgYSBmdW5jdGlvbiBvZiBvbmUgcGFyYW1ldGVyLCB3aGljaCBpbiB0aGlzIGNhc2UgaXMgYW4gb2JqZWN0XG4gKiB3aXRoIGB2YWx1ZWAgYW5kIGBjaGFubmVsYCBwcm9wZXJ0aWVzLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y2hhbmtvL2NoYW5uZWxzXG4gKiBAcGFyYW0ge09iamVjdFtdfSBvcGVyYXRpb25zIEEgY29sbGVjdGlvbiBvZiBlbGVtZW50cyB0aGF0IGNvcnJlc3BvbmQgdG8gcmVjdlxuICogICAgIGFuZCBzZW5kIG9wZXJhdGlvbnMuIEEgcmVjdiBvcGVyYXRpb24gaXMgc2lnbmlmaWVkIGJ5IGFuIGVsZW1lbnQgdGhhdCBpc1xuICogICAgIGEgY2hhbm5lbCAod2hpY2ggaXMgdGhlIGNoYW5uZWwgdG8gYmUgcmVjZWl2ZWQgZnJvbSkuIEEgc2VuZCBvcGVyYXRpb24gaXNcbiAqICAgICBzcGVjaWZpZWQgYnkgYW4gZWxlbWVudCB0aGF0IGlzIGl0c2VsZiBhIHR3by1lbGVtZW50IGFycmF5LCB3aGljaCBoYXMgYVxuICogICAgIGNoYW5uZWwgZm9sbG93ZWQgYnkgYSB2YWx1ZSAod2hpY2ggaXMgdGhlIGNoYW5uZWwgYW5kIHZhbHVlIHRvIGJlIHNlbnQpLlxuICogQHBhcmFtIHttb2R1bGU6Y2hhbmtvL2NoYW5uZWxzLlNlbGVjdENhbGxiYWNrfSBjYWxsYmFjayBBIGZ1bmN0aW9uIHRoYXQgZ2V0c1xuICogICAgIGludm9rZWQgd2hlbiBvbmUgb2YgdGhlIG9wZXJhdGlvbnMgY29tcGxldGVzLlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSBBbiBvcHRpb25hbCBvYmplY3Qgd2hpY2ggY2FuIGNoYW5nZSB0aGUgYmVoYXZpb3JcbiAqICAgICBvZiBgc2VsZWN0QXN5bmNgIHRocm91Z2ggdHdvIHByb3BlcnRpZXMuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnByaW9yaXR5PWZhbHNlXSBJZiBgdHJ1ZWAsIHRoZW4gdGhlIHByaW9yaXR5IG9mXG4gKiAgICAgb3BlcmF0aW9ucyB0byBjb21wbGV0ZSB3aGVuIG1vcmUgdGhhbiBvbmUgaXMgaW1tZWRpYXRlbHkgYXZhaWxhYmxlIGlzIGFcbiAqICAgICBwcmlvcml0eSBhY2NvcmRpbmcgdG8gcG9zaXRpb24gd2l0aGluIHRoZSBvcGVyYXRpb25zIGFycmF5IChlYXJsaWVyXG4gKiAgICAgcG9zaXRpb25zIGhhdmUgdGhlIGhpZ2hlciBwcmlvcml0eSkuIElmIGBmYWxzZWAgb3Igbm90IHByZXNlbnQsIHRoZVxuICogICAgIHByaW9ydHkgb2Ygb3BlcmF0aW9uIGNvbXBsZXRpb24gaXMgcmFuZG9tLlxuICogQHBhcmFtIHsqfSBbb3B0aW9ucy5kZWZhdWx0XSBJZiBzZXQgYW5kIGFsbCBvZiB0aGUgb3BlcmF0aW9ucyBpbml0aWFsbHlcbiAqICAgICBibG9jaywgdGhlIGBzZWxlY3RBc3luY2AgY2FsbHMgaXRzIGNhbGxiYWNrIGltbWVkaWF0ZWx5IHdpdGggdGhlIHZhbHVlIG9mXG4gKiAgICAgdGhpcyBvcHRpb24gKHRoZSBjaGFubmVsIHdpbGwgYmVcbiAqICAgICBge0BsaW5rIG1vZHVsZTpjaGFua28vY2hhbm5lbHMuREVGQVVMVHxERUZBVUxUfSlgLiBJZiBub3Qgc2V0LCB0aGVcbiAqICAgICBgc2VsZWN0QXN5bmNgIGNhbGwgd2lsbCBub3QgY2FsbCBpdHMgY2FsbGJhY2sgdW50aWwgb25lIG9mIHRoZSBvcGVyYXRpb25zXG4gKiAgICAgY29tcGxldGVzIGFuZCB0aGF0IHZhbHVlIGFuZCBjaGFubmVsIHdpbGwgYmUgdGhlIG9uZXMgcmV0dXJuZWQuXG4gKi9cbmZ1bmN0aW9uIHNlbGVjdEFzeW5jKG9wcywgY2FsbGJhY2sgPSAoKSA9PiB7fSwgb3B0aW9ucyA9IHt9KSB7XG4gIGNvbnN0IGNvdW50ID0gb3BzLmxlbmd0aDtcbiAgaWYgKGNvdW50ID09PSAwKSB7XG4gICAgdGhyb3cgRXJyb3IoXCJzZWxlY3QgY2FsbGVkIHdpdGggbm8gb3BlcmF0aW9uc1wiKTtcbiAgfVxuXG4gIGNvbnN0IHByaW9yaXR5ID0gISFvcHRpb25zLnByaW9yaXR5O1xuICBjb25zdCBpbmRpY2VzID0gcHJpb3JpdHkgPyBbXSA6IHJhbmRvbUFycmF5KGNvdW50KTtcblxuICBjb25zdCBhY3RpdmUgPSBib3godHJ1ZSk7XG5cbiAgZnVuY3Rpb24gY3JlYXRlU2VsZWN0SGFuZGxlcihjaGFubmVsKSB7XG4gICAgcmV0dXJuIHNlbGVjdEhhbmRsZXIoYWN0aXZlLCB2YWx1ZSA9PiB7XG4gICAgICBjYWxsYmFjayhzZWxlY3RSZXN1bHQodmFsdWUsIGNoYW5uZWwpKTtcbiAgICB9KTtcbiAgfVxuXG4gIGxldCByZXN1bHQ7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgLy8gQ2hvb3NlIGFuIG9wZXJhdGlvbi4gSWYgYHByaW9yaXR5YCBpcyB0cnVlIHRoZW4gaXQncyB0aGUgbmV4dCBpbmRleCxcbiAgICAvLyBvdGhlcndpc2UgaXQncyByYW5kb21cbiAgICBjb25zdCBvcCA9IG9wc1twcmlvcml0eSA/IGkgOiBpbmRpY2VzW2ldXTtcbiAgICBsZXQgY2hhbm5lbCwgdmFsdWU7XG5cbiAgICAvLyBBcHBseSBldmVyeSBvcGVyYXRpb24gdG8gaXRzIGNoYW5uZWwsIG9uZSBhdCBhIHRpbWVcbiAgICBpZiAoQXJyYXkuaXNBcnJheShvcCkpIHtcbiAgICAgIFtjaGFubmVsLCB2YWx1ZV0gPSBvcDtcbiAgICAgIHJlc3VsdCA9IGhhbmRsZVNlbmQoY2hhbm5lbCwgdmFsdWUsIGNyZWF0ZVNlbGVjdEhhbmRsZXIoY2hhbm5lbCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjaGFubmVsID0gb3A7XG4gICAgICByZXN1bHQgPSBoYW5kbGVSZWN2KGNoYW5uZWwsIGNyZWF0ZVNlbGVjdEhhbmRsZXIoY2hhbm5lbCkpO1xuICAgIH1cblxuICAgIC8vIFdlIGNoZWNrIGZvciBib3ggaGVyZSBiZWNhdXNlIGEgYm94IGZyb20gYSBjaGFubmVsIGluZGljYXRlcyB0aGF0IHRoZVxuICAgIC8vIHZhbHVlIGlzIGltbWVkaWF0ZWx5IGF2YWlsYWJsZSAodGhhdCB0aGVyZSBpcyBubyBuZWVkIHRvIGJsb2NrIHRvIGdldCB0aGVcbiAgICAvLyB2YWx1ZSkuIElmIHRoaXMgaGFwcGVucywgd2UgZXhlY3V0ZSB0aGUgY2FsbGJhY2sgaW1tZWRpYXRlbHkgd2l0aCB0aGF0XG4gICAgLy8gdmFsdWUgYW5kIGNoYW5uZWwgYW5kIHN0b3AgcXVldWVpbmcgb3RoZXIgb3BlcmF0aW9ucy5cbiAgICBpZiAoaXNCb3gocmVzdWx0KSkge1xuICAgICAgY2FsbGJhY2soc2VsZWN0UmVzdWx0KHJlc3VsdC52YWx1ZSwgY2hhbm5lbCkpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgLy8gSWYgbm9uZSBvZiB0aGUgb3BlcmFldGlvbnMgaW1tZWRpYXRlbHkgcmV0dXJuZWQgdmFsdWVzICh0aGV5IGFyZSBhbGxcbiAgLy8gYmxvY2tlZCksIGFuZCB3ZSBoYXZlIHNldCBhIGRlZmF1bHQgY2hhbm5lbCBvcHRpb24sIHRoZW4gcmV0dXJuIHRoZSB2YWx1ZVxuICAvLyBpZiB0aGUgZGVmYXVsdCBjaGFubmVsIHJhdGhlciB0aGFuIHdhaXRpbmcgZm9yIHRoZSBxdWV1ZWQgb3BlcmF0aW9ucyB0b1xuICAvLyBjb21wbGV0ZS5cbiAgaWYgKFxuICAgICFpc0JveChyZXN1bHQpICYmXG4gICAgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9wdGlvbnMsIFwiZGVmYXVsdFwiKVxuICApIHtcbiAgICBpZiAoYWN0aXZlLnZhbHVlKSB7XG4gICAgICBhY3RpdmUudmFsdWUgPSBmYWxzZTtcbiAgICAgIGNhbGxiYWNrKHNlbGVjdFJlc3VsdChvcHRpb25zLmRlZmF1bHQsIERFRkFVTFQpKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBDb21wbGV0ZXMgdGhlIGZpcnN0IG9wZXJhdGlvbiBhbW9uZyB0aGUgcHJvdmlkZWQgb3BlcmF0aW9ucyB0aGF0IGNvbWVzXG4gKiBhdmFpbGFibGUsIGJsb2NraW5nIHRoZSBwcm9jZXNzIHVudGlsIHRoZW4uXG4gKlxuICogYG9wZXJhdGlvbnNgIGlzIGFuIGFycmF5IHdob3NlIGVsZW1lbnRzIG11c3QgYmUgY2hhbm5lbHMgb3IgdHdvLWVsZW1lbnRcbiAqIHN1Yi1hcnJheXMgb2YgY2hhbm5lbHMgYW5kIHZhbHVlcywgaW4gYW55IGNvbWJpbmF0aW9uLiBBbiBvcGVyYXRpb24gdGhhdCBpcyBhXG4gKiBjaGFubmVsIGlzIGEgdGFrZSBvcGVyYXRpb24gb24gdGhhdCBjaGFubmVsLiBBbiBvcGVyYXRpb24gdGhhdCBpcyBhXG4gKiB0d28tZWxlbWVudCBhcnJheSBpcyBhIHB1dCBvcGVyYXRpb24gb24gdGhhdCBjaGFubmVsIHVzaW5nIHRoYXQgdmFsdWUuXG4gKiBFeGFjdGx5IG9uZSBvZiB0aGVzZSBvcGVyYXRpb25zIHdpbGwgY29tcGxldGUsIGFuZCBpdCB3aWxsIGJlIHRoZSBmaXJzdFxuICogb3BlcmF0aW9uIHRoYXQgdW5ibG9ja3MuXG4gKlxuICogVGhpcyBmdW5jdGlvbiAqbXVzdCogYmUgY2FsbGVkIGZyb20gd2l0aGluIGFuIGBhc3luY2AgZnVuY3Rpb24gYW5kIGFzIHBhcnQgb2ZcbiAqIGFuIGBhd2FpdGAgZXhwcmVzc2lvbiBpZiB0aGUgcmV0dXJuIHZhbHVlIGlzIG5lZWRlZC5cbiAqXG4gKiBXaGVuIGBzZWxlY3RgIGlzIGNvbXBsZXRlZCBhbmQgaXRzIHByb2Nlc3MgdW5ibG9ja3MsIGl0cyBgYXdhaXRgIGV4cHJlc3Npb25cbiAqIGV2YWx1YXRlcyB0byBhbiBvYmplY3Qgb2YgdHdvIHByb3BlcnRpZXMuIFRoZSBgdmFsdWVgIHByb3BlcnR5IGJlY29tZXNcbiAqIGV4YWN0bHkgd2hhdCB3b3VsZCBoYXZlIGJlZW4gcmV0dXJuZWQgYnkgdGhlIGVxdWl2YWxlbnQgYGF3YWl0IHB1dGAgb3IgYGF3YWl0XG4gKiB0YWtlYCBvcGVyYXRpb246IGEgYm9vbGVhbiBpbiB0aGUgY2FzZSBvZiBhIHB1dCwgb3IgdGhlIHRha2VuIHZhbHVlIGluIHRoZVxuICogY2FzZSBvZiBhIHRha2UuIFRoZSBgY2hhbm5lbGAgcHJvcGVydHkgaXMgc2V0IHRvIHRoZSBjaGFubmVsIHdoZXJlIHRoZVxuICogb3BlcmF0aW9uIGFjdHVhbGx5IHRvb2sgcGxhY2UuIFRoaXMgd2lsbCBiZSBlcXVpdmFsZW50IHRvIHRoZSBjaGFubmVsIGluIHRoZVxuICogYG9wZXJhdGlvbnNgIGFycmF5IHdoaWNoIGNvbXBsZXRlZCBmaXJzdCwgYWxsb3dpbmcgdGhlIHByb2Nlc3MgdG8gdW5ibG9jay5cbiAqXG4gKiBJZiB0aGVyZSBpcyBtb3JlIHRoYW4gb25lIG9wZXJhdGlvbiBhbHJlYWR5IGF2YWlsYWJsZSB0byBjb21wbGV0ZSB3aGVuIHRoZVxuICogY2FsbCB0byBgc2VsZWN0YCBpcyBtYWRlLCB0aGUgb3BlcmF0aW9uIHdpdGggdGhlIGhpZ2hlc3QgcHJpb3JpdHkgd2lsbCBiZSB0aGVcbiAqIG9uZSB0byBjb21wbGV0ZS4gUmVndWxhcmx5LCBwcmlvcml0eSBpcyBub24tZGV0ZXJtaW5pc3RpYyAoaS5lLiwgaXQncyBzZXRcbiAqIHJhbmRvbWx5KS4gSG93ZXZlciwgaWYgdGhlIG9wdGlvbnMgb2JqZWN0IGhhcyBhIGBwcmlvcml0eWAgdmFsdWUgc2V0IHRvXG4gKiBgdHJ1ZWAsIHByaW9yaXR5IHdpbGwgYmUgYXNzaWduZWQgaW4gdGhlIG9yZGVyIG9mIHRoZSBvcGVyYXRpb25zIGluIHRoZVxuICogc3VwcGxpZWQgYXJyYXkuXG4gKlxuICogSWYgYWxsIG9mIHRoZSBvcGVyYXRpb25zIG11c3QgYmxvY2sgKGkuZS4sIHRoZXJlIGFyZSBubyBwZW5kaW5nIHB1dHMgZm9yIHRha2VcbiAqIG9wZXJhdGlvbnMsIG9yIHRha2VzIGZvciBwdXQgb3BlcmF0aW9ucyksIGEgZGVmYXVsdCB2YWx1ZSBtYXkgYmUgcmV0dXJuZWQuXG4gKiBUaGlzIGlzIG9ubHkgZG9uZSBpZiB0aGVyZSBpcyBhIGBkZWZhdWx0YCBwcm9wZXJ0eSBpbiB0aGUgb3B0aW9ucyBvYmplY3QsIGFuZFxuICogdGhlIHZhbHVlIG9mIHRoYXQgcHJvcGVydHkgYmVjb21lcyB0aGUgdmFsdWUgcmV0dXJuZWQgYnkgYGF3YWl0IHNlbGVjdGAuIFRoZVxuICogY2hhbm5lbCBpcyBzZXQgdG8gdGhlIHNwZWNpYWwgdmFsdWVcbiAqIGB7QGxpbmsgbW9kdWxlOmNoYW5rby9jaGFubmVscy5ERUZBVUxUfERFRkFVTFR9YC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNoYW5rby9jaGFubmVsc1xuICogQHBhcmFtIHtvYmplY3RbXX0gb3BlcmF0aW9ucyBBIGNvbGxlY3Rpb24gb2YgZWxlbWVudHMgdGhhdCBjb3JyZXNwb25kIHRvIHJlY3ZcbiAqICAgICBhbmQgc2VuZCBvcGVyYXRpb25zLiBBIHJlY3Ygb3BlcmF0aW9uIGlzIHNpZ25pZmllZCBieSBhbiBlbGVtZW50IHRoYXQgaXNcbiAqICAgICBhIGNoYW5uZWwgKHdoaWNoIGlzIHRoZSBjaGFubmVsIHRvIGJlIHRha2VuIGZyb20pLiBBIHNlbmQgb3BlcmF0aW9uIGlzXG4gKiAgICAgc3BlY2lmaWVkIGJ5IGFuIGVsZW1lbnQgdGhhdCBpcyBpdHNlbGYgYSB0d28tZWxlbWVudCBhcnJheSwgd2hpY2ggaGFzIGFcbiAqICAgICBjaGFubmVsIGZvbGxvd2VkIGJ5IGEgdmFsdWUgKHdoaWNoIGlzIHRoZSBjaGFubmVsIGFuZCB2YWx1ZSB0byBiZSBzZW50KS5cbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9ucz17fV0gQW4gb3B0aW9uYWwgb2JqZWN0IHdoaWNoIGNhbiBjaGFuZ2UgdGhlIGJlaGF2aW9yXG4gKiAgICAgb2YgYHNlbGVjdGAgdGhyb3VnaCB0d28gcHJvcGVydGllcy5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMucHJpb3JpdHk9ZmFsc2VdIElmIGB0cnVlYCwgdGhlbiB0aGUgcHJpb3JpdHkgb2ZcbiAqICAgICBvcGVyYXRpb25zIHRvIGNvbXBsZXRlIHdoZW4gbW9yZSB0aGFuIG9uZSBpcyBpbW1lZGlhdGVseSBhdmFpbGFibGUgaXMgYVxuICogICAgIHByaW9yaXR5IGFjY29yZGluZyB0byBwb3NpdGlvbiB3aXRoaW4gdGhlIG9wZXJhdGlvbnMgYXJyYXkgKGVhcmxpZXJcbiAqICAgICBwb3NpdGlvbnMgaGF2ZSB0aGUgaGlnaGVyIHByaW9yaXR5KS4gSWYgYGZhbHNlYCBvciBub3QgcHJlc2VudCwgdGhlXG4gKiAgICAgcHJpb3J0eSBvZiBvcGVyYXRpb24gY29tcGxldGlvbiBpcyByYW5kb20uXG4gKiBAcGFyYW0geyp9IFtvcHRpb25zLmRlZmF1bHRdIElmIHNldCBhbmQgYWxsIG9mIHRoZSBvcGVyYXRpb25zIGluaXRpYWxseVxuICogICAgIGJsb2NrLCB0aGUgYHNlbGVjdGAgY2FsbCBjb21wbGV0ZXMgaW1tZWRpYXRlbHkgd2l0aCB0aGUgdmFsdWUgb2YgdGhpc1xuICogICAgIG9wdGlvbiAodGhlIGNoYW5uZWwgd2lsbCBiZVxuICogICAgIGB7QGxpbmsgbW9kdWxlOmNoYW5rby9jaGFubmVscy5ERUZBVUxUfERFRkFVTFR9KWAuIElmIG5vdCBzZXQsIHRoZVxuICogICAgIGBzZWxlY3RgIGNhbGwgd2lsbCBibG9jayB1bnRpbCBvbmUgb2YgdGhlIG9wZXJhdGlvbnMgY29tcGxldGVzIGFuZCB0aGF0XG4gKiAgICAgdmFsdWUgYW5kIGNoYW5uZWwgd2lsbCBiZSB0aGUgb25lcyByZXR1cm5lZC5cbiAqIEByZXR1cm4ge1Byb21pc2U8bW9kdWxlOmNoYW5rby9jaGFubmVscy5TZWxlY3RSZXN1bHQ+fSBBIHByb21pc2UgdGhhdCB3aWxsXG4gKiAgICAgcmVzb2x2ZSB0byBhbiBvYmplY3Qgb2YgdHdvIHByb3BlcnRpZXM6IGB2YWx1ZWAgd2lsbCBjb250YWluIHRoZSB2YWx1ZVxuICogICAgIHRoYXQgd291bGQgaGF2ZSBiZWVuIHJldHVybmVkIGJ5IHRoZSBjb3JyZXNwb25kaW5nXG4gKiAgICAgYHtAbGluayBtb2R1bGU6Y2hhbmtvL2NoYW5uZWxzLnNlbmR8c2VuZH1gIG9yXG4gKiAgICAgYHtAbGluayBtb2R1bGU6Y2hhbmtvL2NoYW5uZWxzLnJlY3Z8cmVjdn1gIG9wZXJhdGlvbjsgYW5kIGBjaGFubmVsYCB3aWxsXG4gKiAgICAgYmUgYSByZWZlcmVuY2UgdG8gdGhlIGNoYW5uZWwgdGhhdCBjb21wbGV0ZWQgdGhlIG9wZXJhdGlvbiB0byBhbGxvd1xuICogICAgIGBzZWxlY3RgIHRvIHVuYmxvY2suXG4gKi9cbmZ1bmN0aW9uIHNlbGVjdChvcHMsIG9wdGlvbnMgPSB7fSkge1xuICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgc2VsZWN0QXN5bmMob3BzLCByZXNvbHZlLCBvcHRpb25zKTtcbiAgfSk7XG59XG5cbi8qKlxuICogQSBjb252ZW5pZW5jZSBmdW5jdGlvbiB0byByZWFkIHRoZSB2YWx1ZSBvdXQgb2YgYSBzZWxlY3QgcmVzdWx0LiBUaGlzXG4gKiBmdW5jdGlvbiBpcyBub3QgbmVjZXNzYXJ5IC0gYWZ0ZXIgYWxsLCBpdCdzIGFic29sdXRlbHkgYXMgY29ycmVjdCB0byBzaW1wbHlcbiAqIHVzZSBgcmVzdWx0LnZhbHVlYCBpbnN0ZWFkIG9mIGB2YWx1ZShyZXN1bHQpYCwgYnV0IGl0J3MgcHJvdmlkZWQgZm9yXG4gKiBjb25zaXN0ZW5jeSB3aXRoIHRoZSByZXN0IG9mIHRoZSBmdW5jdGlvbi1jZW50cmljIEFQSS5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNoYW5rby9jaGFubmVsc1xuICogQHBhcmFtIHttb2R1bGU6Y2hhbmtvL2NoYW5uZWxzLlNlbGVjdFJlc3VsdH0gcmVzdWx0IFRoZSByZXN1bHQgY29taW5nIGZyb20gYVxuICogICAgIHNlbGVjdCBvcGVyYXRpb24uXG4gKiBAcmV0dXJuIHsqfSBUaGUgdmFsdWUgcHJvdmlkZWQgYnkgdGhlIHNlbGVjdCBvcGVyYXRpb24uXG4gKi9cbmZ1bmN0aW9uIHZhbHVlKHJlc3VsdCkge1xuICByZXR1cm4gcmVzdWx0LnZhbHVlO1xufVxuXG4vKipcbiAqIEEgY29udmVuaWVuY2UgZnVuY3Rpb24gdG8gcmVhZCB0aGUgY2hhbm5lbCBvdXQgb2YgYSBzZWxlY3QgcmVzdWx0LiBUaGlzXG4gKiBmdW5jdGlvbiBpcyBub3QgbmVjZXNzYXJ5IC0gYWZ0ZXIgYWxsLCBpdCdzIGFic29sdXRlbHkgYXMgY29ycmVjdCB0byBzaW1wbHlcbiAqIHVzZSBgcmVzdWx0LmNoYW5uZWxgIGluc3RlYWQgb2YgYGNoYW5uZWwocmVzdWx0KWAsIGJ1dCBpdCdzIHByb3ZpZGVkIGZvclxuICogY29uc2lzdGVuY3kgd2l0aCB0aGUgcmVzdCBvZiB0aGUgZnVuY3Rpb24tY2VudHJpYyBBUEkuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjaGFua28vY2hhbm5lbHNcbiAqIEBwYXJhbSB7bW9kdWxlOmNoYW5rby9jaGFubmVscy5TZWxlY3RSZXN1bHR9IHJlc3VsdCBUaGUgcmVzdWx0IGNvbWluZyBmcm9tIGFcbiAqICAgICBzZWxlY3Qgb3BlcmF0aW9uLlxuICogQHJldHVybiB7bW9kdWxlOmNoYW5rby9jaGFubmVscy5DaGFubmVsfSBUaGUgY2hhbm5lbCB1cG9uIHdoaWNoIHRoZSBzZWxlY3RcbiAqICAgICBvcGVyYXRpb24gY29tcGxldGVkLlxuICovXG5mdW5jdGlvbiBjaGFubmVsKHJlc3VsdCkge1xuICByZXR1cm4gcmVzdWx0LmNoYW5uZWw7XG59XG5cbmV4cG9ydCB7IERFRkFVTFQsIHNlbGVjdCwgc2VsZWN0QXN5bmMsIHZhbHVlLCBjaGFubmVsIH07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuLyoqXG4gKiBUaGlzIGlzIHRoZSBwbGFjZSB3aGVyZSB0aGUgbmV3IEpTIHRhc2tzIGFyZSBhY3R1YWxseSBjcmVhdGVkLiBBIHF1ZXVlIGlzXG4gKiBtYWludGFpbmVkIGZvciB0aGVtLCBhbmQgYXMgZWFjaCBiYXRjaCBvZiB0YXNrcyBhcmUgY29tcGxldGVkLCB0aGUgbmV4dCBvbmVzXG4gKiBydW4uIEFzIGVhY2ggcHJvY2VzcyBydW5zLCBpdCBhZGRzIHRhc2tzIHRvIGJlIHJ1biB0byB0aGUgcXVldWUsIHdoaWNoIGFyZVxuICogZWFjaCBydW4gaW4gdGhlaXIgb3duIEpTIHRhc2suXG4gKlxuICogVGhlIGZ1bmN0aW9uIHRoYXQgc3Bhd25zIHRoZSBuZXcgSlMgdGFzayBkZXBlbmRzIG9uIGVudmlyb25tZW50LiBUaGVcbiAqIGBzZXRJbW1lZGlhdGVgIGZ1bmN0aW9uIGlzIHByZWZlcnJlZCBhcyBpdCdzIHRoZSBmYXN0ZXN0LCBub3Qgd2FpdGluZyBmb3JcbiAqIGV2ZW50IHF1ZXVlcyB0byBlbXB0eSBiZWZvcmUgc3Bhd25pbmcgdGhlIG5ldyBwcm9jZXNzLiBIb3dldmVyLCBpdCBpcyBub3QgSlNcbiAqIHN0YW5kYXJkIGFuZCBjdXJyZW50bHkgb25seSB3b3JrcyBpbiBJRSBhbmQgTm9kZS4gSWYgYHNldEltbWVkaWF0ZWAgaXNuJ3RcbiAqIGF2YWlsYWJsZSwgYW4gYXR0ZW1wdCBpcyBtYWRlIHRvIHVzZSBgTWVzc2FnZUNoYW5uZWxgJ3MgYG9uTWVzc2FnZWAgaXMgdHJpZWRcbiAqIG5leHQuIElmIHRoYXQgaXMgYWxzbyBub3QgYXZhaWxhYmxlLCB0aGVuIGBzZXRUaW1lb3V0YCB3aXRoIGAwYCBkZWxheSBpc1xuICogdXNlZCwgd2hpY2ggaXMgYXZhaWxhYmxlIGV2ZXJ5d2hlcmUgYnV0IHdoaWNoIGlzIHRoZSBsZWFzdCBwZXJmb3JtYW50IG9mIGFsbFxuICogb2YgdGhlIHNvbHV0aW9ucy5cbiAqXG4gKiBUaGVyZSBhcmUgb3RoZXIgcG9zc2liaWxpdGllcyBmb3IgY3JlYXRpbmcgcHJvY2Vzc2VzLCBidXQgdGhleSB3ZXJlIHJlamVjdGVkXG4gKiBhcyBvYnNvbGV0ZSAoYHByb2Nlc3MubmV4dFRpY2tgIGFuZCBgb25yZWFkeXN0YXRlY2hhbmdlYCkgb3IgdW5uZWNlc3NhcnlcbiAqIChgd2luZG93LnBvc3RNZXNzYWdlYCwgd2hpY2ggd29ya3MgbGlrZSBgTWVzc2FnZUNoYW5uZWxgIGJ1dCBkb2Vzbid0IHdvcmsgaW5cbiAqIFdlYiBXb3JrZXJzKS5cbiAqXG4gKiBJdCBpcyBub3RhYmxlIGFuZCBpbXBvcnRhbnQgdGhhdCB3ZSBhY3QgYXMgZ29vZCBjaXRpemVucyBoZXJlLiBUaGlzXG4gKiBkaXNwYXRjaGVyIGlzIGNhcGFibGUgb2YgdGFraW5nIGNvbnRyb2wgb2YgdGhlIEphdmFTY3JpcHQgZW5naW5lIHVudGlsXG4gKiB0aG91c2FuZHMsIG1pbGxpb25zLCBvciBtb3JlIHRhc2tzIGFyZSBoYW5kbGVkLiBCdXQgdGhhdCBjb3VsZCBjYXVzZSB0aGVcbiAqIHN5c3RlbSBldmVudCBsb29wIHRvIGhhdmUgdG8gd2FpdCBhbiB1bmFjY2VwdGFibGUgYW1vdW50IG9mIHRpbWUuIFNvIHdlIGxpbWl0XG4gKiBvdXJzZWx2ZXMgdG8gYSBiYXRjaCBvZiB0YXNrcyBhdCBhIHRpbWUsIGFuZCBpZiB0aGVyZSBhcmUgc3RpbGwgbW9yZSB0byBiZVxuICogcnVuLCB3ZSBsZXQgdGhlIGV2ZW50IGxvb3AgcnVuIGJlZm9yZSB0aGF0IG5leHQgYmF0Y2ggaXMgcHJvY2Vzc2VkLlxuICpcbiAqIFRoZSBkaXNwYXRjaGVyIGlzICoqZ2xvYmFsKiouIFRoZXJlIGlzIGEgc2luZ2xlIGluc3RhbmNlIHRoYXQgcnVucyBmb3IgYWxsXG4gKiBjaGFubmVscyBhbmQgcHJvY2Vzc2VzLiBUaGlzIGlzIHRoZSBvbmx5IGVsZW1lbnQgb2YgdGhlIHN5c3RlbSB0aGF0IHdvcmtzXG4gKiBsaWtlIHRoaXMuXG4gKlxuICogQG1vZHVsZSBjaGFua28vZGlzcGF0Y2hlclxuICogQHNlZSBtb2R1bGU6Y2hhbmtvL2NoYW5uZWwuY29uZmlnXG4gKiBAcHJpdmF0ZVxuICovXG5cbmltcG9ydCB7XG4gIHF1ZXVlIGFzIHEsXG4gIEVNUFRZLFxuICBjb3VudCBhcyBxQ291bnQsXG4gIGRlcXVldWUsXG4gIGVucXVldWVcbn0gZnJvbSBcIm1vZHVsZXMvcXVldWVcIjtcbmNvbnN0IHF1ZXVlID0gcSgpO1xuXG4vKipcbiAqIFRoZSBkaXNwYXRjaCBtZXRob2Qgb3B0aW9uIGluZGljYXRpbmcgdGhhdCBgc2V0SW1tZWRpYXRlYCBzaG91bGQgYmUgdXNlZCB0b1xuICogZGlzcGF0Y2ggdGFza3MuXG4gKlxuICogVGhpcyBpcyB0aGUgZGVmYXVsdCBvcHRpb24uIEZvciBlbnZpcm9ubWVudHMgdGhhdCBkb24ndCBzdXBwb3J0XG4gKiBgc2V0SW1tZWRpYXRlYCwgdGhpcyBmYWxscyBiYWNrIHRvXG4gKiBge0BsaW5rIG1vZHVsZTpjaGFua28vY2hhbm5lbHMuTUVTU0FHRV9DSEFOTkVMfE1FU1NBR0VfQ0hBTk5FTH1gLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y2hhbmtvL2NoYW5uZWxzXG4gKiBAdHlwZSB7U3ltYm9sfVxuICogQHNlZSB7QGxpbmsgbW9kdWxlOmNoYW5rby9jaGFubmVscy5jb25maWd8Y29uZmlnfVxuICovXG5jb25zdCBTRVRfSU1NRURJQVRFID0gU3ltYm9sKFwiU0VUX0lNTUVESUFURVwiKTtcblxuLyoqXG4gKiBUaGUgZGlzcGF0Y2ggbWV0aG9kIG9wdGlvbiBpbmRpY2F0aW5nIHRoYXQgYSBgTWVzc2FnZUNoYW5uZWxgIHNob3VsZCBiZSB1c2VkXG4gKiB0byBkaXNwYXRjaCB0YXNrcy5cbiAqXG4gKiBGb3IgZW52aXJvbm1lbnRzIHRoYXQgZG9uJ3Qgc3VwcG9ydCBgTWVzc2FnZUNoYW5uZWxgLCB0aGlzIGZhbGxzIGJhY2sgdG9cbiAqIGB7QGxpbmsgbW9kdWxlOmNoYW5rby9jaGFubmVscy5TRVRfVElNRU9VVHxTRVRfVElNRU9VVH1gLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y2hhbmtvL2NoYW5uZWxzXG4gKiBAdHlwZSB7U3ltYm9sfVxuICogQHNlZSB7QGxpbmsgbW9kdWxlOmNoYW5rby9jaGFubmVscy5jb25maWd8Y29uZmlnfVxuICovXG5jb25zdCBNRVNTQUdFX0NIQU5ORUwgPSBTeW1ib2woXCJNRVNTQUdFX0NIQU5ORUxcIik7XG5cbi8qKlxuICogVGhlIGRpc3BhdGNoIG1ldGhvZCBvcHRpb24gaW5kaWNhdGluZyB0aGF0IGBzZXRUaW1lb3V0YCBzaG91bGQgYmUgdXNlZCB0b1xuICogZGlzcGF0Y2ggdGFza3MuXG4gKlxuICogVGhpcyBtZXRob2QgaXMgYWx3YXlzIGF2YWlsYWJsZSwgYnV0IGl0J3MgYWxzbyBhbHdheXMgbGVzcyBlZmZpY2llbnQgdGhhbiBhbnlcbiAqIG90aGVyIG1ldGhvZCwgc28gaXQgc2hvdWxkIGJlIHVzZWQgYXMgYSBsYXN0IHJlc29ydC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNoYW5rby9jaGFubmVsc1xuICogQHR5cGUge1N5bWJvbH1cbiAqIEBzZWUgIHtAbGluayBtb2R1bGU6Y2hhbmtvL2NoYW5uZWxzLmNvbmZpZ3xjb25maWd9XG4gKi9cbmNvbnN0IFNFVF9USU1FT1VUID0gU3ltYm9sKFwiU0VUX1RJTUVPVVRcIik7XG5cbmNvbnN0IG9wdGlvbnMgPSB7XG4gIGJhdGNoU2l6ZTogMTAyNCxcbiAgZGlzcGF0Y2hNZXRob2Q6IFNFVF9JTU1FRElBVEVcbn07XG5cbmxldCBkaXNwYXRjaGVyID0gY3JlYXRlRGlzcGF0Y2hlcigpO1xubGV0IHJ1bm5pbmcgPSBmYWxzZTtcbmxldCBxdWV1ZWQgPSB0cnVlO1xuXG4vKipcbiAqIENyZWF0ZXMgYW5kIHJldHVybnMgYSBmdW5jdGlvbiB0aGF0IGNhbiBiZSB1c2VkIHRvIGRpc3BhdGNoIHRhc2tzLiBUaGVcbiAqIGZ1bmN0aW9uIHRoYXQgaXMgY3JlYXRlZCBkZXBlbmRzIG9uIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgYGRpc3BhdGNoTWV0aG9kYFxuICogdGhhdCBjYW4gYmUgc2V0IHdpdGggYHtAbGluayBtb2R1bGU6Y2hhbmtvL2NoYW5uZWxzLmNvbmZpZ3xjb25maWd9YC5cbiAqXG4gKiBAcmV0dXJuIEEgZGlzcGF0Y2hlciBmdW5jdGlvbiB1c2luZyB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGRpc3BhdGNoIG1ldGhvZC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZURpc3BhdGNoZXIoKSB7XG4gIHN3aXRjaCAoY2FsY0Rpc3BhdGNoTWV0aG9kKCkpIHtcbiAgICAvLyBXZSBwcmVmZXIgYHNldEltbWVkaWF0ZWAgaWYgaXQncyBhdmFpbGFibGUsIGJ1dCBpdCdzIG9ubHkgYXZhaWxhYmxlIGluXG4gICAgLy8gTm9kZSBhbmQgc29tZSBvbGQgYnJvd3NlcnMuXG4gICAgY2FzZSBTRVRfSU1NRURJQVRFOlxuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgaWYgKCEocXVldWVkICYmIHJ1bm5pbmcpKSB7XG4gICAgICAgICAgcXVldWVkID0gdHJ1ZTtcbiAgICAgICAgICBzZXRJbW1lZGlhdGUocHJvY2Vzc1Rhc2tzKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgIC8vIE1vc3QgbW9kZXJuIGJyb3dzZXJzIGltcGxlbWVudCBgTWVzc2FnZUNoYW5uZWxgLiBUaGlzIGlzIHRoZSBwcmVmZXJyZWRcbiAgICAvLyBtZXRob2QgaW4gYnJvd3NlciBlbnZpcm9ubWVudHMgd2hlcmUgYHNldEltbWVkaWF0ZWAgaXNuJ3QgYXZhaWxhYmxlLlxuICAgIGNhc2UgTUVTU0FHRV9DSEFOTkVMOiB7XG4gICAgICBjb25zdCBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9ICgpID0+IHByb2Nlc3NUYXNrcygpO1xuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgaWYgKCEocXVldWVkICYmIHJ1bm5pbmcpKSB7XG4gICAgICAgICAgcXVldWVkID0gdHJ1ZTtcbiAgICAgICAgICBjaGFubmVsLnBvcnQyLnBvc3RNZXNzYWdlKDApO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIElmIGFsbCBlbHNlIGZhaWxzLCBqdXN0IHVzZSBgc2V0VGltZW91dGAuIEl0J3MgYSBsaXR0bGUgc2xvd2VyIHRoYW4gdGhlXG4gICAgLy8gb3RoZXIgbWV0aG9kcywgYnV0IGl0J3MgYXZhaWxhYmxlIGV2ZXJ5d2hlcmUuXG4gICAgY2FzZSBTRVRfVElNRU9VVDpcbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGlmICghKHF1ZXVlZCAmJiBydW5uaW5nKSkge1xuICAgICAgICAgIHF1ZXVlZCA9IHRydWU7XG4gICAgICAgICAgc2V0VGltZW91dChwcm9jZXNzVGFza3MsIDApO1xuICAgICAgICB9XG4gICAgICB9O1xuICB9XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgYWN0dWFsIGRpc3BhdGNoIG1ldGhvZCBiYXNlZCBvbiB0aGUgY3VycmVudCBkaXNwYXRjaCBtZXRob2RcbiAqIHNldHRpbmcgYW5kIGVudmlyb25tZW50YWwgYXZhaWxhYmlsaXR5LlxuICpcbiAqIFRoZSBkaXNwYXRjaCBtZXRob2QgaXMgc3RvcmVkIHJhdywgc28gdGhpcyBmdW5jdGlvbiBpcyBuZWNlc3NhcnkgdG8gdGFrZVxuICogZW52aXJvbm1lbnQgaW50byBhY2NvdW50LiBGb3IgZXhhbXBsZSwgaWYgd2UncmUgcnVubmluZyBpbiBhIG1vZGVybiBicm93c2VyXG4gKiAod2hpY2ggZG9lcyBub3QgaGF2ZSBgc2V0SW1tZWRpYXRlYCksXG4gKiBge0BsaW5rIG1vZHVsZTpjaGFua28vY2hhbm5lbHMuU0VUX0lNTUVESUFURXxTRVRfSU1NRURJQVRFfWAgY2FuIHN0aWxsIGJlXG4gKiByZWNvcmRlZCBhcyB0aGUgZGlzcGF0Y2ggbWV0aG9kLCBidXQgdGhpcyBmdW5jdGlvbiB3aWxsIHJldHVyblxuICogYHtAbGluayBtb2R1bGU6Y2hhbmtvL2NoYW5uZWxzLk1FU1NBR0VfQ0hBTk5FTHxNRVNTQUdFX0NIQU5ORUx9YC5cbiAqXG4gKiBAcmV0dXJuIHtTeW1ib2x9IFRoZSBkaXNwYXRjaCBtZXRob2QgdG8gdXNlIGJhc2VkIG9uIHNldHRpbmcgYW5kIGVudmlyb25tZW50LlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY2FsY0Rpc3BhdGNoTWV0aG9kKCkge1xuICBzd2l0Y2ggKG9wdGlvbnMuZGlzcGF0Y2hNZXRob2QpIHtcbiAgICBjYXNlIE1FU1NBR0VfQ0hBTk5FTDpcbiAgICAgIGlmICh0eXBlb2YgTWVzc2FnZUNoYW5uZWwgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgcmV0dXJuIE1FU1NBR0VfQ0hBTk5FTDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBTRVRfVElNRU9VVDtcblxuICAgIGNhc2UgU0VUX1RJTUVPVVQ6XG4gICAgICByZXR1cm4gU0VUX1RJTUVPVVQ7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgaWYgKHR5cGVvZiBzZXRJbW1lZGlhdGUgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgcmV0dXJuIFNFVF9JTU1FRElBVEU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIE1lc3NhZ2VDaGFubmVsICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIHJldHVybiBNRVNTQUdFX0NIQU5ORUw7XG4gICAgICB9XG4gICAgICByZXR1cm4gU0VUX1RJTUVPVVQ7XG4gIH1cbn1cblxuLyoqXG4gKiBUaGUgaGVhcnQgb2YgdGhlIGRpc3BhdGNoIHByb2Nlc3MsIHRoaXMgaXMgdGhlIGZ1bmN0aW9uIHJ1biBieSB0aGUgZGlzcGF0Y2hcbiAqIGZ1bmN0aW9uIGluIG9yZGVyIHRvIGFjdHVhbGx5IHJ1biBxdWV1ZWQgdGFza3MuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gcHJvY2Vzc1Rhc2tzKCkge1xuICBydW5uaW5nID0gdHJ1ZTtcbiAgcXVldWVkID0gZmFsc2U7XG4gIGxldCBjb3VudCA9IDA7XG5cbiAgZm9yICg7Oykge1xuICAgIGNvbnN0IHRhc2sgPSBkZXF1ZXVlKHF1ZXVlKTtcbiAgICBpZiAodGFzayA9PT0gRU1QVFkpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHRhc2soKTtcblxuICAgIGlmIChjb3VudCA+PSBvcHRpb25zLmJhdGNoU2l6ZSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNvdW50Kys7XG5cbiAgICBydW5uaW5nID0gZmFsc2U7XG4gICAgaWYgKHFDb3VudChxdWV1ZSkpIHtcbiAgICAgIGRpc3BhdGNoZXIoKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuZCBhc3NpZ25zIHRoZSBnbG9iYWwgZGlzcGF0Y2ggZnVuY3Rpb24gYmFzZWQgb24gZGlzcGF0Y2ggbWV0aG9kXG4gKiBzZXR0aW5nIGFuZCBlbnZpcm9ubWVudGFsIGF2YWlsYWJpbGl0eS5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBzZXREaXNwYXRjaGVyKCkge1xuICBkaXNwYXRjaGVyID0gY3JlYXRlRGlzcGF0Y2hlcigpO1xufVxuXG4vKipcbiAqIFRoZSBjb25maWd1cmF0aW9uIG9mIHRoZSBDaGFua28gZGlzcGF0Y2hlci4gQW4gb2JqZWN0IGxpa2UgdGhpcyBpcyByZXR1cm5lZFxuICogZnJvbSB0aGUge0BsaW5rIG1vZHVsZTpjaGFua28vY2hhbm5lbHMuY29uZmlnfSBmdW5jdGlvbiwgYW5kIGl0IG1heSBhbHNvIGJlXG4gKiBwYXNzZWQgdG8gdGhlIHNhbWUgZnVuY3Rpb24gKHRob3VnaCBlYWNoIHByb3BlcnR5IGlzIG9wdGlvbmFsIGluIHRoYXQgY2FzZSkuXG4gKlxuICogQHR5cGVkZWYge29iamVjdH0gRGlzcGF0Y2hlckNvbmZpZ1xuICogQG1lbWJlcm9mIG1vZHVsZTpjaGFua28vY2hhbm5lbHNcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBiYXRjaFNpemUgVGhlIG1heGltdW0gbnVtYmVyIG9mIHRhc2tzIHRoYXQgdGhlIGRpc3BhdGNoZXJcbiAqICAgICB3aWxsIHJ1biBpbiBhIHNpbmdsZSBiYXRjaC5cbiAqIEBwcm9wZXJ0eSB7U3ltYm9sfSBkaXNwYXRjaE1ldGhvZCBUaGUgbWV0aG9kIHVzZWQgdG8gZGlzcGF0Y2ggYSBwcm9jZXNzIGludG9cbiAqICAgICBhIHNlcGFyYXRlIGxpbmUgb2YgZXhlY3V0aW9uLlxuICovXG5cbi8qKlxuICogU2V0cyBvbmUgb3IgbW9yZSBvZiB0aGUgZGlzcGF0Y2hlciBjb25maWd1cmF0aW9uIG9wdGlvbnMuXG4gKlxuICogVGhpcyBpcyBhZHZhbmNlZCBzZXR0aW5nIGZvciB0aGUgZGlzcGF0Y2hlciB0aGF0IGlzIHJlc3BvbnNpYmxlIGZvciBxdWV1ZWluZ1xuICogdXAgY2hhbm5lbCBvcGVyYXRpb25zIGFuZCBwcm9jZXNzZXMuIEl0IGlzIGxpa2VseSB0aGF0IHRoaXMgZnVuY3Rpb24gd2lsbFxuICogbmV2ZXIgbmVlZCB0byBiZSBjYWxsZWQgaW4gbm9ybWFsIG9wZXJhdGlvbi5cbiAqXG4gKiBJZiBhbnkgcmVjb2duaXplZCBvcHRpb25zIGFyZSBzcGVjaWZpZWQgaW4gdGhlIG9wdGlvbnMgb2JqZWN0IHBhc3NlZCB0b1xuICogYGNvbmZpZ2AsIHRoZW4gdGhlIG9wdGlvbiBpcyBzZXQgdG8gdGhlIHZhbHVlIHNlbnQgaW4uIFByb3BlcnRpZXMgdGhhdCBhcmVuJ3RcbiAqIGFueSBvZiB0aGVzZSBvcHRpb25zIGFyZSBpZ25vcmVkLCBhbmQgYW55IG9mIHRoZXNlIG9wdGlvbnMgdGhhdCBkbyBub3QgYXBwZWFyXG4gKiBpbiB0aGUgcGFzc2VkIG9iamVjdCBhcmUgbGVmdCB3aXRoIHRoZWlyIGN1cnJlbnQgdmFsdWVzLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y2hhbmtvL2NoYW5uZWxzXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0cyBBIG1hcHBpbmcgb2Ygb3B0aW9ucyB0byB0aGVpciBuZXcgdmFsdWVzLiBFeHRyYSB2YWx1ZXNcbiAqICAgICAocHJvcGVydGllcyB0aGF0IGFyZSBub3Qgb3B0aW9ucykgYXJlIGlnbm9yZWQuXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdHMuYmF0Y2hTaXplXSBUaGUgbWF4aW11bSBudW1iZXIgb2YgdGFza3MgdGhhdCB0aGVcbiAqICAgICBkaXNwYXRjaGVyIHdpbGwgcnVuIGluIGEgc2luZ2xlIGJhdGNoIChpbml0aWFsbHksIHRoaXMgaXMgMTAyNCkuIElmIHRoZVxuICogICAgIG51bWJlciBvZiBwZW5kaW5nIHRhc2tzIGV4Y2VlZHMgdGhpcywgdGhlIHJlbWFpbmluZyBhcmUgbm90IGRpc2NhcmRlZC5cbiAqICAgICBUaGV5J3JlIHNpbXBseSBydW4gYXMgcGFydCBvZiBhbm90aGVyIGJhdGNoIGFmdGVyIHRoZSBjdXJyZW50IGJhdGNoXG4gKiAgICAgY29tcGxldGVzLlxuICogQHBhcmFtIHtTeW1ib2x9IFtvcHRzLmRpc3BhdGNoTWV0aG9kXSBUaGUgbWV0aG9kIHVzZWQgdG8gZGlzcGF0Y2ggYSBwcm9jZXNzXG4gKiAgICAgaW50byBhIHNlcGFyYXRlIGxpbmUgb2YgZXhlY3V0aW9uLiBQb3NzaWJsZSB2YWx1ZXMgYXJlXG4gKiAgICAgYHtAbGluayBtb2R1bGU6Y2hhbmtvL2NoYW5uZWxzLlNFVF9JTU1FRElBVEV8U0VUX0lNTUVESUFURX1gLFxuICogICAgIGB7QGxpbmsgbW9kdWxlOmNoYW5rby9jaGFubmVscy5NRVNTQUdFX0NIQU5ORUx8TUVTU0FHRV9DSEFOTkVMfWAsIG9yXG4gKiAgICAgYHtAbGluayBtb2R1bGU6Y2hhbmtvL2NoYW5uZWxzLlNFVF9USU1FT1VUfFNFVF9USU1FT1VUfWAsIHdpdGggdGhlXG4gKiAgICAgaW5pdGlhbCBiZWluZ1xuICogICAgIGB7QGxpbmsgbW9kdWxlOmNoYW5rby9jaGFubmVscy5TRVRfSU1NRURJQVRFfFNFVF9JTU1FRElBVEV9YC4gSWYgYSBtZXRob2RcbiAqICAgICBpcyBzZXQgYnV0IGlzIG5vdCBhdmFpbGFibGUgaW4gdGhhdCBlbnZpcm9ubWVudCwgdGhlbiBpdCB3aWxsIHNpbGVudGx5XG4gKiAgICAgZmFsbCBiYWNrIHRvIHRoZSBuZXh0IG1ldGhvZCB0aGF0IGlzIGF2YWlsYWJsZS5cbiAqIEByZXR1cm4ge21vZHVsZTpjaGFua28vY2hhbm5lbHMuRGlzcGF0Y2hlckNvbmZpZ30gVGhlIGNvbmZpZ3VyYXRpb25cbiAqICAgICBzZXR0aW5ncyBmb3IgdGhlIGRpc3BhdGNoZXIgYWZ0ZXIgYW55IG5ldyB2YWx1ZXMgaGF2ZSBiZWVuIHNldC5cbiAqL1xuZnVuY3Rpb24gY29uZmlnKG9wdHMgPSB7fSkge1xuICBmb3IgKGNvbnN0IGtleSBpbiBvcHRpb25zKSB7XG4gICAgaWYgKGtleSBpbiBvcHRzKSB7XG4gICAgICBvcHRpb25zW2tleV0gPSBvcHRzW2tleV07XG5cbiAgICAgIGlmIChrZXkgPT09IFwiZGlzcGF0Y2hNZXRob2RcIikge1xuICAgICAgICBzZXREaXNwYXRjaGVyKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zKTtcbn1cblxuLyoqXG4gKiBRdWV1ZXMgYSB0YXNrIHRvIGJlIHJ1biBhbmQgc3RhcnRzIHRoZSBkaXNwYXRjaCBwcm9jZXNzLlxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IHRhc2sgQSB0YXNrIHRvIGJlIHF1ZXVlZCBhbmQgcnVuIHRoZSBuZXh0IHRpbWUgYSBiYXRjaCBvZlxuICogICAgIHRhc2tzIGlzIHJ1bi5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGRpc3BhdGNoKHRhc2spIHtcbiAgZW5xdWV1ZShxdWV1ZSwgdGFzayk7XG4gIGRpc3BhdGNoZXIoKTtcbn1cblxuZXhwb3J0IHsgU0VUX0lNTUVESUFURSwgTUVTU0FHRV9DSEFOTkVMLCBTRVRfVElNRU9VVCwgY29uZmlnLCBkaXNwYXRjaCB9O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG5cbi8qKlxuICogUHJvdmlkZXMgc21hbGwgdXRpbGl0eSBmdW5jdGlvbnMgdG8gbWFrZSBpdCBlYXNpZXIgdG8gaW50ZXJhY3Qgd2l0aCBhc3luY1xuICogZnVuY3Rpb25zIGFzIHByb2Nlc3Nlcy5cbiAqXG4gKiBAbW9kdWxlIGNoYW5rby9wcm9jZXNzXG4gKiBAcHJpdmF0ZVxuICovXG5cbmltcG9ydCB7IHRpbWVkQ2hhbiwgcmVjdkFzeW5jIH0gZnJvbSBcIm1vZHVsZXMvY2hhbm5lbFwiO1xuXG4vKipcbiAqIEJsb2NrcyB0aGUgcHJvY2VzcyBmb3IgdGhlIHNwZWNpZmllZCB0aW1lIChpbiBtaWxsaXNlY29uZHMpIGFuZCB0aGVuIHVuYmxvY2tzXG4gKiBpdC5cbiAqXG4gKiBUaGlzIGltcGxlbWVudHMgYSBkZWxheSwgYnV0IG9uZSB0aGF0J3Mgc3VwZXJpb3IgdG8gb3RoZXIga2luZHMgb2YgZGVsYXlzXG4gKiAoYHNldFRpbWVvdXRgLCBldGMuKSBiZWNhdXNlIGl0IGJsb2NrcyB0aGUgcHJvY2VzcyBhbmQgYWxsb3dzIHRoZSBkaXNwYXRjaGVyXG4gKiB0byBhbGxvdyBvdGhlciBwcm9jZXNzZXMgdG8gcnVuIHdoaWxlIHRoaXMgb25lIHdhaXRzLiBUaGUgZGVmYXVsdCBkZWxheSBpcyAwLFxuICogd2hpY2ggd2lsbCByZWxlYXNlIHRoZSBwcm9jZXNzIHRvIGFsbG93IG90aGVycyB0byBydW4gYW5kIHRoZW4gaW1tZWRpYXRlbHlcbiAqIHJlLXF1ZXVlIGl0LlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gKm11c3QqIGJlIGNhbGxlZCBmcm9tIHdpdGhpbiBhbiBgYXN5bmNgIGZ1bmN0aW9uIGFuZCBhcyBwYXJ0IG9mXG4gKiBhbiBgYXdhaXRgIGV4cHJlc3Npb24uXG4gKlxuICogV2hlbiB0aGlzIGZ1bmN0aW9uIGNvbXBsZXRlcyBhbmQgaXRzIHByb2Nlc3MgdW5ibG9ja3MsIHRoZSBgYXdhaXRgIGV4cHJlc3Npb25cbiAqIGRvZXNuJ3QgdGFrZSBvbiBhbnkgbWVhbmluZ2Z1bCB2YWx1ZS4gVGhlIHB1cnBvc2Ugb2YgdGhpcyBmdW5jdGlvbiBpcyBzaW1wbHlcbiAqIHRvIGRlbGF5LCBub3QgdG8gY29tbXVuaWNhdGUgYW55IGRhdGEuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjaGFua28vY2hhbm5lbHNcbiAqIEBwYXJhbSB7bnVtYmVyfSBbZGVsYXk9MF0gdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdGhhdCB0aGUgcHJvY2VzcyB3aWxsXG4gKiAgICAgYmxvY2sgZm9yLiBBdCB0aGUgZW5kIG9mIHRoYXQgdGltZSwgdGhlIHByb2Nlc3MgaXMgYWdhaW4gZWxpZ2libGUgdG8gYmVcbiAqICAgICBydW4gYnkgdGhlIGRpc3BhdGNoZXIuIElmIHRoaXMgaXMgbWlzc2luZyBvciBzZXQgdG8gYDBgLCB0aGUgcHJvY2VzcyB3aWxsXG4gKiAgICAgY2VkZSBleGVjdXRpb24gdG8gdGhlIG5leHQgb25lIGJ1dCBpbW1lZGlhdGVseSByZXF1ZXVlIGl0c2VsZiB0byBiZSBydW5cbiAqICAgICBhZ2Fpbi5cbiAqIEByZXR1cm4ge1Byb21pc2V9IEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggbm8gbWVhbmluZ2Z1bCByZXN1bHQgd2hlbiB0aGVcbiAqICAgICB0aW1lIGhhcyBlbGFwc2VkLlxuICovXG5mdW5jdGlvbiBzbGVlcChkZWxheSA9IDApIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgIGNvbnN0IGNoID0gdGltZWRDaGFuKGRlbGF5KTtcbiAgICByZWN2QXN5bmMoY2gsIHJlc29sdmUpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBJbnZva2VzIGFuIGFzeW5jIGZ1bmN0aW9uIGFjdGluZyBhcyBhIHByb2Nlc3MuXG4gKlxuICogVGhpcyBpcyBwdXJlbHkgYSBjb252ZW5pZW5jZSBmdW5jdGlvbiwgZHJpdmVuIGJ5IHRoZSBmYWN0IHRoYXQgaXQncyBuZWNlc3NhcnlcbiAqIHRvIHVzZSBhbiBJSUZFIHRvIGludm9rZSBhbiBhbm9ueW1vdXMgYXN5bmMgZnVuY3Rpb24sIGFuZCB0aGF0J3Mgbm90IHZlcnlcbiAqIGFlc3RoZXRpY2FsbHkgcGxlYXNpbmcuIEl0IGRvZXMgbm8gbW9yZSB0aGFuIGludm9rZSB0aGUgcGFzc2VkIGZ1bmN0aW9uLCBidXRcbiAqIHRoYXQgYXQgbGVhc3QgcmVsZWFzZXMgdXMgZnJvbSB0aGUgbmVlZCB0byBwdXQgdGhlIGVtcHR5IHBhcmVudGhlc2VzIGFmdGVyXG4gKiB0aGUgZnVuY3Rpb24gZGVmaW5pdGlvbi5cbiAqXG4gKiBBIG5hbWVkIGFzeW5jIGZ1bmN0aW9uIGNhbiBzaW1wbHkgYmUgaW52b2tlZCAod2l0aG91dCBiZWluZyBhbiBJSUZFKSBhbmRcbiAqIGRvZXNuJ3QgYmVuZWZpdCBmcm9tIHRoaXMgY29udmVuaWVuY2UuXG4gKlxuICogQW5vbnltb3VzIHByb2Nlc3Mgd2l0aG91dCBgZ29gOlxuICogYGBgXG4gKiAoYXN5bmMgKCkgPT4ge1xuICogICAuLi4gZG8gc29tZSBwcm9jZXNzIHN0dWZmIGhlcmUgLi4uXG4gKiB9KSgpO1xuICogYGBgXG4gKiBBbm9ueW1vdXMgcHJvY2VzcyB3aXRoIGBnb2A6XG4gKiBgYGBcbiAqIGdvKGFzeW5jICgpID0+IHtcbiAqICAgLi4uIGRvIHNvbWUgcHJvY2VzcyBzdHVmZiBoZXJlIC4uLlxuICogfSk7XG4gKiBgYGBcbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNoYW5rby9jaGFubmVsc1xuICogQHBhcmFtIHtmdW5jdGlvbn0gZm4gVGhlIGFzeW5jIGZ1bmN0aW9uIGJlaW5nIHVzZWQgYXMgYSBwcm9jZXNzLlxuICogQHBhcmFtIHsuLi4qfSBhcmdzIEFyZ3VtZW50cyB0aGF0IGFyZSBzZW50IHRvIHRoZSBhc3luYyBmdW5jdGlvbiB3aGVuIGl0J3NcbiAqICAgICBpbnZva2VkLlxuICogQHJldHVybiB7UHJvbWlzZX0gVGhlIHByb21pc2UgcmV0dXJuZWQgYnkgdGhlIGFzeW5jIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBnbyhmbiwgLi4uYXJncykge1xuICByZXR1cm4gZm4oLi4uYXJncyk7XG59XG5cbi8qKlxuICogSm9pbnMgYWxsIG9mIHRoZSBwcm92aWRlZCBwcm9jZXNzZXMgaW50byBhIHNpbmdsZSBwcm9jZXNzLCByZXR1cm5pbmcgYVxuICogcHJvbWlzZSB0aGF0IHdyYXBzIGFsbCBvZiB0aGUgaW5kaXZpZHVhbCBwcm9jZXNzZXMnIHByb21pc2VzLiBQdXR0aW5nIHRoaXMgaW5cbiAqIGFuIGBhd2FpdGAgc3RhdGVtZW50IHdpbGwgYmxvY2sgdW50aWwgYWxsIG9mIHRoZSBwcm9jZXNzZXMgY29tcGxldGUuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjaGFua28vY2hhbm5lbHNcbiAqIEBwYXJhbSB7Li4uZnVuY3Rpb259IGZucyBBbnkgbnVtYmVyIG9mIGFzeW5jIGZ1bmN0aW9ucyB3aG9zZSByZXNvbHV0aW9ucyBhcmVcbiAqICAgICBiZWluZyB3YWl0ZWQgZm9yLlxuICogQHJldHVybiB7UHJvbWlzZX0gQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBhbGwgb2YgdGhlIHByb2Nlc3NlcyBwcm9taXNlc1xuICogICAgIHJlc29sdmUuXG4gKi9cbmZ1bmN0aW9uIGpvaW4oLi4uZm5zKSB7XG4gIHJldHVybiBQcm9taXNlLmFsbChmbnMpO1xufVxuXG5leHBvcnQgeyBzbGVlcCwgZ28sIGpvaW4gfTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG4vKipcbiAqIFByb3RvY29scyBmb3IgaXRlcmF0aW9uIGFuZCByZWR1Y3Rpb24uXG4gKlxuICogVGhlIG5hbWVzIGZvciB0aGVzZSBwcm90b2NvbHMgY2FtZSBmcm9tIGEgZGlzY3Vzc2lvbiB0aHJlYWRcbiAqICh7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2NvZ25pdGVjdC1sYWJzL3RyYW5zZHVjZXJzLWpzL2lzc3Vlcy8yMH0pIGZyb20gYVxuICogdGltZSB3aGVuIHRyYW5zZHVjZXJzIHdlcmUgdmVyeSBtdWNoIGluIHRoZSBmb3JlZnJvbnQuIEl0J3MgdGhlIGNsb3Nlc3QgdGhpbmdcbiAqIHRoZXJlIGlzIHRvIGEgc3RhbmRhcmQsIHNvIGl0IHdhcyBhZG9wdGVkIGhlcmUuXG4gKlxuICogVGhlc2UgYXJlIHRoZSBzYW1lIHN5bWJvbHMgYXMgYXZhaWxhYmxlIGluIG15IHRyYW5zZHVjZXIgbGlicmFyeS4gVGhleSBhcmVcbiAqIHB1YmxpY2x5IGF2YWlsYWJsZSBmcm9tIHRoZXJlLlxuICpcbiAqIEBtb2R1bGUgY2hhbmtvL3Byb3RvY29sXG4gKiBAcHJpdmF0ZVxuICovXG5cbi8qKlxuICogVGhlIG1hcHBpbmcgb2YgcHJvdG9jb2wgbmFtZXMgdG8gdGhlaXIgcmVzcGVjdGl2ZSBwcm9wZXJ0eSBrZXkgbmFtZXMuIFRoZVxuICogdmFsdWVzIG9mIHRoaXMgbWFwIHdpbGwgZGVwZW5kIG9uIHdoZXRoZXIgc3ltYm9scyBhcmUgYXZhaWxhYmxlLlxuICpcbiAqIEB0eXBlZGVmIHtvYmplY3R9IHByb3RvY29sTWFwXG4gKiBAcHJvcGVydHkge1N5bWJvbH0gaW5pdCBUaGUgYHRyYW5zZHVjZXIvaW5pdGAgcHJvdG9jb2wuIFRoaXMgaXMgdXNlZFxuICogICAgIHRvIG1hcmsgZnVuY3Rpb25zIHRoYXQgaW5pdGlhbGl6ZSBhIHRhcmdldCBjb2xsZWN0aW9uIGJlZm9yZSBhZGRpbmcgaXRlbXNcbiAqICAgICB0byBpdC5cbiAqIEBwcm9wZXJ0eSB7U3ltYm9sfSBzdGVwIFRoZSBgdHJhbnNkdWNlci9zdGVwYCBwcm90b2NvbC4gVGhpcyBpcyB1c2VkXG4gKiAgICAgdG8gbWFyayBmdW5jdGlvbnMgdGhhdCBhcmUgdXNlZCBpbiB0aGUgdHJhbnNkdWNlcidzIHN0ZXAgcHJvY2Vzcywgd2hlcmVcbiAqICAgICBvYmplY3RzIGFyZSBhZGRlZCB0byB0aGUgdGFyZ2V0IGNvbGxlY3Rpb24gb25lIGF0IGEgdGltZS5cbiAqIEBwcm9wZXJ0eSB7U3ltYm9sfSByZXN1bHQgVGhlIGB0cmFuc2R1Y2VyL3Jlc3VsdGAgcHJvdG9jb2wuIFRoaXMgaXNcbiAqICAgICB1c2VkIHRvIG1hcmsgZnVuY3Rpb25zIHRoYXQgdGFrZSB0aGUgZmluYWwgcmVzdWx0IG9mIHRoZSBzdGVwIHByb2Nlc3MgYW5kXG4gKiAgICAgcmV0dXJuIHRoZSBmaW5hbCBmb3JtIHRvIGJlIG91dHB1dC4gVGhpcyBpcyBvcHRpb25hbDsgaWYgdGhlIHRyYW5zZHVjZXJcbiAqICAgICBkb2VzIG5vdCB3YW50IHRvIHRyYW5zZm9ybSB0aGUgZmluYWwgcmVzdWx0LCBpdCBzaG91bGQganVzdCByZXR1cm4gdGhlXG4gKiAgICAgcmVzdWx0IG9mIGl0cyBjaGFpbmVkIHRyYW5zZHVjZXIncyBgcmVzdWx0YCBmdW5jdGlvbi5cbiAqIEBwcm9wZXJ0eSB7U3ltYm9sfSByZWR1Y2VkIFRoZSBgdHJhbnNkdWNlci9yZWR1Y2VkYCBwcm90b2NvbC4gVGhlXG4gKiAgICAgcHJlc2VuY2Ugb2YgdGhpcyBrZXkgb24gYW4gb2JqZWN0IGluZGljYXRlcyB0aGF0IGl0cyB0cmFuc2Zvcm1hdGlvbiBoYXNcbiAqICAgICBiZWVuIGNvbXBsZXRlZC4gSXQgaXMgdXNlZCBpbnRlcm5hbGx5IHRvIG1hcmsgY29sbGVjdGlvbnMgd2hvc2VcbiAqICAgICB0cmFuc2Zvcm1hdGlvbnMgY29uY2x1ZGUgYmVmb3JlIGV2ZXJ5IG9iamVjdCBpcyBpdGVyYXRlZCBvdmVyIChhcyBpblxuICogICAgIGB7QGxpbmsgeGR1Y2UudGFrZX1gIHRyYW5zZHVjZXJzLikgSXQgaXMgb2YgbGl0dGxlIHVzZSBiZXlvbmQgdHJhbnNkdWNlclxuICogICAgIGF1dGhvcmluZy5cbiAqIEBwcm9wZXJ0eSB7U3ltYm9sfSB2YWx1ZSBUaGUgYHRyYW5zZHVjZXIvdmFsdWVgIHByb3RvY29sLiBUaGlzIGlzXG4gKiAgICAgdXNlZCBpbnRlcm5hbGx5IHRvIG1hcmsgcHJvcGVydGllcyB0aGF0IGNvbnRhaW4gdGhlIHZhbHVlIG9mIGEgcmVkdWNlZFxuICogICAgIHRyYW5zZm9ybWF0aW9uLiBJdCBpcyBvZiBsaXR0bGUgdXNlIGJleW9uZCB0cmFuc2R1Y2VyIGF1dGhvcmluZy5cbiAqL1xuXG4vKipcbiAqIFRoZSBtYXBwaW5nIG9mIHByb3RvY29sIG5hbWVzIHRvIHRoZWlyIHJlc3BlY3RpdmUgcHJvcGVydHkga2V5IG5hbWVzLlxuICpcbiAqIEB0eXBlIHttb2R1bGU6Y2hhbmtvL3Byb3RvY29sfnByb3RvY29sTWFwfVxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgcHJvdG9jb2xzID0gT2JqZWN0LmNyZWF0ZShudWxsLCB7XG4gIGluaXQ6IHtcbiAgICB2YWx1ZTogU3ltYm9sLmZvcihcInRyYW5zZHVjZXIvaW5pdFwiKVxuICB9LFxuICBzdGVwOiB7XG4gICAgdmFsdWU6IFN5bWJvbC5mb3IoXCJ0cmFuc2R1Y2VyL3N0ZXBcIilcbiAgfSxcbiAgcmVzdWx0OiB7XG4gICAgdmFsdWU6IFN5bWJvbC5mb3IoXCJ0cmFuc2R1Y2VyL3Jlc3VsdFwiKVxuICB9LFxuICByZWR1Y2VkOiB7XG4gICAgdmFsdWU6IFN5bWJvbC5mb3IoXCJ0cmFuc2R1Y2VyL3JlZHVjZWRcIilcbiAgfSxcbiAgdmFsdWU6IHtcbiAgICB2YWx1ZTogU3ltYm9sLmZvcihcInRyYW5zZHVjZXIvdmFsdWVcIilcbiAgfVxufSk7XG5cbmV4cG9ydCB7IHByb3RvY29scyB9O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG5cbi8qKlxuICogUHJvdmlkZXMgYW4gZWZmaWNpZW50IGdlbmVyYWwtcHVycG9zZSBxdWV1ZS5cbiAqXG4gKiBAbW9kdWxlIGNoYW5rby9xdWV1ZVxuICogQHByaXZhdGVcbiAqL1xuXG4vKipcbiAqIEEgZ2VuZXJhbCBwdXJwb3NlLCBoaWdobHkgZWZmaWNpZW50IEphdmFTY3JpcHQgcXVldWUuIEl0IGlzIGJhY2tlZCBieSBhXG4gKiBKYXZhU2NyaXB0IGFycmF5LCBidXQgaXQgZG9lcyBub3QgdXNlIGB1bnNoaWZ0YCB0byB0YWtlIGVsZW1lbnRzIG9mZiB0aGVcbiAqIGFycmF5IGJlY2F1c2UgdW5zaGlmdCBjYXVzZXMgZWxlbWVudHMgdG8gYmUgY29waWVkIGV2ZXJ5IHRpbWUgaXQncyB1c2VkLlxuICogSW5zdGVhZCwgYSBwb2ludGVyIGlzIG1haW50YWluZWQgdGhhdCBrZWVwcyB0cmFjayBvZiB0aGUgbG9jYXRpb24gb2YgdGhlIG5leHRcbiAqIGVsZW1lbnQgdG8gYmUgZGVxdWV1ZWQsIGFuZCB3aGVuIHRoYXQgZGVxdWV1ZSBoYXBwZW5zLCB0aGUgcG9pbnRlciBzaW1wbHlcbiAqIG1vdmVzLiBXaGVuIHRoZSBlbXB0eSBzcGFjZSBhdCB0aGUgaGVhZCBvZiB0aGUgYXJyYXkgZ2V0cyBsYXJnZSBlbm91Z2gsIGl0J3NcbiAqIHJlbW92ZWQgYnkgYSBzaW5nbGUgc2xpY2Ugb3BlcmF0aW9uLlxuICpcbiAqIFB1dHRpbmcgZWxlbWVudHMgaW50byB0aGUgcXVldWUgaXMganVzdCBkb25lIHdpdGggYSBiYXNpYyBgcHVzaGAsIHdoaWNoICppcypcbiAqIGhpZ2hseSBlZmZpY2llbnQuXG4gKlxuICogVGhpcyB0eXBlIG9mIHF1ZXVlIGlzIHBvc3NpYmxlIGluIEphdmFTY3JpcHQgYmVjYXVzZSBKUyBhcnJheXMgYXJlIHJlc2l6YWJsZS5cbiAqIEluIGxhbmd1YWdlcyB3aXRoIGZpeGVkLXNpemUgYXJyYXlzLCBhIHJlc2l6aW5nIG9wZXJhdGlvbiB3b3VsZCBoYXZlIHRvIGJlXG4gKiBydW4gZWFjaCB0aW1lIHRoZSBxdWV1ZSBmaWxscy5cbiAqXG4gKiBAbmFtZXNwYWNlIFF1ZXVlXG4gKiBAcHJpdmF0ZVxuICovXG5cbi8qKlxuICogVGhlIHZhbHVlIHJldHVybmVkIHdoZW4gYSBxdWV1ZSBpcyByZWFkIHdoZW4gaXQncyBlbXB0eS5cbiAqXG4gKiBUaGlzIHNwZWNpYWwgdmFsdWUgaXMgdXNlZCBiZWNhdXNlIGBudWxsYCBhbmQgYHVuZGVmaW5lZGAgYXJlIHBvc3NpYmxlXG4gKiBsZWdpdGltYXRlIHZhbHVlcyB0aGF0IGNhbiBiZSBzdG9yZWQgaW4gYSBxdWV1ZS4gQW5vdGhlciBvcHRpb24gaXMgdG8gdXNlXG4gKiBzb21lIGtpbmQgb2YgYE1heWJlYCBvciBgT3B0aW9uYCB0eXBlLCBidXQgdGhhdCByZXF1aXJlcyBtb3JlIGVmZm9ydCBvbiB0aGVcbiAqIHBhcnQgb2YgdGhlIGVuZCB1c2VyIHRvIGludGVyZmFjZSB3aXRoLlxuICpcbiAqIEB0eXBlIHtTeW1ib2x9XG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNoYW5rby9jaGFubmVsc1xuICovXG5jb25zdCBFTVBUWSA9IFN5bWJvbChcIkVNUFRZXCIpO1xuXG4vKipcbiAqIEEgbWFya2VyIHByb3BlcnR5IG5hbWUgdG8gaW5kaWNhdGUgdGhhdCBhbiBvYmplY3QgaXMgaW4gZmFjdCBhIHF1ZXVlLlxuICpcbiAqIEEgcXVldWUgaGFzIGEgcHJvcGVydHkgd2l0aCB0aGlzIG5hbWUgd2hvc2UgcmVhZG9ubHkgdmFsdWUgaXMgc2V0IHRvIGB0cnVlYC5cbiAqIFRoaXMgaXMgbm90IG1lYW50IHRvIGJlIHJlYWQgZXhjZXB0IGJ5IHRoZVxuICogYHtAbGluayBtb2R1bGU6Y2hhbmtvL3F1ZXVlflF1ZXVlLmlzUXVldWV8aXNRdWV1ZX1gIGZ1bmN0aW9uLlxuICpcbiAqIEB0eXBlIHtTeW1ib2x9XG4gKiBAcHJpdmF0ZVxuICovXG5jb25zdCBRVUVVRSA9IFN5bWJvbChcIlFVRVVFXCIpO1xuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhbiBvYmplY3QgaXMgYSBxdWV1ZS5cbiAqXG4gKiBAcGFyYW0geyp9IG9iaiBUaGUgb2JqZWN0IHRvIGJlIHRlc3RlZC5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IEVpdGhlciBgdHJ1ZWAgaWYgdGhlIG9iamVjdCBpcyBhIHF1ZXVlIG9yIGBmYWxzZWAgaWYgaXQgaXNcbiAqIG5vdC5cbiAqL1xuZnVuY3Rpb24gaXNRdWV1ZShvYmopIHtcbiAgcmV0dXJuICEhb2JqPy5bUVVFVUVdO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgcXVldWUuIFRoaXMgcXVldWUgaXMgY3JlYXRlZCBlbXB0eSwgd2l0aCBhIGJhY2tpbmcgYXJyYXkgb2ZcbiAqIGxlbmd0aCAwLlxuICpcbiAqIEByZXR1cm5zIHttb2R1bGU6Y2hhbmtvL3F1ZXVlflF1ZXVlfSBBIG5ldywgZW1wdHkgcXVldWUuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBxdWV1ZSgpIHtcbiAgcmV0dXJuIE9iamVjdC5jcmVhdGUobnVsbCwge1xuICAgIHN0b3JlOiB7XG4gICAgICB2YWx1ZTogW10sXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0sXG5cbiAgICBwb2ludGVyOiB7XG4gICAgICB2YWx1ZTogMCxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSxcblxuICAgIFtRVUVVRV06IHtcbiAgICAgIHZhbHVlOiB0cnVlXG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBudW1iZXIgb2YgZWxlbWVudHMgc3RvcmVkIGluIGEgcXVldWUuIFRoaXMgbWF5IG9yIG1heSBub3QgZXF1YWxcbiAqIHRoZSBsZW5ndGggb2YgdGhlIGJhY2tpbmcgc3RvcmUsIGFzIHRoZXJlIGlzIG9mdGVuIGVtcHR5IHNwYWNlIGF0IHRoZSBoZWFkIG9mXG4gKiB0aGUgYmFja2luZyBzdG9yZS5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTpjaGFua28vcXVldWV+UXVldWV9IHF1ZXVlIFRoZSBxdWV1ZSB3aG9zZSBpdGVtcyBhcmUgYmVpbmdcbiAqICAgICBjb3VudGVkLlxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgbnVtYmVyIG9mIGl0ZW1zIGluIHRoZSBxdWV1ZS5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNvdW50KHF1ZXVlKSB7XG4gIHJldHVybiBxdWV1ZS5zdG9yZS5sZW5ndGggLSBxdWV1ZS5wb2ludGVyO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhIHF1ZXVlIGlzIGVtcHR5LlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOmNoYW5rby9xdWV1ZX5RdWV1ZX0gcXVldWUgVGhlIHF1ZXVlIGJlaW5nIGNoZWNrZWQgZm9yXG4gKiAgICAgZW1wdGluZXNzLlxuICogQHJldHVybiB7Ym9vbGVhbn0gRWl0aGVyIGB0cnVlYCBpZiB0aGUgcXVldWUgaXMgZW1wdHkgb3IgYGZhbHNlYCBpZiBpdCBpc1xuICogICAgIG5vdC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGlzRW1wdHkocXVldWUpIHtcbiAgcmV0dXJuIHF1ZXVlLnN0b3JlLmxlbmd0aCA9PT0gMDtcbn1cblxuLyoqXG4gKiBBZGRzIGFuIGl0ZW0gdG8gYSBxdWV1ZS5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTpjaGFua28vcXVldWV+UXVldWV9IHF1ZXVlIFRoZSBxdWV1ZSB3aGljaCBpcyBoYXZpbmcgYW4gaXRlbVxuICogICAgIGFkZGVkIHRvIGl0LlxuICogQHBhcmFtIHsqfSBpdGVtIFRoZSBpdGVtIGJlaW5nIGFkZGVkIHRvIHRoZSBxdWV1ZS5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGVucXVldWUocXVldWUsIGl0ZW0pIHtcbiAgcXVldWUuc3RvcmUucHVzaChpdGVtKTtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFuIGl0ZW0gZnJvbSBhIHF1ZXVlIGFuZCByZXR1cm5zIHRoYXQgaXRlbS4gSWYgdGhlIHJlbW92YWwgY2F1c2VzIHRoZVxuICogYW1vdW50IG9mIGVtcHR5IHNwYWNlIGF0IHRoZSBoZWFkIG9mIHRoZSBiYWNraW5nIHN0b3JlIHRvIGV4Y2VlZCBhIHRocmVzaG9sZCxcbiAqIHRoYXQgZW1wdHkgc3BhY2UgaXMgcmVtb3ZlZC5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTpjaGFua28vcXVldWV+UXVldWV9IHF1ZXVlIFRoZSBxdWV1ZSB3aG9zZSBvbGRlc3QgaXRlbSBpcyB0byBiZVxuICogciAgICBlbW92ZWQuXG4gKiBAcmV0dXJuIHsqfSBUaGUgb2xkZXN0IHN0b3JlZCBpdGVtIGluIHRoZSBxdWV1ZS5cbiAqL1xuZnVuY3Rpb24gZGVxdWV1ZShxdWV1ZSkge1xuICBpZiAocXVldWUuc3RvcmUubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIEVNUFRZO1xuICB9XG5cbiAgY29uc3QgaXRlbSA9IHF1ZXVlLnN0b3JlW3F1ZXVlLnBvaW50ZXJdO1xuICAvLyBSZW1vdmVzIHRoZSBpdGVtcyBpbiB0aGUgYmFja2luZyBzdG9yZSBiZWZvcmUgdGhlIGN1cnJlbnQgcG9pbnRlciwgaWYgdGhlcmVcbiAgLy8gaXMgZW5vdWdoIFwiZW1wdHlcIiBzcGFjZSBiZWZvcmUgdGhlIHBvaW50ZXIgdG8ganVzdGlmeSBpdCAoaS5lLiwgdGhlIHVudXNlZFxuICAvLyBwb3J0aW9uIGlzIGF0IGxlYXN0IGhhbGYgYXMgbGFyZ2UgYXMgdGhlIHVzZWQgcG9ydGlvbilcbiAgaWYgKCsrcXVldWUucG9pbnRlciAqIDIgPj0gcXVldWUuc3RvcmUubGVuZ3RoKSB7XG4gICAgcXVldWUuc3RvcmUgPSBxdWV1ZS5zdG9yZS5zbGljZShxdWV1ZS5wb2ludGVyKTtcbiAgICBxdWV1ZS5wb2ludGVyID0gMDtcbiAgfVxuICByZXR1cm4gaXRlbTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBuZXh0IGl0ZW0gaW4gYSBxdWV1ZSB3aXRob3V0IHJlbW92aW5nIGl0LlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOmNoYW5rby9xdWV1ZX5RdWV1ZX0gcXVldWUgVGhlIHF1ZXVlIHdob3NlIG9sZGVzdCBpdGVtIGlzIHRvIGJlXG4gKiAgICAgcGVla2VkIGF0LlxuICogQHJldHVybiB7Kn0gVGhlIG9sZGVzdCBpdGVtIHN0b3JlZCBpbiB0aGUgcXVldWUuXG4gKi9cbmZ1bmN0aW9uIHBlZWsocXVldWUpIHtcbiAgcmV0dXJuIHF1ZXVlLnN0b3JlLmxlbmd0aCA9PT0gMCA/IEVNUFRZIDogcXVldWUuc3RvcmVbcXVldWUucG9pbnRlcl07XG59XG5cbi8qKlxuICogRmlsdGVycyBvdXQgYW55IGl0ZW0gaW4gYSBxdWV1ZSB0aGF0IGRvZXMgbm90IGNhdXNlIHRoZSBzdXBwbGllZCBwcmVkaWNhdGVcbiAqIGZ1bmN0aW9uIHRvIHJldHVybiBgdHJ1ZWAgd2hlbiBwYXNzZWQgdGhhdCBpdGVtLiBUaGlzIGlzIG5vdCBleGFjdGx5IGFcbiAqIGdlbmVyYWwgcHVycG9zZSBxdWV1ZSBvcGVyYXRpb24sIGJ1dCB3ZSBuZWVkIGl0IHdpdGggY2hhbm5lbHMgdGhhdCB3aWxsXG4gKiBvY2Nhc2lvbmFsbHkgd2FudCB0byBnZXQgcmlkIG9mIGluYWN0aXZlIGhhbmRsZXJzLlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOmNoYW5rby9xdWV1ZX5RdWV1ZX0gcXVldWUgVGhlIHF1ZXVlIGJlaW5nIGZpbHRlcmVkLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm4gVGhlIHByZWRpY2F0ZSBmdW5jdGlvbiB0aGF0IGRldGVybWluZXMgd2hldGhlciBhblxuICogICAgIGVsZW1lbnQgcmVtYWlucyBpbiB0aGUgcXVldWUuXG4gKi9cbmZ1bmN0aW9uIGZpbHRlcihxdWV1ZSwgcHJlZGljYXRlKSB7XG4gIGZvciAobGV0IGkgPSAwLCBlbmQgPSBjb3VudChxdWV1ZSk7IGkgPCBlbmQ7IGkrKykge1xuICAgIGNvbnN0IGl0ZW0gPSBkZXF1ZXVlKHF1ZXVlKTtcbiAgICBpZiAocHJlZGljYXRlKGl0ZW0pKSB7XG4gICAgICBlbnF1ZXVlKHF1ZXVlLCBpdGVtKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IHtcbiAgRU1QVFksXG4gIHF1ZXVlLFxuICBpc1F1ZXVlLFxuICBjb3VudCxcbiAgaXNFbXB0eSxcbiAgZW5xdWV1ZSxcbiAgZGVxdWV1ZSxcbiAgcGVlayxcbiAgZmlsdGVyXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==