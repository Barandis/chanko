(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ops"] = factory();
	else
		root["ops"] = factory();
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

/***/ "../../node_modules/@babel/runtime/helpers/asyncIterator.js":
/*!*******************************************************************************************************!*\
  !*** /home/barandis/Development/projects/chanko/node_modules/@babel/runtime/helpers/asyncIterator.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _asyncIterator(iterable) {
  var method;

  if (typeof Symbol !== "undefined") {
    if (Symbol.asyncIterator) {
      method = iterable[Symbol.asyncIterator];
      if (method != null) return method.call(iterable);
    }

    if (Symbol.iterator) {
      method = iterable[Symbol.iterator];
      if (method != null) return method.call(iterable);
    }
  }

  throw new TypeError("Object is not async iterable");
}

module.exports = _asyncIterator;

/***/ }),

/***/ "../csp/lib/chanko-csp.js":
/*!********************************!*\
  !*** ../csp/lib/chanko-csp.js ***!
  \********************************/
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
      "../../node_modules/@babel/runtime/helpers/AsyncGenerator.js":
      /*!********************************************************************************************************!*\
        !*** /home/barandis/Development/projects/chanko/node_modules/@babel/runtime/helpers/AsyncGenerator.js ***!
        \********************************************************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        var AwaitValue = __webpack_require__(
        /*! ./AwaitValue */
        "../../node_modules/@babel/runtime/helpers/AwaitValue.js");

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
        /***/
      },

      /***/
      "../../node_modules/@babel/runtime/helpers/AwaitValue.js":
      /*!****************************************************************************************************!*\
        !*** /home/barandis/Development/projects/chanko/node_modules/@babel/runtime/helpers/AwaitValue.js ***!
        \****************************************************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
        function _AwaitValue(value) {
          this.wrapped = value;
        }

        module.exports = _AwaitValue;
        /***/
      },

      /***/
      "../../node_modules/@babel/runtime/helpers/awaitAsyncGenerator.js":
      /*!*************************************************************************************************************!*\
        !*** /home/barandis/Development/projects/chanko/node_modules/@babel/runtime/helpers/awaitAsyncGenerator.js ***!
        \*************************************************************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        var AwaitValue = __webpack_require__(
        /*! ./AwaitValue */
        "../../node_modules/@babel/runtime/helpers/AwaitValue.js");

        function _awaitAsyncGenerator(value) {
          return new AwaitValue(value);
        }

        module.exports = _awaitAsyncGenerator;
        /***/
      },

      /***/
      "../../node_modules/@babel/runtime/helpers/wrapAsyncGenerator.js":
      /*!************************************************************************************************************!*\
        !*** /home/barandis/Development/projects/chanko/node_modules/@babel/runtime/helpers/wrapAsyncGenerator.js ***!
        \************************************************************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        var AsyncGenerator = __webpack_require__(
        /*! ./AsyncGenerator */
        "../../node_modules/@babel/runtime/helpers/AsyncGenerator.js");

        function _wrapAsyncGenerator(fn) {
          return function () {
            return new AsyncGenerator(fn.apply(this, arguments));
          };
        }

        module.exports = _wrapAsyncGenerator;
        /***/
      },

      /***/
      "../../node_modules/process/browser.js":
      /*!**********************************************************************************!*\
        !*** /home/barandis/Development/projects/chanko/node_modules/process/browser.js ***!
        \**********************************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
        // shim for using process in browser
        var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
        // don't break things.  But we need to wrap it in a try catch in case it is
        // wrapped in strict mode code which doesn't define any globals.  It's inside a
        // function because try/catches deoptimize in certain engines.

        var cachedSetTimeout;
        var cachedClearTimeout;

        function defaultSetTimout() {
          throw new Error('setTimeout has not been defined');
        }

        function defaultClearTimeout() {
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
        })();

        function runTimeout(fun) {
          if (cachedSetTimeout === setTimeout) {
            //normal enviroments in sane situations
            return setTimeout(fun, 0);
          } // if setTimeout wasn't available but was latter defined


          if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
            cachedSetTimeout = setTimeout;
            return setTimeout(fun, 0);
          }

          try {
            // when when somebody has screwed with setTimeout but no I.E. maddness
            return cachedSetTimeout(fun, 0);
          } catch (e) {
            try {
              // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
              return cachedSetTimeout.call(null, fun, 0);
            } catch (e) {
              // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
              return cachedSetTimeout.call(this, fun, 0);
            }
          }
        }

        function runClearTimeout(marker) {
          if (cachedClearTimeout === clearTimeout) {
            //normal enviroments in sane situations
            return clearTimeout(marker);
          } // if clearTimeout wasn't available but was latter defined


          if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
            cachedClearTimeout = clearTimeout;
            return clearTimeout(marker);
          }

          try {
            // when when somebody has screwed with setTimeout but no I.E. maddness
            return cachedClearTimeout(marker);
          } catch (e) {
            try {
              // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
              return cachedClearTimeout.call(null, marker);
            } catch (e) {
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

          while (len) {
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
        }; // v8 likes predictible objects


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

        process.listeners = function (name) {
          return [];
        };

        process.binding = function (name) {
          throw new Error('process.binding is not supported');
        };

        process.cwd = function () {
          return '/';
        };

        process.chdir = function (dir) {
          throw new Error('process.chdir is not supported');
        };

        process.umask = function () {
          return 0;
        };
        /***/

      },

      /***/
      "../../node_modules/setimmediate/setImmediate.js":
      /*!********************************************************************************************!*\
        !*** /home/barandis/Development/projects/chanko/node_modules/setimmediate/setImmediate.js ***!
        \********************************************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        /* WEBPACK VAR INJECTION */
        (function (global, process) {
          (function (global, undefined) {
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
              } // Copy function arguments


              var args = new Array(arguments.length - 1);

              for (var i = 0; i < args.length; i++) {
                args[i] = arguments[i + 1];
              } // Store and register the task


              var task = {
                callback: callback,
                args: args
              };
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
              registerImmediate = function (handle) {
                process.nextTick(function () {
                  runIfPresent(handle);
                });
              };
            }

            function canUsePostMessage() {
              // The test against `importScripts` prevents this implementation from being installed inside a web worker,
              // where `global.postMessage` means something completely different and can't be used for this purpose.
              if (global.postMessage && !global.importScripts) {
                var postMessageIsAsynchronous = true;
                var oldOnMessage = global.onmessage;

                global.onmessage = function () {
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

              var onGlobalMessage = function (event) {
                if (event.source === global && typeof event.data === "string" && event.data.indexOf(messagePrefix) === 0) {
                  runIfPresent(+event.data.slice(messagePrefix.length));
                }
              };

              if (global.addEventListener) {
                global.addEventListener("message", onGlobalMessage, false);
              } else {
                global.attachEvent("onmessage", onGlobalMessage);
              }

              registerImmediate = function (handle) {
                global.postMessage(messagePrefix + handle, "*");
              };
            }

            function installMessageChannelImplementation() {
              var channel = new MessageChannel();

              channel.port1.onmessage = function (event) {
                var handle = event.data;
                runIfPresent(handle);
              };

              registerImmediate = function (handle) {
                channel.port2.postMessage(handle);
              };
            }

            function installReadyStateChangeImplementation() {
              var html = doc.documentElement;

              registerImmediate = function (handle) {
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
              registerImmediate = function (handle) {
                setTimeout(runIfPresent, 0, handle);
              };
            } // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.


            var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
            attachTo = attachTo && attachTo.setTimeout ? attachTo : global; // Don't get fooled by e.g. browserify environments.

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
          })(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self);
          /* WEBPACK VAR INJECTION */

        }).call(this, __webpack_require__(
        /*! ./../webpack/buildin/global.js */
        "../../node_modules/webpack/buildin/global.js"), __webpack_require__(
        /*! ./../process/browser.js */
        "../../node_modules/process/browser.js"));
        /***/
      },

      /***/
      "../../node_modules/timers-browserify/main.js":
      /*!*****************************************************************************************!*\
        !*** /home/barandis/Development/projects/chanko/node_modules/timers-browserify/main.js ***!
        \*****************************************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        /* WEBPACK VAR INJECTION */
        (function (global) {
          var scope = typeof global !== "undefined" && global || typeof self !== "undefined" && self || window;
          var apply = Function.prototype.apply; // DOM APIs, for completeness

          exports.setTimeout = function () {
            return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
          };

          exports.setInterval = function () {
            return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
          };

          exports.clearTimeout = exports.clearInterval = function (timeout) {
            if (timeout) {
              timeout.close();
            }
          };

          function Timeout(id, clearFn) {
            this._id = id;
            this._clearFn = clearFn;
          }

          Timeout.prototype.unref = Timeout.prototype.ref = function () {};

          Timeout.prototype.close = function () {
            this._clearFn.call(scope, this._id);
          }; // Does not start the time, just sets up the members needed.


          exports.enroll = function (item, msecs) {
            clearTimeout(item._idleTimeoutId);
            item._idleTimeout = msecs;
          };

          exports.unenroll = function (item) {
            clearTimeout(item._idleTimeoutId);
            item._idleTimeout = -1;
          };

          exports._unrefActive = exports.active = function (item) {
            clearTimeout(item._idleTimeoutId);
            var msecs = item._idleTimeout;

            if (msecs >= 0) {
              item._idleTimeoutId = setTimeout(function onTimeout() {
                if (item._onTimeout) item._onTimeout();
              }, msecs);
            }
          }; // setimmediate attaches itself to the global object


          __webpack_require__(
          /*! setimmediate */
          "../../node_modules/setimmediate/setImmediate.js"); // On some exotic environments, it's not clear which object `setimmediate` was
          // able to install onto.  Search each possibility in the same order as the
          // `setimmediate` library.


          exports.setImmediate = typeof self !== "undefined" && self.setImmediate || typeof global !== "undefined" && global.setImmediate || this && this.setImmediate;
          exports.clearImmediate = typeof self !== "undefined" && self.clearImmediate || typeof global !== "undefined" && global.clearImmediate || this && this.clearImmediate;
          /* WEBPACK VAR INJECTION */
        }).call(this, __webpack_require__(
        /*! ./../webpack/buildin/global.js */
        "../../node_modules/webpack/buildin/global.js"));
        /***/
      },

      /***/
      "../../node_modules/webpack/buildin/global.js":
      /*!***********************************!*\
        !*** (webpack)/buildin/global.js ***!
        \***********************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
        var g; // This works in non-strict mode

        g = function () {
          return this;
        }();

        try {
          // This works if eval is allowed (see CSP)
          g = g || new Function("return this")();
        } catch (e) {
          // This works if the window reference is available
          if (typeof window === "object") g = window;
        } // g can still be undefined, but nothing to do about it...
        // We return undefined, instead of nothing here, so it's
        // easier to handle this case. if(!global) { ...}


        module.exports = g;
        /***/
      },

      /***/
      "./src/index.js":
      /*!**********************!*\
        !*** ./src/index.js ***!
        \**********************/

      /*! exports provided: fixed, dropping, sliding, CLOSED, chan, timedChan, transChan, send, recv, sendAsync, recvAsync, recvOrThrow, close, isClosed, isBuffered, isTimed, select, selectAsync, value, channel, config, SET_IMMEDIATE, MESSAGE_CHANNEL, SET_TIMEOUT, go, sleep, join, EMPTY */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony import */


        var modules_buffer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! modules/buffer */
        "./src/modules/buffer.js");
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "fixed", function () {
          return modules_buffer__WEBPACK_IMPORTED_MODULE_0__["fixed"];
        });
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "dropping", function () {
          return modules_buffer__WEBPACK_IMPORTED_MODULE_0__["dropping"];
        });
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "sliding", function () {
          return modules_buffer__WEBPACK_IMPORTED_MODULE_0__["sliding"];
        });
        /* harmony import */


        var modules_channel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! modules/channel */
        "./src/modules/channel/index.js");
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "CLOSED", function () {
          return modules_channel__WEBPACK_IMPORTED_MODULE_1__["CLOSED"];
        });
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "chan", function () {
          return modules_channel__WEBPACK_IMPORTED_MODULE_1__["chan"];
        });
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "timedChan", function () {
          return modules_channel__WEBPACK_IMPORTED_MODULE_1__["timedChan"];
        });
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "transChan", function () {
          return modules_channel__WEBPACK_IMPORTED_MODULE_1__["transChan"];
        });
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "send", function () {
          return modules_channel__WEBPACK_IMPORTED_MODULE_1__["send"];
        });
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "recv", function () {
          return modules_channel__WEBPACK_IMPORTED_MODULE_1__["recv"];
        });
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "sendAsync", function () {
          return modules_channel__WEBPACK_IMPORTED_MODULE_1__["sendAsync"];
        });
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "recvAsync", function () {
          return modules_channel__WEBPACK_IMPORTED_MODULE_1__["recvAsync"];
        });
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "recvOrThrow", function () {
          return modules_channel__WEBPACK_IMPORTED_MODULE_1__["recvOrThrow"];
        });
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "close", function () {
          return modules_channel__WEBPACK_IMPORTED_MODULE_1__["close"];
        });
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "isClosed", function () {
          return modules_channel__WEBPACK_IMPORTED_MODULE_1__["isClosed"];
        });
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "isBuffered", function () {
          return modules_channel__WEBPACK_IMPORTED_MODULE_1__["isBuffered"];
        });
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "isTimed", function () {
          return modules_channel__WEBPACK_IMPORTED_MODULE_1__["isTimed"];
        });
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "select", function () {
          return modules_channel__WEBPACK_IMPORTED_MODULE_1__["select"];
        });
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "selectAsync", function () {
          return modules_channel__WEBPACK_IMPORTED_MODULE_1__["selectAsync"];
        });
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "value", function () {
          return modules_channel__WEBPACK_IMPORTED_MODULE_1__["value"];
        });
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "channel", function () {
          return modules_channel__WEBPACK_IMPORTED_MODULE_1__["channel"];
        });
        /* harmony import */


        var modules_dispatcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! modules/dispatcher */
        "./src/modules/dispatcher.js");
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "config", function () {
          return modules_dispatcher__WEBPACK_IMPORTED_MODULE_2__["config"];
        });
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "SET_IMMEDIATE", function () {
          return modules_dispatcher__WEBPACK_IMPORTED_MODULE_2__["SET_IMMEDIATE"];
        });
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "MESSAGE_CHANNEL", function () {
          return modules_dispatcher__WEBPACK_IMPORTED_MODULE_2__["MESSAGE_CHANNEL"];
        });
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "SET_TIMEOUT", function () {
          return modules_dispatcher__WEBPACK_IMPORTED_MODULE_2__["SET_TIMEOUT"];
        });
        /* harmony import */


        var modules_process__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! modules/process */
        "./src/modules/process.js");
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "go", function () {
          return modules_process__WEBPACK_IMPORTED_MODULE_3__["go"];
        });
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "sleep", function () {
          return modules_process__WEBPACK_IMPORTED_MODULE_3__["sleep"];
        });
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "join", function () {
          return modules_process__WEBPACK_IMPORTED_MODULE_3__["join"];
        });
        /* harmony import */


        var modules_queue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! modules/queue */
        "./src/modules/queue.js");
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "EMPTY", function () {
          return modules_queue__WEBPACK_IMPORTED_MODULE_4__["EMPTY"];
        });
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

        /***/

      },

      /***/
      "./src/modules/buffer.js":
      /*!*******************************!*\
        !*** ./src/modules/buffer.js ***!
        \*******************************/

      /*! exports provided: isBuffer, fixed, dropping, sliding, queue, size, count, isFull, add, remove */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "isBuffer", function () {
          return isBuffer;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "fixed", function () {
          return fixed;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "dropping", function () {
          return dropping;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "sliding", function () {
          return sliding;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "queue", function () {
          return queue;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "size", function () {
          return size;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "count", function () {
          return count;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "isFull", function () {
          return isFull;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "add", function () {
          return add;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "remove", function () {
          return remove;
        });
        /* harmony import */


        var modules_queue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! modules/queue */
        "./src/modules/queue.js");
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
        /***/

      },

      /***/
      "./src/modules/channel/handler.js":
      /*!****************************************!*\
        !*** ./src/modules/channel/handler.js ***!
        \****************************************/

      /*! exports provided: CLOSED, MAX_DIRTY, MAX_QUEUED, channel, handleSend, handleRecv, close, box, isBox */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "CLOSED", function () {
          return CLOSED;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "MAX_DIRTY", function () {
          return MAX_DIRTY;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "MAX_QUEUED", function () {
          return MAX_QUEUED;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "channel", function () {
          return channel;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "handleSend", function () {
          return handleSend;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "handleRecv", function () {
          return handleRecv;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "close", function () {
          return close;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "box", function () {
          return box;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "isBox", function () {
          return isBox;
        });
        /* harmony import */


        var modules_protocol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! modules/protocol */
        "./src/modules/protocol.js");
        /* harmony import */


        var modules_queue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! modules/queue */
        "./src/modules/queue.js");
        /* harmony import */


        var modules_buffer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! modules/buffer */
        "./src/modules/buffer.js");
        /* harmony import */


        var modules_dispatcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! modules/dispatcher */
        "./src/modules/dispatcher.js");
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
         * @param {module:core.TransducerFunction} transducerFn The transducer used to
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


        function channel(buffer, transducerFn, isTimed = false, maxDirty = MAX_DIRTY, maxQueued = MAX_QUEUED) {
          return Object.create(null, {
            buffer: {
              value: buffer
            },
            transducerFn: {
              value: transducerFn
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
            const done = isCompleted(channel.transducerFn[modules_protocol__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](channel.buffer, value));

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

                if (isCompleted(channel.transducerFn[modules_protocol__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](channel.buffer, sender.value))) {
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
            channel.transducerFn[modules_protocol__WEBPACK_IMPORTED_MODULE_0__["protocols"].final](channel.buffer);

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
        /***/

      },

      /***/
      "./src/modules/channel/index.js":
      /*!**************************************!*\
        !*** ./src/modules/channel/index.js ***!
        \**************************************/

      /*! exports provided: CLOSED, DEFAULT, chan, timedChan, transChan, isClosed, isBuffered, isTimed, sendAsync, recvAsync, selectAsync, send, recv, recvOrThrow, select, close, value, channel */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "chan", function () {
          return chan;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "timedChan", function () {
          return timedChan;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "transChan", function () {
          return transChan;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "isClosed", function () {
          return isClosed;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "isBuffered", function () {
          return isBuffered;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "isTimed", function () {
          return isTimed;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "sendAsync", function () {
          return sendAsync;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "recvAsync", function () {
          return recvAsync;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "send", function () {
          return send;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "recv", function () {
          return recv;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "recvOrThrow", function () {
          return recvOrThrow;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "close", function () {
          return close;
        });
        /* harmony import */


        var _babel_runtime_helpers_awaitAsyncGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! @babel/runtime/helpers/awaitAsyncGenerator */
        "../../node_modules/@babel/runtime/helpers/awaitAsyncGenerator.js");
        /* harmony import */


        var _babel_runtime_helpers_awaitAsyncGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_awaitAsyncGenerator__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */


        var _babel_runtime_helpers_wrapAsyncGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! @babel/runtime/helpers/wrapAsyncGenerator */
        "../../node_modules/@babel/runtime/helpers/wrapAsyncGenerator.js");
        /* harmony import */


        var _babel_runtime_helpers_wrapAsyncGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_wrapAsyncGenerator__WEBPACK_IMPORTED_MODULE_1__);
        /* harmony import */


        var _handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ./handler */
        "./src/modules/channel/handler.js");
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "CLOSED", function () {
          return _handler__WEBPACK_IMPORTED_MODULE_2__["CLOSED"];
        });
        /* harmony import */


        var _select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ./select */
        "./src/modules/channel/select.js");
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "DEFAULT", function () {
          return _select__WEBPACK_IMPORTED_MODULE_3__["DEFAULT"];
        });
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "selectAsync", function () {
          return _select__WEBPACK_IMPORTED_MODULE_3__["selectAsync"];
        });
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "select", function () {
          return _select__WEBPACK_IMPORTED_MODULE_3__["select"];
        });
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "value", function () {
          return _select__WEBPACK_IMPORTED_MODULE_3__["value"];
        });
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "channel", function () {
          return _select__WEBPACK_IMPORTED_MODULE_3__["channel"];
        });
        /* harmony import */


        var modules_buffer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! modules/buffer */
        "./src/modules/buffer.js");
        /* harmony import */


        var modules_protocol__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        /*! modules/protocol */
        "./src/modules/protocol.js");
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
         * @param {Object} transducer The transducer to add an error handler to.
         * @param {module:csp.ExceptionHandler} [handler=DEFAULT_HANDLER] The exception
         *     handling function that is run when an error occurs in the transducer.
         * @return {Object} A new transducer that is the result of wrapping the provided
         *     transducer's step and final functions with the exception handler.
         * @private
         */


        function handlerTransducer(transducer, handler = DEFAULT_HANDLER) {
          return {
            [modules_protocol__WEBPACK_IMPORTED_MODULE_5__["protocols"].step](buffer, input) {
              try {
                return transducer[modules_protocol__WEBPACK_IMPORTED_MODULE_5__["protocols"].step](buffer, input);
              } catch (ex) {
                return handleException(buffer, handler, ex);
              }
            },

            [modules_protocol__WEBPACK_IMPORTED_MODULE_5__["protocols"].final](buffer) {
              try {
                return transducer[modules_protocol__WEBPACK_IMPORTED_MODULE_5__["protocols"].final](buffer);
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

          [modules_protocol__WEBPACK_IMPORTED_MODULE_5__["protocols"].final](buffer) {
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

        /***/

      },

      /***/
      "./src/modules/channel/select.js":
      /*!***************************************!*\
        !*** ./src/modules/channel/select.js ***!
        \***************************************/

      /*! exports provided: DEFAULT, select, selectAsync, value, channel */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "DEFAULT", function () {
          return DEFAULT;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "select", function () {
          return select;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "selectAsync", function () {
          return selectAsync;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "value", function () {
          return value;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "channel", function () {
          return channel;
        });
        /* harmony import */


        var _handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./handler */
        "./src/modules/channel/handler.js");
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
        /***/

      },

      /***/
      "./src/modules/dispatcher.js":
      /*!***********************************!*\
        !*** ./src/modules/dispatcher.js ***!
        \***********************************/

      /*! exports provided: SET_IMMEDIATE, MESSAGE_CHANNEL, SET_TIMEOUT, config, dispatch */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */


        (function (setImmediate) {
          /* harmony export (binding) */
          __webpack_require__.d(__webpack_exports__, "SET_IMMEDIATE", function () {
            return SET_IMMEDIATE;
          });
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "MESSAGE_CHANNEL", function () {
            return MESSAGE_CHANNEL;
          });
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "SET_TIMEOUT", function () {
            return SET_TIMEOUT;
          });
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "config", function () {
            return config;
          });
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "dispatch", function () {
            return dispatch;
          });
          /* harmony import */


          var modules_queue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! modules/queue */
          "./src/modules/queue.js");
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
          /* WEBPACK VAR INJECTION */

        }).call(this, __webpack_require__(
        /*! ./../../../../node_modules/timers-browserify/main.js */
        "../../node_modules/timers-browserify/main.js").setImmediate);
        /***/
      },

      /***/
      "./src/modules/process.js":
      /*!********************************!*\
        !*** ./src/modules/process.js ***!
        \********************************/

      /*! exports provided: sleep, go, join */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "sleep", function () {
          return sleep;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "go", function () {
          return go;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "join", function () {
          return join;
        });
        /* harmony import */


        var modules_channel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! modules/channel */
        "./src/modules/channel/index.js");
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
        /***/

      },

      /***/
      "./src/modules/protocol.js":
      /*!*********************************!*\
        !*** ./src/modules/protocol.js ***!
        \*********************************/

      /*! exports provided: protocols */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "protocols", function () {
          return protocols;
        });
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
         * @property {Symbol} final The `reducer/final` protocol. This is used to mark
         *     functions that take the final result of the step process and return the
         *     final form to be output. This is optional; if the reducer does not want
         *     to transform the final result, it should just return the result of its
         *     chained reducer's `final` function.
         * @property {Symbol} completed The `reducer/completed` protocol. The presence
         *     of this key on an object indicates that its transformation has been
         *     completed. It is used internally to mark collections whose
         *     transformations conclude before every object is iterated over (as infinal
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
          final: {
            value: Symbol.for("reducer/final")
          },
          completed: {
            value: Symbol.for("reducer/completed")
          },
          value: {
            value: Symbol.for("reducer/value")
          }
        });
        /***/
      },

      /***/
      "./src/modules/queue.js":
      /*!******************************!*\
        !*** ./src/modules/queue.js ***!
        \******************************/

      /*! exports provided: EMPTY, queue, isQueue, count, isEmpty, enqueue, dequeue, peek, filter */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "EMPTY", function () {
          return EMPTY;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "queue", function () {
          return queue;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "isQueue", function () {
          return isQueue;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "count", function () {
          return count;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "isEmpty", function () {
          return isEmpty;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "enqueue", function () {
          return enqueue;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "dequeue", function () {
          return dequeue;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "peek", function () {
          return peek;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "filter", function () {
          return filter;
        });
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
/*! exports provided: map, merge, partition, pipe, split, tap, untap, untapAll, reduce, toChannel, toArray, debounce, throttle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var modules_flow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! modules/flow */ "./src/modules/flow.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "map", function() { return modules_flow__WEBPACK_IMPORTED_MODULE_0__["map"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return modules_flow__WEBPACK_IMPORTED_MODULE_0__["merge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "partition", function() { return modules_flow__WEBPACK_IMPORTED_MODULE_0__["partition"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pipe", function() { return modules_flow__WEBPACK_IMPORTED_MODULE_0__["pipe"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "split", function() { return modules_flow__WEBPACK_IMPORTED_MODULE_0__["split"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tap", function() { return modules_flow__WEBPACK_IMPORTED_MODULE_0__["tap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "untap", function() { return modules_flow__WEBPACK_IMPORTED_MODULE_0__["untap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "untapAll", function() { return modules_flow__WEBPACK_IMPORTED_MODULE_0__["untapAll"]; });

/* harmony import */ var modules_conversion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! modules/conversion */ "./src/modules/conversion.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reduce", function() { return modules_conversion__WEBPACK_IMPORTED_MODULE_1__["reduce"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toChannel", function() { return modules_conversion__WEBPACK_IMPORTED_MODULE_1__["toChannel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toArray", function() { return modules_conversion__WEBPACK_IMPORTED_MODULE_1__["toArray"]; });

/* harmony import */ var modules_timing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! modules/timing */ "./src/modules/timing.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return modules_timing__WEBPACK_IMPORTED_MODULE_2__["debounce"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return modules_timing__WEBPACK_IMPORTED_MODULE_2__["throttle"]; });

/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

/**
 * A set of utility functions that give one or more channels some extra
 * functionality. Each of these accept one or more {@link module:csp.Channel}
 * objects and then combine or manipulate them in (hopefully) useful ways, such
 * as merging them, splitting them, reducing values they receive to a single
 * value, or throttling them so that they only produce one result in a given
 * time period.
 *
 * @module csp-ops
 */



/**
 * A function that takes a single value and, depending on whether that value
 * meets the function's criteria for passing, returns `true` or `false`.
 *
 * @callback Predicate
 * @memberof module:ops
 * @param {*} value The value to test. Whether or not the value passes the test
 *     depends on the criteria established by the predicate.
 * @return {boolean} Either `true` if the value passes or `false` if it doesn't.
 */

/**
 * A function that maps its input(s) to an output value. It takes a variable
 * number of input values and calculates an output value from them.
 *
 * @callback Mapper
 * @memberof module:ops
 * @param {...*} values The input values.
 * @return {*} An output value calculated from the input values.
 */

/**
 * A function that integrates one of its values into the other. It's used for
 * reducing channel values into a single value.
 *
 * @callback Reducer
 * @memberof module:ops
 * @param {*} acc The current accumulated value.
 * @param {*} value The new value that needs to be integrated into the
 *     accumulated value.
 * @return {*} A new accumulated value, resulting from integrating `value` into
 *     the original accumulated value.
 */

/***/ }),

/***/ "./src/modules/common.js":
/*!*******************************!*\
  !*** ./src/modules/common.js ***!
  \*******************************/
/*! exports provided: isNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return isNumber; });
/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

/**
 * Utility functions used by more than one other module.
 *
 * @module ops/common
 * @private
 */

/**
 * Determines whether the value passed is a finite number.
 *
 * @param {*} x The value to check.
 * @return {boolean} Either `true` if the value is a finite number or `false`
 *     if it is not.
 * @private
 */
function isNumber(x) {
  return Object.prototype.toString.call(x) === "[object Number]" && isFinite(x);
}

/***/ }),

/***/ "./src/modules/conversion.js":
/*!***********************************!*\
  !*** ./src/modules/conversion.js ***!
  \***********************************/
/*! exports provided: reduce, toChannel, toArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reduce", function() { return reduce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toChannel", function() { return toChannel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toArray", function() { return toArray; });
/* harmony import */ var _babel_runtime_helpers_asyncIterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncIterator */ "../../node_modules/@babel/runtime/helpers/asyncIterator.js");
/* harmony import */ var _babel_runtime_helpers_asyncIterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncIterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chanko_csp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chanko/csp */ "../csp/lib/chanko-csp.js");
/* harmony import */ var _chanko_csp__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chanko_csp__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

/**
 * A set of channel utilities for converting channels into other kinds of data,
 * and vice versa.
 *
 * @module ops/conversion
 * @private
 */

/**
 * Creates a single value from a channel by running its values through a
 * reducing function.
 *
 * For every value put onto the input channel, the reducing function is called
 * with two parameters: the accumulator that holds the result of the reduction
 * so far, and the new input value. The initial value of the accumulator is the
 * third parameter to `reduce`. The reduction is not complete until the input
 * channel closes.
 *
 * This function returns a channel. When the final reduced value is produced, it
 * is put onto this channel, and when that value is taken from it, the channel
 * is closed.
 *
 * ```
 * import { go, chan, send, recv, close } from "@csp";
 * import { reduce } from "@ops";
 *
 * const input = chan();
 * const output = reduce((acc, value) => acc + value, input, 0);
 *
 * go(async () => {
 *   await send(input, 1);
 *   await send(input, 2);
 *   await send(input, 3);
 *   close(input);
 * });
 *
 * go(async () => {
 *   const result = await recv(output);
 *   console.log(output);                  // -> 6
 * });
 *
 * ```
 *
 * Note that the input channel *must* be closed at some point, or no value will
 * ever appear on the output channel. The closing of the channel is what
 * signifies that the reduction should be completed.
 *
 * @memberof module:csp-ops
 * @param {module:csp-ops.Reducer} fn The reducer function responsible for turning
 *     the series of channel values into a single output value.
 * @param {module:csp.Channel} channel The channel whose values are being
 *     reduced into a single output value.
 * @param {*} init The initial value to feed into the reducer function for the
 *     first reduction step.
 * @return {module:csp.Channel} A channel that will, when the input channel
 *     closes, have the reduced value put into it. When this value is taken, the
 *     channel will automatically close.
 */

function reduce(fn, channel, init) {
  const output = Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_1__["chan"])();
  Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_1__["go"])(async () => {
    let acc = init;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;

    var _iteratorError;

    try {
      for (var _iterator = _babel_runtime_helpers_asyncIterator__WEBPACK_IMPORTED_MODULE_0___default()(channel), _step, _value; _step = await _iterator.next(), _iteratorNormalCompletion = _step.done, _value = await _step.value, !_iteratorNormalCompletion; _iteratorNormalCompletion = true) {
        const value = _value;
        acc = fn(acc, value);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          await _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_1__["sendAsync"])(output, acc, () => Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_1__["close"])(output));
  });
  return output;
}
/**
 * Sends all values from an iterable to the supplied channel.
 *
 * If no channel is passed to this function, a new channel is created. In
 * effect, this directly converts an iterable into a channel with the same
 * values on it.
 *
 * The channel is closed after the final iterable value is sent to it.
 *
 * This function will convert any JavaScript object that implements the iterable
 * protocol. In other words, if it works in a `for...of` statement, it will work
 * here.
 *
 * ```
 * import { go, chan, recv, isClosed } from "@csp";
 * import { toChannel } from "@ops";
 *
 * const input = [1, 2, 3];
 * const output = toChannel(input);
 *
 * go(async () => {
 *   console.log(await recv(output));     // -> 1
 *   console.log(await recv(output));     // -> 2
 *   console.log(await recv(output));     // -> 3
 *   console.log(isClosed(output));       // -> true
 * });
 * ```
 *
 * @memberof module:csp-ops
 * @param {iterable} iterable The iterable containing the values to be sent to
 *     the channel.
 * @param {module:csp.Channel} [channel] The channel onto which to put all of
 *     the array elements. If this is not present, a new channel will be
 *     created.
 * @return {module:csp.Channel} the channel onto which the array elements are
 *     put. This is the same as the input channel, but if no input channel is
 *     specified, this will be a new channel. It will close when the final value
 *     is taken from it.
 */


function toChannel(iterable, channel = Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_1__["chan"])(iterable.length)) {
  Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_1__["go"])(async () => {
    for (const item of iterable) {
      await Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_1__["send"])(channel, item);
    }

    Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_1__["close"])(channel);
  });
  return channel;
}
/**
 * Receives all of the values from a channel and pushes them into an array.
 *
 * If no array is passed to this function, a new (empty) one is created. In
 * effect, this directly converts a channel into an array with the same values.
 * Either way, this operation cannot complete until the input channel is closed.
 *
 * This function returns a channel. When the final array is produced, it is sent
 * to this channel, and when that value is received from it, the channel is
 * closed.
 *
 * ```
 * import { go, chan, send, recv, close } from "@csp";
 * import { toArray } from "@ops";
 *
 * const input = chan();
 * const output = toArray(input);
 *
 * go(async () => {
 *   await send(input, 1);
 *   await send(input, 2);
 *   await send(input, 3);
 *   close(input);
 * });
 *
 * go(async () => {
 *   const result = await recv(output);
 *   console.log(result);                     // -> [1, 2, 3]
 * });
 * ```
 *
 * Note that the input channel *must* be closed at some point, or no value will
 * ever appear on the output channel. The closing of the channel is what
 * signifies that all of the values needed to make the array are now available.
 *
 * @memberof module:csp-ops
 * @param {module:csp.Channel} channel The channel from which values are
 *     received to put into the array.
 * @param {array} [array] The array to put the channel values into. If this is
 *     not present, a new, empty array will be created.
 * @return {module:csp.Channel} A channel that will, when the input channel
 *     closes, have the array of channel values put onto it. When this array is
 *     received, the channel will automatically close.
 */


function toArray(channel, array = []) {
  return reduce((acc, input) => {
    acc.push(input);
    return acc;
  }, channel, array);
}



/***/ }),

/***/ "./src/modules/flow.js":
/*!*****************************!*\
  !*** ./src/modules/flow.js ***!
  \*****************************/
/*! exports provided: pipe, partition, merge, split, tap, untap, untapAll, map */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pipe", function() { return pipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "partition", function() { return partition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "split", function() { return split; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tap", function() { return tap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "untap", function() { return untap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "untapAll", function() { return untapAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony import */ var _chanko_csp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chanko/csp */ "../csp/lib/chanko-csp.js");
/* harmony import */ var _chanko_csp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var modules_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! modules/common */ "./src/modules/common.js");
/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

/**
 * A set of channel operation functions for routing channels to other channels
 * in different ways.
 *
 * In each of these functions, the source channel will not be available to be
 * taken from, as all of the source channels will have their values taken by the
 * processes within these functions. The lone exception is `tap`, where the
 * regular function of the source channel will be restored if all taps are
 * removed. Even so, while at least one tap is in place, the source channel
 * cannot be taken from.
 *
 * @module ops/flow
 * @private
 */


const TAPS = Symbol("multitap/taps");
/**
 * Pipes the values from one channel to another channel.
 *
 * This ties two channels together so that puts on the source channel can be
 * taken off the destination channel. This does not duplicate values in any way;
 * if another process takes a value off the source channel, it will never appear
 * on the destination channel. In most cases you will not want to take values
 * off a channel once it's piped to another channel, since it's difficult to
 * know which values will go to which channel.
 *
 * Closing either channel will break the connection between the two. If the
 * source channel is closed, the destination channel will by default also be
 * closed. However, passing `true` as the third parameter will cause the
 * destination channel to remain open even when the source channel is closed
 * (the connection is still broken however).
 *
 * Because of the ability to leave the destination channel open, a possible use
 * case for this function is to wrap the destination channel(s) of one of the
 * other flow control functions below to have a channel that survives the source
 * channel closing. The rest of those functions (aside from the special-case
 * `{@link module:csp-ops.tap|tap}`) automatically close their destination channels
 * when the source channels close.
 *
 * ```
 * import { go, chan, send, recv, close, isClosed } from "@csp";
 * import { pipe } from "@ops";
 *
 * const input = chan();
 * const output = pipe(input, chan());
 *
 * go(async () => {
 *   await send(input, 1);
 *   await send(input, 2);
 *   close(input);
 * });
 *
 * go(async () => {
 *   console.log(await recv(output));      // -> 1
 *   console.log(await recv(output));      // -> 2
 *   console.log(isClosed(output));        // -> true
 * });
 * ```
 *
 * @memberof module:csp-ops
 * @param {module:csp.Channel} src The source channel.
 * @param {module:csp.Channel} dest The destination channel.
 * @param {boolean} [keepOpen=false] A flag to indicate that the destination
 *     channel should be kept open after the source channel closes. By default
 *     the destination channel will close when the source channel closes.
 * @return {module:csp.Channel} The destination channel.
 */

function pipe(src, dst, keepOpen = false) {
  Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["go"])(async () => {
    for (;;) {
      const value = await Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["recv"])(src);

      if (value === _chanko_csp__WEBPACK_IMPORTED_MODULE_0__["CLOSED"]) {
        if (!keepOpen) {
          Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["close"])(dst);
        }

        break;
      }

      if (!(await Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["send"])(dst, value))) {
        break;
      }
    }
  });
  return dst;
}
/**
 * Creates two new channels and routes values from a source channel to them
 * according to a predicate function.
 *
 * The supplied function is invoked with every value that is put onto the source
 * channel. Those that return `true` are routed to the first destination
 * channel; those that return `false` are routed to the second.
 *
 * The new channels are created by the function based on the buffer values
 * passed as the third and fourth parameters. If one or both of these are
 * missing, `null`, or `0`, the corresponding destination channel is unbuffered.
 * If one is a positive integer, the corresponding channel is buffered by a
 * fixed buffer of that size. If the parameter for a channel is a buffer, then
 * that buffer is used to buffer the new channel.
 *
 * Both new channels are closed when the source channel is closed.
 *
 *
 * ```
 * import { go, chan, send, close } from "@csp";
 * import { partition } from "@ops";
 *
 * const input = chan();
 * const ctrl = chan();
 * const [even, odd] = partition(x => x % 2 === 0, input, 3, 3);
 *
 * go(async () => {
 *   await send(input, 1);
 *   await send(input, 2);
 *   await send(input, 3);
 *   await send(input, 4);
 *   close(input);
 * });
 *
 * go(async () => {
 *   for await (const value of even) {
 *     console.log(value);
 *   }
 *   await send(ctrl);
 * });
 *
 * go(async () => {
 *   await recv(ctrl);
 *   for await (const value of odd) {
 *     console.log(value);
 *   }
 * });
 *
 * // The `ctrl` channel ensures that all of the values on the even channel are
 * // read before any of the values on the odd channel are (this is only
 * // possible because the output channels have buffers big enough to make sure
 * // that no send is blocked).
 * //
 * // -> 2
 * // -> 4
 * // -> 1
 * // -> 3
 * ```
 *
 * @memberof module:csp-ops
 * @param {module:csp-ops.Predicate} fn A predicate function used to test each value
 * on the input channel.
 * @param {module:csp.Channel} src The source channel.
 * @param {(number|module:csp.Buffer)} [tBuffer=0] A buffer used to create the
 *     destination channel which receives all values that passed the predicate.
 *     If this is a number, a {@link module:csp.FixedBuffer} of that size will
 *     be used. If this is `0` or not present, the channel will be unbuffered.
 * @param {(number|module:csp.Buffer)} [fBuffer=0] A buffer used to create the
 *     destination channel which receives all values that did not pass the
 *     predicate. If this is a number, a {@link module:csp.FixedBuffer} of that
 *     size will be used. If this is `0` or not present, the channel will be
 *     unbuffered.
 * @return {module:csp.Channel[]} An array of two channels. The first is the
 *     destination channel with all of the values that passed the predicate, the
 *     second is the destination channel with all of the values that did not
 *     pass the predicate.
 */


function partition(fn, src, tBuffer = 0, fBuffer = 0) {
  const tDst = Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["chan"])(tBuffer);
  const fDst = Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["chan"])(fBuffer);
  Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["go"])(async () => {
    for (;;) {
      const value = await Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["recv"])(src);

      if (value === _chanko_csp__WEBPACK_IMPORTED_MODULE_0__["CLOSED"]) {
        Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["close"])(tDst);
        Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["close"])(fDst);
        break;
      }

      await Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["send"])(fn(value) ? tDst : fDst, value);
    }
  });
  return [tDst, fDst];
}
/**
 * Merges one or more channels into a single destination channel.
 *
 * Values are given to the destination channel as they are sent to the source
 * channels. If `merge` is called when there are already values on multiple
 * source channels, the order that they're put onto the destination channel is
 * random.
 *
 * The destination channel is created by the function based on the buffer value
 * passed as the second parameter. If this is missing, `null`, or `0`, the
 * destination channel will be unbuffered. If it's a positive integer, the
 * destination channel is buffered by a fixed buffer of that size. If the
 * parameter is a buffer, then that buffer is used to buffer the destination
 * channel.
 *
 * As each source channel closes, it is removed from the merge, leaving the
 * channels that are still open to continue merging. When *all* of the source
 * channels close, then the destination channel is closed.
 *
 * ```
 * import { go, chan, send, recv } from "@csp";
 * import { merge } from "@ops";
 *
 * const input1 = chan();
 * const input2 = chan();
 * const input3 = chan();
 * const output = merge([input1, input2, input3]);
 *
 * go(async () => {
 *   // Because we're sending to all three channels in the same
 *   // process, we know the order in which the values will be
 *   // sent to the output channel; in general, we won't know this
 *   await send(input1, 1);
 *   await send(input2, 2);
 *   await send(input3, 3);
 * });
 *
 * go(async () => {
 *   console.log(await recv(output));      // -> 1
 *   console.log(await recv(output));      // -> 2
 *   console.log(await recv(output));      // -> 3
 * });
 * ```
 *
 * @memberof module:csp-ops
 * @param {module:csp.Channel[]} srcs An array of source channels.
 * @param {(number|module:csp.Buffer)} [buffer=0] A buffer used to create the
 *     destination channel. If this is a number, a
 *     {@link module:csp.FixedBuffer} of that size will be used. If this is `0`
 *     or not present, the channel will be unbuffered.
 * @return {module:csp.Channel} The destination channel, which will receive all
 *     values put onto every source channel.
 */


function merge(srcs, buffer = 0) {
  const dst = Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["chan"])(buffer);
  const inputs = srcs.slice();
  Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["go"])(async () => {
    for (;;) {
      if (inputs.length === 0) {
        break;
      }

      const {
        value,
        channel
      } = await Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["select"])(inputs);

      if (value === _chanko_csp__WEBPACK_IMPORTED_MODULE_0__["CLOSED"]) {
        inputs.splice(inputs.indexOf(channel), 1);
        continue;
      }

      await Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["send"])(dst, value);
    }

    Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["close"])(dst);
  });
  return dst;
}
/**
 * Splits a single channel into multiple destination channels, with each
 * destination channel receiving every value sent to the source channel.
 *
 * Every parameter after the first represents the buffer from a single
 * destination channel. Each `0` or `null` will produce an unbuffered channel,
 * while each positive integer will produce a channel buffered by a fixed buffer
 * of that size. Each buffer will produce a buffered channel backed by that
 * buffer. If there are no parameters after the first, then two unbuffered
 * channels will be produced as a default.
 *
 * When the source channel is closed, all destination channels will also be
 * closed. However, if destination channels are closed, they do nothing to the
 * source channel.
 *
 * ```
 * import { go, chan, send } from "@csp";
 * import { split } from "@ops";
 *
 * const input = chan();
 * const outputs = split(input, 3);
 *
 * go(async () => {
 *   await send(input, 1);
 *   await send(input, 2);
 *   await send(input, 3);
 * });
 *
 * go(async () => {
 *   for await (const output of outputs) {
 *     console.log(output);
 *     // -> 1
 *     // -> 2
 *     // -> 3
 *   }
 * });
 * ```
 *
 * This function moves its values to the output channels asynchronously. This
 * means that even when using unbuffered channels, it is not necessary for all
 * output channels to be received from before the next send to the input channel
 * can complete.
 *
 * @memberof module:csp-ops
 * @param {module:csp.Channel} src The source channel.
 * @param {...(number|module:csp.Buffer)} [buffers=2] The buffers used to create
 *     the destination channels. Each entry is treated separately. If one is a
 *     number, then a {@link module:csp.FixedBuffer|FixedBuffer} of that size
 *     will be used. If one is a `0`, then the corresponding channel will be
 *     unbuffered. **Exception:** if a single number is passed, then that number
 *     of unbuferred channels will be created. This means that the default is to
 *     create two unbuffered channels. To create a single channel with a fixed
 *     buffer, use `{@link csp.fixed|fixed}` explicitly.
 * @return {module:csp.Channel[]} An array of destination channels.
 */


function split(src, ...buffers) {
  let bfs = buffers.length === 0 ? [2] : buffers;

  if (bfs.length === 1 && Object(modules_common__WEBPACK_IMPORTED_MODULE_1__["isNumber"])(bfs[0])) {
    const count = bfs[0];
    bfs = [];

    for (let i = 0; i < count; i++) {
      bfs.push(0);
    }
  }

  const dsts = bfs.map(bf => Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["chan"])(bf));
  const done = Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["chan"])();
  let count = 0;

  function callback() {
    if (--count === 0) {
      Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["sendAsync"])(done);
    }
  }

  Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["go"])(async () => {
    for (;;) {
      const value = await Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["recv"])(src);

      if (value === _chanko_csp__WEBPACK_IMPORTED_MODULE_0__["CLOSED"]) {
        for (const dst of dsts) {
          Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["close"])(dst);
        }

        break;
      }

      count = dsts.length;

      for (const dst of dsts) {
        Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["sendAsync"])(dst, value, callback);
      }

      await Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["recv"])(done);
    }
  });
  return dsts;
}
/**
 * Utility function to add the ability to be tapped to a channel that is being
 * tapped. This will add a single property to that channel only (named
 * '@@multitap/taps' so as to decrease the chance of collision), but the tapping
 * functionality itself is provided outside the channel object. This new
 * property is an array of the channels tapping this channel, and it will be
 * removed if all taps are removed.
 *
 * @param {module:csp.Channel} src The source channel to be tapped.
 * @private
 */


function makeTap(src) {
  Object.defineProperty(src, TAPS, {
    configurable: true,
    writable: true,
    value: []
  });
  const done = Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["chan"])();
  let count = 0;

  function callback() {
    if (--count === 0) {
      Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["sendAsync"])(done);
    }
  }

  Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["go"])(async () => {
    for (;;) {
      const value = await Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["recv"])(src);

      if (value === _chanko_csp__WEBPACK_IMPORTED_MODULE_0__["CLOSED"] || src[TAPS].length === 0) {
        delete src[TAPS];
        break;
      }

      count = src[TAPS].length;

      for (const tap of src[TAPS]) {
        Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["sendAsync"])(tap, value, callback);
      }

      await Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["recv"])(done);
    }
  });
}
/**
 * Taps a channel, sending all of the values sent to it to the destination
 * channel.
 *
 * A source channel can be tapped multiple times, and all of the tapping
 * (destination) channels receive each value sent to the tapped (source)
 * channel.
 *
 * This is different from `{@link module:csp-ops.split|split}` in that it's
 * temporary. Channels can tap a channel and then untap it, multiple times, as
 * needed. If a source channel has all of its taps removed, then it reverts to a
 * normal channel, just as it was before it was tapped.
 *
 * Also unlike `{@link module:csp-ops.split|split}`, each call can only tap once.
 * For multiple channels to tap a source channel, `tap` has to be called
 * multiple times.
 *
 * Closing either the source or any of the destination channels has no effect on
 * any of the other channels.
 *
 * ```
 * import { go, chan, send, recv } from "@csp";
 * import { tap } from "@ops";
 *
 * const input = chan();
 * const tapper = chan();
 * tap(input, tapper);
 *
 * go(async () => {
 *   await send(input, 1);
 *   await send(input, 2);
 * });
 *
 * go(async () => {
 *   console.log(await recv(tapper));   // -> 1
 *   console.log(await recv(tapper));   // -> 2
 * });
 *
 * ```
 *
 * @memberof module:csp-ops
 * @param {module:csp.Channel} src The channel to be tapped.
 * @param {module:csp.Channel} [dest] The channel tapping the source channel. If
 *     this is not present, a new unbuffered channel will be created.
 * @return {module:csp.Channel} The destination channel. This is the same as the
 *     second argument, if present; otherwise it is the newly-created channel
 *     tapping the source channel.
 */


function tap(src, dst = Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["chan"])()) {
  if (!src[TAPS]) {
    makeTap(src);
  }

  if (!src[TAPS].includes(dst)) {
    src[TAPS].push(dst);
  }

  return dst;
}
/**
 * Untaps a previously tapping destination channel from its source channel.
 *
 * This removes a previously created tap. The destination (tapping) channel will
 * stop receiving the values sent to the source channel.
 *
 * If the destination channel was not, in fact, tapping the source channel, this
 * function will do nothing. If all taps are removed, the source channel reverts
 * to normal (i.e., it no longer has the tapping code applied to it and can be
 * taken from as normal).
 *
 * @memberof module:csp-ops
 * @param {module:csp.Channel} src The tapped channel.
 * @param {module:csp.Channel} dest The channel that is tapping the source
 *     channel that should no longer be tapping the source channel.
 */


function untap(src, dst) {
  const taps = src[TAPS];

  if (taps) {
    const index = taps.indexOf(dst);

    if (index !== -1) {
      taps.splice(index, 1);

      if (taps.length === 0) {
        Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["sendAsync"])(src);
      }
    }
  }
}
/**
 * Removes all taps from a source channel.
 *
 * The previously-tapped channel reverts to a normal channel, while any channels
 * that might have been tapping it no longer receive values from the source
 * channel. If the source channel had no taps, this function does nothing.
 *
 * @memberof module:csp-ops
 * @param {module:csp.Channel} src The tapped channel. All taps will be removed
 *     from this channel.
 */


function untapAll(src) {
  if (src[TAPS]) {
    src[TAPS] = [];
    Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["sendAsync"])(src);
  }
}
/**
 * Maps the values from one or more source channels through a function, sending
 * the results to a new channel.
 *
 * The mapping function is given one value from each source channel, after at
 * least one value becomes available on every source channel. The output value
 * from the function is then sent to the destination channel.
 *
 * The destination channel is created by the function based on the buffer value
 * passed as the third parameter. If this is missing, `null`, or `0`, the
 * destination channel will be unbuffered. If it's a positive integer, the
 * destination channel is buffered by a fixed buffer of that size. If the
 * parameter is a buffer, then that buffer is used to buffer the destination
 * channel.
 *
 * Once *any* source channel is closed, the mapping ceases and the destination
 * channel is also closed.
 *
 * This is obviously similar to a map transducer, but unlike a transducer, this
 * function works with multiple input channels. This is something that a
 * transducer on a single channel is unable to do.
 *
 * ```
 * import { go, chan, send, recv, close, isClosed } from "@csp";
 * import { map } from "@ops"
 *
 * const input1 = chan();
 * const input2 = chan();
 * const input3 = chan();
 * const output = map((x, y, z) => x + y + z, [input1, input2, input3]);
 *
 * go(async () => {
 *   await send(input1, 1);
 *   await send(input1, 2);
 *   await send(input1, 3);
 * });
 *
 * go(async () => {
 *   await send(input2, 10);
 *   await send(input2, 20);
 *   close(input2);
 * });
 *
 * go(async () => {
 *   await send(input3, 100);
 *   await send(input3, 200);
 *   await send(input3, 300);
 * });
 *
 * go(async () => {
 *   console.log(await recv(output));     // -> 111
 *   console.log(await recv(output));     // -> 222
 *   // Output closes now because input2 closes after 2 values
 *   console.log(isClosed(output));       // -> true
 * });
 * ```
 *
 * @memberof module:csp-ops
 * @param {module:csp-ops.Mapper} fn The mapping function. This should have one
 *     parameter for each source channel and return a single value.
 * @param {module:csp.Channel[]} srcs The source channels.
 * @param {(number|module:csp.Buffer)} [buffer=0] A buffer used to create the
 *     destination channel. If this is a number, a
 *     {@link module:csp.FixedBuffer} of that size will be used. If this is `0`
 *     or not present, the channel will be unbuffered.
 * @return {module:csp.Channel} The destination channel.
 */


function map(fn, srcs, buffer = 0) {
  const dst = Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["chan"])(buffer);
  const srclen = srcs.length;
  const values = [];
  const callbacks = [];
  const temp = Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["chan"])();
  let count;

  for (let i = 0; i < srclen; i++) {
    callbacks[i] = (index => {
      return value => {
        values[index] = value;

        if (--count === 0) {
          Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["sendAsync"])(temp, values.slice());
        }
      };
    })(i);
  }

  Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["go"])(async () => {
    for (;;) {
      count = srclen;

      for (let i = 0; i < srclen; i++) {
        Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["recvAsync"])(srcs[i], callbacks[i]);
      }

      const values = await Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["recv"])(temp);

      for (const value of values) {
        if (value === _chanko_csp__WEBPACK_IMPORTED_MODULE_0__["CLOSED"]) {
          // Once a source closes, we close the destination AND the rest of the
          // sources. Otherwise the sources will have nothing receiving from
          // them and sends to them will block forever. By closing them, sends
          // to them will immediately return `false` and not block.
          Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["close"])(dst);

          for (const src of srcs) {
            Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["close"])(src);
          }

          return;
        }
      }

      await Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["send"])(dst, fn(...values));
    }
  });
  return dst;
}



/***/ }),

/***/ "./src/modules/timing.js":
/*!*******************************!*\
  !*** ./src/modules/timing.js ***!
  \*******************************/
/*! exports provided: debounce, throttle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return throttle; });
/* harmony import */ var _chanko_csp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chanko/csp */ "../csp/lib/chanko-csp.js");
/* harmony import */ var _chanko_csp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var modules_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! modules/common */ "./src/modules/common.js");
/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

/**
 * A set of channel utilities for changing the timing of inputs being put onto
 * the input channel.
 *
 * @module ops/timing
 * @private
 */


/**
 * Debounces an input channel.
 *
 * Debouncing is the act of turning several input values into one. For example,
 * debouncing a channel driven by a `mousemove` event would cause only the final
 * `mousemove` event to be put onto the channel, dropping all of the other ones.
 * This can be desirable because `mousemove` events come in bunches, being
 * produced continually while the mouse is moving, and often all that we really
 * care about is to learn where the mouse ended up.
 *
 * This function does this by controlling which values that have been sent to
 * the source channel are made available on the destination channel, and when.
 *
 * The `delay` parameter determines the debounce threshold. Once the first value
 * is sent to the source channel, debouncing is in effect until the number of
 * milliseconds in `delay` passes without any other value being put onto that
 * channel. In other words, the delay will be refreshed if another value is sent
 * to the source channel before the delay elapses. After a full delay interval
 * passes without a value being sent to the source channel, the last value sent
 * becomes available on the destination channel.
 *
 * This behavior can be modified through four options: `leading`, `trailing`,
 * `maxDelay`, and `cancel`.
 *
 * If both `leading` and `trailing` are `true`, values will not be duplicated.
 * The first value put onto the source channel will be put onto the destination
 * channel immediately (per `leading`) and the delay will begin, but a value
 * will only be made available on the destination channel at the end of the
 * delay (per `trailing`) if *another* input value was put onto the source
 * channel before the delay expired.
 *
 * @memberof module:csp-ops
 * @param {module:csp.Channel} src The source channel.
 * @param {(number|module:csp.Buffer)} [buffer=0] A buffer used to create the
 *     destination channel. If this is a number, a
 *     {@link module:csp.FixedBuffer|FixedBuffer} of that size will be used. If
 *     this is `0` or not present, the channel will be unbuffered.
 * @param {number} delay The debouncing delay, in milliseconds.
 * @param {Object} [options={}] A set of options to further configure the
 *     debouncing.
 * @param {boolean} [options.leading=false] Instead of making a value available
 *     on the destination channel after the delay passes, the first value put
 *     onto the source channel is made available *before* the delay begins. No
 *     value is available on the destination channel after the delay has elapsed
 *     (unless `trailing` is also `true`).
 * @param {boolean} [options.trailing=true] The default behavior, where a value
 *     is not made available on the destination channel until the entire delay
 *     passes without a new value being put on the source channel.
 * @param {number} [options.maxDelay=0] The maximum delay allowed before a value
 *     is put onto the destination channel. Debouncing can, in theory, go on
 *     forever as long as new input values continue to be put onto the source
 *     channel before the delay expires. Setting this option to a positive
 *     number sets the maximum number of milliseconds that debouncing can go on
 *     before it's forced to end, even if in the middle of a debouncing delay.
 *     Having debouncing end through the max delay operates exactly as if it had
 *     ended because of lack of input; the last input is made available on the
 *     destination channel (if `trailing` is `true`), and the next input will
 *     trigger another debounce operation.
 * @param {module:csp.Channel} [options.cancel] A channel used to signal a
 *     cancellation of the debouncing. Any value put onto this channel will
 *     cancel the current debouncing operation, closing the output channel and
 *     discarding any values that were waiting for the debounce threshold timer
 *     to be sent to the output.
 * @return {module:csp.Channel} The newly-created destination channel, where all
 *     of the values will be debounced from the source channel.
 */

function debounce(src, buffer, delay, options) {
  const defaults = {
    leading: false,
    trailing: true,
    maxDelay: 0,
    cancel: Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["chan"])()
  };
  const [buf, del, opts] = Object(modules_common__WEBPACK_IMPORTED_MODULE_1__["isNumber"])(delay) ? [buffer, delay, Object.assign(defaults, options !== null && options !== void 0 ? options : {})] : [0, buffer, Object.assign(defaults, delay !== null && delay !== void 0 ? delay : {})];
  const dst = Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["chan"])(buf);
  const {
    leading,
    trailing,
    maxDelay,
    cancel
  } = opts;
  Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["go"])(async () => {
    let timer = Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["chan"])();
    let max = Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["chan"])();
    let current = _chanko_csp__WEBPACK_IMPORTED_MODULE_0__["CLOSED"];

    for (;;) {
      const {
        value,
        channel
      } = await Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["select"])([src, timer, max, cancel]);

      if (channel === cancel) {
        Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["close"])(dst);
        break;
      }

      if (channel === src) {
        if (value === _chanko_csp__WEBPACK_IMPORTED_MODULE_0__["CLOSED"]) {
          Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["close"])(dst);
          break;
        }

        const timing = Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["isTimed"])(timer);
        timer = Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["timedChan"])(del);

        if (!timing && maxDelay > 0) {
          max = Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["timedChan"])(maxDelay);
        }

        if (leading) {
          if (!timing) {
            await Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["send"])(dst, value);
          } else {
            current = value;
          }
        } else if (trailing) {
          current = value;
        }
      } else {
        timer = Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["chan"])();
        max = Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["chan"])();

        if (trailing && current !== _chanko_csp__WEBPACK_IMPORTED_MODULE_0__["CLOSED"]) {
          await Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["send"])(dst, current);
          current === _chanko_csp__WEBPACK_IMPORTED_MODULE_0__["CLOSED"];
        }
      }
    }
  });
  return dst;
}
/**
 * Throttles an input channel.
 *
 * Throttling is the act of ensuring that something only happens once per time
 * interval. In this case, it means that a value sent to the source channel is
 * only made available to the destination channel once per a given number of
 * milliseconds. An example usage would be with window scroll events; these
 * events are nearly continuous as scrolling is happening, and perhaps we don't
 * want to call an expensive UI updating function every time a scroll event is
 * fired. We can throttle the input channel and make it only offer up the scroll
 * events once every 100 milliseconds, for instance.
 *
 * Throttling is effected by creating a new channel as a throttled destination
 * for values sent to the source channel. Values will only appear on that
 * destination channel once per delay interval; other values that are put onto
 * the source channel in the meantime are discarded.
 *
 * The `delay` parameter controls how often a value can become available on the
 * destination channel. When the first value is sent to the source channel, it
 * is immediately sent to the destination channel as well and the delay begins.
 * Any further values sent to the source channel during that delay are *not*
 * passed through; only when the delay expires is the last input value made
 * available on the destination channel. The delay then begins again, so that
 * further inputs are squelched until *that* delay passes. Throttling continues,
 * only allowing one value through per interval, until an entire interval passes
 * without input.
 *
 * This behavior can be modified by three options: `leading`, `trailing`, and
 * `cancel`.
 *
 * If both `leading` and `trailing` are `true`, values will not be duplicated.
 * The first value sent to the source channel will be put onto the destination
 * channel immediately (per `leading`) and the delay will begin, but a value
 * will only be made available on the destination channel at the end of the
 * delay (per `trailing`) if *another* input value was sent to the source
 * channel before the delay expired.
 *
 * @memberof module:csp-ops
 * @param {module:csp.Channel} src The source channel.
 * @param {(number|module:csp.Buffer)} [buffer=0] A buffer used to create the
 *     destination channel. If this is a number, a
 *     {@link module:csp.FixedBuffer|FixedBuffer} of that size will be used. If
 *     this is `0` or not present, the channel will be unbuffered.
 * @param {number} delay The throttling delay, in milliseconds.
 * @param {Object} [options={}] A set of options to further configure the
 * throttling.
 * @param {boolean} [options.leading=true] Makes the value that triggered the
 *     throttling immediately available on the destination channel before
 *     beginning the delay. If this is `false`, the first value will not be put
 *     onto the destination channel until a full delay interval passes.
 * @param {boolean} [options.trailing=true] Makes the last value put onto the
 *     source channel available on the destination channel when the delay
 *     expires. If this is `false`, any inputs that come in during the delay are
 *     ignored, and the next value is not put onto the destination channel until
 *     the first input *after* the delay expires.
 * @param {module:csp.Channel} [options.cancel] A channel used to signal a
 *     cancellation of the throttling. Any value put onto this channel will
 *     cancel the current throttling operation, closing the output channel and
 *     discarding any values that were waiting for the throttle threshold timer
 *     to be sent to the output.
 * @return {module:csp.Channel}} The newly-created destination channel, where
 *     all of the values will be throttled from the source channel.
 */


function throttle(src, buffer, delay, options) {
  const defaults = {
    leading: true,
    trailing: true,
    cancel: Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["chan"])()
  };
  const [buf, del, opts] = Object(modules_common__WEBPACK_IMPORTED_MODULE_1__["isNumber"])(delay) ? [buffer, delay, Object.assign(defaults, options !== null && options !== void 0 ? options : {})] : [0, buffer, Object.assign(defaults, delay !== null && delay !== void 0 ? delay : {})];
  const dst = Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["chan"])(buf);
  const {
    leading,
    trailing,
    cancel
  } = opts;
  Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["go"])(async () => {
    let timer = Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["chan"])();
    let current = _chanko_csp__WEBPACK_IMPORTED_MODULE_0__["CLOSED"];

    for (;;) {
      const {
        value,
        channel
      } = await Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["select"])([src, timer, cancel]);

      if (channel === cancel) {
        Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["close"])(dst);
        break;
      }

      if (channel === src) {
        if (value === _chanko_csp__WEBPACK_IMPORTED_MODULE_0__["CLOSED"]) {
          Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["close"])(dst);
          break;
        }

        const timing = Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["isTimed"])(timer);

        if (!timing) {
          timer = Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["timedChan"])(del);
        }

        if (leading) {
          if (!timing) {
            await Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["send"])(dst, value);
          } else if (trailing) {
            current = value;
          }
        } else if (trailing) {
          current = value;
        }
      } else if (trailing && current !== _chanko_csp__WEBPACK_IMPORTED_MODULE_0__["CLOSED"]) {
        timer = Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["timedChan"])(del);
        await Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["send"])(dst, current);
        current = _chanko_csp__WEBPACK_IMPORTED_MODULE_0__["CLOSED"];
      } else {
        timer = Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["chan"])();
      }
    }
  });
  return dst;
}



/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vcHMvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL29wcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vcHMvL2hvbWUvYmFyYW5kaXMvRGV2ZWxvcG1lbnQvcHJvamVjdHMvY2hhbmtvL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jSXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vb3BzL2NzcC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vb3BzL2NzcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vcHMvY3NwL2hvbWUvYmFyYW5kaXMvRGV2ZWxvcG1lbnQvcHJvamVjdHMvY2hhbmtvL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL0FzeW5jR2VuZXJhdG9yLmpzIiwid2VicGFjazovL29wcy9jc3AvaG9tZS9iYXJhbmRpcy9EZXZlbG9wbWVudC9wcm9qZWN0cy9jaGFua28vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvQXdhaXRWYWx1ZS5qcyIsIndlYnBhY2s6Ly9vcHMvY3NwL2hvbWUvYmFyYW5kaXMvRGV2ZWxvcG1lbnQvcHJvamVjdHMvY2hhbmtvL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2F3YWl0QXN5bmNHZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vb3BzL2NzcC9ob21lL2JhcmFuZGlzL0RldmVsb3BtZW50L3Byb2plY3RzL2NoYW5rby9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy93cmFwQXN5bmNHZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vb3BzL2NzcC9ob21lL2JhcmFuZGlzL0RldmVsb3BtZW50L3Byb2plY3RzL2NoYW5rby9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovL29wcy9jc3AvaG9tZS9iYXJhbmRpcy9EZXZlbG9wbWVudC9wcm9qZWN0cy9jaGFua28vbm9kZV9tb2R1bGVzL3NldGltbWVkaWF0ZS9zZXRJbW1lZGlhdGUuanMiLCJ3ZWJwYWNrOi8vb3BzL2NzcC9ob21lL2JhcmFuZGlzL0RldmVsb3BtZW50L3Byb2plY3RzL2NoYW5rby9ub2RlX21vZHVsZXMvdGltZXJzLWJyb3dzZXJpZnkvbWFpbi5qcyIsIndlYnBhY2s6Ly9vcHMvY3NwLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly9vcHMvY3NwL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9vcHMvY3NwL3NyYy9tb2R1bGVzL2J1ZmZlci5qcyIsIndlYnBhY2s6Ly9vcHMvY3NwL3NyYy9tb2R1bGVzL2NoYW5uZWwvaGFuZGxlci5qcyIsIndlYnBhY2s6Ly9vcHMvY3NwL3NyYy9tb2R1bGVzL2NoYW5uZWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb3BzL2NzcC9zcmMvbW9kdWxlcy9jaGFubmVsL3NlbGVjdC5qcyIsIndlYnBhY2s6Ly9vcHMvY3NwL3NyYy9tb2R1bGVzL2Rpc3BhdGNoZXIuanMiLCJ3ZWJwYWNrOi8vb3BzL2NzcC9zcmMvbW9kdWxlcy9wcm9jZXNzLmpzIiwid2VicGFjazovL29wcy9jc3Avc3JjL21vZHVsZXMvcHJvdG9jb2wuanMiLCJ3ZWJwYWNrOi8vb3BzL2NzcC9zcmMvbW9kdWxlcy9xdWV1ZS5qcyIsIndlYnBhY2s6Ly9vcHMvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb3BzLy4vc3JjL21vZHVsZXMvY29tbW9uLmpzIiwid2VicGFjazovL29wcy8uL3NyYy9tb2R1bGVzL2NvbnZlcnNpb24uanMiLCJ3ZWJwYWNrOi8vb3BzLy4vc3JjL21vZHVsZXMvZmxvdy5qcyIsIndlYnBhY2s6Ly9vcHMvLi9zcmMvbW9kdWxlcy90aW1pbmcuanMiXSwibmFtZXMiOlsiQlVGRkVSIiwiU3ltYm9sIiwiRklYRUQiLCJEUk9QUElORyIsIlNMSURJTkciLCJvYmoiLCJxdWV1ZSIsInZhbHVlIiwicSIsInNpemUiLCJidWZmZXIiLCJxQ291bnQiLCJlbnF1ZXVlIiwiY291bnQiLCJkZXF1ZXVlIiwiTUFYX0RJUlRZIiwiTUFYX1FVRVVFRCIsIkNMT1NFRCIsIkJPWCIsInAiLCJ3cml0YWJsZSIsImhhbmRsZXIiLCJpc1RpbWVkIiwibWF4RGlydHkiLCJtYXhRdWV1ZWQiLCJ0cmFuc2R1Y2VyRm4iLCJyZWN2cyIsInNlbmRzIiwiZGlydHlSZWN2cyIsImRpcnR5U2VuZHMiLCJjbG9zZWQiLCJpc0J1ZmZlcmVkIiwiRXJyb3IiLCJjaGFubmVsIiwiYm94IiwiaXNGdWxsIiwiZG9uZSIsImlzQ29tcGxldGVkIiwicmVjZWl2ZXIiLCJFTVBUWSIsImNhbGxiYWNrIiwidmFsIiwicmVtb3ZlIiwiZGlzcGF0Y2giLCJjbG9zZSIsImZpbHRlciIsInNlbmRlciIsInNlbmRCb3giLCJzZW5kSGFuZGxlciIsIm1heCIsIkRFRkFVTFRfSEFORExFUiIsImFjdGl2ZSIsImNvbW1pdCIsImZuIiwiYWRkIiwidHJhbnNkdWNlciIsImhhbmRsZUV4Y2VwdGlvbiIsImJ1ZmZlclJlZHVjZXIiLCJidWYiLCJvcHRzIiwiZml4ZWQiLCJpc0J1ZmZlciIsInRpbWVyIiwiT2JqZWN0IiwiZGVmYXVsdE9wdGlvbnMiLCJwYXJzZUFyZ3MiLCJ4ZiIsImhhbmRsZXJUcmFuc2R1Y2VyIiwiY2giLCJjaGFuSW1wbCIsInJlY3YiLCJzZXRUaW1lb3V0IiwiY2xvc2VJbXBsIiwiZGVsYXkiLCJjaGFuIiwicmVzdWx0IiwiaGFuZGxlU2VuZCIsIm9wSGFuZGxlciIsImhhbmRsZVJlY3YiLCJyZXNvbHZlIiwic2VuZEFzeW5jIiwicmVjdkFzeW5jIiwicmVqZWN0IiwiREVGQVVMVCIsImdldCIsImFycmF5IiwiayIsImoiLCJ1cHBlciIsImkiLCJNYXRoIiwidGVtcCIsIm9wdGlvbnMiLCJvcHMiLCJwcmlvcml0eSIsImluZGljZXMiLCJyYW5kb21BcnJheSIsInNlbGVjdEhhbmRsZXIiLCJzZWxlY3RSZXN1bHQiLCJvcCIsIkFycmF5IiwiY3JlYXRlU2VsZWN0SGFuZGxlciIsImlzQm94Iiwic2VsZWN0QXN5bmMiLCJTRVRfSU1NRURJQVRFIiwiTUVTU0FHRV9DSEFOTkVMIiwiU0VUX1RJTUVPVVQiLCJiYXRjaFNpemUiLCJkaXNwYXRjaE1ldGhvZCIsImRpc3BhdGNoZXIiLCJjcmVhdGVEaXNwYXRjaGVyIiwicnVubmluZyIsInF1ZXVlZCIsImNhbGNEaXNwYXRjaE1ldGhvZCIsInNldEltbWVkaWF0ZSIsInByb2Nlc3NUYXNrcyIsInRhc2siLCJrZXkiLCJzZXREaXNwYXRjaGVyIiwidGltZWRDaGFuIiwiUHJvbWlzZSIsInByb3RvY29scyIsImluaXQiLCJzdGVwIiwiZmluYWwiLCJjb21wbGV0ZWQiLCJRVUVVRSIsInN0b3JlIiwicG9pbnRlciIsIml0ZW0iLCJlbmQiLCJwcmVkaWNhdGUiLCJpc051bWJlciIsIngiLCJwcm90b3R5cGUiLCJ0b1N0cmluZyIsImNhbGwiLCJpc0Zpbml0ZSIsInJlZHVjZSIsIm91dHB1dCIsImdvIiwiYWNjIiwidG9DaGFubmVsIiwiaXRlcmFibGUiLCJsZW5ndGgiLCJzZW5kIiwidG9BcnJheSIsImlucHV0IiwicHVzaCIsIlRBUFMiLCJwaXBlIiwic3JjIiwiZHN0Iiwia2VlcE9wZW4iLCJwYXJ0aXRpb24iLCJ0QnVmZmVyIiwiZkJ1ZmZlciIsInREc3QiLCJmRHN0IiwibWVyZ2UiLCJzcmNzIiwiaW5wdXRzIiwic2xpY2UiLCJzZWxlY3QiLCJzcGxpY2UiLCJpbmRleE9mIiwic3BsaXQiLCJidWZmZXJzIiwiYmZzIiwiZHN0cyIsIm1hcCIsImJmIiwibWFrZVRhcCIsImRlZmluZVByb3BlcnR5IiwiY29uZmlndXJhYmxlIiwidGFwIiwiaW5jbHVkZXMiLCJ1bnRhcCIsInRhcHMiLCJpbmRleCIsInVudGFwQWxsIiwic3JjbGVuIiwidmFsdWVzIiwiY2FsbGJhY2tzIiwiZGVib3VuY2UiLCJkZWZhdWx0cyIsImxlYWRpbmciLCJ0cmFpbGluZyIsIm1heERlbGF5IiwiY2FuY2VsIiwiZGVsIiwi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QyxTQUZEOztBQUlBO0FBQ0E7QUFDQTtBQUNDLFNBSEQsQ0FHQztBQUNEO0FBQ0E7QUFDQSxTLENBRUE7QUFDQTtBQUNBOzs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ25CQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7O0FBT0E7Ozs7Ozs7OztBQXNDQTs7Ozs7Ozs7Ozs7Ozs7O0FBZUE7Ozs7Ozs7Ozs7Ozs7QUFhQTs7Ozs7Ozs7Ozs7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QUVBLFVBQUk1SixPQUFPLEtBQUs0SixNQUFoQixFQUF3QjtBQUN0QmpKLGlFQUFLLENBQUM0RyxHQUFELENBQUw7QUFDQTtBQUNEOztBQUVELFVBQUl2SCxPQUFPLEtBQUtzSCxHQUFoQixFQUFxQjtBQUNuQixZQUFJaEosS0FBSyxLQUFLVSxrREFBZCxFQUFzQjtBQUNwQjJCLG1FQUFLLENBQUM0RyxHQUFELENBQUw7QUFDQTtBQUNEOztBQUVELGNBQU15QyxNQUFNLEdBQUczSywyREFBTyxDQUFDd0MsS0FBRCxDQUF0Qjs7QUFDQSxZQUFJLENBQUNtSSxNQUFMLEVBQWE7QUFDWG5JLGVBQUssR0FBR3lELDZEQUFTLENBQUN1RSxHQUFELENBQWpCO0FBQ0Q7O0FBRUQsWUFBSUosT0FBSixFQUFhO0FBQ1gsY0FBSSxDQUFDTyxNQUFMLEVBQWE7QUFDWCxrQkFBTWhELHdEQUFJLENBQUNPLEdBQUQsRUFBTWpKLEtBQU4sQ0FBVjtBQUNELFdBRkQsTUFFTyxJQUFJb0wsUUFBSixFQUFjO0FBQ25CSyxtQkFBTyxHQUFHekwsS0FBVjtBQUNEO0FBQ0YsU0FORCxNQU1PLElBQUlvTCxRQUFKLEVBQWM7QUFDbkJLLGlCQUFPLEdBQUd6TCxLQUFWO0FBQ0Q7QUFDRixPQXBCRCxNQW9CTyxJQUFJb0wsUUFBUSxJQUFJSyxPQUFPLEtBQUsvSyxrREFBNUIsRUFBb0M7QUFDekM2QyxhQUFLLEdBQUd5RCw2REFBUyxDQUFDdUUsR0FBRCxDQUFqQjtBQUNBLGNBQU03Qyx3REFBSSxDQUFDTyxHQUFELEVBQU13QyxPQUFOLENBQVY7QUFDQUEsZUFBTyxHQUFHL0ssa0RBQVY7QUFDRCxPQUpNLE1BSUE7QUFDTDZDLGFBQUssR0FBR1ksd0RBQUksRUFBWjtBQUNEO0FBQ0Y7QUFDRixHQXhDQyxDQUFGO0FBMENBLFNBQU84RSxHQUFQO0FBQ0QiLCJmaWxlIjoiY2hhbmtvLW9wcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIm9wc1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJvcHNcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZnVuY3Rpb24gX2FzeW5jSXRlcmF0b3IoaXRlcmFibGUpIHtcbiAgdmFyIG1ldGhvZDtcblxuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGlmIChTeW1ib2wuYXN5bmNJdGVyYXRvcikge1xuICAgICAgbWV0aG9kID0gaXRlcmFibGVbU3ltYm9sLmFzeW5jSXRlcmF0b3JdO1xuICAgICAgaWYgKG1ldGhvZCAhPSBudWxsKSByZXR1cm4gbWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgIH1cblxuICAgIGlmIChTeW1ib2wuaXRlcmF0b3IpIHtcbiAgICAgIG1ldGhvZCA9IGl0ZXJhYmxlW1N5bWJvbC5pdGVyYXRvcl07XG4gICAgICBpZiAobWV0aG9kICE9IG51bGwpIHJldHVybiBtZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgfVxuICB9XG5cbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk9iamVjdCBpcyBub3QgYXN5bmMgaXRlcmFibGVcIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FzeW5jSXRlcmF0b3I7IiwiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiY3NwXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImNzcFwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwidmFyIEF3YWl0VmFsdWUgPSByZXF1aXJlKFwiLi9Bd2FpdFZhbHVlXCIpO1xuXG5mdW5jdGlvbiBBc3luY0dlbmVyYXRvcihnZW4pIHtcbiAgdmFyIGZyb250LCBiYWNrO1xuXG4gIGZ1bmN0aW9uIHNlbmQoa2V5LCBhcmcpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlcXVlc3QgPSB7XG4gICAgICAgIGtleToga2V5LFxuICAgICAgICBhcmc6IGFyZyxcbiAgICAgICAgcmVzb2x2ZTogcmVzb2x2ZSxcbiAgICAgICAgcmVqZWN0OiByZWplY3QsXG4gICAgICAgIG5leHQ6IG51bGxcbiAgICAgIH07XG5cbiAgICAgIGlmIChiYWNrKSB7XG4gICAgICAgIGJhY2sgPSBiYWNrLm5leHQgPSByZXF1ZXN0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZnJvbnQgPSBiYWNrID0gcmVxdWVzdDtcbiAgICAgICAgcmVzdW1lKGtleSwgYXJnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc3VtZShrZXksIGFyZykge1xuICAgIHRyeSB7XG4gICAgICB2YXIgcmVzdWx0ID0gZ2VuW2tleV0oYXJnKTtcbiAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgIHZhciB3cmFwcGVkQXdhaXQgPSB2YWx1ZSBpbnN0YW5jZW9mIEF3YWl0VmFsdWU7XG4gICAgICBQcm9taXNlLnJlc29sdmUod3JhcHBlZEF3YWl0ID8gdmFsdWUud3JhcHBlZCA6IHZhbHVlKS50aGVuKGZ1bmN0aW9uIChhcmcpIHtcbiAgICAgICAgaWYgKHdyYXBwZWRBd2FpdCkge1xuICAgICAgICAgIHJlc3VtZShrZXkgPT09IFwicmV0dXJuXCIgPyBcInJldHVyblwiIDogXCJuZXh0XCIsIGFyZyk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0dGxlKHJlc3VsdC5kb25lID8gXCJyZXR1cm5cIiA6IFwibm9ybWFsXCIsIGFyZyk7XG4gICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIHJlc3VtZShcInRocm93XCIsIGVycik7XG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHNldHRsZShcInRocm93XCIsIGVycik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2V0dGxlKHR5cGUsIHZhbHVlKSB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIFwicmV0dXJuXCI6XG4gICAgICAgIGZyb250LnJlc29sdmUoe1xuICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICBkb25lOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBcInRocm93XCI6XG4gICAgICAgIGZyb250LnJlamVjdCh2YWx1ZSk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBmcm9udC5yZXNvbHZlKHtcbiAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgZG9uZTogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGZyb250ID0gZnJvbnQubmV4dDtcblxuICAgIGlmIChmcm9udCkge1xuICAgICAgcmVzdW1lKGZyb250LmtleSwgZnJvbnQuYXJnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYmFjayA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgdGhpcy5faW52b2tlID0gc2VuZDtcblxuICBpZiAodHlwZW9mIGdlbltcInJldHVyblwiXSAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdGhpc1tcInJldHVyblwiXSA9IHVuZGVmaW5lZDtcbiAgfVxufVxuXG5pZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5hc3luY0l0ZXJhdG9yKSB7XG4gIEFzeW5jR2VuZXJhdG9yLnByb3RvdHlwZVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG59XG5cbkFzeW5jR2VuZXJhdG9yLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKGFyZykge1xuICByZXR1cm4gdGhpcy5faW52b2tlKFwibmV4dFwiLCBhcmcpO1xufTtcblxuQXN5bmNHZW5lcmF0b3IucHJvdG90eXBlW1widGhyb3dcIl0gPSBmdW5jdGlvbiAoYXJnKSB7XG4gIHJldHVybiB0aGlzLl9pbnZva2UoXCJ0aHJvd1wiLCBhcmcpO1xufTtcblxuQXN5bmNHZW5lcmF0b3IucHJvdG90eXBlW1wicmV0dXJuXCJdID0gZnVuY3Rpb24gKGFyZykge1xuICByZXR1cm4gdGhpcy5faW52b2tlKFwicmV0dXJuXCIsIGFyZyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFzeW5jR2VuZXJhdG9yOyIsImZ1bmN0aW9uIF9Bd2FpdFZhbHVlKHZhbHVlKSB7XG4gIHRoaXMud3JhcHBlZCA9IHZhbHVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9Bd2FpdFZhbHVlOyIsInZhciBBd2FpdFZhbHVlID0gcmVxdWlyZShcIi4vQXdhaXRWYWx1ZVwiKTtcblxuZnVuY3Rpb24gX2F3YWl0QXN5bmNHZW5lcmF0b3IodmFsdWUpIHtcbiAgcmV0dXJuIG5ldyBBd2FpdFZhbHVlKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXdhaXRBc3luY0dlbmVyYXRvcjsiLCJ2YXIgQXN5bmNHZW5lcmF0b3IgPSByZXF1aXJlKFwiLi9Bc3luY0dlbmVyYXRvclwiKTtcblxuZnVuY3Rpb24gX3dyYXBBc3luY0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBuZXcgQXN5bmNHZW5lcmF0b3IoZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3dyYXBBc3luY0dlbmVyYXRvcjsiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiKGZ1bmN0aW9uIChnbG9iYWwsIHVuZGVmaW5lZCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgaWYgKGdsb2JhbC5zZXRJbW1lZGlhdGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBuZXh0SGFuZGxlID0gMTsgLy8gU3BlYyBzYXlzIGdyZWF0ZXIgdGhhbiB6ZXJvXG4gICAgdmFyIHRhc2tzQnlIYW5kbGUgPSB7fTtcbiAgICB2YXIgY3VycmVudGx5UnVubmluZ0FUYXNrID0gZmFsc2U7XG4gICAgdmFyIGRvYyA9IGdsb2JhbC5kb2N1bWVudDtcbiAgICB2YXIgcmVnaXN0ZXJJbW1lZGlhdGU7XG5cbiAgICBmdW5jdGlvbiBzZXRJbW1lZGlhdGUoY2FsbGJhY2spIHtcbiAgICAgIC8vIENhbGxiYWNrIGNhbiBlaXRoZXIgYmUgYSBmdW5jdGlvbiBvciBhIHN0cmluZ1xuICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGNhbGxiYWNrID0gbmV3IEZ1bmN0aW9uKFwiXCIgKyBjYWxsYmFjayk7XG4gICAgICB9XG4gICAgICAvLyBDb3B5IGZ1bmN0aW9uIGFyZ3VtZW50c1xuICAgICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpICsgMV07XG4gICAgICB9XG4gICAgICAvLyBTdG9yZSBhbmQgcmVnaXN0ZXIgdGhlIHRhc2tcbiAgICAgIHZhciB0YXNrID0geyBjYWxsYmFjazogY2FsbGJhY2ssIGFyZ3M6IGFyZ3MgfTtcbiAgICAgIHRhc2tzQnlIYW5kbGVbbmV4dEhhbmRsZV0gPSB0YXNrO1xuICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUobmV4dEhhbmRsZSk7XG4gICAgICByZXR1cm4gbmV4dEhhbmRsZSsrO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFySW1tZWRpYXRlKGhhbmRsZSkge1xuICAgICAgICBkZWxldGUgdGFza3NCeUhhbmRsZVtoYW5kbGVdO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJ1bih0YXNrKSB7XG4gICAgICAgIHZhciBjYWxsYmFjayA9IHRhc2suY2FsbGJhY2s7XG4gICAgICAgIHZhciBhcmdzID0gdGFzay5hcmdzO1xuICAgICAgICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJ1bklmUHJlc2VudChoYW5kbGUpIHtcbiAgICAgICAgLy8gRnJvbSB0aGUgc3BlYzogXCJXYWl0IHVudGlsIGFueSBpbnZvY2F0aW9ucyBvZiB0aGlzIGFsZ29yaXRobSBzdGFydGVkIGJlZm9yZSB0aGlzIG9uZSBoYXZlIGNvbXBsZXRlZC5cIlxuICAgICAgICAvLyBTbyBpZiB3ZSdyZSBjdXJyZW50bHkgcnVubmluZyBhIHRhc2ssIHdlJ2xsIG5lZWQgdG8gZGVsYXkgdGhpcyBpbnZvY2F0aW9uLlxuICAgICAgICBpZiAoY3VycmVudGx5UnVubmluZ0FUYXNrKSB7XG4gICAgICAgICAgICAvLyBEZWxheSBieSBkb2luZyBhIHNldFRpbWVvdXQuIHNldEltbWVkaWF0ZSB3YXMgdHJpZWQgaW5zdGVhZCwgYnV0IGluIEZpcmVmb3ggNyBpdCBnZW5lcmF0ZWQgYVxuICAgICAgICAgICAgLy8gXCJ0b28gbXVjaCByZWN1cnNpb25cIiBlcnJvci5cbiAgICAgICAgICAgIHNldFRpbWVvdXQocnVuSWZQcmVzZW50LCAwLCBoYW5kbGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHRhc2sgPSB0YXNrc0J5SGFuZGxlW2hhbmRsZV07XG4gICAgICAgICAgICBpZiAodGFzaykge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IHRydWU7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcnVuKHRhc2spO1xuICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW1tZWRpYXRlKGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxOZXh0VGlja0ltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgcHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbiAoKSB7IHJ1bklmUHJlc2VudChoYW5kbGUpOyB9KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYW5Vc2VQb3N0TWVzc2FnZSgpIHtcbiAgICAgICAgLy8gVGhlIHRlc3QgYWdhaW5zdCBgaW1wb3J0U2NyaXB0c2AgcHJldmVudHMgdGhpcyBpbXBsZW1lbnRhdGlvbiBmcm9tIGJlaW5nIGluc3RhbGxlZCBpbnNpZGUgYSB3ZWIgd29ya2VyLFxuICAgICAgICAvLyB3aGVyZSBgZ2xvYmFsLnBvc3RNZXNzYWdlYCBtZWFucyBzb21ldGhpbmcgY29tcGxldGVseSBkaWZmZXJlbnQgYW5kIGNhbid0IGJlIHVzZWQgZm9yIHRoaXMgcHVycG9zZS5cbiAgICAgICAgaWYgKGdsb2JhbC5wb3N0TWVzc2FnZSAmJiAhZ2xvYmFsLmltcG9ydFNjcmlwdHMpIHtcbiAgICAgICAgICAgIHZhciBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhciBvbGRPbk1lc3NhZ2UgPSBnbG9iYWwub25tZXNzYWdlO1xuICAgICAgICAgICAgZ2xvYmFsLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXMgPSBmYWxzZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBnbG9iYWwucG9zdE1lc3NhZ2UoXCJcIiwgXCIqXCIpO1xuICAgICAgICAgICAgZ2xvYmFsLm9ubWVzc2FnZSA9IG9sZE9uTWVzc2FnZTtcbiAgICAgICAgICAgIHJldHVybiBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbFBvc3RNZXNzYWdlSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIC8vIEluc3RhbGxzIGFuIGV2ZW50IGhhbmRsZXIgb24gYGdsb2JhbGAgZm9yIHRoZSBgbWVzc2FnZWAgZXZlbnQ6IHNlZVxuICAgICAgICAvLyAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuL0RPTS93aW5kb3cucG9zdE1lc3NhZ2VcbiAgICAgICAgLy8gKiBodHRwOi8vd3d3LndoYXR3Zy5vcmcvc3BlY3Mvd2ViLWFwcHMvY3VycmVudC13b3JrL211bHRpcGFnZS9jb21tcy5odG1sI2Nyb3NzRG9jdW1lbnRNZXNzYWdlc1xuXG4gICAgICAgIHZhciBtZXNzYWdlUHJlZml4ID0gXCJzZXRJbW1lZGlhdGUkXCIgKyBNYXRoLnJhbmRvbSgpICsgXCIkXCI7XG4gICAgICAgIHZhciBvbkdsb2JhbE1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnNvdXJjZSA9PT0gZ2xvYmFsICYmXG4gICAgICAgICAgICAgICAgdHlwZW9mIGV2ZW50LmRhdGEgPT09IFwic3RyaW5nXCIgJiZcbiAgICAgICAgICAgICAgICBldmVudC5kYXRhLmluZGV4T2YobWVzc2FnZVByZWZpeCkgPT09IDApIHtcbiAgICAgICAgICAgICAgICBydW5JZlByZXNlbnQoK2V2ZW50LmRhdGEuc2xpY2UobWVzc2FnZVByZWZpeC5sZW5ndGgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBvbkdsb2JhbE1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGdsb2JhbC5hdHRhY2hFdmVudChcIm9ubWVzc2FnZVwiLCBvbkdsb2JhbE1lc3NhZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShtZXNzYWdlUHJlZml4ICsgaGFuZGxlLCBcIipcIik7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbE1lc3NhZ2VDaGFubmVsSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHZhciBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBoYW5kbGUgPSBldmVudC5kYXRhO1xuICAgICAgICAgICAgcnVuSWZQcmVzZW50KGhhbmRsZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIGNoYW5uZWwucG9ydDIucG9zdE1lc3NhZ2UoaGFuZGxlKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsUmVhZHlTdGF0ZUNoYW5nZUltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICB2YXIgaHRtbCA9IGRvYy5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICAvLyBDcmVhdGUgYSA8c2NyaXB0PiBlbGVtZW50OyBpdHMgcmVhZHlzdGF0ZWNoYW5nZSBldmVudCB3aWxsIGJlIGZpcmVkIGFzeW5jaHJvbm91c2x5IG9uY2UgaXQgaXMgaW5zZXJ0ZWRcbiAgICAgICAgICAgIC8vIGludG8gdGhlIGRvY3VtZW50LiBEbyBzbywgdGh1cyBxdWV1aW5nIHVwIHRoZSB0YXNrLiBSZW1lbWJlciB0byBjbGVhbiB1cCBvbmNlIGl0J3MgYmVlbiBjYWxsZWQuXG4gICAgICAgICAgICB2YXIgc2NyaXB0ID0gZG9jLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgICAgICAgICBzY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJ1bklmUHJlc2VudChoYW5kbGUpO1xuICAgICAgICAgICAgICAgIHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBudWxsO1xuICAgICAgICAgICAgICAgIGh0bWwucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgICAgICAgICBzY3JpcHQgPSBudWxsO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsU2V0VGltZW91dEltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgc2V0VGltZW91dChydW5JZlByZXNlbnQsIDAsIGhhbmRsZSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gSWYgc3VwcG9ydGVkLCB3ZSBzaG91bGQgYXR0YWNoIHRvIHRoZSBwcm90b3R5cGUgb2YgZ2xvYmFsLCBzaW5jZSB0aGF0IGlzIHdoZXJlIHNldFRpbWVvdXQgZXQgYWwuIGxpdmUuXG4gICAgdmFyIGF0dGFjaFRvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mICYmIE9iamVjdC5nZXRQcm90b3R5cGVPZihnbG9iYWwpO1xuICAgIGF0dGFjaFRvID0gYXR0YWNoVG8gJiYgYXR0YWNoVG8uc2V0VGltZW91dCA/IGF0dGFjaFRvIDogZ2xvYmFsO1xuXG4gICAgLy8gRG9uJ3QgZ2V0IGZvb2xlZCBieSBlLmcuIGJyb3dzZXJpZnkgZW52aXJvbm1lbnRzLlxuICAgIGlmICh7fS50b1N0cmluZy5jYWxsKGdsb2JhbC5wcm9jZXNzKSA9PT0gXCJbb2JqZWN0IHByb2Nlc3NdXCIpIHtcbiAgICAgICAgLy8gRm9yIE5vZGUuanMgYmVmb3JlIDAuOVxuICAgICAgICBpbnN0YWxsTmV4dFRpY2tJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChjYW5Vc2VQb3N0TWVzc2FnZSgpKSB7XG4gICAgICAgIC8vIEZvciBub24tSUUxMCBtb2Rlcm4gYnJvd3NlcnNcbiAgICAgICAgaW5zdGFsbFBvc3RNZXNzYWdlSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoZ2xvYmFsLk1lc3NhZ2VDaGFubmVsKSB7XG4gICAgICAgIC8vIEZvciB3ZWIgd29ya2Vycywgd2hlcmUgc3VwcG9ydGVkXG4gICAgICAgIGluc3RhbGxNZXNzYWdlQ2hhbm5lbEltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGRvYyAmJiBcIm9ucmVhZHlzdGF0ZWNoYW5nZVwiIGluIGRvYy5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpKSB7XG4gICAgICAgIC8vIEZvciBJRSA24oCTOFxuICAgICAgICBpbnN0YWxsUmVhZHlTdGF0ZUNoYW5nZUltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBGb3Igb2xkZXIgYnJvd3NlcnNcbiAgICAgICAgaW5zdGFsbFNldFRpbWVvdXRJbXBsZW1lbnRhdGlvbigpO1xuICAgIH1cblxuICAgIGF0dGFjaFRvLnNldEltbWVkaWF0ZSA9IHNldEltbWVkaWF0ZTtcbiAgICBhdHRhY2hUby5jbGVhckltbWVkaWF0ZSA9IGNsZWFySW1tZWRpYXRlO1xufSh0eXBlb2Ygc2VsZiA9PT0gXCJ1bmRlZmluZWRcIiA/IHR5cGVvZiBnbG9iYWwgPT09IFwidW5kZWZpbmVkXCIgPyB0aGlzIDogZ2xvYmFsIDogc2VsZikpO1xuIiwidmFyIHNjb3BlID0gKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgJiYgZ2xvYmFsKSB8fFxuICAgICAgICAgICAgKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmIHNlbGYpIHx8XG4gICAgICAgICAgICB3aW5kb3c7XG52YXIgYXBwbHkgPSBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHk7XG5cbi8vIERPTSBBUElzLCBmb3IgY29tcGxldGVuZXNzXG5cbmV4cG9ydHMuc2V0VGltZW91dCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFRpbWVvdXQoYXBwbHkuY2FsbChzZXRUaW1lb3V0LCBzY29wZSwgYXJndW1lbnRzKSwgY2xlYXJUaW1lb3V0KTtcbn07XG5leHBvcnRzLnNldEludGVydmFsID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgVGltZW91dChhcHBseS5jYWxsKHNldEludGVydmFsLCBzY29wZSwgYXJndW1lbnRzKSwgY2xlYXJJbnRlcnZhbCk7XG59O1xuZXhwb3J0cy5jbGVhclRpbWVvdXQgPVxuZXhwb3J0cy5jbGVhckludGVydmFsID0gZnVuY3Rpb24odGltZW91dCkge1xuICBpZiAodGltZW91dCkge1xuICAgIHRpbWVvdXQuY2xvc2UoKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gVGltZW91dChpZCwgY2xlYXJGbikge1xuICB0aGlzLl9pZCA9IGlkO1xuICB0aGlzLl9jbGVhckZuID0gY2xlYXJGbjtcbn1cblRpbWVvdXQucHJvdG90eXBlLnVucmVmID0gVGltZW91dC5wcm90b3R5cGUucmVmID0gZnVuY3Rpb24oKSB7fTtcblRpbWVvdXQucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuX2NsZWFyRm4uY2FsbChzY29wZSwgdGhpcy5faWQpO1xufTtcblxuLy8gRG9lcyBub3Qgc3RhcnQgdGhlIHRpbWUsIGp1c3Qgc2V0cyB1cCB0aGUgbWVtYmVycyBuZWVkZWQuXG5leHBvcnRzLmVucm9sbCA9IGZ1bmN0aW9uKGl0ZW0sIG1zZWNzKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcbiAgaXRlbS5faWRsZVRpbWVvdXQgPSBtc2Vjcztcbn07XG5cbmV4cG9ydHMudW5lbnJvbGwgPSBmdW5jdGlvbihpdGVtKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcbiAgaXRlbS5faWRsZVRpbWVvdXQgPSAtMTtcbn07XG5cbmV4cG9ydHMuX3VucmVmQWN0aXZlID0gZXhwb3J0cy5hY3RpdmUgPSBmdW5jdGlvbihpdGVtKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcblxuICB2YXIgbXNlY3MgPSBpdGVtLl9pZGxlVGltZW91dDtcbiAgaWYgKG1zZWNzID49IDApIHtcbiAgICBpdGVtLl9pZGxlVGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbiBvblRpbWVvdXQoKSB7XG4gICAgICBpZiAoaXRlbS5fb25UaW1lb3V0KVxuICAgICAgICBpdGVtLl9vblRpbWVvdXQoKTtcbiAgICB9LCBtc2Vjcyk7XG4gIH1cbn07XG5cbi8vIHNldGltbWVkaWF0ZSBhdHRhY2hlcyBpdHNlbGYgdG8gdGhlIGdsb2JhbCBvYmplY3RcbnJlcXVpcmUoXCJzZXRpbW1lZGlhdGVcIik7XG4vLyBPbiBzb21lIGV4b3RpYyBlbnZpcm9ubWVudHMsIGl0J3Mgbm90IGNsZWFyIHdoaWNoIG9iamVjdCBgc2V0aW1tZWRpYXRlYCB3YXNcbi8vIGFibGUgdG8gaW5zdGFsbCBvbnRvLiAgU2VhcmNoIGVhY2ggcG9zc2liaWxpdHkgaW4gdGhlIHNhbWUgb3JkZXIgYXMgdGhlXG4vLyBgc2V0aW1tZWRpYXRlYCBsaWJyYXJ5LlxuZXhwb3J0cy5zZXRJbW1lZGlhdGUgPSAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZi5zZXRJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiICYmIGdsb2JhbC5zZXRJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICh0aGlzICYmIHRoaXMuc2V0SW1tZWRpYXRlKTtcbmV4cG9ydHMuY2xlYXJJbW1lZGlhdGUgPSAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZi5jbGVhckltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBnbG9iYWwuY2xlYXJJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMgJiYgdGhpcy5jbGVhckltbWVkaWF0ZSk7XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuLyoqXG4gKiBBbGwgb2YgdGhlIHB1YmxpYy1mYWNpbmcgQ2hhbmtvIGZ1bmN0aW9ucyBhcmUgZ2F0aGVyZWQgaGVyZSBpbiBvbmUgcGxhY2UgdG9cbiAqIGJlIGV4cG9ydGVkIGFzIGEgd2hvbGUuIFRoaXMgaXMgYSBjb21wbGV0ZWx5IGZsYXQgbGlzdCBvZiBleHBvcnRzLCBhc1xuICogaW5sdWRpbmcgYW55IG9iamVjdCBsaXRlcmFscyBmb3IgZXhwb3J0ICh3aGljaCB3b3VsZCBiZSBuYXR1cmFsIGZvciBidWZmZXJzLFxuICogZm9yIGV4YW1wbGUpIHdvdWxkIGtlZXAgdHJlZS1zaGFraW5nIGZyb20gd29ya2luZyByaWdodC5cbiAqXG4gKiBAbW9kdWxlIGNzcFxuICovXG5cbmV4cG9ydCB7IGZpeGVkLCBkcm9wcGluZywgc2xpZGluZyB9IGZyb20gXCJtb2R1bGVzL2J1ZmZlclwiO1xuZXhwb3J0IHtcbiAgQ0xPU0VELFxuICBjaGFuLFxuICB0aW1lZENoYW4sXG4gIHRyYW5zQ2hhbixcbiAgc2VuZCxcbiAgcmVjdixcbiAgc2VuZEFzeW5jLFxuICByZWN2QXN5bmMsXG4gIHJlY3ZPclRocm93LFxuICBjbG9zZSxcbiAgaXNDbG9zZWQsXG4gIGlzQnVmZmVyZWQsXG4gIGlzVGltZWQsXG4gIHNlbGVjdCxcbiAgc2VsZWN0QXN5bmMsXG4gIHZhbHVlLFxuICBjaGFubmVsXG59IGZyb20gXCJtb2R1bGVzL2NoYW5uZWxcIjtcbmV4cG9ydCB7XG4gIGNvbmZpZyxcbiAgU0VUX0lNTUVESUFURSxcbiAgTUVTU0FHRV9DSEFOTkVMLFxuICBTRVRfVElNRU9VVFxufSBmcm9tIFwibW9kdWxlcy9kaXNwYXRjaGVyXCI7XG5leHBvcnQgeyBnbywgc2xlZXAsIGpvaW4gfSBmcm9tIFwibW9kdWxlcy9wcm9jZXNzXCI7XG5leHBvcnQgeyBFTVBUWSB9IGZyb20gXCJtb2R1bGVzL3F1ZXVlXCI7XG5cbi8qKlxuICogQW4gZXJyb3IgaGFuZGxpbmcgZnVuY2l0b24uIFRoaXMgaXMgdXNlZCB0byBoYW5kbGUgZXhjZXB0aW9ucyB0aHJvd24gaW4gYXN5bmNcbiAqIGZ1bmN0aW9ucyBhbmQgaW4gdHJhbnNkdWNlcnMuIFRoZSByZXR1cm4gdmFsdWUgb2YgYW4gZXhjZXB0aW9uIGhhbmRsZXIgaXNcbiAqIHR5cGljYWxseSBzZW50IHRvIGEgY2hhbm5lbDsgaWYgdGhlIGV4Y2VwdGlvbiBoYXBwZW5lZCB3aXRoaW4gYW4gYXN5bmNcbiAqIGZ1bmN0aW9uLCBpdCB3aWxsIGJlIHNlbnQgdG8gdGhhdCBmdW5jdGlvbidzIG91dHB1dCBjaGFubmVsLCBhbmQgaWYgdGhlXG4gKiBleGNwZXRpb24gaGFwcGVuZWQgaW4gYSB0cmFuc2R1Y2VyLCBpdCB3aWxsIGJlIHNlbnQgdG8gdGhlIGNoYW5uZWwgdG8gd2hpY2hcbiAqIHRoZSB0cmFuc2R1Y2VyIGlzIGF0dGFjaGVkLlxuICpcbiAqIEBjYWxsYmFjayBFeGNlcHRpb25IYW5kbGVyXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICogQHBhcmFtIHtvYmplY3R9IGVyciBUaGUgZXJyb3Igb2JqZWN0IHRoYXQgd2FzIHRocm93biB0byBjYXVzZSB0aGUgZXJyb3IgdG9cbiAqICAgICBoYXZlIHRvIGJlIGhhbmRsZWQuXG4gKiBAcmV0dXJuIHsqfSBBIHZhbHVlIGRlY2lkZWQgYnkgdGhlIGhhbmRsZXIgdGhhdCB3aWxsIGJlIHNlbnQgdG8gYSBjaGFubmVsLlxuICovXG5cbi8qKlxuICogQSBjYWxsYmFjayB0aGF0J3MgcnVuIHdoZW4gYSBub24tYmxvY2tpbmcgY2hhbm5lbCBvcGVyYXRpb24gY29tcGxldGVzLiBUaGVcbiAqIHZhbHVlIHRoYXQgdGhpcyBmdW5jdGlvbiByZWNlaXZlcyBpcyBpZGVudGljYWwgdG8gd2hhdCBpcyByZXR1cm5lZCBieSBhXG4gKiBibG9ja2luZyBjYWxsOiB0aGUgdmFsdWUgcmVjZWl2ZWQgZnJvbSB0aGUgY2hhbm5lbCBmb3IgYSBgcmVjdmAsIG9yIGB0cnVlYCBvclxuICogYGZhbHNlYCBkZXBlbmRpbmcgb24gdGhlIGNoYW5uZWwgc3RhdHVzIGZvciBhIGBzZW5kYC4gQW55IHJldHVybiB2YWx1ZSBmcm9tXG4gKiB0aGlzIGNhbGxiYWNrIGlzIGlnbm9yZWQuXG4gKlxuICogQGNhbGxiYWNrIE9wQ2FsbGJhY2tcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcGFyYW0geyp9IHZhbHVlIEVpdGhlciB0aGUgdmFsdWUgcmVjZWl2ZWQgZnJvbSB0aGUgY2hhbm5lbCwgb3Igd2hldGhlciBvclxuICogbm90IGEgdmFsdWUgd2FzIHN1Y2Nlc3NmdWxseSBzZW50LlxuICovXG5cbi8qKlxuICogQSBjYWxsYmFjayB0aGF0J3MgcnVuIHdoZW4gYSBub24tYmxvY2tpbmcgYHNlbGVjdGAgb3BlcmF0aW9uIGNvbXBsZXRlcy4gVGhlXG4gKiB2YWx1ZSB0aGF0IHRoaXMgZnVuY3Rpb24gcmVjZWl2ZXMgaXMgYW4gb2JqZWN0IHdpdGggdHdvIHByb3BlcnRpZXM6IHRoZSB2YWx1ZVxuICogdGhhdCB0aGUgYHNlbGVjdGAgb3BlcmF0aW9uIGNvbXBsZXRlZCB3aXRoIChlaXRoZXIgdGhlIHZhbHVlIHJlY2VpdmVkIGZyb21cbiAqIHRoZSBjaGFubmVsIGluIGEgcmVjZWl2ZSBvcGVyYXRpb24sIG9yIGB0cnVlYCBvciBgZmFsc2VgIGluIGEgc2VuZFxuICogb3BlcmF0aW9uKSwgYWxvbmcgd2l0aCB0aGUgY2hhbm5lbCB3aGVyZSB0aGUgb3BlcmF0aW9uIGFjdHVhbGx5IGhhcHBlbmVkLiBBbnlcbiAqIHJldHVybiB2YWx1ZSBmcm9tIHRoaXMgY2FsbGJhY2sgaXMgaWdub3JlZC5cbiAqXG4gKiBAY2FsbGJhY2sgU2VsZWN0Q2FsbGJhY2tcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuU2VsZWN0UmVzdWx0fSBkYXRhIFRoZSB2YWx1ZSByZXR1cm5lZCBmcm9tIHRoZSBzZWxlY3RcbiAqICAgICBvcGVyYXRpb24uXG4gKi9cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG4vKipcbiAqIFByb3ZpZGVzIHNldmVyYWwgdHlwZXMgb2YgYnVmZmVycyB1c2FibGUgaW4gYnVmZmVyZWQgY2hhbm5lbHMuIFRoZXNlIGFyZSBhbGxcbiAqIGJ1aWx0IG9uIGEgc21hbGwsIGVmZmljaWVudCBxdWV1ZSB3aGljaCBpcyBpbiB0dXJuIGJhY2tlZCBieSBhIEphdmFTY3JpcHRcbiAqIGFycmF5LlxuICpcbiAqIEBtb2R1bGUgY3NwL2J1ZmZlclxuICogQHByaXZhdGVcbiAqL1xuXG5pbXBvcnQgeyBxdWV1ZSBhcyBxLCBjb3VudCBhcyBxQ291bnQsIGVucXVldWUsIGRlcXVldWUgfSBmcm9tIFwibW9kdWxlcy9xdWV1ZVwiO1xuXG4vKipcbiAqIEEgYnVmZmVyIHRoYXQgc3RvcmVzIHZhbHVlcyBzZW50IHRvIGEgYnVmZmVyZWQgY2hhbm5lbCB1bnRpbCBhIHByb2Nlc3NcbiAqIHJlY2VpdmVzIHRoZW0uXG4gKlxuICogRGlmZmVyZW50IGJ1ZmZlcnMgZGlmZmVyIG9ubHkgaW4gdGhlIHdheSB0aGF0IHRoZXkgZGV0ZXJtaW5lIHdoZXRoZXIgdGhleSBhcmVcbiAqIGZ1bGwgYW5kIGluIHdoYXQgaGFwcGVucyB3aGVuIGEgbmV3IHZhbHVlIGlzIGFkZGVkIHRvIGEgZnVsbCBidWZmZXIuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqIEB0eXBlZGVmIHsobW9kdWxlOmNzcC5GaXhlZEJ1ZmZlciB8IG1vZHVsZTpjc3AuRHJvcHBpbmdCdWZmZXIgfFxuICogICAgIG1vZHVsZTpjc3AuU2xpZGluZ0J1ZmZlcil9IEJ1ZmZlclxuICovXG5cbi8qKlxuICogVGhlIG5hbWUgb2YgYSBwcm9wZXJ0eSB0aGF0IGV4aXN0cyBvbiBidWZmZXIgb2JqZWN0cyBmb3IgdGhlIHB1cnBvc2Ugb2ZcbiAqIGl0ZW50aWZ5aW5nIHRoZW0gYXMgYnVmZmVyIG9iamVjdHMuXG4gKlxuICogQHR5cGUge1N5bWJvbH1cbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IEJVRkZFUiA9IFN5bWJvbChcIkJVRkZFUlwiKTtcblxuLyoqXG4gKiBBIHBvc3NpYmxlIHZhbHVlIG9mIHRoZSBge0BsaW5rIG1vZHVsZTpjc3AvYnVmZmVyLkJVRkZFUnxCVUZGRVJ9IHByb3BlcnR5XG4gKiBpbmRpY2F0aW5nIHRoYXQgdGhlIGJ1ZmZlciBpcyBhIGZpeGVkIGJ1ZmZlci5cbiAqXG4gKiBAdHlwZSB7U3ltYm9sfVxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgRklYRUQgPSBTeW1ib2woXCJGSVhFRFwiKTtcblxuLyoqXG4gKiBBIHBvc3NpYmxlIHZhbHVlIG9mIHRoZSBge0BsaW5rIG1vZHVsZTpjc3AvYnVmZmVyLkJVRkZFUnxCVUZGRVJ9IHByb3BlcnR5XG4gKiBpbmRpY2F0aW5nIHRoYXQgdGhlIGJ1ZmZlciBpcyBhIGRyb3BwaW5nIGJ1ZmZlci5cbiAqXG4gKiBAdHlwZSB7U3ltYm9sfVxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgRFJPUFBJTkcgPSBTeW1ib2woXCJEUk9QUElOR1wiKTtcblxuLyoqXG4gKiBBIHBvc3NpYmxlIHZhbHVlIG9mIHRoZSBge0BsaW5rIG1vZHVsZTpjc3AvYnVmZmVyLkJVRkZFUnxCVUZGRVJ9IHByb3BlcnR5XG4gKiBpbmRpY2F0aW5nIHRoYXQgdGhlIGJ1ZmZlciBpcyBhIHNsaWRpbmcgYnVmZmVyLlxuICpcbiAqIEB0eXBlIHtTeW1ib2x9XG4gKiBAcHJpdmF0ZVxuICovXG5jb25zdCBTTElESU5HID0gU3ltYm9sKFwiU0xJRElOR1wiKTtcblxuLyoqXG4gKiBQcmVkaWNhdGUgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBzdXBwbGllZCBvYmplY3QgaXMgYSBidWZmZXIuXG4gKlxuICogQHBhcmFtIHsqfSBvYmogVGhlIHZhbHVlIHRvIHRlc3QgdG8gc2VlIGlmIGl0J3MgYSBidWZmZXIuXG4gKiBAcmV0dXJuIHtib29sZWFufSBFaXRoZXIgYHRydWVgIGlmIHRoZSB2YWx1ZSBpcyBhIGJ1ZmZlciwgb3IgYGZhbHNlYCBpZiBpdCBpc1xuICogICAgIG5vdC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGlzQnVmZmVyKG9iaikge1xuICByZXR1cm4gISFvYmo/LltCVUZGRVJdO1xufVxuXG4vKipcbiAqIEEgYnVmZmVyIGltcGxlbWVudGF0aW9uIHRoYXQgbmV2ZXIgZGlzY2FyZHMgYnVmZmVyZWQgaXRlbXMgd2hlbiBhIG5ldyBpdGVtIGlzXG4gKiBhZGRlZC5cbiAqXG4gKiBUaGlzIGJ1ZmZlciBoYXMgYSBjb25jZXB0IG9mICpmdWxsKiwgYnV0IGl0J3MgYSBzb2Z0IGxpbWl0LiBJZiB0aGUgc2l6ZSBvZlxuICogdGhlIGJ1ZmZlciBpcyBleGNlZWRlZCwgYWRkZWQgaXRlbXMgYXJlIHN0aWxsIHN0b3JlZC5cbiAqXG4gKiBBIGJ1ZmZlciBvZiB0aGlzIHR5cGUgZXhpc3RzIG9ubHkgYXMgYW4gb2JqZWN0IHRoYXQgY2FuIGJlIHBhc3NlZCB0byBhXG4gKiBjaGFubmVsIGNyZWF0aW9uIGZ1bmN0aW9uIChzdWNoIGFzIHtAbGluayBtb2R1bGU6Y3NwLmNoYW58Y2hhbn0pIHRvIG1ha2UgdGhhdFxuICogY2hhbm5lbCBhIGJ1ZmZlcmVkIGNoYW5uZWwuIEl0IGRvZXNuJ3QgaGF2ZSBhbnkgcHJvcGVydGllcyB0aGF0IGFyZSBpbnRlbmRlZFxuICogZm9yIGV4dGVybmFsIHVzZS5cbiAqXG4gKiBAdHlwZWRlZiBGaXhlZEJ1ZmZlclxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgYSBmaXhlZCBidWZmZXIgb2YgdGhlIHNwZWNpZmllZCBjYXBhY2l0eS5cbiAqXG4gKiBBIGZpeGVkIGJ1ZmZlciBpcyBhICdub3JtYWwnIGJ1ZmZlciwgb25lIHRoYXQgc3RvcmVzIGFuZCByZXR1cm5zIGl0ZW1zIG9uXG4gKiBkZW1hbmQuIFdoaWxlIGl0IGlzIGNhcGFibGUgb2YgYmVpbmcgb3Zlci1maWxsZWQsIHRoYXQgYWJpbGl0eSBpcyBub3QgdXNlZCBpblxuICogQ2hhbmtvLiBBIGJ1ZmZlciB0aGF0IGlzIGZ1bGwgd2lsbCBjYXVzZSB0aGUgbmV4dCBwdXQgdG8gaXRzIGNoYW5uZWwgdG8gYmxvY2tcbiAqIHVudGlsIGF0IGxlYXN0IG9uZSBpdGVtIGlzIHJlbW92ZWQgZnJvbSB0aGUgYnVmZmVyLlxuICpcbiAqIFRoaXMgYnVmZmVyIGlzIHBhc3NlZCB0byBge0BsaW5rIG1vZHVsZTpjc3AuY2hhbnxjaGFufWAsIGV0Yy4gdG8gY3JlYXRlIGFcbiAqIGJ1ZmZlcmVkIGNoYW5uZWwuIEl0IGlzIG5vdCBtZWFudCB0byBiZSB1c2VkIGRpcmVjdGx5LlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcGFyYW0ge251bWJlcn0gc2l6ZSBUaGUgbnVtYmVyIG9mIGl0ZW1zIHRoYXQgdGhlIG5ldyBidWZmZXIgY2FuIGhvbGQgYmVmb3JlXG4gKiAgICAgaXQncyBmdWxsLlxuICogQHJldHVybiB7bW9kdWxlOmNzcC5GaXhlZEJ1ZmZlcn0gQSBuZXcgZml4ZWQgYnVmZmVyIG9mIHRoZSBzcGVjaWZpZWRcbiAqICAgICBjYXBhY2l0eS5cbiAqL1xuZnVuY3Rpb24gZml4ZWQoc2l6ZSkge1xuICByZXR1cm4gT2JqZWN0LmNyZWF0ZShudWxsLCB7XG4gICAgLyoqXG4gICAgICogVGhlIHF1ZXVlIGJhY2tpbmcgdGhpcyBidWZmZXIuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7bW9kdWxlOmNzcC9xdWV1ZX5RdWV1ZX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHF1ZXVlOiB7XG4gICAgICB2YWx1ZTogcSgpXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBudW1iZXIgb2YgaXRlbXMgdGhhdCB0aGlzIHF1ZXVlIGNhbiBob2xkIGJlZm9yZSBpdCdzIGNvbnNpZGVyZWQgZnVsbC5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBzaXplOiB7XG4gICAgICB2YWx1ZTogc2l6ZVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBIG1hcmtlciBwcm9wZXJ0eSB1c2VkIHRvIHNob3cgdGhhdCB0aGlzIGlzIGEgZml4ZWQgYnVmZmVyLlxuICAgICAqXG4gICAgICogQHR5cGUge1N5bWJvbH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIFtCVUZGRVJdOiB7XG4gICAgICB2YWx1ZTogRklYRURcbiAgICB9XG4gIH0pO1xufVxuXG4vKipcbiAqIEEgYnVmZmVyIGltcGxlbWVudGF0aW9uIHRoYXQgZHJvcHMgbmV3bHkgYWRkZWQgaXRlbXMgd2hlbiB0aGUgYnVmZmVyIGlzIGZ1bGwuXG4gKlxuICogVGhpcyBkcm9wcGluZyBiZWhhdmlvciBpcyBzaWxlbnQ6IHRoZSBuZXcgaXRlbSBpcyBzaW1wbHkgbm90IGFkZGVkIHRvIHRoZVxuICogcXVldWUuIE5vdGUgdGhhdCB0aGlzIGJ1ZmZlciBpcyBuZXZlciBgZnVsbGAgYmVjYXVzZSBpdCBjYW4gYWx3YXlzIGJlIGFkZGVkXG4gKiB0byB3aXRob3V0IGV4Y2VlZGluZyB0aGUgc2l6ZSwgZXZlbiBpZiB0aGF0ICdhZGRpbmcnIGRvZXNuJ3QgcmVzdWx0IGluIGEgbmV3XG4gKiBpdGVtIGFjdHVhbGx5IGFwcGVhcmluZyBpbiB0aGUgYnVmZmVyLlxuICpcbiAqIEEgYnVmZmVyIG9mIHRoaXMgdHlwZSBleGlzdHMgb25seSBhcyBhbiBvYmplY3QgdGhhdCBjYW4gYmUgcGFzc2VkIHRvIGFcbiAqIGNoYW5uZWwgY3JlYXRpb24gZnVuY3Rpb24gKHN1Y2ggYXMge0BsaW5rIG1vZHVsZTpjc3AuY2hhbnxjaGFufSkgdG8gbWFrZSB0aGF0XG4gKiBjaGFubmVsIGEgYnVmZmVyZWQgY2hhbm5lbC4gSXQgZG9lc24ndCBoYXZlIGFueSBwcm9wZXJ0aWVzIHRoYXQgYXJlIGludGVuZGVkXG4gKiBmb3IgZXh0ZXJuYWwgdXNlLlxuICpcbiAqIEB0eXBlZGVmIERyb3BwaW5nQnVmZmVyXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICovXG5cbi8qKlxuICogQ3JlYXRlcyBhIGRyb3BwaW5nIGJ1ZmZlciBvZiB0aGUgc3BlY2lmaWVkIGNhcGFjaXR5LlxuICpcbiAqIEEgZHJvcHBpbmcgYnVmZmVyIHNpbGVudGx5IGRyb3BzIHRoZSBpdGVtIGJlaW5nIGFkZGVkIGlmIHRoZSBidWZmZXIgaXNcbiAqIGFscmVhZHkgYXQgY2FwYWNpdHkuIFNpbmNlIGFkZGluZyBhIG5ldyBpdGVtIHdpbGwgYWx3YXlzICdzdWNjZWVkJyAoZXZlbiBpZlxuICogaXQgc3VjY2VlZHMgYnkganVzdCBpZ25vcmluZyB0aGUgYWRkKSwgaXQgaXMgbmV2ZXIgY29uc2lkZXJlZCBmdWxsIGFuZFxuICogdGhlcmVmb3JlIGEgcHV0IHRvIGEgY2hhbm5lbCBidWZmZXJlZCBieSBhIGRyb3BwaW5nIGJ1ZmZlciBuZXZlciBibG9ja3MuXG4gKlxuICogVGhpcyBidWZmZXIgaXMgcGFzc2VkIHRvIGB7QGxpbmsgbW9kdWxlOmNzcC5jaGFufGNoYW59YCwgZXRjLiB0byBjcmVhdGUgYVxuICogYnVmZmVyZWQgY2hhbm5lbC4gSXQgaXMgbm90IG1lYW50IHRvIGJlIHVzZWQgZGlyZWN0bHkuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqIEBwYXJhbSB7bnVtYmVyfSBzaXplIFRoZSBudW1iZXIgb2YgaXRlbXMgdGhhdCB0aGUgbmV3IGJ1ZmZlciBjYW4gaG9sZCBiZWZvcmVcbiAqICAgICBuZXdlc3QgaXRlbXMgYXJlIGRyb3BwZWQgb24gYWRkLlxuICogQHJldHVybiB7bW9kdWxlOmNzcC5Ecm9wcGluZ0J1ZmZlcn0gQSBuZXcgZHJvcHBpbmcgYnVmZmVyIG9mIHRoZSBzcGVjaWZpZWRcbiAqICAgICBjYXBhY2l0eS5cbiAqL1xuZnVuY3Rpb24gZHJvcHBpbmcoc2l6ZSkge1xuICByZXR1cm4gT2JqZWN0LmNyZWF0ZShudWxsLCB7XG4gICAgLyoqXG4gICAgICogVGhlIHF1ZXVlIGJhY2tpbmcgdGhpcyBidWZmZXIuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7bW9kdWxlOmNzcC9xdWV1ZX5RdWV1ZX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHF1ZXVlOiB7XG4gICAgICB2YWx1ZTogcSgpXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBudW1iZXIgb2YgaXRlbXMgdGhhdCB0aGlzIHF1ZXVlIGNhbiBob2xkIGJlZm9yZSBpdCdzIGNvbnNpZGVyZWQgZnVsbC5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBzaXplOiB7XG4gICAgICB2YWx1ZTogc2l6ZVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBIG1hcmtlciBwcm9wZXJ0eSB1c2VkIHRvIHNob3cgdGhhdCB0aGlzIGlzIGEgZHJvcHBpbmcgYnVmZmVyLlxuICAgICAqXG4gICAgICogQHR5cGUge1N5bWJvbH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIFtCVUZGRVJdOiB7XG4gICAgICB2YWx1ZTogRFJPUFBJTkdcbiAgICB9XG4gIH0pO1xufVxuXG4vKipcbiAqIEEgYnVmZmVyIGltcGxlbWVudGF0aW9uIHRoYXQgZHJvcHMgdGhlIG9sZGVzdCBpdGVtIHdoZW4gYW4gaXRlbSBpcyBhZGRlZCB0byBhXG4gKiBmdWxsIGJ1ZmZlci5cbiAqXG4gKiBUaGlzIGlzIHZlcnkgc2ltaWxhciB0byB7QGxpbmsgbW9kdWxlOmNzcC5Ecm9wcGluZ0J1ZmZlcnxEcm9wcGluZ0J1ZmZlcn07IHRoZVxuICogb25seSBkaWZmZXJlbmNlIGlzIGluIHdoYXQgaGFwcGVucyB3aGVuIGFuIGl0ZW0gaXMgYWRkZWQuIEluIHRoaXMgYnVmZmVyLCB0aGVcbiAqIG5ldyBpdGVtIGlzIGluZGVlZCBhZGRlZCB0byB0aGUgYnVmZmVyLCBidXQgaW4gb3JkZXIgdG8ga2VlcCB0aGUgY291bnQgb2YgdGhlXG4gKiBidWZmZXIgYXQgb3IgYmVsb3cgaXRzIHNpemUsIHRoZSBvbGRlc3QgaXRlbSBpbiB0aGUgYnVmZmVyIGlzIHNpbGVudGx5XG4gKiBkcm9wcGVkLlxuICpcbiAqIEEgYnVmZmVyIG9mIHRoaXMgdHlwZSBleGlzdHMgb25seSBhcyBhbiBvYmplY3QgdGhhdCBjYW4gYmUgcGFzc2VkIHRvIGFcbiAqIGNoYW5uZWwgY3JlYXRpb24gZnVuY3Rpb24gKHN1Y2ggYXMge0BsaW5rIG1vZHVsZTpjc3AuY2hhbnxjaGFufSkgdG8gbWFrZSB0aGF0XG4gKiBjaGFubmVsIGEgYnVmZmVyZWQgY2hhbm5lbC4gSXQgZG9lc24ndCBoYXZlIGFueSBwcm9wZXJ0aWVzIHRoYXQgYXJlIGludGVuZGVkXG4gKiBmb3IgZXh0ZXJuYWwgdXNlLlxuICpcbiAqIEB0eXBlZGVmIFNsaWRpbmdCdWZmZXJcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIGEgc2xpZGluZyBidWZmZXIgb2YgdGhlIHNwZWNpZmllZCBjYXBhY2l0eS5cbiAqXG4gKiBBIHNsaWRpbmcgYnVmZmVyIGRyb3BzIHRoZSBmaXJzdC1hZGRlZCAob2xkZXN0KSBpdGVtIGFscmVhZHkgaW4gdGhlIGJ1ZmZlciBpZlxuICogYSBuZXcgaXRlbSBpcyBhZGRlZCB3aGVuIHRoZSBidWZmZXIgaXMgYWxyZWFkeSBhdCBjYXBhY2l0eS4gU2luY2UgaXQncyBhbHdheXNcbiAqIGNhcGFibGUgb2YgaGF2aW5nIGl0ZW1zIGFkZGVkIHRvIGl0LCBpdCdzIG5ldmVyIGNvbnNpZGVyZWQgZnVsbCwgYW5kXG4gKiB0aGVyZWZvcmUgYSBwdXQgdG8gYSBjaGFubmVsIGJ1ZmZlcmVkIGJ5IGEgc2xpZGluZyBidWZmZXIgbmV2ZXIgYmxvY2tzLlxuICpcbiAqIFRoaXMgYnVmZmVyIGlzIHBhc3NlZCB0byBge0BsaW5rIG1vZHVsZTpjc3AuY2hhbnxjaGFufWAsIGV0Yy4gdG8gY3JlYXRlIGFcbiAqIGJ1ZmZlcmVkIGNoYW5uZWwuIEl0IGlzIG5vdCBtZWFudCB0byBiZSB1c2VkIGRpcmVjdGx5LlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcGFyYW0ge251bWJlcn0gc2l6ZSBUaGUgbnVtYmVyIG9mIGl0ZW1zIHRoYXQgdGhlIG5ldyBidWZmZXIgY2FuIGhvbGQgYmVmb3JlXG4gKiAgICAgb2xkZXN0IGl0ZW1zIGFyZSBkcm9wcGVkIG9uIGFkZC5cbiAqIEByZXR1cm4ge21vZHVsZTpjc3AuU2xpZGluZ0J1ZmZlcn0gQSBuZXcgc2xpZGluZyBidWZmZXIgb2YgdGhlIHNwZWNpZmllZFxuICogICAgIGNhcGFjaXR5LlxuICovXG5mdW5jdGlvbiBzbGlkaW5nKHNpemUpIHtcbiAgcmV0dXJuIE9iamVjdC5jcmVhdGUobnVsbCwge1xuICAgIC8qKlxuICAgICAqIFRoZSBxdWV1ZSBiYWNraW5nIHRoaXMgYnVmZmVyLlxuICAgICAqXG4gICAgICogQHR5cGUge21vZHVsZTpjc3AvcXVldWV+UXVldWV9XG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBxdWV1ZToge1xuICAgICAgdmFsdWU6IHEoKVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgbnVtYmVyIG9mIGl0ZW1zIHRoYXQgdGhpcyBxdWV1ZSBjYW4gaG9sZCBiZWZvcmUgaXQncyBjb25zaWRlcmVkIGZ1bGwuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgc2l6ZToge1xuICAgICAgdmFsdWU6IHNpemVcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQSBtYXJrZXIgcHJvcGVydHkgdXNlZCB0byBzaG93IHRoYXQgdGhpcyBpcyBhIHNsaWRpbmcgYnVmZmVyLlxuICAgICAqXG4gICAgICogQHR5cGUge1N5bWJvbH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIFtCVUZGRVJdOiB7XG4gICAgICB2YWx1ZTogU0xJRElOR1xuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgcXVldWUgdGhhdCBiYWNrcyBhIGJ1ZmZlci5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuQnVmZmVyfSBidWZmZXIgVGhlIGJ1ZmZlciB3aG9zZSBxdWV1ZSBpcyByZXR1cm5lZCBieSB0aGlzXG4gKiAgICAgZnVuY3Rpb24uXG4gKiBAcmV0dXJuIHttb2R1bGU6Y3NwL3F1ZXVlflF1ZXVlfSBUaGUgcXVldWUgdGhhdCBiYWNrcyB0aGUgc3VwcGxpZWQgYnVmZmVyLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gcXVldWUoYnVmZmVyKSB7XG4gIHJldHVybiBidWZmZXIucXVldWU7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgbnVtYmVyIG9mIGl0ZW1zIGEgYnVmZmVyIGNhbiBob2xkIGJlZm9yZSBpdCdzIGZ1bGwuXG4gKlxuICogQHBhcmFtIHttb2R1bGU6Y3NwLkJ1ZmZlcn0gYnVmZmVyIFRoZSBidWZmZXIgd2hvc2Ugc2l6ZSBpcyByZXR1cm5lZCBieSB0aGlzXG4gKiAgICAgZnVuY3Rpb24uXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBzaXplIG9mIHRoZSBzdXBwbGllZCBidWZmZXIuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBzaXplKGJ1ZmZlcikge1xuICByZXR1cm4gYnVmZmVyLnNpemU7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgbnVtYmVyIG9mIGl0ZW1zIGEgYnVmZmVyIGlzIGN1cnJlbnRseSBob2xkaW5nLlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5CdWZmZXJ9IGJ1ZmZlciBUaGUgYnVmZmVyIHdob3NlIGN1cnJlbnQgY291bnQgaXMgcmV0dXJuZWRcbiAqICAgICBieSB0aGlzIGZ1bmN0aW9uLlxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgbnVtYmVyIG9mIGl0ZW1zIHRoYXQgdGhlIHN1cHBsaWVkIGJ1ZmZlciBpcyBob2xkaW5nLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY291bnQoYnVmZmVyKSB7XG4gIHJldHVybiBxQ291bnQoYnVmZmVyLnF1ZXVlKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgYSBidWZmZXIgaXMgYXQgY2FwYWNpdHkuXG4gKlxuICogQHBhcmFtIHttb2R1bGU6Y3NwLkJ1ZmZlcn0gYnVmZmVyIFRoZSBidWZmZXIgd2hvJ3MgYmVpbmcgY2hlY2tlZCB0byBzZWUgaWZcbiAqICAgICBpdCdzIGF0IGNhcGFjaXR5LlxuICogQHJldHVybiB7bnVtYmVyfSBFaXRoZXIgYHRydWVgIGlmIHRoZSBzdXBwbGllZCBidWZmZXIgaXMgZnVsbCBvciBgZmFsc2VgIGlmXG4gKiAgICAgaXQgaXNuJ3QuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBpc0Z1bGwoYnVmZmVyKSB7XG4gIHJldHVybiBidWZmZXJbQlVGRkVSXSA9PT0gRklYRUQgPyBxQ291bnQoYnVmZmVyLnF1ZXVlKSA+PSBidWZmZXIuc2l6ZSA6IGZhbHNlO1xufVxuXG4vKipcbiAqIEFkZHMgb25lIG9yIG1vcmUgaXRlbXMgdG8gYSBidWZmZXIuXG4gKlxuICogQHBhcmFtIHttb2R1bGU6Y3NwLkJ1ZmZlcn0gYnVmZmVyIFRoZSBidWZmZXIgd2hlcmUgdGhlIHN1cHBsaWVkIGl0ZW1zIHdpbGwgYmVcbiAqICAgICBhZGRlZC5cbiAqIEBwYXJhbSB7Li4uKn0gaXRlbXMgVGhlIHZhbHVlcyBiZWluZyBhZGRlZCB0byB0aGUgc3VwcGxpZWQgYnVmZmVyLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gYWRkKGJ1ZmZlciwgLi4uaXRlbXMpIHtcbiAgc3dpdGNoIChidWZmZXJbQlVGRkVSXSkge1xuICAgIGNhc2UgRklYRUQ6XG4gICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgaXRlbXMpIHtcbiAgICAgICAgZW5xdWV1ZShidWZmZXIucXVldWUsIGl0ZW0pO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIERST1BQSU5HOlxuICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGl0ZW1zKSB7XG4gICAgICAgIGlmIChjb3VudChidWZmZXIpIDwgc2l6ZShidWZmZXIpKSB7XG4gICAgICAgICAgZW5xdWV1ZShidWZmZXIucXVldWUsIGl0ZW0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgU0xJRElORzpcbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBpdGVtcykge1xuICAgICAgICBpZiAoY291bnQoYnVmZmVyKSA+PSBzaXplKGJ1ZmZlcikpIHtcbiAgICAgICAgICBkZXF1ZXVlKGJ1ZmZlci5xdWV1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZW5xdWV1ZShidWZmZXIucXVldWUsIGl0ZW0pO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuO1xuICB9XG59XG5cbi8qKlxuICogUmVtb3ZlcyB0aGUgbmV4dCBpdGVtIGZyb20gYSBxdWV1ZSBhbmQgcmV0dXJucyBpdC5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuQnVmZmVyfSBidWZmZXIgVGhlIGJ1ZmZlciBmcm9tIHdoaWNoIGFuIGl0ZW0gaXMgYmVpbmdcbiAqICAgICByZW1vdmVkLlxuICogQHJldHVybiB7Kn0gVGhlIGl0ZW0gdGhhdCB3YXMgcmVtb3ZlZCBmcm9tIHRoZSBzdXBwbGllZCBidWZmZXIuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiByZW1vdmUoYnVmZmVyKSB7XG4gIHJldHVybiBkZXF1ZXVlKGJ1ZmZlci5xdWV1ZSk7XG59XG5cbmV4cG9ydCB7XG4gIGlzQnVmZmVyLFxuICBmaXhlZCxcbiAgZHJvcHBpbmcsXG4gIHNsaWRpbmcsXG4gIHF1ZXVlLFxuICBzaXplLFxuICBjb3VudCxcbiAgaXNGdWxsLFxuICBhZGQsXG4gIHJlbW92ZVxufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG5pbXBvcnQgeyBwcm90b2NvbHMgYXMgcCB9IGZyb20gXCJtb2R1bGVzL3Byb3RvY29sXCI7XG5pbXBvcnQge1xuICBxdWV1ZSxcbiAgZGVxdWV1ZSxcbiAgRU1QVFksXG4gIGZpbHRlcixcbiAgY291bnQgYXMgcUNvdW50LFxuICBlbnF1ZXVlXG59IGZyb20gXCJtb2R1bGVzL3F1ZXVlXCI7XG5pbXBvcnQgeyBpc0Z1bGwsIGNvdW50LCByZW1vdmUgfSBmcm9tIFwibW9kdWxlcy9idWZmZXJcIjtcbmltcG9ydCB7IGRpc3BhdGNoIH0gZnJvbSBcIm1vZHVsZXMvZGlzcGF0Y2hlclwiO1xuXG4vKipcbiAqIFRoZSBtYXhpbXVtIG51bWJlciBvZiBkaXJ0eSBvcGVyYXRpb25zIHRoYXQgY2FuIGJlIHF1ZXVlZCBvbiBhIGNoYW5uZWwgYmVmb3JlXG4gKiBhIGNsZWFudXAgaXMgdHJpZ2dlcmVkLlxuICpcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAcHJpdmF0ZVxuICovXG5jb25zdCBNQVhfRElSVFkgPSA2NDtcblxuLyoqXG4gKiBUaGUgbWF4aW11bSBudW1iZXIgb2Ygb3BlcnRpb25zIHRoYXQgY2FuIGJlIHF1ZXVlZCBvbiBhIGNoYW5uZWwgYmVmb3JlIG5ld1xuICogb3BlcmF0aW9ucyBhcmUgcmVqZWN0ZWQuXG4gKlxuICogQHR5cGUge251bWJlcn1cbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IE1BWF9RVUVVRUQgPSAxMDI0O1xuXG4vKipcbiAqICpoZSB2YWx1ZSByZXR1cm5lZCBmcm9tIGEgcmVjZWl2ZSBvbiBhIGNoYW5uZWwgd2hlbiB0aGF0IGNoYW5uZWwgaXMgY2xvc2VkXG4gKiBhbmQgaGFzIG5vIG1vcmUgdmFsdWVzIGF2YWlsYWJsZS5cbiAqXG4gKiBUaGlzIGlzIGEgc3BlY2lhbCB2YWx1ZSB0aGF0IGlzIHJldHVybmVkIHVuZGVyIGEgY2VydGFpbiBjaXJjdW1zdGFuY2UsIG5hbWVseVxuICogd2hlbiBhIHJlY2VpdmUgaXMgcGVyZm9ybWVkIG9uIGEgY2xvc2VkIGNoYW5uZWwuIEJlY2F1c2Ugb2YgdGhhdCwgaXQgY2Fubm90XG4gKiBiZSByZXR1cm5lZCBmcm9tIGEgcmVjZWl2ZSBvbiBhbiBvcGVuIGNoYW5uZWwuIEZvciB0aGF0IHJlYXNvbiwgYENMT1NFRGAgaXNcbiAqIHRoZSBvbmx5IHZhbHVlIHRoYXQgY2Fubm90IGJlIHNlbnQgb250byBhIGNoYW5uZWwgJm1kYXNoOyBpdCB3b3VsZCBiZVxuICogaW1wb3NzaWJsZSB0byBkaXN0aW5ndWlzaCBiZXR3ZWVuIGEgbGVnaXRpbWF0ZSB2YWx1ZSBvZiBgQ0xPU0VEYCBhbmQgYW5cbiAqIGFjdHVhbCBjbG9zZWQgY2hhbm5lbC5cbiAqXG4gKiBAdHlwZSB7U3ltYm9sfVxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqL1xuY29uc3QgQ0xPU0VEID0gU3ltYm9sKFwiQ0xPU0VEXCIpO1xuXG4vKipcbiAqIEEgdW5pcXVlIHZhbHVlIHVzZWQgdG8gaW5kaWNhdGUgdGhhdCBhbiBvYmplY3QgaXMgYSBib3guXG4gKlxuICogQHR5cGUge1N5bWJvbH1cbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IEJPWCA9IFN5bWJvbChcIkJPWFwiKTtcblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgYW4gb2JqZWN0IGlzIGEgYm94LlxuICpcbiAqIEBwYXJhbSB7Kn0gb2JqIEEgdmFsdWUgdG8gY2hlY2sgZm9yIGJveGluZXNzLlxuICogQHJldHVybiBFaXRoZXIgYHRydWVgIGlmIHRoZSB2YWx1ZSBpcyBhIGJveCBvciBgZmFsc2VgIGlmIGl0IGlzbid0LlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaXNCb3gob2JqKSB7XG4gIHJldHVybiAhIW9iaj8uW0JPWF07XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGFuIG9iamVjdCBpcyByZWR1Y2VkLiBUaGlzIGlzIGRvbmUgdXNpbmcgdGhlIHRyYW5zZHVjZXJcbiAqIHByb3RvY29sOyBhbiBvYmplY3Qgd2l0aCB0aGUgcHJvdG9jb2wtc3BlY2lmaWVkIGByZWR1Y2VkYCBwcm9wZXJ0eSBpcyBhc3N1bWVkXG4gKiB0byBiZSByZWR1Y2VkLiBJZiBhIHJlc3VsdCBvZiBhIHRyYW5zZm9ybWF0aW9uIGlzIHJlZHVjZWQsIGl0IG1lYW5zIHRoYXQgdGhlXG4gKiB0cmFuc2Zvcm1hdGlvbiBpcyBjb21wbGV0ZSBhbmQgdGhlIGNoYW5uZWwgc2hvdWxkIGJlIGNsb3NlZC5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSBiZWluZyBjaGVja2VkIGZvciByZWR1Y3Rpb24uXG4gKiBAcmV0dXJuIHtib29sZWFufSBFaXRoZXIgYHRydWVgIGlmIHRoZSB2YWx1ZSBoYXMgYmVlbiByZWR1Y2VkLCBvciBgZmFsc2VgIGlmXG4gKiAgICAgaXQgaGFzIG5vdCBiZWVuLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaXNDb21wbGV0ZWQodmFsdWUpIHtcbiAgcmV0dXJuICEhdmFsdWU/LltwLmNvbXBsZXRlZF07XG59XG5cbi8qKlxuICogQSB3cmFwcGVyIGFyb3VuZCBhIHZhbHVlLiBUaGlzIGlzIHByaW1hcmlseSB1c2VkIGFzIGEgbWFya2VyOyBhIHB1dCBvciB0YWtlXG4gKiByZXR1cm5pbmcgYSBCb3ggaW5kaWNhdGVzIHRoYXQgdGhlIHB1dCBvciB0YWtlIGhhcyByZXR1cm5lZCBhbiBpbW1lZGlhdGVcbiAqIHZhbHVlLCB3aGlsZSByZXR1cm5pbmcgYG51bGxgIGluZGljYXRlcyB0aGF0IHRoZSBvcGVyYXRpb24gaGFzIGJlZW4gcXVldWVkLlxuICpcbiAqIEB0eXBlZGVmIEJveFxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3AvY2hhbm5lbFxuICogQHByb3BlcnR5IHsqfSB2YWx1ZSBUaGUgdmFsdWUgYmVpbmcgd3JhcHBlZCBieSB0aGUgYm94LlxuICogQHByaXZhdGVcbiAqL1xuXG4vKipcbiAqIEEgd3JhcHBlciBvYmplY3QgZm9yIGEgdmFsdWUuIFRoaXMgaXMgdXNlZCBhbG1vc3QgZW50aXJlbHkgYXMgYSBtYXJrZXJcbiAqIGludGVyZmFjZSwgdGhvdWdoIHRoZSBmYWN0IHRoYXQgaXQgYmVjb21lcyBhIHBhcmFtZXRlciB0aGF0J3MgcGFzc2VkIGJ5XG4gKiByZWZlcmVuY2UgcmF0aGVyIHRoYW4gdmFsdWUgaXMgYWxzbyBpbXBvcnRhbnQgaW4gYSBjb3VwbGUgcGxhY2VzLiBJZiBhXG4gKiBjaGFubmVsIG9wZXJhdGlvbiAocHV0IG9yIHRha2UpIHJldHVybnMgYSBCb3gsIGl0IG1lYW5zIHRoYXQgYW4gYWN0dWFsIHZhbHVlXG4gKiB3YXMgcmV0dXJuZWQuIEEgbm9uLUJveCAod2hpY2ggYWx3YXlzIGhhcHBlbnMgdG8gYmUgYG51bGxgKSBtZWFucyB0aGF0IHRoZVxuICogb3BlcmF0aW9uIG11c3QgYmxvY2suXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3AvY2hhbm5lbFxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gYm94LlxuICogQHJldHVybiB7bW9kdWxlOmNzcC9jaGFubmVsLkJveH0gVGhlIGJveGVkIHZhbHVlLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gYm94KHZhbHVlKSB7XG4gIHJldHVybiBPYmplY3QuY3JlYXRlKG51bGwsIHtcbiAgICB2YWx1ZToge1xuICAgICAgdmFsdWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0sXG4gICAgW0JPWF06IHtcbiAgICAgIHZhbHVlOiB0cnVlXG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBBIHdyYXBwZXIgYXJvdW5kIGEgdmFsdWUuIFRoaXMgaXMgbXVjaCBsaWtlXG4gKiB7QGxpbmsgbW9kdWxlOmNzcC9jaGFubmVsLkJveHxCb3h9IGV4Y2VwdCB0aGF0IGl0IGFsc28gY2FycmllcyBhIGhhbmRsZXIgdG9cbiAqIGJlIHVzZWQgd2hlbiBhIHNlbnQgdmFsdWUgaXMgcmVjZWl2ZWQuIEl0IGlzIHNwZWNpZmljYWxseSBmb3IgcXVldWVpbmcgc2VuZHMuXG4gKlxuICogQHR5cGVkZWYgU2VuZEJveFxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3AvY2hhbm5lbFxuICogQHByb3BlcnR5IHsqfSB2YWx1ZSBUaGUgdmFsdWUgYmVpbmcgd3JhcHBlZCBieSB0aGlzIGJveC5cbiAqIEBwcm9wZXJ0eSB7bW9kdWxlOmNzcC9jaGFubmVsLkhhbmRsZXJ9IGhhbmRsZXIgVGhlIGhhbmRsZXIgdXNlZCB0byBwcm9jZXNzIGFcbiAqICAgICBzZW5kIHJlcXVlc3QgZm9yIHRoZSB2YWx1ZS5cbiAqIEBwcml2YXRlXG4gKi9cblxuLyoqXG4gKiBBIGJveCB1c2VkIHRvIHdyYXAgYSB2YWx1ZSBiZWluZyBzZW50IG9udG8gYSBjaGFubmVsLiBUaGlzIGlzIGRpZmZlcmVudCBmcm9tXG4gKiBhIHJlZ3VsYXIgYm94IGluIHRoYXQgdGhlIHNlbmQgaGFuZGxlciBpcyBhbHNvIGluY2x1ZGVkLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwL2NoYW5uZWxcbiAqIEBwYXJhbSAge09iamVjdH0gaGFuZGxlciBUaGUgaGFuZGxlciB1c2VkIHRvIHByb2Nlc3MgYSBzZW5kIHJlcXVlc3QgZm9yIHRoZVxuICogICAgIHZhbHVlLlxuICogQHBhcmFtICB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGJveC5cbiAqIEByZXR1cm4ge21vZHVsZTpjc3AvY2hhbm5lbC5TZW5kQm94fSBUaGUgYm94ZWQgdmFsdWUuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBzZW5kQm94KHZhbHVlLCBoYW5kbGVyKSB7XG4gIHJldHVybiBPYmplY3QuY3JlYXRlKG51bGwsIHtcbiAgICB2YWx1ZToge1xuICAgICAgdmFsdWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0sXG4gICAgaGFuZGxlcjoge1xuICAgICAgdmFsdWU6IGhhbmRsZXJcbiAgICB9LFxuICAgIFtCT1hdOiB7XG4gICAgICB2YWx1ZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxuICogQSBjaGFubmVsLCB1c2VkIGJ5IHByb2Nlc3NlcyB0byBjb21tdW5pY2F0ZSB3aXRoIG9uZSBhbm90aGVyLlxuICpcbiAqIEZvciBlYWNoIG9wZXJhdGlvbiwgdGhlIGNoYW5uZWwgZmlyc3QgdGVzdHMgdG8gc2VlIGlmIHRoZXJlJ3MgYSBjb3JyZXNwb25kaW5nXG4gKiBvcGVyYXRpb24gYWxyZWFkeSBxdWV1ZWQgKGkuZS4sIGlmIHdlJ3JlIGRvaW5nIGEgYHNlbmRgIHRoYXQgdGhlcmUncyBhIHF1ZXVlZFxuICogYHJlY3ZgIGFuZCB2aWNlIHZlcnNhKS4gSWYgdGhlcmUgaXMsIHRoYXQgY29ycmVzcG9uZGluZyBvcGVyYXRpb24gaXNcbiAqIHVuYmxvY2tlZCBhbmQgYm90aCBvcGVyYXRpb25zIGNvbXBsZXRlLiBJZiBub3QsIHRoZSBvcGVyYXRpb24gaXMgcXVldWVkIHRvXG4gKiB3YWl0IGZvciBhIGNvcnJlc3BvbmRpbmcgb3BlcmF0aW9uLiBUaGUgcHJvY2VzcyBvciB0aGF0IGNyZWF0ZWQgdGhlIG9wZXJhdGlvblxuICogdGhlbiBibG9ja3MuXG4gKlxuICogVGhlIGNoYW5uZWwgY2FuIGJlIGJhY2tlZCBieSBhIGJ1ZmZlciwgdGhvdWdoIGl0IGlzIG5vdCBieSBkZWZhdWx0LiBJZiBhXG4gKiBidWZmZXIgaXMgaW4gcGxhY2UsIGFuZCB0aGF0IGJ1ZmZlciBpcyBub3QgZnVsbCwgdGhlbiB0aGUgcHJvY2VzcyB0aGF0XG4gKiBjcmVhdGVkIGFuIG9wZXJhdGlvbiB0aGF0IGhhcyB0byBiZSBxdWV1ZWQgaXMgKm5vdCogYmxvY2tlZC5cbiAqXG4gKiBUaGlzIGNoYW5uZWwgb2JqZWN0IHN1cHBvcnRzIHRyYW5zZm9ybWF0aW9ucywgYXNzdW1pbmcgdGhhdCB0aGV5IGZvbGxvdyB0aGVcbiAqIHByb3RvY29sIGNyZWF0ZWQgYnkgYSBmZXcgdHJhbnNkdWNlciBsaWJyYXJ5IGF1dGhvcnMgdG8gYWxsb3cgdGhlbSB0b1xuICogaW50ZXJvcGVyYXRlLiBUaGUgc3VwcG9ydCBtdXN0IGJlIGV4cGxpY2l0bHkgY3JlYXRlZCBiZWNhdXNlIHRoZSBub3JtYWxcbiAqIG1ldGhvZCBvZiBtYWtpbmcgYW4gb2JqZWN0IHN1cHBvcnQgdHJhbnNmb3JtYXRpb25zIHdvbid0IHdvcmsgaGVyZS4gVGhpc1xuICogbWV0aG9kIGlzIHRvIGNyZWF0ZSBhIG5ldyBvYmplY3QgYW5kIGFkZCB0aGUgdHJhbnNmb3JtZWQgdmFsdWVzIHRvIGl0IC0gYnV0XG4gKiBmb3IgYSBjaGFubmVsLCB3ZSBuZWVkIHRvIHJlcGxhY2UgdGhlIHZhbHVlcyBvbiB0aGUgY2hhbm5lbCB3aXRoIHRoZWlyXG4gKiB0cmFuc2Zvcm1lZCB2YWx1ZXMsIGluIHRoZSBzYW1lIG9yZGVyIGV2ZW4gaW4gYSBtdWx0aS1wcm9jZXNzIGVudmlyb25tZW50LlxuICogVGh1cyB0cmFuc2Zvcm1hdGlvbnMgaGFwcGVuIGluIHBsYWNlLlxuICpcbiAqIFRyYW5zZm9ybWF0aW9ucyBhcmUgYXBwbGllZCBiZWZvcmUgdGhlIHZhbHVlIGlzIHF1ZXVlZCwgc28gZXZlbiBpZiB0aGVyZSBpcyBhXG4gKiBjb3JyZXNwb25kaW5nIG9wZXJhdGlvbiByZWFkeSB0byBnbywgdGhlIHRyYW5zZm9ybWF0aW9uIHN0aWxsIGhhcHBlbnMuIEFsc28sXG4gKiB0cmFuc2Zvcm1hdGlvbnMgcmVxdWlyZSB0aGF0IHRoZSBjaGFubmVsIGJlIGJ1ZmZlcmVkICh0aGlzIGJ1ZmZlciBpcyB3aGF0IGlzXG4gKiBzZW50IHRvIHRoZSB0cmFuc2Zvcm1lcidzIHJlZHVjdGlvbiBzdGVwIGZ1bmN0aW9uKTsgdHJ5aW5nIHRvIGNyZWF0ZSBhXG4gKiBjaGFubmVsIHdpdGggYSB0cmFuc2Zvcm1lciBidXQgd2l0aG91dCBhIGJ1ZmZlciB3aWxsIHJlc3VsdCBpbiBhbiBlcnJvciBiZWluZ1xuICogdGhyb3duLlxuICpcbiAqIFRoaXMgaXMgdGhlIG9iamVjdCB0aGF0IGlzIHJldHVybmVkIGZyb20gYSBjYWxsIHRvXG4gKiBge0BsaW5rIG1vZHVsZTpjc3AuY2hhbnxjaGFufWAuIEhvd2V2ZXIsIHRoaXMgb2JqZWN0IGlzIGludGVuZGVkIHRvIGJlIHVzZWRcbiAqIGFzIGEgdmFsdWUgdG8gcGFzcyB0byBjaGFubmVsIG9wZXJhdGlvbiBmdW5jdGlvbnM7IGl0IGRvZXNuJ3QgaGF2ZSBhbnlcbiAqIHByb3BlcnRpZXMgb2YgaW50ZXJlc3QgdG8gYW4gZW5kIHVzZXIuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqIEB0eXBlZGVmIENoYW5uZWxcbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjaGFubmVsLiBUaGlzIGlzIGEgbG93LWxldmVsIGZ1bmN0aW9uO1xuICogYHtAbGluayBtb2R1bGU6Y3NwLmNoYW58Y2hhbn1gIHBlcmZvcm1zIHNvbWUgbmVjZXNzYXJ5IG1hbmlwdWxhdGlvbnMgb25cbiAqIGFyZ3VtZW50cyBiZWZvcmUgdXNpbmcgdGhpcyBmdW5jdGlvbiB0byBwZXJmb3JtIHRoZSBhY3R1YWwgY3JlYXRpb24uXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3AvY2hhbm5lbFxuICogQHBhcmFtIHtudWxsIHwgbW9kdWxlOmNzcC5CdWZmZXJ9IGJ1ZmZlciBBbiBvcHRpb25hbCBidWZmZXIgdGhhdCwgaWYgcHJlc2VudCxcbiAqICAgICBpcyB1c2VkIHRvIGNyZWF0ZSBhIGJ1ZmZlcmVkIGNoYW5uZWwuIElmIHRoaXMgaXMgYG51bGxgLCBhbiB1bmJ1ZmZlcmVkXG4gKiAgICAgY2hhbm5lbCBpcyBjcmVhdGVkLlxuICogQHBhcmFtIHttb2R1bGU6Y29yZS5UcmFuc2R1Y2VyRnVuY3Rpb259IHRyYW5zZHVjZXJGbiBUaGUgdHJhbnNkdWNlciB1c2VkIHRvXG4gKiAgICAgdHJhbnNmb3JtIHZhbHVlcyBzZW50IHRvIHRoZSBjaGFubmVsLiBJZiBubyB0cmFuc2Zvcm1hdGlvbnMgYXJlXG4gKiAgICAgbmVjZXNzYXJ5LCBhIHBhc3N0aHJvdWdoIHRyYW5zZHVjZXIgc2hvdWxkIGJlIHByb3ZpZGVkLlxuICogQHBhcmFtIHtib29sZWFufSBpc1RpbWVkIEluZGljYXRlcyB3aGV0aGVyIHRoZSBjaGFubmVsIGlzIGEgdGltZWQgY2hhbm5lbC5cbiAqICAgICBUaGUgdGltaW5pbmcgbWVjaGFuaXNtIGlzIGhhbmRsZWQgb3V0c2lkZSB0aGUgY2hhbm5lbCwgYnV0IHRoaXMgcHJvcGVydHlcbiAqICAgICBpcyBwcm92aWRlZCB0byBiZSBhYmxlIHRvIHF1ZXJ5IHdoZXRoZXIgdGhhdCdzIHRoZSBjYXNlLlxuICogQHBhcmFtIHtudW1iZXJ9IG1heERpcnR5PTY0IFRoZSBtYXhpbXVtIG51bWJlciBvZiBkaXJ0eSBvcGVyYXRpb25zIHRvIGFsbG93XG4gKiAgICAgYmVmb3JlIHRoZXkncmUgcHVyZ2VkLlxuICogQHBhcmFtIHtudW1iZXJ9IG1heFF1ZXVlZD0xMDI0IFRoZSBtYXhpbXVtIG51bWJlciBvZiBvcGVyYXRpb25zIHRoYXQgY2FuIGJlXG4gKiAgICAgcXVldWVkIGJlZm9yZSBuZXcgb25lcyBhcmUgcmVqZWN0ZWQuXG4gKiBAcmV0dXJuIHttb2R1bGU6Y3NwLkNoYW5uZWx9IEEgbmV3IGNoYW5uZWwuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjaGFubmVsKFxuICBidWZmZXIsXG4gIHRyYW5zZHVjZXJGbixcbiAgaXNUaW1lZCA9IGZhbHNlLFxuICBtYXhEaXJ0eSA9IE1BWF9ESVJUWSxcbiAgbWF4UXVldWVkID0gTUFYX1FVRVVFRFxuKSB7XG4gIHJldHVybiBPYmplY3QuY3JlYXRlKG51bGwsIHtcbiAgICBidWZmZXI6IHtcbiAgICAgIHZhbHVlOiBidWZmZXJcbiAgICB9LFxuICAgIHRyYW5zZHVjZXJGbjoge1xuICAgICAgdmFsdWU6IHRyYW5zZHVjZXJGblxuICAgIH0sXG4gICAgbWF4RGlydHk6IHtcbiAgICAgIHZhbHVlOiBtYXhEaXJ0eVxuICAgIH0sXG4gICAgbWF4UXVldWVkOiB7XG4gICAgICB2YWx1ZTogbWF4UXVldWVkXG4gICAgfSxcbiAgICByZWN2czoge1xuICAgICAgdmFsdWU6IHF1ZXVlKClcbiAgICB9LFxuICAgIHNlbmRzOiB7XG4gICAgICB2YWx1ZTogcXVldWUoKVxuICAgIH0sXG4gICAgZGlydHlSZWN2czoge1xuICAgICAgdmFsdWU6IDAsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0sXG4gICAgZGlydHlTZW5kczoge1xuICAgICAgdmFsdWU6IDAsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0sXG4gICAgY2xvc2VkOiB7XG4gICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0sXG4gICAgaXNCdWZmZXJlZDoge1xuICAgICAgdmFsdWU6ICEhYnVmZmVyXG4gICAgfSxcbiAgICBpc1RpbWVkOiB7XG4gICAgICB2YWx1ZTogaXNUaW1lZFxuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxuICogU2VuZHMgYSB2YWx1ZSB0byBhIGNoYW5uZWwuIFRoZSBzcGVjaWZpZWQgaGFuZGxlciBpcyB1c2VkIHRvIGNvbnRyb2wgd2hldGhlclxuICogdGhlIHNlbmQgaXMgYWN0aXZlIGFuZCB3aGF0IHRvIGRvIGFmdGVyIHRoZSBzZW5kIGNvbXBsZXRlcy4gQSBzZW5kIGNhbiBiZWNvbWVcbiAqIGluYWN0aXZlIGlmIGl0IHdhcyBwYXJ0IG9mIGFuIGBzZWxlY3RgIGNhbGwgYW5kIHNvbWUgb3RoZXIgb3BlcmF0aW9uXG4gKiBzcGVjaWZpZWQgaW4gdGhhdCBjYWxsIGhhcyBhbHJlYWR5IGNvbXBsZXRlZC5cbiAqXG4gKiBUaGlzIHZhbHVlIGlzIGdpdmVuIHRvIGEgcmVjZWl2ZSBoYW5kbGVyIGltbWVkaWF0ZWx5IGlmIHRoZXJlJ3Mgb25lIHdhaXRpbmcuXG4gKiBPdGhlcndpc2UgdGhlIHZhbHVlIGFuZCBoYW5kbGVyIGFyZSBxdWV1ZWQgdG9nZXRoZXIgdG8gd2FpdCBmb3IgYSByZWNlaXZlLlxuICpcbiAqIFRoaXMgaXMgYSBsb3ctbGV2ZWwgb3BlcmF0aW9uIHRoYXQncyBwcm92aWRlZCBhcyBhIHBhcnQgb2YgdGhlIGNoYW5uZWxcbiAqIGltcGxlbWVudGF0aW9uIHNvIHRoYXQgb3RoZXIgb3BlcmF0aW9ucyBmdW5jdGlvbnMgY2FuIHByb3Blcmx5IGFwcGx5XG4gKiBoYW5kbGVycy4gSXQgaXMgbm90IG1lYW50IGZvciBnZW5lcmFsIHVzZS4gVXNlIHRob3NlIG90aGVyIG9wZXJhdGlvbnNcbiAqIGZ1bmN0aW9ucyBpbnN0ZWFkLlxuICpcbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcC9jaGFubmVsXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuQ2hhbm5lbH0gY2hhbm5lbCBUaGUgY2hhbm5lbCB0aGF0IHRoZSB2YWx1ZSBpcyBiZWluZyBzZW50XG4gKiAgICAgdG8uXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBiZSBwdXQgb250byB0aGUgY2hhbm5lbC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaGFuZGxlci5hY3RpdmUgRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBzZW5kIGlzIHN0aWxsIGFjdGl2ZVxuICogICAgIGFuZCBzaG91bGQgc3RpbGwgYmUgc2VydmljZWQuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBoYW5kbGVyLmNvbW1pdCBEZWFjdGl2YXRlcyB0aGUgc2VuZCAoc28gaXQgY2FuJ3QgYmVcbiAqICAgICBzZXJ2aWNlZCBhIHNlY29uZCB0aW1lKSBhbmQgcmV0dXJucyB0aGUgY2FsbGJhY2sgdG8gYmUgZmlyZWQgd2hlbiB0aGVcbiAqICAgICBzZW5kIGNvbXBsZXRlcy5cbiAqIEByZXR1cm4ge21vZHVsZTpjc3AvY2hhbm5lbC5Cb3h8bnVsbH0gT25lIG9mIHRocmVlIHZhbHVlcy4gQSBib3hlZCBgdHJ1ZWAgaXNcbiAqICAgICByZXR1cm5lZCBpZiB0aGUgc2VuZCB3YXMgaW1tZWRpYXRlbHkgY29uc3VtZWQgYnkgYSBwZW5kaW5nIHJlY2VpdmUuIEFcbiAqICAgICBib3hlZCBgZmFsc2VgIGlzIHJldHVybmVkIGlmIHRoZSBzZW5kIHdhcyBwZXJmb3JtZWQgb24gYSBjaGFubmVsIHRoYXQgd2FzXG4gKiAgICAgYWxyZWFkeSBjbG9zZWQgYnkgdGhlIHRpbWUgdGhlIHNlbmQgdG9vayBwbGFjZS4gYG51bGxgIGlzIHJldHVybmVkIGlmIHRoZVxuICogICAgIHNlbmQgd2FzIHF1ZXVlZCBwZW5kaW5nIGEgY29ycmVzcG9uZGluZyByZWNlaXZlLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaGFuZGxlU2VuZChjaGFubmVsLCB2YWx1ZSwgaGFuZGxlcikge1xuICBpZiAodmFsdWUgPT09IENMT1NFRCkge1xuICAgIHRocm93IEVycm9yKFwiQ2Fubm90IHNlbmQgQ0xPU0VEIHRvIGEgY2hhbm5lbFwiKTtcbiAgfVxuXG4gIGlmIChjaGFubmVsLmNsb3NlZCkge1xuICAgIGhhbmRsZXIuY29tbWl0KCk7XG4gICAgcmV0dXJuIGJveChmYWxzZSk7XG4gIH1cblxuICBsZXQgcmVjZWl2ZXIsIGNhbGxiYWNrO1xuXG4gIC8vIFB1c2ggdGhlIGluY29taW5nIHZhbHVlIHRocm91Z2ggdGhlIGJ1ZmZlciwgZXZlbiBpZiB0aGVyZSdzIGFscmVhZHkgYVxuICAvLyByZWNlaXZlciB3YWl0aW5nIGZvciB0aGUgdmFsdWUuIFRoaXMgaXMgdG8gbWFrZSBzdXJlIHRoYXQgdGhlIHRyYW5zZHVjZXJcbiAgLy8gc3RlcCBmdW5jdGlvbiBoYXMgYSBjaGFuY2UgdG8gYWN0IG9uIHRoZSB2YWx1ZSBmaXJzdCwgd2hpY2ggY291bGQgY2hhbmdlXG4gIC8vIHRoZSB2YWx1ZSBvciBtYWtlIGl0IGFsdG9nZXRoZXIgdW5hdmFpbGFibGUuXG4gIC8vXG4gIC8vIElmIHRoZSBjaGFubmVsIGlzIHVuYnVmZmVyZWQgdGhpcyBwcm9jZXNzIGlzIHNraXBwZWQgKHRoZXJlIGNhbid0IGJlIGFcbiAgLy8gdHJhbnNkdWNlciBvbiBhbiB1bmJ1ZmZlcmVkIGNoYW5uZWwgYW55d2F5KS4gSWYgdGhlIGJ1ZmZlciBpcyBmdWxsLCB0aGVcbiAgLy8gdHJhbnNkdWNlcidzIHdvcmsgaXMgZGVmZXJyZWQgdW50aWwgbGF0ZXIgd2hlbiB0aGUgYnVmZmVyIGlzIG5vdCBmdWxsLlxuICBpZiAoY2hhbm5lbC5idWZmZXIgJiYgIWlzRnVsbChjaGFubmVsLmJ1ZmZlcikpIHtcbiAgICBoYW5kbGVyLmNvbW1pdCgpO1xuICAgIGNvbnN0IGRvbmUgPSBpc0NvbXBsZXRlZChcbiAgICAgIGNoYW5uZWwudHJhbnNkdWNlckZuW3Auc3RlcF0oY2hhbm5lbC5idWZmZXIsIHZhbHVlKVxuICAgICk7XG5cbiAgICBmb3IgKDs7KSB7XG4gICAgICBpZiAoY291bnQoY2hhbm5lbC5idWZmZXIpID09PSAwKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgcmVjZWl2ZXIgPSBkZXF1ZXVlKGNoYW5uZWwucmVjdnMpO1xuICAgICAgaWYgKHJlY2VpdmVyID09PSBFTVBUWSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGlmIChyZWNlaXZlci5hY3RpdmUpIHtcbiAgICAgICAgY2FsbGJhY2sgPSByZWNlaXZlci5jb21taXQoKTtcbiAgICAgICAgY29uc3QgdmFsID0gcmVtb3ZlKGNoYW5uZWwuYnVmZmVyKTtcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgZGlzcGF0Y2goKCkgPT4gY2FsbGJhY2sodmFsKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZG9uZSkge1xuICAgICAgY2xvc2UoY2hhbm5lbCk7XG4gICAgfVxuICAgIHJldHVybiBib3godHJ1ZSk7XG4gIH1cblxuICAvLyBUaGlzIGxvb3AgaGFwcGVucyBpZiB0aGUgY2hhbm5lbCBpcyB1bmJ1ZmZlcmVkIGFuZCB0aGVyZSBpcyBhdCBsZWFzdCBvbmVcbiAgLy8gcGVuZGluZyByZWNlaXZlLiAoQnVmZmVyZWQgY2hhbm5lbHMgYnJlYWsgb3V0IG9mIHRoaXMgbG9vcCBpbW1lZGlhdGVseSxcbiAgLy8gYmVjYXVzZSBpbiBvcmRlciBmb3IgYSBidWZmZXJlZCBjaGFubmVsIHRvIHJlYWNoIHRoaXMgcG9pbnQsIGl0cyBidWZmZXJcbiAgLy8gbXVzdCBoYXZlIGJlZW4gZnVsbC4gSWYgdGhlIGJ1ZmZlciBpcyBmdWxsLCB0aGF0IG1lYW5zIHRoZXJlIGFyZSBubyBwZW5kaW5nXG4gIC8vIHJlY2VpdmVzIGFuZCB0aGUgZmlyc3Qgb25lIHJlYWQgd2lsbCBiZSBFTVBUWS4pIEl0IHByb2Nlc3NlcyB0aGUgbmV4dFxuICAvLyBwZW5kaW5nIHJlY2VpdmUgaW1tZWRpYXRlbHkuXG4gIGZvciAoOzspIHtcbiAgICByZWNlaXZlciA9IGRlcXVldWUoY2hhbm5lbC5yZWN2cyk7XG4gICAgaWYgKHJlY2VpdmVyID09PSBFTVBUWSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGlmIChyZWNlaXZlci5hY3RpdmUpIHtcbiAgICAgIGhhbmRsZXIuY29tbWl0KCk7XG4gICAgICBjYWxsYmFjayA9IHJlY2VpdmVyLmNvbW1pdCgpO1xuICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIGRpc3BhdGNoKCgpID0+IGNhbGxiYWNrKHZhbHVlKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gYm94KHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIC8vIElmIHRoZXJlIGFyZSBubyBwZW5kaW5nIHJlY2VpdmVzIG9uIGFuIHVuYnVmZmVyZWQgY2hhbm5lbCwgb3Igb24gYSBidWZmZXJlZFxuICAvLyBjaGFubmVsIHdpdGggYSBmdWxsIGJ1ZmZlciwgd2UgcXVldWUgdGhlIHNlbmQgdG8gdGxldCBpdCB3YWl0IGZvciBhIHJlY2VpdmVcbiAgLy8gdG8gYmVjb21lIGF2YWlsYWJsZS4gU2VuZHMgd2hvc2UgaGFuZGxlcnMgaGF2ZSBnb25lIGluYWN0aXZlICh3aGljaCBoYXBwZW5zXG4gIC8vIGlmIHRoZXkgd2VyZSBwcm9jZXNzZWQgYXMgcGFydCBvZiBhIGBzZWxlY3RgIGNhbGwpIGFyZSBwZXJpb2RpY2FsbHkgcHVyZ2VkLlxuICBpZiAoY2hhbm5lbC5kaXJ0eVNlbmRzID4gY2hhbm5lbC5tYXhEaXJ0eSkge1xuICAgIGZpbHRlcihjaGFubmVsLnNlbmRzLCBzZW5kZXIgPT4gc2VuZGVyLmhhbmRsZXIuYWN0aXZlKTtcbiAgICBjaGFubmVsLmRpcnR5U2VuZHMgPSAwO1xuICB9IGVsc2Uge1xuICAgIGNoYW5uZWwuZGlydHlTZW5kcysrO1xuICB9XG5cbiAgaWYgKHFDb3VudChjaGFubmVsLnNlbmRzKSA+PSBjaGFubmVsLm1heFF1ZXVlZCkge1xuICAgIHRocm93IEVycm9yKFxuICAgICAgYE5vIG1vcmUgdGhhbiAke2NoYW5uZWwubWF4UXVldWVkfSBwZW5kaW5nIHNlbmRzIGFyZSBhbGxvd2VkIG9uIGEgc2luZ2xlIGNoYW5uZWxgXG4gICAgKTtcbiAgfVxuICBlbnF1ZXVlKGNoYW5uZWwuc2VuZHMsIHNlbmRCb3godmFsdWUsIGhhbmRsZXIpKTtcblxuICByZXR1cm4gbnVsbDtcbn1cblxuLyoqXG4gKiBSZWNlaXZlcyBhIHZhbHVlIGZyb20gYSBjaGFubmVsLiBUaGUgc3BlY2lmaWVkIGhhbmRsZXIgaXMgdXNlZCB0byBjb250cm9sXG4gKiB3aGV0aGVyIHRoZSByZWNlaXZlIGlzIGFjdGl2ZSBhbmQgd2hhdCB0byBkbyBhZnRlciB0aGUgcmVjZWl2ZSBjb21wbGV0ZXMuIEFcbiAqIHJlY2VpdmUgY2FuIGJlY29tZSBpbmFjdGl2ZSBpZiBpdCB3YXMgcGFydCBvZiBhbiBgc2VsZWN0YCBjYWxsIGFuZCBzb21lIG90aGVyXG4gKiBvcGVyYXRpb24gc3BlY2lmaWVkIGluIHRoYXQgY2FsbCBoYXMgYWxyZWFkeSBjb21wbGV0ZWQuXG4gKlxuICogVGhpcyB2YWx1ZSBpcyBnaXZlbiB0byBhIHNlbmQgaGFuZGxlciBpbW1lZGlhdGVseSBpZiB0aGVyZSdzIG9uZSB3YWl0aW5nLlxuICogT3RoZXJ3aXNlIHRoZSB2YWx1ZSBhbmQgaGFuZGxlciBhcmUgcXVldWVkIHRvZ2V0aGVyIHRvIHdhaXQgZm9yIGEgc2VuZC5cbiAqXG4gKiBUaGlzIGlzIGEgbG93LWxldmVsIG9wZXJhdGlvbiB0aGF0J3MgcHJvdmlkZWQgYXMgYSBwYXJ0IG9mIHRoZSBjaGFubmVsXG4gKiBpbXBsZW1lbnRhdGlvbiBzbyB0aGF0IG90aGVyIG9wZXJhdGlvbnMgZnVuY3Rpb25zIGNhbiBwcm9wZXJseSBhcHBseVxuICogaGFuZGxlcnMuIEl0IGlzIG5vdCBtZWFudCBmb3IgZ2VuZXJhbCB1c2UuIFVzZSB0aG9zZSBvdGhlciBvcGVyYXRpb25zXG4gKiBmdW5jdGlvbnMgaW5zdGVhZC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcC9jaGFubmVsXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuQ2hhbm5lbH0gY2hhbm5lbCBUaGUgY2hhbm5lbCB0aGF0IHRoZSB2YWx1ZSBpcyBiZWluZ1xuICogICAgIHJlY2VpdmVkIGZyb20uXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGhhbmRsZXIuYWN0aXZlIERldGVybWluZXMgd2hldGhlciB0aGUgcmVjZWl2ZSBpcyBzdGlsbFxuICogICAgIGFjdGl2ZSBhbmQgc2hvdWxkIHN0aWxsIGJlIHNlcnZpY2VkLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gaGFuZGxlci5jb21taXQgRGVhY3RpdmF0ZXMgdGhlIHJlY2VpdmUgKHNvIGl0IGNhbid0IGJlXG4gKiAgICAgc2VydmljZWQgYSBzZWNvbmQgdGltZSkgYW5kIHJldHVybnMgdGhlIGNhbGxiYWNrIHRvIGJlIGZpcmVkIHdoZW4gdGhlXG4gKiAgICAgcmVjZWl2ZSBjb21wbGV0ZXMuXG4gKiBAcmV0dXJuIHttb2R1bGU6Y3NwL2NoYW5uZWwuQm94fG51bGx9IEVpdGhlciB0aGUgYm94ZWQgdmFsdWUgcmVjZWl2ZWQgZnJvbVxuICogICAgIHRoZSBjaGFubmVsLCBvciBgbnVsbGAgaWYgdGhlIHJlY2VpdmUgbXVzdCBiZSBxdWV1ZWQgdG8gYXdhaXQgYVxuICogICAgIGNvcnJlc3BvbmRpbmcgc2VuZC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGhhbmRsZVJlY3YoY2hhbm5lbCwgaGFuZGxlcikge1xuICBsZXQgc2VuZGVyLCBzZW5kSGFuZGxlciwgY2FsbGJhY2s7XG5cbiAgLy8gUnVucyBpZiB0aGUgY2hhbm5lbCBpcyBidWZmZXJlZCBhbmQgdGhlIGJ1ZmZlcmVkIGlzIG5vdCBlbXB0eSAoYW4gZW1wdHlcbiAgLy8gYnVmZmVyIG1lYW5zIHRoZXJlIGFyZSBubyBwZW5kaW5nIHNlbmRzKS4gV2UgaW1tZWRpYXRlbHkgcHJvY2VzcyBhbnkgc2VuZHNcbiAgLy8gdGhhdCB3ZXJlIHF1ZXVlZCB3aGVuIHRoZXJlIHdlcmUgbm8gcGVuZGluZyByZWNlaXZlcywgdXAgdW50aWwgdGhlIGJ1ZmZlclxuICAvLyBpcyBmaWxsZWQgd2l0aCBzZW50IHZhbHVlcy5cbiAgaWYgKGNoYW5uZWwuYnVmZmVyICYmIGNvdW50KGNoYW5uZWwuYnVmZmVyKSA+IDApIHtcbiAgICBoYW5kbGVyLmNvbW1pdCgpO1xuICAgIGNvbnN0IHZhbHVlID0gcmVtb3ZlKGNoYW5uZWwuYnVmZmVyKTtcblxuICAgIGZvciAoOzspIHtcbiAgICAgIGlmIChpc0Z1bGwoY2hhbm5lbC5idWZmZXIpKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgc2VuZGVyID0gZGVxdWV1ZShjaGFubmVsLnNlbmRzKTtcbiAgICAgIGlmIChzZW5kZXIgPT09IEVNUFRZKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBzZW5kSGFuZGxlciA9IHNlbmRlci5oYW5kbGVyO1xuICAgICAgaWYgKHNlbmRIYW5kbGVyLmFjdGl2ZSkge1xuICAgICAgICBjYWxsYmFjayA9IHNlbmRIYW5kbGVyLmNvbW1pdCgpO1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICBkaXNwYXRjaCgoKSA9PiBjYWxsYmFjayh0cnVlKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKFxuICAgICAgICAgIGlzQ29tcGxldGVkKFxuICAgICAgICAgICAgY2hhbm5lbC50cmFuc2R1Y2VyRm5bcC5zdGVwXShjaGFubmVsLmJ1ZmZlciwgc2VuZGVyLnZhbHVlKVxuICAgICAgICAgIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgY2xvc2UoY2hhbm5lbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGJveCh2YWx1ZSk7XG4gIH1cblxuICAvLyBUaGlzIGxvb3AgcnVucyBvbiBhbiB1bmJ1ZmZlcmVkIGNoYW5uZWwgaWYgdGhlcmUgYXJlIGFueSBwZW5kaW5nIHNlbmRzLlxuICAvLyAoQnVmZmVyZWQgY2hhbm5lbHMgYnJlYWsgb3V0IG9mIHRoaXMgbG9vcCBpbW1lZGlhdGVseSBiZWNhdXNlIGluIG9yZGVyIHRvXG4gIC8vIGhhdmUgY29tZSB0aGlzIGZhciB3aXRob3V0IHJldHVybmluZywgdGhlIGNoYW5uZWwncyBidWZmZXIgbXVzdCBoYXZlIGJlZW5cbiAgLy8gZW1wdHkuIEFuIGVtcHR5IGJ1ZmZlciBtZWFucyB0aGVyZSBhcmUgbm8gcGVuZGluZyBzZW5kcywgc28gdGhlIGZpcnN0XG4gIC8vIHBlbmRpbmcgc2VuZCByZWFkIGZyb20gaXQgd2lsbCBiZSBFTVBUWS4pIEl0IHByb2Nlc3NlcyB0aGUgbmV4dCBwZW5kaW5nXG4gIC8vIHNlbmQgaW1tZWRpYXRlbHkuXG4gIGZvciAoOzspIHtcbiAgICBzZW5kZXIgPSBkZXF1ZXVlKGNoYW5uZWwuc2VuZHMpO1xuICAgIGlmIChzZW5kZXIgPT09IEVNUFRZKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgc2VuZEhhbmRsZXIgPSBzZW5kZXIuaGFuZGxlcjtcbiAgICBpZiAoc2VuZEhhbmRsZXIuYWN0aXZlKSB7XG4gICAgICBjYWxsYmFjayA9IHNlbmRIYW5kbGVyLmNvbW1pdCgpO1xuICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIGRpc3BhdGNoKCgpID0+IGNhbGxiYWNrKHRydWUpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBib3goc2VuZGVyLnZhbHVlKTtcbiAgICB9XG4gIH1cblxuICAvLyBJZiB3ZSd2ZSBleGhhdXN0ZWQgYWxsIG9mIG91ciBwZW5kaW5nIHNlbmRzIGFuZCB0aGUgY2hhbm5lbCBpcyBtYXJrZWRcbiAgLy8gY2xvc2VkLCB3ZSBjYW4gZmluYWxseSByZXV0cm4gdGhlIGZhY3QgdGhhdCB0aGUgY2hhbm5lbCBpcyBjbG9zZWQuIFRoaXNcbiAgLy8gZW5zdXJlcyB0aGF0IGFueSBzZW5kcyB0aGF0IHdlcmUgYWxyZWFkeSBwZW5kaW5nIG9uIHRoZSBjaGFubmVsIGFyZVxuICAvLyBwcm9jZXNzZWQgYmVmb3JlIGNsb3N1cmUsIGV2ZW4gaWYgdGhlIGNoYW5uZWwgd2FzIGNsb3NlZCBiZWZvcmUgdGhhdCBjb3VsZFxuICAvLyBoYXBwZW4uXG4gIGlmIChjaGFubmVsLmNsb3NlZCkge1xuICAgIGhhbmRsZXIuY29tbWl0KCk7XG4gICAgcmV0dXJuIGJveChDTE9TRUQpO1xuICB9XG5cbiAgLy8gSWYgYW4gdW5idWZmZXJlZCBjaGFubmVsIG9yIGEgYnVmZmVyZWQgY2hhbm5lbCB3aXRoIGFuIGVtcHR5IGJ1ZmZlciBoYXMgbm9cbiAgLy8gcGVuZGluZyBzZW5kcywgYW5kIGlmIHRoZSBjaGFubmVsIGlzIHN0aWxsIG9wZW4sIHRoZSByZWNlaXZlIGlzIHF1ZXVlZCB0b1xuICAvLyBiZSBwcm9jZXNzZWQgd2hlbiBhIHNlbmQgaXMgYXZhaWxhYmxlLiBSZWNlaXZlcyB3aG9zZSBoYW5kbGVycyBoYXZlIGdvbmVcbiAgLy8gaW5hY3RpdmUgYXMgdGhlIHJlc3VsdCBvZiBgc2VsZWN0YCBwcm9jZXNzaW5nIGFyZSBwZXJpb2RpY2FsbHkgcHVyZ2VkLlxuICBpZiAoY2hhbm5lbC5kaXJ0eVJlY3ZzID4gY2hhbm5lbC5tYXhEaXJ0eSkge1xuICAgIGZpbHRlcihjaGFubmVsLnJlY3ZzLCByZWNlaXZlciA9PiByZWNlaXZlci5hY3RpdmUpO1xuICAgIGNoYW5uZWwuZGlydHlSZWN2cyA9IDA7XG4gIH0gZWxzZSB7XG4gICAgY2hhbm5lbC5kaXJ0eVJlY3ZzKys7XG4gIH1cblxuICBpZiAocUNvdW50KGNoYW5uZWwucmVjdnMpID49IGNoYW5uZWwubWF4UXVldWVkKSB7XG4gICAgY29uc3QgbWF4ID0gY2hhbm5lbC5tYXhRdWV1ZWQ7XG4gICAgdGhyb3cgRXJyb3IoXG4gICAgICBgTm8gbW9yZSB0aGFuICR7bWF4fSBwZW5kaW5nIHJlY2VpdmVzIGFyZSBhbGxvd2VkIG9uIGEgc2luZ2xlIGNoYW5uZWxgXG4gICAgKTtcbiAgfVxuICBlbnF1ZXVlKGNoYW5uZWwucmVjdnMsIGhhbmRsZXIpO1xuXG4gIHJldHVybiBudWxsO1xufVxuXG4vKipcbiAqIENsb3NlcyB0aGUgY2hhbm5lbCBpZiBpdCBpc24ndCBhbHJlYWR5IGNsb3NlZC4gVGhpcyBpbW1lZGlhdGVseSByZXR1cm5zIGFueVxuICogYnVmZmVyZWQgdmFsdWVzIHRvIHBlbmRpbmcgcmVjZWl2ZXMuIElmIHRoZXJlIGFyZSBubyBidWZmZXJlZCB2YWx1ZXMgKG9yIGlmXG4gKiB0aGV5J3ZlIGFscmVhZHkgYmVlbiB0YWtlbiBieSBvdGhlciByZWNlaXZlcyksIHRoZW4gYWxsIG9mIHRoZSByZXN0IG9mIHRoZVxuICogcmVjZWl2ZXMgYXJlIGNvbXBsZXRlZCB3aXRoIHRoZSB2YWx1ZSBvZiB7QGxpbmsgbW9kdWxlOmNzcC5DTE9TRUR8Q0xPU0VEfS5cbiAqIEFueSBwZW5kaW5nIHNlbmRzIGFyZSBjb21wbGV0ZWQgd2l0aCB0aGUgdmFsdWUgb2YgYGZhbHNlYC5cbiAqXG4gKiBOb3RlIHRoYXQgdGhlIGJ1ZmZlciBpcyBub3QgZW1wdGllZCBpZiB0aGVyZSBhcmUgc3RpbGwgdmFsdWVzIHJlbWFpbmluZyBhZnRlclxuICogYWxsIG9mIHRoZSBwZW5kaW5nIHJlY2VpdmVzIGhhdmUgYmVlbiBoYW5kbGVkLiBUaGUgY2hhbm5lbCB3aWxsIHN0aWxsIHByb3ZpZGVcbiAqIHRob3NlIHZhbHVlcyB0byBhbnkgZnV0dXJlIHJlY2VpdmVzLCB0aG91Z2ggbm8gbmV3IHZhbHVlcyBtYXkgYmUgYWRkZWQgdG8gdGhlXG4gKiBjaGFubmVsLiBPbmNlIHRoZSBidWZmZXIgaXMgZGVwbGV0ZWQsIGFueSBmdXR1cmUgcmVjZWl2ZXMgd2lsbCByZXR1cm5cbiAqIHtAbGluayBtb2R1bGU6Y3NwLkNMT1NFRHxDTE9TRUR9LlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuQ2hhbm5lbH0gY2hhbm5lbCBUaGUgY2hhbm5lbCB0byBiZSBjbG9zZWQuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjbG9zZShjaGFubmVsKSB7XG4gIGlmIChjaGFubmVsLmNsb3NlZCkge1xuICAgIHJldHVybjtcbiAgfVxuICBjaGFubmVsLmNsb3NlZCA9IHRydWU7XG5cbiAgbGV0IHJlY2VpdmVyLCBzZW5kZXIsIGNhbGxiYWNrO1xuXG4gIC8vIElmIHRoZXJlIGlzIGEgYnVmZmVyIGFuZCBpdCBoYXMgYXQgbGVhc3Qgb25lIHZhbHVlIGluIGl0LCBzZW5kIHRob3NlIHZhbHVlc1xuICAvLyB0byBhbnkgcGVuZGluZyByZWNlaXZlcyB0aGF0IG1pZ2h0IHN0aWxsIGJlIHF1ZXVlZC5cbiAgaWYgKGNoYW5uZWwuYnVmZmVyKSB7XG4gICAgY2hhbm5lbC50cmFuc2R1Y2VyRm5bcC5maW5hbF0oY2hhbm5lbC5idWZmZXIpO1xuICAgIGZvciAoOzspIHtcbiAgICAgIGlmIChjb3VudChjaGFubmVsLmJ1ZmZlcikgPT09IDApIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICByZWNlaXZlciA9IGRlcXVldWUoY2hhbm5lbC5yZWN2cyk7XG4gICAgICBpZiAocmVjZWl2ZXIgPT09IEVNUFRZKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgaWYgKHJlY2VpdmVyLmFjdGl2ZSkge1xuICAgICAgICBjYWxsYmFjayA9IHJlY2VpdmVyLmNvbW1pdCgpO1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHJlbW92ZShjaGFubmVsLmJ1ZmZlcik7XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgIGRpc3BhdGNoKCgpID0+IGNhbGxiYWNrKHZhbHVlKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBPbmNlIHRoZSBidWZmZXIgaXMgZW1wdHkgKG9yIGlmIHRoZXJlIGlzbid0IGEgYnVmZmVyIGF0IGFsbCksIHNlbmQgQ0xPU0VEXG4gIC8vIHRvIGFsbCByZW1haW5pbmcgcXVldWVkIHJlY2VpdmVzLlxuICBmb3IgKDs7KSB7XG4gICAgcmVjZWl2ZXIgPSBkZXF1ZXVlKGNoYW5uZWwucmVjdnMpO1xuICAgIGlmIChyZWNlaXZlciA9PT0gRU1QVFkpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBpZiAocmVjZWl2ZXIuYWN0aXZlKSB7XG4gICAgICBjYWxsYmFjayA9IHJlY2VpdmVyLmNvbW1pdCgpO1xuICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIGRpc3BhdGNoKCgpID0+IGNhbGxiYWNrKENMT1NFRCkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFNlbmQgYGZhbHNlYCB0byBhbnkgcmVtYWluaW5nIHF1ZXVlZCBzZW5kcy5cbiAgZm9yICg7Oykge1xuICAgIHNlbmRlciA9IGRlcXVldWUoY2hhbm5lbC5zZW5kcyk7XG4gICAgaWYgKHNlbmRlciA9PT0gRU1QVFkpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBpZiAoc2VuZGVyLmhhbmRsZXIuYWN0aXZlKSB7XG4gICAgICBjYWxsYmFjayA9IHNlbmRlci5oYW5kbGVyLmNvbW1pdCgpO1xuICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIGRpc3BhdGNoKCgpID0+IGNhbGxiYWNrKGZhbHNlKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCB7XG4gIENMT1NFRCxcbiAgTUFYX0RJUlRZLFxuICBNQVhfUVVFVUVELFxuICBjaGFubmVsLFxuICBoYW5kbGVTZW5kLFxuICBoYW5kbGVSZWN2LFxuICBjbG9zZSxcbiAgYm94LFxuICBpc0JveFxufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG4vKipcbiAqIEFuIGltcGxlbWVudGF0aW9uIG9mIGNoYW5uZWxzLiBUaGVzZSBjaGFubmVscyBhcmUgZXNzZW50aWFsbHkgcXVldWVzIHRoYXRcbiAqIGhvbGQgaW5zdHJ1Y3Rpb25zIHdhaXRpbmcgZm9yIHRoZSBuZXh0IGF2YWlsYWJsZSBhc3luYyBmdW5jdGlvbiB0byBwcm9jZXNzXG4gKiB0aGVtLiBUaGV5IGNhbiBiZSBidWZmZXJlZCwgd2hpY2ggaXMgYWNjb21wbGlzaGVkIHVzaW5nIHRoZSBidWZmZXIgZnVuY3Rpb25zXG4gKiBge0BsaW5rIG1vZHVsZTpjc3AuZml4ZWR8Zml4ZWR9YCwgYHtAbGluayBtb2R1bGU6Y3NwLmRyb3BwaW5nfGRyb3BwaW5nfWAsIGFuZFxuICogYHtAbGluayBtb2R1bGU6Y3NwLnNsaWRpbmd8c2xpZGluZ31gLlxuICpcbiAqIENoYW5uZWxzIGRvIG5vdCBpbnRlcmFjdCB3aXRoIEpTIHRhc2tzIG9yIHRoZSBkaXNwYXRjaGVyIGluIGFueSBtZWFuaW5nZnVsXG4gKiB3YXkuIFRoZXkncmUganVzdCBoZXJlIHRvIGhvbGQgdGFza3Mgd2hpY2ggbWF5IHRoZW1zZWx2ZXMgdGhlbiBjYXVzZSBuZXcgSlNcbiAqIHRhc2tzIHRvIGJlIGNyZWF0ZWQgdmlhIHRoZSBkaXNwYXRjaGVyLlxuICpcbiAqIENoYW5uZWxzIG1heSBoYXZlIHRyYW5zZHVjZXJzIGFzc29jaWF0ZWQgd2l0aCB0aGVtLiBUaGUgdHJhbnNkdWNlcnMgYXJlXG4gKiBleHBlY3RlZCB0byBmb2xsb3cgdGhlIHNhbWUgY29udmVudGlvbnMgYXMgYW55IG9mIHRoZSBwb3B1bGFyIHRyYW5zZHVjZXJcbiAqIGxpYnJhcmllcy4gRXhwbGljaXQgc3VwcG9ydCBpcyByZXF1aXJlZCBiZWNhdXNlIGNoYW5uZWxzIHdvdWxkbid0IHBsYXkgd2VsbFxuICogd2l0aCB0aGUgbm9ybWFsIHdheSBvZiBtYWtpbmcgYW4gb2JqZWN0IHN1cHBvcnQgdHJhbnNkdWN0aW9uLCBmb3IgdHdvXG4gKiBkaWZmZXJlbnQgcmVhc29ucy5cbiAqXG4gKiAqIFRyYW5zZHVjZXJzIHJlcXVpcmUgdGhlIGFiaWxpdHkgdG8gY3JlYXRlIGEgbmV3LCBlbXB0eSBjb2xsZWN0aW9uIG9mIHRoZVxuICogICBzYW1lIHR5cGUgYXMgdGhlIGlucHV0IGNvbGxlY3Rpb24uIEluIHRoaXMgY2FzZSwgdGhhdCB3b3VsZCBtZWFuIGNyZWF0aW5nIGFcbiAqICAgbmV3IGNoYW5uZWwsIG1lYW5pbmcgdGhhdCB0aGUgb3V0cHV0IGNoYW5uZWwgKGZyb20gd2hpY2ggdGhlIHRyYW5zZm9ybWVkXG4gKiAgIHZhbHVlcyBhcmUgcmVjZWl2ZWQpIHdvdWxkIGJlIGRpZmZlcmVudCB0aGFuIHRoZSBpbnB1dCBjaGFubmVsICh3aGVyZVxuICogICB2YWx1ZXMgYXJlIHNlbnQpLlxuICogKiBJZiB3ZSBzb21laG93IGdldCBvdmVyIHRoYXQgcmVxdWlyZW1lbnQgYW5kIGtlZXAgYWxsIGFjdGlvbiBvbiB0aGUgc2FtZVxuICogICBjaGFubmVsLCB3ZSBjYW4ndCB0YWtlIHZhbHVlcyBmcm9tIHRoZSBjaGFubmVsLCB0cmFuc2Zvcm0gdGhlbSwgYW5kIHB1dFxuICogICB0aGVtIGJhY2suIFRoaXMgd291bGQgcG90ZW50aWFsbHkgY2hhbmdlIHRoZSBvcmRlciBvZiB2YWx1ZXMgaW4gdGhlIGNoYW5uZWxcbiAqICAgc2luY2Ugd2UgYXJlIGRlYWxpbmcgd2l0aCBhc3luY2hyb25vdXMgcHJvY2Vzc2VzLlxuICpcbiAqIFRoZSBleHBsaWNpdCBzdXBwb3J0IG1lYW5zIGEgdHJhbnNkdWNlciBpcyBkaXJlY3RseSBhc3NvY2lhdGVkIHdpdGggYVxuICogY2hhbm5lbC4gV2hlbiBhIHZhbHVlIGlzIHNlbnQgdG8gdGhlIGNoYW5uZWwsIGl0J3MgZmlyc3QgcnVuIHRocm91Z2ggdGhlXG4gKiB0cmFuc2R1Y2VyIGFuZCB0aGUgdHJhbnNmb3JtZWQgdmFsdWUgaXMgdGhlIG9uZSBhY3R1YWxseSBwdXQgaW50byB0aGVcbiAqIGNoYW5uZWwncyBidWZmZXIuIFRoaXMgYXZvaWRzIGJvdGggb2YgdGhlIHByb2JsZW1zIG5vdGVkIGFib3ZlLlxuICpcbiAqIEBtb2R1bGUgY3NwL2NoYW5uZWxcbiAqIEBwcml2YXRlXG4gKi9cblxuaW1wb3J0IHtcbiAgQ0xPU0VELFxuICBjaGFubmVsIGFzIGNoYW5JbXBsLFxuICBoYW5kbGVTZW5kLFxuICBoYW5kbGVSZWN2LFxuICBjbG9zZSBhcyBjbG9zZUltcGwsXG4gIE1BWF9ESVJUWSxcbiAgTUFYX1FVRVVFRFxufSBmcm9tIFwiLi9oYW5kbGVyXCI7XG5pbXBvcnQgeyBERUZBVUxULCBzZWxlY3QsIHNlbGVjdEFzeW5jLCB2YWx1ZSwgY2hhbm5lbCB9IGZyb20gXCIuL3NlbGVjdFwiO1xuaW1wb3J0IHsgYWRkLCBmaXhlZCwgaXNCdWZmZXIgfSBmcm9tIFwibW9kdWxlcy9idWZmZXJcIjtcbmltcG9ydCB7IHByb3RvY29scyBhcyBwIH0gZnJvbSBcIm1vZHVsZXMvcHJvdG9jb2xcIjtcblxuLyoqXG4gKiBBIGhhbmRsZXIgZnVuY3Rpb24gZm9yIGV4Y2VwdGlvbnMgdGhhdCBhcmUgdGhyb3duIGJ5IGEgdHJhbnNkdWNlciB3aGlsZVxuICogdHJhbnNmb3JtaW5nIHZhbHVlcyBvbiBhIGNoYW5uZWwuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGVyciBUaGUgZXJyb3Igb2JqZWN0IHRoYXQgd2FzIHRocm93biBieSB0aGUgdHJhbnNkdWNlci5cbiAqIEByZXR1cm4geyp9IEEgdmFsdWUgdGhhdCBzaG91bGQgYmUgcHV0IGludG8gdGhlIGNoYW5uZWwncyBidWZmZXIgd2hlbiB0aGVcbiAqICAgICB0cmFuc2R1Y2VyIHRocm93cyB0aGUgZXJyb3IuIElmIHRoaXMgdmFsdWUgaXNcbiAqICAgICB7QGxpbmsgbW9kdWxlOmNzcC5DTE9TRUR8Q0xPU0VEfSwgdGhlbiBubyB2YWx1ZSBhdCBhbGwgd2lsbCBiZSBhZGRlZCB0b1xuICogICAgIHRoZSBidWZmZXIuXG4gKiBAY2FsbGJhY2tcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwL2NoYW5uZWxcbiAqIEBwcml2YXRlXG4gKi9cblxuLyoqXG4gKiBUaGUgZGVmYXVsdCBleGNlcHRpb24gaGFuZGxlciwgdXNlZCB3aGVuIG5vIGV4Y2VwdGlvbiBoYW5kbGVyIGlzIHN1cHBsaWVkIHRvXG4gKiBge0BsaW5rIG1vZHVsZTpjc3AvY2hhbm5lbC5oYW5kbGVFeGNlcHRpb259YCxcbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC9jaGFubmVsLndyYXBUcmFuc2Zvcm1lcn1gLCBge0BsaW5rIG1vZHVsZTpjc3AuY2hhbnxjaGFufWAsXG4gKiBvciBge0BsaW5rIG1vZHVsZTpjc3AudHJhbnNDaGFufHRyYW5zQ2hhbn1gLiBUaGlzIGRlZmF1bHQgaGFuZGxlciBtZXJlbHlcbiAqIHJldHVybnMgYHtAbGluayBtb2R1bGU6Y3NwLkNMT1NFRHxDTE9TRUR9YCwgd2hpY2ggd2lsbCByZXN1bHQgaW4gbm8gbmV3IHZhbHVlXG4gKiBiZWluZyB3cml0dGVuIHRvIHRoZSBjaGFubmVsLlxuICpcbiAqIEB0eXBlIHttb2R1bGU6Y3NwLkV4Y2VwdGlvbkhhbmRsZXJ9XG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcC9jaGFubmVsXG4gKiBAcHJpdmF0ZVxuICovXG5jb25zdCBERUZBVUxUX0hBTkRMRVIgPSAoKSA9PiBDTE9TRUQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBoYW5kbGVyIHVzZWQgZm9yIGBzZW5kYCBhbmQgYHJlY3ZgIG9wZXJhdGlvbnMuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3AvY2hhbm5lbFxuICogQHBhcmFtIHttb2R1bGU6Y3NwL2NoYW5uZWwuSGFuZGxlckNhbGxiYWNrfSBmbiBUaGUgY2FsbGJhY2sgdG8gYmUgcnVuIHdoZW5cbiAqICAgICAoYW5kIGlmKSB0aGUgb3BlcmF0aW9uIGNvbXBsZXRlcy5cbiAqIEByZXR1cm4ge21vZHVsZTpjc3AvY2hhbm5lbC5IYW5kbGVyfSBUaGUgbmV3IGhhbmRsZXIuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBvcEhhbmRsZXIoZm4pIHtcbiAgcmV0dXJuIE9iamVjdC5jcmVhdGUobnVsbCwge1xuICAgIGFjdGl2ZToge1xuICAgICAgdmFsdWU6IHRydWVcbiAgICB9LFxuICAgIGNvbW1pdDoge1xuICAgICAgdmFsdWU6ICgpID0+IGZuXG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBIYW5kbGVzIGFuIGV4Y2VwdGlvbiB0aGF0IGlzIHRocm93biBpbnNpZGUgYSB0cmFuc2R1Y2VyLiBUaGUgdGhyb3duIGVycm9yIGlzXG4gKiBwYXNzZWQgdG8gdGhlIGBoYW5kbGVyYCBmdW5jdGlvbiwgYW5kIHRoZSByZXN1bHQgb2YgdGhhdCBoYW5kbGVyIGZ1bmN0aW9uIGlzXG4gKiBhZGRlZCB0byB0aGUgY2hhbm5lbCdzIGJ1ZmZlci4gSWYgdGhhdCB2YWx1ZSBpc1xuICoge0BsaW5rIG1vZHVsZTpjc3AuQ0xPU0VEfENMT1NFRH0sIHRoZW4gaXQgaXMgKm5vdCogYWRkZWQgdG8gdGhlIGJ1ZmZlci5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuQnVmZmVyfSBidWZmZXIgVGhlIGJ1ZmZlciB0aGF0IGJhY2tzIHRoZSBjaGFubmVsIHdob3NlXG4gKiAgICAgdHJhbnNkdWNlcidzIGV4Y2VwdGlvbnMgYXJlIGJlaW5nIGhhbmRsZWQuXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuRXhjZXB0aW9uSGFuZGxlcn0gaGFuZGxlciBUaGUgZXhjZXB0aW9uIGhhbmRsaW5nIGZ1bmN0aW9uXG4gKiAgICAgdGhhdCBpcyBydW4gd2hlbiBhbiBlcnJvciBvY2N1cnMgaW4gYSB0cmFuc2R1Y2VyLlxuICogQHBhcmFtICB7T2JqZWN0fSBleCBUaGUgZXJyb3Igb2JqZWN0IHRocm93biBieSB0aGUgdHJhbnNkdWNlci5cbiAqIEByZXR1cm4ge21vZHVsZTpjc3AuQnVmZmVyfSBUaGUgYnVmZmVyIGl0c2VsZi4gVGhpcyBpcyBkb25lIHRvIG1ha2UgaXQgZWFzaWVyXG4gKiAgICAgdG8gaW50ZWdyYXRlIHRoaXMgZnVuY3Rpb24gaW50byBhIHRyYW5zZHVjZXIncyBzdGVwIGZ1bmN0aW9uLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaGFuZGxlRXhjZXB0aW9uKGJ1ZmZlciwgaGFuZGxlciwgZXgpIHtcbiAgY29uc3QgdmFsdWUgPSBoYW5kbGVyKGV4KTtcbiAgaWYgKHZhbHVlICE9PSBDTE9TRUQpIHtcbiAgICBhZGQoYnVmZmVyLCB2YWx1ZSk7XG4gIH1cbiAgcmV0dXJuIGJ1ZmZlcjtcbn1cblxuLyoqXG4gKiBBIHRyYW5zZHVjZXIgdGhhdCB3cmFwcyBhbm90aGVyIHRyYW5zZHVjZXIgd2l0aCBlcnJvciBoYW5kbGluZyBjb2RlLiBBbnlcbiAqIGVycm9yIHRoYXQgb2NjdXJzIHdpdGhpbiB0aGUgdHJhbnNkdWNlciwgZWl0aGVyIGluIHRoZSBzdGVwIGZ1bmN0aW9uIG9yIHRoZVxuICogcmVzdWx0IGZ1bmN0aW9uLCB3aWxsIGNhdXNlIHRoZSBlcnJvciBoYW5kbGVyIHRvIGJlIHJ1bi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdHJhbnNkdWNlciBUaGUgdHJhbnNkdWNlciB0byBhZGQgYW4gZXJyb3IgaGFuZGxlciB0by5cbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5FeGNlcHRpb25IYW5kbGVyfSBbaGFuZGxlcj1ERUZBVUxUX0hBTkRMRVJdIFRoZSBleGNlcHRpb25cbiAqICAgICBoYW5kbGluZyBmdW5jdGlvbiB0aGF0IGlzIHJ1biB3aGVuIGFuIGVycm9yIG9jY3VycyBpbiB0aGUgdHJhbnNkdWNlci5cbiAqIEByZXR1cm4ge09iamVjdH0gQSBuZXcgdHJhbnNkdWNlciB0aGF0IGlzIHRoZSByZXN1bHQgb2Ygd3JhcHBpbmcgdGhlIHByb3ZpZGVkXG4gKiAgICAgdHJhbnNkdWNlcidzIHN0ZXAgYW5kIGZpbmFsIGZ1bmN0aW9ucyB3aXRoIHRoZSBleGNlcHRpb24gaGFuZGxlci5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGhhbmRsZXJUcmFuc2R1Y2VyKHRyYW5zZHVjZXIsIGhhbmRsZXIgPSBERUZBVUxUX0hBTkRMRVIpIHtcbiAgcmV0dXJuIHtcbiAgICBbcC5zdGVwXShidWZmZXIsIGlucHV0KSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gdHJhbnNkdWNlcltwLnN0ZXBdKGJ1ZmZlciwgaW5wdXQpO1xuICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgcmV0dXJuIGhhbmRsZUV4Y2VwdGlvbihidWZmZXIsIGhhbmRsZXIsIGV4KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgW3AuZmluYWxdKGJ1ZmZlcikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIHRyYW5zZHVjZXJbcC5maW5hbF0oYnVmZmVyKTtcbiAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgIHJldHVybiBoYW5kbGVFeGNlcHRpb24oYnVmZmVyLCBoYW5kbGVyLCBleCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuXG4vKipcbiAqIFRoZSByZWR1Y2VyIHVzZWQgYXQgdGhlIGVuZCBvZiBhIHRyYW5zZHVjZXIgY2hhaW4gdG8gY29udHJvbCBob3cgdGhlXG4gKiB0cmFuc2Zvcm1lZCB2YWx1ZXMgYXJlIHJlZHVjZWQgYmFjayBvbnRvIHRoZSBjaGFubmVsJ3MgYnVmZmVyLiBUaGlzIHJlZHVjZXJcbiAqIGRvZXMgbm90aGluZyBtb3JlIHRoYW4gYWRkIHRoZSBpbnB1dCBpdGVtcyAod2hpY2ggYXJlIHRoZSB0cmFuc2Zvcm1lZCB2YWx1ZXNcbiAqIHRoYXQgYXJlIGJlaW5nIHB1dCBvbnRvIHRoZSBjaGFubmVsKSB0byB0aGUgY2hhbm5lbCBidWZmZXIuXG4gKlxuICogVGhpcyBpcyBhIG5lY2Vzc2FyeSBwYXJ0IG9mIHdvcmtpbmcgd2l0aCBhIHRyYW5zZHVjZXIsIGFzIHRoZSBmaW5hbCByZWR1Y2VyXG4gKiBhbHdheXMgdGFrZXMgdGhlIHRyYW5zZm9ybWVkIHZhbHVlcyBhbmQgcmVuZGVycyB0aGVtIGludG8gd2hhdGV2ZXIgY29sbGVjdGlvblxuICogaXMgZGVzaXJlZC4gVGhpcyBpcyB0aGF0IGZpbmFsIHJlZHVjZXIgZm9yIGNoYW5uZWxzLlxuICpcbiAqIEB0eXBlIHtPYmplY3R9XG4gKiBAcHJpdmF0ZVxuICovXG5jb25zdCBidWZmZXJSZWR1Y2VyID0ge1xuICBbcC5pbml0XSgpIHtcbiAgICB0aHJvdyBFcnJvcihcImluaXQgbm90IGF2YWlsYWJsZVwiKTtcbiAgfSxcblxuICBbcC5zdGVwXShidWZmZXIsIGlucHV0KSB7XG4gICAgYWRkKGJ1ZmZlciwgaW5wdXQpO1xuICAgIHJldHVybiBidWZmZXI7XG4gIH0sXG5cbiAgW3AuZmluYWxdKGJ1ZmZlcikge1xuICAgIHJldHVybiBidWZmZXI7XG4gIH1cbn07XG5cbi8qKlxuICogUGFyc2VzIHRoZSBidWZmZXIgYXJndW1lbnQgYW5kIG9wdGlvbnMsIGFsb25nIHdpdGggYSBzZXQgb2YgZGVmYXVsdCBvcHRpb25zLFxuICogdG8gZmlndXJlIG91dCB3aGF0IHdhcyByZWFsbHkgcGFzc2VkIHRvIGB7QGxpbmsgbW9kdWxlOmNzcC5jaGFufGNoYW59YC5cbiAqXG4gKiBAcGFyYW0geyhudWxsfG51bWJlcnxtb2R1bGU6Y3NwLkJ1ZmZlcil9IGJ1ZmZlciBUaGUgYnVmZmVyIGFyZ3VtZW50IHBhc3NlZCB0b1xuICogICAgIGB7QGxpbmsgbW9kdWxlOmNzcC5jaGFufGNoYW59YC5cbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIFRoZSBvcHRpb25zIGFyZ3VtZW50IHBhc3NlZCB0b1xuICogICAgIGB7QGxpbmsgbW9kdWxlOmNzcC5jaGFufGNoYW59YC5cbiAqIEBwYXJhbSB7b2JqZWN0fSBkZWZhdWx0T3B0aW9ucyBEZWZhdWx0IHZhbHVlcyBmb3Igb3B0aW9ucyB0aGF0IG1pZ2h0IG5vdCBoYXZlXG4gKiAgICAgYmVlbiBzZW50IHRvIGB7QGxpbmsgbW9kdWxlOmNzcC5jaGFufGNoYW59YC5cbiAqIEByZXR1cm4ge29iamVjdH0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHByb2Nlc3NlZCB2YWx1ZXMgb2YgYWxsIG9mIHRoZVxuICogICAgIGFyZ3VtZW50cyBzZW50IHRvIGB7QGxpbmsgbW9kdWxlOmNzcC5jaGFufGNoYW59YC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHBhcnNlQXJncyhidWZmZXIsIG9wdGlvbnMsIGRlZmF1bHRPcHRpb25zKSB7XG4gIGxldCBidWY7XG4gIGxldCBvcHRzO1xuXG4gIGlmICghYnVmZmVyKSB7XG4gICAgLy8gc2FtZSBmb3IgMCwgbnVsbCwgb3IgdW5kZWZpbmVkXG4gICAgYnVmID0gbnVsbDtcbiAgICBvcHRzID0gb3B0aW9ucztcbiAgfSBlbHNlIGlmICh0eXBlb2YgYnVmZmVyID09PSBcIm51bWJlclwiKSB7XG4gICAgYnVmID0gZml4ZWQoYnVmZmVyKTtcbiAgICBvcHRzID0gb3B0aW9ucztcbiAgfSBlbHNlIGlmIChpc0J1ZmZlcihidWZmZXIpKSB7XG4gICAgYnVmID0gYnVmZmVyO1xuICAgIG9wdHMgPSBvcHRpb25zO1xuICB9IGVsc2Uge1xuICAgIC8vIElmIG5vIGJ1ZmZlciBpcyBzcGVjaWZpZWQgYnV0IGEgdHJhbnNkdWNlciBpcywgd2UgYXNzdW1lIGZpeGVkKDEpIGluc3RlYWRcbiAgICAvLyBvZiBubyBidWZmZXJcbiAgICBidWYgPSBidWZmZXI/LnRyYW5zZHVjZXIgPyBmaXhlZCgxKSA6IG51bGw7XG4gICAgb3B0cyA9IGJ1ZmZlcjtcbiAgfVxuXG4gIGNvbnN0IHsgdHJhbnNkdWNlciwgaGFuZGxlciwgbWF4RGlydHksIG1heFF1ZXVlZCwgdGltZXIgfSA9IE9iamVjdC5hc3NpZ24oXG4gICAge30sXG4gICAgZGVmYXVsdE9wdGlvbnMsXG4gICAgb3B0c1xuICApO1xuICByZXR1cm4geyBidWYsIHRyYW5zZHVjZXIsIGhhbmRsZXIsIG1heERpcnR5LCBtYXhRdWV1ZWQsIHRpbWVyIH07XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbmQgcmV0dXJucyBhIG5ldyBjaGFubmVsLlxuICpcbiAqIEJ5IGRlZmF1bHQgdGhpcyBjaGFubmVsIHdpbGwgYmUgYSBzaW1wbGUgdW5idWZmZXJlZCwgdW50cmFuc2Zvcm1lZCBjaGFubmVsLFxuICogYnV0IHRoYXQgY2FuIGJlIGNoYW5nZWQgdGhyb3VnaCBvcHRpb25zLiBBIGNoYW5uZWwgZG9lcyBub3QgaGF2ZSBhbnlcbiAqIGV4dGVybmFsbHkgdXNlZnVsIGZ1bmN0aW9ucy4gSXQgZXhpc3RzIGxhcmdlbHkgdG8gYmUgcGFzc2VkIGludG9cbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC5zZW5kfHNlbmR9YCwgYHtAbGluayBtb2R1bGU6Y3NwLnJlY3Z8cmVjdn1gLCBhbmRcbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC5zZWxlY3R8c2VsZWN0fWAgaW52b2NhdGlvbnMsIGFsb25nIHdpdGggdGhlaXIgbm9uLWJsb2NraW5nXG4gKiB2YXJpYXRpb25zIChge0BsaW5rIG1vZHVsZTpjc3Auc2VuZEFzeW5jfHNlbmRBc3luY31gLFxuICogYHtAbGluayBtb2R1bGU6Y3NwLnJlY3ZBc3luY3xyZWN2QXN5bmN9YCwgYW5kXG4gKiBge0BsaW5rIG1vZHVsZTpjc3Auc2VsZWN0QXN5bmN8c2VsZWN0QXN5bmN9YCkuXG4gKlxuICogSWYgYSBidWZmZXIgdmFsdWUgaXMgcHJvdmlkZWQsIGl0IGRlZmluZXMgd2hhdCBidWZmZXIgc2hvdWxkIGJhY2sgdGhlXG4gKiBjaGFubmVsLiBJZiB0aGlzIGlzIGBudWxsYCBvciBgMGAsIHRoZSBjaGFubmVsIHdpbGwgYmUgdW5idWZmZXJlZC4gSWYgaXQncyBhXG4gKiBwb3NpdGl2ZSBudW1iZXIsIHRoZSBjaGFubmVsIHdpbGwgYmUgYnVmZmVyZWQgYnkgYVxuICogYHtAbGluayBtb2R1bGU6Y3NwLkZpeGVkQnVmZmVyfEZpeGVkQnVmZmVyfSBgb2YgdGhhdCBzaXplLiBJZiBpdCdzIGFcbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC5CdWZmZXJ8QnVmZmVyfWAgb2JqZWN0LCB0aGF0IG9iamVjdCB3aWxsIGJlIHVzZWQgYXMgdGhlXG4gKiBjaGFubmVsJ3MgYnVmZmVyLiBJZiBpdCdzIG1pc3NpbmcgYWx0b2dldGhlciwgdGhlIGNoYW5uZWwgd2lsbCBiZSB1bmJ1ZmZlcmVkXG4gKiB1bmxlc3MgYSBgdHJhbnNkdWNlcmAgb3B0aW9uIGlzIHByb3ZpZGVkIChzZWUgYmVsb3cpLCBpbiB3aGljaCBjYXNlIGl0IHdpbGxcbiAqIGJlIGEgYHtAbGluayBtb2R1bGU6Y3NwLkZpeGVkQnVmZmVyfEZpeGVkQnVmZmVyfWAgb2Ygc2l6ZSAxLlxuICpcbiAqIGBjaGFuYCBzdXBwb3J0cyB0cmFuc2R1Y2VycyBieSBhbGxvd2luZyBhIHRyYW5zZHVjZXIgZnVuY3Rpb24gdG8gYmVcbiAqIGFzc29jaWF0ZWQgd2l0aCBpdC4gVGhpcyBpcyBwYXNzZWQgYXMgdGhlIGB0cmFuc2R1Y2VyYCBvcHRpb24gYW5kIGNhbiBvbmx5IGJlXG4gKiB1c2VkIGlmIHRoZSBjaGFubmVsIGlzIGJ1ZmZlcmVkIChvdGhlcndpc2UgYW4gZXJyb3IgaXMgdGhyb3duKS4gVGhpc1xuICogdHJhbnNkdWNlciBmdW5jdGlvbiBtdXN0IHRha2UgYW5vdGhlciB0cmFuc2R1Y2VyIGFzIGEgcGFyYW1ldGVyIChhbGxvd2luZ1xuICogdHJhbnNmb3JtZXJzIHRvIGJlIGNoYWluZWQpLCBhbmQgaXQgbXVzdCByZXR1cm4gYW4gb2JqZWN0IGNvbmZvcm1pbmcgdG8gdGhlXG4gKiB0cmFuc2R1Y2VyIHByb3RvY29sLlxuICpcbiAqIEVycm9ycyBpbiB0aGUgdHJhbnNmb3JtYXRpb24gcHJvY2VzcyBjYW4gYmUgaGFuZGxlZCBieSBwYXNzaW5nIGFuIGVycm9yXG4gKiBoYW5kbGVyLiBUaGlzIGlzIGEgZnVuY3Rpb24gdGhhdCBleHBlY3RzIHRvIHJlY2VpdmUgYW4gZXJyb3Igb2JqZWN0IGFzIGFcbiAqIHBhcmFtZXRlciBhbmQgY2FuIHJldHVybiBhIHZhbHVlIHRoYXQgaXMgdGhlbiBwdXQgb250byB0aGUgY2hhbm5lbC4gSWYgdGhpc1xuICogdmFsdWUgaXMgYHtAbGluayBtb2R1bGU6Y3NwLkNMT1NFRHxDTE9TRUR9YCwgdGhlbiBubyB2YWx1ZSB3aWxsIGJlIHB1dCBvbnRvXG4gKiB0aGUgY2hhbm5lbCB1cG9uIGhhbmRsZXIgY29tcGxldGlvbi5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICogQHBhcmFtIHsobnVtYmVyfG1vZHVsZTpjc3AuQnVmZmVyKX0gW2J1ZmZlcl0gVGhlIGJ1ZmZlciBvYmplY3QgdGhhdCBzaG91bGRcbiAqICAgICBiYWNrIHRoaXMgY2hhbm5lbC4gSWYgdGhpcyBpcyBhIHBvc2l0aXZlIG51bWJlciwgYSBmaXhlZCBidWZmZXIgb2YgdGhhdFxuICogICAgIHNpemUgd2lsbCBiZSBjcmVhdGVkIHRvIGJhY2sgdGhlIGNoYW5uZWwuIElmIGl0IGlzIGAwYCBvciBgbnVsbGAsIHRoZSBuZXdcbiAqICAgICBjaGFubmVsIHdpbGwgYmUgdW5idWZmZXJlZC4gSWYgaXQncyBub3QgcHJlc2VudCwgdGhlIG5ldyBjaGFubmVsIHdpbGwgYmVcbiAqICAgICB1bmJ1ZmZlcmVkIHVubGVzcyB0aGVyZSBpcyBhIGB0cmFuc2R1Y2VyYCBvcHRpb24sIGluIGluIHdoaWNoIGNhc2UgaXRcbiAqICAgICB3aWxsIGJlIGJ1ZmZlcmVkIHdpdGggYSBzaXplIDFcbiAqICAgICBge0BsaW5rIG1vZHVsZTpjc3AuRml4ZWRCdWZmZXJ8Rml4ZWRCdWZmZXJ9YC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gQSBzZXQgb2Ygb3B0aW9ucyBmb3IgY29uZmlndXJpbmcgdGhlIGNoYW5uZWwnc1xuICogICAgIHF1ZXVlLlxuICogQHBhcmFtIHttb2R1bGU6Y29yZS5UcmFuc2R1Y2VyRnVuY3Rpb259IFtvcHRpb25zLnRyYW5zZHVjZXJdIEEgdHJhbnNkdWNlciB0b1xuICogICAgIHJ1biBlYWNoIHZhbHVlIHRocm91Z2ggYmVmb3JlIHB1dHRpbmcgaXQgb250byB0aGUgY2hhbm5lbC4gVGhpcyBmdW5jdGlvblxuICogICAgIHNob3VsZCBleHBlY3Qgb25lIHBhcmFtZXRlciAoYW5vdGhlciB0cmFuc2R1Y2VyIHRoYXQgaXQncyBjaGFpbmVkIHRvKSBhbmRcbiAqICAgICByZXR1cm4gYW4gb2JqZWN0IHRoYXQgY29uZm9ybXMgdG8gdGhlIHRyYW5zZHVjZXIgcHJvdG9jb2wuIElmIGFcbiAqICAgICB0cmFuc2R1Y2VyIGlzIHByb3ZpZGVkIG9uIGFuIHVuYnVmZmVyZWQgY2hhbm5lbCwgYW4gZXJyb3Igd2lsbCBiZSB0aHJvd24uXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuRXhjZXB0aW9uSGFuZGxlcn0gW29wdGlvbnMuaGFuZGxlcl0gQW4gZXJyb3IgaGFuZGxlciB0aGF0XG4gKiAgICAgaXMgcnVuIHdoZW5ldmVyIGFuIGVycm9yIG9jY3VycyBpbnNpZGUgYSB0cmFuc2R1Y2VyIGZ1bmN0aW9uLiBJZiB0aGF0XG4gKiAgICAgaGFwcGVucywgdGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgd2l0aCBvbmUgcGFyYW1ldGVyLCB3aGljaCBpcyB0aGUgZXJyb3JcbiAqICAgICBvYmplY3QuIFRoZSB2YWx1ZSB0aGF0IHRoZSBoYW5kbGVyIHJldHVybnMgKGlmIGl0IGlzIG5vdFxuICogICAgIGB7QGxpbmsgbW9kdWxlOmNzcC5DTE9TRUR8Q0xPU0VEfWApIHdpbGwgYmUgcHV0IG9udG8gdGhlIGNoYW5uZWwgd2hlbiB0aGVcbiAqICAgICBoYW5kbGVyIGZpbmlzaGVzIHJ1bm5pbmcuXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMubWF4RGlydHk9NjRdIFRoZSBtYXhpbXVtIG51bWJlciBvZiBkaXJ0eSBvcGVyYXRpb25zXG4gKiAgICAgdGhhdCBjYW4gYmUgaW4gdGhlIHF1ZXVlIGJlZm9yZSB0aG9zZSBvcGVyYXRpb25zIGFyZSBzdWJqZWN0IHRvIGJlaW5nXG4gKiAgICAgcHVyZ2VkLiBEaXJ0eSBvcGVyYXRpb25zIGFyZSB0aG9zZSB0aGF0IG1heSBub3QgYmUgdmFsaWQgYW55bW9yZSBiZWNhdXNlXG4gKiAgICAgdGhleSB3ZXJlIGluIHRoZSBsaXN0IG9mIG9wZXJhdGlvbnMgcGFzc2VkIHRvXG4gKiAgICAgYHtAbGluayBtb2R1bGU6Y3NwLnNlbGVjdHxzZWxlY3R9YCBvclxuICogICAgIGB7QGxpbmsgbW9kdWxlOmNzcC5zZWxlY3RBc3luY3xzZWxlY3RBc3luY31gIGJ1dCB3ZXJlIG5vdCBjaG9zZW4gdG8gcnVuLlxuICogICAgIFRoaXMgcHJvdmlkZXMgYSBjaGFuY2UgZm9yIGEgdmVyeSBtaW5vciBwZXJmb3JtYW5jZSB0d2VhayBhbmQgaXMgYmVzdFxuICogICAgIGxlZnQgYWxvbmUuXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMubWF4UXVldWVkPTEwMjRdIFRoZSBtYXhpbXVtIG51bWJlciBvZiBvcGVyYXRpb25zXG4gKiAgICAgdGhhdCBjYW4gYmUgcXVldWVkIHVwIGF0IHRoZSBzYW1lIHRpbWUuIFRoaXMgcHJldmVudHMgaW5maW5pdGUgbG9vcHMgZnJvbVxuICogICAgIGFjY2lkZW50YWxseSBlYXRpbmcgdXAgYWxsIG9mIHRoZSBhdmFpbGFibGUgbWVtb3J5LlxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLnRpbWVyXSBJZiB0aGlzIHZhbHVlIGlzIHByZXNlbnQsIHRoZSBjaGFubmVsIHdpbGwgYmVcbiAqICAgICBhIHRpbWVkIGNoYW5uZWwgdGhhdCBjbG9zZXMgYXV0b21hdGljYWxseSBhZnRlciB0aGlzIG51bWJlciBvZlxuICogICAgIG1pbGxpc2Vjb25kcy5cbiAqIEByZXR1cm4ge21vZHVsZTpjc3AuQ2hhbm5lbH0gQSBuZXcgY2hhbm5lbC5cbiAqL1xuZnVuY3Rpb24gY2hhbihidWZmZXIsIG9wdGlvbnMpIHtcbiAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgbWF4RGlydHk6IE1BWF9ESVJUWSxcbiAgICBtYXhRdWV1ZWQ6IE1BWF9RVUVVRURcbiAgfTtcbiAgY29uc3QgeyBidWYsIHRyYW5zZHVjZXIsIGhhbmRsZXIsIG1heERpcnR5LCBtYXhRdWV1ZWQsIHRpbWVyIH0gPSBwYXJzZUFyZ3MoXG4gICAgYnVmZmVyLFxuICAgIG9wdGlvbnMsXG4gICAgZGVmYXVsdE9wdGlvbnNcbiAgKTtcblxuICBpZiAodHJhbnNkdWNlciAmJiAhYnVmKSB7XG4gICAgdGhyb3cgRXJyb3IoXCJPbmx5IGJ1ZmZlcmVkIGNoYW5uZWxzIGNhbiB1c2UgdHJhbnNkdWNlcnNcIik7XG4gIH1cblxuICBjb25zdCB4ZiA9IGhhbmRsZXJUcmFuc2R1Y2VyKFxuICAgIHRyYW5zZHVjZXIgPyB0cmFuc2R1Y2VyKGJ1ZmZlclJlZHVjZXIpIDogYnVmZmVyUmVkdWNlcixcbiAgICBoYW5kbGVyXG4gICk7XG5cbiAgY29uc3QgaXNUaW1lZCA9IHR5cGVvZiB0aW1lciA9PT0gXCJudW1iZXJcIjtcblxuICBjb25zdCBjaCA9IGNoYW5JbXBsKGJ1ZiwgeGYsIGlzVGltZWQsIG1heERpcnR5LCBtYXhRdWV1ZWQpO1xuXG4gIGFzeW5jIGZ1bmN0aW9uKiBpdGVyYXRvcigpIHtcbiAgICBmb3IgKDs7KSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGF3YWl0IHJlY3YoY2gpO1xuICAgICAgaWYgKHZhbHVlID09PSBDTE9TRUQpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICB5aWVsZCB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBjaFtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBpdGVyYXRvcjtcblxuICBpZiAoaXNUaW1lZCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4gY2xvc2VJbXBsKGNoKSwgdGltZXIpO1xuICB9XG5cbiAgcmV0dXJuIGNoO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYW4gdW5idWZmZXJlZCwgdGltZWQgY2hhbm5lbC4gVGhpcyBjaGFubmVsIGNsb3NlcyBhdXRvbWF0aWNhbGx5IGFmdGVyXG4gKiB0aGUgc3VwcGxpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBhbmQgaXMgdGhlIGVxdWl2YWxlbnQgb2YgY2FsbGluZyBgY2hhbigwLFxuICogeyB0aW1lcjogZGVsYXkgfSlgLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcGFyYW0ge251bWJlcn0gZGVsYXkgVGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgYWZ0ZXIgdGhlIGNoYW5uZWwgaXMgY3JlYXRlZFxuICogICAgIHRoYXQgaXQgd2lsbCBiZSBjbG9zZWQgYXV0b21hdGljYWxseS5cbiAqIEByZXR1cm4ge21vZHVsZTpjc3AuQ2hhbm5lbH0gQSBuZXcgdGltZWQgY2hhbm5lbC5cbiAqL1xuZnVuY3Rpb24gdGltZWRDaGFuKGRlbGF5ID0gMCkge1xuICByZXR1cm4gY2hhbih7IHRpbWVyOiBkZWxheSB9KTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgYnVmZmVyZWQgY2hhbm5lbCB3aXRoIGEgdHJhbnNkdWNlciBhbmQgb3B0aW9uYWwgZXJyb3IgaGFuZGxlci4gVGhlXG4gKiBidWZmZXIgZm9yIHRoaXMgY2hhbm5lbCBpcyBhIGB7QGxpbmsgbW9kdWxlOmNzcC5GaXhlZEJ1ZmZlcnxGaXhlZEJ1ZmZlcn1gIG9mXG4gKiBzaXplIDEuIFRoaXMgaXMgdGhlIGVxdWl2YWxlbnQgb2YgYGNoYW4oMSwgeyB0cmFuc2R1Y2VyLCBoYW5kbGVyIH0pYC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICogQHBhcmFtIHttb2R1bGU6Y29yZS5UcmFuc2R1Y2VyRnVuY3Rpb259IHRyYW5zZHVjZXIgVGhlIHRyYW5zZHVjZXIgdXNlZCB0b1xuICogICAgIHRyYW5zZm9ybSB2YWx1ZXMgb24gdGhlIG5ldyBjaGFubmVsLlxuICogQHBhcmFtIHttb2R1bGU6Y3NwLkV4Y2VwdGlvbkhhbmRsZXJ9IFtoYW5kbGVyXSBBbiBleGNlcHRpb24gaGFuZGxlciBjYWxsZWRcbiAqICAgICB3aXRoIHRoZSBlcnJvciBvYmplY3QgYXMgaXRzIG9ubHkgYXJndW1lbnQgd2hlbiBhbiBlcnJvciBoYXBwZW5zIGluc2lkZSBhXG4gKiAgICAgdHJhbnNkdWNlci4gSWYgdGhpcyBpcyBub3QgcHJvdmlkZWQsIGEgZGVmYXVsdCBoYW5kbGVyIGlzIHVzZWQgdGhhdFxuICogICAgIHNpbXBseSBkb2VzIG5vdGhpbmcsIGluY2x1ZGluZyBzZW5kaW5nIG5vIG91dHB1dCBmcm9tIHRoZSB2YWx1ZSB0aGF0XG4gKiAgICAgZXJyb3JlZC5cbiAqIEByZXR1cm4ge21vZHVsZTpjc3AuQ2hhbm5lbH0gQSBuZXcgY2hhbm5lbCB3aXRoIGEgdHJhbnNkdWNlci5cbiAqL1xuZnVuY3Rpb24gdHJhbnNDaGFuKHRyYW5zZHVjZXIsIGhhbmRsZXIpIHtcbiAgcmV0dXJuIGNoYW4oeyB0cmFuc2R1Y2VyLCBoYW5kbGVyIH0pO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhIGNoYW5uZWwgaXMgY2xvc2VkLlxuICpcbiAqIEEgY2xvc2VkIGNoYW5uZWwgd2lsbCBjYXVzZSBhbnkgYHNlbmRgIG9wZXJhdGlvbiB0byByZXR1cm4gYGZhbHNlYCBhbmQgYW55XG4gKiBgcmVjdmAgb3BlcmF0aW9uIHRvIHJldHVybiBhbnkgYnVmZmVyZWQgaXRlbXMgdGhhdCByZW1haW4sIGZvbGxvd2VkIGJ5XG4gKiBge0BsaW5rIG1vZHVsZTpjc3AuQ0xPU0VEfENMT1NFRH1gLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuQ2hhbm5lbH0gY2hhbm5lbCBUaGUgY2hhbm5lbCB0byBjaGVjay5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IEVpdGhlciBgdHJ1ZWAgaWYgdGhlIGNoYW5uZWwgaXMgY2xvc2VkIG9yIGBmYWxzZWAgaWYgaXRcbiAqICAgICBpc24ndC5cbiAqL1xuZnVuY3Rpb24gaXNDbG9zZWQoY2hhbm5lbCkge1xuICByZXR1cm4gY2hhbm5lbC5jbG9zZWQ7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGEgY2hhbm5lbCBpcyBidWZmZXJlZC5cbiAqXG4gKiBBIGNoYW5uZWwgaXMgYnVmZmVyZWQgaWYgYSBidWZmZXIgb3IgYSBudW1iZXIgd2FzIHBhc3NlZCBhcyB0aGUgZmlyc3RcbiAqIGFyZ3VtZW50IG9mIGB7QGxpbmsgbW9kdWxlOmNzcC5jaGFufGNoYW59YCBvciBpZiBhIHRyYW5zZHVjZXIgaXMgYSBwYXJ0IG9mXG4gKiB0aGUgY2hhbm5lbC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICogQHBhcmFtIHttb2R1bGU6Y3NwLkNoYW5uZWx9IGNoYW5uZWwgVGhlIGNoYW5uZWwgdG8gY2hlY2suXG4gKiBAcmV0dXJuIHtib29sZWFufSBFaXRoZXIgYHRydWVgIGlmIHRoZSBjaGFubmVsIGlzIGJ1ZmZlcmVkIG9yIGBmYWxzZWAgaWYgaXRcbiAqICAgICBpc24ndC5cbiAqL1xuZnVuY3Rpb24gaXNCdWZmZXJlZChjaGFubmVsKSB7XG4gIHJldHVybiBjaGFubmVsLmlzQnVmZmVyZWQ7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGEgY2hhbm5lbCBpcyB0aW1lZC5cbiAqXG4gKiBBIGNoYW5uZWwgaXMgdGltZWQgaWYgaXQgd2FzIGNyZWF0ZWQgZWl0aGVyIHdpdGggdGhlIGB0aW1lcmAgb3B0aW9uIG9mXG4gKiBge0BsaW5rIG1vZHVsZTpjc3AuY2hhbnxjaGFufWAgb3Igd2l0aCB0aGVcbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC50aW1lZENoYW58dGltZWRDaGFufWAgZnVuY3Rpb24uIEl0IHdpbGwgYXV0b21hdGljYWxseVxuICogY2xvc2UgYWZ0ZXIgYSBjZXJ0YWluIHBlcmlvZCBvZiB0aW1lLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuQ2hhbm5lbH0gY2hhbm5lbCBUaGUgY2hhbm5lbCB0byBjaGVjay5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IEVpdGhlciBgdHJ1ZWAgaWYgdGhlIGNoYW5uZWwgaXMgdGltZWQgb3IgYGZhbHNlYCBpZiBpdFxuICogICAgIGlzbid0LlxuICovXG5mdW5jdGlvbiBpc1RpbWVkKGNoYW5uZWwpIHtcbiAgcmV0dXJuIGNoYW5uZWwuaXNUaW1lZDtcbn1cblxuLyoqXG4gKiBTZW5kcyBhIHZhbHVlIHRvIHRoaXMgY2hhbm5lbCB3aXRob3V0IGJsb2NraW5nLlxuICpcbiAqIFRoaXMgbWVhbnMgdGhhdCBhIGNhbGwgdG8gYHNlbmRBc3luY2AgZG9lcyBub3QgZ28gaW50byBhbiBgYXdhaXRgIGV4cHJlc3Npb24sXG4gKiBhbmQgaXQgaXMgbm90IG5lY2Vzc2FyeSB0byB1c2UgaXQgaW5zaWRlIGEgYXN5bmMgZnVuY3Rpb24uIFJhdGhlciB0aGFuXG4gKiBibG9ja2luZyB1bnRpbCB0aGUgc2VudCB2YWx1ZSBpcyB0YWtlbiBieSBhbm90aGVyIGFzeW5jIGZ1bmN0aW9uLCB0aGlzIG9uZVxuICogcmV0dXJucyBpbW1lZGlhdGVseSBhbmQgdGhlbiBpbnZva2VzIHRoZSBjYWxsYmFjayAoaWYgcHJvdmlkZWQpIHdoZW4gdGhlIHNlbnRcbiAqIHZhbHVlIGlzIHRha2VuLiBJdCBjYW4gYmUgc2VlbiBhcyBhIG5vbi1ibG9ja2luZyB2ZXJzaW9uIG9mXG4gKiBge0BsaW5rIG1vZHVsZTpjc3Auc2VuZHxzZW5kfWAuXG4gKlxuICogV2hpbGUgdGhlIHByaW1hcnkgdXNlIG9mIHRoaXMgZnVuY3Rpb24gaXMgdG8gc2VuZCB2YWx1ZXMgb250byBjaGFubmVscyBpblxuICogY29udGV4dHMgd2hlcmUgYmVpbmcgaW5zaWRlIGFuIGFzeW5jIGZ1bmN0aW9uIGlzIGltcG9zc2libGUgKGZvciBleGFtcGxlLCBpblxuICogYSBET00gZWxlbWVudCdzIGV2ZW50IGhhbmRsZXIpLCBpdCBjYW4gc3RpbGwgYmUgdXNlZCBpbnNpZGUgYXN5bmMgZnVuY3Rpb25zXG4gKiBhdCB0aW1lcyB3aGVuIGl0J3MgaW1wb3J0YW50IHRvIG1ha2Ugc3VyZSB0aGF0IHRoZSBmdW5jdGlvbiBkb2Vzbid0IGJsb2NrXG4gKiBmcm9tIHRoZSBzZW5kLlxuICpcbiAqIFRoZSBjYWxsYmFjayBpcyBhIGZ1bmN0aW9uIG9mIG9uZSBwYXJhbWV0ZXIuIFRoZSBwYXJhbWV0ZXIgdGhhdCdzIHN1cHBsaWVkIHRvXG4gKiB0aGUgY2FsbGJhY2sgaXMgdGhlIHNhbWUgYXMgd2hhdCBpcyBzdXBwbGllZCB0byBgYXdhaXQgc2VuZGA6IGB0cnVlYCBpZiB0aGVcbiAqIHZhbHVlIHdhcyB0YWtlbiwgb3IgYGZhbHNlYCBpZiB0aGUgY2hhbm5lbCB3YXMgY2xvc2VkLiBJZiB0aGUgY2FsbGJhY2sgaXNuJ3RcbiAqIHByZXNlbnQsIG5vdGhpbmcgd2lsbCBoYXBwZW4gYWZ0ZXIgdGhlIHZhbHVlIGlzIHRha2VuLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcGFyYW0geyp9IFt2YWx1ZV0gVGhlIHZhbHVlIGJlaW5nIHB1dCBvbnRvIHRoZSBjaGFubmVsLlxuICogQHBhcmFtIHttb2R1bGU6Y3NwLk9wQ2FsbGJhY2t9IFtjYWxsYmFja10gQSBmdW5jdGlvbiB0aGF0IGdldHMgaW52b2tlZCBlaXRoZXJcbiAqICAgICB3aGVuIHRoZSB2YWx1ZSBpcyB0YWtlbiBieSBhbm90aGVyIHByb2Nlc3Mgb3Igd2hlbiB0aGUgY2hhbm5lbCBpcyBjbG9zZWQuXG4gKiAgICAgVGhpcyBmdW5jdGlvbiBjYW4gdGFrZSBvbmUgcGFyYW1ldGVyLCB3aGljaCBpcyBgdHJ1ZWAgaW4gdGhlIGZvcm1lciBjYXNlXG4gKiAgICAgYW5kIGBmYWxzZWAgaW4gdGhlIGxhdHRlci5cbiAqL1xuZnVuY3Rpb24gc2VuZEFzeW5jKGNoYW5uZWwsIHZhbHVlLCBjYWxsYmFjayA9ICgpID0+IHt9KSB7XG4gIGNvbnN0IHJlc3VsdCA9IGhhbmRsZVNlbmQoY2hhbm5lbCwgdmFsdWUsIG9wSGFuZGxlcihjYWxsYmFjaykpO1xuICBpZiAocmVzdWx0ICYmIGNhbGxiYWNrKSB7XG4gICAgY2FsbGJhY2socmVzdWx0LnZhbHVlKTtcbiAgfVxufVxuXG4vKipcbiAqIFJlY2VpdmVzIGEgdmFsdWUgZnJvbSB0aGlzIGNoYW5uZWwgd2l0aG91dCBibG9ja2luZy5cbiAqXG4gKiBUaGlzIG1lYW5zIHRoYXQgYSBjYWxsIHRvIGByZWNlaXZlQXN5bmNgIGRvZXMgbm90IGdvIGludG8gYW4gYGF3YWl0YFxuICogZXhwcmVzc2lvbiwgYW5kIGl0IGlzIG5vdCBuZWNlc3NhcnkgdG8gdXNlIGl0IGluc2lkZSBhIGFzeW5jIGZ1bmN0aW9uLiBSYXRoZXJcbiAqIHRoYW4gYmxvY2tpbmcgdW50aWwgYSB2YWx1ZSBiZWNvbWVzIGF2YWlsYWJsZSBvbiB0aGUgY2hhbm5lbCB0byBiZSByZWNlaXZlZCxcbiAqIHRoaXMgb25lIHJldHVybnMgaW1tZWRpYXRlbHkgYW5kIHRoZW4gaW52b2tlcyB0aGUgY2FsbGJhY2sgKGlmIHByb3ZpZGVkKSB3aGVuXG4gKiBhIHZhbHVlIGJlY29tZXMgYXZhaWxhYmxlLiBJdCBjYW4gYmUgcmVnYXJkZWQgYXMgYSBub24tYmxvY2tpbmcgdmVyc2lvbiBvZlxuICoge0BsaW5rIG1vZHVsZTpjc3AucmVjdnxyZWN2fWAuXG4gKlxuICogV2hpbGUgdGhlIHByaW1hcnkgdXNlIG9mIHRoaXMgZnVuY3Rpb24gaXMgdG8gcmVjZWl2ZSB2YWx1ZXMgZnJvbSBjaGFubmVscyBpblxuICogY29udGV4dHMgd2hlcmUgYmVpbmcgaW5zaWRlIGFuIGFzeW5jIGZ1bmN0aW9uIGlzIGltcG9zc2libGUsIGl0IGNhbiBzdGlsbCBiZVxuICogdXNlZCBpbnNpZGUgYXN5bmMgZnVuY3Rpb25zIGF0IHRpbWVzIHdoZW4gaXQncyBpbXBvcnRhbnQgdGhhdCB0aGUgcmVjZWl2ZVxuICogZG9lc24ndCBibG9jayB0aGUgZnVuY3Rpb24uXG4gKlxuICogVGhlIGNhbGxiYWNrIGlzIGEgZnVuY3Rpb24gb2Ygb25lIHBhcmFtZXRlciwgYW5kIHRoZSB2YWx1ZSBzdXBwbGllZCBmb3IgdGhhdFxuICogcGFyYW1ldGVyIGlzIHRoZSB2YWx1ZSByZWNlaXZlZCBmcm9tIHRoZSBjaGFubmVsIChlaXRoZXIgYSB2YWx1ZSB0aGF0IHdhc1xuICogc2VudCBvciBge0BsaW5rIG1vZHVsZTpjc3AuQ0xPU0VEfENMT1NFRH1gKS4gSWYgdGhlIGNhbGxiYWNrIGlzbid0IHByZXNlbnQsXG4gKiBub3RoaW5nIHdpbGwgaGFwcGVuIGFmdGVyIHRoZSB2YWx1ZSBpcyB0YWtlbi5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICogQHBhcmFtIHttb2R1bGU6Y3NwLk9wQ2FsbGJhY2t9IFtjYWxsYmFja10gQSBmdW5jdGlvbiB0aGF0IGdldHMgaW52b2tlZCB3aGVuIGFcbiAqICAgICB2YWx1ZSBpcyBtYWRlIGF2YWlsYWJsZSB0byBiZSByZWNlaXZlZCAodGhpcyB2YWx1ZSBtYXkgYmVcbiAqICAgICBge0BsaW5rIG1vZHVsZTpjc3AuQ0xPU0VEfENMT1NFRH1gIGlmIHRoZSBjaGFubmVsIGNsb3NlcyB3aXRoIG5vXG4gKiAgICAgYXZhaWxhYmxlIHZhbHVlKS4gVGhlIGZ1bmN0aW9uIGNhbiB0YWtlIG9uZSBwYXJhbWV0ZXIsIHdoaWNoIGlzIHRoZSB2YWx1ZVxuICogICAgIHRoYXQgaXMgcmVjZWl2ZWQgZnJvbSB0aGUgY2hhbm5lbC5cbiAqL1xuZnVuY3Rpb24gcmVjdkFzeW5jKGNoYW5uZWwsIGNhbGxiYWNrID0gKCkgPT4ge30pIHtcbiAgY29uc3QgcmVzdWx0ID0gaGFuZGxlUmVjdihjaGFubmVsLCBvcEhhbmRsZXIoY2FsbGJhY2spKTtcbiAgaWYgKHJlc3VsdCAmJiBjYWxsYmFjaykge1xuICAgIGNhbGxiYWNrKHJlc3VsdC52YWx1ZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBTZW5kcyBhIHZhbHVlIHRvIGEgY2hhbm5lbCwgYmxvY2tpbmcgdGhlIGFzeW5jIGZ1bmN0aW9uIHVudGlsIHRoYXQgdmFsdWUgaXNcbiAqIHJlY2VpdmVkIGZyb20gdGhlIGNoYW5uZWwgYnkgYSBkaWZmZXJlbnQgZnVuY3Rpb24gKG9yIHVudGlsIHRoZSBjaGFubmVsXG4gKiBjbG9zZXMpLlxuICpcbiAqIEEgdmFsdWUgaXMgYWx3YXlzIHNlbnQgdG8gdGhlIGNoYW5uZWwsIGJ1dCBpZiB0aGF0IHZhbHVlIGlzbid0IHNwZWNpZmllZCBieVxuICogdGhlIHNlY29uZCBwYXJhbWV0ZXIsIGl0IGlzIGB1bmRlZmluZWRgLiBBbnkgdmFsdWUgbWF5IGJlIHNlbnQgdG8gYSBjaGFubmVsLFxuICogd2l0aCB0aGUgc29sZSBleGNlcHRpb24gb2YgdGhlIHNwZWNpYWwgdmFsdWVcbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC5DTE9TRUR8Q0xPU0VEfWAuXG4gKlxuICogVGhpcyBmdW5jdGlvbiAqbXVzdCogYmUgY2FsbGVkIGZyb20gd2l0aGluIGFuIGFzeW5jIGZ1bmN0aW9uIGFuZCBhcyBwYXJ0IG9mXG4gKiBhbiBgYXdhaXRgIGV4cHJlc3Npb24uXG4gKlxuICogV2hlbiBgc2VuZGAgaXMgY29tcGxldGVkIGFuZCBpdHMgZnVuY3Rpb24gdW5ibG9ja3MsIGl0cyBgYXdhaXRgIGV4cHJlc3Npb25cbiAqIGV2YWx1YXRlcyB0byBhIHN0YXR1cyBib29sZWFuIHRoYXQgaW5kaWNhdGVzIHdoYXQgY2F1c2VkIHRoZSBmdW5jdGlvbiB0b1xuICogdW5ibG9jay4gVGhhdCB2YWx1ZSBpcyBgdHJ1ZWAgaWYgdGhlIHNlbnQgdmFsdWUgd2FzIHN1Y2Nlc3NmdWxseSB0YWtlbiBieVxuICogYW5vdGhlciBwcm9jZXNzLCBvciBgZmFsc2VgIGlmIHRoZSB1bmJsb2NraW5nIGhhcHBlbmVkIGJlY2F1c2UgdGhlIHRhcmdldFxuICogY2hhbm5lbCBjbG9zZWQuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqIEBwYXJhbSB7Kn0gW3ZhbHVlXSBUaGUgdmFsdWUgYmVpbmcgcHV0IG9udG8gdGhlIGNoYW5uZWwuXG4gKiBAcmV0dXJuIHtQcm9taXNlPGJvb2xlYW4+fSBBIHByb21pc2UgdGhhdCB3aWxsIHJlc29sdmUgdG8gYHRydWVgIG9yIGBmYWxzZWBcbiAqICAgICBkZXBlbmRpbmcgb24gd2hldGhlciB0aGUgcHV0IHZhbHVlIGlzIGFjdHVhbGx5IHRha2VuLlxuICovXG5mdW5jdGlvbiBzZW5kKGNoYW5uZWwsIHZhbHVlKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICBzZW5kQXN5bmMoY2hhbm5lbCwgdmFsdWUsIHJlc29sdmUpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBSZWNlaXZlcyBhIHZhbHVlIGZyb20gdGhpcyBjaGFubmVsLCBibG9ja2luZyB0aGUgYXN5bmMgZnVuY3Rpb24gdW50aWwgYSB2YWx1ZVxuICogYmVjb21lcyBhdmFpbGFibGUgdG8gYmUgcmVjZWl2ZWQgKG9yIHVudGlsIHRoZSBjaGFubmVsIGNsb3NlcyB3aXRoIG5vIG1vcmVcbiAqIHZhbHVlcyBvbiBpdCB0byBiZSByZWNlaXZlZCkuXG4gKlxuICogVGhpcyBmdW5jdGlvbiAqbXVzdCogYmUgY2FsbGVkIGZyb20gd2l0aGluIGFuIGFzeW5jIGZ1bmN0aW9uIGFuZCBhcyBwYXJ0IG9mXG4gKiBhbiBgYXdhaXRgIGV4cHJlc3Npb24uXG4gKlxuICogV2hlbiBgcmVjZWl2ZWAgaXMgY29tcGxldGVkIGFuZCBpdHMgZnVuY3Rpb24gdW5ibG9ja3MsIGl0cyBgYXdhaXRgIGV4cHJlc3Npb25cbiAqIGV2YWx1YXRlcyB0byB0aGUgYWN0dWFsIHZhbHVlIHRoYXQgd2FzIHJlY2VpdmVkLiBJZiB0aGUgdGFyZ2V0IGNoYW5uZWxcbiAqIGNsb3NlZCwgdGhlbiBhbGwgb2YgdGhlIHZhbHVlcyBhbHJlYWR5IHBsYWNlZCBvbnRvIGl0IGFyZSByZXNvbHZlZCBieVxuICogYHJlY2VpdmVgIGFzIG5vcm1hbCwgYW5kIG9uY2Ugbm8gbW9yZSB2YWx1ZXMgYXJlIGF2YWlsYWJsZSwgdGhlIHNwZWNpYWwgdmFsdWVcbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC5DTE9TRUR8Q0xPU0VEfWAgaXMgcmV0dXJuZWQuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqIEByZXR1cm4ge1Byb21pc2V9IEEgcHJvbWlzZSB0aGF0IHdpbGwgcmVzb2x2ZSB0byB0aGUgdmFsdWUgcmVjZWl2ZWQgZnJvbSB0aGVcbiAqICAgICBjaGFubmVsIG9uY2UgdGhhdCByZWNlaXZlIGlzIGNvbXBsZXRlZC4gSWYgdGhlIGNoYW5uZWwgY2xvc2VzIHdpdGhvdXQgYVxuICogICAgIHZhbHVlIGJlaW5nIG1hZGUgYXZhaWxhYmxlLCB0aGlzIHdpbGwgcmVzb2x2ZSB0b1xuICogICAgIGB7QGxpbmsgbW9kdWxlOmNzcC5DTE9TRUR8Q0xPU0VEfWAuXG4gKi9cbmZ1bmN0aW9uIHJlY3YoY2hhbm5lbCkge1xuICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgcmVjdkFzeW5jKGNoYW5uZWwsIHJlc29sdmUpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBSZWNlaXZlcyBhIHZhbHVlIGZyb20gYSBjaGFubmVsLCBibG9ja2luZyB0aGUgYXN5bmMgZnVuY3Rpb24gdW50aWwgYSB2YWx1ZVxuICogYmVjb21lcyBhdmFpbGFibGUgdG8gYmUgcmVjZWl2ZWQgKG9yIHVudGlsIHRoZSBjaGFubmVsIGNsb3NlcyB3aXRoIG5vIG1vcmVcbiAqIHZhbHVlcyBvbiBpdCB0byBiZSByZWNlaXZlZCkuIElmIHRoZSByZWNlaXZlZCB2YWx1ZSBpcyBhbiBlcnJvciBvYmplY3QsIHRoYXRcbiAqIGVycm9yIGlzIHRocm93biBhdCB0aGF0IHBvaW50LlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gKm11c3QqIGJlIGNhbGxlZCBmcm9tIHdpdGhpbiBhbiBhc3luYyBmdW5jdGlvbiBhbmQgYXMgcGFydCBvZlxuICogYW4gYGF3YWl0YCBleHByZXNzaW9uLlxuICpcbiAqIEl0IGZ1bmN0aW9ucyBpbiBldmVyeSB3YXkgbGlrZSBge0BsaW5rIG1vZHVsZTpjc3AucmVjdnxyZWN2fWAgKmV4Y2VwdCogaW4gdGhlXG4gKiBjYXNlIHRoYXQgdGhlIHZhbHVlIG9uIHRoZSBjaGFubmVsIGlzIGFuIG9iamVjdCB0aGF0IGhhcyBgRXJyb3IucHJvdG90eXBlYCBpblxuICogaXRzIHByb3RvdHlwZSBjaGFpbiAoYW55IGJ1aWx0LWluIGVycm9yLCBhbnkgcHJvcGVybHktY29uc3RydWN0ZWQgY3VzdG9tXG4gKiBlcnJvcikuIElmIHRoYXQgaGFwcGVucywgdGhlIGVycm9yIGlzIHRocm93biwgd2hpY2ggd2lsbCBjYXVzZSB0aGUgcmV0dXJuZWRcbiAqIHByb21pc2UgdG8gYmUgcmVqZWN0ZWQgd2l0aCB0aGUgZXJyb3IuIEl0IGNhbiB0aGVuIGJlIGhhbmRsZWQgdXAgdGhlIHByb21pc2VcbiAqIGNoYWluIGxpa2UgYW55IG90aGVyIHJlamVjdGVkIHByb21pc2UuXG4gKlxuICogYHRha2VPclRocm93YCBpcyByb3VnaGx5IGVxdWl2YWxlbnQgdG86XG4gKlxuICogYGBgXG4gKiBjb25zdCB2YWx1ZSA9IGF3YWl0IHJlY3YoY2gpO1xuICogaWYgKEVycm9yLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKHZhbHVlKSkge1xuICogICB0aHJvdyB2YWx1ZTtcbiAqIH1cbiAqIGBgYFxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcmV0dXJuIHtQcm9taXNlfSBBIHByb21pc2UgdGhhdCB3aWxsIHJlc29sdmUgdG8gdGhlIHZhbHVlIHRha2VuIGZyb20gdGhlXG4gKiAgICAgY2hhbm5lbCBvbmNlIHRoYXQgdGFrZSBpcyBjb21wbGV0ZWQuIElmIHRoZSBjaGFubmVsIGNsb3NlcyB3aXRob3V0IGFcbiAqICAgICB2YWx1ZSBiZWluZyBtYWRlIGF2YWlsYWJsZSwgdGhpcyB3aWxsIHJlc29sdmUgdG9cbiAqICAgICBge0BsaW5rIG1vZHVsZTpjc3AuQ0xPU0VEfENMT1NFRH1gLiBJZiB0aGUgdGFrZW4gdmFsdWUgaXMgYW4gZXJyb3IsIHRoZVxuICogICAgIHByb21pc2Ugd2lsbCBpbnN0ZWFkIGJlIHJlamVjdGVkIHdpdGggdGhlIGVycm9yIG9iamVjdCBhcyB0aGUgcmVhc29uLlxuICovXG5mdW5jdGlvbiByZWN2T3JUaHJvdyhjaGFubmVsKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgcmVjdkFzeW5jKGNoYW5uZWwsIHJlc3VsdCA9PiB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mLmNhbGwoRXJyb3IucHJvdG90eXBlLCByZXN1bHQpKSB7XG4gICAgICAgIHJlamVjdChyZXN1bHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxuLyoqXG4gKiBDbG9zZXMgdGhlIGNoYW5uZWwsIGlmIGl0IGlzbid0IGFscmVhZHkgY2xvc2VkLiBUaGlzIGltbWVkaWF0ZWx5IHJldHVybnMgYW55XG4gKiBidWZmZXJlZCB2YWx1ZXMgdG8gcGVuZGluZyByZWNlaXZlcy4gSWYgdGhlcmUgYXJlIG5vIGJ1ZmZlcmVkIHZhbHVlcyAob3IgaWZcbiAqIHRoZXkndmUgYWxyZWFkeSBiZWVuIHRha2VuIGJ5IG90aGVyIHJlY2VpdmVzKSwgdGhlbiBhbGwgb2YgdGhlIHJlc3Qgb2YgdGhlXG4gKiByZWNlaXZlcyBhcmUgY29tcGxldGVkIHdpdGggdGhlIHZhbHVlIG9mIGB7QGxpbmsgbW9kdWxlOmNzcC5DTE9TRUR8Q0xPU0VEfWAuXG4gKiBBbnkgcGVuZGluZyBzZW5kcyBhcmUgY29tcGxldGVkIHdpdGggdGhlIHZhbHVlIG9mIGBmYWxzZWAuXG4gKlxuICogTm90ZSB0aGF0IHRoZSBidWZmZXIgaXMgbm90IGVtcHRpZWQgaWYgdGhlcmUgYXJlIHN0aWxsIHZhbHVlcyByZW1haW5pbmcgYWZ0ZXJcbiAqIGFsbCBvZiB0aGUgcGVuZGluZyByZWNlaXZlcyBoYXZlIGJlZW4gaGFuZGxlZC4gVGhlIGNoYW5uZWwgd2lsbCBzdGlsbCBwcm92aWRlXG4gKiB0aG9zZSB2YWx1ZXMgdG8gYW55IGZ1dHVyZSByZWNlaXZlcywgdGhvdWdoIG5vIG5ldyB2YWx1ZXMgbWF5IGJlIGFkZGVkIHRvIHRoZVxuICogY2hhbm5lbC4gT25jZSB0aGUgYnVmZmVyIGlzIGRlcGxldGVkLCBhbnkgZnV0dXJlIHJlY2VpdmVzIHdpbGwgcmV0dXJuXG4gKiBge0BsaW5rIG1vZHVsZTpjc3AuQ0xPU0VEfENMT1NFRH1gLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuQ2hhbm5lbH0gY2hhbm5lbCBUaGUgY2hhbm5lbCB0byBiZSBjbG9zZWQuXG4gKi9cbmZ1bmN0aW9uIGNsb3NlKGNoYW5uZWwpIHtcbiAgY2xvc2VJbXBsKGNoYW5uZWwpO1xufVxuXG5leHBvcnQge1xuICBDTE9TRUQsXG4gIERFRkFVTFQsXG4gIGNoYW4sXG4gIHRpbWVkQ2hhbixcbiAgdHJhbnNDaGFuLFxuICBpc0Nsb3NlZCxcbiAgaXNCdWZmZXJlZCxcbiAgaXNUaW1lZCxcbiAgc2VuZEFzeW5jLFxuICByZWN2QXN5bmMsXG4gIHNlbGVjdEFzeW5jLFxuICBzZW5kLFxuICByZWN2LFxuICByZWN2T3JUaHJvdyxcbiAgc2VsZWN0LFxuICBjbG9zZSxcbiAgdmFsdWUsXG4gIGNoYW5uZWxcbn07XG5cbi8qKlxuICogVXNlZCBieSBjaGFubmVscyB0byB0cmFjayBleGVjdXRpb24gb2Ygb3BlcmF0aW9ucyAoYHNlbmRgLCBgcmVjdmAsIGFuZFxuICogYHNlbGVjdGApLiBUaGV5IHByb3ZpZGUgdHdvIHBpZWNlcyBvZiBpbmZvcm1hdGlvbjogdGhlIGZ1bmN0aW9uIHRvIGNhbGwgd2hlblxuICogYSBgc2VuZGAgb3IgYHJlY3ZgIHVuYmxvY2tzIChiZWNhdXNlIGEgdmFsdWUgZ2l2ZW4gdG8gc2VuZCBoYXMgYmVlbiByZWNlaXZlZCxcbiAqIG9yIGEgYHJlY3ZgIGhhcyBhY2NlcHRlZCBhIHZhbHVlIHRoYXQgaGFzIGJlZW4gc2VudCkgYW5kIHdoZXRoZXIgb3Igbm90IHRoZVxuICogaGFuZGxlciBpcyBzdGlsbCBhY3RpdmUuXG4gKlxuICogVGhlIGZ1bmN0aW9uIGlzIGEgY2FsbGJhY2sgdGhhdCBhY3R1YWxseSBkZWZpbmVzIHRoZSBkaWZmZXJlbmNlIGJldHdlZW5cbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC5zZW5kfHNlbmR9YCAvIGB7QGxpbmsgbW9kdWxlOmNzcC5yZWN2fHJlY3Z9YCAvXG4gKiBge0BsaW5rIG1vZHVsZTpjc3Auc2VsZWN0fHNlbGVjdH1gIGFuZFxuICogYHtAbGluayBtb2R1bGU6Y3NwLnNlbmRBc3luY3xzZW5kQXN5bmN9YCAvXG4gKiBge0BsaW5rIG1vZHVsZTpjc3AucmVjdkFzeW5jfHJlY3ZBc3luY31gIC9cbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC5zZWxlY3RBc3luY3xzZWxlY3RBc3luY31gOiB3aGlsZSB0aGUgdW5ibG9ja2VkIGNhbGxzIHVzZVxuICogdGhlIGNhbGxiYWNrIHBhc3NlZCB0byB0aGUgZnVuY3Rpb24sIGBzZW5kYCwgYHJlY3ZgLCBhbmQgYHNlbGVjdGAgc2ltcGx5XG4gKiBjb250aW51ZSB0aGUgcHJvY2VzcyB3aGVyZSBpdCBsZWZ0IG9mZi4gKFRoaXMgaXMgd2h5IGBzZW5kYCwgYHJlY3ZgLCBhbmRcbiAqIGBzZWxlY3RgIG9ubHkgd29yayBpbnNpZGUgYGFzeW5jYCBmdW5jdGlvbnMgd2l0aCBgYXdhaXRgIGlmIHRoZSByZXR1cm4gdmFsdWVcbiAqIGlzIG5lZWRlZCwgYmVjYXVzZSBvdGhlcndpc2UgdGhlcmUncyBubyBwcm9jZXNzIHRvIGNvbnRpbnVlLilcbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIHByb3ZpZGVkIGFzIHRoZSByZXR1cm4gdmFsdWUgb2YgdGhlIGBjb21taXRgIG1ldGhvZC4gQ2FsbGluZ1xuICogYGNvbW1pdGAgaGFzIG5vIGV4dHJhIGVmZmVjdCB3aXRoIGBzZW5kYCBhbmQgYHJlY3ZgIG9wZXJhdGlvbnMsIGJ1dCBmb3JcbiAqIGBzZWxlY3RgLCBpdCBhbHNvIG1hcmtzIHRoZSBoYW5kbGVyIGFzIG5vIGxvbmdlciBiZWluZyBhY3RpdmUuIFRoaXMgbWVhbnNcbiAqIHRoYXQgb25seSBvbmUgb2YgdGhlIG9wZXJhdGlvbnMgcGFzc2VkIHRvIHNlbGVjdCBjYW4gYmUgY29tcGxldGVkLCBiZWNhdXNlXG4gKiBhZnRlciB0aGUgZmlyc3Qgb25lLCB0aGUgaGFuZGxlciBpcyBubyBsb25nZXIgYWN0aXZlIGFuZCB3aWxsIG5vdCBiZSBhbGxvd2VkXG4gKiB0byBwcm9jZXNzIGEgc2Vjb25kIG9wZXJhdGlvbi5cbiAqXG4gKiBJZiBhIGBzZW5kYCBvciBgcmVjdmAgKG9yIGVxdWl2YWxlbnQgYHNlbGVjdGAgb3BlcmF0aW9uKSBjYW5ub3QgYmVcbiAqIGltbWVkaWF0ZWx5IGNvbXBsZXRlZCBiZWNhdXNlIHRoZXJlIGlzbid0IGEgY29ycmVzcG9uZGluZyBwZW5kaW5nIGByZWN2YCBvclxuICogYHNlbmRgLCB0aGUgaGFuZGxlciBpcyBxdWV1ZWQgdG8gYmUgcnVuIHdoZW4gYSBuZXcgYHJlY3ZgIG9yIGBzZW5kYCBiZWNvbWVzXG4gKiBhdmFpbGFibGUuXG4gKlxuICogQHR5cGVkZWYgSGFuZGxlclxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3AvY2hhbm5lbFxuICogQHByb3BlcnR5IHtib29sZWFufSBhY3RpdmUgV2hldGhlciBvciBub3QgdGhlIG9wZXJhdGlvbiBpcyBzdGlsbCBhY3RpdmUuIEFuXG4gKiAgICAgaW5hY3RpdmUgb3BlcmF0aW9uIGlzIG5vdCBzZXJ2aWNlZCBhbmQgd2lsbCBiZSBjbGVhcmVkIGZyb20gdGhlIHF1ZXVlIG9uXG4gKiAgICAgdGhlIG5leHQgZGlydHkgb3BlcmF0aW9uIHB1cmdlLlxuICogQHByb3BlcnR5IHtmdW5jdGlvbn0gY29tbWl0IE1hcmtzIHRoZSBoYW5kbGVyIGFzIGluYWN0aXZlIChzbyBpdCBkb2Vzbid0IHJ1blxuICogICAgIHR3aWNlKSBhbmQgcmV0dXJucyB0aGUgY2FsbGJhY2sgdG8gYmUgcnVuIHdoZW4gdGhlIG9wZXJhdGlvbiBjb21wbGV0ZXMuXG4gKiBAcHJpdmF0ZVxuICovXG5cbi8qKlxuICogQSBjYWxsYmFjayBmdW5jdGlvbiBydW4gd2hlbiBhIGBzZW5kYCBvciBgcmVjdmAgb3BlcmF0aW9uIGNvbXBsZXRlcy5cbiAqXG4gKiBAY2FsbGJhY2sgSGFuZGxlckNhbGxiYWNrXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcC9jaGFubmVsXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSBwcm92aWRlZCBieSB0aGUgY2hhbm5lbC4gSW4gYSBgcmVjdmAsIHRoaXMgaXMgdGhlXG4gKiAgICAgdmFsdWUgcmVjZWl2ZWQgZnJvbSB0aGUgY2hhbm5lbC4gSW4gYSBgc2VuZGAsIHRoaXMgaXMgYHRydWVgIGZvciBhXG4gKiAgICAgc3VjY2Vzc2Z1bCBzZW5kIGFuZCBgZmFsc2VgIGlmIHRoZSBjaGFubmVsIGlzIGNsb3NlZCBiZWZvcmUgdGhlIHNlbmQgY2FuXG4gKiAgICAgY29tcGxldGUuXG4gKiBAcHJpdmF0ZVxuICovXG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuaW1wb3J0IHsgYm94LCBoYW5kbGVTZW5kLCBoYW5kbGVSZWN2LCBpc0JveCB9IGZyb20gXCIuL2hhbmRsZXJcIjtcblxuLyoqXG4gKiBUaGUgbmFtZSBvZiB0aGUgY2hhbm5lbCByZXR1cm5lZCBmcm9tIGBhd2FpdFxuICoge0BsaW5rIG1vZHVsZTpjc3Auc2VsZWN0fHNlbGVjdH1gIG9yIHNlbnQgdG8gdGhlIGNhbGxiYWNrIGluXG4gKiBge0BsaW5rIG1vZHVsZTpjc3Auc2VsZWN0QXN5bmN8c2VsZWN0QXN5bmN9YCB3aGVuIHRoZSBkZWZhdWx0IGlzIHJldHVybmVkIGFzXG4gKiBpdHMgdmFsdWUuXG4gKlxuICogVGhpcyBvbmx5IGhhcHBlbnMgd2hlbiBhbiBge0BsaW5rIG1vZHVsZTpjc3Auc2VsZWN0fHNlbGVjdH0gL1xuICoge0BsaW5rIG1vZHVsZTpjc3Auc2VsZWN0QXN5bmN8c2VsZWN0QXN5bmN9YCBjYWxsIGlzIHBlcmZvcm1lZCwgYWxsIG9wZXJhdGlvbnNcbiAqIGFyZSBpbml0aWFsbHkgYmxvY2tpbmcsIGFuZCBhIGBkZWZhdWx0YCBvcHRpb24gaXMgc2VudC4gVGhlIGltbWVkaWF0ZVxuICogcmVzcG9uc2UgaW4gdGhhdCBzaXR1YXRpb24gaXMgYHsgdmFsdWU6IG9wdGlvbnMuZGVmYXVsdCwgY2hhbm5lbDogREVGQVVMVCB9YC5cbiAqXG4gKiBAdHlwZSB7U3ltYm9sfVxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqL1xuY29uc3QgREVGQVVMVCA9IFN5bWJvbChcIkRFRkFVTFRcIik7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBoYW5kbGVyIHVzZWQgZm9yIGBzZWxlY3RgIG9wZXJhdGlvbnMuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3AvY2hhbm5lbFxuICogQHBhcmFtIHttb2R1bGU6Y3NwL2NoYW5uZWwuQm94fSBhY3RpdmUgQSBib3hlZCB2YWx1ZSBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlXG4gKiAgICAgaGFuZGxlciBpcyB2YWxpZC4gVGhpcyBpcyBhIGJveGVkIHZhbHVlIGJlY2F1c2UgdGhlIHNlbGVjdC1oYW5kbGluZyBjb2RlXG4gKiAgICAgbmVlZHMgdG8gbWFuaXB1bGF0ZSBpdCBkaXJlY3RseS5cbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC9jaGFubmVsLkhhbmRsZXJDYWxsYmFja30gZm4gVGhlIGNhbGxiYWNrIHRvIGJlIHJ1biB3aGVuXG4gKiAgICAgKGFuZCBpZikgdGhlIG9wZXJhdGlvbiBjb21wbGV0ZXMuXG4gKiBAcmV0dXJuIHttb2R1bGU6Y3NwL2NoYW5uZWwuSGFuZGxlcn0gVGhlIG5ldyBoYW5kbGVyLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gc2VsZWN0SGFuZGxlcihhY3RpdmUsIGZuKSB7XG4gIHJldHVybiBPYmplY3QuY3JlYXRlKG51bGwsIHtcbiAgICBhY3RpdmU6IHtcbiAgICAgIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIGFjdGl2ZS52YWx1ZTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgY29tbWl0OiB7XG4gICAgICB2YWx1ZTogKCkgPT4ge1xuICAgICAgICBhY3RpdmUudmFsdWUgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIGZuO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHJhbmRvbWx5IHNodWZmbGVkIGFycmF5IGNvbnRhaW5pbmcgb25lIG9mIGVhY2ggaW50ZWdlciB2YWx1ZSBmcm9tXG4gKiBgMGAgdG8gYW4gdXBwZXIgbGltaXQuIEl0IGlzIHVzZWQgdG8gcmFuZG9tbHkgc2VsZWN0IGEgY2hhbm5lbCB0byBiZSBhY3RpdmVcbiAqIHdoZW4gbXVsdGlwbGVzIHVuYmxvY2sgaW4gYSBgc2VsZWN0YCBvcGVyYXRpb24uXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3AvY2hhbm5lbFxuICogQHBhcmFtIHtudW1iZXJ9IHVwcGVyIFRoZSB1cHBlciBsaW1pdCBvZiB0aGUgYXJyYXkgdmFsdWVzLCBleGNsdXNpdmUuXG4gKiBAcmV0dXJuIHtudW1iZXJbXX0gQW4gYXJyYXkgb2YgaW50ZWdlcnMgZnJvbSBgMGAgdG8gYHVwcGVyIC0gMWAsIHNodWZmbGVkXG4gKiAgICAgaW50byBhIHJhbmRvbSBvcmRlci5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHJhbmRvbUFycmF5KHVwcGVyKSB7XG4gIGNvbnN0IGFycmF5ID0gW107XG4gIGZvciAobGV0IGsgPSAwOyBrIDwgdXBwZXI7IGsrKykge1xuICAgIGFycmF5LnB1c2goayk7XG4gIH1cbiAgZm9yIChsZXQgaiA9IHVwcGVyIC0gMTsgaiA+IDA7IGotLSkge1xuICAgIGNvbnN0IGkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoaiArIDEpKTtcbiAgICBjb25zdCB0ZW1wID0gYXJyYXlbal07XG4gICAgYXJyYXlbal0gPSBhcnJheVtpXTtcbiAgICBhcnJheVtpXSA9IHRlbXA7XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG4vKipcbiAqIEEgcmVzdWx0IHRoYXQgY29tZXMgZnJvbSBgc2VsZWN0YCBvcGVyYXRpb25zLlxuICpcbiAqIEB0eXBlZGVmIFNlbGVjdFJlc3VsdFxuICogQHByb3BlcnR5IHsqfSB2YWx1ZSBJZiB0aGUgYHNlbGVjdGAgb3BlcmF0aW9uIHJlc3VsdGVkIGluIGEgcmVjZWl2ZSwgdGhpcyBpc1xuICogICAgIHRoZSB2YWx1ZSByZWNlaXZlZCBmcm9tIHRoZSBjaGFubmVsLiBJZiBpdCByZXN1bHRlZCBpbiBhIHNlbmQsIHRoaXMgaXNcbiAqICAgICBgdHJ1ZWAgZm9yIGEgc3VjY2Vzc2Z1bCBzZW5kIGFuZCBgZmFsc2VgIGlmIHRoZSBjaGFubmVsIGNsb3NlZCBmaXJzdC5cbiAqIEBwcm9wZXJ0eSB7bW9kdWxlOmNzcC5DaGFubmVsfSBjaGFubmVsIFRoZSBjaGFubmVsIHVwb24gd2hpY2ggdGhlIHNlbGVjdGVkXG4gKiAgICAgb3BlcmF0aW9uIGhhcHBlbmVkLlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgYSBzZWxlY3QgcmVzdWx0IGZyb20gaXRzIGNvbXBvbmVudCBwcm9wZXJ0aWVzLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwL2NoYW5uZWxcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgSWYgdGhlIGBzZWxlY3RgIG9wZXJhdGlvbiByZXN1bHRlZCBpbiBhIHJlY2VpdmUsIHRoaXMgaXMgdGhlXG4gKiAgICAgdmFsdWUgcmVjZWl2ZWQgZnJvbSB0aGUgY2hhbm5lbC4gSWYgaXQgcmVzdWx0ZWQgaW4gYSBzZW5kLCB0aGlzIGlzIGB0cnVlYFxuICogICAgIGZvciBhIHN1Y2Nlc3NmdWwgc2VuZCBhbmQgYGZhbHNlYCBpZiB0aGUgY2hhbm5lbCBjbG9zZWQgZmlyc3QuXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuQ2hhbm5lbH0gY2hhbm5lbCBUaGUgY2hhbm5lbCB1cG9uIHdoaWNoIHRoZSBzZWxlY3RlZFxuICogICAgIG9wZXJhdGlvbiBoYXBwZW5lZC5cbiAqIEByZXR1cm4ge21vZHVsZTpjc3AuU2VsZWN0UmVzdWx0fSBUaGUgcHJvcGVydGllcyB3cmFwcGVkIGludG8gYW4gb2JqZWN0IGZvclxuICogICAgIG91dHB1dC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHNlbGVjdFJlc3VsdCh2YWx1ZSwgY2hhbm5lbCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuY3JlYXRlKG51bGwpLCB7IHZhbHVlLCBjaGFubmVsIH0pO1xufVxuXG4vKipcbiAqIENvbXBsZXRlcyB0aGUgZmlyc3Qgb3BlcmF0aW9uIGFtb25nIHRoZSBwcm92aWRlZCBvcGVyYXRpb25zIHRoYXQgY29tZXNcbiAqIGF2YWlsYWJsZSwgd2l0aG91dCBibG9ja2luZy5cbiAqXG4gKiBUaGlzIG1lYW5zIHRoYXQgYSBjYWxsIHRvIGBzZWxlY3RBc3luY2AgZG9lcyBub3QgZ28gaW50byBhbiBgYXdhaXRgXG4gKiBleHByZXNzaW9uLCBhbmQgaXQgaXMgbm90IG5lY2Vzc2FyeSB0byB1c2UgaXQgaW5zaWRlIGEgcHJvY2Vzcy4gUmF0aGVyIHRoYW5cbiAqIGJsb2NraW5nIHVudGlsIGFuIG9wZXJhdGlvbiBjb21wbGV0ZXMsIHRoaXMgb25lIHJldHVybnMgaW1tZWRpYXRlbHkgYW5kIHRoZW5cbiAqIGludm9rZXMgdGhlIGNhbGxiYWNrIChpZiBwcm92aWRlZCkgYXMgc29vbiBhcyBvbmUgb2YgdGhlIHN1cHBsaWVkIG9wZXJhdGlvbnNcbiAqIGNvbXBsZXRlcy4gSXQgY2FuIGJlIHJlZ2FyZGVkIGFzIGEgbm9uLWJsb2NraW5nIHZlcnNpb24gb2ZcbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC5zZWxlY3R8c2VsZWN0fWAuXG4gKlxuICogVGhpcyBmdW5jdGlvbiB1c2VzIGFuIG9wZXJhdGlvbnMgbGlzdCB0aGF0J3MgaWRlbnRpY2FsIHRvIHRoZSBvbmUgdXNlZCBieVxuICogYHtAbGluayBtb2R1bGU6Y3NwLnNlbGVjdHxzZWxlY3R9YC4gSXQncyBhbiBhcnJheSBvZiB2YWx1ZXM7IGlmIGEgdmFsdWUgaXMgYVxuICogY2hhbm5lbCwgdGhlbiB0aGF0IG9wZXJhdGlvbiBpcyBhIHRha2Ugb24gdGhhdCBjaGFubmVsLCB3aGlsZSBpZiBpdCdzIGFcbiAqIHR3by1lbGVtZW50IGFycmF5IG9mIGNoYW5uZWwgYW5kIHZhbHVlLCB0aGVuIHRoYXQgb3BlcmF0aW9uIGlzIGEgcHV0IG9mIHRoYXRcbiAqIHZhbHVlIG9udG8gdGhhdCBjaGFubmVsLiBBbGwgb3B0aW9ucyB0aGF0IGFyZSBhdmFpbGFibGUgdG9cbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC5zZWxlY3R8c2VsZWN0fWAgYXJlIGFsc28gYXZhaWxhYmxlIGhlcmUuXG4gKlxuICogVGhlIGNhbGxiYWNrIGlzIGEgZnVuY3Rpb24gb2Ygb25lIHBhcmFtZXRlciwgd2hpY2ggaW4gdGhpcyBjYXNlIGlzIGFuIG9iamVjdFxuICogd2l0aCBgdmFsdWVgIGFuZCBgY2hhbm5lbGAgcHJvcGVydGllcy5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICogQHBhcmFtIHtPYmplY3RbXX0gb3BlcmF0aW9ucyBBIGNvbGxlY3Rpb24gb2YgZWxlbWVudHMgdGhhdCBjb3JyZXNwb25kIHRvIHJlY3ZcbiAqICAgICBhbmQgc2VuZCBvcGVyYXRpb25zLiBBIHJlY3Ygb3BlcmF0aW9uIGlzIHNpZ25pZmllZCBieSBhbiBlbGVtZW50IHRoYXQgaXNcbiAqICAgICBhIGNoYW5uZWwgKHdoaWNoIGlzIHRoZSBjaGFubmVsIHRvIGJlIHJlY2VpdmVkIGZyb20pLiBBIHNlbmQgb3BlcmF0aW9uIGlzXG4gKiAgICAgc3BlY2lmaWVkIGJ5IGFuIGVsZW1lbnQgdGhhdCBpcyBpdHNlbGYgYSB0d28tZWxlbWVudCBhcnJheSwgd2hpY2ggaGFzIGFcbiAqICAgICBjaGFubmVsIGZvbGxvd2VkIGJ5IGEgdmFsdWUgKHdoaWNoIGlzIHRoZSBjaGFubmVsIGFuZCB2YWx1ZSB0byBiZSBzZW50KS5cbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5TZWxlY3RDYWxsYmFja30gY2FsbGJhY2sgQSBmdW5jdGlvbiB0aGF0IGdldHMgaW52b2tlZCB3aGVuXG4gKiAgICAgb25lIG9mIHRoZSBvcGVyYXRpb25zIGNvbXBsZXRlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gQW4gb3B0aW9uYWwgb2JqZWN0IHdoaWNoIGNhbiBjaGFuZ2UgdGhlIGJlaGF2aW9yXG4gKiAgICAgb2YgYHNlbGVjdEFzeW5jYCB0aHJvdWdoIHR3byBwcm9wZXJ0aWVzLlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5wcmlvcml0eT1mYWxzZV0gSWYgYHRydWVgLCB0aGVuIHRoZSBwcmlvcml0eSBvZlxuICogICAgIG9wZXJhdGlvbnMgdG8gY29tcGxldGUgd2hlbiBtb3JlIHRoYW4gb25lIGlzIGltbWVkaWF0ZWx5IGF2YWlsYWJsZSBpcyBhXG4gKiAgICAgcHJpb3JpdHkgYWNjb3JkaW5nIHRvIHBvc2l0aW9uIHdpdGhpbiB0aGUgb3BlcmF0aW9ucyBhcnJheSAoZWFybGllclxuICogICAgIHBvc2l0aW9ucyBoYXZlIHRoZSBoaWdoZXIgcHJpb3JpdHkpLiBJZiBgZmFsc2VgIG9yIG5vdCBwcmVzZW50LCB0aGVcbiAqICAgICBwcmlvcnR5IG9mIG9wZXJhdGlvbiBjb21wbGV0aW9uIGlzIHJhbmRvbS5cbiAqIEBwYXJhbSB7Kn0gW29wdGlvbnMuZGVmYXVsdF0gSWYgc2V0IGFuZCBhbGwgb2YgdGhlIG9wZXJhdGlvbnMgaW5pdGlhbGx5XG4gKiAgICAgYmxvY2ssIHRoZSBgc2VsZWN0QXN5bmNgIGNhbGxzIGl0cyBjYWxsYmFjayBpbW1lZGlhdGVseSB3aXRoIHRoZSB2YWx1ZSBvZlxuICogICAgIHRoaXMgb3B0aW9uICh0aGUgY2hhbm5lbCB3aWxsIGJlIGB7QGxpbmsgbW9kdWxlOmNzcC5ERUZBVUxUfERFRkFVTFR9KWAuXG4gKiAgICAgSWYgbm90IHNldCwgdGhlIGBzZWxlY3RBc3luY2AgY2FsbCB3aWxsIG5vdCBjYWxsIGl0cyBjYWxsYmFjayB1bnRpbCBvbmVcbiAqICAgICBvZiB0aGUgb3BlcmF0aW9ucyBjb21wbGV0ZXMgYW5kIHRoYXQgdmFsdWUgYW5kIGNoYW5uZWwgd2lsbCBiZSB0aGUgb25lc1xuICogICAgIHJldHVybmVkLlxuICovXG5mdW5jdGlvbiBzZWxlY3RBc3luYyhvcHMsIGNhbGxiYWNrID0gKCkgPT4ge30sIG9wdGlvbnMgPSB7fSkge1xuICBjb25zdCBjb3VudCA9IG9wcy5sZW5ndGg7XG4gIGlmIChjb3VudCA9PT0gMCkge1xuICAgIHRocm93IEVycm9yKFwic2VsZWN0IGNhbGxlZCB3aXRoIG5vIG9wZXJhdGlvbnNcIik7XG4gIH1cblxuICBjb25zdCBwcmlvcml0eSA9ICEhb3B0aW9ucy5wcmlvcml0eTtcbiAgY29uc3QgaW5kaWNlcyA9IHByaW9yaXR5ID8gW10gOiByYW5kb21BcnJheShjb3VudCk7XG5cbiAgY29uc3QgYWN0aXZlID0gYm94KHRydWUpO1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZVNlbGVjdEhhbmRsZXIoY2hhbm5lbCkge1xuICAgIHJldHVybiBzZWxlY3RIYW5kbGVyKGFjdGl2ZSwgdmFsdWUgPT4ge1xuICAgICAgY2FsbGJhY2soc2VsZWN0UmVzdWx0KHZhbHVlLCBjaGFubmVsKSk7XG4gICAgfSk7XG4gIH1cblxuICBsZXQgcmVzdWx0O1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgIC8vIENob29zZSBhbiBvcGVyYXRpb24uIElmIGBwcmlvcml0eWAgaXMgdHJ1ZSB0aGVuIGl0J3MgdGhlIG5leHQgaW5kZXgsXG4gICAgLy8gb3RoZXJ3aXNlIGl0J3MgcmFuZG9tXG4gICAgY29uc3Qgb3AgPSBvcHNbcHJpb3JpdHkgPyBpIDogaW5kaWNlc1tpXV07XG4gICAgbGV0IGNoYW5uZWwsIHZhbHVlO1xuXG4gICAgLy8gQXBwbHkgZXZlcnkgb3BlcmF0aW9uIHRvIGl0cyBjaGFubmVsLCBvbmUgYXQgYSB0aW1lXG4gICAgaWYgKEFycmF5LmlzQXJyYXkob3ApKSB7XG4gICAgICBbY2hhbm5lbCwgdmFsdWVdID0gb3A7XG4gICAgICByZXN1bHQgPSBoYW5kbGVTZW5kKGNoYW5uZWwsIHZhbHVlLCBjcmVhdGVTZWxlY3RIYW5kbGVyKGNoYW5uZWwpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2hhbm5lbCA9IG9wO1xuICAgICAgcmVzdWx0ID0gaGFuZGxlUmVjdihjaGFubmVsLCBjcmVhdGVTZWxlY3RIYW5kbGVyKGNoYW5uZWwpKTtcbiAgICB9XG5cbiAgICAvLyBXZSBjaGVjayBmb3IgYm94IGhlcmUgYmVjYXVzZSBhIGJveCBmcm9tIGEgY2hhbm5lbCBpbmRpY2F0ZXMgdGhhdCB0aGVcbiAgICAvLyB2YWx1ZSBpcyBpbW1lZGlhdGVseSBhdmFpbGFibGUgKHRoYXQgdGhlcmUgaXMgbm8gbmVlZCB0byBibG9jayB0byBnZXQgdGhlXG4gICAgLy8gdmFsdWUpLiBJZiB0aGlzIGhhcHBlbnMsIHdlIGV4ZWN1dGUgdGhlIGNhbGxiYWNrIGltbWVkaWF0ZWx5IHdpdGggdGhhdFxuICAgIC8vIHZhbHVlIGFuZCBjaGFubmVsIGFuZCBzdG9wIHF1ZXVlaW5nIG90aGVyIG9wZXJhdGlvbnMuXG4gICAgaWYgKGlzQm94KHJlc3VsdCkpIHtcbiAgICAgIGNhbGxiYWNrKHNlbGVjdFJlc3VsdChyZXN1bHQudmFsdWUsIGNoYW5uZWwpKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIC8vIElmIG5vbmUgb2YgdGhlIG9wZXJhZXRpb25zIGltbWVkaWF0ZWx5IHJldHVybmVkIHZhbHVlcyAodGhleSBhcmUgYWxsXG4gIC8vIGJsb2NrZWQpLCBhbmQgd2UgaGF2ZSBzZXQgYSBkZWZhdWx0IGNoYW5uZWwgb3B0aW9uLCB0aGVuIHJldHVybiB0aGUgdmFsdWVcbiAgLy8gaWYgdGhlIGRlZmF1bHQgY2hhbm5lbCByYXRoZXIgdGhhbiB3YWl0aW5nIGZvciB0aGUgcXVldWVkIG9wZXJhdGlvbnMgdG9cbiAgLy8gY29tcGxldGUuXG4gIGlmIChcbiAgICAhaXNCb3gocmVzdWx0KSAmJlxuICAgIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvcHRpb25zLCBcImRlZmF1bHRcIilcbiAgKSB7XG4gICAgaWYgKGFjdGl2ZS52YWx1ZSkge1xuICAgICAgYWN0aXZlLnZhbHVlID0gZmFsc2U7XG4gICAgICBjYWxsYmFjayhzZWxlY3RSZXN1bHQob3B0aW9ucy5kZWZhdWx0LCBERUZBVUxUKSk7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQ29tcGxldGVzIHRoZSBmaXJzdCBvcGVyYXRpb24gYW1vbmcgdGhlIHByb3ZpZGVkIG9wZXJhdGlvbnMgdGhhdCBjb21lc1xuICogYXZhaWxhYmxlLCBibG9ja2luZyB0aGUgcHJvY2VzcyB1bnRpbCB0aGVuLlxuICpcbiAqIGBvcGVyYXRpb25zYCBpcyBhbiBhcnJheSB3aG9zZSBlbGVtZW50cyBtdXN0IGJlIGNoYW5uZWxzIG9yIHR3by1lbGVtZW50XG4gKiBzdWItYXJyYXlzIG9mIGNoYW5uZWxzIGFuZCB2YWx1ZXMsIGluIGFueSBjb21iaW5hdGlvbi4gQW4gb3BlcmF0aW9uIHRoYXQgaXMgYVxuICogY2hhbm5lbCBpcyBhIHRha2Ugb3BlcmF0aW9uIG9uIHRoYXQgY2hhbm5lbC4gQW4gb3BlcmF0aW9uIHRoYXQgaXMgYVxuICogdHdvLWVsZW1lbnQgYXJyYXkgaXMgYSBwdXQgb3BlcmF0aW9uIG9uIHRoYXQgY2hhbm5lbCB1c2luZyB0aGF0IHZhbHVlLlxuICogRXhhY3RseSBvbmUgb2YgdGhlc2Ugb3BlcmF0aW9ucyB3aWxsIGNvbXBsZXRlLCBhbmQgaXQgd2lsbCBiZSB0aGUgZmlyc3RcbiAqIG9wZXJhdGlvbiB0aGF0IHVuYmxvY2tzLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gKm11c3QqIGJlIGNhbGxlZCBmcm9tIHdpdGhpbiBhbiBgYXN5bmNgIGZ1bmN0aW9uIGFuZCBhcyBwYXJ0IG9mXG4gKiBhbiBgYXdhaXRgIGV4cHJlc3Npb24gaWYgdGhlIHJldHVybiB2YWx1ZSBpcyBuZWVkZWQuXG4gKlxuICogV2hlbiBgc2VsZWN0YCBpcyBjb21wbGV0ZWQgYW5kIGl0cyBwcm9jZXNzIHVuYmxvY2tzLCBpdHMgYGF3YWl0YCBleHByZXNzaW9uXG4gKiBldmFsdWF0ZXMgdG8gYW4gb2JqZWN0IG9mIHR3byBwcm9wZXJ0aWVzLiBUaGUgYHZhbHVlYCBwcm9wZXJ0eSBiZWNvbWVzXG4gKiBleGFjdGx5IHdoYXQgd291bGQgaGF2ZSBiZWVuIHJldHVybmVkIGJ5IHRoZSBlcXVpdmFsZW50IGBhd2FpdCBwdXRgIG9yIGBhd2FpdFxuICogdGFrZWAgb3BlcmF0aW9uOiBhIGJvb2xlYW4gaW4gdGhlIGNhc2Ugb2YgYSBwdXQsIG9yIHRoZSB0YWtlbiB2YWx1ZSBpbiB0aGVcbiAqIGNhc2Ugb2YgYSB0YWtlLiBUaGUgYGNoYW5uZWxgIHByb3BlcnR5IGlzIHNldCB0byB0aGUgY2hhbm5lbCB3aGVyZSB0aGVcbiAqIG9wZXJhdGlvbiBhY3R1YWxseSB0b29rIHBsYWNlLiBUaGlzIHdpbGwgYmUgZXF1aXZhbGVudCB0byB0aGUgY2hhbm5lbCBpbiB0aGVcbiAqIGBvcGVyYXRpb25zYCBhcnJheSB3aGljaCBjb21wbGV0ZWQgZmlyc3QsIGFsbG93aW5nIHRoZSBwcm9jZXNzIHRvIHVuYmxvY2suXG4gKlxuICogSWYgdGhlcmUgaXMgbW9yZSB0aGFuIG9uZSBvcGVyYXRpb24gYWxyZWFkeSBhdmFpbGFibGUgdG8gY29tcGxldGUgd2hlbiB0aGVcbiAqIGNhbGwgdG8gYHNlbGVjdGAgaXMgbWFkZSwgdGhlIG9wZXJhdGlvbiB3aXRoIHRoZSBoaWdoZXN0IHByaW9yaXR5IHdpbGwgYmUgdGhlXG4gKiBvbmUgdG8gY29tcGxldGUuIFJlZ3VsYXJseSwgcHJpb3JpdHkgaXMgbm9uLWRldGVybWluaXN0aWMgKGkuZS4sIGl0J3Mgc2V0XG4gKiByYW5kb21seSkuIEhvd2V2ZXIsIGlmIHRoZSBvcHRpb25zIG9iamVjdCBoYXMgYSBgcHJpb3JpdHlgIHZhbHVlIHNldCB0b1xuICogYHRydWVgLCBwcmlvcml0eSB3aWxsIGJlIGFzc2lnbmVkIGluIHRoZSBvcmRlciBvZiB0aGUgb3BlcmF0aW9ucyBpbiB0aGVcbiAqIHN1cHBsaWVkIGFycmF5LlxuICpcbiAqIElmIGFsbCBvZiB0aGUgb3BlcmF0aW9ucyBtdXN0IGJsb2NrIChpLmUuLCB0aGVyZSBhcmUgbm8gcGVuZGluZyBwdXRzIGZvciB0YWtlXG4gKiBvcGVyYXRpb25zLCBvciB0YWtlcyBmb3IgcHV0IG9wZXJhdGlvbnMpLCBhIGRlZmF1bHQgdmFsdWUgbWF5IGJlIHJldHVybmVkLlxuICogVGhpcyBpcyBvbmx5IGRvbmUgaWYgdGhlcmUgaXMgYSBgZGVmYXVsdGAgcHJvcGVydHkgaW4gdGhlIG9wdGlvbnMgb2JqZWN0LCBhbmRcbiAqIHRoZSB2YWx1ZSBvZiB0aGF0IHByb3BlcnR5IGJlY29tZXMgdGhlIHZhbHVlIHJldHVybmVkIGJ5IGBhd2FpdCBzZWxlY3RgLiBUaGVcbiAqIGNoYW5uZWwgaXMgc2V0IHRvIHRoZSBzcGVjaWFsIHZhbHVlIGB7QGxpbmsgbW9kdWxlOmNzcC5ERUZBVUxUfERFRkFVTFR9YC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICogQHBhcmFtIHtvYmplY3RbXX0gb3BlcmF0aW9ucyBBIGNvbGxlY3Rpb24gb2YgZWxlbWVudHMgdGhhdCBjb3JyZXNwb25kIHRvIHJlY3ZcbiAqICAgICBhbmQgc2VuZCBvcGVyYXRpb25zLiBBIHJlY3Ygb3BlcmF0aW9uIGlzIHNpZ25pZmllZCBieSBhbiBlbGVtZW50IHRoYXQgaXNcbiAqICAgICBhIGNoYW5uZWwgKHdoaWNoIGlzIHRoZSBjaGFubmVsIHRvIGJlIHRha2VuIGZyb20pLiBBIHNlbmQgb3BlcmF0aW9uIGlzXG4gKiAgICAgc3BlY2lmaWVkIGJ5IGFuIGVsZW1lbnQgdGhhdCBpcyBpdHNlbGYgYSB0d28tZWxlbWVudCBhcnJheSwgd2hpY2ggaGFzIGFcbiAqICAgICBjaGFubmVsIGZvbGxvd2VkIGJ5IGEgdmFsdWUgKHdoaWNoIGlzIHRoZSBjaGFubmVsIGFuZCB2YWx1ZSB0byBiZSBzZW50KS5cbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9ucz17fV0gQW4gb3B0aW9uYWwgb2JqZWN0IHdoaWNoIGNhbiBjaGFuZ2UgdGhlIGJlaGF2aW9yXG4gKiAgICAgb2YgYHNlbGVjdGAgdGhyb3VnaCB0d28gcHJvcGVydGllcy5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMucHJpb3JpdHk9ZmFsc2VdIElmIGB0cnVlYCwgdGhlbiB0aGUgcHJpb3JpdHkgb2ZcbiAqICAgICBvcGVyYXRpb25zIHRvIGNvbXBsZXRlIHdoZW4gbW9yZSB0aGFuIG9uZSBpcyBpbW1lZGlhdGVseSBhdmFpbGFibGUgaXMgYVxuICogICAgIHByaW9yaXR5IGFjY29yZGluZyB0byBwb3NpdGlvbiB3aXRoaW4gdGhlIG9wZXJhdGlvbnMgYXJyYXkgKGVhcmxpZXJcbiAqICAgICBwb3NpdGlvbnMgaGF2ZSB0aGUgaGlnaGVyIHByaW9yaXR5KS4gSWYgYGZhbHNlYCBvciBub3QgcHJlc2VudCwgdGhlXG4gKiAgICAgcHJpb3J0eSBvZiBvcGVyYXRpb24gY29tcGxldGlvbiBpcyByYW5kb20uXG4gKiBAcGFyYW0geyp9IFtvcHRpb25zLmRlZmF1bHRdIElmIHNldCBhbmQgYWxsIG9mIHRoZSBvcGVyYXRpb25zIGluaXRpYWxseVxuICogICAgIGJsb2NrLCB0aGUgYHNlbGVjdGAgY2FsbCBjb21wbGV0ZXMgaW1tZWRpYXRlbHkgd2l0aCB0aGUgdmFsdWUgb2YgdGhpc1xuICogICAgIG9wdGlvbiAodGhlIGNoYW5uZWwgd2lsbCBiZSBge0BsaW5rIG1vZHVsZTpjc3AuREVGQVVMVHxERUZBVUxUfSlgLiBJZiBub3RcbiAqICAgICBzZXQsIHRoZSBgc2VsZWN0YCBjYWxsIHdpbGwgYmxvY2sgdW50aWwgb25lIG9mIHRoZSBvcGVyYXRpb25zIGNvbXBsZXRlc1xuICogICAgIGFuZCB0aGF0IHZhbHVlIGFuZCBjaGFubmVsIHdpbGwgYmUgdGhlIG9uZXMgcmV0dXJuZWQuXG4gKiBAcmV0dXJuIHtQcm9taXNlPG1vZHVsZTpjc3AuU2VsZWN0UmVzdWx0Pn0gQSBwcm9taXNlIHRoYXQgd2lsbCByZXNvbHZlIHRvIGFuXG4gKiAgICAgb2JqZWN0IG9mIHR3byBwcm9wZXJ0aWVzOiBgdmFsdWVgIHdpbGwgY29udGFpbiB0aGUgdmFsdWUgdGhhdCB3b3VsZCBoYXZlXG4gKiAgICAgYmVlbiByZXR1cm5lZCBieSB0aGUgY29ycmVzcG9uZGluZyBge0BsaW5rIG1vZHVsZTpjc3Auc2VuZHxzZW5kfWAgb3JcbiAqICAgICBge0BsaW5rIG1vZHVsZTpjc3AucmVjdnxyZWN2fWAgb3BlcmF0aW9uOyBhbmQgYGNoYW5uZWxgIHdpbGwgYmUgYVxuICogICAgIHJlZmVyZW5jZSB0byB0aGUgY2hhbm5lbCB0aGF0IGNvbXBsZXRlZCB0aGUgb3BlcmF0aW9uIHRvIGFsbG93IGBzZWxlY3RgXG4gKiAgICAgdG8gdW5ibG9jay5cbiAqL1xuZnVuY3Rpb24gc2VsZWN0KG9wcywgb3B0aW9ucyA9IHt9KSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICBzZWxlY3RBc3luYyhvcHMsIHJlc29sdmUsIG9wdGlvbnMpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBBIGNvbnZlbmllbmNlIGZ1bmN0aW9uIHRvIHJlYWQgdGhlIHZhbHVlIG91dCBvZiBhIHNlbGVjdCByZXN1bHQuIFRoaXNcbiAqIGZ1bmN0aW9uIGlzIG5vdCBuZWNlc3NhcnkgLSBhZnRlciBhbGwsIGl0J3MgYWJzb2x1dGVseSBhcyBjb3JyZWN0IHRvIHNpbXBseVxuICogdXNlIGByZXN1bHQudmFsdWVgIGluc3RlYWQgb2YgYHZhbHVlKHJlc3VsdClgLCBidXQgaXQncyBwcm92aWRlZCBmb3JcbiAqIGNvbnNpc3RlbmN5IHdpdGggdGhlIHJlc3Qgb2YgdGhlIGZ1bmN0aW9uLWNlbnRyaWMgQVBJLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuU2VsZWN0UmVzdWx0fSByZXN1bHQgVGhlIHJlc3VsdCBjb21pbmcgZnJvbSBhIHNlbGVjdFxuICogICAgIG9wZXJhdGlvbi5cbiAqIEByZXR1cm4geyp9IFRoZSB2YWx1ZSBwcm92aWRlZCBieSB0aGUgc2VsZWN0IG9wZXJhdGlvbi5cbiAqL1xuZnVuY3Rpb24gdmFsdWUocmVzdWx0KSB7XG4gIHJldHVybiByZXN1bHQudmFsdWU7XG59XG5cbi8qKlxuICogQSBjb252ZW5pZW5jZSBmdW5jdGlvbiB0byByZWFkIHRoZSBjaGFubmVsIG91dCBvZiBhIHNlbGVjdCByZXN1bHQuIFRoaXNcbiAqIGZ1bmN0aW9uIGlzIG5vdCBuZWNlc3NhcnkgLSBhZnRlciBhbGwsIGl0J3MgYWJzb2x1dGVseSBhcyBjb3JyZWN0IHRvIHNpbXBseVxuICogdXNlIGByZXN1bHQuY2hhbm5lbGAgaW5zdGVhZCBvZiBgY2hhbm5lbChyZXN1bHQpYCwgYnV0IGl0J3MgcHJvdmlkZWQgZm9yXG4gKiBjb25zaXN0ZW5jeSB3aXRoIHRoZSByZXN0IG9mIHRoZSBmdW5jdGlvbi1jZW50cmljIEFQSS5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICogQHBhcmFtIHttb2R1bGU6Y3NwLlNlbGVjdFJlc3VsdH0gcmVzdWx0IFRoZSByZXN1bHQgY29taW5nIGZyb20gYSBzZWxlY3RcbiAqICAgICBvcGVyYXRpb24uXG4gKiBAcmV0dXJuIHttb2R1bGU6Y3NwLkNoYW5uZWx9IFRoZSBjaGFubmVsIHVwb24gd2hpY2ggdGhlIHNlbGVjdCBvcGVyYXRpb25cbiAqICAgICBjb21wbGV0ZWQuXG4gKi9cbmZ1bmN0aW9uIGNoYW5uZWwocmVzdWx0KSB7XG4gIHJldHVybiByZXN1bHQuY2hhbm5lbDtcbn1cblxuZXhwb3J0IHsgREVGQVVMVCwgc2VsZWN0LCBzZWxlY3RBc3luYywgdmFsdWUsIGNoYW5uZWwgfTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG4vKipcbiAqIFRoaXMgaXMgdGhlIHBsYWNlIHdoZXJlIHRoZSBuZXcgSlMgdGFza3MgYXJlIGFjdHVhbGx5IGNyZWF0ZWQuIEEgcXVldWUgaXNcbiAqIG1haW50YWluZWQgZm9yIHRoZW0sIGFuZCBhcyBlYWNoIGJhdGNoIG9mIHRhc2tzIGFyZSBjb21wbGV0ZWQsIHRoZSBuZXh0IG9uZXNcbiAqIHJ1bi4gQXMgZWFjaCBwcm9jZXNzIHJ1bnMsIGl0IGFkZHMgdGFza3MgdG8gYmUgcnVuIHRvIHRoZSBxdWV1ZSwgd2hpY2ggYXJlXG4gKiBlYWNoIHJ1biBpbiB0aGVpciBvd24gSlMgdGFzay5cbiAqXG4gKiBUaGUgZnVuY3Rpb24gdGhhdCBzcGF3bnMgdGhlIG5ldyBKUyB0YXNrIGRlcGVuZHMgb24gZW52aXJvbm1lbnQuIFRoZVxuICogYHNldEltbWVkaWF0ZWAgZnVuY3Rpb24gaXMgcHJlZmVycmVkIGFzIGl0J3MgdGhlIGZhc3Rlc3QsIG5vdCB3YWl0aW5nIGZvclxuICogZXZlbnQgcXVldWVzIHRvIGVtcHR5IGJlZm9yZSBzcGF3bmluZyB0aGUgbmV3IHByb2Nlc3MuIEhvd2V2ZXIsIGl0IGlzIG5vdCBKU1xuICogc3RhbmRhcmQgYW5kIGN1cnJlbnRseSBvbmx5IHdvcmtzIGluIElFIGFuZCBOb2RlLiBJZiBgc2V0SW1tZWRpYXRlYCBpc24ndFxuICogYXZhaWxhYmxlLCBhbiBhdHRlbXB0IGlzIG1hZGUgdG8gdXNlIGBNZXNzYWdlQ2hhbm5lbGAncyBgb25NZXNzYWdlYCBpcyB0cmllZFxuICogbmV4dC4gSWYgdGhhdCBpcyBhbHNvIG5vdCBhdmFpbGFibGUsIHRoZW4gYHNldFRpbWVvdXRgIHdpdGggYDBgIGRlbGF5IGlzXG4gKiB1c2VkLCB3aGljaCBpcyBhdmFpbGFibGUgZXZlcnl3aGVyZSBidXQgd2hpY2ggaXMgdGhlIGxlYXN0IHBlcmZvcm1hbnQgb2YgYWxsXG4gKiBvZiB0aGUgc29sdXRpb25zLlxuICpcbiAqIFRoZXJlIGFyZSBvdGhlciBwb3NzaWJpbGl0aWVzIGZvciBjcmVhdGluZyBwcm9jZXNzZXMsIGJ1dCB0aGV5IHdlcmUgcmVqZWN0ZWRcbiAqIGFzIG9ic29sZXRlIChgcHJvY2Vzcy5uZXh0VGlja2AgYW5kIGBvbnJlYWR5c3RhdGVjaGFuZ2VgKSBvciB1bm5lY2Vzc2FyeVxuICogKGB3aW5kb3cucG9zdE1lc3NhZ2VgLCB3aGljaCB3b3JrcyBsaWtlIGBNZXNzYWdlQ2hhbm5lbGAgYnV0IGRvZXNuJ3Qgd29yayBpblxuICogV2ViIFdvcmtlcnMpLlxuICpcbiAqIEl0IGlzIG5vdGFibGUgYW5kIGltcG9ydGFudCB0aGF0IHdlIGFjdCBhcyBnb29kIGNpdGl6ZW5zIGhlcmUuIFRoaXNcbiAqIGRpc3BhdGNoZXIgaXMgY2FwYWJsZSBvZiB0YWtpbmcgY29udHJvbCBvZiB0aGUgSmF2YVNjcmlwdCBlbmdpbmUgdW50aWxcbiAqIHRob3VzYW5kcywgbWlsbGlvbnMsIG9yIG1vcmUgdGFza3MgYXJlIGhhbmRsZWQuIEJ1dCB0aGF0IGNvdWxkIGNhdXNlIHRoZVxuICogc3lzdGVtIGV2ZW50IGxvb3AgdG8gaGF2ZSB0byB3YWl0IGFuIHVuYWNjZXB0YWJsZSBhbW91bnQgb2YgdGltZS4gU28gd2UgbGltaXRcbiAqIG91cnNlbHZlcyB0byBhIGJhdGNoIG9mIHRhc2tzIGF0IGEgdGltZSwgYW5kIGlmIHRoZXJlIGFyZSBzdGlsbCBtb3JlIHRvIGJlXG4gKiBydW4sIHdlIGxldCB0aGUgZXZlbnQgbG9vcCBydW4gYmVmb3JlIHRoYXQgbmV4dCBiYXRjaCBpcyBwcm9jZXNzZWQuXG4gKlxuICogVGhlIGRpc3BhdGNoZXIgaXMgKipnbG9iYWwqKi4gVGhlcmUgaXMgYSBzaW5nbGUgaW5zdGFuY2UgdGhhdCBydW5zIGZvciBhbGxcbiAqIGNoYW5uZWxzIGFuZCBwcm9jZXNzZXMuIFRoaXMgaXMgdGhlIG9ubHkgZWxlbWVudCBvZiB0aGUgc3lzdGVtIHRoYXQgd29ya3NcbiAqIGxpa2UgdGhpcy5cbiAqXG4gKiBAbW9kdWxlIGNzcC9kaXNwYXRjaGVyXG4gKiBAc2VlIG1vZHVsZTpjc3AuY29uZmlnXG4gKiBAcHJpdmF0ZVxuICovXG5cbmltcG9ydCB7XG4gIHF1ZXVlIGFzIHEsXG4gIEVNUFRZLFxuICBjb3VudCBhcyBxQ291bnQsXG4gIGRlcXVldWUsXG4gIGVucXVldWVcbn0gZnJvbSBcIm1vZHVsZXMvcXVldWVcIjtcbmNvbnN0IHF1ZXVlID0gcSgpO1xuXG4vKipcbiAqIFRoZSBkaXNwYXRjaCBtZXRob2Qgb3B0aW9uIGluZGljYXRpbmcgdGhhdCBgc2V0SW1tZWRpYXRlYCBzaG91bGQgYmUgdXNlZCB0b1xuICogZGlzcGF0Y2ggdGFza3MuXG4gKlxuICogVGhpcyBpcyB0aGUgZGVmYXVsdCBvcHRpb24uIEZvciBlbnZpcm9ubWVudHMgdGhhdCBkb24ndCBzdXBwb3J0XG4gKiBgc2V0SW1tZWRpYXRlYCwgdGhpcyBmYWxscyBiYWNrIHRvXG4gKiBge0BsaW5rIG1vZHVsZTpjc3AuTUVTU0FHRV9DSEFOTkVMfE1FU1NBR0VfQ0hBTk5FTH1gLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAdHlwZSB7U3ltYm9sfVxuICogQHNlZSB7QGxpbmsgbW9kdWxlOmNzcC5jb25maWd8Y29uZmlnfVxuICovXG5jb25zdCBTRVRfSU1NRURJQVRFID0gU3ltYm9sKFwiU0VUX0lNTUVESUFURVwiKTtcblxuLyoqXG4gKiBUaGUgZGlzcGF0Y2ggbWV0aG9kIG9wdGlvbiBpbmRpY2F0aW5nIHRoYXQgYSBgTWVzc2FnZUNoYW5uZWxgIHNob3VsZCBiZSB1c2VkXG4gKiB0byBkaXNwYXRjaCB0YXNrcy5cbiAqXG4gKiBGb3IgZW52aXJvbm1lbnRzIHRoYXQgZG9uJ3Qgc3VwcG9ydCBgTWVzc2FnZUNoYW5uZWxgLCB0aGlzIGZhbGxzIGJhY2sgdG9cbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC5TRVRfVElNRU9VVHxTRVRfVElNRU9VVH1gLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAdHlwZSB7U3ltYm9sfVxuICogQHNlZSB7QGxpbmsgbW9kdWxlOmNzcC5jb25maWd8Y29uZmlnfVxuICovXG5jb25zdCBNRVNTQUdFX0NIQU5ORUwgPSBTeW1ib2woXCJNRVNTQUdFX0NIQU5ORUxcIik7XG5cbi8qKlxuICogVGhlIGRpc3BhdGNoIG1ldGhvZCBvcHRpb24gaW5kaWNhdGluZyB0aGF0IGBzZXRUaW1lb3V0YCBzaG91bGQgYmUgdXNlZCB0b1xuICogZGlzcGF0Y2ggdGFza3MuXG4gKlxuICogVGhpcyBtZXRob2QgaXMgYWx3YXlzIGF2YWlsYWJsZSwgYnV0IGl0J3MgYWxzbyBhbHdheXMgbGVzcyBlZmZpY2llbnQgdGhhbiBhbnlcbiAqIG90aGVyIG1ldGhvZCwgc28gaXQgc2hvdWxkIGJlIHVzZWQgYXMgYSBsYXN0IHJlc29ydC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICogQHR5cGUge1N5bWJvbH1cbiAqIEBzZWUgIHtAbGluayBtb2R1bGU6Y3NwLmNvbmZpZ3xjb25maWd9XG4gKi9cbmNvbnN0IFNFVF9USU1FT1VUID0gU3ltYm9sKFwiU0VUX1RJTUVPVVRcIik7XG5cbmNvbnN0IG9wdGlvbnMgPSB7XG4gIGJhdGNoU2l6ZTogMTAyNCxcbiAgZGlzcGF0Y2hNZXRob2Q6IFNFVF9JTU1FRElBVEVcbn07XG5cbmxldCBkaXNwYXRjaGVyID0gY3JlYXRlRGlzcGF0Y2hlcigpO1xubGV0IHJ1bm5pbmcgPSBmYWxzZTtcbmxldCBxdWV1ZWQgPSB0cnVlO1xuXG4vKipcbiAqIENyZWF0ZXMgYW5kIHJldHVybnMgYSBmdW5jdGlvbiB0aGF0IGNhbiBiZSB1c2VkIHRvIGRpc3BhdGNoIHRhc2tzLiBUaGVcbiAqIGZ1bmN0aW9uIHRoYXQgaXMgY3JlYXRlZCBkZXBlbmRzIG9uIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgYGRpc3BhdGNoTWV0aG9kYFxuICogdGhhdCBjYW4gYmUgc2V0IHdpdGggYHtAbGluayBtb2R1bGU6Y3NwLmNvbmZpZ3xjb25maWd9YC5cbiAqXG4gKiBAcmV0dXJuIEEgZGlzcGF0Y2hlciBmdW5jdGlvbiB1c2luZyB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGRpc3BhdGNoIG1ldGhvZC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZURpc3BhdGNoZXIoKSB7XG4gIHN3aXRjaCAoY2FsY0Rpc3BhdGNoTWV0aG9kKCkpIHtcbiAgICAvLyBXZSBwcmVmZXIgYHNldEltbWVkaWF0ZWAgaWYgaXQncyBhdmFpbGFibGUsIGJ1dCBpdCdzIG9ubHkgYXZhaWxhYmxlIGluXG4gICAgLy8gTm9kZSBhbmQgc29tZSBvbGQgYnJvd3NlcnMuXG4gICAgY2FzZSBTRVRfSU1NRURJQVRFOlxuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgaWYgKCEocXVldWVkICYmIHJ1bm5pbmcpKSB7XG4gICAgICAgICAgcXVldWVkID0gdHJ1ZTtcbiAgICAgICAgICBzZXRJbW1lZGlhdGUocHJvY2Vzc1Rhc2tzKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgIC8vIE1vc3QgbW9kZXJuIGJyb3dzZXJzIGltcGxlbWVudCBgTWVzc2FnZUNoYW5uZWxgLiBUaGlzIGlzIHRoZSBwcmVmZXJyZWRcbiAgICAvLyBtZXRob2QgaW4gYnJvd3NlciBlbnZpcm9ubWVudHMgd2hlcmUgYHNldEltbWVkaWF0ZWAgaXNuJ3QgYXZhaWxhYmxlLlxuICAgIGNhc2UgTUVTU0FHRV9DSEFOTkVMOiB7XG4gICAgICBjb25zdCBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9ICgpID0+IHByb2Nlc3NUYXNrcygpO1xuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgaWYgKCEocXVldWVkICYmIHJ1bm5pbmcpKSB7XG4gICAgICAgICAgcXVldWVkID0gdHJ1ZTtcbiAgICAgICAgICBjaGFubmVsLnBvcnQyLnBvc3RNZXNzYWdlKDApO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIElmIGFsbCBlbHNlIGZhaWxzLCBqdXN0IHVzZSBgc2V0VGltZW91dGAuIEl0J3MgYSBsaXR0bGUgc2xvd2VyIHRoYW4gdGhlXG4gICAgLy8gb3RoZXIgbWV0aG9kcywgYnV0IGl0J3MgYXZhaWxhYmxlIGV2ZXJ5d2hlcmUuXG4gICAgY2FzZSBTRVRfVElNRU9VVDpcbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGlmICghKHF1ZXVlZCAmJiBydW5uaW5nKSkge1xuICAgICAgICAgIHF1ZXVlZCA9IHRydWU7XG4gICAgICAgICAgc2V0VGltZW91dChwcm9jZXNzVGFza3MsIDApO1xuICAgICAgICB9XG4gICAgICB9O1xuICB9XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgYWN0dWFsIGRpc3BhdGNoIG1ldGhvZCBiYXNlZCBvbiB0aGUgY3VycmVudCBkaXNwYXRjaCBtZXRob2RcbiAqIHNldHRpbmcgYW5kIGVudmlyb25tZW50YWwgYXZhaWxhYmlsaXR5LlxuICpcbiAqIFRoZSBkaXNwYXRjaCBtZXRob2QgaXMgc3RvcmVkIHJhdywgc28gdGhpcyBmdW5jdGlvbiBpcyBuZWNlc3NhcnkgdG8gdGFrZVxuICogZW52aXJvbm1lbnQgaW50byBhY2NvdW50LiBGb3IgZXhhbXBsZSwgaWYgd2UncmUgcnVubmluZyBpbiBhIG1vZGVybiBicm93c2VyXG4gKiAod2hpY2ggZG9lcyBub3QgaGF2ZSBgc2V0SW1tZWRpYXRlYCksXG4gKiBge0BsaW5rIG1vZHVsZTpjc3AuU0VUX0lNTUVESUFURXxTRVRfSU1NRURJQVRFfWAgY2FuIHN0aWxsIGJlIHJlY29yZGVkIGFzIHRoZVxuICogZGlzcGF0Y2ggbWV0aG9kLCBidXQgdGhpcyBmdW5jdGlvbiB3aWxsIHJldHVyblxuICogYHtAbGluayBtb2R1bGU6Y3NwLk1FU1NBR0VfQ0hBTk5FTHxNRVNTQUdFX0NIQU5ORUx9YC5cbiAqXG4gKiBAcmV0dXJuIHtTeW1ib2x9IFRoZSBkaXNwYXRjaCBtZXRob2QgdG8gdXNlIGJhc2VkIG9uIHNldHRpbmcgYW5kIGVudmlyb25tZW50LlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY2FsY0Rpc3BhdGNoTWV0aG9kKCkge1xuICBzd2l0Y2ggKG9wdGlvbnMuZGlzcGF0Y2hNZXRob2QpIHtcbiAgICBjYXNlIE1FU1NBR0VfQ0hBTk5FTDpcbiAgICAgIGlmICh0eXBlb2YgTWVzc2FnZUNoYW5uZWwgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgcmV0dXJuIE1FU1NBR0VfQ0hBTk5FTDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBTRVRfVElNRU9VVDtcblxuICAgIGNhc2UgU0VUX1RJTUVPVVQ6XG4gICAgICByZXR1cm4gU0VUX1RJTUVPVVQ7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgaWYgKHR5cGVvZiBzZXRJbW1lZGlhdGUgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgcmV0dXJuIFNFVF9JTU1FRElBVEU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIE1lc3NhZ2VDaGFubmVsICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIHJldHVybiBNRVNTQUdFX0NIQU5ORUw7XG4gICAgICB9XG4gICAgICByZXR1cm4gU0VUX1RJTUVPVVQ7XG4gIH1cbn1cblxuLyoqXG4gKiBUaGUgaGVhcnQgb2YgdGhlIGRpc3BhdGNoIHByb2Nlc3MsIHRoaXMgaXMgdGhlIGZ1bmN0aW9uIHJ1biBieSB0aGUgZGlzcGF0Y2hcbiAqIGZ1bmN0aW9uIGluIG9yZGVyIHRvIGFjdHVhbGx5IHJ1biBxdWV1ZWQgdGFza3MuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gcHJvY2Vzc1Rhc2tzKCkge1xuICBydW5uaW5nID0gdHJ1ZTtcbiAgcXVldWVkID0gZmFsc2U7XG4gIGxldCBjb3VudCA9IDA7XG5cbiAgZm9yICg7Oykge1xuICAgIGNvbnN0IHRhc2sgPSBkZXF1ZXVlKHF1ZXVlKTtcbiAgICBpZiAodGFzayA9PT0gRU1QVFkpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHRhc2soKTtcblxuICAgIGlmIChjb3VudCA+PSBvcHRpb25zLmJhdGNoU2l6ZSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNvdW50Kys7XG5cbiAgICBydW5uaW5nID0gZmFsc2U7XG4gICAgaWYgKHFDb3VudChxdWV1ZSkpIHtcbiAgICAgIGRpc3BhdGNoZXIoKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuZCBhc3NpZ25zIHRoZSBnbG9iYWwgZGlzcGF0Y2ggZnVuY3Rpb24gYmFzZWQgb24gZGlzcGF0Y2ggbWV0aG9kXG4gKiBzZXR0aW5nIGFuZCBlbnZpcm9ubWVudGFsIGF2YWlsYWJpbGl0eS5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBzZXREaXNwYXRjaGVyKCkge1xuICBkaXNwYXRjaGVyID0gY3JlYXRlRGlzcGF0Y2hlcigpO1xufVxuXG4vKipcbiAqIFRoZSBjb25maWd1cmF0aW9uIG9mIHRoZSBDaGFua28gZGlzcGF0Y2hlci4gQW4gb2JqZWN0IGxpa2UgdGhpcyBpcyByZXR1cm5lZFxuICogZnJvbSB0aGUge0BsaW5rIG1vZHVsZTpjc3AuY29uZmlnfSBmdW5jdGlvbiwgYW5kIGl0IG1heSBhbHNvIGJlIHBhc3NlZCB0byB0aGVcbiAqIHNhbWUgZnVuY3Rpb24gKHRob3VnaCBlYWNoIHByb3BlcnR5IGlzIG9wdGlvbmFsIGluIHRoYXQgY2FzZSkuXG4gKlxuICogQHR5cGVkZWYge29iamVjdH0gRGlzcGF0Y2hlckNvbmZpZ1xuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBiYXRjaFNpemUgVGhlIG1heGltdW0gbnVtYmVyIG9mIHRhc2tzIHRoYXQgdGhlIGRpc3BhdGNoZXJcbiAqICAgICB3aWxsIHJ1biBpbiBhIHNpbmdsZSBiYXRjaC5cbiAqIEBwcm9wZXJ0eSB7U3ltYm9sfSBkaXNwYXRjaE1ldGhvZCBUaGUgbWV0aG9kIHVzZWQgdG8gZGlzcGF0Y2ggYSBwcm9jZXNzIGludG9cbiAqICAgICBhIHNlcGFyYXRlIGxpbmUgb2YgZXhlY3V0aW9uLlxuICovXG5cbi8qKlxuICogU2V0cyBvbmUgb3IgbW9yZSBvZiB0aGUgZGlzcGF0Y2hlciBjb25maWd1cmF0aW9uIG9wdGlvbnMuXG4gKlxuICogVGhpcyBpcyBhZHZhbmNlZCBzZXR0aW5nIGZvciB0aGUgZGlzcGF0Y2hlciB0aGF0IGlzIHJlc3BvbnNpYmxlIGZvciBxdWV1ZWluZ1xuICogdXAgY2hhbm5lbCBvcGVyYXRpb25zIGFuZCBwcm9jZXNzZXMuIEl0IGlzIGxpa2VseSB0aGF0IHRoaXMgZnVuY3Rpb24gd2lsbFxuICogbmV2ZXIgbmVlZCB0byBiZSBjYWxsZWQgaW4gbm9ybWFsIG9wZXJhdGlvbi5cbiAqXG4gKiBJZiBhbnkgcmVjb2duaXplZCBvcHRpb25zIGFyZSBzcGVjaWZpZWQgaW4gdGhlIG9wdGlvbnMgb2JqZWN0IHBhc3NlZCB0b1xuICogYGNvbmZpZ2AsIHRoZW4gdGhlIG9wdGlvbiBpcyBzZXQgdG8gdGhlIHZhbHVlIHNlbnQgaW4uIFByb3BlcnRpZXMgdGhhdCBhcmVuJ3RcbiAqIGFueSBvZiB0aGVzZSBvcHRpb25zIGFyZSBpZ25vcmVkLCBhbmQgYW55IG9mIHRoZXNlIG9wdGlvbnMgdGhhdCBkbyBub3QgYXBwZWFyXG4gKiBpbiB0aGUgcGFzc2VkIG9iamVjdCBhcmUgbGVmdCB3aXRoIHRoZWlyIGN1cnJlbnQgdmFsdWVzLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0cyBBIG1hcHBpbmcgb2Ygb3B0aW9ucyB0byB0aGVpciBuZXcgdmFsdWVzLiBFeHRyYSB2YWx1ZXNcbiAqICAgICAocHJvcGVydGllcyB0aGF0IGFyZSBub3Qgb3B0aW9ucykgYXJlIGlnbm9yZWQuXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdHMuYmF0Y2hTaXplXSBUaGUgbWF4aW11bSBudW1iZXIgb2YgdGFza3MgdGhhdCB0aGVcbiAqICAgICBkaXNwYXRjaGVyIHdpbGwgcnVuIGluIGEgc2luZ2xlIGJhdGNoIChpbml0aWFsbHksIHRoaXMgaXMgMTAyNCkuIElmIHRoZVxuICogICAgIG51bWJlciBvZiBwZW5kaW5nIHRhc2tzIGV4Y2VlZHMgdGhpcywgdGhlIHJlbWFpbmluZyBhcmUgbm90IGRpc2NhcmRlZC5cbiAqICAgICBUaGV5J3JlIHNpbXBseSBydW4gYXMgcGFydCBvZiBhbm90aGVyIGJhdGNoIGFmdGVyIHRoZSBjdXJyZW50IGJhdGNoXG4gKiAgICAgY29tcGxldGVzLlxuICogQHBhcmFtIHtTeW1ib2x9IFtvcHRzLmRpc3BhdGNoTWV0aG9kXSBUaGUgbWV0aG9kIHVzZWQgdG8gZGlzcGF0Y2ggYSBwcm9jZXNzXG4gKiAgICAgaW50byBhIHNlcGFyYXRlIGxpbmUgb2YgZXhlY3V0aW9uLiBQb3NzaWJsZSB2YWx1ZXMgYXJlXG4gKiAgICAgYHtAbGluayBtb2R1bGU6Y3NwLlNFVF9JTU1FRElBVEV8U0VUX0lNTUVESUFURX1gLFxuICogICAgIGB7QGxpbmsgbW9kdWxlOmNzcC5NRVNTQUdFX0NIQU5ORUx8TUVTU0FHRV9DSEFOTkVMfWAsIG9yXG4gKiAgICAgYHtAbGluayBtb2R1bGU6Y3NwLlNFVF9USU1FT1VUfFNFVF9USU1FT1VUfWAsIHdpdGggdGhlIGluaXRpYWwgYmVpbmdcbiAqICAgICBge0BsaW5rIG1vZHVsZTpjc3AuU0VUX0lNTUVESUFURXxTRVRfSU1NRURJQVRFfWAuIElmIGEgbWV0aG9kIGlzIHNldCBidXRcbiAqICAgICBpcyBub3QgYXZhaWxhYmxlIGluIHRoYXQgZW52aXJvbm1lbnQsIHRoZW4gaXQgd2lsbCBzaWxlbnRseSBmYWxsIGJhY2sgdG9cbiAqICAgICB0aGUgbmV4dCBtZXRob2QgdGhhdCBpcyBhdmFpbGFibGUuXG4gKiBAcmV0dXJuIHttb2R1bGU6Y3NwLkRpc3BhdGNoZXJDb25maWd9IFRoZSBjb25maWd1cmF0aW9uIHNldHRpbmdzIGZvciB0aGVcbiAqICAgICBkaXNwYXRjaGVyIGFmdGVyIGFueSBuZXcgdmFsdWVzIGhhdmUgYmVlbiBzZXQuXG4gKi9cbmZ1bmN0aW9uIGNvbmZpZyhvcHRzID0ge30pIHtcbiAgZm9yIChjb25zdCBrZXkgaW4gb3B0aW9ucykge1xuICAgIGlmIChrZXkgaW4gb3B0cykge1xuICAgICAgb3B0aW9uc1trZXldID0gb3B0c1trZXldO1xuXG4gICAgICBpZiAoa2V5ID09PSBcImRpc3BhdGNoTWV0aG9kXCIpIHtcbiAgICAgICAgc2V0RGlzcGF0Y2hlcigpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucyk7XG59XG5cbi8qKlxuICogUXVldWVzIGEgdGFzayB0byBiZSBydW4gYW5kIHN0YXJ0cyB0aGUgZGlzcGF0Y2ggcHJvY2Vzcy5cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSB0YXNrIEEgdGFzayB0byBiZSBxdWV1ZWQgYW5kIHJ1biB0aGUgbmV4dCB0aW1lIGEgYmF0Y2ggb2ZcbiAqICAgICB0YXNrcyBpcyBydW4uXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBkaXNwYXRjaCh0YXNrKSB7XG4gIGVucXVldWUocXVldWUsIHRhc2spO1xuICBkaXNwYXRjaGVyKCk7XG59XG5cbmV4cG9ydCB7IFNFVF9JTU1FRElBVEUsIE1FU1NBR0VfQ0hBTk5FTCwgU0VUX1RJTUVPVVQsIGNvbmZpZywgZGlzcGF0Y2ggfTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG4vKipcbiAqIFByb3ZpZGVzIHNtYWxsIHV0aWxpdHkgZnVuY3Rpb25zIHRvIG1ha2UgaXQgZWFzaWVyIHRvIGludGVyYWN0IHdpdGggYXN5bmNcbiAqIGZ1bmN0aW9ucyBhcyBwcm9jZXNzZXMuXG4gKlxuICogQG1vZHVsZSBjc3AvcHJvY2Vzc1xuICogQHByaXZhdGVcbiAqL1xuXG5pbXBvcnQgeyB0aW1lZENoYW4sIHJlY3ZBc3luYyB9IGZyb20gXCJtb2R1bGVzL2NoYW5uZWxcIjtcblxuLyoqXG4gKiBCbG9ja3MgdGhlIHByb2Nlc3MgZm9yIHRoZSBzcGVjaWZpZWQgdGltZSAoaW4gbWlsbGlzZWNvbmRzKSBhbmQgdGhlbiB1bmJsb2Nrc1xuICogaXQuXG4gKlxuICogVGhpcyBpbXBsZW1lbnRzIGEgZGVsYXksIGJ1dCBvbmUgdGhhdCdzIHN1cGVyaW9yIHRvIG90aGVyIGtpbmRzIG9mIGRlbGF5c1xuICogKGBzZXRUaW1lb3V0YCwgZXRjLikgYmVjYXVzZSBpdCBibG9ja3MgdGhlIHByb2Nlc3MgYW5kIGFsbG93cyB0aGUgZGlzcGF0Y2hlclxuICogdG8gYWxsb3cgb3RoZXIgcHJvY2Vzc2VzIHRvIHJ1biB3aGlsZSB0aGlzIG9uZSB3YWl0cy4gVGhlIGRlZmF1bHQgZGVsYXkgaXMgMCxcbiAqIHdoaWNoIHdpbGwgcmVsZWFzZSB0aGUgcHJvY2VzcyB0byBhbGxvdyBvdGhlcnMgdG8gcnVuIGFuZCB0aGVuIGltbWVkaWF0ZWx5XG4gKiByZS1xdWV1ZSBpdC5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uICptdXN0KiBiZSBjYWxsZWQgZnJvbSB3aXRoaW4gYW4gYGFzeW5jYCBmdW5jdGlvbiBhbmQgYXMgcGFydCBvZlxuICogYW4gYGF3YWl0YCBleHByZXNzaW9uLlxuICpcbiAqIFdoZW4gdGhpcyBmdW5jdGlvbiBjb21wbGV0ZXMgYW5kIGl0cyBwcm9jZXNzIHVuYmxvY2tzLCB0aGUgYGF3YWl0YCBleHByZXNzaW9uXG4gKiBkb2Vzbid0IHRha2Ugb24gYW55IG1lYW5pbmdmdWwgdmFsdWUuIFRoZSBwdXJwb3NlIG9mIHRoaXMgZnVuY3Rpb24gaXMgc2ltcGx5XG4gKiB0byBkZWxheSwgbm90IHRvIGNvbW11bmljYXRlIGFueSBkYXRhLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcGFyYW0ge251bWJlcn0gW2RlbGF5PTBdIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRoYXQgdGhlIHByb2Nlc3Mgd2lsbFxuICogICAgIGJsb2NrIGZvci4gQXQgdGhlIGVuZCBvZiB0aGF0IHRpbWUsIHRoZSBwcm9jZXNzIGlzIGFnYWluIGVsaWdpYmxlIHRvIGJlXG4gKiAgICAgcnVuIGJ5IHRoZSBkaXNwYXRjaGVyLiBJZiB0aGlzIGlzIG1pc3Npbmcgb3Igc2V0IHRvIGAwYCwgdGhlIHByb2Nlc3Mgd2lsbFxuICogICAgIGNlZGUgZXhlY3V0aW9uIHRvIHRoZSBuZXh0IG9uZSBidXQgaW1tZWRpYXRlbHkgcmVxdWV1ZSBpdHNlbGYgdG8gYmUgcnVuXG4gKiAgICAgYWdhaW4uXG4gKiBAcmV0dXJuIHtQcm9taXNlfSBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIG5vIG1lYW5pbmdmdWwgcmVzdWx0IHdoZW4gdGhlXG4gKiAgICAgdGltZSBoYXMgZWxhcHNlZC5cbiAqL1xuZnVuY3Rpb24gc2xlZXAoZGVsYXkgPSAwKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICBjb25zdCBjaCA9IHRpbWVkQ2hhbihkZWxheSk7XG4gICAgcmVjdkFzeW5jKGNoLCByZXNvbHZlKTtcbiAgfSk7XG59XG5cbi8qKlxuICogSW52b2tlcyBhbiBhc3luYyBmdW5jdGlvbiBhY3RpbmcgYXMgYSBwcm9jZXNzLlxuICpcbiAqIFRoaXMgaXMgcHVyZWx5IGEgY29udmVuaWVuY2UgZnVuY3Rpb24sIGRyaXZlbiBieSB0aGUgZmFjdCB0aGF0IGl0J3MgbmVjZXNzYXJ5XG4gKiB0byB1c2UgYW4gSUlGRSB0byBpbnZva2UgYW4gYW5vbnltb3VzIGFzeW5jIGZ1bmN0aW9uLCBhbmQgdGhhdCdzIG5vdCB2ZXJ5XG4gKiBhZXN0aGV0aWNhbGx5IHBsZWFzaW5nLiBJdCBkb2VzIG5vIG1vcmUgdGhhbiBpbnZva2UgdGhlIHBhc3NlZCBmdW5jdGlvbiwgYnV0XG4gKiB0aGF0IGF0IGxlYXN0IHJlbGVhc2VzIHVzIGZyb20gdGhlIG5lZWQgdG8gcHV0IHRoZSBlbXB0eSBwYXJlbnRoZXNlcyBhZnRlclxuICogdGhlIGZ1bmN0aW9uIGRlZmluaXRpb24uXG4gKlxuICogQSBuYW1lZCBhc3luYyBmdW5jdGlvbiBjYW4gc2ltcGx5IGJlIGludm9rZWQgKHdpdGhvdXQgYmVpbmcgYW4gSUlGRSkgYW5kXG4gKiBkb2Vzbid0IGJlbmVmaXQgZnJvbSB0aGlzIGNvbnZlbmllbmNlLlxuICpcbiAqIEFub255bW91cyBwcm9jZXNzIHdpdGhvdXQgYGdvYDpcbiAqIGBgYFxuICogKGFzeW5jICgpID0+IHtcbiAqICAgLi4uIGRvIHNvbWUgcHJvY2VzcyBzdHVmZiBoZXJlIC4uLlxuICogfSkoKTtcbiAqIGBgYFxuICogQW5vbnltb3VzIHByb2Nlc3Mgd2l0aCBgZ29gOlxuICogYGBgXG4gKiBnbyhhc3luYyAoKSA9PiB7XG4gKiAgIC4uLiBkbyBzb21lIHByb2Nlc3Mgc3R1ZmYgaGVyZSAuLi5cbiAqIH0pO1xuICogYGBgXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuIFRoZSBhc3luYyBmdW5jdGlvbiBiZWluZyB1c2VkIGFzIGEgcHJvY2Vzcy5cbiAqIEBwYXJhbSB7Li4uKn0gYXJncyBBcmd1bWVudHMgdGhhdCBhcmUgc2VudCB0byB0aGUgYXN5bmMgZnVuY3Rpb24gd2hlbiBpdCdzXG4gKiAgICAgaW52b2tlZC5cbiAqIEByZXR1cm4ge1Byb21pc2V9IFRoZSBwcm9taXNlIHJldHVybmVkIGJ5IHRoZSBhc3luYyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gZ28oZm4sIC4uLmFyZ3MpIHtcbiAgcmV0dXJuIGZuKC4uLmFyZ3MpO1xufVxuXG4vKipcbiAqIEpvaW5zIGFsbCBvZiB0aGUgcHJvdmlkZWQgcHJvY2Vzc2VzIGludG8gYSBzaW5nbGUgcHJvY2VzcywgcmV0dXJuaW5nIGFcbiAqIHByb21pc2UgdGhhdCB3cmFwcyBhbGwgb2YgdGhlIGluZGl2aWR1YWwgcHJvY2Vzc2VzJyBwcm9taXNlcy4gUHV0dGluZyB0aGlzIGluXG4gKiBhbiBgYXdhaXRgIHN0YXRlbWVudCB3aWxsIGJsb2NrIHVudGlsIGFsbCBvZiB0aGUgcHJvY2Vzc2VzIGNvbXBsZXRlLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcGFyYW0gey4uLmZ1bmN0aW9ufSBmbnMgQW55IG51bWJlciBvZiBhc3luYyBmdW5jdGlvbnMgd2hvc2UgcmVzb2x1dGlvbnMgYXJlXG4gKiAgICAgYmVpbmcgd2FpdGVkIGZvci5cbiAqIEByZXR1cm4ge1Byb21pc2V9IEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gYWxsIG9mIHRoZSBwcm9jZXNzZXMgcHJvbWlzZXNcbiAqICAgICByZXNvbHZlLlxuICovXG5mdW5jdGlvbiBqb2luKC4uLmZucykge1xuICByZXR1cm4gUHJvbWlzZS5hbGwoZm5zKTtcbn1cblxuZXhwb3J0IHsgc2xlZXAsIGdvLCBqb2luIH07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuLyoqXG4gKiBUaGUgbWFwcGluZyBvZiBwcm90b2NvbCBuYW1lcyB0byB0aGVpciByZXNwZWN0aXZlIHByb3BlcnR5IGtleSBuYW1lcy4gVGhlXG4gKiB2YWx1ZXMgb2YgdGhpcyBtYXAgd2lsbCBkZXBlbmQgb24gd2hldGhlciBzeW1ib2xzIGFyZSBhdmFpbGFibGUuXG4gKlxuICogQHR5cGVkZWYge29iamVjdH0gUHJvdG9jb2xNYXBcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y29yZVxuICogQHByaXZhdGVcbiAqIEBwcm9wZXJ0eSB7U3ltYm9sfSBpbml0IFRoZSBgcmVkdWNlci9pbml0YCBwcm90b2NvbC4gVGhpcyBpcyB1c2VkIHRvIG1hcmtcbiAqICAgICBmdW5jdGlvbnMgdGhhdCBpbml0aWFsaXplIGEgdGFyZ2V0IGNvbGxlY3Rpb24gYmVmb3JlIGFkZGluZyBpdGVtcyB0byBpdC5cbiAqIEBwcm9wZXJ0eSB7U3ltYm9sfSBzdGVwIFRoZSBgcmVkdWNlci9zdGVwYCBwcm90b2NvbC4gVGhpcyBpcyB1c2VkIHRvIG1hcmtcbiAqICAgICBmdW5jdGlvbnMgdGhhdCBhcmUgdXNlZCBpbiB0aGUgcmVkdWNlcidzIHN0ZXAgcHJvY2Vzcywgd2hlcmUgb2JqZWN0cyBhcmVcbiAqICAgICBhZGRlZCB0byB0aGUgdGFyZ2V0IGNvbGxlY3Rpb24gb25lIGF0IGEgdGltZS5cbiAqIEBwcm9wZXJ0eSB7U3ltYm9sfSBmaW5hbCBUaGUgYHJlZHVjZXIvZmluYWxgIHByb3RvY29sLiBUaGlzIGlzIHVzZWQgdG8gbWFya1xuICogICAgIGZ1bmN0aW9ucyB0aGF0IHRha2UgdGhlIGZpbmFsIHJlc3VsdCBvZiB0aGUgc3RlcCBwcm9jZXNzIGFuZCByZXR1cm4gdGhlXG4gKiAgICAgZmluYWwgZm9ybSB0byBiZSBvdXRwdXQuIFRoaXMgaXMgb3B0aW9uYWw7IGlmIHRoZSByZWR1Y2VyIGRvZXMgbm90IHdhbnRcbiAqICAgICB0byB0cmFuc2Zvcm0gdGhlIGZpbmFsIHJlc3VsdCwgaXQgc2hvdWxkIGp1c3QgcmV0dXJuIHRoZSByZXN1bHQgb2YgaXRzXG4gKiAgICAgY2hhaW5lZCByZWR1Y2VyJ3MgYGZpbmFsYCBmdW5jdGlvbi5cbiAqIEBwcm9wZXJ0eSB7U3ltYm9sfSBjb21wbGV0ZWQgVGhlIGByZWR1Y2VyL2NvbXBsZXRlZGAgcHJvdG9jb2wuIFRoZSBwcmVzZW5jZVxuICogICAgIG9mIHRoaXMga2V5IG9uIGFuIG9iamVjdCBpbmRpY2F0ZXMgdGhhdCBpdHMgdHJhbnNmb3JtYXRpb24gaGFzIGJlZW5cbiAqICAgICBjb21wbGV0ZWQuIEl0IGlzIHVzZWQgaW50ZXJuYWxseSB0byBtYXJrIGNvbGxlY3Rpb25zIHdob3NlXG4gKiAgICAgdHJhbnNmb3JtYXRpb25zIGNvbmNsdWRlIGJlZm9yZSBldmVyeSBvYmplY3QgaXMgaXRlcmF0ZWQgb3ZlciAoYXMgaW5maW5hbFxuICogICAgIGB7QGxpbmsgbW9kdWxlOnhkdWNlLnRha2V9YCB0cmFuc2R1Y2Vycy4pIEl0IGlzIG9mIGxpdHRsZSB1c2UgYmV5b25kXG4gKiAgICAgdHJhbnNkdWNlciBhdXRob3JpbmcuXG4gKiBAcHJvcGVydHkge1N5bWJvbH0gdmFsdWUgVGhlIGByZWR1Y2VyL3ZhbHVlYCBwcm90b2NvbC4gVGhpcyBpcyB1c2VkXG4gKiAgICAgaW50ZXJuYWxseSB0byBtYXJrIHByb3BlcnRpZXMgdGhhdCBjb250YWluIHRoZSB2YWx1ZSBvZiBhIGNvbXBsZXRlZFxuICogICAgIHRyYW5zZm9ybWF0aW9uLiBJdCBpcyBvZiBsaXR0bGUgdXNlIGJleW9uZCB0cmFuc2R1Y2VyIGF1dGhvcmluZy5cbiAqL1xuXG4vKipcbiAqIFRoZSBtYXBwaW5nIG9mIHByb3RvY29sIG5hbWVzIHRvIHRoZWlyIHJlc3BlY3RpdmUgcHJvcGVydHkga2V5IG5hbWVzLlxuICpcbiAqIEB0eXBlIHttb2R1bGU6Y3NwLlByb3RvY29sTWFwfVxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqL1xuY29uc3QgcHJvdG9jb2xzID0gT2JqZWN0LmNyZWF0ZShudWxsLCB7XG4gIGluaXQ6IHtcbiAgICB2YWx1ZTogU3ltYm9sLmZvcihcInJlZHVjZXIvaW5pdFwiKVxuICB9LFxuICBzdGVwOiB7XG4gICAgdmFsdWU6IFN5bWJvbC5mb3IoXCJyZWR1Y2VyL3N0ZXBcIilcbiAgfSxcbiAgZmluYWw6IHtcbiAgICB2YWx1ZTogU3ltYm9sLmZvcihcInJlZHVjZXIvZmluYWxcIilcbiAgfSxcbiAgY29tcGxldGVkOiB7XG4gICAgdmFsdWU6IFN5bWJvbC5mb3IoXCJyZWR1Y2VyL2NvbXBsZXRlZFwiKVxuICB9LFxuICB2YWx1ZToge1xuICAgIHZhbHVlOiBTeW1ib2wuZm9yKFwicmVkdWNlci92YWx1ZVwiKVxuICB9XG59KTtcblxuZXhwb3J0IHsgcHJvdG9jb2xzIH07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuLyoqXG4gKiBQcm92aWRlcyBhbiBlZmZpY2llbnQgZ2VuZXJhbC1wdXJwb3NlIHF1ZXVlLlxuICpcbiAqIEBtb2R1bGUgY3NwL3F1ZXVlXG4gKiBAcHJpdmF0ZVxuICovXG5cbi8qKlxuICogQSBnZW5lcmFsIHB1cnBvc2UsIGhpZ2hseSBlZmZpY2llbnQgSmF2YVNjcmlwdCBxdWV1ZS4gSXQgaXMgYmFja2VkIGJ5IGFcbiAqIEphdmFTY3JpcHQgYXJyYXksIGJ1dCBpdCBkb2VzIG5vdCB1c2UgYHVuc2hpZnRgIHRvIHRha2UgZWxlbWVudHMgb2ZmIHRoZVxuICogYXJyYXkgYmVjYXVzZSB1bnNoaWZ0IGNhdXNlcyBlbGVtZW50cyB0byBiZSBjb3BpZWQgZXZlcnkgdGltZSBpdCdzIHVzZWQuXG4gKiBJbnN0ZWFkLCBhIHBvaW50ZXIgaXMgbWFpbnRhaW5lZCB0aGF0IGtlZXBzIHRyYWNrIG9mIHRoZSBsb2NhdGlvbiBvZiB0aGUgbmV4dFxuICogZWxlbWVudCB0byBiZSBkZXF1ZXVlZCwgYW5kIHdoZW4gdGhhdCBkZXF1ZXVlIGhhcHBlbnMsIHRoZSBwb2ludGVyIHNpbXBseVxuICogbW92ZXMuIFdoZW4gdGhlIGVtcHR5IHNwYWNlIGF0IHRoZSBoZWFkIG9mIHRoZSBhcnJheSBnZXRzIGxhcmdlIGVub3VnaCwgaXQnc1xuICogcmVtb3ZlZCBieSBhIHNpbmdsZSBzbGljZSBvcGVyYXRpb24uXG4gKlxuICogUHV0dGluZyBlbGVtZW50cyBpbnRvIHRoZSBxdWV1ZSBpcyBqdXN0IGRvbmUgd2l0aCBhIGJhc2ljIGBwdXNoYCwgd2hpY2ggKmlzKlxuICogaGlnaGx5IGVmZmljaWVudC5cbiAqXG4gKiBUaGlzIHR5cGUgb2YgcXVldWUgaXMgcG9zc2libGUgaW4gSmF2YVNjcmlwdCBiZWNhdXNlIEpTIGFycmF5cyBhcmUgcmVzaXphYmxlLlxuICogSW4gbGFuZ3VhZ2VzIHdpdGggZml4ZWQtc2l6ZSBhcnJheXMsIGEgcmVzaXppbmcgb3BlcmF0aW9uIHdvdWxkIGhhdmUgdG8gYmVcbiAqIHJ1biBlYWNoIHRpbWUgdGhlIHF1ZXVlIGZpbGxzLlxuICpcbiAqIEBuYW1lc3BhY2UgUXVldWVcbiAqIEBwcml2YXRlXG4gKi9cblxuLyoqXG4gKiBUaGUgdmFsdWUgcmV0dXJuZWQgd2hlbiBhIHF1ZXVlIGlzIHJlYWQgd2hlbiBpdCdzIGVtcHR5LlxuICpcbiAqIFRoaXMgc3BlY2lhbCB2YWx1ZSBpcyB1c2VkIGJlY2F1c2UgYG51bGxgIGFuZCBgdW5kZWZpbmVkYCBhcmUgcG9zc2libGVcbiAqIGxlZ2l0aW1hdGUgdmFsdWVzIHRoYXQgY2FuIGJlIHN0b3JlZCBpbiBhIHF1ZXVlLiBBbm90aGVyIG9wdGlvbiBpcyB0byB1c2VcbiAqIHNvbWUga2luZCBvZiBgTWF5YmVgIG9yIGBPcHRpb25gIHR5cGUsIGJ1dCB0aGF0IHJlcXVpcmVzIG1vcmUgZWZmb3J0IG9uIHRoZVxuICogcGFydCBvZiB0aGUgZW5kIHVzZXIgdG8gaW50ZXJmYWNlIHdpdGguXG4gKlxuICogQHR5cGUge1N5bWJvbH1cbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKi9cbmNvbnN0IEVNUFRZID0gU3ltYm9sKFwiRU1QVFlcIik7XG5cbi8qKlxuICogQSBtYXJrZXIgcHJvcGVydHkgbmFtZSB0byBpbmRpY2F0ZSB0aGF0IGFuIG9iamVjdCBpcyBpbiBmYWN0IGEgcXVldWUuXG4gKlxuICogQSBxdWV1ZSBoYXMgYSBwcm9wZXJ0eSB3aXRoIHRoaXMgbmFtZSB3aG9zZSByZWFkb25seSB2YWx1ZSBpcyBzZXQgdG8gYHRydWVgLlxuICogVGhpcyBpcyBub3QgbWVhbnQgdG8gYmUgcmVhZCBleGNlcHQgYnkgdGhlXG4gKiBge0BsaW5rIG1vZHVsZTpxdWV1ZS5pc1F1ZXVlfGlzUXVldWV9YCBmdW5jdGlvbi5cbiAqXG4gKiBAdHlwZSB7U3ltYm9sfVxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgUVVFVUUgPSBTeW1ib2woXCJRVUVVRVwiKTtcblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgYW4gb2JqZWN0IGlzIGEgcXVldWUuXG4gKlxuICogQHBhcmFtIHsqfSBvYmogVGhlIG9iamVjdCB0byBiZSB0ZXN0ZWQuXG4gKiBAcmV0dXJuIHtib29sZWFufSBFaXRoZXIgYHRydWVgIGlmIHRoZSBvYmplY3QgaXMgYSBxdWV1ZSBvciBgZmFsc2VgIGlmIGl0IGlzXG4gKiBub3QuXG4gKi9cbmZ1bmN0aW9uIGlzUXVldWUob2JqKSB7XG4gIHJldHVybiAhIW9iaj8uW1FVRVVFXTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IHF1ZXVlLiBUaGlzIHF1ZXVlIGlzIGNyZWF0ZWQgZW1wdHksIHdpdGggYSBiYWNraW5nIGFycmF5IG9mXG4gKiBsZW5ndGggMC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcC9xdWV1ZVxuICogQHJldHVybnMge21vZHVsZTpjc3AvcXVldWV+UXVldWV9IEEgbmV3LCBlbXB0eSBxdWV1ZS5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHF1ZXVlKCkge1xuICByZXR1cm4gT2JqZWN0LmNyZWF0ZShudWxsLCB7XG4gICAgc3RvcmU6IHtcbiAgICAgIHZhbHVlOiBbXSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSxcblxuICAgIHBvaW50ZXI6IHtcbiAgICAgIHZhbHVlOiAwLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9LFxuXG4gICAgW1FVRVVFXToge1xuICAgICAgdmFsdWU6IHRydWVcbiAgICB9XG4gIH0pO1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIG51bWJlciBvZiBlbGVtZW50cyBzdG9yZWQgaW4gYSBxdWV1ZS4gVGhpcyBtYXkgb3IgbWF5IG5vdCBlcXVhbFxuICogdGhlIGxlbmd0aCBvZiB0aGUgYmFja2luZyBzdG9yZSwgYXMgdGhlcmUgaXMgb2Z0ZW4gZW1wdHkgc3BhY2UgYXQgdGhlIGhlYWQgb2ZcbiAqIHRoZSBiYWNraW5nIHN0b3JlLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwL3F1ZXVlXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AvcXVldWV+UXVldWV9IHF1ZXVlIFRoZSBxdWV1ZSB3aG9zZSBpdGVtcyBhcmUgYmVpbmdcbiAqICAgICBjb3VudGVkLlxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgbnVtYmVyIG9mIGl0ZW1zIGluIHRoZSBxdWV1ZS5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNvdW50KHF1ZXVlKSB7XG4gIHJldHVybiBxdWV1ZS5zdG9yZS5sZW5ndGggLSBxdWV1ZS5wb2ludGVyO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhIHF1ZXVlIGlzIGVtcHR5LlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwL3F1ZXVlXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AvcXVldWV+UXVldWV9IHF1ZXVlIFRoZSBxdWV1ZSBiZWluZyBjaGVja2VkIGZvciBlbXB0aW5lc3MuXG4gKiBAcmV0dXJuIHtib29sZWFufSBFaXRoZXIgYHRydWVgIGlmIHRoZSBxdWV1ZSBpcyBlbXB0eSBvciBgZmFsc2VgIGlmIGl0IGlzXG4gKiAgICAgbm90LlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaXNFbXB0eShxdWV1ZSkge1xuICByZXR1cm4gcXVldWUuc3RvcmUubGVuZ3RoID09PSAwO1xufVxuXG4vKipcbiAqIEFkZHMgYW4gaXRlbSB0byBhIHF1ZXVlLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwL3F1ZXVlXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AvcXVldWV+UXVldWV9IHF1ZXVlIFRoZSBxdWV1ZSB3aGljaCBpcyBoYXZpbmcgYW4gaXRlbSBhZGRlZFxuICogICAgIHRvIGl0LlxuICogQHBhcmFtIHsqfSBpdGVtIFRoZSBpdGVtIGJlaW5nIGFkZGVkIHRvIHRoZSBxdWV1ZS5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGVucXVldWUocXVldWUsIGl0ZW0pIHtcbiAgcXVldWUuc3RvcmUucHVzaChpdGVtKTtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFuIGl0ZW0gZnJvbSBhIHF1ZXVlIGFuZCByZXR1cm5zIHRoYXQgaXRlbS4gSWYgdGhlIHJlbW92YWwgY2F1c2VzIHRoZVxuICogYW1vdW50IG9mIGVtcHR5IHNwYWNlIGF0IHRoZSBoZWFkIG9mIHRoZSBiYWNraW5nIHN0b3JlIHRvIGV4Y2VlZCBhIHRocmVzaG9sZCxcbiAqIHRoYXQgZW1wdHkgc3BhY2UgaXMgcmVtb3ZlZC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcC9xdWV1ZVxuICogQHBhcmFtIHttb2R1bGU6Y3NwL3F1ZXVlflF1ZXVlfSBxdWV1ZSBUaGUgcXVldWUgd2hvc2Ugb2xkZXN0IGl0ZW0gaXMgdG8gYmVcbiAqICAgICByZW1vdmVkLlxuICogQHJldHVybiB7Kn0gVGhlIG9sZGVzdCBzdG9yZWQgaXRlbSBpbiB0aGUgcXVldWUuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBkZXF1ZXVlKHF1ZXVlKSB7XG4gIGlmIChxdWV1ZS5zdG9yZS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gRU1QVFk7XG4gIH1cblxuICBjb25zdCBpdGVtID0gcXVldWUuc3RvcmVbcXVldWUucG9pbnRlcl07XG4gIC8vIFJlbW92ZXMgdGhlIGl0ZW1zIGluIHRoZSBiYWNraW5nIHN0b3JlIGJlZm9yZSB0aGUgY3VycmVudCBwb2ludGVyLCBpZiB0aGVyZVxuICAvLyBpcyBlbm91Z2ggXCJlbXB0eVwiIHNwYWNlIGJlZm9yZSB0aGUgcG9pbnRlciB0byBqdXN0aWZ5IGl0IChpLmUuLCB0aGUgdW51c2VkXG4gIC8vIHBvcnRpb24gaXMgYXQgbGVhc3QgaGFsZiBhcyBsYXJnZSBhcyB0aGUgdXNlZCBwb3J0aW9uKVxuICBpZiAoKytxdWV1ZS5wb2ludGVyICogMiA+PSBxdWV1ZS5zdG9yZS5sZW5ndGgpIHtcbiAgICBxdWV1ZS5zdG9yZSA9IHF1ZXVlLnN0b3JlLnNsaWNlKHF1ZXVlLnBvaW50ZXIpO1xuICAgIHF1ZXVlLnBvaW50ZXIgPSAwO1xuICB9XG4gIHJldHVybiBpdGVtO1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIG5leHQgaXRlbSBpbiBhIHF1ZXVlIHdpdGhvdXQgcmVtb3ZpbmcgaXQuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3AvcXVldWVcbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC9xdWV1ZX5RdWV1ZX0gcXVldWUgVGhlIHF1ZXVlIHdob3NlIG9sZGVzdCBpdGVtIGlzIHRvIGJlXG4gKiAgICAgcGVla2VkIGF0LlxuICogQHJldHVybiB7Kn0gVGhlIG9sZGVzdCBpdGVtIHN0b3JlZCBpbiB0aGUgcXVldWUuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBwZWVrKHF1ZXVlKSB7XG4gIHJldHVybiBxdWV1ZS5zdG9yZS5sZW5ndGggPT09IDAgPyBFTVBUWSA6IHF1ZXVlLnN0b3JlW3F1ZXVlLnBvaW50ZXJdO1xufVxuXG4vKipcbiAqIEZpbHRlcnMgb3V0IGFueSBpdGVtIGluIGEgcXVldWUgdGhhdCBkb2VzIG5vdCBjYXVzZSB0aGUgc3VwcGxpZWQgcHJlZGljYXRlXG4gKiBmdW5jdGlvbiB0byByZXR1cm4gYHRydWVgIHdoZW4gcGFzc2VkIHRoYXQgaXRlbS4gVGhpcyBpcyBub3QgZXhhY3RseSBhXG4gKiBnZW5lcmFsIHB1cnBvc2UgcXVldWUgb3BlcmF0aW9uLCBidXQgd2UgbmVlZCBpdCB3aXRoIGNoYW5uZWxzIHRoYXQgd2lsbFxuICogb2NjYXNpb25hbGx5IHdhbnQgdG8gZ2V0IHJpZCBvZiBpbmFjdGl2ZSBoYW5kbGVycy5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcC9xdWV1ZVxuICogQHBhcmFtIHttb2R1bGU6Y3NwL3F1ZXVlflF1ZXVlfSBxdWV1ZSBUaGUgcXVldWUgYmVpbmcgZmlsdGVyZWQuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmbiBUaGUgcHJlZGljYXRlIGZ1bmN0aW9uIHRoYXQgZGV0ZXJtaW5lcyB3aGV0aGVyIGFuXG4gKiAgICAgZWxlbWVudCByZW1haW5zIGluIHRoZSBxdWV1ZS5cbiAqL1xuZnVuY3Rpb24gZmlsdGVyKHF1ZXVlLCBwcmVkaWNhdGUpIHtcbiAgZm9yIChsZXQgaSA9IDAsIGVuZCA9IGNvdW50KHF1ZXVlKTsgaSA8IGVuZDsgaSsrKSB7XG4gICAgY29uc3QgaXRlbSA9IGRlcXVldWUocXVldWUpO1xuICAgIGlmIChwcmVkaWNhdGUoaXRlbSkpIHtcbiAgICAgIGVucXVldWUocXVldWUsIGl0ZW0pO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQge1xuICBFTVBUWSxcbiAgcXVldWUsXG4gIGlzUXVldWUsXG4gIGNvdW50LFxuICBpc0VtcHR5LFxuICBlbnF1ZXVlLFxuICBkZXF1ZXVlLFxuICBwZWVrLFxuICBmaWx0ZXJcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuLyoqXG4gKiBBIHNldCBvZiB1dGlsaXR5IGZ1bmN0aW9ucyB0aGF0IGdpdmUgb25lIG9yIG1vcmUgY2hhbm5lbHMgc29tZSBleHRyYVxuICogZnVuY3Rpb25hbGl0eS4gRWFjaCBvZiB0aGVzZSBhY2NlcHQgb25lIG9yIG1vcmUge0BsaW5rIG1vZHVsZTpjc3AuQ2hhbm5lbH1cbiAqIG9iamVjdHMgYW5kIHRoZW4gY29tYmluZSBvciBtYW5pcHVsYXRlIHRoZW0gaW4gKGhvcGVmdWxseSkgdXNlZnVsIHdheXMsIHN1Y2hcbiAqIGFzIG1lcmdpbmcgdGhlbSwgc3BsaXR0aW5nIHRoZW0sIHJlZHVjaW5nIHZhbHVlcyB0aGV5IHJlY2VpdmUgdG8gYSBzaW5nbGVcbiAqIHZhbHVlLCBvciB0aHJvdHRsaW5nIHRoZW0gc28gdGhhdCB0aGV5IG9ubHkgcHJvZHVjZSBvbmUgcmVzdWx0IGluIGEgZ2l2ZW5cbiAqIHRpbWUgcGVyaW9kLlxuICpcbiAqIEBtb2R1bGUgY3NwLW9wc1xuICovXG5cbmV4cG9ydCB7XG4gIG1hcCxcbiAgbWVyZ2UsXG4gIHBhcnRpdGlvbixcbiAgcGlwZSxcbiAgc3BsaXQsXG4gIHRhcCxcbiAgdW50YXAsXG4gIHVudGFwQWxsXG59IGZyb20gXCJtb2R1bGVzL2Zsb3dcIjtcbmV4cG9ydCB7IHJlZHVjZSwgdG9DaGFubmVsLCB0b0FycmF5IH0gZnJvbSBcIm1vZHVsZXMvY29udmVyc2lvblwiO1xuZXhwb3J0IHsgZGVib3VuY2UsIHRocm90dGxlIH0gZnJvbSBcIm1vZHVsZXMvdGltaW5nXCI7XG5cbi8qKlxuICogQSBmdW5jdGlvbiB0aGF0IHRha2VzIGEgc2luZ2xlIHZhbHVlIGFuZCwgZGVwZW5kaW5nIG9uIHdoZXRoZXIgdGhhdCB2YWx1ZVxuICogbWVldHMgdGhlIGZ1bmN0aW9uJ3MgY3JpdGVyaWEgZm9yIHBhc3NpbmcsIHJldHVybnMgYHRydWVgIG9yIGBmYWxzZWAuXG4gKlxuICogQGNhbGxiYWNrIFByZWRpY2F0ZVxuICogQG1lbWJlcm9mIG1vZHVsZTpvcHNcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3QuIFdoZXRoZXIgb3Igbm90IHRoZSB2YWx1ZSBwYXNzZXMgdGhlIHRlc3RcbiAqICAgICBkZXBlbmRzIG9uIHRoZSBjcml0ZXJpYSBlc3RhYmxpc2hlZCBieSB0aGUgcHJlZGljYXRlLlxuICogQHJldHVybiB7Ym9vbGVhbn0gRWl0aGVyIGB0cnVlYCBpZiB0aGUgdmFsdWUgcGFzc2VzIG9yIGBmYWxzZWAgaWYgaXQgZG9lc24ndC5cbiAqL1xuXG4vKipcbiAqIEEgZnVuY3Rpb24gdGhhdCBtYXBzIGl0cyBpbnB1dChzKSB0byBhbiBvdXRwdXQgdmFsdWUuIEl0IHRha2VzIGEgdmFyaWFibGVcbiAqIG51bWJlciBvZiBpbnB1dCB2YWx1ZXMgYW5kIGNhbGN1bGF0ZXMgYW4gb3V0cHV0IHZhbHVlIGZyb20gdGhlbS5cbiAqXG4gKiBAY2FsbGJhY2sgTWFwcGVyXG4gKiBAbWVtYmVyb2YgbW9kdWxlOm9wc1xuICogQHBhcmFtIHsuLi4qfSB2YWx1ZXMgVGhlIGlucHV0IHZhbHVlcy5cbiAqIEByZXR1cm4geyp9IEFuIG91dHB1dCB2YWx1ZSBjYWxjdWxhdGVkIGZyb20gdGhlIGlucHV0IHZhbHVlcy5cbiAqL1xuXG4vKipcbiAqIEEgZnVuY3Rpb24gdGhhdCBpbnRlZ3JhdGVzIG9uZSBvZiBpdHMgdmFsdWVzIGludG8gdGhlIG90aGVyLiBJdCdzIHVzZWQgZm9yXG4gKiByZWR1Y2luZyBjaGFubmVsIHZhbHVlcyBpbnRvIGEgc2luZ2xlIHZhbHVlLlxuICpcbiAqIEBjYWxsYmFjayBSZWR1Y2VyXG4gKiBAbWVtYmVyb2YgbW9kdWxlOm9wc1xuICogQHBhcmFtIHsqfSBhY2MgVGhlIGN1cnJlbnQgYWNjdW11bGF0ZWQgdmFsdWUuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSBuZXcgdmFsdWUgdGhhdCBuZWVkcyB0byBiZSBpbnRlZ3JhdGVkIGludG8gdGhlXG4gKiAgICAgYWNjdW11bGF0ZWQgdmFsdWUuXG4gKiBAcmV0dXJuIHsqfSBBIG5ldyBhY2N1bXVsYXRlZCB2YWx1ZSwgcmVzdWx0aW5nIGZyb20gaW50ZWdyYXRpbmcgYHZhbHVlYCBpbnRvXG4gKiAgICAgdGhlIG9yaWdpbmFsIGFjY3VtdWxhdGVkIHZhbHVlLlxuICovXG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuLyoqXG4gKiBVdGlsaXR5IGZ1bmN0aW9ucyB1c2VkIGJ5IG1vcmUgdGhhbiBvbmUgb3RoZXIgbW9kdWxlLlxuICpcbiAqIEBtb2R1bGUgb3BzL2NvbW1vblxuICogQHByaXZhdGVcbiAqL1xuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgdmFsdWUgcGFzc2VkIGlzIGEgZmluaXRlIG51bWJlci5cbiAqXG4gKiBAcGFyYW0geyp9IHggVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybiB7Ym9vbGVhbn0gRWl0aGVyIGB0cnVlYCBpZiB0aGUgdmFsdWUgaXMgYSBmaW5pdGUgbnVtYmVyIG9yIGBmYWxzZWBcbiAqICAgICBpZiBpdCBpcyBub3QuXG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNOdW1iZXIoeCkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHgpID09PSBcIltvYmplY3QgTnVtYmVyXVwiICYmIGlzRmluaXRlKHgpO1xufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG5cbi8qKlxuICogQSBzZXQgb2YgY2hhbm5lbCB1dGlsaXRpZXMgZm9yIGNvbnZlcnRpbmcgY2hhbm5lbHMgaW50byBvdGhlciBraW5kcyBvZiBkYXRhLFxuICogYW5kIHZpY2UgdmVyc2EuXG4gKlxuICogQG1vZHVsZSBvcHMvY29udmVyc2lvblxuICogQHByaXZhdGVcbiAqL1xuXG5pbXBvcnQgeyBnbywgY2hhbiwgc2VuZCwgc2VuZEFzeW5jLCBjbG9zZSB9IGZyb20gXCJAY2hhbmtvL2NzcFwiO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBzaW5nbGUgdmFsdWUgZnJvbSBhIGNoYW5uZWwgYnkgcnVubmluZyBpdHMgdmFsdWVzIHRocm91Z2ggYVxuICogcmVkdWNpbmcgZnVuY3Rpb24uXG4gKlxuICogRm9yIGV2ZXJ5IHZhbHVlIHB1dCBvbnRvIHRoZSBpbnB1dCBjaGFubmVsLCB0aGUgcmVkdWNpbmcgZnVuY3Rpb24gaXMgY2FsbGVkXG4gKiB3aXRoIHR3byBwYXJhbWV0ZXJzOiB0aGUgYWNjdW11bGF0b3IgdGhhdCBob2xkcyB0aGUgcmVzdWx0IG9mIHRoZSByZWR1Y3Rpb25cbiAqIHNvIGZhciwgYW5kIHRoZSBuZXcgaW5wdXQgdmFsdWUuIFRoZSBpbml0aWFsIHZhbHVlIG9mIHRoZSBhY2N1bXVsYXRvciBpcyB0aGVcbiAqIHRoaXJkIHBhcmFtZXRlciB0byBgcmVkdWNlYC4gVGhlIHJlZHVjdGlvbiBpcyBub3QgY29tcGxldGUgdW50aWwgdGhlIGlucHV0XG4gKiBjaGFubmVsIGNsb3Nlcy5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgYSBjaGFubmVsLiBXaGVuIHRoZSBmaW5hbCByZWR1Y2VkIHZhbHVlIGlzIHByb2R1Y2VkLCBpdFxuICogaXMgcHV0IG9udG8gdGhpcyBjaGFubmVsLCBhbmQgd2hlbiB0aGF0IHZhbHVlIGlzIHRha2VuIGZyb20gaXQsIHRoZSBjaGFubmVsXG4gKiBpcyBjbG9zZWQuXG4gKlxuICogYGBgXG4gKiBpbXBvcnQgeyBnbywgY2hhbiwgc2VuZCwgcmVjdiwgY2xvc2UgfSBmcm9tIFwiQGNzcFwiO1xuICogaW1wb3J0IHsgcmVkdWNlIH0gZnJvbSBcIkBvcHNcIjtcbiAqXG4gKiBjb25zdCBpbnB1dCA9IGNoYW4oKTtcbiAqIGNvbnN0IG91dHB1dCA9IHJlZHVjZSgoYWNjLCB2YWx1ZSkgPT4gYWNjICsgdmFsdWUsIGlucHV0LCAwKTtcbiAqXG4gKiBnbyhhc3luYyAoKSA9PiB7XG4gKiAgIGF3YWl0IHNlbmQoaW5wdXQsIDEpO1xuICogICBhd2FpdCBzZW5kKGlucHV0LCAyKTtcbiAqICAgYXdhaXQgc2VuZChpbnB1dCwgMyk7XG4gKiAgIGNsb3NlKGlucHV0KTtcbiAqIH0pO1xuICpcbiAqIGdvKGFzeW5jICgpID0+IHtcbiAqICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVjdihvdXRwdXQpO1xuICogICBjb25zb2xlLmxvZyhvdXRwdXQpOyAgICAgICAgICAgICAgICAgIC8vIC0+IDZcbiAqIH0pO1xuICpcbiAqIGBgYFxuICpcbiAqIE5vdGUgdGhhdCB0aGUgaW5wdXQgY2hhbm5lbCAqbXVzdCogYmUgY2xvc2VkIGF0IHNvbWUgcG9pbnQsIG9yIG5vIHZhbHVlIHdpbGxcbiAqIGV2ZXIgYXBwZWFyIG9uIHRoZSBvdXRwdXQgY2hhbm5lbC4gVGhlIGNsb3Npbmcgb2YgdGhlIGNoYW5uZWwgaXMgd2hhdFxuICogc2lnbmlmaWVzIHRoYXQgdGhlIHJlZHVjdGlvbiBzaG91bGQgYmUgY29tcGxldGVkLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwLW9wc1xuICogQHBhcmFtIHttb2R1bGU6Y3NwLW9wcy5SZWR1Y2VyfSBmbiBUaGUgcmVkdWNlciBmdW5jdGlvbiByZXNwb25zaWJsZSBmb3IgdHVybmluZ1xuICogICAgIHRoZSBzZXJpZXMgb2YgY2hhbm5lbCB2YWx1ZXMgaW50byBhIHNpbmdsZSBvdXRwdXQgdmFsdWUuXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuQ2hhbm5lbH0gY2hhbm5lbCBUaGUgY2hhbm5lbCB3aG9zZSB2YWx1ZXMgYXJlIGJlaW5nXG4gKiAgICAgcmVkdWNlZCBpbnRvIGEgc2luZ2xlIG91dHB1dCB2YWx1ZS5cbiAqIEBwYXJhbSB7Kn0gaW5pdCBUaGUgaW5pdGlhbCB2YWx1ZSB0byBmZWVkIGludG8gdGhlIHJlZHVjZXIgZnVuY3Rpb24gZm9yIHRoZVxuICogICAgIGZpcnN0IHJlZHVjdGlvbiBzdGVwLlxuICogQHJldHVybiB7bW9kdWxlOmNzcC5DaGFubmVsfSBBIGNoYW5uZWwgdGhhdCB3aWxsLCB3aGVuIHRoZSBpbnB1dCBjaGFubmVsXG4gKiAgICAgY2xvc2VzLCBoYXZlIHRoZSByZWR1Y2VkIHZhbHVlIHB1dCBpbnRvIGl0LiBXaGVuIHRoaXMgdmFsdWUgaXMgdGFrZW4sIHRoZVxuICogICAgIGNoYW5uZWwgd2lsbCBhdXRvbWF0aWNhbGx5IGNsb3NlLlxuICovXG5mdW5jdGlvbiByZWR1Y2UoZm4sIGNoYW5uZWwsIGluaXQpIHtcbiAgY29uc3Qgb3V0cHV0ID0gY2hhbigpO1xuXG4gIGdvKGFzeW5jICgpID0+IHtcbiAgICBsZXQgYWNjID0gaW5pdDtcbiAgICBmb3IgYXdhaXQgKGNvbnN0IHZhbHVlIG9mIGNoYW5uZWwpIHtcbiAgICAgIGFjYyA9IGZuKGFjYywgdmFsdWUpO1xuICAgIH1cbiAgICBzZW5kQXN5bmMob3V0cHV0LCBhY2MsICgpID0+IGNsb3NlKG91dHB1dCkpO1xuICB9KTtcblxuICByZXR1cm4gb3V0cHV0O1xufVxuXG4vKipcbiAqIFNlbmRzIGFsbCB2YWx1ZXMgZnJvbSBhbiBpdGVyYWJsZSB0byB0aGUgc3VwcGxpZWQgY2hhbm5lbC5cbiAqXG4gKiBJZiBubyBjaGFubmVsIGlzIHBhc3NlZCB0byB0aGlzIGZ1bmN0aW9uLCBhIG5ldyBjaGFubmVsIGlzIGNyZWF0ZWQuIEluXG4gKiBlZmZlY3QsIHRoaXMgZGlyZWN0bHkgY29udmVydHMgYW4gaXRlcmFibGUgaW50byBhIGNoYW5uZWwgd2l0aCB0aGUgc2FtZVxuICogdmFsdWVzIG9uIGl0LlxuICpcbiAqIFRoZSBjaGFubmVsIGlzIGNsb3NlZCBhZnRlciB0aGUgZmluYWwgaXRlcmFibGUgdmFsdWUgaXMgc2VudCB0byBpdC5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHdpbGwgY29udmVydCBhbnkgSmF2YVNjcmlwdCBvYmplY3QgdGhhdCBpbXBsZW1lbnRzIHRoZSBpdGVyYWJsZVxuICogcHJvdG9jb2wuIEluIG90aGVyIHdvcmRzLCBpZiBpdCB3b3JrcyBpbiBhIGBmb3IuLi5vZmAgc3RhdGVtZW50LCBpdCB3aWxsIHdvcmtcbiAqIGhlcmUuXG4gKlxuICogYGBgXG4gKiBpbXBvcnQgeyBnbywgY2hhbiwgcmVjdiwgaXNDbG9zZWQgfSBmcm9tIFwiQGNzcFwiO1xuICogaW1wb3J0IHsgdG9DaGFubmVsIH0gZnJvbSBcIkBvcHNcIjtcbiAqXG4gKiBjb25zdCBpbnB1dCA9IFsxLCAyLCAzXTtcbiAqIGNvbnN0IG91dHB1dCA9IHRvQ2hhbm5lbChpbnB1dCk7XG4gKlxuICogZ28oYXN5bmMgKCkgPT4ge1xuICogICBjb25zb2xlLmxvZyhhd2FpdCByZWN2KG91dHB1dCkpOyAgICAgLy8gLT4gMVxuICogICBjb25zb2xlLmxvZyhhd2FpdCByZWN2KG91dHB1dCkpOyAgICAgLy8gLT4gMlxuICogICBjb25zb2xlLmxvZyhhd2FpdCByZWN2KG91dHB1dCkpOyAgICAgLy8gLT4gM1xuICogICBjb25zb2xlLmxvZyhpc0Nsb3NlZChvdXRwdXQpKTsgICAgICAgLy8gLT4gdHJ1ZVxuICogfSk7XG4gKiBgYGBcbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcC1vcHNcbiAqIEBwYXJhbSB7aXRlcmFibGV9IGl0ZXJhYmxlIFRoZSBpdGVyYWJsZSBjb250YWluaW5nIHRoZSB2YWx1ZXMgdG8gYmUgc2VudCB0b1xuICogICAgIHRoZSBjaGFubmVsLlxuICogQHBhcmFtIHttb2R1bGU6Y3NwLkNoYW5uZWx9IFtjaGFubmVsXSBUaGUgY2hhbm5lbCBvbnRvIHdoaWNoIHRvIHB1dCBhbGwgb2ZcbiAqICAgICB0aGUgYXJyYXkgZWxlbWVudHMuIElmIHRoaXMgaXMgbm90IHByZXNlbnQsIGEgbmV3IGNoYW5uZWwgd2lsbCBiZVxuICogICAgIGNyZWF0ZWQuXG4gKiBAcmV0dXJuIHttb2R1bGU6Y3NwLkNoYW5uZWx9IHRoZSBjaGFubmVsIG9udG8gd2hpY2ggdGhlIGFycmF5IGVsZW1lbnRzIGFyZVxuICogICAgIHB1dC4gVGhpcyBpcyB0aGUgc2FtZSBhcyB0aGUgaW5wdXQgY2hhbm5lbCwgYnV0IGlmIG5vIGlucHV0IGNoYW5uZWwgaXNcbiAqICAgICBzcGVjaWZpZWQsIHRoaXMgd2lsbCBiZSBhIG5ldyBjaGFubmVsLiBJdCB3aWxsIGNsb3NlIHdoZW4gdGhlIGZpbmFsIHZhbHVlXG4gKiAgICAgaXMgdGFrZW4gZnJvbSBpdC5cbiAqL1xuZnVuY3Rpb24gdG9DaGFubmVsKGl0ZXJhYmxlLCBjaGFubmVsID0gY2hhbihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gIGdvKGFzeW5jICgpID0+IHtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgaXRlcmFibGUpIHtcbiAgICAgIGF3YWl0IHNlbmQoY2hhbm5lbCwgaXRlbSk7XG4gICAgfVxuICAgIGNsb3NlKGNoYW5uZWwpO1xuICB9KTtcblxuICByZXR1cm4gY2hhbm5lbDtcbn1cblxuLyoqXG4gKiBSZWNlaXZlcyBhbGwgb2YgdGhlIHZhbHVlcyBmcm9tIGEgY2hhbm5lbCBhbmQgcHVzaGVzIHRoZW0gaW50byBhbiBhcnJheS5cbiAqXG4gKiBJZiBubyBhcnJheSBpcyBwYXNzZWQgdG8gdGhpcyBmdW5jdGlvbiwgYSBuZXcgKGVtcHR5KSBvbmUgaXMgY3JlYXRlZC4gSW5cbiAqIGVmZmVjdCwgdGhpcyBkaXJlY3RseSBjb252ZXJ0cyBhIGNoYW5uZWwgaW50byBhbiBhcnJheSB3aXRoIHRoZSBzYW1lIHZhbHVlcy5cbiAqIEVpdGhlciB3YXksIHRoaXMgb3BlcmF0aW9uIGNhbm5vdCBjb21wbGV0ZSB1bnRpbCB0aGUgaW5wdXQgY2hhbm5lbCBpcyBjbG9zZWQuXG4gKlxuICogVGhpcyBmdW5jdGlvbiByZXR1cm5zIGEgY2hhbm5lbC4gV2hlbiB0aGUgZmluYWwgYXJyYXkgaXMgcHJvZHVjZWQsIGl0IGlzIHNlbnRcbiAqIHRvIHRoaXMgY2hhbm5lbCwgYW5kIHdoZW4gdGhhdCB2YWx1ZSBpcyByZWNlaXZlZCBmcm9tIGl0LCB0aGUgY2hhbm5lbCBpc1xuICogY2xvc2VkLlxuICpcbiAqIGBgYFxuICogaW1wb3J0IHsgZ28sIGNoYW4sIHNlbmQsIHJlY3YsIGNsb3NlIH0gZnJvbSBcIkBjc3BcIjtcbiAqIGltcG9ydCB7IHRvQXJyYXkgfSBmcm9tIFwiQG9wc1wiO1xuICpcbiAqIGNvbnN0IGlucHV0ID0gY2hhbigpO1xuICogY29uc3Qgb3V0cHV0ID0gdG9BcnJheShpbnB1dCk7XG4gKlxuICogZ28oYXN5bmMgKCkgPT4ge1xuICogICBhd2FpdCBzZW5kKGlucHV0LCAxKTtcbiAqICAgYXdhaXQgc2VuZChpbnB1dCwgMik7XG4gKiAgIGF3YWl0IHNlbmQoaW5wdXQsIDMpO1xuICogICBjbG9zZShpbnB1dCk7XG4gKiB9KTtcbiAqXG4gKiBnbyhhc3luYyAoKSA9PiB7XG4gKiAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlY3Yob3V0cHV0KTtcbiAqICAgY29uc29sZS5sb2cocmVzdWx0KTsgICAgICAgICAgICAgICAgICAgICAvLyAtPiBbMSwgMiwgM11cbiAqIH0pO1xuICogYGBgXG4gKlxuICogTm90ZSB0aGF0IHRoZSBpbnB1dCBjaGFubmVsICptdXN0KiBiZSBjbG9zZWQgYXQgc29tZSBwb2ludCwgb3Igbm8gdmFsdWUgd2lsbFxuICogZXZlciBhcHBlYXIgb24gdGhlIG91dHB1dCBjaGFubmVsLiBUaGUgY2xvc2luZyBvZiB0aGUgY2hhbm5lbCBpcyB3aGF0XG4gKiBzaWduaWZpZXMgdGhhdCBhbGwgb2YgdGhlIHZhbHVlcyBuZWVkZWQgdG8gbWFrZSB0aGUgYXJyYXkgYXJlIG5vdyBhdmFpbGFibGUuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3Atb3BzXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuQ2hhbm5lbH0gY2hhbm5lbCBUaGUgY2hhbm5lbCBmcm9tIHdoaWNoIHZhbHVlcyBhcmVcbiAqICAgICByZWNlaXZlZCB0byBwdXQgaW50byB0aGUgYXJyYXkuXG4gKiBAcGFyYW0ge2FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBwdXQgdGhlIGNoYW5uZWwgdmFsdWVzIGludG8uIElmIHRoaXMgaXNcbiAqICAgICBub3QgcHJlc2VudCwgYSBuZXcsIGVtcHR5IGFycmF5IHdpbGwgYmUgY3JlYXRlZC5cbiAqIEByZXR1cm4ge21vZHVsZTpjc3AuQ2hhbm5lbH0gQSBjaGFubmVsIHRoYXQgd2lsbCwgd2hlbiB0aGUgaW5wdXQgY2hhbm5lbFxuICogICAgIGNsb3NlcywgaGF2ZSB0aGUgYXJyYXkgb2YgY2hhbm5lbCB2YWx1ZXMgcHV0IG9udG8gaXQuIFdoZW4gdGhpcyBhcnJheSBpc1xuICogICAgIHJlY2VpdmVkLCB0aGUgY2hhbm5lbCB3aWxsIGF1dG9tYXRpY2FsbHkgY2xvc2UuXG4gKi9cbmZ1bmN0aW9uIHRvQXJyYXkoY2hhbm5lbCwgYXJyYXkgPSBbXSkge1xuICByZXR1cm4gcmVkdWNlKFxuICAgIChhY2MsIGlucHV0KSA9PiB7XG4gICAgICBhY2MucHVzaChpbnB1dCk7XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sXG4gICAgY2hhbm5lbCxcbiAgICBhcnJheVxuICApO1xufVxuXG5leHBvcnQgeyByZWR1Y2UsIHRvQ2hhbm5lbCwgdG9BcnJheSB9O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG5cbi8qKlxuICogQSBzZXQgb2YgY2hhbm5lbCBvcGVyYXRpb24gZnVuY3Rpb25zIGZvciByb3V0aW5nIGNoYW5uZWxzIHRvIG90aGVyIGNoYW5uZWxzXG4gKiBpbiBkaWZmZXJlbnQgd2F5cy5cbiAqXG4gKiBJbiBlYWNoIG9mIHRoZXNlIGZ1bmN0aW9ucywgdGhlIHNvdXJjZSBjaGFubmVsIHdpbGwgbm90IGJlIGF2YWlsYWJsZSB0byBiZVxuICogdGFrZW4gZnJvbSwgYXMgYWxsIG9mIHRoZSBzb3VyY2UgY2hhbm5lbHMgd2lsbCBoYXZlIHRoZWlyIHZhbHVlcyB0YWtlbiBieSB0aGVcbiAqIHByb2Nlc3NlcyB3aXRoaW4gdGhlc2UgZnVuY3Rpb25zLiBUaGUgbG9uZSBleGNlcHRpb24gaXMgYHRhcGAsIHdoZXJlIHRoZVxuICogcmVndWxhciBmdW5jdGlvbiBvZiB0aGUgc291cmNlIGNoYW5uZWwgd2lsbCBiZSByZXN0b3JlZCBpZiBhbGwgdGFwcyBhcmVcbiAqIHJlbW92ZWQuIEV2ZW4gc28sIHdoaWxlIGF0IGxlYXN0IG9uZSB0YXAgaXMgaW4gcGxhY2UsIHRoZSBzb3VyY2UgY2hhbm5lbFxuICogY2Fubm90IGJlIHRha2VuIGZyb20uXG4gKlxuICogQG1vZHVsZSBvcHMvZmxvd1xuICogQHByaXZhdGVcbiAqL1xuXG5pbXBvcnQge1xuICBnbyxcbiAgY2hhbixcbiAgc2VuZCxcbiAgcmVjdixcbiAgc2VsZWN0LFxuICBzZW5kQXN5bmMsXG4gIHJlY3ZBc3luYyxcbiAgY2xvc2UsXG4gIENMT1NFRFxufSBmcm9tIFwiQGNoYW5rby9jc3BcIjtcblxuaW1wb3J0IHsgaXNOdW1iZXIgfSBmcm9tIFwibW9kdWxlcy9jb21tb25cIjtcblxuY29uc3QgVEFQUyA9IFN5bWJvbChcIm11bHRpdGFwL3RhcHNcIik7XG5cbi8qKlxuICogUGlwZXMgdGhlIHZhbHVlcyBmcm9tIG9uZSBjaGFubmVsIHRvIGFub3RoZXIgY2hhbm5lbC5cbiAqXG4gKiBUaGlzIHRpZXMgdHdvIGNoYW5uZWxzIHRvZ2V0aGVyIHNvIHRoYXQgcHV0cyBvbiB0aGUgc291cmNlIGNoYW5uZWwgY2FuIGJlXG4gKiB0YWtlbiBvZmYgdGhlIGRlc3RpbmF0aW9uIGNoYW5uZWwuIFRoaXMgZG9lcyBub3QgZHVwbGljYXRlIHZhbHVlcyBpbiBhbnkgd2F5O1xuICogaWYgYW5vdGhlciBwcm9jZXNzIHRha2VzIGEgdmFsdWUgb2ZmIHRoZSBzb3VyY2UgY2hhbm5lbCwgaXQgd2lsbCBuZXZlciBhcHBlYXJcbiAqIG9uIHRoZSBkZXN0aW5hdGlvbiBjaGFubmVsLiBJbiBtb3N0IGNhc2VzIHlvdSB3aWxsIG5vdCB3YW50IHRvIHRha2UgdmFsdWVzXG4gKiBvZmYgYSBjaGFubmVsIG9uY2UgaXQncyBwaXBlZCB0byBhbm90aGVyIGNoYW5uZWwsIHNpbmNlIGl0J3MgZGlmZmljdWx0IHRvXG4gKiBrbm93IHdoaWNoIHZhbHVlcyB3aWxsIGdvIHRvIHdoaWNoIGNoYW5uZWwuXG4gKlxuICogQ2xvc2luZyBlaXRoZXIgY2hhbm5lbCB3aWxsIGJyZWFrIHRoZSBjb25uZWN0aW9uIGJldHdlZW4gdGhlIHR3by4gSWYgdGhlXG4gKiBzb3VyY2UgY2hhbm5lbCBpcyBjbG9zZWQsIHRoZSBkZXN0aW5hdGlvbiBjaGFubmVsIHdpbGwgYnkgZGVmYXVsdCBhbHNvIGJlXG4gKiBjbG9zZWQuIEhvd2V2ZXIsIHBhc3NpbmcgYHRydWVgIGFzIHRoZSB0aGlyZCBwYXJhbWV0ZXIgd2lsbCBjYXVzZSB0aGVcbiAqIGRlc3RpbmF0aW9uIGNoYW5uZWwgdG8gcmVtYWluIG9wZW4gZXZlbiB3aGVuIHRoZSBzb3VyY2UgY2hhbm5lbCBpcyBjbG9zZWRcbiAqICh0aGUgY29ubmVjdGlvbiBpcyBzdGlsbCBicm9rZW4gaG93ZXZlcikuXG4gKlxuICogQmVjYXVzZSBvZiB0aGUgYWJpbGl0eSB0byBsZWF2ZSB0aGUgZGVzdGluYXRpb24gY2hhbm5lbCBvcGVuLCBhIHBvc3NpYmxlIHVzZVxuICogY2FzZSBmb3IgdGhpcyBmdW5jdGlvbiBpcyB0byB3cmFwIHRoZSBkZXN0aW5hdGlvbiBjaGFubmVsKHMpIG9mIG9uZSBvZiB0aGVcbiAqIG90aGVyIGZsb3cgY29udHJvbCBmdW5jdGlvbnMgYmVsb3cgdG8gaGF2ZSBhIGNoYW5uZWwgdGhhdCBzdXJ2aXZlcyB0aGUgc291cmNlXG4gKiBjaGFubmVsIGNsb3NpbmcuIFRoZSByZXN0IG9mIHRob3NlIGZ1bmN0aW9ucyAoYXNpZGUgZnJvbSB0aGUgc3BlY2lhbC1jYXNlXG4gKiBge0BsaW5rIG1vZHVsZTpjc3Atb3BzLnRhcHx0YXB9YCkgYXV0b21hdGljYWxseSBjbG9zZSB0aGVpciBkZXN0aW5hdGlvbiBjaGFubmVsc1xuICogd2hlbiB0aGUgc291cmNlIGNoYW5uZWxzIGNsb3NlLlxuICpcbiAqIGBgYFxuICogaW1wb3J0IHsgZ28sIGNoYW4sIHNlbmQsIHJlY3YsIGNsb3NlLCBpc0Nsb3NlZCB9IGZyb20gXCJAY3NwXCI7XG4gKiBpbXBvcnQgeyBwaXBlIH0gZnJvbSBcIkBvcHNcIjtcbiAqXG4gKiBjb25zdCBpbnB1dCA9IGNoYW4oKTtcbiAqIGNvbnN0IG91dHB1dCA9IHBpcGUoaW5wdXQsIGNoYW4oKSk7XG4gKlxuICogZ28oYXN5bmMgKCkgPT4ge1xuICogICBhd2FpdCBzZW5kKGlucHV0LCAxKTtcbiAqICAgYXdhaXQgc2VuZChpbnB1dCwgMik7XG4gKiAgIGNsb3NlKGlucHV0KTtcbiAqIH0pO1xuICpcbiAqIGdvKGFzeW5jICgpID0+IHtcbiAqICAgY29uc29sZS5sb2coYXdhaXQgcmVjdihvdXRwdXQpKTsgICAgICAvLyAtPiAxXG4gKiAgIGNvbnNvbGUubG9nKGF3YWl0IHJlY3Yob3V0cHV0KSk7ICAgICAgLy8gLT4gMlxuICogICBjb25zb2xlLmxvZyhpc0Nsb3NlZChvdXRwdXQpKTsgICAgICAgIC8vIC0+IHRydWVcbiAqIH0pO1xuICogYGBgXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3Atb3BzXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuQ2hhbm5lbH0gc3JjIFRoZSBzb3VyY2UgY2hhbm5lbC5cbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5DaGFubmVsfSBkZXN0IFRoZSBkZXN0aW5hdGlvbiBjaGFubmVsLlxuICogQHBhcmFtIHtib29sZWFufSBba2VlcE9wZW49ZmFsc2VdIEEgZmxhZyB0byBpbmRpY2F0ZSB0aGF0IHRoZSBkZXN0aW5hdGlvblxuICogICAgIGNoYW5uZWwgc2hvdWxkIGJlIGtlcHQgb3BlbiBhZnRlciB0aGUgc291cmNlIGNoYW5uZWwgY2xvc2VzLiBCeSBkZWZhdWx0XG4gKiAgICAgdGhlIGRlc3RpbmF0aW9uIGNoYW5uZWwgd2lsbCBjbG9zZSB3aGVuIHRoZSBzb3VyY2UgY2hhbm5lbCBjbG9zZXMuXG4gKiBAcmV0dXJuIHttb2R1bGU6Y3NwLkNoYW5uZWx9IFRoZSBkZXN0aW5hdGlvbiBjaGFubmVsLlxuICovXG5mdW5jdGlvbiBwaXBlKHNyYywgZHN0LCBrZWVwT3BlbiA9IGZhbHNlKSB7XG4gIGdvKGFzeW5jICgpID0+IHtcbiAgICBmb3IgKDs7KSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGF3YWl0IHJlY3Yoc3JjKTtcbiAgICAgIGlmICh2YWx1ZSA9PT0gQ0xPU0VEKSB7XG4gICAgICAgIGlmICgha2VlcE9wZW4pIHtcbiAgICAgICAgICBjbG9zZShkc3QpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgaWYgKCEoYXdhaXQgc2VuZChkc3QsIHZhbHVlKSkpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZHN0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgdHdvIG5ldyBjaGFubmVscyBhbmQgcm91dGVzIHZhbHVlcyBmcm9tIGEgc291cmNlIGNoYW5uZWwgdG8gdGhlbVxuICogYWNjb3JkaW5nIHRvIGEgcHJlZGljYXRlIGZ1bmN0aW9uLlxuICpcbiAqIFRoZSBzdXBwbGllZCBmdW5jdGlvbiBpcyBpbnZva2VkIHdpdGggZXZlcnkgdmFsdWUgdGhhdCBpcyBwdXQgb250byB0aGUgc291cmNlXG4gKiBjaGFubmVsLiBUaG9zZSB0aGF0IHJldHVybiBgdHJ1ZWAgYXJlIHJvdXRlZCB0byB0aGUgZmlyc3QgZGVzdGluYXRpb25cbiAqIGNoYW5uZWw7IHRob3NlIHRoYXQgcmV0dXJuIGBmYWxzZWAgYXJlIHJvdXRlZCB0byB0aGUgc2Vjb25kLlxuICpcbiAqIFRoZSBuZXcgY2hhbm5lbHMgYXJlIGNyZWF0ZWQgYnkgdGhlIGZ1bmN0aW9uIGJhc2VkIG9uIHRoZSBidWZmZXIgdmFsdWVzXG4gKiBwYXNzZWQgYXMgdGhlIHRoaXJkIGFuZCBmb3VydGggcGFyYW1ldGVycy4gSWYgb25lIG9yIGJvdGggb2YgdGhlc2UgYXJlXG4gKiBtaXNzaW5nLCBgbnVsbGAsIG9yIGAwYCwgdGhlIGNvcnJlc3BvbmRpbmcgZGVzdGluYXRpb24gY2hhbm5lbCBpcyB1bmJ1ZmZlcmVkLlxuICogSWYgb25lIGlzIGEgcG9zaXRpdmUgaW50ZWdlciwgdGhlIGNvcnJlc3BvbmRpbmcgY2hhbm5lbCBpcyBidWZmZXJlZCBieSBhXG4gKiBmaXhlZCBidWZmZXIgb2YgdGhhdCBzaXplLiBJZiB0aGUgcGFyYW1ldGVyIGZvciBhIGNoYW5uZWwgaXMgYSBidWZmZXIsIHRoZW5cbiAqIHRoYXQgYnVmZmVyIGlzIHVzZWQgdG8gYnVmZmVyIHRoZSBuZXcgY2hhbm5lbC5cbiAqXG4gKiBCb3RoIG5ldyBjaGFubmVscyBhcmUgY2xvc2VkIHdoZW4gdGhlIHNvdXJjZSBjaGFubmVsIGlzIGNsb3NlZC5cbiAqXG4gKlxuICogYGBgXG4gKiBpbXBvcnQgeyBnbywgY2hhbiwgc2VuZCwgY2xvc2UgfSBmcm9tIFwiQGNzcFwiO1xuICogaW1wb3J0IHsgcGFydGl0aW9uIH0gZnJvbSBcIkBvcHNcIjtcbiAqXG4gKiBjb25zdCBpbnB1dCA9IGNoYW4oKTtcbiAqIGNvbnN0IGN0cmwgPSBjaGFuKCk7XG4gKiBjb25zdCBbZXZlbiwgb2RkXSA9IHBhcnRpdGlvbih4ID0+IHggJSAyID09PSAwLCBpbnB1dCwgMywgMyk7XG4gKlxuICogZ28oYXN5bmMgKCkgPT4ge1xuICogICBhd2FpdCBzZW5kKGlucHV0LCAxKTtcbiAqICAgYXdhaXQgc2VuZChpbnB1dCwgMik7XG4gKiAgIGF3YWl0IHNlbmQoaW5wdXQsIDMpO1xuICogICBhd2FpdCBzZW5kKGlucHV0LCA0KTtcbiAqICAgY2xvc2UoaW5wdXQpO1xuICogfSk7XG4gKlxuICogZ28oYXN5bmMgKCkgPT4ge1xuICogICBmb3IgYXdhaXQgKGNvbnN0IHZhbHVlIG9mIGV2ZW4pIHtcbiAqICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XG4gKiAgIH1cbiAqICAgYXdhaXQgc2VuZChjdHJsKTtcbiAqIH0pO1xuICpcbiAqIGdvKGFzeW5jICgpID0+IHtcbiAqICAgYXdhaXQgcmVjdihjdHJsKTtcbiAqICAgZm9yIGF3YWl0IChjb25zdCB2YWx1ZSBvZiBvZGQpIHtcbiAqICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XG4gKiAgIH1cbiAqIH0pO1xuICpcbiAqIC8vIFRoZSBgY3RybGAgY2hhbm5lbCBlbnN1cmVzIHRoYXQgYWxsIG9mIHRoZSB2YWx1ZXMgb24gdGhlIGV2ZW4gY2hhbm5lbCBhcmVcbiAqIC8vIHJlYWQgYmVmb3JlIGFueSBvZiB0aGUgdmFsdWVzIG9uIHRoZSBvZGQgY2hhbm5lbCBhcmUgKHRoaXMgaXMgb25seVxuICogLy8gcG9zc2libGUgYmVjYXVzZSB0aGUgb3V0cHV0IGNoYW5uZWxzIGhhdmUgYnVmZmVycyBiaWcgZW5vdWdoIHRvIG1ha2Ugc3VyZVxuICogLy8gdGhhdCBubyBzZW5kIGlzIGJsb2NrZWQpLlxuICogLy9cbiAqIC8vIC0+IDJcbiAqIC8vIC0+IDRcbiAqIC8vIC0+IDFcbiAqIC8vIC0+IDNcbiAqIGBgYFxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwLW9wc1xuICogQHBhcmFtIHttb2R1bGU6Y3NwLW9wcy5QcmVkaWNhdGV9IGZuIEEgcHJlZGljYXRlIGZ1bmN0aW9uIHVzZWQgdG8gdGVzdCBlYWNoIHZhbHVlXG4gKiBvbiB0aGUgaW5wdXQgY2hhbm5lbC5cbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5DaGFubmVsfSBzcmMgVGhlIHNvdXJjZSBjaGFubmVsLlxuICogQHBhcmFtIHsobnVtYmVyfG1vZHVsZTpjc3AuQnVmZmVyKX0gW3RCdWZmZXI9MF0gQSBidWZmZXIgdXNlZCB0byBjcmVhdGUgdGhlXG4gKiAgICAgZGVzdGluYXRpb24gY2hhbm5lbCB3aGljaCByZWNlaXZlcyBhbGwgdmFsdWVzIHRoYXQgcGFzc2VkIHRoZSBwcmVkaWNhdGUuXG4gKiAgICAgSWYgdGhpcyBpcyBhIG51bWJlciwgYSB7QGxpbmsgbW9kdWxlOmNzcC5GaXhlZEJ1ZmZlcn0gb2YgdGhhdCBzaXplIHdpbGxcbiAqICAgICBiZSB1c2VkLiBJZiB0aGlzIGlzIGAwYCBvciBub3QgcHJlc2VudCwgdGhlIGNoYW5uZWwgd2lsbCBiZSB1bmJ1ZmZlcmVkLlxuICogQHBhcmFtIHsobnVtYmVyfG1vZHVsZTpjc3AuQnVmZmVyKX0gW2ZCdWZmZXI9MF0gQSBidWZmZXIgdXNlZCB0byBjcmVhdGUgdGhlXG4gKiAgICAgZGVzdGluYXRpb24gY2hhbm5lbCB3aGljaCByZWNlaXZlcyBhbGwgdmFsdWVzIHRoYXQgZGlkIG5vdCBwYXNzIHRoZVxuICogICAgIHByZWRpY2F0ZS4gSWYgdGhpcyBpcyBhIG51bWJlciwgYSB7QGxpbmsgbW9kdWxlOmNzcC5GaXhlZEJ1ZmZlcn0gb2YgdGhhdFxuICogICAgIHNpemUgd2lsbCBiZSB1c2VkLiBJZiB0aGlzIGlzIGAwYCBvciBub3QgcHJlc2VudCwgdGhlIGNoYW5uZWwgd2lsbCBiZVxuICogICAgIHVuYnVmZmVyZWQuXG4gKiBAcmV0dXJuIHttb2R1bGU6Y3NwLkNoYW5uZWxbXX0gQW4gYXJyYXkgb2YgdHdvIGNoYW5uZWxzLiBUaGUgZmlyc3QgaXMgdGhlXG4gKiAgICAgZGVzdGluYXRpb24gY2hhbm5lbCB3aXRoIGFsbCBvZiB0aGUgdmFsdWVzIHRoYXQgcGFzc2VkIHRoZSBwcmVkaWNhdGUsIHRoZVxuICogICAgIHNlY29uZCBpcyB0aGUgZGVzdGluYXRpb24gY2hhbm5lbCB3aXRoIGFsbCBvZiB0aGUgdmFsdWVzIHRoYXQgZGlkIG5vdFxuICogICAgIHBhc3MgdGhlIHByZWRpY2F0ZS5cbiAqL1xuZnVuY3Rpb24gcGFydGl0aW9uKGZuLCBzcmMsIHRCdWZmZXIgPSAwLCBmQnVmZmVyID0gMCkge1xuICBjb25zdCB0RHN0ID0gY2hhbih0QnVmZmVyKTtcbiAgY29uc3QgZkRzdCA9IGNoYW4oZkJ1ZmZlcik7XG5cbiAgZ28oYXN5bmMgKCkgPT4ge1xuICAgIGZvciAoOzspIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gYXdhaXQgcmVjdihzcmMpO1xuICAgICAgaWYgKHZhbHVlID09PSBDTE9TRUQpIHtcbiAgICAgICAgY2xvc2UodERzdCk7XG4gICAgICAgIGNsb3NlKGZEc3QpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGF3YWl0IHNlbmQoZm4odmFsdWUpID8gdERzdCA6IGZEc3QsIHZhbHVlKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBbdERzdCwgZkRzdF07XG59XG5cbi8qKlxuICogTWVyZ2VzIG9uZSBvciBtb3JlIGNoYW5uZWxzIGludG8gYSBzaW5nbGUgZGVzdGluYXRpb24gY2hhbm5lbC5cbiAqXG4gKiBWYWx1ZXMgYXJlIGdpdmVuIHRvIHRoZSBkZXN0aW5hdGlvbiBjaGFubmVsIGFzIHRoZXkgYXJlIHNlbnQgdG8gdGhlIHNvdXJjZVxuICogY2hhbm5lbHMuIElmIGBtZXJnZWAgaXMgY2FsbGVkIHdoZW4gdGhlcmUgYXJlIGFscmVhZHkgdmFsdWVzIG9uIG11bHRpcGxlXG4gKiBzb3VyY2UgY2hhbm5lbHMsIHRoZSBvcmRlciB0aGF0IHRoZXkncmUgcHV0IG9udG8gdGhlIGRlc3RpbmF0aW9uIGNoYW5uZWwgaXNcbiAqIHJhbmRvbS5cbiAqXG4gKiBUaGUgZGVzdGluYXRpb24gY2hhbm5lbCBpcyBjcmVhdGVkIGJ5IHRoZSBmdW5jdGlvbiBiYXNlZCBvbiB0aGUgYnVmZmVyIHZhbHVlXG4gKiBwYXNzZWQgYXMgdGhlIHNlY29uZCBwYXJhbWV0ZXIuIElmIHRoaXMgaXMgbWlzc2luZywgYG51bGxgLCBvciBgMGAsIHRoZVxuICogZGVzdGluYXRpb24gY2hhbm5lbCB3aWxsIGJlIHVuYnVmZmVyZWQuIElmIGl0J3MgYSBwb3NpdGl2ZSBpbnRlZ2VyLCB0aGVcbiAqIGRlc3RpbmF0aW9uIGNoYW5uZWwgaXMgYnVmZmVyZWQgYnkgYSBmaXhlZCBidWZmZXIgb2YgdGhhdCBzaXplLiBJZiB0aGVcbiAqIHBhcmFtZXRlciBpcyBhIGJ1ZmZlciwgdGhlbiB0aGF0IGJ1ZmZlciBpcyB1c2VkIHRvIGJ1ZmZlciB0aGUgZGVzdGluYXRpb25cbiAqIGNoYW5uZWwuXG4gKlxuICogQXMgZWFjaCBzb3VyY2UgY2hhbm5lbCBjbG9zZXMsIGl0IGlzIHJlbW92ZWQgZnJvbSB0aGUgbWVyZ2UsIGxlYXZpbmcgdGhlXG4gKiBjaGFubmVscyB0aGF0IGFyZSBzdGlsbCBvcGVuIHRvIGNvbnRpbnVlIG1lcmdpbmcuIFdoZW4gKmFsbCogb2YgdGhlIHNvdXJjZVxuICogY2hhbm5lbHMgY2xvc2UsIHRoZW4gdGhlIGRlc3RpbmF0aW9uIGNoYW5uZWwgaXMgY2xvc2VkLlxuICpcbiAqIGBgYFxuICogaW1wb3J0IHsgZ28sIGNoYW4sIHNlbmQsIHJlY3YgfSBmcm9tIFwiQGNzcFwiO1xuICogaW1wb3J0IHsgbWVyZ2UgfSBmcm9tIFwiQG9wc1wiO1xuICpcbiAqIGNvbnN0IGlucHV0MSA9IGNoYW4oKTtcbiAqIGNvbnN0IGlucHV0MiA9IGNoYW4oKTtcbiAqIGNvbnN0IGlucHV0MyA9IGNoYW4oKTtcbiAqIGNvbnN0IG91dHB1dCA9IG1lcmdlKFtpbnB1dDEsIGlucHV0MiwgaW5wdXQzXSk7XG4gKlxuICogZ28oYXN5bmMgKCkgPT4ge1xuICogICAvLyBCZWNhdXNlIHdlJ3JlIHNlbmRpbmcgdG8gYWxsIHRocmVlIGNoYW5uZWxzIGluIHRoZSBzYW1lXG4gKiAgIC8vIHByb2Nlc3MsIHdlIGtub3cgdGhlIG9yZGVyIGluIHdoaWNoIHRoZSB2YWx1ZXMgd2lsbCBiZVxuICogICAvLyBzZW50IHRvIHRoZSBvdXRwdXQgY2hhbm5lbDsgaW4gZ2VuZXJhbCwgd2Ugd29uJ3Qga25vdyB0aGlzXG4gKiAgIGF3YWl0IHNlbmQoaW5wdXQxLCAxKTtcbiAqICAgYXdhaXQgc2VuZChpbnB1dDIsIDIpO1xuICogICBhd2FpdCBzZW5kKGlucHV0MywgMyk7XG4gKiB9KTtcbiAqXG4gKiBnbyhhc3luYyAoKSA9PiB7XG4gKiAgIGNvbnNvbGUubG9nKGF3YWl0IHJlY3Yob3V0cHV0KSk7ICAgICAgLy8gLT4gMVxuICogICBjb25zb2xlLmxvZyhhd2FpdCByZWN2KG91dHB1dCkpOyAgICAgIC8vIC0+IDJcbiAqICAgY29uc29sZS5sb2coYXdhaXQgcmVjdihvdXRwdXQpKTsgICAgICAvLyAtPiAzXG4gKiB9KTtcbiAqIGBgYFxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwLW9wc1xuICogQHBhcmFtIHttb2R1bGU6Y3NwLkNoYW5uZWxbXX0gc3JjcyBBbiBhcnJheSBvZiBzb3VyY2UgY2hhbm5lbHMuXG4gKiBAcGFyYW0geyhudW1iZXJ8bW9kdWxlOmNzcC5CdWZmZXIpfSBbYnVmZmVyPTBdIEEgYnVmZmVyIHVzZWQgdG8gY3JlYXRlIHRoZVxuICogICAgIGRlc3RpbmF0aW9uIGNoYW5uZWwuIElmIHRoaXMgaXMgYSBudW1iZXIsIGFcbiAqICAgICB7QGxpbmsgbW9kdWxlOmNzcC5GaXhlZEJ1ZmZlcn0gb2YgdGhhdCBzaXplIHdpbGwgYmUgdXNlZC4gSWYgdGhpcyBpcyBgMGBcbiAqICAgICBvciBub3QgcHJlc2VudCwgdGhlIGNoYW5uZWwgd2lsbCBiZSB1bmJ1ZmZlcmVkLlxuICogQHJldHVybiB7bW9kdWxlOmNzcC5DaGFubmVsfSBUaGUgZGVzdGluYXRpb24gY2hhbm5lbCwgd2hpY2ggd2lsbCByZWNlaXZlIGFsbFxuICogICAgIHZhbHVlcyBwdXQgb250byBldmVyeSBzb3VyY2UgY2hhbm5lbC5cbiAqL1xuZnVuY3Rpb24gbWVyZ2Uoc3JjcywgYnVmZmVyID0gMCkge1xuICBjb25zdCBkc3QgPSBjaGFuKGJ1ZmZlcik7XG4gIGNvbnN0IGlucHV0cyA9IHNyY3Muc2xpY2UoKTtcblxuICBnbyhhc3luYyAoKSA9PiB7XG4gICAgZm9yICg7Oykge1xuICAgICAgaWYgKGlucHV0cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjb25zdCB7IHZhbHVlLCBjaGFubmVsIH0gPSBhd2FpdCBzZWxlY3QoaW5wdXRzKTtcbiAgICAgIGlmICh2YWx1ZSA9PT0gQ0xPU0VEKSB7XG4gICAgICAgIGlucHV0cy5zcGxpY2UoaW5wdXRzLmluZGV4T2YoY2hhbm5lbCksIDEpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGF3YWl0IHNlbmQoZHN0LCB2YWx1ZSk7XG4gICAgfVxuICAgIGNsb3NlKGRzdCk7XG4gIH0pO1xuXG4gIHJldHVybiBkc3Q7XG59XG5cbi8qKlxuICogU3BsaXRzIGEgc2luZ2xlIGNoYW5uZWwgaW50byBtdWx0aXBsZSBkZXN0aW5hdGlvbiBjaGFubmVscywgd2l0aCBlYWNoXG4gKiBkZXN0aW5hdGlvbiBjaGFubmVsIHJlY2VpdmluZyBldmVyeSB2YWx1ZSBzZW50IHRvIHRoZSBzb3VyY2UgY2hhbm5lbC5cbiAqXG4gKiBFdmVyeSBwYXJhbWV0ZXIgYWZ0ZXIgdGhlIGZpcnN0IHJlcHJlc2VudHMgdGhlIGJ1ZmZlciBmcm9tIGEgc2luZ2xlXG4gKiBkZXN0aW5hdGlvbiBjaGFubmVsLiBFYWNoIGAwYCBvciBgbnVsbGAgd2lsbCBwcm9kdWNlIGFuIHVuYnVmZmVyZWQgY2hhbm5lbCxcbiAqIHdoaWxlIGVhY2ggcG9zaXRpdmUgaW50ZWdlciB3aWxsIHByb2R1Y2UgYSBjaGFubmVsIGJ1ZmZlcmVkIGJ5IGEgZml4ZWQgYnVmZmVyXG4gKiBvZiB0aGF0IHNpemUuIEVhY2ggYnVmZmVyIHdpbGwgcHJvZHVjZSBhIGJ1ZmZlcmVkIGNoYW5uZWwgYmFja2VkIGJ5IHRoYXRcbiAqIGJ1ZmZlci4gSWYgdGhlcmUgYXJlIG5vIHBhcmFtZXRlcnMgYWZ0ZXIgdGhlIGZpcnN0LCB0aGVuIHR3byB1bmJ1ZmZlcmVkXG4gKiBjaGFubmVscyB3aWxsIGJlIHByb2R1Y2VkIGFzIGEgZGVmYXVsdC5cbiAqXG4gKiBXaGVuIHRoZSBzb3VyY2UgY2hhbm5lbCBpcyBjbG9zZWQsIGFsbCBkZXN0aW5hdGlvbiBjaGFubmVscyB3aWxsIGFsc28gYmVcbiAqIGNsb3NlZC4gSG93ZXZlciwgaWYgZGVzdGluYXRpb24gY2hhbm5lbHMgYXJlIGNsb3NlZCwgdGhleSBkbyBub3RoaW5nIHRvIHRoZVxuICogc291cmNlIGNoYW5uZWwuXG4gKlxuICogYGBgXG4gKiBpbXBvcnQgeyBnbywgY2hhbiwgc2VuZCB9IGZyb20gXCJAY3NwXCI7XG4gKiBpbXBvcnQgeyBzcGxpdCB9IGZyb20gXCJAb3BzXCI7XG4gKlxuICogY29uc3QgaW5wdXQgPSBjaGFuKCk7XG4gKiBjb25zdCBvdXRwdXRzID0gc3BsaXQoaW5wdXQsIDMpO1xuICpcbiAqIGdvKGFzeW5jICgpID0+IHtcbiAqICAgYXdhaXQgc2VuZChpbnB1dCwgMSk7XG4gKiAgIGF3YWl0IHNlbmQoaW5wdXQsIDIpO1xuICogICBhd2FpdCBzZW5kKGlucHV0LCAzKTtcbiAqIH0pO1xuICpcbiAqIGdvKGFzeW5jICgpID0+IHtcbiAqICAgZm9yIGF3YWl0IChjb25zdCBvdXRwdXQgb2Ygb3V0cHV0cykge1xuICogICAgIGNvbnNvbGUubG9nKG91dHB1dCk7XG4gKiAgICAgLy8gLT4gMVxuICogICAgIC8vIC0+IDJcbiAqICAgICAvLyAtPiAzXG4gKiAgIH1cbiAqIH0pO1xuICogYGBgXG4gKlxuICogVGhpcyBmdW5jdGlvbiBtb3ZlcyBpdHMgdmFsdWVzIHRvIHRoZSBvdXRwdXQgY2hhbm5lbHMgYXN5bmNocm9ub3VzbHkuIFRoaXNcbiAqIG1lYW5zIHRoYXQgZXZlbiB3aGVuIHVzaW5nIHVuYnVmZmVyZWQgY2hhbm5lbHMsIGl0IGlzIG5vdCBuZWNlc3NhcnkgZm9yIGFsbFxuICogb3V0cHV0IGNoYW5uZWxzIHRvIGJlIHJlY2VpdmVkIGZyb20gYmVmb3JlIHRoZSBuZXh0IHNlbmQgdG8gdGhlIGlucHV0IGNoYW5uZWxcbiAqIGNhbiBjb21wbGV0ZS5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcC1vcHNcbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5DaGFubmVsfSBzcmMgVGhlIHNvdXJjZSBjaGFubmVsLlxuICogQHBhcmFtIHsuLi4obnVtYmVyfG1vZHVsZTpjc3AuQnVmZmVyKX0gW2J1ZmZlcnM9Ml0gVGhlIGJ1ZmZlcnMgdXNlZCB0byBjcmVhdGVcbiAqICAgICB0aGUgZGVzdGluYXRpb24gY2hhbm5lbHMuIEVhY2ggZW50cnkgaXMgdHJlYXRlZCBzZXBhcmF0ZWx5LiBJZiBvbmUgaXMgYVxuICogICAgIG51bWJlciwgdGhlbiBhIHtAbGluayBtb2R1bGU6Y3NwLkZpeGVkQnVmZmVyfEZpeGVkQnVmZmVyfSBvZiB0aGF0IHNpemVcbiAqICAgICB3aWxsIGJlIHVzZWQuIElmIG9uZSBpcyBhIGAwYCwgdGhlbiB0aGUgY29ycmVzcG9uZGluZyBjaGFubmVsIHdpbGwgYmVcbiAqICAgICB1bmJ1ZmZlcmVkLiAqKkV4Y2VwdGlvbjoqKiBpZiBhIHNpbmdsZSBudW1iZXIgaXMgcGFzc2VkLCB0aGVuIHRoYXQgbnVtYmVyXG4gKiAgICAgb2YgdW5idWZlcnJlZCBjaGFubmVscyB3aWxsIGJlIGNyZWF0ZWQuIFRoaXMgbWVhbnMgdGhhdCB0aGUgZGVmYXVsdCBpcyB0b1xuICogICAgIGNyZWF0ZSB0d28gdW5idWZmZXJlZCBjaGFubmVscy4gVG8gY3JlYXRlIGEgc2luZ2xlIGNoYW5uZWwgd2l0aCBhIGZpeGVkXG4gKiAgICAgYnVmZmVyLCB1c2UgYHtAbGluayBjc3AuZml4ZWR8Zml4ZWR9YCBleHBsaWNpdGx5LlxuICogQHJldHVybiB7bW9kdWxlOmNzcC5DaGFubmVsW119IEFuIGFycmF5IG9mIGRlc3RpbmF0aW9uIGNoYW5uZWxzLlxuICovXG5mdW5jdGlvbiBzcGxpdChzcmMsIC4uLmJ1ZmZlcnMpIHtcbiAgbGV0IGJmcyA9IGJ1ZmZlcnMubGVuZ3RoID09PSAwID8gWzJdIDogYnVmZmVycztcbiAgaWYgKGJmcy5sZW5ndGggPT09IDEgJiYgaXNOdW1iZXIoYmZzWzBdKSkge1xuICAgIGNvbnN0IGNvdW50ID0gYmZzWzBdO1xuICAgIGJmcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgYmZzLnB1c2goMCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgZHN0cyA9IGJmcy5tYXAoYmYgPT4gY2hhbihiZikpO1xuICBjb25zdCBkb25lID0gY2hhbigpO1xuICBsZXQgY291bnQgPSAwO1xuXG4gIGZ1bmN0aW9uIGNhbGxiYWNrKCkge1xuICAgIGlmICgtLWNvdW50ID09PSAwKSB7XG4gICAgICBzZW5kQXN5bmMoZG9uZSk7XG4gICAgfVxuICB9XG5cbiAgZ28oYXN5bmMgKCkgPT4ge1xuICAgIGZvciAoOzspIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gYXdhaXQgcmVjdihzcmMpO1xuICAgICAgaWYgKHZhbHVlID09PSBDTE9TRUQpIHtcbiAgICAgICAgZm9yIChjb25zdCBkc3Qgb2YgZHN0cykge1xuICAgICAgICAgIGNsb3NlKGRzdCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNvdW50ID0gZHN0cy5sZW5ndGg7XG4gICAgICBmb3IgKGNvbnN0IGRzdCBvZiBkc3RzKSB7XG4gICAgICAgIHNlbmRBc3luYyhkc3QsIHZhbHVlLCBjYWxsYmFjayk7XG4gICAgICB9XG4gICAgICBhd2FpdCByZWN2KGRvbmUpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGRzdHM7XG59XG5cbi8qKlxuICogVXRpbGl0eSBmdW5jdGlvbiB0byBhZGQgdGhlIGFiaWxpdHkgdG8gYmUgdGFwcGVkIHRvIGEgY2hhbm5lbCB0aGF0IGlzIGJlaW5nXG4gKiB0YXBwZWQuIFRoaXMgd2lsbCBhZGQgYSBzaW5nbGUgcHJvcGVydHkgdG8gdGhhdCBjaGFubmVsIG9ubHkgKG5hbWVkXG4gKiAnQEBtdWx0aXRhcC90YXBzJyBzbyBhcyB0byBkZWNyZWFzZSB0aGUgY2hhbmNlIG9mIGNvbGxpc2lvbiksIGJ1dCB0aGUgdGFwcGluZ1xuICogZnVuY3Rpb25hbGl0eSBpdHNlbGYgaXMgcHJvdmlkZWQgb3V0c2lkZSB0aGUgY2hhbm5lbCBvYmplY3QuIFRoaXMgbmV3XG4gKiBwcm9wZXJ0eSBpcyBhbiBhcnJheSBvZiB0aGUgY2hhbm5lbHMgdGFwcGluZyB0aGlzIGNoYW5uZWwsIGFuZCBpdCB3aWxsIGJlXG4gKiByZW1vdmVkIGlmIGFsbCB0YXBzIGFyZSByZW1vdmVkLlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5DaGFubmVsfSBzcmMgVGhlIHNvdXJjZSBjaGFubmVsIHRvIGJlIHRhcHBlZC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIG1ha2VUYXAoc3JjKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzcmMsIFRBUFMsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgd3JpdGFibGU6IHRydWUsXG4gICAgdmFsdWU6IFtdXG4gIH0pO1xuXG4gIGNvbnN0IGRvbmUgPSBjaGFuKCk7XG4gIGxldCBjb3VudCA9IDA7XG5cbiAgZnVuY3Rpb24gY2FsbGJhY2soKSB7XG4gICAgaWYgKC0tY291bnQgPT09IDApIHtcbiAgICAgIHNlbmRBc3luYyhkb25lKTtcbiAgICB9XG4gIH1cblxuICBnbyhhc3luYyAoKSA9PiB7XG4gICAgZm9yICg7Oykge1xuICAgICAgY29uc3QgdmFsdWUgPSBhd2FpdCByZWN2KHNyYyk7XG4gICAgICBpZiAodmFsdWUgPT09IENMT1NFRCB8fCBzcmNbVEFQU10ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGRlbGV0ZSBzcmNbVEFQU107XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjb3VudCA9IHNyY1tUQVBTXS5sZW5ndGg7XG4gICAgICBmb3IgKGNvbnN0IHRhcCBvZiBzcmNbVEFQU10pIHtcbiAgICAgICAgc2VuZEFzeW5jKHRhcCwgdmFsdWUsIGNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICAgIGF3YWl0IHJlY3YoZG9uZSk7XG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBUYXBzIGEgY2hhbm5lbCwgc2VuZGluZyBhbGwgb2YgdGhlIHZhbHVlcyBzZW50IHRvIGl0IHRvIHRoZSBkZXN0aW5hdGlvblxuICogY2hhbm5lbC5cbiAqXG4gKiBBIHNvdXJjZSBjaGFubmVsIGNhbiBiZSB0YXBwZWQgbXVsdGlwbGUgdGltZXMsIGFuZCBhbGwgb2YgdGhlIHRhcHBpbmdcbiAqIChkZXN0aW5hdGlvbikgY2hhbm5lbHMgcmVjZWl2ZSBlYWNoIHZhbHVlIHNlbnQgdG8gdGhlIHRhcHBlZCAoc291cmNlKVxuICogY2hhbm5lbC5cbiAqXG4gKiBUaGlzIGlzIGRpZmZlcmVudCBmcm9tIGB7QGxpbmsgbW9kdWxlOmNzcC1vcHMuc3BsaXR8c3BsaXR9YCBpbiB0aGF0IGl0J3NcbiAqIHRlbXBvcmFyeS4gQ2hhbm5lbHMgY2FuIHRhcCBhIGNoYW5uZWwgYW5kIHRoZW4gdW50YXAgaXQsIG11bHRpcGxlIHRpbWVzLCBhc1xuICogbmVlZGVkLiBJZiBhIHNvdXJjZSBjaGFubmVsIGhhcyBhbGwgb2YgaXRzIHRhcHMgcmVtb3ZlZCwgdGhlbiBpdCByZXZlcnRzIHRvIGFcbiAqIG5vcm1hbCBjaGFubmVsLCBqdXN0IGFzIGl0IHdhcyBiZWZvcmUgaXQgd2FzIHRhcHBlZC5cbiAqXG4gKiBBbHNvIHVubGlrZSBge0BsaW5rIG1vZHVsZTpjc3Atb3BzLnNwbGl0fHNwbGl0fWAsIGVhY2ggY2FsbCBjYW4gb25seSB0YXAgb25jZS5cbiAqIEZvciBtdWx0aXBsZSBjaGFubmVscyB0byB0YXAgYSBzb3VyY2UgY2hhbm5lbCwgYHRhcGAgaGFzIHRvIGJlIGNhbGxlZFxuICogbXVsdGlwbGUgdGltZXMuXG4gKlxuICogQ2xvc2luZyBlaXRoZXIgdGhlIHNvdXJjZSBvciBhbnkgb2YgdGhlIGRlc3RpbmF0aW9uIGNoYW5uZWxzIGhhcyBubyBlZmZlY3Qgb25cbiAqIGFueSBvZiB0aGUgb3RoZXIgY2hhbm5lbHMuXG4gKlxuICogYGBgXG4gKiBpbXBvcnQgeyBnbywgY2hhbiwgc2VuZCwgcmVjdiB9IGZyb20gXCJAY3NwXCI7XG4gKiBpbXBvcnQgeyB0YXAgfSBmcm9tIFwiQG9wc1wiO1xuICpcbiAqIGNvbnN0IGlucHV0ID0gY2hhbigpO1xuICogY29uc3QgdGFwcGVyID0gY2hhbigpO1xuICogdGFwKGlucHV0LCB0YXBwZXIpO1xuICpcbiAqIGdvKGFzeW5jICgpID0+IHtcbiAqICAgYXdhaXQgc2VuZChpbnB1dCwgMSk7XG4gKiAgIGF3YWl0IHNlbmQoaW5wdXQsIDIpO1xuICogfSk7XG4gKlxuICogZ28oYXN5bmMgKCkgPT4ge1xuICogICBjb25zb2xlLmxvZyhhd2FpdCByZWN2KHRhcHBlcikpOyAgIC8vIC0+IDFcbiAqICAgY29uc29sZS5sb2coYXdhaXQgcmVjdih0YXBwZXIpKTsgICAvLyAtPiAyXG4gKiB9KTtcbiAqXG4gKiBgYGBcbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcC1vcHNcbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5DaGFubmVsfSBzcmMgVGhlIGNoYW5uZWwgdG8gYmUgdGFwcGVkLlxuICogQHBhcmFtIHttb2R1bGU6Y3NwLkNoYW5uZWx9IFtkZXN0XSBUaGUgY2hhbm5lbCB0YXBwaW5nIHRoZSBzb3VyY2UgY2hhbm5lbC4gSWZcbiAqICAgICB0aGlzIGlzIG5vdCBwcmVzZW50LCBhIG5ldyB1bmJ1ZmZlcmVkIGNoYW5uZWwgd2lsbCBiZSBjcmVhdGVkLlxuICogQHJldHVybiB7bW9kdWxlOmNzcC5DaGFubmVsfSBUaGUgZGVzdGluYXRpb24gY2hhbm5lbC4gVGhpcyBpcyB0aGUgc2FtZSBhcyB0aGVcbiAqICAgICBzZWNvbmQgYXJndW1lbnQsIGlmIHByZXNlbnQ7IG90aGVyd2lzZSBpdCBpcyB0aGUgbmV3bHktY3JlYXRlZCBjaGFubmVsXG4gKiAgICAgdGFwcGluZyB0aGUgc291cmNlIGNoYW5uZWwuXG4gKi9cbmZ1bmN0aW9uIHRhcChzcmMsIGRzdCA9IGNoYW4oKSkge1xuICBpZiAoIXNyY1tUQVBTXSkge1xuICAgIG1ha2VUYXAoc3JjKTtcbiAgfVxuICBpZiAoIXNyY1tUQVBTXS5pbmNsdWRlcyhkc3QpKSB7XG4gICAgc3JjW1RBUFNdLnB1c2goZHN0KTtcbiAgfVxuICByZXR1cm4gZHN0O1xufVxuXG4vKipcbiAqIFVudGFwcyBhIHByZXZpb3VzbHkgdGFwcGluZyBkZXN0aW5hdGlvbiBjaGFubmVsIGZyb20gaXRzIHNvdXJjZSBjaGFubmVsLlxuICpcbiAqIFRoaXMgcmVtb3ZlcyBhIHByZXZpb3VzbHkgY3JlYXRlZCB0YXAuIFRoZSBkZXN0aW5hdGlvbiAodGFwcGluZykgY2hhbm5lbCB3aWxsXG4gKiBzdG9wIHJlY2VpdmluZyB0aGUgdmFsdWVzIHNlbnQgdG8gdGhlIHNvdXJjZSBjaGFubmVsLlxuICpcbiAqIElmIHRoZSBkZXN0aW5hdGlvbiBjaGFubmVsIHdhcyBub3QsIGluIGZhY3QsIHRhcHBpbmcgdGhlIHNvdXJjZSBjaGFubmVsLCB0aGlzXG4gKiBmdW5jdGlvbiB3aWxsIGRvIG5vdGhpbmcuIElmIGFsbCB0YXBzIGFyZSByZW1vdmVkLCB0aGUgc291cmNlIGNoYW5uZWwgcmV2ZXJ0c1xuICogdG8gbm9ybWFsIChpLmUuLCBpdCBubyBsb25nZXIgaGFzIHRoZSB0YXBwaW5nIGNvZGUgYXBwbGllZCB0byBpdCBhbmQgY2FuIGJlXG4gKiB0YWtlbiBmcm9tIGFzIG5vcm1hbCkuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3Atb3BzXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuQ2hhbm5lbH0gc3JjIFRoZSB0YXBwZWQgY2hhbm5lbC5cbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5DaGFubmVsfSBkZXN0IFRoZSBjaGFubmVsIHRoYXQgaXMgdGFwcGluZyB0aGUgc291cmNlXG4gKiAgICAgY2hhbm5lbCB0aGF0IHNob3VsZCBubyBsb25nZXIgYmUgdGFwcGluZyB0aGUgc291cmNlIGNoYW5uZWwuXG4gKi9cbmZ1bmN0aW9uIHVudGFwKHNyYywgZHN0KSB7XG4gIGNvbnN0IHRhcHMgPSBzcmNbVEFQU107XG4gIGlmICh0YXBzKSB7XG4gICAgY29uc3QgaW5kZXggPSB0YXBzLmluZGV4T2YoZHN0KTtcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICB0YXBzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICBpZiAodGFwcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgc2VuZEFzeW5jKHNyYyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwgdGFwcyBmcm9tIGEgc291cmNlIGNoYW5uZWwuXG4gKlxuICogVGhlIHByZXZpb3VzbHktdGFwcGVkIGNoYW5uZWwgcmV2ZXJ0cyB0byBhIG5vcm1hbCBjaGFubmVsLCB3aGlsZSBhbnkgY2hhbm5lbHNcbiAqIHRoYXQgbWlnaHQgaGF2ZSBiZWVuIHRhcHBpbmcgaXQgbm8gbG9uZ2VyIHJlY2VpdmUgdmFsdWVzIGZyb20gdGhlIHNvdXJjZVxuICogY2hhbm5lbC4gSWYgdGhlIHNvdXJjZSBjaGFubmVsIGhhZCBubyB0YXBzLCB0aGlzIGZ1bmN0aW9uIGRvZXMgbm90aGluZy5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcC1vcHNcbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5DaGFubmVsfSBzcmMgVGhlIHRhcHBlZCBjaGFubmVsLiBBbGwgdGFwcyB3aWxsIGJlIHJlbW92ZWRcbiAqICAgICBmcm9tIHRoaXMgY2hhbm5lbC5cbiAqL1xuZnVuY3Rpb24gdW50YXBBbGwoc3JjKSB7XG4gIGlmIChzcmNbVEFQU10pIHtcbiAgICBzcmNbVEFQU10gPSBbXTtcbiAgICBzZW5kQXN5bmMoc3JjKTtcbiAgfVxufVxuXG4vKipcbiAqIE1hcHMgdGhlIHZhbHVlcyBmcm9tIG9uZSBvciBtb3JlIHNvdXJjZSBjaGFubmVscyB0aHJvdWdoIGEgZnVuY3Rpb24sIHNlbmRpbmdcbiAqIHRoZSByZXN1bHRzIHRvIGEgbmV3IGNoYW5uZWwuXG4gKlxuICogVGhlIG1hcHBpbmcgZnVuY3Rpb24gaXMgZ2l2ZW4gb25lIHZhbHVlIGZyb20gZWFjaCBzb3VyY2UgY2hhbm5lbCwgYWZ0ZXIgYXRcbiAqIGxlYXN0IG9uZSB2YWx1ZSBiZWNvbWVzIGF2YWlsYWJsZSBvbiBldmVyeSBzb3VyY2UgY2hhbm5lbC4gVGhlIG91dHB1dCB2YWx1ZVxuICogZnJvbSB0aGUgZnVuY3Rpb24gaXMgdGhlbiBzZW50IHRvIHRoZSBkZXN0aW5hdGlvbiBjaGFubmVsLlxuICpcbiAqIFRoZSBkZXN0aW5hdGlvbiBjaGFubmVsIGlzIGNyZWF0ZWQgYnkgdGhlIGZ1bmN0aW9uIGJhc2VkIG9uIHRoZSBidWZmZXIgdmFsdWVcbiAqIHBhc3NlZCBhcyB0aGUgdGhpcmQgcGFyYW1ldGVyLiBJZiB0aGlzIGlzIG1pc3NpbmcsIGBudWxsYCwgb3IgYDBgLCB0aGVcbiAqIGRlc3RpbmF0aW9uIGNoYW5uZWwgd2lsbCBiZSB1bmJ1ZmZlcmVkLiBJZiBpdCdzIGEgcG9zaXRpdmUgaW50ZWdlciwgdGhlXG4gKiBkZXN0aW5hdGlvbiBjaGFubmVsIGlzIGJ1ZmZlcmVkIGJ5IGEgZml4ZWQgYnVmZmVyIG9mIHRoYXQgc2l6ZS4gSWYgdGhlXG4gKiBwYXJhbWV0ZXIgaXMgYSBidWZmZXIsIHRoZW4gdGhhdCBidWZmZXIgaXMgdXNlZCB0byBidWZmZXIgdGhlIGRlc3RpbmF0aW9uXG4gKiBjaGFubmVsLlxuICpcbiAqIE9uY2UgKmFueSogc291cmNlIGNoYW5uZWwgaXMgY2xvc2VkLCB0aGUgbWFwcGluZyBjZWFzZXMgYW5kIHRoZSBkZXN0aW5hdGlvblxuICogY2hhbm5lbCBpcyBhbHNvIGNsb3NlZC5cbiAqXG4gKiBUaGlzIGlzIG9idmlvdXNseSBzaW1pbGFyIHRvIGEgbWFwIHRyYW5zZHVjZXIsIGJ1dCB1bmxpa2UgYSB0cmFuc2R1Y2VyLCB0aGlzXG4gKiBmdW5jdGlvbiB3b3JrcyB3aXRoIG11bHRpcGxlIGlucHV0IGNoYW5uZWxzLiBUaGlzIGlzIHNvbWV0aGluZyB0aGF0IGFcbiAqIHRyYW5zZHVjZXIgb24gYSBzaW5nbGUgY2hhbm5lbCBpcyB1bmFibGUgdG8gZG8uXG4gKlxuICogYGBgXG4gKiBpbXBvcnQgeyBnbywgY2hhbiwgc2VuZCwgcmVjdiwgY2xvc2UsIGlzQ2xvc2VkIH0gZnJvbSBcIkBjc3BcIjtcbiAqIGltcG9ydCB7IG1hcCB9IGZyb20gXCJAb3BzXCJcbiAqXG4gKiBjb25zdCBpbnB1dDEgPSBjaGFuKCk7XG4gKiBjb25zdCBpbnB1dDIgPSBjaGFuKCk7XG4gKiBjb25zdCBpbnB1dDMgPSBjaGFuKCk7XG4gKiBjb25zdCBvdXRwdXQgPSBtYXAoKHgsIHksIHopID0+IHggKyB5ICsgeiwgW2lucHV0MSwgaW5wdXQyLCBpbnB1dDNdKTtcbiAqXG4gKiBnbyhhc3luYyAoKSA9PiB7XG4gKiAgIGF3YWl0IHNlbmQoaW5wdXQxLCAxKTtcbiAqICAgYXdhaXQgc2VuZChpbnB1dDEsIDIpO1xuICogICBhd2FpdCBzZW5kKGlucHV0MSwgMyk7XG4gKiB9KTtcbiAqXG4gKiBnbyhhc3luYyAoKSA9PiB7XG4gKiAgIGF3YWl0IHNlbmQoaW5wdXQyLCAxMCk7XG4gKiAgIGF3YWl0IHNlbmQoaW5wdXQyLCAyMCk7XG4gKiAgIGNsb3NlKGlucHV0Mik7XG4gKiB9KTtcbiAqXG4gKiBnbyhhc3luYyAoKSA9PiB7XG4gKiAgIGF3YWl0IHNlbmQoaW5wdXQzLCAxMDApO1xuICogICBhd2FpdCBzZW5kKGlucHV0MywgMjAwKTtcbiAqICAgYXdhaXQgc2VuZChpbnB1dDMsIDMwMCk7XG4gKiB9KTtcbiAqXG4gKiBnbyhhc3luYyAoKSA9PiB7XG4gKiAgIGNvbnNvbGUubG9nKGF3YWl0IHJlY3Yob3V0cHV0KSk7ICAgICAvLyAtPiAxMTFcbiAqICAgY29uc29sZS5sb2coYXdhaXQgcmVjdihvdXRwdXQpKTsgICAgIC8vIC0+IDIyMlxuICogICAvLyBPdXRwdXQgY2xvc2VzIG5vdyBiZWNhdXNlIGlucHV0MiBjbG9zZXMgYWZ0ZXIgMiB2YWx1ZXNcbiAqICAgY29uc29sZS5sb2coaXNDbG9zZWQob3V0cHV0KSk7ICAgICAgIC8vIC0+IHRydWVcbiAqIH0pO1xuICogYGBgXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3Atb3BzXG4gKiBAcGFyYW0ge21vZHVsZTpjc3Atb3BzLk1hcHBlcn0gZm4gVGhlIG1hcHBpbmcgZnVuY3Rpb24uIFRoaXMgc2hvdWxkIGhhdmUgb25lXG4gKiAgICAgcGFyYW1ldGVyIGZvciBlYWNoIHNvdXJjZSBjaGFubmVsIGFuZCByZXR1cm4gYSBzaW5nbGUgdmFsdWUuXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuQ2hhbm5lbFtdfSBzcmNzIFRoZSBzb3VyY2UgY2hhbm5lbHMuXG4gKiBAcGFyYW0geyhudW1iZXJ8bW9kdWxlOmNzcC5CdWZmZXIpfSBbYnVmZmVyPTBdIEEgYnVmZmVyIHVzZWQgdG8gY3JlYXRlIHRoZVxuICogICAgIGRlc3RpbmF0aW9uIGNoYW5uZWwuIElmIHRoaXMgaXMgYSBudW1iZXIsIGFcbiAqICAgICB7QGxpbmsgbW9kdWxlOmNzcC5GaXhlZEJ1ZmZlcn0gb2YgdGhhdCBzaXplIHdpbGwgYmUgdXNlZC4gSWYgdGhpcyBpcyBgMGBcbiAqICAgICBvciBub3QgcHJlc2VudCwgdGhlIGNoYW5uZWwgd2lsbCBiZSB1bmJ1ZmZlcmVkLlxuICogQHJldHVybiB7bW9kdWxlOmNzcC5DaGFubmVsfSBUaGUgZGVzdGluYXRpb24gY2hhbm5lbC5cbiAqL1xuZnVuY3Rpb24gbWFwKGZuLCBzcmNzLCBidWZmZXIgPSAwKSB7XG4gIGNvbnN0IGRzdCA9IGNoYW4oYnVmZmVyKTtcbiAgY29uc3Qgc3JjbGVuID0gc3Jjcy5sZW5ndGg7XG4gIGNvbnN0IHZhbHVlcyA9IFtdO1xuICBjb25zdCBjYWxsYmFja3MgPSBbXTtcbiAgY29uc3QgdGVtcCA9IGNoYW4oKTtcbiAgbGV0IGNvdW50O1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3JjbGVuOyBpKyspIHtcbiAgICBjYWxsYmFja3NbaV0gPSAoaW5kZXggPT4ge1xuICAgICAgcmV0dXJuIHZhbHVlID0+IHtcbiAgICAgICAgdmFsdWVzW2luZGV4XSA9IHZhbHVlO1xuICAgICAgICBpZiAoLS1jb3VudCA9PT0gMCkge1xuICAgICAgICAgIHNlbmRBc3luYyh0ZW1wLCB2YWx1ZXMuc2xpY2UoKSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSkoaSk7XG4gIH1cblxuICBnbyhhc3luYyAoKSA9PiB7XG4gICAgZm9yICg7Oykge1xuICAgICAgY291bnQgPSBzcmNsZW47XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNyY2xlbjsgaSsrKSB7XG4gICAgICAgIHJlY3ZBc3luYyhzcmNzW2ldLCBjYWxsYmFja3NbaV0pO1xuICAgICAgfVxuICAgICAgY29uc3QgdmFsdWVzID0gYXdhaXQgcmVjdih0ZW1wKTtcbiAgICAgIGZvciAoY29uc3QgdmFsdWUgb2YgdmFsdWVzKSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gQ0xPU0VEKSB7XG4gICAgICAgICAgLy8gT25jZSBhIHNvdXJjZSBjbG9zZXMsIHdlIGNsb3NlIHRoZSBkZXN0aW5hdGlvbiBBTkQgdGhlIHJlc3Qgb2YgdGhlXG4gICAgICAgICAgLy8gc291cmNlcy4gT3RoZXJ3aXNlIHRoZSBzb3VyY2VzIHdpbGwgaGF2ZSBub3RoaW5nIHJlY2VpdmluZyBmcm9tXG4gICAgICAgICAgLy8gdGhlbSBhbmQgc2VuZHMgdG8gdGhlbSB3aWxsIGJsb2NrIGZvcmV2ZXIuIEJ5IGNsb3NpbmcgdGhlbSwgc2VuZHNcbiAgICAgICAgICAvLyB0byB0aGVtIHdpbGwgaW1tZWRpYXRlbHkgcmV0dXJuIGBmYWxzZWAgYW5kIG5vdCBibG9jay5cbiAgICAgICAgICBjbG9zZShkc3QpO1xuICAgICAgICAgIGZvciAoY29uc3Qgc3JjIG9mIHNyY3MpIHtcbiAgICAgICAgICAgIGNsb3NlKHNyYyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYXdhaXQgc2VuZChkc3QsIGZuKC4uLnZhbHVlcykpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGRzdDtcbn1cblxuZXhwb3J0IHsgcGlwZSwgcGFydGl0aW9uLCBtZXJnZSwgc3BsaXQsIHRhcCwgdW50YXAsIHVudGFwQWxsLCBtYXAgfTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG4vKipcbiAqIEEgc2V0IG9mIGNoYW5uZWwgdXRpbGl0aWVzIGZvciBjaGFuZ2luZyB0aGUgdGltaW5nIG9mIGlucHV0cyBiZWluZyBwdXQgb250b1xuICogdGhlIGlucHV0IGNoYW5uZWwuXG4gKlxuICogQG1vZHVsZSBvcHMvdGltaW5nXG4gKiBAcHJpdmF0ZVxuICovXG5cbmltcG9ydCB7XG4gIGdvLFxuICBjaGFuLFxuICBzZW5kLFxuICBzZWxlY3QsXG4gIGNsb3NlLFxuICBDTE9TRUQsXG4gIGlzVGltZWQsXG4gIHRpbWVkQ2hhblxufSBmcm9tIFwiQGNoYW5rby9jc3BcIjtcblxuaW1wb3J0IHsgaXNOdW1iZXIgfSBmcm9tIFwibW9kdWxlcy9jb21tb25cIjtcblxuLyoqXG4gKiBEZWJvdW5jZXMgYW4gaW5wdXQgY2hhbm5lbC5cbiAqXG4gKiBEZWJvdW5jaW5nIGlzIHRoZSBhY3Qgb2YgdHVybmluZyBzZXZlcmFsIGlucHV0IHZhbHVlcyBpbnRvIG9uZS4gRm9yIGV4YW1wbGUsXG4gKiBkZWJvdW5jaW5nIGEgY2hhbm5lbCBkcml2ZW4gYnkgYSBgbW91c2Vtb3ZlYCBldmVudCB3b3VsZCBjYXVzZSBvbmx5IHRoZSBmaW5hbFxuICogYG1vdXNlbW92ZWAgZXZlbnQgdG8gYmUgcHV0IG9udG8gdGhlIGNoYW5uZWwsIGRyb3BwaW5nIGFsbCBvZiB0aGUgb3RoZXIgb25lcy5cbiAqIFRoaXMgY2FuIGJlIGRlc2lyYWJsZSBiZWNhdXNlIGBtb3VzZW1vdmVgIGV2ZW50cyBjb21lIGluIGJ1bmNoZXMsIGJlaW5nXG4gKiBwcm9kdWNlZCBjb250aW51YWxseSB3aGlsZSB0aGUgbW91c2UgaXMgbW92aW5nLCBhbmQgb2Z0ZW4gYWxsIHRoYXQgd2UgcmVhbGx5XG4gKiBjYXJlIGFib3V0IGlzIHRvIGxlYXJuIHdoZXJlIHRoZSBtb3VzZSBlbmRlZCB1cC5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIGRvZXMgdGhpcyBieSBjb250cm9sbGluZyB3aGljaCB2YWx1ZXMgdGhhdCBoYXZlIGJlZW4gc2VudCB0b1xuICogdGhlIHNvdXJjZSBjaGFubmVsIGFyZSBtYWRlIGF2YWlsYWJsZSBvbiB0aGUgZGVzdGluYXRpb24gY2hhbm5lbCwgYW5kIHdoZW4uXG4gKlxuICogVGhlIGBkZWxheWAgcGFyYW1ldGVyIGRldGVybWluZXMgdGhlIGRlYm91bmNlIHRocmVzaG9sZC4gT25jZSB0aGUgZmlyc3QgdmFsdWVcbiAqIGlzIHNlbnQgdG8gdGhlIHNvdXJjZSBjaGFubmVsLCBkZWJvdW5jaW5nIGlzIGluIGVmZmVjdCB1bnRpbCB0aGUgbnVtYmVyIG9mXG4gKiBtaWxsaXNlY29uZHMgaW4gYGRlbGF5YCBwYXNzZXMgd2l0aG91dCBhbnkgb3RoZXIgdmFsdWUgYmVpbmcgcHV0IG9udG8gdGhhdFxuICogY2hhbm5lbC4gSW4gb3RoZXIgd29yZHMsIHRoZSBkZWxheSB3aWxsIGJlIHJlZnJlc2hlZCBpZiBhbm90aGVyIHZhbHVlIGlzIHNlbnRcbiAqIHRvIHRoZSBzb3VyY2UgY2hhbm5lbCBiZWZvcmUgdGhlIGRlbGF5IGVsYXBzZXMuIEFmdGVyIGEgZnVsbCBkZWxheSBpbnRlcnZhbFxuICogcGFzc2VzIHdpdGhvdXQgYSB2YWx1ZSBiZWluZyBzZW50IHRvIHRoZSBzb3VyY2UgY2hhbm5lbCwgdGhlIGxhc3QgdmFsdWUgc2VudFxuICogYmVjb21lcyBhdmFpbGFibGUgb24gdGhlIGRlc3RpbmF0aW9uIGNoYW5uZWwuXG4gKlxuICogVGhpcyBiZWhhdmlvciBjYW4gYmUgbW9kaWZpZWQgdGhyb3VnaCBmb3VyIG9wdGlvbnM6IGBsZWFkaW5nYCwgYHRyYWlsaW5nYCxcbiAqIGBtYXhEZWxheWAsIGFuZCBgY2FuY2VsYC5cbiAqXG4gKiBJZiBib3RoIGBsZWFkaW5nYCBhbmQgYHRyYWlsaW5nYCBhcmUgYHRydWVgLCB2YWx1ZXMgd2lsbCBub3QgYmUgZHVwbGljYXRlZC5cbiAqIFRoZSBmaXJzdCB2YWx1ZSBwdXQgb250byB0aGUgc291cmNlIGNoYW5uZWwgd2lsbCBiZSBwdXQgb250byB0aGUgZGVzdGluYXRpb25cbiAqIGNoYW5uZWwgaW1tZWRpYXRlbHkgKHBlciBgbGVhZGluZ2ApIGFuZCB0aGUgZGVsYXkgd2lsbCBiZWdpbiwgYnV0IGEgdmFsdWVcbiAqIHdpbGwgb25seSBiZSBtYWRlIGF2YWlsYWJsZSBvbiB0aGUgZGVzdGluYXRpb24gY2hhbm5lbCBhdCB0aGUgZW5kIG9mIHRoZVxuICogZGVsYXkgKHBlciBgdHJhaWxpbmdgKSBpZiAqYW5vdGhlciogaW5wdXQgdmFsdWUgd2FzIHB1dCBvbnRvIHRoZSBzb3VyY2VcbiAqIGNoYW5uZWwgYmVmb3JlIHRoZSBkZWxheSBleHBpcmVkLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwLW9wc1xuICogQHBhcmFtIHttb2R1bGU6Y3NwLkNoYW5uZWx9IHNyYyBUaGUgc291cmNlIGNoYW5uZWwuXG4gKiBAcGFyYW0geyhudW1iZXJ8bW9kdWxlOmNzcC5CdWZmZXIpfSBbYnVmZmVyPTBdIEEgYnVmZmVyIHVzZWQgdG8gY3JlYXRlIHRoZVxuICogICAgIGRlc3RpbmF0aW9uIGNoYW5uZWwuIElmIHRoaXMgaXMgYSBudW1iZXIsIGFcbiAqICAgICB7QGxpbmsgbW9kdWxlOmNzcC5GaXhlZEJ1ZmZlcnxGaXhlZEJ1ZmZlcn0gb2YgdGhhdCBzaXplIHdpbGwgYmUgdXNlZC4gSWZcbiAqICAgICB0aGlzIGlzIGAwYCBvciBub3QgcHJlc2VudCwgdGhlIGNoYW5uZWwgd2lsbCBiZSB1bmJ1ZmZlcmVkLlxuICogQHBhcmFtIHtudW1iZXJ9IGRlbGF5IFRoZSBkZWJvdW5jaW5nIGRlbGF5LCBpbiBtaWxsaXNlY29uZHMuXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dIEEgc2V0IG9mIG9wdGlvbnMgdG8gZnVydGhlciBjb25maWd1cmUgdGhlXG4gKiAgICAgZGVib3VuY2luZy5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMubGVhZGluZz1mYWxzZV0gSW5zdGVhZCBvZiBtYWtpbmcgYSB2YWx1ZSBhdmFpbGFibGVcbiAqICAgICBvbiB0aGUgZGVzdGluYXRpb24gY2hhbm5lbCBhZnRlciB0aGUgZGVsYXkgcGFzc2VzLCB0aGUgZmlyc3QgdmFsdWUgcHV0XG4gKiAgICAgb250byB0aGUgc291cmNlIGNoYW5uZWwgaXMgbWFkZSBhdmFpbGFibGUgKmJlZm9yZSogdGhlIGRlbGF5IGJlZ2lucy4gTm9cbiAqICAgICB2YWx1ZSBpcyBhdmFpbGFibGUgb24gdGhlIGRlc3RpbmF0aW9uIGNoYW5uZWwgYWZ0ZXIgdGhlIGRlbGF5IGhhcyBlbGFwc2VkXG4gKiAgICAgKHVubGVzcyBgdHJhaWxpbmdgIGlzIGFsc28gYHRydWVgKS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMudHJhaWxpbmc9dHJ1ZV0gVGhlIGRlZmF1bHQgYmVoYXZpb3IsIHdoZXJlIGEgdmFsdWVcbiAqICAgICBpcyBub3QgbWFkZSBhdmFpbGFibGUgb24gdGhlIGRlc3RpbmF0aW9uIGNoYW5uZWwgdW50aWwgdGhlIGVudGlyZSBkZWxheVxuICogICAgIHBhc3NlcyB3aXRob3V0IGEgbmV3IHZhbHVlIGJlaW5nIHB1dCBvbiB0aGUgc291cmNlIGNoYW5uZWwuXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMubWF4RGVsYXk9MF0gVGhlIG1heGltdW0gZGVsYXkgYWxsb3dlZCBiZWZvcmUgYSB2YWx1ZVxuICogICAgIGlzIHB1dCBvbnRvIHRoZSBkZXN0aW5hdGlvbiBjaGFubmVsLiBEZWJvdW5jaW5nIGNhbiwgaW4gdGhlb3J5LCBnbyBvblxuICogICAgIGZvcmV2ZXIgYXMgbG9uZyBhcyBuZXcgaW5wdXQgdmFsdWVzIGNvbnRpbnVlIHRvIGJlIHB1dCBvbnRvIHRoZSBzb3VyY2VcbiAqICAgICBjaGFubmVsIGJlZm9yZSB0aGUgZGVsYXkgZXhwaXJlcy4gU2V0dGluZyB0aGlzIG9wdGlvbiB0byBhIHBvc2l0aXZlXG4gKiAgICAgbnVtYmVyIHNldHMgdGhlIG1heGltdW0gbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0aGF0IGRlYm91bmNpbmcgY2FuIGdvIG9uXG4gKiAgICAgYmVmb3JlIGl0J3MgZm9yY2VkIHRvIGVuZCwgZXZlbiBpZiBpbiB0aGUgbWlkZGxlIG9mIGEgZGVib3VuY2luZyBkZWxheS5cbiAqICAgICBIYXZpbmcgZGVib3VuY2luZyBlbmQgdGhyb3VnaCB0aGUgbWF4IGRlbGF5IG9wZXJhdGVzIGV4YWN0bHkgYXMgaWYgaXQgaGFkXG4gKiAgICAgZW5kZWQgYmVjYXVzZSBvZiBsYWNrIG9mIGlucHV0OyB0aGUgbGFzdCBpbnB1dCBpcyBtYWRlIGF2YWlsYWJsZSBvbiB0aGVcbiAqICAgICBkZXN0aW5hdGlvbiBjaGFubmVsIChpZiBgdHJhaWxpbmdgIGlzIGB0cnVlYCksIGFuZCB0aGUgbmV4dCBpbnB1dCB3aWxsXG4gKiAgICAgdHJpZ2dlciBhbm90aGVyIGRlYm91bmNlIG9wZXJhdGlvbi5cbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5DaGFubmVsfSBbb3B0aW9ucy5jYW5jZWxdIEEgY2hhbm5lbCB1c2VkIHRvIHNpZ25hbCBhXG4gKiAgICAgY2FuY2VsbGF0aW9uIG9mIHRoZSBkZWJvdW5jaW5nLiBBbnkgdmFsdWUgcHV0IG9udG8gdGhpcyBjaGFubmVsIHdpbGxcbiAqICAgICBjYW5jZWwgdGhlIGN1cnJlbnQgZGVib3VuY2luZyBvcGVyYXRpb24sIGNsb3NpbmcgdGhlIG91dHB1dCBjaGFubmVsIGFuZFxuICogICAgIGRpc2NhcmRpbmcgYW55IHZhbHVlcyB0aGF0IHdlcmUgd2FpdGluZyBmb3IgdGhlIGRlYm91bmNlIHRocmVzaG9sZCB0aW1lclxuICogICAgIHRvIGJlIHNlbnQgdG8gdGhlIG91dHB1dC5cbiAqIEByZXR1cm4ge21vZHVsZTpjc3AuQ2hhbm5lbH0gVGhlIG5ld2x5LWNyZWF0ZWQgZGVzdGluYXRpb24gY2hhbm5lbCwgd2hlcmUgYWxsXG4gKiAgICAgb2YgdGhlIHZhbHVlcyB3aWxsIGJlIGRlYm91bmNlZCBmcm9tIHRoZSBzb3VyY2UgY2hhbm5lbC5cbiAqL1xuZnVuY3Rpb24gZGVib3VuY2Uoc3JjLCBidWZmZXIsIGRlbGF5LCBvcHRpb25zKSB7XG4gIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgIGxlYWRpbmc6IGZhbHNlLFxuICAgIHRyYWlsaW5nOiB0cnVlLFxuICAgIG1heERlbGF5OiAwLFxuICAgIGNhbmNlbDogY2hhbigpXG4gIH07XG4gIGNvbnN0IFtidWYsIGRlbCwgb3B0c10gPSBpc051bWJlcihkZWxheSlcbiAgICA/IFtidWZmZXIsIGRlbGF5LCBPYmplY3QuYXNzaWduKGRlZmF1bHRzLCBvcHRpb25zID8/IHt9KV1cbiAgICA6IFswLCBidWZmZXIsIE9iamVjdC5hc3NpZ24oZGVmYXVsdHMsIGRlbGF5ID8/IHt9KV07XG5cbiAgY29uc3QgZHN0ID0gY2hhbihidWYpO1xuICBjb25zdCB7IGxlYWRpbmcsIHRyYWlsaW5nLCBtYXhEZWxheSwgY2FuY2VsIH0gPSBvcHRzO1xuXG4gIGdvKGFzeW5jICgpID0+IHtcbiAgICBsZXQgdGltZXIgPSBjaGFuKCk7XG4gICAgbGV0IG1heCA9IGNoYW4oKTtcbiAgICBsZXQgY3VycmVudCA9IENMT1NFRDtcblxuICAgIGZvciAoOzspIHtcbiAgICAgIGNvbnN0IHsgdmFsdWUsIGNoYW5uZWwgfSA9IGF3YWl0IHNlbGVjdChbc3JjLCB0aW1lciwgbWF4LCBjYW5jZWxdKTtcblxuICAgICAgaWYgKGNoYW5uZWwgPT09IGNhbmNlbCkge1xuICAgICAgICBjbG9zZShkc3QpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGlmIChjaGFubmVsID09PSBzcmMpIHtcbiAgICAgICAgaWYgKHZhbHVlID09PSBDTE9TRUQpIHtcbiAgICAgICAgICBjbG9zZShkc3QpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdGltaW5nID0gaXNUaW1lZCh0aW1lcik7XG4gICAgICAgIHRpbWVyID0gdGltZWRDaGFuKGRlbCk7XG5cbiAgICAgICAgaWYgKCF0aW1pbmcgJiYgbWF4RGVsYXkgPiAwKSB7XG4gICAgICAgICAgbWF4ID0gdGltZWRDaGFuKG1heERlbGF5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChsZWFkaW5nKSB7XG4gICAgICAgICAgaWYgKCF0aW1pbmcpIHtcbiAgICAgICAgICAgIGF3YWl0IHNlbmQoZHN0LCB2YWx1ZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGN1cnJlbnQgPSB2YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodHJhaWxpbmcpIHtcbiAgICAgICAgICBjdXJyZW50ID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRpbWVyID0gY2hhbigpO1xuICAgICAgICBtYXggPSBjaGFuKCk7XG4gICAgICAgIGlmICh0cmFpbGluZyAmJiBjdXJyZW50ICE9PSBDTE9TRUQpIHtcbiAgICAgICAgICBhd2FpdCBzZW5kKGRzdCwgY3VycmVudCk7XG4gICAgICAgICAgY3VycmVudCA9PT0gQ0xPU0VEO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZHN0O1xufVxuXG4vKipcbiAqIFRocm90dGxlcyBhbiBpbnB1dCBjaGFubmVsLlxuICpcbiAqIFRocm90dGxpbmcgaXMgdGhlIGFjdCBvZiBlbnN1cmluZyB0aGF0IHNvbWV0aGluZyBvbmx5IGhhcHBlbnMgb25jZSBwZXIgdGltZVxuICogaW50ZXJ2YWwuIEluIHRoaXMgY2FzZSwgaXQgbWVhbnMgdGhhdCBhIHZhbHVlIHNlbnQgdG8gdGhlIHNvdXJjZSBjaGFubmVsIGlzXG4gKiBvbmx5IG1hZGUgYXZhaWxhYmxlIHRvIHRoZSBkZXN0aW5hdGlvbiBjaGFubmVsIG9uY2UgcGVyIGEgZ2l2ZW4gbnVtYmVyIG9mXG4gKiBtaWxsaXNlY29uZHMuIEFuIGV4YW1wbGUgdXNhZ2Ugd291bGQgYmUgd2l0aCB3aW5kb3cgc2Nyb2xsIGV2ZW50czsgdGhlc2VcbiAqIGV2ZW50cyBhcmUgbmVhcmx5IGNvbnRpbnVvdXMgYXMgc2Nyb2xsaW5nIGlzIGhhcHBlbmluZywgYW5kIHBlcmhhcHMgd2UgZG9uJ3RcbiAqIHdhbnQgdG8gY2FsbCBhbiBleHBlbnNpdmUgVUkgdXBkYXRpbmcgZnVuY3Rpb24gZXZlcnkgdGltZSBhIHNjcm9sbCBldmVudCBpc1xuICogZmlyZWQuIFdlIGNhbiB0aHJvdHRsZSB0aGUgaW5wdXQgY2hhbm5lbCBhbmQgbWFrZSBpdCBvbmx5IG9mZmVyIHVwIHRoZSBzY3JvbGxcbiAqIGV2ZW50cyBvbmNlIGV2ZXJ5IDEwMCBtaWxsaXNlY29uZHMsIGZvciBpbnN0YW5jZS5cbiAqXG4gKiBUaHJvdHRsaW5nIGlzIGVmZmVjdGVkIGJ5IGNyZWF0aW5nIGEgbmV3IGNoYW5uZWwgYXMgYSB0aHJvdHRsZWQgZGVzdGluYXRpb25cbiAqIGZvciB2YWx1ZXMgc2VudCB0byB0aGUgc291cmNlIGNoYW5uZWwuIFZhbHVlcyB3aWxsIG9ubHkgYXBwZWFyIG9uIHRoYXRcbiAqIGRlc3RpbmF0aW9uIGNoYW5uZWwgb25jZSBwZXIgZGVsYXkgaW50ZXJ2YWw7IG90aGVyIHZhbHVlcyB0aGF0IGFyZSBwdXQgb250b1xuICogdGhlIHNvdXJjZSBjaGFubmVsIGluIHRoZSBtZWFudGltZSBhcmUgZGlzY2FyZGVkLlxuICpcbiAqIFRoZSBgZGVsYXlgIHBhcmFtZXRlciBjb250cm9scyBob3cgb2Z0ZW4gYSB2YWx1ZSBjYW4gYmVjb21lIGF2YWlsYWJsZSBvbiB0aGVcbiAqIGRlc3RpbmF0aW9uIGNoYW5uZWwuIFdoZW4gdGhlIGZpcnN0IHZhbHVlIGlzIHNlbnQgdG8gdGhlIHNvdXJjZSBjaGFubmVsLCBpdFxuICogaXMgaW1tZWRpYXRlbHkgc2VudCB0byB0aGUgZGVzdGluYXRpb24gY2hhbm5lbCBhcyB3ZWxsIGFuZCB0aGUgZGVsYXkgYmVnaW5zLlxuICogQW55IGZ1cnRoZXIgdmFsdWVzIHNlbnQgdG8gdGhlIHNvdXJjZSBjaGFubmVsIGR1cmluZyB0aGF0IGRlbGF5IGFyZSAqbm90KlxuICogcGFzc2VkIHRocm91Z2g7IG9ubHkgd2hlbiB0aGUgZGVsYXkgZXhwaXJlcyBpcyB0aGUgbGFzdCBpbnB1dCB2YWx1ZSBtYWRlXG4gKiBhdmFpbGFibGUgb24gdGhlIGRlc3RpbmF0aW9uIGNoYW5uZWwuIFRoZSBkZWxheSB0aGVuIGJlZ2lucyBhZ2Fpbiwgc28gdGhhdFxuICogZnVydGhlciBpbnB1dHMgYXJlIHNxdWVsY2hlZCB1bnRpbCAqdGhhdCogZGVsYXkgcGFzc2VzLiBUaHJvdHRsaW5nIGNvbnRpbnVlcyxcbiAqIG9ubHkgYWxsb3dpbmcgb25lIHZhbHVlIHRocm91Z2ggcGVyIGludGVydmFsLCB1bnRpbCBhbiBlbnRpcmUgaW50ZXJ2YWwgcGFzc2VzXG4gKiB3aXRob3V0IGlucHV0LlxuICpcbiAqIFRoaXMgYmVoYXZpb3IgY2FuIGJlIG1vZGlmaWVkIGJ5IHRocmVlIG9wdGlvbnM6IGBsZWFkaW5nYCwgYHRyYWlsaW5nYCwgYW5kXG4gKiBgY2FuY2VsYC5cbiAqXG4gKiBJZiBib3RoIGBsZWFkaW5nYCBhbmQgYHRyYWlsaW5nYCBhcmUgYHRydWVgLCB2YWx1ZXMgd2lsbCBub3QgYmUgZHVwbGljYXRlZC5cbiAqIFRoZSBmaXJzdCB2YWx1ZSBzZW50IHRvIHRoZSBzb3VyY2UgY2hhbm5lbCB3aWxsIGJlIHB1dCBvbnRvIHRoZSBkZXN0aW5hdGlvblxuICogY2hhbm5lbCBpbW1lZGlhdGVseSAocGVyIGBsZWFkaW5nYCkgYW5kIHRoZSBkZWxheSB3aWxsIGJlZ2luLCBidXQgYSB2YWx1ZVxuICogd2lsbCBvbmx5IGJlIG1hZGUgYXZhaWxhYmxlIG9uIHRoZSBkZXN0aW5hdGlvbiBjaGFubmVsIGF0IHRoZSBlbmQgb2YgdGhlXG4gKiBkZWxheSAocGVyIGB0cmFpbGluZ2ApIGlmICphbm90aGVyKiBpbnB1dCB2YWx1ZSB3YXMgc2VudCB0byB0aGUgc291cmNlXG4gKiBjaGFubmVsIGJlZm9yZSB0aGUgZGVsYXkgZXhwaXJlZC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcC1vcHNcbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5DaGFubmVsfSBzcmMgVGhlIHNvdXJjZSBjaGFubmVsLlxuICogQHBhcmFtIHsobnVtYmVyfG1vZHVsZTpjc3AuQnVmZmVyKX0gW2J1ZmZlcj0wXSBBIGJ1ZmZlciB1c2VkIHRvIGNyZWF0ZSB0aGVcbiAqICAgICBkZXN0aW5hdGlvbiBjaGFubmVsLiBJZiB0aGlzIGlzIGEgbnVtYmVyLCBhXG4gKiAgICAge0BsaW5rIG1vZHVsZTpjc3AuRml4ZWRCdWZmZXJ8Rml4ZWRCdWZmZXJ9IG9mIHRoYXQgc2l6ZSB3aWxsIGJlIHVzZWQuIElmXG4gKiAgICAgdGhpcyBpcyBgMGAgb3Igbm90IHByZXNlbnQsIHRoZSBjaGFubmVsIHdpbGwgYmUgdW5idWZmZXJlZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBkZWxheSBUaGUgdGhyb3R0bGluZyBkZWxheSwgaW4gbWlsbGlzZWNvbmRzLlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSBBIHNldCBvZiBvcHRpb25zIHRvIGZ1cnRoZXIgY29uZmlndXJlIHRoZVxuICogdGhyb3R0bGluZy5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMubGVhZGluZz10cnVlXSBNYWtlcyB0aGUgdmFsdWUgdGhhdCB0cmlnZ2VyZWQgdGhlXG4gKiAgICAgdGhyb3R0bGluZyBpbW1lZGlhdGVseSBhdmFpbGFibGUgb24gdGhlIGRlc3RpbmF0aW9uIGNoYW5uZWwgYmVmb3JlXG4gKiAgICAgYmVnaW5uaW5nIHRoZSBkZWxheS4gSWYgdGhpcyBpcyBgZmFsc2VgLCB0aGUgZmlyc3QgdmFsdWUgd2lsbCBub3QgYmUgcHV0XG4gKiAgICAgb250byB0aGUgZGVzdGluYXRpb24gY2hhbm5lbCB1bnRpbCBhIGZ1bGwgZGVsYXkgaW50ZXJ2YWwgcGFzc2VzLlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy50cmFpbGluZz10cnVlXSBNYWtlcyB0aGUgbGFzdCB2YWx1ZSBwdXQgb250byB0aGVcbiAqICAgICBzb3VyY2UgY2hhbm5lbCBhdmFpbGFibGUgb24gdGhlIGRlc3RpbmF0aW9uIGNoYW5uZWwgd2hlbiB0aGUgZGVsYXlcbiAqICAgICBleHBpcmVzLiBJZiB0aGlzIGlzIGBmYWxzZWAsIGFueSBpbnB1dHMgdGhhdCBjb21lIGluIGR1cmluZyB0aGUgZGVsYXkgYXJlXG4gKiAgICAgaWdub3JlZCwgYW5kIHRoZSBuZXh0IHZhbHVlIGlzIG5vdCBwdXQgb250byB0aGUgZGVzdGluYXRpb24gY2hhbm5lbCB1bnRpbFxuICogICAgIHRoZSBmaXJzdCBpbnB1dCAqYWZ0ZXIqIHRoZSBkZWxheSBleHBpcmVzLlxuICogQHBhcmFtIHttb2R1bGU6Y3NwLkNoYW5uZWx9IFtvcHRpb25zLmNhbmNlbF0gQSBjaGFubmVsIHVzZWQgdG8gc2lnbmFsIGFcbiAqICAgICBjYW5jZWxsYXRpb24gb2YgdGhlIHRocm90dGxpbmcuIEFueSB2YWx1ZSBwdXQgb250byB0aGlzIGNoYW5uZWwgd2lsbFxuICogICAgIGNhbmNlbCB0aGUgY3VycmVudCB0aHJvdHRsaW5nIG9wZXJhdGlvbiwgY2xvc2luZyB0aGUgb3V0cHV0IGNoYW5uZWwgYW5kXG4gKiAgICAgZGlzY2FyZGluZyBhbnkgdmFsdWVzIHRoYXQgd2VyZSB3YWl0aW5nIGZvciB0aGUgdGhyb3R0bGUgdGhyZXNob2xkIHRpbWVyXG4gKiAgICAgdG8gYmUgc2VudCB0byB0aGUgb3V0cHV0LlxuICogQHJldHVybiB7bW9kdWxlOmNzcC5DaGFubmVsfX0gVGhlIG5ld2x5LWNyZWF0ZWQgZGVzdGluYXRpb24gY2hhbm5lbCwgd2hlcmVcbiAqICAgICBhbGwgb2YgdGhlIHZhbHVlcyB3aWxsIGJlIHRocm90dGxlZCBmcm9tIHRoZSBzb3VyY2UgY2hhbm5lbC5cbiAqL1xuZnVuY3Rpb24gdGhyb3R0bGUoc3JjLCBidWZmZXIsIGRlbGF5LCBvcHRpb25zKSB7XG4gIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgIGxlYWRpbmc6IHRydWUsXG4gICAgdHJhaWxpbmc6IHRydWUsXG4gICAgY2FuY2VsOiBjaGFuKClcbiAgfTtcbiAgY29uc3QgW2J1ZiwgZGVsLCBvcHRzXSA9IGlzTnVtYmVyKGRlbGF5KVxuICAgID8gW2J1ZmZlciwgZGVsYXksIE9iamVjdC5hc3NpZ24oZGVmYXVsdHMsIG9wdGlvbnMgPz8ge30pXVxuICAgIDogWzAsIGJ1ZmZlciwgT2JqZWN0LmFzc2lnbihkZWZhdWx0cywgZGVsYXkgPz8ge30pXTtcblxuICBjb25zdCBkc3QgPSBjaGFuKGJ1Zik7XG4gIGNvbnN0IHsgbGVhZGluZywgdHJhaWxpbmcsIGNhbmNlbCB9ID0gb3B0cztcblxuICBnbyhhc3luYyAoKSA9PiB7XG4gICAgbGV0IHRpbWVyID0gY2hhbigpO1xuICAgIGxldCBjdXJyZW50ID0gQ0xPU0VEO1xuXG4gICAgZm9yICg7Oykge1xuICAgICAgY29uc3QgeyB2YWx1ZSwgY2hhbm5lbCB9ID0gYXdhaXQgc2VsZWN0KFtzcmMsIHRpbWVyLCBjYW5jZWxdKTtcblxuICAgICAgaWYgKGNoYW5uZWwgPT09IGNhbmNlbCkge1xuICAgICAgICBjbG9zZShkc3QpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgaWYgKGNoYW5uZWwgPT09IHNyYykge1xuICAgICAgICBpZiAodmFsdWUgPT09IENMT1NFRCkge1xuICAgICAgICAgIGNsb3NlKGRzdCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0aW1pbmcgPSBpc1RpbWVkKHRpbWVyKTtcbiAgICAgICAgaWYgKCF0aW1pbmcpIHtcbiAgICAgICAgICB0aW1lciA9IHRpbWVkQ2hhbihkZWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGxlYWRpbmcpIHtcbiAgICAgICAgICBpZiAoIXRpbWluZykge1xuICAgICAgICAgICAgYXdhaXQgc2VuZChkc3QsIHZhbHVlKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRyYWlsaW5nKSB7XG4gICAgICAgICAgICBjdXJyZW50ID0gdmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHRyYWlsaW5nKSB7XG4gICAgICAgICAgY3VycmVudCA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRyYWlsaW5nICYmIGN1cnJlbnQgIT09IENMT1NFRCkge1xuICAgICAgICB0aW1lciA9IHRpbWVkQ2hhbihkZWwpO1xuICAgICAgICBhd2FpdCBzZW5kKGRzdCwgY3VycmVudCk7XG4gICAgICAgIGN1cnJlbnQgPSBDTE9TRUQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aW1lciA9IGNoYW4oKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBkc3Q7XG59XG5cbmV4cG9ydCB7IGRlYm91bmNlLCB0aHJvdHRsZSB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==