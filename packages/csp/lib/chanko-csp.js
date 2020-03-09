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

/***/ "../core/lib/chanko-core.js":
/*!**********************************!*\
  !*** ../core/lib/chanko-core.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
  if (true) module.exports = factory();else {}
})(this, function () {
  return (
    /******/
    function (modules) {
      // webpackBootstrap

      /******/
      // The module cache

      /******/
      var installedModules = {};
      /******/

      /******/
      // The require function

      /******/

      function __webpack_require__(moduleId) {
        /******/

        /******/
        // Check if module is in cache

        /******/
        if (installedModules[moduleId]) {
          /******/
          return installedModules[moduleId].exports;
          /******/
        }
        /******/
        // Create a new module (and put it into the cache)

        /******/


        var module = installedModules[moduleId] = {
          /******/
          i: moduleId,

          /******/
          l: false,

          /******/
          exports: {}
          /******/

        };
        /******/

        /******/
        // Execute the module function

        /******/

        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/

        /******/
        // Flag the module as loaded

        /******/

        module.l = true;
        /******/

        /******/
        // Return the exports of the module

        /******/

        return module.exports;
        /******/
      }
      /******/

      /******/

      /******/
      // expose the modules object (__webpack_modules__)

      /******/


      __webpack_require__.m = modules;
      /******/

      /******/
      // expose the module cache

      /******/

      __webpack_require__.c = installedModules;
      /******/

      /******/
      // define getter function for harmony exports

      /******/

      __webpack_require__.d = function (exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
          /******/
          Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
          });
          /******/
        }
        /******/

      };
      /******/

      /******/
      // define __esModule on exports

      /******/


      __webpack_require__.r = function (exports) {
        /******/
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
          /******/
          Object.defineProperty(exports, Symbol.toStringTag, {
            value: 'Module'
          });
          /******/
        }
        /******/


        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        /******/
      };
      /******/

      /******/
      // create a fake namespace object

      /******/
      // mode & 1: value is a module id, require it

      /******/
      // mode & 2: merge all properties of value into the ns

      /******/
      // mode & 4: return value when already ns object

      /******/
      // mode & 8|1: behave like require

      /******/


      __webpack_require__.t = function (value, mode) {
        /******/
        if (mode & 1) value = __webpack_require__(value);
        /******/

        if (mode & 8) return value;
        /******/

        if (mode & 4 && typeof value === 'object' && value && value.__esModule) return value;
        /******/

        var ns = Object.create(null);
        /******/

        __webpack_require__.r(ns);
        /******/


        Object.defineProperty(ns, 'default', {
          enumerable: true,
          value: value
        });
        /******/

        if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) {
          return value[key];
        }.bind(null, key));
        /******/

        return ns;
        /******/
      };
      /******/

      /******/
      // getDefaultExport function for compatibility with non-harmony modules

      /******/


      __webpack_require__.n = function (module) {
        /******/
        var getter = module && module.__esModule ?
        /******/
        function getDefault() {
          return module['default'];
        } :
        /******/
        function getModuleExports() {
          return module;
        };
        /******/

        __webpack_require__.d(getter, 'a', getter);
        /******/


        return getter;
        /******/
      };
      /******/

      /******/
      // Object.prototype.hasOwnProperty.call

      /******/


      __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/

      /******/
      // __webpack_public_path__

      /******/


      __webpack_require__.p = "";
      /******/

      /******/

      /******/
      // Load entry module and return exports

      /******/

      return __webpack_require__(__webpack_require__.s = "./src/index.js");
      /******/
    }(
    /************************************************************************/

    /******/
    {
      /***/
      "./src/index.js":
      /*!**********************!*\
        !*** ./src/index.js ***!
        \**********************/

      /*! exports provided: protocols, iterator, isIterable, kv, key, value, complete, uncomplete, isCompleted, ensureCompleted, ensureUncompleted, reduce, toFunction, toReducer, toTransducer, isArray, isFunction, isGeneratorFunction, isNumber, isObject, isString */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony import */


        var modules_protocol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! modules/protocol */
        "./src/modules/protocol.js");
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "protocols", function () {
          return modules_protocol__WEBPACK_IMPORTED_MODULE_0__["protocols"];
        });
        /* harmony import */


        var modules_iteration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! modules/iteration */
        "./src/modules/iteration.js");
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "iterator", function () {
          return modules_iteration__WEBPACK_IMPORTED_MODULE_1__["iterator"];
        });
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "isIterable", function () {
          return modules_iteration__WEBPACK_IMPORTED_MODULE_1__["isIterable"];
        });
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "kv", function () {
          return modules_iteration__WEBPACK_IMPORTED_MODULE_1__["kv"];
        });
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "key", function () {
          return modules_iteration__WEBPACK_IMPORTED_MODULE_1__["key"];
        });
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "value", function () {
          return modules_iteration__WEBPACK_IMPORTED_MODULE_1__["value"];
        });
        /* harmony import */


        var modules_reduction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! modules/reduction */
        "./src/modules/reduction.js");
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "complete", function () {
          return modules_reduction__WEBPACK_IMPORTED_MODULE_2__["complete"];
        });
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "uncomplete", function () {
          return modules_reduction__WEBPACK_IMPORTED_MODULE_2__["uncomplete"];
        });
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "isCompleted", function () {
          return modules_reduction__WEBPACK_IMPORTED_MODULE_2__["isCompleted"];
        });
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "ensureCompleted", function () {
          return modules_reduction__WEBPACK_IMPORTED_MODULE_2__["ensureCompleted"];
        });
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "ensureUncompleted", function () {
          return modules_reduction__WEBPACK_IMPORTED_MODULE_2__["ensureUncompleted"];
        });
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "reduce", function () {
          return modules_reduction__WEBPACK_IMPORTED_MODULE_2__["reduce"];
        });
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "toFunction", function () {
          return modules_reduction__WEBPACK_IMPORTED_MODULE_2__["toFunction"];
        });
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "toReducer", function () {
          return modules_reduction__WEBPACK_IMPORTED_MODULE_2__["toReducer"];
        });
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "toTransducer", function () {
          return modules_reduction__WEBPACK_IMPORTED_MODULE_2__["toTransducer"];
        });
        /* harmony import */


        var modules_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! modules/utils */
        "./src/modules/utils.js");
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "isArray", function () {
          return modules_utils__WEBPACK_IMPORTED_MODULE_3__["isArray"];
        });
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "isFunction", function () {
          return modules_utils__WEBPACK_IMPORTED_MODULE_3__["isFunction"];
        });
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "isGeneratorFunction", function () {
          return modules_utils__WEBPACK_IMPORTED_MODULE_3__["isGeneratorFunction"];
        });
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "isNumber", function () {
          return modules_utils__WEBPACK_IMPORTED_MODULE_3__["isNumber"];
        });
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "isObject", function () {
          return modules_utils__WEBPACK_IMPORTED_MODULE_3__["isObject"];
        });
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "isString", function () {
          return modules_utils__WEBPACK_IMPORTED_MODULE_3__["isString"];
        });
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
         * @module core
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

        /***/

      },

      /***/
      "./src/modules/iteration.js":
      /*!**********************************!*\
        !*** ./src/modules/iteration.js ***!
        \**********************************/

      /*! exports provided: iterator, isIterable, kv, key, value */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "iterator", function () {
          return iterator;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "isIterable", function () {
          return isIterable;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "kv", function () {
          return kv;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "key", function () {
          return key;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "value", function () {
          return value;
        });
        /* harmony import */


        var modules_protocol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! modules/protocol */
        "./src/modules/protocol.js");
        /* harmony import */


        var modules_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! modules/utils */
        "./src/modules/utils.js");
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
         * {@link module:core.iterator|iterator}.
         *
         * @param {object} obj The object being iterated over.
         * @param {module:core.SortFunction} [sortFn] An optional function used to sort
         *     the object keys before iteration. If it isn't provided, the keys will be
         *     sorted in the same order as `Object.keys(obj)` would sort them.
         * @returns {module:core.Iterator} An iterator over the properties of `obj`.
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
         * A convenience function that returns the first key and value in an object as a
         * two-property object, one property for the key and one for the value. This is
         * intended to work with the values provided by an object iterator, as the
         * syntax of objects doesn't work very nicely with single-property objects.
         *
         * ```
         * const obj = { c: 1, a: 2, b: 3 };
         * const iter = iterator(obj);
         *
         * let value = iter.next().value;
         * console.log(value);             // -> { c: 1 }
         * console.log(property(value));   // -> { k: "c", v: 1 }
         *
         * value = iter.next().value;
         * console.log(value);             // -> { a: 2 }
         * console.log(property(value));   // -> { k: "a", v: 2 }
         *
         * value = iter.next().value;
         * console.log(value);             // -> { b: 3 }
         * console.log(property(value));   // -> { k: "b", v: 3 }
         * ```
         *
         * @memberof module:core
         * @param {object} obj The object whose first property is returned.
         * @return {module:core.PropertyObject} The property as a two-property object.
         */


        function kv(obj) {
          const key = Object.keys(obj)[0];
          return {
            k: key,
            v: obj[key]
          };
        }
        /**
         * A convenience function that returns the key of the first property of an
         * object. This is meant for use with object iterators to more conveniently
         * access parts of the single-property objects that they emit.
         *
         * @memberof module:core
         * @param {object} obj The object whose first key is returned.
         * @return {(String|Symbol)} The key of the object's first property.
         */


        function key(obj) {
          return kv(obj).k;
        }
        /**
         * A convenience function that returns the value of the first property of an
         * object. This is meant for use with object iterators to more conveniently
         * access parts of the single-property objects that they emit.
         *
         * @memberof module:core
         * @param {object} obj The object whose first value is returned.
         * @return {*} The value of the object's first property.
         */


        function value(obj) {
          return kv(obj).v;
        }
        /**
         * Creates an iterator over a function.
         *
         * Details about this function are included in the documentation for
         * {@link module:core.iterator|iterator}.
         *
         * @param {module:core.IterableFunction} fn The function to iterate over.
         * @returns {module:core.Iterator} An iterator over the return values of `fn`.
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
         * @memberof module:core
         * @param {*} value The value to create an iterator over.
         * @param {module:core.SortFunction} [sortFn] An optional sort function for
         *     sorting the keys of an object before iteration. It is ignored if `value`
         *     isn't a plain object.
         * @returns {module:core.Iterator} An iterator over `value`.
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
         * {@link module:core.iterator|iterator} can produce an iterator for them,
         * because not all functions work well with
         * {@link module:core.iterator|iterator}.
         *
         * @param {*} value The value to test for iterability.
         * @return {boolean} Either `true` if the value is iterable
         *     (`{@link module:core.iterator}` will return an iterator for it) or
         *     `false` if it is not.
         * @private
         */


        function isIterable(value) {
          return Object(modules_protocol__WEBPACK_IMPORTED_MODULE_0__["isImplemented"])(value, "iterator") || Object(modules_utils__WEBPACK_IMPORTED_MODULE_1__["isObject"])(value);
        }
        /***/

      },

      /***/
      "./src/modules/protocol.js":
      /*!*********************************!*\
        !*** ./src/modules/protocol.js ***!
        \*********************************/

      /*! exports provided: protocols, isImplemented */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "protocols", function () {
          return protocols;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "isImplemented", function () {
          return isImplemented;
        });
        /* harmony import */


        var modules_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! modules/utils */
        "./src/modules/utils.js");
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
         * @memberof module:core
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
         * @type {module:core.ProtocolMap}
         * @memberof module:core
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
        /***/

      },

      /***/
      "./src/modules/reduction.js":
      /*!**********************************!*\
        !*** ./src/modules/reduction.js ***!
        \**********************************/

      /*! exports provided: init, step, result, toReducer, ARRAY_REDUCER, OBJECT_REDUCER, STRING_REDUCER, toTransducer, toFunction, complete, uncomplete, isCompleted, ensureCompleted, ensureUncompleted, reduce */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "init", function () {
          return init;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "step", function () {
          return step;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "result", function () {
          return result;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "toReducer", function () {
          return toReducer;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "ARRAY_REDUCER", function () {
          return ARRAY_REDUCER;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "OBJECT_REDUCER", function () {
          return OBJECT_REDUCER;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "STRING_REDUCER", function () {
          return STRING_REDUCER;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "toTransducer", function () {
          return toTransducer;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "toFunction", function () {
          return toFunction;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "complete", function () {
          return complete;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "uncomplete", function () {
          return uncomplete;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "isCompleted", function () {
          return isCompleted;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "ensureCompleted", function () {
          return ensureCompleted;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "ensureUncompleted", function () {
          return ensureUncompleted;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "reduce", function () {
          return reduce;
        });
        /* harmony import */


        var modules_protocol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! modules/protocol */
        "./src/modules/protocol.js");
        /* harmony import */


        var modules_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! modules/utils */
        "./src/modules/utils.js");
        /* harmony import */


        var modules_iteration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! modules/iteration */
        "./src/modules/iteration.js");
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
         * @return {module:core.InitFunction} A function that, when called, returns an
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
         * @return {module:core.StepFunction} A reduction function for the provided
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
                const value = Object(modules_utils__WEBPACK_IMPORTED_MODULE_1__["isObject"])(input) ? Object(modules_iteration__WEBPACK_IMPORTED_MODULE_2__["kv"])(input).v : input;
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

                const {
                  k,
                  v
                } = Object(modules_iteration__WEBPACK_IMPORTED_MODULE_2__["kv"])(value);
                acc[k] = v;
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
         * @return {module:core.ResultFunction} A function that, when given a reduced
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
         * @memberof module:core
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
         * @type {module:core.Reducer}
         * @private
         */


        const ARRAY_REDUCER = toReducer([]);
        /**
         * A reducer object for objects.
         *
         * @type {module:core.Reducer}
         * @private
         */

        const OBJECT_REDUCER = toReducer({});
        /**
         * A reducer object for strings.
         *
         * @type {module:core.Reducer}
         * @private
         */

        const STRING_REDUCER = toReducer("");
        /**
         * Creates a transducer from a function and a transducer to chain it to.
         *
         * This is in most respects just like {@link module:core.toReducer|toReducer},
         * with two notable differences. One is that it requires a transducer to chain
         * to, and it does the chaining as a part of creating the new transducer. The
         * other is that it includes a usable `init` function, where passing a function
         * to {@link module:core.toReducer|toReducer} would create an init function that
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
         * @memberof module:core
         * @param {module:core.StepFunction} fn The step function for the transducer.
         * @param {module:core.Transducer} xform The next transducer object in the
         *     chain.
         * @returns {module:core.Transducer} A new transducer, chaining the supplied
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
         * to`{@link module:core.transduce|transduce}` or
         * `{@link module:core.reduce|reduce}`, or it can be a plain function that takes
         * two parameters and returns the result of reducing the second parameter into
         * the first.
         *
         * If there is no need for a transformation, then pass in the
         * `{@link module:transducers.identity|identity}` transducer.
         *
         * @memberof module:core
         * @param {module:core.Reducer} xform A transducer object whose step function
         *     will become the returned reduction function.
         * @param {(module:core.StepFunction|module:core.Reducer)} reducer A reducer
         *     that knows how to reduce values into an output collection. This can
         *     either be a reducing function or a transducer object whose `step`
         *     function knows how to perform this reduction.
         * @returns {module:core.StepFunction} A function that handles both the
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
         * @memberof module:core
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
         * @memberof module:core
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
         * @memberof module:core
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
         * This differs from {@link module:core.complete|complete} in that if the value
         * is already complete, this function won't complete it again. Therefore thus
         * function can't be used to make a value complete multiple times.
         *
         * @memberof module:core
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
         * @memberof module:core
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
         * {@link module:core.transduce|transduce} instead, as that function makes it
         * easy to combine transformations with reductions and can optionally figure out
         * the initial collection itself.
         *
         * @memberof module:core
         * @param {*} collection The input collection. The only requirement of this
         *     collection is that it implement the `iterable` protocol. Special support
         *     is provided by the library for objects, so they can be used as well.
         * @param {module:core.Reducer} reducer An object that implements the `step` and
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
        /***/

      },

      /***/
      "./src/modules/utils.js":
      /*!******************************!*\
        !*** ./src/modules/utils.js ***!
        \******************************/

      /*! exports provided: isFunction, isGeneratorFunction, isObject, isNumber, isString, isArray */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "isFunction", function () {
          return isFunction;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "isGeneratorFunction", function () {
          return isGeneratorFunction;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "isObject", function () {
          return isObject;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "isNumber", function () {
          return isNumber;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "isString", function () {
          return isString;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "isArray", function () {
          return isArray;
        });
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
         * @memberof module:core
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
         * @memberof module:core
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
         * @memberof module:core
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
         * @memberof module:core
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
         * @memberof module:core
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
         * @memberof module:core
         * @param {*} x The value being tested to see if it is an array.
         * @return {boolean} Either `true` if the test value is an array or `false` if
         *     it is not.
         */


        const isArray = Array.isArray;
        /***/
      }
      /******/

    })
  );
});

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
/* harmony import */ var _chanko_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chanko/core */ "../core/lib/chanko-core.js");
/* harmony import */ var _chanko_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chanko_core__WEBPACK_IMPORTED_MODULE_0__);
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


function isReduced(value) {
  return !!(value === null || value === void 0 ? void 0 : value[_chanko_core__WEBPACK_IMPORTED_MODULE_0__["protocols"].reduced]);
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
    const done = isReduced(channel.xform[_chanko_core__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](channel.buffer, value));

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

        if (isReduced(channel.xform[_chanko_core__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](channel.buffer, sender.value))) {
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
    channel.xform[_chanko_core__WEBPACK_IMPORTED_MODULE_0__["protocols"].result](channel.buffer);

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
/* harmony import */ var _chanko_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chanko/core */ "../core/lib/chanko-core.js");
/* harmony import */ var _chanko_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_chanko_core__WEBPACK_IMPORTED_MODULE_5__);



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
    [_chanko_core__WEBPACK_IMPORTED_MODULE_5__["protocols"].step](buffer, input) {
      try {
        return xform[_chanko_core__WEBPACK_IMPORTED_MODULE_5__["protocols"].step](buffer, input);
      } catch (ex) {
        return handleException(buffer, handler, ex);
      }
    },

    [_chanko_core__WEBPACK_IMPORTED_MODULE_5__["protocols"].result](buffer) {
      try {
        return xform[_chanko_core__WEBPACK_IMPORTED_MODULE_5__["protocols"].result](buffer);
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
  [_chanko_core__WEBPACK_IMPORTED_MODULE_5__["protocols"].init]() {
    throw Error("init not available");
  },

  [_chanko_core__WEBPACK_IMPORTED_MODULE_5__["protocols"].step](buffer, input) {
    Object(modules_buffer__WEBPACK_IMPORTED_MODULE_4__["add"])(buffer, input);
    return buffer;
  },

  [_chanko_core__WEBPACK_IMPORTED_MODULE_5__["protocols"].result](buffer) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jc3Avd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2NzcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jc3AvL2hvbWUvYmFyYW5kaXMvRGV2ZWxvcG1lbnQvcHJvamVjdHMvY2hhbmtvL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL0FzeW5jR2VuZXJhdG9yLmpzIiwid2VicGFjazovL2NzcC8vaG9tZS9iYXJhbmRpcy9EZXZlbG9wbWVudC9wcm9qZWN0cy9jaGFua28vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvQXdhaXRWYWx1ZS5qcyIsIndlYnBhY2s6Ly9jc3AvL2hvbWUvYmFyYW5kaXMvRGV2ZWxvcG1lbnQvcHJvamVjdHMvY2hhbmtvL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2F3YWl0QXN5bmNHZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vY3NwLy9ob21lL2JhcmFuZGlzL0RldmVsb3BtZW50L3Byb2plY3RzL2NoYW5rby9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy93cmFwQXN5bmNHZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vY3NwLy9ob21lL2JhcmFuZGlzL0RldmVsb3BtZW50L3Byb2plY3RzL2NoYW5rby9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovL2NzcC8vaG9tZS9iYXJhbmRpcy9EZXZlbG9wbWVudC9wcm9qZWN0cy9jaGFua28vbm9kZV9tb2R1bGVzL3NldGltbWVkaWF0ZS9zZXRJbW1lZGlhdGUuanMiLCJ3ZWJwYWNrOi8vY3NwLy9ob21lL2JhcmFuZGlzL0RldmVsb3BtZW50L3Byb2plY3RzL2NoYW5rby9ub2RlX21vZHVsZXMvdGltZXJzLWJyb3dzZXJpZnkvbWFpbi5qcyIsIndlYnBhY2s6Ly9jc3AvKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovL2NzcC9jb3JlL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9jc3AvY29yZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jc3AvY29yZS9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY3NwL2NvcmUvc3JjL21vZHVsZXMvaXRlcmF0aW9uLmpzIiwid2VicGFjazovL2NzcC9jb3JlL3NyYy9tb2R1bGVzL3Byb3RvY29sLmpzIiwid2VicGFjazovL2NzcC9jb3JlL3NyYy9tb2R1bGVzL3JlZHVjdGlvbi5qcyIsIndlYnBhY2s6Ly9jc3AvY29yZS9zcmMvbW9kdWxlcy91dGlscy5qcyIsIndlYnBhY2s6Ly9jc3AvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY3NwLy4vc3JjL21vZHVsZXMvYnVmZmVyLmpzIiwid2VicGFjazovL2NzcC8uL3NyYy9tb2R1bGVzL2NoYW5uZWwvaGFuZGxlci5qcyIsIndlYnBhY2s6Ly9jc3AvLi9zcmMvbW9kdWxlcy9jaGFubmVsL2luZGV4LmpzIiwid2VicGFjazovL2NzcC8uL3NyYy9tb2R1bGVzL2NoYW5uZWwvc2VsZWN0LmpzIiwid2VicGFjazovL2NzcC8uL3NyYy9tb2R1bGVzL2Rpc3BhdGNoZXIuanMiLCJ3ZWJwYWNrOi8vY3NwLy4vc3JjL21vZHVsZXMvcHJvY2Vzcy5qcyIsIndlYnBhY2s6Ly9jc3AvLi9zcmMvbW9kdWxlcy9xdWV1ZS5qcyJdLCJuYW1lcyI6WyJrZXlzIiwiT2JqZWN0IiwiaW5kZXgiLCJrIiwib2JqIiwia2V5IiwidiIsImt2IiwiY3VycmVudCIsImZuIiwic29ydEZuIiwiaXNGdW5jdGlvbiIsInZhbHVlIiwiU3ltYm9sIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImZ1bmN0aW9uSXRlcmF0b3IiLCJpc09iamVjdCIsIm9iamVjdEl0ZXJhdG9yIiwiaXNJbXBsZW1lbnRlZCIsInByb3RvY29scyIsImluaXQiLCJzdGVwIiwicmVzdWx0IiwicmVkdWNlZCIsImNvbGxlY3Rpb24iLCJwIiwiaXNTdHJpbmciLCJpc0FycmF5IiwiRXJyb3IiLCJhY2MiLCJtYXgiLCJNYXRoIiwiaW5wdXQiLCJBUlJBWV9SRURVQ0VSIiwidG9SZWR1Y2VyIiwiT0JKRUNUX1JFRFVDRVIiLCJTVFJJTkdfUkVEVUNFUiIsInhmb3JtIiwiciIsImlzQ29tcGxldGVkIiwiY29tcGxldGUiLCJ1bmNvbXBsZXRlIiwiaXRlciIsIml0ZXJhdG9yIiwibmFtZSIsInJlZHVjZXIiLCJ0b1N0cmluZyIsInByb3RvIiwiY3RvciIsImlzRmluaXRlIiwiQXJyYXkiLCJCVUZGRVIiLCJGSVhFRCIsIkRST1BQSU5HIiwiU0xJRElORyIsImlzQnVmZmVyIiwiZml4ZWQiLCJzaXplIiwiY3JlYXRlIiwicXVldWUiLCJxIiwiZHJvcHBpbmciLCJzbGlkaW5nIiwiYnVmZmVyIiwiY291bnQiLCJxQ291bnQiLCJpc0Z1bGwiLCJhZGQiLCJpdGVtcyIsIml0ZW0iLCJlbnF1ZXVlIiwiZGVxdWV1ZSIsInJlbW92ZSIsIk1BWF9ESVJUWSIsIk1BWF9RVUVVRUQiLCJDTE9TRUQiLCJCT1giLCJpc0JveCIsImlzUmVkdWNlZCIsImJveCIsIndyaXRhYmxlIiwic2VuZEJveCIsImhhbmRsZXIiLCJjaGFubmVsIiwiaXNUaW1lZCIsIm1heERpcnR5IiwibWF4UXVldWVkIiwicmVjdnMiLCJzZW5kcyIsImRpcnR5UmVjdnMiLCJkaXJ0eVNlbmRzIiwiY2xvc2VkIiwiaXNCdWZmZXJlZCIsImhhbmRsZVNlbmQiLCJjb21taXQiLCJyZWNlaXZlciIsImNhbGxiYWNrIiwiZG9uZSIsIkVNUFRZIiwiYWN0aXZlIiwidmFsIiwiZGlzcGF0Y2giLCJjbG9zZSIsImZpbHRlciIsInNlbmRlciIsImhhbmRsZVJlY3YiLCJzZW5kSGFuZGxlciIsIkRFRkFVTFRfSEFORExFUiIsIm9wSGFuZGxlciIsImhhbmRsZUV4Y2VwdGlvbiIsImV4IiwiaGFuZGxlclRyYW5zZHVjZXIiLCJidWZmZXJSZWR1Y2VyIiwicGFyc2VBcmdzIiwib3B0aW9ucyIsImRlZmF1bHRPcHRpb25zIiwiYnVmIiwib3B0cyIsInRyYW5zZHVjZXIiLCJ0aW1lciIsImFzc2lnbiIsImNoYW4iLCJ4ZiIsImNoIiwiY2hhbkltcGwiLCJyZWN2IiwiYXN5bmNJdGVyYXRvciIsInNldFRpbWVvdXQiLCJjbG9zZUltcGwiLCJ0aW1lZENoYW4iLCJkZWxheSIsInRyYW5zQ2hhbiIsImlzQ2xvc2VkIiwic2VuZEFzeW5jIiwicmVjdkFzeW5jIiwic2VuZCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVjdk9yVGhyb3ciLCJyZWplY3QiLCJwcm90b3R5cGUiLCJpc1Byb3RvdHlwZU9mIiwiY2FsbCIsIkRFRkFVTFQiLCJzZWxlY3RIYW5kbGVyIiwiZ2V0IiwicmFuZG9tQXJyYXkiLCJ1cHBlciIsImFycmF5IiwicHVzaCIsImoiLCJpIiwiZmxvb3IiLCJyYW5kb20iLCJ0ZW1wIiwic2VsZWN0UmVzdWx0Iiwic2VsZWN0QXN5bmMiLCJvcHMiLCJsZW5ndGgiLCJwcmlvcml0eSIsImluZGljZXMiLCJjcmVhdGVTZWxlY3RIYW5kbGVyIiwib3AiLCJoYXNPd25Qcm9wZXJ0eSIsImRlZmF1bHQiLCJzZWxlY3QiLCJTRVRfSU1NRURJQVRFIiwiTUVTU0FHRV9DSEFOTkVMIiwiU0VUX1RJTUVPVVQiLCJiYXRjaFNpemUiLCJkaXNwYXRjaE1ldGhvZCIsImRpc3BhdGNoZXIiLCJjcmVhdGVEaXNwYXRjaGVyIiwicnVubmluZyIsInF1ZXVlZCIsImNhbGNEaXNwYXRjaE1ldGhvZCIsInNldEltbWVkaWF0ZSIsInByb2Nlc3NUYXNrcyIsIk1lc3NhZ2VDaGFubmVsIiwicG9ydDEiLCJvbm1lc3NhZ2UiLCJwb3J0MiIsInBvc3RNZXNzYWdlIiwidGFzayIsInNldERpc3BhdGNoZXIiLCJjb25maWciLCJzbGVlcCIsImdvIiwiYXJncyIsImpvaW4iLCJmbnMiLCJhbGwiLCJRVUVVRSIsImlzUXVldWUiLCJzdG9yZSIsInBvaW50ZXIiLCJpc0VtcHR5Iiwic2xpY2UiLCJwZWVrIiwicHJlZGljYXRlIiwiZW5k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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7QUN6TEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLG1CQUFPLENBQUMscUVBQWM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDOURBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDOztBQUU1Qzs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ0EsWUFDQSwyQkFEQSxLQUVBLEVBS0E7QUFDQyxDQVRELEVBU0MsSUFURCxFQVNDO0FBQ0Q7Ozs7O0FDVkE7QUFBQTs7QUFDQTtBQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBOzs7QUFFQTtBQUFBOztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7O0FBQ0E7OztBQUFBO0FBQ0E7QUFBQSxxQkFEQTs7QUFFQTtBQUFBLGtCQUZBOztBQUdBO0FBQUE7QUFDQTs7QUFKQTs7O0FBTUE7QUFBQTs7QUFDQTs7QUFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQTtBQUNBO0FBQUE7Ozs7O0FBR0E7QUFBQTs7QUFDQTs7O0FBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUEwQyw0QkFBMUM7QUFBMEM7QUFBMUM7QUFDQTtBQUFBO0FBQ0E7O0FBQUEsT0FKQTs7O0FBTUE7QUFBQTs7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUF3RDtBQUF4RDtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFBaUQ7QUFBakQ7QUFDQTtBQUFBLE9BTEE7OztBQU9BO0FBQUE7O0FBQ0E7QUFBQTs7QUFDQTtBQUFBOztBQUNBO0FBQUE7O0FBQ0E7QUFBQTs7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7O0FBQUE7QUFDQTs7QUFBQTtBQUNBOztBQUFBO0FBQ0E7O0FBQUE7QUFDQTs7O0FBQUE7QUFBeUMsMEJBQXpDO0FBQXlDO0FBQXpDO0FBQ0E7O0FBQUE7QUFBZ0g7QUFBcUIsU0FBckksQ0FBcUksSUFBckksQ0FBcUksSUFBckksRUFBcUksR0FBckk7QUFDQTs7QUFBQTtBQUNBO0FBQUEsT0FUQTs7O0FBV0E7QUFBQTs7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUEyQjtBQUE0QixTQUR2RDtBQUVBO0FBQUE7QUFBaUM7QUFBZSxTQUZoRDtBQUdBOztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQSxPQU5BOzs7QUFRQTtBQUFBOztBQUNBOzs7QUFBQTtBQUFzRDtBQUErRCxPQUFySDs7O0FBRUE7QUFBQTs7QUFDQTs7O0FBQUE7Ozs7O0FBR0E7QUFBQTs7QUFDQTs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7OztBQU1BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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ImNoYW5rby1jc3AuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJjc3BcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiY3NwXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJ2YXIgQXdhaXRWYWx1ZSA9IHJlcXVpcmUoXCIuL0F3YWl0VmFsdWVcIik7XG5cbmZ1bmN0aW9uIEFzeW5jR2VuZXJhdG9yKGdlbikge1xuICB2YXIgZnJvbnQsIGJhY2s7XG5cbiAgZnVuY3Rpb24gc2VuZChrZXksIGFyZykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVxdWVzdCA9IHtcbiAgICAgICAga2V5OiBrZXksXG4gICAgICAgIGFyZzogYXJnLFxuICAgICAgICByZXNvbHZlOiByZXNvbHZlLFxuICAgICAgICByZWplY3Q6IHJlamVjdCxcbiAgICAgICAgbmV4dDogbnVsbFxuICAgICAgfTtcblxuICAgICAgaWYgKGJhY2spIHtcbiAgICAgICAgYmFjayA9IGJhY2submV4dCA9IHJlcXVlc3Q7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmcm9udCA9IGJhY2sgPSByZXF1ZXN0O1xuICAgICAgICByZXN1bWUoa2V5LCBhcmcpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzdW1lKGtleSwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHZhciByZXN1bHQgPSBnZW5ba2V5XShhcmcpO1xuICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgdmFyIHdyYXBwZWRBd2FpdCA9IHZhbHVlIGluc3RhbmNlb2YgQXdhaXRWYWx1ZTtcbiAgICAgIFByb21pc2UucmVzb2x2ZSh3cmFwcGVkQXdhaXQgPyB2YWx1ZS53cmFwcGVkIDogdmFsdWUpLnRoZW4oZnVuY3Rpb24gKGFyZykge1xuICAgICAgICBpZiAod3JhcHBlZEF3YWl0KSB7XG4gICAgICAgICAgcmVzdW1lKGtleSA9PT0gXCJyZXR1cm5cIiA/IFwicmV0dXJuXCIgOiBcIm5leHRcIiwgYXJnKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBzZXR0bGUocmVzdWx0LmRvbmUgPyBcInJldHVyblwiIDogXCJub3JtYWxcIiwgYXJnKTtcbiAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgcmVzdW1lKFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgc2V0dGxlKFwidGhyb3dcIiwgZXJyKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzZXR0bGUodHlwZSwgdmFsdWUpIHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgXCJyZXR1cm5cIjpcbiAgICAgICAgZnJvbnQucmVzb2x2ZSh7XG4gICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgIGRvbmU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFwidGhyb3dcIjpcbiAgICAgICAgZnJvbnQucmVqZWN0KHZhbHVlKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGZyb250LnJlc29sdmUoe1xuICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICBkb25lOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgZnJvbnQgPSBmcm9udC5uZXh0O1xuXG4gICAgaWYgKGZyb250KSB7XG4gICAgICByZXN1bWUoZnJvbnQua2V5LCBmcm9udC5hcmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBiYWNrID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICB0aGlzLl9pbnZva2UgPSBzZW5kO1xuXG4gIGlmICh0eXBlb2YgZ2VuW1wicmV0dXJuXCJdICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB0aGlzW1wicmV0dXJuXCJdID0gdW5kZWZpbmVkO1xuICB9XG59XG5cbmlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHtcbiAgQXN5bmNHZW5lcmF0b3IucHJvdG90eXBlW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbn1cblxuQXN5bmNHZW5lcmF0b3IucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAoYXJnKSB7XG4gIHJldHVybiB0aGlzLl9pbnZva2UoXCJuZXh0XCIsIGFyZyk7XG59O1xuXG5Bc3luY0dlbmVyYXRvci5wcm90b3R5cGVbXCJ0aHJvd1wiXSA9IGZ1bmN0aW9uIChhcmcpIHtcbiAgcmV0dXJuIHRoaXMuX2ludm9rZShcInRocm93XCIsIGFyZyk7XG59O1xuXG5Bc3luY0dlbmVyYXRvci5wcm90b3R5cGVbXCJyZXR1cm5cIl0gPSBmdW5jdGlvbiAoYXJnKSB7XG4gIHJldHVybiB0aGlzLl9pbnZva2UoXCJyZXR1cm5cIiwgYXJnKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQXN5bmNHZW5lcmF0b3I7IiwiZnVuY3Rpb24gX0F3YWl0VmFsdWUodmFsdWUpIHtcbiAgdGhpcy53cmFwcGVkID0gdmFsdWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX0F3YWl0VmFsdWU7IiwidmFyIEF3YWl0VmFsdWUgPSByZXF1aXJlKFwiLi9Bd2FpdFZhbHVlXCIpO1xuXG5mdW5jdGlvbiBfYXdhaXRBc3luY0dlbmVyYXRvcih2YWx1ZSkge1xuICByZXR1cm4gbmV3IEF3YWl0VmFsdWUodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hd2FpdEFzeW5jR2VuZXJhdG9yOyIsInZhciBBc3luY0dlbmVyYXRvciA9IHJlcXVpcmUoXCIuL0FzeW5jR2VuZXJhdG9yXCIpO1xuXG5mdW5jdGlvbiBfd3JhcEFzeW5jR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG5ldyBBc3luY0dlbmVyYXRvcihmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfd3JhcEFzeW5jR2VuZXJhdG9yOyIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCIoZnVuY3Rpb24gKGdsb2JhbCwgdW5kZWZpbmVkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICBpZiAoZ2xvYmFsLnNldEltbWVkaWF0ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIG5leHRIYW5kbGUgPSAxOyAvLyBTcGVjIHNheXMgZ3JlYXRlciB0aGFuIHplcm9cbiAgICB2YXIgdGFza3NCeUhhbmRsZSA9IHt9O1xuICAgIHZhciBjdXJyZW50bHlSdW5uaW5nQVRhc2sgPSBmYWxzZTtcbiAgICB2YXIgZG9jID0gZ2xvYmFsLmRvY3VtZW50O1xuICAgIHZhciByZWdpc3RlckltbWVkaWF0ZTtcblxuICAgIGZ1bmN0aW9uIHNldEltbWVkaWF0ZShjYWxsYmFjaykge1xuICAgICAgLy8gQ2FsbGJhY2sgY2FuIGVpdGhlciBiZSBhIGZ1bmN0aW9uIG9yIGEgc3RyaW5nXG4gICAgICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgY2FsbGJhY2sgPSBuZXcgRnVuY3Rpb24oXCJcIiArIGNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICAgIC8vIENvcHkgZnVuY3Rpb24gYXJndW1lbnRzXG4gICAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2kgKyAxXTtcbiAgICAgIH1cbiAgICAgIC8vIFN0b3JlIGFuZCByZWdpc3RlciB0aGUgdGFza1xuICAgICAgdmFyIHRhc2sgPSB7IGNhbGxiYWNrOiBjYWxsYmFjaywgYXJnczogYXJncyB9O1xuICAgICAgdGFza3NCeUhhbmRsZVtuZXh0SGFuZGxlXSA9IHRhc2s7XG4gICAgICByZWdpc3RlckltbWVkaWF0ZShuZXh0SGFuZGxlKTtcbiAgICAgIHJldHVybiBuZXh0SGFuZGxlKys7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYXJJbW1lZGlhdGUoaGFuZGxlKSB7XG4gICAgICAgIGRlbGV0ZSB0YXNrc0J5SGFuZGxlW2hhbmRsZV07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcnVuKHRhc2spIHtcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gdGFzay5jYWxsYmFjaztcbiAgICAgICAgdmFyIGFyZ3MgPSB0YXNrLmFyZ3M7XG4gICAgICAgIHN3aXRjaCAoYXJncy5sZW5ndGgpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgY2FsbGJhY2suYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcnVuSWZQcmVzZW50KGhhbmRsZSkge1xuICAgICAgICAvLyBGcm9tIHRoZSBzcGVjOiBcIldhaXQgdW50aWwgYW55IGludm9jYXRpb25zIG9mIHRoaXMgYWxnb3JpdGhtIHN0YXJ0ZWQgYmVmb3JlIHRoaXMgb25lIGhhdmUgY29tcGxldGVkLlwiXG4gICAgICAgIC8vIFNvIGlmIHdlJ3JlIGN1cnJlbnRseSBydW5uaW5nIGEgdGFzaywgd2UnbGwgbmVlZCB0byBkZWxheSB0aGlzIGludm9jYXRpb24uXG4gICAgICAgIGlmIChjdXJyZW50bHlSdW5uaW5nQVRhc2spIHtcbiAgICAgICAgICAgIC8vIERlbGF5IGJ5IGRvaW5nIGEgc2V0VGltZW91dC4gc2V0SW1tZWRpYXRlIHdhcyB0cmllZCBpbnN0ZWFkLCBidXQgaW4gRmlyZWZveCA3IGl0IGdlbmVyYXRlZCBhXG4gICAgICAgICAgICAvLyBcInRvbyBtdWNoIHJlY3Vyc2lvblwiIGVycm9yLlxuICAgICAgICAgICAgc2V0VGltZW91dChydW5JZlByZXNlbnQsIDAsIGhhbmRsZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgdGFzayA9IHRhc2tzQnlIYW5kbGVbaGFuZGxlXTtcbiAgICAgICAgICAgIGlmICh0YXNrKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudGx5UnVubmluZ0FUYXNrID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBydW4odGFzayk7XG4gICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbW1lZGlhdGUoaGFuZGxlKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudGx5UnVubmluZ0FUYXNrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbE5leHRUaWNrSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uICgpIHsgcnVuSWZQcmVzZW50KGhhbmRsZSk7IH0pO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhblVzZVBvc3RNZXNzYWdlKCkge1xuICAgICAgICAvLyBUaGUgdGVzdCBhZ2FpbnN0IGBpbXBvcnRTY3JpcHRzYCBwcmV2ZW50cyB0aGlzIGltcGxlbWVudGF0aW9uIGZyb20gYmVpbmcgaW5zdGFsbGVkIGluc2lkZSBhIHdlYiB3b3JrZXIsXG4gICAgICAgIC8vIHdoZXJlIGBnbG9iYWwucG9zdE1lc3NhZ2VgIG1lYW5zIHNvbWV0aGluZyBjb21wbGV0ZWx5IGRpZmZlcmVudCBhbmQgY2FuJ3QgYmUgdXNlZCBmb3IgdGhpcyBwdXJwb3NlLlxuICAgICAgICBpZiAoZ2xvYmFsLnBvc3RNZXNzYWdlICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cykge1xuICAgICAgICAgICAgdmFyIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXMgPSB0cnVlO1xuICAgICAgICAgICAgdmFyIG9sZE9uTWVzc2FnZSA9IGdsb2JhbC5vbm1lc3NhZ2U7XG4gICAgICAgICAgICBnbG9iYWwub25tZXNzYWdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cyA9IGZhbHNlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShcIlwiLCBcIipcIik7XG4gICAgICAgICAgICBnbG9iYWwub25tZXNzYWdlID0gb2xkT25NZXNzYWdlO1xuICAgICAgICAgICAgcmV0dXJuIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsUG9zdE1lc3NhZ2VJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgLy8gSW5zdGFsbHMgYW4gZXZlbnQgaGFuZGxlciBvbiBgZ2xvYmFsYCBmb3IgdGhlIGBtZXNzYWdlYCBldmVudDogc2VlXG4gICAgICAgIC8vICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4vRE9NL3dpbmRvdy5wb3N0TWVzc2FnZVxuICAgICAgICAvLyAqIGh0dHA6Ly93d3cud2hhdHdnLm9yZy9zcGVjcy93ZWItYXBwcy9jdXJyZW50LXdvcmsvbXVsdGlwYWdlL2NvbW1zLmh0bWwjY3Jvc3NEb2N1bWVudE1lc3NhZ2VzXG5cbiAgICAgICAgdmFyIG1lc3NhZ2VQcmVmaXggPSBcInNldEltbWVkaWF0ZSRcIiArIE1hdGgucmFuZG9tKCkgKyBcIiRcIjtcbiAgICAgICAgdmFyIG9uR2xvYmFsTWVzc2FnZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuc291cmNlID09PSBnbG9iYWwgJiZcbiAgICAgICAgICAgICAgICB0eXBlb2YgZXZlbnQuZGF0YSA9PT0gXCJzdHJpbmdcIiAmJlxuICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEuaW5kZXhPZihtZXNzYWdlUHJlZml4KSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJ1bklmUHJlc2VudCgrZXZlbnQuZGF0YS5zbGljZShtZXNzYWdlUHJlZml4Lmxlbmd0aCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICAgICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIG9uR2xvYmFsTWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ2xvYmFsLmF0dGFjaEV2ZW50KFwib25tZXNzYWdlXCIsIG9uR2xvYmFsTWVzc2FnZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKG1lc3NhZ2VQcmVmaXggKyBoYW5kbGUsIFwiKlwiKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsTWVzc2FnZUNoYW5uZWxJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgdmFyIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICAgICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgdmFyIGhhbmRsZSA9IGV2ZW50LmRhdGE7XG4gICAgICAgICAgICBydW5JZlByZXNlbnQoaGFuZGxlKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgY2hhbm5lbC5wb3J0Mi5wb3N0TWVzc2FnZShoYW5kbGUpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxSZWFkeVN0YXRlQ2hhbmdlSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHZhciBodG1sID0gZG9jLmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhIDxzY3JpcHQ+IGVsZW1lbnQ7IGl0cyByZWFkeXN0YXRlY2hhbmdlIGV2ZW50IHdpbGwgYmUgZmlyZWQgYXN5bmNocm9ub3VzbHkgb25jZSBpdCBpcyBpbnNlcnRlZFxuICAgICAgICAgICAgLy8gaW50byB0aGUgZG9jdW1lbnQuIERvIHNvLCB0aHVzIHF1ZXVpbmcgdXAgdGhlIHRhc2suIFJlbWVtYmVyIHRvIGNsZWFuIHVwIG9uY2UgaXQncyBiZWVuIGNhbGxlZC5cbiAgICAgICAgICAgIHZhciBzY3JpcHQgPSBkb2MuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgICAgICAgICAgIHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcnVuSWZQcmVzZW50KGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgaHRtbC5yZW1vdmVDaGlsZChzY3JpcHQpO1xuICAgICAgICAgICAgICAgIHNjcmlwdCA9IG51bGw7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaHRtbC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxTZXRUaW1lb3V0SW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KHJ1bklmUHJlc2VudCwgMCwgaGFuZGxlKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBJZiBzdXBwb3J0ZWQsIHdlIHNob3VsZCBhdHRhY2ggdG8gdGhlIHByb3RvdHlwZSBvZiBnbG9iYWwsIHNpbmNlIHRoYXQgaXMgd2hlcmUgc2V0VGltZW91dCBldCBhbC4gbGl2ZS5cbiAgICB2YXIgYXR0YWNoVG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgJiYgT2JqZWN0LmdldFByb3RvdHlwZU9mKGdsb2JhbCk7XG4gICAgYXR0YWNoVG8gPSBhdHRhY2hUbyAmJiBhdHRhY2hUby5zZXRUaW1lb3V0ID8gYXR0YWNoVG8gOiBnbG9iYWw7XG5cbiAgICAvLyBEb24ndCBnZXQgZm9vbGVkIGJ5IGUuZy4gYnJvd3NlcmlmeSBlbnZpcm9ubWVudHMuXG4gICAgaWYgKHt9LnRvU3RyaW5nLmNhbGwoZ2xvYmFsLnByb2Nlc3MpID09PSBcIltvYmplY3QgcHJvY2Vzc11cIikge1xuICAgICAgICAvLyBGb3IgTm9kZS5qcyBiZWZvcmUgMC45XG4gICAgICAgIGluc3RhbGxOZXh0VGlja0ltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGNhblVzZVBvc3RNZXNzYWdlKCkpIHtcbiAgICAgICAgLy8gRm9yIG5vbi1JRTEwIG1vZGVybiBicm93c2Vyc1xuICAgICAgICBpbnN0YWxsUG9zdE1lc3NhZ2VJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChnbG9iYWwuTWVzc2FnZUNoYW5uZWwpIHtcbiAgICAgICAgLy8gRm9yIHdlYiB3b3JrZXJzLCB3aGVyZSBzdXBwb3J0ZWRcbiAgICAgICAgaW5zdGFsbE1lc3NhZ2VDaGFubmVsSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoZG9jICYmIFwib25yZWFkeXN0YXRlY2hhbmdlXCIgaW4gZG9jLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIikpIHtcbiAgICAgICAgLy8gRm9yIElFIDbigJM4XG4gICAgICAgIGluc3RhbGxSZWFkeVN0YXRlQ2hhbmdlSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEZvciBvbGRlciBicm93c2Vyc1xuICAgICAgICBpbnN0YWxsU2V0VGltZW91dEltcGxlbWVudGF0aW9uKCk7XG4gICAgfVxuXG4gICAgYXR0YWNoVG8uc2V0SW1tZWRpYXRlID0gc2V0SW1tZWRpYXRlO1xuICAgIGF0dGFjaFRvLmNsZWFySW1tZWRpYXRlID0gY2xlYXJJbW1lZGlhdGU7XG59KHR5cGVvZiBzZWxmID09PSBcInVuZGVmaW5lZFwiID8gdHlwZW9mIGdsb2JhbCA9PT0gXCJ1bmRlZmluZWRcIiA/IHRoaXMgOiBnbG9iYWwgOiBzZWxmKSk7XG4iLCJ2YXIgc2NvcGUgPSAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBnbG9iYWwpIHx8XG4gICAgICAgICAgICAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZikgfHxcbiAgICAgICAgICAgIHdpbmRvdztcbnZhciBhcHBseSA9IEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseTtcblxuLy8gRE9NIEFQSXMsIGZvciBjb21wbGV0ZW5lc3NcblxuZXhwb3J0cy5zZXRUaW1lb3V0ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgVGltZW91dChhcHBseS5jYWxsKHNldFRpbWVvdXQsIHNjb3BlLCBhcmd1bWVudHMpLCBjbGVhclRpbWVvdXQpO1xufTtcbmV4cG9ydHMuc2V0SW50ZXJ2YWwgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBUaW1lb3V0KGFwcGx5LmNhbGwoc2V0SW50ZXJ2YWwsIHNjb3BlLCBhcmd1bWVudHMpLCBjbGVhckludGVydmFsKTtcbn07XG5leHBvcnRzLmNsZWFyVGltZW91dCA9XG5leHBvcnRzLmNsZWFySW50ZXJ2YWwgPSBmdW5jdGlvbih0aW1lb3V0KSB7XG4gIGlmICh0aW1lb3V0KSB7XG4gICAgdGltZW91dC5jbG9zZSgpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBUaW1lb3V0KGlkLCBjbGVhckZuKSB7XG4gIHRoaXMuX2lkID0gaWQ7XG4gIHRoaXMuX2NsZWFyRm4gPSBjbGVhckZuO1xufVxuVGltZW91dC5wcm90b3R5cGUudW5yZWYgPSBUaW1lb3V0LnByb3RvdHlwZS5yZWYgPSBmdW5jdGlvbigpIHt9O1xuVGltZW91dC5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5fY2xlYXJGbi5jYWxsKHNjb3BlLCB0aGlzLl9pZCk7XG59O1xuXG4vLyBEb2VzIG5vdCBzdGFydCB0aGUgdGltZSwganVzdCBzZXRzIHVwIHRoZSBtZW1iZXJzIG5lZWRlZC5cbmV4cG9ydHMuZW5yb2xsID0gZnVuY3Rpb24oaXRlbSwgbXNlY3MpIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuICBpdGVtLl9pZGxlVGltZW91dCA9IG1zZWNzO1xufTtcblxuZXhwb3J0cy51bmVucm9sbCA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuICBpdGVtLl9pZGxlVGltZW91dCA9IC0xO1xufTtcblxuZXhwb3J0cy5fdW5yZWZBY3RpdmUgPSBleHBvcnRzLmFjdGl2ZSA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuXG4gIHZhciBtc2VjcyA9IGl0ZW0uX2lkbGVUaW1lb3V0O1xuICBpZiAobXNlY3MgPj0gMCkge1xuICAgIGl0ZW0uX2lkbGVUaW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uIG9uVGltZW91dCgpIHtcbiAgICAgIGlmIChpdGVtLl9vblRpbWVvdXQpXG4gICAgICAgIGl0ZW0uX29uVGltZW91dCgpO1xuICAgIH0sIG1zZWNzKTtcbiAgfVxufTtcblxuLy8gc2V0aW1tZWRpYXRlIGF0dGFjaGVzIGl0c2VsZiB0byB0aGUgZ2xvYmFsIG9iamVjdFxucmVxdWlyZShcInNldGltbWVkaWF0ZVwiKTtcbi8vIE9uIHNvbWUgZXhvdGljIGVudmlyb25tZW50cywgaXQncyBub3QgY2xlYXIgd2hpY2ggb2JqZWN0IGBzZXRpbW1lZGlhdGVgIHdhc1xuLy8gYWJsZSB0byBpbnN0YWxsIG9udG8uICBTZWFyY2ggZWFjaCBwb3NzaWJpbGl0eSBpbiB0aGUgc2FtZSBvcmRlciBhcyB0aGVcbi8vIGBzZXRpbW1lZGlhdGVgIGxpYnJhcnkuXG5leHBvcnRzLnNldEltbWVkaWF0ZSA9ICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzZWxmLnNldEltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgJiYgZ2xvYmFsLnNldEltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMgJiYgdGhpcy5zZXRJbW1lZGlhdGUpO1xuZXhwb3J0cy5jbGVhckltbWVkaWF0ZSA9ICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzZWxmLmNsZWFySW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiICYmIGdsb2JhbC5jbGVhckltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcyAmJiB0aGlzLmNsZWFySW1tZWRpYXRlKTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImNvcmVcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiY29yZVwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG4vKipcbiAqIFRoZSBjZW50cmFsIG1vZHVsZSBmb3IgdGhlIHRyYW5zZHVjZXIgZW5naW5lLlxuICpcbiAqIEFsbCBvZiB0aGUgZnVuY3Rpb25zIGluIHRoaXMgbW9kdWxlIGRlYWwgZGlyZWN0bHkgd2l0aCB0cmFuc2R1Y2Vycy4gQnV0XG4gKiBmaXJzdCwgbGV0J3MgdGFsayBhYm91dCB0aGUgcHJvdG9jb2xzIHRoYXQgYXJlIGdvaW5nIHRvIGJlIHJlZmVycmVkIHRvXG4gKiB0aHJvdWdob3V0IG1hbnkgb2YgdGhlIGZ1bmN0aW9uIGRpc2N1c3Npb25zLlxuICpcbiAqICMjIFByb3RvY29sc1xuICpcbiAqIE9uZSBvZiB0aGUga2V5IHNlbGxpbmcgcG9pbnRzIGZvciB0cmFuc2R1Y2VycyBpcyB0aGF0IHRoZSBzYW1lIHRyYW5zZHVjZXIgY2FuXG4gKiBiZSB1c2VkIG9uIGFueSB0eXBlIG9mIGNvbGxlY3Rpb24uIFJhdGhlciB0aGFuIGhhdmluZyB0byB3cml0ZSBhIG5ldyBgbWFwYFxuICogZnVuY3Rpb24gKGZvciBleGFtcGxlKSBmb3IgZXZlcnkga2luZCBvZiBjb2xsZWN0aW9uIC0gb25lIGZvciBhbiBhcnJheSwgb25lXG4gKiBmb3IgYSBzdHJpbmcsIG9uZSBmb3IgYW4gaXRlcmF0b3IsIGV0Yy4gLSB0aGVyZSBpcyBhIHNpbmdsZSBgbWFwYCB0cmFuc2R1Y2VyXG4gKiB0aGF0IHdpbGwgd29yayB3aXRoIGFsbCBvZiB0aGVtLCBhbmQgcG90ZW50aWFsbHkgd2l0aCAqYW55KiBraW5kIG9mXG4gKiBjb2xsZWN0aW9uLiBUaGlzIGlzIHBvc3NpYmxlIGltcGxlbWVudGluZyAqcHJvdG9jb2xzKiBvbiB0aGUgY29sbGVjdGlvbnMuXG4gKlxuICogQSBwcm90b2NvbCBpbiBKYXZhU2NyaXB0IGlzIG11Y2ggbGlrZSBhbiBpbnRlcmZhY2UgaW4gbGFuZ3VhZ2VzIGxpa2UgSmF2YSBhbmRcbiAqIEMjLiBJdCBpcyBhIGNvbW1pdG1lbnQgdG8gcHJvdmlkaW5nIGEgY2VydGFpbiBmdW5jdGlvbmFsaXR5IHVuZGVyIGEgY2VydGFpblxuICogbmFtZS4gRVMyMDE1IGhhcyBzZWVuIHRoZSBpbnRyb2R1Y3Rpb24gb2YgYW4gYGl0ZXJhdG9yYCBwcm90b2NvbCwgZm9yXG4gKiBleGFtcGxlLCBhbmQgbGFuZ3VhZ2Ugc3VwcG9ydCBmb3IgaXQgKHRoZSBuZXcgYGZvci4uLm9mYCBsb29wIGNhbiB3b3JrIHdpdGhcbiAqIGFueSBvYmplY3QgdGhhdCBjb3JyZWN0bHkgaW1wbGVtZW50cyB0aGUgYGl0ZXJhdG9yYCBwcm90b2NvbCkuXG4gKlxuICogVG8gc3VwcG9ydCB0cmFuc2R1Y3Rpb24sIFhkdWNlIGV4cGVjdHMgY29sbGVjdGlvbnMgdG8gaW1wbGVtZW50IGZvdXJcbiAqIHByb3RvY29scy5cbiAqXG4gKiAtIGBpdGVyYXRvcmA6IGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGFuIGl0ZXJhdG9yICh0aGlzIG9uZSBpcyBidWlsdCBpbiB0b1xuICogICBFUzYgSmF2YVNjcmlwdClcbiAqIC0gYHRyYW5zZHVjZXIvaW5pdGA6IGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgbmV3LCBlbXB0eSBpbnN0YW5jZSBvZiB0aGVcbiAqICAgb3V0cHV0IGNvbGxlY3Rpb25cbiAqIC0gYHRyYW5zZHVjZXIvc3RlcGA6IGEgZnVuY3Rpb24gdGhhdCB0YWtlcyBhbiBhY2N1bXVsYXRvciAodGhlIHJlc3VsdCBvZiB0aGVcbiAqICAgcmVkdWN0aW9uIHNvIGZhcikgYW5kIHRoZSBuZXh0IGlucHV0IHZhbHVlLCBhbmQgdGhlbiByZXR1cm5zIHRoZVxuICogICBhY2N1bXVsYXRvciB3aXRoIHRoZSBuZXh0IGlucHV0IHZhbHVlIGFkZGVkIHRvIGl0XG4gKiAtIGB0cmFuc2R1Y2VyL3Jlc3VsdGA6IGEgZnVuY3Rpb24gdGhhdCB0YWtlcyB0aGUgcmVkdWNlZCBjb2xsZWN0aW9uIGFuZFxuICogICByZXR1cm5zIHRoZSBmaW5hbCBvdXRwdXQgY29sbGVjdGlvblxuICpcbiAqIGBpdGVyYXRvcmAgaXMgdGhlIGJ1aWx0LWluIEphdmFTY3JpcHQgcHJvdG9jb2wuIFdoZW4gY2FsbGVkLCBpdCBpcyBleHBlY3RlZFxuICogdG8gcmV0dXJuIGFuIGl0ZXJhdG9yIG92ZXIgdGhlIGltcGxlbWVudGluZyBjb2xsZWN0aW9uLiBUaGlzIGl0ZXJhdG9yIGlzIGFuXG4gKiBvYmplY3QgdGhhdCBoYXMgYSBgbmV4dGAgZnVuY3Rpb24uIEVhY2ggY2FsbCB0byBgbmV4dGAgaXMgZXhwZWN0ZWQgdG8gcmV0dXJuXG4gKiBhbiBvYmplY3Qgd2l0aCBgdmFsdWVgIGFuZCBgZG9uZWAgcHJvcGVydGllcywgd2hpY2ggcmVzcGVjdGl2ZWx5IGhvbGQgdGhlXG4gKiBuZXh0IHZhbHVlIG9mIHRoZSBpdGVyYXRvciBhbmQgYSBib29sZWFuIHRvIGluZGljYXRlIHdoZXRoZXIgdGhlIGl0ZXJhdGlvblxuICogaGFzIHJlYWNoZWQgaXRzIGVuZC4gKFRoaXMgaXMgYSBzaW1wbGlmaWVkIGV4cGxhbmF0aW9uOyBzZWVcbiAqIHtAbGluayBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L0d1aWRlL0l0ZXJhdG9yc19hbmRfR2VuZXJhdG9yc3x0aGlzIE1ETiBwYWdlfVxuICogZm9yIG1vcmUgZGV0YWlsZWQgaW5mb3JtYXRpb24uKVxuICpcbiAqIGB0cmFuc2R1Y2VyL2luaXRgIChyZWZlcnJlZCB0byBmcm9tIG5vdyBvbiBhcyBgaW5pdGApIHNob3VsZCBiZSBhIGZ1bmN0aW9uXG4gKiB0aGF0IHRha2VzIG5vIHBhcmFtZXRlcnMgYW5kIHJldHVybnMgYSBuZXcsIGVtcHR5IGluc3RhbmNlIG9mIHRoZSBvdXRwdXRcbiAqIGNvbGxlY3Rpb24uIFRoaXMgaXMgdGhlIGZ1bmN0aW9uIHRoYXQgZGVmaW5lcyBob3cgdG8gY3JlYXRlIGEgbmV3IGNvbGxlY3Rpb25cbiAqIG9mIHRoZSBjb3JyZWN0IHR5cGUuXG4gKlxuICogYHRyYW5zZHVjZXIvc3RlcGAgKHJlZmVycmVkIHRvIGZyb20gbm93IG9uIGFzIGBzdGVwYCkgc2hvdWxkIGJlIGEgZnVuY3Rpb25cbiAqIHRoYXQgdGFrZXMgdHdvIHBhcmFtZXRlcnMuIFRoZXNlIHBhcmFtZXRlcnMgYXJlIHRoZSByZXN1bHQgb2YgdGhlIHJlZHVjdGlvblxuICogc28gZmFyIChhbmQgc28gaXMgYSBjb2xsZWN0aW9uIG9mIHRoZSBvdXRwdXQgdHlwZSkgYW5kIHRoZSBuZXh0IHZhbHVlIGZyb21cbiAqIHRoZSBpbnB1dCBjb2xsZWN0aW9uLiBJdCBtdXN0IHJldHVybiB0aGUgbmV3IHJlZHVjdGlvbiByZXN1bHQsIHdpdGggdGhlIG5leHRcbiAqIHZhbHVlIGluY29ycG9yYXRlZCBpbnRvIGl0LiBUaGlzIGlzIHRoZSBmdW5jdGlvbiB0aGF0IGRlZmluZXMgaG93IHJlZHVjZSBhXG4gKiB2YWx1ZSBvbnRvIHRoZSBjb2xsZWN0aW9uLlxuICpcbiAqIGB0cmFuc2R1Y2VyL3Jlc3VsdGAgKHJlZmVycmVkIHRvIGZyb20gbm93IG9uIGFzIGByZXN1bHRgKSBzaG91bGQgYmUgYVxuICogZnVuY3Rpb24gdGhhdCB0YWtlcyBvbmUgcGFyYW1ldGVyLCB3aGljaCBpcyB0aGUgZnVsbHkgcmVkdWNlZCBjb2xsZWN0aW9uLiBJdFxuICogc2hvdWxkIHJldHVybiB0aGUgZmluYWwgb3V0cHV0IGNvbGxlY3Rpb24uIFRoaXMgYWZmb3JkcyBhIGNoYW5jZSB0byBtYWtlIGFueVxuICogbGFzdC1taW51dGUgYWRqdXN0bWVudHMgdG8gdGhlIHJlZHVjZWQgY29sbGVjdGlvbiBiZWZvcmUgcmV0dXJuaW5nIGl0LlxuICpcbiAqIEFycmF5cywgc3RyaW5ncywgYW5kIG9iamVjdHMgYXJlIGFsbCBnaXZlbiBzdXBwb3J0IGZvciBhbGwgb2YgdGhlc2VcbiAqIHByb3RvY29scy4gT3RoZXIgY29sbGVjdGlvbnMgd2lsbCBoYXZlIHRvIHByb3ZpZGUgdGhlaXIgb3duICh0aG91Z2ggaXQgc2hvdWxkXG4gKiBiZSBub3RlZCB0aGF0IHNpbmNlIGBpdGVyYXRvcmAgaXMgYnVpbHQtaW4sIG1hbnkgdGhpcmQtcGFydHkgY29sbGVjdGlvbnMgd2lsbFxuICogYWxyZWFkeSBpbXBsZW1lbnQgdGhpcyBwcm90b2NvbCkuIEFzIGFuIGV4YW1wbGUsIGxldCdzIGFkZCB0cmFuc2R1Y2VyIHN1cHBvcnRcbiAqIHRvIGEgdGhpcmQtcGFydHkgY29sbGVjdGlvbiwgdGhlIGBJbW11dGFibGUuTGlzdGAgY29sbGVjdGlvbiBmcm9tXG4gKiB7QGxpbmsgaHR0cHM6Ly9mYWNlYm9vay5naXRodWIuaW8vaW1tdXRhYmxlLWpzL3xpbW11dGFibGUtanN9LlxuICpcbiAqIGBgYFxuICogSW1tdXRhYmxlLkxpc3QucHJvdG90eXBlW3Byb3RvY29scy5pbml0XSA9ICgpID0+IEltbXV0YWJsZS5MaXN0KCkuYXNNdXRhYmxlKCk7XG4gKiBJbW11dGFibGUuTGlzdC5wcm90b3R5cGVbcHJvdG9jb2xzLnN0ZXBdID0gKGFjYywgaW5wdXQpID0+IGFjYy5wdXNoKGlucHV0KTtcbiAqIEltbXV0YWJsZS5MaXN0LnByb3RvdHlwZVtwcm90b2NvbHMucmVzdWx0XSA9ICh2YWx1ZSkgPT4gdmFsdWUuYXNJbW11dGFibGUoKTtcbiAqIGBgYFxuICpcbiAqIGBJbW11dGFibGUuTGlzdGAgYWxyZWFkeSBpbXBsZW1lbnRzIGBpdGVyYXRvcmAsIHNvIHdlIGRvbid0IGhhdmUgdG8gZG8gaXRcbiAqIG91cnNlbHZlcy5cbiAqXG4gKiBUaGUgYGluaXRgIGZ1bmN0aW9uIHJldHVybnMgYW4gZW1wdHkgbXV0YWJsZSBsaXN0LiBUaGlzIGlzIGltcG9ydGFudCBmb3JcbiAqIGltbXV0YWJsZS1qcyBiZWNhdXNlIGl0cyBkZWZhdWx0IGxpc3RzIGFyZSBpbW11dGFibGUsIGFuZCBpbW11dGFibGUgbGlzdHNcbiAqIG1lYW4gdGhhdCBhIG5ldyBsaXN0IGhhcyB0byBiZSBjcmVhdGVkIHdpdGggZXZlcnkgcmVkdWN0aW9uIHN0ZXAuIEl0IHdvdWxkXG4gKiB3b3JrIGZpbmUsIGJ1dCBpdCdzIHF1aXRlIGluZWZmaWNpZW50LlxuICpcbiAqIFRoZSBgc3RlcGAgZnVuY3Rpb24gYWRkcyB0aGUgbmV4dCB2YWx1ZSB0byB0aGUgYWxyZWFkeS1jcmVhdGVkIGxpc3QuXG4gKiBgSW1tdXRhYmxlLkxpc3RgIHByb3ZpZGVzIGEgYHB1c2hgIGZ1bmN0aW9uIHRoYXQgd29ya3MgbGlrZSBhbiBhcnJheSdzXG4gKiBgcHVzaGAsIGV4Y2VwdCB0aGF0IGl0IHJldHVybnMgdGhlIG5ldyBsaXN0IHdpdGggdGhlIHZhbHVlIHB1c2hlZCBvbnRvIGl0LlxuICogVGhpcyBpcyBwZXJmZWN0IGZvciBvdXIgYHN0ZXBgIGZ1bmN0aW9uLlxuICpcbiAqIFRoZSBgcmVzdWx0YCBmdW5jdGlvbiBjb252ZXJ0cyB0aGUgbm93LWZpbmlzaGVkIG11dGFibGUgbGlzdCBpbnRvIGFuXG4gKiBpbW11dGFibGUgb25lLCB3aGljaCBpcyB3aGF0J3MgZ29pbmcgdG8gYmUgZXhwZWN0ZWQgaWYgd2UncmUgdHJhbnNkdWNpbmdcbiAqIHNvbWV0aGluZyBpbnRvIGFuIGBJbW11dGFibGUuTGlzdGAuIEluIG1vc3QgY2FzZXMsIGByZXN1bHRgIGRvZXNuJ3QgaGF2ZSB0b1xuICogZG8gYW55IHdvcmssIGJ1dCBzaW5jZSB3ZSdyZSBjcmVhdGluZyBhbiBpbnRlcm1lZGlhdGUgcmVwcmVzZW50YXRpb24gb2Ygb3VyXG4gKiBjb2xsZWN0aW9uIHR5cGUgaGVyZSwgdGhpcyBsZXRzIHVzIGNyZWF0ZSB0aGUgY29sbGVjdGlvbiB0aGF0IHdlIGFjdHVhbGx5XG4gKiB3YW50IHRvIG91dHB1dC4gKFdpdGhvdXQgYHJlc3VsdGAsIHdlIHdvdWxkIGhhdmUgdG8gdXNlIGltbXV0YWJsZSBsaXN0cyBhbGxcbiAqIHRoZSB3YXkgdGhyb3VnaCwgY3JlYXRpbmcgYSBuZXcgb25lIHdpdGggZWFjaCBgc3RlcGAgZnVuY3Rpb24sIHNpbmNlIHdlXG4gKiB3b3VsZG4ndCBiZSBhYmxlIHRvIG1ha2UgdGhpcyBjb252ZXJzdGlvbiBhdCB0aGUgZW5kLilcbiAqXG4gKiBXaXRoIHRob3NlIHByb3RvY29scyBpbXBsZW1lbnRlZCBvbiB0aGUgcHJvdG90eXBlLCBgSW1tdXRhYmxlLkxpc3RgXG4gKiBjb2xsZWN0aW9ucyBjYW4gbm93IHN1cHBvcnQgYW55IHRyYW5zZHVjdGlvbiB3ZSBjYW4gb2ZmZXIuXG4gKlxuICogIyMjIFByb3RvY29sc1xuICpcbiAqIEFmdGVyIHRhbGtpbmcgYSBsb3QgYWJvdXQgcHJvdG9jb2xzIGFuZCBzaG93aW5nIGhvdyB0aGV5J3JlIHByb3BlcnRpZXMgYWRkZWRcbiAqIHRvIGFuIG9iamVjdCwgaXQncyBwcm9iYWJseSBwcmV0dHkgb2J2aW91cyB0aGF0IHRoZXJlJ3MgYmVlbiBubyBtZW50aW9uIG9mXG4gKiB3aGF0IHRoZSBhY3R1YWwgbmFtZXMgb2YgdGhvc2UgcHJvcGVydGllcyBhcmUuIFRoYXQncyB3aGF0XG4gKiBge0BsaW5rIG1vZHVsZTpjb3JlLnByb3RvY29sc3xwcm90b2NvbHN9YCBpcyBmb3IuXG4gKlxuICogVGhlIGJlc3Qgd2F5IHRvIHVzZSB0aGVzZSBrZXlzIGNhbiBiZSBzZWVuIGluIHRoZSBpbW11dGFibGUtanMgZXhhbXBsZSBhYm92ZS5cbiAqIEluc3RlYWQgb2Ygd29ycnlpbmcgYWJvdXQgdGhlIG5hbWUgb2YgdGhlIGtleSBmb3IgdGhlIGBpbml0YCBwcm90b2NvbCwgdGhlXG4gKiB2YWx1ZSBvZiBgcHJvdG9jb2xzLmluaXRgIGlzIHVzZWQuXG4gKlxuICogYHtAbGluayBtb2R1bGU6Y29yZS5wcm90b2NvbHN8cHJvdG9jb2xzfWAgZGVmaW5lcyB0aGVzZSBwcm90b2NvbCBwcm9wZXJ0eVxuICogbmFtZXMuXG4gKlxuICogLSBgaW5pdGBcbiAqIC0gYHN0ZXBgXG4gKiAtIGByZXN1bHRgXG4gKiAtIGByZWR1Y2VkYDogdXNlZCBpbnRlcm5hbGx5IHRvIG1hcmsgYSBjb2xsZWN0aW9uIGFzIGFscmVhZHkgcmVkdWNlZFxuICogLSBgdmFsdWVgOiB1c2VkIGludGVybmFsbHkgdG8gcHJvdmlkZSB0aGUgYWN0dWFsIHZhbHVlIG9mIGEgcmVkdWNlZFxuICogICBjb2xsZWN0aW9uXG4gKlxuICogVGhlIGZpbmFsIHR3byB2YWx1ZXMgZG9uJ3QgaGF2ZSBhIGxvdCBvZiB1c2Ugb3V0c2lkZSB0aGUgbGlicmFyeSB1bmxlc3NcbiAqIHlvdSdyZSB3cml0aW5nIHlvdXIgb3duIHRyYW5zZHVjZXJzLlxuICpcbiAqICMjIEhvdyBPYmplY3RzIEFyZSBUcmVhdGVkXG4gKlxuICogT2JqZWN0cyBiZWFyIHNvbWUgdGhvdWdodCBiZWNhdXNlIHJlZ3VsYXJseSwgdGhleSBhcmVuJ3QgY2FuZGlkYXRlcyBmb3JcbiAqIGl0ZXJhdGlvbiAoYW5kIHRoZXJlZm9yZSBmb3IgdHJhbnNkdWN0aW9uIGluIGdlbmVyYWwpLiBUaGV5IGRvbid0IGhhdmUgYSB2ZXJ5XG4gKiBzdHJhaWdodGZvcndhcmQgaWRlYSBvZiBvcmRlciwgYW5kIHRoZXkgaGF2ZSAqdHdvKiBwaWVjZXMgb2YgZGF0YSAoa2V5IGFuZFxuICogdmFsdWUpIGZvciBldmVyeSBlbGVtZW50IGluc3RlYWQgb2Ygb25lLiBZZXQgaXQncyB1bmRlbmlhYmxlIHRoYXQgYXQgbGVhc3RcbiAqIGZvciBtb3N0IHRyYW5zZm9ybWF0aW9ucywgYmVpbmcgYWJsZSB0byBhcHBseSB0aGVtIHRvIG9iamVjdHMgd291bGQgYmUgcXVpdGVcbiAqIGhhbmR5LlxuICpcbiAqIEZvciB0aGF0IHJlYXNvbiwgc3BlY2lhbCBzdXBwb3J0IGlzIHByb3ZpZGVkIGVuZC10by1lbmQgZm9yIG9iamVjdHMuXG4gKlxuICogIyMjIE9iamVjdCBpdGVyYXRpb25cbiAqXG4gKiBJdGVyYXRpbmcgb3ZlciBhbiBvYmplY3Qgd2lsbCBwcm9kdWNlIG9uZSBvYmplY3QgcGVyIHByb3BlcnR5IG9mIHRoZSBvcmlnaW5hbFxuICogb2JqZWN0LiBBbiBvcmRlciBpcyBpbXBvc2VkOyBieSBkZWZhdWx0LCB0aGlzIG9yZGVyIHRoZSBzYW1lIGFzIHRoZSBvcmRlcmluZ1xuICogb2Yga2V5cyBpbiBwb3N0LUVTNiBKYXZhc2NyaXB0OlxuICpcbiAqIDEuIEtleXMgdGhhdCBhcmUgaW50ZWdlcnMsIGluIGFzY2VuZGluZyBudW1lcmljYWwgb3JkZXJcbiAqIDIuIEFsbCBvdGhlciBzdHJpbmcga2V5cywgaW4gdGhlIG9yZGVyIGluIHdoaWNoIHRoZXkgd2VyZSBhZGRlZCB0byB0aGUgb2JqZWN0XG4gKiAzLiBBbGwgc3ltYm9sIGtleXMsIGluIHRoZSBvcmRlciBpbiB3aGljaCB0aGV5IHdlcmUgYWRkZWQgdG8gdGhlIG9iamVjdFxuICpcbiAqIFRoZSBge0BsaW5rIG1vZHVsZTpjb3JlLml0ZXJhdG9yfGl0ZXJhdG9yfWAgZnVuY3Rpb24gY2FuIGJlIHBhc3NlZCBhIHNvcnRpbmdcbiAqIGZ1bmN0aW9uIHRoYXQgY2FuIHNvcnQga2V5cyBpbiBhbnkgb3RoZXIgd2F5LlxuICpcbiAqIFRoZSByZXN1bHQgb2YgdGhlIGl0ZXJhdGlvbiwgaXMgYSBzZXQgb2Ygb2JqZWN0cyBlYWNoIHdpdGggYSBzaW5nbGUgcHJvcGVydHksXG4gKiBvbmUgZm9yIGVhY2ggZW51bWVyYWJsZSBvd24gcHJvcGVydHkgb24gdGhlIG9yaWdpbmFsIG9iamVjdC4gVGhlIHN0YW5kYXJkXG4gKiBvcmRlcmluZyBmb3Igb2JqZWN0cyAoZnJvbSBFUzYgb253YXJkKSBpcyBhcyBmb2xsb3dzOlxuICpcbiAqICMjIyBUcmFuc2Zvcm1pbmcgb2JqZWN0c1xuICpcbiAqIFdoaWxlIGl0ZXJhdGluZyBvdmVyIG9iamVjdHMgaW4gdGhpcyB3YXkgaXMgc3RyYWlnaHRmb3J3YXJkLCB0aGUgc3ludGF4IG9mXG4gKiBvYmplY3RzIG1ha2VzIGl0IHVnbHkgdG8gdHJhbnNmb3JtIHRoZW0gaW4gdGhpcyBmb3JtLiBIZXJlJ3MgYW4gZXhhbXBsZSBvZiBhXG4gKiB0cmFuc2Zvcm1hdGlvbiBmdW5jdGlvbiB0aGF0IG1ha2VzIHRoZSBvYmplY3QncyBrZXlzIHVwcGVyLWNhc2UgYW5kIGFkZHMgb25lXG4gKiB0byBlYWNoIG9mIHRoZSB2YWx1ZXM6XG4gKlxuICogYGBgXG4gKiBmdW5jdGlvbiB0cmFuc2Zvcm0ob2JqKSB7XG4gKiAgIGNvbnN0IGtleSA9IE9iamVjdC5rZXlzKG9iailbMF07XG4gKiAgIGNvbnN0IHZhbHVlID0gb2JqW2tleV07XG4gKiAgIHJldHVybiB7IFtrZXkudG9VcHBlckNhc2UoKV06IHZhbHVlICsgMSB9O1xuICogfVxuICogYGBgXG4gKlxuICogQSBoZWxwZXIgZnVuY3Rpb24gbmFtZWQgYHtAbGluayBtb2R1bGU6Y29yZS5wcm9wZXJ0eXxwcm9wZXJ0eX1gIGNhbiBpbXByb3ZlXG4gKiB0aGlzIGJ5IGhhbmRsaW5nIHRoZSBib2lsZXJwbGF0ZS5cbiAqXG4gKiBgYGBcbiAqIGZ1bmN0aW9uIGltcHJvdmVkVHJhbnNmb3JtKG9iaikge1xuICogICBjb25zdCB7aywgdn0gPSBwcm9wZXJ0eShvYmopO1xuICogICByZXR1cm4geyBbay50b1VwcGVyQ2FzZSgpXTogdiArIDEgfTtcbiAqIH1cbiAqIGBgYFxuICpcbiAqICMjIyBSZWR1Y2luZyBvYmplY3RzXG4gKlxuICogVGhlIGJ1aWx0LWluIHJlZHVjZXJzIChmb3IgYXJyYXlzLCBvYmplY3RzLCBzdHJpbmdzLCBhbmQgaXRlcmF0b3JzKVxuICogdW5kZXJzdGFuZCB0aGVzZSBzaW5nbGUtcHJvcGVydHkgb2JqZWN0cyBhbmQgcmVkdWNlIHRoZW0gaW4gdGhlIHByb3BlciBtYW5uZXJcbiAqIHdpdGhvdXQgYW55IGZ1cnRoZXIgd29yay5cbiAqXG4gKiBUaGF0J3MgaXQgZm9yIG9iamVjdC1vYmplY3QgcmVkdWN0aW9uLiBDb252ZXJ0aW5nIGJldHdlZW4gb2JqZWN0cyBhbmQgb3RoZXJcbiAqIHR5cGVzIGlzIGFub3RoZXIgbWF0dGVyLlxuICpcbiAqIEV2ZXJ5IHRyYW5zZHVjZXIgZnVuY3Rpb24gZXhjZXB0IGZvciBge0BsaW5rIG1vZHVsZTpjb3JlLnNlcXVlbmNlfHNlcXVlbmNlfWBcbiAqIGlzIGNhcGFibGUgb2YgdHVybmluZyBhbiBvYmplY3QgaW50byBhIGRpZmZlcmVudCB0eXBlIG9mIGNvbGxlY3Rpb24sIHR1cm5pbmdcbiAqIGEgZGlmZmVyZW50IHR5cGUgb2YgY29sbGVjdGlvbiBpbnRvIGFuIG9iamVjdCwgb3IgYm90aC4gT2JqZWN0cyBhcmUgZGlmZmVyZW50XG4gKiBiZWNhdXNlIHRoZXkncmUgdGhlIG9ubHkgXCJjb2xsZWN0aW9uc1wiIHRoYXQgaGF2ZSB0d28gZGlmZmVyZW50IHBpZWNlcyBvZiBkYXRhXG4gKiBwZXIgZWxlbWVudC4gQmVjYXVzZSBvZiB0aGlzLCB3ZSBoYXZlIHRvIGhhdmUgYSBzdHJhdGVneSBvbiBob3cgdG8gbW92ZSBmcm9tXG4gKiBvbmUgdG8gYW5vdGhlci5cbiAqXG4gKiBUcmFuc2R1Y2luZyBhbiBvYmplY3QgaW50byBhIGRpZmZlcmVudCB0eXBlIGlzIGdlbmVyYWxseSBwcmV0dHkgZWFzeS4gSWYgYW5cbiAqIG9iamVjdCBpcyBjb252ZXJ0ZWQgaW50byBhbiBhcnJheSwgZm9yIGluc3RhbmNlLCB0aGUgYXJyYXkgZWxlbWVudHMgd2lsbCBlYWNoXG4gKiBiZSBzaW5nbGUtcHJvcGVydHkgb2JqZWN0cywgb25lIHBlciBwcm9wZXJ0eSBvZiB0aGUgb3JpZ2luYWwgb2JqZWN0LlxuICpcbiAqIFN0cmluZ3MgYXJlIGEgZGlmZmVyZW50IHN0b3J5LCBzaW5jZSBlbmNvZGluZyBhIHNpbmdsZS1wcm9wZXJ0eSBvYmplY3QgdG8gYVxuICogc3RyaW5nIGlzbid0IHBvc3NpYmxlIChiZWNhdXNlIGV2ZXJ5IFwiZWxlbWVudFwiIG9mIGEgc3RyaW5nIGhhcyB0byBiZSBhIHNpbmdsZVxuICogY2hhcmFjdGVyKS4gU3RyaW5ncyB0aGF0IGFyZSBwcm9kdWNlZCBmcm9tIG9iamVjdHMgd2lsbCBpbnN0ZWFkIGp1c3QgYmUgdGhlXG4gKiBvYmplY3QgdmFsdWVzLCBjb25jYXRlbmF0ZWQuIEJlY2F1c2Ugb2JqZWN0cyBhcmUgaXRlcmF0ZWQgaW4gYSBwYXJ0aWN1bGFyXG4gKiBvcmRlciwgdGhpcyBjb252ZXJzaW9uIHdpbGwgYWx3YXlzIHByb2R1Y2UgdGhlIHNhbWUgc3RyaW5nLCBidXQgZXhjZXB0IGluXG4gKiBzb21lIHZlcnkgc3BlY2lmaWMgY2FzZXMgdGhlcmUgcmVhbGx5IGlzbid0IGEgbG90IG9mIHVzZSBmb3IgdGhpcyBjb252ZXJzaW9uLlxuICpcbiAqIGBgYFxuICogY29uc3Qgb2JqID0ge2E6IDEsIGI6IDJ9O1xuICpcbiAqIGxldCByZXN1bHQgPSBhc0FycmF5KG9iaik7XG4gKiAvLyByZXN1bHQgPSBbe2E6IDF9LCB7YjogMn1dXG4gKlxuICogcmVzdWx0ID0gYXNJdGVyYXRvcihvYmopO1xuICogLy8gcmVzdWx0IGlzIGFuIGl0ZXJhdG9yIHdpdGggdHdvIHZhbHVlczoge2E6IDF9IGFuZCB7YjogMn1cbiAqXG4gKiByZXN1bHQgPSBpbnRvKEltbXV0YWJsZS5MaXN0KCksIG9iailcbiAqIC8vIHJlc3VsdCBpcyBhbiBpbW11dGFibGUgbGlzdCB3aXRoIHR3byBlbGVtZW50czoge2E6IDF9IGFuZCB7YjogMn1cbiAqXG4gKiByZXN1bHQgPSBhc1N0cmluZyhvYmopO1xuICogLy8gcmVzdWx0IGlzICcxMidcbiAqIGBgYFxuICpcbiAqIFRoZSBvcHBvc2l0ZSBjb252ZXJzaW9uIGRlcGVuZHMgb24gdGhlIHZhbHVlcyBpbnNpZGUgdGhlIGNvbGxlY3Rpb25zLiBJZlxuICogdGhvc2UgdmFsdWVzIGFyZSBvYmplY3RzLCB0aGVuIHRoZSByZXN1bHQgaXMgYW4gb2JqZWN0IHdpdGggYWxsIG9mIHRoZVxuICogb2JqZWN0cyBjb21iaW5lZCAoaWYgbW9yZSB0aGFuIG9uZSBoYXMgdGhlIHNhbWUga2V5LCB0aGUgbGFzdCBvbmUgaXMgdGhlIG9uZVxuICogdGhhdCdzIGtlcHQpLiBPdGhlcndpc2UsIGtleXMgYXJlIGNyZWF0ZWQgZm9yIGVhY2ggb2YgdGhlIGVsZW1lbnRzLCBzdGFydGluZ1xuICogd2l0aCBgMGAgYW5kIGluY3JlYXNpbmcgZnJvbSB0aGVyZS5cbiAqXG4gKiBUaGlzIG1lYW5zIHRoYXQgY29udmVydGluZyBhbiBvYmplY3QgdG8gYW55IG5vbi1zdHJpbmcgY29sbGVjdGlvbiBhbmQgYmFja1xuICogcHJvZHVjZXMgdGhlIG9yaWdpbmFsIG9iamVjdC5cbiAqXG4gKiBgYGBcbiAqIGxldCByZXN1bHQgPSBhc09iamVjdChbe2E6IDF9LCB7YjogMn1dKTtcbiAqIC8vIHJlc3VsdCA9IHthOiAxLCBiOiAyfVxuICpcbiAqIHJlc3VsdCA9IGFzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyByZXN1bHQgPSB7MDogMSwgMTogMiwgMjogM31cbiAqXG4gKiByZXN1bHQgPSBhc09iamVjdCgnaGVsbG8nKTtcbiAqIC8vIHJlc3VsdCA9IHswOiAnaCcsIDE6ICdlJywgMjogJ2wnLCAzOiAnbCcsIDQ6ICdvJ31cbiAqIGBgYFxuICpcbiAqIEBtb2R1bGUgY29yZVxuICovXG5cbmV4cG9ydCB7IHByb3RvY29scyB9IGZyb20gXCJtb2R1bGVzL3Byb3RvY29sXCI7XG5leHBvcnQgeyBpdGVyYXRvciwgaXNJdGVyYWJsZSwga3YsIGtleSwgdmFsdWUgfSBmcm9tIFwibW9kdWxlcy9pdGVyYXRpb25cIjtcbmV4cG9ydCB7XG4gIGNvbXBsZXRlLFxuICB1bmNvbXBsZXRlLFxuICBpc0NvbXBsZXRlZCxcbiAgZW5zdXJlQ29tcGxldGVkLFxuICBlbnN1cmVVbmNvbXBsZXRlZCxcbiAgcmVkdWNlLFxuICB0b0Z1bmN0aW9uLFxuICB0b1JlZHVjZXIsXG4gIHRvVHJhbnNkdWNlclxufSBmcm9tIFwibW9kdWxlcy9yZWR1Y3Rpb25cIjtcbmV4cG9ydCB7XG4gIGlzQXJyYXksXG4gIGlzRnVuY3Rpb24sXG4gIGlzR2VuZXJhdG9yRnVuY3Rpb24sXG4gIGlzTnVtYmVyLFxuICBpc09iamVjdCxcbiAgaXNTdHJpbmdcbn0gZnJvbSBcIm1vZHVsZXMvdXRpbHNcIjtcblxuLyoqXG4gKiBBbiBpdGVyYWJsZSBhcyBkZWZpbmVkIGJ5IEphdmFTY3JpcHQuXG4gKlxuICogQHR5cGVkZWYgSnNJdGVyYWJsZVxuICogQG1lbWJlcm9mIG1vZHVsZTpjb3JlXG4gKiBAcHJvcGVydHkge21vZHVsZTpjb3JlLkpzSXRlcmFibGVGdW5jdGlvbn0gU3ltYm9sLml0ZXJhdG9yIEEgZnVuY3Rpb24gdGhhdFxuICogICAgIHByb2R1Y2VzIGFuIGl0ZXJhdG9yIHdoZW4gY2FsbGVkLlxuICovXG5cbi8qKlxuICogQSBmdW5jdGlvbiB0aGF0IHByb2R1Y2VzIGFuIGl0ZXJhdG9yLiBUaGlzIGlzIHRoZSBjaGFyYWN0ZXJpc3RpYyBwcm9wZXJ0eSBvZlxuICogYSBKYXZhU2NyaXB0IGl0ZXJhYmxlLlxuICpcbiAqIEBjYWxsYmFjayBKc0l0ZXJhYmxlRnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y29yZVxuICogQHJldHVybnMge21vZHVsZTpjb3JlLkl0ZXJhdG9yfSBBbiBpdGVyYXRvciBvdmVyIHRoZVxuICogICAgIHtAbGluayBtb2R1bGU6Y29yZS5Kc0l0ZXJhYmxlfSB0aGF0IHByb2R1Y2VkIGl0LlxuICovXG5cbi8qKlxuICogQW4gaXRlcmFibGUgYXMgZGVmaW5lZCBieSB0aGlzIGxpYnJhcnkuIFNpbmNlIGl0IHByb3ZpZGVzIHNwZWNpZmljIHN1cHBvcnRcbiAqIGZvciBvYmplY3RzLCB0aGlzIHR5cGUgaXMgbWVyZWx5IGEgbm9ybWFsIEphdmFTY3JpcHQgaXRlcmFibGUgKm9yKiBhIHBsYWluXG4gKiBvYmplY3QuXG4gKlxuICogQHR5cGVkZWYgeyhPYmplY3R8bW9kdWxlOmNvcmUuSnNJdGVyYWJsZSl9IEl0ZXJhYmxlXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNvcmVcbiAqL1xuXG4vKipcbiAqIEEgZ2VuZXJpYyBpdGVyYXRvci4gVGhpcyBjb25mb3JtcyB0byB0aGUgYGl0ZXJhdG9yYCBwcm90b2NvbCBpbiB0aGF0IGl0IGhhcyBhXG4gKiBge0BsaW5rIG1vZHVsZTpjb3JlLk5leHRGdW5jdGlvbnxuZXh0fWAgZnVuY3Rpb24gdGhhdCBwcm9kdWNlc1xuICoge0BsaW5rIG1vZHVsZTpjb3JlLk5leHRWYWx1ZXxgaXRlcmF0b3JgLWNvbXBhdGlibGUgb2JqZWN0c30uXG4gKlxuICogQHR5cGVkZWYgSXRlcmF0b3JcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y29yZVxuICogQHByb3BlcnR5IHttb2R1bGU6Y29yZS5OZXh0RnVuY3Rpb259IG5leHQgQSBmdW5jdGlvbiB0aGF0LCB3aGVuIGNhbGxlZCxcbiAqICAgICByZXR1cm5zIHRoZSBuZXh0IGl0ZXJhdG9yIHZhbHVlLlxuICovXG5cbi8qKlxuICogVGhlIGZ1bmN0aW9uIHRoYXQgc2F0aXNmaWVzIHRoZSBgaXRlcmF0b3JgIHByb3RvY29sIG9uIGFuIG9iamVjdC4gV2hlblxuICogY2FsbGVkLCBpdCByZXR1cm5zIHRoZSBuZXh0IHZhbHVlIGluIHRoZSBpdGVyYXRvci5cbiAqXG4gKiBAY2FsbGJhY2sgTmV4dEZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNvcmVcbiAqIEByZXR1cm5zIHttb2R1bGU6Y29yZS5OZXh0VmFsdWV9IFRoZSBuZXh0IHZhbHVlIGluIHRoZSBpdGVyYXRvci5cbiAqL1xuXG4vKipcbiAqIFRoZSBvYmplY3QgcmV0dXJuZWQgYnkgYSBjYWxsIHRvIGB7QGxpbmsgbW9kdWxlOmNvcmUuTmV4dEZ1bmN0aW9ufG5leHR9YC4gSXRcbiAqIGluZGljYXRlcyB3aGV0aGVyIHRoZSBpdGVyYXRvciBpcyBjb21wbGV0ZSBhbmQsIGlmIG5vdCwgd2hhdCB0aGUgbmV4dCB2YWx1ZVxuICogaXMuXG4gKlxuICogQHR5cGVkZWYge29iamVjdH0gTmV4dFZhbHVlXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNvcmVcbiAqIEBwcm9wZXJ0eSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRoYXQgdGhlIGl0ZXJhdG9yIGhhcyBwcm92aWRlZC5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gZG9uZSBJbmRpY2F0ZXMgd2hldGhlciB0aGUgaXRlcmF0b3IgaGFzIGNvbXBsZXRlZC4gSWZcbiAqICAgICB0aGlzIGlzIGB0cnVlYCwgdGhlbiBgdmFsdWVgIHdpbGwgYmUgYHVuZGVmaW5lZGAgYW5kIGV2ZXJ5IHN1YnNlcXVlbnRcbiAqICAgICBjYWxsIHRvIGB7QGxpbmsgbW9kdWxlOmNvcmUuTmV4dEZ1bmN0aW9ufG5leHR9YCB3aWxsIGNvbnRpbnVlIHRvIHByb2R1Y2VcbiAqICAgICB0aGUgc2FtZSB2YWx1ZS4gSWYgaXQncyBgZmFsc2VgLCB0aGVuIGB2YWx1ZWAgcmVwcmVzZW50cyB0aGUgbmV0IHZhbHVlIGluXG4gKiAgICAgdGhlIGl0ZXJhdG9yLCBhbmQgdGhlIG5leHQgY2FsbCB0b1xuICogICAgIGB7QGxpbmsgbW9kdWxlOmNvcmUuTmV4dEZ1bmN0aW9ufG5leHR9YCB3aWxsIGNvbnRpbnVlIHRvIHByb2R1Y2UgdGhlIG5leHRcbiAqICAgICB2YWx1ZS5cbiAqL1xuXG4vKipcbiAqIEEgc29ydCBmdW5jdGlvbiBmb3IgdGhlIGtleXMgb2YgYW4gb2JqZWN0LiBUaGlzIGNvbmZvcm1zIHRvIHRoZSBub3JtYWwgc29ydFxuICogZnVuY3Rpb24gdXNlZCBpbiBgQXJyYXkucHJvdG90eXBlLnNvcnRgLlxuICpcbiAqIEBjYWxsYmFjayBTb3J0RnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y29yZVxuICogQHByb3BlcnR5IHsqfSBhIFRoZSBmaXJzdCB2YWx1ZSB0byBiZSBzb3J0ZWQuXG4gKiBAcHJvcGVydHkgeyp9IGIgVGhlIHNlY29uZCB2YWx1ZSB0byBiZSBzb3J0ZWQuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBFaXRoZXIgYC0xYCBpZiBgYSA+IGJgLCBgMWAgaWYgYGEgPCBiYCwgb3IgYDBgIGlmIGBhID09PVxuICogICAgIGJgLlxuICovXG5cbi8qKlxuICogQSBmdW5jdGlvbiB0aGF0IGNhbiBoYXZlIGFuIGl0ZXJhdG9yIGNyZWF0ZWQgZm9yIGl0LlxuICpcbiAqIEBjYWxsYmFjayBJdGVyYWJsZUZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNvcmVcbiAqIEBwYXJhbSB7bnVtYmVyfSBbaW5kZXhdIFRoZSBudW1iZXIgb2YgdGltZXMgdGhhdFxuICogICAgIGB7QGxpbmsgbW9kdWxlOmNvcmUuTmV4dEZ1bmN0aW9ufG5leHR9YCBoYXMgYmVlbiBjYWxsZWQgb24gdGhlIGZ1bmN0aW9uJ3NcbiAqICAgICBpdGVyYXRvci4gVGhpcyB3aWxsIHN0YXJ0IGF0IGAwYCBmb3IgdGhlIGZpcnN0IGNhbGwgdG9cbiAqICAgICBge0BsaW5rIG1vZHVsZTpjb3JlLk5leHRGdW5jdGlvbnxuZXh0fWAgYW5kIGluY3JlYXNlIGJ5IG9uZSBmb3IgZWFjaFxuICogICAgIHN1YnNlcXVlbnQgY2FsbC5cbiAqIEBwYXJhbSB7Kn0gW2xhc3RdIFRoZSByZXR1cm4gdmFsdWUgb2YgdGhlIGZ1bmN0aW9uIHRoZSBsYXN0IHRpbWVcbiAqICAgICBge0BsaW5rIG1vZHVsZTpjb3JlLk5leHRGdW5jdGlvbnxuZXh0fWAgd2FzIGNhbGxlZCBvbiBpdHMgaXRlcmF0b3IuIEZvclxuICogICAgIHRoZSBmaXJzdCBjYWxsLCB0aGlzIGlzIHNldCB0byBgdW5kZWZpbmVkYC5cbiAqIEByZXR1cm5zIHsqfSBUaGUgcmV0dXJuIHZhbHVlIGZvciB0aGF0IGl0ZXJhdGlvbi5cbiAqL1xuXG4vKipcbiAqIEFuIG9iamVjdCByZXByZXNlbnRhdGlvbiBvZiBhIHNpbmdsZS1wcm9wZXJ0eSBvYmplY3QsIGJ1dCB1c2luZyBvbmUgcHJvcGVydHlcbiAqIGZvciB0aGUga2V5IGFuZCBvbmUgZm9yIHRoZSB2YWx1ZS4gVGhpcyBmb3JtYXQgaXMgZWFzaWVyIHRvIHVzZSBpblxuICogdHJhbnNmb3JtYXRpb24gZnVuY3Rpb25zLlxuICpcbiAqIEB0eXBlZGVmIHtvYmplY3R9IFByb3BlcnR5T2JqZWN0XG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNvcmVcbiAqIEBwcm9wZXJ0eSB7KFN0cmluZ3xTeW1ib2wpfSBrIFRoZSBrZXkgb2YgdGhlIHNpbmdsZS1wcm9wZXJ0eSBvYmplY3QgdGhhdCB0aGlzXG4gKiAgICAgb2JqZWN0IHJlcHJlc2VudHMuXG4gKiBAcHJvcGVydHkgeyp9IHYgVGhlIHZhbHVlIG9mIHRoZSBzaW5nbGUtcHJvcGVydHkgb2JqZWN0IHRoYXQgdGhpcyBvYmplY3RcbiAqICAgICByZXByZXNlbnRzLlxuICovXG5cbi8qKlxuICogQW4gaW5pdCBmdW5jdGlvbiwgd2hpY2ggcHJvdmlkZXMgYSBuZXcsIGVtcHR5IGluc3RhbmNlIG9mIGEgY29sbGVjdGlvbi5cbiAqXG4gKiBAY2FsbGJhY2sgSW5pdEZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNvcmVcbiAqIEByZXR1cm5zIHsqfSBBIG5ldywgZW1wdHkgaW5zdGFuY2Ugb2YgYSBjb2xsZWN0aW9uLlxuICovXG5cbi8qKlxuICogQSBzdGVwIGZ1bmN0aW9uLCB0aGF0IHJlZHVjZXMgYSBjb2xsZWN0aW9uIGFuZCBhIG5ldyB2YWx1ZSB0byB0aGUgY29sbGVjdGlvblxuICogd2l0aCB0aGUgdmFsdWUgYWRkZWQuXG4gKlxuICogQGNhbGxiYWNrIFN0ZXBGdW5jdGlvblxuICogQG1lbWJlcm9mIG1vZHVsZTpjb3JlXG4gKiBAcGFyYW0geyp9IGFjYyBBbiBhY2N1bXVsYXRlZCB2YWx1ZSB0byB3aGljaCB0aGUgbmV3IHZhbHVlIGlzIGJlaW5nIGFkZGVkLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgbmV3IHZhbHVlIHRvIGJlIGFkZGVkIHRvIHRoZSBhY2N1bXVsYXRlZCB2YWx1ZS5cbiAqIEByZXR1cm5zIHsqfSBUaGUgYWNjdW11bGF0ZWQgdmFsdWUgd2l0aCB0aGUgbmV3IHZhbHVlIGludGVncmF0ZWQgaW50byBpdC5cbiAqL1xuXG4vKipcbiAqIEEgcmVzdWx0IGZ1bmN0aW9uIHRoYXQgb3B0aW9uYWxseSBtb2RpZmllcyB0aGUgaW5wdXQgY29sbGVjdGlvbiBhbmQgdGhlblxuICogcmV0dXJucyBpdC4gVGhpcyBpcyB1c2VkIGF0IHRoZSBlbmQgb2YgYSByZWR1Y3Rpb24gdG8gYWZmb3JkIGEgbGFzdCBjaGFuY2VcbiAqIGZvciB0aGUgdHJhbnNkdWNlciB0byBtb2RpZnkgdGhlIG91dHB1dCB2YWx1ZS5cbiAqXG4gKiBAY2FsbGJhY2sgUmVzdWx0RnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y29yZVxuICogQHBhcmFtIHsqfSBpbnB1dCBUaGUgdmFsdWUgdG8gYmUgbW9kaWZpZWQgYmVmb3JlIGJlaW5nIG91dHB1dC5cbiAqIEByZXR1cm5zIHsqfSBUaGUgbW9kaWZpZWQgdmFsdWUgdG8gYmUgb3V0cHV0IGJ5IGEgdHJhbnNkdWNlci5cbiAqL1xuXG4vKipcbiAqIEFuIG9iamVjdCB3aXRoIGFsbCBvZiB0aGUgaW5mb3JtYXRpb24gbmVjZXNzYXJ5IHRvIHJlZHVjZSB2YWx1ZXMgaW50byBhXG4gKiBwYXJ0aWN1bGFyIGtpbmQgb2YgY29sbGVjdGlvbi4gVGhlc2UgYXJlIHBhc3NlZCB0b1xuICoge0BsaW5rIG1vZHVsZTpjb3JlLnJlZHVjZXxyZWR1Y2V9IGFuZCBsaWtlIGZ1bmN0aW9ucy5cbiAqXG4gKiBAdHlwZWRlZiBSZWR1Y2VyXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNvcmVcbiAqIEBwcm9wZXJ0eSB7bW9kdWxlOmNvcmUuSW5pdEZ1bmN0aW9ufSBbU3ltYm9sLmZvcihcInRyYW5zZHVjZXIvaW5pdFwiKV0gVGhlXG4gKiAgICAgcmVkdWNlcidzIGluaXQgZnVuY3Rpb24uXG4gKiBAcHJvcGVydHkge21vZHVsZTpjb3JlLlN0ZXBGdW5jdGlvbn0gU3ltYm9sLmZvcihcInRyYW5zZHVjZXIvc3RlcFwiKSBUaGVcbiAqICAgICByZWR1Y2VyJ3Mgc3RlcCBmdW5jdGlvbi5cbiAqIEBwcm9wZXJ0eSB7bW9kdWxlOmNvcmUuUmVzdWx0RnVuY3Rpb259IFN5bWJvbC5mb3IoXCJ0cmFuc2R1Y2VyL3Jlc3VsdFwiKSBUaGVcbiAqICAgICByZWR1Y2VyJ3MgcmVzdWx0IGZ1bmN0aW9uLlxuICovXG5cbi8qKlxuICogQSBjb2xsZWN0aW9uIHRoYXQgY2FuIGhhdmUgdmFsdWVzIHJlZHVjZWQgaW50byBpdC4gU2luY2UgdGhpcyBsaWJyYXJ5XG4gKiBwcm92aWRlcyBleHBsaWNpdCBzdXBwb3J0IGZvciBhcnJheXMsIG9iamVjdHMsIGFuZCBzdHJpbmdzLCB0aG9zZSB0aHJlZSBhcmVcbiAqIGFkZGVkIHRvIHRoZSB7QGxpbmsgbW9kdWxlOmNvcmUuUmVkdWNlcn0gdHlwZSB0byBkZWZpbmUgdGhpcy5cbiAqXG4gKiBAdHlwZWRlZiB7KEFycmF5fFN0cmluZ3xPYmplY3R8bW9kdWxlOmNvcmUuUmVkdWNlcil9IFJlZHVjaWJsZVxuICogQG1lbWJlcm9mIG1vZHVsZTpjb3JlXG4gKi9cblxuLyoqXG4gKiBBIGNvbGxlY3Rpb24gdGhhdCBzdXBwb3J0cyBub3Qgb25seSB0aGUgcmVndWxhciBpdGVyYWlvbiBvdmVyIGl0cyBjb250ZW50cyxcbiAqIGJ1dCBhbHNvIHJlZHVjdGlvbiBvZiB2YWx1ZXMgaW50byBpdC4gSXQgaXMgYW4gaW50ZXJzZWN0aW9uIHR5cGUgY29tYmluaW5nXG4gKiB7QGxpbmsgbW9kdWxlOmNvcmUuSXRlcmFibGV8SXRlcmFibGV9IGFuZFxuICoge0BsaW5rIG1vZHVsZTpjb3JlLlJlZHVjaWJsZXxSZWR1Y2libGV9LlxuICpcbiAqIEB0eXBlZGVmIEV4cGxpY2l0SXRlcmFibGVSZWR1Y2libGVcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y29yZVxuICogQHByb3BlcnR5IHttb2R1bGU6Y29yZS5Kc0l0ZXJhYmxlRnVuY3Rpb259IFN5bWJvbC5pdGVyYXRvciBBIGZ1bmN0aW9uIHRoYXRcbiAqICAgICBwcm9kdWNlcyBhbiBpdGVyYXRvciB3aGVuIGNhbGxlZC5cbiAqIEBwcm9wZXJ0eSB7bW9kdWxlOmNvcmUuSW5pdEZ1bmN0aW9ufSBbU3ltYm9sLmZvcihcInRyYW5zZHVjZXIvaW5pdFwiKV0gVGhlXG4gKiAgICAgY29sbGVjdGlvbidzIGluaXQgZnVuY3Rpb24uXG4gKiBAcHJvcGVydHkge21vZHVsZTpjb3JlLlN0ZXBGdW5jdGlvbn0gU3ltYm9sLmZvcihcInRyYW5zZHVjZXIvc3RlcFwiKSBUaGVcbiAqICAgICBjb2xsZWN0aW9uJ3Mgc3RlcCBmdW5jdGlvbi5cbiAqIEBwcm9wZXJ0eSB7bW9kdWxlOmNvcmUuUmVzdWx0RnVuY3Rpb259IFN5bWJvbC5mb3IoXCJ0cmFuc2R1Y2VyL3Jlc3VsdFwiKSBUaGVcbiAqICAgICBjb2xsZWN0aW9uJ3MgcmVzdWx0IGZ1bmN0aW9uLlxuICovXG5cbi8qKlxuICogVGhlIGFjdHVhbCB0eXBlIHVzZWQgYnkgcmVkdWNpYmxlIGNvbGxlY3Rpb25zIGluIHRoaXMgbGlicmFyeS4gSXQgdGFrZXMgdGhlXG4gKiBwcm9wZXJ0eS1iYXNlZCBkZWZpbml0aW9uIGFuZCBhZGRzIGJ1aWx0LWluIHR5cGVzIHRoYXQgYXJlIHNwZWNpYWxseVxuICogc3VwcG9ydGVkIGJ5IHRoZSBsaWJyYXJ5LlxuICpcbiAqIEB0eXBlZGVmIHsoQXJyYXl8T2JqZWN0fFN0cmluZ3xtb2R1bGU6Y29yZS5FeHBsaWNpdEl0ZXJhYmxlUmVkdWNpYmxlKX1cbiAqICAgICBJdGVyYWJsZVJlZHVjaWJsZVxuICogQG1lbWJlcm9mIG1vZHVsZTpjb3JlXG4gKi9cblxuLyoqXG4gKiBBIGZ1bmN0aW9uIHRoYXQgdHJhbnNmb3JtcyBkYXRhIGFuZCBjYW4gYmUgY29tcG9zZWQgd2l0aCBvdGhlciB0cmFuc2R1Y2Vyc1xuICogaW50byBhIHNpbmdsZSB0cmFuc2R1Y2VyLiBUaGUgdHJhbnNkdWNlcnMgdGhlbXNlbHZlcyBhcmUgcHJvdmlkZWQgYnkgb3RoZXJcbiAqIGxpYnJhcmllczsgdGhlIG9ubHkgaW52b2x2ZW1lbnQgb2YgdGhpcyBsaWJyYXIgaXMgYXMgYSBjb25zdW1lciBvZlxuICogdHJhbnNkdWNlcnMuXG4gKlxuICogVHJhbnNkdWNlcnMgd29yayBieSBoYXZpbmcgc3RlcCBmdW5jdGlvbnMgdGhhdCBhcmUga25vd24gdmlhIHByb3RvY29sLCBhbmQgaXRcbiAqIGlzIHRoZXNlIHN0ZXAgZnVuY3Rpb25zIHRoYXQgdGFrZSBhIHZhbHVlIGF0IGEgdGltZSB0byBiZSB0cmFuc2Zvcm1lZCBhc1xuICogdGhlaXIgYXJndW1lbnRzLiBUaGUgYXJndW1lbnRzIHRvIHRoZSB0cmFuc2R1Y2VycyB0aGVtc2VsdmVzIGFyZSBvdGhlclxuICogdHJhbnNkdWNlcnMgdGhhdCBhcmUgdGhlbiBjb21wb3NlZCBpbnRvIGEgc2luZ2xlIHRyYW5zZHVjZXIsIHdoaWNoIGlzIHRoZW5cbiAqIHJldHVybmVkLiBUaGUgdmFsdWVzIHRoYXQgYXJlIHByb2R1Y2VkIGFyZSBzZWxkb20gb2YgY29uc2VxdWVuY2UgdG8gdGhlIGVuZFxuICogdXNlcjsgdGhlc2UgZnVuY3Rpb25zIGV4aXN0IHRvIGJlIHBhc3NlZCB0byBvdGhlciBmdW5jdGlvbnMgdGhhdCBkZWFsIHdpdGhcbiAqIHRyYW5zZHVjZXJzLlxuICpcbiAqIEBjYWxsYmFjayBUcmFuc2R1Y2VyXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNvcmVcbiAqIEBwYXJhbSB7bW9kdWxlOmNvcmUuVHJhbnNkdWNlckZ1bmN0aW9ufSB4Zm9ybSBBIHRyYW5zZHVjZXIgdG8gY2hhaW4gdGhpc1xuICogICAgIHRyYW5zZHVjZXIgdG8uXG4gKiBAcmV0dXJuIHttb2R1bGU6Y29yZS5UcmFuc2R1Y2VyRnVuY3Rpb259IEEgbmV3IHRyYW5zZHVjZXIgY29uc2lzdGluZyBvZiB0aGVcbiAqICAgICBjb21wb3NpdGlvbiBvZiB0aGlzIG9uZSBhbmQgYHhmb3JtYC5cbiAqL1xuXG4vKipcbiAqIEFuIG9iamVjdCBjb250YWluaW5nIGFsbCBvZiB0aGUgbmVjZXNzYXJ5IGZ1bmN0aW9uIHByb3BlcnRpZXMgZm9yXG4gKiB0cmFuc2Zvcm1pbmcgZGF0YSBhbmQgdGhlbiByZWR1Y2luZyBpdCBpbnRvIGFuIG91dHB1dCB2YWx1ZS4gVGhpcyBpcyB0aGUgc2FtZVxuICogYXMge0BsaW5rIG1vZHVsZTpjb3JlLlJlZHVjZXJ8UmVkdWNlcn0gZXhjZXB0IHRoYXQgdGhlIGBpbml0YCBwcm9wZXJ0eSBpcyBub3RcbiAqIG9wdGlvbmFsLlxuICpcbiAqIEB0eXBlZGVmIFRyYW5zZHVjZXJcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y29yZVxuICogQHByb3BlcnR5IHttb2R1bGU6Y29yZS5Jbml0RnVuY3Rpb259IFN5bWJvbC5mb3IoXCJ0cmFuc2R1Y2VyL2luaXRcIikgVGhlXG4gKiAgICAgdHJhbnNkdWNlcidzIGluaXQgZnVuY3Rpb24uXG4gKiBAcHJvcGVydHkge21vZHVsZTpjb3JlLlN0ZXBGdW5jdGlvbn0gU3ltYm9sLmZvcihcInRyYW5zZHVjZXIvc3RlcFwiKSBUaGVcbiAqICAgICB0cmFuc2R1Y2VyJ3Mgc3RlcCBmdW5jdGlvbi5cbiAqIEBwcm9wZXJ0eSB7bW9kdWxlOmNvcmUuUmVzdWx0RnVuY3Rpb259IFN5bWJvbC5mb3IoXCJ0cmFuc2R1Y2VyL3Jlc3VsdFwiKSBUaGVcbiAqICAgICB0cmFuc2R1Y2VyJ3MgcmVzdWx0IGZ1bmN0aW9uLlxuICovXG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuLyoqXG4gKiBGdW5jdGlvbnMgdG8gaGVscCB3aXRoIGl0ZXJhdGlvbiBvdmVyIGl0ZXJhYmxlIG9iamVjdHMgYW5kIHBsYWluIG9iamVjdHMuXG4gKlxuICogQG1vZHVsZSBjb3JlL2l0ZXJhdGlvblxuICogQHByaXZhdGVcbiAqL1xuXG5pbXBvcnQgeyBpc0ltcGxlbWVudGVkIH0gZnJvbSBcIm1vZHVsZXMvcHJvdG9jb2xcIjtcbmltcG9ydCB7IGlzRnVuY3Rpb24sIGlzT2JqZWN0LCBpc0dlbmVyYXRvckZ1bmN0aW9uIH0gZnJvbSBcIm1vZHVsZXMvdXRpbHNcIjtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGl0ZXJhdG9yIG92ZXIgYW4gb2JqZWN0LlxuICpcbiAqIERldGFpbHMgYWJvdXQgdGhpcyBmdW5jdGlvbiBhcmUgaW5jbHVkZWQgaW4gdGhlIGRvY3VtZW50YXRpb24gZm9yXG4gKiB7QGxpbmsgbW9kdWxlOmNvcmUuaXRlcmF0b3J8aXRlcmF0b3J9LlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmogVGhlIG9iamVjdCBiZWluZyBpdGVyYXRlZCBvdmVyLlxuICogQHBhcmFtIHttb2R1bGU6Y29yZS5Tb3J0RnVuY3Rpb259IFtzb3J0Rm5dIEFuIG9wdGlvbmFsIGZ1bmN0aW9uIHVzZWQgdG8gc29ydFxuICogICAgIHRoZSBvYmplY3Qga2V5cyBiZWZvcmUgaXRlcmF0aW9uLiBJZiBpdCBpc24ndCBwcm92aWRlZCwgdGhlIGtleXMgd2lsbCBiZVxuICogICAgIHNvcnRlZCBpbiB0aGUgc2FtZSBvcmRlciBhcyBgT2JqZWN0LmtleXMob2JqKWAgd291bGQgc29ydCB0aGVtLlxuICogQHJldHVybnMge21vZHVsZTpjb3JlLkl0ZXJhdG9yfSBBbiBpdGVyYXRvciBvdmVyIHRoZSBwcm9wZXJ0aWVzIG9mIGBvYmpgLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gb2JqZWN0SXRlcmF0b3Iob2JqLCBzb3J0Rm4pIHtcbiAgcmV0dXJuIChmdW5jdGlvbiooKSB7XG4gICAgY29uc3Qga2V5cyA9XG4gICAgICB0eXBlb2Ygc29ydEZuID09PSBcImZ1bmN0aW9uXCJcbiAgICAgICAgPyBPYmplY3Qua2V5cyhvYmopLnNvcnQoc29ydEZuKVxuICAgICAgICA6IE9iamVjdC5rZXlzKG9iaik7XG4gICAgbGV0IGluZGV4ID0gMDtcblxuICAgIHdoaWxlIChpbmRleCA8IGtleXMubGVuZ3RoKSB7XG4gICAgICBjb25zdCBrID0ga2V5c1tpbmRleCsrXTtcbiAgICAgIHlpZWxkIHsgW2tdOiBvYmpba10gfTtcbiAgICB9XG4gIH0pKCk7XG59XG5cbi8qKlxuICogQSBjb252ZW5pZW5jZSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIGZpcnN0IGtleSBhbmQgdmFsdWUgaW4gYW4gb2JqZWN0IGFzIGFcbiAqIHR3by1wcm9wZXJ0eSBvYmplY3QsIG9uZSBwcm9wZXJ0eSBmb3IgdGhlIGtleSBhbmQgb25lIGZvciB0aGUgdmFsdWUuIFRoaXMgaXNcbiAqIGludGVuZGVkIHRvIHdvcmsgd2l0aCB0aGUgdmFsdWVzIHByb3ZpZGVkIGJ5IGFuIG9iamVjdCBpdGVyYXRvciwgYXMgdGhlXG4gKiBzeW50YXggb2Ygb2JqZWN0cyBkb2Vzbid0IHdvcmsgdmVyeSBuaWNlbHkgd2l0aCBzaW5nbGUtcHJvcGVydHkgb2JqZWN0cy5cbiAqXG4gKiBgYGBcbiAqIGNvbnN0IG9iaiA9IHsgYzogMSwgYTogMiwgYjogMyB9O1xuICogY29uc3QgaXRlciA9IGl0ZXJhdG9yKG9iaik7XG4gKlxuICogbGV0IHZhbHVlID0gaXRlci5uZXh0KCkudmFsdWU7XG4gKiBjb25zb2xlLmxvZyh2YWx1ZSk7ICAgICAgICAgICAgIC8vIC0+IHsgYzogMSB9XG4gKiBjb25zb2xlLmxvZyhwcm9wZXJ0eSh2YWx1ZSkpOyAgIC8vIC0+IHsgazogXCJjXCIsIHY6IDEgfVxuICpcbiAqIHZhbHVlID0gaXRlci5uZXh0KCkudmFsdWU7XG4gKiBjb25zb2xlLmxvZyh2YWx1ZSk7ICAgICAgICAgICAgIC8vIC0+IHsgYTogMiB9XG4gKiBjb25zb2xlLmxvZyhwcm9wZXJ0eSh2YWx1ZSkpOyAgIC8vIC0+IHsgazogXCJhXCIsIHY6IDIgfVxuICpcbiAqIHZhbHVlID0gaXRlci5uZXh0KCkudmFsdWU7XG4gKiBjb25zb2xlLmxvZyh2YWx1ZSk7ICAgICAgICAgICAgIC8vIC0+IHsgYjogMyB9XG4gKiBjb25zb2xlLmxvZyhwcm9wZXJ0eSh2YWx1ZSkpOyAgIC8vIC0+IHsgazogXCJiXCIsIHY6IDMgfVxuICogYGBgXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjb3JlXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIFRoZSBvYmplY3Qgd2hvc2UgZmlyc3QgcHJvcGVydHkgaXMgcmV0dXJuZWQuXG4gKiBAcmV0dXJuIHttb2R1bGU6Y29yZS5Qcm9wZXJ0eU9iamVjdH0gVGhlIHByb3BlcnR5IGFzIGEgdHdvLXByb3BlcnR5IG9iamVjdC5cbiAqL1xuZnVuY3Rpb24ga3Yob2JqKSB7XG4gIGNvbnN0IGtleSA9IE9iamVjdC5rZXlzKG9iailbMF07XG4gIHJldHVybiB7IGs6IGtleSwgdjogb2JqW2tleV0gfTtcbn1cblxuLyoqXG4gKiBBIGNvbnZlbmllbmNlIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUga2V5IG9mIHRoZSBmaXJzdCBwcm9wZXJ0eSBvZiBhblxuICogb2JqZWN0LiBUaGlzIGlzIG1lYW50IGZvciB1c2Ugd2l0aCBvYmplY3QgaXRlcmF0b3JzIHRvIG1vcmUgY29udmVuaWVudGx5XG4gKiBhY2Nlc3MgcGFydHMgb2YgdGhlIHNpbmdsZS1wcm9wZXJ0eSBvYmplY3RzIHRoYXQgdGhleSBlbWl0LlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y29yZVxuICogQHBhcmFtIHtvYmplY3R9IG9iaiBUaGUgb2JqZWN0IHdob3NlIGZpcnN0IGtleSBpcyByZXR1cm5lZC5cbiAqIEByZXR1cm4geyhTdHJpbmd8U3ltYm9sKX0gVGhlIGtleSBvZiB0aGUgb2JqZWN0J3MgZmlyc3QgcHJvcGVydHkuXG4gKi9cbmZ1bmN0aW9uIGtleShvYmopIHtcbiAgcmV0dXJuIGt2KG9iaikuaztcbn1cblxuLyoqXG4gKiBBIGNvbnZlbmllbmNlIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgdmFsdWUgb2YgdGhlIGZpcnN0IHByb3BlcnR5IG9mIGFuXG4gKiBvYmplY3QuIFRoaXMgaXMgbWVhbnQgZm9yIHVzZSB3aXRoIG9iamVjdCBpdGVyYXRvcnMgdG8gbW9yZSBjb252ZW5pZW50bHlcbiAqIGFjY2VzcyBwYXJ0cyBvZiB0aGUgc2luZ2xlLXByb3BlcnR5IG9iamVjdHMgdGhhdCB0aGV5IGVtaXQuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjb3JlXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIFRoZSBvYmplY3Qgd2hvc2UgZmlyc3QgdmFsdWUgaXMgcmV0dXJuZWQuXG4gKiBAcmV0dXJuIHsqfSBUaGUgdmFsdWUgb2YgdGhlIG9iamVjdCdzIGZpcnN0IHByb3BlcnR5LlxuICovXG5mdW5jdGlvbiB2YWx1ZShvYmopIHtcbiAgcmV0dXJuIGt2KG9iaikudjtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuIGl0ZXJhdG9yIG92ZXIgYSBmdW5jdGlvbi5cbiAqXG4gKiBEZXRhaWxzIGFib3V0IHRoaXMgZnVuY3Rpb24gYXJlIGluY2x1ZGVkIGluIHRoZSBkb2N1bWVudGF0aW9uIGZvclxuICoge0BsaW5rIG1vZHVsZTpjb3JlLml0ZXJhdG9yfGl0ZXJhdG9yfS5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTpjb3JlLkl0ZXJhYmxlRnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcmV0dXJucyB7bW9kdWxlOmNvcmUuSXRlcmF0b3J9IEFuIGl0ZXJhdG9yIG92ZXIgdGhlIHJldHVybiB2YWx1ZXMgb2YgYGZuYC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGZ1bmN0aW9uSXRlcmF0b3IoZm4pIHtcbiAgcmV0dXJuIChmdW5jdGlvbiooKSB7XG4gICAgbGV0IGN1cnJlbnQ7XG4gICAgbGV0IGluZGV4ID0gMDtcblxuICAgIGZvciAoOzspIHtcbiAgICAgIGN1cnJlbnQgPSBmbihpbmRleCsrLCBjdXJyZW50KTtcbiAgICAgIGlmICh0eXBlb2YgY3VycmVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHlpZWxkIGN1cnJlbnQ7XG4gICAgfVxuICB9KSgpO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYW4gaXRlcmF0b3Igb3ZlciB0aGUgcHJvdmlkZWQgdmFsdWUuXG4gKlxuICogRm9yIGNvbGxlY3Rpb25zIHRoYXQgaW1wbGVtZW50IHRoZSBpdGVyYWJsZSBwcm90b2NvbCwgaXQncyBhcyBzaW1wbGUgYXNcbiAqIHJldHVybmluZyB0aGUgaXRlcmF0b3IgYWxyZWFkeSBkZWZpbmVkIGZvciB0aGF0IGNvbGxlY3Rpb24uXG4gKlxuICogYGBgXG4gKiBjb25zdCBpdGVyID0gaXRlcmF0b3IoWzEsIDIsIDNdKTtcbiAqIGNvbnNvbGUubG9nKGl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiAxXG4gKiBjb25zb2xlLmxvZyhpdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4gMlxuICogY29uc29sZS5sb2coaXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IDNcbiAqIGNvbnNvbGUubG9nKGl0ZXIubmV4dCgpLmRvbmUpOyAgICAvLyAtPiB0cnVlXG4gKiBgYGBcbiAqXG4gKiBPYmplY3RzIGFyZSBzcGVjaWFsbHkgc3VwcG9ydGVkIHRvIHJldHVybiBhbiBpdGVyYXRvciBhcyB3ZWxsLCBldmVuIHRob3VnaFxuICogdGhleSBkb24ndCBuYXRpdmVseSBzdXBwb3J0IHRoZSBpdGVyYWJsZSBwcm90b2NvbC4gVGhlIGl0ZXJhdG9yJ3MgYG5leHRgXG4gKiBmdW5jdGlvbiBwcm92aWRlcyBzaW5nbGUtcHJvcGVydHkgb2JqZWN0cywgb25lIGZvciBlYWNoIHByb3BlcnR5IGluIHRoZVxuICogb3JpZ2luYWwgb2JqZWN0LCBvcmRlcmVkIGluIHRoZSBzdGFuZGFyZCBwb3N0LUVTNiBvcmRlciBmb3IgaXRlcmF0aW5nIG92ZXJcbiAqIG9iamVjdCBrZXlzOlxuICpcbiAqIDEuIEtleXMgdGhhdCBhcmUgaW50ZWdlcnMsIGluIGFzY2VuZGluZyBudW1lcmljYWwgb3JkZXJcbiAqIDIuIEFsbCBvdGhlciBzdHJpbmcga2V5cywgaW4gdGhlIG9yZGVyIGluIHdoaWNoIHRoZXkgd2VyZSBhZGRlZCB0byB0aGUgb2JqZWN0XG4gKiAzLiBBbGwgc3ltYm9sIGtleXMsIGluIHRoZSBvcmRlciBpbiB3aGljaCB0aGV5IHdlcmUgYWRkZWQgdG8gdGhlIG9iamVjdFxuICpcbiAqIElmIGEgZGlmZmVyZW50IG9yZGVyIGlzIG5lZWRlZCwgdGhpcyBmdW5jdGlvbiB0YWtlcyBhIHNlY29uZCBhcmd1bWVudCwgYSBzb3J0XG4gKiBmdW5jdGlvbiwgdGhhdCBhZmZlY3RzIG9iamVjdHMgb25seS4gSXQgaXMgYSBzdGFuZGFyZCBmdW5jdGlvbiB0aGF0IHdvdWxkIGJlXG4gKiBwYXNzZWQgdG8gYEFycmF5LnByb3RvdHlwZS5zb3J0YCBhbmQgc29ydHMgdGhlIGtleXMgYWNjb3JkaW5nbHkuXG4gKlxuICogYGBgXG4gKiBjb25zdCBhbHBoYSA9IChhLCBiKSA9PiAoYSA8IGIgPyAtMSA6IGIgPCBhID8gMSA6IDApO1xuICogY29uc3Qgb2JqID0geyBjOiAxLCBhOiAyLCBiOiAzIH07XG4gKlxuICogY29uc3Qgb2JqSXRlciA9IGl0ZXJhdG9yKG9iaik7XG4gKiBjb25zb2xlLmxvZyhvYmpJdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4geyBjOiAxIH1cbiAqIGNvbnNvbGUubG9nKG9iakl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiB7IGE6IDIgfVxuICogY29uc29sZS5sb2cob2JqSXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IHsgYjogMyB9XG4gKlxuICogY29uc3Qgc29ydGVkSXRlciA9IGl0ZXJhdG9yKG9iaiwgYWxwaGEpO1xuICogY29uc29sZS5sb2cob2JqSXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IHsgYTogMiB9XG4gKiBjb25zb2xlLmxvZyhvYmpJdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4geyBiOiAzIH1cbiAqIGNvbnNvbGUubG9nKG9iakl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiB7IGM6IDEgfVxuICogYGBgXG4gKlxuICogQWRkaXRpb25hbGx5LCB0aGVyZSBpcyBzcGVjaWFsIHN1cHBvcnQgZm9yIHBhc3NpbmcgYSBmdW5jdGlvbiB0byB0aGlzXG4gKiBmdW5jdGlvbi4gVGhlIGl0ZXJhdG9yIHJldHVybmVkIHJ1bnMgdGhhdCBmdW5jdGlvbiBmb3IgZWFjaCBjYWxsIHRvIGBuZXh0YC5cbiAqIFRoYXQgZnVuY3Rpb24gaXMgcHJvdmlkZWQgdHdvIGFyZ3VtZW50czogdGhlIGluZGV4IChzdGFydGluZyBhdCBgMGAgZm9yIHRoZVxuICogZmlyc3QgY2FsbCB0byBgbmV4dGAgYW5kIGluY3JlYXNpbmcgYnkgMSBmb3IgZWFjaCBjYWxsIHRvIGBuZXh0YCBhZnRlcikgYW5kXG4gKiB0aGUgcmV0dXJuIHZhbHVlIG9mIHRoZSBwcmV2aW91cyBjYWxsIHRvIGBuZXh0YCAoZm9yIHRoZSBmaXJzdCBjYWxsIHRvXG4gKiBgbmV4dGAsIHRoaXMgd2lsbCBiZSBgdW5kZWZpbmVkYCkuIFRoZSBpdGVyYXRpb24gd2lsbCBjb250aW51ZSB1bnRpbCB0aGVcbiAqIGZpcnN0IHRpbWUgdGhlIGl0ZXJhdGVkIGZ1bmN0aW9uIHJldHVybnMgYHVuZGVmaW5lZGA7IGF0IHRoYXQgcG9pbnQgdGhlXG4gKiBpdGVyYXRvciB3aWxsIHRlcm1pbmF0ZSBhbmQgcmV0dXJuIGB7IGRvbmU6IHRydWUgfWAgb2ZmIHN1YnNlcXVlbnQgYG5leHRgXG4gKiBjYWxscy5cbiAqXG4gKiBgYGBcbiAqIGNvbnN0IGNvbnN0SXRlciA9IGl0ZXJhdG9yKCgpID0+IDYpO1xuICogY29uc29sZS5sb2coY29uc3RJdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4gNlxuICogY29uc29sZS5sb2coY29uc3RJdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4gNlxuICogLy8gVGhpcyB3aWxsIGNvbnRpbnVlIGZvcmV2ZXIsIGFzIGxvbmcgYXMgYG5leHRgIGtlZXBzIGdldHRpbmcgY2FsbGVkXG4gKlxuICogY29uc3QgaW5kZXhJdGVyID0gaXRlcmF0b3IoeCA9PiB4ICogeCk7XG4gKiBjb25zb2xlLmxvZyhpbmRleEl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiAwO1xuICogY29uc29sZS5sb2coaW5kZXhJdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4gMTtcbiAqIGNvbnNvbGUubG9nKGluZGV4SXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IDQ7XG4gKiBjb25zb2xlLmxvZyhpbmRleEl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiA5O1xuICogLy8gVGhpcyB3aWxsIGNvbnRpbnVlIGZvcmV2ZXIgb3IgdW50aWwgdGhlIG51bWJlcnMgZ2V0IHRvbyBiaWcgZm9yXG4gKiAvLyBKYXZhU2NyaXB0IHRvIGRlYWwgd3RpaFxuICpcbiAqIC8vIFVzaW5nIGEgZGVmYXVsdCB2YWx1ZSBmb3IgdGhlIGBsYXN0YCBwYXJhbWV0ZXIsIHdoaWNoIHNldHMgaXRzIHZhbHVlXG4gKiAvLyBmb3IgdGhlIGZpcnN0IHJ1biB3aGVuIGl0IGlzIG5vcm1hbGx5IGB1bmRlZmluZWRgXG4gKiBjb25zdCBsYXN0SXRlciA9IGl0ZXJhdG9yKCh4LCBsYXN0ID0gMSkgPT4gbGFzdCAqICh4ICsgMSkpOyAvLyBmYWN0b3JpYWwhXG4gKiBjb25zb2xlLmxvZyhsYXN0SXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IDFcbiAqIGNvbnNvbGUubG9nKGxhc3RJdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4gMlxuICogY29uc29sZS5sb2cobGFzdEl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiA2XG4gKiBjb25zb2xlLmxvZyhsYXN0SXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IDI0XG4gKiAvLyBBZ2FpbiwgcnVucyBmb3JldmVyLCB0aG91Z2ggZmFjdG9yaWFscyBnZXQgYmlnIHZlcnkgcXVpY2tseVxuICpcbiAqIC8vIEl0ZXJhdG9ycyB0ZXJtaW5hdGUgd2hlbiB0aGUgZnVuY3Rpb24gcmV0dXJucyBgdW5kZWZpbmVkYFxuICogY29uc3Qgc3RvcEl0ZXIgPSBpdGVyYXRvcih4ID0+IHggPCAyID8geCA6IHVuZGVmaW5lZCk7XG4gKiBjb25zb2xlLmxvZyhzdG9wSXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IDBcbiAqIGNvbnNvbGUubG9nKHN0b3BJdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4gMVxuICogY29uc29sZS5sb2coc3RvcEl0ZXIubmV4dCgpLmRvbmUpOyAgICAvLyAtPiB0cnVlXG4gKiBgYGBcbiAqXG4gKiBJZiB0aGUgcHJvdmlkZWQgdmFsdWUgaXMgbm90IGFjdHVhbGx5IGl0ZXJhYmxlIChvciBhbiBvYmplY3Qgb3IgYSBmdW5jdGlvbiksXG4gKiBgbnVsbGAgaXMgcmV0dXJuZWQgaW4gcGxhY2Ugb2YgdGhlIGl0ZXJhdG9yLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y29yZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY3JlYXRlIGFuIGl0ZXJhdG9yIG92ZXIuXG4gKiBAcGFyYW0ge21vZHVsZTpjb3JlLlNvcnRGdW5jdGlvbn0gW3NvcnRGbl0gQW4gb3B0aW9uYWwgc29ydCBmdW5jdGlvbiBmb3JcbiAqICAgICBzb3J0aW5nIHRoZSBrZXlzIG9mIGFuIG9iamVjdCBiZWZvcmUgaXRlcmF0aW9uLiBJdCBpcyBpZ25vcmVkIGlmIGB2YWx1ZWBcbiAqICAgICBpc24ndCBhIHBsYWluIG9iamVjdC5cbiAqIEByZXR1cm5zIHttb2R1bGU6Y29yZS5JdGVyYXRvcn0gQW4gaXRlcmF0b3Igb3ZlciBgdmFsdWVgLlxuICovXG5mdW5jdGlvbiBpdGVyYXRvcih2YWx1ZSwgc29ydEZuID0gbnVsbCkge1xuICBzd2l0Y2ggKHRydWUpIHtcbiAgICBjYXNlIGlzRnVuY3Rpb24odmFsdWVbU3ltYm9sLml0ZXJhdG9yXSk6XG4gICAgY2FzZSBpc0dlbmVyYXRvckZ1bmN0aW9uKHZhbHVlW1N5bWJvbC5pdGVyYXRvcl0pOlxuICAgICAgcmV0dXJuIHZhbHVlW1N5bWJvbC5pdGVyYXRvcl0oKTtcbiAgICBjYXNlIGlzRnVuY3Rpb24odmFsdWUpOlxuICAgICAgcmV0dXJuIGZ1bmN0aW9uSXRlcmF0b3IodmFsdWUpO1xuICAgIGNhc2UgaXNPYmplY3QodmFsdWUpOlxuICAgICAgcmV0dXJuIG9iamVjdEl0ZXJhdG9yKHZhbHVlLCBzb3J0Rm4pO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgcGFzc2VkIG9iamVjdCBpcyBpdGVyYWJsZSwgaW4gdGVybXMgb2Ygd2hhdCAnaXRlcmFibGUnXG4gKiBtZWFucyB0byB0aGlzIGxpYnJhcnkuIEluIG90aGVyIHdvcmRzLCB2YWx1ZXMgaW1wbGVtZW50aW5nIHRoZSBgaXRlcmFibGVgXG4gKiBwcm90b2NvbCBhbmQgcGxhaW4gb2JqZWN0cyByZXR1cm4gYHRydWVgLCB3aGlsZSBldmVyeXRoaW5nIGVsc2UgcmV0dXJuc1xuICogYGZhbHNlYC4gVGhpcyBkb2VzIG5vdCByZXR1cm4gYHRydWVgIGZvciBmdW5jdGlvbnMgZXZlbiB0aG91Z2hcbiAqIHtAbGluayBtb2R1bGU6Y29yZS5pdGVyYXRvcnxpdGVyYXRvcn0gY2FuIHByb2R1Y2UgYW4gaXRlcmF0b3IgZm9yIHRoZW0sXG4gKiBiZWNhdXNlIG5vdCBhbGwgZnVuY3Rpb25zIHdvcmsgd2VsbCB3aXRoXG4gKiB7QGxpbmsgbW9kdWxlOmNvcmUuaXRlcmF0b3J8aXRlcmF0b3J9LlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3QgZm9yIGl0ZXJhYmlsaXR5LlxuICogQHJldHVybiB7Ym9vbGVhbn0gRWl0aGVyIGB0cnVlYCBpZiB0aGUgdmFsdWUgaXMgaXRlcmFibGVcbiAqICAgICAoYHtAbGluayBtb2R1bGU6Y29yZS5pdGVyYXRvcn1gIHdpbGwgcmV0dXJuIGFuIGl0ZXJhdG9yIGZvciBpdCkgb3JcbiAqICAgICBgZmFsc2VgIGlmIGl0IGlzIG5vdC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGlzSXRlcmFibGUodmFsdWUpIHtcbiAgcmV0dXJuIGlzSW1wbGVtZW50ZWQodmFsdWUsIFwiaXRlcmF0b3JcIikgfHwgaXNPYmplY3QodmFsdWUpO1xufVxuXG5leHBvcnQgeyBpdGVyYXRvciwgaXNJdGVyYWJsZSwga3YsIGtleSwgdmFsdWUgfTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG4vKipcbiAqIFByb3RvY29scyBmb3IgaXRlcmF0aW9uIGFuZCByZWR1Y3Rpb24uXG4gKlxuICogVGhlIG5hbWVzIGZvciB0aGVzZSBwcm90b2NvbHMgY2FtZSBmcm9tIGEgZGlzY3Vzc2lvbiB0aHJlYWRcbiAqICh7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2NvZ25pdGVjdC1sYWJzL3RyYW5zZHVjZXJzLWpzL2lzc3Vlcy8yMH0pIGZyb20gYVxuICogdGltZSB3aGVuIHRyYW5zZHVjZXJzIHdlcmUgdmVyeSBtdWNoIGluIHRoZSBmb3JlZnJvbnQuIEl0J3MgdGhlIGNsb3Nlc3QgdGhpbmdcbiAqIHRoZXJlIGlzIHRvIGEgc3RhbmRhcmQsIHNvIGl0IHdhcyBhZG9wdGVkIGhlcmUuXG4gKlxuICogVGhlc2UgYXJlIHRoZSBzYW1lIHN5bWJvbHMgYXMgYXZhaWxhYmxlIGluIG15IHRyYW5zZHVjZXIgbGlicmFyeS4gVGhleSBhcmVcbiAqIHB1YmxpY2x5IGF2YWlsYWJsZSBmcm9tIHRoZXJlLlxuICpcbiAqIEBtb2R1bGUgY29yZS9wcm90b2NvbFxuICogQHByaXZhdGVcbiAqL1xuXG5pbXBvcnQgeyBpc0Z1bmN0aW9uLCBpc0dlbmVyYXRvckZ1bmN0aW9uIH0gZnJvbSBcIm1vZHVsZXMvdXRpbHNcIjtcblxuLyoqXG4gKiBUaGUgbWFwcGluZyBvZiBwcm90b2NvbCBuYW1lcyB0byB0aGVpciByZXNwZWN0aXZlIHByb3BlcnR5IGtleSBuYW1lcy4gVGhlXG4gKiB2YWx1ZXMgb2YgdGhpcyBtYXAgd2lsbCBkZXBlbmQgb24gd2hldGhlciBzeW1ib2xzIGFyZSBhdmFpbGFibGUuXG4gKlxuICogQHR5cGVkZWYge29iamVjdH0gUHJvdG9jb2xNYXBcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y29yZVxuICogQHByb3BlcnR5IHtTeW1ib2x9IGluaXQgVGhlIGB0cmFuc2R1Y2VyL2luaXRgIHByb3RvY29sLiBUaGlzIGlzIHVzZWRcbiAqICAgICB0byBtYXJrIGZ1bmN0aW9ucyB0aGF0IGluaXRpYWxpemUgYSB0YXJnZXQgY29sbGVjdGlvbiBiZWZvcmUgYWRkaW5nIGl0ZW1zXG4gKiAgICAgdG8gaXQuXG4gKiBAcHJvcGVydHkge1N5bWJvbH0gc3RlcCBUaGUgYHRyYW5zZHVjZXIvc3RlcGAgcHJvdG9jb2wuIFRoaXMgaXMgdXNlZFxuICogICAgIHRvIG1hcmsgZnVuY3Rpb25zIHRoYXQgYXJlIHVzZWQgaW4gdGhlIHRyYW5zZHVjZXIncyBzdGVwIHByb2Nlc3MsIHdoZXJlXG4gKiAgICAgb2JqZWN0cyBhcmUgYWRkZWQgdG8gdGhlIHRhcmdldCBjb2xsZWN0aW9uIG9uZSBhdCBhIHRpbWUuXG4gKiBAcHJvcGVydHkge1N5bWJvbH0gcmVzdWx0IFRoZSBgdHJhbnNkdWNlci9yZXN1bHRgIHByb3RvY29sLiBUaGlzIGlzXG4gKiAgICAgdXNlZCB0byBtYXJrIGZ1bmN0aW9ucyB0aGF0IHRha2UgdGhlIGZpbmFsIHJlc3VsdCBvZiB0aGUgc3RlcCBwcm9jZXNzIGFuZFxuICogICAgIHJldHVybiB0aGUgZmluYWwgZm9ybSB0byBiZSBvdXRwdXQuIFRoaXMgaXMgb3B0aW9uYWw7IGlmIHRoZSB0cmFuc2R1Y2VyXG4gKiAgICAgZG9lcyBub3Qgd2FudCB0byB0cmFuc2Zvcm0gdGhlIGZpbmFsIHJlc3VsdCwgaXQgc2hvdWxkIGp1c3QgcmV0dXJuIHRoZVxuICogICAgIHJlc3VsdCBvZiBpdHMgY2hhaW5lZCB0cmFuc2R1Y2VyJ3MgYHJlc3VsdGAgZnVuY3Rpb24uXG4gKiBAcHJvcGVydHkge1N5bWJvbH0gcmVkdWNlZCBUaGUgYHRyYW5zZHVjZXIvcmVkdWNlZGAgcHJvdG9jb2wuIFRoZVxuICogICAgIHByZXNlbmNlIG9mIHRoaXMga2V5IG9uIGFuIG9iamVjdCBpbmRpY2F0ZXMgdGhhdCBpdHMgdHJhbnNmb3JtYXRpb24gaGFzXG4gKiAgICAgYmVlbiBjb21wbGV0ZWQuIEl0IGlzIHVzZWQgaW50ZXJuYWxseSB0byBtYXJrIGNvbGxlY3Rpb25zIHdob3NlXG4gKiAgICAgdHJhbnNmb3JtYXRpb25zIGNvbmNsdWRlIGJlZm9yZSBldmVyeSBvYmplY3QgaXMgaXRlcmF0ZWQgb3ZlciAoYXMgaW5cbiAqICAgICBge0BsaW5rIHhkdWNlLnRha2V9YCB0cmFuc2R1Y2Vycy4pIEl0IGlzIG9mIGxpdHRsZSB1c2UgYmV5b25kIHRyYW5zZHVjZXJcbiAqICAgICBhdXRob3JpbmcuXG4gKiBAcHJvcGVydHkge1N5bWJvbH0gdmFsdWUgVGhlIGB0cmFuc2R1Y2VyL3ZhbHVlYCBwcm90b2NvbC4gVGhpcyBpc1xuICogICAgIHVzZWQgaW50ZXJuYWxseSB0byBtYXJrIHByb3BlcnRpZXMgdGhhdCBjb250YWluIHRoZSB2YWx1ZSBvZiBhIHJlZHVjZWRcbiAqICAgICB0cmFuc2Zvcm1hdGlvbi4gSXQgaXMgb2YgbGl0dGxlIHVzZSBiZXlvbmQgdHJhbnNkdWNlciBhdXRob3JpbmcuXG4gKi9cblxuLyoqXG4gKiBUaGUgbWFwcGluZyBvZiBwcm90b2NvbCBuYW1lcyB0byB0aGVpciByZXNwZWN0aXZlIHByb3BlcnR5IGtleSBuYW1lcy5cbiAqXG4gKiBAdHlwZSB7bW9kdWxlOmNvcmUuUHJvdG9jb2xNYXB9XG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNvcmVcbiAqL1xuY29uc3QgcHJvdG9jb2xzID0gT2JqZWN0LmNyZWF0ZShudWxsLCB7XG4gIGluaXQ6IHtcbiAgICB2YWx1ZTogU3ltYm9sLmZvcihcInRyYW5zZHVjZXIvaW5pdFwiKVxuICB9LFxuICBzdGVwOiB7XG4gICAgdmFsdWU6IFN5bWJvbC5mb3IoXCJ0cmFuc2R1Y2VyL3N0ZXBcIilcbiAgfSxcbiAgcmVzdWx0OiB7XG4gICAgdmFsdWU6IFN5bWJvbC5mb3IoXCJ0cmFuc2R1Y2VyL3Jlc3VsdFwiKVxuICB9LFxuICByZWR1Y2VkOiB7XG4gICAgdmFsdWU6IFN5bWJvbC5mb3IoXCJ0cmFuc2R1Y2VyL3JlZHVjZWRcIilcbiAgfSxcbiAgdmFsdWU6IHtcbiAgICB2YWx1ZTogU3ltYm9sLmZvcihcInRyYW5zZHVjZXIvdmFsdWVcIilcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIGlzSW1wbGVtZW50ZWQob2JqLCBwcm90b2NvbCkge1xuICBpZiAob2JqID09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzd2l0Y2ggKHByb3RvY29sKSB7XG4gICAgY2FzZSBcIml0ZXJhdG9yXCI6XG4gICAgICByZXR1cm4gKFxuICAgICAgICBpc0Z1bmN0aW9uKG9ialtTeW1ib2wuaXRlcmF0b3JdKSB8fFxuICAgICAgICBpc0dlbmVyYXRvckZ1bmN0aW9uKG9ialtTeW1ib2wuaXRlcmF0b3JdKVxuICAgICAgKTtcbiAgICBjYXNlIFwiYXN5bmNJdGVyYXRvclwiOlxuICAgICAgcmV0dXJuIGlzR2VuZXJhdG9yRnVuY3Rpb24ob2JqW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSk7XG4gICAgY2FzZSBcInJlZHVjZWRcIjpcbiAgICBjYXNlIFwidmFsdWVcIjpcbiAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iaikuaW5jbHVkZXMocHJvdG9jb2xzW3Byb3RvY29sXSk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBpc0Z1bmN0aW9uKG9ialtwcm90b2NvbHNbcHJvdG9jb2xdXSk7XG4gIH1cbn1cblxuZXhwb3J0IHsgcHJvdG9jb2xzLCBpc0ltcGxlbWVudGVkIH07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuLyoqXG4gKiBBIHNldCBvZiBmdW5jdGlvbnMgcmVsYXRlZCB0byB0aGUgcHJvZHVjaW5nIHJlZHVjZXIgb2JqZWN0cywgbWFya2luZ1xuICogY29tcGxldGVkIG9iamVjdHMsIGFuZCBwZXJmb3JtaW5nIGdlbmVyYWwgcmVkdWN0aW9uIG9wZXJhdGlvbnMuXG4gKlxuICogQG1vZHVsZSBjb3JlL3JlZHVjdGlvblxuICogQHByaXZhdGVcbiAqL1xuXG5pbXBvcnQgeyBpc0ltcGxlbWVudGVkLCBwcm90b2NvbHMgYXMgcCB9IGZyb20gXCJtb2R1bGVzL3Byb3RvY29sXCI7XG5pbXBvcnQgeyBpc1N0cmluZywgaXNBcnJheSwgaXNPYmplY3QsIGlzRnVuY3Rpb24gfSBmcm9tIFwibW9kdWxlcy91dGlsc1wiO1xuaW1wb3J0IHsga3YsIGl0ZXJhdG9yIH0gZnJvbSBcIm1vZHVsZXMvaXRlcmF0aW9uXCI7XG5cbi8qKlxuICogUmV0dXJucyBhbiBpbml0IGZ1bmN0aW9uIGZvciBhIGNvbGxlY3Rpb24uIFRoaXMgaXMgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYVxuICogbmV3LCBlbXB0eSBpbnN0YW5jZSBvZiB0aGUgY29sbGVjdGlvbiBpbiBxdWVzdGlvbi4gSWYgdGhlIGNvbGxlY3Rpb24gZG9lc24ndFxuICogc3VwcG9ydCByZWR1Y3Rpb24sIGBudWxsYCBpcyByZXR1cm5lZC4gVGhpcyBtYWtlcyBjb25kaXRpb25hbHMgYSBiaXQgZWFzaWVyXG4gKiB0byB3b3JrIHdpdGguXG4gKlxuICogSW4gb3JkZXIgdG8gc3VwcG9ydCB0aGUgY29udmVyc2lvbiBvZiBmdW5jdGlvbnMgaW50byByZWR1Y2VycywgZnVuY3Rpb25cbiAqIHN1cHBvcnQgaXMgYWxzbyBwcm92aWRlZC5cbiAqXG4gKiBAcGFyYW0geyp9IGNvbGxlY3Rpb24gQSBjb2xsZWN0aW9uIHRvIGNyZWF0ZSBhbiBpbml0IGZ1bmN0aW9uIGZvci4gVGhpcyBjYW5cbiAqICAgICBiZSBhbnl0aGluZyB0aGF0IHN1cHBvcnRzIHRoZSBpdGVyYXRpb24gcHJvdG9jb2wgb3IgYSBwbGFpbiBvYmplY3QuXG4gKiBAcmV0dXJuIHttb2R1bGU6Y29yZS5Jbml0RnVuY3Rpb259IEEgZnVuY3Rpb24gdGhhdCwgd2hlbiBjYWxsZWQsIHJldHVybnMgYW5cbiAqICAgICBpbml0aWFsIHZlcnNpb24gb2YgdGhlIHByb3ZpZGVkIGNvbGxlY3Rpb24uIElmIHRoZSBwcm92aWRlZCBjb2xsZWN0aW9uIGlzXG4gKiAgICAgbm90IGl0ZXJhYmxlLCB0aGVuIGBudWxsYCBpcyByZXR1cm5lZC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGluaXQoY29sbGVjdGlvbikge1xuICBzd2l0Y2ggKHRydWUpIHtcbiAgICBjYXNlIGlzSW1wbGVtZW50ZWQoY29sbGVjdGlvbiwgXCJpbml0XCIpOlxuICAgICAgcmV0dXJuIGNvbGxlY3Rpb25bcC5pbml0XTtcbiAgICBjYXNlIGlzU3RyaW5nKGNvbGxlY3Rpb24pOlxuICAgICAgcmV0dXJuICgpID0+IFwiXCI7XG4gICAgY2FzZSBpc0FycmF5KGNvbGxlY3Rpb24pOlxuICAgICAgcmV0dXJuICgpID0+IFtdO1xuICAgIGNhc2UgaXNPYmplY3QoY29sbGVjdGlvbik6XG4gICAgICByZXR1cm4gKCkgPT4gKHt9KTtcbiAgICBjYXNlIGlzRnVuY3Rpb24oY29sbGVjdGlvbik6XG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICB0aHJvdyBFcnJvcihcImluaXQgbm90IGF2YWlsYWJsZVwiKTtcbiAgICAgIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbi8qKlxuICogUmV0dXJucyBhIHN0ZXAgZnVuY3Rpb24gZm9yIGEgY29sbGVjdGlvbi4gVGhpcyBpcyBhIGZ1bmN0aW9uIHRoYXQgdGFrZXMgYW5cbiAqIGFjY3VtdWxhdG9yIGFuZCBhIHZhbHVlIGFuZCByZXR1cm5zIHRoZSByZXN1bHQgb2YgcmVkdWNpbmcgdGhlIHZhbHVlIGludG8gdGhlXG4gKiBhY2N1bXVsYXRvci4gSWYgdGhlIGNvbGxlY3Rpb24gZG9lc24ndCBzdXBwb3J0IHJlZHVjdGlvbiwgYG51bGxgIGlzIHJldHVybmVkLlxuICogVGhlIHJldHVybmVkIGZ1bmN0aW9uIGl0c2VsZiBzaW1wbHkgcmVkdWNlcyB0aGUgaW5wdXQgaW50byB0aGUgdGFyZ2V0XG4gKiBjb2xsZWN0aW9uIHdpdGhvdXQgbW9kaWZ5aW5nIGl0LlxuICpcbiAqIEluIG9yZGVyIHRvIHN1cHBvcnQgdGhlIGNvbnZlcnNpb24gb2YgZnVuY3Rpb25zIGludG8gcmVkdWNlcnMsIGZ1bmN0aW9uXG4gKiBzdXBwb3J0IGlzIGFsc28gcHJvdmlkZWQuXG4gKlxuICogQHBhcmFtIHsqfSBjb2xsZWN0aW9uIEEgY29sbGVjdGlvbiB0byBjcmVhdGUgYSBzdGVwIGZ1bmN0aW9uIGZvci4gVGhpcyBjYW4gYmVcbiAqICAgICBhbnl0aGluZyB0aGF0IHN1cHBvcnRzIHRoZSBpdGVyYXRpb24gcHJvdG9jb2wsIGEgcGxhaW4gb2JqZWN0LCBvciBhXG4gKiAgICAgZnVuY3Rpb24uXG4gKiBAcmV0dXJuIHttb2R1bGU6Y29yZS5TdGVwRnVuY3Rpb259IEEgcmVkdWN0aW9uIGZ1bmN0aW9uIGZvciB0aGUgcHJvdmlkZWRcbiAqICAgICBjb2xsZWN0aW9uIHRoYXQgc2ltcGx5IGFkZHMgYW4gZWxlbWVudCB0byB0aGUgdGFyZ2V0IGNvbGxlY3Rpb24gd2l0aG91dFxuICogICAgIG1vZGlmeWluZyBpdC4gSWYgdGhlIHByb3ZpZGVkIGNvbGxlY3Rpb24gaXMgbm90IGl0ZXJhYmxlLCBgbnVsbGAgaXNcbiAqICAgICByZXR1cm5lZC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHN0ZXAoY29sbGVjdGlvbikge1xuICBzd2l0Y2ggKHRydWUpIHtcbiAgICBjYXNlIGlzSW1wbGVtZW50ZWQoY29sbGVjdGlvbiwgXCJzdGVwXCIpOlxuICAgICAgcmV0dXJuIGNvbGxlY3Rpb25bcC5zdGVwXTtcblxuICAgIGNhc2UgaXNTdHJpbmcoY29sbGVjdGlvbik6XG4gICAgICByZXR1cm4gKGFjYywgaW5wdXQpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBpc09iamVjdChpbnB1dCkgPyBrdihpbnB1dCkudiA6IGlucHV0O1xuICAgICAgICByZXR1cm4gYWNjICsgdmFsdWU7XG4gICAgICB9O1xuXG4gICAgY2FzZSBpc0FycmF5KGNvbGxlY3Rpb24pOlxuICAgICAgcmV0dXJuIChhY2MsIGlucHV0KSA9PiB7XG4gICAgICAgIGFjYy5wdXNoKGlucHV0KTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH07XG5cbiAgICBjYXNlIGlzT2JqZWN0KGNvbGxlY3Rpb24pOlxuICAgICAgcmV0dXJuIChhY2MsIGlucHV0KSA9PiB7XG4gICAgICAgIGxldCB2YWx1ZSA9IGlucHV0O1xuXG4gICAgICAgIGlmICghaXNPYmplY3QoaW5wdXQpKSB7XG4gICAgICAgICAgLy8gaWYgdGhlIGlucHV0IGlzbid0IGFuIG9iamVjdCwgdHVybiBpdCBpbnRvIGFuIG9iamVjdCB3aXRoIGFcbiAgICAgICAgICAvLyBudW1lcmljYWwga2V5IG9uZSBncmVhdGVyIHRoYW4gdGhlIG1heCBrZXkgYWxyZWFkeSBpbiB0aGVcbiAgICAgICAgICAvLyBhY2N1bXVsYXRvclxuICAgICAgICAgIGNvbnN0IG1heCA9IE9iamVjdC5rZXlzKGFjYykucmVkdWNlKChhLCBiKSA9PiBNYXRoLm1heChhLCBiKSwgLTEpO1xuICAgICAgICAgIHZhbHVlID0geyBbbWF4ICsgMV06IGlucHV0IH07XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB7IGssIHYgfSA9IGt2KHZhbHVlKTtcbiAgICAgICAgYWNjW2tdID0gdjtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH07XG5cbiAgICBjYXNlIGlzRnVuY3Rpb24oY29sbGVjdGlvbik6XG4gICAgICByZXR1cm4gKGFjYywgaW5wdXQpID0+IGNvbGxlY3Rpb24oYWNjLCBpbnB1dCk7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgcmVzdWx0IGZ1bmN0aW9uIGZvciBhIGNvbGxlY3Rpb24uIFRoaXMgaXMgYSBmdW5jdGlvbiB0aGF0IHBlcmZvcm1zXG4gKiBhbnkgZmluYWwgcHJvY2Vzc2luZyB0aGF0IHNob3VsZCBiZSBkb25lIG9uIHRoZSByZXN1bHQgb2YgYSByZWR1Y3Rpb24uIElmIHRoZVxuICogY29sbGVjdGlvbiBkb2Vzbid0IHN1cHBvcnQgcmVkdWN0aW9uLCBgbnVsbGAgaXMgcmV0dXJuZWQuXG4gKlxuICogSW4gb3JkZXIgdG8gc3VwcG9ydCB0aGUgY29udmVyc2lvbiBvZiBmdW5jdGlvbnMgaW50byByZWR1Y2VycywgZnVuY3Rpb25cbiAqIHN1cHBvcnQgaXMgYWxzbyBwcm92aWRlZC5cbiAqXG4gKiBAcGFyYW0geyp9IGNvbGxlY3Rpb24gQSBjb2xsZWN0aW9uIHRvIGNyZWF0ZSBhIHN0ZXAgZnVuY3Rpb24gZm9yLiBUaGlzIGNhbiBiZVxuICogICAgIGFueXRoaW5nIHRoYXQgc3VwcG9ydHMgdGhlIGl0ZXJhdGlvbiBwcm90b2NvbCwgYSBwbGFpbiBvYmplY3QsIG9yIGFcbiAqICAgICBmdW5jdGlvbi5cbiAqIEByZXR1cm4ge21vZHVsZTpjb3JlLlJlc3VsdEZ1bmN0aW9ufSBBIGZ1bmN0aW9uIHRoYXQsIHdoZW4gZ2l2ZW4gYSByZWR1Y2VkXG4gKiAgICAgY29sbGVjdGlvbiwgcHJvZHVjZXMgdGhlIGZpbmFsIG91dHB1dC4gSWYgdGhlIHByb3ZpZGVkIGNvbGxlY3Rpb24gaXMgbm90XG4gKiAgICAgaXRlcmFibGUsIGBudWxsYCB3aWxsIGJlIHJldHVybmVkLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gcmVzdWx0KGNvbGxlY3Rpb24pIHtcbiAgc3dpdGNoICh0cnVlKSB7XG4gICAgY2FzZSBpc0ltcGxlbWVudGVkKGNvbGxlY3Rpb24sIFwicmVzdWx0XCIpOlxuICAgICAgcmV0dXJuIGNvbGxlY3Rpb25bcC5yZXN1bHRdO1xuICAgIGNhc2UgaXNTdHJpbmcoY29sbGVjdGlvbik6XG4gICAgY2FzZSBpc0FycmF5KGNvbGxlY3Rpb24pOlxuICAgIGNhc2UgaXNPYmplY3QoY29sbGVjdGlvbik6XG4gICAgY2FzZSBpc0Z1bmN0aW9uKGNvbGxlY3Rpb24pOlxuICAgICAgcmV0dXJuIHZhbHVlID0+IHZhbHVlO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG4vKipcbiAqIENyZWF0ZXMgYSByZWR1Y2VyIG9iamVjdCBmcm9tIGEgZnVuY3Rpb24gb3IgZnJvbSBhIGJ1aWx0LWluIHJlZHVjaWJsZSB0eXBlXG4gKiAoYXJyYXksIG9iamVjdCwgb3Igc3RyaW5nKS5cbiAqXG4gKiBUbyBjcmVhdGUgYSByZWR1Y2VyIGZvciBhcnJheXMsIG9iamVjdHMsIG9yIHN0cmluZ3MsIHNpbXBseSBwYXNzIGFuIGVtcHR5XG4gKiB2ZXJzaW9uIG9mIHRoYXQgY29sbGVjdGlvbiB0byB0aGlzIGZ1bmN0aW9uIChlLmcuLCBgdG9SZWR1Y2VyKFtdKWApLlxuICpcbiAqIFRoZSBub3RhYmxlIHVzZSBmb3IgdGhpcyBmdW5jdGlvbiB0aG91Z2ggaXMgdG8gdHVybiBhIHJlZHVjdGlvbiBmdW5jdGlvbiBpbnRvXG4gKiBhIHJlZHVjZXIgb2JqZWN0LiBUaGUgZnVuY3Rpb24gaXMgYSBmdW5jdGlvbiBvZiB0d28gcGFyYW1ldGVycywgYW5cbiAqIGFjY3VtdWxhdG9yIGFuZCBhIHZhbHVlLCBhbmQgcmV0dXJucyB0aGUgYWNjdW11bGF0b3Igd2l0aCB0aGUgdmFsdWUgaW4gaXQuXG4gKiBUaGlzIGlzIGV4YWN0bHkgdGhlIHNhbWUga2luZCBvZiBmdW5jdGlvbiB0aGF0IGlzIHBhc3NlZCB0byByZWR1Y3Rpb25cbiAqIGZ1bmN0aW9ucyBsaWtlIEphdmFTY3JpcHQncyBgQXJyYXkucHJvdG90eXBlLnJlZHVjZWAgYW5kIExvZGFzaCdzIGBfLnJlZHVjZWAuXG4gKlxuICogTm90ZSBpbiBwYXJ0aWN1bGFyIHRoYXQgdGhlIG91dHB1dCBvZiB0aGlzIHJlZHVjZXIgZG9lcyBub3QgbmVlZCB0byBiZSBhXG4gKiBjb2xsZWN0aW9uLiBJdCBjYW4gYmUgYW55dGhpbmcuIFdoaWxlIHRyYW5zZHVjaW5nIG5vcm1hbGx5IGludm9sdmVzXG4gKiB0cmFuc2Zvcm1pbmcgb25lIGNvbGxlY3Rpb24gaW50byBhbm90aGVyLCBpdCBuZWVkIG5vdCBiZSBzby4gRm9yIGV4YW1wbGUsXG4gKiBoZXJlIGlzIGEgcmVkdWNlciB0aGF0IHdpbGwgcmVzdWx0IGluIHN1bW1pbmcgb2YgdGhlIGNvbGxlY3Rpb24gdmFsdWVzLlxuICpcbiAqIGBgYFxuICogaW1wb3J0IHsgdG9SZWR1Y2VyLCByZWR1Y2UgfSBmcm9tIFwiQGNoYW5rby94ZHVjZVwiO1xuICpcbiAqIGNvbnN0IHN1bVJlZHVjZXIgPSB0b1JlZHVjZXIoKGFjYywgaW5wdXQpID0+IGFjYyArIGlucHV0KTtcbiAqIGNvbnN0IHN1bSA9IHJlZHVjZShbMSwgMiwgMywgNCwgNV0sIHN1bVJlZHVjZXIsIDApO1xuICogY29uc29sZS5sb2coc3VtKTsgICAvLyAtPiAxNVxuICogYGBgXG4gKlxuICogVGhpcyBjYW4gYmUgY29tYmluZWQgd2l0aCB0cmFuc2R1Y2VycyBhcyB3ZWxsLCBhcyBpbiB0aGlzIGNhbGN1bGF0aW9uIG9mIHRoZVxuICogc3VtIG9mIHRoZSAqc3F1YXJlcyogb2YgdGhlIGNvbGxlY3Rpb24gdmFsdWVzLlxuICpcbiAqIGBgYFxuICogaW1wb3J0IHsgdG9SZWR1Y2VyLCB0cmFuc2R1Y2UgfSBmcm9tIFwiQGNoYW5rby94ZHVjZVwiO1xuICogaW1wb3J0IHsgbWFwIH0gZnJvbSBcIkBjaGFua28vdHJhbnNkdWNlcnNcIjtcbiAqXG4gKiBjb25zdCBzdW1SZWR1Y2VyID0gdG9SZWR1Y2VyKChhY2MsIGlucHV0KSA9PiBhY2MgKyBpbnB1dCk7XG4gKiBjb25zdCBzdW0gPSB0cmFuc2R1Y2UoWzEsIDIsIDMsIDQsIDVdLCBtYXAoeCA9PiB4ICogeCksIHN1bVJlZHVjZXIsIDApO1xuICogY29uc29sZS5sb2coc3VtKTsgICAvLyAtPiA1NVxuICogYGBgXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjb3JlXG4gKiBAcGFyYW0geyp9IGNvbGxlY3Rpb24gQW4gaXRlcmFibGUgY29sbGVjdGlvbiBvciBhIHJlZHVjZXIgZnVuY3Rpb24uXG4gKiBAcmV0dXJuIHtvYmplY3R9IEFuIG9iamVjdCBjb250YWluaW5nIHByb3RvY29sIHByb3BlcnRpZXMgZm9yIGluaXQsIHN0ZXAsIGFuZFxuICogICAgIHJlc3VsdC4gVGhpcyBvYmplY3QgaXMgc3VpdGFibGUgZm9yIHVzZSBhcyBhIHJlZHVjZXIgb2JqZWN0IChvbmUgcHJvdmlkZWRcbiAqICAgICB0byBge0BsaW5rIHhkdWNlLnJlZHVjZXxyZWR1Y2V9YCBvciBge0BsaW5rIHhkdWNlLnRyYW5zZHVjZXx0cmFuc2R1Y2V9YCkuXG4gKiAgICAgSWYgdGhlIHByb3ZpZGVkIGNvbGxlY3Rpb24gaXMgbm90IGl0ZXJhYmxlLCBhbGwgb2YgdGhlIHByb3BlcnRpZXMgb2YgdGhpc1xuICogICAgIG9iamVjdCB3aWxsIGJlIGBudWxsYC5cbiAqL1xuZnVuY3Rpb24gdG9SZWR1Y2VyKGNvbGxlY3Rpb24pIHtcbiAgcmV0dXJuIE9iamVjdC5mcmVlemUoe1xuICAgIFtwLmluaXRdOiBpbml0KGNvbGxlY3Rpb24pLFxuICAgIFtwLnN0ZXBdOiBzdGVwKGNvbGxlY3Rpb24pLFxuICAgIFtwLnJlc3VsdF06IHJlc3VsdChjb2xsZWN0aW9uKVxuICB9KTtcbn1cblxuLyoqXG4gKiBBIHJlZHVjZXIgb2JqZWN0IGZvciBhcnJheXMuXG4gKlxuICogQHR5cGUge21vZHVsZTpjb3JlLlJlZHVjZXJ9XG4gKiBAcHJpdmF0ZVxuICovXG5jb25zdCBBUlJBWV9SRURVQ0VSID0gdG9SZWR1Y2VyKFtdKTtcblxuLyoqXG4gKiBBIHJlZHVjZXIgb2JqZWN0IGZvciBvYmplY3RzLlxuICpcbiAqIEB0eXBlIHttb2R1bGU6Y29yZS5SZWR1Y2VyfVxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgT0JKRUNUX1JFRFVDRVIgPSB0b1JlZHVjZXIoe30pO1xuXG4vKipcbiAqIEEgcmVkdWNlciBvYmplY3QgZm9yIHN0cmluZ3MuXG4gKlxuICogQHR5cGUge21vZHVsZTpjb3JlLlJlZHVjZXJ9XG4gKiBAcHJpdmF0ZVxuICovXG5jb25zdCBTVFJJTkdfUkVEVUNFUiA9IHRvUmVkdWNlcihcIlwiKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgdHJhbnNkdWNlciBmcm9tIGEgZnVuY3Rpb24gYW5kIGEgdHJhbnNkdWNlciB0byBjaGFpbiBpdCB0by5cbiAqXG4gKiBUaGlzIGlzIGluIG1vc3QgcmVzcGVjdHMganVzdCBsaWtlIHtAbGluayBtb2R1bGU6Y29yZS50b1JlZHVjZXJ8dG9SZWR1Y2VyfSxcbiAqIHdpdGggdHdvIG5vdGFibGUgZGlmZmVyZW5jZXMuIE9uZSBpcyB0aGF0IGl0IHJlcXVpcmVzIGEgdHJhbnNkdWNlciB0byBjaGFpblxuICogdG8sIGFuZCBpdCBkb2VzIHRoZSBjaGFpbmluZyBhcyBhIHBhcnQgb2YgY3JlYXRpbmcgdGhlIG5ldyB0cmFuc2R1Y2VyLiBUaGVcbiAqIG90aGVyIGlzIHRoYXQgaXQgaW5jbHVkZXMgYSB1c2FibGUgYGluaXRgIGZ1bmN0aW9uLCB3aGVyZSBwYXNzaW5nIGEgZnVuY3Rpb25cbiAqIHRvIHtAbGluayBtb2R1bGU6Y29yZS50b1JlZHVjZXJ8dG9SZWR1Y2VyfSB3b3VsZCBjcmVhdGUgYW4gaW5pdCBmdW5jdGlvbiB0aGF0XG4gKiB0aHJvd3MgYW4gZXJyb3IgaWYgaXQncyBjYWxsZWQuXG4gKlxuICogVGhpcyBmdW5jdGlvbiBhcHBsaWVzIHRoZSBnaXZlbiBmdW5jdGlvbiBhcyB0aGUgYHN0ZXBgIGZ1bmN0aW9uIG9mIHRoZVxuICogcmV0dXJuZWQgdHJhbnNkdWNlciwgYW5kIHRoZSBgaW5pdGAgYW5kIGByZXN1bHRgIGZ1bmN0aW9ucyBzaW1wbHkgY2FsbCB0aGVcbiAqIHNhbWUgZnVuY3Rpb25zIGluIHRoZSBuZXh0IHRyYW5zZHVjZXIgZG93biB0aGUgY2hhaW4uIFRoaXMgaXMgcHJlY2lzZWx5IHdoYXRcbiAqICptb3N0KiB0cmFuc2R1Y2VycyB3YW50Li4uYGluaXRgIGFuZCBgcmVzdWx0YCBmdW5jdGlvbnMgYXJlIG5vcm1hbGx5IGhhbmRsZWRcbiAqIGJ5IHRoZSByZWR1Y2VyIGF0IHRoZSBlbmQgb2YgdGhlIHRyYW5zZHVjZXIgY2hhaW4uLi5idXQgaW4gdGhlIHJhcmUgY2FzZSB3aGVuXG4gKiBgaW5pdGAgb3IgYHJlc3VsdGAgbXVzdCBkbyBtb3JlIHRoYW4gdGhpcywgdGhlIHRyYW5zZHVjZXIgbXVzdCBiZSBjcmVhdGVkXG4gKiBtYW51YWxseS5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIGRvZXMgbm90IGF1dG9tYXRpY2FsbHkgY2hhaW4gdGhlIGBzdGVwYCBmdW5jdGlvbiB0byB0aGUgbmV4dFxuICogb25lIGRvd24gdGhlIGxpbmUsIGFzIHRoYXQgY2FuIGJlIGRvbmUgaW4gYW55IG51bWJlciBvZiBkaWZmZXJlbnQgd2F5cy4gVGh1c1xuICogdGhlIGZ1bmN0aW9uIGl0c2VsZiBzaG91bGQgY2FsbCB0aGUgYHN0ZXBgIGZ1bmN0aW9uIGluIGB4Zm9ybWAgaW4gd2hhdGV2ZXJcbiAqIHdheSBpcyBhcHByb3ByaWF0ZS5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNvcmVcbiAqIEBwYXJhbSB7bW9kdWxlOmNvcmUuU3RlcEZ1bmN0aW9ufSBmbiBUaGUgc3RlcCBmdW5jdGlvbiBmb3IgdGhlIHRyYW5zZHVjZXIuXG4gKiBAcGFyYW0ge21vZHVsZTpjb3JlLlRyYW5zZHVjZXJ9IHhmb3JtIFRoZSBuZXh0IHRyYW5zZHVjZXIgb2JqZWN0IGluIHRoZVxuICogICAgIGNoYWluLlxuICogQHJldHVybnMge21vZHVsZTpjb3JlLlRyYW5zZHVjZXJ9IEEgbmV3IHRyYW5zZHVjZXIsIGNoYWluaW5nIHRoZSBzdXBwbGllZFxuICogICAgIGZ1bmN0aW9uIHRvIHRoZSBzdXBwbGllZCB0cmFuc2R1Y2VyLlxuICovXG5mdW5jdGlvbiB0b1RyYW5zZHVjZXIoZm4sIHhmb3JtKSB7XG4gIHJldHVybiB7XG4gICAgW3AuaW5pdF0oKSB7XG4gICAgICByZXR1cm4geGZvcm1bcC5pbml0XSgpO1xuICAgIH0sXG5cbiAgICBbcC5zdGVwXTogZm4sXG5cbiAgICBbcC5yZXN1bHRdKHZhbHVlKSB7XG4gICAgICByZXR1cm4geGZvcm1bcC5yZXN1bHRdKHZhbHVlKTtcbiAgICB9XG4gIH07XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHJlZHVjdGlvbiBmdW5jdGlvbiBmcm9tIGEgdHJhbnNkdWNlciBhbmQgYSByZWR1Y2VyLlxuICpcbiAqIFRoaXMgcHJvZHVjZXMgYSBmdW5jdGlvbiB0aGF0J3Mgc3VpdGFibGUgZm9yIGJlaW5nIHBhc3NlZCBpbnRvIG90aGVyXG4gKiBsaWJyYXJpZXMnIHJlZHVjZSBmdW5jdGlvbnMsIHN1Y2ggYXMgSmF2YVNjcmlwdCdzIGBBcnJheS5wcm90b3R5cGUucmVkdWNlYCBvclxuICogTG9kYXNoJ3MgYF8ucmVkdWNlYC4gSXQgcmVxdWlyZXMgYm90aCBhIHRyYW5zZm9ybWVyIGFuZCBhIHJlZHVjZXIgYmVjYXVzZVxuICogcmVkdWN0aW9uIGZ1bmN0aW9ucyBmb3IgdGhvc2UgbGlicmFyaWVzIG11c3Qga25vdyBob3cgdG8gZG8gYm90aC4gVGhlIHJlZHVjZXJcbiAqIGNhbiBiZSBhIHN0YW5kYXJkIHJlZHVjZXIgb2JqZWN0IGxpa2UgdGhlIG9uZXMgc2VudFxuICogdG9ge0BsaW5rIG1vZHVsZTpjb3JlLnRyYW5zZHVjZXx0cmFuc2R1Y2V9YCBvclxuICogYHtAbGluayBtb2R1bGU6Y29yZS5yZWR1Y2V8cmVkdWNlfWAsIG9yIGl0IGNhbiBiZSBhIHBsYWluIGZ1bmN0aW9uIHRoYXQgdGFrZXNcbiAqIHR3byBwYXJhbWV0ZXJzIGFuZCByZXR1cm5zIHRoZSByZXN1bHQgb2YgcmVkdWNpbmcgdGhlIHNlY29uZCBwYXJhbWV0ZXIgaW50b1xuICogdGhlIGZpcnN0LlxuICpcbiAqIElmIHRoZXJlIGlzIG5vIG5lZWQgZm9yIGEgdHJhbnNmb3JtYXRpb24sIHRoZW4gcGFzcyBpbiB0aGVcbiAqIGB7QGxpbmsgbW9kdWxlOnRyYW5zZHVjZXJzLmlkZW50aXR5fGlkZW50aXR5fWAgdHJhbnNkdWNlci5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNvcmVcbiAqIEBwYXJhbSB7bW9kdWxlOmNvcmUuUmVkdWNlcn0geGZvcm0gQSB0cmFuc2R1Y2VyIG9iamVjdCB3aG9zZSBzdGVwIGZ1bmN0aW9uXG4gKiAgICAgd2lsbCBiZWNvbWUgdGhlIHJldHVybmVkIHJlZHVjdGlvbiBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7KG1vZHVsZTpjb3JlLlN0ZXBGdW5jdGlvbnxtb2R1bGU6Y29yZS5SZWR1Y2VyKX0gcmVkdWNlciBBIHJlZHVjZXJcbiAqICAgICB0aGF0IGtub3dzIGhvdyB0byByZWR1Y2UgdmFsdWVzIGludG8gYW4gb3V0cHV0IGNvbGxlY3Rpb24uIFRoaXMgY2FuXG4gKiAgICAgZWl0aGVyIGJlIGEgcmVkdWNpbmcgZnVuY3Rpb24gb3IgYSB0cmFuc2R1Y2VyIG9iamVjdCB3aG9zZSBgc3RlcGBcbiAqICAgICBmdW5jdGlvbiBrbm93cyBob3cgdG8gcGVyZm9ybSB0aGlzIHJlZHVjdGlvbi5cbiAqIEByZXR1cm5zIHttb2R1bGU6Y29yZS5TdGVwRnVuY3Rpb259IEEgZnVuY3Rpb24gdGhhdCBoYW5kbGVzIGJvdGggdGhlXG4gKiAgICAgdHJhbnNmb3JtYXRpb24gYW5kIHRoZSByZWR1Y3Rpb24gb2YgYSB2YWx1ZSBvbnRvIGEgdGFyZ2V0IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiB0b0Z1bmN0aW9uKHhmb3JtLCByZWR1Y2VyKSB7XG4gIGNvbnN0IHIgPSB0eXBlb2YgcmVkdWNlciA9PT0gXCJmdW5jdGlvblwiID8gdG9SZWR1Y2VyKHJlZHVjZXIpIDogcmVkdWNlcjtcbiAgY29uc3QgcmVzdWx0ID0geGZvcm0ocik7XG4gIHJldHVybiByZXN1bHRbcC5zdGVwXS5iaW5kKHJlc3VsdCk7XG59XG5cbi8qKlxuICogTWFya3MgYSB2YWx1ZSBhcyBjb21wbGV0ZS5cbiAqXG4gKiBUaGlzIGlzIGRvbmUgYnkgd3JhcHBpbmcgdGhlIHZhbHVlLiBUaGlzIG1lYW5zIHRocmVlIHRoaW5nczogZmlyc3QsIGFcbiAqIGNvbXBsZXRlIG9iamVjdCBtYXkgYmUgbWFya2VkIGFzIGNvbXBsZXRlIGFnYWluOyBzZWNvbmQsIGEgY29tcGxldGUgdmFsdWVcbiAqIGlzbid0IHVzYWJsZSB3aXRob3V0IGJlaW5nIHVuY29tcGxldGVkIGZpcnN0OyBhbmQgdGhpcmQgYW55IHR5cGUgb2YgdmFsdWVcbiAqIChpbmNsdWRpbmcgYHVuZGVmaW5lZGApIG1heSBiZSBtYXJrZWQgYXMgY29tcGxldGUuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjb3JlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBiZSBjb21wbGV0ZWQuXG4gKiBAcmV0dXJuIHsqfSBBIGNvbXBsZXRlZCB2ZXJzaW9uIG9mIHRoZSBwcm92aWRlZCB2YWx1ZS4gVGhpcyByZWR1Y3Rpb24gaXNcbiAqICAgICBhY2hpZXZlZCBieSB3cmFwcGluZyB0aGUgdmFsdWUgaW4gYSBtYXJrZXIgb2JqZWN0LlxuICovXG5mdW5jdGlvbiBjb21wbGV0ZSh2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIFtwLnJlZHVjZWRdOiB0cnVlLFxuICAgIFtwLnZhbHVlXTogdmFsdWVcbiAgfTtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIHRoZSBjb21wbGV0ZSBzdGF0dXMgZnJvbSBhIGNvbXBsZXRlZCB2YWx1ZS5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIGludGVuZGVkIHRvIGJlIHVzZWQgd2hlbiBpdCdzIGNlcnRhaW4gdGhhdCBhIHZhbHVlIGlzXG4gKiBhbHJlYWR5IG1hcmtlZCBhcyBjb21wbGV0ZS4gSWYgaXQgaXMgbm90LCBgdW5kZWZpbmVkYCB3aWxsIGJlIHJldHVybmVkXG4gKiBpbnN0ZWFkIG9mIHRoZSB2YWx1ZS5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNvcmVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGJlIHVuY29tcGxldGVkLlxuICogQHJldHVybiB7Kn0gQW4gdW5jb21wbGV0ZWQgdmVyc2lvbiBvZiB0aGUgcHJvdmlkZWQgdmFsdWUuIElmIHRoZSB2YWx1ZSB3YXNcbiAqICAgICBub3QgY29tcGxldGUgaW4gdGhlIGZpcnN0IHBsYWNlLCBgdW5kZWZpbmVkYCB3aWxsIGJlIHJldHVybmVkIGluc3RlYWQuXG4gKi9cbmZ1bmN0aW9uIHVuY29tcGxldGUodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlPy5bcC52YWx1ZV07XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGEgdmFsdWUgaXMgbWFya2VkIGFzIGNvbXBsZXRlLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y29yZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gdGVzdCBmb3IgaXRzIGNvbXBsZXRlIHN0YXR1cy5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IEVpdGhlciBgdHJ1ZWAgaWYgdGhlIHZhbHVlIGlzIGNvbXBsZXRlLCBvciBgZmFsc2VgIGlmIGl0IGlzXG4gKiAgICAgbm90LlxuICovXG5mdW5jdGlvbiBpc0NvbXBsZXRlZCh2YWx1ZSkge1xuICByZXR1cm4gISF2YWx1ZT8uW3AucmVkdWNlZF07XG59XG5cbi8qKlxuICogTWFrZXMgc3VyZSB0aGF0IGEgdmFsdWUgaXMgbWFya2VkIGFzIGNvbXBsZXRlOyBpZiBpdCBpcyBub3QsIGl0IHdpbGwgYmVcbiAqIG1hcmtlZCBhcyBjb21wbGV0ZS5cbiAqXG4gKiBUaGlzIGRpZmZlcnMgZnJvbSB7QGxpbmsgbW9kdWxlOmNvcmUuY29tcGxldGV8Y29tcGxldGV9IGluIHRoYXQgaWYgdGhlIHZhbHVlXG4gKiBpcyBhbHJlYWR5IGNvbXBsZXRlLCB0aGlzIGZ1bmN0aW9uIHdvbid0IGNvbXBsZXRlIGl0IGFnYWluLiBUaGVyZWZvcmUgdGh1c1xuICogZnVuY3Rpb24gY2FuJ3QgYmUgdXNlZCB0byBtYWtlIGEgdmFsdWUgY29tcGxldGUgbXVsdGlwbGUgdGltZXMuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjb3JlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBiZSBjb21wbGV0ZWQuXG4gKiBAcmV0dXJuIHsqfSBJZiB0aGUgdmFsdWUgaXMgYWxyZWFkeSBjb21wbGV0ZSwgdGhlbiB0aGUgdmFsdWUgaXMgc2ltcGx5XG4gKiAgICAgcmV0dXJuZWQuIE90aGVyd2lzZSwgYSBjb21wbGV0ZWQgdmVyc2lvbiBvZiB0aGUgdmFsdWUgaXMgcmV0dXJuZWQuXG4gKi9cbmZ1bmN0aW9uIGVuc3VyZUNvbXBsZXRlZCh2YWx1ZSkge1xuICByZXR1cm4gaXNDb21wbGV0ZWQodmFsdWUpID8gdmFsdWUgOiBjb21wbGV0ZSh2YWx1ZSk7XG59XG5cbi8qKlxuICogUmVtb3ZlcyB0aGUgY29tcGxldGUgc3RhdHVzIGZyb20gYSB2YWx1ZSwgYXMgbG9uZyBhcyBpdCBhY3R1YWxseSBpcyBjb21wbGV0ZS5cbiAqXG4gKiBUaGlzIGRvZXMgYSBjaGVjayB0byBtYWtlIHN1cmUgdGhlIHZhbHVlIHBhc3NlZCBpbiBhY3R1YWxseSBpcyBjb21wbGV0ZS4gSWZcbiAqIGl0IGlzbid0LCB0aGUgdmFsdWUgaXRzZWxmIGlzIHJldHVybmVkLiBJdCdzIG1lYW50IHRvIGJlIHVzZWQgd2hlbiB0aGVcbiAqIGNvbXBsZXRlZCBzdGF0dXMgaXMgdW5jZXJ0YWluLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y29yZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgY29tcGxldGUgdmFsdWUgdG8gYmUgdW5jb21wbGV0ZWQuXG4gKiBAcmV0dXJuIHsqfSBJZiB0aGUgdmFsdWUgaXMgYWxyZWFkeSB1bmNvbXBsZXRlZCwgdGhlIHZhbHVlIGlzIHNpbXBseVxuICogICAgIHJldHVybmVkLiBPdGhlcndpc2UgYW4gdW5jb21wbGV0ZWQgdmVyc2lvbiBvZiB0aGUgdmFsdWUgaXMgcmV0dXJuZWQuXG4gKi9cbmZ1bmN0aW9uIGVuc3VyZVVuY29tcGxldGVkKHZhbHVlKSB7XG4gIHJldHVybiBpc0NvbXBsZXRlZCh2YWx1ZSkgPyB1bmNvbXBsZXRlKHZhbHVlKSA6IHZhbHVlO1xufVxuXG4vKipcbiAqIFJlZHVjZXMgdGhlIGVsZW1lbnRzIG9mIHRoZSBpbnB1dCBjb2xsZWN0aW9uIHRocm91Z2ggYSByZWR1Y2VyIGludG8gYW4gb3V0cHV0XG4gKiBjb2xsZWN0aW9uLlxuICpcbiAqIFRoaXMgaXMgdGhlIGxvd2VzdC1sZXZlbCBvZiB0aGUgdHJhbnNkdWN0aW9uIGZ1bmN0aW9ucy4gSW4gZmFjdCwgdGhpcyBvbmUgaXNcbiAqIHNvIGxvdy1sZXZlbCB0aGF0IGl0IGRvZXNuJ3QgaGF2ZSBhIGxvdCBvZiB1c2UgaW4gbm9ybWFsIG9wZXJhdGlvbi4gSXQncyBtb3JlXG4gKiB1c2VmdWwgZm9yIHdyaXRpbmcgeW91ciBvd24gdHJhbnNmb3JtYXRpb24gZnVuY3Rpb25zLlxuICpcbiAqIGByZWR1Y2VgIGRvZXNuJ3QgYXNzdW1lIHRoYXQgdGhlcmUncyBldmVuIGEgdHJhbnNmb3JtYXRpb24uIEl0IHJlcXVpcmVzIGFuXG4gKiBpbml0aWFsIGNvbGxlY3Rpb24gYW5kIGEgcmVkdWNlciBvYmplY3QgdGhhdCBpcyBtYXRjaGVkIHRvIHRoYXQgaW5pdGlhbFxuICogY29sbGVjdGlvbi4gVGhlIHJlZHVjZXIgb2JqZWN0IG11c3QgaW1wbGVtZW50IHRoZSBgc3RlcGAgYW5kIGByZXN1bHRgXG4gKiBwcm90b2NvbHMsIHdoaWNoIGluc3RydWN0IGByZWR1Y2VgIG9uIGhvdyB0byBidWlsZCB1cCB0aGUgY29sbGVjdGlvbi4gVGhlXG4gKiByZWR1Y2VyIG1heSBpbXBsZW1lbnQgYSB0cmFuc2Zvcm1hdGlvbiBhcyB3ZWxsLCBidXQgYWxsIHRoYXQncyBpbXBvcnRhbnQgaGVyZVxuICogaXMgdGhhdCBpdCBjYW4gZG8gdGhlIHJlZHVjdGlvbi5cbiAqXG4gKiBUaGUgaW5wdXQgY29sbGVjdGlvbiBuZWVkIG9ubHkgaW1wbGVtZW50IGBpdGVyYWJsZWAuIEl0IGlzIG5vdCBuZWNlc3NhcnkgZm9yXG4gKiB0aGUgaW5wdXQgYW5kIG91dHB1dCBjb2xsZWN0aW9ucyB0byBiZSBvZiB0aGUgc2FtZSB0eXBlOyBhcyBsb25nIGFzIHRoZSBpbnB1dFxuICogaW1wbGVtZW50cyBgaXRlcmFibGVgIGFuZCB0aGUgcmVkdWNlciBpbXBsZW1lbnRzIGBzdGVwYCBhbmQgYHJlc3VsdGBcbiAqIGFwcHJvcHJpYXRlIHRvIHRoZSB0eXBlIG9mIHRoZSBgaW5pdGAgY29sbGVjdGlvbiwgdGhlbiBhbnkgdHJhbnNsYXRpb25cbiAqIGJldHdlZW4gY29sbGVjdGlvbiB0eXBlcyBjYW4gb2NjdXIuXG4gKlxuICogVGhlIG5vcm1hbCBjb3Vyc2Ugb2Ygb3BlcmF0aW9uIHdpbGwgYmUgdG8gY2FsbFxuICoge0BsaW5rIG1vZHVsZTpjb3JlLnRyYW5zZHVjZXx0cmFuc2R1Y2V9IGluc3RlYWQsIGFzIHRoYXQgZnVuY3Rpb24gbWFrZXMgaXRcbiAqIGVhc3kgdG8gY29tYmluZSB0cmFuc2Zvcm1hdGlvbnMgd2l0aCByZWR1Y3Rpb25zIGFuZCBjYW4gb3B0aW9uYWxseSBmaWd1cmUgb3V0XG4gKiB0aGUgaW5pdGlhbCBjb2xsZWN0aW9uIGl0c2VsZi5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNvcmVcbiAqIEBwYXJhbSB7Kn0gY29sbGVjdGlvbiBUaGUgaW5wdXQgY29sbGVjdGlvbi4gVGhlIG9ubHkgcmVxdWlyZW1lbnQgb2YgdGhpc1xuICogICAgIGNvbGxlY3Rpb24gaXMgdGhhdCBpdCBpbXBsZW1lbnQgdGhlIGBpdGVyYWJsZWAgcHJvdG9jb2wuIFNwZWNpYWwgc3VwcG9ydFxuICogICAgIGlzIHByb3ZpZGVkIGJ5IHRoZSBsaWJyYXJ5IGZvciBvYmplY3RzLCBzbyB0aGV5IGNhbiBiZSB1c2VkIGFzIHdlbGwuXG4gKiBAcGFyYW0ge21vZHVsZTpjb3JlLlJlZHVjZXJ9IHJlZHVjZXIgQW4gb2JqZWN0IHRoYXQgaW1wbGVtZW50cyB0aGUgYHN0ZXBgIGFuZFxuICogICAgIGByZXN1bHRgIHByb3RvY29scy4gVGhpcyBvYmplY3QgbXVzdCBrbm93IGhvdyB0byBwcm9kdWNlIGFuIG91dHB1dFxuICogICAgIGNvbGxlY3Rpb24gdGhyb3VnaCB0aG9zZSBwcm90b2NvbCBmdW5jdGlvbnMuXG4gKiBAcGFyYW0geyp9IGluaXQgYSBjb2xsZWN0aW9uIG9mIHRoZSBzYW1lIHR5cGUgYXMgdGhlIG91dHB1dCBjb2xsZWN0aW9uLiBJdFxuICogICAgIG5lZWQgbm90IGJlIGVtcHR5OyBpZiBpdCBpcyBub3QsIHRoZSBleGlzdGluZyBlbGVtZW50cyBhcmUgcmV0YWluZWQgYXNcbiAqICAgICB0aGUgaW5wdXQgY29sbGVjdGlvbiBpcyByZWR1Y2VkIGludG8gaXQuXG4gKiBAcmV0dXJuIHsqfSBBIG5ldyBjb2xsZWN0aW9uLCBjb25zaXN0aW5nIG9mIHRoZSBgaW5pdGAgY29sbGVjdGlvbiB3aXRoIGFsbCBvZlxuICogICAgIHRoZSBlbGVtZW50cyBvZiB0aGUgYGNvbGxlY3Rpb25gIGNvbGxlY3Rpb24gcmVkdWNlZCBpbnRvIGl0LlxuICovXG5mdW5jdGlvbiByZWR1Y2UoY29sbGVjdGlvbiwgcmVkdWNlciwgaW5pdCkge1xuICBpZiAoY29sbGVjdGlvbiA9PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCBpdGVyID0gaXRlcmF0b3IoY29sbGVjdGlvbik7XG4gIGlmICghaXRlcikge1xuICAgIHRocm93IEVycm9yKGBDYW5ub3QgcmVkdWNlIGFuIGluc3RhbmNlIG9mICR7Y29sbGVjdGlvbi5jb25zdHJ1Y3Rvci5uYW1lfWApO1xuICB9XG5cbiAgbGV0IGFjYyA9IGluaXQ7XG4gIGxldCBzdGVwID0gaXRlci5uZXh0KCk7XG5cbiAgd2hpbGUgKCFzdGVwLmRvbmUpIHtcbiAgICBhY2MgPSByZWR1Y2VyW3Auc3RlcF0oYWNjLCBzdGVwLnZhbHVlKTtcbiAgICBpZiAoaXNDb21wbGV0ZWQoYWNjKSkge1xuICAgICAgYWNjID0gdW5jb21wbGV0ZShhY2MpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHN0ZXAgPSBpdGVyLm5leHQoKTtcbiAgfVxuXG4gIHJldHVybiByZWR1Y2VyW3AucmVzdWx0XShhY2MpO1xufVxuXG5leHBvcnQge1xuICBpbml0LFxuICBzdGVwLFxuICByZXN1bHQsXG4gIHRvUmVkdWNlcixcbiAgQVJSQVlfUkVEVUNFUixcbiAgT0JKRUNUX1JFRFVDRVIsXG4gIFNUUklOR19SRURVQ0VSLFxuICB0b1RyYW5zZHVjZXIsXG4gIHRvRnVuY3Rpb24sXG4gIGNvbXBsZXRlLFxuICB1bmNvbXBsZXRlLFxuICBpc0NvbXBsZXRlZCxcbiAgZW5zdXJlQ29tcGxldGVkLFxuICBlbnN1cmVVbmNvbXBsZXRlZCxcbiAgcmVkdWNlXG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG5cbi8qKlxuICogQSBidW5jaCBvZiB1dGlsaXR5IGZ1bmN0aW9ucy4gVGhlc2UgYXJlIGFsbCB1c2VkIGJ5IHRoZSBsaWJyYXJ5IGl0c2VsZiBpblxuICogcGxhY2VzLCBidXQgbWFueSBvZiB0aGVtIGFyZSBzdWl0YWJsZSBmb3IgZ2VuZXJhbCB1c2UgYXMgd2VsbC5cbiAqIF5cbiAqIEBtb2R1bGUgY29yZS91dGlsc1xuICogQHByaXZhdGVcbiAqL1xuXG4vKipcbiAqIGBPYmplY3RgJ3MgYHRvU3RyaW5nYCBpcyBleHBsaWNpdGx5IHVzZWQgdGhyb3VnaG91dCBiZWNhdXNlIGl0IGNvdWxkIGJlXG4gKiByZWRlZmluZWQgaW4gYW55IHN1YnR5cGUgb2YgYE9iamVjdGAuXG4gKlxuICogQGZ1bmN0aW9uIHRvU3RyaW5nXG4gKiBAcHJpdmF0ZVxuICovXG5jb25zdCB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGEgdmFsdWUgaXMgYSBmdW5jdGlvbi5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNvcmVcbiAqIEBwYXJhbSB7Kn0geCBUaGUgdmFsdWUgYmVpbmcgdGVzdGVkIHRvIHNlZSBpZiBpdCBpcyBhIGZ1bmN0aW9uLlxuICogQHJldHVybiB7Ym9vbGVhbn0gRWl0aGVyIGB0cnVlYCBpZiB0aGUgdGVzdCB2YWx1ZSBpcyBhIGZ1bmN0aW9uIG9yIGBmYWxzZWAgaWZcbiAqICAgICBpdCBpcyBub3QuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHgpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoeCkgPT09IFwiW29iamVjdCBGdW5jdGlvbl1cIjtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgYSB2YWx1ZSBpcyBhIGdlbmVyYXRvciBmdW5jdGlvbi5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNvcmVcbiAqIEBwYXJhbSB7Kn0geCBUaGUgdmFsdWUgYmVpbmcgdGVzdGVkIHRvIHNlZSBpZiBpdCBpcyBhIGdlbmVyYXRvciBmdW5jdGlvbi5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IEVpdGhlciBgdHJ1ZWAgaWYgdGhlIHRlc3QgdmFsdWUgaXMgYSBnZW5lcmF0b3IgZnVuY3Rpb24gb3JcbiAqICAgICBgZmFsc2VgIGlmIGl0IGlzIG5vdC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGlzR2VuZXJhdG9yRnVuY3Rpb24oeCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh4KSA9PT0gXCJbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXVwiO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhIHZhbHVlIGlzIGEgcGxhaW4gb2JqZWN0LlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gcmV0dXJucyBgZmFsc2VgIGlmIHRoZSB2YWx1ZSBpcyBhbnkgb3RoZXIgc29ydCBvZiBidWlsdC1pblxuICogb2JqZWN0IChzdWNoIGFzIGFuIGFycmF5IG9yIGEgc3RyaW5nKS4gSXQgYWxzbyByZXR1cm5zIGBmYWxzZWAgZm9yIGFueSBvYmplY3RcbiAqIHRoYXQgaXMgY3JlYXRlZCBieSBhIGNvbnN0cnVjdG9yIHRoYXQgaXMgbm90IGBPYmplY3RgJ3MgY29uc3RydWN0b3IsIG1lYW5pbmdcbiAqIHRoYXQgXCJpbnN0YW5jZXNcIiBvZiBjdXN0b20gXCJjbGFzc2VzXCIgd2lsbCByZXR1cm4gYGZhbHNlYC4gVGhlcmVmb3JlIGl0J3Mgb25seVxuICogZ29pbmcgdG8gcmV0dXJuIGB0cnVlYCBmb3IgbGl0ZXJhbCBvYmplY3RzIG9yIHRob3NlIGNyZWF0ZWQgd2l0aFxuICogYE9iamVjdC5jcmVhdGUoKWAuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjb3JlXG4gKiBAcGFyYW0geyp9IHggVGhlIHZhbHVlIGJlaW5nIHRlc3RlZCB0byBzZWUgaWYgaXQgaXMgYSBwbGFpbiBvYmplY3QuXG4gKiBAcmV0dXJuIHtib29sZWFufSBFaXRoZXIgYHRydWVgIGlmIHRoZSB0ZXN0IHZhbHVlIGlzIGEgcGxhaW4gb2JqZWN0IG9yXG4gKiAgICAgYGZhbHNlYCBpZiBpdCBpcyBub3QuXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHgpIHtcbiAgLy8gVGhpcyBjaGVjayBleGNsdWRlcyBidWlsdC1pbiBub24tT2JqZWN0IG9iamVjdHMgKHN1Y2ggYXMgQXJyYXkgYW5kIFN0cmluZykuXG4gIC8vIEl0IGFsc28gZXhjbHVkZXMgb2JqZWN0cyBjcmVhdGVkIGZyb20gRVMyMDE1IGNsYXNzZXMsIGJ1dCBpdCBkb2VzIG5vdFxuICAvLyBleGNsdWRlIG9iamVjdHMgY3JlYXRlZCB3aXRoIGBuZXdgIG9uIGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyAodGhhdCBoYXBwZW5zXG4gIC8vIGJlbG93KS5cbiAgaWYgKHRvU3RyaW5nLmNhbGwoeCkgIT09IFwiW29iamVjdCBPYmplY3RdXCIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBQcm90b3R5cGUtbGVzcyBvYmplY3RzIChjcmVhdGVkIHdpdGggYE9iamVjdC5jcmVhdGUobnVsbCkpYCBwYXNzXG4gIGNvbnN0IHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHgpO1xuICBpZiAocHJvdG8gPT09IG51bGwpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8vIENoZWNrIHRvIHNlZSB3aGV0aGVyIHRoZSBjb25zdHJ1Y3RvciBvZiB0aGUgdGVzdGVkIG9iamVjdCBpcyB0aGUgT2JqZWN0XG4gIC8vIGNvbnN0cnVjdG9yLiBUaGlzIGlzIHRoZSBvbmx5IGNvbnN0cnVjdG9yIHRoYXQgcHJvZHVjZXMgYSBcInBsYWluXCIgb2JqZWN0LlxuICBjb25zdCBjdG9yID1cbiAgICBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocHJvdG8sIFwiY29uc3RydWN0b3JcIikgJiZcbiAgICBwcm90by5jb25zdHJ1Y3RvcjtcbiAgcmV0dXJuIHR5cGVvZiBjdG9yID09PSBcImZ1bmN0aW9uXCIgJiYgY3RvciA9PT0gT2JqZWN0O1xufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhIHZhbHVlIGlzIGEgbnVtYmVyLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gd2lsbCByZXR1cm4gYHRydWVgIGZvciBhbnkgbnVtYmVyIGxpdGVyYWwgb3IgaW5zdGFuY2Ugb2ZcbiAqIGBOdW1iZXJgIGV4Y2VwdCBmb3IgYEluZmluaXR5YCBvciBgTmFOYC4gSXQgd2lsbCByZXR1cm4gYGZhbHNlYCBmb3Igc3RyaW5nc1xuICogdGhhdCBoYXBwZW4gdG8gYWxzbyBiZSBudW1iZXJzOyB0aGUgdmFsdWUgbXVzdCBiZSBhbiBhY3R1YWwgYE51bWJlcmAgaW5zdGFuY2VcbiAqIG9yIG51bWJlciBsaXRlcmFsIHRvIHJldHVybiBgdHJ1ZWAuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjb3JlXG4gKiBAcGFyYW0geyp9IHggVGhlIHZhbHVlIGJlaW5nIHRlc3RlZCB0byBzZWUgaWYgaXQgaXMgYSBudW1iZXIuXG4gKiBAcmV0dXJuIHtib29sZWFufSBFaXRoZXIgYHRydWVgIGlmIHRoZSB0ZXN0IHZhbHVlIGlzIGEgZmluaXRlIG51bWJlciAobm90XG4gKiAgICAgaW5jbHVkaW5nIHN0cmluZyByZXByZXNlbnRhdGlvbnMgb2YgbnVtYmVycykgb3IgYGZhbHNlYCBpZiBpdCBpcyBub3QuXG4gKi9cbmZ1bmN0aW9uIGlzTnVtYmVyKHgpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoeCkgPT09IFwiW29iamVjdCBOdW1iZXJdXCIgJiYgaXNGaW5pdGUoeCk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGEgdmFsdWUgaXMgYSBzdHJpbmcuXG4gKlxuICogTGl0ZXJhbCBzdHJpbmdzIHdpbGwgcmV0dXJuIGB0cnVlYCwgYXMgd2lsbCBpbnN0YW5jZXMgb2YgdGhlIGBTdHJpbmdgIG9iamVjdC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNvcmVcbiAqIEBwYXJhbSB7Kn0geCBUaGUgdmFsdWUgYmVpbmcgdGVzdGVkIHRvIHNlZSBpZiBpdCBpcyBhIHN0cmluZy5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IEVpdGhlciBgdHJ1ZWAgaWYgdGhlIHRlc3QgdmFsdWUgaXMgYSBzdHJpbmcgb3IgYGZhbHNlYCBpZlxuICogICAgaXQgaXMgbm90LlxuICovXG5mdW5jdGlvbiBpc1N0cmluZyh4KSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHgpID09PSBcIltvYmplY3QgU3RyaW5nXVwiO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhIHZhbHVlIGlzIGFuIGFycmF5LlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gbWVyZWx5IGRlbGVnYXRlcyB0byBgQXJyYXkuaXNBcnJheWAuIEl0IGlzIHByb3ZpZGVkIGZvclxuICogY29uc2lzdGVuY3kgaW4gY2FsbGluZyBzdHlsZSBvbmx5LlxuICpcbiAqIEBmdW5jdGlvbiBpc0FycmF5XG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNvcmVcbiAqIEBwYXJhbSB7Kn0geCBUaGUgdmFsdWUgYmVpbmcgdGVzdGVkIHRvIHNlZSBpZiBpdCBpcyBhbiBhcnJheS5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IEVpdGhlciBgdHJ1ZWAgaWYgdGhlIHRlc3QgdmFsdWUgaXMgYW4gYXJyYXkgb3IgYGZhbHNlYCBpZlxuICogICAgIGl0IGlzIG5vdC5cbiAqL1xuY29uc3QgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5cbmV4cG9ydCB7XG4gIGlzRnVuY3Rpb24sXG4gIGlzR2VuZXJhdG9yRnVuY3Rpb24sXG4gIGlzT2JqZWN0LFxuICBpc051bWJlcixcbiAgaXNTdHJpbmcsXG4gIGlzQXJyYXlcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuLyoqXG4gKiBBbGwgb2YgdGhlIHB1YmxpYy1mYWNpbmcgQ2hhbmtvIGZ1bmN0aW9ucyBhcmUgZ2F0aGVyZWQgaGVyZSBpbiBvbmUgcGxhY2UgdG9cbiAqIGJlIGV4cG9ydGVkIGFzIGEgd2hvbGUuIFRoaXMgaXMgYSBjb21wbGV0ZWx5IGZsYXQgbGlzdCBvZiBleHBvcnRzLCBhc1xuICogaW5sdWRpbmcgYW55IG9iamVjdCBsaXRlcmFscyBmb3IgZXhwb3J0ICh3aGljaCB3b3VsZCBiZSBuYXR1cmFsIGZvciBidWZmZXJzLFxuICogZm9yIGV4YW1wbGUpIHdvdWxkIGtlZXAgdHJlZS1zaGFraW5nIGZyb20gd29ya2luZyByaWdodC5cbiAqXG4gKiBAbW9kdWxlIGNzcFxuICovXG5cbmV4cG9ydCB7IGZpeGVkLCBkcm9wcGluZywgc2xpZGluZyB9IGZyb20gXCJtb2R1bGVzL2J1ZmZlclwiO1xuZXhwb3J0IHtcbiAgQ0xPU0VELFxuICBjaGFuLFxuICB0aW1lZENoYW4sXG4gIHRyYW5zQ2hhbixcbiAgc2VuZCxcbiAgcmVjdixcbiAgc2VuZEFzeW5jLFxuICByZWN2QXN5bmMsXG4gIHJlY3ZPclRocm93LFxuICBjbG9zZSxcbiAgaXNDbG9zZWQsXG4gIGlzQnVmZmVyZWQsXG4gIGlzVGltZWQsXG4gIHNlbGVjdCxcbiAgc2VsZWN0QXN5bmMsXG4gIHZhbHVlLFxuICBjaGFubmVsXG59IGZyb20gXCJtb2R1bGVzL2NoYW5uZWxcIjtcbmV4cG9ydCB7XG4gIGNvbmZpZyxcbiAgU0VUX0lNTUVESUFURSxcbiAgTUVTU0FHRV9DSEFOTkVMLFxuICBTRVRfVElNRU9VVFxufSBmcm9tIFwibW9kdWxlcy9kaXNwYXRjaGVyXCI7XG5leHBvcnQgeyBnbywgc2xlZXAsIGpvaW4gfSBmcm9tIFwibW9kdWxlcy9wcm9jZXNzXCI7XG5leHBvcnQgeyBFTVBUWSB9IGZyb20gXCJtb2R1bGVzL3F1ZXVlXCI7XG5cbi8qKlxuICogQW4gZXJyb3IgaGFuZGxpbmcgZnVuY2l0b24uIFRoaXMgaXMgdXNlZCB0byBoYW5kbGUgZXhjZXB0aW9ucyB0aHJvd24gaW4gYXN5bmNcbiAqIGZ1bmN0aW9ucyBhbmQgaW4gdHJhbnNkdWNlcnMuIFRoZSByZXR1cm4gdmFsdWUgb2YgYW4gZXhjZXB0aW9uIGhhbmRsZXIgaXNcbiAqIHR5cGljYWxseSBzZW50IHRvIGEgY2hhbm5lbDsgaWYgdGhlIGV4Y2VwdGlvbiBoYXBwZW5lZCB3aXRoaW4gYW4gYXN5bmNcbiAqIGZ1bmN0aW9uLCBpdCB3aWxsIGJlIHNlbnQgdG8gdGhhdCBmdW5jdGlvbidzIG91dHB1dCBjaGFubmVsLCBhbmQgaWYgdGhlXG4gKiBleGNwZXRpb24gaGFwcGVuZWQgaW4gYSB0cmFuc2R1Y2VyLCBpdCB3aWxsIGJlIHNlbnQgdG8gdGhlIGNoYW5uZWwgdG8gd2hpY2hcbiAqIHRoZSB0cmFuc2R1Y2VyIGlzIGF0dGFjaGVkLlxuICpcbiAqIEBjYWxsYmFjayBFeGNlcHRpb25IYW5kbGVyXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICogQHBhcmFtIHtvYmplY3R9IGVyciBUaGUgZXJyb3Igb2JqZWN0IHRoYXQgd2FzIHRocm93biB0byBjYXVzZSB0aGUgZXJyb3IgdG9cbiAqICAgICBoYXZlIHRvIGJlIGhhbmRsZWQuXG4gKiBAcmV0dXJuIHsqfSBBIHZhbHVlIGRlY2lkZWQgYnkgdGhlIGhhbmRsZXIgdGhhdCB3aWxsIGJlIHNlbnQgdG8gYSBjaGFubmVsLlxuICovXG5cbi8qKlxuICogQSBjYWxsYmFjayB0aGF0J3MgcnVuIHdoZW4gYSBub24tYmxvY2tpbmcgY2hhbm5lbCBvcGVyYXRpb24gY29tcGxldGVzLiBUaGVcbiAqIHZhbHVlIHRoYXQgdGhpcyBmdW5jdGlvbiByZWNlaXZlcyBpcyBpZGVudGljYWwgdG8gd2hhdCBpcyByZXR1cm5lZCBieSBhXG4gKiBibG9ja2luZyBjYWxsOiB0aGUgdmFsdWUgcmVjZWl2ZWQgZnJvbSB0aGUgY2hhbm5lbCBmb3IgYSBgcmVjdmAsIG9yIGB0cnVlYCBvclxuICogYGZhbHNlYCBkZXBlbmRpbmcgb24gdGhlIGNoYW5uZWwgc3RhdHVzIGZvciBhIGBzZW5kYC4gQW55IHJldHVybiB2YWx1ZSBmcm9tXG4gKiB0aGlzIGNhbGxiYWNrIGlzIGlnbm9yZWQuXG4gKlxuICogQGNhbGxiYWNrIE9wQ2FsbGJhY2tcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcGFyYW0geyp9IHZhbHVlIEVpdGhlciB0aGUgdmFsdWUgcmVjZWl2ZWQgZnJvbSB0aGUgY2hhbm5lbCwgb3Igd2hldGhlciBvclxuICogbm90IGEgdmFsdWUgd2FzIHN1Y2Nlc3NmdWxseSBzZW50LlxuICovXG5cbi8qKlxuICogQSBjYWxsYmFjayB0aGF0J3MgcnVuIHdoZW4gYSBub24tYmxvY2tpbmcgYHNlbGVjdGAgb3BlcmF0aW9uIGNvbXBsZXRlcy4gVGhlXG4gKiB2YWx1ZSB0aGF0IHRoaXMgZnVuY3Rpb24gcmVjZWl2ZXMgaXMgYW4gb2JqZWN0IHdpdGggdHdvIHByb3BlcnRpZXM6IHRoZSB2YWx1ZVxuICogdGhhdCB0aGUgYHNlbGVjdGAgb3BlcmF0aW9uIGNvbXBsZXRlZCB3aXRoIChlaXRoZXIgdGhlIHZhbHVlIHJlY2VpdmVkIGZyb21cbiAqIHRoZSBjaGFubmVsIGluIGEgcmVjZWl2ZSBvcGVyYXRpb24sIG9yIGB0cnVlYCBvciBgZmFsc2VgIGluIGEgc2VuZFxuICogb3BlcmF0aW9uKSwgYWxvbmcgd2l0aCB0aGUgY2hhbm5lbCB3aGVyZSB0aGUgb3BlcmF0aW9uIGFjdHVhbGx5IGhhcHBlbmVkLiBBbnlcbiAqIHJldHVybiB2YWx1ZSBmcm9tIHRoaXMgY2FsbGJhY2sgaXMgaWdub3JlZC5cbiAqXG4gKiBAY2FsbGJhY2sgU2VsZWN0Q2FsbGJhY2tcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuU2VsZWN0UmVzdWx0fSBkYXRhIFRoZSB2YWx1ZSByZXR1cm5lZCBmcm9tIHRoZSBzZWxlY3RcbiAqICAgICBvcGVyYXRpb24uXG4gKi9cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG4vKipcbiAqIFByb3ZpZGVzIHNldmVyYWwgdHlwZXMgb2YgYnVmZmVycyB1c2FibGUgaW4gYnVmZmVyZWQgY2hhbm5lbHMuIFRoZXNlIGFyZSBhbGxcbiAqIGJ1aWx0IG9uIGEgc21hbGwsIGVmZmljaWVudCBxdWV1ZSB3aGljaCBpcyBpbiB0dXJuIGJhY2tlZCBieSBhIEphdmFTY3JpcHRcbiAqIGFycmF5LlxuICpcbiAqIEBtb2R1bGUgY3NwL2J1ZmZlclxuICogQHByaXZhdGVcbiAqL1xuXG5pbXBvcnQgeyBxdWV1ZSBhcyBxLCBjb3VudCBhcyBxQ291bnQsIGVucXVldWUsIGRlcXVldWUgfSBmcm9tIFwibW9kdWxlcy9xdWV1ZVwiO1xuXG4vKipcbiAqIEEgYnVmZmVyIHRoYXQgc3RvcmVzIHZhbHVlcyBzZW50IHRvIGEgYnVmZmVyZWQgY2hhbm5lbCB1bnRpbCBhIHByb2Nlc3NcbiAqIHJlY2VpdmVzIHRoZW0uXG4gKlxuICogRGlmZmVyZW50IGJ1ZmZlcnMgZGlmZmVyIG9ubHkgaW4gdGhlIHdheSB0aGF0IHRoZXkgZGV0ZXJtaW5lIHdoZXRoZXIgdGhleSBhcmVcbiAqIGZ1bGwgYW5kIGluIHdoYXQgaGFwcGVucyB3aGVuIGEgbmV3IHZhbHVlIGlzIGFkZGVkIHRvIGEgZnVsbCBidWZmZXIuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqIEB0eXBlZGVmIHsobW9kdWxlOmNzcC5GaXhlZEJ1ZmZlciB8IG1vZHVsZTpjc3AuRHJvcHBpbmdCdWZmZXIgfFxuICogICAgIG1vZHVsZTpjc3AuU2xpZGluZ0J1ZmZlcil9IEJ1ZmZlclxuICovXG5cbi8qKlxuICogVGhlIG5hbWUgb2YgYSBwcm9wZXJ0eSB0aGF0IGV4aXN0cyBvbiBidWZmZXIgb2JqZWN0cyBmb3IgdGhlIHB1cnBvc2Ugb2ZcbiAqIGl0ZW50aWZ5aW5nIHRoZW0gYXMgYnVmZmVyIG9iamVjdHMuXG4gKlxuICogQHR5cGUge1N5bWJvbH1cbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IEJVRkZFUiA9IFN5bWJvbChcIkJVRkZFUlwiKTtcblxuLyoqXG4gKiBBIHBvc3NpYmxlIHZhbHVlIG9mIHRoZSBge0BsaW5rIG1vZHVsZTpjc3AvYnVmZmVyLkJVRkZFUnxCVUZGRVJ9IHByb3BlcnR5XG4gKiBpbmRpY2F0aW5nIHRoYXQgdGhlIGJ1ZmZlciBpcyBhIGZpeGVkIGJ1ZmZlci5cbiAqXG4gKiBAdHlwZSB7U3ltYm9sfVxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgRklYRUQgPSBTeW1ib2woXCJGSVhFRFwiKTtcblxuLyoqXG4gKiBBIHBvc3NpYmxlIHZhbHVlIG9mIHRoZSBge0BsaW5rIG1vZHVsZTpjc3AvYnVmZmVyLkJVRkZFUnxCVUZGRVJ9IHByb3BlcnR5XG4gKiBpbmRpY2F0aW5nIHRoYXQgdGhlIGJ1ZmZlciBpcyBhIGRyb3BwaW5nIGJ1ZmZlci5cbiAqXG4gKiBAdHlwZSB7U3ltYm9sfVxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgRFJPUFBJTkcgPSBTeW1ib2woXCJEUk9QUElOR1wiKTtcblxuLyoqXG4gKiBBIHBvc3NpYmxlIHZhbHVlIG9mIHRoZSBge0BsaW5rIG1vZHVsZTpjc3AvYnVmZmVyLkJVRkZFUnxCVUZGRVJ9IHByb3BlcnR5XG4gKiBpbmRpY2F0aW5nIHRoYXQgdGhlIGJ1ZmZlciBpcyBhIHNsaWRpbmcgYnVmZmVyLlxuICpcbiAqIEB0eXBlIHtTeW1ib2x9XG4gKiBAcHJpdmF0ZVxuICovXG5jb25zdCBTTElESU5HID0gU3ltYm9sKFwiU0xJRElOR1wiKTtcblxuLyoqXG4gKiBQcmVkaWNhdGUgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBzdXBwbGllZCBvYmplY3QgaXMgYSBidWZmZXIuXG4gKlxuICogQHBhcmFtIHsqfSBvYmogVGhlIHZhbHVlIHRvIHRlc3QgdG8gc2VlIGlmIGl0J3MgYSBidWZmZXIuXG4gKiBAcmV0dXJuIHtib29sZWFufSBFaXRoZXIgYHRydWVgIGlmIHRoZSB2YWx1ZSBpcyBhIGJ1ZmZlciwgb3IgYGZhbHNlYCBpZiBpdCBpc1xuICogICAgIG5vdC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGlzQnVmZmVyKG9iaikge1xuICByZXR1cm4gISFvYmo/LltCVUZGRVJdO1xufVxuXG4vKipcbiAqIEEgYnVmZmVyIGltcGxlbWVudGF0aW9uIHRoYXQgbmV2ZXIgZGlzY2FyZHMgYnVmZmVyZWQgaXRlbXMgd2hlbiBhIG5ldyBpdGVtIGlzXG4gKiBhZGRlZC5cbiAqXG4gKiBUaGlzIGJ1ZmZlciBoYXMgYSBjb25jZXB0IG9mICpmdWxsKiwgYnV0IGl0J3MgYSBzb2Z0IGxpbWl0LiBJZiB0aGUgc2l6ZSBvZlxuICogdGhlIGJ1ZmZlciBpcyBleGNlZWRlZCwgYWRkZWQgaXRlbXMgYXJlIHN0aWxsIHN0b3JlZC5cbiAqXG4gKiBBIGJ1ZmZlciBvZiB0aGlzIHR5cGUgZXhpc3RzIG9ubHkgYXMgYW4gb2JqZWN0IHRoYXQgY2FuIGJlIHBhc3NlZCB0byBhXG4gKiBjaGFubmVsIGNyZWF0aW9uIGZ1bmN0aW9uIChzdWNoIGFzIHtAbGluayBtb2R1bGU6Y3NwLmNoYW58Y2hhbn0pIHRvIG1ha2UgdGhhdFxuICogY2hhbm5lbCBhIGJ1ZmZlcmVkIGNoYW5uZWwuIEl0IGRvZXNuJ3QgaGF2ZSBhbnkgcHJvcGVydGllcyB0aGF0IGFyZSBpbnRlbmRlZFxuICogZm9yIGV4dGVybmFsIHVzZS5cbiAqXG4gKiBAdHlwZWRlZiBGaXhlZEJ1ZmZlclxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgYSBmaXhlZCBidWZmZXIgb2YgdGhlIHNwZWNpZmllZCBjYXBhY2l0eS5cbiAqXG4gKiBBIGZpeGVkIGJ1ZmZlciBpcyBhICdub3JtYWwnIGJ1ZmZlciwgb25lIHRoYXQgc3RvcmVzIGFuZCByZXR1cm5zIGl0ZW1zIG9uXG4gKiBkZW1hbmQuIFdoaWxlIGl0IGlzIGNhcGFibGUgb2YgYmVpbmcgb3Zlci1maWxsZWQsIHRoYXQgYWJpbGl0eSBpcyBub3QgdXNlZCBpblxuICogQ2hhbmtvLiBBIGJ1ZmZlciB0aGF0IGlzIGZ1bGwgd2lsbCBjYXVzZSB0aGUgbmV4dCBwdXQgdG8gaXRzIGNoYW5uZWwgdG8gYmxvY2tcbiAqIHVudGlsIGF0IGxlYXN0IG9uZSBpdGVtIGlzIHJlbW92ZWQgZnJvbSB0aGUgYnVmZmVyLlxuICpcbiAqIFRoaXMgYnVmZmVyIGlzIHBhc3NlZCB0byBge0BsaW5rIG1vZHVsZTpjc3AuY2hhbnxjaGFufWAsIGV0Yy4gdG8gY3JlYXRlIGFcbiAqIGJ1ZmZlcmVkIGNoYW5uZWwuIEl0IGlzIG5vdCBtZWFudCB0byBiZSB1c2VkIGRpcmVjdGx5LlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcGFyYW0ge251bWJlcn0gc2l6ZSBUaGUgbnVtYmVyIG9mIGl0ZW1zIHRoYXQgdGhlIG5ldyBidWZmZXIgY2FuIGhvbGQgYmVmb3JlXG4gKiAgICAgaXQncyBmdWxsLlxuICogQHJldHVybiB7bW9kdWxlOmNzcC5GaXhlZEJ1ZmZlcn0gQSBuZXcgZml4ZWQgYnVmZmVyIG9mIHRoZSBzcGVjaWZpZWRcbiAqICAgICBjYXBhY2l0eS5cbiAqL1xuZnVuY3Rpb24gZml4ZWQoc2l6ZSkge1xuICByZXR1cm4gT2JqZWN0LmNyZWF0ZShudWxsLCB7XG4gICAgLyoqXG4gICAgICogVGhlIHF1ZXVlIGJhY2tpbmcgdGhpcyBidWZmZXIuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7bW9kdWxlOmNzcC9xdWV1ZX5RdWV1ZX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHF1ZXVlOiB7XG4gICAgICB2YWx1ZTogcSgpXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBudW1iZXIgb2YgaXRlbXMgdGhhdCB0aGlzIHF1ZXVlIGNhbiBob2xkIGJlZm9yZSBpdCdzIGNvbnNpZGVyZWQgZnVsbC5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBzaXplOiB7XG4gICAgICB2YWx1ZTogc2l6ZVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBIG1hcmtlciBwcm9wZXJ0eSB1c2VkIHRvIHNob3cgdGhhdCB0aGlzIGlzIGEgZml4ZWQgYnVmZmVyLlxuICAgICAqXG4gICAgICogQHR5cGUge1N5bWJvbH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIFtCVUZGRVJdOiB7XG4gICAgICB2YWx1ZTogRklYRURcbiAgICB9XG4gIH0pO1xufVxuXG4vKipcbiAqIEEgYnVmZmVyIGltcGxlbWVudGF0aW9uIHRoYXQgZHJvcHMgbmV3bHkgYWRkZWQgaXRlbXMgd2hlbiB0aGUgYnVmZmVyIGlzIGZ1bGwuXG4gKlxuICogVGhpcyBkcm9wcGluZyBiZWhhdmlvciBpcyBzaWxlbnQ6IHRoZSBuZXcgaXRlbSBpcyBzaW1wbHkgbm90IGFkZGVkIHRvIHRoZVxuICogcXVldWUuIE5vdGUgdGhhdCB0aGlzIGJ1ZmZlciBpcyBuZXZlciBgZnVsbGAgYmVjYXVzZSBpdCBjYW4gYWx3YXlzIGJlIGFkZGVkXG4gKiB0byB3aXRob3V0IGV4Y2VlZGluZyB0aGUgc2l6ZSwgZXZlbiBpZiB0aGF0ICdhZGRpbmcnIGRvZXNuJ3QgcmVzdWx0IGluIGEgbmV3XG4gKiBpdGVtIGFjdHVhbGx5IGFwcGVhcmluZyBpbiB0aGUgYnVmZmVyLlxuICpcbiAqIEEgYnVmZmVyIG9mIHRoaXMgdHlwZSBleGlzdHMgb25seSBhcyBhbiBvYmplY3QgdGhhdCBjYW4gYmUgcGFzc2VkIHRvIGFcbiAqIGNoYW5uZWwgY3JlYXRpb24gZnVuY3Rpb24gKHN1Y2ggYXMge0BsaW5rIG1vZHVsZTpjc3AuY2hhbnxjaGFufSkgdG8gbWFrZSB0aGF0XG4gKiBjaGFubmVsIGEgYnVmZmVyZWQgY2hhbm5lbC4gSXQgZG9lc24ndCBoYXZlIGFueSBwcm9wZXJ0aWVzIHRoYXQgYXJlIGludGVuZGVkXG4gKiBmb3IgZXh0ZXJuYWwgdXNlLlxuICpcbiAqIEB0eXBlZGVmIERyb3BwaW5nQnVmZmVyXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICovXG5cbi8qKlxuICogQ3JlYXRlcyBhIGRyb3BwaW5nIGJ1ZmZlciBvZiB0aGUgc3BlY2lmaWVkIGNhcGFjaXR5LlxuICpcbiAqIEEgZHJvcHBpbmcgYnVmZmVyIHNpbGVudGx5IGRyb3BzIHRoZSBpdGVtIGJlaW5nIGFkZGVkIGlmIHRoZSBidWZmZXIgaXNcbiAqIGFscmVhZHkgYXQgY2FwYWNpdHkuIFNpbmNlIGFkZGluZyBhIG5ldyBpdGVtIHdpbGwgYWx3YXlzICdzdWNjZWVkJyAoZXZlbiBpZlxuICogaXQgc3VjY2VlZHMgYnkganVzdCBpZ25vcmluZyB0aGUgYWRkKSwgaXQgaXMgbmV2ZXIgY29uc2lkZXJlZCBmdWxsIGFuZFxuICogdGhlcmVmb3JlIGEgcHV0IHRvIGEgY2hhbm5lbCBidWZmZXJlZCBieSBhIGRyb3BwaW5nIGJ1ZmZlciBuZXZlciBibG9ja3MuXG4gKlxuICogVGhpcyBidWZmZXIgaXMgcGFzc2VkIHRvIGB7QGxpbmsgbW9kdWxlOmNzcC5jaGFufGNoYW59YCwgZXRjLiB0byBjcmVhdGUgYVxuICogYnVmZmVyZWQgY2hhbm5lbC4gSXQgaXMgbm90IG1lYW50IHRvIGJlIHVzZWQgZGlyZWN0bHkuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqIEBwYXJhbSB7bnVtYmVyfSBzaXplIFRoZSBudW1iZXIgb2YgaXRlbXMgdGhhdCB0aGUgbmV3IGJ1ZmZlciBjYW4gaG9sZCBiZWZvcmVcbiAqICAgICBuZXdlc3QgaXRlbXMgYXJlIGRyb3BwZWQgb24gYWRkLlxuICogQHJldHVybiB7bW9kdWxlOmNzcC5Ecm9wcGluZ0J1ZmZlcn0gQSBuZXcgZHJvcHBpbmcgYnVmZmVyIG9mIHRoZSBzcGVjaWZpZWRcbiAqICAgICBjYXBhY2l0eS5cbiAqL1xuZnVuY3Rpb24gZHJvcHBpbmcoc2l6ZSkge1xuICByZXR1cm4gT2JqZWN0LmNyZWF0ZShudWxsLCB7XG4gICAgLyoqXG4gICAgICogVGhlIHF1ZXVlIGJhY2tpbmcgdGhpcyBidWZmZXIuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7bW9kdWxlOmNzcC9xdWV1ZX5RdWV1ZX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHF1ZXVlOiB7XG4gICAgICB2YWx1ZTogcSgpXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBudW1iZXIgb2YgaXRlbXMgdGhhdCB0aGlzIHF1ZXVlIGNhbiBob2xkIGJlZm9yZSBpdCdzIGNvbnNpZGVyZWQgZnVsbC5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBzaXplOiB7XG4gICAgICB2YWx1ZTogc2l6ZVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBIG1hcmtlciBwcm9wZXJ0eSB1c2VkIHRvIHNob3cgdGhhdCB0aGlzIGlzIGEgZHJvcHBpbmcgYnVmZmVyLlxuICAgICAqXG4gICAgICogQHR5cGUge1N5bWJvbH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIFtCVUZGRVJdOiB7XG4gICAgICB2YWx1ZTogRFJPUFBJTkdcbiAgICB9XG4gIH0pO1xufVxuXG4vKipcbiAqIEEgYnVmZmVyIGltcGxlbWVudGF0aW9uIHRoYXQgZHJvcHMgdGhlIG9sZGVzdCBpdGVtIHdoZW4gYW4gaXRlbSBpcyBhZGRlZCB0byBhXG4gKiBmdWxsIGJ1ZmZlci5cbiAqXG4gKiBUaGlzIGlzIHZlcnkgc2ltaWxhciB0byB7QGxpbmsgbW9kdWxlOmNzcC5Ecm9wcGluZ0J1ZmZlcnxEcm9wcGluZ0J1ZmZlcn07IHRoZVxuICogb25seSBkaWZmZXJlbmNlIGlzIGluIHdoYXQgaGFwcGVucyB3aGVuIGFuIGl0ZW0gaXMgYWRkZWQuIEluIHRoaXMgYnVmZmVyLCB0aGVcbiAqIG5ldyBpdGVtIGlzIGluZGVlZCBhZGRlZCB0byB0aGUgYnVmZmVyLCBidXQgaW4gb3JkZXIgdG8ga2VlcCB0aGUgY291bnQgb2YgdGhlXG4gKiBidWZmZXIgYXQgb3IgYmVsb3cgaXRzIHNpemUsIHRoZSBvbGRlc3QgaXRlbSBpbiB0aGUgYnVmZmVyIGlzIHNpbGVudGx5XG4gKiBkcm9wcGVkLlxuICpcbiAqIEEgYnVmZmVyIG9mIHRoaXMgdHlwZSBleGlzdHMgb25seSBhcyBhbiBvYmplY3QgdGhhdCBjYW4gYmUgcGFzc2VkIHRvIGFcbiAqIGNoYW5uZWwgY3JlYXRpb24gZnVuY3Rpb24gKHN1Y2ggYXMge0BsaW5rIG1vZHVsZTpjc3AuY2hhbnxjaGFufSkgdG8gbWFrZSB0aGF0XG4gKiBjaGFubmVsIGEgYnVmZmVyZWQgY2hhbm5lbC4gSXQgZG9lc24ndCBoYXZlIGFueSBwcm9wZXJ0aWVzIHRoYXQgYXJlIGludGVuZGVkXG4gKiBmb3IgZXh0ZXJuYWwgdXNlLlxuICpcbiAqIEB0eXBlZGVmIFNsaWRpbmdCdWZmZXJcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIGEgc2xpZGluZyBidWZmZXIgb2YgdGhlIHNwZWNpZmllZCBjYXBhY2l0eS5cbiAqXG4gKiBBIHNsaWRpbmcgYnVmZmVyIGRyb3BzIHRoZSBmaXJzdC1hZGRlZCAob2xkZXN0KSBpdGVtIGFscmVhZHkgaW4gdGhlIGJ1ZmZlciBpZlxuICogYSBuZXcgaXRlbSBpcyBhZGRlZCB3aGVuIHRoZSBidWZmZXIgaXMgYWxyZWFkeSBhdCBjYXBhY2l0eS4gU2luY2UgaXQncyBhbHdheXNcbiAqIGNhcGFibGUgb2YgaGF2aW5nIGl0ZW1zIGFkZGVkIHRvIGl0LCBpdCdzIG5ldmVyIGNvbnNpZGVyZWQgZnVsbCwgYW5kXG4gKiB0aGVyZWZvcmUgYSBwdXQgdG8gYSBjaGFubmVsIGJ1ZmZlcmVkIGJ5IGEgc2xpZGluZyBidWZmZXIgbmV2ZXIgYmxvY2tzLlxuICpcbiAqIFRoaXMgYnVmZmVyIGlzIHBhc3NlZCB0byBge0BsaW5rIG1vZHVsZTpjc3AuY2hhbnxjaGFufWAsIGV0Yy4gdG8gY3JlYXRlIGFcbiAqIGJ1ZmZlcmVkIGNoYW5uZWwuIEl0IGlzIG5vdCBtZWFudCB0byBiZSB1c2VkIGRpcmVjdGx5LlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcGFyYW0ge251bWJlcn0gc2l6ZSBUaGUgbnVtYmVyIG9mIGl0ZW1zIHRoYXQgdGhlIG5ldyBidWZmZXIgY2FuIGhvbGQgYmVmb3JlXG4gKiAgICAgb2xkZXN0IGl0ZW1zIGFyZSBkcm9wcGVkIG9uIGFkZC5cbiAqIEByZXR1cm4ge21vZHVsZTpjc3AuU2xpZGluZ0J1ZmZlcn0gQSBuZXcgc2xpZGluZyBidWZmZXIgb2YgdGhlIHNwZWNpZmllZFxuICogICAgIGNhcGFjaXR5LlxuICovXG5mdW5jdGlvbiBzbGlkaW5nKHNpemUpIHtcbiAgcmV0dXJuIE9iamVjdC5jcmVhdGUobnVsbCwge1xuICAgIC8qKlxuICAgICAqIFRoZSBxdWV1ZSBiYWNraW5nIHRoaXMgYnVmZmVyLlxuICAgICAqXG4gICAgICogQHR5cGUge21vZHVsZTpjc3AvcXVldWV+UXVldWV9XG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBxdWV1ZToge1xuICAgICAgdmFsdWU6IHEoKVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgbnVtYmVyIG9mIGl0ZW1zIHRoYXQgdGhpcyBxdWV1ZSBjYW4gaG9sZCBiZWZvcmUgaXQncyBjb25zaWRlcmVkIGZ1bGwuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgc2l6ZToge1xuICAgICAgdmFsdWU6IHNpemVcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQSBtYXJrZXIgcHJvcGVydHkgdXNlZCB0byBzaG93IHRoYXQgdGhpcyBpcyBhIHNsaWRpbmcgYnVmZmVyLlxuICAgICAqXG4gICAgICogQHR5cGUge1N5bWJvbH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIFtCVUZGRVJdOiB7XG4gICAgICB2YWx1ZTogU0xJRElOR1xuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgcXVldWUgdGhhdCBiYWNrcyBhIGJ1ZmZlci5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuQnVmZmVyfSBidWZmZXIgVGhlIGJ1ZmZlciB3aG9zZSBxdWV1ZSBpcyByZXR1cm5lZCBieSB0aGlzXG4gKiAgICAgZnVuY3Rpb24uXG4gKiBAcmV0dXJuIHttb2R1bGU6Y3NwL3F1ZXVlflF1ZXVlfSBUaGUgcXVldWUgdGhhdCBiYWNrcyB0aGUgc3VwcGxpZWQgYnVmZmVyLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gcXVldWUoYnVmZmVyKSB7XG4gIHJldHVybiBidWZmZXIucXVldWU7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgbnVtYmVyIG9mIGl0ZW1zIGEgYnVmZmVyIGNhbiBob2xkIGJlZm9yZSBpdCdzIGZ1bGwuXG4gKlxuICogQHBhcmFtIHttb2R1bGU6Y3NwLkJ1ZmZlcn0gYnVmZmVyIFRoZSBidWZmZXIgd2hvc2Ugc2l6ZSBpcyByZXR1cm5lZCBieSB0aGlzXG4gKiAgICAgZnVuY3Rpb24uXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBzaXplIG9mIHRoZSBzdXBwbGllZCBidWZmZXIuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBzaXplKGJ1ZmZlcikge1xuICByZXR1cm4gYnVmZmVyLnNpemU7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgbnVtYmVyIG9mIGl0ZW1zIGEgYnVmZmVyIGlzIGN1cnJlbnRseSBob2xkaW5nLlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5CdWZmZXJ9IGJ1ZmZlciBUaGUgYnVmZmVyIHdob3NlIGN1cnJlbnQgY291bnQgaXMgcmV0dXJuZWRcbiAqICAgICBieSB0aGlzIGZ1bmN0aW9uLlxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgbnVtYmVyIG9mIGl0ZW1zIHRoYXQgdGhlIHN1cHBsaWVkIGJ1ZmZlciBpcyBob2xkaW5nLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY291bnQoYnVmZmVyKSB7XG4gIHJldHVybiBxQ291bnQoYnVmZmVyLnF1ZXVlKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgYSBidWZmZXIgaXMgYXQgY2FwYWNpdHkuXG4gKlxuICogQHBhcmFtIHttb2R1bGU6Y3NwLkJ1ZmZlcn0gYnVmZmVyIFRoZSBidWZmZXIgd2hvJ3MgYmVpbmcgY2hlY2tlZCB0byBzZWUgaWZcbiAqICAgICBpdCdzIGF0IGNhcGFjaXR5LlxuICogQHJldHVybiB7bnVtYmVyfSBFaXRoZXIgYHRydWVgIGlmIHRoZSBzdXBwbGllZCBidWZmZXIgaXMgZnVsbCBvciBgZmFsc2VgIGlmXG4gKiAgICAgaXQgaXNuJ3QuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBpc0Z1bGwoYnVmZmVyKSB7XG4gIHJldHVybiBidWZmZXJbQlVGRkVSXSA9PT0gRklYRUQgPyBxQ291bnQoYnVmZmVyLnF1ZXVlKSA+PSBidWZmZXIuc2l6ZSA6IGZhbHNlO1xufVxuXG4vKipcbiAqIEFkZHMgb25lIG9yIG1vcmUgaXRlbXMgdG8gYSBidWZmZXIuXG4gKlxuICogQHBhcmFtIHttb2R1bGU6Y3NwLkJ1ZmZlcn0gYnVmZmVyIFRoZSBidWZmZXIgd2hlcmUgdGhlIHN1cHBsaWVkIGl0ZW1zIHdpbGwgYmVcbiAqICAgICBhZGRlZC5cbiAqIEBwYXJhbSB7Li4uKn0gaXRlbXMgVGhlIHZhbHVlcyBiZWluZyBhZGRlZCB0byB0aGUgc3VwcGxpZWQgYnVmZmVyLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gYWRkKGJ1ZmZlciwgLi4uaXRlbXMpIHtcbiAgc3dpdGNoIChidWZmZXJbQlVGRkVSXSkge1xuICAgIGNhc2UgRklYRUQ6XG4gICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgaXRlbXMpIHtcbiAgICAgICAgZW5xdWV1ZShidWZmZXIucXVldWUsIGl0ZW0pO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIERST1BQSU5HOlxuICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGl0ZW1zKSB7XG4gICAgICAgIGlmIChjb3VudChidWZmZXIpIDwgc2l6ZShidWZmZXIpKSB7XG4gICAgICAgICAgZW5xdWV1ZShidWZmZXIucXVldWUsIGl0ZW0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgU0xJRElORzpcbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBpdGVtcykge1xuICAgICAgICBpZiAoY291bnQoYnVmZmVyKSA+PSBzaXplKGJ1ZmZlcikpIHtcbiAgICAgICAgICBkZXF1ZXVlKGJ1ZmZlci5xdWV1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZW5xdWV1ZShidWZmZXIucXVldWUsIGl0ZW0pO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuO1xuICB9XG59XG5cbi8qKlxuICogUmVtb3ZlcyB0aGUgbmV4dCBpdGVtIGZyb20gYSBxdWV1ZSBhbmQgcmV0dXJucyBpdC5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuQnVmZmVyfSBidWZmZXIgVGhlIGJ1ZmZlciBmcm9tIHdoaWNoIGFuIGl0ZW0gaXMgYmVpbmdcbiAqICAgICByZW1vdmVkLlxuICogQHJldHVybiB7Kn0gVGhlIGl0ZW0gdGhhdCB3YXMgcmVtb3ZlZCBmcm9tIHRoZSBzdXBwbGllZCBidWZmZXIuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiByZW1vdmUoYnVmZmVyKSB7XG4gIHJldHVybiBkZXF1ZXVlKGJ1ZmZlci5xdWV1ZSk7XG59XG5cbmV4cG9ydCB7XG4gIGlzQnVmZmVyLFxuICBmaXhlZCxcbiAgZHJvcHBpbmcsXG4gIHNsaWRpbmcsXG4gIHF1ZXVlLFxuICBzaXplLFxuICBjb3VudCxcbiAgaXNGdWxsLFxuICBhZGQsXG4gIHJlbW92ZVxufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG5pbXBvcnQgeyBwcm90b2NvbHMgYXMgcCB9IGZyb20gXCJAY2hhbmtvL2NvcmVcIjtcbmltcG9ydCB7XG4gIHF1ZXVlLFxuICBkZXF1ZXVlLFxuICBFTVBUWSxcbiAgZmlsdGVyLFxuICBjb3VudCBhcyBxQ291bnQsXG4gIGVucXVldWVcbn0gZnJvbSBcIm1vZHVsZXMvcXVldWVcIjtcbmltcG9ydCB7IGlzRnVsbCwgY291bnQsIHJlbW92ZSB9IGZyb20gXCJtb2R1bGVzL2J1ZmZlclwiO1xuaW1wb3J0IHsgZGlzcGF0Y2ggfSBmcm9tIFwibW9kdWxlcy9kaXNwYXRjaGVyXCI7XG5cbi8qKlxuICogVGhlIG1heGltdW0gbnVtYmVyIG9mIGRpcnR5IG9wZXJhdGlvbnMgdGhhdCBjYW4gYmUgcXVldWVkIG9uIGEgY2hhbm5lbCBiZWZvcmVcbiAqIGEgY2xlYW51cCBpcyB0cmlnZ2VyZWQuXG4gKlxuICogQHR5cGUge251bWJlcn1cbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IE1BWF9ESVJUWSA9IDY0O1xuXG4vKipcbiAqIFRoZSBtYXhpbXVtIG51bWJlciBvZiBvcGVydGlvbnMgdGhhdCBjYW4gYmUgcXVldWVkIG9uIGEgY2hhbm5lbCBiZWZvcmUgbmV3XG4gKiBvcGVyYXRpb25zIGFyZSByZWplY3RlZC5cbiAqXG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgTUFYX1FVRVVFRCA9IDEwMjQ7XG5cbi8qKlxuICogKmhlIHZhbHVlIHJldHVybmVkIGZyb20gYSByZWNlaXZlIG9uIGEgY2hhbm5lbCB3aGVuIHRoYXQgY2hhbm5lbCBpcyBjbG9zZWRcbiAqIGFuZCBoYXMgbm8gbW9yZSB2YWx1ZXMgYXZhaWxhYmxlLlxuICpcbiAqIFRoaXMgaXMgYSBzcGVjaWFsIHZhbHVlIHRoYXQgaXMgcmV0dXJuZWQgdW5kZXIgYSBjZXJ0YWluIGNpcmN1bXN0YW5jZSwgbmFtZWx5XG4gKiB3aGVuIGEgcmVjZWl2ZSBpcyBwZXJmb3JtZWQgb24gYSBjbG9zZWQgY2hhbm5lbC4gQmVjYXVzZSBvZiB0aGF0LCBpdCBjYW5ub3RcbiAqIGJlIHJldHVybmVkIGZyb20gYSByZWNlaXZlIG9uIGFuIG9wZW4gY2hhbm5lbC4gRm9yIHRoYXQgcmVhc29uLCBgQ0xPU0VEYCBpc1xuICogdGhlIG9ubHkgdmFsdWUgdGhhdCBjYW5ub3QgYmUgc2VudCBvbnRvIGEgY2hhbm5lbCAmbWRhc2g7IGl0IHdvdWxkIGJlXG4gKiBpbXBvc3NpYmxlIHRvIGRpc3Rpbmd1aXNoIGJldHdlZW4gYSBsZWdpdGltYXRlIHZhbHVlIG9mIGBDTE9TRURgIGFuZCBhblxuICogYWN0dWFsIGNsb3NlZCBjaGFubmVsLlxuICpcbiAqIEB0eXBlIHtTeW1ib2x9XG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICovXG5jb25zdCBDTE9TRUQgPSBTeW1ib2woXCJDTE9TRURcIik7XG5cbi8qKlxuICogQSB1bmlxdWUgdmFsdWUgdXNlZCB0byBpbmRpY2F0ZSB0aGF0IGFuIG9iamVjdCBpcyBhIGJveC5cbiAqXG4gKiBAdHlwZSB7U3ltYm9sfVxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgQk9YID0gU3ltYm9sKFwiQk9YXCIpO1xuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhbiBvYmplY3QgaXMgYSBib3guXG4gKlxuICogQHBhcmFtIHsqfSBvYmogQSB2YWx1ZSB0byBjaGVjayBmb3IgYm94aW5lc3MuXG4gKiBAcmV0dXJuIEVpdGhlciBgdHJ1ZWAgaWYgdGhlIHZhbHVlIGlzIGEgYm94IG9yIGBmYWxzZWAgaWYgaXQgaXNuJ3QuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBpc0JveChvYmopIHtcbiAgcmV0dXJuICEhb2JqPy5bQk9YXTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgYW4gb2JqZWN0IGlzIHJlZHVjZWQuIFRoaXMgaXMgZG9uZSB1c2luZyB0aGUgdHJhbnNkdWNlclxuICogcHJvdG9jb2w7IGFuIG9iamVjdCB3aXRoIHRoZSBwcm90b2NvbC1zcGVjaWZpZWQgYHJlZHVjZWRgIHByb3BlcnR5IGlzIGFzc3VtZWRcbiAqIHRvIGJlIHJlZHVjZWQuIElmIGEgcmVzdWx0IG9mIGEgdHJhbnNmb3JtYXRpb24gaXMgcmVkdWNlZCwgaXQgbWVhbnMgdGhhdCB0aGVcbiAqIHRyYW5zZm9ybWF0aW9uIGlzIGNvbXBsZXRlIGFuZCB0aGUgY2hhbm5lbCBzaG91bGQgYmUgY2xvc2VkLlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIGJlaW5nIGNoZWNrZWQgZm9yIHJlZHVjdGlvbi5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IEVpdGhlciBgdHJ1ZWAgaWYgdGhlIHZhbHVlIGhhcyBiZWVuIHJlZHVjZWQsIG9yIGBmYWxzZWAgaWZcbiAqICAgICBpdCBoYXMgbm90IGJlZW4uXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBpc1JlZHVjZWQodmFsdWUpIHtcbiAgcmV0dXJuICEhdmFsdWU/LltwLnJlZHVjZWRdO1xufVxuXG4vKipcbiAqIEEgd3JhcHBlciBhcm91bmQgYSB2YWx1ZS4gVGhpcyBpcyBwcmltYXJpbHkgdXNlZCBhcyBhIG1hcmtlcjsgYSBwdXQgb3IgdGFrZVxuICogcmV0dXJuaW5nIGEgQm94IGluZGljYXRlcyB0aGF0IHRoZSBwdXQgb3IgdGFrZSBoYXMgcmV0dXJuZWQgYW4gaW1tZWRpYXRlXG4gKiB2YWx1ZSwgd2hpbGUgcmV0dXJuaW5nIGBudWxsYCBpbmRpY2F0ZXMgdGhhdCB0aGUgb3BlcmF0aW9uIGhhcyBiZWVuIHF1ZXVlZC5cbiAqXG4gKiBAdHlwZWRlZiBCb3hcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwL2NoYW5uZWxcbiAqIEBwcm9wZXJ0eSB7Kn0gdmFsdWUgVGhlIHZhbHVlIGJlaW5nIHdyYXBwZWQgYnkgdGhlIGJveC5cbiAqIEBwcml2YXRlXG4gKi9cblxuLyoqXG4gKiBBIHdyYXBwZXIgb2JqZWN0IGZvciBhIHZhbHVlLiBUaGlzIGlzIHVzZWQgYWxtb3N0IGVudGlyZWx5IGFzIGEgbWFya2VyXG4gKiBpbnRlcmZhY2UsIHRob3VnaCB0aGUgZmFjdCB0aGF0IGl0IGJlY29tZXMgYSBwYXJhbWV0ZXIgdGhhdCdzIHBhc3NlZCBieVxuICogcmVmZXJlbmNlIHJhdGhlciB0aGFuIHZhbHVlIGlzIGFsc28gaW1wb3J0YW50IGluIGEgY291cGxlIHBsYWNlcy4gSWYgYVxuICogY2hhbm5lbCBvcGVyYXRpb24gKHB1dCBvciB0YWtlKSByZXR1cm5zIGEgQm94LCBpdCBtZWFucyB0aGF0IGFuIGFjdHVhbCB2YWx1ZVxuICogd2FzIHJldHVybmVkLiBBIG5vbi1Cb3ggKHdoaWNoIGFsd2F5cyBoYXBwZW5zIHRvIGJlIGBudWxsYCkgbWVhbnMgdGhhdCB0aGVcbiAqIG9wZXJhdGlvbiBtdXN0IGJsb2NrLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwL2NoYW5uZWxcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGJveC5cbiAqIEByZXR1cm4ge21vZHVsZTpjc3AvY2hhbm5lbC5Cb3h9IFRoZSBib3hlZCB2YWx1ZS5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGJveCh2YWx1ZSkge1xuICByZXR1cm4gT2JqZWN0LmNyZWF0ZShudWxsLCB7XG4gICAgdmFsdWU6IHtcbiAgICAgIHZhbHVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9LFxuICAgIFtCT1hdOiB7XG4gICAgICB2YWx1ZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxuICogQSB3cmFwcGVyIGFyb3VuZCBhIHZhbHVlLiBUaGlzIGlzIG11Y2ggbGlrZVxuICoge0BsaW5rIG1vZHVsZTpjc3AvY2hhbm5lbC5Cb3h8Qm94fSBleGNlcHQgdGhhdCBpdCBhbHNvIGNhcnJpZXMgYSBoYW5kbGVyIHRvXG4gKiBiZSB1c2VkIHdoZW4gYSBzZW50IHZhbHVlIGlzIHJlY2VpdmVkLiBJdCBpcyBzcGVjaWZpY2FsbHkgZm9yIHF1ZXVlaW5nIHNlbmRzLlxuICpcbiAqIEB0eXBlZGVmIFNlbmRCb3hcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwL2NoYW5uZWxcbiAqIEBwcm9wZXJ0eSB7Kn0gdmFsdWUgVGhlIHZhbHVlIGJlaW5nIHdyYXBwZWQgYnkgdGhpcyBib3guXG4gKiBAcHJvcGVydHkge21vZHVsZTpjc3AvY2hhbm5lbC5IYW5kbGVyfSBoYW5kbGVyIFRoZSBoYW5kbGVyIHVzZWQgdG8gcHJvY2VzcyBhXG4gKiAgICAgc2VuZCByZXF1ZXN0IGZvciB0aGUgdmFsdWUuXG4gKiBAcHJpdmF0ZVxuICovXG5cbi8qKlxuICogQSBib3ggdXNlZCB0byB3cmFwIGEgdmFsdWUgYmVpbmcgc2VudCBvbnRvIGEgY2hhbm5lbC4gVGhpcyBpcyBkaWZmZXJlbnQgZnJvbVxuICogYSByZWd1bGFyIGJveCBpbiB0aGF0IHRoZSBzZW5kIGhhbmRsZXIgaXMgYWxzbyBpbmNsdWRlZC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcC9jaGFubmVsXG4gKiBAcGFyYW0gIHtPYmplY3R9IGhhbmRsZXIgVGhlIGhhbmRsZXIgdXNlZCB0byBwcm9jZXNzIGEgc2VuZCByZXF1ZXN0IGZvciB0aGVcbiAqICAgICB2YWx1ZS5cbiAqIEBwYXJhbSAgeyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBib3guXG4gKiBAcmV0dXJuIHttb2R1bGU6Y3NwL2NoYW5uZWwuU2VuZEJveH0gVGhlIGJveGVkIHZhbHVlLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gc2VuZEJveCh2YWx1ZSwgaGFuZGxlcikge1xuICByZXR1cm4gT2JqZWN0LmNyZWF0ZShudWxsLCB7XG4gICAgdmFsdWU6IHtcbiAgICAgIHZhbHVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9LFxuICAgIGhhbmRsZXI6IHtcbiAgICAgIHZhbHVlOiBoYW5kbGVyXG4gICAgfSxcbiAgICBbQk9YXToge1xuICAgICAgdmFsdWU6IHRydWVcbiAgICB9XG4gIH0pO1xufVxuXG4vKipcbiAqIEEgY2hhbm5lbCwgdXNlZCBieSBwcm9jZXNzZXMgdG8gY29tbXVuaWNhdGUgd2l0aCBvbmUgYW5vdGhlci5cbiAqXG4gKiBGb3IgZWFjaCBvcGVyYXRpb24sIHRoZSBjaGFubmVsIGZpcnN0IHRlc3RzIHRvIHNlZSBpZiB0aGVyZSdzIGEgY29ycmVzcG9uZGluZ1xuICogb3BlcmF0aW9uIGFscmVhZHkgcXVldWVkIChpLmUuLCBpZiB3ZSdyZSBkb2luZyBhIGBzZW5kYCB0aGF0IHRoZXJlJ3MgYSBxdWV1ZWRcbiAqIGByZWN2YCBhbmQgdmljZSB2ZXJzYSkuIElmIHRoZXJlIGlzLCB0aGF0IGNvcnJlc3BvbmRpbmcgb3BlcmF0aW9uIGlzXG4gKiB1bmJsb2NrZWQgYW5kIGJvdGggb3BlcmF0aW9ucyBjb21wbGV0ZS4gSWYgbm90LCB0aGUgb3BlcmF0aW9uIGlzIHF1ZXVlZCB0b1xuICogd2FpdCBmb3IgYSBjb3JyZXNwb25kaW5nIG9wZXJhdGlvbi4gVGhlIHByb2Nlc3Mgb3IgdGhhdCBjcmVhdGVkIHRoZSBvcGVyYXRpb25cbiAqIHRoZW4gYmxvY2tzLlxuICpcbiAqIFRoZSBjaGFubmVsIGNhbiBiZSBiYWNrZWQgYnkgYSBidWZmZXIsIHRob3VnaCBpdCBpcyBub3QgYnkgZGVmYXVsdC4gSWYgYVxuICogYnVmZmVyIGlzIGluIHBsYWNlLCBhbmQgdGhhdCBidWZmZXIgaXMgbm90IGZ1bGwsIHRoZW4gdGhlIHByb2Nlc3MgdGhhdFxuICogY3JlYXRlZCBhbiBvcGVyYXRpb24gdGhhdCBoYXMgdG8gYmUgcXVldWVkIGlzICpub3QqIGJsb2NrZWQuXG4gKlxuICogVGhpcyBjaGFubmVsIG9iamVjdCBzdXBwb3J0cyB0cmFuc2Zvcm1hdGlvbnMsIGFzc3VtaW5nIHRoYXQgdGhleSBmb2xsb3cgdGhlXG4gKiBwcm90b2NvbCBjcmVhdGVkIGJ5IGEgZmV3IHRyYW5zZHVjZXIgbGlicmFyeSBhdXRob3JzIHRvIGFsbG93IHRoZW0gdG9cbiAqIGludGVyb3BlcmF0ZS4gVGhlIHN1cHBvcnQgbXVzdCBiZSBleHBsaWNpdGx5IGNyZWF0ZWQgYmVjYXVzZSB0aGUgbm9ybWFsXG4gKiBtZXRob2Qgb2YgbWFraW5nIGFuIG9iamVjdCBzdXBwb3J0IHRyYW5zZm9ybWF0aW9ucyB3b24ndCB3b3JrIGhlcmUuIFRoaXNcbiAqIG1ldGhvZCBpcyB0byBjcmVhdGUgYSBuZXcgb2JqZWN0IGFuZCBhZGQgdGhlIHRyYW5zZm9ybWVkIHZhbHVlcyB0byBpdCAtIGJ1dFxuICogZm9yIGEgY2hhbm5lbCwgd2UgbmVlZCB0byByZXBsYWNlIHRoZSB2YWx1ZXMgb24gdGhlIGNoYW5uZWwgd2l0aCB0aGVpclxuICogdHJhbnNmb3JtZWQgdmFsdWVzLCBpbiB0aGUgc2FtZSBvcmRlciBldmVuIGluIGEgbXVsdGktcHJvY2VzcyBlbnZpcm9ubWVudC5cbiAqIFRodXMgdHJhbnNmb3JtYXRpb25zIGhhcHBlbiBpbiBwbGFjZS5cbiAqXG4gKiBUcmFuc2Zvcm1hdGlvbnMgYXJlIGFwcGxpZWQgYmVmb3JlIHRoZSB2YWx1ZSBpcyBxdWV1ZWQsIHNvIGV2ZW4gaWYgdGhlcmUgaXMgYVxuICogY29ycmVzcG9uZGluZyBvcGVyYXRpb24gcmVhZHkgdG8gZ28sIHRoZSB0cmFuc2Zvcm1hdGlvbiBzdGlsbCBoYXBwZW5zLiBBbHNvLFxuICogdHJhbnNmb3JtYXRpb25zIHJlcXVpcmUgdGhhdCB0aGUgY2hhbm5lbCBiZSBidWZmZXJlZCAodGhpcyBidWZmZXIgaXMgd2hhdCBpc1xuICogc2VudCB0byB0aGUgdHJhbnNmb3JtZXIncyByZWR1Y3Rpb24gc3RlcCBmdW5jdGlvbik7IHRyeWluZyB0byBjcmVhdGUgYVxuICogY2hhbm5lbCB3aXRoIGEgdHJhbnNmb3JtZXIgYnV0IHdpdGhvdXQgYSBidWZmZXIgd2lsbCByZXN1bHQgaW4gYW4gZXJyb3IgYmVpbmdcbiAqIHRocm93bi5cbiAqXG4gKiBUaGlzIGlzIHRoZSBvYmplY3QgdGhhdCBpcyByZXR1cm5lZCBmcm9tIGEgY2FsbCB0b1xuICogYHtAbGluayBtb2R1bGU6Y3NwLmNoYW58Y2hhbn1gLiBIb3dldmVyLCB0aGlzIG9iamVjdCBpcyBpbnRlbmRlZCB0byBiZSB1c2VkXG4gKiBhcyBhIHZhbHVlIHRvIHBhc3MgdG8gY2hhbm5lbCBvcGVyYXRpb24gZnVuY3Rpb25zOyBpdCBkb2Vzbid0IGhhdmUgYW55XG4gKiBwcm9wZXJ0aWVzIG9mIGludGVyZXN0IHRvIGFuIGVuZCB1c2VyLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAdHlwZWRlZiBDaGFubmVsXG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIGEgY2hhbm5lbC4gVGhpcyBpcyBhIGxvdy1sZXZlbCBmdW5jdGlvbjtcbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC5jaGFufGNoYW59YCBwZXJmb3JtcyBzb21lIG5lY2Vzc2FyeSBtYW5pcHVsYXRpb25zIG9uXG4gKiBhcmd1bWVudHMgYmVmb3JlIHVzaW5nIHRoaXMgZnVuY3Rpb24gdG8gcGVyZm9ybSB0aGUgYWN0dWFsIGNyZWF0aW9uLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwL2NoYW5uZWxcbiAqIEBwYXJhbSB7bnVsbCB8IG1vZHVsZTpjc3AuQnVmZmVyfSBidWZmZXIgQW4gb3B0aW9uYWwgYnVmZmVyIHRoYXQsIGlmIHByZXNlbnQsXG4gKiAgICAgaXMgdXNlZCB0byBjcmVhdGUgYSBidWZmZXJlZCBjaGFubmVsLiBJZiB0aGlzIGlzIGBudWxsYCwgYW4gdW5idWZmZXJlZFxuICogICAgIGNoYW5uZWwgaXMgY3JlYXRlZC5cbiAqIEBwYXJhbSB7bW9kdWxlOmNvcmUuVHJhbnNkdWNlckZ1bmN0aW9ufSB4Zm9ybSBUaGUgdHJhbnNkdWNlciB1c2VkIHRvXG4gKiAgICAgdHJhbnNmb3JtIHZhbHVlcyBzZW50IHRvIHRoZSBjaGFubmVsLiBJZiBubyB0cmFuc2Zvcm1hdGlvbnMgYXJlXG4gKiAgICAgbmVjZXNzYXJ5LCBhIHBhc3N0aHJvdWdoIHRyYW5zZHVjZXIgc2hvdWxkIGJlIHByb3ZpZGVkLlxuICogQHBhcmFtIHtib29sZWFufSBpc1RpbWVkIEluZGljYXRlcyB3aGV0aGVyIHRoZSBjaGFubmVsIGlzIGEgdGltZWQgY2hhbm5lbC5cbiAqICAgICBUaGUgdGltaW5pbmcgbWVjaGFuaXNtIGlzIGhhbmRsZWQgb3V0c2lkZSB0aGUgY2hhbm5lbCwgYnV0IHRoaXMgcHJvcGVydHlcbiAqICAgICBpcyBwcm92aWRlZCB0byBiZSBhYmxlIHRvIHF1ZXJ5IHdoZXRoZXIgdGhhdCdzIHRoZSBjYXNlLlxuICogQHBhcmFtIHtudW1iZXJ9IG1heERpcnR5PTY0IFRoZSBtYXhpbXVtIG51bWJlciBvZiBkaXJ0eSBvcGVyYXRpb25zIHRvIGFsbG93XG4gKiAgICAgYmVmb3JlIHRoZXkncmUgcHVyZ2VkLlxuICogQHBhcmFtIHtudW1iZXJ9IG1heFF1ZXVlZD0xMDI0IFRoZSBtYXhpbXVtIG51bWJlciBvZiBvcGVyYXRpb25zIHRoYXQgY2FuIGJlXG4gKiAgICAgcXVldWVkIGJlZm9yZSBuZXcgb25lcyBhcmUgcmVqZWN0ZWQuXG4gKiBAcmV0dXJuIHttb2R1bGU6Y3NwLkNoYW5uZWx9IEEgbmV3IGNoYW5uZWwuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjaGFubmVsKFxuICBidWZmZXIsXG4gIHhmb3JtLFxuICBpc1RpbWVkID0gZmFsc2UsXG4gIG1heERpcnR5ID0gTUFYX0RJUlRZLFxuICBtYXhRdWV1ZWQgPSBNQVhfUVVFVUVEXG4pIHtcbiAgcmV0dXJuIE9iamVjdC5jcmVhdGUobnVsbCwge1xuICAgIGJ1ZmZlcjoge1xuICAgICAgdmFsdWU6IGJ1ZmZlclxuICAgIH0sXG4gICAgeGZvcm06IHtcbiAgICAgIHZhbHVlOiB4Zm9ybVxuICAgIH0sXG4gICAgbWF4RGlydHk6IHtcbiAgICAgIHZhbHVlOiBtYXhEaXJ0eVxuICAgIH0sXG4gICAgbWF4UXVldWVkOiB7XG4gICAgICB2YWx1ZTogbWF4UXVldWVkXG4gICAgfSxcbiAgICByZWN2czoge1xuICAgICAgdmFsdWU6IHF1ZXVlKClcbiAgICB9LFxuICAgIHNlbmRzOiB7XG4gICAgICB2YWx1ZTogcXVldWUoKVxuICAgIH0sXG4gICAgZGlydHlSZWN2czoge1xuICAgICAgdmFsdWU6IDAsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0sXG4gICAgZGlydHlTZW5kczoge1xuICAgICAgdmFsdWU6IDAsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0sXG4gICAgY2xvc2VkOiB7XG4gICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0sXG4gICAgaXNCdWZmZXJlZDoge1xuICAgICAgdmFsdWU6ICEhYnVmZmVyXG4gICAgfSxcbiAgICBpc1RpbWVkOiB7XG4gICAgICB2YWx1ZTogaXNUaW1lZFxuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxuICogU2VuZHMgYSB2YWx1ZSB0byBhIGNoYW5uZWwuIFRoZSBzcGVjaWZpZWQgaGFuZGxlciBpcyB1c2VkIHRvIGNvbnRyb2wgd2hldGhlclxuICogdGhlIHNlbmQgaXMgYWN0aXZlIGFuZCB3aGF0IHRvIGRvIGFmdGVyIHRoZSBzZW5kIGNvbXBsZXRlcy4gQSBzZW5kIGNhbiBiZWNvbWVcbiAqIGluYWN0aXZlIGlmIGl0IHdhcyBwYXJ0IG9mIGFuIGBzZWxlY3RgIGNhbGwgYW5kIHNvbWUgb3RoZXIgb3BlcmF0aW9uXG4gKiBzcGVjaWZpZWQgaW4gdGhhdCBjYWxsIGhhcyBhbHJlYWR5IGNvbXBsZXRlZC5cbiAqXG4gKiBUaGlzIHZhbHVlIGlzIGdpdmVuIHRvIGEgcmVjZWl2ZSBoYW5kbGVyIGltbWVkaWF0ZWx5IGlmIHRoZXJlJ3Mgb25lIHdhaXRpbmcuXG4gKiBPdGhlcndpc2UgdGhlIHZhbHVlIGFuZCBoYW5kbGVyIGFyZSBxdWV1ZWQgdG9nZXRoZXIgdG8gd2FpdCBmb3IgYSByZWNlaXZlLlxuICpcbiAqIFRoaXMgaXMgYSBsb3ctbGV2ZWwgb3BlcmF0aW9uIHRoYXQncyBwcm92aWRlZCBhcyBhIHBhcnQgb2YgdGhlIGNoYW5uZWxcbiAqIGltcGxlbWVudGF0aW9uIHNvIHRoYXQgb3RoZXIgb3BlcmF0aW9ucyBmdW5jdGlvbnMgY2FuIHByb3Blcmx5IGFwcGx5XG4gKiBoYW5kbGVycy4gSXQgaXMgbm90IG1lYW50IGZvciBnZW5lcmFsIHVzZS4gVXNlIHRob3NlIG90aGVyIG9wZXJhdGlvbnNcbiAqIGZ1bmN0aW9ucyBpbnN0ZWFkLlxuICpcbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcC9jaGFubmVsXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuQ2hhbm5lbH0gY2hhbm5lbCBUaGUgY2hhbm5lbCB0aGF0IHRoZSB2YWx1ZSBpcyBiZWluZyBzZW50XG4gKiAgICAgdG8uXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBiZSBwdXQgb250byB0aGUgY2hhbm5lbC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaGFuZGxlci5hY3RpdmUgRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBzZW5kIGlzIHN0aWxsIGFjdGl2ZVxuICogICAgIGFuZCBzaG91bGQgc3RpbGwgYmUgc2VydmljZWQuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBoYW5kbGVyLmNvbW1pdCBEZWFjdGl2YXRlcyB0aGUgc2VuZCAoc28gaXQgY2FuJ3QgYmVcbiAqICAgICBzZXJ2aWNlZCBhIHNlY29uZCB0aW1lKSBhbmQgcmV0dXJucyB0aGUgY2FsbGJhY2sgdG8gYmUgZmlyZWQgd2hlbiB0aGVcbiAqICAgICBzZW5kIGNvbXBsZXRlcy5cbiAqIEByZXR1cm4ge21vZHVsZTpjc3AvY2hhbm5lbC5Cb3h8bnVsbH0gT25lIG9mIHRocmVlIHZhbHVlcy4gQSBib3hlZCBgdHJ1ZWAgaXNcbiAqICAgICByZXR1cm5lZCBpZiB0aGUgc2VuZCB3YXMgaW1tZWRpYXRlbHkgY29uc3VtZWQgYnkgYSBwZW5kaW5nIHJlY2VpdmUuIEFcbiAqICAgICBib3hlZCBgZmFsc2VgIGlzIHJldHVybmVkIGlmIHRoZSBzZW5kIHdhcyBwZXJmb3JtZWQgb24gYSBjaGFubmVsIHRoYXQgd2FzXG4gKiAgICAgYWxyZWFkeSBjbG9zZWQgYnkgdGhlIHRpbWUgdGhlIHNlbmQgdG9vayBwbGFjZS4gYG51bGxgIGlzIHJldHVybmVkIGlmIHRoZVxuICogICAgIHNlbmQgd2FzIHF1ZXVlZCBwZW5kaW5nIGEgY29ycmVzcG9uZGluZyByZWNlaXZlLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaGFuZGxlU2VuZChjaGFubmVsLCB2YWx1ZSwgaGFuZGxlcikge1xuICBpZiAodmFsdWUgPT09IENMT1NFRCkge1xuICAgIHRocm93IEVycm9yKFwiQ2Fubm90IHNlbmQgQ0xPU0VEIHRvIGEgY2hhbm5lbFwiKTtcbiAgfVxuXG4gIGlmIChjaGFubmVsLmNsb3NlZCkge1xuICAgIGhhbmRsZXIuY29tbWl0KCk7XG4gICAgcmV0dXJuIGJveChmYWxzZSk7XG4gIH1cblxuICBsZXQgcmVjZWl2ZXIsIGNhbGxiYWNrO1xuXG4gIC8vIFB1c2ggdGhlIGluY29taW5nIHZhbHVlIHRocm91Z2ggdGhlIGJ1ZmZlciwgZXZlbiBpZiB0aGVyZSdzIGFscmVhZHkgYVxuICAvLyByZWNlaXZlciB3YWl0aW5nIGZvciB0aGUgdmFsdWUuIFRoaXMgaXMgdG8gbWFrZSBzdXJlIHRoYXQgdGhlIHRyYW5zZHVjZXJcbiAgLy8gc3RlcCBmdW5jdGlvbiBoYXMgYSBjaGFuY2UgdG8gYWN0IG9uIHRoZSB2YWx1ZSBmaXJzdCwgd2hpY2ggY291bGQgY2hhbmdlXG4gIC8vIHRoZSB2YWx1ZSBvciBtYWtlIGl0IGFsdG9nZXRoZXIgdW5hdmFpbGFibGUuXG4gIC8vXG4gIC8vIElmIHRoZSBjaGFubmVsIGlzIHVuYnVmZmVyZWQgdGhpcyBwcm9jZXNzIGlzIHNraXBwZWQgKHRoZXJlIGNhbid0IGJlIGFcbiAgLy8gdHJhbnNkdWNlciBvbiBhbiB1bmJ1ZmZlcmVkIGNoYW5uZWwgYW55d2F5KS4gSWYgdGhlIGJ1ZmZlciBpcyBmdWxsLCB0aGVcbiAgLy8gdHJhbnNkdWNlcidzIHdvcmsgaXMgZGVmZXJyZWQgdW50aWwgbGF0ZXIgd2hlbiB0aGUgYnVmZmVyIGlzIG5vdCBmdWxsLlxuICBpZiAoY2hhbm5lbC5idWZmZXIgJiYgIWlzRnVsbChjaGFubmVsLmJ1ZmZlcikpIHtcbiAgICBoYW5kbGVyLmNvbW1pdCgpO1xuICAgIGNvbnN0IGRvbmUgPSBpc1JlZHVjZWQoY2hhbm5lbC54Zm9ybVtwLnN0ZXBdKGNoYW5uZWwuYnVmZmVyLCB2YWx1ZSkpO1xuXG4gICAgZm9yICg7Oykge1xuICAgICAgaWYgKGNvdW50KGNoYW5uZWwuYnVmZmVyKSA9PT0gMCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHJlY2VpdmVyID0gZGVxdWV1ZShjaGFubmVsLnJlY3ZzKTtcbiAgICAgIGlmIChyZWNlaXZlciA9PT0gRU1QVFkpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBpZiAocmVjZWl2ZXIuYWN0aXZlKSB7XG4gICAgICAgIGNhbGxiYWNrID0gcmVjZWl2ZXIuY29tbWl0KCk7XG4gICAgICAgIGNvbnN0IHZhbCA9IHJlbW92ZShjaGFubmVsLmJ1ZmZlcik7XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgIGRpc3BhdGNoKCgpID0+IGNhbGxiYWNrKHZhbCkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGRvbmUpIHtcbiAgICAgIGNsb3NlKGNoYW5uZWwpO1xuICAgIH1cbiAgICByZXR1cm4gYm94KHRydWUpO1xuICB9XG5cbiAgLy8gVGhpcyBsb29wIGhhcHBlbnMgaWYgdGhlIGNoYW5uZWwgaXMgdW5idWZmZXJlZCBhbmQgdGhlcmUgaXMgYXQgbGVhc3Qgb25lXG4gIC8vIHBlbmRpbmcgcmVjZWl2ZS4gKEJ1ZmZlcmVkIGNoYW5uZWxzIGJyZWFrIG91dCBvZiB0aGlzIGxvb3AgaW1tZWRpYXRlbHksXG4gIC8vIGJlY2F1c2UgaW4gb3JkZXIgZm9yIGEgYnVmZmVyZWQgY2hhbm5lbCB0byByZWFjaCB0aGlzIHBvaW50LCBpdHMgYnVmZmVyXG4gIC8vIG11c3QgaGF2ZSBiZWVuIGZ1bGwuIElmIHRoZSBidWZmZXIgaXMgZnVsbCwgdGhhdCBtZWFucyB0aGVyZSBhcmUgbm8gcGVuZGluZ1xuICAvLyByZWNlaXZlcyBhbmQgdGhlIGZpcnN0IG9uZSByZWFkIHdpbGwgYmUgRU1QVFkuKSBJdCBwcm9jZXNzZXMgdGhlIG5leHRcbiAgLy8gcGVuZGluZyByZWNlaXZlIGltbWVkaWF0ZWx5LlxuICBmb3IgKDs7KSB7XG4gICAgcmVjZWl2ZXIgPSBkZXF1ZXVlKGNoYW5uZWwucmVjdnMpO1xuICAgIGlmIChyZWNlaXZlciA9PT0gRU1QVFkpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBpZiAocmVjZWl2ZXIuYWN0aXZlKSB7XG4gICAgICBoYW5kbGVyLmNvbW1pdCgpO1xuICAgICAgY2FsbGJhY2sgPSByZWNlaXZlci5jb21taXQoKTtcbiAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICBkaXNwYXRjaCgoKSA9PiBjYWxsYmFjayh2YWx1ZSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGJveCh0cnVlKTtcbiAgICB9XG4gIH1cblxuICAvLyBJZiB0aGVyZSBhcmUgbm8gcGVuZGluZyByZWNlaXZlcyBvbiBhbiB1bmJ1ZmZlcmVkIGNoYW5uZWwsIG9yIG9uIGEgYnVmZmVyZWRcbiAgLy8gY2hhbm5lbCB3aXRoIGEgZnVsbCBidWZmZXIsIHdlIHF1ZXVlIHRoZSBzZW5kIHRvIHRsZXQgaXQgd2FpdCBmb3IgYSByZWNlaXZlXG4gIC8vIHRvIGJlY29tZSBhdmFpbGFibGUuIFNlbmRzIHdob3NlIGhhbmRsZXJzIGhhdmUgZ29uZSBpbmFjdGl2ZSAod2hpY2ggaGFwcGVuc1xuICAvLyBpZiB0aGV5IHdlcmUgcHJvY2Vzc2VkIGFzIHBhcnQgb2YgYSBgc2VsZWN0YCBjYWxsKSBhcmUgcGVyaW9kaWNhbGx5IHB1cmdlZC5cbiAgaWYgKGNoYW5uZWwuZGlydHlTZW5kcyA+IGNoYW5uZWwubWF4RGlydHkpIHtcbiAgICBmaWx0ZXIoY2hhbm5lbC5zZW5kcywgc2VuZGVyID0+IHNlbmRlci5oYW5kbGVyLmFjdGl2ZSk7XG4gICAgY2hhbm5lbC5kaXJ0eVNlbmRzID0gMDtcbiAgfSBlbHNlIHtcbiAgICBjaGFubmVsLmRpcnR5U2VuZHMrKztcbiAgfVxuXG4gIGlmIChxQ291bnQoY2hhbm5lbC5zZW5kcykgPj0gY2hhbm5lbC5tYXhRdWV1ZWQpIHtcbiAgICB0aHJvdyBFcnJvcihcbiAgICAgIGBObyBtb3JlIHRoYW4gJHtjaGFubmVsLm1heFF1ZXVlZH0gcGVuZGluZyBzZW5kcyBhcmUgYWxsb3dlZCBvbiBhIHNpbmdsZSBjaGFubmVsYFxuICAgICk7XG4gIH1cbiAgZW5xdWV1ZShjaGFubmVsLnNlbmRzLCBzZW5kQm94KHZhbHVlLCBoYW5kbGVyKSk7XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8qKlxuICogUmVjZWl2ZXMgYSB2YWx1ZSBmcm9tIGEgY2hhbm5lbC4gVGhlIHNwZWNpZmllZCBoYW5kbGVyIGlzIHVzZWQgdG8gY29udHJvbFxuICogd2hldGhlciB0aGUgcmVjZWl2ZSBpcyBhY3RpdmUgYW5kIHdoYXQgdG8gZG8gYWZ0ZXIgdGhlIHJlY2VpdmUgY29tcGxldGVzLiBBXG4gKiByZWNlaXZlIGNhbiBiZWNvbWUgaW5hY3RpdmUgaWYgaXQgd2FzIHBhcnQgb2YgYW4gYHNlbGVjdGAgY2FsbCBhbmQgc29tZSBvdGhlclxuICogb3BlcmF0aW9uIHNwZWNpZmllZCBpbiB0aGF0IGNhbGwgaGFzIGFscmVhZHkgY29tcGxldGVkLlxuICpcbiAqIFRoaXMgdmFsdWUgaXMgZ2l2ZW4gdG8gYSBzZW5kIGhhbmRsZXIgaW1tZWRpYXRlbHkgaWYgdGhlcmUncyBvbmUgd2FpdGluZy5cbiAqIE90aGVyd2lzZSB0aGUgdmFsdWUgYW5kIGhhbmRsZXIgYXJlIHF1ZXVlZCB0b2dldGhlciB0byB3YWl0IGZvciBhIHNlbmQuXG4gKlxuICogVGhpcyBpcyBhIGxvdy1sZXZlbCBvcGVyYXRpb24gdGhhdCdzIHByb3ZpZGVkIGFzIGEgcGFydCBvZiB0aGUgY2hhbm5lbFxuICogaW1wbGVtZW50YXRpb24gc28gdGhhdCBvdGhlciBvcGVyYXRpb25zIGZ1bmN0aW9ucyBjYW4gcHJvcGVybHkgYXBwbHlcbiAqIGhhbmRsZXJzLiBJdCBpcyBub3QgbWVhbnQgZm9yIGdlbmVyYWwgdXNlLiBVc2UgdGhvc2Ugb3RoZXIgb3BlcmF0aW9uc1xuICogZnVuY3Rpb25zIGluc3RlYWQuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3AvY2hhbm5lbFxuICogQHBhcmFtIHttb2R1bGU6Y3NwLkNoYW5uZWx9IGNoYW5uZWwgVGhlIGNoYW5uZWwgdGhhdCB0aGUgdmFsdWUgaXMgYmVpbmdcbiAqICAgICByZWNlaXZlZCBmcm9tLlxuICogQHBhcmFtIHtib29sZWFufSBoYW5kbGVyLmFjdGl2ZSBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHJlY2VpdmUgaXMgc3RpbGxcbiAqICAgICBhY3RpdmUgYW5kIHNob3VsZCBzdGlsbCBiZSBzZXJ2aWNlZC5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGhhbmRsZXIuY29tbWl0IERlYWN0aXZhdGVzIHRoZSByZWNlaXZlIChzbyBpdCBjYW4ndCBiZVxuICogICAgIHNlcnZpY2VkIGEgc2Vjb25kIHRpbWUpIGFuZCByZXR1cm5zIHRoZSBjYWxsYmFjayB0byBiZSBmaXJlZCB3aGVuIHRoZVxuICogICAgIHJlY2VpdmUgY29tcGxldGVzLlxuICogQHJldHVybiB7bW9kdWxlOmNzcC9jaGFubmVsLkJveHxudWxsfSBFaXRoZXIgdGhlIGJveGVkIHZhbHVlIHJlY2VpdmVkIGZyb21cbiAqICAgICB0aGUgY2hhbm5lbCwgb3IgYG51bGxgIGlmIHRoZSByZWNlaXZlIG11c3QgYmUgcXVldWVkIHRvIGF3YWl0IGFcbiAqICAgICBjb3JyZXNwb25kaW5nIHNlbmQuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBoYW5kbGVSZWN2KGNoYW5uZWwsIGhhbmRsZXIpIHtcbiAgbGV0IHNlbmRlciwgc2VuZEhhbmRsZXIsIGNhbGxiYWNrO1xuXG4gIC8vIFJ1bnMgaWYgdGhlIGNoYW5uZWwgaXMgYnVmZmVyZWQgYW5kIHRoZSBidWZmZXJlZCBpcyBub3QgZW1wdHkgKGFuIGVtcHR5XG4gIC8vIGJ1ZmZlciBtZWFucyB0aGVyZSBhcmUgbm8gcGVuZGluZyBzZW5kcykuIFdlIGltbWVkaWF0ZWx5IHByb2Nlc3MgYW55IHNlbmRzXG4gIC8vIHRoYXQgd2VyZSBxdWV1ZWQgd2hlbiB0aGVyZSB3ZXJlIG5vIHBlbmRpbmcgcmVjZWl2ZXMsIHVwIHVudGlsIHRoZSBidWZmZXJcbiAgLy8gaXMgZmlsbGVkIHdpdGggc2VudCB2YWx1ZXMuXG4gIGlmIChjaGFubmVsLmJ1ZmZlciAmJiBjb3VudChjaGFubmVsLmJ1ZmZlcikgPiAwKSB7XG4gICAgaGFuZGxlci5jb21taXQoKTtcbiAgICBjb25zdCB2YWx1ZSA9IHJlbW92ZShjaGFubmVsLmJ1ZmZlcik7XG5cbiAgICBmb3IgKDs7KSB7XG4gICAgICBpZiAoaXNGdWxsKGNoYW5uZWwuYnVmZmVyKSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHNlbmRlciA9IGRlcXVldWUoY2hhbm5lbC5zZW5kcyk7XG4gICAgICBpZiAoc2VuZGVyID09PSBFTVBUWSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgc2VuZEhhbmRsZXIgPSBzZW5kZXIuaGFuZGxlcjtcbiAgICAgIGlmIChzZW5kSGFuZGxlci5hY3RpdmUpIHtcbiAgICAgICAgY2FsbGJhY2sgPSBzZW5kSGFuZGxlci5jb21taXQoKTtcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgZGlzcGF0Y2goKCkgPT4gY2FsbGJhY2sodHJ1ZSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc1JlZHVjZWQoY2hhbm5lbC54Zm9ybVtwLnN0ZXBdKGNoYW5uZWwuYnVmZmVyLCBzZW5kZXIudmFsdWUpKSkge1xuICAgICAgICAgIGNsb3NlKGNoYW5uZWwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBib3godmFsdWUpO1xuICB9XG5cbiAgLy8gVGhpcyBsb29wIHJ1bnMgb24gYW4gdW5idWZmZXJlZCBjaGFubmVsIGlmIHRoZXJlIGFyZSBhbnkgcGVuZGluZyBzZW5kcy5cbiAgLy8gKEJ1ZmZlcmVkIGNoYW5uZWxzIGJyZWFrIG91dCBvZiB0aGlzIGxvb3AgaW1tZWRpYXRlbHkgYmVjYXVzZSBpbiBvcmRlciB0b1xuICAvLyBoYXZlIGNvbWUgdGhpcyBmYXIgd2l0aG91dCByZXR1cm5pbmcsIHRoZSBjaGFubmVsJ3MgYnVmZmVyIG11c3QgaGF2ZSBiZWVuXG4gIC8vIGVtcHR5LiBBbiBlbXB0eSBidWZmZXIgbWVhbnMgdGhlcmUgYXJlIG5vIHBlbmRpbmcgc2VuZHMsIHNvIHRoZSBmaXJzdFxuICAvLyBwZW5kaW5nIHNlbmQgcmVhZCBmcm9tIGl0IHdpbGwgYmUgRU1QVFkuKSBJdCBwcm9jZXNzZXMgdGhlIG5leHQgcGVuZGluZ1xuICAvLyBzZW5kIGltbWVkaWF0ZWx5LlxuICBmb3IgKDs7KSB7XG4gICAgc2VuZGVyID0gZGVxdWV1ZShjaGFubmVsLnNlbmRzKTtcbiAgICBpZiAoc2VuZGVyID09PSBFTVBUWSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHNlbmRIYW5kbGVyID0gc2VuZGVyLmhhbmRsZXI7XG4gICAgaWYgKHNlbmRIYW5kbGVyLmFjdGl2ZSkge1xuICAgICAgY2FsbGJhY2sgPSBzZW5kSGFuZGxlci5jb21taXQoKTtcbiAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICBkaXNwYXRjaCgoKSA9PiBjYWxsYmFjayh0cnVlKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gYm94KHNlbmRlci52YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgLy8gSWYgd2UndmUgZXhoYXVzdGVkIGFsbCBvZiBvdXIgcGVuZGluZyBzZW5kcyBhbmQgdGhlIGNoYW5uZWwgaXMgbWFya2VkXG4gIC8vIGNsb3NlZCwgd2UgY2FuIGZpbmFsbHkgcmV1dHJuIHRoZSBmYWN0IHRoYXQgdGhlIGNoYW5uZWwgaXMgY2xvc2VkLiBUaGlzXG4gIC8vIGVuc3VyZXMgdGhhdCBhbnkgc2VuZHMgdGhhdCB3ZXJlIGFscmVhZHkgcGVuZGluZyBvbiB0aGUgY2hhbm5lbCBhcmVcbiAgLy8gcHJvY2Vzc2VkIGJlZm9yZSBjbG9zdXJlLCBldmVuIGlmIHRoZSBjaGFubmVsIHdhcyBjbG9zZWQgYmVmb3JlIHRoYXQgY291bGRcbiAgLy8gaGFwcGVuLlxuICBpZiAoY2hhbm5lbC5jbG9zZWQpIHtcbiAgICBoYW5kbGVyLmNvbW1pdCgpO1xuICAgIHJldHVybiBib3goQ0xPU0VEKTtcbiAgfVxuXG4gIC8vIElmIGFuIHVuYnVmZmVyZWQgY2hhbm5lbCBvciBhIGJ1ZmZlcmVkIGNoYW5uZWwgd2l0aCBhbiBlbXB0eSBidWZmZXIgaGFzIG5vXG4gIC8vIHBlbmRpbmcgc2VuZHMsIGFuZCBpZiB0aGUgY2hhbm5lbCBpcyBzdGlsbCBvcGVuLCB0aGUgcmVjZWl2ZSBpcyBxdWV1ZWQgdG9cbiAgLy8gYmUgcHJvY2Vzc2VkIHdoZW4gYSBzZW5kIGlzIGF2YWlsYWJsZS4gUmVjZWl2ZXMgd2hvc2UgaGFuZGxlcnMgaGF2ZSBnb25lXG4gIC8vIGluYWN0aXZlIGFzIHRoZSByZXN1bHQgb2YgYHNlbGVjdGAgcHJvY2Vzc2luZyBhcmUgcGVyaW9kaWNhbGx5IHB1cmdlZC5cbiAgaWYgKGNoYW5uZWwuZGlydHlSZWN2cyA+IGNoYW5uZWwubWF4RGlydHkpIHtcbiAgICBmaWx0ZXIoY2hhbm5lbC5yZWN2cywgcmVjZWl2ZXIgPT4gcmVjZWl2ZXIuYWN0aXZlKTtcbiAgICBjaGFubmVsLmRpcnR5UmVjdnMgPSAwO1xuICB9IGVsc2Uge1xuICAgIGNoYW5uZWwuZGlydHlSZWN2cysrO1xuICB9XG5cbiAgaWYgKHFDb3VudChjaGFubmVsLnJlY3ZzKSA+PSBjaGFubmVsLm1heFF1ZXVlZCkge1xuICAgIGNvbnN0IG1heCA9IGNoYW5uZWwubWF4UXVldWVkO1xuICAgIHRocm93IEVycm9yKFxuICAgICAgYE5vIG1vcmUgdGhhbiAke21heH0gcGVuZGluZyByZWNlaXZlcyBhcmUgYWxsb3dlZCBvbiBhIHNpbmdsZSBjaGFubmVsYFxuICAgICk7XG4gIH1cbiAgZW5xdWV1ZShjaGFubmVsLnJlY3ZzLCBoYW5kbGVyKTtcblxuICByZXR1cm4gbnVsbDtcbn1cblxuLyoqXG4gKiBDbG9zZXMgdGhlIGNoYW5uZWwgaWYgaXQgaXNuJ3QgYWxyZWFkeSBjbG9zZWQuIFRoaXMgaW1tZWRpYXRlbHkgcmV0dXJucyBhbnlcbiAqIGJ1ZmZlcmVkIHZhbHVlcyB0byBwZW5kaW5nIHJlY2VpdmVzLiBJZiB0aGVyZSBhcmUgbm8gYnVmZmVyZWQgdmFsdWVzIChvciBpZlxuICogdGhleSd2ZSBhbHJlYWR5IGJlZW4gdGFrZW4gYnkgb3RoZXIgcmVjZWl2ZXMpLCB0aGVuIGFsbCBvZiB0aGUgcmVzdCBvZiB0aGVcbiAqIHJlY2VpdmVzIGFyZSBjb21wbGV0ZWQgd2l0aCB0aGUgdmFsdWUgb2Yge0BsaW5rIG1vZHVsZTpjc3AuQ0xPU0VEfENMT1NFRH0uXG4gKiBBbnkgcGVuZGluZyBzZW5kcyBhcmUgY29tcGxldGVkIHdpdGggdGhlIHZhbHVlIG9mIGBmYWxzZWAuXG4gKlxuICogTm90ZSB0aGF0IHRoZSBidWZmZXIgaXMgbm90IGVtcHRpZWQgaWYgdGhlcmUgYXJlIHN0aWxsIHZhbHVlcyByZW1haW5pbmcgYWZ0ZXJcbiAqIGFsbCBvZiB0aGUgcGVuZGluZyByZWNlaXZlcyBoYXZlIGJlZW4gaGFuZGxlZC4gVGhlIGNoYW5uZWwgd2lsbCBzdGlsbCBwcm92aWRlXG4gKiB0aG9zZSB2YWx1ZXMgdG8gYW55IGZ1dHVyZSByZWNlaXZlcywgdGhvdWdoIG5vIG5ldyB2YWx1ZXMgbWF5IGJlIGFkZGVkIHRvIHRoZVxuICogY2hhbm5lbC4gT25jZSB0aGUgYnVmZmVyIGlzIGRlcGxldGVkLCBhbnkgZnV0dXJlIHJlY2VpdmVzIHdpbGwgcmV0dXJuXG4gKiB7QGxpbmsgbW9kdWxlOmNzcC5DTE9TRUR8Q0xPU0VEfS5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICogQHBhcmFtIHttb2R1bGU6Y3NwLkNoYW5uZWx9IGNoYW5uZWwgVGhlIGNoYW5uZWwgdG8gYmUgY2xvc2VkLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY2xvc2UoY2hhbm5lbCkge1xuICBpZiAoY2hhbm5lbC5jbG9zZWQpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY2hhbm5lbC5jbG9zZWQgPSB0cnVlO1xuXG4gIGxldCByZWNlaXZlciwgc2VuZGVyLCBjYWxsYmFjaztcblxuICAvLyBJZiB0aGVyZSBpcyBhIGJ1ZmZlciBhbmQgaXQgaGFzIGF0IGxlYXN0IG9uZSB2YWx1ZSBpbiBpdCwgc2VuZCB0aG9zZSB2YWx1ZXNcbiAgLy8gdG8gYW55IHBlbmRpbmcgcmVjZWl2ZXMgdGhhdCBtaWdodCBzdGlsbCBiZSBxdWV1ZWQuXG4gIGlmIChjaGFubmVsLmJ1ZmZlcikge1xuICAgIGNoYW5uZWwueGZvcm1bcC5yZXN1bHRdKGNoYW5uZWwuYnVmZmVyKTtcbiAgICBmb3IgKDs7KSB7XG4gICAgICBpZiAoY291bnQoY2hhbm5lbC5idWZmZXIpID09PSAwKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgcmVjZWl2ZXIgPSBkZXF1ZXVlKGNoYW5uZWwucmVjdnMpO1xuICAgICAgaWYgKHJlY2VpdmVyID09PSBFTVBUWSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGlmIChyZWNlaXZlci5hY3RpdmUpIHtcbiAgICAgICAgY2FsbGJhY2sgPSByZWNlaXZlci5jb21taXQoKTtcbiAgICAgICAgY29uc3QgdmFsdWUgPSByZW1vdmUoY2hhbm5lbC5idWZmZXIpO1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICBkaXNwYXRjaCgoKSA9PiBjYWxsYmFjayh2YWx1ZSkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gT25jZSB0aGUgYnVmZmVyIGlzIGVtcHR5IChvciBpZiB0aGVyZSBpc24ndCBhIGJ1ZmZlciBhdCBhbGwpLCBzZW5kIENMT1NFRFxuICAvLyB0byBhbGwgcmVtYWluaW5nIHF1ZXVlZCByZWNlaXZlcy5cbiAgZm9yICg7Oykge1xuICAgIHJlY2VpdmVyID0gZGVxdWV1ZShjaGFubmVsLnJlY3ZzKTtcbiAgICBpZiAocmVjZWl2ZXIgPT09IEVNUFRZKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgaWYgKHJlY2VpdmVyLmFjdGl2ZSkge1xuICAgICAgY2FsbGJhY2sgPSByZWNlaXZlci5jb21taXQoKTtcbiAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICBkaXNwYXRjaCgoKSA9PiBjYWxsYmFjayhDTE9TRUQpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBTZW5kIGBmYWxzZWAgdG8gYW55IHJlbWFpbmluZyBxdWV1ZWQgc2VuZHMuXG4gIGZvciAoOzspIHtcbiAgICBzZW5kZXIgPSBkZXF1ZXVlKGNoYW5uZWwuc2VuZHMpO1xuICAgIGlmIChzZW5kZXIgPT09IEVNUFRZKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgaWYgKHNlbmRlci5oYW5kbGVyLmFjdGl2ZSkge1xuICAgICAgY2FsbGJhY2sgPSBzZW5kZXIuaGFuZGxlci5jb21taXQoKTtcbiAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICBkaXNwYXRjaCgoKSA9PiBjYWxsYmFjayhmYWxzZSkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQge1xuICBDTE9TRUQsXG4gIE1BWF9ESVJUWSxcbiAgTUFYX1FVRVVFRCxcbiAgY2hhbm5lbCxcbiAgaGFuZGxlU2VuZCxcbiAgaGFuZGxlUmVjdixcbiAgY2xvc2UsXG4gIGJveCxcbiAgaXNCb3hcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuLyoqXG4gKiBBbiBpbXBsZW1lbnRhdGlvbiBvZiBjaGFubmVscy4gVGhlc2UgY2hhbm5lbHMgYXJlIGVzc2VudGlhbGx5IHF1ZXVlcyB0aGF0XG4gKiBob2xkIGluc3RydWN0aW9ucyB3YWl0aW5nIGZvciB0aGUgbmV4dCBhdmFpbGFibGUgYXN5bmMgZnVuY3Rpb24gdG8gcHJvY2Vzc1xuICogdGhlbS4gVGhleSBjYW4gYmUgYnVmZmVyZWQsIHdoaWNoIGlzIGFjY29tcGxpc2hlZCB1c2luZyB0aGUgYnVmZmVyIGZ1bmN0aW9uc1xuICogYHtAbGluayBtb2R1bGU6Y3NwLmZpeGVkfGZpeGVkfWAsIGB7QGxpbmsgbW9kdWxlOmNzcC5kcm9wcGluZ3xkcm9wcGluZ31gLCBhbmRcbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC5zbGlkaW5nfHNsaWRpbmd9YC5cbiAqXG4gKiBDaGFubmVscyBkbyBub3QgaW50ZXJhY3Qgd2l0aCBKUyB0YXNrcyBvciB0aGUgZGlzcGF0Y2hlciBpbiBhbnkgbWVhbmluZ2Z1bFxuICogd2F5LiBUaGV5J3JlIGp1c3QgaGVyZSB0byBob2xkIHRhc2tzIHdoaWNoIG1heSB0aGVtc2VsdmVzIHRoZW4gY2F1c2UgbmV3IEpTXG4gKiB0YXNrcyB0byBiZSBjcmVhdGVkIHZpYSB0aGUgZGlzcGF0Y2hlci5cbiAqXG4gKiBDaGFubmVscyBtYXkgaGF2ZSB0cmFuc2R1Y2VycyBhc3NvY2lhdGVkIHdpdGggdGhlbS4gVGhlIHRyYW5zZHVjZXJzIGFyZVxuICogZXhwZWN0ZWQgdG8gZm9sbG93IHRoZSBzYW1lIGNvbnZlbnRpb25zIGFzIGFueSBvZiB0aGUgcG9wdWxhciB0cmFuc2R1Y2VyXG4gKiBsaWJyYXJpZXMuIEV4cGxpY2l0IHN1cHBvcnQgaXMgcmVxdWlyZWQgYmVjYXVzZSBjaGFubmVscyB3b3VsZG4ndCBwbGF5IHdlbGxcbiAqIHdpdGggdGhlIG5vcm1hbCB3YXkgb2YgbWFraW5nIGFuIG9iamVjdCBzdXBwb3J0IHRyYW5zZHVjdGlvbiwgZm9yIHR3b1xuICogZGlmZmVyZW50IHJlYXNvbnMuXG4gKlxuICogKiBUcmFuc2R1Y2VycyByZXF1aXJlIHRoZSBhYmlsaXR5IHRvIGNyZWF0ZSBhIG5ldywgZW1wdHkgY29sbGVjdGlvbiBvZiB0aGVcbiAqICAgc2FtZSB0eXBlIGFzIHRoZSBpbnB1dCBjb2xsZWN0aW9uLiBJbiB0aGlzIGNhc2UsIHRoYXQgd291bGQgbWVhbiBjcmVhdGluZyBhXG4gKiAgIG5ldyBjaGFubmVsLCBtZWFuaW5nIHRoYXQgdGhlIG91dHB1dCBjaGFubmVsIChmcm9tIHdoaWNoIHRoZSB0cmFuc2Zvcm1lZFxuICogICB2YWx1ZXMgYXJlIHJlY2VpdmVkKSB3b3VsZCBiZSBkaWZmZXJlbnQgdGhhbiB0aGUgaW5wdXQgY2hhbm5lbCAod2hlcmVcbiAqICAgdmFsdWVzIGFyZSBzZW50KS5cbiAqICogSWYgd2Ugc29tZWhvdyBnZXQgb3ZlciB0aGF0IHJlcXVpcmVtZW50IGFuZCBrZWVwIGFsbCBhY3Rpb24gb24gdGhlIHNhbWVcbiAqICAgY2hhbm5lbCwgd2UgY2FuJ3QgdGFrZSB2YWx1ZXMgZnJvbSB0aGUgY2hhbm5lbCwgdHJhbnNmb3JtIHRoZW0sIGFuZCBwdXRcbiAqICAgdGhlbSBiYWNrLiBUaGlzIHdvdWxkIHBvdGVudGlhbGx5IGNoYW5nZSB0aGUgb3JkZXIgb2YgdmFsdWVzIGluIHRoZSBjaGFubmVsXG4gKiAgIHNpbmNlIHdlIGFyZSBkZWFsaW5nIHdpdGggYXN5bmNocm9ub3VzIHByb2Nlc3Nlcy5cbiAqXG4gKiBUaGUgZXhwbGljaXQgc3VwcG9ydCBtZWFucyBhIHRyYW5zZHVjZXIgaXMgZGlyZWN0bHkgYXNzb2NpYXRlZCB3aXRoIGFcbiAqIGNoYW5uZWwuIFdoZW4gYSB2YWx1ZSBpcyBzZW50IHRvIHRoZSBjaGFubmVsLCBpdCdzIGZpcnN0IHJ1biB0aHJvdWdoIHRoZVxuICogdHJhbnNkdWNlciBhbmQgdGhlIHRyYW5zZm9ybWVkIHZhbHVlIGlzIHRoZSBvbmUgYWN0dWFsbHkgcHV0IGludG8gdGhlXG4gKiBjaGFubmVsJ3MgYnVmZmVyLiBUaGlzIGF2b2lkcyBib3RoIG9mIHRoZSBwcm9ibGVtcyBub3RlZCBhYm92ZS5cbiAqXG4gKiBAbW9kdWxlIGNzcC9jaGFubmVsXG4gKiBAcHJpdmF0ZVxuICovXG5cbmltcG9ydCB7XG4gIENMT1NFRCxcbiAgY2hhbm5lbCBhcyBjaGFuSW1wbCxcbiAgaGFuZGxlU2VuZCxcbiAgaGFuZGxlUmVjdixcbiAgY2xvc2UgYXMgY2xvc2VJbXBsLFxuICBNQVhfRElSVFksXG4gIE1BWF9RVUVVRURcbn0gZnJvbSBcIi4vaGFuZGxlclwiO1xuaW1wb3J0IHsgREVGQVVMVCwgc2VsZWN0LCBzZWxlY3RBc3luYywgdmFsdWUsIGNoYW5uZWwgfSBmcm9tIFwiLi9zZWxlY3RcIjtcbmltcG9ydCB7IGFkZCwgZml4ZWQsIGlzQnVmZmVyIH0gZnJvbSBcIm1vZHVsZXMvYnVmZmVyXCI7XG5pbXBvcnQgeyBwcm90b2NvbHMgYXMgcCB9IGZyb20gXCJAY2hhbmtvL2NvcmVcIjtcblxuLyoqXG4gKiBBIGhhbmRsZXIgZnVuY3Rpb24gZm9yIGV4Y2VwdGlvbnMgdGhhdCBhcmUgdGhyb3duIGJ5IGEgdHJhbnNkdWNlciB3aGlsZVxuICogdHJhbnNmb3JtaW5nIHZhbHVlcyBvbiBhIGNoYW5uZWwuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGVyciBUaGUgZXJyb3Igb2JqZWN0IHRoYXQgd2FzIHRocm93biBieSB0aGUgdHJhbnNkdWNlci5cbiAqIEByZXR1cm4geyp9IEEgdmFsdWUgdGhhdCBzaG91bGQgYmUgcHV0IGludG8gdGhlIGNoYW5uZWwncyBidWZmZXIgd2hlbiB0aGVcbiAqICAgICB0cmFuc2R1Y2VyIHRocm93cyB0aGUgZXJyb3IuIElmIHRoaXMgdmFsdWUgaXNcbiAqICAgICB7QGxpbmsgbW9kdWxlOmNzcC5DTE9TRUR8Q0xPU0VEfSwgdGhlbiBubyB2YWx1ZSBhdCBhbGwgd2lsbCBiZSBhZGRlZCB0b1xuICogICAgIHRoZSBidWZmZXIuXG4gKiBAY2FsbGJhY2tcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwL2NoYW5uZWxcbiAqIEBwcml2YXRlXG4gKi9cblxuLyoqXG4gKiBUaGUgZGVmYXVsdCBleGNlcHRpb24gaGFuZGxlciwgdXNlZCB3aGVuIG5vIGV4Y2VwdGlvbiBoYW5kbGVyIGlzIHN1cHBsaWVkIHRvXG4gKiBge0BsaW5rIG1vZHVsZTpjc3AvY2hhbm5lbC5oYW5kbGVFeGNlcHRpb259YCxcbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC9jaGFubmVsLndyYXBUcmFuc2Zvcm1lcn1gLCBge0BsaW5rIG1vZHVsZTpjc3AuY2hhbnxjaGFufWAsXG4gKiBvciBge0BsaW5rIG1vZHVsZTpjc3AudHJhbnNDaGFufHRyYW5zQ2hhbn1gLiBUaGlzIGRlZmF1bHQgaGFuZGxlciBtZXJlbHlcbiAqIHJldHVybnMgYHtAbGluayBtb2R1bGU6Y3NwLkNMT1NFRHxDTE9TRUR9YCwgd2hpY2ggd2lsbCByZXN1bHQgaW4gbm8gbmV3IHZhbHVlXG4gKiBiZWluZyB3cml0dGVuIHRvIHRoZSBjaGFubmVsLlxuICpcbiAqIEB0eXBlIHttb2R1bGU6Y3NwLkV4Y2VwdGlvbkhhbmRsZXJ9XG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcC9jaGFubmVsXG4gKiBAcHJpdmF0ZVxuICovXG5jb25zdCBERUZBVUxUX0hBTkRMRVIgPSAoKSA9PiBDTE9TRUQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBoYW5kbGVyIHVzZWQgZm9yIGBzZW5kYCBhbmQgYHJlY3ZgIG9wZXJhdGlvbnMuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3AvY2hhbm5lbFxuICogQHBhcmFtIHttb2R1bGU6Y3NwL2NoYW5uZWwuSGFuZGxlckNhbGxiYWNrfSBmbiBUaGUgY2FsbGJhY2sgdG8gYmUgcnVuIHdoZW5cbiAqICAgICAoYW5kIGlmKSB0aGUgb3BlcmF0aW9uIGNvbXBsZXRlcy5cbiAqIEByZXR1cm4ge21vZHVsZTpjc3AvY2hhbm5lbC5IYW5kbGVyfSBUaGUgbmV3IGhhbmRsZXIuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBvcEhhbmRsZXIoZm4pIHtcbiAgcmV0dXJuIE9iamVjdC5jcmVhdGUobnVsbCwge1xuICAgIGFjdGl2ZToge1xuICAgICAgdmFsdWU6IHRydWVcbiAgICB9LFxuICAgIGNvbW1pdDoge1xuICAgICAgdmFsdWU6ICgpID0+IGZuXG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBIYW5kbGVzIGFuIGV4Y2VwdGlvbiB0aGF0IGlzIHRocm93biBpbnNpZGUgYSB0cmFuc2R1Y2VyLiBUaGUgdGhyb3duIGVycm9yIGlzXG4gKiBwYXNzZWQgdG8gdGhlIGBoYW5kbGVyYCBmdW5jdGlvbiwgYW5kIHRoZSByZXN1bHQgb2YgdGhhdCBoYW5kbGVyIGZ1bmN0aW9uIGlzXG4gKiBhZGRlZCB0byB0aGUgY2hhbm5lbCdzIGJ1ZmZlci4gSWYgdGhhdCB2YWx1ZSBpc1xuICoge0BsaW5rIG1vZHVsZTpjc3AuQ0xPU0VEfENMT1NFRH0sIHRoZW4gaXQgaXMgKm5vdCogYWRkZWQgdG8gdGhlIGJ1ZmZlci5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuQnVmZmVyfSBidWZmZXIgVGhlIGJ1ZmZlciB0aGF0IGJhY2tzIHRoZSBjaGFubmVsIHdob3NlXG4gKiAgICAgdHJhbnNkdWNlcidzIGV4Y2VwdGlvbnMgYXJlIGJlaW5nIGhhbmRsZWQuXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuRXhjZXB0aW9uSGFuZGxlcn0gaGFuZGxlciBUaGUgZXhjZXB0aW9uIGhhbmRsaW5nIGZ1bmN0aW9uXG4gKiAgICAgdGhhdCBpcyBydW4gd2hlbiBhbiBlcnJvciBvY2N1cnMgaW4gYSB0cmFuc2R1Y2VyLlxuICogQHBhcmFtICB7T2JqZWN0fSBleCBUaGUgZXJyb3Igb2JqZWN0IHRocm93biBieSB0aGUgdHJhbnNkdWNlci5cbiAqIEByZXR1cm4ge21vZHVsZTpjc3AuQnVmZmVyfSBUaGUgYnVmZmVyIGl0c2VsZi4gVGhpcyBpcyBkb25lIHRvIG1ha2UgaXQgZWFzaWVyXG4gKiAgICAgdG8gaW50ZWdyYXRlIHRoaXMgZnVuY3Rpb24gaW50byBhIHRyYW5zZHVjZXIncyBzdGVwIGZ1bmN0aW9uLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaGFuZGxlRXhjZXB0aW9uKGJ1ZmZlciwgaGFuZGxlciwgZXgpIHtcbiAgY29uc3QgdmFsdWUgPSBoYW5kbGVyKGV4KTtcbiAgaWYgKHZhbHVlICE9PSBDTE9TRUQpIHtcbiAgICBhZGQoYnVmZmVyLCB2YWx1ZSk7XG4gIH1cbiAgcmV0dXJuIGJ1ZmZlcjtcbn1cblxuLyoqXG4gKiBBIHRyYW5zZHVjZXIgdGhhdCB3cmFwcyBhbm90aGVyIHRyYW5zZHVjZXIgd2l0aCBlcnJvciBoYW5kbGluZyBjb2RlLiBBbnlcbiAqIGVycm9yIHRoYXQgb2NjdXJzIHdpdGhpbiB0aGUgdHJhbnNkdWNlciwgZWl0aGVyIGluIHRoZSBzdGVwIGZ1bmN0aW9uIG9yIHRoZVxuICogcmVzdWx0IGZ1bmN0aW9uLCB3aWxsIGNhdXNlIHRoZSBlcnJvciBoYW5kbGVyIHRvIGJlIHJ1bi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0geGZvcm0gVGhlIHRyYW5zZHVjZXIgdG8gYWRkIGFuIGVycm9yIGhhbmRsZXIgdG8uXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuRXhjZXB0aW9uSGFuZGxlcn0gW2hhbmRsZXI9REVGQVVMVF9IQU5ETEVSXSBUaGUgZXhjZXB0aW9uXG4gKiAgICAgaGFuZGxpbmcgZnVuY3Rpb24gdGhhdCBpcyBydW4gd2hlbiBhbiBlcnJvciBvY2N1cnMgaW4gdGhlIHRyYW5zZHVjZXIuXG4gKiBAcmV0dXJuIHtPYmplY3R9IEEgbmV3IHRyYW5zZHVjZXIgdGhhdCBpcyB0aGUgcmVzdWx0IG9mIHdyYXBwaW5nIHRoZSBwcm92aWRlZFxuICogICAgIHRyYW5zZHVjZXIncyBzdGVwIGFuZCByZXN1bHQgZnVuY3Rpb25zIHdpdGggdGhlIGV4Y2VwdGlvbiBoYW5kbGVyLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaGFuZGxlclRyYW5zZHVjZXIoeGZvcm0sIGhhbmRsZXIgPSBERUZBVUxUX0hBTkRMRVIpIHtcbiAgcmV0dXJuIHtcbiAgICBbcC5zdGVwXShidWZmZXIsIGlucHV0KSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4geGZvcm1bcC5zdGVwXShidWZmZXIsIGlucHV0KTtcbiAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgIHJldHVybiBoYW5kbGVFeGNlcHRpb24oYnVmZmVyLCBoYW5kbGVyLCBleCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIFtwLnJlc3VsdF0oYnVmZmVyKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4geGZvcm1bcC5yZXN1bHRdKGJ1ZmZlcik7XG4gICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICByZXR1cm4gaGFuZGxlRXhjZXB0aW9uKGJ1ZmZlciwgaGFuZGxlciwgZXgpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cblxuLyoqXG4gKiBUaGUgcmVkdWNlciB1c2VkIGF0IHRoZSBlbmQgb2YgYSB0cmFuc2R1Y2VyIGNoYWluIHRvIGNvbnRyb2wgaG93IHRoZVxuICogdHJhbnNmb3JtZWQgdmFsdWVzIGFyZSByZWR1Y2VkIGJhY2sgb250byB0aGUgY2hhbm5lbCdzIGJ1ZmZlci4gVGhpcyByZWR1Y2VyXG4gKiBkb2VzIG5vdGhpbmcgbW9yZSB0aGFuIGFkZCB0aGUgaW5wdXQgaXRlbXMgKHdoaWNoIGFyZSB0aGUgdHJhbnNmb3JtZWQgdmFsdWVzXG4gKiB0aGF0IGFyZSBiZWluZyBwdXQgb250byB0aGUgY2hhbm5lbCkgdG8gdGhlIGNoYW5uZWwgYnVmZmVyLlxuICpcbiAqIFRoaXMgaXMgYSBuZWNlc3NhcnkgcGFydCBvZiB3b3JraW5nIHdpdGggYSB0cmFuc2R1Y2VyLCBhcyB0aGUgZmluYWwgcmVkdWNlclxuICogYWx3YXlzIHRha2VzIHRoZSB0cmFuc2Zvcm1lZCB2YWx1ZXMgYW5kIHJlbmRlcnMgdGhlbSBpbnRvIHdoYXRldmVyIGNvbGxlY3Rpb25cbiAqIGlzIGRlc2lyZWQuIFRoaXMgaXMgdGhhdCBmaW5hbCByZWR1Y2VyIGZvciBjaGFubmVscy5cbiAqXG4gKiBAdHlwZSB7T2JqZWN0fVxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgYnVmZmVyUmVkdWNlciA9IHtcbiAgW3AuaW5pdF0oKSB7XG4gICAgdGhyb3cgRXJyb3IoXCJpbml0IG5vdCBhdmFpbGFibGVcIik7XG4gIH0sXG5cbiAgW3Auc3RlcF0oYnVmZmVyLCBpbnB1dCkge1xuICAgIGFkZChidWZmZXIsIGlucHV0KTtcbiAgICByZXR1cm4gYnVmZmVyO1xuICB9LFxuXG4gIFtwLnJlc3VsdF0oYnVmZmVyKSB7XG4gICAgcmV0dXJuIGJ1ZmZlcjtcbiAgfVxufTtcblxuLyoqXG4gKiBQYXJzZXMgdGhlIGJ1ZmZlciBhcmd1bWVudCBhbmQgb3B0aW9ucywgYWxvbmcgd2l0aCBhIHNldCBvZiBkZWZhdWx0IG9wdGlvbnMsXG4gKiB0byBmaWd1cmUgb3V0IHdoYXQgd2FzIHJlYWxseSBwYXNzZWQgdG8gYHtAbGluayBtb2R1bGU6Y3NwLmNoYW58Y2hhbn1gLlxuICpcbiAqIEBwYXJhbSB7KG51bGx8bnVtYmVyfG1vZHVsZTpjc3AuQnVmZmVyKX0gYnVmZmVyIFRoZSBidWZmZXIgYXJndW1lbnQgcGFzc2VkIHRvXG4gKiAgICAgYHtAbGluayBtb2R1bGU6Y3NwLmNoYW58Y2hhbn1gLlxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgVGhlIG9wdGlvbnMgYXJndW1lbnQgcGFzc2VkIHRvXG4gKiAgICAgYHtAbGluayBtb2R1bGU6Y3NwLmNoYW58Y2hhbn1gLlxuICogQHBhcmFtIHtvYmplY3R9IGRlZmF1bHRPcHRpb25zIERlZmF1bHQgdmFsdWVzIGZvciBvcHRpb25zIHRoYXQgbWlnaHQgbm90IGhhdmVcbiAqICAgICBiZWVuIHNlbnQgdG8gYHtAbGluayBtb2R1bGU6Y3NwLmNoYW58Y2hhbn1gLlxuICogQHJldHVybiB7b2JqZWN0fSBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgcHJvY2Vzc2VkIHZhbHVlcyBvZiBhbGwgb2YgdGhlXG4gKiAgICAgYXJndW1lbnRzIHNlbnQgdG8gYHtAbGluayBtb2R1bGU6Y3NwLmNoYW58Y2hhbn1gLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gcGFyc2VBcmdzKGJ1ZmZlciwgb3B0aW9ucywgZGVmYXVsdE9wdGlvbnMpIHtcbiAgbGV0IGJ1ZjtcbiAgbGV0IG9wdHM7XG5cbiAgaWYgKCFidWZmZXIpIHtcbiAgICAvLyBzYW1lIGZvciAwLCBudWxsLCBvciB1bmRlZmluZWRcbiAgICBidWYgPSBudWxsO1xuICAgIG9wdHMgPSBvcHRpb25zO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBidWZmZXIgPT09IFwibnVtYmVyXCIpIHtcbiAgICBidWYgPSBmaXhlZChidWZmZXIpO1xuICAgIG9wdHMgPSBvcHRpb25zO1xuICB9IGVsc2UgaWYgKGlzQnVmZmVyKGJ1ZmZlcikpIHtcbiAgICBidWYgPSBidWZmZXI7XG4gICAgb3B0cyA9IG9wdGlvbnM7XG4gIH0gZWxzZSB7XG4gICAgLy8gSWYgbm8gYnVmZmVyIGlzIHNwZWNpZmllZCBidXQgYSB0cmFuc2R1Y2VyIGlzLCB3ZSBhc3N1bWUgZml4ZWQoMSkgaW5zdGVhZFxuICAgIC8vIG9mIG5vIGJ1ZmZlclxuICAgIGJ1ZiA9IGJ1ZmZlcj8udHJhbnNkdWNlciA/IGZpeGVkKDEpIDogbnVsbDtcbiAgICBvcHRzID0gYnVmZmVyO1xuICB9XG5cbiAgY29uc3QgeyB0cmFuc2R1Y2VyLCBoYW5kbGVyLCBtYXhEaXJ0eSwgbWF4UXVldWVkLCB0aW1lciB9ID0gT2JqZWN0LmFzc2lnbihcbiAgICB7fSxcbiAgICBkZWZhdWx0T3B0aW9ucyxcbiAgICBvcHRzXG4gICk7XG4gIHJldHVybiB7IGJ1ZiwgdHJhbnNkdWNlciwgaGFuZGxlciwgbWF4RGlydHksIG1heFF1ZXVlZCwgdGltZXIgfTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuZCByZXR1cm5zIGEgbmV3IGNoYW5uZWwuXG4gKlxuICogQnkgZGVmYXVsdCB0aGlzIGNoYW5uZWwgd2lsbCBiZSBhIHNpbXBsZSB1bmJ1ZmZlcmVkLCB1bnRyYW5zZm9ybWVkIGNoYW5uZWwsXG4gKiBidXQgdGhhdCBjYW4gYmUgY2hhbmdlZCB0aHJvdWdoIG9wdGlvbnMuIEEgY2hhbm5lbCBkb2VzIG5vdCBoYXZlIGFueVxuICogZXh0ZXJuYWxseSB1c2VmdWwgZnVuY3Rpb25zLiBJdCBleGlzdHMgbGFyZ2VseSB0byBiZSBwYXNzZWQgaW50b1xuICogYHtAbGluayBtb2R1bGU6Y3NwLnNlbmR8c2VuZH1gLCBge0BsaW5rIG1vZHVsZTpjc3AucmVjdnxyZWN2fWAsIGFuZFxuICogYHtAbGluayBtb2R1bGU6Y3NwLnNlbGVjdHxzZWxlY3R9YCBpbnZvY2F0aW9ucywgYWxvbmcgd2l0aCB0aGVpciBub24tYmxvY2tpbmdcbiAqIHZhcmlhdGlvbnMgKGB7QGxpbmsgbW9kdWxlOmNzcC5zZW5kQXN5bmN8c2VuZEFzeW5jfWAsXG4gKiBge0BsaW5rIG1vZHVsZTpjc3AucmVjdkFzeW5jfHJlY3ZBc3luY31gLCBhbmRcbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC5zZWxlY3RBc3luY3xzZWxlY3RBc3luY31gKS5cbiAqXG4gKiBJZiBhIGJ1ZmZlciB2YWx1ZSBpcyBwcm92aWRlZCwgaXQgZGVmaW5lcyB3aGF0IGJ1ZmZlciBzaG91bGQgYmFjayB0aGVcbiAqIGNoYW5uZWwuIElmIHRoaXMgaXMgYG51bGxgIG9yIGAwYCwgdGhlIGNoYW5uZWwgd2lsbCBiZSB1bmJ1ZmZlcmVkLiBJZiBpdCdzIGFcbiAqIHBvc2l0aXZlIG51bWJlciwgdGhlIGNoYW5uZWwgd2lsbCBiZSBidWZmZXJlZCBieSBhXG4gKiBge0BsaW5rIG1vZHVsZTpjc3AuRml4ZWRCdWZmZXJ8Rml4ZWRCdWZmZXJ9IGBvZiB0aGF0IHNpemUuIElmIGl0J3MgYVxuICogYHtAbGluayBtb2R1bGU6Y3NwLkJ1ZmZlcnxCdWZmZXJ9YCBvYmplY3QsIHRoYXQgb2JqZWN0IHdpbGwgYmUgdXNlZCBhcyB0aGVcbiAqIGNoYW5uZWwncyBidWZmZXIuIElmIGl0J3MgbWlzc2luZyBhbHRvZ2V0aGVyLCB0aGUgY2hhbm5lbCB3aWxsIGJlIHVuYnVmZmVyZWRcbiAqIHVubGVzcyBhIGB0cmFuc2R1Y2VyYCBvcHRpb24gaXMgcHJvdmlkZWQgKHNlZSBiZWxvdyksIGluIHdoaWNoIGNhc2UgaXQgd2lsbFxuICogYmUgYSBge0BsaW5rIG1vZHVsZTpjc3AuRml4ZWRCdWZmZXJ8Rml4ZWRCdWZmZXJ9YCBvZiBzaXplIDEuXG4gKlxuICogYGNoYW5gIHN1cHBvcnRzIHRyYW5zZHVjZXJzIGJ5IGFsbG93aW5nIGEgdHJhbnNkdWNlciBmdW5jdGlvbiB0byBiZVxuICogYXNzb2NpYXRlZCB3aXRoIGl0LiBUaGlzIGlzIHBhc3NlZCBhcyB0aGUgYHRyYW5zZHVjZXJgIG9wdGlvbiBhbmQgY2FuIG9ubHkgYmVcbiAqIHVzZWQgaWYgdGhlIGNoYW5uZWwgaXMgYnVmZmVyZWQgKG90aGVyd2lzZSBhbiBlcnJvciBpcyB0aHJvd24pLiBUaGlzXG4gKiB0cmFuc2R1Y2VyIGZ1bmN0aW9uIG11c3QgdGFrZSBhbm90aGVyIHRyYW5zZHVjZXIgYXMgYSBwYXJhbWV0ZXIgKGFsbG93aW5nXG4gKiB0cmFuc2Zvcm1lcnMgdG8gYmUgY2hhaW5lZCksIGFuZCBpdCBtdXN0IHJldHVybiBhbiBvYmplY3QgY29uZm9ybWluZyB0byB0aGVcbiAqIHRyYW5zZHVjZXIgcHJvdG9jb2wuXG4gKlxuICogRXJyb3JzIGluIHRoZSB0cmFuc2Zvcm1hdGlvbiBwcm9jZXNzIGNhbiBiZSBoYW5kbGVkIGJ5IHBhc3NpbmcgYW4gZXJyb3JcbiAqIGhhbmRsZXIuIFRoaXMgaXMgYSBmdW5jdGlvbiB0aGF0IGV4cGVjdHMgdG8gcmVjZWl2ZSBhbiBlcnJvciBvYmplY3QgYXMgYVxuICogcGFyYW1ldGVyIGFuZCBjYW4gcmV0dXJuIGEgdmFsdWUgdGhhdCBpcyB0aGVuIHB1dCBvbnRvIHRoZSBjaGFubmVsLiBJZiB0aGlzXG4gKiB2YWx1ZSBpcyBge0BsaW5rIG1vZHVsZTpjc3AuQ0xPU0VEfENMT1NFRH1gLCB0aGVuIG5vIHZhbHVlIHdpbGwgYmUgcHV0IG9udG9cbiAqIHRoZSBjaGFubmVsIHVwb24gaGFuZGxlciBjb21wbGV0aW9uLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcGFyYW0geyhudW1iZXJ8bW9kdWxlOmNzcC5CdWZmZXIpfSBbYnVmZmVyXSBUaGUgYnVmZmVyIG9iamVjdCB0aGF0IHNob3VsZFxuICogICAgIGJhY2sgdGhpcyBjaGFubmVsLiBJZiB0aGlzIGlzIGEgcG9zaXRpdmUgbnVtYmVyLCBhIGZpeGVkIGJ1ZmZlciBvZiB0aGF0XG4gKiAgICAgc2l6ZSB3aWxsIGJlIGNyZWF0ZWQgdG8gYmFjayB0aGUgY2hhbm5lbC4gSWYgaXQgaXMgYDBgIG9yIGBudWxsYCwgdGhlIG5ld1xuICogICAgIGNoYW5uZWwgd2lsbCBiZSB1bmJ1ZmZlcmVkLiBJZiBpdCdzIG5vdCBwcmVzZW50LCB0aGUgbmV3IGNoYW5uZWwgd2lsbCBiZVxuICogICAgIHVuYnVmZmVyZWQgdW5sZXNzIHRoZXJlIGlzIGEgYHRyYW5zZHVjZXJgIG9wdGlvbiwgaW4gaW4gd2hpY2ggY2FzZSBpdFxuICogICAgIHdpbGwgYmUgYnVmZmVyZWQgd2l0aCBhIHNpemUgMVxuICogICAgIGB7QGxpbmsgbW9kdWxlOmNzcC5GaXhlZEJ1ZmZlcnxGaXhlZEJ1ZmZlcn1gLlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSBBIHNldCBvZiBvcHRpb25zIGZvciBjb25maWd1cmluZyB0aGUgY2hhbm5lbCdzXG4gKiAgICAgcXVldWUuXG4gKiBAcGFyYW0ge21vZHVsZTpjb3JlLlRyYW5zZHVjZXJGdW5jdGlvbn0gW29wdGlvbnMudHJhbnNkdWNlcl0gQSB0cmFuc2R1Y2VyIHRvXG4gKiAgICAgcnVuIGVhY2ggdmFsdWUgdGhyb3VnaCBiZWZvcmUgcHV0dGluZyBpdCBvbnRvIHRoZSBjaGFubmVsLiBUaGlzIGZ1bmN0aW9uXG4gKiAgICAgc2hvdWxkIGV4cGVjdCBvbmUgcGFyYW1ldGVyIChhbm90aGVyIHRyYW5zZHVjZXIgdGhhdCBpdCdzIGNoYWluZWQgdG8pIGFuZFxuICogICAgIHJldHVybiBhbiBvYmplY3QgdGhhdCBjb25mb3JtcyB0byB0aGUgdHJhbnNkdWNlciBwcm90b2NvbC4gSWYgYVxuICogICAgIHRyYW5zZHVjZXIgaXMgcHJvdmlkZWQgb24gYW4gdW5idWZmZXJlZCBjaGFubmVsLCBhbiBlcnJvciB3aWxsIGJlIHRocm93bi5cbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5FeGNlcHRpb25IYW5kbGVyfSBbb3B0aW9ucy5oYW5kbGVyXSBBbiBlcnJvciBoYW5kbGVyIHRoYXRcbiAqICAgICBpcyBydW4gd2hlbmV2ZXIgYW4gZXJyb3Igb2NjdXJzIGluc2lkZSBhIHRyYW5zZHVjZXIgZnVuY3Rpb24uIElmIHRoYXRcbiAqICAgICBoYXBwZW5zLCB0aGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCB3aXRoIG9uZSBwYXJhbWV0ZXIsIHdoaWNoIGlzIHRoZSBlcnJvclxuICogICAgIG9iamVjdC4gVGhlIHZhbHVlIHRoYXQgdGhlIGhhbmRsZXIgcmV0dXJucyAoaWYgaXQgaXMgbm90XG4gKiAgICAgYHtAbGluayBtb2R1bGU6Y3NwLkNMT1NFRHxDTE9TRUR9YCkgd2lsbCBiZSBwdXQgb250byB0aGUgY2hhbm5lbCB3aGVuIHRoZVxuICogICAgIGhhbmRsZXIgZmluaXNoZXMgcnVubmluZy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5tYXhEaXJ0eT02NF0gVGhlIG1heGltdW0gbnVtYmVyIG9mIGRpcnR5IG9wZXJhdGlvbnNcbiAqICAgICB0aGF0IGNhbiBiZSBpbiB0aGUgcXVldWUgYmVmb3JlIHRob3NlIG9wZXJhdGlvbnMgYXJlIHN1YmplY3QgdG8gYmVpbmdcbiAqICAgICBwdXJnZWQuIERpcnR5IG9wZXJhdGlvbnMgYXJlIHRob3NlIHRoYXQgbWF5IG5vdCBiZSB2YWxpZCBhbnltb3JlIGJlY2F1c2VcbiAqICAgICB0aGV5IHdlcmUgaW4gdGhlIGxpc3Qgb2Ygb3BlcmF0aW9ucyBwYXNzZWQgdG9cbiAqICAgICBge0BsaW5rIG1vZHVsZTpjc3Auc2VsZWN0fHNlbGVjdH1gIG9yXG4gKiAgICAgYHtAbGluayBtb2R1bGU6Y3NwLnNlbGVjdEFzeW5jfHNlbGVjdEFzeW5jfWAgYnV0IHdlcmUgbm90IGNob3NlbiB0byBydW4uXG4gKiAgICAgVGhpcyBwcm92aWRlcyBhIGNoYW5jZSBmb3IgYSB2ZXJ5IG1pbm9yIHBlcmZvcm1hbmNlIHR3ZWFrIGFuZCBpcyBiZXN0XG4gKiAgICAgbGVmdCBhbG9uZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5tYXhRdWV1ZWQ9MTAyNF0gVGhlIG1heGltdW0gbnVtYmVyIG9mIG9wZXJhdGlvbnNcbiAqICAgICB0aGF0IGNhbiBiZSBxdWV1ZWQgdXAgYXQgdGhlIHNhbWUgdGltZS4gVGhpcyBwcmV2ZW50cyBpbmZpbml0ZSBsb29wcyBmcm9tXG4gKiAgICAgYWNjaWRlbnRhbGx5IGVhdGluZyB1cCBhbGwgb2YgdGhlIGF2YWlsYWJsZSBtZW1vcnkuXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMudGltZXJdIElmIHRoaXMgdmFsdWUgaXMgcHJlc2VudCwgdGhlIGNoYW5uZWwgd2lsbCBiZVxuICogICAgIGEgdGltZWQgY2hhbm5lbCB0aGF0IGNsb3NlcyBhdXRvbWF0aWNhbGx5IGFmdGVyIHRoaXMgbnVtYmVyIG9mXG4gKiAgICAgbWlsbGlzZWNvbmRzLlxuICogQHJldHVybiB7bW9kdWxlOmNzcC5DaGFubmVsfSBBIG5ldyBjaGFubmVsLlxuICovXG5mdW5jdGlvbiBjaGFuKGJ1ZmZlciwgb3B0aW9ucykge1xuICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICBtYXhEaXJ0eTogTUFYX0RJUlRZLFxuICAgIG1heFF1ZXVlZDogTUFYX1FVRVVFRFxuICB9O1xuICBjb25zdCB7IGJ1ZiwgdHJhbnNkdWNlciwgaGFuZGxlciwgbWF4RGlydHksIG1heFF1ZXVlZCwgdGltZXIgfSA9IHBhcnNlQXJncyhcbiAgICBidWZmZXIsXG4gICAgb3B0aW9ucyxcbiAgICBkZWZhdWx0T3B0aW9uc1xuICApO1xuXG4gIGlmICh0cmFuc2R1Y2VyICYmICFidWYpIHtcbiAgICB0aHJvdyBFcnJvcihcIk9ubHkgYnVmZmVyZWQgY2hhbm5lbHMgY2FuIHVzZSB0cmFuc2R1Y2Vyc1wiKTtcbiAgfVxuXG4gIGNvbnN0IHhmID0gaGFuZGxlclRyYW5zZHVjZXIoXG4gICAgdHJhbnNkdWNlciA/IHRyYW5zZHVjZXIoYnVmZmVyUmVkdWNlcikgOiBidWZmZXJSZWR1Y2VyLFxuICAgIGhhbmRsZXJcbiAgKTtcblxuICBjb25zdCBpc1RpbWVkID0gdHlwZW9mIHRpbWVyID09PSBcIm51bWJlclwiO1xuXG4gIGNvbnN0IGNoID0gY2hhbkltcGwoYnVmLCB4ZiwgaXNUaW1lZCwgbWF4RGlydHksIG1heFF1ZXVlZCk7XG5cbiAgYXN5bmMgZnVuY3Rpb24qIGl0ZXJhdG9yKCkge1xuICAgIGZvciAoOzspIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gYXdhaXQgcmVjdihjaCk7XG4gICAgICBpZiAodmFsdWUgPT09IENMT1NFRCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHlpZWxkIHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIGNoW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGl0ZXJhdG9yO1xuXG4gIGlmIChpc1RpbWVkKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiBjbG9zZUltcGwoY2gpLCB0aW1lcik7XG4gIH1cblxuICByZXR1cm4gY2g7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbiB1bmJ1ZmZlcmVkLCB0aW1lZCBjaGFubmVsLiBUaGlzIGNoYW5uZWwgY2xvc2VzIGF1dG9tYXRpY2FsbHkgYWZ0ZXJcbiAqIHRoZSBzdXBwbGllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGFuZCBpcyB0aGUgZXF1aXZhbGVudCBvZiBjYWxsaW5nIGBjaGFuKDAsXG4gKiB7IHRpbWVyOiBkZWxheSB9KWAuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqIEBwYXJhbSB7bnVtYmVyfSBkZWxheSBUaGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBhZnRlciB0aGUgY2hhbm5lbCBpcyBjcmVhdGVkXG4gKiAgICAgdGhhdCBpdCB3aWxsIGJlIGNsb3NlZCBhdXRvbWF0aWNhbGx5LlxuICogQHJldHVybiB7bW9kdWxlOmNzcC5DaGFubmVsfSBBIG5ldyB0aW1lZCBjaGFubmVsLlxuICovXG5mdW5jdGlvbiB0aW1lZENoYW4oZGVsYXkgPSAwKSB7XG4gIHJldHVybiBjaGFuKHsgdGltZXI6IGRlbGF5IH0pO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBidWZmZXJlZCBjaGFubmVsIHdpdGggYSB0cmFuc2R1Y2VyIGFuZCBvcHRpb25hbCBlcnJvciBoYW5kbGVyLiBUaGVcbiAqIGJ1ZmZlciBmb3IgdGhpcyBjaGFubmVsIGlzIGEgYHtAbGluayBtb2R1bGU6Y3NwLkZpeGVkQnVmZmVyfEZpeGVkQnVmZmVyfWAgb2ZcbiAqIHNpemUgMS4gVGhpcyBpcyB0aGUgZXF1aXZhbGVudCBvZiBgY2hhbigxLCB7IHRyYW5zZHVjZXIsIGhhbmRsZXIgfSlgLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcGFyYW0ge21vZHVsZTpjb3JlLlRyYW5zZHVjZXJGdW5jdGlvbn0gdHJhbnNkdWNlciBUaGUgdHJhbnNkdWNlciB1c2VkIHRvXG4gKiAgICAgdHJhbnNmb3JtIHZhbHVlcyBvbiB0aGUgbmV3IGNoYW5uZWwuXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuRXhjZXB0aW9uSGFuZGxlcn0gW2hhbmRsZXJdIEFuIGV4Y2VwdGlvbiBoYW5kbGVyIGNhbGxlZFxuICogICAgIHdpdGggdGhlIGVycm9yIG9iamVjdCBhcyBpdHMgb25seSBhcmd1bWVudCB3aGVuIGFuIGVycm9yIGhhcHBlbnMgaW5zaWRlIGFcbiAqICAgICB0cmFuc2R1Y2VyLiBJZiB0aGlzIGlzIG5vdCBwcm92aWRlZCwgYSBkZWZhdWx0IGhhbmRsZXIgaXMgdXNlZCB0aGF0XG4gKiAgICAgc2ltcGx5IGRvZXMgbm90aGluZywgaW5jbHVkaW5nIHNlbmRpbmcgbm8gb3V0cHV0IGZyb20gdGhlIHZhbHVlIHRoYXRcbiAqICAgICBlcnJvcmVkLlxuICogQHJldHVybiB7bW9kdWxlOmNzcC5DaGFubmVsfSBBIG5ldyBjaGFubmVsIHdpdGggYSB0cmFuc2R1Y2VyLlxuICovXG5mdW5jdGlvbiB0cmFuc0NoYW4odHJhbnNkdWNlciwgaGFuZGxlcikge1xuICByZXR1cm4gY2hhbih7IHRyYW5zZHVjZXIsIGhhbmRsZXIgfSk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGEgY2hhbm5lbCBpcyBjbG9zZWQuXG4gKlxuICogQSBjbG9zZWQgY2hhbm5lbCB3aWxsIGNhdXNlIGFueSBgc2VuZGAgb3BlcmF0aW9uIHRvIHJldHVybiBgZmFsc2VgIGFuZCBhbnlcbiAqIGByZWN2YCBvcGVyYXRpb24gdG8gcmV0dXJuIGFueSBidWZmZXJlZCBpdGVtcyB0aGF0IHJlbWFpbiwgZm9sbG93ZWQgYnlcbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC5DTE9TRUR8Q0xPU0VEfWAuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5DaGFubmVsfSBjaGFubmVsIFRoZSBjaGFubmVsIHRvIGNoZWNrLlxuICogQHJldHVybiB7Ym9vbGVhbn0gRWl0aGVyIGB0cnVlYCBpZiB0aGUgY2hhbm5lbCBpcyBjbG9zZWQgb3IgYGZhbHNlYCBpZiBpdFxuICogICAgIGlzbid0LlxuICovXG5mdW5jdGlvbiBpc0Nsb3NlZChjaGFubmVsKSB7XG4gIHJldHVybiBjaGFubmVsLmNsb3NlZDtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgYSBjaGFubmVsIGlzIGJ1ZmZlcmVkLlxuICpcbiAqIEEgY2hhbm5lbCBpcyBidWZmZXJlZCBpZiBhIGJ1ZmZlciBvciBhIG51bWJlciB3YXMgcGFzc2VkIGFzIHRoZSBmaXJzdFxuICogYXJndW1lbnQgb2YgYHtAbGluayBtb2R1bGU6Y3NwLmNoYW58Y2hhbn1gIG9yIGlmIGEgdHJhbnNkdWNlciBpcyBhIHBhcnQgb2ZcbiAqIHRoZSBjaGFubmVsLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuQ2hhbm5lbH0gY2hhbm5lbCBUaGUgY2hhbm5lbCB0byBjaGVjay5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IEVpdGhlciBgdHJ1ZWAgaWYgdGhlIGNoYW5uZWwgaXMgYnVmZmVyZWQgb3IgYGZhbHNlYCBpZiBpdFxuICogICAgIGlzbid0LlxuICovXG5mdW5jdGlvbiBpc0J1ZmZlcmVkKGNoYW5uZWwpIHtcbiAgcmV0dXJuIGNoYW5uZWwuaXNCdWZmZXJlZDtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgYSBjaGFubmVsIGlzIHRpbWVkLlxuICpcbiAqIEEgY2hhbm5lbCBpcyB0aW1lZCBpZiBpdCB3YXMgY3JlYXRlZCBlaXRoZXIgd2l0aCB0aGUgYHRpbWVyYCBvcHRpb24gb2ZcbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC5jaGFufGNoYW59YCBvciB3aXRoIHRoZVxuICogYHtAbGluayBtb2R1bGU6Y3NwLnRpbWVkQ2hhbnx0aW1lZENoYW59YCBmdW5jdGlvbi4gSXQgd2lsbCBhdXRvbWF0aWNhbGx5XG4gKiBjbG9zZSBhZnRlciBhIGNlcnRhaW4gcGVyaW9kIG9mIHRpbWUuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5DaGFubmVsfSBjaGFubmVsIFRoZSBjaGFubmVsIHRvIGNoZWNrLlxuICogQHJldHVybiB7Ym9vbGVhbn0gRWl0aGVyIGB0cnVlYCBpZiB0aGUgY2hhbm5lbCBpcyB0aW1lZCBvciBgZmFsc2VgIGlmIGl0XG4gKiAgICAgaXNuJ3QuXG4gKi9cbmZ1bmN0aW9uIGlzVGltZWQoY2hhbm5lbCkge1xuICByZXR1cm4gY2hhbm5lbC5pc1RpbWVkO1xufVxuXG4vKipcbiAqIFNlbmRzIGEgdmFsdWUgdG8gdGhpcyBjaGFubmVsIHdpdGhvdXQgYmxvY2tpbmcuXG4gKlxuICogVGhpcyBtZWFucyB0aGF0IGEgY2FsbCB0byBgc2VuZEFzeW5jYCBkb2VzIG5vdCBnbyBpbnRvIGFuIGBhd2FpdGAgZXhwcmVzc2lvbixcbiAqIGFuZCBpdCBpcyBub3QgbmVjZXNzYXJ5IHRvIHVzZSBpdCBpbnNpZGUgYSBhc3luYyBmdW5jdGlvbi4gUmF0aGVyIHRoYW5cbiAqIGJsb2NraW5nIHVudGlsIHRoZSBzZW50IHZhbHVlIGlzIHRha2VuIGJ5IGFub3RoZXIgYXN5bmMgZnVuY3Rpb24sIHRoaXMgb25lXG4gKiByZXR1cm5zIGltbWVkaWF0ZWx5IGFuZCB0aGVuIGludm9rZXMgdGhlIGNhbGxiYWNrIChpZiBwcm92aWRlZCkgd2hlbiB0aGUgc2VudFxuICogdmFsdWUgaXMgdGFrZW4uIEl0IGNhbiBiZSBzZWVuIGFzIGEgbm9uLWJsb2NraW5nIHZlcnNpb24gb2ZcbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC5zZW5kfHNlbmR9YC5cbiAqXG4gKiBXaGlsZSB0aGUgcHJpbWFyeSB1c2Ugb2YgdGhpcyBmdW5jdGlvbiBpcyB0byBzZW5kIHZhbHVlcyBvbnRvIGNoYW5uZWxzIGluXG4gKiBjb250ZXh0cyB3aGVyZSBiZWluZyBpbnNpZGUgYW4gYXN5bmMgZnVuY3Rpb24gaXMgaW1wb3NzaWJsZSAoZm9yIGV4YW1wbGUsIGluXG4gKiBhIERPTSBlbGVtZW50J3MgZXZlbnQgaGFuZGxlciksIGl0IGNhbiBzdGlsbCBiZSB1c2VkIGluc2lkZSBhc3luYyBmdW5jdGlvbnNcbiAqIGF0IHRpbWVzIHdoZW4gaXQncyBpbXBvcnRhbnQgdG8gbWFrZSBzdXJlIHRoYXQgdGhlIGZ1bmN0aW9uIGRvZXNuJ3QgYmxvY2tcbiAqIGZyb20gdGhlIHNlbmQuXG4gKlxuICogVGhlIGNhbGxiYWNrIGlzIGEgZnVuY3Rpb24gb2Ygb25lIHBhcmFtZXRlci4gVGhlIHBhcmFtZXRlciB0aGF0J3Mgc3VwcGxpZWQgdG9cbiAqIHRoZSBjYWxsYmFjayBpcyB0aGUgc2FtZSBhcyB3aGF0IGlzIHN1cHBsaWVkIHRvIGBhd2FpdCBzZW5kYDogYHRydWVgIGlmIHRoZVxuICogdmFsdWUgd2FzIHRha2VuLCBvciBgZmFsc2VgIGlmIHRoZSBjaGFubmVsIHdhcyBjbG9zZWQuIElmIHRoZSBjYWxsYmFjayBpc24ndFxuICogcHJlc2VudCwgbm90aGluZyB3aWxsIGhhcHBlbiBhZnRlciB0aGUgdmFsdWUgaXMgdGFrZW4uXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqIEBwYXJhbSB7Kn0gW3ZhbHVlXSBUaGUgdmFsdWUgYmVpbmcgcHV0IG9udG8gdGhlIGNoYW5uZWwuXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuT3BDYWxsYmFja30gW2NhbGxiYWNrXSBBIGZ1bmN0aW9uIHRoYXQgZ2V0cyBpbnZva2VkIGVpdGhlclxuICogICAgIHdoZW4gdGhlIHZhbHVlIGlzIHRha2VuIGJ5IGFub3RoZXIgcHJvY2VzcyBvciB3aGVuIHRoZSBjaGFubmVsIGlzIGNsb3NlZC5cbiAqICAgICBUaGlzIGZ1bmN0aW9uIGNhbiB0YWtlIG9uZSBwYXJhbWV0ZXIsIHdoaWNoIGlzIGB0cnVlYCBpbiB0aGUgZm9ybWVyIGNhc2VcbiAqICAgICBhbmQgYGZhbHNlYCBpbiB0aGUgbGF0dGVyLlxuICovXG5mdW5jdGlvbiBzZW5kQXN5bmMoY2hhbm5lbCwgdmFsdWUsIGNhbGxiYWNrID0gKCkgPT4ge30pIHtcbiAgY29uc3QgcmVzdWx0ID0gaGFuZGxlU2VuZChjaGFubmVsLCB2YWx1ZSwgb3BIYW5kbGVyKGNhbGxiYWNrKSk7XG4gIGlmIChyZXN1bHQgJiYgY2FsbGJhY2spIHtcbiAgICBjYWxsYmFjayhyZXN1bHQudmFsdWUpO1xuICB9XG59XG5cbi8qKlxuICogUmVjZWl2ZXMgYSB2YWx1ZSBmcm9tIHRoaXMgY2hhbm5lbCB3aXRob3V0IGJsb2NraW5nLlxuICpcbiAqIFRoaXMgbWVhbnMgdGhhdCBhIGNhbGwgdG8gYHJlY2VpdmVBc3luY2AgZG9lcyBub3QgZ28gaW50byBhbiBgYXdhaXRgXG4gKiBleHByZXNzaW9uLCBhbmQgaXQgaXMgbm90IG5lY2Vzc2FyeSB0byB1c2UgaXQgaW5zaWRlIGEgYXN5bmMgZnVuY3Rpb24uIFJhdGhlclxuICogdGhhbiBibG9ja2luZyB1bnRpbCBhIHZhbHVlIGJlY29tZXMgYXZhaWxhYmxlIG9uIHRoZSBjaGFubmVsIHRvIGJlIHJlY2VpdmVkLFxuICogdGhpcyBvbmUgcmV0dXJucyBpbW1lZGlhdGVseSBhbmQgdGhlbiBpbnZva2VzIHRoZSBjYWxsYmFjayAoaWYgcHJvdmlkZWQpIHdoZW5cbiAqIGEgdmFsdWUgYmVjb21lcyBhdmFpbGFibGUuIEl0IGNhbiBiZSByZWdhcmRlZCBhcyBhIG5vbi1ibG9ja2luZyB2ZXJzaW9uIG9mXG4gKiB7QGxpbmsgbW9kdWxlOmNzcC5yZWN2fHJlY3Z9YC5cbiAqXG4gKiBXaGlsZSB0aGUgcHJpbWFyeSB1c2Ugb2YgdGhpcyBmdW5jdGlvbiBpcyB0byByZWNlaXZlIHZhbHVlcyBmcm9tIGNoYW5uZWxzIGluXG4gKiBjb250ZXh0cyB3aGVyZSBiZWluZyBpbnNpZGUgYW4gYXN5bmMgZnVuY3Rpb24gaXMgaW1wb3NzaWJsZSwgaXQgY2FuIHN0aWxsIGJlXG4gKiB1c2VkIGluc2lkZSBhc3luYyBmdW5jdGlvbnMgYXQgdGltZXMgd2hlbiBpdCdzIGltcG9ydGFudCB0aGF0IHRoZSByZWNlaXZlXG4gKiBkb2Vzbid0IGJsb2NrIHRoZSBmdW5jdGlvbi5cbiAqXG4gKiBUaGUgY2FsbGJhY2sgaXMgYSBmdW5jdGlvbiBvZiBvbmUgcGFyYW1ldGVyLCBhbmQgdGhlIHZhbHVlIHN1cHBsaWVkIGZvciB0aGF0XG4gKiBwYXJhbWV0ZXIgaXMgdGhlIHZhbHVlIHJlY2VpdmVkIGZyb20gdGhlIGNoYW5uZWwgKGVpdGhlciBhIHZhbHVlIHRoYXQgd2FzXG4gKiBzZW50IG9yIGB7QGxpbmsgbW9kdWxlOmNzcC5DTE9TRUR8Q0xPU0VEfWApLiBJZiB0aGUgY2FsbGJhY2sgaXNuJ3QgcHJlc2VudCxcbiAqIG5vdGhpbmcgd2lsbCBoYXBwZW4gYWZ0ZXIgdGhlIHZhbHVlIGlzIHRha2VuLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuT3BDYWxsYmFja30gW2NhbGxiYWNrXSBBIGZ1bmN0aW9uIHRoYXQgZ2V0cyBpbnZva2VkIHdoZW4gYVxuICogICAgIHZhbHVlIGlzIG1hZGUgYXZhaWxhYmxlIHRvIGJlIHJlY2VpdmVkICh0aGlzIHZhbHVlIG1heSBiZVxuICogICAgIGB7QGxpbmsgbW9kdWxlOmNzcC5DTE9TRUR8Q0xPU0VEfWAgaWYgdGhlIGNoYW5uZWwgY2xvc2VzIHdpdGggbm9cbiAqICAgICBhdmFpbGFibGUgdmFsdWUpLiBUaGUgZnVuY3Rpb24gY2FuIHRha2Ugb25lIHBhcmFtZXRlciwgd2hpY2ggaXMgdGhlIHZhbHVlXG4gKiAgICAgdGhhdCBpcyByZWNlaXZlZCBmcm9tIHRoZSBjaGFubmVsLlxuICovXG5mdW5jdGlvbiByZWN2QXN5bmMoY2hhbm5lbCwgY2FsbGJhY2sgPSAoKSA9PiB7fSkge1xuICBjb25zdCByZXN1bHQgPSBoYW5kbGVSZWN2KGNoYW5uZWwsIG9wSGFuZGxlcihjYWxsYmFjaykpO1xuICBpZiAocmVzdWx0ICYmIGNhbGxiYWNrKSB7XG4gICAgY2FsbGJhY2socmVzdWx0LnZhbHVlKTtcbiAgfVxufVxuXG4vKipcbiAqIFNlbmRzIGEgdmFsdWUgdG8gYSBjaGFubmVsLCBibG9ja2luZyB0aGUgYXN5bmMgZnVuY3Rpb24gdW50aWwgdGhhdCB2YWx1ZSBpc1xuICogcmVjZWl2ZWQgZnJvbSB0aGUgY2hhbm5lbCBieSBhIGRpZmZlcmVudCBmdW5jdGlvbiAob3IgdW50aWwgdGhlIGNoYW5uZWxcbiAqIGNsb3NlcykuXG4gKlxuICogQSB2YWx1ZSBpcyBhbHdheXMgc2VudCB0byB0aGUgY2hhbm5lbCwgYnV0IGlmIHRoYXQgdmFsdWUgaXNuJ3Qgc3BlY2lmaWVkIGJ5XG4gKiB0aGUgc2Vjb25kIHBhcmFtZXRlciwgaXQgaXMgYHVuZGVmaW5lZGAuIEFueSB2YWx1ZSBtYXkgYmUgc2VudCB0byBhIGNoYW5uZWwsXG4gKiB3aXRoIHRoZSBzb2xlIGV4Y2VwdGlvbiBvZiB0aGUgc3BlY2lhbCB2YWx1ZVxuICogYHtAbGluayBtb2R1bGU6Y3NwLkNMT1NFRHxDTE9TRUR9YC5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uICptdXN0KiBiZSBjYWxsZWQgZnJvbSB3aXRoaW4gYW4gYXN5bmMgZnVuY3Rpb24gYW5kIGFzIHBhcnQgb2ZcbiAqIGFuIGBhd2FpdGAgZXhwcmVzc2lvbi5cbiAqXG4gKiBXaGVuIGBzZW5kYCBpcyBjb21wbGV0ZWQgYW5kIGl0cyBmdW5jdGlvbiB1bmJsb2NrcywgaXRzIGBhd2FpdGAgZXhwcmVzc2lvblxuICogZXZhbHVhdGVzIHRvIGEgc3RhdHVzIGJvb2xlYW4gdGhhdCBpbmRpY2F0ZXMgd2hhdCBjYXVzZWQgdGhlIGZ1bmN0aW9uIHRvXG4gKiB1bmJsb2NrLiBUaGF0IHZhbHVlIGlzIGB0cnVlYCBpZiB0aGUgc2VudCB2YWx1ZSB3YXMgc3VjY2Vzc2Z1bGx5IHRha2VuIGJ5XG4gKiBhbm90aGVyIHByb2Nlc3MsIG9yIGBmYWxzZWAgaWYgdGhlIHVuYmxvY2tpbmcgaGFwcGVuZWQgYmVjYXVzZSB0aGUgdGFyZ2V0XG4gKiBjaGFubmVsIGNsb3NlZC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICogQHBhcmFtIHsqfSBbdmFsdWVdIFRoZSB2YWx1ZSBiZWluZyBwdXQgb250byB0aGUgY2hhbm5lbC5cbiAqIEByZXR1cm4ge1Byb21pc2U8Ym9vbGVhbj59IEEgcHJvbWlzZSB0aGF0IHdpbGwgcmVzb2x2ZSB0byBgdHJ1ZWAgb3IgYGZhbHNlYFxuICogICAgIGRlcGVuZGluZyBvbiB3aGV0aGVyIHRoZSBwdXQgdmFsdWUgaXMgYWN0dWFsbHkgdGFrZW4uXG4gKi9cbmZ1bmN0aW9uIHNlbmQoY2hhbm5lbCwgdmFsdWUpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgIHNlbmRBc3luYyhjaGFubmVsLCB2YWx1ZSwgcmVzb2x2ZSk7XG4gIH0pO1xufVxuXG4vKipcbiAqIFJlY2VpdmVzIGEgdmFsdWUgZnJvbSB0aGlzIGNoYW5uZWwsIGJsb2NraW5nIHRoZSBhc3luYyBmdW5jdGlvbiB1bnRpbCBhIHZhbHVlXG4gKiBiZWNvbWVzIGF2YWlsYWJsZSB0byBiZSByZWNlaXZlZCAob3IgdW50aWwgdGhlIGNoYW5uZWwgY2xvc2VzIHdpdGggbm8gbW9yZVxuICogdmFsdWVzIG9uIGl0IHRvIGJlIHJlY2VpdmVkKS5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uICptdXN0KiBiZSBjYWxsZWQgZnJvbSB3aXRoaW4gYW4gYXN5bmMgZnVuY3Rpb24gYW5kIGFzIHBhcnQgb2ZcbiAqIGFuIGBhd2FpdGAgZXhwcmVzc2lvbi5cbiAqXG4gKiBXaGVuIGByZWNlaXZlYCBpcyBjb21wbGV0ZWQgYW5kIGl0cyBmdW5jdGlvbiB1bmJsb2NrcywgaXRzIGBhd2FpdGAgZXhwcmVzc2lvblxuICogZXZhbHVhdGVzIHRvIHRoZSBhY3R1YWwgdmFsdWUgdGhhdCB3YXMgcmVjZWl2ZWQuIElmIHRoZSB0YXJnZXQgY2hhbm5lbFxuICogY2xvc2VkLCB0aGVuIGFsbCBvZiB0aGUgdmFsdWVzIGFscmVhZHkgcGxhY2VkIG9udG8gaXQgYXJlIHJlc29sdmVkIGJ5XG4gKiBgcmVjZWl2ZWAgYXMgbm9ybWFsLCBhbmQgb25jZSBubyBtb3JlIHZhbHVlcyBhcmUgYXZhaWxhYmxlLCB0aGUgc3BlY2lhbCB2YWx1ZVxuICogYHtAbGluayBtb2R1bGU6Y3NwLkNMT1NFRHxDTE9TRUR9YCBpcyByZXR1cm5lZC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICogQHJldHVybiB7UHJvbWlzZX0gQSBwcm9taXNlIHRoYXQgd2lsbCByZXNvbHZlIHRvIHRoZSB2YWx1ZSByZWNlaXZlZCBmcm9tIHRoZVxuICogICAgIGNoYW5uZWwgb25jZSB0aGF0IHJlY2VpdmUgaXMgY29tcGxldGVkLiBJZiB0aGUgY2hhbm5lbCBjbG9zZXMgd2l0aG91dCBhXG4gKiAgICAgdmFsdWUgYmVpbmcgbWFkZSBhdmFpbGFibGUsIHRoaXMgd2lsbCByZXNvbHZlIHRvXG4gKiAgICAgYHtAbGluayBtb2R1bGU6Y3NwLkNMT1NFRHxDTE9TRUR9YC5cbiAqL1xuZnVuY3Rpb24gcmVjdihjaGFubmVsKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICByZWN2QXN5bmMoY2hhbm5lbCwgcmVzb2x2ZSk7XG4gIH0pO1xufVxuXG4vKipcbiAqIFJlY2VpdmVzIGEgdmFsdWUgZnJvbSBhIGNoYW5uZWwsIGJsb2NraW5nIHRoZSBhc3luYyBmdW5jdGlvbiB1bnRpbCBhIHZhbHVlXG4gKiBiZWNvbWVzIGF2YWlsYWJsZSB0byBiZSByZWNlaXZlZCAob3IgdW50aWwgdGhlIGNoYW5uZWwgY2xvc2VzIHdpdGggbm8gbW9yZVxuICogdmFsdWVzIG9uIGl0IHRvIGJlIHJlY2VpdmVkKS4gSWYgdGhlIHJlY2VpdmVkIHZhbHVlIGlzIGFuIGVycm9yIG9iamVjdCwgdGhhdFxuICogZXJyb3IgaXMgdGhyb3duIGF0IHRoYXQgcG9pbnQuXG4gKlxuICogVGhpcyBmdW5jdGlvbiAqbXVzdCogYmUgY2FsbGVkIGZyb20gd2l0aGluIGFuIGFzeW5jIGZ1bmN0aW9uIGFuZCBhcyBwYXJ0IG9mXG4gKiBhbiBgYXdhaXRgIGV4cHJlc3Npb24uXG4gKlxuICogSXQgZnVuY3Rpb25zIGluIGV2ZXJ5IHdheSBsaWtlIGB7QGxpbmsgbW9kdWxlOmNzcC5yZWN2fHJlY3Z9YCAqZXhjZXB0KiBpbiB0aGVcbiAqIGNhc2UgdGhhdCB0aGUgdmFsdWUgb24gdGhlIGNoYW5uZWwgaXMgYW4gb2JqZWN0IHRoYXQgaGFzIGBFcnJvci5wcm90b3R5cGVgIGluXG4gKiBpdHMgcHJvdG90eXBlIGNoYWluIChhbnkgYnVpbHQtaW4gZXJyb3IsIGFueSBwcm9wZXJseS1jb25zdHJ1Y3RlZCBjdXN0b21cbiAqIGVycm9yKS4gSWYgdGhhdCBoYXBwZW5zLCB0aGUgZXJyb3IgaXMgdGhyb3duLCB3aGljaCB3aWxsIGNhdXNlIHRoZSByZXR1cm5lZFxuICogcHJvbWlzZSB0byBiZSByZWplY3RlZCB3aXRoIHRoZSBlcnJvci4gSXQgY2FuIHRoZW4gYmUgaGFuZGxlZCB1cCB0aGUgcHJvbWlzZVxuICogY2hhaW4gbGlrZSBhbnkgb3RoZXIgcmVqZWN0ZWQgcHJvbWlzZS5cbiAqXG4gKiBgdGFrZU9yVGhyb3dgIGlzIHJvdWdobHkgZXF1aXZhbGVudCB0bzpcbiAqXG4gKiBgYGBcbiAqIGNvbnN0IHZhbHVlID0gYXdhaXQgcmVjdihjaCk7XG4gKiBpZiAoRXJyb3IucHJvdG90eXBlLmlzUHJvdG90eXBlT2YodmFsdWUpKSB7XG4gKiAgIHRocm93IHZhbHVlO1xuICogfVxuICogYGBgXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqIEByZXR1cm4ge1Byb21pc2V9IEEgcHJvbWlzZSB0aGF0IHdpbGwgcmVzb2x2ZSB0byB0aGUgdmFsdWUgdGFrZW4gZnJvbSB0aGVcbiAqICAgICBjaGFubmVsIG9uY2UgdGhhdCB0YWtlIGlzIGNvbXBsZXRlZC4gSWYgdGhlIGNoYW5uZWwgY2xvc2VzIHdpdGhvdXQgYVxuICogICAgIHZhbHVlIGJlaW5nIG1hZGUgYXZhaWxhYmxlLCB0aGlzIHdpbGwgcmVzb2x2ZSB0b1xuICogICAgIGB7QGxpbmsgbW9kdWxlOmNzcC5DTE9TRUR8Q0xPU0VEfWAuIElmIHRoZSB0YWtlbiB2YWx1ZSBpcyBhbiBlcnJvciwgdGhlXG4gKiAgICAgcHJvbWlzZSB3aWxsIGluc3RlYWQgYmUgcmVqZWN0ZWQgd2l0aCB0aGUgZXJyb3Igb2JqZWN0IGFzIHRoZSByZWFzb24uXG4gKi9cbmZ1bmN0aW9uIHJlY3ZPclRocm93KGNoYW5uZWwpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICByZWN2QXN5bmMoY2hhbm5lbCwgcmVzdWx0ID0+IHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmlzUHJvdG90eXBlT2YuY2FsbChFcnJvci5wcm90b3R5cGUsIHJlc3VsdCkpIHtcbiAgICAgICAgcmVqZWN0KHJlc3VsdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuXG4vKipcbiAqIENsb3NlcyB0aGUgY2hhbm5lbCwgaWYgaXQgaXNuJ3QgYWxyZWFkeSBjbG9zZWQuIFRoaXMgaW1tZWRpYXRlbHkgcmV0dXJucyBhbnlcbiAqIGJ1ZmZlcmVkIHZhbHVlcyB0byBwZW5kaW5nIHJlY2VpdmVzLiBJZiB0aGVyZSBhcmUgbm8gYnVmZmVyZWQgdmFsdWVzIChvciBpZlxuICogdGhleSd2ZSBhbHJlYWR5IGJlZW4gdGFrZW4gYnkgb3RoZXIgcmVjZWl2ZXMpLCB0aGVuIGFsbCBvZiB0aGUgcmVzdCBvZiB0aGVcbiAqIHJlY2VpdmVzIGFyZSBjb21wbGV0ZWQgd2l0aCB0aGUgdmFsdWUgb2YgYHtAbGluayBtb2R1bGU6Y3NwLkNMT1NFRHxDTE9TRUR9YC5cbiAqIEFueSBwZW5kaW5nIHNlbmRzIGFyZSBjb21wbGV0ZWQgd2l0aCB0aGUgdmFsdWUgb2YgYGZhbHNlYC5cbiAqXG4gKiBOb3RlIHRoYXQgdGhlIGJ1ZmZlciBpcyBub3QgZW1wdGllZCBpZiB0aGVyZSBhcmUgc3RpbGwgdmFsdWVzIHJlbWFpbmluZyBhZnRlclxuICogYWxsIG9mIHRoZSBwZW5kaW5nIHJlY2VpdmVzIGhhdmUgYmVlbiBoYW5kbGVkLiBUaGUgY2hhbm5lbCB3aWxsIHN0aWxsIHByb3ZpZGVcbiAqIHRob3NlIHZhbHVlcyB0byBhbnkgZnV0dXJlIHJlY2VpdmVzLCB0aG91Z2ggbm8gbmV3IHZhbHVlcyBtYXkgYmUgYWRkZWQgdG8gdGhlXG4gKiBjaGFubmVsLiBPbmNlIHRoZSBidWZmZXIgaXMgZGVwbGV0ZWQsIGFueSBmdXR1cmUgcmVjZWl2ZXMgd2lsbCByZXR1cm5cbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC5DTE9TRUR8Q0xPU0VEfWAuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5DaGFubmVsfSBjaGFubmVsIFRoZSBjaGFubmVsIHRvIGJlIGNsb3NlZC5cbiAqL1xuZnVuY3Rpb24gY2xvc2UoY2hhbm5lbCkge1xuICBjbG9zZUltcGwoY2hhbm5lbCk7XG59XG5cbmV4cG9ydCB7XG4gIENMT1NFRCxcbiAgREVGQVVMVCxcbiAgY2hhbixcbiAgdGltZWRDaGFuLFxuICB0cmFuc0NoYW4sXG4gIGlzQ2xvc2VkLFxuICBpc0J1ZmZlcmVkLFxuICBpc1RpbWVkLFxuICBzZW5kQXN5bmMsXG4gIHJlY3ZBc3luYyxcbiAgc2VsZWN0QXN5bmMsXG4gIHNlbmQsXG4gIHJlY3YsXG4gIHJlY3ZPclRocm93LFxuICBzZWxlY3QsXG4gIGNsb3NlLFxuICB2YWx1ZSxcbiAgY2hhbm5lbFxufTtcblxuLyoqXG4gKiBVc2VkIGJ5IGNoYW5uZWxzIHRvIHRyYWNrIGV4ZWN1dGlvbiBvZiBvcGVyYXRpb25zIChgc2VuZGAsIGByZWN2YCwgYW5kXG4gKiBgc2VsZWN0YCkuIFRoZXkgcHJvdmlkZSB0d28gcGllY2VzIG9mIGluZm9ybWF0aW9uOiB0aGUgZnVuY3Rpb24gdG8gY2FsbCB3aGVuXG4gKiBhIGBzZW5kYCBvciBgcmVjdmAgdW5ibG9ja3MgKGJlY2F1c2UgYSB2YWx1ZSBnaXZlbiB0byBzZW5kIGhhcyBiZWVuIHJlY2VpdmVkLFxuICogb3IgYSBgcmVjdmAgaGFzIGFjY2VwdGVkIGEgdmFsdWUgdGhhdCBoYXMgYmVlbiBzZW50KSBhbmQgd2hldGhlciBvciBub3QgdGhlXG4gKiBoYW5kbGVyIGlzIHN0aWxsIGFjdGl2ZS5cbiAqXG4gKiBUaGUgZnVuY3Rpb24gaXMgYSBjYWxsYmFjayB0aGF0IGFjdHVhbGx5IGRlZmluZXMgdGhlIGRpZmZlcmVuY2UgYmV0d2VlblxuICogYHtAbGluayBtb2R1bGU6Y3NwLnNlbmR8c2VuZH1gIC8gYHtAbGluayBtb2R1bGU6Y3NwLnJlY3Z8cmVjdn1gIC9cbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC5zZWxlY3R8c2VsZWN0fWAgYW5kXG4gKiBge0BsaW5rIG1vZHVsZTpjc3Auc2VuZEFzeW5jfHNlbmRBc3luY31gIC9cbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC5yZWN2QXN5bmN8cmVjdkFzeW5jfWAgL1xuICogYHtAbGluayBtb2R1bGU6Y3NwLnNlbGVjdEFzeW5jfHNlbGVjdEFzeW5jfWA6IHdoaWxlIHRoZSB1bmJsb2NrZWQgY2FsbHMgdXNlXG4gKiB0aGUgY2FsbGJhY2sgcGFzc2VkIHRvIHRoZSBmdW5jdGlvbiwgYHNlbmRgLCBgcmVjdmAsIGFuZCBgc2VsZWN0YCBzaW1wbHlcbiAqIGNvbnRpbnVlIHRoZSBwcm9jZXNzIHdoZXJlIGl0IGxlZnQgb2ZmLiAoVGhpcyBpcyB3aHkgYHNlbmRgLCBgcmVjdmAsIGFuZFxuICogYHNlbGVjdGAgb25seSB3b3JrIGluc2lkZSBgYXN5bmNgIGZ1bmN0aW9ucyB3aXRoIGBhd2FpdGAgaWYgdGhlIHJldHVybiB2YWx1ZVxuICogaXMgbmVlZGVkLCBiZWNhdXNlIG90aGVyd2lzZSB0aGVyZSdzIG5vIHByb2Nlc3MgdG8gY29udGludWUuKVxuICpcbiAqIFRoaXMgZnVuY3Rpb24gaXMgcHJvdmlkZWQgYXMgdGhlIHJldHVybiB2YWx1ZSBvZiB0aGUgYGNvbW1pdGAgbWV0aG9kLiBDYWxsaW5nXG4gKiBgY29tbWl0YCBoYXMgbm8gZXh0cmEgZWZmZWN0IHdpdGggYHNlbmRgIGFuZCBgcmVjdmAgb3BlcmF0aW9ucywgYnV0IGZvclxuICogYHNlbGVjdGAsIGl0IGFsc28gbWFya3MgdGhlIGhhbmRsZXIgYXMgbm8gbG9uZ2VyIGJlaW5nIGFjdGl2ZS4gVGhpcyBtZWFuc1xuICogdGhhdCBvbmx5IG9uZSBvZiB0aGUgb3BlcmF0aW9ucyBwYXNzZWQgdG8gc2VsZWN0IGNhbiBiZSBjb21wbGV0ZWQsIGJlY2F1c2VcbiAqIGFmdGVyIHRoZSBmaXJzdCBvbmUsIHRoZSBoYW5kbGVyIGlzIG5vIGxvbmdlciBhY3RpdmUgYW5kIHdpbGwgbm90IGJlIGFsbG93ZWRcbiAqIHRvIHByb2Nlc3MgYSBzZWNvbmQgb3BlcmF0aW9uLlxuICpcbiAqIElmIGEgYHNlbmRgIG9yIGByZWN2YCAob3IgZXF1aXZhbGVudCBgc2VsZWN0YCBvcGVyYXRpb24pIGNhbm5vdCBiZVxuICogaW1tZWRpYXRlbHkgY29tcGxldGVkIGJlY2F1c2UgdGhlcmUgaXNuJ3QgYSBjb3JyZXNwb25kaW5nIHBlbmRpbmcgYHJlY3ZgIG9yXG4gKiBgc2VuZGAsIHRoZSBoYW5kbGVyIGlzIHF1ZXVlZCB0byBiZSBydW4gd2hlbiBhIG5ldyBgcmVjdmAgb3IgYHNlbmRgIGJlY29tZXNcbiAqIGF2YWlsYWJsZS5cbiAqXG4gKiBAdHlwZWRlZiBIYW5kbGVyXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcC9jaGFubmVsXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IGFjdGl2ZSBXaGV0aGVyIG9yIG5vdCB0aGUgb3BlcmF0aW9uIGlzIHN0aWxsIGFjdGl2ZS4gQW5cbiAqICAgICBpbmFjdGl2ZSBvcGVyYXRpb24gaXMgbm90IHNlcnZpY2VkIGFuZCB3aWxsIGJlIGNsZWFyZWQgZnJvbSB0aGUgcXVldWUgb25cbiAqICAgICB0aGUgbmV4dCBkaXJ0eSBvcGVyYXRpb24gcHVyZ2UuXG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBjb21taXQgTWFya3MgdGhlIGhhbmRsZXIgYXMgaW5hY3RpdmUgKHNvIGl0IGRvZXNuJ3QgcnVuXG4gKiAgICAgdHdpY2UpIGFuZCByZXR1cm5zIHRoZSBjYWxsYmFjayB0byBiZSBydW4gd2hlbiB0aGUgb3BlcmF0aW9uIGNvbXBsZXRlcy5cbiAqIEBwcml2YXRlXG4gKi9cblxuLyoqXG4gKiBBIGNhbGxiYWNrIGZ1bmN0aW9uIHJ1biB3aGVuIGEgYHNlbmRgIG9yIGByZWN2YCBvcGVyYXRpb24gY29tcGxldGVzLlxuICpcbiAqIEBjYWxsYmFjayBIYW5kbGVyQ2FsbGJhY2tcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwL2NoYW5uZWxcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHByb3ZpZGVkIGJ5IHRoZSBjaGFubmVsLiBJbiBhIGByZWN2YCwgdGhpcyBpcyB0aGVcbiAqICAgICB2YWx1ZSByZWNlaXZlZCBmcm9tIHRoZSBjaGFubmVsLiBJbiBhIGBzZW5kYCwgdGhpcyBpcyBgdHJ1ZWAgZm9yIGFcbiAqICAgICBzdWNjZXNzZnVsIHNlbmQgYW5kIGBmYWxzZWAgaWYgdGhlIGNoYW5uZWwgaXMgY2xvc2VkIGJlZm9yZSB0aGUgc2VuZCBjYW5cbiAqICAgICBjb21wbGV0ZS5cbiAqIEBwcml2YXRlXG4gKi9cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG5pbXBvcnQgeyBib3gsIGhhbmRsZVNlbmQsIGhhbmRsZVJlY3YsIGlzQm94IH0gZnJvbSBcIi4vaGFuZGxlclwiO1xuXG4vKipcbiAqIFRoZSBuYW1lIG9mIHRoZSBjaGFubmVsIHJldHVybmVkIGZyb20gYGF3YWl0XG4gKiB7QGxpbmsgbW9kdWxlOmNzcC5zZWxlY3R8c2VsZWN0fWAgb3Igc2VudCB0byB0aGUgY2FsbGJhY2sgaW5cbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC5zZWxlY3RBc3luY3xzZWxlY3RBc3luY31gIHdoZW4gdGhlIGRlZmF1bHQgaXMgcmV0dXJuZWQgYXNcbiAqIGl0cyB2YWx1ZS5cbiAqXG4gKiBUaGlzIG9ubHkgaGFwcGVucyB3aGVuIGFuIGB7QGxpbmsgbW9kdWxlOmNzcC5zZWxlY3R8c2VsZWN0fSAvXG4gKiB7QGxpbmsgbW9kdWxlOmNzcC5zZWxlY3RBc3luY3xzZWxlY3RBc3luY31gIGNhbGwgaXMgcGVyZm9ybWVkLCBhbGwgb3BlcmF0aW9uc1xuICogYXJlIGluaXRpYWxseSBibG9ja2luZywgYW5kIGEgYGRlZmF1bHRgIG9wdGlvbiBpcyBzZW50LiBUaGUgaW1tZWRpYXRlXG4gKiByZXNwb25zZSBpbiB0aGF0IHNpdHVhdGlvbiBpcyBgeyB2YWx1ZTogb3B0aW9ucy5kZWZhdWx0LCBjaGFubmVsOiBERUZBVUxUIH1gLlxuICpcbiAqIEB0eXBlIHtTeW1ib2x9XG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICovXG5jb25zdCBERUZBVUxUID0gU3ltYm9sKFwiREVGQVVMVFwiKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGhhbmRsZXIgdXNlZCBmb3IgYHNlbGVjdGAgb3BlcmF0aW9ucy5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcC9jaGFubmVsXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AvY2hhbm5lbC5Cb3h9IGFjdGl2ZSBBIGJveGVkIHZhbHVlIGluZGljYXRpbmcgd2hldGhlciB0aGVcbiAqICAgICBoYW5kbGVyIGlzIHZhbGlkLiBUaGlzIGlzIGEgYm94ZWQgdmFsdWUgYmVjYXVzZSB0aGUgc2VsZWN0LWhhbmRsaW5nIGNvZGVcbiAqICAgICBuZWVkcyB0byBtYW5pcHVsYXRlIGl0IGRpcmVjdGx5LlxuICogQHBhcmFtIHttb2R1bGU6Y3NwL2NoYW5uZWwuSGFuZGxlckNhbGxiYWNrfSBmbiBUaGUgY2FsbGJhY2sgdG8gYmUgcnVuIHdoZW5cbiAqICAgICAoYW5kIGlmKSB0aGUgb3BlcmF0aW9uIGNvbXBsZXRlcy5cbiAqIEByZXR1cm4ge21vZHVsZTpjc3AvY2hhbm5lbC5IYW5kbGVyfSBUaGUgbmV3IGhhbmRsZXIuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBzZWxlY3RIYW5kbGVyKGFjdGl2ZSwgZm4pIHtcbiAgcmV0dXJuIE9iamVjdC5jcmVhdGUobnVsbCwge1xuICAgIGFjdGl2ZToge1xuICAgICAgZ2V0KCkge1xuICAgICAgICByZXR1cm4gYWN0aXZlLnZhbHVlO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBjb21taXQ6IHtcbiAgICAgIHZhbHVlOiAoKSA9PiB7XG4gICAgICAgIGFjdGl2ZS52YWx1ZSA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gZm47XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgcmFuZG9tbHkgc2h1ZmZsZWQgYXJyYXkgY29udGFpbmluZyBvbmUgb2YgZWFjaCBpbnRlZ2VyIHZhbHVlIGZyb21cbiAqIGAwYCB0byBhbiB1cHBlciBsaW1pdC4gSXQgaXMgdXNlZCB0byByYW5kb21seSBzZWxlY3QgYSBjaGFubmVsIHRvIGJlIGFjdGl2ZVxuICogd2hlbiBtdWx0aXBsZXMgdW5ibG9jayBpbiBhIGBzZWxlY3RgIG9wZXJhdGlvbi5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcC9jaGFubmVsXG4gKiBAcGFyYW0ge251bWJlcn0gdXBwZXIgVGhlIHVwcGVyIGxpbWl0IG9mIHRoZSBhcnJheSB2YWx1ZXMsIGV4Y2x1c2l2ZS5cbiAqIEByZXR1cm4ge251bWJlcltdfSBBbiBhcnJheSBvZiBpbnRlZ2VycyBmcm9tIGAwYCB0byBgdXBwZXIgLSAxYCwgc2h1ZmZsZWRcbiAqICAgICBpbnRvIGEgcmFuZG9tIG9yZGVyLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gcmFuZG9tQXJyYXkodXBwZXIpIHtcbiAgY29uc3QgYXJyYXkgPSBbXTtcbiAgZm9yIChsZXQgayA9IDA7IGsgPCB1cHBlcjsgaysrKSB7XG4gICAgYXJyYXkucHVzaChrKTtcbiAgfVxuICBmb3IgKGxldCBqID0gdXBwZXIgLSAxOyBqID4gMDsgai0tKSB7XG4gICAgY29uc3QgaSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChqICsgMSkpO1xuICAgIGNvbnN0IHRlbXAgPSBhcnJheVtqXTtcbiAgICBhcnJheVtqXSA9IGFycmF5W2ldO1xuICAgIGFycmF5W2ldID0gdGVtcDtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbi8qKlxuICogQSByZXN1bHQgdGhhdCBjb21lcyBmcm9tIGBzZWxlY3RgIG9wZXJhdGlvbnMuXG4gKlxuICogQHR5cGVkZWYgU2VsZWN0UmVzdWx0XG4gKiBAcHJvcGVydHkgeyp9IHZhbHVlIElmIHRoZSBgc2VsZWN0YCBvcGVyYXRpb24gcmVzdWx0ZWQgaW4gYSByZWNlaXZlLCB0aGlzIGlzXG4gKiAgICAgdGhlIHZhbHVlIHJlY2VpdmVkIGZyb20gdGhlIGNoYW5uZWwuIElmIGl0IHJlc3VsdGVkIGluIGEgc2VuZCwgdGhpcyBpc1xuICogICAgIGB0cnVlYCBmb3IgYSBzdWNjZXNzZnVsIHNlbmQgYW5kIGBmYWxzZWAgaWYgdGhlIGNoYW5uZWwgY2xvc2VkIGZpcnN0LlxuICogQHByb3BlcnR5IHttb2R1bGU6Y3NwLkNoYW5uZWx9IGNoYW5uZWwgVGhlIGNoYW5uZWwgdXBvbiB3aGljaCB0aGUgc2VsZWN0ZWRcbiAqICAgICBvcGVyYXRpb24gaGFwcGVuZWQuXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICovXG5cbi8qKlxuICogQ3JlYXRlcyBhIHNlbGVjdCByZXN1bHQgZnJvbSBpdHMgY29tcG9uZW50IHByb3BlcnRpZXMuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3AvY2hhbm5lbFxuICogQHBhcmFtIHsqfSB2YWx1ZSBJZiB0aGUgYHNlbGVjdGAgb3BlcmF0aW9uIHJlc3VsdGVkIGluIGEgcmVjZWl2ZSwgdGhpcyBpcyB0aGVcbiAqICAgICB2YWx1ZSByZWNlaXZlZCBmcm9tIHRoZSBjaGFubmVsLiBJZiBpdCByZXN1bHRlZCBpbiBhIHNlbmQsIHRoaXMgaXMgYHRydWVgXG4gKiAgICAgZm9yIGEgc3VjY2Vzc2Z1bCBzZW5kIGFuZCBgZmFsc2VgIGlmIHRoZSBjaGFubmVsIGNsb3NlZCBmaXJzdC5cbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5DaGFubmVsfSBjaGFubmVsIFRoZSBjaGFubmVsIHVwb24gd2hpY2ggdGhlIHNlbGVjdGVkXG4gKiAgICAgb3BlcmF0aW9uIGhhcHBlbmVkLlxuICogQHJldHVybiB7bW9kdWxlOmNzcC5TZWxlY3RSZXN1bHR9IFRoZSBwcm9wZXJ0aWVzIHdyYXBwZWQgaW50byBhbiBvYmplY3QgZm9yXG4gKiAgICAgb3V0cHV0LlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gc2VsZWN0UmVzdWx0KHZhbHVlLCBjaGFubmVsKSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5jcmVhdGUobnVsbCksIHsgdmFsdWUsIGNoYW5uZWwgfSk7XG59XG5cbi8qKlxuICogQ29tcGxldGVzIHRoZSBmaXJzdCBvcGVyYXRpb24gYW1vbmcgdGhlIHByb3ZpZGVkIG9wZXJhdGlvbnMgdGhhdCBjb21lc1xuICogYXZhaWxhYmxlLCB3aXRob3V0IGJsb2NraW5nLlxuICpcbiAqIFRoaXMgbWVhbnMgdGhhdCBhIGNhbGwgdG8gYHNlbGVjdEFzeW5jYCBkb2VzIG5vdCBnbyBpbnRvIGFuIGBhd2FpdGBcbiAqIGV4cHJlc3Npb24sIGFuZCBpdCBpcyBub3QgbmVjZXNzYXJ5IHRvIHVzZSBpdCBpbnNpZGUgYSBwcm9jZXNzLiBSYXRoZXIgdGhhblxuICogYmxvY2tpbmcgdW50aWwgYW4gb3BlcmF0aW9uIGNvbXBsZXRlcywgdGhpcyBvbmUgcmV0dXJucyBpbW1lZGlhdGVseSBhbmQgdGhlblxuICogaW52b2tlcyB0aGUgY2FsbGJhY2sgKGlmIHByb3ZpZGVkKSBhcyBzb29uIGFzIG9uZSBvZiB0aGUgc3VwcGxpZWQgb3BlcmF0aW9uc1xuICogY29tcGxldGVzLiBJdCBjYW4gYmUgcmVnYXJkZWQgYXMgYSBub24tYmxvY2tpbmcgdmVyc2lvbiBvZlxuICogYHtAbGluayBtb2R1bGU6Y3NwLnNlbGVjdHxzZWxlY3R9YC5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHVzZXMgYW4gb3BlcmF0aW9ucyBsaXN0IHRoYXQncyBpZGVudGljYWwgdG8gdGhlIG9uZSB1c2VkIGJ5XG4gKiBge0BsaW5rIG1vZHVsZTpjc3Auc2VsZWN0fHNlbGVjdH1gLiBJdCdzIGFuIGFycmF5IG9mIHZhbHVlczsgaWYgYSB2YWx1ZSBpcyBhXG4gKiBjaGFubmVsLCB0aGVuIHRoYXQgb3BlcmF0aW9uIGlzIGEgdGFrZSBvbiB0aGF0IGNoYW5uZWwsIHdoaWxlIGlmIGl0J3MgYVxuICogdHdvLWVsZW1lbnQgYXJyYXkgb2YgY2hhbm5lbCBhbmQgdmFsdWUsIHRoZW4gdGhhdCBvcGVyYXRpb24gaXMgYSBwdXQgb2YgdGhhdFxuICogdmFsdWUgb250byB0aGF0IGNoYW5uZWwuIEFsbCBvcHRpb25zIHRoYXQgYXJlIGF2YWlsYWJsZSB0b1xuICogYHtAbGluayBtb2R1bGU6Y3NwLnNlbGVjdHxzZWxlY3R9YCBhcmUgYWxzbyBhdmFpbGFibGUgaGVyZS5cbiAqXG4gKiBUaGUgY2FsbGJhY2sgaXMgYSBmdW5jdGlvbiBvZiBvbmUgcGFyYW1ldGVyLCB3aGljaCBpbiB0aGlzIGNhc2UgaXMgYW4gb2JqZWN0XG4gKiB3aXRoIGB2YWx1ZWAgYW5kIGBjaGFubmVsYCBwcm9wZXJ0aWVzLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcGFyYW0ge09iamVjdFtdfSBvcGVyYXRpb25zIEEgY29sbGVjdGlvbiBvZiBlbGVtZW50cyB0aGF0IGNvcnJlc3BvbmQgdG8gcmVjdlxuICogICAgIGFuZCBzZW5kIG9wZXJhdGlvbnMuIEEgcmVjdiBvcGVyYXRpb24gaXMgc2lnbmlmaWVkIGJ5IGFuIGVsZW1lbnQgdGhhdCBpc1xuICogICAgIGEgY2hhbm5lbCAod2hpY2ggaXMgdGhlIGNoYW5uZWwgdG8gYmUgcmVjZWl2ZWQgZnJvbSkuIEEgc2VuZCBvcGVyYXRpb24gaXNcbiAqICAgICBzcGVjaWZpZWQgYnkgYW4gZWxlbWVudCB0aGF0IGlzIGl0c2VsZiBhIHR3by1lbGVtZW50IGFycmF5LCB3aGljaCBoYXMgYVxuICogICAgIGNoYW5uZWwgZm9sbG93ZWQgYnkgYSB2YWx1ZSAod2hpY2ggaXMgdGhlIGNoYW5uZWwgYW5kIHZhbHVlIHRvIGJlIHNlbnQpLlxuICogQHBhcmFtIHttb2R1bGU6Y3NwLlNlbGVjdENhbGxiYWNrfSBjYWxsYmFjayBBIGZ1bmN0aW9uIHRoYXQgZ2V0cyBpbnZva2VkIHdoZW5cbiAqICAgICBvbmUgb2YgdGhlIG9wZXJhdGlvbnMgY29tcGxldGVzLlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSBBbiBvcHRpb25hbCBvYmplY3Qgd2hpY2ggY2FuIGNoYW5nZSB0aGUgYmVoYXZpb3JcbiAqICAgICBvZiBgc2VsZWN0QXN5bmNgIHRocm91Z2ggdHdvIHByb3BlcnRpZXMuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnByaW9yaXR5PWZhbHNlXSBJZiBgdHJ1ZWAsIHRoZW4gdGhlIHByaW9yaXR5IG9mXG4gKiAgICAgb3BlcmF0aW9ucyB0byBjb21wbGV0ZSB3aGVuIG1vcmUgdGhhbiBvbmUgaXMgaW1tZWRpYXRlbHkgYXZhaWxhYmxlIGlzIGFcbiAqICAgICBwcmlvcml0eSBhY2NvcmRpbmcgdG8gcG9zaXRpb24gd2l0aGluIHRoZSBvcGVyYXRpb25zIGFycmF5IChlYXJsaWVyXG4gKiAgICAgcG9zaXRpb25zIGhhdmUgdGhlIGhpZ2hlciBwcmlvcml0eSkuIElmIGBmYWxzZWAgb3Igbm90IHByZXNlbnQsIHRoZVxuICogICAgIHByaW9ydHkgb2Ygb3BlcmF0aW9uIGNvbXBsZXRpb24gaXMgcmFuZG9tLlxuICogQHBhcmFtIHsqfSBbb3B0aW9ucy5kZWZhdWx0XSBJZiBzZXQgYW5kIGFsbCBvZiB0aGUgb3BlcmF0aW9ucyBpbml0aWFsbHlcbiAqICAgICBibG9jaywgdGhlIGBzZWxlY3RBc3luY2AgY2FsbHMgaXRzIGNhbGxiYWNrIGltbWVkaWF0ZWx5IHdpdGggdGhlIHZhbHVlIG9mXG4gKiAgICAgdGhpcyBvcHRpb24gKHRoZSBjaGFubmVsIHdpbGwgYmUgYHtAbGluayBtb2R1bGU6Y3NwLkRFRkFVTFR8REVGQVVMVH0pYC5cbiAqICAgICBJZiBub3Qgc2V0LCB0aGUgYHNlbGVjdEFzeW5jYCBjYWxsIHdpbGwgbm90IGNhbGwgaXRzIGNhbGxiYWNrIHVudGlsIG9uZVxuICogICAgIG9mIHRoZSBvcGVyYXRpb25zIGNvbXBsZXRlcyBhbmQgdGhhdCB2YWx1ZSBhbmQgY2hhbm5lbCB3aWxsIGJlIHRoZSBvbmVzXG4gKiAgICAgcmV0dXJuZWQuXG4gKi9cbmZ1bmN0aW9uIHNlbGVjdEFzeW5jKG9wcywgY2FsbGJhY2sgPSAoKSA9PiB7fSwgb3B0aW9ucyA9IHt9KSB7XG4gIGNvbnN0IGNvdW50ID0gb3BzLmxlbmd0aDtcbiAgaWYgKGNvdW50ID09PSAwKSB7XG4gICAgdGhyb3cgRXJyb3IoXCJzZWxlY3QgY2FsbGVkIHdpdGggbm8gb3BlcmF0aW9uc1wiKTtcbiAgfVxuXG4gIGNvbnN0IHByaW9yaXR5ID0gISFvcHRpb25zLnByaW9yaXR5O1xuICBjb25zdCBpbmRpY2VzID0gcHJpb3JpdHkgPyBbXSA6IHJhbmRvbUFycmF5KGNvdW50KTtcblxuICBjb25zdCBhY3RpdmUgPSBib3godHJ1ZSk7XG5cbiAgZnVuY3Rpb24gY3JlYXRlU2VsZWN0SGFuZGxlcihjaGFubmVsKSB7XG4gICAgcmV0dXJuIHNlbGVjdEhhbmRsZXIoYWN0aXZlLCB2YWx1ZSA9PiB7XG4gICAgICBjYWxsYmFjayhzZWxlY3RSZXN1bHQodmFsdWUsIGNoYW5uZWwpKTtcbiAgICB9KTtcbiAgfVxuXG4gIGxldCByZXN1bHQ7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgLy8gQ2hvb3NlIGFuIG9wZXJhdGlvbi4gSWYgYHByaW9yaXR5YCBpcyB0cnVlIHRoZW4gaXQncyB0aGUgbmV4dCBpbmRleCxcbiAgICAvLyBvdGhlcndpc2UgaXQncyByYW5kb21cbiAgICBjb25zdCBvcCA9IG9wc1twcmlvcml0eSA/IGkgOiBpbmRpY2VzW2ldXTtcbiAgICBsZXQgY2hhbm5lbCwgdmFsdWU7XG5cbiAgICAvLyBBcHBseSBldmVyeSBvcGVyYXRpb24gdG8gaXRzIGNoYW5uZWwsIG9uZSBhdCBhIHRpbWVcbiAgICBpZiAoQXJyYXkuaXNBcnJheShvcCkpIHtcbiAgICAgIFtjaGFubmVsLCB2YWx1ZV0gPSBvcDtcbiAgICAgIHJlc3VsdCA9IGhhbmRsZVNlbmQoY2hhbm5lbCwgdmFsdWUsIGNyZWF0ZVNlbGVjdEhhbmRsZXIoY2hhbm5lbCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjaGFubmVsID0gb3A7XG4gICAgICByZXN1bHQgPSBoYW5kbGVSZWN2KGNoYW5uZWwsIGNyZWF0ZVNlbGVjdEhhbmRsZXIoY2hhbm5lbCkpO1xuICAgIH1cblxuICAgIC8vIFdlIGNoZWNrIGZvciBib3ggaGVyZSBiZWNhdXNlIGEgYm94IGZyb20gYSBjaGFubmVsIGluZGljYXRlcyB0aGF0IHRoZVxuICAgIC8vIHZhbHVlIGlzIGltbWVkaWF0ZWx5IGF2YWlsYWJsZSAodGhhdCB0aGVyZSBpcyBubyBuZWVkIHRvIGJsb2NrIHRvIGdldCB0aGVcbiAgICAvLyB2YWx1ZSkuIElmIHRoaXMgaGFwcGVucywgd2UgZXhlY3V0ZSB0aGUgY2FsbGJhY2sgaW1tZWRpYXRlbHkgd2l0aCB0aGF0XG4gICAgLy8gdmFsdWUgYW5kIGNoYW5uZWwgYW5kIHN0b3AgcXVldWVpbmcgb3RoZXIgb3BlcmF0aW9ucy5cbiAgICBpZiAoaXNCb3gocmVzdWx0KSkge1xuICAgICAgY2FsbGJhY2soc2VsZWN0UmVzdWx0KHJlc3VsdC52YWx1ZSwgY2hhbm5lbCkpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgLy8gSWYgbm9uZSBvZiB0aGUgb3BlcmFldGlvbnMgaW1tZWRpYXRlbHkgcmV0dXJuZWQgdmFsdWVzICh0aGV5IGFyZSBhbGxcbiAgLy8gYmxvY2tlZCksIGFuZCB3ZSBoYXZlIHNldCBhIGRlZmF1bHQgY2hhbm5lbCBvcHRpb24sIHRoZW4gcmV0dXJuIHRoZSB2YWx1ZVxuICAvLyBpZiB0aGUgZGVmYXVsdCBjaGFubmVsIHJhdGhlciB0aGFuIHdhaXRpbmcgZm9yIHRoZSBxdWV1ZWQgb3BlcmF0aW9ucyB0b1xuICAvLyBjb21wbGV0ZS5cbiAgaWYgKFxuICAgICFpc0JveChyZXN1bHQpICYmXG4gICAgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9wdGlvbnMsIFwiZGVmYXVsdFwiKVxuICApIHtcbiAgICBpZiAoYWN0aXZlLnZhbHVlKSB7XG4gICAgICBhY3RpdmUudmFsdWUgPSBmYWxzZTtcbiAgICAgIGNhbGxiYWNrKHNlbGVjdFJlc3VsdChvcHRpb25zLmRlZmF1bHQsIERFRkFVTFQpKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBDb21wbGV0ZXMgdGhlIGZpcnN0IG9wZXJhdGlvbiBhbW9uZyB0aGUgcHJvdmlkZWQgb3BlcmF0aW9ucyB0aGF0IGNvbWVzXG4gKiBhdmFpbGFibGUsIGJsb2NraW5nIHRoZSBwcm9jZXNzIHVudGlsIHRoZW4uXG4gKlxuICogYG9wZXJhdGlvbnNgIGlzIGFuIGFycmF5IHdob3NlIGVsZW1lbnRzIG11c3QgYmUgY2hhbm5lbHMgb3IgdHdvLWVsZW1lbnRcbiAqIHN1Yi1hcnJheXMgb2YgY2hhbm5lbHMgYW5kIHZhbHVlcywgaW4gYW55IGNvbWJpbmF0aW9uLiBBbiBvcGVyYXRpb24gdGhhdCBpcyBhXG4gKiBjaGFubmVsIGlzIGEgdGFrZSBvcGVyYXRpb24gb24gdGhhdCBjaGFubmVsLiBBbiBvcGVyYXRpb24gdGhhdCBpcyBhXG4gKiB0d28tZWxlbWVudCBhcnJheSBpcyBhIHB1dCBvcGVyYXRpb24gb24gdGhhdCBjaGFubmVsIHVzaW5nIHRoYXQgdmFsdWUuXG4gKiBFeGFjdGx5IG9uZSBvZiB0aGVzZSBvcGVyYXRpb25zIHdpbGwgY29tcGxldGUsIGFuZCBpdCB3aWxsIGJlIHRoZSBmaXJzdFxuICogb3BlcmF0aW9uIHRoYXQgdW5ibG9ja3MuXG4gKlxuICogVGhpcyBmdW5jdGlvbiAqbXVzdCogYmUgY2FsbGVkIGZyb20gd2l0aGluIGFuIGBhc3luY2AgZnVuY3Rpb24gYW5kIGFzIHBhcnQgb2ZcbiAqIGFuIGBhd2FpdGAgZXhwcmVzc2lvbiBpZiB0aGUgcmV0dXJuIHZhbHVlIGlzIG5lZWRlZC5cbiAqXG4gKiBXaGVuIGBzZWxlY3RgIGlzIGNvbXBsZXRlZCBhbmQgaXRzIHByb2Nlc3MgdW5ibG9ja3MsIGl0cyBgYXdhaXRgIGV4cHJlc3Npb25cbiAqIGV2YWx1YXRlcyB0byBhbiBvYmplY3Qgb2YgdHdvIHByb3BlcnRpZXMuIFRoZSBgdmFsdWVgIHByb3BlcnR5IGJlY29tZXNcbiAqIGV4YWN0bHkgd2hhdCB3b3VsZCBoYXZlIGJlZW4gcmV0dXJuZWQgYnkgdGhlIGVxdWl2YWxlbnQgYGF3YWl0IHB1dGAgb3IgYGF3YWl0XG4gKiB0YWtlYCBvcGVyYXRpb246IGEgYm9vbGVhbiBpbiB0aGUgY2FzZSBvZiBhIHB1dCwgb3IgdGhlIHRha2VuIHZhbHVlIGluIHRoZVxuICogY2FzZSBvZiBhIHRha2UuIFRoZSBgY2hhbm5lbGAgcHJvcGVydHkgaXMgc2V0IHRvIHRoZSBjaGFubmVsIHdoZXJlIHRoZVxuICogb3BlcmF0aW9uIGFjdHVhbGx5IHRvb2sgcGxhY2UuIFRoaXMgd2lsbCBiZSBlcXVpdmFsZW50IHRvIHRoZSBjaGFubmVsIGluIHRoZVxuICogYG9wZXJhdGlvbnNgIGFycmF5IHdoaWNoIGNvbXBsZXRlZCBmaXJzdCwgYWxsb3dpbmcgdGhlIHByb2Nlc3MgdG8gdW5ibG9jay5cbiAqXG4gKiBJZiB0aGVyZSBpcyBtb3JlIHRoYW4gb25lIG9wZXJhdGlvbiBhbHJlYWR5IGF2YWlsYWJsZSB0byBjb21wbGV0ZSB3aGVuIHRoZVxuICogY2FsbCB0byBgc2VsZWN0YCBpcyBtYWRlLCB0aGUgb3BlcmF0aW9uIHdpdGggdGhlIGhpZ2hlc3QgcHJpb3JpdHkgd2lsbCBiZSB0aGVcbiAqIG9uZSB0byBjb21wbGV0ZS4gUmVndWxhcmx5LCBwcmlvcml0eSBpcyBub24tZGV0ZXJtaW5pc3RpYyAoaS5lLiwgaXQncyBzZXRcbiAqIHJhbmRvbWx5KS4gSG93ZXZlciwgaWYgdGhlIG9wdGlvbnMgb2JqZWN0IGhhcyBhIGBwcmlvcml0eWAgdmFsdWUgc2V0IHRvXG4gKiBgdHJ1ZWAsIHByaW9yaXR5IHdpbGwgYmUgYXNzaWduZWQgaW4gdGhlIG9yZGVyIG9mIHRoZSBvcGVyYXRpb25zIGluIHRoZVxuICogc3VwcGxpZWQgYXJyYXkuXG4gKlxuICogSWYgYWxsIG9mIHRoZSBvcGVyYXRpb25zIG11c3QgYmxvY2sgKGkuZS4sIHRoZXJlIGFyZSBubyBwZW5kaW5nIHB1dHMgZm9yIHRha2VcbiAqIG9wZXJhdGlvbnMsIG9yIHRha2VzIGZvciBwdXQgb3BlcmF0aW9ucyksIGEgZGVmYXVsdCB2YWx1ZSBtYXkgYmUgcmV0dXJuZWQuXG4gKiBUaGlzIGlzIG9ubHkgZG9uZSBpZiB0aGVyZSBpcyBhIGBkZWZhdWx0YCBwcm9wZXJ0eSBpbiB0aGUgb3B0aW9ucyBvYmplY3QsIGFuZFxuICogdGhlIHZhbHVlIG9mIHRoYXQgcHJvcGVydHkgYmVjb21lcyB0aGUgdmFsdWUgcmV0dXJuZWQgYnkgYGF3YWl0IHNlbGVjdGAuIFRoZVxuICogY2hhbm5lbCBpcyBzZXQgdG8gdGhlIHNwZWNpYWwgdmFsdWUgYHtAbGluayBtb2R1bGU6Y3NwLkRFRkFVTFR8REVGQVVMVH1gLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcGFyYW0ge29iamVjdFtdfSBvcGVyYXRpb25zIEEgY29sbGVjdGlvbiBvZiBlbGVtZW50cyB0aGF0IGNvcnJlc3BvbmQgdG8gcmVjdlxuICogICAgIGFuZCBzZW5kIG9wZXJhdGlvbnMuIEEgcmVjdiBvcGVyYXRpb24gaXMgc2lnbmlmaWVkIGJ5IGFuIGVsZW1lbnQgdGhhdCBpc1xuICogICAgIGEgY2hhbm5lbCAod2hpY2ggaXMgdGhlIGNoYW5uZWwgdG8gYmUgdGFrZW4gZnJvbSkuIEEgc2VuZCBvcGVyYXRpb24gaXNcbiAqICAgICBzcGVjaWZpZWQgYnkgYW4gZWxlbWVudCB0aGF0IGlzIGl0c2VsZiBhIHR3by1lbGVtZW50IGFycmF5LCB3aGljaCBoYXMgYVxuICogICAgIGNoYW5uZWwgZm9sbG93ZWQgYnkgYSB2YWx1ZSAod2hpY2ggaXMgdGhlIGNoYW5uZWwgYW5kIHZhbHVlIHRvIGJlIHNlbnQpLlxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zPXt9XSBBbiBvcHRpb25hbCBvYmplY3Qgd2hpY2ggY2FuIGNoYW5nZSB0aGUgYmVoYXZpb3JcbiAqICAgICBvZiBgc2VsZWN0YCB0aHJvdWdoIHR3byBwcm9wZXJ0aWVzLlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5wcmlvcml0eT1mYWxzZV0gSWYgYHRydWVgLCB0aGVuIHRoZSBwcmlvcml0eSBvZlxuICogICAgIG9wZXJhdGlvbnMgdG8gY29tcGxldGUgd2hlbiBtb3JlIHRoYW4gb25lIGlzIGltbWVkaWF0ZWx5IGF2YWlsYWJsZSBpcyBhXG4gKiAgICAgcHJpb3JpdHkgYWNjb3JkaW5nIHRvIHBvc2l0aW9uIHdpdGhpbiB0aGUgb3BlcmF0aW9ucyBhcnJheSAoZWFybGllclxuICogICAgIHBvc2l0aW9ucyBoYXZlIHRoZSBoaWdoZXIgcHJpb3JpdHkpLiBJZiBgZmFsc2VgIG9yIG5vdCBwcmVzZW50LCB0aGVcbiAqICAgICBwcmlvcnR5IG9mIG9wZXJhdGlvbiBjb21wbGV0aW9uIGlzIHJhbmRvbS5cbiAqIEBwYXJhbSB7Kn0gW29wdGlvbnMuZGVmYXVsdF0gSWYgc2V0IGFuZCBhbGwgb2YgdGhlIG9wZXJhdGlvbnMgaW5pdGlhbGx5XG4gKiAgICAgYmxvY2ssIHRoZSBgc2VsZWN0YCBjYWxsIGNvbXBsZXRlcyBpbW1lZGlhdGVseSB3aXRoIHRoZSB2YWx1ZSBvZiB0aGlzXG4gKiAgICAgb3B0aW9uICh0aGUgY2hhbm5lbCB3aWxsIGJlIGB7QGxpbmsgbW9kdWxlOmNzcC5ERUZBVUxUfERFRkFVTFR9KWAuIElmIG5vdFxuICogICAgIHNldCwgdGhlIGBzZWxlY3RgIGNhbGwgd2lsbCBibG9jayB1bnRpbCBvbmUgb2YgdGhlIG9wZXJhdGlvbnMgY29tcGxldGVzXG4gKiAgICAgYW5kIHRoYXQgdmFsdWUgYW5kIGNoYW5uZWwgd2lsbCBiZSB0aGUgb25lcyByZXR1cm5lZC5cbiAqIEByZXR1cm4ge1Byb21pc2U8bW9kdWxlOmNzcC5TZWxlY3RSZXN1bHQ+fSBBIHByb21pc2UgdGhhdCB3aWxsIHJlc29sdmUgdG8gYW5cbiAqICAgICBvYmplY3Qgb2YgdHdvIHByb3BlcnRpZXM6IGB2YWx1ZWAgd2lsbCBjb250YWluIHRoZSB2YWx1ZSB0aGF0IHdvdWxkIGhhdmVcbiAqICAgICBiZWVuIHJldHVybmVkIGJ5IHRoZSBjb3JyZXNwb25kaW5nIGB7QGxpbmsgbW9kdWxlOmNzcC5zZW5kfHNlbmR9YCBvclxuICogICAgIGB7QGxpbmsgbW9kdWxlOmNzcC5yZWN2fHJlY3Z9YCBvcGVyYXRpb247IGFuZCBgY2hhbm5lbGAgd2lsbCBiZSBhXG4gKiAgICAgcmVmZXJlbmNlIHRvIHRoZSBjaGFubmVsIHRoYXQgY29tcGxldGVkIHRoZSBvcGVyYXRpb24gdG8gYWxsb3cgYHNlbGVjdGBcbiAqICAgICB0byB1bmJsb2NrLlxuICovXG5mdW5jdGlvbiBzZWxlY3Qob3BzLCBvcHRpb25zID0ge30pIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgIHNlbGVjdEFzeW5jKG9wcywgcmVzb2x2ZSwgb3B0aW9ucyk7XG4gIH0pO1xufVxuXG4vKipcbiAqIEEgY29udmVuaWVuY2UgZnVuY3Rpb24gdG8gcmVhZCB0aGUgdmFsdWUgb3V0IG9mIGEgc2VsZWN0IHJlc3VsdC4gVGhpc1xuICogZnVuY3Rpb24gaXMgbm90IG5lY2Vzc2FyeSAtIGFmdGVyIGFsbCwgaXQncyBhYnNvbHV0ZWx5IGFzIGNvcnJlY3QgdG8gc2ltcGx5XG4gKiB1c2UgYHJlc3VsdC52YWx1ZWAgaW5zdGVhZCBvZiBgdmFsdWUocmVzdWx0KWAsIGJ1dCBpdCdzIHByb3ZpZGVkIGZvclxuICogY29uc2lzdGVuY3kgd2l0aCB0aGUgcmVzdCBvZiB0aGUgZnVuY3Rpb24tY2VudHJpYyBBUEkuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5TZWxlY3RSZXN1bHR9IHJlc3VsdCBUaGUgcmVzdWx0IGNvbWluZyBmcm9tIGEgc2VsZWN0XG4gKiAgICAgb3BlcmF0aW9uLlxuICogQHJldHVybiB7Kn0gVGhlIHZhbHVlIHByb3ZpZGVkIGJ5IHRoZSBzZWxlY3Qgb3BlcmF0aW9uLlxuICovXG5mdW5jdGlvbiB2YWx1ZShyZXN1bHQpIHtcbiAgcmV0dXJuIHJlc3VsdC52YWx1ZTtcbn1cblxuLyoqXG4gKiBBIGNvbnZlbmllbmNlIGZ1bmN0aW9uIHRvIHJlYWQgdGhlIGNoYW5uZWwgb3V0IG9mIGEgc2VsZWN0IHJlc3VsdC4gVGhpc1xuICogZnVuY3Rpb24gaXMgbm90IG5lY2Vzc2FyeSAtIGFmdGVyIGFsbCwgaXQncyBhYnNvbHV0ZWx5IGFzIGNvcnJlY3QgdG8gc2ltcGx5XG4gKiB1c2UgYHJlc3VsdC5jaGFubmVsYCBpbnN0ZWFkIG9mIGBjaGFubmVsKHJlc3VsdClgLCBidXQgaXQncyBwcm92aWRlZCBmb3JcbiAqIGNvbnNpc3RlbmN5IHdpdGggdGhlIHJlc3Qgb2YgdGhlIGZ1bmN0aW9uLWNlbnRyaWMgQVBJLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuU2VsZWN0UmVzdWx0fSByZXN1bHQgVGhlIHJlc3VsdCBjb21pbmcgZnJvbSBhIHNlbGVjdFxuICogICAgIG9wZXJhdGlvbi5cbiAqIEByZXR1cm4ge21vZHVsZTpjc3AuQ2hhbm5lbH0gVGhlIGNoYW5uZWwgdXBvbiB3aGljaCB0aGUgc2VsZWN0IG9wZXJhdGlvblxuICogICAgIGNvbXBsZXRlZC5cbiAqL1xuZnVuY3Rpb24gY2hhbm5lbChyZXN1bHQpIHtcbiAgcmV0dXJuIHJlc3VsdC5jaGFubmVsO1xufVxuXG5leHBvcnQgeyBERUZBVUxULCBzZWxlY3QsIHNlbGVjdEFzeW5jLCB2YWx1ZSwgY2hhbm5lbCB9O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG5cbi8qKlxuICogVGhpcyBpcyB0aGUgcGxhY2Ugd2hlcmUgdGhlIG5ldyBKUyB0YXNrcyBhcmUgYWN0dWFsbHkgY3JlYXRlZC4gQSBxdWV1ZSBpc1xuICogbWFpbnRhaW5lZCBmb3IgdGhlbSwgYW5kIGFzIGVhY2ggYmF0Y2ggb2YgdGFza3MgYXJlIGNvbXBsZXRlZCwgdGhlIG5leHQgb25lc1xuICogcnVuLiBBcyBlYWNoIHByb2Nlc3MgcnVucywgaXQgYWRkcyB0YXNrcyB0byBiZSBydW4gdG8gdGhlIHF1ZXVlLCB3aGljaCBhcmVcbiAqIGVhY2ggcnVuIGluIHRoZWlyIG93biBKUyB0YXNrLlxuICpcbiAqIFRoZSBmdW5jdGlvbiB0aGF0IHNwYXducyB0aGUgbmV3IEpTIHRhc2sgZGVwZW5kcyBvbiBlbnZpcm9ubWVudC4gVGhlXG4gKiBgc2V0SW1tZWRpYXRlYCBmdW5jdGlvbiBpcyBwcmVmZXJyZWQgYXMgaXQncyB0aGUgZmFzdGVzdCwgbm90IHdhaXRpbmcgZm9yXG4gKiBldmVudCBxdWV1ZXMgdG8gZW1wdHkgYmVmb3JlIHNwYXduaW5nIHRoZSBuZXcgcHJvY2Vzcy4gSG93ZXZlciwgaXQgaXMgbm90IEpTXG4gKiBzdGFuZGFyZCBhbmQgY3VycmVudGx5IG9ubHkgd29ya3MgaW4gSUUgYW5kIE5vZGUuIElmIGBzZXRJbW1lZGlhdGVgIGlzbid0XG4gKiBhdmFpbGFibGUsIGFuIGF0dGVtcHQgaXMgbWFkZSB0byB1c2UgYE1lc3NhZ2VDaGFubmVsYCdzIGBvbk1lc3NhZ2VgIGlzIHRyaWVkXG4gKiBuZXh0LiBJZiB0aGF0IGlzIGFsc28gbm90IGF2YWlsYWJsZSwgdGhlbiBgc2V0VGltZW91dGAgd2l0aCBgMGAgZGVsYXkgaXNcbiAqIHVzZWQsIHdoaWNoIGlzIGF2YWlsYWJsZSBldmVyeXdoZXJlIGJ1dCB3aGljaCBpcyB0aGUgbGVhc3QgcGVyZm9ybWFudCBvZiBhbGxcbiAqIG9mIHRoZSBzb2x1dGlvbnMuXG4gKlxuICogVGhlcmUgYXJlIG90aGVyIHBvc3NpYmlsaXRpZXMgZm9yIGNyZWF0aW5nIHByb2Nlc3NlcywgYnV0IHRoZXkgd2VyZSByZWplY3RlZFxuICogYXMgb2Jzb2xldGUgKGBwcm9jZXNzLm5leHRUaWNrYCBhbmQgYG9ucmVhZHlzdGF0ZWNoYW5nZWApIG9yIHVubmVjZXNzYXJ5XG4gKiAoYHdpbmRvdy5wb3N0TWVzc2FnZWAsIHdoaWNoIHdvcmtzIGxpa2UgYE1lc3NhZ2VDaGFubmVsYCBidXQgZG9lc24ndCB3b3JrIGluXG4gKiBXZWIgV29ya2VycykuXG4gKlxuICogSXQgaXMgbm90YWJsZSBhbmQgaW1wb3J0YW50IHRoYXQgd2UgYWN0IGFzIGdvb2QgY2l0aXplbnMgaGVyZS4gVGhpc1xuICogZGlzcGF0Y2hlciBpcyBjYXBhYmxlIG9mIHRha2luZyBjb250cm9sIG9mIHRoZSBKYXZhU2NyaXB0IGVuZ2luZSB1bnRpbFxuICogdGhvdXNhbmRzLCBtaWxsaW9ucywgb3IgbW9yZSB0YXNrcyBhcmUgaGFuZGxlZC4gQnV0IHRoYXQgY291bGQgY2F1c2UgdGhlXG4gKiBzeXN0ZW0gZXZlbnQgbG9vcCB0byBoYXZlIHRvIHdhaXQgYW4gdW5hY2NlcHRhYmxlIGFtb3VudCBvZiB0aW1lLiBTbyB3ZSBsaW1pdFxuICogb3Vyc2VsdmVzIHRvIGEgYmF0Y2ggb2YgdGFza3MgYXQgYSB0aW1lLCBhbmQgaWYgdGhlcmUgYXJlIHN0aWxsIG1vcmUgdG8gYmVcbiAqIHJ1biwgd2UgbGV0IHRoZSBldmVudCBsb29wIHJ1biBiZWZvcmUgdGhhdCBuZXh0IGJhdGNoIGlzIHByb2Nlc3NlZC5cbiAqXG4gKiBUaGUgZGlzcGF0Y2hlciBpcyAqKmdsb2JhbCoqLiBUaGVyZSBpcyBhIHNpbmdsZSBpbnN0YW5jZSB0aGF0IHJ1bnMgZm9yIGFsbFxuICogY2hhbm5lbHMgYW5kIHByb2Nlc3Nlcy4gVGhpcyBpcyB0aGUgb25seSBlbGVtZW50IG9mIHRoZSBzeXN0ZW0gdGhhdCB3b3Jrc1xuICogbGlrZSB0aGlzLlxuICpcbiAqIEBtb2R1bGUgY3NwL2Rpc3BhdGNoZXJcbiAqIEBzZWUgbW9kdWxlOmNzcC5jb25maWdcbiAqIEBwcml2YXRlXG4gKi9cblxuaW1wb3J0IHtcbiAgcXVldWUgYXMgcSxcbiAgRU1QVFksXG4gIGNvdW50IGFzIHFDb3VudCxcbiAgZGVxdWV1ZSxcbiAgZW5xdWV1ZVxufSBmcm9tIFwibW9kdWxlcy9xdWV1ZVwiO1xuY29uc3QgcXVldWUgPSBxKCk7XG5cbi8qKlxuICogVGhlIGRpc3BhdGNoIG1ldGhvZCBvcHRpb24gaW5kaWNhdGluZyB0aGF0IGBzZXRJbW1lZGlhdGVgIHNob3VsZCBiZSB1c2VkIHRvXG4gKiBkaXNwYXRjaCB0YXNrcy5cbiAqXG4gKiBUaGlzIGlzIHRoZSBkZWZhdWx0IG9wdGlvbi4gRm9yIGVudmlyb25tZW50cyB0aGF0IGRvbid0IHN1cHBvcnRcbiAqIGBzZXRJbW1lZGlhdGVgLCB0aGlzIGZhbGxzIGJhY2sgdG9cbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC5NRVNTQUdFX0NIQU5ORUx8TUVTU0FHRV9DSEFOTkVMfWAuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqIEB0eXBlIHtTeW1ib2x9XG4gKiBAc2VlIHtAbGluayBtb2R1bGU6Y3NwLmNvbmZpZ3xjb25maWd9XG4gKi9cbmNvbnN0IFNFVF9JTU1FRElBVEUgPSBTeW1ib2woXCJTRVRfSU1NRURJQVRFXCIpO1xuXG4vKipcbiAqIFRoZSBkaXNwYXRjaCBtZXRob2Qgb3B0aW9uIGluZGljYXRpbmcgdGhhdCBhIGBNZXNzYWdlQ2hhbm5lbGAgc2hvdWxkIGJlIHVzZWRcbiAqIHRvIGRpc3BhdGNoIHRhc2tzLlxuICpcbiAqIEZvciBlbnZpcm9ubWVudHMgdGhhdCBkb24ndCBzdXBwb3J0IGBNZXNzYWdlQ2hhbm5lbGAsIHRoaXMgZmFsbHMgYmFjayB0b1xuICogYHtAbGluayBtb2R1bGU6Y3NwLlNFVF9USU1FT1VUfFNFVF9USU1FT1VUfWAuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqIEB0eXBlIHtTeW1ib2x9XG4gKiBAc2VlIHtAbGluayBtb2R1bGU6Y3NwLmNvbmZpZ3xjb25maWd9XG4gKi9cbmNvbnN0IE1FU1NBR0VfQ0hBTk5FTCA9IFN5bWJvbChcIk1FU1NBR0VfQ0hBTk5FTFwiKTtcblxuLyoqXG4gKiBUaGUgZGlzcGF0Y2ggbWV0aG9kIG9wdGlvbiBpbmRpY2F0aW5nIHRoYXQgYHNldFRpbWVvdXRgIHNob3VsZCBiZSB1c2VkIHRvXG4gKiBkaXNwYXRjaCB0YXNrcy5cbiAqXG4gKiBUaGlzIG1ldGhvZCBpcyBhbHdheXMgYXZhaWxhYmxlLCBidXQgaXQncyBhbHNvIGFsd2F5cyBsZXNzIGVmZmljaWVudCB0aGFuIGFueVxuICogb3RoZXIgbWV0aG9kLCBzbyBpdCBzaG91bGQgYmUgdXNlZCBhcyBhIGxhc3QgcmVzb3J0LlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAdHlwZSB7U3ltYm9sfVxuICogQHNlZSAge0BsaW5rIG1vZHVsZTpjc3AuY29uZmlnfGNvbmZpZ31cbiAqL1xuY29uc3QgU0VUX1RJTUVPVVQgPSBTeW1ib2woXCJTRVRfVElNRU9VVFwiKTtcblxuY29uc3Qgb3B0aW9ucyA9IHtcbiAgYmF0Y2hTaXplOiAxMDI0LFxuICBkaXNwYXRjaE1ldGhvZDogU0VUX0lNTUVESUFURVxufTtcblxubGV0IGRpc3BhdGNoZXIgPSBjcmVhdGVEaXNwYXRjaGVyKCk7XG5sZXQgcnVubmluZyA9IGZhbHNlO1xubGV0IHF1ZXVlZCA9IHRydWU7XG5cbi8qKlxuICogQ3JlYXRlcyBhbmQgcmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgY2FuIGJlIHVzZWQgdG8gZGlzcGF0Y2ggdGFza3MuIFRoZVxuICogZnVuY3Rpb24gdGhhdCBpcyBjcmVhdGVkIGRlcGVuZHMgb24gdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBgZGlzcGF0Y2hNZXRob2RgXG4gKiB0aGF0IGNhbiBiZSBzZXQgd2l0aCBge0BsaW5rIG1vZHVsZTpjc3AuY29uZmlnfGNvbmZpZ31gLlxuICpcbiAqIEByZXR1cm4gQSBkaXNwYXRjaGVyIGZ1bmN0aW9uIHVzaW5nIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgZGlzcGF0Y2ggbWV0aG9kLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY3JlYXRlRGlzcGF0Y2hlcigpIHtcbiAgc3dpdGNoIChjYWxjRGlzcGF0Y2hNZXRob2QoKSkge1xuICAgIC8vIFdlIHByZWZlciBgc2V0SW1tZWRpYXRlYCBpZiBpdCdzIGF2YWlsYWJsZSwgYnV0IGl0J3Mgb25seSBhdmFpbGFibGUgaW5cbiAgICAvLyBOb2RlIGFuZCBzb21lIG9sZCBicm93c2Vycy5cbiAgICBjYXNlIFNFVF9JTU1FRElBVEU6XG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBpZiAoIShxdWV1ZWQgJiYgcnVubmluZykpIHtcbiAgICAgICAgICBxdWV1ZWQgPSB0cnVlO1xuICAgICAgICAgIHNldEltbWVkaWF0ZShwcm9jZXNzVGFza3MpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgLy8gTW9zdCBtb2Rlcm4gYnJvd3NlcnMgaW1wbGVtZW50IGBNZXNzYWdlQ2hhbm5lbGAuIFRoaXMgaXMgdGhlIHByZWZlcnJlZFxuICAgIC8vIG1ldGhvZCBpbiBicm93c2VyIGVudmlyb25tZW50cyB3aGVyZSBgc2V0SW1tZWRpYXRlYCBpc24ndCBhdmFpbGFibGUuXG4gICAgY2FzZSBNRVNTQUdFX0NIQU5ORUw6IHtcbiAgICAgIGNvbnN0IGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gKCkgPT4gcHJvY2Vzc1Rhc2tzKCk7XG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBpZiAoIShxdWV1ZWQgJiYgcnVubmluZykpIHtcbiAgICAgICAgICBxdWV1ZWQgPSB0cnVlO1xuICAgICAgICAgIGNoYW5uZWwucG9ydDIucG9zdE1lc3NhZ2UoMCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gSWYgYWxsIGVsc2UgZmFpbHMsIGp1c3QgdXNlIGBzZXRUaW1lb3V0YC4gSXQncyBhIGxpdHRsZSBzbG93ZXIgdGhhbiB0aGVcbiAgICAvLyBvdGhlciBtZXRob2RzLCBidXQgaXQncyBhdmFpbGFibGUgZXZlcnl3aGVyZS5cbiAgICBjYXNlIFNFVF9USU1FT1VUOlxuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgaWYgKCEocXVldWVkICYmIHJ1bm5pbmcpKSB7XG4gICAgICAgICAgcXVldWVkID0gdHJ1ZTtcbiAgICAgICAgICBzZXRUaW1lb3V0KHByb2Nlc3NUYXNrcywgMCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gIH1cbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBhY3R1YWwgZGlzcGF0Y2ggbWV0aG9kIGJhc2VkIG9uIHRoZSBjdXJyZW50IGRpc3BhdGNoIG1ldGhvZFxuICogc2V0dGluZyBhbmQgZW52aXJvbm1lbnRhbCBhdmFpbGFiaWxpdHkuXG4gKlxuICogVGhlIGRpc3BhdGNoIG1ldGhvZCBpcyBzdG9yZWQgcmF3LCBzbyB0aGlzIGZ1bmN0aW9uIGlzIG5lY2Vzc2FyeSB0byB0YWtlXG4gKiBlbnZpcm9ubWVudCBpbnRvIGFjY291bnQuIEZvciBleGFtcGxlLCBpZiB3ZSdyZSBydW5uaW5nIGluIGEgbW9kZXJuIGJyb3dzZXJcbiAqICh3aGljaCBkb2VzIG5vdCBoYXZlIGBzZXRJbW1lZGlhdGVgKSxcbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC5TRVRfSU1NRURJQVRFfFNFVF9JTU1FRElBVEV9YCBjYW4gc3RpbGwgYmUgcmVjb3JkZWQgYXMgdGhlXG4gKiBkaXNwYXRjaCBtZXRob2QsIGJ1dCB0aGlzIGZ1bmN0aW9uIHdpbGwgcmV0dXJuXG4gKiBge0BsaW5rIG1vZHVsZTpjc3AuTUVTU0FHRV9DSEFOTkVMfE1FU1NBR0VfQ0hBTk5FTH1gLlxuICpcbiAqIEByZXR1cm4ge1N5bWJvbH0gVGhlIGRpc3BhdGNoIG1ldGhvZCB0byB1c2UgYmFzZWQgb24gc2V0dGluZyBhbmQgZW52aXJvbm1lbnQuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjYWxjRGlzcGF0Y2hNZXRob2QoKSB7XG4gIHN3aXRjaCAob3B0aW9ucy5kaXNwYXRjaE1ldGhvZCkge1xuICAgIGNhc2UgTUVTU0FHRV9DSEFOTkVMOlxuICAgICAgaWYgKHR5cGVvZiBNZXNzYWdlQ2hhbm5lbCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICByZXR1cm4gTUVTU0FHRV9DSEFOTkVMO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFNFVF9USU1FT1VUO1xuXG4gICAgY2FzZSBTRVRfVElNRU9VVDpcbiAgICAgIHJldHVybiBTRVRfVElNRU9VVDtcblxuICAgIGRlZmF1bHQ6XG4gICAgICBpZiAodHlwZW9mIHNldEltbWVkaWF0ZSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICByZXR1cm4gU0VUX0lNTUVESUFURTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgTWVzc2FnZUNoYW5uZWwgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgcmV0dXJuIE1FU1NBR0VfQ0hBTk5FTDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBTRVRfVElNRU9VVDtcbiAgfVxufVxuXG4vKipcbiAqIFRoZSBoZWFydCBvZiB0aGUgZGlzcGF0Y2ggcHJvY2VzcywgdGhpcyBpcyB0aGUgZnVuY3Rpb24gcnVuIGJ5IHRoZSBkaXNwYXRjaFxuICogZnVuY3Rpb24gaW4gb3JkZXIgdG8gYWN0dWFsbHkgcnVuIHF1ZXVlZCB0YXNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBwcm9jZXNzVGFza3MoKSB7XG4gIHJ1bm5pbmcgPSB0cnVlO1xuICBxdWV1ZWQgPSBmYWxzZTtcbiAgbGV0IGNvdW50ID0gMDtcblxuICBmb3IgKDs7KSB7XG4gICAgY29uc3QgdGFzayA9IGRlcXVldWUocXVldWUpO1xuICAgIGlmICh0YXNrID09PSBFTVBUWSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgdGFzaygpO1xuXG4gICAgaWYgKGNvdW50ID49IG9wdGlvbnMuYmF0Y2hTaXplKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgY291bnQrKztcblxuICAgIHJ1bm5pbmcgPSBmYWxzZTtcbiAgICBpZiAocUNvdW50KHF1ZXVlKSkge1xuICAgICAgZGlzcGF0Y2hlcigpO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIENyZWF0ZXMgYW5kIGFzc2lnbnMgdGhlIGdsb2JhbCBkaXNwYXRjaCBmdW5jdGlvbiBiYXNlZCBvbiBkaXNwYXRjaCBtZXRob2RcbiAqIHNldHRpbmcgYW5kIGVudmlyb25tZW50YWwgYXZhaWxhYmlsaXR5LlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHNldERpc3BhdGNoZXIoKSB7XG4gIGRpc3BhdGNoZXIgPSBjcmVhdGVEaXNwYXRjaGVyKCk7XG59XG5cbi8qKlxuICogVGhlIGNvbmZpZ3VyYXRpb24gb2YgdGhlIENoYW5rbyBkaXNwYXRjaGVyLiBBbiBvYmplY3QgbGlrZSB0aGlzIGlzIHJldHVybmVkXG4gKiBmcm9tIHRoZSB7QGxpbmsgbW9kdWxlOmNzcC5jb25maWd9IGZ1bmN0aW9uLCBhbmQgaXQgbWF5IGFsc28gYmUgcGFzc2VkIHRvIHRoZVxuICogc2FtZSBmdW5jdGlvbiAodGhvdWdoIGVhY2ggcHJvcGVydHkgaXMgb3B0aW9uYWwgaW4gdGhhdCBjYXNlKS5cbiAqXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBEaXNwYXRjaGVyQ29uZmlnXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICogQHByb3BlcnR5IHtudW1iZXJ9IGJhdGNoU2l6ZSBUaGUgbWF4aW11bSBudW1iZXIgb2YgdGFza3MgdGhhdCB0aGUgZGlzcGF0Y2hlclxuICogICAgIHdpbGwgcnVuIGluIGEgc2luZ2xlIGJhdGNoLlxuICogQHByb3BlcnR5IHtTeW1ib2x9IGRpc3BhdGNoTWV0aG9kIFRoZSBtZXRob2QgdXNlZCB0byBkaXNwYXRjaCBhIHByb2Nlc3MgaW50b1xuICogICAgIGEgc2VwYXJhdGUgbGluZSBvZiBleGVjdXRpb24uXG4gKi9cblxuLyoqXG4gKiBTZXRzIG9uZSBvciBtb3JlIG9mIHRoZSBkaXNwYXRjaGVyIGNvbmZpZ3VyYXRpb24gb3B0aW9ucy5cbiAqXG4gKiBUaGlzIGlzIGFkdmFuY2VkIHNldHRpbmcgZm9yIHRoZSBkaXNwYXRjaGVyIHRoYXQgaXMgcmVzcG9uc2libGUgZm9yIHF1ZXVlaW5nXG4gKiB1cCBjaGFubmVsIG9wZXJhdGlvbnMgYW5kIHByb2Nlc3Nlcy4gSXQgaXMgbGlrZWx5IHRoYXQgdGhpcyBmdW5jdGlvbiB3aWxsXG4gKiBuZXZlciBuZWVkIHRvIGJlIGNhbGxlZCBpbiBub3JtYWwgb3BlcmF0aW9uLlxuICpcbiAqIElmIGFueSByZWNvZ25pemVkIG9wdGlvbnMgYXJlIHNwZWNpZmllZCBpbiB0aGUgb3B0aW9ucyBvYmplY3QgcGFzc2VkIHRvXG4gKiBgY29uZmlnYCwgdGhlbiB0aGUgb3B0aW9uIGlzIHNldCB0byB0aGUgdmFsdWUgc2VudCBpbi4gUHJvcGVydGllcyB0aGF0IGFyZW4ndFxuICogYW55IG9mIHRoZXNlIG9wdGlvbnMgYXJlIGlnbm9yZWQsIGFuZCBhbnkgb2YgdGhlc2Ugb3B0aW9ucyB0aGF0IGRvIG5vdCBhcHBlYXJcbiAqIGluIHRoZSBwYXNzZWQgb2JqZWN0IGFyZSBsZWZ0IHdpdGggdGhlaXIgY3VycmVudCB2YWx1ZXMuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIEEgbWFwcGluZyBvZiBvcHRpb25zIHRvIHRoZWlyIG5ldyB2YWx1ZXMuIEV4dHJhIHZhbHVlc1xuICogICAgIChwcm9wZXJ0aWVzIHRoYXQgYXJlIG5vdCBvcHRpb25zKSBhcmUgaWdub3JlZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0cy5iYXRjaFNpemVdIFRoZSBtYXhpbXVtIG51bWJlciBvZiB0YXNrcyB0aGF0IHRoZVxuICogICAgIGRpc3BhdGNoZXIgd2lsbCBydW4gaW4gYSBzaW5nbGUgYmF0Y2ggKGluaXRpYWxseSwgdGhpcyBpcyAxMDI0KS4gSWYgdGhlXG4gKiAgICAgbnVtYmVyIG9mIHBlbmRpbmcgdGFza3MgZXhjZWVkcyB0aGlzLCB0aGUgcmVtYWluaW5nIGFyZSBub3QgZGlzY2FyZGVkLlxuICogICAgIFRoZXkncmUgc2ltcGx5IHJ1biBhcyBwYXJ0IG9mIGFub3RoZXIgYmF0Y2ggYWZ0ZXIgdGhlIGN1cnJlbnQgYmF0Y2hcbiAqICAgICBjb21wbGV0ZXMuXG4gKiBAcGFyYW0ge1N5bWJvbH0gW29wdHMuZGlzcGF0Y2hNZXRob2RdIFRoZSBtZXRob2QgdXNlZCB0byBkaXNwYXRjaCBhIHByb2Nlc3NcbiAqICAgICBpbnRvIGEgc2VwYXJhdGUgbGluZSBvZiBleGVjdXRpb24uIFBvc3NpYmxlIHZhbHVlcyBhcmVcbiAqICAgICBge0BsaW5rIG1vZHVsZTpjc3AuU0VUX0lNTUVESUFURXxTRVRfSU1NRURJQVRFfWAsXG4gKiAgICAgYHtAbGluayBtb2R1bGU6Y3NwLk1FU1NBR0VfQ0hBTk5FTHxNRVNTQUdFX0NIQU5ORUx9YCwgb3JcbiAqICAgICBge0BsaW5rIG1vZHVsZTpjc3AuU0VUX1RJTUVPVVR8U0VUX1RJTUVPVVR9YCwgd2l0aCB0aGUgaW5pdGlhbCBiZWluZ1xuICogICAgIGB7QGxpbmsgbW9kdWxlOmNzcC5TRVRfSU1NRURJQVRFfFNFVF9JTU1FRElBVEV9YC4gSWYgYSBtZXRob2QgaXMgc2V0IGJ1dFxuICogICAgIGlzIG5vdCBhdmFpbGFibGUgaW4gdGhhdCBlbnZpcm9ubWVudCwgdGhlbiBpdCB3aWxsIHNpbGVudGx5IGZhbGwgYmFjayB0b1xuICogICAgIHRoZSBuZXh0IG1ldGhvZCB0aGF0IGlzIGF2YWlsYWJsZS5cbiAqIEByZXR1cm4ge21vZHVsZTpjc3AuRGlzcGF0Y2hlckNvbmZpZ30gVGhlIGNvbmZpZ3VyYXRpb24gc2V0dGluZ3MgZm9yIHRoZVxuICogICAgIGRpc3BhdGNoZXIgYWZ0ZXIgYW55IG5ldyB2YWx1ZXMgaGF2ZSBiZWVuIHNldC5cbiAqL1xuZnVuY3Rpb24gY29uZmlnKG9wdHMgPSB7fSkge1xuICBmb3IgKGNvbnN0IGtleSBpbiBvcHRpb25zKSB7XG4gICAgaWYgKGtleSBpbiBvcHRzKSB7XG4gICAgICBvcHRpb25zW2tleV0gPSBvcHRzW2tleV07XG5cbiAgICAgIGlmIChrZXkgPT09IFwiZGlzcGF0Y2hNZXRob2RcIikge1xuICAgICAgICBzZXREaXNwYXRjaGVyKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zKTtcbn1cblxuLyoqXG4gKiBRdWV1ZXMgYSB0YXNrIHRvIGJlIHJ1biBhbmQgc3RhcnRzIHRoZSBkaXNwYXRjaCBwcm9jZXNzLlxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IHRhc2sgQSB0YXNrIHRvIGJlIHF1ZXVlZCBhbmQgcnVuIHRoZSBuZXh0IHRpbWUgYSBiYXRjaCBvZlxuICogICAgIHRhc2tzIGlzIHJ1bi5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGRpc3BhdGNoKHRhc2spIHtcbiAgZW5xdWV1ZShxdWV1ZSwgdGFzayk7XG4gIGRpc3BhdGNoZXIoKTtcbn1cblxuZXhwb3J0IHsgU0VUX0lNTUVESUFURSwgTUVTU0FHRV9DSEFOTkVMLCBTRVRfVElNRU9VVCwgY29uZmlnLCBkaXNwYXRjaCB9O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG5cbi8qKlxuICogUHJvdmlkZXMgc21hbGwgdXRpbGl0eSBmdW5jdGlvbnMgdG8gbWFrZSBpdCBlYXNpZXIgdG8gaW50ZXJhY3Qgd2l0aCBhc3luY1xuICogZnVuY3Rpb25zIGFzIHByb2Nlc3Nlcy5cbiAqXG4gKiBAbW9kdWxlIGNzcC9wcm9jZXNzXG4gKiBAcHJpdmF0ZVxuICovXG5cbmltcG9ydCB7IHRpbWVkQ2hhbiwgcmVjdkFzeW5jIH0gZnJvbSBcIm1vZHVsZXMvY2hhbm5lbFwiO1xuXG4vKipcbiAqIEJsb2NrcyB0aGUgcHJvY2VzcyBmb3IgdGhlIHNwZWNpZmllZCB0aW1lIChpbiBtaWxsaXNlY29uZHMpIGFuZCB0aGVuIHVuYmxvY2tzXG4gKiBpdC5cbiAqXG4gKiBUaGlzIGltcGxlbWVudHMgYSBkZWxheSwgYnV0IG9uZSB0aGF0J3Mgc3VwZXJpb3IgdG8gb3RoZXIga2luZHMgb2YgZGVsYXlzXG4gKiAoYHNldFRpbWVvdXRgLCBldGMuKSBiZWNhdXNlIGl0IGJsb2NrcyB0aGUgcHJvY2VzcyBhbmQgYWxsb3dzIHRoZSBkaXNwYXRjaGVyXG4gKiB0byBhbGxvdyBvdGhlciBwcm9jZXNzZXMgdG8gcnVuIHdoaWxlIHRoaXMgb25lIHdhaXRzLiBUaGUgZGVmYXVsdCBkZWxheSBpcyAwLFxuICogd2hpY2ggd2lsbCByZWxlYXNlIHRoZSBwcm9jZXNzIHRvIGFsbG93IG90aGVycyB0byBydW4gYW5kIHRoZW4gaW1tZWRpYXRlbHlcbiAqIHJlLXF1ZXVlIGl0LlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gKm11c3QqIGJlIGNhbGxlZCBmcm9tIHdpdGhpbiBhbiBgYXN5bmNgIGZ1bmN0aW9uIGFuZCBhcyBwYXJ0IG9mXG4gKiBhbiBgYXdhaXRgIGV4cHJlc3Npb24uXG4gKlxuICogV2hlbiB0aGlzIGZ1bmN0aW9uIGNvbXBsZXRlcyBhbmQgaXRzIHByb2Nlc3MgdW5ibG9ja3MsIHRoZSBgYXdhaXRgIGV4cHJlc3Npb25cbiAqIGRvZXNuJ3QgdGFrZSBvbiBhbnkgbWVhbmluZ2Z1bCB2YWx1ZS4gVGhlIHB1cnBvc2Ugb2YgdGhpcyBmdW5jdGlvbiBpcyBzaW1wbHlcbiAqIHRvIGRlbGF5LCBub3QgdG8gY29tbXVuaWNhdGUgYW55IGRhdGEuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqIEBwYXJhbSB7bnVtYmVyfSBbZGVsYXk9MF0gdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdGhhdCB0aGUgcHJvY2VzcyB3aWxsXG4gKiAgICAgYmxvY2sgZm9yLiBBdCB0aGUgZW5kIG9mIHRoYXQgdGltZSwgdGhlIHByb2Nlc3MgaXMgYWdhaW4gZWxpZ2libGUgdG8gYmVcbiAqICAgICBydW4gYnkgdGhlIGRpc3BhdGNoZXIuIElmIHRoaXMgaXMgbWlzc2luZyBvciBzZXQgdG8gYDBgLCB0aGUgcHJvY2VzcyB3aWxsXG4gKiAgICAgY2VkZSBleGVjdXRpb24gdG8gdGhlIG5leHQgb25lIGJ1dCBpbW1lZGlhdGVseSByZXF1ZXVlIGl0c2VsZiB0byBiZSBydW5cbiAqICAgICBhZ2Fpbi5cbiAqIEByZXR1cm4ge1Byb21pc2V9IEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggbm8gbWVhbmluZ2Z1bCByZXN1bHQgd2hlbiB0aGVcbiAqICAgICB0aW1lIGhhcyBlbGFwc2VkLlxuICovXG5mdW5jdGlvbiBzbGVlcChkZWxheSA9IDApIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgIGNvbnN0IGNoID0gdGltZWRDaGFuKGRlbGF5KTtcbiAgICByZWN2QXN5bmMoY2gsIHJlc29sdmUpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBJbnZva2VzIGFuIGFzeW5jIGZ1bmN0aW9uIGFjdGluZyBhcyBhIHByb2Nlc3MuXG4gKlxuICogVGhpcyBpcyBwdXJlbHkgYSBjb252ZW5pZW5jZSBmdW5jdGlvbiwgZHJpdmVuIGJ5IHRoZSBmYWN0IHRoYXQgaXQncyBuZWNlc3NhcnlcbiAqIHRvIHVzZSBhbiBJSUZFIHRvIGludm9rZSBhbiBhbm9ueW1vdXMgYXN5bmMgZnVuY3Rpb24sIGFuZCB0aGF0J3Mgbm90IHZlcnlcbiAqIGFlc3RoZXRpY2FsbHkgcGxlYXNpbmcuIEl0IGRvZXMgbm8gbW9yZSB0aGFuIGludm9rZSB0aGUgcGFzc2VkIGZ1bmN0aW9uLCBidXRcbiAqIHRoYXQgYXQgbGVhc3QgcmVsZWFzZXMgdXMgZnJvbSB0aGUgbmVlZCB0byBwdXQgdGhlIGVtcHR5IHBhcmVudGhlc2VzIGFmdGVyXG4gKiB0aGUgZnVuY3Rpb24gZGVmaW5pdGlvbi5cbiAqXG4gKiBBIG5hbWVkIGFzeW5jIGZ1bmN0aW9uIGNhbiBzaW1wbHkgYmUgaW52b2tlZCAod2l0aG91dCBiZWluZyBhbiBJSUZFKSBhbmRcbiAqIGRvZXNuJ3QgYmVuZWZpdCBmcm9tIHRoaXMgY29udmVuaWVuY2UuXG4gKlxuICogQW5vbnltb3VzIHByb2Nlc3Mgd2l0aG91dCBgZ29gOlxuICogYGBgXG4gKiAoYXN5bmMgKCkgPT4ge1xuICogICAuLi4gZG8gc29tZSBwcm9jZXNzIHN0dWZmIGhlcmUgLi4uXG4gKiB9KSgpO1xuICogYGBgXG4gKiBBbm9ueW1vdXMgcHJvY2VzcyB3aXRoIGBnb2A6XG4gKiBgYGBcbiAqIGdvKGFzeW5jICgpID0+IHtcbiAqICAgLi4uIGRvIHNvbWUgcHJvY2VzcyBzdHVmZiBoZXJlIC4uLlxuICogfSk7XG4gKiBgYGBcbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm4gVGhlIGFzeW5jIGZ1bmN0aW9uIGJlaW5nIHVzZWQgYXMgYSBwcm9jZXNzLlxuICogQHBhcmFtIHsuLi4qfSBhcmdzIEFyZ3VtZW50cyB0aGF0IGFyZSBzZW50IHRvIHRoZSBhc3luYyBmdW5jdGlvbiB3aGVuIGl0J3NcbiAqICAgICBpbnZva2VkLlxuICogQHJldHVybiB7UHJvbWlzZX0gVGhlIHByb21pc2UgcmV0dXJuZWQgYnkgdGhlIGFzeW5jIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBnbyhmbiwgLi4uYXJncykge1xuICByZXR1cm4gZm4oLi4uYXJncyk7XG59XG5cbi8qKlxuICogSm9pbnMgYWxsIG9mIHRoZSBwcm92aWRlZCBwcm9jZXNzZXMgaW50byBhIHNpbmdsZSBwcm9jZXNzLCByZXR1cm5pbmcgYVxuICogcHJvbWlzZSB0aGF0IHdyYXBzIGFsbCBvZiB0aGUgaW5kaXZpZHVhbCBwcm9jZXNzZXMnIHByb21pc2VzLiBQdXR0aW5nIHRoaXMgaW5cbiAqIGFuIGBhd2FpdGAgc3RhdGVtZW50IHdpbGwgYmxvY2sgdW50aWwgYWxsIG9mIHRoZSBwcm9jZXNzZXMgY29tcGxldGUuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqIEBwYXJhbSB7Li4uZnVuY3Rpb259IGZucyBBbnkgbnVtYmVyIG9mIGFzeW5jIGZ1bmN0aW9ucyB3aG9zZSByZXNvbHV0aW9ucyBhcmVcbiAqICAgICBiZWluZyB3YWl0ZWQgZm9yLlxuICogQHJldHVybiB7UHJvbWlzZX0gQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBhbGwgb2YgdGhlIHByb2Nlc3NlcyBwcm9taXNlc1xuICogICAgIHJlc29sdmUuXG4gKi9cbmZ1bmN0aW9uIGpvaW4oLi4uZm5zKSB7XG4gIHJldHVybiBQcm9taXNlLmFsbChmbnMpO1xufVxuXG5leHBvcnQgeyBzbGVlcCwgZ28sIGpvaW4gfTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG4vKipcbiAqIFByb3ZpZGVzIGFuIGVmZmljaWVudCBnZW5lcmFsLXB1cnBvc2UgcXVldWUuXG4gKlxuICogQG1vZHVsZSBjc3AvcXVldWVcbiAqIEBwcml2YXRlXG4gKi9cblxuLyoqXG4gKiBBIGdlbmVyYWwgcHVycG9zZSwgaGlnaGx5IGVmZmljaWVudCBKYXZhU2NyaXB0IHF1ZXVlLiBJdCBpcyBiYWNrZWQgYnkgYVxuICogSmF2YVNjcmlwdCBhcnJheSwgYnV0IGl0IGRvZXMgbm90IHVzZSBgdW5zaGlmdGAgdG8gdGFrZSBlbGVtZW50cyBvZmYgdGhlXG4gKiBhcnJheSBiZWNhdXNlIHVuc2hpZnQgY2F1c2VzIGVsZW1lbnRzIHRvIGJlIGNvcGllZCBldmVyeSB0aW1lIGl0J3MgdXNlZC5cbiAqIEluc3RlYWQsIGEgcG9pbnRlciBpcyBtYWludGFpbmVkIHRoYXQga2VlcHMgdHJhY2sgb2YgdGhlIGxvY2F0aW9uIG9mIHRoZSBuZXh0XG4gKiBlbGVtZW50IHRvIGJlIGRlcXVldWVkLCBhbmQgd2hlbiB0aGF0IGRlcXVldWUgaGFwcGVucywgdGhlIHBvaW50ZXIgc2ltcGx5XG4gKiBtb3Zlcy4gV2hlbiB0aGUgZW1wdHkgc3BhY2UgYXQgdGhlIGhlYWQgb2YgdGhlIGFycmF5IGdldHMgbGFyZ2UgZW5vdWdoLCBpdCdzXG4gKiByZW1vdmVkIGJ5IGEgc2luZ2xlIHNsaWNlIG9wZXJhdGlvbi5cbiAqXG4gKiBQdXR0aW5nIGVsZW1lbnRzIGludG8gdGhlIHF1ZXVlIGlzIGp1c3QgZG9uZSB3aXRoIGEgYmFzaWMgYHB1c2hgLCB3aGljaCAqaXMqXG4gKiBoaWdobHkgZWZmaWNpZW50LlxuICpcbiAqIFRoaXMgdHlwZSBvZiBxdWV1ZSBpcyBwb3NzaWJsZSBpbiBKYXZhU2NyaXB0IGJlY2F1c2UgSlMgYXJyYXlzIGFyZSByZXNpemFibGUuXG4gKiBJbiBsYW5ndWFnZXMgd2l0aCBmaXhlZC1zaXplIGFycmF5cywgYSByZXNpemluZyBvcGVyYXRpb24gd291bGQgaGF2ZSB0byBiZVxuICogcnVuIGVhY2ggdGltZSB0aGUgcXVldWUgZmlsbHMuXG4gKlxuICogQG5hbWVzcGFjZSBRdWV1ZVxuICogQHByaXZhdGVcbiAqL1xuXG4vKipcbiAqIFRoZSB2YWx1ZSByZXR1cm5lZCB3aGVuIGEgcXVldWUgaXMgcmVhZCB3aGVuIGl0J3MgZW1wdHkuXG4gKlxuICogVGhpcyBzcGVjaWFsIHZhbHVlIGlzIHVzZWQgYmVjYXVzZSBgbnVsbGAgYW5kIGB1bmRlZmluZWRgIGFyZSBwb3NzaWJsZVxuICogbGVnaXRpbWF0ZSB2YWx1ZXMgdGhhdCBjYW4gYmUgc3RvcmVkIGluIGEgcXVldWUuIEFub3RoZXIgb3B0aW9uIGlzIHRvIHVzZVxuICogc29tZSBraW5kIG9mIGBNYXliZWAgb3IgYE9wdGlvbmAgdHlwZSwgYnV0IHRoYXQgcmVxdWlyZXMgbW9yZSBlZmZvcnQgb24gdGhlXG4gKiBwYXJ0IG9mIHRoZSBlbmQgdXNlciB0byBpbnRlcmZhY2Ugd2l0aC5cbiAqXG4gKiBAdHlwZSB7U3ltYm9sfVxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqL1xuY29uc3QgRU1QVFkgPSBTeW1ib2woXCJFTVBUWVwiKTtcblxuLyoqXG4gKiBBIG1hcmtlciBwcm9wZXJ0eSBuYW1lIHRvIGluZGljYXRlIHRoYXQgYW4gb2JqZWN0IGlzIGluIGZhY3QgYSBxdWV1ZS5cbiAqXG4gKiBBIHF1ZXVlIGhhcyBhIHByb3BlcnR5IHdpdGggdGhpcyBuYW1lIHdob3NlIHJlYWRvbmx5IHZhbHVlIGlzIHNldCB0byBgdHJ1ZWAuXG4gKiBUaGlzIGlzIG5vdCBtZWFudCB0byBiZSByZWFkIGV4Y2VwdCBieSB0aGVcbiAqIGB7QGxpbmsgbW9kdWxlOnF1ZXVlLmlzUXVldWV8aXNRdWV1ZX1gIGZ1bmN0aW9uLlxuICpcbiAqIEB0eXBlIHtTeW1ib2x9XG4gKiBAcHJpdmF0ZVxuICovXG5jb25zdCBRVUVVRSA9IFN5bWJvbChcIlFVRVVFXCIpO1xuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhbiBvYmplY3QgaXMgYSBxdWV1ZS5cbiAqXG4gKiBAcGFyYW0geyp9IG9iaiBUaGUgb2JqZWN0IHRvIGJlIHRlc3RlZC5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IEVpdGhlciBgdHJ1ZWAgaWYgdGhlIG9iamVjdCBpcyBhIHF1ZXVlIG9yIGBmYWxzZWAgaWYgaXQgaXNcbiAqIG5vdC5cbiAqL1xuZnVuY3Rpb24gaXNRdWV1ZShvYmopIHtcbiAgcmV0dXJuICEhb2JqPy5bUVVFVUVdO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgcXVldWUuIFRoaXMgcXVldWUgaXMgY3JlYXRlZCBlbXB0eSwgd2l0aCBhIGJhY2tpbmcgYXJyYXkgb2ZcbiAqIGxlbmd0aCAwLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwL3F1ZXVlXG4gKiBAcmV0dXJucyB7bW9kdWxlOmNzcC9xdWV1ZX5RdWV1ZX0gQSBuZXcsIGVtcHR5IHF1ZXVlLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gcXVldWUoKSB7XG4gIHJldHVybiBPYmplY3QuY3JlYXRlKG51bGwsIHtcbiAgICBzdG9yZToge1xuICAgICAgdmFsdWU6IFtdLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9LFxuXG4gICAgcG9pbnRlcjoge1xuICAgICAgdmFsdWU6IDAsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0sXG5cbiAgICBbUVVFVUVdOiB7XG4gICAgICB2YWx1ZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgbnVtYmVyIG9mIGVsZW1lbnRzIHN0b3JlZCBpbiBhIHF1ZXVlLiBUaGlzIG1heSBvciBtYXkgbm90IGVxdWFsXG4gKiB0aGUgbGVuZ3RoIG9mIHRoZSBiYWNraW5nIHN0b3JlLCBhcyB0aGVyZSBpcyBvZnRlbiBlbXB0eSBzcGFjZSBhdCB0aGUgaGVhZCBvZlxuICogdGhlIGJhY2tpbmcgc3RvcmUuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3AvcXVldWVcbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC9xdWV1ZX5RdWV1ZX0gcXVldWUgVGhlIHF1ZXVlIHdob3NlIGl0ZW1zIGFyZSBiZWluZ1xuICogICAgIGNvdW50ZWQuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBudW1iZXIgb2YgaXRlbXMgaW4gdGhlIHF1ZXVlLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY291bnQocXVldWUpIHtcbiAgcmV0dXJuIHF1ZXVlLnN0b3JlLmxlbmd0aCAtIHF1ZXVlLnBvaW50ZXI7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGEgcXVldWUgaXMgZW1wdHkuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3AvcXVldWVcbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC9xdWV1ZX5RdWV1ZX0gcXVldWUgVGhlIHF1ZXVlIGJlaW5nIGNoZWNrZWQgZm9yIGVtcHRpbmVzcy5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IEVpdGhlciBgdHJ1ZWAgaWYgdGhlIHF1ZXVlIGlzIGVtcHR5IG9yIGBmYWxzZWAgaWYgaXQgaXNcbiAqICAgICBub3QuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBpc0VtcHR5KHF1ZXVlKSB7XG4gIHJldHVybiBxdWV1ZS5zdG9yZS5sZW5ndGggPT09IDA7XG59XG5cbi8qKlxuICogQWRkcyBhbiBpdGVtIHRvIGEgcXVldWUuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3AvcXVldWVcbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC9xdWV1ZX5RdWV1ZX0gcXVldWUgVGhlIHF1ZXVlIHdoaWNoIGlzIGhhdmluZyBhbiBpdGVtIGFkZGVkXG4gKiAgICAgdG8gaXQuXG4gKiBAcGFyYW0geyp9IGl0ZW0gVGhlIGl0ZW0gYmVpbmcgYWRkZWQgdG8gdGhlIHF1ZXVlLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZW5xdWV1ZShxdWV1ZSwgaXRlbSkge1xuICBxdWV1ZS5zdG9yZS5wdXNoKGl0ZW0pO1xufVxuXG4vKipcbiAqIFJlbW92ZXMgYW4gaXRlbSBmcm9tIGEgcXVldWUgYW5kIHJldHVybnMgdGhhdCBpdGVtLiBJZiB0aGUgcmVtb3ZhbCBjYXVzZXMgdGhlXG4gKiBhbW91bnQgb2YgZW1wdHkgc3BhY2UgYXQgdGhlIGhlYWQgb2YgdGhlIGJhY2tpbmcgc3RvcmUgdG8gZXhjZWVkIGEgdGhyZXNob2xkLFxuICogdGhhdCBlbXB0eSBzcGFjZSBpcyByZW1vdmVkLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwL3F1ZXVlXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AvcXVldWV+UXVldWV9IHF1ZXVlIFRoZSBxdWV1ZSB3aG9zZSBvbGRlc3QgaXRlbSBpcyB0byBiZVxuICogICAgIHJlbW92ZWQuXG4gKiBAcmV0dXJuIHsqfSBUaGUgb2xkZXN0IHN0b3JlZCBpdGVtIGluIHRoZSBxdWV1ZS5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGRlcXVldWUocXVldWUpIHtcbiAgaWYgKHF1ZXVlLnN0b3JlLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBFTVBUWTtcbiAgfVxuXG4gIGNvbnN0IGl0ZW0gPSBxdWV1ZS5zdG9yZVtxdWV1ZS5wb2ludGVyXTtcbiAgLy8gUmVtb3ZlcyB0aGUgaXRlbXMgaW4gdGhlIGJhY2tpbmcgc3RvcmUgYmVmb3JlIHRoZSBjdXJyZW50IHBvaW50ZXIsIGlmIHRoZXJlXG4gIC8vIGlzIGVub3VnaCBcImVtcHR5XCIgc3BhY2UgYmVmb3JlIHRoZSBwb2ludGVyIHRvIGp1c3RpZnkgaXQgKGkuZS4sIHRoZSB1bnVzZWRcbiAgLy8gcG9ydGlvbiBpcyBhdCBsZWFzdCBoYWxmIGFzIGxhcmdlIGFzIHRoZSB1c2VkIHBvcnRpb24pXG4gIGlmICgrK3F1ZXVlLnBvaW50ZXIgKiAyID49IHF1ZXVlLnN0b3JlLmxlbmd0aCkge1xuICAgIHF1ZXVlLnN0b3JlID0gcXVldWUuc3RvcmUuc2xpY2UocXVldWUucG9pbnRlcik7XG4gICAgcXVldWUucG9pbnRlciA9IDA7XG4gIH1cbiAgcmV0dXJuIGl0ZW07XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgbmV4dCBpdGVtIGluIGEgcXVldWUgd2l0aG91dCByZW1vdmluZyBpdC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcC9xdWV1ZVxuICogQHBhcmFtIHttb2R1bGU6Y3NwL3F1ZXVlflF1ZXVlfSBxdWV1ZSBUaGUgcXVldWUgd2hvc2Ugb2xkZXN0IGl0ZW0gaXMgdG8gYmVcbiAqICAgICBwZWVrZWQgYXQuXG4gKiBAcmV0dXJuIHsqfSBUaGUgb2xkZXN0IGl0ZW0gc3RvcmVkIGluIHRoZSBxdWV1ZS5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHBlZWsocXVldWUpIHtcbiAgcmV0dXJuIHF1ZXVlLnN0b3JlLmxlbmd0aCA9PT0gMCA/IEVNUFRZIDogcXVldWUuc3RvcmVbcXVldWUucG9pbnRlcl07XG59XG5cbi8qKlxuICogRmlsdGVycyBvdXQgYW55IGl0ZW0gaW4gYSBxdWV1ZSB0aGF0IGRvZXMgbm90IGNhdXNlIHRoZSBzdXBwbGllZCBwcmVkaWNhdGVcbiAqIGZ1bmN0aW9uIHRvIHJldHVybiBgdHJ1ZWAgd2hlbiBwYXNzZWQgdGhhdCBpdGVtLiBUaGlzIGlzIG5vdCBleGFjdGx5IGFcbiAqIGdlbmVyYWwgcHVycG9zZSBxdWV1ZSBvcGVyYXRpb24sIGJ1dCB3ZSBuZWVkIGl0IHdpdGggY2hhbm5lbHMgdGhhdCB3aWxsXG4gKiBvY2Nhc2lvbmFsbHkgd2FudCB0byBnZXQgcmlkIG9mIGluYWN0aXZlIGhhbmRsZXJzLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwL3F1ZXVlXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AvcXVldWV+UXVldWV9IHF1ZXVlIFRoZSBxdWV1ZSBiZWluZyBmaWx0ZXJlZC5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuIFRoZSBwcmVkaWNhdGUgZnVuY3Rpb24gdGhhdCBkZXRlcm1pbmVzIHdoZXRoZXIgYW5cbiAqICAgICBlbGVtZW50IHJlbWFpbnMgaW4gdGhlIHF1ZXVlLlxuICovXG5mdW5jdGlvbiBmaWx0ZXIocXVldWUsIHByZWRpY2F0ZSkge1xuICBmb3IgKGxldCBpID0gMCwgZW5kID0gY291bnQocXVldWUpOyBpIDwgZW5kOyBpKyspIHtcbiAgICBjb25zdCBpdGVtID0gZGVxdWV1ZShxdWV1ZSk7XG4gICAgaWYgKHByZWRpY2F0ZShpdGVtKSkge1xuICAgICAgZW5xdWV1ZShxdWV1ZSwgaXRlbSk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCB7XG4gIEVNUFRZLFxuICBxdWV1ZSxcbiAgaXNRdWV1ZSxcbiAgY291bnQsXG4gIGlzRW1wdHksXG4gIGVucXVldWUsXG4gIGRlcXVldWUsXG4gIHBlZWssXG4gIGZpbHRlclxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=