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
      "../core/lib/chanko-core.js":
      /*!**********************************!*\
        !*** ../core/lib/chanko-core.js ***!
        \**********************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
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

              /*! exports provided: protocols, isImplemented, iterator, isIterable, complete, uncomplete, isCompleted, ensureCompleted, ensureUncompleted, reduce, toFunction, toReducer, toTransducer, isArray, isFunction, isGeneratorFunction, isNumber, isObject, isString */

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
                /* harmony reexport (safe) */


                __webpack_require__.d(__webpack_exports__, "isImplemented", function () {
                  return modules_protocol__WEBPACK_IMPORTED_MODULE_0__["isImplemented"];
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

              /*! exports provided: iterator, isIterable */

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
                 * @memberof module:core
                 * @param {*} value The value to test for iterability.
                 * @return {boolean} Either `true` if the value is iterable
                 *     (`{@link module:core.iterator}` will return an iterator for it) or
                 *     `false` if it is not.
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
                        const value = Object(modules_utils__WEBPACK_IMPORTED_MODULE_1__["isObject"])(input) ? input[Object.keys(input)[0]] : input;
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

                        const k = Object.keys(value)[0];
                        acc[k] = value[k];
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


        var _chanko_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! @chanko/core */
        "../core/lib/chanko-core.js");
        /* harmony import */


        var _chanko_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chanko_core__WEBPACK_IMPORTED_MODULE_0__);
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


        var _chanko_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        /*! @chanko/core */
        "../core/lib/chanko-core.js");
        /* harmony import */


        var _chanko_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_chanko_core__WEBPACK_IMPORTED_MODULE_5__);
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
 * @module ops
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
 * @memberof module:ops
 * @param {module:ops.Reducer} fn The reducer function responsible for turning
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
 * @memberof module:ops
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
 * @memberof module:ops
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
 * `{@link module:ops.tap|tap}`) automatically close their destination channels
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
 * @memberof module:ops
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
 * @memberof module:ops
 * @param {module:ops.Predicate} fn A predicate function used to test each value
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
 * @memberof module:ops
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
 * @memberof module:ops
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
 * This is different from `{@link module:ops.split|split}` in that it's
 * temporary. Channels can tap a channel and then untap it, multiple times, as
 * needed. If a source channel has all of its taps removed, then it reverts to a
 * normal channel, just as it was before it was tapped.
 *
 * Also unlike `{@link module:ops.split|split}`, each call can only tap once.
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
 * @memberof module:ops
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
 * @memberof module:ops
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
 * @memberof module:ops
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
 * @memberof module:ops
 * @param {module:ops.Mapper} fn The mapping function. This should have one
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
 * @memberof module:ops
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
 * @memberof module:ops
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vcHMvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL29wcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vcHMvL2hvbWUvYmFyYW5kaXMvRGV2ZWxvcG1lbnQvcHJvamVjdHMvY2hhbmtvL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jSXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vb3BzL2NzcC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vb3BzL2NzcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vcHMvY3NwL2hvbWUvYmFyYW5kaXMvRGV2ZWxvcG1lbnQvcHJvamVjdHMvY2hhbmtvL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL0FzeW5jR2VuZXJhdG9yLmpzIiwid2VicGFjazovL29wcy9jc3AvaG9tZS9iYXJhbmRpcy9EZXZlbG9wbWVudC9wcm9qZWN0cy9jaGFua28vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvQXdhaXRWYWx1ZS5qcyIsIndlYnBhY2s6Ly9vcHMvY3NwL2hvbWUvYmFyYW5kaXMvRGV2ZWxvcG1lbnQvcHJvamVjdHMvY2hhbmtvL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2F3YWl0QXN5bmNHZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vb3BzL2NzcC9ob21lL2JhcmFuZGlzL0RldmVsb3BtZW50L3Byb2plY3RzL2NoYW5rby9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy93cmFwQXN5bmNHZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vb3BzL2NzcC9ob21lL2JhcmFuZGlzL0RldmVsb3BtZW50L3Byb2plY3RzL2NoYW5rby9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovL29wcy9jc3AvaG9tZS9iYXJhbmRpcy9EZXZlbG9wbWVudC9wcm9qZWN0cy9jaGFua28vbm9kZV9tb2R1bGVzL3NldGltbWVkaWF0ZS9zZXRJbW1lZGlhdGUuanMiLCJ3ZWJwYWNrOi8vb3BzL2NzcC9ob21lL2JhcmFuZGlzL0RldmVsb3BtZW50L3Byb2plY3RzL2NoYW5rby9ub2RlX21vZHVsZXMvdGltZXJzLWJyb3dzZXJpZnkvbWFpbi5qcyIsIndlYnBhY2s6Ly9vcHMvY3NwLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly9vcHMvY3NwL2NvcmUvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL29wcy9jc3AvY29yZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vcHMvY3NwL2NvcmUvc3JjL2luZGV4LmpzIiwid2VicGFjazovL29wcy9jc3AvY29yZS9zcmMvbW9kdWxlcy9pdGVyYXRpb24uanMiLCJ3ZWJwYWNrOi8vb3BzL2NzcC9jb3JlL3NyYy9tb2R1bGVzL3Byb3RvY29sLmpzIiwid2VicGFjazovL29wcy9jc3AvY29yZS9zcmMvbW9kdWxlcy9yZWR1Y3Rpb24uanMiLCJ3ZWJwYWNrOi8vb3BzL2NzcC9jb3JlL3NyYy9tb2R1bGVzL3V0aWxzLmpzIiwid2VicGFjazovL29wcy9jc3Avc3JjL2luZGV4LmpzIiwid2VicGFjazovL29wcy9jc3Avc3JjL21vZHVsZXMvYnVmZmVyLmpzIiwid2VicGFjazovL29wcy9jc3Avc3JjL21vZHVsZXMvY2hhbm5lbC9oYW5kbGVyLmpzIiwid2VicGFjazovL29wcy9jc3Avc3JjL21vZHVsZXMvY2hhbm5lbC9pbmRleC5qcyIsIndlYnBhY2s6Ly9vcHMvY3NwL3NyYy9tb2R1bGVzL2NoYW5uZWwvc2VsZWN0LmpzIiwid2VicGFjazovL29wcy9jc3Avc3JjL21vZHVsZXMvZGlzcGF0Y2hlci5qcyIsIndlYnBhY2s6Ly9vcHMvY3NwL3NyYy9tb2R1bGVzL3Byb2Nlc3MuanMiLCJ3ZWJwYWNrOi8vb3BzL2NzcC9zcmMvbW9kdWxlcy9xdWV1ZS5qcyIsIndlYnBhY2s6Ly9vcHMvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb3BzLy4vc3JjL21vZHVsZXMvY29tbW9uLmpzIiwid2VicGFjazovL29wcy8uL3NyYy9tb2R1bGVzL2NvbnZlcnNpb24uanMiLCJ3ZWJwYWNrOi8vb3BzLy4vc3JjL21vZHVsZXMvZmxvdy5qcyIsIndlYnBhY2s6Ly9vcHMvLi9zcmMvbW9kdWxlcy90aW1pbmcuanMiXSwibmFtZXMiOlsia2V5cyIsIk9iamVjdCIsImluZGV4IiwiayIsIm9iaiIsImN1cnJlbnQiLCJmbiIsInNvcnRGbiIsImlzRnVuY3Rpb24iLCJ2YWx1ZSIsIlN5bWJvbCIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJmdW5jdGlvbkl0ZXJhdG9yIiwiaXNPYmplY3QiLCJvYmplY3RJdGVyYXRvciIsImlzSW1wbGVtZW50ZWQiLCJwcm90b2NvbHMiLCJpbml0Iiwic3RlcCIsInJlc3VsdCIsInJlZHVjZWQiLCJjb2xsZWN0aW9uIiwicCIsImlzU3RyaW5nIiwiaXNBcnJheSIsIkVycm9yIiwiaW5wdXQiLCJhY2MiLCJtYXgiLCJNYXRoIiwiQVJSQVlfUkVEVUNFUiIsInRvUmVkdWNlciIsIk9CSkVDVF9SRURVQ0VSIiwiU1RSSU5HX1JFRFVDRVIiLCJ4Zm9ybSIsInIiLCJpc0NvbXBsZXRlZCIsImNvbXBsZXRlIiwidW5jb21wbGV0ZSIsIml0ZXIiLCJpdGVyYXRvciIsInJlZHVjZXIiLCJ0b1N0cmluZyIsInByb3RvIiwiY3RvciIsImlzRmluaXRlIiwiQXJyYXkiLCJCVUZGRVIiLCJGSVhFRCIsIkRST1BQSU5HIiwiU0xJRElORyIsInF1ZXVlIiwicSIsInNpemUiLCJidWZmZXIiLCJxQ291bnQiLCJlbnF1ZXVlIiwiY291bnQiLCJkZXF1ZXVlIiwiTUFYX0RJUlRZIiwiTUFYX1FVRVVFRCIsIkNMT1NFRCIsIkJPWCIsIndyaXRhYmxlIiwiaGFuZGxlciIsImlzVGltZWQiLCJtYXhEaXJ0eSIsIm1heFF1ZXVlZCIsInJlY3ZzIiwic2VuZHMiLCJkaXJ0eVJlY3ZzIiwiZGlydHlTZW5kcyIsImNsb3NlZCIsImlzQnVmZmVyZWQiLCJjaGFubmVsIiwiYm94IiwiaXNGdWxsIiwiZG9uZSIsImlzUmVkdWNlZCIsInJlY2VpdmVyIiwiRU1QVFkiLCJjYWxsYmFjayIsInZhbCIsInJlbW92ZSIsImRpc3BhdGNoIiwiY2xvc2UiLCJmaWx0ZXIiLCJzZW5kZXIiLCJzZW5kQm94Iiwic2VuZEhhbmRsZXIiLCJERUZBVUxUX0hBTkRMRVIiLCJhY3RpdmUiLCJjb21taXQiLCJhZGQiLCJoYW5kbGVFeGNlcHRpb24iLCJidWZmZXJSZWR1Y2VyIiwiYnVmIiwib3B0cyIsImZpeGVkIiwiaXNCdWZmZXIiLCJ0aW1lciIsImRlZmF1bHRPcHRpb25zIiwicGFyc2VBcmdzIiwidHJhbnNkdWNlciIsInhmIiwiaGFuZGxlclRyYW5zZHVjZXIiLCJjaCIsImNoYW5JbXBsIiwicmVjdiIsInNldFRpbWVvdXQiLCJjbG9zZUltcGwiLCJkZWxheSIsImNoYW4iLCJoYW5kbGVTZW5kIiwib3BIYW5kbGVyIiwiaGFuZGxlUmVjdiIsInJlc29sdmUiLCJzZW5kQXN5bmMiLCJyZWN2QXN5bmMiLCJyZWplY3QiLCJERUZBVUxUIiwiZ2V0IiwiYXJyYXkiLCJqIiwidXBwZXIiLCJpIiwidGVtcCIsIm9wdGlvbnMiLCJvcHMiLCJwcmlvcml0eSIsImluZGljZXMiLCJyYW5kb21BcnJheSIsInNlbGVjdEhhbmRsZXIiLCJzZWxlY3RSZXN1bHQiLCJvcCIsImNyZWF0ZVNlbGVjdEhhbmRsZXIiLCJpc0JveCIsInNlbGVjdEFzeW5jIiwiU0VUX0lNTUVESUFURSIsIk1FU1NBR0VfQ0hBTk5FTCIsIlNFVF9USU1FT1VUIiwiYmF0Y2hTaXplIiwiZGlzcGF0Y2hNZXRob2QiLCJkaXNwYXRjaGVyIiwiY3JlYXRlRGlzcGF0Y2hlciIsInJ1bm5pbmciLCJxdWV1ZWQiLCJjYWxjRGlzcGF0Y2hNZXRob2QiLCJzZXRJbW1lZGlhdGUiLCJwcm9jZXNzVGFza3MiLCJ0YXNrIiwia2V5Iiwic2V0RGlzcGF0Y2hlciIsInRpbWVkQ2hhbiIsIlByb21pc2UiLCJRVUVVRSIsInN0b3JlIiwicG9pbnRlciIsIml0ZW0iLCJlbmQiLCJwcmVkaWNhdGUiLCJpc051bWJlciIsIngiLCJwcm90b3R5cGUiLCJjYWxsIiwicmVkdWNlIiwib3V0cHV0IiwiZ28iLCJ0b0NoYW5uZWwiLCJpdGVyYWJsZSIsImxlbmd0aCIsInNlbmQiLCJ0b0FycmF5IiwicHVzaCIsIlRBUFMiLCJwaXBlIiwic3JjIiwiZHN0Iiwia2VlcE9wZW4iLCJwYXJ0aXRpb24iLCJ0QnVmZmVyIiwiZkJ1ZmZlciIsInREc3QiLCJmRHN0IiwibWVyZ2UiLCJzcmNzIiwiaW5wdXRzIiwic2xpY2UiLCJzZWxlY3QiLCJzcGxpY2UiLCJpbmRleE9mIiwic3BsaXQiLCJidWZmZXJzIiwiYmZzIiwiZHN0cyIsIm1hcCIsImJmIiwibWFrZVRhcCIsImRlZmluZVByb3BlcnR5IiwiY29uZmlndXJhYmxlIiwidGFwIiwiaW5jbHVkZXMiLCJ1bnRhcCIsInRhcHMiLCJ1bnRhcEFsbCIsInNyY2xlbiIsInZhbHVlcyIsImNhbGxiYWNrcyIsImRlYm91bmNlIiwiZGVmYXVsdHMiLCJsZWFkaW5nIiwidHJhaWxpbmciLCJtYXhEZWxheSIsImNhbmNlbCIsImRlbCIsImFzc2lnbiIsInRpbWluZyIsInRocm90dGxlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7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QUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7O0FBTUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd1FBOzs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7OztBQVVBOzs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7Ozs7QUFXQTs7Ozs7Ozs7O0FBU0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBOzs7Ozs7Ozs7Ozs7QUFZQTs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQTs7Ozs7Ozs7Ozs7OztBQWFBOzs7Ozs7OztBQVFBOzs7Ozs7Ozs7OztBQVdBOzs7Ozs7Ozs7OztBQVdBOzs7Ozs7Ozs7Ozs7Ozs7QUFlQTs7Ozs7Ozs7O0FBU0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCQTs7Ozs7Ozs7OztBQVVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hlQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7OztBQU9BOzs7Ozs7O0FBVUE7Ozs7Ozs7Ozs7Ozs7OztBQWFBLHFEQUFxQztBQUNuQyx5QkFBUSxhQUFZO0FBQ2xCLDBCQUFNQSxJQUFJLEdBQ1IsK0JBQ0lDLE1BQU0sQ0FBTkEsZUFESixNQUNJQSxDQURKLEdBRUlBLE1BQU0sQ0FBTkEsS0FITixHQUdNQSxDQUhOO0FBSUEsd0JBQUlDLEtBQUssR0FBVDs7QUFFQSwyQkFBT0EsS0FBSyxHQUFHRixJQUFJLENBQW5CLFFBQTRCO0FBQzFCLDRCQUFNRyxDQUFDLEdBQUdILElBQUksQ0FBQ0UsS0FBZixFQUFjLENBQWQ7QUFDQSw0QkFBTTtBQUFFLDZCQUFLRSxHQUFHO0FBQVYsdUJBQU47QUFDRDtBQVZILG1CQUFRLEVBQVI7QUFZRDtBQUVEOzs7Ozs7Ozs7Ozs7QUFVQSw4Q0FBOEI7QUFDNUIseUJBQVEsYUFBWTtBQUNsQjtBQUNBLHdCQUFJRixLQUFLLEdBQVQ7O0FBRUEsNkJBQVM7QUFDUEcsNkJBQU8sR0FBR0MsRUFBRSxDQUFDSixLQUFELElBQVpHLE9BQVksQ0FBWkE7O0FBQ0EsMEJBQUksbUJBQUosYUFBb0M7QUFDbEM7QUFDRDs7QUFDRDtBQUNEO0FBVkgsbUJBQVEsRUFBUjtBQVlEO0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkZBLHlDQUF5QkUsTUFBTSxHQUEvQixNQUF3QztBQUN0QztBQUNFLHlCQUFLQyxpRUFBV0MsS0FBSyxDQUFDQyxNQUFNLENBQTVCLFFBQXFCLENBQWhCRixDQUFMO0FBQ0EseUJBQUtHLDBFQUFvQkYsS0FBSyxDQUFDQyxNQUFNLENBQXJDLFFBQThCLENBQXpCQyxDQUFMO0FBQ0UsNkJBQU9GLEtBQUssQ0FBQ0MsTUFBTSxDQUFuQixRQUFZLENBQUxELEVBQVA7O0FBQ0YseUJBQUtELGlFQUFMLEtBQUtBLENBQUw7QUFDRSw2QkFBT0ksZ0JBQWdCLENBQXZCLEtBQXVCLENBQXZCOztBQUNGLHlCQUFLQywrREFBTCxLQUFLQSxDQUFMO0FBQ0UsNkJBQU9DLGNBQWMsUUFBckIsTUFBcUIsQ0FBckI7O0FBQ0Y7QUFDRTtBQVRKO0FBV0Q7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlQSwyQ0FBMkI7QUFDekIseUJBQU9DLDZGQUFvQ0YsK0RBQTNDLEtBQTJDQSxDQUEzQztBQUNEOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xNRDtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7O0FBT0E7Ozs7Ozs7Ozs7Ozs7OztBQWlCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRCQTs7Ozs7Ozs7QUFNQSxzQkFBTUcsU0FBUyxHQUFHLE1BQU0sQ0FBTixhQUFvQjtBQUNwQ0Msc0JBQUksRUFBRTtBQUNKUix5QkFBSyxFQUFFQyxNQUFNLENBQU5BO0FBREgsbUJBRDhCO0FBSXBDUSxzQkFBSSxFQUFFO0FBQ0pULHlCQUFLLEVBQUVDLE1BQU0sQ0FBTkE7QUFESCxtQkFKOEI7QUFPcENTLHdCQUFNLEVBQUU7QUFDTlYseUJBQUssRUFBRUMsTUFBTSxDQUFOQTtBQURELG1CQVA0QjtBQVVwQ1UseUJBQU8sRUFBRTtBQUNQWCx5QkFBSyxFQUFFQyxNQUFNLENBQU5BO0FBREEsbUJBVjJCO0FBYXBDRCx1QkFBSyxFQUFFO0FBQ0xBLHlCQUFLLEVBQUVDLE1BQU0sQ0FBTkE7QUFERjtBQWI2QixpQkFBcEIsQ0FBbEI7O0FBa0JBLHNEQUFzQztBQUNwQyxzQkFBSU4sR0FBRyxJQUFQLE1BQWlCO0FBQ2Y7QUFDRDs7QUFFRDtBQUNFO0FBQ0UsNkJBQ0VJLGlFQUFXSixHQUFHLENBQUNNLE1BQU0sQ0FBckJGLFFBQWMsQ0FBZEEsS0FDQUcsMEVBQW9CUCxHQUFHLENBQUNNLE1BQU0sQ0FGaEMsUUFFeUIsQ0FBdkJDLENBRkY7O0FBSUY7QUFDRSw2QkFBT0EsMEVBQW9CUCxHQUFHLENBQUNNLE1BQU0sQ0FBckMsYUFBOEIsQ0FBdkJDLENBQVA7O0FBQ0Y7QUFDQTtBQUNFLDZCQUFPVixNQUFNLENBQU5BLG9DQUEyQ2UsU0FBUyxDQUEzRCxRQUEyRCxDQUFwRGYsQ0FBUDs7QUFDRjtBQUNFLDZCQUFPTyxpRUFBV0osR0FBRyxDQUFDWSxTQUFTLENBQS9CLFFBQStCLENBQVYsQ0FBZFIsQ0FBUDtBQVpKO0FBY0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0ZEO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7QUFPQTs7Ozs7Ozs7QUFZQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBLDBDQUEwQjtBQUN4QjtBQUNFLHlCQUFLTyxtRkFBTCxNQUFLQSxDQUFMO0FBQ0UsNkJBQU9NLFVBQVUsQ0FBQ0MsMkRBQWxCLElBQWlCLENBQWpCOztBQUNGLHlCQUFLQywrREFBTCxVQUFLQSxDQUFMO0FBQ0UsNkJBQU8sTUFBUDs7QUFDRix5QkFBS0MsOERBQUwsVUFBS0EsQ0FBTDtBQUNFLDZCQUFPLE1BQVA7O0FBQ0YseUJBQUtYLCtEQUFMLFVBQUtBLENBQUw7QUFDRSw2QkFBTyxPQUFQLEVBQU8sQ0FBUDs7QUFDRix5QkFBS0wsaUVBQUwsVUFBS0EsQ0FBTDtBQUNFLDZCQUFPLE1BQU07QUFDWCw4QkFBTWlCLEtBQUssQ0FBWCxvQkFBVyxDQUFYO0FBREY7O0FBR0Y7QUFDRTtBQWRKO0FBZ0JEO0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1CQSwwQ0FBMEI7QUFDeEI7QUFDRSx5QkFBS1YsbUZBQUwsTUFBS0EsQ0FBTDtBQUNFLDZCQUFPTSxVQUFVLENBQUNDLDJEQUFsQixJQUFpQixDQUFqQjs7QUFFRix5QkFBS0MsK0RBQUwsVUFBS0EsQ0FBTDtBQUNFLDZCQUFPLGdCQUFnQjtBQUNyQiw4QkFBTWQsS0FBSyxHQUFHSSx3RUFBa0JhLEtBQUssQ0FBQ3pCLE1BQU0sQ0FBTkEsWUFBeEJZLENBQXdCWixDQUFELENBQXZCWSxHQUFkO0FBQ0EsK0JBQU9jLEdBQUcsR0FBVjtBQUZGOztBQUtGLHlCQUFLSCw4REFBTCxVQUFLQSxDQUFMO0FBQ0UsNkJBQU8sZ0JBQWdCO0FBQ3JCRywyQkFBRyxDQUFIQTtBQUNBO0FBRkY7O0FBS0YseUJBQUtkLCtEQUFMLFVBQUtBLENBQUw7QUFDRSw2QkFBTyxnQkFBZ0I7QUFDckIsNEJBQUlKLEtBQUssR0FBVDs7QUFFQSw0QkFBSSxDQUFDSSwrREFBTCxLQUFLQSxDQUFMLEVBQXNCO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLGdDQUFNZSxHQUFHLEdBQUczQixNQUFNLENBQU5BLGlCQUF3QixVQUFVNEIsSUFBSSxDQUFKQSxPQUFsQzVCLENBQWtDNEIsQ0FBbEM1QixFQUFrRCxDQUE5RCxDQUFZQSxDQUFaO0FBQ0FRLCtCQUFLLEdBQUc7QUFBRSw2QkFBQ21CLEdBQUcsR0FBSixJQUFXRjtBQUFiLDJCQUFSakI7QUFDRDs7QUFFRCw4QkFBTU4sQ0FBQyxHQUFHRixNQUFNLENBQU5BLFlBQVYsQ0FBVUEsQ0FBVjtBQUNBMEIsMkJBQUcsQ0FBSEEsQ0FBRyxDQUFIQSxHQUFTbEIsS0FBSyxDQUFka0IsQ0FBYyxDQUFkQTtBQUNBO0FBYkY7O0FBZ0JGLHlCQUFLbkIsaUVBQUwsVUFBS0EsQ0FBTDtBQUNFLDZCQUFPLGdCQUFnQmEsVUFBVSxNQUFqQyxLQUFpQyxDQUFqQzs7QUFFRjtBQUNFO0FBckNKO0FBdUNEO0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQSw0Q0FBNEI7QUFDMUI7QUFDRSx5QkFBS04sbUZBQUwsUUFBS0EsQ0FBTDtBQUNFLDZCQUFPTSxVQUFVLENBQUNDLDJEQUFsQixNQUFpQixDQUFqQjs7QUFDRix5QkFBS0MsK0RBQUwsVUFBS0EsQ0FBTDtBQUNBLHlCQUFLQyw4REFBTCxVQUFLQSxDQUFMO0FBQ0EseUJBQUtYLCtEQUFMLFVBQUtBLENBQUw7QUFDQSx5QkFBS0wsaUVBQUwsVUFBS0EsQ0FBTDtBQUNFLDZCQUFPQyxLQUFLLElBQVo7O0FBQ0Y7QUFDRTtBQVRKO0FBV0Q7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOENBLCtDQUErQjtBQUM3Qix5QkFBTyxNQUFNLENBQU4sT0FBYztBQUNuQixxQkFBQ2EsMkRBQUQsT0FBVUwsSUFBSSxDQURLLFVBQ0wsQ0FESztBQUVuQixxQkFBQ0ssMkRBQUQsT0FBVUosSUFBSSxDQUZLLFVBRUwsQ0FGSztBQUduQixxQkFBQ0ksMkRBQUQsU0FBWUgsTUFBTTtBQUhDLG1CQUFkLENBQVA7QUFLRDtBQUVEOzs7Ozs7OztBQU1BLHNCQUFNVyxhQUFhLEdBQUdDLFNBQVMsQ0FBL0IsRUFBK0IsQ0FBL0I7QUFFQTs7Ozs7OztBQU1BLHNCQUFNQyxjQUFjLEdBQUdELFNBQVMsQ0FBaEMsRUFBZ0MsQ0FBaEM7QUFFQTs7Ozs7OztBQU1BLHNCQUFNRSxjQUFjLEdBQUdGLFNBQVMsQ0FBaEMsRUFBZ0MsQ0FBaEM7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThCQSxpREFBaUM7QUFDL0IseUJBQU87QUFDTCxxQkFBQ1QsMkRBQUQsUUFBVztBQUNULDZCQUFPWSxLQUFLLENBQUNaLDJEQUFiLElBQVksQ0FBTFksRUFBUDtBQUZHOztBQUtMLHFCQUFDWiwyREFBRCxPQUxLOztBQU9MLHFCQUFDQSwyREFBRCxlQUFrQjtBQUNoQiw2QkFBT1ksS0FBSyxDQUFDWiwyREFBTlksTUFBSyxDQUFMQSxDQUFQLEtBQU9BLENBQVA7QUFDRDs7QUFUSSxtQkFBUDtBQVdEO0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwQkEsb0RBQW9DO0FBQ2xDLHdCQUFNQyxDQUFDLEdBQUcsZ0NBQWdDSixTQUFTLENBQXpDLE9BQXlDLENBQXpDLEdBQVY7QUFDQSx3QkFBTVosTUFBTSxHQUFHZSxLQUFLLENBQXBCLENBQW9CLENBQXBCO0FBQ0EseUJBQU9mLE1BQU0sQ0FBQ0csMkRBQVBILElBQU0sQ0FBTkEsTUFBUCxNQUFPQSxDQUFQO0FBQ0Q7QUFFRDs7Ozs7Ozs7Ozs7Ozs7O0FBYUEseUNBQXlCO0FBQ3ZCLHlCQUFPO0FBQ0wscUJBQUNHLDJEQUFELFVBREs7QUFFTCxxQkFBQ0EsMkRBQUQsUUFBV2I7QUFGTixtQkFBUDtBQUlEO0FBRUQ7Ozs7Ozs7Ozs7Ozs7O0FBWUEsMkNBQTJCO0FBQ3pCLHlCQUFPQSxLQUFQLFNBQU9BLFNBQVAsV0FBT0EsR0FBUCxNQUFPQSxRQUFLLENBQUdhLDJEQUFmLEtBQVksQ0FBWjtBQUNEO0FBRUQ7Ozs7Ozs7Ozs7QUFRQSw0Q0FBNEI7QUFDMUIseUJBQU8sQ0FBQyxFQUFDYixLQUFELFNBQUNBLFNBQUQsV0FBQ0EsR0FBRCxNQUFDQSxRQUFLLENBQUdhLDJEQUFqQixPQUFjLENBQU4sQ0FBUjtBQUNEO0FBRUQ7Ozs7Ozs7Ozs7Ozs7OztBQWFBLGdEQUFnQztBQUM5Qix5QkFBT2MsV0FBVyxDQUFYQSxLQUFXLENBQVhBLFdBQTZCQyxRQUFRLENBQTVDLEtBQTRDLENBQTVDO0FBQ0Q7QUFFRDs7Ozs7Ozs7Ozs7Ozs7QUFZQSxrREFBa0M7QUFDaEMseUJBQU9ELFdBQVcsQ0FBWEEsS0FBVyxDQUFYQSxHQUFxQkUsVUFBVSxDQUEvQkYsS0FBK0IsQ0FBL0JBLEdBQVA7QUFDRDtBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVDQSwyREFBMkM7QUFDekMsc0JBQUlmLFVBQVUsSUFBZCxNQUF3QjtBQUN0QjtBQUNEOztBQUVELHdCQUFNa0IsSUFBSSxHQUFHQyxtRUFBYixVQUFhQSxDQUFiOztBQUNBLHNCQUFJLENBQUosTUFBVztBQUNULDBCQUFNZixLQUFLLENBQUUsZ0NBQStCSixVQUFVLENBQVZBLFlBQTVDLE1BQVcsQ0FBWDtBQUNEOztBQUVELHNCQUFJTSxHQUFHLEdBQVA7QUFDQSxzQkFBSVQsSUFBSSxHQUFHcUIsSUFBSSxDQUFmLElBQVdBLEVBQVg7O0FBRUEseUJBQU8sQ0FBQ3JCLElBQUksQ0FBWixNQUFtQjtBQUNqQlMsdUJBQUcsR0FBR2MsT0FBTyxDQUFDbkIsMkRBQVJtQixJQUFPLENBQVBBLE1BQXFCdkIsSUFBSSxDQUEvQlMsS0FBTWMsQ0FBTmQ7O0FBQ0Esd0JBQUlTLFdBQVcsQ0FBZixHQUFlLENBQWYsRUFBc0I7QUFDcEJULHlCQUFHLEdBQUdXLFVBQVUsQ0FBaEJYLEdBQWdCLENBQWhCQTtBQUNBO0FBQ0Q7O0FBQ0RULHdCQUFJLEdBQUdxQixJQUFJLENBQVhyQixJQUFPcUIsRUFBUHJCO0FBQ0Q7O0FBRUQseUJBQU91QixPQUFPLENBQUNuQiwyREFBUm1CLE1BQU8sQ0FBUEEsQ0FBUCxHQUFPQSxDQUFQO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMWJEO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7QUFPQTs7Ozs7Ozs7QUFRQTs7Ozs7Ozs7O0FBT0Esc0JBQU1DLFFBQVEsR0FBR3pDLE1BQU0sQ0FBTkEsVUFBakI7QUFFQTs7Ozs7Ozs7OztBQVNBLHVDQUF1QjtBQUNyQix5QkFBT3lDLFFBQVEsQ0FBUkEsWUFBUDtBQUNEO0FBRUQ7Ozs7Ozs7Ozs7O0FBU0EsZ0RBQWdDO0FBQzlCLHlCQUFPQSxRQUFRLENBQVJBLFlBQVA7QUFDRDtBQUVEOzs7Ozs7Ozs7Ozs7Ozs7OztBQWVBLHFDQUFxQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFJQSxRQUFRLENBQVJBLFlBQUosbUJBQTRDO0FBQzFDO0FBTmlCLG9CQVNuQjs7O0FBQ0Esd0JBQU1DLEtBQUssR0FBRzFDLE1BQU0sQ0FBTkEsZUFBZCxDQUFjQSxDQUFkOztBQUNBLHNCQUFJMEMsS0FBSyxLQUFULE1BQW9CO0FBQ2xCO0FBWmlCLG9CQWVuQjtBQUNBOzs7QUFDQSx3QkFBTUMsSUFBSSxHQUNSM0MsTUFBTSxDQUFOQSx1REFDQTBDLEtBQUssQ0FGUDtBQUdBLHlCQUFPLDhCQUE4QkMsSUFBSSxLQUF6QztBQUNEO0FBRUQ7Ozs7Ozs7Ozs7Ozs7OztBQWFBLHFDQUFxQjtBQUNuQix5QkFBT0YsUUFBUSxDQUFSQSxpQ0FBMENHLFFBQVEsQ0FBekQsQ0FBeUQsQ0FBekQ7QUFDRDtBQUVEOzs7Ozs7Ozs7Ozs7QUFVQSxxQ0FBcUI7QUFDbkIseUJBQU9ILFFBQVEsQ0FBUkEsWUFBUDtBQUNEO0FBRUQ7Ozs7Ozs7Ozs7Ozs7O0FBWUEsc0JBQU1sQixPQUFPLEdBQUdzQixLQUFLLENBQXJCOzs7Ozs7QU56SEE7QUFWQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QU9BQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7O0FBT0E7Ozs7Ozs7OztBQXNDQTs7Ozs7Ozs7Ozs7Ozs7O0FBZUE7Ozs7Ozs7Ozs7Ozs7QUFhQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekVBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7OztBQU9BOzs7Ozs7Ozs7QUFXQTs7Ozs7Ozs7Ozs7O0FBWUE7Ozs7Ozs7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QSxjQUFNM0Msd0RBQUksQ0FBQ00sR0FBRCxFQUFNNUssT0FBTixDQUFWO0FBQ0FBLGVBQU8sR0FBR3dELGtEQUFWO0FBQ0QsT0FKTSxNQUlBO0FBQ0x1QyxhQUFLLEdBQUdZLHdEQUFJLEVBQVo7QUFDRDtBQUNGO0FBQ0YsR0F4Q0MsQ0FBRjtBQTBDQSxTQUFPaUUsR0FBUDtBQUNEIiwiZmlsZSI6ImNoYW5rby1vcHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJvcHNcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wib3BzXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImZ1bmN0aW9uIF9hc3luY0l0ZXJhdG9yKGl0ZXJhYmxlKSB7XG4gIHZhciBtZXRob2Q7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBpZiAoU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHtcbiAgICAgIG1ldGhvZCA9IGl0ZXJhYmxlW1N5bWJvbC5hc3luY0l0ZXJhdG9yXTtcbiAgICAgIGlmIChtZXRob2QgIT0gbnVsbCkgcmV0dXJuIG1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICB9XG5cbiAgICBpZiAoU3ltYm9sLml0ZXJhdG9yKSB7XG4gICAgICBtZXRob2QgPSBpdGVyYWJsZVtTeW1ib2wuaXRlcmF0b3JdO1xuICAgICAgaWYgKG1ldGhvZCAhPSBudWxsKSByZXR1cm4gbWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgIH1cbiAgfVxuXG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJPYmplY3QgaXMgbm90IGFzeW5jIGl0ZXJhYmxlXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3luY0l0ZXJhdG9yOyIsIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImNzcFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJjc3BcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsInZhciBBd2FpdFZhbHVlID0gcmVxdWlyZShcIi4vQXdhaXRWYWx1ZVwiKTtcblxuZnVuY3Rpb24gQXN5bmNHZW5lcmF0b3IoZ2VuKSB7XG4gIHZhciBmcm9udCwgYmFjaztcblxuICBmdW5jdGlvbiBzZW5kKGtleSwgYXJnKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZXF1ZXN0ID0ge1xuICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgYXJnOiBhcmcsXG4gICAgICAgIHJlc29sdmU6IHJlc29sdmUsXG4gICAgICAgIHJlamVjdDogcmVqZWN0LFxuICAgICAgICBuZXh0OiBudWxsXG4gICAgICB9O1xuXG4gICAgICBpZiAoYmFjaykge1xuICAgICAgICBiYWNrID0gYmFjay5uZXh0ID0gcmVxdWVzdDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZyb250ID0gYmFjayA9IHJlcXVlc3Q7XG4gICAgICAgIHJlc3VtZShrZXksIGFyZyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXN1bWUoa2V5LCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgdmFyIHJlc3VsdCA9IGdlbltrZXldKGFyZyk7XG4gICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICB2YXIgd3JhcHBlZEF3YWl0ID0gdmFsdWUgaW5zdGFuY2VvZiBBd2FpdFZhbHVlO1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKHdyYXBwZWRBd2FpdCA/IHZhbHVlLndyYXBwZWQgOiB2YWx1ZSkudGhlbihmdW5jdGlvbiAoYXJnKSB7XG4gICAgICAgIGlmICh3cmFwcGVkQXdhaXQpIHtcbiAgICAgICAgICByZXN1bWUoa2V5ID09PSBcInJldHVyblwiID8gXCJyZXR1cm5cIiA6IFwibmV4dFwiLCBhcmcpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldHRsZShyZXN1bHQuZG9uZSA/IFwicmV0dXJuXCIgOiBcIm5vcm1hbFwiLCBhcmcpO1xuICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICByZXN1bWUoXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBzZXR0bGUoXCJ0aHJvd1wiLCBlcnIpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNldHRsZSh0eXBlLCB2YWx1ZSkge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBcInJldHVyblwiOlxuICAgICAgICBmcm9udC5yZXNvbHZlKHtcbiAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgZG9uZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgXCJ0aHJvd1wiOlxuICAgICAgICBmcm9udC5yZWplY3QodmFsdWUpO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgZnJvbnQucmVzb2x2ZSh7XG4gICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgIGRvbmU6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBmcm9udCA9IGZyb250Lm5leHQ7XG5cbiAgICBpZiAoZnJvbnQpIHtcbiAgICAgIHJlc3VtZShmcm9udC5rZXksIGZyb250LmFyZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJhY2sgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHRoaXMuX2ludm9rZSA9IHNlbmQ7XG5cbiAgaWYgKHR5cGVvZiBnZW5bXCJyZXR1cm5cIl0gIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHRoaXNbXCJyZXR1cm5cIl0gPSB1bmRlZmluZWQ7XG4gIH1cbn1cblxuaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuYXN5bmNJdGVyYXRvcikge1xuICBBc3luY0dlbmVyYXRvci5wcm90b3R5cGVbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xufVxuXG5Bc3luY0dlbmVyYXRvci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uIChhcmcpIHtcbiAgcmV0dXJuIHRoaXMuX2ludm9rZShcIm5leHRcIiwgYXJnKTtcbn07XG5cbkFzeW5jR2VuZXJhdG9yLnByb3RvdHlwZVtcInRocm93XCJdID0gZnVuY3Rpb24gKGFyZykge1xuICByZXR1cm4gdGhpcy5faW52b2tlKFwidGhyb3dcIiwgYXJnKTtcbn07XG5cbkFzeW5jR2VuZXJhdG9yLnByb3RvdHlwZVtcInJldHVyblwiXSA9IGZ1bmN0aW9uIChhcmcpIHtcbiAgcmV0dXJuIHRoaXMuX2ludm9rZShcInJldHVyblwiLCBhcmcpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBBc3luY0dlbmVyYXRvcjsiLCJmdW5jdGlvbiBfQXdhaXRWYWx1ZSh2YWx1ZSkge1xuICB0aGlzLndyYXBwZWQgPSB2YWx1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfQXdhaXRWYWx1ZTsiLCJ2YXIgQXdhaXRWYWx1ZSA9IHJlcXVpcmUoXCIuL0F3YWl0VmFsdWVcIik7XG5cbmZ1bmN0aW9uIF9hd2FpdEFzeW5jR2VuZXJhdG9yKHZhbHVlKSB7XG4gIHJldHVybiBuZXcgQXdhaXRWYWx1ZSh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2F3YWl0QXN5bmNHZW5lcmF0b3I7IiwidmFyIEFzeW5jR2VuZXJhdG9yID0gcmVxdWlyZShcIi4vQXN5bmNHZW5lcmF0b3JcIik7XG5cbmZ1bmN0aW9uIF93cmFwQXN5bmNHZW5lcmF0b3IoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbmV3IEFzeW5jR2VuZXJhdG9yKGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF93cmFwQXN5bmNHZW5lcmF0b3I7IiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsIihmdW5jdGlvbiAoZ2xvYmFsLCB1bmRlZmluZWQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIGlmIChnbG9iYWwuc2V0SW1tZWRpYXRlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgbmV4dEhhbmRsZSA9IDE7IC8vIFNwZWMgc2F5cyBncmVhdGVyIHRoYW4gemVyb1xuICAgIHZhciB0YXNrc0J5SGFuZGxlID0ge307XG4gICAgdmFyIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IGZhbHNlO1xuICAgIHZhciBkb2MgPSBnbG9iYWwuZG9jdW1lbnQ7XG4gICAgdmFyIHJlZ2lzdGVySW1tZWRpYXRlO1xuXG4gICAgZnVuY3Rpb24gc2V0SW1tZWRpYXRlKGNhbGxiYWNrKSB7XG4gICAgICAvLyBDYWxsYmFjayBjYW4gZWl0aGVyIGJlIGEgZnVuY3Rpb24gb3IgYSBzdHJpbmdcbiAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBjYWxsYmFjayA9IG5ldyBGdW5jdGlvbihcIlwiICsgY2FsbGJhY2spO1xuICAgICAgfVxuICAgICAgLy8gQ29weSBmdW5jdGlvbiBhcmd1bWVudHNcbiAgICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaSArIDFdO1xuICAgICAgfVxuICAgICAgLy8gU3RvcmUgYW5kIHJlZ2lzdGVyIHRoZSB0YXNrXG4gICAgICB2YXIgdGFzayA9IHsgY2FsbGJhY2s6IGNhbGxiYWNrLCBhcmdzOiBhcmdzIH07XG4gICAgICB0YXNrc0J5SGFuZGxlW25leHRIYW5kbGVdID0gdGFzaztcbiAgICAgIHJlZ2lzdGVySW1tZWRpYXRlKG5leHRIYW5kbGUpO1xuICAgICAgcmV0dXJuIG5leHRIYW5kbGUrKztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhckltbWVkaWF0ZShoYW5kbGUpIHtcbiAgICAgICAgZGVsZXRlIHRhc2tzQnlIYW5kbGVbaGFuZGxlXTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBydW4odGFzaykge1xuICAgICAgICB2YXIgY2FsbGJhY2sgPSB0YXNrLmNhbGxiYWNrO1xuICAgICAgICB2YXIgYXJncyA9IHRhc2suYXJncztcbiAgICAgICAgc3dpdGNoIChhcmdzLmxlbmd0aCkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIGNhbGxiYWNrKGFyZ3NbMF0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIGNhbGxiYWNrKGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIGNhbGxiYWNrKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBjYWxsYmFjay5hcHBseSh1bmRlZmluZWQsIGFyZ3MpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBydW5JZlByZXNlbnQoaGFuZGxlKSB7XG4gICAgICAgIC8vIEZyb20gdGhlIHNwZWM6IFwiV2FpdCB1bnRpbCBhbnkgaW52b2NhdGlvbnMgb2YgdGhpcyBhbGdvcml0aG0gc3RhcnRlZCBiZWZvcmUgdGhpcyBvbmUgaGF2ZSBjb21wbGV0ZWQuXCJcbiAgICAgICAgLy8gU28gaWYgd2UncmUgY3VycmVudGx5IHJ1bm5pbmcgYSB0YXNrLCB3ZSdsbCBuZWVkIHRvIGRlbGF5IHRoaXMgaW52b2NhdGlvbi5cbiAgICAgICAgaWYgKGN1cnJlbnRseVJ1bm5pbmdBVGFzaykge1xuICAgICAgICAgICAgLy8gRGVsYXkgYnkgZG9pbmcgYSBzZXRUaW1lb3V0LiBzZXRJbW1lZGlhdGUgd2FzIHRyaWVkIGluc3RlYWQsIGJ1dCBpbiBGaXJlZm94IDcgaXQgZ2VuZXJhdGVkIGFcbiAgICAgICAgICAgIC8vIFwidG9vIG11Y2ggcmVjdXJzaW9uXCIgZXJyb3IuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KHJ1bklmUHJlc2VudCwgMCwgaGFuZGxlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciB0YXNrID0gdGFza3NCeUhhbmRsZVtoYW5kbGVdO1xuICAgICAgICAgICAgaWYgKHRhc2spIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50bHlSdW5uaW5nQVRhc2sgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJ1bih0YXNrKTtcbiAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckltbWVkaWF0ZShoYW5kbGUpO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50bHlSdW5uaW5nQVRhc2sgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsTmV4dFRpY2tJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIHByb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24gKCkgeyBydW5JZlByZXNlbnQoaGFuZGxlKTsgfSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FuVXNlUG9zdE1lc3NhZ2UoKSB7XG4gICAgICAgIC8vIFRoZSB0ZXN0IGFnYWluc3QgYGltcG9ydFNjcmlwdHNgIHByZXZlbnRzIHRoaXMgaW1wbGVtZW50YXRpb24gZnJvbSBiZWluZyBpbnN0YWxsZWQgaW5zaWRlIGEgd2ViIHdvcmtlcixcbiAgICAgICAgLy8gd2hlcmUgYGdsb2JhbC5wb3N0TWVzc2FnZWAgbWVhbnMgc29tZXRoaW5nIGNvbXBsZXRlbHkgZGlmZmVyZW50IGFuZCBjYW4ndCBiZSB1c2VkIGZvciB0aGlzIHB1cnBvc2UuXG4gICAgICAgIGlmIChnbG9iYWwucG9zdE1lc3NhZ2UgJiYgIWdsb2JhbC5pbXBvcnRTY3JpcHRzKSB7XG4gICAgICAgICAgICB2YXIgcG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cyA9IHRydWU7XG4gICAgICAgICAgICB2YXIgb2xkT25NZXNzYWdlID0gZ2xvYmFsLm9ubWVzc2FnZTtcbiAgICAgICAgICAgIGdsb2JhbC5vbm1lc3NhZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzID0gZmFsc2U7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKFwiXCIsIFwiKlwiKTtcbiAgICAgICAgICAgIGdsb2JhbC5vbm1lc3NhZ2UgPSBvbGRPbk1lc3NhZ2U7XG4gICAgICAgICAgICByZXR1cm4gcG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxQb3N0TWVzc2FnZUltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICAvLyBJbnN0YWxscyBhbiBldmVudCBoYW5kbGVyIG9uIGBnbG9iYWxgIGZvciB0aGUgYG1lc3NhZ2VgIGV2ZW50OiBzZWVcbiAgICAgICAgLy8gKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9ET00vd2luZG93LnBvc3RNZXNzYWdlXG4gICAgICAgIC8vICogaHR0cDovL3d3dy53aGF0d2cub3JnL3NwZWNzL3dlYi1hcHBzL2N1cnJlbnQtd29yay9tdWx0aXBhZ2UvY29tbXMuaHRtbCNjcm9zc0RvY3VtZW50TWVzc2FnZXNcblxuICAgICAgICB2YXIgbWVzc2FnZVByZWZpeCA9IFwic2V0SW1tZWRpYXRlJFwiICsgTWF0aC5yYW5kb20oKSArIFwiJFwiO1xuICAgICAgICB2YXIgb25HbG9iYWxNZXNzYWdlID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChldmVudC5zb3VyY2UgPT09IGdsb2JhbCAmJlxuICAgICAgICAgICAgICAgIHR5cGVvZiBldmVudC5kYXRhID09PSBcInN0cmluZ1wiICYmXG4gICAgICAgICAgICAgICAgZXZlbnQuZGF0YS5pbmRleE9mKG1lc3NhZ2VQcmVmaXgpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcnVuSWZQcmVzZW50KCtldmVudC5kYXRhLnNsaWNlKG1lc3NhZ2VQcmVmaXgubGVuZ3RoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICAgICAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgb25HbG9iYWxNZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBnbG9iYWwuYXR0YWNoRXZlbnQoXCJvbm1lc3NhZ2VcIiwgb25HbG9iYWxNZXNzYWdlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBnbG9iYWwucG9zdE1lc3NhZ2UobWVzc2FnZVByZWZpeCArIGhhbmRsZSwgXCIqXCIpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxNZXNzYWdlQ2hhbm5lbEltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICB2YXIgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICAgICAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgaGFuZGxlID0gZXZlbnQuZGF0YTtcbiAgICAgICAgICAgIHJ1bklmUHJlc2VudChoYW5kbGUpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBjaGFubmVsLnBvcnQyLnBvc3RNZXNzYWdlKGhhbmRsZSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbFJlYWR5U3RhdGVDaGFuZ2VJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgdmFyIGh0bWwgPSBkb2MuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgLy8gQ3JlYXRlIGEgPHNjcmlwdD4gZWxlbWVudDsgaXRzIHJlYWR5c3RhdGVjaGFuZ2UgZXZlbnQgd2lsbCBiZSBmaXJlZCBhc3luY2hyb25vdXNseSBvbmNlIGl0IGlzIGluc2VydGVkXG4gICAgICAgICAgICAvLyBpbnRvIHRoZSBkb2N1bWVudC4gRG8gc28sIHRodXMgcXVldWluZyB1cCB0aGUgdGFzay4gUmVtZW1iZXIgdG8gY2xlYW4gdXAgb25jZSBpdCdzIGJlZW4gY2FsbGVkLlxuICAgICAgICAgICAgdmFyIHNjcmlwdCA9IGRvYy5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICAgICAgICAgICAgc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBydW5JZlByZXNlbnQoaGFuZGxlKTtcbiAgICAgICAgICAgICAgICBzY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlID0gbnVsbDtcbiAgICAgICAgICAgICAgICBodG1sLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG4gICAgICAgICAgICAgICAgc2NyaXB0ID0gbnVsbDtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBodG1sLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbFNldFRpbWVvdXRJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQocnVuSWZQcmVzZW50LCAwLCBoYW5kbGUpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8vIElmIHN1cHBvcnRlZCwgd2Ugc2hvdWxkIGF0dGFjaCB0byB0aGUgcHJvdG90eXBlIG9mIGdsb2JhbCwgc2luY2UgdGhhdCBpcyB3aGVyZSBzZXRUaW1lb3V0IGV0IGFsLiBsaXZlLlxuICAgIHZhciBhdHRhY2hUbyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiAmJiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoZ2xvYmFsKTtcbiAgICBhdHRhY2hUbyA9IGF0dGFjaFRvICYmIGF0dGFjaFRvLnNldFRpbWVvdXQgPyBhdHRhY2hUbyA6IGdsb2JhbDtcblxuICAgIC8vIERvbid0IGdldCBmb29sZWQgYnkgZS5nLiBicm93c2VyaWZ5IGVudmlyb25tZW50cy5cbiAgICBpZiAoe30udG9TdHJpbmcuY2FsbChnbG9iYWwucHJvY2VzcykgPT09IFwiW29iamVjdCBwcm9jZXNzXVwiKSB7XG4gICAgICAgIC8vIEZvciBOb2RlLmpzIGJlZm9yZSAwLjlcbiAgICAgICAgaW5zdGFsbE5leHRUaWNrSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoY2FuVXNlUG9zdE1lc3NhZ2UoKSkge1xuICAgICAgICAvLyBGb3Igbm9uLUlFMTAgbW9kZXJuIGJyb3dzZXJzXG4gICAgICAgIGluc3RhbGxQb3N0TWVzc2FnZUltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGdsb2JhbC5NZXNzYWdlQ2hhbm5lbCkge1xuICAgICAgICAvLyBGb3Igd2ViIHdvcmtlcnMsIHdoZXJlIHN1cHBvcnRlZFxuICAgICAgICBpbnN0YWxsTWVzc2FnZUNoYW5uZWxJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChkb2MgJiYgXCJvbnJlYWR5c3RhdGVjaGFuZ2VcIiBpbiBkb2MuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKSkge1xuICAgICAgICAvLyBGb3IgSUUgNuKAkzhcbiAgICAgICAgaW5zdGFsbFJlYWR5U3RhdGVDaGFuZ2VJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gRm9yIG9sZGVyIGJyb3dzZXJzXG4gICAgICAgIGluc3RhbGxTZXRUaW1lb3V0SW1wbGVtZW50YXRpb24oKTtcbiAgICB9XG5cbiAgICBhdHRhY2hUby5zZXRJbW1lZGlhdGUgPSBzZXRJbW1lZGlhdGU7XG4gICAgYXR0YWNoVG8uY2xlYXJJbW1lZGlhdGUgPSBjbGVhckltbWVkaWF0ZTtcbn0odHlwZW9mIHNlbGYgPT09IFwidW5kZWZpbmVkXCIgPyB0eXBlb2YgZ2xvYmFsID09PSBcInVuZGVmaW5lZFwiID8gdGhpcyA6IGdsb2JhbCA6IHNlbGYpKTtcbiIsInZhciBzY29wZSA9ICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiICYmIGdsb2JhbCkgfHxcbiAgICAgICAgICAgICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzZWxmKSB8fFxuICAgICAgICAgICAgd2luZG93O1xudmFyIGFwcGx5ID0gRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5O1xuXG4vLyBET00gQVBJcywgZm9yIGNvbXBsZXRlbmVzc1xuXG5leHBvcnRzLnNldFRpbWVvdXQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBUaW1lb3V0KGFwcGx5LmNhbGwoc2V0VGltZW91dCwgc2NvcGUsIGFyZ3VtZW50cyksIGNsZWFyVGltZW91dCk7XG59O1xuZXhwb3J0cy5zZXRJbnRlcnZhbCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFRpbWVvdXQoYXBwbHkuY2FsbChzZXRJbnRlcnZhbCwgc2NvcGUsIGFyZ3VtZW50cyksIGNsZWFySW50ZXJ2YWwpO1xufTtcbmV4cG9ydHMuY2xlYXJUaW1lb3V0ID1cbmV4cG9ydHMuY2xlYXJJbnRlcnZhbCA9IGZ1bmN0aW9uKHRpbWVvdXQpIHtcbiAgaWYgKHRpbWVvdXQpIHtcbiAgICB0aW1lb3V0LmNsb3NlKCk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIFRpbWVvdXQoaWQsIGNsZWFyRm4pIHtcbiAgdGhpcy5faWQgPSBpZDtcbiAgdGhpcy5fY2xlYXJGbiA9IGNsZWFyRm47XG59XG5UaW1lb3V0LnByb3RvdHlwZS51bnJlZiA9IFRpbWVvdXQucHJvdG90eXBlLnJlZiA9IGZ1bmN0aW9uKCkge307XG5UaW1lb3V0LnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLl9jbGVhckZuLmNhbGwoc2NvcGUsIHRoaXMuX2lkKTtcbn07XG5cbi8vIERvZXMgbm90IHN0YXJ0IHRoZSB0aW1lLCBqdXN0IHNldHMgdXAgdGhlIG1lbWJlcnMgbmVlZGVkLlxuZXhwb3J0cy5lbnJvbGwgPSBmdW5jdGlvbihpdGVtLCBtc2Vjcykge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG4gIGl0ZW0uX2lkbGVUaW1lb3V0ID0gbXNlY3M7XG59O1xuXG5leHBvcnRzLnVuZW5yb2xsID0gZnVuY3Rpb24oaXRlbSkge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG4gIGl0ZW0uX2lkbGVUaW1lb3V0ID0gLTE7XG59O1xuXG5leHBvcnRzLl91bnJlZkFjdGl2ZSA9IGV4cG9ydHMuYWN0aXZlID0gZnVuY3Rpb24oaXRlbSkge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG5cbiAgdmFyIG1zZWNzID0gaXRlbS5faWRsZVRpbWVvdXQ7XG4gIGlmIChtc2VjcyA+PSAwKSB7XG4gICAgaXRlbS5faWRsZVRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gb25UaW1lb3V0KCkge1xuICAgICAgaWYgKGl0ZW0uX29uVGltZW91dClcbiAgICAgICAgaXRlbS5fb25UaW1lb3V0KCk7XG4gICAgfSwgbXNlY3MpO1xuICB9XG59O1xuXG4vLyBzZXRpbW1lZGlhdGUgYXR0YWNoZXMgaXRzZWxmIHRvIHRoZSBnbG9iYWwgb2JqZWN0XG5yZXF1aXJlKFwic2V0aW1tZWRpYXRlXCIpO1xuLy8gT24gc29tZSBleG90aWMgZW52aXJvbm1lbnRzLCBpdCdzIG5vdCBjbGVhciB3aGljaCBvYmplY3QgYHNldGltbWVkaWF0ZWAgd2FzXG4vLyBhYmxlIHRvIGluc3RhbGwgb250by4gIFNlYXJjaCBlYWNoIHBvc3NpYmlsaXR5IGluIHRoZSBzYW1lIG9yZGVyIGFzIHRoZVxuLy8gYHNldGltbWVkaWF0ZWAgbGlicmFyeS5cbmV4cG9ydHMuc2V0SW1tZWRpYXRlID0gKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmIHNlbGYuc2V0SW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBnbG9iYWwuc2V0SW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAodGhpcyAmJiB0aGlzLnNldEltbWVkaWF0ZSk7XG5leHBvcnRzLmNsZWFySW1tZWRpYXRlID0gKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmIHNlbGYuY2xlYXJJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgJiYgZ2xvYmFsLmNsZWFySW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzICYmIHRoaXMuY2xlYXJJbW1lZGlhdGUpO1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiY29yZVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJjb3JlXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cbi8qKlxuICogVGhlIGNlbnRyYWwgbW9kdWxlIGZvciB0aGUgdHJhbnNkdWNlciBlbmdpbmUuXG4gKlxuICogQWxsIG9mIHRoZSBmdW5jdGlvbnMgaW4gdGhpcyBtb2R1bGUgZGVhbCBkaXJlY3RseSB3aXRoIHRyYW5zZHVjZXJzLiBCdXRcbiAqIGZpcnN0LCBsZXQncyB0YWxrIGFib3V0IHRoZSBwcm90b2NvbHMgdGhhdCBhcmUgZ29pbmcgdG8gYmUgcmVmZXJyZWQgdG9cbiAqIHRocm91Z2hvdXQgbWFueSBvZiB0aGUgZnVuY3Rpb24gZGlzY3Vzc2lvbnMuXG4gKlxuICogIyMgUHJvdG9jb2xzXG4gKlxuICogT25lIG9mIHRoZSBrZXkgc2VsbGluZyBwb2ludHMgZm9yIHRyYW5zZHVjZXJzIGlzIHRoYXQgdGhlIHNhbWUgdHJhbnNkdWNlciBjYW5cbiAqIGJlIHVzZWQgb24gYW55IHR5cGUgb2YgY29sbGVjdGlvbi4gUmF0aGVyIHRoYW4gaGF2aW5nIHRvIHdyaXRlIGEgbmV3IGBtYXBgXG4gKiBmdW5jdGlvbiAoZm9yIGV4YW1wbGUpIGZvciBldmVyeSBraW5kIG9mIGNvbGxlY3Rpb24gLSBvbmUgZm9yIGFuIGFycmF5LCBvbmVcbiAqIGZvciBhIHN0cmluZywgb25lIGZvciBhbiBpdGVyYXRvciwgZXRjLiAtIHRoZXJlIGlzIGEgc2luZ2xlIGBtYXBgIHRyYW5zZHVjZXJcbiAqIHRoYXQgd2lsbCB3b3JrIHdpdGggYWxsIG9mIHRoZW0sIGFuZCBwb3RlbnRpYWxseSB3aXRoICphbnkqIGtpbmQgb2ZcbiAqIGNvbGxlY3Rpb24uIFRoaXMgaXMgcG9zc2libGUgaW1wbGVtZW50aW5nICpwcm90b2NvbHMqIG9uIHRoZSBjb2xsZWN0aW9ucy5cbiAqXG4gKiBBIHByb3RvY29sIGluIEphdmFTY3JpcHQgaXMgbXVjaCBsaWtlIGFuIGludGVyZmFjZSBpbiBsYW5ndWFnZXMgbGlrZSBKYXZhIGFuZFxuICogQyMuIEl0IGlzIGEgY29tbWl0bWVudCB0byBwcm92aWRpbmcgYSBjZXJ0YWluIGZ1bmN0aW9uYWxpdHkgdW5kZXIgYSBjZXJ0YWluXG4gKiBuYW1lLiBFUzIwMTUgaGFzIHNlZW4gdGhlIGludHJvZHVjdGlvbiBvZiBhbiBgaXRlcmF0b3JgIHByb3RvY29sLCBmb3JcbiAqIGV4YW1wbGUsIGFuZCBsYW5ndWFnZSBzdXBwb3J0IGZvciBpdCAodGhlIG5ldyBgZm9yLi4ub2ZgIGxvb3AgY2FuIHdvcmsgd2l0aFxuICogYW55IG9iamVjdCB0aGF0IGNvcnJlY3RseSBpbXBsZW1lbnRzIHRoZSBgaXRlcmF0b3JgIHByb3RvY29sKS5cbiAqXG4gKiBUbyBzdXBwb3J0IHRyYW5zZHVjdGlvbiwgWGR1Y2UgZXhwZWN0cyBjb2xsZWN0aW9ucyB0byBpbXBsZW1lbnQgZm91clxuICogcHJvdG9jb2xzLlxuICpcbiAqIC0gYGl0ZXJhdG9yYDogYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYW4gaXRlcmF0b3IgKHRoaXMgb25lIGlzIGJ1aWx0IGluIHRvXG4gKiAgIEVTNiBKYXZhU2NyaXB0KVxuICogLSBgdHJhbnNkdWNlci9pbml0YDogYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBuZXcsIGVtcHR5IGluc3RhbmNlIG9mIHRoZVxuICogICBvdXRwdXQgY29sbGVjdGlvblxuICogLSBgdHJhbnNkdWNlci9zdGVwYDogYSBmdW5jdGlvbiB0aGF0IHRha2VzIGFuIGFjY3VtdWxhdG9yICh0aGUgcmVzdWx0IG9mIHRoZVxuICogICByZWR1Y3Rpb24gc28gZmFyKSBhbmQgdGhlIG5leHQgaW5wdXQgdmFsdWUsIGFuZCB0aGVuIHJldHVybnMgdGhlXG4gKiAgIGFjY3VtdWxhdG9yIHdpdGggdGhlIG5leHQgaW5wdXQgdmFsdWUgYWRkZWQgdG8gaXRcbiAqIC0gYHRyYW5zZHVjZXIvcmVzdWx0YDogYSBmdW5jdGlvbiB0aGF0IHRha2VzIHRoZSByZWR1Y2VkIGNvbGxlY3Rpb24gYW5kXG4gKiAgIHJldHVybnMgdGhlIGZpbmFsIG91dHB1dCBjb2xsZWN0aW9uXG4gKlxuICogYGl0ZXJhdG9yYCBpcyB0aGUgYnVpbHQtaW4gSmF2YVNjcmlwdCBwcm90b2NvbC4gV2hlbiBjYWxsZWQsIGl0IGlzIGV4cGVjdGVkXG4gKiB0byByZXR1cm4gYW4gaXRlcmF0b3Igb3ZlciB0aGUgaW1wbGVtZW50aW5nIGNvbGxlY3Rpb24uIFRoaXMgaXRlcmF0b3IgaXMgYW5cbiAqIG9iamVjdCB0aGF0IGhhcyBhIGBuZXh0YCBmdW5jdGlvbi4gRWFjaCBjYWxsIHRvIGBuZXh0YCBpcyBleHBlY3RlZCB0byByZXR1cm5cbiAqIGFuIG9iamVjdCB3aXRoIGB2YWx1ZWAgYW5kIGBkb25lYCBwcm9wZXJ0aWVzLCB3aGljaCByZXNwZWN0aXZlbHkgaG9sZCB0aGVcbiAqIG5leHQgdmFsdWUgb2YgdGhlIGl0ZXJhdG9yIGFuZCBhIGJvb2xlYW4gdG8gaW5kaWNhdGUgd2hldGhlciB0aGUgaXRlcmF0aW9uXG4gKiBoYXMgcmVhY2hlZCBpdHMgZW5kLiAoVGhpcyBpcyBhIHNpbXBsaWZpZWQgZXhwbGFuYXRpb247IHNlZVxuICoge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvR3VpZGUvSXRlcmF0b3JzX2FuZF9HZW5lcmF0b3JzfHRoaXMgTUROIHBhZ2V9XG4gKiBmb3IgbW9yZSBkZXRhaWxlZCBpbmZvcm1hdGlvbi4pXG4gKlxuICogYHRyYW5zZHVjZXIvaW5pdGAgKHJlZmVycmVkIHRvIGZyb20gbm93IG9uIGFzIGBpbml0YCkgc2hvdWxkIGJlIGEgZnVuY3Rpb25cbiAqIHRoYXQgdGFrZXMgbm8gcGFyYW1ldGVycyBhbmQgcmV0dXJucyBhIG5ldywgZW1wdHkgaW5zdGFuY2Ugb2YgdGhlIG91dHB1dFxuICogY29sbGVjdGlvbi4gVGhpcyBpcyB0aGUgZnVuY3Rpb24gdGhhdCBkZWZpbmVzIGhvdyB0byBjcmVhdGUgYSBuZXcgY29sbGVjdGlvblxuICogb2YgdGhlIGNvcnJlY3QgdHlwZS5cbiAqXG4gKiBgdHJhbnNkdWNlci9zdGVwYCAocmVmZXJyZWQgdG8gZnJvbSBub3cgb24gYXMgYHN0ZXBgKSBzaG91bGQgYmUgYSBmdW5jdGlvblxuICogdGhhdCB0YWtlcyB0d28gcGFyYW1ldGVycy4gVGhlc2UgcGFyYW1ldGVycyBhcmUgdGhlIHJlc3VsdCBvZiB0aGUgcmVkdWN0aW9uXG4gKiBzbyBmYXIgKGFuZCBzbyBpcyBhIGNvbGxlY3Rpb24gb2YgdGhlIG91dHB1dCB0eXBlKSBhbmQgdGhlIG5leHQgdmFsdWUgZnJvbVxuICogdGhlIGlucHV0IGNvbGxlY3Rpb24uIEl0IG11c3QgcmV0dXJuIHRoZSBuZXcgcmVkdWN0aW9uIHJlc3VsdCwgd2l0aCB0aGUgbmV4dFxuICogdmFsdWUgaW5jb3Jwb3JhdGVkIGludG8gaXQuIFRoaXMgaXMgdGhlIGZ1bmN0aW9uIHRoYXQgZGVmaW5lcyBob3cgcmVkdWNlIGFcbiAqIHZhbHVlIG9udG8gdGhlIGNvbGxlY3Rpb24uXG4gKlxuICogYHRyYW5zZHVjZXIvcmVzdWx0YCAocmVmZXJyZWQgdG8gZnJvbSBub3cgb24gYXMgYHJlc3VsdGApIHNob3VsZCBiZSBhXG4gKiBmdW5jdGlvbiB0aGF0IHRha2VzIG9uZSBwYXJhbWV0ZXIsIHdoaWNoIGlzIHRoZSBmdWxseSByZWR1Y2VkIGNvbGxlY3Rpb24uIEl0XG4gKiBzaG91bGQgcmV0dXJuIHRoZSBmaW5hbCBvdXRwdXQgY29sbGVjdGlvbi4gVGhpcyBhZmZvcmRzIGEgY2hhbmNlIHRvIG1ha2UgYW55XG4gKiBsYXN0LW1pbnV0ZSBhZGp1c3RtZW50cyB0byB0aGUgcmVkdWNlZCBjb2xsZWN0aW9uIGJlZm9yZSByZXR1cm5pbmcgaXQuXG4gKlxuICogQXJyYXlzLCBzdHJpbmdzLCBhbmQgb2JqZWN0cyBhcmUgYWxsIGdpdmVuIHN1cHBvcnQgZm9yIGFsbCBvZiB0aGVzZVxuICogcHJvdG9jb2xzLiBPdGhlciBjb2xsZWN0aW9ucyB3aWxsIGhhdmUgdG8gcHJvdmlkZSB0aGVpciBvd24gKHRob3VnaCBpdCBzaG91bGRcbiAqIGJlIG5vdGVkIHRoYXQgc2luY2UgYGl0ZXJhdG9yYCBpcyBidWlsdC1pbiwgbWFueSB0aGlyZC1wYXJ0eSBjb2xsZWN0aW9ucyB3aWxsXG4gKiBhbHJlYWR5IGltcGxlbWVudCB0aGlzIHByb3RvY29sKS4gQXMgYW4gZXhhbXBsZSwgbGV0J3MgYWRkIHRyYW5zZHVjZXIgc3VwcG9ydFxuICogdG8gYSB0aGlyZC1wYXJ0eSBjb2xsZWN0aW9uLCB0aGUgYEltbXV0YWJsZS5MaXN0YCBjb2xsZWN0aW9uIGZyb21cbiAqIHtAbGluayBodHRwczovL2ZhY2Vib29rLmdpdGh1Yi5pby9pbW11dGFibGUtanMvfGltbXV0YWJsZS1qc30uXG4gKlxuICogYGBgXG4gKiBJbW11dGFibGUuTGlzdC5wcm90b3R5cGVbcHJvdG9jb2xzLmluaXRdID0gKCkgPT4gSW1tdXRhYmxlLkxpc3QoKS5hc011dGFibGUoKTtcbiAqIEltbXV0YWJsZS5MaXN0LnByb3RvdHlwZVtwcm90b2NvbHMuc3RlcF0gPSAoYWNjLCBpbnB1dCkgPT4gYWNjLnB1c2goaW5wdXQpO1xuICogSW1tdXRhYmxlLkxpc3QucHJvdG90eXBlW3Byb3RvY29scy5yZXN1bHRdID0gKHZhbHVlKSA9PiB2YWx1ZS5hc0ltbXV0YWJsZSgpO1xuICogYGBgXG4gKlxuICogYEltbXV0YWJsZS5MaXN0YCBhbHJlYWR5IGltcGxlbWVudHMgYGl0ZXJhdG9yYCwgc28gd2UgZG9uJ3QgaGF2ZSB0byBkbyBpdFxuICogb3Vyc2VsdmVzLlxuICpcbiAqIFRoZSBgaW5pdGAgZnVuY3Rpb24gcmV0dXJucyBhbiBlbXB0eSBtdXRhYmxlIGxpc3QuIFRoaXMgaXMgaW1wb3J0YW50IGZvclxuICogaW1tdXRhYmxlLWpzIGJlY2F1c2UgaXRzIGRlZmF1bHQgbGlzdHMgYXJlIGltbXV0YWJsZSwgYW5kIGltbXV0YWJsZSBsaXN0c1xuICogbWVhbiB0aGF0IGEgbmV3IGxpc3QgaGFzIHRvIGJlIGNyZWF0ZWQgd2l0aCBldmVyeSByZWR1Y3Rpb24gc3RlcC4gSXQgd291bGRcbiAqIHdvcmsgZmluZSwgYnV0IGl0J3MgcXVpdGUgaW5lZmZpY2llbnQuXG4gKlxuICogVGhlIGBzdGVwYCBmdW5jdGlvbiBhZGRzIHRoZSBuZXh0IHZhbHVlIHRvIHRoZSBhbHJlYWR5LWNyZWF0ZWQgbGlzdC5cbiAqIGBJbW11dGFibGUuTGlzdGAgcHJvdmlkZXMgYSBgcHVzaGAgZnVuY3Rpb24gdGhhdCB3b3JrcyBsaWtlIGFuIGFycmF5J3NcbiAqIGBwdXNoYCwgZXhjZXB0IHRoYXQgaXQgcmV0dXJucyB0aGUgbmV3IGxpc3Qgd2l0aCB0aGUgdmFsdWUgcHVzaGVkIG9udG8gaXQuXG4gKiBUaGlzIGlzIHBlcmZlY3QgZm9yIG91ciBgc3RlcGAgZnVuY3Rpb24uXG4gKlxuICogVGhlIGByZXN1bHRgIGZ1bmN0aW9uIGNvbnZlcnRzIHRoZSBub3ctZmluaXNoZWQgbXV0YWJsZSBsaXN0IGludG8gYW5cbiAqIGltbXV0YWJsZSBvbmUsIHdoaWNoIGlzIHdoYXQncyBnb2luZyB0byBiZSBleHBlY3RlZCBpZiB3ZSdyZSB0cmFuc2R1Y2luZ1xuICogc29tZXRoaW5nIGludG8gYW4gYEltbXV0YWJsZS5MaXN0YC4gSW4gbW9zdCBjYXNlcywgYHJlc3VsdGAgZG9lc24ndCBoYXZlIHRvXG4gKiBkbyBhbnkgd29yaywgYnV0IHNpbmNlIHdlJ3JlIGNyZWF0aW5nIGFuIGludGVybWVkaWF0ZSByZXByZXNlbnRhdGlvbiBvZiBvdXJcbiAqIGNvbGxlY3Rpb24gdHlwZSBoZXJlLCB0aGlzIGxldHMgdXMgY3JlYXRlIHRoZSBjb2xsZWN0aW9uIHRoYXQgd2UgYWN0dWFsbHlcbiAqIHdhbnQgdG8gb3V0cHV0LiAoV2l0aG91dCBgcmVzdWx0YCwgd2Ugd291bGQgaGF2ZSB0byB1c2UgaW1tdXRhYmxlIGxpc3RzIGFsbFxuICogdGhlIHdheSB0aHJvdWdoLCBjcmVhdGluZyBhIG5ldyBvbmUgd2l0aCBlYWNoIGBzdGVwYCBmdW5jdGlvbiwgc2luY2Ugd2VcbiAqIHdvdWxkbid0IGJlIGFibGUgdG8gbWFrZSB0aGlzIGNvbnZlcnN0aW9uIGF0IHRoZSBlbmQuKVxuICpcbiAqIFdpdGggdGhvc2UgcHJvdG9jb2xzIGltcGxlbWVudGVkIG9uIHRoZSBwcm90b3R5cGUsIGBJbW11dGFibGUuTGlzdGBcbiAqIGNvbGxlY3Rpb25zIGNhbiBub3cgc3VwcG9ydCBhbnkgdHJhbnNkdWN0aW9uIHdlIGNhbiBvZmZlci5cbiAqXG4gKiAjIyMgUHJvdG9jb2xzXG4gKlxuICogQWZ0ZXIgdGFsa2luZyBhIGxvdCBhYm91dCBwcm90b2NvbHMgYW5kIHNob3dpbmcgaG93IHRoZXkncmUgcHJvcGVydGllcyBhZGRlZFxuICogdG8gYW4gb2JqZWN0LCBpdCdzIHByb2JhYmx5IHByZXR0eSBvYnZpb3VzIHRoYXQgdGhlcmUncyBiZWVuIG5vIG1lbnRpb24gb2ZcbiAqIHdoYXQgdGhlIGFjdHVhbCBuYW1lcyBvZiB0aG9zZSBwcm9wZXJ0aWVzIGFyZS4gVGhhdCdzIHdoYXRcbiAqIGB7QGxpbmsgbW9kdWxlOmNvcmUucHJvdG9jb2xzfHByb3RvY29sc31gIGlzIGZvci5cbiAqXG4gKiBUaGUgYmVzdCB3YXkgdG8gdXNlIHRoZXNlIGtleXMgY2FuIGJlIHNlZW4gaW4gdGhlIGltbXV0YWJsZS1qcyBleGFtcGxlIGFib3ZlLlxuICogSW5zdGVhZCBvZiB3b3JyeWluZyBhYm91dCB0aGUgbmFtZSBvZiB0aGUga2V5IGZvciB0aGUgYGluaXRgIHByb3RvY29sLCB0aGVcbiAqIHZhbHVlIG9mIGBwcm90b2NvbHMuaW5pdGAgaXMgdXNlZC5cbiAqXG4gKiBge0BsaW5rIG1vZHVsZTpjb3JlLnByb3RvY29sc3xwcm90b2NvbHN9YCBkZWZpbmVzIHRoZXNlIHByb3RvY29sIHByb3BlcnR5XG4gKiBuYW1lcy5cbiAqXG4gKiAtIGBpbml0YFxuICogLSBgc3RlcGBcbiAqIC0gYHJlc3VsdGBcbiAqIC0gYHJlZHVjZWRgOiB1c2VkIGludGVybmFsbHkgdG8gbWFyayBhIGNvbGxlY3Rpb24gYXMgYWxyZWFkeSByZWR1Y2VkXG4gKiAtIGB2YWx1ZWA6IHVzZWQgaW50ZXJuYWxseSB0byBwcm92aWRlIHRoZSBhY3R1YWwgdmFsdWUgb2YgYSByZWR1Y2VkXG4gKiAgIGNvbGxlY3Rpb25cbiAqXG4gKiBUaGUgZmluYWwgdHdvIHZhbHVlcyBkb24ndCBoYXZlIGEgbG90IG9mIHVzZSBvdXRzaWRlIHRoZSBsaWJyYXJ5IHVubGVzc1xuICogeW91J3JlIHdyaXRpbmcgeW91ciBvd24gdHJhbnNkdWNlcnMuXG4gKlxuICogIyMgSG93IE9iamVjdHMgQXJlIFRyZWF0ZWRcbiAqXG4gKiBPYmplY3RzIGJlYXIgc29tZSB0aG91Z2h0IGJlY2F1c2UgcmVndWxhcmx5LCB0aGV5IGFyZW4ndCBjYW5kaWRhdGVzIGZvclxuICogaXRlcmF0aW9uIChhbmQgdGhlcmVmb3JlIGZvciB0cmFuc2R1Y3Rpb24gaW4gZ2VuZXJhbCkuIFRoZXkgZG9uJ3QgaGF2ZSBhIHZlcnlcbiAqIHN0cmFpZ2h0Zm9yd2FyZCBpZGVhIG9mIG9yZGVyLCBhbmQgdGhleSBoYXZlICp0d28qIHBpZWNlcyBvZiBkYXRhIChrZXkgYW5kXG4gKiB2YWx1ZSkgZm9yIGV2ZXJ5IGVsZW1lbnQgaW5zdGVhZCBvZiBvbmUuIFlldCBpdCdzIHVuZGVuaWFibGUgdGhhdCBhdCBsZWFzdFxuICogZm9yIG1vc3QgdHJhbnNmb3JtYXRpb25zLCBiZWluZyBhYmxlIHRvIGFwcGx5IHRoZW0gdG8gb2JqZWN0cyB3b3VsZCBiZSBxdWl0ZVxuICogaGFuZHkuXG4gKlxuICogRm9yIHRoYXQgcmVhc29uLCBzcGVjaWFsIHN1cHBvcnQgaXMgcHJvdmlkZWQgZW5kLXRvLWVuZCBmb3Igb2JqZWN0cy5cbiAqXG4gKiAjIyMgT2JqZWN0IGl0ZXJhdGlvblxuICpcbiAqIEl0ZXJhdGluZyBvdmVyIGFuIG9iamVjdCB3aWxsIHByb2R1Y2Ugb25lIG9iamVjdCBwZXIgcHJvcGVydHkgb2YgdGhlIG9yaWdpbmFsXG4gKiBvYmplY3QuIEFuIG9yZGVyIGlzIGltcG9zZWQ7IGJ5IGRlZmF1bHQsIHRoaXMgb3JkZXIgdGhlIHNhbWUgYXMgdGhlIG9yZGVyaW5nXG4gKiBvZiBrZXlzIGluIHBvc3QtRVM2IEphdmFzY3JpcHQ6XG4gKlxuICogMS4gS2V5cyB0aGF0IGFyZSBpbnRlZ2VycywgaW4gYXNjZW5kaW5nIG51bWVyaWNhbCBvcmRlclxuICogMi4gQWxsIG90aGVyIHN0cmluZyBrZXlzLCBpbiB0aGUgb3JkZXIgaW4gd2hpY2ggdGhleSB3ZXJlIGFkZGVkIHRvIHRoZSBvYmplY3RcbiAqIDMuIEFsbCBzeW1ib2wga2V5cywgaW4gdGhlIG9yZGVyIGluIHdoaWNoIHRoZXkgd2VyZSBhZGRlZCB0byB0aGUgb2JqZWN0XG4gKlxuICogVGhlIGB7QGxpbmsgbW9kdWxlOmNvcmUuaXRlcmF0b3J8aXRlcmF0b3J9YCBmdW5jdGlvbiBjYW4gYmUgcGFzc2VkIGEgc29ydGluZ1xuICogZnVuY3Rpb24gdGhhdCBjYW4gc29ydCBrZXlzIGluIGFueSBvdGhlciB3YXkuXG4gKlxuICogVGhlIHJlc3VsdCBvZiB0aGUgaXRlcmF0aW9uLCBpcyBhIHNldCBvZiBvYmplY3RzIGVhY2ggd2l0aCBhIHNpbmdsZSBwcm9wZXJ0eSxcbiAqIG9uZSBmb3IgZWFjaCBlbnVtZXJhYmxlIG93biBwcm9wZXJ0eSBvbiB0aGUgb3JpZ2luYWwgb2JqZWN0LiBUaGUgc3RhbmRhcmRcbiAqIG9yZGVyaW5nIGZvciBvYmplY3RzIChmcm9tIEVTNiBvbndhcmQpIGlzIGFzIGZvbGxvd3M6XG4gKlxuICogIyMjIFRyYW5zZm9ybWluZyBvYmplY3RzXG4gKlxuICogV2hpbGUgaXRlcmF0aW5nIG92ZXIgb2JqZWN0cyBpbiB0aGlzIHdheSBpcyBzdHJhaWdodGZvcndhcmQsIHRoZSBzeW50YXggb2ZcbiAqIG9iamVjdHMgbWFrZXMgaXQgdWdseSB0byB0cmFuc2Zvcm0gdGhlbSBpbiB0aGlzIGZvcm0uIEhlcmUncyBhbiBleGFtcGxlIG9mIGFcbiAqIHRyYW5zZm9ybWF0aW9uIGZ1bmN0aW9uIHRoYXQgbWFrZXMgdGhlIG9iamVjdCdzIGtleXMgdXBwZXItY2FzZSBhbmQgYWRkcyBvbmVcbiAqIHRvIGVhY2ggb2YgdGhlIHZhbHVlczpcbiAqXG4gKiBgYGBcbiAqIGZ1bmN0aW9uIHRyYW5zZm9ybShvYmopIHtcbiAqICAgY29uc3Qga2V5ID0gT2JqZWN0LmtleXMob2JqKVswXTtcbiAqICAgY29uc3QgdmFsdWUgPSBvYmpba2V5XTtcbiAqICAgcmV0dXJuIHsgW2tleS50b1VwcGVyQ2FzZSgpXTogdmFsdWUgKyAxIH07XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBBIGhlbHBlciBmdW5jdGlvbiBuYW1lZCBge0BsaW5rIG1vZHVsZTpjb3JlLnByb3BlcnR5fHByb3BlcnR5fWAgY2FuIGltcHJvdmVcbiAqIHRoaXMgYnkgaGFuZGxpbmcgdGhlIGJvaWxlcnBsYXRlLlxuICpcbiAqIGBgYFxuICogZnVuY3Rpb24gaW1wcm92ZWRUcmFuc2Zvcm0ob2JqKSB7XG4gKiAgIGNvbnN0IHtrLCB2fSA9IHByb3BlcnR5KG9iaik7XG4gKiAgIHJldHVybiB7IFtrLnRvVXBwZXJDYXNlKCldOiB2ICsgMSB9O1xuICogfVxuICogYGBgXG4gKlxuICogIyMjIFJlZHVjaW5nIG9iamVjdHNcbiAqXG4gKiBUaGUgYnVpbHQtaW4gcmVkdWNlcnMgKGZvciBhcnJheXMsIG9iamVjdHMsIHN0cmluZ3MsIGFuZCBpdGVyYXRvcnMpXG4gKiB1bmRlcnN0YW5kIHRoZXNlIHNpbmdsZS1wcm9wZXJ0eSBvYmplY3RzIGFuZCByZWR1Y2UgdGhlbSBpbiB0aGUgcHJvcGVyIG1hbm5lclxuICogd2l0aG91dCBhbnkgZnVydGhlciB3b3JrLlxuICpcbiAqIFRoYXQncyBpdCBmb3Igb2JqZWN0LW9iamVjdCByZWR1Y3Rpb24uIENvbnZlcnRpbmcgYmV0d2VlbiBvYmplY3RzIGFuZCBvdGhlclxuICogdHlwZXMgaXMgYW5vdGhlciBtYXR0ZXIuXG4gKlxuICogRXZlcnkgdHJhbnNkdWNlciBmdW5jdGlvbiBleGNlcHQgZm9yIGB7QGxpbmsgbW9kdWxlOmNvcmUuc2VxdWVuY2V8c2VxdWVuY2V9YFxuICogaXMgY2FwYWJsZSBvZiB0dXJuaW5nIGFuIG9iamVjdCBpbnRvIGEgZGlmZmVyZW50IHR5cGUgb2YgY29sbGVjdGlvbiwgdHVybmluZ1xuICogYSBkaWZmZXJlbnQgdHlwZSBvZiBjb2xsZWN0aW9uIGludG8gYW4gb2JqZWN0LCBvciBib3RoLiBPYmplY3RzIGFyZSBkaWZmZXJlbnRcbiAqIGJlY2F1c2UgdGhleSdyZSB0aGUgb25seSBcImNvbGxlY3Rpb25zXCIgdGhhdCBoYXZlIHR3byBkaWZmZXJlbnQgcGllY2VzIG9mIGRhdGFcbiAqIHBlciBlbGVtZW50LiBCZWNhdXNlIG9mIHRoaXMsIHdlIGhhdmUgdG8gaGF2ZSBhIHN0cmF0ZWd5IG9uIGhvdyB0byBtb3ZlIGZyb21cbiAqIG9uZSB0byBhbm90aGVyLlxuICpcbiAqIFRyYW5zZHVjaW5nIGFuIG9iamVjdCBpbnRvIGEgZGlmZmVyZW50IHR5cGUgaXMgZ2VuZXJhbGx5IHByZXR0eSBlYXN5LiBJZiBhblxuICogb2JqZWN0IGlzIGNvbnZlcnRlZCBpbnRvIGFuIGFycmF5LCBmb3IgaW5zdGFuY2UsIHRoZSBhcnJheSBlbGVtZW50cyB3aWxsIGVhY2hcbiAqIGJlIHNpbmdsZS1wcm9wZXJ0eSBvYmplY3RzLCBvbmUgcGVyIHByb3BlcnR5IG9mIHRoZSBvcmlnaW5hbCBvYmplY3QuXG4gKlxuICogU3RyaW5ncyBhcmUgYSBkaWZmZXJlbnQgc3RvcnksIHNpbmNlIGVuY29kaW5nIGEgc2luZ2xlLXByb3BlcnR5IG9iamVjdCB0byBhXG4gKiBzdHJpbmcgaXNuJ3QgcG9zc2libGUgKGJlY2F1c2UgZXZlcnkgXCJlbGVtZW50XCIgb2YgYSBzdHJpbmcgaGFzIHRvIGJlIGEgc2luZ2xlXG4gKiBjaGFyYWN0ZXIpLiBTdHJpbmdzIHRoYXQgYXJlIHByb2R1Y2VkIGZyb20gb2JqZWN0cyB3aWxsIGluc3RlYWQganVzdCBiZSB0aGVcbiAqIG9iamVjdCB2YWx1ZXMsIGNvbmNhdGVuYXRlZC4gQmVjYXVzZSBvYmplY3RzIGFyZSBpdGVyYXRlZCBpbiBhIHBhcnRpY3VsYXJcbiAqIG9yZGVyLCB0aGlzIGNvbnZlcnNpb24gd2lsbCBhbHdheXMgcHJvZHVjZSB0aGUgc2FtZSBzdHJpbmcsIGJ1dCBleGNlcHQgaW5cbiAqIHNvbWUgdmVyeSBzcGVjaWZpYyBjYXNlcyB0aGVyZSByZWFsbHkgaXNuJ3QgYSBsb3Qgb2YgdXNlIGZvciB0aGlzIGNvbnZlcnNpb24uXG4gKlxuICogYGBgXG4gKiBjb25zdCBvYmogPSB7YTogMSwgYjogMn07XG4gKlxuICogbGV0IHJlc3VsdCA9IGFzQXJyYXkob2JqKTtcbiAqIC8vIHJlc3VsdCA9IFt7YTogMX0sIHtiOiAyfV1cbiAqXG4gKiByZXN1bHQgPSBhc0l0ZXJhdG9yKG9iaik7XG4gKiAvLyByZXN1bHQgaXMgYW4gaXRlcmF0b3Igd2l0aCB0d28gdmFsdWVzOiB7YTogMX0gYW5kIHtiOiAyfVxuICpcbiAqIHJlc3VsdCA9IGludG8oSW1tdXRhYmxlLkxpc3QoKSwgb2JqKVxuICogLy8gcmVzdWx0IGlzIGFuIGltbXV0YWJsZSBsaXN0IHdpdGggdHdvIGVsZW1lbnRzOiB7YTogMX0gYW5kIHtiOiAyfVxuICpcbiAqIHJlc3VsdCA9IGFzU3RyaW5nKG9iaik7XG4gKiAvLyByZXN1bHQgaXMgJzEyJ1xuICogYGBgXG4gKlxuICogVGhlIG9wcG9zaXRlIGNvbnZlcnNpb24gZGVwZW5kcyBvbiB0aGUgdmFsdWVzIGluc2lkZSB0aGUgY29sbGVjdGlvbnMuIElmXG4gKiB0aG9zZSB2YWx1ZXMgYXJlIG9iamVjdHMsIHRoZW4gdGhlIHJlc3VsdCBpcyBhbiBvYmplY3Qgd2l0aCBhbGwgb2YgdGhlXG4gKiBvYmplY3RzIGNvbWJpbmVkIChpZiBtb3JlIHRoYW4gb25lIGhhcyB0aGUgc2FtZSBrZXksIHRoZSBsYXN0IG9uZSBpcyB0aGUgb25lXG4gKiB0aGF0J3Mga2VwdCkuIE90aGVyd2lzZSwga2V5cyBhcmUgY3JlYXRlZCBmb3IgZWFjaCBvZiB0aGUgZWxlbWVudHMsIHN0YXJ0aW5nXG4gKiB3aXRoIGAwYCBhbmQgaW5jcmVhc2luZyBmcm9tIHRoZXJlLlxuICpcbiAqIFRoaXMgbWVhbnMgdGhhdCBjb252ZXJ0aW5nIGFuIG9iamVjdCB0byBhbnkgbm9uLXN0cmluZyBjb2xsZWN0aW9uIGFuZCBiYWNrXG4gKiBwcm9kdWNlcyB0aGUgb3JpZ2luYWwgb2JqZWN0LlxuICpcbiAqIGBgYFxuICogbGV0IHJlc3VsdCA9IGFzT2JqZWN0KFt7YTogMX0sIHtiOiAyfV0pO1xuICogLy8gcmVzdWx0ID0ge2E6IDEsIGI6IDJ9XG4gKlxuICogcmVzdWx0ID0gYXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vIHJlc3VsdCA9IHswOiAxLCAxOiAyLCAyOiAzfVxuICpcbiAqIHJlc3VsdCA9IGFzT2JqZWN0KCdoZWxsbycpO1xuICogLy8gcmVzdWx0ID0gezA6ICdoJywgMTogJ2UnLCAyOiAnbCcsIDM6ICdsJywgNDogJ28nfVxuICogYGBgXG4gKlxuICogQG1vZHVsZSBjb3JlXG4gKi9cblxuZXhwb3J0IHsgcHJvdG9jb2xzLCBpc0ltcGxlbWVudGVkIH0gZnJvbSBcIm1vZHVsZXMvcHJvdG9jb2xcIjtcbmV4cG9ydCB7IGl0ZXJhdG9yLCBpc0l0ZXJhYmxlIH0gZnJvbSBcIm1vZHVsZXMvaXRlcmF0aW9uXCI7XG5leHBvcnQge1xuICBjb21wbGV0ZSxcbiAgdW5jb21wbGV0ZSxcbiAgaXNDb21wbGV0ZWQsXG4gIGVuc3VyZUNvbXBsZXRlZCxcbiAgZW5zdXJlVW5jb21wbGV0ZWQsXG4gIHJlZHVjZSxcbiAgdG9GdW5jdGlvbixcbiAgdG9SZWR1Y2VyLFxuICB0b1RyYW5zZHVjZXJcbn0gZnJvbSBcIm1vZHVsZXMvcmVkdWN0aW9uXCI7XG5leHBvcnQge1xuICBpc0FycmF5LFxuICBpc0Z1bmN0aW9uLFxuICBpc0dlbmVyYXRvckZ1bmN0aW9uLFxuICBpc051bWJlcixcbiAgaXNPYmplY3QsXG4gIGlzU3RyaW5nXG59IGZyb20gXCJtb2R1bGVzL3V0aWxzXCI7XG5cbi8qKlxuICogQW4gaXRlcmFibGUgYXMgZGVmaW5lZCBieSBKYXZhU2NyaXB0LlxuICpcbiAqIEB0eXBlZGVmIEpzSXRlcmFibGVcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y29yZVxuICogQHByb3BlcnR5IHttb2R1bGU6Y29yZS5Kc0l0ZXJhYmxlRnVuY3Rpb259IFN5bWJvbC5pdGVyYXRvciBBIGZ1bmN0aW9uIHRoYXRcbiAqICAgICBwcm9kdWNlcyBhbiBpdGVyYXRvciB3aGVuIGNhbGxlZC5cbiAqL1xuXG4vKipcbiAqIEEgZnVuY3Rpb24gdGhhdCBwcm9kdWNlcyBhbiBpdGVyYXRvci4gVGhpcyBpcyB0aGUgY2hhcmFjdGVyaXN0aWMgcHJvcGVydHkgb2ZcbiAqIGEgSmF2YVNjcmlwdCBpdGVyYWJsZS5cbiAqXG4gKiBAY2FsbGJhY2sgSnNJdGVyYWJsZUZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNvcmVcbiAqIEByZXR1cm5zIHttb2R1bGU6Y29yZS5JdGVyYXRvcn0gQW4gaXRlcmF0b3Igb3ZlciB0aGVcbiAqICAgICB7QGxpbmsgbW9kdWxlOmNvcmUuSnNJdGVyYWJsZX0gdGhhdCBwcm9kdWNlZCBpdC5cbiAqL1xuXG4vKipcbiAqIEFuIGl0ZXJhYmxlIGFzIGRlZmluZWQgYnkgdGhpcyBsaWJyYXJ5LiBTaW5jZSBpdCBwcm92aWRlcyBzcGVjaWZpYyBzdXBwb3J0XG4gKiBmb3Igb2JqZWN0cywgdGhpcyB0eXBlIGlzIG1lcmVseSBhIG5vcm1hbCBKYXZhU2NyaXB0IGl0ZXJhYmxlICpvciogYSBwbGFpblxuICogb2JqZWN0LlxuICpcbiAqIEB0eXBlZGVmIHsoT2JqZWN0fG1vZHVsZTpjb3JlLkpzSXRlcmFibGUpfSBJdGVyYWJsZVxuICogQG1lbWJlcm9mIG1vZHVsZTpjb3JlXG4gKi9cblxuLyoqXG4gKiBBIGdlbmVyaWMgaXRlcmF0b3IuIFRoaXMgY29uZm9ybXMgdG8gdGhlIGBpdGVyYXRvcmAgcHJvdG9jb2wgaW4gdGhhdCBpdCBoYXMgYVxuICogYHtAbGluayBtb2R1bGU6Y29yZS5OZXh0RnVuY3Rpb258bmV4dH1gIGZ1bmN0aW9uIHRoYXQgcHJvZHVjZXNcbiAqIHtAbGluayBtb2R1bGU6Y29yZS5OZXh0VmFsdWV8YGl0ZXJhdG9yYC1jb21wYXRpYmxlIG9iamVjdHN9LlxuICpcbiAqIEB0eXBlZGVmIEl0ZXJhdG9yXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNvcmVcbiAqIEBwcm9wZXJ0eSB7bW9kdWxlOmNvcmUuTmV4dEZ1bmN0aW9ufSBuZXh0IEEgZnVuY3Rpb24gdGhhdCwgd2hlbiBjYWxsZWQsXG4gKiAgICAgcmV0dXJucyB0aGUgbmV4dCBpdGVyYXRvciB2YWx1ZS5cbiAqL1xuXG4vKipcbiAqIFRoZSBmdW5jdGlvbiB0aGF0IHNhdGlzZmllcyB0aGUgYGl0ZXJhdG9yYCBwcm90b2NvbCBvbiBhbiBvYmplY3QuIFdoZW5cbiAqIGNhbGxlZCwgaXQgcmV0dXJucyB0aGUgbmV4dCB2YWx1ZSBpbiB0aGUgaXRlcmF0b3IuXG4gKlxuICogQGNhbGxiYWNrIE5leHRGdW5jdGlvblxuICogQG1lbWJlcm9mIG1vZHVsZTpjb3JlXG4gKiBAcmV0dXJucyB7bW9kdWxlOmNvcmUuTmV4dFZhbHVlfSBUaGUgbmV4dCB2YWx1ZSBpbiB0aGUgaXRlcmF0b3IuXG4gKi9cblxuLyoqXG4gKiBUaGUgb2JqZWN0IHJldHVybmVkIGJ5IGEgY2FsbCB0byBge0BsaW5rIG1vZHVsZTpjb3JlLk5leHRGdW5jdGlvbnxuZXh0fWAuIEl0XG4gKiBpbmRpY2F0ZXMgd2hldGhlciB0aGUgaXRlcmF0b3IgaXMgY29tcGxldGUgYW5kLCBpZiBub3QsIHdoYXQgdGhlIG5leHQgdmFsdWVcbiAqIGlzLlxuICpcbiAqIEB0eXBlZGVmIHtvYmplY3R9IE5leHRWYWx1ZVxuICogQG1lbWJlcm9mIG1vZHVsZTpjb3JlXG4gKiBAcHJvcGVydHkgeyp9IHZhbHVlIFRoZSB2YWx1ZSB0aGF0IHRoZSBpdGVyYXRvciBoYXMgcHJvdmlkZWQuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IGRvbmUgSW5kaWNhdGVzIHdoZXRoZXIgdGhlIGl0ZXJhdG9yIGhhcyBjb21wbGV0ZWQuIElmXG4gKiAgICAgdGhpcyBpcyBgdHJ1ZWAsIHRoZW4gYHZhbHVlYCB3aWxsIGJlIGB1bmRlZmluZWRgIGFuZCBldmVyeSBzdWJzZXF1ZW50XG4gKiAgICAgY2FsbCB0byBge0BsaW5rIG1vZHVsZTpjb3JlLk5leHRGdW5jdGlvbnxuZXh0fWAgd2lsbCBjb250aW51ZSB0byBwcm9kdWNlXG4gKiAgICAgdGhlIHNhbWUgdmFsdWUuIElmIGl0J3MgYGZhbHNlYCwgdGhlbiBgdmFsdWVgIHJlcHJlc2VudHMgdGhlIG5ldCB2YWx1ZSBpblxuICogICAgIHRoZSBpdGVyYXRvciwgYW5kIHRoZSBuZXh0IGNhbGwgdG9cbiAqICAgICBge0BsaW5rIG1vZHVsZTpjb3JlLk5leHRGdW5jdGlvbnxuZXh0fWAgd2lsbCBjb250aW51ZSB0byBwcm9kdWNlIHRoZSBuZXh0XG4gKiAgICAgdmFsdWUuXG4gKi9cblxuLyoqXG4gKiBBIHNvcnQgZnVuY3Rpb24gZm9yIHRoZSBrZXlzIG9mIGFuIG9iamVjdC4gVGhpcyBjb25mb3JtcyB0byB0aGUgbm9ybWFsIHNvcnRcbiAqIGZ1bmN0aW9uIHVzZWQgaW4gYEFycmF5LnByb3RvdHlwZS5zb3J0YC5cbiAqXG4gKiBAY2FsbGJhY2sgU29ydEZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNvcmVcbiAqIEBwcm9wZXJ0eSB7Kn0gYSBUaGUgZmlyc3QgdmFsdWUgdG8gYmUgc29ydGVkLlxuICogQHByb3BlcnR5IHsqfSBiIFRoZSBzZWNvbmQgdmFsdWUgdG8gYmUgc29ydGVkLlxuICogQHJldHVybnMge251bWJlcn0gRWl0aGVyIGAtMWAgaWYgYGEgPiBiYCwgYDFgIGlmIGBhIDwgYmAsIG9yIGAwYCBpZiBgYSA9PT1cbiAqICAgICBiYC5cbiAqL1xuXG4vKipcbiAqIEEgZnVuY3Rpb24gdGhhdCBjYW4gaGF2ZSBhbiBpdGVyYXRvciBjcmVhdGVkIGZvciBpdC5cbiAqXG4gKiBAY2FsbGJhY2sgSXRlcmFibGVGdW5jdGlvblxuICogQG1lbWJlcm9mIG1vZHVsZTpjb3JlXG4gKiBAcGFyYW0ge251bWJlcn0gW2luZGV4XSBUaGUgbnVtYmVyIG9mIHRpbWVzIHRoYXRcbiAqICAgICBge0BsaW5rIG1vZHVsZTpjb3JlLk5leHRGdW5jdGlvbnxuZXh0fWAgaGFzIGJlZW4gY2FsbGVkIG9uIHRoZSBmdW5jdGlvbidzXG4gKiAgICAgaXRlcmF0b3IuIFRoaXMgd2lsbCBzdGFydCBhdCBgMGAgZm9yIHRoZSBmaXJzdCBjYWxsIHRvXG4gKiAgICAgYHtAbGluayBtb2R1bGU6Y29yZS5OZXh0RnVuY3Rpb258bmV4dH1gIGFuZCBpbmNyZWFzZSBieSBvbmUgZm9yIGVhY2hcbiAqICAgICBzdWJzZXF1ZW50IGNhbGwuXG4gKiBAcGFyYW0geyp9IFtsYXN0XSBUaGUgcmV0dXJuIHZhbHVlIG9mIHRoZSBmdW5jdGlvbiB0aGUgbGFzdCB0aW1lXG4gKiAgICAgYHtAbGluayBtb2R1bGU6Y29yZS5OZXh0RnVuY3Rpb258bmV4dH1gIHdhcyBjYWxsZWQgb24gaXRzIGl0ZXJhdG9yLiBGb3JcbiAqICAgICB0aGUgZmlyc3QgY2FsbCwgdGhpcyBpcyBzZXQgdG8gYHVuZGVmaW5lZGAuXG4gKiBAcmV0dXJucyB7Kn0gVGhlIHJldHVybiB2YWx1ZSBmb3IgdGhhdCBpdGVyYXRpb24uXG4gKi9cblxuLyoqXG4gKiBBbiBvYmplY3QgcmVwcmVzZW50YXRpb24gb2YgYSBzaW5nbGUtcHJvcGVydHkgb2JqZWN0LCBidXQgdXNpbmcgb25lIHByb3BlcnR5XG4gKiBmb3IgdGhlIGtleSBhbmQgb25lIGZvciB0aGUgdmFsdWUuIFRoaXMgZm9ybWF0IGlzIGVhc2llciB0byB1c2UgaW5cbiAqIHRyYW5zZm9ybWF0aW9uIGZ1bmN0aW9ucy5cbiAqXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBQcm9wZXJ0eU9iamVjdFxuICogQG1lbWJlcm9mIG1vZHVsZTpjb3JlXG4gKiBAcHJvcGVydHkgeyhTdHJpbmd8U3ltYm9sKX0gayBUaGUga2V5IG9mIHRoZSBzaW5nbGUtcHJvcGVydHkgb2JqZWN0IHRoYXQgdGhpc1xuICogICAgIG9iamVjdCByZXByZXNlbnRzLlxuICogQHByb3BlcnR5IHsqfSB2IFRoZSB2YWx1ZSBvZiB0aGUgc2luZ2xlLXByb3BlcnR5IG9iamVjdCB0aGF0IHRoaXMgb2JqZWN0XG4gKiAgICAgcmVwcmVzZW50cy5cbiAqL1xuXG4vKipcbiAqIEFuIGluaXQgZnVuY3Rpb24sIHdoaWNoIHByb3ZpZGVzIGEgbmV3LCBlbXB0eSBpbnN0YW5jZSBvZiBhIGNvbGxlY3Rpb24uXG4gKlxuICogQGNhbGxiYWNrIEluaXRGdW5jdGlvblxuICogQG1lbWJlcm9mIG1vZHVsZTpjb3JlXG4gKiBAcmV0dXJucyB7Kn0gQSBuZXcsIGVtcHR5IGluc3RhbmNlIG9mIGEgY29sbGVjdGlvbi5cbiAqL1xuXG4vKipcbiAqIEEgc3RlcCBmdW5jdGlvbiwgdGhhdCByZWR1Y2VzIGEgY29sbGVjdGlvbiBhbmQgYSBuZXcgdmFsdWUgdG8gdGhlIGNvbGxlY3Rpb25cbiAqIHdpdGggdGhlIHZhbHVlIGFkZGVkLlxuICpcbiAqIEBjYWxsYmFjayBTdGVwRnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y29yZVxuICogQHBhcmFtIHsqfSBhY2MgQW4gYWNjdW11bGF0ZWQgdmFsdWUgdG8gd2hpY2ggdGhlIG5ldyB2YWx1ZSBpcyBiZWluZyBhZGRlZC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIG5ldyB2YWx1ZSB0byBiZSBhZGRlZCB0byB0aGUgYWNjdW11bGF0ZWQgdmFsdWUuXG4gKiBAcmV0dXJucyB7Kn0gVGhlIGFjY3VtdWxhdGVkIHZhbHVlIHdpdGggdGhlIG5ldyB2YWx1ZSBpbnRlZ3JhdGVkIGludG8gaXQuXG4gKi9cblxuLyoqXG4gKiBBIHJlc3VsdCBmdW5jdGlvbiB0aGF0IG9wdGlvbmFsbHkgbW9kaWZpZXMgdGhlIGlucHV0IGNvbGxlY3Rpb24gYW5kIHRoZW5cbiAqIHJldHVybnMgaXQuIFRoaXMgaXMgdXNlZCBhdCB0aGUgZW5kIG9mIGEgcmVkdWN0aW9uIHRvIGFmZm9yZCBhIGxhc3QgY2hhbmNlXG4gKiBmb3IgdGhlIHRyYW5zZHVjZXIgdG8gbW9kaWZ5IHRoZSBvdXRwdXQgdmFsdWUuXG4gKlxuICogQGNhbGxiYWNrIFJlc3VsdEZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNvcmVcbiAqIEBwYXJhbSB7Kn0gaW5wdXQgVGhlIHZhbHVlIHRvIGJlIG1vZGlmaWVkIGJlZm9yZSBiZWluZyBvdXRwdXQuXG4gKiBAcmV0dXJucyB7Kn0gVGhlIG1vZGlmaWVkIHZhbHVlIHRvIGJlIG91dHB1dCBieSBhIHRyYW5zZHVjZXIuXG4gKi9cblxuLyoqXG4gKiBBbiBvYmplY3Qgd2l0aCBhbGwgb2YgdGhlIGluZm9ybWF0aW9uIG5lY2Vzc2FyeSB0byByZWR1Y2UgdmFsdWVzIGludG8gYVxuICogcGFydGljdWxhciBraW5kIG9mIGNvbGxlY3Rpb24uIFRoZXNlIGFyZSBwYXNzZWQgdG9cbiAqIHtAbGluayBtb2R1bGU6Y29yZS5yZWR1Y2V8cmVkdWNlfSBhbmQgbGlrZSBmdW5jdGlvbnMuXG4gKlxuICogQHR5cGVkZWYgUmVkdWNlclxuICogQG1lbWJlcm9mIG1vZHVsZTpjb3JlXG4gKiBAcHJvcGVydHkge21vZHVsZTpjb3JlLkluaXRGdW5jdGlvbn0gW1N5bWJvbC5mb3IoXCJ0cmFuc2R1Y2VyL2luaXRcIildIFRoZVxuICogICAgIHJlZHVjZXIncyBpbml0IGZ1bmN0aW9uLlxuICogQHByb3BlcnR5IHttb2R1bGU6Y29yZS5TdGVwRnVuY3Rpb259IFN5bWJvbC5mb3IoXCJ0cmFuc2R1Y2VyL3N0ZXBcIikgVGhlXG4gKiAgICAgcmVkdWNlcidzIHN0ZXAgZnVuY3Rpb24uXG4gKiBAcHJvcGVydHkge21vZHVsZTpjb3JlLlJlc3VsdEZ1bmN0aW9ufSBTeW1ib2wuZm9yKFwidHJhbnNkdWNlci9yZXN1bHRcIikgVGhlXG4gKiAgICAgcmVkdWNlcidzIHJlc3VsdCBmdW5jdGlvbi5cbiAqL1xuXG4vKipcbiAqIEEgY29sbGVjdGlvbiB0aGF0IGNhbiBoYXZlIHZhbHVlcyByZWR1Y2VkIGludG8gaXQuIFNpbmNlIHRoaXMgbGlicmFyeVxuICogcHJvdmlkZXMgZXhwbGljaXQgc3VwcG9ydCBmb3IgYXJyYXlzLCBvYmplY3RzLCBhbmQgc3RyaW5ncywgdGhvc2UgdGhyZWUgYXJlXG4gKiBhZGRlZCB0byB0aGUge0BsaW5rIG1vZHVsZTpjb3JlLlJlZHVjZXJ9IHR5cGUgdG8gZGVmaW5lIHRoaXMuXG4gKlxuICogQHR5cGVkZWYgeyhBcnJheXxTdHJpbmd8T2JqZWN0fG1vZHVsZTpjb3JlLlJlZHVjZXIpfSBSZWR1Y2libGVcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y29yZVxuICovXG5cbi8qKlxuICogQSBjb2xsZWN0aW9uIHRoYXQgc3VwcG9ydHMgbm90IG9ubHkgdGhlIHJlZ3VsYXIgaXRlcmFpb24gb3ZlciBpdHMgY29udGVudHMsXG4gKiBidXQgYWxzbyByZWR1Y3Rpb24gb2YgdmFsdWVzIGludG8gaXQuIEl0IGlzIGFuIGludGVyc2VjdGlvbiB0eXBlIGNvbWJpbmluZ1xuICoge0BsaW5rIG1vZHVsZTpjb3JlLkl0ZXJhYmxlfEl0ZXJhYmxlfSBhbmRcbiAqIHtAbGluayBtb2R1bGU6Y29yZS5SZWR1Y2libGV8UmVkdWNpYmxlfS5cbiAqXG4gKiBAdHlwZWRlZiBFeHBsaWNpdEl0ZXJhYmxlUmVkdWNpYmxlXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNvcmVcbiAqIEBwcm9wZXJ0eSB7bW9kdWxlOmNvcmUuSnNJdGVyYWJsZUZ1bmN0aW9ufSBTeW1ib2wuaXRlcmF0b3IgQSBmdW5jdGlvbiB0aGF0XG4gKiAgICAgcHJvZHVjZXMgYW4gaXRlcmF0b3Igd2hlbiBjYWxsZWQuXG4gKiBAcHJvcGVydHkge21vZHVsZTpjb3JlLkluaXRGdW5jdGlvbn0gW1N5bWJvbC5mb3IoXCJ0cmFuc2R1Y2VyL2luaXRcIildIFRoZVxuICogICAgIGNvbGxlY3Rpb24ncyBpbml0IGZ1bmN0aW9uLlxuICogQHByb3BlcnR5IHttb2R1bGU6Y29yZS5TdGVwRnVuY3Rpb259IFN5bWJvbC5mb3IoXCJ0cmFuc2R1Y2VyL3N0ZXBcIikgVGhlXG4gKiAgICAgY29sbGVjdGlvbidzIHN0ZXAgZnVuY3Rpb24uXG4gKiBAcHJvcGVydHkge21vZHVsZTpjb3JlLlJlc3VsdEZ1bmN0aW9ufSBTeW1ib2wuZm9yKFwidHJhbnNkdWNlci9yZXN1bHRcIikgVGhlXG4gKiAgICAgY29sbGVjdGlvbidzIHJlc3VsdCBmdW5jdGlvbi5cbiAqL1xuXG4vKipcbiAqIFRoZSBhY3R1YWwgdHlwZSB1c2VkIGJ5IHJlZHVjaWJsZSBjb2xsZWN0aW9ucyBpbiB0aGlzIGxpYnJhcnkuIEl0IHRha2VzIHRoZVxuICogcHJvcGVydHktYmFzZWQgZGVmaW5pdGlvbiBhbmQgYWRkcyBidWlsdC1pbiB0eXBlcyB0aGF0IGFyZSBzcGVjaWFsbHlcbiAqIHN1cHBvcnRlZCBieSB0aGUgbGlicmFyeS5cbiAqXG4gKiBAdHlwZWRlZiB7KEFycmF5fE9iamVjdHxTdHJpbmd8bW9kdWxlOmNvcmUuRXhwbGljaXRJdGVyYWJsZVJlZHVjaWJsZSl9XG4gKiAgICAgSXRlcmFibGVSZWR1Y2libGVcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y29yZVxuICovXG5cbi8qKlxuICogQSBmdW5jdGlvbiB0aGF0IHRyYW5zZm9ybXMgZGF0YSBhbmQgY2FuIGJlIGNvbXBvc2VkIHdpdGggb3RoZXIgdHJhbnNkdWNlcnNcbiAqIGludG8gYSBzaW5nbGUgdHJhbnNkdWNlci4gVGhlIHRyYW5zZHVjZXJzIHRoZW1zZWx2ZXMgYXJlIHByb3ZpZGVkIGJ5IG90aGVyXG4gKiBsaWJyYXJpZXM7IHRoZSBvbmx5IGludm9sdmVtZW50IG9mIHRoaXMgbGlicmFyIGlzIGFzIGEgY29uc3VtZXIgb2ZcbiAqIHRyYW5zZHVjZXJzLlxuICpcbiAqIFRyYW5zZHVjZXJzIHdvcmsgYnkgaGF2aW5nIHN0ZXAgZnVuY3Rpb25zIHRoYXQgYXJlIGtub3duIHZpYSBwcm90b2NvbCwgYW5kIGl0XG4gKiBpcyB0aGVzZSBzdGVwIGZ1bmN0aW9ucyB0aGF0IHRha2UgYSB2YWx1ZSBhdCBhIHRpbWUgdG8gYmUgdHJhbnNmb3JtZWQgYXNcbiAqIHRoZWlyIGFyZ3VtZW50cy4gVGhlIGFyZ3VtZW50cyB0byB0aGUgdHJhbnNkdWNlcnMgdGhlbXNlbHZlcyBhcmUgb3RoZXJcbiAqIHRyYW5zZHVjZXJzIHRoYXQgYXJlIHRoZW4gY29tcG9zZWQgaW50byBhIHNpbmdsZSB0cmFuc2R1Y2VyLCB3aGljaCBpcyB0aGVuXG4gKiByZXR1cm5lZC4gVGhlIHZhbHVlcyB0aGF0IGFyZSBwcm9kdWNlZCBhcmUgc2VsZG9tIG9mIGNvbnNlcXVlbmNlIHRvIHRoZSBlbmRcbiAqIHVzZXI7IHRoZXNlIGZ1bmN0aW9ucyBleGlzdCB0byBiZSBwYXNzZWQgdG8gb3RoZXIgZnVuY3Rpb25zIHRoYXQgZGVhbCB3aXRoXG4gKiB0cmFuc2R1Y2Vycy5cbiAqXG4gKiBAY2FsbGJhY2sgVHJhbnNkdWNlclxuICogQG1lbWJlcm9mIG1vZHVsZTpjb3JlXG4gKiBAcGFyYW0ge21vZHVsZTpjb3JlLlRyYW5zZHVjZXJGdW5jdGlvbn0geGZvcm0gQSB0cmFuc2R1Y2VyIHRvIGNoYWluIHRoaXNcbiAqICAgICB0cmFuc2R1Y2VyIHRvLlxuICogQHJldHVybiB7bW9kdWxlOmNvcmUuVHJhbnNkdWNlckZ1bmN0aW9ufSBBIG5ldyB0cmFuc2R1Y2VyIGNvbnNpc3Rpbmcgb2YgdGhlXG4gKiAgICAgY29tcG9zaXRpb24gb2YgdGhpcyBvbmUgYW5kIGB4Zm9ybWAuXG4gKi9cblxuLyoqXG4gKiBBbiBvYmplY3QgY29udGFpbmluZyBhbGwgb2YgdGhlIG5lY2Vzc2FyeSBmdW5jdGlvbiBwcm9wZXJ0aWVzIGZvclxuICogdHJhbnNmb3JtaW5nIGRhdGEgYW5kIHRoZW4gcmVkdWNpbmcgaXQgaW50byBhbiBvdXRwdXQgdmFsdWUuIFRoaXMgaXMgdGhlIHNhbWVcbiAqIGFzIHtAbGluayBtb2R1bGU6Y29yZS5SZWR1Y2VyfFJlZHVjZXJ9IGV4Y2VwdCB0aGF0IHRoZSBgaW5pdGAgcHJvcGVydHkgaXMgbm90XG4gKiBvcHRpb25hbC5cbiAqXG4gKiBAdHlwZWRlZiBUcmFuc2R1Y2VyXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNvcmVcbiAqIEBwcm9wZXJ0eSB7bW9kdWxlOmNvcmUuSW5pdEZ1bmN0aW9ufSBTeW1ib2wuZm9yKFwidHJhbnNkdWNlci9pbml0XCIpIFRoZVxuICogICAgIHRyYW5zZHVjZXIncyBpbml0IGZ1bmN0aW9uLlxuICogQHByb3BlcnR5IHttb2R1bGU6Y29yZS5TdGVwRnVuY3Rpb259IFN5bWJvbC5mb3IoXCJ0cmFuc2R1Y2VyL3N0ZXBcIikgVGhlXG4gKiAgICAgdHJhbnNkdWNlcidzIHN0ZXAgZnVuY3Rpb24uXG4gKiBAcHJvcGVydHkge21vZHVsZTpjb3JlLlJlc3VsdEZ1bmN0aW9ufSBTeW1ib2wuZm9yKFwidHJhbnNkdWNlci9yZXN1bHRcIikgVGhlXG4gKiAgICAgdHJhbnNkdWNlcidzIHJlc3VsdCBmdW5jdGlvbi5cbiAqL1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG5cbi8qKlxuICogRnVuY3Rpb25zIHRvIGhlbHAgd2l0aCBpdGVyYXRpb24gb3ZlciBpdGVyYWJsZSBvYmplY3RzIGFuZCBwbGFpbiBvYmplY3RzLlxuICpcbiAqIEBtb2R1bGUgY29yZS9pdGVyYXRpb25cbiAqIEBwcml2YXRlXG4gKi9cblxuaW1wb3J0IHsgaXNJbXBsZW1lbnRlZCB9IGZyb20gXCJtb2R1bGVzL3Byb3RvY29sXCI7XG5pbXBvcnQgeyBpc0Z1bmN0aW9uLCBpc09iamVjdCwgaXNHZW5lcmF0b3JGdW5jdGlvbiB9IGZyb20gXCJtb2R1bGVzL3V0aWxzXCI7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBpdGVyYXRvciBvdmVyIGFuIG9iamVjdC5cbiAqXG4gKiBEZXRhaWxzIGFib3V0IHRoaXMgZnVuY3Rpb24gYXJlIGluY2x1ZGVkIGluIHRoZSBkb2N1bWVudGF0aW9uIGZvclxuICoge0BsaW5rIG1vZHVsZTpjb3JlLml0ZXJhdG9yfGl0ZXJhdG9yfS5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIFRoZSBvYmplY3QgYmVpbmcgaXRlcmF0ZWQgb3Zlci5cbiAqIEBwYXJhbSB7bW9kdWxlOmNvcmUuU29ydEZ1bmN0aW9ufSBbc29ydEZuXSBBbiBvcHRpb25hbCBmdW5jdGlvbiB1c2VkIHRvIHNvcnRcbiAqICAgICB0aGUgb2JqZWN0IGtleXMgYmVmb3JlIGl0ZXJhdGlvbi4gSWYgaXQgaXNuJ3QgcHJvdmlkZWQsIHRoZSBrZXlzIHdpbGwgYmVcbiAqICAgICBzb3J0ZWQgaW4gdGhlIHNhbWUgb3JkZXIgYXMgYE9iamVjdC5rZXlzKG9iailgIHdvdWxkIHNvcnQgdGhlbS5cbiAqIEByZXR1cm5zIHttb2R1bGU6Y29yZS5JdGVyYXRvcn0gQW4gaXRlcmF0b3Igb3ZlciB0aGUgcHJvcGVydGllcyBvZiBgb2JqYC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIG9iamVjdEl0ZXJhdG9yKG9iaiwgc29ydEZuKSB7XG4gIHJldHVybiAoZnVuY3Rpb24qKCkge1xuICAgIGNvbnN0IGtleXMgPVxuICAgICAgdHlwZW9mIHNvcnRGbiA9PT0gXCJmdW5jdGlvblwiXG4gICAgICAgID8gT2JqZWN0LmtleXMob2JqKS5zb3J0KHNvcnRGbilcbiAgICAgICAgOiBPYmplY3Qua2V5cyhvYmopO1xuICAgIGxldCBpbmRleCA9IDA7XG5cbiAgICB3aGlsZSAoaW5kZXggPCBrZXlzLmxlbmd0aCkge1xuICAgICAgY29uc3QgayA9IGtleXNbaW5kZXgrK107XG4gICAgICB5aWVsZCB7IFtrXTogb2JqW2tdIH07XG4gICAgfVxuICB9KSgpO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYW4gaXRlcmF0b3Igb3ZlciBhIGZ1bmN0aW9uLlxuICpcbiAqIERldGFpbHMgYWJvdXQgdGhpcyBmdW5jdGlvbiBhcmUgaW5jbHVkZWQgaW4gdGhlIGRvY3VtZW50YXRpb24gZm9yXG4gKiB7QGxpbmsgbW9kdWxlOmNvcmUuaXRlcmF0b3J8aXRlcmF0b3J9LlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOmNvcmUuSXRlcmFibGVGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEByZXR1cm5zIHttb2R1bGU6Y29yZS5JdGVyYXRvcn0gQW4gaXRlcmF0b3Igb3ZlciB0aGUgcmV0dXJuIHZhbHVlcyBvZiBgZm5gLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZnVuY3Rpb25JdGVyYXRvcihmbikge1xuICByZXR1cm4gKGZ1bmN0aW9uKigpIHtcbiAgICBsZXQgY3VycmVudDtcbiAgICBsZXQgaW5kZXggPSAwO1xuXG4gICAgZm9yICg7Oykge1xuICAgICAgY3VycmVudCA9IGZuKGluZGV4KyssIGN1cnJlbnQpO1xuICAgICAgaWYgKHR5cGVvZiBjdXJyZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgeWllbGQgY3VycmVudDtcbiAgICB9XG4gIH0pKCk7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBpdGVyYXRvciBvdmVyIHRoZSBwcm92aWRlZCB2YWx1ZS5cbiAqXG4gKiBGb3IgY29sbGVjdGlvbnMgdGhhdCBpbXBsZW1lbnQgdGhlIGl0ZXJhYmxlIHByb3RvY29sLCBpdCdzIGFzIHNpbXBsZSBhc1xuICogcmV0dXJuaW5nIHRoZSBpdGVyYXRvciBhbHJlYWR5IGRlZmluZWQgZm9yIHRoYXQgY29sbGVjdGlvbi5cbiAqXG4gKiBgYGBcbiAqIGNvbnN0IGl0ZXIgPSBpdGVyYXRvcihbMSwgMiwgM10pO1xuICogY29uc29sZS5sb2coaXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IDFcbiAqIGNvbnNvbGUubG9nKGl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiAyXG4gKiBjb25zb2xlLmxvZyhpdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4gM1xuICogY29uc29sZS5sb2coaXRlci5uZXh0KCkuZG9uZSk7ICAgIC8vIC0+IHRydWVcbiAqIGBgYFxuICpcbiAqIE9iamVjdHMgYXJlIHNwZWNpYWxseSBzdXBwb3J0ZWQgdG8gcmV0dXJuIGFuIGl0ZXJhdG9yIGFzIHdlbGwsIGV2ZW4gdGhvdWdoXG4gKiB0aGV5IGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgdGhlIGl0ZXJhYmxlIHByb3RvY29sLiBUaGUgaXRlcmF0b3IncyBgbmV4dGBcbiAqIGZ1bmN0aW9uIHByb3ZpZGVzIHNpbmdsZS1wcm9wZXJ0eSBvYmplY3RzLCBvbmUgZm9yIGVhY2ggcHJvcGVydHkgaW4gdGhlXG4gKiBvcmlnaW5hbCBvYmplY3QsIG9yZGVyZWQgaW4gdGhlIHN0YW5kYXJkIHBvc3QtRVM2IG9yZGVyIGZvciBpdGVyYXRpbmcgb3ZlclxuICogb2JqZWN0IGtleXM6XG4gKlxuICogMS4gS2V5cyB0aGF0IGFyZSBpbnRlZ2VycywgaW4gYXNjZW5kaW5nIG51bWVyaWNhbCBvcmRlclxuICogMi4gQWxsIG90aGVyIHN0cmluZyBrZXlzLCBpbiB0aGUgb3JkZXIgaW4gd2hpY2ggdGhleSB3ZXJlIGFkZGVkIHRvIHRoZSBvYmplY3RcbiAqIDMuIEFsbCBzeW1ib2wga2V5cywgaW4gdGhlIG9yZGVyIGluIHdoaWNoIHRoZXkgd2VyZSBhZGRlZCB0byB0aGUgb2JqZWN0XG4gKlxuICogSWYgYSBkaWZmZXJlbnQgb3JkZXIgaXMgbmVlZGVkLCB0aGlzIGZ1bmN0aW9uIHRha2VzIGEgc2Vjb25kIGFyZ3VtZW50LCBhIHNvcnRcbiAqIGZ1bmN0aW9uLCB0aGF0IGFmZmVjdHMgb2JqZWN0cyBvbmx5LiBJdCBpcyBhIHN0YW5kYXJkIGZ1bmN0aW9uIHRoYXQgd291bGQgYmVcbiAqIHBhc3NlZCB0byBgQXJyYXkucHJvdG90eXBlLnNvcnRgIGFuZCBzb3J0cyB0aGUga2V5cyBhY2NvcmRpbmdseS5cbiAqXG4gKiBgYGBcbiAqIGNvbnN0IGFscGhhID0gKGEsIGIpID0+IChhIDwgYiA/IC0xIDogYiA8IGEgPyAxIDogMCk7XG4gKiBjb25zdCBvYmogPSB7IGM6IDEsIGE6IDIsIGI6IDMgfTtcbiAqXG4gKiBjb25zdCBvYmpJdGVyID0gaXRlcmF0b3Iob2JqKTtcbiAqIGNvbnNvbGUubG9nKG9iakl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiB7IGM6IDEgfVxuICogY29uc29sZS5sb2cob2JqSXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IHsgYTogMiB9XG4gKiBjb25zb2xlLmxvZyhvYmpJdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4geyBiOiAzIH1cbiAqXG4gKiBjb25zdCBzb3J0ZWRJdGVyID0gaXRlcmF0b3Iob2JqLCBhbHBoYSk7XG4gKiBjb25zb2xlLmxvZyhvYmpJdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4geyBhOiAyIH1cbiAqIGNvbnNvbGUubG9nKG9iakl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiB7IGI6IDMgfVxuICogY29uc29sZS5sb2cob2JqSXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IHsgYzogMSB9XG4gKiBgYGBcbiAqXG4gKiBBZGRpdGlvbmFsbHksIHRoZXJlIGlzIHNwZWNpYWwgc3VwcG9ydCBmb3IgcGFzc2luZyBhIGZ1bmN0aW9uIHRvIHRoaXNcbiAqIGZ1bmN0aW9uLiBUaGUgaXRlcmF0b3IgcmV0dXJuZWQgcnVucyB0aGF0IGZ1bmN0aW9uIGZvciBlYWNoIGNhbGwgdG8gYG5leHRgLlxuICogVGhhdCBmdW5jdGlvbiBpcyBwcm92aWRlZCB0d28gYXJndW1lbnRzOiB0aGUgaW5kZXggKHN0YXJ0aW5nIGF0IGAwYCBmb3IgdGhlXG4gKiBmaXJzdCBjYWxsIHRvIGBuZXh0YCBhbmQgaW5jcmVhc2luZyBieSAxIGZvciBlYWNoIGNhbGwgdG8gYG5leHRgIGFmdGVyKSBhbmRcbiAqIHRoZSByZXR1cm4gdmFsdWUgb2YgdGhlIHByZXZpb3VzIGNhbGwgdG8gYG5leHRgIChmb3IgdGhlIGZpcnN0IGNhbGwgdG9cbiAqIGBuZXh0YCwgdGhpcyB3aWxsIGJlIGB1bmRlZmluZWRgKS4gVGhlIGl0ZXJhdGlvbiB3aWxsIGNvbnRpbnVlIHVudGlsIHRoZVxuICogZmlyc3QgdGltZSB0aGUgaXRlcmF0ZWQgZnVuY3Rpb24gcmV0dXJucyBgdW5kZWZpbmVkYDsgYXQgdGhhdCBwb2ludCB0aGVcbiAqIGl0ZXJhdG9yIHdpbGwgdGVybWluYXRlIGFuZCByZXR1cm4gYHsgZG9uZTogdHJ1ZSB9YCBvZmYgc3Vic2VxdWVudCBgbmV4dGBcbiAqIGNhbGxzLlxuICpcbiAqIGBgYFxuICogY29uc3QgY29uc3RJdGVyID0gaXRlcmF0b3IoKCkgPT4gNik7XG4gKiBjb25zb2xlLmxvZyhjb25zdEl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiA2XG4gKiBjb25zb2xlLmxvZyhjb25zdEl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiA2XG4gKiAvLyBUaGlzIHdpbGwgY29udGludWUgZm9yZXZlciwgYXMgbG9uZyBhcyBgbmV4dGAga2VlcHMgZ2V0dGluZyBjYWxsZWRcbiAqXG4gKiBjb25zdCBpbmRleEl0ZXIgPSBpdGVyYXRvcih4ID0+IHggKiB4KTtcbiAqIGNvbnNvbGUubG9nKGluZGV4SXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IDA7XG4gKiBjb25zb2xlLmxvZyhpbmRleEl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiAxO1xuICogY29uc29sZS5sb2coaW5kZXhJdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4gNDtcbiAqIGNvbnNvbGUubG9nKGluZGV4SXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IDk7XG4gKiAvLyBUaGlzIHdpbGwgY29udGludWUgZm9yZXZlciBvciB1bnRpbCB0aGUgbnVtYmVycyBnZXQgdG9vIGJpZyBmb3JcbiAqIC8vIEphdmFTY3JpcHQgdG8gZGVhbCB3dGloXG4gKlxuICogLy8gVXNpbmcgYSBkZWZhdWx0IHZhbHVlIGZvciB0aGUgYGxhc3RgIHBhcmFtZXRlciwgd2hpY2ggc2V0cyBpdHMgdmFsdWVcbiAqIC8vIGZvciB0aGUgZmlyc3QgcnVuIHdoZW4gaXQgaXMgbm9ybWFsbHkgYHVuZGVmaW5lZGBcbiAqIGNvbnN0IGxhc3RJdGVyID0gaXRlcmF0b3IoKHgsIGxhc3QgPSAxKSA9PiBsYXN0ICogKHggKyAxKSk7IC8vIGZhY3RvcmlhbCFcbiAqIGNvbnNvbGUubG9nKGxhc3RJdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4gMVxuICogY29uc29sZS5sb2cobGFzdEl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiAyXG4gKiBjb25zb2xlLmxvZyhsYXN0SXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IDZcbiAqIGNvbnNvbGUubG9nKGxhc3RJdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4gMjRcbiAqIC8vIEFnYWluLCBydW5zIGZvcmV2ZXIsIHRob3VnaCBmYWN0b3JpYWxzIGdldCBiaWcgdmVyeSBxdWlja2x5XG4gKlxuICogLy8gSXRlcmF0b3JzIHRlcm1pbmF0ZSB3aGVuIHRoZSBmdW5jdGlvbiByZXR1cm5zIGB1bmRlZmluZWRgXG4gKiBjb25zdCBzdG9wSXRlciA9IGl0ZXJhdG9yKHggPT4geCA8IDIgPyB4IDogdW5kZWZpbmVkKTtcbiAqIGNvbnNvbGUubG9nKHN0b3BJdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4gMFxuICogY29uc29sZS5sb2coc3RvcEl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiAxXG4gKiBjb25zb2xlLmxvZyhzdG9wSXRlci5uZXh0KCkuZG9uZSk7ICAgIC8vIC0+IHRydWVcbiAqIGBgYFxuICpcbiAqIElmIHRoZSBwcm92aWRlZCB2YWx1ZSBpcyBub3QgYWN0dWFsbHkgaXRlcmFibGUgKG9yIGFuIG9iamVjdCBvciBhIGZ1bmN0aW9uKSxcbiAqIGBudWxsYCBpcyByZXR1cm5lZCBpbiBwbGFjZSBvZiB0aGUgaXRlcmF0b3IuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjb3JlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjcmVhdGUgYW4gaXRlcmF0b3Igb3Zlci5cbiAqIEBwYXJhbSB7bW9kdWxlOmNvcmUuU29ydEZ1bmN0aW9ufSBbc29ydEZuXSBBbiBvcHRpb25hbCBzb3J0IGZ1bmN0aW9uIGZvclxuICogICAgIHNvcnRpbmcgdGhlIGtleXMgb2YgYW4gb2JqZWN0IGJlZm9yZSBpdGVyYXRpb24uIEl0IGlzIGlnbm9yZWQgaWYgYHZhbHVlYFxuICogICAgIGlzbid0IGEgcGxhaW4gb2JqZWN0LlxuICogQHJldHVybnMge21vZHVsZTpjb3JlLkl0ZXJhdG9yfSBBbiBpdGVyYXRvciBvdmVyIGB2YWx1ZWAuXG4gKi9cbmZ1bmN0aW9uIGl0ZXJhdG9yKHZhbHVlLCBzb3J0Rm4gPSBudWxsKSB7XG4gIHN3aXRjaCAodHJ1ZSkge1xuICAgIGNhc2UgaXNGdW5jdGlvbih2YWx1ZVtTeW1ib2wuaXRlcmF0b3JdKTpcbiAgICBjYXNlIGlzR2VuZXJhdG9yRnVuY3Rpb24odmFsdWVbU3ltYm9sLml0ZXJhdG9yXSk6XG4gICAgICByZXR1cm4gdmFsdWVbU3ltYm9sLml0ZXJhdG9yXSgpO1xuICAgIGNhc2UgaXNGdW5jdGlvbih2YWx1ZSk6XG4gICAgICByZXR1cm4gZnVuY3Rpb25JdGVyYXRvcih2YWx1ZSk7XG4gICAgY2FzZSBpc09iamVjdCh2YWx1ZSk6XG4gICAgICByZXR1cm4gb2JqZWN0SXRlcmF0b3IodmFsdWUsIHNvcnRGbik7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBwYXNzZWQgb2JqZWN0IGlzIGl0ZXJhYmxlLCBpbiB0ZXJtcyBvZiB3aGF0ICdpdGVyYWJsZSdcbiAqIG1lYW5zIHRvIHRoaXMgbGlicmFyeS4gSW4gb3RoZXIgd29yZHMsIHZhbHVlcyBpbXBsZW1lbnRpbmcgdGhlIGBpdGVyYWJsZWBcbiAqIHByb3RvY29sIGFuZCBwbGFpbiBvYmplY3RzIHJldHVybiBgdHJ1ZWAsIHdoaWxlIGV2ZXJ5dGhpbmcgZWxzZSByZXR1cm5zXG4gKiBgZmFsc2VgLiBUaGlzIGRvZXMgbm90IHJldHVybiBgdHJ1ZWAgZm9yIGZ1bmN0aW9ucyBldmVuIHRob3VnaFxuICoge0BsaW5rIG1vZHVsZTpjb3JlLml0ZXJhdG9yfGl0ZXJhdG9yfSBjYW4gcHJvZHVjZSBhbiBpdGVyYXRvciBmb3IgdGhlbSxcbiAqIGJlY2F1c2Ugbm90IGFsbCBmdW5jdGlvbnMgd29yayB3ZWxsIHdpdGhcbiAqIHtAbGluayBtb2R1bGU6Y29yZS5pdGVyYXRvcnxpdGVyYXRvcn0uXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjb3JlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0IGZvciBpdGVyYWJpbGl0eS5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IEVpdGhlciBgdHJ1ZWAgaWYgdGhlIHZhbHVlIGlzIGl0ZXJhYmxlXG4gKiAgICAgKGB7QGxpbmsgbW9kdWxlOmNvcmUuaXRlcmF0b3J9YCB3aWxsIHJldHVybiBhbiBpdGVyYXRvciBmb3IgaXQpIG9yXG4gKiAgICAgYGZhbHNlYCBpZiBpdCBpcyBub3QuXG4gKi9cbmZ1bmN0aW9uIGlzSXRlcmFibGUodmFsdWUpIHtcbiAgcmV0dXJuIGlzSW1wbGVtZW50ZWQodmFsdWUsIFwiaXRlcmF0b3JcIikgfHwgaXNPYmplY3QodmFsdWUpO1xufVxuXG5leHBvcnQgeyBpdGVyYXRvciwgaXNJdGVyYWJsZSB9O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG5cbi8qKlxuICogUHJvdG9jb2xzIGZvciBpdGVyYXRpb24gYW5kIHJlZHVjdGlvbi5cbiAqXG4gKiBUaGUgbmFtZXMgZm9yIHRoZXNlIHByb3RvY29scyBjYW1lIGZyb20gYSBkaXNjdXNzaW9uIHRocmVhZFxuICogKHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vY29nbml0ZWN0LWxhYnMvdHJhbnNkdWNlcnMtanMvaXNzdWVzLzIwfSkgZnJvbSBhXG4gKiB0aW1lIHdoZW4gdHJhbnNkdWNlcnMgd2VyZSB2ZXJ5IG11Y2ggaW4gdGhlIGZvcmVmcm9udC4gSXQncyB0aGUgY2xvc2VzdCB0aGluZ1xuICogdGhlcmUgaXMgdG8gYSBzdGFuZGFyZCwgc28gaXQgd2FzIGFkb3B0ZWQgaGVyZS5cbiAqXG4gKiBUaGVzZSBhcmUgdGhlIHNhbWUgc3ltYm9scyBhcyBhdmFpbGFibGUgaW4gbXkgdHJhbnNkdWNlciBsaWJyYXJ5LiBUaGV5IGFyZVxuICogcHVibGljbHkgYXZhaWxhYmxlIGZyb20gdGhlcmUuXG4gKlxuICogQG1vZHVsZSBjb3JlL3Byb3RvY29sXG4gKiBAcHJpdmF0ZVxuICovXG5cbmltcG9ydCB7IGlzRnVuY3Rpb24sIGlzR2VuZXJhdG9yRnVuY3Rpb24gfSBmcm9tIFwibW9kdWxlcy91dGlsc1wiO1xuXG4vKipcbiAqIFRoZSBtYXBwaW5nIG9mIHByb3RvY29sIG5hbWVzIHRvIHRoZWlyIHJlc3BlY3RpdmUgcHJvcGVydHkga2V5IG5hbWVzLiBUaGVcbiAqIHZhbHVlcyBvZiB0aGlzIG1hcCB3aWxsIGRlcGVuZCBvbiB3aGV0aGVyIHN5bWJvbHMgYXJlIGF2YWlsYWJsZS5cbiAqXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBQcm90b2NvbE1hcFxuICogQG1lbWJlcm9mIG1vZHVsZTpjb3JlXG4gKiBAcHJvcGVydHkge1N5bWJvbH0gaW5pdCBUaGUgYHRyYW5zZHVjZXIvaW5pdGAgcHJvdG9jb2wuIFRoaXMgaXMgdXNlZFxuICogICAgIHRvIG1hcmsgZnVuY3Rpb25zIHRoYXQgaW5pdGlhbGl6ZSBhIHRhcmdldCBjb2xsZWN0aW9uIGJlZm9yZSBhZGRpbmcgaXRlbXNcbiAqICAgICB0byBpdC5cbiAqIEBwcm9wZXJ0eSB7U3ltYm9sfSBzdGVwIFRoZSBgdHJhbnNkdWNlci9zdGVwYCBwcm90b2NvbC4gVGhpcyBpcyB1c2VkXG4gKiAgICAgdG8gbWFyayBmdW5jdGlvbnMgdGhhdCBhcmUgdXNlZCBpbiB0aGUgdHJhbnNkdWNlcidzIHN0ZXAgcHJvY2Vzcywgd2hlcmVcbiAqICAgICBvYmplY3RzIGFyZSBhZGRlZCB0byB0aGUgdGFyZ2V0IGNvbGxlY3Rpb24gb25lIGF0IGEgdGltZS5cbiAqIEBwcm9wZXJ0eSB7U3ltYm9sfSByZXN1bHQgVGhlIGB0cmFuc2R1Y2VyL3Jlc3VsdGAgcHJvdG9jb2wuIFRoaXMgaXNcbiAqICAgICB1c2VkIHRvIG1hcmsgZnVuY3Rpb25zIHRoYXQgdGFrZSB0aGUgZmluYWwgcmVzdWx0IG9mIHRoZSBzdGVwIHByb2Nlc3MgYW5kXG4gKiAgICAgcmV0dXJuIHRoZSBmaW5hbCBmb3JtIHRvIGJlIG91dHB1dC4gVGhpcyBpcyBvcHRpb25hbDsgaWYgdGhlIHRyYW5zZHVjZXJcbiAqICAgICBkb2VzIG5vdCB3YW50IHRvIHRyYW5zZm9ybSB0aGUgZmluYWwgcmVzdWx0LCBpdCBzaG91bGQganVzdCByZXR1cm4gdGhlXG4gKiAgICAgcmVzdWx0IG9mIGl0cyBjaGFpbmVkIHRyYW5zZHVjZXIncyBgcmVzdWx0YCBmdW5jdGlvbi5cbiAqIEBwcm9wZXJ0eSB7U3ltYm9sfSByZWR1Y2VkIFRoZSBgdHJhbnNkdWNlci9yZWR1Y2VkYCBwcm90b2NvbC4gVGhlXG4gKiAgICAgcHJlc2VuY2Ugb2YgdGhpcyBrZXkgb24gYW4gb2JqZWN0IGluZGljYXRlcyB0aGF0IGl0cyB0cmFuc2Zvcm1hdGlvbiBoYXNcbiAqICAgICBiZWVuIGNvbXBsZXRlZC4gSXQgaXMgdXNlZCBpbnRlcm5hbGx5IHRvIG1hcmsgY29sbGVjdGlvbnMgd2hvc2VcbiAqICAgICB0cmFuc2Zvcm1hdGlvbnMgY29uY2x1ZGUgYmVmb3JlIGV2ZXJ5IG9iamVjdCBpcyBpdGVyYXRlZCBvdmVyIChhcyBpblxuICogICAgIGB7QGxpbmsgeGR1Y2UudGFrZX1gIHRyYW5zZHVjZXJzLikgSXQgaXMgb2YgbGl0dGxlIHVzZSBiZXlvbmQgdHJhbnNkdWNlclxuICogICAgIGF1dGhvcmluZy5cbiAqIEBwcm9wZXJ0eSB7U3ltYm9sfSB2YWx1ZSBUaGUgYHRyYW5zZHVjZXIvdmFsdWVgIHByb3RvY29sLiBUaGlzIGlzXG4gKiAgICAgdXNlZCBpbnRlcm5hbGx5IHRvIG1hcmsgcHJvcGVydGllcyB0aGF0IGNvbnRhaW4gdGhlIHZhbHVlIG9mIGEgcmVkdWNlZFxuICogICAgIHRyYW5zZm9ybWF0aW9uLiBJdCBpcyBvZiBsaXR0bGUgdXNlIGJleW9uZCB0cmFuc2R1Y2VyIGF1dGhvcmluZy5cbiAqL1xuXG4vKipcbiAqIFRoZSBtYXBwaW5nIG9mIHByb3RvY29sIG5hbWVzIHRvIHRoZWlyIHJlc3BlY3RpdmUgcHJvcGVydHkga2V5IG5hbWVzLlxuICpcbiAqIEB0eXBlIHttb2R1bGU6Y29yZS5Qcm90b2NvbE1hcH1cbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y29yZVxuICovXG5jb25zdCBwcm90b2NvbHMgPSBPYmplY3QuY3JlYXRlKG51bGwsIHtcbiAgaW5pdDoge1xuICAgIHZhbHVlOiBTeW1ib2wuZm9yKFwidHJhbnNkdWNlci9pbml0XCIpXG4gIH0sXG4gIHN0ZXA6IHtcbiAgICB2YWx1ZTogU3ltYm9sLmZvcihcInRyYW5zZHVjZXIvc3RlcFwiKVxuICB9LFxuICByZXN1bHQ6IHtcbiAgICB2YWx1ZTogU3ltYm9sLmZvcihcInRyYW5zZHVjZXIvcmVzdWx0XCIpXG4gIH0sXG4gIHJlZHVjZWQ6IHtcbiAgICB2YWx1ZTogU3ltYm9sLmZvcihcInRyYW5zZHVjZXIvcmVkdWNlZFwiKVxuICB9LFxuICB2YWx1ZToge1xuICAgIHZhbHVlOiBTeW1ib2wuZm9yKFwidHJhbnNkdWNlci92YWx1ZVwiKVxuICB9XG59KTtcblxuZnVuY3Rpb24gaXNJbXBsZW1lbnRlZChvYmosIHByb3RvY29sKSB7XG4gIGlmIChvYmogPT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN3aXRjaCAocHJvdG9jb2wpIHtcbiAgICBjYXNlIFwiaXRlcmF0b3JcIjpcbiAgICAgIHJldHVybiAoXG4gICAgICAgIGlzRnVuY3Rpb24ob2JqW1N5bWJvbC5pdGVyYXRvcl0pIHx8XG4gICAgICAgIGlzR2VuZXJhdG9yRnVuY3Rpb24ob2JqW1N5bWJvbC5pdGVyYXRvcl0pXG4gICAgICApO1xuICAgIGNhc2UgXCJhc3luY0l0ZXJhdG9yXCI6XG4gICAgICByZXR1cm4gaXNHZW5lcmF0b3JGdW5jdGlvbihvYmpbU3ltYm9sLmFzeW5jSXRlcmF0b3JdKTtcbiAgICBjYXNlIFwicmVkdWNlZFwiOlxuICAgIGNhc2UgXCJ2YWx1ZVwiOlxuICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqKS5pbmNsdWRlcyhwcm90b2NvbHNbcHJvdG9jb2xdKTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGlzRnVuY3Rpb24ob2JqW3Byb3RvY29sc1twcm90b2NvbF1dKTtcbiAgfVxufVxuXG5leHBvcnQgeyBwcm90b2NvbHMsIGlzSW1wbGVtZW50ZWQgfTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG4vKipcbiAqIEEgc2V0IG9mIGZ1bmN0aW9ucyByZWxhdGVkIHRvIHRoZSBwcm9kdWNpbmcgcmVkdWNlciBvYmplY3RzLCBtYXJraW5nXG4gKiBjb21wbGV0ZWQgb2JqZWN0cywgYW5kIHBlcmZvcm1pbmcgZ2VuZXJhbCByZWR1Y3Rpb24gb3BlcmF0aW9ucy5cbiAqXG4gKiBAbW9kdWxlIGNvcmUvcmVkdWN0aW9uXG4gKiBAcHJpdmF0ZVxuICovXG5cbmltcG9ydCB7IGlzSW1wbGVtZW50ZWQsIHByb3RvY29scyBhcyBwIH0gZnJvbSBcIm1vZHVsZXMvcHJvdG9jb2xcIjtcbmltcG9ydCB7IGlzU3RyaW5nLCBpc0FycmF5LCBpc09iamVjdCwgaXNGdW5jdGlvbiB9IGZyb20gXCJtb2R1bGVzL3V0aWxzXCI7XG5pbXBvcnQgeyBpdGVyYXRvciB9IGZyb20gXCJtb2R1bGVzL2l0ZXJhdGlvblwiO1xuXG4vKipcbiAqIFJldHVybnMgYW4gaW5pdCBmdW5jdGlvbiBmb3IgYSBjb2xsZWN0aW9uLiBUaGlzIGlzIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGFcbiAqIG5ldywgZW1wdHkgaW5zdGFuY2Ugb2YgdGhlIGNvbGxlY3Rpb24gaW4gcXVlc3Rpb24uIElmIHRoZSBjb2xsZWN0aW9uIGRvZXNuJ3RcbiAqIHN1cHBvcnQgcmVkdWN0aW9uLCBgbnVsbGAgaXMgcmV0dXJuZWQuIFRoaXMgbWFrZXMgY29uZGl0aW9uYWxzIGEgYml0IGVhc2llclxuICogdG8gd29yayB3aXRoLlxuICpcbiAqIEluIG9yZGVyIHRvIHN1cHBvcnQgdGhlIGNvbnZlcnNpb24gb2YgZnVuY3Rpb25zIGludG8gcmVkdWNlcnMsIGZ1bmN0aW9uXG4gKiBzdXBwb3J0IGlzIGFsc28gcHJvdmlkZWQuXG4gKlxuICogQHBhcmFtIHsqfSBjb2xsZWN0aW9uIEEgY29sbGVjdGlvbiB0byBjcmVhdGUgYW4gaW5pdCBmdW5jdGlvbiBmb3IuIFRoaXMgY2FuXG4gKiAgICAgYmUgYW55dGhpbmcgdGhhdCBzdXBwb3J0cyB0aGUgaXRlcmF0aW9uIHByb3RvY29sIG9yIGEgcGxhaW4gb2JqZWN0LlxuICogQHJldHVybiB7bW9kdWxlOmNvcmUuSW5pdEZ1bmN0aW9ufSBBIGZ1bmN0aW9uIHRoYXQsIHdoZW4gY2FsbGVkLCByZXR1cm5zIGFuXG4gKiAgICAgaW5pdGlhbCB2ZXJzaW9uIG9mIHRoZSBwcm92aWRlZCBjb2xsZWN0aW9uLiBJZiB0aGUgcHJvdmlkZWQgY29sbGVjdGlvbiBpc1xuICogICAgIG5vdCBpdGVyYWJsZSwgdGhlbiBgbnVsbGAgaXMgcmV0dXJuZWQuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBpbml0KGNvbGxlY3Rpb24pIHtcbiAgc3dpdGNoICh0cnVlKSB7XG4gICAgY2FzZSBpc0ltcGxlbWVudGVkKGNvbGxlY3Rpb24sIFwiaW5pdFwiKTpcbiAgICAgIHJldHVybiBjb2xsZWN0aW9uW3AuaW5pdF07XG4gICAgY2FzZSBpc1N0cmluZyhjb2xsZWN0aW9uKTpcbiAgICAgIHJldHVybiAoKSA9PiBcIlwiO1xuICAgIGNhc2UgaXNBcnJheShjb2xsZWN0aW9uKTpcbiAgICAgIHJldHVybiAoKSA9PiBbXTtcbiAgICBjYXNlIGlzT2JqZWN0KGNvbGxlY3Rpb24pOlxuICAgICAgcmV0dXJuICgpID0+ICh7fSk7XG4gICAgY2FzZSBpc0Z1bmN0aW9uKGNvbGxlY3Rpb24pOlxuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoXCJpbml0IG5vdCBhdmFpbGFibGVcIik7XG4gICAgICB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG4vKipcbiAqIFJldHVybnMgYSBzdGVwIGZ1bmN0aW9uIGZvciBhIGNvbGxlY3Rpb24uIFRoaXMgaXMgYSBmdW5jdGlvbiB0aGF0IHRha2VzIGFuXG4gKiBhY2N1bXVsYXRvciBhbmQgYSB2YWx1ZSBhbmQgcmV0dXJucyB0aGUgcmVzdWx0IG9mIHJlZHVjaW5nIHRoZSB2YWx1ZSBpbnRvIHRoZVxuICogYWNjdW11bGF0b3IuIElmIHRoZSBjb2xsZWN0aW9uIGRvZXNuJ3Qgc3VwcG9ydCByZWR1Y3Rpb24sIGBudWxsYCBpcyByZXR1cm5lZC5cbiAqIFRoZSByZXR1cm5lZCBmdW5jdGlvbiBpdHNlbGYgc2ltcGx5IHJlZHVjZXMgdGhlIGlucHV0IGludG8gdGhlIHRhcmdldFxuICogY29sbGVjdGlvbiB3aXRob3V0IG1vZGlmeWluZyBpdC5cbiAqXG4gKiBJbiBvcmRlciB0byBzdXBwb3J0IHRoZSBjb252ZXJzaW9uIG9mIGZ1bmN0aW9ucyBpbnRvIHJlZHVjZXJzLCBmdW5jdGlvblxuICogc3VwcG9ydCBpcyBhbHNvIHByb3ZpZGVkLlxuICpcbiAqIEBwYXJhbSB7Kn0gY29sbGVjdGlvbiBBIGNvbGxlY3Rpb24gdG8gY3JlYXRlIGEgc3RlcCBmdW5jdGlvbiBmb3IuIFRoaXMgY2FuIGJlXG4gKiAgICAgYW55dGhpbmcgdGhhdCBzdXBwb3J0cyB0aGUgaXRlcmF0aW9uIHByb3RvY29sLCBhIHBsYWluIG9iamVjdCwgb3IgYVxuICogICAgIGZ1bmN0aW9uLlxuICogQHJldHVybiB7bW9kdWxlOmNvcmUuU3RlcEZ1bmN0aW9ufSBBIHJlZHVjdGlvbiBmdW5jdGlvbiBmb3IgdGhlIHByb3ZpZGVkXG4gKiAgICAgY29sbGVjdGlvbiB0aGF0IHNpbXBseSBhZGRzIGFuIGVsZW1lbnQgdG8gdGhlIHRhcmdldCBjb2xsZWN0aW9uIHdpdGhvdXRcbiAqICAgICBtb2RpZnlpbmcgaXQuIElmIHRoZSBwcm92aWRlZCBjb2xsZWN0aW9uIGlzIG5vdCBpdGVyYWJsZSwgYG51bGxgIGlzXG4gKiAgICAgcmV0dXJuZWQuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBzdGVwKGNvbGxlY3Rpb24pIHtcbiAgc3dpdGNoICh0cnVlKSB7XG4gICAgY2FzZSBpc0ltcGxlbWVudGVkKGNvbGxlY3Rpb24sIFwic3RlcFwiKTpcbiAgICAgIHJldHVybiBjb2xsZWN0aW9uW3Auc3RlcF07XG5cbiAgICBjYXNlIGlzU3RyaW5nKGNvbGxlY3Rpb24pOlxuICAgICAgcmV0dXJuIChhY2MsIGlucHV0KSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gaXNPYmplY3QoaW5wdXQpID8gaW5wdXRbT2JqZWN0LmtleXMoaW5wdXQpWzBdXSA6IGlucHV0O1xuICAgICAgICByZXR1cm4gYWNjICsgdmFsdWU7XG4gICAgICB9O1xuXG4gICAgY2FzZSBpc0FycmF5KGNvbGxlY3Rpb24pOlxuICAgICAgcmV0dXJuIChhY2MsIGlucHV0KSA9PiB7XG4gICAgICAgIGFjYy5wdXNoKGlucHV0KTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH07XG5cbiAgICBjYXNlIGlzT2JqZWN0KGNvbGxlY3Rpb24pOlxuICAgICAgcmV0dXJuIChhY2MsIGlucHV0KSA9PiB7XG4gICAgICAgIGxldCB2YWx1ZSA9IGlucHV0O1xuXG4gICAgICAgIGlmICghaXNPYmplY3QoaW5wdXQpKSB7XG4gICAgICAgICAgLy8gaWYgdGhlIGlucHV0IGlzbid0IGFuIG9iamVjdCwgdHVybiBpdCBpbnRvIGFuIG9iamVjdCB3aXRoIGFcbiAgICAgICAgICAvLyBudW1lcmljYWwga2V5IG9uZSBncmVhdGVyIHRoYW4gdGhlIG1heCBrZXkgYWxyZWFkeSBpbiB0aGVcbiAgICAgICAgICAvLyBhY2N1bXVsYXRvclxuICAgICAgICAgIGNvbnN0IG1heCA9IE9iamVjdC5rZXlzKGFjYykucmVkdWNlKChhLCBiKSA9PiBNYXRoLm1heChhLCBiKSwgLTEpO1xuICAgICAgICAgIHZhbHVlID0geyBbbWF4ICsgMV06IGlucHV0IH07XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBrID0gT2JqZWN0LmtleXModmFsdWUpWzBdO1xuICAgICAgICBhY2Nba10gPSB2YWx1ZVtrXTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH07XG5cbiAgICBjYXNlIGlzRnVuY3Rpb24oY29sbGVjdGlvbik6XG4gICAgICByZXR1cm4gKGFjYywgaW5wdXQpID0+IGNvbGxlY3Rpb24oYWNjLCBpbnB1dCk7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgcmVzdWx0IGZ1bmN0aW9uIGZvciBhIGNvbGxlY3Rpb24uIFRoaXMgaXMgYSBmdW5jdGlvbiB0aGF0IHBlcmZvcm1zXG4gKiBhbnkgZmluYWwgcHJvY2Vzc2luZyB0aGF0IHNob3VsZCBiZSBkb25lIG9uIHRoZSByZXN1bHQgb2YgYSByZWR1Y3Rpb24uIElmIHRoZVxuICogY29sbGVjdGlvbiBkb2Vzbid0IHN1cHBvcnQgcmVkdWN0aW9uLCBgbnVsbGAgaXMgcmV0dXJuZWQuXG4gKlxuICogSW4gb3JkZXIgdG8gc3VwcG9ydCB0aGUgY29udmVyc2lvbiBvZiBmdW5jdGlvbnMgaW50byByZWR1Y2VycywgZnVuY3Rpb25cbiAqIHN1cHBvcnQgaXMgYWxzbyBwcm92aWRlZC5cbiAqXG4gKiBAcGFyYW0geyp9IGNvbGxlY3Rpb24gQSBjb2xsZWN0aW9uIHRvIGNyZWF0ZSBhIHN0ZXAgZnVuY3Rpb24gZm9yLiBUaGlzIGNhbiBiZVxuICogICAgIGFueXRoaW5nIHRoYXQgc3VwcG9ydHMgdGhlIGl0ZXJhdGlvbiBwcm90b2NvbCwgYSBwbGFpbiBvYmplY3QsIG9yIGFcbiAqICAgICBmdW5jdGlvbi5cbiAqIEByZXR1cm4ge21vZHVsZTpjb3JlLlJlc3VsdEZ1bmN0aW9ufSBBIGZ1bmN0aW9uIHRoYXQsIHdoZW4gZ2l2ZW4gYSByZWR1Y2VkXG4gKiAgICAgY29sbGVjdGlvbiwgcHJvZHVjZXMgdGhlIGZpbmFsIG91dHB1dC4gSWYgdGhlIHByb3ZpZGVkIGNvbGxlY3Rpb24gaXMgbm90XG4gKiAgICAgaXRlcmFibGUsIGBudWxsYCB3aWxsIGJlIHJldHVybmVkLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gcmVzdWx0KGNvbGxlY3Rpb24pIHtcbiAgc3dpdGNoICh0cnVlKSB7XG4gICAgY2FzZSBpc0ltcGxlbWVudGVkKGNvbGxlY3Rpb24sIFwicmVzdWx0XCIpOlxuICAgICAgcmV0dXJuIGNvbGxlY3Rpb25bcC5yZXN1bHRdO1xuICAgIGNhc2UgaXNTdHJpbmcoY29sbGVjdGlvbik6XG4gICAgY2FzZSBpc0FycmF5KGNvbGxlY3Rpb24pOlxuICAgIGNhc2UgaXNPYmplY3QoY29sbGVjdGlvbik6XG4gICAgY2FzZSBpc0Z1bmN0aW9uKGNvbGxlY3Rpb24pOlxuICAgICAgcmV0dXJuIHZhbHVlID0+IHZhbHVlO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG4vKipcbiAqIENyZWF0ZXMgYSByZWR1Y2VyIG9iamVjdCBmcm9tIGEgZnVuY3Rpb24gb3IgZnJvbSBhIGJ1aWx0LWluIHJlZHVjaWJsZSB0eXBlXG4gKiAoYXJyYXksIG9iamVjdCwgb3Igc3RyaW5nKS5cbiAqXG4gKiBUbyBjcmVhdGUgYSByZWR1Y2VyIGZvciBhcnJheXMsIG9iamVjdHMsIG9yIHN0cmluZ3MsIHNpbXBseSBwYXNzIGFuIGVtcHR5XG4gKiB2ZXJzaW9uIG9mIHRoYXQgY29sbGVjdGlvbiB0byB0aGlzIGZ1bmN0aW9uIChlLmcuLCBgdG9SZWR1Y2VyKFtdKWApLlxuICpcbiAqIFRoZSBub3RhYmxlIHVzZSBmb3IgdGhpcyBmdW5jdGlvbiB0aG91Z2ggaXMgdG8gdHVybiBhIHJlZHVjdGlvbiBmdW5jdGlvbiBpbnRvXG4gKiBhIHJlZHVjZXIgb2JqZWN0LiBUaGUgZnVuY3Rpb24gaXMgYSBmdW5jdGlvbiBvZiB0d28gcGFyYW1ldGVycywgYW5cbiAqIGFjY3VtdWxhdG9yIGFuZCBhIHZhbHVlLCBhbmQgcmV0dXJucyB0aGUgYWNjdW11bGF0b3Igd2l0aCB0aGUgdmFsdWUgaW4gaXQuXG4gKiBUaGlzIGlzIGV4YWN0bHkgdGhlIHNhbWUga2luZCBvZiBmdW5jdGlvbiB0aGF0IGlzIHBhc3NlZCB0byByZWR1Y3Rpb25cbiAqIGZ1bmN0aW9ucyBsaWtlIEphdmFTY3JpcHQncyBgQXJyYXkucHJvdG90eXBlLnJlZHVjZWAgYW5kIExvZGFzaCdzIGBfLnJlZHVjZWAuXG4gKlxuICogTm90ZSBpbiBwYXJ0aWN1bGFyIHRoYXQgdGhlIG91dHB1dCBvZiB0aGlzIHJlZHVjZXIgZG9lcyBub3QgbmVlZCB0byBiZSBhXG4gKiBjb2xsZWN0aW9uLiBJdCBjYW4gYmUgYW55dGhpbmcuIFdoaWxlIHRyYW5zZHVjaW5nIG5vcm1hbGx5IGludm9sdmVzXG4gKiB0cmFuc2Zvcm1pbmcgb25lIGNvbGxlY3Rpb24gaW50byBhbm90aGVyLCBpdCBuZWVkIG5vdCBiZSBzby4gRm9yIGV4YW1wbGUsXG4gKiBoZXJlIGlzIGEgcmVkdWNlciB0aGF0IHdpbGwgcmVzdWx0IGluIHN1bW1pbmcgb2YgdGhlIGNvbGxlY3Rpb24gdmFsdWVzLlxuICpcbiAqIGBgYFxuICogaW1wb3J0IHsgdG9SZWR1Y2VyLCByZWR1Y2UgfSBmcm9tIFwiQGNoYW5rby94ZHVjZVwiO1xuICpcbiAqIGNvbnN0IHN1bVJlZHVjZXIgPSB0b1JlZHVjZXIoKGFjYywgaW5wdXQpID0+IGFjYyArIGlucHV0KTtcbiAqIGNvbnN0IHN1bSA9IHJlZHVjZShbMSwgMiwgMywgNCwgNV0sIHN1bVJlZHVjZXIsIDApO1xuICogY29uc29sZS5sb2coc3VtKTsgICAvLyAtPiAxNVxuICogYGBgXG4gKlxuICogVGhpcyBjYW4gYmUgY29tYmluZWQgd2l0aCB0cmFuc2R1Y2VycyBhcyB3ZWxsLCBhcyBpbiB0aGlzIGNhbGN1bGF0aW9uIG9mIHRoZVxuICogc3VtIG9mIHRoZSAqc3F1YXJlcyogb2YgdGhlIGNvbGxlY3Rpb24gdmFsdWVzLlxuICpcbiAqIGBgYFxuICogaW1wb3J0IHsgdG9SZWR1Y2VyLCB0cmFuc2R1Y2UgfSBmcm9tIFwiQGNoYW5rby94ZHVjZVwiO1xuICogaW1wb3J0IHsgbWFwIH0gZnJvbSBcIkBjaGFua28vdHJhbnNkdWNlcnNcIjtcbiAqXG4gKiBjb25zdCBzdW1SZWR1Y2VyID0gdG9SZWR1Y2VyKChhY2MsIGlucHV0KSA9PiBhY2MgKyBpbnB1dCk7XG4gKiBjb25zdCBzdW0gPSB0cmFuc2R1Y2UoWzEsIDIsIDMsIDQsIDVdLCBtYXAoeCA9PiB4ICogeCksIHN1bVJlZHVjZXIsIDApO1xuICogY29uc29sZS5sb2coc3VtKTsgICAvLyAtPiA1NVxuICogYGBgXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjb3JlXG4gKiBAcGFyYW0geyp9IGNvbGxlY3Rpb24gQW4gaXRlcmFibGUgY29sbGVjdGlvbiBvciBhIHJlZHVjZXIgZnVuY3Rpb24uXG4gKiBAcmV0dXJuIHtvYmplY3R9IEFuIG9iamVjdCBjb250YWluaW5nIHByb3RvY29sIHByb3BlcnRpZXMgZm9yIGluaXQsIHN0ZXAsIGFuZFxuICogICAgIHJlc3VsdC4gVGhpcyBvYmplY3QgaXMgc3VpdGFibGUgZm9yIHVzZSBhcyBhIHJlZHVjZXIgb2JqZWN0IChvbmUgcHJvdmlkZWRcbiAqICAgICB0byBge0BsaW5rIHhkdWNlLnJlZHVjZXxyZWR1Y2V9YCBvciBge0BsaW5rIHhkdWNlLnRyYW5zZHVjZXx0cmFuc2R1Y2V9YCkuXG4gKiAgICAgSWYgdGhlIHByb3ZpZGVkIGNvbGxlY3Rpb24gaXMgbm90IGl0ZXJhYmxlLCBhbGwgb2YgdGhlIHByb3BlcnRpZXMgb2YgdGhpc1xuICogICAgIG9iamVjdCB3aWxsIGJlIGBudWxsYC5cbiAqL1xuZnVuY3Rpb24gdG9SZWR1Y2VyKGNvbGxlY3Rpb24pIHtcbiAgcmV0dXJuIE9iamVjdC5mcmVlemUoe1xuICAgIFtwLmluaXRdOiBpbml0KGNvbGxlY3Rpb24pLFxuICAgIFtwLnN0ZXBdOiBzdGVwKGNvbGxlY3Rpb24pLFxuICAgIFtwLnJlc3VsdF06IHJlc3VsdChjb2xsZWN0aW9uKVxuICB9KTtcbn1cblxuLyoqXG4gKiBBIHJlZHVjZXIgb2JqZWN0IGZvciBhcnJheXMuXG4gKlxuICogQHR5cGUge21vZHVsZTpjb3JlLlJlZHVjZXJ9XG4gKiBAcHJpdmF0ZVxuICovXG5jb25zdCBBUlJBWV9SRURVQ0VSID0gdG9SZWR1Y2VyKFtdKTtcblxuLyoqXG4gKiBBIHJlZHVjZXIgb2JqZWN0IGZvciBvYmplY3RzLlxuICpcbiAqIEB0eXBlIHttb2R1bGU6Y29yZS5SZWR1Y2VyfVxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgT0JKRUNUX1JFRFVDRVIgPSB0b1JlZHVjZXIoe30pO1xuXG4vKipcbiAqIEEgcmVkdWNlciBvYmplY3QgZm9yIHN0cmluZ3MuXG4gKlxuICogQHR5cGUge21vZHVsZTpjb3JlLlJlZHVjZXJ9XG4gKiBAcHJpdmF0ZVxuICovXG5jb25zdCBTVFJJTkdfUkVEVUNFUiA9IHRvUmVkdWNlcihcIlwiKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgdHJhbnNkdWNlciBmcm9tIGEgZnVuY3Rpb24gYW5kIGEgdHJhbnNkdWNlciB0byBjaGFpbiBpdCB0by5cbiAqXG4gKiBUaGlzIGlzIGluIG1vc3QgcmVzcGVjdHMganVzdCBsaWtlIHtAbGluayBtb2R1bGU6Y29yZS50b1JlZHVjZXJ8dG9SZWR1Y2VyfSxcbiAqIHdpdGggdHdvIG5vdGFibGUgZGlmZmVyZW5jZXMuIE9uZSBpcyB0aGF0IGl0IHJlcXVpcmVzIGEgdHJhbnNkdWNlciB0byBjaGFpblxuICogdG8sIGFuZCBpdCBkb2VzIHRoZSBjaGFpbmluZyBhcyBhIHBhcnQgb2YgY3JlYXRpbmcgdGhlIG5ldyB0cmFuc2R1Y2VyLiBUaGVcbiAqIG90aGVyIGlzIHRoYXQgaXQgaW5jbHVkZXMgYSB1c2FibGUgYGluaXRgIGZ1bmN0aW9uLCB3aGVyZSBwYXNzaW5nIGEgZnVuY3Rpb25cbiAqIHRvIHtAbGluayBtb2R1bGU6Y29yZS50b1JlZHVjZXJ8dG9SZWR1Y2VyfSB3b3VsZCBjcmVhdGUgYW4gaW5pdCBmdW5jdGlvbiB0aGF0XG4gKiB0aHJvd3MgYW4gZXJyb3IgaWYgaXQncyBjYWxsZWQuXG4gKlxuICogVGhpcyBmdW5jdGlvbiBhcHBsaWVzIHRoZSBnaXZlbiBmdW5jdGlvbiBhcyB0aGUgYHN0ZXBgIGZ1bmN0aW9uIG9mIHRoZVxuICogcmV0dXJuZWQgdHJhbnNkdWNlciwgYW5kIHRoZSBgaW5pdGAgYW5kIGByZXN1bHRgIGZ1bmN0aW9ucyBzaW1wbHkgY2FsbCB0aGVcbiAqIHNhbWUgZnVuY3Rpb25zIGluIHRoZSBuZXh0IHRyYW5zZHVjZXIgZG93biB0aGUgY2hhaW4uIFRoaXMgaXMgcHJlY2lzZWx5IHdoYXRcbiAqICptb3N0KiB0cmFuc2R1Y2VycyB3YW50Li4uYGluaXRgIGFuZCBgcmVzdWx0YCBmdW5jdGlvbnMgYXJlIG5vcm1hbGx5IGhhbmRsZWRcbiAqIGJ5IHRoZSByZWR1Y2VyIGF0IHRoZSBlbmQgb2YgdGhlIHRyYW5zZHVjZXIgY2hhaW4uLi5idXQgaW4gdGhlIHJhcmUgY2FzZSB3aGVuXG4gKiBgaW5pdGAgb3IgYHJlc3VsdGAgbXVzdCBkbyBtb3JlIHRoYW4gdGhpcywgdGhlIHRyYW5zZHVjZXIgbXVzdCBiZSBjcmVhdGVkXG4gKiBtYW51YWxseS5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIGRvZXMgbm90IGF1dG9tYXRpY2FsbHkgY2hhaW4gdGhlIGBzdGVwYCBmdW5jdGlvbiB0byB0aGUgbmV4dFxuICogb25lIGRvd24gdGhlIGxpbmUsIGFzIHRoYXQgY2FuIGJlIGRvbmUgaW4gYW55IG51bWJlciBvZiBkaWZmZXJlbnQgd2F5cy4gVGh1c1xuICogdGhlIGZ1bmN0aW9uIGl0c2VsZiBzaG91bGQgY2FsbCB0aGUgYHN0ZXBgIGZ1bmN0aW9uIGluIGB4Zm9ybWAgaW4gd2hhdGV2ZXJcbiAqIHdheSBpcyBhcHByb3ByaWF0ZS5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNvcmVcbiAqIEBwYXJhbSB7bW9kdWxlOmNvcmUuU3RlcEZ1bmN0aW9ufSBmbiBUaGUgc3RlcCBmdW5jdGlvbiBmb3IgdGhlIHRyYW5zZHVjZXIuXG4gKiBAcGFyYW0ge21vZHVsZTpjb3JlLlRyYW5zZHVjZXJ9IHhmb3JtIFRoZSBuZXh0IHRyYW5zZHVjZXIgb2JqZWN0IGluIHRoZVxuICogICAgIGNoYWluLlxuICogQHJldHVybnMge21vZHVsZTpjb3JlLlRyYW5zZHVjZXJ9IEEgbmV3IHRyYW5zZHVjZXIsIGNoYWluaW5nIHRoZSBzdXBwbGllZFxuICogICAgIGZ1bmN0aW9uIHRvIHRoZSBzdXBwbGllZCB0cmFuc2R1Y2VyLlxuICovXG5mdW5jdGlvbiB0b1RyYW5zZHVjZXIoZm4sIHhmb3JtKSB7XG4gIHJldHVybiB7XG4gICAgW3AuaW5pdF0oKSB7XG4gICAgICByZXR1cm4geGZvcm1bcC5pbml0XSgpO1xuICAgIH0sXG5cbiAgICBbcC5zdGVwXTogZm4sXG5cbiAgICBbcC5yZXN1bHRdKHZhbHVlKSB7XG4gICAgICByZXR1cm4geGZvcm1bcC5yZXN1bHRdKHZhbHVlKTtcbiAgICB9XG4gIH07XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHJlZHVjdGlvbiBmdW5jdGlvbiBmcm9tIGEgdHJhbnNkdWNlciBhbmQgYSByZWR1Y2VyLlxuICpcbiAqIFRoaXMgcHJvZHVjZXMgYSBmdW5jdGlvbiB0aGF0J3Mgc3VpdGFibGUgZm9yIGJlaW5nIHBhc3NlZCBpbnRvIG90aGVyXG4gKiBsaWJyYXJpZXMnIHJlZHVjZSBmdW5jdGlvbnMsIHN1Y2ggYXMgSmF2YVNjcmlwdCdzIGBBcnJheS5wcm90b3R5cGUucmVkdWNlYCBvclxuICogTG9kYXNoJ3MgYF8ucmVkdWNlYC4gSXQgcmVxdWlyZXMgYm90aCBhIHRyYW5zZm9ybWVyIGFuZCBhIHJlZHVjZXIgYmVjYXVzZVxuICogcmVkdWN0aW9uIGZ1bmN0aW9ucyBmb3IgdGhvc2UgbGlicmFyaWVzIG11c3Qga25vdyBob3cgdG8gZG8gYm90aC4gVGhlIHJlZHVjZXJcbiAqIGNhbiBiZSBhIHN0YW5kYXJkIHJlZHVjZXIgb2JqZWN0IGxpa2UgdGhlIG9uZXMgc2VudFxuICogdG9ge0BsaW5rIG1vZHVsZTpjb3JlLnRyYW5zZHVjZXx0cmFuc2R1Y2V9YCBvclxuICogYHtAbGluayBtb2R1bGU6Y29yZS5yZWR1Y2V8cmVkdWNlfWAsIG9yIGl0IGNhbiBiZSBhIHBsYWluIGZ1bmN0aW9uIHRoYXQgdGFrZXNcbiAqIHR3byBwYXJhbWV0ZXJzIGFuZCByZXR1cm5zIHRoZSByZXN1bHQgb2YgcmVkdWNpbmcgdGhlIHNlY29uZCBwYXJhbWV0ZXIgaW50b1xuICogdGhlIGZpcnN0LlxuICpcbiAqIElmIHRoZXJlIGlzIG5vIG5lZWQgZm9yIGEgdHJhbnNmb3JtYXRpb24sIHRoZW4gcGFzcyBpbiB0aGVcbiAqIGB7QGxpbmsgbW9kdWxlOnRyYW5zZHVjZXJzLmlkZW50aXR5fGlkZW50aXR5fWAgdHJhbnNkdWNlci5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNvcmVcbiAqIEBwYXJhbSB7bW9kdWxlOmNvcmUuUmVkdWNlcn0geGZvcm0gQSB0cmFuc2R1Y2VyIG9iamVjdCB3aG9zZSBzdGVwIGZ1bmN0aW9uXG4gKiAgICAgd2lsbCBiZWNvbWUgdGhlIHJldHVybmVkIHJlZHVjdGlvbiBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7KG1vZHVsZTpjb3JlLlN0ZXBGdW5jdGlvbnxtb2R1bGU6Y29yZS5SZWR1Y2VyKX0gcmVkdWNlciBBIHJlZHVjZXJcbiAqICAgICB0aGF0IGtub3dzIGhvdyB0byByZWR1Y2UgdmFsdWVzIGludG8gYW4gb3V0cHV0IGNvbGxlY3Rpb24uIFRoaXMgY2FuXG4gKiAgICAgZWl0aGVyIGJlIGEgcmVkdWNpbmcgZnVuY3Rpb24gb3IgYSB0cmFuc2R1Y2VyIG9iamVjdCB3aG9zZSBgc3RlcGBcbiAqICAgICBmdW5jdGlvbiBrbm93cyBob3cgdG8gcGVyZm9ybSB0aGlzIHJlZHVjdGlvbi5cbiAqIEByZXR1cm5zIHttb2R1bGU6Y29yZS5TdGVwRnVuY3Rpb259IEEgZnVuY3Rpb24gdGhhdCBoYW5kbGVzIGJvdGggdGhlXG4gKiAgICAgdHJhbnNmb3JtYXRpb24gYW5kIHRoZSByZWR1Y3Rpb24gb2YgYSB2YWx1ZSBvbnRvIGEgdGFyZ2V0IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiB0b0Z1bmN0aW9uKHhmb3JtLCByZWR1Y2VyKSB7XG4gIGNvbnN0IHIgPSB0eXBlb2YgcmVkdWNlciA9PT0gXCJmdW5jdGlvblwiID8gdG9SZWR1Y2VyKHJlZHVjZXIpIDogcmVkdWNlcjtcbiAgY29uc3QgcmVzdWx0ID0geGZvcm0ocik7XG4gIHJldHVybiByZXN1bHRbcC5zdGVwXS5iaW5kKHJlc3VsdCk7XG59XG5cbi8qKlxuICogTWFya3MgYSB2YWx1ZSBhcyBjb21wbGV0ZS5cbiAqXG4gKiBUaGlzIGlzIGRvbmUgYnkgd3JhcHBpbmcgdGhlIHZhbHVlLiBUaGlzIG1lYW5zIHRocmVlIHRoaW5nczogZmlyc3QsIGFcbiAqIGNvbXBsZXRlIG9iamVjdCBtYXkgYmUgbWFya2VkIGFzIGNvbXBsZXRlIGFnYWluOyBzZWNvbmQsIGEgY29tcGxldGUgdmFsdWVcbiAqIGlzbid0IHVzYWJsZSB3aXRob3V0IGJlaW5nIHVuY29tcGxldGVkIGZpcnN0OyBhbmQgdGhpcmQgYW55IHR5cGUgb2YgdmFsdWVcbiAqIChpbmNsdWRpbmcgYHVuZGVmaW5lZGApIG1heSBiZSBtYXJrZWQgYXMgY29tcGxldGUuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjb3JlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBiZSBjb21wbGV0ZWQuXG4gKiBAcmV0dXJuIHsqfSBBIGNvbXBsZXRlZCB2ZXJzaW9uIG9mIHRoZSBwcm92aWRlZCB2YWx1ZS4gVGhpcyByZWR1Y3Rpb24gaXNcbiAqICAgICBhY2hpZXZlZCBieSB3cmFwcGluZyB0aGUgdmFsdWUgaW4gYSBtYXJrZXIgb2JqZWN0LlxuICovXG5mdW5jdGlvbiBjb21wbGV0ZSh2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIFtwLnJlZHVjZWRdOiB0cnVlLFxuICAgIFtwLnZhbHVlXTogdmFsdWVcbiAgfTtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIHRoZSBjb21wbGV0ZSBzdGF0dXMgZnJvbSBhIGNvbXBsZXRlZCB2YWx1ZS5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIGludGVuZGVkIHRvIGJlIHVzZWQgd2hlbiBpdCdzIGNlcnRhaW4gdGhhdCBhIHZhbHVlIGlzXG4gKiBhbHJlYWR5IG1hcmtlZCBhcyBjb21wbGV0ZS4gSWYgaXQgaXMgbm90LCBgdW5kZWZpbmVkYCB3aWxsIGJlIHJldHVybmVkXG4gKiBpbnN0ZWFkIG9mIHRoZSB2YWx1ZS5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNvcmVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGJlIHVuY29tcGxldGVkLlxuICogQHJldHVybiB7Kn0gQW4gdW5jb21wbGV0ZWQgdmVyc2lvbiBvZiB0aGUgcHJvdmlkZWQgdmFsdWUuIElmIHRoZSB2YWx1ZSB3YXNcbiAqICAgICBub3QgY29tcGxldGUgaW4gdGhlIGZpcnN0IHBsYWNlLCBgdW5kZWZpbmVkYCB3aWxsIGJlIHJldHVybmVkIGluc3RlYWQuXG4gKi9cbmZ1bmN0aW9uIHVuY29tcGxldGUodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlPy5bcC52YWx1ZV07XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGEgdmFsdWUgaXMgbWFya2VkIGFzIGNvbXBsZXRlLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y29yZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gdGVzdCBmb3IgaXRzIGNvbXBsZXRlIHN0YXR1cy5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IEVpdGhlciBgdHJ1ZWAgaWYgdGhlIHZhbHVlIGlzIGNvbXBsZXRlLCBvciBgZmFsc2VgIGlmIGl0IGlzXG4gKiAgICAgbm90LlxuICovXG5mdW5jdGlvbiBpc0NvbXBsZXRlZCh2YWx1ZSkge1xuICByZXR1cm4gISF2YWx1ZT8uW3AucmVkdWNlZF07XG59XG5cbi8qKlxuICogTWFrZXMgc3VyZSB0aGF0IGEgdmFsdWUgaXMgbWFya2VkIGFzIGNvbXBsZXRlOyBpZiBpdCBpcyBub3QsIGl0IHdpbGwgYmVcbiAqIG1hcmtlZCBhcyBjb21wbGV0ZS5cbiAqXG4gKiBUaGlzIGRpZmZlcnMgZnJvbSB7QGxpbmsgbW9kdWxlOmNvcmUuY29tcGxldGV8Y29tcGxldGV9IGluIHRoYXQgaWYgdGhlIHZhbHVlXG4gKiBpcyBhbHJlYWR5IGNvbXBsZXRlLCB0aGlzIGZ1bmN0aW9uIHdvbid0IGNvbXBsZXRlIGl0IGFnYWluLiBUaGVyZWZvcmUgdGh1c1xuICogZnVuY3Rpb24gY2FuJ3QgYmUgdXNlZCB0byBtYWtlIGEgdmFsdWUgY29tcGxldGUgbXVsdGlwbGUgdGltZXMuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjb3JlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBiZSBjb21wbGV0ZWQuXG4gKiBAcmV0dXJuIHsqfSBJZiB0aGUgdmFsdWUgaXMgYWxyZWFkeSBjb21wbGV0ZSwgdGhlbiB0aGUgdmFsdWUgaXMgc2ltcGx5XG4gKiAgICAgcmV0dXJuZWQuIE90aGVyd2lzZSwgYSBjb21wbGV0ZWQgdmVyc2lvbiBvZiB0aGUgdmFsdWUgaXMgcmV0dXJuZWQuXG4gKi9cbmZ1bmN0aW9uIGVuc3VyZUNvbXBsZXRlZCh2YWx1ZSkge1xuICByZXR1cm4gaXNDb21wbGV0ZWQodmFsdWUpID8gdmFsdWUgOiBjb21wbGV0ZSh2YWx1ZSk7XG59XG5cbi8qKlxuICogUmVtb3ZlcyB0aGUgY29tcGxldGUgc3RhdHVzIGZyb20gYSB2YWx1ZSwgYXMgbG9uZyBhcyBpdCBhY3R1YWxseSBpcyBjb21wbGV0ZS5cbiAqXG4gKiBUaGlzIGRvZXMgYSBjaGVjayB0byBtYWtlIHN1cmUgdGhlIHZhbHVlIHBhc3NlZCBpbiBhY3R1YWxseSBpcyBjb21wbGV0ZS4gSWZcbiAqIGl0IGlzbid0LCB0aGUgdmFsdWUgaXRzZWxmIGlzIHJldHVybmVkLiBJdCdzIG1lYW50IHRvIGJlIHVzZWQgd2hlbiB0aGVcbiAqIGNvbXBsZXRlZCBzdGF0dXMgaXMgdW5jZXJ0YWluLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y29yZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgY29tcGxldGUgdmFsdWUgdG8gYmUgdW5jb21wbGV0ZWQuXG4gKiBAcmV0dXJuIHsqfSBJZiB0aGUgdmFsdWUgaXMgYWxyZWFkeSB1bmNvbXBsZXRlZCwgdGhlIHZhbHVlIGlzIHNpbXBseVxuICogICAgIHJldHVybmVkLiBPdGhlcndpc2UgYW4gdW5jb21wbGV0ZWQgdmVyc2lvbiBvZiB0aGUgdmFsdWUgaXMgcmV0dXJuZWQuXG4gKi9cbmZ1bmN0aW9uIGVuc3VyZVVuY29tcGxldGVkKHZhbHVlKSB7XG4gIHJldHVybiBpc0NvbXBsZXRlZCh2YWx1ZSkgPyB1bmNvbXBsZXRlKHZhbHVlKSA6IHZhbHVlO1xufVxuXG4vKipcbiAqIFJlZHVjZXMgdGhlIGVsZW1lbnRzIG9mIHRoZSBpbnB1dCBjb2xsZWN0aW9uIHRocm91Z2ggYSByZWR1Y2VyIGludG8gYW4gb3V0cHV0XG4gKiBjb2xsZWN0aW9uLlxuICpcbiAqIFRoaXMgaXMgdGhlIGxvd2VzdC1sZXZlbCBvZiB0aGUgdHJhbnNkdWN0aW9uIGZ1bmN0aW9ucy4gSW4gZmFjdCwgdGhpcyBvbmUgaXNcbiAqIHNvIGxvdy1sZXZlbCB0aGF0IGl0IGRvZXNuJ3QgaGF2ZSBhIGxvdCBvZiB1c2UgaW4gbm9ybWFsIG9wZXJhdGlvbi4gSXQncyBtb3JlXG4gKiB1c2VmdWwgZm9yIHdyaXRpbmcgeW91ciBvd24gdHJhbnNmb3JtYXRpb24gZnVuY3Rpb25zLlxuICpcbiAqIGByZWR1Y2VgIGRvZXNuJ3QgYXNzdW1lIHRoYXQgdGhlcmUncyBldmVuIGEgdHJhbnNmb3JtYXRpb24uIEl0IHJlcXVpcmVzIGFuXG4gKiBpbml0aWFsIGNvbGxlY3Rpb24gYW5kIGEgcmVkdWNlciBvYmplY3QgdGhhdCBpcyBtYXRjaGVkIHRvIHRoYXQgaW5pdGlhbFxuICogY29sbGVjdGlvbi4gVGhlIHJlZHVjZXIgb2JqZWN0IG11c3QgaW1wbGVtZW50IHRoZSBgc3RlcGAgYW5kIGByZXN1bHRgXG4gKiBwcm90b2NvbHMsIHdoaWNoIGluc3RydWN0IGByZWR1Y2VgIG9uIGhvdyB0byBidWlsZCB1cCB0aGUgY29sbGVjdGlvbi4gVGhlXG4gKiByZWR1Y2VyIG1heSBpbXBsZW1lbnQgYSB0cmFuc2Zvcm1hdGlvbiBhcyB3ZWxsLCBidXQgYWxsIHRoYXQncyBpbXBvcnRhbnQgaGVyZVxuICogaXMgdGhhdCBpdCBjYW4gZG8gdGhlIHJlZHVjdGlvbi5cbiAqXG4gKiBUaGUgaW5wdXQgY29sbGVjdGlvbiBuZWVkIG9ubHkgaW1wbGVtZW50IGBpdGVyYWJsZWAuIEl0IGlzIG5vdCBuZWNlc3NhcnkgZm9yXG4gKiB0aGUgaW5wdXQgYW5kIG91dHB1dCBjb2xsZWN0aW9ucyB0byBiZSBvZiB0aGUgc2FtZSB0eXBlOyBhcyBsb25nIGFzIHRoZSBpbnB1dFxuICogaW1wbGVtZW50cyBgaXRlcmFibGVgIGFuZCB0aGUgcmVkdWNlciBpbXBsZW1lbnRzIGBzdGVwYCBhbmQgYHJlc3VsdGBcbiAqIGFwcHJvcHJpYXRlIHRvIHRoZSB0eXBlIG9mIHRoZSBgaW5pdGAgY29sbGVjdGlvbiwgdGhlbiBhbnkgdHJhbnNsYXRpb25cbiAqIGJldHdlZW4gY29sbGVjdGlvbiB0eXBlcyBjYW4gb2NjdXIuXG4gKlxuICogVGhlIG5vcm1hbCBjb3Vyc2Ugb2Ygb3BlcmF0aW9uIHdpbGwgYmUgdG8gY2FsbFxuICoge0BsaW5rIG1vZHVsZTpjb3JlLnRyYW5zZHVjZXx0cmFuc2R1Y2V9IGluc3RlYWQsIGFzIHRoYXQgZnVuY3Rpb24gbWFrZXMgaXRcbiAqIGVhc3kgdG8gY29tYmluZSB0cmFuc2Zvcm1hdGlvbnMgd2l0aCByZWR1Y3Rpb25zIGFuZCBjYW4gb3B0aW9uYWxseSBmaWd1cmUgb3V0XG4gKiB0aGUgaW5pdGlhbCBjb2xsZWN0aW9uIGl0c2VsZi5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNvcmVcbiAqIEBwYXJhbSB7Kn0gY29sbGVjdGlvbiBUaGUgaW5wdXQgY29sbGVjdGlvbi4gVGhlIG9ubHkgcmVxdWlyZW1lbnQgb2YgdGhpc1xuICogICAgIGNvbGxlY3Rpb24gaXMgdGhhdCBpdCBpbXBsZW1lbnQgdGhlIGBpdGVyYWJsZWAgcHJvdG9jb2wuIFNwZWNpYWwgc3VwcG9ydFxuICogICAgIGlzIHByb3ZpZGVkIGJ5IHRoZSBsaWJyYXJ5IGZvciBvYmplY3RzLCBzbyB0aGV5IGNhbiBiZSB1c2VkIGFzIHdlbGwuXG4gKiBAcGFyYW0ge21vZHVsZTpjb3JlLlJlZHVjZXJ9IHJlZHVjZXIgQW4gb2JqZWN0IHRoYXQgaW1wbGVtZW50cyB0aGUgYHN0ZXBgIGFuZFxuICogICAgIGByZXN1bHRgIHByb3RvY29scy4gVGhpcyBvYmplY3QgbXVzdCBrbm93IGhvdyB0byBwcm9kdWNlIGFuIG91dHB1dFxuICogICAgIGNvbGxlY3Rpb24gdGhyb3VnaCB0aG9zZSBwcm90b2NvbCBmdW5jdGlvbnMuXG4gKiBAcGFyYW0geyp9IGluaXQgYSBjb2xsZWN0aW9uIG9mIHRoZSBzYW1lIHR5cGUgYXMgdGhlIG91dHB1dCBjb2xsZWN0aW9uLiBJdFxuICogICAgIG5lZWQgbm90IGJlIGVtcHR5OyBpZiBpdCBpcyBub3QsIHRoZSBleGlzdGluZyBlbGVtZW50cyBhcmUgcmV0YWluZWQgYXNcbiAqICAgICB0aGUgaW5wdXQgY29sbGVjdGlvbiBpcyByZWR1Y2VkIGludG8gaXQuXG4gKiBAcmV0dXJuIHsqfSBBIG5ldyBjb2xsZWN0aW9uLCBjb25zaXN0aW5nIG9mIHRoZSBgaW5pdGAgY29sbGVjdGlvbiB3aXRoIGFsbCBvZlxuICogICAgIHRoZSBlbGVtZW50cyBvZiB0aGUgYGNvbGxlY3Rpb25gIGNvbGxlY3Rpb24gcmVkdWNlZCBpbnRvIGl0LlxuICovXG5mdW5jdGlvbiByZWR1Y2UoY29sbGVjdGlvbiwgcmVkdWNlciwgaW5pdCkge1xuICBpZiAoY29sbGVjdGlvbiA9PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCBpdGVyID0gaXRlcmF0b3IoY29sbGVjdGlvbik7XG4gIGlmICghaXRlcikge1xuICAgIHRocm93IEVycm9yKGBDYW5ub3QgcmVkdWNlIGFuIGluc3RhbmNlIG9mICR7Y29sbGVjdGlvbi5jb25zdHJ1Y3Rvci5uYW1lfWApO1xuICB9XG5cbiAgbGV0IGFjYyA9IGluaXQ7XG4gIGxldCBzdGVwID0gaXRlci5uZXh0KCk7XG5cbiAgd2hpbGUgKCFzdGVwLmRvbmUpIHtcbiAgICBhY2MgPSByZWR1Y2VyW3Auc3RlcF0oYWNjLCBzdGVwLnZhbHVlKTtcbiAgICBpZiAoaXNDb21wbGV0ZWQoYWNjKSkge1xuICAgICAgYWNjID0gdW5jb21wbGV0ZShhY2MpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHN0ZXAgPSBpdGVyLm5leHQoKTtcbiAgfVxuXG4gIHJldHVybiByZWR1Y2VyW3AucmVzdWx0XShhY2MpO1xufVxuXG5leHBvcnQge1xuICBpbml0LFxuICBzdGVwLFxuICByZXN1bHQsXG4gIHRvUmVkdWNlcixcbiAgQVJSQVlfUkVEVUNFUixcbiAgT0JKRUNUX1JFRFVDRVIsXG4gIFNUUklOR19SRURVQ0VSLFxuICB0b1RyYW5zZHVjZXIsXG4gIHRvRnVuY3Rpb24sXG4gIGNvbXBsZXRlLFxuICB1bmNvbXBsZXRlLFxuICBpc0NvbXBsZXRlZCxcbiAgZW5zdXJlQ29tcGxldGVkLFxuICBlbnN1cmVVbmNvbXBsZXRlZCxcbiAgcmVkdWNlXG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG5cbi8qKlxuICogQSBidW5jaCBvZiB1dGlsaXR5IGZ1bmN0aW9ucy4gVGhlc2UgYXJlIGFsbCB1c2VkIGJ5IHRoZSBsaWJyYXJ5IGl0c2VsZiBpblxuICogcGxhY2VzLCBidXQgbWFueSBvZiB0aGVtIGFyZSBzdWl0YWJsZSBmb3IgZ2VuZXJhbCB1c2UgYXMgd2VsbC5cbiAqIF5cbiAqIEBtb2R1bGUgY29yZS91dGlsc1xuICogQHByaXZhdGVcbiAqL1xuXG4vKipcbiAqIGBPYmplY3RgJ3MgYHRvU3RyaW5nYCBpcyBleHBsaWNpdGx5IHVzZWQgdGhyb3VnaG91dCBiZWNhdXNlIGl0IGNvdWxkIGJlXG4gKiByZWRlZmluZWQgaW4gYW55IHN1YnR5cGUgb2YgYE9iamVjdGAuXG4gKlxuICogQGZ1bmN0aW9uIHRvU3RyaW5nXG4gKiBAcHJpdmF0ZVxuICovXG5jb25zdCB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGEgdmFsdWUgaXMgYSBmdW5jdGlvbi5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNvcmVcbiAqIEBwYXJhbSB7Kn0geCBUaGUgdmFsdWUgYmVpbmcgdGVzdGVkIHRvIHNlZSBpZiBpdCBpcyBhIGZ1bmN0aW9uLlxuICogQHJldHVybiB7Ym9vbGVhbn0gRWl0aGVyIGB0cnVlYCBpZiB0aGUgdGVzdCB2YWx1ZSBpcyBhIGZ1bmN0aW9uIG9yIGBmYWxzZWAgaWZcbiAqICAgICBpdCBpcyBub3QuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHgpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoeCkgPT09IFwiW29iamVjdCBGdW5jdGlvbl1cIjtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgYSB2YWx1ZSBpcyBhIGdlbmVyYXRvciBmdW5jdGlvbi5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNvcmVcbiAqIEBwYXJhbSB7Kn0geCBUaGUgdmFsdWUgYmVpbmcgdGVzdGVkIHRvIHNlZSBpZiBpdCBpcyBhIGdlbmVyYXRvciBmdW5jdGlvbi5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IEVpdGhlciBgdHJ1ZWAgaWYgdGhlIHRlc3QgdmFsdWUgaXMgYSBnZW5lcmF0b3IgZnVuY3Rpb24gb3JcbiAqICAgICBgZmFsc2VgIGlmIGl0IGlzIG5vdC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGlzR2VuZXJhdG9yRnVuY3Rpb24oeCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh4KSA9PT0gXCJbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXVwiO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhIHZhbHVlIGlzIGEgcGxhaW4gb2JqZWN0LlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gcmV0dXJucyBgZmFsc2VgIGlmIHRoZSB2YWx1ZSBpcyBhbnkgb3RoZXIgc29ydCBvZiBidWlsdC1pblxuICogb2JqZWN0IChzdWNoIGFzIGFuIGFycmF5IG9yIGEgc3RyaW5nKS4gSXQgYWxzbyByZXR1cm5zIGBmYWxzZWAgZm9yIGFueSBvYmplY3RcbiAqIHRoYXQgaXMgY3JlYXRlZCBieSBhIGNvbnN0cnVjdG9yIHRoYXQgaXMgbm90IGBPYmplY3RgJ3MgY29uc3RydWN0b3IsIG1lYW5pbmdcbiAqIHRoYXQgXCJpbnN0YW5jZXNcIiBvZiBjdXN0b20gXCJjbGFzc2VzXCIgd2lsbCByZXR1cm4gYGZhbHNlYC4gVGhlcmVmb3JlIGl0J3Mgb25seVxuICogZ29pbmcgdG8gcmV0dXJuIGB0cnVlYCBmb3IgbGl0ZXJhbCBvYmplY3RzIG9yIHRob3NlIGNyZWF0ZWQgd2l0aFxuICogYE9iamVjdC5jcmVhdGUoKWAuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjb3JlXG4gKiBAcGFyYW0geyp9IHggVGhlIHZhbHVlIGJlaW5nIHRlc3RlZCB0byBzZWUgaWYgaXQgaXMgYSBwbGFpbiBvYmplY3QuXG4gKiBAcmV0dXJuIHtib29sZWFufSBFaXRoZXIgYHRydWVgIGlmIHRoZSB0ZXN0IHZhbHVlIGlzIGEgcGxhaW4gb2JqZWN0IG9yXG4gKiAgICAgYGZhbHNlYCBpZiBpdCBpcyBub3QuXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHgpIHtcbiAgLy8gVGhpcyBjaGVjayBleGNsdWRlcyBidWlsdC1pbiBub24tT2JqZWN0IG9iamVjdHMgKHN1Y2ggYXMgQXJyYXkgYW5kIFN0cmluZykuXG4gIC8vIEl0IGFsc28gZXhjbHVkZXMgb2JqZWN0cyBjcmVhdGVkIGZyb20gRVMyMDE1IGNsYXNzZXMsIGJ1dCBpdCBkb2VzIG5vdFxuICAvLyBleGNsdWRlIG9iamVjdHMgY3JlYXRlZCB3aXRoIGBuZXdgIG9uIGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyAodGhhdCBoYXBwZW5zXG4gIC8vIGJlbG93KS5cbiAgaWYgKHRvU3RyaW5nLmNhbGwoeCkgIT09IFwiW29iamVjdCBPYmplY3RdXCIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBQcm90b3R5cGUtbGVzcyBvYmplY3RzIChjcmVhdGVkIHdpdGggYE9iamVjdC5jcmVhdGUobnVsbCkpYCBwYXNzXG4gIGNvbnN0IHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHgpO1xuICBpZiAocHJvdG8gPT09IG51bGwpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8vIENoZWNrIHRvIHNlZSB3aGV0aGVyIHRoZSBjb25zdHJ1Y3RvciBvZiB0aGUgdGVzdGVkIG9iamVjdCBpcyB0aGUgT2JqZWN0XG4gIC8vIGNvbnN0cnVjdG9yLiBUaGlzIGlzIHRoZSBvbmx5IGNvbnN0cnVjdG9yIHRoYXQgcHJvZHVjZXMgYSBcInBsYWluXCIgb2JqZWN0LlxuICBjb25zdCBjdG9yID1cbiAgICBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocHJvdG8sIFwiY29uc3RydWN0b3JcIikgJiZcbiAgICBwcm90by5jb25zdHJ1Y3RvcjtcbiAgcmV0dXJuIHR5cGVvZiBjdG9yID09PSBcImZ1bmN0aW9uXCIgJiYgY3RvciA9PT0gT2JqZWN0O1xufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhIHZhbHVlIGlzIGEgbnVtYmVyLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gd2lsbCByZXR1cm4gYHRydWVgIGZvciBhbnkgbnVtYmVyIGxpdGVyYWwgb3IgaW5zdGFuY2Ugb2ZcbiAqIGBOdW1iZXJgIGV4Y2VwdCBmb3IgYEluZmluaXR5YCBvciBgTmFOYC4gSXQgd2lsbCByZXR1cm4gYGZhbHNlYCBmb3Igc3RyaW5nc1xuICogdGhhdCBoYXBwZW4gdG8gYWxzbyBiZSBudW1iZXJzOyB0aGUgdmFsdWUgbXVzdCBiZSBhbiBhY3R1YWwgYE51bWJlcmAgaW5zdGFuY2VcbiAqIG9yIG51bWJlciBsaXRlcmFsIHRvIHJldHVybiBgdHJ1ZWAuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjb3JlXG4gKiBAcGFyYW0geyp9IHggVGhlIHZhbHVlIGJlaW5nIHRlc3RlZCB0byBzZWUgaWYgaXQgaXMgYSBudW1iZXIuXG4gKiBAcmV0dXJuIHtib29sZWFufSBFaXRoZXIgYHRydWVgIGlmIHRoZSB0ZXN0IHZhbHVlIGlzIGEgZmluaXRlIG51bWJlciAobm90XG4gKiAgICAgaW5jbHVkaW5nIHN0cmluZyByZXByZXNlbnRhdGlvbnMgb2YgbnVtYmVycykgb3IgYGZhbHNlYCBpZiBpdCBpcyBub3QuXG4gKi9cbmZ1bmN0aW9uIGlzTnVtYmVyKHgpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoeCkgPT09IFwiW29iamVjdCBOdW1iZXJdXCIgJiYgaXNGaW5pdGUoeCk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGEgdmFsdWUgaXMgYSBzdHJpbmcuXG4gKlxuICogTGl0ZXJhbCBzdHJpbmdzIHdpbGwgcmV0dXJuIGB0cnVlYCwgYXMgd2lsbCBpbnN0YW5jZXMgb2YgdGhlIGBTdHJpbmdgIG9iamVjdC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNvcmVcbiAqIEBwYXJhbSB7Kn0geCBUaGUgdmFsdWUgYmVpbmcgdGVzdGVkIHRvIHNlZSBpZiBpdCBpcyBhIHN0cmluZy5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IEVpdGhlciBgdHJ1ZWAgaWYgdGhlIHRlc3QgdmFsdWUgaXMgYSBzdHJpbmcgb3IgYGZhbHNlYCBpZlxuICogICAgaXQgaXMgbm90LlxuICovXG5mdW5jdGlvbiBpc1N0cmluZyh4KSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHgpID09PSBcIltvYmplY3QgU3RyaW5nXVwiO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhIHZhbHVlIGlzIGFuIGFycmF5LlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gbWVyZWx5IGRlbGVnYXRlcyB0byBgQXJyYXkuaXNBcnJheWAuIEl0IGlzIHByb3ZpZGVkIGZvclxuICogY29uc2lzdGVuY3kgaW4gY2FsbGluZyBzdHlsZSBvbmx5LlxuICpcbiAqIEBmdW5jdGlvbiBpc0FycmF5XG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNvcmVcbiAqIEBwYXJhbSB7Kn0geCBUaGUgdmFsdWUgYmVpbmcgdGVzdGVkIHRvIHNlZSBpZiBpdCBpcyBhbiBhcnJheS5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IEVpdGhlciBgdHJ1ZWAgaWYgdGhlIHRlc3QgdmFsdWUgaXMgYW4gYXJyYXkgb3IgYGZhbHNlYCBpZlxuICogICAgIGl0IGlzIG5vdC5cbiAqL1xuY29uc3QgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5cbmV4cG9ydCB7XG4gIGlzRnVuY3Rpb24sXG4gIGlzR2VuZXJhdG9yRnVuY3Rpb24sXG4gIGlzT2JqZWN0LFxuICBpc051bWJlcixcbiAgaXNTdHJpbmcsXG4gIGlzQXJyYXlcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuLyoqXG4gKiBBbGwgb2YgdGhlIHB1YmxpYy1mYWNpbmcgQ2hhbmtvIGZ1bmN0aW9ucyBhcmUgZ2F0aGVyZWQgaGVyZSBpbiBvbmUgcGxhY2UgdG9cbiAqIGJlIGV4cG9ydGVkIGFzIGEgd2hvbGUuIFRoaXMgaXMgYSBjb21wbGV0ZWx5IGZsYXQgbGlzdCBvZiBleHBvcnRzLCBhc1xuICogaW5sdWRpbmcgYW55IG9iamVjdCBsaXRlcmFscyBmb3IgZXhwb3J0ICh3aGljaCB3b3VsZCBiZSBuYXR1cmFsIGZvciBidWZmZXJzLFxuICogZm9yIGV4YW1wbGUpIHdvdWxkIGtlZXAgdHJlZS1zaGFraW5nIGZyb20gd29ya2luZyByaWdodC5cbiAqXG4gKiBAbW9kdWxlIGNzcFxuICovXG5cbmV4cG9ydCB7IGZpeGVkLCBkcm9wcGluZywgc2xpZGluZyB9IGZyb20gXCJtb2R1bGVzL2J1ZmZlclwiO1xuZXhwb3J0IHtcbiAgQ0xPU0VELFxuICBjaGFuLFxuICB0aW1lZENoYW4sXG4gIHRyYW5zQ2hhbixcbiAgc2VuZCxcbiAgcmVjdixcbiAgc2VuZEFzeW5jLFxuICByZWN2QXN5bmMsXG4gIHJlY3ZPclRocm93LFxuICBjbG9zZSxcbiAgaXNDbG9zZWQsXG4gIGlzQnVmZmVyZWQsXG4gIGlzVGltZWQsXG4gIHNlbGVjdCxcbiAgc2VsZWN0QXN5bmMsXG4gIHZhbHVlLFxuICBjaGFubmVsXG59IGZyb20gXCJtb2R1bGVzL2NoYW5uZWxcIjtcbmV4cG9ydCB7XG4gIGNvbmZpZyxcbiAgU0VUX0lNTUVESUFURSxcbiAgTUVTU0FHRV9DSEFOTkVMLFxuICBTRVRfVElNRU9VVFxufSBmcm9tIFwibW9kdWxlcy9kaXNwYXRjaGVyXCI7XG5leHBvcnQgeyBnbywgc2xlZXAsIGpvaW4gfSBmcm9tIFwibW9kdWxlcy9wcm9jZXNzXCI7XG5leHBvcnQgeyBFTVBUWSB9IGZyb20gXCJtb2R1bGVzL3F1ZXVlXCI7XG5cbi8qKlxuICogQW4gZXJyb3IgaGFuZGxpbmcgZnVuY2l0b24uIFRoaXMgaXMgdXNlZCB0byBoYW5kbGUgZXhjZXB0aW9ucyB0aHJvd24gaW4gYXN5bmNcbiAqIGZ1bmN0aW9ucyBhbmQgaW4gdHJhbnNkdWNlcnMuIFRoZSByZXR1cm4gdmFsdWUgb2YgYW4gZXhjZXB0aW9uIGhhbmRsZXIgaXNcbiAqIHR5cGljYWxseSBzZW50IHRvIGEgY2hhbm5lbDsgaWYgdGhlIGV4Y2VwdGlvbiBoYXBwZW5lZCB3aXRoaW4gYW4gYXN5bmNcbiAqIGZ1bmN0aW9uLCBpdCB3aWxsIGJlIHNlbnQgdG8gdGhhdCBmdW5jdGlvbidzIG91dHB1dCBjaGFubmVsLCBhbmQgaWYgdGhlXG4gKiBleGNwZXRpb24gaGFwcGVuZWQgaW4gYSB0cmFuc2R1Y2VyLCBpdCB3aWxsIGJlIHNlbnQgdG8gdGhlIGNoYW5uZWwgdG8gd2hpY2hcbiAqIHRoZSB0cmFuc2R1Y2VyIGlzIGF0dGFjaGVkLlxuICpcbiAqIEBjYWxsYmFjayBFeGNlcHRpb25IYW5kbGVyXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICogQHBhcmFtIHtvYmplY3R9IGVyciBUaGUgZXJyb3Igb2JqZWN0IHRoYXQgd2FzIHRocm93biB0byBjYXVzZSB0aGUgZXJyb3IgdG9cbiAqICAgICBoYXZlIHRvIGJlIGhhbmRsZWQuXG4gKiBAcmV0dXJuIHsqfSBBIHZhbHVlIGRlY2lkZWQgYnkgdGhlIGhhbmRsZXIgdGhhdCB3aWxsIGJlIHNlbnQgdG8gYSBjaGFubmVsLlxuICovXG5cbi8qKlxuICogQSBjYWxsYmFjayB0aGF0J3MgcnVuIHdoZW4gYSBub24tYmxvY2tpbmcgY2hhbm5lbCBvcGVyYXRpb24gY29tcGxldGVzLiBUaGVcbiAqIHZhbHVlIHRoYXQgdGhpcyBmdW5jdGlvbiByZWNlaXZlcyBpcyBpZGVudGljYWwgdG8gd2hhdCBpcyByZXR1cm5lZCBieSBhXG4gKiBibG9ja2luZyBjYWxsOiB0aGUgdmFsdWUgcmVjZWl2ZWQgZnJvbSB0aGUgY2hhbm5lbCBmb3IgYSBgcmVjdmAsIG9yIGB0cnVlYCBvclxuICogYGZhbHNlYCBkZXBlbmRpbmcgb24gdGhlIGNoYW5uZWwgc3RhdHVzIGZvciBhIGBzZW5kYC4gQW55IHJldHVybiB2YWx1ZSBmcm9tXG4gKiB0aGlzIGNhbGxiYWNrIGlzIGlnbm9yZWQuXG4gKlxuICogQGNhbGxiYWNrIE9wQ2FsbGJhY2tcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcGFyYW0geyp9IHZhbHVlIEVpdGhlciB0aGUgdmFsdWUgcmVjZWl2ZWQgZnJvbSB0aGUgY2hhbm5lbCwgb3Igd2hldGhlciBvclxuICogbm90IGEgdmFsdWUgd2FzIHN1Y2Nlc3NmdWxseSBzZW50LlxuICovXG5cbi8qKlxuICogQSBjYWxsYmFjayB0aGF0J3MgcnVuIHdoZW4gYSBub24tYmxvY2tpbmcgYHNlbGVjdGAgb3BlcmF0aW9uIGNvbXBsZXRlcy4gVGhlXG4gKiB2YWx1ZSB0aGF0IHRoaXMgZnVuY3Rpb24gcmVjZWl2ZXMgaXMgYW4gb2JqZWN0IHdpdGggdHdvIHByb3BlcnRpZXM6IHRoZSB2YWx1ZVxuICogdGhhdCB0aGUgYHNlbGVjdGAgb3BlcmF0aW9uIGNvbXBsZXRlZCB3aXRoIChlaXRoZXIgdGhlIHZhbHVlIHJlY2VpdmVkIGZyb21cbiAqIHRoZSBjaGFubmVsIGluIGEgcmVjZWl2ZSBvcGVyYXRpb24sIG9yIGB0cnVlYCBvciBgZmFsc2VgIGluIGEgc2VuZFxuICogb3BlcmF0aW9uKSwgYWxvbmcgd2l0aCB0aGUgY2hhbm5lbCB3aGVyZSB0aGUgb3BlcmF0aW9uIGFjdHVhbGx5IGhhcHBlbmVkLiBBbnlcbiAqIHJldHVybiB2YWx1ZSBmcm9tIHRoaXMgY2FsbGJhY2sgaXMgaWdub3JlZC5cbiAqXG4gKiBAY2FsbGJhY2sgU2VsZWN0Q2FsbGJhY2tcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuU2VsZWN0UmVzdWx0fSBkYXRhIFRoZSB2YWx1ZSByZXR1cm5lZCBmcm9tIHRoZSBzZWxlY3RcbiAqICAgICBvcGVyYXRpb24uXG4gKi9cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG4vKipcbiAqIFByb3ZpZGVzIHNldmVyYWwgdHlwZXMgb2YgYnVmZmVycyB1c2FibGUgaW4gYnVmZmVyZWQgY2hhbm5lbHMuIFRoZXNlIGFyZSBhbGxcbiAqIGJ1aWx0IG9uIGEgc21hbGwsIGVmZmljaWVudCBxdWV1ZSB3aGljaCBpcyBpbiB0dXJuIGJhY2tlZCBieSBhIEphdmFTY3JpcHRcbiAqIGFycmF5LlxuICpcbiAqIEBtb2R1bGUgY3NwL2J1ZmZlclxuICogQHByaXZhdGVcbiAqL1xuXG5pbXBvcnQgeyBxdWV1ZSBhcyBxLCBjb3VudCBhcyBxQ291bnQsIGVucXVldWUsIGRlcXVldWUgfSBmcm9tIFwibW9kdWxlcy9xdWV1ZVwiO1xuXG4vKipcbiAqIEEgYnVmZmVyIHRoYXQgc3RvcmVzIHZhbHVlcyBzZW50IHRvIGEgYnVmZmVyZWQgY2hhbm5lbCB1bnRpbCBhIHByb2Nlc3NcbiAqIHJlY2VpdmVzIHRoZW0uXG4gKlxuICogRGlmZmVyZW50IGJ1ZmZlcnMgZGlmZmVyIG9ubHkgaW4gdGhlIHdheSB0aGF0IHRoZXkgZGV0ZXJtaW5lIHdoZXRoZXIgdGhleSBhcmVcbiAqIGZ1bGwgYW5kIGluIHdoYXQgaGFwcGVucyB3aGVuIGEgbmV3IHZhbHVlIGlzIGFkZGVkIHRvIGEgZnVsbCBidWZmZXIuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqIEB0eXBlZGVmIHsobW9kdWxlOmNzcC5GaXhlZEJ1ZmZlciB8IG1vZHVsZTpjc3AuRHJvcHBpbmdCdWZmZXIgfFxuICogICAgIG1vZHVsZTpjc3AuU2xpZGluZ0J1ZmZlcil9IEJ1ZmZlclxuICovXG5cbi8qKlxuICogVGhlIG5hbWUgb2YgYSBwcm9wZXJ0eSB0aGF0IGV4aXN0cyBvbiBidWZmZXIgb2JqZWN0cyBmb3IgdGhlIHB1cnBvc2Ugb2ZcbiAqIGl0ZW50aWZ5aW5nIHRoZW0gYXMgYnVmZmVyIG9iamVjdHMuXG4gKlxuICogQHR5cGUge1N5bWJvbH1cbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IEJVRkZFUiA9IFN5bWJvbChcIkJVRkZFUlwiKTtcblxuLyoqXG4gKiBBIHBvc3NpYmxlIHZhbHVlIG9mIHRoZSBge0BsaW5rIG1vZHVsZTpjc3AvYnVmZmVyLkJVRkZFUnxCVUZGRVJ9IHByb3BlcnR5XG4gKiBpbmRpY2F0aW5nIHRoYXQgdGhlIGJ1ZmZlciBpcyBhIGZpeGVkIGJ1ZmZlci5cbiAqXG4gKiBAdHlwZSB7U3ltYm9sfVxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgRklYRUQgPSBTeW1ib2woXCJGSVhFRFwiKTtcblxuLyoqXG4gKiBBIHBvc3NpYmxlIHZhbHVlIG9mIHRoZSBge0BsaW5rIG1vZHVsZTpjc3AvYnVmZmVyLkJVRkZFUnxCVUZGRVJ9IHByb3BlcnR5XG4gKiBpbmRpY2F0aW5nIHRoYXQgdGhlIGJ1ZmZlciBpcyBhIGRyb3BwaW5nIGJ1ZmZlci5cbiAqXG4gKiBAdHlwZSB7U3ltYm9sfVxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgRFJPUFBJTkcgPSBTeW1ib2woXCJEUk9QUElOR1wiKTtcblxuLyoqXG4gKiBBIHBvc3NpYmxlIHZhbHVlIG9mIHRoZSBge0BsaW5rIG1vZHVsZTpjc3AvYnVmZmVyLkJVRkZFUnxCVUZGRVJ9IHByb3BlcnR5XG4gKiBpbmRpY2F0aW5nIHRoYXQgdGhlIGJ1ZmZlciBpcyBhIHNsaWRpbmcgYnVmZmVyLlxuICpcbiAqIEB0eXBlIHtTeW1ib2x9XG4gKiBAcHJpdmF0ZVxuICovXG5jb25zdCBTTElESU5HID0gU3ltYm9sKFwiU0xJRElOR1wiKTtcblxuLyoqXG4gKiBQcmVkaWNhdGUgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBzdXBwbGllZCBvYmplY3QgaXMgYSBidWZmZXIuXG4gKlxuICogQHBhcmFtIHsqfSBvYmogVGhlIHZhbHVlIHRvIHRlc3QgdG8gc2VlIGlmIGl0J3MgYSBidWZmZXIuXG4gKiBAcmV0dXJuIHtib29sZWFufSBFaXRoZXIgYHRydWVgIGlmIHRoZSB2YWx1ZSBpcyBhIGJ1ZmZlciwgb3IgYGZhbHNlYCBpZiBpdCBpc1xuICogICAgIG5vdC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGlzQnVmZmVyKG9iaikge1xuICByZXR1cm4gISFvYmo/LltCVUZGRVJdO1xufVxuXG4vKipcbiAqIEEgYnVmZmVyIGltcGxlbWVudGF0aW9uIHRoYXQgbmV2ZXIgZGlzY2FyZHMgYnVmZmVyZWQgaXRlbXMgd2hlbiBhIG5ldyBpdGVtIGlzXG4gKiBhZGRlZC5cbiAqXG4gKiBUaGlzIGJ1ZmZlciBoYXMgYSBjb25jZXB0IG9mICpmdWxsKiwgYnV0IGl0J3MgYSBzb2Z0IGxpbWl0LiBJZiB0aGUgc2l6ZSBvZlxuICogdGhlIGJ1ZmZlciBpcyBleGNlZWRlZCwgYWRkZWQgaXRlbXMgYXJlIHN0aWxsIHN0b3JlZC5cbiAqXG4gKiBBIGJ1ZmZlciBvZiB0aGlzIHR5cGUgZXhpc3RzIG9ubHkgYXMgYW4gb2JqZWN0IHRoYXQgY2FuIGJlIHBhc3NlZCB0byBhXG4gKiBjaGFubmVsIGNyZWF0aW9uIGZ1bmN0aW9uIChzdWNoIGFzIHtAbGluayBtb2R1bGU6Y3NwLmNoYW58Y2hhbn0pIHRvIG1ha2UgdGhhdFxuICogY2hhbm5lbCBhIGJ1ZmZlcmVkIGNoYW5uZWwuIEl0IGRvZXNuJ3QgaGF2ZSBhbnkgcHJvcGVydGllcyB0aGF0IGFyZSBpbnRlbmRlZFxuICogZm9yIGV4dGVybmFsIHVzZS5cbiAqXG4gKiBAdHlwZWRlZiBGaXhlZEJ1ZmZlclxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgYSBmaXhlZCBidWZmZXIgb2YgdGhlIHNwZWNpZmllZCBjYXBhY2l0eS5cbiAqXG4gKiBBIGZpeGVkIGJ1ZmZlciBpcyBhICdub3JtYWwnIGJ1ZmZlciwgb25lIHRoYXQgc3RvcmVzIGFuZCByZXR1cm5zIGl0ZW1zIG9uXG4gKiBkZW1hbmQuIFdoaWxlIGl0IGlzIGNhcGFibGUgb2YgYmVpbmcgb3Zlci1maWxsZWQsIHRoYXQgYWJpbGl0eSBpcyBub3QgdXNlZCBpblxuICogQ2hhbmtvLiBBIGJ1ZmZlciB0aGF0IGlzIGZ1bGwgd2lsbCBjYXVzZSB0aGUgbmV4dCBwdXQgdG8gaXRzIGNoYW5uZWwgdG8gYmxvY2tcbiAqIHVudGlsIGF0IGxlYXN0IG9uZSBpdGVtIGlzIHJlbW92ZWQgZnJvbSB0aGUgYnVmZmVyLlxuICpcbiAqIFRoaXMgYnVmZmVyIGlzIHBhc3NlZCB0byBge0BsaW5rIG1vZHVsZTpjc3AuY2hhbnxjaGFufWAsIGV0Yy4gdG8gY3JlYXRlIGFcbiAqIGJ1ZmZlcmVkIGNoYW5uZWwuIEl0IGlzIG5vdCBtZWFudCB0byBiZSB1c2VkIGRpcmVjdGx5LlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcGFyYW0ge251bWJlcn0gc2l6ZSBUaGUgbnVtYmVyIG9mIGl0ZW1zIHRoYXQgdGhlIG5ldyBidWZmZXIgY2FuIGhvbGQgYmVmb3JlXG4gKiAgICAgaXQncyBmdWxsLlxuICogQHJldHVybiB7bW9kdWxlOmNzcC5GaXhlZEJ1ZmZlcn0gQSBuZXcgZml4ZWQgYnVmZmVyIG9mIHRoZSBzcGVjaWZpZWRcbiAqICAgICBjYXBhY2l0eS5cbiAqL1xuZnVuY3Rpb24gZml4ZWQoc2l6ZSkge1xuICByZXR1cm4gT2JqZWN0LmNyZWF0ZShudWxsLCB7XG4gICAgLyoqXG4gICAgICogVGhlIHF1ZXVlIGJhY2tpbmcgdGhpcyBidWZmZXIuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7bW9kdWxlOmNzcC9xdWV1ZX5RdWV1ZX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHF1ZXVlOiB7XG4gICAgICB2YWx1ZTogcSgpXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBudW1iZXIgb2YgaXRlbXMgdGhhdCB0aGlzIHF1ZXVlIGNhbiBob2xkIGJlZm9yZSBpdCdzIGNvbnNpZGVyZWQgZnVsbC5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBzaXplOiB7XG4gICAgICB2YWx1ZTogc2l6ZVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBIG1hcmtlciBwcm9wZXJ0eSB1c2VkIHRvIHNob3cgdGhhdCB0aGlzIGlzIGEgZml4ZWQgYnVmZmVyLlxuICAgICAqXG4gICAgICogQHR5cGUge1N5bWJvbH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIFtCVUZGRVJdOiB7XG4gICAgICB2YWx1ZTogRklYRURcbiAgICB9XG4gIH0pO1xufVxuXG4vKipcbiAqIEEgYnVmZmVyIGltcGxlbWVudGF0aW9uIHRoYXQgZHJvcHMgbmV3bHkgYWRkZWQgaXRlbXMgd2hlbiB0aGUgYnVmZmVyIGlzIGZ1bGwuXG4gKlxuICogVGhpcyBkcm9wcGluZyBiZWhhdmlvciBpcyBzaWxlbnQ6IHRoZSBuZXcgaXRlbSBpcyBzaW1wbHkgbm90IGFkZGVkIHRvIHRoZVxuICogcXVldWUuIE5vdGUgdGhhdCB0aGlzIGJ1ZmZlciBpcyBuZXZlciBgZnVsbGAgYmVjYXVzZSBpdCBjYW4gYWx3YXlzIGJlIGFkZGVkXG4gKiB0byB3aXRob3V0IGV4Y2VlZGluZyB0aGUgc2l6ZSwgZXZlbiBpZiB0aGF0ICdhZGRpbmcnIGRvZXNuJ3QgcmVzdWx0IGluIGEgbmV3XG4gKiBpdGVtIGFjdHVhbGx5IGFwcGVhcmluZyBpbiB0aGUgYnVmZmVyLlxuICpcbiAqIEEgYnVmZmVyIG9mIHRoaXMgdHlwZSBleGlzdHMgb25seSBhcyBhbiBvYmplY3QgdGhhdCBjYW4gYmUgcGFzc2VkIHRvIGFcbiAqIGNoYW5uZWwgY3JlYXRpb24gZnVuY3Rpb24gKHN1Y2ggYXMge0BsaW5rIG1vZHVsZTpjc3AuY2hhbnxjaGFufSkgdG8gbWFrZSB0aGF0XG4gKiBjaGFubmVsIGEgYnVmZmVyZWQgY2hhbm5lbC4gSXQgZG9lc24ndCBoYXZlIGFueSBwcm9wZXJ0aWVzIHRoYXQgYXJlIGludGVuZGVkXG4gKiBmb3IgZXh0ZXJuYWwgdXNlLlxuICpcbiAqIEB0eXBlZGVmIERyb3BwaW5nQnVmZmVyXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICovXG5cbi8qKlxuICogQ3JlYXRlcyBhIGRyb3BwaW5nIGJ1ZmZlciBvZiB0aGUgc3BlY2lmaWVkIGNhcGFjaXR5LlxuICpcbiAqIEEgZHJvcHBpbmcgYnVmZmVyIHNpbGVudGx5IGRyb3BzIHRoZSBpdGVtIGJlaW5nIGFkZGVkIGlmIHRoZSBidWZmZXIgaXNcbiAqIGFscmVhZHkgYXQgY2FwYWNpdHkuIFNpbmNlIGFkZGluZyBhIG5ldyBpdGVtIHdpbGwgYWx3YXlzICdzdWNjZWVkJyAoZXZlbiBpZlxuICogaXQgc3VjY2VlZHMgYnkganVzdCBpZ25vcmluZyB0aGUgYWRkKSwgaXQgaXMgbmV2ZXIgY29uc2lkZXJlZCBmdWxsIGFuZFxuICogdGhlcmVmb3JlIGEgcHV0IHRvIGEgY2hhbm5lbCBidWZmZXJlZCBieSBhIGRyb3BwaW5nIGJ1ZmZlciBuZXZlciBibG9ja3MuXG4gKlxuICogVGhpcyBidWZmZXIgaXMgcGFzc2VkIHRvIGB7QGxpbmsgbW9kdWxlOmNzcC5jaGFufGNoYW59YCwgZXRjLiB0byBjcmVhdGUgYVxuICogYnVmZmVyZWQgY2hhbm5lbC4gSXQgaXMgbm90IG1lYW50IHRvIGJlIHVzZWQgZGlyZWN0bHkuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqIEBwYXJhbSB7bnVtYmVyfSBzaXplIFRoZSBudW1iZXIgb2YgaXRlbXMgdGhhdCB0aGUgbmV3IGJ1ZmZlciBjYW4gaG9sZCBiZWZvcmVcbiAqICAgICBuZXdlc3QgaXRlbXMgYXJlIGRyb3BwZWQgb24gYWRkLlxuICogQHJldHVybiB7bW9kdWxlOmNzcC5Ecm9wcGluZ0J1ZmZlcn0gQSBuZXcgZHJvcHBpbmcgYnVmZmVyIG9mIHRoZSBzcGVjaWZpZWRcbiAqICAgICBjYXBhY2l0eS5cbiAqL1xuZnVuY3Rpb24gZHJvcHBpbmcoc2l6ZSkge1xuICByZXR1cm4gT2JqZWN0LmNyZWF0ZShudWxsLCB7XG4gICAgLyoqXG4gICAgICogVGhlIHF1ZXVlIGJhY2tpbmcgdGhpcyBidWZmZXIuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7bW9kdWxlOmNzcC9xdWV1ZX5RdWV1ZX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHF1ZXVlOiB7XG4gICAgICB2YWx1ZTogcSgpXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBudW1iZXIgb2YgaXRlbXMgdGhhdCB0aGlzIHF1ZXVlIGNhbiBob2xkIGJlZm9yZSBpdCdzIGNvbnNpZGVyZWQgZnVsbC5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBzaXplOiB7XG4gICAgICB2YWx1ZTogc2l6ZVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBIG1hcmtlciBwcm9wZXJ0eSB1c2VkIHRvIHNob3cgdGhhdCB0aGlzIGlzIGEgZHJvcHBpbmcgYnVmZmVyLlxuICAgICAqXG4gICAgICogQHR5cGUge1N5bWJvbH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIFtCVUZGRVJdOiB7XG4gICAgICB2YWx1ZTogRFJPUFBJTkdcbiAgICB9XG4gIH0pO1xufVxuXG4vKipcbiAqIEEgYnVmZmVyIGltcGxlbWVudGF0aW9uIHRoYXQgZHJvcHMgdGhlIG9sZGVzdCBpdGVtIHdoZW4gYW4gaXRlbSBpcyBhZGRlZCB0byBhXG4gKiBmdWxsIGJ1ZmZlci5cbiAqXG4gKiBUaGlzIGlzIHZlcnkgc2ltaWxhciB0byB7QGxpbmsgbW9kdWxlOmNzcC5Ecm9wcGluZ0J1ZmZlcnxEcm9wcGluZ0J1ZmZlcn07IHRoZVxuICogb25seSBkaWZmZXJlbmNlIGlzIGluIHdoYXQgaGFwcGVucyB3aGVuIGFuIGl0ZW0gaXMgYWRkZWQuIEluIHRoaXMgYnVmZmVyLCB0aGVcbiAqIG5ldyBpdGVtIGlzIGluZGVlZCBhZGRlZCB0byB0aGUgYnVmZmVyLCBidXQgaW4gb3JkZXIgdG8ga2VlcCB0aGUgY291bnQgb2YgdGhlXG4gKiBidWZmZXIgYXQgb3IgYmVsb3cgaXRzIHNpemUsIHRoZSBvbGRlc3QgaXRlbSBpbiB0aGUgYnVmZmVyIGlzIHNpbGVudGx5XG4gKiBkcm9wcGVkLlxuICpcbiAqIEEgYnVmZmVyIG9mIHRoaXMgdHlwZSBleGlzdHMgb25seSBhcyBhbiBvYmplY3QgdGhhdCBjYW4gYmUgcGFzc2VkIHRvIGFcbiAqIGNoYW5uZWwgY3JlYXRpb24gZnVuY3Rpb24gKHN1Y2ggYXMge0BsaW5rIG1vZHVsZTpjc3AuY2hhbnxjaGFufSkgdG8gbWFrZSB0aGF0XG4gKiBjaGFubmVsIGEgYnVmZmVyZWQgY2hhbm5lbC4gSXQgZG9lc24ndCBoYXZlIGFueSBwcm9wZXJ0aWVzIHRoYXQgYXJlIGludGVuZGVkXG4gKiBmb3IgZXh0ZXJuYWwgdXNlLlxuICpcbiAqIEB0eXBlZGVmIFNsaWRpbmdCdWZmZXJcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIGEgc2xpZGluZyBidWZmZXIgb2YgdGhlIHNwZWNpZmllZCBjYXBhY2l0eS5cbiAqXG4gKiBBIHNsaWRpbmcgYnVmZmVyIGRyb3BzIHRoZSBmaXJzdC1hZGRlZCAob2xkZXN0KSBpdGVtIGFscmVhZHkgaW4gdGhlIGJ1ZmZlciBpZlxuICogYSBuZXcgaXRlbSBpcyBhZGRlZCB3aGVuIHRoZSBidWZmZXIgaXMgYWxyZWFkeSBhdCBjYXBhY2l0eS4gU2luY2UgaXQncyBhbHdheXNcbiAqIGNhcGFibGUgb2YgaGF2aW5nIGl0ZW1zIGFkZGVkIHRvIGl0LCBpdCdzIG5ldmVyIGNvbnNpZGVyZWQgZnVsbCwgYW5kXG4gKiB0aGVyZWZvcmUgYSBwdXQgdG8gYSBjaGFubmVsIGJ1ZmZlcmVkIGJ5IGEgc2xpZGluZyBidWZmZXIgbmV2ZXIgYmxvY2tzLlxuICpcbiAqIFRoaXMgYnVmZmVyIGlzIHBhc3NlZCB0byBge0BsaW5rIG1vZHVsZTpjc3AuY2hhbnxjaGFufWAsIGV0Yy4gdG8gY3JlYXRlIGFcbiAqIGJ1ZmZlcmVkIGNoYW5uZWwuIEl0IGlzIG5vdCBtZWFudCB0byBiZSB1c2VkIGRpcmVjdGx5LlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcGFyYW0ge251bWJlcn0gc2l6ZSBUaGUgbnVtYmVyIG9mIGl0ZW1zIHRoYXQgdGhlIG5ldyBidWZmZXIgY2FuIGhvbGQgYmVmb3JlXG4gKiAgICAgb2xkZXN0IGl0ZW1zIGFyZSBkcm9wcGVkIG9uIGFkZC5cbiAqIEByZXR1cm4ge21vZHVsZTpjc3AuU2xpZGluZ0J1ZmZlcn0gQSBuZXcgc2xpZGluZyBidWZmZXIgb2YgdGhlIHNwZWNpZmllZFxuICogICAgIGNhcGFjaXR5LlxuICovXG5mdW5jdGlvbiBzbGlkaW5nKHNpemUpIHtcbiAgcmV0dXJuIE9iamVjdC5jcmVhdGUobnVsbCwge1xuICAgIC8qKlxuICAgICAqIFRoZSBxdWV1ZSBiYWNraW5nIHRoaXMgYnVmZmVyLlxuICAgICAqXG4gICAgICogQHR5cGUge21vZHVsZTpjc3AvcXVldWV+UXVldWV9XG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBxdWV1ZToge1xuICAgICAgdmFsdWU6IHEoKVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgbnVtYmVyIG9mIGl0ZW1zIHRoYXQgdGhpcyBxdWV1ZSBjYW4gaG9sZCBiZWZvcmUgaXQncyBjb25zaWRlcmVkIGZ1bGwuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgc2l6ZToge1xuICAgICAgdmFsdWU6IHNpemVcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQSBtYXJrZXIgcHJvcGVydHkgdXNlZCB0byBzaG93IHRoYXQgdGhpcyBpcyBhIHNsaWRpbmcgYnVmZmVyLlxuICAgICAqXG4gICAgICogQHR5cGUge1N5bWJvbH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIFtCVUZGRVJdOiB7XG4gICAgICB2YWx1ZTogU0xJRElOR1xuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgcXVldWUgdGhhdCBiYWNrcyBhIGJ1ZmZlci5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuQnVmZmVyfSBidWZmZXIgVGhlIGJ1ZmZlciB3aG9zZSBxdWV1ZSBpcyByZXR1cm5lZCBieSB0aGlzXG4gKiAgICAgZnVuY3Rpb24uXG4gKiBAcmV0dXJuIHttb2R1bGU6Y3NwL3F1ZXVlflF1ZXVlfSBUaGUgcXVldWUgdGhhdCBiYWNrcyB0aGUgc3VwcGxpZWQgYnVmZmVyLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gcXVldWUoYnVmZmVyKSB7XG4gIHJldHVybiBidWZmZXIucXVldWU7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgbnVtYmVyIG9mIGl0ZW1zIGEgYnVmZmVyIGNhbiBob2xkIGJlZm9yZSBpdCdzIGZ1bGwuXG4gKlxuICogQHBhcmFtIHttb2R1bGU6Y3NwLkJ1ZmZlcn0gYnVmZmVyIFRoZSBidWZmZXIgd2hvc2Ugc2l6ZSBpcyByZXR1cm5lZCBieSB0aGlzXG4gKiAgICAgZnVuY3Rpb24uXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBzaXplIG9mIHRoZSBzdXBwbGllZCBidWZmZXIuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBzaXplKGJ1ZmZlcikge1xuICByZXR1cm4gYnVmZmVyLnNpemU7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgbnVtYmVyIG9mIGl0ZW1zIGEgYnVmZmVyIGlzIGN1cnJlbnRseSBob2xkaW5nLlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5CdWZmZXJ9IGJ1ZmZlciBUaGUgYnVmZmVyIHdob3NlIGN1cnJlbnQgY291bnQgaXMgcmV0dXJuZWRcbiAqICAgICBieSB0aGlzIGZ1bmN0aW9uLlxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgbnVtYmVyIG9mIGl0ZW1zIHRoYXQgdGhlIHN1cHBsaWVkIGJ1ZmZlciBpcyBob2xkaW5nLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY291bnQoYnVmZmVyKSB7XG4gIHJldHVybiBxQ291bnQoYnVmZmVyLnF1ZXVlKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgYSBidWZmZXIgaXMgYXQgY2FwYWNpdHkuXG4gKlxuICogQHBhcmFtIHttb2R1bGU6Y3NwLkJ1ZmZlcn0gYnVmZmVyIFRoZSBidWZmZXIgd2hvJ3MgYmVpbmcgY2hlY2tlZCB0byBzZWUgaWZcbiAqICAgICBpdCdzIGF0IGNhcGFjaXR5LlxuICogQHJldHVybiB7bnVtYmVyfSBFaXRoZXIgYHRydWVgIGlmIHRoZSBzdXBwbGllZCBidWZmZXIgaXMgZnVsbCBvciBgZmFsc2VgIGlmXG4gKiAgICAgaXQgaXNuJ3QuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBpc0Z1bGwoYnVmZmVyKSB7XG4gIHJldHVybiBidWZmZXJbQlVGRkVSXSA9PT0gRklYRUQgPyBxQ291bnQoYnVmZmVyLnF1ZXVlKSA+PSBidWZmZXIuc2l6ZSA6IGZhbHNlO1xufVxuXG4vKipcbiAqIEFkZHMgb25lIG9yIG1vcmUgaXRlbXMgdG8gYSBidWZmZXIuXG4gKlxuICogQHBhcmFtIHttb2R1bGU6Y3NwLkJ1ZmZlcn0gYnVmZmVyIFRoZSBidWZmZXIgd2hlcmUgdGhlIHN1cHBsaWVkIGl0ZW1zIHdpbGwgYmVcbiAqICAgICBhZGRlZC5cbiAqIEBwYXJhbSB7Li4uKn0gaXRlbXMgVGhlIHZhbHVlcyBiZWluZyBhZGRlZCB0byB0aGUgc3VwcGxpZWQgYnVmZmVyLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gYWRkKGJ1ZmZlciwgLi4uaXRlbXMpIHtcbiAgc3dpdGNoIChidWZmZXJbQlVGRkVSXSkge1xuICAgIGNhc2UgRklYRUQ6XG4gICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgaXRlbXMpIHtcbiAgICAgICAgZW5xdWV1ZShidWZmZXIucXVldWUsIGl0ZW0pO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIERST1BQSU5HOlxuICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGl0ZW1zKSB7XG4gICAgICAgIGlmIChjb3VudChidWZmZXIpIDwgc2l6ZShidWZmZXIpKSB7XG4gICAgICAgICAgZW5xdWV1ZShidWZmZXIucXVldWUsIGl0ZW0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgU0xJRElORzpcbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBpdGVtcykge1xuICAgICAgICBpZiAoY291bnQoYnVmZmVyKSA+PSBzaXplKGJ1ZmZlcikpIHtcbiAgICAgICAgICBkZXF1ZXVlKGJ1ZmZlci5xdWV1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZW5xdWV1ZShidWZmZXIucXVldWUsIGl0ZW0pO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuO1xuICB9XG59XG5cbi8qKlxuICogUmVtb3ZlcyB0aGUgbmV4dCBpdGVtIGZyb20gYSBxdWV1ZSBhbmQgcmV0dXJucyBpdC5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuQnVmZmVyfSBidWZmZXIgVGhlIGJ1ZmZlciBmcm9tIHdoaWNoIGFuIGl0ZW0gaXMgYmVpbmdcbiAqICAgICByZW1vdmVkLlxuICogQHJldHVybiB7Kn0gVGhlIGl0ZW0gdGhhdCB3YXMgcmVtb3ZlZCBmcm9tIHRoZSBzdXBwbGllZCBidWZmZXIuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiByZW1vdmUoYnVmZmVyKSB7XG4gIHJldHVybiBkZXF1ZXVlKGJ1ZmZlci5xdWV1ZSk7XG59XG5cbmV4cG9ydCB7XG4gIGlzQnVmZmVyLFxuICBmaXhlZCxcbiAgZHJvcHBpbmcsXG4gIHNsaWRpbmcsXG4gIHF1ZXVlLFxuICBzaXplLFxuICBjb3VudCxcbiAgaXNGdWxsLFxuICBhZGQsXG4gIHJlbW92ZVxufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG5pbXBvcnQgeyBwcm90b2NvbHMgYXMgcCB9IGZyb20gXCJAY2hhbmtvL2NvcmVcIjtcbmltcG9ydCB7XG4gIHF1ZXVlLFxuICBkZXF1ZXVlLFxuICBFTVBUWSxcbiAgZmlsdGVyLFxuICBjb3VudCBhcyBxQ291bnQsXG4gIGVucXVldWVcbn0gZnJvbSBcIm1vZHVsZXMvcXVldWVcIjtcbmltcG9ydCB7IGlzRnVsbCwgY291bnQsIHJlbW92ZSB9IGZyb20gXCJtb2R1bGVzL2J1ZmZlclwiO1xuaW1wb3J0IHsgZGlzcGF0Y2ggfSBmcm9tIFwibW9kdWxlcy9kaXNwYXRjaGVyXCI7XG5cbi8qKlxuICogVGhlIG1heGltdW0gbnVtYmVyIG9mIGRpcnR5IG9wZXJhdGlvbnMgdGhhdCBjYW4gYmUgcXVldWVkIG9uIGEgY2hhbm5lbCBiZWZvcmVcbiAqIGEgY2xlYW51cCBpcyB0cmlnZ2VyZWQuXG4gKlxuICogQHR5cGUge251bWJlcn1cbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IE1BWF9ESVJUWSA9IDY0O1xuXG4vKipcbiAqIFRoZSBtYXhpbXVtIG51bWJlciBvZiBvcGVydGlvbnMgdGhhdCBjYW4gYmUgcXVldWVkIG9uIGEgY2hhbm5lbCBiZWZvcmUgbmV3XG4gKiBvcGVyYXRpb25zIGFyZSByZWplY3RlZC5cbiAqXG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgTUFYX1FVRVVFRCA9IDEwMjQ7XG5cbi8qKlxuICogKmhlIHZhbHVlIHJldHVybmVkIGZyb20gYSByZWNlaXZlIG9uIGEgY2hhbm5lbCB3aGVuIHRoYXQgY2hhbm5lbCBpcyBjbG9zZWRcbiAqIGFuZCBoYXMgbm8gbW9yZSB2YWx1ZXMgYXZhaWxhYmxlLlxuICpcbiAqIFRoaXMgaXMgYSBzcGVjaWFsIHZhbHVlIHRoYXQgaXMgcmV0dXJuZWQgdW5kZXIgYSBjZXJ0YWluIGNpcmN1bXN0YW5jZSwgbmFtZWx5XG4gKiB3aGVuIGEgcmVjZWl2ZSBpcyBwZXJmb3JtZWQgb24gYSBjbG9zZWQgY2hhbm5lbC4gQmVjYXVzZSBvZiB0aGF0LCBpdCBjYW5ub3RcbiAqIGJlIHJldHVybmVkIGZyb20gYSByZWNlaXZlIG9uIGFuIG9wZW4gY2hhbm5lbC4gRm9yIHRoYXQgcmVhc29uLCBgQ0xPU0VEYCBpc1xuICogdGhlIG9ubHkgdmFsdWUgdGhhdCBjYW5ub3QgYmUgc2VudCBvbnRvIGEgY2hhbm5lbCAmbWRhc2g7IGl0IHdvdWxkIGJlXG4gKiBpbXBvc3NpYmxlIHRvIGRpc3Rpbmd1aXNoIGJldHdlZW4gYSBsZWdpdGltYXRlIHZhbHVlIG9mIGBDTE9TRURgIGFuZCBhblxuICogYWN0dWFsIGNsb3NlZCBjaGFubmVsLlxuICpcbiAqIEB0eXBlIHtTeW1ib2x9XG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICovXG5jb25zdCBDTE9TRUQgPSBTeW1ib2woXCJDTE9TRURcIik7XG5cbi8qKlxuICogQSB1bmlxdWUgdmFsdWUgdXNlZCB0byBpbmRpY2F0ZSB0aGF0IGFuIG9iamVjdCBpcyBhIGJveC5cbiAqXG4gKiBAdHlwZSB7U3ltYm9sfVxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgQk9YID0gU3ltYm9sKFwiQk9YXCIpO1xuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhbiBvYmplY3QgaXMgYSBib3guXG4gKlxuICogQHBhcmFtIHsqfSBvYmogQSB2YWx1ZSB0byBjaGVjayBmb3IgYm94aW5lc3MuXG4gKiBAcmV0dXJuIEVpdGhlciBgdHJ1ZWAgaWYgdGhlIHZhbHVlIGlzIGEgYm94IG9yIGBmYWxzZWAgaWYgaXQgaXNuJ3QuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBpc0JveChvYmopIHtcbiAgcmV0dXJuICEhb2JqPy5bQk9YXTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgYW4gb2JqZWN0IGlzIHJlZHVjZWQuIFRoaXMgaXMgZG9uZSB1c2luZyB0aGUgdHJhbnNkdWNlclxuICogcHJvdG9jb2w7IGFuIG9iamVjdCB3aXRoIHRoZSBwcm90b2NvbC1zcGVjaWZpZWQgYHJlZHVjZWRgIHByb3BlcnR5IGlzIGFzc3VtZWRcbiAqIHRvIGJlIHJlZHVjZWQuIElmIGEgcmVzdWx0IG9mIGEgdHJhbnNmb3JtYXRpb24gaXMgcmVkdWNlZCwgaXQgbWVhbnMgdGhhdCB0aGVcbiAqIHRyYW5zZm9ybWF0aW9uIGlzIGNvbXBsZXRlIGFuZCB0aGUgY2hhbm5lbCBzaG91bGQgYmUgY2xvc2VkLlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIGJlaW5nIGNoZWNrZWQgZm9yIHJlZHVjdGlvbi5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IEVpdGhlciBgdHJ1ZWAgaWYgdGhlIHZhbHVlIGhhcyBiZWVuIHJlZHVjZWQsIG9yIGBmYWxzZWAgaWZcbiAqICAgICBpdCBoYXMgbm90IGJlZW4uXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBpc1JlZHVjZWQodmFsdWUpIHtcbiAgcmV0dXJuICEhdmFsdWU/LltwLnJlZHVjZWRdO1xufVxuXG4vKipcbiAqIEEgd3JhcHBlciBhcm91bmQgYSB2YWx1ZS4gVGhpcyBpcyBwcmltYXJpbHkgdXNlZCBhcyBhIG1hcmtlcjsgYSBwdXQgb3IgdGFrZVxuICogcmV0dXJuaW5nIGEgQm94IGluZGljYXRlcyB0aGF0IHRoZSBwdXQgb3IgdGFrZSBoYXMgcmV0dXJuZWQgYW4gaW1tZWRpYXRlXG4gKiB2YWx1ZSwgd2hpbGUgcmV0dXJuaW5nIGBudWxsYCBpbmRpY2F0ZXMgdGhhdCB0aGUgb3BlcmF0aW9uIGhhcyBiZWVuIHF1ZXVlZC5cbiAqXG4gKiBAdHlwZWRlZiBCb3hcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwL2NoYW5uZWxcbiAqIEBwcm9wZXJ0eSB7Kn0gdmFsdWUgVGhlIHZhbHVlIGJlaW5nIHdyYXBwZWQgYnkgdGhlIGJveC5cbiAqIEBwcml2YXRlXG4gKi9cblxuLyoqXG4gKiBBIHdyYXBwZXIgb2JqZWN0IGZvciBhIHZhbHVlLiBUaGlzIGlzIHVzZWQgYWxtb3N0IGVudGlyZWx5IGFzIGEgbWFya2VyXG4gKiBpbnRlcmZhY2UsIHRob3VnaCB0aGUgZmFjdCB0aGF0IGl0IGJlY29tZXMgYSBwYXJhbWV0ZXIgdGhhdCdzIHBhc3NlZCBieVxuICogcmVmZXJlbmNlIHJhdGhlciB0aGFuIHZhbHVlIGlzIGFsc28gaW1wb3J0YW50IGluIGEgY291cGxlIHBsYWNlcy4gSWYgYVxuICogY2hhbm5lbCBvcGVyYXRpb24gKHB1dCBvciB0YWtlKSByZXR1cm5zIGEgQm94LCBpdCBtZWFucyB0aGF0IGFuIGFjdHVhbCB2YWx1ZVxuICogd2FzIHJldHVybmVkLiBBIG5vbi1Cb3ggKHdoaWNoIGFsd2F5cyBoYXBwZW5zIHRvIGJlIGBudWxsYCkgbWVhbnMgdGhhdCB0aGVcbiAqIG9wZXJhdGlvbiBtdXN0IGJsb2NrLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwL2NoYW5uZWxcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGJveC5cbiAqIEByZXR1cm4ge21vZHVsZTpjc3AvY2hhbm5lbC5Cb3h9IFRoZSBib3hlZCB2YWx1ZS5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGJveCh2YWx1ZSkge1xuICByZXR1cm4gT2JqZWN0LmNyZWF0ZShudWxsLCB7XG4gICAgdmFsdWU6IHtcbiAgICAgIHZhbHVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9LFxuICAgIFtCT1hdOiB7XG4gICAgICB2YWx1ZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxuICogQSB3cmFwcGVyIGFyb3VuZCBhIHZhbHVlLiBUaGlzIGlzIG11Y2ggbGlrZVxuICoge0BsaW5rIG1vZHVsZTpjc3AvY2hhbm5lbC5Cb3h8Qm94fSBleGNlcHQgdGhhdCBpdCBhbHNvIGNhcnJpZXMgYSBoYW5kbGVyIHRvXG4gKiBiZSB1c2VkIHdoZW4gYSBzZW50IHZhbHVlIGlzIHJlY2VpdmVkLiBJdCBpcyBzcGVjaWZpY2FsbHkgZm9yIHF1ZXVlaW5nIHNlbmRzLlxuICpcbiAqIEB0eXBlZGVmIFNlbmRCb3hcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwL2NoYW5uZWxcbiAqIEBwcm9wZXJ0eSB7Kn0gdmFsdWUgVGhlIHZhbHVlIGJlaW5nIHdyYXBwZWQgYnkgdGhpcyBib3guXG4gKiBAcHJvcGVydHkge21vZHVsZTpjc3AvY2hhbm5lbC5IYW5kbGVyfSBoYW5kbGVyIFRoZSBoYW5kbGVyIHVzZWQgdG8gcHJvY2VzcyBhXG4gKiAgICAgc2VuZCByZXF1ZXN0IGZvciB0aGUgdmFsdWUuXG4gKiBAcHJpdmF0ZVxuICovXG5cbi8qKlxuICogQSBib3ggdXNlZCB0byB3cmFwIGEgdmFsdWUgYmVpbmcgc2VudCBvbnRvIGEgY2hhbm5lbC4gVGhpcyBpcyBkaWZmZXJlbnQgZnJvbVxuICogYSByZWd1bGFyIGJveCBpbiB0aGF0IHRoZSBzZW5kIGhhbmRsZXIgaXMgYWxzbyBpbmNsdWRlZC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcC9jaGFubmVsXG4gKiBAcGFyYW0gIHtPYmplY3R9IGhhbmRsZXIgVGhlIGhhbmRsZXIgdXNlZCB0byBwcm9jZXNzIGEgc2VuZCByZXF1ZXN0IGZvciB0aGVcbiAqICAgICB2YWx1ZS5cbiAqIEBwYXJhbSAgeyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBib3guXG4gKiBAcmV0dXJuIHttb2R1bGU6Y3NwL2NoYW5uZWwuU2VuZEJveH0gVGhlIGJveGVkIHZhbHVlLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gc2VuZEJveCh2YWx1ZSwgaGFuZGxlcikge1xuICByZXR1cm4gT2JqZWN0LmNyZWF0ZShudWxsLCB7XG4gICAgdmFsdWU6IHtcbiAgICAgIHZhbHVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9LFxuICAgIGhhbmRsZXI6IHtcbiAgICAgIHZhbHVlOiBoYW5kbGVyXG4gICAgfSxcbiAgICBbQk9YXToge1xuICAgICAgdmFsdWU6IHRydWVcbiAgICB9XG4gIH0pO1xufVxuXG4vKipcbiAqIEEgY2hhbm5lbCwgdXNlZCBieSBwcm9jZXNzZXMgdG8gY29tbXVuaWNhdGUgd2l0aCBvbmUgYW5vdGhlci5cbiAqXG4gKiBGb3IgZWFjaCBvcGVyYXRpb24sIHRoZSBjaGFubmVsIGZpcnN0IHRlc3RzIHRvIHNlZSBpZiB0aGVyZSdzIGEgY29ycmVzcG9uZGluZ1xuICogb3BlcmF0aW9uIGFscmVhZHkgcXVldWVkIChpLmUuLCBpZiB3ZSdyZSBkb2luZyBhIGBzZW5kYCB0aGF0IHRoZXJlJ3MgYSBxdWV1ZWRcbiAqIGByZWN2YCBhbmQgdmljZSB2ZXJzYSkuIElmIHRoZXJlIGlzLCB0aGF0IGNvcnJlc3BvbmRpbmcgb3BlcmF0aW9uIGlzXG4gKiB1bmJsb2NrZWQgYW5kIGJvdGggb3BlcmF0aW9ucyBjb21wbGV0ZS4gSWYgbm90LCB0aGUgb3BlcmF0aW9uIGlzIHF1ZXVlZCB0b1xuICogd2FpdCBmb3IgYSBjb3JyZXNwb25kaW5nIG9wZXJhdGlvbi4gVGhlIHByb2Nlc3Mgb3IgdGhhdCBjcmVhdGVkIHRoZSBvcGVyYXRpb25cbiAqIHRoZW4gYmxvY2tzLlxuICpcbiAqIFRoZSBjaGFubmVsIGNhbiBiZSBiYWNrZWQgYnkgYSBidWZmZXIsIHRob3VnaCBpdCBpcyBub3QgYnkgZGVmYXVsdC4gSWYgYVxuICogYnVmZmVyIGlzIGluIHBsYWNlLCBhbmQgdGhhdCBidWZmZXIgaXMgbm90IGZ1bGwsIHRoZW4gdGhlIHByb2Nlc3MgdGhhdFxuICogY3JlYXRlZCBhbiBvcGVyYXRpb24gdGhhdCBoYXMgdG8gYmUgcXVldWVkIGlzICpub3QqIGJsb2NrZWQuXG4gKlxuICogVGhpcyBjaGFubmVsIG9iamVjdCBzdXBwb3J0cyB0cmFuc2Zvcm1hdGlvbnMsIGFzc3VtaW5nIHRoYXQgdGhleSBmb2xsb3cgdGhlXG4gKiBwcm90b2NvbCBjcmVhdGVkIGJ5IGEgZmV3IHRyYW5zZHVjZXIgbGlicmFyeSBhdXRob3JzIHRvIGFsbG93IHRoZW0gdG9cbiAqIGludGVyb3BlcmF0ZS4gVGhlIHN1cHBvcnQgbXVzdCBiZSBleHBsaWNpdGx5IGNyZWF0ZWQgYmVjYXVzZSB0aGUgbm9ybWFsXG4gKiBtZXRob2Qgb2YgbWFraW5nIGFuIG9iamVjdCBzdXBwb3J0IHRyYW5zZm9ybWF0aW9ucyB3b24ndCB3b3JrIGhlcmUuIFRoaXNcbiAqIG1ldGhvZCBpcyB0byBjcmVhdGUgYSBuZXcgb2JqZWN0IGFuZCBhZGQgdGhlIHRyYW5zZm9ybWVkIHZhbHVlcyB0byBpdCAtIGJ1dFxuICogZm9yIGEgY2hhbm5lbCwgd2UgbmVlZCB0byByZXBsYWNlIHRoZSB2YWx1ZXMgb24gdGhlIGNoYW5uZWwgd2l0aCB0aGVpclxuICogdHJhbnNmb3JtZWQgdmFsdWVzLCBpbiB0aGUgc2FtZSBvcmRlciBldmVuIGluIGEgbXVsdGktcHJvY2VzcyBlbnZpcm9ubWVudC5cbiAqIFRodXMgdHJhbnNmb3JtYXRpb25zIGhhcHBlbiBpbiBwbGFjZS5cbiAqXG4gKiBUcmFuc2Zvcm1hdGlvbnMgYXJlIGFwcGxpZWQgYmVmb3JlIHRoZSB2YWx1ZSBpcyBxdWV1ZWQsIHNvIGV2ZW4gaWYgdGhlcmUgaXMgYVxuICogY29ycmVzcG9uZGluZyBvcGVyYXRpb24gcmVhZHkgdG8gZ28sIHRoZSB0cmFuc2Zvcm1hdGlvbiBzdGlsbCBoYXBwZW5zLiBBbHNvLFxuICogdHJhbnNmb3JtYXRpb25zIHJlcXVpcmUgdGhhdCB0aGUgY2hhbm5lbCBiZSBidWZmZXJlZCAodGhpcyBidWZmZXIgaXMgd2hhdCBpc1xuICogc2VudCB0byB0aGUgdHJhbnNmb3JtZXIncyByZWR1Y3Rpb24gc3RlcCBmdW5jdGlvbik7IHRyeWluZyB0byBjcmVhdGUgYVxuICogY2hhbm5lbCB3aXRoIGEgdHJhbnNmb3JtZXIgYnV0IHdpdGhvdXQgYSBidWZmZXIgd2lsbCByZXN1bHQgaW4gYW4gZXJyb3IgYmVpbmdcbiAqIHRocm93bi5cbiAqXG4gKiBUaGlzIGlzIHRoZSBvYmplY3QgdGhhdCBpcyByZXR1cm5lZCBmcm9tIGEgY2FsbCB0b1xuICogYHtAbGluayBtb2R1bGU6Y3NwLmNoYW58Y2hhbn1gLiBIb3dldmVyLCB0aGlzIG9iamVjdCBpcyBpbnRlbmRlZCB0byBiZSB1c2VkXG4gKiBhcyBhIHZhbHVlIHRvIHBhc3MgdG8gY2hhbm5lbCBvcGVyYXRpb24gZnVuY3Rpb25zOyBpdCBkb2Vzbid0IGhhdmUgYW55XG4gKiBwcm9wZXJ0aWVzIG9mIGludGVyZXN0IHRvIGFuIGVuZCB1c2VyLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAdHlwZWRlZiBDaGFubmVsXG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIGEgY2hhbm5lbC4gVGhpcyBpcyBhIGxvdy1sZXZlbCBmdW5jdGlvbjtcbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC5jaGFufGNoYW59YCBwZXJmb3JtcyBzb21lIG5lY2Vzc2FyeSBtYW5pcHVsYXRpb25zIG9uXG4gKiBhcmd1bWVudHMgYmVmb3JlIHVzaW5nIHRoaXMgZnVuY3Rpb24gdG8gcGVyZm9ybSB0aGUgYWN0dWFsIGNyZWF0aW9uLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwL2NoYW5uZWxcbiAqIEBwYXJhbSB7bnVsbCB8IG1vZHVsZTpjc3AuQnVmZmVyfSBidWZmZXIgQW4gb3B0aW9uYWwgYnVmZmVyIHRoYXQsIGlmIHByZXNlbnQsXG4gKiAgICAgaXMgdXNlZCB0byBjcmVhdGUgYSBidWZmZXJlZCBjaGFubmVsLiBJZiB0aGlzIGlzIGBudWxsYCwgYW4gdW5idWZmZXJlZFxuICogICAgIGNoYW5uZWwgaXMgY3JlYXRlZC5cbiAqIEBwYXJhbSB7bW9kdWxlOmNvcmUuVHJhbnNkdWNlckZ1bmN0aW9ufSB4Zm9ybSBUaGUgdHJhbnNkdWNlciB1c2VkIHRvXG4gKiAgICAgdHJhbnNmb3JtIHZhbHVlcyBzZW50IHRvIHRoZSBjaGFubmVsLiBJZiBubyB0cmFuc2Zvcm1hdGlvbnMgYXJlXG4gKiAgICAgbmVjZXNzYXJ5LCBhIHBhc3N0aHJvdWdoIHRyYW5zZHVjZXIgc2hvdWxkIGJlIHByb3ZpZGVkLlxuICogQHBhcmFtIHtib29sZWFufSBpc1RpbWVkIEluZGljYXRlcyB3aGV0aGVyIHRoZSBjaGFubmVsIGlzIGEgdGltZWQgY2hhbm5lbC5cbiAqICAgICBUaGUgdGltaW5pbmcgbWVjaGFuaXNtIGlzIGhhbmRsZWQgb3V0c2lkZSB0aGUgY2hhbm5lbCwgYnV0IHRoaXMgcHJvcGVydHlcbiAqICAgICBpcyBwcm92aWRlZCB0byBiZSBhYmxlIHRvIHF1ZXJ5IHdoZXRoZXIgdGhhdCdzIHRoZSBjYXNlLlxuICogQHBhcmFtIHtudW1iZXJ9IG1heERpcnR5PTY0IFRoZSBtYXhpbXVtIG51bWJlciBvZiBkaXJ0eSBvcGVyYXRpb25zIHRvIGFsbG93XG4gKiAgICAgYmVmb3JlIHRoZXkncmUgcHVyZ2VkLlxuICogQHBhcmFtIHtudW1iZXJ9IG1heFF1ZXVlZD0xMDI0IFRoZSBtYXhpbXVtIG51bWJlciBvZiBvcGVyYXRpb25zIHRoYXQgY2FuIGJlXG4gKiAgICAgcXVldWVkIGJlZm9yZSBuZXcgb25lcyBhcmUgcmVqZWN0ZWQuXG4gKiBAcmV0dXJuIHttb2R1bGU6Y3NwLkNoYW5uZWx9IEEgbmV3IGNoYW5uZWwuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjaGFubmVsKFxuICBidWZmZXIsXG4gIHhmb3JtLFxuICBpc1RpbWVkID0gZmFsc2UsXG4gIG1heERpcnR5ID0gTUFYX0RJUlRZLFxuICBtYXhRdWV1ZWQgPSBNQVhfUVVFVUVEXG4pIHtcbiAgcmV0dXJuIE9iamVjdC5jcmVhdGUobnVsbCwge1xuICAgIGJ1ZmZlcjoge1xuICAgICAgdmFsdWU6IGJ1ZmZlclxuICAgIH0sXG4gICAgeGZvcm06IHtcbiAgICAgIHZhbHVlOiB4Zm9ybVxuICAgIH0sXG4gICAgbWF4RGlydHk6IHtcbiAgICAgIHZhbHVlOiBtYXhEaXJ0eVxuICAgIH0sXG4gICAgbWF4UXVldWVkOiB7XG4gICAgICB2YWx1ZTogbWF4UXVldWVkXG4gICAgfSxcbiAgICByZWN2czoge1xuICAgICAgdmFsdWU6IHF1ZXVlKClcbiAgICB9LFxuICAgIHNlbmRzOiB7XG4gICAgICB2YWx1ZTogcXVldWUoKVxuICAgIH0sXG4gICAgZGlydHlSZWN2czoge1xuICAgICAgdmFsdWU6IDAsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0sXG4gICAgZGlydHlTZW5kczoge1xuICAgICAgdmFsdWU6IDAsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0sXG4gICAgY2xvc2VkOiB7XG4gICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0sXG4gICAgaXNCdWZmZXJlZDoge1xuICAgICAgdmFsdWU6ICEhYnVmZmVyXG4gICAgfSxcbiAgICBpc1RpbWVkOiB7XG4gICAgICB2YWx1ZTogaXNUaW1lZFxuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxuICogU2VuZHMgYSB2YWx1ZSB0byBhIGNoYW5uZWwuIFRoZSBzcGVjaWZpZWQgaGFuZGxlciBpcyB1c2VkIHRvIGNvbnRyb2wgd2hldGhlclxuICogdGhlIHNlbmQgaXMgYWN0aXZlIGFuZCB3aGF0IHRvIGRvIGFmdGVyIHRoZSBzZW5kIGNvbXBsZXRlcy4gQSBzZW5kIGNhbiBiZWNvbWVcbiAqIGluYWN0aXZlIGlmIGl0IHdhcyBwYXJ0IG9mIGFuIGBzZWxlY3RgIGNhbGwgYW5kIHNvbWUgb3RoZXIgb3BlcmF0aW9uXG4gKiBzcGVjaWZpZWQgaW4gdGhhdCBjYWxsIGhhcyBhbHJlYWR5IGNvbXBsZXRlZC5cbiAqXG4gKiBUaGlzIHZhbHVlIGlzIGdpdmVuIHRvIGEgcmVjZWl2ZSBoYW5kbGVyIGltbWVkaWF0ZWx5IGlmIHRoZXJlJ3Mgb25lIHdhaXRpbmcuXG4gKiBPdGhlcndpc2UgdGhlIHZhbHVlIGFuZCBoYW5kbGVyIGFyZSBxdWV1ZWQgdG9nZXRoZXIgdG8gd2FpdCBmb3IgYSByZWNlaXZlLlxuICpcbiAqIFRoaXMgaXMgYSBsb3ctbGV2ZWwgb3BlcmF0aW9uIHRoYXQncyBwcm92aWRlZCBhcyBhIHBhcnQgb2YgdGhlIGNoYW5uZWxcbiAqIGltcGxlbWVudGF0aW9uIHNvIHRoYXQgb3RoZXIgb3BlcmF0aW9ucyBmdW5jdGlvbnMgY2FuIHByb3Blcmx5IGFwcGx5XG4gKiBoYW5kbGVycy4gSXQgaXMgbm90IG1lYW50IGZvciBnZW5lcmFsIHVzZS4gVXNlIHRob3NlIG90aGVyIG9wZXJhdGlvbnNcbiAqIGZ1bmN0aW9ucyBpbnN0ZWFkLlxuICpcbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcC9jaGFubmVsXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuQ2hhbm5lbH0gY2hhbm5lbCBUaGUgY2hhbm5lbCB0aGF0IHRoZSB2YWx1ZSBpcyBiZWluZyBzZW50XG4gKiAgICAgdG8uXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBiZSBwdXQgb250byB0aGUgY2hhbm5lbC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaGFuZGxlci5hY3RpdmUgRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBzZW5kIGlzIHN0aWxsIGFjdGl2ZVxuICogICAgIGFuZCBzaG91bGQgc3RpbGwgYmUgc2VydmljZWQuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBoYW5kbGVyLmNvbW1pdCBEZWFjdGl2YXRlcyB0aGUgc2VuZCAoc28gaXQgY2FuJ3QgYmVcbiAqICAgICBzZXJ2aWNlZCBhIHNlY29uZCB0aW1lKSBhbmQgcmV0dXJucyB0aGUgY2FsbGJhY2sgdG8gYmUgZmlyZWQgd2hlbiB0aGVcbiAqICAgICBzZW5kIGNvbXBsZXRlcy5cbiAqIEByZXR1cm4ge21vZHVsZTpjc3AvY2hhbm5lbC5Cb3h8bnVsbH0gT25lIG9mIHRocmVlIHZhbHVlcy4gQSBib3hlZCBgdHJ1ZWAgaXNcbiAqICAgICByZXR1cm5lZCBpZiB0aGUgc2VuZCB3YXMgaW1tZWRpYXRlbHkgY29uc3VtZWQgYnkgYSBwZW5kaW5nIHJlY2VpdmUuIEFcbiAqICAgICBib3hlZCBgZmFsc2VgIGlzIHJldHVybmVkIGlmIHRoZSBzZW5kIHdhcyBwZXJmb3JtZWQgb24gYSBjaGFubmVsIHRoYXQgd2FzXG4gKiAgICAgYWxyZWFkeSBjbG9zZWQgYnkgdGhlIHRpbWUgdGhlIHNlbmQgdG9vayBwbGFjZS4gYG51bGxgIGlzIHJldHVybmVkIGlmIHRoZVxuICogICAgIHNlbmQgd2FzIHF1ZXVlZCBwZW5kaW5nIGEgY29ycmVzcG9uZGluZyByZWNlaXZlLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaGFuZGxlU2VuZChjaGFubmVsLCB2YWx1ZSwgaGFuZGxlcikge1xuICBpZiAodmFsdWUgPT09IENMT1NFRCkge1xuICAgIHRocm93IEVycm9yKFwiQ2Fubm90IHNlbmQgQ0xPU0VEIHRvIGEgY2hhbm5lbFwiKTtcbiAgfVxuXG4gIGlmIChjaGFubmVsLmNsb3NlZCkge1xuICAgIGhhbmRsZXIuY29tbWl0KCk7XG4gICAgcmV0dXJuIGJveChmYWxzZSk7XG4gIH1cblxuICBsZXQgcmVjZWl2ZXIsIGNhbGxiYWNrO1xuXG4gIC8vIFB1c2ggdGhlIGluY29taW5nIHZhbHVlIHRocm91Z2ggdGhlIGJ1ZmZlciwgZXZlbiBpZiB0aGVyZSdzIGFscmVhZHkgYVxuICAvLyByZWNlaXZlciB3YWl0aW5nIGZvciB0aGUgdmFsdWUuIFRoaXMgaXMgdG8gbWFrZSBzdXJlIHRoYXQgdGhlIHRyYW5zZHVjZXJcbiAgLy8gc3RlcCBmdW5jdGlvbiBoYXMgYSBjaGFuY2UgdG8gYWN0IG9uIHRoZSB2YWx1ZSBmaXJzdCwgd2hpY2ggY291bGQgY2hhbmdlXG4gIC8vIHRoZSB2YWx1ZSBvciBtYWtlIGl0IGFsdG9nZXRoZXIgdW5hdmFpbGFibGUuXG4gIC8vXG4gIC8vIElmIHRoZSBjaGFubmVsIGlzIHVuYnVmZmVyZWQgdGhpcyBwcm9jZXNzIGlzIHNraXBwZWQgKHRoZXJlIGNhbid0IGJlIGFcbiAgLy8gdHJhbnNkdWNlciBvbiBhbiB1bmJ1ZmZlcmVkIGNoYW5uZWwgYW55d2F5KS4gSWYgdGhlIGJ1ZmZlciBpcyBmdWxsLCB0aGVcbiAgLy8gdHJhbnNkdWNlcidzIHdvcmsgaXMgZGVmZXJyZWQgdW50aWwgbGF0ZXIgd2hlbiB0aGUgYnVmZmVyIGlzIG5vdCBmdWxsLlxuICBpZiAoY2hhbm5lbC5idWZmZXIgJiYgIWlzRnVsbChjaGFubmVsLmJ1ZmZlcikpIHtcbiAgICBoYW5kbGVyLmNvbW1pdCgpO1xuICAgIGNvbnN0IGRvbmUgPSBpc1JlZHVjZWQoY2hhbm5lbC54Zm9ybVtwLnN0ZXBdKGNoYW5uZWwuYnVmZmVyLCB2YWx1ZSkpO1xuXG4gICAgZm9yICg7Oykge1xuICAgICAgaWYgKGNvdW50KGNoYW5uZWwuYnVmZmVyKSA9PT0gMCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHJlY2VpdmVyID0gZGVxdWV1ZShjaGFubmVsLnJlY3ZzKTtcbiAgICAgIGlmIChyZWNlaXZlciA9PT0gRU1QVFkpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBpZiAocmVjZWl2ZXIuYWN0aXZlKSB7XG4gICAgICAgIGNhbGxiYWNrID0gcmVjZWl2ZXIuY29tbWl0KCk7XG4gICAgICAgIGNvbnN0IHZhbCA9IHJlbW92ZShjaGFubmVsLmJ1ZmZlcik7XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgIGRpc3BhdGNoKCgpID0+IGNhbGxiYWNrKHZhbCkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGRvbmUpIHtcbiAgICAgIGNsb3NlKGNoYW5uZWwpO1xuICAgIH1cbiAgICByZXR1cm4gYm94KHRydWUpO1xuICB9XG5cbiAgLy8gVGhpcyBsb29wIGhhcHBlbnMgaWYgdGhlIGNoYW5uZWwgaXMgdW5idWZmZXJlZCBhbmQgdGhlcmUgaXMgYXQgbGVhc3Qgb25lXG4gIC8vIHBlbmRpbmcgcmVjZWl2ZS4gKEJ1ZmZlcmVkIGNoYW5uZWxzIGJyZWFrIG91dCBvZiB0aGlzIGxvb3AgaW1tZWRpYXRlbHksXG4gIC8vIGJlY2F1c2UgaW4gb3JkZXIgZm9yIGEgYnVmZmVyZWQgY2hhbm5lbCB0byByZWFjaCB0aGlzIHBvaW50LCBpdHMgYnVmZmVyXG4gIC8vIG11c3QgaGF2ZSBiZWVuIGZ1bGwuIElmIHRoZSBidWZmZXIgaXMgZnVsbCwgdGhhdCBtZWFucyB0aGVyZSBhcmUgbm8gcGVuZGluZ1xuICAvLyByZWNlaXZlcyBhbmQgdGhlIGZpcnN0IG9uZSByZWFkIHdpbGwgYmUgRU1QVFkuKSBJdCBwcm9jZXNzZXMgdGhlIG5leHRcbiAgLy8gcGVuZGluZyByZWNlaXZlIGltbWVkaWF0ZWx5LlxuICBmb3IgKDs7KSB7XG4gICAgcmVjZWl2ZXIgPSBkZXF1ZXVlKGNoYW5uZWwucmVjdnMpO1xuICAgIGlmIChyZWNlaXZlciA9PT0gRU1QVFkpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBpZiAocmVjZWl2ZXIuYWN0aXZlKSB7XG4gICAgICBoYW5kbGVyLmNvbW1pdCgpO1xuICAgICAgY2FsbGJhY2sgPSByZWNlaXZlci5jb21taXQoKTtcbiAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICBkaXNwYXRjaCgoKSA9PiBjYWxsYmFjayh2YWx1ZSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGJveCh0cnVlKTtcbiAgICB9XG4gIH1cblxuICAvLyBJZiB0aGVyZSBhcmUgbm8gcGVuZGluZyByZWNlaXZlcyBvbiBhbiB1bmJ1ZmZlcmVkIGNoYW5uZWwsIG9yIG9uIGEgYnVmZmVyZWRcbiAgLy8gY2hhbm5lbCB3aXRoIGEgZnVsbCBidWZmZXIsIHdlIHF1ZXVlIHRoZSBzZW5kIHRvIHRsZXQgaXQgd2FpdCBmb3IgYSByZWNlaXZlXG4gIC8vIHRvIGJlY29tZSBhdmFpbGFibGUuIFNlbmRzIHdob3NlIGhhbmRsZXJzIGhhdmUgZ29uZSBpbmFjdGl2ZSAod2hpY2ggaGFwcGVuc1xuICAvLyBpZiB0aGV5IHdlcmUgcHJvY2Vzc2VkIGFzIHBhcnQgb2YgYSBgc2VsZWN0YCBjYWxsKSBhcmUgcGVyaW9kaWNhbGx5IHB1cmdlZC5cbiAgaWYgKGNoYW5uZWwuZGlydHlTZW5kcyA+IGNoYW5uZWwubWF4RGlydHkpIHtcbiAgICBmaWx0ZXIoY2hhbm5lbC5zZW5kcywgc2VuZGVyID0+IHNlbmRlci5oYW5kbGVyLmFjdGl2ZSk7XG4gICAgY2hhbm5lbC5kaXJ0eVNlbmRzID0gMDtcbiAgfSBlbHNlIHtcbiAgICBjaGFubmVsLmRpcnR5U2VuZHMrKztcbiAgfVxuXG4gIGlmIChxQ291bnQoY2hhbm5lbC5zZW5kcykgPj0gY2hhbm5lbC5tYXhRdWV1ZWQpIHtcbiAgICB0aHJvdyBFcnJvcihcbiAgICAgIGBObyBtb3JlIHRoYW4gJHtjaGFubmVsLm1heFF1ZXVlZH0gcGVuZGluZyBzZW5kcyBhcmUgYWxsb3dlZCBvbiBhIHNpbmdsZSBjaGFubmVsYFxuICAgICk7XG4gIH1cbiAgZW5xdWV1ZShjaGFubmVsLnNlbmRzLCBzZW5kQm94KHZhbHVlLCBoYW5kbGVyKSk7XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8qKlxuICogUmVjZWl2ZXMgYSB2YWx1ZSBmcm9tIGEgY2hhbm5lbC4gVGhlIHNwZWNpZmllZCBoYW5kbGVyIGlzIHVzZWQgdG8gY29udHJvbFxuICogd2hldGhlciB0aGUgcmVjZWl2ZSBpcyBhY3RpdmUgYW5kIHdoYXQgdG8gZG8gYWZ0ZXIgdGhlIHJlY2VpdmUgY29tcGxldGVzLiBBXG4gKiByZWNlaXZlIGNhbiBiZWNvbWUgaW5hY3RpdmUgaWYgaXQgd2FzIHBhcnQgb2YgYW4gYHNlbGVjdGAgY2FsbCBhbmQgc29tZSBvdGhlclxuICogb3BlcmF0aW9uIHNwZWNpZmllZCBpbiB0aGF0IGNhbGwgaGFzIGFscmVhZHkgY29tcGxldGVkLlxuICpcbiAqIFRoaXMgdmFsdWUgaXMgZ2l2ZW4gdG8gYSBzZW5kIGhhbmRsZXIgaW1tZWRpYXRlbHkgaWYgdGhlcmUncyBvbmUgd2FpdGluZy5cbiAqIE90aGVyd2lzZSB0aGUgdmFsdWUgYW5kIGhhbmRsZXIgYXJlIHF1ZXVlZCB0b2dldGhlciB0byB3YWl0IGZvciBhIHNlbmQuXG4gKlxuICogVGhpcyBpcyBhIGxvdy1sZXZlbCBvcGVyYXRpb24gdGhhdCdzIHByb3ZpZGVkIGFzIGEgcGFydCBvZiB0aGUgY2hhbm5lbFxuICogaW1wbGVtZW50YXRpb24gc28gdGhhdCBvdGhlciBvcGVyYXRpb25zIGZ1bmN0aW9ucyBjYW4gcHJvcGVybHkgYXBwbHlcbiAqIGhhbmRsZXJzLiBJdCBpcyBub3QgbWVhbnQgZm9yIGdlbmVyYWwgdXNlLiBVc2UgdGhvc2Ugb3RoZXIgb3BlcmF0aW9uc1xuICogZnVuY3Rpb25zIGluc3RlYWQuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3AvY2hhbm5lbFxuICogQHBhcmFtIHttb2R1bGU6Y3NwLkNoYW5uZWx9IGNoYW5uZWwgVGhlIGNoYW5uZWwgdGhhdCB0aGUgdmFsdWUgaXMgYmVpbmdcbiAqICAgICByZWNlaXZlZCBmcm9tLlxuICogQHBhcmFtIHtib29sZWFufSBoYW5kbGVyLmFjdGl2ZSBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHJlY2VpdmUgaXMgc3RpbGxcbiAqICAgICBhY3RpdmUgYW5kIHNob3VsZCBzdGlsbCBiZSBzZXJ2aWNlZC5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGhhbmRsZXIuY29tbWl0IERlYWN0aXZhdGVzIHRoZSByZWNlaXZlIChzbyBpdCBjYW4ndCBiZVxuICogICAgIHNlcnZpY2VkIGEgc2Vjb25kIHRpbWUpIGFuZCByZXR1cm5zIHRoZSBjYWxsYmFjayB0byBiZSBmaXJlZCB3aGVuIHRoZVxuICogICAgIHJlY2VpdmUgY29tcGxldGVzLlxuICogQHJldHVybiB7bW9kdWxlOmNzcC9jaGFubmVsLkJveHxudWxsfSBFaXRoZXIgdGhlIGJveGVkIHZhbHVlIHJlY2VpdmVkIGZyb21cbiAqICAgICB0aGUgY2hhbm5lbCwgb3IgYG51bGxgIGlmIHRoZSByZWNlaXZlIG11c3QgYmUgcXVldWVkIHRvIGF3YWl0IGFcbiAqICAgICBjb3JyZXNwb25kaW5nIHNlbmQuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBoYW5kbGVSZWN2KGNoYW5uZWwsIGhhbmRsZXIpIHtcbiAgbGV0IHNlbmRlciwgc2VuZEhhbmRsZXIsIGNhbGxiYWNrO1xuXG4gIC8vIFJ1bnMgaWYgdGhlIGNoYW5uZWwgaXMgYnVmZmVyZWQgYW5kIHRoZSBidWZmZXJlZCBpcyBub3QgZW1wdHkgKGFuIGVtcHR5XG4gIC8vIGJ1ZmZlciBtZWFucyB0aGVyZSBhcmUgbm8gcGVuZGluZyBzZW5kcykuIFdlIGltbWVkaWF0ZWx5IHByb2Nlc3MgYW55IHNlbmRzXG4gIC8vIHRoYXQgd2VyZSBxdWV1ZWQgd2hlbiB0aGVyZSB3ZXJlIG5vIHBlbmRpbmcgcmVjZWl2ZXMsIHVwIHVudGlsIHRoZSBidWZmZXJcbiAgLy8gaXMgZmlsbGVkIHdpdGggc2VudCB2YWx1ZXMuXG4gIGlmIChjaGFubmVsLmJ1ZmZlciAmJiBjb3VudChjaGFubmVsLmJ1ZmZlcikgPiAwKSB7XG4gICAgaGFuZGxlci5jb21taXQoKTtcbiAgICBjb25zdCB2YWx1ZSA9IHJlbW92ZShjaGFubmVsLmJ1ZmZlcik7XG5cbiAgICBmb3IgKDs7KSB7XG4gICAgICBpZiAoaXNGdWxsKGNoYW5uZWwuYnVmZmVyKSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHNlbmRlciA9IGRlcXVldWUoY2hhbm5lbC5zZW5kcyk7XG4gICAgICBpZiAoc2VuZGVyID09PSBFTVBUWSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgc2VuZEhhbmRsZXIgPSBzZW5kZXIuaGFuZGxlcjtcbiAgICAgIGlmIChzZW5kSGFuZGxlci5hY3RpdmUpIHtcbiAgICAgICAgY2FsbGJhY2sgPSBzZW5kSGFuZGxlci5jb21taXQoKTtcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgZGlzcGF0Y2goKCkgPT4gY2FsbGJhY2sodHJ1ZSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc1JlZHVjZWQoY2hhbm5lbC54Zm9ybVtwLnN0ZXBdKGNoYW5uZWwuYnVmZmVyLCBzZW5kZXIudmFsdWUpKSkge1xuICAgICAgICAgIGNsb3NlKGNoYW5uZWwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBib3godmFsdWUpO1xuICB9XG5cbiAgLy8gVGhpcyBsb29wIHJ1bnMgb24gYW4gdW5idWZmZXJlZCBjaGFubmVsIGlmIHRoZXJlIGFyZSBhbnkgcGVuZGluZyBzZW5kcy5cbiAgLy8gKEJ1ZmZlcmVkIGNoYW5uZWxzIGJyZWFrIG91dCBvZiB0aGlzIGxvb3AgaW1tZWRpYXRlbHkgYmVjYXVzZSBpbiBvcmRlciB0b1xuICAvLyBoYXZlIGNvbWUgdGhpcyBmYXIgd2l0aG91dCByZXR1cm5pbmcsIHRoZSBjaGFubmVsJ3MgYnVmZmVyIG11c3QgaGF2ZSBiZWVuXG4gIC8vIGVtcHR5LiBBbiBlbXB0eSBidWZmZXIgbWVhbnMgdGhlcmUgYXJlIG5vIHBlbmRpbmcgc2VuZHMsIHNvIHRoZSBmaXJzdFxuICAvLyBwZW5kaW5nIHNlbmQgcmVhZCBmcm9tIGl0IHdpbGwgYmUgRU1QVFkuKSBJdCBwcm9jZXNzZXMgdGhlIG5leHQgcGVuZGluZ1xuICAvLyBzZW5kIGltbWVkaWF0ZWx5LlxuICBmb3IgKDs7KSB7XG4gICAgc2VuZGVyID0gZGVxdWV1ZShjaGFubmVsLnNlbmRzKTtcbiAgICBpZiAoc2VuZGVyID09PSBFTVBUWSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHNlbmRIYW5kbGVyID0gc2VuZGVyLmhhbmRsZXI7XG4gICAgaWYgKHNlbmRIYW5kbGVyLmFjdGl2ZSkge1xuICAgICAgY2FsbGJhY2sgPSBzZW5kSGFuZGxlci5jb21taXQoKTtcbiAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICBkaXNwYXRjaCgoKSA9PiBjYWxsYmFjayh0cnVlKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gYm94KHNlbmRlci52YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgLy8gSWYgd2UndmUgZXhoYXVzdGVkIGFsbCBvZiBvdXIgcGVuZGluZyBzZW5kcyBhbmQgdGhlIGNoYW5uZWwgaXMgbWFya2VkXG4gIC8vIGNsb3NlZCwgd2UgY2FuIGZpbmFsbHkgcmV1dHJuIHRoZSBmYWN0IHRoYXQgdGhlIGNoYW5uZWwgaXMgY2xvc2VkLiBUaGlzXG4gIC8vIGVuc3VyZXMgdGhhdCBhbnkgc2VuZHMgdGhhdCB3ZXJlIGFscmVhZHkgcGVuZGluZyBvbiB0aGUgY2hhbm5lbCBhcmVcbiAgLy8gcHJvY2Vzc2VkIGJlZm9yZSBjbG9zdXJlLCBldmVuIGlmIHRoZSBjaGFubmVsIHdhcyBjbG9zZWQgYmVmb3JlIHRoYXQgY291bGRcbiAgLy8gaGFwcGVuLlxuICBpZiAoY2hhbm5lbC5jbG9zZWQpIHtcbiAgICBoYW5kbGVyLmNvbW1pdCgpO1xuICAgIHJldHVybiBib3goQ0xPU0VEKTtcbiAgfVxuXG4gIC8vIElmIGFuIHVuYnVmZmVyZWQgY2hhbm5lbCBvciBhIGJ1ZmZlcmVkIGNoYW5uZWwgd2l0aCBhbiBlbXB0eSBidWZmZXIgaGFzIG5vXG4gIC8vIHBlbmRpbmcgc2VuZHMsIGFuZCBpZiB0aGUgY2hhbm5lbCBpcyBzdGlsbCBvcGVuLCB0aGUgcmVjZWl2ZSBpcyBxdWV1ZWQgdG9cbiAgLy8gYmUgcHJvY2Vzc2VkIHdoZW4gYSBzZW5kIGlzIGF2YWlsYWJsZS4gUmVjZWl2ZXMgd2hvc2UgaGFuZGxlcnMgaGF2ZSBnb25lXG4gIC8vIGluYWN0aXZlIGFzIHRoZSByZXN1bHQgb2YgYHNlbGVjdGAgcHJvY2Vzc2luZyBhcmUgcGVyaW9kaWNhbGx5IHB1cmdlZC5cbiAgaWYgKGNoYW5uZWwuZGlydHlSZWN2cyA+IGNoYW5uZWwubWF4RGlydHkpIHtcbiAgICBmaWx0ZXIoY2hhbm5lbC5yZWN2cywgcmVjZWl2ZXIgPT4gcmVjZWl2ZXIuYWN0aXZlKTtcbiAgICBjaGFubmVsLmRpcnR5UmVjdnMgPSAwO1xuICB9IGVsc2Uge1xuICAgIGNoYW5uZWwuZGlydHlSZWN2cysrO1xuICB9XG5cbiAgaWYgKHFDb3VudChjaGFubmVsLnJlY3ZzKSA+PSBjaGFubmVsLm1heFF1ZXVlZCkge1xuICAgIGNvbnN0IG1heCA9IGNoYW5uZWwubWF4UXVldWVkO1xuICAgIHRocm93IEVycm9yKFxuICAgICAgYE5vIG1vcmUgdGhhbiAke21heH0gcGVuZGluZyByZWNlaXZlcyBhcmUgYWxsb3dlZCBvbiBhIHNpbmdsZSBjaGFubmVsYFxuICAgICk7XG4gIH1cbiAgZW5xdWV1ZShjaGFubmVsLnJlY3ZzLCBoYW5kbGVyKTtcblxuICByZXR1cm4gbnVsbDtcbn1cblxuLyoqXG4gKiBDbG9zZXMgdGhlIGNoYW5uZWwgaWYgaXQgaXNuJ3QgYWxyZWFkeSBjbG9zZWQuIFRoaXMgaW1tZWRpYXRlbHkgcmV0dXJucyBhbnlcbiAqIGJ1ZmZlcmVkIHZhbHVlcyB0byBwZW5kaW5nIHJlY2VpdmVzLiBJZiB0aGVyZSBhcmUgbm8gYnVmZmVyZWQgdmFsdWVzIChvciBpZlxuICogdGhleSd2ZSBhbHJlYWR5IGJlZW4gdGFrZW4gYnkgb3RoZXIgcmVjZWl2ZXMpLCB0aGVuIGFsbCBvZiB0aGUgcmVzdCBvZiB0aGVcbiAqIHJlY2VpdmVzIGFyZSBjb21wbGV0ZWQgd2l0aCB0aGUgdmFsdWUgb2Yge0BsaW5rIG1vZHVsZTpjc3AuQ0xPU0VEfENMT1NFRH0uXG4gKiBBbnkgcGVuZGluZyBzZW5kcyBhcmUgY29tcGxldGVkIHdpdGggdGhlIHZhbHVlIG9mIGBmYWxzZWAuXG4gKlxuICogTm90ZSB0aGF0IHRoZSBidWZmZXIgaXMgbm90IGVtcHRpZWQgaWYgdGhlcmUgYXJlIHN0aWxsIHZhbHVlcyByZW1haW5pbmcgYWZ0ZXJcbiAqIGFsbCBvZiB0aGUgcGVuZGluZyByZWNlaXZlcyBoYXZlIGJlZW4gaGFuZGxlZC4gVGhlIGNoYW5uZWwgd2lsbCBzdGlsbCBwcm92aWRlXG4gKiB0aG9zZSB2YWx1ZXMgdG8gYW55IGZ1dHVyZSByZWNlaXZlcywgdGhvdWdoIG5vIG5ldyB2YWx1ZXMgbWF5IGJlIGFkZGVkIHRvIHRoZVxuICogY2hhbm5lbC4gT25jZSB0aGUgYnVmZmVyIGlzIGRlcGxldGVkLCBhbnkgZnV0dXJlIHJlY2VpdmVzIHdpbGwgcmV0dXJuXG4gKiB7QGxpbmsgbW9kdWxlOmNzcC5DTE9TRUR8Q0xPU0VEfS5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICogQHBhcmFtIHttb2R1bGU6Y3NwLkNoYW5uZWx9IGNoYW5uZWwgVGhlIGNoYW5uZWwgdG8gYmUgY2xvc2VkLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY2xvc2UoY2hhbm5lbCkge1xuICBpZiAoY2hhbm5lbC5jbG9zZWQpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY2hhbm5lbC5jbG9zZWQgPSB0cnVlO1xuXG4gIGxldCByZWNlaXZlciwgc2VuZGVyLCBjYWxsYmFjaztcblxuICAvLyBJZiB0aGVyZSBpcyBhIGJ1ZmZlciBhbmQgaXQgaGFzIGF0IGxlYXN0IG9uZSB2YWx1ZSBpbiBpdCwgc2VuZCB0aG9zZSB2YWx1ZXNcbiAgLy8gdG8gYW55IHBlbmRpbmcgcmVjZWl2ZXMgdGhhdCBtaWdodCBzdGlsbCBiZSBxdWV1ZWQuXG4gIGlmIChjaGFubmVsLmJ1ZmZlcikge1xuICAgIGNoYW5uZWwueGZvcm1bcC5yZXN1bHRdKGNoYW5uZWwuYnVmZmVyKTtcbiAgICBmb3IgKDs7KSB7XG4gICAgICBpZiAoY291bnQoY2hhbm5lbC5idWZmZXIpID09PSAwKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgcmVjZWl2ZXIgPSBkZXF1ZXVlKGNoYW5uZWwucmVjdnMpO1xuICAgICAgaWYgKHJlY2VpdmVyID09PSBFTVBUWSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGlmIChyZWNlaXZlci5hY3RpdmUpIHtcbiAgICAgICAgY2FsbGJhY2sgPSByZWNlaXZlci5jb21taXQoKTtcbiAgICAgICAgY29uc3QgdmFsdWUgPSByZW1vdmUoY2hhbm5lbC5idWZmZXIpO1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICBkaXNwYXRjaCgoKSA9PiBjYWxsYmFjayh2YWx1ZSkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gT25jZSB0aGUgYnVmZmVyIGlzIGVtcHR5IChvciBpZiB0aGVyZSBpc24ndCBhIGJ1ZmZlciBhdCBhbGwpLCBzZW5kIENMT1NFRFxuICAvLyB0byBhbGwgcmVtYWluaW5nIHF1ZXVlZCByZWNlaXZlcy5cbiAgZm9yICg7Oykge1xuICAgIHJlY2VpdmVyID0gZGVxdWV1ZShjaGFubmVsLnJlY3ZzKTtcbiAgICBpZiAocmVjZWl2ZXIgPT09IEVNUFRZKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgaWYgKHJlY2VpdmVyLmFjdGl2ZSkge1xuICAgICAgY2FsbGJhY2sgPSByZWNlaXZlci5jb21taXQoKTtcbiAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICBkaXNwYXRjaCgoKSA9PiBjYWxsYmFjayhDTE9TRUQpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBTZW5kIGBmYWxzZWAgdG8gYW55IHJlbWFpbmluZyBxdWV1ZWQgc2VuZHMuXG4gIGZvciAoOzspIHtcbiAgICBzZW5kZXIgPSBkZXF1ZXVlKGNoYW5uZWwuc2VuZHMpO1xuICAgIGlmIChzZW5kZXIgPT09IEVNUFRZKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgaWYgKHNlbmRlci5oYW5kbGVyLmFjdGl2ZSkge1xuICAgICAgY2FsbGJhY2sgPSBzZW5kZXIuaGFuZGxlci5jb21taXQoKTtcbiAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICBkaXNwYXRjaCgoKSA9PiBjYWxsYmFjayhmYWxzZSkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQge1xuICBDTE9TRUQsXG4gIE1BWF9ESVJUWSxcbiAgTUFYX1FVRVVFRCxcbiAgY2hhbm5lbCxcbiAgaGFuZGxlU2VuZCxcbiAgaGFuZGxlUmVjdixcbiAgY2xvc2UsXG4gIGJveCxcbiAgaXNCb3hcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuLyoqXG4gKiBBbiBpbXBsZW1lbnRhdGlvbiBvZiBjaGFubmVscy4gVGhlc2UgY2hhbm5lbHMgYXJlIGVzc2VudGlhbGx5IHF1ZXVlcyB0aGF0XG4gKiBob2xkIGluc3RydWN0aW9ucyB3YWl0aW5nIGZvciB0aGUgbmV4dCBhdmFpbGFibGUgYXN5bmMgZnVuY3Rpb24gdG8gcHJvY2Vzc1xuICogdGhlbS4gVGhleSBjYW4gYmUgYnVmZmVyZWQsIHdoaWNoIGlzIGFjY29tcGxpc2hlZCB1c2luZyB0aGUgYnVmZmVyIGZ1bmN0aW9uc1xuICogYHtAbGluayBtb2R1bGU6Y3NwLmZpeGVkfGZpeGVkfWAsIGB7QGxpbmsgbW9kdWxlOmNzcC5kcm9wcGluZ3xkcm9wcGluZ31gLCBhbmRcbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC5zbGlkaW5nfHNsaWRpbmd9YC5cbiAqXG4gKiBDaGFubmVscyBkbyBub3QgaW50ZXJhY3Qgd2l0aCBKUyB0YXNrcyBvciB0aGUgZGlzcGF0Y2hlciBpbiBhbnkgbWVhbmluZ2Z1bFxuICogd2F5LiBUaGV5J3JlIGp1c3QgaGVyZSB0byBob2xkIHRhc2tzIHdoaWNoIG1heSB0aGVtc2VsdmVzIHRoZW4gY2F1c2UgbmV3IEpTXG4gKiB0YXNrcyB0byBiZSBjcmVhdGVkIHZpYSB0aGUgZGlzcGF0Y2hlci5cbiAqXG4gKiBDaGFubmVscyBtYXkgaGF2ZSB0cmFuc2R1Y2VycyBhc3NvY2lhdGVkIHdpdGggdGhlbS4gVGhlIHRyYW5zZHVjZXJzIGFyZVxuICogZXhwZWN0ZWQgdG8gZm9sbG93IHRoZSBzYW1lIGNvbnZlbnRpb25zIGFzIGFueSBvZiB0aGUgcG9wdWxhciB0cmFuc2R1Y2VyXG4gKiBsaWJyYXJpZXMuIEV4cGxpY2l0IHN1cHBvcnQgaXMgcmVxdWlyZWQgYmVjYXVzZSBjaGFubmVscyB3b3VsZG4ndCBwbGF5IHdlbGxcbiAqIHdpdGggdGhlIG5vcm1hbCB3YXkgb2YgbWFraW5nIGFuIG9iamVjdCBzdXBwb3J0IHRyYW5zZHVjdGlvbiwgZm9yIHR3b1xuICogZGlmZmVyZW50IHJlYXNvbnMuXG4gKlxuICogKiBUcmFuc2R1Y2VycyByZXF1aXJlIHRoZSBhYmlsaXR5IHRvIGNyZWF0ZSBhIG5ldywgZW1wdHkgY29sbGVjdGlvbiBvZiB0aGVcbiAqICAgc2FtZSB0eXBlIGFzIHRoZSBpbnB1dCBjb2xsZWN0aW9uLiBJbiB0aGlzIGNhc2UsIHRoYXQgd291bGQgbWVhbiBjcmVhdGluZyBhXG4gKiAgIG5ldyBjaGFubmVsLCBtZWFuaW5nIHRoYXQgdGhlIG91dHB1dCBjaGFubmVsIChmcm9tIHdoaWNoIHRoZSB0cmFuc2Zvcm1lZFxuICogICB2YWx1ZXMgYXJlIHJlY2VpdmVkKSB3b3VsZCBiZSBkaWZmZXJlbnQgdGhhbiB0aGUgaW5wdXQgY2hhbm5lbCAod2hlcmVcbiAqICAgdmFsdWVzIGFyZSBzZW50KS5cbiAqICogSWYgd2Ugc29tZWhvdyBnZXQgb3ZlciB0aGF0IHJlcXVpcmVtZW50IGFuZCBrZWVwIGFsbCBhY3Rpb24gb24gdGhlIHNhbWVcbiAqICAgY2hhbm5lbCwgd2UgY2FuJ3QgdGFrZSB2YWx1ZXMgZnJvbSB0aGUgY2hhbm5lbCwgdHJhbnNmb3JtIHRoZW0sIGFuZCBwdXRcbiAqICAgdGhlbSBiYWNrLiBUaGlzIHdvdWxkIHBvdGVudGlhbGx5IGNoYW5nZSB0aGUgb3JkZXIgb2YgdmFsdWVzIGluIHRoZSBjaGFubmVsXG4gKiAgIHNpbmNlIHdlIGFyZSBkZWFsaW5nIHdpdGggYXN5bmNocm9ub3VzIHByb2Nlc3Nlcy5cbiAqXG4gKiBUaGUgZXhwbGljaXQgc3VwcG9ydCBtZWFucyBhIHRyYW5zZHVjZXIgaXMgZGlyZWN0bHkgYXNzb2NpYXRlZCB3aXRoIGFcbiAqIGNoYW5uZWwuIFdoZW4gYSB2YWx1ZSBpcyBzZW50IHRvIHRoZSBjaGFubmVsLCBpdCdzIGZpcnN0IHJ1biB0aHJvdWdoIHRoZVxuICogdHJhbnNkdWNlciBhbmQgdGhlIHRyYW5zZm9ybWVkIHZhbHVlIGlzIHRoZSBvbmUgYWN0dWFsbHkgcHV0IGludG8gdGhlXG4gKiBjaGFubmVsJ3MgYnVmZmVyLiBUaGlzIGF2b2lkcyBib3RoIG9mIHRoZSBwcm9ibGVtcyBub3RlZCBhYm92ZS5cbiAqXG4gKiBAbW9kdWxlIGNzcC9jaGFubmVsXG4gKiBAcHJpdmF0ZVxuICovXG5cbmltcG9ydCB7XG4gIENMT1NFRCxcbiAgY2hhbm5lbCBhcyBjaGFuSW1wbCxcbiAgaGFuZGxlU2VuZCxcbiAgaGFuZGxlUmVjdixcbiAgY2xvc2UgYXMgY2xvc2VJbXBsLFxuICBNQVhfRElSVFksXG4gIE1BWF9RVUVVRURcbn0gZnJvbSBcIi4vaGFuZGxlclwiO1xuaW1wb3J0IHsgREVGQVVMVCwgc2VsZWN0LCBzZWxlY3RBc3luYywgdmFsdWUsIGNoYW5uZWwgfSBmcm9tIFwiLi9zZWxlY3RcIjtcbmltcG9ydCB7IGFkZCwgZml4ZWQsIGlzQnVmZmVyIH0gZnJvbSBcIm1vZHVsZXMvYnVmZmVyXCI7XG5pbXBvcnQgeyBwcm90b2NvbHMgYXMgcCB9IGZyb20gXCJAY2hhbmtvL2NvcmVcIjtcblxuLyoqXG4gKiBBIGhhbmRsZXIgZnVuY3Rpb24gZm9yIGV4Y2VwdGlvbnMgdGhhdCBhcmUgdGhyb3duIGJ5IGEgdHJhbnNkdWNlciB3aGlsZVxuICogdHJhbnNmb3JtaW5nIHZhbHVlcyBvbiBhIGNoYW5uZWwuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGVyciBUaGUgZXJyb3Igb2JqZWN0IHRoYXQgd2FzIHRocm93biBieSB0aGUgdHJhbnNkdWNlci5cbiAqIEByZXR1cm4geyp9IEEgdmFsdWUgdGhhdCBzaG91bGQgYmUgcHV0IGludG8gdGhlIGNoYW5uZWwncyBidWZmZXIgd2hlbiB0aGVcbiAqICAgICB0cmFuc2R1Y2VyIHRocm93cyB0aGUgZXJyb3IuIElmIHRoaXMgdmFsdWUgaXNcbiAqICAgICB7QGxpbmsgbW9kdWxlOmNzcC5DTE9TRUR8Q0xPU0VEfSwgdGhlbiBubyB2YWx1ZSBhdCBhbGwgd2lsbCBiZSBhZGRlZCB0b1xuICogICAgIHRoZSBidWZmZXIuXG4gKiBAY2FsbGJhY2tcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwL2NoYW5uZWxcbiAqIEBwcml2YXRlXG4gKi9cblxuLyoqXG4gKiBUaGUgZGVmYXVsdCBleGNlcHRpb24gaGFuZGxlciwgdXNlZCB3aGVuIG5vIGV4Y2VwdGlvbiBoYW5kbGVyIGlzIHN1cHBsaWVkIHRvXG4gKiBge0BsaW5rIG1vZHVsZTpjc3AvY2hhbm5lbC5oYW5kbGVFeGNlcHRpb259YCxcbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC9jaGFubmVsLndyYXBUcmFuc2Zvcm1lcn1gLCBge0BsaW5rIG1vZHVsZTpjc3AuY2hhbnxjaGFufWAsXG4gKiBvciBge0BsaW5rIG1vZHVsZTpjc3AudHJhbnNDaGFufHRyYW5zQ2hhbn1gLiBUaGlzIGRlZmF1bHQgaGFuZGxlciBtZXJlbHlcbiAqIHJldHVybnMgYHtAbGluayBtb2R1bGU6Y3NwLkNMT1NFRHxDTE9TRUR9YCwgd2hpY2ggd2lsbCByZXN1bHQgaW4gbm8gbmV3IHZhbHVlXG4gKiBiZWluZyB3cml0dGVuIHRvIHRoZSBjaGFubmVsLlxuICpcbiAqIEB0eXBlIHttb2R1bGU6Y3NwLkV4Y2VwdGlvbkhhbmRsZXJ9XG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcC9jaGFubmVsXG4gKiBAcHJpdmF0ZVxuICovXG5jb25zdCBERUZBVUxUX0hBTkRMRVIgPSAoKSA9PiBDTE9TRUQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBoYW5kbGVyIHVzZWQgZm9yIGBzZW5kYCBhbmQgYHJlY3ZgIG9wZXJhdGlvbnMuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3AvY2hhbm5lbFxuICogQHBhcmFtIHttb2R1bGU6Y3NwL2NoYW5uZWwuSGFuZGxlckNhbGxiYWNrfSBmbiBUaGUgY2FsbGJhY2sgdG8gYmUgcnVuIHdoZW5cbiAqICAgICAoYW5kIGlmKSB0aGUgb3BlcmF0aW9uIGNvbXBsZXRlcy5cbiAqIEByZXR1cm4ge21vZHVsZTpjc3AvY2hhbm5lbC5IYW5kbGVyfSBUaGUgbmV3IGhhbmRsZXIuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBvcEhhbmRsZXIoZm4pIHtcbiAgcmV0dXJuIE9iamVjdC5jcmVhdGUobnVsbCwge1xuICAgIGFjdGl2ZToge1xuICAgICAgdmFsdWU6IHRydWVcbiAgICB9LFxuICAgIGNvbW1pdDoge1xuICAgICAgdmFsdWU6ICgpID0+IGZuXG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBIYW5kbGVzIGFuIGV4Y2VwdGlvbiB0aGF0IGlzIHRocm93biBpbnNpZGUgYSB0cmFuc2R1Y2VyLiBUaGUgdGhyb3duIGVycm9yIGlzXG4gKiBwYXNzZWQgdG8gdGhlIGBoYW5kbGVyYCBmdW5jdGlvbiwgYW5kIHRoZSByZXN1bHQgb2YgdGhhdCBoYW5kbGVyIGZ1bmN0aW9uIGlzXG4gKiBhZGRlZCB0byB0aGUgY2hhbm5lbCdzIGJ1ZmZlci4gSWYgdGhhdCB2YWx1ZSBpc1xuICoge0BsaW5rIG1vZHVsZTpjc3AuQ0xPU0VEfENMT1NFRH0sIHRoZW4gaXQgaXMgKm5vdCogYWRkZWQgdG8gdGhlIGJ1ZmZlci5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuQnVmZmVyfSBidWZmZXIgVGhlIGJ1ZmZlciB0aGF0IGJhY2tzIHRoZSBjaGFubmVsIHdob3NlXG4gKiAgICAgdHJhbnNkdWNlcidzIGV4Y2VwdGlvbnMgYXJlIGJlaW5nIGhhbmRsZWQuXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuRXhjZXB0aW9uSGFuZGxlcn0gaGFuZGxlciBUaGUgZXhjZXB0aW9uIGhhbmRsaW5nIGZ1bmN0aW9uXG4gKiAgICAgdGhhdCBpcyBydW4gd2hlbiBhbiBlcnJvciBvY2N1cnMgaW4gYSB0cmFuc2R1Y2VyLlxuICogQHBhcmFtICB7T2JqZWN0fSBleCBUaGUgZXJyb3Igb2JqZWN0IHRocm93biBieSB0aGUgdHJhbnNkdWNlci5cbiAqIEByZXR1cm4ge21vZHVsZTpjc3AuQnVmZmVyfSBUaGUgYnVmZmVyIGl0c2VsZi4gVGhpcyBpcyBkb25lIHRvIG1ha2UgaXQgZWFzaWVyXG4gKiAgICAgdG8gaW50ZWdyYXRlIHRoaXMgZnVuY3Rpb24gaW50byBhIHRyYW5zZHVjZXIncyBzdGVwIGZ1bmN0aW9uLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaGFuZGxlRXhjZXB0aW9uKGJ1ZmZlciwgaGFuZGxlciwgZXgpIHtcbiAgY29uc3QgdmFsdWUgPSBoYW5kbGVyKGV4KTtcbiAgaWYgKHZhbHVlICE9PSBDTE9TRUQpIHtcbiAgICBhZGQoYnVmZmVyLCB2YWx1ZSk7XG4gIH1cbiAgcmV0dXJuIGJ1ZmZlcjtcbn1cblxuLyoqXG4gKiBBIHRyYW5zZHVjZXIgdGhhdCB3cmFwcyBhbm90aGVyIHRyYW5zZHVjZXIgd2l0aCBlcnJvciBoYW5kbGluZyBjb2RlLiBBbnlcbiAqIGVycm9yIHRoYXQgb2NjdXJzIHdpdGhpbiB0aGUgdHJhbnNkdWNlciwgZWl0aGVyIGluIHRoZSBzdGVwIGZ1bmN0aW9uIG9yIHRoZVxuICogcmVzdWx0IGZ1bmN0aW9uLCB3aWxsIGNhdXNlIHRoZSBlcnJvciBoYW5kbGVyIHRvIGJlIHJ1bi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0geGZvcm0gVGhlIHRyYW5zZHVjZXIgdG8gYWRkIGFuIGVycm9yIGhhbmRsZXIgdG8uXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuRXhjZXB0aW9uSGFuZGxlcn0gW2hhbmRsZXI9REVGQVVMVF9IQU5ETEVSXSBUaGUgZXhjZXB0aW9uXG4gKiAgICAgaGFuZGxpbmcgZnVuY3Rpb24gdGhhdCBpcyBydW4gd2hlbiBhbiBlcnJvciBvY2N1cnMgaW4gdGhlIHRyYW5zZHVjZXIuXG4gKiBAcmV0dXJuIHtPYmplY3R9IEEgbmV3IHRyYW5zZHVjZXIgdGhhdCBpcyB0aGUgcmVzdWx0IG9mIHdyYXBwaW5nIHRoZSBwcm92aWRlZFxuICogICAgIHRyYW5zZHVjZXIncyBzdGVwIGFuZCByZXN1bHQgZnVuY3Rpb25zIHdpdGggdGhlIGV4Y2VwdGlvbiBoYW5kbGVyLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaGFuZGxlclRyYW5zZHVjZXIoeGZvcm0sIGhhbmRsZXIgPSBERUZBVUxUX0hBTkRMRVIpIHtcbiAgcmV0dXJuIHtcbiAgICBbcC5zdGVwXShidWZmZXIsIGlucHV0KSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4geGZvcm1bcC5zdGVwXShidWZmZXIsIGlucHV0KTtcbiAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgIHJldHVybiBoYW5kbGVFeGNlcHRpb24oYnVmZmVyLCBoYW5kbGVyLCBleCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIFtwLnJlc3VsdF0oYnVmZmVyKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4geGZvcm1bcC5yZXN1bHRdKGJ1ZmZlcik7XG4gICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICByZXR1cm4gaGFuZGxlRXhjZXB0aW9uKGJ1ZmZlciwgaGFuZGxlciwgZXgpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cblxuLyoqXG4gKiBUaGUgcmVkdWNlciB1c2VkIGF0IHRoZSBlbmQgb2YgYSB0cmFuc2R1Y2VyIGNoYWluIHRvIGNvbnRyb2wgaG93IHRoZVxuICogdHJhbnNmb3JtZWQgdmFsdWVzIGFyZSByZWR1Y2VkIGJhY2sgb250byB0aGUgY2hhbm5lbCdzIGJ1ZmZlci4gVGhpcyByZWR1Y2VyXG4gKiBkb2VzIG5vdGhpbmcgbW9yZSB0aGFuIGFkZCB0aGUgaW5wdXQgaXRlbXMgKHdoaWNoIGFyZSB0aGUgdHJhbnNmb3JtZWQgdmFsdWVzXG4gKiB0aGF0IGFyZSBiZWluZyBwdXQgb250byB0aGUgY2hhbm5lbCkgdG8gdGhlIGNoYW5uZWwgYnVmZmVyLlxuICpcbiAqIFRoaXMgaXMgYSBuZWNlc3NhcnkgcGFydCBvZiB3b3JraW5nIHdpdGggYSB0cmFuc2R1Y2VyLCBhcyB0aGUgZmluYWwgcmVkdWNlclxuICogYWx3YXlzIHRha2VzIHRoZSB0cmFuc2Zvcm1lZCB2YWx1ZXMgYW5kIHJlbmRlcnMgdGhlbSBpbnRvIHdoYXRldmVyIGNvbGxlY3Rpb25cbiAqIGlzIGRlc2lyZWQuIFRoaXMgaXMgdGhhdCBmaW5hbCByZWR1Y2VyIGZvciBjaGFubmVscy5cbiAqXG4gKiBAdHlwZSB7T2JqZWN0fVxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgYnVmZmVyUmVkdWNlciA9IHtcbiAgW3AuaW5pdF0oKSB7XG4gICAgdGhyb3cgRXJyb3IoXCJpbml0IG5vdCBhdmFpbGFibGVcIik7XG4gIH0sXG5cbiAgW3Auc3RlcF0oYnVmZmVyLCBpbnB1dCkge1xuICAgIGFkZChidWZmZXIsIGlucHV0KTtcbiAgICByZXR1cm4gYnVmZmVyO1xuICB9LFxuXG4gIFtwLnJlc3VsdF0oYnVmZmVyKSB7XG4gICAgcmV0dXJuIGJ1ZmZlcjtcbiAgfVxufTtcblxuLyoqXG4gKiBQYXJzZXMgdGhlIGJ1ZmZlciBhcmd1bWVudCBhbmQgb3B0aW9ucywgYWxvbmcgd2l0aCBhIHNldCBvZiBkZWZhdWx0IG9wdGlvbnMsXG4gKiB0byBmaWd1cmUgb3V0IHdoYXQgd2FzIHJlYWxseSBwYXNzZWQgdG8gYHtAbGluayBtb2R1bGU6Y3NwLmNoYW58Y2hhbn1gLlxuICpcbiAqIEBwYXJhbSB7KG51bGx8bnVtYmVyfG1vZHVsZTpjc3AuQnVmZmVyKX0gYnVmZmVyIFRoZSBidWZmZXIgYXJndW1lbnQgcGFzc2VkIHRvXG4gKiAgICAgYHtAbGluayBtb2R1bGU6Y3NwLmNoYW58Y2hhbn1gLlxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgVGhlIG9wdGlvbnMgYXJndW1lbnQgcGFzc2VkIHRvXG4gKiAgICAgYHtAbGluayBtb2R1bGU6Y3NwLmNoYW58Y2hhbn1gLlxuICogQHBhcmFtIHtvYmplY3R9IGRlZmF1bHRPcHRpb25zIERlZmF1bHQgdmFsdWVzIGZvciBvcHRpb25zIHRoYXQgbWlnaHQgbm90IGhhdmVcbiAqICAgICBiZWVuIHNlbnQgdG8gYHtAbGluayBtb2R1bGU6Y3NwLmNoYW58Y2hhbn1gLlxuICogQHJldHVybiB7b2JqZWN0fSBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgcHJvY2Vzc2VkIHZhbHVlcyBvZiBhbGwgb2YgdGhlXG4gKiAgICAgYXJndW1lbnRzIHNlbnQgdG8gYHtAbGluayBtb2R1bGU6Y3NwLmNoYW58Y2hhbn1gLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gcGFyc2VBcmdzKGJ1ZmZlciwgb3B0aW9ucywgZGVmYXVsdE9wdGlvbnMpIHtcbiAgbGV0IGJ1ZjtcbiAgbGV0IG9wdHM7XG5cbiAgaWYgKCFidWZmZXIpIHtcbiAgICAvLyBzYW1lIGZvciAwLCBudWxsLCBvciB1bmRlZmluZWRcbiAgICBidWYgPSBudWxsO1xuICAgIG9wdHMgPSBvcHRpb25zO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBidWZmZXIgPT09IFwibnVtYmVyXCIpIHtcbiAgICBidWYgPSBmaXhlZChidWZmZXIpO1xuICAgIG9wdHMgPSBvcHRpb25zO1xuICB9IGVsc2UgaWYgKGlzQnVmZmVyKGJ1ZmZlcikpIHtcbiAgICBidWYgPSBidWZmZXI7XG4gICAgb3B0cyA9IG9wdGlvbnM7XG4gIH0gZWxzZSB7XG4gICAgLy8gSWYgbm8gYnVmZmVyIGlzIHNwZWNpZmllZCBidXQgYSB0cmFuc2R1Y2VyIGlzLCB3ZSBhc3N1bWUgZml4ZWQoMSkgaW5zdGVhZFxuICAgIC8vIG9mIG5vIGJ1ZmZlclxuICAgIGJ1ZiA9IGJ1ZmZlcj8udHJhbnNkdWNlciA/IGZpeGVkKDEpIDogbnVsbDtcbiAgICBvcHRzID0gYnVmZmVyO1xuICB9XG5cbiAgY29uc3QgeyB0cmFuc2R1Y2VyLCBoYW5kbGVyLCBtYXhEaXJ0eSwgbWF4UXVldWVkLCB0aW1lciB9ID0gT2JqZWN0LmFzc2lnbihcbiAgICB7fSxcbiAgICBkZWZhdWx0T3B0aW9ucyxcbiAgICBvcHRzXG4gICk7XG4gIHJldHVybiB7IGJ1ZiwgdHJhbnNkdWNlciwgaGFuZGxlciwgbWF4RGlydHksIG1heFF1ZXVlZCwgdGltZXIgfTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuZCByZXR1cm5zIGEgbmV3IGNoYW5uZWwuXG4gKlxuICogQnkgZGVmYXVsdCB0aGlzIGNoYW5uZWwgd2lsbCBiZSBhIHNpbXBsZSB1bmJ1ZmZlcmVkLCB1bnRyYW5zZm9ybWVkIGNoYW5uZWwsXG4gKiBidXQgdGhhdCBjYW4gYmUgY2hhbmdlZCB0aHJvdWdoIG9wdGlvbnMuIEEgY2hhbm5lbCBkb2VzIG5vdCBoYXZlIGFueVxuICogZXh0ZXJuYWxseSB1c2VmdWwgZnVuY3Rpb25zLiBJdCBleGlzdHMgbGFyZ2VseSB0byBiZSBwYXNzZWQgaW50b1xuICogYHtAbGluayBtb2R1bGU6Y3NwLnNlbmR8c2VuZH1gLCBge0BsaW5rIG1vZHVsZTpjc3AucmVjdnxyZWN2fWAsIGFuZFxuICogYHtAbGluayBtb2R1bGU6Y3NwLnNlbGVjdHxzZWxlY3R9YCBpbnZvY2F0aW9ucywgYWxvbmcgd2l0aCB0aGVpciBub24tYmxvY2tpbmdcbiAqIHZhcmlhdGlvbnMgKGB7QGxpbmsgbW9kdWxlOmNzcC5zZW5kQXN5bmN8c2VuZEFzeW5jfWAsXG4gKiBge0BsaW5rIG1vZHVsZTpjc3AucmVjdkFzeW5jfHJlY3ZBc3luY31gLCBhbmRcbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC5zZWxlY3RBc3luY3xzZWxlY3RBc3luY31gKS5cbiAqXG4gKiBJZiBhIGJ1ZmZlciB2YWx1ZSBpcyBwcm92aWRlZCwgaXQgZGVmaW5lcyB3aGF0IGJ1ZmZlciBzaG91bGQgYmFjayB0aGVcbiAqIGNoYW5uZWwuIElmIHRoaXMgaXMgYG51bGxgIG9yIGAwYCwgdGhlIGNoYW5uZWwgd2lsbCBiZSB1bmJ1ZmZlcmVkLiBJZiBpdCdzIGFcbiAqIHBvc2l0aXZlIG51bWJlciwgdGhlIGNoYW5uZWwgd2lsbCBiZSBidWZmZXJlZCBieSBhXG4gKiBge0BsaW5rIG1vZHVsZTpjc3AuRml4ZWRCdWZmZXJ8Rml4ZWRCdWZmZXJ9IGBvZiB0aGF0IHNpemUuIElmIGl0J3MgYVxuICogYHtAbGluayBtb2R1bGU6Y3NwLkJ1ZmZlcnxCdWZmZXJ9YCBvYmplY3QsIHRoYXQgb2JqZWN0IHdpbGwgYmUgdXNlZCBhcyB0aGVcbiAqIGNoYW5uZWwncyBidWZmZXIuIElmIGl0J3MgbWlzc2luZyBhbHRvZ2V0aGVyLCB0aGUgY2hhbm5lbCB3aWxsIGJlIHVuYnVmZmVyZWRcbiAqIHVubGVzcyBhIGB0cmFuc2R1Y2VyYCBvcHRpb24gaXMgcHJvdmlkZWQgKHNlZSBiZWxvdyksIGluIHdoaWNoIGNhc2UgaXQgd2lsbFxuICogYmUgYSBge0BsaW5rIG1vZHVsZTpjc3AuRml4ZWRCdWZmZXJ8Rml4ZWRCdWZmZXJ9YCBvZiBzaXplIDEuXG4gKlxuICogYGNoYW5gIHN1cHBvcnRzIHRyYW5zZHVjZXJzIGJ5IGFsbG93aW5nIGEgdHJhbnNkdWNlciBmdW5jdGlvbiB0byBiZVxuICogYXNzb2NpYXRlZCB3aXRoIGl0LiBUaGlzIGlzIHBhc3NlZCBhcyB0aGUgYHRyYW5zZHVjZXJgIG9wdGlvbiBhbmQgY2FuIG9ubHkgYmVcbiAqIHVzZWQgaWYgdGhlIGNoYW5uZWwgaXMgYnVmZmVyZWQgKG90aGVyd2lzZSBhbiBlcnJvciBpcyB0aHJvd24pLiBUaGlzXG4gKiB0cmFuc2R1Y2VyIGZ1bmN0aW9uIG11c3QgdGFrZSBhbm90aGVyIHRyYW5zZHVjZXIgYXMgYSBwYXJhbWV0ZXIgKGFsbG93aW5nXG4gKiB0cmFuc2Zvcm1lcnMgdG8gYmUgY2hhaW5lZCksIGFuZCBpdCBtdXN0IHJldHVybiBhbiBvYmplY3QgY29uZm9ybWluZyB0byB0aGVcbiAqIHRyYW5zZHVjZXIgcHJvdG9jb2wuXG4gKlxuICogRXJyb3JzIGluIHRoZSB0cmFuc2Zvcm1hdGlvbiBwcm9jZXNzIGNhbiBiZSBoYW5kbGVkIGJ5IHBhc3NpbmcgYW4gZXJyb3JcbiAqIGhhbmRsZXIuIFRoaXMgaXMgYSBmdW5jdGlvbiB0aGF0IGV4cGVjdHMgdG8gcmVjZWl2ZSBhbiBlcnJvciBvYmplY3QgYXMgYVxuICogcGFyYW1ldGVyIGFuZCBjYW4gcmV0dXJuIGEgdmFsdWUgdGhhdCBpcyB0aGVuIHB1dCBvbnRvIHRoZSBjaGFubmVsLiBJZiB0aGlzXG4gKiB2YWx1ZSBpcyBge0BsaW5rIG1vZHVsZTpjc3AuQ0xPU0VEfENMT1NFRH1gLCB0aGVuIG5vIHZhbHVlIHdpbGwgYmUgcHV0IG9udG9cbiAqIHRoZSBjaGFubmVsIHVwb24gaGFuZGxlciBjb21wbGV0aW9uLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcGFyYW0geyhudW1iZXJ8bW9kdWxlOmNzcC5CdWZmZXIpfSBbYnVmZmVyXSBUaGUgYnVmZmVyIG9iamVjdCB0aGF0IHNob3VsZFxuICogICAgIGJhY2sgdGhpcyBjaGFubmVsLiBJZiB0aGlzIGlzIGEgcG9zaXRpdmUgbnVtYmVyLCBhIGZpeGVkIGJ1ZmZlciBvZiB0aGF0XG4gKiAgICAgc2l6ZSB3aWxsIGJlIGNyZWF0ZWQgdG8gYmFjayB0aGUgY2hhbm5lbC4gSWYgaXQgaXMgYDBgIG9yIGBudWxsYCwgdGhlIG5ld1xuICogICAgIGNoYW5uZWwgd2lsbCBiZSB1bmJ1ZmZlcmVkLiBJZiBpdCdzIG5vdCBwcmVzZW50LCB0aGUgbmV3IGNoYW5uZWwgd2lsbCBiZVxuICogICAgIHVuYnVmZmVyZWQgdW5sZXNzIHRoZXJlIGlzIGEgYHRyYW5zZHVjZXJgIG9wdGlvbiwgaW4gaW4gd2hpY2ggY2FzZSBpdFxuICogICAgIHdpbGwgYmUgYnVmZmVyZWQgd2l0aCBhIHNpemUgMVxuICogICAgIGB7QGxpbmsgbW9kdWxlOmNzcC5GaXhlZEJ1ZmZlcnxGaXhlZEJ1ZmZlcn1gLlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSBBIHNldCBvZiBvcHRpb25zIGZvciBjb25maWd1cmluZyB0aGUgY2hhbm5lbCdzXG4gKiAgICAgcXVldWUuXG4gKiBAcGFyYW0ge21vZHVsZTpjb3JlLlRyYW5zZHVjZXJGdW5jdGlvbn0gW29wdGlvbnMudHJhbnNkdWNlcl0gQSB0cmFuc2R1Y2VyIHRvXG4gKiAgICAgcnVuIGVhY2ggdmFsdWUgdGhyb3VnaCBiZWZvcmUgcHV0dGluZyBpdCBvbnRvIHRoZSBjaGFubmVsLiBUaGlzIGZ1bmN0aW9uXG4gKiAgICAgc2hvdWxkIGV4cGVjdCBvbmUgcGFyYW1ldGVyIChhbm90aGVyIHRyYW5zZHVjZXIgdGhhdCBpdCdzIGNoYWluZWQgdG8pIGFuZFxuICogICAgIHJldHVybiBhbiBvYmplY3QgdGhhdCBjb25mb3JtcyB0byB0aGUgdHJhbnNkdWNlciBwcm90b2NvbC4gSWYgYVxuICogICAgIHRyYW5zZHVjZXIgaXMgcHJvdmlkZWQgb24gYW4gdW5idWZmZXJlZCBjaGFubmVsLCBhbiBlcnJvciB3aWxsIGJlIHRocm93bi5cbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5FeGNlcHRpb25IYW5kbGVyfSBbb3B0aW9ucy5oYW5kbGVyXSBBbiBlcnJvciBoYW5kbGVyIHRoYXRcbiAqICAgICBpcyBydW4gd2hlbmV2ZXIgYW4gZXJyb3Igb2NjdXJzIGluc2lkZSBhIHRyYW5zZHVjZXIgZnVuY3Rpb24uIElmIHRoYXRcbiAqICAgICBoYXBwZW5zLCB0aGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCB3aXRoIG9uZSBwYXJhbWV0ZXIsIHdoaWNoIGlzIHRoZSBlcnJvclxuICogICAgIG9iamVjdC4gVGhlIHZhbHVlIHRoYXQgdGhlIGhhbmRsZXIgcmV0dXJucyAoaWYgaXQgaXMgbm90XG4gKiAgICAgYHtAbGluayBtb2R1bGU6Y3NwLkNMT1NFRHxDTE9TRUR9YCkgd2lsbCBiZSBwdXQgb250byB0aGUgY2hhbm5lbCB3aGVuIHRoZVxuICogICAgIGhhbmRsZXIgZmluaXNoZXMgcnVubmluZy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5tYXhEaXJ0eT02NF0gVGhlIG1heGltdW0gbnVtYmVyIG9mIGRpcnR5IG9wZXJhdGlvbnNcbiAqICAgICB0aGF0IGNhbiBiZSBpbiB0aGUgcXVldWUgYmVmb3JlIHRob3NlIG9wZXJhdGlvbnMgYXJlIHN1YmplY3QgdG8gYmVpbmdcbiAqICAgICBwdXJnZWQuIERpcnR5IG9wZXJhdGlvbnMgYXJlIHRob3NlIHRoYXQgbWF5IG5vdCBiZSB2YWxpZCBhbnltb3JlIGJlY2F1c2VcbiAqICAgICB0aGV5IHdlcmUgaW4gdGhlIGxpc3Qgb2Ygb3BlcmF0aW9ucyBwYXNzZWQgdG9cbiAqICAgICBge0BsaW5rIG1vZHVsZTpjc3Auc2VsZWN0fHNlbGVjdH1gIG9yXG4gKiAgICAgYHtAbGluayBtb2R1bGU6Y3NwLnNlbGVjdEFzeW5jfHNlbGVjdEFzeW5jfWAgYnV0IHdlcmUgbm90IGNob3NlbiB0byBydW4uXG4gKiAgICAgVGhpcyBwcm92aWRlcyBhIGNoYW5jZSBmb3IgYSB2ZXJ5IG1pbm9yIHBlcmZvcm1hbmNlIHR3ZWFrIGFuZCBpcyBiZXN0XG4gKiAgICAgbGVmdCBhbG9uZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5tYXhRdWV1ZWQ9MTAyNF0gVGhlIG1heGltdW0gbnVtYmVyIG9mIG9wZXJhdGlvbnNcbiAqICAgICB0aGF0IGNhbiBiZSBxdWV1ZWQgdXAgYXQgdGhlIHNhbWUgdGltZS4gVGhpcyBwcmV2ZW50cyBpbmZpbml0ZSBsb29wcyBmcm9tXG4gKiAgICAgYWNjaWRlbnRhbGx5IGVhdGluZyB1cCBhbGwgb2YgdGhlIGF2YWlsYWJsZSBtZW1vcnkuXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMudGltZXJdIElmIHRoaXMgdmFsdWUgaXMgcHJlc2VudCwgdGhlIGNoYW5uZWwgd2lsbCBiZVxuICogICAgIGEgdGltZWQgY2hhbm5lbCB0aGF0IGNsb3NlcyBhdXRvbWF0aWNhbGx5IGFmdGVyIHRoaXMgbnVtYmVyIG9mXG4gKiAgICAgbWlsbGlzZWNvbmRzLlxuICogQHJldHVybiB7bW9kdWxlOmNzcC5DaGFubmVsfSBBIG5ldyBjaGFubmVsLlxuICovXG5mdW5jdGlvbiBjaGFuKGJ1ZmZlciwgb3B0aW9ucykge1xuICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICBtYXhEaXJ0eTogTUFYX0RJUlRZLFxuICAgIG1heFF1ZXVlZDogTUFYX1FVRVVFRFxuICB9O1xuICBjb25zdCB7IGJ1ZiwgdHJhbnNkdWNlciwgaGFuZGxlciwgbWF4RGlydHksIG1heFF1ZXVlZCwgdGltZXIgfSA9IHBhcnNlQXJncyhcbiAgICBidWZmZXIsXG4gICAgb3B0aW9ucyxcbiAgICBkZWZhdWx0T3B0aW9uc1xuICApO1xuXG4gIGlmICh0cmFuc2R1Y2VyICYmICFidWYpIHtcbiAgICB0aHJvdyBFcnJvcihcIk9ubHkgYnVmZmVyZWQgY2hhbm5lbHMgY2FuIHVzZSB0cmFuc2R1Y2Vyc1wiKTtcbiAgfVxuXG4gIGNvbnN0IHhmID0gaGFuZGxlclRyYW5zZHVjZXIoXG4gICAgdHJhbnNkdWNlciA/IHRyYW5zZHVjZXIoYnVmZmVyUmVkdWNlcikgOiBidWZmZXJSZWR1Y2VyLFxuICAgIGhhbmRsZXJcbiAgKTtcblxuICBjb25zdCBpc1RpbWVkID0gdHlwZW9mIHRpbWVyID09PSBcIm51bWJlclwiO1xuXG4gIGNvbnN0IGNoID0gY2hhbkltcGwoYnVmLCB4ZiwgaXNUaW1lZCwgbWF4RGlydHksIG1heFF1ZXVlZCk7XG5cbiAgYXN5bmMgZnVuY3Rpb24qIGl0ZXJhdG9yKCkge1xuICAgIGZvciAoOzspIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gYXdhaXQgcmVjdihjaCk7XG4gICAgICBpZiAodmFsdWUgPT09IENMT1NFRCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHlpZWxkIHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIGNoW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGl0ZXJhdG9yO1xuXG4gIGlmIChpc1RpbWVkKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiBjbG9zZUltcGwoY2gpLCB0aW1lcik7XG4gIH1cblxuICByZXR1cm4gY2g7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbiB1bmJ1ZmZlcmVkLCB0aW1lZCBjaGFubmVsLiBUaGlzIGNoYW5uZWwgY2xvc2VzIGF1dG9tYXRpY2FsbHkgYWZ0ZXJcbiAqIHRoZSBzdXBwbGllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGFuZCBpcyB0aGUgZXF1aXZhbGVudCBvZiBjYWxsaW5nIGBjaGFuKDAsXG4gKiB7IHRpbWVyOiBkZWxheSB9KWAuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqIEBwYXJhbSB7bnVtYmVyfSBkZWxheSBUaGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBhZnRlciB0aGUgY2hhbm5lbCBpcyBjcmVhdGVkXG4gKiAgICAgdGhhdCBpdCB3aWxsIGJlIGNsb3NlZCBhdXRvbWF0aWNhbGx5LlxuICogQHJldHVybiB7bW9kdWxlOmNzcC5DaGFubmVsfSBBIG5ldyB0aW1lZCBjaGFubmVsLlxuICovXG5mdW5jdGlvbiB0aW1lZENoYW4oZGVsYXkgPSAwKSB7XG4gIHJldHVybiBjaGFuKHsgdGltZXI6IGRlbGF5IH0pO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBidWZmZXJlZCBjaGFubmVsIHdpdGggYSB0cmFuc2R1Y2VyIGFuZCBvcHRpb25hbCBlcnJvciBoYW5kbGVyLiBUaGVcbiAqIGJ1ZmZlciBmb3IgdGhpcyBjaGFubmVsIGlzIGEgYHtAbGluayBtb2R1bGU6Y3NwLkZpeGVkQnVmZmVyfEZpeGVkQnVmZmVyfWAgb2ZcbiAqIHNpemUgMS4gVGhpcyBpcyB0aGUgZXF1aXZhbGVudCBvZiBgY2hhbigxLCB7IHRyYW5zZHVjZXIsIGhhbmRsZXIgfSlgLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcGFyYW0ge21vZHVsZTpjb3JlLlRyYW5zZHVjZXJGdW5jdGlvbn0gdHJhbnNkdWNlciBUaGUgdHJhbnNkdWNlciB1c2VkIHRvXG4gKiAgICAgdHJhbnNmb3JtIHZhbHVlcyBvbiB0aGUgbmV3IGNoYW5uZWwuXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuRXhjZXB0aW9uSGFuZGxlcn0gW2hhbmRsZXJdIEFuIGV4Y2VwdGlvbiBoYW5kbGVyIGNhbGxlZFxuICogICAgIHdpdGggdGhlIGVycm9yIG9iamVjdCBhcyBpdHMgb25seSBhcmd1bWVudCB3aGVuIGFuIGVycm9yIGhhcHBlbnMgaW5zaWRlIGFcbiAqICAgICB0cmFuc2R1Y2VyLiBJZiB0aGlzIGlzIG5vdCBwcm92aWRlZCwgYSBkZWZhdWx0IGhhbmRsZXIgaXMgdXNlZCB0aGF0XG4gKiAgICAgc2ltcGx5IGRvZXMgbm90aGluZywgaW5jbHVkaW5nIHNlbmRpbmcgbm8gb3V0cHV0IGZyb20gdGhlIHZhbHVlIHRoYXRcbiAqICAgICBlcnJvcmVkLlxuICogQHJldHVybiB7bW9kdWxlOmNzcC5DaGFubmVsfSBBIG5ldyBjaGFubmVsIHdpdGggYSB0cmFuc2R1Y2VyLlxuICovXG5mdW5jdGlvbiB0cmFuc0NoYW4odHJhbnNkdWNlciwgaGFuZGxlcikge1xuICByZXR1cm4gY2hhbih7IHRyYW5zZHVjZXIsIGhhbmRsZXIgfSk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGEgY2hhbm5lbCBpcyBjbG9zZWQuXG4gKlxuICogQSBjbG9zZWQgY2hhbm5lbCB3aWxsIGNhdXNlIGFueSBgc2VuZGAgb3BlcmF0aW9uIHRvIHJldHVybiBgZmFsc2VgIGFuZCBhbnlcbiAqIGByZWN2YCBvcGVyYXRpb24gdG8gcmV0dXJuIGFueSBidWZmZXJlZCBpdGVtcyB0aGF0IHJlbWFpbiwgZm9sbG93ZWQgYnlcbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC5DTE9TRUR8Q0xPU0VEfWAuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5DaGFubmVsfSBjaGFubmVsIFRoZSBjaGFubmVsIHRvIGNoZWNrLlxuICogQHJldHVybiB7Ym9vbGVhbn0gRWl0aGVyIGB0cnVlYCBpZiB0aGUgY2hhbm5lbCBpcyBjbG9zZWQgb3IgYGZhbHNlYCBpZiBpdFxuICogICAgIGlzbid0LlxuICovXG5mdW5jdGlvbiBpc0Nsb3NlZChjaGFubmVsKSB7XG4gIHJldHVybiBjaGFubmVsLmNsb3NlZDtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgYSBjaGFubmVsIGlzIGJ1ZmZlcmVkLlxuICpcbiAqIEEgY2hhbm5lbCBpcyBidWZmZXJlZCBpZiBhIGJ1ZmZlciBvciBhIG51bWJlciB3YXMgcGFzc2VkIGFzIHRoZSBmaXJzdFxuICogYXJndW1lbnQgb2YgYHtAbGluayBtb2R1bGU6Y3NwLmNoYW58Y2hhbn1gIG9yIGlmIGEgdHJhbnNkdWNlciBpcyBhIHBhcnQgb2ZcbiAqIHRoZSBjaGFubmVsLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuQ2hhbm5lbH0gY2hhbm5lbCBUaGUgY2hhbm5lbCB0byBjaGVjay5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IEVpdGhlciBgdHJ1ZWAgaWYgdGhlIGNoYW5uZWwgaXMgYnVmZmVyZWQgb3IgYGZhbHNlYCBpZiBpdFxuICogICAgIGlzbid0LlxuICovXG5mdW5jdGlvbiBpc0J1ZmZlcmVkKGNoYW5uZWwpIHtcbiAgcmV0dXJuIGNoYW5uZWwuaXNCdWZmZXJlZDtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgYSBjaGFubmVsIGlzIHRpbWVkLlxuICpcbiAqIEEgY2hhbm5lbCBpcyB0aW1lZCBpZiBpdCB3YXMgY3JlYXRlZCBlaXRoZXIgd2l0aCB0aGUgYHRpbWVyYCBvcHRpb24gb2ZcbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC5jaGFufGNoYW59YCBvciB3aXRoIHRoZVxuICogYHtAbGluayBtb2R1bGU6Y3NwLnRpbWVkQ2hhbnx0aW1lZENoYW59YCBmdW5jdGlvbi4gSXQgd2lsbCBhdXRvbWF0aWNhbGx5XG4gKiBjbG9zZSBhZnRlciBhIGNlcnRhaW4gcGVyaW9kIG9mIHRpbWUuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5DaGFubmVsfSBjaGFubmVsIFRoZSBjaGFubmVsIHRvIGNoZWNrLlxuICogQHJldHVybiB7Ym9vbGVhbn0gRWl0aGVyIGB0cnVlYCBpZiB0aGUgY2hhbm5lbCBpcyB0aW1lZCBvciBgZmFsc2VgIGlmIGl0XG4gKiAgICAgaXNuJ3QuXG4gKi9cbmZ1bmN0aW9uIGlzVGltZWQoY2hhbm5lbCkge1xuICByZXR1cm4gY2hhbm5lbC5pc1RpbWVkO1xufVxuXG4vKipcbiAqIFNlbmRzIGEgdmFsdWUgdG8gdGhpcyBjaGFubmVsIHdpdGhvdXQgYmxvY2tpbmcuXG4gKlxuICogVGhpcyBtZWFucyB0aGF0IGEgY2FsbCB0byBgc2VuZEFzeW5jYCBkb2VzIG5vdCBnbyBpbnRvIGFuIGBhd2FpdGAgZXhwcmVzc2lvbixcbiAqIGFuZCBpdCBpcyBub3QgbmVjZXNzYXJ5IHRvIHVzZSBpdCBpbnNpZGUgYSBhc3luYyBmdW5jdGlvbi4gUmF0aGVyIHRoYW5cbiAqIGJsb2NraW5nIHVudGlsIHRoZSBzZW50IHZhbHVlIGlzIHRha2VuIGJ5IGFub3RoZXIgYXN5bmMgZnVuY3Rpb24sIHRoaXMgb25lXG4gKiByZXR1cm5zIGltbWVkaWF0ZWx5IGFuZCB0aGVuIGludm9rZXMgdGhlIGNhbGxiYWNrIChpZiBwcm92aWRlZCkgd2hlbiB0aGUgc2VudFxuICogdmFsdWUgaXMgdGFrZW4uIEl0IGNhbiBiZSBzZWVuIGFzIGEgbm9uLWJsb2NraW5nIHZlcnNpb24gb2ZcbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC5zZW5kfHNlbmR9YC5cbiAqXG4gKiBXaGlsZSB0aGUgcHJpbWFyeSB1c2Ugb2YgdGhpcyBmdW5jdGlvbiBpcyB0byBzZW5kIHZhbHVlcyBvbnRvIGNoYW5uZWxzIGluXG4gKiBjb250ZXh0cyB3aGVyZSBiZWluZyBpbnNpZGUgYW4gYXN5bmMgZnVuY3Rpb24gaXMgaW1wb3NzaWJsZSAoZm9yIGV4YW1wbGUsIGluXG4gKiBhIERPTSBlbGVtZW50J3MgZXZlbnQgaGFuZGxlciksIGl0IGNhbiBzdGlsbCBiZSB1c2VkIGluc2lkZSBhc3luYyBmdW5jdGlvbnNcbiAqIGF0IHRpbWVzIHdoZW4gaXQncyBpbXBvcnRhbnQgdG8gbWFrZSBzdXJlIHRoYXQgdGhlIGZ1bmN0aW9uIGRvZXNuJ3QgYmxvY2tcbiAqIGZyb20gdGhlIHNlbmQuXG4gKlxuICogVGhlIGNhbGxiYWNrIGlzIGEgZnVuY3Rpb24gb2Ygb25lIHBhcmFtZXRlci4gVGhlIHBhcmFtZXRlciB0aGF0J3Mgc3VwcGxpZWQgdG9cbiAqIHRoZSBjYWxsYmFjayBpcyB0aGUgc2FtZSBhcyB3aGF0IGlzIHN1cHBsaWVkIHRvIGBhd2FpdCBzZW5kYDogYHRydWVgIGlmIHRoZVxuICogdmFsdWUgd2FzIHRha2VuLCBvciBgZmFsc2VgIGlmIHRoZSBjaGFubmVsIHdhcyBjbG9zZWQuIElmIHRoZSBjYWxsYmFjayBpc24ndFxuICogcHJlc2VudCwgbm90aGluZyB3aWxsIGhhcHBlbiBhZnRlciB0aGUgdmFsdWUgaXMgdGFrZW4uXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqIEBwYXJhbSB7Kn0gW3ZhbHVlXSBUaGUgdmFsdWUgYmVpbmcgcHV0IG9udG8gdGhlIGNoYW5uZWwuXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuT3BDYWxsYmFja30gW2NhbGxiYWNrXSBBIGZ1bmN0aW9uIHRoYXQgZ2V0cyBpbnZva2VkIGVpdGhlclxuICogICAgIHdoZW4gdGhlIHZhbHVlIGlzIHRha2VuIGJ5IGFub3RoZXIgcHJvY2VzcyBvciB3aGVuIHRoZSBjaGFubmVsIGlzIGNsb3NlZC5cbiAqICAgICBUaGlzIGZ1bmN0aW9uIGNhbiB0YWtlIG9uZSBwYXJhbWV0ZXIsIHdoaWNoIGlzIGB0cnVlYCBpbiB0aGUgZm9ybWVyIGNhc2VcbiAqICAgICBhbmQgYGZhbHNlYCBpbiB0aGUgbGF0dGVyLlxuICovXG5mdW5jdGlvbiBzZW5kQXN5bmMoY2hhbm5lbCwgdmFsdWUsIGNhbGxiYWNrID0gKCkgPT4ge30pIHtcbiAgY29uc3QgcmVzdWx0ID0gaGFuZGxlU2VuZChjaGFubmVsLCB2YWx1ZSwgb3BIYW5kbGVyKGNhbGxiYWNrKSk7XG4gIGlmIChyZXN1bHQgJiYgY2FsbGJhY2spIHtcbiAgICBjYWxsYmFjayhyZXN1bHQudmFsdWUpO1xuICB9XG59XG5cbi8qKlxuICogUmVjZWl2ZXMgYSB2YWx1ZSBmcm9tIHRoaXMgY2hhbm5lbCB3aXRob3V0IGJsb2NraW5nLlxuICpcbiAqIFRoaXMgbWVhbnMgdGhhdCBhIGNhbGwgdG8gYHJlY2VpdmVBc3luY2AgZG9lcyBub3QgZ28gaW50byBhbiBgYXdhaXRgXG4gKiBleHByZXNzaW9uLCBhbmQgaXQgaXMgbm90IG5lY2Vzc2FyeSB0byB1c2UgaXQgaW5zaWRlIGEgYXN5bmMgZnVuY3Rpb24uIFJhdGhlclxuICogdGhhbiBibG9ja2luZyB1bnRpbCBhIHZhbHVlIGJlY29tZXMgYXZhaWxhYmxlIG9uIHRoZSBjaGFubmVsIHRvIGJlIHJlY2VpdmVkLFxuICogdGhpcyBvbmUgcmV0dXJucyBpbW1lZGlhdGVseSBhbmQgdGhlbiBpbnZva2VzIHRoZSBjYWxsYmFjayAoaWYgcHJvdmlkZWQpIHdoZW5cbiAqIGEgdmFsdWUgYmVjb21lcyBhdmFpbGFibGUuIEl0IGNhbiBiZSByZWdhcmRlZCBhcyBhIG5vbi1ibG9ja2luZyB2ZXJzaW9uIG9mXG4gKiB7QGxpbmsgbW9kdWxlOmNzcC5yZWN2fHJlY3Z9YC5cbiAqXG4gKiBXaGlsZSB0aGUgcHJpbWFyeSB1c2Ugb2YgdGhpcyBmdW5jdGlvbiBpcyB0byByZWNlaXZlIHZhbHVlcyBmcm9tIGNoYW5uZWxzIGluXG4gKiBjb250ZXh0cyB3aGVyZSBiZWluZyBpbnNpZGUgYW4gYXN5bmMgZnVuY3Rpb24gaXMgaW1wb3NzaWJsZSwgaXQgY2FuIHN0aWxsIGJlXG4gKiB1c2VkIGluc2lkZSBhc3luYyBmdW5jdGlvbnMgYXQgdGltZXMgd2hlbiBpdCdzIGltcG9ydGFudCB0aGF0IHRoZSByZWNlaXZlXG4gKiBkb2Vzbid0IGJsb2NrIHRoZSBmdW5jdGlvbi5cbiAqXG4gKiBUaGUgY2FsbGJhY2sgaXMgYSBmdW5jdGlvbiBvZiBvbmUgcGFyYW1ldGVyLCBhbmQgdGhlIHZhbHVlIHN1cHBsaWVkIGZvciB0aGF0XG4gKiBwYXJhbWV0ZXIgaXMgdGhlIHZhbHVlIHJlY2VpdmVkIGZyb20gdGhlIGNoYW5uZWwgKGVpdGhlciBhIHZhbHVlIHRoYXQgd2FzXG4gKiBzZW50IG9yIGB7QGxpbmsgbW9kdWxlOmNzcC5DTE9TRUR8Q0xPU0VEfWApLiBJZiB0aGUgY2FsbGJhY2sgaXNuJ3QgcHJlc2VudCxcbiAqIG5vdGhpbmcgd2lsbCBoYXBwZW4gYWZ0ZXIgdGhlIHZhbHVlIGlzIHRha2VuLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuT3BDYWxsYmFja30gW2NhbGxiYWNrXSBBIGZ1bmN0aW9uIHRoYXQgZ2V0cyBpbnZva2VkIHdoZW4gYVxuICogICAgIHZhbHVlIGlzIG1hZGUgYXZhaWxhYmxlIHRvIGJlIHJlY2VpdmVkICh0aGlzIHZhbHVlIG1heSBiZVxuICogICAgIGB7QGxpbmsgbW9kdWxlOmNzcC5DTE9TRUR8Q0xPU0VEfWAgaWYgdGhlIGNoYW5uZWwgY2xvc2VzIHdpdGggbm9cbiAqICAgICBhdmFpbGFibGUgdmFsdWUpLiBUaGUgZnVuY3Rpb24gY2FuIHRha2Ugb25lIHBhcmFtZXRlciwgd2hpY2ggaXMgdGhlIHZhbHVlXG4gKiAgICAgdGhhdCBpcyByZWNlaXZlZCBmcm9tIHRoZSBjaGFubmVsLlxuICovXG5mdW5jdGlvbiByZWN2QXN5bmMoY2hhbm5lbCwgY2FsbGJhY2sgPSAoKSA9PiB7fSkge1xuICBjb25zdCByZXN1bHQgPSBoYW5kbGVSZWN2KGNoYW5uZWwsIG9wSGFuZGxlcihjYWxsYmFjaykpO1xuICBpZiAocmVzdWx0ICYmIGNhbGxiYWNrKSB7XG4gICAgY2FsbGJhY2socmVzdWx0LnZhbHVlKTtcbiAgfVxufVxuXG4vKipcbiAqIFNlbmRzIGEgdmFsdWUgdG8gYSBjaGFubmVsLCBibG9ja2luZyB0aGUgYXN5bmMgZnVuY3Rpb24gdW50aWwgdGhhdCB2YWx1ZSBpc1xuICogcmVjZWl2ZWQgZnJvbSB0aGUgY2hhbm5lbCBieSBhIGRpZmZlcmVudCBmdW5jdGlvbiAob3IgdW50aWwgdGhlIGNoYW5uZWxcbiAqIGNsb3NlcykuXG4gKlxuICogQSB2YWx1ZSBpcyBhbHdheXMgc2VudCB0byB0aGUgY2hhbm5lbCwgYnV0IGlmIHRoYXQgdmFsdWUgaXNuJ3Qgc3BlY2lmaWVkIGJ5XG4gKiB0aGUgc2Vjb25kIHBhcmFtZXRlciwgaXQgaXMgYHVuZGVmaW5lZGAuIEFueSB2YWx1ZSBtYXkgYmUgc2VudCB0byBhIGNoYW5uZWwsXG4gKiB3aXRoIHRoZSBzb2xlIGV4Y2VwdGlvbiBvZiB0aGUgc3BlY2lhbCB2YWx1ZVxuICogYHtAbGluayBtb2R1bGU6Y3NwLkNMT1NFRHxDTE9TRUR9YC5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uICptdXN0KiBiZSBjYWxsZWQgZnJvbSB3aXRoaW4gYW4gYXN5bmMgZnVuY3Rpb24gYW5kIGFzIHBhcnQgb2ZcbiAqIGFuIGBhd2FpdGAgZXhwcmVzc2lvbi5cbiAqXG4gKiBXaGVuIGBzZW5kYCBpcyBjb21wbGV0ZWQgYW5kIGl0cyBmdW5jdGlvbiB1bmJsb2NrcywgaXRzIGBhd2FpdGAgZXhwcmVzc2lvblxuICogZXZhbHVhdGVzIHRvIGEgc3RhdHVzIGJvb2xlYW4gdGhhdCBpbmRpY2F0ZXMgd2hhdCBjYXVzZWQgdGhlIGZ1bmN0aW9uIHRvXG4gKiB1bmJsb2NrLiBUaGF0IHZhbHVlIGlzIGB0cnVlYCBpZiB0aGUgc2VudCB2YWx1ZSB3YXMgc3VjY2Vzc2Z1bGx5IHRha2VuIGJ5XG4gKiBhbm90aGVyIHByb2Nlc3MsIG9yIGBmYWxzZWAgaWYgdGhlIHVuYmxvY2tpbmcgaGFwcGVuZWQgYmVjYXVzZSB0aGUgdGFyZ2V0XG4gKiBjaGFubmVsIGNsb3NlZC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICogQHBhcmFtIHsqfSBbdmFsdWVdIFRoZSB2YWx1ZSBiZWluZyBwdXQgb250byB0aGUgY2hhbm5lbC5cbiAqIEByZXR1cm4ge1Byb21pc2U8Ym9vbGVhbj59IEEgcHJvbWlzZSB0aGF0IHdpbGwgcmVzb2x2ZSB0byBgdHJ1ZWAgb3IgYGZhbHNlYFxuICogICAgIGRlcGVuZGluZyBvbiB3aGV0aGVyIHRoZSBwdXQgdmFsdWUgaXMgYWN0dWFsbHkgdGFrZW4uXG4gKi9cbmZ1bmN0aW9uIHNlbmQoY2hhbm5lbCwgdmFsdWUpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgIHNlbmRBc3luYyhjaGFubmVsLCB2YWx1ZSwgcmVzb2x2ZSk7XG4gIH0pO1xufVxuXG4vKipcbiAqIFJlY2VpdmVzIGEgdmFsdWUgZnJvbSB0aGlzIGNoYW5uZWwsIGJsb2NraW5nIHRoZSBhc3luYyBmdW5jdGlvbiB1bnRpbCBhIHZhbHVlXG4gKiBiZWNvbWVzIGF2YWlsYWJsZSB0byBiZSByZWNlaXZlZCAob3IgdW50aWwgdGhlIGNoYW5uZWwgY2xvc2VzIHdpdGggbm8gbW9yZVxuICogdmFsdWVzIG9uIGl0IHRvIGJlIHJlY2VpdmVkKS5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uICptdXN0KiBiZSBjYWxsZWQgZnJvbSB3aXRoaW4gYW4gYXN5bmMgZnVuY3Rpb24gYW5kIGFzIHBhcnQgb2ZcbiAqIGFuIGBhd2FpdGAgZXhwcmVzc2lvbi5cbiAqXG4gKiBXaGVuIGByZWNlaXZlYCBpcyBjb21wbGV0ZWQgYW5kIGl0cyBmdW5jdGlvbiB1bmJsb2NrcywgaXRzIGBhd2FpdGAgZXhwcmVzc2lvblxuICogZXZhbHVhdGVzIHRvIHRoZSBhY3R1YWwgdmFsdWUgdGhhdCB3YXMgcmVjZWl2ZWQuIElmIHRoZSB0YXJnZXQgY2hhbm5lbFxuICogY2xvc2VkLCB0aGVuIGFsbCBvZiB0aGUgdmFsdWVzIGFscmVhZHkgcGxhY2VkIG9udG8gaXQgYXJlIHJlc29sdmVkIGJ5XG4gKiBgcmVjZWl2ZWAgYXMgbm9ybWFsLCBhbmQgb25jZSBubyBtb3JlIHZhbHVlcyBhcmUgYXZhaWxhYmxlLCB0aGUgc3BlY2lhbCB2YWx1ZVxuICogYHtAbGluayBtb2R1bGU6Y3NwLkNMT1NFRHxDTE9TRUR9YCBpcyByZXR1cm5lZC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICogQHJldHVybiB7UHJvbWlzZX0gQSBwcm9taXNlIHRoYXQgd2lsbCByZXNvbHZlIHRvIHRoZSB2YWx1ZSByZWNlaXZlZCBmcm9tIHRoZVxuICogICAgIGNoYW5uZWwgb25jZSB0aGF0IHJlY2VpdmUgaXMgY29tcGxldGVkLiBJZiB0aGUgY2hhbm5lbCBjbG9zZXMgd2l0aG91dCBhXG4gKiAgICAgdmFsdWUgYmVpbmcgbWFkZSBhdmFpbGFibGUsIHRoaXMgd2lsbCByZXNvbHZlIHRvXG4gKiAgICAgYHtAbGluayBtb2R1bGU6Y3NwLkNMT1NFRHxDTE9TRUR9YC5cbiAqL1xuZnVuY3Rpb24gcmVjdihjaGFubmVsKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICByZWN2QXN5bmMoY2hhbm5lbCwgcmVzb2x2ZSk7XG4gIH0pO1xufVxuXG4vKipcbiAqIFJlY2VpdmVzIGEgdmFsdWUgZnJvbSBhIGNoYW5uZWwsIGJsb2NraW5nIHRoZSBhc3luYyBmdW5jdGlvbiB1bnRpbCBhIHZhbHVlXG4gKiBiZWNvbWVzIGF2YWlsYWJsZSB0byBiZSByZWNlaXZlZCAob3IgdW50aWwgdGhlIGNoYW5uZWwgY2xvc2VzIHdpdGggbm8gbW9yZVxuICogdmFsdWVzIG9uIGl0IHRvIGJlIHJlY2VpdmVkKS4gSWYgdGhlIHJlY2VpdmVkIHZhbHVlIGlzIGFuIGVycm9yIG9iamVjdCwgdGhhdFxuICogZXJyb3IgaXMgdGhyb3duIGF0IHRoYXQgcG9pbnQuXG4gKlxuICogVGhpcyBmdW5jdGlvbiAqbXVzdCogYmUgY2FsbGVkIGZyb20gd2l0aGluIGFuIGFzeW5jIGZ1bmN0aW9uIGFuZCBhcyBwYXJ0IG9mXG4gKiBhbiBgYXdhaXRgIGV4cHJlc3Npb24uXG4gKlxuICogSXQgZnVuY3Rpb25zIGluIGV2ZXJ5IHdheSBsaWtlIGB7QGxpbmsgbW9kdWxlOmNzcC5yZWN2fHJlY3Z9YCAqZXhjZXB0KiBpbiB0aGVcbiAqIGNhc2UgdGhhdCB0aGUgdmFsdWUgb24gdGhlIGNoYW5uZWwgaXMgYW4gb2JqZWN0IHRoYXQgaGFzIGBFcnJvci5wcm90b3R5cGVgIGluXG4gKiBpdHMgcHJvdG90eXBlIGNoYWluIChhbnkgYnVpbHQtaW4gZXJyb3IsIGFueSBwcm9wZXJseS1jb25zdHJ1Y3RlZCBjdXN0b21cbiAqIGVycm9yKS4gSWYgdGhhdCBoYXBwZW5zLCB0aGUgZXJyb3IgaXMgdGhyb3duLCB3aGljaCB3aWxsIGNhdXNlIHRoZSByZXR1cm5lZFxuICogcHJvbWlzZSB0byBiZSByZWplY3RlZCB3aXRoIHRoZSBlcnJvci4gSXQgY2FuIHRoZW4gYmUgaGFuZGxlZCB1cCB0aGUgcHJvbWlzZVxuICogY2hhaW4gbGlrZSBhbnkgb3RoZXIgcmVqZWN0ZWQgcHJvbWlzZS5cbiAqXG4gKiBgdGFrZU9yVGhyb3dgIGlzIHJvdWdobHkgZXF1aXZhbGVudCB0bzpcbiAqXG4gKiBgYGBcbiAqIGNvbnN0IHZhbHVlID0gYXdhaXQgcmVjdihjaCk7XG4gKiBpZiAoRXJyb3IucHJvdG90eXBlLmlzUHJvdG90eXBlT2YodmFsdWUpKSB7XG4gKiAgIHRocm93IHZhbHVlO1xuICogfVxuICogYGBgXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqIEByZXR1cm4ge1Byb21pc2V9IEEgcHJvbWlzZSB0aGF0IHdpbGwgcmVzb2x2ZSB0byB0aGUgdmFsdWUgdGFrZW4gZnJvbSB0aGVcbiAqICAgICBjaGFubmVsIG9uY2UgdGhhdCB0YWtlIGlzIGNvbXBsZXRlZC4gSWYgdGhlIGNoYW5uZWwgY2xvc2VzIHdpdGhvdXQgYVxuICogICAgIHZhbHVlIGJlaW5nIG1hZGUgYXZhaWxhYmxlLCB0aGlzIHdpbGwgcmVzb2x2ZSB0b1xuICogICAgIGB7QGxpbmsgbW9kdWxlOmNzcC5DTE9TRUR8Q0xPU0VEfWAuIElmIHRoZSB0YWtlbiB2YWx1ZSBpcyBhbiBlcnJvciwgdGhlXG4gKiAgICAgcHJvbWlzZSB3aWxsIGluc3RlYWQgYmUgcmVqZWN0ZWQgd2l0aCB0aGUgZXJyb3Igb2JqZWN0IGFzIHRoZSByZWFzb24uXG4gKi9cbmZ1bmN0aW9uIHJlY3ZPclRocm93KGNoYW5uZWwpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICByZWN2QXN5bmMoY2hhbm5lbCwgcmVzdWx0ID0+IHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmlzUHJvdG90eXBlT2YuY2FsbChFcnJvci5wcm90b3R5cGUsIHJlc3VsdCkpIHtcbiAgICAgICAgcmVqZWN0KHJlc3VsdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuXG4vKipcbiAqIENsb3NlcyB0aGUgY2hhbm5lbCwgaWYgaXQgaXNuJ3QgYWxyZWFkeSBjbG9zZWQuIFRoaXMgaW1tZWRpYXRlbHkgcmV0dXJucyBhbnlcbiAqIGJ1ZmZlcmVkIHZhbHVlcyB0byBwZW5kaW5nIHJlY2VpdmVzLiBJZiB0aGVyZSBhcmUgbm8gYnVmZmVyZWQgdmFsdWVzIChvciBpZlxuICogdGhleSd2ZSBhbHJlYWR5IGJlZW4gdGFrZW4gYnkgb3RoZXIgcmVjZWl2ZXMpLCB0aGVuIGFsbCBvZiB0aGUgcmVzdCBvZiB0aGVcbiAqIHJlY2VpdmVzIGFyZSBjb21wbGV0ZWQgd2l0aCB0aGUgdmFsdWUgb2YgYHtAbGluayBtb2R1bGU6Y3NwLkNMT1NFRHxDTE9TRUR9YC5cbiAqIEFueSBwZW5kaW5nIHNlbmRzIGFyZSBjb21wbGV0ZWQgd2l0aCB0aGUgdmFsdWUgb2YgYGZhbHNlYC5cbiAqXG4gKiBOb3RlIHRoYXQgdGhlIGJ1ZmZlciBpcyBub3QgZW1wdGllZCBpZiB0aGVyZSBhcmUgc3RpbGwgdmFsdWVzIHJlbWFpbmluZyBhZnRlclxuICogYWxsIG9mIHRoZSBwZW5kaW5nIHJlY2VpdmVzIGhhdmUgYmVlbiBoYW5kbGVkLiBUaGUgY2hhbm5lbCB3aWxsIHN0aWxsIHByb3ZpZGVcbiAqIHRob3NlIHZhbHVlcyB0byBhbnkgZnV0dXJlIHJlY2VpdmVzLCB0aG91Z2ggbm8gbmV3IHZhbHVlcyBtYXkgYmUgYWRkZWQgdG8gdGhlXG4gKiBjaGFubmVsLiBPbmNlIHRoZSBidWZmZXIgaXMgZGVwbGV0ZWQsIGFueSBmdXR1cmUgcmVjZWl2ZXMgd2lsbCByZXR1cm5cbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC5DTE9TRUR8Q0xPU0VEfWAuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5DaGFubmVsfSBjaGFubmVsIFRoZSBjaGFubmVsIHRvIGJlIGNsb3NlZC5cbiAqL1xuZnVuY3Rpb24gY2xvc2UoY2hhbm5lbCkge1xuICBjbG9zZUltcGwoY2hhbm5lbCk7XG59XG5cbmV4cG9ydCB7XG4gIENMT1NFRCxcbiAgREVGQVVMVCxcbiAgY2hhbixcbiAgdGltZWRDaGFuLFxuICB0cmFuc0NoYW4sXG4gIGlzQ2xvc2VkLFxuICBpc0J1ZmZlcmVkLFxuICBpc1RpbWVkLFxuICBzZW5kQXN5bmMsXG4gIHJlY3ZBc3luYyxcbiAgc2VsZWN0QXN5bmMsXG4gIHNlbmQsXG4gIHJlY3YsXG4gIHJlY3ZPclRocm93LFxuICBzZWxlY3QsXG4gIGNsb3NlLFxuICB2YWx1ZSxcbiAgY2hhbm5lbFxufTtcblxuLyoqXG4gKiBVc2VkIGJ5IGNoYW5uZWxzIHRvIHRyYWNrIGV4ZWN1dGlvbiBvZiBvcGVyYXRpb25zIChgc2VuZGAsIGByZWN2YCwgYW5kXG4gKiBgc2VsZWN0YCkuIFRoZXkgcHJvdmlkZSB0d28gcGllY2VzIG9mIGluZm9ybWF0aW9uOiB0aGUgZnVuY3Rpb24gdG8gY2FsbCB3aGVuXG4gKiBhIGBzZW5kYCBvciBgcmVjdmAgdW5ibG9ja3MgKGJlY2F1c2UgYSB2YWx1ZSBnaXZlbiB0byBzZW5kIGhhcyBiZWVuIHJlY2VpdmVkLFxuICogb3IgYSBgcmVjdmAgaGFzIGFjY2VwdGVkIGEgdmFsdWUgdGhhdCBoYXMgYmVlbiBzZW50KSBhbmQgd2hldGhlciBvciBub3QgdGhlXG4gKiBoYW5kbGVyIGlzIHN0aWxsIGFjdGl2ZS5cbiAqXG4gKiBUaGUgZnVuY3Rpb24gaXMgYSBjYWxsYmFjayB0aGF0IGFjdHVhbGx5IGRlZmluZXMgdGhlIGRpZmZlcmVuY2UgYmV0d2VlblxuICogYHtAbGluayBtb2R1bGU6Y3NwLnNlbmR8c2VuZH1gIC8gYHtAbGluayBtb2R1bGU6Y3NwLnJlY3Z8cmVjdn1gIC9cbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC5zZWxlY3R8c2VsZWN0fWAgYW5kXG4gKiBge0BsaW5rIG1vZHVsZTpjc3Auc2VuZEFzeW5jfHNlbmRBc3luY31gIC9cbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC5yZWN2QXN5bmN8cmVjdkFzeW5jfWAgL1xuICogYHtAbGluayBtb2R1bGU6Y3NwLnNlbGVjdEFzeW5jfHNlbGVjdEFzeW5jfWA6IHdoaWxlIHRoZSB1bmJsb2NrZWQgY2FsbHMgdXNlXG4gKiB0aGUgY2FsbGJhY2sgcGFzc2VkIHRvIHRoZSBmdW5jdGlvbiwgYHNlbmRgLCBgcmVjdmAsIGFuZCBgc2VsZWN0YCBzaW1wbHlcbiAqIGNvbnRpbnVlIHRoZSBwcm9jZXNzIHdoZXJlIGl0IGxlZnQgb2ZmLiAoVGhpcyBpcyB3aHkgYHNlbmRgLCBgcmVjdmAsIGFuZFxuICogYHNlbGVjdGAgb25seSB3b3JrIGluc2lkZSBgYXN5bmNgIGZ1bmN0aW9ucyB3aXRoIGBhd2FpdGAgaWYgdGhlIHJldHVybiB2YWx1ZVxuICogaXMgbmVlZGVkLCBiZWNhdXNlIG90aGVyd2lzZSB0aGVyZSdzIG5vIHByb2Nlc3MgdG8gY29udGludWUuKVxuICpcbiAqIFRoaXMgZnVuY3Rpb24gaXMgcHJvdmlkZWQgYXMgdGhlIHJldHVybiB2YWx1ZSBvZiB0aGUgYGNvbW1pdGAgbWV0aG9kLiBDYWxsaW5nXG4gKiBgY29tbWl0YCBoYXMgbm8gZXh0cmEgZWZmZWN0IHdpdGggYHNlbmRgIGFuZCBgcmVjdmAgb3BlcmF0aW9ucywgYnV0IGZvclxuICogYHNlbGVjdGAsIGl0IGFsc28gbWFya3MgdGhlIGhhbmRsZXIgYXMgbm8gbG9uZ2VyIGJlaW5nIGFjdGl2ZS4gVGhpcyBtZWFuc1xuICogdGhhdCBvbmx5IG9uZSBvZiB0aGUgb3BlcmF0aW9ucyBwYXNzZWQgdG8gc2VsZWN0IGNhbiBiZSBjb21wbGV0ZWQsIGJlY2F1c2VcbiAqIGFmdGVyIHRoZSBmaXJzdCBvbmUsIHRoZSBoYW5kbGVyIGlzIG5vIGxvbmdlciBhY3RpdmUgYW5kIHdpbGwgbm90IGJlIGFsbG93ZWRcbiAqIHRvIHByb2Nlc3MgYSBzZWNvbmQgb3BlcmF0aW9uLlxuICpcbiAqIElmIGEgYHNlbmRgIG9yIGByZWN2YCAob3IgZXF1aXZhbGVudCBgc2VsZWN0YCBvcGVyYXRpb24pIGNhbm5vdCBiZVxuICogaW1tZWRpYXRlbHkgY29tcGxldGVkIGJlY2F1c2UgdGhlcmUgaXNuJ3QgYSBjb3JyZXNwb25kaW5nIHBlbmRpbmcgYHJlY3ZgIG9yXG4gKiBgc2VuZGAsIHRoZSBoYW5kbGVyIGlzIHF1ZXVlZCB0byBiZSBydW4gd2hlbiBhIG5ldyBgcmVjdmAgb3IgYHNlbmRgIGJlY29tZXNcbiAqIGF2YWlsYWJsZS5cbiAqXG4gKiBAdHlwZWRlZiBIYW5kbGVyXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcC9jaGFubmVsXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IGFjdGl2ZSBXaGV0aGVyIG9yIG5vdCB0aGUgb3BlcmF0aW9uIGlzIHN0aWxsIGFjdGl2ZS4gQW5cbiAqICAgICBpbmFjdGl2ZSBvcGVyYXRpb24gaXMgbm90IHNlcnZpY2VkIGFuZCB3aWxsIGJlIGNsZWFyZWQgZnJvbSB0aGUgcXVldWUgb25cbiAqICAgICB0aGUgbmV4dCBkaXJ0eSBvcGVyYXRpb24gcHVyZ2UuXG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBjb21taXQgTWFya3MgdGhlIGhhbmRsZXIgYXMgaW5hY3RpdmUgKHNvIGl0IGRvZXNuJ3QgcnVuXG4gKiAgICAgdHdpY2UpIGFuZCByZXR1cm5zIHRoZSBjYWxsYmFjayB0byBiZSBydW4gd2hlbiB0aGUgb3BlcmF0aW9uIGNvbXBsZXRlcy5cbiAqIEBwcml2YXRlXG4gKi9cblxuLyoqXG4gKiBBIGNhbGxiYWNrIGZ1bmN0aW9uIHJ1biB3aGVuIGEgYHNlbmRgIG9yIGByZWN2YCBvcGVyYXRpb24gY29tcGxldGVzLlxuICpcbiAqIEBjYWxsYmFjayBIYW5kbGVyQ2FsbGJhY2tcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwL2NoYW5uZWxcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHByb3ZpZGVkIGJ5IHRoZSBjaGFubmVsLiBJbiBhIGByZWN2YCwgdGhpcyBpcyB0aGVcbiAqICAgICB2YWx1ZSByZWNlaXZlZCBmcm9tIHRoZSBjaGFubmVsLiBJbiBhIGBzZW5kYCwgdGhpcyBpcyBgdHJ1ZWAgZm9yIGFcbiAqICAgICBzdWNjZXNzZnVsIHNlbmQgYW5kIGBmYWxzZWAgaWYgdGhlIGNoYW5uZWwgaXMgY2xvc2VkIGJlZm9yZSB0aGUgc2VuZCBjYW5cbiAqICAgICBjb21wbGV0ZS5cbiAqIEBwcml2YXRlXG4gKi9cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG5pbXBvcnQgeyBib3gsIGhhbmRsZVNlbmQsIGhhbmRsZVJlY3YsIGlzQm94IH0gZnJvbSBcIi4vaGFuZGxlclwiO1xuXG4vKipcbiAqIFRoZSBuYW1lIG9mIHRoZSBjaGFubmVsIHJldHVybmVkIGZyb20gYGF3YWl0XG4gKiB7QGxpbmsgbW9kdWxlOmNzcC5zZWxlY3R8c2VsZWN0fWAgb3Igc2VudCB0byB0aGUgY2FsbGJhY2sgaW5cbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC5zZWxlY3RBc3luY3xzZWxlY3RBc3luY31gIHdoZW4gdGhlIGRlZmF1bHQgaXMgcmV0dXJuZWQgYXNcbiAqIGl0cyB2YWx1ZS5cbiAqXG4gKiBUaGlzIG9ubHkgaGFwcGVucyB3aGVuIGFuIGB7QGxpbmsgbW9kdWxlOmNzcC5zZWxlY3R8c2VsZWN0fSAvXG4gKiB7QGxpbmsgbW9kdWxlOmNzcC5zZWxlY3RBc3luY3xzZWxlY3RBc3luY31gIGNhbGwgaXMgcGVyZm9ybWVkLCBhbGwgb3BlcmF0aW9uc1xuICogYXJlIGluaXRpYWxseSBibG9ja2luZywgYW5kIGEgYGRlZmF1bHRgIG9wdGlvbiBpcyBzZW50LiBUaGUgaW1tZWRpYXRlXG4gKiByZXNwb25zZSBpbiB0aGF0IHNpdHVhdGlvbiBpcyBgeyB2YWx1ZTogb3B0aW9ucy5kZWZhdWx0LCBjaGFubmVsOiBERUZBVUxUIH1gLlxuICpcbiAqIEB0eXBlIHtTeW1ib2x9XG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICovXG5jb25zdCBERUZBVUxUID0gU3ltYm9sKFwiREVGQVVMVFwiKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGhhbmRsZXIgdXNlZCBmb3IgYHNlbGVjdGAgb3BlcmF0aW9ucy5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcC9jaGFubmVsXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AvY2hhbm5lbC5Cb3h9IGFjdGl2ZSBBIGJveGVkIHZhbHVlIGluZGljYXRpbmcgd2hldGhlciB0aGVcbiAqICAgICBoYW5kbGVyIGlzIHZhbGlkLiBUaGlzIGlzIGEgYm94ZWQgdmFsdWUgYmVjYXVzZSB0aGUgc2VsZWN0LWhhbmRsaW5nIGNvZGVcbiAqICAgICBuZWVkcyB0byBtYW5pcHVsYXRlIGl0IGRpcmVjdGx5LlxuICogQHBhcmFtIHttb2R1bGU6Y3NwL2NoYW5uZWwuSGFuZGxlckNhbGxiYWNrfSBmbiBUaGUgY2FsbGJhY2sgdG8gYmUgcnVuIHdoZW5cbiAqICAgICAoYW5kIGlmKSB0aGUgb3BlcmF0aW9uIGNvbXBsZXRlcy5cbiAqIEByZXR1cm4ge21vZHVsZTpjc3AvY2hhbm5lbC5IYW5kbGVyfSBUaGUgbmV3IGhhbmRsZXIuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBzZWxlY3RIYW5kbGVyKGFjdGl2ZSwgZm4pIHtcbiAgcmV0dXJuIE9iamVjdC5jcmVhdGUobnVsbCwge1xuICAgIGFjdGl2ZToge1xuICAgICAgZ2V0KCkge1xuICAgICAgICByZXR1cm4gYWN0aXZlLnZhbHVlO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBjb21taXQ6IHtcbiAgICAgIHZhbHVlOiAoKSA9PiB7XG4gICAgICAgIGFjdGl2ZS52YWx1ZSA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gZm47XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgcmFuZG9tbHkgc2h1ZmZsZWQgYXJyYXkgY29udGFpbmluZyBvbmUgb2YgZWFjaCBpbnRlZ2VyIHZhbHVlIGZyb21cbiAqIGAwYCB0byBhbiB1cHBlciBsaW1pdC4gSXQgaXMgdXNlZCB0byByYW5kb21seSBzZWxlY3QgYSBjaGFubmVsIHRvIGJlIGFjdGl2ZVxuICogd2hlbiBtdWx0aXBsZXMgdW5ibG9jayBpbiBhIGBzZWxlY3RgIG9wZXJhdGlvbi5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcC9jaGFubmVsXG4gKiBAcGFyYW0ge251bWJlcn0gdXBwZXIgVGhlIHVwcGVyIGxpbWl0IG9mIHRoZSBhcnJheSB2YWx1ZXMsIGV4Y2x1c2l2ZS5cbiAqIEByZXR1cm4ge251bWJlcltdfSBBbiBhcnJheSBvZiBpbnRlZ2VycyBmcm9tIGAwYCB0byBgdXBwZXIgLSAxYCwgc2h1ZmZsZWRcbiAqICAgICBpbnRvIGEgcmFuZG9tIG9yZGVyLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gcmFuZG9tQXJyYXkodXBwZXIpIHtcbiAgY29uc3QgYXJyYXkgPSBbXTtcbiAgZm9yIChsZXQgayA9IDA7IGsgPCB1cHBlcjsgaysrKSB7XG4gICAgYXJyYXkucHVzaChrKTtcbiAgfVxuICBmb3IgKGxldCBqID0gdXBwZXIgLSAxOyBqID4gMDsgai0tKSB7XG4gICAgY29uc3QgaSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChqICsgMSkpO1xuICAgIGNvbnN0IHRlbXAgPSBhcnJheVtqXTtcbiAgICBhcnJheVtqXSA9IGFycmF5W2ldO1xuICAgIGFycmF5W2ldID0gdGVtcDtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbi8qKlxuICogQSByZXN1bHQgdGhhdCBjb21lcyBmcm9tIGBzZWxlY3RgIG9wZXJhdGlvbnMuXG4gKlxuICogQHR5cGVkZWYgU2VsZWN0UmVzdWx0XG4gKiBAcHJvcGVydHkgeyp9IHZhbHVlIElmIHRoZSBgc2VsZWN0YCBvcGVyYXRpb24gcmVzdWx0ZWQgaW4gYSByZWNlaXZlLCB0aGlzIGlzXG4gKiAgICAgdGhlIHZhbHVlIHJlY2VpdmVkIGZyb20gdGhlIGNoYW5uZWwuIElmIGl0IHJlc3VsdGVkIGluIGEgc2VuZCwgdGhpcyBpc1xuICogICAgIGB0cnVlYCBmb3IgYSBzdWNjZXNzZnVsIHNlbmQgYW5kIGBmYWxzZWAgaWYgdGhlIGNoYW5uZWwgY2xvc2VkIGZpcnN0LlxuICogQHByb3BlcnR5IHttb2R1bGU6Y3NwLkNoYW5uZWx9IGNoYW5uZWwgVGhlIGNoYW5uZWwgdXBvbiB3aGljaCB0aGUgc2VsZWN0ZWRcbiAqICAgICBvcGVyYXRpb24gaGFwcGVuZWQuXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICovXG5cbi8qKlxuICogQ3JlYXRlcyBhIHNlbGVjdCByZXN1bHQgZnJvbSBpdHMgY29tcG9uZW50IHByb3BlcnRpZXMuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3AvY2hhbm5lbFxuICogQHBhcmFtIHsqfSB2YWx1ZSBJZiB0aGUgYHNlbGVjdGAgb3BlcmF0aW9uIHJlc3VsdGVkIGluIGEgcmVjZWl2ZSwgdGhpcyBpcyB0aGVcbiAqICAgICB2YWx1ZSByZWNlaXZlZCBmcm9tIHRoZSBjaGFubmVsLiBJZiBpdCByZXN1bHRlZCBpbiBhIHNlbmQsIHRoaXMgaXMgYHRydWVgXG4gKiAgICAgZm9yIGEgc3VjY2Vzc2Z1bCBzZW5kIGFuZCBgZmFsc2VgIGlmIHRoZSBjaGFubmVsIGNsb3NlZCBmaXJzdC5cbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5DaGFubmVsfSBjaGFubmVsIFRoZSBjaGFubmVsIHVwb24gd2hpY2ggdGhlIHNlbGVjdGVkXG4gKiAgICAgb3BlcmF0aW9uIGhhcHBlbmVkLlxuICogQHJldHVybiB7bW9kdWxlOmNzcC5TZWxlY3RSZXN1bHR9IFRoZSBwcm9wZXJ0aWVzIHdyYXBwZWQgaW50byBhbiBvYmplY3QgZm9yXG4gKiAgICAgb3V0cHV0LlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gc2VsZWN0UmVzdWx0KHZhbHVlLCBjaGFubmVsKSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5jcmVhdGUobnVsbCksIHsgdmFsdWUsIGNoYW5uZWwgfSk7XG59XG5cbi8qKlxuICogQ29tcGxldGVzIHRoZSBmaXJzdCBvcGVyYXRpb24gYW1vbmcgdGhlIHByb3ZpZGVkIG9wZXJhdGlvbnMgdGhhdCBjb21lc1xuICogYXZhaWxhYmxlLCB3aXRob3V0IGJsb2NraW5nLlxuICpcbiAqIFRoaXMgbWVhbnMgdGhhdCBhIGNhbGwgdG8gYHNlbGVjdEFzeW5jYCBkb2VzIG5vdCBnbyBpbnRvIGFuIGBhd2FpdGBcbiAqIGV4cHJlc3Npb24sIGFuZCBpdCBpcyBub3QgbmVjZXNzYXJ5IHRvIHVzZSBpdCBpbnNpZGUgYSBwcm9jZXNzLiBSYXRoZXIgdGhhblxuICogYmxvY2tpbmcgdW50aWwgYW4gb3BlcmF0aW9uIGNvbXBsZXRlcywgdGhpcyBvbmUgcmV0dXJucyBpbW1lZGlhdGVseSBhbmQgdGhlblxuICogaW52b2tlcyB0aGUgY2FsbGJhY2sgKGlmIHByb3ZpZGVkKSBhcyBzb29uIGFzIG9uZSBvZiB0aGUgc3VwcGxpZWQgb3BlcmF0aW9uc1xuICogY29tcGxldGVzLiBJdCBjYW4gYmUgcmVnYXJkZWQgYXMgYSBub24tYmxvY2tpbmcgdmVyc2lvbiBvZlxuICogYHtAbGluayBtb2R1bGU6Y3NwLnNlbGVjdHxzZWxlY3R9YC5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHVzZXMgYW4gb3BlcmF0aW9ucyBsaXN0IHRoYXQncyBpZGVudGljYWwgdG8gdGhlIG9uZSB1c2VkIGJ5XG4gKiBge0BsaW5rIG1vZHVsZTpjc3Auc2VsZWN0fHNlbGVjdH1gLiBJdCdzIGFuIGFycmF5IG9mIHZhbHVlczsgaWYgYSB2YWx1ZSBpcyBhXG4gKiBjaGFubmVsLCB0aGVuIHRoYXQgb3BlcmF0aW9uIGlzIGEgdGFrZSBvbiB0aGF0IGNoYW5uZWwsIHdoaWxlIGlmIGl0J3MgYVxuICogdHdvLWVsZW1lbnQgYXJyYXkgb2YgY2hhbm5lbCBhbmQgdmFsdWUsIHRoZW4gdGhhdCBvcGVyYXRpb24gaXMgYSBwdXQgb2YgdGhhdFxuICogdmFsdWUgb250byB0aGF0IGNoYW5uZWwuIEFsbCBvcHRpb25zIHRoYXQgYXJlIGF2YWlsYWJsZSB0b1xuICogYHtAbGluayBtb2R1bGU6Y3NwLnNlbGVjdHxzZWxlY3R9YCBhcmUgYWxzbyBhdmFpbGFibGUgaGVyZS5cbiAqXG4gKiBUaGUgY2FsbGJhY2sgaXMgYSBmdW5jdGlvbiBvZiBvbmUgcGFyYW1ldGVyLCB3aGljaCBpbiB0aGlzIGNhc2UgaXMgYW4gb2JqZWN0XG4gKiB3aXRoIGB2YWx1ZWAgYW5kIGBjaGFubmVsYCBwcm9wZXJ0aWVzLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcGFyYW0ge09iamVjdFtdfSBvcGVyYXRpb25zIEEgY29sbGVjdGlvbiBvZiBlbGVtZW50cyB0aGF0IGNvcnJlc3BvbmQgdG8gcmVjdlxuICogICAgIGFuZCBzZW5kIG9wZXJhdGlvbnMuIEEgcmVjdiBvcGVyYXRpb24gaXMgc2lnbmlmaWVkIGJ5IGFuIGVsZW1lbnQgdGhhdCBpc1xuICogICAgIGEgY2hhbm5lbCAod2hpY2ggaXMgdGhlIGNoYW5uZWwgdG8gYmUgcmVjZWl2ZWQgZnJvbSkuIEEgc2VuZCBvcGVyYXRpb24gaXNcbiAqICAgICBzcGVjaWZpZWQgYnkgYW4gZWxlbWVudCB0aGF0IGlzIGl0c2VsZiBhIHR3by1lbGVtZW50IGFycmF5LCB3aGljaCBoYXMgYVxuICogICAgIGNoYW5uZWwgZm9sbG93ZWQgYnkgYSB2YWx1ZSAod2hpY2ggaXMgdGhlIGNoYW5uZWwgYW5kIHZhbHVlIHRvIGJlIHNlbnQpLlxuICogQHBhcmFtIHttb2R1bGU6Y3NwLlNlbGVjdENhbGxiYWNrfSBjYWxsYmFjayBBIGZ1bmN0aW9uIHRoYXQgZ2V0cyBpbnZva2VkIHdoZW5cbiAqICAgICBvbmUgb2YgdGhlIG9wZXJhdGlvbnMgY29tcGxldGVzLlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSBBbiBvcHRpb25hbCBvYmplY3Qgd2hpY2ggY2FuIGNoYW5nZSB0aGUgYmVoYXZpb3JcbiAqICAgICBvZiBgc2VsZWN0QXN5bmNgIHRocm91Z2ggdHdvIHByb3BlcnRpZXMuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnByaW9yaXR5PWZhbHNlXSBJZiBgdHJ1ZWAsIHRoZW4gdGhlIHByaW9yaXR5IG9mXG4gKiAgICAgb3BlcmF0aW9ucyB0byBjb21wbGV0ZSB3aGVuIG1vcmUgdGhhbiBvbmUgaXMgaW1tZWRpYXRlbHkgYXZhaWxhYmxlIGlzIGFcbiAqICAgICBwcmlvcml0eSBhY2NvcmRpbmcgdG8gcG9zaXRpb24gd2l0aGluIHRoZSBvcGVyYXRpb25zIGFycmF5IChlYXJsaWVyXG4gKiAgICAgcG9zaXRpb25zIGhhdmUgdGhlIGhpZ2hlciBwcmlvcml0eSkuIElmIGBmYWxzZWAgb3Igbm90IHByZXNlbnQsIHRoZVxuICogICAgIHByaW9ydHkgb2Ygb3BlcmF0aW9uIGNvbXBsZXRpb24gaXMgcmFuZG9tLlxuICogQHBhcmFtIHsqfSBbb3B0aW9ucy5kZWZhdWx0XSBJZiBzZXQgYW5kIGFsbCBvZiB0aGUgb3BlcmF0aW9ucyBpbml0aWFsbHlcbiAqICAgICBibG9jaywgdGhlIGBzZWxlY3RBc3luY2AgY2FsbHMgaXRzIGNhbGxiYWNrIGltbWVkaWF0ZWx5IHdpdGggdGhlIHZhbHVlIG9mXG4gKiAgICAgdGhpcyBvcHRpb24gKHRoZSBjaGFubmVsIHdpbGwgYmUgYHtAbGluayBtb2R1bGU6Y3NwLkRFRkFVTFR8REVGQVVMVH0pYC5cbiAqICAgICBJZiBub3Qgc2V0LCB0aGUgYHNlbGVjdEFzeW5jYCBjYWxsIHdpbGwgbm90IGNhbGwgaXRzIGNhbGxiYWNrIHVudGlsIG9uZVxuICogICAgIG9mIHRoZSBvcGVyYXRpb25zIGNvbXBsZXRlcyBhbmQgdGhhdCB2YWx1ZSBhbmQgY2hhbm5lbCB3aWxsIGJlIHRoZSBvbmVzXG4gKiAgICAgcmV0dXJuZWQuXG4gKi9cbmZ1bmN0aW9uIHNlbGVjdEFzeW5jKG9wcywgY2FsbGJhY2sgPSAoKSA9PiB7fSwgb3B0aW9ucyA9IHt9KSB7XG4gIGNvbnN0IGNvdW50ID0gb3BzLmxlbmd0aDtcbiAgaWYgKGNvdW50ID09PSAwKSB7XG4gICAgdGhyb3cgRXJyb3IoXCJzZWxlY3QgY2FsbGVkIHdpdGggbm8gb3BlcmF0aW9uc1wiKTtcbiAgfVxuXG4gIGNvbnN0IHByaW9yaXR5ID0gISFvcHRpb25zLnByaW9yaXR5O1xuICBjb25zdCBpbmRpY2VzID0gcHJpb3JpdHkgPyBbXSA6IHJhbmRvbUFycmF5KGNvdW50KTtcblxuICBjb25zdCBhY3RpdmUgPSBib3godHJ1ZSk7XG5cbiAgZnVuY3Rpb24gY3JlYXRlU2VsZWN0SGFuZGxlcihjaGFubmVsKSB7XG4gICAgcmV0dXJuIHNlbGVjdEhhbmRsZXIoYWN0aXZlLCB2YWx1ZSA9PiB7XG4gICAgICBjYWxsYmFjayhzZWxlY3RSZXN1bHQodmFsdWUsIGNoYW5uZWwpKTtcbiAgICB9KTtcbiAgfVxuXG4gIGxldCByZXN1bHQ7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgLy8gQ2hvb3NlIGFuIG9wZXJhdGlvbi4gSWYgYHByaW9yaXR5YCBpcyB0cnVlIHRoZW4gaXQncyB0aGUgbmV4dCBpbmRleCxcbiAgICAvLyBvdGhlcndpc2UgaXQncyByYW5kb21cbiAgICBjb25zdCBvcCA9IG9wc1twcmlvcml0eSA/IGkgOiBpbmRpY2VzW2ldXTtcbiAgICBsZXQgY2hhbm5lbCwgdmFsdWU7XG5cbiAgICAvLyBBcHBseSBldmVyeSBvcGVyYXRpb24gdG8gaXRzIGNoYW5uZWwsIG9uZSBhdCBhIHRpbWVcbiAgICBpZiAoQXJyYXkuaXNBcnJheShvcCkpIHtcbiAgICAgIFtjaGFubmVsLCB2YWx1ZV0gPSBvcDtcbiAgICAgIHJlc3VsdCA9IGhhbmRsZVNlbmQoY2hhbm5lbCwgdmFsdWUsIGNyZWF0ZVNlbGVjdEhhbmRsZXIoY2hhbm5lbCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjaGFubmVsID0gb3A7XG4gICAgICByZXN1bHQgPSBoYW5kbGVSZWN2KGNoYW5uZWwsIGNyZWF0ZVNlbGVjdEhhbmRsZXIoY2hhbm5lbCkpO1xuICAgIH1cblxuICAgIC8vIFdlIGNoZWNrIGZvciBib3ggaGVyZSBiZWNhdXNlIGEgYm94IGZyb20gYSBjaGFubmVsIGluZGljYXRlcyB0aGF0IHRoZVxuICAgIC8vIHZhbHVlIGlzIGltbWVkaWF0ZWx5IGF2YWlsYWJsZSAodGhhdCB0aGVyZSBpcyBubyBuZWVkIHRvIGJsb2NrIHRvIGdldCB0aGVcbiAgICAvLyB2YWx1ZSkuIElmIHRoaXMgaGFwcGVucywgd2UgZXhlY3V0ZSB0aGUgY2FsbGJhY2sgaW1tZWRpYXRlbHkgd2l0aCB0aGF0XG4gICAgLy8gdmFsdWUgYW5kIGNoYW5uZWwgYW5kIHN0b3AgcXVldWVpbmcgb3RoZXIgb3BlcmF0aW9ucy5cbiAgICBpZiAoaXNCb3gocmVzdWx0KSkge1xuICAgICAgY2FsbGJhY2soc2VsZWN0UmVzdWx0KHJlc3VsdC52YWx1ZSwgY2hhbm5lbCkpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgLy8gSWYgbm9uZSBvZiB0aGUgb3BlcmFldGlvbnMgaW1tZWRpYXRlbHkgcmV0dXJuZWQgdmFsdWVzICh0aGV5IGFyZSBhbGxcbiAgLy8gYmxvY2tlZCksIGFuZCB3ZSBoYXZlIHNldCBhIGRlZmF1bHQgY2hhbm5lbCBvcHRpb24sIHRoZW4gcmV0dXJuIHRoZSB2YWx1ZVxuICAvLyBpZiB0aGUgZGVmYXVsdCBjaGFubmVsIHJhdGhlciB0aGFuIHdhaXRpbmcgZm9yIHRoZSBxdWV1ZWQgb3BlcmF0aW9ucyB0b1xuICAvLyBjb21wbGV0ZS5cbiAgaWYgKFxuICAgICFpc0JveChyZXN1bHQpICYmXG4gICAgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9wdGlvbnMsIFwiZGVmYXVsdFwiKVxuICApIHtcbiAgICBpZiAoYWN0aXZlLnZhbHVlKSB7XG4gICAgICBhY3RpdmUudmFsdWUgPSBmYWxzZTtcbiAgICAgIGNhbGxiYWNrKHNlbGVjdFJlc3VsdChvcHRpb25zLmRlZmF1bHQsIERFRkFVTFQpKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBDb21wbGV0ZXMgdGhlIGZpcnN0IG9wZXJhdGlvbiBhbW9uZyB0aGUgcHJvdmlkZWQgb3BlcmF0aW9ucyB0aGF0IGNvbWVzXG4gKiBhdmFpbGFibGUsIGJsb2NraW5nIHRoZSBwcm9jZXNzIHVudGlsIHRoZW4uXG4gKlxuICogYG9wZXJhdGlvbnNgIGlzIGFuIGFycmF5IHdob3NlIGVsZW1lbnRzIG11c3QgYmUgY2hhbm5lbHMgb3IgdHdvLWVsZW1lbnRcbiAqIHN1Yi1hcnJheXMgb2YgY2hhbm5lbHMgYW5kIHZhbHVlcywgaW4gYW55IGNvbWJpbmF0aW9uLiBBbiBvcGVyYXRpb24gdGhhdCBpcyBhXG4gKiBjaGFubmVsIGlzIGEgdGFrZSBvcGVyYXRpb24gb24gdGhhdCBjaGFubmVsLiBBbiBvcGVyYXRpb24gdGhhdCBpcyBhXG4gKiB0d28tZWxlbWVudCBhcnJheSBpcyBhIHB1dCBvcGVyYXRpb24gb24gdGhhdCBjaGFubmVsIHVzaW5nIHRoYXQgdmFsdWUuXG4gKiBFeGFjdGx5IG9uZSBvZiB0aGVzZSBvcGVyYXRpb25zIHdpbGwgY29tcGxldGUsIGFuZCBpdCB3aWxsIGJlIHRoZSBmaXJzdFxuICogb3BlcmF0aW9uIHRoYXQgdW5ibG9ja3MuXG4gKlxuICogVGhpcyBmdW5jdGlvbiAqbXVzdCogYmUgY2FsbGVkIGZyb20gd2l0aGluIGFuIGBhc3luY2AgZnVuY3Rpb24gYW5kIGFzIHBhcnQgb2ZcbiAqIGFuIGBhd2FpdGAgZXhwcmVzc2lvbiBpZiB0aGUgcmV0dXJuIHZhbHVlIGlzIG5lZWRlZC5cbiAqXG4gKiBXaGVuIGBzZWxlY3RgIGlzIGNvbXBsZXRlZCBhbmQgaXRzIHByb2Nlc3MgdW5ibG9ja3MsIGl0cyBgYXdhaXRgIGV4cHJlc3Npb25cbiAqIGV2YWx1YXRlcyB0byBhbiBvYmplY3Qgb2YgdHdvIHByb3BlcnRpZXMuIFRoZSBgdmFsdWVgIHByb3BlcnR5IGJlY29tZXNcbiAqIGV4YWN0bHkgd2hhdCB3b3VsZCBoYXZlIGJlZW4gcmV0dXJuZWQgYnkgdGhlIGVxdWl2YWxlbnQgYGF3YWl0IHB1dGAgb3IgYGF3YWl0XG4gKiB0YWtlYCBvcGVyYXRpb246IGEgYm9vbGVhbiBpbiB0aGUgY2FzZSBvZiBhIHB1dCwgb3IgdGhlIHRha2VuIHZhbHVlIGluIHRoZVxuICogY2FzZSBvZiBhIHRha2UuIFRoZSBgY2hhbm5lbGAgcHJvcGVydHkgaXMgc2V0IHRvIHRoZSBjaGFubmVsIHdoZXJlIHRoZVxuICogb3BlcmF0aW9uIGFjdHVhbGx5IHRvb2sgcGxhY2UuIFRoaXMgd2lsbCBiZSBlcXVpdmFsZW50IHRvIHRoZSBjaGFubmVsIGluIHRoZVxuICogYG9wZXJhdGlvbnNgIGFycmF5IHdoaWNoIGNvbXBsZXRlZCBmaXJzdCwgYWxsb3dpbmcgdGhlIHByb2Nlc3MgdG8gdW5ibG9jay5cbiAqXG4gKiBJZiB0aGVyZSBpcyBtb3JlIHRoYW4gb25lIG9wZXJhdGlvbiBhbHJlYWR5IGF2YWlsYWJsZSB0byBjb21wbGV0ZSB3aGVuIHRoZVxuICogY2FsbCB0byBgc2VsZWN0YCBpcyBtYWRlLCB0aGUgb3BlcmF0aW9uIHdpdGggdGhlIGhpZ2hlc3QgcHJpb3JpdHkgd2lsbCBiZSB0aGVcbiAqIG9uZSB0byBjb21wbGV0ZS4gUmVndWxhcmx5LCBwcmlvcml0eSBpcyBub24tZGV0ZXJtaW5pc3RpYyAoaS5lLiwgaXQncyBzZXRcbiAqIHJhbmRvbWx5KS4gSG93ZXZlciwgaWYgdGhlIG9wdGlvbnMgb2JqZWN0IGhhcyBhIGBwcmlvcml0eWAgdmFsdWUgc2V0IHRvXG4gKiBgdHJ1ZWAsIHByaW9yaXR5IHdpbGwgYmUgYXNzaWduZWQgaW4gdGhlIG9yZGVyIG9mIHRoZSBvcGVyYXRpb25zIGluIHRoZVxuICogc3VwcGxpZWQgYXJyYXkuXG4gKlxuICogSWYgYWxsIG9mIHRoZSBvcGVyYXRpb25zIG11c3QgYmxvY2sgKGkuZS4sIHRoZXJlIGFyZSBubyBwZW5kaW5nIHB1dHMgZm9yIHRha2VcbiAqIG9wZXJhdGlvbnMsIG9yIHRha2VzIGZvciBwdXQgb3BlcmF0aW9ucyksIGEgZGVmYXVsdCB2YWx1ZSBtYXkgYmUgcmV0dXJuZWQuXG4gKiBUaGlzIGlzIG9ubHkgZG9uZSBpZiB0aGVyZSBpcyBhIGBkZWZhdWx0YCBwcm9wZXJ0eSBpbiB0aGUgb3B0aW9ucyBvYmplY3QsIGFuZFxuICogdGhlIHZhbHVlIG9mIHRoYXQgcHJvcGVydHkgYmVjb21lcyB0aGUgdmFsdWUgcmV0dXJuZWQgYnkgYGF3YWl0IHNlbGVjdGAuIFRoZVxuICogY2hhbm5lbCBpcyBzZXQgdG8gdGhlIHNwZWNpYWwgdmFsdWUgYHtAbGluayBtb2R1bGU6Y3NwLkRFRkFVTFR8REVGQVVMVH1gLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcGFyYW0ge29iamVjdFtdfSBvcGVyYXRpb25zIEEgY29sbGVjdGlvbiBvZiBlbGVtZW50cyB0aGF0IGNvcnJlc3BvbmQgdG8gcmVjdlxuICogICAgIGFuZCBzZW5kIG9wZXJhdGlvbnMuIEEgcmVjdiBvcGVyYXRpb24gaXMgc2lnbmlmaWVkIGJ5IGFuIGVsZW1lbnQgdGhhdCBpc1xuICogICAgIGEgY2hhbm5lbCAod2hpY2ggaXMgdGhlIGNoYW5uZWwgdG8gYmUgdGFrZW4gZnJvbSkuIEEgc2VuZCBvcGVyYXRpb24gaXNcbiAqICAgICBzcGVjaWZpZWQgYnkgYW4gZWxlbWVudCB0aGF0IGlzIGl0c2VsZiBhIHR3by1lbGVtZW50IGFycmF5LCB3aGljaCBoYXMgYVxuICogICAgIGNoYW5uZWwgZm9sbG93ZWQgYnkgYSB2YWx1ZSAod2hpY2ggaXMgdGhlIGNoYW5uZWwgYW5kIHZhbHVlIHRvIGJlIHNlbnQpLlxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zPXt9XSBBbiBvcHRpb25hbCBvYmplY3Qgd2hpY2ggY2FuIGNoYW5nZSB0aGUgYmVoYXZpb3JcbiAqICAgICBvZiBgc2VsZWN0YCB0aHJvdWdoIHR3byBwcm9wZXJ0aWVzLlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5wcmlvcml0eT1mYWxzZV0gSWYgYHRydWVgLCB0aGVuIHRoZSBwcmlvcml0eSBvZlxuICogICAgIG9wZXJhdGlvbnMgdG8gY29tcGxldGUgd2hlbiBtb3JlIHRoYW4gb25lIGlzIGltbWVkaWF0ZWx5IGF2YWlsYWJsZSBpcyBhXG4gKiAgICAgcHJpb3JpdHkgYWNjb3JkaW5nIHRvIHBvc2l0aW9uIHdpdGhpbiB0aGUgb3BlcmF0aW9ucyBhcnJheSAoZWFybGllclxuICogICAgIHBvc2l0aW9ucyBoYXZlIHRoZSBoaWdoZXIgcHJpb3JpdHkpLiBJZiBgZmFsc2VgIG9yIG5vdCBwcmVzZW50LCB0aGVcbiAqICAgICBwcmlvcnR5IG9mIG9wZXJhdGlvbiBjb21wbGV0aW9uIGlzIHJhbmRvbS5cbiAqIEBwYXJhbSB7Kn0gW29wdGlvbnMuZGVmYXVsdF0gSWYgc2V0IGFuZCBhbGwgb2YgdGhlIG9wZXJhdGlvbnMgaW5pdGlhbGx5XG4gKiAgICAgYmxvY2ssIHRoZSBgc2VsZWN0YCBjYWxsIGNvbXBsZXRlcyBpbW1lZGlhdGVseSB3aXRoIHRoZSB2YWx1ZSBvZiB0aGlzXG4gKiAgICAgb3B0aW9uICh0aGUgY2hhbm5lbCB3aWxsIGJlIGB7QGxpbmsgbW9kdWxlOmNzcC5ERUZBVUxUfERFRkFVTFR9KWAuIElmIG5vdFxuICogICAgIHNldCwgdGhlIGBzZWxlY3RgIGNhbGwgd2lsbCBibG9jayB1bnRpbCBvbmUgb2YgdGhlIG9wZXJhdGlvbnMgY29tcGxldGVzXG4gKiAgICAgYW5kIHRoYXQgdmFsdWUgYW5kIGNoYW5uZWwgd2lsbCBiZSB0aGUgb25lcyByZXR1cm5lZC5cbiAqIEByZXR1cm4ge1Byb21pc2U8bW9kdWxlOmNzcC5TZWxlY3RSZXN1bHQ+fSBBIHByb21pc2UgdGhhdCB3aWxsIHJlc29sdmUgdG8gYW5cbiAqICAgICBvYmplY3Qgb2YgdHdvIHByb3BlcnRpZXM6IGB2YWx1ZWAgd2lsbCBjb250YWluIHRoZSB2YWx1ZSB0aGF0IHdvdWxkIGhhdmVcbiAqICAgICBiZWVuIHJldHVybmVkIGJ5IHRoZSBjb3JyZXNwb25kaW5nIGB7QGxpbmsgbW9kdWxlOmNzcC5zZW5kfHNlbmR9YCBvclxuICogICAgIGB7QGxpbmsgbW9kdWxlOmNzcC5yZWN2fHJlY3Z9YCBvcGVyYXRpb247IGFuZCBgY2hhbm5lbGAgd2lsbCBiZSBhXG4gKiAgICAgcmVmZXJlbmNlIHRvIHRoZSBjaGFubmVsIHRoYXQgY29tcGxldGVkIHRoZSBvcGVyYXRpb24gdG8gYWxsb3cgYHNlbGVjdGBcbiAqICAgICB0byB1bmJsb2NrLlxuICovXG5mdW5jdGlvbiBzZWxlY3Qob3BzLCBvcHRpb25zID0ge30pIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgIHNlbGVjdEFzeW5jKG9wcywgcmVzb2x2ZSwgb3B0aW9ucyk7XG4gIH0pO1xufVxuXG4vKipcbiAqIEEgY29udmVuaWVuY2UgZnVuY3Rpb24gdG8gcmVhZCB0aGUgdmFsdWUgb3V0IG9mIGEgc2VsZWN0IHJlc3VsdC4gVGhpc1xuICogZnVuY3Rpb24gaXMgbm90IG5lY2Vzc2FyeSAtIGFmdGVyIGFsbCwgaXQncyBhYnNvbHV0ZWx5IGFzIGNvcnJlY3QgdG8gc2ltcGx5XG4gKiB1c2UgYHJlc3VsdC52YWx1ZWAgaW5zdGVhZCBvZiBgdmFsdWUocmVzdWx0KWAsIGJ1dCBpdCdzIHByb3ZpZGVkIGZvclxuICogY29uc2lzdGVuY3kgd2l0aCB0aGUgcmVzdCBvZiB0aGUgZnVuY3Rpb24tY2VudHJpYyBBUEkuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5TZWxlY3RSZXN1bHR9IHJlc3VsdCBUaGUgcmVzdWx0IGNvbWluZyBmcm9tIGEgc2VsZWN0XG4gKiAgICAgb3BlcmF0aW9uLlxuICogQHJldHVybiB7Kn0gVGhlIHZhbHVlIHByb3ZpZGVkIGJ5IHRoZSBzZWxlY3Qgb3BlcmF0aW9uLlxuICovXG5mdW5jdGlvbiB2YWx1ZShyZXN1bHQpIHtcbiAgcmV0dXJuIHJlc3VsdC52YWx1ZTtcbn1cblxuLyoqXG4gKiBBIGNvbnZlbmllbmNlIGZ1bmN0aW9uIHRvIHJlYWQgdGhlIGNoYW5uZWwgb3V0IG9mIGEgc2VsZWN0IHJlc3VsdC4gVGhpc1xuICogZnVuY3Rpb24gaXMgbm90IG5lY2Vzc2FyeSAtIGFmdGVyIGFsbCwgaXQncyBhYnNvbHV0ZWx5IGFzIGNvcnJlY3QgdG8gc2ltcGx5XG4gKiB1c2UgYHJlc3VsdC5jaGFubmVsYCBpbnN0ZWFkIG9mIGBjaGFubmVsKHJlc3VsdClgLCBidXQgaXQncyBwcm92aWRlZCBmb3JcbiAqIGNvbnNpc3RlbmN5IHdpdGggdGhlIHJlc3Qgb2YgdGhlIGZ1bmN0aW9uLWNlbnRyaWMgQVBJLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuU2VsZWN0UmVzdWx0fSByZXN1bHQgVGhlIHJlc3VsdCBjb21pbmcgZnJvbSBhIHNlbGVjdFxuICogICAgIG9wZXJhdGlvbi5cbiAqIEByZXR1cm4ge21vZHVsZTpjc3AuQ2hhbm5lbH0gVGhlIGNoYW5uZWwgdXBvbiB3aGljaCB0aGUgc2VsZWN0IG9wZXJhdGlvblxuICogICAgIGNvbXBsZXRlZC5cbiAqL1xuZnVuY3Rpb24gY2hhbm5lbChyZXN1bHQpIHtcbiAgcmV0dXJuIHJlc3VsdC5jaGFubmVsO1xufVxuXG5leHBvcnQgeyBERUZBVUxULCBzZWxlY3QsIHNlbGVjdEFzeW5jLCB2YWx1ZSwgY2hhbm5lbCB9O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG5cbi8qKlxuICogVGhpcyBpcyB0aGUgcGxhY2Ugd2hlcmUgdGhlIG5ldyBKUyB0YXNrcyBhcmUgYWN0dWFsbHkgY3JlYXRlZC4gQSBxdWV1ZSBpc1xuICogbWFpbnRhaW5lZCBmb3IgdGhlbSwgYW5kIGFzIGVhY2ggYmF0Y2ggb2YgdGFza3MgYXJlIGNvbXBsZXRlZCwgdGhlIG5leHQgb25lc1xuICogcnVuLiBBcyBlYWNoIHByb2Nlc3MgcnVucywgaXQgYWRkcyB0YXNrcyB0byBiZSBydW4gdG8gdGhlIHF1ZXVlLCB3aGljaCBhcmVcbiAqIGVhY2ggcnVuIGluIHRoZWlyIG93biBKUyB0YXNrLlxuICpcbiAqIFRoZSBmdW5jdGlvbiB0aGF0IHNwYXducyB0aGUgbmV3IEpTIHRhc2sgZGVwZW5kcyBvbiBlbnZpcm9ubWVudC4gVGhlXG4gKiBgc2V0SW1tZWRpYXRlYCBmdW5jdGlvbiBpcyBwcmVmZXJyZWQgYXMgaXQncyB0aGUgZmFzdGVzdCwgbm90IHdhaXRpbmcgZm9yXG4gKiBldmVudCBxdWV1ZXMgdG8gZW1wdHkgYmVmb3JlIHNwYXduaW5nIHRoZSBuZXcgcHJvY2Vzcy4gSG93ZXZlciwgaXQgaXMgbm90IEpTXG4gKiBzdGFuZGFyZCBhbmQgY3VycmVudGx5IG9ubHkgd29ya3MgaW4gSUUgYW5kIE5vZGUuIElmIGBzZXRJbW1lZGlhdGVgIGlzbid0XG4gKiBhdmFpbGFibGUsIGFuIGF0dGVtcHQgaXMgbWFkZSB0byB1c2UgYE1lc3NhZ2VDaGFubmVsYCdzIGBvbk1lc3NhZ2VgIGlzIHRyaWVkXG4gKiBuZXh0LiBJZiB0aGF0IGlzIGFsc28gbm90IGF2YWlsYWJsZSwgdGhlbiBgc2V0VGltZW91dGAgd2l0aCBgMGAgZGVsYXkgaXNcbiAqIHVzZWQsIHdoaWNoIGlzIGF2YWlsYWJsZSBldmVyeXdoZXJlIGJ1dCB3aGljaCBpcyB0aGUgbGVhc3QgcGVyZm9ybWFudCBvZiBhbGxcbiAqIG9mIHRoZSBzb2x1dGlvbnMuXG4gKlxuICogVGhlcmUgYXJlIG90aGVyIHBvc3NpYmlsaXRpZXMgZm9yIGNyZWF0aW5nIHByb2Nlc3NlcywgYnV0IHRoZXkgd2VyZSByZWplY3RlZFxuICogYXMgb2Jzb2xldGUgKGBwcm9jZXNzLm5leHRUaWNrYCBhbmQgYG9ucmVhZHlzdGF0ZWNoYW5nZWApIG9yIHVubmVjZXNzYXJ5XG4gKiAoYHdpbmRvdy5wb3N0TWVzc2FnZWAsIHdoaWNoIHdvcmtzIGxpa2UgYE1lc3NhZ2VDaGFubmVsYCBidXQgZG9lc24ndCB3b3JrIGluXG4gKiBXZWIgV29ya2VycykuXG4gKlxuICogSXQgaXMgbm90YWJsZSBhbmQgaW1wb3J0YW50IHRoYXQgd2UgYWN0IGFzIGdvb2QgY2l0aXplbnMgaGVyZS4gVGhpc1xuICogZGlzcGF0Y2hlciBpcyBjYXBhYmxlIG9mIHRha2luZyBjb250cm9sIG9mIHRoZSBKYXZhU2NyaXB0IGVuZ2luZSB1bnRpbFxuICogdGhvdXNhbmRzLCBtaWxsaW9ucywgb3IgbW9yZSB0YXNrcyBhcmUgaGFuZGxlZC4gQnV0IHRoYXQgY291bGQgY2F1c2UgdGhlXG4gKiBzeXN0ZW0gZXZlbnQgbG9vcCB0byBoYXZlIHRvIHdhaXQgYW4gdW5hY2NlcHRhYmxlIGFtb3VudCBvZiB0aW1lLiBTbyB3ZSBsaW1pdFxuICogb3Vyc2VsdmVzIHRvIGEgYmF0Y2ggb2YgdGFza3MgYXQgYSB0aW1lLCBhbmQgaWYgdGhlcmUgYXJlIHN0aWxsIG1vcmUgdG8gYmVcbiAqIHJ1biwgd2UgbGV0IHRoZSBldmVudCBsb29wIHJ1biBiZWZvcmUgdGhhdCBuZXh0IGJhdGNoIGlzIHByb2Nlc3NlZC5cbiAqXG4gKiBUaGUgZGlzcGF0Y2hlciBpcyAqKmdsb2JhbCoqLiBUaGVyZSBpcyBhIHNpbmdsZSBpbnN0YW5jZSB0aGF0IHJ1bnMgZm9yIGFsbFxuICogY2hhbm5lbHMgYW5kIHByb2Nlc3Nlcy4gVGhpcyBpcyB0aGUgb25seSBlbGVtZW50IG9mIHRoZSBzeXN0ZW0gdGhhdCB3b3Jrc1xuICogbGlrZSB0aGlzLlxuICpcbiAqIEBtb2R1bGUgY3NwL2Rpc3BhdGNoZXJcbiAqIEBzZWUgbW9kdWxlOmNzcC5jb25maWdcbiAqIEBwcml2YXRlXG4gKi9cblxuaW1wb3J0IHtcbiAgcXVldWUgYXMgcSxcbiAgRU1QVFksXG4gIGNvdW50IGFzIHFDb3VudCxcbiAgZGVxdWV1ZSxcbiAgZW5xdWV1ZVxufSBmcm9tIFwibW9kdWxlcy9xdWV1ZVwiO1xuY29uc3QgcXVldWUgPSBxKCk7XG5cbi8qKlxuICogVGhlIGRpc3BhdGNoIG1ldGhvZCBvcHRpb24gaW5kaWNhdGluZyB0aGF0IGBzZXRJbW1lZGlhdGVgIHNob3VsZCBiZSB1c2VkIHRvXG4gKiBkaXNwYXRjaCB0YXNrcy5cbiAqXG4gKiBUaGlzIGlzIHRoZSBkZWZhdWx0IG9wdGlvbi4gRm9yIGVudmlyb25tZW50cyB0aGF0IGRvbid0IHN1cHBvcnRcbiAqIGBzZXRJbW1lZGlhdGVgLCB0aGlzIGZhbGxzIGJhY2sgdG9cbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC5NRVNTQUdFX0NIQU5ORUx8TUVTU0FHRV9DSEFOTkVMfWAuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqIEB0eXBlIHtTeW1ib2x9XG4gKiBAc2VlIHtAbGluayBtb2R1bGU6Y3NwLmNvbmZpZ3xjb25maWd9XG4gKi9cbmNvbnN0IFNFVF9JTU1FRElBVEUgPSBTeW1ib2woXCJTRVRfSU1NRURJQVRFXCIpO1xuXG4vKipcbiAqIFRoZSBkaXNwYXRjaCBtZXRob2Qgb3B0aW9uIGluZGljYXRpbmcgdGhhdCBhIGBNZXNzYWdlQ2hhbm5lbGAgc2hvdWxkIGJlIHVzZWRcbiAqIHRvIGRpc3BhdGNoIHRhc2tzLlxuICpcbiAqIEZvciBlbnZpcm9ubWVudHMgdGhhdCBkb24ndCBzdXBwb3J0IGBNZXNzYWdlQ2hhbm5lbGAsIHRoaXMgZmFsbHMgYmFjayB0b1xuICogYHtAbGluayBtb2R1bGU6Y3NwLlNFVF9USU1FT1VUfFNFVF9USU1FT1VUfWAuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqIEB0eXBlIHtTeW1ib2x9XG4gKiBAc2VlIHtAbGluayBtb2R1bGU6Y3NwLmNvbmZpZ3xjb25maWd9XG4gKi9cbmNvbnN0IE1FU1NBR0VfQ0hBTk5FTCA9IFN5bWJvbChcIk1FU1NBR0VfQ0hBTk5FTFwiKTtcblxuLyoqXG4gKiBUaGUgZGlzcGF0Y2ggbWV0aG9kIG9wdGlvbiBpbmRpY2F0aW5nIHRoYXQgYHNldFRpbWVvdXRgIHNob3VsZCBiZSB1c2VkIHRvXG4gKiBkaXNwYXRjaCB0YXNrcy5cbiAqXG4gKiBUaGlzIG1ldGhvZCBpcyBhbHdheXMgYXZhaWxhYmxlLCBidXQgaXQncyBhbHNvIGFsd2F5cyBsZXNzIGVmZmljaWVudCB0aGFuIGFueVxuICogb3RoZXIgbWV0aG9kLCBzbyBpdCBzaG91bGQgYmUgdXNlZCBhcyBhIGxhc3QgcmVzb3J0LlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAdHlwZSB7U3ltYm9sfVxuICogQHNlZSAge0BsaW5rIG1vZHVsZTpjc3AuY29uZmlnfGNvbmZpZ31cbiAqL1xuY29uc3QgU0VUX1RJTUVPVVQgPSBTeW1ib2woXCJTRVRfVElNRU9VVFwiKTtcblxuY29uc3Qgb3B0aW9ucyA9IHtcbiAgYmF0Y2hTaXplOiAxMDI0LFxuICBkaXNwYXRjaE1ldGhvZDogU0VUX0lNTUVESUFURVxufTtcblxubGV0IGRpc3BhdGNoZXIgPSBjcmVhdGVEaXNwYXRjaGVyKCk7XG5sZXQgcnVubmluZyA9IGZhbHNlO1xubGV0IHF1ZXVlZCA9IHRydWU7XG5cbi8qKlxuICogQ3JlYXRlcyBhbmQgcmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgY2FuIGJlIHVzZWQgdG8gZGlzcGF0Y2ggdGFza3MuIFRoZVxuICogZnVuY3Rpb24gdGhhdCBpcyBjcmVhdGVkIGRlcGVuZHMgb24gdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBgZGlzcGF0Y2hNZXRob2RgXG4gKiB0aGF0IGNhbiBiZSBzZXQgd2l0aCBge0BsaW5rIG1vZHVsZTpjc3AuY29uZmlnfGNvbmZpZ31gLlxuICpcbiAqIEByZXR1cm4gQSBkaXNwYXRjaGVyIGZ1bmN0aW9uIHVzaW5nIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgZGlzcGF0Y2ggbWV0aG9kLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY3JlYXRlRGlzcGF0Y2hlcigpIHtcbiAgc3dpdGNoIChjYWxjRGlzcGF0Y2hNZXRob2QoKSkge1xuICAgIC8vIFdlIHByZWZlciBgc2V0SW1tZWRpYXRlYCBpZiBpdCdzIGF2YWlsYWJsZSwgYnV0IGl0J3Mgb25seSBhdmFpbGFibGUgaW5cbiAgICAvLyBOb2RlIGFuZCBzb21lIG9sZCBicm93c2Vycy5cbiAgICBjYXNlIFNFVF9JTU1FRElBVEU6XG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBpZiAoIShxdWV1ZWQgJiYgcnVubmluZykpIHtcbiAgICAgICAgICBxdWV1ZWQgPSB0cnVlO1xuICAgICAgICAgIHNldEltbWVkaWF0ZShwcm9jZXNzVGFza3MpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgLy8gTW9zdCBtb2Rlcm4gYnJvd3NlcnMgaW1wbGVtZW50IGBNZXNzYWdlQ2hhbm5lbGAuIFRoaXMgaXMgdGhlIHByZWZlcnJlZFxuICAgIC8vIG1ldGhvZCBpbiBicm93c2VyIGVudmlyb25tZW50cyB3aGVyZSBgc2V0SW1tZWRpYXRlYCBpc24ndCBhdmFpbGFibGUuXG4gICAgY2FzZSBNRVNTQUdFX0NIQU5ORUw6IHtcbiAgICAgIGNvbnN0IGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gKCkgPT4gcHJvY2Vzc1Rhc2tzKCk7XG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBpZiAoIShxdWV1ZWQgJiYgcnVubmluZykpIHtcbiAgICAgICAgICBxdWV1ZWQgPSB0cnVlO1xuICAgICAgICAgIGNoYW5uZWwucG9ydDIucG9zdE1lc3NhZ2UoMCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gSWYgYWxsIGVsc2UgZmFpbHMsIGp1c3QgdXNlIGBzZXRUaW1lb3V0YC4gSXQncyBhIGxpdHRsZSBzbG93ZXIgdGhhbiB0aGVcbiAgICAvLyBvdGhlciBtZXRob2RzLCBidXQgaXQncyBhdmFpbGFibGUgZXZlcnl3aGVyZS5cbiAgICBjYXNlIFNFVF9USU1FT1VUOlxuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgaWYgKCEocXVldWVkICYmIHJ1bm5pbmcpKSB7XG4gICAgICAgICAgcXVldWVkID0gdHJ1ZTtcbiAgICAgICAgICBzZXRUaW1lb3V0KHByb2Nlc3NUYXNrcywgMCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gIH1cbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBhY3R1YWwgZGlzcGF0Y2ggbWV0aG9kIGJhc2VkIG9uIHRoZSBjdXJyZW50IGRpc3BhdGNoIG1ldGhvZFxuICogc2V0dGluZyBhbmQgZW52aXJvbm1lbnRhbCBhdmFpbGFiaWxpdHkuXG4gKlxuICogVGhlIGRpc3BhdGNoIG1ldGhvZCBpcyBzdG9yZWQgcmF3LCBzbyB0aGlzIGZ1bmN0aW9uIGlzIG5lY2Vzc2FyeSB0byB0YWtlXG4gKiBlbnZpcm9ubWVudCBpbnRvIGFjY291bnQuIEZvciBleGFtcGxlLCBpZiB3ZSdyZSBydW5uaW5nIGluIGEgbW9kZXJuIGJyb3dzZXJcbiAqICh3aGljaCBkb2VzIG5vdCBoYXZlIGBzZXRJbW1lZGlhdGVgKSxcbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC5TRVRfSU1NRURJQVRFfFNFVF9JTU1FRElBVEV9YCBjYW4gc3RpbGwgYmUgcmVjb3JkZWQgYXMgdGhlXG4gKiBkaXNwYXRjaCBtZXRob2QsIGJ1dCB0aGlzIGZ1bmN0aW9uIHdpbGwgcmV0dXJuXG4gKiBge0BsaW5rIG1vZHVsZTpjc3AuTUVTU0FHRV9DSEFOTkVMfE1FU1NBR0VfQ0hBTk5FTH1gLlxuICpcbiAqIEByZXR1cm4ge1N5bWJvbH0gVGhlIGRpc3BhdGNoIG1ldGhvZCB0byB1c2UgYmFzZWQgb24gc2V0dGluZyBhbmQgZW52aXJvbm1lbnQuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjYWxjRGlzcGF0Y2hNZXRob2QoKSB7XG4gIHN3aXRjaCAob3B0aW9ucy5kaXNwYXRjaE1ldGhvZCkge1xuICAgIGNhc2UgTUVTU0FHRV9DSEFOTkVMOlxuICAgICAgaWYgKHR5cGVvZiBNZXNzYWdlQ2hhbm5lbCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICByZXR1cm4gTUVTU0FHRV9DSEFOTkVMO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFNFVF9USU1FT1VUO1xuXG4gICAgY2FzZSBTRVRfVElNRU9VVDpcbiAgICAgIHJldHVybiBTRVRfVElNRU9VVDtcblxuICAgIGRlZmF1bHQ6XG4gICAgICBpZiAodHlwZW9mIHNldEltbWVkaWF0ZSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICByZXR1cm4gU0VUX0lNTUVESUFURTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgTWVzc2FnZUNoYW5uZWwgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgcmV0dXJuIE1FU1NBR0VfQ0hBTk5FTDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBTRVRfVElNRU9VVDtcbiAgfVxufVxuXG4vKipcbiAqIFRoZSBoZWFydCBvZiB0aGUgZGlzcGF0Y2ggcHJvY2VzcywgdGhpcyBpcyB0aGUgZnVuY3Rpb24gcnVuIGJ5IHRoZSBkaXNwYXRjaFxuICogZnVuY3Rpb24gaW4gb3JkZXIgdG8gYWN0dWFsbHkgcnVuIHF1ZXVlZCB0YXNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBwcm9jZXNzVGFza3MoKSB7XG4gIHJ1bm5pbmcgPSB0cnVlO1xuICBxdWV1ZWQgPSBmYWxzZTtcbiAgbGV0IGNvdW50ID0gMDtcblxuICBmb3IgKDs7KSB7XG4gICAgY29uc3QgdGFzayA9IGRlcXVldWUocXVldWUpO1xuICAgIGlmICh0YXNrID09PSBFTVBUWSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgdGFzaygpO1xuXG4gICAgaWYgKGNvdW50ID49IG9wdGlvbnMuYmF0Y2hTaXplKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgY291bnQrKztcblxuICAgIHJ1bm5pbmcgPSBmYWxzZTtcbiAgICBpZiAocUNvdW50KHF1ZXVlKSkge1xuICAgICAgZGlzcGF0Y2hlcigpO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIENyZWF0ZXMgYW5kIGFzc2lnbnMgdGhlIGdsb2JhbCBkaXNwYXRjaCBmdW5jdGlvbiBiYXNlZCBvbiBkaXNwYXRjaCBtZXRob2RcbiAqIHNldHRpbmcgYW5kIGVudmlyb25tZW50YWwgYXZhaWxhYmlsaXR5LlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHNldERpc3BhdGNoZXIoKSB7XG4gIGRpc3BhdGNoZXIgPSBjcmVhdGVEaXNwYXRjaGVyKCk7XG59XG5cbi8qKlxuICogVGhlIGNvbmZpZ3VyYXRpb24gb2YgdGhlIENoYW5rbyBkaXNwYXRjaGVyLiBBbiBvYmplY3QgbGlrZSB0aGlzIGlzIHJldHVybmVkXG4gKiBmcm9tIHRoZSB7QGxpbmsgbW9kdWxlOmNzcC5jb25maWd9IGZ1bmN0aW9uLCBhbmQgaXQgbWF5IGFsc28gYmUgcGFzc2VkIHRvIHRoZVxuICogc2FtZSBmdW5jdGlvbiAodGhvdWdoIGVhY2ggcHJvcGVydHkgaXMgb3B0aW9uYWwgaW4gdGhhdCBjYXNlKS5cbiAqXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBEaXNwYXRjaGVyQ29uZmlnXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICogQHByb3BlcnR5IHtudW1iZXJ9IGJhdGNoU2l6ZSBUaGUgbWF4aW11bSBudW1iZXIgb2YgdGFza3MgdGhhdCB0aGUgZGlzcGF0Y2hlclxuICogICAgIHdpbGwgcnVuIGluIGEgc2luZ2xlIGJhdGNoLlxuICogQHByb3BlcnR5IHtTeW1ib2x9IGRpc3BhdGNoTWV0aG9kIFRoZSBtZXRob2QgdXNlZCB0byBkaXNwYXRjaCBhIHByb2Nlc3MgaW50b1xuICogICAgIGEgc2VwYXJhdGUgbGluZSBvZiBleGVjdXRpb24uXG4gKi9cblxuLyoqXG4gKiBTZXRzIG9uZSBvciBtb3JlIG9mIHRoZSBkaXNwYXRjaGVyIGNvbmZpZ3VyYXRpb24gb3B0aW9ucy5cbiAqXG4gKiBUaGlzIGlzIGFkdmFuY2VkIHNldHRpbmcgZm9yIHRoZSBkaXNwYXRjaGVyIHRoYXQgaXMgcmVzcG9uc2libGUgZm9yIHF1ZXVlaW5nXG4gKiB1cCBjaGFubmVsIG9wZXJhdGlvbnMgYW5kIHByb2Nlc3Nlcy4gSXQgaXMgbGlrZWx5IHRoYXQgdGhpcyBmdW5jdGlvbiB3aWxsXG4gKiBuZXZlciBuZWVkIHRvIGJlIGNhbGxlZCBpbiBub3JtYWwgb3BlcmF0aW9uLlxuICpcbiAqIElmIGFueSByZWNvZ25pemVkIG9wdGlvbnMgYXJlIHNwZWNpZmllZCBpbiB0aGUgb3B0aW9ucyBvYmplY3QgcGFzc2VkIHRvXG4gKiBgY29uZmlnYCwgdGhlbiB0aGUgb3B0aW9uIGlzIHNldCB0byB0aGUgdmFsdWUgc2VudCBpbi4gUHJvcGVydGllcyB0aGF0IGFyZW4ndFxuICogYW55IG9mIHRoZXNlIG9wdGlvbnMgYXJlIGlnbm9yZWQsIGFuZCBhbnkgb2YgdGhlc2Ugb3B0aW9ucyB0aGF0IGRvIG5vdCBhcHBlYXJcbiAqIGluIHRoZSBwYXNzZWQgb2JqZWN0IGFyZSBsZWZ0IHdpdGggdGhlaXIgY3VycmVudCB2YWx1ZXMuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIEEgbWFwcGluZyBvZiBvcHRpb25zIHRvIHRoZWlyIG5ldyB2YWx1ZXMuIEV4dHJhIHZhbHVlc1xuICogICAgIChwcm9wZXJ0aWVzIHRoYXQgYXJlIG5vdCBvcHRpb25zKSBhcmUgaWdub3JlZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0cy5iYXRjaFNpemVdIFRoZSBtYXhpbXVtIG51bWJlciBvZiB0YXNrcyB0aGF0IHRoZVxuICogICAgIGRpc3BhdGNoZXIgd2lsbCBydW4gaW4gYSBzaW5nbGUgYmF0Y2ggKGluaXRpYWxseSwgdGhpcyBpcyAxMDI0KS4gSWYgdGhlXG4gKiAgICAgbnVtYmVyIG9mIHBlbmRpbmcgdGFza3MgZXhjZWVkcyB0aGlzLCB0aGUgcmVtYWluaW5nIGFyZSBub3QgZGlzY2FyZGVkLlxuICogICAgIFRoZXkncmUgc2ltcGx5IHJ1biBhcyBwYXJ0IG9mIGFub3RoZXIgYmF0Y2ggYWZ0ZXIgdGhlIGN1cnJlbnQgYmF0Y2hcbiAqICAgICBjb21wbGV0ZXMuXG4gKiBAcGFyYW0ge1N5bWJvbH0gW29wdHMuZGlzcGF0Y2hNZXRob2RdIFRoZSBtZXRob2QgdXNlZCB0byBkaXNwYXRjaCBhIHByb2Nlc3NcbiAqICAgICBpbnRvIGEgc2VwYXJhdGUgbGluZSBvZiBleGVjdXRpb24uIFBvc3NpYmxlIHZhbHVlcyBhcmVcbiAqICAgICBge0BsaW5rIG1vZHVsZTpjc3AuU0VUX0lNTUVESUFURXxTRVRfSU1NRURJQVRFfWAsXG4gKiAgICAgYHtAbGluayBtb2R1bGU6Y3NwLk1FU1NBR0VfQ0hBTk5FTHxNRVNTQUdFX0NIQU5ORUx9YCwgb3JcbiAqICAgICBge0BsaW5rIG1vZHVsZTpjc3AuU0VUX1RJTUVPVVR8U0VUX1RJTUVPVVR9YCwgd2l0aCB0aGUgaW5pdGlhbCBiZWluZ1xuICogICAgIGB7QGxpbmsgbW9kdWxlOmNzcC5TRVRfSU1NRURJQVRFfFNFVF9JTU1FRElBVEV9YC4gSWYgYSBtZXRob2QgaXMgc2V0IGJ1dFxuICogICAgIGlzIG5vdCBhdmFpbGFibGUgaW4gdGhhdCBlbnZpcm9ubWVudCwgdGhlbiBpdCB3aWxsIHNpbGVudGx5IGZhbGwgYmFjayB0b1xuICogICAgIHRoZSBuZXh0IG1ldGhvZCB0aGF0IGlzIGF2YWlsYWJsZS5cbiAqIEByZXR1cm4ge21vZHVsZTpjc3AuRGlzcGF0Y2hlckNvbmZpZ30gVGhlIGNvbmZpZ3VyYXRpb24gc2V0dGluZ3MgZm9yIHRoZVxuICogICAgIGRpc3BhdGNoZXIgYWZ0ZXIgYW55IG5ldyB2YWx1ZXMgaGF2ZSBiZWVuIHNldC5cbiAqL1xuZnVuY3Rpb24gY29uZmlnKG9wdHMgPSB7fSkge1xuICBmb3IgKGNvbnN0IGtleSBpbiBvcHRpb25zKSB7XG4gICAgaWYgKGtleSBpbiBvcHRzKSB7XG4gICAgICBvcHRpb25zW2tleV0gPSBvcHRzW2tleV07XG5cbiAgICAgIGlmIChrZXkgPT09IFwiZGlzcGF0Y2hNZXRob2RcIikge1xuICAgICAgICBzZXREaXNwYXRjaGVyKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zKTtcbn1cblxuLyoqXG4gKiBRdWV1ZXMgYSB0YXNrIHRvIGJlIHJ1biBhbmQgc3RhcnRzIHRoZSBkaXNwYXRjaCBwcm9jZXNzLlxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IHRhc2sgQSB0YXNrIHRvIGJlIHF1ZXVlZCBhbmQgcnVuIHRoZSBuZXh0IHRpbWUgYSBiYXRjaCBvZlxuICogICAgIHRhc2tzIGlzIHJ1bi5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGRpc3BhdGNoKHRhc2spIHtcbiAgZW5xdWV1ZShxdWV1ZSwgdGFzayk7XG4gIGRpc3BhdGNoZXIoKTtcbn1cblxuZXhwb3J0IHsgU0VUX0lNTUVESUFURSwgTUVTU0FHRV9DSEFOTkVMLCBTRVRfVElNRU9VVCwgY29uZmlnLCBkaXNwYXRjaCB9O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG5cbi8qKlxuICogUHJvdmlkZXMgc21hbGwgdXRpbGl0eSBmdW5jdGlvbnMgdG8gbWFrZSBpdCBlYXNpZXIgdG8gaW50ZXJhY3Qgd2l0aCBhc3luY1xuICogZnVuY3Rpb25zIGFzIHByb2Nlc3Nlcy5cbiAqXG4gKiBAbW9kdWxlIGNzcC9wcm9jZXNzXG4gKiBAcHJpdmF0ZVxuICovXG5cbmltcG9ydCB7IHRpbWVkQ2hhbiwgcmVjdkFzeW5jIH0gZnJvbSBcIm1vZHVsZXMvY2hhbm5lbFwiO1xuXG4vKipcbiAqIEJsb2NrcyB0aGUgcHJvY2VzcyBmb3IgdGhlIHNwZWNpZmllZCB0aW1lIChpbiBtaWxsaXNlY29uZHMpIGFuZCB0aGVuIHVuYmxvY2tzXG4gKiBpdC5cbiAqXG4gKiBUaGlzIGltcGxlbWVudHMgYSBkZWxheSwgYnV0IG9uZSB0aGF0J3Mgc3VwZXJpb3IgdG8gb3RoZXIga2luZHMgb2YgZGVsYXlzXG4gKiAoYHNldFRpbWVvdXRgLCBldGMuKSBiZWNhdXNlIGl0IGJsb2NrcyB0aGUgcHJvY2VzcyBhbmQgYWxsb3dzIHRoZSBkaXNwYXRjaGVyXG4gKiB0byBhbGxvdyBvdGhlciBwcm9jZXNzZXMgdG8gcnVuIHdoaWxlIHRoaXMgb25lIHdhaXRzLiBUaGUgZGVmYXVsdCBkZWxheSBpcyAwLFxuICogd2hpY2ggd2lsbCByZWxlYXNlIHRoZSBwcm9jZXNzIHRvIGFsbG93IG90aGVycyB0byBydW4gYW5kIHRoZW4gaW1tZWRpYXRlbHlcbiAqIHJlLXF1ZXVlIGl0LlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gKm11c3QqIGJlIGNhbGxlZCBmcm9tIHdpdGhpbiBhbiBgYXN5bmNgIGZ1bmN0aW9uIGFuZCBhcyBwYXJ0IG9mXG4gKiBhbiBgYXdhaXRgIGV4cHJlc3Npb24uXG4gKlxuICogV2hlbiB0aGlzIGZ1bmN0aW9uIGNvbXBsZXRlcyBhbmQgaXRzIHByb2Nlc3MgdW5ibG9ja3MsIHRoZSBgYXdhaXRgIGV4cHJlc3Npb25cbiAqIGRvZXNuJ3QgdGFrZSBvbiBhbnkgbWVhbmluZ2Z1bCB2YWx1ZS4gVGhlIHB1cnBvc2Ugb2YgdGhpcyBmdW5jdGlvbiBpcyBzaW1wbHlcbiAqIHRvIGRlbGF5LCBub3QgdG8gY29tbXVuaWNhdGUgYW55IGRhdGEuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqIEBwYXJhbSB7bnVtYmVyfSBbZGVsYXk9MF0gdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdGhhdCB0aGUgcHJvY2VzcyB3aWxsXG4gKiAgICAgYmxvY2sgZm9yLiBBdCB0aGUgZW5kIG9mIHRoYXQgdGltZSwgdGhlIHByb2Nlc3MgaXMgYWdhaW4gZWxpZ2libGUgdG8gYmVcbiAqICAgICBydW4gYnkgdGhlIGRpc3BhdGNoZXIuIElmIHRoaXMgaXMgbWlzc2luZyBvciBzZXQgdG8gYDBgLCB0aGUgcHJvY2VzcyB3aWxsXG4gKiAgICAgY2VkZSBleGVjdXRpb24gdG8gdGhlIG5leHQgb25lIGJ1dCBpbW1lZGlhdGVseSByZXF1ZXVlIGl0c2VsZiB0byBiZSBydW5cbiAqICAgICBhZ2Fpbi5cbiAqIEByZXR1cm4ge1Byb21pc2V9IEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggbm8gbWVhbmluZ2Z1bCByZXN1bHQgd2hlbiB0aGVcbiAqICAgICB0aW1lIGhhcyBlbGFwc2VkLlxuICovXG5mdW5jdGlvbiBzbGVlcChkZWxheSA9IDApIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgIGNvbnN0IGNoID0gdGltZWRDaGFuKGRlbGF5KTtcbiAgICByZWN2QXN5bmMoY2gsIHJlc29sdmUpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBJbnZva2VzIGFuIGFzeW5jIGZ1bmN0aW9uIGFjdGluZyBhcyBhIHByb2Nlc3MuXG4gKlxuICogVGhpcyBpcyBwdXJlbHkgYSBjb252ZW5pZW5jZSBmdW5jdGlvbiwgZHJpdmVuIGJ5IHRoZSBmYWN0IHRoYXQgaXQncyBuZWNlc3NhcnlcbiAqIHRvIHVzZSBhbiBJSUZFIHRvIGludm9rZSBhbiBhbm9ueW1vdXMgYXN5bmMgZnVuY3Rpb24sIGFuZCB0aGF0J3Mgbm90IHZlcnlcbiAqIGFlc3RoZXRpY2FsbHkgcGxlYXNpbmcuIEl0IGRvZXMgbm8gbW9yZSB0aGFuIGludm9rZSB0aGUgcGFzc2VkIGZ1bmN0aW9uLCBidXRcbiAqIHRoYXQgYXQgbGVhc3QgcmVsZWFzZXMgdXMgZnJvbSB0aGUgbmVlZCB0byBwdXQgdGhlIGVtcHR5IHBhcmVudGhlc2VzIGFmdGVyXG4gKiB0aGUgZnVuY3Rpb24gZGVmaW5pdGlvbi5cbiAqXG4gKiBBIG5hbWVkIGFzeW5jIGZ1bmN0aW9uIGNhbiBzaW1wbHkgYmUgaW52b2tlZCAod2l0aG91dCBiZWluZyBhbiBJSUZFKSBhbmRcbiAqIGRvZXNuJ3QgYmVuZWZpdCBmcm9tIHRoaXMgY29udmVuaWVuY2UuXG4gKlxuICogQW5vbnltb3VzIHByb2Nlc3Mgd2l0aG91dCBgZ29gOlxuICogYGBgXG4gKiAoYXN5bmMgKCkgPT4ge1xuICogICAuLi4gZG8gc29tZSBwcm9jZXNzIHN0dWZmIGhlcmUgLi4uXG4gKiB9KSgpO1xuICogYGBgXG4gKiBBbm9ueW1vdXMgcHJvY2VzcyB3aXRoIGBnb2A6XG4gKiBgYGBcbiAqIGdvKGFzeW5jICgpID0+IHtcbiAqICAgLi4uIGRvIHNvbWUgcHJvY2VzcyBzdHVmZiBoZXJlIC4uLlxuICogfSk7XG4gKiBgYGBcbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm4gVGhlIGFzeW5jIGZ1bmN0aW9uIGJlaW5nIHVzZWQgYXMgYSBwcm9jZXNzLlxuICogQHBhcmFtIHsuLi4qfSBhcmdzIEFyZ3VtZW50cyB0aGF0IGFyZSBzZW50IHRvIHRoZSBhc3luYyBmdW5jdGlvbiB3aGVuIGl0J3NcbiAqICAgICBpbnZva2VkLlxuICogQHJldHVybiB7UHJvbWlzZX0gVGhlIHByb21pc2UgcmV0dXJuZWQgYnkgdGhlIGFzeW5jIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBnbyhmbiwgLi4uYXJncykge1xuICByZXR1cm4gZm4oLi4uYXJncyk7XG59XG5cbi8qKlxuICogSm9pbnMgYWxsIG9mIHRoZSBwcm92aWRlZCBwcm9jZXNzZXMgaW50byBhIHNpbmdsZSBwcm9jZXNzLCByZXR1cm5pbmcgYVxuICogcHJvbWlzZSB0aGF0IHdyYXBzIGFsbCBvZiB0aGUgaW5kaXZpZHVhbCBwcm9jZXNzZXMnIHByb21pc2VzLiBQdXR0aW5nIHRoaXMgaW5cbiAqIGFuIGBhd2FpdGAgc3RhdGVtZW50IHdpbGwgYmxvY2sgdW50aWwgYWxsIG9mIHRoZSBwcm9jZXNzZXMgY29tcGxldGUuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqIEBwYXJhbSB7Li4uZnVuY3Rpb259IGZucyBBbnkgbnVtYmVyIG9mIGFzeW5jIGZ1bmN0aW9ucyB3aG9zZSByZXNvbHV0aW9ucyBhcmVcbiAqICAgICBiZWluZyB3YWl0ZWQgZm9yLlxuICogQHJldHVybiB7UHJvbWlzZX0gQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBhbGwgb2YgdGhlIHByb2Nlc3NlcyBwcm9taXNlc1xuICogICAgIHJlc29sdmUuXG4gKi9cbmZ1bmN0aW9uIGpvaW4oLi4uZm5zKSB7XG4gIHJldHVybiBQcm9taXNlLmFsbChmbnMpO1xufVxuXG5leHBvcnQgeyBzbGVlcCwgZ28sIGpvaW4gfTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG4vKipcbiAqIFByb3ZpZGVzIGFuIGVmZmljaWVudCBnZW5lcmFsLXB1cnBvc2UgcXVldWUuXG4gKlxuICogQG1vZHVsZSBjc3AvcXVldWVcbiAqIEBwcml2YXRlXG4gKi9cblxuLyoqXG4gKiBBIGdlbmVyYWwgcHVycG9zZSwgaGlnaGx5IGVmZmljaWVudCBKYXZhU2NyaXB0IHF1ZXVlLiBJdCBpcyBiYWNrZWQgYnkgYVxuICogSmF2YVNjcmlwdCBhcnJheSwgYnV0IGl0IGRvZXMgbm90IHVzZSBgdW5zaGlmdGAgdG8gdGFrZSBlbGVtZW50cyBvZmYgdGhlXG4gKiBhcnJheSBiZWNhdXNlIHVuc2hpZnQgY2F1c2VzIGVsZW1lbnRzIHRvIGJlIGNvcGllZCBldmVyeSB0aW1lIGl0J3MgdXNlZC5cbiAqIEluc3RlYWQsIGEgcG9pbnRlciBpcyBtYWludGFpbmVkIHRoYXQga2VlcHMgdHJhY2sgb2YgdGhlIGxvY2F0aW9uIG9mIHRoZSBuZXh0XG4gKiBlbGVtZW50IHRvIGJlIGRlcXVldWVkLCBhbmQgd2hlbiB0aGF0IGRlcXVldWUgaGFwcGVucywgdGhlIHBvaW50ZXIgc2ltcGx5XG4gKiBtb3Zlcy4gV2hlbiB0aGUgZW1wdHkgc3BhY2UgYXQgdGhlIGhlYWQgb2YgdGhlIGFycmF5IGdldHMgbGFyZ2UgZW5vdWdoLCBpdCdzXG4gKiByZW1vdmVkIGJ5IGEgc2luZ2xlIHNsaWNlIG9wZXJhdGlvbi5cbiAqXG4gKiBQdXR0aW5nIGVsZW1lbnRzIGludG8gdGhlIHF1ZXVlIGlzIGp1c3QgZG9uZSB3aXRoIGEgYmFzaWMgYHB1c2hgLCB3aGljaCAqaXMqXG4gKiBoaWdobHkgZWZmaWNpZW50LlxuICpcbiAqIFRoaXMgdHlwZSBvZiBxdWV1ZSBpcyBwb3NzaWJsZSBpbiBKYXZhU2NyaXB0IGJlY2F1c2UgSlMgYXJyYXlzIGFyZSByZXNpemFibGUuXG4gKiBJbiBsYW5ndWFnZXMgd2l0aCBmaXhlZC1zaXplIGFycmF5cywgYSByZXNpemluZyBvcGVyYXRpb24gd291bGQgaGF2ZSB0byBiZVxuICogcnVuIGVhY2ggdGltZSB0aGUgcXVldWUgZmlsbHMuXG4gKlxuICogQG5hbWVzcGFjZSBRdWV1ZVxuICogQHByaXZhdGVcbiAqL1xuXG4vKipcbiAqIFRoZSB2YWx1ZSByZXR1cm5lZCB3aGVuIGEgcXVldWUgaXMgcmVhZCB3aGVuIGl0J3MgZW1wdHkuXG4gKlxuICogVGhpcyBzcGVjaWFsIHZhbHVlIGlzIHVzZWQgYmVjYXVzZSBgbnVsbGAgYW5kIGB1bmRlZmluZWRgIGFyZSBwb3NzaWJsZVxuICogbGVnaXRpbWF0ZSB2YWx1ZXMgdGhhdCBjYW4gYmUgc3RvcmVkIGluIGEgcXVldWUuIEFub3RoZXIgb3B0aW9uIGlzIHRvIHVzZVxuICogc29tZSBraW5kIG9mIGBNYXliZWAgb3IgYE9wdGlvbmAgdHlwZSwgYnV0IHRoYXQgcmVxdWlyZXMgbW9yZSBlZmZvcnQgb24gdGhlXG4gKiBwYXJ0IG9mIHRoZSBlbmQgdXNlciB0byBpbnRlcmZhY2Ugd2l0aC5cbiAqXG4gKiBAdHlwZSB7U3ltYm9sfVxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqL1xuY29uc3QgRU1QVFkgPSBTeW1ib2woXCJFTVBUWVwiKTtcblxuLyoqXG4gKiBBIG1hcmtlciBwcm9wZXJ0eSBuYW1lIHRvIGluZGljYXRlIHRoYXQgYW4gb2JqZWN0IGlzIGluIGZhY3QgYSBxdWV1ZS5cbiAqXG4gKiBBIHF1ZXVlIGhhcyBhIHByb3BlcnR5IHdpdGggdGhpcyBuYW1lIHdob3NlIHJlYWRvbmx5IHZhbHVlIGlzIHNldCB0byBgdHJ1ZWAuXG4gKiBUaGlzIGlzIG5vdCBtZWFudCB0byBiZSByZWFkIGV4Y2VwdCBieSB0aGVcbiAqIGB7QGxpbmsgbW9kdWxlOnF1ZXVlLmlzUXVldWV8aXNRdWV1ZX1gIGZ1bmN0aW9uLlxuICpcbiAqIEB0eXBlIHtTeW1ib2x9XG4gKiBAcHJpdmF0ZVxuICovXG5jb25zdCBRVUVVRSA9IFN5bWJvbChcIlFVRVVFXCIpO1xuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhbiBvYmplY3QgaXMgYSBxdWV1ZS5cbiAqXG4gKiBAcGFyYW0geyp9IG9iaiBUaGUgb2JqZWN0IHRvIGJlIHRlc3RlZC5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IEVpdGhlciBgdHJ1ZWAgaWYgdGhlIG9iamVjdCBpcyBhIHF1ZXVlIG9yIGBmYWxzZWAgaWYgaXQgaXNcbiAqIG5vdC5cbiAqL1xuZnVuY3Rpb24gaXNRdWV1ZShvYmopIHtcbiAgcmV0dXJuICEhb2JqPy5bUVVFVUVdO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgcXVldWUuIFRoaXMgcXVldWUgaXMgY3JlYXRlZCBlbXB0eSwgd2l0aCBhIGJhY2tpbmcgYXJyYXkgb2ZcbiAqIGxlbmd0aCAwLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwL3F1ZXVlXG4gKiBAcmV0dXJucyB7bW9kdWxlOmNzcC9xdWV1ZX5RdWV1ZX0gQSBuZXcsIGVtcHR5IHF1ZXVlLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gcXVldWUoKSB7XG4gIHJldHVybiBPYmplY3QuY3JlYXRlKG51bGwsIHtcbiAgICBzdG9yZToge1xuICAgICAgdmFsdWU6IFtdLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9LFxuXG4gICAgcG9pbnRlcjoge1xuICAgICAgdmFsdWU6IDAsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0sXG5cbiAgICBbUVVFVUVdOiB7XG4gICAgICB2YWx1ZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgbnVtYmVyIG9mIGVsZW1lbnRzIHN0b3JlZCBpbiBhIHF1ZXVlLiBUaGlzIG1heSBvciBtYXkgbm90IGVxdWFsXG4gKiB0aGUgbGVuZ3RoIG9mIHRoZSBiYWNraW5nIHN0b3JlLCBhcyB0aGVyZSBpcyBvZnRlbiBlbXB0eSBzcGFjZSBhdCB0aGUgaGVhZCBvZlxuICogdGhlIGJhY2tpbmcgc3RvcmUuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3AvcXVldWVcbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC9xdWV1ZX5RdWV1ZX0gcXVldWUgVGhlIHF1ZXVlIHdob3NlIGl0ZW1zIGFyZSBiZWluZ1xuICogICAgIGNvdW50ZWQuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBudW1iZXIgb2YgaXRlbXMgaW4gdGhlIHF1ZXVlLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY291bnQocXVldWUpIHtcbiAgcmV0dXJuIHF1ZXVlLnN0b3JlLmxlbmd0aCAtIHF1ZXVlLnBvaW50ZXI7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGEgcXVldWUgaXMgZW1wdHkuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3AvcXVldWVcbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC9xdWV1ZX5RdWV1ZX0gcXVldWUgVGhlIHF1ZXVlIGJlaW5nIGNoZWNrZWQgZm9yIGVtcHRpbmVzcy5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IEVpdGhlciBgdHJ1ZWAgaWYgdGhlIHF1ZXVlIGlzIGVtcHR5IG9yIGBmYWxzZWAgaWYgaXQgaXNcbiAqICAgICBub3QuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBpc0VtcHR5KHF1ZXVlKSB7XG4gIHJldHVybiBxdWV1ZS5zdG9yZS5sZW5ndGggPT09IDA7XG59XG5cbi8qKlxuICogQWRkcyBhbiBpdGVtIHRvIGEgcXVldWUuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3AvcXVldWVcbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC9xdWV1ZX5RdWV1ZX0gcXVldWUgVGhlIHF1ZXVlIHdoaWNoIGlzIGhhdmluZyBhbiBpdGVtIGFkZGVkXG4gKiAgICAgdG8gaXQuXG4gKiBAcGFyYW0geyp9IGl0ZW0gVGhlIGl0ZW0gYmVpbmcgYWRkZWQgdG8gdGhlIHF1ZXVlLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZW5xdWV1ZShxdWV1ZSwgaXRlbSkge1xuICBxdWV1ZS5zdG9yZS5wdXNoKGl0ZW0pO1xufVxuXG4vKipcbiAqIFJlbW92ZXMgYW4gaXRlbSBmcm9tIGEgcXVldWUgYW5kIHJldHVybnMgdGhhdCBpdGVtLiBJZiB0aGUgcmVtb3ZhbCBjYXVzZXMgdGhlXG4gKiBhbW91bnQgb2YgZW1wdHkgc3BhY2UgYXQgdGhlIGhlYWQgb2YgdGhlIGJhY2tpbmcgc3RvcmUgdG8gZXhjZWVkIGEgdGhyZXNob2xkLFxuICogdGhhdCBlbXB0eSBzcGFjZSBpcyByZW1vdmVkLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwL3F1ZXVlXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AvcXVldWV+UXVldWV9IHF1ZXVlIFRoZSBxdWV1ZSB3aG9zZSBvbGRlc3QgaXRlbSBpcyB0byBiZVxuICogICAgIHJlbW92ZWQuXG4gKiBAcmV0dXJuIHsqfSBUaGUgb2xkZXN0IHN0b3JlZCBpdGVtIGluIHRoZSBxdWV1ZS5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGRlcXVldWUocXVldWUpIHtcbiAgaWYgKHF1ZXVlLnN0b3JlLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBFTVBUWTtcbiAgfVxuXG4gIGNvbnN0IGl0ZW0gPSBxdWV1ZS5zdG9yZVtxdWV1ZS5wb2ludGVyXTtcbiAgLy8gUmVtb3ZlcyB0aGUgaXRlbXMgaW4gdGhlIGJhY2tpbmcgc3RvcmUgYmVmb3JlIHRoZSBjdXJyZW50IHBvaW50ZXIsIGlmIHRoZXJlXG4gIC8vIGlzIGVub3VnaCBcImVtcHR5XCIgc3BhY2UgYmVmb3JlIHRoZSBwb2ludGVyIHRvIGp1c3RpZnkgaXQgKGkuZS4sIHRoZSB1bnVzZWRcbiAgLy8gcG9ydGlvbiBpcyBhdCBsZWFzdCBoYWxmIGFzIGxhcmdlIGFzIHRoZSB1c2VkIHBvcnRpb24pXG4gIGlmICgrK3F1ZXVlLnBvaW50ZXIgKiAyID49IHF1ZXVlLnN0b3JlLmxlbmd0aCkge1xuICAgIHF1ZXVlLnN0b3JlID0gcXVldWUuc3RvcmUuc2xpY2UocXVldWUucG9pbnRlcik7XG4gICAgcXVldWUucG9pbnRlciA9IDA7XG4gIH1cbiAgcmV0dXJuIGl0ZW07XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgbmV4dCBpdGVtIGluIGEgcXVldWUgd2l0aG91dCByZW1vdmluZyBpdC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcC9xdWV1ZVxuICogQHBhcmFtIHttb2R1bGU6Y3NwL3F1ZXVlflF1ZXVlfSBxdWV1ZSBUaGUgcXVldWUgd2hvc2Ugb2xkZXN0IGl0ZW0gaXMgdG8gYmVcbiAqICAgICBwZWVrZWQgYXQuXG4gKiBAcmV0dXJuIHsqfSBUaGUgb2xkZXN0IGl0ZW0gc3RvcmVkIGluIHRoZSBxdWV1ZS5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHBlZWsocXVldWUpIHtcbiAgcmV0dXJuIHF1ZXVlLnN0b3JlLmxlbmd0aCA9PT0gMCA/IEVNUFRZIDogcXVldWUuc3RvcmVbcXVldWUucG9pbnRlcl07XG59XG5cbi8qKlxuICogRmlsdGVycyBvdXQgYW55IGl0ZW0gaW4gYSBxdWV1ZSB0aGF0IGRvZXMgbm90IGNhdXNlIHRoZSBzdXBwbGllZCBwcmVkaWNhdGVcbiAqIGZ1bmN0aW9uIHRvIHJldHVybiBgdHJ1ZWAgd2hlbiBwYXNzZWQgdGhhdCBpdGVtLiBUaGlzIGlzIG5vdCBleGFjdGx5IGFcbiAqIGdlbmVyYWwgcHVycG9zZSBxdWV1ZSBvcGVyYXRpb24sIGJ1dCB3ZSBuZWVkIGl0IHdpdGggY2hhbm5lbHMgdGhhdCB3aWxsXG4gKiBvY2Nhc2lvbmFsbHkgd2FudCB0byBnZXQgcmlkIG9mIGluYWN0aXZlIGhhbmRsZXJzLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwL3F1ZXVlXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AvcXVldWV+UXVldWV9IHF1ZXVlIFRoZSBxdWV1ZSBiZWluZyBmaWx0ZXJlZC5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuIFRoZSBwcmVkaWNhdGUgZnVuY3Rpb24gdGhhdCBkZXRlcm1pbmVzIHdoZXRoZXIgYW5cbiAqICAgICBlbGVtZW50IHJlbWFpbnMgaW4gdGhlIHF1ZXVlLlxuICovXG5mdW5jdGlvbiBmaWx0ZXIocXVldWUsIHByZWRpY2F0ZSkge1xuICBmb3IgKGxldCBpID0gMCwgZW5kID0gY291bnQocXVldWUpOyBpIDwgZW5kOyBpKyspIHtcbiAgICBjb25zdCBpdGVtID0gZGVxdWV1ZShxdWV1ZSk7XG4gICAgaWYgKHByZWRpY2F0ZShpdGVtKSkge1xuICAgICAgZW5xdWV1ZShxdWV1ZSwgaXRlbSk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCB7XG4gIEVNUFRZLFxuICBxdWV1ZSxcbiAgaXNRdWV1ZSxcbiAgY291bnQsXG4gIGlzRW1wdHksXG4gIGVucXVldWUsXG4gIGRlcXVldWUsXG4gIHBlZWssXG4gIGZpbHRlclxufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG4vKipcbiAqIEEgc2V0IG9mIHV0aWxpdHkgZnVuY3Rpb25zIHRoYXQgZ2l2ZSBvbmUgb3IgbW9yZSBjaGFubmVscyBzb21lIGV4dHJhXG4gKiBmdW5jdGlvbmFsaXR5LiBFYWNoIG9mIHRoZXNlIGFjY2VwdCBvbmUgb3IgbW9yZSB7QGxpbmsgbW9kdWxlOmNzcC5DaGFubmVsfVxuICogb2JqZWN0cyBhbmQgdGhlbiBjb21iaW5lIG9yIG1hbmlwdWxhdGUgdGhlbSBpbiAoaG9wZWZ1bGx5KSB1c2VmdWwgd2F5cywgc3VjaFxuICogYXMgbWVyZ2luZyB0aGVtLCBzcGxpdHRpbmcgdGhlbSwgcmVkdWNpbmcgdmFsdWVzIHRoZXkgcmVjZWl2ZSB0byBhIHNpbmdsZVxuICogdmFsdWUsIG9yIHRocm90dGxpbmcgdGhlbSBzbyB0aGF0IHRoZXkgb25seSBwcm9kdWNlIG9uZSByZXN1bHQgaW4gYSBnaXZlblxuICogdGltZSBwZXJpb2QuXG4gKlxuICogQG1vZHVsZSBvcHNcbiAqL1xuXG5leHBvcnQge1xuICBtYXAsXG4gIG1lcmdlLFxuICBwYXJ0aXRpb24sXG4gIHBpcGUsXG4gIHNwbGl0LFxuICB0YXAsXG4gIHVudGFwLFxuICB1bnRhcEFsbFxufSBmcm9tIFwibW9kdWxlcy9mbG93XCI7XG5leHBvcnQgeyByZWR1Y2UsIHRvQ2hhbm5lbCwgdG9BcnJheSB9IGZyb20gXCJtb2R1bGVzL2NvbnZlcnNpb25cIjtcbmV4cG9ydCB7IGRlYm91bmNlLCB0aHJvdHRsZSB9IGZyb20gXCJtb2R1bGVzL3RpbWluZ1wiO1xuXG4vKipcbiAqIEEgZnVuY3Rpb24gdGhhdCB0YWtlcyBhIHNpbmdsZSB2YWx1ZSBhbmQsIGRlcGVuZGluZyBvbiB3aGV0aGVyIHRoYXQgdmFsdWVcbiAqIG1lZXRzIHRoZSBmdW5jdGlvbidzIGNyaXRlcmlhIGZvciBwYXNzaW5nLCByZXR1cm5zIGB0cnVlYCBvciBgZmFsc2VgLlxuICpcbiAqIEBjYWxsYmFjayBQcmVkaWNhdGVcbiAqIEBtZW1iZXJvZiBtb2R1bGU6b3BzXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0LiBXaGV0aGVyIG9yIG5vdCB0aGUgdmFsdWUgcGFzc2VzIHRoZSB0ZXN0XG4gKiAgICAgZGVwZW5kcyBvbiB0aGUgY3JpdGVyaWEgZXN0YWJsaXNoZWQgYnkgdGhlIHByZWRpY2F0ZS5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IEVpdGhlciBgdHJ1ZWAgaWYgdGhlIHZhbHVlIHBhc3NlcyBvciBgZmFsc2VgIGlmIGl0IGRvZXNuJ3QuXG4gKi9cblxuLyoqXG4gKiBBIGZ1bmN0aW9uIHRoYXQgbWFwcyBpdHMgaW5wdXQocykgdG8gYW4gb3V0cHV0IHZhbHVlLiBJdCB0YWtlcyBhIHZhcmlhYmxlXG4gKiBudW1iZXIgb2YgaW5wdXQgdmFsdWVzIGFuZCBjYWxjdWxhdGVzIGFuIG91dHB1dCB2YWx1ZSBmcm9tIHRoZW0uXG4gKlxuICogQGNhbGxiYWNrIE1hcHBlclxuICogQG1lbWJlcm9mIG1vZHVsZTpvcHNcbiAqIEBwYXJhbSB7Li4uKn0gdmFsdWVzIFRoZSBpbnB1dCB2YWx1ZXMuXG4gKiBAcmV0dXJuIHsqfSBBbiBvdXRwdXQgdmFsdWUgY2FsY3VsYXRlZCBmcm9tIHRoZSBpbnB1dCB2YWx1ZXMuXG4gKi9cblxuLyoqXG4gKiBBIGZ1bmN0aW9uIHRoYXQgaW50ZWdyYXRlcyBvbmUgb2YgaXRzIHZhbHVlcyBpbnRvIHRoZSBvdGhlci4gSXQncyB1c2VkIGZvclxuICogcmVkdWNpbmcgY2hhbm5lbCB2YWx1ZXMgaW50byBhIHNpbmdsZSB2YWx1ZS5cbiAqXG4gKiBAY2FsbGJhY2sgUmVkdWNlclxuICogQG1lbWJlcm9mIG1vZHVsZTpvcHNcbiAqIEBwYXJhbSB7Kn0gYWNjIFRoZSBjdXJyZW50IGFjY3VtdWxhdGVkIHZhbHVlLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgbmV3IHZhbHVlIHRoYXQgbmVlZHMgdG8gYmUgaW50ZWdyYXRlZCBpbnRvIHRoZVxuICogICAgIGFjY3VtdWxhdGVkIHZhbHVlLlxuICogQHJldHVybiB7Kn0gQSBuZXcgYWNjdW11bGF0ZWQgdmFsdWUsIHJlc3VsdGluZyBmcm9tIGludGVncmF0aW5nIGB2YWx1ZWAgaW50b1xuICogICAgIHRoZSBvcmlnaW5hbCBhY2N1bXVsYXRlZCB2YWx1ZS5cbiAqL1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG5cbi8qKlxuICogVXRpbGl0eSBmdW5jdGlvbnMgdXNlZCBieSBtb3JlIHRoYW4gb25lIG90aGVyIG1vZHVsZS5cbiAqXG4gKiBAbW9kdWxlIG9wcy9jb21tb25cbiAqIEBwcml2YXRlXG4gKi9cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHZhbHVlIHBhc3NlZCBpcyBhIGZpbml0ZSBudW1iZXIuXG4gKlxuICogQHBhcmFtIHsqfSB4IFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IEVpdGhlciBgdHJ1ZWAgaWYgdGhlIHZhbHVlIGlzIGEgZmluaXRlIG51bWJlciBvciBgZmFsc2VgXG4gKiAgICAgaWYgaXQgaXMgbm90LlxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTnVtYmVyKHgpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh4KSA9PT0gXCJbb2JqZWN0IE51bWJlcl1cIiAmJiBpc0Zpbml0ZSh4KTtcbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG4vKipcbiAqIEEgc2V0IG9mIGNoYW5uZWwgdXRpbGl0aWVzIGZvciBjb252ZXJ0aW5nIGNoYW5uZWxzIGludG8gb3RoZXIga2luZHMgb2YgZGF0YSxcbiAqIGFuZCB2aWNlIHZlcnNhLlxuICpcbiAqIEBtb2R1bGUgb3BzL2NvbnZlcnNpb25cbiAqIEBwcml2YXRlXG4gKi9cblxuaW1wb3J0IHsgZ28sIGNoYW4sIHNlbmQsIHNlbmRBc3luYywgY2xvc2UgfSBmcm9tIFwiQGNoYW5rby9jc3BcIjtcblxuLyoqXG4gKiBDcmVhdGVzIGEgc2luZ2xlIHZhbHVlIGZyb20gYSBjaGFubmVsIGJ5IHJ1bm5pbmcgaXRzIHZhbHVlcyB0aHJvdWdoIGFcbiAqIHJlZHVjaW5nIGZ1bmN0aW9uLlxuICpcbiAqIEZvciBldmVyeSB2YWx1ZSBwdXQgb250byB0aGUgaW5wdXQgY2hhbm5lbCwgdGhlIHJlZHVjaW5nIGZ1bmN0aW9uIGlzIGNhbGxlZFxuICogd2l0aCB0d28gcGFyYW1ldGVyczogdGhlIGFjY3VtdWxhdG9yIHRoYXQgaG9sZHMgdGhlIHJlc3VsdCBvZiB0aGUgcmVkdWN0aW9uXG4gKiBzbyBmYXIsIGFuZCB0aGUgbmV3IGlucHV0IHZhbHVlLiBUaGUgaW5pdGlhbCB2YWx1ZSBvZiB0aGUgYWNjdW11bGF0b3IgaXMgdGhlXG4gKiB0aGlyZCBwYXJhbWV0ZXIgdG8gYHJlZHVjZWAuIFRoZSByZWR1Y3Rpb24gaXMgbm90IGNvbXBsZXRlIHVudGlsIHRoZSBpbnB1dFxuICogY2hhbm5lbCBjbG9zZXMuXG4gKlxuICogVGhpcyBmdW5jdGlvbiByZXR1cm5zIGEgY2hhbm5lbC4gV2hlbiB0aGUgZmluYWwgcmVkdWNlZCB2YWx1ZSBpcyBwcm9kdWNlZCwgaXRcbiAqIGlzIHB1dCBvbnRvIHRoaXMgY2hhbm5lbCwgYW5kIHdoZW4gdGhhdCB2YWx1ZSBpcyB0YWtlbiBmcm9tIGl0LCB0aGUgY2hhbm5lbFxuICogaXMgY2xvc2VkLlxuICpcbiAqIGBgYFxuICogaW1wb3J0IHsgZ28sIGNoYW4sIHNlbmQsIHJlY3YsIGNsb3NlIH0gZnJvbSBcIkBjc3BcIjtcbiAqIGltcG9ydCB7IHJlZHVjZSB9IGZyb20gXCJAb3BzXCI7XG4gKlxuICogY29uc3QgaW5wdXQgPSBjaGFuKCk7XG4gKiBjb25zdCBvdXRwdXQgPSByZWR1Y2UoKGFjYywgdmFsdWUpID0+IGFjYyArIHZhbHVlLCBpbnB1dCwgMCk7XG4gKlxuICogZ28oYXN5bmMgKCkgPT4ge1xuICogICBhd2FpdCBzZW5kKGlucHV0LCAxKTtcbiAqICAgYXdhaXQgc2VuZChpbnB1dCwgMik7XG4gKiAgIGF3YWl0IHNlbmQoaW5wdXQsIDMpO1xuICogICBjbG9zZShpbnB1dCk7XG4gKiB9KTtcbiAqXG4gKiBnbyhhc3luYyAoKSA9PiB7XG4gKiAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlY3Yob3V0cHV0KTtcbiAqICAgY29uc29sZS5sb2cob3V0cHV0KTsgICAgICAgICAgICAgICAgICAvLyAtPiA2XG4gKiB9KTtcbiAqXG4gKiBgYGBcbiAqXG4gKiBOb3RlIHRoYXQgdGhlIGlucHV0IGNoYW5uZWwgKm11c3QqIGJlIGNsb3NlZCBhdCBzb21lIHBvaW50LCBvciBubyB2YWx1ZSB3aWxsXG4gKiBldmVyIGFwcGVhciBvbiB0aGUgb3V0cHV0IGNoYW5uZWwuIFRoZSBjbG9zaW5nIG9mIHRoZSBjaGFubmVsIGlzIHdoYXRcbiAqIHNpZ25pZmllcyB0aGF0IHRoZSByZWR1Y3Rpb24gc2hvdWxkIGJlIGNvbXBsZXRlZC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOm9wc1xuICogQHBhcmFtIHttb2R1bGU6b3BzLlJlZHVjZXJ9IGZuIFRoZSByZWR1Y2VyIGZ1bmN0aW9uIHJlc3BvbnNpYmxlIGZvciB0dXJuaW5nXG4gKiAgICAgdGhlIHNlcmllcyBvZiBjaGFubmVsIHZhbHVlcyBpbnRvIGEgc2luZ2xlIG91dHB1dCB2YWx1ZS5cbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5DaGFubmVsfSBjaGFubmVsIFRoZSBjaGFubmVsIHdob3NlIHZhbHVlcyBhcmUgYmVpbmdcbiAqICAgICByZWR1Y2VkIGludG8gYSBzaW5nbGUgb3V0cHV0IHZhbHVlLlxuICogQHBhcmFtIHsqfSBpbml0IFRoZSBpbml0aWFsIHZhbHVlIHRvIGZlZWQgaW50byB0aGUgcmVkdWNlciBmdW5jdGlvbiBmb3IgdGhlXG4gKiAgICAgZmlyc3QgcmVkdWN0aW9uIHN0ZXAuXG4gKiBAcmV0dXJuIHttb2R1bGU6Y3NwLkNoYW5uZWx9IEEgY2hhbm5lbCB0aGF0IHdpbGwsIHdoZW4gdGhlIGlucHV0IGNoYW5uZWxcbiAqICAgICBjbG9zZXMsIGhhdmUgdGhlIHJlZHVjZWQgdmFsdWUgcHV0IGludG8gaXQuIFdoZW4gdGhpcyB2YWx1ZSBpcyB0YWtlbiwgdGhlXG4gKiAgICAgY2hhbm5lbCB3aWxsIGF1dG9tYXRpY2FsbHkgY2xvc2UuXG4gKi9cbmZ1bmN0aW9uIHJlZHVjZShmbiwgY2hhbm5lbCwgaW5pdCkge1xuICBjb25zdCBvdXRwdXQgPSBjaGFuKCk7XG5cbiAgZ28oYXN5bmMgKCkgPT4ge1xuICAgIGxldCBhY2MgPSBpbml0O1xuICAgIGZvciBhd2FpdCAoY29uc3QgdmFsdWUgb2YgY2hhbm5lbCkge1xuICAgICAgYWNjID0gZm4oYWNjLCB2YWx1ZSk7XG4gICAgfVxuICAgIHNlbmRBc3luYyhvdXRwdXQsIGFjYywgKCkgPT4gY2xvc2Uob3V0cHV0KSk7XG4gIH0pO1xuXG4gIHJldHVybiBvdXRwdXQ7XG59XG5cbi8qKlxuICogU2VuZHMgYWxsIHZhbHVlcyBmcm9tIGFuIGl0ZXJhYmxlIHRvIHRoZSBzdXBwbGllZCBjaGFubmVsLlxuICpcbiAqIElmIG5vIGNoYW5uZWwgaXMgcGFzc2VkIHRvIHRoaXMgZnVuY3Rpb24sIGEgbmV3IGNoYW5uZWwgaXMgY3JlYXRlZC4gSW5cbiAqIGVmZmVjdCwgdGhpcyBkaXJlY3RseSBjb252ZXJ0cyBhbiBpdGVyYWJsZSBpbnRvIGEgY2hhbm5lbCB3aXRoIHRoZSBzYW1lXG4gKiB2YWx1ZXMgb24gaXQuXG4gKlxuICogVGhlIGNoYW5uZWwgaXMgY2xvc2VkIGFmdGVyIHRoZSBmaW5hbCBpdGVyYWJsZSB2YWx1ZSBpcyBzZW50IHRvIGl0LlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gd2lsbCBjb252ZXJ0IGFueSBKYXZhU2NyaXB0IG9iamVjdCB0aGF0IGltcGxlbWVudHMgdGhlIGl0ZXJhYmxlXG4gKiBwcm90b2NvbC4gSW4gb3RoZXIgd29yZHMsIGlmIGl0IHdvcmtzIGluIGEgYGZvci4uLm9mYCBzdGF0ZW1lbnQsIGl0IHdpbGwgd29ya1xuICogaGVyZS5cbiAqXG4gKiBgYGBcbiAqIGltcG9ydCB7IGdvLCBjaGFuLCByZWN2LCBpc0Nsb3NlZCB9IGZyb20gXCJAY3NwXCI7XG4gKiBpbXBvcnQgeyB0b0NoYW5uZWwgfSBmcm9tIFwiQG9wc1wiO1xuICpcbiAqIGNvbnN0IGlucHV0ID0gWzEsIDIsIDNdO1xuICogY29uc3Qgb3V0cHV0ID0gdG9DaGFubmVsKGlucHV0KTtcbiAqXG4gKiBnbyhhc3luYyAoKSA9PiB7XG4gKiAgIGNvbnNvbGUubG9nKGF3YWl0IHJlY3Yob3V0cHV0KSk7ICAgICAvLyAtPiAxXG4gKiAgIGNvbnNvbGUubG9nKGF3YWl0IHJlY3Yob3V0cHV0KSk7ICAgICAvLyAtPiAyXG4gKiAgIGNvbnNvbGUubG9nKGF3YWl0IHJlY3Yob3V0cHV0KSk7ICAgICAvLyAtPiAzXG4gKiAgIGNvbnNvbGUubG9nKGlzQ2xvc2VkKG91dHB1dCkpOyAgICAgICAvLyAtPiB0cnVlXG4gKiB9KTtcbiAqIGBgYFxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6b3BzXG4gKiBAcGFyYW0ge2l0ZXJhYmxlfSBpdGVyYWJsZSBUaGUgaXRlcmFibGUgY29udGFpbmluZyB0aGUgdmFsdWVzIHRvIGJlIHNlbnQgdG9cbiAqICAgICB0aGUgY2hhbm5lbC5cbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5DaGFubmVsfSBbY2hhbm5lbF0gVGhlIGNoYW5uZWwgb250byB3aGljaCB0byBwdXQgYWxsIG9mXG4gKiAgICAgdGhlIGFycmF5IGVsZW1lbnRzLiBJZiB0aGlzIGlzIG5vdCBwcmVzZW50LCBhIG5ldyBjaGFubmVsIHdpbGwgYmVcbiAqICAgICBjcmVhdGVkLlxuICogQHJldHVybiB7bW9kdWxlOmNzcC5DaGFubmVsfSB0aGUgY2hhbm5lbCBvbnRvIHdoaWNoIHRoZSBhcnJheSBlbGVtZW50cyBhcmVcbiAqICAgICBwdXQuIFRoaXMgaXMgdGhlIHNhbWUgYXMgdGhlIGlucHV0IGNoYW5uZWwsIGJ1dCBpZiBubyBpbnB1dCBjaGFubmVsIGlzXG4gKiAgICAgc3BlY2lmaWVkLCB0aGlzIHdpbGwgYmUgYSBuZXcgY2hhbm5lbC4gSXQgd2lsbCBjbG9zZSB3aGVuIHRoZSBmaW5hbCB2YWx1ZVxuICogICAgIGlzIHRha2VuIGZyb20gaXQuXG4gKi9cbmZ1bmN0aW9uIHRvQ2hhbm5lbChpdGVyYWJsZSwgY2hhbm5lbCA9IGNoYW4oaXRlcmFibGUubGVuZ3RoKSkge1xuICBnbyhhc3luYyAoKSA9PiB7XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGl0ZXJhYmxlKSB7XG4gICAgICBhd2FpdCBzZW5kKGNoYW5uZWwsIGl0ZW0pO1xuICAgIH1cbiAgICBjbG9zZShjaGFubmVsKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGNoYW5uZWw7XG59XG5cbi8qKlxuICogUmVjZWl2ZXMgYWxsIG9mIHRoZSB2YWx1ZXMgZnJvbSBhIGNoYW5uZWwgYW5kIHB1c2hlcyB0aGVtIGludG8gYW4gYXJyYXkuXG4gKlxuICogSWYgbm8gYXJyYXkgaXMgcGFzc2VkIHRvIHRoaXMgZnVuY3Rpb24sIGEgbmV3IChlbXB0eSkgb25lIGlzIGNyZWF0ZWQuIEluXG4gKiBlZmZlY3QsIHRoaXMgZGlyZWN0bHkgY29udmVydHMgYSBjaGFubmVsIGludG8gYW4gYXJyYXkgd2l0aCB0aGUgc2FtZSB2YWx1ZXMuXG4gKiBFaXRoZXIgd2F5LCB0aGlzIG9wZXJhdGlvbiBjYW5ub3QgY29tcGxldGUgdW50aWwgdGhlIGlucHV0IGNoYW5uZWwgaXMgY2xvc2VkLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gcmV0dXJucyBhIGNoYW5uZWwuIFdoZW4gdGhlIGZpbmFsIGFycmF5IGlzIHByb2R1Y2VkLCBpdCBpcyBzZW50XG4gKiB0byB0aGlzIGNoYW5uZWwsIGFuZCB3aGVuIHRoYXQgdmFsdWUgaXMgcmVjZWl2ZWQgZnJvbSBpdCwgdGhlIGNoYW5uZWwgaXNcbiAqIGNsb3NlZC5cbiAqXG4gKiBgYGBcbiAqIGltcG9ydCB7IGdvLCBjaGFuLCBzZW5kLCByZWN2LCBjbG9zZSB9IGZyb20gXCJAY3NwXCI7XG4gKiBpbXBvcnQgeyB0b0FycmF5IH0gZnJvbSBcIkBvcHNcIjtcbiAqXG4gKiBjb25zdCBpbnB1dCA9IGNoYW4oKTtcbiAqIGNvbnN0IG91dHB1dCA9IHRvQXJyYXkoaW5wdXQpO1xuICpcbiAqIGdvKGFzeW5jICgpID0+IHtcbiAqICAgYXdhaXQgc2VuZChpbnB1dCwgMSk7XG4gKiAgIGF3YWl0IHNlbmQoaW5wdXQsIDIpO1xuICogICBhd2FpdCBzZW5kKGlucHV0LCAzKTtcbiAqICAgY2xvc2UoaW5wdXQpO1xuICogfSk7XG4gKlxuICogZ28oYXN5bmMgKCkgPT4ge1xuICogICBjb25zdCByZXN1bHQgPSBhd2FpdCByZWN2KG91dHB1dCk7XG4gKiAgIGNvbnNvbGUubG9nKHJlc3VsdCk7ICAgICAgICAgICAgICAgICAgICAgLy8gLT4gWzEsIDIsIDNdXG4gKiB9KTtcbiAqIGBgYFxuICpcbiAqIE5vdGUgdGhhdCB0aGUgaW5wdXQgY2hhbm5lbCAqbXVzdCogYmUgY2xvc2VkIGF0IHNvbWUgcG9pbnQsIG9yIG5vIHZhbHVlIHdpbGxcbiAqIGV2ZXIgYXBwZWFyIG9uIHRoZSBvdXRwdXQgY2hhbm5lbC4gVGhlIGNsb3Npbmcgb2YgdGhlIGNoYW5uZWwgaXMgd2hhdFxuICogc2lnbmlmaWVzIHRoYXQgYWxsIG9mIHRoZSB2YWx1ZXMgbmVlZGVkIHRvIG1ha2UgdGhlIGFycmF5IGFyZSBub3cgYXZhaWxhYmxlLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6b3BzXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuQ2hhbm5lbH0gY2hhbm5lbCBUaGUgY2hhbm5lbCBmcm9tIHdoaWNoIHZhbHVlcyBhcmVcbiAqICAgICByZWNlaXZlZCB0byBwdXQgaW50byB0aGUgYXJyYXkuXG4gKiBAcGFyYW0ge2FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBwdXQgdGhlIGNoYW5uZWwgdmFsdWVzIGludG8uIElmIHRoaXMgaXNcbiAqICAgICBub3QgcHJlc2VudCwgYSBuZXcsIGVtcHR5IGFycmF5IHdpbGwgYmUgY3JlYXRlZC5cbiAqIEByZXR1cm4ge21vZHVsZTpjc3AuQ2hhbm5lbH0gQSBjaGFubmVsIHRoYXQgd2lsbCwgd2hlbiB0aGUgaW5wdXQgY2hhbm5lbFxuICogICAgIGNsb3NlcywgaGF2ZSB0aGUgYXJyYXkgb2YgY2hhbm5lbCB2YWx1ZXMgcHV0IG9udG8gaXQuIFdoZW4gdGhpcyBhcnJheSBpc1xuICogICAgIHJlY2VpdmVkLCB0aGUgY2hhbm5lbCB3aWxsIGF1dG9tYXRpY2FsbHkgY2xvc2UuXG4gKi9cbmZ1bmN0aW9uIHRvQXJyYXkoY2hhbm5lbCwgYXJyYXkgPSBbXSkge1xuICByZXR1cm4gcmVkdWNlKFxuICAgIChhY2MsIGlucHV0KSA9PiB7XG4gICAgICBhY2MucHVzaChpbnB1dCk7XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sXG4gICAgY2hhbm5lbCxcbiAgICBhcnJheVxuICApO1xufVxuXG5leHBvcnQgeyByZWR1Y2UsIHRvQ2hhbm5lbCwgdG9BcnJheSB9O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG5cbi8qKlxuICogQSBzZXQgb2YgY2hhbm5lbCBvcGVyYXRpb24gZnVuY3Rpb25zIGZvciByb3V0aW5nIGNoYW5uZWxzIHRvIG90aGVyIGNoYW5uZWxzXG4gKiBpbiBkaWZmZXJlbnQgd2F5cy5cbiAqXG4gKiBJbiBlYWNoIG9mIHRoZXNlIGZ1bmN0aW9ucywgdGhlIHNvdXJjZSBjaGFubmVsIHdpbGwgbm90IGJlIGF2YWlsYWJsZSB0byBiZVxuICogdGFrZW4gZnJvbSwgYXMgYWxsIG9mIHRoZSBzb3VyY2UgY2hhbm5lbHMgd2lsbCBoYXZlIHRoZWlyIHZhbHVlcyB0YWtlbiBieSB0aGVcbiAqIHByb2Nlc3NlcyB3aXRoaW4gdGhlc2UgZnVuY3Rpb25zLiBUaGUgbG9uZSBleGNlcHRpb24gaXMgYHRhcGAsIHdoZXJlIHRoZVxuICogcmVndWxhciBmdW5jdGlvbiBvZiB0aGUgc291cmNlIGNoYW5uZWwgd2lsbCBiZSByZXN0b3JlZCBpZiBhbGwgdGFwcyBhcmVcbiAqIHJlbW92ZWQuIEV2ZW4gc28sIHdoaWxlIGF0IGxlYXN0IG9uZSB0YXAgaXMgaW4gcGxhY2UsIHRoZSBzb3VyY2UgY2hhbm5lbFxuICogY2Fubm90IGJlIHRha2VuIGZyb20uXG4gKlxuICogQG1vZHVsZSBvcHMvZmxvd1xuICogQHByaXZhdGVcbiAqL1xuXG5pbXBvcnQge1xuICBnbyxcbiAgY2hhbixcbiAgc2VuZCxcbiAgcmVjdixcbiAgc2VsZWN0LFxuICBzZW5kQXN5bmMsXG4gIHJlY3ZBc3luYyxcbiAgY2xvc2UsXG4gIENMT1NFRFxufSBmcm9tIFwiQGNoYW5rby9jc3BcIjtcblxuaW1wb3J0IHsgaXNOdW1iZXIgfSBmcm9tIFwibW9kdWxlcy9jb21tb25cIjtcblxuY29uc3QgVEFQUyA9IFN5bWJvbChcIm11bHRpdGFwL3RhcHNcIik7XG5cbi8qKlxuICogUGlwZXMgdGhlIHZhbHVlcyBmcm9tIG9uZSBjaGFubmVsIHRvIGFub3RoZXIgY2hhbm5lbC5cbiAqXG4gKiBUaGlzIHRpZXMgdHdvIGNoYW5uZWxzIHRvZ2V0aGVyIHNvIHRoYXQgcHV0cyBvbiB0aGUgc291cmNlIGNoYW5uZWwgY2FuIGJlXG4gKiB0YWtlbiBvZmYgdGhlIGRlc3RpbmF0aW9uIGNoYW5uZWwuIFRoaXMgZG9lcyBub3QgZHVwbGljYXRlIHZhbHVlcyBpbiBhbnkgd2F5O1xuICogaWYgYW5vdGhlciBwcm9jZXNzIHRha2VzIGEgdmFsdWUgb2ZmIHRoZSBzb3VyY2UgY2hhbm5lbCwgaXQgd2lsbCBuZXZlciBhcHBlYXJcbiAqIG9uIHRoZSBkZXN0aW5hdGlvbiBjaGFubmVsLiBJbiBtb3N0IGNhc2VzIHlvdSB3aWxsIG5vdCB3YW50IHRvIHRha2UgdmFsdWVzXG4gKiBvZmYgYSBjaGFubmVsIG9uY2UgaXQncyBwaXBlZCB0byBhbm90aGVyIGNoYW5uZWwsIHNpbmNlIGl0J3MgZGlmZmljdWx0IHRvXG4gKiBrbm93IHdoaWNoIHZhbHVlcyB3aWxsIGdvIHRvIHdoaWNoIGNoYW5uZWwuXG4gKlxuICogQ2xvc2luZyBlaXRoZXIgY2hhbm5lbCB3aWxsIGJyZWFrIHRoZSBjb25uZWN0aW9uIGJldHdlZW4gdGhlIHR3by4gSWYgdGhlXG4gKiBzb3VyY2UgY2hhbm5lbCBpcyBjbG9zZWQsIHRoZSBkZXN0aW5hdGlvbiBjaGFubmVsIHdpbGwgYnkgZGVmYXVsdCBhbHNvIGJlXG4gKiBjbG9zZWQuIEhvd2V2ZXIsIHBhc3NpbmcgYHRydWVgIGFzIHRoZSB0aGlyZCBwYXJhbWV0ZXIgd2lsbCBjYXVzZSB0aGVcbiAqIGRlc3RpbmF0aW9uIGNoYW5uZWwgdG8gcmVtYWluIG9wZW4gZXZlbiB3aGVuIHRoZSBzb3VyY2UgY2hhbm5lbCBpcyBjbG9zZWRcbiAqICh0aGUgY29ubmVjdGlvbiBpcyBzdGlsbCBicm9rZW4gaG93ZXZlcikuXG4gKlxuICogQmVjYXVzZSBvZiB0aGUgYWJpbGl0eSB0byBsZWF2ZSB0aGUgZGVzdGluYXRpb24gY2hhbm5lbCBvcGVuLCBhIHBvc3NpYmxlIHVzZVxuICogY2FzZSBmb3IgdGhpcyBmdW5jdGlvbiBpcyB0byB3cmFwIHRoZSBkZXN0aW5hdGlvbiBjaGFubmVsKHMpIG9mIG9uZSBvZiB0aGVcbiAqIG90aGVyIGZsb3cgY29udHJvbCBmdW5jdGlvbnMgYmVsb3cgdG8gaGF2ZSBhIGNoYW5uZWwgdGhhdCBzdXJ2aXZlcyB0aGUgc291cmNlXG4gKiBjaGFubmVsIGNsb3NpbmcuIFRoZSByZXN0IG9mIHRob3NlIGZ1bmN0aW9ucyAoYXNpZGUgZnJvbSB0aGUgc3BlY2lhbC1jYXNlXG4gKiBge0BsaW5rIG1vZHVsZTpvcHMudGFwfHRhcH1gKSBhdXRvbWF0aWNhbGx5IGNsb3NlIHRoZWlyIGRlc3RpbmF0aW9uIGNoYW5uZWxzXG4gKiB3aGVuIHRoZSBzb3VyY2UgY2hhbm5lbHMgY2xvc2UuXG4gKlxuICogYGBgXG4gKiBpbXBvcnQgeyBnbywgY2hhbiwgc2VuZCwgcmVjdiwgY2xvc2UsIGlzQ2xvc2VkIH0gZnJvbSBcIkBjc3BcIjtcbiAqIGltcG9ydCB7IHBpcGUgfSBmcm9tIFwiQG9wc1wiO1xuICpcbiAqIGNvbnN0IGlucHV0ID0gY2hhbigpO1xuICogY29uc3Qgb3V0cHV0ID0gcGlwZShpbnB1dCwgY2hhbigpKTtcbiAqXG4gKiBnbyhhc3luYyAoKSA9PiB7XG4gKiAgIGF3YWl0IHNlbmQoaW5wdXQsIDEpO1xuICogICBhd2FpdCBzZW5kKGlucHV0LCAyKTtcbiAqICAgY2xvc2UoaW5wdXQpO1xuICogfSk7XG4gKlxuICogZ28oYXN5bmMgKCkgPT4ge1xuICogICBjb25zb2xlLmxvZyhhd2FpdCByZWN2KG91dHB1dCkpOyAgICAgIC8vIC0+IDFcbiAqICAgY29uc29sZS5sb2coYXdhaXQgcmVjdihvdXRwdXQpKTsgICAgICAvLyAtPiAyXG4gKiAgIGNvbnNvbGUubG9nKGlzQ2xvc2VkKG91dHB1dCkpOyAgICAgICAgLy8gLT4gdHJ1ZVxuICogfSk7XG4gKiBgYGBcbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOm9wc1xuICogQHBhcmFtIHttb2R1bGU6Y3NwLkNoYW5uZWx9IHNyYyBUaGUgc291cmNlIGNoYW5uZWwuXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuQ2hhbm5lbH0gZGVzdCBUaGUgZGVzdGluYXRpb24gY2hhbm5lbC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2tlZXBPcGVuPWZhbHNlXSBBIGZsYWcgdG8gaW5kaWNhdGUgdGhhdCB0aGUgZGVzdGluYXRpb25cbiAqICAgICBjaGFubmVsIHNob3VsZCBiZSBrZXB0IG9wZW4gYWZ0ZXIgdGhlIHNvdXJjZSBjaGFubmVsIGNsb3Nlcy4gQnkgZGVmYXVsdFxuICogICAgIHRoZSBkZXN0aW5hdGlvbiBjaGFubmVsIHdpbGwgY2xvc2Ugd2hlbiB0aGUgc291cmNlIGNoYW5uZWwgY2xvc2VzLlxuICogQHJldHVybiB7bW9kdWxlOmNzcC5DaGFubmVsfSBUaGUgZGVzdGluYXRpb24gY2hhbm5lbC5cbiAqL1xuZnVuY3Rpb24gcGlwZShzcmMsIGRzdCwga2VlcE9wZW4gPSBmYWxzZSkge1xuICBnbyhhc3luYyAoKSA9PiB7XG4gICAgZm9yICg7Oykge1xuICAgICAgY29uc3QgdmFsdWUgPSBhd2FpdCByZWN2KHNyYyk7XG4gICAgICBpZiAodmFsdWUgPT09IENMT1NFRCkge1xuICAgICAgICBpZiAoIWtlZXBPcGVuKSB7XG4gICAgICAgICAgY2xvc2UoZHN0KTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGlmICghKGF3YWl0IHNlbmQoZHN0LCB2YWx1ZSkpKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGRzdDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIHR3byBuZXcgY2hhbm5lbHMgYW5kIHJvdXRlcyB2YWx1ZXMgZnJvbSBhIHNvdXJjZSBjaGFubmVsIHRvIHRoZW1cbiAqIGFjY29yZGluZyB0byBhIHByZWRpY2F0ZSBmdW5jdGlvbi5cbiAqXG4gKiBUaGUgc3VwcGxpZWQgZnVuY3Rpb24gaXMgaW52b2tlZCB3aXRoIGV2ZXJ5IHZhbHVlIHRoYXQgaXMgcHV0IG9udG8gdGhlIHNvdXJjZVxuICogY2hhbm5lbC4gVGhvc2UgdGhhdCByZXR1cm4gYHRydWVgIGFyZSByb3V0ZWQgdG8gdGhlIGZpcnN0IGRlc3RpbmF0aW9uXG4gKiBjaGFubmVsOyB0aG9zZSB0aGF0IHJldHVybiBgZmFsc2VgIGFyZSByb3V0ZWQgdG8gdGhlIHNlY29uZC5cbiAqXG4gKiBUaGUgbmV3IGNoYW5uZWxzIGFyZSBjcmVhdGVkIGJ5IHRoZSBmdW5jdGlvbiBiYXNlZCBvbiB0aGUgYnVmZmVyIHZhbHVlc1xuICogcGFzc2VkIGFzIHRoZSB0aGlyZCBhbmQgZm91cnRoIHBhcmFtZXRlcnMuIElmIG9uZSBvciBib3RoIG9mIHRoZXNlIGFyZVxuICogbWlzc2luZywgYG51bGxgLCBvciBgMGAsIHRoZSBjb3JyZXNwb25kaW5nIGRlc3RpbmF0aW9uIGNoYW5uZWwgaXMgdW5idWZmZXJlZC5cbiAqIElmIG9uZSBpcyBhIHBvc2l0aXZlIGludGVnZXIsIHRoZSBjb3JyZXNwb25kaW5nIGNoYW5uZWwgaXMgYnVmZmVyZWQgYnkgYVxuICogZml4ZWQgYnVmZmVyIG9mIHRoYXQgc2l6ZS4gSWYgdGhlIHBhcmFtZXRlciBmb3IgYSBjaGFubmVsIGlzIGEgYnVmZmVyLCB0aGVuXG4gKiB0aGF0IGJ1ZmZlciBpcyB1c2VkIHRvIGJ1ZmZlciB0aGUgbmV3IGNoYW5uZWwuXG4gKlxuICogQm90aCBuZXcgY2hhbm5lbHMgYXJlIGNsb3NlZCB3aGVuIHRoZSBzb3VyY2UgY2hhbm5lbCBpcyBjbG9zZWQuXG4gKlxuICpcbiAqIGBgYFxuICogaW1wb3J0IHsgZ28sIGNoYW4sIHNlbmQsIGNsb3NlIH0gZnJvbSBcIkBjc3BcIjtcbiAqIGltcG9ydCB7IHBhcnRpdGlvbiB9IGZyb20gXCJAb3BzXCI7XG4gKlxuICogY29uc3QgaW5wdXQgPSBjaGFuKCk7XG4gKiBjb25zdCBjdHJsID0gY2hhbigpO1xuICogY29uc3QgW2V2ZW4sIG9kZF0gPSBwYXJ0aXRpb24oeCA9PiB4ICUgMiA9PT0gMCwgaW5wdXQsIDMsIDMpO1xuICpcbiAqIGdvKGFzeW5jICgpID0+IHtcbiAqICAgYXdhaXQgc2VuZChpbnB1dCwgMSk7XG4gKiAgIGF3YWl0IHNlbmQoaW5wdXQsIDIpO1xuICogICBhd2FpdCBzZW5kKGlucHV0LCAzKTtcbiAqICAgYXdhaXQgc2VuZChpbnB1dCwgNCk7XG4gKiAgIGNsb3NlKGlucHV0KTtcbiAqIH0pO1xuICpcbiAqIGdvKGFzeW5jICgpID0+IHtcbiAqICAgZm9yIGF3YWl0IChjb25zdCB2YWx1ZSBvZiBldmVuKSB7XG4gKiAgICAgY29uc29sZS5sb2codmFsdWUpO1xuICogICB9XG4gKiAgIGF3YWl0IHNlbmQoY3RybCk7XG4gKiB9KTtcbiAqXG4gKiBnbyhhc3luYyAoKSA9PiB7XG4gKiAgIGF3YWl0IHJlY3YoY3RybCk7XG4gKiAgIGZvciBhd2FpdCAoY29uc3QgdmFsdWUgb2Ygb2RkKSB7XG4gKiAgICAgY29uc29sZS5sb2codmFsdWUpO1xuICogICB9XG4gKiB9KTtcbiAqXG4gKiAvLyBUaGUgYGN0cmxgIGNoYW5uZWwgZW5zdXJlcyB0aGF0IGFsbCBvZiB0aGUgdmFsdWVzIG9uIHRoZSBldmVuIGNoYW5uZWwgYXJlXG4gKiAvLyByZWFkIGJlZm9yZSBhbnkgb2YgdGhlIHZhbHVlcyBvbiB0aGUgb2RkIGNoYW5uZWwgYXJlICh0aGlzIGlzIG9ubHlcbiAqIC8vIHBvc3NpYmxlIGJlY2F1c2UgdGhlIG91dHB1dCBjaGFubmVscyBoYXZlIGJ1ZmZlcnMgYmlnIGVub3VnaCB0byBtYWtlIHN1cmVcbiAqIC8vIHRoYXQgbm8gc2VuZCBpcyBibG9ja2VkKS5cbiAqIC8vXG4gKiAvLyAtPiAyXG4gKiAvLyAtPiA0XG4gKiAvLyAtPiAxXG4gKiAvLyAtPiAzXG4gKiBgYGBcbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOm9wc1xuICogQHBhcmFtIHttb2R1bGU6b3BzLlByZWRpY2F0ZX0gZm4gQSBwcmVkaWNhdGUgZnVuY3Rpb24gdXNlZCB0byB0ZXN0IGVhY2ggdmFsdWVcbiAqIG9uIHRoZSBpbnB1dCBjaGFubmVsLlxuICogQHBhcmFtIHttb2R1bGU6Y3NwLkNoYW5uZWx9IHNyYyBUaGUgc291cmNlIGNoYW5uZWwuXG4gKiBAcGFyYW0geyhudW1iZXJ8bW9kdWxlOmNzcC5CdWZmZXIpfSBbdEJ1ZmZlcj0wXSBBIGJ1ZmZlciB1c2VkIHRvIGNyZWF0ZSB0aGVcbiAqICAgICBkZXN0aW5hdGlvbiBjaGFubmVsIHdoaWNoIHJlY2VpdmVzIGFsbCB2YWx1ZXMgdGhhdCBwYXNzZWQgdGhlIHByZWRpY2F0ZS5cbiAqICAgICBJZiB0aGlzIGlzIGEgbnVtYmVyLCBhIHtAbGluayBtb2R1bGU6Y3NwLkZpeGVkQnVmZmVyfSBvZiB0aGF0IHNpemUgd2lsbFxuICogICAgIGJlIHVzZWQuIElmIHRoaXMgaXMgYDBgIG9yIG5vdCBwcmVzZW50LCB0aGUgY2hhbm5lbCB3aWxsIGJlIHVuYnVmZmVyZWQuXG4gKiBAcGFyYW0geyhudW1iZXJ8bW9kdWxlOmNzcC5CdWZmZXIpfSBbZkJ1ZmZlcj0wXSBBIGJ1ZmZlciB1c2VkIHRvIGNyZWF0ZSB0aGVcbiAqICAgICBkZXN0aW5hdGlvbiBjaGFubmVsIHdoaWNoIHJlY2VpdmVzIGFsbCB2YWx1ZXMgdGhhdCBkaWQgbm90IHBhc3MgdGhlXG4gKiAgICAgcHJlZGljYXRlLiBJZiB0aGlzIGlzIGEgbnVtYmVyLCBhIHtAbGluayBtb2R1bGU6Y3NwLkZpeGVkQnVmZmVyfSBvZiB0aGF0XG4gKiAgICAgc2l6ZSB3aWxsIGJlIHVzZWQuIElmIHRoaXMgaXMgYDBgIG9yIG5vdCBwcmVzZW50LCB0aGUgY2hhbm5lbCB3aWxsIGJlXG4gKiAgICAgdW5idWZmZXJlZC5cbiAqIEByZXR1cm4ge21vZHVsZTpjc3AuQ2hhbm5lbFtdfSBBbiBhcnJheSBvZiB0d28gY2hhbm5lbHMuIFRoZSBmaXJzdCBpcyB0aGVcbiAqICAgICBkZXN0aW5hdGlvbiBjaGFubmVsIHdpdGggYWxsIG9mIHRoZSB2YWx1ZXMgdGhhdCBwYXNzZWQgdGhlIHByZWRpY2F0ZSwgdGhlXG4gKiAgICAgc2Vjb25kIGlzIHRoZSBkZXN0aW5hdGlvbiBjaGFubmVsIHdpdGggYWxsIG9mIHRoZSB2YWx1ZXMgdGhhdCBkaWQgbm90XG4gKiAgICAgcGFzcyB0aGUgcHJlZGljYXRlLlxuICovXG5mdW5jdGlvbiBwYXJ0aXRpb24oZm4sIHNyYywgdEJ1ZmZlciA9IDAsIGZCdWZmZXIgPSAwKSB7XG4gIGNvbnN0IHREc3QgPSBjaGFuKHRCdWZmZXIpO1xuICBjb25zdCBmRHN0ID0gY2hhbihmQnVmZmVyKTtcblxuICBnbyhhc3luYyAoKSA9PiB7XG4gICAgZm9yICg7Oykge1xuICAgICAgY29uc3QgdmFsdWUgPSBhd2FpdCByZWN2KHNyYyk7XG4gICAgICBpZiAodmFsdWUgPT09IENMT1NFRCkge1xuICAgICAgICBjbG9zZSh0RHN0KTtcbiAgICAgICAgY2xvc2UoZkRzdCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgYXdhaXQgc2VuZChmbih2YWx1ZSkgPyB0RHN0IDogZkRzdCwgdmFsdWUpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIFt0RHN0LCBmRHN0XTtcbn1cblxuLyoqXG4gKiBNZXJnZXMgb25lIG9yIG1vcmUgY2hhbm5lbHMgaW50byBhIHNpbmdsZSBkZXN0aW5hdGlvbiBjaGFubmVsLlxuICpcbiAqIFZhbHVlcyBhcmUgZ2l2ZW4gdG8gdGhlIGRlc3RpbmF0aW9uIGNoYW5uZWwgYXMgdGhleSBhcmUgc2VudCB0byB0aGUgc291cmNlXG4gKiBjaGFubmVscy4gSWYgYG1lcmdlYCBpcyBjYWxsZWQgd2hlbiB0aGVyZSBhcmUgYWxyZWFkeSB2YWx1ZXMgb24gbXVsdGlwbGVcbiAqIHNvdXJjZSBjaGFubmVscywgdGhlIG9yZGVyIHRoYXQgdGhleSdyZSBwdXQgb250byB0aGUgZGVzdGluYXRpb24gY2hhbm5lbCBpc1xuICogcmFuZG9tLlxuICpcbiAqIFRoZSBkZXN0aW5hdGlvbiBjaGFubmVsIGlzIGNyZWF0ZWQgYnkgdGhlIGZ1bmN0aW9uIGJhc2VkIG9uIHRoZSBidWZmZXIgdmFsdWVcbiAqIHBhc3NlZCBhcyB0aGUgc2Vjb25kIHBhcmFtZXRlci4gSWYgdGhpcyBpcyBtaXNzaW5nLCBgbnVsbGAsIG9yIGAwYCwgdGhlXG4gKiBkZXN0aW5hdGlvbiBjaGFubmVsIHdpbGwgYmUgdW5idWZmZXJlZC4gSWYgaXQncyBhIHBvc2l0aXZlIGludGVnZXIsIHRoZVxuICogZGVzdGluYXRpb24gY2hhbm5lbCBpcyBidWZmZXJlZCBieSBhIGZpeGVkIGJ1ZmZlciBvZiB0aGF0IHNpemUuIElmIHRoZVxuICogcGFyYW1ldGVyIGlzIGEgYnVmZmVyLCB0aGVuIHRoYXQgYnVmZmVyIGlzIHVzZWQgdG8gYnVmZmVyIHRoZSBkZXN0aW5hdGlvblxuICogY2hhbm5lbC5cbiAqXG4gKiBBcyBlYWNoIHNvdXJjZSBjaGFubmVsIGNsb3NlcywgaXQgaXMgcmVtb3ZlZCBmcm9tIHRoZSBtZXJnZSwgbGVhdmluZyB0aGVcbiAqIGNoYW5uZWxzIHRoYXQgYXJlIHN0aWxsIG9wZW4gdG8gY29udGludWUgbWVyZ2luZy4gV2hlbiAqYWxsKiBvZiB0aGUgc291cmNlXG4gKiBjaGFubmVscyBjbG9zZSwgdGhlbiB0aGUgZGVzdGluYXRpb24gY2hhbm5lbCBpcyBjbG9zZWQuXG4gKlxuICogYGBgXG4gKiBpbXBvcnQgeyBnbywgY2hhbiwgc2VuZCwgcmVjdiB9IGZyb20gXCJAY3NwXCI7XG4gKiBpbXBvcnQgeyBtZXJnZSB9IGZyb20gXCJAb3BzXCI7XG4gKlxuICogY29uc3QgaW5wdXQxID0gY2hhbigpO1xuICogY29uc3QgaW5wdXQyID0gY2hhbigpO1xuICogY29uc3QgaW5wdXQzID0gY2hhbigpO1xuICogY29uc3Qgb3V0cHV0ID0gbWVyZ2UoW2lucHV0MSwgaW5wdXQyLCBpbnB1dDNdKTtcbiAqXG4gKiBnbyhhc3luYyAoKSA9PiB7XG4gKiAgIC8vIEJlY2F1c2Ugd2UncmUgc2VuZGluZyB0byBhbGwgdGhyZWUgY2hhbm5lbHMgaW4gdGhlIHNhbWVcbiAqICAgLy8gcHJvY2Vzcywgd2Uga25vdyB0aGUgb3JkZXIgaW4gd2hpY2ggdGhlIHZhbHVlcyB3aWxsIGJlXG4gKiAgIC8vIHNlbnQgdG8gdGhlIG91dHB1dCBjaGFubmVsOyBpbiBnZW5lcmFsLCB3ZSB3b24ndCBrbm93IHRoaXNcbiAqICAgYXdhaXQgc2VuZChpbnB1dDEsIDEpO1xuICogICBhd2FpdCBzZW5kKGlucHV0MiwgMik7XG4gKiAgIGF3YWl0IHNlbmQoaW5wdXQzLCAzKTtcbiAqIH0pO1xuICpcbiAqIGdvKGFzeW5jICgpID0+IHtcbiAqICAgY29uc29sZS5sb2coYXdhaXQgcmVjdihvdXRwdXQpKTsgICAgICAvLyAtPiAxXG4gKiAgIGNvbnNvbGUubG9nKGF3YWl0IHJlY3Yob3V0cHV0KSk7ICAgICAgLy8gLT4gMlxuICogICBjb25zb2xlLmxvZyhhd2FpdCByZWN2KG91dHB1dCkpOyAgICAgIC8vIC0+IDNcbiAqIH0pO1xuICogYGBgXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpvcHNcbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5DaGFubmVsW119IHNyY3MgQW4gYXJyYXkgb2Ygc291cmNlIGNoYW5uZWxzLlxuICogQHBhcmFtIHsobnVtYmVyfG1vZHVsZTpjc3AuQnVmZmVyKX0gW2J1ZmZlcj0wXSBBIGJ1ZmZlciB1c2VkIHRvIGNyZWF0ZSB0aGVcbiAqICAgICBkZXN0aW5hdGlvbiBjaGFubmVsLiBJZiB0aGlzIGlzIGEgbnVtYmVyLCBhXG4gKiAgICAge0BsaW5rIG1vZHVsZTpjc3AuRml4ZWRCdWZmZXJ9IG9mIHRoYXQgc2l6ZSB3aWxsIGJlIHVzZWQuIElmIHRoaXMgaXMgYDBgXG4gKiAgICAgb3Igbm90IHByZXNlbnQsIHRoZSBjaGFubmVsIHdpbGwgYmUgdW5idWZmZXJlZC5cbiAqIEByZXR1cm4ge21vZHVsZTpjc3AuQ2hhbm5lbH0gVGhlIGRlc3RpbmF0aW9uIGNoYW5uZWwsIHdoaWNoIHdpbGwgcmVjZWl2ZSBhbGxcbiAqICAgICB2YWx1ZXMgcHV0IG9udG8gZXZlcnkgc291cmNlIGNoYW5uZWwuXG4gKi9cbmZ1bmN0aW9uIG1lcmdlKHNyY3MsIGJ1ZmZlciA9IDApIHtcbiAgY29uc3QgZHN0ID0gY2hhbihidWZmZXIpO1xuICBjb25zdCBpbnB1dHMgPSBzcmNzLnNsaWNlKCk7XG5cbiAgZ28oYXN5bmMgKCkgPT4ge1xuICAgIGZvciAoOzspIHtcbiAgICAgIGlmIChpbnB1dHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY29uc3QgeyB2YWx1ZSwgY2hhbm5lbCB9ID0gYXdhaXQgc2VsZWN0KGlucHV0cyk7XG4gICAgICBpZiAodmFsdWUgPT09IENMT1NFRCkge1xuICAgICAgICBpbnB1dHMuc3BsaWNlKGlucHV0cy5pbmRleE9mKGNoYW5uZWwpLCAxKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBhd2FpdCBzZW5kKGRzdCwgdmFsdWUpO1xuICAgIH1cbiAgICBjbG9zZShkc3QpO1xuICB9KTtcblxuICByZXR1cm4gZHN0O1xufVxuXG4vKipcbiAqIFNwbGl0cyBhIHNpbmdsZSBjaGFubmVsIGludG8gbXVsdGlwbGUgZGVzdGluYXRpb24gY2hhbm5lbHMsIHdpdGggZWFjaFxuICogZGVzdGluYXRpb24gY2hhbm5lbCByZWNlaXZpbmcgZXZlcnkgdmFsdWUgc2VudCB0byB0aGUgc291cmNlIGNoYW5uZWwuXG4gKlxuICogRXZlcnkgcGFyYW1ldGVyIGFmdGVyIHRoZSBmaXJzdCByZXByZXNlbnRzIHRoZSBidWZmZXIgZnJvbSBhIHNpbmdsZVxuICogZGVzdGluYXRpb24gY2hhbm5lbC4gRWFjaCBgMGAgb3IgYG51bGxgIHdpbGwgcHJvZHVjZSBhbiB1bmJ1ZmZlcmVkIGNoYW5uZWwsXG4gKiB3aGlsZSBlYWNoIHBvc2l0aXZlIGludGVnZXIgd2lsbCBwcm9kdWNlIGEgY2hhbm5lbCBidWZmZXJlZCBieSBhIGZpeGVkIGJ1ZmZlclxuICogb2YgdGhhdCBzaXplLiBFYWNoIGJ1ZmZlciB3aWxsIHByb2R1Y2UgYSBidWZmZXJlZCBjaGFubmVsIGJhY2tlZCBieSB0aGF0XG4gKiBidWZmZXIuIElmIHRoZXJlIGFyZSBubyBwYXJhbWV0ZXJzIGFmdGVyIHRoZSBmaXJzdCwgdGhlbiB0d28gdW5idWZmZXJlZFxuICogY2hhbm5lbHMgd2lsbCBiZSBwcm9kdWNlZCBhcyBhIGRlZmF1bHQuXG4gKlxuICogV2hlbiB0aGUgc291cmNlIGNoYW5uZWwgaXMgY2xvc2VkLCBhbGwgZGVzdGluYXRpb24gY2hhbm5lbHMgd2lsbCBhbHNvIGJlXG4gKiBjbG9zZWQuIEhvd2V2ZXIsIGlmIGRlc3RpbmF0aW9uIGNoYW5uZWxzIGFyZSBjbG9zZWQsIHRoZXkgZG8gbm90aGluZyB0byB0aGVcbiAqIHNvdXJjZSBjaGFubmVsLlxuICpcbiAqIGBgYFxuICogaW1wb3J0IHsgZ28sIGNoYW4sIHNlbmQgfSBmcm9tIFwiQGNzcFwiO1xuICogaW1wb3J0IHsgc3BsaXQgfSBmcm9tIFwiQG9wc1wiO1xuICpcbiAqIGNvbnN0IGlucHV0ID0gY2hhbigpO1xuICogY29uc3Qgb3V0cHV0cyA9IHNwbGl0KGlucHV0LCAzKTtcbiAqXG4gKiBnbyhhc3luYyAoKSA9PiB7XG4gKiAgIGF3YWl0IHNlbmQoaW5wdXQsIDEpO1xuICogICBhd2FpdCBzZW5kKGlucHV0LCAyKTtcbiAqICAgYXdhaXQgc2VuZChpbnB1dCwgMyk7XG4gKiB9KTtcbiAqXG4gKiBnbyhhc3luYyAoKSA9PiB7XG4gKiAgIGZvciBhd2FpdCAoY29uc3Qgb3V0cHV0IG9mIG91dHB1dHMpIHtcbiAqICAgICBjb25zb2xlLmxvZyhvdXRwdXQpO1xuICogICAgIC8vIC0+IDFcbiAqICAgICAvLyAtPiAyXG4gKiAgICAgLy8gLT4gM1xuICogICB9XG4gKiB9KTtcbiAqIGBgYFxuICpcbiAqIFRoaXMgZnVuY3Rpb24gbW92ZXMgaXRzIHZhbHVlcyB0byB0aGUgb3V0cHV0IGNoYW5uZWxzIGFzeW5jaHJvbm91c2x5LiBUaGlzXG4gKiBtZWFucyB0aGF0IGV2ZW4gd2hlbiB1c2luZyB1bmJ1ZmZlcmVkIGNoYW5uZWxzLCBpdCBpcyBub3QgbmVjZXNzYXJ5IGZvciBhbGxcbiAqIG91dHB1dCBjaGFubmVscyB0byBiZSByZWNlaXZlZCBmcm9tIGJlZm9yZSB0aGUgbmV4dCBzZW5kIHRvIHRoZSBpbnB1dCBjaGFubmVsXG4gKiBjYW4gY29tcGxldGUuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpvcHNcbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5DaGFubmVsfSBzcmMgVGhlIHNvdXJjZSBjaGFubmVsLlxuICogQHBhcmFtIHsuLi4obnVtYmVyfG1vZHVsZTpjc3AuQnVmZmVyKX0gW2J1ZmZlcnM9Ml0gVGhlIGJ1ZmZlcnMgdXNlZCB0byBjcmVhdGVcbiAqICAgICB0aGUgZGVzdGluYXRpb24gY2hhbm5lbHMuIEVhY2ggZW50cnkgaXMgdHJlYXRlZCBzZXBhcmF0ZWx5LiBJZiBvbmUgaXMgYVxuICogICAgIG51bWJlciwgdGhlbiBhIHtAbGluayBtb2R1bGU6Y3NwLkZpeGVkQnVmZmVyfEZpeGVkQnVmZmVyfSBvZiB0aGF0IHNpemVcbiAqICAgICB3aWxsIGJlIHVzZWQuIElmIG9uZSBpcyBhIGAwYCwgdGhlbiB0aGUgY29ycmVzcG9uZGluZyBjaGFubmVsIHdpbGwgYmVcbiAqICAgICB1bmJ1ZmZlcmVkLiAqKkV4Y2VwdGlvbjoqKiBpZiBhIHNpbmdsZSBudW1iZXIgaXMgcGFzc2VkLCB0aGVuIHRoYXQgbnVtYmVyXG4gKiAgICAgb2YgdW5idWZlcnJlZCBjaGFubmVscyB3aWxsIGJlIGNyZWF0ZWQuIFRoaXMgbWVhbnMgdGhhdCB0aGUgZGVmYXVsdCBpcyB0b1xuICogICAgIGNyZWF0ZSB0d28gdW5idWZmZXJlZCBjaGFubmVscy4gVG8gY3JlYXRlIGEgc2luZ2xlIGNoYW5uZWwgd2l0aCBhIGZpeGVkXG4gKiAgICAgYnVmZmVyLCB1c2UgYHtAbGluayBjc3AuZml4ZWR8Zml4ZWR9YCBleHBsaWNpdGx5LlxuICogQHJldHVybiB7bW9kdWxlOmNzcC5DaGFubmVsW119IEFuIGFycmF5IG9mIGRlc3RpbmF0aW9uIGNoYW5uZWxzLlxuICovXG5mdW5jdGlvbiBzcGxpdChzcmMsIC4uLmJ1ZmZlcnMpIHtcbiAgbGV0IGJmcyA9IGJ1ZmZlcnMubGVuZ3RoID09PSAwID8gWzJdIDogYnVmZmVycztcbiAgaWYgKGJmcy5sZW5ndGggPT09IDEgJiYgaXNOdW1iZXIoYmZzWzBdKSkge1xuICAgIGNvbnN0IGNvdW50ID0gYmZzWzBdO1xuICAgIGJmcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgYmZzLnB1c2goMCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgZHN0cyA9IGJmcy5tYXAoYmYgPT4gY2hhbihiZikpO1xuICBjb25zdCBkb25lID0gY2hhbigpO1xuICBsZXQgY291bnQgPSAwO1xuXG4gIGZ1bmN0aW9uIGNhbGxiYWNrKCkge1xuICAgIGlmICgtLWNvdW50ID09PSAwKSB7XG4gICAgICBzZW5kQXN5bmMoZG9uZSk7XG4gICAgfVxuICB9XG5cbiAgZ28oYXN5bmMgKCkgPT4ge1xuICAgIGZvciAoOzspIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gYXdhaXQgcmVjdihzcmMpO1xuICAgICAgaWYgKHZhbHVlID09PSBDTE9TRUQpIHtcbiAgICAgICAgZm9yIChjb25zdCBkc3Qgb2YgZHN0cykge1xuICAgICAgICAgIGNsb3NlKGRzdCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNvdW50ID0gZHN0cy5sZW5ndGg7XG4gICAgICBmb3IgKGNvbnN0IGRzdCBvZiBkc3RzKSB7XG4gICAgICAgIHNlbmRBc3luYyhkc3QsIHZhbHVlLCBjYWxsYmFjayk7XG4gICAgICB9XG4gICAgICBhd2FpdCByZWN2KGRvbmUpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGRzdHM7XG59XG5cbi8qKlxuICogVXRpbGl0eSBmdW5jdGlvbiB0byBhZGQgdGhlIGFiaWxpdHkgdG8gYmUgdGFwcGVkIHRvIGEgY2hhbm5lbCB0aGF0IGlzIGJlaW5nXG4gKiB0YXBwZWQuIFRoaXMgd2lsbCBhZGQgYSBzaW5nbGUgcHJvcGVydHkgdG8gdGhhdCBjaGFubmVsIG9ubHkgKG5hbWVkXG4gKiAnQEBtdWx0aXRhcC90YXBzJyBzbyBhcyB0byBkZWNyZWFzZSB0aGUgY2hhbmNlIG9mIGNvbGxpc2lvbiksIGJ1dCB0aGUgdGFwcGluZ1xuICogZnVuY3Rpb25hbGl0eSBpdHNlbGYgaXMgcHJvdmlkZWQgb3V0c2lkZSB0aGUgY2hhbm5lbCBvYmplY3QuIFRoaXMgbmV3XG4gKiBwcm9wZXJ0eSBpcyBhbiBhcnJheSBvZiB0aGUgY2hhbm5lbHMgdGFwcGluZyB0aGlzIGNoYW5uZWwsIGFuZCBpdCB3aWxsIGJlXG4gKiByZW1vdmVkIGlmIGFsbCB0YXBzIGFyZSByZW1vdmVkLlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5DaGFubmVsfSBzcmMgVGhlIHNvdXJjZSBjaGFubmVsIHRvIGJlIHRhcHBlZC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIG1ha2VUYXAoc3JjKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzcmMsIFRBUFMsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgd3JpdGFibGU6IHRydWUsXG4gICAgdmFsdWU6IFtdXG4gIH0pO1xuXG4gIGNvbnN0IGRvbmUgPSBjaGFuKCk7XG4gIGxldCBjb3VudCA9IDA7XG5cbiAgZnVuY3Rpb24gY2FsbGJhY2soKSB7XG4gICAgaWYgKC0tY291bnQgPT09IDApIHtcbiAgICAgIHNlbmRBc3luYyhkb25lKTtcbiAgICB9XG4gIH1cblxuICBnbyhhc3luYyAoKSA9PiB7XG4gICAgZm9yICg7Oykge1xuICAgICAgY29uc3QgdmFsdWUgPSBhd2FpdCByZWN2KHNyYyk7XG4gICAgICBpZiAodmFsdWUgPT09IENMT1NFRCB8fCBzcmNbVEFQU10ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGRlbGV0ZSBzcmNbVEFQU107XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjb3VudCA9IHNyY1tUQVBTXS5sZW5ndGg7XG4gICAgICBmb3IgKGNvbnN0IHRhcCBvZiBzcmNbVEFQU10pIHtcbiAgICAgICAgc2VuZEFzeW5jKHRhcCwgdmFsdWUsIGNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICAgIGF3YWl0IHJlY3YoZG9uZSk7XG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBUYXBzIGEgY2hhbm5lbCwgc2VuZGluZyBhbGwgb2YgdGhlIHZhbHVlcyBzZW50IHRvIGl0IHRvIHRoZSBkZXN0aW5hdGlvblxuICogY2hhbm5lbC5cbiAqXG4gKiBBIHNvdXJjZSBjaGFubmVsIGNhbiBiZSB0YXBwZWQgbXVsdGlwbGUgdGltZXMsIGFuZCBhbGwgb2YgdGhlIHRhcHBpbmdcbiAqIChkZXN0aW5hdGlvbikgY2hhbm5lbHMgcmVjZWl2ZSBlYWNoIHZhbHVlIHNlbnQgdG8gdGhlIHRhcHBlZCAoc291cmNlKVxuICogY2hhbm5lbC5cbiAqXG4gKiBUaGlzIGlzIGRpZmZlcmVudCBmcm9tIGB7QGxpbmsgbW9kdWxlOm9wcy5zcGxpdHxzcGxpdH1gIGluIHRoYXQgaXQnc1xuICogdGVtcG9yYXJ5LiBDaGFubmVscyBjYW4gdGFwIGEgY2hhbm5lbCBhbmQgdGhlbiB1bnRhcCBpdCwgbXVsdGlwbGUgdGltZXMsIGFzXG4gKiBuZWVkZWQuIElmIGEgc291cmNlIGNoYW5uZWwgaGFzIGFsbCBvZiBpdHMgdGFwcyByZW1vdmVkLCB0aGVuIGl0IHJldmVydHMgdG8gYVxuICogbm9ybWFsIGNoYW5uZWwsIGp1c3QgYXMgaXQgd2FzIGJlZm9yZSBpdCB3YXMgdGFwcGVkLlxuICpcbiAqIEFsc28gdW5saWtlIGB7QGxpbmsgbW9kdWxlOm9wcy5zcGxpdHxzcGxpdH1gLCBlYWNoIGNhbGwgY2FuIG9ubHkgdGFwIG9uY2UuXG4gKiBGb3IgbXVsdGlwbGUgY2hhbm5lbHMgdG8gdGFwIGEgc291cmNlIGNoYW5uZWwsIGB0YXBgIGhhcyB0byBiZSBjYWxsZWRcbiAqIG11bHRpcGxlIHRpbWVzLlxuICpcbiAqIENsb3NpbmcgZWl0aGVyIHRoZSBzb3VyY2Ugb3IgYW55IG9mIHRoZSBkZXN0aW5hdGlvbiBjaGFubmVscyBoYXMgbm8gZWZmZWN0IG9uXG4gKiBhbnkgb2YgdGhlIG90aGVyIGNoYW5uZWxzLlxuICpcbiAqIGBgYFxuICogaW1wb3J0IHsgZ28sIGNoYW4sIHNlbmQsIHJlY3YgfSBmcm9tIFwiQGNzcFwiO1xuICogaW1wb3J0IHsgdGFwIH0gZnJvbSBcIkBvcHNcIjtcbiAqXG4gKiBjb25zdCBpbnB1dCA9IGNoYW4oKTtcbiAqIGNvbnN0IHRhcHBlciA9IGNoYW4oKTtcbiAqIHRhcChpbnB1dCwgdGFwcGVyKTtcbiAqXG4gKiBnbyhhc3luYyAoKSA9PiB7XG4gKiAgIGF3YWl0IHNlbmQoaW5wdXQsIDEpO1xuICogICBhd2FpdCBzZW5kKGlucHV0LCAyKTtcbiAqIH0pO1xuICpcbiAqIGdvKGFzeW5jICgpID0+IHtcbiAqICAgY29uc29sZS5sb2coYXdhaXQgcmVjdih0YXBwZXIpKTsgICAvLyAtPiAxXG4gKiAgIGNvbnNvbGUubG9nKGF3YWl0IHJlY3YodGFwcGVyKSk7ICAgLy8gLT4gMlxuICogfSk7XG4gKlxuICogYGBgXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpvcHNcbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5DaGFubmVsfSBzcmMgVGhlIGNoYW5uZWwgdG8gYmUgdGFwcGVkLlxuICogQHBhcmFtIHttb2R1bGU6Y3NwLkNoYW5uZWx9IFtkZXN0XSBUaGUgY2hhbm5lbCB0YXBwaW5nIHRoZSBzb3VyY2UgY2hhbm5lbC4gSWZcbiAqICAgICB0aGlzIGlzIG5vdCBwcmVzZW50LCBhIG5ldyB1bmJ1ZmZlcmVkIGNoYW5uZWwgd2lsbCBiZSBjcmVhdGVkLlxuICogQHJldHVybiB7bW9kdWxlOmNzcC5DaGFubmVsfSBUaGUgZGVzdGluYXRpb24gY2hhbm5lbC4gVGhpcyBpcyB0aGUgc2FtZSBhcyB0aGVcbiAqICAgICBzZWNvbmQgYXJndW1lbnQsIGlmIHByZXNlbnQ7IG90aGVyd2lzZSBpdCBpcyB0aGUgbmV3bHktY3JlYXRlZCBjaGFubmVsXG4gKiAgICAgdGFwcGluZyB0aGUgc291cmNlIGNoYW5uZWwuXG4gKi9cbmZ1bmN0aW9uIHRhcChzcmMsIGRzdCA9IGNoYW4oKSkge1xuICBpZiAoIXNyY1tUQVBTXSkge1xuICAgIG1ha2VUYXAoc3JjKTtcbiAgfVxuICBpZiAoIXNyY1tUQVBTXS5pbmNsdWRlcyhkc3QpKSB7XG4gICAgc3JjW1RBUFNdLnB1c2goZHN0KTtcbiAgfVxuICByZXR1cm4gZHN0O1xufVxuXG4vKipcbiAqIFVudGFwcyBhIHByZXZpb3VzbHkgdGFwcGluZyBkZXN0aW5hdGlvbiBjaGFubmVsIGZyb20gaXRzIHNvdXJjZSBjaGFubmVsLlxuICpcbiAqIFRoaXMgcmVtb3ZlcyBhIHByZXZpb3VzbHkgY3JlYXRlZCB0YXAuIFRoZSBkZXN0aW5hdGlvbiAodGFwcGluZykgY2hhbm5lbCB3aWxsXG4gKiBzdG9wIHJlY2VpdmluZyB0aGUgdmFsdWVzIHNlbnQgdG8gdGhlIHNvdXJjZSBjaGFubmVsLlxuICpcbiAqIElmIHRoZSBkZXN0aW5hdGlvbiBjaGFubmVsIHdhcyBub3QsIGluIGZhY3QsIHRhcHBpbmcgdGhlIHNvdXJjZSBjaGFubmVsLCB0aGlzXG4gKiBmdW5jdGlvbiB3aWxsIGRvIG5vdGhpbmcuIElmIGFsbCB0YXBzIGFyZSByZW1vdmVkLCB0aGUgc291cmNlIGNoYW5uZWwgcmV2ZXJ0c1xuICogdG8gbm9ybWFsIChpLmUuLCBpdCBubyBsb25nZXIgaGFzIHRoZSB0YXBwaW5nIGNvZGUgYXBwbGllZCB0byBpdCBhbmQgY2FuIGJlXG4gKiB0YWtlbiBmcm9tIGFzIG5vcm1hbCkuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpvcHNcbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5DaGFubmVsfSBzcmMgVGhlIHRhcHBlZCBjaGFubmVsLlxuICogQHBhcmFtIHttb2R1bGU6Y3NwLkNoYW5uZWx9IGRlc3QgVGhlIGNoYW5uZWwgdGhhdCBpcyB0YXBwaW5nIHRoZSBzb3VyY2VcbiAqICAgICBjaGFubmVsIHRoYXQgc2hvdWxkIG5vIGxvbmdlciBiZSB0YXBwaW5nIHRoZSBzb3VyY2UgY2hhbm5lbC5cbiAqL1xuZnVuY3Rpb24gdW50YXAoc3JjLCBkc3QpIHtcbiAgY29uc3QgdGFwcyA9IHNyY1tUQVBTXTtcbiAgaWYgKHRhcHMpIHtcbiAgICBjb25zdCBpbmRleCA9IHRhcHMuaW5kZXhPZihkc3QpO1xuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHRhcHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIGlmICh0YXBzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBzZW5kQXN5bmMoc3JjKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFsbCB0YXBzIGZyb20gYSBzb3VyY2UgY2hhbm5lbC5cbiAqXG4gKiBUaGUgcHJldmlvdXNseS10YXBwZWQgY2hhbm5lbCByZXZlcnRzIHRvIGEgbm9ybWFsIGNoYW5uZWwsIHdoaWxlIGFueSBjaGFubmVsc1xuICogdGhhdCBtaWdodCBoYXZlIGJlZW4gdGFwcGluZyBpdCBubyBsb25nZXIgcmVjZWl2ZSB2YWx1ZXMgZnJvbSB0aGUgc291cmNlXG4gKiBjaGFubmVsLiBJZiB0aGUgc291cmNlIGNoYW5uZWwgaGFkIG5vIHRhcHMsIHRoaXMgZnVuY3Rpb24gZG9lcyBub3RoaW5nLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6b3BzXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuQ2hhbm5lbH0gc3JjIFRoZSB0YXBwZWQgY2hhbm5lbC4gQWxsIHRhcHMgd2lsbCBiZSByZW1vdmVkXG4gKiAgICAgZnJvbSB0aGlzIGNoYW5uZWwuXG4gKi9cbmZ1bmN0aW9uIHVudGFwQWxsKHNyYykge1xuICBpZiAoc3JjW1RBUFNdKSB7XG4gICAgc3JjW1RBUFNdID0gW107XG4gICAgc2VuZEFzeW5jKHNyYyk7XG4gIH1cbn1cblxuLyoqXG4gKiBNYXBzIHRoZSB2YWx1ZXMgZnJvbSBvbmUgb3IgbW9yZSBzb3VyY2UgY2hhbm5lbHMgdGhyb3VnaCBhIGZ1bmN0aW9uLCBzZW5kaW5nXG4gKiB0aGUgcmVzdWx0cyB0byBhIG5ldyBjaGFubmVsLlxuICpcbiAqIFRoZSBtYXBwaW5nIGZ1bmN0aW9uIGlzIGdpdmVuIG9uZSB2YWx1ZSBmcm9tIGVhY2ggc291cmNlIGNoYW5uZWwsIGFmdGVyIGF0XG4gKiBsZWFzdCBvbmUgdmFsdWUgYmVjb21lcyBhdmFpbGFibGUgb24gZXZlcnkgc291cmNlIGNoYW5uZWwuIFRoZSBvdXRwdXQgdmFsdWVcbiAqIGZyb20gdGhlIGZ1bmN0aW9uIGlzIHRoZW4gc2VudCB0byB0aGUgZGVzdGluYXRpb24gY2hhbm5lbC5cbiAqXG4gKiBUaGUgZGVzdGluYXRpb24gY2hhbm5lbCBpcyBjcmVhdGVkIGJ5IHRoZSBmdW5jdGlvbiBiYXNlZCBvbiB0aGUgYnVmZmVyIHZhbHVlXG4gKiBwYXNzZWQgYXMgdGhlIHRoaXJkIHBhcmFtZXRlci4gSWYgdGhpcyBpcyBtaXNzaW5nLCBgbnVsbGAsIG9yIGAwYCwgdGhlXG4gKiBkZXN0aW5hdGlvbiBjaGFubmVsIHdpbGwgYmUgdW5idWZmZXJlZC4gSWYgaXQncyBhIHBvc2l0aXZlIGludGVnZXIsIHRoZVxuICogZGVzdGluYXRpb24gY2hhbm5lbCBpcyBidWZmZXJlZCBieSBhIGZpeGVkIGJ1ZmZlciBvZiB0aGF0IHNpemUuIElmIHRoZVxuICogcGFyYW1ldGVyIGlzIGEgYnVmZmVyLCB0aGVuIHRoYXQgYnVmZmVyIGlzIHVzZWQgdG8gYnVmZmVyIHRoZSBkZXN0aW5hdGlvblxuICogY2hhbm5lbC5cbiAqXG4gKiBPbmNlICphbnkqIHNvdXJjZSBjaGFubmVsIGlzIGNsb3NlZCwgdGhlIG1hcHBpbmcgY2Vhc2VzIGFuZCB0aGUgZGVzdGluYXRpb25cbiAqIGNoYW5uZWwgaXMgYWxzbyBjbG9zZWQuXG4gKlxuICogVGhpcyBpcyBvYnZpb3VzbHkgc2ltaWxhciB0byBhIG1hcCB0cmFuc2R1Y2VyLCBidXQgdW5saWtlIGEgdHJhbnNkdWNlciwgdGhpc1xuICogZnVuY3Rpb24gd29ya3Mgd2l0aCBtdWx0aXBsZSBpbnB1dCBjaGFubmVscy4gVGhpcyBpcyBzb21ldGhpbmcgdGhhdCBhXG4gKiB0cmFuc2R1Y2VyIG9uIGEgc2luZ2xlIGNoYW5uZWwgaXMgdW5hYmxlIHRvIGRvLlxuICpcbiAqIGBgYFxuICogaW1wb3J0IHsgZ28sIGNoYW4sIHNlbmQsIHJlY3YsIGNsb3NlLCBpc0Nsb3NlZCB9IGZyb20gXCJAY3NwXCI7XG4gKiBpbXBvcnQgeyBtYXAgfSBmcm9tIFwiQG9wc1wiXG4gKlxuICogY29uc3QgaW5wdXQxID0gY2hhbigpO1xuICogY29uc3QgaW5wdXQyID0gY2hhbigpO1xuICogY29uc3QgaW5wdXQzID0gY2hhbigpO1xuICogY29uc3Qgb3V0cHV0ID0gbWFwKCh4LCB5LCB6KSA9PiB4ICsgeSArIHosIFtpbnB1dDEsIGlucHV0MiwgaW5wdXQzXSk7XG4gKlxuICogZ28oYXN5bmMgKCkgPT4ge1xuICogICBhd2FpdCBzZW5kKGlucHV0MSwgMSk7XG4gKiAgIGF3YWl0IHNlbmQoaW5wdXQxLCAyKTtcbiAqICAgYXdhaXQgc2VuZChpbnB1dDEsIDMpO1xuICogfSk7XG4gKlxuICogZ28oYXN5bmMgKCkgPT4ge1xuICogICBhd2FpdCBzZW5kKGlucHV0MiwgMTApO1xuICogICBhd2FpdCBzZW5kKGlucHV0MiwgMjApO1xuICogICBjbG9zZShpbnB1dDIpO1xuICogfSk7XG4gKlxuICogZ28oYXN5bmMgKCkgPT4ge1xuICogICBhd2FpdCBzZW5kKGlucHV0MywgMTAwKTtcbiAqICAgYXdhaXQgc2VuZChpbnB1dDMsIDIwMCk7XG4gKiAgIGF3YWl0IHNlbmQoaW5wdXQzLCAzMDApO1xuICogfSk7XG4gKlxuICogZ28oYXN5bmMgKCkgPT4ge1xuICogICBjb25zb2xlLmxvZyhhd2FpdCByZWN2KG91dHB1dCkpOyAgICAgLy8gLT4gMTExXG4gKiAgIGNvbnNvbGUubG9nKGF3YWl0IHJlY3Yob3V0cHV0KSk7ICAgICAvLyAtPiAyMjJcbiAqICAgLy8gT3V0cHV0IGNsb3NlcyBub3cgYmVjYXVzZSBpbnB1dDIgY2xvc2VzIGFmdGVyIDIgdmFsdWVzXG4gKiAgIGNvbnNvbGUubG9nKGlzQ2xvc2VkKG91dHB1dCkpOyAgICAgICAvLyAtPiB0cnVlXG4gKiB9KTtcbiAqIGBgYFxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6b3BzXG4gKiBAcGFyYW0ge21vZHVsZTpvcHMuTWFwcGVyfSBmbiBUaGUgbWFwcGluZyBmdW5jdGlvbi4gVGhpcyBzaG91bGQgaGF2ZSBvbmVcbiAqICAgICBwYXJhbWV0ZXIgZm9yIGVhY2ggc291cmNlIGNoYW5uZWwgYW5kIHJldHVybiBhIHNpbmdsZSB2YWx1ZS5cbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5DaGFubmVsW119IHNyY3MgVGhlIHNvdXJjZSBjaGFubmVscy5cbiAqIEBwYXJhbSB7KG51bWJlcnxtb2R1bGU6Y3NwLkJ1ZmZlcil9IFtidWZmZXI9MF0gQSBidWZmZXIgdXNlZCB0byBjcmVhdGUgdGhlXG4gKiAgICAgZGVzdGluYXRpb24gY2hhbm5lbC4gSWYgdGhpcyBpcyBhIG51bWJlciwgYVxuICogICAgIHtAbGluayBtb2R1bGU6Y3NwLkZpeGVkQnVmZmVyfSBvZiB0aGF0IHNpemUgd2lsbCBiZSB1c2VkLiBJZiB0aGlzIGlzIGAwYFxuICogICAgIG9yIG5vdCBwcmVzZW50LCB0aGUgY2hhbm5lbCB3aWxsIGJlIHVuYnVmZmVyZWQuXG4gKiBAcmV0dXJuIHttb2R1bGU6Y3NwLkNoYW5uZWx9IFRoZSBkZXN0aW5hdGlvbiBjaGFubmVsLlxuICovXG5mdW5jdGlvbiBtYXAoZm4sIHNyY3MsIGJ1ZmZlciA9IDApIHtcbiAgY29uc3QgZHN0ID0gY2hhbihidWZmZXIpO1xuICBjb25zdCBzcmNsZW4gPSBzcmNzLmxlbmd0aDtcbiAgY29uc3QgdmFsdWVzID0gW107XG4gIGNvbnN0IGNhbGxiYWNrcyA9IFtdO1xuICBjb25zdCB0ZW1wID0gY2hhbigpO1xuICBsZXQgY291bnQ7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcmNsZW47IGkrKykge1xuICAgIGNhbGxiYWNrc1tpXSA9IChpbmRleCA9PiB7XG4gICAgICByZXR1cm4gdmFsdWUgPT4ge1xuICAgICAgICB2YWx1ZXNbaW5kZXhdID0gdmFsdWU7XG4gICAgICAgIGlmICgtLWNvdW50ID09PSAwKSB7XG4gICAgICAgICAgc2VuZEFzeW5jKHRlbXAsIHZhbHVlcy5zbGljZSgpKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KShpKTtcbiAgfVxuXG4gIGdvKGFzeW5jICgpID0+IHtcbiAgICBmb3IgKDs7KSB7XG4gICAgICBjb3VudCA9IHNyY2xlbjtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3JjbGVuOyBpKyspIHtcbiAgICAgICAgcmVjdkFzeW5jKHNyY3NbaV0sIGNhbGxiYWNrc1tpXSk7XG4gICAgICB9XG4gICAgICBjb25zdCB2YWx1ZXMgPSBhd2FpdCByZWN2KHRlbXApO1xuICAgICAgZm9yIChjb25zdCB2YWx1ZSBvZiB2YWx1ZXMpIHtcbiAgICAgICAgaWYgKHZhbHVlID09PSBDTE9TRUQpIHtcbiAgICAgICAgICAvLyBPbmNlIGEgc291cmNlIGNsb3Nlcywgd2UgY2xvc2UgdGhlIGRlc3RpbmF0aW9uIEFORCB0aGUgcmVzdCBvZiB0aGVcbiAgICAgICAgICAvLyBzb3VyY2VzLiBPdGhlcndpc2UgdGhlIHNvdXJjZXMgd2lsbCBoYXZlIG5vdGhpbmcgcmVjZWl2aW5nIGZyb21cbiAgICAgICAgICAvLyB0aGVtIGFuZCBzZW5kcyB0byB0aGVtIHdpbGwgYmxvY2sgZm9yZXZlci4gQnkgY2xvc2luZyB0aGVtLCBzZW5kc1xuICAgICAgICAgIC8vIHRvIHRoZW0gd2lsbCBpbW1lZGlhdGVseSByZXR1cm4gYGZhbHNlYCBhbmQgbm90IGJsb2NrLlxuICAgICAgICAgIGNsb3NlKGRzdCk7XG4gICAgICAgICAgZm9yIChjb25zdCBzcmMgb2Ygc3Jjcykge1xuICAgICAgICAgICAgY2xvc2Uoc3JjKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBhd2FpdCBzZW5kKGRzdCwgZm4oLi4udmFsdWVzKSk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZHN0O1xufVxuXG5leHBvcnQgeyBwaXBlLCBwYXJ0aXRpb24sIG1lcmdlLCBzcGxpdCwgdGFwLCB1bnRhcCwgdW50YXBBbGwsIG1hcCB9O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG5cbi8qKlxuICogQSBzZXQgb2YgY2hhbm5lbCB1dGlsaXRpZXMgZm9yIGNoYW5naW5nIHRoZSB0aW1pbmcgb2YgaW5wdXRzIGJlaW5nIHB1dCBvbnRvXG4gKiB0aGUgaW5wdXQgY2hhbm5lbC5cbiAqXG4gKiBAbW9kdWxlIG9wcy90aW1pbmdcbiAqIEBwcml2YXRlXG4gKi9cblxuaW1wb3J0IHtcbiAgZ28sXG4gIGNoYW4sXG4gIHNlbmQsXG4gIHNlbGVjdCxcbiAgY2xvc2UsXG4gIENMT1NFRCxcbiAgaXNUaW1lZCxcbiAgdGltZWRDaGFuXG59IGZyb20gXCJAY2hhbmtvL2NzcFwiO1xuXG5pbXBvcnQgeyBpc051bWJlciB9IGZyb20gXCJtb2R1bGVzL2NvbW1vblwiO1xuXG4vKipcbiAqIERlYm91bmNlcyBhbiBpbnB1dCBjaGFubmVsLlxuICpcbiAqIERlYm91bmNpbmcgaXMgdGhlIGFjdCBvZiB0dXJuaW5nIHNldmVyYWwgaW5wdXQgdmFsdWVzIGludG8gb25lLiBGb3IgZXhhbXBsZSxcbiAqIGRlYm91bmNpbmcgYSBjaGFubmVsIGRyaXZlbiBieSBhIGBtb3VzZW1vdmVgIGV2ZW50IHdvdWxkIGNhdXNlIG9ubHkgdGhlIGZpbmFsXG4gKiBgbW91c2Vtb3ZlYCBldmVudCB0byBiZSBwdXQgb250byB0aGUgY2hhbm5lbCwgZHJvcHBpbmcgYWxsIG9mIHRoZSBvdGhlciBvbmVzLlxuICogVGhpcyBjYW4gYmUgZGVzaXJhYmxlIGJlY2F1c2UgYG1vdXNlbW92ZWAgZXZlbnRzIGNvbWUgaW4gYnVuY2hlcywgYmVpbmdcbiAqIHByb2R1Y2VkIGNvbnRpbnVhbGx5IHdoaWxlIHRoZSBtb3VzZSBpcyBtb3ZpbmcsIGFuZCBvZnRlbiBhbGwgdGhhdCB3ZSByZWFsbHlcbiAqIGNhcmUgYWJvdXQgaXMgdG8gbGVhcm4gd2hlcmUgdGhlIG1vdXNlIGVuZGVkIHVwLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gZG9lcyB0aGlzIGJ5IGNvbnRyb2xsaW5nIHdoaWNoIHZhbHVlcyB0aGF0IGhhdmUgYmVlbiBzZW50IHRvXG4gKiB0aGUgc291cmNlIGNoYW5uZWwgYXJlIG1hZGUgYXZhaWxhYmxlIG9uIHRoZSBkZXN0aW5hdGlvbiBjaGFubmVsLCBhbmQgd2hlbi5cbiAqXG4gKiBUaGUgYGRlbGF5YCBwYXJhbWV0ZXIgZGV0ZXJtaW5lcyB0aGUgZGVib3VuY2UgdGhyZXNob2xkLiBPbmNlIHRoZSBmaXJzdCB2YWx1ZVxuICogaXMgc2VudCB0byB0aGUgc291cmNlIGNoYW5uZWwsIGRlYm91bmNpbmcgaXMgaW4gZWZmZWN0IHVudGlsIHRoZSBudW1iZXIgb2ZcbiAqIG1pbGxpc2Vjb25kcyBpbiBgZGVsYXlgIHBhc3NlcyB3aXRob3V0IGFueSBvdGhlciB2YWx1ZSBiZWluZyBwdXQgb250byB0aGF0XG4gKiBjaGFubmVsLiBJbiBvdGhlciB3b3JkcywgdGhlIGRlbGF5IHdpbGwgYmUgcmVmcmVzaGVkIGlmIGFub3RoZXIgdmFsdWUgaXMgc2VudFxuICogdG8gdGhlIHNvdXJjZSBjaGFubmVsIGJlZm9yZSB0aGUgZGVsYXkgZWxhcHNlcy4gQWZ0ZXIgYSBmdWxsIGRlbGF5IGludGVydmFsXG4gKiBwYXNzZXMgd2l0aG91dCBhIHZhbHVlIGJlaW5nIHNlbnQgdG8gdGhlIHNvdXJjZSBjaGFubmVsLCB0aGUgbGFzdCB2YWx1ZSBzZW50XG4gKiBiZWNvbWVzIGF2YWlsYWJsZSBvbiB0aGUgZGVzdGluYXRpb24gY2hhbm5lbC5cbiAqXG4gKiBUaGlzIGJlaGF2aW9yIGNhbiBiZSBtb2RpZmllZCB0aHJvdWdoIGZvdXIgb3B0aW9uczogYGxlYWRpbmdgLCBgdHJhaWxpbmdgLFxuICogYG1heERlbGF5YCwgYW5kIGBjYW5jZWxgLlxuICpcbiAqIElmIGJvdGggYGxlYWRpbmdgIGFuZCBgdHJhaWxpbmdgIGFyZSBgdHJ1ZWAsIHZhbHVlcyB3aWxsIG5vdCBiZSBkdXBsaWNhdGVkLlxuICogVGhlIGZpcnN0IHZhbHVlIHB1dCBvbnRvIHRoZSBzb3VyY2UgY2hhbm5lbCB3aWxsIGJlIHB1dCBvbnRvIHRoZSBkZXN0aW5hdGlvblxuICogY2hhbm5lbCBpbW1lZGlhdGVseSAocGVyIGBsZWFkaW5nYCkgYW5kIHRoZSBkZWxheSB3aWxsIGJlZ2luLCBidXQgYSB2YWx1ZVxuICogd2lsbCBvbmx5IGJlIG1hZGUgYXZhaWxhYmxlIG9uIHRoZSBkZXN0aW5hdGlvbiBjaGFubmVsIGF0IHRoZSBlbmQgb2YgdGhlXG4gKiBkZWxheSAocGVyIGB0cmFpbGluZ2ApIGlmICphbm90aGVyKiBpbnB1dCB2YWx1ZSB3YXMgcHV0IG9udG8gdGhlIHNvdXJjZVxuICogY2hhbm5lbCBiZWZvcmUgdGhlIGRlbGF5IGV4cGlyZWQuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpvcHNcbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5DaGFubmVsfSBzcmMgVGhlIHNvdXJjZSBjaGFubmVsLlxuICogQHBhcmFtIHsobnVtYmVyfG1vZHVsZTpjc3AuQnVmZmVyKX0gW2J1ZmZlcj0wXSBBIGJ1ZmZlciB1c2VkIHRvIGNyZWF0ZSB0aGVcbiAqICAgICBkZXN0aW5hdGlvbiBjaGFubmVsLiBJZiB0aGlzIGlzIGEgbnVtYmVyLCBhXG4gKiAgICAge0BsaW5rIG1vZHVsZTpjc3AuRml4ZWRCdWZmZXJ8Rml4ZWRCdWZmZXJ9IG9mIHRoYXQgc2l6ZSB3aWxsIGJlIHVzZWQuIElmXG4gKiAgICAgdGhpcyBpcyBgMGAgb3Igbm90IHByZXNlbnQsIHRoZSBjaGFubmVsIHdpbGwgYmUgdW5idWZmZXJlZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBkZWxheSBUaGUgZGVib3VuY2luZyBkZWxheSwgaW4gbWlsbGlzZWNvbmRzLlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSBBIHNldCBvZiBvcHRpb25zIHRvIGZ1cnRoZXIgY29uZmlndXJlIHRoZVxuICogICAgIGRlYm91bmNpbmcuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmxlYWRpbmc9ZmFsc2VdIEluc3RlYWQgb2YgbWFraW5nIGEgdmFsdWUgYXZhaWxhYmxlXG4gKiAgICAgb24gdGhlIGRlc3RpbmF0aW9uIGNoYW5uZWwgYWZ0ZXIgdGhlIGRlbGF5IHBhc3NlcywgdGhlIGZpcnN0IHZhbHVlIHB1dFxuICogICAgIG9udG8gdGhlIHNvdXJjZSBjaGFubmVsIGlzIG1hZGUgYXZhaWxhYmxlICpiZWZvcmUqIHRoZSBkZWxheSBiZWdpbnMuIE5vXG4gKiAgICAgdmFsdWUgaXMgYXZhaWxhYmxlIG9uIHRoZSBkZXN0aW5hdGlvbiBjaGFubmVsIGFmdGVyIHRoZSBkZWxheSBoYXMgZWxhcHNlZFxuICogICAgICh1bmxlc3MgYHRyYWlsaW5nYCBpcyBhbHNvIGB0cnVlYCkuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnRyYWlsaW5nPXRydWVdIFRoZSBkZWZhdWx0IGJlaGF2aW9yLCB3aGVyZSBhIHZhbHVlXG4gKiAgICAgaXMgbm90IG1hZGUgYXZhaWxhYmxlIG9uIHRoZSBkZXN0aW5hdGlvbiBjaGFubmVsIHVudGlsIHRoZSBlbnRpcmUgZGVsYXlcbiAqICAgICBwYXNzZXMgd2l0aG91dCBhIG5ldyB2YWx1ZSBiZWluZyBwdXQgb24gdGhlIHNvdXJjZSBjaGFubmVsLlxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLm1heERlbGF5PTBdIFRoZSBtYXhpbXVtIGRlbGF5IGFsbG93ZWQgYmVmb3JlIGEgdmFsdWVcbiAqICAgICBpcyBwdXQgb250byB0aGUgZGVzdGluYXRpb24gY2hhbm5lbC4gRGVib3VuY2luZyBjYW4sIGluIHRoZW9yeSwgZ28gb25cbiAqICAgICBmb3JldmVyIGFzIGxvbmcgYXMgbmV3IGlucHV0IHZhbHVlcyBjb250aW51ZSB0byBiZSBwdXQgb250byB0aGUgc291cmNlXG4gKiAgICAgY2hhbm5lbCBiZWZvcmUgdGhlIGRlbGF5IGV4cGlyZXMuIFNldHRpbmcgdGhpcyBvcHRpb24gdG8gYSBwb3NpdGl2ZVxuICogICAgIG51bWJlciBzZXRzIHRoZSBtYXhpbXVtIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdGhhdCBkZWJvdW5jaW5nIGNhbiBnbyBvblxuICogICAgIGJlZm9yZSBpdCdzIGZvcmNlZCB0byBlbmQsIGV2ZW4gaWYgaW4gdGhlIG1pZGRsZSBvZiBhIGRlYm91bmNpbmcgZGVsYXkuXG4gKiAgICAgSGF2aW5nIGRlYm91bmNpbmcgZW5kIHRocm91Z2ggdGhlIG1heCBkZWxheSBvcGVyYXRlcyBleGFjdGx5IGFzIGlmIGl0IGhhZFxuICogICAgIGVuZGVkIGJlY2F1c2Ugb2YgbGFjayBvZiBpbnB1dDsgdGhlIGxhc3QgaW5wdXQgaXMgbWFkZSBhdmFpbGFibGUgb24gdGhlXG4gKiAgICAgZGVzdGluYXRpb24gY2hhbm5lbCAoaWYgYHRyYWlsaW5nYCBpcyBgdHJ1ZWApLCBhbmQgdGhlIG5leHQgaW5wdXQgd2lsbFxuICogICAgIHRyaWdnZXIgYW5vdGhlciBkZWJvdW5jZSBvcGVyYXRpb24uXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuQ2hhbm5lbH0gW29wdGlvbnMuY2FuY2VsXSBBIGNoYW5uZWwgdXNlZCB0byBzaWduYWwgYVxuICogICAgIGNhbmNlbGxhdGlvbiBvZiB0aGUgZGVib3VuY2luZy4gQW55IHZhbHVlIHB1dCBvbnRvIHRoaXMgY2hhbm5lbCB3aWxsXG4gKiAgICAgY2FuY2VsIHRoZSBjdXJyZW50IGRlYm91bmNpbmcgb3BlcmF0aW9uLCBjbG9zaW5nIHRoZSBvdXRwdXQgY2hhbm5lbCBhbmRcbiAqICAgICBkaXNjYXJkaW5nIGFueSB2YWx1ZXMgdGhhdCB3ZXJlIHdhaXRpbmcgZm9yIHRoZSBkZWJvdW5jZSB0aHJlc2hvbGQgdGltZXJcbiAqICAgICB0byBiZSBzZW50IHRvIHRoZSBvdXRwdXQuXG4gKiBAcmV0dXJuIHttb2R1bGU6Y3NwLkNoYW5uZWx9IFRoZSBuZXdseS1jcmVhdGVkIGRlc3RpbmF0aW9uIGNoYW5uZWwsIHdoZXJlIGFsbFxuICogICAgIG9mIHRoZSB2YWx1ZXMgd2lsbCBiZSBkZWJvdW5jZWQgZnJvbSB0aGUgc291cmNlIGNoYW5uZWwuXG4gKi9cbmZ1bmN0aW9uIGRlYm91bmNlKHNyYywgYnVmZmVyLCBkZWxheSwgb3B0aW9ucykge1xuICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICBsZWFkaW5nOiBmYWxzZSxcbiAgICB0cmFpbGluZzogdHJ1ZSxcbiAgICBtYXhEZWxheTogMCxcbiAgICBjYW5jZWw6IGNoYW4oKVxuICB9O1xuICBjb25zdCBbYnVmLCBkZWwsIG9wdHNdID0gaXNOdW1iZXIoZGVsYXkpXG4gICAgPyBbYnVmZmVyLCBkZWxheSwgT2JqZWN0LmFzc2lnbihkZWZhdWx0cywgb3B0aW9ucyA/PyB7fSldXG4gICAgOiBbMCwgYnVmZmVyLCBPYmplY3QuYXNzaWduKGRlZmF1bHRzLCBkZWxheSA/PyB7fSldO1xuXG4gIGNvbnN0IGRzdCA9IGNoYW4oYnVmKTtcbiAgY29uc3QgeyBsZWFkaW5nLCB0cmFpbGluZywgbWF4RGVsYXksIGNhbmNlbCB9ID0gb3B0cztcblxuICBnbyhhc3luYyAoKSA9PiB7XG4gICAgbGV0IHRpbWVyID0gY2hhbigpO1xuICAgIGxldCBtYXggPSBjaGFuKCk7XG4gICAgbGV0IGN1cnJlbnQgPSBDTE9TRUQ7XG5cbiAgICBmb3IgKDs7KSB7XG4gICAgICBjb25zdCB7IHZhbHVlLCBjaGFubmVsIH0gPSBhd2FpdCBzZWxlY3QoW3NyYywgdGltZXIsIG1heCwgY2FuY2VsXSk7XG5cbiAgICAgIGlmIChjaGFubmVsID09PSBjYW5jZWwpIHtcbiAgICAgICAgY2xvc2UoZHN0KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBpZiAoY2hhbm5lbCA9PT0gc3JjKSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gQ0xPU0VEKSB7XG4gICAgICAgICAgY2xvc2UoZHN0KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRpbWluZyA9IGlzVGltZWQodGltZXIpO1xuICAgICAgICB0aW1lciA9IHRpbWVkQ2hhbihkZWwpO1xuXG4gICAgICAgIGlmICghdGltaW5nICYmIG1heERlbGF5ID4gMCkge1xuICAgICAgICAgIG1heCA9IHRpbWVkQ2hhbihtYXhEZWxheSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobGVhZGluZykge1xuICAgICAgICAgIGlmICghdGltaW5nKSB7XG4gICAgICAgICAgICBhd2FpdCBzZW5kKGRzdCwgdmFsdWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjdXJyZW50ID0gdmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHRyYWlsaW5nKSB7XG4gICAgICAgICAgY3VycmVudCA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aW1lciA9IGNoYW4oKTtcbiAgICAgICAgbWF4ID0gY2hhbigpO1xuICAgICAgICBpZiAodHJhaWxpbmcgJiYgY3VycmVudCAhPT0gQ0xPU0VEKSB7XG4gICAgICAgICAgYXdhaXQgc2VuZChkc3QsIGN1cnJlbnQpO1xuICAgICAgICAgIGN1cnJlbnQgPT09IENMT1NFRDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGRzdDtcbn1cblxuLyoqXG4gKiBUaHJvdHRsZXMgYW4gaW5wdXQgY2hhbm5lbC5cbiAqXG4gKiBUaHJvdHRsaW5nIGlzIHRoZSBhY3Qgb2YgZW5zdXJpbmcgdGhhdCBzb21ldGhpbmcgb25seSBoYXBwZW5zIG9uY2UgcGVyIHRpbWVcbiAqIGludGVydmFsLiBJbiB0aGlzIGNhc2UsIGl0IG1lYW5zIHRoYXQgYSB2YWx1ZSBzZW50IHRvIHRoZSBzb3VyY2UgY2hhbm5lbCBpc1xuICogb25seSBtYWRlIGF2YWlsYWJsZSB0byB0aGUgZGVzdGluYXRpb24gY2hhbm5lbCBvbmNlIHBlciBhIGdpdmVuIG51bWJlciBvZlxuICogbWlsbGlzZWNvbmRzLiBBbiBleGFtcGxlIHVzYWdlIHdvdWxkIGJlIHdpdGggd2luZG93IHNjcm9sbCBldmVudHM7IHRoZXNlXG4gKiBldmVudHMgYXJlIG5lYXJseSBjb250aW51b3VzIGFzIHNjcm9sbGluZyBpcyBoYXBwZW5pbmcsIGFuZCBwZXJoYXBzIHdlIGRvbid0XG4gKiB3YW50IHRvIGNhbGwgYW4gZXhwZW5zaXZlIFVJIHVwZGF0aW5nIGZ1bmN0aW9uIGV2ZXJ5IHRpbWUgYSBzY3JvbGwgZXZlbnQgaXNcbiAqIGZpcmVkLiBXZSBjYW4gdGhyb3R0bGUgdGhlIGlucHV0IGNoYW5uZWwgYW5kIG1ha2UgaXQgb25seSBvZmZlciB1cCB0aGUgc2Nyb2xsXG4gKiBldmVudHMgb25jZSBldmVyeSAxMDAgbWlsbGlzZWNvbmRzLCBmb3IgaW5zdGFuY2UuXG4gKlxuICogVGhyb3R0bGluZyBpcyBlZmZlY3RlZCBieSBjcmVhdGluZyBhIG5ldyBjaGFubmVsIGFzIGEgdGhyb3R0bGVkIGRlc3RpbmF0aW9uXG4gKiBmb3IgdmFsdWVzIHNlbnQgdG8gdGhlIHNvdXJjZSBjaGFubmVsLiBWYWx1ZXMgd2lsbCBvbmx5IGFwcGVhciBvbiB0aGF0XG4gKiBkZXN0aW5hdGlvbiBjaGFubmVsIG9uY2UgcGVyIGRlbGF5IGludGVydmFsOyBvdGhlciB2YWx1ZXMgdGhhdCBhcmUgcHV0IG9udG9cbiAqIHRoZSBzb3VyY2UgY2hhbm5lbCBpbiB0aGUgbWVhbnRpbWUgYXJlIGRpc2NhcmRlZC5cbiAqXG4gKiBUaGUgYGRlbGF5YCBwYXJhbWV0ZXIgY29udHJvbHMgaG93IG9mdGVuIGEgdmFsdWUgY2FuIGJlY29tZSBhdmFpbGFibGUgb24gdGhlXG4gKiBkZXN0aW5hdGlvbiBjaGFubmVsLiBXaGVuIHRoZSBmaXJzdCB2YWx1ZSBpcyBzZW50IHRvIHRoZSBzb3VyY2UgY2hhbm5lbCwgaXRcbiAqIGlzIGltbWVkaWF0ZWx5IHNlbnQgdG8gdGhlIGRlc3RpbmF0aW9uIGNoYW5uZWwgYXMgd2VsbCBhbmQgdGhlIGRlbGF5IGJlZ2lucy5cbiAqIEFueSBmdXJ0aGVyIHZhbHVlcyBzZW50IHRvIHRoZSBzb3VyY2UgY2hhbm5lbCBkdXJpbmcgdGhhdCBkZWxheSBhcmUgKm5vdCpcbiAqIHBhc3NlZCB0aHJvdWdoOyBvbmx5IHdoZW4gdGhlIGRlbGF5IGV4cGlyZXMgaXMgdGhlIGxhc3QgaW5wdXQgdmFsdWUgbWFkZVxuICogYXZhaWxhYmxlIG9uIHRoZSBkZXN0aW5hdGlvbiBjaGFubmVsLiBUaGUgZGVsYXkgdGhlbiBiZWdpbnMgYWdhaW4sIHNvIHRoYXRcbiAqIGZ1cnRoZXIgaW5wdXRzIGFyZSBzcXVlbGNoZWQgdW50aWwgKnRoYXQqIGRlbGF5IHBhc3Nlcy4gVGhyb3R0bGluZyBjb250aW51ZXMsXG4gKiBvbmx5IGFsbG93aW5nIG9uZSB2YWx1ZSB0aHJvdWdoIHBlciBpbnRlcnZhbCwgdW50aWwgYW4gZW50aXJlIGludGVydmFsIHBhc3Nlc1xuICogd2l0aG91dCBpbnB1dC5cbiAqXG4gKiBUaGlzIGJlaGF2aW9yIGNhbiBiZSBtb2RpZmllZCBieSB0aHJlZSBvcHRpb25zOiBgbGVhZGluZ2AsIGB0cmFpbGluZ2AsIGFuZFxuICogYGNhbmNlbGAuXG4gKlxuICogSWYgYm90aCBgbGVhZGluZ2AgYW5kIGB0cmFpbGluZ2AgYXJlIGB0cnVlYCwgdmFsdWVzIHdpbGwgbm90IGJlIGR1cGxpY2F0ZWQuXG4gKiBUaGUgZmlyc3QgdmFsdWUgc2VudCB0byB0aGUgc291cmNlIGNoYW5uZWwgd2lsbCBiZSBwdXQgb250byB0aGUgZGVzdGluYXRpb25cbiAqIGNoYW5uZWwgaW1tZWRpYXRlbHkgKHBlciBgbGVhZGluZ2ApIGFuZCB0aGUgZGVsYXkgd2lsbCBiZWdpbiwgYnV0IGEgdmFsdWVcbiAqIHdpbGwgb25seSBiZSBtYWRlIGF2YWlsYWJsZSBvbiB0aGUgZGVzdGluYXRpb24gY2hhbm5lbCBhdCB0aGUgZW5kIG9mIHRoZVxuICogZGVsYXkgKHBlciBgdHJhaWxpbmdgKSBpZiAqYW5vdGhlciogaW5wdXQgdmFsdWUgd2FzIHNlbnQgdG8gdGhlIHNvdXJjZVxuICogY2hhbm5lbCBiZWZvcmUgdGhlIGRlbGF5IGV4cGlyZWQuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpvcHNcbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5DaGFubmVsfSBzcmMgVGhlIHNvdXJjZSBjaGFubmVsLlxuICogQHBhcmFtIHsobnVtYmVyfG1vZHVsZTpjc3AuQnVmZmVyKX0gW2J1ZmZlcj0wXSBBIGJ1ZmZlciB1c2VkIHRvIGNyZWF0ZSB0aGVcbiAqICAgICBkZXN0aW5hdGlvbiBjaGFubmVsLiBJZiB0aGlzIGlzIGEgbnVtYmVyLCBhXG4gKiAgICAge0BsaW5rIG1vZHVsZTpjc3AuRml4ZWRCdWZmZXJ8Rml4ZWRCdWZmZXJ9IG9mIHRoYXQgc2l6ZSB3aWxsIGJlIHVzZWQuIElmXG4gKiAgICAgdGhpcyBpcyBgMGAgb3Igbm90IHByZXNlbnQsIHRoZSBjaGFubmVsIHdpbGwgYmUgdW5idWZmZXJlZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBkZWxheSBUaGUgdGhyb3R0bGluZyBkZWxheSwgaW4gbWlsbGlzZWNvbmRzLlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSBBIHNldCBvZiBvcHRpb25zIHRvIGZ1cnRoZXIgY29uZmlndXJlIHRoZVxuICogdGhyb3R0bGluZy5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMubGVhZGluZz10cnVlXSBNYWtlcyB0aGUgdmFsdWUgdGhhdCB0cmlnZ2VyZWQgdGhlXG4gKiAgICAgdGhyb3R0bGluZyBpbW1lZGlhdGVseSBhdmFpbGFibGUgb24gdGhlIGRlc3RpbmF0aW9uIGNoYW5uZWwgYmVmb3JlXG4gKiAgICAgYmVnaW5uaW5nIHRoZSBkZWxheS4gSWYgdGhpcyBpcyBgZmFsc2VgLCB0aGUgZmlyc3QgdmFsdWUgd2lsbCBub3QgYmUgcHV0XG4gKiAgICAgb250byB0aGUgZGVzdGluYXRpb24gY2hhbm5lbCB1bnRpbCBhIGZ1bGwgZGVsYXkgaW50ZXJ2YWwgcGFzc2VzLlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy50cmFpbGluZz10cnVlXSBNYWtlcyB0aGUgbGFzdCB2YWx1ZSBwdXQgb250byB0aGVcbiAqICAgICBzb3VyY2UgY2hhbm5lbCBhdmFpbGFibGUgb24gdGhlIGRlc3RpbmF0aW9uIGNoYW5uZWwgd2hlbiB0aGUgZGVsYXlcbiAqICAgICBleHBpcmVzLiBJZiB0aGlzIGlzIGBmYWxzZWAsIGFueSBpbnB1dHMgdGhhdCBjb21lIGluIGR1cmluZyB0aGUgZGVsYXkgYXJlXG4gKiAgICAgaWdub3JlZCwgYW5kIHRoZSBuZXh0IHZhbHVlIGlzIG5vdCBwdXQgb250byB0aGUgZGVzdGluYXRpb24gY2hhbm5lbCB1bnRpbFxuICogICAgIHRoZSBmaXJzdCBpbnB1dCAqYWZ0ZXIqIHRoZSBkZWxheSBleHBpcmVzLlxuICogQHBhcmFtIHttb2R1bGU6Y3NwLkNoYW5uZWx9IFtvcHRpb25zLmNhbmNlbF0gQSBjaGFubmVsIHVzZWQgdG8gc2lnbmFsIGFcbiAqICAgICBjYW5jZWxsYXRpb24gb2YgdGhlIHRocm90dGxpbmcuIEFueSB2YWx1ZSBwdXQgb250byB0aGlzIGNoYW5uZWwgd2lsbFxuICogICAgIGNhbmNlbCB0aGUgY3VycmVudCB0aHJvdHRsaW5nIG9wZXJhdGlvbiwgY2xvc2luZyB0aGUgb3V0cHV0IGNoYW5uZWwgYW5kXG4gKiAgICAgZGlzY2FyZGluZyBhbnkgdmFsdWVzIHRoYXQgd2VyZSB3YWl0aW5nIGZvciB0aGUgdGhyb3R0bGUgdGhyZXNob2xkIHRpbWVyXG4gKiAgICAgdG8gYmUgc2VudCB0byB0aGUgb3V0cHV0LlxuICogQHJldHVybiB7bW9kdWxlOmNzcC5DaGFubmVsfX0gVGhlIG5ld2x5LWNyZWF0ZWQgZGVzdGluYXRpb24gY2hhbm5lbCwgd2hlcmVcbiAqICAgICBhbGwgb2YgdGhlIHZhbHVlcyB3aWxsIGJlIHRocm90dGxlZCBmcm9tIHRoZSBzb3VyY2UgY2hhbm5lbC5cbiAqL1xuZnVuY3Rpb24gdGhyb3R0bGUoc3JjLCBidWZmZXIsIGRlbGF5LCBvcHRpb25zKSB7XG4gIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgIGxlYWRpbmc6IHRydWUsXG4gICAgdHJhaWxpbmc6IHRydWUsXG4gICAgY2FuY2VsOiBjaGFuKClcbiAgfTtcbiAgY29uc3QgW2J1ZiwgZGVsLCBvcHRzXSA9IGlzTnVtYmVyKGRlbGF5KVxuICAgID8gW2J1ZmZlciwgZGVsYXksIE9iamVjdC5hc3NpZ24oZGVmYXVsdHMsIG9wdGlvbnMgPz8ge30pXVxuICAgIDogWzAsIGJ1ZmZlciwgT2JqZWN0LmFzc2lnbihkZWZhdWx0cywgZGVsYXkgPz8ge30pXTtcblxuICBjb25zdCBkc3QgPSBjaGFuKGJ1Zik7XG4gIGNvbnN0IHsgbGVhZGluZywgdHJhaWxpbmcsIGNhbmNlbCB9ID0gb3B0cztcblxuICBnbyhhc3luYyAoKSA9PiB7XG4gICAgbGV0IHRpbWVyID0gY2hhbigpO1xuICAgIGxldCBjdXJyZW50ID0gQ0xPU0VEO1xuXG4gICAgZm9yICg7Oykge1xuICAgICAgY29uc3QgeyB2YWx1ZSwgY2hhbm5lbCB9ID0gYXdhaXQgc2VsZWN0KFtzcmMsIHRpbWVyLCBjYW5jZWxdKTtcblxuICAgICAgaWYgKGNoYW5uZWwgPT09IGNhbmNlbCkge1xuICAgICAgICBjbG9zZShkc3QpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgaWYgKGNoYW5uZWwgPT09IHNyYykge1xuICAgICAgICBpZiAodmFsdWUgPT09IENMT1NFRCkge1xuICAgICAgICAgIGNsb3NlKGRzdCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0aW1pbmcgPSBpc1RpbWVkKHRpbWVyKTtcbiAgICAgICAgaWYgKCF0aW1pbmcpIHtcbiAgICAgICAgICB0aW1lciA9IHRpbWVkQ2hhbihkZWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGxlYWRpbmcpIHtcbiAgICAgICAgICBpZiAoIXRpbWluZykge1xuICAgICAgICAgICAgYXdhaXQgc2VuZChkc3QsIHZhbHVlKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRyYWlsaW5nKSB7XG4gICAgICAgICAgICBjdXJyZW50ID0gdmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHRyYWlsaW5nKSB7XG4gICAgICAgICAgY3VycmVudCA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRyYWlsaW5nICYmIGN1cnJlbnQgIT09IENMT1NFRCkge1xuICAgICAgICB0aW1lciA9IHRpbWVkQ2hhbihkZWwpO1xuICAgICAgICBhd2FpdCBzZW5kKGRzdCwgY3VycmVudCk7XG4gICAgICAgIGN1cnJlbnQgPSBDTE9TRUQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aW1lciA9IGNoYW4oKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBkc3Q7XG59XG5cbmV4cG9ydCB7IGRlYm91bmNlLCB0aHJvdHRsZSB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==