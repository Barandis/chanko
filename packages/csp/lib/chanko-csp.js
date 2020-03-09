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

      /*! exports provided: protocols, iterator, isIterable, kv, key, value, complete, uncomplete, isCompleted, ensureCompleted, ensureUncompleted, reduce, toFunction, toReducer, toTransducer, transduce, sequence, into, asArray, asObject, asString, asIterator, compose, isArray, isFunction, isGeneratorFunction, isNumber, isObject, isString */

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


        var modules_transformation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! modules/transformation */
        "./src/modules/transformation.js");
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "transduce", function () {
          return modules_transformation__WEBPACK_IMPORTED_MODULE_3__["transduce"];
        });
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "sequence", function () {
          return modules_transformation__WEBPACK_IMPORTED_MODULE_3__["sequence"];
        });
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "into", function () {
          return modules_transformation__WEBPACK_IMPORTED_MODULE_3__["into"];
        });
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "asArray", function () {
          return modules_transformation__WEBPACK_IMPORTED_MODULE_3__["asArray"];
        });
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "asObject", function () {
          return modules_transformation__WEBPACK_IMPORTED_MODULE_3__["asObject"];
        });
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "asString", function () {
          return modules_transformation__WEBPACK_IMPORTED_MODULE_3__["asString"];
        });
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "asIterator", function () {
          return modules_transformation__WEBPACK_IMPORTED_MODULE_3__["asIterator"];
        });
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "compose", function () {
          return modules_transformation__WEBPACK_IMPORTED_MODULE_3__["compose"];
        });
        /* harmony import */


        var modules_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! modules/utils */
        "./src/modules/utils.js");
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "isArray", function () {
          return modules_utils__WEBPACK_IMPORTED_MODULE_4__["isArray"];
        });
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "isFunction", function () {
          return modules_utils__WEBPACK_IMPORTED_MODULE_4__["isFunction"];
        });
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "isGeneratorFunction", function () {
          return modules_utils__WEBPACK_IMPORTED_MODULE_4__["isGeneratorFunction"];
        });
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "isNumber", function () {
          return modules_utils__WEBPACK_IMPORTED_MODULE_4__["isNumber"];
        });
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "isObject", function () {
          return modules_utils__WEBPACK_IMPORTED_MODULE_4__["isObject"];
        });
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "isString", function () {
          return modules_utils__WEBPACK_IMPORTED_MODULE_4__["isString"];
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
         * `{@link module:xduce.protocols|protocols}` is for.
         *
         * The best way to use these keys can be seen in the immutable-js example above.
         * Instead of worrying about the name of the key for the `init` protocol, the
         * value of `protocols.init` is used.
         *
         * `{@link module:xduce.protocols|protocols}` defines these protocol property
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
         * The `{@link module:xduce.iterator|iterator}` function can be passed a sorting
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
         * A helper function named `{@link module:xduce.property|property}` can improve
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
         * Every transducer function except for `{@link module:xduce.sequence|sequence}`
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
         * @module xduce
         */

        /**
         * An iterable as defined by JavaScript.
         *
         * @typedef JsIterable
         * @memberof module:xduce
         * @property {module:xduce.JsIterableFunction} Symbol.iterator A function that
         *     produces an iterator when called.
         */

        /**
         * A function that produces an iterator. This is the characteristic property of
         * a JavaScript iterable.
         *
         * @callback JsIterableFunction
         * @memberof module:xduce
         * @returns {module:xduce.Iterator} An iterator over the
         *     {@link module:xduce.JsIterable} that produced it.
         */

        /**
         * An iterable as defined by this library. Since it provides specific support
         * for objects, this type is merely a normal JavaScript iterable *or* a plain
         * object.
         *
         * @typedef {(Object|module:xduce.JsIterable)} Iterable
         * @memberof module:xduce
         */

        /**
         * A generic iterator. This conforms to the `iterator` protocol in that it has
         * a `{@link module:xduce.NextFunction|next}` function that produces
         * {@link module:xduce.NextValue|`iterator`-compatible objects}.
         *
         * @typedef Iterator
         * @memberof module:xduce
         * @property {module:xduce.NextFunction} next A function that, when called,
         *     returns the next iterator value.
         */

        /**
         * The function that satisfies the `iterator` protocol on an object. When
         * called, it returns the next value in the iterator.
         *
         * @callback NextFunction
         * @memberof module:xduce
         * @returns {module:xduce.NextValue} The next value in the iterator.
         */

        /**
         * The object returned by a call to `{@link module:xduce.NextFunction|next}`.
         * It indicates whether the iterator is complete and, if not, what the next
         * value is.
         *
         * @typedef {object} NextValue
         * @memberof module:xduce
         * @property {*} value The value that the iterator has provided.
         * @property {boolean} done Indicates whether the iterator has completed. If
         *     this is `true`, then `value` will be `undefined` and every subsequent
         *     call to `{@link module:xduce.NextFunction|next}` will continue to produce
         *     the same value. If it's `false`, then `value` represents the net value in
         *     the iterator, and the next call to
         *     `{@link module:xduce.NextFunction|next}` will continue to produce the
         *     next value.
         */

        /**
         * A sort function for the keys of an object. This conforms to the normal sort
         * function used in `Array.prototype.sort`.
         *
         * @callback SortFunction
         * @memberof module:xduce
         * @property {*} a The first value to be sorted.
         * @property {*} b The second value to be sorted.
         * @returns {number} Either `-1` if `a > b`, `1` if `a < b`, or `0` if `a ===
         *     b`.
         */

        /**
         * A function that can have an iterator created for it.
         *
         * @callback IterableFunction
         * @memberof module:xduce
         * @param {number} [index] The number of times that
         *     `{@link module:xduce.NextFunction|next}` has been called on the
         *     function's iterator. This will start at `0` for the first call to
         *     `{@link module:xduce.NextFunction|next}` and increase by one for each
         *     subsequent call.
         * @param {*} [last] The return value of the function the last time
         *     `{@link module:xduce.NextFunction|next}` was called on its iterator. For
         *     the first call, this is set to `undefined`.
         * @returns {*} The return value for that iteration.
         */

        /**
         * An object representation of a single-property object, but using one property
         * for the key and one for the value. This format is easier to use in
         * transformation functions.
         *
         * @typedef {object} PropertyObject
         * @memberof module:xduce
         * @property {(String|Symbol)} k The key of the single-property object that this
         *     object represents.
         * @property {*} v The value of the single-property object that this object
         *     represents.
         */

        /**
         * An init function, which provides a new, empty instance of a collection.
         *
         * @callback InitFunction
         * @memberof module:xduce
         * @returns {*} A new, empty instance of a collection.
         */

        /**
         * A step function, that reduces a collection and a new value to the
         * collection with the value added.
         *
         * @callback StepFunction
         * @memberof module:xduce
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
         * @memberof module:xduce
         * @param {*} input The value to be modified before being output.
         * @returns {*} The modified value to be output by a transducer.
         */

        /**
         * An object with all of the information necessary to reduce values into a
         * particular kind of collection. These are passed to
         * {@link module:xduce.reduce|reduce} and like functions.
         *
         * @typedef Reducer
         * @memberof module:xduce
         * @property {module:xduce.InitFunction} [Symbol.for("transducer/init")] The
         *     reducer's init function.
         * @property {module:xduce.StepFunction} Symbol.for("transducer/step") The
         *     reducer's step function.
         * @property {module:xduce.ResultFunction} Symbol.for("transducer/result") The
         *     reducer's result function.
         */

        /**
         * A collection that can have values reduced into it. Since this library
         * provides explicit support for arrays, objects, and strings, those three are
         * added to the {@link module:xduce.Reducer} type to define this.
         *
         * @typedef {(Array|String|Object|module:xduce.Reducer)} Reducible
         * @memberof module:xduce
         */

        /**
         * A collection that supports not only the regular iteraion over its contents,
         * but also reduction of values into it. It is an intersection type combining
         * {@link module:xduce.Iterable|Iterable} and
         * {@link module:xduce.Reducible|Reducible}.
         *
         * @typedef ExplicitIterableReducible
         * @memberof module:xduce
         * @property {module:xduce.JsIterableFunction} Symbol.iterator A function that
         *     produces an iterator when called.
         * @property {module:xduce.InitFunction} [Symbol.for("transducer/init")] The
         *     collection's init function.
         * @property {module:xduce.StepFunction} Symbol.for("transducer/step") The
         *     collection's step function.
         * @property {module:xduce.ResultFunction} Symbol.for("transducer/result") The
         *     collection's result function.
         */

        /**
         * The actual type used by reducible collections in this library. It takes the
         * property-based definition and adds built-in types that are specially
         * supported by the library.
         *
         * @typedef {(Array|Object|String|module:xduce.ExplicitIterableReducible)}
         *     IterableReducible
         * @memberof module:xduce
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
         * @memberof module:xduce
         * @param {module:xduce.TransducerFunction} xform A transducer to chain this
         *     transducer to.
         * @return {module:xduce.TransducerFunction} A new transducer consisting of the
         *     composition of this one and `xform`.
         */

        /**
         * An object containing all of the necessary function properties for
         * transforming data and then reducing it into an output value. This is the
         * same as {@link module:xduce.Reducer|Reducer} except that the `init` property
         * is not optional.
         *
         * @typedef Transducer
         * @memberof module:xduce
         * @property {module:xduce.InitFunction} Symbol.for("transducer/init") The
         *     transducer's init function.
         * @property {module:xduce.StepFunction} Symbol.for("transducer/step") The
         *     transducer's step function.
         * @property {module:xduce.ResultFunction} Symbol.for("transducer/result") The
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
         * Creates an iterator over an object.
         *
         * Details about this function are included in the documentation for
         * {@link module:xduce.iterator|iterator}.
         *
         * @param {object} obj The object being iterated over.
         * @param {module:xduce.SortFunction} [sortFn] An optional function used to sort
         *     the object keys before iteration. If it isn't provided, the keys will be
         *     sorted in the same order as `Object.keys(obj)` would sort them.
         * @returns {module:xduce.Iterator} An iterator over the properties of `obj`.
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
         * A convenience function that returns the first key and value in an object as
         * a two-property object, one property for the key and one for the value. This
         * is intended to work with the values provided by an object iterator, as the
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
         * @memberof module:xduce
         * @param {object} obj The object whose first property is returned.
         * @return {module:xduce.PropertyObject} The property as a two-property object.
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
         * @memberof module:xduce
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
         * @memberof module:xduce
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
         * {@link module:xduce.iterator|iterator}.
         *
         * @param {module:xduce.IterableFunction} fn The function to iterate over.
         * @returns {module:xduce.Iterator} An iterator over the return values of `fn`.
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
         * @memberof module:xduce
         * @param {*} value The value to create an iterator over.
         * @param {module:xduce.SortFunction} [sortFn] An optional sort function for
         *     sorting the keys of an object before iteration. It is ignored if `value`
         *     isn't a plain object.
         * @returns {module:xduce.Iterator} An iterator over `value`.
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
         * {@link module:xduce.iterator|iterator} can produce an iterator for them,
         * because not all functions work well with
         * {@link module:xduce.iterator|iterator}.
         *
         * @param {*} value The value to test for iterability.
         * @return {boolean} Either `true` if the value is iterable
         *     (`{@link module:xduce.iterator}` will return an iterator for it) or
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
         * @module xduce/protocol
         * @private
         */

        /**
         * The mapping of protocol names to their respective property key names. The
         * values of this map will depend on whether symbols are available.
         *
         * @typedef {object} ProtocolMap
         * @memberof module:xduce
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
         * @type {module:xduce.ProtocolMap}
         * @memberof module:xduce
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
         * @module reduction
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
         * @return {module:xduce.InitFunction} A function that, when called, returns an
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
         * @return {module:xduce.StepFunction} A reduction function for the provided
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
         * @return {module:xduce.ResultFunction} A function that, when given a reduced
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
         * @memberof module:xduce
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
         * @type {module:xduce.Reducer}
         * @private
         */


        const ARRAY_REDUCER = toReducer([]);
        /**
         * A reducer object for objects.
         *
         * @type {module:xduce.Reducer}
         * @private
         */

        const OBJECT_REDUCER = toReducer({});
        /**
         * A reducer object for strings.
         *
         * @type {module:xduce.Reducer}
         * @private
         */

        const STRING_REDUCER = toReducer("");
        /**
         * Creates a transducer from a function and a transducer to chain it to.
         *
         * This is in most respects just like {@link module:xduce.toReducer|toReducer},
         * with two notable differences. One is that it requires a transducer to chain
         * to, and it does the chaining as a part of creating the new transducer. The
         * other is that it includes a usable `init` function, where passing a function
         * to {@link module:xduce.toReducer|toReducer} would create an init function
         * that throws an error if it's called.
         *
         * This function applies the given function as the `step` function of the
         * returned transducer, and the `init` and `result` functions simply call the
         * same functions in the next transducer down the chain. This is precisely what
         * *most* transducers want...`init` and `result` functions are normally handled
         * by the reducer at the end of the transducer chain...but in the rare case
         * when `init` or `result` must do more than this, the transducer must be
         * created manually.
         *
         * This function does not automatically chain the `step` function to the next
         * one down the line, as that can be done in any number of different ways. Thus
         * the function itself should call the `step` function in `xform` in whatever
         * way is appropriate.
         *
         * @memberof module:xduce
         * @param {module:xduce.StepFunction} fn The step function for the transducer.
         * @param {module:xduce.Transducer} xform The next transducer object in the
         *     chain.
         * @returns {module:xduce.Transducer} A new transducer, chaining the supplied
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
         * to`{@link module:xduce.transduce|transduce}` or
         * `{@link module:xduce.reduce|reduce}`, or it can be a plain function that
         * takes two parameters and returns the result of reducing the second parameter
         * into the first.
         *
         * If there is no need for a transformation, then pass in the
         * `{@link module:transducers.identity|identity}` transducer.
         *
         * @memberof module:xduce
         * @param {module:xduce.Reducer} xform A transducer object whose step
         *     function will become the returned reduction function.
         * @param {(module:xduce.StepFunction|module:xduce.Reducer)} reducer A
         *     reducer that knows how to reduce values into an output collection. This
         *     can either be a reducing function or a transducer object whose `step`
         *     function knows how to perform this reduction.
         * @returns {module:xduce.StepFunction} A function that handles both the
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
         * @memberof module:xduce
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
         * @memberof module:xduce
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
         * @memberof module:xduce
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
         * This differs from {@link module:xduce.complete|complete} in that
         * if the value is already complete, this function won't complete it again.
         * Therefore thus function can't be used to make a value complete multiple
         * times.
         *
         * @memberof module:xduce
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
         * @memberof module:xduce
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
         * @memberof module:xduce
         * @param {*} collection The input collection. The only requirement of this
         *     collection is that it implement the `iterable` protocol. Special support
         *     is provided by the library for objects, so they can be used as well.
         * @param {module:xduce.Reducer} reducer An object that implements the `step`
         *     and `result` protocols. This object must know how to produce an output
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
      "./src/modules/transformation.js":
      /*!***************************************!*\
        !*** ./src/modules/transformation.js ***!
        \***************************************/

      /*! exports provided: transduce, sequence, into, asArray, asObject, asString, asIterator, compose */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "transduce", function () {
          return transduce;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "sequence", function () {
          return sequence;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "into", function () {
          return into;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "asArray", function () {
          return asArray;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "asObject", function () {
          return asObject;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "asString", function () {
          return asString;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "asIterator", function () {
          return asIterator;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "compose", function () {
          return compose;
        });
        /* harmony import */


        var modules_protocol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! modules/protocol */
        "./src/modules/protocol.js");
        /* harmony import */


        var modules_iteration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! modules/iteration */
        "./src/modules/iteration.js");
        /* harmony import */


        var modules_reduction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! modules/reduction */
        "./src/modules/reduction.js");
        /* harmony import */


        var modules_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! modules/utils */
        "./src/modules/utils.js");
        /**
         * Copyright (c) 2020 Thomas J. Otterson
         *
         * This software is released under the MIT License.
         * https://opensource.org/licenses/MIT
         */

        /**
         * Functions dealing with the actual transformation of values and for choosing
         * the reducer during transduction.
         *
         * @module xduce/transformation
         * @private
         */

        /**
         * Creates an iterator that is also a transducer, transforming its collection
         * one element at a time. This is the actual output of the
         * {@link module:xduce.asIterator|asIterator} function, as well as the output of
         * the {@link module:xduce.sequence|sequence} function when the input is an
         * iterator.
         *
         * The end user need not be concerned with the type of the output iterator in
         * these circumstances; the end user need only care that the output is, in fact,
         * an iterator and can be expected to act like one. For this reason, this
         * function and the type it returns are not exported.
         *
         * This object supports non-1-to-1 correspondences between input and output
         * values. For example, a filter transformation might return fewer output
         * elements than were in the input collection, while a repeat transformation
         * will return more. In either case, `next` in this class will return one
         * element per call.
         *
         * @param {module:xduce.Iterable} collection the input collection that the
         *     produced iterator will be iterating over.
         * @param {module:xduce.TransducerFunction} xform A function that creates a transducer
         *     object that defines the transformation being done to the iterator's
         *     elements. Any of the transducers in the
         *     {@link module:transducers|transducers} module can produce a suitable
         *     transducer function.
         * @return {module:xduce.Iterator} An iterator that will transform its input
         *     elements using the transducer function as its
         *     `{@link module:xduce.NextFunction|next}` function is called.
         * @private
         */


        function transducingIterator(collection, xform) {
          const stepReducer = {
            [modules_protocol__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](xiter, input) {
              xiter.items.unshift(input);
              return xiter;
            },

            [modules_protocol__WEBPACK_IMPORTED_MODULE_0__["protocols"].result](value) {
              return value;
            }

          };
          const iter = Object(modules_iteration__WEBPACK_IMPORTED_MODULE_1__["iterator"])(collection);
          const xf = xform(stepReducer);
          let completed = false; // This array is the key to working properly with step functions that return
          // more than one value. All of them are put into the items array. As long as
          // this array has values in it, the `next` function will return one value
          // popped from it rather than running the step function again.

          const items = []; // The `next` function here is rather simple. If there is already something in
          // the `items` array, it's returned. If not, the `step` function is run and,
          // if that results in a value in the `items` array, it's returned. Otherwise
          // an object with `{ done: true }` is returned.

          function next() {
            if (items.length === 0) {
              step();
            }

            if (items.length === 0) {
              return {
                done: true
              };
            }

            return {
              value: items.pop(),
              done: false
            };
          } // This is where most of the work happens. It gets the next value from the
          // input collection and runs it through the reduction step functions. If that
          // results in a value, it's given to the stepper object (which adds it to the
          // `items` array); otherwise the while loop continues to the next element of
          // the input collection. This ensures that there's something for the `next`
          // function to return each time it's called.
          //
          // If the collection has finished or if the step function returns a completed
          // object (which take will do after its limit of elements has been reached,
          // for instance), the iteration is finished by calling the result function.


          function step() {
            const count = items.length;

            while (items.length === count) {
              const stepValue = iter.next();

              if (stepValue.done || completed) {
                xf[modules_protocol__WEBPACK_IMPORTED_MODULE_0__["protocols"].result](result);
                break;
              }

              completed = Object(modules_reduction__WEBPACK_IMPORTED_MODULE_2__["isCompleted"])(xf[modules_protocol__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](result, stepValue.value));
            }
          } // The resulting object is an iterator, so to satisfy the iterable protocol
          // we just return that object itself


          function sIterator() {
            return result;
          } // The `result` name is hoisted and used in functions further up, so we have
          // to retain that name and can't just return the object without naming it


          const result = {
            items,
            next,
            step,
            [Symbol.iterator]: sIterator
          };
          return result;
        }
        /**
         * Transforms the elements of the input collection and reduces them into an
         * output collection.
         *
         * This is the lowest-level of the transduction functions that is likely to see
         * regular use. It does not assume anything about the reducer, as it asks for it
         * to be passed explicitly. This means that any kind of collection can be
         * produced, since the reducer is not tied to the input collection in any way.
         *
         * `transduce` also will accept an initial value for the resulting collection as
         * the optional last parameter. If this parameter isn't present, then the
         * initial value is determined from the transducer init protocol property on the
         * reducer. Note however that many reducers may not provide an initial value,
         * and in those cases it will *have* to be passed as a parameter.
         *
         * ```
         * import { protocols as p, transduce } from "@chanko/xduce";
         * import { map } from "@chanko/transducers";
         *
         * const xform = map(x => x + 1);
         *
         * const arrayReducer = {
         *   [p.init]() { return []; },
         *   [p.result](x) { return x; },
         *   [p.step](acc, x) {
         *     acc.push(x);
         *     return acc;
         *   }
         * };
         *
         * const stringReducer = {
         *   [p.init]() { return ''; },
         *   [p.result](x) { return x; },
         *   [p.step](acc, x) { return acc + x; }
         * };
         *
         * let result = transduce([1, 2, 3, 4, 5], xform, arrayReducer);
         * console.log(result);   // -> [2, 3, 4, 5, 6]
         *
         * result = transduce([1, 2, 3, 4, 5], xform, stringReducer);
         * console.log(result);   // -> "23456"
         *
         * result = transduce('12345', xform, arrayReducer);
         * console.log(result);   // -> [2, 3, 4, 5, 6]
         *
         * result = transduce('12345', xform, stringReducer);
         * console.log(result);   // -> "23456"
         * ```
         *
         * These examples illustrate a number of important concepts. First of all, the
         * transducer function is independent of the type of the collection; the same
         * transducer function is used no matter the type of input or output
         * collections. Secondly, two reducers are defined. These are objects that
         * conform to the transducer protocol (see the documentation on
         * `{@link module:xduce.protocols}`) and that know how to produce the output
         * collection of choice. In this case, the reducers know how to create new
         * arrays and strings (the `init` protocol) and how to add elements to arrays
         * and strings (the `step` protocol). Because these reducers do have `init`
         * protocol properties, the `transduce` calls do not require explicit initial
         * collections.
         *
         * The final point is that `transduce` can accept any kind of iterable
         * collection, and by passing in the proper reducer, it can produce any kind of
         * output collection. The same `transduce` function and the same map transformer
         * is used in all four examples, despite the input/output combination being
         * different in all four.
         *
         * The `reducer` parameter *can* be a reducer function instead of a reducer
         * object. If this is the case, the `init` parameter is required because a
         * function cannot define an initial value itself.
         *
         * The `init` collection doesn't have to be empty. If it isn't, the elements
         * that are already in it are retained and the transformed input elements are
         * reduced into the collection normally.
         *
         * Of course, the examples are not really necessary - the same thing could be
         * accomplished using `{@link module:xduce.into|into}` without having to create
         * the reducers (strings and arrays passed to `{@link module:xduce.into|into}`
         * as targets know how to reduce themselves already).
         *
         * @memberof module:xduce
         * @param {module:xduce.Iterable} collection The input collection. The only
         *     requirement of this collection is that it implement the `iterable`
         *     protocol. Special support is provided by the library for objects, so they
         *     can also be used.
         * @param {module:xduce.TransducerFunction} [xform] A function that creates a transducer
         *     object that defines the transformation being done to the input
         *     collection's elements. Any of the transducers in the
         *     {@link module:transducers|transducers} module can produce a suitable
         *     transducer function.
         * @param {(module:xduce.StepFunction|module:xduce.Reducer)} reducer Either a
         *     function or a reducer object that implements the transducer protocols
         *     (`init` is  only required if the `init` parameter is not present). This
         *     object must know how to produce an output collection through its `step`
         *     and `result` protocol functions. If this parameter is a function, then it
         *     is turned into a valid reducer object.
         * @param {module:xduce.Reducible} [init] A collection of the same type as the
         *     output collection. If this is not present, then the reducer's `init`
         *     protocol function is called instead to get the initial collection. If it
         *     is present and not empty, then the existing elements remain and the
         *     transformed input collection elements are added to it.
         * @return {*} A collection of a type determined by the passed reducer. The
         *     elements of this collection are the results from the transformer function
         *     being applied to each element of the input collection.
         */


        function transduce(collection, xform, reducer, init) {
          const r = Object(modules_utils__WEBPACK_IMPORTED_MODULE_3__["isFunction"])(reducer) ? Object(modules_reduction__WEBPACK_IMPORTED_MODULE_2__["toReducer"])(reducer) : reducer;
          const i = init !== null && init !== void 0 ? init : r[modules_protocol__WEBPACK_IMPORTED_MODULE_0__["protocols"].init]();
          const xf = xform ? xform(r) : r;
          return Object(modules_reduction__WEBPACK_IMPORTED_MODULE_2__["reduce"])(collection, xf, i);
        }
        /**
         * Transforms the elements of the input collection and reduces them into a new
         * array.
         *
         * The transformer is optional. If it isn't present, this function just converts
         * the input collection into an array.
         *
         * ```
         * import { asArray } from "@chanko/xduce";
         * import { map } from "@chanko/transducers";
         *
         * const xform = map(x => x + 1);
         *
         * let result = asArray([1, 2, 3, 4, 5], xform);
         * console.log(result);   // -> [2, 3, 4, 5, 6]
         *
         * result = asArray('12345', xform);
         * console.log(result);   // -> [2, 3, 4, 5, 6]
         *
         * result = asArray('12345');
         * console.log(result);   // -> [1, 2, 3, 4, 5]
         *
         * result = asArray({a: 1, b: 2});
         * console.log(result);   // -> [{ a: 1 }, { b: 2 }]
         * ```
         *
         * @memberof module:xduce
         * @param {module:xduce.Iterable} collection The input collection. The only
         *     requirement of this collection is that it implement the `iterable`
         *     protocol. Special support is provided by the library for objects, so they
         *     can also be used.
         * @param {module:xduce.TransducerFunction} [xform] A function that creates a transducer
         *     object that defines the transformation being done to the input
         *     collection's elements. Any of the transducers in the
         *     {@link module:transducers|transducers} module can produce a suitable
         *     transducer function. If this isn't present, the input collection will
         *     simply be reduced into an array without transformation.
         * @return {Array} An array containing all of the transformed values from the
         *     input collection elements.
         */


        function asArray(collection, xform) {
          return transduce(collection, xform, modules_reduction__WEBPACK_IMPORTED_MODULE_2__["ARRAY_REDUCER"]);
        }
        /**
         * Transforms the elements of the input collection and reduces them into a new
         * object.
         *
         * The transformer is optional. If it isn't present, this function just converts
         * the input collection into an object. When this happens, if the input
         * collection is not an object or an array of objects, numbers starting at `0`
         * will be used as keys for the values provided by the input collection.
         *
         * ```
         * import { asObject, kv } from "@chanko/xduce";
         * import { map } from "@chanko/transducers";
         *
         * const fn = prop => {
         *   const { k, v } = kv(prop);
         *   return { [k]: v + 1 };
         * }
         * const xform = map(fn);
         *
         * let result = asObject({ a: 1, b: 2 }, xform);
         * console.log(result);   // -> { a: 2, b: 3 }
         *
         * result = asObject([{ a: 1 }, { b: 2 }], xform);
         * console.log(result);   // -> { a: 2, b: 3 }
         *
         * result = asObject([1, 2, 3, 4, 5]);
         * console.log(result);   // -> { 0: 1, 1: 2, 2: 3, 3: 4, 4: 5 }
         *
         * result = asObject([{ a: 1 }, { b: 2 }]);
         * console.log(result);   // -> { a: 1, b: 2 }
         *
         * result = asObject("hello");
         * console.log(result);   // -> { 0: "h", 1: "e", 2: "l", 3: "l", 4: "o" }
         * ```
         *
         * @memberof module:xduce
         * @param {module:xduce.Iterable} collection The input collection. The only
         *     requirement of this collection is that it implement the `iterable`
         *     protocol. Special support is provided by the library for objects, so they
         *     can also be used.
         * @param {module:xduce.Tranducer} [xform] A function that creates a transducer
         *     object that defines the transformation being done to the input
         *     collection's elements. Any of the transducers in the
         *     {@link module:transducers|transducers} module can produce a suitable
         *     transducer function. If this isn't present, the input collection will
         *     simply be reduced into an object without transformation.
         * @return {Object} An object containing all of the transformed values from the
         *     input collection elements.
         */


        function asObject(collection, xform) {
          return transduce(collection, xform, modules_reduction__WEBPACK_IMPORTED_MODULE_2__["OBJECT_REDUCER"]);
        }
        /**
         * Transforms the elements of the input collection and reduces them into a new
         * string.
         *
         * The transformer is optional. If it isn't present, this function just converts
         * the input collection into an string. If this is the case and the input
         * collection is an object, only the values will be concatenated into a string.
         *
         * Otherwise, transforming objects into strings only makes much sense if the
         * transducer produces only a single output from each of the objects key/value
         * pairs.
         *
         * ```
         * import { transduce, key } from "@chanko/xduce";
         * import { map } from "@chanko/transducers";
         *
         * const xform = map(x => x.toUpperCase());
         *
         * let result = asString('hello', xform);
         * console.log(result);   // -> "HELLO"
         *
         * result = asString(['h', 'e', 'l', 'l', 'o'], xform);
         * console.log(result);   // -> "HELLO"
         *
         * result = asString({ a: 1, c: 2, b: 3 }, map(key));
         * console.log(result);   // -> "acb"
         *
         * result = asString([1, 2, 3, 4, 5]);
         * console.log(result);   // -> "12345"
         *
         * result = asString({ a: 1, c: 2, b: 3 });
         * console.log(result);   // -> "123"
         * ```
         *
         * @memberof module:xduce
         * @param {module:xduce.Iterable} collection The input collection. The only
         *     requirement of this collection is that it implement the `iterable`
         *     protocol. Special support is provided by the library for objects, so they
         *     can also be used.
         * @param {module:xduce.TransducerFunction} [xform] A function that creates a transducer
         *     object that defines the transformation being done to the input
         *     collection's elements. Any of the transducers in the
         *     {@link module:transducers|transducers} module can produce a suitable
         *     transducer function. If this isn't present, the input collection will
         *     simply be reduced into a string without transformation.
         * @return {String} A string containing all of the transformed values from the
         *     input collection elements.
         */


        function asString(collection, xform) {
          return transduce(collection, xform, modules_reduction__WEBPACK_IMPORTED_MODULE_2__["STRING_REDUCER"]);
        }
        /**
         * Transforms the elements of the input collection and reduces them into a new
         * iterator.
         *
         * The transformer is optional. If it isn't present, this function just converts
         * the input collection into an iterator.
         *
         * *(The results here are shown passed through `asArray` because there's no
         * printable representation of an iterator to show. The `asArray` calls are for
         * demonstration purposes only.)*
         *
         * ```
         * import { asIterator, asArray } from "@chanko/xduce";
         * import { map } from "@chanko/transducers";
         *
         * const xform = map(x => x + 1);
         * function* five() {
         *   for (let i = 1; i <= 5; ++i) {
         *     yield i;
         *   }
         * };
         *
         * let result = asIterator(five(), xform);
         * console.log(asArray(result));   // -> [2, 3, 4, 5, 6]
         *
         * result = asIterator([1, 2, 3, 4, 5], xform);
         * console.log(asArray(result));   // -> [2, 3, 4, 5, 6]
         *
         * result = asIterator([1, 2, 3, 4, 5]);
         * console.log(asArray(result));   // -> [1, 2, 3, 4, 5]
         *
         * result = asIterator({a: 1, b: 2});
         * console.log(asArray(result));   // -> [{ a: 1 }, { b: 2 }]
         * ```
         *
         * @memberof module:xduce
         * @param {module:xduce.Iterable} collection The input collection. The only
         *     requirement of this collection is that it implement the `iterable`
         *     protocol. Special support is provided by the library for objects, so they
         *     can also be used.
         * @param {module:xduce.TransducerFunction} [xform] A function that creates a transducer
         *     object that defines the transformation being done to the input
         *     collection's elements. Any of the transducers in the
         *     {@link module:transducers|transducers} module can produce a suitable
         *     transducer function. If this isn't present, the input collection will
         *     simply be reduced into an iterator without transformation.
         * @return {module:xduce.Iterator} An iterator containing all of the transformed
         *     values from the input collection elements.
         */


        function asIterator(collection, xform) {
          return xform ? transducingIterator(collection, xform) : Object(modules_iteration__WEBPACK_IMPORTED_MODULE_1__["iterator"])(collection);
        }
        /**
         * Transforms the elements of the input collection and reduces them into a new
         * collection of the same type.
         *
         * This is the highest level of the three main transduction functions
         * (`sequence`, `{@link module:xduce.into|into}`, and
         * `{@link module:xduce.transduce|transduce}`). It creates a new collection of
         * the same type as the input collection and reduces the transformed elements
         * into it. Additionally, unlike `{@link module:xduce.into|into}` and
         * `{@link module:xduce.transduce|transduce}`, this function is capable of
         * producing an iterator (as long as the input is an iterator).
         *
         * The input collection must not only implement the `iterator` protocol (as in
         * the last two functions) but also the `init`, `result`, and `step` transducer
         * protocols. Special support is provided for arrays, strings, objects, and
         * iterators, so they need not implement any protocol.
         *
         * The obvious limitation of this function is that the type of output collection
         * cannot be chosen. Since it is always the same as the input collection, this
         * function cannot be used to convert a collection into a different type.
         *
         * ```
         * import { sequence } from "@chanko/xduce";
         * import { map } from "@chanko/transducers";
         *
         * const xform = map(x => x + 1);
         *
         * let result = sequence([1, 2, 3, 4, 5], xform);
         * console.log(result);   // -> result = [2, 3, 4, 5, 6]
         *
         * result = sequence('12345', xform);
         * console.log(result);   // -> result = '23456'
         * ```
         *
         * These examples are identical to some of the examples from the `asX`
         * functions. Other examples are not possible with `sequence` because they have
         * different input and output collection types.
         *
         * @memberof module:xduce
         * @param {module:xduce.ReducibleIterable} collection The input collection. This
         *     must implement the `iterator`, `init`, `result`, and `step` protocols.
         *     Special support is provided for arrays, strings, objects, and iterators,
         *     so they do not have to implement any protocols.
         * @param {module:xduce.TransducerFunction} xform A function that creates a transducer
         *     object that defines the transformation being done to the input
         *     collection's elements. Any of the transducers in the
         *     {@link module:xduce.transducers|transducers} module can produce a
         *     suitable transducer function.
         * @return {module:xduce.ReducibleIterable} A collection of the same type as the
         *     input collection, containing all of the transformed values from the input
         *     collection elements.
         */


        function sequence(collection, xform) {
          switch (true) {
            case Object(modules_utils__WEBPACK_IMPORTED_MODULE_3__["isArray"])(collection):
              return asArray(collection, xform);

            case Object(modules_utils__WEBPACK_IMPORTED_MODULE_3__["isObject"])(collection):
              return asObject(collection, xform);

            case Object(modules_utils__WEBPACK_IMPORTED_MODULE_3__["isString"])(collection):
              return asString(collection, xform);

            case Object(modules_protocol__WEBPACK_IMPORTED_MODULE_0__["isImplemented"])(collection, "step"):
              return transduce(collection, xform, collection);

            case Object(modules_protocol__WEBPACK_IMPORTED_MODULE_0__["isImplemented"])(collection, "iterator"):
              return asIterator(collection, xform);

            default:
              throw Error(`Cannot sequence collection: ${collection}`);
          }
        }
        /**
         * Transforms the elements of the input collection and reduces them into the
         * target collection.
         *
         * This is much like `{@link module:xduce.transduce|transduce}`, except that
         * instead of explicitly providing a reducer (and perhaps an initial
         * collection), the target collection acts as a reducer itself. This requires
         * that the collection implement the `init`, `result`, and `step` transducer
         * protocol functions.
         *
         * If no transducer function is provided, the input collection elements are
         * reduced into the target collection without being transformed. This can be
         * used to convert one kind of collection into another.
         *
         * ```
         * import { into } from "@chanko/xduce";
         * import { map } from "@chanko/transducers";
         *
         * const xform = map(x => x + 1);
         *
         * let result = into([], [1, 2, 3, 4, 5], xform);
         * console.log(result);   // -> [2, 3, 4, 5, 6]
         *
         * result = into("", [1, 2, 3, 4, 5], xform);
         * console.log(result);   // -> "23456"
         *
         * result = into([], "12345", xform);
         * console.log(result);   // -> [2, 3, 4, 5, 6]
         *
         * result = into("", "12345", xform);
         * console.log(result);   // -> "23456"
         * ```
         *
         * @memberof module:xduce
         * @param {module:xduce.Reducible} target The collection into which all of the
         *     transformed input collection elements will be reduced. This collection
         *     must implement the `init`, `result`, and `step` protocol functions from
         *     the transducer protocol. Special support is provided for arrays, strings,
         *     and objects, so they need not implement the protocol.
         * @param {module:xduce.Iterable} collection The input collection. The only
         *     requirement of this collection is that it implement the `iterator`
         *     protocol. Special support is provided by the library for objects, to they
         *     can also be used.
         * @param {module:xduce.TransducerFunction} [xform] A function that creates a transducer
         *     object that defines the transformation being done to the input
         *     collection's elements. Any of the transducers in the
         *     {@link module:transducers|transducers} mnodule can produce a suitable
         *     transducer function. If this isn't present, the input collection will
         *     simply be reduced into the target collection without transformation.
         * @return {module:xduce.Reducible} The `target` collection, with all of the
         *     tranformed input collection elements reduced onto it.
         */


        function into(target, collection, xform) {
          switch (true) {
            case Object(modules_utils__WEBPACK_IMPORTED_MODULE_3__["isArray"])(target):
              return transduce(collection, xform, modules_reduction__WEBPACK_IMPORTED_MODULE_2__["ARRAY_REDUCER"], target);

            case Object(modules_utils__WEBPACK_IMPORTED_MODULE_3__["isObject"])(target):
              return transduce(collection, xform, modules_reduction__WEBPACK_IMPORTED_MODULE_2__["OBJECT_REDUCER"], target);

            case Object(modules_utils__WEBPACK_IMPORTED_MODULE_3__["isString"])(target):
              return transduce(collection, xform, modules_reduction__WEBPACK_IMPORTED_MODULE_2__["STRING_REDUCER"], target);

            case Object(modules_protocol__WEBPACK_IMPORTED_MODULE_0__["isImplemented"])(target, "step"):
              return transduce(collection, xform, target, target);

            default:
              throw Error(`Cannot reduce collection into ${target}: ${collection}`);
          }
        }
        /**
         * Composes two or more transducer functions into a single transducer function.
         *
         * Each function that takes a transducer function
         * (`{@link module:xduce.sequence|sequence}`, `{@link module:xduce.into|into}`,
         * etc.) is only capable of accepting one of them. If there is a need to have
         * several transducers chained together, then use `compose` to create a
         * transducer function that does what all of them do.
         *
         * NOTE: In functional programming, a compose function is generally ordered so
         * that the first-executed function is listed last. This is done in the opposite
         * way, with the first transducer executing first, etc. This is a more natural
         * ordering for transducer functions because there is a very real directional
         * pull of elements through a chain of composed transducer functions.
         *
         * ```
         * import { compose, sequence } from "@chanko/xduce";
         * import { map, filter, take } from "@chanko/transducers";
         *
         * const add1 = x => x + 1;
         * const odd = x => x % 2 !== 0;
         *
         * const xform = compose(map(add1), filter(odd), take(3));
         *
         * const result = sequence([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], xform);
         * console.log(result);   // -> [3, 5, 7];
         * ```
         *
         * @memberof module:xduce
         * @param {...module:xduce.TransducerFunction} fns One or more function that each create
         *     a transducer object that defines the transformation being done to a
         *     collection's elements. Any of the transducers in the
         *     {@link module:transducers|transducers} module can produce a suitable
         *     transducer function.
         * @return {module:xduce.TransducerFunction} A transducer function that produces a
         *     transducer object that performs *all* of the transformations of the
         *     objects produced by the input transducer functions.
         */


        function compose(...fns) {
          const reversed = fns.reverse();
          return value => reversed.reduce((acc, fn) => fn(acc), value);
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
         * @module xduce/utils
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
         * @memberof module:xduce
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
         * @memberof module:xduce
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
         * @memberof module:xduce
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
         * @memberof module:xduce
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
         * @memberof module:xduce
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
         * @memberof module:xduce
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
 * @module buffer
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
 * @param {module:core.TransducerFunction} [options.transducer] A
 *     transducer to run each value through before putting it onto the channel.
 *     This function should expect one parameter (another transducer that it's
 *     chained to) and return an object that conforms to the transducer
 *     protocol. If a transducer is provided on an unbuffered channel, an error
 *     will be thrown.
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
 * @param {module:core.TransducerFunction} transducer The transducer used
 *     to transform values on the new channel.
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jc3Avd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2NzcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jc3AvL2hvbWUvYmFyYW5kaXMvRGV2ZWxvcG1lbnQvcHJvamVjdHMvY2hhbmtvL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL0FzeW5jR2VuZXJhdG9yLmpzIiwid2VicGFjazovL2NzcC8vaG9tZS9iYXJhbmRpcy9EZXZlbG9wbWVudC9wcm9qZWN0cy9jaGFua28vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvQXdhaXRWYWx1ZS5qcyIsIndlYnBhY2s6Ly9jc3AvL2hvbWUvYmFyYW5kaXMvRGV2ZWxvcG1lbnQvcHJvamVjdHMvY2hhbmtvL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2F3YWl0QXN5bmNHZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vY3NwLy9ob21lL2JhcmFuZGlzL0RldmVsb3BtZW50L3Byb2plY3RzL2NoYW5rby9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy93cmFwQXN5bmNHZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vY3NwLy9ob21lL2JhcmFuZGlzL0RldmVsb3BtZW50L3Byb2plY3RzL2NoYW5rby9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovL2NzcC8vaG9tZS9iYXJhbmRpcy9EZXZlbG9wbWVudC9wcm9qZWN0cy9jaGFua28vbm9kZV9tb2R1bGVzL3NldGltbWVkaWF0ZS9zZXRJbW1lZGlhdGUuanMiLCJ3ZWJwYWNrOi8vY3NwLy9ob21lL2JhcmFuZGlzL0RldmVsb3BtZW50L3Byb2plY3RzL2NoYW5rby9ub2RlX21vZHVsZXMvdGltZXJzLWJyb3dzZXJpZnkvbWFpbi5qcyIsIndlYnBhY2s6Ly9jc3AvKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovL2NzcC9jb3JlL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9jc3AvY29yZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jc3AvY29yZS9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY3NwL2NvcmUvc3JjL21vZHVsZXMvaXRlcmF0aW9uLmpzIiwid2VicGFjazovL2NzcC9jb3JlL3NyYy9tb2R1bGVzL3Byb3RvY29sLmpzIiwid2VicGFjazovL2NzcC9jb3JlL3NyYy9tb2R1bGVzL3JlZHVjdGlvbi5qcyIsIndlYnBhY2s6Ly9jc3AvY29yZS9zcmMvbW9kdWxlcy90cmFuc2Zvcm1hdGlvbi5qcyIsIndlYnBhY2s6Ly9jc3AvY29yZS9zcmMvbW9kdWxlcy91dGlscy5qcyIsIndlYnBhY2s6Ly9jc3AvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY3NwLy4vc3JjL21vZHVsZXMvYnVmZmVyLmpzIiwid2VicGFjazovL2NzcC8uL3NyYy9tb2R1bGVzL2NoYW5uZWwvaGFuZGxlci5qcyIsIndlYnBhY2s6Ly9jc3AvLi9zcmMvbW9kdWxlcy9jaGFubmVsL2luZGV4LmpzIiwid2VicGFjazovL2NzcC8uL3NyYy9tb2R1bGVzL2NoYW5uZWwvc2VsZWN0LmpzIiwid2VicGFjazovL2NzcC8uL3NyYy9tb2R1bGVzL2Rpc3BhdGNoZXIuanMiLCJ3ZWJwYWNrOi8vY3NwLy4vc3JjL21vZHVsZXMvcHJvY2Vzcy5qcyIsIndlYnBhY2s6Ly9jc3AvLi9zcmMvbW9kdWxlcy9xdWV1ZS5qcyJdLCJuYW1lcyI6WyJrZXlzIiwiT2JqZWN0IiwiaW5kZXgiLCJrIiwib2JqIiwia2V5IiwidiIsImt2IiwiY3VycmVudCIsImZuIiwic29ydEZuIiwiaXNGdW5jdGlvbiIsInZhbHVlIiwiU3ltYm9sIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImZ1bmN0aW9uSXRlcmF0b3IiLCJpc09iamVjdCIsIm9iamVjdEl0ZXJhdG9yIiwiaXNJbXBsZW1lbnRlZCIsInByb3RvY29scyIsImluaXQiLCJzdGVwIiwicmVzdWx0IiwicmVkdWNlZCIsImNvbGxlY3Rpb24iLCJwIiwiaXNTdHJpbmciLCJpc0FycmF5IiwiRXJyb3IiLCJhY2MiLCJtYXgiLCJNYXRoIiwiaW5wdXQiLCJBUlJBWV9SRURVQ0VSIiwidG9SZWR1Y2VyIiwiT0JKRUNUX1JFRFVDRVIiLCJTVFJJTkdfUkVEVUNFUiIsInhmb3JtIiwiciIsImlzQ29tcGxldGVkIiwiY29tcGxldGUiLCJ1bmNvbXBsZXRlIiwiaXRlciIsIml0ZXJhdG9yIiwibmFtZSIsInJlZHVjZXIiLCJzdGVwUmVkdWNlciIsInhpdGVyIiwieGYiLCJjb21wbGV0ZWQiLCJpdGVtcyIsImRvbmUiLCJjb3VudCIsInN0ZXBWYWx1ZSIsInNJdGVyYXRvciIsImkiLCJyZWR1Y2UiLCJ0cmFuc2R1Y2UiLCJ0cmFuc2R1Y2luZ0l0ZXJhdG9yIiwiYXNBcnJheSIsImFzT2JqZWN0IiwiYXNTdHJpbmciLCJhc0l0ZXJhdG9yIiwidGFyZ2V0IiwicmV2ZXJzZWQiLCJmbnMiLCJ0b1N0cmluZyIsInByb3RvIiwiY3RvciIsImlzRmluaXRlIiwiQXJyYXkiLCJCVUZGRVIiLCJGSVhFRCIsIkRST1BQSU5HIiwiU0xJRElORyIsImlzQnVmZmVyIiwiZml4ZWQiLCJzaXplIiwiY3JlYXRlIiwicXVldWUiLCJxIiwiZHJvcHBpbmciLCJzbGlkaW5nIiwiYnVmZmVyIiwicUNvdW50IiwiaXNGdWxsIiwiYWRkIiwiaXRlbSIsImVucXVldWUiLCJkZXF1ZXVlIiwicmVtb3ZlIiwiTUFYX0RJUlRZIiwiTUFYX1FVRVVFRCIsIkNMT1NFRCIsIkJPWCIsImlzQm94IiwiaXNSZWR1Y2VkIiwiYm94Iiwid3JpdGFibGUiLCJzZW5kQm94IiwiaGFuZGxlciIsImNoYW5uZWwiLCJpc1RpbWVkIiwibWF4RGlydHkiLCJtYXhRdWV1ZWQiLCJyZWN2cyIsInNlbmRzIiwiZGlydHlSZWN2cyIsImRpcnR5U2VuZHMiLCJjbG9zZWQiLCJpc0J1ZmZlcmVkIiwiaGFuZGxlU2VuZCIsImNvbW1pdCIsInJlY2VpdmVyIiwiY2FsbGJhY2siLCJFTVBUWSIsImFjdGl2ZSIsInZhbCIsImRpc3BhdGNoIiwiY2xvc2UiLCJmaWx0ZXIiLCJzZW5kZXIiLCJoYW5kbGVSZWN2Iiwic2VuZEhhbmRsZXIiLCJERUZBVUxUX0hBTkRMRVIiLCJvcEhhbmRsZXIiLCJoYW5kbGVFeGNlcHRpb24iLCJleCIsImhhbmRsZXJUcmFuc2R1Y2VyIiwiYnVmZmVyUmVkdWNlciIsInBhcnNlQXJncyIsIm9wdGlvbnMiLCJkZWZhdWx0T3B0aW9ucyIsImJ1ZiIsIm9wdHMiLCJ0cmFuc2R1Y2VyIiwidGltZXIiLCJhc3NpZ24iLCJjaGFuIiwiY2giLCJjaGFuSW1wbCIsInJlY3YiLCJhc3luY0l0ZXJhdG9yIiwic2V0VGltZW91dCIsImNsb3NlSW1wbCIsInRpbWVkQ2hhbiIsImRlbGF5IiwidHJhbnNDaGFuIiwiaXNDbG9zZWQiLCJzZW5kQXN5bmMiLCJyZWN2QXN5bmMiLCJzZW5kIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWN2T3JUaHJvdyIsInJlamVjdCIsInByb3RvdHlwZSIsImlzUHJvdG90eXBlT2YiLCJjYWxsIiwiREVGQVVMVCIsInNlbGVjdEhhbmRsZXIiLCJnZXQiLCJyYW5kb21BcnJheSIsInVwcGVyIiwiYXJyYXkiLCJwdXNoIiwiaiIsImZsb29yIiwicmFuZG9tIiwidGVtcCIsInNlbGVjdFJlc3VsdCIsInNlbGVjdEFzeW5jIiwib3BzIiwibGVuZ3RoIiwicHJpb3JpdHkiLCJpbmRpY2VzIiwiY3JlYXRlU2VsZWN0SGFuZGxlciIsIm9wIiwiaGFzT3duUHJvcGVydHkiLCJkZWZhdWx0Iiwic2VsZWN0IiwiU0VUX0lNTUVESUFURSIsIk1FU1NBR0VfQ0hBTk5FTCIsIlNFVF9USU1FT1VUIiwiYmF0Y2hTaXplIiwiZGlzcGF0Y2hNZXRob2QiLCJkaXNwYXRjaGVyIiwiY3JlYXRlRGlzcGF0Y2hlciIsInJ1bm5pbmciLCJxdWV1ZWQiLCJjYWxjRGlzcGF0Y2hNZXRob2QiLCJzZXRJbW1lZGlhdGUiLCJwcm9jZXNzVGFza3MiLCJNZXNzYWdlQ2hhbm5lbCIsInBvcnQxIiwib25tZXNzYWdlIiwicG9ydDIiLCJwb3N0TWVzc2FnZSIsInRhc2siLCJzZXREaXNwYXRjaGVyIiwiY29uZmlnIiwic2xlZXAiLCJnbyIsImFyZ3MiLCJqb2luIiwiYWxsIiwiUVVFVUUiLCJpc1F1ZXVlIiwic3RvcmUiLCJwb2ludGVyIiwiaXNFbXB0eSIsInNsaWNlIiwicGVlayIsInByZWRpY2F0ZSIsImVuZCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSxpQkFBaUIsbUJBQU8sQ0FBQyw2RUFBYzs7QUFFdkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxnQzs7Ozs7Ozs7Ozs7QUNuR0E7QUFDQTtBQUNBOztBQUVBLDZCOzs7Ozs7Ozs7OztBQ0pBLGlCQUFpQixtQkFBTyxDQUFDLDZFQUFjOztBQUV2QztBQUNBO0FBQ0E7O0FBRUEsc0M7Ozs7Ozs7Ozs7O0FDTkEscUJBQXFCLG1CQUFPLENBQUMscUZBQWtCOztBQUUvQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDOzs7Ozs7Ozs7OztBQ1JBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFVBQVU7Ozs7Ozs7Ozs7OztBQ3ZMdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGlCQUFpQjtBQUN0QztBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMENBQTBDLHNCQUFzQixFQUFFO0FBQ2xFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDekxEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxtQkFBTyxDQUFDLHFFQUFjO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzlEQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0Qzs7QUFFNUM7Ozs7Ozs7Ozs7OztBQ25CQTtBQUNBLFlBQ0EsMkJBREEsS0FFQSxFQUtBO0FBQ0MsQ0FURCxFQVNDLElBVEQsRUFTQztBQUNEOzs7OztBQ1ZBO0FBQUE7O0FBQ0E7QUFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQTs7O0FBRUE7QUFBQTs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBOztBQUNBOzs7QUFBQTtBQUNBO0FBQUEscUJBREE7O0FBRUE7QUFBQSxrQkFGQTs7QUFHQTtBQUFBO0FBQ0E7O0FBSkE7OztBQU1BO0FBQUE7O0FBQ0E7O0FBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUE7QUFDQTtBQUFBOzs7OztBQUdBO0FBQUE7O0FBQ0E7OztBQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBMEMsNEJBQTFDO0FBQTBDO0FBQTFDO0FBQ0E7QUFBQTtBQUNBOztBQUFBLE9BSkE7OztBQU1BO0FBQUE7O0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBd0Q7QUFBeEQ7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQWlEO0FBQWpEO0FBQ0E7QUFBQSxPQUxBOzs7QUFPQTtBQUFBOztBQUNBO0FBQUE7O0FBQ0E7QUFBQTs7QUFDQTtBQUFBOztBQUNBO0FBQUE7O0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOztBQUFBO0FBQ0E7O0FBQUE7QUFDQTs7QUFBQTtBQUNBOztBQUFBO0FBQ0E7OztBQUFBO0FBQXlDLDBCQUF6QztBQUF5QztBQUF6QztBQUNBOztBQUFBO0FBQWdIO0FBQXFCLFNBQXJJLENBQXFJLElBQXJJLENBQXFJLElBQXJJLEVBQXFJLEdBQXJJO0FBQ0E7O0FBQUE7QUFDQTtBQUFBLE9BVEE7OztBQVdBO0FBQUE7O0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBMkI7QUFBNEIsU0FEdkQ7QUFFQTtBQUFBO0FBQWlDO0FBQWUsU0FGaEQ7QUFHQTs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUEsT0FOQTs7O0FBUUE7QUFBQTs7QUFDQTs7O0FBQUE7QUFBc0Q7QUFBK0QsT0FBckg7OztBQUVBO0FBQUE7O0FBQ0E7OztBQUFBOzs7OztBQUdBO0FBQUE7O0FBQ0E7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7QUFNQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrUkE7Ozs7Ozs7OztBQVNBOzs7Ozs7Ozs7O0FBVUE7Ozs7Ozs7OztBQVNBOzs7Ozs7Ozs7OztBQVdBOzs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkE7Ozs7Ozs7Ozs7OztBQVlBOzs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBOzs7Ozs7Ozs7Ozs7O0FBYUE7Ozs7Ozs7O0FBUUE7Ozs7Ozs7Ozs7O0FBV0E7Ozs7Ozs7Ozs7O0FBV0E7Ozs7Ozs7Ozs7Ozs7OztBQWVBOzs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JBOzs7Ozs7Ozs7O0FBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMWVBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFB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QixHQUEyQjFELEtBQTNCLEdBQW1DcEMsS0FBSyxDQUFDaUksS0FBTixDQUFZakksS0FBSyxDQUFDa0ksT0FBbEIsQ0FBMUM7QUFDRDtBQUVEOzs7Ozs7Ozs7Ozs7O0FBV0EsU0FBU3pGLE1BQVQsQ0FBZ0J6QyxLQUFoQixFQUF1QnNJLFNBQXZCLEVBQWtDO0FBQ2hDLE9BQUssSUFBSTlKLENBQUMsR0FBRyxDQUFSLEVBQVcrSixHQUFHLEdBQUdsSyxLQUFLLENBQUMyQixLQUFELENBQTNCLEVBQW9DeEIsQ0FBQyxHQUFHK0osR0FBeEMsRUFBNkMvSixDQUFDLEVBQTlDLEVBQWtEO0FBQ2hELFVBQU1nQyxJQUFJLEdBQUdFLE9BQU8sQ0FBQ1YsS0FBRCxDQUFwQjs7QUFDQSxRQUFJc0ksU0FBUyxDQUFDOUgsSUFBRCxDQUFiLEVBQXFCO0FBQ25CQyxhQUFPLENBQUNULEtBQUQsRUFBUVEsSUFBUixDQUFQO0FBQ0Q7QUFDRjtBQUNGIiwiZmlsZSI6ImNoYW5rby1jc3AuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJjc3BcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiY3NwXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJ2YXIgQXdhaXRWYWx1ZSA9IHJlcXVpcmUoXCIuL0F3YWl0VmFsdWVcIik7XG5cbmZ1bmN0aW9uIEFzeW5jR2VuZXJhdG9yKGdlbikge1xuICB2YXIgZnJvbnQsIGJhY2s7XG5cbiAgZnVuY3Rpb24gc2VuZChrZXksIGFyZykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVxdWVzdCA9IHtcbiAgICAgICAga2V5OiBrZXksXG4gICAgICAgIGFyZzogYXJnLFxuICAgICAgICByZXNvbHZlOiByZXNvbHZlLFxuICAgICAgICByZWplY3Q6IHJlamVjdCxcbiAgICAgICAgbmV4dDogbnVsbFxuICAgICAgfTtcblxuICAgICAgaWYgKGJhY2spIHtcbiAgICAgICAgYmFjayA9IGJhY2submV4dCA9IHJlcXVlc3Q7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmcm9udCA9IGJhY2sgPSByZXF1ZXN0O1xuICAgICAgICByZXN1bWUoa2V5LCBhcmcpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzdW1lKGtleSwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHZhciByZXN1bHQgPSBnZW5ba2V5XShhcmcpO1xuICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgdmFyIHdyYXBwZWRBd2FpdCA9IHZhbHVlIGluc3RhbmNlb2YgQXdhaXRWYWx1ZTtcbiAgICAgIFByb21pc2UucmVzb2x2ZSh3cmFwcGVkQXdhaXQgPyB2YWx1ZS53cmFwcGVkIDogdmFsdWUpLnRoZW4oZnVuY3Rpb24gKGFyZykge1xuICAgICAgICBpZiAod3JhcHBlZEF3YWl0KSB7XG4gICAgICAgICAgcmVzdW1lKGtleSA9PT0gXCJyZXR1cm5cIiA/IFwicmV0dXJuXCIgOiBcIm5leHRcIiwgYXJnKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBzZXR0bGUocmVzdWx0LmRvbmUgPyBcInJldHVyblwiIDogXCJub3JtYWxcIiwgYXJnKTtcbiAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgcmVzdW1lKFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgc2V0dGxlKFwidGhyb3dcIiwgZXJyKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzZXR0bGUodHlwZSwgdmFsdWUpIHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgXCJyZXR1cm5cIjpcbiAgICAgICAgZnJvbnQucmVzb2x2ZSh7XG4gICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgIGRvbmU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFwidGhyb3dcIjpcbiAgICAgICAgZnJvbnQucmVqZWN0KHZhbHVlKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGZyb250LnJlc29sdmUoe1xuICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICBkb25lOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgZnJvbnQgPSBmcm9udC5uZXh0O1xuXG4gICAgaWYgKGZyb250KSB7XG4gICAgICByZXN1bWUoZnJvbnQua2V5LCBmcm9udC5hcmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBiYWNrID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICB0aGlzLl9pbnZva2UgPSBzZW5kO1xuXG4gIGlmICh0eXBlb2YgZ2VuW1wicmV0dXJuXCJdICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB0aGlzW1wicmV0dXJuXCJdID0gdW5kZWZpbmVkO1xuICB9XG59XG5cbmlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHtcbiAgQXN5bmNHZW5lcmF0b3IucHJvdG90eXBlW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbn1cblxuQXN5bmNHZW5lcmF0b3IucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAoYXJnKSB7XG4gIHJldHVybiB0aGlzLl9pbnZva2UoXCJuZXh0XCIsIGFyZyk7XG59O1xuXG5Bc3luY0dlbmVyYXRvci5wcm90b3R5cGVbXCJ0aHJvd1wiXSA9IGZ1bmN0aW9uIChhcmcpIHtcbiAgcmV0dXJuIHRoaXMuX2ludm9rZShcInRocm93XCIsIGFyZyk7XG59O1xuXG5Bc3luY0dlbmVyYXRvci5wcm90b3R5cGVbXCJyZXR1cm5cIl0gPSBmdW5jdGlvbiAoYXJnKSB7XG4gIHJldHVybiB0aGlzLl9pbnZva2UoXCJyZXR1cm5cIiwgYXJnKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQXN5bmNHZW5lcmF0b3I7IiwiZnVuY3Rpb24gX0F3YWl0VmFsdWUodmFsdWUpIHtcbiAgdGhpcy53cmFwcGVkID0gdmFsdWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX0F3YWl0VmFsdWU7IiwidmFyIEF3YWl0VmFsdWUgPSByZXF1aXJlKFwiLi9Bd2FpdFZhbHVlXCIpO1xuXG5mdW5jdGlvbiBfYXdhaXRBc3luY0dlbmVyYXRvcih2YWx1ZSkge1xuICByZXR1cm4gbmV3IEF3YWl0VmFsdWUodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hd2FpdEFzeW5jR2VuZXJhdG9yOyIsInZhciBBc3luY0dlbmVyYXRvciA9IHJlcXVpcmUoXCIuL0FzeW5jR2VuZXJhdG9yXCIpO1xuXG5mdW5jdGlvbiBfd3JhcEFzeW5jR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG5ldyBBc3luY0dlbmVyYXRvcihmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfd3JhcEFzeW5jR2VuZXJhdG9yOyIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCIoZnVuY3Rpb24gKGdsb2JhbCwgdW5kZWZpbmVkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICBpZiAoZ2xvYmFsLnNldEltbWVkaWF0ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIG5leHRIYW5kbGUgPSAxOyAvLyBTcGVjIHNheXMgZ3JlYXRlciB0aGFuIHplcm9cbiAgICB2YXIgdGFza3NCeUhhbmRsZSA9IHt9O1xuICAgIHZhciBjdXJyZW50bHlSdW5uaW5nQVRhc2sgPSBmYWxzZTtcbiAgICB2YXIgZG9jID0gZ2xvYmFsLmRvY3VtZW50O1xuICAgIHZhciByZWdpc3RlckltbWVkaWF0ZTtcblxuICAgIGZ1bmN0aW9uIHNldEltbWVkaWF0ZShjYWxsYmFjaykge1xuICAgICAgLy8gQ2FsbGJhY2sgY2FuIGVpdGhlciBiZSBhIGZ1bmN0aW9uIG9yIGEgc3RyaW5nXG4gICAgICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgY2FsbGJhY2sgPSBuZXcgRnVuY3Rpb24oXCJcIiArIGNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICAgIC8vIENvcHkgZnVuY3Rpb24gYXJndW1lbnRzXG4gICAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2kgKyAxXTtcbiAgICAgIH1cbiAgICAgIC8vIFN0b3JlIGFuZCByZWdpc3RlciB0aGUgdGFza1xuICAgICAgdmFyIHRhc2sgPSB7IGNhbGxiYWNrOiBjYWxsYmFjaywgYXJnczogYXJncyB9O1xuICAgICAgdGFza3NCeUhhbmRsZVtuZXh0SGFuZGxlXSA9IHRhc2s7XG4gICAgICByZWdpc3RlckltbWVkaWF0ZShuZXh0SGFuZGxlKTtcbiAgICAgIHJldHVybiBuZXh0SGFuZGxlKys7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYXJJbW1lZGlhdGUoaGFuZGxlKSB7XG4gICAgICAgIGRlbGV0ZSB0YXNrc0J5SGFuZGxlW2hhbmRsZV07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcnVuKHRhc2spIHtcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gdGFzay5jYWxsYmFjaztcbiAgICAgICAgdmFyIGFyZ3MgPSB0YXNrLmFyZ3M7XG4gICAgICAgIHN3aXRjaCAoYXJncy5sZW5ndGgpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgY2FsbGJhY2suYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcnVuSWZQcmVzZW50KGhhbmRsZSkge1xuICAgICAgICAvLyBGcm9tIHRoZSBzcGVjOiBcIldhaXQgdW50aWwgYW55IGludm9jYXRpb25zIG9mIHRoaXMgYWxnb3JpdGhtIHN0YXJ0ZWQgYmVmb3JlIHRoaXMgb25lIGhhdmUgY29tcGxldGVkLlwiXG4gICAgICAgIC8vIFNvIGlmIHdlJ3JlIGN1cnJlbnRseSBydW5uaW5nIGEgdGFzaywgd2UnbGwgbmVlZCB0byBkZWxheSB0aGlzIGludm9jYXRpb24uXG4gICAgICAgIGlmIChjdXJyZW50bHlSdW5uaW5nQVRhc2spIHtcbiAgICAgICAgICAgIC8vIERlbGF5IGJ5IGRvaW5nIGEgc2V0VGltZW91dC4gc2V0SW1tZWRpYXRlIHdhcyB0cmllZCBpbnN0ZWFkLCBidXQgaW4gRmlyZWZveCA3IGl0IGdlbmVyYXRlZCBhXG4gICAgICAgICAgICAvLyBcInRvbyBtdWNoIHJlY3Vyc2lvblwiIGVycm9yLlxuICAgICAgICAgICAgc2V0VGltZW91dChydW5JZlByZXNlbnQsIDAsIGhhbmRsZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgdGFzayA9IHRhc2tzQnlIYW5kbGVbaGFuZGxlXTtcbiAgICAgICAgICAgIGlmICh0YXNrKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudGx5UnVubmluZ0FUYXNrID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBydW4odGFzayk7XG4gICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbW1lZGlhdGUoaGFuZGxlKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudGx5UnVubmluZ0FUYXNrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbE5leHRUaWNrSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uICgpIHsgcnVuSWZQcmVzZW50KGhhbmRsZSk7IH0pO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhblVzZVBvc3RNZXNzYWdlKCkge1xuICAgICAgICAvLyBUaGUgdGVzdCBhZ2FpbnN0IGBpbXBvcnRTY3JpcHRzYCBwcmV2ZW50cyB0aGlzIGltcGxlbWVudGF0aW9uIGZyb20gYmVpbmcgaW5zdGFsbGVkIGluc2lkZSBhIHdlYiB3b3JrZXIsXG4gICAgICAgIC8vIHdoZXJlIGBnbG9iYWwucG9zdE1lc3NhZ2VgIG1lYW5zIHNvbWV0aGluZyBjb21wbGV0ZWx5IGRpZmZlcmVudCBhbmQgY2FuJ3QgYmUgdXNlZCBmb3IgdGhpcyBwdXJwb3NlLlxuICAgICAgICBpZiAoZ2xvYmFsLnBvc3RNZXNzYWdlICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cykge1xuICAgICAgICAgICAgdmFyIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXMgPSB0cnVlO1xuICAgICAgICAgICAgdmFyIG9sZE9uTWVzc2FnZSA9IGdsb2JhbC5vbm1lc3NhZ2U7XG4gICAgICAgICAgICBnbG9iYWwub25tZXNzYWdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cyA9IGZhbHNlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShcIlwiLCBcIipcIik7XG4gICAgICAgICAgICBnbG9iYWwub25tZXNzYWdlID0gb2xkT25NZXNzYWdlO1xuICAgICAgICAgICAgcmV0dXJuIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsUG9zdE1lc3NhZ2VJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgLy8gSW5zdGFsbHMgYW4gZXZlbnQgaGFuZGxlciBvbiBgZ2xvYmFsYCBmb3IgdGhlIGBtZXNzYWdlYCBldmVudDogc2VlXG4gICAgICAgIC8vICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4vRE9NL3dpbmRvdy5wb3N0TWVzc2FnZVxuICAgICAgICAvLyAqIGh0dHA6Ly93d3cud2hhdHdnLm9yZy9zcGVjcy93ZWItYXBwcy9jdXJyZW50LXdvcmsvbXVsdGlwYWdlL2NvbW1zLmh0bWwjY3Jvc3NEb2N1bWVudE1lc3NhZ2VzXG5cbiAgICAgICAgdmFyIG1lc3NhZ2VQcmVmaXggPSBcInNldEltbWVkaWF0ZSRcIiArIE1hdGgucmFuZG9tKCkgKyBcIiRcIjtcbiAgICAgICAgdmFyIG9uR2xvYmFsTWVzc2FnZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuc291cmNlID09PSBnbG9iYWwgJiZcbiAgICAgICAgICAgICAgICB0eXBlb2YgZXZlbnQuZGF0YSA9PT0gXCJzdHJpbmdcIiAmJlxuICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEuaW5kZXhPZihtZXNzYWdlUHJlZml4KSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJ1bklmUHJlc2VudCgrZXZlbnQuZGF0YS5zbGljZShtZXNzYWdlUHJlZml4Lmxlbmd0aCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICAgICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIG9uR2xvYmFsTWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ2xvYmFsLmF0dGFjaEV2ZW50KFwib25tZXNzYWdlXCIsIG9uR2xvYmFsTWVzc2FnZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKG1lc3NhZ2VQcmVmaXggKyBoYW5kbGUsIFwiKlwiKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsTWVzc2FnZUNoYW5uZWxJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgdmFyIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICAgICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgdmFyIGhhbmRsZSA9IGV2ZW50LmRhdGE7XG4gICAgICAgICAgICBydW5JZlByZXNlbnQoaGFuZGxlKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgY2hhbm5lbC5wb3J0Mi5wb3N0TWVzc2FnZShoYW5kbGUpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxSZWFkeVN0YXRlQ2hhbmdlSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHZhciBodG1sID0gZG9jLmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhIDxzY3JpcHQ+IGVsZW1lbnQ7IGl0cyByZWFkeXN0YXRlY2hhbmdlIGV2ZW50IHdpbGwgYmUgZmlyZWQgYXN5bmNocm9ub3VzbHkgb25jZSBpdCBpcyBpbnNlcnRlZFxuICAgICAgICAgICAgLy8gaW50byB0aGUgZG9jdW1lbnQuIERvIHNvLCB0aHVzIHF1ZXVpbmcgdXAgdGhlIHRhc2suIFJlbWVtYmVyIHRvIGNsZWFuIHVwIG9uY2UgaXQncyBiZWVuIGNhbGxlZC5cbiAgICAgICAgICAgIHZhciBzY3JpcHQgPSBkb2MuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgICAgICAgICAgIHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcnVuSWZQcmVzZW50KGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgaHRtbC5yZW1vdmVDaGlsZChzY3JpcHQpO1xuICAgICAgICAgICAgICAgIHNjcmlwdCA9IG51bGw7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaHRtbC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxTZXRUaW1lb3V0SW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KHJ1bklmUHJlc2VudCwgMCwgaGFuZGxlKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBJZiBzdXBwb3J0ZWQsIHdlIHNob3VsZCBhdHRhY2ggdG8gdGhlIHByb3RvdHlwZSBvZiBnbG9iYWwsIHNpbmNlIHRoYXQgaXMgd2hlcmUgc2V0VGltZW91dCBldCBhbC4gbGl2ZS5cbiAgICB2YXIgYXR0YWNoVG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgJiYgT2JqZWN0LmdldFByb3RvdHlwZU9mKGdsb2JhbCk7XG4gICAgYXR0YWNoVG8gPSBhdHRhY2hUbyAmJiBhdHRhY2hUby5zZXRUaW1lb3V0ID8gYXR0YWNoVG8gOiBnbG9iYWw7XG5cbiAgICAvLyBEb24ndCBnZXQgZm9vbGVkIGJ5IGUuZy4gYnJvd3NlcmlmeSBlbnZpcm9ubWVudHMuXG4gICAgaWYgKHt9LnRvU3RyaW5nLmNhbGwoZ2xvYmFsLnByb2Nlc3MpID09PSBcIltvYmplY3QgcHJvY2Vzc11cIikge1xuICAgICAgICAvLyBGb3IgTm9kZS5qcyBiZWZvcmUgMC45XG4gICAgICAgIGluc3RhbGxOZXh0VGlja0ltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGNhblVzZVBvc3RNZXNzYWdlKCkpIHtcbiAgICAgICAgLy8gRm9yIG5vbi1JRTEwIG1vZGVybiBicm93c2Vyc1xuICAgICAgICBpbnN0YWxsUG9zdE1lc3NhZ2VJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChnbG9iYWwuTWVzc2FnZUNoYW5uZWwpIHtcbiAgICAgICAgLy8gRm9yIHdlYiB3b3JrZXJzLCB3aGVyZSBzdXBwb3J0ZWRcbiAgICAgICAgaW5zdGFsbE1lc3NhZ2VDaGFubmVsSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoZG9jICYmIFwib25yZWFkeXN0YXRlY2hhbmdlXCIgaW4gZG9jLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIikpIHtcbiAgICAgICAgLy8gRm9yIElFIDbigJM4XG4gICAgICAgIGluc3RhbGxSZWFkeVN0YXRlQ2hhbmdlSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEZvciBvbGRlciBicm93c2Vyc1xuICAgICAgICBpbnN0YWxsU2V0VGltZW91dEltcGxlbWVudGF0aW9uKCk7XG4gICAgfVxuXG4gICAgYXR0YWNoVG8uc2V0SW1tZWRpYXRlID0gc2V0SW1tZWRpYXRlO1xuICAgIGF0dGFjaFRvLmNsZWFySW1tZWRpYXRlID0gY2xlYXJJbW1lZGlhdGU7XG59KHR5cGVvZiBzZWxmID09PSBcInVuZGVmaW5lZFwiID8gdHlwZW9mIGdsb2JhbCA9PT0gXCJ1bmRlZmluZWRcIiA/IHRoaXMgOiBnbG9iYWwgOiBzZWxmKSk7XG4iLCJ2YXIgc2NvcGUgPSAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBnbG9iYWwpIHx8XG4gICAgICAgICAgICAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZikgfHxcbiAgICAgICAgICAgIHdpbmRvdztcbnZhciBhcHBseSA9IEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseTtcblxuLy8gRE9NIEFQSXMsIGZvciBjb21wbGV0ZW5lc3NcblxuZXhwb3J0cy5zZXRUaW1lb3V0ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgVGltZW91dChhcHBseS5jYWxsKHNldFRpbWVvdXQsIHNjb3BlLCBhcmd1bWVudHMpLCBjbGVhclRpbWVvdXQpO1xufTtcbmV4cG9ydHMuc2V0SW50ZXJ2YWwgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBUaW1lb3V0KGFwcGx5LmNhbGwoc2V0SW50ZXJ2YWwsIHNjb3BlLCBhcmd1bWVudHMpLCBjbGVhckludGVydmFsKTtcbn07XG5leHBvcnRzLmNsZWFyVGltZW91dCA9XG5leHBvcnRzLmNsZWFySW50ZXJ2YWwgPSBmdW5jdGlvbih0aW1lb3V0KSB7XG4gIGlmICh0aW1lb3V0KSB7XG4gICAgdGltZW91dC5jbG9zZSgpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBUaW1lb3V0KGlkLCBjbGVhckZuKSB7XG4gIHRoaXMuX2lkID0gaWQ7XG4gIHRoaXMuX2NsZWFyRm4gPSBjbGVhckZuO1xufVxuVGltZW91dC5wcm90b3R5cGUudW5yZWYgPSBUaW1lb3V0LnByb3RvdHlwZS5yZWYgPSBmdW5jdGlvbigpIHt9O1xuVGltZW91dC5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5fY2xlYXJGbi5jYWxsKHNjb3BlLCB0aGlzLl9pZCk7XG59O1xuXG4vLyBEb2VzIG5vdCBzdGFydCB0aGUgdGltZSwganVzdCBzZXRzIHVwIHRoZSBtZW1iZXJzIG5lZWRlZC5cbmV4cG9ydHMuZW5yb2xsID0gZnVuY3Rpb24oaXRlbSwgbXNlY3MpIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuICBpdGVtLl9pZGxlVGltZW91dCA9IG1zZWNzO1xufTtcblxuZXhwb3J0cy51bmVucm9sbCA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuICBpdGVtLl9pZGxlVGltZW91dCA9IC0xO1xufTtcblxuZXhwb3J0cy5fdW5yZWZBY3RpdmUgPSBleHBvcnRzLmFjdGl2ZSA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuXG4gIHZhciBtc2VjcyA9IGl0ZW0uX2lkbGVUaW1lb3V0O1xuICBpZiAobXNlY3MgPj0gMCkge1xuICAgIGl0ZW0uX2lkbGVUaW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uIG9uVGltZW91dCgpIHtcbiAgICAgIGlmIChpdGVtLl9vblRpbWVvdXQpXG4gICAgICAgIGl0ZW0uX29uVGltZW91dCgpO1xuICAgIH0sIG1zZWNzKTtcbiAgfVxufTtcblxuLy8gc2V0aW1tZWRpYXRlIGF0dGFjaGVzIGl0c2VsZiB0byB0aGUgZ2xvYmFsIG9iamVjdFxucmVxdWlyZShcInNldGltbWVkaWF0ZVwiKTtcbi8vIE9uIHNvbWUgZXhvdGljIGVudmlyb25tZW50cywgaXQncyBub3QgY2xlYXIgd2hpY2ggb2JqZWN0IGBzZXRpbW1lZGlhdGVgIHdhc1xuLy8gYWJsZSB0byBpbnN0YWxsIG9udG8uICBTZWFyY2ggZWFjaCBwb3NzaWJpbGl0eSBpbiB0aGUgc2FtZSBvcmRlciBhcyB0aGVcbi8vIGBzZXRpbW1lZGlhdGVgIGxpYnJhcnkuXG5leHBvcnRzLnNldEltbWVkaWF0ZSA9ICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzZWxmLnNldEltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgJiYgZ2xvYmFsLnNldEltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMgJiYgdGhpcy5zZXRJbW1lZGlhdGUpO1xuZXhwb3J0cy5jbGVhckltbWVkaWF0ZSA9ICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzZWxmLmNsZWFySW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiICYmIGdsb2JhbC5jbGVhckltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcyAmJiB0aGlzLmNsZWFySW1tZWRpYXRlKTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImNvcmVcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiY29yZVwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG4vKipcbiAqIFRoZSBjZW50cmFsIG1vZHVsZSBmb3IgdGhlIHRyYW5zZHVjZXIgZW5naW5lLlxuICpcbiAqIEFsbCBvZiB0aGUgZnVuY3Rpb25zIGluIHRoaXMgbW9kdWxlIGRlYWwgZGlyZWN0bHkgd2l0aCB0cmFuc2R1Y2Vycy4gQnV0XG4gKiBmaXJzdCwgbGV0J3MgdGFsayBhYm91dCB0aGUgcHJvdG9jb2xzIHRoYXQgYXJlIGdvaW5nIHRvIGJlIHJlZmVycmVkIHRvXG4gKiB0aHJvdWdob3V0IG1hbnkgb2YgdGhlIGZ1bmN0aW9uIGRpc2N1c3Npb25zLlxuICpcbiAqICMjIFByb3RvY29sc1xuICpcbiAqIE9uZSBvZiB0aGUga2V5IHNlbGxpbmcgcG9pbnRzIGZvciB0cmFuc2R1Y2VycyBpcyB0aGF0IHRoZSBzYW1lIHRyYW5zZHVjZXIgY2FuXG4gKiBiZSB1c2VkIG9uIGFueSB0eXBlIG9mIGNvbGxlY3Rpb24uIFJhdGhlciB0aGFuIGhhdmluZyB0byB3cml0ZSBhIG5ldyBgbWFwYFxuICogZnVuY3Rpb24gKGZvciBleGFtcGxlKSBmb3IgZXZlcnkga2luZCBvZiBjb2xsZWN0aW9uIC0gb25lIGZvciBhbiBhcnJheSwgb25lXG4gKiBmb3IgYSBzdHJpbmcsIG9uZSBmb3IgYW4gaXRlcmF0b3IsIGV0Yy4gLSB0aGVyZSBpcyBhIHNpbmdsZSBgbWFwYCB0cmFuc2R1Y2VyXG4gKiB0aGF0IHdpbGwgd29yayB3aXRoIGFsbCBvZiB0aGVtLCBhbmQgcG90ZW50aWFsbHkgd2l0aCAqYW55KiBraW5kIG9mXG4gKiBjb2xsZWN0aW9uLiBUaGlzIGlzIHBvc3NpYmxlIGltcGxlbWVudGluZyAqcHJvdG9jb2xzKiBvbiB0aGUgY29sbGVjdGlvbnMuXG4gKlxuICogQSBwcm90b2NvbCBpbiBKYXZhU2NyaXB0IGlzIG11Y2ggbGlrZSBhbiBpbnRlcmZhY2UgaW4gbGFuZ3VhZ2VzIGxpa2UgSmF2YSBhbmRcbiAqIEMjLiBJdCBpcyBhIGNvbW1pdG1lbnQgdG8gcHJvdmlkaW5nIGEgY2VydGFpbiBmdW5jdGlvbmFsaXR5IHVuZGVyIGEgY2VydGFpblxuICogbmFtZS4gRVMyMDE1IGhhcyBzZWVuIHRoZSBpbnRyb2R1Y3Rpb24gb2YgYW4gYGl0ZXJhdG9yYCBwcm90b2NvbCwgZm9yXG4gKiBleGFtcGxlLCBhbmQgbGFuZ3VhZ2Ugc3VwcG9ydCBmb3IgaXQgKHRoZSBuZXcgYGZvci4uLm9mYCBsb29wIGNhbiB3b3JrIHdpdGhcbiAqIGFueSBvYmplY3QgdGhhdCBjb3JyZWN0bHkgaW1wbGVtZW50cyB0aGUgYGl0ZXJhdG9yYCBwcm90b2NvbCkuXG4gKlxuICogVG8gc3VwcG9ydCB0cmFuc2R1Y3Rpb24sIFhkdWNlIGV4cGVjdHMgY29sbGVjdGlvbnMgdG8gaW1wbGVtZW50IGZvdXJcbiAqIHByb3RvY29scy5cbiAqXG4gKiAtIGBpdGVyYXRvcmA6IGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGFuIGl0ZXJhdG9yICh0aGlzIG9uZSBpcyBidWlsdCBpbiB0b1xuICogICBFUzYgSmF2YVNjcmlwdClcbiAqIC0gYHRyYW5zZHVjZXIvaW5pdGA6IGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgbmV3LCBlbXB0eSBpbnN0YW5jZSBvZiB0aGVcbiAqICAgb3V0cHV0IGNvbGxlY3Rpb25cbiAqIC0gYHRyYW5zZHVjZXIvc3RlcGA6IGEgZnVuY3Rpb24gdGhhdCB0YWtlcyBhbiBhY2N1bXVsYXRvciAodGhlIHJlc3VsdCBvZiB0aGVcbiAqICAgcmVkdWN0aW9uIHNvIGZhcikgYW5kIHRoZSBuZXh0IGlucHV0IHZhbHVlLCBhbmQgdGhlbiByZXR1cm5zIHRoZVxuICogICBhY2N1bXVsYXRvciB3aXRoIHRoZSBuZXh0IGlucHV0IHZhbHVlIGFkZGVkIHRvIGl0XG4gKiAtIGB0cmFuc2R1Y2VyL3Jlc3VsdGA6IGEgZnVuY3Rpb24gdGhhdCB0YWtlcyB0aGUgcmVkdWNlZCBjb2xsZWN0aW9uIGFuZFxuICogICByZXR1cm5zIHRoZSBmaW5hbCBvdXRwdXQgY29sbGVjdGlvblxuICpcbiAqIGBpdGVyYXRvcmAgaXMgdGhlIGJ1aWx0LWluIEphdmFTY3JpcHQgcHJvdG9jb2wuIFdoZW4gY2FsbGVkLCBpdCBpcyBleHBlY3RlZFxuICogdG8gcmV0dXJuIGFuIGl0ZXJhdG9yIG92ZXIgdGhlIGltcGxlbWVudGluZyBjb2xsZWN0aW9uLiBUaGlzIGl0ZXJhdG9yIGlzIGFuXG4gKiBvYmplY3QgdGhhdCBoYXMgYSBgbmV4dGAgZnVuY3Rpb24uIEVhY2ggY2FsbCB0byBgbmV4dGAgaXMgZXhwZWN0ZWQgdG8gcmV0dXJuXG4gKiBhbiBvYmplY3Qgd2l0aCBgdmFsdWVgIGFuZCBgZG9uZWAgcHJvcGVydGllcywgd2hpY2ggcmVzcGVjdGl2ZWx5IGhvbGQgdGhlXG4gKiBuZXh0IHZhbHVlIG9mIHRoZSBpdGVyYXRvciBhbmQgYSBib29sZWFuIHRvIGluZGljYXRlIHdoZXRoZXIgdGhlIGl0ZXJhdGlvblxuICogaGFzIHJlYWNoZWQgaXRzIGVuZC4gKFRoaXMgaXMgYSBzaW1wbGlmaWVkIGV4cGxhbmF0aW9uOyBzZWVcbiAqIHtAbGluayBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L0d1aWRlL0l0ZXJhdG9yc19hbmRfR2VuZXJhdG9yc3x0aGlzIE1ETiBwYWdlfVxuICogZm9yIG1vcmUgZGV0YWlsZWQgaW5mb3JtYXRpb24uKVxuICpcbiAqIGB0cmFuc2R1Y2VyL2luaXRgIChyZWZlcnJlZCB0byBmcm9tIG5vdyBvbiBhcyBgaW5pdGApIHNob3VsZCBiZSBhIGZ1bmN0aW9uXG4gKiB0aGF0IHRha2VzIG5vIHBhcmFtZXRlcnMgYW5kIHJldHVybnMgYSBuZXcsIGVtcHR5IGluc3RhbmNlIG9mIHRoZSBvdXRwdXRcbiAqIGNvbGxlY3Rpb24uIFRoaXMgaXMgdGhlIGZ1bmN0aW9uIHRoYXQgZGVmaW5lcyBob3cgdG8gY3JlYXRlIGEgbmV3IGNvbGxlY3Rpb25cbiAqIG9mIHRoZSBjb3JyZWN0IHR5cGUuXG4gKlxuICogYHRyYW5zZHVjZXIvc3RlcGAgKHJlZmVycmVkIHRvIGZyb20gbm93IG9uIGFzIGBzdGVwYCkgc2hvdWxkIGJlIGEgZnVuY3Rpb25cbiAqIHRoYXQgdGFrZXMgdHdvIHBhcmFtZXRlcnMuIFRoZXNlIHBhcmFtZXRlcnMgYXJlIHRoZSByZXN1bHQgb2YgdGhlIHJlZHVjdGlvblxuICogc28gZmFyIChhbmQgc28gaXMgYSBjb2xsZWN0aW9uIG9mIHRoZSBvdXRwdXQgdHlwZSkgYW5kIHRoZSBuZXh0IHZhbHVlIGZyb21cbiAqIHRoZSBpbnB1dCBjb2xsZWN0aW9uLiBJdCBtdXN0IHJldHVybiB0aGUgbmV3IHJlZHVjdGlvbiByZXN1bHQsIHdpdGggdGhlIG5leHRcbiAqIHZhbHVlIGluY29ycG9yYXRlZCBpbnRvIGl0LiBUaGlzIGlzIHRoZSBmdW5jdGlvbiB0aGF0IGRlZmluZXMgaG93IHJlZHVjZSBhXG4gKiB2YWx1ZSBvbnRvIHRoZSBjb2xsZWN0aW9uLlxuICpcbiAqIGB0cmFuc2R1Y2VyL3Jlc3VsdGAgKHJlZmVycmVkIHRvIGZyb20gbm93IG9uIGFzIGByZXN1bHRgKSBzaG91bGQgYmUgYVxuICogZnVuY3Rpb24gdGhhdCB0YWtlcyBvbmUgcGFyYW1ldGVyLCB3aGljaCBpcyB0aGUgZnVsbHkgcmVkdWNlZCBjb2xsZWN0aW9uLiBJdFxuICogc2hvdWxkIHJldHVybiB0aGUgZmluYWwgb3V0cHV0IGNvbGxlY3Rpb24uIFRoaXMgYWZmb3JkcyBhIGNoYW5jZSB0byBtYWtlIGFueVxuICogbGFzdC1taW51dGUgYWRqdXN0bWVudHMgdG8gdGhlIHJlZHVjZWQgY29sbGVjdGlvbiBiZWZvcmUgcmV0dXJuaW5nIGl0LlxuICpcbiAqIEFycmF5cywgc3RyaW5ncywgYW5kIG9iamVjdHMgYXJlIGFsbCBnaXZlbiBzdXBwb3J0IGZvciBhbGwgb2YgdGhlc2VcbiAqIHByb3RvY29scy4gT3RoZXIgY29sbGVjdGlvbnMgd2lsbCBoYXZlIHRvIHByb3ZpZGUgdGhlaXIgb3duICh0aG91Z2ggaXQgc2hvdWxkXG4gKiBiZSBub3RlZCB0aGF0IHNpbmNlIGBpdGVyYXRvcmAgaXMgYnVpbHQtaW4sIG1hbnkgdGhpcmQtcGFydHkgY29sbGVjdGlvbnMgd2lsbFxuICogYWxyZWFkeSBpbXBsZW1lbnQgdGhpcyBwcm90b2NvbCkuIEFzIGFuIGV4YW1wbGUsIGxldCdzIGFkZCB0cmFuc2R1Y2VyIHN1cHBvcnRcbiAqIHRvIGEgdGhpcmQtcGFydHkgY29sbGVjdGlvbiwgdGhlIGBJbW11dGFibGUuTGlzdGAgY29sbGVjdGlvbiBmcm9tXG4gKiB7QGxpbmsgaHR0cHM6Ly9mYWNlYm9vay5naXRodWIuaW8vaW1tdXRhYmxlLWpzL3xpbW11dGFibGUtanN9LlxuICpcbiAqIGBgYFxuICogSW1tdXRhYmxlLkxpc3QucHJvdG90eXBlW3Byb3RvY29scy5pbml0XSA9ICgpID0+IEltbXV0YWJsZS5MaXN0KCkuYXNNdXRhYmxlKCk7XG4gKiBJbW11dGFibGUuTGlzdC5wcm90b3R5cGVbcHJvdG9jb2xzLnN0ZXBdID0gKGFjYywgaW5wdXQpID0+IGFjYy5wdXNoKGlucHV0KTtcbiAqIEltbXV0YWJsZS5MaXN0LnByb3RvdHlwZVtwcm90b2NvbHMucmVzdWx0XSA9ICh2YWx1ZSkgPT4gdmFsdWUuYXNJbW11dGFibGUoKTtcbiAqIGBgYFxuICpcbiAqIGBJbW11dGFibGUuTGlzdGAgYWxyZWFkeSBpbXBsZW1lbnRzIGBpdGVyYXRvcmAsIHNvIHdlIGRvbid0IGhhdmUgdG8gZG8gaXRcbiAqIG91cnNlbHZlcy5cbiAqXG4gKiBUaGUgYGluaXRgIGZ1bmN0aW9uIHJldHVybnMgYW4gZW1wdHkgbXV0YWJsZSBsaXN0LiBUaGlzIGlzIGltcG9ydGFudCBmb3JcbiAqIGltbXV0YWJsZS1qcyBiZWNhdXNlIGl0cyBkZWZhdWx0IGxpc3RzIGFyZSBpbW11dGFibGUsIGFuZCBpbW11dGFibGUgbGlzdHNcbiAqIG1lYW4gdGhhdCBhIG5ldyBsaXN0IGhhcyB0byBiZSBjcmVhdGVkIHdpdGggZXZlcnkgcmVkdWN0aW9uIHN0ZXAuIEl0IHdvdWxkXG4gKiB3b3JrIGZpbmUsIGJ1dCBpdCdzIHF1aXRlIGluZWZmaWNpZW50LlxuICpcbiAqIFRoZSBgc3RlcGAgZnVuY3Rpb24gYWRkcyB0aGUgbmV4dCB2YWx1ZSB0byB0aGUgYWxyZWFkeS1jcmVhdGVkIGxpc3QuXG4gKiBgSW1tdXRhYmxlLkxpc3RgIHByb3ZpZGVzIGEgYHB1c2hgIGZ1bmN0aW9uIHRoYXQgd29ya3MgbGlrZSBhbiBhcnJheSdzXG4gKiBgcHVzaGAsIGV4Y2VwdCB0aGF0IGl0IHJldHVybnMgdGhlIG5ldyBsaXN0IHdpdGggdGhlIHZhbHVlIHB1c2hlZCBvbnRvIGl0LlxuICogVGhpcyBpcyBwZXJmZWN0IGZvciBvdXIgYHN0ZXBgIGZ1bmN0aW9uLlxuICpcbiAqIFRoZSBgcmVzdWx0YCBmdW5jdGlvbiBjb252ZXJ0cyB0aGUgbm93LWZpbmlzaGVkIG11dGFibGUgbGlzdCBpbnRvIGFuXG4gKiBpbW11dGFibGUgb25lLCB3aGljaCBpcyB3aGF0J3MgZ29pbmcgdG8gYmUgZXhwZWN0ZWQgaWYgd2UncmUgdHJhbnNkdWNpbmdcbiAqIHNvbWV0aGluZyBpbnRvIGFuIGBJbW11dGFibGUuTGlzdGAuIEluIG1vc3QgY2FzZXMsIGByZXN1bHRgIGRvZXNuJ3QgaGF2ZSB0b1xuICogZG8gYW55IHdvcmssIGJ1dCBzaW5jZSB3ZSdyZSBjcmVhdGluZyBhbiBpbnRlcm1lZGlhdGUgcmVwcmVzZW50YXRpb24gb2Ygb3VyXG4gKiBjb2xsZWN0aW9uIHR5cGUgaGVyZSwgdGhpcyBsZXRzIHVzIGNyZWF0ZSB0aGUgY29sbGVjdGlvbiB0aGF0IHdlIGFjdHVhbGx5XG4gKiB3YW50IHRvIG91dHB1dC4gKFdpdGhvdXQgYHJlc3VsdGAsIHdlIHdvdWxkIGhhdmUgdG8gdXNlIGltbXV0YWJsZSBsaXN0cyBhbGxcbiAqIHRoZSB3YXkgdGhyb3VnaCwgY3JlYXRpbmcgYSBuZXcgb25lIHdpdGggZWFjaCBgc3RlcGAgZnVuY3Rpb24sIHNpbmNlIHdlXG4gKiB3b3VsZG4ndCBiZSBhYmxlIHRvIG1ha2UgdGhpcyBjb252ZXJzdGlvbiBhdCB0aGUgZW5kLilcbiAqXG4gKiBXaXRoIHRob3NlIHByb3RvY29scyBpbXBsZW1lbnRlZCBvbiB0aGUgcHJvdG90eXBlLCBgSW1tdXRhYmxlLkxpc3RgXG4gKiBjb2xsZWN0aW9ucyBjYW4gbm93IHN1cHBvcnQgYW55IHRyYW5zZHVjdGlvbiB3ZSBjYW4gb2ZmZXIuXG4gKlxuICogIyMjIFByb3RvY29sc1xuICpcbiAqIEFmdGVyIHRhbGtpbmcgYSBsb3QgYWJvdXQgcHJvdG9jb2xzIGFuZCBzaG93aW5nIGhvdyB0aGV5J3JlIHByb3BlcnRpZXMgYWRkZWRcbiAqIHRvIGFuIG9iamVjdCwgaXQncyBwcm9iYWJseSBwcmV0dHkgb2J2aW91cyB0aGF0IHRoZXJlJ3MgYmVlbiBubyBtZW50aW9uIG9mXG4gKiB3aGF0IHRoZSBhY3R1YWwgbmFtZXMgb2YgdGhvc2UgcHJvcGVydGllcyBhcmUuIFRoYXQncyB3aGF0XG4gKiBge0BsaW5rIG1vZHVsZTp4ZHVjZS5wcm90b2NvbHN8cHJvdG9jb2xzfWAgaXMgZm9yLlxuICpcbiAqIFRoZSBiZXN0IHdheSB0byB1c2UgdGhlc2Uga2V5cyBjYW4gYmUgc2VlbiBpbiB0aGUgaW1tdXRhYmxlLWpzIGV4YW1wbGUgYWJvdmUuXG4gKiBJbnN0ZWFkIG9mIHdvcnJ5aW5nIGFib3V0IHRoZSBuYW1lIG9mIHRoZSBrZXkgZm9yIHRoZSBgaW5pdGAgcHJvdG9jb2wsIHRoZVxuICogdmFsdWUgb2YgYHByb3RvY29scy5pbml0YCBpcyB1c2VkLlxuICpcbiAqIGB7QGxpbmsgbW9kdWxlOnhkdWNlLnByb3RvY29sc3xwcm90b2NvbHN9YCBkZWZpbmVzIHRoZXNlIHByb3RvY29sIHByb3BlcnR5XG4gKiBuYW1lcy5cbiAqXG4gKiAtIGBpbml0YFxuICogLSBgc3RlcGBcbiAqIC0gYHJlc3VsdGBcbiAqIC0gYHJlZHVjZWRgOiB1c2VkIGludGVybmFsbHkgdG8gbWFyayBhIGNvbGxlY3Rpb24gYXMgYWxyZWFkeSByZWR1Y2VkXG4gKiAtIGB2YWx1ZWA6IHVzZWQgaW50ZXJuYWxseSB0byBwcm92aWRlIHRoZSBhY3R1YWwgdmFsdWUgb2YgYSByZWR1Y2VkXG4gKiAgIGNvbGxlY3Rpb25cbiAqXG4gKiBUaGUgZmluYWwgdHdvIHZhbHVlcyBkb24ndCBoYXZlIGEgbG90IG9mIHVzZSBvdXRzaWRlIHRoZSBsaWJyYXJ5IHVubGVzc1xuICogeW91J3JlIHdyaXRpbmcgeW91ciBvd24gdHJhbnNkdWNlcnMuXG4gKlxuICogIyMgSG93IE9iamVjdHMgQXJlIFRyZWF0ZWRcbiAqXG4gKiBPYmplY3RzIGJlYXIgc29tZSB0aG91Z2h0IGJlY2F1c2UgcmVndWxhcmx5LCB0aGV5IGFyZW4ndCBjYW5kaWRhdGVzIGZvclxuICogaXRlcmF0aW9uIChhbmQgdGhlcmVmb3JlIGZvciB0cmFuc2R1Y3Rpb24gaW4gZ2VuZXJhbCkuIFRoZXkgZG9uJ3QgaGF2ZSBhIHZlcnlcbiAqIHN0cmFpZ2h0Zm9yd2FyZCBpZGVhIG9mIG9yZGVyLCBhbmQgdGhleSBoYXZlICp0d28qIHBpZWNlcyBvZiBkYXRhIChrZXkgYW5kXG4gKiB2YWx1ZSkgZm9yIGV2ZXJ5IGVsZW1lbnQgaW5zdGVhZCBvZiBvbmUuIFlldCBpdCdzIHVuZGVuaWFibGUgdGhhdCBhdCBsZWFzdFxuICogZm9yIG1vc3QgdHJhbnNmb3JtYXRpb25zLCBiZWluZyBhYmxlIHRvIGFwcGx5IHRoZW0gdG8gb2JqZWN0cyB3b3VsZCBiZSBxdWl0ZVxuICogaGFuZHkuXG4gKlxuICogRm9yIHRoYXQgcmVhc29uLCBzcGVjaWFsIHN1cHBvcnQgaXMgcHJvdmlkZWQgZW5kLXRvLWVuZCBmb3Igb2JqZWN0cy5cbiAqXG4gKiAjIyMgT2JqZWN0IGl0ZXJhdGlvblxuICpcbiAqIEl0ZXJhdGluZyBvdmVyIGFuIG9iamVjdCB3aWxsIHByb2R1Y2Ugb25lIG9iamVjdCBwZXIgcHJvcGVydHkgb2YgdGhlIG9yaWdpbmFsXG4gKiBvYmplY3QuIEFuIG9yZGVyIGlzIGltcG9zZWQ7IGJ5IGRlZmF1bHQsIHRoaXMgb3JkZXIgdGhlIHNhbWUgYXMgdGhlIG9yZGVyaW5nXG4gKiBvZiBrZXlzIGluIHBvc3QtRVM2IEphdmFzY3JpcHQ6XG4gKlxuICogMS4gS2V5cyB0aGF0IGFyZSBpbnRlZ2VycywgaW4gYXNjZW5kaW5nIG51bWVyaWNhbCBvcmRlclxuICogMi4gQWxsIG90aGVyIHN0cmluZyBrZXlzLCBpbiB0aGUgb3JkZXIgaW4gd2hpY2ggdGhleSB3ZXJlIGFkZGVkIHRvIHRoZSBvYmplY3RcbiAqIDMuIEFsbCBzeW1ib2wga2V5cywgaW4gdGhlIG9yZGVyIGluIHdoaWNoIHRoZXkgd2VyZSBhZGRlZCB0byB0aGUgb2JqZWN0XG4gKlxuICogVGhlIGB7QGxpbmsgbW9kdWxlOnhkdWNlLml0ZXJhdG9yfGl0ZXJhdG9yfWAgZnVuY3Rpb24gY2FuIGJlIHBhc3NlZCBhIHNvcnRpbmdcbiAqIGZ1bmN0aW9uIHRoYXQgY2FuIHNvcnQga2V5cyBpbiBhbnkgb3RoZXIgd2F5LlxuICpcbiAqIFRoZSByZXN1bHQgb2YgdGhlIGl0ZXJhdGlvbiwgaXMgYSBzZXQgb2Ygb2JqZWN0cyBlYWNoIHdpdGggYSBzaW5nbGUgcHJvcGVydHksXG4gKiBvbmUgZm9yIGVhY2ggZW51bWVyYWJsZSBvd24gcHJvcGVydHkgb24gdGhlIG9yaWdpbmFsIG9iamVjdC4gVGhlIHN0YW5kYXJkXG4gKiBvcmRlcmluZyBmb3Igb2JqZWN0cyAoZnJvbSBFUzYgb253YXJkKSBpcyBhcyBmb2xsb3dzOlxuICpcbiAqICMjIyBUcmFuc2Zvcm1pbmcgb2JqZWN0c1xuICpcbiAqIFdoaWxlIGl0ZXJhdGluZyBvdmVyIG9iamVjdHMgaW4gdGhpcyB3YXkgaXMgc3RyYWlnaHRmb3J3YXJkLCB0aGUgc3ludGF4IG9mXG4gKiBvYmplY3RzIG1ha2VzIGl0IHVnbHkgdG8gdHJhbnNmb3JtIHRoZW0gaW4gdGhpcyBmb3JtLiBIZXJlJ3MgYW4gZXhhbXBsZSBvZiBhXG4gKiB0cmFuc2Zvcm1hdGlvbiBmdW5jdGlvbiB0aGF0IG1ha2VzIHRoZSBvYmplY3QncyBrZXlzIHVwcGVyLWNhc2UgYW5kIGFkZHMgb25lXG4gKiB0byBlYWNoIG9mIHRoZSB2YWx1ZXM6XG4gKlxuICogYGBgXG4gKiBmdW5jdGlvbiB0cmFuc2Zvcm0ob2JqKSB7XG4gKiAgIGNvbnN0IGtleSA9IE9iamVjdC5rZXlzKG9iailbMF07XG4gKiAgIGNvbnN0IHZhbHVlID0gb2JqW2tleV07XG4gKiAgIHJldHVybiB7IFtrZXkudG9VcHBlckNhc2UoKV06IHZhbHVlICsgMSB9O1xuICogfVxuICogYGBgXG4gKlxuICogQSBoZWxwZXIgZnVuY3Rpb24gbmFtZWQgYHtAbGluayBtb2R1bGU6eGR1Y2UucHJvcGVydHl8cHJvcGVydHl9YCBjYW4gaW1wcm92ZVxuICogdGhpcyBieSBoYW5kbGluZyB0aGUgYm9pbGVycGxhdGUuXG4gKlxuICogYGBgXG4gKiBmdW5jdGlvbiBpbXByb3ZlZFRyYW5zZm9ybShvYmopIHtcbiAqICAgY29uc3Qge2ssIHZ9ID0gcHJvcGVydHkob2JqKTtcbiAqICAgcmV0dXJuIHsgW2sudG9VcHBlckNhc2UoKV06IHYgKyAxIH07XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiAjIyMgUmVkdWNpbmcgb2JqZWN0c1xuICpcbiAqIFRoZSBidWlsdC1pbiByZWR1Y2VycyAoZm9yIGFycmF5cywgb2JqZWN0cywgc3RyaW5ncywgYW5kIGl0ZXJhdG9ycylcbiAqIHVuZGVyc3RhbmQgdGhlc2Ugc2luZ2xlLXByb3BlcnR5IG9iamVjdHMgYW5kIHJlZHVjZSB0aGVtIGluIHRoZSBwcm9wZXIgbWFubmVyXG4gKiB3aXRob3V0IGFueSBmdXJ0aGVyIHdvcmsuXG4gKlxuICogVGhhdCdzIGl0IGZvciBvYmplY3Qtb2JqZWN0IHJlZHVjdGlvbi4gQ29udmVydGluZyBiZXR3ZWVuIG9iamVjdHMgYW5kIG90aGVyXG4gKiB0eXBlcyBpcyBhbm90aGVyIG1hdHRlci5cbiAqXG4gKiBFdmVyeSB0cmFuc2R1Y2VyIGZ1bmN0aW9uIGV4Y2VwdCBmb3IgYHtAbGluayBtb2R1bGU6eGR1Y2Uuc2VxdWVuY2V8c2VxdWVuY2V9YFxuICogaXMgY2FwYWJsZSBvZiB0dXJuaW5nIGFuIG9iamVjdCBpbnRvIGEgZGlmZmVyZW50IHR5cGUgb2YgY29sbGVjdGlvbiwgdHVybmluZ1xuICogYSBkaWZmZXJlbnQgdHlwZSBvZiBjb2xsZWN0aW9uIGludG8gYW4gb2JqZWN0LCBvciBib3RoLiBPYmplY3RzIGFyZSBkaWZmZXJlbnRcbiAqIGJlY2F1c2UgdGhleSdyZSB0aGUgb25seSBcImNvbGxlY3Rpb25zXCIgdGhhdCBoYXZlIHR3byBkaWZmZXJlbnQgcGllY2VzIG9mIGRhdGFcbiAqIHBlciBlbGVtZW50LiBCZWNhdXNlIG9mIHRoaXMsIHdlIGhhdmUgdG8gaGF2ZSBhIHN0cmF0ZWd5IG9uIGhvdyB0byBtb3ZlIGZyb21cbiAqIG9uZSB0byBhbm90aGVyLlxuICpcbiAqIFRyYW5zZHVjaW5nIGFuIG9iamVjdCBpbnRvIGEgZGlmZmVyZW50IHR5cGUgaXMgZ2VuZXJhbGx5IHByZXR0eSBlYXN5LiBJZiBhblxuICogb2JqZWN0IGlzIGNvbnZlcnRlZCBpbnRvIGFuIGFycmF5LCBmb3IgaW5zdGFuY2UsIHRoZSBhcnJheSBlbGVtZW50cyB3aWxsIGVhY2hcbiAqIGJlIHNpbmdsZS1wcm9wZXJ0eSBvYmplY3RzLCBvbmUgcGVyIHByb3BlcnR5IG9mIHRoZSBvcmlnaW5hbCBvYmplY3QuXG4gKlxuICogU3RyaW5ncyBhcmUgYSBkaWZmZXJlbnQgc3RvcnksIHNpbmNlIGVuY29kaW5nIGEgc2luZ2xlLXByb3BlcnR5IG9iamVjdCB0byBhXG4gKiBzdHJpbmcgaXNuJ3QgcG9zc2libGUgKGJlY2F1c2UgZXZlcnkgXCJlbGVtZW50XCIgb2YgYSBzdHJpbmcgaGFzIHRvIGJlIGEgc2luZ2xlXG4gKiBjaGFyYWN0ZXIpLiBTdHJpbmdzIHRoYXQgYXJlIHByb2R1Y2VkIGZyb20gb2JqZWN0cyB3aWxsIGluc3RlYWQganVzdCBiZSB0aGVcbiAqIG9iamVjdCB2YWx1ZXMsIGNvbmNhdGVuYXRlZC4gQmVjYXVzZSBvYmplY3RzIGFyZSBpdGVyYXRlZCBpbiBhIHBhcnRpY3VsYXJcbiAqIG9yZGVyLCB0aGlzIGNvbnZlcnNpb24gd2lsbCBhbHdheXMgcHJvZHVjZSB0aGUgc2FtZSBzdHJpbmcsIGJ1dCBleGNlcHQgaW5cbiAqIHNvbWUgdmVyeSBzcGVjaWZpYyBjYXNlcyB0aGVyZSByZWFsbHkgaXNuJ3QgYSBsb3Qgb2YgdXNlIGZvciB0aGlzIGNvbnZlcnNpb24uXG4gKlxuICogYGBgXG4gKiBjb25zdCBvYmogPSB7YTogMSwgYjogMn07XG4gKlxuICogbGV0IHJlc3VsdCA9IGFzQXJyYXkob2JqKTtcbiAqIC8vIHJlc3VsdCA9IFt7YTogMX0sIHtiOiAyfV1cbiAqXG4gKiByZXN1bHQgPSBhc0l0ZXJhdG9yKG9iaik7XG4gKiAvLyByZXN1bHQgaXMgYW4gaXRlcmF0b3Igd2l0aCB0d28gdmFsdWVzOiB7YTogMX0gYW5kIHtiOiAyfVxuICpcbiAqIHJlc3VsdCA9IGludG8oSW1tdXRhYmxlLkxpc3QoKSwgb2JqKVxuICogLy8gcmVzdWx0IGlzIGFuIGltbXV0YWJsZSBsaXN0IHdpdGggdHdvIGVsZW1lbnRzOiB7YTogMX0gYW5kIHtiOiAyfVxuICpcbiAqIHJlc3VsdCA9IGFzU3RyaW5nKG9iaik7XG4gKiAvLyByZXN1bHQgaXMgJzEyJ1xuICogYGBgXG4gKlxuICogVGhlIG9wcG9zaXRlIGNvbnZlcnNpb24gZGVwZW5kcyBvbiB0aGUgdmFsdWVzIGluc2lkZSB0aGUgY29sbGVjdGlvbnMuIElmXG4gKiB0aG9zZSB2YWx1ZXMgYXJlIG9iamVjdHMsIHRoZW4gdGhlIHJlc3VsdCBpcyBhbiBvYmplY3Qgd2l0aCBhbGwgb2YgdGhlXG4gKiBvYmplY3RzIGNvbWJpbmVkIChpZiBtb3JlIHRoYW4gb25lIGhhcyB0aGUgc2FtZSBrZXksIHRoZSBsYXN0IG9uZSBpcyB0aGUgb25lXG4gKiB0aGF0J3Mga2VwdCkuIE90aGVyd2lzZSwga2V5cyBhcmUgY3JlYXRlZCBmb3IgZWFjaCBvZiB0aGUgZWxlbWVudHMsIHN0YXJ0aW5nXG4gKiB3aXRoIGAwYCBhbmQgaW5jcmVhc2luZyBmcm9tIHRoZXJlLlxuICpcbiAqIFRoaXMgbWVhbnMgdGhhdCBjb252ZXJ0aW5nIGFuIG9iamVjdCB0byBhbnkgbm9uLXN0cmluZyBjb2xsZWN0aW9uIGFuZCBiYWNrXG4gKiBwcm9kdWNlcyB0aGUgb3JpZ2luYWwgb2JqZWN0LlxuICpcbiAqIGBgYFxuICogbGV0IHJlc3VsdCA9IGFzT2JqZWN0KFt7YTogMX0sIHtiOiAyfV0pO1xuICogLy8gcmVzdWx0ID0ge2E6IDEsIGI6IDJ9XG4gKlxuICogcmVzdWx0ID0gYXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vIHJlc3VsdCA9IHswOiAxLCAxOiAyLCAyOiAzfVxuICpcbiAqIHJlc3VsdCA9IGFzT2JqZWN0KCdoZWxsbycpO1xuICogLy8gcmVzdWx0ID0gezA6ICdoJywgMTogJ2UnLCAyOiAnbCcsIDM6ICdsJywgNDogJ28nfVxuICogYGBgXG4gKlxuICogQG1vZHVsZSB4ZHVjZVxuICovXG5cbmV4cG9ydCB7IHByb3RvY29scyB9IGZyb20gXCJtb2R1bGVzL3Byb3RvY29sXCI7XG5leHBvcnQgeyBpdGVyYXRvciwgaXNJdGVyYWJsZSwga3YsIGtleSwgdmFsdWUgfSBmcm9tIFwibW9kdWxlcy9pdGVyYXRpb25cIjtcbmV4cG9ydCB7XG4gIGNvbXBsZXRlLFxuICB1bmNvbXBsZXRlLFxuICBpc0NvbXBsZXRlZCxcbiAgZW5zdXJlQ29tcGxldGVkLFxuICBlbnN1cmVVbmNvbXBsZXRlZCxcbiAgcmVkdWNlLFxuICB0b0Z1bmN0aW9uLFxuICB0b1JlZHVjZXIsXG4gIHRvVHJhbnNkdWNlclxufSBmcm9tIFwibW9kdWxlcy9yZWR1Y3Rpb25cIjtcbmV4cG9ydCB7XG4gIHRyYW5zZHVjZSxcbiAgc2VxdWVuY2UsXG4gIGludG8sXG4gIGFzQXJyYXksXG4gIGFzT2JqZWN0LFxuICBhc1N0cmluZyxcbiAgYXNJdGVyYXRvcixcbiAgY29tcG9zZVxufSBmcm9tIFwibW9kdWxlcy90cmFuc2Zvcm1hdGlvblwiO1xuZXhwb3J0IHtcbiAgaXNBcnJheSxcbiAgaXNGdW5jdGlvbixcbiAgaXNHZW5lcmF0b3JGdW5jdGlvbixcbiAgaXNOdW1iZXIsXG4gIGlzT2JqZWN0LFxuICBpc1N0cmluZ1xufSBmcm9tIFwibW9kdWxlcy91dGlsc1wiO1xuXG4vKipcbiAqIEFuIGl0ZXJhYmxlIGFzIGRlZmluZWQgYnkgSmF2YVNjcmlwdC5cbiAqXG4gKiBAdHlwZWRlZiBKc0l0ZXJhYmxlXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcHJvcGVydHkge21vZHVsZTp4ZHVjZS5Kc0l0ZXJhYmxlRnVuY3Rpb259IFN5bWJvbC5pdGVyYXRvciBBIGZ1bmN0aW9uIHRoYXRcbiAqICAgICBwcm9kdWNlcyBhbiBpdGVyYXRvciB3aGVuIGNhbGxlZC5cbiAqL1xuXG4vKipcbiAqIEEgZnVuY3Rpb24gdGhhdCBwcm9kdWNlcyBhbiBpdGVyYXRvci4gVGhpcyBpcyB0aGUgY2hhcmFjdGVyaXN0aWMgcHJvcGVydHkgb2ZcbiAqIGEgSmF2YVNjcmlwdCBpdGVyYWJsZS5cbiAqXG4gKiBAY2FsbGJhY2sgSnNJdGVyYWJsZUZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcmV0dXJucyB7bW9kdWxlOnhkdWNlLkl0ZXJhdG9yfSBBbiBpdGVyYXRvciBvdmVyIHRoZVxuICogICAgIHtAbGluayBtb2R1bGU6eGR1Y2UuSnNJdGVyYWJsZX0gdGhhdCBwcm9kdWNlZCBpdC5cbiAqL1xuXG4vKipcbiAqIEFuIGl0ZXJhYmxlIGFzIGRlZmluZWQgYnkgdGhpcyBsaWJyYXJ5LiBTaW5jZSBpdCBwcm92aWRlcyBzcGVjaWZpYyBzdXBwb3J0XG4gKiBmb3Igb2JqZWN0cywgdGhpcyB0eXBlIGlzIG1lcmVseSBhIG5vcm1hbCBKYXZhU2NyaXB0IGl0ZXJhYmxlICpvciogYSBwbGFpblxuICogb2JqZWN0LlxuICpcbiAqIEB0eXBlZGVmIHsoT2JqZWN0fG1vZHVsZTp4ZHVjZS5Kc0l0ZXJhYmxlKX0gSXRlcmFibGVcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqL1xuXG4vKipcbiAqIEEgZ2VuZXJpYyBpdGVyYXRvci4gVGhpcyBjb25mb3JtcyB0byB0aGUgYGl0ZXJhdG9yYCBwcm90b2NvbCBpbiB0aGF0IGl0IGhhc1xuICogYSBge0BsaW5rIG1vZHVsZTp4ZHVjZS5OZXh0RnVuY3Rpb258bmV4dH1gIGZ1bmN0aW9uIHRoYXQgcHJvZHVjZXNcbiAqIHtAbGluayBtb2R1bGU6eGR1Y2UuTmV4dFZhbHVlfGBpdGVyYXRvcmAtY29tcGF0aWJsZSBvYmplY3RzfS5cbiAqXG4gKiBAdHlwZWRlZiBJdGVyYXRvclxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHByb3BlcnR5IHttb2R1bGU6eGR1Y2UuTmV4dEZ1bmN0aW9ufSBuZXh0IEEgZnVuY3Rpb24gdGhhdCwgd2hlbiBjYWxsZWQsXG4gKiAgICAgcmV0dXJucyB0aGUgbmV4dCBpdGVyYXRvciB2YWx1ZS5cbiAqL1xuXG4vKipcbiAqIFRoZSBmdW5jdGlvbiB0aGF0IHNhdGlzZmllcyB0aGUgYGl0ZXJhdG9yYCBwcm90b2NvbCBvbiBhbiBvYmplY3QuIFdoZW5cbiAqIGNhbGxlZCwgaXQgcmV0dXJucyB0aGUgbmV4dCB2YWx1ZSBpbiB0aGUgaXRlcmF0b3IuXG4gKlxuICogQGNhbGxiYWNrIE5leHRGdW5jdGlvblxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHJldHVybnMge21vZHVsZTp4ZHVjZS5OZXh0VmFsdWV9IFRoZSBuZXh0IHZhbHVlIGluIHRoZSBpdGVyYXRvci5cbiAqL1xuXG4vKipcbiAqIFRoZSBvYmplY3QgcmV0dXJuZWQgYnkgYSBjYWxsIHRvIGB7QGxpbmsgbW9kdWxlOnhkdWNlLk5leHRGdW5jdGlvbnxuZXh0fWAuXG4gKiBJdCBpbmRpY2F0ZXMgd2hldGhlciB0aGUgaXRlcmF0b3IgaXMgY29tcGxldGUgYW5kLCBpZiBub3QsIHdoYXQgdGhlIG5leHRcbiAqIHZhbHVlIGlzLlxuICpcbiAqIEB0eXBlZGVmIHtvYmplY3R9IE5leHRWYWx1ZVxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHByb3BlcnR5IHsqfSB2YWx1ZSBUaGUgdmFsdWUgdGhhdCB0aGUgaXRlcmF0b3IgaGFzIHByb3ZpZGVkLlxuICogQHByb3BlcnR5IHtib29sZWFufSBkb25lIEluZGljYXRlcyB3aGV0aGVyIHRoZSBpdGVyYXRvciBoYXMgY29tcGxldGVkLiBJZlxuICogICAgIHRoaXMgaXMgYHRydWVgLCB0aGVuIGB2YWx1ZWAgd2lsbCBiZSBgdW5kZWZpbmVkYCBhbmQgZXZlcnkgc3Vic2VxdWVudFxuICogICAgIGNhbGwgdG8gYHtAbGluayBtb2R1bGU6eGR1Y2UuTmV4dEZ1bmN0aW9ufG5leHR9YCB3aWxsIGNvbnRpbnVlIHRvIHByb2R1Y2VcbiAqICAgICB0aGUgc2FtZSB2YWx1ZS4gSWYgaXQncyBgZmFsc2VgLCB0aGVuIGB2YWx1ZWAgcmVwcmVzZW50cyB0aGUgbmV0IHZhbHVlIGluXG4gKiAgICAgdGhlIGl0ZXJhdG9yLCBhbmQgdGhlIG5leHQgY2FsbCB0b1xuICogICAgIGB7QGxpbmsgbW9kdWxlOnhkdWNlLk5leHRGdW5jdGlvbnxuZXh0fWAgd2lsbCBjb250aW51ZSB0byBwcm9kdWNlIHRoZVxuICogICAgIG5leHQgdmFsdWUuXG4gKi9cblxuLyoqXG4gKiBBIHNvcnQgZnVuY3Rpb24gZm9yIHRoZSBrZXlzIG9mIGFuIG9iamVjdC4gVGhpcyBjb25mb3JtcyB0byB0aGUgbm9ybWFsIHNvcnRcbiAqIGZ1bmN0aW9uIHVzZWQgaW4gYEFycmF5LnByb3RvdHlwZS5zb3J0YC5cbiAqXG4gKiBAY2FsbGJhY2sgU29ydEZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcHJvcGVydHkgeyp9IGEgVGhlIGZpcnN0IHZhbHVlIHRvIGJlIHNvcnRlZC5cbiAqIEBwcm9wZXJ0eSB7Kn0gYiBUaGUgc2Vjb25kIHZhbHVlIHRvIGJlIHNvcnRlZC5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IEVpdGhlciBgLTFgIGlmIGBhID4gYmAsIGAxYCBpZiBgYSA8IGJgLCBvciBgMGAgaWYgYGEgPT09XG4gKiAgICAgYmAuXG4gKi9cblxuLyoqXG4gKiBBIGZ1bmN0aW9uIHRoYXQgY2FuIGhhdmUgYW4gaXRlcmF0b3IgY3JlYXRlZCBmb3IgaXQuXG4gKlxuICogQGNhbGxiYWNrIEl0ZXJhYmxlRnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwYXJhbSB7bnVtYmVyfSBbaW5kZXhdIFRoZSBudW1iZXIgb2YgdGltZXMgdGhhdFxuICogICAgIGB7QGxpbmsgbW9kdWxlOnhkdWNlLk5leHRGdW5jdGlvbnxuZXh0fWAgaGFzIGJlZW4gY2FsbGVkIG9uIHRoZVxuICogICAgIGZ1bmN0aW9uJ3MgaXRlcmF0b3IuIFRoaXMgd2lsbCBzdGFydCBhdCBgMGAgZm9yIHRoZSBmaXJzdCBjYWxsIHRvXG4gKiAgICAgYHtAbGluayBtb2R1bGU6eGR1Y2UuTmV4dEZ1bmN0aW9ufG5leHR9YCBhbmQgaW5jcmVhc2UgYnkgb25lIGZvciBlYWNoXG4gKiAgICAgc3Vic2VxdWVudCBjYWxsLlxuICogQHBhcmFtIHsqfSBbbGFzdF0gVGhlIHJldHVybiB2YWx1ZSBvZiB0aGUgZnVuY3Rpb24gdGhlIGxhc3QgdGltZVxuICogICAgIGB7QGxpbmsgbW9kdWxlOnhkdWNlLk5leHRGdW5jdGlvbnxuZXh0fWAgd2FzIGNhbGxlZCBvbiBpdHMgaXRlcmF0b3IuIEZvclxuICogICAgIHRoZSBmaXJzdCBjYWxsLCB0aGlzIGlzIHNldCB0byBgdW5kZWZpbmVkYC5cbiAqIEByZXR1cm5zIHsqfSBUaGUgcmV0dXJuIHZhbHVlIGZvciB0aGF0IGl0ZXJhdGlvbi5cbiAqL1xuXG4vKipcbiAqIEFuIG9iamVjdCByZXByZXNlbnRhdGlvbiBvZiBhIHNpbmdsZS1wcm9wZXJ0eSBvYmplY3QsIGJ1dCB1c2luZyBvbmUgcHJvcGVydHlcbiAqIGZvciB0aGUga2V5IGFuZCBvbmUgZm9yIHRoZSB2YWx1ZS4gVGhpcyBmb3JtYXQgaXMgZWFzaWVyIHRvIHVzZSBpblxuICogdHJhbnNmb3JtYXRpb24gZnVuY3Rpb25zLlxuICpcbiAqIEB0eXBlZGVmIHtvYmplY3R9IFByb3BlcnR5T2JqZWN0XG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcHJvcGVydHkgeyhTdHJpbmd8U3ltYm9sKX0gayBUaGUga2V5IG9mIHRoZSBzaW5nbGUtcHJvcGVydHkgb2JqZWN0IHRoYXQgdGhpc1xuICogICAgIG9iamVjdCByZXByZXNlbnRzLlxuICogQHByb3BlcnR5IHsqfSB2IFRoZSB2YWx1ZSBvZiB0aGUgc2luZ2xlLXByb3BlcnR5IG9iamVjdCB0aGF0IHRoaXMgb2JqZWN0XG4gKiAgICAgcmVwcmVzZW50cy5cbiAqL1xuXG4vKipcbiAqIEFuIGluaXQgZnVuY3Rpb24sIHdoaWNoIHByb3ZpZGVzIGEgbmV3LCBlbXB0eSBpbnN0YW5jZSBvZiBhIGNvbGxlY3Rpb24uXG4gKlxuICogQGNhbGxiYWNrIEluaXRGdW5jdGlvblxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHJldHVybnMgeyp9IEEgbmV3LCBlbXB0eSBpbnN0YW5jZSBvZiBhIGNvbGxlY3Rpb24uXG4gKi9cblxuLyoqXG4gKiBBIHN0ZXAgZnVuY3Rpb24sIHRoYXQgcmVkdWNlcyBhIGNvbGxlY3Rpb24gYW5kIGEgbmV3IHZhbHVlIHRvIHRoZVxuICogY29sbGVjdGlvbiB3aXRoIHRoZSB2YWx1ZSBhZGRlZC5cbiAqXG4gKiBAY2FsbGJhY2sgU3RlcEZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcGFyYW0geyp9IGFjYyBBbiBhY2N1bXVsYXRlZCB2YWx1ZSB0byB3aGljaCB0aGUgbmV3IHZhbHVlIGlzIGJlaW5nIGFkZGVkLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgbmV3IHZhbHVlIHRvIGJlIGFkZGVkIHRvIHRoZSBhY2N1bXVsYXRlZCB2YWx1ZS5cbiAqIEByZXR1cm5zIHsqfSBUaGUgYWNjdW11bGF0ZWQgdmFsdWUgd2l0aCB0aGUgbmV3IHZhbHVlIGludGVncmF0ZWQgaW50byBpdC5cbiAqL1xuXG4vKipcbiAqIEEgcmVzdWx0IGZ1bmN0aW9uIHRoYXQgb3B0aW9uYWxseSBtb2RpZmllcyB0aGUgaW5wdXQgY29sbGVjdGlvbiBhbmQgdGhlblxuICogcmV0dXJucyBpdC4gVGhpcyBpcyB1c2VkIGF0IHRoZSBlbmQgb2YgYSByZWR1Y3Rpb24gdG8gYWZmb3JkIGEgbGFzdCBjaGFuY2VcbiAqIGZvciB0aGUgdHJhbnNkdWNlciB0byBtb2RpZnkgdGhlIG91dHB1dCB2YWx1ZS5cbiAqXG4gKiBAY2FsbGJhY2sgUmVzdWx0RnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwYXJhbSB7Kn0gaW5wdXQgVGhlIHZhbHVlIHRvIGJlIG1vZGlmaWVkIGJlZm9yZSBiZWluZyBvdXRwdXQuXG4gKiBAcmV0dXJucyB7Kn0gVGhlIG1vZGlmaWVkIHZhbHVlIHRvIGJlIG91dHB1dCBieSBhIHRyYW5zZHVjZXIuXG4gKi9cblxuLyoqXG4gKiBBbiBvYmplY3Qgd2l0aCBhbGwgb2YgdGhlIGluZm9ybWF0aW9uIG5lY2Vzc2FyeSB0byByZWR1Y2UgdmFsdWVzIGludG8gYVxuICogcGFydGljdWxhciBraW5kIG9mIGNvbGxlY3Rpb24uIFRoZXNlIGFyZSBwYXNzZWQgdG9cbiAqIHtAbGluayBtb2R1bGU6eGR1Y2UucmVkdWNlfHJlZHVjZX0gYW5kIGxpa2UgZnVuY3Rpb25zLlxuICpcbiAqIEB0eXBlZGVmIFJlZHVjZXJcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwcm9wZXJ0eSB7bW9kdWxlOnhkdWNlLkluaXRGdW5jdGlvbn0gW1N5bWJvbC5mb3IoXCJ0cmFuc2R1Y2VyL2luaXRcIildIFRoZVxuICogICAgIHJlZHVjZXIncyBpbml0IGZ1bmN0aW9uLlxuICogQHByb3BlcnR5IHttb2R1bGU6eGR1Y2UuU3RlcEZ1bmN0aW9ufSBTeW1ib2wuZm9yKFwidHJhbnNkdWNlci9zdGVwXCIpIFRoZVxuICogICAgIHJlZHVjZXIncyBzdGVwIGZ1bmN0aW9uLlxuICogQHByb3BlcnR5IHttb2R1bGU6eGR1Y2UuUmVzdWx0RnVuY3Rpb259IFN5bWJvbC5mb3IoXCJ0cmFuc2R1Y2VyL3Jlc3VsdFwiKSBUaGVcbiAqICAgICByZWR1Y2VyJ3MgcmVzdWx0IGZ1bmN0aW9uLlxuICovXG5cbi8qKlxuICogQSBjb2xsZWN0aW9uIHRoYXQgY2FuIGhhdmUgdmFsdWVzIHJlZHVjZWQgaW50byBpdC4gU2luY2UgdGhpcyBsaWJyYXJ5XG4gKiBwcm92aWRlcyBleHBsaWNpdCBzdXBwb3J0IGZvciBhcnJheXMsIG9iamVjdHMsIGFuZCBzdHJpbmdzLCB0aG9zZSB0aHJlZSBhcmVcbiAqIGFkZGVkIHRvIHRoZSB7QGxpbmsgbW9kdWxlOnhkdWNlLlJlZHVjZXJ9IHR5cGUgdG8gZGVmaW5lIHRoaXMuXG4gKlxuICogQHR5cGVkZWYgeyhBcnJheXxTdHJpbmd8T2JqZWN0fG1vZHVsZTp4ZHVjZS5SZWR1Y2VyKX0gUmVkdWNpYmxlXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKi9cblxuLyoqXG4gKiBBIGNvbGxlY3Rpb24gdGhhdCBzdXBwb3J0cyBub3Qgb25seSB0aGUgcmVndWxhciBpdGVyYWlvbiBvdmVyIGl0cyBjb250ZW50cyxcbiAqIGJ1dCBhbHNvIHJlZHVjdGlvbiBvZiB2YWx1ZXMgaW50byBpdC4gSXQgaXMgYW4gaW50ZXJzZWN0aW9uIHR5cGUgY29tYmluaW5nXG4gKiB7QGxpbmsgbW9kdWxlOnhkdWNlLkl0ZXJhYmxlfEl0ZXJhYmxlfSBhbmRcbiAqIHtAbGluayBtb2R1bGU6eGR1Y2UuUmVkdWNpYmxlfFJlZHVjaWJsZX0uXG4gKlxuICogQHR5cGVkZWYgRXhwbGljaXRJdGVyYWJsZVJlZHVjaWJsZVxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHByb3BlcnR5IHttb2R1bGU6eGR1Y2UuSnNJdGVyYWJsZUZ1bmN0aW9ufSBTeW1ib2wuaXRlcmF0b3IgQSBmdW5jdGlvbiB0aGF0XG4gKiAgICAgcHJvZHVjZXMgYW4gaXRlcmF0b3Igd2hlbiBjYWxsZWQuXG4gKiBAcHJvcGVydHkge21vZHVsZTp4ZHVjZS5Jbml0RnVuY3Rpb259IFtTeW1ib2wuZm9yKFwidHJhbnNkdWNlci9pbml0XCIpXSBUaGVcbiAqICAgICBjb2xsZWN0aW9uJ3MgaW5pdCBmdW5jdGlvbi5cbiAqIEBwcm9wZXJ0eSB7bW9kdWxlOnhkdWNlLlN0ZXBGdW5jdGlvbn0gU3ltYm9sLmZvcihcInRyYW5zZHVjZXIvc3RlcFwiKSBUaGVcbiAqICAgICBjb2xsZWN0aW9uJ3Mgc3RlcCBmdW5jdGlvbi5cbiAqIEBwcm9wZXJ0eSB7bW9kdWxlOnhkdWNlLlJlc3VsdEZ1bmN0aW9ufSBTeW1ib2wuZm9yKFwidHJhbnNkdWNlci9yZXN1bHRcIikgVGhlXG4gKiAgICAgY29sbGVjdGlvbidzIHJlc3VsdCBmdW5jdGlvbi5cbiAqL1xuXG4vKipcbiAqIFRoZSBhY3R1YWwgdHlwZSB1c2VkIGJ5IHJlZHVjaWJsZSBjb2xsZWN0aW9ucyBpbiB0aGlzIGxpYnJhcnkuIEl0IHRha2VzIHRoZVxuICogcHJvcGVydHktYmFzZWQgZGVmaW5pdGlvbiBhbmQgYWRkcyBidWlsdC1pbiB0eXBlcyB0aGF0IGFyZSBzcGVjaWFsbHlcbiAqIHN1cHBvcnRlZCBieSB0aGUgbGlicmFyeS5cbiAqXG4gKiBAdHlwZWRlZiB7KEFycmF5fE9iamVjdHxTdHJpbmd8bW9kdWxlOnhkdWNlLkV4cGxpY2l0SXRlcmFibGVSZWR1Y2libGUpfVxuICogICAgIEl0ZXJhYmxlUmVkdWNpYmxlXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKi9cblxuLyoqXG4gKiBBIGZ1bmN0aW9uIHRoYXQgdHJhbnNmb3JtcyBkYXRhIGFuZCBjYW4gYmUgY29tcG9zZWQgd2l0aCBvdGhlciB0cmFuc2R1Y2Vyc1xuICogaW50byBhIHNpbmdsZSB0cmFuc2R1Y2VyLiBUaGUgdHJhbnNkdWNlcnMgdGhlbXNlbHZlcyBhcmUgcHJvdmlkZWQgYnkgb3RoZXJcbiAqIGxpYnJhcmllczsgdGhlIG9ubHkgaW52b2x2ZW1lbnQgb2YgdGhpcyBsaWJyYXIgaXMgYXMgYSBjb25zdW1lciBvZlxuICogdHJhbnNkdWNlcnMuXG4gKlxuICogVHJhbnNkdWNlcnMgd29yayBieSBoYXZpbmcgc3RlcCBmdW5jdGlvbnMgdGhhdCBhcmUga25vd24gdmlhIHByb3RvY29sLCBhbmQgaXRcbiAqIGlzIHRoZXNlIHN0ZXAgZnVuY3Rpb25zIHRoYXQgdGFrZSBhIHZhbHVlIGF0IGEgdGltZSB0byBiZSB0cmFuc2Zvcm1lZCBhc1xuICogdGhlaXIgYXJndW1lbnRzLiBUaGUgYXJndW1lbnRzIHRvIHRoZSB0cmFuc2R1Y2VycyB0aGVtc2VsdmVzIGFyZSBvdGhlclxuICogdHJhbnNkdWNlcnMgdGhhdCBhcmUgdGhlbiBjb21wb3NlZCBpbnRvIGEgc2luZ2xlIHRyYW5zZHVjZXIsIHdoaWNoIGlzIHRoZW5cbiAqIHJldHVybmVkLiBUaGUgdmFsdWVzIHRoYXQgYXJlIHByb2R1Y2VkIGFyZSBzZWxkb20gb2YgY29uc2VxdWVuY2UgdG8gdGhlIGVuZFxuICogdXNlcjsgdGhlc2UgZnVuY3Rpb25zIGV4aXN0IHRvIGJlIHBhc3NlZCB0byBvdGhlciBmdW5jdGlvbnMgdGhhdCBkZWFsIHdpdGhcbiAqIHRyYW5zZHVjZXJzLlxuICpcbiAqIEBjYWxsYmFjayBUcmFuc2R1Y2VyXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcGFyYW0ge21vZHVsZTp4ZHVjZS5UcmFuc2R1Y2VyRnVuY3Rpb259IHhmb3JtIEEgdHJhbnNkdWNlciB0byBjaGFpbiB0aGlzXG4gKiAgICAgdHJhbnNkdWNlciB0by5cbiAqIEByZXR1cm4ge21vZHVsZTp4ZHVjZS5UcmFuc2R1Y2VyRnVuY3Rpb259IEEgbmV3IHRyYW5zZHVjZXIgY29uc2lzdGluZyBvZiB0aGVcbiAqICAgICBjb21wb3NpdGlvbiBvZiB0aGlzIG9uZSBhbmQgYHhmb3JtYC5cbiAqL1xuXG4vKipcbiAqIEFuIG9iamVjdCBjb250YWluaW5nIGFsbCBvZiB0aGUgbmVjZXNzYXJ5IGZ1bmN0aW9uIHByb3BlcnRpZXMgZm9yXG4gKiB0cmFuc2Zvcm1pbmcgZGF0YSBhbmQgdGhlbiByZWR1Y2luZyBpdCBpbnRvIGFuIG91dHB1dCB2YWx1ZS4gVGhpcyBpcyB0aGVcbiAqIHNhbWUgYXMge0BsaW5rIG1vZHVsZTp4ZHVjZS5SZWR1Y2VyfFJlZHVjZXJ9IGV4Y2VwdCB0aGF0IHRoZSBgaW5pdGAgcHJvcGVydHlcbiAqIGlzIG5vdCBvcHRpb25hbC5cbiAqXG4gKiBAdHlwZWRlZiBUcmFuc2R1Y2VyXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcHJvcGVydHkge21vZHVsZTp4ZHVjZS5Jbml0RnVuY3Rpb259IFN5bWJvbC5mb3IoXCJ0cmFuc2R1Y2VyL2luaXRcIikgVGhlXG4gKiAgICAgdHJhbnNkdWNlcidzIGluaXQgZnVuY3Rpb24uXG4gKiBAcHJvcGVydHkge21vZHVsZTp4ZHVjZS5TdGVwRnVuY3Rpb259IFN5bWJvbC5mb3IoXCJ0cmFuc2R1Y2VyL3N0ZXBcIikgVGhlXG4gKiAgICAgdHJhbnNkdWNlcidzIHN0ZXAgZnVuY3Rpb24uXG4gKiBAcHJvcGVydHkge21vZHVsZTp4ZHVjZS5SZXN1bHRGdW5jdGlvbn0gU3ltYm9sLmZvcihcInRyYW5zZHVjZXIvcmVzdWx0XCIpIFRoZVxuICogICAgIHRyYW5zZHVjZXIncyByZXN1bHQgZnVuY3Rpb24uXG4gKi9cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG5pbXBvcnQgeyBpc0ltcGxlbWVudGVkIH0gZnJvbSBcIm1vZHVsZXMvcHJvdG9jb2xcIjtcbmltcG9ydCB7IGlzRnVuY3Rpb24sIGlzT2JqZWN0LCBpc0dlbmVyYXRvckZ1bmN0aW9uIH0gZnJvbSBcIm1vZHVsZXMvdXRpbHNcIjtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGl0ZXJhdG9yIG92ZXIgYW4gb2JqZWN0LlxuICpcbiAqIERldGFpbHMgYWJvdXQgdGhpcyBmdW5jdGlvbiBhcmUgaW5jbHVkZWQgaW4gdGhlIGRvY3VtZW50YXRpb24gZm9yXG4gKiB7QGxpbmsgbW9kdWxlOnhkdWNlLml0ZXJhdG9yfGl0ZXJhdG9yfS5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIFRoZSBvYmplY3QgYmVpbmcgaXRlcmF0ZWQgb3Zlci5cbiAqIEBwYXJhbSB7bW9kdWxlOnhkdWNlLlNvcnRGdW5jdGlvbn0gW3NvcnRGbl0gQW4gb3B0aW9uYWwgZnVuY3Rpb24gdXNlZCB0byBzb3J0XG4gKiAgICAgdGhlIG9iamVjdCBrZXlzIGJlZm9yZSBpdGVyYXRpb24uIElmIGl0IGlzbid0IHByb3ZpZGVkLCB0aGUga2V5cyB3aWxsIGJlXG4gKiAgICAgc29ydGVkIGluIHRoZSBzYW1lIG9yZGVyIGFzIGBPYmplY3Qua2V5cyhvYmopYCB3b3VsZCBzb3J0IHRoZW0uXG4gKiBAcmV0dXJucyB7bW9kdWxlOnhkdWNlLkl0ZXJhdG9yfSBBbiBpdGVyYXRvciBvdmVyIHRoZSBwcm9wZXJ0aWVzIG9mIGBvYmpgLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gb2JqZWN0SXRlcmF0b3Iob2JqLCBzb3J0Rm4pIHtcbiAgcmV0dXJuIChmdW5jdGlvbiooKSB7XG4gICAgY29uc3Qga2V5cyA9XG4gICAgICB0eXBlb2Ygc29ydEZuID09PSBcImZ1bmN0aW9uXCJcbiAgICAgICAgPyBPYmplY3Qua2V5cyhvYmopLnNvcnQoc29ydEZuKVxuICAgICAgICA6IE9iamVjdC5rZXlzKG9iaik7XG4gICAgbGV0IGluZGV4ID0gMDtcblxuICAgIHdoaWxlIChpbmRleCA8IGtleXMubGVuZ3RoKSB7XG4gICAgICBjb25zdCBrID0ga2V5c1tpbmRleCsrXTtcbiAgICAgIHlpZWxkIHsgW2tdOiBvYmpba10gfTtcbiAgICB9XG4gIH0pKCk7XG59XG5cbi8qKlxuICogQSBjb252ZW5pZW5jZSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIGZpcnN0IGtleSBhbmQgdmFsdWUgaW4gYW4gb2JqZWN0IGFzXG4gKiBhIHR3by1wcm9wZXJ0eSBvYmplY3QsIG9uZSBwcm9wZXJ0eSBmb3IgdGhlIGtleSBhbmQgb25lIGZvciB0aGUgdmFsdWUuIFRoaXNcbiAqIGlzIGludGVuZGVkIHRvIHdvcmsgd2l0aCB0aGUgdmFsdWVzIHByb3ZpZGVkIGJ5IGFuIG9iamVjdCBpdGVyYXRvciwgYXMgdGhlXG4gKiBzeW50YXggb2Ygb2JqZWN0cyBkb2Vzbid0IHdvcmsgdmVyeSBuaWNlbHkgd2l0aCBzaW5nbGUtcHJvcGVydHkgb2JqZWN0cy5cbiAqXG4gKiBgYGBcbiAqIGNvbnN0IG9iaiA9IHsgYzogMSwgYTogMiwgYjogMyB9O1xuICogY29uc3QgaXRlciA9IGl0ZXJhdG9yKG9iaik7XG4gKlxuICogbGV0IHZhbHVlID0gaXRlci5uZXh0KCkudmFsdWU7XG4gKiBjb25zb2xlLmxvZyh2YWx1ZSk7ICAgICAgICAgICAgIC8vIC0+IHsgYzogMSB9XG4gKiBjb25zb2xlLmxvZyhwcm9wZXJ0eSh2YWx1ZSkpOyAgIC8vIC0+IHsgazogXCJjXCIsIHY6IDEgfVxuICpcbiAqIHZhbHVlID0gaXRlci5uZXh0KCkudmFsdWU7XG4gKiBjb25zb2xlLmxvZyh2YWx1ZSk7ICAgICAgICAgICAgIC8vIC0+IHsgYTogMiB9XG4gKiBjb25zb2xlLmxvZyhwcm9wZXJ0eSh2YWx1ZSkpOyAgIC8vIC0+IHsgazogXCJhXCIsIHY6IDIgfVxuICpcbiAqIHZhbHVlID0gaXRlci5uZXh0KCkudmFsdWU7XG4gKiBjb25zb2xlLmxvZyh2YWx1ZSk7ICAgICAgICAgICAgIC8vIC0+IHsgYjogMyB9XG4gKiBjb25zb2xlLmxvZyhwcm9wZXJ0eSh2YWx1ZSkpOyAgIC8vIC0+IHsgazogXCJiXCIsIHY6IDMgfVxuICogYGBgXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHBhcmFtIHtvYmplY3R9IG9iaiBUaGUgb2JqZWN0IHdob3NlIGZpcnN0IHByb3BlcnR5IGlzIHJldHVybmVkLlxuICogQHJldHVybiB7bW9kdWxlOnhkdWNlLlByb3BlcnR5T2JqZWN0fSBUaGUgcHJvcGVydHkgYXMgYSB0d28tcHJvcGVydHkgb2JqZWN0LlxuICovXG5mdW5jdGlvbiBrdihvYmopIHtcbiAgY29uc3Qga2V5ID0gT2JqZWN0LmtleXMob2JqKVswXTtcbiAgcmV0dXJuIHsgazoga2V5LCB2OiBvYmpba2V5XSB9O1xufVxuXG4vKipcbiAqIEEgY29udmVuaWVuY2UgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBrZXkgb2YgdGhlIGZpcnN0IHByb3BlcnR5IG9mIGFuXG4gKiBvYmplY3QuIFRoaXMgaXMgbWVhbnQgZm9yIHVzZSB3aXRoIG9iamVjdCBpdGVyYXRvcnMgdG8gbW9yZSBjb252ZW5pZW50bHlcbiAqIGFjY2VzcyBwYXJ0cyBvZiB0aGUgc2luZ2xlLXByb3BlcnR5IG9iamVjdHMgdGhhdCB0aGV5IGVtaXQuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHBhcmFtIHtvYmplY3R9IG9iaiBUaGUgb2JqZWN0IHdob3NlIGZpcnN0IGtleSBpcyByZXR1cm5lZC5cbiAqIEByZXR1cm4geyhTdHJpbmd8U3ltYm9sKX0gVGhlIGtleSBvZiB0aGUgb2JqZWN0J3MgZmlyc3QgcHJvcGVydHkuXG4gKi9cbmZ1bmN0aW9uIGtleShvYmopIHtcbiAgcmV0dXJuIGt2KG9iaikuaztcbn1cblxuLyoqXG4gKiBBIGNvbnZlbmllbmNlIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgdmFsdWUgb2YgdGhlIGZpcnN0IHByb3BlcnR5IG9mIGFuXG4gKiBvYmplY3QuIFRoaXMgaXMgbWVhbnQgZm9yIHVzZSB3aXRoIG9iamVjdCBpdGVyYXRvcnMgdG8gbW9yZSBjb252ZW5pZW50bHlcbiAqIGFjY2VzcyBwYXJ0cyBvZiB0aGUgc2luZ2xlLXByb3BlcnR5IG9iamVjdHMgdGhhdCB0aGV5IGVtaXQuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHBhcmFtIHtvYmplY3R9IG9iaiBUaGUgb2JqZWN0IHdob3NlIGZpcnN0IHZhbHVlIGlzIHJldHVybmVkLlxuICogQHJldHVybiB7Kn0gVGhlIHZhbHVlIG9mIHRoZSBvYmplY3QncyBmaXJzdCBwcm9wZXJ0eS5cbiAqL1xuZnVuY3Rpb24gdmFsdWUob2JqKSB7XG4gIHJldHVybiBrdihvYmopLnY7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBpdGVyYXRvciBvdmVyIGEgZnVuY3Rpb24uXG4gKlxuICogRGV0YWlscyBhYm91dCB0aGlzIGZ1bmN0aW9uIGFyZSBpbmNsdWRlZCBpbiB0aGUgZG9jdW1lbnRhdGlvbiBmb3JcbiAqIHtAbGluayBtb2R1bGU6eGR1Y2UuaXRlcmF0b3J8aXRlcmF0b3J9LlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOnhkdWNlLkl0ZXJhYmxlRnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcmV0dXJucyB7bW9kdWxlOnhkdWNlLkl0ZXJhdG9yfSBBbiBpdGVyYXRvciBvdmVyIHRoZSByZXR1cm4gdmFsdWVzIG9mIGBmbmAuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBmdW5jdGlvbkl0ZXJhdG9yKGZuKSB7XG4gIHJldHVybiAoZnVuY3Rpb24qKCkge1xuICAgIGxldCBjdXJyZW50O1xuICAgIGxldCBpbmRleCA9IDA7XG5cbiAgICBmb3IgKDs7KSB7XG4gICAgICBjdXJyZW50ID0gZm4oaW5kZXgrKywgY3VycmVudCk7XG4gICAgICBpZiAodHlwZW9mIGN1cnJlbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICB5aWVsZCBjdXJyZW50O1xuICAgIH1cbiAgfSkoKTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuIGl0ZXJhdG9yIG92ZXIgdGhlIHByb3ZpZGVkIHZhbHVlLlxuICpcbiAqIEZvciBjb2xsZWN0aW9ucyB0aGF0IGltcGxlbWVudCB0aGUgaXRlcmFibGUgcHJvdG9jb2wsIGl0J3MgYXMgc2ltcGxlIGFzXG4gKiByZXR1cm5pbmcgdGhlIGl0ZXJhdG9yIGFscmVhZHkgZGVmaW5lZCBmb3IgdGhhdCBjb2xsZWN0aW9uLlxuICpcbiAqIGBgYFxuICogY29uc3QgaXRlciA9IGl0ZXJhdG9yKFsxLCAyLCAzXSk7XG4gKiBjb25zb2xlLmxvZyhpdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4gMVxuICogY29uc29sZS5sb2coaXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IDJcbiAqIGNvbnNvbGUubG9nKGl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiAzXG4gKiBjb25zb2xlLmxvZyhpdGVyLm5leHQoKS5kb25lKTsgICAgLy8gLT4gdHJ1ZVxuICogYGBgXG4gKlxuICogT2JqZWN0cyBhcmUgc3BlY2lhbGx5IHN1cHBvcnRlZCB0byByZXR1cm4gYW4gaXRlcmF0b3IgYXMgd2VsbCwgZXZlbiB0aG91Z2hcbiAqIHRoZXkgZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCB0aGUgaXRlcmFibGUgcHJvdG9jb2wuIFRoZSBpdGVyYXRvcidzIGBuZXh0YFxuICogZnVuY3Rpb24gcHJvdmlkZXMgc2luZ2xlLXByb3BlcnR5IG9iamVjdHMsIG9uZSBmb3IgZWFjaCBwcm9wZXJ0eSBpbiB0aGVcbiAqIG9yaWdpbmFsIG9iamVjdCwgb3JkZXJlZCBpbiB0aGUgc3RhbmRhcmQgcG9zdC1FUzYgb3JkZXIgZm9yIGl0ZXJhdGluZyBvdmVyXG4gKiBvYmplY3Qga2V5czpcbiAqXG4gKiAxLiBLZXlzIHRoYXQgYXJlIGludGVnZXJzLCBpbiBhc2NlbmRpbmcgbnVtZXJpY2FsIG9yZGVyXG4gKiAyLiBBbGwgb3RoZXIgc3RyaW5nIGtleXMsIGluIHRoZSBvcmRlciBpbiB3aGljaCB0aGV5IHdlcmUgYWRkZWQgdG8gdGhlIG9iamVjdFxuICogMy4gQWxsIHN5bWJvbCBrZXlzLCBpbiB0aGUgb3JkZXIgaW4gd2hpY2ggdGhleSB3ZXJlIGFkZGVkIHRvIHRoZSBvYmplY3RcbiAqXG4gKiBJZiBhIGRpZmZlcmVudCBvcmRlciBpcyBuZWVkZWQsIHRoaXMgZnVuY3Rpb24gdGFrZXMgYSBzZWNvbmQgYXJndW1lbnQsIGEgc29ydFxuICogZnVuY3Rpb24sIHRoYXQgYWZmZWN0cyBvYmplY3RzIG9ubHkuIEl0IGlzIGEgc3RhbmRhcmQgZnVuY3Rpb24gdGhhdCB3b3VsZCBiZVxuICogcGFzc2VkIHRvIGBBcnJheS5wcm90b3R5cGUuc29ydGAgYW5kIHNvcnRzIHRoZSBrZXlzIGFjY29yZGluZ2x5LlxuICpcbiAqIGBgYFxuICogY29uc3QgYWxwaGEgPSAoYSwgYikgPT4gKGEgPCBiID8gLTEgOiBiIDwgYSA/IDEgOiAwKTtcbiAqIGNvbnN0IG9iaiA9IHsgYzogMSwgYTogMiwgYjogMyB9O1xuICpcbiAqIGNvbnN0IG9iakl0ZXIgPSBpdGVyYXRvcihvYmopO1xuICogY29uc29sZS5sb2cob2JqSXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IHsgYzogMSB9XG4gKiBjb25zb2xlLmxvZyhvYmpJdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4geyBhOiAyIH1cbiAqIGNvbnNvbGUubG9nKG9iakl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiB7IGI6IDMgfVxuICpcbiAqIGNvbnN0IHNvcnRlZEl0ZXIgPSBpdGVyYXRvcihvYmosIGFscGhhKTtcbiAqIGNvbnNvbGUubG9nKG9iakl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiB7IGE6IDIgfVxuICogY29uc29sZS5sb2cob2JqSXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IHsgYjogMyB9XG4gKiBjb25zb2xlLmxvZyhvYmpJdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4geyBjOiAxIH1cbiAqIGBgYFxuICpcbiAqIEFkZGl0aW9uYWxseSwgdGhlcmUgaXMgc3BlY2lhbCBzdXBwb3J0IGZvciBwYXNzaW5nIGEgZnVuY3Rpb24gdG8gdGhpc1xuICogZnVuY3Rpb24uIFRoZSBpdGVyYXRvciByZXR1cm5lZCBydW5zIHRoYXQgZnVuY3Rpb24gZm9yIGVhY2ggY2FsbCB0byBgbmV4dGAuXG4gKiBUaGF0IGZ1bmN0aW9uIGlzIHByb3ZpZGVkIHR3byBhcmd1bWVudHM6IHRoZSBpbmRleCAoc3RhcnRpbmcgYXQgYDBgIGZvciB0aGVcbiAqIGZpcnN0IGNhbGwgdG8gYG5leHRgIGFuZCBpbmNyZWFzaW5nIGJ5IDEgZm9yIGVhY2ggY2FsbCB0byBgbmV4dGAgYWZ0ZXIpIGFuZFxuICogdGhlIHJldHVybiB2YWx1ZSBvZiB0aGUgcHJldmlvdXMgY2FsbCB0byBgbmV4dGAgKGZvciB0aGUgZmlyc3QgY2FsbCB0b1xuICogYG5leHRgLCB0aGlzIHdpbGwgYmUgYHVuZGVmaW5lZGApLiBUaGUgaXRlcmF0aW9uIHdpbGwgY29udGludWUgdW50aWwgdGhlXG4gKiBmaXJzdCB0aW1lIHRoZSBpdGVyYXRlZCBmdW5jdGlvbiByZXR1cm5zIGB1bmRlZmluZWRgOyBhdCB0aGF0IHBvaW50IHRoZVxuICogaXRlcmF0b3Igd2lsbCB0ZXJtaW5hdGUgYW5kIHJldHVybiBgeyBkb25lOiB0cnVlIH1gIG9mZiBzdWJzZXF1ZW50IGBuZXh0YFxuICogY2FsbHMuXG4gKlxuICogYGBgXG4gKiBjb25zdCBjb25zdEl0ZXIgPSBpdGVyYXRvcigoKSA9PiA2KTtcbiAqIGNvbnNvbGUubG9nKGNvbnN0SXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IDZcbiAqIGNvbnNvbGUubG9nKGNvbnN0SXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IDZcbiAqIC8vIFRoaXMgd2lsbCBjb250aW51ZSBmb3JldmVyLCBhcyBsb25nIGFzIGBuZXh0YCBrZWVwcyBnZXR0aW5nIGNhbGxlZFxuICpcbiAqIGNvbnN0IGluZGV4SXRlciA9IGl0ZXJhdG9yKHggPT4geCAqIHgpO1xuICogY29uc29sZS5sb2coaW5kZXhJdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4gMDtcbiAqIGNvbnNvbGUubG9nKGluZGV4SXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IDE7XG4gKiBjb25zb2xlLmxvZyhpbmRleEl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiA0O1xuICogY29uc29sZS5sb2coaW5kZXhJdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4gOTtcbiAqIC8vIFRoaXMgd2lsbCBjb250aW51ZSBmb3JldmVyIG9yIHVudGlsIHRoZSBudW1iZXJzIGdldCB0b28gYmlnIGZvclxuICogLy8gSmF2YVNjcmlwdCB0byBkZWFsIHd0aWhcbiAqXG4gKiAvLyBVc2luZyBhIGRlZmF1bHQgdmFsdWUgZm9yIHRoZSBgbGFzdGAgcGFyYW1ldGVyLCB3aGljaCBzZXRzIGl0cyB2YWx1ZVxuICogLy8gZm9yIHRoZSBmaXJzdCBydW4gd2hlbiBpdCBpcyBub3JtYWxseSBgdW5kZWZpbmVkYFxuICogY29uc3QgbGFzdEl0ZXIgPSBpdGVyYXRvcigoeCwgbGFzdCA9IDEpID0+IGxhc3QgKiAoeCArIDEpKTsgLy8gZmFjdG9yaWFsIVxuICogY29uc29sZS5sb2cobGFzdEl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiAxXG4gKiBjb25zb2xlLmxvZyhsYXN0SXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IDJcbiAqIGNvbnNvbGUubG9nKGxhc3RJdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4gNlxuICogY29uc29sZS5sb2cobGFzdEl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiAyNFxuICogLy8gQWdhaW4sIHJ1bnMgZm9yZXZlciwgdGhvdWdoIGZhY3RvcmlhbHMgZ2V0IGJpZyB2ZXJ5IHF1aWNrbHlcbiAqXG4gKiAvLyBJdGVyYXRvcnMgdGVybWluYXRlIHdoZW4gdGhlIGZ1bmN0aW9uIHJldHVybnMgYHVuZGVmaW5lZGBcbiAqIGNvbnN0IHN0b3BJdGVyID0gaXRlcmF0b3IoeCA9PiB4IDwgMiA/IHggOiB1bmRlZmluZWQpO1xuICogY29uc29sZS5sb2coc3RvcEl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiAwXG4gKiBjb25zb2xlLmxvZyhzdG9wSXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IDFcbiAqIGNvbnNvbGUubG9nKHN0b3BJdGVyLm5leHQoKS5kb25lKTsgICAgLy8gLT4gdHJ1ZVxuICogYGBgXG4gKlxuICogSWYgdGhlIHByb3ZpZGVkIHZhbHVlIGlzIG5vdCBhY3R1YWxseSBpdGVyYWJsZSAob3IgYW4gb2JqZWN0IG9yIGEgZnVuY3Rpb24pLFxuICogYG51bGxgIGlzIHJldHVybmVkIGluIHBsYWNlIG9mIHRoZSBpdGVyYXRvci5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjcmVhdGUgYW4gaXRlcmF0b3Igb3Zlci5cbiAqIEBwYXJhbSB7bW9kdWxlOnhkdWNlLlNvcnRGdW5jdGlvbn0gW3NvcnRGbl0gQW4gb3B0aW9uYWwgc29ydCBmdW5jdGlvbiBmb3JcbiAqICAgICBzb3J0aW5nIHRoZSBrZXlzIG9mIGFuIG9iamVjdCBiZWZvcmUgaXRlcmF0aW9uLiBJdCBpcyBpZ25vcmVkIGlmIGB2YWx1ZWBcbiAqICAgICBpc24ndCBhIHBsYWluIG9iamVjdC5cbiAqIEByZXR1cm5zIHttb2R1bGU6eGR1Y2UuSXRlcmF0b3J9IEFuIGl0ZXJhdG9yIG92ZXIgYHZhbHVlYC5cbiAqL1xuZnVuY3Rpb24gaXRlcmF0b3IodmFsdWUsIHNvcnRGbiA9IG51bGwpIHtcbiAgc3dpdGNoICh0cnVlKSB7XG4gICAgY2FzZSBpc0Z1bmN0aW9uKHZhbHVlW1N5bWJvbC5pdGVyYXRvcl0pOlxuICAgIGNhc2UgaXNHZW5lcmF0b3JGdW5jdGlvbih2YWx1ZVtTeW1ib2wuaXRlcmF0b3JdKTpcbiAgICAgIHJldHVybiB2YWx1ZVtTeW1ib2wuaXRlcmF0b3JdKCk7XG4gICAgY2FzZSBpc0Z1bmN0aW9uKHZhbHVlKTpcbiAgICAgIHJldHVybiBmdW5jdGlvbkl0ZXJhdG9yKHZhbHVlKTtcbiAgICBjYXNlIGlzT2JqZWN0KHZhbHVlKTpcbiAgICAgIHJldHVybiBvYmplY3RJdGVyYXRvcih2YWx1ZSwgc29ydEZuKTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHBhc3NlZCBvYmplY3QgaXMgaXRlcmFibGUsIGluIHRlcm1zIG9mIHdoYXQgJ2l0ZXJhYmxlJ1xuICogbWVhbnMgdG8gdGhpcyBsaWJyYXJ5LiBJbiBvdGhlciB3b3JkcywgdmFsdWVzIGltcGxlbWVudGluZyB0aGUgYGl0ZXJhYmxlYFxuICogcHJvdG9jb2wgYW5kIHBsYWluIG9iamVjdHMgcmV0dXJuIGB0cnVlYCwgd2hpbGUgZXZlcnl0aGluZyBlbHNlIHJldHVybnNcbiAqIGBmYWxzZWAuIFRoaXMgZG9lcyBub3QgcmV0dXJuIGB0cnVlYCBmb3IgZnVuY3Rpb25zIGV2ZW4gdGhvdWdoXG4gKiB7QGxpbmsgbW9kdWxlOnhkdWNlLml0ZXJhdG9yfGl0ZXJhdG9yfSBjYW4gcHJvZHVjZSBhbiBpdGVyYXRvciBmb3IgdGhlbSxcbiAqIGJlY2F1c2Ugbm90IGFsbCBmdW5jdGlvbnMgd29yayB3ZWxsIHdpdGhcbiAqIHtAbGluayBtb2R1bGU6eGR1Y2UuaXRlcmF0b3J8aXRlcmF0b3J9LlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3QgZm9yIGl0ZXJhYmlsaXR5LlxuICogQHJldHVybiB7Ym9vbGVhbn0gRWl0aGVyIGB0cnVlYCBpZiB0aGUgdmFsdWUgaXMgaXRlcmFibGVcbiAqICAgICAoYHtAbGluayBtb2R1bGU6eGR1Y2UuaXRlcmF0b3J9YCB3aWxsIHJldHVybiBhbiBpdGVyYXRvciBmb3IgaXQpIG9yXG4gKiAgICAgYGZhbHNlYCBpZiBpdCBpcyBub3QuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBpc0l0ZXJhYmxlKHZhbHVlKSB7XG4gIHJldHVybiBpc0ltcGxlbWVudGVkKHZhbHVlLCBcIml0ZXJhdG9yXCIpIHx8IGlzT2JqZWN0KHZhbHVlKTtcbn1cblxuZXhwb3J0IHsgaXRlcmF0b3IsIGlzSXRlcmFibGUsIGt2LCBrZXksIHZhbHVlIH07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuLyoqXG4gKiBQcm90b2NvbHMgZm9yIGl0ZXJhdGlvbiBhbmQgcmVkdWN0aW9uLlxuICpcbiAqIFRoZSBuYW1lcyBmb3IgdGhlc2UgcHJvdG9jb2xzIGNhbWUgZnJvbSBhIGRpc2N1c3Npb24gdGhyZWFkXG4gKiAoe0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9jb2duaXRlY3QtbGFicy90cmFuc2R1Y2Vycy1qcy9pc3N1ZXMvMjB9KSBmcm9tIGFcbiAqIHRpbWUgd2hlbiB0cmFuc2R1Y2VycyB3ZXJlIHZlcnkgbXVjaCBpbiB0aGUgZm9yZWZyb250LiBJdCdzIHRoZSBjbG9zZXN0IHRoaW5nXG4gKiB0aGVyZSBpcyB0byBhIHN0YW5kYXJkLCBzbyBpdCB3YXMgYWRvcHRlZCBoZXJlLlxuICpcbiAqIFRoZXNlIGFyZSB0aGUgc2FtZSBzeW1ib2xzIGFzIGF2YWlsYWJsZSBpbiBteSB0cmFuc2R1Y2VyIGxpYnJhcnkuIFRoZXkgYXJlXG4gKiBwdWJsaWNseSBhdmFpbGFibGUgZnJvbSB0aGVyZS5cbiAqXG4gKiBAbW9kdWxlIHhkdWNlL3Byb3RvY29sXG4gKiBAcHJpdmF0ZVxuICovXG5cbmltcG9ydCB7IGlzRnVuY3Rpb24sIGlzR2VuZXJhdG9yRnVuY3Rpb24gfSBmcm9tIFwibW9kdWxlcy91dGlsc1wiO1xuXG4vKipcbiAqIFRoZSBtYXBwaW5nIG9mIHByb3RvY29sIG5hbWVzIHRvIHRoZWlyIHJlc3BlY3RpdmUgcHJvcGVydHkga2V5IG5hbWVzLiBUaGVcbiAqIHZhbHVlcyBvZiB0aGlzIG1hcCB3aWxsIGRlcGVuZCBvbiB3aGV0aGVyIHN5bWJvbHMgYXJlIGF2YWlsYWJsZS5cbiAqXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBQcm90b2NvbE1hcFxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHByb3BlcnR5IHtTeW1ib2x9IGluaXQgVGhlIGB0cmFuc2R1Y2VyL2luaXRgIHByb3RvY29sLiBUaGlzIGlzIHVzZWRcbiAqICAgICB0byBtYXJrIGZ1bmN0aW9ucyB0aGF0IGluaXRpYWxpemUgYSB0YXJnZXQgY29sbGVjdGlvbiBiZWZvcmUgYWRkaW5nIGl0ZW1zXG4gKiAgICAgdG8gaXQuXG4gKiBAcHJvcGVydHkge1N5bWJvbH0gc3RlcCBUaGUgYHRyYW5zZHVjZXIvc3RlcGAgcHJvdG9jb2wuIFRoaXMgaXMgdXNlZFxuICogICAgIHRvIG1hcmsgZnVuY3Rpb25zIHRoYXQgYXJlIHVzZWQgaW4gdGhlIHRyYW5zZHVjZXIncyBzdGVwIHByb2Nlc3MsIHdoZXJlXG4gKiAgICAgb2JqZWN0cyBhcmUgYWRkZWQgdG8gdGhlIHRhcmdldCBjb2xsZWN0aW9uIG9uZSBhdCBhIHRpbWUuXG4gKiBAcHJvcGVydHkge1N5bWJvbH0gcmVzdWx0IFRoZSBgdHJhbnNkdWNlci9yZXN1bHRgIHByb3RvY29sLiBUaGlzIGlzXG4gKiAgICAgdXNlZCB0byBtYXJrIGZ1bmN0aW9ucyB0aGF0IHRha2UgdGhlIGZpbmFsIHJlc3VsdCBvZiB0aGUgc3RlcCBwcm9jZXNzIGFuZFxuICogICAgIHJldHVybiB0aGUgZmluYWwgZm9ybSB0byBiZSBvdXRwdXQuIFRoaXMgaXMgb3B0aW9uYWw7IGlmIHRoZSB0cmFuc2R1Y2VyXG4gKiAgICAgZG9lcyBub3Qgd2FudCB0byB0cmFuc2Zvcm0gdGhlIGZpbmFsIHJlc3VsdCwgaXQgc2hvdWxkIGp1c3QgcmV0dXJuIHRoZVxuICogICAgIHJlc3VsdCBvZiBpdHMgY2hhaW5lZCB0cmFuc2R1Y2VyJ3MgYHJlc3VsdGAgZnVuY3Rpb24uXG4gKiBAcHJvcGVydHkge1N5bWJvbH0gcmVkdWNlZCBUaGUgYHRyYW5zZHVjZXIvcmVkdWNlZGAgcHJvdG9jb2wuIFRoZVxuICogICAgIHByZXNlbmNlIG9mIHRoaXMga2V5IG9uIGFuIG9iamVjdCBpbmRpY2F0ZXMgdGhhdCBpdHMgdHJhbnNmb3JtYXRpb24gaGFzXG4gKiAgICAgYmVlbiBjb21wbGV0ZWQuIEl0IGlzIHVzZWQgaW50ZXJuYWxseSB0byBtYXJrIGNvbGxlY3Rpb25zIHdob3NlXG4gKiAgICAgdHJhbnNmb3JtYXRpb25zIGNvbmNsdWRlIGJlZm9yZSBldmVyeSBvYmplY3QgaXMgaXRlcmF0ZWQgb3ZlciAoYXMgaW5cbiAqICAgICBge0BsaW5rIHhkdWNlLnRha2V9YCB0cmFuc2R1Y2Vycy4pIEl0IGlzIG9mIGxpdHRsZSB1c2UgYmV5b25kIHRyYW5zZHVjZXJcbiAqICAgICBhdXRob3JpbmcuXG4gKiBAcHJvcGVydHkge1N5bWJvbH0gdmFsdWUgVGhlIGB0cmFuc2R1Y2VyL3ZhbHVlYCBwcm90b2NvbC4gVGhpcyBpc1xuICogICAgIHVzZWQgaW50ZXJuYWxseSB0byBtYXJrIHByb3BlcnRpZXMgdGhhdCBjb250YWluIHRoZSB2YWx1ZSBvZiBhIHJlZHVjZWRcbiAqICAgICB0cmFuc2Zvcm1hdGlvbi4gSXQgaXMgb2YgbGl0dGxlIHVzZSBiZXlvbmQgdHJhbnNkdWNlciBhdXRob3JpbmcuXG4gKi9cblxuLyoqXG4gKiBUaGUgbWFwcGluZyBvZiBwcm90b2NvbCBuYW1lcyB0byB0aGVpciByZXNwZWN0aXZlIHByb3BlcnR5IGtleSBuYW1lcy5cbiAqXG4gKiBAdHlwZSB7bW9kdWxlOnhkdWNlLlByb3RvY29sTWFwfVxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICovXG5jb25zdCBwcm90b2NvbHMgPSBPYmplY3QuY3JlYXRlKG51bGwsIHtcbiAgaW5pdDoge1xuICAgIHZhbHVlOiBTeW1ib2wuZm9yKFwidHJhbnNkdWNlci9pbml0XCIpXG4gIH0sXG4gIHN0ZXA6IHtcbiAgICB2YWx1ZTogU3ltYm9sLmZvcihcInRyYW5zZHVjZXIvc3RlcFwiKVxuICB9LFxuICByZXN1bHQ6IHtcbiAgICB2YWx1ZTogU3ltYm9sLmZvcihcInRyYW5zZHVjZXIvcmVzdWx0XCIpXG4gIH0sXG4gIHJlZHVjZWQ6IHtcbiAgICB2YWx1ZTogU3ltYm9sLmZvcihcInRyYW5zZHVjZXIvcmVkdWNlZFwiKVxuICB9LFxuICB2YWx1ZToge1xuICAgIHZhbHVlOiBTeW1ib2wuZm9yKFwidHJhbnNkdWNlci92YWx1ZVwiKVxuICB9XG59KTtcblxuZnVuY3Rpb24gaXNJbXBsZW1lbnRlZChvYmosIHByb3RvY29sKSB7XG4gIGlmIChvYmogPT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN3aXRjaCAocHJvdG9jb2wpIHtcbiAgICBjYXNlIFwiaXRlcmF0b3JcIjpcbiAgICAgIHJldHVybiAoXG4gICAgICAgIGlzRnVuY3Rpb24ob2JqW1N5bWJvbC5pdGVyYXRvcl0pIHx8XG4gICAgICAgIGlzR2VuZXJhdG9yRnVuY3Rpb24ob2JqW1N5bWJvbC5pdGVyYXRvcl0pXG4gICAgICApO1xuICAgIGNhc2UgXCJhc3luY0l0ZXJhdG9yXCI6XG4gICAgICByZXR1cm4gaXNHZW5lcmF0b3JGdW5jdGlvbihvYmpbU3ltYm9sLmFzeW5jSXRlcmF0b3JdKTtcbiAgICBjYXNlIFwicmVkdWNlZFwiOlxuICAgIGNhc2UgXCJ2YWx1ZVwiOlxuICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqKS5pbmNsdWRlcyhwcm90b2NvbHNbcHJvdG9jb2xdKTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGlzRnVuY3Rpb24ob2JqW3Byb3RvY29sc1twcm90b2NvbF1dKTtcbiAgfVxufVxuXG5leHBvcnQgeyBwcm90b2NvbHMsIGlzSW1wbGVtZW50ZWQgfTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG4vKipcbiAqIEEgc2V0IG9mIGZ1bmN0aW9ucyByZWxhdGVkIHRvIHRoZSBwcm9kdWNpbmcgcmVkdWNlciBvYmplY3RzLCBtYXJraW5nXG4gKiBjb21wbGV0ZWQgb2JqZWN0cywgYW5kIHBlcmZvcm1pbmcgZ2VuZXJhbCByZWR1Y3Rpb24gb3BlcmF0aW9ucy5cbiAqXG4gKiBAbW9kdWxlIHJlZHVjdGlvblxuICogQHByaXZhdGVcbiAqL1xuXG5pbXBvcnQgeyBpc0ltcGxlbWVudGVkLCBwcm90b2NvbHMgYXMgcCB9IGZyb20gXCJtb2R1bGVzL3Byb3RvY29sXCI7XG5pbXBvcnQgeyBpc1N0cmluZywgaXNBcnJheSwgaXNPYmplY3QsIGlzRnVuY3Rpb24gfSBmcm9tIFwibW9kdWxlcy91dGlsc1wiO1xuaW1wb3J0IHsga3YsIGl0ZXJhdG9yIH0gZnJvbSBcIm1vZHVsZXMvaXRlcmF0aW9uXCI7XG5cbi8qKlxuICogUmV0dXJucyBhbiBpbml0IGZ1bmN0aW9uIGZvciBhIGNvbGxlY3Rpb24uIFRoaXMgaXMgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYVxuICogbmV3LCBlbXB0eSBpbnN0YW5jZSBvZiB0aGUgY29sbGVjdGlvbiBpbiBxdWVzdGlvbi4gSWYgdGhlIGNvbGxlY3Rpb24gZG9lc24ndFxuICogc3VwcG9ydCByZWR1Y3Rpb24sIGBudWxsYCBpcyByZXR1cm5lZC4gVGhpcyBtYWtlcyBjb25kaXRpb25hbHMgYSBiaXQgZWFzaWVyXG4gKiB0byB3b3JrIHdpdGguXG4gKlxuICogSW4gb3JkZXIgdG8gc3VwcG9ydCB0aGUgY29udmVyc2lvbiBvZiBmdW5jdGlvbnMgaW50byByZWR1Y2VycywgZnVuY3Rpb25cbiAqIHN1cHBvcnQgaXMgYWxzbyBwcm92aWRlZC5cbiAqXG4gKiBAcGFyYW0geyp9IGNvbGxlY3Rpb24gQSBjb2xsZWN0aW9uIHRvIGNyZWF0ZSBhbiBpbml0IGZ1bmN0aW9uIGZvci4gVGhpcyBjYW5cbiAqICAgICBiZSBhbnl0aGluZyB0aGF0IHN1cHBvcnRzIHRoZSBpdGVyYXRpb24gcHJvdG9jb2wgb3IgYSBwbGFpbiBvYmplY3QuXG4gKiBAcmV0dXJuIHttb2R1bGU6eGR1Y2UuSW5pdEZ1bmN0aW9ufSBBIGZ1bmN0aW9uIHRoYXQsIHdoZW4gY2FsbGVkLCByZXR1cm5zIGFuXG4gKiAgICAgaW5pdGlhbCB2ZXJzaW9uIG9mIHRoZSBwcm92aWRlZCBjb2xsZWN0aW9uLiBJZiB0aGUgcHJvdmlkZWQgY29sbGVjdGlvbiBpc1xuICogICAgIG5vdCBpdGVyYWJsZSwgdGhlbiBgbnVsbGAgaXMgcmV0dXJuZWQuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBpbml0KGNvbGxlY3Rpb24pIHtcbiAgc3dpdGNoICh0cnVlKSB7XG4gICAgY2FzZSBpc0ltcGxlbWVudGVkKGNvbGxlY3Rpb24sIFwiaW5pdFwiKTpcbiAgICAgIHJldHVybiBjb2xsZWN0aW9uW3AuaW5pdF07XG4gICAgY2FzZSBpc1N0cmluZyhjb2xsZWN0aW9uKTpcbiAgICAgIHJldHVybiAoKSA9PiBcIlwiO1xuICAgIGNhc2UgaXNBcnJheShjb2xsZWN0aW9uKTpcbiAgICAgIHJldHVybiAoKSA9PiBbXTtcbiAgICBjYXNlIGlzT2JqZWN0KGNvbGxlY3Rpb24pOlxuICAgICAgcmV0dXJuICgpID0+ICh7fSk7XG4gICAgY2FzZSBpc0Z1bmN0aW9uKGNvbGxlY3Rpb24pOlxuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoXCJpbml0IG5vdCBhdmFpbGFibGVcIik7XG4gICAgICB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG4vKipcbiAqIFJldHVybnMgYSBzdGVwIGZ1bmN0aW9uIGZvciBhIGNvbGxlY3Rpb24uIFRoaXMgaXMgYSBmdW5jdGlvbiB0aGF0IHRha2VzIGFuXG4gKiBhY2N1bXVsYXRvciBhbmQgYSB2YWx1ZSBhbmQgcmV0dXJucyB0aGUgcmVzdWx0IG9mIHJlZHVjaW5nIHRoZSB2YWx1ZSBpbnRvIHRoZVxuICogYWNjdW11bGF0b3IuIElmIHRoZSBjb2xsZWN0aW9uIGRvZXNuJ3Qgc3VwcG9ydCByZWR1Y3Rpb24sIGBudWxsYCBpcyByZXR1cm5lZC5cbiAqIFRoZSByZXR1cm5lZCBmdW5jdGlvbiBpdHNlbGYgc2ltcGx5IHJlZHVjZXMgdGhlIGlucHV0IGludG8gdGhlIHRhcmdldFxuICogY29sbGVjdGlvbiB3aXRob3V0IG1vZGlmeWluZyBpdC5cbiAqXG4gKiBJbiBvcmRlciB0byBzdXBwb3J0IHRoZSBjb252ZXJzaW9uIG9mIGZ1bmN0aW9ucyBpbnRvIHJlZHVjZXJzLCBmdW5jdGlvblxuICogc3VwcG9ydCBpcyBhbHNvIHByb3ZpZGVkLlxuICpcbiAqIEBwYXJhbSB7Kn0gY29sbGVjdGlvbiBBIGNvbGxlY3Rpb24gdG8gY3JlYXRlIGEgc3RlcCBmdW5jdGlvbiBmb3IuIFRoaXMgY2FuIGJlXG4gKiAgICAgYW55dGhpbmcgdGhhdCBzdXBwb3J0cyB0aGUgaXRlcmF0aW9uIHByb3RvY29sLCBhIHBsYWluIG9iamVjdCwgb3IgYVxuICogICAgIGZ1bmN0aW9uLlxuICogQHJldHVybiB7bW9kdWxlOnhkdWNlLlN0ZXBGdW5jdGlvbn0gQSByZWR1Y3Rpb24gZnVuY3Rpb24gZm9yIHRoZSBwcm92aWRlZFxuICogICAgIGNvbGxlY3Rpb24gdGhhdCBzaW1wbHkgYWRkcyBhbiBlbGVtZW50IHRvIHRoZSB0YXJnZXQgY29sbGVjdGlvbiB3aXRob3V0XG4gKiAgICAgbW9kaWZ5aW5nIGl0LiBJZiB0aGUgcHJvdmlkZWQgY29sbGVjdGlvbiBpcyBub3QgaXRlcmFibGUsIGBudWxsYCBpc1xuICogICAgIHJldHVybmVkLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gc3RlcChjb2xsZWN0aW9uKSB7XG4gIHN3aXRjaCAodHJ1ZSkge1xuICAgIGNhc2UgaXNJbXBsZW1lbnRlZChjb2xsZWN0aW9uLCBcInN0ZXBcIik6XG4gICAgICByZXR1cm4gY29sbGVjdGlvbltwLnN0ZXBdO1xuXG4gICAgY2FzZSBpc1N0cmluZyhjb2xsZWN0aW9uKTpcbiAgICAgIHJldHVybiAoYWNjLCBpbnB1dCkgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGlzT2JqZWN0KGlucHV0KSA/IGt2KGlucHV0KS52IDogaW5wdXQ7XG4gICAgICAgIHJldHVybiBhY2MgKyB2YWx1ZTtcbiAgICAgIH07XG5cbiAgICBjYXNlIGlzQXJyYXkoY29sbGVjdGlvbik6XG4gICAgICByZXR1cm4gKGFjYywgaW5wdXQpID0+IHtcbiAgICAgICAgYWNjLnB1c2goaW5wdXQpO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfTtcblxuICAgIGNhc2UgaXNPYmplY3QoY29sbGVjdGlvbik6XG4gICAgICByZXR1cm4gKGFjYywgaW5wdXQpID0+IHtcbiAgICAgICAgbGV0IHZhbHVlID0gaW5wdXQ7XG5cbiAgICAgICAgaWYgKCFpc09iamVjdChpbnB1dCkpIHtcbiAgICAgICAgICAvLyBpZiB0aGUgaW5wdXQgaXNuJ3QgYW4gb2JqZWN0LCB0dXJuIGl0IGludG8gYW4gb2JqZWN0IHdpdGggYVxuICAgICAgICAgIC8vIG51bWVyaWNhbCBrZXkgb25lIGdyZWF0ZXIgdGhhbiB0aGUgbWF4IGtleSBhbHJlYWR5IGluIHRoZVxuICAgICAgICAgIC8vIGFjY3VtdWxhdG9yXG4gICAgICAgICAgY29uc3QgbWF4ID0gT2JqZWN0LmtleXMoYWNjKS5yZWR1Y2UoKGEsIGIpID0+IE1hdGgubWF4KGEsIGIpLCAtMSk7XG4gICAgICAgICAgdmFsdWUgPSB7IFttYXggKyAxXTogaW5wdXQgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHsgaywgdiB9ID0ga3YodmFsdWUpO1xuICAgICAgICBhY2Nba10gPSB2O1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfTtcblxuICAgIGNhc2UgaXNGdW5jdGlvbihjb2xsZWN0aW9uKTpcbiAgICAgIHJldHVybiAoYWNjLCBpbnB1dCkgPT4gY29sbGVjdGlvbihhY2MsIGlucHV0KTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG4vKipcbiAqIFJldHVybnMgYSByZXN1bHQgZnVuY3Rpb24gZm9yIGEgY29sbGVjdGlvbi4gVGhpcyBpcyBhIGZ1bmN0aW9uIHRoYXQgcGVyZm9ybXNcbiAqIGFueSBmaW5hbCBwcm9jZXNzaW5nIHRoYXQgc2hvdWxkIGJlIGRvbmUgb24gdGhlIHJlc3VsdCBvZiBhIHJlZHVjdGlvbi4gSWYgdGhlXG4gKiBjb2xsZWN0aW9uIGRvZXNuJ3Qgc3VwcG9ydCByZWR1Y3Rpb24sIGBudWxsYCBpcyByZXR1cm5lZC5cbiAqXG4gKiBJbiBvcmRlciB0byBzdXBwb3J0IHRoZSBjb252ZXJzaW9uIG9mIGZ1bmN0aW9ucyBpbnRvIHJlZHVjZXJzLCBmdW5jdGlvblxuICogc3VwcG9ydCBpcyBhbHNvIHByb3ZpZGVkLlxuICpcbiAqIEBwYXJhbSB7Kn0gY29sbGVjdGlvbiBBIGNvbGxlY3Rpb24gdG8gY3JlYXRlIGEgc3RlcCBmdW5jdGlvbiBmb3IuIFRoaXMgY2FuIGJlXG4gKiAgICAgYW55dGhpbmcgdGhhdCBzdXBwb3J0cyB0aGUgaXRlcmF0aW9uIHByb3RvY29sLCBhIHBsYWluIG9iamVjdCwgb3IgYVxuICogICAgIGZ1bmN0aW9uLlxuICogQHJldHVybiB7bW9kdWxlOnhkdWNlLlJlc3VsdEZ1bmN0aW9ufSBBIGZ1bmN0aW9uIHRoYXQsIHdoZW4gZ2l2ZW4gYSByZWR1Y2VkXG4gKiAgICAgY29sbGVjdGlvbiwgcHJvZHVjZXMgdGhlIGZpbmFsIG91dHB1dC4gSWYgdGhlIHByb3ZpZGVkIGNvbGxlY3Rpb24gaXMgbm90XG4gKiAgICAgaXRlcmFibGUsIGBudWxsYCB3aWxsIGJlIHJldHVybmVkLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gcmVzdWx0KGNvbGxlY3Rpb24pIHtcbiAgc3dpdGNoICh0cnVlKSB7XG4gICAgY2FzZSBpc0ltcGxlbWVudGVkKGNvbGxlY3Rpb24sIFwicmVzdWx0XCIpOlxuICAgICAgcmV0dXJuIGNvbGxlY3Rpb25bcC5yZXN1bHRdO1xuICAgIGNhc2UgaXNTdHJpbmcoY29sbGVjdGlvbik6XG4gICAgY2FzZSBpc0FycmF5KGNvbGxlY3Rpb24pOlxuICAgIGNhc2UgaXNPYmplY3QoY29sbGVjdGlvbik6XG4gICAgY2FzZSBpc0Z1bmN0aW9uKGNvbGxlY3Rpb24pOlxuICAgICAgcmV0dXJuIHZhbHVlID0+IHZhbHVlO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG4vKipcbiAqIENyZWF0ZXMgYSByZWR1Y2VyIG9iamVjdCBmcm9tIGEgZnVuY3Rpb24gb3IgZnJvbSBhIGJ1aWx0LWluIHJlZHVjaWJsZSB0eXBlXG4gKiAoYXJyYXksIG9iamVjdCwgb3Igc3RyaW5nKS5cbiAqXG4gKiBUbyBjcmVhdGUgYSByZWR1Y2VyIGZvciBhcnJheXMsIG9iamVjdHMsIG9yIHN0cmluZ3MsIHNpbXBseSBwYXNzIGFuIGVtcHR5XG4gKiB2ZXJzaW9uIG9mIHRoYXQgY29sbGVjdGlvbiB0byB0aGlzIGZ1bmN0aW9uIChlLmcuLCBgdG9SZWR1Y2VyKFtdKWApLlxuICpcbiAqIFRoZSBub3RhYmxlIHVzZSBmb3IgdGhpcyBmdW5jdGlvbiB0aG91Z2ggaXMgdG8gdHVybiBhIHJlZHVjdGlvbiBmdW5jdGlvbiBpbnRvXG4gKiBhIHJlZHVjZXIgb2JqZWN0LiBUaGUgZnVuY3Rpb24gaXMgYSBmdW5jdGlvbiBvZiB0d28gcGFyYW1ldGVycywgYW5cbiAqIGFjY3VtdWxhdG9yIGFuZCBhIHZhbHVlLCBhbmQgcmV0dXJucyB0aGUgYWNjdW11bGF0b3Igd2l0aCB0aGUgdmFsdWUgaW4gaXQuXG4gKiBUaGlzIGlzIGV4YWN0bHkgdGhlIHNhbWUga2luZCBvZiBmdW5jdGlvbiB0aGF0IGlzIHBhc3NlZCB0byByZWR1Y3Rpb25cbiAqIGZ1bmN0aW9ucyBsaWtlIEphdmFTY3JpcHQncyBgQXJyYXkucHJvdG90eXBlLnJlZHVjZWAgYW5kIExvZGFzaCdzIGBfLnJlZHVjZWAuXG4gKlxuICogTm90ZSBpbiBwYXJ0aWN1bGFyIHRoYXQgdGhlIG91dHB1dCBvZiB0aGlzIHJlZHVjZXIgZG9lcyBub3QgbmVlZCB0byBiZSBhXG4gKiBjb2xsZWN0aW9uLiBJdCBjYW4gYmUgYW55dGhpbmcuIFdoaWxlIHRyYW5zZHVjaW5nIG5vcm1hbGx5IGludm9sdmVzXG4gKiB0cmFuc2Zvcm1pbmcgb25lIGNvbGxlY3Rpb24gaW50byBhbm90aGVyLCBpdCBuZWVkIG5vdCBiZSBzby4gRm9yIGV4YW1wbGUsXG4gKiBoZXJlIGlzIGEgcmVkdWNlciB0aGF0IHdpbGwgcmVzdWx0IGluIHN1bW1pbmcgb2YgdGhlIGNvbGxlY3Rpb24gdmFsdWVzLlxuICpcbiAqIGBgYFxuICogaW1wb3J0IHsgdG9SZWR1Y2VyLCByZWR1Y2UgfSBmcm9tIFwiQGNoYW5rby94ZHVjZVwiO1xuICpcbiAqIGNvbnN0IHN1bVJlZHVjZXIgPSB0b1JlZHVjZXIoKGFjYywgaW5wdXQpID0+IGFjYyArIGlucHV0KTtcbiAqIGNvbnN0IHN1bSA9IHJlZHVjZShbMSwgMiwgMywgNCwgNV0sIHN1bVJlZHVjZXIsIDApO1xuICogY29uc29sZS5sb2coc3VtKTsgICAvLyAtPiAxNVxuICogYGBgXG4gKlxuICogVGhpcyBjYW4gYmUgY29tYmluZWQgd2l0aCB0cmFuc2R1Y2VycyBhcyB3ZWxsLCBhcyBpbiB0aGlzIGNhbGN1bGF0aW9uIG9mIHRoZVxuICogc3VtIG9mIHRoZSAqc3F1YXJlcyogb2YgdGhlIGNvbGxlY3Rpb24gdmFsdWVzLlxuICpcbiAqIGBgYFxuICogaW1wb3J0IHsgdG9SZWR1Y2VyLCB0cmFuc2R1Y2UgfSBmcm9tIFwiQGNoYW5rby94ZHVjZVwiO1xuICogaW1wb3J0IHsgbWFwIH0gZnJvbSBcIkBjaGFua28vdHJhbnNkdWNlcnNcIjtcbiAqXG4gKiBjb25zdCBzdW1SZWR1Y2VyID0gdG9SZWR1Y2VyKChhY2MsIGlucHV0KSA9PiBhY2MgKyBpbnB1dCk7XG4gKiBjb25zdCBzdW0gPSB0cmFuc2R1Y2UoWzEsIDIsIDMsIDQsIDVdLCBtYXAoeCA9PiB4ICogeCksIHN1bVJlZHVjZXIsIDApO1xuICogY29uc29sZS5sb2coc3VtKTsgICAvLyAtPiA1NVxuICogYGBgXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHBhcmFtIHsqfSBjb2xsZWN0aW9uIEFuIGl0ZXJhYmxlIGNvbGxlY3Rpb24gb3IgYSByZWR1Y2VyIGZ1bmN0aW9uLlxuICogQHJldHVybiB7b2JqZWN0fSBBbiBvYmplY3QgY29udGFpbmluZyBwcm90b2NvbCBwcm9wZXJ0aWVzIGZvciBpbml0LCBzdGVwLCBhbmRcbiAqICAgICByZXN1bHQuIFRoaXMgb2JqZWN0IGlzIHN1aXRhYmxlIGZvciB1c2UgYXMgYSByZWR1Y2VyIG9iamVjdCAob25lIHByb3ZpZGVkXG4gKiAgICAgdG8gYHtAbGluayB4ZHVjZS5yZWR1Y2V8cmVkdWNlfWAgb3IgYHtAbGluayB4ZHVjZS50cmFuc2R1Y2V8dHJhbnNkdWNlfWApLlxuICogICAgIElmIHRoZSBwcm92aWRlZCBjb2xsZWN0aW9uIGlzIG5vdCBpdGVyYWJsZSwgYWxsIG9mIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXNcbiAqICAgICBvYmplY3Qgd2lsbCBiZSBgbnVsbGAuXG4gKi9cbmZ1bmN0aW9uIHRvUmVkdWNlcihjb2xsZWN0aW9uKSB7XG4gIHJldHVybiBPYmplY3QuZnJlZXplKHtcbiAgICBbcC5pbml0XTogaW5pdChjb2xsZWN0aW9uKSxcbiAgICBbcC5zdGVwXTogc3RlcChjb2xsZWN0aW9uKSxcbiAgICBbcC5yZXN1bHRdOiByZXN1bHQoY29sbGVjdGlvbilcbiAgfSk7XG59XG5cbi8qKlxuICogQSByZWR1Y2VyIG9iamVjdCBmb3IgYXJyYXlzLlxuICpcbiAqIEB0eXBlIHttb2R1bGU6eGR1Y2UuUmVkdWNlcn1cbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IEFSUkFZX1JFRFVDRVIgPSB0b1JlZHVjZXIoW10pO1xuXG4vKipcbiAqIEEgcmVkdWNlciBvYmplY3QgZm9yIG9iamVjdHMuXG4gKlxuICogQHR5cGUge21vZHVsZTp4ZHVjZS5SZWR1Y2VyfVxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgT0JKRUNUX1JFRFVDRVIgPSB0b1JlZHVjZXIoe30pO1xuXG4vKipcbiAqIEEgcmVkdWNlciBvYmplY3QgZm9yIHN0cmluZ3MuXG4gKlxuICogQHR5cGUge21vZHVsZTp4ZHVjZS5SZWR1Y2VyfVxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgU1RSSU5HX1JFRFVDRVIgPSB0b1JlZHVjZXIoXCJcIik7XG5cbi8qKlxuICogQ3JlYXRlcyBhIHRyYW5zZHVjZXIgZnJvbSBhIGZ1bmN0aW9uIGFuZCBhIHRyYW5zZHVjZXIgdG8gY2hhaW4gaXQgdG8uXG4gKlxuICogVGhpcyBpcyBpbiBtb3N0IHJlc3BlY3RzIGp1c3QgbGlrZSB7QGxpbmsgbW9kdWxlOnhkdWNlLnRvUmVkdWNlcnx0b1JlZHVjZXJ9LFxuICogd2l0aCB0d28gbm90YWJsZSBkaWZmZXJlbmNlcy4gT25lIGlzIHRoYXQgaXQgcmVxdWlyZXMgYSB0cmFuc2R1Y2VyIHRvIGNoYWluXG4gKiB0bywgYW5kIGl0IGRvZXMgdGhlIGNoYWluaW5nIGFzIGEgcGFydCBvZiBjcmVhdGluZyB0aGUgbmV3IHRyYW5zZHVjZXIuIFRoZVxuICogb3RoZXIgaXMgdGhhdCBpdCBpbmNsdWRlcyBhIHVzYWJsZSBgaW5pdGAgZnVuY3Rpb24sIHdoZXJlIHBhc3NpbmcgYSBmdW5jdGlvblxuICogdG8ge0BsaW5rIG1vZHVsZTp4ZHVjZS50b1JlZHVjZXJ8dG9SZWR1Y2VyfSB3b3VsZCBjcmVhdGUgYW4gaW5pdCBmdW5jdGlvblxuICogdGhhdCB0aHJvd3MgYW4gZXJyb3IgaWYgaXQncyBjYWxsZWQuXG4gKlxuICogVGhpcyBmdW5jdGlvbiBhcHBsaWVzIHRoZSBnaXZlbiBmdW5jdGlvbiBhcyB0aGUgYHN0ZXBgIGZ1bmN0aW9uIG9mIHRoZVxuICogcmV0dXJuZWQgdHJhbnNkdWNlciwgYW5kIHRoZSBgaW5pdGAgYW5kIGByZXN1bHRgIGZ1bmN0aW9ucyBzaW1wbHkgY2FsbCB0aGVcbiAqIHNhbWUgZnVuY3Rpb25zIGluIHRoZSBuZXh0IHRyYW5zZHVjZXIgZG93biB0aGUgY2hhaW4uIFRoaXMgaXMgcHJlY2lzZWx5IHdoYXRcbiAqICptb3N0KiB0cmFuc2R1Y2VycyB3YW50Li4uYGluaXRgIGFuZCBgcmVzdWx0YCBmdW5jdGlvbnMgYXJlIG5vcm1hbGx5IGhhbmRsZWRcbiAqIGJ5IHRoZSByZWR1Y2VyIGF0IHRoZSBlbmQgb2YgdGhlIHRyYW5zZHVjZXIgY2hhaW4uLi5idXQgaW4gdGhlIHJhcmUgY2FzZVxuICogd2hlbiBgaW5pdGAgb3IgYHJlc3VsdGAgbXVzdCBkbyBtb3JlIHRoYW4gdGhpcywgdGhlIHRyYW5zZHVjZXIgbXVzdCBiZVxuICogY3JlYXRlZCBtYW51YWxseS5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIGRvZXMgbm90IGF1dG9tYXRpY2FsbHkgY2hhaW4gdGhlIGBzdGVwYCBmdW5jdGlvbiB0byB0aGUgbmV4dFxuICogb25lIGRvd24gdGhlIGxpbmUsIGFzIHRoYXQgY2FuIGJlIGRvbmUgaW4gYW55IG51bWJlciBvZiBkaWZmZXJlbnQgd2F5cy4gVGh1c1xuICogdGhlIGZ1bmN0aW9uIGl0c2VsZiBzaG91bGQgY2FsbCB0aGUgYHN0ZXBgIGZ1bmN0aW9uIGluIGB4Zm9ybWAgaW4gd2hhdGV2ZXJcbiAqIHdheSBpcyBhcHByb3ByaWF0ZS5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcGFyYW0ge21vZHVsZTp4ZHVjZS5TdGVwRnVuY3Rpb259IGZuIFRoZSBzdGVwIGZ1bmN0aW9uIGZvciB0aGUgdHJhbnNkdWNlci5cbiAqIEBwYXJhbSB7bW9kdWxlOnhkdWNlLlRyYW5zZHVjZXJ9IHhmb3JtIFRoZSBuZXh0IHRyYW5zZHVjZXIgb2JqZWN0IGluIHRoZVxuICogICAgIGNoYWluLlxuICogQHJldHVybnMge21vZHVsZTp4ZHVjZS5UcmFuc2R1Y2VyfSBBIG5ldyB0cmFuc2R1Y2VyLCBjaGFpbmluZyB0aGUgc3VwcGxpZWRcbiAqICAgICBmdW5jdGlvbiB0byB0aGUgc3VwcGxpZWQgdHJhbnNkdWNlci5cbiAqL1xuZnVuY3Rpb24gdG9UcmFuc2R1Y2VyKGZuLCB4Zm9ybSkge1xuICByZXR1cm4ge1xuICAgIFtwLmluaXRdKCkge1xuICAgICAgcmV0dXJuIHhmb3JtW3AuaW5pdF0oKTtcbiAgICB9LFxuXG4gICAgW3Auc3RlcF06IGZuLFxuXG4gICAgW3AucmVzdWx0XSh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHhmb3JtW3AucmVzdWx0XSh2YWx1ZSk7XG4gICAgfVxuICB9O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSByZWR1Y3Rpb24gZnVuY3Rpb24gZnJvbSBhIHRyYW5zZHVjZXIgYW5kIGEgcmVkdWNlci5cbiAqXG4gKiBUaGlzIHByb2R1Y2VzIGEgZnVuY3Rpb24gdGhhdCdzIHN1aXRhYmxlIGZvciBiZWluZyBwYXNzZWQgaW50byBvdGhlclxuICogbGlicmFyaWVzJyByZWR1Y2UgZnVuY3Rpb25zLCBzdWNoIGFzIEphdmFTY3JpcHQncyBgQXJyYXkucHJvdG90eXBlLnJlZHVjZWAgb3JcbiAqIExvZGFzaCdzIGBfLnJlZHVjZWAuIEl0IHJlcXVpcmVzIGJvdGggYSB0cmFuc2Zvcm1lciBhbmQgYSByZWR1Y2VyIGJlY2F1c2VcbiAqIHJlZHVjdGlvbiBmdW5jdGlvbnMgZm9yIHRob3NlIGxpYnJhcmllcyBtdXN0IGtub3cgaG93IHRvIGRvIGJvdGguIFRoZSByZWR1Y2VyXG4gKiBjYW4gYmUgYSBzdGFuZGFyZCByZWR1Y2VyIG9iamVjdCBsaWtlIHRoZSBvbmVzIHNlbnRcbiAqIHRvYHtAbGluayBtb2R1bGU6eGR1Y2UudHJhbnNkdWNlfHRyYW5zZHVjZX1gIG9yXG4gKiBge0BsaW5rIG1vZHVsZTp4ZHVjZS5yZWR1Y2V8cmVkdWNlfWAsIG9yIGl0IGNhbiBiZSBhIHBsYWluIGZ1bmN0aW9uIHRoYXRcbiAqIHRha2VzIHR3byBwYXJhbWV0ZXJzIGFuZCByZXR1cm5zIHRoZSByZXN1bHQgb2YgcmVkdWNpbmcgdGhlIHNlY29uZCBwYXJhbWV0ZXJcbiAqIGludG8gdGhlIGZpcnN0LlxuICpcbiAqIElmIHRoZXJlIGlzIG5vIG5lZWQgZm9yIGEgdHJhbnNmb3JtYXRpb24sIHRoZW4gcGFzcyBpbiB0aGVcbiAqIGB7QGxpbmsgbW9kdWxlOnRyYW5zZHVjZXJzLmlkZW50aXR5fGlkZW50aXR5fWAgdHJhbnNkdWNlci5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcGFyYW0ge21vZHVsZTp4ZHVjZS5SZWR1Y2VyfSB4Zm9ybSBBIHRyYW5zZHVjZXIgb2JqZWN0IHdob3NlIHN0ZXBcbiAqICAgICBmdW5jdGlvbiB3aWxsIGJlY29tZSB0aGUgcmV0dXJuZWQgcmVkdWN0aW9uIGZ1bmN0aW9uLlxuICogQHBhcmFtIHsobW9kdWxlOnhkdWNlLlN0ZXBGdW5jdGlvbnxtb2R1bGU6eGR1Y2UuUmVkdWNlcil9IHJlZHVjZXIgQVxuICogICAgIHJlZHVjZXIgdGhhdCBrbm93cyBob3cgdG8gcmVkdWNlIHZhbHVlcyBpbnRvIGFuIG91dHB1dCBjb2xsZWN0aW9uLiBUaGlzXG4gKiAgICAgY2FuIGVpdGhlciBiZSBhIHJlZHVjaW5nIGZ1bmN0aW9uIG9yIGEgdHJhbnNkdWNlciBvYmplY3Qgd2hvc2UgYHN0ZXBgXG4gKiAgICAgZnVuY3Rpb24ga25vd3MgaG93IHRvIHBlcmZvcm0gdGhpcyByZWR1Y3Rpb24uXG4gKiBAcmV0dXJucyB7bW9kdWxlOnhkdWNlLlN0ZXBGdW5jdGlvbn0gQSBmdW5jdGlvbiB0aGF0IGhhbmRsZXMgYm90aCB0aGVcbiAqICAgICB0cmFuc2Zvcm1hdGlvbiBhbmQgdGhlIHJlZHVjdGlvbiBvZiBhIHZhbHVlIG9udG8gYSB0YXJnZXQgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIHRvRnVuY3Rpb24oeGZvcm0sIHJlZHVjZXIpIHtcbiAgY29uc3QgciA9IHR5cGVvZiByZWR1Y2VyID09PSBcImZ1bmN0aW9uXCIgPyB0b1JlZHVjZXIocmVkdWNlcikgOiByZWR1Y2VyO1xuICBjb25zdCByZXN1bHQgPSB4Zm9ybShyKTtcbiAgcmV0dXJuIHJlc3VsdFtwLnN0ZXBdLmJpbmQocmVzdWx0KTtcbn1cblxuLyoqXG4gKiBNYXJrcyBhIHZhbHVlIGFzIGNvbXBsZXRlLlxuICpcbiAqIFRoaXMgaXMgZG9uZSBieSB3cmFwcGluZyB0aGUgdmFsdWUuIFRoaXMgbWVhbnMgdGhyZWUgdGhpbmdzOiBmaXJzdCwgYVxuICogY29tcGxldGUgb2JqZWN0IG1heSBiZSBtYXJrZWQgYXMgY29tcGxldGUgYWdhaW47IHNlY29uZCwgYSBjb21wbGV0ZSB2YWx1ZVxuICogaXNuJ3QgdXNhYmxlIHdpdGhvdXQgYmVpbmcgdW5jb21wbGV0ZWQgZmlyc3Q7IGFuZCB0aGlyZCBhbnkgdHlwZSBvZiB2YWx1ZVxuICogKGluY2x1ZGluZyBgdW5kZWZpbmVkYCkgbWF5IGJlIG1hcmtlZCBhcyBjb21wbGV0ZS5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBiZSBjb21wbGV0ZWQuXG4gKiBAcmV0dXJuIHsqfSBBIGNvbXBsZXRlZCB2ZXJzaW9uIG9mIHRoZSBwcm92aWRlZCB2YWx1ZS4gVGhpcyByZWR1Y3Rpb24gaXNcbiAqICAgICBhY2hpZXZlZCBieSB3cmFwcGluZyB0aGUgdmFsdWUgaW4gYSBtYXJrZXIgb2JqZWN0LlxuICovXG5mdW5jdGlvbiBjb21wbGV0ZSh2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIFtwLnJlZHVjZWRdOiB0cnVlLFxuICAgIFtwLnZhbHVlXTogdmFsdWVcbiAgfTtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIHRoZSBjb21wbGV0ZSBzdGF0dXMgZnJvbSBhIGNvbXBsZXRlZCB2YWx1ZS5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIGludGVuZGVkIHRvIGJlIHVzZWQgd2hlbiBpdCdzIGNlcnRhaW4gdGhhdCBhIHZhbHVlIGlzXG4gKiBhbHJlYWR5IG1hcmtlZCBhcyBjb21wbGV0ZS4gSWYgaXQgaXMgbm90LCBgdW5kZWZpbmVkYCB3aWxsIGJlIHJldHVybmVkXG4gKiBpbnN0ZWFkIG9mIHRoZSB2YWx1ZS5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBiZSB1bmNvbXBsZXRlZC5cbiAqIEByZXR1cm4geyp9IEFuIHVuY29tcGxldGVkIHZlcnNpb24gb2YgdGhlIHByb3ZpZGVkIHZhbHVlLiBJZiB0aGUgdmFsdWUgd2FzXG4gKiAgICAgbm90IGNvbXBsZXRlIGluIHRoZSBmaXJzdCBwbGFjZSwgYHVuZGVmaW5lZGAgd2lsbCBiZSByZXR1cm5lZCBpbnN0ZWFkLlxuICovXG5mdW5jdGlvbiB1bmNvbXBsZXRlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZT8uW3AudmFsdWVdO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhIHZhbHVlIGlzIG1hcmtlZCBhcyBjb21wbGV0ZS5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0IGZvciBpdHMgY29tcGxldGUgc3RhdHVzLlxuICogQHJldHVybiB7Ym9vbGVhbn0gRWl0aGVyIGB0cnVlYCBpZiB0aGUgdmFsdWUgaXMgY29tcGxldGUsIG9yIGBmYWxzZWAgaWYgaXQgaXNcbiAqICAgICBub3QuXG4gKi9cbmZ1bmN0aW9uIGlzQ29tcGxldGVkKHZhbHVlKSB7XG4gIHJldHVybiAhIXZhbHVlPy5bcC5yZWR1Y2VkXTtcbn1cblxuLyoqXG4gKiBNYWtlcyBzdXJlIHRoYXQgYSB2YWx1ZSBpcyBtYXJrZWQgYXMgY29tcGxldGU7IGlmIGl0IGlzIG5vdCwgaXQgd2lsbCBiZVxuICogbWFya2VkIGFzIGNvbXBsZXRlLlxuICpcbiAqIFRoaXMgZGlmZmVycyBmcm9tIHtAbGluayBtb2R1bGU6eGR1Y2UuY29tcGxldGV8Y29tcGxldGV9IGluIHRoYXRcbiAqIGlmIHRoZSB2YWx1ZSBpcyBhbHJlYWR5IGNvbXBsZXRlLCB0aGlzIGZ1bmN0aW9uIHdvbid0IGNvbXBsZXRlIGl0IGFnYWluLlxuICogVGhlcmVmb3JlIHRodXMgZnVuY3Rpb24gY2FuJ3QgYmUgdXNlZCB0byBtYWtlIGEgdmFsdWUgY29tcGxldGUgbXVsdGlwbGVcbiAqIHRpbWVzLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGJlIGNvbXBsZXRlZC5cbiAqIEByZXR1cm4geyp9IElmIHRoZSB2YWx1ZSBpcyBhbHJlYWR5IGNvbXBsZXRlLCB0aGVuIHRoZSB2YWx1ZSBpcyBzaW1wbHlcbiAqICAgICByZXR1cm5lZC4gT3RoZXJ3aXNlLCBhIGNvbXBsZXRlZCB2ZXJzaW9uIG9mIHRoZSB2YWx1ZSBpcyByZXR1cm5lZC5cbiAqL1xuZnVuY3Rpb24gZW5zdXJlQ29tcGxldGVkKHZhbHVlKSB7XG4gIHJldHVybiBpc0NvbXBsZXRlZCh2YWx1ZSkgPyB2YWx1ZSA6IGNvbXBsZXRlKHZhbHVlKTtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIHRoZSBjb21wbGV0ZSBzdGF0dXMgZnJvbSBhIHZhbHVlLCBhcyBsb25nIGFzIGl0IGFjdHVhbGx5IGlzIGNvbXBsZXRlLlxuICpcbiAqIFRoaXMgZG9lcyBhIGNoZWNrIHRvIG1ha2Ugc3VyZSB0aGUgdmFsdWUgcGFzc2VkIGluIGFjdHVhbGx5IGlzIGNvbXBsZXRlLiBJZlxuICogaXQgaXNuJ3QsIHRoZSB2YWx1ZSBpdHNlbGYgaXMgcmV0dXJuZWQuIEl0J3MgbWVhbnQgdG8gYmUgdXNlZCB3aGVuIHRoZVxuICogY29tcGxldGVkIHN0YXR1cyBpcyB1bmNlcnRhaW4uXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgY29tcGxldGUgdmFsdWUgdG8gYmUgdW5jb21wbGV0ZWQuXG4gKiBAcmV0dXJuIHsqfSBJZiB0aGUgdmFsdWUgaXMgYWxyZWFkeSB1bmNvbXBsZXRlZCwgdGhlIHZhbHVlIGlzIHNpbXBseVxuICogICAgIHJldHVybmVkLiBPdGhlcndpc2UgYW4gdW5jb21wbGV0ZWQgdmVyc2lvbiBvZiB0aGUgdmFsdWUgaXMgcmV0dXJuZWQuXG4gKi9cbmZ1bmN0aW9uIGVuc3VyZVVuY29tcGxldGVkKHZhbHVlKSB7XG4gIHJldHVybiBpc0NvbXBsZXRlZCh2YWx1ZSkgPyB1bmNvbXBsZXRlKHZhbHVlKSA6IHZhbHVlO1xufVxuXG4vKipcbiAqIFJlZHVjZXMgdGhlIGVsZW1lbnRzIG9mIHRoZSBpbnB1dCBjb2xsZWN0aW9uIHRocm91Z2ggYSByZWR1Y2VyIGludG8gYW4gb3V0cHV0XG4gKiBjb2xsZWN0aW9uLlxuICpcbiAqIFRoaXMgaXMgdGhlIGxvd2VzdC1sZXZlbCBvZiB0aGUgdHJhbnNkdWN0aW9uIGZ1bmN0aW9ucy4gSW4gZmFjdCwgdGhpcyBvbmUgaXNcbiAqIHNvIGxvdy1sZXZlbCB0aGF0IGl0IGRvZXNuJ3QgaGF2ZSBhIGxvdCBvZiB1c2UgaW4gbm9ybWFsIG9wZXJhdGlvbi4gSXQncyBtb3JlXG4gKiB1c2VmdWwgZm9yIHdyaXRpbmcgeW91ciBvd24gdHJhbnNmb3JtYXRpb24gZnVuY3Rpb25zLlxuICpcbiAqIGByZWR1Y2VgIGRvZXNuJ3QgYXNzdW1lIHRoYXQgdGhlcmUncyBldmVuIGEgdHJhbnNmb3JtYXRpb24uIEl0IHJlcXVpcmVzIGFuXG4gKiBpbml0aWFsIGNvbGxlY3Rpb24gYW5kIGEgcmVkdWNlciBvYmplY3QgdGhhdCBpcyBtYXRjaGVkIHRvIHRoYXQgaW5pdGlhbFxuICogY29sbGVjdGlvbi4gVGhlIHJlZHVjZXIgb2JqZWN0IG11c3QgaW1wbGVtZW50IHRoZSBgc3RlcGAgYW5kIGByZXN1bHRgXG4gKiBwcm90b2NvbHMsIHdoaWNoIGluc3RydWN0IGByZWR1Y2VgIG9uIGhvdyB0byBidWlsZCB1cCB0aGUgY29sbGVjdGlvbi4gVGhlXG4gKiByZWR1Y2VyIG1heSBpbXBsZW1lbnQgYSB0cmFuc2Zvcm1hdGlvbiBhcyB3ZWxsLCBidXQgYWxsIHRoYXQncyBpbXBvcnRhbnQgaGVyZVxuICogaXMgdGhhdCBpdCBjYW4gZG8gdGhlIHJlZHVjdGlvbi5cbiAqXG4gKiBUaGUgaW5wdXQgY29sbGVjdGlvbiBuZWVkIG9ubHkgaW1wbGVtZW50IGBpdGVyYWJsZWAuIEl0IGlzIG5vdCBuZWNlc3NhcnkgZm9yXG4gKiB0aGUgaW5wdXQgYW5kIG91dHB1dCBjb2xsZWN0aW9ucyB0byBiZSBvZiB0aGUgc2FtZSB0eXBlOyBhcyBsb25nIGFzIHRoZSBpbnB1dFxuICogaW1wbGVtZW50cyBgaXRlcmFibGVgIGFuZCB0aGUgcmVkdWNlciBpbXBsZW1lbnRzIGBzdGVwYCBhbmQgYHJlc3VsdGBcbiAqIGFwcHJvcHJpYXRlIHRvIHRoZSB0eXBlIG9mIHRoZSBgaW5pdGAgY29sbGVjdGlvbiwgdGhlbiBhbnkgdHJhbnNsYXRpb25cbiAqIGJldHdlZW4gY29sbGVjdGlvbiB0eXBlcyBjYW4gb2NjdXIuXG4gKlxuICogVGhlIG5vcm1hbCBjb3Vyc2Ugb2Ygb3BlcmF0aW9uIHdpbGwgYmUgdG8gY2FsbFxuICoge0BsaW5rIG1vZHVsZTp4ZHVjZS50cmFuc2R1Y2V8dHJhbnNkdWNlfSBpbnN0ZWFkLCBhcyB0aGF0IGZ1bmN0aW9uIG1ha2VzIGl0XG4gKiBlYXN5IHRvIGNvbWJpbmUgdHJhbnNmb3JtYXRpb25zIHdpdGggcmVkdWN0aW9ucyBhbmQgY2FuIG9wdGlvbmFsbHkgZmlndXJlIG91dFxuICogdGhlIGluaXRpYWwgY29sbGVjdGlvbiBpdHNlbGYuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHBhcmFtIHsqfSBjb2xsZWN0aW9uIFRoZSBpbnB1dCBjb2xsZWN0aW9uLiBUaGUgb25seSByZXF1aXJlbWVudCBvZiB0aGlzXG4gKiAgICAgY29sbGVjdGlvbiBpcyB0aGF0IGl0IGltcGxlbWVudCB0aGUgYGl0ZXJhYmxlYCBwcm90b2NvbC4gU3BlY2lhbCBzdXBwb3J0XG4gKiAgICAgaXMgcHJvdmlkZWQgYnkgdGhlIGxpYnJhcnkgZm9yIG9iamVjdHMsIHNvIHRoZXkgY2FuIGJlIHVzZWQgYXMgd2VsbC5cbiAqIEBwYXJhbSB7bW9kdWxlOnhkdWNlLlJlZHVjZXJ9IHJlZHVjZXIgQW4gb2JqZWN0IHRoYXQgaW1wbGVtZW50cyB0aGUgYHN0ZXBgXG4gKiAgICAgYW5kIGByZXN1bHRgIHByb3RvY29scy4gVGhpcyBvYmplY3QgbXVzdCBrbm93IGhvdyB0byBwcm9kdWNlIGFuIG91dHB1dFxuICogICAgIGNvbGxlY3Rpb24gdGhyb3VnaCB0aG9zZSBwcm90b2NvbCBmdW5jdGlvbnMuXG4gKiBAcGFyYW0geyp9IGluaXQgYSBjb2xsZWN0aW9uIG9mIHRoZSBzYW1lIHR5cGUgYXMgdGhlIG91dHB1dCBjb2xsZWN0aW9uLiBJdFxuICogICAgIG5lZWQgbm90IGJlIGVtcHR5OyBpZiBpdCBpcyBub3QsIHRoZSBleGlzdGluZyBlbGVtZW50cyBhcmUgcmV0YWluZWQgYXNcbiAqICAgICB0aGUgaW5wdXQgY29sbGVjdGlvbiBpcyByZWR1Y2VkIGludG8gaXQuXG4gKiBAcmV0dXJuIHsqfSBBIG5ldyBjb2xsZWN0aW9uLCBjb25zaXN0aW5nIG9mIHRoZSBgaW5pdGAgY29sbGVjdGlvbiB3aXRoIGFsbCBvZlxuICogICAgIHRoZSBlbGVtZW50cyBvZiB0aGUgYGNvbGxlY3Rpb25gIGNvbGxlY3Rpb24gcmVkdWNlZCBpbnRvIGl0LlxuICovXG5mdW5jdGlvbiByZWR1Y2UoY29sbGVjdGlvbiwgcmVkdWNlciwgaW5pdCkge1xuICBpZiAoY29sbGVjdGlvbiA9PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCBpdGVyID0gaXRlcmF0b3IoY29sbGVjdGlvbik7XG4gIGlmICghaXRlcikge1xuICAgIHRocm93IEVycm9yKGBDYW5ub3QgcmVkdWNlIGFuIGluc3RhbmNlIG9mICR7Y29sbGVjdGlvbi5jb25zdHJ1Y3Rvci5uYW1lfWApO1xuICB9XG5cbiAgbGV0IGFjYyA9IGluaXQ7XG4gIGxldCBzdGVwID0gaXRlci5uZXh0KCk7XG5cbiAgd2hpbGUgKCFzdGVwLmRvbmUpIHtcbiAgICBhY2MgPSByZWR1Y2VyW3Auc3RlcF0oYWNjLCBzdGVwLnZhbHVlKTtcbiAgICBpZiAoaXNDb21wbGV0ZWQoYWNjKSkge1xuICAgICAgYWNjID0gdW5jb21wbGV0ZShhY2MpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHN0ZXAgPSBpdGVyLm5leHQoKTtcbiAgfVxuXG4gIHJldHVybiByZWR1Y2VyW3AucmVzdWx0XShhY2MpO1xufVxuXG5leHBvcnQge1xuICBpbml0LFxuICBzdGVwLFxuICByZXN1bHQsXG4gIHRvUmVkdWNlcixcbiAgQVJSQVlfUkVEVUNFUixcbiAgT0JKRUNUX1JFRFVDRVIsXG4gIFNUUklOR19SRURVQ0VSLFxuICB0b1RyYW5zZHVjZXIsXG4gIHRvRnVuY3Rpb24sXG4gIGNvbXBsZXRlLFxuICB1bmNvbXBsZXRlLFxuICBpc0NvbXBsZXRlZCxcbiAgZW5zdXJlQ29tcGxldGVkLFxuICBlbnN1cmVVbmNvbXBsZXRlZCxcbiAgcmVkdWNlXG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG5cbi8qKlxuICogRnVuY3Rpb25zIGRlYWxpbmcgd2l0aCB0aGUgYWN0dWFsIHRyYW5zZm9ybWF0aW9uIG9mIHZhbHVlcyBhbmQgZm9yIGNob29zaW5nXG4gKiB0aGUgcmVkdWNlciBkdXJpbmcgdHJhbnNkdWN0aW9uLlxuICpcbiAqIEBtb2R1bGUgeGR1Y2UvdHJhbnNmb3JtYXRpb25cbiAqIEBwcml2YXRlXG4gKi9cblxuaW1wb3J0IHsgcHJvdG9jb2xzIGFzIHAsIGlzSW1wbGVtZW50ZWQgfSBmcm9tIFwibW9kdWxlcy9wcm90b2NvbFwiO1xuaW1wb3J0IHsgaXRlcmF0b3IgfSBmcm9tIFwibW9kdWxlcy9pdGVyYXRpb25cIjtcbmltcG9ydCB7XG4gIGlzQ29tcGxldGVkLFxuICB0b1JlZHVjZXIsXG4gIHJlZHVjZSxcbiAgQVJSQVlfUkVEVUNFUixcbiAgT0JKRUNUX1JFRFVDRVIsXG4gIFNUUklOR19SRURVQ0VSXG59IGZyb20gXCJtb2R1bGVzL3JlZHVjdGlvblwiO1xuaW1wb3J0IHsgaXNGdW5jdGlvbiwgaXNBcnJheSwgaXNPYmplY3QsIGlzU3RyaW5nIH0gZnJvbSBcIm1vZHVsZXMvdXRpbHNcIjtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGl0ZXJhdG9yIHRoYXQgaXMgYWxzbyBhIHRyYW5zZHVjZXIsIHRyYW5zZm9ybWluZyBpdHMgY29sbGVjdGlvblxuICogb25lIGVsZW1lbnQgYXQgYSB0aW1lLiBUaGlzIGlzIHRoZSBhY3R1YWwgb3V0cHV0IG9mIHRoZVxuICoge0BsaW5rIG1vZHVsZTp4ZHVjZS5hc0l0ZXJhdG9yfGFzSXRlcmF0b3J9IGZ1bmN0aW9uLCBhcyB3ZWxsIGFzIHRoZSBvdXRwdXQgb2ZcbiAqIHRoZSB7QGxpbmsgbW9kdWxlOnhkdWNlLnNlcXVlbmNlfHNlcXVlbmNlfSBmdW5jdGlvbiB3aGVuIHRoZSBpbnB1dCBpcyBhblxuICogaXRlcmF0b3IuXG4gKlxuICogVGhlIGVuZCB1c2VyIG5lZWQgbm90IGJlIGNvbmNlcm5lZCB3aXRoIHRoZSB0eXBlIG9mIHRoZSBvdXRwdXQgaXRlcmF0b3IgaW5cbiAqIHRoZXNlIGNpcmN1bXN0YW5jZXM7IHRoZSBlbmQgdXNlciBuZWVkIG9ubHkgY2FyZSB0aGF0IHRoZSBvdXRwdXQgaXMsIGluIGZhY3QsXG4gKiBhbiBpdGVyYXRvciBhbmQgY2FuIGJlIGV4cGVjdGVkIHRvIGFjdCBsaWtlIG9uZS4gRm9yIHRoaXMgcmVhc29uLCB0aGlzXG4gKiBmdW5jdGlvbiBhbmQgdGhlIHR5cGUgaXQgcmV0dXJucyBhcmUgbm90IGV4cG9ydGVkLlxuICpcbiAqIFRoaXMgb2JqZWN0IHN1cHBvcnRzIG5vbi0xLXRvLTEgY29ycmVzcG9uZGVuY2VzIGJldHdlZW4gaW5wdXQgYW5kIG91dHB1dFxuICogdmFsdWVzLiBGb3IgZXhhbXBsZSwgYSBmaWx0ZXIgdHJhbnNmb3JtYXRpb24gbWlnaHQgcmV0dXJuIGZld2VyIG91dHB1dFxuICogZWxlbWVudHMgdGhhbiB3ZXJlIGluIHRoZSBpbnB1dCBjb2xsZWN0aW9uLCB3aGlsZSBhIHJlcGVhdCB0cmFuc2Zvcm1hdGlvblxuICogd2lsbCByZXR1cm4gbW9yZS4gSW4gZWl0aGVyIGNhc2UsIGBuZXh0YCBpbiB0aGlzIGNsYXNzIHdpbGwgcmV0dXJuIG9uZVxuICogZWxlbWVudCBwZXIgY2FsbC5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTp4ZHVjZS5JdGVyYWJsZX0gY29sbGVjdGlvbiB0aGUgaW5wdXQgY29sbGVjdGlvbiB0aGF0IHRoZVxuICogICAgIHByb2R1Y2VkIGl0ZXJhdG9yIHdpbGwgYmUgaXRlcmF0aW5nIG92ZXIuXG4gKiBAcGFyYW0ge21vZHVsZTp4ZHVjZS5UcmFuc2R1Y2VyRnVuY3Rpb259IHhmb3JtIEEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIGEgdHJhbnNkdWNlclxuICogICAgIG9iamVjdCB0aGF0IGRlZmluZXMgdGhlIHRyYW5zZm9ybWF0aW9uIGJlaW5nIGRvbmUgdG8gdGhlIGl0ZXJhdG9yJ3NcbiAqICAgICBlbGVtZW50cy4gQW55IG9mIHRoZSB0cmFuc2R1Y2VycyBpbiB0aGVcbiAqICAgICB7QGxpbmsgbW9kdWxlOnRyYW5zZHVjZXJzfHRyYW5zZHVjZXJzfSBtb2R1bGUgY2FuIHByb2R1Y2UgYSBzdWl0YWJsZVxuICogICAgIHRyYW5zZHVjZXIgZnVuY3Rpb24uXG4gKiBAcmV0dXJuIHttb2R1bGU6eGR1Y2UuSXRlcmF0b3J9IEFuIGl0ZXJhdG9yIHRoYXQgd2lsbCB0cmFuc2Zvcm0gaXRzIGlucHV0XG4gKiAgICAgZWxlbWVudHMgdXNpbmcgdGhlIHRyYW5zZHVjZXIgZnVuY3Rpb24gYXMgaXRzXG4gKiAgICAgYHtAbGluayBtb2R1bGU6eGR1Y2UuTmV4dEZ1bmN0aW9ufG5leHR9YCBmdW5jdGlvbiBpcyBjYWxsZWQuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiB0cmFuc2R1Y2luZ0l0ZXJhdG9yKGNvbGxlY3Rpb24sIHhmb3JtKSB7XG4gIGNvbnN0IHN0ZXBSZWR1Y2VyID0ge1xuICAgIFtwLnN0ZXBdKHhpdGVyLCBpbnB1dCkge1xuICAgICAgeGl0ZXIuaXRlbXMudW5zaGlmdChpbnB1dCk7XG4gICAgICByZXR1cm4geGl0ZXI7XG4gICAgfSxcbiAgICBbcC5yZXN1bHRdKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGl0ZXIgPSBpdGVyYXRvcihjb2xsZWN0aW9uKTtcbiAgY29uc3QgeGYgPSB4Zm9ybShzdGVwUmVkdWNlcik7XG4gIGxldCBjb21wbGV0ZWQgPSBmYWxzZTtcblxuICAvLyBUaGlzIGFycmF5IGlzIHRoZSBrZXkgdG8gd29ya2luZyBwcm9wZXJseSB3aXRoIHN0ZXAgZnVuY3Rpb25zIHRoYXQgcmV0dXJuXG4gIC8vIG1vcmUgdGhhbiBvbmUgdmFsdWUuIEFsbCBvZiB0aGVtIGFyZSBwdXQgaW50byB0aGUgaXRlbXMgYXJyYXkuIEFzIGxvbmcgYXNcbiAgLy8gdGhpcyBhcnJheSBoYXMgdmFsdWVzIGluIGl0LCB0aGUgYG5leHRgIGZ1bmN0aW9uIHdpbGwgcmV0dXJuIG9uZSB2YWx1ZVxuICAvLyBwb3BwZWQgZnJvbSBpdCByYXRoZXIgdGhhbiBydW5uaW5nIHRoZSBzdGVwIGZ1bmN0aW9uIGFnYWluLlxuICBjb25zdCBpdGVtcyA9IFtdO1xuXG4gIC8vIFRoZSBgbmV4dGAgZnVuY3Rpb24gaGVyZSBpcyByYXRoZXIgc2ltcGxlLiBJZiB0aGVyZSBpcyBhbHJlYWR5IHNvbWV0aGluZyBpblxuICAvLyB0aGUgYGl0ZW1zYCBhcnJheSwgaXQncyByZXR1cm5lZC4gSWYgbm90LCB0aGUgYHN0ZXBgIGZ1bmN0aW9uIGlzIHJ1biBhbmQsXG4gIC8vIGlmIHRoYXQgcmVzdWx0cyBpbiBhIHZhbHVlIGluIHRoZSBgaXRlbXNgIGFycmF5LCBpdCdzIHJldHVybmVkLiBPdGhlcndpc2VcbiAgLy8gYW4gb2JqZWN0IHdpdGggYHsgZG9uZTogdHJ1ZSB9YCBpcyByZXR1cm5lZC5cbiAgZnVuY3Rpb24gbmV4dCgpIHtcbiAgICBpZiAoaXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICBzdGVwKCk7XG4gICAgfVxuICAgIGlmIChpdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB7IGRvbmU6IHRydWUgfTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiBpdGVtcy5wb3AoKSxcbiAgICAgIGRvbmU6IGZhbHNlXG4gICAgfTtcbiAgfVxuXG4gIC8vIFRoaXMgaXMgd2hlcmUgbW9zdCBvZiB0aGUgd29yayBoYXBwZW5zLiBJdCBnZXRzIHRoZSBuZXh0IHZhbHVlIGZyb20gdGhlXG4gIC8vIGlucHV0IGNvbGxlY3Rpb24gYW5kIHJ1bnMgaXQgdGhyb3VnaCB0aGUgcmVkdWN0aW9uIHN0ZXAgZnVuY3Rpb25zLiBJZiB0aGF0XG4gIC8vIHJlc3VsdHMgaW4gYSB2YWx1ZSwgaXQncyBnaXZlbiB0byB0aGUgc3RlcHBlciBvYmplY3QgKHdoaWNoIGFkZHMgaXQgdG8gdGhlXG4gIC8vIGBpdGVtc2AgYXJyYXkpOyBvdGhlcndpc2UgdGhlIHdoaWxlIGxvb3AgY29udGludWVzIHRvIHRoZSBuZXh0IGVsZW1lbnQgb2ZcbiAgLy8gdGhlIGlucHV0IGNvbGxlY3Rpb24uIFRoaXMgZW5zdXJlcyB0aGF0IHRoZXJlJ3Mgc29tZXRoaW5nIGZvciB0aGUgYG5leHRgXG4gIC8vIGZ1bmN0aW9uIHRvIHJldHVybiBlYWNoIHRpbWUgaXQncyBjYWxsZWQuXG4gIC8vXG4gIC8vIElmIHRoZSBjb2xsZWN0aW9uIGhhcyBmaW5pc2hlZCBvciBpZiB0aGUgc3RlcCBmdW5jdGlvbiByZXR1cm5zIGEgY29tcGxldGVkXG4gIC8vIG9iamVjdCAod2hpY2ggdGFrZSB3aWxsIGRvIGFmdGVyIGl0cyBsaW1pdCBvZiBlbGVtZW50cyBoYXMgYmVlbiByZWFjaGVkLFxuICAvLyBmb3IgaW5zdGFuY2UpLCB0aGUgaXRlcmF0aW9uIGlzIGZpbmlzaGVkIGJ5IGNhbGxpbmcgdGhlIHJlc3VsdCBmdW5jdGlvbi5cbiAgZnVuY3Rpb24gc3RlcCgpIHtcbiAgICBjb25zdCBjb3VudCA9IGl0ZW1zLmxlbmd0aDtcbiAgICB3aGlsZSAoaXRlbXMubGVuZ3RoID09PSBjb3VudCkge1xuICAgICAgY29uc3Qgc3RlcFZhbHVlID0gaXRlci5uZXh0KCk7XG4gICAgICBpZiAoc3RlcFZhbHVlLmRvbmUgfHwgY29tcGxldGVkKSB7XG4gICAgICAgIHhmW3AucmVzdWx0XShyZXN1bHQpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNvbXBsZXRlZCA9IGlzQ29tcGxldGVkKHhmW3Auc3RlcF0ocmVzdWx0LCBzdGVwVmFsdWUudmFsdWUpKTtcbiAgICB9XG4gIH1cblxuICAvLyBUaGUgcmVzdWx0aW5nIG9iamVjdCBpcyBhbiBpdGVyYXRvciwgc28gdG8gc2F0aXNmeSB0aGUgaXRlcmFibGUgcHJvdG9jb2xcbiAgLy8gd2UganVzdCByZXR1cm4gdGhhdCBvYmplY3QgaXRzZWxmXG4gIGZ1bmN0aW9uIHNJdGVyYXRvcigpIHtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLy8gVGhlIGByZXN1bHRgIG5hbWUgaXMgaG9pc3RlZCBhbmQgdXNlZCBpbiBmdW5jdGlvbnMgZnVydGhlciB1cCwgc28gd2UgaGF2ZVxuICAvLyB0byByZXRhaW4gdGhhdCBuYW1lIGFuZCBjYW4ndCBqdXN0IHJldHVybiB0aGUgb2JqZWN0IHdpdGhvdXQgbmFtaW5nIGl0XG4gIGNvbnN0IHJlc3VsdCA9IHsgaXRlbXMsIG5leHQsIHN0ZXAsIFtTeW1ib2wuaXRlcmF0b3JdOiBzSXRlcmF0b3IgfTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBUcmFuc2Zvcm1zIHRoZSBlbGVtZW50cyBvZiB0aGUgaW5wdXQgY29sbGVjdGlvbiBhbmQgcmVkdWNlcyB0aGVtIGludG8gYW5cbiAqIG91dHB1dCBjb2xsZWN0aW9uLlxuICpcbiAqIFRoaXMgaXMgdGhlIGxvd2VzdC1sZXZlbCBvZiB0aGUgdHJhbnNkdWN0aW9uIGZ1bmN0aW9ucyB0aGF0IGlzIGxpa2VseSB0byBzZWVcbiAqIHJlZ3VsYXIgdXNlLiBJdCBkb2VzIG5vdCBhc3N1bWUgYW55dGhpbmcgYWJvdXQgdGhlIHJlZHVjZXIsIGFzIGl0IGFza3MgZm9yIGl0XG4gKiB0byBiZSBwYXNzZWQgZXhwbGljaXRseS4gVGhpcyBtZWFucyB0aGF0IGFueSBraW5kIG9mIGNvbGxlY3Rpb24gY2FuIGJlXG4gKiBwcm9kdWNlZCwgc2luY2UgdGhlIHJlZHVjZXIgaXMgbm90IHRpZWQgdG8gdGhlIGlucHV0IGNvbGxlY3Rpb24gaW4gYW55IHdheS5cbiAqXG4gKiBgdHJhbnNkdWNlYCBhbHNvIHdpbGwgYWNjZXB0IGFuIGluaXRpYWwgdmFsdWUgZm9yIHRoZSByZXN1bHRpbmcgY29sbGVjdGlvbiBhc1xuICogdGhlIG9wdGlvbmFsIGxhc3QgcGFyYW1ldGVyLiBJZiB0aGlzIHBhcmFtZXRlciBpc24ndCBwcmVzZW50LCB0aGVuIHRoZVxuICogaW5pdGlhbCB2YWx1ZSBpcyBkZXRlcm1pbmVkIGZyb20gdGhlIHRyYW5zZHVjZXIgaW5pdCBwcm90b2NvbCBwcm9wZXJ0eSBvbiB0aGVcbiAqIHJlZHVjZXIuIE5vdGUgaG93ZXZlciB0aGF0IG1hbnkgcmVkdWNlcnMgbWF5IG5vdCBwcm92aWRlIGFuIGluaXRpYWwgdmFsdWUsXG4gKiBhbmQgaW4gdGhvc2UgY2FzZXMgaXQgd2lsbCAqaGF2ZSogdG8gYmUgcGFzc2VkIGFzIGEgcGFyYW1ldGVyLlxuICpcbiAqIGBgYFxuICogaW1wb3J0IHsgcHJvdG9jb2xzIGFzIHAsIHRyYW5zZHVjZSB9IGZyb20gXCJAY2hhbmtvL3hkdWNlXCI7XG4gKiBpbXBvcnQgeyBtYXAgfSBmcm9tIFwiQGNoYW5rby90cmFuc2R1Y2Vyc1wiO1xuICpcbiAqIGNvbnN0IHhmb3JtID0gbWFwKHggPT4geCArIDEpO1xuICpcbiAqIGNvbnN0IGFycmF5UmVkdWNlciA9IHtcbiAqICAgW3AuaW5pdF0oKSB7IHJldHVybiBbXTsgfSxcbiAqICAgW3AucmVzdWx0XSh4KSB7IHJldHVybiB4OyB9LFxuICogICBbcC5zdGVwXShhY2MsIHgpIHtcbiAqICAgICBhY2MucHVzaCh4KTtcbiAqICAgICByZXR1cm4gYWNjO1xuICogICB9XG4gKiB9O1xuICpcbiAqIGNvbnN0IHN0cmluZ1JlZHVjZXIgPSB7XG4gKiAgIFtwLmluaXRdKCkgeyByZXR1cm4gJyc7IH0sXG4gKiAgIFtwLnJlc3VsdF0oeCkgeyByZXR1cm4geDsgfSxcbiAqICAgW3Auc3RlcF0oYWNjLCB4KSB7IHJldHVybiBhY2MgKyB4OyB9XG4gKiB9O1xuICpcbiAqIGxldCByZXN1bHQgPSB0cmFuc2R1Y2UoWzEsIDIsIDMsIDQsIDVdLCB4Zm9ybSwgYXJyYXlSZWR1Y2VyKTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdCk7ICAgLy8gLT4gWzIsIDMsIDQsIDUsIDZdXG4gKlxuICogcmVzdWx0ID0gdHJhbnNkdWNlKFsxLCAyLCAzLCA0LCA1XSwgeGZvcm0sIHN0cmluZ1JlZHVjZXIpO1xuICogY29uc29sZS5sb2cocmVzdWx0KTsgICAvLyAtPiBcIjIzNDU2XCJcbiAqXG4gKiByZXN1bHQgPSB0cmFuc2R1Y2UoJzEyMzQ1JywgeGZvcm0sIGFycmF5UmVkdWNlcik7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQpOyAgIC8vIC0+IFsyLCAzLCA0LCA1LCA2XVxuICpcbiAqIHJlc3VsdCA9IHRyYW5zZHVjZSgnMTIzNDUnLCB4Zm9ybSwgc3RyaW5nUmVkdWNlcik7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQpOyAgIC8vIC0+IFwiMjM0NTZcIlxuICogYGBgXG4gKlxuICogVGhlc2UgZXhhbXBsZXMgaWxsdXN0cmF0ZSBhIG51bWJlciBvZiBpbXBvcnRhbnQgY29uY2VwdHMuIEZpcnN0IG9mIGFsbCwgdGhlXG4gKiB0cmFuc2R1Y2VyIGZ1bmN0aW9uIGlzIGluZGVwZW5kZW50IG9mIHRoZSB0eXBlIG9mIHRoZSBjb2xsZWN0aW9uOyB0aGUgc2FtZVxuICogdHJhbnNkdWNlciBmdW5jdGlvbiBpcyB1c2VkIG5vIG1hdHRlciB0aGUgdHlwZSBvZiBpbnB1dCBvciBvdXRwdXRcbiAqIGNvbGxlY3Rpb25zLiBTZWNvbmRseSwgdHdvIHJlZHVjZXJzIGFyZSBkZWZpbmVkLiBUaGVzZSBhcmUgb2JqZWN0cyB0aGF0XG4gKiBjb25mb3JtIHRvIHRoZSB0cmFuc2R1Y2VyIHByb3RvY29sIChzZWUgdGhlIGRvY3VtZW50YXRpb24gb25cbiAqIGB7QGxpbmsgbW9kdWxlOnhkdWNlLnByb3RvY29sc31gKSBhbmQgdGhhdCBrbm93IGhvdyB0byBwcm9kdWNlIHRoZSBvdXRwdXRcbiAqIGNvbGxlY3Rpb24gb2YgY2hvaWNlLiBJbiB0aGlzIGNhc2UsIHRoZSByZWR1Y2VycyBrbm93IGhvdyB0byBjcmVhdGUgbmV3XG4gKiBhcnJheXMgYW5kIHN0cmluZ3MgKHRoZSBgaW5pdGAgcHJvdG9jb2wpIGFuZCBob3cgdG8gYWRkIGVsZW1lbnRzIHRvIGFycmF5c1xuICogYW5kIHN0cmluZ3MgKHRoZSBgc3RlcGAgcHJvdG9jb2wpLiBCZWNhdXNlIHRoZXNlIHJlZHVjZXJzIGRvIGhhdmUgYGluaXRgXG4gKiBwcm90b2NvbCBwcm9wZXJ0aWVzLCB0aGUgYHRyYW5zZHVjZWAgY2FsbHMgZG8gbm90IHJlcXVpcmUgZXhwbGljaXQgaW5pdGlhbFxuICogY29sbGVjdGlvbnMuXG4gKlxuICogVGhlIGZpbmFsIHBvaW50IGlzIHRoYXQgYHRyYW5zZHVjZWAgY2FuIGFjY2VwdCBhbnkga2luZCBvZiBpdGVyYWJsZVxuICogY29sbGVjdGlvbiwgYW5kIGJ5IHBhc3NpbmcgaW4gdGhlIHByb3BlciByZWR1Y2VyLCBpdCBjYW4gcHJvZHVjZSBhbnkga2luZCBvZlxuICogb3V0cHV0IGNvbGxlY3Rpb24uIFRoZSBzYW1lIGB0cmFuc2R1Y2VgIGZ1bmN0aW9uIGFuZCB0aGUgc2FtZSBtYXAgdHJhbnNmb3JtZXJcbiAqIGlzIHVzZWQgaW4gYWxsIGZvdXIgZXhhbXBsZXMsIGRlc3BpdGUgdGhlIGlucHV0L291dHB1dCBjb21iaW5hdGlvbiBiZWluZ1xuICogZGlmZmVyZW50IGluIGFsbCBmb3VyLlxuICpcbiAqIFRoZSBgcmVkdWNlcmAgcGFyYW1ldGVyICpjYW4qIGJlIGEgcmVkdWNlciBmdW5jdGlvbiBpbnN0ZWFkIG9mIGEgcmVkdWNlclxuICogb2JqZWN0LiBJZiB0aGlzIGlzIHRoZSBjYXNlLCB0aGUgYGluaXRgIHBhcmFtZXRlciBpcyByZXF1aXJlZCBiZWNhdXNlIGFcbiAqIGZ1bmN0aW9uIGNhbm5vdCBkZWZpbmUgYW4gaW5pdGlhbCB2YWx1ZSBpdHNlbGYuXG4gKlxuICogVGhlIGBpbml0YCBjb2xsZWN0aW9uIGRvZXNuJ3QgaGF2ZSB0byBiZSBlbXB0eS4gSWYgaXQgaXNuJ3QsIHRoZSBlbGVtZW50c1xuICogdGhhdCBhcmUgYWxyZWFkeSBpbiBpdCBhcmUgcmV0YWluZWQgYW5kIHRoZSB0cmFuc2Zvcm1lZCBpbnB1dCBlbGVtZW50cyBhcmVcbiAqIHJlZHVjZWQgaW50byB0aGUgY29sbGVjdGlvbiBub3JtYWxseS5cbiAqXG4gKiBPZiBjb3Vyc2UsIHRoZSBleGFtcGxlcyBhcmUgbm90IHJlYWxseSBuZWNlc3NhcnkgLSB0aGUgc2FtZSB0aGluZyBjb3VsZCBiZVxuICogYWNjb21wbGlzaGVkIHVzaW5nIGB7QGxpbmsgbW9kdWxlOnhkdWNlLmludG98aW50b31gIHdpdGhvdXQgaGF2aW5nIHRvIGNyZWF0ZVxuICogdGhlIHJlZHVjZXJzIChzdHJpbmdzIGFuZCBhcnJheXMgcGFzc2VkIHRvIGB7QGxpbmsgbW9kdWxlOnhkdWNlLmludG98aW50b31gXG4gKiBhcyB0YXJnZXRzIGtub3cgaG93IHRvIHJlZHVjZSB0aGVtc2VsdmVzIGFscmVhZHkpLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwYXJhbSB7bW9kdWxlOnhkdWNlLkl0ZXJhYmxlfSBjb2xsZWN0aW9uIFRoZSBpbnB1dCBjb2xsZWN0aW9uLiBUaGUgb25seVxuICogICAgIHJlcXVpcmVtZW50IG9mIHRoaXMgY29sbGVjdGlvbiBpcyB0aGF0IGl0IGltcGxlbWVudCB0aGUgYGl0ZXJhYmxlYFxuICogICAgIHByb3RvY29sLiBTcGVjaWFsIHN1cHBvcnQgaXMgcHJvdmlkZWQgYnkgdGhlIGxpYnJhcnkgZm9yIG9iamVjdHMsIHNvIHRoZXlcbiAqICAgICBjYW4gYWxzbyBiZSB1c2VkLlxuICogQHBhcmFtIHttb2R1bGU6eGR1Y2UuVHJhbnNkdWNlckZ1bmN0aW9ufSBbeGZvcm1dIEEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIGEgdHJhbnNkdWNlclxuICogICAgIG9iamVjdCB0aGF0IGRlZmluZXMgdGhlIHRyYW5zZm9ybWF0aW9uIGJlaW5nIGRvbmUgdG8gdGhlIGlucHV0XG4gKiAgICAgY29sbGVjdGlvbidzIGVsZW1lbnRzLiBBbnkgb2YgdGhlIHRyYW5zZHVjZXJzIGluIHRoZVxuICogICAgIHtAbGluayBtb2R1bGU6dHJhbnNkdWNlcnN8dHJhbnNkdWNlcnN9IG1vZHVsZSBjYW4gcHJvZHVjZSBhIHN1aXRhYmxlXG4gKiAgICAgdHJhbnNkdWNlciBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7KG1vZHVsZTp4ZHVjZS5TdGVwRnVuY3Rpb258bW9kdWxlOnhkdWNlLlJlZHVjZXIpfSByZWR1Y2VyIEVpdGhlciBhXG4gKiAgICAgZnVuY3Rpb24gb3IgYSByZWR1Y2VyIG9iamVjdCB0aGF0IGltcGxlbWVudHMgdGhlIHRyYW5zZHVjZXIgcHJvdG9jb2xzXG4gKiAgICAgKGBpbml0YCBpcyAgb25seSByZXF1aXJlZCBpZiB0aGUgYGluaXRgIHBhcmFtZXRlciBpcyBub3QgcHJlc2VudCkuIFRoaXNcbiAqICAgICBvYmplY3QgbXVzdCBrbm93IGhvdyB0byBwcm9kdWNlIGFuIG91dHB1dCBjb2xsZWN0aW9uIHRocm91Z2ggaXRzIGBzdGVwYFxuICogICAgIGFuZCBgcmVzdWx0YCBwcm90b2NvbCBmdW5jdGlvbnMuIElmIHRoaXMgcGFyYW1ldGVyIGlzIGEgZnVuY3Rpb24sIHRoZW4gaXRcbiAqICAgICBpcyB0dXJuZWQgaW50byBhIHZhbGlkIHJlZHVjZXIgb2JqZWN0LlxuICogQHBhcmFtIHttb2R1bGU6eGR1Y2UuUmVkdWNpYmxlfSBbaW5pdF0gQSBjb2xsZWN0aW9uIG9mIHRoZSBzYW1lIHR5cGUgYXMgdGhlXG4gKiAgICAgb3V0cHV0IGNvbGxlY3Rpb24uIElmIHRoaXMgaXMgbm90IHByZXNlbnQsIHRoZW4gdGhlIHJlZHVjZXIncyBgaW5pdGBcbiAqICAgICBwcm90b2NvbCBmdW5jdGlvbiBpcyBjYWxsZWQgaW5zdGVhZCB0byBnZXQgdGhlIGluaXRpYWwgY29sbGVjdGlvbi4gSWYgaXRcbiAqICAgICBpcyBwcmVzZW50IGFuZCBub3QgZW1wdHksIHRoZW4gdGhlIGV4aXN0aW5nIGVsZW1lbnRzIHJlbWFpbiBhbmQgdGhlXG4gKiAgICAgdHJhbnNmb3JtZWQgaW5wdXQgY29sbGVjdGlvbiBlbGVtZW50cyBhcmUgYWRkZWQgdG8gaXQuXG4gKiBAcmV0dXJuIHsqfSBBIGNvbGxlY3Rpb24gb2YgYSB0eXBlIGRldGVybWluZWQgYnkgdGhlIHBhc3NlZCByZWR1Y2VyLiBUaGVcbiAqICAgICBlbGVtZW50cyBvZiB0aGlzIGNvbGxlY3Rpb24gYXJlIHRoZSByZXN1bHRzIGZyb20gdGhlIHRyYW5zZm9ybWVyIGZ1bmN0aW9uXG4gKiAgICAgYmVpbmcgYXBwbGllZCB0byBlYWNoIGVsZW1lbnQgb2YgdGhlIGlucHV0IGNvbGxlY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIHRyYW5zZHVjZShjb2xsZWN0aW9uLCB4Zm9ybSwgcmVkdWNlciwgaW5pdCkge1xuICBjb25zdCByID0gaXNGdW5jdGlvbihyZWR1Y2VyKSA/IHRvUmVkdWNlcihyZWR1Y2VyKSA6IHJlZHVjZXI7XG4gIGNvbnN0IGkgPSBpbml0ID8/IHJbcC5pbml0XSgpO1xuICBjb25zdCB4ZiA9IHhmb3JtID8geGZvcm0ocikgOiByO1xuICByZXR1cm4gcmVkdWNlKGNvbGxlY3Rpb24sIHhmLCBpKTtcbn1cblxuLyoqXG4gKiBUcmFuc2Zvcm1zIHRoZSBlbGVtZW50cyBvZiB0aGUgaW5wdXQgY29sbGVjdGlvbiBhbmQgcmVkdWNlcyB0aGVtIGludG8gYSBuZXdcbiAqIGFycmF5LlxuICpcbiAqIFRoZSB0cmFuc2Zvcm1lciBpcyBvcHRpb25hbC4gSWYgaXQgaXNuJ3QgcHJlc2VudCwgdGhpcyBmdW5jdGlvbiBqdXN0IGNvbnZlcnRzXG4gKiB0aGUgaW5wdXQgY29sbGVjdGlvbiBpbnRvIGFuIGFycmF5LlxuICpcbiAqIGBgYFxuICogaW1wb3J0IHsgYXNBcnJheSB9IGZyb20gXCJAY2hhbmtvL3hkdWNlXCI7XG4gKiBpbXBvcnQgeyBtYXAgfSBmcm9tIFwiQGNoYW5rby90cmFuc2R1Y2Vyc1wiO1xuICpcbiAqIGNvbnN0IHhmb3JtID0gbWFwKHggPT4geCArIDEpO1xuICpcbiAqIGxldCByZXN1bHQgPSBhc0FycmF5KFsxLCAyLCAzLCA0LCA1XSwgeGZvcm0pO1xuICogY29uc29sZS5sb2cocmVzdWx0KTsgICAvLyAtPiBbMiwgMywgNCwgNSwgNl1cbiAqXG4gKiByZXN1bHQgPSBhc0FycmF5KCcxMjM0NScsIHhmb3JtKTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdCk7ICAgLy8gLT4gWzIsIDMsIDQsIDUsIDZdXG4gKlxuICogcmVzdWx0ID0gYXNBcnJheSgnMTIzNDUnKTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdCk7ICAgLy8gLT4gWzEsIDIsIDMsIDQsIDVdXG4gKlxuICogcmVzdWx0ID0gYXNBcnJheSh7YTogMSwgYjogMn0pO1xuICogY29uc29sZS5sb2cocmVzdWx0KTsgICAvLyAtPiBbeyBhOiAxIH0sIHsgYjogMiB9XVxuICogYGBgXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHBhcmFtIHttb2R1bGU6eGR1Y2UuSXRlcmFibGV9IGNvbGxlY3Rpb24gVGhlIGlucHV0IGNvbGxlY3Rpb24uIFRoZSBvbmx5XG4gKiAgICAgcmVxdWlyZW1lbnQgb2YgdGhpcyBjb2xsZWN0aW9uIGlzIHRoYXQgaXQgaW1wbGVtZW50IHRoZSBgaXRlcmFibGVgXG4gKiAgICAgcHJvdG9jb2wuIFNwZWNpYWwgc3VwcG9ydCBpcyBwcm92aWRlZCBieSB0aGUgbGlicmFyeSBmb3Igb2JqZWN0cywgc28gdGhleVxuICogICAgIGNhbiBhbHNvIGJlIHVzZWQuXG4gKiBAcGFyYW0ge21vZHVsZTp4ZHVjZS5UcmFuc2R1Y2VyRnVuY3Rpb259IFt4Zm9ybV0gQSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgYSB0cmFuc2R1Y2VyXG4gKiAgICAgb2JqZWN0IHRoYXQgZGVmaW5lcyB0aGUgdHJhbnNmb3JtYXRpb24gYmVpbmcgZG9uZSB0byB0aGUgaW5wdXRcbiAqICAgICBjb2xsZWN0aW9uJ3MgZWxlbWVudHMuIEFueSBvZiB0aGUgdHJhbnNkdWNlcnMgaW4gdGhlXG4gKiAgICAge0BsaW5rIG1vZHVsZTp0cmFuc2R1Y2Vyc3x0cmFuc2R1Y2Vyc30gbW9kdWxlIGNhbiBwcm9kdWNlIGEgc3VpdGFibGVcbiAqICAgICB0cmFuc2R1Y2VyIGZ1bmN0aW9uLiBJZiB0aGlzIGlzbid0IHByZXNlbnQsIHRoZSBpbnB1dCBjb2xsZWN0aW9uIHdpbGxcbiAqICAgICBzaW1wbHkgYmUgcmVkdWNlZCBpbnRvIGFuIGFycmF5IHdpdGhvdXQgdHJhbnNmb3JtYXRpb24uXG4gKiBAcmV0dXJuIHtBcnJheX0gQW4gYXJyYXkgY29udGFpbmluZyBhbGwgb2YgdGhlIHRyYW5zZm9ybWVkIHZhbHVlcyBmcm9tIHRoZVxuICogICAgIGlucHV0IGNvbGxlY3Rpb24gZWxlbWVudHMuXG4gKi9cbmZ1bmN0aW9uIGFzQXJyYXkoY29sbGVjdGlvbiwgeGZvcm0pIHtcbiAgcmV0dXJuIHRyYW5zZHVjZShjb2xsZWN0aW9uLCB4Zm9ybSwgQVJSQVlfUkVEVUNFUik7XG59XG5cbi8qKlxuICogVHJhbnNmb3JtcyB0aGUgZWxlbWVudHMgb2YgdGhlIGlucHV0IGNvbGxlY3Rpb24gYW5kIHJlZHVjZXMgdGhlbSBpbnRvIGEgbmV3XG4gKiBvYmplY3QuXG4gKlxuICogVGhlIHRyYW5zZm9ybWVyIGlzIG9wdGlvbmFsLiBJZiBpdCBpc24ndCBwcmVzZW50LCB0aGlzIGZ1bmN0aW9uIGp1c3QgY29udmVydHNcbiAqIHRoZSBpbnB1dCBjb2xsZWN0aW9uIGludG8gYW4gb2JqZWN0LiBXaGVuIHRoaXMgaGFwcGVucywgaWYgdGhlIGlucHV0XG4gKiBjb2xsZWN0aW9uIGlzIG5vdCBhbiBvYmplY3Qgb3IgYW4gYXJyYXkgb2Ygb2JqZWN0cywgbnVtYmVycyBzdGFydGluZyBhdCBgMGBcbiAqIHdpbGwgYmUgdXNlZCBhcyBrZXlzIGZvciB0aGUgdmFsdWVzIHByb3ZpZGVkIGJ5IHRoZSBpbnB1dCBjb2xsZWN0aW9uLlxuICpcbiAqIGBgYFxuICogaW1wb3J0IHsgYXNPYmplY3QsIGt2IH0gZnJvbSBcIkBjaGFua28veGR1Y2VcIjtcbiAqIGltcG9ydCB7IG1hcCB9IGZyb20gXCJAY2hhbmtvL3RyYW5zZHVjZXJzXCI7XG4gKlxuICogY29uc3QgZm4gPSBwcm9wID0+IHtcbiAqICAgY29uc3QgeyBrLCB2IH0gPSBrdihwcm9wKTtcbiAqICAgcmV0dXJuIHsgW2tdOiB2ICsgMSB9O1xuICogfVxuICogY29uc3QgeGZvcm0gPSBtYXAoZm4pO1xuICpcbiAqIGxldCByZXN1bHQgPSBhc09iamVjdCh7IGE6IDEsIGI6IDIgfSwgeGZvcm0pO1xuICogY29uc29sZS5sb2cocmVzdWx0KTsgICAvLyAtPiB7IGE6IDIsIGI6IDMgfVxuICpcbiAqIHJlc3VsdCA9IGFzT2JqZWN0KFt7IGE6IDEgfSwgeyBiOiAyIH1dLCB4Zm9ybSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQpOyAgIC8vIC0+IHsgYTogMiwgYjogMyB9XG4gKlxuICogcmVzdWx0ID0gYXNPYmplY3QoWzEsIDIsIDMsIDQsIDVdKTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdCk7ICAgLy8gLT4geyAwOiAxLCAxOiAyLCAyOiAzLCAzOiA0LCA0OiA1IH1cbiAqXG4gKiByZXN1bHQgPSBhc09iamVjdChbeyBhOiAxIH0sIHsgYjogMiB9XSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQpOyAgIC8vIC0+IHsgYTogMSwgYjogMiB9XG4gKlxuICogcmVzdWx0ID0gYXNPYmplY3QoXCJoZWxsb1wiKTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdCk7ICAgLy8gLT4geyAwOiBcImhcIiwgMTogXCJlXCIsIDI6IFwibFwiLCAzOiBcImxcIiwgNDogXCJvXCIgfVxuICogYGBgXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHBhcmFtIHttb2R1bGU6eGR1Y2UuSXRlcmFibGV9IGNvbGxlY3Rpb24gVGhlIGlucHV0IGNvbGxlY3Rpb24uIFRoZSBvbmx5XG4gKiAgICAgcmVxdWlyZW1lbnQgb2YgdGhpcyBjb2xsZWN0aW9uIGlzIHRoYXQgaXQgaW1wbGVtZW50IHRoZSBgaXRlcmFibGVgXG4gKiAgICAgcHJvdG9jb2wuIFNwZWNpYWwgc3VwcG9ydCBpcyBwcm92aWRlZCBieSB0aGUgbGlicmFyeSBmb3Igb2JqZWN0cywgc28gdGhleVxuICogICAgIGNhbiBhbHNvIGJlIHVzZWQuXG4gKiBAcGFyYW0ge21vZHVsZTp4ZHVjZS5UcmFuZHVjZXJ9IFt4Zm9ybV0gQSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgYSB0cmFuc2R1Y2VyXG4gKiAgICAgb2JqZWN0IHRoYXQgZGVmaW5lcyB0aGUgdHJhbnNmb3JtYXRpb24gYmVpbmcgZG9uZSB0byB0aGUgaW5wdXRcbiAqICAgICBjb2xsZWN0aW9uJ3MgZWxlbWVudHMuIEFueSBvZiB0aGUgdHJhbnNkdWNlcnMgaW4gdGhlXG4gKiAgICAge0BsaW5rIG1vZHVsZTp0cmFuc2R1Y2Vyc3x0cmFuc2R1Y2Vyc30gbW9kdWxlIGNhbiBwcm9kdWNlIGEgc3VpdGFibGVcbiAqICAgICB0cmFuc2R1Y2VyIGZ1bmN0aW9uLiBJZiB0aGlzIGlzbid0IHByZXNlbnQsIHRoZSBpbnB1dCBjb2xsZWN0aW9uIHdpbGxcbiAqICAgICBzaW1wbHkgYmUgcmVkdWNlZCBpbnRvIGFuIG9iamVjdCB3aXRob3V0IHRyYW5zZm9ybWF0aW9uLlxuICogQHJldHVybiB7T2JqZWN0fSBBbiBvYmplY3QgY29udGFpbmluZyBhbGwgb2YgdGhlIHRyYW5zZm9ybWVkIHZhbHVlcyBmcm9tIHRoZVxuICogICAgIGlucHV0IGNvbGxlY3Rpb24gZWxlbWVudHMuXG4gKi9cbmZ1bmN0aW9uIGFzT2JqZWN0KGNvbGxlY3Rpb24sIHhmb3JtKSB7XG4gIHJldHVybiB0cmFuc2R1Y2UoY29sbGVjdGlvbiwgeGZvcm0sIE9CSkVDVF9SRURVQ0VSKTtcbn1cblxuLyoqXG4gKiBUcmFuc2Zvcm1zIHRoZSBlbGVtZW50cyBvZiB0aGUgaW5wdXQgY29sbGVjdGlvbiBhbmQgcmVkdWNlcyB0aGVtIGludG8gYSBuZXdcbiAqIHN0cmluZy5cbiAqXG4gKiBUaGUgdHJhbnNmb3JtZXIgaXMgb3B0aW9uYWwuIElmIGl0IGlzbid0IHByZXNlbnQsIHRoaXMgZnVuY3Rpb24ganVzdCBjb252ZXJ0c1xuICogdGhlIGlucHV0IGNvbGxlY3Rpb24gaW50byBhbiBzdHJpbmcuIElmIHRoaXMgaXMgdGhlIGNhc2UgYW5kIHRoZSBpbnB1dFxuICogY29sbGVjdGlvbiBpcyBhbiBvYmplY3QsIG9ubHkgdGhlIHZhbHVlcyB3aWxsIGJlIGNvbmNhdGVuYXRlZCBpbnRvIGEgc3RyaW5nLlxuICpcbiAqIE90aGVyd2lzZSwgdHJhbnNmb3JtaW5nIG9iamVjdHMgaW50byBzdHJpbmdzIG9ubHkgbWFrZXMgbXVjaCBzZW5zZSBpZiB0aGVcbiAqIHRyYW5zZHVjZXIgcHJvZHVjZXMgb25seSBhIHNpbmdsZSBvdXRwdXQgZnJvbSBlYWNoIG9mIHRoZSBvYmplY3RzIGtleS92YWx1ZVxuICogcGFpcnMuXG4gKlxuICogYGBgXG4gKiBpbXBvcnQgeyB0cmFuc2R1Y2UsIGtleSB9IGZyb20gXCJAY2hhbmtvL3hkdWNlXCI7XG4gKiBpbXBvcnQgeyBtYXAgfSBmcm9tIFwiQGNoYW5rby90cmFuc2R1Y2Vyc1wiO1xuICpcbiAqIGNvbnN0IHhmb3JtID0gbWFwKHggPT4geC50b1VwcGVyQ2FzZSgpKTtcbiAqXG4gKiBsZXQgcmVzdWx0ID0gYXNTdHJpbmcoJ2hlbGxvJywgeGZvcm0pO1xuICogY29uc29sZS5sb2cocmVzdWx0KTsgICAvLyAtPiBcIkhFTExPXCJcbiAqXG4gKiByZXN1bHQgPSBhc1N0cmluZyhbJ2gnLCAnZScsICdsJywgJ2wnLCAnbyddLCB4Zm9ybSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQpOyAgIC8vIC0+IFwiSEVMTE9cIlxuICpcbiAqIHJlc3VsdCA9IGFzU3RyaW5nKHsgYTogMSwgYzogMiwgYjogMyB9LCBtYXAoa2V5KSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQpOyAgIC8vIC0+IFwiYWNiXCJcbiAqXG4gKiByZXN1bHQgPSBhc1N0cmluZyhbMSwgMiwgMywgNCwgNV0pO1xuICogY29uc29sZS5sb2cocmVzdWx0KTsgICAvLyAtPiBcIjEyMzQ1XCJcbiAqXG4gKiByZXN1bHQgPSBhc1N0cmluZyh7IGE6IDEsIGM6IDIsIGI6IDMgfSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQpOyAgIC8vIC0+IFwiMTIzXCJcbiAqIGBgYFxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwYXJhbSB7bW9kdWxlOnhkdWNlLkl0ZXJhYmxlfSBjb2xsZWN0aW9uIFRoZSBpbnB1dCBjb2xsZWN0aW9uLiBUaGUgb25seVxuICogICAgIHJlcXVpcmVtZW50IG9mIHRoaXMgY29sbGVjdGlvbiBpcyB0aGF0IGl0IGltcGxlbWVudCB0aGUgYGl0ZXJhYmxlYFxuICogICAgIHByb3RvY29sLiBTcGVjaWFsIHN1cHBvcnQgaXMgcHJvdmlkZWQgYnkgdGhlIGxpYnJhcnkgZm9yIG9iamVjdHMsIHNvIHRoZXlcbiAqICAgICBjYW4gYWxzbyBiZSB1c2VkLlxuICogQHBhcmFtIHttb2R1bGU6eGR1Y2UuVHJhbnNkdWNlckZ1bmN0aW9ufSBbeGZvcm1dIEEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIGEgdHJhbnNkdWNlclxuICogICAgIG9iamVjdCB0aGF0IGRlZmluZXMgdGhlIHRyYW5zZm9ybWF0aW9uIGJlaW5nIGRvbmUgdG8gdGhlIGlucHV0XG4gKiAgICAgY29sbGVjdGlvbidzIGVsZW1lbnRzLiBBbnkgb2YgdGhlIHRyYW5zZHVjZXJzIGluIHRoZVxuICogICAgIHtAbGluayBtb2R1bGU6dHJhbnNkdWNlcnN8dHJhbnNkdWNlcnN9IG1vZHVsZSBjYW4gcHJvZHVjZSBhIHN1aXRhYmxlXG4gKiAgICAgdHJhbnNkdWNlciBmdW5jdGlvbi4gSWYgdGhpcyBpc24ndCBwcmVzZW50LCB0aGUgaW5wdXQgY29sbGVjdGlvbiB3aWxsXG4gKiAgICAgc2ltcGx5IGJlIHJlZHVjZWQgaW50byBhIHN0cmluZyB3aXRob3V0IHRyYW5zZm9ybWF0aW9uLlxuICogQHJldHVybiB7U3RyaW5nfSBBIHN0cmluZyBjb250YWluaW5nIGFsbCBvZiB0aGUgdHJhbnNmb3JtZWQgdmFsdWVzIGZyb20gdGhlXG4gKiAgICAgaW5wdXQgY29sbGVjdGlvbiBlbGVtZW50cy5cbiAqL1xuZnVuY3Rpb24gYXNTdHJpbmcoY29sbGVjdGlvbiwgeGZvcm0pIHtcbiAgcmV0dXJuIHRyYW5zZHVjZShjb2xsZWN0aW9uLCB4Zm9ybSwgU1RSSU5HX1JFRFVDRVIpO1xufVxuXG4vKipcbiAqIFRyYW5zZm9ybXMgdGhlIGVsZW1lbnRzIG9mIHRoZSBpbnB1dCBjb2xsZWN0aW9uIGFuZCByZWR1Y2VzIHRoZW0gaW50byBhIG5ld1xuICogaXRlcmF0b3IuXG4gKlxuICogVGhlIHRyYW5zZm9ybWVyIGlzIG9wdGlvbmFsLiBJZiBpdCBpc24ndCBwcmVzZW50LCB0aGlzIGZ1bmN0aW9uIGp1c3QgY29udmVydHNcbiAqIHRoZSBpbnB1dCBjb2xsZWN0aW9uIGludG8gYW4gaXRlcmF0b3IuXG4gKlxuICogKihUaGUgcmVzdWx0cyBoZXJlIGFyZSBzaG93biBwYXNzZWQgdGhyb3VnaCBgYXNBcnJheWAgYmVjYXVzZSB0aGVyZSdzIG5vXG4gKiBwcmludGFibGUgcmVwcmVzZW50YXRpb24gb2YgYW4gaXRlcmF0b3IgdG8gc2hvdy4gVGhlIGBhc0FycmF5YCBjYWxscyBhcmUgZm9yXG4gKiBkZW1vbnN0cmF0aW9uIHB1cnBvc2VzIG9ubHkuKSpcbiAqXG4gKiBgYGBcbiAqIGltcG9ydCB7IGFzSXRlcmF0b3IsIGFzQXJyYXkgfSBmcm9tIFwiQGNoYW5rby94ZHVjZVwiO1xuICogaW1wb3J0IHsgbWFwIH0gZnJvbSBcIkBjaGFua28vdHJhbnNkdWNlcnNcIjtcbiAqXG4gKiBjb25zdCB4Zm9ybSA9IG1hcCh4ID0+IHggKyAxKTtcbiAqIGZ1bmN0aW9uKiBmaXZlKCkge1xuICogICBmb3IgKGxldCBpID0gMTsgaSA8PSA1OyArK2kpIHtcbiAqICAgICB5aWVsZCBpO1xuICogICB9XG4gKiB9O1xuICpcbiAqIGxldCByZXN1bHQgPSBhc0l0ZXJhdG9yKGZpdmUoKSwgeGZvcm0pO1xuICogY29uc29sZS5sb2coYXNBcnJheShyZXN1bHQpKTsgICAvLyAtPiBbMiwgMywgNCwgNSwgNl1cbiAqXG4gKiByZXN1bHQgPSBhc0l0ZXJhdG9yKFsxLCAyLCAzLCA0LCA1XSwgeGZvcm0pO1xuICogY29uc29sZS5sb2coYXNBcnJheShyZXN1bHQpKTsgICAvLyAtPiBbMiwgMywgNCwgNSwgNl1cbiAqXG4gKiByZXN1bHQgPSBhc0l0ZXJhdG9yKFsxLCAyLCAzLCA0LCA1XSk7XG4gKiBjb25zb2xlLmxvZyhhc0FycmF5KHJlc3VsdCkpOyAgIC8vIC0+IFsxLCAyLCAzLCA0LCA1XVxuICpcbiAqIHJlc3VsdCA9IGFzSXRlcmF0b3Ioe2E6IDEsIGI6IDJ9KTtcbiAqIGNvbnNvbGUubG9nKGFzQXJyYXkocmVzdWx0KSk7ICAgLy8gLT4gW3sgYTogMSB9LCB7IGI6IDIgfV1cbiAqIGBgYFxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwYXJhbSB7bW9kdWxlOnhkdWNlLkl0ZXJhYmxlfSBjb2xsZWN0aW9uIFRoZSBpbnB1dCBjb2xsZWN0aW9uLiBUaGUgb25seVxuICogICAgIHJlcXVpcmVtZW50IG9mIHRoaXMgY29sbGVjdGlvbiBpcyB0aGF0IGl0IGltcGxlbWVudCB0aGUgYGl0ZXJhYmxlYFxuICogICAgIHByb3RvY29sLiBTcGVjaWFsIHN1cHBvcnQgaXMgcHJvdmlkZWQgYnkgdGhlIGxpYnJhcnkgZm9yIG9iamVjdHMsIHNvIHRoZXlcbiAqICAgICBjYW4gYWxzbyBiZSB1c2VkLlxuICogQHBhcmFtIHttb2R1bGU6eGR1Y2UuVHJhbnNkdWNlckZ1bmN0aW9ufSBbeGZvcm1dIEEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIGEgdHJhbnNkdWNlclxuICogICAgIG9iamVjdCB0aGF0IGRlZmluZXMgdGhlIHRyYW5zZm9ybWF0aW9uIGJlaW5nIGRvbmUgdG8gdGhlIGlucHV0XG4gKiAgICAgY29sbGVjdGlvbidzIGVsZW1lbnRzLiBBbnkgb2YgdGhlIHRyYW5zZHVjZXJzIGluIHRoZVxuICogICAgIHtAbGluayBtb2R1bGU6dHJhbnNkdWNlcnN8dHJhbnNkdWNlcnN9IG1vZHVsZSBjYW4gcHJvZHVjZSBhIHN1aXRhYmxlXG4gKiAgICAgdHJhbnNkdWNlciBmdW5jdGlvbi4gSWYgdGhpcyBpc24ndCBwcmVzZW50LCB0aGUgaW5wdXQgY29sbGVjdGlvbiB3aWxsXG4gKiAgICAgc2ltcGx5IGJlIHJlZHVjZWQgaW50byBhbiBpdGVyYXRvciB3aXRob3V0IHRyYW5zZm9ybWF0aW9uLlxuICogQHJldHVybiB7bW9kdWxlOnhkdWNlLkl0ZXJhdG9yfSBBbiBpdGVyYXRvciBjb250YWluaW5nIGFsbCBvZiB0aGUgdHJhbnNmb3JtZWRcbiAqICAgICB2YWx1ZXMgZnJvbSB0aGUgaW5wdXQgY29sbGVjdGlvbiBlbGVtZW50cy5cbiAqL1xuZnVuY3Rpb24gYXNJdGVyYXRvcihjb2xsZWN0aW9uLCB4Zm9ybSkge1xuICByZXR1cm4geGZvcm0gPyB0cmFuc2R1Y2luZ0l0ZXJhdG9yKGNvbGxlY3Rpb24sIHhmb3JtKSA6IGl0ZXJhdG9yKGNvbGxlY3Rpb24pO1xufVxuXG4vKipcbiAqIFRyYW5zZm9ybXMgdGhlIGVsZW1lbnRzIG9mIHRoZSBpbnB1dCBjb2xsZWN0aW9uIGFuZCByZWR1Y2VzIHRoZW0gaW50byBhIG5ld1xuICogY29sbGVjdGlvbiBvZiB0aGUgc2FtZSB0eXBlLlxuICpcbiAqIFRoaXMgaXMgdGhlIGhpZ2hlc3QgbGV2ZWwgb2YgdGhlIHRocmVlIG1haW4gdHJhbnNkdWN0aW9uIGZ1bmN0aW9uc1xuICogKGBzZXF1ZW5jZWAsIGB7QGxpbmsgbW9kdWxlOnhkdWNlLmludG98aW50b31gLCBhbmRcbiAqIGB7QGxpbmsgbW9kdWxlOnhkdWNlLnRyYW5zZHVjZXx0cmFuc2R1Y2V9YCkuIEl0IGNyZWF0ZXMgYSBuZXcgY29sbGVjdGlvbiBvZlxuICogdGhlIHNhbWUgdHlwZSBhcyB0aGUgaW5wdXQgY29sbGVjdGlvbiBhbmQgcmVkdWNlcyB0aGUgdHJhbnNmb3JtZWQgZWxlbWVudHNcbiAqIGludG8gaXQuIEFkZGl0aW9uYWxseSwgdW5saWtlIGB7QGxpbmsgbW9kdWxlOnhkdWNlLmludG98aW50b31gIGFuZFxuICogYHtAbGluayBtb2R1bGU6eGR1Y2UudHJhbnNkdWNlfHRyYW5zZHVjZX1gLCB0aGlzIGZ1bmN0aW9uIGlzIGNhcGFibGUgb2ZcbiAqIHByb2R1Y2luZyBhbiBpdGVyYXRvciAoYXMgbG9uZyBhcyB0aGUgaW5wdXQgaXMgYW4gaXRlcmF0b3IpLlxuICpcbiAqIFRoZSBpbnB1dCBjb2xsZWN0aW9uIG11c3Qgbm90IG9ubHkgaW1wbGVtZW50IHRoZSBgaXRlcmF0b3JgIHByb3RvY29sIChhcyBpblxuICogdGhlIGxhc3QgdHdvIGZ1bmN0aW9ucykgYnV0IGFsc28gdGhlIGBpbml0YCwgYHJlc3VsdGAsIGFuZCBgc3RlcGAgdHJhbnNkdWNlclxuICogcHJvdG9jb2xzLiBTcGVjaWFsIHN1cHBvcnQgaXMgcHJvdmlkZWQgZm9yIGFycmF5cywgc3RyaW5ncywgb2JqZWN0cywgYW5kXG4gKiBpdGVyYXRvcnMsIHNvIHRoZXkgbmVlZCBub3QgaW1wbGVtZW50IGFueSBwcm90b2NvbC5cbiAqXG4gKiBUaGUgb2J2aW91cyBsaW1pdGF0aW9uIG9mIHRoaXMgZnVuY3Rpb24gaXMgdGhhdCB0aGUgdHlwZSBvZiBvdXRwdXQgY29sbGVjdGlvblxuICogY2Fubm90IGJlIGNob3Nlbi4gU2luY2UgaXQgaXMgYWx3YXlzIHRoZSBzYW1lIGFzIHRoZSBpbnB1dCBjb2xsZWN0aW9uLCB0aGlzXG4gKiBmdW5jdGlvbiBjYW5ub3QgYmUgdXNlZCB0byBjb252ZXJ0IGEgY29sbGVjdGlvbiBpbnRvIGEgZGlmZmVyZW50IHR5cGUuXG4gKlxuICogYGBgXG4gKiBpbXBvcnQgeyBzZXF1ZW5jZSB9IGZyb20gXCJAY2hhbmtvL3hkdWNlXCI7XG4gKiBpbXBvcnQgeyBtYXAgfSBmcm9tIFwiQGNoYW5rby90cmFuc2R1Y2Vyc1wiO1xuICpcbiAqIGNvbnN0IHhmb3JtID0gbWFwKHggPT4geCArIDEpO1xuICpcbiAqIGxldCByZXN1bHQgPSBzZXF1ZW5jZShbMSwgMiwgMywgNCwgNV0sIHhmb3JtKTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdCk7ICAgLy8gLT4gcmVzdWx0ID0gWzIsIDMsIDQsIDUsIDZdXG4gKlxuICogcmVzdWx0ID0gc2VxdWVuY2UoJzEyMzQ1JywgeGZvcm0pO1xuICogY29uc29sZS5sb2cocmVzdWx0KTsgICAvLyAtPiByZXN1bHQgPSAnMjM0NTYnXG4gKiBgYGBcbiAqXG4gKiBUaGVzZSBleGFtcGxlcyBhcmUgaWRlbnRpY2FsIHRvIHNvbWUgb2YgdGhlIGV4YW1wbGVzIGZyb20gdGhlIGBhc1hgXG4gKiBmdW5jdGlvbnMuIE90aGVyIGV4YW1wbGVzIGFyZSBub3QgcG9zc2libGUgd2l0aCBgc2VxdWVuY2VgIGJlY2F1c2UgdGhleSBoYXZlXG4gKiBkaWZmZXJlbnQgaW5wdXQgYW5kIG91dHB1dCBjb2xsZWN0aW9uIHR5cGVzLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwYXJhbSB7bW9kdWxlOnhkdWNlLlJlZHVjaWJsZUl0ZXJhYmxlfSBjb2xsZWN0aW9uIFRoZSBpbnB1dCBjb2xsZWN0aW9uLiBUaGlzXG4gKiAgICAgbXVzdCBpbXBsZW1lbnQgdGhlIGBpdGVyYXRvcmAsIGBpbml0YCwgYHJlc3VsdGAsIGFuZCBgc3RlcGAgcHJvdG9jb2xzLlxuICogICAgIFNwZWNpYWwgc3VwcG9ydCBpcyBwcm92aWRlZCBmb3IgYXJyYXlzLCBzdHJpbmdzLCBvYmplY3RzLCBhbmQgaXRlcmF0b3JzLFxuICogICAgIHNvIHRoZXkgZG8gbm90IGhhdmUgdG8gaW1wbGVtZW50IGFueSBwcm90b2NvbHMuXG4gKiBAcGFyYW0ge21vZHVsZTp4ZHVjZS5UcmFuc2R1Y2VyRnVuY3Rpb259IHhmb3JtIEEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIGEgdHJhbnNkdWNlclxuICogICAgIG9iamVjdCB0aGF0IGRlZmluZXMgdGhlIHRyYW5zZm9ybWF0aW9uIGJlaW5nIGRvbmUgdG8gdGhlIGlucHV0XG4gKiAgICAgY29sbGVjdGlvbidzIGVsZW1lbnRzLiBBbnkgb2YgdGhlIHRyYW5zZHVjZXJzIGluIHRoZVxuICogICAgIHtAbGluayBtb2R1bGU6eGR1Y2UudHJhbnNkdWNlcnN8dHJhbnNkdWNlcnN9IG1vZHVsZSBjYW4gcHJvZHVjZSBhXG4gKiAgICAgc3VpdGFibGUgdHJhbnNkdWNlciBmdW5jdGlvbi5cbiAqIEByZXR1cm4ge21vZHVsZTp4ZHVjZS5SZWR1Y2libGVJdGVyYWJsZX0gQSBjb2xsZWN0aW9uIG9mIHRoZSBzYW1lIHR5cGUgYXMgdGhlXG4gKiAgICAgaW5wdXQgY29sbGVjdGlvbiwgY29udGFpbmluZyBhbGwgb2YgdGhlIHRyYW5zZm9ybWVkIHZhbHVlcyBmcm9tIHRoZSBpbnB1dFxuICogICAgIGNvbGxlY3Rpb24gZWxlbWVudHMuXG4gKi9cbmZ1bmN0aW9uIHNlcXVlbmNlKGNvbGxlY3Rpb24sIHhmb3JtKSB7XG4gIHN3aXRjaCAodHJ1ZSkge1xuICAgIGNhc2UgaXNBcnJheShjb2xsZWN0aW9uKTpcbiAgICAgIHJldHVybiBhc0FycmF5KGNvbGxlY3Rpb24sIHhmb3JtKTtcbiAgICBjYXNlIGlzT2JqZWN0KGNvbGxlY3Rpb24pOlxuICAgICAgcmV0dXJuIGFzT2JqZWN0KGNvbGxlY3Rpb24sIHhmb3JtKTtcbiAgICBjYXNlIGlzU3RyaW5nKGNvbGxlY3Rpb24pOlxuICAgICAgcmV0dXJuIGFzU3RyaW5nKGNvbGxlY3Rpb24sIHhmb3JtKTtcbiAgICBjYXNlIGlzSW1wbGVtZW50ZWQoY29sbGVjdGlvbiwgXCJzdGVwXCIpOlxuICAgICAgcmV0dXJuIHRyYW5zZHVjZShjb2xsZWN0aW9uLCB4Zm9ybSwgY29sbGVjdGlvbik7XG4gICAgY2FzZSBpc0ltcGxlbWVudGVkKGNvbGxlY3Rpb24sIFwiaXRlcmF0b3JcIik6XG4gICAgICByZXR1cm4gYXNJdGVyYXRvcihjb2xsZWN0aW9uLCB4Zm9ybSk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IEVycm9yKGBDYW5ub3Qgc2VxdWVuY2UgY29sbGVjdGlvbjogJHtjb2xsZWN0aW9ufWApO1xuICB9XG59XG5cbi8qKlxuICogVHJhbnNmb3JtcyB0aGUgZWxlbWVudHMgb2YgdGhlIGlucHV0IGNvbGxlY3Rpb24gYW5kIHJlZHVjZXMgdGhlbSBpbnRvIHRoZVxuICogdGFyZ2V0IGNvbGxlY3Rpb24uXG4gKlxuICogVGhpcyBpcyBtdWNoIGxpa2UgYHtAbGluayBtb2R1bGU6eGR1Y2UudHJhbnNkdWNlfHRyYW5zZHVjZX1gLCBleGNlcHQgdGhhdFxuICogaW5zdGVhZCBvZiBleHBsaWNpdGx5IHByb3ZpZGluZyBhIHJlZHVjZXIgKGFuZCBwZXJoYXBzIGFuIGluaXRpYWxcbiAqIGNvbGxlY3Rpb24pLCB0aGUgdGFyZ2V0IGNvbGxlY3Rpb24gYWN0cyBhcyBhIHJlZHVjZXIgaXRzZWxmLiBUaGlzIHJlcXVpcmVzXG4gKiB0aGF0IHRoZSBjb2xsZWN0aW9uIGltcGxlbWVudCB0aGUgYGluaXRgLCBgcmVzdWx0YCwgYW5kIGBzdGVwYCB0cmFuc2R1Y2VyXG4gKiBwcm90b2NvbCBmdW5jdGlvbnMuXG4gKlxuICogSWYgbm8gdHJhbnNkdWNlciBmdW5jdGlvbiBpcyBwcm92aWRlZCwgdGhlIGlucHV0IGNvbGxlY3Rpb24gZWxlbWVudHMgYXJlXG4gKiByZWR1Y2VkIGludG8gdGhlIHRhcmdldCBjb2xsZWN0aW9uIHdpdGhvdXQgYmVpbmcgdHJhbnNmb3JtZWQuIFRoaXMgY2FuIGJlXG4gKiB1c2VkIHRvIGNvbnZlcnQgb25lIGtpbmQgb2YgY29sbGVjdGlvbiBpbnRvIGFub3RoZXIuXG4gKlxuICogYGBgXG4gKiBpbXBvcnQgeyBpbnRvIH0gZnJvbSBcIkBjaGFua28veGR1Y2VcIjtcbiAqIGltcG9ydCB7IG1hcCB9IGZyb20gXCJAY2hhbmtvL3RyYW5zZHVjZXJzXCI7XG4gKlxuICogY29uc3QgeGZvcm0gPSBtYXAoeCA9PiB4ICsgMSk7XG4gKlxuICogbGV0IHJlc3VsdCA9IGludG8oW10sIFsxLCAyLCAzLCA0LCA1XSwgeGZvcm0pO1xuICogY29uc29sZS5sb2cocmVzdWx0KTsgICAvLyAtPiBbMiwgMywgNCwgNSwgNl1cbiAqXG4gKiByZXN1bHQgPSBpbnRvKFwiXCIsIFsxLCAyLCAzLCA0LCA1XSwgeGZvcm0pO1xuICogY29uc29sZS5sb2cocmVzdWx0KTsgICAvLyAtPiBcIjIzNDU2XCJcbiAqXG4gKiByZXN1bHQgPSBpbnRvKFtdLCBcIjEyMzQ1XCIsIHhmb3JtKTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdCk7ICAgLy8gLT4gWzIsIDMsIDQsIDUsIDZdXG4gKlxuICogcmVzdWx0ID0gaW50byhcIlwiLCBcIjEyMzQ1XCIsIHhmb3JtKTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdCk7ICAgLy8gLT4gXCIyMzQ1NlwiXG4gKiBgYGBcbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcGFyYW0ge21vZHVsZTp4ZHVjZS5SZWR1Y2libGV9IHRhcmdldCBUaGUgY29sbGVjdGlvbiBpbnRvIHdoaWNoIGFsbCBvZiB0aGVcbiAqICAgICB0cmFuc2Zvcm1lZCBpbnB1dCBjb2xsZWN0aW9uIGVsZW1lbnRzIHdpbGwgYmUgcmVkdWNlZC4gVGhpcyBjb2xsZWN0aW9uXG4gKiAgICAgbXVzdCBpbXBsZW1lbnQgdGhlIGBpbml0YCwgYHJlc3VsdGAsIGFuZCBgc3RlcGAgcHJvdG9jb2wgZnVuY3Rpb25zIGZyb21cbiAqICAgICB0aGUgdHJhbnNkdWNlciBwcm90b2NvbC4gU3BlY2lhbCBzdXBwb3J0IGlzIHByb3ZpZGVkIGZvciBhcnJheXMsIHN0cmluZ3MsXG4gKiAgICAgYW5kIG9iamVjdHMsIHNvIHRoZXkgbmVlZCBub3QgaW1wbGVtZW50IHRoZSBwcm90b2NvbC5cbiAqIEBwYXJhbSB7bW9kdWxlOnhkdWNlLkl0ZXJhYmxlfSBjb2xsZWN0aW9uIFRoZSBpbnB1dCBjb2xsZWN0aW9uLiBUaGUgb25seVxuICogICAgIHJlcXVpcmVtZW50IG9mIHRoaXMgY29sbGVjdGlvbiBpcyB0aGF0IGl0IGltcGxlbWVudCB0aGUgYGl0ZXJhdG9yYFxuICogICAgIHByb3RvY29sLiBTcGVjaWFsIHN1cHBvcnQgaXMgcHJvdmlkZWQgYnkgdGhlIGxpYnJhcnkgZm9yIG9iamVjdHMsIHRvIHRoZXlcbiAqICAgICBjYW4gYWxzbyBiZSB1c2VkLlxuICogQHBhcmFtIHttb2R1bGU6eGR1Y2UuVHJhbnNkdWNlckZ1bmN0aW9ufSBbeGZvcm1dIEEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIGEgdHJhbnNkdWNlclxuICogICAgIG9iamVjdCB0aGF0IGRlZmluZXMgdGhlIHRyYW5zZm9ybWF0aW9uIGJlaW5nIGRvbmUgdG8gdGhlIGlucHV0XG4gKiAgICAgY29sbGVjdGlvbidzIGVsZW1lbnRzLiBBbnkgb2YgdGhlIHRyYW5zZHVjZXJzIGluIHRoZVxuICogICAgIHtAbGluayBtb2R1bGU6dHJhbnNkdWNlcnN8dHJhbnNkdWNlcnN9IG1ub2R1bGUgY2FuIHByb2R1Y2UgYSBzdWl0YWJsZVxuICogICAgIHRyYW5zZHVjZXIgZnVuY3Rpb24uIElmIHRoaXMgaXNuJ3QgcHJlc2VudCwgdGhlIGlucHV0IGNvbGxlY3Rpb24gd2lsbFxuICogICAgIHNpbXBseSBiZSByZWR1Y2VkIGludG8gdGhlIHRhcmdldCBjb2xsZWN0aW9uIHdpdGhvdXQgdHJhbnNmb3JtYXRpb24uXG4gKiBAcmV0dXJuIHttb2R1bGU6eGR1Y2UuUmVkdWNpYmxlfSBUaGUgYHRhcmdldGAgY29sbGVjdGlvbiwgd2l0aCBhbGwgb2YgdGhlXG4gKiAgICAgdHJhbmZvcm1lZCBpbnB1dCBjb2xsZWN0aW9uIGVsZW1lbnRzIHJlZHVjZWQgb250byBpdC5cbiAqL1xuZnVuY3Rpb24gaW50byh0YXJnZXQsIGNvbGxlY3Rpb24sIHhmb3JtKSB7XG4gIHN3aXRjaCAodHJ1ZSkge1xuICAgIGNhc2UgaXNBcnJheSh0YXJnZXQpOlxuICAgICAgcmV0dXJuIHRyYW5zZHVjZShjb2xsZWN0aW9uLCB4Zm9ybSwgQVJSQVlfUkVEVUNFUiwgdGFyZ2V0KTtcbiAgICBjYXNlIGlzT2JqZWN0KHRhcmdldCk6XG4gICAgICByZXR1cm4gdHJhbnNkdWNlKGNvbGxlY3Rpb24sIHhmb3JtLCBPQkpFQ1RfUkVEVUNFUiwgdGFyZ2V0KTtcbiAgICBjYXNlIGlzU3RyaW5nKHRhcmdldCk6XG4gICAgICByZXR1cm4gdHJhbnNkdWNlKGNvbGxlY3Rpb24sIHhmb3JtLCBTVFJJTkdfUkVEVUNFUiwgdGFyZ2V0KTtcbiAgICBjYXNlIGlzSW1wbGVtZW50ZWQodGFyZ2V0LCBcInN0ZXBcIik6XG4gICAgICByZXR1cm4gdHJhbnNkdWNlKGNvbGxlY3Rpb24sIHhmb3JtLCB0YXJnZXQsIHRhcmdldCk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IEVycm9yKGBDYW5ub3QgcmVkdWNlIGNvbGxlY3Rpb24gaW50byAke3RhcmdldH06ICR7Y29sbGVjdGlvbn1gKTtcbiAgfVxufVxuXG4vKipcbiAqIENvbXBvc2VzIHR3byBvciBtb3JlIHRyYW5zZHVjZXIgZnVuY3Rpb25zIGludG8gYSBzaW5nbGUgdHJhbnNkdWNlciBmdW5jdGlvbi5cbiAqXG4gKiBFYWNoIGZ1bmN0aW9uIHRoYXQgdGFrZXMgYSB0cmFuc2R1Y2VyIGZ1bmN0aW9uXG4gKiAoYHtAbGluayBtb2R1bGU6eGR1Y2Uuc2VxdWVuY2V8c2VxdWVuY2V9YCwgYHtAbGluayBtb2R1bGU6eGR1Y2UuaW50b3xpbnRvfWAsXG4gKiBldGMuKSBpcyBvbmx5IGNhcGFibGUgb2YgYWNjZXB0aW5nIG9uZSBvZiB0aGVtLiBJZiB0aGVyZSBpcyBhIG5lZWQgdG8gaGF2ZVxuICogc2V2ZXJhbCB0cmFuc2R1Y2VycyBjaGFpbmVkIHRvZ2V0aGVyLCB0aGVuIHVzZSBgY29tcG9zZWAgdG8gY3JlYXRlIGFcbiAqIHRyYW5zZHVjZXIgZnVuY3Rpb24gdGhhdCBkb2VzIHdoYXQgYWxsIG9mIHRoZW0gZG8uXG4gKlxuICogTk9URTogSW4gZnVuY3Rpb25hbCBwcm9ncmFtbWluZywgYSBjb21wb3NlIGZ1bmN0aW9uIGlzIGdlbmVyYWxseSBvcmRlcmVkIHNvXG4gKiB0aGF0IHRoZSBmaXJzdC1leGVjdXRlZCBmdW5jdGlvbiBpcyBsaXN0ZWQgbGFzdC4gVGhpcyBpcyBkb25lIGluIHRoZSBvcHBvc2l0ZVxuICogd2F5LCB3aXRoIHRoZSBmaXJzdCB0cmFuc2R1Y2VyIGV4ZWN1dGluZyBmaXJzdCwgZXRjLiBUaGlzIGlzIGEgbW9yZSBuYXR1cmFsXG4gKiBvcmRlcmluZyBmb3IgdHJhbnNkdWNlciBmdW5jdGlvbnMgYmVjYXVzZSB0aGVyZSBpcyBhIHZlcnkgcmVhbCBkaXJlY3Rpb25hbFxuICogcHVsbCBvZiBlbGVtZW50cyB0aHJvdWdoIGEgY2hhaW4gb2YgY29tcG9zZWQgdHJhbnNkdWNlciBmdW5jdGlvbnMuXG4gKlxuICogYGBgXG4gKiBpbXBvcnQgeyBjb21wb3NlLCBzZXF1ZW5jZSB9IGZyb20gXCJAY2hhbmtvL3hkdWNlXCI7XG4gKiBpbXBvcnQgeyBtYXAsIGZpbHRlciwgdGFrZSB9IGZyb20gXCJAY2hhbmtvL3RyYW5zZHVjZXJzXCI7XG4gKlxuICogY29uc3QgYWRkMSA9IHggPT4geCArIDE7XG4gKiBjb25zdCBvZGQgPSB4ID0+IHggJSAyICE9PSAwO1xuICpcbiAqIGNvbnN0IHhmb3JtID0gY29tcG9zZShtYXAoYWRkMSksIGZpbHRlcihvZGQpLCB0YWtlKDMpKTtcbiAqXG4gKiBjb25zdCByZXN1bHQgPSBzZXF1ZW5jZShbMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTBdLCB4Zm9ybSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQpOyAgIC8vIC0+IFszLCA1LCA3XTtcbiAqIGBgYFxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwYXJhbSB7Li4ubW9kdWxlOnhkdWNlLlRyYW5zZHVjZXJGdW5jdGlvbn0gZm5zIE9uZSBvciBtb3JlIGZ1bmN0aW9uIHRoYXQgZWFjaCBjcmVhdGVcbiAqICAgICBhIHRyYW5zZHVjZXIgb2JqZWN0IHRoYXQgZGVmaW5lcyB0aGUgdHJhbnNmb3JtYXRpb24gYmVpbmcgZG9uZSB0byBhXG4gKiAgICAgY29sbGVjdGlvbidzIGVsZW1lbnRzLiBBbnkgb2YgdGhlIHRyYW5zZHVjZXJzIGluIHRoZVxuICogICAgIHtAbGluayBtb2R1bGU6dHJhbnNkdWNlcnN8dHJhbnNkdWNlcnN9IG1vZHVsZSBjYW4gcHJvZHVjZSBhIHN1aXRhYmxlXG4gKiAgICAgdHJhbnNkdWNlciBmdW5jdGlvbi5cbiAqIEByZXR1cm4ge21vZHVsZTp4ZHVjZS5UcmFuc2R1Y2VyRnVuY3Rpb259IEEgdHJhbnNkdWNlciBmdW5jdGlvbiB0aGF0IHByb2R1Y2VzIGFcbiAqICAgICB0cmFuc2R1Y2VyIG9iamVjdCB0aGF0IHBlcmZvcm1zICphbGwqIG9mIHRoZSB0cmFuc2Zvcm1hdGlvbnMgb2YgdGhlXG4gKiAgICAgb2JqZWN0cyBwcm9kdWNlZCBieSB0aGUgaW5wdXQgdHJhbnNkdWNlciBmdW5jdGlvbnMuXG4gKi9cbmZ1bmN0aW9uIGNvbXBvc2UoLi4uZm5zKSB7XG4gIGNvbnN0IHJldmVyc2VkID0gZm5zLnJldmVyc2UoKTtcbiAgcmV0dXJuIHZhbHVlID0+IHJldmVyc2VkLnJlZHVjZSgoYWNjLCBmbikgPT4gZm4oYWNjKSwgdmFsdWUpO1xufVxuXG5leHBvcnQge1xuICB0cmFuc2R1Y2UsXG4gIHNlcXVlbmNlLFxuICBpbnRvLFxuICBhc0FycmF5LFxuICBhc09iamVjdCxcbiAgYXNTdHJpbmcsXG4gIGFzSXRlcmF0b3IsXG4gIGNvbXBvc2Vcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuLyoqXG4gKiBBIGJ1bmNoIG9mIHV0aWxpdHkgZnVuY3Rpb25zLiBUaGVzZSBhcmUgYWxsIHVzZWQgYnkgdGhlIGxpYnJhcnkgaXRzZWxmIGluXG4gKiBwbGFjZXMsIGJ1dCBtYW55IG9mIHRoZW0gYXJlIHN1aXRhYmxlIGZvciBnZW5lcmFsIHVzZSBhcyB3ZWxsLlxuICogXlxuICogQG1vZHVsZSB4ZHVjZS91dGlsc1xuICogQHByaXZhdGVcbiAqL1xuXG4vKipcbiAqIGBPYmplY3RgJ3MgYHRvU3RyaW5nYCBpcyBleHBsaWNpdGx5IHVzZWQgdGhyb3VnaG91dCBiZWNhdXNlIGl0IGNvdWxkIGJlXG4gKiByZWRlZmluZWQgaW4gYW55IHN1YnR5cGUgb2YgYE9iamVjdGAuXG4gKlxuICogQGZ1bmN0aW9uIHRvU3RyaW5nXG4gKiBAcHJpdmF0ZVxuICovXG5jb25zdCB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGEgdmFsdWUgaXMgYSBmdW5jdGlvbi5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcGFyYW0geyp9IHggVGhlIHZhbHVlIGJlaW5nIHRlc3RlZCB0byBzZWUgaWYgaXQgaXMgYSBmdW5jdGlvbi5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IEVpdGhlciBgdHJ1ZWAgaWYgdGhlIHRlc3QgdmFsdWUgaXMgYSBmdW5jdGlvbiBvciBgZmFsc2VgIGlmXG4gKiAgICAgaXQgaXMgbm90LlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih4KSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHgpID09PSBcIltvYmplY3QgRnVuY3Rpb25dXCI7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGEgdmFsdWUgaXMgYSBnZW5lcmF0b3IgZnVuY3Rpb24uXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHBhcmFtIHsqfSB4IFRoZSB2YWx1ZSBiZWluZyB0ZXN0ZWQgdG8gc2VlIGlmIGl0IGlzIGEgZ2VuZXJhdG9yIGZ1bmN0aW9uLlxuICogQHJldHVybiB7Ym9vbGVhbn0gRWl0aGVyIGB0cnVlYCBpZiB0aGUgdGVzdCB2YWx1ZSBpcyBhIGdlbmVyYXRvciBmdW5jdGlvbiBvclxuICogICAgIGBmYWxzZWAgaWYgaXQgaXMgbm90LlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaXNHZW5lcmF0b3JGdW5jdGlvbih4KSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHgpID09PSBcIltvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dXCI7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGEgdmFsdWUgaXMgYSBwbGFpbiBvYmplY3QuXG4gKlxuICogVGhpcyBmdW5jdGlvbiByZXR1cm5zIGBmYWxzZWAgaWYgdGhlIHZhbHVlIGlzIGFueSBvdGhlciBzb3J0IG9mIGJ1aWx0LWluXG4gKiBvYmplY3QgKHN1Y2ggYXMgYW4gYXJyYXkgb3IgYSBzdHJpbmcpLiBJdCBhbHNvIHJldHVybnMgYGZhbHNlYCBmb3IgYW55IG9iamVjdFxuICogdGhhdCBpcyBjcmVhdGVkIGJ5IGEgY29uc3RydWN0b3IgdGhhdCBpcyBub3QgYE9iamVjdGAncyBjb25zdHJ1Y3RvciwgbWVhbmluZ1xuICogdGhhdCBcImluc3RhbmNlc1wiIG9mIGN1c3RvbSBcImNsYXNzZXNcIiB3aWxsIHJldHVybiBgZmFsc2VgLiBUaGVyZWZvcmUgaXQncyBvbmx5XG4gKiBnb2luZyB0byByZXR1cm4gYHRydWVgIGZvciBsaXRlcmFsIG9iamVjdHMgb3IgdGhvc2UgY3JlYXRlZCB3aXRoXG4gKiBgT2JqZWN0LmNyZWF0ZSgpYC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcGFyYW0geyp9IHggVGhlIHZhbHVlIGJlaW5nIHRlc3RlZCB0byBzZWUgaWYgaXQgaXMgYSBwbGFpbiBvYmplY3QuXG4gKiBAcmV0dXJuIHtib29sZWFufSBFaXRoZXIgYHRydWVgIGlmIHRoZSB0ZXN0IHZhbHVlIGlzIGEgcGxhaW4gb2JqZWN0IG9yXG4gKiAgICAgYGZhbHNlYCBpZiBpdCBpcyBub3QuXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHgpIHtcbiAgLy8gVGhpcyBjaGVjayBleGNsdWRlcyBidWlsdC1pbiBub24tT2JqZWN0IG9iamVjdHMgKHN1Y2ggYXMgQXJyYXkgYW5kIFN0cmluZykuXG4gIC8vIEl0IGFsc28gZXhjbHVkZXMgb2JqZWN0cyBjcmVhdGVkIGZyb20gRVMyMDE1IGNsYXNzZXMsIGJ1dCBpdCBkb2VzIG5vdFxuICAvLyBleGNsdWRlIG9iamVjdHMgY3JlYXRlZCB3aXRoIGBuZXdgIG9uIGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyAodGhhdCBoYXBwZW5zXG4gIC8vIGJlbG93KS5cbiAgaWYgKHRvU3RyaW5nLmNhbGwoeCkgIT09IFwiW29iamVjdCBPYmplY3RdXCIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBQcm90b3R5cGUtbGVzcyBvYmplY3RzIChjcmVhdGVkIHdpdGggYE9iamVjdC5jcmVhdGUobnVsbCkpYCBwYXNzXG4gIGNvbnN0IHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHgpO1xuICBpZiAocHJvdG8gPT09IG51bGwpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8vIENoZWNrIHRvIHNlZSB3aGV0aGVyIHRoZSBjb25zdHJ1Y3RvciBvZiB0aGUgdGVzdGVkIG9iamVjdCBpcyB0aGUgT2JqZWN0XG4gIC8vIGNvbnN0cnVjdG9yLiBUaGlzIGlzIHRoZSBvbmx5IGNvbnN0cnVjdG9yIHRoYXQgcHJvZHVjZXMgYSBcInBsYWluXCIgb2JqZWN0LlxuICBjb25zdCBjdG9yID1cbiAgICBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocHJvdG8sIFwiY29uc3RydWN0b3JcIikgJiZcbiAgICBwcm90by5jb25zdHJ1Y3RvcjtcbiAgcmV0dXJuIHR5cGVvZiBjdG9yID09PSBcImZ1bmN0aW9uXCIgJiYgY3RvciA9PT0gT2JqZWN0O1xufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhIHZhbHVlIGlzIGEgbnVtYmVyLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gd2lsbCByZXR1cm4gYHRydWVgIGZvciBhbnkgbnVtYmVyIGxpdGVyYWwgb3IgaW5zdGFuY2Ugb2ZcbiAqIGBOdW1iZXJgIGV4Y2VwdCBmb3IgYEluZmluaXR5YCBvciBgTmFOYC4gSXQgd2lsbCByZXR1cm4gYGZhbHNlYCBmb3Igc3RyaW5nc1xuICogdGhhdCBoYXBwZW4gdG8gYWxzbyBiZSBudW1iZXJzOyB0aGUgdmFsdWUgbXVzdCBiZSBhbiBhY3R1YWwgYE51bWJlcmAgaW5zdGFuY2VcbiAqIG9yIG51bWJlciBsaXRlcmFsIHRvIHJldHVybiBgdHJ1ZWAuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHBhcmFtIHsqfSB4IFRoZSB2YWx1ZSBiZWluZyB0ZXN0ZWQgdG8gc2VlIGlmIGl0IGlzIGEgbnVtYmVyLlxuICogQHJldHVybiB7Ym9vbGVhbn0gRWl0aGVyIGB0cnVlYCBpZiB0aGUgdGVzdCB2YWx1ZSBpcyBhIGZpbml0ZSBudW1iZXIgKG5vdFxuICogICAgIGluY2x1ZGluZyBzdHJpbmcgcmVwcmVzZW50YXRpb25zIG9mIG51bWJlcnMpIG9yIGBmYWxzZWAgaWYgaXQgaXMgbm90LlxuICovXG5mdW5jdGlvbiBpc051bWJlcih4KSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHgpID09PSBcIltvYmplY3QgTnVtYmVyXVwiICYmIGlzRmluaXRlKHgpO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhIHZhbHVlIGlzIGEgc3RyaW5nLlxuICpcbiAqIExpdGVyYWwgc3RyaW5ncyB3aWxsIHJldHVybiBgdHJ1ZWAsIGFzIHdpbGwgaW5zdGFuY2VzIG9mIHRoZSBgU3RyaW5nYCBvYmplY3QuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHBhcmFtIHsqfSB4IFRoZSB2YWx1ZSBiZWluZyB0ZXN0ZWQgdG8gc2VlIGlmIGl0IGlzIGEgc3RyaW5nLlxuICogQHJldHVybiB7Ym9vbGVhbn0gRWl0aGVyIGB0cnVlYCBpZiB0aGUgdGVzdCB2YWx1ZSBpcyBhIHN0cmluZyBvciBgZmFsc2VgIGlmXG4gKiAgICBpdCBpcyBub3QuXG4gKi9cbmZ1bmN0aW9uIGlzU3RyaW5nKHgpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoeCkgPT09IFwiW29iamVjdCBTdHJpbmddXCI7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGEgdmFsdWUgaXMgYW4gYXJyYXkuXG4gKlxuICogVGhpcyBmdW5jdGlvbiBtZXJlbHkgZGVsZWdhdGVzIHRvIGBBcnJheS5pc0FycmF5YC4gSXQgaXMgcHJvdmlkZWQgZm9yXG4gKiBjb25zaXN0ZW5jeSBpbiBjYWxsaW5nIHN0eWxlIG9ubHkuXG4gKlxuICogQGZ1bmN0aW9uIGlzQXJyYXlcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwYXJhbSB7Kn0geCBUaGUgdmFsdWUgYmVpbmcgdGVzdGVkIHRvIHNlZSBpZiBpdCBpcyBhbiBhcnJheS5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IEVpdGhlciBgdHJ1ZWAgaWYgdGhlIHRlc3QgdmFsdWUgaXMgYW4gYXJyYXkgb3IgYGZhbHNlYCBpZlxuICogICAgIGl0IGlzIG5vdC5cbiAqL1xuY29uc3QgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5cbmV4cG9ydCB7XG4gIGlzRnVuY3Rpb24sXG4gIGlzR2VuZXJhdG9yRnVuY3Rpb24sXG4gIGlzT2JqZWN0LFxuICBpc051bWJlcixcbiAgaXNTdHJpbmcsXG4gIGlzQXJyYXlcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuLyoqXG4gKiBBbGwgb2YgdGhlIHB1YmxpYy1mYWNpbmcgQ2hhbmtvIGZ1bmN0aW9ucyBhcmUgZ2F0aGVyZWQgaGVyZSBpbiBvbmUgcGxhY2UgdG9cbiAqIGJlIGV4cG9ydGVkIGFzIGEgd2hvbGUuIFRoaXMgaXMgYSBjb21wbGV0ZWx5IGZsYXQgbGlzdCBvZiBleHBvcnRzLCBhc1xuICogaW5sdWRpbmcgYW55IG9iamVjdCBsaXRlcmFscyBmb3IgZXhwb3J0ICh3aGljaCB3b3VsZCBiZSBuYXR1cmFsIGZvciBidWZmZXJzLFxuICogZm9yIGV4YW1wbGUpIHdvdWxkIGtlZXAgdHJlZS1zaGFraW5nIGZyb20gd29ya2luZyByaWdodC5cbiAqXG4gKiBAbW9kdWxlIGNzcFxuICovXG5cbmV4cG9ydCB7IGZpeGVkLCBkcm9wcGluZywgc2xpZGluZyB9IGZyb20gXCJtb2R1bGVzL2J1ZmZlclwiO1xuZXhwb3J0IHtcbiAgQ0xPU0VELFxuICBjaGFuLFxuICB0aW1lZENoYW4sXG4gIHRyYW5zQ2hhbixcbiAgc2VuZCxcbiAgcmVjdixcbiAgc2VuZEFzeW5jLFxuICByZWN2QXN5bmMsXG4gIHJlY3ZPclRocm93LFxuICBjbG9zZSxcbiAgaXNDbG9zZWQsXG4gIGlzQnVmZmVyZWQsXG4gIGlzVGltZWQsXG4gIHNlbGVjdCxcbiAgc2VsZWN0QXN5bmMsXG4gIHZhbHVlLFxuICBjaGFubmVsXG59IGZyb20gXCJtb2R1bGVzL2NoYW5uZWxcIjtcbmV4cG9ydCB7XG4gIGNvbmZpZyxcbiAgU0VUX0lNTUVESUFURSxcbiAgTUVTU0FHRV9DSEFOTkVMLFxuICBTRVRfVElNRU9VVFxufSBmcm9tIFwibW9kdWxlcy9kaXNwYXRjaGVyXCI7XG5leHBvcnQgeyBnbywgc2xlZXAsIGpvaW4gfSBmcm9tIFwibW9kdWxlcy9wcm9jZXNzXCI7XG5leHBvcnQgeyBFTVBUWSB9IGZyb20gXCJtb2R1bGVzL3F1ZXVlXCI7XG5cbi8qKlxuICogQW4gZXJyb3IgaGFuZGxpbmcgZnVuY2l0b24uIFRoaXMgaXMgdXNlZCB0byBoYW5kbGUgZXhjZXB0aW9ucyB0aHJvd24gaW4gYXN5bmNcbiAqIGZ1bmN0aW9ucyBhbmQgaW4gdHJhbnNkdWNlcnMuIFRoZSByZXR1cm4gdmFsdWUgb2YgYW4gZXhjZXB0aW9uIGhhbmRsZXIgaXNcbiAqIHR5cGljYWxseSBzZW50IHRvIGEgY2hhbm5lbDsgaWYgdGhlIGV4Y2VwdGlvbiBoYXBwZW5lZCB3aXRoaW4gYW4gYXN5bmNcbiAqIGZ1bmN0aW9uLCBpdCB3aWxsIGJlIHNlbnQgdG8gdGhhdCBmdW5jdGlvbidzIG91dHB1dCBjaGFubmVsLCBhbmQgaWYgdGhlXG4gKiBleGNwZXRpb24gaGFwcGVuZWQgaW4gYSB0cmFuc2R1Y2VyLCBpdCB3aWxsIGJlIHNlbnQgdG8gdGhlIGNoYW5uZWwgdG8gd2hpY2hcbiAqIHRoZSB0cmFuc2R1Y2VyIGlzIGF0dGFjaGVkLlxuICpcbiAqIEBjYWxsYmFjayBFeGNlcHRpb25IYW5kbGVyXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICogQHBhcmFtIHtvYmplY3R9IGVyciBUaGUgZXJyb3Igb2JqZWN0IHRoYXQgd2FzIHRocm93biB0byBjYXVzZSB0aGUgZXJyb3IgdG9cbiAqICAgICBoYXZlIHRvIGJlIGhhbmRsZWQuXG4gKiBAcmV0dXJuIHsqfSBBIHZhbHVlIGRlY2lkZWQgYnkgdGhlIGhhbmRsZXIgdGhhdCB3aWxsIGJlIHNlbnQgdG8gYSBjaGFubmVsLlxuICovXG5cbi8qKlxuICogQSBjYWxsYmFjayB0aGF0J3MgcnVuIHdoZW4gYSBub24tYmxvY2tpbmcgY2hhbm5lbCBvcGVyYXRpb24gY29tcGxldGVzLiBUaGVcbiAqIHZhbHVlIHRoYXQgdGhpcyBmdW5jdGlvbiByZWNlaXZlcyBpcyBpZGVudGljYWwgdG8gd2hhdCBpcyByZXR1cm5lZCBieSBhXG4gKiBibG9ja2luZyBjYWxsOiB0aGUgdmFsdWUgcmVjZWl2ZWQgZnJvbSB0aGUgY2hhbm5lbCBmb3IgYSBgcmVjdmAsIG9yIGB0cnVlYCBvclxuICogYGZhbHNlYCBkZXBlbmRpbmcgb24gdGhlIGNoYW5uZWwgc3RhdHVzIGZvciBhIGBzZW5kYC4gQW55IHJldHVybiB2YWx1ZSBmcm9tXG4gKiB0aGlzIGNhbGxiYWNrIGlzIGlnbm9yZWQuXG4gKlxuICogQGNhbGxiYWNrIE9wQ2FsbGJhY2tcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcGFyYW0geyp9IHZhbHVlIEVpdGhlciB0aGUgdmFsdWUgcmVjZWl2ZWQgZnJvbSB0aGUgY2hhbm5lbCwgb3Igd2hldGhlciBvclxuICogbm90IGEgdmFsdWUgd2FzIHN1Y2Nlc3NmdWxseSBzZW50LlxuICovXG5cbi8qKlxuICogQSBjYWxsYmFjayB0aGF0J3MgcnVuIHdoZW4gYSBub24tYmxvY2tpbmcgYHNlbGVjdGAgb3BlcmF0aW9uIGNvbXBsZXRlcy4gVGhlXG4gKiB2YWx1ZSB0aGF0IHRoaXMgZnVuY3Rpb24gcmVjZWl2ZXMgaXMgYW4gb2JqZWN0IHdpdGggdHdvIHByb3BlcnRpZXM6IHRoZSB2YWx1ZVxuICogdGhhdCB0aGUgYHNlbGVjdGAgb3BlcmF0aW9uIGNvbXBsZXRlZCB3aXRoIChlaXRoZXIgdGhlIHZhbHVlIHJlY2VpdmVkIGZyb21cbiAqIHRoZSBjaGFubmVsIGluIGEgcmVjZWl2ZSBvcGVyYXRpb24sIG9yIGB0cnVlYCBvciBgZmFsc2VgIGluIGEgc2VuZFxuICogb3BlcmF0aW9uKSwgYWxvbmcgd2l0aCB0aGUgY2hhbm5lbCB3aGVyZSB0aGUgb3BlcmF0aW9uIGFjdHVhbGx5IGhhcHBlbmVkLiBBbnlcbiAqIHJldHVybiB2YWx1ZSBmcm9tIHRoaXMgY2FsbGJhY2sgaXMgaWdub3JlZC5cbiAqXG4gKiBAY2FsbGJhY2sgU2VsZWN0Q2FsbGJhY2tcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuU2VsZWN0UmVzdWx0fSBkYXRhIFRoZSB2YWx1ZSByZXR1cm5lZCBmcm9tIHRoZSBzZWxlY3RcbiAqICAgICBvcGVyYXRpb24uXG4gKi9cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG4vKipcbiAqIFByb3ZpZGVzIHNldmVyYWwgdHlwZXMgb2YgYnVmZmVycyB1c2FibGUgaW4gYnVmZmVyZWQgY2hhbm5lbHMuIFRoZXNlIGFyZSBhbGxcbiAqIGJ1aWx0IG9uIGEgc21hbGwsIGVmZmljaWVudCBxdWV1ZSB3aGljaCBpcyBpbiB0dXJuIGJhY2tlZCBieSBhIEphdmFTY3JpcHRcbiAqIGFycmF5LlxuICpcbiAqIEBtb2R1bGUgYnVmZmVyXG4gKiBAcHJpdmF0ZVxuICovXG5cbmltcG9ydCB7IHF1ZXVlIGFzIHEsIGNvdW50IGFzIHFDb3VudCwgZW5xdWV1ZSwgZGVxdWV1ZSB9IGZyb20gXCJtb2R1bGVzL3F1ZXVlXCI7XG5cbi8qKlxuICogQSBidWZmZXIgdGhhdCBzdG9yZXMgdmFsdWVzIHNlbnQgdG8gYSBidWZmZXJlZCBjaGFubmVsIHVudGlsIGEgcHJvY2Vzc1xuICogcmVjZWl2ZXMgdGhlbS5cbiAqXG4gKiBEaWZmZXJlbnQgYnVmZmVycyBkaWZmZXIgb25seSBpbiB0aGUgd2F5IHRoYXQgdGhleSBkZXRlcm1pbmUgd2hldGhlciB0aGV5IGFyZVxuICogZnVsbCBhbmQgaW4gd2hhdCBoYXBwZW5zIHdoZW4gYSBuZXcgdmFsdWUgaXMgYWRkZWQgdG8gYSBmdWxsIGJ1ZmZlci5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICogQHR5cGVkZWYgeyhtb2R1bGU6Y3NwLkZpeGVkQnVmZmVyIHwgbW9kdWxlOmNzcC5Ecm9wcGluZ0J1ZmZlciB8XG4gKiAgICAgbW9kdWxlOmNzcC5TbGlkaW5nQnVmZmVyKX0gQnVmZmVyXG4gKi9cblxuLyoqXG4gKiBUaGUgbmFtZSBvZiBhIHByb3BlcnR5IHRoYXQgZXhpc3RzIG9uIGJ1ZmZlciBvYmplY3RzIGZvciB0aGUgcHVycG9zZSBvZlxuICogaXRlbnRpZnlpbmcgdGhlbSBhcyBidWZmZXIgb2JqZWN0cy5cbiAqXG4gKiBAdHlwZSB7U3ltYm9sfVxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgQlVGRkVSID0gU3ltYm9sKFwiQlVGRkVSXCIpO1xuXG4vKipcbiAqIEEgcG9zc2libGUgdmFsdWUgb2YgdGhlIGB7QGxpbmsgbW9kdWxlOmNzcC9idWZmZXIuQlVGRkVSfEJVRkZFUn0gcHJvcGVydHlcbiAqIGluZGljYXRpbmcgdGhhdCB0aGUgYnVmZmVyIGlzIGEgZml4ZWQgYnVmZmVyLlxuICpcbiAqIEB0eXBlIHtTeW1ib2x9XG4gKiBAcHJpdmF0ZVxuICovXG5jb25zdCBGSVhFRCA9IFN5bWJvbChcIkZJWEVEXCIpO1xuXG4vKipcbiAqIEEgcG9zc2libGUgdmFsdWUgb2YgdGhlIGB7QGxpbmsgbW9kdWxlOmNzcC9idWZmZXIuQlVGRkVSfEJVRkZFUn0gcHJvcGVydHlcbiAqIGluZGljYXRpbmcgdGhhdCB0aGUgYnVmZmVyIGlzIGEgZHJvcHBpbmcgYnVmZmVyLlxuICpcbiAqIEB0eXBlIHtTeW1ib2x9XG4gKiBAcHJpdmF0ZVxuICovXG5jb25zdCBEUk9QUElORyA9IFN5bWJvbChcIkRST1BQSU5HXCIpO1xuXG4vKipcbiAqIEEgcG9zc2libGUgdmFsdWUgb2YgdGhlIGB7QGxpbmsgbW9kdWxlOmNzcC9idWZmZXIuQlVGRkVSfEJVRkZFUn0gcHJvcGVydHlcbiAqIGluZGljYXRpbmcgdGhhdCB0aGUgYnVmZmVyIGlzIGEgc2xpZGluZyBidWZmZXIuXG4gKlxuICogQHR5cGUge1N5bWJvbH1cbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IFNMSURJTkcgPSBTeW1ib2woXCJTTElESU5HXCIpO1xuXG4vKipcbiAqIFByZWRpY2F0ZSBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIHN1cHBsaWVkIG9iamVjdCBpcyBhIGJ1ZmZlci5cbiAqXG4gKiBAcGFyYW0geyp9IG9iaiBUaGUgdmFsdWUgdG8gdGVzdCB0byBzZWUgaWYgaXQncyBhIGJ1ZmZlci5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IEVpdGhlciBgdHJ1ZWAgaWYgdGhlIHZhbHVlIGlzIGEgYnVmZmVyLCBvciBgZmFsc2VgIGlmIGl0IGlzXG4gKiAgICAgbm90LlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaXNCdWZmZXIob2JqKSB7XG4gIHJldHVybiAhIW9iaj8uW0JVRkZFUl07XG59XG5cbi8qKlxuICogQSBidWZmZXIgaW1wbGVtZW50YXRpb24gdGhhdCBuZXZlciBkaXNjYXJkcyBidWZmZXJlZCBpdGVtcyB3aGVuIGEgbmV3IGl0ZW0gaXNcbiAqIGFkZGVkLlxuICpcbiAqIFRoaXMgYnVmZmVyIGhhcyBhIGNvbmNlcHQgb2YgKmZ1bGwqLCBidXQgaXQncyBhIHNvZnQgbGltaXQuIElmIHRoZSBzaXplIG9mXG4gKiB0aGUgYnVmZmVyIGlzIGV4Y2VlZGVkLCBhZGRlZCBpdGVtcyBhcmUgc3RpbGwgc3RvcmVkLlxuICpcbiAqIEEgYnVmZmVyIG9mIHRoaXMgdHlwZSBleGlzdHMgb25seSBhcyBhbiBvYmplY3QgdGhhdCBjYW4gYmUgcGFzc2VkIHRvIGFcbiAqIGNoYW5uZWwgY3JlYXRpb24gZnVuY3Rpb24gKHN1Y2ggYXMge0BsaW5rIG1vZHVsZTpjc3AuY2hhbnxjaGFufSkgdG8gbWFrZSB0aGF0XG4gKiBjaGFubmVsIGEgYnVmZmVyZWQgY2hhbm5lbC4gSXQgZG9lc24ndCBoYXZlIGFueSBwcm9wZXJ0aWVzIHRoYXQgYXJlIGludGVuZGVkXG4gKiBmb3IgZXh0ZXJuYWwgdXNlLlxuICpcbiAqIEB0eXBlZGVmIEZpeGVkQnVmZmVyXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICovXG5cbi8qKlxuICogQ3JlYXRlcyBhIGZpeGVkIGJ1ZmZlciBvZiB0aGUgc3BlY2lmaWVkIGNhcGFjaXR5LlxuICpcbiAqIEEgZml4ZWQgYnVmZmVyIGlzIGEgJ25vcm1hbCcgYnVmZmVyLCBvbmUgdGhhdCBzdG9yZXMgYW5kIHJldHVybnMgaXRlbXMgb25cbiAqIGRlbWFuZC4gV2hpbGUgaXQgaXMgY2FwYWJsZSBvZiBiZWluZyBvdmVyLWZpbGxlZCwgdGhhdCBhYmlsaXR5IGlzIG5vdCB1c2VkIGluXG4gKiBDaGFua28uIEEgYnVmZmVyIHRoYXQgaXMgZnVsbCB3aWxsIGNhdXNlIHRoZSBuZXh0IHB1dCB0byBpdHMgY2hhbm5lbCB0byBibG9ja1xuICogdW50aWwgYXQgbGVhc3Qgb25lIGl0ZW0gaXMgcmVtb3ZlZCBmcm9tIHRoZSBidWZmZXIuXG4gKlxuICogVGhpcyBidWZmZXIgaXMgcGFzc2VkIHRvIGB7QGxpbmsgbW9kdWxlOmNzcC5jaGFufGNoYW59YCwgZXRjLiB0byBjcmVhdGUgYVxuICogYnVmZmVyZWQgY2hhbm5lbC4gSXQgaXMgbm90IG1lYW50IHRvIGJlIHVzZWQgZGlyZWN0bHkuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqIEBwYXJhbSB7bnVtYmVyfSBzaXplIFRoZSBudW1iZXIgb2YgaXRlbXMgdGhhdCB0aGUgbmV3IGJ1ZmZlciBjYW4gaG9sZCBiZWZvcmVcbiAqICAgICBpdCdzIGZ1bGwuXG4gKiBAcmV0dXJuIHttb2R1bGU6Y3NwLkZpeGVkQnVmZmVyfSBBIG5ldyBmaXhlZCBidWZmZXIgb2YgdGhlIHNwZWNpZmllZFxuICogICAgIGNhcGFjaXR5LlxuICovXG5mdW5jdGlvbiBmaXhlZChzaXplKSB7XG4gIHJldHVybiBPYmplY3QuY3JlYXRlKG51bGwsIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcXVldWUgYmFja2luZyB0aGlzIGJ1ZmZlci5cbiAgICAgKlxuICAgICAqIEB0eXBlIHttb2R1bGU6Y3NwL3F1ZXVlflF1ZXVlfVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgcXVldWU6IHtcbiAgICAgIHZhbHVlOiBxKClcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIG51bWJlciBvZiBpdGVtcyB0aGF0IHRoaXMgcXVldWUgY2FuIGhvbGQgYmVmb3JlIGl0J3MgY29uc2lkZXJlZCBmdWxsLlxuICAgICAqXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHNpemU6IHtcbiAgICAgIHZhbHVlOiBzaXplXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEEgbWFya2VyIHByb3BlcnR5IHVzZWQgdG8gc2hvdyB0aGF0IHRoaXMgaXMgYSBmaXhlZCBidWZmZXIuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7U3ltYm9sfVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgW0JVRkZFUl06IHtcbiAgICAgIHZhbHVlOiBGSVhFRFxuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxuICogQSBidWZmZXIgaW1wbGVtZW50YXRpb24gdGhhdCBkcm9wcyBuZXdseSBhZGRlZCBpdGVtcyB3aGVuIHRoZSBidWZmZXIgaXMgZnVsbC5cbiAqXG4gKiBUaGlzIGRyb3BwaW5nIGJlaGF2aW9yIGlzIHNpbGVudDogdGhlIG5ldyBpdGVtIGlzIHNpbXBseSBub3QgYWRkZWQgdG8gdGhlXG4gKiBxdWV1ZS4gTm90ZSB0aGF0IHRoaXMgYnVmZmVyIGlzIG5ldmVyIGBmdWxsYCBiZWNhdXNlIGl0IGNhbiBhbHdheXMgYmUgYWRkZWRcbiAqIHRvIHdpdGhvdXQgZXhjZWVkaW5nIHRoZSBzaXplLCBldmVuIGlmIHRoYXQgJ2FkZGluZycgZG9lc24ndCByZXN1bHQgaW4gYSBuZXdcbiAqIGl0ZW0gYWN0dWFsbHkgYXBwZWFyaW5nIGluIHRoZSBidWZmZXIuXG4gKlxuICogQSBidWZmZXIgb2YgdGhpcyB0eXBlIGV4aXN0cyBvbmx5IGFzIGFuIG9iamVjdCB0aGF0IGNhbiBiZSBwYXNzZWQgdG8gYVxuICogY2hhbm5lbCBjcmVhdGlvbiBmdW5jdGlvbiAoc3VjaCBhcyB7QGxpbmsgbW9kdWxlOmNzcC5jaGFufGNoYW59KSB0byBtYWtlIHRoYXRcbiAqIGNoYW5uZWwgYSBidWZmZXJlZCBjaGFubmVsLiBJdCBkb2Vzbid0IGhhdmUgYW55IHByb3BlcnRpZXMgdGhhdCBhcmUgaW50ZW5kZWRcbiAqIGZvciBleHRlcm5hbCB1c2UuXG4gKlxuICogQHR5cGVkZWYgRHJvcHBpbmdCdWZmZXJcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIGEgZHJvcHBpbmcgYnVmZmVyIG9mIHRoZSBzcGVjaWZpZWQgY2FwYWNpdHkuXG4gKlxuICogQSBkcm9wcGluZyBidWZmZXIgc2lsZW50bHkgZHJvcHMgdGhlIGl0ZW0gYmVpbmcgYWRkZWQgaWYgdGhlIGJ1ZmZlciBpc1xuICogYWxyZWFkeSBhdCBjYXBhY2l0eS4gU2luY2UgYWRkaW5nIGEgbmV3IGl0ZW0gd2lsbCBhbHdheXMgJ3N1Y2NlZWQnIChldmVuIGlmXG4gKiBpdCBzdWNjZWVkcyBieSBqdXN0IGlnbm9yaW5nIHRoZSBhZGQpLCBpdCBpcyBuZXZlciBjb25zaWRlcmVkIGZ1bGwgYW5kXG4gKiB0aGVyZWZvcmUgYSBwdXQgdG8gYSBjaGFubmVsIGJ1ZmZlcmVkIGJ5IGEgZHJvcHBpbmcgYnVmZmVyIG5ldmVyIGJsb2Nrcy5cbiAqXG4gKiBUaGlzIGJ1ZmZlciBpcyBwYXNzZWQgdG8gYHtAbGluayBtb2R1bGU6Y3NwLmNoYW58Y2hhbn1gLCBldGMuIHRvIGNyZWF0ZSBhXG4gKiBidWZmZXJlZCBjaGFubmVsLiBJdCBpcyBub3QgbWVhbnQgdG8gYmUgdXNlZCBkaXJlY3RseS5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICogQHBhcmFtIHtudW1iZXJ9IHNpemUgVGhlIG51bWJlciBvZiBpdGVtcyB0aGF0IHRoZSBuZXcgYnVmZmVyIGNhbiBob2xkIGJlZm9yZVxuICogICAgIG5ld2VzdCBpdGVtcyBhcmUgZHJvcHBlZCBvbiBhZGQuXG4gKiBAcmV0dXJuIHttb2R1bGU6Y3NwLkRyb3BwaW5nQnVmZmVyfSBBIG5ldyBkcm9wcGluZyBidWZmZXIgb2YgdGhlIHNwZWNpZmllZFxuICogICAgIGNhcGFjaXR5LlxuICovXG5mdW5jdGlvbiBkcm9wcGluZyhzaXplKSB7XG4gIHJldHVybiBPYmplY3QuY3JlYXRlKG51bGwsIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcXVldWUgYmFja2luZyB0aGlzIGJ1ZmZlci5cbiAgICAgKlxuICAgICAqIEB0eXBlIHttb2R1bGU6Y3NwL3F1ZXVlflF1ZXVlfVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgcXVldWU6IHtcbiAgICAgIHZhbHVlOiBxKClcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIG51bWJlciBvZiBpdGVtcyB0aGF0IHRoaXMgcXVldWUgY2FuIGhvbGQgYmVmb3JlIGl0J3MgY29uc2lkZXJlZCBmdWxsLlxuICAgICAqXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHNpemU6IHtcbiAgICAgIHZhbHVlOiBzaXplXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEEgbWFya2VyIHByb3BlcnR5IHVzZWQgdG8gc2hvdyB0aGF0IHRoaXMgaXMgYSBkcm9wcGluZyBidWZmZXIuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7U3ltYm9sfVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgW0JVRkZFUl06IHtcbiAgICAgIHZhbHVlOiBEUk9QUElOR1xuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxuICogQSBidWZmZXIgaW1wbGVtZW50YXRpb24gdGhhdCBkcm9wcyB0aGUgb2xkZXN0IGl0ZW0gd2hlbiBhbiBpdGVtIGlzIGFkZGVkIHRvIGFcbiAqIGZ1bGwgYnVmZmVyLlxuICpcbiAqIFRoaXMgaXMgdmVyeSBzaW1pbGFyIHRvIHtAbGluayBtb2R1bGU6Y3NwLkRyb3BwaW5nQnVmZmVyfERyb3BwaW5nQnVmZmVyfTsgdGhlXG4gKiBvbmx5IGRpZmZlcmVuY2UgaXMgaW4gd2hhdCBoYXBwZW5zIHdoZW4gYW4gaXRlbSBpcyBhZGRlZC4gSW4gdGhpcyBidWZmZXIsIHRoZVxuICogbmV3IGl0ZW0gaXMgaW5kZWVkIGFkZGVkIHRvIHRoZSBidWZmZXIsIGJ1dCBpbiBvcmRlciB0byBrZWVwIHRoZSBjb3VudCBvZiB0aGVcbiAqIGJ1ZmZlciBhdCBvciBiZWxvdyBpdHMgc2l6ZSwgdGhlIG9sZGVzdCBpdGVtIGluIHRoZSBidWZmZXIgaXMgc2lsZW50bHlcbiAqIGRyb3BwZWQuXG4gKlxuICogQSBidWZmZXIgb2YgdGhpcyB0eXBlIGV4aXN0cyBvbmx5IGFzIGFuIG9iamVjdCB0aGF0IGNhbiBiZSBwYXNzZWQgdG8gYVxuICogY2hhbm5lbCBjcmVhdGlvbiBmdW5jdGlvbiAoc3VjaCBhcyB7QGxpbmsgbW9kdWxlOmNzcC5jaGFufGNoYW59KSB0byBtYWtlIHRoYXRcbiAqIGNoYW5uZWwgYSBidWZmZXJlZCBjaGFubmVsLiBJdCBkb2Vzbid0IGhhdmUgYW55IHByb3BlcnRpZXMgdGhhdCBhcmUgaW50ZW5kZWRcbiAqIGZvciBleHRlcm5hbCB1c2UuXG4gKlxuICogQHR5cGVkZWYgU2xpZGluZ0J1ZmZlclxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgYSBzbGlkaW5nIGJ1ZmZlciBvZiB0aGUgc3BlY2lmaWVkIGNhcGFjaXR5LlxuICpcbiAqIEEgc2xpZGluZyBidWZmZXIgZHJvcHMgdGhlIGZpcnN0LWFkZGVkIChvbGRlc3QpIGl0ZW0gYWxyZWFkeSBpbiB0aGUgYnVmZmVyIGlmXG4gKiBhIG5ldyBpdGVtIGlzIGFkZGVkIHdoZW4gdGhlIGJ1ZmZlciBpcyBhbHJlYWR5IGF0IGNhcGFjaXR5LiBTaW5jZSBpdCdzIGFsd2F5c1xuICogY2FwYWJsZSBvZiBoYXZpbmcgaXRlbXMgYWRkZWQgdG8gaXQsIGl0J3MgbmV2ZXIgY29uc2lkZXJlZCBmdWxsLCBhbmRcbiAqIHRoZXJlZm9yZSBhIHB1dCB0byBhIGNoYW5uZWwgYnVmZmVyZWQgYnkgYSBzbGlkaW5nIGJ1ZmZlciBuZXZlciBibG9ja3MuXG4gKlxuICogVGhpcyBidWZmZXIgaXMgcGFzc2VkIHRvIGB7QGxpbmsgbW9kdWxlOmNzcC5jaGFufGNoYW59YCwgZXRjLiB0byBjcmVhdGUgYVxuICogYnVmZmVyZWQgY2hhbm5lbC4gSXQgaXMgbm90IG1lYW50IHRvIGJlIHVzZWQgZGlyZWN0bHkuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqIEBwYXJhbSB7bnVtYmVyfSBzaXplIFRoZSBudW1iZXIgb2YgaXRlbXMgdGhhdCB0aGUgbmV3IGJ1ZmZlciBjYW4gaG9sZCBiZWZvcmVcbiAqICAgICBvbGRlc3QgaXRlbXMgYXJlIGRyb3BwZWQgb24gYWRkLlxuICogQHJldHVybiB7bW9kdWxlOmNzcC5TbGlkaW5nQnVmZmVyfSBBIG5ldyBzbGlkaW5nIGJ1ZmZlciBvZiB0aGUgc3BlY2lmaWVkXG4gKiAgICAgY2FwYWNpdHkuXG4gKi9cbmZ1bmN0aW9uIHNsaWRpbmcoc2l6ZSkge1xuICByZXR1cm4gT2JqZWN0LmNyZWF0ZShudWxsLCB7XG4gICAgLyoqXG4gICAgICogVGhlIHF1ZXVlIGJhY2tpbmcgdGhpcyBidWZmZXIuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7bW9kdWxlOmNzcC9xdWV1ZX5RdWV1ZX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHF1ZXVlOiB7XG4gICAgICB2YWx1ZTogcSgpXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBudW1iZXIgb2YgaXRlbXMgdGhhdCB0aGlzIHF1ZXVlIGNhbiBob2xkIGJlZm9yZSBpdCdzIGNvbnNpZGVyZWQgZnVsbC5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBzaXplOiB7XG4gICAgICB2YWx1ZTogc2l6ZVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBIG1hcmtlciBwcm9wZXJ0eSB1c2VkIHRvIHNob3cgdGhhdCB0aGlzIGlzIGEgc2xpZGluZyBidWZmZXIuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7U3ltYm9sfVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgW0JVRkZFUl06IHtcbiAgICAgIHZhbHVlOiBTTElESU5HXG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBxdWV1ZSB0aGF0IGJhY2tzIGEgYnVmZmVyLlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5CdWZmZXJ9IGJ1ZmZlciBUaGUgYnVmZmVyIHdob3NlIHF1ZXVlIGlzIHJldHVybmVkIGJ5IHRoaXNcbiAqICAgICBmdW5jdGlvbi5cbiAqIEByZXR1cm4ge21vZHVsZTpjc3AvcXVldWV+UXVldWV9IFRoZSBxdWV1ZSB0aGF0IGJhY2tzIHRoZSBzdXBwbGllZCBidWZmZXIuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBxdWV1ZShidWZmZXIpIHtcbiAgcmV0dXJuIGJ1ZmZlci5xdWV1ZTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBudW1iZXIgb2YgaXRlbXMgYSBidWZmZXIgY2FuIGhvbGQgYmVmb3JlIGl0J3MgZnVsbC5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuQnVmZmVyfSBidWZmZXIgVGhlIGJ1ZmZlciB3aG9zZSBzaXplIGlzIHJldHVybmVkIGJ5IHRoaXNcbiAqICAgICBmdW5jdGlvbi5cbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIHNpemUgb2YgdGhlIHN1cHBsaWVkIGJ1ZmZlci5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHNpemUoYnVmZmVyKSB7XG4gIHJldHVybiBidWZmZXIuc2l6ZTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBudW1iZXIgb2YgaXRlbXMgYSBidWZmZXIgaXMgY3VycmVudGx5IGhvbGRpbmcuXG4gKlxuICogQHBhcmFtIHttb2R1bGU6Y3NwLkJ1ZmZlcn0gYnVmZmVyIFRoZSBidWZmZXIgd2hvc2UgY3VycmVudCBjb3VudCBpcyByZXR1cm5lZFxuICogICAgIGJ5IHRoaXMgZnVuY3Rpb24uXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBudW1iZXIgb2YgaXRlbXMgdGhhdCB0aGUgc3VwcGxpZWQgYnVmZmVyIGlzIGhvbGRpbmcuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjb3VudChidWZmZXIpIHtcbiAgcmV0dXJuIHFDb3VudChidWZmZXIucXVldWUpO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhIGJ1ZmZlciBpcyBhdCBjYXBhY2l0eS5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuQnVmZmVyfSBidWZmZXIgVGhlIGJ1ZmZlciB3aG8ncyBiZWluZyBjaGVja2VkIHRvIHNlZSBpZlxuICogICAgIGl0J3MgYXQgY2FwYWNpdHkuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IEVpdGhlciBgdHJ1ZWAgaWYgdGhlIHN1cHBsaWVkIGJ1ZmZlciBpcyBmdWxsIG9yIGBmYWxzZWAgaWZcbiAqICAgICBpdCBpc24ndC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGlzRnVsbChidWZmZXIpIHtcbiAgcmV0dXJuIGJ1ZmZlcltCVUZGRVJdID09PSBGSVhFRCA/IHFDb3VudChidWZmZXIucXVldWUpID49IGJ1ZmZlci5zaXplIDogZmFsc2U7XG59XG5cbi8qKlxuICogQWRkcyBvbmUgb3IgbW9yZSBpdGVtcyB0byBhIGJ1ZmZlci5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuQnVmZmVyfSBidWZmZXIgVGhlIGJ1ZmZlciB3aGVyZSB0aGUgc3VwcGxpZWQgaXRlbXMgd2lsbCBiZVxuICogICAgIGFkZGVkLlxuICogQHBhcmFtIHsuLi4qfSBpdGVtcyBUaGUgdmFsdWVzIGJlaW5nIGFkZGVkIHRvIHRoZSBzdXBwbGllZCBidWZmZXIuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBhZGQoYnVmZmVyLCAuLi5pdGVtcykge1xuICBzd2l0Y2ggKGJ1ZmZlcltCVUZGRVJdKSB7XG4gICAgY2FzZSBGSVhFRDpcbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBpdGVtcykge1xuICAgICAgICBlbnF1ZXVlKGJ1ZmZlci5xdWV1ZSwgaXRlbSk7XG4gICAgICB9XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgRFJPUFBJTkc6XG4gICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgaXRlbXMpIHtcbiAgICAgICAgaWYgKGNvdW50KGJ1ZmZlcikgPCBzaXplKGJ1ZmZlcikpIHtcbiAgICAgICAgICBlbnF1ZXVlKGJ1ZmZlci5xdWV1ZSwgaXRlbSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBTTElESU5HOlxuICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGl0ZW1zKSB7XG4gICAgICAgIGlmIChjb3VudChidWZmZXIpID49IHNpemUoYnVmZmVyKSkge1xuICAgICAgICAgIGRlcXVldWUoYnVmZmVyLnF1ZXVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbnF1ZXVlKGJ1ZmZlci5xdWV1ZSwgaXRlbSk7XG4gICAgICB9XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm47XG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmVzIHRoZSBuZXh0IGl0ZW0gZnJvbSBhIHF1ZXVlIGFuZCByZXR1cm5zIGl0LlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5CdWZmZXJ9IGJ1ZmZlciBUaGUgYnVmZmVyIGZyb20gd2hpY2ggYW4gaXRlbSBpcyBiZWluZ1xuICogICAgIHJlbW92ZWQuXG4gKiBAcmV0dXJuIHsqfSBUaGUgaXRlbSB0aGF0IHdhcyByZW1vdmVkIGZyb20gdGhlIHN1cHBsaWVkIGJ1ZmZlci5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHJlbW92ZShidWZmZXIpIHtcbiAgcmV0dXJuIGRlcXVldWUoYnVmZmVyLnF1ZXVlKTtcbn1cblxuZXhwb3J0IHtcbiAgaXNCdWZmZXIsXG4gIGZpeGVkLFxuICBkcm9wcGluZyxcbiAgc2xpZGluZyxcbiAgcXVldWUsXG4gIHNpemUsXG4gIGNvdW50LFxuICBpc0Z1bGwsXG4gIGFkZCxcbiAgcmVtb3ZlXG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG5cbmltcG9ydCB7IHByb3RvY29scyBhcyBwIH0gZnJvbSBcIkBjaGFua28vY29yZVwiO1xuaW1wb3J0IHtcbiAgcXVldWUsXG4gIGRlcXVldWUsXG4gIEVNUFRZLFxuICBmaWx0ZXIsXG4gIGNvdW50IGFzIHFDb3VudCxcbiAgZW5xdWV1ZVxufSBmcm9tIFwibW9kdWxlcy9xdWV1ZVwiO1xuaW1wb3J0IHsgaXNGdWxsLCBjb3VudCwgcmVtb3ZlIH0gZnJvbSBcIm1vZHVsZXMvYnVmZmVyXCI7XG5pbXBvcnQgeyBkaXNwYXRjaCB9IGZyb20gXCJtb2R1bGVzL2Rpc3BhdGNoZXJcIjtcblxuLyoqXG4gKiBUaGUgbWF4aW11bSBudW1iZXIgb2YgZGlydHkgb3BlcmF0aW9ucyB0aGF0IGNhbiBiZSBxdWV1ZWQgb24gYSBjaGFubmVsIGJlZm9yZVxuICogYSBjbGVhbnVwIGlzIHRyaWdnZXJlZC5cbiAqXG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgTUFYX0RJUlRZID0gNjQ7XG5cbi8qKlxuICogVGhlIG1heGltdW0gbnVtYmVyIG9mIG9wZXJ0aW9ucyB0aGF0IGNhbiBiZSBxdWV1ZWQgb24gYSBjaGFubmVsIGJlZm9yZSBuZXdcbiAqIG9wZXJhdGlvbnMgYXJlIHJlamVjdGVkLlxuICpcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAcHJpdmF0ZVxuICovXG5jb25zdCBNQVhfUVVFVUVEID0gMTAyNDtcblxuLyoqXG4gKiAqaGUgdmFsdWUgcmV0dXJuZWQgZnJvbSBhIHJlY2VpdmUgb24gYSBjaGFubmVsIHdoZW4gdGhhdCBjaGFubmVsIGlzIGNsb3NlZFxuICogYW5kIGhhcyBubyBtb3JlIHZhbHVlcyBhdmFpbGFibGUuXG4gKlxuICogVGhpcyBpcyBhIHNwZWNpYWwgdmFsdWUgdGhhdCBpcyByZXR1cm5lZCB1bmRlciBhIGNlcnRhaW4gY2lyY3Vtc3RhbmNlLCBuYW1lbHlcbiAqIHdoZW4gYSByZWNlaXZlIGlzIHBlcmZvcm1lZCBvbiBhIGNsb3NlZCBjaGFubmVsLiBCZWNhdXNlIG9mIHRoYXQsIGl0IGNhbm5vdFxuICogYmUgcmV0dXJuZWQgZnJvbSBhIHJlY2VpdmUgb24gYW4gb3BlbiBjaGFubmVsLiBGb3IgdGhhdCByZWFzb24sIGBDTE9TRURgIGlzXG4gKiB0aGUgb25seSB2YWx1ZSB0aGF0IGNhbm5vdCBiZSBzZW50IG9udG8gYSBjaGFubmVsICZtZGFzaDsgaXQgd291bGQgYmVcbiAqIGltcG9zc2libGUgdG8gZGlzdGluZ3Vpc2ggYmV0d2VlbiBhIGxlZ2l0aW1hdGUgdmFsdWUgb2YgYENMT1NFRGAgYW5kIGFuXG4gKiBhY3R1YWwgY2xvc2VkIGNoYW5uZWwuXG4gKlxuICogQHR5cGUge1N5bWJvbH1cbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKi9cbmNvbnN0IENMT1NFRCA9IFN5bWJvbChcIkNMT1NFRFwiKTtcblxuLyoqXG4gKiBBIHVuaXF1ZSB2YWx1ZSB1c2VkIHRvIGluZGljYXRlIHRoYXQgYW4gb2JqZWN0IGlzIGEgYm94LlxuICpcbiAqIEB0eXBlIHtTeW1ib2x9XG4gKiBAcHJpdmF0ZVxuICovXG5jb25zdCBCT1ggPSBTeW1ib2woXCJCT1hcIik7XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGFuIG9iamVjdCBpcyBhIGJveC5cbiAqXG4gKiBAcGFyYW0geyp9IG9iaiBBIHZhbHVlIHRvIGNoZWNrIGZvciBib3hpbmVzcy5cbiAqIEByZXR1cm4gRWl0aGVyIGB0cnVlYCBpZiB0aGUgdmFsdWUgaXMgYSBib3ggb3IgYGZhbHNlYCBpZiBpdCBpc24ndC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGlzQm94KG9iaikge1xuICByZXR1cm4gISFvYmo/LltCT1hdO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhbiBvYmplY3QgaXMgcmVkdWNlZC4gVGhpcyBpcyBkb25lIHVzaW5nIHRoZSB0cmFuc2R1Y2VyXG4gKiBwcm90b2NvbDsgYW4gb2JqZWN0IHdpdGggdGhlIHByb3RvY29sLXNwZWNpZmllZCBgcmVkdWNlZGAgcHJvcGVydHkgaXMgYXNzdW1lZFxuICogdG8gYmUgcmVkdWNlZC4gSWYgYSByZXN1bHQgb2YgYSB0cmFuc2Zvcm1hdGlvbiBpcyByZWR1Y2VkLCBpdCBtZWFucyB0aGF0IHRoZVxuICogdHJhbnNmb3JtYXRpb24gaXMgY29tcGxldGUgYW5kIHRoZSBjaGFubmVsIHNob3VsZCBiZSBjbG9zZWQuXG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgYmVpbmcgY2hlY2tlZCBmb3IgcmVkdWN0aW9uLlxuICogQHJldHVybiB7Ym9vbGVhbn0gRWl0aGVyIGB0cnVlYCBpZiB0aGUgdmFsdWUgaGFzIGJlZW4gcmVkdWNlZCwgb3IgYGZhbHNlYCBpZlxuICogICAgIGl0IGhhcyBub3QgYmVlbi5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGlzUmVkdWNlZCh2YWx1ZSkge1xuICByZXR1cm4gISF2YWx1ZT8uW3AucmVkdWNlZF07XG59XG5cbi8qKlxuICogQSB3cmFwcGVyIGFyb3VuZCBhIHZhbHVlLiBUaGlzIGlzIHByaW1hcmlseSB1c2VkIGFzIGEgbWFya2VyOyBhIHB1dCBvciB0YWtlXG4gKiByZXR1cm5pbmcgYSBCb3ggaW5kaWNhdGVzIHRoYXQgdGhlIHB1dCBvciB0YWtlIGhhcyByZXR1cm5lZCBhbiBpbW1lZGlhdGVcbiAqIHZhbHVlLCB3aGlsZSByZXR1cm5pbmcgYG51bGxgIGluZGljYXRlcyB0aGF0IHRoZSBvcGVyYXRpb24gaGFzIGJlZW4gcXVldWVkLlxuICpcbiAqIEB0eXBlZGVmIEJveFxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3AvY2hhbm5lbFxuICogQHByb3BlcnR5IHsqfSB2YWx1ZSBUaGUgdmFsdWUgYmVpbmcgd3JhcHBlZCBieSB0aGUgYm94LlxuICogQHByaXZhdGVcbiAqL1xuXG4vKipcbiAqIEEgd3JhcHBlciBvYmplY3QgZm9yIGEgdmFsdWUuIFRoaXMgaXMgdXNlZCBhbG1vc3QgZW50aXJlbHkgYXMgYSBtYXJrZXJcbiAqIGludGVyZmFjZSwgdGhvdWdoIHRoZSBmYWN0IHRoYXQgaXQgYmVjb21lcyBhIHBhcmFtZXRlciB0aGF0J3MgcGFzc2VkIGJ5XG4gKiByZWZlcmVuY2UgcmF0aGVyIHRoYW4gdmFsdWUgaXMgYWxzbyBpbXBvcnRhbnQgaW4gYSBjb3VwbGUgcGxhY2VzLiBJZiBhXG4gKiBjaGFubmVsIG9wZXJhdGlvbiAocHV0IG9yIHRha2UpIHJldHVybnMgYSBCb3gsIGl0IG1lYW5zIHRoYXQgYW4gYWN0dWFsIHZhbHVlXG4gKiB3YXMgcmV0dXJuZWQuIEEgbm9uLUJveCAod2hpY2ggYWx3YXlzIGhhcHBlbnMgdG8gYmUgYG51bGxgKSBtZWFucyB0aGF0IHRoZVxuICogb3BlcmF0aW9uIG11c3QgYmxvY2suXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3AvY2hhbm5lbFxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gYm94LlxuICogQHJldHVybiB7bW9kdWxlOmNzcC9jaGFubmVsLkJveH0gVGhlIGJveGVkIHZhbHVlLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gYm94KHZhbHVlKSB7XG4gIHJldHVybiBPYmplY3QuY3JlYXRlKG51bGwsIHtcbiAgICB2YWx1ZToge1xuICAgICAgdmFsdWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0sXG4gICAgW0JPWF06IHtcbiAgICAgIHZhbHVlOiB0cnVlXG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBBIHdyYXBwZXIgYXJvdW5kIGEgdmFsdWUuIFRoaXMgaXMgbXVjaCBsaWtlXG4gKiB7QGxpbmsgbW9kdWxlOmNzcC9jaGFubmVsLkJveHxCb3h9IGV4Y2VwdCB0aGF0IGl0IGFsc28gY2FycmllcyBhIGhhbmRsZXIgdG9cbiAqIGJlIHVzZWQgd2hlbiBhIHNlbnQgdmFsdWUgaXMgcmVjZWl2ZWQuIEl0IGlzIHNwZWNpZmljYWxseSBmb3IgcXVldWVpbmcgc2VuZHMuXG4gKlxuICogQHR5cGVkZWYgU2VuZEJveFxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3AvY2hhbm5lbFxuICogQHByb3BlcnR5IHsqfSB2YWx1ZSBUaGUgdmFsdWUgYmVpbmcgd3JhcHBlZCBieSB0aGlzIGJveC5cbiAqIEBwcm9wZXJ0eSB7bW9kdWxlOmNzcC9jaGFubmVsLkhhbmRsZXJ9IGhhbmRsZXIgVGhlIGhhbmRsZXIgdXNlZCB0byBwcm9jZXNzIGFcbiAqICAgICBzZW5kIHJlcXVlc3QgZm9yIHRoZSB2YWx1ZS5cbiAqIEBwcml2YXRlXG4gKi9cblxuLyoqXG4gKiBBIGJveCB1c2VkIHRvIHdyYXAgYSB2YWx1ZSBiZWluZyBzZW50IG9udG8gYSBjaGFubmVsLiBUaGlzIGlzIGRpZmZlcmVudCBmcm9tXG4gKiBhIHJlZ3VsYXIgYm94IGluIHRoYXQgdGhlIHNlbmQgaGFuZGxlciBpcyBhbHNvIGluY2x1ZGVkLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwL2NoYW5uZWxcbiAqIEBwYXJhbSAge09iamVjdH0gaGFuZGxlciBUaGUgaGFuZGxlciB1c2VkIHRvIHByb2Nlc3MgYSBzZW5kIHJlcXVlc3QgZm9yIHRoZVxuICogICAgIHZhbHVlLlxuICogQHBhcmFtICB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGJveC5cbiAqIEByZXR1cm4ge21vZHVsZTpjc3AvY2hhbm5lbC5TZW5kQm94fSBUaGUgYm94ZWQgdmFsdWUuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBzZW5kQm94KHZhbHVlLCBoYW5kbGVyKSB7XG4gIHJldHVybiBPYmplY3QuY3JlYXRlKG51bGwsIHtcbiAgICB2YWx1ZToge1xuICAgICAgdmFsdWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0sXG4gICAgaGFuZGxlcjoge1xuICAgICAgdmFsdWU6IGhhbmRsZXJcbiAgICB9LFxuICAgIFtCT1hdOiB7XG4gICAgICB2YWx1ZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxuICogQSBjaGFubmVsLCB1c2VkIGJ5IHByb2Nlc3NlcyB0byBjb21tdW5pY2F0ZSB3aXRoIG9uZSBhbm90aGVyLlxuICpcbiAqIEZvciBlYWNoIG9wZXJhdGlvbiwgdGhlIGNoYW5uZWwgZmlyc3QgdGVzdHMgdG8gc2VlIGlmIHRoZXJlJ3MgYSBjb3JyZXNwb25kaW5nXG4gKiBvcGVyYXRpb24gYWxyZWFkeSBxdWV1ZWQgKGkuZS4sIGlmIHdlJ3JlIGRvaW5nIGEgYHNlbmRgIHRoYXQgdGhlcmUncyBhIHF1ZXVlZFxuICogYHJlY3ZgIGFuZCB2aWNlIHZlcnNhKS4gSWYgdGhlcmUgaXMsIHRoYXQgY29ycmVzcG9uZGluZyBvcGVyYXRpb24gaXNcbiAqIHVuYmxvY2tlZCBhbmQgYm90aCBvcGVyYXRpb25zIGNvbXBsZXRlLiBJZiBub3QsIHRoZSBvcGVyYXRpb24gaXMgcXVldWVkIHRvXG4gKiB3YWl0IGZvciBhIGNvcnJlc3BvbmRpbmcgb3BlcmF0aW9uLiBUaGUgcHJvY2VzcyBvciB0aGF0IGNyZWF0ZWQgdGhlIG9wZXJhdGlvblxuICogdGhlbiBibG9ja3MuXG4gKlxuICogVGhlIGNoYW5uZWwgY2FuIGJlIGJhY2tlZCBieSBhIGJ1ZmZlciwgdGhvdWdoIGl0IGlzIG5vdCBieSBkZWZhdWx0LiBJZiBhXG4gKiBidWZmZXIgaXMgaW4gcGxhY2UsIGFuZCB0aGF0IGJ1ZmZlciBpcyBub3QgZnVsbCwgdGhlbiB0aGUgcHJvY2VzcyB0aGF0XG4gKiBjcmVhdGVkIGFuIG9wZXJhdGlvbiB0aGF0IGhhcyB0byBiZSBxdWV1ZWQgaXMgKm5vdCogYmxvY2tlZC5cbiAqXG4gKiBUaGlzIGNoYW5uZWwgb2JqZWN0IHN1cHBvcnRzIHRyYW5zZm9ybWF0aW9ucywgYXNzdW1pbmcgdGhhdCB0aGV5IGZvbGxvdyB0aGVcbiAqIHByb3RvY29sIGNyZWF0ZWQgYnkgYSBmZXcgdHJhbnNkdWNlciBsaWJyYXJ5IGF1dGhvcnMgdG8gYWxsb3cgdGhlbSB0b1xuICogaW50ZXJvcGVyYXRlLiBUaGUgc3VwcG9ydCBtdXN0IGJlIGV4cGxpY2l0bHkgY3JlYXRlZCBiZWNhdXNlIHRoZSBub3JtYWxcbiAqIG1ldGhvZCBvZiBtYWtpbmcgYW4gb2JqZWN0IHN1cHBvcnQgdHJhbnNmb3JtYXRpb25zIHdvbid0IHdvcmsgaGVyZS4gVGhpc1xuICogbWV0aG9kIGlzIHRvIGNyZWF0ZSBhIG5ldyBvYmplY3QgYW5kIGFkZCB0aGUgdHJhbnNmb3JtZWQgdmFsdWVzIHRvIGl0IC0gYnV0XG4gKiBmb3IgYSBjaGFubmVsLCB3ZSBuZWVkIHRvIHJlcGxhY2UgdGhlIHZhbHVlcyBvbiB0aGUgY2hhbm5lbCB3aXRoIHRoZWlyXG4gKiB0cmFuc2Zvcm1lZCB2YWx1ZXMsIGluIHRoZSBzYW1lIG9yZGVyIGV2ZW4gaW4gYSBtdWx0aS1wcm9jZXNzIGVudmlyb25tZW50LlxuICogVGh1cyB0cmFuc2Zvcm1hdGlvbnMgaGFwcGVuIGluIHBsYWNlLlxuICpcbiAqIFRyYW5zZm9ybWF0aW9ucyBhcmUgYXBwbGllZCBiZWZvcmUgdGhlIHZhbHVlIGlzIHF1ZXVlZCwgc28gZXZlbiBpZiB0aGVyZSBpcyBhXG4gKiBjb3JyZXNwb25kaW5nIG9wZXJhdGlvbiByZWFkeSB0byBnbywgdGhlIHRyYW5zZm9ybWF0aW9uIHN0aWxsIGhhcHBlbnMuIEFsc28sXG4gKiB0cmFuc2Zvcm1hdGlvbnMgcmVxdWlyZSB0aGF0IHRoZSBjaGFubmVsIGJlIGJ1ZmZlcmVkICh0aGlzIGJ1ZmZlciBpcyB3aGF0IGlzXG4gKiBzZW50IHRvIHRoZSB0cmFuc2Zvcm1lcidzIHJlZHVjdGlvbiBzdGVwIGZ1bmN0aW9uKTsgdHJ5aW5nIHRvIGNyZWF0ZSBhXG4gKiBjaGFubmVsIHdpdGggYSB0cmFuc2Zvcm1lciBidXQgd2l0aG91dCBhIGJ1ZmZlciB3aWxsIHJlc3VsdCBpbiBhbiBlcnJvciBiZWluZ1xuICogdGhyb3duLlxuICpcbiAqIFRoaXMgaXMgdGhlIG9iamVjdCB0aGF0IGlzIHJldHVybmVkIGZyb20gYSBjYWxsIHRvXG4gKiBge0BsaW5rIG1vZHVsZTpjc3AuY2hhbnxjaGFufWAuIEhvd2V2ZXIsIHRoaXMgb2JqZWN0IGlzIGludGVuZGVkIHRvIGJlIHVzZWRcbiAqIGFzIGEgdmFsdWUgdG8gcGFzcyB0byBjaGFubmVsIG9wZXJhdGlvbiBmdW5jdGlvbnM7IGl0IGRvZXNuJ3QgaGF2ZSBhbnlcbiAqIHByb3BlcnRpZXMgb2YgaW50ZXJlc3QgdG8gYW4gZW5kIHVzZXIuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqIEB0eXBlZGVmIENoYW5uZWxcbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjaGFubmVsLiBUaGlzIGlzIGEgbG93LWxldmVsIGZ1bmN0aW9uO1xuICogYHtAbGluayBtb2R1bGU6Y3NwLmNoYW58Y2hhbn1gIHBlcmZvcm1zIHNvbWUgbmVjZXNzYXJ5IG1hbmlwdWxhdGlvbnMgb25cbiAqIGFyZ3VtZW50cyBiZWZvcmUgdXNpbmcgdGhpcyBmdW5jdGlvbiB0byBwZXJmb3JtIHRoZSBhY3R1YWwgY3JlYXRpb24uXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3AvY2hhbm5lbFxuICogQHBhcmFtIHtudWxsIHwgbW9kdWxlOmNzcC5CdWZmZXJ9IGJ1ZmZlciBBbiBvcHRpb25hbCBidWZmZXIgdGhhdCwgaWYgcHJlc2VudCxcbiAqICAgICBpcyB1c2VkIHRvIGNyZWF0ZSBhIGJ1ZmZlcmVkIGNoYW5uZWwuIElmIHRoaXMgaXMgYG51bGxgLCBhbiB1bmJ1ZmZlcmVkXG4gKiAgICAgY2hhbm5lbCBpcyBjcmVhdGVkLlxuICogQHBhcmFtIHttb2R1bGU6Y29yZS5UcmFuc2R1Y2VyRnVuY3Rpb259IHhmb3JtIFRoZSB0cmFuc2R1Y2VyIHVzZWQgdG9cbiAqICAgICB0cmFuc2Zvcm0gdmFsdWVzIHNlbnQgdG8gdGhlIGNoYW5uZWwuIElmIG5vIHRyYW5zZm9ybWF0aW9ucyBhcmVcbiAqICAgICBuZWNlc3NhcnksIGEgcGFzc3Rocm91Z2ggdHJhbnNkdWNlciBzaG91bGQgYmUgcHJvdmlkZWQuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGlzVGltZWQgSW5kaWNhdGVzIHdoZXRoZXIgdGhlIGNoYW5uZWwgaXMgYSB0aW1lZCBjaGFubmVsLlxuICogICAgIFRoZSB0aW1pbmluZyBtZWNoYW5pc20gaXMgaGFuZGxlZCBvdXRzaWRlIHRoZSBjaGFubmVsLCBidXQgdGhpcyBwcm9wZXJ0eVxuICogICAgIGlzIHByb3ZpZGVkIHRvIGJlIGFibGUgdG8gcXVlcnkgd2hldGhlciB0aGF0J3MgdGhlIGNhc2UuXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4RGlydHk9NjQgVGhlIG1heGltdW0gbnVtYmVyIG9mIGRpcnR5IG9wZXJhdGlvbnMgdG8gYWxsb3dcbiAqICAgICBiZWZvcmUgdGhleSdyZSBwdXJnZWQuXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4UXVldWVkPTEwMjQgVGhlIG1heGltdW0gbnVtYmVyIG9mIG9wZXJhdGlvbnMgdGhhdCBjYW4gYmVcbiAqICAgICBxdWV1ZWQgYmVmb3JlIG5ldyBvbmVzIGFyZSByZWplY3RlZC5cbiAqIEByZXR1cm4ge21vZHVsZTpjc3AuQ2hhbm5lbH0gQSBuZXcgY2hhbm5lbC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNoYW5uZWwoXG4gIGJ1ZmZlcixcbiAgeGZvcm0sXG4gIGlzVGltZWQgPSBmYWxzZSxcbiAgbWF4RGlydHkgPSBNQVhfRElSVFksXG4gIG1heFF1ZXVlZCA9IE1BWF9RVUVVRURcbikge1xuICByZXR1cm4gT2JqZWN0LmNyZWF0ZShudWxsLCB7XG4gICAgYnVmZmVyOiB7XG4gICAgICB2YWx1ZTogYnVmZmVyXG4gICAgfSxcbiAgICB4Zm9ybToge1xuICAgICAgdmFsdWU6IHhmb3JtXG4gICAgfSxcbiAgICBtYXhEaXJ0eToge1xuICAgICAgdmFsdWU6IG1heERpcnR5XG4gICAgfSxcbiAgICBtYXhRdWV1ZWQ6IHtcbiAgICAgIHZhbHVlOiBtYXhRdWV1ZWRcbiAgICB9LFxuICAgIHJlY3ZzOiB7XG4gICAgICB2YWx1ZTogcXVldWUoKVxuICAgIH0sXG4gICAgc2VuZHM6IHtcbiAgICAgIHZhbHVlOiBxdWV1ZSgpXG4gICAgfSxcbiAgICBkaXJ0eVJlY3ZzOiB7XG4gICAgICB2YWx1ZTogMCxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSxcbiAgICBkaXJ0eVNlbmRzOiB7XG4gICAgICB2YWx1ZTogMCxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSxcbiAgICBjbG9zZWQ6IHtcbiAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSxcbiAgICBpc0J1ZmZlcmVkOiB7XG4gICAgICB2YWx1ZTogISFidWZmZXJcbiAgICB9LFxuICAgIGlzVGltZWQ6IHtcbiAgICAgIHZhbHVlOiBpc1RpbWVkXG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBTZW5kcyBhIHZhbHVlIHRvIGEgY2hhbm5lbC4gVGhlIHNwZWNpZmllZCBoYW5kbGVyIGlzIHVzZWQgdG8gY29udHJvbCB3aGV0aGVyXG4gKiB0aGUgc2VuZCBpcyBhY3RpdmUgYW5kIHdoYXQgdG8gZG8gYWZ0ZXIgdGhlIHNlbmQgY29tcGxldGVzLiBBIHNlbmQgY2FuIGJlY29tZVxuICogaW5hY3RpdmUgaWYgaXQgd2FzIHBhcnQgb2YgYW4gYHNlbGVjdGAgY2FsbCBhbmQgc29tZSBvdGhlciBvcGVyYXRpb25cbiAqIHNwZWNpZmllZCBpbiB0aGF0IGNhbGwgaGFzIGFscmVhZHkgY29tcGxldGVkLlxuICpcbiAqIFRoaXMgdmFsdWUgaXMgZ2l2ZW4gdG8gYSByZWNlaXZlIGhhbmRsZXIgaW1tZWRpYXRlbHkgaWYgdGhlcmUncyBvbmUgd2FpdGluZy5cbiAqIE90aGVyd2lzZSB0aGUgdmFsdWUgYW5kIGhhbmRsZXIgYXJlIHF1ZXVlZCB0b2dldGhlciB0byB3YWl0IGZvciBhIHJlY2VpdmUuXG4gKlxuICogVGhpcyBpcyBhIGxvdy1sZXZlbCBvcGVyYXRpb24gdGhhdCdzIHByb3ZpZGVkIGFzIGEgcGFydCBvZiB0aGUgY2hhbm5lbFxuICogaW1wbGVtZW50YXRpb24gc28gdGhhdCBvdGhlciBvcGVyYXRpb25zIGZ1bmN0aW9ucyBjYW4gcHJvcGVybHkgYXBwbHlcbiAqIGhhbmRsZXJzLiBJdCBpcyBub3QgbWVhbnQgZm9yIGdlbmVyYWwgdXNlLiBVc2UgdGhvc2Ugb3RoZXIgb3BlcmF0aW9uc1xuICogZnVuY3Rpb25zIGluc3RlYWQuXG4gKlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwL2NoYW5uZWxcbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5DaGFubmVsfSBjaGFubmVsIFRoZSBjaGFubmVsIHRoYXQgdGhlIHZhbHVlIGlzIGJlaW5nIHNlbnRcbiAqICAgICB0by5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGJlIHB1dCBvbnRvIHRoZSBjaGFubmVsLlxuICogQHBhcmFtIHtib29sZWFufSBoYW5kbGVyLmFjdGl2ZSBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHNlbmQgaXMgc3RpbGwgYWN0aXZlXG4gKiAgICAgYW5kIHNob3VsZCBzdGlsbCBiZSBzZXJ2aWNlZC5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGhhbmRsZXIuY29tbWl0IERlYWN0aXZhdGVzIHRoZSBzZW5kIChzbyBpdCBjYW4ndCBiZVxuICogICAgIHNlcnZpY2VkIGEgc2Vjb25kIHRpbWUpIGFuZCByZXR1cm5zIHRoZSBjYWxsYmFjayB0byBiZSBmaXJlZCB3aGVuIHRoZVxuICogICAgIHNlbmQgY29tcGxldGVzLlxuICogQHJldHVybiB7bW9kdWxlOmNzcC9jaGFubmVsLkJveHxudWxsfSBPbmUgb2YgdGhyZWUgdmFsdWVzLiBBIGJveGVkIGB0cnVlYCBpc1xuICogICAgIHJldHVybmVkIGlmIHRoZSBzZW5kIHdhcyBpbW1lZGlhdGVseSBjb25zdW1lZCBieSBhIHBlbmRpbmcgcmVjZWl2ZS4gQVxuICogICAgIGJveGVkIGBmYWxzZWAgaXMgcmV0dXJuZWQgaWYgdGhlIHNlbmQgd2FzIHBlcmZvcm1lZCBvbiBhIGNoYW5uZWwgdGhhdCB3YXNcbiAqICAgICBhbHJlYWR5IGNsb3NlZCBieSB0aGUgdGltZSB0aGUgc2VuZCB0b29rIHBsYWNlLiBgbnVsbGAgaXMgcmV0dXJuZWQgaWYgdGhlXG4gKiAgICAgc2VuZCB3YXMgcXVldWVkIHBlbmRpbmcgYSBjb3JyZXNwb25kaW5nIHJlY2VpdmUuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBoYW5kbGVTZW5kKGNoYW5uZWwsIHZhbHVlLCBoYW5kbGVyKSB7XG4gIGlmICh2YWx1ZSA9PT0gQ0xPU0VEKSB7XG4gICAgdGhyb3cgRXJyb3IoXCJDYW5ub3Qgc2VuZCBDTE9TRUQgdG8gYSBjaGFubmVsXCIpO1xuICB9XG5cbiAgaWYgKGNoYW5uZWwuY2xvc2VkKSB7XG4gICAgaGFuZGxlci5jb21taXQoKTtcbiAgICByZXR1cm4gYm94KGZhbHNlKTtcbiAgfVxuXG4gIGxldCByZWNlaXZlciwgY2FsbGJhY2s7XG5cbiAgLy8gUHVzaCB0aGUgaW5jb21pbmcgdmFsdWUgdGhyb3VnaCB0aGUgYnVmZmVyLCBldmVuIGlmIHRoZXJlJ3MgYWxyZWFkeSBhXG4gIC8vIHJlY2VpdmVyIHdhaXRpbmcgZm9yIHRoZSB2YWx1ZS4gVGhpcyBpcyB0byBtYWtlIHN1cmUgdGhhdCB0aGUgdHJhbnNkdWNlclxuICAvLyBzdGVwIGZ1bmN0aW9uIGhhcyBhIGNoYW5jZSB0byBhY3Qgb24gdGhlIHZhbHVlIGZpcnN0LCB3aGljaCBjb3VsZCBjaGFuZ2VcbiAgLy8gdGhlIHZhbHVlIG9yIG1ha2UgaXQgYWx0b2dldGhlciB1bmF2YWlsYWJsZS5cbiAgLy9cbiAgLy8gSWYgdGhlIGNoYW5uZWwgaXMgdW5idWZmZXJlZCB0aGlzIHByb2Nlc3MgaXMgc2tpcHBlZCAodGhlcmUgY2FuJ3QgYmUgYVxuICAvLyB0cmFuc2R1Y2VyIG9uIGFuIHVuYnVmZmVyZWQgY2hhbm5lbCBhbnl3YXkpLiBJZiB0aGUgYnVmZmVyIGlzIGZ1bGwsIHRoZVxuICAvLyB0cmFuc2R1Y2VyJ3Mgd29yayBpcyBkZWZlcnJlZCB1bnRpbCBsYXRlciB3aGVuIHRoZSBidWZmZXIgaXMgbm90IGZ1bGwuXG4gIGlmIChjaGFubmVsLmJ1ZmZlciAmJiAhaXNGdWxsKGNoYW5uZWwuYnVmZmVyKSkge1xuICAgIGhhbmRsZXIuY29tbWl0KCk7XG4gICAgY29uc3QgZG9uZSA9IGlzUmVkdWNlZChjaGFubmVsLnhmb3JtW3Auc3RlcF0oY2hhbm5lbC5idWZmZXIsIHZhbHVlKSk7XG5cbiAgICBmb3IgKDs7KSB7XG4gICAgICBpZiAoY291bnQoY2hhbm5lbC5idWZmZXIpID09PSAwKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgcmVjZWl2ZXIgPSBkZXF1ZXVlKGNoYW5uZWwucmVjdnMpO1xuICAgICAgaWYgKHJlY2VpdmVyID09PSBFTVBUWSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGlmIChyZWNlaXZlci5hY3RpdmUpIHtcbiAgICAgICAgY2FsbGJhY2sgPSByZWNlaXZlci5jb21taXQoKTtcbiAgICAgICAgY29uc3QgdmFsID0gcmVtb3ZlKGNoYW5uZWwuYnVmZmVyKTtcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgZGlzcGF0Y2goKCkgPT4gY2FsbGJhY2sodmFsKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZG9uZSkge1xuICAgICAgY2xvc2UoY2hhbm5lbCk7XG4gICAgfVxuICAgIHJldHVybiBib3godHJ1ZSk7XG4gIH1cblxuICAvLyBUaGlzIGxvb3AgaGFwcGVucyBpZiB0aGUgY2hhbm5lbCBpcyB1bmJ1ZmZlcmVkIGFuZCB0aGVyZSBpcyBhdCBsZWFzdCBvbmVcbiAgLy8gcGVuZGluZyByZWNlaXZlLiAoQnVmZmVyZWQgY2hhbm5lbHMgYnJlYWsgb3V0IG9mIHRoaXMgbG9vcCBpbW1lZGlhdGVseSxcbiAgLy8gYmVjYXVzZSBpbiBvcmRlciBmb3IgYSBidWZmZXJlZCBjaGFubmVsIHRvIHJlYWNoIHRoaXMgcG9pbnQsIGl0cyBidWZmZXJcbiAgLy8gbXVzdCBoYXZlIGJlZW4gZnVsbC4gSWYgdGhlIGJ1ZmZlciBpcyBmdWxsLCB0aGF0IG1lYW5zIHRoZXJlIGFyZSBubyBwZW5kaW5nXG4gIC8vIHJlY2VpdmVzIGFuZCB0aGUgZmlyc3Qgb25lIHJlYWQgd2lsbCBiZSBFTVBUWS4pIEl0IHByb2Nlc3NlcyB0aGUgbmV4dFxuICAvLyBwZW5kaW5nIHJlY2VpdmUgaW1tZWRpYXRlbHkuXG4gIGZvciAoOzspIHtcbiAgICByZWNlaXZlciA9IGRlcXVldWUoY2hhbm5lbC5yZWN2cyk7XG4gICAgaWYgKHJlY2VpdmVyID09PSBFTVBUWSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGlmIChyZWNlaXZlci5hY3RpdmUpIHtcbiAgICAgIGhhbmRsZXIuY29tbWl0KCk7XG4gICAgICBjYWxsYmFjayA9IHJlY2VpdmVyLmNvbW1pdCgpO1xuICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIGRpc3BhdGNoKCgpID0+IGNhbGxiYWNrKHZhbHVlKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gYm94KHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIC8vIElmIHRoZXJlIGFyZSBubyBwZW5kaW5nIHJlY2VpdmVzIG9uIGFuIHVuYnVmZmVyZWQgY2hhbm5lbCwgb3Igb24gYSBidWZmZXJlZFxuICAvLyBjaGFubmVsIHdpdGggYSBmdWxsIGJ1ZmZlciwgd2UgcXVldWUgdGhlIHNlbmQgdG8gdGxldCBpdCB3YWl0IGZvciBhIHJlY2VpdmVcbiAgLy8gdG8gYmVjb21lIGF2YWlsYWJsZS4gU2VuZHMgd2hvc2UgaGFuZGxlcnMgaGF2ZSBnb25lIGluYWN0aXZlICh3aGljaCBoYXBwZW5zXG4gIC8vIGlmIHRoZXkgd2VyZSBwcm9jZXNzZWQgYXMgcGFydCBvZiBhIGBzZWxlY3RgIGNhbGwpIGFyZSBwZXJpb2RpY2FsbHkgcHVyZ2VkLlxuICBpZiAoY2hhbm5lbC5kaXJ0eVNlbmRzID4gY2hhbm5lbC5tYXhEaXJ0eSkge1xuICAgIGZpbHRlcihjaGFubmVsLnNlbmRzLCBzZW5kZXIgPT4gc2VuZGVyLmhhbmRsZXIuYWN0aXZlKTtcbiAgICBjaGFubmVsLmRpcnR5U2VuZHMgPSAwO1xuICB9IGVsc2Uge1xuICAgIGNoYW5uZWwuZGlydHlTZW5kcysrO1xuICB9XG5cbiAgaWYgKHFDb3VudChjaGFubmVsLnNlbmRzKSA+PSBjaGFubmVsLm1heFF1ZXVlZCkge1xuICAgIHRocm93IEVycm9yKFxuICAgICAgYE5vIG1vcmUgdGhhbiAke2NoYW5uZWwubWF4UXVldWVkfSBwZW5kaW5nIHNlbmRzIGFyZSBhbGxvd2VkIG9uIGEgc2luZ2xlIGNoYW5uZWxgXG4gICAgKTtcbiAgfVxuICBlbnF1ZXVlKGNoYW5uZWwuc2VuZHMsIHNlbmRCb3godmFsdWUsIGhhbmRsZXIpKTtcblxuICByZXR1cm4gbnVsbDtcbn1cblxuLyoqXG4gKiBSZWNlaXZlcyBhIHZhbHVlIGZyb20gYSBjaGFubmVsLiBUaGUgc3BlY2lmaWVkIGhhbmRsZXIgaXMgdXNlZCB0byBjb250cm9sXG4gKiB3aGV0aGVyIHRoZSByZWNlaXZlIGlzIGFjdGl2ZSBhbmQgd2hhdCB0byBkbyBhZnRlciB0aGUgcmVjZWl2ZSBjb21wbGV0ZXMuIEFcbiAqIHJlY2VpdmUgY2FuIGJlY29tZSBpbmFjdGl2ZSBpZiBpdCB3YXMgcGFydCBvZiBhbiBgc2VsZWN0YCBjYWxsIGFuZCBzb21lIG90aGVyXG4gKiBvcGVyYXRpb24gc3BlY2lmaWVkIGluIHRoYXQgY2FsbCBoYXMgYWxyZWFkeSBjb21wbGV0ZWQuXG4gKlxuICogVGhpcyB2YWx1ZSBpcyBnaXZlbiB0byBhIHNlbmQgaGFuZGxlciBpbW1lZGlhdGVseSBpZiB0aGVyZSdzIG9uZSB3YWl0aW5nLlxuICogT3RoZXJ3aXNlIHRoZSB2YWx1ZSBhbmQgaGFuZGxlciBhcmUgcXVldWVkIHRvZ2V0aGVyIHRvIHdhaXQgZm9yIGEgc2VuZC5cbiAqXG4gKiBUaGlzIGlzIGEgbG93LWxldmVsIG9wZXJhdGlvbiB0aGF0J3MgcHJvdmlkZWQgYXMgYSBwYXJ0IG9mIHRoZSBjaGFubmVsXG4gKiBpbXBsZW1lbnRhdGlvbiBzbyB0aGF0IG90aGVyIG9wZXJhdGlvbnMgZnVuY3Rpb25zIGNhbiBwcm9wZXJseSBhcHBseVxuICogaGFuZGxlcnMuIEl0IGlzIG5vdCBtZWFudCBmb3IgZ2VuZXJhbCB1c2UuIFVzZSB0aG9zZSBvdGhlciBvcGVyYXRpb25zXG4gKiBmdW5jdGlvbnMgaW5zdGVhZC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcC9jaGFubmVsXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuQ2hhbm5lbH0gY2hhbm5lbCBUaGUgY2hhbm5lbCB0aGF0IHRoZSB2YWx1ZSBpcyBiZWluZ1xuICogICAgIHJlY2VpdmVkIGZyb20uXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGhhbmRsZXIuYWN0aXZlIERldGVybWluZXMgd2hldGhlciB0aGUgcmVjZWl2ZSBpcyBzdGlsbFxuICogICAgIGFjdGl2ZSBhbmQgc2hvdWxkIHN0aWxsIGJlIHNlcnZpY2VkLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gaGFuZGxlci5jb21taXQgRGVhY3RpdmF0ZXMgdGhlIHJlY2VpdmUgKHNvIGl0IGNhbid0IGJlXG4gKiAgICAgc2VydmljZWQgYSBzZWNvbmQgdGltZSkgYW5kIHJldHVybnMgdGhlIGNhbGxiYWNrIHRvIGJlIGZpcmVkIHdoZW4gdGhlXG4gKiAgICAgcmVjZWl2ZSBjb21wbGV0ZXMuXG4gKiBAcmV0dXJuIHttb2R1bGU6Y3NwL2NoYW5uZWwuQm94fG51bGx9IEVpdGhlciB0aGUgYm94ZWQgdmFsdWUgcmVjZWl2ZWQgZnJvbVxuICogICAgIHRoZSBjaGFubmVsLCBvciBgbnVsbGAgaWYgdGhlIHJlY2VpdmUgbXVzdCBiZSBxdWV1ZWQgdG8gYXdhaXQgYVxuICogICAgIGNvcnJlc3BvbmRpbmcgc2VuZC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGhhbmRsZVJlY3YoY2hhbm5lbCwgaGFuZGxlcikge1xuICBsZXQgc2VuZGVyLCBzZW5kSGFuZGxlciwgY2FsbGJhY2s7XG5cbiAgLy8gUnVucyBpZiB0aGUgY2hhbm5lbCBpcyBidWZmZXJlZCBhbmQgdGhlIGJ1ZmZlcmVkIGlzIG5vdCBlbXB0eSAoYW4gZW1wdHlcbiAgLy8gYnVmZmVyIG1lYW5zIHRoZXJlIGFyZSBubyBwZW5kaW5nIHNlbmRzKS4gV2UgaW1tZWRpYXRlbHkgcHJvY2VzcyBhbnkgc2VuZHNcbiAgLy8gdGhhdCB3ZXJlIHF1ZXVlZCB3aGVuIHRoZXJlIHdlcmUgbm8gcGVuZGluZyByZWNlaXZlcywgdXAgdW50aWwgdGhlIGJ1ZmZlclxuICAvLyBpcyBmaWxsZWQgd2l0aCBzZW50IHZhbHVlcy5cbiAgaWYgKGNoYW5uZWwuYnVmZmVyICYmIGNvdW50KGNoYW5uZWwuYnVmZmVyKSA+IDApIHtcbiAgICBoYW5kbGVyLmNvbW1pdCgpO1xuICAgIGNvbnN0IHZhbHVlID0gcmVtb3ZlKGNoYW5uZWwuYnVmZmVyKTtcblxuICAgIGZvciAoOzspIHtcbiAgICAgIGlmIChpc0Z1bGwoY2hhbm5lbC5idWZmZXIpKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgc2VuZGVyID0gZGVxdWV1ZShjaGFubmVsLnNlbmRzKTtcbiAgICAgIGlmIChzZW5kZXIgPT09IEVNUFRZKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBzZW5kSGFuZGxlciA9IHNlbmRlci5oYW5kbGVyO1xuICAgICAgaWYgKHNlbmRIYW5kbGVyLmFjdGl2ZSkge1xuICAgICAgICBjYWxsYmFjayA9IHNlbmRIYW5kbGVyLmNvbW1pdCgpO1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICBkaXNwYXRjaCgoKSA9PiBjYWxsYmFjayh0cnVlKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzUmVkdWNlZChjaGFubmVsLnhmb3JtW3Auc3RlcF0oY2hhbm5lbC5idWZmZXIsIHNlbmRlci52YWx1ZSkpKSB7XG4gICAgICAgICAgY2xvc2UoY2hhbm5lbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGJveCh2YWx1ZSk7XG4gIH1cblxuICAvLyBUaGlzIGxvb3AgcnVucyBvbiBhbiB1bmJ1ZmZlcmVkIGNoYW5uZWwgaWYgdGhlcmUgYXJlIGFueSBwZW5kaW5nIHNlbmRzLlxuICAvLyAoQnVmZmVyZWQgY2hhbm5lbHMgYnJlYWsgb3V0IG9mIHRoaXMgbG9vcCBpbW1lZGlhdGVseSBiZWNhdXNlIGluIG9yZGVyIHRvXG4gIC8vIGhhdmUgY29tZSB0aGlzIGZhciB3aXRob3V0IHJldHVybmluZywgdGhlIGNoYW5uZWwncyBidWZmZXIgbXVzdCBoYXZlIGJlZW5cbiAgLy8gZW1wdHkuIEFuIGVtcHR5IGJ1ZmZlciBtZWFucyB0aGVyZSBhcmUgbm8gcGVuZGluZyBzZW5kcywgc28gdGhlIGZpcnN0XG4gIC8vIHBlbmRpbmcgc2VuZCByZWFkIGZyb20gaXQgd2lsbCBiZSBFTVBUWS4pIEl0IHByb2Nlc3NlcyB0aGUgbmV4dCBwZW5kaW5nXG4gIC8vIHNlbmQgaW1tZWRpYXRlbHkuXG4gIGZvciAoOzspIHtcbiAgICBzZW5kZXIgPSBkZXF1ZXVlKGNoYW5uZWwuc2VuZHMpO1xuICAgIGlmIChzZW5kZXIgPT09IEVNUFRZKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgc2VuZEhhbmRsZXIgPSBzZW5kZXIuaGFuZGxlcjtcbiAgICBpZiAoc2VuZEhhbmRsZXIuYWN0aXZlKSB7XG4gICAgICBjYWxsYmFjayA9IHNlbmRIYW5kbGVyLmNvbW1pdCgpO1xuICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIGRpc3BhdGNoKCgpID0+IGNhbGxiYWNrKHRydWUpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBib3goc2VuZGVyLnZhbHVlKTtcbiAgICB9XG4gIH1cblxuICAvLyBJZiB3ZSd2ZSBleGhhdXN0ZWQgYWxsIG9mIG91ciBwZW5kaW5nIHNlbmRzIGFuZCB0aGUgY2hhbm5lbCBpcyBtYXJrZWRcbiAgLy8gY2xvc2VkLCB3ZSBjYW4gZmluYWxseSByZXV0cm4gdGhlIGZhY3QgdGhhdCB0aGUgY2hhbm5lbCBpcyBjbG9zZWQuIFRoaXNcbiAgLy8gZW5zdXJlcyB0aGF0IGFueSBzZW5kcyB0aGF0IHdlcmUgYWxyZWFkeSBwZW5kaW5nIG9uIHRoZSBjaGFubmVsIGFyZVxuICAvLyBwcm9jZXNzZWQgYmVmb3JlIGNsb3N1cmUsIGV2ZW4gaWYgdGhlIGNoYW5uZWwgd2FzIGNsb3NlZCBiZWZvcmUgdGhhdCBjb3VsZFxuICAvLyBoYXBwZW4uXG4gIGlmIChjaGFubmVsLmNsb3NlZCkge1xuICAgIGhhbmRsZXIuY29tbWl0KCk7XG4gICAgcmV0dXJuIGJveChDTE9TRUQpO1xuICB9XG5cbiAgLy8gSWYgYW4gdW5idWZmZXJlZCBjaGFubmVsIG9yIGEgYnVmZmVyZWQgY2hhbm5lbCB3aXRoIGFuIGVtcHR5IGJ1ZmZlciBoYXMgbm9cbiAgLy8gcGVuZGluZyBzZW5kcywgYW5kIGlmIHRoZSBjaGFubmVsIGlzIHN0aWxsIG9wZW4sIHRoZSByZWNlaXZlIGlzIHF1ZXVlZCB0b1xuICAvLyBiZSBwcm9jZXNzZWQgd2hlbiBhIHNlbmQgaXMgYXZhaWxhYmxlLiBSZWNlaXZlcyB3aG9zZSBoYW5kbGVycyBoYXZlIGdvbmVcbiAgLy8gaW5hY3RpdmUgYXMgdGhlIHJlc3VsdCBvZiBgc2VsZWN0YCBwcm9jZXNzaW5nIGFyZSBwZXJpb2RpY2FsbHkgcHVyZ2VkLlxuICBpZiAoY2hhbm5lbC5kaXJ0eVJlY3ZzID4gY2hhbm5lbC5tYXhEaXJ0eSkge1xuICAgIGZpbHRlcihjaGFubmVsLnJlY3ZzLCByZWNlaXZlciA9PiByZWNlaXZlci5hY3RpdmUpO1xuICAgIGNoYW5uZWwuZGlydHlSZWN2cyA9IDA7XG4gIH0gZWxzZSB7XG4gICAgY2hhbm5lbC5kaXJ0eVJlY3ZzKys7XG4gIH1cblxuICBpZiAocUNvdW50KGNoYW5uZWwucmVjdnMpID49IGNoYW5uZWwubWF4UXVldWVkKSB7XG4gICAgY29uc3QgbWF4ID0gY2hhbm5lbC5tYXhRdWV1ZWQ7XG4gICAgdGhyb3cgRXJyb3IoXG4gICAgICBgTm8gbW9yZSB0aGFuICR7bWF4fSBwZW5kaW5nIHJlY2VpdmVzIGFyZSBhbGxvd2VkIG9uIGEgc2luZ2xlIGNoYW5uZWxgXG4gICAgKTtcbiAgfVxuICBlbnF1ZXVlKGNoYW5uZWwucmVjdnMsIGhhbmRsZXIpO1xuXG4gIHJldHVybiBudWxsO1xufVxuXG4vKipcbiAqIENsb3NlcyB0aGUgY2hhbm5lbCBpZiBpdCBpc24ndCBhbHJlYWR5IGNsb3NlZC4gVGhpcyBpbW1lZGlhdGVseSByZXR1cm5zIGFueVxuICogYnVmZmVyZWQgdmFsdWVzIHRvIHBlbmRpbmcgcmVjZWl2ZXMuIElmIHRoZXJlIGFyZSBubyBidWZmZXJlZCB2YWx1ZXMgKG9yIGlmXG4gKiB0aGV5J3ZlIGFscmVhZHkgYmVlbiB0YWtlbiBieSBvdGhlciByZWNlaXZlcyksIHRoZW4gYWxsIG9mIHRoZSByZXN0IG9mIHRoZVxuICogcmVjZWl2ZXMgYXJlIGNvbXBsZXRlZCB3aXRoIHRoZSB2YWx1ZSBvZiB7QGxpbmsgbW9kdWxlOmNzcC5DTE9TRUR8Q0xPU0VEfS5cbiAqIEFueSBwZW5kaW5nIHNlbmRzIGFyZSBjb21wbGV0ZWQgd2l0aCB0aGUgdmFsdWUgb2YgYGZhbHNlYC5cbiAqXG4gKiBOb3RlIHRoYXQgdGhlIGJ1ZmZlciBpcyBub3QgZW1wdGllZCBpZiB0aGVyZSBhcmUgc3RpbGwgdmFsdWVzIHJlbWFpbmluZyBhZnRlclxuICogYWxsIG9mIHRoZSBwZW5kaW5nIHJlY2VpdmVzIGhhdmUgYmVlbiBoYW5kbGVkLiBUaGUgY2hhbm5lbCB3aWxsIHN0aWxsIHByb3ZpZGVcbiAqIHRob3NlIHZhbHVlcyB0byBhbnkgZnV0dXJlIHJlY2VpdmVzLCB0aG91Z2ggbm8gbmV3IHZhbHVlcyBtYXkgYmUgYWRkZWQgdG8gdGhlXG4gKiBjaGFubmVsLiBPbmNlIHRoZSBidWZmZXIgaXMgZGVwbGV0ZWQsIGFueSBmdXR1cmUgcmVjZWl2ZXMgd2lsbCByZXR1cm5cbiAqIHtAbGluayBtb2R1bGU6Y3NwLkNMT1NFRHxDTE9TRUR9LlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuQ2hhbm5lbH0gY2hhbm5lbCBUaGUgY2hhbm5lbCB0byBiZSBjbG9zZWQuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjbG9zZShjaGFubmVsKSB7XG4gIGlmIChjaGFubmVsLmNsb3NlZCkge1xuICAgIHJldHVybjtcbiAgfVxuICBjaGFubmVsLmNsb3NlZCA9IHRydWU7XG5cbiAgbGV0IHJlY2VpdmVyLCBzZW5kZXIsIGNhbGxiYWNrO1xuXG4gIC8vIElmIHRoZXJlIGlzIGEgYnVmZmVyIGFuZCBpdCBoYXMgYXQgbGVhc3Qgb25lIHZhbHVlIGluIGl0LCBzZW5kIHRob3NlIHZhbHVlc1xuICAvLyB0byBhbnkgcGVuZGluZyByZWNlaXZlcyB0aGF0IG1pZ2h0IHN0aWxsIGJlIHF1ZXVlZC5cbiAgaWYgKGNoYW5uZWwuYnVmZmVyKSB7XG4gICAgY2hhbm5lbC54Zm9ybVtwLnJlc3VsdF0oY2hhbm5lbC5idWZmZXIpO1xuICAgIGZvciAoOzspIHtcbiAgICAgIGlmIChjb3VudChjaGFubmVsLmJ1ZmZlcikgPT09IDApIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICByZWNlaXZlciA9IGRlcXVldWUoY2hhbm5lbC5yZWN2cyk7XG4gICAgICBpZiAocmVjZWl2ZXIgPT09IEVNUFRZKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgaWYgKHJlY2VpdmVyLmFjdGl2ZSkge1xuICAgICAgICBjYWxsYmFjayA9IHJlY2VpdmVyLmNvbW1pdCgpO1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHJlbW92ZShjaGFubmVsLmJ1ZmZlcik7XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgIGRpc3BhdGNoKCgpID0+IGNhbGxiYWNrKHZhbHVlKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBPbmNlIHRoZSBidWZmZXIgaXMgZW1wdHkgKG9yIGlmIHRoZXJlIGlzbid0IGEgYnVmZmVyIGF0IGFsbCksIHNlbmQgQ0xPU0VEXG4gIC8vIHRvIGFsbCByZW1haW5pbmcgcXVldWVkIHJlY2VpdmVzLlxuICBmb3IgKDs7KSB7XG4gICAgcmVjZWl2ZXIgPSBkZXF1ZXVlKGNoYW5uZWwucmVjdnMpO1xuICAgIGlmIChyZWNlaXZlciA9PT0gRU1QVFkpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBpZiAocmVjZWl2ZXIuYWN0aXZlKSB7XG4gICAgICBjYWxsYmFjayA9IHJlY2VpdmVyLmNvbW1pdCgpO1xuICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIGRpc3BhdGNoKCgpID0+IGNhbGxiYWNrKENMT1NFRCkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFNlbmQgYGZhbHNlYCB0byBhbnkgcmVtYWluaW5nIHF1ZXVlZCBzZW5kcy5cbiAgZm9yICg7Oykge1xuICAgIHNlbmRlciA9IGRlcXVldWUoY2hhbm5lbC5zZW5kcyk7XG4gICAgaWYgKHNlbmRlciA9PT0gRU1QVFkpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBpZiAoc2VuZGVyLmhhbmRsZXIuYWN0aXZlKSB7XG4gICAgICBjYWxsYmFjayA9IHNlbmRlci5oYW5kbGVyLmNvbW1pdCgpO1xuICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIGRpc3BhdGNoKCgpID0+IGNhbGxiYWNrKGZhbHNlKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCB7XG4gIENMT1NFRCxcbiAgTUFYX0RJUlRZLFxuICBNQVhfUVVFVUVELFxuICBjaGFubmVsLFxuICBoYW5kbGVTZW5kLFxuICBoYW5kbGVSZWN2LFxuICBjbG9zZSxcbiAgYm94LFxuICBpc0JveFxufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG4vKipcbiAqIEFuIGltcGxlbWVudGF0aW9uIG9mIGNoYW5uZWxzLiBUaGVzZSBjaGFubmVscyBhcmUgZXNzZW50aWFsbHkgcXVldWVzIHRoYXRcbiAqIGhvbGQgaW5zdHJ1Y3Rpb25zIHdhaXRpbmcgZm9yIHRoZSBuZXh0IGF2YWlsYWJsZSBhc3luYyBmdW5jdGlvbiB0byBwcm9jZXNzXG4gKiB0aGVtLiBUaGV5IGNhbiBiZSBidWZmZXJlZCwgd2hpY2ggaXMgYWNjb21wbGlzaGVkIHVzaW5nIHRoZSBidWZmZXIgZnVuY3Rpb25zXG4gKiBge0BsaW5rIG1vZHVsZTpjc3AuZml4ZWR8Zml4ZWR9YCwgYHtAbGluayBtb2R1bGU6Y3NwLmRyb3BwaW5nfGRyb3BwaW5nfWAsIGFuZFxuICogYHtAbGluayBtb2R1bGU6Y3NwLnNsaWRpbmd8c2xpZGluZ31gLlxuICpcbiAqIENoYW5uZWxzIGRvIG5vdCBpbnRlcmFjdCB3aXRoIEpTIHRhc2tzIG9yIHRoZSBkaXNwYXRjaGVyIGluIGFueSBtZWFuaW5nZnVsXG4gKiB3YXkuIFRoZXkncmUganVzdCBoZXJlIHRvIGhvbGQgdGFza3Mgd2hpY2ggbWF5IHRoZW1zZWx2ZXMgdGhlbiBjYXVzZSBuZXcgSlNcbiAqIHRhc2tzIHRvIGJlIGNyZWF0ZWQgdmlhIHRoZSBkaXNwYXRjaGVyLlxuICpcbiAqIENoYW5uZWxzIG1heSBoYXZlIHRyYW5zZHVjZXJzIGFzc29jaWF0ZWQgd2l0aCB0aGVtLiBUaGUgdHJhbnNkdWNlcnMgYXJlXG4gKiBleHBlY3RlZCB0byBmb2xsb3cgdGhlIHNhbWUgY29udmVudGlvbnMgYXMgYW55IG9mIHRoZSBwb3B1bGFyIHRyYW5zZHVjZXJcbiAqIGxpYnJhcmllcy4gRXhwbGljaXQgc3VwcG9ydCBpcyByZXF1aXJlZCBiZWNhdXNlIGNoYW5uZWxzIHdvdWxkbid0IHBsYXkgd2VsbFxuICogd2l0aCB0aGUgbm9ybWFsIHdheSBvZiBtYWtpbmcgYW4gb2JqZWN0IHN1cHBvcnQgdHJhbnNkdWN0aW9uLCBmb3IgdHdvXG4gKiBkaWZmZXJlbnQgcmVhc29ucy5cbiAqXG4gKiAqIFRyYW5zZHVjZXJzIHJlcXVpcmUgdGhlIGFiaWxpdHkgdG8gY3JlYXRlIGEgbmV3LCBlbXB0eSBjb2xsZWN0aW9uIG9mIHRoZVxuICogICBzYW1lIHR5cGUgYXMgdGhlIGlucHV0IGNvbGxlY3Rpb24uIEluIHRoaXMgY2FzZSwgdGhhdCB3b3VsZCBtZWFuIGNyZWF0aW5nIGFcbiAqICAgbmV3IGNoYW5uZWwsIG1lYW5pbmcgdGhhdCB0aGUgb3V0cHV0IGNoYW5uZWwgKGZyb20gd2hpY2ggdGhlIHRyYW5zZm9ybWVkXG4gKiAgIHZhbHVlcyBhcmUgcmVjZWl2ZWQpIHdvdWxkIGJlIGRpZmZlcmVudCB0aGFuIHRoZSBpbnB1dCBjaGFubmVsICh3aGVyZVxuICogICB2YWx1ZXMgYXJlIHNlbnQpLlxuICogKiBJZiB3ZSBzb21laG93IGdldCBvdmVyIHRoYXQgcmVxdWlyZW1lbnQgYW5kIGtlZXAgYWxsIGFjdGlvbiBvbiB0aGUgc2FtZVxuICogICBjaGFubmVsLCB3ZSBjYW4ndCB0YWtlIHZhbHVlcyBmcm9tIHRoZSBjaGFubmVsLCB0cmFuc2Zvcm0gdGhlbSwgYW5kIHB1dFxuICogICB0aGVtIGJhY2suIFRoaXMgd291bGQgcG90ZW50aWFsbHkgY2hhbmdlIHRoZSBvcmRlciBvZiB2YWx1ZXMgaW4gdGhlIGNoYW5uZWxcbiAqICAgc2luY2Ugd2UgYXJlIGRlYWxpbmcgd2l0aCBhc3luY2hyb25vdXMgcHJvY2Vzc2VzLlxuICpcbiAqIFRoZSBleHBsaWNpdCBzdXBwb3J0IG1lYW5zIGEgdHJhbnNkdWNlciBpcyBkaXJlY3RseSBhc3NvY2lhdGVkIHdpdGggYVxuICogY2hhbm5lbC4gV2hlbiBhIHZhbHVlIGlzIHNlbnQgdG8gdGhlIGNoYW5uZWwsIGl0J3MgZmlyc3QgcnVuIHRocm91Z2ggdGhlXG4gKiB0cmFuc2R1Y2VyIGFuZCB0aGUgdHJhbnNmb3JtZWQgdmFsdWUgaXMgdGhlIG9uZSBhY3R1YWxseSBwdXQgaW50byB0aGVcbiAqIGNoYW5uZWwncyBidWZmZXIuIFRoaXMgYXZvaWRzIGJvdGggb2YgdGhlIHByb2JsZW1zIG5vdGVkIGFib3ZlLlxuICpcbiAqIEBtb2R1bGUgY3NwL2NoYW5uZWxcbiAqIEBwcml2YXRlXG4gKi9cblxuaW1wb3J0IHtcbiAgQ0xPU0VELFxuICBjaGFubmVsIGFzIGNoYW5JbXBsLFxuICBoYW5kbGVTZW5kLFxuICBoYW5kbGVSZWN2LFxuICBjbG9zZSBhcyBjbG9zZUltcGwsXG4gIE1BWF9ESVJUWSxcbiAgTUFYX1FVRVVFRFxufSBmcm9tIFwiLi9oYW5kbGVyXCI7XG5pbXBvcnQgeyBERUZBVUxULCBzZWxlY3QsIHNlbGVjdEFzeW5jLCB2YWx1ZSwgY2hhbm5lbCB9IGZyb20gXCIuL3NlbGVjdFwiO1xuaW1wb3J0IHsgYWRkLCBmaXhlZCwgaXNCdWZmZXIgfSBmcm9tIFwibW9kdWxlcy9idWZmZXJcIjtcbmltcG9ydCB7IHByb3RvY29scyBhcyBwIH0gZnJvbSBcIkBjaGFua28vY29yZVwiO1xuXG4vKipcbiAqIEEgaGFuZGxlciBmdW5jdGlvbiBmb3IgZXhjZXB0aW9ucyB0aGF0IGFyZSB0aHJvd24gYnkgYSB0cmFuc2R1Y2VyIHdoaWxlXG4gKiB0cmFuc2Zvcm1pbmcgdmFsdWVzIG9uIGEgY2hhbm5lbC5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gZXJyIFRoZSBlcnJvciBvYmplY3QgdGhhdCB3YXMgdGhyb3duIGJ5IHRoZSB0cmFuc2R1Y2VyLlxuICogQHJldHVybiB7Kn0gQSB2YWx1ZSB0aGF0IHNob3VsZCBiZSBwdXQgaW50byB0aGUgY2hhbm5lbCdzIGJ1ZmZlciB3aGVuIHRoZVxuICogICAgIHRyYW5zZHVjZXIgdGhyb3dzIHRoZSBlcnJvci4gSWYgdGhpcyB2YWx1ZSBpc1xuICogICAgIHtAbGluayBtb2R1bGU6Y3NwLkNMT1NFRHxDTE9TRUR9LCB0aGVuIG5vIHZhbHVlIGF0IGFsbCB3aWxsIGJlIGFkZGVkIHRvXG4gKiAgICAgdGhlIGJ1ZmZlci5cbiAqIEBjYWxsYmFja1xuICogQG1lbWJlcm9mIG1vZHVsZTpjc3AvY2hhbm5lbFxuICogQHByaXZhdGVcbiAqL1xuXG4vKipcbiAqIFRoZSBkZWZhdWx0IGV4Y2VwdGlvbiBoYW5kbGVyLCB1c2VkIHdoZW4gbm8gZXhjZXB0aW9uIGhhbmRsZXIgaXMgc3VwcGxpZWQgdG9cbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC9jaGFubmVsLmhhbmRsZUV4Y2VwdGlvbn1gLFxuICogYHtAbGluayBtb2R1bGU6Y3NwL2NoYW5uZWwud3JhcFRyYW5zZm9ybWVyfWAsIGB7QGxpbmsgbW9kdWxlOmNzcC5jaGFufGNoYW59YCxcbiAqIG9yIGB7QGxpbmsgbW9kdWxlOmNzcC50cmFuc0NoYW58dHJhbnNDaGFufWAuIFRoaXMgZGVmYXVsdCBoYW5kbGVyIG1lcmVseVxuICogcmV0dXJucyBge0BsaW5rIG1vZHVsZTpjc3AuQ0xPU0VEfENMT1NFRH1gLCB3aGljaCB3aWxsIHJlc3VsdCBpbiBubyBuZXcgdmFsdWVcbiAqIGJlaW5nIHdyaXR0ZW4gdG8gdGhlIGNoYW5uZWwuXG4gKlxuICogQHR5cGUge21vZHVsZTpjc3AuRXhjZXB0aW9uSGFuZGxlcn1cbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwL2NoYW5uZWxcbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IERFRkFVTFRfSEFORExFUiA9ICgpID0+IENMT1NFRDtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGhhbmRsZXIgdXNlZCBmb3IgYHNlbmRgIGFuZCBgcmVjdmAgb3BlcmF0aW9ucy5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcC9jaGFubmVsXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AvY2hhbm5lbC5IYW5kbGVyQ2FsbGJhY2t9IGZuIFRoZSBjYWxsYmFjayB0byBiZSBydW4gd2hlblxuICogICAgIChhbmQgaWYpIHRoZSBvcGVyYXRpb24gY29tcGxldGVzLlxuICogQHJldHVybiB7bW9kdWxlOmNzcC9jaGFubmVsLkhhbmRsZXJ9IFRoZSBuZXcgaGFuZGxlci5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIG9wSGFuZGxlcihmbikge1xuICByZXR1cm4gT2JqZWN0LmNyZWF0ZShudWxsLCB7XG4gICAgYWN0aXZlOiB7XG4gICAgICB2YWx1ZTogdHJ1ZVxuICAgIH0sXG4gICAgY29tbWl0OiB7XG4gICAgICB2YWx1ZTogKCkgPT4gZm5cbiAgICB9XG4gIH0pO1xufVxuXG4vKipcbiAqIEhhbmRsZXMgYW4gZXhjZXB0aW9uIHRoYXQgaXMgdGhyb3duIGluc2lkZSBhIHRyYW5zZHVjZXIuIFRoZSB0aHJvd24gZXJyb3IgaXNcbiAqIHBhc3NlZCB0byB0aGUgYGhhbmRsZXJgIGZ1bmN0aW9uLCBhbmQgdGhlIHJlc3VsdCBvZiB0aGF0IGhhbmRsZXIgZnVuY3Rpb24gaXNcbiAqIGFkZGVkIHRvIHRoZSBjaGFubmVsJ3MgYnVmZmVyLiBJZiB0aGF0IHZhbHVlIGlzXG4gKiB7QGxpbmsgbW9kdWxlOmNzcC5DTE9TRUR8Q0xPU0VEfSwgdGhlbiBpdCBpcyAqbm90KiBhZGRlZCB0byB0aGUgYnVmZmVyLlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5CdWZmZXJ9IGJ1ZmZlciBUaGUgYnVmZmVyIHRoYXQgYmFja3MgdGhlIGNoYW5uZWwgd2hvc2VcbiAqICAgICB0cmFuc2R1Y2VyJ3MgZXhjZXB0aW9ucyBhcmUgYmVpbmcgaGFuZGxlZC5cbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5FeGNlcHRpb25IYW5kbGVyfSBoYW5kbGVyIFRoZSBleGNlcHRpb24gaGFuZGxpbmcgZnVuY3Rpb25cbiAqICAgICB0aGF0IGlzIHJ1biB3aGVuIGFuIGVycm9yIG9jY3VycyBpbiBhIHRyYW5zZHVjZXIuXG4gKiBAcGFyYW0gIHtPYmplY3R9IGV4IFRoZSBlcnJvciBvYmplY3QgdGhyb3duIGJ5IHRoZSB0cmFuc2R1Y2VyLlxuICogQHJldHVybiB7bW9kdWxlOmNzcC5CdWZmZXJ9IFRoZSBidWZmZXIgaXRzZWxmLiBUaGlzIGlzIGRvbmUgdG8gbWFrZSBpdCBlYXNpZXJcbiAqICAgICB0byBpbnRlZ3JhdGUgdGhpcyBmdW5jdGlvbiBpbnRvIGEgdHJhbnNkdWNlcidzIHN0ZXAgZnVuY3Rpb24uXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBoYW5kbGVFeGNlcHRpb24oYnVmZmVyLCBoYW5kbGVyLCBleCkge1xuICBjb25zdCB2YWx1ZSA9IGhhbmRsZXIoZXgpO1xuICBpZiAodmFsdWUgIT09IENMT1NFRCkge1xuICAgIGFkZChidWZmZXIsIHZhbHVlKTtcbiAgfVxuICByZXR1cm4gYnVmZmVyO1xufVxuXG4vKipcbiAqIEEgdHJhbnNkdWNlciB0aGF0IHdyYXBzIGFub3RoZXIgdHJhbnNkdWNlciB3aXRoIGVycm9yIGhhbmRsaW5nIGNvZGUuIEFueVxuICogZXJyb3IgdGhhdCBvY2N1cnMgd2l0aGluIHRoZSB0cmFuc2R1Y2VyLCBlaXRoZXIgaW4gdGhlIHN0ZXAgZnVuY3Rpb24gb3IgdGhlXG4gKiByZXN1bHQgZnVuY3Rpb24sIHdpbGwgY2F1c2UgdGhlIGVycm9yIGhhbmRsZXIgdG8gYmUgcnVuLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB4Zm9ybSBUaGUgdHJhbnNkdWNlciB0byBhZGQgYW4gZXJyb3IgaGFuZGxlciB0by5cbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5FeGNlcHRpb25IYW5kbGVyfSBbaGFuZGxlcj1ERUZBVUxUX0hBTkRMRVJdIFRoZSBleGNlcHRpb25cbiAqICAgICBoYW5kbGluZyBmdW5jdGlvbiB0aGF0IGlzIHJ1biB3aGVuIGFuIGVycm9yIG9jY3VycyBpbiB0aGUgdHJhbnNkdWNlci5cbiAqIEByZXR1cm4ge09iamVjdH0gQSBuZXcgdHJhbnNkdWNlciB0aGF0IGlzIHRoZSByZXN1bHQgb2Ygd3JhcHBpbmcgdGhlIHByb3ZpZGVkXG4gKiAgICAgdHJhbnNkdWNlcidzIHN0ZXAgYW5kIHJlc3VsdCBmdW5jdGlvbnMgd2l0aCB0aGUgZXhjZXB0aW9uIGhhbmRsZXIuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBoYW5kbGVyVHJhbnNkdWNlcih4Zm9ybSwgaGFuZGxlciA9IERFRkFVTFRfSEFORExFUikge1xuICByZXR1cm4ge1xuICAgIFtwLnN0ZXBdKGJ1ZmZlciwgaW5wdXQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiB4Zm9ybVtwLnN0ZXBdKGJ1ZmZlciwgaW5wdXQpO1xuICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgcmV0dXJuIGhhbmRsZUV4Y2VwdGlvbihidWZmZXIsIGhhbmRsZXIsIGV4KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgW3AucmVzdWx0XShidWZmZXIpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiB4Zm9ybVtwLnJlc3VsdF0oYnVmZmVyKTtcbiAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgIHJldHVybiBoYW5kbGVFeGNlcHRpb24oYnVmZmVyLCBoYW5kbGVyLCBleCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuXG4vKipcbiAqIFRoZSByZWR1Y2VyIHVzZWQgYXQgdGhlIGVuZCBvZiBhIHRyYW5zZHVjZXIgY2hhaW4gdG8gY29udHJvbCBob3cgdGhlXG4gKiB0cmFuc2Zvcm1lZCB2YWx1ZXMgYXJlIHJlZHVjZWQgYmFjayBvbnRvIHRoZSBjaGFubmVsJ3MgYnVmZmVyLiBUaGlzIHJlZHVjZXJcbiAqIGRvZXMgbm90aGluZyBtb3JlIHRoYW4gYWRkIHRoZSBpbnB1dCBpdGVtcyAod2hpY2ggYXJlIHRoZSB0cmFuc2Zvcm1lZCB2YWx1ZXNcbiAqIHRoYXQgYXJlIGJlaW5nIHB1dCBvbnRvIHRoZSBjaGFubmVsKSB0byB0aGUgY2hhbm5lbCBidWZmZXIuXG4gKlxuICogVGhpcyBpcyBhIG5lY2Vzc2FyeSBwYXJ0IG9mIHdvcmtpbmcgd2l0aCBhIHRyYW5zZHVjZXIsIGFzIHRoZSBmaW5hbCByZWR1Y2VyXG4gKiBhbHdheXMgdGFrZXMgdGhlIHRyYW5zZm9ybWVkIHZhbHVlcyBhbmQgcmVuZGVycyB0aGVtIGludG8gd2hhdGV2ZXIgY29sbGVjdGlvblxuICogaXMgZGVzaXJlZC4gVGhpcyBpcyB0aGF0IGZpbmFsIHJlZHVjZXIgZm9yIGNoYW5uZWxzLlxuICpcbiAqIEB0eXBlIHtPYmplY3R9XG4gKiBAcHJpdmF0ZVxuICovXG5jb25zdCBidWZmZXJSZWR1Y2VyID0ge1xuICBbcC5pbml0XSgpIHtcbiAgICB0aHJvdyBFcnJvcihcImluaXQgbm90IGF2YWlsYWJsZVwiKTtcbiAgfSxcblxuICBbcC5zdGVwXShidWZmZXIsIGlucHV0KSB7XG4gICAgYWRkKGJ1ZmZlciwgaW5wdXQpO1xuICAgIHJldHVybiBidWZmZXI7XG4gIH0sXG5cbiAgW3AucmVzdWx0XShidWZmZXIpIHtcbiAgICByZXR1cm4gYnVmZmVyO1xuICB9XG59O1xuXG4vKipcbiAqIFBhcnNlcyB0aGUgYnVmZmVyIGFyZ3VtZW50IGFuZCBvcHRpb25zLCBhbG9uZyB3aXRoIGEgc2V0IG9mIGRlZmF1bHQgb3B0aW9ucyxcbiAqIHRvIGZpZ3VyZSBvdXQgd2hhdCB3YXMgcmVhbGx5IHBhc3NlZCB0byBge0BsaW5rIG1vZHVsZTpjc3AuY2hhbnxjaGFufWAuXG4gKlxuICogQHBhcmFtIHsobnVsbHxudW1iZXJ8bW9kdWxlOmNzcC5CdWZmZXIpfSBidWZmZXIgVGhlIGJ1ZmZlciBhcmd1bWVudCBwYXNzZWQgdG9cbiAqICAgICBge0BsaW5rIG1vZHVsZTpjc3AuY2hhbnxjaGFufWAuXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyBUaGUgb3B0aW9ucyBhcmd1bWVudCBwYXNzZWQgdG9cbiAqICAgICBge0BsaW5rIG1vZHVsZTpjc3AuY2hhbnxjaGFufWAuXG4gKiBAcGFyYW0ge29iamVjdH0gZGVmYXVsdE9wdGlvbnMgRGVmYXVsdCB2YWx1ZXMgZm9yIG9wdGlvbnMgdGhhdCBtaWdodCBub3QgaGF2ZVxuICogICAgIGJlZW4gc2VudCB0byBge0BsaW5rIG1vZHVsZTpjc3AuY2hhbnxjaGFufWAuXG4gKiBAcmV0dXJuIHtvYmplY3R9IEFuIG9iamVjdCBjb250YWluaW5nIHRoZSBwcm9jZXNzZWQgdmFsdWVzIG9mIGFsbCBvZiB0aGVcbiAqICAgICBhcmd1bWVudHMgc2VudCB0byBge0BsaW5rIG1vZHVsZTpjc3AuY2hhbnxjaGFufWAuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBwYXJzZUFyZ3MoYnVmZmVyLCBvcHRpb25zLCBkZWZhdWx0T3B0aW9ucykge1xuICBsZXQgYnVmO1xuICBsZXQgb3B0cztcblxuICBpZiAoIWJ1ZmZlcikge1xuICAgIC8vIHNhbWUgZm9yIDAsIG51bGwsIG9yIHVuZGVmaW5lZFxuICAgIGJ1ZiA9IG51bGw7XG4gICAgb3B0cyA9IG9wdGlvbnM7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGJ1ZmZlciA9PT0gXCJudW1iZXJcIikge1xuICAgIGJ1ZiA9IGZpeGVkKGJ1ZmZlcik7XG4gICAgb3B0cyA9IG9wdGlvbnM7XG4gIH0gZWxzZSBpZiAoaXNCdWZmZXIoYnVmZmVyKSkge1xuICAgIGJ1ZiA9IGJ1ZmZlcjtcbiAgICBvcHRzID0gb3B0aW9ucztcbiAgfSBlbHNlIHtcbiAgICAvLyBJZiBubyBidWZmZXIgaXMgc3BlY2lmaWVkIGJ1dCBhIHRyYW5zZHVjZXIgaXMsIHdlIGFzc3VtZSBmaXhlZCgxKSBpbnN0ZWFkXG4gICAgLy8gb2Ygbm8gYnVmZmVyXG4gICAgYnVmID0gYnVmZmVyPy50cmFuc2R1Y2VyID8gZml4ZWQoMSkgOiBudWxsO1xuICAgIG9wdHMgPSBidWZmZXI7XG4gIH1cblxuICBjb25zdCB7IHRyYW5zZHVjZXIsIGhhbmRsZXIsIG1heERpcnR5LCBtYXhRdWV1ZWQsIHRpbWVyIH0gPSBPYmplY3QuYXNzaWduKFxuICAgIHt9LFxuICAgIGRlZmF1bHRPcHRpb25zLFxuICAgIG9wdHNcbiAgKTtcbiAgcmV0dXJuIHsgYnVmLCB0cmFuc2R1Y2VyLCBoYW5kbGVyLCBtYXhEaXJ0eSwgbWF4UXVldWVkLCB0aW1lciB9O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYW5kIHJldHVybnMgYSBuZXcgY2hhbm5lbC5cbiAqXG4gKiBCeSBkZWZhdWx0IHRoaXMgY2hhbm5lbCB3aWxsIGJlIGEgc2ltcGxlIHVuYnVmZmVyZWQsIHVudHJhbnNmb3JtZWQgY2hhbm5lbCxcbiAqIGJ1dCB0aGF0IGNhbiBiZSBjaGFuZ2VkIHRocm91Z2ggb3B0aW9ucy4gQSBjaGFubmVsIGRvZXMgbm90IGhhdmUgYW55XG4gKiBleHRlcm5hbGx5IHVzZWZ1bCBmdW5jdGlvbnMuIEl0IGV4aXN0cyBsYXJnZWx5IHRvIGJlIHBhc3NlZCBpbnRvXG4gKiBge0BsaW5rIG1vZHVsZTpjc3Auc2VuZHxzZW5kfWAsIGB7QGxpbmsgbW9kdWxlOmNzcC5yZWN2fHJlY3Z9YCwgYW5kXG4gKiBge0BsaW5rIG1vZHVsZTpjc3Auc2VsZWN0fHNlbGVjdH1gIGludm9jYXRpb25zLCBhbG9uZyB3aXRoIHRoZWlyIG5vbi1ibG9ja2luZ1xuICogdmFyaWF0aW9ucyAoYHtAbGluayBtb2R1bGU6Y3NwLnNlbmRBc3luY3xzZW5kQXN5bmN9YCxcbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC5yZWN2QXN5bmN8cmVjdkFzeW5jfWAsIGFuZFxuICogYHtAbGluayBtb2R1bGU6Y3NwLnNlbGVjdEFzeW5jfHNlbGVjdEFzeW5jfWApLlxuICpcbiAqIElmIGEgYnVmZmVyIHZhbHVlIGlzIHByb3ZpZGVkLCBpdCBkZWZpbmVzIHdoYXQgYnVmZmVyIHNob3VsZCBiYWNrIHRoZVxuICogY2hhbm5lbC4gSWYgdGhpcyBpcyBgbnVsbGAgb3IgYDBgLCB0aGUgY2hhbm5lbCB3aWxsIGJlIHVuYnVmZmVyZWQuIElmIGl0J3MgYVxuICogcG9zaXRpdmUgbnVtYmVyLCB0aGUgY2hhbm5lbCB3aWxsIGJlIGJ1ZmZlcmVkIGJ5IGFcbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC5GaXhlZEJ1ZmZlcnxGaXhlZEJ1ZmZlcn0gYG9mIHRoYXQgc2l6ZS4gSWYgaXQncyBhXG4gKiBge0BsaW5rIG1vZHVsZTpjc3AuQnVmZmVyfEJ1ZmZlcn1gIG9iamVjdCwgdGhhdCBvYmplY3Qgd2lsbCBiZSB1c2VkIGFzIHRoZVxuICogY2hhbm5lbCdzIGJ1ZmZlci4gSWYgaXQncyBtaXNzaW5nIGFsdG9nZXRoZXIsIHRoZSBjaGFubmVsIHdpbGwgYmUgdW5idWZmZXJlZFxuICogdW5sZXNzIGEgYHRyYW5zZHVjZXJgIG9wdGlvbiBpcyBwcm92aWRlZCAoc2VlIGJlbG93KSwgaW4gd2hpY2ggY2FzZSBpdCB3aWxsXG4gKiBiZSBhIGB7QGxpbmsgbW9kdWxlOmNzcC5GaXhlZEJ1ZmZlcnxGaXhlZEJ1ZmZlcn1gIG9mIHNpemUgMS5cbiAqXG4gKiBgY2hhbmAgc3VwcG9ydHMgdHJhbnNkdWNlcnMgYnkgYWxsb3dpbmcgYSB0cmFuc2R1Y2VyIGZ1bmN0aW9uIHRvIGJlXG4gKiBhc3NvY2lhdGVkIHdpdGggaXQuIFRoaXMgaXMgcGFzc2VkIGFzIHRoZSBgdHJhbnNkdWNlcmAgb3B0aW9uIGFuZCBjYW4gb25seSBiZVxuICogdXNlZCBpZiB0aGUgY2hhbm5lbCBpcyBidWZmZXJlZCAob3RoZXJ3aXNlIGFuIGVycm9yIGlzIHRocm93bikuIFRoaXNcbiAqIHRyYW5zZHVjZXIgZnVuY3Rpb24gbXVzdCB0YWtlIGFub3RoZXIgdHJhbnNkdWNlciBhcyBhIHBhcmFtZXRlciAoYWxsb3dpbmdcbiAqIHRyYW5zZm9ybWVycyB0byBiZSBjaGFpbmVkKSwgYW5kIGl0IG11c3QgcmV0dXJuIGFuIG9iamVjdCBjb25mb3JtaW5nIHRvIHRoZVxuICogdHJhbnNkdWNlciBwcm90b2NvbC5cbiAqXG4gKiBFcnJvcnMgaW4gdGhlIHRyYW5zZm9ybWF0aW9uIHByb2Nlc3MgY2FuIGJlIGhhbmRsZWQgYnkgcGFzc2luZyBhbiBlcnJvclxuICogaGFuZGxlci4gVGhpcyBpcyBhIGZ1bmN0aW9uIHRoYXQgZXhwZWN0cyB0byByZWNlaXZlIGFuIGVycm9yIG9iamVjdCBhcyBhXG4gKiBwYXJhbWV0ZXIgYW5kIGNhbiByZXR1cm4gYSB2YWx1ZSB0aGF0IGlzIHRoZW4gcHV0IG9udG8gdGhlIGNoYW5uZWwuIElmIHRoaXNcbiAqIHZhbHVlIGlzIGB7QGxpbmsgbW9kdWxlOmNzcC5DTE9TRUR8Q0xPU0VEfWAsIHRoZW4gbm8gdmFsdWUgd2lsbCBiZSBwdXQgb250b1xuICogdGhlIGNoYW5uZWwgdXBvbiBoYW5kbGVyIGNvbXBsZXRpb24uXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqIEBwYXJhbSB7KG51bWJlcnxtb2R1bGU6Y3NwLkJ1ZmZlcil9IFtidWZmZXJdIFRoZSBidWZmZXIgb2JqZWN0IHRoYXQgc2hvdWxkXG4gKiAgICAgYmFjayB0aGlzIGNoYW5uZWwuIElmIHRoaXMgaXMgYSBwb3NpdGl2ZSBudW1iZXIsIGEgZml4ZWQgYnVmZmVyIG9mIHRoYXRcbiAqICAgICBzaXplIHdpbGwgYmUgY3JlYXRlZCB0byBiYWNrIHRoZSBjaGFubmVsLiBJZiBpdCBpcyBgMGAgb3IgYG51bGxgLCB0aGUgbmV3XG4gKiAgICAgY2hhbm5lbCB3aWxsIGJlIHVuYnVmZmVyZWQuIElmIGl0J3Mgbm90IHByZXNlbnQsIHRoZSBuZXcgY2hhbm5lbCB3aWxsIGJlXG4gKiAgICAgdW5idWZmZXJlZCB1bmxlc3MgdGhlcmUgaXMgYSBgdHJhbnNkdWNlcmAgb3B0aW9uLCBpbiBpbiB3aGljaCBjYXNlIGl0XG4gKiAgICAgd2lsbCBiZSBidWZmZXJlZCB3aXRoIGEgc2l6ZSAxXG4gKiAgICAgYHtAbGluayBtb2R1bGU6Y3NwLkZpeGVkQnVmZmVyfEZpeGVkQnVmZmVyfWAuXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIEEgc2V0IG9mIG9wdGlvbnMgZm9yIGNvbmZpZ3VyaW5nIHRoZSBjaGFubmVsJ3NcbiAqICAgICBxdWV1ZS5cbiAqIEBwYXJhbSB7bW9kdWxlOmNvcmUuVHJhbnNkdWNlckZ1bmN0aW9ufSBbb3B0aW9ucy50cmFuc2R1Y2VyXSBBXG4gKiAgICAgdHJhbnNkdWNlciB0byBydW4gZWFjaCB2YWx1ZSB0aHJvdWdoIGJlZm9yZSBwdXR0aW5nIGl0IG9udG8gdGhlIGNoYW5uZWwuXG4gKiAgICAgVGhpcyBmdW5jdGlvbiBzaG91bGQgZXhwZWN0IG9uZSBwYXJhbWV0ZXIgKGFub3RoZXIgdHJhbnNkdWNlciB0aGF0IGl0J3NcbiAqICAgICBjaGFpbmVkIHRvKSBhbmQgcmV0dXJuIGFuIG9iamVjdCB0aGF0IGNvbmZvcm1zIHRvIHRoZSB0cmFuc2R1Y2VyXG4gKiAgICAgcHJvdG9jb2wuIElmIGEgdHJhbnNkdWNlciBpcyBwcm92aWRlZCBvbiBhbiB1bmJ1ZmZlcmVkIGNoYW5uZWwsIGFuIGVycm9yXG4gKiAgICAgd2lsbCBiZSB0aHJvd24uXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuRXhjZXB0aW9uSGFuZGxlcn0gW29wdGlvbnMuaGFuZGxlcl0gQW4gZXJyb3IgaGFuZGxlciB0aGF0XG4gKiAgICAgaXMgcnVuIHdoZW5ldmVyIGFuIGVycm9yIG9jY3VycyBpbnNpZGUgYSB0cmFuc2R1Y2VyIGZ1bmN0aW9uLiBJZiB0aGF0XG4gKiAgICAgaGFwcGVucywgdGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgd2l0aCBvbmUgcGFyYW1ldGVyLCB3aGljaCBpcyB0aGUgZXJyb3JcbiAqICAgICBvYmplY3QuIFRoZSB2YWx1ZSB0aGF0IHRoZSBoYW5kbGVyIHJldHVybnMgKGlmIGl0IGlzIG5vdFxuICogICAgIGB7QGxpbmsgbW9kdWxlOmNzcC5DTE9TRUR8Q0xPU0VEfWApIHdpbGwgYmUgcHV0IG9udG8gdGhlIGNoYW5uZWwgd2hlbiB0aGVcbiAqICAgICBoYW5kbGVyIGZpbmlzaGVzIHJ1bm5pbmcuXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMubWF4RGlydHk9NjRdIFRoZSBtYXhpbXVtIG51bWJlciBvZiBkaXJ0eSBvcGVyYXRpb25zXG4gKiAgICAgdGhhdCBjYW4gYmUgaW4gdGhlIHF1ZXVlIGJlZm9yZSB0aG9zZSBvcGVyYXRpb25zIGFyZSBzdWJqZWN0IHRvIGJlaW5nXG4gKiAgICAgcHVyZ2VkLiBEaXJ0eSBvcGVyYXRpb25zIGFyZSB0aG9zZSB0aGF0IG1heSBub3QgYmUgdmFsaWQgYW55bW9yZSBiZWNhdXNlXG4gKiAgICAgdGhleSB3ZXJlIGluIHRoZSBsaXN0IG9mIG9wZXJhdGlvbnMgcGFzc2VkIHRvXG4gKiAgICAgYHtAbGluayBtb2R1bGU6Y3NwLnNlbGVjdHxzZWxlY3R9YCBvclxuICogICAgIGB7QGxpbmsgbW9kdWxlOmNzcC5zZWxlY3RBc3luY3xzZWxlY3RBc3luY31gIGJ1dCB3ZXJlIG5vdCBjaG9zZW4gdG8gcnVuLlxuICogICAgIFRoaXMgcHJvdmlkZXMgYSBjaGFuY2UgZm9yIGEgdmVyeSBtaW5vciBwZXJmb3JtYW5jZSB0d2VhayBhbmQgaXMgYmVzdFxuICogICAgIGxlZnQgYWxvbmUuXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMubWF4UXVldWVkPTEwMjRdIFRoZSBtYXhpbXVtIG51bWJlciBvZiBvcGVyYXRpb25zXG4gKiAgICAgdGhhdCBjYW4gYmUgcXVldWVkIHVwIGF0IHRoZSBzYW1lIHRpbWUuIFRoaXMgcHJldmVudHMgaW5maW5pdGUgbG9vcHMgZnJvbVxuICogICAgIGFjY2lkZW50YWxseSBlYXRpbmcgdXAgYWxsIG9mIHRoZSBhdmFpbGFibGUgbWVtb3J5LlxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLnRpbWVyXSBJZiB0aGlzIHZhbHVlIGlzIHByZXNlbnQsIHRoZSBjaGFubmVsIHdpbGwgYmVcbiAqICAgICBhIHRpbWVkIGNoYW5uZWwgdGhhdCBjbG9zZXMgYXV0b21hdGljYWxseSBhZnRlciB0aGlzIG51bWJlciBvZlxuICogICAgIG1pbGxpc2Vjb25kcy5cbiAqIEByZXR1cm4ge21vZHVsZTpjc3AuQ2hhbm5lbH0gQSBuZXcgY2hhbm5lbC5cbiAqL1xuZnVuY3Rpb24gY2hhbihidWZmZXIsIG9wdGlvbnMpIHtcbiAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgbWF4RGlydHk6IE1BWF9ESVJUWSxcbiAgICBtYXhRdWV1ZWQ6IE1BWF9RVUVVRURcbiAgfTtcbiAgY29uc3QgeyBidWYsIHRyYW5zZHVjZXIsIGhhbmRsZXIsIG1heERpcnR5LCBtYXhRdWV1ZWQsIHRpbWVyIH0gPSBwYXJzZUFyZ3MoXG4gICAgYnVmZmVyLFxuICAgIG9wdGlvbnMsXG4gICAgZGVmYXVsdE9wdGlvbnNcbiAgKTtcblxuICBpZiAodHJhbnNkdWNlciAmJiAhYnVmKSB7XG4gICAgdGhyb3cgRXJyb3IoXCJPbmx5IGJ1ZmZlcmVkIGNoYW5uZWxzIGNhbiB1c2UgdHJhbnNkdWNlcnNcIik7XG4gIH1cblxuICBjb25zdCB4ZiA9IGhhbmRsZXJUcmFuc2R1Y2VyKFxuICAgIHRyYW5zZHVjZXIgPyB0cmFuc2R1Y2VyKGJ1ZmZlclJlZHVjZXIpIDogYnVmZmVyUmVkdWNlcixcbiAgICBoYW5kbGVyXG4gICk7XG5cbiAgY29uc3QgaXNUaW1lZCA9IHR5cGVvZiB0aW1lciA9PT0gXCJudW1iZXJcIjtcblxuICBjb25zdCBjaCA9IGNoYW5JbXBsKGJ1ZiwgeGYsIGlzVGltZWQsIG1heERpcnR5LCBtYXhRdWV1ZWQpO1xuXG4gIGFzeW5jIGZ1bmN0aW9uKiBpdGVyYXRvcigpIHtcbiAgICBmb3IgKDs7KSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGF3YWl0IHJlY3YoY2gpO1xuICAgICAgaWYgKHZhbHVlID09PSBDTE9TRUQpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICB5aWVsZCB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBjaFtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBpdGVyYXRvcjtcblxuICBpZiAoaXNUaW1lZCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4gY2xvc2VJbXBsKGNoKSwgdGltZXIpO1xuICB9XG5cbiAgcmV0dXJuIGNoO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYW4gdW5idWZmZXJlZCwgdGltZWQgY2hhbm5lbC4gVGhpcyBjaGFubmVsIGNsb3NlcyBhdXRvbWF0aWNhbGx5IGFmdGVyXG4gKiB0aGUgc3VwcGxpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBhbmQgaXMgdGhlIGVxdWl2YWxlbnQgb2YgY2FsbGluZyBgY2hhbigwLFxuICogeyB0aW1lcjogZGVsYXkgfSlgLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcGFyYW0ge251bWJlcn0gZGVsYXkgVGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgYWZ0ZXIgdGhlIGNoYW5uZWwgaXMgY3JlYXRlZFxuICogICAgIHRoYXQgaXQgd2lsbCBiZSBjbG9zZWQgYXV0b21hdGljYWxseS5cbiAqIEByZXR1cm4ge21vZHVsZTpjc3AuQ2hhbm5lbH0gQSBuZXcgdGltZWQgY2hhbm5lbC5cbiAqL1xuZnVuY3Rpb24gdGltZWRDaGFuKGRlbGF5ID0gMCkge1xuICByZXR1cm4gY2hhbih7IHRpbWVyOiBkZWxheSB9KTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgYnVmZmVyZWQgY2hhbm5lbCB3aXRoIGEgdHJhbnNkdWNlciBhbmQgb3B0aW9uYWwgZXJyb3IgaGFuZGxlci4gVGhlXG4gKiBidWZmZXIgZm9yIHRoaXMgY2hhbm5lbCBpcyBhIGB7QGxpbmsgbW9kdWxlOmNzcC5GaXhlZEJ1ZmZlcnxGaXhlZEJ1ZmZlcn1gIG9mXG4gKiBzaXplIDEuIFRoaXMgaXMgdGhlIGVxdWl2YWxlbnQgb2YgYGNoYW4oMSwgeyB0cmFuc2R1Y2VyLCBoYW5kbGVyIH0pYC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICogQHBhcmFtIHttb2R1bGU6Y29yZS5UcmFuc2R1Y2VyRnVuY3Rpb259IHRyYW5zZHVjZXIgVGhlIHRyYW5zZHVjZXIgdXNlZFxuICogICAgIHRvIHRyYW5zZm9ybSB2YWx1ZXMgb24gdGhlIG5ldyBjaGFubmVsLlxuICogQHBhcmFtIHttb2R1bGU6Y3NwLkV4Y2VwdGlvbkhhbmRsZXJ9IFtoYW5kbGVyXSBBbiBleGNlcHRpb24gaGFuZGxlciBjYWxsZWRcbiAqICAgICB3aXRoIHRoZSBlcnJvciBvYmplY3QgYXMgaXRzIG9ubHkgYXJndW1lbnQgd2hlbiBhbiBlcnJvciBoYXBwZW5zIGluc2lkZSBhXG4gKiAgICAgdHJhbnNkdWNlci4gSWYgdGhpcyBpcyBub3QgcHJvdmlkZWQsIGEgZGVmYXVsdCBoYW5kbGVyIGlzIHVzZWQgdGhhdFxuICogICAgIHNpbXBseSBkb2VzIG5vdGhpbmcsIGluY2x1ZGluZyBzZW5kaW5nIG5vIG91dHB1dCBmcm9tIHRoZSB2YWx1ZSB0aGF0XG4gKiAgICAgZXJyb3JlZC5cbiAqIEByZXR1cm4ge21vZHVsZTpjc3AuQ2hhbm5lbH0gQSBuZXcgY2hhbm5lbCB3aXRoIGEgdHJhbnNkdWNlci5cbiAqL1xuZnVuY3Rpb24gdHJhbnNDaGFuKHRyYW5zZHVjZXIsIGhhbmRsZXIpIHtcbiAgcmV0dXJuIGNoYW4oeyB0cmFuc2R1Y2VyLCBoYW5kbGVyIH0pO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhIGNoYW5uZWwgaXMgY2xvc2VkLlxuICpcbiAqIEEgY2xvc2VkIGNoYW5uZWwgd2lsbCBjYXVzZSBhbnkgYHNlbmRgIG9wZXJhdGlvbiB0byByZXR1cm4gYGZhbHNlYCBhbmQgYW55XG4gKiBgcmVjdmAgb3BlcmF0aW9uIHRvIHJldHVybiBhbnkgYnVmZmVyZWQgaXRlbXMgdGhhdCByZW1haW4sIGZvbGxvd2VkIGJ5XG4gKiBge0BsaW5rIG1vZHVsZTpjc3AuQ0xPU0VEfENMT1NFRH1gLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuQ2hhbm5lbH0gY2hhbm5lbCBUaGUgY2hhbm5lbCB0byBjaGVjay5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IEVpdGhlciBgdHJ1ZWAgaWYgdGhlIGNoYW5uZWwgaXMgY2xvc2VkIG9yIGBmYWxzZWAgaWYgaXRcbiAqICAgICBpc24ndC5cbiAqL1xuZnVuY3Rpb24gaXNDbG9zZWQoY2hhbm5lbCkge1xuICByZXR1cm4gY2hhbm5lbC5jbG9zZWQ7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGEgY2hhbm5lbCBpcyBidWZmZXJlZC5cbiAqXG4gKiBBIGNoYW5uZWwgaXMgYnVmZmVyZWQgaWYgYSBidWZmZXIgb3IgYSBudW1iZXIgd2FzIHBhc3NlZCBhcyB0aGUgZmlyc3RcbiAqIGFyZ3VtZW50IG9mIGB7QGxpbmsgbW9kdWxlOmNzcC5jaGFufGNoYW59YCBvciBpZiBhIHRyYW5zZHVjZXIgaXMgYSBwYXJ0IG9mXG4gKiB0aGUgY2hhbm5lbC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICogQHBhcmFtIHttb2R1bGU6Y3NwLkNoYW5uZWx9IGNoYW5uZWwgVGhlIGNoYW5uZWwgdG8gY2hlY2suXG4gKiBAcmV0dXJuIHtib29sZWFufSBFaXRoZXIgYHRydWVgIGlmIHRoZSBjaGFubmVsIGlzIGJ1ZmZlcmVkIG9yIGBmYWxzZWAgaWYgaXRcbiAqICAgICBpc24ndC5cbiAqL1xuZnVuY3Rpb24gaXNCdWZmZXJlZChjaGFubmVsKSB7XG4gIHJldHVybiBjaGFubmVsLmlzQnVmZmVyZWQ7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGEgY2hhbm5lbCBpcyB0aW1lZC5cbiAqXG4gKiBBIGNoYW5uZWwgaXMgdGltZWQgaWYgaXQgd2FzIGNyZWF0ZWQgZWl0aGVyIHdpdGggdGhlIGB0aW1lcmAgb3B0aW9uIG9mXG4gKiBge0BsaW5rIG1vZHVsZTpjc3AuY2hhbnxjaGFufWAgb3Igd2l0aCB0aGVcbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC50aW1lZENoYW58dGltZWRDaGFufWAgZnVuY3Rpb24uIEl0IHdpbGwgYXV0b21hdGljYWxseVxuICogY2xvc2UgYWZ0ZXIgYSBjZXJ0YWluIHBlcmlvZCBvZiB0aW1lLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuQ2hhbm5lbH0gY2hhbm5lbCBUaGUgY2hhbm5lbCB0byBjaGVjay5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IEVpdGhlciBgdHJ1ZWAgaWYgdGhlIGNoYW5uZWwgaXMgdGltZWQgb3IgYGZhbHNlYCBpZiBpdFxuICogICAgIGlzbid0LlxuICovXG5mdW5jdGlvbiBpc1RpbWVkKGNoYW5uZWwpIHtcbiAgcmV0dXJuIGNoYW5uZWwuaXNUaW1lZDtcbn1cblxuLyoqXG4gKiBTZW5kcyBhIHZhbHVlIHRvIHRoaXMgY2hhbm5lbCB3aXRob3V0IGJsb2NraW5nLlxuICpcbiAqIFRoaXMgbWVhbnMgdGhhdCBhIGNhbGwgdG8gYHNlbmRBc3luY2AgZG9lcyBub3QgZ28gaW50byBhbiBgYXdhaXRgIGV4cHJlc3Npb24sXG4gKiBhbmQgaXQgaXMgbm90IG5lY2Vzc2FyeSB0byB1c2UgaXQgaW5zaWRlIGEgYXN5bmMgZnVuY3Rpb24uIFJhdGhlciB0aGFuXG4gKiBibG9ja2luZyB1bnRpbCB0aGUgc2VudCB2YWx1ZSBpcyB0YWtlbiBieSBhbm90aGVyIGFzeW5jIGZ1bmN0aW9uLCB0aGlzIG9uZVxuICogcmV0dXJucyBpbW1lZGlhdGVseSBhbmQgdGhlbiBpbnZva2VzIHRoZSBjYWxsYmFjayAoaWYgcHJvdmlkZWQpIHdoZW4gdGhlIHNlbnRcbiAqIHZhbHVlIGlzIHRha2VuLiBJdCBjYW4gYmUgc2VlbiBhcyBhIG5vbi1ibG9ja2luZyB2ZXJzaW9uIG9mXG4gKiBge0BsaW5rIG1vZHVsZTpjc3Auc2VuZHxzZW5kfWAuXG4gKlxuICogV2hpbGUgdGhlIHByaW1hcnkgdXNlIG9mIHRoaXMgZnVuY3Rpb24gaXMgdG8gc2VuZCB2YWx1ZXMgb250byBjaGFubmVscyBpblxuICogY29udGV4dHMgd2hlcmUgYmVpbmcgaW5zaWRlIGFuIGFzeW5jIGZ1bmN0aW9uIGlzIGltcG9zc2libGUgKGZvciBleGFtcGxlLCBpblxuICogYSBET00gZWxlbWVudCdzIGV2ZW50IGhhbmRsZXIpLCBpdCBjYW4gc3RpbGwgYmUgdXNlZCBpbnNpZGUgYXN5bmMgZnVuY3Rpb25zXG4gKiBhdCB0aW1lcyB3aGVuIGl0J3MgaW1wb3J0YW50IHRvIG1ha2Ugc3VyZSB0aGF0IHRoZSBmdW5jdGlvbiBkb2Vzbid0IGJsb2NrXG4gKiBmcm9tIHRoZSBzZW5kLlxuICpcbiAqIFRoZSBjYWxsYmFjayBpcyBhIGZ1bmN0aW9uIG9mIG9uZSBwYXJhbWV0ZXIuIFRoZSBwYXJhbWV0ZXIgdGhhdCdzIHN1cHBsaWVkIHRvXG4gKiB0aGUgY2FsbGJhY2sgaXMgdGhlIHNhbWUgYXMgd2hhdCBpcyBzdXBwbGllZCB0byBgYXdhaXQgc2VuZGA6IGB0cnVlYCBpZiB0aGVcbiAqIHZhbHVlIHdhcyB0YWtlbiwgb3IgYGZhbHNlYCBpZiB0aGUgY2hhbm5lbCB3YXMgY2xvc2VkLiBJZiB0aGUgY2FsbGJhY2sgaXNuJ3RcbiAqIHByZXNlbnQsIG5vdGhpbmcgd2lsbCBoYXBwZW4gYWZ0ZXIgdGhlIHZhbHVlIGlzIHRha2VuLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcGFyYW0geyp9IFt2YWx1ZV0gVGhlIHZhbHVlIGJlaW5nIHB1dCBvbnRvIHRoZSBjaGFubmVsLlxuICogQHBhcmFtIHttb2R1bGU6Y3NwLk9wQ2FsbGJhY2t9IFtjYWxsYmFja10gQSBmdW5jdGlvbiB0aGF0IGdldHMgaW52b2tlZCBlaXRoZXJcbiAqICAgICB3aGVuIHRoZSB2YWx1ZSBpcyB0YWtlbiBieSBhbm90aGVyIHByb2Nlc3Mgb3Igd2hlbiB0aGUgY2hhbm5lbCBpcyBjbG9zZWQuXG4gKiAgICAgVGhpcyBmdW5jdGlvbiBjYW4gdGFrZSBvbmUgcGFyYW1ldGVyLCB3aGljaCBpcyBgdHJ1ZWAgaW4gdGhlIGZvcm1lciBjYXNlXG4gKiAgICAgYW5kIGBmYWxzZWAgaW4gdGhlIGxhdHRlci5cbiAqL1xuZnVuY3Rpb24gc2VuZEFzeW5jKGNoYW5uZWwsIHZhbHVlLCBjYWxsYmFjayA9ICgpID0+IHt9KSB7XG4gIGNvbnN0IHJlc3VsdCA9IGhhbmRsZVNlbmQoY2hhbm5lbCwgdmFsdWUsIG9wSGFuZGxlcihjYWxsYmFjaykpO1xuICBpZiAocmVzdWx0ICYmIGNhbGxiYWNrKSB7XG4gICAgY2FsbGJhY2socmVzdWx0LnZhbHVlKTtcbiAgfVxufVxuXG4vKipcbiAqIFJlY2VpdmVzIGEgdmFsdWUgZnJvbSB0aGlzIGNoYW5uZWwgd2l0aG91dCBibG9ja2luZy5cbiAqXG4gKiBUaGlzIG1lYW5zIHRoYXQgYSBjYWxsIHRvIGByZWNlaXZlQXN5bmNgIGRvZXMgbm90IGdvIGludG8gYW4gYGF3YWl0YFxuICogZXhwcmVzc2lvbiwgYW5kIGl0IGlzIG5vdCBuZWNlc3NhcnkgdG8gdXNlIGl0IGluc2lkZSBhIGFzeW5jIGZ1bmN0aW9uLiBSYXRoZXJcbiAqIHRoYW4gYmxvY2tpbmcgdW50aWwgYSB2YWx1ZSBiZWNvbWVzIGF2YWlsYWJsZSBvbiB0aGUgY2hhbm5lbCB0byBiZSByZWNlaXZlZCxcbiAqIHRoaXMgb25lIHJldHVybnMgaW1tZWRpYXRlbHkgYW5kIHRoZW4gaW52b2tlcyB0aGUgY2FsbGJhY2sgKGlmIHByb3ZpZGVkKSB3aGVuXG4gKiBhIHZhbHVlIGJlY29tZXMgYXZhaWxhYmxlLiBJdCBjYW4gYmUgcmVnYXJkZWQgYXMgYSBub24tYmxvY2tpbmcgdmVyc2lvbiBvZlxuICoge0BsaW5rIG1vZHVsZTpjc3AucmVjdnxyZWN2fWAuXG4gKlxuICogV2hpbGUgdGhlIHByaW1hcnkgdXNlIG9mIHRoaXMgZnVuY3Rpb24gaXMgdG8gcmVjZWl2ZSB2YWx1ZXMgZnJvbSBjaGFubmVscyBpblxuICogY29udGV4dHMgd2hlcmUgYmVpbmcgaW5zaWRlIGFuIGFzeW5jIGZ1bmN0aW9uIGlzIGltcG9zc2libGUsIGl0IGNhbiBzdGlsbCBiZVxuICogdXNlZCBpbnNpZGUgYXN5bmMgZnVuY3Rpb25zIGF0IHRpbWVzIHdoZW4gaXQncyBpbXBvcnRhbnQgdGhhdCB0aGUgcmVjZWl2ZVxuICogZG9lc24ndCBibG9jayB0aGUgZnVuY3Rpb24uXG4gKlxuICogVGhlIGNhbGxiYWNrIGlzIGEgZnVuY3Rpb24gb2Ygb25lIHBhcmFtZXRlciwgYW5kIHRoZSB2YWx1ZSBzdXBwbGllZCBmb3IgdGhhdFxuICogcGFyYW1ldGVyIGlzIHRoZSB2YWx1ZSByZWNlaXZlZCBmcm9tIHRoZSBjaGFubmVsIChlaXRoZXIgYSB2YWx1ZSB0aGF0IHdhc1xuICogc2VudCBvciBge0BsaW5rIG1vZHVsZTpjc3AuQ0xPU0VEfENMT1NFRH1gKS4gSWYgdGhlIGNhbGxiYWNrIGlzbid0IHByZXNlbnQsXG4gKiBub3RoaW5nIHdpbGwgaGFwcGVuIGFmdGVyIHRoZSB2YWx1ZSBpcyB0YWtlbi5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICogQHBhcmFtIHttb2R1bGU6Y3NwLk9wQ2FsbGJhY2t9IFtjYWxsYmFja10gQSBmdW5jdGlvbiB0aGF0IGdldHMgaW52b2tlZCB3aGVuIGFcbiAqICAgICB2YWx1ZSBpcyBtYWRlIGF2YWlsYWJsZSB0byBiZSByZWNlaXZlZCAodGhpcyB2YWx1ZSBtYXkgYmVcbiAqICAgICBge0BsaW5rIG1vZHVsZTpjc3AuQ0xPU0VEfENMT1NFRH1gIGlmIHRoZSBjaGFubmVsIGNsb3NlcyB3aXRoIG5vXG4gKiAgICAgYXZhaWxhYmxlIHZhbHVlKS4gVGhlIGZ1bmN0aW9uIGNhbiB0YWtlIG9uZSBwYXJhbWV0ZXIsIHdoaWNoIGlzIHRoZSB2YWx1ZVxuICogICAgIHRoYXQgaXMgcmVjZWl2ZWQgZnJvbSB0aGUgY2hhbm5lbC5cbiAqL1xuZnVuY3Rpb24gcmVjdkFzeW5jKGNoYW5uZWwsIGNhbGxiYWNrID0gKCkgPT4ge30pIHtcbiAgY29uc3QgcmVzdWx0ID0gaGFuZGxlUmVjdihjaGFubmVsLCBvcEhhbmRsZXIoY2FsbGJhY2spKTtcbiAgaWYgKHJlc3VsdCAmJiBjYWxsYmFjaykge1xuICAgIGNhbGxiYWNrKHJlc3VsdC52YWx1ZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBTZW5kcyBhIHZhbHVlIHRvIGEgY2hhbm5lbCwgYmxvY2tpbmcgdGhlIGFzeW5jIGZ1bmN0aW9uIHVudGlsIHRoYXQgdmFsdWUgaXNcbiAqIHJlY2VpdmVkIGZyb20gdGhlIGNoYW5uZWwgYnkgYSBkaWZmZXJlbnQgZnVuY3Rpb24gKG9yIHVudGlsIHRoZSBjaGFubmVsXG4gKiBjbG9zZXMpLlxuICpcbiAqIEEgdmFsdWUgaXMgYWx3YXlzIHNlbnQgdG8gdGhlIGNoYW5uZWwsIGJ1dCBpZiB0aGF0IHZhbHVlIGlzbid0IHNwZWNpZmllZCBieVxuICogdGhlIHNlY29uZCBwYXJhbWV0ZXIsIGl0IGlzIGB1bmRlZmluZWRgLiBBbnkgdmFsdWUgbWF5IGJlIHNlbnQgdG8gYSBjaGFubmVsLFxuICogd2l0aCB0aGUgc29sZSBleGNlcHRpb24gb2YgdGhlIHNwZWNpYWwgdmFsdWVcbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC5DTE9TRUR8Q0xPU0VEfWAuXG4gKlxuICogVGhpcyBmdW5jdGlvbiAqbXVzdCogYmUgY2FsbGVkIGZyb20gd2l0aGluIGFuIGFzeW5jIGZ1bmN0aW9uIGFuZCBhcyBwYXJ0IG9mXG4gKiBhbiBgYXdhaXRgIGV4cHJlc3Npb24uXG4gKlxuICogV2hlbiBgc2VuZGAgaXMgY29tcGxldGVkIGFuZCBpdHMgZnVuY3Rpb24gdW5ibG9ja3MsIGl0cyBgYXdhaXRgIGV4cHJlc3Npb25cbiAqIGV2YWx1YXRlcyB0byBhIHN0YXR1cyBib29sZWFuIHRoYXQgaW5kaWNhdGVzIHdoYXQgY2F1c2VkIHRoZSBmdW5jdGlvbiB0b1xuICogdW5ibG9jay4gVGhhdCB2YWx1ZSBpcyBgdHJ1ZWAgaWYgdGhlIHNlbnQgdmFsdWUgd2FzIHN1Y2Nlc3NmdWxseSB0YWtlbiBieVxuICogYW5vdGhlciBwcm9jZXNzLCBvciBgZmFsc2VgIGlmIHRoZSB1bmJsb2NraW5nIGhhcHBlbmVkIGJlY2F1c2UgdGhlIHRhcmdldFxuICogY2hhbm5lbCBjbG9zZWQuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqIEBwYXJhbSB7Kn0gW3ZhbHVlXSBUaGUgdmFsdWUgYmVpbmcgcHV0IG9udG8gdGhlIGNoYW5uZWwuXG4gKiBAcmV0dXJuIHtQcm9taXNlPGJvb2xlYW4+fSBBIHByb21pc2UgdGhhdCB3aWxsIHJlc29sdmUgdG8gYHRydWVgIG9yIGBmYWxzZWBcbiAqICAgICBkZXBlbmRpbmcgb24gd2hldGhlciB0aGUgcHV0IHZhbHVlIGlzIGFjdHVhbGx5IHRha2VuLlxuICovXG5mdW5jdGlvbiBzZW5kKGNoYW5uZWwsIHZhbHVlKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICBzZW5kQXN5bmMoY2hhbm5lbCwgdmFsdWUsIHJlc29sdmUpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBSZWNlaXZlcyBhIHZhbHVlIGZyb20gdGhpcyBjaGFubmVsLCBibG9ja2luZyB0aGUgYXN5bmMgZnVuY3Rpb24gdW50aWwgYSB2YWx1ZVxuICogYmVjb21lcyBhdmFpbGFibGUgdG8gYmUgcmVjZWl2ZWQgKG9yIHVudGlsIHRoZSBjaGFubmVsIGNsb3NlcyB3aXRoIG5vIG1vcmVcbiAqIHZhbHVlcyBvbiBpdCB0byBiZSByZWNlaXZlZCkuXG4gKlxuICogVGhpcyBmdW5jdGlvbiAqbXVzdCogYmUgY2FsbGVkIGZyb20gd2l0aGluIGFuIGFzeW5jIGZ1bmN0aW9uIGFuZCBhcyBwYXJ0IG9mXG4gKiBhbiBgYXdhaXRgIGV4cHJlc3Npb24uXG4gKlxuICogV2hlbiBgcmVjZWl2ZWAgaXMgY29tcGxldGVkIGFuZCBpdHMgZnVuY3Rpb24gdW5ibG9ja3MsIGl0cyBgYXdhaXRgIGV4cHJlc3Npb25cbiAqIGV2YWx1YXRlcyB0byB0aGUgYWN0dWFsIHZhbHVlIHRoYXQgd2FzIHJlY2VpdmVkLiBJZiB0aGUgdGFyZ2V0IGNoYW5uZWxcbiAqIGNsb3NlZCwgdGhlbiBhbGwgb2YgdGhlIHZhbHVlcyBhbHJlYWR5IHBsYWNlZCBvbnRvIGl0IGFyZSByZXNvbHZlZCBieVxuICogYHJlY2VpdmVgIGFzIG5vcm1hbCwgYW5kIG9uY2Ugbm8gbW9yZSB2YWx1ZXMgYXJlIGF2YWlsYWJsZSwgdGhlIHNwZWNpYWwgdmFsdWVcbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC5DTE9TRUR8Q0xPU0VEfWAgaXMgcmV0dXJuZWQuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqIEByZXR1cm4ge1Byb21pc2V9IEEgcHJvbWlzZSB0aGF0IHdpbGwgcmVzb2x2ZSB0byB0aGUgdmFsdWUgcmVjZWl2ZWQgZnJvbSB0aGVcbiAqICAgICBjaGFubmVsIG9uY2UgdGhhdCByZWNlaXZlIGlzIGNvbXBsZXRlZC4gSWYgdGhlIGNoYW5uZWwgY2xvc2VzIHdpdGhvdXQgYVxuICogICAgIHZhbHVlIGJlaW5nIG1hZGUgYXZhaWxhYmxlLCB0aGlzIHdpbGwgcmVzb2x2ZSB0b1xuICogICAgIGB7QGxpbmsgbW9kdWxlOmNzcC5DTE9TRUR8Q0xPU0VEfWAuXG4gKi9cbmZ1bmN0aW9uIHJlY3YoY2hhbm5lbCkge1xuICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgcmVjdkFzeW5jKGNoYW5uZWwsIHJlc29sdmUpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBSZWNlaXZlcyBhIHZhbHVlIGZyb20gYSBjaGFubmVsLCBibG9ja2luZyB0aGUgYXN5bmMgZnVuY3Rpb24gdW50aWwgYSB2YWx1ZVxuICogYmVjb21lcyBhdmFpbGFibGUgdG8gYmUgcmVjZWl2ZWQgKG9yIHVudGlsIHRoZSBjaGFubmVsIGNsb3NlcyB3aXRoIG5vIG1vcmVcbiAqIHZhbHVlcyBvbiBpdCB0byBiZSByZWNlaXZlZCkuIElmIHRoZSByZWNlaXZlZCB2YWx1ZSBpcyBhbiBlcnJvciBvYmplY3QsIHRoYXRcbiAqIGVycm9yIGlzIHRocm93biBhdCB0aGF0IHBvaW50LlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gKm11c3QqIGJlIGNhbGxlZCBmcm9tIHdpdGhpbiBhbiBhc3luYyBmdW5jdGlvbiBhbmQgYXMgcGFydCBvZlxuICogYW4gYGF3YWl0YCBleHByZXNzaW9uLlxuICpcbiAqIEl0IGZ1bmN0aW9ucyBpbiBldmVyeSB3YXkgbGlrZSBge0BsaW5rIG1vZHVsZTpjc3AucmVjdnxyZWN2fWAgKmV4Y2VwdCogaW4gdGhlXG4gKiBjYXNlIHRoYXQgdGhlIHZhbHVlIG9uIHRoZSBjaGFubmVsIGlzIGFuIG9iamVjdCB0aGF0IGhhcyBgRXJyb3IucHJvdG90eXBlYCBpblxuICogaXRzIHByb3RvdHlwZSBjaGFpbiAoYW55IGJ1aWx0LWluIGVycm9yLCBhbnkgcHJvcGVybHktY29uc3RydWN0ZWQgY3VzdG9tXG4gKiBlcnJvcikuIElmIHRoYXQgaGFwcGVucywgdGhlIGVycm9yIGlzIHRocm93biwgd2hpY2ggd2lsbCBjYXVzZSB0aGUgcmV0dXJuZWRcbiAqIHByb21pc2UgdG8gYmUgcmVqZWN0ZWQgd2l0aCB0aGUgZXJyb3IuIEl0IGNhbiB0aGVuIGJlIGhhbmRsZWQgdXAgdGhlIHByb21pc2VcbiAqIGNoYWluIGxpa2UgYW55IG90aGVyIHJlamVjdGVkIHByb21pc2UuXG4gKlxuICogYHRha2VPclRocm93YCBpcyByb3VnaGx5IGVxdWl2YWxlbnQgdG86XG4gKlxuICogYGBgXG4gKiBjb25zdCB2YWx1ZSA9IGF3YWl0IHJlY3YoY2gpO1xuICogaWYgKEVycm9yLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKHZhbHVlKSkge1xuICogICB0aHJvdyB2YWx1ZTtcbiAqIH1cbiAqIGBgYFxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcmV0dXJuIHtQcm9taXNlfSBBIHByb21pc2UgdGhhdCB3aWxsIHJlc29sdmUgdG8gdGhlIHZhbHVlIHRha2VuIGZyb20gdGhlXG4gKiAgICAgY2hhbm5lbCBvbmNlIHRoYXQgdGFrZSBpcyBjb21wbGV0ZWQuIElmIHRoZSBjaGFubmVsIGNsb3NlcyB3aXRob3V0IGFcbiAqICAgICB2YWx1ZSBiZWluZyBtYWRlIGF2YWlsYWJsZSwgdGhpcyB3aWxsIHJlc29sdmUgdG9cbiAqICAgICBge0BsaW5rIG1vZHVsZTpjc3AuQ0xPU0VEfENMT1NFRH1gLiBJZiB0aGUgdGFrZW4gdmFsdWUgaXMgYW4gZXJyb3IsIHRoZVxuICogICAgIHByb21pc2Ugd2lsbCBpbnN0ZWFkIGJlIHJlamVjdGVkIHdpdGggdGhlIGVycm9yIG9iamVjdCBhcyB0aGUgcmVhc29uLlxuICovXG5mdW5jdGlvbiByZWN2T3JUaHJvdyhjaGFubmVsKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgcmVjdkFzeW5jKGNoYW5uZWwsIHJlc3VsdCA9PiB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mLmNhbGwoRXJyb3IucHJvdG90eXBlLCByZXN1bHQpKSB7XG4gICAgICAgIHJlamVjdChyZXN1bHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxuLyoqXG4gKiBDbG9zZXMgdGhlIGNoYW5uZWwsIGlmIGl0IGlzbid0IGFscmVhZHkgY2xvc2VkLiBUaGlzIGltbWVkaWF0ZWx5IHJldHVybnMgYW55XG4gKiBidWZmZXJlZCB2YWx1ZXMgdG8gcGVuZGluZyByZWNlaXZlcy4gSWYgdGhlcmUgYXJlIG5vIGJ1ZmZlcmVkIHZhbHVlcyAob3IgaWZcbiAqIHRoZXkndmUgYWxyZWFkeSBiZWVuIHRha2VuIGJ5IG90aGVyIHJlY2VpdmVzKSwgdGhlbiBhbGwgb2YgdGhlIHJlc3Qgb2YgdGhlXG4gKiByZWNlaXZlcyBhcmUgY29tcGxldGVkIHdpdGggdGhlIHZhbHVlIG9mIGB7QGxpbmsgbW9kdWxlOmNzcC5DTE9TRUR8Q0xPU0VEfWAuXG4gKiBBbnkgcGVuZGluZyBzZW5kcyBhcmUgY29tcGxldGVkIHdpdGggdGhlIHZhbHVlIG9mIGBmYWxzZWAuXG4gKlxuICogTm90ZSB0aGF0IHRoZSBidWZmZXIgaXMgbm90IGVtcHRpZWQgaWYgdGhlcmUgYXJlIHN0aWxsIHZhbHVlcyByZW1haW5pbmcgYWZ0ZXJcbiAqIGFsbCBvZiB0aGUgcGVuZGluZyByZWNlaXZlcyBoYXZlIGJlZW4gaGFuZGxlZC4gVGhlIGNoYW5uZWwgd2lsbCBzdGlsbCBwcm92aWRlXG4gKiB0aG9zZSB2YWx1ZXMgdG8gYW55IGZ1dHVyZSByZWNlaXZlcywgdGhvdWdoIG5vIG5ldyB2YWx1ZXMgbWF5IGJlIGFkZGVkIHRvIHRoZVxuICogY2hhbm5lbC4gT25jZSB0aGUgYnVmZmVyIGlzIGRlcGxldGVkLCBhbnkgZnV0dXJlIHJlY2VpdmVzIHdpbGwgcmV0dXJuXG4gKiBge0BsaW5rIG1vZHVsZTpjc3AuQ0xPU0VEfENMT1NFRH1gLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuQ2hhbm5lbH0gY2hhbm5lbCBUaGUgY2hhbm5lbCB0byBiZSBjbG9zZWQuXG4gKi9cbmZ1bmN0aW9uIGNsb3NlKGNoYW5uZWwpIHtcbiAgY2xvc2VJbXBsKGNoYW5uZWwpO1xufVxuXG5leHBvcnQge1xuICBDTE9TRUQsXG4gIERFRkFVTFQsXG4gIGNoYW4sXG4gIHRpbWVkQ2hhbixcbiAgdHJhbnNDaGFuLFxuICBpc0Nsb3NlZCxcbiAgaXNCdWZmZXJlZCxcbiAgaXNUaW1lZCxcbiAgc2VuZEFzeW5jLFxuICByZWN2QXN5bmMsXG4gIHNlbGVjdEFzeW5jLFxuICBzZW5kLFxuICByZWN2LFxuICByZWN2T3JUaHJvdyxcbiAgc2VsZWN0LFxuICBjbG9zZSxcbiAgdmFsdWUsXG4gIGNoYW5uZWxcbn07XG5cbi8qKlxuICogVXNlZCBieSBjaGFubmVscyB0byB0cmFjayBleGVjdXRpb24gb2Ygb3BlcmF0aW9ucyAoYHNlbmRgLCBgcmVjdmAsIGFuZFxuICogYHNlbGVjdGApLiBUaGV5IHByb3ZpZGUgdHdvIHBpZWNlcyBvZiBpbmZvcm1hdGlvbjogdGhlIGZ1bmN0aW9uIHRvIGNhbGwgd2hlblxuICogYSBgc2VuZGAgb3IgYHJlY3ZgIHVuYmxvY2tzIChiZWNhdXNlIGEgdmFsdWUgZ2l2ZW4gdG8gc2VuZCBoYXMgYmVlbiByZWNlaXZlZCxcbiAqIG9yIGEgYHJlY3ZgIGhhcyBhY2NlcHRlZCBhIHZhbHVlIHRoYXQgaGFzIGJlZW4gc2VudCkgYW5kIHdoZXRoZXIgb3Igbm90IHRoZVxuICogaGFuZGxlciBpcyBzdGlsbCBhY3RpdmUuXG4gKlxuICogVGhlIGZ1bmN0aW9uIGlzIGEgY2FsbGJhY2sgdGhhdCBhY3R1YWxseSBkZWZpbmVzIHRoZSBkaWZmZXJlbmNlIGJldHdlZW5cbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC5zZW5kfHNlbmR9YCAvIGB7QGxpbmsgbW9kdWxlOmNzcC5yZWN2fHJlY3Z9YCAvXG4gKiBge0BsaW5rIG1vZHVsZTpjc3Auc2VsZWN0fHNlbGVjdH1gIGFuZFxuICogYHtAbGluayBtb2R1bGU6Y3NwLnNlbmRBc3luY3xzZW5kQXN5bmN9YCAvXG4gKiBge0BsaW5rIG1vZHVsZTpjc3AucmVjdkFzeW5jfHJlY3ZBc3luY31gIC9cbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC5zZWxlY3RBc3luY3xzZWxlY3RBc3luY31gOiB3aGlsZSB0aGUgdW5ibG9ja2VkIGNhbGxzIHVzZVxuICogdGhlIGNhbGxiYWNrIHBhc3NlZCB0byB0aGUgZnVuY3Rpb24sIGBzZW5kYCwgYHJlY3ZgLCBhbmQgYHNlbGVjdGAgc2ltcGx5XG4gKiBjb250aW51ZSB0aGUgcHJvY2VzcyB3aGVyZSBpdCBsZWZ0IG9mZi4gKFRoaXMgaXMgd2h5IGBzZW5kYCwgYHJlY3ZgLCBhbmRcbiAqIGBzZWxlY3RgIG9ubHkgd29yayBpbnNpZGUgYGFzeW5jYCBmdW5jdGlvbnMgd2l0aCBgYXdhaXRgIGlmIHRoZSByZXR1cm4gdmFsdWVcbiAqIGlzIG5lZWRlZCwgYmVjYXVzZSBvdGhlcndpc2UgdGhlcmUncyBubyBwcm9jZXNzIHRvIGNvbnRpbnVlLilcbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIHByb3ZpZGVkIGFzIHRoZSByZXR1cm4gdmFsdWUgb2YgdGhlIGBjb21taXRgIG1ldGhvZC4gQ2FsbGluZ1xuICogYGNvbW1pdGAgaGFzIG5vIGV4dHJhIGVmZmVjdCB3aXRoIGBzZW5kYCBhbmQgYHJlY3ZgIG9wZXJhdGlvbnMsIGJ1dCBmb3JcbiAqIGBzZWxlY3RgLCBpdCBhbHNvIG1hcmtzIHRoZSBoYW5kbGVyIGFzIG5vIGxvbmdlciBiZWluZyBhY3RpdmUuIFRoaXMgbWVhbnNcbiAqIHRoYXQgb25seSBvbmUgb2YgdGhlIG9wZXJhdGlvbnMgcGFzc2VkIHRvIHNlbGVjdCBjYW4gYmUgY29tcGxldGVkLCBiZWNhdXNlXG4gKiBhZnRlciB0aGUgZmlyc3Qgb25lLCB0aGUgaGFuZGxlciBpcyBubyBsb25nZXIgYWN0aXZlIGFuZCB3aWxsIG5vdCBiZSBhbGxvd2VkXG4gKiB0byBwcm9jZXNzIGEgc2Vjb25kIG9wZXJhdGlvbi5cbiAqXG4gKiBJZiBhIGBzZW5kYCBvciBgcmVjdmAgKG9yIGVxdWl2YWxlbnQgYHNlbGVjdGAgb3BlcmF0aW9uKSBjYW5ub3QgYmVcbiAqIGltbWVkaWF0ZWx5IGNvbXBsZXRlZCBiZWNhdXNlIHRoZXJlIGlzbid0IGEgY29ycmVzcG9uZGluZyBwZW5kaW5nIGByZWN2YCBvclxuICogYHNlbmRgLCB0aGUgaGFuZGxlciBpcyBxdWV1ZWQgdG8gYmUgcnVuIHdoZW4gYSBuZXcgYHJlY3ZgIG9yIGBzZW5kYCBiZWNvbWVzXG4gKiBhdmFpbGFibGUuXG4gKlxuICogQHR5cGVkZWYgSGFuZGxlclxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3AvY2hhbm5lbFxuICogQHByb3BlcnR5IHtib29sZWFufSBhY3RpdmUgV2hldGhlciBvciBub3QgdGhlIG9wZXJhdGlvbiBpcyBzdGlsbCBhY3RpdmUuIEFuXG4gKiAgICAgaW5hY3RpdmUgb3BlcmF0aW9uIGlzIG5vdCBzZXJ2aWNlZCBhbmQgd2lsbCBiZSBjbGVhcmVkIGZyb20gdGhlIHF1ZXVlIG9uXG4gKiAgICAgdGhlIG5leHQgZGlydHkgb3BlcmF0aW9uIHB1cmdlLlxuICogQHByb3BlcnR5IHtmdW5jdGlvbn0gY29tbWl0IE1hcmtzIHRoZSBoYW5kbGVyIGFzIGluYWN0aXZlIChzbyBpdCBkb2Vzbid0IHJ1blxuICogICAgIHR3aWNlKSBhbmQgcmV0dXJucyB0aGUgY2FsbGJhY2sgdG8gYmUgcnVuIHdoZW4gdGhlIG9wZXJhdGlvbiBjb21wbGV0ZXMuXG4gKiBAcHJpdmF0ZVxuICovXG5cbi8qKlxuICogQSBjYWxsYmFjayBmdW5jdGlvbiBydW4gd2hlbiBhIGBzZW5kYCBvciBgcmVjdmAgb3BlcmF0aW9uIGNvbXBsZXRlcy5cbiAqXG4gKiBAY2FsbGJhY2sgSGFuZGxlckNhbGxiYWNrXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcC9jaGFubmVsXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSBwcm92aWRlZCBieSB0aGUgY2hhbm5lbC4gSW4gYSBgcmVjdmAsIHRoaXMgaXMgdGhlXG4gKiAgICAgdmFsdWUgcmVjZWl2ZWQgZnJvbSB0aGUgY2hhbm5lbC4gSW4gYSBgc2VuZGAsIHRoaXMgaXMgYHRydWVgIGZvciBhXG4gKiAgICAgc3VjY2Vzc2Z1bCBzZW5kIGFuZCBgZmFsc2VgIGlmIHRoZSBjaGFubmVsIGlzIGNsb3NlZCBiZWZvcmUgdGhlIHNlbmQgY2FuXG4gKiAgICAgY29tcGxldGUuXG4gKiBAcHJpdmF0ZVxuICovXG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuaW1wb3J0IHsgYm94LCBoYW5kbGVTZW5kLCBoYW5kbGVSZWN2LCBpc0JveCB9IGZyb20gXCIuL2hhbmRsZXJcIjtcblxuLyoqXG4gKiBUaGUgbmFtZSBvZiB0aGUgY2hhbm5lbCByZXR1cm5lZCBmcm9tIGBhd2FpdFxuICoge0BsaW5rIG1vZHVsZTpjc3Auc2VsZWN0fHNlbGVjdH1gIG9yIHNlbnQgdG8gdGhlIGNhbGxiYWNrIGluXG4gKiBge0BsaW5rIG1vZHVsZTpjc3Auc2VsZWN0QXN5bmN8c2VsZWN0QXN5bmN9YCB3aGVuIHRoZSBkZWZhdWx0IGlzIHJldHVybmVkIGFzXG4gKiBpdHMgdmFsdWUuXG4gKlxuICogVGhpcyBvbmx5IGhhcHBlbnMgd2hlbiBhbiBge0BsaW5rIG1vZHVsZTpjc3Auc2VsZWN0fHNlbGVjdH0gL1xuICoge0BsaW5rIG1vZHVsZTpjc3Auc2VsZWN0QXN5bmN8c2VsZWN0QXN5bmN9YCBjYWxsIGlzIHBlcmZvcm1lZCwgYWxsIG9wZXJhdGlvbnNcbiAqIGFyZSBpbml0aWFsbHkgYmxvY2tpbmcsIGFuZCBhIGBkZWZhdWx0YCBvcHRpb24gaXMgc2VudC4gVGhlIGltbWVkaWF0ZVxuICogcmVzcG9uc2UgaW4gdGhhdCBzaXR1YXRpb24gaXMgYHsgdmFsdWU6IG9wdGlvbnMuZGVmYXVsdCwgY2hhbm5lbDogREVGQVVMVCB9YC5cbiAqXG4gKiBAdHlwZSB7U3ltYm9sfVxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqL1xuY29uc3QgREVGQVVMVCA9IFN5bWJvbChcIkRFRkFVTFRcIik7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBoYW5kbGVyIHVzZWQgZm9yIGBzZWxlY3RgIG9wZXJhdGlvbnMuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3AvY2hhbm5lbFxuICogQHBhcmFtIHttb2R1bGU6Y3NwL2NoYW5uZWwuQm94fSBhY3RpdmUgQSBib3hlZCB2YWx1ZSBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlXG4gKiAgICAgaGFuZGxlciBpcyB2YWxpZC4gVGhpcyBpcyBhIGJveGVkIHZhbHVlIGJlY2F1c2UgdGhlIHNlbGVjdC1oYW5kbGluZyBjb2RlXG4gKiAgICAgbmVlZHMgdG8gbWFuaXB1bGF0ZSBpdCBkaXJlY3RseS5cbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC9jaGFubmVsLkhhbmRsZXJDYWxsYmFja30gZm4gVGhlIGNhbGxiYWNrIHRvIGJlIHJ1biB3aGVuXG4gKiAgICAgKGFuZCBpZikgdGhlIG9wZXJhdGlvbiBjb21wbGV0ZXMuXG4gKiBAcmV0dXJuIHttb2R1bGU6Y3NwL2NoYW5uZWwuSGFuZGxlcn0gVGhlIG5ldyBoYW5kbGVyLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gc2VsZWN0SGFuZGxlcihhY3RpdmUsIGZuKSB7XG4gIHJldHVybiBPYmplY3QuY3JlYXRlKG51bGwsIHtcbiAgICBhY3RpdmU6IHtcbiAgICAgIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIGFjdGl2ZS52YWx1ZTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgY29tbWl0OiB7XG4gICAgICB2YWx1ZTogKCkgPT4ge1xuICAgICAgICBhY3RpdmUudmFsdWUgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIGZuO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHJhbmRvbWx5IHNodWZmbGVkIGFycmF5IGNvbnRhaW5pbmcgb25lIG9mIGVhY2ggaW50ZWdlciB2YWx1ZSBmcm9tXG4gKiBgMGAgdG8gYW4gdXBwZXIgbGltaXQuIEl0IGlzIHVzZWQgdG8gcmFuZG9tbHkgc2VsZWN0IGEgY2hhbm5lbCB0byBiZSBhY3RpdmVcbiAqIHdoZW4gbXVsdGlwbGVzIHVuYmxvY2sgaW4gYSBgc2VsZWN0YCBvcGVyYXRpb24uXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3AvY2hhbm5lbFxuICogQHBhcmFtIHtudW1iZXJ9IHVwcGVyIFRoZSB1cHBlciBsaW1pdCBvZiB0aGUgYXJyYXkgdmFsdWVzLCBleGNsdXNpdmUuXG4gKiBAcmV0dXJuIHtudW1iZXJbXX0gQW4gYXJyYXkgb2YgaW50ZWdlcnMgZnJvbSBgMGAgdG8gYHVwcGVyIC0gMWAsIHNodWZmbGVkXG4gKiAgICAgaW50byBhIHJhbmRvbSBvcmRlci5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHJhbmRvbUFycmF5KHVwcGVyKSB7XG4gIGNvbnN0IGFycmF5ID0gW107XG4gIGZvciAobGV0IGsgPSAwOyBrIDwgdXBwZXI7IGsrKykge1xuICAgIGFycmF5LnB1c2goayk7XG4gIH1cbiAgZm9yIChsZXQgaiA9IHVwcGVyIC0gMTsgaiA+IDA7IGotLSkge1xuICAgIGNvbnN0IGkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoaiArIDEpKTtcbiAgICBjb25zdCB0ZW1wID0gYXJyYXlbal07XG4gICAgYXJyYXlbal0gPSBhcnJheVtpXTtcbiAgICBhcnJheVtpXSA9IHRlbXA7XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG4vKipcbiAqIEEgcmVzdWx0IHRoYXQgY29tZXMgZnJvbSBgc2VsZWN0YCBvcGVyYXRpb25zLlxuICpcbiAqIEB0eXBlZGVmIFNlbGVjdFJlc3VsdFxuICogQHByb3BlcnR5IHsqfSB2YWx1ZSBJZiB0aGUgYHNlbGVjdGAgb3BlcmF0aW9uIHJlc3VsdGVkIGluIGEgcmVjZWl2ZSwgdGhpcyBpc1xuICogICAgIHRoZSB2YWx1ZSByZWNlaXZlZCBmcm9tIHRoZSBjaGFubmVsLiBJZiBpdCByZXN1bHRlZCBpbiBhIHNlbmQsIHRoaXMgaXNcbiAqICAgICBgdHJ1ZWAgZm9yIGEgc3VjY2Vzc2Z1bCBzZW5kIGFuZCBgZmFsc2VgIGlmIHRoZSBjaGFubmVsIGNsb3NlZCBmaXJzdC5cbiAqIEBwcm9wZXJ0eSB7bW9kdWxlOmNzcC5DaGFubmVsfSBjaGFubmVsIFRoZSBjaGFubmVsIHVwb24gd2hpY2ggdGhlIHNlbGVjdGVkXG4gKiAgICAgb3BlcmF0aW9uIGhhcHBlbmVkLlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgYSBzZWxlY3QgcmVzdWx0IGZyb20gaXRzIGNvbXBvbmVudCBwcm9wZXJ0aWVzLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwL2NoYW5uZWxcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgSWYgdGhlIGBzZWxlY3RgIG9wZXJhdGlvbiByZXN1bHRlZCBpbiBhIHJlY2VpdmUsIHRoaXMgaXMgdGhlXG4gKiAgICAgdmFsdWUgcmVjZWl2ZWQgZnJvbSB0aGUgY2hhbm5lbC4gSWYgaXQgcmVzdWx0ZWQgaW4gYSBzZW5kLCB0aGlzIGlzIGB0cnVlYFxuICogICAgIGZvciBhIHN1Y2Nlc3NmdWwgc2VuZCBhbmQgYGZhbHNlYCBpZiB0aGUgY2hhbm5lbCBjbG9zZWQgZmlyc3QuXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuQ2hhbm5lbH0gY2hhbm5lbCBUaGUgY2hhbm5lbCB1cG9uIHdoaWNoIHRoZSBzZWxlY3RlZFxuICogICAgIG9wZXJhdGlvbiBoYXBwZW5lZC5cbiAqIEByZXR1cm4ge21vZHVsZTpjc3AuU2VsZWN0UmVzdWx0fSBUaGUgcHJvcGVydGllcyB3cmFwcGVkIGludG8gYW4gb2JqZWN0IGZvclxuICogICAgIG91dHB1dC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHNlbGVjdFJlc3VsdCh2YWx1ZSwgY2hhbm5lbCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuY3JlYXRlKG51bGwpLCB7IHZhbHVlLCBjaGFubmVsIH0pO1xufVxuXG4vKipcbiAqIENvbXBsZXRlcyB0aGUgZmlyc3Qgb3BlcmF0aW9uIGFtb25nIHRoZSBwcm92aWRlZCBvcGVyYXRpb25zIHRoYXQgY29tZXNcbiAqIGF2YWlsYWJsZSwgd2l0aG91dCBibG9ja2luZy5cbiAqXG4gKiBUaGlzIG1lYW5zIHRoYXQgYSBjYWxsIHRvIGBzZWxlY3RBc3luY2AgZG9lcyBub3QgZ28gaW50byBhbiBgYXdhaXRgXG4gKiBleHByZXNzaW9uLCBhbmQgaXQgaXMgbm90IG5lY2Vzc2FyeSB0byB1c2UgaXQgaW5zaWRlIGEgcHJvY2Vzcy4gUmF0aGVyIHRoYW5cbiAqIGJsb2NraW5nIHVudGlsIGFuIG9wZXJhdGlvbiBjb21wbGV0ZXMsIHRoaXMgb25lIHJldHVybnMgaW1tZWRpYXRlbHkgYW5kIHRoZW5cbiAqIGludm9rZXMgdGhlIGNhbGxiYWNrIChpZiBwcm92aWRlZCkgYXMgc29vbiBhcyBvbmUgb2YgdGhlIHN1cHBsaWVkIG9wZXJhdGlvbnNcbiAqIGNvbXBsZXRlcy4gSXQgY2FuIGJlIHJlZ2FyZGVkIGFzIGEgbm9uLWJsb2NraW5nIHZlcnNpb24gb2ZcbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC5zZWxlY3R8c2VsZWN0fWAuXG4gKlxuICogVGhpcyBmdW5jdGlvbiB1c2VzIGFuIG9wZXJhdGlvbnMgbGlzdCB0aGF0J3MgaWRlbnRpY2FsIHRvIHRoZSBvbmUgdXNlZCBieVxuICogYHtAbGluayBtb2R1bGU6Y3NwLnNlbGVjdHxzZWxlY3R9YC4gSXQncyBhbiBhcnJheSBvZiB2YWx1ZXM7IGlmIGEgdmFsdWUgaXMgYVxuICogY2hhbm5lbCwgdGhlbiB0aGF0IG9wZXJhdGlvbiBpcyBhIHRha2Ugb24gdGhhdCBjaGFubmVsLCB3aGlsZSBpZiBpdCdzIGFcbiAqIHR3by1lbGVtZW50IGFycmF5IG9mIGNoYW5uZWwgYW5kIHZhbHVlLCB0aGVuIHRoYXQgb3BlcmF0aW9uIGlzIGEgcHV0IG9mIHRoYXRcbiAqIHZhbHVlIG9udG8gdGhhdCBjaGFubmVsLiBBbGwgb3B0aW9ucyB0aGF0IGFyZSBhdmFpbGFibGUgdG9cbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC5zZWxlY3R8c2VsZWN0fWAgYXJlIGFsc28gYXZhaWxhYmxlIGhlcmUuXG4gKlxuICogVGhlIGNhbGxiYWNrIGlzIGEgZnVuY3Rpb24gb2Ygb25lIHBhcmFtZXRlciwgd2hpY2ggaW4gdGhpcyBjYXNlIGlzIGFuIG9iamVjdFxuICogd2l0aCBgdmFsdWVgIGFuZCBgY2hhbm5lbGAgcHJvcGVydGllcy5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICogQHBhcmFtIHtPYmplY3RbXX0gb3BlcmF0aW9ucyBBIGNvbGxlY3Rpb24gb2YgZWxlbWVudHMgdGhhdCBjb3JyZXNwb25kIHRvIHJlY3ZcbiAqICAgICBhbmQgc2VuZCBvcGVyYXRpb25zLiBBIHJlY3Ygb3BlcmF0aW9uIGlzIHNpZ25pZmllZCBieSBhbiBlbGVtZW50IHRoYXQgaXNcbiAqICAgICBhIGNoYW5uZWwgKHdoaWNoIGlzIHRoZSBjaGFubmVsIHRvIGJlIHJlY2VpdmVkIGZyb20pLiBBIHNlbmQgb3BlcmF0aW9uIGlzXG4gKiAgICAgc3BlY2lmaWVkIGJ5IGFuIGVsZW1lbnQgdGhhdCBpcyBpdHNlbGYgYSB0d28tZWxlbWVudCBhcnJheSwgd2hpY2ggaGFzIGFcbiAqICAgICBjaGFubmVsIGZvbGxvd2VkIGJ5IGEgdmFsdWUgKHdoaWNoIGlzIHRoZSBjaGFubmVsIGFuZCB2YWx1ZSB0byBiZSBzZW50KS5cbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5TZWxlY3RDYWxsYmFja30gY2FsbGJhY2sgQSBmdW5jdGlvbiB0aGF0IGdldHMgaW52b2tlZCB3aGVuXG4gKiAgICAgb25lIG9mIHRoZSBvcGVyYXRpb25zIGNvbXBsZXRlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gQW4gb3B0aW9uYWwgb2JqZWN0IHdoaWNoIGNhbiBjaGFuZ2UgdGhlIGJlaGF2aW9yXG4gKiAgICAgb2YgYHNlbGVjdEFzeW5jYCB0aHJvdWdoIHR3byBwcm9wZXJ0aWVzLlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5wcmlvcml0eT1mYWxzZV0gSWYgYHRydWVgLCB0aGVuIHRoZSBwcmlvcml0eSBvZlxuICogICAgIG9wZXJhdGlvbnMgdG8gY29tcGxldGUgd2hlbiBtb3JlIHRoYW4gb25lIGlzIGltbWVkaWF0ZWx5IGF2YWlsYWJsZSBpcyBhXG4gKiAgICAgcHJpb3JpdHkgYWNjb3JkaW5nIHRvIHBvc2l0aW9uIHdpdGhpbiB0aGUgb3BlcmF0aW9ucyBhcnJheSAoZWFybGllclxuICogICAgIHBvc2l0aW9ucyBoYXZlIHRoZSBoaWdoZXIgcHJpb3JpdHkpLiBJZiBgZmFsc2VgIG9yIG5vdCBwcmVzZW50LCB0aGVcbiAqICAgICBwcmlvcnR5IG9mIG9wZXJhdGlvbiBjb21wbGV0aW9uIGlzIHJhbmRvbS5cbiAqIEBwYXJhbSB7Kn0gW29wdGlvbnMuZGVmYXVsdF0gSWYgc2V0IGFuZCBhbGwgb2YgdGhlIG9wZXJhdGlvbnMgaW5pdGlhbGx5XG4gKiAgICAgYmxvY2ssIHRoZSBgc2VsZWN0QXN5bmNgIGNhbGxzIGl0cyBjYWxsYmFjayBpbW1lZGlhdGVseSB3aXRoIHRoZSB2YWx1ZSBvZlxuICogICAgIHRoaXMgb3B0aW9uICh0aGUgY2hhbm5lbCB3aWxsIGJlIGB7QGxpbmsgbW9kdWxlOmNzcC5ERUZBVUxUfERFRkFVTFR9KWAuXG4gKiAgICAgSWYgbm90IHNldCwgdGhlIGBzZWxlY3RBc3luY2AgY2FsbCB3aWxsIG5vdCBjYWxsIGl0cyBjYWxsYmFjayB1bnRpbCBvbmVcbiAqICAgICBvZiB0aGUgb3BlcmF0aW9ucyBjb21wbGV0ZXMgYW5kIHRoYXQgdmFsdWUgYW5kIGNoYW5uZWwgd2lsbCBiZSB0aGUgb25lc1xuICogICAgIHJldHVybmVkLlxuICovXG5mdW5jdGlvbiBzZWxlY3RBc3luYyhvcHMsIGNhbGxiYWNrID0gKCkgPT4ge30sIG9wdGlvbnMgPSB7fSkge1xuICBjb25zdCBjb3VudCA9IG9wcy5sZW5ndGg7XG4gIGlmIChjb3VudCA9PT0gMCkge1xuICAgIHRocm93IEVycm9yKFwic2VsZWN0IGNhbGxlZCB3aXRoIG5vIG9wZXJhdGlvbnNcIik7XG4gIH1cblxuICBjb25zdCBwcmlvcml0eSA9ICEhb3B0aW9ucy5wcmlvcml0eTtcbiAgY29uc3QgaW5kaWNlcyA9IHByaW9yaXR5ID8gW10gOiByYW5kb21BcnJheShjb3VudCk7XG5cbiAgY29uc3QgYWN0aXZlID0gYm94KHRydWUpO1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZVNlbGVjdEhhbmRsZXIoY2hhbm5lbCkge1xuICAgIHJldHVybiBzZWxlY3RIYW5kbGVyKGFjdGl2ZSwgdmFsdWUgPT4ge1xuICAgICAgY2FsbGJhY2soc2VsZWN0UmVzdWx0KHZhbHVlLCBjaGFubmVsKSk7XG4gICAgfSk7XG4gIH1cblxuICBsZXQgcmVzdWx0O1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgIC8vIENob29zZSBhbiBvcGVyYXRpb24uIElmIGBwcmlvcml0eWAgaXMgdHJ1ZSB0aGVuIGl0J3MgdGhlIG5leHQgaW5kZXgsXG4gICAgLy8gb3RoZXJ3aXNlIGl0J3MgcmFuZG9tXG4gICAgY29uc3Qgb3AgPSBvcHNbcHJpb3JpdHkgPyBpIDogaW5kaWNlc1tpXV07XG4gICAgbGV0IGNoYW5uZWwsIHZhbHVlO1xuXG4gICAgLy8gQXBwbHkgZXZlcnkgb3BlcmF0aW9uIHRvIGl0cyBjaGFubmVsLCBvbmUgYXQgYSB0aW1lXG4gICAgaWYgKEFycmF5LmlzQXJyYXkob3ApKSB7XG4gICAgICBbY2hhbm5lbCwgdmFsdWVdID0gb3A7XG4gICAgICByZXN1bHQgPSBoYW5kbGVTZW5kKGNoYW5uZWwsIHZhbHVlLCBjcmVhdGVTZWxlY3RIYW5kbGVyKGNoYW5uZWwpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2hhbm5lbCA9IG9wO1xuICAgICAgcmVzdWx0ID0gaGFuZGxlUmVjdihjaGFubmVsLCBjcmVhdGVTZWxlY3RIYW5kbGVyKGNoYW5uZWwpKTtcbiAgICB9XG5cbiAgICAvLyBXZSBjaGVjayBmb3IgYm94IGhlcmUgYmVjYXVzZSBhIGJveCBmcm9tIGEgY2hhbm5lbCBpbmRpY2F0ZXMgdGhhdCB0aGVcbiAgICAvLyB2YWx1ZSBpcyBpbW1lZGlhdGVseSBhdmFpbGFibGUgKHRoYXQgdGhlcmUgaXMgbm8gbmVlZCB0byBibG9jayB0byBnZXQgdGhlXG4gICAgLy8gdmFsdWUpLiBJZiB0aGlzIGhhcHBlbnMsIHdlIGV4ZWN1dGUgdGhlIGNhbGxiYWNrIGltbWVkaWF0ZWx5IHdpdGggdGhhdFxuICAgIC8vIHZhbHVlIGFuZCBjaGFubmVsIGFuZCBzdG9wIHF1ZXVlaW5nIG90aGVyIG9wZXJhdGlvbnMuXG4gICAgaWYgKGlzQm94KHJlc3VsdCkpIHtcbiAgICAgIGNhbGxiYWNrKHNlbGVjdFJlc3VsdChyZXN1bHQudmFsdWUsIGNoYW5uZWwpKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIC8vIElmIG5vbmUgb2YgdGhlIG9wZXJhZXRpb25zIGltbWVkaWF0ZWx5IHJldHVybmVkIHZhbHVlcyAodGhleSBhcmUgYWxsXG4gIC8vIGJsb2NrZWQpLCBhbmQgd2UgaGF2ZSBzZXQgYSBkZWZhdWx0IGNoYW5uZWwgb3B0aW9uLCB0aGVuIHJldHVybiB0aGUgdmFsdWVcbiAgLy8gaWYgdGhlIGRlZmF1bHQgY2hhbm5lbCByYXRoZXIgdGhhbiB3YWl0aW5nIGZvciB0aGUgcXVldWVkIG9wZXJhdGlvbnMgdG9cbiAgLy8gY29tcGxldGUuXG4gIGlmIChcbiAgICAhaXNCb3gocmVzdWx0KSAmJlxuICAgIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvcHRpb25zLCBcImRlZmF1bHRcIilcbiAgKSB7XG4gICAgaWYgKGFjdGl2ZS52YWx1ZSkge1xuICAgICAgYWN0aXZlLnZhbHVlID0gZmFsc2U7XG4gICAgICBjYWxsYmFjayhzZWxlY3RSZXN1bHQob3B0aW9ucy5kZWZhdWx0LCBERUZBVUxUKSk7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQ29tcGxldGVzIHRoZSBmaXJzdCBvcGVyYXRpb24gYW1vbmcgdGhlIHByb3ZpZGVkIG9wZXJhdGlvbnMgdGhhdCBjb21lc1xuICogYXZhaWxhYmxlLCBibG9ja2luZyB0aGUgcHJvY2VzcyB1bnRpbCB0aGVuLlxuICpcbiAqIGBvcGVyYXRpb25zYCBpcyBhbiBhcnJheSB3aG9zZSBlbGVtZW50cyBtdXN0IGJlIGNoYW5uZWxzIG9yIHR3by1lbGVtZW50XG4gKiBzdWItYXJyYXlzIG9mIGNoYW5uZWxzIGFuZCB2YWx1ZXMsIGluIGFueSBjb21iaW5hdGlvbi4gQW4gb3BlcmF0aW9uIHRoYXQgaXMgYVxuICogY2hhbm5lbCBpcyBhIHRha2Ugb3BlcmF0aW9uIG9uIHRoYXQgY2hhbm5lbC4gQW4gb3BlcmF0aW9uIHRoYXQgaXMgYVxuICogdHdvLWVsZW1lbnQgYXJyYXkgaXMgYSBwdXQgb3BlcmF0aW9uIG9uIHRoYXQgY2hhbm5lbCB1c2luZyB0aGF0IHZhbHVlLlxuICogRXhhY3RseSBvbmUgb2YgdGhlc2Ugb3BlcmF0aW9ucyB3aWxsIGNvbXBsZXRlLCBhbmQgaXQgd2lsbCBiZSB0aGUgZmlyc3RcbiAqIG9wZXJhdGlvbiB0aGF0IHVuYmxvY2tzLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gKm11c3QqIGJlIGNhbGxlZCBmcm9tIHdpdGhpbiBhbiBgYXN5bmNgIGZ1bmN0aW9uIGFuZCBhcyBwYXJ0IG9mXG4gKiBhbiBgYXdhaXRgIGV4cHJlc3Npb24gaWYgdGhlIHJldHVybiB2YWx1ZSBpcyBuZWVkZWQuXG4gKlxuICogV2hlbiBgc2VsZWN0YCBpcyBjb21wbGV0ZWQgYW5kIGl0cyBwcm9jZXNzIHVuYmxvY2tzLCBpdHMgYGF3YWl0YCBleHByZXNzaW9uXG4gKiBldmFsdWF0ZXMgdG8gYW4gb2JqZWN0IG9mIHR3byBwcm9wZXJ0aWVzLiBUaGUgYHZhbHVlYCBwcm9wZXJ0eSBiZWNvbWVzXG4gKiBleGFjdGx5IHdoYXQgd291bGQgaGF2ZSBiZWVuIHJldHVybmVkIGJ5IHRoZSBlcXVpdmFsZW50IGBhd2FpdCBwdXRgIG9yIGBhd2FpdFxuICogdGFrZWAgb3BlcmF0aW9uOiBhIGJvb2xlYW4gaW4gdGhlIGNhc2Ugb2YgYSBwdXQsIG9yIHRoZSB0YWtlbiB2YWx1ZSBpbiB0aGVcbiAqIGNhc2Ugb2YgYSB0YWtlLiBUaGUgYGNoYW5uZWxgIHByb3BlcnR5IGlzIHNldCB0byB0aGUgY2hhbm5lbCB3aGVyZSB0aGVcbiAqIG9wZXJhdGlvbiBhY3R1YWxseSB0b29rIHBsYWNlLiBUaGlzIHdpbGwgYmUgZXF1aXZhbGVudCB0byB0aGUgY2hhbm5lbCBpbiB0aGVcbiAqIGBvcGVyYXRpb25zYCBhcnJheSB3aGljaCBjb21wbGV0ZWQgZmlyc3QsIGFsbG93aW5nIHRoZSBwcm9jZXNzIHRvIHVuYmxvY2suXG4gKlxuICogSWYgdGhlcmUgaXMgbW9yZSB0aGFuIG9uZSBvcGVyYXRpb24gYWxyZWFkeSBhdmFpbGFibGUgdG8gY29tcGxldGUgd2hlbiB0aGVcbiAqIGNhbGwgdG8gYHNlbGVjdGAgaXMgbWFkZSwgdGhlIG9wZXJhdGlvbiB3aXRoIHRoZSBoaWdoZXN0IHByaW9yaXR5IHdpbGwgYmUgdGhlXG4gKiBvbmUgdG8gY29tcGxldGUuIFJlZ3VsYXJseSwgcHJpb3JpdHkgaXMgbm9uLWRldGVybWluaXN0aWMgKGkuZS4sIGl0J3Mgc2V0XG4gKiByYW5kb21seSkuIEhvd2V2ZXIsIGlmIHRoZSBvcHRpb25zIG9iamVjdCBoYXMgYSBgcHJpb3JpdHlgIHZhbHVlIHNldCB0b1xuICogYHRydWVgLCBwcmlvcml0eSB3aWxsIGJlIGFzc2lnbmVkIGluIHRoZSBvcmRlciBvZiB0aGUgb3BlcmF0aW9ucyBpbiB0aGVcbiAqIHN1cHBsaWVkIGFycmF5LlxuICpcbiAqIElmIGFsbCBvZiB0aGUgb3BlcmF0aW9ucyBtdXN0IGJsb2NrIChpLmUuLCB0aGVyZSBhcmUgbm8gcGVuZGluZyBwdXRzIGZvciB0YWtlXG4gKiBvcGVyYXRpb25zLCBvciB0YWtlcyBmb3IgcHV0IG9wZXJhdGlvbnMpLCBhIGRlZmF1bHQgdmFsdWUgbWF5IGJlIHJldHVybmVkLlxuICogVGhpcyBpcyBvbmx5IGRvbmUgaWYgdGhlcmUgaXMgYSBgZGVmYXVsdGAgcHJvcGVydHkgaW4gdGhlIG9wdGlvbnMgb2JqZWN0LCBhbmRcbiAqIHRoZSB2YWx1ZSBvZiB0aGF0IHByb3BlcnR5IGJlY29tZXMgdGhlIHZhbHVlIHJldHVybmVkIGJ5IGBhd2FpdCBzZWxlY3RgLiBUaGVcbiAqIGNoYW5uZWwgaXMgc2V0IHRvIHRoZSBzcGVjaWFsIHZhbHVlIGB7QGxpbmsgbW9kdWxlOmNzcC5ERUZBVUxUfERFRkFVTFR9YC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICogQHBhcmFtIHtvYmplY3RbXX0gb3BlcmF0aW9ucyBBIGNvbGxlY3Rpb24gb2YgZWxlbWVudHMgdGhhdCBjb3JyZXNwb25kIHRvIHJlY3ZcbiAqICAgICBhbmQgc2VuZCBvcGVyYXRpb25zLiBBIHJlY3Ygb3BlcmF0aW9uIGlzIHNpZ25pZmllZCBieSBhbiBlbGVtZW50IHRoYXQgaXNcbiAqICAgICBhIGNoYW5uZWwgKHdoaWNoIGlzIHRoZSBjaGFubmVsIHRvIGJlIHRha2VuIGZyb20pLiBBIHNlbmQgb3BlcmF0aW9uIGlzXG4gKiAgICAgc3BlY2lmaWVkIGJ5IGFuIGVsZW1lbnQgdGhhdCBpcyBpdHNlbGYgYSB0d28tZWxlbWVudCBhcnJheSwgd2hpY2ggaGFzIGFcbiAqICAgICBjaGFubmVsIGZvbGxvd2VkIGJ5IGEgdmFsdWUgKHdoaWNoIGlzIHRoZSBjaGFubmVsIGFuZCB2YWx1ZSB0byBiZSBzZW50KS5cbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9ucz17fV0gQW4gb3B0aW9uYWwgb2JqZWN0IHdoaWNoIGNhbiBjaGFuZ2UgdGhlIGJlaGF2aW9yXG4gKiAgICAgb2YgYHNlbGVjdGAgdGhyb3VnaCB0d28gcHJvcGVydGllcy5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMucHJpb3JpdHk9ZmFsc2VdIElmIGB0cnVlYCwgdGhlbiB0aGUgcHJpb3JpdHkgb2ZcbiAqICAgICBvcGVyYXRpb25zIHRvIGNvbXBsZXRlIHdoZW4gbW9yZSB0aGFuIG9uZSBpcyBpbW1lZGlhdGVseSBhdmFpbGFibGUgaXMgYVxuICogICAgIHByaW9yaXR5IGFjY29yZGluZyB0byBwb3NpdGlvbiB3aXRoaW4gdGhlIG9wZXJhdGlvbnMgYXJyYXkgKGVhcmxpZXJcbiAqICAgICBwb3NpdGlvbnMgaGF2ZSB0aGUgaGlnaGVyIHByaW9yaXR5KS4gSWYgYGZhbHNlYCBvciBub3QgcHJlc2VudCwgdGhlXG4gKiAgICAgcHJpb3J0eSBvZiBvcGVyYXRpb24gY29tcGxldGlvbiBpcyByYW5kb20uXG4gKiBAcGFyYW0geyp9IFtvcHRpb25zLmRlZmF1bHRdIElmIHNldCBhbmQgYWxsIG9mIHRoZSBvcGVyYXRpb25zIGluaXRpYWxseVxuICogICAgIGJsb2NrLCB0aGUgYHNlbGVjdGAgY2FsbCBjb21wbGV0ZXMgaW1tZWRpYXRlbHkgd2l0aCB0aGUgdmFsdWUgb2YgdGhpc1xuICogICAgIG9wdGlvbiAodGhlIGNoYW5uZWwgd2lsbCBiZSBge0BsaW5rIG1vZHVsZTpjc3AuREVGQVVMVHxERUZBVUxUfSlgLiBJZiBub3RcbiAqICAgICBzZXQsIHRoZSBgc2VsZWN0YCBjYWxsIHdpbGwgYmxvY2sgdW50aWwgb25lIG9mIHRoZSBvcGVyYXRpb25zIGNvbXBsZXRlc1xuICogICAgIGFuZCB0aGF0IHZhbHVlIGFuZCBjaGFubmVsIHdpbGwgYmUgdGhlIG9uZXMgcmV0dXJuZWQuXG4gKiBAcmV0dXJuIHtQcm9taXNlPG1vZHVsZTpjc3AuU2VsZWN0UmVzdWx0Pn0gQSBwcm9taXNlIHRoYXQgd2lsbCByZXNvbHZlIHRvIGFuXG4gKiAgICAgb2JqZWN0IG9mIHR3byBwcm9wZXJ0aWVzOiBgdmFsdWVgIHdpbGwgY29udGFpbiB0aGUgdmFsdWUgdGhhdCB3b3VsZCBoYXZlXG4gKiAgICAgYmVlbiByZXR1cm5lZCBieSB0aGUgY29ycmVzcG9uZGluZyBge0BsaW5rIG1vZHVsZTpjc3Auc2VuZHxzZW5kfWAgb3JcbiAqICAgICBge0BsaW5rIG1vZHVsZTpjc3AucmVjdnxyZWN2fWAgb3BlcmF0aW9uOyBhbmQgYGNoYW5uZWxgIHdpbGwgYmUgYVxuICogICAgIHJlZmVyZW5jZSB0byB0aGUgY2hhbm5lbCB0aGF0IGNvbXBsZXRlZCB0aGUgb3BlcmF0aW9uIHRvIGFsbG93IGBzZWxlY3RgXG4gKiAgICAgdG8gdW5ibG9jay5cbiAqL1xuZnVuY3Rpb24gc2VsZWN0KG9wcywgb3B0aW9ucyA9IHt9KSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICBzZWxlY3RBc3luYyhvcHMsIHJlc29sdmUsIG9wdGlvbnMpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBBIGNvbnZlbmllbmNlIGZ1bmN0aW9uIHRvIHJlYWQgdGhlIHZhbHVlIG91dCBvZiBhIHNlbGVjdCByZXN1bHQuIFRoaXNcbiAqIGZ1bmN0aW9uIGlzIG5vdCBuZWNlc3NhcnkgLSBhZnRlciBhbGwsIGl0J3MgYWJzb2x1dGVseSBhcyBjb3JyZWN0IHRvIHNpbXBseVxuICogdXNlIGByZXN1bHQudmFsdWVgIGluc3RlYWQgb2YgYHZhbHVlKHJlc3VsdClgLCBidXQgaXQncyBwcm92aWRlZCBmb3JcbiAqIGNvbnNpc3RlbmN5IHdpdGggdGhlIHJlc3Qgb2YgdGhlIGZ1bmN0aW9uLWNlbnRyaWMgQVBJLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuU2VsZWN0UmVzdWx0fSByZXN1bHQgVGhlIHJlc3VsdCBjb21pbmcgZnJvbSBhIHNlbGVjdFxuICogICAgIG9wZXJhdGlvbi5cbiAqIEByZXR1cm4geyp9IFRoZSB2YWx1ZSBwcm92aWRlZCBieSB0aGUgc2VsZWN0IG9wZXJhdGlvbi5cbiAqL1xuZnVuY3Rpb24gdmFsdWUocmVzdWx0KSB7XG4gIHJldHVybiByZXN1bHQudmFsdWU7XG59XG5cbi8qKlxuICogQSBjb252ZW5pZW5jZSBmdW5jdGlvbiB0byByZWFkIHRoZSBjaGFubmVsIG91dCBvZiBhIHNlbGVjdCByZXN1bHQuIFRoaXNcbiAqIGZ1bmN0aW9uIGlzIG5vdCBuZWNlc3NhcnkgLSBhZnRlciBhbGwsIGl0J3MgYWJzb2x1dGVseSBhcyBjb3JyZWN0IHRvIHNpbXBseVxuICogdXNlIGByZXN1bHQuY2hhbm5lbGAgaW5zdGVhZCBvZiBgY2hhbm5lbChyZXN1bHQpYCwgYnV0IGl0J3MgcHJvdmlkZWQgZm9yXG4gKiBjb25zaXN0ZW5jeSB3aXRoIHRoZSByZXN0IG9mIHRoZSBmdW5jdGlvbi1jZW50cmljIEFQSS5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICogQHBhcmFtIHttb2R1bGU6Y3NwLlNlbGVjdFJlc3VsdH0gcmVzdWx0IFRoZSByZXN1bHQgY29taW5nIGZyb20gYSBzZWxlY3RcbiAqICAgICBvcGVyYXRpb24uXG4gKiBAcmV0dXJuIHttb2R1bGU6Y3NwLkNoYW5uZWx9IFRoZSBjaGFubmVsIHVwb24gd2hpY2ggdGhlIHNlbGVjdCBvcGVyYXRpb25cbiAqICAgICBjb21wbGV0ZWQuXG4gKi9cbmZ1bmN0aW9uIGNoYW5uZWwocmVzdWx0KSB7XG4gIHJldHVybiByZXN1bHQuY2hhbm5lbDtcbn1cblxuZXhwb3J0IHsgREVGQVVMVCwgc2VsZWN0LCBzZWxlY3RBc3luYywgdmFsdWUsIGNoYW5uZWwgfTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG4vKipcbiAqIFRoaXMgaXMgdGhlIHBsYWNlIHdoZXJlIHRoZSBuZXcgSlMgdGFza3MgYXJlIGFjdHVhbGx5IGNyZWF0ZWQuIEEgcXVldWUgaXNcbiAqIG1haW50YWluZWQgZm9yIHRoZW0sIGFuZCBhcyBlYWNoIGJhdGNoIG9mIHRhc2tzIGFyZSBjb21wbGV0ZWQsIHRoZSBuZXh0IG9uZXNcbiAqIHJ1bi4gQXMgZWFjaCBwcm9jZXNzIHJ1bnMsIGl0IGFkZHMgdGFza3MgdG8gYmUgcnVuIHRvIHRoZSBxdWV1ZSwgd2hpY2ggYXJlXG4gKiBlYWNoIHJ1biBpbiB0aGVpciBvd24gSlMgdGFzay5cbiAqXG4gKiBUaGUgZnVuY3Rpb24gdGhhdCBzcGF3bnMgdGhlIG5ldyBKUyB0YXNrIGRlcGVuZHMgb24gZW52aXJvbm1lbnQuIFRoZVxuICogYHNldEltbWVkaWF0ZWAgZnVuY3Rpb24gaXMgcHJlZmVycmVkIGFzIGl0J3MgdGhlIGZhc3Rlc3QsIG5vdCB3YWl0aW5nIGZvclxuICogZXZlbnQgcXVldWVzIHRvIGVtcHR5IGJlZm9yZSBzcGF3bmluZyB0aGUgbmV3IHByb2Nlc3MuIEhvd2V2ZXIsIGl0IGlzIG5vdCBKU1xuICogc3RhbmRhcmQgYW5kIGN1cnJlbnRseSBvbmx5IHdvcmtzIGluIElFIGFuZCBOb2RlLiBJZiBgc2V0SW1tZWRpYXRlYCBpc24ndFxuICogYXZhaWxhYmxlLCBhbiBhdHRlbXB0IGlzIG1hZGUgdG8gdXNlIGBNZXNzYWdlQ2hhbm5lbGAncyBgb25NZXNzYWdlYCBpcyB0cmllZFxuICogbmV4dC4gSWYgdGhhdCBpcyBhbHNvIG5vdCBhdmFpbGFibGUsIHRoZW4gYHNldFRpbWVvdXRgIHdpdGggYDBgIGRlbGF5IGlzXG4gKiB1c2VkLCB3aGljaCBpcyBhdmFpbGFibGUgZXZlcnl3aGVyZSBidXQgd2hpY2ggaXMgdGhlIGxlYXN0IHBlcmZvcm1hbnQgb2YgYWxsXG4gKiBvZiB0aGUgc29sdXRpb25zLlxuICpcbiAqIFRoZXJlIGFyZSBvdGhlciBwb3NzaWJpbGl0aWVzIGZvciBjcmVhdGluZyBwcm9jZXNzZXMsIGJ1dCB0aGV5IHdlcmUgcmVqZWN0ZWRcbiAqIGFzIG9ic29sZXRlIChgcHJvY2Vzcy5uZXh0VGlja2AgYW5kIGBvbnJlYWR5c3RhdGVjaGFuZ2VgKSBvciB1bm5lY2Vzc2FyeVxuICogKGB3aW5kb3cucG9zdE1lc3NhZ2VgLCB3aGljaCB3b3JrcyBsaWtlIGBNZXNzYWdlQ2hhbm5lbGAgYnV0IGRvZXNuJ3Qgd29yayBpblxuICogV2ViIFdvcmtlcnMpLlxuICpcbiAqIEl0IGlzIG5vdGFibGUgYW5kIGltcG9ydGFudCB0aGF0IHdlIGFjdCBhcyBnb29kIGNpdGl6ZW5zIGhlcmUuIFRoaXNcbiAqIGRpc3BhdGNoZXIgaXMgY2FwYWJsZSBvZiB0YWtpbmcgY29udHJvbCBvZiB0aGUgSmF2YVNjcmlwdCBlbmdpbmUgdW50aWxcbiAqIHRob3VzYW5kcywgbWlsbGlvbnMsIG9yIG1vcmUgdGFza3MgYXJlIGhhbmRsZWQuIEJ1dCB0aGF0IGNvdWxkIGNhdXNlIHRoZVxuICogc3lzdGVtIGV2ZW50IGxvb3AgdG8gaGF2ZSB0byB3YWl0IGFuIHVuYWNjZXB0YWJsZSBhbW91bnQgb2YgdGltZS4gU28gd2UgbGltaXRcbiAqIG91cnNlbHZlcyB0byBhIGJhdGNoIG9mIHRhc2tzIGF0IGEgdGltZSwgYW5kIGlmIHRoZXJlIGFyZSBzdGlsbCBtb3JlIHRvIGJlXG4gKiBydW4sIHdlIGxldCB0aGUgZXZlbnQgbG9vcCBydW4gYmVmb3JlIHRoYXQgbmV4dCBiYXRjaCBpcyBwcm9jZXNzZWQuXG4gKlxuICogVGhlIGRpc3BhdGNoZXIgaXMgKipnbG9iYWwqKi4gVGhlcmUgaXMgYSBzaW5nbGUgaW5zdGFuY2UgdGhhdCBydW5zIGZvciBhbGxcbiAqIGNoYW5uZWxzIGFuZCBwcm9jZXNzZXMuIFRoaXMgaXMgdGhlIG9ubHkgZWxlbWVudCBvZiB0aGUgc3lzdGVtIHRoYXQgd29ya3NcbiAqIGxpa2UgdGhpcy5cbiAqXG4gKiBAbW9kdWxlIGNzcC9kaXNwYXRjaGVyXG4gKiBAc2VlIG1vZHVsZTpjc3AuY29uZmlnXG4gKiBAcHJpdmF0ZVxuICovXG5cbmltcG9ydCB7XG4gIHF1ZXVlIGFzIHEsXG4gIEVNUFRZLFxuICBjb3VudCBhcyBxQ291bnQsXG4gIGRlcXVldWUsXG4gIGVucXVldWVcbn0gZnJvbSBcIm1vZHVsZXMvcXVldWVcIjtcbmNvbnN0IHF1ZXVlID0gcSgpO1xuXG4vKipcbiAqIFRoZSBkaXNwYXRjaCBtZXRob2Qgb3B0aW9uIGluZGljYXRpbmcgdGhhdCBgc2V0SW1tZWRpYXRlYCBzaG91bGQgYmUgdXNlZCB0b1xuICogZGlzcGF0Y2ggdGFza3MuXG4gKlxuICogVGhpcyBpcyB0aGUgZGVmYXVsdCBvcHRpb24uIEZvciBlbnZpcm9ubWVudHMgdGhhdCBkb24ndCBzdXBwb3J0XG4gKiBgc2V0SW1tZWRpYXRlYCwgdGhpcyBmYWxscyBiYWNrIHRvXG4gKiBge0BsaW5rIG1vZHVsZTpjc3AuTUVTU0FHRV9DSEFOTkVMfE1FU1NBR0VfQ0hBTk5FTH1gLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAdHlwZSB7U3ltYm9sfVxuICogQHNlZSB7QGxpbmsgbW9kdWxlOmNzcC5jb25maWd8Y29uZmlnfVxuICovXG5jb25zdCBTRVRfSU1NRURJQVRFID0gU3ltYm9sKFwiU0VUX0lNTUVESUFURVwiKTtcblxuLyoqXG4gKiBUaGUgZGlzcGF0Y2ggbWV0aG9kIG9wdGlvbiBpbmRpY2F0aW5nIHRoYXQgYSBgTWVzc2FnZUNoYW5uZWxgIHNob3VsZCBiZSB1c2VkXG4gKiB0byBkaXNwYXRjaCB0YXNrcy5cbiAqXG4gKiBGb3IgZW52aXJvbm1lbnRzIHRoYXQgZG9uJ3Qgc3VwcG9ydCBgTWVzc2FnZUNoYW5uZWxgLCB0aGlzIGZhbGxzIGJhY2sgdG9cbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC5TRVRfVElNRU9VVHxTRVRfVElNRU9VVH1gLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAdHlwZSB7U3ltYm9sfVxuICogQHNlZSB7QGxpbmsgbW9kdWxlOmNzcC5jb25maWd8Y29uZmlnfVxuICovXG5jb25zdCBNRVNTQUdFX0NIQU5ORUwgPSBTeW1ib2woXCJNRVNTQUdFX0NIQU5ORUxcIik7XG5cbi8qKlxuICogVGhlIGRpc3BhdGNoIG1ldGhvZCBvcHRpb24gaW5kaWNhdGluZyB0aGF0IGBzZXRUaW1lb3V0YCBzaG91bGQgYmUgdXNlZCB0b1xuICogZGlzcGF0Y2ggdGFza3MuXG4gKlxuICogVGhpcyBtZXRob2QgaXMgYWx3YXlzIGF2YWlsYWJsZSwgYnV0IGl0J3MgYWxzbyBhbHdheXMgbGVzcyBlZmZpY2llbnQgdGhhbiBhbnlcbiAqIG90aGVyIG1ldGhvZCwgc28gaXQgc2hvdWxkIGJlIHVzZWQgYXMgYSBsYXN0IHJlc29ydC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICogQHR5cGUge1N5bWJvbH1cbiAqIEBzZWUgIHtAbGluayBtb2R1bGU6Y3NwLmNvbmZpZ3xjb25maWd9XG4gKi9cbmNvbnN0IFNFVF9USU1FT1VUID0gU3ltYm9sKFwiU0VUX1RJTUVPVVRcIik7XG5cbmNvbnN0IG9wdGlvbnMgPSB7XG4gIGJhdGNoU2l6ZTogMTAyNCxcbiAgZGlzcGF0Y2hNZXRob2Q6IFNFVF9JTU1FRElBVEVcbn07XG5cbmxldCBkaXNwYXRjaGVyID0gY3JlYXRlRGlzcGF0Y2hlcigpO1xubGV0IHJ1bm5pbmcgPSBmYWxzZTtcbmxldCBxdWV1ZWQgPSB0cnVlO1xuXG4vKipcbiAqIENyZWF0ZXMgYW5kIHJldHVybnMgYSBmdW5jdGlvbiB0aGF0IGNhbiBiZSB1c2VkIHRvIGRpc3BhdGNoIHRhc2tzLiBUaGVcbiAqIGZ1bmN0aW9uIHRoYXQgaXMgY3JlYXRlZCBkZXBlbmRzIG9uIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgYGRpc3BhdGNoTWV0aG9kYFxuICogdGhhdCBjYW4gYmUgc2V0IHdpdGggYHtAbGluayBtb2R1bGU6Y3NwLmNvbmZpZ3xjb25maWd9YC5cbiAqXG4gKiBAcmV0dXJuIEEgZGlzcGF0Y2hlciBmdW5jdGlvbiB1c2luZyB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGRpc3BhdGNoIG1ldGhvZC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZURpc3BhdGNoZXIoKSB7XG4gIHN3aXRjaCAoY2FsY0Rpc3BhdGNoTWV0aG9kKCkpIHtcbiAgICAvLyBXZSBwcmVmZXIgYHNldEltbWVkaWF0ZWAgaWYgaXQncyBhdmFpbGFibGUsIGJ1dCBpdCdzIG9ubHkgYXZhaWxhYmxlIGluXG4gICAgLy8gTm9kZSBhbmQgc29tZSBvbGQgYnJvd3NlcnMuXG4gICAgY2FzZSBTRVRfSU1NRURJQVRFOlxuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgaWYgKCEocXVldWVkICYmIHJ1bm5pbmcpKSB7XG4gICAgICAgICAgcXVldWVkID0gdHJ1ZTtcbiAgICAgICAgICBzZXRJbW1lZGlhdGUocHJvY2Vzc1Rhc2tzKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgIC8vIE1vc3QgbW9kZXJuIGJyb3dzZXJzIGltcGxlbWVudCBgTWVzc2FnZUNoYW5uZWxgLiBUaGlzIGlzIHRoZSBwcmVmZXJyZWRcbiAgICAvLyBtZXRob2QgaW4gYnJvd3NlciBlbnZpcm9ubWVudHMgd2hlcmUgYHNldEltbWVkaWF0ZWAgaXNuJ3QgYXZhaWxhYmxlLlxuICAgIGNhc2UgTUVTU0FHRV9DSEFOTkVMOiB7XG4gICAgICBjb25zdCBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9ICgpID0+IHByb2Nlc3NUYXNrcygpO1xuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgaWYgKCEocXVldWVkICYmIHJ1bm5pbmcpKSB7XG4gICAgICAgICAgcXVldWVkID0gdHJ1ZTtcbiAgICAgICAgICBjaGFubmVsLnBvcnQyLnBvc3RNZXNzYWdlKDApO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIElmIGFsbCBlbHNlIGZhaWxzLCBqdXN0IHVzZSBgc2V0VGltZW91dGAuIEl0J3MgYSBsaXR0bGUgc2xvd2VyIHRoYW4gdGhlXG4gICAgLy8gb3RoZXIgbWV0aG9kcywgYnV0IGl0J3MgYXZhaWxhYmxlIGV2ZXJ5d2hlcmUuXG4gICAgY2FzZSBTRVRfVElNRU9VVDpcbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGlmICghKHF1ZXVlZCAmJiBydW5uaW5nKSkge1xuICAgICAgICAgIHF1ZXVlZCA9IHRydWU7XG4gICAgICAgICAgc2V0VGltZW91dChwcm9jZXNzVGFza3MsIDApO1xuICAgICAgICB9XG4gICAgICB9O1xuICB9XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgYWN0dWFsIGRpc3BhdGNoIG1ldGhvZCBiYXNlZCBvbiB0aGUgY3VycmVudCBkaXNwYXRjaCBtZXRob2RcbiAqIHNldHRpbmcgYW5kIGVudmlyb25tZW50YWwgYXZhaWxhYmlsaXR5LlxuICpcbiAqIFRoZSBkaXNwYXRjaCBtZXRob2QgaXMgc3RvcmVkIHJhdywgc28gdGhpcyBmdW5jdGlvbiBpcyBuZWNlc3NhcnkgdG8gdGFrZVxuICogZW52aXJvbm1lbnQgaW50byBhY2NvdW50LiBGb3IgZXhhbXBsZSwgaWYgd2UncmUgcnVubmluZyBpbiBhIG1vZGVybiBicm93c2VyXG4gKiAod2hpY2ggZG9lcyBub3QgaGF2ZSBgc2V0SW1tZWRpYXRlYCksXG4gKiBge0BsaW5rIG1vZHVsZTpjc3AuU0VUX0lNTUVESUFURXxTRVRfSU1NRURJQVRFfWAgY2FuIHN0aWxsIGJlIHJlY29yZGVkIGFzIHRoZVxuICogZGlzcGF0Y2ggbWV0aG9kLCBidXQgdGhpcyBmdW5jdGlvbiB3aWxsIHJldHVyblxuICogYHtAbGluayBtb2R1bGU6Y3NwLk1FU1NBR0VfQ0hBTk5FTHxNRVNTQUdFX0NIQU5ORUx9YC5cbiAqXG4gKiBAcmV0dXJuIHtTeW1ib2x9IFRoZSBkaXNwYXRjaCBtZXRob2QgdG8gdXNlIGJhc2VkIG9uIHNldHRpbmcgYW5kIGVudmlyb25tZW50LlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY2FsY0Rpc3BhdGNoTWV0aG9kKCkge1xuICBzd2l0Y2ggKG9wdGlvbnMuZGlzcGF0Y2hNZXRob2QpIHtcbiAgICBjYXNlIE1FU1NBR0VfQ0hBTk5FTDpcbiAgICAgIGlmICh0eXBlb2YgTWVzc2FnZUNoYW5uZWwgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgcmV0dXJuIE1FU1NBR0VfQ0hBTk5FTDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBTRVRfVElNRU9VVDtcblxuICAgIGNhc2UgU0VUX1RJTUVPVVQ6XG4gICAgICByZXR1cm4gU0VUX1RJTUVPVVQ7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgaWYgKHR5cGVvZiBzZXRJbW1lZGlhdGUgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgcmV0dXJuIFNFVF9JTU1FRElBVEU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIE1lc3NhZ2VDaGFubmVsICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIHJldHVybiBNRVNTQUdFX0NIQU5ORUw7XG4gICAgICB9XG4gICAgICByZXR1cm4gU0VUX1RJTUVPVVQ7XG4gIH1cbn1cblxuLyoqXG4gKiBUaGUgaGVhcnQgb2YgdGhlIGRpc3BhdGNoIHByb2Nlc3MsIHRoaXMgaXMgdGhlIGZ1bmN0aW9uIHJ1biBieSB0aGUgZGlzcGF0Y2hcbiAqIGZ1bmN0aW9uIGluIG9yZGVyIHRvIGFjdHVhbGx5IHJ1biBxdWV1ZWQgdGFza3MuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gcHJvY2Vzc1Rhc2tzKCkge1xuICBydW5uaW5nID0gdHJ1ZTtcbiAgcXVldWVkID0gZmFsc2U7XG4gIGxldCBjb3VudCA9IDA7XG5cbiAgZm9yICg7Oykge1xuICAgIGNvbnN0IHRhc2sgPSBkZXF1ZXVlKHF1ZXVlKTtcbiAgICBpZiAodGFzayA9PT0gRU1QVFkpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHRhc2soKTtcblxuICAgIGlmIChjb3VudCA+PSBvcHRpb25zLmJhdGNoU2l6ZSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNvdW50Kys7XG5cbiAgICBydW5uaW5nID0gZmFsc2U7XG4gICAgaWYgKHFDb3VudChxdWV1ZSkpIHtcbiAgICAgIGRpc3BhdGNoZXIoKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuZCBhc3NpZ25zIHRoZSBnbG9iYWwgZGlzcGF0Y2ggZnVuY3Rpb24gYmFzZWQgb24gZGlzcGF0Y2ggbWV0aG9kXG4gKiBzZXR0aW5nIGFuZCBlbnZpcm9ubWVudGFsIGF2YWlsYWJpbGl0eS5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBzZXREaXNwYXRjaGVyKCkge1xuICBkaXNwYXRjaGVyID0gY3JlYXRlRGlzcGF0Y2hlcigpO1xufVxuXG4vKipcbiAqIFRoZSBjb25maWd1cmF0aW9uIG9mIHRoZSBDaGFua28gZGlzcGF0Y2hlci4gQW4gb2JqZWN0IGxpa2UgdGhpcyBpcyByZXR1cm5lZFxuICogZnJvbSB0aGUge0BsaW5rIG1vZHVsZTpjc3AuY29uZmlnfSBmdW5jdGlvbiwgYW5kIGl0IG1heSBhbHNvIGJlIHBhc3NlZCB0byB0aGVcbiAqIHNhbWUgZnVuY3Rpb24gKHRob3VnaCBlYWNoIHByb3BlcnR5IGlzIG9wdGlvbmFsIGluIHRoYXQgY2FzZSkuXG4gKlxuICogQHR5cGVkZWYge29iamVjdH0gRGlzcGF0Y2hlckNvbmZpZ1xuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBiYXRjaFNpemUgVGhlIG1heGltdW0gbnVtYmVyIG9mIHRhc2tzIHRoYXQgdGhlIGRpc3BhdGNoZXJcbiAqICAgICB3aWxsIHJ1biBpbiBhIHNpbmdsZSBiYXRjaC5cbiAqIEBwcm9wZXJ0eSB7U3ltYm9sfSBkaXNwYXRjaE1ldGhvZCBUaGUgbWV0aG9kIHVzZWQgdG8gZGlzcGF0Y2ggYSBwcm9jZXNzIGludG9cbiAqICAgICBhIHNlcGFyYXRlIGxpbmUgb2YgZXhlY3V0aW9uLlxuICovXG5cbi8qKlxuICogU2V0cyBvbmUgb3IgbW9yZSBvZiB0aGUgZGlzcGF0Y2hlciBjb25maWd1cmF0aW9uIG9wdGlvbnMuXG4gKlxuICogVGhpcyBpcyBhZHZhbmNlZCBzZXR0aW5nIGZvciB0aGUgZGlzcGF0Y2hlciB0aGF0IGlzIHJlc3BvbnNpYmxlIGZvciBxdWV1ZWluZ1xuICogdXAgY2hhbm5lbCBvcGVyYXRpb25zIGFuZCBwcm9jZXNzZXMuIEl0IGlzIGxpa2VseSB0aGF0IHRoaXMgZnVuY3Rpb24gd2lsbFxuICogbmV2ZXIgbmVlZCB0byBiZSBjYWxsZWQgaW4gbm9ybWFsIG9wZXJhdGlvbi5cbiAqXG4gKiBJZiBhbnkgcmVjb2duaXplZCBvcHRpb25zIGFyZSBzcGVjaWZpZWQgaW4gdGhlIG9wdGlvbnMgb2JqZWN0IHBhc3NlZCB0b1xuICogYGNvbmZpZ2AsIHRoZW4gdGhlIG9wdGlvbiBpcyBzZXQgdG8gdGhlIHZhbHVlIHNlbnQgaW4uIFByb3BlcnRpZXMgdGhhdCBhcmVuJ3RcbiAqIGFueSBvZiB0aGVzZSBvcHRpb25zIGFyZSBpZ25vcmVkLCBhbmQgYW55IG9mIHRoZXNlIG9wdGlvbnMgdGhhdCBkbyBub3QgYXBwZWFyXG4gKiBpbiB0aGUgcGFzc2VkIG9iamVjdCBhcmUgbGVmdCB3aXRoIHRoZWlyIGN1cnJlbnQgdmFsdWVzLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0cyBBIG1hcHBpbmcgb2Ygb3B0aW9ucyB0byB0aGVpciBuZXcgdmFsdWVzLiBFeHRyYSB2YWx1ZXNcbiAqICAgICAocHJvcGVydGllcyB0aGF0IGFyZSBub3Qgb3B0aW9ucykgYXJlIGlnbm9yZWQuXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdHMuYmF0Y2hTaXplXSBUaGUgbWF4aW11bSBudW1iZXIgb2YgdGFza3MgdGhhdCB0aGVcbiAqICAgICBkaXNwYXRjaGVyIHdpbGwgcnVuIGluIGEgc2luZ2xlIGJhdGNoIChpbml0aWFsbHksIHRoaXMgaXMgMTAyNCkuIElmIHRoZVxuICogICAgIG51bWJlciBvZiBwZW5kaW5nIHRhc2tzIGV4Y2VlZHMgdGhpcywgdGhlIHJlbWFpbmluZyBhcmUgbm90IGRpc2NhcmRlZC5cbiAqICAgICBUaGV5J3JlIHNpbXBseSBydW4gYXMgcGFydCBvZiBhbm90aGVyIGJhdGNoIGFmdGVyIHRoZSBjdXJyZW50IGJhdGNoXG4gKiAgICAgY29tcGxldGVzLlxuICogQHBhcmFtIHtTeW1ib2x9IFtvcHRzLmRpc3BhdGNoTWV0aG9kXSBUaGUgbWV0aG9kIHVzZWQgdG8gZGlzcGF0Y2ggYSBwcm9jZXNzXG4gKiAgICAgaW50byBhIHNlcGFyYXRlIGxpbmUgb2YgZXhlY3V0aW9uLiBQb3NzaWJsZSB2YWx1ZXMgYXJlXG4gKiAgICAgYHtAbGluayBtb2R1bGU6Y3NwLlNFVF9JTU1FRElBVEV8U0VUX0lNTUVESUFURX1gLFxuICogICAgIGB7QGxpbmsgbW9kdWxlOmNzcC5NRVNTQUdFX0NIQU5ORUx8TUVTU0FHRV9DSEFOTkVMfWAsIG9yXG4gKiAgICAgYHtAbGluayBtb2R1bGU6Y3NwLlNFVF9USU1FT1VUfFNFVF9USU1FT1VUfWAsIHdpdGggdGhlIGluaXRpYWwgYmVpbmdcbiAqICAgICBge0BsaW5rIG1vZHVsZTpjc3AuU0VUX0lNTUVESUFURXxTRVRfSU1NRURJQVRFfWAuIElmIGEgbWV0aG9kIGlzIHNldCBidXRcbiAqICAgICBpcyBub3QgYXZhaWxhYmxlIGluIHRoYXQgZW52aXJvbm1lbnQsIHRoZW4gaXQgd2lsbCBzaWxlbnRseSBmYWxsIGJhY2sgdG9cbiAqICAgICB0aGUgbmV4dCBtZXRob2QgdGhhdCBpcyBhdmFpbGFibGUuXG4gKiBAcmV0dXJuIHttb2R1bGU6Y3NwLkRpc3BhdGNoZXJDb25maWd9IFRoZSBjb25maWd1cmF0aW9uIHNldHRpbmdzIGZvciB0aGVcbiAqICAgICBkaXNwYXRjaGVyIGFmdGVyIGFueSBuZXcgdmFsdWVzIGhhdmUgYmVlbiBzZXQuXG4gKi9cbmZ1bmN0aW9uIGNvbmZpZyhvcHRzID0ge30pIHtcbiAgZm9yIChjb25zdCBrZXkgaW4gb3B0aW9ucykge1xuICAgIGlmIChrZXkgaW4gb3B0cykge1xuICAgICAgb3B0aW9uc1trZXldID0gb3B0c1trZXldO1xuXG4gICAgICBpZiAoa2V5ID09PSBcImRpc3BhdGNoTWV0aG9kXCIpIHtcbiAgICAgICAgc2V0RGlzcGF0Y2hlcigpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucyk7XG59XG5cbi8qKlxuICogUXVldWVzIGEgdGFzayB0byBiZSBydW4gYW5kIHN0YXJ0cyB0aGUgZGlzcGF0Y2ggcHJvY2Vzcy5cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSB0YXNrIEEgdGFzayB0byBiZSBxdWV1ZWQgYW5kIHJ1biB0aGUgbmV4dCB0aW1lIGEgYmF0Y2ggb2ZcbiAqICAgICB0YXNrcyBpcyBydW4uXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBkaXNwYXRjaCh0YXNrKSB7XG4gIGVucXVldWUocXVldWUsIHRhc2spO1xuICBkaXNwYXRjaGVyKCk7XG59XG5cbmV4cG9ydCB7IFNFVF9JTU1FRElBVEUsIE1FU1NBR0VfQ0hBTk5FTCwgU0VUX1RJTUVPVVQsIGNvbmZpZywgZGlzcGF0Y2ggfTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG4vKipcbiAqIFByb3ZpZGVzIHNtYWxsIHV0aWxpdHkgZnVuY3Rpb25zIHRvIG1ha2UgaXQgZWFzaWVyIHRvIGludGVyYWN0IHdpdGggYXN5bmNcbiAqIGZ1bmN0aW9ucyBhcyBwcm9jZXNzZXMuXG4gKlxuICogQG1vZHVsZSBjc3AvcHJvY2Vzc1xuICogQHByaXZhdGVcbiAqL1xuXG5pbXBvcnQgeyB0aW1lZENoYW4sIHJlY3ZBc3luYyB9IGZyb20gXCJtb2R1bGVzL2NoYW5uZWxcIjtcblxuLyoqXG4gKiBCbG9ja3MgdGhlIHByb2Nlc3MgZm9yIHRoZSBzcGVjaWZpZWQgdGltZSAoaW4gbWlsbGlzZWNvbmRzKSBhbmQgdGhlbiB1bmJsb2Nrc1xuICogaXQuXG4gKlxuICogVGhpcyBpbXBsZW1lbnRzIGEgZGVsYXksIGJ1dCBvbmUgdGhhdCdzIHN1cGVyaW9yIHRvIG90aGVyIGtpbmRzIG9mIGRlbGF5c1xuICogKGBzZXRUaW1lb3V0YCwgZXRjLikgYmVjYXVzZSBpdCBibG9ja3MgdGhlIHByb2Nlc3MgYW5kIGFsbG93cyB0aGUgZGlzcGF0Y2hlclxuICogdG8gYWxsb3cgb3RoZXIgcHJvY2Vzc2VzIHRvIHJ1biB3aGlsZSB0aGlzIG9uZSB3YWl0cy4gVGhlIGRlZmF1bHQgZGVsYXkgaXMgMCxcbiAqIHdoaWNoIHdpbGwgcmVsZWFzZSB0aGUgcHJvY2VzcyB0byBhbGxvdyBvdGhlcnMgdG8gcnVuIGFuZCB0aGVuIGltbWVkaWF0ZWx5XG4gKiByZS1xdWV1ZSBpdC5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uICptdXN0KiBiZSBjYWxsZWQgZnJvbSB3aXRoaW4gYW4gYGFzeW5jYCBmdW5jdGlvbiBhbmQgYXMgcGFydCBvZlxuICogYW4gYGF3YWl0YCBleHByZXNzaW9uLlxuICpcbiAqIFdoZW4gdGhpcyBmdW5jdGlvbiBjb21wbGV0ZXMgYW5kIGl0cyBwcm9jZXNzIHVuYmxvY2tzLCB0aGUgYGF3YWl0YCBleHByZXNzaW9uXG4gKiBkb2Vzbid0IHRha2Ugb24gYW55IG1lYW5pbmdmdWwgdmFsdWUuIFRoZSBwdXJwb3NlIG9mIHRoaXMgZnVuY3Rpb24gaXMgc2ltcGx5XG4gKiB0byBkZWxheSwgbm90IHRvIGNvbW11bmljYXRlIGFueSBkYXRhLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcGFyYW0ge251bWJlcn0gW2RlbGF5PTBdIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRoYXQgdGhlIHByb2Nlc3Mgd2lsbFxuICogICAgIGJsb2NrIGZvci4gQXQgdGhlIGVuZCBvZiB0aGF0IHRpbWUsIHRoZSBwcm9jZXNzIGlzIGFnYWluIGVsaWdpYmxlIHRvIGJlXG4gKiAgICAgcnVuIGJ5IHRoZSBkaXNwYXRjaGVyLiBJZiB0aGlzIGlzIG1pc3Npbmcgb3Igc2V0IHRvIGAwYCwgdGhlIHByb2Nlc3Mgd2lsbFxuICogICAgIGNlZGUgZXhlY3V0aW9uIHRvIHRoZSBuZXh0IG9uZSBidXQgaW1tZWRpYXRlbHkgcmVxdWV1ZSBpdHNlbGYgdG8gYmUgcnVuXG4gKiAgICAgYWdhaW4uXG4gKiBAcmV0dXJuIHtQcm9taXNlfSBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIG5vIG1lYW5pbmdmdWwgcmVzdWx0IHdoZW4gdGhlXG4gKiAgICAgdGltZSBoYXMgZWxhcHNlZC5cbiAqL1xuZnVuY3Rpb24gc2xlZXAoZGVsYXkgPSAwKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICBjb25zdCBjaCA9IHRpbWVkQ2hhbihkZWxheSk7XG4gICAgcmVjdkFzeW5jKGNoLCByZXNvbHZlKTtcbiAgfSk7XG59XG5cbi8qKlxuICogSW52b2tlcyBhbiBhc3luYyBmdW5jdGlvbiBhY3RpbmcgYXMgYSBwcm9jZXNzLlxuICpcbiAqIFRoaXMgaXMgcHVyZWx5IGEgY29udmVuaWVuY2UgZnVuY3Rpb24sIGRyaXZlbiBieSB0aGUgZmFjdCB0aGF0IGl0J3MgbmVjZXNzYXJ5XG4gKiB0byB1c2UgYW4gSUlGRSB0byBpbnZva2UgYW4gYW5vbnltb3VzIGFzeW5jIGZ1bmN0aW9uLCBhbmQgdGhhdCdzIG5vdCB2ZXJ5XG4gKiBhZXN0aGV0aWNhbGx5IHBsZWFzaW5nLiBJdCBkb2VzIG5vIG1vcmUgdGhhbiBpbnZva2UgdGhlIHBhc3NlZCBmdW5jdGlvbiwgYnV0XG4gKiB0aGF0IGF0IGxlYXN0IHJlbGVhc2VzIHVzIGZyb20gdGhlIG5lZWQgdG8gcHV0IHRoZSBlbXB0eSBwYXJlbnRoZXNlcyBhZnRlclxuICogdGhlIGZ1bmN0aW9uIGRlZmluaXRpb24uXG4gKlxuICogQSBuYW1lZCBhc3luYyBmdW5jdGlvbiBjYW4gc2ltcGx5IGJlIGludm9rZWQgKHdpdGhvdXQgYmVpbmcgYW4gSUlGRSkgYW5kXG4gKiBkb2Vzbid0IGJlbmVmaXQgZnJvbSB0aGlzIGNvbnZlbmllbmNlLlxuICpcbiAqIEFub255bW91cyBwcm9jZXNzIHdpdGhvdXQgYGdvYDpcbiAqIGBgYFxuICogKGFzeW5jICgpID0+IHtcbiAqICAgLi4uIGRvIHNvbWUgcHJvY2VzcyBzdHVmZiBoZXJlIC4uLlxuICogfSkoKTtcbiAqIGBgYFxuICogQW5vbnltb3VzIHByb2Nlc3Mgd2l0aCBgZ29gOlxuICogYGBgXG4gKiBnbyhhc3luYyAoKSA9PiB7XG4gKiAgIC4uLiBkbyBzb21lIHByb2Nlc3Mgc3R1ZmYgaGVyZSAuLi5cbiAqIH0pO1xuICogYGBgXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuIFRoZSBhc3luYyBmdW5jdGlvbiBiZWluZyB1c2VkIGFzIGEgcHJvY2Vzcy5cbiAqIEBwYXJhbSB7Li4uKn0gYXJncyBBcmd1bWVudHMgdGhhdCBhcmUgc2VudCB0byB0aGUgYXN5bmMgZnVuY3Rpb24gd2hlbiBpdCdzXG4gKiAgICAgaW52b2tlZC5cbiAqIEByZXR1cm4ge1Byb21pc2V9IFRoZSBwcm9taXNlIHJldHVybmVkIGJ5IHRoZSBhc3luYyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gZ28oZm4sIC4uLmFyZ3MpIHtcbiAgcmV0dXJuIGZuKC4uLmFyZ3MpO1xufVxuXG4vKipcbiAqIEpvaW5zIGFsbCBvZiB0aGUgcHJvdmlkZWQgcHJvY2Vzc2VzIGludG8gYSBzaW5nbGUgcHJvY2VzcywgcmV0dXJuaW5nIGFcbiAqIHByb21pc2UgdGhhdCB3cmFwcyBhbGwgb2YgdGhlIGluZGl2aWR1YWwgcHJvY2Vzc2VzJyBwcm9taXNlcy4gUHV0dGluZyB0aGlzIGluXG4gKiBhbiBgYXdhaXRgIHN0YXRlbWVudCB3aWxsIGJsb2NrIHVudGlsIGFsbCBvZiB0aGUgcHJvY2Vzc2VzIGNvbXBsZXRlLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcGFyYW0gey4uLmZ1bmN0aW9ufSBmbnMgQW55IG51bWJlciBvZiBhc3luYyBmdW5jdGlvbnMgd2hvc2UgcmVzb2x1dGlvbnMgYXJlXG4gKiAgICAgYmVpbmcgd2FpdGVkIGZvci5cbiAqIEByZXR1cm4ge1Byb21pc2V9IEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gYWxsIG9mIHRoZSBwcm9jZXNzZXMgcHJvbWlzZXNcbiAqICAgICByZXNvbHZlLlxuICovXG5mdW5jdGlvbiBqb2luKC4uLmZucykge1xuICByZXR1cm4gUHJvbWlzZS5hbGwoZm5zKTtcbn1cblxuZXhwb3J0IHsgc2xlZXAsIGdvLCBqb2luIH07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuLyoqXG4gKiBQcm92aWRlcyBhbiBlZmZpY2llbnQgZ2VuZXJhbC1wdXJwb3NlIHF1ZXVlLlxuICpcbiAqIEBtb2R1bGUgY3NwL3F1ZXVlXG4gKiBAcHJpdmF0ZVxuICovXG5cbi8qKlxuICogQSBnZW5lcmFsIHB1cnBvc2UsIGhpZ2hseSBlZmZpY2llbnQgSmF2YVNjcmlwdCBxdWV1ZS4gSXQgaXMgYmFja2VkIGJ5IGFcbiAqIEphdmFTY3JpcHQgYXJyYXksIGJ1dCBpdCBkb2VzIG5vdCB1c2UgYHVuc2hpZnRgIHRvIHRha2UgZWxlbWVudHMgb2ZmIHRoZVxuICogYXJyYXkgYmVjYXVzZSB1bnNoaWZ0IGNhdXNlcyBlbGVtZW50cyB0byBiZSBjb3BpZWQgZXZlcnkgdGltZSBpdCdzIHVzZWQuXG4gKiBJbnN0ZWFkLCBhIHBvaW50ZXIgaXMgbWFpbnRhaW5lZCB0aGF0IGtlZXBzIHRyYWNrIG9mIHRoZSBsb2NhdGlvbiBvZiB0aGUgbmV4dFxuICogZWxlbWVudCB0byBiZSBkZXF1ZXVlZCwgYW5kIHdoZW4gdGhhdCBkZXF1ZXVlIGhhcHBlbnMsIHRoZSBwb2ludGVyIHNpbXBseVxuICogbW92ZXMuIFdoZW4gdGhlIGVtcHR5IHNwYWNlIGF0IHRoZSBoZWFkIG9mIHRoZSBhcnJheSBnZXRzIGxhcmdlIGVub3VnaCwgaXQnc1xuICogcmVtb3ZlZCBieSBhIHNpbmdsZSBzbGljZSBvcGVyYXRpb24uXG4gKlxuICogUHV0dGluZyBlbGVtZW50cyBpbnRvIHRoZSBxdWV1ZSBpcyBqdXN0IGRvbmUgd2l0aCBhIGJhc2ljIGBwdXNoYCwgd2hpY2ggKmlzKlxuICogaGlnaGx5IGVmZmljaWVudC5cbiAqXG4gKiBUaGlzIHR5cGUgb2YgcXVldWUgaXMgcG9zc2libGUgaW4gSmF2YVNjcmlwdCBiZWNhdXNlIEpTIGFycmF5cyBhcmUgcmVzaXphYmxlLlxuICogSW4gbGFuZ3VhZ2VzIHdpdGggZml4ZWQtc2l6ZSBhcnJheXMsIGEgcmVzaXppbmcgb3BlcmF0aW9uIHdvdWxkIGhhdmUgdG8gYmVcbiAqIHJ1biBlYWNoIHRpbWUgdGhlIHF1ZXVlIGZpbGxzLlxuICpcbiAqIEBuYW1lc3BhY2UgUXVldWVcbiAqIEBwcml2YXRlXG4gKi9cblxuLyoqXG4gKiBUaGUgdmFsdWUgcmV0dXJuZWQgd2hlbiBhIHF1ZXVlIGlzIHJlYWQgd2hlbiBpdCdzIGVtcHR5LlxuICpcbiAqIFRoaXMgc3BlY2lhbCB2YWx1ZSBpcyB1c2VkIGJlY2F1c2UgYG51bGxgIGFuZCBgdW5kZWZpbmVkYCBhcmUgcG9zc2libGVcbiAqIGxlZ2l0aW1hdGUgdmFsdWVzIHRoYXQgY2FuIGJlIHN0b3JlZCBpbiBhIHF1ZXVlLiBBbm90aGVyIG9wdGlvbiBpcyB0byB1c2VcbiAqIHNvbWUga2luZCBvZiBgTWF5YmVgIG9yIGBPcHRpb25gIHR5cGUsIGJ1dCB0aGF0IHJlcXVpcmVzIG1vcmUgZWZmb3J0IG9uIHRoZVxuICogcGFydCBvZiB0aGUgZW5kIHVzZXIgdG8gaW50ZXJmYWNlIHdpdGguXG4gKlxuICogQHR5cGUge1N5bWJvbH1cbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKi9cbmNvbnN0IEVNUFRZID0gU3ltYm9sKFwiRU1QVFlcIik7XG5cbi8qKlxuICogQSBtYXJrZXIgcHJvcGVydHkgbmFtZSB0byBpbmRpY2F0ZSB0aGF0IGFuIG9iamVjdCBpcyBpbiBmYWN0IGEgcXVldWUuXG4gKlxuICogQSBxdWV1ZSBoYXMgYSBwcm9wZXJ0eSB3aXRoIHRoaXMgbmFtZSB3aG9zZSByZWFkb25seSB2YWx1ZSBpcyBzZXQgdG8gYHRydWVgLlxuICogVGhpcyBpcyBub3QgbWVhbnQgdG8gYmUgcmVhZCBleGNlcHQgYnkgdGhlXG4gKiBge0BsaW5rIG1vZHVsZTpxdWV1ZS5pc1F1ZXVlfGlzUXVldWV9YCBmdW5jdGlvbi5cbiAqXG4gKiBAdHlwZSB7U3ltYm9sfVxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgUVVFVUUgPSBTeW1ib2woXCJRVUVVRVwiKTtcblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgYW4gb2JqZWN0IGlzIGEgcXVldWUuXG4gKlxuICogQHBhcmFtIHsqfSBvYmogVGhlIG9iamVjdCB0byBiZSB0ZXN0ZWQuXG4gKiBAcmV0dXJuIHtib29sZWFufSBFaXRoZXIgYHRydWVgIGlmIHRoZSBvYmplY3QgaXMgYSBxdWV1ZSBvciBgZmFsc2VgIGlmIGl0IGlzXG4gKiBub3QuXG4gKi9cbmZ1bmN0aW9uIGlzUXVldWUob2JqKSB7XG4gIHJldHVybiAhIW9iaj8uW1FVRVVFXTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IHF1ZXVlLiBUaGlzIHF1ZXVlIGlzIGNyZWF0ZWQgZW1wdHksIHdpdGggYSBiYWNraW5nIGFycmF5IG9mXG4gKiBsZW5ndGggMC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcC9xdWV1ZVxuICogQHJldHVybnMge21vZHVsZTpjc3AvcXVldWV+UXVldWV9IEEgbmV3LCBlbXB0eSBxdWV1ZS5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHF1ZXVlKCkge1xuICByZXR1cm4gT2JqZWN0LmNyZWF0ZShudWxsLCB7XG4gICAgc3RvcmU6IHtcbiAgICAgIHZhbHVlOiBbXSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSxcblxuICAgIHBvaW50ZXI6IHtcbiAgICAgIHZhbHVlOiAwLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9LFxuXG4gICAgW1FVRVVFXToge1xuICAgICAgdmFsdWU6IHRydWVcbiAgICB9XG4gIH0pO1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIG51bWJlciBvZiBlbGVtZW50cyBzdG9yZWQgaW4gYSBxdWV1ZS4gVGhpcyBtYXkgb3IgbWF5IG5vdCBlcXVhbFxuICogdGhlIGxlbmd0aCBvZiB0aGUgYmFja2luZyBzdG9yZSwgYXMgdGhlcmUgaXMgb2Z0ZW4gZW1wdHkgc3BhY2UgYXQgdGhlIGhlYWQgb2ZcbiAqIHRoZSBiYWNraW5nIHN0b3JlLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwL3F1ZXVlXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AvcXVldWV+UXVldWV9IHF1ZXVlIFRoZSBxdWV1ZSB3aG9zZSBpdGVtcyBhcmUgYmVpbmdcbiAqICAgICBjb3VudGVkLlxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgbnVtYmVyIG9mIGl0ZW1zIGluIHRoZSBxdWV1ZS5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNvdW50KHF1ZXVlKSB7XG4gIHJldHVybiBxdWV1ZS5zdG9yZS5sZW5ndGggLSBxdWV1ZS5wb2ludGVyO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhIHF1ZXVlIGlzIGVtcHR5LlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwL3F1ZXVlXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AvcXVldWV+UXVldWV9IHF1ZXVlIFRoZSBxdWV1ZSBiZWluZyBjaGVja2VkIGZvciBlbXB0aW5lc3MuXG4gKiBAcmV0dXJuIHtib29sZWFufSBFaXRoZXIgYHRydWVgIGlmIHRoZSBxdWV1ZSBpcyBlbXB0eSBvciBgZmFsc2VgIGlmIGl0IGlzXG4gKiAgICAgbm90LlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaXNFbXB0eShxdWV1ZSkge1xuICByZXR1cm4gcXVldWUuc3RvcmUubGVuZ3RoID09PSAwO1xufVxuXG4vKipcbiAqIEFkZHMgYW4gaXRlbSB0byBhIHF1ZXVlLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwL3F1ZXVlXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AvcXVldWV+UXVldWV9IHF1ZXVlIFRoZSBxdWV1ZSB3aGljaCBpcyBoYXZpbmcgYW4gaXRlbSBhZGRlZFxuICogICAgIHRvIGl0LlxuICogQHBhcmFtIHsqfSBpdGVtIFRoZSBpdGVtIGJlaW5nIGFkZGVkIHRvIHRoZSBxdWV1ZS5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGVucXVldWUocXVldWUsIGl0ZW0pIHtcbiAgcXVldWUuc3RvcmUucHVzaChpdGVtKTtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFuIGl0ZW0gZnJvbSBhIHF1ZXVlIGFuZCByZXR1cm5zIHRoYXQgaXRlbS4gSWYgdGhlIHJlbW92YWwgY2F1c2VzIHRoZVxuICogYW1vdW50IG9mIGVtcHR5IHNwYWNlIGF0IHRoZSBoZWFkIG9mIHRoZSBiYWNraW5nIHN0b3JlIHRvIGV4Y2VlZCBhIHRocmVzaG9sZCxcbiAqIHRoYXQgZW1wdHkgc3BhY2UgaXMgcmVtb3ZlZC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcC9xdWV1ZVxuICogQHBhcmFtIHttb2R1bGU6Y3NwL3F1ZXVlflF1ZXVlfSBxdWV1ZSBUaGUgcXVldWUgd2hvc2Ugb2xkZXN0IGl0ZW0gaXMgdG8gYmVcbiAqICAgICByZW1vdmVkLlxuICogQHJldHVybiB7Kn0gVGhlIG9sZGVzdCBzdG9yZWQgaXRlbSBpbiB0aGUgcXVldWUuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBkZXF1ZXVlKHF1ZXVlKSB7XG4gIGlmIChxdWV1ZS5zdG9yZS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gRU1QVFk7XG4gIH1cblxuICBjb25zdCBpdGVtID0gcXVldWUuc3RvcmVbcXVldWUucG9pbnRlcl07XG4gIC8vIFJlbW92ZXMgdGhlIGl0ZW1zIGluIHRoZSBiYWNraW5nIHN0b3JlIGJlZm9yZSB0aGUgY3VycmVudCBwb2ludGVyLCBpZiB0aGVyZVxuICAvLyBpcyBlbm91Z2ggXCJlbXB0eVwiIHNwYWNlIGJlZm9yZSB0aGUgcG9pbnRlciB0byBqdXN0aWZ5IGl0IChpLmUuLCB0aGUgdW51c2VkXG4gIC8vIHBvcnRpb24gaXMgYXQgbGVhc3QgaGFsZiBhcyBsYXJnZSBhcyB0aGUgdXNlZCBwb3J0aW9uKVxuICBpZiAoKytxdWV1ZS5wb2ludGVyICogMiA+PSBxdWV1ZS5zdG9yZS5sZW5ndGgpIHtcbiAgICBxdWV1ZS5zdG9yZSA9IHF1ZXVlLnN0b3JlLnNsaWNlKHF1ZXVlLnBvaW50ZXIpO1xuICAgIHF1ZXVlLnBvaW50ZXIgPSAwO1xuICB9XG4gIHJldHVybiBpdGVtO1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIG5leHQgaXRlbSBpbiBhIHF1ZXVlIHdpdGhvdXQgcmVtb3ZpbmcgaXQuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3AvcXVldWVcbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC9xdWV1ZX5RdWV1ZX0gcXVldWUgVGhlIHF1ZXVlIHdob3NlIG9sZGVzdCBpdGVtIGlzIHRvIGJlXG4gKiAgICAgcGVla2VkIGF0LlxuICogQHJldHVybiB7Kn0gVGhlIG9sZGVzdCBpdGVtIHN0b3JlZCBpbiB0aGUgcXVldWUuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBwZWVrKHF1ZXVlKSB7XG4gIHJldHVybiBxdWV1ZS5zdG9yZS5sZW5ndGggPT09IDAgPyBFTVBUWSA6IHF1ZXVlLnN0b3JlW3F1ZXVlLnBvaW50ZXJdO1xufVxuXG4vKipcbiAqIEZpbHRlcnMgb3V0IGFueSBpdGVtIGluIGEgcXVldWUgdGhhdCBkb2VzIG5vdCBjYXVzZSB0aGUgc3VwcGxpZWQgcHJlZGljYXRlXG4gKiBmdW5jdGlvbiB0byByZXR1cm4gYHRydWVgIHdoZW4gcGFzc2VkIHRoYXQgaXRlbS4gVGhpcyBpcyBub3QgZXhhY3RseSBhXG4gKiBnZW5lcmFsIHB1cnBvc2UgcXVldWUgb3BlcmF0aW9uLCBidXQgd2UgbmVlZCBpdCB3aXRoIGNoYW5uZWxzIHRoYXQgd2lsbFxuICogb2NjYXNpb25hbGx5IHdhbnQgdG8gZ2V0IHJpZCBvZiBpbmFjdGl2ZSBoYW5kbGVycy5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcC9xdWV1ZVxuICogQHBhcmFtIHttb2R1bGU6Y3NwL3F1ZXVlflF1ZXVlfSBxdWV1ZSBUaGUgcXVldWUgYmVpbmcgZmlsdGVyZWQuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmbiBUaGUgcHJlZGljYXRlIGZ1bmN0aW9uIHRoYXQgZGV0ZXJtaW5lcyB3aGV0aGVyIGFuXG4gKiAgICAgZWxlbWVudCByZW1haW5zIGluIHRoZSBxdWV1ZS5cbiAqL1xuZnVuY3Rpb24gZmlsdGVyKHF1ZXVlLCBwcmVkaWNhdGUpIHtcbiAgZm9yIChsZXQgaSA9IDAsIGVuZCA9IGNvdW50KHF1ZXVlKTsgaSA8IGVuZDsgaSsrKSB7XG4gICAgY29uc3QgaXRlbSA9IGRlcXVldWUocXVldWUpO1xuICAgIGlmIChwcmVkaWNhdGUoaXRlbSkpIHtcbiAgICAgIGVucXVldWUocXVldWUsIGl0ZW0pO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQge1xuICBFTVBUWSxcbiAgcXVldWUsXG4gIGlzUXVldWUsXG4gIGNvdW50LFxuICBpc0VtcHR5LFxuICBlbnF1ZXVlLFxuICBkZXF1ZXVlLFxuICBwZWVrLFxuICBmaWx0ZXJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9