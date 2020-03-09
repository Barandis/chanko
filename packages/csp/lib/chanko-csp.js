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

/***/ "../xduce/lib/chanko-xduce.js":
/*!************************************!*\
  !*** ../xduce/lib/chanko-xduce.js ***!
  \************************************/
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

      /*! exports provided: protocols, iterator, property, complete, uncomplete, isCompleted, ensureCompleted, ensureUncompleted, reduce, toFunction, toReducer */

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


        __webpack_require__.d(__webpack_exports__, "property", function () {
          return modules_iteration__WEBPACK_IMPORTED_MODULE_1__["property"];
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
        // export {
        //   transduce,
        //   sequence,
        //   into,
        //   asArray,
        //   asObject,
        //   asString,
        //   asIterator,
        //   compose,
        // } from "modules/transformation";

        /**
         * A generic iterator. This conforms to the `iterator` protocol in that it has
         * a `{@link module:xduce.NextFunction|next}` function that produces
         * {@link module:xduce.NextValue|`iterator`-compatible objects}.
         *
         * @typedef {object} Iterator
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

      /*! exports provided: init, step, result, toReducer, ARRAY_REDUCER, OBJECT_REDUCER, STRING_REDUCER, toFunction, complete, uncomplete, isCompleted, ensureCompleted, ensureUncompleted, reduce */

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
         * @module utils
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
         * @memberof module:xduce/common
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
         * @memberof module:xduce/utils
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
         * @memberof module:xduce/utils
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
         * @memberof module:xduce/utils
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
         * @memberof module:xduce/utils
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
         * @memberof module:xduce/utils
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
 * transducer to `{@link module:csp.chan|chan}` or
 * `{@link module:csp.transChan|transChan}` and everything else will be handled.
 *
 * @callback Transducer
 * @memberof module:csp
 * @param {module:csp.Transducer} xform A transducer to chain this transducer
 *     to.
 * @return {module:csp.Transducer} A new transducer consisting of the
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
/* harmony import */ var _chanko_xduce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chanko/xduce */ "../xduce/lib/chanko-xduce.js");
/* harmony import */ var _chanko_xduce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chanko_xduce__WEBPACK_IMPORTED_MODULE_0__);
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
  return !!(value === null || value === void 0 ? void 0 : value[_chanko_xduce__WEBPACK_IMPORTED_MODULE_0__["protocols"].reduced]);
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
 * @param {module:csp.Transducer} xform The transducer used to transform values
 *     sent to the channel. If no transformations are necessary, a passthrough
 *     transducer should be provided.
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
    const done = isReduced(channel.xform[_chanko_xduce__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](channel.buffer, value));

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

        if (isReduced(channel.xform[_chanko_xduce__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](channel.buffer, sender.value))) {
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
    channel.xform[_chanko_xduce__WEBPACK_IMPORTED_MODULE_0__["protocols"].result](channel.buffer);

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
/* harmony import */ var _chanko_xduce__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chanko/xduce */ "../xduce/lib/chanko-xduce.js");
/* harmony import */ var _chanko_xduce__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_chanko_xduce__WEBPACK_IMPORTED_MODULE_5__);



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
    [_chanko_xduce__WEBPACK_IMPORTED_MODULE_5__["protocols"].step](buffer, input) {
      try {
        return xform[_chanko_xduce__WEBPACK_IMPORTED_MODULE_5__["protocols"].step](buffer, input);
      } catch (ex) {
        return handleException(buffer, handler, ex);
      }
    },

    [_chanko_xduce__WEBPACK_IMPORTED_MODULE_5__["protocols"].result](buffer) {
      try {
        return xform[_chanko_xduce__WEBPACK_IMPORTED_MODULE_5__["protocols"].result](buffer);
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
  [_chanko_xduce__WEBPACK_IMPORTED_MODULE_5__["protocols"].init]() {
    throw Error("init not available");
  },

  [_chanko_xduce__WEBPACK_IMPORTED_MODULE_5__["protocols"].step](buffer, input) {
    Object(modules_buffer__WEBPACK_IMPORTED_MODULE_4__["add"])(buffer, input);
    return buffer;
  },

  [_chanko_xduce__WEBPACK_IMPORTED_MODULE_5__["protocols"].result](buffer) {
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
 * @param {module:csp.Transducer} [options.transducer] A transducer to run each
 *     value through before putting it onto the channel. This function should
 *     expect one parameter (another transducer that it's chained to) and return
 *     an object that conforms to the transducer protocol. If a transducer is
 *     provided on an unbuffered channel, an error will be thrown.
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
 * @param {module:csp.Transducer} transducer The transducer used to transform
 *     values on the new channel.
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jc3Avd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2NzcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jc3AvL2hvbWUvYmFyYW5kaXMvRGV2ZWxvcG1lbnQvcHJvamVjdHMvY2hhbmtvL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL0FzeW5jR2VuZXJhdG9yLmpzIiwid2VicGFjazovL2NzcC8vaG9tZS9iYXJhbmRpcy9EZXZlbG9wbWVudC9wcm9qZWN0cy9jaGFua28vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvQXdhaXRWYWx1ZS5qcyIsIndlYnBhY2s6Ly9jc3AvL2hvbWUvYmFyYW5kaXMvRGV2ZWxvcG1lbnQvcHJvamVjdHMvY2hhbmtvL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2F3YWl0QXN5bmNHZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vY3NwLy9ob21lL2JhcmFuZGlzL0RldmVsb3BtZW50L3Byb2plY3RzL2NoYW5rby9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy93cmFwQXN5bmNHZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vY3NwLy9ob21lL2JhcmFuZGlzL0RldmVsb3BtZW50L3Byb2plY3RzL2NoYW5rby9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovL2NzcC8vaG9tZS9iYXJhbmRpcy9EZXZlbG9wbWVudC9wcm9qZWN0cy9jaGFua28vbm9kZV9tb2R1bGVzL3NldGltbWVkaWF0ZS9zZXRJbW1lZGlhdGUuanMiLCJ3ZWJwYWNrOi8vY3NwLy9ob21lL2JhcmFuZGlzL0RldmVsb3BtZW50L3Byb2plY3RzL2NoYW5rby9ub2RlX21vZHVsZXMvdGltZXJzLWJyb3dzZXJpZnkvbWFpbi5qcyIsIndlYnBhY2s6Ly9jc3AvKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovL2NzcC94ZHVjZS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vY3NwL3hkdWNlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NzcC94ZHVjZS9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY3NwL3hkdWNlL3NyYy9tb2R1bGVzL2l0ZXJhdGlvbi5qcyIsIndlYnBhY2s6Ly9jc3AveGR1Y2Uvc3JjL21vZHVsZXMvcHJvdG9jb2wuanMiLCJ3ZWJwYWNrOi8vY3NwL3hkdWNlL3NyYy9tb2R1bGVzL3JlZHVjdGlvbi5qcyIsIndlYnBhY2s6Ly9jc3AveGR1Y2Uvc3JjL21vZHVsZXMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vY3NwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2NzcC8uL3NyYy9tb2R1bGVzL2J1ZmZlci5qcyIsIndlYnBhY2s6Ly9jc3AvLi9zcmMvbW9kdWxlcy9jaGFubmVsL2hhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vY3NwLy4vc3JjL21vZHVsZXMvY2hhbm5lbC9pbmRleC5qcyIsIndlYnBhY2s6Ly9jc3AvLi9zcmMvbW9kdWxlcy9jaGFubmVsL3NlbGVjdC5qcyIsIndlYnBhY2s6Ly9jc3AvLi9zcmMvbW9kdWxlcy9kaXNwYXRjaGVyLmpzIiwid2VicGFjazovL2NzcC8uL3NyYy9tb2R1bGVzL3Byb2Nlc3MuanMiLCJ3ZWJwYWNrOi8vY3NwLy4vc3JjL21vZHVsZXMvcXVldWUuanMiXSwibmFtZXMiOlsia2V5cyIsIk9iamVjdCIsImluZGV4IiwiayIsIm9iaiIsImtleSIsInYiLCJrdiIsImN1cnJlbnQiLCJmbiIsInNvcnRGbiIsImlzRnVuY3Rpb24iLCJ2YWx1ZSIsIlN5bWJvbCIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJmdW5jdGlvbkl0ZXJhdG9yIiwiaXNPYmplY3QiLCJvYmplY3RJdGVyYXRvciIsImlzSW1wbGVtZW50ZWQiLCJwcm90b2NvbHMiLCJpbml0Iiwic3RlcCIsInJlc3VsdCIsInJlZHVjZWQiLCJjb2xsZWN0aW9uIiwicCIsImlzU3RyaW5nIiwiaXNBcnJheSIsIkVycm9yIiwiYWNjIiwibWF4IiwiTWF0aCIsImlucHV0IiwiQVJSQVlfUkVEVUNFUiIsInRvUmVkdWNlciIsIk9CSkVDVF9SRURVQ0VSIiwiU1RSSU5HX1JFRFVDRVIiLCJyIiwieGZvcm0iLCJpc0NvbXBsZXRlZCIsImNvbXBsZXRlIiwidW5jb21wbGV0ZSIsIml0ZXIiLCJpdGVyYXRvciIsIm5hbWUiLCJyZWR1Y2VyIiwidG9TdHJpbmciLCJwcm90byIsImN0b3IiLCJpc0Zpbml0ZSIsIkFycmF5IiwiQlVGRkVSIiwiRklYRUQiLCJEUk9QUElORyIsIlNMSURJTkciLCJpc0J1ZmZlciIsImZpeGVkIiwic2l6ZSIsImNyZWF0ZSIsInF1ZXVlIiwicSIsImRyb3BwaW5nIiwic2xpZGluZyIsImJ1ZmZlciIsImNvdW50IiwicUNvdW50IiwiaXNGdWxsIiwiYWRkIiwiaXRlbXMiLCJpdGVtIiwiZW5xdWV1ZSIsImRlcXVldWUiLCJyZW1vdmUiLCJNQVhfRElSVFkiLCJNQVhfUVVFVUVEIiwiQ0xPU0VEIiwiQk9YIiwiaXNCb3giLCJpc1JlZHVjZWQiLCJib3giLCJ3cml0YWJsZSIsInNlbmRCb3giLCJoYW5kbGVyIiwiY2hhbm5lbCIsImlzVGltZWQiLCJtYXhEaXJ0eSIsIm1heFF1ZXVlZCIsInJlY3ZzIiwic2VuZHMiLCJkaXJ0eVJlY3ZzIiwiZGlydHlTZW5kcyIsImNsb3NlZCIsImlzQnVmZmVyZWQiLCJoYW5kbGVTZW5kIiwiY29tbWl0IiwicmVjZWl2ZXIiLCJjYWxsYmFjayIsImRvbmUiLCJFTVBUWSIsImFjdGl2ZSIsInZhbCIsImRpc3BhdGNoIiwiY2xvc2UiLCJmaWx0ZXIiLCJzZW5kZXIiLCJoYW5kbGVSZWN2Iiwic2VuZEhhbmRsZXIiLCJERUZBVUxUX0hBTkRMRVIiLCJvcEhhbmRsZXIiLCJoYW5kbGVFeGNlcHRpb24iLCJleCIsImhhbmRsZXJUcmFuc2R1Y2VyIiwiYnVmZmVyUmVkdWNlciIsInBhcnNlQXJncyIsIm9wdGlvbnMiLCJkZWZhdWx0T3B0aW9ucyIsImJ1ZiIsIm9wdHMiLCJ0cmFuc2R1Y2VyIiwidGltZXIiLCJhc3NpZ24iLCJjaGFuIiwieGYiLCJjaCIsImNoYW5JbXBsIiwicmVjdiIsImFzeW5jSXRlcmF0b3IiLCJzZXRUaW1lb3V0IiwiY2xvc2VJbXBsIiwidGltZWRDaGFuIiwiZGVsYXkiLCJ0cmFuc0NoYW4iLCJpc0Nsb3NlZCIsInNlbmRBc3luYyIsInJlY3ZBc3luYyIsInNlbmQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlY3ZPclRocm93IiwicmVqZWN0IiwicHJvdG90eXBlIiwiaXNQcm90b3R5cGVPZiIsImNhbGwiLCJERUZBVUxUIiwic2VsZWN0SGFuZGxlciIsImdldCIsInJhbmRvbUFycmF5IiwidXBwZXIiLCJhcnJheSIsInB1c2giLCJqIiwiaSIsImZsb29yIiwicmFuZG9tIiwidGVtcCIsInNlbGVjdFJlc3VsdCIsInNlbGVjdEFzeW5jIiwib3BzIiwibGVuZ3RoIiwicHJpb3JpdHkiLCJpbmRpY2VzIiwiY3JlYXRlU2VsZWN0SGFuZGxlciIsIm9wIiwiaGFzT3duUHJvcGVydHkiLCJkZWZhdWx0Iiwic2VsZWN0IiwiU0VUX0lNTUVESUFURSIsIk1FU1NBR0VfQ0hBTk5FTCIsIlNFVF9USU1FT1VUIiwiYmF0Y2hTaXplIiwiZGlzcGF0Y2hNZXRob2QiLCJkaXNwYXRjaGVyIiwiY3JlYXRlRGlzcGF0Y2hlciIsInJ1bm5pbmciLCJxdWV1ZWQiLCJjYWxjRGlzcGF0Y2hNZXRob2QiLCJzZXRJbW1lZGlhdGUiLCJwcm9jZXNzVGFza3MiLCJNZXNzYWdlQ2hhbm5lbCIsInBvcnQxIiwib25tZXNzYWdlIiwicG9ydDIiLCJwb3N0TWVzc2FnZSIsInRhc2siLCJzZXREaXNwYXRjaGVyIiwiY29uZmlnIiwic2xlZXAiLCJnbyIsImFyZ3MiLCJqb2luIiwiZm5zIiwiYWxsIiwiUVVFVUUiLCJpc1F1ZXVlIiwic3RvcmUiLCJwb2ludGVyIiwiaXNFbXB0eSIsInNsaWNlIiwicGVlayIsInByZWRpY2F0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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDekxEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxtQkFBTyxDQUFDLHFFQUFjO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzlEQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0Qzs7QUFFNUM7Ozs7Ozs7Ozs7OztBQ25CQTtBQUNBLFlBQ0EsMkJBREEsS0FFQSxFQUtBO0FBQ0MsQ0FURCxFQVNDLElBVEQsRUFTQztBQUNEOzs7OztBQ1ZBO0FBQUE7O0FBQ0E7QUFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQTs7O0FBRUE7QUFBQTs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBOztBQUNBOzs7QUFBQTtBQUNBO0FBQUEscUJBREE7O0FBRUE7QUFBQSxrQkFGQTs7QUFHQTtBQUFBO0FBQ0E7O0FBSkE7OztBQU1BO0FBQUE7O0FBQ0E7O0FBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUE7QUFDQTtBQUFBOzs7OztBQUdBO0FBQUE7O0FBQ0E7OztBQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBMEMsNEJBQTFDO0FBQTBDO0FBQTFDO0FBQ0E7QUFBQTtBQUNBOztBQUFBLE9BSkE7OztBQU1BO0FBQUE7O0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBd0Q7QUFBeEQ7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQWlEO0FBQWpEO0FBQ0E7QUFBQSxPQUxBOzs7QUFPQTtBQUFBOztBQUNBO0FBQUE7O0FBQ0E7QUFBQTs7QUFDQTtBQUFBOztBQUNBO0FBQUE7O0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOztBQUFBO0FBQ0E7O0FBQUE7QUFDQTs7QUFBQTtBQUNBOztBQUFBO0FBQ0E7OztBQUFBO0FBQXlDLDBCQUF6QztBQUF5QztBQUF6QztBQUNBOztBQUFBO0FBQWdIO0FBQXFCLFNBQXJJLENBQXFJLElBQXJJLENBQXFJLElBQXJJLEVBQXFJLEdBQXJJO0FBQ0E7O0FBQUE7QUFDQTtBQUFBLE9BVEE7OztBQVdBO0FBQUE7O0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBMkI7QUFBNEIsU0FEdkQ7QUFFQTtBQUFBO0FBQWlDO0FBQWUsU0FGaEQ7QUFHQTs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUEsT0FOQTs7O0FBUUE7QUFBQTs7QUFDQTs7O0FBQUE7QUFBc0Q7QUFBK0QsT0FBckg7OztBQUVBO0FBQUE7O0FBQ0E7OztBQUFBOzs7OztBQUdBO0FBQUE7O0FBQ0E7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7O0FBTUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4UEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FBV0E7Ozs7Ozs7OztBQVNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQTs7Ozs7Ozs7Ozs7O0FBWUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkE7Ozs7Ozs7Ozs7Ozs7QUFhQTs7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RixNQUFULENBQWdCNUMsS0FBaEIsRUFBdUI0SSxTQUF2QixFQUFrQztBQUNoQyxPQUFLLElBQUloRCxDQUFDLEdBQUcsQ0FBUixFQUFXaUQsR0FBRyxHQUFHeEksS0FBSyxDQUFDTCxLQUFELENBQTNCLEVBQW9DNEYsQ0FBQyxHQUFHaUQsR0FBeEMsRUFBNkNqRCxDQUFDLEVBQTlDLEVBQWtEO0FBQ2hELFVBQU1sRixJQUFJLEdBQUdFLE9BQU8sQ0FBQ1osS0FBRCxDQUFwQjs7QUFDQSxRQUFJNEksU0FBUyxDQUFDbEksSUFBRCxDQUFiLEVBQXFCO0FBQ25CQyxhQUFPLENBQUNYLEtBQUQsRUFBUVUsSUFBUixDQUFQO0FBQ0Q7QUFDRjtBQUNGIiwiZmlsZSI6ImNoYW5rby1jc3AuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJjc3BcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiY3NwXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJ2YXIgQXdhaXRWYWx1ZSA9IHJlcXVpcmUoXCIuL0F3YWl0VmFsdWVcIik7XG5cbmZ1bmN0aW9uIEFzeW5jR2VuZXJhdG9yKGdlbikge1xuICB2YXIgZnJvbnQsIGJhY2s7XG5cbiAgZnVuY3Rpb24gc2VuZChrZXksIGFyZykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVxdWVzdCA9IHtcbiAgICAgICAga2V5OiBrZXksXG4gICAgICAgIGFyZzogYXJnLFxuICAgICAgICByZXNvbHZlOiByZXNvbHZlLFxuICAgICAgICByZWplY3Q6IHJlamVjdCxcbiAgICAgICAgbmV4dDogbnVsbFxuICAgICAgfTtcblxuICAgICAgaWYgKGJhY2spIHtcbiAgICAgICAgYmFjayA9IGJhY2submV4dCA9IHJlcXVlc3Q7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmcm9udCA9IGJhY2sgPSByZXF1ZXN0O1xuICAgICAgICByZXN1bWUoa2V5LCBhcmcpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzdW1lKGtleSwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHZhciByZXN1bHQgPSBnZW5ba2V5XShhcmcpO1xuICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgdmFyIHdyYXBwZWRBd2FpdCA9IHZhbHVlIGluc3RhbmNlb2YgQXdhaXRWYWx1ZTtcbiAgICAgIFByb21pc2UucmVzb2x2ZSh3cmFwcGVkQXdhaXQgPyB2YWx1ZS53cmFwcGVkIDogdmFsdWUpLnRoZW4oZnVuY3Rpb24gKGFyZykge1xuICAgICAgICBpZiAod3JhcHBlZEF3YWl0KSB7XG4gICAgICAgICAgcmVzdW1lKGtleSA9PT0gXCJyZXR1cm5cIiA/IFwicmV0dXJuXCIgOiBcIm5leHRcIiwgYXJnKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBzZXR0bGUocmVzdWx0LmRvbmUgPyBcInJldHVyblwiIDogXCJub3JtYWxcIiwgYXJnKTtcbiAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgcmVzdW1lKFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgc2V0dGxlKFwidGhyb3dcIiwgZXJyKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzZXR0bGUodHlwZSwgdmFsdWUpIHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgXCJyZXR1cm5cIjpcbiAgICAgICAgZnJvbnQucmVzb2x2ZSh7XG4gICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgIGRvbmU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFwidGhyb3dcIjpcbiAgICAgICAgZnJvbnQucmVqZWN0KHZhbHVlKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGZyb250LnJlc29sdmUoe1xuICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICBkb25lOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgZnJvbnQgPSBmcm9udC5uZXh0O1xuXG4gICAgaWYgKGZyb250KSB7XG4gICAgICByZXN1bWUoZnJvbnQua2V5LCBmcm9udC5hcmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBiYWNrID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICB0aGlzLl9pbnZva2UgPSBzZW5kO1xuXG4gIGlmICh0eXBlb2YgZ2VuW1wicmV0dXJuXCJdICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB0aGlzW1wicmV0dXJuXCJdID0gdW5kZWZpbmVkO1xuICB9XG59XG5cbmlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHtcbiAgQXN5bmNHZW5lcmF0b3IucHJvdG90eXBlW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbn1cblxuQXN5bmNHZW5lcmF0b3IucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAoYXJnKSB7XG4gIHJldHVybiB0aGlzLl9pbnZva2UoXCJuZXh0XCIsIGFyZyk7XG59O1xuXG5Bc3luY0dlbmVyYXRvci5wcm90b3R5cGVbXCJ0aHJvd1wiXSA9IGZ1bmN0aW9uIChhcmcpIHtcbiAgcmV0dXJuIHRoaXMuX2ludm9rZShcInRocm93XCIsIGFyZyk7XG59O1xuXG5Bc3luY0dlbmVyYXRvci5wcm90b3R5cGVbXCJyZXR1cm5cIl0gPSBmdW5jdGlvbiAoYXJnKSB7XG4gIHJldHVybiB0aGlzLl9pbnZva2UoXCJyZXR1cm5cIiwgYXJnKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQXN5bmNHZW5lcmF0b3I7IiwiZnVuY3Rpb24gX0F3YWl0VmFsdWUodmFsdWUpIHtcbiAgdGhpcy53cmFwcGVkID0gdmFsdWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX0F3YWl0VmFsdWU7IiwidmFyIEF3YWl0VmFsdWUgPSByZXF1aXJlKFwiLi9Bd2FpdFZhbHVlXCIpO1xuXG5mdW5jdGlvbiBfYXdhaXRBc3luY0dlbmVyYXRvcih2YWx1ZSkge1xuICByZXR1cm4gbmV3IEF3YWl0VmFsdWUodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hd2FpdEFzeW5jR2VuZXJhdG9yOyIsInZhciBBc3luY0dlbmVyYXRvciA9IHJlcXVpcmUoXCIuL0FzeW5jR2VuZXJhdG9yXCIpO1xuXG5mdW5jdGlvbiBfd3JhcEFzeW5jR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG5ldyBBc3luY0dlbmVyYXRvcihmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfd3JhcEFzeW5jR2VuZXJhdG9yOyIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCIoZnVuY3Rpb24gKGdsb2JhbCwgdW5kZWZpbmVkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICBpZiAoZ2xvYmFsLnNldEltbWVkaWF0ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIG5leHRIYW5kbGUgPSAxOyAvLyBTcGVjIHNheXMgZ3JlYXRlciB0aGFuIHplcm9cbiAgICB2YXIgdGFza3NCeUhhbmRsZSA9IHt9O1xuICAgIHZhciBjdXJyZW50bHlSdW5uaW5nQVRhc2sgPSBmYWxzZTtcbiAgICB2YXIgZG9jID0gZ2xvYmFsLmRvY3VtZW50O1xuICAgIHZhciByZWdpc3RlckltbWVkaWF0ZTtcblxuICAgIGZ1bmN0aW9uIHNldEltbWVkaWF0ZShjYWxsYmFjaykge1xuICAgICAgLy8gQ2FsbGJhY2sgY2FuIGVpdGhlciBiZSBhIGZ1bmN0aW9uIG9yIGEgc3RyaW5nXG4gICAgICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgY2FsbGJhY2sgPSBuZXcgRnVuY3Rpb24oXCJcIiArIGNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICAgIC8vIENvcHkgZnVuY3Rpb24gYXJndW1lbnRzXG4gICAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2kgKyAxXTtcbiAgICAgIH1cbiAgICAgIC8vIFN0b3JlIGFuZCByZWdpc3RlciB0aGUgdGFza1xuICAgICAgdmFyIHRhc2sgPSB7IGNhbGxiYWNrOiBjYWxsYmFjaywgYXJnczogYXJncyB9O1xuICAgICAgdGFza3NCeUhhbmRsZVtuZXh0SGFuZGxlXSA9IHRhc2s7XG4gICAgICByZWdpc3RlckltbWVkaWF0ZShuZXh0SGFuZGxlKTtcbiAgICAgIHJldHVybiBuZXh0SGFuZGxlKys7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYXJJbW1lZGlhdGUoaGFuZGxlKSB7XG4gICAgICAgIGRlbGV0ZSB0YXNrc0J5SGFuZGxlW2hhbmRsZV07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcnVuKHRhc2spIHtcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gdGFzay5jYWxsYmFjaztcbiAgICAgICAgdmFyIGFyZ3MgPSB0YXNrLmFyZ3M7XG4gICAgICAgIHN3aXRjaCAoYXJncy5sZW5ndGgpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgY2FsbGJhY2suYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcnVuSWZQcmVzZW50KGhhbmRsZSkge1xuICAgICAgICAvLyBGcm9tIHRoZSBzcGVjOiBcIldhaXQgdW50aWwgYW55IGludm9jYXRpb25zIG9mIHRoaXMgYWxnb3JpdGhtIHN0YXJ0ZWQgYmVmb3JlIHRoaXMgb25lIGhhdmUgY29tcGxldGVkLlwiXG4gICAgICAgIC8vIFNvIGlmIHdlJ3JlIGN1cnJlbnRseSBydW5uaW5nIGEgdGFzaywgd2UnbGwgbmVlZCB0byBkZWxheSB0aGlzIGludm9jYXRpb24uXG4gICAgICAgIGlmIChjdXJyZW50bHlSdW5uaW5nQVRhc2spIHtcbiAgICAgICAgICAgIC8vIERlbGF5IGJ5IGRvaW5nIGEgc2V0VGltZW91dC4gc2V0SW1tZWRpYXRlIHdhcyB0cmllZCBpbnN0ZWFkLCBidXQgaW4gRmlyZWZveCA3IGl0IGdlbmVyYXRlZCBhXG4gICAgICAgICAgICAvLyBcInRvbyBtdWNoIHJlY3Vyc2lvblwiIGVycm9yLlxuICAgICAgICAgICAgc2V0VGltZW91dChydW5JZlByZXNlbnQsIDAsIGhhbmRsZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgdGFzayA9IHRhc2tzQnlIYW5kbGVbaGFuZGxlXTtcbiAgICAgICAgICAgIGlmICh0YXNrKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudGx5UnVubmluZ0FUYXNrID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBydW4odGFzayk7XG4gICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbW1lZGlhdGUoaGFuZGxlKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudGx5UnVubmluZ0FUYXNrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbE5leHRUaWNrSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uICgpIHsgcnVuSWZQcmVzZW50KGhhbmRsZSk7IH0pO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhblVzZVBvc3RNZXNzYWdlKCkge1xuICAgICAgICAvLyBUaGUgdGVzdCBhZ2FpbnN0IGBpbXBvcnRTY3JpcHRzYCBwcmV2ZW50cyB0aGlzIGltcGxlbWVudGF0aW9uIGZyb20gYmVpbmcgaW5zdGFsbGVkIGluc2lkZSBhIHdlYiB3b3JrZXIsXG4gICAgICAgIC8vIHdoZXJlIGBnbG9iYWwucG9zdE1lc3NhZ2VgIG1lYW5zIHNvbWV0aGluZyBjb21wbGV0ZWx5IGRpZmZlcmVudCBhbmQgY2FuJ3QgYmUgdXNlZCBmb3IgdGhpcyBwdXJwb3NlLlxuICAgICAgICBpZiAoZ2xvYmFsLnBvc3RNZXNzYWdlICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cykge1xuICAgICAgICAgICAgdmFyIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXMgPSB0cnVlO1xuICAgICAgICAgICAgdmFyIG9sZE9uTWVzc2FnZSA9IGdsb2JhbC5vbm1lc3NhZ2U7XG4gICAgICAgICAgICBnbG9iYWwub25tZXNzYWdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cyA9IGZhbHNlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShcIlwiLCBcIipcIik7XG4gICAgICAgICAgICBnbG9iYWwub25tZXNzYWdlID0gb2xkT25NZXNzYWdlO1xuICAgICAgICAgICAgcmV0dXJuIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsUG9zdE1lc3NhZ2VJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgLy8gSW5zdGFsbHMgYW4gZXZlbnQgaGFuZGxlciBvbiBgZ2xvYmFsYCBmb3IgdGhlIGBtZXNzYWdlYCBldmVudDogc2VlXG4gICAgICAgIC8vICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4vRE9NL3dpbmRvdy5wb3N0TWVzc2FnZVxuICAgICAgICAvLyAqIGh0dHA6Ly93d3cud2hhdHdnLm9yZy9zcGVjcy93ZWItYXBwcy9jdXJyZW50LXdvcmsvbXVsdGlwYWdlL2NvbW1zLmh0bWwjY3Jvc3NEb2N1bWVudE1lc3NhZ2VzXG5cbiAgICAgICAgdmFyIG1lc3NhZ2VQcmVmaXggPSBcInNldEltbWVkaWF0ZSRcIiArIE1hdGgucmFuZG9tKCkgKyBcIiRcIjtcbiAgICAgICAgdmFyIG9uR2xvYmFsTWVzc2FnZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuc291cmNlID09PSBnbG9iYWwgJiZcbiAgICAgICAgICAgICAgICB0eXBlb2YgZXZlbnQuZGF0YSA9PT0gXCJzdHJpbmdcIiAmJlxuICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEuaW5kZXhPZihtZXNzYWdlUHJlZml4KSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJ1bklmUHJlc2VudCgrZXZlbnQuZGF0YS5zbGljZShtZXNzYWdlUHJlZml4Lmxlbmd0aCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICAgICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIG9uR2xvYmFsTWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ2xvYmFsLmF0dGFjaEV2ZW50KFwib25tZXNzYWdlXCIsIG9uR2xvYmFsTWVzc2FnZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKG1lc3NhZ2VQcmVmaXggKyBoYW5kbGUsIFwiKlwiKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsTWVzc2FnZUNoYW5uZWxJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgdmFyIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICAgICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgdmFyIGhhbmRsZSA9IGV2ZW50LmRhdGE7XG4gICAgICAgICAgICBydW5JZlByZXNlbnQoaGFuZGxlKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgY2hhbm5lbC5wb3J0Mi5wb3N0TWVzc2FnZShoYW5kbGUpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxSZWFkeVN0YXRlQ2hhbmdlSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHZhciBodG1sID0gZG9jLmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhIDxzY3JpcHQ+IGVsZW1lbnQ7IGl0cyByZWFkeXN0YXRlY2hhbmdlIGV2ZW50IHdpbGwgYmUgZmlyZWQgYXN5bmNocm9ub3VzbHkgb25jZSBpdCBpcyBpbnNlcnRlZFxuICAgICAgICAgICAgLy8gaW50byB0aGUgZG9jdW1lbnQuIERvIHNvLCB0aHVzIHF1ZXVpbmcgdXAgdGhlIHRhc2suIFJlbWVtYmVyIHRvIGNsZWFuIHVwIG9uY2UgaXQncyBiZWVuIGNhbGxlZC5cbiAgICAgICAgICAgIHZhciBzY3JpcHQgPSBkb2MuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgICAgICAgICAgIHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcnVuSWZQcmVzZW50KGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgaHRtbC5yZW1vdmVDaGlsZChzY3JpcHQpO1xuICAgICAgICAgICAgICAgIHNjcmlwdCA9IG51bGw7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaHRtbC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxTZXRUaW1lb3V0SW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KHJ1bklmUHJlc2VudCwgMCwgaGFuZGxlKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBJZiBzdXBwb3J0ZWQsIHdlIHNob3VsZCBhdHRhY2ggdG8gdGhlIHByb3RvdHlwZSBvZiBnbG9iYWwsIHNpbmNlIHRoYXQgaXMgd2hlcmUgc2V0VGltZW91dCBldCBhbC4gbGl2ZS5cbiAgICB2YXIgYXR0YWNoVG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgJiYgT2JqZWN0LmdldFByb3RvdHlwZU9mKGdsb2JhbCk7XG4gICAgYXR0YWNoVG8gPSBhdHRhY2hUbyAmJiBhdHRhY2hUby5zZXRUaW1lb3V0ID8gYXR0YWNoVG8gOiBnbG9iYWw7XG5cbiAgICAvLyBEb24ndCBnZXQgZm9vbGVkIGJ5IGUuZy4gYnJvd3NlcmlmeSBlbnZpcm9ubWVudHMuXG4gICAgaWYgKHt9LnRvU3RyaW5nLmNhbGwoZ2xvYmFsLnByb2Nlc3MpID09PSBcIltvYmplY3QgcHJvY2Vzc11cIikge1xuICAgICAgICAvLyBGb3IgTm9kZS5qcyBiZWZvcmUgMC45XG4gICAgICAgIGluc3RhbGxOZXh0VGlja0ltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGNhblVzZVBvc3RNZXNzYWdlKCkpIHtcbiAgICAgICAgLy8gRm9yIG5vbi1JRTEwIG1vZGVybiBicm93c2Vyc1xuICAgICAgICBpbnN0YWxsUG9zdE1lc3NhZ2VJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChnbG9iYWwuTWVzc2FnZUNoYW5uZWwpIHtcbiAgICAgICAgLy8gRm9yIHdlYiB3b3JrZXJzLCB3aGVyZSBzdXBwb3J0ZWRcbiAgICAgICAgaW5zdGFsbE1lc3NhZ2VDaGFubmVsSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoZG9jICYmIFwib25yZWFkeXN0YXRlY2hhbmdlXCIgaW4gZG9jLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIikpIHtcbiAgICAgICAgLy8gRm9yIElFIDbigJM4XG4gICAgICAgIGluc3RhbGxSZWFkeVN0YXRlQ2hhbmdlSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEZvciBvbGRlciBicm93c2Vyc1xuICAgICAgICBpbnN0YWxsU2V0VGltZW91dEltcGxlbWVudGF0aW9uKCk7XG4gICAgfVxuXG4gICAgYXR0YWNoVG8uc2V0SW1tZWRpYXRlID0gc2V0SW1tZWRpYXRlO1xuICAgIGF0dGFjaFRvLmNsZWFySW1tZWRpYXRlID0gY2xlYXJJbW1lZGlhdGU7XG59KHR5cGVvZiBzZWxmID09PSBcInVuZGVmaW5lZFwiID8gdHlwZW9mIGdsb2JhbCA9PT0gXCJ1bmRlZmluZWRcIiA/IHRoaXMgOiBnbG9iYWwgOiBzZWxmKSk7XG4iLCJ2YXIgc2NvcGUgPSAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBnbG9iYWwpIHx8XG4gICAgICAgICAgICAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZikgfHxcbiAgICAgICAgICAgIHdpbmRvdztcbnZhciBhcHBseSA9IEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseTtcblxuLy8gRE9NIEFQSXMsIGZvciBjb21wbGV0ZW5lc3NcblxuZXhwb3J0cy5zZXRUaW1lb3V0ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgVGltZW91dChhcHBseS5jYWxsKHNldFRpbWVvdXQsIHNjb3BlLCBhcmd1bWVudHMpLCBjbGVhclRpbWVvdXQpO1xufTtcbmV4cG9ydHMuc2V0SW50ZXJ2YWwgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBUaW1lb3V0KGFwcGx5LmNhbGwoc2V0SW50ZXJ2YWwsIHNjb3BlLCBhcmd1bWVudHMpLCBjbGVhckludGVydmFsKTtcbn07XG5leHBvcnRzLmNsZWFyVGltZW91dCA9XG5leHBvcnRzLmNsZWFySW50ZXJ2YWwgPSBmdW5jdGlvbih0aW1lb3V0KSB7XG4gIGlmICh0aW1lb3V0KSB7XG4gICAgdGltZW91dC5jbG9zZSgpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBUaW1lb3V0KGlkLCBjbGVhckZuKSB7XG4gIHRoaXMuX2lkID0gaWQ7XG4gIHRoaXMuX2NsZWFyRm4gPSBjbGVhckZuO1xufVxuVGltZW91dC5wcm90b3R5cGUudW5yZWYgPSBUaW1lb3V0LnByb3RvdHlwZS5yZWYgPSBmdW5jdGlvbigpIHt9O1xuVGltZW91dC5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5fY2xlYXJGbi5jYWxsKHNjb3BlLCB0aGlzLl9pZCk7XG59O1xuXG4vLyBEb2VzIG5vdCBzdGFydCB0aGUgdGltZSwganVzdCBzZXRzIHVwIHRoZSBtZW1iZXJzIG5lZWRlZC5cbmV4cG9ydHMuZW5yb2xsID0gZnVuY3Rpb24oaXRlbSwgbXNlY3MpIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuICBpdGVtLl9pZGxlVGltZW91dCA9IG1zZWNzO1xufTtcblxuZXhwb3J0cy51bmVucm9sbCA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuICBpdGVtLl9pZGxlVGltZW91dCA9IC0xO1xufTtcblxuZXhwb3J0cy5fdW5yZWZBY3RpdmUgPSBleHBvcnRzLmFjdGl2ZSA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuXG4gIHZhciBtc2VjcyA9IGl0ZW0uX2lkbGVUaW1lb3V0O1xuICBpZiAobXNlY3MgPj0gMCkge1xuICAgIGl0ZW0uX2lkbGVUaW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uIG9uVGltZW91dCgpIHtcbiAgICAgIGlmIChpdGVtLl9vblRpbWVvdXQpXG4gICAgICAgIGl0ZW0uX29uVGltZW91dCgpO1xuICAgIH0sIG1zZWNzKTtcbiAgfVxufTtcblxuLy8gc2V0aW1tZWRpYXRlIGF0dGFjaGVzIGl0c2VsZiB0byB0aGUgZ2xvYmFsIG9iamVjdFxucmVxdWlyZShcInNldGltbWVkaWF0ZVwiKTtcbi8vIE9uIHNvbWUgZXhvdGljIGVudmlyb25tZW50cywgaXQncyBub3QgY2xlYXIgd2hpY2ggb2JqZWN0IGBzZXRpbW1lZGlhdGVgIHdhc1xuLy8gYWJsZSB0byBpbnN0YWxsIG9udG8uICBTZWFyY2ggZWFjaCBwb3NzaWJpbGl0eSBpbiB0aGUgc2FtZSBvcmRlciBhcyB0aGVcbi8vIGBzZXRpbW1lZGlhdGVgIGxpYnJhcnkuXG5leHBvcnRzLnNldEltbWVkaWF0ZSA9ICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzZWxmLnNldEltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgJiYgZ2xvYmFsLnNldEltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMgJiYgdGhpcy5zZXRJbW1lZGlhdGUpO1xuZXhwb3J0cy5jbGVhckltbWVkaWF0ZSA9ICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzZWxmLmNsZWFySW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiICYmIGdsb2JhbC5jbGVhckltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcyAmJiB0aGlzLmNsZWFySW1tZWRpYXRlKTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInhkdWNlXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInhkdWNlXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cbi8qKlxuICogVGhlIGNlbnRyYWwgbW9kdWxlIGZvciB0aGUgdHJhbnNkdWNlciBlbmdpbmUuXG4gKlxuICogQWxsIG9mIHRoZSBmdW5jdGlvbnMgaW4gdGhpcyBtb2R1bGUgZGVhbCBkaXJlY3RseSB3aXRoIHRyYW5zZHVjZXJzLiBCdXRcbiAqIGZpcnN0LCBsZXQncyB0YWxrIGFib3V0IHRoZSBwcm90b2NvbHMgdGhhdCBhcmUgZ29pbmcgdG8gYmUgcmVmZXJyZWQgdG9cbiAqIHRocm91Z2hvdXQgbWFueSBvZiB0aGUgZnVuY3Rpb24gZGlzY3Vzc2lvbnMuXG4gKlxuICogIyMgUHJvdG9jb2xzXG4gKlxuICogT25lIG9mIHRoZSBrZXkgc2VsbGluZyBwb2ludHMgZm9yIHRyYW5zZHVjZXJzIGlzIHRoYXQgdGhlIHNhbWUgdHJhbnNkdWNlciBjYW5cbiAqIGJlIHVzZWQgb24gYW55IHR5cGUgb2YgY29sbGVjdGlvbi4gUmF0aGVyIHRoYW4gaGF2aW5nIHRvIHdyaXRlIGEgbmV3IGBtYXBgXG4gKiBmdW5jdGlvbiAoZm9yIGV4YW1wbGUpIGZvciBldmVyeSBraW5kIG9mIGNvbGxlY3Rpb24gLSBvbmUgZm9yIGFuIGFycmF5LCBvbmVcbiAqIGZvciBhIHN0cmluZywgb25lIGZvciBhbiBpdGVyYXRvciwgZXRjLiAtIHRoZXJlIGlzIGEgc2luZ2xlIGBtYXBgIHRyYW5zZHVjZXJcbiAqIHRoYXQgd2lsbCB3b3JrIHdpdGggYWxsIG9mIHRoZW0sIGFuZCBwb3RlbnRpYWxseSB3aXRoICphbnkqIGtpbmQgb2ZcbiAqIGNvbGxlY3Rpb24uIFRoaXMgaXMgcG9zc2libGUgaW1wbGVtZW50aW5nICpwcm90b2NvbHMqIG9uIHRoZSBjb2xsZWN0aW9ucy5cbiAqXG4gKiBBIHByb3RvY29sIGluIEphdmFTY3JpcHQgaXMgbXVjaCBsaWtlIGFuIGludGVyZmFjZSBpbiBsYW5ndWFnZXMgbGlrZSBKYXZhIGFuZFxuICogQyMuIEl0IGlzIGEgY29tbWl0bWVudCB0byBwcm92aWRpbmcgYSBjZXJ0YWluIGZ1bmN0aW9uYWxpdHkgdW5kZXIgYSBjZXJ0YWluXG4gKiBuYW1lLiBFUzIwMTUgaGFzIHNlZW4gdGhlIGludHJvZHVjdGlvbiBvZiBhbiBgaXRlcmF0b3JgIHByb3RvY29sLCBmb3JcbiAqIGV4YW1wbGUsIGFuZCBsYW5ndWFnZSBzdXBwb3J0IGZvciBpdCAodGhlIG5ldyBgZm9yLi4ub2ZgIGxvb3AgY2FuIHdvcmsgd2l0aFxuICogYW55IG9iamVjdCB0aGF0IGNvcnJlY3RseSBpbXBsZW1lbnRzIHRoZSBgaXRlcmF0b3JgIHByb3RvY29sKS5cbiAqXG4gKiBUbyBzdXBwb3J0IHRyYW5zZHVjdGlvbiwgWGR1Y2UgZXhwZWN0cyBjb2xsZWN0aW9ucyB0byBpbXBsZW1lbnQgZm91clxuICogcHJvdG9jb2xzLlxuICpcbiAqIC0gYGl0ZXJhdG9yYDogYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYW4gaXRlcmF0b3IgKHRoaXMgb25lIGlzIGJ1aWx0IGluIHRvXG4gKiAgIEVTNiBKYXZhU2NyaXB0KVxuICogLSBgdHJhbnNkdWNlci9pbml0YDogYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBuZXcsIGVtcHR5IGluc3RhbmNlIG9mIHRoZVxuICogICBvdXRwdXQgY29sbGVjdGlvblxuICogLSBgdHJhbnNkdWNlci9zdGVwYDogYSBmdW5jdGlvbiB0aGF0IHRha2VzIGFuIGFjY3VtdWxhdG9yICh0aGUgcmVzdWx0IG9mIHRoZVxuICogICByZWR1Y3Rpb24gc28gZmFyKSBhbmQgdGhlIG5leHQgaW5wdXQgdmFsdWUsIGFuZCB0aGVuIHJldHVybnMgdGhlXG4gKiAgIGFjY3VtdWxhdG9yIHdpdGggdGhlIG5leHQgaW5wdXQgdmFsdWUgYWRkZWQgdG8gaXRcbiAqIC0gYHRyYW5zZHVjZXIvcmVzdWx0YDogYSBmdW5jdGlvbiB0aGF0IHRha2VzIHRoZSByZWR1Y2VkIGNvbGxlY3Rpb24gYW5kXG4gKiAgIHJldHVybnMgdGhlIGZpbmFsIG91dHB1dCBjb2xsZWN0aW9uXG4gKlxuICogYGl0ZXJhdG9yYCBpcyB0aGUgYnVpbHQtaW4gSmF2YVNjcmlwdCBwcm90b2NvbC4gV2hlbiBjYWxsZWQsIGl0IGlzIGV4cGVjdGVkXG4gKiB0byByZXR1cm4gYW4gaXRlcmF0b3Igb3ZlciB0aGUgaW1wbGVtZW50aW5nIGNvbGxlY3Rpb24uIFRoaXMgaXRlcmF0b3IgaXMgYW5cbiAqIG9iamVjdCB0aGF0IGhhcyBhIGBuZXh0YCBmdW5jdGlvbi4gRWFjaCBjYWxsIHRvIGBuZXh0YCBpcyBleHBlY3RlZCB0byByZXR1cm5cbiAqIGFuIG9iamVjdCB3aXRoIGB2YWx1ZWAgYW5kIGBkb25lYCBwcm9wZXJ0aWVzLCB3aGljaCByZXNwZWN0aXZlbHkgaG9sZCB0aGVcbiAqIG5leHQgdmFsdWUgb2YgdGhlIGl0ZXJhdG9yIGFuZCBhIGJvb2xlYW4gdG8gaW5kaWNhdGUgd2hldGhlciB0aGUgaXRlcmF0aW9uXG4gKiBoYXMgcmVhY2hlZCBpdHMgZW5kLiAoVGhpcyBpcyBhIHNpbXBsaWZpZWQgZXhwbGFuYXRpb247IHNlZVxuICoge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvR3VpZGUvSXRlcmF0b3JzX2FuZF9HZW5lcmF0b3JzfHRoaXMgTUROIHBhZ2V9XG4gKiBmb3IgbW9yZSBkZXRhaWxlZCBpbmZvcm1hdGlvbi4pXG4gKlxuICogYHRyYW5zZHVjZXIvaW5pdGAgKHJlZmVycmVkIHRvIGZyb20gbm93IG9uIGFzIGBpbml0YCkgc2hvdWxkIGJlIGEgZnVuY3Rpb25cbiAqIHRoYXQgdGFrZXMgbm8gcGFyYW1ldGVycyBhbmQgcmV0dXJucyBhIG5ldywgZW1wdHkgaW5zdGFuY2Ugb2YgdGhlIG91dHB1dFxuICogY29sbGVjdGlvbi4gVGhpcyBpcyB0aGUgZnVuY3Rpb24gdGhhdCBkZWZpbmVzIGhvdyB0byBjcmVhdGUgYSBuZXcgY29sbGVjdGlvblxuICogb2YgdGhlIGNvcnJlY3QgdHlwZS5cbiAqXG4gKiBgdHJhbnNkdWNlci9zdGVwYCAocmVmZXJyZWQgdG8gZnJvbSBub3cgb24gYXMgYHN0ZXBgKSBzaG91bGQgYmUgYSBmdW5jdGlvblxuICogdGhhdCB0YWtlcyB0d28gcGFyYW1ldGVycy4gVGhlc2UgcGFyYW1ldGVycyBhcmUgdGhlIHJlc3VsdCBvZiB0aGUgcmVkdWN0aW9uXG4gKiBzbyBmYXIgKGFuZCBzbyBpcyBhIGNvbGxlY3Rpb24gb2YgdGhlIG91dHB1dCB0eXBlKSBhbmQgdGhlIG5leHQgdmFsdWUgZnJvbVxuICogdGhlIGlucHV0IGNvbGxlY3Rpb24uIEl0IG11c3QgcmV0dXJuIHRoZSBuZXcgcmVkdWN0aW9uIHJlc3VsdCwgd2l0aCB0aGUgbmV4dFxuICogdmFsdWUgaW5jb3Jwb3JhdGVkIGludG8gaXQuIFRoaXMgaXMgdGhlIGZ1bmN0aW9uIHRoYXQgZGVmaW5lcyBob3cgcmVkdWNlIGFcbiAqIHZhbHVlIG9udG8gdGhlIGNvbGxlY3Rpb24uXG4gKlxuICogYHRyYW5zZHVjZXIvcmVzdWx0YCAocmVmZXJyZWQgdG8gZnJvbSBub3cgb24gYXMgYHJlc3VsdGApIHNob3VsZCBiZSBhXG4gKiBmdW5jdGlvbiB0aGF0IHRha2VzIG9uZSBwYXJhbWV0ZXIsIHdoaWNoIGlzIHRoZSBmdWxseSByZWR1Y2VkIGNvbGxlY3Rpb24uIEl0XG4gKiBzaG91bGQgcmV0dXJuIHRoZSBmaW5hbCBvdXRwdXQgY29sbGVjdGlvbi4gVGhpcyBhZmZvcmRzIGEgY2hhbmNlIHRvIG1ha2UgYW55XG4gKiBsYXN0LW1pbnV0ZSBhZGp1c3RtZW50cyB0byB0aGUgcmVkdWNlZCBjb2xsZWN0aW9uIGJlZm9yZSByZXR1cm5pbmcgaXQuXG4gKlxuICogQXJyYXlzLCBzdHJpbmdzLCBhbmQgb2JqZWN0cyBhcmUgYWxsIGdpdmVuIHN1cHBvcnQgZm9yIGFsbCBvZiB0aGVzZVxuICogcHJvdG9jb2xzLiBPdGhlciBjb2xsZWN0aW9ucyB3aWxsIGhhdmUgdG8gcHJvdmlkZSB0aGVpciBvd24gKHRob3VnaCBpdCBzaG91bGRcbiAqIGJlIG5vdGVkIHRoYXQgc2luY2UgYGl0ZXJhdG9yYCBpcyBidWlsdC1pbiwgbWFueSB0aGlyZC1wYXJ0eSBjb2xsZWN0aW9ucyB3aWxsXG4gKiBhbHJlYWR5IGltcGxlbWVudCB0aGlzIHByb3RvY29sKS4gQXMgYW4gZXhhbXBsZSwgbGV0J3MgYWRkIHRyYW5zZHVjZXIgc3VwcG9ydFxuICogdG8gYSB0aGlyZC1wYXJ0eSBjb2xsZWN0aW9uLCB0aGUgYEltbXV0YWJsZS5MaXN0YCBjb2xsZWN0aW9uIGZyb21cbiAqIHtAbGluayBodHRwczovL2ZhY2Vib29rLmdpdGh1Yi5pby9pbW11dGFibGUtanMvfGltbXV0YWJsZS1qc30uXG4gKlxuICogYGBgXG4gKiBJbW11dGFibGUuTGlzdC5wcm90b3R5cGVbcHJvdG9jb2xzLmluaXRdID0gKCkgPT4gSW1tdXRhYmxlLkxpc3QoKS5hc011dGFibGUoKTtcbiAqIEltbXV0YWJsZS5MaXN0LnByb3RvdHlwZVtwcm90b2NvbHMuc3RlcF0gPSAoYWNjLCBpbnB1dCkgPT4gYWNjLnB1c2goaW5wdXQpO1xuICogSW1tdXRhYmxlLkxpc3QucHJvdG90eXBlW3Byb3RvY29scy5yZXN1bHRdID0gKHZhbHVlKSA9PiB2YWx1ZS5hc0ltbXV0YWJsZSgpO1xuICogYGBgXG4gKlxuICogYEltbXV0YWJsZS5MaXN0YCBhbHJlYWR5IGltcGxlbWVudHMgYGl0ZXJhdG9yYCwgc28gd2UgZG9uJ3QgaGF2ZSB0byBkbyBpdFxuICogb3Vyc2VsdmVzLlxuICpcbiAqIFRoZSBgaW5pdGAgZnVuY3Rpb24gcmV0dXJucyBhbiBlbXB0eSBtdXRhYmxlIGxpc3QuIFRoaXMgaXMgaW1wb3J0YW50IGZvclxuICogaW1tdXRhYmxlLWpzIGJlY2F1c2UgaXRzIGRlZmF1bHQgbGlzdHMgYXJlIGltbXV0YWJsZSwgYW5kIGltbXV0YWJsZSBsaXN0c1xuICogbWVhbiB0aGF0IGEgbmV3IGxpc3QgaGFzIHRvIGJlIGNyZWF0ZWQgd2l0aCBldmVyeSByZWR1Y3Rpb24gc3RlcC4gSXQgd291bGRcbiAqIHdvcmsgZmluZSwgYnV0IGl0J3MgcXVpdGUgaW5lZmZpY2llbnQuXG4gKlxuICogVGhlIGBzdGVwYCBmdW5jdGlvbiBhZGRzIHRoZSBuZXh0IHZhbHVlIHRvIHRoZSBhbHJlYWR5LWNyZWF0ZWQgbGlzdC5cbiAqIGBJbW11dGFibGUuTGlzdGAgcHJvdmlkZXMgYSBgcHVzaGAgZnVuY3Rpb24gdGhhdCB3b3JrcyBsaWtlIGFuIGFycmF5J3NcbiAqIGBwdXNoYCwgZXhjZXB0IHRoYXQgaXQgcmV0dXJucyB0aGUgbmV3IGxpc3Qgd2l0aCB0aGUgdmFsdWUgcHVzaGVkIG9udG8gaXQuXG4gKiBUaGlzIGlzIHBlcmZlY3QgZm9yIG91ciBgc3RlcGAgZnVuY3Rpb24uXG4gKlxuICogVGhlIGByZXN1bHRgIGZ1bmN0aW9uIGNvbnZlcnRzIHRoZSBub3ctZmluaXNoZWQgbXV0YWJsZSBsaXN0IGludG8gYW5cbiAqIGltbXV0YWJsZSBvbmUsIHdoaWNoIGlzIHdoYXQncyBnb2luZyB0byBiZSBleHBlY3RlZCBpZiB3ZSdyZSB0cmFuc2R1Y2luZ1xuICogc29tZXRoaW5nIGludG8gYW4gYEltbXV0YWJsZS5MaXN0YC4gSW4gbW9zdCBjYXNlcywgYHJlc3VsdGAgZG9lc24ndCBoYXZlIHRvXG4gKiBkbyBhbnkgd29yaywgYnV0IHNpbmNlIHdlJ3JlIGNyZWF0aW5nIGFuIGludGVybWVkaWF0ZSByZXByZXNlbnRhdGlvbiBvZiBvdXJcbiAqIGNvbGxlY3Rpb24gdHlwZSBoZXJlLCB0aGlzIGxldHMgdXMgY3JlYXRlIHRoZSBjb2xsZWN0aW9uIHRoYXQgd2UgYWN0dWFsbHlcbiAqIHdhbnQgdG8gb3V0cHV0LiAoV2l0aG91dCBgcmVzdWx0YCwgd2Ugd291bGQgaGF2ZSB0byB1c2UgaW1tdXRhYmxlIGxpc3RzIGFsbFxuICogdGhlIHdheSB0aHJvdWdoLCBjcmVhdGluZyBhIG5ldyBvbmUgd2l0aCBlYWNoIGBzdGVwYCBmdW5jdGlvbiwgc2luY2Ugd2VcbiAqIHdvdWxkbid0IGJlIGFibGUgdG8gbWFrZSB0aGlzIGNvbnZlcnN0aW9uIGF0IHRoZSBlbmQuKVxuICpcbiAqIFdpdGggdGhvc2UgcHJvdG9jb2xzIGltcGxlbWVudGVkIG9uIHRoZSBwcm90b3R5cGUsIGBJbW11dGFibGUuTGlzdGBcbiAqIGNvbGxlY3Rpb25zIGNhbiBub3cgc3VwcG9ydCBhbnkgdHJhbnNkdWN0aW9uIHdlIGNhbiBvZmZlci5cbiAqXG4gKiAjIyMgUHJvdG9jb2xzXG4gKlxuICogQWZ0ZXIgdGFsa2luZyBhIGxvdCBhYm91dCBwcm90b2NvbHMgYW5kIHNob3dpbmcgaG93IHRoZXkncmUgcHJvcGVydGllcyBhZGRlZFxuICogdG8gYW4gb2JqZWN0LCBpdCdzIHByb2JhYmx5IHByZXR0eSBvYnZpb3VzIHRoYXQgdGhlcmUncyBiZWVuIG5vIG1lbnRpb24gb2ZcbiAqIHdoYXQgdGhlIGFjdHVhbCBuYW1lcyBvZiB0aG9zZSBwcm9wZXJ0aWVzIGFyZS4gVGhhdCdzIHdoYXRcbiAqIGB7QGxpbmsgbW9kdWxlOnhkdWNlLnByb3RvY29sc3xwcm90b2NvbHN9YCBpcyBmb3IuXG4gKlxuICogVGhlIGJlc3Qgd2F5IHRvIHVzZSB0aGVzZSBrZXlzIGNhbiBiZSBzZWVuIGluIHRoZSBpbW11dGFibGUtanMgZXhhbXBsZSBhYm92ZS5cbiAqIEluc3RlYWQgb2Ygd29ycnlpbmcgYWJvdXQgdGhlIG5hbWUgb2YgdGhlIGtleSBmb3IgdGhlIGBpbml0YCBwcm90b2NvbCwgdGhlXG4gKiB2YWx1ZSBvZiBgcHJvdG9jb2xzLmluaXRgIGlzIHVzZWQuXG4gKlxuICogYHtAbGluayBtb2R1bGU6eGR1Y2UucHJvdG9jb2xzfHByb3RvY29sc31gIGRlZmluZXMgdGhlc2UgcHJvdG9jb2wgcHJvcGVydHlcbiAqIG5hbWVzLlxuICpcbiAqIC0gYGluaXRgXG4gKiAtIGBzdGVwYFxuICogLSBgcmVzdWx0YFxuICogLSBgcmVkdWNlZGA6IHVzZWQgaW50ZXJuYWxseSB0byBtYXJrIGEgY29sbGVjdGlvbiBhcyBhbHJlYWR5IHJlZHVjZWRcbiAqIC0gYHZhbHVlYDogdXNlZCBpbnRlcm5hbGx5IHRvIHByb3ZpZGUgdGhlIGFjdHVhbCB2YWx1ZSBvZiBhIHJlZHVjZWRcbiAqICAgY29sbGVjdGlvblxuICpcbiAqIFRoZSBmaW5hbCB0d28gdmFsdWVzIGRvbid0IGhhdmUgYSBsb3Qgb2YgdXNlIG91dHNpZGUgdGhlIGxpYnJhcnkgdW5sZXNzXG4gKiB5b3UncmUgd3JpdGluZyB5b3VyIG93biB0cmFuc2R1Y2Vycy5cbiAqXG4gKiAjIyBIb3cgT2JqZWN0cyBBcmUgVHJlYXRlZFxuICpcbiAqIE9iamVjdHMgYmVhciBzb21lIHRob3VnaHQgYmVjYXVzZSByZWd1bGFybHksIHRoZXkgYXJlbid0IGNhbmRpZGF0ZXMgZm9yXG4gKiBpdGVyYXRpb24gKGFuZCB0aGVyZWZvcmUgZm9yIHRyYW5zZHVjdGlvbiBpbiBnZW5lcmFsKS4gVGhleSBkb24ndCBoYXZlIGEgdmVyeVxuICogc3RyYWlnaHRmb3J3YXJkIGlkZWEgb2Ygb3JkZXIsIGFuZCB0aGV5IGhhdmUgKnR3byogcGllY2VzIG9mIGRhdGEgKGtleSBhbmRcbiAqIHZhbHVlKSBmb3IgZXZlcnkgZWxlbWVudCBpbnN0ZWFkIG9mIG9uZS4gWWV0IGl0J3MgdW5kZW5pYWJsZSB0aGF0IGF0IGxlYXN0XG4gKiBmb3IgbW9zdCB0cmFuc2Zvcm1hdGlvbnMsIGJlaW5nIGFibGUgdG8gYXBwbHkgdGhlbSB0byBvYmplY3RzIHdvdWxkIGJlIHF1aXRlXG4gKiBoYW5keS5cbiAqXG4gKiBGb3IgdGhhdCByZWFzb24sIHNwZWNpYWwgc3VwcG9ydCBpcyBwcm92aWRlZCBlbmQtdG8tZW5kIGZvciBvYmplY3RzLlxuICpcbiAqICMjIyBPYmplY3QgaXRlcmF0aW9uXG4gKlxuICogSXRlcmF0aW5nIG92ZXIgYW4gb2JqZWN0IHdpbGwgcHJvZHVjZSBvbmUgb2JqZWN0IHBlciBwcm9wZXJ0eSBvZiB0aGUgb3JpZ2luYWxcbiAqIG9iamVjdC4gQW4gb3JkZXIgaXMgaW1wb3NlZDsgYnkgZGVmYXVsdCwgdGhpcyBvcmRlciB0aGUgc2FtZSBhcyB0aGUgb3JkZXJpbmdcbiAqIG9mIGtleXMgaW4gcG9zdC1FUzYgSmF2YXNjcmlwdDpcbiAqXG4gKiAxLiBLZXlzIHRoYXQgYXJlIGludGVnZXJzLCBpbiBhc2NlbmRpbmcgbnVtZXJpY2FsIG9yZGVyXG4gKiAyLiBBbGwgb3RoZXIgc3RyaW5nIGtleXMsIGluIHRoZSBvcmRlciBpbiB3aGljaCB0aGV5IHdlcmUgYWRkZWQgdG8gdGhlIG9iamVjdFxuICogMy4gQWxsIHN5bWJvbCBrZXlzLCBpbiB0aGUgb3JkZXIgaW4gd2hpY2ggdGhleSB3ZXJlIGFkZGVkIHRvIHRoZSBvYmplY3RcbiAqXG4gKiBUaGUgYHtAbGluayBtb2R1bGU6eGR1Y2UuaXRlcmF0b3J8aXRlcmF0b3J9YCBmdW5jdGlvbiBjYW4gYmUgcGFzc2VkIGEgc29ydGluZ1xuICogZnVuY3Rpb24gdGhhdCBjYW4gc29ydCBrZXlzIGluIGFueSBvdGhlciB3YXkuXG4gKlxuICogVGhlIHJlc3VsdCBvZiB0aGUgaXRlcmF0aW9uLCBpcyBhIHNldCBvZiBvYmplY3RzIGVhY2ggd2l0aCBhIHNpbmdsZSBwcm9wZXJ0eSxcbiAqIG9uZSBmb3IgZWFjaCBlbnVtZXJhYmxlIG93biBwcm9wZXJ0eSBvbiB0aGUgb3JpZ2luYWwgb2JqZWN0LiBUaGUgc3RhbmRhcmRcbiAqIG9yZGVyaW5nIGZvciBvYmplY3RzIChmcm9tIEVTNiBvbndhcmQpIGlzIGFzIGZvbGxvd3M6XG4gKlxuICogIyMjIFRyYW5zZm9ybWluZyBvYmplY3RzXG4gKlxuICogV2hpbGUgaXRlcmF0aW5nIG92ZXIgb2JqZWN0cyBpbiB0aGlzIHdheSBpcyBzdHJhaWdodGZvcndhcmQsIHRoZSBzeW50YXggb2ZcbiAqIG9iamVjdHMgbWFrZXMgaXQgdWdseSB0byB0cmFuc2Zvcm0gdGhlbSBpbiB0aGlzIGZvcm0uIEhlcmUncyBhbiBleGFtcGxlIG9mIGFcbiAqIHRyYW5zZm9ybWF0aW9uIGZ1bmN0aW9uIHRoYXQgbWFrZXMgdGhlIG9iamVjdCdzIGtleXMgdXBwZXItY2FzZSBhbmQgYWRkcyBvbmVcbiAqIHRvIGVhY2ggb2YgdGhlIHZhbHVlczpcbiAqXG4gKiBgYGBcbiAqIGZ1bmN0aW9uIHRyYW5zZm9ybShvYmopIHtcbiAqICAgY29uc3Qga2V5ID0gT2JqZWN0LmtleXMob2JqKVswXTtcbiAqICAgY29uc3QgdmFsdWUgPSBvYmpba2V5XTtcbiAqICAgcmV0dXJuIHsgW2tleS50b1VwcGVyQ2FzZSgpXTogdmFsdWUgKyAxIH07XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBBIGhlbHBlciBmdW5jdGlvbiBuYW1lZCBge0BsaW5rIG1vZHVsZTp4ZHVjZS5wcm9wZXJ0eXxwcm9wZXJ0eX1gIGNhbiBpbXByb3ZlXG4gKiB0aGlzIGJ5IGhhbmRsaW5nIHRoZSBib2lsZXJwbGF0ZS5cbiAqXG4gKiBgYGBcbiAqIGZ1bmN0aW9uIGltcHJvdmVkVHJhbnNmb3JtKG9iaikge1xuICogICBjb25zdCB7aywgdn0gPSBwcm9wZXJ0eShvYmopO1xuICogICByZXR1cm4geyBbay50b1VwcGVyQ2FzZSgpXTogdiArIDEgfTtcbiAqIH1cbiAqIGBgYFxuICpcbiAqICMjIyBSZWR1Y2luZyBvYmplY3RzXG4gKlxuICogVGhlIGJ1aWx0LWluIHJlZHVjZXJzIChmb3IgYXJyYXlzLCBvYmplY3RzLCBzdHJpbmdzLCBhbmQgaXRlcmF0b3JzKVxuICogdW5kZXJzdGFuZCB0aGVzZSBzaW5nbGUtcHJvcGVydHkgb2JqZWN0cyBhbmQgcmVkdWNlIHRoZW0gaW4gdGhlIHByb3BlciBtYW5uZXJcbiAqIHdpdGhvdXQgYW55IGZ1cnRoZXIgd29yay5cbiAqXG4gKiBUaGF0J3MgaXQgZm9yIG9iamVjdC1vYmplY3QgcmVkdWN0aW9uLiBDb252ZXJ0aW5nIGJldHdlZW4gb2JqZWN0cyBhbmQgb3RoZXJcbiAqIHR5cGVzIGlzIGFub3RoZXIgbWF0dGVyLlxuICpcbiAqIEV2ZXJ5IHRyYW5zZHVjZXIgZnVuY3Rpb24gZXhjZXB0IGZvciBge0BsaW5rIG1vZHVsZTp4ZHVjZS5zZXF1ZW5jZXxzZXF1ZW5jZX1gXG4gKiBpcyBjYXBhYmxlIG9mIHR1cm5pbmcgYW4gb2JqZWN0IGludG8gYSBkaWZmZXJlbnQgdHlwZSBvZiBjb2xsZWN0aW9uLCB0dXJuaW5nXG4gKiBhIGRpZmZlcmVudCB0eXBlIG9mIGNvbGxlY3Rpb24gaW50byBhbiBvYmplY3QsIG9yIGJvdGguIE9iamVjdHMgYXJlIGRpZmZlcmVudFxuICogYmVjYXVzZSB0aGV5J3JlIHRoZSBvbmx5IFwiY29sbGVjdGlvbnNcIiB0aGF0IGhhdmUgdHdvIGRpZmZlcmVudCBwaWVjZXMgb2YgZGF0YVxuICogcGVyIGVsZW1lbnQuIEJlY2F1c2Ugb2YgdGhpcywgd2UgaGF2ZSB0byBoYXZlIGEgc3RyYXRlZ3kgb24gaG93IHRvIG1vdmUgZnJvbVxuICogb25lIHRvIGFub3RoZXIuXG4gKlxuICogVHJhbnNkdWNpbmcgYW4gb2JqZWN0IGludG8gYSBkaWZmZXJlbnQgdHlwZSBpcyBnZW5lcmFsbHkgcHJldHR5IGVhc3kuIElmIGFuXG4gKiBvYmplY3QgaXMgY29udmVydGVkIGludG8gYW4gYXJyYXksIGZvciBpbnN0YW5jZSwgdGhlIGFycmF5IGVsZW1lbnRzIHdpbGwgZWFjaFxuICogYmUgc2luZ2xlLXByb3BlcnR5IG9iamVjdHMsIG9uZSBwZXIgcHJvcGVydHkgb2YgdGhlIG9yaWdpbmFsIG9iamVjdC5cbiAqXG4gKiBTdHJpbmdzIGFyZSBhIGRpZmZlcmVudCBzdG9yeSwgc2luY2UgZW5jb2RpbmcgYSBzaW5nbGUtcHJvcGVydHkgb2JqZWN0IHRvIGFcbiAqIHN0cmluZyBpc24ndCBwb3NzaWJsZSAoYmVjYXVzZSBldmVyeSBcImVsZW1lbnRcIiBvZiBhIHN0cmluZyBoYXMgdG8gYmUgYSBzaW5nbGVcbiAqIGNoYXJhY3RlcikuIFN0cmluZ3MgdGhhdCBhcmUgcHJvZHVjZWQgZnJvbSBvYmplY3RzIHdpbGwgaW5zdGVhZCBqdXN0IGJlIHRoZVxuICogb2JqZWN0IHZhbHVlcywgY29uY2F0ZW5hdGVkLiBCZWNhdXNlIG9iamVjdHMgYXJlIGl0ZXJhdGVkIGluIGEgcGFydGljdWxhclxuICogb3JkZXIsIHRoaXMgY29udmVyc2lvbiB3aWxsIGFsd2F5cyBwcm9kdWNlIHRoZSBzYW1lIHN0cmluZywgYnV0IGV4Y2VwdCBpblxuICogc29tZSB2ZXJ5IHNwZWNpZmljIGNhc2VzIHRoZXJlIHJlYWxseSBpc24ndCBhIGxvdCBvZiB1c2UgZm9yIHRoaXMgY29udmVyc2lvbi5cbiAqXG4gKiBgYGBcbiAqIGNvbnN0IG9iaiA9IHthOiAxLCBiOiAyfTtcbiAqXG4gKiBsZXQgcmVzdWx0ID0gYXNBcnJheShvYmopO1xuICogLy8gcmVzdWx0ID0gW3thOiAxfSwge2I6IDJ9XVxuICpcbiAqIHJlc3VsdCA9IGFzSXRlcmF0b3Iob2JqKTtcbiAqIC8vIHJlc3VsdCBpcyBhbiBpdGVyYXRvciB3aXRoIHR3byB2YWx1ZXM6IHthOiAxfSBhbmQge2I6IDJ9XG4gKlxuICogcmVzdWx0ID0gaW50byhJbW11dGFibGUuTGlzdCgpLCBvYmopXG4gKiAvLyByZXN1bHQgaXMgYW4gaW1tdXRhYmxlIGxpc3Qgd2l0aCB0d28gZWxlbWVudHM6IHthOiAxfSBhbmQge2I6IDJ9XG4gKlxuICogcmVzdWx0ID0gYXNTdHJpbmcob2JqKTtcbiAqIC8vIHJlc3VsdCBpcyAnMTInXG4gKiBgYGBcbiAqXG4gKiBUaGUgb3Bwb3NpdGUgY29udmVyc2lvbiBkZXBlbmRzIG9uIHRoZSB2YWx1ZXMgaW5zaWRlIHRoZSBjb2xsZWN0aW9ucy4gSWZcbiAqIHRob3NlIHZhbHVlcyBhcmUgb2JqZWN0cywgdGhlbiB0aGUgcmVzdWx0IGlzIGFuIG9iamVjdCB3aXRoIGFsbCBvZiB0aGVcbiAqIG9iamVjdHMgY29tYmluZWQgKGlmIG1vcmUgdGhhbiBvbmUgaGFzIHRoZSBzYW1lIGtleSwgdGhlIGxhc3Qgb25lIGlzIHRoZSBvbmVcbiAqIHRoYXQncyBrZXB0KS4gT3RoZXJ3aXNlLCBrZXlzIGFyZSBjcmVhdGVkIGZvciBlYWNoIG9mIHRoZSBlbGVtZW50cywgc3RhcnRpbmdcbiAqIHdpdGggYDBgIGFuZCBpbmNyZWFzaW5nIGZyb20gdGhlcmUuXG4gKlxuICogVGhpcyBtZWFucyB0aGF0IGNvbnZlcnRpbmcgYW4gb2JqZWN0IHRvIGFueSBub24tc3RyaW5nIGNvbGxlY3Rpb24gYW5kIGJhY2tcbiAqIHByb2R1Y2VzIHRoZSBvcmlnaW5hbCBvYmplY3QuXG4gKlxuICogYGBgXG4gKiBsZXQgcmVzdWx0ID0gYXNPYmplY3QoW3thOiAxfSwge2I6IDJ9XSk7XG4gKiAvLyByZXN1bHQgPSB7YTogMSwgYjogMn1cbiAqXG4gKiByZXN1bHQgPSBhc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gcmVzdWx0ID0gezA6IDEsIDE6IDIsIDI6IDN9XG4gKlxuICogcmVzdWx0ID0gYXNPYmplY3QoJ2hlbGxvJyk7XG4gKiAvLyByZXN1bHQgPSB7MDogJ2gnLCAxOiAnZScsIDI6ICdsJywgMzogJ2wnLCA0OiAnbyd9XG4gKiBgYGBcbiAqXG4gKiBAbW9kdWxlIHhkdWNlXG4gKi9cblxuZXhwb3J0IHsgcHJvdG9jb2xzIH0gZnJvbSBcIm1vZHVsZXMvcHJvdG9jb2xcIjtcbmV4cG9ydCB7IGl0ZXJhdG9yLCBwcm9wZXJ0eSB9IGZyb20gXCJtb2R1bGVzL2l0ZXJhdGlvblwiO1xuZXhwb3J0IHtcbiAgY29tcGxldGUsXG4gIHVuY29tcGxldGUsXG4gIGlzQ29tcGxldGVkLFxuICBlbnN1cmVDb21wbGV0ZWQsXG4gIGVuc3VyZVVuY29tcGxldGVkLFxuICByZWR1Y2UsXG4gIHRvRnVuY3Rpb24sXG4gIHRvUmVkdWNlcixcbn0gZnJvbSBcIm1vZHVsZXMvcmVkdWN0aW9uXCI7XG4vLyBleHBvcnQge1xuLy8gICB0cmFuc2R1Y2UsXG4vLyAgIHNlcXVlbmNlLFxuLy8gICBpbnRvLFxuLy8gICBhc0FycmF5LFxuLy8gICBhc09iamVjdCxcbi8vICAgYXNTdHJpbmcsXG4vLyAgIGFzSXRlcmF0b3IsXG4vLyAgIGNvbXBvc2UsXG4vLyB9IGZyb20gXCJtb2R1bGVzL3RyYW5zZm9ybWF0aW9uXCI7XG5cbi8qKlxuICogQSBnZW5lcmljIGl0ZXJhdG9yLiBUaGlzIGNvbmZvcm1zIHRvIHRoZSBgaXRlcmF0b3JgIHByb3RvY29sIGluIHRoYXQgaXQgaGFzXG4gKiBhIGB7QGxpbmsgbW9kdWxlOnhkdWNlLk5leHRGdW5jdGlvbnxuZXh0fWAgZnVuY3Rpb24gdGhhdCBwcm9kdWNlc1xuICoge0BsaW5rIG1vZHVsZTp4ZHVjZS5OZXh0VmFsdWV8YGl0ZXJhdG9yYC1jb21wYXRpYmxlIG9iamVjdHN9LlxuICpcbiAqIEB0eXBlZGVmIHtvYmplY3R9IEl0ZXJhdG9yXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcHJvcGVydHkge21vZHVsZTp4ZHVjZS5OZXh0RnVuY3Rpb259IG5leHQgQSBmdW5jdGlvbiB0aGF0LCB3aGVuIGNhbGxlZCxcbiAqICAgICByZXR1cm5zIHRoZSBuZXh0IGl0ZXJhdG9yIHZhbHVlLlxuICovXG5cbi8qKlxuICogVGhlIGZ1bmN0aW9uIHRoYXQgc2F0aXNmaWVzIHRoZSBgaXRlcmF0b3JgIHByb3RvY29sIG9uIGFuIG9iamVjdC4gV2hlblxuICogY2FsbGVkLCBpdCByZXR1cm5zIHRoZSBuZXh0IHZhbHVlIGluIHRoZSBpdGVyYXRvci5cbiAqXG4gKiBAY2FsbGJhY2sgTmV4dEZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcmV0dXJucyB7bW9kdWxlOnhkdWNlLk5leHRWYWx1ZX0gVGhlIG5leHQgdmFsdWUgaW4gdGhlIGl0ZXJhdG9yLlxuICovXG5cbi8qKlxuICogVGhlIG9iamVjdCByZXR1cm5lZCBieSBhIGNhbGwgdG8gYHtAbGluayBtb2R1bGU6eGR1Y2UuTmV4dEZ1bmN0aW9ufG5leHR9YC5cbiAqIEl0IGluZGljYXRlcyB3aGV0aGVyIHRoZSBpdGVyYXRvciBpcyBjb21wbGV0ZSBhbmQsIGlmIG5vdCwgd2hhdCB0aGUgbmV4dFxuICogdmFsdWUgaXMuXG4gKlxuICogQHR5cGVkZWYge29iamVjdH0gTmV4dFZhbHVlXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcHJvcGVydHkgeyp9IHZhbHVlIFRoZSB2YWx1ZSB0aGF0IHRoZSBpdGVyYXRvciBoYXMgcHJvdmlkZWQuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IGRvbmUgSW5kaWNhdGVzIHdoZXRoZXIgdGhlIGl0ZXJhdG9yIGhhcyBjb21wbGV0ZWQuIElmXG4gKiAgICAgdGhpcyBpcyBgdHJ1ZWAsIHRoZW4gYHZhbHVlYCB3aWxsIGJlIGB1bmRlZmluZWRgIGFuZCBldmVyeSBzdWJzZXF1ZW50XG4gKiAgICAgY2FsbCB0byBge0BsaW5rIG1vZHVsZTp4ZHVjZS5OZXh0RnVuY3Rpb258bmV4dH1gIHdpbGwgY29udGludWUgdG8gcHJvZHVjZVxuICogICAgIHRoZSBzYW1lIHZhbHVlLiBJZiBpdCdzIGBmYWxzZWAsIHRoZW4gYHZhbHVlYCByZXByZXNlbnRzIHRoZSBuZXQgdmFsdWUgaW5cbiAqICAgICB0aGUgaXRlcmF0b3IsIGFuZCB0aGUgbmV4dCBjYWxsIHRvXG4gKiAgICAgYHtAbGluayBtb2R1bGU6eGR1Y2UuTmV4dEZ1bmN0aW9ufG5leHR9YCB3aWxsIGNvbnRpbnVlIHRvIHByb2R1Y2UgdGhlXG4gKiAgICAgbmV4dCB2YWx1ZS5cbiAqL1xuXG4vKipcbiAqIEEgc29ydCBmdW5jdGlvbiBmb3IgdGhlIGtleXMgb2YgYW4gb2JqZWN0LiBUaGlzIGNvbmZvcm1zIHRvIHRoZSBub3JtYWwgc29ydFxuICogZnVuY3Rpb24gdXNlZCBpbiBgQXJyYXkucHJvdG90eXBlLnNvcnRgLlxuICpcbiAqIEBjYWxsYmFjayBTb3J0RnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwcm9wZXJ0eSB7Kn0gYSBUaGUgZmlyc3QgdmFsdWUgdG8gYmUgc29ydGVkLlxuICogQHByb3BlcnR5IHsqfSBiIFRoZSBzZWNvbmQgdmFsdWUgdG8gYmUgc29ydGVkLlxuICogQHJldHVybnMge251bWJlcn0gRWl0aGVyIGAtMWAgaWYgYGEgPiBiYCwgYDFgIGlmIGBhIDwgYmAsIG9yIGAwYCBpZiBgYSA9PT1cbiAqICAgICBiYC5cbiAqL1xuXG4vKipcbiAqIEEgZnVuY3Rpb24gdGhhdCBjYW4gaGF2ZSBhbiBpdGVyYXRvciBjcmVhdGVkIGZvciBpdC5cbiAqXG4gKiBAY2FsbGJhY2sgSXRlcmFibGVGdW5jdGlvblxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHBhcmFtIHtudW1iZXJ9IFtpbmRleF0gVGhlIG51bWJlciBvZiB0aW1lcyB0aGF0XG4gKiAgICAgYHtAbGluayBtb2R1bGU6eGR1Y2UuTmV4dEZ1bmN0aW9ufG5leHR9YCBoYXMgYmVlbiBjYWxsZWQgb24gdGhlXG4gKiAgICAgZnVuY3Rpb24ncyBpdGVyYXRvci4gVGhpcyB3aWxsIHN0YXJ0IGF0IGAwYCBmb3IgdGhlIGZpcnN0IGNhbGwgdG9cbiAqICAgICBge0BsaW5rIG1vZHVsZTp4ZHVjZS5OZXh0RnVuY3Rpb258bmV4dH1gIGFuZCBpbmNyZWFzZSBieSBvbmUgZm9yIGVhY2hcbiAqICAgICBzdWJzZXF1ZW50IGNhbGwuXG4gKiBAcGFyYW0geyp9IFtsYXN0XSBUaGUgcmV0dXJuIHZhbHVlIG9mIHRoZSBmdW5jdGlvbiB0aGUgbGFzdCB0aW1lXG4gKiAgICAgYHtAbGluayBtb2R1bGU6eGR1Y2UuTmV4dEZ1bmN0aW9ufG5leHR9YCB3YXMgY2FsbGVkIG9uIGl0cyBpdGVyYXRvci4gRm9yXG4gKiAgICAgdGhlIGZpcnN0IGNhbGwsIHRoaXMgaXMgc2V0IHRvIGB1bmRlZmluZWRgLlxuICogQHJldHVybnMgeyp9IFRoZSByZXR1cm4gdmFsdWUgZm9yIHRoYXQgaXRlcmF0aW9uLlxuICovXG5cbi8qKlxuICogQW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIGEgc2luZ2xlLXByb3BlcnR5IG9iamVjdCwgYnV0IHVzaW5nIG9uZSBwcm9wZXJ0eVxuICogZm9yIHRoZSBrZXkgYW5kIG9uZSBmb3IgdGhlIHZhbHVlLiBUaGlzIGZvcm1hdCBpcyBlYXNpZXIgdG8gdXNlIGluXG4gKiB0cmFuc2Zvcm1hdGlvbiBmdW5jdGlvbnMuXG4gKlxuICogQHR5cGVkZWYge29iamVjdH0gUHJvcGVydHlPYmplY3RcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwcm9wZXJ0eSB7KFN0cmluZ3xTeW1ib2wpfSBrIFRoZSBrZXkgb2YgdGhlIHNpbmdsZS1wcm9wZXJ0eSBvYmplY3QgdGhhdCB0aGlzXG4gKiAgICAgb2JqZWN0IHJlcHJlc2VudHMuXG4gKiBAcHJvcGVydHkgeyp9IHYgVGhlIHZhbHVlIG9mIHRoZSBzaW5nbGUtcHJvcGVydHkgb2JqZWN0IHRoYXQgdGhpcyBvYmplY3RcbiAqICAgICByZXByZXNlbnRzLlxuICovXG5cbi8qKlxuICogQW4gaW5pdCBmdW5jdGlvbiwgd2hpY2ggcHJvdmlkZXMgYSBuZXcsIGVtcHR5IGluc3RhbmNlIG9mIGEgY29sbGVjdGlvbi5cbiAqXG4gKiBAY2FsbGJhY2sgSW5pdEZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcmV0dXJucyB7Kn0gQSBuZXcsIGVtcHR5IGluc3RhbmNlIG9mIGEgY29sbGVjdGlvbi5cbiAqL1xuXG4vKipcbiAqIEEgc3RlcCBmdW5jdGlvbiwgdGhhdCByZWR1Y2VzIGEgY29sbGVjdGlvbiBhbmQgYSBuZXcgdmFsdWUgdG8gdGhlXG4gKiBjb2xsZWN0aW9uIHdpdGggdGhlIHZhbHVlIGFkZGVkLlxuICpcbiAqIEBjYWxsYmFjayBTdGVwRnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwYXJhbSB7Kn0gYWNjIEFuIGFjY3VtdWxhdGVkIHZhbHVlIHRvIHdoaWNoIHRoZSBuZXcgdmFsdWUgaXMgYmVpbmcgYWRkZWQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSBuZXcgdmFsdWUgdG8gYmUgYWRkZWQgdG8gdGhlIGFjY3VtdWxhdGVkIHZhbHVlLlxuICogQHJldHVybnMgeyp9IFRoZSBhY2N1bXVsYXRlZCB2YWx1ZSB3aXRoIHRoZSBuZXcgdmFsdWUgaW50ZWdyYXRlZCBpbnRvIGl0LlxuICovXG5cbi8qKlxuICogQSByZXN1bHQgZnVuY3Rpb24gdGhhdCBvcHRpb25hbGx5IG1vZGlmaWVzIHRoZSBpbnB1dCBjb2xsZWN0aW9uIGFuZCB0aGVuXG4gKiByZXR1cm5zIGl0LiBUaGlzIGlzIHVzZWQgYXQgdGhlIGVuZCBvZiBhIHJlZHVjdGlvbiB0byBhZmZvcmQgYSBsYXN0IGNoYW5jZVxuICogZm9yIHRoZSB0cmFuc2R1Y2VyIHRvIG1vZGlmeSB0aGUgb3V0cHV0IHZhbHVlLlxuICpcbiAqIEBjYWxsYmFjayBSZXN1bHRGdW5jdGlvblxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHBhcmFtIHsqfSBpbnB1dCBUaGUgdmFsdWUgdG8gYmUgbW9kaWZpZWQgYmVmb3JlIGJlaW5nIG91dHB1dC5cbiAqIEByZXR1cm5zIHsqfSBUaGUgbW9kaWZpZWQgdmFsdWUgdG8gYmUgb3V0cHV0IGJ5IGEgdHJhbnNkdWNlci5cbiAqL1xuXG4vKipcbiAqIEFuIG9iamVjdCB3aXRoIGFsbCBvZiB0aGUgaW5mb3JtYXRpb24gbmVjZXNzYXJ5IHRvIHJlZHVjZSB2YWx1ZXMgaW50byBhXG4gKiBwYXJ0aWN1bGFyIGtpbmQgb2YgY29sbGVjdGlvbi4gVGhlc2UgYXJlIHBhc3NlZCB0b1xuICoge0BsaW5rIG1vZHVsZTp4ZHVjZS5yZWR1Y2V8cmVkdWNlfSBhbmQgbGlrZSBmdW5jdGlvbnMuXG4gKlxuICogQHR5cGVkZWYgUmVkdWNlclxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHByb3BlcnR5IHttb2R1bGU6eGR1Y2UuSW5pdEZ1bmN0aW9ufSBbU3ltYm9sLmZvcihcInRyYW5zZHVjZXIvaW5pdFwiKV0gVGhlXG4gKiAgICAgcmVkdWNlcidzIGluaXQgZnVuY3Rpb24uXG4gKiBAcHJvcGVydHkge21vZHVsZTp4ZHVjZS5TdGVwRnVuY3Rpb259IFN5bWJvbC5mb3IoXCJ0cmFuc2R1Y2VyL3N0ZXBcIikgVGhlXG4gKiAgICAgcmVkdWNlcidzIHN0ZXAgZnVuY3Rpb24uXG4gKiBAcHJvcGVydHkge21vZHVsZTp4ZHVjZS5SZXN1bHRGdW5jdGlvbn0gU3ltYm9sLmZvcihcInRyYW5zZHVjZXIvcmVzdWx0XCIpIFRoZVxuICogICAgIHJlZHVjZXIncyByZXN1bHQgZnVuY3Rpb24uXG4gKi9cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG5pbXBvcnQgeyBpc0ltcGxlbWVudGVkIH0gZnJvbSBcIm1vZHVsZXMvcHJvdG9jb2xcIjtcbmltcG9ydCB7IGlzRnVuY3Rpb24sIGlzT2JqZWN0LCBpc0dlbmVyYXRvckZ1bmN0aW9uIH0gZnJvbSBcIm1vZHVsZXMvdXRpbHNcIjtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGl0ZXJhdG9yIG92ZXIgYW4gb2JqZWN0LlxuICpcbiAqIERldGFpbHMgYWJvdXQgdGhpcyBmdW5jdGlvbiBhcmUgaW5jbHVkZWQgaW4gdGhlIGRvY3VtZW50YXRpb24gZm9yXG4gKiB7QGxpbmsgbW9kdWxlOnhkdWNlLml0ZXJhdG9yfGl0ZXJhdG9yfS5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIFRoZSBvYmplY3QgYmVpbmcgaXRlcmF0ZWQgb3Zlci5cbiAqIEBwYXJhbSB7bW9kdWxlOnhkdWNlLlNvcnRGdW5jdGlvbn0gW3NvcnRGbl0gQW4gb3B0aW9uYWwgZnVuY3Rpb24gdXNlZCB0byBzb3J0XG4gKiAgICAgdGhlIG9iamVjdCBrZXlzIGJlZm9yZSBpdGVyYXRpb24uIElmIGl0IGlzbid0IHByb3ZpZGVkLCB0aGUga2V5cyB3aWxsIGJlXG4gKiAgICAgc29ydGVkIGluIHRoZSBzYW1lIG9yZGVyIGFzIGBPYmplY3Qua2V5cyhvYmopYCB3b3VsZCBzb3J0IHRoZW0uXG4gKiBAcmV0dXJucyB7bW9kdWxlOnhkdWNlLkl0ZXJhdG9yfSBBbiBpdGVyYXRvciBvdmVyIHRoZSBwcm9wZXJ0aWVzIG9mIGBvYmpgLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gb2JqZWN0SXRlcmF0b3Iob2JqLCBzb3J0Rm4pIHtcbiAgcmV0dXJuIChmdW5jdGlvbiooKSB7XG4gICAgY29uc3Qga2V5cyA9XG4gICAgICB0eXBlb2Ygc29ydEZuID09PSBcImZ1bmN0aW9uXCJcbiAgICAgICAgPyBPYmplY3Qua2V5cyhvYmopLnNvcnQoc29ydEZuKVxuICAgICAgICA6IE9iamVjdC5rZXlzKG9iaik7XG4gICAgbGV0IGluZGV4ID0gMDtcblxuICAgIHdoaWxlIChpbmRleCA8IGtleXMubGVuZ3RoKSB7XG4gICAgICBjb25zdCBrID0ga2V5c1tpbmRleCsrXTtcbiAgICAgIHlpZWxkIHsgW2tdOiBvYmpba10gfTtcbiAgICB9XG4gIH0pKCk7XG59XG5cbi8qKlxuICogQSBjb252ZW5pZW5jZSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIGZpcnN0IGtleSBhbmQgdmFsdWUgaW4gYW4gb2JqZWN0IGFzXG4gKiBhIHR3by1wcm9wZXJ0eSBvYmplY3QsIG9uZSBwcm9wZXJ0eSBmb3IgdGhlIGtleSBhbmQgb25lIGZvciB0aGUgdmFsdWUuIFRoaXNcbiAqIGlzIGludGVuZGVkIHRvIHdvcmsgd2l0aCB0aGUgdmFsdWVzIHByb3ZpZGVkIGJ5IGFuIG9iamVjdCBpdGVyYXRvciwgYXMgdGhlXG4gKiBzeW50YXggb2Ygb2JqZWN0cyBkb2Vzbid0IHdvcmsgdmVyeSBuaWNlbHkgd2l0aCBzaW5nbGUtcHJvcGVydHkgb2JqZWN0cy5cbiAqXG4gKiBgYGBcbiAqIGNvbnN0IG9iaiA9IHsgYzogMSwgYTogMiwgYjogMyB9O1xuICogY29uc3QgaXRlciA9IGl0ZXJhdG9yKG9iaik7XG4gKlxuICogbGV0IHZhbHVlID0gaXRlci5uZXh0KCkudmFsdWU7XG4gKiBjb25zb2xlLmxvZyh2YWx1ZSk7ICAgICAgICAgICAgIC8vIC0+IHsgYzogMSB9XG4gKiBjb25zb2xlLmxvZyhwcm9wZXJ0eSh2YWx1ZSkpOyAgIC8vIC0+IHsgazogXCJjXCIsIHY6IDEgfVxuICpcbiAqIHZhbHVlID0gaXRlci5uZXh0KCkudmFsdWU7XG4gKiBjb25zb2xlLmxvZyh2YWx1ZSk7ICAgICAgICAgICAgIC8vIC0+IHsgYTogMiB9XG4gKiBjb25zb2xlLmxvZyhwcm9wZXJ0eSh2YWx1ZSkpOyAgIC8vIC0+IHsgazogXCJhXCIsIHY6IDIgfVxuICpcbiAqIHZhbHVlID0gaXRlci5uZXh0KCkudmFsdWU7XG4gKiBjb25zb2xlLmxvZyh2YWx1ZSk7ICAgICAgICAgICAgIC8vIC0+IHsgYjogMyB9XG4gKiBjb25zb2xlLmxvZyhwcm9wZXJ0eSh2YWx1ZSkpOyAgIC8vIC0+IHsgazogXCJiXCIsIHY6IDMgfVxuICogYGBgXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHBhcmFtIHtvYmplY3R9IG9iaiBUaGUgb2JqZWN0IHdob3NlIGZpcnN0IHByb3BlcnR5IGlzIHJldHVybmVkLlxuICogQHJldHVybiB7bW9kdWxlOnhkdWNlLlByb3BlcnR5T2JqZWN0fSBUaGUgcHJvcGVydHkgYXMgYSB0d28tcHJvcGVydHkgb2JqZWN0LlxuICovXG5mdW5jdGlvbiBrdihvYmopIHtcbiAgY29uc3Qga2V5ID0gT2JqZWN0LmtleXMob2JqKVswXTtcbiAgcmV0dXJuIHsgazoga2V5LCB2OiBvYmpba2V5XSB9O1xufVxuXG4vKipcbiAqIEEgY29udmVuaWVuY2UgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBrZXkgb2YgdGhlIGZpcnN0IHByb3BlcnR5IG9mIGFuXG4gKiBvYmplY3QuIFRoaXMgaXMgbWVhbnQgZm9yIHVzZSB3aXRoIG9iamVjdCBpdGVyYXRvcnMgdG8gbW9yZSBjb252ZW5pZW50bHlcbiAqIGFjY2VzcyBwYXJ0cyBvZiB0aGUgc2luZ2xlLXByb3BlcnR5IG9iamVjdHMgdGhhdCB0aGV5IGVtaXQuXG4gKiBcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmogVGhlIG9iamVjdCB3aG9zZSBmaXJzdCBrZXkgaXMgcmV0dXJuZWQuXG4gKiBAcmV0dXJuIHsoU3RyaW5nfFN5bWJvbCl9IFRoZSBrZXkgb2YgdGhlIG9iamVjdCdzIGZpcnN0IHByb3BlcnR5LlxuICovXG5mdW5jdGlvbiBrZXkob2JqKSB7XG4gIHJldHVybiBrdihvYmopLms7XG59XG5cbi8qKlxuICogQSBjb252ZW5pZW5jZSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSBmaXJzdCBwcm9wZXJ0eSBvZiBhblxuICogb2JqZWN0LiBUaGlzIGlzIG1lYW50IGZvciB1c2Ugd2l0aCBvYmplY3QgaXRlcmF0b3JzIHRvIG1vcmUgY29udmVuaWVudGx5XG4gKiBhY2Nlc3MgcGFydHMgb2YgdGhlIHNpbmdsZS1wcm9wZXJ0eSBvYmplY3RzIHRoYXQgdGhleSBlbWl0LlxuICogXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIFRoZSBvYmplY3Qgd2hvc2UgZmlyc3QgdmFsdWUgaXMgcmV0dXJuZWQuXG4gKiBAcmV0dXJuIHsqfSBUaGUgdmFsdWUgb2YgdGhlIG9iamVjdCdzIGZpcnN0IHByb3BlcnR5LlxuICovXG5mdW5jdGlvbiB2YWx1ZShvYmopIHtcbiAgcmV0dXJuIGt2KG9iaikudjtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuIGl0ZXJhdG9yIG92ZXIgYSBmdW5jdGlvbi5cbiAqXG4gKiBEZXRhaWxzIGFib3V0IHRoaXMgZnVuY3Rpb24gYXJlIGluY2x1ZGVkIGluIHRoZSBkb2N1bWVudGF0aW9uIGZvclxuICoge0BsaW5rIG1vZHVsZTp4ZHVjZS5pdGVyYXRvcnxpdGVyYXRvcn0uXG4gKlxuICogQHBhcmFtIHttb2R1bGU6eGR1Y2UuSXRlcmFibGVGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEByZXR1cm5zIHttb2R1bGU6eGR1Y2UuSXRlcmF0b3J9IEFuIGl0ZXJhdG9yIG92ZXIgdGhlIHJldHVybiB2YWx1ZXMgb2YgYGZuYC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGZ1bmN0aW9uSXRlcmF0b3IoZm4pIHtcbiAgcmV0dXJuIChmdW5jdGlvbiooKSB7XG4gICAgbGV0IGN1cnJlbnQ7XG4gICAgbGV0IGluZGV4ID0gMDtcblxuICAgIGZvciAoOzspIHtcbiAgICAgIGN1cnJlbnQgPSBmbihpbmRleCsrLCBjdXJyZW50KTtcbiAgICAgIGlmICh0eXBlb2YgY3VycmVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHlpZWxkIGN1cnJlbnQ7XG4gICAgfVxuICB9KSgpO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYW4gaXRlcmF0b3Igb3ZlciB0aGUgcHJvdmlkZWQgdmFsdWUuXG4gKlxuICogRm9yIGNvbGxlY3Rpb25zIHRoYXQgaW1wbGVtZW50IHRoZSBpdGVyYWJsZSBwcm90b2NvbCwgaXQncyBhcyBzaW1wbGUgYXNcbiAqIHJldHVybmluZyB0aGUgaXRlcmF0b3IgYWxyZWFkeSBkZWZpbmVkIGZvciB0aGF0IGNvbGxlY3Rpb24uXG4gKlxuICogYGBgXG4gKiBjb25zdCBpdGVyID0gaXRlcmF0b3IoWzEsIDIsIDNdKTtcbiAqIGNvbnNvbGUubG9nKGl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiAxXG4gKiBjb25zb2xlLmxvZyhpdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4gMlxuICogY29uc29sZS5sb2coaXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IDNcbiAqIGNvbnNvbGUubG9nKGl0ZXIubmV4dCgpLmRvbmUpOyAgICAvLyAtPiB0cnVlXG4gKiBgYGBcbiAqXG4gKiBPYmplY3RzIGFyZSBzcGVjaWFsbHkgc3VwcG9ydGVkIHRvIHJldHVybiBhbiBpdGVyYXRvciBhcyB3ZWxsLCBldmVuIHRob3VnaFxuICogdGhleSBkb24ndCBuYXRpdmVseSBzdXBwb3J0IHRoZSBpdGVyYWJsZSBwcm90b2NvbC4gVGhlIGl0ZXJhdG9yJ3MgYG5leHRgXG4gKiBmdW5jdGlvbiBwcm92aWRlcyBzaW5nbGUtcHJvcGVydHkgb2JqZWN0cywgb25lIGZvciBlYWNoIHByb3BlcnR5IGluIHRoZVxuICogb3JpZ2luYWwgb2JqZWN0LCBvcmRlcmVkIGluIHRoZSBzdGFuZGFyZCBwb3N0LUVTNiBvcmRlciBmb3IgaXRlcmF0aW5nIG92ZXJcbiAqIG9iamVjdCBrZXlzOlxuICpcbiAqIDEuIEtleXMgdGhhdCBhcmUgaW50ZWdlcnMsIGluIGFzY2VuZGluZyBudW1lcmljYWwgb3JkZXJcbiAqIDIuIEFsbCBvdGhlciBzdHJpbmcga2V5cywgaW4gdGhlIG9yZGVyIGluIHdoaWNoIHRoZXkgd2VyZSBhZGRlZCB0byB0aGUgb2JqZWN0XG4gKiAzLiBBbGwgc3ltYm9sIGtleXMsIGluIHRoZSBvcmRlciBpbiB3aGljaCB0aGV5IHdlcmUgYWRkZWQgdG8gdGhlIG9iamVjdFxuICpcbiAqIElmIGEgZGlmZmVyZW50IG9yZGVyIGlzIG5lZWRlZCwgdGhpcyBmdW5jdGlvbiB0YWtlcyBhIHNlY29uZCBhcmd1bWVudCwgYSBzb3J0XG4gKiBmdW5jdGlvbiwgdGhhdCBhZmZlY3RzIG9iamVjdHMgb25seS4gSXQgaXMgYSBzdGFuZGFyZCBmdW5jdGlvbiB0aGF0IHdvdWxkIGJlXG4gKiBwYXNzZWQgdG8gYEFycmF5LnByb3RvdHlwZS5zb3J0YCBhbmQgc29ydHMgdGhlIGtleXMgYWNjb3JkaW5nbHkuXG4gKlxuICogYGBgXG4gKiBjb25zdCBhbHBoYSA9IChhLCBiKSA9PiAoYSA8IGIgPyAtMSA6IGIgPCBhID8gMSA6IDApO1xuICogY29uc3Qgb2JqID0geyBjOiAxLCBhOiAyLCBiOiAzIH07XG4gKlxuICogY29uc3Qgb2JqSXRlciA9IGl0ZXJhdG9yKG9iaik7XG4gKiBjb25zb2xlLmxvZyhvYmpJdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4geyBjOiAxIH1cbiAqIGNvbnNvbGUubG9nKG9iakl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiB7IGE6IDIgfVxuICogY29uc29sZS5sb2cob2JqSXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IHsgYjogMyB9XG4gKlxuICogY29uc3Qgc29ydGVkSXRlciA9IGl0ZXJhdG9yKG9iaiwgYWxwaGEpO1xuICogY29uc29sZS5sb2cob2JqSXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IHsgYTogMiB9XG4gKiBjb25zb2xlLmxvZyhvYmpJdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4geyBiOiAzIH1cbiAqIGNvbnNvbGUubG9nKG9iakl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiB7IGM6IDEgfVxuICogYGBgXG4gKlxuICogQWRkaXRpb25hbGx5LCB0aGVyZSBpcyBzcGVjaWFsIHN1cHBvcnQgZm9yIHBhc3NpbmcgYSBmdW5jdGlvbiB0byB0aGlzXG4gKiBmdW5jdGlvbi4gVGhlIGl0ZXJhdG9yIHJldHVybmVkIHJ1bnMgdGhhdCBmdW5jdGlvbiBmb3IgZWFjaCBjYWxsIHRvIGBuZXh0YC5cbiAqIFRoYXQgZnVuY3Rpb24gaXMgcHJvdmlkZWQgdHdvIGFyZ3VtZW50czogdGhlIGluZGV4IChzdGFydGluZyBhdCBgMGAgZm9yIHRoZVxuICogZmlyc3QgY2FsbCB0byBgbmV4dGAgYW5kIGluY3JlYXNpbmcgYnkgMSBmb3IgZWFjaCBjYWxsIHRvIGBuZXh0YCBhZnRlcikgYW5kXG4gKiB0aGUgcmV0dXJuIHZhbHVlIG9mIHRoZSBwcmV2aW91cyBjYWxsIHRvIGBuZXh0YCAoZm9yIHRoZSBmaXJzdCBjYWxsIHRvXG4gKiBgbmV4dGAsIHRoaXMgd2lsbCBiZSBgdW5kZWZpbmVkYCkuIFRoZSBpdGVyYXRpb24gd2lsbCBjb250aW51ZSB1bnRpbCB0aGVcbiAqIGZpcnN0IHRpbWUgdGhlIGl0ZXJhdGVkIGZ1bmN0aW9uIHJldHVybnMgYHVuZGVmaW5lZGA7IGF0IHRoYXQgcG9pbnQgdGhlXG4gKiBpdGVyYXRvciB3aWxsIHRlcm1pbmF0ZSBhbmQgcmV0dXJuIGB7IGRvbmU6IHRydWUgfWAgb2ZmIHN1YnNlcXVlbnQgYG5leHRgXG4gKiBjYWxscy5cbiAqXG4gKiBgYGBcbiAqIGNvbnN0IGNvbnN0SXRlciA9IGl0ZXJhdG9yKCgpID0+IDYpO1xuICogY29uc29sZS5sb2coY29uc3RJdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4gNlxuICogY29uc29sZS5sb2coY29uc3RJdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4gNlxuICogLy8gVGhpcyB3aWxsIGNvbnRpbnVlIGZvcmV2ZXIsIGFzIGxvbmcgYXMgYG5leHRgIGtlZXBzIGdldHRpbmcgY2FsbGVkXG4gKlxuICogY29uc3QgaW5kZXhJdGVyID0gaXRlcmF0b3IoeCA9PiB4ICogeCk7XG4gKiBjb25zb2xlLmxvZyhpbmRleEl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiAwO1xuICogY29uc29sZS5sb2coaW5kZXhJdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4gMTtcbiAqIGNvbnNvbGUubG9nKGluZGV4SXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IDQ7XG4gKiBjb25zb2xlLmxvZyhpbmRleEl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiA5O1xuICogLy8gVGhpcyB3aWxsIGNvbnRpbnVlIGZvcmV2ZXIgb3IgdW50aWwgdGhlIG51bWJlcnMgZ2V0IHRvbyBiaWcgZm9yXG4gKiAvLyBKYXZhU2NyaXB0IHRvIGRlYWwgd3RpaFxuICpcbiAqIC8vIFVzaW5nIGEgZGVmYXVsdCB2YWx1ZSBmb3IgdGhlIGBsYXN0YCBwYXJhbWV0ZXIsIHdoaWNoIHNldHMgaXRzIHZhbHVlXG4gKiAvLyBmb3IgdGhlIGZpcnN0IHJ1biB3aGVuIGl0IGlzIG5vcm1hbGx5IGB1bmRlZmluZWRgXG4gKiBjb25zdCBsYXN0SXRlciA9IGl0ZXJhdG9yKCh4LCBsYXN0ID0gMSkgPT4gbGFzdCAqICh4ICsgMSkpOyAvLyBmYWN0b3JpYWwhXG4gKiBjb25zb2xlLmxvZyhsYXN0SXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IDFcbiAqIGNvbnNvbGUubG9nKGxhc3RJdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4gMlxuICogY29uc29sZS5sb2cobGFzdEl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiA2XG4gKiBjb25zb2xlLmxvZyhsYXN0SXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IDI0XG4gKiAvLyBBZ2FpbiwgcnVucyBmb3JldmVyLCB0aG91Z2ggZmFjdG9yaWFscyBnZXQgYmlnIHZlcnkgcXVpY2tseVxuICpcbiAqIC8vIEl0ZXJhdG9ycyB0ZXJtaW5hdGUgd2hlbiB0aGUgZnVuY3Rpb24gcmV0dXJucyBgdW5kZWZpbmVkYFxuICogY29uc3Qgc3RvcEl0ZXIgPSBpdGVyYXRvcih4ID0+IHggPCAyID8geCA6IHVuZGVmaW5lZCk7XG4gKiBjb25zb2xlLmxvZyhzdG9wSXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IDBcbiAqIGNvbnNvbGUubG9nKHN0b3BJdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4gMVxuICogY29uc29sZS5sb2coc3RvcEl0ZXIubmV4dCgpLmRvbmUpOyAgICAvLyAtPiB0cnVlXG4gKiBgYGBcbiAqXG4gKiBJZiB0aGUgcHJvdmlkZWQgdmFsdWUgaXMgbm90IGFjdHVhbGx5IGl0ZXJhYmxlIChvciBhbiBvYmplY3Qgb3IgYSBmdW5jdGlvbiksXG4gKiBgbnVsbGAgaXMgcmV0dXJuZWQgaW4gcGxhY2Ugb2YgdGhlIGl0ZXJhdG9yLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNyZWF0ZSBhbiBpdGVyYXRvciBvdmVyLlxuICogQHBhcmFtIHttb2R1bGU6eGR1Y2UuU29ydEZ1bmN0aW9ufSBbc29ydEZuXSBBbiBvcHRpb25hbCBzb3J0IGZ1bmN0aW9uIGZvclxuICogICAgIHNvcnRpbmcgdGhlIGtleXMgb2YgYW4gb2JqZWN0IGJlZm9yZSBpdGVyYXRpb24uIEl0IGlzIGlnbm9yZWQgaWYgYHZhbHVlYFxuICogICAgIGlzbid0IGEgcGxhaW4gb2JqZWN0LlxuICogQHJldHVybnMge21vZHVsZTp4ZHVjZS5JdGVyYXRvcn0gQW4gaXRlcmF0b3Igb3ZlciBgdmFsdWVgLlxuICovXG5mdW5jdGlvbiBpdGVyYXRvcih2YWx1ZSwgc29ydEZuID0gbnVsbCkge1xuICBzd2l0Y2ggKHRydWUpIHtcbiAgICBjYXNlIGlzRnVuY3Rpb24odmFsdWVbU3ltYm9sLml0ZXJhdG9yXSk6XG4gICAgY2FzZSBpc0dlbmVyYXRvckZ1bmN0aW9uKHZhbHVlW1N5bWJvbC5pdGVyYXRvcl0pOlxuICAgICAgcmV0dXJuIHZhbHVlW1N5bWJvbC5pdGVyYXRvcl0oKTtcbiAgICBjYXNlIGlzRnVuY3Rpb24odmFsdWUpOlxuICAgICAgcmV0dXJuIGZ1bmN0aW9uSXRlcmF0b3IodmFsdWUpO1xuICAgIGNhc2UgaXNPYmplY3QodmFsdWUpOlxuICAgICAgcmV0dXJuIG9iamVjdEl0ZXJhdG9yKHZhbHVlLCBzb3J0Rm4pO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgcGFzc2VkIG9iamVjdCBpcyBpdGVyYWJsZSwgaW4gdGVybXMgb2Ygd2hhdCAnaXRlcmFibGUnXG4gKiBtZWFucyB0byB0aGlzIGxpYnJhcnkuIEluIG90aGVyIHdvcmRzLCB2YWx1ZXMgaW1wbGVtZW50aW5nIHRoZSBgaXRlcmFibGVgXG4gKiBwcm90b2NvbCBhbmQgcGxhaW4gb2JqZWN0cyByZXR1cm4gYHRydWVgLCB3aGlsZSBldmVyeXRoaW5nIGVsc2UgcmV0dXJuc1xuICogYGZhbHNlYC4gVGhpcyBkb2VzIG5vdCByZXR1cm4gYHRydWVgIGZvciBmdW5jdGlvbnMgZXZlbiB0aG91Z2hcbiAqIHtAbGluayBtb2R1bGU6eGR1Y2UuaXRlcmF0b3J8aXRlcmF0b3J9IGNhbiBwcm9kdWNlIGFuIGl0ZXJhdG9yIGZvciB0aGVtLFxuICogYmVjYXVzZSBub3QgYWxsIGZ1bmN0aW9ucyB3b3JrIHdlbGwgd2l0aFxuICoge0BsaW5rIG1vZHVsZTp4ZHVjZS5pdGVyYXRvcnxpdGVyYXRvcn0uXG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gdGVzdCBmb3IgaXRlcmFiaWxpdHkuXG4gKiBAcmV0dXJuIHtib29sZWFufSBFaXRoZXIgYHRydWVgIGlmIHRoZSB2YWx1ZSBpcyBpdGVyYWJsZVxuICogICAgIChge0BsaW5rIG1vZHVsZTp4ZHVjZS5pdGVyYXRvcn1gIHdpbGwgcmV0dXJuIGFuIGl0ZXJhdG9yIGZvciBpdCkgb3JcbiAqICAgICBgZmFsc2VgIGlmIGl0IGlzIG5vdC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGlzSXRlcmFibGUodmFsdWUpIHtcbiAgcmV0dXJuIGlzSW1wbGVtZW50ZWQodmFsdWUsIFwiaXRlcmF0b3JcIikgfHwgaXNPYmplY3QodmFsdWUpO1xufVxuXG5leHBvcnQgeyBpdGVyYXRvciwgaXNJdGVyYWJsZSwga3YsIGtleSwgdmFsdWUgfTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG4vKipcbiAqIFByb3RvY29scyBmb3IgaXRlcmF0aW9uIGFuZCByZWR1Y3Rpb24uXG4gKlxuICogVGhlIG5hbWVzIGZvciB0aGVzZSBwcm90b2NvbHMgY2FtZSBmcm9tIGEgZGlzY3Vzc2lvbiB0aHJlYWRcbiAqICh7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2NvZ25pdGVjdC1sYWJzL3RyYW5zZHVjZXJzLWpzL2lzc3Vlcy8yMH0pIGZyb20gYVxuICogdGltZSB3aGVuIHRyYW5zZHVjZXJzIHdlcmUgdmVyeSBtdWNoIGluIHRoZSBmb3JlZnJvbnQuIEl0J3MgdGhlIGNsb3Nlc3QgdGhpbmdcbiAqIHRoZXJlIGlzIHRvIGEgc3RhbmRhcmQsIHNvIGl0IHdhcyBhZG9wdGVkIGhlcmUuXG4gKlxuICogVGhlc2UgYXJlIHRoZSBzYW1lIHN5bWJvbHMgYXMgYXZhaWxhYmxlIGluIG15IHRyYW5zZHVjZXIgbGlicmFyeS4gVGhleSBhcmVcbiAqIHB1YmxpY2x5IGF2YWlsYWJsZSBmcm9tIHRoZXJlLlxuICpcbiAqIEBtb2R1bGUgeGR1Y2UvcHJvdG9jb2xcbiAqIEBwcml2YXRlXG4gKi9cblxuaW1wb3J0IHsgaXNGdW5jdGlvbiwgaXNHZW5lcmF0b3JGdW5jdGlvbiB9IGZyb20gXCJtb2R1bGVzL3V0aWxzXCI7XG5cbi8qKlxuICogVGhlIG1hcHBpbmcgb2YgcHJvdG9jb2wgbmFtZXMgdG8gdGhlaXIgcmVzcGVjdGl2ZSBwcm9wZXJ0eSBrZXkgbmFtZXMuIFRoZVxuICogdmFsdWVzIG9mIHRoaXMgbWFwIHdpbGwgZGVwZW5kIG9uIHdoZXRoZXIgc3ltYm9scyBhcmUgYXZhaWxhYmxlLlxuICpcbiAqIEB0eXBlZGVmIHtvYmplY3R9IFByb3RvY29sTWFwXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcHJvcGVydHkge1N5bWJvbH0gaW5pdCBUaGUgYHRyYW5zZHVjZXIvaW5pdGAgcHJvdG9jb2wuIFRoaXMgaXMgdXNlZFxuICogICAgIHRvIG1hcmsgZnVuY3Rpb25zIHRoYXQgaW5pdGlhbGl6ZSBhIHRhcmdldCBjb2xsZWN0aW9uIGJlZm9yZSBhZGRpbmcgaXRlbXNcbiAqICAgICB0byBpdC5cbiAqIEBwcm9wZXJ0eSB7U3ltYm9sfSBzdGVwIFRoZSBgdHJhbnNkdWNlci9zdGVwYCBwcm90b2NvbC4gVGhpcyBpcyB1c2VkXG4gKiAgICAgdG8gbWFyayBmdW5jdGlvbnMgdGhhdCBhcmUgdXNlZCBpbiB0aGUgdHJhbnNkdWNlcidzIHN0ZXAgcHJvY2Vzcywgd2hlcmVcbiAqICAgICBvYmplY3RzIGFyZSBhZGRlZCB0byB0aGUgdGFyZ2V0IGNvbGxlY3Rpb24gb25lIGF0IGEgdGltZS5cbiAqIEBwcm9wZXJ0eSB7U3ltYm9sfSByZXN1bHQgVGhlIGB0cmFuc2R1Y2VyL3Jlc3VsdGAgcHJvdG9jb2wuIFRoaXMgaXNcbiAqICAgICB1c2VkIHRvIG1hcmsgZnVuY3Rpb25zIHRoYXQgdGFrZSB0aGUgZmluYWwgcmVzdWx0IG9mIHRoZSBzdGVwIHByb2Nlc3MgYW5kXG4gKiAgICAgcmV0dXJuIHRoZSBmaW5hbCBmb3JtIHRvIGJlIG91dHB1dC4gVGhpcyBpcyBvcHRpb25hbDsgaWYgdGhlIHRyYW5zZHVjZXJcbiAqICAgICBkb2VzIG5vdCB3YW50IHRvIHRyYW5zZm9ybSB0aGUgZmluYWwgcmVzdWx0LCBpdCBzaG91bGQganVzdCByZXR1cm4gdGhlXG4gKiAgICAgcmVzdWx0IG9mIGl0cyBjaGFpbmVkIHRyYW5zZHVjZXIncyBgcmVzdWx0YCBmdW5jdGlvbi5cbiAqIEBwcm9wZXJ0eSB7U3ltYm9sfSByZWR1Y2VkIFRoZSBgdHJhbnNkdWNlci9yZWR1Y2VkYCBwcm90b2NvbC4gVGhlXG4gKiAgICAgcHJlc2VuY2Ugb2YgdGhpcyBrZXkgb24gYW4gb2JqZWN0IGluZGljYXRlcyB0aGF0IGl0cyB0cmFuc2Zvcm1hdGlvbiBoYXNcbiAqICAgICBiZWVuIGNvbXBsZXRlZC4gSXQgaXMgdXNlZCBpbnRlcm5hbGx5IHRvIG1hcmsgY29sbGVjdGlvbnMgd2hvc2VcbiAqICAgICB0cmFuc2Zvcm1hdGlvbnMgY29uY2x1ZGUgYmVmb3JlIGV2ZXJ5IG9iamVjdCBpcyBpdGVyYXRlZCBvdmVyIChhcyBpblxuICogICAgIGB7QGxpbmsgeGR1Y2UudGFrZX1gIHRyYW5zZHVjZXJzLikgSXQgaXMgb2YgbGl0dGxlIHVzZSBiZXlvbmQgdHJhbnNkdWNlclxuICogICAgIGF1dGhvcmluZy5cbiAqIEBwcm9wZXJ0eSB7U3ltYm9sfSB2YWx1ZSBUaGUgYHRyYW5zZHVjZXIvdmFsdWVgIHByb3RvY29sLiBUaGlzIGlzXG4gKiAgICAgdXNlZCBpbnRlcm5hbGx5IHRvIG1hcmsgcHJvcGVydGllcyB0aGF0IGNvbnRhaW4gdGhlIHZhbHVlIG9mIGEgcmVkdWNlZFxuICogICAgIHRyYW5zZm9ybWF0aW9uLiBJdCBpcyBvZiBsaXR0bGUgdXNlIGJleW9uZCB0cmFuc2R1Y2VyIGF1dGhvcmluZy5cbiAqL1xuXG4vKipcbiAqIFRoZSBtYXBwaW5nIG9mIHByb3RvY29sIG5hbWVzIHRvIHRoZWlyIHJlc3BlY3RpdmUgcHJvcGVydHkga2V5IG5hbWVzLlxuICpcbiAqIEB0eXBlIHttb2R1bGU6eGR1Y2UuUHJvdG9jb2xNYXB9XG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKi9cbmNvbnN0IHByb3RvY29scyA9IE9iamVjdC5jcmVhdGUobnVsbCwge1xuICBpbml0OiB7XG4gICAgdmFsdWU6IFN5bWJvbC5mb3IoXCJ0cmFuc2R1Y2VyL2luaXRcIilcbiAgfSxcbiAgc3RlcDoge1xuICAgIHZhbHVlOiBTeW1ib2wuZm9yKFwidHJhbnNkdWNlci9zdGVwXCIpXG4gIH0sXG4gIHJlc3VsdDoge1xuICAgIHZhbHVlOiBTeW1ib2wuZm9yKFwidHJhbnNkdWNlci9yZXN1bHRcIilcbiAgfSxcbiAgcmVkdWNlZDoge1xuICAgIHZhbHVlOiBTeW1ib2wuZm9yKFwidHJhbnNkdWNlci9yZWR1Y2VkXCIpXG4gIH0sXG4gIHZhbHVlOiB7XG4gICAgdmFsdWU6IFN5bWJvbC5mb3IoXCJ0cmFuc2R1Y2VyL3ZhbHVlXCIpXG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBpc0ltcGxlbWVudGVkKG9iaiwgcHJvdG9jb2wpIHtcbiAgaWYgKG9iaiA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3dpdGNoIChwcm90b2NvbCkge1xuICAgIGNhc2UgXCJpdGVyYXRvclwiOlxuICAgICAgcmV0dXJuIChcbiAgICAgICAgaXNGdW5jdGlvbihvYmpbU3ltYm9sLml0ZXJhdG9yXSkgfHxcbiAgICAgICAgaXNHZW5lcmF0b3JGdW5jdGlvbihvYmpbU3ltYm9sLml0ZXJhdG9yXSlcbiAgICAgICk7XG4gICAgY2FzZSBcImFzeW5jSXRlcmF0b3JcIjpcbiAgICAgIHJldHVybiBpc0dlbmVyYXRvckZ1bmN0aW9uKG9ialtTeW1ib2wuYXN5bmNJdGVyYXRvcl0pO1xuICAgIGNhc2UgXCJyZWR1Y2VkXCI6XG4gICAgY2FzZSBcInZhbHVlXCI6XG4gICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmopLmluY2x1ZGVzKHByb3RvY29sc1twcm90b2NvbF0pO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gaXNGdW5jdGlvbihvYmpbcHJvdG9jb2xzW3Byb3RvY29sXV0pO1xuICB9XG59XG5cbmV4cG9ydCB7IHByb3RvY29scywgaXNJbXBsZW1lbnRlZCB9O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG5cbi8qKlxuICogQSBzZXQgb2YgZnVuY3Rpb25zIHJlbGF0ZWQgdG8gdGhlIHByb2R1Y2luZyByZWR1Y2VyIG9iamVjdHMsIG1hcmtpbmdcbiAqIGNvbXBsZXRlZCBvYmplY3RzLCBhbmQgcGVyZm9ybWluZyBnZW5lcmFsIHJlZHVjdGlvbiBvcGVyYXRpb25zLlxuICpcbiAqIEBtb2R1bGUgcmVkdWN0aW9uXG4gKiBAcHJpdmF0ZVxuICovXG5cbmltcG9ydCB7IGlzSW1wbGVtZW50ZWQsIHByb3RvY29scyBhcyBwIH0gZnJvbSBcIm1vZHVsZXMvcHJvdG9jb2xcIjtcbmltcG9ydCB7IGlzU3RyaW5nLCBpc0FycmF5LCBpc09iamVjdCwgaXNGdW5jdGlvbiB9IGZyb20gXCJtb2R1bGVzL3V0aWxzXCI7XG5pbXBvcnQgeyBrdiwgaXRlcmF0b3IgfSBmcm9tIFwibW9kdWxlcy9pdGVyYXRpb25cIjtcblxuLyoqXG4gKiBSZXR1cm5zIGFuIGluaXQgZnVuY3Rpb24gZm9yIGEgY29sbGVjdGlvbi4gVGhpcyBpcyBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhXG4gKiBuZXcsIGVtcHR5IGluc3RhbmNlIG9mIHRoZSBjb2xsZWN0aW9uIGluIHF1ZXN0aW9uLiBJZiB0aGUgY29sbGVjdGlvbiBkb2Vzbid0XG4gKiBzdXBwb3J0IHJlZHVjdGlvbiwgYG51bGxgIGlzIHJldHVybmVkLiBUaGlzIG1ha2VzIGNvbmRpdGlvbmFscyBhIGJpdCBlYXNpZXJcbiAqIHRvIHdvcmsgd2l0aC5cbiAqXG4gKiBJbiBvcmRlciB0byBzdXBwb3J0IHRoZSBjb252ZXJzaW9uIG9mIGZ1bmN0aW9ucyBpbnRvIHJlZHVjZXJzLCBmdW5jdGlvblxuICogc3VwcG9ydCBpcyBhbHNvIHByb3ZpZGVkLlxuICpcbiAqIEBwYXJhbSB7Kn0gY29sbGVjdGlvbiBBIGNvbGxlY3Rpb24gdG8gY3JlYXRlIGFuIGluaXQgZnVuY3Rpb24gZm9yLiBUaGlzIGNhblxuICogICAgIGJlIGFueXRoaW5nIHRoYXQgc3VwcG9ydHMgdGhlIGl0ZXJhdGlvbiBwcm90b2NvbCBvciBhIHBsYWluIG9iamVjdC5cbiAqIEByZXR1cm4ge21vZHVsZTp4ZHVjZS5Jbml0RnVuY3Rpb259IEEgZnVuY3Rpb24gdGhhdCwgd2hlbiBjYWxsZWQsIHJldHVybnMgYW5cbiAqICAgICBpbml0aWFsIHZlcnNpb24gb2YgdGhlIHByb3ZpZGVkIGNvbGxlY3Rpb24uIElmIHRoZSBwcm92aWRlZCBjb2xsZWN0aW9uIGlzXG4gKiAgICAgbm90IGl0ZXJhYmxlLCB0aGVuIGBudWxsYCBpcyByZXR1cm5lZC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGluaXQoY29sbGVjdGlvbikge1xuICBzd2l0Y2ggKHRydWUpIHtcbiAgICBjYXNlIGlzSW1wbGVtZW50ZWQoY29sbGVjdGlvbiwgXCJpbml0XCIpOlxuICAgICAgcmV0dXJuIGNvbGxlY3Rpb25bcC5pbml0XTtcbiAgICBjYXNlIGlzU3RyaW5nKGNvbGxlY3Rpb24pOlxuICAgICAgcmV0dXJuICgpID0+IFwiXCI7XG4gICAgY2FzZSBpc0FycmF5KGNvbGxlY3Rpb24pOlxuICAgICAgcmV0dXJuICgpID0+IFtdO1xuICAgIGNhc2UgaXNPYmplY3QoY29sbGVjdGlvbik6XG4gICAgICByZXR1cm4gKCkgPT4gKHt9KTtcbiAgICBjYXNlIGlzRnVuY3Rpb24oY29sbGVjdGlvbik6XG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICB0aHJvdyBFcnJvcihcImluaXQgbm90IGF2YWlsYWJsZVwiKTtcbiAgICAgIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbi8qKlxuICogUmV0dXJucyBhIHN0ZXAgZnVuY3Rpb24gZm9yIGEgY29sbGVjdGlvbi4gVGhpcyBpcyBhIGZ1bmN0aW9uIHRoYXQgdGFrZXMgYW5cbiAqIGFjY3VtdWxhdG9yIGFuZCBhIHZhbHVlIGFuZCByZXR1cm5zIHRoZSByZXN1bHQgb2YgcmVkdWNpbmcgdGhlIHZhbHVlIGludG8gdGhlXG4gKiBhY2N1bXVsYXRvci4gSWYgdGhlIGNvbGxlY3Rpb24gZG9lc24ndCBzdXBwb3J0IHJlZHVjdGlvbiwgYG51bGxgIGlzIHJldHVybmVkLlxuICogVGhlIHJldHVybmVkIGZ1bmN0aW9uIGl0c2VsZiBzaW1wbHkgcmVkdWNlcyB0aGUgaW5wdXQgaW50byB0aGUgdGFyZ2V0XG4gKiBjb2xsZWN0aW9uIHdpdGhvdXQgbW9kaWZ5aW5nIGl0LlxuICpcbiAqIEluIG9yZGVyIHRvIHN1cHBvcnQgdGhlIGNvbnZlcnNpb24gb2YgZnVuY3Rpb25zIGludG8gcmVkdWNlcnMsIGZ1bmN0aW9uXG4gKiBzdXBwb3J0IGlzIGFsc28gcHJvdmlkZWQuXG4gKlxuICogQHBhcmFtIHsqfSBjb2xsZWN0aW9uIEEgY29sbGVjdGlvbiB0byBjcmVhdGUgYSBzdGVwIGZ1bmN0aW9uIGZvci4gVGhpcyBjYW4gYmVcbiAqICAgICBhbnl0aGluZyB0aGF0IHN1cHBvcnRzIHRoZSBpdGVyYXRpb24gcHJvdG9jb2wsIGEgcGxhaW4gb2JqZWN0LCBvciBhXG4gKiAgICAgZnVuY3Rpb24uXG4gKiBAcmV0dXJuIHttb2R1bGU6eGR1Y2UuU3RlcEZ1bmN0aW9ufSBBIHJlZHVjdGlvbiBmdW5jdGlvbiBmb3IgdGhlIHByb3ZpZGVkXG4gKiAgICAgY29sbGVjdGlvbiB0aGF0IHNpbXBseSBhZGRzIGFuIGVsZW1lbnQgdG8gdGhlIHRhcmdldCBjb2xsZWN0aW9uIHdpdGhvdXRcbiAqICAgICBtb2RpZnlpbmcgaXQuIElmIHRoZSBwcm92aWRlZCBjb2xsZWN0aW9uIGlzIG5vdCBpdGVyYWJsZSwgYG51bGxgIGlzXG4gKiAgICAgcmV0dXJuZWQuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBzdGVwKGNvbGxlY3Rpb24pIHtcbiAgc3dpdGNoICh0cnVlKSB7XG4gICAgY2FzZSBpc0ltcGxlbWVudGVkKGNvbGxlY3Rpb24sIFwic3RlcFwiKTpcbiAgICAgIHJldHVybiBjb2xsZWN0aW9uW3Auc3RlcF07XG5cbiAgICBjYXNlIGlzU3RyaW5nKGNvbGxlY3Rpb24pOlxuICAgICAgcmV0dXJuIChhY2MsIGlucHV0KSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gaXNPYmplY3QoaW5wdXQpID8ga3YoaW5wdXQpLnYgOiBpbnB1dDtcbiAgICAgICAgcmV0dXJuIGFjYyArIHZhbHVlO1xuICAgICAgfTtcblxuICAgIGNhc2UgaXNBcnJheShjb2xsZWN0aW9uKTpcbiAgICAgIHJldHVybiAoYWNjLCBpbnB1dCkgPT4ge1xuICAgICAgICBhY2MucHVzaChpbnB1dCk7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9O1xuXG4gICAgY2FzZSBpc09iamVjdChjb2xsZWN0aW9uKTpcbiAgICAgIHJldHVybiAoYWNjLCBpbnB1dCkgPT4ge1xuICAgICAgICBsZXQgdmFsdWUgPSBpbnB1dDtcblxuICAgICAgICBpZiAoIWlzT2JqZWN0KGlucHV0KSkge1xuICAgICAgICAgIC8vIGlmIHRoZSBpbnB1dCBpc24ndCBhbiBvYmplY3QsIHR1cm4gaXQgaW50byBhbiBvYmplY3Qgd2l0aCBhXG4gICAgICAgICAgLy8gbnVtZXJpY2FsIGtleSBvbmUgZ3JlYXRlciB0aGFuIHRoZSBtYXgga2V5IGFscmVhZHkgaW4gdGhlXG4gICAgICAgICAgLy8gYWNjdW11bGF0b3JcbiAgICAgICAgICBjb25zdCBtYXggPSBPYmplY3Qua2V5cyhhY2MpLnJlZHVjZSgoYSwgYikgPT4gTWF0aC5tYXgoYSwgYiksIC0xKTtcbiAgICAgICAgICB2YWx1ZSA9IHsgW21heCArIDFdOiBpbnB1dCB9O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgeyBrLCB2IH0gPSBrdih2YWx1ZSk7XG4gICAgICAgIGFjY1trXSA9IHY7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9O1xuXG4gICAgY2FzZSBpc0Z1bmN0aW9uKGNvbGxlY3Rpb24pOlxuICAgICAgcmV0dXJuIChhY2MsIGlucHV0KSA9PiBjb2xsZWN0aW9uKGFjYywgaW5wdXQpO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbi8qKlxuICogUmV0dXJucyBhIHJlc3VsdCBmdW5jdGlvbiBmb3IgYSBjb2xsZWN0aW9uLiBUaGlzIGlzIGEgZnVuY3Rpb24gdGhhdCBwZXJmb3Jtc1xuICogYW55IGZpbmFsIHByb2Nlc3NpbmcgdGhhdCBzaG91bGQgYmUgZG9uZSBvbiB0aGUgcmVzdWx0IG9mIGEgcmVkdWN0aW9uLiBJZiB0aGVcbiAqIGNvbGxlY3Rpb24gZG9lc24ndCBzdXBwb3J0IHJlZHVjdGlvbiwgYG51bGxgIGlzIHJldHVybmVkLlxuICpcbiAqIEluIG9yZGVyIHRvIHN1cHBvcnQgdGhlIGNvbnZlcnNpb24gb2YgZnVuY3Rpb25zIGludG8gcmVkdWNlcnMsIGZ1bmN0aW9uXG4gKiBzdXBwb3J0IGlzIGFsc28gcHJvdmlkZWQuXG4gKlxuICogQHBhcmFtIHsqfSBjb2xsZWN0aW9uIEEgY29sbGVjdGlvbiB0byBjcmVhdGUgYSBzdGVwIGZ1bmN0aW9uIGZvci4gVGhpcyBjYW4gYmVcbiAqICAgICBhbnl0aGluZyB0aGF0IHN1cHBvcnRzIHRoZSBpdGVyYXRpb24gcHJvdG9jb2wsIGEgcGxhaW4gb2JqZWN0LCBvciBhXG4gKiAgICAgZnVuY3Rpb24uXG4gKiBAcmV0dXJuIHttb2R1bGU6eGR1Y2UuUmVzdWx0RnVuY3Rpb259IEEgZnVuY3Rpb24gdGhhdCwgd2hlbiBnaXZlbiBhIHJlZHVjZWRcbiAqICAgICBjb2xsZWN0aW9uLCBwcm9kdWNlcyB0aGUgZmluYWwgb3V0cHV0LiBJZiB0aGUgcHJvdmlkZWQgY29sbGVjdGlvbiBpcyBub3RcbiAqICAgICBpdGVyYWJsZSwgYG51bGxgIHdpbGwgYmUgcmV0dXJuZWQuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiByZXN1bHQoY29sbGVjdGlvbikge1xuICBzd2l0Y2ggKHRydWUpIHtcbiAgICBjYXNlIGlzSW1wbGVtZW50ZWQoY29sbGVjdGlvbiwgXCJyZXN1bHRcIik6XG4gICAgICByZXR1cm4gY29sbGVjdGlvbltwLnJlc3VsdF07XG4gICAgY2FzZSBpc1N0cmluZyhjb2xsZWN0aW9uKTpcbiAgICBjYXNlIGlzQXJyYXkoY29sbGVjdGlvbik6XG4gICAgY2FzZSBpc09iamVjdChjb2xsZWN0aW9uKTpcbiAgICBjYXNlIGlzRnVuY3Rpb24oY29sbGVjdGlvbik6XG4gICAgICByZXR1cm4gdmFsdWUgPT4gdmFsdWU7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHJlZHVjZXIgb2JqZWN0IGZyb20gYSBmdW5jdGlvbiBvciBmcm9tIGEgYnVpbHQtaW4gcmVkdWNpYmxlIHR5cGVcbiAqIChhcnJheSwgb2JqZWN0LCBvciBzdHJpbmcpLlxuICpcbiAqIFRvIGNyZWF0ZSBhIHJlZHVjZXIgZm9yIGFycmF5cywgb2JqZWN0cywgb3Igc3RyaW5ncywgc2ltcGx5IHBhc3MgYW4gZW1wdHlcbiAqIHZlcnNpb24gb2YgdGhhdCBjb2xsZWN0aW9uIHRvIHRoaXMgZnVuY3Rpb24gKGUuZy4sIGB0b1JlZHVjZXIoW10pYCkuXG4gKlxuICogVGhlIG5vdGFibGUgdXNlIGZvciB0aGlzIGZ1bmN0aW9uIHRob3VnaCBpcyB0byB0dXJuIGEgcmVkdWN0aW9uIGZ1bmN0aW9uIGludG9cbiAqIGEgcmVkdWNlciBvYmplY3QuIFRoZSBmdW5jdGlvbiBpcyBhIGZ1bmN0aW9uIG9mIHR3byBwYXJhbWV0ZXJzLCBhblxuICogYWNjdW11bGF0b3IgYW5kIGEgdmFsdWUsIGFuZCByZXR1cm5zIHRoZSBhY2N1bXVsYXRvciB3aXRoIHRoZSB2YWx1ZSBpbiBpdC5cbiAqIFRoaXMgaXMgZXhhY3RseSB0aGUgc2FtZSBraW5kIG9mIGZ1bmN0aW9uIHRoYXQgaXMgcGFzc2VkIHRvIHJlZHVjdGlvblxuICogZnVuY3Rpb25zIGxpa2UgSmF2YVNjcmlwdCdzIGBBcnJheS5wcm90b3R5cGUucmVkdWNlYCBhbmQgTG9kYXNoJ3MgYF8ucmVkdWNlYC5cbiAqXG4gKiBOb3RlIGluIHBhcnRpY3VsYXIgdGhhdCB0aGUgb3V0cHV0IG9mIHRoaXMgcmVkdWNlciBkb2VzIG5vdCBuZWVkIHRvIGJlIGFcbiAqIGNvbGxlY3Rpb24uIEl0IGNhbiBiZSBhbnl0aGluZy4gV2hpbGUgdHJhbnNkdWNpbmcgbm9ybWFsbHkgaW52b2x2ZXNcbiAqIHRyYW5zZm9ybWluZyBvbmUgY29sbGVjdGlvbiBpbnRvIGFub3RoZXIsIGl0IG5lZWQgbm90IGJlIHNvLiBGb3IgZXhhbXBsZSxcbiAqIGhlcmUgaXMgYSByZWR1Y2VyIHRoYXQgd2lsbCByZXN1bHQgaW4gc3VtbWluZyBvZiB0aGUgY29sbGVjdGlvbiB2YWx1ZXMuXG4gKlxuICogYGBgXG4gKiBpbXBvcnQgeyB0b1JlZHVjZXIsIHJlZHVjZSB9IGZyb20gXCJAY2hhbmtvL3hkdWNlXCI7XG4gKlxuICogY29uc3Qgc3VtUmVkdWNlciA9IHRvUmVkdWNlcigoYWNjLCBpbnB1dCkgPT4gYWNjICsgaW5wdXQpO1xuICogY29uc3Qgc3VtID0gcmVkdWNlKFsxLCAyLCAzLCA0LCA1XSwgc3VtUmVkdWNlciwgMCk7XG4gKiBjb25zb2xlLmxvZyhzdW0pOyAgIC8vIC0+IDE1XG4gKiBgYGBcbiAqXG4gKiBUaGlzIGNhbiBiZSBjb21iaW5lZCB3aXRoIHRyYW5zZHVjZXJzIGFzIHdlbGwsIGFzIGluIHRoaXMgY2FsY3VsYXRpb24gb2YgdGhlXG4gKiBzdW0gb2YgdGhlICpzcXVhcmVzKiBvZiB0aGUgY29sbGVjdGlvbiB2YWx1ZXMuXG4gKlxuICogYGBgXG4gKiBpbXBvcnQgeyB0b1JlZHVjZXIsIHRyYW5zZHVjZSB9IGZyb20gXCJAY2hhbmtvL3hkdWNlXCI7XG4gKiBpbXBvcnQgeyBtYXAgfSBmcm9tIFwiQGNoYW5rby90cmFuc2R1Y2Vyc1wiO1xuICpcbiAqIGNvbnN0IHN1bVJlZHVjZXIgPSB0b1JlZHVjZXIoKGFjYywgaW5wdXQpID0+IGFjYyArIGlucHV0KTtcbiAqIGNvbnN0IHN1bSA9IHRyYW5zZHVjZShbMSwgMiwgMywgNCwgNV0sIG1hcCh4ID0+IHggKiB4KSwgc3VtUmVkdWNlciwgMCk7XG4gKiBjb25zb2xlLmxvZyhzdW0pOyAgIC8vIC0+IDU1XG4gKiBgYGBcbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcGFyYW0geyp9IGNvbGxlY3Rpb24gQW4gaXRlcmFibGUgY29sbGVjdGlvbiBvciBhIHJlZHVjZXIgZnVuY3Rpb24uXG4gKiBAcmV0dXJuIHtvYmplY3R9IEFuIG9iamVjdCBjb250YWluaW5nIHByb3RvY29sIHByb3BlcnRpZXMgZm9yIGluaXQsIHN0ZXAsIGFuZFxuICogICAgIHJlc3VsdC4gVGhpcyBvYmplY3QgaXMgc3VpdGFibGUgZm9yIHVzZSBhcyBhIHJlZHVjZXIgb2JqZWN0IChvbmUgcHJvdmlkZWRcbiAqICAgICB0byBge0BsaW5rIHhkdWNlLnJlZHVjZXxyZWR1Y2V9YCBvciBge0BsaW5rIHhkdWNlLnRyYW5zZHVjZXx0cmFuc2R1Y2V9YCkuXG4gKiAgICAgSWYgdGhlIHByb3ZpZGVkIGNvbGxlY3Rpb24gaXMgbm90IGl0ZXJhYmxlLCBhbGwgb2YgdGhlIHByb3BlcnRpZXMgb2YgdGhpc1xuICogICAgIG9iamVjdCB3aWxsIGJlIGBudWxsYC5cbiAqL1xuZnVuY3Rpb24gdG9SZWR1Y2VyKGNvbGxlY3Rpb24pIHtcbiAgcmV0dXJuIE9iamVjdC5mcmVlemUoe1xuICAgIFtwLmluaXRdOiBpbml0KGNvbGxlY3Rpb24pLFxuICAgIFtwLnN0ZXBdOiBzdGVwKGNvbGxlY3Rpb24pLFxuICAgIFtwLnJlc3VsdF06IHJlc3VsdChjb2xsZWN0aW9uKSxcbiAgfSk7XG59XG5cbi8qKlxuICogQSByZWR1Y2VyIG9iamVjdCBmb3IgYXJyYXlzLlxuICpcbiAqIEB0eXBlIHttb2R1bGU6eGR1Y2UuUmVkdWNlcn1cbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IEFSUkFZX1JFRFVDRVIgPSB0b1JlZHVjZXIoW10pO1xuXG4vKipcbiAqIEEgcmVkdWNlciBvYmplY3QgZm9yIG9iamVjdHMuXG4gKlxuICogQHR5cGUge21vZHVsZTp4ZHVjZS5SZWR1Y2VyfVxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgT0JKRUNUX1JFRFVDRVIgPSB0b1JlZHVjZXIoe30pO1xuXG4vKipcbiAqIEEgcmVkdWNlciBvYmplY3QgZm9yIHN0cmluZ3MuXG4gKlxuICogQHR5cGUge21vZHVsZTp4ZHVjZS5SZWR1Y2VyfVxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgU1RSSU5HX1JFRFVDRVIgPSB0b1JlZHVjZXIoXCJcIik7XG5cbi8qKlxuICogQ3JlYXRlcyBhIHJlZHVjdGlvbiBmdW5jdGlvbiBmcm9tIGEgdHJhbnNkdWNlciBhbmQgYSByZWR1Y2VyLlxuICpcbiAqIFRoaXMgcHJvZHVjZXMgYSBmdW5jdGlvbiB0aGF0J3Mgc3VpdGFibGUgZm9yIGJlaW5nIHBhc3NlZCBpbnRvIG90aGVyXG4gKiBsaWJyYXJpZXMnIHJlZHVjZSBmdW5jdGlvbnMsIHN1Y2ggYXMgSmF2YVNjcmlwdCdzIGBBcnJheS5wcm90b3R5cGUucmVkdWNlYCBvclxuICogTG9kYXNoJ3MgYF8ucmVkdWNlYC4gSXQgcmVxdWlyZXMgYm90aCBhIHRyYW5zZm9ybWVyIGFuZCBhIHJlZHVjZXIgYmVjYXVzZVxuICogcmVkdWN0aW9uIGZ1bmN0aW9ucyBmb3IgdGhvc2UgbGlicmFyaWVzIG11c3Qga25vdyBob3cgdG8gZG8gYm90aC4gVGhlIHJlZHVjZXJcbiAqIGNhbiBiZSBhIHN0YW5kYXJkIHJlZHVjZXIgb2JqZWN0IGxpa2UgdGhlIG9uZXMgc2VudFxuICogdG9ge0BsaW5rIG1vZHVsZTp4ZHVjZS50cmFuc2R1Y2V8dHJhbnNkdWNlfWAgb3JcbiAqIGB7QGxpbmsgbW9kdWxlOnhkdWNlLnJlZHVjZXxyZWR1Y2V9YCwgb3IgaXQgY2FuIGJlIGEgcGxhaW4gZnVuY3Rpb24gdGhhdFxuICogdGFrZXMgdHdvIHBhcmFtZXRlcnMgYW5kIHJldHVybnMgdGhlIHJlc3VsdCBvZiByZWR1Y2luZyB0aGUgc2Vjb25kIHBhcmFtZXRlclxuICogaW50byB0aGUgZmlyc3QuXG4gKlxuICogSWYgdGhlcmUgaXMgbm8gbmVlZCBmb3IgYSB0cmFuc2Zvcm1hdGlvbiwgdGhlbiBwYXNzIGluIHRoZVxuICogYHtAbGluayBtb2R1bGU6dHJhbnNkdWNlcnMuaWRlbnRpdHl8aWRlbnRpdHl9YCB0cmFuc2R1Y2VyLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwYXJhbSB7bW9kdWxlOnhkdWNlLlJlZHVjZXJ9IHhmb3JtIEEgdHJhbnNkdWNlciBvYmplY3Qgd2hvc2Ugc3RlcFxuICogICAgIGZ1bmN0aW9uIHdpbGwgYmVjb21lIHRoZSByZXR1cm5lZCByZWR1Y3Rpb24gZnVuY3Rpb24uXG4gKiBAcGFyYW0geyhtb2R1bGU6eGR1Y2UuU3RlcEZ1bmN0aW9ufG1vZHVsZTp4ZHVjZS5SZWR1Y2VyKX0gcmVkdWNlciBBXG4gKiAgICAgcmVkdWNlciB0aGF0IGtub3dzIGhvdyB0byByZWR1Y2UgdmFsdWVzIGludG8gYW4gb3V0cHV0IGNvbGxlY3Rpb24uIFRoaXNcbiAqICAgICBjYW4gZWl0aGVyIGJlIGEgcmVkdWNpbmcgZnVuY3Rpb24gb3IgYSB0cmFuc2R1Y2VyIG9iamVjdCB3aG9zZSBgc3RlcGBcbiAqICAgICBmdW5jdGlvbiBrbm93cyBob3cgdG8gcGVyZm9ybSB0aGlzIHJlZHVjdGlvbi5cbiAqIEByZXR1cm5zIHttb2R1bGU6eGR1Y2UuU3RlcEZ1bmN0aW9ufSBBIGZ1bmN0aW9uIHRoYXQgaGFuZGxlcyBib3RoIHRoZVxuICogICAgIHRyYW5zZm9ybWF0aW9uIGFuZCB0aGUgcmVkdWN0aW9uIG9mIGEgdmFsdWUgb250byBhIHRhcmdldCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gdG9GdW5jdGlvbih4Zm9ybSwgcmVkdWNlcikge1xuICBjb25zdCByID0gdHlwZW9mIHJlZHVjZXIgPT09IFwiZnVuY3Rpb25cIiA/IHRvUmVkdWNlcihyZWR1Y2VyKSA6IHJlZHVjZXI7XG4gIGNvbnN0IHJlc3VsdCA9IHhmb3JtKHIpO1xuICByZXR1cm4gcmVzdWx0W3Auc3RlcF0uYmluZChyZXN1bHQpO1xufVxuXG4vKipcbiAqIE1hcmtzIGEgdmFsdWUgYXMgY29tcGxldGUuXG4gKlxuICogVGhpcyBpcyBkb25lIGJ5IHdyYXBwaW5nIHRoZSB2YWx1ZS4gVGhpcyBtZWFucyB0aHJlZSB0aGluZ3M6IGZpcnN0LCBhXG4gKiBjb21wbGV0ZSBvYmplY3QgbWF5IGJlIG1hcmtlZCBhcyBjb21wbGV0ZSBhZ2Fpbjsgc2Vjb25kLCBhIGNvbXBsZXRlIHZhbHVlXG4gKiBpc24ndCB1c2FibGUgd2l0aG91dCBiZWluZyB1bmNvbXBsZXRlZCBmaXJzdDsgYW5kIHRoaXJkIGFueSB0eXBlIG9mIHZhbHVlXG4gKiAoaW5jbHVkaW5nIGB1bmRlZmluZWRgKSBtYXkgYmUgbWFya2VkIGFzIGNvbXBsZXRlLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGJlIGNvbXBsZXRlZC5cbiAqIEByZXR1cm4geyp9IEEgY29tcGxldGVkIHZlcnNpb24gb2YgdGhlIHByb3ZpZGVkIHZhbHVlLiBUaGlzIHJlZHVjdGlvbiBpc1xuICogICAgIGFjaGlldmVkIGJ5IHdyYXBwaW5nIHRoZSB2YWx1ZSBpbiBhIG1hcmtlciBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIGNvbXBsZXRlKHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgW3AucmVkdWNlZF06IHRydWUsXG4gICAgW3AudmFsdWVdOiB2YWx1ZSxcbiAgfTtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIHRoZSBjb21wbGV0ZSBzdGF0dXMgZnJvbSBhIGNvbXBsZXRlZCB2YWx1ZS5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIGludGVuZGVkIHRvIGJlIHVzZWQgd2hlbiBpdCdzIGNlcnRhaW4gdGhhdCBhIHZhbHVlIGlzXG4gKiBhbHJlYWR5IG1hcmtlZCBhcyBjb21wbGV0ZS4gSWYgaXQgaXMgbm90LCBgdW5kZWZpbmVkYCB3aWxsIGJlIHJldHVybmVkXG4gKiBpbnN0ZWFkIG9mIHRoZSB2YWx1ZS5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBiZSB1bmNvbXBsZXRlZC5cbiAqIEByZXR1cm4geyp9IEFuIHVuY29tcGxldGVkIHZlcnNpb24gb2YgdGhlIHByb3ZpZGVkIHZhbHVlLiBJZiB0aGUgdmFsdWUgd2FzXG4gKiAgICAgbm90IGNvbXBsZXRlIGluIHRoZSBmaXJzdCBwbGFjZSwgYHVuZGVmaW5lZGAgd2lsbCBiZSByZXR1cm5lZCBpbnN0ZWFkLlxuICovXG5mdW5jdGlvbiB1bmNvbXBsZXRlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZT8uW3AudmFsdWVdO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhIHZhbHVlIGlzIG1hcmtlZCBhcyBjb21wbGV0ZS5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0IGZvciBpdHMgY29tcGxldGUgc3RhdHVzLlxuICogQHJldHVybiB7Ym9vbGVhbn0gRWl0aGVyIGB0cnVlYCBpZiB0aGUgdmFsdWUgaXMgY29tcGxldGUsIG9yIGBmYWxzZWAgaWYgaXQgaXNcbiAqICAgICBub3QuXG4gKi9cbmZ1bmN0aW9uIGlzQ29tcGxldGVkKHZhbHVlKSB7XG4gIHJldHVybiAhIXZhbHVlPy5bcC5yZWR1Y2VkXTtcbn1cblxuLyoqXG4gKiBNYWtlcyBzdXJlIHRoYXQgYSB2YWx1ZSBpcyBtYXJrZWQgYXMgY29tcGxldGU7IGlmIGl0IGlzIG5vdCwgaXQgd2lsbCBiZVxuICogbWFya2VkIGFzIGNvbXBsZXRlLlxuICpcbiAqIFRoaXMgZGlmZmVycyBmcm9tIHtAbGluayBtb2R1bGU6eGR1Y2UuY29tcGxldGV8Y29tcGxldGV9IGluIHRoYXRcbiAqIGlmIHRoZSB2YWx1ZSBpcyBhbHJlYWR5IGNvbXBsZXRlLCB0aGlzIGZ1bmN0aW9uIHdvbid0IGNvbXBsZXRlIGl0IGFnYWluLlxuICogVGhlcmVmb3JlIHRodXMgZnVuY3Rpb24gY2FuJ3QgYmUgdXNlZCB0byBtYWtlIGEgdmFsdWUgY29tcGxldGUgbXVsdGlwbGVcbiAqIHRpbWVzLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGJlIGNvbXBsZXRlZC5cbiAqIEByZXR1cm4geyp9IElmIHRoZSB2YWx1ZSBpcyBhbHJlYWR5IGNvbXBsZXRlLCB0aGVuIHRoZSB2YWx1ZSBpcyBzaW1wbHlcbiAqICAgICByZXR1cm5lZC4gT3RoZXJ3aXNlLCBhIGNvbXBsZXRlZCB2ZXJzaW9uIG9mIHRoZSB2YWx1ZSBpcyByZXR1cm5lZC5cbiAqL1xuZnVuY3Rpb24gZW5zdXJlQ29tcGxldGVkKHZhbHVlKSB7XG4gIHJldHVybiBpc0NvbXBsZXRlZCh2YWx1ZSkgPyB2YWx1ZSA6IGNvbXBsZXRlKHZhbHVlKTtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIHRoZSBjb21wbGV0ZSBzdGF0dXMgZnJvbSBhIHZhbHVlLCBhcyBsb25nIGFzIGl0IGFjdHVhbGx5IGlzIGNvbXBsZXRlLlxuICpcbiAqIFRoaXMgZG9lcyBhIGNoZWNrIHRvIG1ha2Ugc3VyZSB0aGUgdmFsdWUgcGFzc2VkIGluIGFjdHVhbGx5IGlzIGNvbXBsZXRlLiBJZlxuICogaXQgaXNuJ3QsIHRoZSB2YWx1ZSBpdHNlbGYgaXMgcmV0dXJuZWQuIEl0J3MgbWVhbnQgdG8gYmUgdXNlZCB3aGVuIHRoZVxuICogY29tcGxldGVkIHN0YXR1cyBpcyB1bmNlcnRhaW4uXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgY29tcGxldGUgdmFsdWUgdG8gYmUgdW5jb21wbGV0ZWQuXG4gKiBAcmV0dXJuIHsqfSBJZiB0aGUgdmFsdWUgaXMgYWxyZWFkeSB1bmNvbXBsZXRlZCwgdGhlIHZhbHVlIGlzIHNpbXBseVxuICogICAgIHJldHVybmVkLiBPdGhlcndpc2UgYW4gdW5jb21wbGV0ZWQgdmVyc2lvbiBvZiB0aGUgdmFsdWUgaXMgcmV0dXJuZWQuXG4gKi9cbmZ1bmN0aW9uIGVuc3VyZVVuY29tcGxldGVkKHZhbHVlKSB7XG4gIHJldHVybiBpc0NvbXBsZXRlZCh2YWx1ZSkgPyB1bmNvbXBsZXRlKHZhbHVlKSA6IHZhbHVlO1xufVxuXG4vKipcbiAqIFJlZHVjZXMgdGhlIGVsZW1lbnRzIG9mIHRoZSBpbnB1dCBjb2xsZWN0aW9uIHRocm91Z2ggYSByZWR1Y2VyIGludG8gYW4gb3V0cHV0XG4gKiBjb2xsZWN0aW9uLlxuICpcbiAqIFRoaXMgaXMgdGhlIGxvd2VzdC1sZXZlbCBvZiB0aGUgdHJhbnNkdWN0aW9uIGZ1bmN0aW9ucy4gSW4gZmFjdCwgdGhpcyBvbmUgaXNcbiAqIHNvIGxvdy1sZXZlbCB0aGF0IGl0IGRvZXNuJ3QgaGF2ZSBhIGxvdCBvZiB1c2UgaW4gbm9ybWFsIG9wZXJhdGlvbi4gSXQncyBtb3JlXG4gKiB1c2VmdWwgZm9yIHdyaXRpbmcgeW91ciBvd24gdHJhbnNmb3JtYXRpb24gZnVuY3Rpb25zLlxuICpcbiAqIGByZWR1Y2VgIGRvZXNuJ3QgYXNzdW1lIHRoYXQgdGhlcmUncyBldmVuIGEgdHJhbnNmb3JtYXRpb24uIEl0IHJlcXVpcmVzIGFuXG4gKiBpbml0aWFsIGNvbGxlY3Rpb24gYW5kIGEgcmVkdWNlciBvYmplY3QgdGhhdCBpcyBtYXRjaGVkIHRvIHRoYXQgaW5pdGlhbFxuICogY29sbGVjdGlvbi4gVGhlIHJlZHVjZXIgb2JqZWN0IG11c3QgaW1wbGVtZW50IHRoZSBgc3RlcGAgYW5kIGByZXN1bHRgXG4gKiBwcm90b2NvbHMsIHdoaWNoIGluc3RydWN0IGByZWR1Y2VgIG9uIGhvdyB0byBidWlsZCB1cCB0aGUgY29sbGVjdGlvbi4gVGhlXG4gKiByZWR1Y2VyIG1heSBpbXBsZW1lbnQgYSB0cmFuc2Zvcm1hdGlvbiBhcyB3ZWxsLCBidXQgYWxsIHRoYXQncyBpbXBvcnRhbnQgaGVyZVxuICogaXMgdGhhdCBpdCBjYW4gZG8gdGhlIHJlZHVjdGlvbi5cbiAqXG4gKiBUaGUgaW5wdXQgY29sbGVjdGlvbiBuZWVkIG9ubHkgaW1wbGVtZW50IGBpdGVyYWJsZWAuIEl0IGlzIG5vdCBuZWNlc3NhcnkgZm9yXG4gKiB0aGUgaW5wdXQgYW5kIG91dHB1dCBjb2xsZWN0aW9ucyB0byBiZSBvZiB0aGUgc2FtZSB0eXBlOyBhcyBsb25nIGFzIHRoZSBpbnB1dFxuICogaW1wbGVtZW50cyBgaXRlcmFibGVgIGFuZCB0aGUgcmVkdWNlciBpbXBsZW1lbnRzIGBzdGVwYCBhbmQgYHJlc3VsdGBcbiAqIGFwcHJvcHJpYXRlIHRvIHRoZSB0eXBlIG9mIHRoZSBgaW5pdGAgY29sbGVjdGlvbiwgdGhlbiBhbnkgdHJhbnNsYXRpb25cbiAqIGJldHdlZW4gY29sbGVjdGlvbiB0eXBlcyBjYW4gb2NjdXIuXG4gKlxuICogVGhlIG5vcm1hbCBjb3Vyc2Ugb2Ygb3BlcmF0aW9uIHdpbGwgYmUgdG8gY2FsbFxuICoge0BsaW5rIG1vZHVsZTp4ZHVjZS50cmFuc2R1Y2V8dHJhbnNkdWNlfSBpbnN0ZWFkLCBhcyB0aGF0IGZ1bmN0aW9uIG1ha2VzIGl0XG4gKiBlYXN5IHRvIGNvbWJpbmUgdHJhbnNmb3JtYXRpb25zIHdpdGggcmVkdWN0aW9ucyBhbmQgY2FuIG9wdGlvbmFsbHkgZmlndXJlIG91dFxuICogdGhlIGluaXRpYWwgY29sbGVjdGlvbiBpdHNlbGYuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHBhcmFtIHsqfSBjb2xsZWN0aW9uIFRoZSBpbnB1dCBjb2xsZWN0aW9uLiBUaGUgb25seSByZXF1aXJlbWVudCBvZiB0aGlzXG4gKiAgICAgY29sbGVjdGlvbiBpcyB0aGF0IGl0IGltcGxlbWVudCB0aGUgYGl0ZXJhYmxlYCBwcm90b2NvbC4gU3BlY2lhbCBzdXBwb3J0XG4gKiAgICAgaXMgcHJvdmlkZWQgYnkgdGhlIGxpYnJhcnkgZm9yIG9iamVjdHMsIHNvIHRoZXkgY2FuIGJlIHVzZWQgYXMgd2VsbC5cbiAqIEBwYXJhbSB7bW9kdWxlOnhkdWNlLlJlZHVjZXJ9IHJlZHVjZXIgQW4gb2JqZWN0IHRoYXQgaW1wbGVtZW50cyB0aGUgYHN0ZXBgXG4gKiAgICAgYW5kIGByZXN1bHRgIHByb3RvY29scy4gVGhpcyBvYmplY3QgbXVzdCBrbm93IGhvdyB0byBwcm9kdWNlIGFuIG91dHB1dFxuICogICAgIGNvbGxlY3Rpb24gdGhyb3VnaCB0aG9zZSBwcm90b2NvbCBmdW5jdGlvbnMuXG4gKiBAcGFyYW0geyp9IGluaXQgYSBjb2xsZWN0aW9uIG9mIHRoZSBzYW1lIHR5cGUgYXMgdGhlIG91dHB1dCBjb2xsZWN0aW9uLiBJdFxuICogICAgIG5lZWQgbm90IGJlIGVtcHR5OyBpZiBpdCBpcyBub3QsIHRoZSBleGlzdGluZyBlbGVtZW50cyBhcmUgcmV0YWluZWQgYXNcbiAqICAgICB0aGUgaW5wdXQgY29sbGVjdGlvbiBpcyByZWR1Y2VkIGludG8gaXQuXG4gKiBAcmV0dXJuIHsqfSBBIG5ldyBjb2xsZWN0aW9uLCBjb25zaXN0aW5nIG9mIHRoZSBgaW5pdGAgY29sbGVjdGlvbiB3aXRoIGFsbCBvZlxuICogICAgIHRoZSBlbGVtZW50cyBvZiB0aGUgYGNvbGxlY3Rpb25gIGNvbGxlY3Rpb24gcmVkdWNlZCBpbnRvIGl0LlxuICovXG5mdW5jdGlvbiByZWR1Y2UoY29sbGVjdGlvbiwgcmVkdWNlciwgaW5pdCkge1xuICBpZiAoY29sbGVjdGlvbiA9PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCBpdGVyID0gaXRlcmF0b3IoY29sbGVjdGlvbik7XG4gIGlmICghaXRlcikge1xuICAgIHRocm93IEVycm9yKGBDYW5ub3QgcmVkdWNlIGFuIGluc3RhbmNlIG9mICR7Y29sbGVjdGlvbi5jb25zdHJ1Y3Rvci5uYW1lfWApO1xuICB9XG5cbiAgbGV0IGFjYyA9IGluaXQ7XG4gIGxldCBzdGVwID0gaXRlci5uZXh0KCk7XG5cbiAgd2hpbGUgKCFzdGVwLmRvbmUpIHtcbiAgICBhY2MgPSByZWR1Y2VyW3Auc3RlcF0oYWNjLCBzdGVwLnZhbHVlKTtcbiAgICBpZiAoaXNDb21wbGV0ZWQoYWNjKSkge1xuICAgICAgYWNjID0gdW5jb21wbGV0ZShhY2MpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHN0ZXAgPSBpdGVyLm5leHQoKTtcbiAgfVxuXG4gIHJldHVybiByZWR1Y2VyW3AucmVzdWx0XShhY2MpO1xufVxuXG5leHBvcnQge1xuICBpbml0LFxuICBzdGVwLFxuICByZXN1bHQsXG4gIHRvUmVkdWNlcixcbiAgQVJSQVlfUkVEVUNFUixcbiAgT0JKRUNUX1JFRFVDRVIsXG4gIFNUUklOR19SRURVQ0VSLFxuICB0b0Z1bmN0aW9uLFxuICBjb21wbGV0ZSxcbiAgdW5jb21wbGV0ZSxcbiAgaXNDb21wbGV0ZWQsXG4gIGVuc3VyZUNvbXBsZXRlZCxcbiAgZW5zdXJlVW5jb21wbGV0ZWQsXG4gIHJlZHVjZSxcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuLyoqXG4gKiBBIGJ1bmNoIG9mIHV0aWxpdHkgZnVuY3Rpb25zLiBUaGVzZSBhcmUgYWxsIHVzZWQgYnkgdGhlIGxpYnJhcnkgaXRzZWxmIGluXG4gKiBwbGFjZXMsIGJ1dCBtYW55IG9mIHRoZW0gYXJlIHN1aXRhYmxlIGZvciBnZW5lcmFsIHVzZSBhcyB3ZWxsLlxuICogXlxuICogQG1vZHVsZSB1dGlsc1xuICogQHByaXZhdGVcbiAqL1xuXG4vKipcbiAqIGBPYmplY3RgJ3MgYHRvU3RyaW5nYCBpcyBleHBsaWNpdGx5IHVzZWQgdGhyb3VnaG91dCBiZWNhdXNlIGl0IGNvdWxkIGJlXG4gKiByZWRlZmluZWQgaW4gYW55IHN1YnR5cGUgb2YgYE9iamVjdGAuXG4gKlxuICogQGZ1bmN0aW9uIHRvU3RyaW5nXG4gKiBAcHJpdmF0ZVxuICovXG5jb25zdCB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGEgdmFsdWUgaXMgYSBmdW5jdGlvbi5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlL2NvbW1vblxuICogQHBhcmFtIHsqfSB4IFRoZSB2YWx1ZSBiZWluZyB0ZXN0ZWQgdG8gc2VlIGlmIGl0IGlzIGEgZnVuY3Rpb24uXG4gKiBAcmV0dXJuIHtib29sZWFufSBFaXRoZXIgYHRydWVgIGlmIHRoZSB0ZXN0IHZhbHVlIGlzIGEgZnVuY3Rpb24gb3IgYGZhbHNlYCBpZlxuICogICAgIGl0IGlzIG5vdC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24oeCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh4KSA9PT0gXCJbb2JqZWN0IEZ1bmN0aW9uXVwiO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhIHZhbHVlIGlzIGEgZ2VuZXJhdG9yIGZ1bmN0aW9uLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2UvdXRpbHNcbiAqIEBwYXJhbSB7Kn0geCBUaGUgdmFsdWUgYmVpbmcgdGVzdGVkIHRvIHNlZSBpZiBpdCBpcyBhIGdlbmVyYXRvciBmdW5jdGlvbi5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IEVpdGhlciBgdHJ1ZWAgaWYgdGhlIHRlc3QgdmFsdWUgaXMgYSBnZW5lcmF0b3IgZnVuY3Rpb24gb3JcbiAqICAgICBgZmFsc2VgIGlmIGl0IGlzIG5vdC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGlzR2VuZXJhdG9yRnVuY3Rpb24oeCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh4KSA9PT0gXCJbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXVwiO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhIHZhbHVlIGlzIGEgcGxhaW4gb2JqZWN0LlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gcmV0dXJucyBgZmFsc2VgIGlmIHRoZSB2YWx1ZSBpcyBhbnkgb3RoZXIgc29ydCBvZiBidWlsdC1pblxuICogb2JqZWN0IChzdWNoIGFzIGFuIGFycmF5IG9yIGEgc3RyaW5nKS4gSXQgYWxzbyByZXR1cm5zIGBmYWxzZWAgZm9yIGFueSBvYmplY3RcbiAqIHRoYXQgaXMgY3JlYXRlZCBieSBhIGNvbnN0cnVjdG9yIHRoYXQgaXMgbm90IGBPYmplY3RgJ3MgY29uc3RydWN0b3IsIG1lYW5pbmdcbiAqIHRoYXQgXCJpbnN0YW5jZXNcIiBvZiBjdXN0b20gXCJjbGFzc2VzXCIgd2lsbCByZXR1cm4gYGZhbHNlYC4gVGhlcmVmb3JlIGl0J3Mgb25seVxuICogZ29pbmcgdG8gcmV0dXJuIGB0cnVlYCBmb3IgbGl0ZXJhbCBvYmplY3RzIG9yIHRob3NlIGNyZWF0ZWQgd2l0aFxuICogYE9iamVjdC5jcmVhdGUoKWAuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZS91dGlsc1xuICogQHBhcmFtIHsqfSB4IFRoZSB2YWx1ZSBiZWluZyB0ZXN0ZWQgdG8gc2VlIGlmIGl0IGlzIGEgcGxhaW4gb2JqZWN0LlxuICogQHJldHVybiB7Ym9vbGVhbn0gRWl0aGVyIGB0cnVlYCBpZiB0aGUgdGVzdCB2YWx1ZSBpcyBhIHBsYWluIG9iamVjdCBvclxuICogICAgIGBmYWxzZWAgaWYgaXQgaXMgbm90LlxuICovXG5mdW5jdGlvbiBpc09iamVjdCh4KSB7XG4gIC8vIFRoaXMgY2hlY2sgZXhjbHVkZXMgYnVpbHQtaW4gbm9uLU9iamVjdCBvYmplY3RzIChzdWNoIGFzIEFycmF5IGFuZCBTdHJpbmcpLlxuICAvLyBJdCBhbHNvIGV4Y2x1ZGVzIG9iamVjdHMgY3JlYXRlZCBmcm9tIEVTMjAxNSBjbGFzc2VzLCBidXQgaXQgZG9lcyBub3RcbiAgLy8gZXhjbHVkZSBvYmplY3RzIGNyZWF0ZWQgd2l0aCBgbmV3YCBvbiBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgKHRoYXQgaGFwcGVuc1xuICAvLyBiZWxvdykuXG4gIGlmICh0b1N0cmluZy5jYWxsKHgpICE9PSBcIltvYmplY3QgT2JqZWN0XVwiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gUHJvdG90eXBlLWxlc3Mgb2JqZWN0cyAoY3JlYXRlZCB3aXRoIGBPYmplY3QuY3JlYXRlKG51bGwpKWAgcGFzc1xuICBjb25zdCBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih4KTtcbiAgaWYgKHByb3RvID09PSBudWxsKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvLyBDaGVjayB0byBzZWUgd2hldGhlciB0aGUgY29uc3RydWN0b3Igb2YgdGhlIHRlc3RlZCBvYmplY3QgaXMgdGhlIE9iamVjdFxuICAvLyBjb25zdHJ1Y3Rvci4gVGhpcyBpcyB0aGUgb25seSBjb25zdHJ1Y3RvciB0aGF0IHByb2R1Y2VzIGEgXCJwbGFpblwiIG9iamVjdC5cbiAgY29uc3QgY3RvciA9XG4gICAgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHByb3RvLCBcImNvbnN0cnVjdG9yXCIpICYmXG4gICAgcHJvdG8uY29uc3RydWN0b3I7XG4gIHJldHVybiB0eXBlb2YgY3RvciA9PT0gXCJmdW5jdGlvblwiICYmIGN0b3IgPT09IE9iamVjdDtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgYSB2YWx1ZSBpcyBhIG51bWJlci5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHdpbGwgcmV0dXJuIGB0cnVlYCBmb3IgYW55IG51bWJlciBsaXRlcmFsIG9yIGluc3RhbmNlIG9mXG4gKiBgTnVtYmVyYCBleGNlcHQgZm9yIGBJbmZpbml0eWAgb3IgYE5hTmAuIEl0IHdpbGwgcmV0dXJuIGBmYWxzZWAgZm9yIHN0cmluZ3NcbiAqIHRoYXQgaGFwcGVuIHRvIGFsc28gYmUgbnVtYmVyczsgdGhlIHZhbHVlIG11c3QgYmUgYW4gYWN0dWFsIGBOdW1iZXJgIGluc3RhbmNlXG4gKiBvciBudW1iZXIgbGl0ZXJhbCB0byByZXR1cm4gYHRydWVgLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2UvdXRpbHNcbiAqIEBwYXJhbSB7Kn0geCBUaGUgdmFsdWUgYmVpbmcgdGVzdGVkIHRvIHNlZSBpZiBpdCBpcyBhIG51bWJlci5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IEVpdGhlciBgdHJ1ZWAgaWYgdGhlIHRlc3QgdmFsdWUgaXMgYSBmaW5pdGUgbnVtYmVyIChub3RcbiAqICAgICBpbmNsdWRpbmcgc3RyaW5nIHJlcHJlc2VudGF0aW9ucyBvZiBudW1iZXJzKSBvciBgZmFsc2VgIGlmIGl0IGlzIG5vdC5cbiAqL1xuZnVuY3Rpb24gaXNOdW1iZXIoeCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh4KSA9PT0gXCJbb2JqZWN0IE51bWJlcl1cIiAmJiBpc0Zpbml0ZSh4KTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgYSB2YWx1ZSBpcyBhIHN0cmluZy5cbiAqXG4gKiBMaXRlcmFsIHN0cmluZ3Mgd2lsbCByZXR1cm4gYHRydWVgLCBhcyB3aWxsIGluc3RhbmNlcyBvZiB0aGUgYFN0cmluZ2Agb2JqZWN0LlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2UvdXRpbHNcbiAqIEBwYXJhbSB7Kn0geCBUaGUgdmFsdWUgYmVpbmcgdGVzdGVkIHRvIHNlZSBpZiBpdCBpcyBhIHN0cmluZy5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IEVpdGhlciBgdHJ1ZWAgaWYgdGhlIHRlc3QgdmFsdWUgaXMgYSBzdHJpbmcgb3IgYGZhbHNlYCBpZlxuICogICAgaXQgaXMgbm90LlxuICovXG5mdW5jdGlvbiBpc1N0cmluZyh4KSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHgpID09PSBcIltvYmplY3QgU3RyaW5nXVwiO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhIHZhbHVlIGlzIGFuIGFycmF5LlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gbWVyZWx5IGRlbGVnYXRlcyB0byBgQXJyYXkuaXNBcnJheWAuIEl0IGlzIHByb3ZpZGVkIGZvclxuICogY29uc2lzdGVuY3kgaW4gY2FsbGluZyBzdHlsZSBvbmx5LlxuICpcbiAqIEBmdW5jdGlvbiBpc0FycmF5XG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlL3V0aWxzXG4gKiBAcGFyYW0geyp9IHggVGhlIHZhbHVlIGJlaW5nIHRlc3RlZCB0byBzZWUgaWYgaXQgaXMgYW4gYXJyYXkuXG4gKiBAcmV0dXJuIHtib29sZWFufSBFaXRoZXIgYHRydWVgIGlmIHRoZSB0ZXN0IHZhbHVlIGlzIGFuIGFycmF5IG9yIGBmYWxzZWAgaWZcbiAqICAgICBpdCBpcyBub3QuXG4gKi9cbmNvbnN0IGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuXG5leHBvcnQge1xuICBpc0Z1bmN0aW9uLFxuICBpc0dlbmVyYXRvckZ1bmN0aW9uLFxuICBpc09iamVjdCxcbiAgaXNOdW1iZXIsXG4gIGlzU3RyaW5nLFxuICBpc0FycmF5XG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG5cbi8qKlxuICogQWxsIG9mIHRoZSBwdWJsaWMtZmFjaW5nIENoYW5rbyBmdW5jdGlvbnMgYXJlIGdhdGhlcmVkIGhlcmUgaW4gb25lIHBsYWNlIHRvXG4gKiBiZSBleHBvcnRlZCBhcyBhIHdob2xlLiBUaGlzIGlzIGEgY29tcGxldGVseSBmbGF0IGxpc3Qgb2YgZXhwb3J0cywgYXNcbiAqIGlubHVkaW5nIGFueSBvYmplY3QgbGl0ZXJhbHMgZm9yIGV4cG9ydCAod2hpY2ggd291bGQgYmUgbmF0dXJhbCBmb3IgYnVmZmVycyxcbiAqIGZvciBleGFtcGxlKSB3b3VsZCBrZWVwIHRyZWUtc2hha2luZyBmcm9tIHdvcmtpbmcgcmlnaHQuXG4gKlxuICogQG1vZHVsZSBjc3BcbiAqL1xuXG5leHBvcnQgeyBmaXhlZCwgZHJvcHBpbmcsIHNsaWRpbmcgfSBmcm9tIFwibW9kdWxlcy9idWZmZXJcIjtcbmV4cG9ydCB7XG4gIENMT1NFRCxcbiAgY2hhbixcbiAgdGltZWRDaGFuLFxuICB0cmFuc0NoYW4sXG4gIHNlbmQsXG4gIHJlY3YsXG4gIHNlbmRBc3luYyxcbiAgcmVjdkFzeW5jLFxuICByZWN2T3JUaHJvdyxcbiAgY2xvc2UsXG4gIGlzQ2xvc2VkLFxuICBpc0J1ZmZlcmVkLFxuICBpc1RpbWVkLFxuICBzZWxlY3QsXG4gIHNlbGVjdEFzeW5jLFxuICB2YWx1ZSxcbiAgY2hhbm5lbFxufSBmcm9tIFwibW9kdWxlcy9jaGFubmVsXCI7XG5leHBvcnQge1xuICBjb25maWcsXG4gIFNFVF9JTU1FRElBVEUsXG4gIE1FU1NBR0VfQ0hBTk5FTCxcbiAgU0VUX1RJTUVPVVRcbn0gZnJvbSBcIm1vZHVsZXMvZGlzcGF0Y2hlclwiO1xuZXhwb3J0IHsgZ28sIHNsZWVwLCBqb2luIH0gZnJvbSBcIm1vZHVsZXMvcHJvY2Vzc1wiO1xuZXhwb3J0IHsgRU1QVFkgfSBmcm9tIFwibW9kdWxlcy9xdWV1ZVwiO1xuXG4vKipcbiAqIEFuIGVycm9yIGhhbmRsaW5nIGZ1bmNpdG9uLiBUaGlzIGlzIHVzZWQgdG8gaGFuZGxlIGV4Y2VwdGlvbnMgdGhyb3duIGluIGFzeW5jXG4gKiBmdW5jdGlvbnMgYW5kIGluIHRyYW5zZHVjZXJzLiBUaGUgcmV0dXJuIHZhbHVlIG9mIGFuIGV4Y2VwdGlvbiBoYW5kbGVyIGlzXG4gKiB0eXBpY2FsbHkgc2VudCB0byBhIGNoYW5uZWw7IGlmIHRoZSBleGNlcHRpb24gaGFwcGVuZWQgd2l0aGluIGFuIGFzeW5jXG4gKiBmdW5jdGlvbiwgaXQgd2lsbCBiZSBzZW50IHRvIHRoYXQgZnVuY3Rpb24ncyBvdXRwdXQgY2hhbm5lbCwgYW5kIGlmIHRoZVxuICogZXhjcGV0aW9uIGhhcHBlbmVkIGluIGEgdHJhbnNkdWNlciwgaXQgd2lsbCBiZSBzZW50IHRvIHRoZSBjaGFubmVsIHRvIHdoaWNoXG4gKiB0aGUgdHJhbnNkdWNlciBpcyBhdHRhY2hlZC5cbiAqXG4gKiBAY2FsbGJhY2sgRXhjZXB0aW9uSGFuZGxlclxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqIEBwYXJhbSB7b2JqZWN0fSBlcnIgVGhlIGVycm9yIG9iamVjdCB0aGF0IHdhcyB0aHJvd24gdG8gY2F1c2UgdGhlIGVycm9yIHRvXG4gKiAgICAgaGF2ZSB0byBiZSBoYW5kbGVkLlxuICogQHJldHVybiB7Kn0gQSB2YWx1ZSBkZWNpZGVkIGJ5IHRoZSBoYW5kbGVyIHRoYXQgd2lsbCBiZSBzZW50IHRvIGEgY2hhbm5lbC5cbiAqL1xuXG4vKipcbiAqIEEgY2FsbGJhY2sgdGhhdCdzIHJ1biB3aGVuIGEgbm9uLWJsb2NraW5nIGNoYW5uZWwgb3BlcmF0aW9uIGNvbXBsZXRlcy4gVGhlXG4gKiB2YWx1ZSB0aGF0IHRoaXMgZnVuY3Rpb24gcmVjZWl2ZXMgaXMgaWRlbnRpY2FsIHRvIHdoYXQgaXMgcmV0dXJuZWQgYnkgYVxuICogYmxvY2tpbmcgY2FsbDogdGhlIHZhbHVlIHJlY2VpdmVkIGZyb20gdGhlIGNoYW5uZWwgZm9yIGEgYHJlY3ZgLCBvciBgdHJ1ZWAgb3JcbiAqIGBmYWxzZWAgZGVwZW5kaW5nIG9uIHRoZSBjaGFubmVsIHN0YXR1cyBmb3IgYSBgc2VuZGAuIEFueSByZXR1cm4gdmFsdWUgZnJvbVxuICogdGhpcyBjYWxsYmFjayBpcyBpZ25vcmVkLlxuICpcbiAqIEBjYWxsYmFjayBPcENhbGxiYWNrXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICogQHBhcmFtIHsqfSB2YWx1ZSBFaXRoZXIgdGhlIHZhbHVlIHJlY2VpdmVkIGZyb20gdGhlIGNoYW5uZWwsIG9yIHdoZXRoZXIgb3JcbiAqIG5vdCBhIHZhbHVlIHdhcyBzdWNjZXNzZnVsbHkgc2VudC5cbiAqL1xuXG4vKipcbiAqIEEgY2FsbGJhY2sgdGhhdCdzIHJ1biB3aGVuIGEgbm9uLWJsb2NraW5nIGBzZWxlY3RgIG9wZXJhdGlvbiBjb21wbGV0ZXMuIFRoZVxuICogdmFsdWUgdGhhdCB0aGlzIGZ1bmN0aW9uIHJlY2VpdmVzIGlzIGFuIG9iamVjdCB3aXRoIHR3byBwcm9wZXJ0aWVzOiB0aGUgdmFsdWVcbiAqIHRoYXQgdGhlIGBzZWxlY3RgIG9wZXJhdGlvbiBjb21wbGV0ZWQgd2l0aCAoZWl0aGVyIHRoZSB2YWx1ZSByZWNlaXZlZCBmcm9tXG4gKiB0aGUgY2hhbm5lbCBpbiBhIHJlY2VpdmUgb3BlcmF0aW9uLCBvciBgdHJ1ZWAgb3IgYGZhbHNlYCBpbiBhIHNlbmRcbiAqIG9wZXJhdGlvbiksIGFsb25nIHdpdGggdGhlIGNoYW5uZWwgd2hlcmUgdGhlIG9wZXJhdGlvbiBhY3R1YWxseSBoYXBwZW5lZC4gQW55XG4gKiByZXR1cm4gdmFsdWUgZnJvbSB0aGlzIGNhbGxiYWNrIGlzIGlnbm9yZWQuXG4gKlxuICogQGNhbGxiYWNrIFNlbGVjdENhbGxiYWNrXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICogQHBhcmFtIHttb2R1bGU6Y3NwLlNlbGVjdFJlc3VsdH0gZGF0YSBUaGUgdmFsdWUgcmV0dXJuZWQgZnJvbSB0aGUgc2VsZWN0XG4gKiAgICAgb3BlcmF0aW9uLlxuICovXG5cbi8qKlxuICogQSBmdW5jdGlvbiB0aGF0IHRyYW5zZm9ybXMgZGF0YSBhbmQgY2FuIGJlIGNvbXBvc2VkIHdpdGggb3RoZXIgdHJhbnNkdWNlcnNcbiAqIGludG8gYSBzaW5nbGUgdHJhbnNkdWNlci4gVGhlIHRyYW5zZHVjZXJzIHRoZW1zZWx2ZXMgYXJlIHByb3ZpZGVkIGJ5IG90aGVyXG4gKiBsaWJyYXJpZXM7IHRoZSBvbmx5IGludm9sdmVtZW50IG9mIHRoaXMgbGlicmFyIGlzIGFzIGEgY29uc3VtZXIgb2ZcbiAqIHRyYW5zZHVjZXJzLlxuICpcbiAqIFRyYW5zZHVjZXJzIHdvcmsgYnkgaGF2aW5nIHN0ZXAgZnVuY3Rpb25zIHRoYXQgYXJlIGtub3duIHZpYSBwcm90b2NvbCwgYW5kIGl0XG4gKiBpcyB0aGVzZSBzdGVwIGZ1bmN0aW9ucyB0aGF0IHRha2UgYSB2YWx1ZSBhdCBhIHRpbWUgdG8gYmUgdHJhbnNmb3JtZWQgYXNcbiAqIHRoZWlyIGFyZ3VtZW50cy4gVGhlIGFyZ3VtZW50cyB0byB0aGUgdHJhbnNkdWNlcnMgdGhlbXNlbHZlcyBhcmUgb3RoZXJcbiAqIHRyYW5zZHVjZXJzIHRoYXQgYXJlIHRoZW4gY29tcG9zZWQgaW50byBhIHNpbmdsZSB0cmFuc2R1Y2VyLCB3aGljaCBpcyB0aGVuXG4gKiByZXR1cm5lZC4gVGhlc2UgdmFsdWVzIG5lZWQgbm90IGNvbmNlcm4gYSB1c2VyIG9mIHRocyBsaWJyYXJ5OyBqdXN0IHBhc3MgYVxuICogdHJhbnNkdWNlciB0byBge0BsaW5rIG1vZHVsZTpjc3AuY2hhbnxjaGFufWAgb3JcbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC50cmFuc0NoYW58dHJhbnNDaGFufWAgYW5kIGV2ZXJ5dGhpbmcgZWxzZSB3aWxsIGJlIGhhbmRsZWQuXG4gKlxuICogQGNhbGxiYWNrIFRyYW5zZHVjZXJcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuVHJhbnNkdWNlcn0geGZvcm0gQSB0cmFuc2R1Y2VyIHRvIGNoYWluIHRoaXMgdHJhbnNkdWNlclxuICogICAgIHRvLlxuICogQHJldHVybiB7bW9kdWxlOmNzcC5UcmFuc2R1Y2VyfSBBIG5ldyB0cmFuc2R1Y2VyIGNvbnNpc3Rpbmcgb2YgdGhlXG4gKiAgICAgY29tcG9zaXRpb24gb2YgdGhpcyBvbmUgYW5kIGB4Zm9ybWAuXG4gKi9cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG4vKipcbiAqIFByb3ZpZGVzIHNldmVyYWwgdHlwZXMgb2YgYnVmZmVycyB1c2FibGUgaW4gYnVmZmVyZWQgY2hhbm5lbHMuIFRoZXNlIGFyZSBhbGxcbiAqIGJ1aWx0IG9uIGEgc21hbGwsIGVmZmljaWVudCBxdWV1ZSB3aGljaCBpcyBpbiB0dXJuIGJhY2tlZCBieSBhIEphdmFTY3JpcHRcbiAqIGFycmF5LlxuICpcbiAqIEBtb2R1bGUgYnVmZmVyXG4gKiBAcHJpdmF0ZVxuICovXG5cbmltcG9ydCB7IHF1ZXVlIGFzIHEsIGNvdW50IGFzIHFDb3VudCwgZW5xdWV1ZSwgZGVxdWV1ZSB9IGZyb20gXCJtb2R1bGVzL3F1ZXVlXCI7XG5cbi8qKlxuICogQSBidWZmZXIgdGhhdCBzdG9yZXMgdmFsdWVzIHNlbnQgdG8gYSBidWZmZXJlZCBjaGFubmVsIHVudGlsIGEgcHJvY2Vzc1xuICogcmVjZWl2ZXMgdGhlbS5cbiAqXG4gKiBEaWZmZXJlbnQgYnVmZmVycyBkaWZmZXIgb25seSBpbiB0aGUgd2F5IHRoYXQgdGhleSBkZXRlcm1pbmUgd2hldGhlciB0aGV5IGFyZVxuICogZnVsbCBhbmQgaW4gd2hhdCBoYXBwZW5zIHdoZW4gYSBuZXcgdmFsdWUgaXMgYWRkZWQgdG8gYSBmdWxsIGJ1ZmZlci5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICogQHR5cGVkZWYgeyhtb2R1bGU6Y3NwLkZpeGVkQnVmZmVyIHwgbW9kdWxlOmNzcC5Ecm9wcGluZ0J1ZmZlciB8XG4gKiAgICAgbW9kdWxlOmNzcC5TbGlkaW5nQnVmZmVyKX0gQnVmZmVyXG4gKi9cblxuLyoqXG4gKiBUaGUgbmFtZSBvZiBhIHByb3BlcnR5IHRoYXQgZXhpc3RzIG9uIGJ1ZmZlciBvYmplY3RzIGZvciB0aGUgcHVycG9zZSBvZlxuICogaXRlbnRpZnlpbmcgdGhlbSBhcyBidWZmZXIgb2JqZWN0cy5cbiAqXG4gKiBAdHlwZSB7U3ltYm9sfVxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgQlVGRkVSID0gU3ltYm9sKFwiQlVGRkVSXCIpO1xuXG4vKipcbiAqIEEgcG9zc2libGUgdmFsdWUgb2YgdGhlIGB7QGxpbmsgbW9kdWxlOmNzcC9idWZmZXIuQlVGRkVSfEJVRkZFUn0gcHJvcGVydHlcbiAqIGluZGljYXRpbmcgdGhhdCB0aGUgYnVmZmVyIGlzIGEgZml4ZWQgYnVmZmVyLlxuICpcbiAqIEB0eXBlIHtTeW1ib2x9XG4gKiBAcHJpdmF0ZVxuICovXG5jb25zdCBGSVhFRCA9IFN5bWJvbChcIkZJWEVEXCIpO1xuXG4vKipcbiAqIEEgcG9zc2libGUgdmFsdWUgb2YgdGhlIGB7QGxpbmsgbW9kdWxlOmNzcC9idWZmZXIuQlVGRkVSfEJVRkZFUn0gcHJvcGVydHlcbiAqIGluZGljYXRpbmcgdGhhdCB0aGUgYnVmZmVyIGlzIGEgZHJvcHBpbmcgYnVmZmVyLlxuICpcbiAqIEB0eXBlIHtTeW1ib2x9XG4gKiBAcHJpdmF0ZVxuICovXG5jb25zdCBEUk9QUElORyA9IFN5bWJvbChcIkRST1BQSU5HXCIpO1xuXG4vKipcbiAqIEEgcG9zc2libGUgdmFsdWUgb2YgdGhlIGB7QGxpbmsgbW9kdWxlOmNzcC9idWZmZXIuQlVGRkVSfEJVRkZFUn0gcHJvcGVydHlcbiAqIGluZGljYXRpbmcgdGhhdCB0aGUgYnVmZmVyIGlzIGEgc2xpZGluZyBidWZmZXIuXG4gKlxuICogQHR5cGUge1N5bWJvbH1cbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IFNMSURJTkcgPSBTeW1ib2woXCJTTElESU5HXCIpO1xuXG4vKipcbiAqIFByZWRpY2F0ZSBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIHN1cHBsaWVkIG9iamVjdCBpcyBhIGJ1ZmZlci5cbiAqXG4gKiBAcGFyYW0geyp9IG9iaiBUaGUgdmFsdWUgdG8gdGVzdCB0byBzZWUgaWYgaXQncyBhIGJ1ZmZlci5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IEVpdGhlciBgdHJ1ZWAgaWYgdGhlIHZhbHVlIGlzIGEgYnVmZmVyLCBvciBgZmFsc2VgIGlmIGl0IGlzXG4gKiAgICAgbm90LlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaXNCdWZmZXIob2JqKSB7XG4gIHJldHVybiAhIW9iaj8uW0JVRkZFUl07XG59XG5cbi8qKlxuICogQSBidWZmZXIgaW1wbGVtZW50YXRpb24gdGhhdCBuZXZlciBkaXNjYXJkcyBidWZmZXJlZCBpdGVtcyB3aGVuIGEgbmV3IGl0ZW0gaXNcbiAqIGFkZGVkLlxuICpcbiAqIFRoaXMgYnVmZmVyIGhhcyBhIGNvbmNlcHQgb2YgKmZ1bGwqLCBidXQgaXQncyBhIHNvZnQgbGltaXQuIElmIHRoZSBzaXplIG9mXG4gKiB0aGUgYnVmZmVyIGlzIGV4Y2VlZGVkLCBhZGRlZCBpdGVtcyBhcmUgc3RpbGwgc3RvcmVkLlxuICpcbiAqIEEgYnVmZmVyIG9mIHRoaXMgdHlwZSBleGlzdHMgb25seSBhcyBhbiBvYmplY3QgdGhhdCBjYW4gYmUgcGFzc2VkIHRvIGFcbiAqIGNoYW5uZWwgY3JlYXRpb24gZnVuY3Rpb24gKHN1Y2ggYXMge0BsaW5rIG1vZHVsZTpjc3AuY2hhbnxjaGFufSkgdG8gbWFrZSB0aGF0XG4gKiBjaGFubmVsIGEgYnVmZmVyZWQgY2hhbm5lbC4gSXQgZG9lc24ndCBoYXZlIGFueSBwcm9wZXJ0aWVzIHRoYXQgYXJlIGludGVuZGVkXG4gKiBmb3IgZXh0ZXJuYWwgdXNlLlxuICpcbiAqIEB0eXBlZGVmIEZpeGVkQnVmZmVyXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICovXG5cbi8qKlxuICogQ3JlYXRlcyBhIGZpeGVkIGJ1ZmZlciBvZiB0aGUgc3BlY2lmaWVkIGNhcGFjaXR5LlxuICpcbiAqIEEgZml4ZWQgYnVmZmVyIGlzIGEgJ25vcm1hbCcgYnVmZmVyLCBvbmUgdGhhdCBzdG9yZXMgYW5kIHJldHVybnMgaXRlbXMgb25cbiAqIGRlbWFuZC4gV2hpbGUgaXQgaXMgY2FwYWJsZSBvZiBiZWluZyBvdmVyLWZpbGxlZCwgdGhhdCBhYmlsaXR5IGlzIG5vdCB1c2VkIGluXG4gKiBDaGFua28uIEEgYnVmZmVyIHRoYXQgaXMgZnVsbCB3aWxsIGNhdXNlIHRoZSBuZXh0IHB1dCB0byBpdHMgY2hhbm5lbCB0byBibG9ja1xuICogdW50aWwgYXQgbGVhc3Qgb25lIGl0ZW0gaXMgcmVtb3ZlZCBmcm9tIHRoZSBidWZmZXIuXG4gKlxuICogVGhpcyBidWZmZXIgaXMgcGFzc2VkIHRvIGB7QGxpbmsgbW9kdWxlOmNzcC5jaGFufGNoYW59YCwgZXRjLiB0byBjcmVhdGUgYVxuICogYnVmZmVyZWQgY2hhbm5lbC4gSXQgaXMgbm90IG1lYW50IHRvIGJlIHVzZWQgZGlyZWN0bHkuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqIEBwYXJhbSB7bnVtYmVyfSBzaXplIFRoZSBudW1iZXIgb2YgaXRlbXMgdGhhdCB0aGUgbmV3IGJ1ZmZlciBjYW4gaG9sZCBiZWZvcmVcbiAqICAgICBpdCdzIGZ1bGwuXG4gKiBAcmV0dXJuIHttb2R1bGU6Y3NwLkZpeGVkQnVmZmVyfSBBIG5ldyBmaXhlZCBidWZmZXIgb2YgdGhlIHNwZWNpZmllZFxuICogICAgIGNhcGFjaXR5LlxuICovXG5mdW5jdGlvbiBmaXhlZChzaXplKSB7XG4gIHJldHVybiBPYmplY3QuY3JlYXRlKG51bGwsIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcXVldWUgYmFja2luZyB0aGlzIGJ1ZmZlci5cbiAgICAgKlxuICAgICAqIEB0eXBlIHttb2R1bGU6Y3NwL3F1ZXVlflF1ZXVlfVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgcXVldWU6IHtcbiAgICAgIHZhbHVlOiBxKClcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIG51bWJlciBvZiBpdGVtcyB0aGF0IHRoaXMgcXVldWUgY2FuIGhvbGQgYmVmb3JlIGl0J3MgY29uc2lkZXJlZCBmdWxsLlxuICAgICAqXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHNpemU6IHtcbiAgICAgIHZhbHVlOiBzaXplXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEEgbWFya2VyIHByb3BlcnR5IHVzZWQgdG8gc2hvdyB0aGF0IHRoaXMgaXMgYSBmaXhlZCBidWZmZXIuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7U3ltYm9sfVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgW0JVRkZFUl06IHtcbiAgICAgIHZhbHVlOiBGSVhFRFxuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxuICogQSBidWZmZXIgaW1wbGVtZW50YXRpb24gdGhhdCBkcm9wcyBuZXdseSBhZGRlZCBpdGVtcyB3aGVuIHRoZSBidWZmZXIgaXMgZnVsbC5cbiAqXG4gKiBUaGlzIGRyb3BwaW5nIGJlaGF2aW9yIGlzIHNpbGVudDogdGhlIG5ldyBpdGVtIGlzIHNpbXBseSBub3QgYWRkZWQgdG8gdGhlXG4gKiBxdWV1ZS4gTm90ZSB0aGF0IHRoaXMgYnVmZmVyIGlzIG5ldmVyIGBmdWxsYCBiZWNhdXNlIGl0IGNhbiBhbHdheXMgYmUgYWRkZWRcbiAqIHRvIHdpdGhvdXQgZXhjZWVkaW5nIHRoZSBzaXplLCBldmVuIGlmIHRoYXQgJ2FkZGluZycgZG9lc24ndCByZXN1bHQgaW4gYSBuZXdcbiAqIGl0ZW0gYWN0dWFsbHkgYXBwZWFyaW5nIGluIHRoZSBidWZmZXIuXG4gKlxuICogQSBidWZmZXIgb2YgdGhpcyB0eXBlIGV4aXN0cyBvbmx5IGFzIGFuIG9iamVjdCB0aGF0IGNhbiBiZSBwYXNzZWQgdG8gYVxuICogY2hhbm5lbCBjcmVhdGlvbiBmdW5jdGlvbiAoc3VjaCBhcyB7QGxpbmsgbW9kdWxlOmNzcC5jaGFufGNoYW59KSB0byBtYWtlIHRoYXRcbiAqIGNoYW5uZWwgYSBidWZmZXJlZCBjaGFubmVsLiBJdCBkb2Vzbid0IGhhdmUgYW55IHByb3BlcnRpZXMgdGhhdCBhcmUgaW50ZW5kZWRcbiAqIGZvciBleHRlcm5hbCB1c2UuXG4gKlxuICogQHR5cGVkZWYgRHJvcHBpbmdCdWZmZXJcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIGEgZHJvcHBpbmcgYnVmZmVyIG9mIHRoZSBzcGVjaWZpZWQgY2FwYWNpdHkuXG4gKlxuICogQSBkcm9wcGluZyBidWZmZXIgc2lsZW50bHkgZHJvcHMgdGhlIGl0ZW0gYmVpbmcgYWRkZWQgaWYgdGhlIGJ1ZmZlciBpc1xuICogYWxyZWFkeSBhdCBjYXBhY2l0eS4gU2luY2UgYWRkaW5nIGEgbmV3IGl0ZW0gd2lsbCBhbHdheXMgJ3N1Y2NlZWQnIChldmVuIGlmXG4gKiBpdCBzdWNjZWVkcyBieSBqdXN0IGlnbm9yaW5nIHRoZSBhZGQpLCBpdCBpcyBuZXZlciBjb25zaWRlcmVkIGZ1bGwgYW5kXG4gKiB0aGVyZWZvcmUgYSBwdXQgdG8gYSBjaGFubmVsIGJ1ZmZlcmVkIGJ5IGEgZHJvcHBpbmcgYnVmZmVyIG5ldmVyIGJsb2Nrcy5cbiAqXG4gKiBUaGlzIGJ1ZmZlciBpcyBwYXNzZWQgdG8gYHtAbGluayBtb2R1bGU6Y3NwLmNoYW58Y2hhbn1gLCBldGMuIHRvIGNyZWF0ZSBhXG4gKiBidWZmZXJlZCBjaGFubmVsLiBJdCBpcyBub3QgbWVhbnQgdG8gYmUgdXNlZCBkaXJlY3RseS5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICogQHBhcmFtIHtudW1iZXJ9IHNpemUgVGhlIG51bWJlciBvZiBpdGVtcyB0aGF0IHRoZSBuZXcgYnVmZmVyIGNhbiBob2xkIGJlZm9yZVxuICogICAgIG5ld2VzdCBpdGVtcyBhcmUgZHJvcHBlZCBvbiBhZGQuXG4gKiBAcmV0dXJuIHttb2R1bGU6Y3NwLkRyb3BwaW5nQnVmZmVyfSBBIG5ldyBkcm9wcGluZyBidWZmZXIgb2YgdGhlIHNwZWNpZmllZFxuICogICAgIGNhcGFjaXR5LlxuICovXG5mdW5jdGlvbiBkcm9wcGluZyhzaXplKSB7XG4gIHJldHVybiBPYmplY3QuY3JlYXRlKG51bGwsIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcXVldWUgYmFja2luZyB0aGlzIGJ1ZmZlci5cbiAgICAgKlxuICAgICAqIEB0eXBlIHttb2R1bGU6Y3NwL3F1ZXVlflF1ZXVlfVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgcXVldWU6IHtcbiAgICAgIHZhbHVlOiBxKClcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIG51bWJlciBvZiBpdGVtcyB0aGF0IHRoaXMgcXVldWUgY2FuIGhvbGQgYmVmb3JlIGl0J3MgY29uc2lkZXJlZCBmdWxsLlxuICAgICAqXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHNpemU6IHtcbiAgICAgIHZhbHVlOiBzaXplXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEEgbWFya2VyIHByb3BlcnR5IHVzZWQgdG8gc2hvdyB0aGF0IHRoaXMgaXMgYSBkcm9wcGluZyBidWZmZXIuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7U3ltYm9sfVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgW0JVRkZFUl06IHtcbiAgICAgIHZhbHVlOiBEUk9QUElOR1xuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxuICogQSBidWZmZXIgaW1wbGVtZW50YXRpb24gdGhhdCBkcm9wcyB0aGUgb2xkZXN0IGl0ZW0gd2hlbiBhbiBpdGVtIGlzIGFkZGVkIHRvIGFcbiAqIGZ1bGwgYnVmZmVyLlxuICpcbiAqIFRoaXMgaXMgdmVyeSBzaW1pbGFyIHRvIHtAbGluayBtb2R1bGU6Y3NwLkRyb3BwaW5nQnVmZmVyfERyb3BwaW5nQnVmZmVyfTsgdGhlXG4gKiBvbmx5IGRpZmZlcmVuY2UgaXMgaW4gd2hhdCBoYXBwZW5zIHdoZW4gYW4gaXRlbSBpcyBhZGRlZC4gSW4gdGhpcyBidWZmZXIsIHRoZVxuICogbmV3IGl0ZW0gaXMgaW5kZWVkIGFkZGVkIHRvIHRoZSBidWZmZXIsIGJ1dCBpbiBvcmRlciB0byBrZWVwIHRoZSBjb3VudCBvZiB0aGVcbiAqIGJ1ZmZlciBhdCBvciBiZWxvdyBpdHMgc2l6ZSwgdGhlIG9sZGVzdCBpdGVtIGluIHRoZSBidWZmZXIgaXMgc2lsZW50bHlcbiAqIGRyb3BwZWQuXG4gKlxuICogQSBidWZmZXIgb2YgdGhpcyB0eXBlIGV4aXN0cyBvbmx5IGFzIGFuIG9iamVjdCB0aGF0IGNhbiBiZSBwYXNzZWQgdG8gYVxuICogY2hhbm5lbCBjcmVhdGlvbiBmdW5jdGlvbiAoc3VjaCBhcyB7QGxpbmsgbW9kdWxlOmNzcC5jaGFufGNoYW59KSB0byBtYWtlIHRoYXRcbiAqIGNoYW5uZWwgYSBidWZmZXJlZCBjaGFubmVsLiBJdCBkb2Vzbid0IGhhdmUgYW55IHByb3BlcnRpZXMgdGhhdCBhcmUgaW50ZW5kZWRcbiAqIGZvciBleHRlcm5hbCB1c2UuXG4gKlxuICogQHR5cGVkZWYgU2xpZGluZ0J1ZmZlclxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgYSBzbGlkaW5nIGJ1ZmZlciBvZiB0aGUgc3BlY2lmaWVkIGNhcGFjaXR5LlxuICpcbiAqIEEgc2xpZGluZyBidWZmZXIgZHJvcHMgdGhlIGZpcnN0LWFkZGVkIChvbGRlc3QpIGl0ZW0gYWxyZWFkeSBpbiB0aGUgYnVmZmVyIGlmXG4gKiBhIG5ldyBpdGVtIGlzIGFkZGVkIHdoZW4gdGhlIGJ1ZmZlciBpcyBhbHJlYWR5IGF0IGNhcGFjaXR5LiBTaW5jZSBpdCdzIGFsd2F5c1xuICogY2FwYWJsZSBvZiBoYXZpbmcgaXRlbXMgYWRkZWQgdG8gaXQsIGl0J3MgbmV2ZXIgY29uc2lkZXJlZCBmdWxsLCBhbmRcbiAqIHRoZXJlZm9yZSBhIHB1dCB0byBhIGNoYW5uZWwgYnVmZmVyZWQgYnkgYSBzbGlkaW5nIGJ1ZmZlciBuZXZlciBibG9ja3MuXG4gKlxuICogVGhpcyBidWZmZXIgaXMgcGFzc2VkIHRvIGB7QGxpbmsgbW9kdWxlOmNzcC5jaGFufGNoYW59YCwgZXRjLiB0byBjcmVhdGUgYVxuICogYnVmZmVyZWQgY2hhbm5lbC4gSXQgaXMgbm90IG1lYW50IHRvIGJlIHVzZWQgZGlyZWN0bHkuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqIEBwYXJhbSB7bnVtYmVyfSBzaXplIFRoZSBudW1iZXIgb2YgaXRlbXMgdGhhdCB0aGUgbmV3IGJ1ZmZlciBjYW4gaG9sZCBiZWZvcmVcbiAqICAgICBvbGRlc3QgaXRlbXMgYXJlIGRyb3BwZWQgb24gYWRkLlxuICogQHJldHVybiB7bW9kdWxlOmNzcC5TbGlkaW5nQnVmZmVyfSBBIG5ldyBzbGlkaW5nIGJ1ZmZlciBvZiB0aGUgc3BlY2lmaWVkXG4gKiAgICAgY2FwYWNpdHkuXG4gKi9cbmZ1bmN0aW9uIHNsaWRpbmcoc2l6ZSkge1xuICByZXR1cm4gT2JqZWN0LmNyZWF0ZShudWxsLCB7XG4gICAgLyoqXG4gICAgICogVGhlIHF1ZXVlIGJhY2tpbmcgdGhpcyBidWZmZXIuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7bW9kdWxlOmNzcC9xdWV1ZX5RdWV1ZX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHF1ZXVlOiB7XG4gICAgICB2YWx1ZTogcSgpXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBudW1iZXIgb2YgaXRlbXMgdGhhdCB0aGlzIHF1ZXVlIGNhbiBob2xkIGJlZm9yZSBpdCdzIGNvbnNpZGVyZWQgZnVsbC5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBzaXplOiB7XG4gICAgICB2YWx1ZTogc2l6ZVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBIG1hcmtlciBwcm9wZXJ0eSB1c2VkIHRvIHNob3cgdGhhdCB0aGlzIGlzIGEgc2xpZGluZyBidWZmZXIuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7U3ltYm9sfVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgW0JVRkZFUl06IHtcbiAgICAgIHZhbHVlOiBTTElESU5HXG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBxdWV1ZSB0aGF0IGJhY2tzIGEgYnVmZmVyLlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5CdWZmZXJ9IGJ1ZmZlciBUaGUgYnVmZmVyIHdob3NlIHF1ZXVlIGlzIHJldHVybmVkIGJ5IHRoaXNcbiAqICAgICBmdW5jdGlvbi5cbiAqIEByZXR1cm4ge21vZHVsZTpjc3AvcXVldWV+UXVldWV9IFRoZSBxdWV1ZSB0aGF0IGJhY2tzIHRoZSBzdXBwbGllZCBidWZmZXIuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBxdWV1ZShidWZmZXIpIHtcbiAgcmV0dXJuIGJ1ZmZlci5xdWV1ZTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBudW1iZXIgb2YgaXRlbXMgYSBidWZmZXIgY2FuIGhvbGQgYmVmb3JlIGl0J3MgZnVsbC5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuQnVmZmVyfSBidWZmZXIgVGhlIGJ1ZmZlciB3aG9zZSBzaXplIGlzIHJldHVybmVkIGJ5IHRoaXNcbiAqICAgICBmdW5jdGlvbi5cbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIHNpemUgb2YgdGhlIHN1cHBsaWVkIGJ1ZmZlci5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHNpemUoYnVmZmVyKSB7XG4gIHJldHVybiBidWZmZXIuc2l6ZTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBudW1iZXIgb2YgaXRlbXMgYSBidWZmZXIgaXMgY3VycmVudGx5IGhvbGRpbmcuXG4gKlxuICogQHBhcmFtIHttb2R1bGU6Y3NwLkJ1ZmZlcn0gYnVmZmVyIFRoZSBidWZmZXIgd2hvc2UgY3VycmVudCBjb3VudCBpcyByZXR1cm5lZFxuICogICAgIGJ5IHRoaXMgZnVuY3Rpb24uXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBudW1iZXIgb2YgaXRlbXMgdGhhdCB0aGUgc3VwcGxpZWQgYnVmZmVyIGlzIGhvbGRpbmcuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjb3VudChidWZmZXIpIHtcbiAgcmV0dXJuIHFDb3VudChidWZmZXIucXVldWUpO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhIGJ1ZmZlciBpcyBhdCBjYXBhY2l0eS5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuQnVmZmVyfSBidWZmZXIgVGhlIGJ1ZmZlciB3aG8ncyBiZWluZyBjaGVja2VkIHRvIHNlZSBpZlxuICogICAgIGl0J3MgYXQgY2FwYWNpdHkuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IEVpdGhlciBgdHJ1ZWAgaWYgdGhlIHN1cHBsaWVkIGJ1ZmZlciBpcyBmdWxsIG9yIGBmYWxzZWAgaWZcbiAqICAgICBpdCBpc24ndC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGlzRnVsbChidWZmZXIpIHtcbiAgcmV0dXJuIGJ1ZmZlcltCVUZGRVJdID09PSBGSVhFRCA/IHFDb3VudChidWZmZXIucXVldWUpID49IGJ1ZmZlci5zaXplIDogZmFsc2U7XG59XG5cbi8qKlxuICogQWRkcyBvbmUgb3IgbW9yZSBpdGVtcyB0byBhIGJ1ZmZlci5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuQnVmZmVyfSBidWZmZXIgVGhlIGJ1ZmZlciB3aGVyZSB0aGUgc3VwcGxpZWQgaXRlbXMgd2lsbCBiZVxuICogICAgIGFkZGVkLlxuICogQHBhcmFtIHsuLi4qfSBpdGVtcyBUaGUgdmFsdWVzIGJlaW5nIGFkZGVkIHRvIHRoZSBzdXBwbGllZCBidWZmZXIuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBhZGQoYnVmZmVyLCAuLi5pdGVtcykge1xuICBzd2l0Y2ggKGJ1ZmZlcltCVUZGRVJdKSB7XG4gICAgY2FzZSBGSVhFRDpcbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBpdGVtcykge1xuICAgICAgICBlbnF1ZXVlKGJ1ZmZlci5xdWV1ZSwgaXRlbSk7XG4gICAgICB9XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgRFJPUFBJTkc6XG4gICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgaXRlbXMpIHtcbiAgICAgICAgaWYgKGNvdW50KGJ1ZmZlcikgPCBzaXplKGJ1ZmZlcikpIHtcbiAgICAgICAgICBlbnF1ZXVlKGJ1ZmZlci5xdWV1ZSwgaXRlbSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBTTElESU5HOlxuICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGl0ZW1zKSB7XG4gICAgICAgIGlmIChjb3VudChidWZmZXIpID49IHNpemUoYnVmZmVyKSkge1xuICAgICAgICAgIGRlcXVldWUoYnVmZmVyLnF1ZXVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbnF1ZXVlKGJ1ZmZlci5xdWV1ZSwgaXRlbSk7XG4gICAgICB9XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm47XG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmVzIHRoZSBuZXh0IGl0ZW0gZnJvbSBhIHF1ZXVlIGFuZCByZXR1cm5zIGl0LlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5CdWZmZXJ9IGJ1ZmZlciBUaGUgYnVmZmVyIGZyb20gd2hpY2ggYW4gaXRlbSBpcyBiZWluZ1xuICogICAgIHJlbW92ZWQuXG4gKiBAcmV0dXJuIHsqfSBUaGUgaXRlbSB0aGF0IHdhcyByZW1vdmVkIGZyb20gdGhlIHN1cHBsaWVkIGJ1ZmZlci5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHJlbW92ZShidWZmZXIpIHtcbiAgcmV0dXJuIGRlcXVldWUoYnVmZmVyLnF1ZXVlKTtcbn1cblxuZXhwb3J0IHtcbiAgaXNCdWZmZXIsXG4gIGZpeGVkLFxuICBkcm9wcGluZyxcbiAgc2xpZGluZyxcbiAgcXVldWUsXG4gIHNpemUsXG4gIGNvdW50LFxuICBpc0Z1bGwsXG4gIGFkZCxcbiAgcmVtb3ZlXG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG5cbmltcG9ydCB7IHByb3RvY29scyBhcyBwIH0gZnJvbSBcIkBjaGFua28veGR1Y2VcIjtcbmltcG9ydCB7XG4gIHF1ZXVlLFxuICBkZXF1ZXVlLFxuICBFTVBUWSxcbiAgZmlsdGVyLFxuICBjb3VudCBhcyBxQ291bnQsXG4gIGVucXVldWVcbn0gZnJvbSBcIm1vZHVsZXMvcXVldWVcIjtcbmltcG9ydCB7IGlzRnVsbCwgY291bnQsIHJlbW92ZSB9IGZyb20gXCJtb2R1bGVzL2J1ZmZlclwiO1xuaW1wb3J0IHsgZGlzcGF0Y2ggfSBmcm9tIFwibW9kdWxlcy9kaXNwYXRjaGVyXCI7XG5cbi8qKlxuICogVGhlIG1heGltdW0gbnVtYmVyIG9mIGRpcnR5IG9wZXJhdGlvbnMgdGhhdCBjYW4gYmUgcXVldWVkIG9uIGEgY2hhbm5lbCBiZWZvcmVcbiAqIGEgY2xlYW51cCBpcyB0cmlnZ2VyZWQuXG4gKlxuICogQHR5cGUge251bWJlcn1cbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IE1BWF9ESVJUWSA9IDY0O1xuXG4vKipcbiAqIFRoZSBtYXhpbXVtIG51bWJlciBvZiBvcGVydGlvbnMgdGhhdCBjYW4gYmUgcXVldWVkIG9uIGEgY2hhbm5lbCBiZWZvcmUgbmV3XG4gKiBvcGVyYXRpb25zIGFyZSByZWplY3RlZC5cbiAqXG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgTUFYX1FVRVVFRCA9IDEwMjQ7XG5cbi8qKlxuICogKmhlIHZhbHVlIHJldHVybmVkIGZyb20gYSByZWNlaXZlIG9uIGEgY2hhbm5lbCB3aGVuIHRoYXQgY2hhbm5lbCBpcyBjbG9zZWRcbiAqIGFuZCBoYXMgbm8gbW9yZSB2YWx1ZXMgYXZhaWxhYmxlLlxuICpcbiAqIFRoaXMgaXMgYSBzcGVjaWFsIHZhbHVlIHRoYXQgaXMgcmV0dXJuZWQgdW5kZXIgYSBjZXJ0YWluIGNpcmN1bXN0YW5jZSwgbmFtZWx5XG4gKiB3aGVuIGEgcmVjZWl2ZSBpcyBwZXJmb3JtZWQgb24gYSBjbG9zZWQgY2hhbm5lbC4gQmVjYXVzZSBvZiB0aGF0LCBpdCBjYW5ub3RcbiAqIGJlIHJldHVybmVkIGZyb20gYSByZWNlaXZlIG9uIGFuIG9wZW4gY2hhbm5lbC4gRm9yIHRoYXQgcmVhc29uLCBgQ0xPU0VEYCBpc1xuICogdGhlIG9ubHkgdmFsdWUgdGhhdCBjYW5ub3QgYmUgc2VudCBvbnRvIGEgY2hhbm5lbCAmbWRhc2g7IGl0IHdvdWxkIGJlXG4gKiBpbXBvc3NpYmxlIHRvIGRpc3Rpbmd1aXNoIGJldHdlZW4gYSBsZWdpdGltYXRlIHZhbHVlIG9mIGBDTE9TRURgIGFuZCBhblxuICogYWN0dWFsIGNsb3NlZCBjaGFubmVsLlxuICpcbiAqIEB0eXBlIHtTeW1ib2x9XG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICovXG5jb25zdCBDTE9TRUQgPSBTeW1ib2woXCJDTE9TRURcIik7XG5cbi8qKlxuICogQSB1bmlxdWUgdmFsdWUgdXNlZCB0byBpbmRpY2F0ZSB0aGF0IGFuIG9iamVjdCBpcyBhIGJveC5cbiAqXG4gKiBAdHlwZSB7U3ltYm9sfVxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgQk9YID0gU3ltYm9sKFwiQk9YXCIpO1xuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhbiBvYmplY3QgaXMgYSBib3guXG4gKlxuICogQHBhcmFtIHsqfSBvYmogQSB2YWx1ZSB0byBjaGVjayBmb3IgYm94aW5lc3MuXG4gKiBAcmV0dXJuIEVpdGhlciBgdHJ1ZWAgaWYgdGhlIHZhbHVlIGlzIGEgYm94IG9yIGBmYWxzZWAgaWYgaXQgaXNuJ3QuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBpc0JveChvYmopIHtcbiAgcmV0dXJuICEhb2JqPy5bQk9YXTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgYW4gb2JqZWN0IGlzIHJlZHVjZWQuIFRoaXMgaXMgZG9uZSB1c2luZyB0aGUgdHJhbnNkdWNlclxuICogcHJvdG9jb2w7IGFuIG9iamVjdCB3aXRoIHRoZSBwcm90b2NvbC1zcGVjaWZpZWQgYHJlZHVjZWRgIHByb3BlcnR5IGlzIGFzc3VtZWRcbiAqIHRvIGJlIHJlZHVjZWQuIElmIGEgcmVzdWx0IG9mIGEgdHJhbnNmb3JtYXRpb24gaXMgcmVkdWNlZCwgaXQgbWVhbnMgdGhhdCB0aGVcbiAqIHRyYW5zZm9ybWF0aW9uIGlzIGNvbXBsZXRlIGFuZCB0aGUgY2hhbm5lbCBzaG91bGQgYmUgY2xvc2VkLlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIGJlaW5nIGNoZWNrZWQgZm9yIHJlZHVjdGlvbi5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IEVpdGhlciBgdHJ1ZWAgaWYgdGhlIHZhbHVlIGhhcyBiZWVuIHJlZHVjZWQsIG9yIGBmYWxzZWAgaWZcbiAqICAgICBpdCBoYXMgbm90IGJlZW4uXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBpc1JlZHVjZWQodmFsdWUpIHtcbiAgcmV0dXJuICEhdmFsdWU/LltwLnJlZHVjZWRdO1xufVxuXG4vKipcbiAqIEEgd3JhcHBlciBhcm91bmQgYSB2YWx1ZS4gVGhpcyBpcyBwcmltYXJpbHkgdXNlZCBhcyBhIG1hcmtlcjsgYSBwdXQgb3IgdGFrZVxuICogcmV0dXJuaW5nIGEgQm94IGluZGljYXRlcyB0aGF0IHRoZSBwdXQgb3IgdGFrZSBoYXMgcmV0dXJuZWQgYW4gaW1tZWRpYXRlXG4gKiB2YWx1ZSwgd2hpbGUgcmV0dXJuaW5nIGBudWxsYCBpbmRpY2F0ZXMgdGhhdCB0aGUgb3BlcmF0aW9uIGhhcyBiZWVuIHF1ZXVlZC5cbiAqXG4gKiBAdHlwZWRlZiBCb3hcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwL2NoYW5uZWxcbiAqIEBwcm9wZXJ0eSB7Kn0gdmFsdWUgVGhlIHZhbHVlIGJlaW5nIHdyYXBwZWQgYnkgdGhlIGJveC5cbiAqIEBwcml2YXRlXG4gKi9cblxuLyoqXG4gKiBBIHdyYXBwZXIgb2JqZWN0IGZvciBhIHZhbHVlLiBUaGlzIGlzIHVzZWQgYWxtb3N0IGVudGlyZWx5IGFzIGEgbWFya2VyXG4gKiBpbnRlcmZhY2UsIHRob3VnaCB0aGUgZmFjdCB0aGF0IGl0IGJlY29tZXMgYSBwYXJhbWV0ZXIgdGhhdCdzIHBhc3NlZCBieVxuICogcmVmZXJlbmNlIHJhdGhlciB0aGFuIHZhbHVlIGlzIGFsc28gaW1wb3J0YW50IGluIGEgY291cGxlIHBsYWNlcy4gSWYgYVxuICogY2hhbm5lbCBvcGVyYXRpb24gKHB1dCBvciB0YWtlKSByZXR1cm5zIGEgQm94LCBpdCBtZWFucyB0aGF0IGFuIGFjdHVhbCB2YWx1ZVxuICogd2FzIHJldHVybmVkLiBBIG5vbi1Cb3ggKHdoaWNoIGFsd2F5cyBoYXBwZW5zIHRvIGJlIGBudWxsYCkgbWVhbnMgdGhhdCB0aGVcbiAqIG9wZXJhdGlvbiBtdXN0IGJsb2NrLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwL2NoYW5uZWxcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGJveC5cbiAqIEByZXR1cm4ge21vZHVsZTpjc3AvY2hhbm5lbC5Cb3h9IFRoZSBib3hlZCB2YWx1ZS5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGJveCh2YWx1ZSkge1xuICByZXR1cm4gT2JqZWN0LmNyZWF0ZShudWxsLCB7XG4gICAgdmFsdWU6IHtcbiAgICAgIHZhbHVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9LFxuICAgIFtCT1hdOiB7XG4gICAgICB2YWx1ZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxuICogQSB3cmFwcGVyIGFyb3VuZCBhIHZhbHVlLiBUaGlzIGlzIG11Y2ggbGlrZVxuICoge0BsaW5rIG1vZHVsZTpjc3AvY2hhbm5lbC5Cb3h8Qm94fSBleGNlcHQgdGhhdCBpdCBhbHNvIGNhcnJpZXMgYSBoYW5kbGVyIHRvXG4gKiBiZSB1c2VkIHdoZW4gYSBzZW50IHZhbHVlIGlzIHJlY2VpdmVkLiBJdCBpcyBzcGVjaWZpY2FsbHkgZm9yIHF1ZXVlaW5nIHNlbmRzLlxuICpcbiAqIEB0eXBlZGVmIFNlbmRCb3hcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwL2NoYW5uZWxcbiAqIEBwcm9wZXJ0eSB7Kn0gdmFsdWUgVGhlIHZhbHVlIGJlaW5nIHdyYXBwZWQgYnkgdGhpcyBib3guXG4gKiBAcHJvcGVydHkge21vZHVsZTpjc3AvY2hhbm5lbC5IYW5kbGVyfSBoYW5kbGVyIFRoZSBoYW5kbGVyIHVzZWQgdG8gcHJvY2VzcyBhXG4gKiAgICAgc2VuZCByZXF1ZXN0IGZvciB0aGUgdmFsdWUuXG4gKiBAcHJpdmF0ZVxuICovXG5cbi8qKlxuICogQSBib3ggdXNlZCB0byB3cmFwIGEgdmFsdWUgYmVpbmcgc2VudCBvbnRvIGEgY2hhbm5lbC4gVGhpcyBpcyBkaWZmZXJlbnQgZnJvbVxuICogYSByZWd1bGFyIGJveCBpbiB0aGF0IHRoZSBzZW5kIGhhbmRsZXIgaXMgYWxzbyBpbmNsdWRlZC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcC9jaGFubmVsXG4gKiBAcGFyYW0gIHtPYmplY3R9IGhhbmRsZXIgVGhlIGhhbmRsZXIgdXNlZCB0byBwcm9jZXNzIGEgc2VuZCByZXF1ZXN0IGZvciB0aGVcbiAqICAgICB2YWx1ZS5cbiAqIEBwYXJhbSAgeyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBib3guXG4gKiBAcmV0dXJuIHttb2R1bGU6Y3NwL2NoYW5uZWwuU2VuZEJveH0gVGhlIGJveGVkIHZhbHVlLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gc2VuZEJveCh2YWx1ZSwgaGFuZGxlcikge1xuICByZXR1cm4gT2JqZWN0LmNyZWF0ZShudWxsLCB7XG4gICAgdmFsdWU6IHtcbiAgICAgIHZhbHVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9LFxuICAgIGhhbmRsZXI6IHtcbiAgICAgIHZhbHVlOiBoYW5kbGVyXG4gICAgfSxcbiAgICBbQk9YXToge1xuICAgICAgdmFsdWU6IHRydWVcbiAgICB9XG4gIH0pO1xufVxuXG4vKipcbiAqIEEgY2hhbm5lbCwgdXNlZCBieSBwcm9jZXNzZXMgdG8gY29tbXVuaWNhdGUgd2l0aCBvbmUgYW5vdGhlci5cbiAqXG4gKiBGb3IgZWFjaCBvcGVyYXRpb24sIHRoZSBjaGFubmVsIGZpcnN0IHRlc3RzIHRvIHNlZSBpZiB0aGVyZSdzIGEgY29ycmVzcG9uZGluZ1xuICogb3BlcmF0aW9uIGFscmVhZHkgcXVldWVkIChpLmUuLCBpZiB3ZSdyZSBkb2luZyBhIGBzZW5kYCB0aGF0IHRoZXJlJ3MgYSBxdWV1ZWRcbiAqIGByZWN2YCBhbmQgdmljZSB2ZXJzYSkuIElmIHRoZXJlIGlzLCB0aGF0IGNvcnJlc3BvbmRpbmcgb3BlcmF0aW9uIGlzXG4gKiB1bmJsb2NrZWQgYW5kIGJvdGggb3BlcmF0aW9ucyBjb21wbGV0ZS4gSWYgbm90LCB0aGUgb3BlcmF0aW9uIGlzIHF1ZXVlZCB0b1xuICogd2FpdCBmb3IgYSBjb3JyZXNwb25kaW5nIG9wZXJhdGlvbi4gVGhlIHByb2Nlc3Mgb3IgdGhhdCBjcmVhdGVkIHRoZSBvcGVyYXRpb25cbiAqIHRoZW4gYmxvY2tzLlxuICpcbiAqIFRoZSBjaGFubmVsIGNhbiBiZSBiYWNrZWQgYnkgYSBidWZmZXIsIHRob3VnaCBpdCBpcyBub3QgYnkgZGVmYXVsdC4gSWYgYVxuICogYnVmZmVyIGlzIGluIHBsYWNlLCBhbmQgdGhhdCBidWZmZXIgaXMgbm90IGZ1bGwsIHRoZW4gdGhlIHByb2Nlc3MgdGhhdFxuICogY3JlYXRlZCBhbiBvcGVyYXRpb24gdGhhdCBoYXMgdG8gYmUgcXVldWVkIGlzICpub3QqIGJsb2NrZWQuXG4gKlxuICogVGhpcyBjaGFubmVsIG9iamVjdCBzdXBwb3J0cyB0cmFuc2Zvcm1hdGlvbnMsIGFzc3VtaW5nIHRoYXQgdGhleSBmb2xsb3cgdGhlXG4gKiBwcm90b2NvbCBjcmVhdGVkIGJ5IGEgZmV3IHRyYW5zZHVjZXIgbGlicmFyeSBhdXRob3JzIHRvIGFsbG93IHRoZW0gdG9cbiAqIGludGVyb3BlcmF0ZS4gVGhlIHN1cHBvcnQgbXVzdCBiZSBleHBsaWNpdGx5IGNyZWF0ZWQgYmVjYXVzZSB0aGUgbm9ybWFsXG4gKiBtZXRob2Qgb2YgbWFraW5nIGFuIG9iamVjdCBzdXBwb3J0IHRyYW5zZm9ybWF0aW9ucyB3b24ndCB3b3JrIGhlcmUuIFRoaXNcbiAqIG1ldGhvZCBpcyB0byBjcmVhdGUgYSBuZXcgb2JqZWN0IGFuZCBhZGQgdGhlIHRyYW5zZm9ybWVkIHZhbHVlcyB0byBpdCAtIGJ1dFxuICogZm9yIGEgY2hhbm5lbCwgd2UgbmVlZCB0byByZXBsYWNlIHRoZSB2YWx1ZXMgb24gdGhlIGNoYW5uZWwgd2l0aCB0aGVpclxuICogdHJhbnNmb3JtZWQgdmFsdWVzLCBpbiB0aGUgc2FtZSBvcmRlciBldmVuIGluIGEgbXVsdGktcHJvY2VzcyBlbnZpcm9ubWVudC5cbiAqIFRodXMgdHJhbnNmb3JtYXRpb25zIGhhcHBlbiBpbiBwbGFjZS5cbiAqXG4gKiBUcmFuc2Zvcm1hdGlvbnMgYXJlIGFwcGxpZWQgYmVmb3JlIHRoZSB2YWx1ZSBpcyBxdWV1ZWQsIHNvIGV2ZW4gaWYgdGhlcmUgaXMgYVxuICogY29ycmVzcG9uZGluZyBvcGVyYXRpb24gcmVhZHkgdG8gZ28sIHRoZSB0cmFuc2Zvcm1hdGlvbiBzdGlsbCBoYXBwZW5zLiBBbHNvLFxuICogdHJhbnNmb3JtYXRpb25zIHJlcXVpcmUgdGhhdCB0aGUgY2hhbm5lbCBiZSBidWZmZXJlZCAodGhpcyBidWZmZXIgaXMgd2hhdCBpc1xuICogc2VudCB0byB0aGUgdHJhbnNmb3JtZXIncyByZWR1Y3Rpb24gc3RlcCBmdW5jdGlvbik7IHRyeWluZyB0byBjcmVhdGUgYVxuICogY2hhbm5lbCB3aXRoIGEgdHJhbnNmb3JtZXIgYnV0IHdpdGhvdXQgYSBidWZmZXIgd2lsbCByZXN1bHQgaW4gYW4gZXJyb3IgYmVpbmdcbiAqIHRocm93bi5cbiAqXG4gKiBUaGlzIGlzIHRoZSBvYmplY3QgdGhhdCBpcyByZXR1cm5lZCBmcm9tIGEgY2FsbCB0b1xuICogYHtAbGluayBtb2R1bGU6Y3NwLmNoYW58Y2hhbn1gLiBIb3dldmVyLCB0aGlzIG9iamVjdCBpcyBpbnRlbmRlZCB0byBiZSB1c2VkXG4gKiBhcyBhIHZhbHVlIHRvIHBhc3MgdG8gY2hhbm5lbCBvcGVyYXRpb24gZnVuY3Rpb25zOyBpdCBkb2Vzbid0IGhhdmUgYW55XG4gKiBwcm9wZXJ0aWVzIG9mIGludGVyZXN0IHRvIGFuIGVuZCB1c2VyLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAdHlwZWRlZiBDaGFubmVsXG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIGEgY2hhbm5lbC4gVGhpcyBpcyBhIGxvdy1sZXZlbCBmdW5jdGlvbjtcbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC5jaGFufGNoYW59YCBwZXJmb3JtcyBzb21lIG5lY2Vzc2FyeSBtYW5pcHVsYXRpb25zIG9uXG4gKiBhcmd1bWVudHMgYmVmb3JlIHVzaW5nIHRoaXMgZnVuY3Rpb24gdG8gcGVyZm9ybSB0aGUgYWN0dWFsIGNyZWF0aW9uLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwL2NoYW5uZWxcbiAqIEBwYXJhbSB7bnVsbCB8IG1vZHVsZTpjc3AuQnVmZmVyfSBidWZmZXIgQW4gb3B0aW9uYWwgYnVmZmVyIHRoYXQsIGlmIHByZXNlbnQsXG4gKiAgICAgaXMgdXNlZCB0byBjcmVhdGUgYSBidWZmZXJlZCBjaGFubmVsLiBJZiB0aGlzIGlzIGBudWxsYCwgYW4gdW5idWZmZXJlZFxuICogICAgIGNoYW5uZWwgaXMgY3JlYXRlZC5cbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5UcmFuc2R1Y2VyfSB4Zm9ybSBUaGUgdHJhbnNkdWNlciB1c2VkIHRvIHRyYW5zZm9ybSB2YWx1ZXNcbiAqICAgICBzZW50IHRvIHRoZSBjaGFubmVsLiBJZiBubyB0cmFuc2Zvcm1hdGlvbnMgYXJlIG5lY2Vzc2FyeSwgYSBwYXNzdGhyb3VnaFxuICogICAgIHRyYW5zZHVjZXIgc2hvdWxkIGJlIHByb3ZpZGVkLlxuICogQHBhcmFtIHtib29sZWFufSBpc1RpbWVkIEluZGljYXRlcyB3aGV0aGVyIHRoZSBjaGFubmVsIGlzIGEgdGltZWQgY2hhbm5lbC5cbiAqICAgICBUaGUgdGltaW5pbmcgbWVjaGFuaXNtIGlzIGhhbmRsZWQgb3V0c2lkZSB0aGUgY2hhbm5lbCwgYnV0IHRoaXMgcHJvcGVydHlcbiAqICAgICBpcyBwcm92aWRlZCB0byBiZSBhYmxlIHRvIHF1ZXJ5IHdoZXRoZXIgdGhhdCdzIHRoZSBjYXNlLlxuICogQHBhcmFtIHtudW1iZXJ9IG1heERpcnR5PTY0IFRoZSBtYXhpbXVtIG51bWJlciBvZiBkaXJ0eSBvcGVyYXRpb25zIHRvIGFsbG93XG4gKiAgICAgYmVmb3JlIHRoZXkncmUgcHVyZ2VkLlxuICogQHBhcmFtIHtudW1iZXJ9IG1heFF1ZXVlZD0xMDI0IFRoZSBtYXhpbXVtIG51bWJlciBvZiBvcGVyYXRpb25zIHRoYXQgY2FuIGJlXG4gKiAgICAgcXVldWVkIGJlZm9yZSBuZXcgb25lcyBhcmUgcmVqZWN0ZWQuXG4gKiBAcmV0dXJuIHttb2R1bGU6Y3NwLkNoYW5uZWx9IEEgbmV3IGNoYW5uZWwuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjaGFubmVsKFxuICBidWZmZXIsXG4gIHhmb3JtLFxuICBpc1RpbWVkID0gZmFsc2UsXG4gIG1heERpcnR5ID0gTUFYX0RJUlRZLFxuICBtYXhRdWV1ZWQgPSBNQVhfUVVFVUVEXG4pIHtcbiAgcmV0dXJuIE9iamVjdC5jcmVhdGUobnVsbCwge1xuICAgIGJ1ZmZlcjoge1xuICAgICAgdmFsdWU6IGJ1ZmZlclxuICAgIH0sXG4gICAgeGZvcm06IHtcbiAgICAgIHZhbHVlOiB4Zm9ybVxuICAgIH0sXG4gICAgbWF4RGlydHk6IHtcbiAgICAgIHZhbHVlOiBtYXhEaXJ0eVxuICAgIH0sXG4gICAgbWF4UXVldWVkOiB7XG4gICAgICB2YWx1ZTogbWF4UXVldWVkXG4gICAgfSxcbiAgICByZWN2czoge1xuICAgICAgdmFsdWU6IHF1ZXVlKClcbiAgICB9LFxuICAgIHNlbmRzOiB7XG4gICAgICB2YWx1ZTogcXVldWUoKVxuICAgIH0sXG4gICAgZGlydHlSZWN2czoge1xuICAgICAgdmFsdWU6IDAsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0sXG4gICAgZGlydHlTZW5kczoge1xuICAgICAgdmFsdWU6IDAsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0sXG4gICAgY2xvc2VkOiB7XG4gICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0sXG4gICAgaXNCdWZmZXJlZDoge1xuICAgICAgdmFsdWU6ICEhYnVmZmVyXG4gICAgfSxcbiAgICBpc1RpbWVkOiB7XG4gICAgICB2YWx1ZTogaXNUaW1lZFxuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxuICogU2VuZHMgYSB2YWx1ZSB0byBhIGNoYW5uZWwuIFRoZSBzcGVjaWZpZWQgaGFuZGxlciBpcyB1c2VkIHRvIGNvbnRyb2wgd2hldGhlclxuICogdGhlIHNlbmQgaXMgYWN0aXZlIGFuZCB3aGF0IHRvIGRvIGFmdGVyIHRoZSBzZW5kIGNvbXBsZXRlcy4gQSBzZW5kIGNhbiBiZWNvbWVcbiAqIGluYWN0aXZlIGlmIGl0IHdhcyBwYXJ0IG9mIGFuIGBzZWxlY3RgIGNhbGwgYW5kIHNvbWUgb3RoZXIgb3BlcmF0aW9uXG4gKiBzcGVjaWZpZWQgaW4gdGhhdCBjYWxsIGhhcyBhbHJlYWR5IGNvbXBsZXRlZC5cbiAqXG4gKiBUaGlzIHZhbHVlIGlzIGdpdmVuIHRvIGEgcmVjZWl2ZSBoYW5kbGVyIGltbWVkaWF0ZWx5IGlmIHRoZXJlJ3Mgb25lIHdhaXRpbmcuXG4gKiBPdGhlcndpc2UgdGhlIHZhbHVlIGFuZCBoYW5kbGVyIGFyZSBxdWV1ZWQgdG9nZXRoZXIgdG8gd2FpdCBmb3IgYSByZWNlaXZlLlxuICpcbiAqIFRoaXMgaXMgYSBsb3ctbGV2ZWwgb3BlcmF0aW9uIHRoYXQncyBwcm92aWRlZCBhcyBhIHBhcnQgb2YgdGhlIGNoYW5uZWxcbiAqIGltcGxlbWVudGF0aW9uIHNvIHRoYXQgb3RoZXIgb3BlcmF0aW9ucyBmdW5jdGlvbnMgY2FuIHByb3Blcmx5IGFwcGx5XG4gKiBoYW5kbGVycy4gSXQgaXMgbm90IG1lYW50IGZvciBnZW5lcmFsIHVzZS4gVXNlIHRob3NlIG90aGVyIG9wZXJhdGlvbnNcbiAqIGZ1bmN0aW9ucyBpbnN0ZWFkLlxuICpcbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcC9jaGFubmVsXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuQ2hhbm5lbH0gY2hhbm5lbCBUaGUgY2hhbm5lbCB0aGF0IHRoZSB2YWx1ZSBpcyBiZWluZyBzZW50XG4gKiAgICAgdG8uXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBiZSBwdXQgb250byB0aGUgY2hhbm5lbC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaGFuZGxlci5hY3RpdmUgRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBzZW5kIGlzIHN0aWxsIGFjdGl2ZVxuICogICAgIGFuZCBzaG91bGQgc3RpbGwgYmUgc2VydmljZWQuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBoYW5kbGVyLmNvbW1pdCBEZWFjdGl2YXRlcyB0aGUgc2VuZCAoc28gaXQgY2FuJ3QgYmVcbiAqICAgICBzZXJ2aWNlZCBhIHNlY29uZCB0aW1lKSBhbmQgcmV0dXJucyB0aGUgY2FsbGJhY2sgdG8gYmUgZmlyZWQgd2hlbiB0aGVcbiAqICAgICBzZW5kIGNvbXBsZXRlcy5cbiAqIEByZXR1cm4ge21vZHVsZTpjc3AvY2hhbm5lbC5Cb3h8bnVsbH0gT25lIG9mIHRocmVlIHZhbHVlcy4gQSBib3hlZCBgdHJ1ZWAgaXNcbiAqICAgICByZXR1cm5lZCBpZiB0aGUgc2VuZCB3YXMgaW1tZWRpYXRlbHkgY29uc3VtZWQgYnkgYSBwZW5kaW5nIHJlY2VpdmUuIEFcbiAqICAgICBib3hlZCBgZmFsc2VgIGlzIHJldHVybmVkIGlmIHRoZSBzZW5kIHdhcyBwZXJmb3JtZWQgb24gYSBjaGFubmVsIHRoYXQgd2FzXG4gKiAgICAgYWxyZWFkeSBjbG9zZWQgYnkgdGhlIHRpbWUgdGhlIHNlbmQgdG9vayBwbGFjZS4gYG51bGxgIGlzIHJldHVybmVkIGlmIHRoZVxuICogICAgIHNlbmQgd2FzIHF1ZXVlZCBwZW5kaW5nIGEgY29ycmVzcG9uZGluZyByZWNlaXZlLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaGFuZGxlU2VuZChjaGFubmVsLCB2YWx1ZSwgaGFuZGxlcikge1xuICBpZiAodmFsdWUgPT09IENMT1NFRCkge1xuICAgIHRocm93IEVycm9yKFwiQ2Fubm90IHNlbmQgQ0xPU0VEIHRvIGEgY2hhbm5lbFwiKTtcbiAgfVxuXG4gIGlmIChjaGFubmVsLmNsb3NlZCkge1xuICAgIGhhbmRsZXIuY29tbWl0KCk7XG4gICAgcmV0dXJuIGJveChmYWxzZSk7XG4gIH1cblxuICBsZXQgcmVjZWl2ZXIsIGNhbGxiYWNrO1xuXG4gIC8vIFB1c2ggdGhlIGluY29taW5nIHZhbHVlIHRocm91Z2ggdGhlIGJ1ZmZlciwgZXZlbiBpZiB0aGVyZSdzIGFscmVhZHkgYVxuICAvLyByZWNlaXZlciB3YWl0aW5nIGZvciB0aGUgdmFsdWUuIFRoaXMgaXMgdG8gbWFrZSBzdXJlIHRoYXQgdGhlIHRyYW5zZHVjZXJcbiAgLy8gc3RlcCBmdW5jdGlvbiBoYXMgYSBjaGFuY2UgdG8gYWN0IG9uIHRoZSB2YWx1ZSBmaXJzdCwgd2hpY2ggY291bGQgY2hhbmdlXG4gIC8vIHRoZSB2YWx1ZSBvciBtYWtlIGl0IGFsdG9nZXRoZXIgdW5hdmFpbGFibGUuXG4gIC8vXG4gIC8vIElmIHRoZSBjaGFubmVsIGlzIHVuYnVmZmVyZWQgdGhpcyBwcm9jZXNzIGlzIHNraXBwZWQgKHRoZXJlIGNhbid0IGJlIGFcbiAgLy8gdHJhbnNkdWNlciBvbiBhbiB1bmJ1ZmZlcmVkIGNoYW5uZWwgYW55d2F5KS4gSWYgdGhlIGJ1ZmZlciBpcyBmdWxsLCB0aGVcbiAgLy8gdHJhbnNkdWNlcidzIHdvcmsgaXMgZGVmZXJyZWQgdW50aWwgbGF0ZXIgd2hlbiB0aGUgYnVmZmVyIGlzIG5vdCBmdWxsLlxuICBpZiAoY2hhbm5lbC5idWZmZXIgJiYgIWlzRnVsbChjaGFubmVsLmJ1ZmZlcikpIHtcbiAgICBoYW5kbGVyLmNvbW1pdCgpO1xuICAgIGNvbnN0IGRvbmUgPSBpc1JlZHVjZWQoY2hhbm5lbC54Zm9ybVtwLnN0ZXBdKGNoYW5uZWwuYnVmZmVyLCB2YWx1ZSkpO1xuXG4gICAgZm9yICg7Oykge1xuICAgICAgaWYgKGNvdW50KGNoYW5uZWwuYnVmZmVyKSA9PT0gMCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHJlY2VpdmVyID0gZGVxdWV1ZShjaGFubmVsLnJlY3ZzKTtcbiAgICAgIGlmIChyZWNlaXZlciA9PT0gRU1QVFkpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBpZiAocmVjZWl2ZXIuYWN0aXZlKSB7XG4gICAgICAgIGNhbGxiYWNrID0gcmVjZWl2ZXIuY29tbWl0KCk7XG4gICAgICAgIGNvbnN0IHZhbCA9IHJlbW92ZShjaGFubmVsLmJ1ZmZlcik7XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgIGRpc3BhdGNoKCgpID0+IGNhbGxiYWNrKHZhbCkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGRvbmUpIHtcbiAgICAgIGNsb3NlKGNoYW5uZWwpO1xuICAgIH1cbiAgICByZXR1cm4gYm94KHRydWUpO1xuICB9XG5cbiAgLy8gVGhpcyBsb29wIGhhcHBlbnMgaWYgdGhlIGNoYW5uZWwgaXMgdW5idWZmZXJlZCBhbmQgdGhlcmUgaXMgYXQgbGVhc3Qgb25lXG4gIC8vIHBlbmRpbmcgcmVjZWl2ZS4gKEJ1ZmZlcmVkIGNoYW5uZWxzIGJyZWFrIG91dCBvZiB0aGlzIGxvb3AgaW1tZWRpYXRlbHksXG4gIC8vIGJlY2F1c2UgaW4gb3JkZXIgZm9yIGEgYnVmZmVyZWQgY2hhbm5lbCB0byByZWFjaCB0aGlzIHBvaW50LCBpdHMgYnVmZmVyXG4gIC8vIG11c3QgaGF2ZSBiZWVuIGZ1bGwuIElmIHRoZSBidWZmZXIgaXMgZnVsbCwgdGhhdCBtZWFucyB0aGVyZSBhcmUgbm8gcGVuZGluZ1xuICAvLyByZWNlaXZlcyBhbmQgdGhlIGZpcnN0IG9uZSByZWFkIHdpbGwgYmUgRU1QVFkuKSBJdCBwcm9jZXNzZXMgdGhlIG5leHRcbiAgLy8gcGVuZGluZyByZWNlaXZlIGltbWVkaWF0ZWx5LlxuICBmb3IgKDs7KSB7XG4gICAgcmVjZWl2ZXIgPSBkZXF1ZXVlKGNoYW5uZWwucmVjdnMpO1xuICAgIGlmIChyZWNlaXZlciA9PT0gRU1QVFkpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBpZiAocmVjZWl2ZXIuYWN0aXZlKSB7XG4gICAgICBoYW5kbGVyLmNvbW1pdCgpO1xuICAgICAgY2FsbGJhY2sgPSByZWNlaXZlci5jb21taXQoKTtcbiAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICBkaXNwYXRjaCgoKSA9PiBjYWxsYmFjayh2YWx1ZSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGJveCh0cnVlKTtcbiAgICB9XG4gIH1cblxuICAvLyBJZiB0aGVyZSBhcmUgbm8gcGVuZGluZyByZWNlaXZlcyBvbiBhbiB1bmJ1ZmZlcmVkIGNoYW5uZWwsIG9yIG9uIGEgYnVmZmVyZWRcbiAgLy8gY2hhbm5lbCB3aXRoIGEgZnVsbCBidWZmZXIsIHdlIHF1ZXVlIHRoZSBzZW5kIHRvIHRsZXQgaXQgd2FpdCBmb3IgYSByZWNlaXZlXG4gIC8vIHRvIGJlY29tZSBhdmFpbGFibGUuIFNlbmRzIHdob3NlIGhhbmRsZXJzIGhhdmUgZ29uZSBpbmFjdGl2ZSAod2hpY2ggaGFwcGVuc1xuICAvLyBpZiB0aGV5IHdlcmUgcHJvY2Vzc2VkIGFzIHBhcnQgb2YgYSBgc2VsZWN0YCBjYWxsKSBhcmUgcGVyaW9kaWNhbGx5IHB1cmdlZC5cbiAgaWYgKGNoYW5uZWwuZGlydHlTZW5kcyA+IGNoYW5uZWwubWF4RGlydHkpIHtcbiAgICBmaWx0ZXIoY2hhbm5lbC5zZW5kcywgc2VuZGVyID0+IHNlbmRlci5oYW5kbGVyLmFjdGl2ZSk7XG4gICAgY2hhbm5lbC5kaXJ0eVNlbmRzID0gMDtcbiAgfSBlbHNlIHtcbiAgICBjaGFubmVsLmRpcnR5U2VuZHMrKztcbiAgfVxuXG4gIGlmIChxQ291bnQoY2hhbm5lbC5zZW5kcykgPj0gY2hhbm5lbC5tYXhRdWV1ZWQpIHtcbiAgICB0aHJvdyBFcnJvcihcbiAgICAgIGBObyBtb3JlIHRoYW4gJHtjaGFubmVsLm1heFF1ZXVlZH0gcGVuZGluZyBzZW5kcyBhcmUgYWxsb3dlZCBvbiBhIHNpbmdsZSBjaGFubmVsYFxuICAgICk7XG4gIH1cbiAgZW5xdWV1ZShjaGFubmVsLnNlbmRzLCBzZW5kQm94KHZhbHVlLCBoYW5kbGVyKSk7XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8qKlxuICogUmVjZWl2ZXMgYSB2YWx1ZSBmcm9tIGEgY2hhbm5lbC4gVGhlIHNwZWNpZmllZCBoYW5kbGVyIGlzIHVzZWQgdG8gY29udHJvbFxuICogd2hldGhlciB0aGUgcmVjZWl2ZSBpcyBhY3RpdmUgYW5kIHdoYXQgdG8gZG8gYWZ0ZXIgdGhlIHJlY2VpdmUgY29tcGxldGVzLiBBXG4gKiByZWNlaXZlIGNhbiBiZWNvbWUgaW5hY3RpdmUgaWYgaXQgd2FzIHBhcnQgb2YgYW4gYHNlbGVjdGAgY2FsbCBhbmQgc29tZSBvdGhlclxuICogb3BlcmF0aW9uIHNwZWNpZmllZCBpbiB0aGF0IGNhbGwgaGFzIGFscmVhZHkgY29tcGxldGVkLlxuICpcbiAqIFRoaXMgdmFsdWUgaXMgZ2l2ZW4gdG8gYSBzZW5kIGhhbmRsZXIgaW1tZWRpYXRlbHkgaWYgdGhlcmUncyBvbmUgd2FpdGluZy5cbiAqIE90aGVyd2lzZSB0aGUgdmFsdWUgYW5kIGhhbmRsZXIgYXJlIHF1ZXVlZCB0b2dldGhlciB0byB3YWl0IGZvciBhIHNlbmQuXG4gKlxuICogVGhpcyBpcyBhIGxvdy1sZXZlbCBvcGVyYXRpb24gdGhhdCdzIHByb3ZpZGVkIGFzIGEgcGFydCBvZiB0aGUgY2hhbm5lbFxuICogaW1wbGVtZW50YXRpb24gc28gdGhhdCBvdGhlciBvcGVyYXRpb25zIGZ1bmN0aW9ucyBjYW4gcHJvcGVybHkgYXBwbHlcbiAqIGhhbmRsZXJzLiBJdCBpcyBub3QgbWVhbnQgZm9yIGdlbmVyYWwgdXNlLiBVc2UgdGhvc2Ugb3RoZXIgb3BlcmF0aW9uc1xuICogZnVuY3Rpb25zIGluc3RlYWQuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3AvY2hhbm5lbFxuICogQHBhcmFtIHttb2R1bGU6Y3NwLkNoYW5uZWx9IGNoYW5uZWwgVGhlIGNoYW5uZWwgdGhhdCB0aGUgdmFsdWUgaXMgYmVpbmdcbiAqICAgICByZWNlaXZlZCBmcm9tLlxuICogQHBhcmFtIHtib29sZWFufSBoYW5kbGVyLmFjdGl2ZSBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHJlY2VpdmUgaXMgc3RpbGxcbiAqICAgICBhY3RpdmUgYW5kIHNob3VsZCBzdGlsbCBiZSBzZXJ2aWNlZC5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGhhbmRsZXIuY29tbWl0IERlYWN0aXZhdGVzIHRoZSByZWNlaXZlIChzbyBpdCBjYW4ndCBiZVxuICogICAgIHNlcnZpY2VkIGEgc2Vjb25kIHRpbWUpIGFuZCByZXR1cm5zIHRoZSBjYWxsYmFjayB0byBiZSBmaXJlZCB3aGVuIHRoZVxuICogICAgIHJlY2VpdmUgY29tcGxldGVzLlxuICogQHJldHVybiB7bW9kdWxlOmNzcC9jaGFubmVsLkJveHxudWxsfSBFaXRoZXIgdGhlIGJveGVkIHZhbHVlIHJlY2VpdmVkIGZyb21cbiAqICAgICB0aGUgY2hhbm5lbCwgb3IgYG51bGxgIGlmIHRoZSByZWNlaXZlIG11c3QgYmUgcXVldWVkIHRvIGF3YWl0IGFcbiAqICAgICBjb3JyZXNwb25kaW5nIHNlbmQuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBoYW5kbGVSZWN2KGNoYW5uZWwsIGhhbmRsZXIpIHtcbiAgbGV0IHNlbmRlciwgc2VuZEhhbmRsZXIsIGNhbGxiYWNrO1xuXG4gIC8vIFJ1bnMgaWYgdGhlIGNoYW5uZWwgaXMgYnVmZmVyZWQgYW5kIHRoZSBidWZmZXJlZCBpcyBub3QgZW1wdHkgKGFuIGVtcHR5XG4gIC8vIGJ1ZmZlciBtZWFucyB0aGVyZSBhcmUgbm8gcGVuZGluZyBzZW5kcykuIFdlIGltbWVkaWF0ZWx5IHByb2Nlc3MgYW55IHNlbmRzXG4gIC8vIHRoYXQgd2VyZSBxdWV1ZWQgd2hlbiB0aGVyZSB3ZXJlIG5vIHBlbmRpbmcgcmVjZWl2ZXMsIHVwIHVudGlsIHRoZSBidWZmZXJcbiAgLy8gaXMgZmlsbGVkIHdpdGggc2VudCB2YWx1ZXMuXG4gIGlmIChjaGFubmVsLmJ1ZmZlciAmJiBjb3VudChjaGFubmVsLmJ1ZmZlcikgPiAwKSB7XG4gICAgaGFuZGxlci5jb21taXQoKTtcbiAgICBjb25zdCB2YWx1ZSA9IHJlbW92ZShjaGFubmVsLmJ1ZmZlcik7XG5cbiAgICBmb3IgKDs7KSB7XG4gICAgICBpZiAoaXNGdWxsKGNoYW5uZWwuYnVmZmVyKSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHNlbmRlciA9IGRlcXVldWUoY2hhbm5lbC5zZW5kcyk7XG4gICAgICBpZiAoc2VuZGVyID09PSBFTVBUWSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgc2VuZEhhbmRsZXIgPSBzZW5kZXIuaGFuZGxlcjtcbiAgICAgIGlmIChzZW5kSGFuZGxlci5hY3RpdmUpIHtcbiAgICAgICAgY2FsbGJhY2sgPSBzZW5kSGFuZGxlci5jb21taXQoKTtcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgZGlzcGF0Y2goKCkgPT4gY2FsbGJhY2sodHJ1ZSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc1JlZHVjZWQoY2hhbm5lbC54Zm9ybVtwLnN0ZXBdKGNoYW5uZWwuYnVmZmVyLCBzZW5kZXIudmFsdWUpKSkge1xuICAgICAgICAgIGNsb3NlKGNoYW5uZWwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBib3godmFsdWUpO1xuICB9XG5cbiAgLy8gVGhpcyBsb29wIHJ1bnMgb24gYW4gdW5idWZmZXJlZCBjaGFubmVsIGlmIHRoZXJlIGFyZSBhbnkgcGVuZGluZyBzZW5kcy5cbiAgLy8gKEJ1ZmZlcmVkIGNoYW5uZWxzIGJyZWFrIG91dCBvZiB0aGlzIGxvb3AgaW1tZWRpYXRlbHkgYmVjYXVzZSBpbiBvcmRlciB0b1xuICAvLyBoYXZlIGNvbWUgdGhpcyBmYXIgd2l0aG91dCByZXR1cm5pbmcsIHRoZSBjaGFubmVsJ3MgYnVmZmVyIG11c3QgaGF2ZSBiZWVuXG4gIC8vIGVtcHR5LiBBbiBlbXB0eSBidWZmZXIgbWVhbnMgdGhlcmUgYXJlIG5vIHBlbmRpbmcgc2VuZHMsIHNvIHRoZSBmaXJzdFxuICAvLyBwZW5kaW5nIHNlbmQgcmVhZCBmcm9tIGl0IHdpbGwgYmUgRU1QVFkuKSBJdCBwcm9jZXNzZXMgdGhlIG5leHQgcGVuZGluZ1xuICAvLyBzZW5kIGltbWVkaWF0ZWx5LlxuICBmb3IgKDs7KSB7XG4gICAgc2VuZGVyID0gZGVxdWV1ZShjaGFubmVsLnNlbmRzKTtcbiAgICBpZiAoc2VuZGVyID09PSBFTVBUWSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHNlbmRIYW5kbGVyID0gc2VuZGVyLmhhbmRsZXI7XG4gICAgaWYgKHNlbmRIYW5kbGVyLmFjdGl2ZSkge1xuICAgICAgY2FsbGJhY2sgPSBzZW5kSGFuZGxlci5jb21taXQoKTtcbiAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICBkaXNwYXRjaCgoKSA9PiBjYWxsYmFjayh0cnVlKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gYm94KHNlbmRlci52YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgLy8gSWYgd2UndmUgZXhoYXVzdGVkIGFsbCBvZiBvdXIgcGVuZGluZyBzZW5kcyBhbmQgdGhlIGNoYW5uZWwgaXMgbWFya2VkXG4gIC8vIGNsb3NlZCwgd2UgY2FuIGZpbmFsbHkgcmV1dHJuIHRoZSBmYWN0IHRoYXQgdGhlIGNoYW5uZWwgaXMgY2xvc2VkLiBUaGlzXG4gIC8vIGVuc3VyZXMgdGhhdCBhbnkgc2VuZHMgdGhhdCB3ZXJlIGFscmVhZHkgcGVuZGluZyBvbiB0aGUgY2hhbm5lbCBhcmVcbiAgLy8gcHJvY2Vzc2VkIGJlZm9yZSBjbG9zdXJlLCBldmVuIGlmIHRoZSBjaGFubmVsIHdhcyBjbG9zZWQgYmVmb3JlIHRoYXQgY291bGRcbiAgLy8gaGFwcGVuLlxuICBpZiAoY2hhbm5lbC5jbG9zZWQpIHtcbiAgICBoYW5kbGVyLmNvbW1pdCgpO1xuICAgIHJldHVybiBib3goQ0xPU0VEKTtcbiAgfVxuXG4gIC8vIElmIGFuIHVuYnVmZmVyZWQgY2hhbm5lbCBvciBhIGJ1ZmZlcmVkIGNoYW5uZWwgd2l0aCBhbiBlbXB0eSBidWZmZXIgaGFzIG5vXG4gIC8vIHBlbmRpbmcgc2VuZHMsIGFuZCBpZiB0aGUgY2hhbm5lbCBpcyBzdGlsbCBvcGVuLCB0aGUgcmVjZWl2ZSBpcyBxdWV1ZWQgdG9cbiAgLy8gYmUgcHJvY2Vzc2VkIHdoZW4gYSBzZW5kIGlzIGF2YWlsYWJsZS4gUmVjZWl2ZXMgd2hvc2UgaGFuZGxlcnMgaGF2ZSBnb25lXG4gIC8vIGluYWN0aXZlIGFzIHRoZSByZXN1bHQgb2YgYHNlbGVjdGAgcHJvY2Vzc2luZyBhcmUgcGVyaW9kaWNhbGx5IHB1cmdlZC5cbiAgaWYgKGNoYW5uZWwuZGlydHlSZWN2cyA+IGNoYW5uZWwubWF4RGlydHkpIHtcbiAgICBmaWx0ZXIoY2hhbm5lbC5yZWN2cywgcmVjZWl2ZXIgPT4gcmVjZWl2ZXIuYWN0aXZlKTtcbiAgICBjaGFubmVsLmRpcnR5UmVjdnMgPSAwO1xuICB9IGVsc2Uge1xuICAgIGNoYW5uZWwuZGlydHlSZWN2cysrO1xuICB9XG5cbiAgaWYgKHFDb3VudChjaGFubmVsLnJlY3ZzKSA+PSBjaGFubmVsLm1heFF1ZXVlZCkge1xuICAgIGNvbnN0IG1heCA9IGNoYW5uZWwubWF4UXVldWVkO1xuICAgIHRocm93IEVycm9yKFxuICAgICAgYE5vIG1vcmUgdGhhbiAke21heH0gcGVuZGluZyByZWNlaXZlcyBhcmUgYWxsb3dlZCBvbiBhIHNpbmdsZSBjaGFubmVsYFxuICAgICk7XG4gIH1cbiAgZW5xdWV1ZShjaGFubmVsLnJlY3ZzLCBoYW5kbGVyKTtcblxuICByZXR1cm4gbnVsbDtcbn1cblxuLyoqXG4gKiBDbG9zZXMgdGhlIGNoYW5uZWwgaWYgaXQgaXNuJ3QgYWxyZWFkeSBjbG9zZWQuIFRoaXMgaW1tZWRpYXRlbHkgcmV0dXJucyBhbnlcbiAqIGJ1ZmZlcmVkIHZhbHVlcyB0byBwZW5kaW5nIHJlY2VpdmVzLiBJZiB0aGVyZSBhcmUgbm8gYnVmZmVyZWQgdmFsdWVzIChvciBpZlxuICogdGhleSd2ZSBhbHJlYWR5IGJlZW4gdGFrZW4gYnkgb3RoZXIgcmVjZWl2ZXMpLCB0aGVuIGFsbCBvZiB0aGUgcmVzdCBvZiB0aGVcbiAqIHJlY2VpdmVzIGFyZSBjb21wbGV0ZWQgd2l0aCB0aGUgdmFsdWUgb2Yge0BsaW5rIG1vZHVsZTpjc3AuQ0xPU0VEfENMT1NFRH0uXG4gKiBBbnkgcGVuZGluZyBzZW5kcyBhcmUgY29tcGxldGVkIHdpdGggdGhlIHZhbHVlIG9mIGBmYWxzZWAuXG4gKlxuICogTm90ZSB0aGF0IHRoZSBidWZmZXIgaXMgbm90IGVtcHRpZWQgaWYgdGhlcmUgYXJlIHN0aWxsIHZhbHVlcyByZW1haW5pbmcgYWZ0ZXJcbiAqIGFsbCBvZiB0aGUgcGVuZGluZyByZWNlaXZlcyBoYXZlIGJlZW4gaGFuZGxlZC4gVGhlIGNoYW5uZWwgd2lsbCBzdGlsbCBwcm92aWRlXG4gKiB0aG9zZSB2YWx1ZXMgdG8gYW55IGZ1dHVyZSByZWNlaXZlcywgdGhvdWdoIG5vIG5ldyB2YWx1ZXMgbWF5IGJlIGFkZGVkIHRvIHRoZVxuICogY2hhbm5lbC4gT25jZSB0aGUgYnVmZmVyIGlzIGRlcGxldGVkLCBhbnkgZnV0dXJlIHJlY2VpdmVzIHdpbGwgcmV0dXJuXG4gKiB7QGxpbmsgbW9kdWxlOmNzcC5DTE9TRUR8Q0xPU0VEfS5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICogQHBhcmFtIHttb2R1bGU6Y3NwLkNoYW5uZWx9IGNoYW5uZWwgVGhlIGNoYW5uZWwgdG8gYmUgY2xvc2VkLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY2xvc2UoY2hhbm5lbCkge1xuICBpZiAoY2hhbm5lbC5jbG9zZWQpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY2hhbm5lbC5jbG9zZWQgPSB0cnVlO1xuXG4gIGxldCByZWNlaXZlciwgc2VuZGVyLCBjYWxsYmFjaztcblxuICAvLyBJZiB0aGVyZSBpcyBhIGJ1ZmZlciBhbmQgaXQgaGFzIGF0IGxlYXN0IG9uZSB2YWx1ZSBpbiBpdCwgc2VuZCB0aG9zZSB2YWx1ZXNcbiAgLy8gdG8gYW55IHBlbmRpbmcgcmVjZWl2ZXMgdGhhdCBtaWdodCBzdGlsbCBiZSBxdWV1ZWQuXG4gIGlmIChjaGFubmVsLmJ1ZmZlcikge1xuICAgIGNoYW5uZWwueGZvcm1bcC5yZXN1bHRdKGNoYW5uZWwuYnVmZmVyKTtcbiAgICBmb3IgKDs7KSB7XG4gICAgICBpZiAoY291bnQoY2hhbm5lbC5idWZmZXIpID09PSAwKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgcmVjZWl2ZXIgPSBkZXF1ZXVlKGNoYW5uZWwucmVjdnMpO1xuICAgICAgaWYgKHJlY2VpdmVyID09PSBFTVBUWSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGlmIChyZWNlaXZlci5hY3RpdmUpIHtcbiAgICAgICAgY2FsbGJhY2sgPSByZWNlaXZlci5jb21taXQoKTtcbiAgICAgICAgY29uc3QgdmFsdWUgPSByZW1vdmUoY2hhbm5lbC5idWZmZXIpO1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICBkaXNwYXRjaCgoKSA9PiBjYWxsYmFjayh2YWx1ZSkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gT25jZSB0aGUgYnVmZmVyIGlzIGVtcHR5IChvciBpZiB0aGVyZSBpc24ndCBhIGJ1ZmZlciBhdCBhbGwpLCBzZW5kIENMT1NFRFxuICAvLyB0byBhbGwgcmVtYWluaW5nIHF1ZXVlZCByZWNlaXZlcy5cbiAgZm9yICg7Oykge1xuICAgIHJlY2VpdmVyID0gZGVxdWV1ZShjaGFubmVsLnJlY3ZzKTtcbiAgICBpZiAocmVjZWl2ZXIgPT09IEVNUFRZKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgaWYgKHJlY2VpdmVyLmFjdGl2ZSkge1xuICAgICAgY2FsbGJhY2sgPSByZWNlaXZlci5jb21taXQoKTtcbiAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICBkaXNwYXRjaCgoKSA9PiBjYWxsYmFjayhDTE9TRUQpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBTZW5kIGBmYWxzZWAgdG8gYW55IHJlbWFpbmluZyBxdWV1ZWQgc2VuZHMuXG4gIGZvciAoOzspIHtcbiAgICBzZW5kZXIgPSBkZXF1ZXVlKGNoYW5uZWwuc2VuZHMpO1xuICAgIGlmIChzZW5kZXIgPT09IEVNUFRZKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgaWYgKHNlbmRlci5oYW5kbGVyLmFjdGl2ZSkge1xuICAgICAgY2FsbGJhY2sgPSBzZW5kZXIuaGFuZGxlci5jb21taXQoKTtcbiAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICBkaXNwYXRjaCgoKSA9PiBjYWxsYmFjayhmYWxzZSkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQge1xuICBDTE9TRUQsXG4gIE1BWF9ESVJUWSxcbiAgTUFYX1FVRVVFRCxcbiAgY2hhbm5lbCxcbiAgaGFuZGxlU2VuZCxcbiAgaGFuZGxlUmVjdixcbiAgY2xvc2UsXG4gIGJveCxcbiAgaXNCb3hcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuLyoqXG4gKiBBbiBpbXBsZW1lbnRhdGlvbiBvZiBjaGFubmVscy4gVGhlc2UgY2hhbm5lbHMgYXJlIGVzc2VudGlhbGx5IHF1ZXVlcyB0aGF0XG4gKiBob2xkIGluc3RydWN0aW9ucyB3YWl0aW5nIGZvciB0aGUgbmV4dCBhdmFpbGFibGUgYXN5bmMgZnVuY3Rpb24gdG8gcHJvY2Vzc1xuICogdGhlbS4gVGhleSBjYW4gYmUgYnVmZmVyZWQsIHdoaWNoIGlzIGFjY29tcGxpc2hlZCB1c2luZyB0aGUgYnVmZmVyIGZ1bmN0aW9uc1xuICogYHtAbGluayBtb2R1bGU6Y3NwLmZpeGVkfGZpeGVkfWAsIGB7QGxpbmsgbW9kdWxlOmNzcC5kcm9wcGluZ3xkcm9wcGluZ31gLCBhbmRcbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC5zbGlkaW5nfHNsaWRpbmd9YC5cbiAqXG4gKiBDaGFubmVscyBkbyBub3QgaW50ZXJhY3Qgd2l0aCBKUyB0YXNrcyBvciB0aGUgZGlzcGF0Y2hlciBpbiBhbnkgbWVhbmluZ2Z1bFxuICogd2F5LiBUaGV5J3JlIGp1c3QgaGVyZSB0byBob2xkIHRhc2tzIHdoaWNoIG1heSB0aGVtc2VsdmVzIHRoZW4gY2F1c2UgbmV3IEpTXG4gKiB0YXNrcyB0byBiZSBjcmVhdGVkIHZpYSB0aGUgZGlzcGF0Y2hlci5cbiAqXG4gKiBDaGFubmVscyBtYXkgaGF2ZSB0cmFuc2R1Y2VycyBhc3NvY2lhdGVkIHdpdGggdGhlbS4gVGhlIHRyYW5zZHVjZXJzIGFyZVxuICogZXhwZWN0ZWQgdG8gZm9sbG93IHRoZSBzYW1lIGNvbnZlbnRpb25zIGFzIGFueSBvZiB0aGUgcG9wdWxhciB0cmFuc2R1Y2VyXG4gKiBsaWJyYXJpZXMuIEV4cGxpY2l0IHN1cHBvcnQgaXMgcmVxdWlyZWQgYmVjYXVzZSBjaGFubmVscyB3b3VsZG4ndCBwbGF5IHdlbGxcbiAqIHdpdGggdGhlIG5vcm1hbCB3YXkgb2YgbWFraW5nIGFuIG9iamVjdCBzdXBwb3J0IHRyYW5zZHVjdGlvbiwgZm9yIHR3b1xuICogZGlmZmVyZW50IHJlYXNvbnMuXG4gKlxuICogKiBUcmFuc2R1Y2VycyByZXF1aXJlIHRoZSBhYmlsaXR5IHRvIGNyZWF0ZSBhIG5ldywgZW1wdHkgY29sbGVjdGlvbiBvZiB0aGVcbiAqICAgc2FtZSB0eXBlIGFzIHRoZSBpbnB1dCBjb2xsZWN0aW9uLiBJbiB0aGlzIGNhc2UsIHRoYXQgd291bGQgbWVhbiBjcmVhdGluZyBhXG4gKiAgIG5ldyBjaGFubmVsLCBtZWFuaW5nIHRoYXQgdGhlIG91dHB1dCBjaGFubmVsIChmcm9tIHdoaWNoIHRoZSB0cmFuc2Zvcm1lZFxuICogICB2YWx1ZXMgYXJlIHJlY2VpdmVkKSB3b3VsZCBiZSBkaWZmZXJlbnQgdGhhbiB0aGUgaW5wdXQgY2hhbm5lbCAod2hlcmVcbiAqICAgdmFsdWVzIGFyZSBzZW50KS5cbiAqICogSWYgd2Ugc29tZWhvdyBnZXQgb3ZlciB0aGF0IHJlcXVpcmVtZW50IGFuZCBrZWVwIGFsbCBhY3Rpb24gb24gdGhlIHNhbWVcbiAqICAgY2hhbm5lbCwgd2UgY2FuJ3QgdGFrZSB2YWx1ZXMgZnJvbSB0aGUgY2hhbm5lbCwgdHJhbnNmb3JtIHRoZW0sIGFuZCBwdXRcbiAqICAgdGhlbSBiYWNrLiBUaGlzIHdvdWxkIHBvdGVudGlhbGx5IGNoYW5nZSB0aGUgb3JkZXIgb2YgdmFsdWVzIGluIHRoZSBjaGFubmVsXG4gKiAgIHNpbmNlIHdlIGFyZSBkZWFsaW5nIHdpdGggYXN5bmNocm9ub3VzIHByb2Nlc3Nlcy5cbiAqXG4gKiBUaGUgZXhwbGljaXQgc3VwcG9ydCBtZWFucyBhIHRyYW5zZHVjZXIgaXMgZGlyZWN0bHkgYXNzb2NpYXRlZCB3aXRoIGFcbiAqIGNoYW5uZWwuIFdoZW4gYSB2YWx1ZSBpcyBzZW50IHRvIHRoZSBjaGFubmVsLCBpdCdzIGZpcnN0IHJ1biB0aHJvdWdoIHRoZVxuICogdHJhbnNkdWNlciBhbmQgdGhlIHRyYW5zZm9ybWVkIHZhbHVlIGlzIHRoZSBvbmUgYWN0dWFsbHkgcHV0IGludG8gdGhlXG4gKiBjaGFubmVsJ3MgYnVmZmVyLiBUaGlzIGF2b2lkcyBib3RoIG9mIHRoZSBwcm9ibGVtcyBub3RlZCBhYm92ZS5cbiAqXG4gKiBAbW9kdWxlIGNzcC9jaGFubmVsXG4gKiBAcHJpdmF0ZVxuICovXG5cbmltcG9ydCB7XG4gIENMT1NFRCxcbiAgY2hhbm5lbCBhcyBjaGFuSW1wbCxcbiAgaGFuZGxlU2VuZCxcbiAgaGFuZGxlUmVjdixcbiAgY2xvc2UgYXMgY2xvc2VJbXBsLFxuICBNQVhfRElSVFksXG4gIE1BWF9RVUVVRURcbn0gZnJvbSBcIi4vaGFuZGxlclwiO1xuaW1wb3J0IHsgREVGQVVMVCwgc2VsZWN0LCBzZWxlY3RBc3luYywgdmFsdWUsIGNoYW5uZWwgfSBmcm9tIFwiLi9zZWxlY3RcIjtcbmltcG9ydCB7IGFkZCwgZml4ZWQsIGlzQnVmZmVyIH0gZnJvbSBcIm1vZHVsZXMvYnVmZmVyXCI7XG5pbXBvcnQgeyBwcm90b2NvbHMgYXMgcCB9IGZyb20gXCJAY2hhbmtvL3hkdWNlXCI7XG5cbi8qKlxuICogQSBoYW5kbGVyIGZ1bmN0aW9uIGZvciBleGNlcHRpb25zIHRoYXQgYXJlIHRocm93biBieSBhIHRyYW5zZHVjZXIgd2hpbGVcbiAqIHRyYW5zZm9ybWluZyB2YWx1ZXMgb24gYSBjaGFubmVsLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBlcnIgVGhlIGVycm9yIG9iamVjdCB0aGF0IHdhcyB0aHJvd24gYnkgdGhlIHRyYW5zZHVjZXIuXG4gKiBAcmV0dXJuIHsqfSBBIHZhbHVlIHRoYXQgc2hvdWxkIGJlIHB1dCBpbnRvIHRoZSBjaGFubmVsJ3MgYnVmZmVyIHdoZW4gdGhlXG4gKiAgICAgdHJhbnNkdWNlciB0aHJvd3MgdGhlIGVycm9yLiBJZiB0aGlzIHZhbHVlIGlzXG4gKiAgICAge0BsaW5rIG1vZHVsZTpjc3AuQ0xPU0VEfENMT1NFRH0sIHRoZW4gbm8gdmFsdWUgYXQgYWxsIHdpbGwgYmUgYWRkZWQgdG9cbiAqICAgICB0aGUgYnVmZmVyLlxuICogQGNhbGxiYWNrXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcC9jaGFubmVsXG4gKiBAcHJpdmF0ZVxuICovXG5cbi8qKlxuICogVGhlIGRlZmF1bHQgZXhjZXB0aW9uIGhhbmRsZXIsIHVzZWQgd2hlbiBubyBleGNlcHRpb24gaGFuZGxlciBpcyBzdXBwbGllZCB0b1xuICogYHtAbGluayBtb2R1bGU6Y3NwL2NoYW5uZWwuaGFuZGxlRXhjZXB0aW9ufWAsXG4gKiBge0BsaW5rIG1vZHVsZTpjc3AvY2hhbm5lbC53cmFwVHJhbnNmb3JtZXJ9YCwgYHtAbGluayBtb2R1bGU6Y3NwLmNoYW58Y2hhbn1gLFxuICogb3IgYHtAbGluayBtb2R1bGU6Y3NwLnRyYW5zQ2hhbnx0cmFuc0NoYW59YC4gVGhpcyBkZWZhdWx0IGhhbmRsZXIgbWVyZWx5XG4gKiByZXR1cm5zIGB7QGxpbmsgbW9kdWxlOmNzcC5DTE9TRUR8Q0xPU0VEfWAsIHdoaWNoIHdpbGwgcmVzdWx0IGluIG5vIG5ldyB2YWx1ZVxuICogYmVpbmcgd3JpdHRlbiB0byB0aGUgY2hhbm5lbC5cbiAqXG4gKiBAdHlwZSB7bW9kdWxlOmNzcC5FeGNlcHRpb25IYW5kbGVyfVxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3AvY2hhbm5lbFxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgREVGQVVMVF9IQU5ETEVSID0gKCkgPT4gQ0xPU0VEO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgaGFuZGxlciB1c2VkIGZvciBgc2VuZGAgYW5kIGByZWN2YCBvcGVyYXRpb25zLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwL2NoYW5uZWxcbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC9jaGFubmVsLkhhbmRsZXJDYWxsYmFja30gZm4gVGhlIGNhbGxiYWNrIHRvIGJlIHJ1biB3aGVuXG4gKiAgICAgKGFuZCBpZikgdGhlIG9wZXJhdGlvbiBjb21wbGV0ZXMuXG4gKiBAcmV0dXJuIHttb2R1bGU6Y3NwL2NoYW5uZWwuSGFuZGxlcn0gVGhlIG5ldyBoYW5kbGVyLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gb3BIYW5kbGVyKGZuKSB7XG4gIHJldHVybiBPYmplY3QuY3JlYXRlKG51bGwsIHtcbiAgICBhY3RpdmU6IHtcbiAgICAgIHZhbHVlOiB0cnVlXG4gICAgfSxcbiAgICBjb21taXQ6IHtcbiAgICAgIHZhbHVlOiAoKSA9PiBmblxuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxuICogSGFuZGxlcyBhbiBleGNlcHRpb24gdGhhdCBpcyB0aHJvd24gaW5zaWRlIGEgdHJhbnNkdWNlci4gVGhlIHRocm93biBlcnJvciBpc1xuICogcGFzc2VkIHRvIHRoZSBgaGFuZGxlcmAgZnVuY3Rpb24sIGFuZCB0aGUgcmVzdWx0IG9mIHRoYXQgaGFuZGxlciBmdW5jdGlvbiBpc1xuICogYWRkZWQgdG8gdGhlIGNoYW5uZWwncyBidWZmZXIuIElmIHRoYXQgdmFsdWUgaXNcbiAqIHtAbGluayBtb2R1bGU6Y3NwLkNMT1NFRHxDTE9TRUR9LCB0aGVuIGl0IGlzICpub3QqIGFkZGVkIHRvIHRoZSBidWZmZXIuXG4gKlxuICogQHBhcmFtIHttb2R1bGU6Y3NwLkJ1ZmZlcn0gYnVmZmVyIFRoZSBidWZmZXIgdGhhdCBiYWNrcyB0aGUgY2hhbm5lbCB3aG9zZVxuICogICAgIHRyYW5zZHVjZXIncyBleGNlcHRpb25zIGFyZSBiZWluZyBoYW5kbGVkLlxuICogQHBhcmFtIHttb2R1bGU6Y3NwLkV4Y2VwdGlvbkhhbmRsZXJ9IGhhbmRsZXIgVGhlIGV4Y2VwdGlvbiBoYW5kbGluZyBmdW5jdGlvblxuICogICAgIHRoYXQgaXMgcnVuIHdoZW4gYW4gZXJyb3Igb2NjdXJzIGluIGEgdHJhbnNkdWNlci5cbiAqIEBwYXJhbSAge09iamVjdH0gZXggVGhlIGVycm9yIG9iamVjdCB0aHJvd24gYnkgdGhlIHRyYW5zZHVjZXIuXG4gKiBAcmV0dXJuIHttb2R1bGU6Y3NwLkJ1ZmZlcn0gVGhlIGJ1ZmZlciBpdHNlbGYuIFRoaXMgaXMgZG9uZSB0byBtYWtlIGl0IGVhc2llclxuICogICAgIHRvIGludGVncmF0ZSB0aGlzIGZ1bmN0aW9uIGludG8gYSB0cmFuc2R1Y2VyJ3Mgc3RlcCBmdW5jdGlvbi5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGhhbmRsZUV4Y2VwdGlvbihidWZmZXIsIGhhbmRsZXIsIGV4KSB7XG4gIGNvbnN0IHZhbHVlID0gaGFuZGxlcihleCk7XG4gIGlmICh2YWx1ZSAhPT0gQ0xPU0VEKSB7XG4gICAgYWRkKGJ1ZmZlciwgdmFsdWUpO1xuICB9XG4gIHJldHVybiBidWZmZXI7XG59XG5cbi8qKlxuICogQSB0cmFuc2R1Y2VyIHRoYXQgd3JhcHMgYW5vdGhlciB0cmFuc2R1Y2VyIHdpdGggZXJyb3IgaGFuZGxpbmcgY29kZS4gQW55XG4gKiBlcnJvciB0aGF0IG9jY3VycyB3aXRoaW4gdGhlIHRyYW5zZHVjZXIsIGVpdGhlciBpbiB0aGUgc3RlcCBmdW5jdGlvbiBvciB0aGVcbiAqIHJlc3VsdCBmdW5jdGlvbiwgd2lsbCBjYXVzZSB0aGUgZXJyb3IgaGFuZGxlciB0byBiZSBydW4uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHhmb3JtIFRoZSB0cmFuc2R1Y2VyIHRvIGFkZCBhbiBlcnJvciBoYW5kbGVyIHRvLlxuICogQHBhcmFtIHttb2R1bGU6Y3NwLkV4Y2VwdGlvbkhhbmRsZXJ9IFtoYW5kbGVyPURFRkFVTFRfSEFORExFUl0gVGhlIGV4Y2VwdGlvblxuICogICAgIGhhbmRsaW5nIGZ1bmN0aW9uIHRoYXQgaXMgcnVuIHdoZW4gYW4gZXJyb3Igb2NjdXJzIGluIHRoZSB0cmFuc2R1Y2VyLlxuICogQHJldHVybiB7T2JqZWN0fSBBIG5ldyB0cmFuc2R1Y2VyIHRoYXQgaXMgdGhlIHJlc3VsdCBvZiB3cmFwcGluZyB0aGUgcHJvdmlkZWRcbiAqICAgICB0cmFuc2R1Y2VyJ3Mgc3RlcCBhbmQgcmVzdWx0IGZ1bmN0aW9ucyB3aXRoIHRoZSBleGNlcHRpb24gaGFuZGxlci5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGhhbmRsZXJUcmFuc2R1Y2VyKHhmb3JtLCBoYW5kbGVyID0gREVGQVVMVF9IQU5ETEVSKSB7XG4gIHJldHVybiB7XG4gICAgW3Auc3RlcF0oYnVmZmVyLCBpbnB1dCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIHhmb3JtW3Auc3RlcF0oYnVmZmVyLCBpbnB1dCk7XG4gICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICByZXR1cm4gaGFuZGxlRXhjZXB0aW9uKGJ1ZmZlciwgaGFuZGxlciwgZXgpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBbcC5yZXN1bHRdKGJ1ZmZlcikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIHhmb3JtW3AucmVzdWx0XShidWZmZXIpO1xuICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgcmV0dXJuIGhhbmRsZUV4Y2VwdGlvbihidWZmZXIsIGhhbmRsZXIsIGV4KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59XG5cbi8qKlxuICogVGhlIHJlZHVjZXIgdXNlZCBhdCB0aGUgZW5kIG9mIGEgdHJhbnNkdWNlciBjaGFpbiB0byBjb250cm9sIGhvdyB0aGVcbiAqIHRyYW5zZm9ybWVkIHZhbHVlcyBhcmUgcmVkdWNlZCBiYWNrIG9udG8gdGhlIGNoYW5uZWwncyBidWZmZXIuIFRoaXMgcmVkdWNlclxuICogZG9lcyBub3RoaW5nIG1vcmUgdGhhbiBhZGQgdGhlIGlucHV0IGl0ZW1zICh3aGljaCBhcmUgdGhlIHRyYW5zZm9ybWVkIHZhbHVlc1xuICogdGhhdCBhcmUgYmVpbmcgcHV0IG9udG8gdGhlIGNoYW5uZWwpIHRvIHRoZSBjaGFubmVsIGJ1ZmZlci5cbiAqXG4gKiBUaGlzIGlzIGEgbmVjZXNzYXJ5IHBhcnQgb2Ygd29ya2luZyB3aXRoIGEgdHJhbnNkdWNlciwgYXMgdGhlIGZpbmFsIHJlZHVjZXJcbiAqIGFsd2F5cyB0YWtlcyB0aGUgdHJhbnNmb3JtZWQgdmFsdWVzIGFuZCByZW5kZXJzIHRoZW0gaW50byB3aGF0ZXZlciBjb2xsZWN0aW9uXG4gKiBpcyBkZXNpcmVkLiBUaGlzIGlzIHRoYXQgZmluYWwgcmVkdWNlciBmb3IgY2hhbm5lbHMuXG4gKlxuICogQHR5cGUge09iamVjdH1cbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IGJ1ZmZlclJlZHVjZXIgPSB7XG4gIFtwLmluaXRdKCkge1xuICAgIHRocm93IEVycm9yKFwiaW5pdCBub3QgYXZhaWxhYmxlXCIpO1xuICB9LFxuXG4gIFtwLnN0ZXBdKGJ1ZmZlciwgaW5wdXQpIHtcbiAgICBhZGQoYnVmZmVyLCBpbnB1dCk7XG4gICAgcmV0dXJuIGJ1ZmZlcjtcbiAgfSxcblxuICBbcC5yZXN1bHRdKGJ1ZmZlcikge1xuICAgIHJldHVybiBidWZmZXI7XG4gIH1cbn07XG5cbi8qKlxuICogUGFyc2VzIHRoZSBidWZmZXIgYXJndW1lbnQgYW5kIG9wdGlvbnMsIGFsb25nIHdpdGggYSBzZXQgb2YgZGVmYXVsdCBvcHRpb25zLFxuICogdG8gZmlndXJlIG91dCB3aGF0IHdhcyByZWFsbHkgcGFzc2VkIHRvIGB7QGxpbmsgbW9kdWxlOmNzcC5jaGFufGNoYW59YC5cbiAqXG4gKiBAcGFyYW0geyhudWxsfG51bWJlcnxtb2R1bGU6Y3NwLkJ1ZmZlcil9IGJ1ZmZlciBUaGUgYnVmZmVyIGFyZ3VtZW50IHBhc3NlZCB0b1xuICogICAgIGB7QGxpbmsgbW9kdWxlOmNzcC5jaGFufGNoYW59YC5cbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIFRoZSBvcHRpb25zIGFyZ3VtZW50IHBhc3NlZCB0b1xuICogICAgIGB7QGxpbmsgbW9kdWxlOmNzcC5jaGFufGNoYW59YC5cbiAqIEBwYXJhbSB7b2JqZWN0fSBkZWZhdWx0T3B0aW9ucyBEZWZhdWx0IHZhbHVlcyBmb3Igb3B0aW9ucyB0aGF0IG1pZ2h0IG5vdCBoYXZlXG4gKiAgICAgYmVlbiBzZW50IHRvIGB7QGxpbmsgbW9kdWxlOmNzcC5jaGFufGNoYW59YC5cbiAqIEByZXR1cm4ge29iamVjdH0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHByb2Nlc3NlZCB2YWx1ZXMgb2YgYWxsIG9mIHRoZVxuICogICAgIGFyZ3VtZW50cyBzZW50IHRvIGB7QGxpbmsgbW9kdWxlOmNzcC5jaGFufGNoYW59YC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHBhcnNlQXJncyhidWZmZXIsIG9wdGlvbnMsIGRlZmF1bHRPcHRpb25zKSB7XG4gIGxldCBidWY7XG4gIGxldCBvcHRzO1xuXG4gIGlmICghYnVmZmVyKSB7XG4gICAgLy8gc2FtZSBmb3IgMCwgbnVsbCwgb3IgdW5kZWZpbmVkXG4gICAgYnVmID0gbnVsbDtcbiAgICBvcHRzID0gb3B0aW9ucztcbiAgfSBlbHNlIGlmICh0eXBlb2YgYnVmZmVyID09PSBcIm51bWJlclwiKSB7XG4gICAgYnVmID0gZml4ZWQoYnVmZmVyKTtcbiAgICBvcHRzID0gb3B0aW9ucztcbiAgfSBlbHNlIGlmIChpc0J1ZmZlcihidWZmZXIpKSB7XG4gICAgYnVmID0gYnVmZmVyO1xuICAgIG9wdHMgPSBvcHRpb25zO1xuICB9IGVsc2Uge1xuICAgIC8vIElmIG5vIGJ1ZmZlciBpcyBzcGVjaWZpZWQgYnV0IGEgdHJhbnNkdWNlciBpcywgd2UgYXNzdW1lIGZpeGVkKDEpIGluc3RlYWRcbiAgICAvLyBvZiBubyBidWZmZXJcbiAgICBidWYgPSBidWZmZXI/LnRyYW5zZHVjZXIgPyBmaXhlZCgxKSA6IG51bGw7XG4gICAgb3B0cyA9IGJ1ZmZlcjtcbiAgfVxuXG4gIGNvbnN0IHsgdHJhbnNkdWNlciwgaGFuZGxlciwgbWF4RGlydHksIG1heFF1ZXVlZCwgdGltZXIgfSA9IE9iamVjdC5hc3NpZ24oXG4gICAge30sXG4gICAgZGVmYXVsdE9wdGlvbnMsXG4gICAgb3B0c1xuICApO1xuICByZXR1cm4geyBidWYsIHRyYW5zZHVjZXIsIGhhbmRsZXIsIG1heERpcnR5LCBtYXhRdWV1ZWQsIHRpbWVyIH07XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbmQgcmV0dXJucyBhIG5ldyBjaGFubmVsLlxuICpcbiAqIEJ5IGRlZmF1bHQgdGhpcyBjaGFubmVsIHdpbGwgYmUgYSBzaW1wbGUgdW5idWZmZXJlZCwgdW50cmFuc2Zvcm1lZCBjaGFubmVsLFxuICogYnV0IHRoYXQgY2FuIGJlIGNoYW5nZWQgdGhyb3VnaCBvcHRpb25zLiBBIGNoYW5uZWwgZG9lcyBub3QgaGF2ZSBhbnlcbiAqIGV4dGVybmFsbHkgdXNlZnVsIGZ1bmN0aW9ucy4gSXQgZXhpc3RzIGxhcmdlbHkgdG8gYmUgcGFzc2VkIGludG9cbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC5zZW5kfHNlbmR9YCwgYHtAbGluayBtb2R1bGU6Y3NwLnJlY3Z8cmVjdn1gLCBhbmRcbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC5zZWxlY3R8c2VsZWN0fWAgaW52b2NhdGlvbnMsIGFsb25nIHdpdGggdGhlaXIgbm9uLWJsb2NraW5nXG4gKiB2YXJpYXRpb25zIChge0BsaW5rIG1vZHVsZTpjc3Auc2VuZEFzeW5jfHNlbmRBc3luY31gLFxuICogYHtAbGluayBtb2R1bGU6Y3NwLnJlY3ZBc3luY3xyZWN2QXN5bmN9YCwgYW5kXG4gKiBge0BsaW5rIG1vZHVsZTpjc3Auc2VsZWN0QXN5bmN8c2VsZWN0QXN5bmN9YCkuXG4gKlxuICogSWYgYSBidWZmZXIgdmFsdWUgaXMgcHJvdmlkZWQsIGl0IGRlZmluZXMgd2hhdCBidWZmZXIgc2hvdWxkIGJhY2sgdGhlXG4gKiBjaGFubmVsLiBJZiB0aGlzIGlzIGBudWxsYCBvciBgMGAsIHRoZSBjaGFubmVsIHdpbGwgYmUgdW5idWZmZXJlZC4gSWYgaXQncyBhXG4gKiBwb3NpdGl2ZSBudW1iZXIsIHRoZSBjaGFubmVsIHdpbGwgYmUgYnVmZmVyZWQgYnkgYVxuICogYHtAbGluayBtb2R1bGU6Y3NwLkZpeGVkQnVmZmVyfEZpeGVkQnVmZmVyfSBgb2YgdGhhdCBzaXplLiBJZiBpdCdzIGFcbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC5CdWZmZXJ8QnVmZmVyfWAgb2JqZWN0LCB0aGF0IG9iamVjdCB3aWxsIGJlIHVzZWQgYXMgdGhlXG4gKiBjaGFubmVsJ3MgYnVmZmVyLiBJZiBpdCdzIG1pc3NpbmcgYWx0b2dldGhlciwgdGhlIGNoYW5uZWwgd2lsbCBiZSB1bmJ1ZmZlcmVkXG4gKiB1bmxlc3MgYSBgdHJhbnNkdWNlcmAgb3B0aW9uIGlzIHByb3ZpZGVkIChzZWUgYmVsb3cpLCBpbiB3aGljaCBjYXNlIGl0IHdpbGxcbiAqIGJlIGEgYHtAbGluayBtb2R1bGU6Y3NwLkZpeGVkQnVmZmVyfEZpeGVkQnVmZmVyfWAgb2Ygc2l6ZSAxLlxuICpcbiAqIGBjaGFuYCBzdXBwb3J0cyB0cmFuc2R1Y2VycyBieSBhbGxvd2luZyBhIHRyYW5zZHVjZXIgZnVuY3Rpb24gdG8gYmVcbiAqIGFzc29jaWF0ZWQgd2l0aCBpdC4gVGhpcyBpcyBwYXNzZWQgYXMgdGhlIGB0cmFuc2R1Y2VyYCBvcHRpb24gYW5kIGNhbiBvbmx5IGJlXG4gKiB1c2VkIGlmIHRoZSBjaGFubmVsIGlzIGJ1ZmZlcmVkIChvdGhlcndpc2UgYW4gZXJyb3IgaXMgdGhyb3duKS4gVGhpc1xuICogdHJhbnNkdWNlciBmdW5jdGlvbiBtdXN0IHRha2UgYW5vdGhlciB0cmFuc2R1Y2VyIGFzIGEgcGFyYW1ldGVyIChhbGxvd2luZ1xuICogdHJhbnNmb3JtZXJzIHRvIGJlIGNoYWluZWQpLCBhbmQgaXQgbXVzdCByZXR1cm4gYW4gb2JqZWN0IGNvbmZvcm1pbmcgdG8gdGhlXG4gKiB0cmFuc2R1Y2VyIHByb3RvY29sLlxuICpcbiAqIEVycm9ycyBpbiB0aGUgdHJhbnNmb3JtYXRpb24gcHJvY2VzcyBjYW4gYmUgaGFuZGxlZCBieSBwYXNzaW5nIGFuIGVycm9yXG4gKiBoYW5kbGVyLiBUaGlzIGlzIGEgZnVuY3Rpb24gdGhhdCBleHBlY3RzIHRvIHJlY2VpdmUgYW4gZXJyb3Igb2JqZWN0IGFzIGFcbiAqIHBhcmFtZXRlciBhbmQgY2FuIHJldHVybiBhIHZhbHVlIHRoYXQgaXMgdGhlbiBwdXQgb250byB0aGUgY2hhbm5lbC4gSWYgdGhpc1xuICogdmFsdWUgaXMgYHtAbGluayBtb2R1bGU6Y3NwLkNMT1NFRHxDTE9TRUR9YCwgdGhlbiBubyB2YWx1ZSB3aWxsIGJlIHB1dCBvbnRvXG4gKiB0aGUgY2hhbm5lbCB1cG9uIGhhbmRsZXIgY29tcGxldGlvbi5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICogQHBhcmFtIHsobnVtYmVyfG1vZHVsZTpjc3AuQnVmZmVyKX0gW2J1ZmZlcl0gVGhlIGJ1ZmZlciBvYmplY3QgdGhhdCBzaG91bGRcbiAqICAgICBiYWNrIHRoaXMgY2hhbm5lbC4gSWYgdGhpcyBpcyBhIHBvc2l0aXZlIG51bWJlciwgYSBmaXhlZCBidWZmZXIgb2YgdGhhdFxuICogICAgIHNpemUgd2lsbCBiZSBjcmVhdGVkIHRvIGJhY2sgdGhlIGNoYW5uZWwuIElmIGl0IGlzIGAwYCBvciBgbnVsbGAsIHRoZSBuZXdcbiAqICAgICBjaGFubmVsIHdpbGwgYmUgdW5idWZmZXJlZC4gSWYgaXQncyBub3QgcHJlc2VudCwgdGhlIG5ldyBjaGFubmVsIHdpbGwgYmVcbiAqICAgICB1bmJ1ZmZlcmVkIHVubGVzcyB0aGVyZSBpcyBhIGB0cmFuc2R1Y2VyYCBvcHRpb24sIGluIGluIHdoaWNoIGNhc2UgaXRcbiAqICAgICB3aWxsIGJlIGJ1ZmZlcmVkIHdpdGggYSBzaXplIDFcbiAqICAgICBge0BsaW5rIG1vZHVsZTpjc3AuRml4ZWRCdWZmZXJ8Rml4ZWRCdWZmZXJ9YC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gQSBzZXQgb2Ygb3B0aW9ucyBmb3IgY29uZmlndXJpbmcgdGhlIGNoYW5uZWwnc1xuICogICAgIHF1ZXVlLlxuICogQHBhcmFtIHttb2R1bGU6Y3NwLlRyYW5zZHVjZXJ9IFtvcHRpb25zLnRyYW5zZHVjZXJdIEEgdHJhbnNkdWNlciB0byBydW4gZWFjaFxuICogICAgIHZhbHVlIHRocm91Z2ggYmVmb3JlIHB1dHRpbmcgaXQgb250byB0aGUgY2hhbm5lbC4gVGhpcyBmdW5jdGlvbiBzaG91bGRcbiAqICAgICBleHBlY3Qgb25lIHBhcmFtZXRlciAoYW5vdGhlciB0cmFuc2R1Y2VyIHRoYXQgaXQncyBjaGFpbmVkIHRvKSBhbmQgcmV0dXJuXG4gKiAgICAgYW4gb2JqZWN0IHRoYXQgY29uZm9ybXMgdG8gdGhlIHRyYW5zZHVjZXIgcHJvdG9jb2wuIElmIGEgdHJhbnNkdWNlciBpc1xuICogICAgIHByb3ZpZGVkIG9uIGFuIHVuYnVmZmVyZWQgY2hhbm5lbCwgYW4gZXJyb3Igd2lsbCBiZSB0aHJvd24uXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuRXhjZXB0aW9uSGFuZGxlcn0gW29wdGlvbnMuaGFuZGxlcl0gQW4gZXJyb3IgaGFuZGxlciB0aGF0XG4gKiAgICAgaXMgcnVuIHdoZW5ldmVyIGFuIGVycm9yIG9jY3VycyBpbnNpZGUgYSB0cmFuc2R1Y2VyIGZ1bmN0aW9uLiBJZiB0aGF0XG4gKiAgICAgaGFwcGVucywgdGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgd2l0aCBvbmUgcGFyYW1ldGVyLCB3aGljaCBpcyB0aGUgZXJyb3JcbiAqICAgICBvYmplY3QuIFRoZSB2YWx1ZSB0aGF0IHRoZSBoYW5kbGVyIHJldHVybnMgKGlmIGl0IGlzIG5vdFxuICogICAgIGB7QGxpbmsgbW9kdWxlOmNzcC5DTE9TRUR8Q0xPU0VEfWApIHdpbGwgYmUgcHV0IG9udG8gdGhlIGNoYW5uZWwgd2hlbiB0aGVcbiAqICAgICBoYW5kbGVyIGZpbmlzaGVzIHJ1bm5pbmcuXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMubWF4RGlydHk9NjRdIFRoZSBtYXhpbXVtIG51bWJlciBvZiBkaXJ0eSBvcGVyYXRpb25zXG4gKiAgICAgdGhhdCBjYW4gYmUgaW4gdGhlIHF1ZXVlIGJlZm9yZSB0aG9zZSBvcGVyYXRpb25zIGFyZSBzdWJqZWN0IHRvIGJlaW5nXG4gKiAgICAgcHVyZ2VkLiBEaXJ0eSBvcGVyYXRpb25zIGFyZSB0aG9zZSB0aGF0IG1heSBub3QgYmUgdmFsaWQgYW55bW9yZSBiZWNhdXNlXG4gKiAgICAgdGhleSB3ZXJlIGluIHRoZSBsaXN0IG9mIG9wZXJhdGlvbnMgcGFzc2VkIHRvXG4gKiAgICAgYHtAbGluayBtb2R1bGU6Y3NwLnNlbGVjdHxzZWxlY3R9YCBvclxuICogICAgIGB7QGxpbmsgbW9kdWxlOmNzcC5zZWxlY3RBc3luY3xzZWxlY3RBc3luY31gIGJ1dCB3ZXJlIG5vdCBjaG9zZW4gdG8gcnVuLlxuICogICAgIFRoaXMgcHJvdmlkZXMgYSBjaGFuY2UgZm9yIGEgdmVyeSBtaW5vciBwZXJmb3JtYW5jZSB0d2VhayBhbmQgaXMgYmVzdFxuICogICAgIGxlZnQgYWxvbmUuXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMubWF4UXVldWVkPTEwMjRdIFRoZSBtYXhpbXVtIG51bWJlciBvZiBvcGVyYXRpb25zXG4gKiAgICAgdGhhdCBjYW4gYmUgcXVldWVkIHVwIGF0IHRoZSBzYW1lIHRpbWUuIFRoaXMgcHJldmVudHMgaW5maW5pdGUgbG9vcHMgZnJvbVxuICogICAgIGFjY2lkZW50YWxseSBlYXRpbmcgdXAgYWxsIG9mIHRoZSBhdmFpbGFibGUgbWVtb3J5LlxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLnRpbWVyXSBJZiB0aGlzIHZhbHVlIGlzIHByZXNlbnQsIHRoZSBjaGFubmVsIHdpbGwgYmVcbiAqICAgICBhIHRpbWVkIGNoYW5uZWwgdGhhdCBjbG9zZXMgYXV0b21hdGljYWxseSBhZnRlciB0aGlzIG51bWJlciBvZlxuICogICAgIG1pbGxpc2Vjb25kcy5cbiAqIEByZXR1cm4ge21vZHVsZTpjc3AuQ2hhbm5lbH0gQSBuZXcgY2hhbm5lbC5cbiAqL1xuZnVuY3Rpb24gY2hhbihidWZmZXIsIG9wdGlvbnMpIHtcbiAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgbWF4RGlydHk6IE1BWF9ESVJUWSxcbiAgICBtYXhRdWV1ZWQ6IE1BWF9RVUVVRURcbiAgfTtcbiAgY29uc3QgeyBidWYsIHRyYW5zZHVjZXIsIGhhbmRsZXIsIG1heERpcnR5LCBtYXhRdWV1ZWQsIHRpbWVyIH0gPSBwYXJzZUFyZ3MoXG4gICAgYnVmZmVyLFxuICAgIG9wdGlvbnMsXG4gICAgZGVmYXVsdE9wdGlvbnNcbiAgKTtcblxuICBpZiAodHJhbnNkdWNlciAmJiAhYnVmKSB7XG4gICAgdGhyb3cgRXJyb3IoXCJPbmx5IGJ1ZmZlcmVkIGNoYW5uZWxzIGNhbiB1c2UgdHJhbnNkdWNlcnNcIik7XG4gIH1cblxuICBjb25zdCB4ZiA9IGhhbmRsZXJUcmFuc2R1Y2VyKFxuICAgIHRyYW5zZHVjZXIgPyB0cmFuc2R1Y2VyKGJ1ZmZlclJlZHVjZXIpIDogYnVmZmVyUmVkdWNlcixcbiAgICBoYW5kbGVyXG4gICk7XG5cbiAgY29uc3QgaXNUaW1lZCA9IHR5cGVvZiB0aW1lciA9PT0gXCJudW1iZXJcIjtcblxuICBjb25zdCBjaCA9IGNoYW5JbXBsKGJ1ZiwgeGYsIGlzVGltZWQsIG1heERpcnR5LCBtYXhRdWV1ZWQpO1xuXG4gIGFzeW5jIGZ1bmN0aW9uKiBpdGVyYXRvcigpIHtcbiAgICBmb3IgKDs7KSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGF3YWl0IHJlY3YoY2gpO1xuICAgICAgaWYgKHZhbHVlID09PSBDTE9TRUQpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICB5aWVsZCB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBjaFtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBpdGVyYXRvcjtcblxuICBpZiAoaXNUaW1lZCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4gY2xvc2VJbXBsKGNoKSwgdGltZXIpO1xuICB9XG5cbiAgcmV0dXJuIGNoO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYW4gdW5idWZmZXJlZCwgdGltZWQgY2hhbm5lbC4gVGhpcyBjaGFubmVsIGNsb3NlcyBhdXRvbWF0aWNhbGx5IGFmdGVyXG4gKiB0aGUgc3VwcGxpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBhbmQgaXMgdGhlIGVxdWl2YWxlbnQgb2YgY2FsbGluZyBgY2hhbigwLFxuICogeyB0aW1lcjogZGVsYXkgfSlgLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcGFyYW0ge251bWJlcn0gZGVsYXkgVGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgYWZ0ZXIgdGhlIGNoYW5uZWwgaXMgY3JlYXRlZFxuICogICAgIHRoYXQgaXQgd2lsbCBiZSBjbG9zZWQgYXV0b21hdGljYWxseS5cbiAqIEByZXR1cm4ge21vZHVsZTpjc3AuQ2hhbm5lbH0gQSBuZXcgdGltZWQgY2hhbm5lbC5cbiAqL1xuZnVuY3Rpb24gdGltZWRDaGFuKGRlbGF5ID0gMCkge1xuICByZXR1cm4gY2hhbih7IHRpbWVyOiBkZWxheSB9KTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgYnVmZmVyZWQgY2hhbm5lbCB3aXRoIGEgdHJhbnNkdWNlciBhbmQgb3B0aW9uYWwgZXJyb3IgaGFuZGxlci4gVGhlXG4gKiBidWZmZXIgZm9yIHRoaXMgY2hhbm5lbCBpcyBhIGB7QGxpbmsgbW9kdWxlOmNzcC5GaXhlZEJ1ZmZlcnxGaXhlZEJ1ZmZlcn1gIG9mXG4gKiBzaXplIDEuIFRoaXMgaXMgdGhlIGVxdWl2YWxlbnQgb2YgYGNoYW4oMSwgeyB0cmFuc2R1Y2VyLCBoYW5kbGVyIH0pYC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICogQHBhcmFtIHttb2R1bGU6Y3NwLlRyYW5zZHVjZXJ9IHRyYW5zZHVjZXIgVGhlIHRyYW5zZHVjZXIgdXNlZCB0byB0cmFuc2Zvcm1cbiAqICAgICB2YWx1ZXMgb24gdGhlIG5ldyBjaGFubmVsLlxuICogQHBhcmFtIHttb2R1bGU6Y3NwLkV4Y2VwdGlvbkhhbmRsZXJ9IFtoYW5kbGVyXSBBbiBleGNlcHRpb24gaGFuZGxlciBjYWxsZWRcbiAqICAgICB3aXRoIHRoZSBlcnJvciBvYmplY3QgYXMgaXRzIG9ubHkgYXJndW1lbnQgd2hlbiBhbiBlcnJvciBoYXBwZW5zIGluc2lkZSBhXG4gKiAgICAgdHJhbnNkdWNlci4gSWYgdGhpcyBpcyBub3QgcHJvdmlkZWQsIGEgZGVmYXVsdCBoYW5kbGVyIGlzIHVzZWQgdGhhdFxuICogICAgIHNpbXBseSBkb2VzIG5vdGhpbmcsIGluY2x1ZGluZyBzZW5kaW5nIG5vIG91dHB1dCBmcm9tIHRoZSB2YWx1ZSB0aGF0XG4gKiAgICAgZXJyb3JlZC5cbiAqIEByZXR1cm4ge21vZHVsZTpjc3AuQ2hhbm5lbH0gQSBuZXcgY2hhbm5lbCB3aXRoIGEgdHJhbnNkdWNlci5cbiAqL1xuZnVuY3Rpb24gdHJhbnNDaGFuKHRyYW5zZHVjZXIsIGhhbmRsZXIpIHtcbiAgcmV0dXJuIGNoYW4oeyB0cmFuc2R1Y2VyLCBoYW5kbGVyIH0pO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhIGNoYW5uZWwgaXMgY2xvc2VkLlxuICpcbiAqIEEgY2xvc2VkIGNoYW5uZWwgd2lsbCBjYXVzZSBhbnkgYHNlbmRgIG9wZXJhdGlvbiB0byByZXR1cm4gYGZhbHNlYCBhbmQgYW55XG4gKiBgcmVjdmAgb3BlcmF0aW9uIHRvIHJldHVybiBhbnkgYnVmZmVyZWQgaXRlbXMgdGhhdCByZW1haW4sIGZvbGxvd2VkIGJ5XG4gKiBge0BsaW5rIG1vZHVsZTpjc3AuQ0xPU0VEfENMT1NFRH1gLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuQ2hhbm5lbH0gY2hhbm5lbCBUaGUgY2hhbm5lbCB0byBjaGVjay5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IEVpdGhlciBgdHJ1ZWAgaWYgdGhlIGNoYW5uZWwgaXMgY2xvc2VkIG9yIGBmYWxzZWAgaWYgaXRcbiAqICAgICBpc24ndC5cbiAqL1xuZnVuY3Rpb24gaXNDbG9zZWQoY2hhbm5lbCkge1xuICByZXR1cm4gY2hhbm5lbC5jbG9zZWQ7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGEgY2hhbm5lbCBpcyBidWZmZXJlZC5cbiAqXG4gKiBBIGNoYW5uZWwgaXMgYnVmZmVyZWQgaWYgYSBidWZmZXIgb3IgYSBudW1iZXIgd2FzIHBhc3NlZCBhcyB0aGUgZmlyc3RcbiAqIGFyZ3VtZW50IG9mIGB7QGxpbmsgbW9kdWxlOmNzcC5jaGFufGNoYW59YCBvciBpZiBhIHRyYW5zZHVjZXIgaXMgYSBwYXJ0IG9mXG4gKiB0aGUgY2hhbm5lbC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICogQHBhcmFtIHttb2R1bGU6Y3NwLkNoYW5uZWx9IGNoYW5uZWwgVGhlIGNoYW5uZWwgdG8gY2hlY2suXG4gKiBAcmV0dXJuIHtib29sZWFufSBFaXRoZXIgYHRydWVgIGlmIHRoZSBjaGFubmVsIGlzIGJ1ZmZlcmVkIG9yIGBmYWxzZWAgaWYgaXRcbiAqICAgICBpc24ndC5cbiAqL1xuZnVuY3Rpb24gaXNCdWZmZXJlZChjaGFubmVsKSB7XG4gIHJldHVybiBjaGFubmVsLmlzQnVmZmVyZWQ7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGEgY2hhbm5lbCBpcyB0aW1lZC5cbiAqXG4gKiBBIGNoYW5uZWwgaXMgdGltZWQgaWYgaXQgd2FzIGNyZWF0ZWQgZWl0aGVyIHdpdGggdGhlIGB0aW1lcmAgb3B0aW9uIG9mXG4gKiBge0BsaW5rIG1vZHVsZTpjc3AuY2hhbnxjaGFufWAgb3Igd2l0aCB0aGVcbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC50aW1lZENoYW58dGltZWRDaGFufWAgZnVuY3Rpb24uIEl0IHdpbGwgYXV0b21hdGljYWxseVxuICogY2xvc2UgYWZ0ZXIgYSBjZXJ0YWluIHBlcmlvZCBvZiB0aW1lLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuQ2hhbm5lbH0gY2hhbm5lbCBUaGUgY2hhbm5lbCB0byBjaGVjay5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IEVpdGhlciBgdHJ1ZWAgaWYgdGhlIGNoYW5uZWwgaXMgdGltZWQgb3IgYGZhbHNlYCBpZiBpdFxuICogICAgIGlzbid0LlxuICovXG5mdW5jdGlvbiBpc1RpbWVkKGNoYW5uZWwpIHtcbiAgcmV0dXJuIGNoYW5uZWwuaXNUaW1lZDtcbn1cblxuLyoqXG4gKiBTZW5kcyBhIHZhbHVlIHRvIHRoaXMgY2hhbm5lbCB3aXRob3V0IGJsb2NraW5nLlxuICpcbiAqIFRoaXMgbWVhbnMgdGhhdCBhIGNhbGwgdG8gYHNlbmRBc3luY2AgZG9lcyBub3QgZ28gaW50byBhbiBgYXdhaXRgIGV4cHJlc3Npb24sXG4gKiBhbmQgaXQgaXMgbm90IG5lY2Vzc2FyeSB0byB1c2UgaXQgaW5zaWRlIGEgYXN5bmMgZnVuY3Rpb24uIFJhdGhlciB0aGFuXG4gKiBibG9ja2luZyB1bnRpbCB0aGUgc2VudCB2YWx1ZSBpcyB0YWtlbiBieSBhbm90aGVyIGFzeW5jIGZ1bmN0aW9uLCB0aGlzIG9uZVxuICogcmV0dXJucyBpbW1lZGlhdGVseSBhbmQgdGhlbiBpbnZva2VzIHRoZSBjYWxsYmFjayAoaWYgcHJvdmlkZWQpIHdoZW4gdGhlIHNlbnRcbiAqIHZhbHVlIGlzIHRha2VuLiBJdCBjYW4gYmUgc2VlbiBhcyBhIG5vbi1ibG9ja2luZyB2ZXJzaW9uIG9mXG4gKiBge0BsaW5rIG1vZHVsZTpjc3Auc2VuZHxzZW5kfWAuXG4gKlxuICogV2hpbGUgdGhlIHByaW1hcnkgdXNlIG9mIHRoaXMgZnVuY3Rpb24gaXMgdG8gc2VuZCB2YWx1ZXMgb250byBjaGFubmVscyBpblxuICogY29udGV4dHMgd2hlcmUgYmVpbmcgaW5zaWRlIGFuIGFzeW5jIGZ1bmN0aW9uIGlzIGltcG9zc2libGUgKGZvciBleGFtcGxlLCBpblxuICogYSBET00gZWxlbWVudCdzIGV2ZW50IGhhbmRsZXIpLCBpdCBjYW4gc3RpbGwgYmUgdXNlZCBpbnNpZGUgYXN5bmMgZnVuY3Rpb25zXG4gKiBhdCB0aW1lcyB3aGVuIGl0J3MgaW1wb3J0YW50IHRvIG1ha2Ugc3VyZSB0aGF0IHRoZSBmdW5jdGlvbiBkb2Vzbid0IGJsb2NrXG4gKiBmcm9tIHRoZSBzZW5kLlxuICpcbiAqIFRoZSBjYWxsYmFjayBpcyBhIGZ1bmN0aW9uIG9mIG9uZSBwYXJhbWV0ZXIuIFRoZSBwYXJhbWV0ZXIgdGhhdCdzIHN1cHBsaWVkIHRvXG4gKiB0aGUgY2FsbGJhY2sgaXMgdGhlIHNhbWUgYXMgd2hhdCBpcyBzdXBwbGllZCB0byBgYXdhaXQgc2VuZGA6IGB0cnVlYCBpZiB0aGVcbiAqIHZhbHVlIHdhcyB0YWtlbiwgb3IgYGZhbHNlYCBpZiB0aGUgY2hhbm5lbCB3YXMgY2xvc2VkLiBJZiB0aGUgY2FsbGJhY2sgaXNuJ3RcbiAqIHByZXNlbnQsIG5vdGhpbmcgd2lsbCBoYXBwZW4gYWZ0ZXIgdGhlIHZhbHVlIGlzIHRha2VuLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcGFyYW0geyp9IFt2YWx1ZV0gVGhlIHZhbHVlIGJlaW5nIHB1dCBvbnRvIHRoZSBjaGFubmVsLlxuICogQHBhcmFtIHttb2R1bGU6Y3NwLk9wQ2FsbGJhY2t9IFtjYWxsYmFja10gQSBmdW5jdGlvbiB0aGF0IGdldHMgaW52b2tlZCBlaXRoZXJcbiAqICAgICB3aGVuIHRoZSB2YWx1ZSBpcyB0YWtlbiBieSBhbm90aGVyIHByb2Nlc3Mgb3Igd2hlbiB0aGUgY2hhbm5lbCBpcyBjbG9zZWQuXG4gKiAgICAgVGhpcyBmdW5jdGlvbiBjYW4gdGFrZSBvbmUgcGFyYW1ldGVyLCB3aGljaCBpcyBgdHJ1ZWAgaW4gdGhlIGZvcm1lciBjYXNlXG4gKiAgICAgYW5kIGBmYWxzZWAgaW4gdGhlIGxhdHRlci5cbiAqL1xuZnVuY3Rpb24gc2VuZEFzeW5jKGNoYW5uZWwsIHZhbHVlLCBjYWxsYmFjayA9ICgpID0+IHt9KSB7XG4gIGNvbnN0IHJlc3VsdCA9IGhhbmRsZVNlbmQoY2hhbm5lbCwgdmFsdWUsIG9wSGFuZGxlcihjYWxsYmFjaykpO1xuICBpZiAocmVzdWx0ICYmIGNhbGxiYWNrKSB7XG4gICAgY2FsbGJhY2socmVzdWx0LnZhbHVlKTtcbiAgfVxufVxuXG4vKipcbiAqIFJlY2VpdmVzIGEgdmFsdWUgZnJvbSB0aGlzIGNoYW5uZWwgd2l0aG91dCBibG9ja2luZy5cbiAqXG4gKiBUaGlzIG1lYW5zIHRoYXQgYSBjYWxsIHRvIGByZWNlaXZlQXN5bmNgIGRvZXMgbm90IGdvIGludG8gYW4gYGF3YWl0YFxuICogZXhwcmVzc2lvbiwgYW5kIGl0IGlzIG5vdCBuZWNlc3NhcnkgdG8gdXNlIGl0IGluc2lkZSBhIGFzeW5jIGZ1bmN0aW9uLiBSYXRoZXJcbiAqIHRoYW4gYmxvY2tpbmcgdW50aWwgYSB2YWx1ZSBiZWNvbWVzIGF2YWlsYWJsZSBvbiB0aGUgY2hhbm5lbCB0byBiZSByZWNlaXZlZCxcbiAqIHRoaXMgb25lIHJldHVybnMgaW1tZWRpYXRlbHkgYW5kIHRoZW4gaW52b2tlcyB0aGUgY2FsbGJhY2sgKGlmIHByb3ZpZGVkKSB3aGVuXG4gKiBhIHZhbHVlIGJlY29tZXMgYXZhaWxhYmxlLiBJdCBjYW4gYmUgcmVnYXJkZWQgYXMgYSBub24tYmxvY2tpbmcgdmVyc2lvbiBvZlxuICoge0BsaW5rIG1vZHVsZTpjc3AucmVjdnxyZWN2fWAuXG4gKlxuICogV2hpbGUgdGhlIHByaW1hcnkgdXNlIG9mIHRoaXMgZnVuY3Rpb24gaXMgdG8gcmVjZWl2ZSB2YWx1ZXMgZnJvbSBjaGFubmVscyBpblxuICogY29udGV4dHMgd2hlcmUgYmVpbmcgaW5zaWRlIGFuIGFzeW5jIGZ1bmN0aW9uIGlzIGltcG9zc2libGUsIGl0IGNhbiBzdGlsbCBiZVxuICogdXNlZCBpbnNpZGUgYXN5bmMgZnVuY3Rpb25zIGF0IHRpbWVzIHdoZW4gaXQncyBpbXBvcnRhbnQgdGhhdCB0aGUgcmVjZWl2ZVxuICogZG9lc24ndCBibG9jayB0aGUgZnVuY3Rpb24uXG4gKlxuICogVGhlIGNhbGxiYWNrIGlzIGEgZnVuY3Rpb24gb2Ygb25lIHBhcmFtZXRlciwgYW5kIHRoZSB2YWx1ZSBzdXBwbGllZCBmb3IgdGhhdFxuICogcGFyYW1ldGVyIGlzIHRoZSB2YWx1ZSByZWNlaXZlZCBmcm9tIHRoZSBjaGFubmVsIChlaXRoZXIgYSB2YWx1ZSB0aGF0IHdhc1xuICogc2VudCBvciBge0BsaW5rIG1vZHVsZTpjc3AuQ0xPU0VEfENMT1NFRH1gKS4gSWYgdGhlIGNhbGxiYWNrIGlzbid0IHByZXNlbnQsXG4gKiBub3RoaW5nIHdpbGwgaGFwcGVuIGFmdGVyIHRoZSB2YWx1ZSBpcyB0YWtlbi5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICogQHBhcmFtIHttb2R1bGU6Y3NwLk9wQ2FsbGJhY2t9IFtjYWxsYmFja10gQSBmdW5jdGlvbiB0aGF0IGdldHMgaW52b2tlZCB3aGVuIGFcbiAqICAgICB2YWx1ZSBpcyBtYWRlIGF2YWlsYWJsZSB0byBiZSByZWNlaXZlZCAodGhpcyB2YWx1ZSBtYXkgYmVcbiAqICAgICBge0BsaW5rIG1vZHVsZTpjc3AuQ0xPU0VEfENMT1NFRH1gIGlmIHRoZSBjaGFubmVsIGNsb3NlcyB3aXRoIG5vXG4gKiAgICAgYXZhaWxhYmxlIHZhbHVlKS4gVGhlIGZ1bmN0aW9uIGNhbiB0YWtlIG9uZSBwYXJhbWV0ZXIsIHdoaWNoIGlzIHRoZSB2YWx1ZVxuICogICAgIHRoYXQgaXMgcmVjZWl2ZWQgZnJvbSB0aGUgY2hhbm5lbC5cbiAqL1xuZnVuY3Rpb24gcmVjdkFzeW5jKGNoYW5uZWwsIGNhbGxiYWNrID0gKCkgPT4ge30pIHtcbiAgY29uc3QgcmVzdWx0ID0gaGFuZGxlUmVjdihjaGFubmVsLCBvcEhhbmRsZXIoY2FsbGJhY2spKTtcbiAgaWYgKHJlc3VsdCAmJiBjYWxsYmFjaykge1xuICAgIGNhbGxiYWNrKHJlc3VsdC52YWx1ZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBTZW5kcyBhIHZhbHVlIHRvIGEgY2hhbm5lbCwgYmxvY2tpbmcgdGhlIGFzeW5jIGZ1bmN0aW9uIHVudGlsIHRoYXQgdmFsdWUgaXNcbiAqIHJlY2VpdmVkIGZyb20gdGhlIGNoYW5uZWwgYnkgYSBkaWZmZXJlbnQgZnVuY3Rpb24gKG9yIHVudGlsIHRoZSBjaGFubmVsXG4gKiBjbG9zZXMpLlxuICpcbiAqIEEgdmFsdWUgaXMgYWx3YXlzIHNlbnQgdG8gdGhlIGNoYW5uZWwsIGJ1dCBpZiB0aGF0IHZhbHVlIGlzbid0IHNwZWNpZmllZCBieVxuICogdGhlIHNlY29uZCBwYXJhbWV0ZXIsIGl0IGlzIGB1bmRlZmluZWRgLiBBbnkgdmFsdWUgbWF5IGJlIHNlbnQgdG8gYSBjaGFubmVsLFxuICogd2l0aCB0aGUgc29sZSBleGNlcHRpb24gb2YgdGhlIHNwZWNpYWwgdmFsdWVcbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC5DTE9TRUR8Q0xPU0VEfWAuXG4gKlxuICogVGhpcyBmdW5jdGlvbiAqbXVzdCogYmUgY2FsbGVkIGZyb20gd2l0aGluIGFuIGFzeW5jIGZ1bmN0aW9uIGFuZCBhcyBwYXJ0IG9mXG4gKiBhbiBgYXdhaXRgIGV4cHJlc3Npb24uXG4gKlxuICogV2hlbiBgc2VuZGAgaXMgY29tcGxldGVkIGFuZCBpdHMgZnVuY3Rpb24gdW5ibG9ja3MsIGl0cyBgYXdhaXRgIGV4cHJlc3Npb25cbiAqIGV2YWx1YXRlcyB0byBhIHN0YXR1cyBib29sZWFuIHRoYXQgaW5kaWNhdGVzIHdoYXQgY2F1c2VkIHRoZSBmdW5jdGlvbiB0b1xuICogdW5ibG9jay4gVGhhdCB2YWx1ZSBpcyBgdHJ1ZWAgaWYgdGhlIHNlbnQgdmFsdWUgd2FzIHN1Y2Nlc3NmdWxseSB0YWtlbiBieVxuICogYW5vdGhlciBwcm9jZXNzLCBvciBgZmFsc2VgIGlmIHRoZSB1bmJsb2NraW5nIGhhcHBlbmVkIGJlY2F1c2UgdGhlIHRhcmdldFxuICogY2hhbm5lbCBjbG9zZWQuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqIEBwYXJhbSB7Kn0gW3ZhbHVlXSBUaGUgdmFsdWUgYmVpbmcgcHV0IG9udG8gdGhlIGNoYW5uZWwuXG4gKiBAcmV0dXJuIHtQcm9taXNlPGJvb2xlYW4+fSBBIHByb21pc2UgdGhhdCB3aWxsIHJlc29sdmUgdG8gYHRydWVgIG9yIGBmYWxzZWBcbiAqICAgICBkZXBlbmRpbmcgb24gd2hldGhlciB0aGUgcHV0IHZhbHVlIGlzIGFjdHVhbGx5IHRha2VuLlxuICovXG5mdW5jdGlvbiBzZW5kKGNoYW5uZWwsIHZhbHVlKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICBzZW5kQXN5bmMoY2hhbm5lbCwgdmFsdWUsIHJlc29sdmUpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBSZWNlaXZlcyBhIHZhbHVlIGZyb20gdGhpcyBjaGFubmVsLCBibG9ja2luZyB0aGUgYXN5bmMgZnVuY3Rpb24gdW50aWwgYSB2YWx1ZVxuICogYmVjb21lcyBhdmFpbGFibGUgdG8gYmUgcmVjZWl2ZWQgKG9yIHVudGlsIHRoZSBjaGFubmVsIGNsb3NlcyB3aXRoIG5vIG1vcmVcbiAqIHZhbHVlcyBvbiBpdCB0byBiZSByZWNlaXZlZCkuXG4gKlxuICogVGhpcyBmdW5jdGlvbiAqbXVzdCogYmUgY2FsbGVkIGZyb20gd2l0aGluIGFuIGFzeW5jIGZ1bmN0aW9uIGFuZCBhcyBwYXJ0IG9mXG4gKiBhbiBgYXdhaXRgIGV4cHJlc3Npb24uXG4gKlxuICogV2hlbiBgcmVjZWl2ZWAgaXMgY29tcGxldGVkIGFuZCBpdHMgZnVuY3Rpb24gdW5ibG9ja3MsIGl0cyBgYXdhaXRgIGV4cHJlc3Npb25cbiAqIGV2YWx1YXRlcyB0byB0aGUgYWN0dWFsIHZhbHVlIHRoYXQgd2FzIHJlY2VpdmVkLiBJZiB0aGUgdGFyZ2V0IGNoYW5uZWxcbiAqIGNsb3NlZCwgdGhlbiBhbGwgb2YgdGhlIHZhbHVlcyBhbHJlYWR5IHBsYWNlZCBvbnRvIGl0IGFyZSByZXNvbHZlZCBieVxuICogYHJlY2VpdmVgIGFzIG5vcm1hbCwgYW5kIG9uY2Ugbm8gbW9yZSB2YWx1ZXMgYXJlIGF2YWlsYWJsZSwgdGhlIHNwZWNpYWwgdmFsdWVcbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC5DTE9TRUR8Q0xPU0VEfWAgaXMgcmV0dXJuZWQuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqIEByZXR1cm4ge1Byb21pc2V9IEEgcHJvbWlzZSB0aGF0IHdpbGwgcmVzb2x2ZSB0byB0aGUgdmFsdWUgcmVjZWl2ZWQgZnJvbSB0aGVcbiAqICAgICBjaGFubmVsIG9uY2UgdGhhdCByZWNlaXZlIGlzIGNvbXBsZXRlZC4gSWYgdGhlIGNoYW5uZWwgY2xvc2VzIHdpdGhvdXQgYVxuICogICAgIHZhbHVlIGJlaW5nIG1hZGUgYXZhaWxhYmxlLCB0aGlzIHdpbGwgcmVzb2x2ZSB0b1xuICogICAgIGB7QGxpbmsgbW9kdWxlOmNzcC5DTE9TRUR8Q0xPU0VEfWAuXG4gKi9cbmZ1bmN0aW9uIHJlY3YoY2hhbm5lbCkge1xuICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgcmVjdkFzeW5jKGNoYW5uZWwsIHJlc29sdmUpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBSZWNlaXZlcyBhIHZhbHVlIGZyb20gYSBjaGFubmVsLCBibG9ja2luZyB0aGUgYXN5bmMgZnVuY3Rpb24gdW50aWwgYSB2YWx1ZVxuICogYmVjb21lcyBhdmFpbGFibGUgdG8gYmUgcmVjZWl2ZWQgKG9yIHVudGlsIHRoZSBjaGFubmVsIGNsb3NlcyB3aXRoIG5vIG1vcmVcbiAqIHZhbHVlcyBvbiBpdCB0byBiZSByZWNlaXZlZCkuIElmIHRoZSByZWNlaXZlZCB2YWx1ZSBpcyBhbiBlcnJvciBvYmplY3QsIHRoYXRcbiAqIGVycm9yIGlzIHRocm93biBhdCB0aGF0IHBvaW50LlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gKm11c3QqIGJlIGNhbGxlZCBmcm9tIHdpdGhpbiBhbiBhc3luYyBmdW5jdGlvbiBhbmQgYXMgcGFydCBvZlxuICogYW4gYGF3YWl0YCBleHByZXNzaW9uLlxuICpcbiAqIEl0IGZ1bmN0aW9ucyBpbiBldmVyeSB3YXkgbGlrZSBge0BsaW5rIG1vZHVsZTpjc3AucmVjdnxyZWN2fWAgKmV4Y2VwdCogaW4gdGhlXG4gKiBjYXNlIHRoYXQgdGhlIHZhbHVlIG9uIHRoZSBjaGFubmVsIGlzIGFuIG9iamVjdCB0aGF0IGhhcyBgRXJyb3IucHJvdG90eXBlYCBpblxuICogaXRzIHByb3RvdHlwZSBjaGFpbiAoYW55IGJ1aWx0LWluIGVycm9yLCBhbnkgcHJvcGVybHktY29uc3RydWN0ZWQgY3VzdG9tXG4gKiBlcnJvcikuIElmIHRoYXQgaGFwcGVucywgdGhlIGVycm9yIGlzIHRocm93biwgd2hpY2ggd2lsbCBjYXVzZSB0aGUgcmV0dXJuZWRcbiAqIHByb21pc2UgdG8gYmUgcmVqZWN0ZWQgd2l0aCB0aGUgZXJyb3IuIEl0IGNhbiB0aGVuIGJlIGhhbmRsZWQgdXAgdGhlIHByb21pc2VcbiAqIGNoYWluIGxpa2UgYW55IG90aGVyIHJlamVjdGVkIHByb21pc2UuXG4gKlxuICogYHRha2VPclRocm93YCBpcyByb3VnaGx5IGVxdWl2YWxlbnQgdG86XG4gKlxuICogYGBgXG4gKiBjb25zdCB2YWx1ZSA9IGF3YWl0IHJlY3YoY2gpO1xuICogaWYgKEVycm9yLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKHZhbHVlKSkge1xuICogICB0aHJvdyB2YWx1ZTtcbiAqIH1cbiAqIGBgYFxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcmV0dXJuIHtQcm9taXNlfSBBIHByb21pc2UgdGhhdCB3aWxsIHJlc29sdmUgdG8gdGhlIHZhbHVlIHRha2VuIGZyb20gdGhlXG4gKiAgICAgY2hhbm5lbCBvbmNlIHRoYXQgdGFrZSBpcyBjb21wbGV0ZWQuIElmIHRoZSBjaGFubmVsIGNsb3NlcyB3aXRob3V0IGFcbiAqICAgICB2YWx1ZSBiZWluZyBtYWRlIGF2YWlsYWJsZSwgdGhpcyB3aWxsIHJlc29sdmUgdG9cbiAqICAgICBge0BsaW5rIG1vZHVsZTpjc3AuQ0xPU0VEfENMT1NFRH1gLiBJZiB0aGUgdGFrZW4gdmFsdWUgaXMgYW4gZXJyb3IsIHRoZVxuICogICAgIHByb21pc2Ugd2lsbCBpbnN0ZWFkIGJlIHJlamVjdGVkIHdpdGggdGhlIGVycm9yIG9iamVjdCBhcyB0aGUgcmVhc29uLlxuICovXG5mdW5jdGlvbiByZWN2T3JUaHJvdyhjaGFubmVsKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgcmVjdkFzeW5jKGNoYW5uZWwsIHJlc3VsdCA9PiB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mLmNhbGwoRXJyb3IucHJvdG90eXBlLCByZXN1bHQpKSB7XG4gICAgICAgIHJlamVjdChyZXN1bHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxuLyoqXG4gKiBDbG9zZXMgdGhlIGNoYW5uZWwsIGlmIGl0IGlzbid0IGFscmVhZHkgY2xvc2VkLiBUaGlzIGltbWVkaWF0ZWx5IHJldHVybnMgYW55XG4gKiBidWZmZXJlZCB2YWx1ZXMgdG8gcGVuZGluZyByZWNlaXZlcy4gSWYgdGhlcmUgYXJlIG5vIGJ1ZmZlcmVkIHZhbHVlcyAob3IgaWZcbiAqIHRoZXkndmUgYWxyZWFkeSBiZWVuIHRha2VuIGJ5IG90aGVyIHJlY2VpdmVzKSwgdGhlbiBhbGwgb2YgdGhlIHJlc3Qgb2YgdGhlXG4gKiByZWNlaXZlcyBhcmUgY29tcGxldGVkIHdpdGggdGhlIHZhbHVlIG9mIGB7QGxpbmsgbW9kdWxlOmNzcC5DTE9TRUR8Q0xPU0VEfWAuXG4gKiBBbnkgcGVuZGluZyBzZW5kcyBhcmUgY29tcGxldGVkIHdpdGggdGhlIHZhbHVlIG9mIGBmYWxzZWAuXG4gKlxuICogTm90ZSB0aGF0IHRoZSBidWZmZXIgaXMgbm90IGVtcHRpZWQgaWYgdGhlcmUgYXJlIHN0aWxsIHZhbHVlcyByZW1haW5pbmcgYWZ0ZXJcbiAqIGFsbCBvZiB0aGUgcGVuZGluZyByZWNlaXZlcyBoYXZlIGJlZW4gaGFuZGxlZC4gVGhlIGNoYW5uZWwgd2lsbCBzdGlsbCBwcm92aWRlXG4gKiB0aG9zZSB2YWx1ZXMgdG8gYW55IGZ1dHVyZSByZWNlaXZlcywgdGhvdWdoIG5vIG5ldyB2YWx1ZXMgbWF5IGJlIGFkZGVkIHRvIHRoZVxuICogY2hhbm5lbC4gT25jZSB0aGUgYnVmZmVyIGlzIGRlcGxldGVkLCBhbnkgZnV0dXJlIHJlY2VpdmVzIHdpbGwgcmV0dXJuXG4gKiBge0BsaW5rIG1vZHVsZTpjc3AuQ0xPU0VEfENMT1NFRH1gLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuQ2hhbm5lbH0gY2hhbm5lbCBUaGUgY2hhbm5lbCB0byBiZSBjbG9zZWQuXG4gKi9cbmZ1bmN0aW9uIGNsb3NlKGNoYW5uZWwpIHtcbiAgY2xvc2VJbXBsKGNoYW5uZWwpO1xufVxuXG5leHBvcnQge1xuICBDTE9TRUQsXG4gIERFRkFVTFQsXG4gIGNoYW4sXG4gIHRpbWVkQ2hhbixcbiAgdHJhbnNDaGFuLFxuICBpc0Nsb3NlZCxcbiAgaXNCdWZmZXJlZCxcbiAgaXNUaW1lZCxcbiAgc2VuZEFzeW5jLFxuICByZWN2QXN5bmMsXG4gIHNlbGVjdEFzeW5jLFxuICBzZW5kLFxuICByZWN2LFxuICByZWN2T3JUaHJvdyxcbiAgc2VsZWN0LFxuICBjbG9zZSxcbiAgdmFsdWUsXG4gIGNoYW5uZWxcbn07XG5cbi8qKlxuICogVXNlZCBieSBjaGFubmVscyB0byB0cmFjayBleGVjdXRpb24gb2Ygb3BlcmF0aW9ucyAoYHNlbmRgLCBgcmVjdmAsIGFuZFxuICogYHNlbGVjdGApLiBUaGV5IHByb3ZpZGUgdHdvIHBpZWNlcyBvZiBpbmZvcm1hdGlvbjogdGhlIGZ1bmN0aW9uIHRvIGNhbGwgd2hlblxuICogYSBgc2VuZGAgb3IgYHJlY3ZgIHVuYmxvY2tzIChiZWNhdXNlIGEgdmFsdWUgZ2l2ZW4gdG8gc2VuZCBoYXMgYmVlbiByZWNlaXZlZCxcbiAqIG9yIGEgYHJlY3ZgIGhhcyBhY2NlcHRlZCBhIHZhbHVlIHRoYXQgaGFzIGJlZW4gc2VudCkgYW5kIHdoZXRoZXIgb3Igbm90IHRoZVxuICogaGFuZGxlciBpcyBzdGlsbCBhY3RpdmUuXG4gKlxuICogVGhlIGZ1bmN0aW9uIGlzIGEgY2FsbGJhY2sgdGhhdCBhY3R1YWxseSBkZWZpbmVzIHRoZSBkaWZmZXJlbmNlIGJldHdlZW5cbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC5zZW5kfHNlbmR9YCAvIGB7QGxpbmsgbW9kdWxlOmNzcC5yZWN2fHJlY3Z9YCAvXG4gKiBge0BsaW5rIG1vZHVsZTpjc3Auc2VsZWN0fHNlbGVjdH1gIGFuZFxuICogYHtAbGluayBtb2R1bGU6Y3NwLnNlbmRBc3luY3xzZW5kQXN5bmN9YCAvXG4gKiBge0BsaW5rIG1vZHVsZTpjc3AucmVjdkFzeW5jfHJlY3ZBc3luY31gIC9cbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC5zZWxlY3RBc3luY3xzZWxlY3RBc3luY31gOiB3aGlsZSB0aGUgdW5ibG9ja2VkIGNhbGxzIHVzZVxuICogdGhlIGNhbGxiYWNrIHBhc3NlZCB0byB0aGUgZnVuY3Rpb24sIGBzZW5kYCwgYHJlY3ZgLCBhbmQgYHNlbGVjdGAgc2ltcGx5XG4gKiBjb250aW51ZSB0aGUgcHJvY2VzcyB3aGVyZSBpdCBsZWZ0IG9mZi4gKFRoaXMgaXMgd2h5IGBzZW5kYCwgYHJlY3ZgLCBhbmRcbiAqIGBzZWxlY3RgIG9ubHkgd29yayBpbnNpZGUgYGFzeW5jYCBmdW5jdGlvbnMgd2l0aCBgYXdhaXRgIGlmIHRoZSByZXR1cm4gdmFsdWVcbiAqIGlzIG5lZWRlZCwgYmVjYXVzZSBvdGhlcndpc2UgdGhlcmUncyBubyBwcm9jZXNzIHRvIGNvbnRpbnVlLilcbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIHByb3ZpZGVkIGFzIHRoZSByZXR1cm4gdmFsdWUgb2YgdGhlIGBjb21taXRgIG1ldGhvZC4gQ2FsbGluZ1xuICogYGNvbW1pdGAgaGFzIG5vIGV4dHJhIGVmZmVjdCB3aXRoIGBzZW5kYCBhbmQgYHJlY3ZgIG9wZXJhdGlvbnMsIGJ1dCBmb3JcbiAqIGBzZWxlY3RgLCBpdCBhbHNvIG1hcmtzIHRoZSBoYW5kbGVyIGFzIG5vIGxvbmdlciBiZWluZyBhY3RpdmUuIFRoaXMgbWVhbnNcbiAqIHRoYXQgb25seSBvbmUgb2YgdGhlIG9wZXJhdGlvbnMgcGFzc2VkIHRvIHNlbGVjdCBjYW4gYmUgY29tcGxldGVkLCBiZWNhdXNlXG4gKiBhZnRlciB0aGUgZmlyc3Qgb25lLCB0aGUgaGFuZGxlciBpcyBubyBsb25nZXIgYWN0aXZlIGFuZCB3aWxsIG5vdCBiZSBhbGxvd2VkXG4gKiB0byBwcm9jZXNzIGEgc2Vjb25kIG9wZXJhdGlvbi5cbiAqXG4gKiBJZiBhIGBzZW5kYCBvciBgcmVjdmAgKG9yIGVxdWl2YWxlbnQgYHNlbGVjdGAgb3BlcmF0aW9uKSBjYW5ub3QgYmVcbiAqIGltbWVkaWF0ZWx5IGNvbXBsZXRlZCBiZWNhdXNlIHRoZXJlIGlzbid0IGEgY29ycmVzcG9uZGluZyBwZW5kaW5nIGByZWN2YCBvclxuICogYHNlbmRgLCB0aGUgaGFuZGxlciBpcyBxdWV1ZWQgdG8gYmUgcnVuIHdoZW4gYSBuZXcgYHJlY3ZgIG9yIGBzZW5kYCBiZWNvbWVzXG4gKiBhdmFpbGFibGUuXG4gKlxuICogQHR5cGVkZWYgSGFuZGxlclxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3AvY2hhbm5lbFxuICogQHByb3BlcnR5IHtib29sZWFufSBhY3RpdmUgV2hldGhlciBvciBub3QgdGhlIG9wZXJhdGlvbiBpcyBzdGlsbCBhY3RpdmUuIEFuXG4gKiAgICAgaW5hY3RpdmUgb3BlcmF0aW9uIGlzIG5vdCBzZXJ2aWNlZCBhbmQgd2lsbCBiZSBjbGVhcmVkIGZyb20gdGhlIHF1ZXVlIG9uXG4gKiAgICAgdGhlIG5leHQgZGlydHkgb3BlcmF0aW9uIHB1cmdlLlxuICogQHByb3BlcnR5IHtmdW5jdGlvbn0gY29tbWl0IE1hcmtzIHRoZSBoYW5kbGVyIGFzIGluYWN0aXZlIChzbyBpdCBkb2Vzbid0IHJ1blxuICogICAgIHR3aWNlKSBhbmQgcmV0dXJucyB0aGUgY2FsbGJhY2sgdG8gYmUgcnVuIHdoZW4gdGhlIG9wZXJhdGlvbiBjb21wbGV0ZXMuXG4gKiBAcHJpdmF0ZVxuICovXG5cbi8qKlxuICogQSBjYWxsYmFjayBmdW5jdGlvbiBydW4gd2hlbiBhIGBzZW5kYCBvciBgcmVjdmAgb3BlcmF0aW9uIGNvbXBsZXRlcy5cbiAqXG4gKiBAY2FsbGJhY2sgSGFuZGxlckNhbGxiYWNrXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcC9jaGFubmVsXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSBwcm92aWRlZCBieSB0aGUgY2hhbm5lbC4gSW4gYSBgcmVjdmAsIHRoaXMgaXMgdGhlXG4gKiAgICAgdmFsdWUgcmVjZWl2ZWQgZnJvbSB0aGUgY2hhbm5lbC4gSW4gYSBgc2VuZGAsIHRoaXMgaXMgYHRydWVgIGZvciBhXG4gKiAgICAgc3VjY2Vzc2Z1bCBzZW5kIGFuZCBgZmFsc2VgIGlmIHRoZSBjaGFubmVsIGlzIGNsb3NlZCBiZWZvcmUgdGhlIHNlbmQgY2FuXG4gKiAgICAgY29tcGxldGUuXG4gKiBAcHJpdmF0ZVxuICovXG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuaW1wb3J0IHsgYm94LCBoYW5kbGVTZW5kLCBoYW5kbGVSZWN2LCBpc0JveCB9IGZyb20gXCIuL2hhbmRsZXJcIjtcblxuLyoqXG4gKiBUaGUgbmFtZSBvZiB0aGUgY2hhbm5lbCByZXR1cm5lZCBmcm9tIGBhd2FpdFxuICoge0BsaW5rIG1vZHVsZTpjc3Auc2VsZWN0fHNlbGVjdH1gIG9yIHNlbnQgdG8gdGhlIGNhbGxiYWNrIGluXG4gKiBge0BsaW5rIG1vZHVsZTpjc3Auc2VsZWN0QXN5bmN8c2VsZWN0QXN5bmN9YCB3aGVuIHRoZSBkZWZhdWx0IGlzIHJldHVybmVkIGFzXG4gKiBpdHMgdmFsdWUuXG4gKlxuICogVGhpcyBvbmx5IGhhcHBlbnMgd2hlbiBhbiBge0BsaW5rIG1vZHVsZTpjc3Auc2VsZWN0fHNlbGVjdH0gL1xuICoge0BsaW5rIG1vZHVsZTpjc3Auc2VsZWN0QXN5bmN8c2VsZWN0QXN5bmN9YCBjYWxsIGlzIHBlcmZvcm1lZCwgYWxsIG9wZXJhdGlvbnNcbiAqIGFyZSBpbml0aWFsbHkgYmxvY2tpbmcsIGFuZCBhIGBkZWZhdWx0YCBvcHRpb24gaXMgc2VudC4gVGhlIGltbWVkaWF0ZVxuICogcmVzcG9uc2UgaW4gdGhhdCBzaXR1YXRpb24gaXMgYHsgdmFsdWU6IG9wdGlvbnMuZGVmYXVsdCwgY2hhbm5lbDogREVGQVVMVCB9YC5cbiAqXG4gKiBAdHlwZSB7U3ltYm9sfVxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqL1xuY29uc3QgREVGQVVMVCA9IFN5bWJvbChcIkRFRkFVTFRcIik7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBoYW5kbGVyIHVzZWQgZm9yIGBzZWxlY3RgIG9wZXJhdGlvbnMuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3AvY2hhbm5lbFxuICogQHBhcmFtIHttb2R1bGU6Y3NwL2NoYW5uZWwuQm94fSBhY3RpdmUgQSBib3hlZCB2YWx1ZSBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlXG4gKiAgICAgaGFuZGxlciBpcyB2YWxpZC4gVGhpcyBpcyBhIGJveGVkIHZhbHVlIGJlY2F1c2UgdGhlIHNlbGVjdC1oYW5kbGluZyBjb2RlXG4gKiAgICAgbmVlZHMgdG8gbWFuaXB1bGF0ZSBpdCBkaXJlY3RseS5cbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC9jaGFubmVsLkhhbmRsZXJDYWxsYmFja30gZm4gVGhlIGNhbGxiYWNrIHRvIGJlIHJ1biB3aGVuXG4gKiAgICAgKGFuZCBpZikgdGhlIG9wZXJhdGlvbiBjb21wbGV0ZXMuXG4gKiBAcmV0dXJuIHttb2R1bGU6Y3NwL2NoYW5uZWwuSGFuZGxlcn0gVGhlIG5ldyBoYW5kbGVyLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gc2VsZWN0SGFuZGxlcihhY3RpdmUsIGZuKSB7XG4gIHJldHVybiBPYmplY3QuY3JlYXRlKG51bGwsIHtcbiAgICBhY3RpdmU6IHtcbiAgICAgIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIGFjdGl2ZS52YWx1ZTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgY29tbWl0OiB7XG4gICAgICB2YWx1ZTogKCkgPT4ge1xuICAgICAgICBhY3RpdmUudmFsdWUgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIGZuO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHJhbmRvbWx5IHNodWZmbGVkIGFycmF5IGNvbnRhaW5pbmcgb25lIG9mIGVhY2ggaW50ZWdlciB2YWx1ZSBmcm9tXG4gKiBgMGAgdG8gYW4gdXBwZXIgbGltaXQuIEl0IGlzIHVzZWQgdG8gcmFuZG9tbHkgc2VsZWN0IGEgY2hhbm5lbCB0byBiZSBhY3RpdmVcbiAqIHdoZW4gbXVsdGlwbGVzIHVuYmxvY2sgaW4gYSBgc2VsZWN0YCBvcGVyYXRpb24uXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3AvY2hhbm5lbFxuICogQHBhcmFtIHtudW1iZXJ9IHVwcGVyIFRoZSB1cHBlciBsaW1pdCBvZiB0aGUgYXJyYXkgdmFsdWVzLCBleGNsdXNpdmUuXG4gKiBAcmV0dXJuIHtudW1iZXJbXX0gQW4gYXJyYXkgb2YgaW50ZWdlcnMgZnJvbSBgMGAgdG8gYHVwcGVyIC0gMWAsIHNodWZmbGVkXG4gKiAgICAgaW50byBhIHJhbmRvbSBvcmRlci5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHJhbmRvbUFycmF5KHVwcGVyKSB7XG4gIGNvbnN0IGFycmF5ID0gW107XG4gIGZvciAobGV0IGsgPSAwOyBrIDwgdXBwZXI7IGsrKykge1xuICAgIGFycmF5LnB1c2goayk7XG4gIH1cbiAgZm9yIChsZXQgaiA9IHVwcGVyIC0gMTsgaiA+IDA7IGotLSkge1xuICAgIGNvbnN0IGkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoaiArIDEpKTtcbiAgICBjb25zdCB0ZW1wID0gYXJyYXlbal07XG4gICAgYXJyYXlbal0gPSBhcnJheVtpXTtcbiAgICBhcnJheVtpXSA9IHRlbXA7XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG4vKipcbiAqIEEgcmVzdWx0IHRoYXQgY29tZXMgZnJvbSBgc2VsZWN0YCBvcGVyYXRpb25zLlxuICpcbiAqIEB0eXBlZGVmIFNlbGVjdFJlc3VsdFxuICogQHByb3BlcnR5IHsqfSB2YWx1ZSBJZiB0aGUgYHNlbGVjdGAgb3BlcmF0aW9uIHJlc3VsdGVkIGluIGEgcmVjZWl2ZSwgdGhpcyBpc1xuICogICAgIHRoZSB2YWx1ZSByZWNlaXZlZCBmcm9tIHRoZSBjaGFubmVsLiBJZiBpdCByZXN1bHRlZCBpbiBhIHNlbmQsIHRoaXMgaXNcbiAqICAgICBgdHJ1ZWAgZm9yIGEgc3VjY2Vzc2Z1bCBzZW5kIGFuZCBgZmFsc2VgIGlmIHRoZSBjaGFubmVsIGNsb3NlZCBmaXJzdC5cbiAqIEBwcm9wZXJ0eSB7bW9kdWxlOmNzcC5DaGFubmVsfSBjaGFubmVsIFRoZSBjaGFubmVsIHVwb24gd2hpY2ggdGhlIHNlbGVjdGVkXG4gKiAgICAgb3BlcmF0aW9uIGhhcHBlbmVkLlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgYSBzZWxlY3QgcmVzdWx0IGZyb20gaXRzIGNvbXBvbmVudCBwcm9wZXJ0aWVzLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwL2NoYW5uZWxcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgSWYgdGhlIGBzZWxlY3RgIG9wZXJhdGlvbiByZXN1bHRlZCBpbiBhIHJlY2VpdmUsIHRoaXMgaXMgdGhlXG4gKiAgICAgdmFsdWUgcmVjZWl2ZWQgZnJvbSB0aGUgY2hhbm5lbC4gSWYgaXQgcmVzdWx0ZWQgaW4gYSBzZW5kLCB0aGlzIGlzIGB0cnVlYFxuICogICAgIGZvciBhIHN1Y2Nlc3NmdWwgc2VuZCBhbmQgYGZhbHNlYCBpZiB0aGUgY2hhbm5lbCBjbG9zZWQgZmlyc3QuXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuQ2hhbm5lbH0gY2hhbm5lbCBUaGUgY2hhbm5lbCB1cG9uIHdoaWNoIHRoZSBzZWxlY3RlZFxuICogICAgIG9wZXJhdGlvbiBoYXBwZW5lZC5cbiAqIEByZXR1cm4ge21vZHVsZTpjc3AuU2VsZWN0UmVzdWx0fSBUaGUgcHJvcGVydGllcyB3cmFwcGVkIGludG8gYW4gb2JqZWN0IGZvclxuICogICAgIG91dHB1dC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHNlbGVjdFJlc3VsdCh2YWx1ZSwgY2hhbm5lbCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuY3JlYXRlKG51bGwpLCB7IHZhbHVlLCBjaGFubmVsIH0pO1xufVxuXG4vKipcbiAqIENvbXBsZXRlcyB0aGUgZmlyc3Qgb3BlcmF0aW9uIGFtb25nIHRoZSBwcm92aWRlZCBvcGVyYXRpb25zIHRoYXQgY29tZXNcbiAqIGF2YWlsYWJsZSwgd2l0aG91dCBibG9ja2luZy5cbiAqXG4gKiBUaGlzIG1lYW5zIHRoYXQgYSBjYWxsIHRvIGBzZWxlY3RBc3luY2AgZG9lcyBub3QgZ28gaW50byBhbiBgYXdhaXRgXG4gKiBleHByZXNzaW9uLCBhbmQgaXQgaXMgbm90IG5lY2Vzc2FyeSB0byB1c2UgaXQgaW5zaWRlIGEgcHJvY2Vzcy4gUmF0aGVyIHRoYW5cbiAqIGJsb2NraW5nIHVudGlsIGFuIG9wZXJhdGlvbiBjb21wbGV0ZXMsIHRoaXMgb25lIHJldHVybnMgaW1tZWRpYXRlbHkgYW5kIHRoZW5cbiAqIGludm9rZXMgdGhlIGNhbGxiYWNrIChpZiBwcm92aWRlZCkgYXMgc29vbiBhcyBvbmUgb2YgdGhlIHN1cHBsaWVkIG9wZXJhdGlvbnNcbiAqIGNvbXBsZXRlcy4gSXQgY2FuIGJlIHJlZ2FyZGVkIGFzIGEgbm9uLWJsb2NraW5nIHZlcnNpb24gb2ZcbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC5zZWxlY3R8c2VsZWN0fWAuXG4gKlxuICogVGhpcyBmdW5jdGlvbiB1c2VzIGFuIG9wZXJhdGlvbnMgbGlzdCB0aGF0J3MgaWRlbnRpY2FsIHRvIHRoZSBvbmUgdXNlZCBieVxuICogYHtAbGluayBtb2R1bGU6Y3NwLnNlbGVjdHxzZWxlY3R9YC4gSXQncyBhbiBhcnJheSBvZiB2YWx1ZXM7IGlmIGEgdmFsdWUgaXMgYVxuICogY2hhbm5lbCwgdGhlbiB0aGF0IG9wZXJhdGlvbiBpcyBhIHRha2Ugb24gdGhhdCBjaGFubmVsLCB3aGlsZSBpZiBpdCdzIGFcbiAqIHR3by1lbGVtZW50IGFycmF5IG9mIGNoYW5uZWwgYW5kIHZhbHVlLCB0aGVuIHRoYXQgb3BlcmF0aW9uIGlzIGEgcHV0IG9mIHRoYXRcbiAqIHZhbHVlIG9udG8gdGhhdCBjaGFubmVsLiBBbGwgb3B0aW9ucyB0aGF0IGFyZSBhdmFpbGFibGUgdG9cbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC5zZWxlY3R8c2VsZWN0fWAgYXJlIGFsc28gYXZhaWxhYmxlIGhlcmUuXG4gKlxuICogVGhlIGNhbGxiYWNrIGlzIGEgZnVuY3Rpb24gb2Ygb25lIHBhcmFtZXRlciwgd2hpY2ggaW4gdGhpcyBjYXNlIGlzIGFuIG9iamVjdFxuICogd2l0aCBgdmFsdWVgIGFuZCBgY2hhbm5lbGAgcHJvcGVydGllcy5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICogQHBhcmFtIHtPYmplY3RbXX0gb3BlcmF0aW9ucyBBIGNvbGxlY3Rpb24gb2YgZWxlbWVudHMgdGhhdCBjb3JyZXNwb25kIHRvIHJlY3ZcbiAqICAgICBhbmQgc2VuZCBvcGVyYXRpb25zLiBBIHJlY3Ygb3BlcmF0aW9uIGlzIHNpZ25pZmllZCBieSBhbiBlbGVtZW50IHRoYXQgaXNcbiAqICAgICBhIGNoYW5uZWwgKHdoaWNoIGlzIHRoZSBjaGFubmVsIHRvIGJlIHJlY2VpdmVkIGZyb20pLiBBIHNlbmQgb3BlcmF0aW9uIGlzXG4gKiAgICAgc3BlY2lmaWVkIGJ5IGFuIGVsZW1lbnQgdGhhdCBpcyBpdHNlbGYgYSB0d28tZWxlbWVudCBhcnJheSwgd2hpY2ggaGFzIGFcbiAqICAgICBjaGFubmVsIGZvbGxvd2VkIGJ5IGEgdmFsdWUgKHdoaWNoIGlzIHRoZSBjaGFubmVsIGFuZCB2YWx1ZSB0byBiZSBzZW50KS5cbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5TZWxlY3RDYWxsYmFja30gY2FsbGJhY2sgQSBmdW5jdGlvbiB0aGF0IGdldHMgaW52b2tlZCB3aGVuXG4gKiAgICAgb25lIG9mIHRoZSBvcGVyYXRpb25zIGNvbXBsZXRlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gQW4gb3B0aW9uYWwgb2JqZWN0IHdoaWNoIGNhbiBjaGFuZ2UgdGhlIGJlaGF2aW9yXG4gKiAgICAgb2YgYHNlbGVjdEFzeW5jYCB0aHJvdWdoIHR3byBwcm9wZXJ0aWVzLlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5wcmlvcml0eT1mYWxzZV0gSWYgYHRydWVgLCB0aGVuIHRoZSBwcmlvcml0eSBvZlxuICogICAgIG9wZXJhdGlvbnMgdG8gY29tcGxldGUgd2hlbiBtb3JlIHRoYW4gb25lIGlzIGltbWVkaWF0ZWx5IGF2YWlsYWJsZSBpcyBhXG4gKiAgICAgcHJpb3JpdHkgYWNjb3JkaW5nIHRvIHBvc2l0aW9uIHdpdGhpbiB0aGUgb3BlcmF0aW9ucyBhcnJheSAoZWFybGllclxuICogICAgIHBvc2l0aW9ucyBoYXZlIHRoZSBoaWdoZXIgcHJpb3JpdHkpLiBJZiBgZmFsc2VgIG9yIG5vdCBwcmVzZW50LCB0aGVcbiAqICAgICBwcmlvcnR5IG9mIG9wZXJhdGlvbiBjb21wbGV0aW9uIGlzIHJhbmRvbS5cbiAqIEBwYXJhbSB7Kn0gW29wdGlvbnMuZGVmYXVsdF0gSWYgc2V0IGFuZCBhbGwgb2YgdGhlIG9wZXJhdGlvbnMgaW5pdGlhbGx5XG4gKiAgICAgYmxvY2ssIHRoZSBgc2VsZWN0QXN5bmNgIGNhbGxzIGl0cyBjYWxsYmFjayBpbW1lZGlhdGVseSB3aXRoIHRoZSB2YWx1ZSBvZlxuICogICAgIHRoaXMgb3B0aW9uICh0aGUgY2hhbm5lbCB3aWxsIGJlIGB7QGxpbmsgbW9kdWxlOmNzcC5ERUZBVUxUfERFRkFVTFR9KWAuXG4gKiAgICAgSWYgbm90IHNldCwgdGhlIGBzZWxlY3RBc3luY2AgY2FsbCB3aWxsIG5vdCBjYWxsIGl0cyBjYWxsYmFjayB1bnRpbCBvbmVcbiAqICAgICBvZiB0aGUgb3BlcmF0aW9ucyBjb21wbGV0ZXMgYW5kIHRoYXQgdmFsdWUgYW5kIGNoYW5uZWwgd2lsbCBiZSB0aGUgb25lc1xuICogICAgIHJldHVybmVkLlxuICovXG5mdW5jdGlvbiBzZWxlY3RBc3luYyhvcHMsIGNhbGxiYWNrID0gKCkgPT4ge30sIG9wdGlvbnMgPSB7fSkge1xuICBjb25zdCBjb3VudCA9IG9wcy5sZW5ndGg7XG4gIGlmIChjb3VudCA9PT0gMCkge1xuICAgIHRocm93IEVycm9yKFwic2VsZWN0IGNhbGxlZCB3aXRoIG5vIG9wZXJhdGlvbnNcIik7XG4gIH1cblxuICBjb25zdCBwcmlvcml0eSA9ICEhb3B0aW9ucy5wcmlvcml0eTtcbiAgY29uc3QgaW5kaWNlcyA9IHByaW9yaXR5ID8gW10gOiByYW5kb21BcnJheShjb3VudCk7XG5cbiAgY29uc3QgYWN0aXZlID0gYm94KHRydWUpO1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZVNlbGVjdEhhbmRsZXIoY2hhbm5lbCkge1xuICAgIHJldHVybiBzZWxlY3RIYW5kbGVyKGFjdGl2ZSwgdmFsdWUgPT4ge1xuICAgICAgY2FsbGJhY2soc2VsZWN0UmVzdWx0KHZhbHVlLCBjaGFubmVsKSk7XG4gICAgfSk7XG4gIH1cblxuICBsZXQgcmVzdWx0O1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgIC8vIENob29zZSBhbiBvcGVyYXRpb24uIElmIGBwcmlvcml0eWAgaXMgdHJ1ZSB0aGVuIGl0J3MgdGhlIG5leHQgaW5kZXgsXG4gICAgLy8gb3RoZXJ3aXNlIGl0J3MgcmFuZG9tXG4gICAgY29uc3Qgb3AgPSBvcHNbcHJpb3JpdHkgPyBpIDogaW5kaWNlc1tpXV07XG4gICAgbGV0IGNoYW5uZWwsIHZhbHVlO1xuXG4gICAgLy8gQXBwbHkgZXZlcnkgb3BlcmF0aW9uIHRvIGl0cyBjaGFubmVsLCBvbmUgYXQgYSB0aW1lXG4gICAgaWYgKEFycmF5LmlzQXJyYXkob3ApKSB7XG4gICAgICBbY2hhbm5lbCwgdmFsdWVdID0gb3A7XG4gICAgICByZXN1bHQgPSBoYW5kbGVTZW5kKGNoYW5uZWwsIHZhbHVlLCBjcmVhdGVTZWxlY3RIYW5kbGVyKGNoYW5uZWwpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2hhbm5lbCA9IG9wO1xuICAgICAgcmVzdWx0ID0gaGFuZGxlUmVjdihjaGFubmVsLCBjcmVhdGVTZWxlY3RIYW5kbGVyKGNoYW5uZWwpKTtcbiAgICB9XG5cbiAgICAvLyBXZSBjaGVjayBmb3IgYm94IGhlcmUgYmVjYXVzZSBhIGJveCBmcm9tIGEgY2hhbm5lbCBpbmRpY2F0ZXMgdGhhdCB0aGVcbiAgICAvLyB2YWx1ZSBpcyBpbW1lZGlhdGVseSBhdmFpbGFibGUgKHRoYXQgdGhlcmUgaXMgbm8gbmVlZCB0byBibG9jayB0byBnZXQgdGhlXG4gICAgLy8gdmFsdWUpLiBJZiB0aGlzIGhhcHBlbnMsIHdlIGV4ZWN1dGUgdGhlIGNhbGxiYWNrIGltbWVkaWF0ZWx5IHdpdGggdGhhdFxuICAgIC8vIHZhbHVlIGFuZCBjaGFubmVsIGFuZCBzdG9wIHF1ZXVlaW5nIG90aGVyIG9wZXJhdGlvbnMuXG4gICAgaWYgKGlzQm94KHJlc3VsdCkpIHtcbiAgICAgIGNhbGxiYWNrKHNlbGVjdFJlc3VsdChyZXN1bHQudmFsdWUsIGNoYW5uZWwpKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIC8vIElmIG5vbmUgb2YgdGhlIG9wZXJhZXRpb25zIGltbWVkaWF0ZWx5IHJldHVybmVkIHZhbHVlcyAodGhleSBhcmUgYWxsXG4gIC8vIGJsb2NrZWQpLCBhbmQgd2UgaGF2ZSBzZXQgYSBkZWZhdWx0IGNoYW5uZWwgb3B0aW9uLCB0aGVuIHJldHVybiB0aGUgdmFsdWVcbiAgLy8gaWYgdGhlIGRlZmF1bHQgY2hhbm5lbCByYXRoZXIgdGhhbiB3YWl0aW5nIGZvciB0aGUgcXVldWVkIG9wZXJhdGlvbnMgdG9cbiAgLy8gY29tcGxldGUuXG4gIGlmIChcbiAgICAhaXNCb3gocmVzdWx0KSAmJlxuICAgIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvcHRpb25zLCBcImRlZmF1bHRcIilcbiAgKSB7XG4gICAgaWYgKGFjdGl2ZS52YWx1ZSkge1xuICAgICAgYWN0aXZlLnZhbHVlID0gZmFsc2U7XG4gICAgICBjYWxsYmFjayhzZWxlY3RSZXN1bHQob3B0aW9ucy5kZWZhdWx0LCBERUZBVUxUKSk7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQ29tcGxldGVzIHRoZSBmaXJzdCBvcGVyYXRpb24gYW1vbmcgdGhlIHByb3ZpZGVkIG9wZXJhdGlvbnMgdGhhdCBjb21lc1xuICogYXZhaWxhYmxlLCBibG9ja2luZyB0aGUgcHJvY2VzcyB1bnRpbCB0aGVuLlxuICpcbiAqIGBvcGVyYXRpb25zYCBpcyBhbiBhcnJheSB3aG9zZSBlbGVtZW50cyBtdXN0IGJlIGNoYW5uZWxzIG9yIHR3by1lbGVtZW50XG4gKiBzdWItYXJyYXlzIG9mIGNoYW5uZWxzIGFuZCB2YWx1ZXMsIGluIGFueSBjb21iaW5hdGlvbi4gQW4gb3BlcmF0aW9uIHRoYXQgaXMgYVxuICogY2hhbm5lbCBpcyBhIHRha2Ugb3BlcmF0aW9uIG9uIHRoYXQgY2hhbm5lbC4gQW4gb3BlcmF0aW9uIHRoYXQgaXMgYVxuICogdHdvLWVsZW1lbnQgYXJyYXkgaXMgYSBwdXQgb3BlcmF0aW9uIG9uIHRoYXQgY2hhbm5lbCB1c2luZyB0aGF0IHZhbHVlLlxuICogRXhhY3RseSBvbmUgb2YgdGhlc2Ugb3BlcmF0aW9ucyB3aWxsIGNvbXBsZXRlLCBhbmQgaXQgd2lsbCBiZSB0aGUgZmlyc3RcbiAqIG9wZXJhdGlvbiB0aGF0IHVuYmxvY2tzLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gKm11c3QqIGJlIGNhbGxlZCBmcm9tIHdpdGhpbiBhbiBgYXN5bmNgIGZ1bmN0aW9uIGFuZCBhcyBwYXJ0IG9mXG4gKiBhbiBgYXdhaXRgIGV4cHJlc3Npb24gaWYgdGhlIHJldHVybiB2YWx1ZSBpcyBuZWVkZWQuXG4gKlxuICogV2hlbiBgc2VsZWN0YCBpcyBjb21wbGV0ZWQgYW5kIGl0cyBwcm9jZXNzIHVuYmxvY2tzLCBpdHMgYGF3YWl0YCBleHByZXNzaW9uXG4gKiBldmFsdWF0ZXMgdG8gYW4gb2JqZWN0IG9mIHR3byBwcm9wZXJ0aWVzLiBUaGUgYHZhbHVlYCBwcm9wZXJ0eSBiZWNvbWVzXG4gKiBleGFjdGx5IHdoYXQgd291bGQgaGF2ZSBiZWVuIHJldHVybmVkIGJ5IHRoZSBlcXVpdmFsZW50IGBhd2FpdCBwdXRgIG9yIGBhd2FpdFxuICogdGFrZWAgb3BlcmF0aW9uOiBhIGJvb2xlYW4gaW4gdGhlIGNhc2Ugb2YgYSBwdXQsIG9yIHRoZSB0YWtlbiB2YWx1ZSBpbiB0aGVcbiAqIGNhc2Ugb2YgYSB0YWtlLiBUaGUgYGNoYW5uZWxgIHByb3BlcnR5IGlzIHNldCB0byB0aGUgY2hhbm5lbCB3aGVyZSB0aGVcbiAqIG9wZXJhdGlvbiBhY3R1YWxseSB0b29rIHBsYWNlLiBUaGlzIHdpbGwgYmUgZXF1aXZhbGVudCB0byB0aGUgY2hhbm5lbCBpbiB0aGVcbiAqIGBvcGVyYXRpb25zYCBhcnJheSB3aGljaCBjb21wbGV0ZWQgZmlyc3QsIGFsbG93aW5nIHRoZSBwcm9jZXNzIHRvIHVuYmxvY2suXG4gKlxuICogSWYgdGhlcmUgaXMgbW9yZSB0aGFuIG9uZSBvcGVyYXRpb24gYWxyZWFkeSBhdmFpbGFibGUgdG8gY29tcGxldGUgd2hlbiB0aGVcbiAqIGNhbGwgdG8gYHNlbGVjdGAgaXMgbWFkZSwgdGhlIG9wZXJhdGlvbiB3aXRoIHRoZSBoaWdoZXN0IHByaW9yaXR5IHdpbGwgYmUgdGhlXG4gKiBvbmUgdG8gY29tcGxldGUuIFJlZ3VsYXJseSwgcHJpb3JpdHkgaXMgbm9uLWRldGVybWluaXN0aWMgKGkuZS4sIGl0J3Mgc2V0XG4gKiByYW5kb21seSkuIEhvd2V2ZXIsIGlmIHRoZSBvcHRpb25zIG9iamVjdCBoYXMgYSBgcHJpb3JpdHlgIHZhbHVlIHNldCB0b1xuICogYHRydWVgLCBwcmlvcml0eSB3aWxsIGJlIGFzc2lnbmVkIGluIHRoZSBvcmRlciBvZiB0aGUgb3BlcmF0aW9ucyBpbiB0aGVcbiAqIHN1cHBsaWVkIGFycmF5LlxuICpcbiAqIElmIGFsbCBvZiB0aGUgb3BlcmF0aW9ucyBtdXN0IGJsb2NrIChpLmUuLCB0aGVyZSBhcmUgbm8gcGVuZGluZyBwdXRzIGZvciB0YWtlXG4gKiBvcGVyYXRpb25zLCBvciB0YWtlcyBmb3IgcHV0IG9wZXJhdGlvbnMpLCBhIGRlZmF1bHQgdmFsdWUgbWF5IGJlIHJldHVybmVkLlxuICogVGhpcyBpcyBvbmx5IGRvbmUgaWYgdGhlcmUgaXMgYSBgZGVmYXVsdGAgcHJvcGVydHkgaW4gdGhlIG9wdGlvbnMgb2JqZWN0LCBhbmRcbiAqIHRoZSB2YWx1ZSBvZiB0aGF0IHByb3BlcnR5IGJlY29tZXMgdGhlIHZhbHVlIHJldHVybmVkIGJ5IGBhd2FpdCBzZWxlY3RgLiBUaGVcbiAqIGNoYW5uZWwgaXMgc2V0IHRvIHRoZSBzcGVjaWFsIHZhbHVlIGB7QGxpbmsgbW9kdWxlOmNzcC5ERUZBVUxUfERFRkFVTFR9YC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICogQHBhcmFtIHtvYmplY3RbXX0gb3BlcmF0aW9ucyBBIGNvbGxlY3Rpb24gb2YgZWxlbWVudHMgdGhhdCBjb3JyZXNwb25kIHRvIHJlY3ZcbiAqICAgICBhbmQgc2VuZCBvcGVyYXRpb25zLiBBIHJlY3Ygb3BlcmF0aW9uIGlzIHNpZ25pZmllZCBieSBhbiBlbGVtZW50IHRoYXQgaXNcbiAqICAgICBhIGNoYW5uZWwgKHdoaWNoIGlzIHRoZSBjaGFubmVsIHRvIGJlIHRha2VuIGZyb20pLiBBIHNlbmQgb3BlcmF0aW9uIGlzXG4gKiAgICAgc3BlY2lmaWVkIGJ5IGFuIGVsZW1lbnQgdGhhdCBpcyBpdHNlbGYgYSB0d28tZWxlbWVudCBhcnJheSwgd2hpY2ggaGFzIGFcbiAqICAgICBjaGFubmVsIGZvbGxvd2VkIGJ5IGEgdmFsdWUgKHdoaWNoIGlzIHRoZSBjaGFubmVsIGFuZCB2YWx1ZSB0byBiZSBzZW50KS5cbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9ucz17fV0gQW4gb3B0aW9uYWwgb2JqZWN0IHdoaWNoIGNhbiBjaGFuZ2UgdGhlIGJlaGF2aW9yXG4gKiAgICAgb2YgYHNlbGVjdGAgdGhyb3VnaCB0d28gcHJvcGVydGllcy5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMucHJpb3JpdHk9ZmFsc2VdIElmIGB0cnVlYCwgdGhlbiB0aGUgcHJpb3JpdHkgb2ZcbiAqICAgICBvcGVyYXRpb25zIHRvIGNvbXBsZXRlIHdoZW4gbW9yZSB0aGFuIG9uZSBpcyBpbW1lZGlhdGVseSBhdmFpbGFibGUgaXMgYVxuICogICAgIHByaW9yaXR5IGFjY29yZGluZyB0byBwb3NpdGlvbiB3aXRoaW4gdGhlIG9wZXJhdGlvbnMgYXJyYXkgKGVhcmxpZXJcbiAqICAgICBwb3NpdGlvbnMgaGF2ZSB0aGUgaGlnaGVyIHByaW9yaXR5KS4gSWYgYGZhbHNlYCBvciBub3QgcHJlc2VudCwgdGhlXG4gKiAgICAgcHJpb3J0eSBvZiBvcGVyYXRpb24gY29tcGxldGlvbiBpcyByYW5kb20uXG4gKiBAcGFyYW0geyp9IFtvcHRpb25zLmRlZmF1bHRdIElmIHNldCBhbmQgYWxsIG9mIHRoZSBvcGVyYXRpb25zIGluaXRpYWxseVxuICogICAgIGJsb2NrLCB0aGUgYHNlbGVjdGAgY2FsbCBjb21wbGV0ZXMgaW1tZWRpYXRlbHkgd2l0aCB0aGUgdmFsdWUgb2YgdGhpc1xuICogICAgIG9wdGlvbiAodGhlIGNoYW5uZWwgd2lsbCBiZSBge0BsaW5rIG1vZHVsZTpjc3AuREVGQVVMVHxERUZBVUxUfSlgLiBJZiBub3RcbiAqICAgICBzZXQsIHRoZSBgc2VsZWN0YCBjYWxsIHdpbGwgYmxvY2sgdW50aWwgb25lIG9mIHRoZSBvcGVyYXRpb25zIGNvbXBsZXRlc1xuICogICAgIGFuZCB0aGF0IHZhbHVlIGFuZCBjaGFubmVsIHdpbGwgYmUgdGhlIG9uZXMgcmV0dXJuZWQuXG4gKiBAcmV0dXJuIHtQcm9taXNlPG1vZHVsZTpjc3AuU2VsZWN0UmVzdWx0Pn0gQSBwcm9taXNlIHRoYXQgd2lsbCByZXNvbHZlIHRvIGFuXG4gKiAgICAgb2JqZWN0IG9mIHR3byBwcm9wZXJ0aWVzOiBgdmFsdWVgIHdpbGwgY29udGFpbiB0aGUgdmFsdWUgdGhhdCB3b3VsZCBoYXZlXG4gKiAgICAgYmVlbiByZXR1cm5lZCBieSB0aGUgY29ycmVzcG9uZGluZyBge0BsaW5rIG1vZHVsZTpjc3Auc2VuZHxzZW5kfWAgb3JcbiAqICAgICBge0BsaW5rIG1vZHVsZTpjc3AucmVjdnxyZWN2fWAgb3BlcmF0aW9uOyBhbmQgYGNoYW5uZWxgIHdpbGwgYmUgYVxuICogICAgIHJlZmVyZW5jZSB0byB0aGUgY2hhbm5lbCB0aGF0IGNvbXBsZXRlZCB0aGUgb3BlcmF0aW9uIHRvIGFsbG93IGBzZWxlY3RgXG4gKiAgICAgdG8gdW5ibG9jay5cbiAqL1xuZnVuY3Rpb24gc2VsZWN0KG9wcywgb3B0aW9ucyA9IHt9KSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICBzZWxlY3RBc3luYyhvcHMsIHJlc29sdmUsIG9wdGlvbnMpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBBIGNvbnZlbmllbmNlIGZ1bmN0aW9uIHRvIHJlYWQgdGhlIHZhbHVlIG91dCBvZiBhIHNlbGVjdCByZXN1bHQuIFRoaXNcbiAqIGZ1bmN0aW9uIGlzIG5vdCBuZWNlc3NhcnkgLSBhZnRlciBhbGwsIGl0J3MgYWJzb2x1dGVseSBhcyBjb3JyZWN0IHRvIHNpbXBseVxuICogdXNlIGByZXN1bHQudmFsdWVgIGluc3RlYWQgb2YgYHZhbHVlKHJlc3VsdClgLCBidXQgaXQncyBwcm92aWRlZCBmb3JcbiAqIGNvbnNpc3RlbmN5IHdpdGggdGhlIHJlc3Qgb2YgdGhlIGZ1bmN0aW9uLWNlbnRyaWMgQVBJLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuU2VsZWN0UmVzdWx0fSByZXN1bHQgVGhlIHJlc3VsdCBjb21pbmcgZnJvbSBhIHNlbGVjdFxuICogICAgIG9wZXJhdGlvbi5cbiAqIEByZXR1cm4geyp9IFRoZSB2YWx1ZSBwcm92aWRlZCBieSB0aGUgc2VsZWN0IG9wZXJhdGlvbi5cbiAqL1xuZnVuY3Rpb24gdmFsdWUocmVzdWx0KSB7XG4gIHJldHVybiByZXN1bHQudmFsdWU7XG59XG5cbi8qKlxuICogQSBjb252ZW5pZW5jZSBmdW5jdGlvbiB0byByZWFkIHRoZSBjaGFubmVsIG91dCBvZiBhIHNlbGVjdCByZXN1bHQuIFRoaXNcbiAqIGZ1bmN0aW9uIGlzIG5vdCBuZWNlc3NhcnkgLSBhZnRlciBhbGwsIGl0J3MgYWJzb2x1dGVseSBhcyBjb3JyZWN0IHRvIHNpbXBseVxuICogdXNlIGByZXN1bHQuY2hhbm5lbGAgaW5zdGVhZCBvZiBgY2hhbm5lbChyZXN1bHQpYCwgYnV0IGl0J3MgcHJvdmlkZWQgZm9yXG4gKiBjb25zaXN0ZW5jeSB3aXRoIHRoZSByZXN0IG9mIHRoZSBmdW5jdGlvbi1jZW50cmljIEFQSS5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICogQHBhcmFtIHttb2R1bGU6Y3NwLlNlbGVjdFJlc3VsdH0gcmVzdWx0IFRoZSByZXN1bHQgY29taW5nIGZyb20gYSBzZWxlY3RcbiAqICAgICBvcGVyYXRpb24uXG4gKiBAcmV0dXJuIHttb2R1bGU6Y3NwLkNoYW5uZWx9IFRoZSBjaGFubmVsIHVwb24gd2hpY2ggdGhlIHNlbGVjdCBvcGVyYXRpb25cbiAqICAgICBjb21wbGV0ZWQuXG4gKi9cbmZ1bmN0aW9uIGNoYW5uZWwocmVzdWx0KSB7XG4gIHJldHVybiByZXN1bHQuY2hhbm5lbDtcbn1cblxuZXhwb3J0IHsgREVGQVVMVCwgc2VsZWN0LCBzZWxlY3RBc3luYywgdmFsdWUsIGNoYW5uZWwgfTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG4vKipcbiAqIFRoaXMgaXMgdGhlIHBsYWNlIHdoZXJlIHRoZSBuZXcgSlMgdGFza3MgYXJlIGFjdHVhbGx5IGNyZWF0ZWQuIEEgcXVldWUgaXNcbiAqIG1haW50YWluZWQgZm9yIHRoZW0sIGFuZCBhcyBlYWNoIGJhdGNoIG9mIHRhc2tzIGFyZSBjb21wbGV0ZWQsIHRoZSBuZXh0IG9uZXNcbiAqIHJ1bi4gQXMgZWFjaCBwcm9jZXNzIHJ1bnMsIGl0IGFkZHMgdGFza3MgdG8gYmUgcnVuIHRvIHRoZSBxdWV1ZSwgd2hpY2ggYXJlXG4gKiBlYWNoIHJ1biBpbiB0aGVpciBvd24gSlMgdGFzay5cbiAqXG4gKiBUaGUgZnVuY3Rpb24gdGhhdCBzcGF3bnMgdGhlIG5ldyBKUyB0YXNrIGRlcGVuZHMgb24gZW52aXJvbm1lbnQuIFRoZVxuICogYHNldEltbWVkaWF0ZWAgZnVuY3Rpb24gaXMgcHJlZmVycmVkIGFzIGl0J3MgdGhlIGZhc3Rlc3QsIG5vdCB3YWl0aW5nIGZvclxuICogZXZlbnQgcXVldWVzIHRvIGVtcHR5IGJlZm9yZSBzcGF3bmluZyB0aGUgbmV3IHByb2Nlc3MuIEhvd2V2ZXIsIGl0IGlzIG5vdCBKU1xuICogc3RhbmRhcmQgYW5kIGN1cnJlbnRseSBvbmx5IHdvcmtzIGluIElFIGFuZCBOb2RlLiBJZiBgc2V0SW1tZWRpYXRlYCBpc24ndFxuICogYXZhaWxhYmxlLCBhbiBhdHRlbXB0IGlzIG1hZGUgdG8gdXNlIGBNZXNzYWdlQ2hhbm5lbGAncyBgb25NZXNzYWdlYCBpcyB0cmllZFxuICogbmV4dC4gSWYgdGhhdCBpcyBhbHNvIG5vdCBhdmFpbGFibGUsIHRoZW4gYHNldFRpbWVvdXRgIHdpdGggYDBgIGRlbGF5IGlzXG4gKiB1c2VkLCB3aGljaCBpcyBhdmFpbGFibGUgZXZlcnl3aGVyZSBidXQgd2hpY2ggaXMgdGhlIGxlYXN0IHBlcmZvcm1hbnQgb2YgYWxsXG4gKiBvZiB0aGUgc29sdXRpb25zLlxuICpcbiAqIFRoZXJlIGFyZSBvdGhlciBwb3NzaWJpbGl0aWVzIGZvciBjcmVhdGluZyBwcm9jZXNzZXMsIGJ1dCB0aGV5IHdlcmUgcmVqZWN0ZWRcbiAqIGFzIG9ic29sZXRlIChgcHJvY2Vzcy5uZXh0VGlja2AgYW5kIGBvbnJlYWR5c3RhdGVjaGFuZ2VgKSBvciB1bm5lY2Vzc2FyeVxuICogKGB3aW5kb3cucG9zdE1lc3NhZ2VgLCB3aGljaCB3b3JrcyBsaWtlIGBNZXNzYWdlQ2hhbm5lbGAgYnV0IGRvZXNuJ3Qgd29yayBpblxuICogV2ViIFdvcmtlcnMpLlxuICpcbiAqIEl0IGlzIG5vdGFibGUgYW5kIGltcG9ydGFudCB0aGF0IHdlIGFjdCBhcyBnb29kIGNpdGl6ZW5zIGhlcmUuIFRoaXNcbiAqIGRpc3BhdGNoZXIgaXMgY2FwYWJsZSBvZiB0YWtpbmcgY29udHJvbCBvZiB0aGUgSmF2YVNjcmlwdCBlbmdpbmUgdW50aWxcbiAqIHRob3VzYW5kcywgbWlsbGlvbnMsIG9yIG1vcmUgdGFza3MgYXJlIGhhbmRsZWQuIEJ1dCB0aGF0IGNvdWxkIGNhdXNlIHRoZVxuICogc3lzdGVtIGV2ZW50IGxvb3AgdG8gaGF2ZSB0byB3YWl0IGFuIHVuYWNjZXB0YWJsZSBhbW91bnQgb2YgdGltZS4gU28gd2UgbGltaXRcbiAqIG91cnNlbHZlcyB0byBhIGJhdGNoIG9mIHRhc2tzIGF0IGEgdGltZSwgYW5kIGlmIHRoZXJlIGFyZSBzdGlsbCBtb3JlIHRvIGJlXG4gKiBydW4sIHdlIGxldCB0aGUgZXZlbnQgbG9vcCBydW4gYmVmb3JlIHRoYXQgbmV4dCBiYXRjaCBpcyBwcm9jZXNzZWQuXG4gKlxuICogVGhlIGRpc3BhdGNoZXIgaXMgKipnbG9iYWwqKi4gVGhlcmUgaXMgYSBzaW5nbGUgaW5zdGFuY2UgdGhhdCBydW5zIGZvciBhbGxcbiAqIGNoYW5uZWxzIGFuZCBwcm9jZXNzZXMuIFRoaXMgaXMgdGhlIG9ubHkgZWxlbWVudCBvZiB0aGUgc3lzdGVtIHRoYXQgd29ya3NcbiAqIGxpa2UgdGhpcy5cbiAqXG4gKiBAbW9kdWxlIGNzcC9kaXNwYXRjaGVyXG4gKiBAc2VlIG1vZHVsZTpjc3AuY29uZmlnXG4gKiBAcHJpdmF0ZVxuICovXG5cbmltcG9ydCB7XG4gIHF1ZXVlIGFzIHEsXG4gIEVNUFRZLFxuICBjb3VudCBhcyBxQ291bnQsXG4gIGRlcXVldWUsXG4gIGVucXVldWVcbn0gZnJvbSBcIm1vZHVsZXMvcXVldWVcIjtcbmNvbnN0IHF1ZXVlID0gcSgpO1xuXG4vKipcbiAqIFRoZSBkaXNwYXRjaCBtZXRob2Qgb3B0aW9uIGluZGljYXRpbmcgdGhhdCBgc2V0SW1tZWRpYXRlYCBzaG91bGQgYmUgdXNlZCB0b1xuICogZGlzcGF0Y2ggdGFza3MuXG4gKlxuICogVGhpcyBpcyB0aGUgZGVmYXVsdCBvcHRpb24uIEZvciBlbnZpcm9ubWVudHMgdGhhdCBkb24ndCBzdXBwb3J0XG4gKiBgc2V0SW1tZWRpYXRlYCwgdGhpcyBmYWxscyBiYWNrIHRvXG4gKiBge0BsaW5rIG1vZHVsZTpjc3AuTUVTU0FHRV9DSEFOTkVMfE1FU1NBR0VfQ0hBTk5FTH1gLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAdHlwZSB7U3ltYm9sfVxuICogQHNlZSB7QGxpbmsgbW9kdWxlOmNzcC5jb25maWd8Y29uZmlnfVxuICovXG5jb25zdCBTRVRfSU1NRURJQVRFID0gU3ltYm9sKFwiU0VUX0lNTUVESUFURVwiKTtcblxuLyoqXG4gKiBUaGUgZGlzcGF0Y2ggbWV0aG9kIG9wdGlvbiBpbmRpY2F0aW5nIHRoYXQgYSBgTWVzc2FnZUNoYW5uZWxgIHNob3VsZCBiZSB1c2VkXG4gKiB0byBkaXNwYXRjaCB0YXNrcy5cbiAqXG4gKiBGb3IgZW52aXJvbm1lbnRzIHRoYXQgZG9uJ3Qgc3VwcG9ydCBgTWVzc2FnZUNoYW5uZWxgLCB0aGlzIGZhbGxzIGJhY2sgdG9cbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC5TRVRfVElNRU9VVHxTRVRfVElNRU9VVH1gLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAdHlwZSB7U3ltYm9sfVxuICogQHNlZSB7QGxpbmsgbW9kdWxlOmNzcC5jb25maWd8Y29uZmlnfVxuICovXG5jb25zdCBNRVNTQUdFX0NIQU5ORUwgPSBTeW1ib2woXCJNRVNTQUdFX0NIQU5ORUxcIik7XG5cbi8qKlxuICogVGhlIGRpc3BhdGNoIG1ldGhvZCBvcHRpb24gaW5kaWNhdGluZyB0aGF0IGBzZXRUaW1lb3V0YCBzaG91bGQgYmUgdXNlZCB0b1xuICogZGlzcGF0Y2ggdGFza3MuXG4gKlxuICogVGhpcyBtZXRob2QgaXMgYWx3YXlzIGF2YWlsYWJsZSwgYnV0IGl0J3MgYWxzbyBhbHdheXMgbGVzcyBlZmZpY2llbnQgdGhhbiBhbnlcbiAqIG90aGVyIG1ldGhvZCwgc28gaXQgc2hvdWxkIGJlIHVzZWQgYXMgYSBsYXN0IHJlc29ydC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICogQHR5cGUge1N5bWJvbH1cbiAqIEBzZWUgIHtAbGluayBtb2R1bGU6Y3NwLmNvbmZpZ3xjb25maWd9XG4gKi9cbmNvbnN0IFNFVF9USU1FT1VUID0gU3ltYm9sKFwiU0VUX1RJTUVPVVRcIik7XG5cbmNvbnN0IG9wdGlvbnMgPSB7XG4gIGJhdGNoU2l6ZTogMTAyNCxcbiAgZGlzcGF0Y2hNZXRob2Q6IFNFVF9JTU1FRElBVEVcbn07XG5cbmxldCBkaXNwYXRjaGVyID0gY3JlYXRlRGlzcGF0Y2hlcigpO1xubGV0IHJ1bm5pbmcgPSBmYWxzZTtcbmxldCBxdWV1ZWQgPSB0cnVlO1xuXG4vKipcbiAqIENyZWF0ZXMgYW5kIHJldHVybnMgYSBmdW5jdGlvbiB0aGF0IGNhbiBiZSB1c2VkIHRvIGRpc3BhdGNoIHRhc2tzLiBUaGVcbiAqIGZ1bmN0aW9uIHRoYXQgaXMgY3JlYXRlZCBkZXBlbmRzIG9uIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgYGRpc3BhdGNoTWV0aG9kYFxuICogdGhhdCBjYW4gYmUgc2V0IHdpdGggYHtAbGluayBtb2R1bGU6Y3NwLmNvbmZpZ3xjb25maWd9YC5cbiAqXG4gKiBAcmV0dXJuIEEgZGlzcGF0Y2hlciBmdW5jdGlvbiB1c2luZyB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGRpc3BhdGNoIG1ldGhvZC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZURpc3BhdGNoZXIoKSB7XG4gIHN3aXRjaCAoY2FsY0Rpc3BhdGNoTWV0aG9kKCkpIHtcbiAgICAvLyBXZSBwcmVmZXIgYHNldEltbWVkaWF0ZWAgaWYgaXQncyBhdmFpbGFibGUsIGJ1dCBpdCdzIG9ubHkgYXZhaWxhYmxlIGluXG4gICAgLy8gTm9kZSBhbmQgc29tZSBvbGQgYnJvd3NlcnMuXG4gICAgY2FzZSBTRVRfSU1NRURJQVRFOlxuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgaWYgKCEocXVldWVkICYmIHJ1bm5pbmcpKSB7XG4gICAgICAgICAgcXVldWVkID0gdHJ1ZTtcbiAgICAgICAgICBzZXRJbW1lZGlhdGUocHJvY2Vzc1Rhc2tzKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgIC8vIE1vc3QgbW9kZXJuIGJyb3dzZXJzIGltcGxlbWVudCBgTWVzc2FnZUNoYW5uZWxgLiBUaGlzIGlzIHRoZSBwcmVmZXJyZWRcbiAgICAvLyBtZXRob2QgaW4gYnJvd3NlciBlbnZpcm9ubWVudHMgd2hlcmUgYHNldEltbWVkaWF0ZWAgaXNuJ3QgYXZhaWxhYmxlLlxuICAgIGNhc2UgTUVTU0FHRV9DSEFOTkVMOiB7XG4gICAgICBjb25zdCBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9ICgpID0+IHByb2Nlc3NUYXNrcygpO1xuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgaWYgKCEocXVldWVkICYmIHJ1bm5pbmcpKSB7XG4gICAgICAgICAgcXVldWVkID0gdHJ1ZTtcbiAgICAgICAgICBjaGFubmVsLnBvcnQyLnBvc3RNZXNzYWdlKDApO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIElmIGFsbCBlbHNlIGZhaWxzLCBqdXN0IHVzZSBgc2V0VGltZW91dGAuIEl0J3MgYSBsaXR0bGUgc2xvd2VyIHRoYW4gdGhlXG4gICAgLy8gb3RoZXIgbWV0aG9kcywgYnV0IGl0J3MgYXZhaWxhYmxlIGV2ZXJ5d2hlcmUuXG4gICAgY2FzZSBTRVRfVElNRU9VVDpcbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGlmICghKHF1ZXVlZCAmJiBydW5uaW5nKSkge1xuICAgICAgICAgIHF1ZXVlZCA9IHRydWU7XG4gICAgICAgICAgc2V0VGltZW91dChwcm9jZXNzVGFza3MsIDApO1xuICAgICAgICB9XG4gICAgICB9O1xuICB9XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgYWN0dWFsIGRpc3BhdGNoIG1ldGhvZCBiYXNlZCBvbiB0aGUgY3VycmVudCBkaXNwYXRjaCBtZXRob2RcbiAqIHNldHRpbmcgYW5kIGVudmlyb25tZW50YWwgYXZhaWxhYmlsaXR5LlxuICpcbiAqIFRoZSBkaXNwYXRjaCBtZXRob2QgaXMgc3RvcmVkIHJhdywgc28gdGhpcyBmdW5jdGlvbiBpcyBuZWNlc3NhcnkgdG8gdGFrZVxuICogZW52aXJvbm1lbnQgaW50byBhY2NvdW50LiBGb3IgZXhhbXBsZSwgaWYgd2UncmUgcnVubmluZyBpbiBhIG1vZGVybiBicm93c2VyXG4gKiAod2hpY2ggZG9lcyBub3QgaGF2ZSBgc2V0SW1tZWRpYXRlYCksXG4gKiBge0BsaW5rIG1vZHVsZTpjc3AuU0VUX0lNTUVESUFURXxTRVRfSU1NRURJQVRFfWAgY2FuIHN0aWxsIGJlIHJlY29yZGVkIGFzIHRoZVxuICogZGlzcGF0Y2ggbWV0aG9kLCBidXQgdGhpcyBmdW5jdGlvbiB3aWxsIHJldHVyblxuICogYHtAbGluayBtb2R1bGU6Y3NwLk1FU1NBR0VfQ0hBTk5FTHxNRVNTQUdFX0NIQU5ORUx9YC5cbiAqXG4gKiBAcmV0dXJuIHtTeW1ib2x9IFRoZSBkaXNwYXRjaCBtZXRob2QgdG8gdXNlIGJhc2VkIG9uIHNldHRpbmcgYW5kIGVudmlyb25tZW50LlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY2FsY0Rpc3BhdGNoTWV0aG9kKCkge1xuICBzd2l0Y2ggKG9wdGlvbnMuZGlzcGF0Y2hNZXRob2QpIHtcbiAgICBjYXNlIE1FU1NBR0VfQ0hBTk5FTDpcbiAgICAgIGlmICh0eXBlb2YgTWVzc2FnZUNoYW5uZWwgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgcmV0dXJuIE1FU1NBR0VfQ0hBTk5FTDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBTRVRfVElNRU9VVDtcblxuICAgIGNhc2UgU0VUX1RJTUVPVVQ6XG4gICAgICByZXR1cm4gU0VUX1RJTUVPVVQ7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgaWYgKHR5cGVvZiBzZXRJbW1lZGlhdGUgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgcmV0dXJuIFNFVF9JTU1FRElBVEU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIE1lc3NhZ2VDaGFubmVsICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIHJldHVybiBNRVNTQUdFX0NIQU5ORUw7XG4gICAgICB9XG4gICAgICByZXR1cm4gU0VUX1RJTUVPVVQ7XG4gIH1cbn1cblxuLyoqXG4gKiBUaGUgaGVhcnQgb2YgdGhlIGRpc3BhdGNoIHByb2Nlc3MsIHRoaXMgaXMgdGhlIGZ1bmN0aW9uIHJ1biBieSB0aGUgZGlzcGF0Y2hcbiAqIGZ1bmN0aW9uIGluIG9yZGVyIHRvIGFjdHVhbGx5IHJ1biBxdWV1ZWQgdGFza3MuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gcHJvY2Vzc1Rhc2tzKCkge1xuICBydW5uaW5nID0gdHJ1ZTtcbiAgcXVldWVkID0gZmFsc2U7XG4gIGxldCBjb3VudCA9IDA7XG5cbiAgZm9yICg7Oykge1xuICAgIGNvbnN0IHRhc2sgPSBkZXF1ZXVlKHF1ZXVlKTtcbiAgICBpZiAodGFzayA9PT0gRU1QVFkpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHRhc2soKTtcblxuICAgIGlmIChjb3VudCA+PSBvcHRpb25zLmJhdGNoU2l6ZSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNvdW50Kys7XG5cbiAgICBydW5uaW5nID0gZmFsc2U7XG4gICAgaWYgKHFDb3VudChxdWV1ZSkpIHtcbiAgICAgIGRpc3BhdGNoZXIoKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuZCBhc3NpZ25zIHRoZSBnbG9iYWwgZGlzcGF0Y2ggZnVuY3Rpb24gYmFzZWQgb24gZGlzcGF0Y2ggbWV0aG9kXG4gKiBzZXR0aW5nIGFuZCBlbnZpcm9ubWVudGFsIGF2YWlsYWJpbGl0eS5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBzZXREaXNwYXRjaGVyKCkge1xuICBkaXNwYXRjaGVyID0gY3JlYXRlRGlzcGF0Y2hlcigpO1xufVxuXG4vKipcbiAqIFRoZSBjb25maWd1cmF0aW9uIG9mIHRoZSBDaGFua28gZGlzcGF0Y2hlci4gQW4gb2JqZWN0IGxpa2UgdGhpcyBpcyByZXR1cm5lZFxuICogZnJvbSB0aGUge0BsaW5rIG1vZHVsZTpjc3AuY29uZmlnfSBmdW5jdGlvbiwgYW5kIGl0IG1heSBhbHNvIGJlIHBhc3NlZCB0byB0aGVcbiAqIHNhbWUgZnVuY3Rpb24gKHRob3VnaCBlYWNoIHByb3BlcnR5IGlzIG9wdGlvbmFsIGluIHRoYXQgY2FzZSkuXG4gKlxuICogQHR5cGVkZWYge29iamVjdH0gRGlzcGF0Y2hlckNvbmZpZ1xuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBiYXRjaFNpemUgVGhlIG1heGltdW0gbnVtYmVyIG9mIHRhc2tzIHRoYXQgdGhlIGRpc3BhdGNoZXJcbiAqICAgICB3aWxsIHJ1biBpbiBhIHNpbmdsZSBiYXRjaC5cbiAqIEBwcm9wZXJ0eSB7U3ltYm9sfSBkaXNwYXRjaE1ldGhvZCBUaGUgbWV0aG9kIHVzZWQgdG8gZGlzcGF0Y2ggYSBwcm9jZXNzIGludG9cbiAqICAgICBhIHNlcGFyYXRlIGxpbmUgb2YgZXhlY3V0aW9uLlxuICovXG5cbi8qKlxuICogU2V0cyBvbmUgb3IgbW9yZSBvZiB0aGUgZGlzcGF0Y2hlciBjb25maWd1cmF0aW9uIG9wdGlvbnMuXG4gKlxuICogVGhpcyBpcyBhZHZhbmNlZCBzZXR0aW5nIGZvciB0aGUgZGlzcGF0Y2hlciB0aGF0IGlzIHJlc3BvbnNpYmxlIGZvciBxdWV1ZWluZ1xuICogdXAgY2hhbm5lbCBvcGVyYXRpb25zIGFuZCBwcm9jZXNzZXMuIEl0IGlzIGxpa2VseSB0aGF0IHRoaXMgZnVuY3Rpb24gd2lsbFxuICogbmV2ZXIgbmVlZCB0byBiZSBjYWxsZWQgaW4gbm9ybWFsIG9wZXJhdGlvbi5cbiAqXG4gKiBJZiBhbnkgcmVjb2duaXplZCBvcHRpb25zIGFyZSBzcGVjaWZpZWQgaW4gdGhlIG9wdGlvbnMgb2JqZWN0IHBhc3NlZCB0b1xuICogYGNvbmZpZ2AsIHRoZW4gdGhlIG9wdGlvbiBpcyBzZXQgdG8gdGhlIHZhbHVlIHNlbnQgaW4uIFByb3BlcnRpZXMgdGhhdCBhcmVuJ3RcbiAqIGFueSBvZiB0aGVzZSBvcHRpb25zIGFyZSBpZ25vcmVkLCBhbmQgYW55IG9mIHRoZXNlIG9wdGlvbnMgdGhhdCBkbyBub3QgYXBwZWFyXG4gKiBpbiB0aGUgcGFzc2VkIG9iamVjdCBhcmUgbGVmdCB3aXRoIHRoZWlyIGN1cnJlbnQgdmFsdWVzLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0cyBBIG1hcHBpbmcgb2Ygb3B0aW9ucyB0byB0aGVpciBuZXcgdmFsdWVzLiBFeHRyYSB2YWx1ZXNcbiAqICAgICAocHJvcGVydGllcyB0aGF0IGFyZSBub3Qgb3B0aW9ucykgYXJlIGlnbm9yZWQuXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdHMuYmF0Y2hTaXplXSBUaGUgbWF4aW11bSBudW1iZXIgb2YgdGFza3MgdGhhdCB0aGVcbiAqICAgICBkaXNwYXRjaGVyIHdpbGwgcnVuIGluIGEgc2luZ2xlIGJhdGNoIChpbml0aWFsbHksIHRoaXMgaXMgMTAyNCkuIElmIHRoZVxuICogICAgIG51bWJlciBvZiBwZW5kaW5nIHRhc2tzIGV4Y2VlZHMgdGhpcywgdGhlIHJlbWFpbmluZyBhcmUgbm90IGRpc2NhcmRlZC5cbiAqICAgICBUaGV5J3JlIHNpbXBseSBydW4gYXMgcGFydCBvZiBhbm90aGVyIGJhdGNoIGFmdGVyIHRoZSBjdXJyZW50IGJhdGNoXG4gKiAgICAgY29tcGxldGVzLlxuICogQHBhcmFtIHtTeW1ib2x9IFtvcHRzLmRpc3BhdGNoTWV0aG9kXSBUaGUgbWV0aG9kIHVzZWQgdG8gZGlzcGF0Y2ggYSBwcm9jZXNzXG4gKiAgICAgaW50byBhIHNlcGFyYXRlIGxpbmUgb2YgZXhlY3V0aW9uLiBQb3NzaWJsZSB2YWx1ZXMgYXJlXG4gKiAgICAgYHtAbGluayBtb2R1bGU6Y3NwLlNFVF9JTU1FRElBVEV8U0VUX0lNTUVESUFURX1gLFxuICogICAgIGB7QGxpbmsgbW9kdWxlOmNzcC5NRVNTQUdFX0NIQU5ORUx8TUVTU0FHRV9DSEFOTkVMfWAsIG9yXG4gKiAgICAgYHtAbGluayBtb2R1bGU6Y3NwLlNFVF9USU1FT1VUfFNFVF9USU1FT1VUfWAsIHdpdGggdGhlIGluaXRpYWwgYmVpbmdcbiAqICAgICBge0BsaW5rIG1vZHVsZTpjc3AuU0VUX0lNTUVESUFURXxTRVRfSU1NRURJQVRFfWAuIElmIGEgbWV0aG9kIGlzIHNldCBidXRcbiAqICAgICBpcyBub3QgYXZhaWxhYmxlIGluIHRoYXQgZW52aXJvbm1lbnQsIHRoZW4gaXQgd2lsbCBzaWxlbnRseSBmYWxsIGJhY2sgdG9cbiAqICAgICB0aGUgbmV4dCBtZXRob2QgdGhhdCBpcyBhdmFpbGFibGUuXG4gKiBAcmV0dXJuIHttb2R1bGU6Y3NwLkRpc3BhdGNoZXJDb25maWd9IFRoZSBjb25maWd1cmF0aW9uIHNldHRpbmdzIGZvciB0aGVcbiAqICAgICBkaXNwYXRjaGVyIGFmdGVyIGFueSBuZXcgdmFsdWVzIGhhdmUgYmVlbiBzZXQuXG4gKi9cbmZ1bmN0aW9uIGNvbmZpZyhvcHRzID0ge30pIHtcbiAgZm9yIChjb25zdCBrZXkgaW4gb3B0aW9ucykge1xuICAgIGlmIChrZXkgaW4gb3B0cykge1xuICAgICAgb3B0aW9uc1trZXldID0gb3B0c1trZXldO1xuXG4gICAgICBpZiAoa2V5ID09PSBcImRpc3BhdGNoTWV0aG9kXCIpIHtcbiAgICAgICAgc2V0RGlzcGF0Y2hlcigpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucyk7XG59XG5cbi8qKlxuICogUXVldWVzIGEgdGFzayB0byBiZSBydW4gYW5kIHN0YXJ0cyB0aGUgZGlzcGF0Y2ggcHJvY2Vzcy5cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSB0YXNrIEEgdGFzayB0byBiZSBxdWV1ZWQgYW5kIHJ1biB0aGUgbmV4dCB0aW1lIGEgYmF0Y2ggb2ZcbiAqICAgICB0YXNrcyBpcyBydW4uXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBkaXNwYXRjaCh0YXNrKSB7XG4gIGVucXVldWUocXVldWUsIHRhc2spO1xuICBkaXNwYXRjaGVyKCk7XG59XG5cbmV4cG9ydCB7IFNFVF9JTU1FRElBVEUsIE1FU1NBR0VfQ0hBTk5FTCwgU0VUX1RJTUVPVVQsIGNvbmZpZywgZGlzcGF0Y2ggfTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG4vKipcbiAqIFByb3ZpZGVzIHNtYWxsIHV0aWxpdHkgZnVuY3Rpb25zIHRvIG1ha2UgaXQgZWFzaWVyIHRvIGludGVyYWN0IHdpdGggYXN5bmNcbiAqIGZ1bmN0aW9ucyBhcyBwcm9jZXNzZXMuXG4gKlxuICogQG1vZHVsZSBjc3AvcHJvY2Vzc1xuICogQHByaXZhdGVcbiAqL1xuXG5pbXBvcnQgeyB0aW1lZENoYW4sIHJlY3ZBc3luYyB9IGZyb20gXCJtb2R1bGVzL2NoYW5uZWxcIjtcblxuLyoqXG4gKiBCbG9ja3MgdGhlIHByb2Nlc3MgZm9yIHRoZSBzcGVjaWZpZWQgdGltZSAoaW4gbWlsbGlzZWNvbmRzKSBhbmQgdGhlbiB1bmJsb2Nrc1xuICogaXQuXG4gKlxuICogVGhpcyBpbXBsZW1lbnRzIGEgZGVsYXksIGJ1dCBvbmUgdGhhdCdzIHN1cGVyaW9yIHRvIG90aGVyIGtpbmRzIG9mIGRlbGF5c1xuICogKGBzZXRUaW1lb3V0YCwgZXRjLikgYmVjYXVzZSBpdCBibG9ja3MgdGhlIHByb2Nlc3MgYW5kIGFsbG93cyB0aGUgZGlzcGF0Y2hlclxuICogdG8gYWxsb3cgb3RoZXIgcHJvY2Vzc2VzIHRvIHJ1biB3aGlsZSB0aGlzIG9uZSB3YWl0cy4gVGhlIGRlZmF1bHQgZGVsYXkgaXMgMCxcbiAqIHdoaWNoIHdpbGwgcmVsZWFzZSB0aGUgcHJvY2VzcyB0byBhbGxvdyBvdGhlcnMgdG8gcnVuIGFuZCB0aGVuIGltbWVkaWF0ZWx5XG4gKiByZS1xdWV1ZSBpdC5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uICptdXN0KiBiZSBjYWxsZWQgZnJvbSB3aXRoaW4gYW4gYGFzeW5jYCBmdW5jdGlvbiBhbmQgYXMgcGFydCBvZlxuICogYW4gYGF3YWl0YCBleHByZXNzaW9uLlxuICpcbiAqIFdoZW4gdGhpcyBmdW5jdGlvbiBjb21wbGV0ZXMgYW5kIGl0cyBwcm9jZXNzIHVuYmxvY2tzLCB0aGUgYGF3YWl0YCBleHByZXNzaW9uXG4gKiBkb2Vzbid0IHRha2Ugb24gYW55IG1lYW5pbmdmdWwgdmFsdWUuIFRoZSBwdXJwb3NlIG9mIHRoaXMgZnVuY3Rpb24gaXMgc2ltcGx5XG4gKiB0byBkZWxheSwgbm90IHRvIGNvbW11bmljYXRlIGFueSBkYXRhLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcGFyYW0ge251bWJlcn0gW2RlbGF5PTBdIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRoYXQgdGhlIHByb2Nlc3Mgd2lsbFxuICogICAgIGJsb2NrIGZvci4gQXQgdGhlIGVuZCBvZiB0aGF0IHRpbWUsIHRoZSBwcm9jZXNzIGlzIGFnYWluIGVsaWdpYmxlIHRvIGJlXG4gKiAgICAgcnVuIGJ5IHRoZSBkaXNwYXRjaGVyLiBJZiB0aGlzIGlzIG1pc3Npbmcgb3Igc2V0IHRvIGAwYCwgdGhlIHByb2Nlc3Mgd2lsbFxuICogICAgIGNlZGUgZXhlY3V0aW9uIHRvIHRoZSBuZXh0IG9uZSBidXQgaW1tZWRpYXRlbHkgcmVxdWV1ZSBpdHNlbGYgdG8gYmUgcnVuXG4gKiAgICAgYWdhaW4uXG4gKiBAcmV0dXJuIHtQcm9taXNlfSBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIG5vIG1lYW5pbmdmdWwgcmVzdWx0IHdoZW4gdGhlXG4gKiAgICAgdGltZSBoYXMgZWxhcHNlZC5cbiAqL1xuZnVuY3Rpb24gc2xlZXAoZGVsYXkgPSAwKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICBjb25zdCBjaCA9IHRpbWVkQ2hhbihkZWxheSk7XG4gICAgcmVjdkFzeW5jKGNoLCByZXNvbHZlKTtcbiAgfSk7XG59XG5cbi8qKlxuICogSW52b2tlcyBhbiBhc3luYyBmdW5jdGlvbiBhY3RpbmcgYXMgYSBwcm9jZXNzLlxuICpcbiAqIFRoaXMgaXMgcHVyZWx5IGEgY29udmVuaWVuY2UgZnVuY3Rpb24sIGRyaXZlbiBieSB0aGUgZmFjdCB0aGF0IGl0J3MgbmVjZXNzYXJ5XG4gKiB0byB1c2UgYW4gSUlGRSB0byBpbnZva2UgYW4gYW5vbnltb3VzIGFzeW5jIGZ1bmN0aW9uLCBhbmQgdGhhdCdzIG5vdCB2ZXJ5XG4gKiBhZXN0aGV0aWNhbGx5IHBsZWFzaW5nLiBJdCBkb2VzIG5vIG1vcmUgdGhhbiBpbnZva2UgdGhlIHBhc3NlZCBmdW5jdGlvbiwgYnV0XG4gKiB0aGF0IGF0IGxlYXN0IHJlbGVhc2VzIHVzIGZyb20gdGhlIG5lZWQgdG8gcHV0IHRoZSBlbXB0eSBwYXJlbnRoZXNlcyBhZnRlclxuICogdGhlIGZ1bmN0aW9uIGRlZmluaXRpb24uXG4gKlxuICogQSBuYW1lZCBhc3luYyBmdW5jdGlvbiBjYW4gc2ltcGx5IGJlIGludm9rZWQgKHdpdGhvdXQgYmVpbmcgYW4gSUlGRSkgYW5kXG4gKiBkb2Vzbid0IGJlbmVmaXQgZnJvbSB0aGlzIGNvbnZlbmllbmNlLlxuICpcbiAqIEFub255bW91cyBwcm9jZXNzIHdpdGhvdXQgYGdvYDpcbiAqIGBgYFxuICogKGFzeW5jICgpID0+IHtcbiAqICAgLi4uIGRvIHNvbWUgcHJvY2VzcyBzdHVmZiBoZXJlIC4uLlxuICogfSkoKTtcbiAqIGBgYFxuICogQW5vbnltb3VzIHByb2Nlc3Mgd2l0aCBgZ29gOlxuICogYGBgXG4gKiBnbyhhc3luYyAoKSA9PiB7XG4gKiAgIC4uLiBkbyBzb21lIHByb2Nlc3Mgc3R1ZmYgaGVyZSAuLi5cbiAqIH0pO1xuICogYGBgXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuIFRoZSBhc3luYyBmdW5jdGlvbiBiZWluZyB1c2VkIGFzIGEgcHJvY2Vzcy5cbiAqIEBwYXJhbSB7Li4uKn0gYXJncyBBcmd1bWVudHMgdGhhdCBhcmUgc2VudCB0byB0aGUgYXN5bmMgZnVuY3Rpb24gd2hlbiBpdCdzXG4gKiAgICAgaW52b2tlZC5cbiAqIEByZXR1cm4ge1Byb21pc2V9IFRoZSBwcm9taXNlIHJldHVybmVkIGJ5IHRoZSBhc3luYyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gZ28oZm4sIC4uLmFyZ3MpIHtcbiAgcmV0dXJuIGZuKC4uLmFyZ3MpO1xufVxuXG4vKipcbiAqIEpvaW5zIGFsbCBvZiB0aGUgcHJvdmlkZWQgcHJvY2Vzc2VzIGludG8gYSBzaW5nbGUgcHJvY2VzcywgcmV0dXJuaW5nIGFcbiAqIHByb21pc2UgdGhhdCB3cmFwcyBhbGwgb2YgdGhlIGluZGl2aWR1YWwgcHJvY2Vzc2VzJyBwcm9taXNlcy4gUHV0dGluZyB0aGlzIGluXG4gKiBhbiBgYXdhaXRgIHN0YXRlbWVudCB3aWxsIGJsb2NrIHVudGlsIGFsbCBvZiB0aGUgcHJvY2Vzc2VzIGNvbXBsZXRlLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcGFyYW0gey4uLmZ1bmN0aW9ufSBmbnMgQW55IG51bWJlciBvZiBhc3luYyBmdW5jdGlvbnMgd2hvc2UgcmVzb2x1dGlvbnMgYXJlXG4gKiAgICAgYmVpbmcgd2FpdGVkIGZvci5cbiAqIEByZXR1cm4ge1Byb21pc2V9IEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gYWxsIG9mIHRoZSBwcm9jZXNzZXMgcHJvbWlzZXNcbiAqICAgICByZXNvbHZlLlxuICovXG5mdW5jdGlvbiBqb2luKC4uLmZucykge1xuICByZXR1cm4gUHJvbWlzZS5hbGwoZm5zKTtcbn1cblxuZXhwb3J0IHsgc2xlZXAsIGdvLCBqb2luIH07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuLyoqXG4gKiBQcm92aWRlcyBhbiBlZmZpY2llbnQgZ2VuZXJhbC1wdXJwb3NlIHF1ZXVlLlxuICpcbiAqIEBtb2R1bGUgY3NwL3F1ZXVlXG4gKiBAcHJpdmF0ZVxuICovXG5cbi8qKlxuICogQSBnZW5lcmFsIHB1cnBvc2UsIGhpZ2hseSBlZmZpY2llbnQgSmF2YVNjcmlwdCBxdWV1ZS4gSXQgaXMgYmFja2VkIGJ5IGFcbiAqIEphdmFTY3JpcHQgYXJyYXksIGJ1dCBpdCBkb2VzIG5vdCB1c2UgYHVuc2hpZnRgIHRvIHRha2UgZWxlbWVudHMgb2ZmIHRoZVxuICogYXJyYXkgYmVjYXVzZSB1bnNoaWZ0IGNhdXNlcyBlbGVtZW50cyB0byBiZSBjb3BpZWQgZXZlcnkgdGltZSBpdCdzIHVzZWQuXG4gKiBJbnN0ZWFkLCBhIHBvaW50ZXIgaXMgbWFpbnRhaW5lZCB0aGF0IGtlZXBzIHRyYWNrIG9mIHRoZSBsb2NhdGlvbiBvZiB0aGUgbmV4dFxuICogZWxlbWVudCB0byBiZSBkZXF1ZXVlZCwgYW5kIHdoZW4gdGhhdCBkZXF1ZXVlIGhhcHBlbnMsIHRoZSBwb2ludGVyIHNpbXBseVxuICogbW92ZXMuIFdoZW4gdGhlIGVtcHR5IHNwYWNlIGF0IHRoZSBoZWFkIG9mIHRoZSBhcnJheSBnZXRzIGxhcmdlIGVub3VnaCwgaXQnc1xuICogcmVtb3ZlZCBieSBhIHNpbmdsZSBzbGljZSBvcGVyYXRpb24uXG4gKlxuICogUHV0dGluZyBlbGVtZW50cyBpbnRvIHRoZSBxdWV1ZSBpcyBqdXN0IGRvbmUgd2l0aCBhIGJhc2ljIGBwdXNoYCwgd2hpY2ggKmlzKlxuICogaGlnaGx5IGVmZmljaWVudC5cbiAqXG4gKiBUaGlzIHR5cGUgb2YgcXVldWUgaXMgcG9zc2libGUgaW4gSmF2YVNjcmlwdCBiZWNhdXNlIEpTIGFycmF5cyBhcmUgcmVzaXphYmxlLlxuICogSW4gbGFuZ3VhZ2VzIHdpdGggZml4ZWQtc2l6ZSBhcnJheXMsIGEgcmVzaXppbmcgb3BlcmF0aW9uIHdvdWxkIGhhdmUgdG8gYmVcbiAqIHJ1biBlYWNoIHRpbWUgdGhlIHF1ZXVlIGZpbGxzLlxuICpcbiAqIEBuYW1lc3BhY2UgUXVldWVcbiAqIEBwcml2YXRlXG4gKi9cblxuLyoqXG4gKiBUaGUgdmFsdWUgcmV0dXJuZWQgd2hlbiBhIHF1ZXVlIGlzIHJlYWQgd2hlbiBpdCdzIGVtcHR5LlxuICpcbiAqIFRoaXMgc3BlY2lhbCB2YWx1ZSBpcyB1c2VkIGJlY2F1c2UgYG51bGxgIGFuZCBgdW5kZWZpbmVkYCBhcmUgcG9zc2libGVcbiAqIGxlZ2l0aW1hdGUgdmFsdWVzIHRoYXQgY2FuIGJlIHN0b3JlZCBpbiBhIHF1ZXVlLiBBbm90aGVyIG9wdGlvbiBpcyB0byB1c2VcbiAqIHNvbWUga2luZCBvZiBgTWF5YmVgIG9yIGBPcHRpb25gIHR5cGUsIGJ1dCB0aGF0IHJlcXVpcmVzIG1vcmUgZWZmb3J0IG9uIHRoZVxuICogcGFydCBvZiB0aGUgZW5kIHVzZXIgdG8gaW50ZXJmYWNlIHdpdGguXG4gKlxuICogQHR5cGUge1N5bWJvbH1cbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKi9cbmNvbnN0IEVNUFRZID0gU3ltYm9sKFwiRU1QVFlcIik7XG5cbi8qKlxuICogQSBtYXJrZXIgcHJvcGVydHkgbmFtZSB0byBpbmRpY2F0ZSB0aGF0IGFuIG9iamVjdCBpcyBpbiBmYWN0IGEgcXVldWUuXG4gKlxuICogQSBxdWV1ZSBoYXMgYSBwcm9wZXJ0eSB3aXRoIHRoaXMgbmFtZSB3aG9zZSByZWFkb25seSB2YWx1ZSBpcyBzZXQgdG8gYHRydWVgLlxuICogVGhpcyBpcyBub3QgbWVhbnQgdG8gYmUgcmVhZCBleGNlcHQgYnkgdGhlXG4gKiBge0BsaW5rIG1vZHVsZTpxdWV1ZS5pc1F1ZXVlfGlzUXVldWV9YCBmdW5jdGlvbi5cbiAqXG4gKiBAdHlwZSB7U3ltYm9sfVxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgUVVFVUUgPSBTeW1ib2woXCJRVUVVRVwiKTtcblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgYW4gb2JqZWN0IGlzIGEgcXVldWUuXG4gKlxuICogQHBhcmFtIHsqfSBvYmogVGhlIG9iamVjdCB0byBiZSB0ZXN0ZWQuXG4gKiBAcmV0dXJuIHtib29sZWFufSBFaXRoZXIgYHRydWVgIGlmIHRoZSBvYmplY3QgaXMgYSBxdWV1ZSBvciBgZmFsc2VgIGlmIGl0IGlzXG4gKiBub3QuXG4gKi9cbmZ1bmN0aW9uIGlzUXVldWUob2JqKSB7XG4gIHJldHVybiAhIW9iaj8uW1FVRVVFXTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IHF1ZXVlLiBUaGlzIHF1ZXVlIGlzIGNyZWF0ZWQgZW1wdHksIHdpdGggYSBiYWNraW5nIGFycmF5IG9mXG4gKiBsZW5ndGggMC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcC9xdWV1ZVxuICogQHJldHVybnMge21vZHVsZTpjc3AvcXVldWV+UXVldWV9IEEgbmV3LCBlbXB0eSBxdWV1ZS5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHF1ZXVlKCkge1xuICByZXR1cm4gT2JqZWN0LmNyZWF0ZShudWxsLCB7XG4gICAgc3RvcmU6IHtcbiAgICAgIHZhbHVlOiBbXSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSxcblxuICAgIHBvaW50ZXI6IHtcbiAgICAgIHZhbHVlOiAwLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9LFxuXG4gICAgW1FVRVVFXToge1xuICAgICAgdmFsdWU6IHRydWVcbiAgICB9XG4gIH0pO1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIG51bWJlciBvZiBlbGVtZW50cyBzdG9yZWQgaW4gYSBxdWV1ZS4gVGhpcyBtYXkgb3IgbWF5IG5vdCBlcXVhbFxuICogdGhlIGxlbmd0aCBvZiB0aGUgYmFja2luZyBzdG9yZSwgYXMgdGhlcmUgaXMgb2Z0ZW4gZW1wdHkgc3BhY2UgYXQgdGhlIGhlYWQgb2ZcbiAqIHRoZSBiYWNraW5nIHN0b3JlLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwL3F1ZXVlXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AvcXVldWV+UXVldWV9IHF1ZXVlIFRoZSBxdWV1ZSB3aG9zZSBpdGVtcyBhcmUgYmVpbmdcbiAqICAgICBjb3VudGVkLlxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgbnVtYmVyIG9mIGl0ZW1zIGluIHRoZSBxdWV1ZS5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNvdW50KHF1ZXVlKSB7XG4gIHJldHVybiBxdWV1ZS5zdG9yZS5sZW5ndGggLSBxdWV1ZS5wb2ludGVyO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhIHF1ZXVlIGlzIGVtcHR5LlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwL3F1ZXVlXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AvcXVldWV+UXVldWV9IHF1ZXVlIFRoZSBxdWV1ZSBiZWluZyBjaGVja2VkIGZvciBlbXB0aW5lc3MuXG4gKiBAcmV0dXJuIHtib29sZWFufSBFaXRoZXIgYHRydWVgIGlmIHRoZSBxdWV1ZSBpcyBlbXB0eSBvciBgZmFsc2VgIGlmIGl0IGlzXG4gKiAgICAgbm90LlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaXNFbXB0eShxdWV1ZSkge1xuICByZXR1cm4gcXVldWUuc3RvcmUubGVuZ3RoID09PSAwO1xufVxuXG4vKipcbiAqIEFkZHMgYW4gaXRlbSB0byBhIHF1ZXVlLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwL3F1ZXVlXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AvcXVldWV+UXVldWV9IHF1ZXVlIFRoZSBxdWV1ZSB3aGljaCBpcyBoYXZpbmcgYW4gaXRlbSBhZGRlZFxuICogICAgIHRvIGl0LlxuICogQHBhcmFtIHsqfSBpdGVtIFRoZSBpdGVtIGJlaW5nIGFkZGVkIHRvIHRoZSBxdWV1ZS5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGVucXVldWUocXVldWUsIGl0ZW0pIHtcbiAgcXVldWUuc3RvcmUucHVzaChpdGVtKTtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFuIGl0ZW0gZnJvbSBhIHF1ZXVlIGFuZCByZXR1cm5zIHRoYXQgaXRlbS4gSWYgdGhlIHJlbW92YWwgY2F1c2VzIHRoZVxuICogYW1vdW50IG9mIGVtcHR5IHNwYWNlIGF0IHRoZSBoZWFkIG9mIHRoZSBiYWNraW5nIHN0b3JlIHRvIGV4Y2VlZCBhIHRocmVzaG9sZCxcbiAqIHRoYXQgZW1wdHkgc3BhY2UgaXMgcmVtb3ZlZC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcC9xdWV1ZVxuICogQHBhcmFtIHttb2R1bGU6Y3NwL3F1ZXVlflF1ZXVlfSBxdWV1ZSBUaGUgcXVldWUgd2hvc2Ugb2xkZXN0IGl0ZW0gaXMgdG8gYmVcbiAqICAgICByZW1vdmVkLlxuICogQHJldHVybiB7Kn0gVGhlIG9sZGVzdCBzdG9yZWQgaXRlbSBpbiB0aGUgcXVldWUuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBkZXF1ZXVlKHF1ZXVlKSB7XG4gIGlmIChxdWV1ZS5zdG9yZS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gRU1QVFk7XG4gIH1cblxuICBjb25zdCBpdGVtID0gcXVldWUuc3RvcmVbcXVldWUucG9pbnRlcl07XG4gIC8vIFJlbW92ZXMgdGhlIGl0ZW1zIGluIHRoZSBiYWNraW5nIHN0b3JlIGJlZm9yZSB0aGUgY3VycmVudCBwb2ludGVyLCBpZiB0aGVyZVxuICAvLyBpcyBlbm91Z2ggXCJlbXB0eVwiIHNwYWNlIGJlZm9yZSB0aGUgcG9pbnRlciB0byBqdXN0aWZ5IGl0IChpLmUuLCB0aGUgdW51c2VkXG4gIC8vIHBvcnRpb24gaXMgYXQgbGVhc3QgaGFsZiBhcyBsYXJnZSBhcyB0aGUgdXNlZCBwb3J0aW9uKVxuICBpZiAoKytxdWV1ZS5wb2ludGVyICogMiA+PSBxdWV1ZS5zdG9yZS5sZW5ndGgpIHtcbiAgICBxdWV1ZS5zdG9yZSA9IHF1ZXVlLnN0b3JlLnNsaWNlKHF1ZXVlLnBvaW50ZXIpO1xuICAgIHF1ZXVlLnBvaW50ZXIgPSAwO1xuICB9XG4gIHJldHVybiBpdGVtO1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIG5leHQgaXRlbSBpbiBhIHF1ZXVlIHdpdGhvdXQgcmVtb3ZpbmcgaXQuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3AvcXVldWVcbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC9xdWV1ZX5RdWV1ZX0gcXVldWUgVGhlIHF1ZXVlIHdob3NlIG9sZGVzdCBpdGVtIGlzIHRvIGJlXG4gKiAgICAgcGVla2VkIGF0LlxuICogQHJldHVybiB7Kn0gVGhlIG9sZGVzdCBpdGVtIHN0b3JlZCBpbiB0aGUgcXVldWUuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBwZWVrKHF1ZXVlKSB7XG4gIHJldHVybiBxdWV1ZS5zdG9yZS5sZW5ndGggPT09IDAgPyBFTVBUWSA6IHF1ZXVlLnN0b3JlW3F1ZXVlLnBvaW50ZXJdO1xufVxuXG4vKipcbiAqIEZpbHRlcnMgb3V0IGFueSBpdGVtIGluIGEgcXVldWUgdGhhdCBkb2VzIG5vdCBjYXVzZSB0aGUgc3VwcGxpZWQgcHJlZGljYXRlXG4gKiBmdW5jdGlvbiB0byByZXR1cm4gYHRydWVgIHdoZW4gcGFzc2VkIHRoYXQgaXRlbS4gVGhpcyBpcyBub3QgZXhhY3RseSBhXG4gKiBnZW5lcmFsIHB1cnBvc2UgcXVldWUgb3BlcmF0aW9uLCBidXQgd2UgbmVlZCBpdCB3aXRoIGNoYW5uZWxzIHRoYXQgd2lsbFxuICogb2NjYXNpb25hbGx5IHdhbnQgdG8gZ2V0IHJpZCBvZiBpbmFjdGl2ZSBoYW5kbGVycy5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcC9xdWV1ZVxuICogQHBhcmFtIHttb2R1bGU6Y3NwL3F1ZXVlflF1ZXVlfSBxdWV1ZSBUaGUgcXVldWUgYmVpbmcgZmlsdGVyZWQuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmbiBUaGUgcHJlZGljYXRlIGZ1bmN0aW9uIHRoYXQgZGV0ZXJtaW5lcyB3aGV0aGVyIGFuXG4gKiAgICAgZWxlbWVudCByZW1haW5zIGluIHRoZSBxdWV1ZS5cbiAqL1xuZnVuY3Rpb24gZmlsdGVyKHF1ZXVlLCBwcmVkaWNhdGUpIHtcbiAgZm9yIChsZXQgaSA9IDAsIGVuZCA9IGNvdW50KHF1ZXVlKTsgaSA8IGVuZDsgaSsrKSB7XG4gICAgY29uc3QgaXRlbSA9IGRlcXVldWUocXVldWUpO1xuICAgIGlmIChwcmVkaWNhdGUoaXRlbSkpIHtcbiAgICAgIGVucXVldWUocXVldWUsIGl0ZW0pO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQge1xuICBFTVBUWSxcbiAgcXVldWUsXG4gIGlzUXVldWUsXG4gIGNvdW50LFxuICBpc0VtcHR5LFxuICBlbnF1ZXVlLFxuICBkZXF1ZXVlLFxuICBwZWVrLFxuICBmaWx0ZXJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9