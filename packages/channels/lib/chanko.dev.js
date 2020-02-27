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


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/timers-browserify/main.js */ "../../node_modules/timers-browserify/main.js").setImmediate))

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGFua28vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2NoYW5rby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jaGFua28vL2hvbWUvYmFyYW5kaXMvRGV2ZWxvcG1lbnQvcHJvamVjdHMvY2hhbmtvL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL0FzeW5jR2VuZXJhdG9yLmpzIiwid2VicGFjazovL2NoYW5rby8vaG9tZS9iYXJhbmRpcy9EZXZlbG9wbWVudC9wcm9qZWN0cy9jaGFua28vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvQXdhaXRWYWx1ZS5qcyIsIndlYnBhY2s6Ly9jaGFua28vL2hvbWUvYmFyYW5kaXMvRGV2ZWxvcG1lbnQvcHJvamVjdHMvY2hhbmtvL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2F3YWl0QXN5bmNHZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vY2hhbmtvLy9ob21lL2JhcmFuZGlzL0RldmVsb3BtZW50L3Byb2plY3RzL2NoYW5rby9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy93cmFwQXN5bmNHZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vY2hhbmtvLy9ob21lL2JhcmFuZGlzL0RldmVsb3BtZW50L3Byb2plY3RzL2NoYW5rby9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovL2NoYW5rby8vaG9tZS9iYXJhbmRpcy9EZXZlbG9wbWVudC9wcm9qZWN0cy9jaGFua28vbm9kZV9tb2R1bGVzL3NldGltbWVkaWF0ZS9zZXRJbW1lZGlhdGUuanMiLCJ3ZWJwYWNrOi8vY2hhbmtvLy9ob21lL2JhcmFuZGlzL0RldmVsb3BtZW50L3Byb2plY3RzL2NoYW5rby9ub2RlX21vZHVsZXMvdGltZXJzLWJyb3dzZXJpZnkvbWFpbi5qcyIsIndlYnBhY2s6Ly9jaGFua28vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovL2NoYW5rby8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9jaGFua28vLi9zcmMvbW9kdWxlcy9idWZmZXIuanMiLCJ3ZWJwYWNrOi8vY2hhbmtvLy4vc3JjL21vZHVsZXMvY2hhbm5lbC9oYW5kbGVyLmpzIiwid2VicGFjazovL2NoYW5rby8uL3NyYy9tb2R1bGVzL2NoYW5uZWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2hhbmtvLy4vc3JjL21vZHVsZXMvY2hhbm5lbC9zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vY2hhbmtvLy4vc3JjL21vZHVsZXMvZGlzcGF0Y2hlci5qcyIsIndlYnBhY2s6Ly9jaGFua28vLi9zcmMvbW9kdWxlcy9wcm9jZXNzLmpzIiwid2VicGFjazovL2NoYW5rby8uL3NyYy9tb2R1bGVzL3Byb3RvY29sLmpzIiwid2VicGFjazovL2NoYW5rby8uL3NyYy9tb2R1bGVzL3F1ZXVlLmpzIl0sIm5hbWVzIjpbIkJVRkZFUiIsIlN5bWJvbCIsIkZJWEVEIiwiRFJPUFBJTkciLCJTTElESU5HIiwiaXNCdWZmZXIiLCJvYmoiLCJmaXhlZCIsInNpemUiLCJPYmplY3QiLCJjcmVhdGUiLCJxdWV1ZSIsInZhbHVlIiwicSIsImRyb3BwaW5nIiwic2xpZGluZyIsImJ1ZmZlciIsImNvdW50IiwicUNvdW50IiwiaXNGdWxsIiwiYWRkIiwiaXRlbXMiLCJpdGVtIiwiZW5xdWV1ZSIsImRlcXVldWUiLCJyZW1vdmUiLCJNQVhfRElSVFkiLCJNQVhfUVVFVUVEIiwiQ0xPU0VEIiwiQk9YIiwiaXNCb3giLCJpc1JlZHVjZWQiLCJwIiwicmVkdWNlZCIsImJveCIsIndyaXRhYmxlIiwic2VuZEJveCIsImhhbmRsZXIiLCJjaGFubmVsIiwieGZvcm0iLCJtYXhEaXJ0eSIsIm1heFF1ZXVlZCIsInJlY3ZzIiwic2VuZHMiLCJkaXJ0eVJlY3ZzIiwiZGlydHlTZW5kcyIsImNsb3NlZCIsImhhbmRsZVNlbmQiLCJpbXBsIiwiRXJyb3IiLCJjb21taXQiLCJyZWNlaXZlciIsImNhbGxiYWNrIiwiZG9uZSIsInN0ZXAiLCJFTVBUWSIsImFjdGl2ZSIsInZhbCIsImRpc3BhdGNoIiwiY2xvc2UiLCJmaWx0ZXIiLCJzZW5kZXIiLCJoYW5kbGVSZWN2Iiwic2VuZEhhbmRsZXIiLCJyZXN1bHQiLCJERUZBVUxUX0hBTkRMRVIiLCJvcEhhbmRsZXIiLCJmbiIsImhhbmRsZUV4Y2VwdGlvbiIsImV4IiwiaGFuZGxlclRyYW5zZHVjZXIiLCJpbnB1dCIsImJ1ZmZlclJlZHVjZXIiLCJpbml0IiwicGFyc2VBcmdzIiwib3B0aW9ucyIsImRlZmF1bHRPcHRpb25zIiwiYnVmIiwib3B0cyIsInRyYW5zZHVjZXIiLCJ0aW1lb3V0IiwiYXNzaWduIiwiY2hhbiIsInhmIiwiY2hhbkltcGwiLCJpc1RpbWVkIiwic2V0VGltZW91dCIsImNsb3NlSW1wbCIsImNoIiwiaXNCdWZmZXJlZCIsIml0ZXJhdG9yIiwicmVjdiIsImFzeW5jSXRlcmF0b3IiLCJ0aW1lZENoYW4iLCJkZWxheSIsInRyYW5zQ2hhbiIsImlzQ2xvc2VkIiwic2VuZEFzeW5jIiwicmVjdkFzeW5jIiwic2VuZCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVjdk9yVGhyb3ciLCJyZWplY3QiLCJwcm90b3R5cGUiLCJpc1Byb3RvdHlwZU9mIiwiY2FsbCIsIkRFRkFVTFQiLCJzZWxlY3RIYW5kbGVyIiwiZ2V0IiwicmFuZG9tQXJyYXkiLCJ1cHBlciIsImFycmF5IiwiayIsInB1c2giLCJqIiwiaSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInRlbXAiLCJzZWxlY3RSZXN1bHQiLCJzZWxlY3RBc3luYyIsIm9wcyIsImxlbmd0aCIsInByaW9yaXR5IiwiaW5kaWNlcyIsImNyZWF0ZVNlbGVjdEhhbmRsZXIiLCJvcCIsIkFycmF5IiwiaXNBcnJheSIsImhhc093blByb3BlcnR5IiwiZGVmYXVsdCIsInNlbGVjdCIsIlNFVF9JTU1FRElBVEUiLCJNRVNTQUdFX0NIQU5ORUwiLCJTRVRfVElNRU9VVCIsImJhdGNoU2l6ZSIsImRpc3BhdGNoTWV0aG9kIiwiZGlzcGF0Y2hlciIsImNyZWF0ZURpc3BhdGNoZXIiLCJydW5uaW5nIiwicXVldWVkIiwiY2FsY0Rpc3BhdGNoTWV0aG9kIiwic2V0SW1tZWRpYXRlIiwicHJvY2Vzc1Rhc2tzIiwiTWVzc2FnZUNoYW5uZWwiLCJwb3J0MSIsIm9ubWVzc2FnZSIsInBvcnQyIiwicG9zdE1lc3NhZ2UiLCJ0YXNrIiwic2V0RGlzcGF0Y2hlciIsImNvbmZpZyIsImtleSIsInNsZWVwIiwiZ28iLCJhcmdzIiwicHJvdG9jb2xzIiwiZm9yIiwiUVVFVUUiLCJpc1F1ZXVlIiwic3RvcmUiLCJwb2ludGVyIiwiaXNFbXB0eSIsInNsaWNlIiwicGVlayIsInByZWRpY2F0ZSIsImVuZCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSxpQkFBaUIsbUJBQU8sQ0FBQyw2RUFBYzs7QUFFdkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxnQzs7Ozs7Ozs7Ozs7QUNuR0E7QUFDQTtBQUNBOztBQUVBLDZCOzs7Ozs7Ozs7OztBQ0pBLGlCQUFpQixtQkFBTyxDQUFDLDZFQUFjOztBQUV2QztBQUNBO0FBQ0E7O0FBRUEsc0M7Ozs7Ozs7Ozs7O0FDTkEscUJBQXFCLG1CQUFPLENBQUMscUZBQWtCOztBQUUvQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDOzs7Ozs7Ozs7OztBQ1JBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFVBQVU7Ozs7Ozs7Ozs7OztBQ3ZMdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGlCQUFpQjtBQUN0QztBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMENBQTBDLHNCQUFzQixFQUFFO0FBQ2xFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDekxEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxtQkFBTyxDQUFDLHFFQUFjO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzlEQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0Qzs7QUFFNUM7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7OztBQU9BO0FBQ0E7QUFtQkE7QUFNQTs7Ozs7Ozs7Ozs7OztBQ2pDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7O0FBT0E7QUFFQSxNQUFNQSxNQUFNLEdBQUdDLE1BQU0sQ0FBQyxRQUFELENBQXJCO0FBQ0EsTUFBTUMsS0FBSyxHQUFHRCxNQUFNLENBQUMsT0FBRCxDQUFwQjtBQUNBLE1BQU1FLFFBQVEsR0FBR0YsTUFBTSxDQUFDLFVBQUQsQ0FBdkI7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LENBQUNOLEtBQUQsQ0FBM0IsRUFBb0N5RyxDQUFDLEdBQUdvRCxHQUF4QyxFQUE2Q3BELENBQUMsRUFBOUMsRUFBa0Q7QUFDaEQsVUFBTTlGLElBQUksR0FBR0UsT0FBTyxDQUFDYixLQUFELENBQXBCOztBQUNBLFFBQUk0SixTQUFTLENBQUNqSixJQUFELENBQWIsRUFBcUI7QUFDbkJDLGFBQU8sQ0FBQ1osS0FBRCxFQUFRVyxJQUFSLENBQVA7QUFDRDtBQUNGO0FBQ0YiLCJmaWxlIjoiY2hhbmtvLmRldi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImNoYW5rb1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJjaGFua29cIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwidmFyIEF3YWl0VmFsdWUgPSByZXF1aXJlKFwiLi9Bd2FpdFZhbHVlXCIpO1xuXG5mdW5jdGlvbiBBc3luY0dlbmVyYXRvcihnZW4pIHtcbiAgdmFyIGZyb250LCBiYWNrO1xuXG4gIGZ1bmN0aW9uIHNlbmQoa2V5LCBhcmcpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlcXVlc3QgPSB7XG4gICAgICAgIGtleToga2V5LFxuICAgICAgICBhcmc6IGFyZyxcbiAgICAgICAgcmVzb2x2ZTogcmVzb2x2ZSxcbiAgICAgICAgcmVqZWN0OiByZWplY3QsXG4gICAgICAgIG5leHQ6IG51bGxcbiAgICAgIH07XG5cbiAgICAgIGlmIChiYWNrKSB7XG4gICAgICAgIGJhY2sgPSBiYWNrLm5leHQgPSByZXF1ZXN0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZnJvbnQgPSBiYWNrID0gcmVxdWVzdDtcbiAgICAgICAgcmVzdW1lKGtleSwgYXJnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc3VtZShrZXksIGFyZykge1xuICAgIHRyeSB7XG4gICAgICB2YXIgcmVzdWx0ID0gZ2VuW2tleV0oYXJnKTtcbiAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgIHZhciB3cmFwcGVkQXdhaXQgPSB2YWx1ZSBpbnN0YW5jZW9mIEF3YWl0VmFsdWU7XG4gICAgICBQcm9taXNlLnJlc29sdmUod3JhcHBlZEF3YWl0ID8gdmFsdWUud3JhcHBlZCA6IHZhbHVlKS50aGVuKGZ1bmN0aW9uIChhcmcpIHtcbiAgICAgICAgaWYgKHdyYXBwZWRBd2FpdCkge1xuICAgICAgICAgIHJlc3VtZShrZXkgPT09IFwicmV0dXJuXCIgPyBcInJldHVyblwiIDogXCJuZXh0XCIsIGFyZyk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0dGxlKHJlc3VsdC5kb25lID8gXCJyZXR1cm5cIiA6IFwibm9ybWFsXCIsIGFyZyk7XG4gICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIHJlc3VtZShcInRocm93XCIsIGVycik7XG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHNldHRsZShcInRocm93XCIsIGVycik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2V0dGxlKHR5cGUsIHZhbHVlKSB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIFwicmV0dXJuXCI6XG4gICAgICAgIGZyb250LnJlc29sdmUoe1xuICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICBkb25lOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBcInRocm93XCI6XG4gICAgICAgIGZyb250LnJlamVjdCh2YWx1ZSk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBmcm9udC5yZXNvbHZlKHtcbiAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgZG9uZTogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGZyb250ID0gZnJvbnQubmV4dDtcblxuICAgIGlmIChmcm9udCkge1xuICAgICAgcmVzdW1lKGZyb250LmtleSwgZnJvbnQuYXJnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYmFjayA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgdGhpcy5faW52b2tlID0gc2VuZDtcblxuICBpZiAodHlwZW9mIGdlbltcInJldHVyblwiXSAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdGhpc1tcInJldHVyblwiXSA9IHVuZGVmaW5lZDtcbiAgfVxufVxuXG5pZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5hc3luY0l0ZXJhdG9yKSB7XG4gIEFzeW5jR2VuZXJhdG9yLnByb3RvdHlwZVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG59XG5cbkFzeW5jR2VuZXJhdG9yLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKGFyZykge1xuICByZXR1cm4gdGhpcy5faW52b2tlKFwibmV4dFwiLCBhcmcpO1xufTtcblxuQXN5bmNHZW5lcmF0b3IucHJvdG90eXBlW1widGhyb3dcIl0gPSBmdW5jdGlvbiAoYXJnKSB7XG4gIHJldHVybiB0aGlzLl9pbnZva2UoXCJ0aHJvd1wiLCBhcmcpO1xufTtcblxuQXN5bmNHZW5lcmF0b3IucHJvdG90eXBlW1wicmV0dXJuXCJdID0gZnVuY3Rpb24gKGFyZykge1xuICByZXR1cm4gdGhpcy5faW52b2tlKFwicmV0dXJuXCIsIGFyZyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFzeW5jR2VuZXJhdG9yOyIsImZ1bmN0aW9uIF9Bd2FpdFZhbHVlKHZhbHVlKSB7XG4gIHRoaXMud3JhcHBlZCA9IHZhbHVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9Bd2FpdFZhbHVlOyIsInZhciBBd2FpdFZhbHVlID0gcmVxdWlyZShcIi4vQXdhaXRWYWx1ZVwiKTtcblxuZnVuY3Rpb24gX2F3YWl0QXN5bmNHZW5lcmF0b3IodmFsdWUpIHtcbiAgcmV0dXJuIG5ldyBBd2FpdFZhbHVlKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXdhaXRBc3luY0dlbmVyYXRvcjsiLCJ2YXIgQXN5bmNHZW5lcmF0b3IgPSByZXF1aXJlKFwiLi9Bc3luY0dlbmVyYXRvclwiKTtcblxuZnVuY3Rpb24gX3dyYXBBc3luY0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBuZXcgQXN5bmNHZW5lcmF0b3IoZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3dyYXBBc3luY0dlbmVyYXRvcjsiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiKGZ1bmN0aW9uIChnbG9iYWwsIHVuZGVmaW5lZCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgaWYgKGdsb2JhbC5zZXRJbW1lZGlhdGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBuZXh0SGFuZGxlID0gMTsgLy8gU3BlYyBzYXlzIGdyZWF0ZXIgdGhhbiB6ZXJvXG4gICAgdmFyIHRhc2tzQnlIYW5kbGUgPSB7fTtcbiAgICB2YXIgY3VycmVudGx5UnVubmluZ0FUYXNrID0gZmFsc2U7XG4gICAgdmFyIGRvYyA9IGdsb2JhbC5kb2N1bWVudDtcbiAgICB2YXIgcmVnaXN0ZXJJbW1lZGlhdGU7XG5cbiAgICBmdW5jdGlvbiBzZXRJbW1lZGlhdGUoY2FsbGJhY2spIHtcbiAgICAgIC8vIENhbGxiYWNrIGNhbiBlaXRoZXIgYmUgYSBmdW5jdGlvbiBvciBhIHN0cmluZ1xuICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGNhbGxiYWNrID0gbmV3IEZ1bmN0aW9uKFwiXCIgKyBjYWxsYmFjayk7XG4gICAgICB9XG4gICAgICAvLyBDb3B5IGZ1bmN0aW9uIGFyZ3VtZW50c1xuICAgICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpICsgMV07XG4gICAgICB9XG4gICAgICAvLyBTdG9yZSBhbmQgcmVnaXN0ZXIgdGhlIHRhc2tcbiAgICAgIHZhciB0YXNrID0geyBjYWxsYmFjazogY2FsbGJhY2ssIGFyZ3M6IGFyZ3MgfTtcbiAgICAgIHRhc2tzQnlIYW5kbGVbbmV4dEhhbmRsZV0gPSB0YXNrO1xuICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUobmV4dEhhbmRsZSk7XG4gICAgICByZXR1cm4gbmV4dEhhbmRsZSsrO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFySW1tZWRpYXRlKGhhbmRsZSkge1xuICAgICAgICBkZWxldGUgdGFza3NCeUhhbmRsZVtoYW5kbGVdO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJ1bih0YXNrKSB7XG4gICAgICAgIHZhciBjYWxsYmFjayA9IHRhc2suY2FsbGJhY2s7XG4gICAgICAgIHZhciBhcmdzID0gdGFzay5hcmdzO1xuICAgICAgICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJ1bklmUHJlc2VudChoYW5kbGUpIHtcbiAgICAgICAgLy8gRnJvbSB0aGUgc3BlYzogXCJXYWl0IHVudGlsIGFueSBpbnZvY2F0aW9ucyBvZiB0aGlzIGFsZ29yaXRobSBzdGFydGVkIGJlZm9yZSB0aGlzIG9uZSBoYXZlIGNvbXBsZXRlZC5cIlxuICAgICAgICAvLyBTbyBpZiB3ZSdyZSBjdXJyZW50bHkgcnVubmluZyBhIHRhc2ssIHdlJ2xsIG5lZWQgdG8gZGVsYXkgdGhpcyBpbnZvY2F0aW9uLlxuICAgICAgICBpZiAoY3VycmVudGx5UnVubmluZ0FUYXNrKSB7XG4gICAgICAgICAgICAvLyBEZWxheSBieSBkb2luZyBhIHNldFRpbWVvdXQuIHNldEltbWVkaWF0ZSB3YXMgdHJpZWQgaW5zdGVhZCwgYnV0IGluIEZpcmVmb3ggNyBpdCBnZW5lcmF0ZWQgYVxuICAgICAgICAgICAgLy8gXCJ0b28gbXVjaCByZWN1cnNpb25cIiBlcnJvci5cbiAgICAgICAgICAgIHNldFRpbWVvdXQocnVuSWZQcmVzZW50LCAwLCBoYW5kbGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHRhc2sgPSB0YXNrc0J5SGFuZGxlW2hhbmRsZV07XG4gICAgICAgICAgICBpZiAodGFzaykge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IHRydWU7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcnVuKHRhc2spO1xuICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW1tZWRpYXRlKGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxOZXh0VGlja0ltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgcHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbiAoKSB7IHJ1bklmUHJlc2VudChoYW5kbGUpOyB9KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYW5Vc2VQb3N0TWVzc2FnZSgpIHtcbiAgICAgICAgLy8gVGhlIHRlc3QgYWdhaW5zdCBgaW1wb3J0U2NyaXB0c2AgcHJldmVudHMgdGhpcyBpbXBsZW1lbnRhdGlvbiBmcm9tIGJlaW5nIGluc3RhbGxlZCBpbnNpZGUgYSB3ZWIgd29ya2VyLFxuICAgICAgICAvLyB3aGVyZSBgZ2xvYmFsLnBvc3RNZXNzYWdlYCBtZWFucyBzb21ldGhpbmcgY29tcGxldGVseSBkaWZmZXJlbnQgYW5kIGNhbid0IGJlIHVzZWQgZm9yIHRoaXMgcHVycG9zZS5cbiAgICAgICAgaWYgKGdsb2JhbC5wb3N0TWVzc2FnZSAmJiAhZ2xvYmFsLmltcG9ydFNjcmlwdHMpIHtcbiAgICAgICAgICAgIHZhciBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhciBvbGRPbk1lc3NhZ2UgPSBnbG9iYWwub25tZXNzYWdlO1xuICAgICAgICAgICAgZ2xvYmFsLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXMgPSBmYWxzZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBnbG9iYWwucG9zdE1lc3NhZ2UoXCJcIiwgXCIqXCIpO1xuICAgICAgICAgICAgZ2xvYmFsLm9ubWVzc2FnZSA9IG9sZE9uTWVzc2FnZTtcbiAgICAgICAgICAgIHJldHVybiBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbFBvc3RNZXNzYWdlSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIC8vIEluc3RhbGxzIGFuIGV2ZW50IGhhbmRsZXIgb24gYGdsb2JhbGAgZm9yIHRoZSBgbWVzc2FnZWAgZXZlbnQ6IHNlZVxuICAgICAgICAvLyAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuL0RPTS93aW5kb3cucG9zdE1lc3NhZ2VcbiAgICAgICAgLy8gKiBodHRwOi8vd3d3LndoYXR3Zy5vcmcvc3BlY3Mvd2ViLWFwcHMvY3VycmVudC13b3JrL211bHRpcGFnZS9jb21tcy5odG1sI2Nyb3NzRG9jdW1lbnRNZXNzYWdlc1xuXG4gICAgICAgIHZhciBtZXNzYWdlUHJlZml4ID0gXCJzZXRJbW1lZGlhdGUkXCIgKyBNYXRoLnJhbmRvbSgpICsgXCIkXCI7XG4gICAgICAgIHZhciBvbkdsb2JhbE1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnNvdXJjZSA9PT0gZ2xvYmFsICYmXG4gICAgICAgICAgICAgICAgdHlwZW9mIGV2ZW50LmRhdGEgPT09IFwic3RyaW5nXCIgJiZcbiAgICAgICAgICAgICAgICBldmVudC5kYXRhLmluZGV4T2YobWVzc2FnZVByZWZpeCkgPT09IDApIHtcbiAgICAgICAgICAgICAgICBydW5JZlByZXNlbnQoK2V2ZW50LmRhdGEuc2xpY2UobWVzc2FnZVByZWZpeC5sZW5ndGgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBvbkdsb2JhbE1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGdsb2JhbC5hdHRhY2hFdmVudChcIm9ubWVzc2FnZVwiLCBvbkdsb2JhbE1lc3NhZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShtZXNzYWdlUHJlZml4ICsgaGFuZGxlLCBcIipcIik7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbE1lc3NhZ2VDaGFubmVsSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHZhciBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBoYW5kbGUgPSBldmVudC5kYXRhO1xuICAgICAgICAgICAgcnVuSWZQcmVzZW50KGhhbmRsZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIGNoYW5uZWwucG9ydDIucG9zdE1lc3NhZ2UoaGFuZGxlKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsUmVhZHlTdGF0ZUNoYW5nZUltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICB2YXIgaHRtbCA9IGRvYy5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICAvLyBDcmVhdGUgYSA8c2NyaXB0PiBlbGVtZW50OyBpdHMgcmVhZHlzdGF0ZWNoYW5nZSBldmVudCB3aWxsIGJlIGZpcmVkIGFzeW5jaHJvbm91c2x5IG9uY2UgaXQgaXMgaW5zZXJ0ZWRcbiAgICAgICAgICAgIC8vIGludG8gdGhlIGRvY3VtZW50LiBEbyBzbywgdGh1cyBxdWV1aW5nIHVwIHRoZSB0YXNrLiBSZW1lbWJlciB0byBjbGVhbiB1cCBvbmNlIGl0J3MgYmVlbiBjYWxsZWQuXG4gICAgICAgICAgICB2YXIgc2NyaXB0ID0gZG9jLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgICAgICAgICBzY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJ1bklmUHJlc2VudChoYW5kbGUpO1xuICAgICAgICAgICAgICAgIHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBudWxsO1xuICAgICAgICAgICAgICAgIGh0bWwucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgICAgICAgICBzY3JpcHQgPSBudWxsO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsU2V0VGltZW91dEltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgc2V0VGltZW91dChydW5JZlByZXNlbnQsIDAsIGhhbmRsZSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gSWYgc3VwcG9ydGVkLCB3ZSBzaG91bGQgYXR0YWNoIHRvIHRoZSBwcm90b3R5cGUgb2YgZ2xvYmFsLCBzaW5jZSB0aGF0IGlzIHdoZXJlIHNldFRpbWVvdXQgZXQgYWwuIGxpdmUuXG4gICAgdmFyIGF0dGFjaFRvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mICYmIE9iamVjdC5nZXRQcm90b3R5cGVPZihnbG9iYWwpO1xuICAgIGF0dGFjaFRvID0gYXR0YWNoVG8gJiYgYXR0YWNoVG8uc2V0VGltZW91dCA/IGF0dGFjaFRvIDogZ2xvYmFsO1xuXG4gICAgLy8gRG9uJ3QgZ2V0IGZvb2xlZCBieSBlLmcuIGJyb3dzZXJpZnkgZW52aXJvbm1lbnRzLlxuICAgIGlmICh7fS50b1N0cmluZy5jYWxsKGdsb2JhbC5wcm9jZXNzKSA9PT0gXCJbb2JqZWN0IHByb2Nlc3NdXCIpIHtcbiAgICAgICAgLy8gRm9yIE5vZGUuanMgYmVmb3JlIDAuOVxuICAgICAgICBpbnN0YWxsTmV4dFRpY2tJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChjYW5Vc2VQb3N0TWVzc2FnZSgpKSB7XG4gICAgICAgIC8vIEZvciBub24tSUUxMCBtb2Rlcm4gYnJvd3NlcnNcbiAgICAgICAgaW5zdGFsbFBvc3RNZXNzYWdlSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoZ2xvYmFsLk1lc3NhZ2VDaGFubmVsKSB7XG4gICAgICAgIC8vIEZvciB3ZWIgd29ya2Vycywgd2hlcmUgc3VwcG9ydGVkXG4gICAgICAgIGluc3RhbGxNZXNzYWdlQ2hhbm5lbEltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGRvYyAmJiBcIm9ucmVhZHlzdGF0ZWNoYW5nZVwiIGluIGRvYy5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpKSB7XG4gICAgICAgIC8vIEZvciBJRSA24oCTOFxuICAgICAgICBpbnN0YWxsUmVhZHlTdGF0ZUNoYW5nZUltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBGb3Igb2xkZXIgYnJvd3NlcnNcbiAgICAgICAgaW5zdGFsbFNldFRpbWVvdXRJbXBsZW1lbnRhdGlvbigpO1xuICAgIH1cblxuICAgIGF0dGFjaFRvLnNldEltbWVkaWF0ZSA9IHNldEltbWVkaWF0ZTtcbiAgICBhdHRhY2hUby5jbGVhckltbWVkaWF0ZSA9IGNsZWFySW1tZWRpYXRlO1xufSh0eXBlb2Ygc2VsZiA9PT0gXCJ1bmRlZmluZWRcIiA/IHR5cGVvZiBnbG9iYWwgPT09IFwidW5kZWZpbmVkXCIgPyB0aGlzIDogZ2xvYmFsIDogc2VsZikpO1xuIiwidmFyIHNjb3BlID0gKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgJiYgZ2xvYmFsKSB8fFxuICAgICAgICAgICAgKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmIHNlbGYpIHx8XG4gICAgICAgICAgICB3aW5kb3c7XG52YXIgYXBwbHkgPSBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHk7XG5cbi8vIERPTSBBUElzLCBmb3IgY29tcGxldGVuZXNzXG5cbmV4cG9ydHMuc2V0VGltZW91dCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFRpbWVvdXQoYXBwbHkuY2FsbChzZXRUaW1lb3V0LCBzY29wZSwgYXJndW1lbnRzKSwgY2xlYXJUaW1lb3V0KTtcbn07XG5leHBvcnRzLnNldEludGVydmFsID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgVGltZW91dChhcHBseS5jYWxsKHNldEludGVydmFsLCBzY29wZSwgYXJndW1lbnRzKSwgY2xlYXJJbnRlcnZhbCk7XG59O1xuZXhwb3J0cy5jbGVhclRpbWVvdXQgPVxuZXhwb3J0cy5jbGVhckludGVydmFsID0gZnVuY3Rpb24odGltZW91dCkge1xuICBpZiAodGltZW91dCkge1xuICAgIHRpbWVvdXQuY2xvc2UoKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gVGltZW91dChpZCwgY2xlYXJGbikge1xuICB0aGlzLl9pZCA9IGlkO1xuICB0aGlzLl9jbGVhckZuID0gY2xlYXJGbjtcbn1cblRpbWVvdXQucHJvdG90eXBlLnVucmVmID0gVGltZW91dC5wcm90b3R5cGUucmVmID0gZnVuY3Rpb24oKSB7fTtcblRpbWVvdXQucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuX2NsZWFyRm4uY2FsbChzY29wZSwgdGhpcy5faWQpO1xufTtcblxuLy8gRG9lcyBub3Qgc3RhcnQgdGhlIHRpbWUsIGp1c3Qgc2V0cyB1cCB0aGUgbWVtYmVycyBuZWVkZWQuXG5leHBvcnRzLmVucm9sbCA9IGZ1bmN0aW9uKGl0ZW0sIG1zZWNzKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcbiAgaXRlbS5faWRsZVRpbWVvdXQgPSBtc2Vjcztcbn07XG5cbmV4cG9ydHMudW5lbnJvbGwgPSBmdW5jdGlvbihpdGVtKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcbiAgaXRlbS5faWRsZVRpbWVvdXQgPSAtMTtcbn07XG5cbmV4cG9ydHMuX3VucmVmQWN0aXZlID0gZXhwb3J0cy5hY3RpdmUgPSBmdW5jdGlvbihpdGVtKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcblxuICB2YXIgbXNlY3MgPSBpdGVtLl9pZGxlVGltZW91dDtcbiAgaWYgKG1zZWNzID49IDApIHtcbiAgICBpdGVtLl9pZGxlVGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbiBvblRpbWVvdXQoKSB7XG4gICAgICBpZiAoaXRlbS5fb25UaW1lb3V0KVxuICAgICAgICBpdGVtLl9vblRpbWVvdXQoKTtcbiAgICB9LCBtc2Vjcyk7XG4gIH1cbn07XG5cbi8vIHNldGltbWVkaWF0ZSBhdHRhY2hlcyBpdHNlbGYgdG8gdGhlIGdsb2JhbCBvYmplY3RcbnJlcXVpcmUoXCJzZXRpbW1lZGlhdGVcIik7XG4vLyBPbiBzb21lIGV4b3RpYyBlbnZpcm9ubWVudHMsIGl0J3Mgbm90IGNsZWFyIHdoaWNoIG9iamVjdCBgc2V0aW1tZWRpYXRlYCB3YXNcbi8vIGFibGUgdG8gaW5zdGFsbCBvbnRvLiAgU2VhcmNoIGVhY2ggcG9zc2liaWxpdHkgaW4gdGhlIHNhbWUgb3JkZXIgYXMgdGhlXG4vLyBgc2V0aW1tZWRpYXRlYCBsaWJyYXJ5LlxuZXhwb3J0cy5zZXRJbW1lZGlhdGUgPSAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZi5zZXRJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiICYmIGdsb2JhbC5zZXRJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICh0aGlzICYmIHRoaXMuc2V0SW1tZWRpYXRlKTtcbmV4cG9ydHMuY2xlYXJJbW1lZGlhdGUgPSAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZi5jbGVhckltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBnbG9iYWwuY2xlYXJJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMgJiYgdGhpcy5jbGVhckltbWVkaWF0ZSk7XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuZXhwb3J0IHsgZml4ZWQsIGRyb3BwaW5nLCBzbGlkaW5nIH0gZnJvbSBcIm1vZHVsZXMvYnVmZmVyXCI7XG5leHBvcnQge1xuICBDTE9TRUQsXG4gIGNoYW4sXG4gIHRpbWVkQ2hhbixcbiAgdHJhbnNDaGFuLFxuICBzZW5kLFxuICByZWN2LFxuICBzZW5kQXN5bmMsXG4gIHJlY3ZBc3luYyxcbiAgcmVjdk9yVGhyb3csXG4gIGNsb3NlLFxuICBpc0Nsb3NlZCxcbiAgaXNCdWZmZXJlZCxcbiAgaXNUaW1lZCxcbiAgc2VsZWN0LFxuICBzZWxlY3RBc3luYyxcbiAgdmFsdWUsXG4gIGNoYW5uZWxcbn0gZnJvbSBcIm1vZHVsZXMvY2hhbm5lbFwiO1xuZXhwb3J0IHtcbiAgY29uZmlnLFxuICBTRVRfSU1NRURJQVRFLFxuICBNRVNTQUdFX0NIQU5ORUwsXG4gIFNFVF9USU1FT1VUXG59IGZyb20gXCJtb2R1bGVzL2Rpc3BhdGNoZXJcIjtcbmV4cG9ydCB7IGdvLCBzbGVlcCB9IGZyb20gXCJtb2R1bGVzL3Byb2Nlc3NcIjtcbmV4cG9ydCB7IEVNUFRZIH0gZnJvbSBcIm1vZHVsZXMvcXVldWVcIjtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG5pbXBvcnQgeyBxdWV1ZSBhcyBxLCBjb3VudCBhcyBxQ291bnQsIGVucXVldWUsIGRlcXVldWUgfSBmcm9tIFwibW9kdWxlcy9xdWV1ZVwiO1xuXG5jb25zdCBCVUZGRVIgPSBTeW1ib2woXCJidWZmZXJcIik7XG5jb25zdCBGSVhFRCA9IFN5bWJvbChcImZpeGVkXCIpO1xuY29uc3QgRFJPUFBJTkcgPSBTeW1ib2woXCJkcm9wcGluZ1wiKTtcbmNvbnN0IFNMSURJTkcgPSBTeW1ib2woXCJzbGlkaW5nXCIpO1xuXG5mdW5jdGlvbiBpc0J1ZmZlcihvYmopIHtcbiAgcmV0dXJuICEhb2JqPy5bQlVGRkVSXTtcbn1cblxuZnVuY3Rpb24gZml4ZWQoc2l6ZSkge1xuICByZXR1cm4gT2JqZWN0LmNyZWF0ZShudWxsLCB7XG4gICAgcXVldWU6IHtcbiAgICAgIHZhbHVlOiBxKClcbiAgICB9LFxuXG4gICAgc2l6ZToge1xuICAgICAgdmFsdWU6IHNpemVcbiAgICB9LFxuXG4gICAgW0JVRkZFUl06IHtcbiAgICAgIHZhbHVlOiBGSVhFRFxuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGRyb3BwaW5nKHNpemUpIHtcbiAgcmV0dXJuIE9iamVjdC5jcmVhdGUobnVsbCwge1xuICAgIHF1ZXVlOiB7XG4gICAgICB2YWx1ZTogcSgpXG4gICAgfSxcblxuICAgIHNpemU6IHtcbiAgICAgIHZhbHVlOiBzaXplXG4gICAgfSxcblxuICAgIFtCVUZGRVJdOiB7XG4gICAgICB2YWx1ZTogRFJPUFBJTkdcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzbGlkaW5nKHNpemUpIHtcbiAgcmV0dXJuIE9iamVjdC5jcmVhdGUobnVsbCwge1xuICAgIHF1ZXVlOiB7XG4gICAgICB2YWx1ZTogcSgpXG4gICAgfSxcblxuICAgIHNpemU6IHtcbiAgICAgIHZhbHVlOiBzaXplXG4gICAgfSxcblxuICAgIFtCVUZGRVJdOiB7XG4gICAgICB2YWx1ZTogU0xJRElOR1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHF1ZXVlKGJ1ZmZlcikge1xuICByZXR1cm4gYnVmZmVyLnF1ZXVlO1xufVxuXG5mdW5jdGlvbiBzaXplKGJ1ZmZlcikge1xuICByZXR1cm4gYnVmZmVyLnNpemU7XG59XG5cbmZ1bmN0aW9uIGNvdW50KGJ1ZmZlcikge1xuICByZXR1cm4gcUNvdW50KGJ1ZmZlci5xdWV1ZSk7XG59XG5cbmZ1bmN0aW9uIGlzRnVsbChidWZmZXIpIHtcbiAgcmV0dXJuIGJ1ZmZlcltCVUZGRVJdID09PSBGSVhFRCA/IHFDb3VudChidWZmZXIucXVldWUpID49IGJ1ZmZlci5zaXplIDogZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGFkZChidWZmZXIsIC4uLml0ZW1zKSB7XG4gIHN3aXRjaCAoYnVmZmVyW0JVRkZFUl0pIHtcbiAgICBjYXNlIEZJWEVEOlxuICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGl0ZW1zKSB7XG4gICAgICAgIGVucXVldWUoYnVmZmVyLnF1ZXVlLCBpdGVtKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBEUk9QUElORzpcbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBpdGVtcykge1xuICAgICAgICBpZiAoY291bnQoYnVmZmVyKSA8IHNpemUoYnVmZmVyKSkge1xuICAgICAgICAgIGVucXVldWUoYnVmZmVyLnF1ZXVlLCBpdGVtKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIFNMSURJTkc6XG4gICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgaXRlbXMpIHtcbiAgICAgICAgaWYgKGNvdW50KGJ1ZmZlcikgPj0gc2l6ZShidWZmZXIpKSB7XG4gICAgICAgICAgZGVxdWV1ZShidWZmZXIucXVldWUpO1xuICAgICAgICB9XG4gICAgICAgIGVucXVldWUoYnVmZmVyLnF1ZXVlLCBpdGVtKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybjtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmUoYnVmZmVyKSB7XG4gIHJldHVybiBkZXF1ZXVlKGJ1ZmZlci5xdWV1ZSk7XG59XG5cbmV4cG9ydCB7XG4gIGlzQnVmZmVyLFxuICBmaXhlZCxcbiAgZHJvcHBpbmcsXG4gIHNsaWRpbmcsXG4gIHF1ZXVlLFxuICBzaXplLFxuICBjb3VudCxcbiAgaXNGdWxsLFxuICBhZGQsXG4gIHJlbW92ZVxufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG5pbXBvcnQgeyBwcm90b2NvbHMgYXMgcCB9IGZyb20gXCJtb2R1bGVzL3Byb3RvY29sXCI7XG5pbXBvcnQge1xuICBxdWV1ZSxcbiAgZGVxdWV1ZSxcbiAgRU1QVFksXG4gIGZpbHRlcixcbiAgY291bnQgYXMgcUNvdW50LFxuICBlbnF1ZXVlXG59IGZyb20gXCJtb2R1bGVzL3F1ZXVlXCI7XG5pbXBvcnQgeyBpc0Z1bGwsIGNvdW50LCByZW1vdmUgfSBmcm9tIFwibW9kdWxlcy9idWZmZXJcIjtcbmltcG9ydCB7IGRpc3BhdGNoIH0gZnJvbSBcIm1vZHVsZXMvZGlzcGF0Y2hlclwiO1xuXG5jb25zdCBNQVhfRElSVFkgPSA2NDtcbmNvbnN0IE1BWF9RVUVVRUQgPSAxMDI0O1xuXG5jb25zdCBDTE9TRUQgPSBTeW1ib2woXCJjbG9zZWRcIik7XG5cbmNvbnN0IEJPWCA9IFN5bWJvbChcImJveFwiKTtcblxuZnVuY3Rpb24gaXNCb3gob2JqKSB7XG4gIHJldHVybiAhIW9iaj8uW0JPWF07XG59XG5cbmZ1bmN0aW9uIGlzUmVkdWNlZCh2YWx1ZSkge1xuICByZXR1cm4gISF2YWx1ZT8uW3AucmVkdWNlZF07XG59XG5cbmZ1bmN0aW9uIGJveCh2YWx1ZSkge1xuICByZXR1cm4gT2JqZWN0LmNyZWF0ZShudWxsLCB7XG4gICAgdmFsdWU6IHtcbiAgICAgIHZhbHVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9LFxuICAgIFtCT1hdOiB7XG4gICAgICB2YWx1ZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNlbmRCb3godmFsdWUsIGhhbmRsZXIpIHtcbiAgcmV0dXJuIE9iamVjdC5jcmVhdGUobnVsbCwge1xuICAgIHZhbHVlOiB7XG4gICAgICB2YWx1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSxcbiAgICBoYW5kbGVyOiB7XG4gICAgICB2YWx1ZTogaGFuZGxlclxuICAgIH0sXG4gICAgW0JPWF06IHtcbiAgICAgIHZhbHVlOiB0cnVlXG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gY2hhbm5lbChidWZmZXIsIHhmb3JtLCBtYXhEaXJ0eSA9IE1BWF9ESVJUWSwgbWF4UXVldWVkID0gTUFYX1FVRVVFRCkge1xuICByZXR1cm4gT2JqZWN0LmNyZWF0ZShudWxsLCB7XG4gICAgYnVmZmVyOiB7XG4gICAgICB2YWx1ZTogYnVmZmVyXG4gICAgfSxcbiAgICB4Zm9ybToge1xuICAgICAgdmFsdWU6IHhmb3JtXG4gICAgfSxcbiAgICBtYXhEaXJ0eToge1xuICAgICAgdmFsdWU6IG1heERpcnR5XG4gICAgfSxcbiAgICBtYXhRdWV1ZWQ6IHtcbiAgICAgIHZhbHVlOiBtYXhRdWV1ZWRcbiAgICB9LFxuICAgIHJlY3ZzOiB7XG4gICAgICB2YWx1ZTogcXVldWUoKVxuICAgIH0sXG4gICAgc2VuZHM6IHtcbiAgICAgIHZhbHVlOiBxdWV1ZSgpXG4gICAgfSxcbiAgICBkaXJ0eVJlY3ZzOiB7XG4gICAgICB2YWx1ZTogMCxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSxcbiAgICBkaXJ0eVNlbmRzOiB7XG4gICAgICB2YWx1ZTogMCxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSxcbiAgICBjbG9zZWQ6IHtcbiAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlU2VuZChpbXBsLCB2YWx1ZSwgaGFuZGxlcikge1xuICBpZiAodmFsdWUgPT09IENMT1NFRCkge1xuICAgIHRocm93IEVycm9yKFwiQ2Fubm90IHNlbmQgQ0xPU0VEIHRvIGEgY2hhbm5lbFwiKTtcbiAgfVxuXG4gIGlmIChpbXBsLmNsb3NlZCkge1xuICAgIGhhbmRsZXIuY29tbWl0KCk7XG4gICAgcmV0dXJuIGJveChmYWxzZSk7XG4gIH1cblxuICBsZXQgcmVjZWl2ZXIsIGNhbGxiYWNrO1xuXG4gIC8vIFB1c2ggdGhlIGluY29taW5nIHZhbHVlIHRocm91Z2ggdGhlIGJ1ZmZlciwgZXZlbiBpZiB0aGVyZSdzIGFscmVhZHkgYVxuICAvLyByZWNlaXZlciB3YWl0aW5nIGZvciB0aGUgdmFsdWUuIFRoaXMgaXMgdG8gbWFrZSBzdXJlIHRoYXQgdGhlIHRyYW5zZHVjZXJcbiAgLy8gc3RlcCBmdW5jdGlvbiBoYXMgYSBjaGFuY2UgdG8gYWN0IG9uIHRoZSB2YWx1ZSBmaXJzdCwgd2hpY2ggY291bGQgY2hhbmdlXG4gIC8vIHRoZSB2YWx1ZSBvciBtYWtlIGl0IGFsdG9nZXRoZXIgdW5hdmFpbGFibGUuXG4gIC8vXG4gIC8vIElmIHRoZSBjaGFubmVsIGlzIHVuYnVmZmVyZWQgdGhpcyBwcm9jZXNzIGlzIHNraXBwZWQgKHRoZXJlIGNhbid0IGJlIGFcbiAgLy8gdHJhbnNkdWNlciBvbiBhbiB1bmJ1ZmZlcmVkIGNoYW5uZWwgYW55d2F5KS4gSWYgdGhlIGJ1ZmZlciBpcyBmdWxsLCB0aGVcbiAgLy8gdHJhbnNkdWNlcidzIHdvcmsgaXMgZGVmZXJyZWQgdW50aWwgbGF0ZXIgd2hlbiB0aGUgYnVmZmVyIGlzIG5vdCBmdWxsLlxuICBpZiAoaW1wbC5idWZmZXIgJiYgIWlzRnVsbChpbXBsLmJ1ZmZlcikpIHtcbiAgICBoYW5kbGVyLmNvbW1pdCgpO1xuICAgIGNvbnN0IGRvbmUgPSBpc1JlZHVjZWQoaW1wbC54Zm9ybVtwLnN0ZXBdKGltcGwuYnVmZmVyLCB2YWx1ZSkpO1xuXG4gICAgZm9yICg7Oykge1xuICAgICAgaWYgKGNvdW50KGltcGwuYnVmZmVyKSA9PT0gMCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHJlY2VpdmVyID0gZGVxdWV1ZShpbXBsLnJlY3ZzKTtcbiAgICAgIGlmIChyZWNlaXZlciA9PT0gRU1QVFkpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBpZiAocmVjZWl2ZXIuYWN0aXZlKSB7XG4gICAgICAgIGNhbGxiYWNrID0gcmVjZWl2ZXIuY29tbWl0KCk7XG4gICAgICAgIGNvbnN0IHZhbCA9IHJlbW92ZShpbXBsLmJ1ZmZlcik7XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgIGRpc3BhdGNoKCgpID0+IGNhbGxiYWNrKHZhbCkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGRvbmUpIHtcbiAgICAgIGNsb3NlKGltcGwpO1xuICAgIH1cbiAgICByZXR1cm4gYm94KHRydWUpO1xuICB9XG5cbiAgLy8gVGhpcyBsb29wIGhhcHBlbnMgaWYgdGhlIGNoYW5uZWwgaXMgdW5idWZmZXJlZCBhbmQgdGhlcmUgaXMgYXQgbGVhc3Qgb25lXG4gIC8vIHBlbmRpbmcgcmVjZWl2ZS4gKEJ1ZmZlcmVkIGNoYW5uZWxzIGJyZWFrIG91dCBvZiB0aGlzIGxvb3AgaW1tZWRpYXRlbHksXG4gIC8vIGJlY2F1c2UgaW4gb3JkZXIgZm9yIGEgYnVmZmVyZWQgY2hhbm5lbCB0byByZWFjaCB0aGlzIHBvaW50LCBpdHMgYnVmZmVyXG4gIC8vIG11c3QgaGF2ZSBiZWVuIGZ1bGwuIElmIHRoZSBidWZmZXIgaXMgZnVsbCwgdGhhdCBtZWFucyB0aGVyZSBhcmUgbm8gcGVuZGluZ1xuICAvLyByZWNlaXZlcyBhbmQgdGhlIGZpcnN0IG9uZSByZWFkIHdpbGwgYmUgRU1QVFkuKSBJdCBwcm9jZXNzZXMgdGhlIG5leHRcbiAgLy8gcGVuZGluZyByZWNlaXZlIGltbWVkaWF0ZWx5LlxuICBmb3IgKDs7KSB7XG4gICAgcmVjZWl2ZXIgPSBkZXF1ZXVlKGltcGwucmVjdnMpO1xuICAgIGlmIChyZWNlaXZlciA9PT0gRU1QVFkpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBpZiAocmVjZWl2ZXIuYWN0aXZlKSB7XG4gICAgICBoYW5kbGVyLmNvbW1pdCgpO1xuICAgICAgY2FsbGJhY2sgPSByZWNlaXZlci5jb21taXQoKTtcbiAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICBkaXNwYXRjaCgoKSA9PiBjYWxsYmFjayh2YWx1ZSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGJveCh0cnVlKTtcbiAgICB9XG4gIH1cblxuICAvLyBJZiB0aGVyZSBhcmUgbm8gcGVuZGluZyByZWNlaXZlcyBvbiBhbiB1bmJ1ZmZlcmVkIGNoYW5uZWwsIG9yIG9uIGEgYnVmZmVyZWRcbiAgLy8gY2hhbm5lbCB3aXRoIGEgZnVsbCBidWZmZXIsIHdlIHF1ZXVlIHRoZSBzZW5kIHRvIHRsZXQgaXQgd2FpdCBmb3IgYSByZWNlaXZlXG4gIC8vIHRvIGJlY29tZSBhdmFpbGFibGUuIFNlbmRzIHdob3NlIGhhbmRsZXJzIGhhdmUgZ29uZSBpbmFjdGl2ZSAod2hpY2ggaGFwcGVuc1xuICAvLyBpZiB0aGV5IHdlcmUgcHJvY2Vzc2VkIGFzIHBhcnQgb2YgYSBgc2VsZWN0YCBjYWxsKSBhcmUgcGVyaW9kaWNhbGx5IHB1cmdlZC5cbiAgaWYgKGltcGwuZGlydHlTZW5kcyA+IGltcGwubWF4RGlydHkpIHtcbiAgICBmaWx0ZXIoaW1wbC5zZW5kcywgc2VuZGVyID0+IHNlbmRlci5oYW5kbGVyLmFjdGl2ZSk7XG4gICAgaW1wbC5kaXJ0eVNlbmRzID0gMDtcbiAgfSBlbHNlIHtcbiAgICBpbXBsLmRpcnR5U2VuZHMrKztcbiAgfVxuXG4gIGlmIChxQ291bnQoaW1wbC5zZW5kcykgPj0gaW1wbC5tYXhRdWV1ZWQpIHtcbiAgICB0aHJvdyBFcnJvcihcbiAgICAgIGBObyBtb3JlIHRoYW4gJHtpbXBsLm1heFF1ZXVlZH0gcGVuZGluZyBzZW5kcyBhcmUgYWxsb3dlZCBvbiBhIHNpbmdsZSBjaGFubmVsYFxuICAgICk7XG4gIH1cbiAgZW5xdWV1ZShpbXBsLnNlbmRzLCBzZW5kQm94KHZhbHVlLCBoYW5kbGVyKSk7XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVJlY3YoaW1wbCwgaGFuZGxlcikge1xuICBsZXQgc2VuZGVyLCBzZW5kSGFuZGxlciwgY2FsbGJhY2s7XG5cbiAgLy8gUnVucyBpZiB0aGUgY2hhbm5lbCBpcyBidWZmZXJlZCBhbmQgdGhlIGJ1ZmZlcmVkIGlzIG5vdCBlbXB0eSAoYW4gZW1wdHlcbiAgLy8gYnVmZmVyIG1lYW5zIHRoZXJlIGFyZSBubyBwZW5kaW5nIHNlbmRzKS4gV2UgaW1tZWRpYXRlbHkgcHJvY2VzcyBhbnkgc2VuZHNcbiAgLy8gdGhhdCB3ZXJlIHF1ZXVlZCB3aGVuIHRoZXJlIHdlcmUgbm8gcGVuZGluZyByZWNlaXZlcywgdXAgdW50aWwgdGhlIGJ1ZmZlclxuICAvLyBpcyBmaWxsZWQgd2l0aCBzZW50IHZhbHVlcy5cbiAgaWYgKGltcGwuYnVmZmVyICYmIGNvdW50KGltcGwuYnVmZmVyKSA+IDApIHtcbiAgICBoYW5kbGVyLmNvbW1pdCgpO1xuICAgIGNvbnN0IHZhbHVlID0gcmVtb3ZlKGltcGwuYnVmZmVyKTtcblxuICAgIGZvciAoOzspIHtcbiAgICAgIGlmIChpc0Z1bGwoaW1wbC5idWZmZXIpKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgc2VuZGVyID0gZGVxdWV1ZShpbXBsLnNlbmRzKTtcbiAgICAgIGlmIChzZW5kZXIgPT09IEVNUFRZKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBzZW5kSGFuZGxlciA9IHNlbmRlci5oYW5kbGVyO1xuICAgICAgaWYgKHNlbmRIYW5kbGVyLmFjdGl2ZSkge1xuICAgICAgICBjYWxsYmFjayA9IHNlbmRIYW5kbGVyLmNvbW1pdCgpO1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICBkaXNwYXRjaCgoKSA9PiBjYWxsYmFjayh0cnVlKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzUmVkdWNlZChpbXBsLnhmb3JtW3Auc3RlcF0oaW1wbC5idWZmZXIsIHNlbmRlci52YWx1ZSkpKSB7XG4gICAgICAgICAgY2xvc2UoaW1wbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGJveCh2YWx1ZSk7XG4gIH1cblxuICAvLyBUaGlzIGxvb3AgcnVucyBvbiBhbiB1bmJ1ZmZlcmVkIGNoYW5uZWwgaWYgdGhlcmUgYXJlIGFueSBwZW5kaW5nIHNlbmRzLlxuICAvLyAoQnVmZmVyZWQgY2hhbm5lbHMgYnJlYWsgb3V0IG9mIHRoaXMgbG9vcCBpbW1lZGlhdGVseSBiZWNhdXNlIGluIG9yZGVyIHRvXG4gIC8vIGhhdmUgY29tZSB0aGlzIGZhciB3aXRob3V0IHJldHVybmluZywgdGhlIGNoYW5uZWwncyBidWZmZXIgbXVzdCBoYXZlIGJlZW5cbiAgLy8gZW1wdHkuIEFuIGVtcHR5IGJ1ZmZlciBtZWFucyB0aGVyZSBhcmUgbm8gcGVuZGluZyBzZW5kcywgc28gdGhlIGZpcnN0XG4gIC8vIHBlbmRpbmcgc2VuZCByZWFkIGZyb20gaXQgd2lsbCBiZSBFTVBUWS4pIEl0IHByb2Nlc3NlcyB0aGUgbmV4dCBwZW5kaW5nXG4gIC8vIHNlbmQgaW1tZWRpYXRlbHkuXG4gIGZvciAoOzspIHtcbiAgICBzZW5kZXIgPSBkZXF1ZXVlKGltcGwuc2VuZHMpO1xuICAgIGlmIChzZW5kZXIgPT09IEVNUFRZKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgc2VuZEhhbmRsZXIgPSBzZW5kZXIuaGFuZGxlcjtcbiAgICBpZiAoc2VuZEhhbmRsZXIuYWN0aXZlKSB7XG4gICAgICBjYWxsYmFjayA9IHNlbmRIYW5kbGVyLmNvbW1pdCgpO1xuICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIGRpc3BhdGNoKCgpID0+IGNhbGxiYWNrKHRydWUpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBib3goc2VuZGVyLnZhbHVlKTtcbiAgICB9XG4gIH1cblxuICAvLyBJZiB3ZSd2ZSBleGhhdXN0ZWQgYWxsIG9mIG91ciBwZW5kaW5nIHNlbmRzIGFuZCB0aGUgY2hhbm5lbCBpcyBtYXJrZWRcbiAgLy8gY2xvc2VkLCB3ZSBjYW4gZmluYWxseSByZXV0cm4gdGhlIGZhY3QgdGhhdCB0aGUgY2hhbm5lbCBpcyBjbG9zZWQuIFRoaXNcbiAgLy8gZW5zdXJlcyB0aGF0IGFueSBzZW5kcyB0aGF0IHdlcmUgYWxyZWFkeSBwZW5kaW5nIG9uIHRoZSBjaGFubmVsIGFyZVxuICAvLyBwcm9jZXNzZWQgYmVmb3JlIGNsb3N1cmUsIGV2ZW4gaWYgdGhlIGNoYW5uZWwgd2FzIGNsb3NlZCBiZWZvcmUgdGhhdCBjb3VsZFxuICAvLyBoYXBwZW4uXG4gIGlmIChpbXBsLmNsb3NlZCkge1xuICAgIGhhbmRsZXIuY29tbWl0KCk7XG4gICAgcmV0dXJuIGJveChDTE9TRUQpO1xuICB9XG5cbiAgLy8gSWYgYW4gdW5idWZmZXJlZCBjaGFubmVsIG9yIGEgYnVmZmVyZWQgY2hhbm5lbCB3aXRoIGFuIGVtcHR5IGJ1ZmZlciBoYXMgbm9cbiAgLy8gcGVuZGluZyBzZW5kcywgYW5kIGlmIHRoZSBjaGFubmVsIGlzIHN0aWxsIG9wZW4sIHRoZSByZWNlaXZlIGlzIHF1ZXVlZCB0b1xuICAvLyBiZSBwcm9jZXNzZWQgd2hlbiBhIHNlbmQgaXMgYXZhaWxhYmxlLiBSZWNlaXZlcyB3aG9zZSBoYW5kbGVycyBoYXZlIGdvbmVcbiAgLy8gaW5hY3RpdmUgYXMgdGhlIHJlc3VsdCBvZiBgc2VsZWN0YCBwcm9jZXNzaW5nIGFyZSBwZXJpb2RpY2FsbHkgcHVyZ2VkLlxuICBpZiAoaW1wbC5kaXJ0eVJlY3ZzID4gaW1wbC5tYXhEaXJ0eSkge1xuICAgIGZpbHRlcihpbXBsLnJlY3ZzLCByZWNlaXZlciA9PiByZWNlaXZlci5hY3RpdmUpO1xuICAgIGltcGwuZGlydHlSZWN2cyA9IDA7XG4gIH0gZWxzZSB7XG4gICAgaW1wbC5kaXJ0eVJlY3ZzKys7XG4gIH1cblxuICBpZiAocUNvdW50KGltcGwucmVjdnMpID49IGltcGwubWF4UXVldWVkKSB7XG4gICAgdGhyb3cgRXJyb3IoXG4gICAgICBgTm8gbW9yZSB0aGFuICR7aW1wbC5tYXhRdWV1ZWR9IHBlbmRpbmcgcmVjZWl2ZXMgYXJlIGFsbG93ZWQgb24gYSBzaW5nbGUgY2hhbm5lbGBcbiAgICApO1xuICB9XG4gIGVucXVldWUoaW1wbC5yZWN2cywgaGFuZGxlcik7XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIGNsb3NlKGltcGwpIHtcbiAgaWYgKGltcGwuY2xvc2VkKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGltcGwuY2xvc2VkID0gdHJ1ZTtcblxuICBsZXQgcmVjZWl2ZXIsIHNlbmRlciwgY2FsbGJhY2s7XG5cbiAgLy8gSWYgdGhlcmUgaXMgYSBidWZmZXIgYW5kIGl0IGhhcyBhdCBsZWFzdCBvbmUgdmFsdWUgaW4gaXQsIHNlbmQgdGhvc2UgdmFsdWVzXG4gIC8vIHRvIGFueSBwZW5kaW5nIHJlY2VpdmVzIHRoYXQgbWlnaHQgc3RpbGwgYmUgcXVldWVkLlxuICBpZiAoaW1wbC5idWZmZXIpIHtcbiAgICBpbXBsLnhmb3JtW3AucmVzdWx0XShpbXBsLmJ1ZmZlcik7XG4gICAgZm9yICg7Oykge1xuICAgICAgaWYgKGNvdW50KGltcGwuYnVmZmVyKSA9PT0gMCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHJlY2VpdmVyID0gZGVxdWV1ZShpbXBsLnJlY3ZzKTtcbiAgICAgIGlmIChyZWNlaXZlciA9PT0gRU1QVFkpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBpZiAocmVjZWl2ZXIuYWN0aXZlKSB7XG4gICAgICAgIGNhbGxiYWNrID0gcmVjZWl2ZXIuY29tbWl0KCk7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gcmVtb3ZlKGltcGwuYnVmZmVyKTtcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgZGlzcGF0Y2goKCkgPT4gY2FsbGJhY2sodmFsdWUpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIE9uY2UgdGhlIGJ1ZmZlciBpcyBlbXB0eSAob3IgaWYgdGhlcmUgaXNuJ3QgYSBidWZmZXIgYXQgYWxsKSwgc2VuZCBDTE9TRURcbiAgLy8gdG8gYWxsIHJlbWFpbmluZyBxdWV1ZWQgcmVjZWl2ZXMuXG4gIGZvciAoOzspIHtcbiAgICByZWNlaXZlciA9IGRlcXVldWUoaW1wbC5yZWN2cyk7XG4gICAgaWYgKHJlY2VpdmVyID09PSBFTVBUWSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGlmIChyZWNlaXZlci5hY3RpdmUpIHtcbiAgICAgIGNhbGxiYWNrID0gcmVjZWl2ZXIuY29tbWl0KCk7XG4gICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgZGlzcGF0Y2goKCkgPT4gY2FsbGJhY2soQ0xPU0VEKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gU2VuZCBgZmFsc2VgIHRvIGFueSByZW1haW5pbmcgcXVldWVkIHNlbmRzLlxuICBmb3IgKDs7KSB7XG4gICAgc2VuZGVyID0gZGVxdWV1ZShpbXBsLnNlbmRzKTtcbiAgICBpZiAoc2VuZGVyID09PSBFTVBUWSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGlmIChzZW5kZXIuaGFuZGxlci5hY3RpdmUpIHtcbiAgICAgIGNhbGxiYWNrID0gc2VuZGVyLmhhbmRsZXIuY29tbWl0KCk7XG4gICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgZGlzcGF0Y2goKCkgPT4gY2FsbGJhY2soZmFsc2UpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IHtcbiAgQ0xPU0VELFxuICBNQVhfRElSVFksXG4gIE1BWF9RVUVVRUQsXG4gIGNoYW5uZWwsXG4gIGhhbmRsZVNlbmQsXG4gIGhhbmRsZVJlY3YsXG4gIGNsb3NlLFxuICBib3gsXG4gIGlzQm94XG59O1xuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuLy9cbi8vIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuLy8gaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcblxuaW1wb3J0IHtcbiAgQ0xPU0VELFxuICBjaGFubmVsIGFzIGNoYW5JbXBsLFxuICBoYW5kbGVTZW5kLFxuICBoYW5kbGVSZWN2LFxuICBjbG9zZSBhcyBjbG9zZUltcGwsXG4gIE1BWF9ESVJUWSxcbiAgTUFYX1FVRVVFRFxufSBmcm9tIFwiLi9oYW5kbGVyXCI7XG5pbXBvcnQgeyBERUZBVUxULCBzZWxlY3QsIHNlbGVjdEFzeW5jLCB2YWx1ZSwgY2hhbm5lbCB9IGZyb20gXCIuL3NlbGVjdFwiO1xuaW1wb3J0IHsgYWRkLCBmaXhlZCwgaXNCdWZmZXIgfSBmcm9tIFwibW9kdWxlcy9idWZmZXJcIjtcbmltcG9ydCB7IHByb3RvY29scyBhcyBwIH0gZnJvbSBcIm1vZHVsZXMvcHJvdG9jb2xcIjtcblxuY29uc3QgREVGQVVMVF9IQU5ETEVSID0gKCkgPT4gQ0xPU0VEO1xuXG5mdW5jdGlvbiBvcEhhbmRsZXIoZm4pIHtcbiAgcmV0dXJuIE9iamVjdC5jcmVhdGUobnVsbCwge1xuICAgIGFjdGl2ZToge1xuICAgICAgdmFsdWU6IHRydWVcbiAgICB9LFxuICAgIGNvbW1pdDoge1xuICAgICAgdmFsdWU6ICgpID0+IGZuXG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlRXhjZXB0aW9uKGJ1ZmZlciwgaGFuZGxlciwgZXgpIHtcbiAgY29uc3QgdmFsdWUgPSBoYW5kbGVyKGV4KTtcbiAgaWYgKHZhbHVlICE9PSBDTE9TRUQpIHtcbiAgICBhZGQoYnVmZmVyLCB2YWx1ZSk7XG4gIH1cbiAgcmV0dXJuIGJ1ZmZlcjtcbn1cblxuZnVuY3Rpb24gaGFuZGxlclRyYW5zZHVjZXIoeGZvcm0sIGhhbmRsZXIgPSBERUZBVUxUX0hBTkRMRVIpIHtcbiAgcmV0dXJuIHtcbiAgICBbcC5zdGVwXShidWZmZXIsIGlucHV0KSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4geGZvcm1bcC5zdGVwXShidWZmZXIsIGlucHV0KTtcbiAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgIHJldHVybiBoYW5kbGVFeGNlcHRpb24oYnVmZmVyLCBoYW5kbGVyLCBleCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIFtwLnJlc3VsdF0oYnVmZmVyKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4geGZvcm1bcC5yZXN1bHRdKGJ1ZmZlcik7XG4gICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICByZXR1cm4gaGFuZGxlRXhjZXB0aW9uKGJ1ZmZlciwgaGFuZGxlciwgZXgpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cblxuY29uc3QgYnVmZmVyUmVkdWNlciA9IHtcbiAgW3AuaW5pdF0oKSB7XG4gICAgdGhyb3cgRXJyb3IoXCJpbml0IG5vdCBhdmFpbGFibGVcIik7XG4gIH0sXG5cbiAgW3Auc3RlcF0oYnVmZmVyLCBpbnB1dCkge1xuICAgIGFkZChidWZmZXIsIGlucHV0KTtcbiAgICByZXR1cm4gYnVmZmVyO1xuICB9LFxuXG4gIFtwLnJlc3VsdF0oYnVmZmVyKSB7XG4gICAgcmV0dXJuIGJ1ZmZlcjtcbiAgfVxufTtcblxuZnVuY3Rpb24gcGFyc2VBcmdzKGJ1ZmZlciwgb3B0aW9ucywgZGVmYXVsdE9wdGlvbnMpIHtcbiAgbGV0IGJ1ZjtcbiAgbGV0IG9wdHM7XG5cbiAgaWYgKCFidWZmZXIpIHtcbiAgICAvLyBzYW1lIGZvciAwLCBudWxsLCBvciB1bmRlZmluZWRcbiAgICBidWYgPSBudWxsO1xuICAgIG9wdHMgPSBvcHRpb25zO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBidWZmZXIgPT09IFwibnVtYmVyXCIpIHtcbiAgICBidWYgPSBmaXhlZChidWZmZXIpO1xuICAgIG9wdHMgPSBvcHRpb25zO1xuICB9IGVsc2UgaWYgKGlzQnVmZmVyKGJ1ZmZlcikpIHtcbiAgICBidWYgPSBidWZmZXI7XG4gICAgb3B0cyA9IG9wdGlvbnM7XG4gIH0gZWxzZSB7XG4gICAgLy8gSWYgbm8gYnVmZmVyIGlzIHNwZWNpZmllZCBidXQgYSB0cmFuc2R1Y2VyIGlzLCB3ZSBhc3N1bWUgZml4ZWQoMSlcbiAgICAvLyBpbnN0ZWFkIG9mIG5vIGJ1ZmZlclxuICAgIGJ1ZiA9IGJ1ZmZlcj8udHJhbnNkdWNlciA/IGZpeGVkKDEpIDogbnVsbDtcbiAgICBvcHRzID0gYnVmZmVyO1xuICB9XG5cbiAgY29uc3QgeyB0cmFuc2R1Y2VyLCBoYW5kbGVyLCBtYXhEaXJ0eSwgbWF4UXVldWVkLCB0aW1lb3V0IH0gPSBPYmplY3QuYXNzaWduKFxuICAgIHt9LFxuICAgIGRlZmF1bHRPcHRpb25zLFxuICAgIG9wdHNcbiAgKTtcbiAgcmV0dXJuIHsgYnVmLCB0cmFuc2R1Y2VyLCBoYW5kbGVyLCBtYXhEaXJ0eSwgbWF4UXVldWVkLCB0aW1lb3V0IH07XG59XG5cbmZ1bmN0aW9uIGNoYW4oYnVmZmVyLCBvcHRpb25zKSB7XG4gIGNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICAgIG1heERpcnR5OiBNQVhfRElSVFksXG4gICAgbWF4UXVldWVkOiBNQVhfUVVFVUVEXG4gIH07XG4gIGNvbnN0IHsgYnVmLCB0cmFuc2R1Y2VyLCBoYW5kbGVyLCBtYXhEaXJ0eSwgbWF4UXVldWVkLCB0aW1lb3V0IH0gPSBwYXJzZUFyZ3MoXG4gICAgYnVmZmVyLFxuICAgIG9wdGlvbnMsXG4gICAgZGVmYXVsdE9wdGlvbnNcbiAgKTtcblxuICBpZiAodHJhbnNkdWNlciAmJiAhYnVmKSB7XG4gICAgdGhyb3cgRXJyb3IoXCJPbmx5IGJ1ZmZlcmVkIGNoYW5uZWxzIGNhbiB1c2UgdHJhbnNkdWNlcnNcIik7XG4gIH1cblxuICBjb25zdCB4ZiA9IGhhbmRsZXJUcmFuc2R1Y2VyKFxuICAgIHRyYW5zZHVjZXIgPyB0cmFuc2R1Y2VyKGJ1ZmZlclJlZHVjZXIpIDogYnVmZmVyUmVkdWNlcixcbiAgICBoYW5kbGVyXG4gICk7XG5cbiAgY29uc3QgaW1wbCA9IGNoYW5JbXBsKGJ1ZiwgeGYsIG1heERpcnR5LCBtYXhRdWV1ZWQpO1xuXG4gIGNvbnN0IGlzVGltZWQgPSB0eXBlb2YgdGltZW91dCA9PT0gXCJudW1iZXJcIjtcbiAgaWYgKGlzVGltZWQpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IGNsb3NlSW1wbChpbXBsKSwgdGltZW91dCk7XG4gIH1cblxuICBjb25zdCBjaCA9IE9iamVjdC5jcmVhdGUobnVsbCwge1xuICAgIGltcGw6IHtcbiAgICAgIHZhbHVlOiBpbXBsXG4gICAgfSxcbiAgICBpc0J1ZmZlcmVkOiB7XG4gICAgICB2YWx1ZTogISFidWZcbiAgICB9LFxuICAgIGlzVGltZWQ6IHtcbiAgICAgIHZhbHVlOiBpc1RpbWVkXG4gICAgfVxuICB9KTtcblxuICBhc3luYyBmdW5jdGlvbiogaXRlcmF0b3IoKSB7XG4gICAgZm9yICg7Oykge1xuICAgICAgY29uc3QgdmFsdWUgPSBhd2FpdCByZWN2KGNoKTtcbiAgICAgIGlmICh2YWx1ZSA9PT0gQ0xPU0VEKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgeWllbGQgdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgY2hbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gaXRlcmF0b3I7XG5cbiAgcmV0dXJuIGNoO1xufVxuXG5mdW5jdGlvbiB0aW1lZENoYW4oZGVsYXkgPSAwKSB7XG4gIHJldHVybiBjaGFuKHsgdGltZW91dDogZGVsYXkgfSk7XG59XG5cbmZ1bmN0aW9uIHRyYW5zQ2hhbih0cmFuc2R1Y2VyLCBoYW5kbGVyKSB7XG4gIHJldHVybiBjaGFuKHsgdHJhbnNkdWNlciwgaGFuZGxlciB9KTtcbn1cblxuZnVuY3Rpb24gaXNDbG9zZWQoY2hhbm5lbCkge1xuICByZXR1cm4gY2hhbm5lbC5pbXBsLmNsb3NlZDtcbn1cblxuZnVuY3Rpb24gaXNCdWZmZXJlZChjaGFubmVsKSB7XG4gIHJldHVybiBjaGFubmVsLmlzQnVmZmVyZWQ7XG59XG5cbmZ1bmN0aW9uIGlzVGltZWQoY2hhbm5lbCkge1xuICByZXR1cm4gY2hhbm5lbC5pc1RpbWVkO1xufVxuXG5mdW5jdGlvbiBzZW5kQXN5bmMoY2hhbm5lbCwgdmFsdWUsIGNhbGxiYWNrID0gKCkgPT4ge30pIHtcbiAgY29uc3QgcmVzdWx0ID0gaGFuZGxlU2VuZChjaGFubmVsLmltcGwsIHZhbHVlLCBvcEhhbmRsZXIoY2FsbGJhY2spKTtcbiAgaWYgKHJlc3VsdCAmJiBjYWxsYmFjaykge1xuICAgIGNhbGxiYWNrKHJlc3VsdC52YWx1ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVjdkFzeW5jKGNoYW5uZWwsIGNhbGxiYWNrID0gKCkgPT4ge30pIHtcbiAgY29uc3QgcmVzdWx0ID0gaGFuZGxlUmVjdihjaGFubmVsLmltcGwsIG9wSGFuZGxlcihjYWxsYmFjaykpO1xuICBpZiAocmVzdWx0ICYmIGNhbGxiYWNrKSB7XG4gICAgY2FsbGJhY2socmVzdWx0LnZhbHVlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzZW5kKGNoYW5uZWwsIHZhbHVlKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICBzZW5kQXN5bmMoY2hhbm5lbCwgdmFsdWUsIHJlc29sdmUpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVjdihjaGFubmVsKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICByZWN2QXN5bmMoY2hhbm5lbCwgcmVzb2x2ZSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZWN2T3JUaHJvdyhjaGFubmVsKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgcmVjdkFzeW5jKGNoYW5uZWwsIHJlc3VsdCA9PiB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mLmNhbGwoRXJyb3IucHJvdG90eXBlLCByZXN1bHQpKSB7XG4gICAgICAgIHJlamVjdChyZXN1bHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY2xvc2UoY2hhbm5lbCkge1xuICBjbG9zZUltcGwoY2hhbm5lbC5pbXBsKTtcbn1cblxuZXhwb3J0IHtcbiAgQ0xPU0VELFxuICBERUZBVUxULFxuICBjaGFuLFxuICB0aW1lZENoYW4sXG4gIHRyYW5zQ2hhbixcbiAgaXNDbG9zZWQsXG4gIGlzQnVmZmVyZWQsXG4gIGlzVGltZWQsXG4gIHNlbmRBc3luYyxcbiAgcmVjdkFzeW5jLFxuICBzZWxlY3RBc3luYyxcbiAgc2VuZCxcbiAgcmVjdixcbiAgcmVjdk9yVGhyb3csXG4gIHNlbGVjdCxcbiAgY2xvc2UsXG4gIHZhbHVlLFxuICBjaGFubmVsXG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG5cbmltcG9ydCB7IGJveCwgaGFuZGxlU2VuZCwgaGFuZGxlUmVjdiwgaXNCb3ggfSBmcm9tIFwiLi9oYW5kbGVyXCI7XG5cbmNvbnN0IERFRkFVTFQgPSBTeW1ib2woXCJERUZBVUxUXCIpO1xuXG5mdW5jdGlvbiBzZWxlY3RIYW5kbGVyKGFjdGl2ZSwgZm4pIHtcbiAgcmV0dXJuIE9iamVjdC5jcmVhdGUobnVsbCwge1xuICAgIGFjdGl2ZToge1xuICAgICAgZ2V0KCkge1xuICAgICAgICByZXR1cm4gYWN0aXZlLnZhbHVlO1xuICAgICAgfSxcbiAgICB9LFxuXG4gICAgY29tbWl0OiB7XG4gICAgICB2YWx1ZTogKCkgPT4ge1xuICAgICAgICBhY3RpdmUudmFsdWUgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIGZuO1xuICAgICAgfSxcbiAgICB9LFxuICB9KTtcbn1cblxuZnVuY3Rpb24gcmFuZG9tQXJyYXkodXBwZXIpIHtcbiAgY29uc3QgYXJyYXkgPSBbXTtcbiAgZm9yIChsZXQgayA9IDA7IGsgPCB1cHBlcjsgaysrKSB7XG4gICAgYXJyYXkucHVzaChrKTtcbiAgfVxuICBmb3IgKGxldCBqID0gdXBwZXIgLSAxOyBqID4gMDsgai0tKSB7XG4gICAgY29uc3QgaSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChqICsgMSkpO1xuICAgIGNvbnN0IHRlbXAgPSBhcnJheVtqXTtcbiAgICBhcnJheVtqXSA9IGFycmF5W2ldO1xuICAgIGFycmF5W2ldID0gdGVtcDtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbmZ1bmN0aW9uIHNlbGVjdFJlc3VsdCh2YWx1ZSwgY2hhbm5lbCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuY3JlYXRlKG51bGwpLCB7IHZhbHVlLCBjaGFubmVsIH0pO1xufVxuXG5mdW5jdGlvbiBzZWxlY3RBc3luYyhvcHMsIGNhbGxiYWNrID0gKCkgPT4ge30sIG9wdGlvbnMgPSB7fSkge1xuICBjb25zdCBjb3VudCA9IG9wcy5sZW5ndGg7XG4gIGlmIChjb3VudCA9PT0gMCkge1xuICAgIHRocm93IEVycm9yKFwic2VsZWN0IGNhbGxlZCB3aXRoIG5vIG9wZXJhdGlvbnNcIik7XG4gIH1cblxuICBjb25zdCBwcmlvcml0eSA9ICEhb3B0aW9ucy5wcmlvcml0eTtcbiAgY29uc3QgaW5kaWNlcyA9IHByaW9yaXR5ID8gW10gOiByYW5kb21BcnJheShjb3VudCk7XG5cbiAgY29uc3QgYWN0aXZlID0gYm94KHRydWUpO1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZVNlbGVjdEhhbmRsZXIoY2hhbm5lbCkge1xuICAgIHJldHVybiBzZWxlY3RIYW5kbGVyKGFjdGl2ZSwgdmFsdWUgPT4ge1xuICAgICAgY2FsbGJhY2soc2VsZWN0UmVzdWx0KHZhbHVlLCBjaGFubmVsKSk7XG4gICAgfSk7XG4gIH1cblxuICBsZXQgcmVzdWx0O1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgIC8vIENob29zZSBhbiBvcGVyYXRpb24uIElmIGBwcmlvcml0eWAgaXMgdHJ1ZSB0aGVuIGl0J3MgdGhlIG5leHQgaW5kZXgsXG4gICAgLy8gb3RoZXJ3aXNlIGl0J3MgcmFuZG9tXG4gICAgY29uc3Qgb3AgPSBvcHNbcHJpb3JpdHkgPyBpIDogaW5kaWNlc1tpXV07XG4gICAgbGV0IGNoYW5uZWwsIHZhbHVlO1xuXG4gICAgLy8gQXBwbHkgZXZlcnkgb3BlcmF0aW9uIHRvIGl0cyBjaGFubmVsLCBvbmUgYXQgYSB0aW1lXG4gICAgaWYgKEFycmF5LmlzQXJyYXkob3ApKSB7XG4gICAgICBbY2hhbm5lbCwgdmFsdWVdID0gb3A7XG4gICAgICByZXN1bHQgPSBoYW5kbGVTZW5kKGNoYW5uZWwuaW1wbCwgdmFsdWUsIGNyZWF0ZVNlbGVjdEhhbmRsZXIoY2hhbm5lbCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjaGFubmVsID0gb3A7XG4gICAgICByZXN1bHQgPSBoYW5kbGVSZWN2KGNoYW5uZWwuaW1wbCwgY3JlYXRlU2VsZWN0SGFuZGxlcihjaGFubmVsKSk7XG4gICAgfVxuXG4gICAgLy8gV2UgY2hlY2sgZm9yIGJveCBoZXJlIGJlY2F1c2UgYSBib3ggZnJvbSBhIGNoYW5uZWwgaW5kaWNhdGVzIHRoYXQgdGhlXG4gICAgLy8gdmFsdWUgaXMgaW1tZWRpYXRlbHkgYXZhaWxhYmxlICh0aGF0IHRoZXJlIGlzIG5vIG5lZWQgdG8gYmxvY2sgdG8gZ2V0IHRoZVxuICAgIC8vIHZhbHVlKS4gSWYgdGhpcyBoYXBwZW5zLCB3ZSBleGVjdXRlIHRoZSBjYWxsYmFjayBpbW1lZGlhdGVseSB3aXRoIHRoYXRcbiAgICAvLyB2YWx1ZSBhbmQgY2hhbm5lbCBhbmQgc3RvcCBxdWV1ZWluZyBvdGhlciBvcGVyYXRpb25zLlxuICAgIGlmIChpc0JveChyZXN1bHQpKSB7XG4gICAgICBjYWxsYmFjayhzZWxlY3RSZXN1bHQocmVzdWx0LnZhbHVlLCBjaGFubmVsKSk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICAvLyBJZiBub25lIG9mIHRoZSBvcGVyYWV0aW9ucyBpbW1lZGlhdGVseSByZXR1cm5lZCB2YWx1ZXMgKHRoZXkgYXJlIGFsbFxuICAvLyBibG9ja2VkKSwgYW5kIHdlIGhhdmUgc2V0IGEgZGVmYXVsdCBjaGFubmVsIG9wdGlvbiwgdGhlbiByZXR1cm4gdGhlIHZhbHVlXG4gIC8vIGlmIHRoZSBkZWZhdWx0IGNoYW5uZWwgcmF0aGVyIHRoYW4gd2FpdGluZyBmb3IgdGhlIHF1ZXVlZCBvcGVyYXRpb25zIHRvXG4gIC8vIGNvbXBsZXRlLlxuICBpZiAoXG4gICAgIWlzQm94KHJlc3VsdCkgJiZcbiAgICBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob3B0aW9ucywgXCJkZWZhdWx0XCIpXG4gICkge1xuICAgIGlmIChhY3RpdmUudmFsdWUpIHtcbiAgICAgIGFjdGl2ZS52YWx1ZSA9IGZhbHNlO1xuICAgICAgY2FsbGJhY2soc2VsZWN0UmVzdWx0KG9wdGlvbnMuZGVmYXVsdCwgREVGQVVMVCkpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBzZWxlY3Qob3BzLCBvcHRpb25zID0ge30pIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgIHNlbGVjdEFzeW5jKG9wcywgcmVzb2x2ZSwgb3B0aW9ucyk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB2YWx1ZShzZWxlY3RSZXN1bHQpIHtcbiAgcmV0dXJuIHNlbGVjdFJlc3VsdC52YWx1ZTtcbn1cblxuZnVuY3Rpb24gY2hhbm5lbChzZWxlY3RSZXN1bHQpIHtcbiAgcmV0dXJuIHNlbGVjdFJlc3VsdC5jaGFubmVsO1xufVxuXG5leHBvcnQgeyBERUZBVUxULCBzZWxlY3QsIHNlbGVjdEFzeW5jLCB2YWx1ZSwgY2hhbm5lbCB9O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG5cbmltcG9ydCB7XG4gIHF1ZXVlIGFzIHEsXG4gIEVNUFRZLFxuICBjb3VudCBhcyBxQ291bnQsXG4gIGRlcXVldWUsXG4gIGVucXVldWVcbn0gZnJvbSBcIm1vZHVsZXMvcXVldWVcIjtcbmNvbnN0IHF1ZXVlID0gcSgpO1xuXG5jb25zdCBTRVRfSU1NRURJQVRFID0gU3ltYm9sKFwic2V0SW1tZWRpYXRlXCIpO1xuY29uc3QgTUVTU0FHRV9DSEFOTkVMID0gU3ltYm9sKFwiTWVzc2FnZUNoYW5uZWxcIik7XG5jb25zdCBTRVRfVElNRU9VVCA9IFN5bWJvbChcInNldFRpbWVvdXRcIik7XG5cbmNvbnN0IG9wdGlvbnMgPSB7XG4gIGJhdGNoU2l6ZTogMTAyNCxcbiAgZGlzcGF0Y2hNZXRob2Q6IFNFVF9JTU1FRElBVEVcbn07XG5cbmxldCBkaXNwYXRjaGVyID0gY3JlYXRlRGlzcGF0Y2hlcigpO1xubGV0IHJ1bm5pbmcgPSBmYWxzZTtcbmxldCBxdWV1ZWQgPSB0cnVlO1xuXG5mdW5jdGlvbiBjcmVhdGVEaXNwYXRjaGVyKCkge1xuICBzd2l0Y2ggKGNhbGNEaXNwYXRjaE1ldGhvZCgpKSB7XG4gICAgLy8gV2UgcHJlZmVyIGBzZXRJbW1lZGlhdGVgIGlmIGl0J3MgYXZhaWxhYmxlLCBidXQgaXQncyBvbmx5IGF2YWlsYWJsZSBpblxuICAgIC8vIE5vZGUgYW5kIHNvbWUgb2xkIGJyb3dzZXJzLlxuICAgIGNhc2UgU0VUX0lNTUVESUFURTpcbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGlmICghKHF1ZXVlZCAmJiBydW5uaW5nKSkge1xuICAgICAgICAgIHF1ZXVlZCA9IHRydWU7XG4gICAgICAgICAgc2V0SW1tZWRpYXRlKHByb2Nlc3NUYXNrcyk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAvLyBNb3N0IG1vZGVybiBicm93c2VycyBpbXBsZW1lbnQgYE1lc3NhZ2VDaGFubmVsYC4gVGhpcyBpcyB0aGUgcHJlZmVycmVkXG4gICAgLy8gbWV0aG9kIGluIGJyb3dzZXIgZW52aXJvbm1lbnRzIHdoZXJlIGBzZXRJbW1lZGlhdGVgIGlzbid0IGF2YWlsYWJsZS5cbiAgICBjYXNlIE1FU1NBR0VfQ0hBTk5FTDoge1xuICAgICAgY29uc3QgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICAgICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSAoKSA9PiBwcm9jZXNzVGFza3MoKTtcbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGlmICghKHF1ZXVlZCAmJiBydW5uaW5nKSkge1xuICAgICAgICAgIHF1ZXVlZCA9IHRydWU7XG4gICAgICAgICAgY2hhbm5lbC5wb3J0Mi5wb3N0TWVzc2FnZSgwKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBJZiBhbGwgZWxzZSBmYWlscywganVzdCB1c2UgYHNldFRpbWVvdXRgLiBJdCdzIGEgbGl0dGxlIHNsb3dlciB0aGFuIHRoZVxuICAgIC8vIG90aGVyIG1ldGhvZHMsIGJ1dCBpdCdzIGF2YWlsYWJsZSBldmVyeXdoZXJlLlxuICAgIGNhc2UgU0VUX1RJTUVPVVQ6XG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBpZiAoIShxdWV1ZWQgJiYgcnVubmluZykpIHtcbiAgICAgICAgICBxdWV1ZWQgPSB0cnVlO1xuICAgICAgICAgIHNldFRpbWVvdXQocHJvY2Vzc1Rhc2tzLCAwKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjYWxjRGlzcGF0Y2hNZXRob2QoKSB7XG4gIHN3aXRjaCAob3B0aW9ucy5kaXNwYXRjaE1ldGhvZCkge1xuICAgIGNhc2UgTUVTU0FHRV9DSEFOTkVMOlxuICAgICAgaWYgKHR5cGVvZiBNZXNzYWdlQ2hhbm5lbCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICByZXR1cm4gTUVTU0FHRV9DSEFOTkVMO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFNFVF9USU1FT1VUO1xuXG4gICAgY2FzZSBTRVRfVElNRU9VVDpcbiAgICAgIHJldHVybiBTRVRfVElNRU9VVDtcblxuICAgIGRlZmF1bHQ6XG4gICAgICBpZiAodHlwZW9mIHNldEltbWVkaWF0ZSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICByZXR1cm4gU0VUX0lNTUVESUFURTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgTWVzc2FnZUNoYW5uZWwgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgcmV0dXJuIE1FU1NBR0VfQ0hBTk5FTDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBTRVRfVElNRU9VVDtcbiAgfVxufVxuXG5mdW5jdGlvbiBwcm9jZXNzVGFza3MoKSB7XG4gIHJ1bm5pbmcgPSB0cnVlO1xuICBxdWV1ZWQgPSBmYWxzZTtcbiAgbGV0IGNvdW50ID0gMDtcblxuICBmb3IgKDs7KSB7XG4gICAgY29uc3QgdGFzayA9IGRlcXVldWUocXVldWUpO1xuICAgIGlmICh0YXNrID09PSBFTVBUWSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgdGFzaygpO1xuXG4gICAgaWYgKGNvdW50ID49IG9wdGlvbnMuYmF0Y2hTaXplKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgY291bnQrKztcblxuICAgIHJ1bm5pbmcgPSBmYWxzZTtcbiAgICBpZiAocUNvdW50KHF1ZXVlKSkge1xuICAgICAgZGlzcGF0Y2hlcigpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBzZXREaXNwYXRjaGVyKCkge1xuICBkaXNwYXRjaGVyID0gY3JlYXRlRGlzcGF0Y2hlcigpO1xufVxuXG5mdW5jdGlvbiBjb25maWcob3B0cyA9IG51bGwpIHtcbiAgaWYgKG9wdHMgPT09IG51bGwpIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucyk7XG4gIH1cblxuICBmb3IgKGNvbnN0IGtleSBpbiBvcHRpb25zKSB7XG4gICAgaWYgKGtleSBpbiBvcHRzKSB7XG4gICAgICBvcHRpb25zW2tleV0gPSBvcHRzW2tleV07XG5cbiAgICAgIGlmIChrZXkgPT09IFwiZGlzcGF0Y2hNZXRob2RcIikge1xuICAgICAgICBzZXREaXNwYXRjaGVyKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGRpc3BhdGNoKHRhc2spIHtcbiAgZW5xdWV1ZShxdWV1ZSwgdGFzayk7XG4gIGRpc3BhdGNoZXIoKTtcbn1cblxuZXhwb3J0IHsgU0VUX0lNTUVESUFURSwgTUVTU0FHRV9DSEFOTkVMLCBTRVRfVElNRU9VVCwgY29uZmlnLCBkaXNwYXRjaCB9O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG5cbmltcG9ydCB7IHRpbWVkQ2hhbiwgcmVjdkFzeW5jIH0gZnJvbSBcIm1vZHVsZXMvY2hhbm5lbFwiO1xuXG5mdW5jdGlvbiBzbGVlcChkZWxheSA9IDApIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgIGNvbnN0IGNoID0gdGltZWRDaGFuKGRlbGF5KTtcbiAgICByZWN2QXN5bmMoY2gsIHJlc29sdmUpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZ28oZm4sIC4uLmFyZ3MpIHtcbiAgcmV0dXJuIGZuKC4uLmFyZ3MpO1xufVxuXG5leHBvcnQgeyBzbGVlcCwgZ28gfTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG5jb25zdCBwcm90b2NvbHMgPSBPYmplY3QuY3JlYXRlKG51bGwsIHtcbiAgaW5pdDoge1xuICAgIHZhbHVlOiBTeW1ib2wuZm9yKFwidHJhbnNkdWNlci9pbml0XCIpXG4gIH0sXG4gIHN0ZXA6IHtcbiAgICB2YWx1ZTogU3ltYm9sLmZvcihcInRyYW5zZHVjZXIvc3RlcFwiKVxuICB9LFxuICByZXN1bHQ6IHtcbiAgICB2YWx1ZTogU3ltYm9sLmZvcihcInRyYW5zZHVjZXIvcmVzdWx0XCIpXG4gIH0sXG4gIHJlZHVjZWQ6IHtcbiAgICB2YWx1ZTogU3ltYm9sLmZvcihcInRyYW5zZHVjZXIvcmVkdWNlZFwiKVxuICB9LFxuICB2YWx1ZToge1xuICAgIHZhbHVlOiBTeW1ib2wuZm9yKFwidHJhbnNkdWNlci92YWx1ZVwiKVxuICB9XG59KTtcblxuZXhwb3J0IHsgcHJvdG9jb2xzIH07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuLyoqXG4gKiBQcm92aWRlcyBhbiBlZmZpY2llbnQgZ2VuZXJhbC1wdXJwb3NlIHF1ZXVlLlxuICpcbiAqIEBtb2R1bGUgY2hhbmtvL3F1ZXVlXG4gKi9cblxuLyoqXG4gKiBBIGdlbmVyYWwgcHVycG9zZSwgaGlnaGx5IGVmZmljaWVudCBKYXZhU2NyaXB0IHF1ZXVlLiBJdCBpcyBiYWNrZWQgYnkgYVxuICogSmF2YVNjcmlwdCBhcnJheSwgYnV0IGl0IGRvZXMgbm90IHVzZSBgdW5zaGlmdGAgdG8gdGFrZSBlbGVtZW50cyBvZmYgdGhlXG4gKiBhcnJheSBiZWNhdXNlIHVuc2hpZnQgY2F1c2VzIGVsZW1lbnRzIHRvIGJlIGNvcGllZCBldmVyeSB0aW1lIGl0J3MgdXNlZC5cbiAqIEluc3RlYWQsIGEgcG9pbnRlciBpcyBtYWludGFpbmVkIHRoYXQga2VlcHMgdHJhY2sgb2YgdGhlIGxvY2F0aW9uIG9mIHRoZSBuZXh0XG4gKiBlbGVtZW50IHRvIGJlIGRlcXVldWVkLCBhbmQgd2hlbiB0aGF0IGRlcXVldWUgaGFwcGVucywgdGhlIHBvaW50ZXIgc2ltcGx5XG4gKiBtb3Zlcy4gV2hlbiB0aGUgZW1wdHkgc3BhY2UgYXQgdGhlIGhlYWQgb2YgdGhlIGFycmF5IGdldHMgbGFyZ2UgZW5vdWdoLCBpdCdzXG4gKiByZW1vdmVkIGJ5IGEgc2luZ2xlIHNsaWNlIG9wZXJhdGlvbi5cbiAqXG4gKiBQdXR0aW5nIGVsZW1lbnRzIGludG8gdGhlIHF1ZXVlIGlzIGp1c3QgZG9uZSB3aXRoIGEgYmFzaWMgYHB1c2hgLCB3aGljaCAqaXMqXG4gKiBoaWdobHkgZWZmaWNpZW50LlxuICpcbiAqIFRoaXMgdHlwZSBvZiBxdWV1ZSBpcyBwb3NzaWJsZSBpbiBKYXZhU2NyaXB0IGJlY2F1c2UgSlMgYXJyYXlzIGFyZSByZXNpemFibGUuXG4gKiBJbiBsYW5ndWFnZXMgd2l0aCBmaXhlZC1zaXplIGFycmF5cywgYSByZXNpemluZyBvcGVyYXRpb24gd291bGQgaGF2ZSB0byBiZVxuICogcnVuIGVhY2ggdGltZSB0aGUgcXVldWUgZmlsbHMuXG4gKlxuICogQG5hbWVzcGFjZSBRdWV1ZVxuICovXG5cbi8qKlxuICogVGhlIHZhbHVlIHJldHVybmVkIHdoZW4gYSBxdWV1ZSBpcyByZWFkIHdoZW4gaXQncyBlbXB0eS5cbiAqXG4gKiBUaGlzIHNwZWNpYWwgdmFsdWUgaXMgdXNlZCBiZWNhdXNlIGBudWxsYCBhbmQgYHVuZGVmaW5lZGAgYXJlIHBvc3NpYmxlXG4gKiBsZWdpdGltYXRlIHZhbHVlcyB0aGF0IGNhbiBiZSBzdG9yZWQgaW4gYSBxdWV1ZS4gQW5vdGhlciBvcHRpb24gaXMgdG8gdXNlXG4gKiBzb21lIGtpbmQgb2YgYE1heWJlYCBvciBgT3B0aW9uYCB0eXBlLCBidXQgdGhhdCByZXF1aXJlcyBtb3JlIGVmZm9ydCBvbiB0aGVcbiAqIHBhcnQgb2YgdGhlIGVuZCB1c2VyIHRvIGludGVyZmFjZSB3aXRoLlxuICpcbiAqIEB0eXBlIHtTeW1ib2x9XG4gKiBAcHJpdmF0ZVxuICovXG5jb25zdCBFTVBUWSA9IFN5bWJvbChcImVtcHR5XCIpO1xuXG4vKipcbiAqIEEgbWFya2VyIHByb3BlcnR5IG5hbWUgdG8gaW5kaWNhdGUgdGhhdCBhbiBvYmplY3QgaXMgaW4gZmFjdCBhIHF1ZXVlLlxuICpcbiAqIEEgcXVldWUgaGFzIGEgcHJvcGVydHkgd2l0aCB0aGlzIG5hbWUgd2hvc2UgcmVhZG9ubHkgdmFsdWUgaXMgc2V0IHRvIGB0cnVlYC5cbiAqIFRoaXMgaXMgbm90IG1lYW50IHRvIGJlIHJlYWQgZXhjZXB0IGJ5IHRoZVxuICogYHtAbGluayBtb2R1bGU6Y2hhbmtvL3F1ZXVlflF1ZXVlLmlzUXVldWV8aXNRdWV1ZX1gIGZ1bmN0aW9uLlxuICpcbiAqIEB0eXBlIHtTeW1ib2x9XG4gKiBAcHJpdmF0ZVxuICovXG5jb25zdCBRVUVVRSA9IFN5bWJvbChcInF1ZXVlXCIpO1xuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhbiBvYmplY3QgaXMgYSBxdWV1ZS5cbiAqXG4gKiBAcGFyYW0geyp9IG9iaiBUaGUgb2JqZWN0IHRvIGJlIHRlc3RlZC5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IEVpdGhlciBgdHJ1ZWAgaWYgdGhlIG9iamVjdCBpcyBhIHF1ZXVlIG9yIGBmYWxzZWAgaWYgaXQgaXNcbiAqIG5vdC5cbiAqL1xuZnVuY3Rpb24gaXNRdWV1ZShvYmopIHtcbiAgcmV0dXJuICEhb2JqPy5bUVVFVUVdO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgcXVldWUuIFRoaXMgcXVldWUgaXMgY3JlYXRlZCBlbXB0eSwgd2l0aCBhIGJhY2tpbmcgYXJyYXkgb2ZcbiAqIGxlbmd0aCAwLlxuICpcbiAqIEByZXR1cm5zIHttb2R1bGU6Y2hhbmtvL3F1ZXVlflF1ZXVlfSBBIG5ldywgZW1wdHkgcXVldWUuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBxdWV1ZSgpIHtcbiAgcmV0dXJuIE9iamVjdC5jcmVhdGUobnVsbCwge1xuICAgIHN0b3JlOiB7XG4gICAgICB2YWx1ZTogW10sXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0sXG5cbiAgICBwb2ludGVyOiB7XG4gICAgICB2YWx1ZTogMCxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSxcblxuICAgIFtRVUVVRV06IHtcbiAgICAgIHZhbHVlOiB0cnVlXG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBudW1iZXIgb2YgZWxlbWVudHMgc3RvcmVkIGluIGEgcXVldWUuIFRoaXMgbWF5IG9yIG1heSBub3QgZXF1YWxcbiAqIHRoZSBsZW5ndGggb2YgdGhlIGJhY2tpbmcgc3RvcmUsIGFzIHRoZXJlIGlzIG9mdGVuIGVtcHR5IHNwYWNlIGF0IHRoZSBoZWFkIG9mXG4gKiB0aGUgYmFja2luZyBzdG9yZS5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTpjaGFua28vcXVldWV+UXVldWV9IHF1ZXVlIFRoZSBxdWV1ZSB3aG9zZSBpdGVtcyBhcmUgYmVpbmdcbiAqIGNvdW50ZWQuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBudW1iZXIgb2YgaXRlbXMgaW4gdGhlIHF1ZXVlLlxuICovXG5mdW5jdGlvbiBjb3VudChxdWV1ZSkge1xuICByZXR1cm4gcXVldWUuc3RvcmUubGVuZ3RoIC0gcXVldWUucG9pbnRlcjtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgYSBxdWV1ZSBpcyBlbXB0eS5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTpjaGFua28vcXVldWV+UXVldWV9IHF1ZXVlIFRoZSBxdWV1ZSBiZWluZyBjaGVja2VkIGZvclxuICogZW1wdGluZXNzLlxuICogQHJldHVybiB7Ym9vbGVhbn0gRWl0aGVyIGB0cnVlYCBpZiB0aGUgcXVldWUgaXMgZW1wdHkgb3IgYGZhbHNlYCBpZiBpdCBpc1xuICogbm90LlxuICovXG5mdW5jdGlvbiBpc0VtcHR5KHF1ZXVlKSB7XG4gIHJldHVybiBxdWV1ZS5zdG9yZS5sZW5ndGggPT09IDA7XG59XG5cbi8qKlxuICogQWRkcyBhbiBpdGVtIHRvIGEgcXVldWUuXG4gKlxuICogQHBhcmFtIHttb2R1bGU6Y2hhbmtvL3F1ZXVlflF1ZXVlfSBxdWV1ZSBUaGUgcXVldWUgd2hpY2ggaXMgaGF2aW5nIGFuIGl0ZW1cbiAqIGFkZGVkIHRvIGl0LlxuICogQHBhcmFtIHsqfSBpdGVtIFRoZSBpdGVtIGJlaW5nIGFkZGVkIHRvIHRoZSBxdWV1ZS5cbiAqL1xuZnVuY3Rpb24gZW5xdWV1ZShxdWV1ZSwgaXRlbSkge1xuICBxdWV1ZS5zdG9yZS5wdXNoKGl0ZW0pO1xufVxuXG4vKipcbiAqIFJlbW92ZXMgYW4gaXRlbSBmcm9tIGEgcXVldWUgYW5kIHJldHVybnMgdGhhdCBpdGVtLiBJZiB0aGUgcmVtb3ZhbCBjYXVzZXMgdGhlXG4gKiBhbW91bnQgb2YgZW1wdHkgc3BhY2UgYXQgdGhlIGhlYWQgb2YgdGhlIGJhY2tpbmcgc3RvcmUgdG8gZXhjZWVkIGEgdGhyZXNob2xkLFxuICogdGhhdCBlbXB0eSBzcGFjZSBpcyByZW1vdmVkLlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOmNoYW5rby9xdWV1ZX5RdWV1ZX0gcXVldWUgVGhlIHF1ZXVlIHdob3NlIG9sZGVzdCBpdGVtIGlzIHRvIGJlXG4gKiByZW1vdmVkLlxuICogQHJldHVybiB7Kn0gVGhlIG9sZGVzdCBzdG9yZWQgaXRlbSBpbiB0aGUgcXVldWUuXG4gKi9cbmZ1bmN0aW9uIGRlcXVldWUocXVldWUpIHtcbiAgaWYgKHF1ZXVlLnN0b3JlLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBFTVBUWTtcbiAgfVxuXG4gIGNvbnN0IGl0ZW0gPSBxdWV1ZS5zdG9yZVtxdWV1ZS5wb2ludGVyXTtcbiAgLy8gUmVtb3ZlcyB0aGUgaXRlbXMgaW4gdGhlIGJhY2tpbmcgc3RvcmUgYmVmb3JlIHRoZSBjdXJyZW50IHBvaW50ZXIsIGlmIHRoZXJlXG4gIC8vIGlzIGVub3VnaCBcImVtcHR5XCIgc3BhY2UgYmVmb3JlIHRoZSBwb2ludGVyIHRvIGp1c3RpZnkgaXQgKGkuZS4sIHRoZSB1bnVzZWRcbiAgLy8gcG9ydGlvbiBpcyBhdCBsZWFzdCBoYWxmIGFzIGxhcmdlIGFzIHRoZSB1c2VkIHBvcnRpb24pXG4gIGlmICgrK3F1ZXVlLnBvaW50ZXIgKiAyID49IHF1ZXVlLnN0b3JlLmxlbmd0aCkge1xuICAgIHF1ZXVlLnN0b3JlID0gcXVldWUuc3RvcmUuc2xpY2UocXVldWUucG9pbnRlcik7XG4gICAgcXVldWUucG9pbnRlciA9IDA7XG4gIH1cbiAgcmV0dXJuIGl0ZW07XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgbmV4dCBpdGVtIGluIGEgcXVldWUgd2l0aG91dCByZW1vdmluZyBpdC5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTpjaGFua28vcXVldWV+UXVldWV9IHF1ZXVlIFRoZSBxdWV1ZSB3aG9zZSBvbGRlc3QgaXRlbSBpcyB0byBiZVxuICogcGVla2VkIGF0LlxuICogQHJldHVybiB7Kn0gVGhlIG9sZGVzdCBpdGVtIHN0b3JlZCBpbiB0aGUgcXVldWUuXG4gKi9cbmZ1bmN0aW9uIHBlZWsocXVldWUpIHtcbiAgcmV0dXJuIHF1ZXVlLnN0b3JlLmxlbmd0aCA9PT0gMCA/IEVNUFRZIDogcXVldWUuc3RvcmVbcXVldWUucG9pbnRlcl07XG59XG5cbi8qKlxuICogRmlsdGVycyBvdXQgYW55IGl0ZW0gaW4gYSBxdWV1ZSB0aGF0IGRvZXMgbm90IGNhdXNlIHRoZSBzdXBwbGllZCBwcmVkaWNhdGVcbiAqIGZ1bmN0aW9uIHRvIHJldHVybiBgdHJ1ZWAgd2hlbiBwYXNzZWQgdGhhdCBpdGVtLiBUaGlzIGlzIG5vdCBleGFjdGx5IGFcbiAqIGdlbmVyYWwgcHVycG9zZSBxdWV1ZSBvcGVyYXRpb24sIGJ1dCB3ZSBuZWVkIGl0IHdpdGggY2hhbm5lbHMgdGhhdCB3aWxsXG4gKiBvY2Nhc2lvbmFsbHkgd2FudCB0byBnZXQgcmlkIG9mIGluYWN0aXZlIGhhbmRsZXJzLlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOmNoYW5rby9xdWV1ZX5RdWV1ZX0gcXVldWUgVGhlIHF1ZXVlIGJlaW5nIGZpbHRlcmVkLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm4gVGhlIHByZWRpY2F0ZSBmdW5jdGlvbiB0aGF0IGRldGVybWluZXMgd2hldGhlciBhblxuICogZWxlbWVudCByZW1haW5zIGluIHRoZSBxdWV1ZS5cbiAqL1xuZnVuY3Rpb24gZmlsdGVyKHF1ZXVlLCBwcmVkaWNhdGUpIHtcbiAgZm9yIChsZXQgaSA9IDAsIGVuZCA9IGNvdW50KHF1ZXVlKTsgaSA8IGVuZDsgaSsrKSB7XG4gICAgY29uc3QgaXRlbSA9IGRlcXVldWUocXVldWUpO1xuICAgIGlmIChwcmVkaWNhdGUoaXRlbSkpIHtcbiAgICAgIGVucXVldWUocXVldWUsIGl0ZW0pO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQge1xuICBFTVBUWSxcbiAgcXVldWUsXG4gIGlzUXVldWUsXG4gIGNvdW50LFxuICBpc0VtcHR5LFxuICBlbnF1ZXVlLFxuICBkZXF1ZXVlLFxuICBwZWVrLFxuICBmaWx0ZXJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9