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


        function isReduced(value) {
          return !!(value === null || value === void 0 ? void 0 : value[modules_protocol__WEBPACK_IMPORTED_MODULE_0__["protocols"].reduced]);
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
         * @type {module:csp.ProtocolMap}
         * @memberof module:csp
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vcHMvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL29wcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vcHMvL2hvbWUvYmFyYW5kaXMvRGV2ZWxvcG1lbnQvcHJvamVjdHMvY2hhbmtvL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jSXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vb3BzL2NzcC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vb3BzL2NzcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vcHMvY3NwL2hvbWUvYmFyYW5kaXMvRGV2ZWxvcG1lbnQvcHJvamVjdHMvY2hhbmtvL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL0FzeW5jR2VuZXJhdG9yLmpzIiwid2VicGFjazovL29wcy9jc3AvaG9tZS9iYXJhbmRpcy9EZXZlbG9wbWVudC9wcm9qZWN0cy9jaGFua28vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvQXdhaXRWYWx1ZS5qcyIsIndlYnBhY2s6Ly9vcHMvY3NwL2hvbWUvYmFyYW5kaXMvRGV2ZWxvcG1lbnQvcHJvamVjdHMvY2hhbmtvL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2F3YWl0QXN5bmNHZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vb3BzL2NzcC9ob21lL2JhcmFuZGlzL0RldmVsb3BtZW50L3Byb2plY3RzL2NoYW5rby9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy93cmFwQXN5bmNHZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vb3BzL2NzcC9ob21lL2JhcmFuZGlzL0RldmVsb3BtZW50L3Byb2plY3RzL2NoYW5rby9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovL29wcy9jc3AvaG9tZS9iYXJhbmRpcy9EZXZlbG9wbWVudC9wcm9qZWN0cy9jaGFua28vbm9kZV9tb2R1bGVzL3NldGltbWVkaWF0ZS9zZXRJbW1lZGlhdGUuanMiLCJ3ZWJwYWNrOi8vb3BzL2NzcC9ob21lL2JhcmFuZGlzL0RldmVsb3BtZW50L3Byb2plY3RzL2NoYW5rby9ub2RlX21vZHVsZXMvdGltZXJzLWJyb3dzZXJpZnkvbWFpbi5qcyIsIndlYnBhY2s6Ly9vcHMvY3NwLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly9vcHMvY3NwL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9vcHMvY3NwL3NyYy9tb2R1bGVzL2J1ZmZlci5qcyIsIndlYnBhY2s6Ly9vcHMvY3NwL3NyYy9tb2R1bGVzL2NoYW5uZWwvaGFuZGxlci5qcyIsIndlYnBhY2s6Ly9vcHMvY3NwL3NyYy9tb2R1bGVzL2NoYW5uZWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb3BzL2NzcC9zcmMvbW9kdWxlcy9jaGFubmVsL3NlbGVjdC5qcyIsIndlYnBhY2s6Ly9vcHMvY3NwL3NyYy9tb2R1bGVzL2Rpc3BhdGNoZXIuanMiLCJ3ZWJwYWNrOi8vb3BzL2NzcC9zcmMvbW9kdWxlcy9wcm9jZXNzLmpzIiwid2VicGFjazovL29wcy9jc3Avc3JjL21vZHVsZXMvcHJvdG9jb2wuanMiLCJ3ZWJwYWNrOi8vb3BzL2NzcC9zcmMvbW9kdWxlcy9xdWV1ZS5qcyIsIndlYnBhY2s6Ly9vcHMvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb3BzLy4vc3JjL21vZHVsZXMvY29tbW9uLmpzIiwid2VicGFjazovL29wcy8uL3NyYy9tb2R1bGVzL2NvbnZlcnNpb24uanMiLCJ3ZWJwYWNrOi8vb3BzLy4vc3JjL21vZHVsZXMvZmxvdy5qcyIsIndlYnBhY2s6Ly9vcHMvLi9zcmMvbW9kdWxlcy90aW1pbmcuanMiXSwibmFtZXMiOlsiQlVGRkVSIiwiU3ltYm9sIiwiRklYRUQiLCJEUk9QUElORyIsIlNMSURJTkciLCJvYmoiLCJxdWV1ZSIsInZhbHVlIiwicSIsInNpemUiLCJidWZmZXIiLCJxQ291bnQiLCJlbnF1ZXVlIiwiY291bnQiLCJkZXF1ZXVlIiwiTUFYX0RJUlRZIiwiTUFYX1FVRVVFRCIsIkNMT1NFRCIsIkJPWCIsInAiLCJ3cml0YWJsZSIsImhhbmRsZXIiLCJpc1RpbWVkIiwibWF4RGlydHkiLCJtYXhRdWV1ZWQiLCJ4Zm9ybSIsInJlY3ZzIiwic2VuZHMiLCJkaXJ0eVJlY3ZzIiwiZGlydHlTZW5kcyIsImNsb3NlZCIsImlzQnVmZmVyZWQiLCJFcnJvciIsImNoYW5uZWwiLCJib3giLCJpc0Z1bGwiLCJkb25lIiwiaXNSZWR1Y2VkIiwicmVjZWl2ZXIiLCJFTVBUWSIsImNhbGxiYWNrIiwidmFsIiwicmVtb3ZlIiwiZGlzcGF0Y2giLCJjbG9zZSIsImZpbHRlciIsInNlbmRlciIsInNlbmRCb3giLCJzZW5kSGFuZGxlciIsIm1heCIsIkRFRkFVTFRfSEFORExFUiIsImFjdGl2ZSIsImNvbW1pdCIsImZuIiwiYWRkIiwiaGFuZGxlRXhjZXB0aW9uIiwiYnVmZmVyUmVkdWNlciIsImJ1ZiIsIm9wdHMiLCJmaXhlZCIsImlzQnVmZmVyIiwidGltZXIiLCJPYmplY3QiLCJkZWZhdWx0T3B0aW9ucyIsInBhcnNlQXJncyIsInRyYW5zZHVjZXIiLCJ4ZiIsImhhbmRsZXJUcmFuc2R1Y2VyIiwiY2giLCJjaGFuSW1wbCIsInJlY3YiLCJzZXRUaW1lb3V0IiwiY2xvc2VJbXBsIiwiZGVsYXkiLCJjaGFuIiwicmVzdWx0IiwiaGFuZGxlU2VuZCIsIm9wSGFuZGxlciIsImhhbmRsZVJlY3YiLCJyZXNvbHZlIiwic2VuZEFzeW5jIiwicmVjdkFzeW5jIiwicmVqZWN0IiwiREVGQVVMVCIsImdldCIsImFycmF5IiwiayIsImoiLCJ1cHBlciIsImkiLCJNYXRoIiwidGVtcCIsIm9wdGlvbnMiLCJvcHMiLCJwcmlvcml0eSIsImluZGljZXMiLCJyYW5kb21BcnJheSIsInNlbGVjdEhhbmRsZXIiLCJzZWxlY3RSZXN1bHQiLCJvcCIsIkFycmF5IiwiY3JlYXRlU2VsZWN0SGFuZGxlciIsImlzQm94Iiwic2VsZWN0QXN5bmMiLCJTRVRfSU1NRURJQVRFIiwiTUVTU0FHRV9DSEFOTkVMIiwiU0VUX1RJTUVPVVQiLCJiYXRjaFNpemUiLCJkaXNwYXRjaE1ldGhvZCIsImRpc3BhdGNoZXIiLCJjcmVhdGVEaXNwYXRjaGVyIiwicnVubmluZyIsInF1ZXVlZCIsImNhbGNEaXNwYXRjaE1ldGhvZCIsInNldEltbWVkaWF0ZSIsInByb2Nlc3NUYXNrcyIsInRhc2siLCJrZXkiLCJzZXREaXNwYXRjaGVyIiwidGltZWRDaGFuIiwiUHJvbWlzZSIsInByb3RvY29scyIsImluaXQiLCJzdGVwIiwicmVkdWNlZCIsIlFVRVVFIiwic3RvcmUiLCJwb2ludGVyIiwiaXRlbSIsImVuZCIsInByZWRpY2F0ZSIsImlzTnVtYmVyIiwieCIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwiY2FsbCIsImlzRmluaXRlIiwicmVkdWNlIiwib3V0cHV0IiwiZ28iLCJhY2MiLCJ0b0NoYW5uZWwiLCJpdGVyYWJsZSIsImxlbmd0aCIsInNlbmQiLCJ0b0FycmF5IiwiaW5wdXQiLCJwdXNoIiwiVEFQUyIsInBpcGUiLCJzcmMiLCJkc3QiLCJrZWVwT3BlbiIsInBhcnRpdGlvbiIsInRCdWZmZXIiLCJmQnVmZmVyIiwidERzdCIsImZEc3QiLCJtZXJnZSIsInNyY3MiLCJpbnB1dHMiLCJzbGljZSIsInNlbGVjdCIsInNwbGljZSIsImluZGV4T2YiLCJzcGxpdCIsImJ1ZmZlcnMiLCJiZnMiLCJkc3RzIiwibWFwIiwiYmYiLCJtYWtlVGFwIiwiZGVmaW5lUHJvcGVydHkiLCJjb25maWd1cmFibGUiLCJ0YXAiLCJpbmNsdWRlcyIsInVudGFwIiwidGFwcyIsImluZGV4IiwidW50YXBBbGwiLCJzcmNsZW4iLCJ2YWx1ZXMiLCJjYWxsYmFja3MiLCJkZWJvdW5jZSIsImRlZmF1bHRzIiwibGVhZGluZyIsInRyYWlsaW5nIiwibWF4RGVsYXkiLCJjYW5jZWwiLCJkZWwiLCJhc3NpZ24iLCJjdXJyZW50Iiwi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QUNBO0FBQ0MsU0FIRCxDQUdDO0FBQ0Q7QUFDQTtBQUNBLFMsQ0FFQTtBQUNBO0FBQ0E7OztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7QUFPQTs7Ozs7Ozs7O0FBc0NBOzs7Ozs7Ozs7Ozs7Ozs7QUFlQTs7Ozs7Ozs7Ozs7OztBQWFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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TUFBaEIsRUFBd0I7QUFDdEJoSixpRUFBSyxDQUFDMkcsR0FBRCxDQUFMO0FBQ0E7QUFDRDs7QUFFRCxVQUFJdEgsT0FBTyxLQUFLcUgsR0FBaEIsRUFBcUI7QUFDbkIsWUFBSS9JLEtBQUssS0FBS1Usa0RBQWQsRUFBc0I7QUFDcEIyQixtRUFBSyxDQUFDMkcsR0FBRCxDQUFMO0FBQ0E7QUFDRDs7QUFFRCxjQUFNeUMsTUFBTSxHQUFHMUssMkRBQU8sQ0FBQ3VDLEtBQUQsQ0FBdEI7O0FBQ0EsWUFBSSxDQUFDbUksTUFBTCxFQUFhO0FBQ1huSSxlQUFLLEdBQUcwRCw2REFBUyxDQUFDc0UsR0FBRCxDQUFqQjtBQUNEOztBQUVELFlBQUlKLE9BQUosRUFBYTtBQUNYLGNBQUksQ0FBQ08sTUFBTCxFQUFhO0FBQ1gsa0JBQU1oRCx3REFBSSxDQUFDTyxHQUFELEVBQU1oSixLQUFOLENBQVY7QUFDRCxXQUZELE1BRU8sSUFBSW1MLFFBQUosRUFBYztBQUNuQkssbUJBQU8sR0FBR3hMLEtBQVY7QUFDRDtBQUNGLFNBTkQsTUFNTyxJQUFJbUwsUUFBSixFQUFjO0FBQ25CSyxpQkFBTyxHQUFHeEwsS0FBVjtBQUNEO0FBQ0YsT0FwQkQsTUFvQk8sSUFBSW1MLFFBQVEsSUFBSUssT0FBTyxLQUFLOUssa0RBQTVCLEVBQW9DO0FBQ3pDNEMsYUFBSyxHQUFHMEQsNkRBQVMsQ0FBQ3NFLEdBQUQsQ0FBakI7QUFDQSxjQUFNN0Msd0RBQUksQ0FBQ08sR0FBRCxFQUFNd0MsT0FBTixDQUFWO0FBQ0FBLGVBQU8sR0FBRzlLLGtEQUFWO0FBQ0QsT0FKTSxNQUlBO0FBQ0w0QyxhQUFLLEdBQUdhLHdEQUFJLEVBQVo7QUFDRDtBQUNGO0FBQ0YsR0F4Q0MsQ0FBRjtBQTBDQSxTQUFPNkUsR0FBUDtBQUNEIiwiZmlsZSI6ImNoYW5rby1vcHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJvcHNcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wib3BzXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImZ1bmN0aW9uIF9hc3luY0l0ZXJhdG9yKGl0ZXJhYmxlKSB7XG4gIHZhciBtZXRob2Q7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBpZiAoU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHtcbiAgICAgIG1ldGhvZCA9IGl0ZXJhYmxlW1N5bWJvbC5hc3luY0l0ZXJhdG9yXTtcbiAgICAgIGlmIChtZXRob2QgIT0gbnVsbCkgcmV0dXJuIG1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICB9XG5cbiAgICBpZiAoU3ltYm9sLml0ZXJhdG9yKSB7XG4gICAgICBtZXRob2QgPSBpdGVyYWJsZVtTeW1ib2wuaXRlcmF0b3JdO1xuICAgICAgaWYgKG1ldGhvZCAhPSBudWxsKSByZXR1cm4gbWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgIH1cbiAgfVxuXG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJPYmplY3QgaXMgbm90IGFzeW5jIGl0ZXJhYmxlXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3luY0l0ZXJhdG9yOyIsIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImNzcFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJjc3BcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsInZhciBBd2FpdFZhbHVlID0gcmVxdWlyZShcIi4vQXdhaXRWYWx1ZVwiKTtcblxuZnVuY3Rpb24gQXN5bmNHZW5lcmF0b3IoZ2VuKSB7XG4gIHZhciBmcm9udCwgYmFjaztcblxuICBmdW5jdGlvbiBzZW5kKGtleSwgYXJnKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZXF1ZXN0ID0ge1xuICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgYXJnOiBhcmcsXG4gICAgICAgIHJlc29sdmU6IHJlc29sdmUsXG4gICAgICAgIHJlamVjdDogcmVqZWN0LFxuICAgICAgICBuZXh0OiBudWxsXG4gICAgICB9O1xuXG4gICAgICBpZiAoYmFjaykge1xuICAgICAgICBiYWNrID0gYmFjay5uZXh0ID0gcmVxdWVzdDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZyb250ID0gYmFjayA9IHJlcXVlc3Q7XG4gICAgICAgIHJlc3VtZShrZXksIGFyZyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXN1bWUoa2V5LCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgdmFyIHJlc3VsdCA9IGdlbltrZXldKGFyZyk7XG4gICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICB2YXIgd3JhcHBlZEF3YWl0ID0gdmFsdWUgaW5zdGFuY2VvZiBBd2FpdFZhbHVlO1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKHdyYXBwZWRBd2FpdCA/IHZhbHVlLndyYXBwZWQgOiB2YWx1ZSkudGhlbihmdW5jdGlvbiAoYXJnKSB7XG4gICAgICAgIGlmICh3cmFwcGVkQXdhaXQpIHtcbiAgICAgICAgICByZXN1bWUoa2V5ID09PSBcInJldHVyblwiID8gXCJyZXR1cm5cIiA6IFwibmV4dFwiLCBhcmcpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldHRsZShyZXN1bHQuZG9uZSA/IFwicmV0dXJuXCIgOiBcIm5vcm1hbFwiLCBhcmcpO1xuICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICByZXN1bWUoXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBzZXR0bGUoXCJ0aHJvd1wiLCBlcnIpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNldHRsZSh0eXBlLCB2YWx1ZSkge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBcInJldHVyblwiOlxuICAgICAgICBmcm9udC5yZXNvbHZlKHtcbiAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgZG9uZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgXCJ0aHJvd1wiOlxuICAgICAgICBmcm9udC5yZWplY3QodmFsdWUpO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgZnJvbnQucmVzb2x2ZSh7XG4gICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgIGRvbmU6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBmcm9udCA9IGZyb250Lm5leHQ7XG5cbiAgICBpZiAoZnJvbnQpIHtcbiAgICAgIHJlc3VtZShmcm9udC5rZXksIGZyb250LmFyZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJhY2sgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHRoaXMuX2ludm9rZSA9IHNlbmQ7XG5cbiAgaWYgKHR5cGVvZiBnZW5bXCJyZXR1cm5cIl0gIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHRoaXNbXCJyZXR1cm5cIl0gPSB1bmRlZmluZWQ7XG4gIH1cbn1cblxuaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuYXN5bmNJdGVyYXRvcikge1xuICBBc3luY0dlbmVyYXRvci5wcm90b3R5cGVbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xufVxuXG5Bc3luY0dlbmVyYXRvci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uIChhcmcpIHtcbiAgcmV0dXJuIHRoaXMuX2ludm9rZShcIm5leHRcIiwgYXJnKTtcbn07XG5cbkFzeW5jR2VuZXJhdG9yLnByb3RvdHlwZVtcInRocm93XCJdID0gZnVuY3Rpb24gKGFyZykge1xuICByZXR1cm4gdGhpcy5faW52b2tlKFwidGhyb3dcIiwgYXJnKTtcbn07XG5cbkFzeW5jR2VuZXJhdG9yLnByb3RvdHlwZVtcInJldHVyblwiXSA9IGZ1bmN0aW9uIChhcmcpIHtcbiAgcmV0dXJuIHRoaXMuX2ludm9rZShcInJldHVyblwiLCBhcmcpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBBc3luY0dlbmVyYXRvcjsiLCJmdW5jdGlvbiBfQXdhaXRWYWx1ZSh2YWx1ZSkge1xuICB0aGlzLndyYXBwZWQgPSB2YWx1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfQXdhaXRWYWx1ZTsiLCJ2YXIgQXdhaXRWYWx1ZSA9IHJlcXVpcmUoXCIuL0F3YWl0VmFsdWVcIik7XG5cbmZ1bmN0aW9uIF9hd2FpdEFzeW5jR2VuZXJhdG9yKHZhbHVlKSB7XG4gIHJldHVybiBuZXcgQXdhaXRWYWx1ZSh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2F3YWl0QXN5bmNHZW5lcmF0b3I7IiwidmFyIEFzeW5jR2VuZXJhdG9yID0gcmVxdWlyZShcIi4vQXN5bmNHZW5lcmF0b3JcIik7XG5cbmZ1bmN0aW9uIF93cmFwQXN5bmNHZW5lcmF0b3IoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbmV3IEFzeW5jR2VuZXJhdG9yKGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF93cmFwQXN5bmNHZW5lcmF0b3I7IiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsIihmdW5jdGlvbiAoZ2xvYmFsLCB1bmRlZmluZWQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIGlmIChnbG9iYWwuc2V0SW1tZWRpYXRlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgbmV4dEhhbmRsZSA9IDE7IC8vIFNwZWMgc2F5cyBncmVhdGVyIHRoYW4gemVyb1xuICAgIHZhciB0YXNrc0J5SGFuZGxlID0ge307XG4gICAgdmFyIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IGZhbHNlO1xuICAgIHZhciBkb2MgPSBnbG9iYWwuZG9jdW1lbnQ7XG4gICAgdmFyIHJlZ2lzdGVySW1tZWRpYXRlO1xuXG4gICAgZnVuY3Rpb24gc2V0SW1tZWRpYXRlKGNhbGxiYWNrKSB7XG4gICAgICAvLyBDYWxsYmFjayBjYW4gZWl0aGVyIGJlIGEgZnVuY3Rpb24gb3IgYSBzdHJpbmdcbiAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBjYWxsYmFjayA9IG5ldyBGdW5jdGlvbihcIlwiICsgY2FsbGJhY2spO1xuICAgICAgfVxuICAgICAgLy8gQ29weSBmdW5jdGlvbiBhcmd1bWVudHNcbiAgICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaSArIDFdO1xuICAgICAgfVxuICAgICAgLy8gU3RvcmUgYW5kIHJlZ2lzdGVyIHRoZSB0YXNrXG4gICAgICB2YXIgdGFzayA9IHsgY2FsbGJhY2s6IGNhbGxiYWNrLCBhcmdzOiBhcmdzIH07XG4gICAgICB0YXNrc0J5SGFuZGxlW25leHRIYW5kbGVdID0gdGFzaztcbiAgICAgIHJlZ2lzdGVySW1tZWRpYXRlKG5leHRIYW5kbGUpO1xuICAgICAgcmV0dXJuIG5leHRIYW5kbGUrKztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhckltbWVkaWF0ZShoYW5kbGUpIHtcbiAgICAgICAgZGVsZXRlIHRhc2tzQnlIYW5kbGVbaGFuZGxlXTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBydW4odGFzaykge1xuICAgICAgICB2YXIgY2FsbGJhY2sgPSB0YXNrLmNhbGxiYWNrO1xuICAgICAgICB2YXIgYXJncyA9IHRhc2suYXJncztcbiAgICAgICAgc3dpdGNoIChhcmdzLmxlbmd0aCkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIGNhbGxiYWNrKGFyZ3NbMF0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIGNhbGxiYWNrKGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIGNhbGxiYWNrKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBjYWxsYmFjay5hcHBseSh1bmRlZmluZWQsIGFyZ3MpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBydW5JZlByZXNlbnQoaGFuZGxlKSB7XG4gICAgICAgIC8vIEZyb20gdGhlIHNwZWM6IFwiV2FpdCB1bnRpbCBhbnkgaW52b2NhdGlvbnMgb2YgdGhpcyBhbGdvcml0aG0gc3RhcnRlZCBiZWZvcmUgdGhpcyBvbmUgaGF2ZSBjb21wbGV0ZWQuXCJcbiAgICAgICAgLy8gU28gaWYgd2UncmUgY3VycmVudGx5IHJ1bm5pbmcgYSB0YXNrLCB3ZSdsbCBuZWVkIHRvIGRlbGF5IHRoaXMgaW52b2NhdGlvbi5cbiAgICAgICAgaWYgKGN1cnJlbnRseVJ1bm5pbmdBVGFzaykge1xuICAgICAgICAgICAgLy8gRGVsYXkgYnkgZG9pbmcgYSBzZXRUaW1lb3V0LiBzZXRJbW1lZGlhdGUgd2FzIHRyaWVkIGluc3RlYWQsIGJ1dCBpbiBGaXJlZm94IDcgaXQgZ2VuZXJhdGVkIGFcbiAgICAgICAgICAgIC8vIFwidG9vIG11Y2ggcmVjdXJzaW9uXCIgZXJyb3IuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KHJ1bklmUHJlc2VudCwgMCwgaGFuZGxlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciB0YXNrID0gdGFza3NCeUhhbmRsZVtoYW5kbGVdO1xuICAgICAgICAgICAgaWYgKHRhc2spIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50bHlSdW5uaW5nQVRhc2sgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJ1bih0YXNrKTtcbiAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckltbWVkaWF0ZShoYW5kbGUpO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50bHlSdW5uaW5nQVRhc2sgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsTmV4dFRpY2tJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIHByb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24gKCkgeyBydW5JZlByZXNlbnQoaGFuZGxlKTsgfSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FuVXNlUG9zdE1lc3NhZ2UoKSB7XG4gICAgICAgIC8vIFRoZSB0ZXN0IGFnYWluc3QgYGltcG9ydFNjcmlwdHNgIHByZXZlbnRzIHRoaXMgaW1wbGVtZW50YXRpb24gZnJvbSBiZWluZyBpbnN0YWxsZWQgaW5zaWRlIGEgd2ViIHdvcmtlcixcbiAgICAgICAgLy8gd2hlcmUgYGdsb2JhbC5wb3N0TWVzc2FnZWAgbWVhbnMgc29tZXRoaW5nIGNvbXBsZXRlbHkgZGlmZmVyZW50IGFuZCBjYW4ndCBiZSB1c2VkIGZvciB0aGlzIHB1cnBvc2UuXG4gICAgICAgIGlmIChnbG9iYWwucG9zdE1lc3NhZ2UgJiYgIWdsb2JhbC5pbXBvcnRTY3JpcHRzKSB7XG4gICAgICAgICAgICB2YXIgcG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cyA9IHRydWU7XG4gICAgICAgICAgICB2YXIgb2xkT25NZXNzYWdlID0gZ2xvYmFsLm9ubWVzc2FnZTtcbiAgICAgICAgICAgIGdsb2JhbC5vbm1lc3NhZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzID0gZmFsc2U7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKFwiXCIsIFwiKlwiKTtcbiAgICAgICAgICAgIGdsb2JhbC5vbm1lc3NhZ2UgPSBvbGRPbk1lc3NhZ2U7XG4gICAgICAgICAgICByZXR1cm4gcG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxQb3N0TWVzc2FnZUltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICAvLyBJbnN0YWxscyBhbiBldmVudCBoYW5kbGVyIG9uIGBnbG9iYWxgIGZvciB0aGUgYG1lc3NhZ2VgIGV2ZW50OiBzZWVcbiAgICAgICAgLy8gKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9ET00vd2luZG93LnBvc3RNZXNzYWdlXG4gICAgICAgIC8vICogaHR0cDovL3d3dy53aGF0d2cub3JnL3NwZWNzL3dlYi1hcHBzL2N1cnJlbnQtd29yay9tdWx0aXBhZ2UvY29tbXMuaHRtbCNjcm9zc0RvY3VtZW50TWVzc2FnZXNcblxuICAgICAgICB2YXIgbWVzc2FnZVByZWZpeCA9IFwic2V0SW1tZWRpYXRlJFwiICsgTWF0aC5yYW5kb20oKSArIFwiJFwiO1xuICAgICAgICB2YXIgb25HbG9iYWxNZXNzYWdlID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChldmVudC5zb3VyY2UgPT09IGdsb2JhbCAmJlxuICAgICAgICAgICAgICAgIHR5cGVvZiBldmVudC5kYXRhID09PSBcInN0cmluZ1wiICYmXG4gICAgICAgICAgICAgICAgZXZlbnQuZGF0YS5pbmRleE9mKG1lc3NhZ2VQcmVmaXgpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcnVuSWZQcmVzZW50KCtldmVudC5kYXRhLnNsaWNlKG1lc3NhZ2VQcmVmaXgubGVuZ3RoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICAgICAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgb25HbG9iYWxNZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBnbG9iYWwuYXR0YWNoRXZlbnQoXCJvbm1lc3NhZ2VcIiwgb25HbG9iYWxNZXNzYWdlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBnbG9iYWwucG9zdE1lc3NhZ2UobWVzc2FnZVByZWZpeCArIGhhbmRsZSwgXCIqXCIpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxNZXNzYWdlQ2hhbm5lbEltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICB2YXIgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICAgICAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgaGFuZGxlID0gZXZlbnQuZGF0YTtcbiAgICAgICAgICAgIHJ1bklmUHJlc2VudChoYW5kbGUpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBjaGFubmVsLnBvcnQyLnBvc3RNZXNzYWdlKGhhbmRsZSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbFJlYWR5U3RhdGVDaGFuZ2VJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgdmFyIGh0bWwgPSBkb2MuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgLy8gQ3JlYXRlIGEgPHNjcmlwdD4gZWxlbWVudDsgaXRzIHJlYWR5c3RhdGVjaGFuZ2UgZXZlbnQgd2lsbCBiZSBmaXJlZCBhc3luY2hyb25vdXNseSBvbmNlIGl0IGlzIGluc2VydGVkXG4gICAgICAgICAgICAvLyBpbnRvIHRoZSBkb2N1bWVudC4gRG8gc28sIHRodXMgcXVldWluZyB1cCB0aGUgdGFzay4gUmVtZW1iZXIgdG8gY2xlYW4gdXAgb25jZSBpdCdzIGJlZW4gY2FsbGVkLlxuICAgICAgICAgICAgdmFyIHNjcmlwdCA9IGRvYy5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICAgICAgICAgICAgc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBydW5JZlByZXNlbnQoaGFuZGxlKTtcbiAgICAgICAgICAgICAgICBzY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlID0gbnVsbDtcbiAgICAgICAgICAgICAgICBodG1sLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG4gICAgICAgICAgICAgICAgc2NyaXB0ID0gbnVsbDtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBodG1sLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbFNldFRpbWVvdXRJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQocnVuSWZQcmVzZW50LCAwLCBoYW5kbGUpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8vIElmIHN1cHBvcnRlZCwgd2Ugc2hvdWxkIGF0dGFjaCB0byB0aGUgcHJvdG90eXBlIG9mIGdsb2JhbCwgc2luY2UgdGhhdCBpcyB3aGVyZSBzZXRUaW1lb3V0IGV0IGFsLiBsaXZlLlxuICAgIHZhciBhdHRhY2hUbyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiAmJiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoZ2xvYmFsKTtcbiAgICBhdHRhY2hUbyA9IGF0dGFjaFRvICYmIGF0dGFjaFRvLnNldFRpbWVvdXQgPyBhdHRhY2hUbyA6IGdsb2JhbDtcblxuICAgIC8vIERvbid0IGdldCBmb29sZWQgYnkgZS5nLiBicm93c2VyaWZ5IGVudmlyb25tZW50cy5cbiAgICBpZiAoe30udG9TdHJpbmcuY2FsbChnbG9iYWwucHJvY2VzcykgPT09IFwiW29iamVjdCBwcm9jZXNzXVwiKSB7XG4gICAgICAgIC8vIEZvciBOb2RlLmpzIGJlZm9yZSAwLjlcbiAgICAgICAgaW5zdGFsbE5leHRUaWNrSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoY2FuVXNlUG9zdE1lc3NhZ2UoKSkge1xuICAgICAgICAvLyBGb3Igbm9uLUlFMTAgbW9kZXJuIGJyb3dzZXJzXG4gICAgICAgIGluc3RhbGxQb3N0TWVzc2FnZUltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGdsb2JhbC5NZXNzYWdlQ2hhbm5lbCkge1xuICAgICAgICAvLyBGb3Igd2ViIHdvcmtlcnMsIHdoZXJlIHN1cHBvcnRlZFxuICAgICAgICBpbnN0YWxsTWVzc2FnZUNoYW5uZWxJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChkb2MgJiYgXCJvbnJlYWR5c3RhdGVjaGFuZ2VcIiBpbiBkb2MuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKSkge1xuICAgICAgICAvLyBGb3IgSUUgNuKAkzhcbiAgICAgICAgaW5zdGFsbFJlYWR5U3RhdGVDaGFuZ2VJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gRm9yIG9sZGVyIGJyb3dzZXJzXG4gICAgICAgIGluc3RhbGxTZXRUaW1lb3V0SW1wbGVtZW50YXRpb24oKTtcbiAgICB9XG5cbiAgICBhdHRhY2hUby5zZXRJbW1lZGlhdGUgPSBzZXRJbW1lZGlhdGU7XG4gICAgYXR0YWNoVG8uY2xlYXJJbW1lZGlhdGUgPSBjbGVhckltbWVkaWF0ZTtcbn0odHlwZW9mIHNlbGYgPT09IFwidW5kZWZpbmVkXCIgPyB0eXBlb2YgZ2xvYmFsID09PSBcInVuZGVmaW5lZFwiID8gdGhpcyA6IGdsb2JhbCA6IHNlbGYpKTtcbiIsInZhciBzY29wZSA9ICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiICYmIGdsb2JhbCkgfHxcbiAgICAgICAgICAgICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzZWxmKSB8fFxuICAgICAgICAgICAgd2luZG93O1xudmFyIGFwcGx5ID0gRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5O1xuXG4vLyBET00gQVBJcywgZm9yIGNvbXBsZXRlbmVzc1xuXG5leHBvcnRzLnNldFRpbWVvdXQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBUaW1lb3V0KGFwcGx5LmNhbGwoc2V0VGltZW91dCwgc2NvcGUsIGFyZ3VtZW50cyksIGNsZWFyVGltZW91dCk7XG59O1xuZXhwb3J0cy5zZXRJbnRlcnZhbCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFRpbWVvdXQoYXBwbHkuY2FsbChzZXRJbnRlcnZhbCwgc2NvcGUsIGFyZ3VtZW50cyksIGNsZWFySW50ZXJ2YWwpO1xufTtcbmV4cG9ydHMuY2xlYXJUaW1lb3V0ID1cbmV4cG9ydHMuY2xlYXJJbnRlcnZhbCA9IGZ1bmN0aW9uKHRpbWVvdXQpIHtcbiAgaWYgKHRpbWVvdXQpIHtcbiAgICB0aW1lb3V0LmNsb3NlKCk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIFRpbWVvdXQoaWQsIGNsZWFyRm4pIHtcbiAgdGhpcy5faWQgPSBpZDtcbiAgdGhpcy5fY2xlYXJGbiA9IGNsZWFyRm47XG59XG5UaW1lb3V0LnByb3RvdHlwZS51bnJlZiA9IFRpbWVvdXQucHJvdG90eXBlLnJlZiA9IGZ1bmN0aW9uKCkge307XG5UaW1lb3V0LnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLl9jbGVhckZuLmNhbGwoc2NvcGUsIHRoaXMuX2lkKTtcbn07XG5cbi8vIERvZXMgbm90IHN0YXJ0IHRoZSB0aW1lLCBqdXN0IHNldHMgdXAgdGhlIG1lbWJlcnMgbmVlZGVkLlxuZXhwb3J0cy5lbnJvbGwgPSBmdW5jdGlvbihpdGVtLCBtc2Vjcykge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG4gIGl0ZW0uX2lkbGVUaW1lb3V0ID0gbXNlY3M7XG59O1xuXG5leHBvcnRzLnVuZW5yb2xsID0gZnVuY3Rpb24oaXRlbSkge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG4gIGl0ZW0uX2lkbGVUaW1lb3V0ID0gLTE7XG59O1xuXG5leHBvcnRzLl91bnJlZkFjdGl2ZSA9IGV4cG9ydHMuYWN0aXZlID0gZnVuY3Rpb24oaXRlbSkge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG5cbiAgdmFyIG1zZWNzID0gaXRlbS5faWRsZVRpbWVvdXQ7XG4gIGlmIChtc2VjcyA+PSAwKSB7XG4gICAgaXRlbS5faWRsZVRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gb25UaW1lb3V0KCkge1xuICAgICAgaWYgKGl0ZW0uX29uVGltZW91dClcbiAgICAgICAgaXRlbS5fb25UaW1lb3V0KCk7XG4gICAgfSwgbXNlY3MpO1xuICB9XG59O1xuXG4vLyBzZXRpbW1lZGlhdGUgYXR0YWNoZXMgaXRzZWxmIHRvIHRoZSBnbG9iYWwgb2JqZWN0XG5yZXF1aXJlKFwic2V0aW1tZWRpYXRlXCIpO1xuLy8gT24gc29tZSBleG90aWMgZW52aXJvbm1lbnRzLCBpdCdzIG5vdCBjbGVhciB3aGljaCBvYmplY3QgYHNldGltbWVkaWF0ZWAgd2FzXG4vLyBhYmxlIHRvIGluc3RhbGwgb250by4gIFNlYXJjaCBlYWNoIHBvc3NpYmlsaXR5IGluIHRoZSBzYW1lIG9yZGVyIGFzIHRoZVxuLy8gYHNldGltbWVkaWF0ZWAgbGlicmFyeS5cbmV4cG9ydHMuc2V0SW1tZWRpYXRlID0gKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmIHNlbGYuc2V0SW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBnbG9iYWwuc2V0SW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAodGhpcyAmJiB0aGlzLnNldEltbWVkaWF0ZSk7XG5leHBvcnRzLmNsZWFySW1tZWRpYXRlID0gKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmIHNlbGYuY2xlYXJJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgJiYgZ2xvYmFsLmNsZWFySW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzICYmIHRoaXMuY2xlYXJJbW1lZGlhdGUpO1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG5cbi8qKlxuICogQWxsIG9mIHRoZSBwdWJsaWMtZmFjaW5nIENoYW5rbyBmdW5jdGlvbnMgYXJlIGdhdGhlcmVkIGhlcmUgaW4gb25lIHBsYWNlIHRvXG4gKiBiZSBleHBvcnRlZCBhcyBhIHdob2xlLiBUaGlzIGlzIGEgY29tcGxldGVseSBmbGF0IGxpc3Qgb2YgZXhwb3J0cywgYXNcbiAqIGlubHVkaW5nIGFueSBvYmplY3QgbGl0ZXJhbHMgZm9yIGV4cG9ydCAod2hpY2ggd291bGQgYmUgbmF0dXJhbCBmb3IgYnVmZmVycyxcbiAqIGZvciBleGFtcGxlKSB3b3VsZCBrZWVwIHRyZWUtc2hha2luZyBmcm9tIHdvcmtpbmcgcmlnaHQuXG4gKlxuICogQG1vZHVsZSBjc3BcbiAqL1xuXG5leHBvcnQgeyBmaXhlZCwgZHJvcHBpbmcsIHNsaWRpbmcgfSBmcm9tIFwibW9kdWxlcy9idWZmZXJcIjtcbmV4cG9ydCB7XG4gIENMT1NFRCxcbiAgY2hhbixcbiAgdGltZWRDaGFuLFxuICB0cmFuc0NoYW4sXG4gIHNlbmQsXG4gIHJlY3YsXG4gIHNlbmRBc3luYyxcbiAgcmVjdkFzeW5jLFxuICByZWN2T3JUaHJvdyxcbiAgY2xvc2UsXG4gIGlzQ2xvc2VkLFxuICBpc0J1ZmZlcmVkLFxuICBpc1RpbWVkLFxuICBzZWxlY3QsXG4gIHNlbGVjdEFzeW5jLFxuICB2YWx1ZSxcbiAgY2hhbm5lbFxufSBmcm9tIFwibW9kdWxlcy9jaGFubmVsXCI7XG5leHBvcnQge1xuICBjb25maWcsXG4gIFNFVF9JTU1FRElBVEUsXG4gIE1FU1NBR0VfQ0hBTk5FTCxcbiAgU0VUX1RJTUVPVVRcbn0gZnJvbSBcIm1vZHVsZXMvZGlzcGF0Y2hlclwiO1xuZXhwb3J0IHsgZ28sIHNsZWVwLCBqb2luIH0gZnJvbSBcIm1vZHVsZXMvcHJvY2Vzc1wiO1xuZXhwb3J0IHsgRU1QVFkgfSBmcm9tIFwibW9kdWxlcy9xdWV1ZVwiO1xuXG4vKipcbiAqIEFuIGVycm9yIGhhbmRsaW5nIGZ1bmNpdG9uLiBUaGlzIGlzIHVzZWQgdG8gaGFuZGxlIGV4Y2VwdGlvbnMgdGhyb3duIGluIGFzeW5jXG4gKiBmdW5jdGlvbnMgYW5kIGluIHRyYW5zZHVjZXJzLiBUaGUgcmV0dXJuIHZhbHVlIG9mIGFuIGV4Y2VwdGlvbiBoYW5kbGVyIGlzXG4gKiB0eXBpY2FsbHkgc2VudCB0byBhIGNoYW5uZWw7IGlmIHRoZSBleGNlcHRpb24gaGFwcGVuZWQgd2l0aGluIGFuIGFzeW5jXG4gKiBmdW5jdGlvbiwgaXQgd2lsbCBiZSBzZW50IHRvIHRoYXQgZnVuY3Rpb24ncyBvdXRwdXQgY2hhbm5lbCwgYW5kIGlmIHRoZVxuICogZXhjcGV0aW9uIGhhcHBlbmVkIGluIGEgdHJhbnNkdWNlciwgaXQgd2lsbCBiZSBzZW50IHRvIHRoZSBjaGFubmVsIHRvIHdoaWNoXG4gKiB0aGUgdHJhbnNkdWNlciBpcyBhdHRhY2hlZC5cbiAqXG4gKiBAY2FsbGJhY2sgRXhjZXB0aW9uSGFuZGxlclxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqIEBwYXJhbSB7b2JqZWN0fSBlcnIgVGhlIGVycm9yIG9iamVjdCB0aGF0IHdhcyB0aHJvd24gdG8gY2F1c2UgdGhlIGVycm9yIHRvXG4gKiAgICAgaGF2ZSB0byBiZSBoYW5kbGVkLlxuICogQHJldHVybiB7Kn0gQSB2YWx1ZSBkZWNpZGVkIGJ5IHRoZSBoYW5kbGVyIHRoYXQgd2lsbCBiZSBzZW50IHRvIGEgY2hhbm5lbC5cbiAqL1xuXG4vKipcbiAqIEEgY2FsbGJhY2sgdGhhdCdzIHJ1biB3aGVuIGEgbm9uLWJsb2NraW5nIGNoYW5uZWwgb3BlcmF0aW9uIGNvbXBsZXRlcy4gVGhlXG4gKiB2YWx1ZSB0aGF0IHRoaXMgZnVuY3Rpb24gcmVjZWl2ZXMgaXMgaWRlbnRpY2FsIHRvIHdoYXQgaXMgcmV0dXJuZWQgYnkgYVxuICogYmxvY2tpbmcgY2FsbDogdGhlIHZhbHVlIHJlY2VpdmVkIGZyb20gdGhlIGNoYW5uZWwgZm9yIGEgYHJlY3ZgLCBvciBgdHJ1ZWAgb3JcbiAqIGBmYWxzZWAgZGVwZW5kaW5nIG9uIHRoZSBjaGFubmVsIHN0YXR1cyBmb3IgYSBgc2VuZGAuIEFueSByZXR1cm4gdmFsdWUgZnJvbVxuICogdGhpcyBjYWxsYmFjayBpcyBpZ25vcmVkLlxuICpcbiAqIEBjYWxsYmFjayBPcENhbGxiYWNrXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICogQHBhcmFtIHsqfSB2YWx1ZSBFaXRoZXIgdGhlIHZhbHVlIHJlY2VpdmVkIGZyb20gdGhlIGNoYW5uZWwsIG9yIHdoZXRoZXIgb3JcbiAqIG5vdCBhIHZhbHVlIHdhcyBzdWNjZXNzZnVsbHkgc2VudC5cbiAqL1xuXG4vKipcbiAqIEEgY2FsbGJhY2sgdGhhdCdzIHJ1biB3aGVuIGEgbm9uLWJsb2NraW5nIGBzZWxlY3RgIG9wZXJhdGlvbiBjb21wbGV0ZXMuIFRoZVxuICogdmFsdWUgdGhhdCB0aGlzIGZ1bmN0aW9uIHJlY2VpdmVzIGlzIGFuIG9iamVjdCB3aXRoIHR3byBwcm9wZXJ0aWVzOiB0aGUgdmFsdWVcbiAqIHRoYXQgdGhlIGBzZWxlY3RgIG9wZXJhdGlvbiBjb21wbGV0ZWQgd2l0aCAoZWl0aGVyIHRoZSB2YWx1ZSByZWNlaXZlZCBmcm9tXG4gKiB0aGUgY2hhbm5lbCBpbiBhIHJlY2VpdmUgb3BlcmF0aW9uLCBvciBgdHJ1ZWAgb3IgYGZhbHNlYCBpbiBhIHNlbmRcbiAqIG9wZXJhdGlvbiksIGFsb25nIHdpdGggdGhlIGNoYW5uZWwgd2hlcmUgdGhlIG9wZXJhdGlvbiBhY3R1YWxseSBoYXBwZW5lZC4gQW55XG4gKiByZXR1cm4gdmFsdWUgZnJvbSB0aGlzIGNhbGxiYWNrIGlzIGlnbm9yZWQuXG4gKlxuICogQGNhbGxiYWNrIFNlbGVjdENhbGxiYWNrXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICogQHBhcmFtIHttb2R1bGU6Y3NwLlNlbGVjdFJlc3VsdH0gZGF0YSBUaGUgdmFsdWUgcmV0dXJuZWQgZnJvbSB0aGUgc2VsZWN0XG4gKiAgICAgb3BlcmF0aW9uLlxuICovXG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuLyoqXG4gKiBQcm92aWRlcyBzZXZlcmFsIHR5cGVzIG9mIGJ1ZmZlcnMgdXNhYmxlIGluIGJ1ZmZlcmVkIGNoYW5uZWxzLiBUaGVzZSBhcmUgYWxsXG4gKiBidWlsdCBvbiBhIHNtYWxsLCBlZmZpY2llbnQgcXVldWUgd2hpY2ggaXMgaW4gdHVybiBiYWNrZWQgYnkgYSBKYXZhU2NyaXB0XG4gKiBhcnJheS5cbiAqXG4gKiBAbW9kdWxlIGNzcC9idWZmZXJcbiAqIEBwcml2YXRlXG4gKi9cblxuaW1wb3J0IHsgcXVldWUgYXMgcSwgY291bnQgYXMgcUNvdW50LCBlbnF1ZXVlLCBkZXF1ZXVlIH0gZnJvbSBcIm1vZHVsZXMvcXVldWVcIjtcblxuLyoqXG4gKiBBIGJ1ZmZlciB0aGF0IHN0b3JlcyB2YWx1ZXMgc2VudCB0byBhIGJ1ZmZlcmVkIGNoYW5uZWwgdW50aWwgYSBwcm9jZXNzXG4gKiByZWNlaXZlcyB0aGVtLlxuICpcbiAqIERpZmZlcmVudCBidWZmZXJzIGRpZmZlciBvbmx5IGluIHRoZSB3YXkgdGhhdCB0aGV5IGRldGVybWluZSB3aGV0aGVyIHRoZXkgYXJlXG4gKiBmdWxsIGFuZCBpbiB3aGF0IGhhcHBlbnMgd2hlbiBhIG5ldyB2YWx1ZSBpcyBhZGRlZCB0byBhIGZ1bGwgYnVmZmVyLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAdHlwZWRlZiB7KG1vZHVsZTpjc3AuRml4ZWRCdWZmZXIgfCBtb2R1bGU6Y3NwLkRyb3BwaW5nQnVmZmVyIHxcbiAqICAgICBtb2R1bGU6Y3NwLlNsaWRpbmdCdWZmZXIpfSBCdWZmZXJcbiAqL1xuXG4vKipcbiAqIFRoZSBuYW1lIG9mIGEgcHJvcGVydHkgdGhhdCBleGlzdHMgb24gYnVmZmVyIG9iamVjdHMgZm9yIHRoZSBwdXJwb3NlIG9mXG4gKiBpdGVudGlmeWluZyB0aGVtIGFzIGJ1ZmZlciBvYmplY3RzLlxuICpcbiAqIEB0eXBlIHtTeW1ib2x9XG4gKiBAcHJpdmF0ZVxuICovXG5jb25zdCBCVUZGRVIgPSBTeW1ib2woXCJCVUZGRVJcIik7XG5cbi8qKlxuICogQSBwb3NzaWJsZSB2YWx1ZSBvZiB0aGUgYHtAbGluayBtb2R1bGU6Y3NwL2J1ZmZlci5CVUZGRVJ8QlVGRkVSfSBwcm9wZXJ0eVxuICogaW5kaWNhdGluZyB0aGF0IHRoZSBidWZmZXIgaXMgYSBmaXhlZCBidWZmZXIuXG4gKlxuICogQHR5cGUge1N5bWJvbH1cbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IEZJWEVEID0gU3ltYm9sKFwiRklYRURcIik7XG5cbi8qKlxuICogQSBwb3NzaWJsZSB2YWx1ZSBvZiB0aGUgYHtAbGluayBtb2R1bGU6Y3NwL2J1ZmZlci5CVUZGRVJ8QlVGRkVSfSBwcm9wZXJ0eVxuICogaW5kaWNhdGluZyB0aGF0IHRoZSBidWZmZXIgaXMgYSBkcm9wcGluZyBidWZmZXIuXG4gKlxuICogQHR5cGUge1N5bWJvbH1cbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IERST1BQSU5HID0gU3ltYm9sKFwiRFJPUFBJTkdcIik7XG5cbi8qKlxuICogQSBwb3NzaWJsZSB2YWx1ZSBvZiB0aGUgYHtAbGluayBtb2R1bGU6Y3NwL2J1ZmZlci5CVUZGRVJ8QlVGRkVSfSBwcm9wZXJ0eVxuICogaW5kaWNhdGluZyB0aGF0IHRoZSBidWZmZXIgaXMgYSBzbGlkaW5nIGJ1ZmZlci5cbiAqXG4gKiBAdHlwZSB7U3ltYm9sfVxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgU0xJRElORyA9IFN5bWJvbChcIlNMSURJTkdcIik7XG5cbi8qKlxuICogUHJlZGljYXRlIGluZGljYXRpbmcgd2hldGhlciB0aGUgc3VwcGxpZWQgb2JqZWN0IGlzIGEgYnVmZmVyLlxuICpcbiAqIEBwYXJhbSB7Kn0gb2JqIFRoZSB2YWx1ZSB0byB0ZXN0IHRvIHNlZSBpZiBpdCdzIGEgYnVmZmVyLlxuICogQHJldHVybiB7Ym9vbGVhbn0gRWl0aGVyIGB0cnVlYCBpZiB0aGUgdmFsdWUgaXMgYSBidWZmZXIsIG9yIGBmYWxzZWAgaWYgaXQgaXNcbiAqICAgICBub3QuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBpc0J1ZmZlcihvYmopIHtcbiAgcmV0dXJuICEhb2JqPy5bQlVGRkVSXTtcbn1cblxuLyoqXG4gKiBBIGJ1ZmZlciBpbXBsZW1lbnRhdGlvbiB0aGF0IG5ldmVyIGRpc2NhcmRzIGJ1ZmZlcmVkIGl0ZW1zIHdoZW4gYSBuZXcgaXRlbSBpc1xuICogYWRkZWQuXG4gKlxuICogVGhpcyBidWZmZXIgaGFzIGEgY29uY2VwdCBvZiAqZnVsbCosIGJ1dCBpdCdzIGEgc29mdCBsaW1pdC4gSWYgdGhlIHNpemUgb2ZcbiAqIHRoZSBidWZmZXIgaXMgZXhjZWVkZWQsIGFkZGVkIGl0ZW1zIGFyZSBzdGlsbCBzdG9yZWQuXG4gKlxuICogQSBidWZmZXIgb2YgdGhpcyB0eXBlIGV4aXN0cyBvbmx5IGFzIGFuIG9iamVjdCB0aGF0IGNhbiBiZSBwYXNzZWQgdG8gYVxuICogY2hhbm5lbCBjcmVhdGlvbiBmdW5jdGlvbiAoc3VjaCBhcyB7QGxpbmsgbW9kdWxlOmNzcC5jaGFufGNoYW59KSB0byBtYWtlIHRoYXRcbiAqIGNoYW5uZWwgYSBidWZmZXJlZCBjaGFubmVsLiBJdCBkb2Vzbid0IGhhdmUgYW55IHByb3BlcnRpZXMgdGhhdCBhcmUgaW50ZW5kZWRcbiAqIGZvciBleHRlcm5hbCB1c2UuXG4gKlxuICogQHR5cGVkZWYgRml4ZWRCdWZmZXJcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIGEgZml4ZWQgYnVmZmVyIG9mIHRoZSBzcGVjaWZpZWQgY2FwYWNpdHkuXG4gKlxuICogQSBmaXhlZCBidWZmZXIgaXMgYSAnbm9ybWFsJyBidWZmZXIsIG9uZSB0aGF0IHN0b3JlcyBhbmQgcmV0dXJucyBpdGVtcyBvblxuICogZGVtYW5kLiBXaGlsZSBpdCBpcyBjYXBhYmxlIG9mIGJlaW5nIG92ZXItZmlsbGVkLCB0aGF0IGFiaWxpdHkgaXMgbm90IHVzZWQgaW5cbiAqIENoYW5rby4gQSBidWZmZXIgdGhhdCBpcyBmdWxsIHdpbGwgY2F1c2UgdGhlIG5leHQgcHV0IHRvIGl0cyBjaGFubmVsIHRvIGJsb2NrXG4gKiB1bnRpbCBhdCBsZWFzdCBvbmUgaXRlbSBpcyByZW1vdmVkIGZyb20gdGhlIGJ1ZmZlci5cbiAqXG4gKiBUaGlzIGJ1ZmZlciBpcyBwYXNzZWQgdG8gYHtAbGluayBtb2R1bGU6Y3NwLmNoYW58Y2hhbn1gLCBldGMuIHRvIGNyZWF0ZSBhXG4gKiBidWZmZXJlZCBjaGFubmVsLiBJdCBpcyBub3QgbWVhbnQgdG8gYmUgdXNlZCBkaXJlY3RseS5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICogQHBhcmFtIHtudW1iZXJ9IHNpemUgVGhlIG51bWJlciBvZiBpdGVtcyB0aGF0IHRoZSBuZXcgYnVmZmVyIGNhbiBob2xkIGJlZm9yZVxuICogICAgIGl0J3MgZnVsbC5cbiAqIEByZXR1cm4ge21vZHVsZTpjc3AuRml4ZWRCdWZmZXJ9IEEgbmV3IGZpeGVkIGJ1ZmZlciBvZiB0aGUgc3BlY2lmaWVkXG4gKiAgICAgY2FwYWNpdHkuXG4gKi9cbmZ1bmN0aW9uIGZpeGVkKHNpemUpIHtcbiAgcmV0dXJuIE9iamVjdC5jcmVhdGUobnVsbCwge1xuICAgIC8qKlxuICAgICAqIFRoZSBxdWV1ZSBiYWNraW5nIHRoaXMgYnVmZmVyLlxuICAgICAqXG4gICAgICogQHR5cGUge21vZHVsZTpjc3AvcXVldWV+UXVldWV9XG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBxdWV1ZToge1xuICAgICAgdmFsdWU6IHEoKVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgbnVtYmVyIG9mIGl0ZW1zIHRoYXQgdGhpcyBxdWV1ZSBjYW4gaG9sZCBiZWZvcmUgaXQncyBjb25zaWRlcmVkIGZ1bGwuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgc2l6ZToge1xuICAgICAgdmFsdWU6IHNpemVcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQSBtYXJrZXIgcHJvcGVydHkgdXNlZCB0byBzaG93IHRoYXQgdGhpcyBpcyBhIGZpeGVkIGJ1ZmZlci5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtTeW1ib2x9XG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBbQlVGRkVSXToge1xuICAgICAgdmFsdWU6IEZJWEVEXG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBBIGJ1ZmZlciBpbXBsZW1lbnRhdGlvbiB0aGF0IGRyb3BzIG5ld2x5IGFkZGVkIGl0ZW1zIHdoZW4gdGhlIGJ1ZmZlciBpcyBmdWxsLlxuICpcbiAqIFRoaXMgZHJvcHBpbmcgYmVoYXZpb3IgaXMgc2lsZW50OiB0aGUgbmV3IGl0ZW0gaXMgc2ltcGx5IG5vdCBhZGRlZCB0byB0aGVcbiAqIHF1ZXVlLiBOb3RlIHRoYXQgdGhpcyBidWZmZXIgaXMgbmV2ZXIgYGZ1bGxgIGJlY2F1c2UgaXQgY2FuIGFsd2F5cyBiZSBhZGRlZFxuICogdG8gd2l0aG91dCBleGNlZWRpbmcgdGhlIHNpemUsIGV2ZW4gaWYgdGhhdCAnYWRkaW5nJyBkb2Vzbid0IHJlc3VsdCBpbiBhIG5ld1xuICogaXRlbSBhY3R1YWxseSBhcHBlYXJpbmcgaW4gdGhlIGJ1ZmZlci5cbiAqXG4gKiBBIGJ1ZmZlciBvZiB0aGlzIHR5cGUgZXhpc3RzIG9ubHkgYXMgYW4gb2JqZWN0IHRoYXQgY2FuIGJlIHBhc3NlZCB0byBhXG4gKiBjaGFubmVsIGNyZWF0aW9uIGZ1bmN0aW9uIChzdWNoIGFzIHtAbGluayBtb2R1bGU6Y3NwLmNoYW58Y2hhbn0pIHRvIG1ha2UgdGhhdFxuICogY2hhbm5lbCBhIGJ1ZmZlcmVkIGNoYW5uZWwuIEl0IGRvZXNuJ3QgaGF2ZSBhbnkgcHJvcGVydGllcyB0aGF0IGFyZSBpbnRlbmRlZFxuICogZm9yIGV4dGVybmFsIHVzZS5cbiAqXG4gKiBAdHlwZWRlZiBEcm9wcGluZ0J1ZmZlclxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgYSBkcm9wcGluZyBidWZmZXIgb2YgdGhlIHNwZWNpZmllZCBjYXBhY2l0eS5cbiAqXG4gKiBBIGRyb3BwaW5nIGJ1ZmZlciBzaWxlbnRseSBkcm9wcyB0aGUgaXRlbSBiZWluZyBhZGRlZCBpZiB0aGUgYnVmZmVyIGlzXG4gKiBhbHJlYWR5IGF0IGNhcGFjaXR5LiBTaW5jZSBhZGRpbmcgYSBuZXcgaXRlbSB3aWxsIGFsd2F5cyAnc3VjY2VlZCcgKGV2ZW4gaWZcbiAqIGl0IHN1Y2NlZWRzIGJ5IGp1c3QgaWdub3JpbmcgdGhlIGFkZCksIGl0IGlzIG5ldmVyIGNvbnNpZGVyZWQgZnVsbCBhbmRcbiAqIHRoZXJlZm9yZSBhIHB1dCB0byBhIGNoYW5uZWwgYnVmZmVyZWQgYnkgYSBkcm9wcGluZyBidWZmZXIgbmV2ZXIgYmxvY2tzLlxuICpcbiAqIFRoaXMgYnVmZmVyIGlzIHBhc3NlZCB0byBge0BsaW5rIG1vZHVsZTpjc3AuY2hhbnxjaGFufWAsIGV0Yy4gdG8gY3JlYXRlIGFcbiAqIGJ1ZmZlcmVkIGNoYW5uZWwuIEl0IGlzIG5vdCBtZWFudCB0byBiZSB1c2VkIGRpcmVjdGx5LlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcGFyYW0ge251bWJlcn0gc2l6ZSBUaGUgbnVtYmVyIG9mIGl0ZW1zIHRoYXQgdGhlIG5ldyBidWZmZXIgY2FuIGhvbGQgYmVmb3JlXG4gKiAgICAgbmV3ZXN0IGl0ZW1zIGFyZSBkcm9wcGVkIG9uIGFkZC5cbiAqIEByZXR1cm4ge21vZHVsZTpjc3AuRHJvcHBpbmdCdWZmZXJ9IEEgbmV3IGRyb3BwaW5nIGJ1ZmZlciBvZiB0aGUgc3BlY2lmaWVkXG4gKiAgICAgY2FwYWNpdHkuXG4gKi9cbmZ1bmN0aW9uIGRyb3BwaW5nKHNpemUpIHtcbiAgcmV0dXJuIE9iamVjdC5jcmVhdGUobnVsbCwge1xuICAgIC8qKlxuICAgICAqIFRoZSBxdWV1ZSBiYWNraW5nIHRoaXMgYnVmZmVyLlxuICAgICAqXG4gICAgICogQHR5cGUge21vZHVsZTpjc3AvcXVldWV+UXVldWV9XG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBxdWV1ZToge1xuICAgICAgdmFsdWU6IHEoKVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgbnVtYmVyIG9mIGl0ZW1zIHRoYXQgdGhpcyBxdWV1ZSBjYW4gaG9sZCBiZWZvcmUgaXQncyBjb25zaWRlcmVkIGZ1bGwuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgc2l6ZToge1xuICAgICAgdmFsdWU6IHNpemVcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQSBtYXJrZXIgcHJvcGVydHkgdXNlZCB0byBzaG93IHRoYXQgdGhpcyBpcyBhIGRyb3BwaW5nIGJ1ZmZlci5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtTeW1ib2x9XG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBbQlVGRkVSXToge1xuICAgICAgdmFsdWU6IERST1BQSU5HXG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBBIGJ1ZmZlciBpbXBsZW1lbnRhdGlvbiB0aGF0IGRyb3BzIHRoZSBvbGRlc3QgaXRlbSB3aGVuIGFuIGl0ZW0gaXMgYWRkZWQgdG8gYVxuICogZnVsbCBidWZmZXIuXG4gKlxuICogVGhpcyBpcyB2ZXJ5IHNpbWlsYXIgdG8ge0BsaW5rIG1vZHVsZTpjc3AuRHJvcHBpbmdCdWZmZXJ8RHJvcHBpbmdCdWZmZXJ9OyB0aGVcbiAqIG9ubHkgZGlmZmVyZW5jZSBpcyBpbiB3aGF0IGhhcHBlbnMgd2hlbiBhbiBpdGVtIGlzIGFkZGVkLiBJbiB0aGlzIGJ1ZmZlciwgdGhlXG4gKiBuZXcgaXRlbSBpcyBpbmRlZWQgYWRkZWQgdG8gdGhlIGJ1ZmZlciwgYnV0IGluIG9yZGVyIHRvIGtlZXAgdGhlIGNvdW50IG9mIHRoZVxuICogYnVmZmVyIGF0IG9yIGJlbG93IGl0cyBzaXplLCB0aGUgb2xkZXN0IGl0ZW0gaW4gdGhlIGJ1ZmZlciBpcyBzaWxlbnRseVxuICogZHJvcHBlZC5cbiAqXG4gKiBBIGJ1ZmZlciBvZiB0aGlzIHR5cGUgZXhpc3RzIG9ubHkgYXMgYW4gb2JqZWN0IHRoYXQgY2FuIGJlIHBhc3NlZCB0byBhXG4gKiBjaGFubmVsIGNyZWF0aW9uIGZ1bmN0aW9uIChzdWNoIGFzIHtAbGluayBtb2R1bGU6Y3NwLmNoYW58Y2hhbn0pIHRvIG1ha2UgdGhhdFxuICogY2hhbm5lbCBhIGJ1ZmZlcmVkIGNoYW5uZWwuIEl0IGRvZXNuJ3QgaGF2ZSBhbnkgcHJvcGVydGllcyB0aGF0IGFyZSBpbnRlbmRlZFxuICogZm9yIGV4dGVybmFsIHVzZS5cbiAqXG4gKiBAdHlwZWRlZiBTbGlkaW5nQnVmZmVyXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICovXG5cbi8qKlxuICogQ3JlYXRlcyBhIHNsaWRpbmcgYnVmZmVyIG9mIHRoZSBzcGVjaWZpZWQgY2FwYWNpdHkuXG4gKlxuICogQSBzbGlkaW5nIGJ1ZmZlciBkcm9wcyB0aGUgZmlyc3QtYWRkZWQgKG9sZGVzdCkgaXRlbSBhbHJlYWR5IGluIHRoZSBidWZmZXIgaWZcbiAqIGEgbmV3IGl0ZW0gaXMgYWRkZWQgd2hlbiB0aGUgYnVmZmVyIGlzIGFscmVhZHkgYXQgY2FwYWNpdHkuIFNpbmNlIGl0J3MgYWx3YXlzXG4gKiBjYXBhYmxlIG9mIGhhdmluZyBpdGVtcyBhZGRlZCB0byBpdCwgaXQncyBuZXZlciBjb25zaWRlcmVkIGZ1bGwsIGFuZFxuICogdGhlcmVmb3JlIGEgcHV0IHRvIGEgY2hhbm5lbCBidWZmZXJlZCBieSBhIHNsaWRpbmcgYnVmZmVyIG5ldmVyIGJsb2Nrcy5cbiAqXG4gKiBUaGlzIGJ1ZmZlciBpcyBwYXNzZWQgdG8gYHtAbGluayBtb2R1bGU6Y3NwLmNoYW58Y2hhbn1gLCBldGMuIHRvIGNyZWF0ZSBhXG4gKiBidWZmZXJlZCBjaGFubmVsLiBJdCBpcyBub3QgbWVhbnQgdG8gYmUgdXNlZCBkaXJlY3RseS5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICogQHBhcmFtIHtudW1iZXJ9IHNpemUgVGhlIG51bWJlciBvZiBpdGVtcyB0aGF0IHRoZSBuZXcgYnVmZmVyIGNhbiBob2xkIGJlZm9yZVxuICogICAgIG9sZGVzdCBpdGVtcyBhcmUgZHJvcHBlZCBvbiBhZGQuXG4gKiBAcmV0dXJuIHttb2R1bGU6Y3NwLlNsaWRpbmdCdWZmZXJ9IEEgbmV3IHNsaWRpbmcgYnVmZmVyIG9mIHRoZSBzcGVjaWZpZWRcbiAqICAgICBjYXBhY2l0eS5cbiAqL1xuZnVuY3Rpb24gc2xpZGluZyhzaXplKSB7XG4gIHJldHVybiBPYmplY3QuY3JlYXRlKG51bGwsIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcXVldWUgYmFja2luZyB0aGlzIGJ1ZmZlci5cbiAgICAgKlxuICAgICAqIEB0eXBlIHttb2R1bGU6Y3NwL3F1ZXVlflF1ZXVlfVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgcXVldWU6IHtcbiAgICAgIHZhbHVlOiBxKClcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIG51bWJlciBvZiBpdGVtcyB0aGF0IHRoaXMgcXVldWUgY2FuIGhvbGQgYmVmb3JlIGl0J3MgY29uc2lkZXJlZCBmdWxsLlxuICAgICAqXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHNpemU6IHtcbiAgICAgIHZhbHVlOiBzaXplXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEEgbWFya2VyIHByb3BlcnR5IHVzZWQgdG8gc2hvdyB0aGF0IHRoaXMgaXMgYSBzbGlkaW5nIGJ1ZmZlci5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtTeW1ib2x9XG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBbQlVGRkVSXToge1xuICAgICAgdmFsdWU6IFNMSURJTkdcbiAgICB9XG4gIH0pO1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIHF1ZXVlIHRoYXQgYmFja3MgYSBidWZmZXIuXG4gKlxuICogQHBhcmFtIHttb2R1bGU6Y3NwLkJ1ZmZlcn0gYnVmZmVyIFRoZSBidWZmZXIgd2hvc2UgcXVldWUgaXMgcmV0dXJuZWQgYnkgdGhpc1xuICogICAgIGZ1bmN0aW9uLlxuICogQHJldHVybiB7bW9kdWxlOmNzcC9xdWV1ZX5RdWV1ZX0gVGhlIHF1ZXVlIHRoYXQgYmFja3MgdGhlIHN1cHBsaWVkIGJ1ZmZlci5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHF1ZXVlKGJ1ZmZlcikge1xuICByZXR1cm4gYnVmZmVyLnF1ZXVlO1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIG51bWJlciBvZiBpdGVtcyBhIGJ1ZmZlciBjYW4gaG9sZCBiZWZvcmUgaXQncyBmdWxsLlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5CdWZmZXJ9IGJ1ZmZlciBUaGUgYnVmZmVyIHdob3NlIHNpemUgaXMgcmV0dXJuZWQgYnkgdGhpc1xuICogICAgIGZ1bmN0aW9uLlxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgc2l6ZSBvZiB0aGUgc3VwcGxpZWQgYnVmZmVyLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gc2l6ZShidWZmZXIpIHtcbiAgcmV0dXJuIGJ1ZmZlci5zaXplO1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIG51bWJlciBvZiBpdGVtcyBhIGJ1ZmZlciBpcyBjdXJyZW50bHkgaG9sZGluZy5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuQnVmZmVyfSBidWZmZXIgVGhlIGJ1ZmZlciB3aG9zZSBjdXJyZW50IGNvdW50IGlzIHJldHVybmVkXG4gKiAgICAgYnkgdGhpcyBmdW5jdGlvbi5cbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIG51bWJlciBvZiBpdGVtcyB0aGF0IHRoZSBzdXBwbGllZCBidWZmZXIgaXMgaG9sZGluZy5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNvdW50KGJ1ZmZlcikge1xuICByZXR1cm4gcUNvdW50KGJ1ZmZlci5xdWV1ZSk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGEgYnVmZmVyIGlzIGF0IGNhcGFjaXR5LlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5CdWZmZXJ9IGJ1ZmZlciBUaGUgYnVmZmVyIHdobydzIGJlaW5nIGNoZWNrZWQgdG8gc2VlIGlmXG4gKiAgICAgaXQncyBhdCBjYXBhY2l0eS5cbiAqIEByZXR1cm4ge251bWJlcn0gRWl0aGVyIGB0cnVlYCBpZiB0aGUgc3VwcGxpZWQgYnVmZmVyIGlzIGZ1bGwgb3IgYGZhbHNlYCBpZlxuICogICAgIGl0IGlzbid0LlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaXNGdWxsKGJ1ZmZlcikge1xuICByZXR1cm4gYnVmZmVyW0JVRkZFUl0gPT09IEZJWEVEID8gcUNvdW50KGJ1ZmZlci5xdWV1ZSkgPj0gYnVmZmVyLnNpemUgOiBmYWxzZTtcbn1cblxuLyoqXG4gKiBBZGRzIG9uZSBvciBtb3JlIGl0ZW1zIHRvIGEgYnVmZmVyLlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5CdWZmZXJ9IGJ1ZmZlciBUaGUgYnVmZmVyIHdoZXJlIHRoZSBzdXBwbGllZCBpdGVtcyB3aWxsIGJlXG4gKiAgICAgYWRkZWQuXG4gKiBAcGFyYW0gey4uLip9IGl0ZW1zIFRoZSB2YWx1ZXMgYmVpbmcgYWRkZWQgdG8gdGhlIHN1cHBsaWVkIGJ1ZmZlci5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGFkZChidWZmZXIsIC4uLml0ZW1zKSB7XG4gIHN3aXRjaCAoYnVmZmVyW0JVRkZFUl0pIHtcbiAgICBjYXNlIEZJWEVEOlxuICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGl0ZW1zKSB7XG4gICAgICAgIGVucXVldWUoYnVmZmVyLnF1ZXVlLCBpdGVtKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBEUk9QUElORzpcbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBpdGVtcykge1xuICAgICAgICBpZiAoY291bnQoYnVmZmVyKSA8IHNpemUoYnVmZmVyKSkge1xuICAgICAgICAgIGVucXVldWUoYnVmZmVyLnF1ZXVlLCBpdGVtKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIFNMSURJTkc6XG4gICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgaXRlbXMpIHtcbiAgICAgICAgaWYgKGNvdW50KGJ1ZmZlcikgPj0gc2l6ZShidWZmZXIpKSB7XG4gICAgICAgICAgZGVxdWV1ZShidWZmZXIucXVldWUpO1xuICAgICAgICB9XG4gICAgICAgIGVucXVldWUoYnVmZmVyLnF1ZXVlLCBpdGVtKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybjtcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZXMgdGhlIG5leHQgaXRlbSBmcm9tIGEgcXVldWUgYW5kIHJldHVybnMgaXQuXG4gKlxuICogQHBhcmFtIHttb2R1bGU6Y3NwLkJ1ZmZlcn0gYnVmZmVyIFRoZSBidWZmZXIgZnJvbSB3aGljaCBhbiBpdGVtIGlzIGJlaW5nXG4gKiAgICAgcmVtb3ZlZC5cbiAqIEByZXR1cm4geyp9IFRoZSBpdGVtIHRoYXQgd2FzIHJlbW92ZWQgZnJvbSB0aGUgc3VwcGxpZWQgYnVmZmVyLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gcmVtb3ZlKGJ1ZmZlcikge1xuICByZXR1cm4gZGVxdWV1ZShidWZmZXIucXVldWUpO1xufVxuXG5leHBvcnQge1xuICBpc0J1ZmZlcixcbiAgZml4ZWQsXG4gIGRyb3BwaW5nLFxuICBzbGlkaW5nLFxuICBxdWV1ZSxcbiAgc2l6ZSxcbiAgY291bnQsXG4gIGlzRnVsbCxcbiAgYWRkLFxuICByZW1vdmVcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuaW1wb3J0IHsgcHJvdG9jb2xzIGFzIHAgfSBmcm9tIFwibW9kdWxlcy9wcm90b2NvbFwiO1xuaW1wb3J0IHtcbiAgcXVldWUsXG4gIGRlcXVldWUsXG4gIEVNUFRZLFxuICBmaWx0ZXIsXG4gIGNvdW50IGFzIHFDb3VudCxcbiAgZW5xdWV1ZVxufSBmcm9tIFwibW9kdWxlcy9xdWV1ZVwiO1xuaW1wb3J0IHsgaXNGdWxsLCBjb3VudCwgcmVtb3ZlIH0gZnJvbSBcIm1vZHVsZXMvYnVmZmVyXCI7XG5pbXBvcnQgeyBkaXNwYXRjaCB9IGZyb20gXCJtb2R1bGVzL2Rpc3BhdGNoZXJcIjtcblxuLyoqXG4gKiBUaGUgbWF4aW11bSBudW1iZXIgb2YgZGlydHkgb3BlcmF0aW9ucyB0aGF0IGNhbiBiZSBxdWV1ZWQgb24gYSBjaGFubmVsIGJlZm9yZVxuICogYSBjbGVhbnVwIGlzIHRyaWdnZXJlZC5cbiAqXG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgTUFYX0RJUlRZID0gNjQ7XG5cbi8qKlxuICogVGhlIG1heGltdW0gbnVtYmVyIG9mIG9wZXJ0aW9ucyB0aGF0IGNhbiBiZSBxdWV1ZWQgb24gYSBjaGFubmVsIGJlZm9yZSBuZXdcbiAqIG9wZXJhdGlvbnMgYXJlIHJlamVjdGVkLlxuICpcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAcHJpdmF0ZVxuICovXG5jb25zdCBNQVhfUVVFVUVEID0gMTAyNDtcblxuLyoqXG4gKiAqaGUgdmFsdWUgcmV0dXJuZWQgZnJvbSBhIHJlY2VpdmUgb24gYSBjaGFubmVsIHdoZW4gdGhhdCBjaGFubmVsIGlzIGNsb3NlZFxuICogYW5kIGhhcyBubyBtb3JlIHZhbHVlcyBhdmFpbGFibGUuXG4gKlxuICogVGhpcyBpcyBhIHNwZWNpYWwgdmFsdWUgdGhhdCBpcyByZXR1cm5lZCB1bmRlciBhIGNlcnRhaW4gY2lyY3Vtc3RhbmNlLCBuYW1lbHlcbiAqIHdoZW4gYSByZWNlaXZlIGlzIHBlcmZvcm1lZCBvbiBhIGNsb3NlZCBjaGFubmVsLiBCZWNhdXNlIG9mIHRoYXQsIGl0IGNhbm5vdFxuICogYmUgcmV0dXJuZWQgZnJvbSBhIHJlY2VpdmUgb24gYW4gb3BlbiBjaGFubmVsLiBGb3IgdGhhdCByZWFzb24sIGBDTE9TRURgIGlzXG4gKiB0aGUgb25seSB2YWx1ZSB0aGF0IGNhbm5vdCBiZSBzZW50IG9udG8gYSBjaGFubmVsICZtZGFzaDsgaXQgd291bGQgYmVcbiAqIGltcG9zc2libGUgdG8gZGlzdGluZ3Vpc2ggYmV0d2VlbiBhIGxlZ2l0aW1hdGUgdmFsdWUgb2YgYENMT1NFRGAgYW5kIGFuXG4gKiBhY3R1YWwgY2xvc2VkIGNoYW5uZWwuXG4gKlxuICogQHR5cGUge1N5bWJvbH1cbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKi9cbmNvbnN0IENMT1NFRCA9IFN5bWJvbChcIkNMT1NFRFwiKTtcblxuLyoqXG4gKiBBIHVuaXF1ZSB2YWx1ZSB1c2VkIHRvIGluZGljYXRlIHRoYXQgYW4gb2JqZWN0IGlzIGEgYm94LlxuICpcbiAqIEB0eXBlIHtTeW1ib2x9XG4gKiBAcHJpdmF0ZVxuICovXG5jb25zdCBCT1ggPSBTeW1ib2woXCJCT1hcIik7XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGFuIG9iamVjdCBpcyBhIGJveC5cbiAqXG4gKiBAcGFyYW0geyp9IG9iaiBBIHZhbHVlIHRvIGNoZWNrIGZvciBib3hpbmVzcy5cbiAqIEByZXR1cm4gRWl0aGVyIGB0cnVlYCBpZiB0aGUgdmFsdWUgaXMgYSBib3ggb3IgYGZhbHNlYCBpZiBpdCBpc24ndC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGlzQm94KG9iaikge1xuICByZXR1cm4gISFvYmo/LltCT1hdO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhbiBvYmplY3QgaXMgcmVkdWNlZC4gVGhpcyBpcyBkb25lIHVzaW5nIHRoZSB0cmFuc2R1Y2VyXG4gKiBwcm90b2NvbDsgYW4gb2JqZWN0IHdpdGggdGhlIHByb3RvY29sLXNwZWNpZmllZCBgcmVkdWNlZGAgcHJvcGVydHkgaXMgYXNzdW1lZFxuICogdG8gYmUgcmVkdWNlZC4gSWYgYSByZXN1bHQgb2YgYSB0cmFuc2Zvcm1hdGlvbiBpcyByZWR1Y2VkLCBpdCBtZWFucyB0aGF0IHRoZVxuICogdHJhbnNmb3JtYXRpb24gaXMgY29tcGxldGUgYW5kIHRoZSBjaGFubmVsIHNob3VsZCBiZSBjbG9zZWQuXG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgYmVpbmcgY2hlY2tlZCBmb3IgcmVkdWN0aW9uLlxuICogQHJldHVybiB7Ym9vbGVhbn0gRWl0aGVyIGB0cnVlYCBpZiB0aGUgdmFsdWUgaGFzIGJlZW4gcmVkdWNlZCwgb3IgYGZhbHNlYCBpZlxuICogICAgIGl0IGhhcyBub3QgYmVlbi5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGlzUmVkdWNlZCh2YWx1ZSkge1xuICByZXR1cm4gISF2YWx1ZT8uW3AucmVkdWNlZF07XG59XG5cbi8qKlxuICogQSB3cmFwcGVyIGFyb3VuZCBhIHZhbHVlLiBUaGlzIGlzIHByaW1hcmlseSB1c2VkIGFzIGEgbWFya2VyOyBhIHB1dCBvciB0YWtlXG4gKiByZXR1cm5pbmcgYSBCb3ggaW5kaWNhdGVzIHRoYXQgdGhlIHB1dCBvciB0YWtlIGhhcyByZXR1cm5lZCBhbiBpbW1lZGlhdGVcbiAqIHZhbHVlLCB3aGlsZSByZXR1cm5pbmcgYG51bGxgIGluZGljYXRlcyB0aGF0IHRoZSBvcGVyYXRpb24gaGFzIGJlZW4gcXVldWVkLlxuICpcbiAqIEB0eXBlZGVmIEJveFxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3AvY2hhbm5lbFxuICogQHByb3BlcnR5IHsqfSB2YWx1ZSBUaGUgdmFsdWUgYmVpbmcgd3JhcHBlZCBieSB0aGUgYm94LlxuICogQHByaXZhdGVcbiAqL1xuXG4vKipcbiAqIEEgd3JhcHBlciBvYmplY3QgZm9yIGEgdmFsdWUuIFRoaXMgaXMgdXNlZCBhbG1vc3QgZW50aXJlbHkgYXMgYSBtYXJrZXJcbiAqIGludGVyZmFjZSwgdGhvdWdoIHRoZSBmYWN0IHRoYXQgaXQgYmVjb21lcyBhIHBhcmFtZXRlciB0aGF0J3MgcGFzc2VkIGJ5XG4gKiByZWZlcmVuY2UgcmF0aGVyIHRoYW4gdmFsdWUgaXMgYWxzbyBpbXBvcnRhbnQgaW4gYSBjb3VwbGUgcGxhY2VzLiBJZiBhXG4gKiBjaGFubmVsIG9wZXJhdGlvbiAocHV0IG9yIHRha2UpIHJldHVybnMgYSBCb3gsIGl0IG1lYW5zIHRoYXQgYW4gYWN0dWFsIHZhbHVlXG4gKiB3YXMgcmV0dXJuZWQuIEEgbm9uLUJveCAod2hpY2ggYWx3YXlzIGhhcHBlbnMgdG8gYmUgYG51bGxgKSBtZWFucyB0aGF0IHRoZVxuICogb3BlcmF0aW9uIG11c3QgYmxvY2suXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3AvY2hhbm5lbFxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gYm94LlxuICogQHJldHVybiB7bW9kdWxlOmNzcC9jaGFubmVsLkJveH0gVGhlIGJveGVkIHZhbHVlLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gYm94KHZhbHVlKSB7XG4gIHJldHVybiBPYmplY3QuY3JlYXRlKG51bGwsIHtcbiAgICB2YWx1ZToge1xuICAgICAgdmFsdWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0sXG4gICAgW0JPWF06IHtcbiAgICAgIHZhbHVlOiB0cnVlXG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBBIHdyYXBwZXIgYXJvdW5kIGEgdmFsdWUuIFRoaXMgaXMgbXVjaCBsaWtlXG4gKiB7QGxpbmsgbW9kdWxlOmNzcC9jaGFubmVsLkJveHxCb3h9IGV4Y2VwdCB0aGF0IGl0IGFsc28gY2FycmllcyBhIGhhbmRsZXIgdG9cbiAqIGJlIHVzZWQgd2hlbiBhIHNlbnQgdmFsdWUgaXMgcmVjZWl2ZWQuIEl0IGlzIHNwZWNpZmljYWxseSBmb3IgcXVldWVpbmcgc2VuZHMuXG4gKlxuICogQHR5cGVkZWYgU2VuZEJveFxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3AvY2hhbm5lbFxuICogQHByb3BlcnR5IHsqfSB2YWx1ZSBUaGUgdmFsdWUgYmVpbmcgd3JhcHBlZCBieSB0aGlzIGJveC5cbiAqIEBwcm9wZXJ0eSB7bW9kdWxlOmNzcC9jaGFubmVsLkhhbmRsZXJ9IGhhbmRsZXIgVGhlIGhhbmRsZXIgdXNlZCB0byBwcm9jZXNzIGFcbiAqICAgICBzZW5kIHJlcXVlc3QgZm9yIHRoZSB2YWx1ZS5cbiAqIEBwcml2YXRlXG4gKi9cblxuLyoqXG4gKiBBIGJveCB1c2VkIHRvIHdyYXAgYSB2YWx1ZSBiZWluZyBzZW50IG9udG8gYSBjaGFubmVsLiBUaGlzIGlzIGRpZmZlcmVudCBmcm9tXG4gKiBhIHJlZ3VsYXIgYm94IGluIHRoYXQgdGhlIHNlbmQgaGFuZGxlciBpcyBhbHNvIGluY2x1ZGVkLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwL2NoYW5uZWxcbiAqIEBwYXJhbSAge09iamVjdH0gaGFuZGxlciBUaGUgaGFuZGxlciB1c2VkIHRvIHByb2Nlc3MgYSBzZW5kIHJlcXVlc3QgZm9yIHRoZVxuICogICAgIHZhbHVlLlxuICogQHBhcmFtICB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGJveC5cbiAqIEByZXR1cm4ge21vZHVsZTpjc3AvY2hhbm5lbC5TZW5kQm94fSBUaGUgYm94ZWQgdmFsdWUuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBzZW5kQm94KHZhbHVlLCBoYW5kbGVyKSB7XG4gIHJldHVybiBPYmplY3QuY3JlYXRlKG51bGwsIHtcbiAgICB2YWx1ZToge1xuICAgICAgdmFsdWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0sXG4gICAgaGFuZGxlcjoge1xuICAgICAgdmFsdWU6IGhhbmRsZXJcbiAgICB9LFxuICAgIFtCT1hdOiB7XG4gICAgICB2YWx1ZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxuICogQSBjaGFubmVsLCB1c2VkIGJ5IHByb2Nlc3NlcyB0byBjb21tdW5pY2F0ZSB3aXRoIG9uZSBhbm90aGVyLlxuICpcbiAqIEZvciBlYWNoIG9wZXJhdGlvbiwgdGhlIGNoYW5uZWwgZmlyc3QgdGVzdHMgdG8gc2VlIGlmIHRoZXJlJ3MgYSBjb3JyZXNwb25kaW5nXG4gKiBvcGVyYXRpb24gYWxyZWFkeSBxdWV1ZWQgKGkuZS4sIGlmIHdlJ3JlIGRvaW5nIGEgYHNlbmRgIHRoYXQgdGhlcmUncyBhIHF1ZXVlZFxuICogYHJlY3ZgIGFuZCB2aWNlIHZlcnNhKS4gSWYgdGhlcmUgaXMsIHRoYXQgY29ycmVzcG9uZGluZyBvcGVyYXRpb24gaXNcbiAqIHVuYmxvY2tlZCBhbmQgYm90aCBvcGVyYXRpb25zIGNvbXBsZXRlLiBJZiBub3QsIHRoZSBvcGVyYXRpb24gaXMgcXVldWVkIHRvXG4gKiB3YWl0IGZvciBhIGNvcnJlc3BvbmRpbmcgb3BlcmF0aW9uLiBUaGUgcHJvY2VzcyBvciB0aGF0IGNyZWF0ZWQgdGhlIG9wZXJhdGlvblxuICogdGhlbiBibG9ja3MuXG4gKlxuICogVGhlIGNoYW5uZWwgY2FuIGJlIGJhY2tlZCBieSBhIGJ1ZmZlciwgdGhvdWdoIGl0IGlzIG5vdCBieSBkZWZhdWx0LiBJZiBhXG4gKiBidWZmZXIgaXMgaW4gcGxhY2UsIGFuZCB0aGF0IGJ1ZmZlciBpcyBub3QgZnVsbCwgdGhlbiB0aGUgcHJvY2VzcyB0aGF0XG4gKiBjcmVhdGVkIGFuIG9wZXJhdGlvbiB0aGF0IGhhcyB0byBiZSBxdWV1ZWQgaXMgKm5vdCogYmxvY2tlZC5cbiAqXG4gKiBUaGlzIGNoYW5uZWwgb2JqZWN0IHN1cHBvcnRzIHRyYW5zZm9ybWF0aW9ucywgYXNzdW1pbmcgdGhhdCB0aGV5IGZvbGxvdyB0aGVcbiAqIHByb3RvY29sIGNyZWF0ZWQgYnkgYSBmZXcgdHJhbnNkdWNlciBsaWJyYXJ5IGF1dGhvcnMgdG8gYWxsb3cgdGhlbSB0b1xuICogaW50ZXJvcGVyYXRlLiBUaGUgc3VwcG9ydCBtdXN0IGJlIGV4cGxpY2l0bHkgY3JlYXRlZCBiZWNhdXNlIHRoZSBub3JtYWxcbiAqIG1ldGhvZCBvZiBtYWtpbmcgYW4gb2JqZWN0IHN1cHBvcnQgdHJhbnNmb3JtYXRpb25zIHdvbid0IHdvcmsgaGVyZS4gVGhpc1xuICogbWV0aG9kIGlzIHRvIGNyZWF0ZSBhIG5ldyBvYmplY3QgYW5kIGFkZCB0aGUgdHJhbnNmb3JtZWQgdmFsdWVzIHRvIGl0IC0gYnV0XG4gKiBmb3IgYSBjaGFubmVsLCB3ZSBuZWVkIHRvIHJlcGxhY2UgdGhlIHZhbHVlcyBvbiB0aGUgY2hhbm5lbCB3aXRoIHRoZWlyXG4gKiB0cmFuc2Zvcm1lZCB2YWx1ZXMsIGluIHRoZSBzYW1lIG9yZGVyIGV2ZW4gaW4gYSBtdWx0aS1wcm9jZXNzIGVudmlyb25tZW50LlxuICogVGh1cyB0cmFuc2Zvcm1hdGlvbnMgaGFwcGVuIGluIHBsYWNlLlxuICpcbiAqIFRyYW5zZm9ybWF0aW9ucyBhcmUgYXBwbGllZCBiZWZvcmUgdGhlIHZhbHVlIGlzIHF1ZXVlZCwgc28gZXZlbiBpZiB0aGVyZSBpcyBhXG4gKiBjb3JyZXNwb25kaW5nIG9wZXJhdGlvbiByZWFkeSB0byBnbywgdGhlIHRyYW5zZm9ybWF0aW9uIHN0aWxsIGhhcHBlbnMuIEFsc28sXG4gKiB0cmFuc2Zvcm1hdGlvbnMgcmVxdWlyZSB0aGF0IHRoZSBjaGFubmVsIGJlIGJ1ZmZlcmVkICh0aGlzIGJ1ZmZlciBpcyB3aGF0IGlzXG4gKiBzZW50IHRvIHRoZSB0cmFuc2Zvcm1lcidzIHJlZHVjdGlvbiBzdGVwIGZ1bmN0aW9uKTsgdHJ5aW5nIHRvIGNyZWF0ZSBhXG4gKiBjaGFubmVsIHdpdGggYSB0cmFuc2Zvcm1lciBidXQgd2l0aG91dCBhIGJ1ZmZlciB3aWxsIHJlc3VsdCBpbiBhbiBlcnJvciBiZWluZ1xuICogdGhyb3duLlxuICpcbiAqIFRoaXMgaXMgdGhlIG9iamVjdCB0aGF0IGlzIHJldHVybmVkIGZyb20gYSBjYWxsIHRvXG4gKiBge0BsaW5rIG1vZHVsZTpjc3AuY2hhbnxjaGFufWAuIEhvd2V2ZXIsIHRoaXMgb2JqZWN0IGlzIGludGVuZGVkIHRvIGJlIHVzZWRcbiAqIGFzIGEgdmFsdWUgdG8gcGFzcyB0byBjaGFubmVsIG9wZXJhdGlvbiBmdW5jdGlvbnM7IGl0IGRvZXNuJ3QgaGF2ZSBhbnlcbiAqIHByb3BlcnRpZXMgb2YgaW50ZXJlc3QgdG8gYW4gZW5kIHVzZXIuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqIEB0eXBlZGVmIENoYW5uZWxcbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjaGFubmVsLiBUaGlzIGlzIGEgbG93LWxldmVsIGZ1bmN0aW9uO1xuICogYHtAbGluayBtb2R1bGU6Y3NwLmNoYW58Y2hhbn1gIHBlcmZvcm1zIHNvbWUgbmVjZXNzYXJ5IG1hbmlwdWxhdGlvbnMgb25cbiAqIGFyZ3VtZW50cyBiZWZvcmUgdXNpbmcgdGhpcyBmdW5jdGlvbiB0byBwZXJmb3JtIHRoZSBhY3R1YWwgY3JlYXRpb24uXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3AvY2hhbm5lbFxuICogQHBhcmFtIHtudWxsIHwgbW9kdWxlOmNzcC5CdWZmZXJ9IGJ1ZmZlciBBbiBvcHRpb25hbCBidWZmZXIgdGhhdCwgaWYgcHJlc2VudCxcbiAqICAgICBpcyB1c2VkIHRvIGNyZWF0ZSBhIGJ1ZmZlcmVkIGNoYW5uZWwuIElmIHRoaXMgaXMgYG51bGxgLCBhbiB1bmJ1ZmZlcmVkXG4gKiAgICAgY2hhbm5lbCBpcyBjcmVhdGVkLlxuICogQHBhcmFtIHttb2R1bGU6Y29yZS5UcmFuc2R1Y2VyRnVuY3Rpb259IHhmb3JtIFRoZSB0cmFuc2R1Y2VyIHVzZWQgdG9cbiAqICAgICB0cmFuc2Zvcm0gdmFsdWVzIHNlbnQgdG8gdGhlIGNoYW5uZWwuIElmIG5vIHRyYW5zZm9ybWF0aW9ucyBhcmVcbiAqICAgICBuZWNlc3NhcnksIGEgcGFzc3Rocm91Z2ggdHJhbnNkdWNlciBzaG91bGQgYmUgcHJvdmlkZWQuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGlzVGltZWQgSW5kaWNhdGVzIHdoZXRoZXIgdGhlIGNoYW5uZWwgaXMgYSB0aW1lZCBjaGFubmVsLlxuICogICAgIFRoZSB0aW1pbmluZyBtZWNoYW5pc20gaXMgaGFuZGxlZCBvdXRzaWRlIHRoZSBjaGFubmVsLCBidXQgdGhpcyBwcm9wZXJ0eVxuICogICAgIGlzIHByb3ZpZGVkIHRvIGJlIGFibGUgdG8gcXVlcnkgd2hldGhlciB0aGF0J3MgdGhlIGNhc2UuXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4RGlydHk9NjQgVGhlIG1heGltdW0gbnVtYmVyIG9mIGRpcnR5IG9wZXJhdGlvbnMgdG8gYWxsb3dcbiAqICAgICBiZWZvcmUgdGhleSdyZSBwdXJnZWQuXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4UXVldWVkPTEwMjQgVGhlIG1heGltdW0gbnVtYmVyIG9mIG9wZXJhdGlvbnMgdGhhdCBjYW4gYmVcbiAqICAgICBxdWV1ZWQgYmVmb3JlIG5ldyBvbmVzIGFyZSByZWplY3RlZC5cbiAqIEByZXR1cm4ge21vZHVsZTpjc3AuQ2hhbm5lbH0gQSBuZXcgY2hhbm5lbC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNoYW5uZWwoXG4gIGJ1ZmZlcixcbiAgeGZvcm0sXG4gIGlzVGltZWQgPSBmYWxzZSxcbiAgbWF4RGlydHkgPSBNQVhfRElSVFksXG4gIG1heFF1ZXVlZCA9IE1BWF9RVUVVRURcbikge1xuICByZXR1cm4gT2JqZWN0LmNyZWF0ZShudWxsLCB7XG4gICAgYnVmZmVyOiB7XG4gICAgICB2YWx1ZTogYnVmZmVyXG4gICAgfSxcbiAgICB4Zm9ybToge1xuICAgICAgdmFsdWU6IHhmb3JtXG4gICAgfSxcbiAgICBtYXhEaXJ0eToge1xuICAgICAgdmFsdWU6IG1heERpcnR5XG4gICAgfSxcbiAgICBtYXhRdWV1ZWQ6IHtcbiAgICAgIHZhbHVlOiBtYXhRdWV1ZWRcbiAgICB9LFxuICAgIHJlY3ZzOiB7XG4gICAgICB2YWx1ZTogcXVldWUoKVxuICAgIH0sXG4gICAgc2VuZHM6IHtcbiAgICAgIHZhbHVlOiBxdWV1ZSgpXG4gICAgfSxcbiAgICBkaXJ0eVJlY3ZzOiB7XG4gICAgICB2YWx1ZTogMCxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSxcbiAgICBkaXJ0eVNlbmRzOiB7XG4gICAgICB2YWx1ZTogMCxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSxcbiAgICBjbG9zZWQ6IHtcbiAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSxcbiAgICBpc0J1ZmZlcmVkOiB7XG4gICAgICB2YWx1ZTogISFidWZmZXJcbiAgICB9LFxuICAgIGlzVGltZWQ6IHtcbiAgICAgIHZhbHVlOiBpc1RpbWVkXG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBTZW5kcyBhIHZhbHVlIHRvIGEgY2hhbm5lbC4gVGhlIHNwZWNpZmllZCBoYW5kbGVyIGlzIHVzZWQgdG8gY29udHJvbCB3aGV0aGVyXG4gKiB0aGUgc2VuZCBpcyBhY3RpdmUgYW5kIHdoYXQgdG8gZG8gYWZ0ZXIgdGhlIHNlbmQgY29tcGxldGVzLiBBIHNlbmQgY2FuIGJlY29tZVxuICogaW5hY3RpdmUgaWYgaXQgd2FzIHBhcnQgb2YgYW4gYHNlbGVjdGAgY2FsbCBhbmQgc29tZSBvdGhlciBvcGVyYXRpb25cbiAqIHNwZWNpZmllZCBpbiB0aGF0IGNhbGwgaGFzIGFscmVhZHkgY29tcGxldGVkLlxuICpcbiAqIFRoaXMgdmFsdWUgaXMgZ2l2ZW4gdG8gYSByZWNlaXZlIGhhbmRsZXIgaW1tZWRpYXRlbHkgaWYgdGhlcmUncyBvbmUgd2FpdGluZy5cbiAqIE90aGVyd2lzZSB0aGUgdmFsdWUgYW5kIGhhbmRsZXIgYXJlIHF1ZXVlZCB0b2dldGhlciB0byB3YWl0IGZvciBhIHJlY2VpdmUuXG4gKlxuICogVGhpcyBpcyBhIGxvdy1sZXZlbCBvcGVyYXRpb24gdGhhdCdzIHByb3ZpZGVkIGFzIGEgcGFydCBvZiB0aGUgY2hhbm5lbFxuICogaW1wbGVtZW50YXRpb24gc28gdGhhdCBvdGhlciBvcGVyYXRpb25zIGZ1bmN0aW9ucyBjYW4gcHJvcGVybHkgYXBwbHlcbiAqIGhhbmRsZXJzLiBJdCBpcyBub3QgbWVhbnQgZm9yIGdlbmVyYWwgdXNlLiBVc2UgdGhvc2Ugb3RoZXIgb3BlcmF0aW9uc1xuICogZnVuY3Rpb25zIGluc3RlYWQuXG4gKlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwL2NoYW5uZWxcbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5DaGFubmVsfSBjaGFubmVsIFRoZSBjaGFubmVsIHRoYXQgdGhlIHZhbHVlIGlzIGJlaW5nIHNlbnRcbiAqICAgICB0by5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGJlIHB1dCBvbnRvIHRoZSBjaGFubmVsLlxuICogQHBhcmFtIHtib29sZWFufSBoYW5kbGVyLmFjdGl2ZSBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHNlbmQgaXMgc3RpbGwgYWN0aXZlXG4gKiAgICAgYW5kIHNob3VsZCBzdGlsbCBiZSBzZXJ2aWNlZC5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGhhbmRsZXIuY29tbWl0IERlYWN0aXZhdGVzIHRoZSBzZW5kIChzbyBpdCBjYW4ndCBiZVxuICogICAgIHNlcnZpY2VkIGEgc2Vjb25kIHRpbWUpIGFuZCByZXR1cm5zIHRoZSBjYWxsYmFjayB0byBiZSBmaXJlZCB3aGVuIHRoZVxuICogICAgIHNlbmQgY29tcGxldGVzLlxuICogQHJldHVybiB7bW9kdWxlOmNzcC9jaGFubmVsLkJveHxudWxsfSBPbmUgb2YgdGhyZWUgdmFsdWVzLiBBIGJveGVkIGB0cnVlYCBpc1xuICogICAgIHJldHVybmVkIGlmIHRoZSBzZW5kIHdhcyBpbW1lZGlhdGVseSBjb25zdW1lZCBieSBhIHBlbmRpbmcgcmVjZWl2ZS4gQVxuICogICAgIGJveGVkIGBmYWxzZWAgaXMgcmV0dXJuZWQgaWYgdGhlIHNlbmQgd2FzIHBlcmZvcm1lZCBvbiBhIGNoYW5uZWwgdGhhdCB3YXNcbiAqICAgICBhbHJlYWR5IGNsb3NlZCBieSB0aGUgdGltZSB0aGUgc2VuZCB0b29rIHBsYWNlLiBgbnVsbGAgaXMgcmV0dXJuZWQgaWYgdGhlXG4gKiAgICAgc2VuZCB3YXMgcXVldWVkIHBlbmRpbmcgYSBjb3JyZXNwb25kaW5nIHJlY2VpdmUuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBoYW5kbGVTZW5kKGNoYW5uZWwsIHZhbHVlLCBoYW5kbGVyKSB7XG4gIGlmICh2YWx1ZSA9PT0gQ0xPU0VEKSB7XG4gICAgdGhyb3cgRXJyb3IoXCJDYW5ub3Qgc2VuZCBDTE9TRUQgdG8gYSBjaGFubmVsXCIpO1xuICB9XG5cbiAgaWYgKGNoYW5uZWwuY2xvc2VkKSB7XG4gICAgaGFuZGxlci5jb21taXQoKTtcbiAgICByZXR1cm4gYm94KGZhbHNlKTtcbiAgfVxuXG4gIGxldCByZWNlaXZlciwgY2FsbGJhY2s7XG5cbiAgLy8gUHVzaCB0aGUgaW5jb21pbmcgdmFsdWUgdGhyb3VnaCB0aGUgYnVmZmVyLCBldmVuIGlmIHRoZXJlJ3MgYWxyZWFkeSBhXG4gIC8vIHJlY2VpdmVyIHdhaXRpbmcgZm9yIHRoZSB2YWx1ZS4gVGhpcyBpcyB0byBtYWtlIHN1cmUgdGhhdCB0aGUgdHJhbnNkdWNlclxuICAvLyBzdGVwIGZ1bmN0aW9uIGhhcyBhIGNoYW5jZSB0byBhY3Qgb24gdGhlIHZhbHVlIGZpcnN0LCB3aGljaCBjb3VsZCBjaGFuZ2VcbiAgLy8gdGhlIHZhbHVlIG9yIG1ha2UgaXQgYWx0b2dldGhlciB1bmF2YWlsYWJsZS5cbiAgLy9cbiAgLy8gSWYgdGhlIGNoYW5uZWwgaXMgdW5idWZmZXJlZCB0aGlzIHByb2Nlc3MgaXMgc2tpcHBlZCAodGhlcmUgY2FuJ3QgYmUgYVxuICAvLyB0cmFuc2R1Y2VyIG9uIGFuIHVuYnVmZmVyZWQgY2hhbm5lbCBhbnl3YXkpLiBJZiB0aGUgYnVmZmVyIGlzIGZ1bGwsIHRoZVxuICAvLyB0cmFuc2R1Y2VyJ3Mgd29yayBpcyBkZWZlcnJlZCB1bnRpbCBsYXRlciB3aGVuIHRoZSBidWZmZXIgaXMgbm90IGZ1bGwuXG4gIGlmIChjaGFubmVsLmJ1ZmZlciAmJiAhaXNGdWxsKGNoYW5uZWwuYnVmZmVyKSkge1xuICAgIGhhbmRsZXIuY29tbWl0KCk7XG4gICAgY29uc3QgZG9uZSA9IGlzUmVkdWNlZChjaGFubmVsLnhmb3JtW3Auc3RlcF0oY2hhbm5lbC5idWZmZXIsIHZhbHVlKSk7XG5cbiAgICBmb3IgKDs7KSB7XG4gICAgICBpZiAoY291bnQoY2hhbm5lbC5idWZmZXIpID09PSAwKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgcmVjZWl2ZXIgPSBkZXF1ZXVlKGNoYW5uZWwucmVjdnMpO1xuICAgICAgaWYgKHJlY2VpdmVyID09PSBFTVBUWSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGlmIChyZWNlaXZlci5hY3RpdmUpIHtcbiAgICAgICAgY2FsbGJhY2sgPSByZWNlaXZlci5jb21taXQoKTtcbiAgICAgICAgY29uc3QgdmFsID0gcmVtb3ZlKGNoYW5uZWwuYnVmZmVyKTtcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgZGlzcGF0Y2goKCkgPT4gY2FsbGJhY2sodmFsKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZG9uZSkge1xuICAgICAgY2xvc2UoY2hhbm5lbCk7XG4gICAgfVxuICAgIHJldHVybiBib3godHJ1ZSk7XG4gIH1cblxuICAvLyBUaGlzIGxvb3AgaGFwcGVucyBpZiB0aGUgY2hhbm5lbCBpcyB1bmJ1ZmZlcmVkIGFuZCB0aGVyZSBpcyBhdCBsZWFzdCBvbmVcbiAgLy8gcGVuZGluZyByZWNlaXZlLiAoQnVmZmVyZWQgY2hhbm5lbHMgYnJlYWsgb3V0IG9mIHRoaXMgbG9vcCBpbW1lZGlhdGVseSxcbiAgLy8gYmVjYXVzZSBpbiBvcmRlciBmb3IgYSBidWZmZXJlZCBjaGFubmVsIHRvIHJlYWNoIHRoaXMgcG9pbnQsIGl0cyBidWZmZXJcbiAgLy8gbXVzdCBoYXZlIGJlZW4gZnVsbC4gSWYgdGhlIGJ1ZmZlciBpcyBmdWxsLCB0aGF0IG1lYW5zIHRoZXJlIGFyZSBubyBwZW5kaW5nXG4gIC8vIHJlY2VpdmVzIGFuZCB0aGUgZmlyc3Qgb25lIHJlYWQgd2lsbCBiZSBFTVBUWS4pIEl0IHByb2Nlc3NlcyB0aGUgbmV4dFxuICAvLyBwZW5kaW5nIHJlY2VpdmUgaW1tZWRpYXRlbHkuXG4gIGZvciAoOzspIHtcbiAgICByZWNlaXZlciA9IGRlcXVldWUoY2hhbm5lbC5yZWN2cyk7XG4gICAgaWYgKHJlY2VpdmVyID09PSBFTVBUWSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGlmIChyZWNlaXZlci5hY3RpdmUpIHtcbiAgICAgIGhhbmRsZXIuY29tbWl0KCk7XG4gICAgICBjYWxsYmFjayA9IHJlY2VpdmVyLmNvbW1pdCgpO1xuICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIGRpc3BhdGNoKCgpID0+IGNhbGxiYWNrKHZhbHVlKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gYm94KHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIC8vIElmIHRoZXJlIGFyZSBubyBwZW5kaW5nIHJlY2VpdmVzIG9uIGFuIHVuYnVmZmVyZWQgY2hhbm5lbCwgb3Igb24gYSBidWZmZXJlZFxuICAvLyBjaGFubmVsIHdpdGggYSBmdWxsIGJ1ZmZlciwgd2UgcXVldWUgdGhlIHNlbmQgdG8gdGxldCBpdCB3YWl0IGZvciBhIHJlY2VpdmVcbiAgLy8gdG8gYmVjb21lIGF2YWlsYWJsZS4gU2VuZHMgd2hvc2UgaGFuZGxlcnMgaGF2ZSBnb25lIGluYWN0aXZlICh3aGljaCBoYXBwZW5zXG4gIC8vIGlmIHRoZXkgd2VyZSBwcm9jZXNzZWQgYXMgcGFydCBvZiBhIGBzZWxlY3RgIGNhbGwpIGFyZSBwZXJpb2RpY2FsbHkgcHVyZ2VkLlxuICBpZiAoY2hhbm5lbC5kaXJ0eVNlbmRzID4gY2hhbm5lbC5tYXhEaXJ0eSkge1xuICAgIGZpbHRlcihjaGFubmVsLnNlbmRzLCBzZW5kZXIgPT4gc2VuZGVyLmhhbmRsZXIuYWN0aXZlKTtcbiAgICBjaGFubmVsLmRpcnR5U2VuZHMgPSAwO1xuICB9IGVsc2Uge1xuICAgIGNoYW5uZWwuZGlydHlTZW5kcysrO1xuICB9XG5cbiAgaWYgKHFDb3VudChjaGFubmVsLnNlbmRzKSA+PSBjaGFubmVsLm1heFF1ZXVlZCkge1xuICAgIHRocm93IEVycm9yKFxuICAgICAgYE5vIG1vcmUgdGhhbiAke2NoYW5uZWwubWF4UXVldWVkfSBwZW5kaW5nIHNlbmRzIGFyZSBhbGxvd2VkIG9uIGEgc2luZ2xlIGNoYW5uZWxgXG4gICAgKTtcbiAgfVxuICBlbnF1ZXVlKGNoYW5uZWwuc2VuZHMsIHNlbmRCb3godmFsdWUsIGhhbmRsZXIpKTtcblxuICByZXR1cm4gbnVsbDtcbn1cblxuLyoqXG4gKiBSZWNlaXZlcyBhIHZhbHVlIGZyb20gYSBjaGFubmVsLiBUaGUgc3BlY2lmaWVkIGhhbmRsZXIgaXMgdXNlZCB0byBjb250cm9sXG4gKiB3aGV0aGVyIHRoZSByZWNlaXZlIGlzIGFjdGl2ZSBhbmQgd2hhdCB0byBkbyBhZnRlciB0aGUgcmVjZWl2ZSBjb21wbGV0ZXMuIEFcbiAqIHJlY2VpdmUgY2FuIGJlY29tZSBpbmFjdGl2ZSBpZiBpdCB3YXMgcGFydCBvZiBhbiBgc2VsZWN0YCBjYWxsIGFuZCBzb21lIG90aGVyXG4gKiBvcGVyYXRpb24gc3BlY2lmaWVkIGluIHRoYXQgY2FsbCBoYXMgYWxyZWFkeSBjb21wbGV0ZWQuXG4gKlxuICogVGhpcyB2YWx1ZSBpcyBnaXZlbiB0byBhIHNlbmQgaGFuZGxlciBpbW1lZGlhdGVseSBpZiB0aGVyZSdzIG9uZSB3YWl0aW5nLlxuICogT3RoZXJ3aXNlIHRoZSB2YWx1ZSBhbmQgaGFuZGxlciBhcmUgcXVldWVkIHRvZ2V0aGVyIHRvIHdhaXQgZm9yIGEgc2VuZC5cbiAqXG4gKiBUaGlzIGlzIGEgbG93LWxldmVsIG9wZXJhdGlvbiB0aGF0J3MgcHJvdmlkZWQgYXMgYSBwYXJ0IG9mIHRoZSBjaGFubmVsXG4gKiBpbXBsZW1lbnRhdGlvbiBzbyB0aGF0IG90aGVyIG9wZXJhdGlvbnMgZnVuY3Rpb25zIGNhbiBwcm9wZXJseSBhcHBseVxuICogaGFuZGxlcnMuIEl0IGlzIG5vdCBtZWFudCBmb3IgZ2VuZXJhbCB1c2UuIFVzZSB0aG9zZSBvdGhlciBvcGVyYXRpb25zXG4gKiBmdW5jdGlvbnMgaW5zdGVhZC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcC9jaGFubmVsXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuQ2hhbm5lbH0gY2hhbm5lbCBUaGUgY2hhbm5lbCB0aGF0IHRoZSB2YWx1ZSBpcyBiZWluZ1xuICogICAgIHJlY2VpdmVkIGZyb20uXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGhhbmRsZXIuYWN0aXZlIERldGVybWluZXMgd2hldGhlciB0aGUgcmVjZWl2ZSBpcyBzdGlsbFxuICogICAgIGFjdGl2ZSBhbmQgc2hvdWxkIHN0aWxsIGJlIHNlcnZpY2VkLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gaGFuZGxlci5jb21taXQgRGVhY3RpdmF0ZXMgdGhlIHJlY2VpdmUgKHNvIGl0IGNhbid0IGJlXG4gKiAgICAgc2VydmljZWQgYSBzZWNvbmQgdGltZSkgYW5kIHJldHVybnMgdGhlIGNhbGxiYWNrIHRvIGJlIGZpcmVkIHdoZW4gdGhlXG4gKiAgICAgcmVjZWl2ZSBjb21wbGV0ZXMuXG4gKiBAcmV0dXJuIHttb2R1bGU6Y3NwL2NoYW5uZWwuQm94fG51bGx9IEVpdGhlciB0aGUgYm94ZWQgdmFsdWUgcmVjZWl2ZWQgZnJvbVxuICogICAgIHRoZSBjaGFubmVsLCBvciBgbnVsbGAgaWYgdGhlIHJlY2VpdmUgbXVzdCBiZSBxdWV1ZWQgdG8gYXdhaXQgYVxuICogICAgIGNvcnJlc3BvbmRpbmcgc2VuZC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGhhbmRsZVJlY3YoY2hhbm5lbCwgaGFuZGxlcikge1xuICBsZXQgc2VuZGVyLCBzZW5kSGFuZGxlciwgY2FsbGJhY2s7XG5cbiAgLy8gUnVucyBpZiB0aGUgY2hhbm5lbCBpcyBidWZmZXJlZCBhbmQgdGhlIGJ1ZmZlcmVkIGlzIG5vdCBlbXB0eSAoYW4gZW1wdHlcbiAgLy8gYnVmZmVyIG1lYW5zIHRoZXJlIGFyZSBubyBwZW5kaW5nIHNlbmRzKS4gV2UgaW1tZWRpYXRlbHkgcHJvY2VzcyBhbnkgc2VuZHNcbiAgLy8gdGhhdCB3ZXJlIHF1ZXVlZCB3aGVuIHRoZXJlIHdlcmUgbm8gcGVuZGluZyByZWNlaXZlcywgdXAgdW50aWwgdGhlIGJ1ZmZlclxuICAvLyBpcyBmaWxsZWQgd2l0aCBzZW50IHZhbHVlcy5cbiAgaWYgKGNoYW5uZWwuYnVmZmVyICYmIGNvdW50KGNoYW5uZWwuYnVmZmVyKSA+IDApIHtcbiAgICBoYW5kbGVyLmNvbW1pdCgpO1xuICAgIGNvbnN0IHZhbHVlID0gcmVtb3ZlKGNoYW5uZWwuYnVmZmVyKTtcblxuICAgIGZvciAoOzspIHtcbiAgICAgIGlmIChpc0Z1bGwoY2hhbm5lbC5idWZmZXIpKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgc2VuZGVyID0gZGVxdWV1ZShjaGFubmVsLnNlbmRzKTtcbiAgICAgIGlmIChzZW5kZXIgPT09IEVNUFRZKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBzZW5kSGFuZGxlciA9IHNlbmRlci5oYW5kbGVyO1xuICAgICAgaWYgKHNlbmRIYW5kbGVyLmFjdGl2ZSkge1xuICAgICAgICBjYWxsYmFjayA9IHNlbmRIYW5kbGVyLmNvbW1pdCgpO1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICBkaXNwYXRjaCgoKSA9PiBjYWxsYmFjayh0cnVlKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzUmVkdWNlZChjaGFubmVsLnhmb3JtW3Auc3RlcF0oY2hhbm5lbC5idWZmZXIsIHNlbmRlci52YWx1ZSkpKSB7XG4gICAgICAgICAgY2xvc2UoY2hhbm5lbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGJveCh2YWx1ZSk7XG4gIH1cblxuICAvLyBUaGlzIGxvb3AgcnVucyBvbiBhbiB1bmJ1ZmZlcmVkIGNoYW5uZWwgaWYgdGhlcmUgYXJlIGFueSBwZW5kaW5nIHNlbmRzLlxuICAvLyAoQnVmZmVyZWQgY2hhbm5lbHMgYnJlYWsgb3V0IG9mIHRoaXMgbG9vcCBpbW1lZGlhdGVseSBiZWNhdXNlIGluIG9yZGVyIHRvXG4gIC8vIGhhdmUgY29tZSB0aGlzIGZhciB3aXRob3V0IHJldHVybmluZywgdGhlIGNoYW5uZWwncyBidWZmZXIgbXVzdCBoYXZlIGJlZW5cbiAgLy8gZW1wdHkuIEFuIGVtcHR5IGJ1ZmZlciBtZWFucyB0aGVyZSBhcmUgbm8gcGVuZGluZyBzZW5kcywgc28gdGhlIGZpcnN0XG4gIC8vIHBlbmRpbmcgc2VuZCByZWFkIGZyb20gaXQgd2lsbCBiZSBFTVBUWS4pIEl0IHByb2Nlc3NlcyB0aGUgbmV4dCBwZW5kaW5nXG4gIC8vIHNlbmQgaW1tZWRpYXRlbHkuXG4gIGZvciAoOzspIHtcbiAgICBzZW5kZXIgPSBkZXF1ZXVlKGNoYW5uZWwuc2VuZHMpO1xuICAgIGlmIChzZW5kZXIgPT09IEVNUFRZKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgc2VuZEhhbmRsZXIgPSBzZW5kZXIuaGFuZGxlcjtcbiAgICBpZiAoc2VuZEhhbmRsZXIuYWN0aXZlKSB7XG4gICAgICBjYWxsYmFjayA9IHNlbmRIYW5kbGVyLmNvbW1pdCgpO1xuICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIGRpc3BhdGNoKCgpID0+IGNhbGxiYWNrKHRydWUpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBib3goc2VuZGVyLnZhbHVlKTtcbiAgICB9XG4gIH1cblxuICAvLyBJZiB3ZSd2ZSBleGhhdXN0ZWQgYWxsIG9mIG91ciBwZW5kaW5nIHNlbmRzIGFuZCB0aGUgY2hhbm5lbCBpcyBtYXJrZWRcbiAgLy8gY2xvc2VkLCB3ZSBjYW4gZmluYWxseSByZXV0cm4gdGhlIGZhY3QgdGhhdCB0aGUgY2hhbm5lbCBpcyBjbG9zZWQuIFRoaXNcbiAgLy8gZW5zdXJlcyB0aGF0IGFueSBzZW5kcyB0aGF0IHdlcmUgYWxyZWFkeSBwZW5kaW5nIG9uIHRoZSBjaGFubmVsIGFyZVxuICAvLyBwcm9jZXNzZWQgYmVmb3JlIGNsb3N1cmUsIGV2ZW4gaWYgdGhlIGNoYW5uZWwgd2FzIGNsb3NlZCBiZWZvcmUgdGhhdCBjb3VsZFxuICAvLyBoYXBwZW4uXG4gIGlmIChjaGFubmVsLmNsb3NlZCkge1xuICAgIGhhbmRsZXIuY29tbWl0KCk7XG4gICAgcmV0dXJuIGJveChDTE9TRUQpO1xuICB9XG5cbiAgLy8gSWYgYW4gdW5idWZmZXJlZCBjaGFubmVsIG9yIGEgYnVmZmVyZWQgY2hhbm5lbCB3aXRoIGFuIGVtcHR5IGJ1ZmZlciBoYXMgbm9cbiAgLy8gcGVuZGluZyBzZW5kcywgYW5kIGlmIHRoZSBjaGFubmVsIGlzIHN0aWxsIG9wZW4sIHRoZSByZWNlaXZlIGlzIHF1ZXVlZCB0b1xuICAvLyBiZSBwcm9jZXNzZWQgd2hlbiBhIHNlbmQgaXMgYXZhaWxhYmxlLiBSZWNlaXZlcyB3aG9zZSBoYW5kbGVycyBoYXZlIGdvbmVcbiAgLy8gaW5hY3RpdmUgYXMgdGhlIHJlc3VsdCBvZiBgc2VsZWN0YCBwcm9jZXNzaW5nIGFyZSBwZXJpb2RpY2FsbHkgcHVyZ2VkLlxuICBpZiAoY2hhbm5lbC5kaXJ0eVJlY3ZzID4gY2hhbm5lbC5tYXhEaXJ0eSkge1xuICAgIGZpbHRlcihjaGFubmVsLnJlY3ZzLCByZWNlaXZlciA9PiByZWNlaXZlci5hY3RpdmUpO1xuICAgIGNoYW5uZWwuZGlydHlSZWN2cyA9IDA7XG4gIH0gZWxzZSB7XG4gICAgY2hhbm5lbC5kaXJ0eVJlY3ZzKys7XG4gIH1cblxuICBpZiAocUNvdW50KGNoYW5uZWwucmVjdnMpID49IGNoYW5uZWwubWF4UXVldWVkKSB7XG4gICAgY29uc3QgbWF4ID0gY2hhbm5lbC5tYXhRdWV1ZWQ7XG4gICAgdGhyb3cgRXJyb3IoXG4gICAgICBgTm8gbW9yZSB0aGFuICR7bWF4fSBwZW5kaW5nIHJlY2VpdmVzIGFyZSBhbGxvd2VkIG9uIGEgc2luZ2xlIGNoYW5uZWxgXG4gICAgKTtcbiAgfVxuICBlbnF1ZXVlKGNoYW5uZWwucmVjdnMsIGhhbmRsZXIpO1xuXG4gIHJldHVybiBudWxsO1xufVxuXG4vKipcbiAqIENsb3NlcyB0aGUgY2hhbm5lbCBpZiBpdCBpc24ndCBhbHJlYWR5IGNsb3NlZC4gVGhpcyBpbW1lZGlhdGVseSByZXR1cm5zIGFueVxuICogYnVmZmVyZWQgdmFsdWVzIHRvIHBlbmRpbmcgcmVjZWl2ZXMuIElmIHRoZXJlIGFyZSBubyBidWZmZXJlZCB2YWx1ZXMgKG9yIGlmXG4gKiB0aGV5J3ZlIGFscmVhZHkgYmVlbiB0YWtlbiBieSBvdGhlciByZWNlaXZlcyksIHRoZW4gYWxsIG9mIHRoZSByZXN0IG9mIHRoZVxuICogcmVjZWl2ZXMgYXJlIGNvbXBsZXRlZCB3aXRoIHRoZSB2YWx1ZSBvZiB7QGxpbmsgbW9kdWxlOmNzcC5DTE9TRUR8Q0xPU0VEfS5cbiAqIEFueSBwZW5kaW5nIHNlbmRzIGFyZSBjb21wbGV0ZWQgd2l0aCB0aGUgdmFsdWUgb2YgYGZhbHNlYC5cbiAqXG4gKiBOb3RlIHRoYXQgdGhlIGJ1ZmZlciBpcyBub3QgZW1wdGllZCBpZiB0aGVyZSBhcmUgc3RpbGwgdmFsdWVzIHJlbWFpbmluZyBhZnRlclxuICogYWxsIG9mIHRoZSBwZW5kaW5nIHJlY2VpdmVzIGhhdmUgYmVlbiBoYW5kbGVkLiBUaGUgY2hhbm5lbCB3aWxsIHN0aWxsIHByb3ZpZGVcbiAqIHRob3NlIHZhbHVlcyB0byBhbnkgZnV0dXJlIHJlY2VpdmVzLCB0aG91Z2ggbm8gbmV3IHZhbHVlcyBtYXkgYmUgYWRkZWQgdG8gdGhlXG4gKiBjaGFubmVsLiBPbmNlIHRoZSBidWZmZXIgaXMgZGVwbGV0ZWQsIGFueSBmdXR1cmUgcmVjZWl2ZXMgd2lsbCByZXR1cm5cbiAqIHtAbGluayBtb2R1bGU6Y3NwLkNMT1NFRHxDTE9TRUR9LlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuQ2hhbm5lbH0gY2hhbm5lbCBUaGUgY2hhbm5lbCB0byBiZSBjbG9zZWQuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjbG9zZShjaGFubmVsKSB7XG4gIGlmIChjaGFubmVsLmNsb3NlZCkge1xuICAgIHJldHVybjtcbiAgfVxuICBjaGFubmVsLmNsb3NlZCA9IHRydWU7XG5cbiAgbGV0IHJlY2VpdmVyLCBzZW5kZXIsIGNhbGxiYWNrO1xuXG4gIC8vIElmIHRoZXJlIGlzIGEgYnVmZmVyIGFuZCBpdCBoYXMgYXQgbGVhc3Qgb25lIHZhbHVlIGluIGl0LCBzZW5kIHRob3NlIHZhbHVlc1xuICAvLyB0byBhbnkgcGVuZGluZyByZWNlaXZlcyB0aGF0IG1pZ2h0IHN0aWxsIGJlIHF1ZXVlZC5cbiAgaWYgKGNoYW5uZWwuYnVmZmVyKSB7XG4gICAgY2hhbm5lbC54Zm9ybVtwLnJlc3VsdF0oY2hhbm5lbC5idWZmZXIpO1xuICAgIGZvciAoOzspIHtcbiAgICAgIGlmIChjb3VudChjaGFubmVsLmJ1ZmZlcikgPT09IDApIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICByZWNlaXZlciA9IGRlcXVldWUoY2hhbm5lbC5yZWN2cyk7XG4gICAgICBpZiAocmVjZWl2ZXIgPT09IEVNUFRZKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgaWYgKHJlY2VpdmVyLmFjdGl2ZSkge1xuICAgICAgICBjYWxsYmFjayA9IHJlY2VpdmVyLmNvbW1pdCgpO1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHJlbW92ZShjaGFubmVsLmJ1ZmZlcik7XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgIGRpc3BhdGNoKCgpID0+IGNhbGxiYWNrKHZhbHVlKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBPbmNlIHRoZSBidWZmZXIgaXMgZW1wdHkgKG9yIGlmIHRoZXJlIGlzbid0IGEgYnVmZmVyIGF0IGFsbCksIHNlbmQgQ0xPU0VEXG4gIC8vIHRvIGFsbCByZW1haW5pbmcgcXVldWVkIHJlY2VpdmVzLlxuICBmb3IgKDs7KSB7XG4gICAgcmVjZWl2ZXIgPSBkZXF1ZXVlKGNoYW5uZWwucmVjdnMpO1xuICAgIGlmIChyZWNlaXZlciA9PT0gRU1QVFkpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBpZiAocmVjZWl2ZXIuYWN0aXZlKSB7XG4gICAgICBjYWxsYmFjayA9IHJlY2VpdmVyLmNvbW1pdCgpO1xuICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIGRpc3BhdGNoKCgpID0+IGNhbGxiYWNrKENMT1NFRCkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFNlbmQgYGZhbHNlYCB0byBhbnkgcmVtYWluaW5nIHF1ZXVlZCBzZW5kcy5cbiAgZm9yICg7Oykge1xuICAgIHNlbmRlciA9IGRlcXVldWUoY2hhbm5lbC5zZW5kcyk7XG4gICAgaWYgKHNlbmRlciA9PT0gRU1QVFkpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBpZiAoc2VuZGVyLmhhbmRsZXIuYWN0aXZlKSB7XG4gICAgICBjYWxsYmFjayA9IHNlbmRlci5oYW5kbGVyLmNvbW1pdCgpO1xuICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIGRpc3BhdGNoKCgpID0+IGNhbGxiYWNrKGZhbHNlKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCB7XG4gIENMT1NFRCxcbiAgTUFYX0RJUlRZLFxuICBNQVhfUVVFVUVELFxuICBjaGFubmVsLFxuICBoYW5kbGVTZW5kLFxuICBoYW5kbGVSZWN2LFxuICBjbG9zZSxcbiAgYm94LFxuICBpc0JveFxufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG4vKipcbiAqIEFuIGltcGxlbWVudGF0aW9uIG9mIGNoYW5uZWxzLiBUaGVzZSBjaGFubmVscyBhcmUgZXNzZW50aWFsbHkgcXVldWVzIHRoYXRcbiAqIGhvbGQgaW5zdHJ1Y3Rpb25zIHdhaXRpbmcgZm9yIHRoZSBuZXh0IGF2YWlsYWJsZSBhc3luYyBmdW5jdGlvbiB0byBwcm9jZXNzXG4gKiB0aGVtLiBUaGV5IGNhbiBiZSBidWZmZXJlZCwgd2hpY2ggaXMgYWNjb21wbGlzaGVkIHVzaW5nIHRoZSBidWZmZXIgZnVuY3Rpb25zXG4gKiBge0BsaW5rIG1vZHVsZTpjc3AuZml4ZWR8Zml4ZWR9YCwgYHtAbGluayBtb2R1bGU6Y3NwLmRyb3BwaW5nfGRyb3BwaW5nfWAsIGFuZFxuICogYHtAbGluayBtb2R1bGU6Y3NwLnNsaWRpbmd8c2xpZGluZ31gLlxuICpcbiAqIENoYW5uZWxzIGRvIG5vdCBpbnRlcmFjdCB3aXRoIEpTIHRhc2tzIG9yIHRoZSBkaXNwYXRjaGVyIGluIGFueSBtZWFuaW5nZnVsXG4gKiB3YXkuIFRoZXkncmUganVzdCBoZXJlIHRvIGhvbGQgdGFza3Mgd2hpY2ggbWF5IHRoZW1zZWx2ZXMgdGhlbiBjYXVzZSBuZXcgSlNcbiAqIHRhc2tzIHRvIGJlIGNyZWF0ZWQgdmlhIHRoZSBkaXNwYXRjaGVyLlxuICpcbiAqIENoYW5uZWxzIG1heSBoYXZlIHRyYW5zZHVjZXJzIGFzc29jaWF0ZWQgd2l0aCB0aGVtLiBUaGUgdHJhbnNkdWNlcnMgYXJlXG4gKiBleHBlY3RlZCB0byBmb2xsb3cgdGhlIHNhbWUgY29udmVudGlvbnMgYXMgYW55IG9mIHRoZSBwb3B1bGFyIHRyYW5zZHVjZXJcbiAqIGxpYnJhcmllcy4gRXhwbGljaXQgc3VwcG9ydCBpcyByZXF1aXJlZCBiZWNhdXNlIGNoYW5uZWxzIHdvdWxkbid0IHBsYXkgd2VsbFxuICogd2l0aCB0aGUgbm9ybWFsIHdheSBvZiBtYWtpbmcgYW4gb2JqZWN0IHN1cHBvcnQgdHJhbnNkdWN0aW9uLCBmb3IgdHdvXG4gKiBkaWZmZXJlbnQgcmVhc29ucy5cbiAqXG4gKiAqIFRyYW5zZHVjZXJzIHJlcXVpcmUgdGhlIGFiaWxpdHkgdG8gY3JlYXRlIGEgbmV3LCBlbXB0eSBjb2xsZWN0aW9uIG9mIHRoZVxuICogICBzYW1lIHR5cGUgYXMgdGhlIGlucHV0IGNvbGxlY3Rpb24uIEluIHRoaXMgY2FzZSwgdGhhdCB3b3VsZCBtZWFuIGNyZWF0aW5nIGFcbiAqICAgbmV3IGNoYW5uZWwsIG1lYW5pbmcgdGhhdCB0aGUgb3V0cHV0IGNoYW5uZWwgKGZyb20gd2hpY2ggdGhlIHRyYW5zZm9ybWVkXG4gKiAgIHZhbHVlcyBhcmUgcmVjZWl2ZWQpIHdvdWxkIGJlIGRpZmZlcmVudCB0aGFuIHRoZSBpbnB1dCBjaGFubmVsICh3aGVyZVxuICogICB2YWx1ZXMgYXJlIHNlbnQpLlxuICogKiBJZiB3ZSBzb21laG93IGdldCBvdmVyIHRoYXQgcmVxdWlyZW1lbnQgYW5kIGtlZXAgYWxsIGFjdGlvbiBvbiB0aGUgc2FtZVxuICogICBjaGFubmVsLCB3ZSBjYW4ndCB0YWtlIHZhbHVlcyBmcm9tIHRoZSBjaGFubmVsLCB0cmFuc2Zvcm0gdGhlbSwgYW5kIHB1dFxuICogICB0aGVtIGJhY2suIFRoaXMgd291bGQgcG90ZW50aWFsbHkgY2hhbmdlIHRoZSBvcmRlciBvZiB2YWx1ZXMgaW4gdGhlIGNoYW5uZWxcbiAqICAgc2luY2Ugd2UgYXJlIGRlYWxpbmcgd2l0aCBhc3luY2hyb25vdXMgcHJvY2Vzc2VzLlxuICpcbiAqIFRoZSBleHBsaWNpdCBzdXBwb3J0IG1lYW5zIGEgdHJhbnNkdWNlciBpcyBkaXJlY3RseSBhc3NvY2lhdGVkIHdpdGggYVxuICogY2hhbm5lbC4gV2hlbiBhIHZhbHVlIGlzIHNlbnQgdG8gdGhlIGNoYW5uZWwsIGl0J3MgZmlyc3QgcnVuIHRocm91Z2ggdGhlXG4gKiB0cmFuc2R1Y2VyIGFuZCB0aGUgdHJhbnNmb3JtZWQgdmFsdWUgaXMgdGhlIG9uZSBhY3R1YWxseSBwdXQgaW50byB0aGVcbiAqIGNoYW5uZWwncyBidWZmZXIuIFRoaXMgYXZvaWRzIGJvdGggb2YgdGhlIHByb2JsZW1zIG5vdGVkIGFib3ZlLlxuICpcbiAqIEBtb2R1bGUgY3NwL2NoYW5uZWxcbiAqIEBwcml2YXRlXG4gKi9cblxuaW1wb3J0IHtcbiAgQ0xPU0VELFxuICBjaGFubmVsIGFzIGNoYW5JbXBsLFxuICBoYW5kbGVTZW5kLFxuICBoYW5kbGVSZWN2LFxuICBjbG9zZSBhcyBjbG9zZUltcGwsXG4gIE1BWF9ESVJUWSxcbiAgTUFYX1FVRVVFRFxufSBmcm9tIFwiLi9oYW5kbGVyXCI7XG5pbXBvcnQgeyBERUZBVUxULCBzZWxlY3QsIHNlbGVjdEFzeW5jLCB2YWx1ZSwgY2hhbm5lbCB9IGZyb20gXCIuL3NlbGVjdFwiO1xuaW1wb3J0IHsgYWRkLCBmaXhlZCwgaXNCdWZmZXIgfSBmcm9tIFwibW9kdWxlcy9idWZmZXJcIjtcbmltcG9ydCB7IHByb3RvY29scyBhcyBwIH0gZnJvbSBcIm1vZHVsZXMvcHJvdG9jb2xcIjtcblxuLyoqXG4gKiBBIGhhbmRsZXIgZnVuY3Rpb24gZm9yIGV4Y2VwdGlvbnMgdGhhdCBhcmUgdGhyb3duIGJ5IGEgdHJhbnNkdWNlciB3aGlsZVxuICogdHJhbnNmb3JtaW5nIHZhbHVlcyBvbiBhIGNoYW5uZWwuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGVyciBUaGUgZXJyb3Igb2JqZWN0IHRoYXQgd2FzIHRocm93biBieSB0aGUgdHJhbnNkdWNlci5cbiAqIEByZXR1cm4geyp9IEEgdmFsdWUgdGhhdCBzaG91bGQgYmUgcHV0IGludG8gdGhlIGNoYW5uZWwncyBidWZmZXIgd2hlbiB0aGVcbiAqICAgICB0cmFuc2R1Y2VyIHRocm93cyB0aGUgZXJyb3IuIElmIHRoaXMgdmFsdWUgaXNcbiAqICAgICB7QGxpbmsgbW9kdWxlOmNzcC5DTE9TRUR8Q0xPU0VEfSwgdGhlbiBubyB2YWx1ZSBhdCBhbGwgd2lsbCBiZSBhZGRlZCB0b1xuICogICAgIHRoZSBidWZmZXIuXG4gKiBAY2FsbGJhY2tcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwL2NoYW5uZWxcbiAqIEBwcml2YXRlXG4gKi9cblxuLyoqXG4gKiBUaGUgZGVmYXVsdCBleGNlcHRpb24gaGFuZGxlciwgdXNlZCB3aGVuIG5vIGV4Y2VwdGlvbiBoYW5kbGVyIGlzIHN1cHBsaWVkIHRvXG4gKiBge0BsaW5rIG1vZHVsZTpjc3AvY2hhbm5lbC5oYW5kbGVFeGNlcHRpb259YCxcbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC9jaGFubmVsLndyYXBUcmFuc2Zvcm1lcn1gLCBge0BsaW5rIG1vZHVsZTpjc3AuY2hhbnxjaGFufWAsXG4gKiBvciBge0BsaW5rIG1vZHVsZTpjc3AudHJhbnNDaGFufHRyYW5zQ2hhbn1gLiBUaGlzIGRlZmF1bHQgaGFuZGxlciBtZXJlbHlcbiAqIHJldHVybnMgYHtAbGluayBtb2R1bGU6Y3NwLkNMT1NFRHxDTE9TRUR9YCwgd2hpY2ggd2lsbCByZXN1bHQgaW4gbm8gbmV3IHZhbHVlXG4gKiBiZWluZyB3cml0dGVuIHRvIHRoZSBjaGFubmVsLlxuICpcbiAqIEB0eXBlIHttb2R1bGU6Y3NwLkV4Y2VwdGlvbkhhbmRsZXJ9XG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcC9jaGFubmVsXG4gKiBAcHJpdmF0ZVxuICovXG5jb25zdCBERUZBVUxUX0hBTkRMRVIgPSAoKSA9PiBDTE9TRUQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBoYW5kbGVyIHVzZWQgZm9yIGBzZW5kYCBhbmQgYHJlY3ZgIG9wZXJhdGlvbnMuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3AvY2hhbm5lbFxuICogQHBhcmFtIHttb2R1bGU6Y3NwL2NoYW5uZWwuSGFuZGxlckNhbGxiYWNrfSBmbiBUaGUgY2FsbGJhY2sgdG8gYmUgcnVuIHdoZW5cbiAqICAgICAoYW5kIGlmKSB0aGUgb3BlcmF0aW9uIGNvbXBsZXRlcy5cbiAqIEByZXR1cm4ge21vZHVsZTpjc3AvY2hhbm5lbC5IYW5kbGVyfSBUaGUgbmV3IGhhbmRsZXIuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBvcEhhbmRsZXIoZm4pIHtcbiAgcmV0dXJuIE9iamVjdC5jcmVhdGUobnVsbCwge1xuICAgIGFjdGl2ZToge1xuICAgICAgdmFsdWU6IHRydWVcbiAgICB9LFxuICAgIGNvbW1pdDoge1xuICAgICAgdmFsdWU6ICgpID0+IGZuXG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBIYW5kbGVzIGFuIGV4Y2VwdGlvbiB0aGF0IGlzIHRocm93biBpbnNpZGUgYSB0cmFuc2R1Y2VyLiBUaGUgdGhyb3duIGVycm9yIGlzXG4gKiBwYXNzZWQgdG8gdGhlIGBoYW5kbGVyYCBmdW5jdGlvbiwgYW5kIHRoZSByZXN1bHQgb2YgdGhhdCBoYW5kbGVyIGZ1bmN0aW9uIGlzXG4gKiBhZGRlZCB0byB0aGUgY2hhbm5lbCdzIGJ1ZmZlci4gSWYgdGhhdCB2YWx1ZSBpc1xuICoge0BsaW5rIG1vZHVsZTpjc3AuQ0xPU0VEfENMT1NFRH0sIHRoZW4gaXQgaXMgKm5vdCogYWRkZWQgdG8gdGhlIGJ1ZmZlci5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuQnVmZmVyfSBidWZmZXIgVGhlIGJ1ZmZlciB0aGF0IGJhY2tzIHRoZSBjaGFubmVsIHdob3NlXG4gKiAgICAgdHJhbnNkdWNlcidzIGV4Y2VwdGlvbnMgYXJlIGJlaW5nIGhhbmRsZWQuXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuRXhjZXB0aW9uSGFuZGxlcn0gaGFuZGxlciBUaGUgZXhjZXB0aW9uIGhhbmRsaW5nIGZ1bmN0aW9uXG4gKiAgICAgdGhhdCBpcyBydW4gd2hlbiBhbiBlcnJvciBvY2N1cnMgaW4gYSB0cmFuc2R1Y2VyLlxuICogQHBhcmFtICB7T2JqZWN0fSBleCBUaGUgZXJyb3Igb2JqZWN0IHRocm93biBieSB0aGUgdHJhbnNkdWNlci5cbiAqIEByZXR1cm4ge21vZHVsZTpjc3AuQnVmZmVyfSBUaGUgYnVmZmVyIGl0c2VsZi4gVGhpcyBpcyBkb25lIHRvIG1ha2UgaXQgZWFzaWVyXG4gKiAgICAgdG8gaW50ZWdyYXRlIHRoaXMgZnVuY3Rpb24gaW50byBhIHRyYW5zZHVjZXIncyBzdGVwIGZ1bmN0aW9uLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaGFuZGxlRXhjZXB0aW9uKGJ1ZmZlciwgaGFuZGxlciwgZXgpIHtcbiAgY29uc3QgdmFsdWUgPSBoYW5kbGVyKGV4KTtcbiAgaWYgKHZhbHVlICE9PSBDTE9TRUQpIHtcbiAgICBhZGQoYnVmZmVyLCB2YWx1ZSk7XG4gIH1cbiAgcmV0dXJuIGJ1ZmZlcjtcbn1cblxuLyoqXG4gKiBBIHRyYW5zZHVjZXIgdGhhdCB3cmFwcyBhbm90aGVyIHRyYW5zZHVjZXIgd2l0aCBlcnJvciBoYW5kbGluZyBjb2RlLiBBbnlcbiAqIGVycm9yIHRoYXQgb2NjdXJzIHdpdGhpbiB0aGUgdHJhbnNkdWNlciwgZWl0aGVyIGluIHRoZSBzdGVwIGZ1bmN0aW9uIG9yIHRoZVxuICogcmVzdWx0IGZ1bmN0aW9uLCB3aWxsIGNhdXNlIHRoZSBlcnJvciBoYW5kbGVyIHRvIGJlIHJ1bi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0geGZvcm0gVGhlIHRyYW5zZHVjZXIgdG8gYWRkIGFuIGVycm9yIGhhbmRsZXIgdG8uXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuRXhjZXB0aW9uSGFuZGxlcn0gW2hhbmRsZXI9REVGQVVMVF9IQU5ETEVSXSBUaGUgZXhjZXB0aW9uXG4gKiAgICAgaGFuZGxpbmcgZnVuY3Rpb24gdGhhdCBpcyBydW4gd2hlbiBhbiBlcnJvciBvY2N1cnMgaW4gdGhlIHRyYW5zZHVjZXIuXG4gKiBAcmV0dXJuIHtPYmplY3R9IEEgbmV3IHRyYW5zZHVjZXIgdGhhdCBpcyB0aGUgcmVzdWx0IG9mIHdyYXBwaW5nIHRoZSBwcm92aWRlZFxuICogICAgIHRyYW5zZHVjZXIncyBzdGVwIGFuZCByZXN1bHQgZnVuY3Rpb25zIHdpdGggdGhlIGV4Y2VwdGlvbiBoYW5kbGVyLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaGFuZGxlclRyYW5zZHVjZXIoeGZvcm0sIGhhbmRsZXIgPSBERUZBVUxUX0hBTkRMRVIpIHtcbiAgcmV0dXJuIHtcbiAgICBbcC5zdGVwXShidWZmZXIsIGlucHV0KSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4geGZvcm1bcC5zdGVwXShidWZmZXIsIGlucHV0KTtcbiAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgIHJldHVybiBoYW5kbGVFeGNlcHRpb24oYnVmZmVyLCBoYW5kbGVyLCBleCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIFtwLnJlc3VsdF0oYnVmZmVyKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4geGZvcm1bcC5yZXN1bHRdKGJ1ZmZlcik7XG4gICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICByZXR1cm4gaGFuZGxlRXhjZXB0aW9uKGJ1ZmZlciwgaGFuZGxlciwgZXgpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cblxuLyoqXG4gKiBUaGUgcmVkdWNlciB1c2VkIGF0IHRoZSBlbmQgb2YgYSB0cmFuc2R1Y2VyIGNoYWluIHRvIGNvbnRyb2wgaG93IHRoZVxuICogdHJhbnNmb3JtZWQgdmFsdWVzIGFyZSByZWR1Y2VkIGJhY2sgb250byB0aGUgY2hhbm5lbCdzIGJ1ZmZlci4gVGhpcyByZWR1Y2VyXG4gKiBkb2VzIG5vdGhpbmcgbW9yZSB0aGFuIGFkZCB0aGUgaW5wdXQgaXRlbXMgKHdoaWNoIGFyZSB0aGUgdHJhbnNmb3JtZWQgdmFsdWVzXG4gKiB0aGF0IGFyZSBiZWluZyBwdXQgb250byB0aGUgY2hhbm5lbCkgdG8gdGhlIGNoYW5uZWwgYnVmZmVyLlxuICpcbiAqIFRoaXMgaXMgYSBuZWNlc3NhcnkgcGFydCBvZiB3b3JraW5nIHdpdGggYSB0cmFuc2R1Y2VyLCBhcyB0aGUgZmluYWwgcmVkdWNlclxuICogYWx3YXlzIHRha2VzIHRoZSB0cmFuc2Zvcm1lZCB2YWx1ZXMgYW5kIHJlbmRlcnMgdGhlbSBpbnRvIHdoYXRldmVyIGNvbGxlY3Rpb25cbiAqIGlzIGRlc2lyZWQuIFRoaXMgaXMgdGhhdCBmaW5hbCByZWR1Y2VyIGZvciBjaGFubmVscy5cbiAqXG4gKiBAdHlwZSB7T2JqZWN0fVxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgYnVmZmVyUmVkdWNlciA9IHtcbiAgW3AuaW5pdF0oKSB7XG4gICAgdGhyb3cgRXJyb3IoXCJpbml0IG5vdCBhdmFpbGFibGVcIik7XG4gIH0sXG5cbiAgW3Auc3RlcF0oYnVmZmVyLCBpbnB1dCkge1xuICAgIGFkZChidWZmZXIsIGlucHV0KTtcbiAgICByZXR1cm4gYnVmZmVyO1xuICB9LFxuXG4gIFtwLnJlc3VsdF0oYnVmZmVyKSB7XG4gICAgcmV0dXJuIGJ1ZmZlcjtcbiAgfVxufTtcblxuLyoqXG4gKiBQYXJzZXMgdGhlIGJ1ZmZlciBhcmd1bWVudCBhbmQgb3B0aW9ucywgYWxvbmcgd2l0aCBhIHNldCBvZiBkZWZhdWx0IG9wdGlvbnMsXG4gKiB0byBmaWd1cmUgb3V0IHdoYXQgd2FzIHJlYWxseSBwYXNzZWQgdG8gYHtAbGluayBtb2R1bGU6Y3NwLmNoYW58Y2hhbn1gLlxuICpcbiAqIEBwYXJhbSB7KG51bGx8bnVtYmVyfG1vZHVsZTpjc3AuQnVmZmVyKX0gYnVmZmVyIFRoZSBidWZmZXIgYXJndW1lbnQgcGFzc2VkIHRvXG4gKiAgICAgYHtAbGluayBtb2R1bGU6Y3NwLmNoYW58Y2hhbn1gLlxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgVGhlIG9wdGlvbnMgYXJndW1lbnQgcGFzc2VkIHRvXG4gKiAgICAgYHtAbGluayBtb2R1bGU6Y3NwLmNoYW58Y2hhbn1gLlxuICogQHBhcmFtIHtvYmplY3R9IGRlZmF1bHRPcHRpb25zIERlZmF1bHQgdmFsdWVzIGZvciBvcHRpb25zIHRoYXQgbWlnaHQgbm90IGhhdmVcbiAqICAgICBiZWVuIHNlbnQgdG8gYHtAbGluayBtb2R1bGU6Y3NwLmNoYW58Y2hhbn1gLlxuICogQHJldHVybiB7b2JqZWN0fSBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgcHJvY2Vzc2VkIHZhbHVlcyBvZiBhbGwgb2YgdGhlXG4gKiAgICAgYXJndW1lbnRzIHNlbnQgdG8gYHtAbGluayBtb2R1bGU6Y3NwLmNoYW58Y2hhbn1gLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gcGFyc2VBcmdzKGJ1ZmZlciwgb3B0aW9ucywgZGVmYXVsdE9wdGlvbnMpIHtcbiAgbGV0IGJ1ZjtcbiAgbGV0IG9wdHM7XG5cbiAgaWYgKCFidWZmZXIpIHtcbiAgICAvLyBzYW1lIGZvciAwLCBudWxsLCBvciB1bmRlZmluZWRcbiAgICBidWYgPSBudWxsO1xuICAgIG9wdHMgPSBvcHRpb25zO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBidWZmZXIgPT09IFwibnVtYmVyXCIpIHtcbiAgICBidWYgPSBmaXhlZChidWZmZXIpO1xuICAgIG9wdHMgPSBvcHRpb25zO1xuICB9IGVsc2UgaWYgKGlzQnVmZmVyKGJ1ZmZlcikpIHtcbiAgICBidWYgPSBidWZmZXI7XG4gICAgb3B0cyA9IG9wdGlvbnM7XG4gIH0gZWxzZSB7XG4gICAgLy8gSWYgbm8gYnVmZmVyIGlzIHNwZWNpZmllZCBidXQgYSB0cmFuc2R1Y2VyIGlzLCB3ZSBhc3N1bWUgZml4ZWQoMSkgaW5zdGVhZFxuICAgIC8vIG9mIG5vIGJ1ZmZlclxuICAgIGJ1ZiA9IGJ1ZmZlcj8udHJhbnNkdWNlciA/IGZpeGVkKDEpIDogbnVsbDtcbiAgICBvcHRzID0gYnVmZmVyO1xuICB9XG5cbiAgY29uc3QgeyB0cmFuc2R1Y2VyLCBoYW5kbGVyLCBtYXhEaXJ0eSwgbWF4UXVldWVkLCB0aW1lciB9ID0gT2JqZWN0LmFzc2lnbihcbiAgICB7fSxcbiAgICBkZWZhdWx0T3B0aW9ucyxcbiAgICBvcHRzXG4gICk7XG4gIHJldHVybiB7IGJ1ZiwgdHJhbnNkdWNlciwgaGFuZGxlciwgbWF4RGlydHksIG1heFF1ZXVlZCwgdGltZXIgfTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuZCByZXR1cm5zIGEgbmV3IGNoYW5uZWwuXG4gKlxuICogQnkgZGVmYXVsdCB0aGlzIGNoYW5uZWwgd2lsbCBiZSBhIHNpbXBsZSB1bmJ1ZmZlcmVkLCB1bnRyYW5zZm9ybWVkIGNoYW5uZWwsXG4gKiBidXQgdGhhdCBjYW4gYmUgY2hhbmdlZCB0aHJvdWdoIG9wdGlvbnMuIEEgY2hhbm5lbCBkb2VzIG5vdCBoYXZlIGFueVxuICogZXh0ZXJuYWxseSB1c2VmdWwgZnVuY3Rpb25zLiBJdCBleGlzdHMgbGFyZ2VseSB0byBiZSBwYXNzZWQgaW50b1xuICogYHtAbGluayBtb2R1bGU6Y3NwLnNlbmR8c2VuZH1gLCBge0BsaW5rIG1vZHVsZTpjc3AucmVjdnxyZWN2fWAsIGFuZFxuICogYHtAbGluayBtb2R1bGU6Y3NwLnNlbGVjdHxzZWxlY3R9YCBpbnZvY2F0aW9ucywgYWxvbmcgd2l0aCB0aGVpciBub24tYmxvY2tpbmdcbiAqIHZhcmlhdGlvbnMgKGB7QGxpbmsgbW9kdWxlOmNzcC5zZW5kQXN5bmN8c2VuZEFzeW5jfWAsXG4gKiBge0BsaW5rIG1vZHVsZTpjc3AucmVjdkFzeW5jfHJlY3ZBc3luY31gLCBhbmRcbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC5zZWxlY3RBc3luY3xzZWxlY3RBc3luY31gKS5cbiAqXG4gKiBJZiBhIGJ1ZmZlciB2YWx1ZSBpcyBwcm92aWRlZCwgaXQgZGVmaW5lcyB3aGF0IGJ1ZmZlciBzaG91bGQgYmFjayB0aGVcbiAqIGNoYW5uZWwuIElmIHRoaXMgaXMgYG51bGxgIG9yIGAwYCwgdGhlIGNoYW5uZWwgd2lsbCBiZSB1bmJ1ZmZlcmVkLiBJZiBpdCdzIGFcbiAqIHBvc2l0aXZlIG51bWJlciwgdGhlIGNoYW5uZWwgd2lsbCBiZSBidWZmZXJlZCBieSBhXG4gKiBge0BsaW5rIG1vZHVsZTpjc3AuRml4ZWRCdWZmZXJ8Rml4ZWRCdWZmZXJ9IGBvZiB0aGF0IHNpemUuIElmIGl0J3MgYVxuICogYHtAbGluayBtb2R1bGU6Y3NwLkJ1ZmZlcnxCdWZmZXJ9YCBvYmplY3QsIHRoYXQgb2JqZWN0IHdpbGwgYmUgdXNlZCBhcyB0aGVcbiAqIGNoYW5uZWwncyBidWZmZXIuIElmIGl0J3MgbWlzc2luZyBhbHRvZ2V0aGVyLCB0aGUgY2hhbm5lbCB3aWxsIGJlIHVuYnVmZmVyZWRcbiAqIHVubGVzcyBhIGB0cmFuc2R1Y2VyYCBvcHRpb24gaXMgcHJvdmlkZWQgKHNlZSBiZWxvdyksIGluIHdoaWNoIGNhc2UgaXQgd2lsbFxuICogYmUgYSBge0BsaW5rIG1vZHVsZTpjc3AuRml4ZWRCdWZmZXJ8Rml4ZWRCdWZmZXJ9YCBvZiBzaXplIDEuXG4gKlxuICogYGNoYW5gIHN1cHBvcnRzIHRyYW5zZHVjZXJzIGJ5IGFsbG93aW5nIGEgdHJhbnNkdWNlciBmdW5jdGlvbiB0byBiZVxuICogYXNzb2NpYXRlZCB3aXRoIGl0LiBUaGlzIGlzIHBhc3NlZCBhcyB0aGUgYHRyYW5zZHVjZXJgIG9wdGlvbiBhbmQgY2FuIG9ubHkgYmVcbiAqIHVzZWQgaWYgdGhlIGNoYW5uZWwgaXMgYnVmZmVyZWQgKG90aGVyd2lzZSBhbiBlcnJvciBpcyB0aHJvd24pLiBUaGlzXG4gKiB0cmFuc2R1Y2VyIGZ1bmN0aW9uIG11c3QgdGFrZSBhbm90aGVyIHRyYW5zZHVjZXIgYXMgYSBwYXJhbWV0ZXIgKGFsbG93aW5nXG4gKiB0cmFuc2Zvcm1lcnMgdG8gYmUgY2hhaW5lZCksIGFuZCBpdCBtdXN0IHJldHVybiBhbiBvYmplY3QgY29uZm9ybWluZyB0byB0aGVcbiAqIHRyYW5zZHVjZXIgcHJvdG9jb2wuXG4gKlxuICogRXJyb3JzIGluIHRoZSB0cmFuc2Zvcm1hdGlvbiBwcm9jZXNzIGNhbiBiZSBoYW5kbGVkIGJ5IHBhc3NpbmcgYW4gZXJyb3JcbiAqIGhhbmRsZXIuIFRoaXMgaXMgYSBmdW5jdGlvbiB0aGF0IGV4cGVjdHMgdG8gcmVjZWl2ZSBhbiBlcnJvciBvYmplY3QgYXMgYVxuICogcGFyYW1ldGVyIGFuZCBjYW4gcmV0dXJuIGEgdmFsdWUgdGhhdCBpcyB0aGVuIHB1dCBvbnRvIHRoZSBjaGFubmVsLiBJZiB0aGlzXG4gKiB2YWx1ZSBpcyBge0BsaW5rIG1vZHVsZTpjc3AuQ0xPU0VEfENMT1NFRH1gLCB0aGVuIG5vIHZhbHVlIHdpbGwgYmUgcHV0IG9udG9cbiAqIHRoZSBjaGFubmVsIHVwb24gaGFuZGxlciBjb21wbGV0aW9uLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcGFyYW0geyhudW1iZXJ8bW9kdWxlOmNzcC5CdWZmZXIpfSBbYnVmZmVyXSBUaGUgYnVmZmVyIG9iamVjdCB0aGF0IHNob3VsZFxuICogICAgIGJhY2sgdGhpcyBjaGFubmVsLiBJZiB0aGlzIGlzIGEgcG9zaXRpdmUgbnVtYmVyLCBhIGZpeGVkIGJ1ZmZlciBvZiB0aGF0XG4gKiAgICAgc2l6ZSB3aWxsIGJlIGNyZWF0ZWQgdG8gYmFjayB0aGUgY2hhbm5lbC4gSWYgaXQgaXMgYDBgIG9yIGBudWxsYCwgdGhlIG5ld1xuICogICAgIGNoYW5uZWwgd2lsbCBiZSB1bmJ1ZmZlcmVkLiBJZiBpdCdzIG5vdCBwcmVzZW50LCB0aGUgbmV3IGNoYW5uZWwgd2lsbCBiZVxuICogICAgIHVuYnVmZmVyZWQgdW5sZXNzIHRoZXJlIGlzIGEgYHRyYW5zZHVjZXJgIG9wdGlvbiwgaW4gaW4gd2hpY2ggY2FzZSBpdFxuICogICAgIHdpbGwgYmUgYnVmZmVyZWQgd2l0aCBhIHNpemUgMVxuICogICAgIGB7QGxpbmsgbW9kdWxlOmNzcC5GaXhlZEJ1ZmZlcnxGaXhlZEJ1ZmZlcn1gLlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSBBIHNldCBvZiBvcHRpb25zIGZvciBjb25maWd1cmluZyB0aGUgY2hhbm5lbCdzXG4gKiAgICAgcXVldWUuXG4gKiBAcGFyYW0ge21vZHVsZTpjb3JlLlRyYW5zZHVjZXJGdW5jdGlvbn0gW29wdGlvbnMudHJhbnNkdWNlcl0gQSB0cmFuc2R1Y2VyIHRvXG4gKiAgICAgcnVuIGVhY2ggdmFsdWUgdGhyb3VnaCBiZWZvcmUgcHV0dGluZyBpdCBvbnRvIHRoZSBjaGFubmVsLiBUaGlzIGZ1bmN0aW9uXG4gKiAgICAgc2hvdWxkIGV4cGVjdCBvbmUgcGFyYW1ldGVyIChhbm90aGVyIHRyYW5zZHVjZXIgdGhhdCBpdCdzIGNoYWluZWQgdG8pIGFuZFxuICogICAgIHJldHVybiBhbiBvYmplY3QgdGhhdCBjb25mb3JtcyB0byB0aGUgdHJhbnNkdWNlciBwcm90b2NvbC4gSWYgYVxuICogICAgIHRyYW5zZHVjZXIgaXMgcHJvdmlkZWQgb24gYW4gdW5idWZmZXJlZCBjaGFubmVsLCBhbiBlcnJvciB3aWxsIGJlIHRocm93bi5cbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5FeGNlcHRpb25IYW5kbGVyfSBbb3B0aW9ucy5oYW5kbGVyXSBBbiBlcnJvciBoYW5kbGVyIHRoYXRcbiAqICAgICBpcyBydW4gd2hlbmV2ZXIgYW4gZXJyb3Igb2NjdXJzIGluc2lkZSBhIHRyYW5zZHVjZXIgZnVuY3Rpb24uIElmIHRoYXRcbiAqICAgICBoYXBwZW5zLCB0aGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCB3aXRoIG9uZSBwYXJhbWV0ZXIsIHdoaWNoIGlzIHRoZSBlcnJvclxuICogICAgIG9iamVjdC4gVGhlIHZhbHVlIHRoYXQgdGhlIGhhbmRsZXIgcmV0dXJucyAoaWYgaXQgaXMgbm90XG4gKiAgICAgYHtAbGluayBtb2R1bGU6Y3NwLkNMT1NFRHxDTE9TRUR9YCkgd2lsbCBiZSBwdXQgb250byB0aGUgY2hhbm5lbCB3aGVuIHRoZVxuICogICAgIGhhbmRsZXIgZmluaXNoZXMgcnVubmluZy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5tYXhEaXJ0eT02NF0gVGhlIG1heGltdW0gbnVtYmVyIG9mIGRpcnR5IG9wZXJhdGlvbnNcbiAqICAgICB0aGF0IGNhbiBiZSBpbiB0aGUgcXVldWUgYmVmb3JlIHRob3NlIG9wZXJhdGlvbnMgYXJlIHN1YmplY3QgdG8gYmVpbmdcbiAqICAgICBwdXJnZWQuIERpcnR5IG9wZXJhdGlvbnMgYXJlIHRob3NlIHRoYXQgbWF5IG5vdCBiZSB2YWxpZCBhbnltb3JlIGJlY2F1c2VcbiAqICAgICB0aGV5IHdlcmUgaW4gdGhlIGxpc3Qgb2Ygb3BlcmF0aW9ucyBwYXNzZWQgdG9cbiAqICAgICBge0BsaW5rIG1vZHVsZTpjc3Auc2VsZWN0fHNlbGVjdH1gIG9yXG4gKiAgICAgYHtAbGluayBtb2R1bGU6Y3NwLnNlbGVjdEFzeW5jfHNlbGVjdEFzeW5jfWAgYnV0IHdlcmUgbm90IGNob3NlbiB0byBydW4uXG4gKiAgICAgVGhpcyBwcm92aWRlcyBhIGNoYW5jZSBmb3IgYSB2ZXJ5IG1pbm9yIHBlcmZvcm1hbmNlIHR3ZWFrIGFuZCBpcyBiZXN0XG4gKiAgICAgbGVmdCBhbG9uZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5tYXhRdWV1ZWQ9MTAyNF0gVGhlIG1heGltdW0gbnVtYmVyIG9mIG9wZXJhdGlvbnNcbiAqICAgICB0aGF0IGNhbiBiZSBxdWV1ZWQgdXAgYXQgdGhlIHNhbWUgdGltZS4gVGhpcyBwcmV2ZW50cyBpbmZpbml0ZSBsb29wcyBmcm9tXG4gKiAgICAgYWNjaWRlbnRhbGx5IGVhdGluZyB1cCBhbGwgb2YgdGhlIGF2YWlsYWJsZSBtZW1vcnkuXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMudGltZXJdIElmIHRoaXMgdmFsdWUgaXMgcHJlc2VudCwgdGhlIGNoYW5uZWwgd2lsbCBiZVxuICogICAgIGEgdGltZWQgY2hhbm5lbCB0aGF0IGNsb3NlcyBhdXRvbWF0aWNhbGx5IGFmdGVyIHRoaXMgbnVtYmVyIG9mXG4gKiAgICAgbWlsbGlzZWNvbmRzLlxuICogQHJldHVybiB7bW9kdWxlOmNzcC5DaGFubmVsfSBBIG5ldyBjaGFubmVsLlxuICovXG5mdW5jdGlvbiBjaGFuKGJ1ZmZlciwgb3B0aW9ucykge1xuICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICBtYXhEaXJ0eTogTUFYX0RJUlRZLFxuICAgIG1heFF1ZXVlZDogTUFYX1FVRVVFRFxuICB9O1xuICBjb25zdCB7IGJ1ZiwgdHJhbnNkdWNlciwgaGFuZGxlciwgbWF4RGlydHksIG1heFF1ZXVlZCwgdGltZXIgfSA9IHBhcnNlQXJncyhcbiAgICBidWZmZXIsXG4gICAgb3B0aW9ucyxcbiAgICBkZWZhdWx0T3B0aW9uc1xuICApO1xuXG4gIGlmICh0cmFuc2R1Y2VyICYmICFidWYpIHtcbiAgICB0aHJvdyBFcnJvcihcIk9ubHkgYnVmZmVyZWQgY2hhbm5lbHMgY2FuIHVzZSB0cmFuc2R1Y2Vyc1wiKTtcbiAgfVxuXG4gIGNvbnN0IHhmID0gaGFuZGxlclRyYW5zZHVjZXIoXG4gICAgdHJhbnNkdWNlciA/IHRyYW5zZHVjZXIoYnVmZmVyUmVkdWNlcikgOiBidWZmZXJSZWR1Y2VyLFxuICAgIGhhbmRsZXJcbiAgKTtcblxuICBjb25zdCBpc1RpbWVkID0gdHlwZW9mIHRpbWVyID09PSBcIm51bWJlclwiO1xuXG4gIGNvbnN0IGNoID0gY2hhbkltcGwoYnVmLCB4ZiwgaXNUaW1lZCwgbWF4RGlydHksIG1heFF1ZXVlZCk7XG5cbiAgYXN5bmMgZnVuY3Rpb24qIGl0ZXJhdG9yKCkge1xuICAgIGZvciAoOzspIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gYXdhaXQgcmVjdihjaCk7XG4gICAgICBpZiAodmFsdWUgPT09IENMT1NFRCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHlpZWxkIHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIGNoW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGl0ZXJhdG9yO1xuXG4gIGlmIChpc1RpbWVkKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiBjbG9zZUltcGwoY2gpLCB0aW1lcik7XG4gIH1cblxuICByZXR1cm4gY2g7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbiB1bmJ1ZmZlcmVkLCB0aW1lZCBjaGFubmVsLiBUaGlzIGNoYW5uZWwgY2xvc2VzIGF1dG9tYXRpY2FsbHkgYWZ0ZXJcbiAqIHRoZSBzdXBwbGllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGFuZCBpcyB0aGUgZXF1aXZhbGVudCBvZiBjYWxsaW5nIGBjaGFuKDAsXG4gKiB7IHRpbWVyOiBkZWxheSB9KWAuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqIEBwYXJhbSB7bnVtYmVyfSBkZWxheSBUaGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBhZnRlciB0aGUgY2hhbm5lbCBpcyBjcmVhdGVkXG4gKiAgICAgdGhhdCBpdCB3aWxsIGJlIGNsb3NlZCBhdXRvbWF0aWNhbGx5LlxuICogQHJldHVybiB7bW9kdWxlOmNzcC5DaGFubmVsfSBBIG5ldyB0aW1lZCBjaGFubmVsLlxuICovXG5mdW5jdGlvbiB0aW1lZENoYW4oZGVsYXkgPSAwKSB7XG4gIHJldHVybiBjaGFuKHsgdGltZXI6IGRlbGF5IH0pO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBidWZmZXJlZCBjaGFubmVsIHdpdGggYSB0cmFuc2R1Y2VyIGFuZCBvcHRpb25hbCBlcnJvciBoYW5kbGVyLiBUaGVcbiAqIGJ1ZmZlciBmb3IgdGhpcyBjaGFubmVsIGlzIGEgYHtAbGluayBtb2R1bGU6Y3NwLkZpeGVkQnVmZmVyfEZpeGVkQnVmZmVyfWAgb2ZcbiAqIHNpemUgMS4gVGhpcyBpcyB0aGUgZXF1aXZhbGVudCBvZiBgY2hhbigxLCB7IHRyYW5zZHVjZXIsIGhhbmRsZXIgfSlgLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcGFyYW0ge21vZHVsZTpjb3JlLlRyYW5zZHVjZXJGdW5jdGlvbn0gdHJhbnNkdWNlciBUaGUgdHJhbnNkdWNlciB1c2VkIHRvXG4gKiAgICAgdHJhbnNmb3JtIHZhbHVlcyBvbiB0aGUgbmV3IGNoYW5uZWwuXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuRXhjZXB0aW9uSGFuZGxlcn0gW2hhbmRsZXJdIEFuIGV4Y2VwdGlvbiBoYW5kbGVyIGNhbGxlZFxuICogICAgIHdpdGggdGhlIGVycm9yIG9iamVjdCBhcyBpdHMgb25seSBhcmd1bWVudCB3aGVuIGFuIGVycm9yIGhhcHBlbnMgaW5zaWRlIGFcbiAqICAgICB0cmFuc2R1Y2VyLiBJZiB0aGlzIGlzIG5vdCBwcm92aWRlZCwgYSBkZWZhdWx0IGhhbmRsZXIgaXMgdXNlZCB0aGF0XG4gKiAgICAgc2ltcGx5IGRvZXMgbm90aGluZywgaW5jbHVkaW5nIHNlbmRpbmcgbm8gb3V0cHV0IGZyb20gdGhlIHZhbHVlIHRoYXRcbiAqICAgICBlcnJvcmVkLlxuICogQHJldHVybiB7bW9kdWxlOmNzcC5DaGFubmVsfSBBIG5ldyBjaGFubmVsIHdpdGggYSB0cmFuc2R1Y2VyLlxuICovXG5mdW5jdGlvbiB0cmFuc0NoYW4odHJhbnNkdWNlciwgaGFuZGxlcikge1xuICByZXR1cm4gY2hhbih7IHRyYW5zZHVjZXIsIGhhbmRsZXIgfSk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGEgY2hhbm5lbCBpcyBjbG9zZWQuXG4gKlxuICogQSBjbG9zZWQgY2hhbm5lbCB3aWxsIGNhdXNlIGFueSBgc2VuZGAgb3BlcmF0aW9uIHRvIHJldHVybiBgZmFsc2VgIGFuZCBhbnlcbiAqIGByZWN2YCBvcGVyYXRpb24gdG8gcmV0dXJuIGFueSBidWZmZXJlZCBpdGVtcyB0aGF0IHJlbWFpbiwgZm9sbG93ZWQgYnlcbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC5DTE9TRUR8Q0xPU0VEfWAuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5DaGFubmVsfSBjaGFubmVsIFRoZSBjaGFubmVsIHRvIGNoZWNrLlxuICogQHJldHVybiB7Ym9vbGVhbn0gRWl0aGVyIGB0cnVlYCBpZiB0aGUgY2hhbm5lbCBpcyBjbG9zZWQgb3IgYGZhbHNlYCBpZiBpdFxuICogICAgIGlzbid0LlxuICovXG5mdW5jdGlvbiBpc0Nsb3NlZChjaGFubmVsKSB7XG4gIHJldHVybiBjaGFubmVsLmNsb3NlZDtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgYSBjaGFubmVsIGlzIGJ1ZmZlcmVkLlxuICpcbiAqIEEgY2hhbm5lbCBpcyBidWZmZXJlZCBpZiBhIGJ1ZmZlciBvciBhIG51bWJlciB3YXMgcGFzc2VkIGFzIHRoZSBmaXJzdFxuICogYXJndW1lbnQgb2YgYHtAbGluayBtb2R1bGU6Y3NwLmNoYW58Y2hhbn1gIG9yIGlmIGEgdHJhbnNkdWNlciBpcyBhIHBhcnQgb2ZcbiAqIHRoZSBjaGFubmVsLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuQ2hhbm5lbH0gY2hhbm5lbCBUaGUgY2hhbm5lbCB0byBjaGVjay5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IEVpdGhlciBgdHJ1ZWAgaWYgdGhlIGNoYW5uZWwgaXMgYnVmZmVyZWQgb3IgYGZhbHNlYCBpZiBpdFxuICogICAgIGlzbid0LlxuICovXG5mdW5jdGlvbiBpc0J1ZmZlcmVkKGNoYW5uZWwpIHtcbiAgcmV0dXJuIGNoYW5uZWwuaXNCdWZmZXJlZDtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgYSBjaGFubmVsIGlzIHRpbWVkLlxuICpcbiAqIEEgY2hhbm5lbCBpcyB0aW1lZCBpZiBpdCB3YXMgY3JlYXRlZCBlaXRoZXIgd2l0aCB0aGUgYHRpbWVyYCBvcHRpb24gb2ZcbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC5jaGFufGNoYW59YCBvciB3aXRoIHRoZVxuICogYHtAbGluayBtb2R1bGU6Y3NwLnRpbWVkQ2hhbnx0aW1lZENoYW59YCBmdW5jdGlvbi4gSXQgd2lsbCBhdXRvbWF0aWNhbGx5XG4gKiBjbG9zZSBhZnRlciBhIGNlcnRhaW4gcGVyaW9kIG9mIHRpbWUuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5DaGFubmVsfSBjaGFubmVsIFRoZSBjaGFubmVsIHRvIGNoZWNrLlxuICogQHJldHVybiB7Ym9vbGVhbn0gRWl0aGVyIGB0cnVlYCBpZiB0aGUgY2hhbm5lbCBpcyB0aW1lZCBvciBgZmFsc2VgIGlmIGl0XG4gKiAgICAgaXNuJ3QuXG4gKi9cbmZ1bmN0aW9uIGlzVGltZWQoY2hhbm5lbCkge1xuICByZXR1cm4gY2hhbm5lbC5pc1RpbWVkO1xufVxuXG4vKipcbiAqIFNlbmRzIGEgdmFsdWUgdG8gdGhpcyBjaGFubmVsIHdpdGhvdXQgYmxvY2tpbmcuXG4gKlxuICogVGhpcyBtZWFucyB0aGF0IGEgY2FsbCB0byBgc2VuZEFzeW5jYCBkb2VzIG5vdCBnbyBpbnRvIGFuIGBhd2FpdGAgZXhwcmVzc2lvbixcbiAqIGFuZCBpdCBpcyBub3QgbmVjZXNzYXJ5IHRvIHVzZSBpdCBpbnNpZGUgYSBhc3luYyBmdW5jdGlvbi4gUmF0aGVyIHRoYW5cbiAqIGJsb2NraW5nIHVudGlsIHRoZSBzZW50IHZhbHVlIGlzIHRha2VuIGJ5IGFub3RoZXIgYXN5bmMgZnVuY3Rpb24sIHRoaXMgb25lXG4gKiByZXR1cm5zIGltbWVkaWF0ZWx5IGFuZCB0aGVuIGludm9rZXMgdGhlIGNhbGxiYWNrIChpZiBwcm92aWRlZCkgd2hlbiB0aGUgc2VudFxuICogdmFsdWUgaXMgdGFrZW4uIEl0IGNhbiBiZSBzZWVuIGFzIGEgbm9uLWJsb2NraW5nIHZlcnNpb24gb2ZcbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC5zZW5kfHNlbmR9YC5cbiAqXG4gKiBXaGlsZSB0aGUgcHJpbWFyeSB1c2Ugb2YgdGhpcyBmdW5jdGlvbiBpcyB0byBzZW5kIHZhbHVlcyBvbnRvIGNoYW5uZWxzIGluXG4gKiBjb250ZXh0cyB3aGVyZSBiZWluZyBpbnNpZGUgYW4gYXN5bmMgZnVuY3Rpb24gaXMgaW1wb3NzaWJsZSAoZm9yIGV4YW1wbGUsIGluXG4gKiBhIERPTSBlbGVtZW50J3MgZXZlbnQgaGFuZGxlciksIGl0IGNhbiBzdGlsbCBiZSB1c2VkIGluc2lkZSBhc3luYyBmdW5jdGlvbnNcbiAqIGF0IHRpbWVzIHdoZW4gaXQncyBpbXBvcnRhbnQgdG8gbWFrZSBzdXJlIHRoYXQgdGhlIGZ1bmN0aW9uIGRvZXNuJ3QgYmxvY2tcbiAqIGZyb20gdGhlIHNlbmQuXG4gKlxuICogVGhlIGNhbGxiYWNrIGlzIGEgZnVuY3Rpb24gb2Ygb25lIHBhcmFtZXRlci4gVGhlIHBhcmFtZXRlciB0aGF0J3Mgc3VwcGxpZWQgdG9cbiAqIHRoZSBjYWxsYmFjayBpcyB0aGUgc2FtZSBhcyB3aGF0IGlzIHN1cHBsaWVkIHRvIGBhd2FpdCBzZW5kYDogYHRydWVgIGlmIHRoZVxuICogdmFsdWUgd2FzIHRha2VuLCBvciBgZmFsc2VgIGlmIHRoZSBjaGFubmVsIHdhcyBjbG9zZWQuIElmIHRoZSBjYWxsYmFjayBpc24ndFxuICogcHJlc2VudCwgbm90aGluZyB3aWxsIGhhcHBlbiBhZnRlciB0aGUgdmFsdWUgaXMgdGFrZW4uXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqIEBwYXJhbSB7Kn0gW3ZhbHVlXSBUaGUgdmFsdWUgYmVpbmcgcHV0IG9udG8gdGhlIGNoYW5uZWwuXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuT3BDYWxsYmFja30gW2NhbGxiYWNrXSBBIGZ1bmN0aW9uIHRoYXQgZ2V0cyBpbnZva2VkIGVpdGhlclxuICogICAgIHdoZW4gdGhlIHZhbHVlIGlzIHRha2VuIGJ5IGFub3RoZXIgcHJvY2VzcyBvciB3aGVuIHRoZSBjaGFubmVsIGlzIGNsb3NlZC5cbiAqICAgICBUaGlzIGZ1bmN0aW9uIGNhbiB0YWtlIG9uZSBwYXJhbWV0ZXIsIHdoaWNoIGlzIGB0cnVlYCBpbiB0aGUgZm9ybWVyIGNhc2VcbiAqICAgICBhbmQgYGZhbHNlYCBpbiB0aGUgbGF0dGVyLlxuICovXG5mdW5jdGlvbiBzZW5kQXN5bmMoY2hhbm5lbCwgdmFsdWUsIGNhbGxiYWNrID0gKCkgPT4ge30pIHtcbiAgY29uc3QgcmVzdWx0ID0gaGFuZGxlU2VuZChjaGFubmVsLCB2YWx1ZSwgb3BIYW5kbGVyKGNhbGxiYWNrKSk7XG4gIGlmIChyZXN1bHQgJiYgY2FsbGJhY2spIHtcbiAgICBjYWxsYmFjayhyZXN1bHQudmFsdWUpO1xuICB9XG59XG5cbi8qKlxuICogUmVjZWl2ZXMgYSB2YWx1ZSBmcm9tIHRoaXMgY2hhbm5lbCB3aXRob3V0IGJsb2NraW5nLlxuICpcbiAqIFRoaXMgbWVhbnMgdGhhdCBhIGNhbGwgdG8gYHJlY2VpdmVBc3luY2AgZG9lcyBub3QgZ28gaW50byBhbiBgYXdhaXRgXG4gKiBleHByZXNzaW9uLCBhbmQgaXQgaXMgbm90IG5lY2Vzc2FyeSB0byB1c2UgaXQgaW5zaWRlIGEgYXN5bmMgZnVuY3Rpb24uIFJhdGhlclxuICogdGhhbiBibG9ja2luZyB1bnRpbCBhIHZhbHVlIGJlY29tZXMgYXZhaWxhYmxlIG9uIHRoZSBjaGFubmVsIHRvIGJlIHJlY2VpdmVkLFxuICogdGhpcyBvbmUgcmV0dXJucyBpbW1lZGlhdGVseSBhbmQgdGhlbiBpbnZva2VzIHRoZSBjYWxsYmFjayAoaWYgcHJvdmlkZWQpIHdoZW5cbiAqIGEgdmFsdWUgYmVjb21lcyBhdmFpbGFibGUuIEl0IGNhbiBiZSByZWdhcmRlZCBhcyBhIG5vbi1ibG9ja2luZyB2ZXJzaW9uIG9mXG4gKiB7QGxpbmsgbW9kdWxlOmNzcC5yZWN2fHJlY3Z9YC5cbiAqXG4gKiBXaGlsZSB0aGUgcHJpbWFyeSB1c2Ugb2YgdGhpcyBmdW5jdGlvbiBpcyB0byByZWNlaXZlIHZhbHVlcyBmcm9tIGNoYW5uZWxzIGluXG4gKiBjb250ZXh0cyB3aGVyZSBiZWluZyBpbnNpZGUgYW4gYXN5bmMgZnVuY3Rpb24gaXMgaW1wb3NzaWJsZSwgaXQgY2FuIHN0aWxsIGJlXG4gKiB1c2VkIGluc2lkZSBhc3luYyBmdW5jdGlvbnMgYXQgdGltZXMgd2hlbiBpdCdzIGltcG9ydGFudCB0aGF0IHRoZSByZWNlaXZlXG4gKiBkb2Vzbid0IGJsb2NrIHRoZSBmdW5jdGlvbi5cbiAqXG4gKiBUaGUgY2FsbGJhY2sgaXMgYSBmdW5jdGlvbiBvZiBvbmUgcGFyYW1ldGVyLCBhbmQgdGhlIHZhbHVlIHN1cHBsaWVkIGZvciB0aGF0XG4gKiBwYXJhbWV0ZXIgaXMgdGhlIHZhbHVlIHJlY2VpdmVkIGZyb20gdGhlIGNoYW5uZWwgKGVpdGhlciBhIHZhbHVlIHRoYXQgd2FzXG4gKiBzZW50IG9yIGB7QGxpbmsgbW9kdWxlOmNzcC5DTE9TRUR8Q0xPU0VEfWApLiBJZiB0aGUgY2FsbGJhY2sgaXNuJ3QgcHJlc2VudCxcbiAqIG5vdGhpbmcgd2lsbCBoYXBwZW4gYWZ0ZXIgdGhlIHZhbHVlIGlzIHRha2VuLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuT3BDYWxsYmFja30gW2NhbGxiYWNrXSBBIGZ1bmN0aW9uIHRoYXQgZ2V0cyBpbnZva2VkIHdoZW4gYVxuICogICAgIHZhbHVlIGlzIG1hZGUgYXZhaWxhYmxlIHRvIGJlIHJlY2VpdmVkICh0aGlzIHZhbHVlIG1heSBiZVxuICogICAgIGB7QGxpbmsgbW9kdWxlOmNzcC5DTE9TRUR8Q0xPU0VEfWAgaWYgdGhlIGNoYW5uZWwgY2xvc2VzIHdpdGggbm9cbiAqICAgICBhdmFpbGFibGUgdmFsdWUpLiBUaGUgZnVuY3Rpb24gY2FuIHRha2Ugb25lIHBhcmFtZXRlciwgd2hpY2ggaXMgdGhlIHZhbHVlXG4gKiAgICAgdGhhdCBpcyByZWNlaXZlZCBmcm9tIHRoZSBjaGFubmVsLlxuICovXG5mdW5jdGlvbiByZWN2QXN5bmMoY2hhbm5lbCwgY2FsbGJhY2sgPSAoKSA9PiB7fSkge1xuICBjb25zdCByZXN1bHQgPSBoYW5kbGVSZWN2KGNoYW5uZWwsIG9wSGFuZGxlcihjYWxsYmFjaykpO1xuICBpZiAocmVzdWx0ICYmIGNhbGxiYWNrKSB7XG4gICAgY2FsbGJhY2socmVzdWx0LnZhbHVlKTtcbiAgfVxufVxuXG4vKipcbiAqIFNlbmRzIGEgdmFsdWUgdG8gYSBjaGFubmVsLCBibG9ja2luZyB0aGUgYXN5bmMgZnVuY3Rpb24gdW50aWwgdGhhdCB2YWx1ZSBpc1xuICogcmVjZWl2ZWQgZnJvbSB0aGUgY2hhbm5lbCBieSBhIGRpZmZlcmVudCBmdW5jdGlvbiAob3IgdW50aWwgdGhlIGNoYW5uZWxcbiAqIGNsb3NlcykuXG4gKlxuICogQSB2YWx1ZSBpcyBhbHdheXMgc2VudCB0byB0aGUgY2hhbm5lbCwgYnV0IGlmIHRoYXQgdmFsdWUgaXNuJ3Qgc3BlY2lmaWVkIGJ5XG4gKiB0aGUgc2Vjb25kIHBhcmFtZXRlciwgaXQgaXMgYHVuZGVmaW5lZGAuIEFueSB2YWx1ZSBtYXkgYmUgc2VudCB0byBhIGNoYW5uZWwsXG4gKiB3aXRoIHRoZSBzb2xlIGV4Y2VwdGlvbiBvZiB0aGUgc3BlY2lhbCB2YWx1ZVxuICogYHtAbGluayBtb2R1bGU6Y3NwLkNMT1NFRHxDTE9TRUR9YC5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uICptdXN0KiBiZSBjYWxsZWQgZnJvbSB3aXRoaW4gYW4gYXN5bmMgZnVuY3Rpb24gYW5kIGFzIHBhcnQgb2ZcbiAqIGFuIGBhd2FpdGAgZXhwcmVzc2lvbi5cbiAqXG4gKiBXaGVuIGBzZW5kYCBpcyBjb21wbGV0ZWQgYW5kIGl0cyBmdW5jdGlvbiB1bmJsb2NrcywgaXRzIGBhd2FpdGAgZXhwcmVzc2lvblxuICogZXZhbHVhdGVzIHRvIGEgc3RhdHVzIGJvb2xlYW4gdGhhdCBpbmRpY2F0ZXMgd2hhdCBjYXVzZWQgdGhlIGZ1bmN0aW9uIHRvXG4gKiB1bmJsb2NrLiBUaGF0IHZhbHVlIGlzIGB0cnVlYCBpZiB0aGUgc2VudCB2YWx1ZSB3YXMgc3VjY2Vzc2Z1bGx5IHRha2VuIGJ5XG4gKiBhbm90aGVyIHByb2Nlc3MsIG9yIGBmYWxzZWAgaWYgdGhlIHVuYmxvY2tpbmcgaGFwcGVuZWQgYmVjYXVzZSB0aGUgdGFyZ2V0XG4gKiBjaGFubmVsIGNsb3NlZC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICogQHBhcmFtIHsqfSBbdmFsdWVdIFRoZSB2YWx1ZSBiZWluZyBwdXQgb250byB0aGUgY2hhbm5lbC5cbiAqIEByZXR1cm4ge1Byb21pc2U8Ym9vbGVhbj59IEEgcHJvbWlzZSB0aGF0IHdpbGwgcmVzb2x2ZSB0byBgdHJ1ZWAgb3IgYGZhbHNlYFxuICogICAgIGRlcGVuZGluZyBvbiB3aGV0aGVyIHRoZSBwdXQgdmFsdWUgaXMgYWN0dWFsbHkgdGFrZW4uXG4gKi9cbmZ1bmN0aW9uIHNlbmQoY2hhbm5lbCwgdmFsdWUpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgIHNlbmRBc3luYyhjaGFubmVsLCB2YWx1ZSwgcmVzb2x2ZSk7XG4gIH0pO1xufVxuXG4vKipcbiAqIFJlY2VpdmVzIGEgdmFsdWUgZnJvbSB0aGlzIGNoYW5uZWwsIGJsb2NraW5nIHRoZSBhc3luYyBmdW5jdGlvbiB1bnRpbCBhIHZhbHVlXG4gKiBiZWNvbWVzIGF2YWlsYWJsZSB0byBiZSByZWNlaXZlZCAob3IgdW50aWwgdGhlIGNoYW5uZWwgY2xvc2VzIHdpdGggbm8gbW9yZVxuICogdmFsdWVzIG9uIGl0IHRvIGJlIHJlY2VpdmVkKS5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uICptdXN0KiBiZSBjYWxsZWQgZnJvbSB3aXRoaW4gYW4gYXN5bmMgZnVuY3Rpb24gYW5kIGFzIHBhcnQgb2ZcbiAqIGFuIGBhd2FpdGAgZXhwcmVzc2lvbi5cbiAqXG4gKiBXaGVuIGByZWNlaXZlYCBpcyBjb21wbGV0ZWQgYW5kIGl0cyBmdW5jdGlvbiB1bmJsb2NrcywgaXRzIGBhd2FpdGAgZXhwcmVzc2lvblxuICogZXZhbHVhdGVzIHRvIHRoZSBhY3R1YWwgdmFsdWUgdGhhdCB3YXMgcmVjZWl2ZWQuIElmIHRoZSB0YXJnZXQgY2hhbm5lbFxuICogY2xvc2VkLCB0aGVuIGFsbCBvZiB0aGUgdmFsdWVzIGFscmVhZHkgcGxhY2VkIG9udG8gaXQgYXJlIHJlc29sdmVkIGJ5XG4gKiBgcmVjZWl2ZWAgYXMgbm9ybWFsLCBhbmQgb25jZSBubyBtb3JlIHZhbHVlcyBhcmUgYXZhaWxhYmxlLCB0aGUgc3BlY2lhbCB2YWx1ZVxuICogYHtAbGluayBtb2R1bGU6Y3NwLkNMT1NFRHxDTE9TRUR9YCBpcyByZXR1cm5lZC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICogQHJldHVybiB7UHJvbWlzZX0gQSBwcm9taXNlIHRoYXQgd2lsbCByZXNvbHZlIHRvIHRoZSB2YWx1ZSByZWNlaXZlZCBmcm9tIHRoZVxuICogICAgIGNoYW5uZWwgb25jZSB0aGF0IHJlY2VpdmUgaXMgY29tcGxldGVkLiBJZiB0aGUgY2hhbm5lbCBjbG9zZXMgd2l0aG91dCBhXG4gKiAgICAgdmFsdWUgYmVpbmcgbWFkZSBhdmFpbGFibGUsIHRoaXMgd2lsbCByZXNvbHZlIHRvXG4gKiAgICAgYHtAbGluayBtb2R1bGU6Y3NwLkNMT1NFRHxDTE9TRUR9YC5cbiAqL1xuZnVuY3Rpb24gcmVjdihjaGFubmVsKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICByZWN2QXN5bmMoY2hhbm5lbCwgcmVzb2x2ZSk7XG4gIH0pO1xufVxuXG4vKipcbiAqIFJlY2VpdmVzIGEgdmFsdWUgZnJvbSBhIGNoYW5uZWwsIGJsb2NraW5nIHRoZSBhc3luYyBmdW5jdGlvbiB1bnRpbCBhIHZhbHVlXG4gKiBiZWNvbWVzIGF2YWlsYWJsZSB0byBiZSByZWNlaXZlZCAob3IgdW50aWwgdGhlIGNoYW5uZWwgY2xvc2VzIHdpdGggbm8gbW9yZVxuICogdmFsdWVzIG9uIGl0IHRvIGJlIHJlY2VpdmVkKS4gSWYgdGhlIHJlY2VpdmVkIHZhbHVlIGlzIGFuIGVycm9yIG9iamVjdCwgdGhhdFxuICogZXJyb3IgaXMgdGhyb3duIGF0IHRoYXQgcG9pbnQuXG4gKlxuICogVGhpcyBmdW5jdGlvbiAqbXVzdCogYmUgY2FsbGVkIGZyb20gd2l0aGluIGFuIGFzeW5jIGZ1bmN0aW9uIGFuZCBhcyBwYXJ0IG9mXG4gKiBhbiBgYXdhaXRgIGV4cHJlc3Npb24uXG4gKlxuICogSXQgZnVuY3Rpb25zIGluIGV2ZXJ5IHdheSBsaWtlIGB7QGxpbmsgbW9kdWxlOmNzcC5yZWN2fHJlY3Z9YCAqZXhjZXB0KiBpbiB0aGVcbiAqIGNhc2UgdGhhdCB0aGUgdmFsdWUgb24gdGhlIGNoYW5uZWwgaXMgYW4gb2JqZWN0IHRoYXQgaGFzIGBFcnJvci5wcm90b3R5cGVgIGluXG4gKiBpdHMgcHJvdG90eXBlIGNoYWluIChhbnkgYnVpbHQtaW4gZXJyb3IsIGFueSBwcm9wZXJseS1jb25zdHJ1Y3RlZCBjdXN0b21cbiAqIGVycm9yKS4gSWYgdGhhdCBoYXBwZW5zLCB0aGUgZXJyb3IgaXMgdGhyb3duLCB3aGljaCB3aWxsIGNhdXNlIHRoZSByZXR1cm5lZFxuICogcHJvbWlzZSB0byBiZSByZWplY3RlZCB3aXRoIHRoZSBlcnJvci4gSXQgY2FuIHRoZW4gYmUgaGFuZGxlZCB1cCB0aGUgcHJvbWlzZVxuICogY2hhaW4gbGlrZSBhbnkgb3RoZXIgcmVqZWN0ZWQgcHJvbWlzZS5cbiAqXG4gKiBgdGFrZU9yVGhyb3dgIGlzIHJvdWdobHkgZXF1aXZhbGVudCB0bzpcbiAqXG4gKiBgYGBcbiAqIGNvbnN0IHZhbHVlID0gYXdhaXQgcmVjdihjaCk7XG4gKiBpZiAoRXJyb3IucHJvdG90eXBlLmlzUHJvdG90eXBlT2YodmFsdWUpKSB7XG4gKiAgIHRocm93IHZhbHVlO1xuICogfVxuICogYGBgXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqIEByZXR1cm4ge1Byb21pc2V9IEEgcHJvbWlzZSB0aGF0IHdpbGwgcmVzb2x2ZSB0byB0aGUgdmFsdWUgdGFrZW4gZnJvbSB0aGVcbiAqICAgICBjaGFubmVsIG9uY2UgdGhhdCB0YWtlIGlzIGNvbXBsZXRlZC4gSWYgdGhlIGNoYW5uZWwgY2xvc2VzIHdpdGhvdXQgYVxuICogICAgIHZhbHVlIGJlaW5nIG1hZGUgYXZhaWxhYmxlLCB0aGlzIHdpbGwgcmVzb2x2ZSB0b1xuICogICAgIGB7QGxpbmsgbW9kdWxlOmNzcC5DTE9TRUR8Q0xPU0VEfWAuIElmIHRoZSB0YWtlbiB2YWx1ZSBpcyBhbiBlcnJvciwgdGhlXG4gKiAgICAgcHJvbWlzZSB3aWxsIGluc3RlYWQgYmUgcmVqZWN0ZWQgd2l0aCB0aGUgZXJyb3Igb2JqZWN0IGFzIHRoZSByZWFzb24uXG4gKi9cbmZ1bmN0aW9uIHJlY3ZPclRocm93KGNoYW5uZWwpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICByZWN2QXN5bmMoY2hhbm5lbCwgcmVzdWx0ID0+IHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmlzUHJvdG90eXBlT2YuY2FsbChFcnJvci5wcm90b3R5cGUsIHJlc3VsdCkpIHtcbiAgICAgICAgcmVqZWN0KHJlc3VsdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuXG4vKipcbiAqIENsb3NlcyB0aGUgY2hhbm5lbCwgaWYgaXQgaXNuJ3QgYWxyZWFkeSBjbG9zZWQuIFRoaXMgaW1tZWRpYXRlbHkgcmV0dXJucyBhbnlcbiAqIGJ1ZmZlcmVkIHZhbHVlcyB0byBwZW5kaW5nIHJlY2VpdmVzLiBJZiB0aGVyZSBhcmUgbm8gYnVmZmVyZWQgdmFsdWVzIChvciBpZlxuICogdGhleSd2ZSBhbHJlYWR5IGJlZW4gdGFrZW4gYnkgb3RoZXIgcmVjZWl2ZXMpLCB0aGVuIGFsbCBvZiB0aGUgcmVzdCBvZiB0aGVcbiAqIHJlY2VpdmVzIGFyZSBjb21wbGV0ZWQgd2l0aCB0aGUgdmFsdWUgb2YgYHtAbGluayBtb2R1bGU6Y3NwLkNMT1NFRHxDTE9TRUR9YC5cbiAqIEFueSBwZW5kaW5nIHNlbmRzIGFyZSBjb21wbGV0ZWQgd2l0aCB0aGUgdmFsdWUgb2YgYGZhbHNlYC5cbiAqXG4gKiBOb3RlIHRoYXQgdGhlIGJ1ZmZlciBpcyBub3QgZW1wdGllZCBpZiB0aGVyZSBhcmUgc3RpbGwgdmFsdWVzIHJlbWFpbmluZyBhZnRlclxuICogYWxsIG9mIHRoZSBwZW5kaW5nIHJlY2VpdmVzIGhhdmUgYmVlbiBoYW5kbGVkLiBUaGUgY2hhbm5lbCB3aWxsIHN0aWxsIHByb3ZpZGVcbiAqIHRob3NlIHZhbHVlcyB0byBhbnkgZnV0dXJlIHJlY2VpdmVzLCB0aG91Z2ggbm8gbmV3IHZhbHVlcyBtYXkgYmUgYWRkZWQgdG8gdGhlXG4gKiBjaGFubmVsLiBPbmNlIHRoZSBidWZmZXIgaXMgZGVwbGV0ZWQsIGFueSBmdXR1cmUgcmVjZWl2ZXMgd2lsbCByZXR1cm5cbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC5DTE9TRUR8Q0xPU0VEfWAuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5DaGFubmVsfSBjaGFubmVsIFRoZSBjaGFubmVsIHRvIGJlIGNsb3NlZC5cbiAqL1xuZnVuY3Rpb24gY2xvc2UoY2hhbm5lbCkge1xuICBjbG9zZUltcGwoY2hhbm5lbCk7XG59XG5cbmV4cG9ydCB7XG4gIENMT1NFRCxcbiAgREVGQVVMVCxcbiAgY2hhbixcbiAgdGltZWRDaGFuLFxuICB0cmFuc0NoYW4sXG4gIGlzQ2xvc2VkLFxuICBpc0J1ZmZlcmVkLFxuICBpc1RpbWVkLFxuICBzZW5kQXN5bmMsXG4gIHJlY3ZBc3luYyxcbiAgc2VsZWN0QXN5bmMsXG4gIHNlbmQsXG4gIHJlY3YsXG4gIHJlY3ZPclRocm93LFxuICBzZWxlY3QsXG4gIGNsb3NlLFxuICB2YWx1ZSxcbiAgY2hhbm5lbFxufTtcblxuLyoqXG4gKiBVc2VkIGJ5IGNoYW5uZWxzIHRvIHRyYWNrIGV4ZWN1dGlvbiBvZiBvcGVyYXRpb25zIChgc2VuZGAsIGByZWN2YCwgYW5kXG4gKiBgc2VsZWN0YCkuIFRoZXkgcHJvdmlkZSB0d28gcGllY2VzIG9mIGluZm9ybWF0aW9uOiB0aGUgZnVuY3Rpb24gdG8gY2FsbCB3aGVuXG4gKiBhIGBzZW5kYCBvciBgcmVjdmAgdW5ibG9ja3MgKGJlY2F1c2UgYSB2YWx1ZSBnaXZlbiB0byBzZW5kIGhhcyBiZWVuIHJlY2VpdmVkLFxuICogb3IgYSBgcmVjdmAgaGFzIGFjY2VwdGVkIGEgdmFsdWUgdGhhdCBoYXMgYmVlbiBzZW50KSBhbmQgd2hldGhlciBvciBub3QgdGhlXG4gKiBoYW5kbGVyIGlzIHN0aWxsIGFjdGl2ZS5cbiAqXG4gKiBUaGUgZnVuY3Rpb24gaXMgYSBjYWxsYmFjayB0aGF0IGFjdHVhbGx5IGRlZmluZXMgdGhlIGRpZmZlcmVuY2UgYmV0d2VlblxuICogYHtAbGluayBtb2R1bGU6Y3NwLnNlbmR8c2VuZH1gIC8gYHtAbGluayBtb2R1bGU6Y3NwLnJlY3Z8cmVjdn1gIC9cbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC5zZWxlY3R8c2VsZWN0fWAgYW5kXG4gKiBge0BsaW5rIG1vZHVsZTpjc3Auc2VuZEFzeW5jfHNlbmRBc3luY31gIC9cbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC5yZWN2QXN5bmN8cmVjdkFzeW5jfWAgL1xuICogYHtAbGluayBtb2R1bGU6Y3NwLnNlbGVjdEFzeW5jfHNlbGVjdEFzeW5jfWA6IHdoaWxlIHRoZSB1bmJsb2NrZWQgY2FsbHMgdXNlXG4gKiB0aGUgY2FsbGJhY2sgcGFzc2VkIHRvIHRoZSBmdW5jdGlvbiwgYHNlbmRgLCBgcmVjdmAsIGFuZCBgc2VsZWN0YCBzaW1wbHlcbiAqIGNvbnRpbnVlIHRoZSBwcm9jZXNzIHdoZXJlIGl0IGxlZnQgb2ZmLiAoVGhpcyBpcyB3aHkgYHNlbmRgLCBgcmVjdmAsIGFuZFxuICogYHNlbGVjdGAgb25seSB3b3JrIGluc2lkZSBgYXN5bmNgIGZ1bmN0aW9ucyB3aXRoIGBhd2FpdGAgaWYgdGhlIHJldHVybiB2YWx1ZVxuICogaXMgbmVlZGVkLCBiZWNhdXNlIG90aGVyd2lzZSB0aGVyZSdzIG5vIHByb2Nlc3MgdG8gY29udGludWUuKVxuICpcbiAqIFRoaXMgZnVuY3Rpb24gaXMgcHJvdmlkZWQgYXMgdGhlIHJldHVybiB2YWx1ZSBvZiB0aGUgYGNvbW1pdGAgbWV0aG9kLiBDYWxsaW5nXG4gKiBgY29tbWl0YCBoYXMgbm8gZXh0cmEgZWZmZWN0IHdpdGggYHNlbmRgIGFuZCBgcmVjdmAgb3BlcmF0aW9ucywgYnV0IGZvclxuICogYHNlbGVjdGAsIGl0IGFsc28gbWFya3MgdGhlIGhhbmRsZXIgYXMgbm8gbG9uZ2VyIGJlaW5nIGFjdGl2ZS4gVGhpcyBtZWFuc1xuICogdGhhdCBvbmx5IG9uZSBvZiB0aGUgb3BlcmF0aW9ucyBwYXNzZWQgdG8gc2VsZWN0IGNhbiBiZSBjb21wbGV0ZWQsIGJlY2F1c2VcbiAqIGFmdGVyIHRoZSBmaXJzdCBvbmUsIHRoZSBoYW5kbGVyIGlzIG5vIGxvbmdlciBhY3RpdmUgYW5kIHdpbGwgbm90IGJlIGFsbG93ZWRcbiAqIHRvIHByb2Nlc3MgYSBzZWNvbmQgb3BlcmF0aW9uLlxuICpcbiAqIElmIGEgYHNlbmRgIG9yIGByZWN2YCAob3IgZXF1aXZhbGVudCBgc2VsZWN0YCBvcGVyYXRpb24pIGNhbm5vdCBiZVxuICogaW1tZWRpYXRlbHkgY29tcGxldGVkIGJlY2F1c2UgdGhlcmUgaXNuJ3QgYSBjb3JyZXNwb25kaW5nIHBlbmRpbmcgYHJlY3ZgIG9yXG4gKiBgc2VuZGAsIHRoZSBoYW5kbGVyIGlzIHF1ZXVlZCB0byBiZSBydW4gd2hlbiBhIG5ldyBgcmVjdmAgb3IgYHNlbmRgIGJlY29tZXNcbiAqIGF2YWlsYWJsZS5cbiAqXG4gKiBAdHlwZWRlZiBIYW5kbGVyXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcC9jaGFubmVsXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IGFjdGl2ZSBXaGV0aGVyIG9yIG5vdCB0aGUgb3BlcmF0aW9uIGlzIHN0aWxsIGFjdGl2ZS4gQW5cbiAqICAgICBpbmFjdGl2ZSBvcGVyYXRpb24gaXMgbm90IHNlcnZpY2VkIGFuZCB3aWxsIGJlIGNsZWFyZWQgZnJvbSB0aGUgcXVldWUgb25cbiAqICAgICB0aGUgbmV4dCBkaXJ0eSBvcGVyYXRpb24gcHVyZ2UuXG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBjb21taXQgTWFya3MgdGhlIGhhbmRsZXIgYXMgaW5hY3RpdmUgKHNvIGl0IGRvZXNuJ3QgcnVuXG4gKiAgICAgdHdpY2UpIGFuZCByZXR1cm5zIHRoZSBjYWxsYmFjayB0byBiZSBydW4gd2hlbiB0aGUgb3BlcmF0aW9uIGNvbXBsZXRlcy5cbiAqIEBwcml2YXRlXG4gKi9cblxuLyoqXG4gKiBBIGNhbGxiYWNrIGZ1bmN0aW9uIHJ1biB3aGVuIGEgYHNlbmRgIG9yIGByZWN2YCBvcGVyYXRpb24gY29tcGxldGVzLlxuICpcbiAqIEBjYWxsYmFjayBIYW5kbGVyQ2FsbGJhY2tcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwL2NoYW5uZWxcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHByb3ZpZGVkIGJ5IHRoZSBjaGFubmVsLiBJbiBhIGByZWN2YCwgdGhpcyBpcyB0aGVcbiAqICAgICB2YWx1ZSByZWNlaXZlZCBmcm9tIHRoZSBjaGFubmVsLiBJbiBhIGBzZW5kYCwgdGhpcyBpcyBgdHJ1ZWAgZm9yIGFcbiAqICAgICBzdWNjZXNzZnVsIHNlbmQgYW5kIGBmYWxzZWAgaWYgdGhlIGNoYW5uZWwgaXMgY2xvc2VkIGJlZm9yZSB0aGUgc2VuZCBjYW5cbiAqICAgICBjb21wbGV0ZS5cbiAqIEBwcml2YXRlXG4gKi9cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG5pbXBvcnQgeyBib3gsIGhhbmRsZVNlbmQsIGhhbmRsZVJlY3YsIGlzQm94IH0gZnJvbSBcIi4vaGFuZGxlclwiO1xuXG4vKipcbiAqIFRoZSBuYW1lIG9mIHRoZSBjaGFubmVsIHJldHVybmVkIGZyb20gYGF3YWl0XG4gKiB7QGxpbmsgbW9kdWxlOmNzcC5zZWxlY3R8c2VsZWN0fWAgb3Igc2VudCB0byB0aGUgY2FsbGJhY2sgaW5cbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC5zZWxlY3RBc3luY3xzZWxlY3RBc3luY31gIHdoZW4gdGhlIGRlZmF1bHQgaXMgcmV0dXJuZWQgYXNcbiAqIGl0cyB2YWx1ZS5cbiAqXG4gKiBUaGlzIG9ubHkgaGFwcGVucyB3aGVuIGFuIGB7QGxpbmsgbW9kdWxlOmNzcC5zZWxlY3R8c2VsZWN0fSAvXG4gKiB7QGxpbmsgbW9kdWxlOmNzcC5zZWxlY3RBc3luY3xzZWxlY3RBc3luY31gIGNhbGwgaXMgcGVyZm9ybWVkLCBhbGwgb3BlcmF0aW9uc1xuICogYXJlIGluaXRpYWxseSBibG9ja2luZywgYW5kIGEgYGRlZmF1bHRgIG9wdGlvbiBpcyBzZW50LiBUaGUgaW1tZWRpYXRlXG4gKiByZXNwb25zZSBpbiB0aGF0IHNpdHVhdGlvbiBpcyBgeyB2YWx1ZTogb3B0aW9ucy5kZWZhdWx0LCBjaGFubmVsOiBERUZBVUxUIH1gLlxuICpcbiAqIEB0eXBlIHtTeW1ib2x9XG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICovXG5jb25zdCBERUZBVUxUID0gU3ltYm9sKFwiREVGQVVMVFwiKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGhhbmRsZXIgdXNlZCBmb3IgYHNlbGVjdGAgb3BlcmF0aW9ucy5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcC9jaGFubmVsXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AvY2hhbm5lbC5Cb3h9IGFjdGl2ZSBBIGJveGVkIHZhbHVlIGluZGljYXRpbmcgd2hldGhlciB0aGVcbiAqICAgICBoYW5kbGVyIGlzIHZhbGlkLiBUaGlzIGlzIGEgYm94ZWQgdmFsdWUgYmVjYXVzZSB0aGUgc2VsZWN0LWhhbmRsaW5nIGNvZGVcbiAqICAgICBuZWVkcyB0byBtYW5pcHVsYXRlIGl0IGRpcmVjdGx5LlxuICogQHBhcmFtIHttb2R1bGU6Y3NwL2NoYW5uZWwuSGFuZGxlckNhbGxiYWNrfSBmbiBUaGUgY2FsbGJhY2sgdG8gYmUgcnVuIHdoZW5cbiAqICAgICAoYW5kIGlmKSB0aGUgb3BlcmF0aW9uIGNvbXBsZXRlcy5cbiAqIEByZXR1cm4ge21vZHVsZTpjc3AvY2hhbm5lbC5IYW5kbGVyfSBUaGUgbmV3IGhhbmRsZXIuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBzZWxlY3RIYW5kbGVyKGFjdGl2ZSwgZm4pIHtcbiAgcmV0dXJuIE9iamVjdC5jcmVhdGUobnVsbCwge1xuICAgIGFjdGl2ZToge1xuICAgICAgZ2V0KCkge1xuICAgICAgICByZXR1cm4gYWN0aXZlLnZhbHVlO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBjb21taXQ6IHtcbiAgICAgIHZhbHVlOiAoKSA9PiB7XG4gICAgICAgIGFjdGl2ZS52YWx1ZSA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gZm47XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgcmFuZG9tbHkgc2h1ZmZsZWQgYXJyYXkgY29udGFpbmluZyBvbmUgb2YgZWFjaCBpbnRlZ2VyIHZhbHVlIGZyb21cbiAqIGAwYCB0byBhbiB1cHBlciBsaW1pdC4gSXQgaXMgdXNlZCB0byByYW5kb21seSBzZWxlY3QgYSBjaGFubmVsIHRvIGJlIGFjdGl2ZVxuICogd2hlbiBtdWx0aXBsZXMgdW5ibG9jayBpbiBhIGBzZWxlY3RgIG9wZXJhdGlvbi5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcC9jaGFubmVsXG4gKiBAcGFyYW0ge251bWJlcn0gdXBwZXIgVGhlIHVwcGVyIGxpbWl0IG9mIHRoZSBhcnJheSB2YWx1ZXMsIGV4Y2x1c2l2ZS5cbiAqIEByZXR1cm4ge251bWJlcltdfSBBbiBhcnJheSBvZiBpbnRlZ2VycyBmcm9tIGAwYCB0byBgdXBwZXIgLSAxYCwgc2h1ZmZsZWRcbiAqICAgICBpbnRvIGEgcmFuZG9tIG9yZGVyLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gcmFuZG9tQXJyYXkodXBwZXIpIHtcbiAgY29uc3QgYXJyYXkgPSBbXTtcbiAgZm9yIChsZXQgayA9IDA7IGsgPCB1cHBlcjsgaysrKSB7XG4gICAgYXJyYXkucHVzaChrKTtcbiAgfVxuICBmb3IgKGxldCBqID0gdXBwZXIgLSAxOyBqID4gMDsgai0tKSB7XG4gICAgY29uc3QgaSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChqICsgMSkpO1xuICAgIGNvbnN0IHRlbXAgPSBhcnJheVtqXTtcbiAgICBhcnJheVtqXSA9IGFycmF5W2ldO1xuICAgIGFycmF5W2ldID0gdGVtcDtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbi8qKlxuICogQSByZXN1bHQgdGhhdCBjb21lcyBmcm9tIGBzZWxlY3RgIG9wZXJhdGlvbnMuXG4gKlxuICogQHR5cGVkZWYgU2VsZWN0UmVzdWx0XG4gKiBAcHJvcGVydHkgeyp9IHZhbHVlIElmIHRoZSBgc2VsZWN0YCBvcGVyYXRpb24gcmVzdWx0ZWQgaW4gYSByZWNlaXZlLCB0aGlzIGlzXG4gKiAgICAgdGhlIHZhbHVlIHJlY2VpdmVkIGZyb20gdGhlIGNoYW5uZWwuIElmIGl0IHJlc3VsdGVkIGluIGEgc2VuZCwgdGhpcyBpc1xuICogICAgIGB0cnVlYCBmb3IgYSBzdWNjZXNzZnVsIHNlbmQgYW5kIGBmYWxzZWAgaWYgdGhlIGNoYW5uZWwgY2xvc2VkIGZpcnN0LlxuICogQHByb3BlcnR5IHttb2R1bGU6Y3NwLkNoYW5uZWx9IGNoYW5uZWwgVGhlIGNoYW5uZWwgdXBvbiB3aGljaCB0aGUgc2VsZWN0ZWRcbiAqICAgICBvcGVyYXRpb24gaGFwcGVuZWQuXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICovXG5cbi8qKlxuICogQ3JlYXRlcyBhIHNlbGVjdCByZXN1bHQgZnJvbSBpdHMgY29tcG9uZW50IHByb3BlcnRpZXMuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3AvY2hhbm5lbFxuICogQHBhcmFtIHsqfSB2YWx1ZSBJZiB0aGUgYHNlbGVjdGAgb3BlcmF0aW9uIHJlc3VsdGVkIGluIGEgcmVjZWl2ZSwgdGhpcyBpcyB0aGVcbiAqICAgICB2YWx1ZSByZWNlaXZlZCBmcm9tIHRoZSBjaGFubmVsLiBJZiBpdCByZXN1bHRlZCBpbiBhIHNlbmQsIHRoaXMgaXMgYHRydWVgXG4gKiAgICAgZm9yIGEgc3VjY2Vzc2Z1bCBzZW5kIGFuZCBgZmFsc2VgIGlmIHRoZSBjaGFubmVsIGNsb3NlZCBmaXJzdC5cbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5DaGFubmVsfSBjaGFubmVsIFRoZSBjaGFubmVsIHVwb24gd2hpY2ggdGhlIHNlbGVjdGVkXG4gKiAgICAgb3BlcmF0aW9uIGhhcHBlbmVkLlxuICogQHJldHVybiB7bW9kdWxlOmNzcC5TZWxlY3RSZXN1bHR9IFRoZSBwcm9wZXJ0aWVzIHdyYXBwZWQgaW50byBhbiBvYmplY3QgZm9yXG4gKiAgICAgb3V0cHV0LlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gc2VsZWN0UmVzdWx0KHZhbHVlLCBjaGFubmVsKSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5jcmVhdGUobnVsbCksIHsgdmFsdWUsIGNoYW5uZWwgfSk7XG59XG5cbi8qKlxuICogQ29tcGxldGVzIHRoZSBmaXJzdCBvcGVyYXRpb24gYW1vbmcgdGhlIHByb3ZpZGVkIG9wZXJhdGlvbnMgdGhhdCBjb21lc1xuICogYXZhaWxhYmxlLCB3aXRob3V0IGJsb2NraW5nLlxuICpcbiAqIFRoaXMgbWVhbnMgdGhhdCBhIGNhbGwgdG8gYHNlbGVjdEFzeW5jYCBkb2VzIG5vdCBnbyBpbnRvIGFuIGBhd2FpdGBcbiAqIGV4cHJlc3Npb24sIGFuZCBpdCBpcyBub3QgbmVjZXNzYXJ5IHRvIHVzZSBpdCBpbnNpZGUgYSBwcm9jZXNzLiBSYXRoZXIgdGhhblxuICogYmxvY2tpbmcgdW50aWwgYW4gb3BlcmF0aW9uIGNvbXBsZXRlcywgdGhpcyBvbmUgcmV0dXJucyBpbW1lZGlhdGVseSBhbmQgdGhlblxuICogaW52b2tlcyB0aGUgY2FsbGJhY2sgKGlmIHByb3ZpZGVkKSBhcyBzb29uIGFzIG9uZSBvZiB0aGUgc3VwcGxpZWQgb3BlcmF0aW9uc1xuICogY29tcGxldGVzLiBJdCBjYW4gYmUgcmVnYXJkZWQgYXMgYSBub24tYmxvY2tpbmcgdmVyc2lvbiBvZlxuICogYHtAbGluayBtb2R1bGU6Y3NwLnNlbGVjdHxzZWxlY3R9YC5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHVzZXMgYW4gb3BlcmF0aW9ucyBsaXN0IHRoYXQncyBpZGVudGljYWwgdG8gdGhlIG9uZSB1c2VkIGJ5XG4gKiBge0BsaW5rIG1vZHVsZTpjc3Auc2VsZWN0fHNlbGVjdH1gLiBJdCdzIGFuIGFycmF5IG9mIHZhbHVlczsgaWYgYSB2YWx1ZSBpcyBhXG4gKiBjaGFubmVsLCB0aGVuIHRoYXQgb3BlcmF0aW9uIGlzIGEgdGFrZSBvbiB0aGF0IGNoYW5uZWwsIHdoaWxlIGlmIGl0J3MgYVxuICogdHdvLWVsZW1lbnQgYXJyYXkgb2YgY2hhbm5lbCBhbmQgdmFsdWUsIHRoZW4gdGhhdCBvcGVyYXRpb24gaXMgYSBwdXQgb2YgdGhhdFxuICogdmFsdWUgb250byB0aGF0IGNoYW5uZWwuIEFsbCBvcHRpb25zIHRoYXQgYXJlIGF2YWlsYWJsZSB0b1xuICogYHtAbGluayBtb2R1bGU6Y3NwLnNlbGVjdHxzZWxlY3R9YCBhcmUgYWxzbyBhdmFpbGFibGUgaGVyZS5cbiAqXG4gKiBUaGUgY2FsbGJhY2sgaXMgYSBmdW5jdGlvbiBvZiBvbmUgcGFyYW1ldGVyLCB3aGljaCBpbiB0aGlzIGNhc2UgaXMgYW4gb2JqZWN0XG4gKiB3aXRoIGB2YWx1ZWAgYW5kIGBjaGFubmVsYCBwcm9wZXJ0aWVzLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcGFyYW0ge09iamVjdFtdfSBvcGVyYXRpb25zIEEgY29sbGVjdGlvbiBvZiBlbGVtZW50cyB0aGF0IGNvcnJlc3BvbmQgdG8gcmVjdlxuICogICAgIGFuZCBzZW5kIG9wZXJhdGlvbnMuIEEgcmVjdiBvcGVyYXRpb24gaXMgc2lnbmlmaWVkIGJ5IGFuIGVsZW1lbnQgdGhhdCBpc1xuICogICAgIGEgY2hhbm5lbCAod2hpY2ggaXMgdGhlIGNoYW5uZWwgdG8gYmUgcmVjZWl2ZWQgZnJvbSkuIEEgc2VuZCBvcGVyYXRpb24gaXNcbiAqICAgICBzcGVjaWZpZWQgYnkgYW4gZWxlbWVudCB0aGF0IGlzIGl0c2VsZiBhIHR3by1lbGVtZW50IGFycmF5LCB3aGljaCBoYXMgYVxuICogICAgIGNoYW5uZWwgZm9sbG93ZWQgYnkgYSB2YWx1ZSAod2hpY2ggaXMgdGhlIGNoYW5uZWwgYW5kIHZhbHVlIHRvIGJlIHNlbnQpLlxuICogQHBhcmFtIHttb2R1bGU6Y3NwLlNlbGVjdENhbGxiYWNrfSBjYWxsYmFjayBBIGZ1bmN0aW9uIHRoYXQgZ2V0cyBpbnZva2VkIHdoZW5cbiAqICAgICBvbmUgb2YgdGhlIG9wZXJhdGlvbnMgY29tcGxldGVzLlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSBBbiBvcHRpb25hbCBvYmplY3Qgd2hpY2ggY2FuIGNoYW5nZSB0aGUgYmVoYXZpb3JcbiAqICAgICBvZiBgc2VsZWN0QXN5bmNgIHRocm91Z2ggdHdvIHByb3BlcnRpZXMuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnByaW9yaXR5PWZhbHNlXSBJZiBgdHJ1ZWAsIHRoZW4gdGhlIHByaW9yaXR5IG9mXG4gKiAgICAgb3BlcmF0aW9ucyB0byBjb21wbGV0ZSB3aGVuIG1vcmUgdGhhbiBvbmUgaXMgaW1tZWRpYXRlbHkgYXZhaWxhYmxlIGlzIGFcbiAqICAgICBwcmlvcml0eSBhY2NvcmRpbmcgdG8gcG9zaXRpb24gd2l0aGluIHRoZSBvcGVyYXRpb25zIGFycmF5IChlYXJsaWVyXG4gKiAgICAgcG9zaXRpb25zIGhhdmUgdGhlIGhpZ2hlciBwcmlvcml0eSkuIElmIGBmYWxzZWAgb3Igbm90IHByZXNlbnQsIHRoZVxuICogICAgIHByaW9ydHkgb2Ygb3BlcmF0aW9uIGNvbXBsZXRpb24gaXMgcmFuZG9tLlxuICogQHBhcmFtIHsqfSBbb3B0aW9ucy5kZWZhdWx0XSBJZiBzZXQgYW5kIGFsbCBvZiB0aGUgb3BlcmF0aW9ucyBpbml0aWFsbHlcbiAqICAgICBibG9jaywgdGhlIGBzZWxlY3RBc3luY2AgY2FsbHMgaXRzIGNhbGxiYWNrIGltbWVkaWF0ZWx5IHdpdGggdGhlIHZhbHVlIG9mXG4gKiAgICAgdGhpcyBvcHRpb24gKHRoZSBjaGFubmVsIHdpbGwgYmUgYHtAbGluayBtb2R1bGU6Y3NwLkRFRkFVTFR8REVGQVVMVH0pYC5cbiAqICAgICBJZiBub3Qgc2V0LCB0aGUgYHNlbGVjdEFzeW5jYCBjYWxsIHdpbGwgbm90IGNhbGwgaXRzIGNhbGxiYWNrIHVudGlsIG9uZVxuICogICAgIG9mIHRoZSBvcGVyYXRpb25zIGNvbXBsZXRlcyBhbmQgdGhhdCB2YWx1ZSBhbmQgY2hhbm5lbCB3aWxsIGJlIHRoZSBvbmVzXG4gKiAgICAgcmV0dXJuZWQuXG4gKi9cbmZ1bmN0aW9uIHNlbGVjdEFzeW5jKG9wcywgY2FsbGJhY2sgPSAoKSA9PiB7fSwgb3B0aW9ucyA9IHt9KSB7XG4gIGNvbnN0IGNvdW50ID0gb3BzLmxlbmd0aDtcbiAgaWYgKGNvdW50ID09PSAwKSB7XG4gICAgdGhyb3cgRXJyb3IoXCJzZWxlY3QgY2FsbGVkIHdpdGggbm8gb3BlcmF0aW9uc1wiKTtcbiAgfVxuXG4gIGNvbnN0IHByaW9yaXR5ID0gISFvcHRpb25zLnByaW9yaXR5O1xuICBjb25zdCBpbmRpY2VzID0gcHJpb3JpdHkgPyBbXSA6IHJhbmRvbUFycmF5KGNvdW50KTtcblxuICBjb25zdCBhY3RpdmUgPSBib3godHJ1ZSk7XG5cbiAgZnVuY3Rpb24gY3JlYXRlU2VsZWN0SGFuZGxlcihjaGFubmVsKSB7XG4gICAgcmV0dXJuIHNlbGVjdEhhbmRsZXIoYWN0aXZlLCB2YWx1ZSA9PiB7XG4gICAgICBjYWxsYmFjayhzZWxlY3RSZXN1bHQodmFsdWUsIGNoYW5uZWwpKTtcbiAgICB9KTtcbiAgfVxuXG4gIGxldCByZXN1bHQ7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgLy8gQ2hvb3NlIGFuIG9wZXJhdGlvbi4gSWYgYHByaW9yaXR5YCBpcyB0cnVlIHRoZW4gaXQncyB0aGUgbmV4dCBpbmRleCxcbiAgICAvLyBvdGhlcndpc2UgaXQncyByYW5kb21cbiAgICBjb25zdCBvcCA9IG9wc1twcmlvcml0eSA/IGkgOiBpbmRpY2VzW2ldXTtcbiAgICBsZXQgY2hhbm5lbCwgdmFsdWU7XG5cbiAgICAvLyBBcHBseSBldmVyeSBvcGVyYXRpb24gdG8gaXRzIGNoYW5uZWwsIG9uZSBhdCBhIHRpbWVcbiAgICBpZiAoQXJyYXkuaXNBcnJheShvcCkpIHtcbiAgICAgIFtjaGFubmVsLCB2YWx1ZV0gPSBvcDtcbiAgICAgIHJlc3VsdCA9IGhhbmRsZVNlbmQoY2hhbm5lbCwgdmFsdWUsIGNyZWF0ZVNlbGVjdEhhbmRsZXIoY2hhbm5lbCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjaGFubmVsID0gb3A7XG4gICAgICByZXN1bHQgPSBoYW5kbGVSZWN2KGNoYW5uZWwsIGNyZWF0ZVNlbGVjdEhhbmRsZXIoY2hhbm5lbCkpO1xuICAgIH1cblxuICAgIC8vIFdlIGNoZWNrIGZvciBib3ggaGVyZSBiZWNhdXNlIGEgYm94IGZyb20gYSBjaGFubmVsIGluZGljYXRlcyB0aGF0IHRoZVxuICAgIC8vIHZhbHVlIGlzIGltbWVkaWF0ZWx5IGF2YWlsYWJsZSAodGhhdCB0aGVyZSBpcyBubyBuZWVkIHRvIGJsb2NrIHRvIGdldCB0aGVcbiAgICAvLyB2YWx1ZSkuIElmIHRoaXMgaGFwcGVucywgd2UgZXhlY3V0ZSB0aGUgY2FsbGJhY2sgaW1tZWRpYXRlbHkgd2l0aCB0aGF0XG4gICAgLy8gdmFsdWUgYW5kIGNoYW5uZWwgYW5kIHN0b3AgcXVldWVpbmcgb3RoZXIgb3BlcmF0aW9ucy5cbiAgICBpZiAoaXNCb3gocmVzdWx0KSkge1xuICAgICAgY2FsbGJhY2soc2VsZWN0UmVzdWx0KHJlc3VsdC52YWx1ZSwgY2hhbm5lbCkpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgLy8gSWYgbm9uZSBvZiB0aGUgb3BlcmFldGlvbnMgaW1tZWRpYXRlbHkgcmV0dXJuZWQgdmFsdWVzICh0aGV5IGFyZSBhbGxcbiAgLy8gYmxvY2tlZCksIGFuZCB3ZSBoYXZlIHNldCBhIGRlZmF1bHQgY2hhbm5lbCBvcHRpb24sIHRoZW4gcmV0dXJuIHRoZSB2YWx1ZVxuICAvLyBpZiB0aGUgZGVmYXVsdCBjaGFubmVsIHJhdGhlciB0aGFuIHdhaXRpbmcgZm9yIHRoZSBxdWV1ZWQgb3BlcmF0aW9ucyB0b1xuICAvLyBjb21wbGV0ZS5cbiAgaWYgKFxuICAgICFpc0JveChyZXN1bHQpICYmXG4gICAgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9wdGlvbnMsIFwiZGVmYXVsdFwiKVxuICApIHtcbiAgICBpZiAoYWN0aXZlLnZhbHVlKSB7XG4gICAgICBhY3RpdmUudmFsdWUgPSBmYWxzZTtcbiAgICAgIGNhbGxiYWNrKHNlbGVjdFJlc3VsdChvcHRpb25zLmRlZmF1bHQsIERFRkFVTFQpKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBDb21wbGV0ZXMgdGhlIGZpcnN0IG9wZXJhdGlvbiBhbW9uZyB0aGUgcHJvdmlkZWQgb3BlcmF0aW9ucyB0aGF0IGNvbWVzXG4gKiBhdmFpbGFibGUsIGJsb2NraW5nIHRoZSBwcm9jZXNzIHVudGlsIHRoZW4uXG4gKlxuICogYG9wZXJhdGlvbnNgIGlzIGFuIGFycmF5IHdob3NlIGVsZW1lbnRzIG11c3QgYmUgY2hhbm5lbHMgb3IgdHdvLWVsZW1lbnRcbiAqIHN1Yi1hcnJheXMgb2YgY2hhbm5lbHMgYW5kIHZhbHVlcywgaW4gYW55IGNvbWJpbmF0aW9uLiBBbiBvcGVyYXRpb24gdGhhdCBpcyBhXG4gKiBjaGFubmVsIGlzIGEgdGFrZSBvcGVyYXRpb24gb24gdGhhdCBjaGFubmVsLiBBbiBvcGVyYXRpb24gdGhhdCBpcyBhXG4gKiB0d28tZWxlbWVudCBhcnJheSBpcyBhIHB1dCBvcGVyYXRpb24gb24gdGhhdCBjaGFubmVsIHVzaW5nIHRoYXQgdmFsdWUuXG4gKiBFeGFjdGx5IG9uZSBvZiB0aGVzZSBvcGVyYXRpb25zIHdpbGwgY29tcGxldGUsIGFuZCBpdCB3aWxsIGJlIHRoZSBmaXJzdFxuICogb3BlcmF0aW9uIHRoYXQgdW5ibG9ja3MuXG4gKlxuICogVGhpcyBmdW5jdGlvbiAqbXVzdCogYmUgY2FsbGVkIGZyb20gd2l0aGluIGFuIGBhc3luY2AgZnVuY3Rpb24gYW5kIGFzIHBhcnQgb2ZcbiAqIGFuIGBhd2FpdGAgZXhwcmVzc2lvbiBpZiB0aGUgcmV0dXJuIHZhbHVlIGlzIG5lZWRlZC5cbiAqXG4gKiBXaGVuIGBzZWxlY3RgIGlzIGNvbXBsZXRlZCBhbmQgaXRzIHByb2Nlc3MgdW5ibG9ja3MsIGl0cyBgYXdhaXRgIGV4cHJlc3Npb25cbiAqIGV2YWx1YXRlcyB0byBhbiBvYmplY3Qgb2YgdHdvIHByb3BlcnRpZXMuIFRoZSBgdmFsdWVgIHByb3BlcnR5IGJlY29tZXNcbiAqIGV4YWN0bHkgd2hhdCB3b3VsZCBoYXZlIGJlZW4gcmV0dXJuZWQgYnkgdGhlIGVxdWl2YWxlbnQgYGF3YWl0IHB1dGAgb3IgYGF3YWl0XG4gKiB0YWtlYCBvcGVyYXRpb246IGEgYm9vbGVhbiBpbiB0aGUgY2FzZSBvZiBhIHB1dCwgb3IgdGhlIHRha2VuIHZhbHVlIGluIHRoZVxuICogY2FzZSBvZiBhIHRha2UuIFRoZSBgY2hhbm5lbGAgcHJvcGVydHkgaXMgc2V0IHRvIHRoZSBjaGFubmVsIHdoZXJlIHRoZVxuICogb3BlcmF0aW9uIGFjdHVhbGx5IHRvb2sgcGxhY2UuIFRoaXMgd2lsbCBiZSBlcXVpdmFsZW50IHRvIHRoZSBjaGFubmVsIGluIHRoZVxuICogYG9wZXJhdGlvbnNgIGFycmF5IHdoaWNoIGNvbXBsZXRlZCBmaXJzdCwgYWxsb3dpbmcgdGhlIHByb2Nlc3MgdG8gdW5ibG9jay5cbiAqXG4gKiBJZiB0aGVyZSBpcyBtb3JlIHRoYW4gb25lIG9wZXJhdGlvbiBhbHJlYWR5IGF2YWlsYWJsZSB0byBjb21wbGV0ZSB3aGVuIHRoZVxuICogY2FsbCB0byBgc2VsZWN0YCBpcyBtYWRlLCB0aGUgb3BlcmF0aW9uIHdpdGggdGhlIGhpZ2hlc3QgcHJpb3JpdHkgd2lsbCBiZSB0aGVcbiAqIG9uZSB0byBjb21wbGV0ZS4gUmVndWxhcmx5LCBwcmlvcml0eSBpcyBub24tZGV0ZXJtaW5pc3RpYyAoaS5lLiwgaXQncyBzZXRcbiAqIHJhbmRvbWx5KS4gSG93ZXZlciwgaWYgdGhlIG9wdGlvbnMgb2JqZWN0IGhhcyBhIGBwcmlvcml0eWAgdmFsdWUgc2V0IHRvXG4gKiBgdHJ1ZWAsIHByaW9yaXR5IHdpbGwgYmUgYXNzaWduZWQgaW4gdGhlIG9yZGVyIG9mIHRoZSBvcGVyYXRpb25zIGluIHRoZVxuICogc3VwcGxpZWQgYXJyYXkuXG4gKlxuICogSWYgYWxsIG9mIHRoZSBvcGVyYXRpb25zIG11c3QgYmxvY2sgKGkuZS4sIHRoZXJlIGFyZSBubyBwZW5kaW5nIHB1dHMgZm9yIHRha2VcbiAqIG9wZXJhdGlvbnMsIG9yIHRha2VzIGZvciBwdXQgb3BlcmF0aW9ucyksIGEgZGVmYXVsdCB2YWx1ZSBtYXkgYmUgcmV0dXJuZWQuXG4gKiBUaGlzIGlzIG9ubHkgZG9uZSBpZiB0aGVyZSBpcyBhIGBkZWZhdWx0YCBwcm9wZXJ0eSBpbiB0aGUgb3B0aW9ucyBvYmplY3QsIGFuZFxuICogdGhlIHZhbHVlIG9mIHRoYXQgcHJvcGVydHkgYmVjb21lcyB0aGUgdmFsdWUgcmV0dXJuZWQgYnkgYGF3YWl0IHNlbGVjdGAuIFRoZVxuICogY2hhbm5lbCBpcyBzZXQgdG8gdGhlIHNwZWNpYWwgdmFsdWUgYHtAbGluayBtb2R1bGU6Y3NwLkRFRkFVTFR8REVGQVVMVH1gLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcGFyYW0ge29iamVjdFtdfSBvcGVyYXRpb25zIEEgY29sbGVjdGlvbiBvZiBlbGVtZW50cyB0aGF0IGNvcnJlc3BvbmQgdG8gcmVjdlxuICogICAgIGFuZCBzZW5kIG9wZXJhdGlvbnMuIEEgcmVjdiBvcGVyYXRpb24gaXMgc2lnbmlmaWVkIGJ5IGFuIGVsZW1lbnQgdGhhdCBpc1xuICogICAgIGEgY2hhbm5lbCAod2hpY2ggaXMgdGhlIGNoYW5uZWwgdG8gYmUgdGFrZW4gZnJvbSkuIEEgc2VuZCBvcGVyYXRpb24gaXNcbiAqICAgICBzcGVjaWZpZWQgYnkgYW4gZWxlbWVudCB0aGF0IGlzIGl0c2VsZiBhIHR3by1lbGVtZW50IGFycmF5LCB3aGljaCBoYXMgYVxuICogICAgIGNoYW5uZWwgZm9sbG93ZWQgYnkgYSB2YWx1ZSAod2hpY2ggaXMgdGhlIGNoYW5uZWwgYW5kIHZhbHVlIHRvIGJlIHNlbnQpLlxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zPXt9XSBBbiBvcHRpb25hbCBvYmplY3Qgd2hpY2ggY2FuIGNoYW5nZSB0aGUgYmVoYXZpb3JcbiAqICAgICBvZiBgc2VsZWN0YCB0aHJvdWdoIHR3byBwcm9wZXJ0aWVzLlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5wcmlvcml0eT1mYWxzZV0gSWYgYHRydWVgLCB0aGVuIHRoZSBwcmlvcml0eSBvZlxuICogICAgIG9wZXJhdGlvbnMgdG8gY29tcGxldGUgd2hlbiBtb3JlIHRoYW4gb25lIGlzIGltbWVkaWF0ZWx5IGF2YWlsYWJsZSBpcyBhXG4gKiAgICAgcHJpb3JpdHkgYWNjb3JkaW5nIHRvIHBvc2l0aW9uIHdpdGhpbiB0aGUgb3BlcmF0aW9ucyBhcnJheSAoZWFybGllclxuICogICAgIHBvc2l0aW9ucyBoYXZlIHRoZSBoaWdoZXIgcHJpb3JpdHkpLiBJZiBgZmFsc2VgIG9yIG5vdCBwcmVzZW50LCB0aGVcbiAqICAgICBwcmlvcnR5IG9mIG9wZXJhdGlvbiBjb21wbGV0aW9uIGlzIHJhbmRvbS5cbiAqIEBwYXJhbSB7Kn0gW29wdGlvbnMuZGVmYXVsdF0gSWYgc2V0IGFuZCBhbGwgb2YgdGhlIG9wZXJhdGlvbnMgaW5pdGlhbGx5XG4gKiAgICAgYmxvY2ssIHRoZSBgc2VsZWN0YCBjYWxsIGNvbXBsZXRlcyBpbW1lZGlhdGVseSB3aXRoIHRoZSB2YWx1ZSBvZiB0aGlzXG4gKiAgICAgb3B0aW9uICh0aGUgY2hhbm5lbCB3aWxsIGJlIGB7QGxpbmsgbW9kdWxlOmNzcC5ERUZBVUxUfERFRkFVTFR9KWAuIElmIG5vdFxuICogICAgIHNldCwgdGhlIGBzZWxlY3RgIGNhbGwgd2lsbCBibG9jayB1bnRpbCBvbmUgb2YgdGhlIG9wZXJhdGlvbnMgY29tcGxldGVzXG4gKiAgICAgYW5kIHRoYXQgdmFsdWUgYW5kIGNoYW5uZWwgd2lsbCBiZSB0aGUgb25lcyByZXR1cm5lZC5cbiAqIEByZXR1cm4ge1Byb21pc2U8bW9kdWxlOmNzcC5TZWxlY3RSZXN1bHQ+fSBBIHByb21pc2UgdGhhdCB3aWxsIHJlc29sdmUgdG8gYW5cbiAqICAgICBvYmplY3Qgb2YgdHdvIHByb3BlcnRpZXM6IGB2YWx1ZWAgd2lsbCBjb250YWluIHRoZSB2YWx1ZSB0aGF0IHdvdWxkIGhhdmVcbiAqICAgICBiZWVuIHJldHVybmVkIGJ5IHRoZSBjb3JyZXNwb25kaW5nIGB7QGxpbmsgbW9kdWxlOmNzcC5zZW5kfHNlbmR9YCBvclxuICogICAgIGB7QGxpbmsgbW9kdWxlOmNzcC5yZWN2fHJlY3Z9YCBvcGVyYXRpb247IGFuZCBgY2hhbm5lbGAgd2lsbCBiZSBhXG4gKiAgICAgcmVmZXJlbmNlIHRvIHRoZSBjaGFubmVsIHRoYXQgY29tcGxldGVkIHRoZSBvcGVyYXRpb24gdG8gYWxsb3cgYHNlbGVjdGBcbiAqICAgICB0byB1bmJsb2NrLlxuICovXG5mdW5jdGlvbiBzZWxlY3Qob3BzLCBvcHRpb25zID0ge30pIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgIHNlbGVjdEFzeW5jKG9wcywgcmVzb2x2ZSwgb3B0aW9ucyk7XG4gIH0pO1xufVxuXG4vKipcbiAqIEEgY29udmVuaWVuY2UgZnVuY3Rpb24gdG8gcmVhZCB0aGUgdmFsdWUgb3V0IG9mIGEgc2VsZWN0IHJlc3VsdC4gVGhpc1xuICogZnVuY3Rpb24gaXMgbm90IG5lY2Vzc2FyeSAtIGFmdGVyIGFsbCwgaXQncyBhYnNvbHV0ZWx5IGFzIGNvcnJlY3QgdG8gc2ltcGx5XG4gKiB1c2UgYHJlc3VsdC52YWx1ZWAgaW5zdGVhZCBvZiBgdmFsdWUocmVzdWx0KWAsIGJ1dCBpdCdzIHByb3ZpZGVkIGZvclxuICogY29uc2lzdGVuY3kgd2l0aCB0aGUgcmVzdCBvZiB0aGUgZnVuY3Rpb24tY2VudHJpYyBBUEkuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5TZWxlY3RSZXN1bHR9IHJlc3VsdCBUaGUgcmVzdWx0IGNvbWluZyBmcm9tIGEgc2VsZWN0XG4gKiAgICAgb3BlcmF0aW9uLlxuICogQHJldHVybiB7Kn0gVGhlIHZhbHVlIHByb3ZpZGVkIGJ5IHRoZSBzZWxlY3Qgb3BlcmF0aW9uLlxuICovXG5mdW5jdGlvbiB2YWx1ZShyZXN1bHQpIHtcbiAgcmV0dXJuIHJlc3VsdC52YWx1ZTtcbn1cblxuLyoqXG4gKiBBIGNvbnZlbmllbmNlIGZ1bmN0aW9uIHRvIHJlYWQgdGhlIGNoYW5uZWwgb3V0IG9mIGEgc2VsZWN0IHJlc3VsdC4gVGhpc1xuICogZnVuY3Rpb24gaXMgbm90IG5lY2Vzc2FyeSAtIGFmdGVyIGFsbCwgaXQncyBhYnNvbHV0ZWx5IGFzIGNvcnJlY3QgdG8gc2ltcGx5XG4gKiB1c2UgYHJlc3VsdC5jaGFubmVsYCBpbnN0ZWFkIG9mIGBjaGFubmVsKHJlc3VsdClgLCBidXQgaXQncyBwcm92aWRlZCBmb3JcbiAqIGNvbnNpc3RlbmN5IHdpdGggdGhlIHJlc3Qgb2YgdGhlIGZ1bmN0aW9uLWNlbnRyaWMgQVBJLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuU2VsZWN0UmVzdWx0fSByZXN1bHQgVGhlIHJlc3VsdCBjb21pbmcgZnJvbSBhIHNlbGVjdFxuICogICAgIG9wZXJhdGlvbi5cbiAqIEByZXR1cm4ge21vZHVsZTpjc3AuQ2hhbm5lbH0gVGhlIGNoYW5uZWwgdXBvbiB3aGljaCB0aGUgc2VsZWN0IG9wZXJhdGlvblxuICogICAgIGNvbXBsZXRlZC5cbiAqL1xuZnVuY3Rpb24gY2hhbm5lbChyZXN1bHQpIHtcbiAgcmV0dXJuIHJlc3VsdC5jaGFubmVsO1xufVxuXG5leHBvcnQgeyBERUZBVUxULCBzZWxlY3QsIHNlbGVjdEFzeW5jLCB2YWx1ZSwgY2hhbm5lbCB9O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG5cbi8qKlxuICogVGhpcyBpcyB0aGUgcGxhY2Ugd2hlcmUgdGhlIG5ldyBKUyB0YXNrcyBhcmUgYWN0dWFsbHkgY3JlYXRlZC4gQSBxdWV1ZSBpc1xuICogbWFpbnRhaW5lZCBmb3IgdGhlbSwgYW5kIGFzIGVhY2ggYmF0Y2ggb2YgdGFza3MgYXJlIGNvbXBsZXRlZCwgdGhlIG5leHQgb25lc1xuICogcnVuLiBBcyBlYWNoIHByb2Nlc3MgcnVucywgaXQgYWRkcyB0YXNrcyB0byBiZSBydW4gdG8gdGhlIHF1ZXVlLCB3aGljaCBhcmVcbiAqIGVhY2ggcnVuIGluIHRoZWlyIG93biBKUyB0YXNrLlxuICpcbiAqIFRoZSBmdW5jdGlvbiB0aGF0IHNwYXducyB0aGUgbmV3IEpTIHRhc2sgZGVwZW5kcyBvbiBlbnZpcm9ubWVudC4gVGhlXG4gKiBgc2V0SW1tZWRpYXRlYCBmdW5jdGlvbiBpcyBwcmVmZXJyZWQgYXMgaXQncyB0aGUgZmFzdGVzdCwgbm90IHdhaXRpbmcgZm9yXG4gKiBldmVudCBxdWV1ZXMgdG8gZW1wdHkgYmVmb3JlIHNwYXduaW5nIHRoZSBuZXcgcHJvY2Vzcy4gSG93ZXZlciwgaXQgaXMgbm90IEpTXG4gKiBzdGFuZGFyZCBhbmQgY3VycmVudGx5IG9ubHkgd29ya3MgaW4gSUUgYW5kIE5vZGUuIElmIGBzZXRJbW1lZGlhdGVgIGlzbid0XG4gKiBhdmFpbGFibGUsIGFuIGF0dGVtcHQgaXMgbWFkZSB0byB1c2UgYE1lc3NhZ2VDaGFubmVsYCdzIGBvbk1lc3NhZ2VgIGlzIHRyaWVkXG4gKiBuZXh0LiBJZiB0aGF0IGlzIGFsc28gbm90IGF2YWlsYWJsZSwgdGhlbiBgc2V0VGltZW91dGAgd2l0aCBgMGAgZGVsYXkgaXNcbiAqIHVzZWQsIHdoaWNoIGlzIGF2YWlsYWJsZSBldmVyeXdoZXJlIGJ1dCB3aGljaCBpcyB0aGUgbGVhc3QgcGVyZm9ybWFudCBvZiBhbGxcbiAqIG9mIHRoZSBzb2x1dGlvbnMuXG4gKlxuICogVGhlcmUgYXJlIG90aGVyIHBvc3NpYmlsaXRpZXMgZm9yIGNyZWF0aW5nIHByb2Nlc3NlcywgYnV0IHRoZXkgd2VyZSByZWplY3RlZFxuICogYXMgb2Jzb2xldGUgKGBwcm9jZXNzLm5leHRUaWNrYCBhbmQgYG9ucmVhZHlzdGF0ZWNoYW5nZWApIG9yIHVubmVjZXNzYXJ5XG4gKiAoYHdpbmRvdy5wb3N0TWVzc2FnZWAsIHdoaWNoIHdvcmtzIGxpa2UgYE1lc3NhZ2VDaGFubmVsYCBidXQgZG9lc24ndCB3b3JrIGluXG4gKiBXZWIgV29ya2VycykuXG4gKlxuICogSXQgaXMgbm90YWJsZSBhbmQgaW1wb3J0YW50IHRoYXQgd2UgYWN0IGFzIGdvb2QgY2l0aXplbnMgaGVyZS4gVGhpc1xuICogZGlzcGF0Y2hlciBpcyBjYXBhYmxlIG9mIHRha2luZyBjb250cm9sIG9mIHRoZSBKYXZhU2NyaXB0IGVuZ2luZSB1bnRpbFxuICogdGhvdXNhbmRzLCBtaWxsaW9ucywgb3IgbW9yZSB0YXNrcyBhcmUgaGFuZGxlZC4gQnV0IHRoYXQgY291bGQgY2F1c2UgdGhlXG4gKiBzeXN0ZW0gZXZlbnQgbG9vcCB0byBoYXZlIHRvIHdhaXQgYW4gdW5hY2NlcHRhYmxlIGFtb3VudCBvZiB0aW1lLiBTbyB3ZSBsaW1pdFxuICogb3Vyc2VsdmVzIHRvIGEgYmF0Y2ggb2YgdGFza3MgYXQgYSB0aW1lLCBhbmQgaWYgdGhlcmUgYXJlIHN0aWxsIG1vcmUgdG8gYmVcbiAqIHJ1biwgd2UgbGV0IHRoZSBldmVudCBsb29wIHJ1biBiZWZvcmUgdGhhdCBuZXh0IGJhdGNoIGlzIHByb2Nlc3NlZC5cbiAqXG4gKiBUaGUgZGlzcGF0Y2hlciBpcyAqKmdsb2JhbCoqLiBUaGVyZSBpcyBhIHNpbmdsZSBpbnN0YW5jZSB0aGF0IHJ1bnMgZm9yIGFsbFxuICogY2hhbm5lbHMgYW5kIHByb2Nlc3Nlcy4gVGhpcyBpcyB0aGUgb25seSBlbGVtZW50IG9mIHRoZSBzeXN0ZW0gdGhhdCB3b3Jrc1xuICogbGlrZSB0aGlzLlxuICpcbiAqIEBtb2R1bGUgY3NwL2Rpc3BhdGNoZXJcbiAqIEBzZWUgbW9kdWxlOmNzcC5jb25maWdcbiAqIEBwcml2YXRlXG4gKi9cblxuaW1wb3J0IHtcbiAgcXVldWUgYXMgcSxcbiAgRU1QVFksXG4gIGNvdW50IGFzIHFDb3VudCxcbiAgZGVxdWV1ZSxcbiAgZW5xdWV1ZVxufSBmcm9tIFwibW9kdWxlcy9xdWV1ZVwiO1xuY29uc3QgcXVldWUgPSBxKCk7XG5cbi8qKlxuICogVGhlIGRpc3BhdGNoIG1ldGhvZCBvcHRpb24gaW5kaWNhdGluZyB0aGF0IGBzZXRJbW1lZGlhdGVgIHNob3VsZCBiZSB1c2VkIHRvXG4gKiBkaXNwYXRjaCB0YXNrcy5cbiAqXG4gKiBUaGlzIGlzIHRoZSBkZWZhdWx0IG9wdGlvbi4gRm9yIGVudmlyb25tZW50cyB0aGF0IGRvbid0IHN1cHBvcnRcbiAqIGBzZXRJbW1lZGlhdGVgLCB0aGlzIGZhbGxzIGJhY2sgdG9cbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC5NRVNTQUdFX0NIQU5ORUx8TUVTU0FHRV9DSEFOTkVMfWAuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqIEB0eXBlIHtTeW1ib2x9XG4gKiBAc2VlIHtAbGluayBtb2R1bGU6Y3NwLmNvbmZpZ3xjb25maWd9XG4gKi9cbmNvbnN0IFNFVF9JTU1FRElBVEUgPSBTeW1ib2woXCJTRVRfSU1NRURJQVRFXCIpO1xuXG4vKipcbiAqIFRoZSBkaXNwYXRjaCBtZXRob2Qgb3B0aW9uIGluZGljYXRpbmcgdGhhdCBhIGBNZXNzYWdlQ2hhbm5lbGAgc2hvdWxkIGJlIHVzZWRcbiAqIHRvIGRpc3BhdGNoIHRhc2tzLlxuICpcbiAqIEZvciBlbnZpcm9ubWVudHMgdGhhdCBkb24ndCBzdXBwb3J0IGBNZXNzYWdlQ2hhbm5lbGAsIHRoaXMgZmFsbHMgYmFjayB0b1xuICogYHtAbGluayBtb2R1bGU6Y3NwLlNFVF9USU1FT1VUfFNFVF9USU1FT1VUfWAuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqIEB0eXBlIHtTeW1ib2x9XG4gKiBAc2VlIHtAbGluayBtb2R1bGU6Y3NwLmNvbmZpZ3xjb25maWd9XG4gKi9cbmNvbnN0IE1FU1NBR0VfQ0hBTk5FTCA9IFN5bWJvbChcIk1FU1NBR0VfQ0hBTk5FTFwiKTtcblxuLyoqXG4gKiBUaGUgZGlzcGF0Y2ggbWV0aG9kIG9wdGlvbiBpbmRpY2F0aW5nIHRoYXQgYHNldFRpbWVvdXRgIHNob3VsZCBiZSB1c2VkIHRvXG4gKiBkaXNwYXRjaCB0YXNrcy5cbiAqXG4gKiBUaGlzIG1ldGhvZCBpcyBhbHdheXMgYXZhaWxhYmxlLCBidXQgaXQncyBhbHNvIGFsd2F5cyBsZXNzIGVmZmljaWVudCB0aGFuIGFueVxuICogb3RoZXIgbWV0aG9kLCBzbyBpdCBzaG91bGQgYmUgdXNlZCBhcyBhIGxhc3QgcmVzb3J0LlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAdHlwZSB7U3ltYm9sfVxuICogQHNlZSAge0BsaW5rIG1vZHVsZTpjc3AuY29uZmlnfGNvbmZpZ31cbiAqL1xuY29uc3QgU0VUX1RJTUVPVVQgPSBTeW1ib2woXCJTRVRfVElNRU9VVFwiKTtcblxuY29uc3Qgb3B0aW9ucyA9IHtcbiAgYmF0Y2hTaXplOiAxMDI0LFxuICBkaXNwYXRjaE1ldGhvZDogU0VUX0lNTUVESUFURVxufTtcblxubGV0IGRpc3BhdGNoZXIgPSBjcmVhdGVEaXNwYXRjaGVyKCk7XG5sZXQgcnVubmluZyA9IGZhbHNlO1xubGV0IHF1ZXVlZCA9IHRydWU7XG5cbi8qKlxuICogQ3JlYXRlcyBhbmQgcmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgY2FuIGJlIHVzZWQgdG8gZGlzcGF0Y2ggdGFza3MuIFRoZVxuICogZnVuY3Rpb24gdGhhdCBpcyBjcmVhdGVkIGRlcGVuZHMgb24gdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBgZGlzcGF0Y2hNZXRob2RgXG4gKiB0aGF0IGNhbiBiZSBzZXQgd2l0aCBge0BsaW5rIG1vZHVsZTpjc3AuY29uZmlnfGNvbmZpZ31gLlxuICpcbiAqIEByZXR1cm4gQSBkaXNwYXRjaGVyIGZ1bmN0aW9uIHVzaW5nIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgZGlzcGF0Y2ggbWV0aG9kLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY3JlYXRlRGlzcGF0Y2hlcigpIHtcbiAgc3dpdGNoIChjYWxjRGlzcGF0Y2hNZXRob2QoKSkge1xuICAgIC8vIFdlIHByZWZlciBgc2V0SW1tZWRpYXRlYCBpZiBpdCdzIGF2YWlsYWJsZSwgYnV0IGl0J3Mgb25seSBhdmFpbGFibGUgaW5cbiAgICAvLyBOb2RlIGFuZCBzb21lIG9sZCBicm93c2Vycy5cbiAgICBjYXNlIFNFVF9JTU1FRElBVEU6XG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBpZiAoIShxdWV1ZWQgJiYgcnVubmluZykpIHtcbiAgICAgICAgICBxdWV1ZWQgPSB0cnVlO1xuICAgICAgICAgIHNldEltbWVkaWF0ZShwcm9jZXNzVGFza3MpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgLy8gTW9zdCBtb2Rlcm4gYnJvd3NlcnMgaW1wbGVtZW50IGBNZXNzYWdlQ2hhbm5lbGAuIFRoaXMgaXMgdGhlIHByZWZlcnJlZFxuICAgIC8vIG1ldGhvZCBpbiBicm93c2VyIGVudmlyb25tZW50cyB3aGVyZSBgc2V0SW1tZWRpYXRlYCBpc24ndCBhdmFpbGFibGUuXG4gICAgY2FzZSBNRVNTQUdFX0NIQU5ORUw6IHtcbiAgICAgIGNvbnN0IGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gKCkgPT4gcHJvY2Vzc1Rhc2tzKCk7XG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBpZiAoIShxdWV1ZWQgJiYgcnVubmluZykpIHtcbiAgICAgICAgICBxdWV1ZWQgPSB0cnVlO1xuICAgICAgICAgIGNoYW5uZWwucG9ydDIucG9zdE1lc3NhZ2UoMCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gSWYgYWxsIGVsc2UgZmFpbHMsIGp1c3QgdXNlIGBzZXRUaW1lb3V0YC4gSXQncyBhIGxpdHRsZSBzbG93ZXIgdGhhbiB0aGVcbiAgICAvLyBvdGhlciBtZXRob2RzLCBidXQgaXQncyBhdmFpbGFibGUgZXZlcnl3aGVyZS5cbiAgICBjYXNlIFNFVF9USU1FT1VUOlxuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgaWYgKCEocXVldWVkICYmIHJ1bm5pbmcpKSB7XG4gICAgICAgICAgcXVldWVkID0gdHJ1ZTtcbiAgICAgICAgICBzZXRUaW1lb3V0KHByb2Nlc3NUYXNrcywgMCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gIH1cbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBhY3R1YWwgZGlzcGF0Y2ggbWV0aG9kIGJhc2VkIG9uIHRoZSBjdXJyZW50IGRpc3BhdGNoIG1ldGhvZFxuICogc2V0dGluZyBhbmQgZW52aXJvbm1lbnRhbCBhdmFpbGFiaWxpdHkuXG4gKlxuICogVGhlIGRpc3BhdGNoIG1ldGhvZCBpcyBzdG9yZWQgcmF3LCBzbyB0aGlzIGZ1bmN0aW9uIGlzIG5lY2Vzc2FyeSB0byB0YWtlXG4gKiBlbnZpcm9ubWVudCBpbnRvIGFjY291bnQuIEZvciBleGFtcGxlLCBpZiB3ZSdyZSBydW5uaW5nIGluIGEgbW9kZXJuIGJyb3dzZXJcbiAqICh3aGljaCBkb2VzIG5vdCBoYXZlIGBzZXRJbW1lZGlhdGVgKSxcbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC5TRVRfSU1NRURJQVRFfFNFVF9JTU1FRElBVEV9YCBjYW4gc3RpbGwgYmUgcmVjb3JkZWQgYXMgdGhlXG4gKiBkaXNwYXRjaCBtZXRob2QsIGJ1dCB0aGlzIGZ1bmN0aW9uIHdpbGwgcmV0dXJuXG4gKiBge0BsaW5rIG1vZHVsZTpjc3AuTUVTU0FHRV9DSEFOTkVMfE1FU1NBR0VfQ0hBTk5FTH1gLlxuICpcbiAqIEByZXR1cm4ge1N5bWJvbH0gVGhlIGRpc3BhdGNoIG1ldGhvZCB0byB1c2UgYmFzZWQgb24gc2V0dGluZyBhbmQgZW52aXJvbm1lbnQuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjYWxjRGlzcGF0Y2hNZXRob2QoKSB7XG4gIHN3aXRjaCAob3B0aW9ucy5kaXNwYXRjaE1ldGhvZCkge1xuICAgIGNhc2UgTUVTU0FHRV9DSEFOTkVMOlxuICAgICAgaWYgKHR5cGVvZiBNZXNzYWdlQ2hhbm5lbCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICByZXR1cm4gTUVTU0FHRV9DSEFOTkVMO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFNFVF9USU1FT1VUO1xuXG4gICAgY2FzZSBTRVRfVElNRU9VVDpcbiAgICAgIHJldHVybiBTRVRfVElNRU9VVDtcblxuICAgIGRlZmF1bHQ6XG4gICAgICBpZiAodHlwZW9mIHNldEltbWVkaWF0ZSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICByZXR1cm4gU0VUX0lNTUVESUFURTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgTWVzc2FnZUNoYW5uZWwgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgcmV0dXJuIE1FU1NBR0VfQ0hBTk5FTDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBTRVRfVElNRU9VVDtcbiAgfVxufVxuXG4vKipcbiAqIFRoZSBoZWFydCBvZiB0aGUgZGlzcGF0Y2ggcHJvY2VzcywgdGhpcyBpcyB0aGUgZnVuY3Rpb24gcnVuIGJ5IHRoZSBkaXNwYXRjaFxuICogZnVuY3Rpb24gaW4gb3JkZXIgdG8gYWN0dWFsbHkgcnVuIHF1ZXVlZCB0YXNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBwcm9jZXNzVGFza3MoKSB7XG4gIHJ1bm5pbmcgPSB0cnVlO1xuICBxdWV1ZWQgPSBmYWxzZTtcbiAgbGV0IGNvdW50ID0gMDtcblxuICBmb3IgKDs7KSB7XG4gICAgY29uc3QgdGFzayA9IGRlcXVldWUocXVldWUpO1xuICAgIGlmICh0YXNrID09PSBFTVBUWSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgdGFzaygpO1xuXG4gICAgaWYgKGNvdW50ID49IG9wdGlvbnMuYmF0Y2hTaXplKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgY291bnQrKztcblxuICAgIHJ1bm5pbmcgPSBmYWxzZTtcbiAgICBpZiAocUNvdW50KHF1ZXVlKSkge1xuICAgICAgZGlzcGF0Y2hlcigpO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIENyZWF0ZXMgYW5kIGFzc2lnbnMgdGhlIGdsb2JhbCBkaXNwYXRjaCBmdW5jdGlvbiBiYXNlZCBvbiBkaXNwYXRjaCBtZXRob2RcbiAqIHNldHRpbmcgYW5kIGVudmlyb25tZW50YWwgYXZhaWxhYmlsaXR5LlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHNldERpc3BhdGNoZXIoKSB7XG4gIGRpc3BhdGNoZXIgPSBjcmVhdGVEaXNwYXRjaGVyKCk7XG59XG5cbi8qKlxuICogVGhlIGNvbmZpZ3VyYXRpb24gb2YgdGhlIENoYW5rbyBkaXNwYXRjaGVyLiBBbiBvYmplY3QgbGlrZSB0aGlzIGlzIHJldHVybmVkXG4gKiBmcm9tIHRoZSB7QGxpbmsgbW9kdWxlOmNzcC5jb25maWd9IGZ1bmN0aW9uLCBhbmQgaXQgbWF5IGFsc28gYmUgcGFzc2VkIHRvIHRoZVxuICogc2FtZSBmdW5jdGlvbiAodGhvdWdoIGVhY2ggcHJvcGVydHkgaXMgb3B0aW9uYWwgaW4gdGhhdCBjYXNlKS5cbiAqXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBEaXNwYXRjaGVyQ29uZmlnXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICogQHByb3BlcnR5IHtudW1iZXJ9IGJhdGNoU2l6ZSBUaGUgbWF4aW11bSBudW1iZXIgb2YgdGFza3MgdGhhdCB0aGUgZGlzcGF0Y2hlclxuICogICAgIHdpbGwgcnVuIGluIGEgc2luZ2xlIGJhdGNoLlxuICogQHByb3BlcnR5IHtTeW1ib2x9IGRpc3BhdGNoTWV0aG9kIFRoZSBtZXRob2QgdXNlZCB0byBkaXNwYXRjaCBhIHByb2Nlc3MgaW50b1xuICogICAgIGEgc2VwYXJhdGUgbGluZSBvZiBleGVjdXRpb24uXG4gKi9cblxuLyoqXG4gKiBTZXRzIG9uZSBvciBtb3JlIG9mIHRoZSBkaXNwYXRjaGVyIGNvbmZpZ3VyYXRpb24gb3B0aW9ucy5cbiAqXG4gKiBUaGlzIGlzIGFkdmFuY2VkIHNldHRpbmcgZm9yIHRoZSBkaXNwYXRjaGVyIHRoYXQgaXMgcmVzcG9uc2libGUgZm9yIHF1ZXVlaW5nXG4gKiB1cCBjaGFubmVsIG9wZXJhdGlvbnMgYW5kIHByb2Nlc3Nlcy4gSXQgaXMgbGlrZWx5IHRoYXQgdGhpcyBmdW5jdGlvbiB3aWxsXG4gKiBuZXZlciBuZWVkIHRvIGJlIGNhbGxlZCBpbiBub3JtYWwgb3BlcmF0aW9uLlxuICpcbiAqIElmIGFueSByZWNvZ25pemVkIG9wdGlvbnMgYXJlIHNwZWNpZmllZCBpbiB0aGUgb3B0aW9ucyBvYmplY3QgcGFzc2VkIHRvXG4gKiBgY29uZmlnYCwgdGhlbiB0aGUgb3B0aW9uIGlzIHNldCB0byB0aGUgdmFsdWUgc2VudCBpbi4gUHJvcGVydGllcyB0aGF0IGFyZW4ndFxuICogYW55IG9mIHRoZXNlIG9wdGlvbnMgYXJlIGlnbm9yZWQsIGFuZCBhbnkgb2YgdGhlc2Ugb3B0aW9ucyB0aGF0IGRvIG5vdCBhcHBlYXJcbiAqIGluIHRoZSBwYXNzZWQgb2JqZWN0IGFyZSBsZWZ0IHdpdGggdGhlaXIgY3VycmVudCB2YWx1ZXMuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIEEgbWFwcGluZyBvZiBvcHRpb25zIHRvIHRoZWlyIG5ldyB2YWx1ZXMuIEV4dHJhIHZhbHVlc1xuICogICAgIChwcm9wZXJ0aWVzIHRoYXQgYXJlIG5vdCBvcHRpb25zKSBhcmUgaWdub3JlZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0cy5iYXRjaFNpemVdIFRoZSBtYXhpbXVtIG51bWJlciBvZiB0YXNrcyB0aGF0IHRoZVxuICogICAgIGRpc3BhdGNoZXIgd2lsbCBydW4gaW4gYSBzaW5nbGUgYmF0Y2ggKGluaXRpYWxseSwgdGhpcyBpcyAxMDI0KS4gSWYgdGhlXG4gKiAgICAgbnVtYmVyIG9mIHBlbmRpbmcgdGFza3MgZXhjZWVkcyB0aGlzLCB0aGUgcmVtYWluaW5nIGFyZSBub3QgZGlzY2FyZGVkLlxuICogICAgIFRoZXkncmUgc2ltcGx5IHJ1biBhcyBwYXJ0IG9mIGFub3RoZXIgYmF0Y2ggYWZ0ZXIgdGhlIGN1cnJlbnQgYmF0Y2hcbiAqICAgICBjb21wbGV0ZXMuXG4gKiBAcGFyYW0ge1N5bWJvbH0gW29wdHMuZGlzcGF0Y2hNZXRob2RdIFRoZSBtZXRob2QgdXNlZCB0byBkaXNwYXRjaCBhIHByb2Nlc3NcbiAqICAgICBpbnRvIGEgc2VwYXJhdGUgbGluZSBvZiBleGVjdXRpb24uIFBvc3NpYmxlIHZhbHVlcyBhcmVcbiAqICAgICBge0BsaW5rIG1vZHVsZTpjc3AuU0VUX0lNTUVESUFURXxTRVRfSU1NRURJQVRFfWAsXG4gKiAgICAgYHtAbGluayBtb2R1bGU6Y3NwLk1FU1NBR0VfQ0hBTk5FTHxNRVNTQUdFX0NIQU5ORUx9YCwgb3JcbiAqICAgICBge0BsaW5rIG1vZHVsZTpjc3AuU0VUX1RJTUVPVVR8U0VUX1RJTUVPVVR9YCwgd2l0aCB0aGUgaW5pdGlhbCBiZWluZ1xuICogICAgIGB7QGxpbmsgbW9kdWxlOmNzcC5TRVRfSU1NRURJQVRFfFNFVF9JTU1FRElBVEV9YC4gSWYgYSBtZXRob2QgaXMgc2V0IGJ1dFxuICogICAgIGlzIG5vdCBhdmFpbGFibGUgaW4gdGhhdCBlbnZpcm9ubWVudCwgdGhlbiBpdCB3aWxsIHNpbGVudGx5IGZhbGwgYmFjayB0b1xuICogICAgIHRoZSBuZXh0IG1ldGhvZCB0aGF0IGlzIGF2YWlsYWJsZS5cbiAqIEByZXR1cm4ge21vZHVsZTpjc3AuRGlzcGF0Y2hlckNvbmZpZ30gVGhlIGNvbmZpZ3VyYXRpb24gc2V0dGluZ3MgZm9yIHRoZVxuICogICAgIGRpc3BhdGNoZXIgYWZ0ZXIgYW55IG5ldyB2YWx1ZXMgaGF2ZSBiZWVuIHNldC5cbiAqL1xuZnVuY3Rpb24gY29uZmlnKG9wdHMgPSB7fSkge1xuICBmb3IgKGNvbnN0IGtleSBpbiBvcHRpb25zKSB7XG4gICAgaWYgKGtleSBpbiBvcHRzKSB7XG4gICAgICBvcHRpb25zW2tleV0gPSBvcHRzW2tleV07XG5cbiAgICAgIGlmIChrZXkgPT09IFwiZGlzcGF0Y2hNZXRob2RcIikge1xuICAgICAgICBzZXREaXNwYXRjaGVyKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zKTtcbn1cblxuLyoqXG4gKiBRdWV1ZXMgYSB0YXNrIHRvIGJlIHJ1biBhbmQgc3RhcnRzIHRoZSBkaXNwYXRjaCBwcm9jZXNzLlxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IHRhc2sgQSB0YXNrIHRvIGJlIHF1ZXVlZCBhbmQgcnVuIHRoZSBuZXh0IHRpbWUgYSBiYXRjaCBvZlxuICogICAgIHRhc2tzIGlzIHJ1bi5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGRpc3BhdGNoKHRhc2spIHtcbiAgZW5xdWV1ZShxdWV1ZSwgdGFzayk7XG4gIGRpc3BhdGNoZXIoKTtcbn1cblxuZXhwb3J0IHsgU0VUX0lNTUVESUFURSwgTUVTU0FHRV9DSEFOTkVMLCBTRVRfVElNRU9VVCwgY29uZmlnLCBkaXNwYXRjaCB9O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG5cbi8qKlxuICogUHJvdmlkZXMgc21hbGwgdXRpbGl0eSBmdW5jdGlvbnMgdG8gbWFrZSBpdCBlYXNpZXIgdG8gaW50ZXJhY3Qgd2l0aCBhc3luY1xuICogZnVuY3Rpb25zIGFzIHByb2Nlc3Nlcy5cbiAqXG4gKiBAbW9kdWxlIGNzcC9wcm9jZXNzXG4gKiBAcHJpdmF0ZVxuICovXG5cbmltcG9ydCB7IHRpbWVkQ2hhbiwgcmVjdkFzeW5jIH0gZnJvbSBcIm1vZHVsZXMvY2hhbm5lbFwiO1xuXG4vKipcbiAqIEJsb2NrcyB0aGUgcHJvY2VzcyBmb3IgdGhlIHNwZWNpZmllZCB0aW1lIChpbiBtaWxsaXNlY29uZHMpIGFuZCB0aGVuIHVuYmxvY2tzXG4gKiBpdC5cbiAqXG4gKiBUaGlzIGltcGxlbWVudHMgYSBkZWxheSwgYnV0IG9uZSB0aGF0J3Mgc3VwZXJpb3IgdG8gb3RoZXIga2luZHMgb2YgZGVsYXlzXG4gKiAoYHNldFRpbWVvdXRgLCBldGMuKSBiZWNhdXNlIGl0IGJsb2NrcyB0aGUgcHJvY2VzcyBhbmQgYWxsb3dzIHRoZSBkaXNwYXRjaGVyXG4gKiB0byBhbGxvdyBvdGhlciBwcm9jZXNzZXMgdG8gcnVuIHdoaWxlIHRoaXMgb25lIHdhaXRzLiBUaGUgZGVmYXVsdCBkZWxheSBpcyAwLFxuICogd2hpY2ggd2lsbCByZWxlYXNlIHRoZSBwcm9jZXNzIHRvIGFsbG93IG90aGVycyB0byBydW4gYW5kIHRoZW4gaW1tZWRpYXRlbHlcbiAqIHJlLXF1ZXVlIGl0LlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gKm11c3QqIGJlIGNhbGxlZCBmcm9tIHdpdGhpbiBhbiBgYXN5bmNgIGZ1bmN0aW9uIGFuZCBhcyBwYXJ0IG9mXG4gKiBhbiBgYXdhaXRgIGV4cHJlc3Npb24uXG4gKlxuICogV2hlbiB0aGlzIGZ1bmN0aW9uIGNvbXBsZXRlcyBhbmQgaXRzIHByb2Nlc3MgdW5ibG9ja3MsIHRoZSBgYXdhaXRgIGV4cHJlc3Npb25cbiAqIGRvZXNuJ3QgdGFrZSBvbiBhbnkgbWVhbmluZ2Z1bCB2YWx1ZS4gVGhlIHB1cnBvc2Ugb2YgdGhpcyBmdW5jdGlvbiBpcyBzaW1wbHlcbiAqIHRvIGRlbGF5LCBub3QgdG8gY29tbXVuaWNhdGUgYW55IGRhdGEuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqIEBwYXJhbSB7bnVtYmVyfSBbZGVsYXk9MF0gdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdGhhdCB0aGUgcHJvY2VzcyB3aWxsXG4gKiAgICAgYmxvY2sgZm9yLiBBdCB0aGUgZW5kIG9mIHRoYXQgdGltZSwgdGhlIHByb2Nlc3MgaXMgYWdhaW4gZWxpZ2libGUgdG8gYmVcbiAqICAgICBydW4gYnkgdGhlIGRpc3BhdGNoZXIuIElmIHRoaXMgaXMgbWlzc2luZyBvciBzZXQgdG8gYDBgLCB0aGUgcHJvY2VzcyB3aWxsXG4gKiAgICAgY2VkZSBleGVjdXRpb24gdG8gdGhlIG5leHQgb25lIGJ1dCBpbW1lZGlhdGVseSByZXF1ZXVlIGl0c2VsZiB0byBiZSBydW5cbiAqICAgICBhZ2Fpbi5cbiAqIEByZXR1cm4ge1Byb21pc2V9IEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggbm8gbWVhbmluZ2Z1bCByZXN1bHQgd2hlbiB0aGVcbiAqICAgICB0aW1lIGhhcyBlbGFwc2VkLlxuICovXG5mdW5jdGlvbiBzbGVlcChkZWxheSA9IDApIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgIGNvbnN0IGNoID0gdGltZWRDaGFuKGRlbGF5KTtcbiAgICByZWN2QXN5bmMoY2gsIHJlc29sdmUpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBJbnZva2VzIGFuIGFzeW5jIGZ1bmN0aW9uIGFjdGluZyBhcyBhIHByb2Nlc3MuXG4gKlxuICogVGhpcyBpcyBwdXJlbHkgYSBjb252ZW5pZW5jZSBmdW5jdGlvbiwgZHJpdmVuIGJ5IHRoZSBmYWN0IHRoYXQgaXQncyBuZWNlc3NhcnlcbiAqIHRvIHVzZSBhbiBJSUZFIHRvIGludm9rZSBhbiBhbm9ueW1vdXMgYXN5bmMgZnVuY3Rpb24sIGFuZCB0aGF0J3Mgbm90IHZlcnlcbiAqIGFlc3RoZXRpY2FsbHkgcGxlYXNpbmcuIEl0IGRvZXMgbm8gbW9yZSB0aGFuIGludm9rZSB0aGUgcGFzc2VkIGZ1bmN0aW9uLCBidXRcbiAqIHRoYXQgYXQgbGVhc3QgcmVsZWFzZXMgdXMgZnJvbSB0aGUgbmVlZCB0byBwdXQgdGhlIGVtcHR5IHBhcmVudGhlc2VzIGFmdGVyXG4gKiB0aGUgZnVuY3Rpb24gZGVmaW5pdGlvbi5cbiAqXG4gKiBBIG5hbWVkIGFzeW5jIGZ1bmN0aW9uIGNhbiBzaW1wbHkgYmUgaW52b2tlZCAod2l0aG91dCBiZWluZyBhbiBJSUZFKSBhbmRcbiAqIGRvZXNuJ3QgYmVuZWZpdCBmcm9tIHRoaXMgY29udmVuaWVuY2UuXG4gKlxuICogQW5vbnltb3VzIHByb2Nlc3Mgd2l0aG91dCBgZ29gOlxuICogYGBgXG4gKiAoYXN5bmMgKCkgPT4ge1xuICogICAuLi4gZG8gc29tZSBwcm9jZXNzIHN0dWZmIGhlcmUgLi4uXG4gKiB9KSgpO1xuICogYGBgXG4gKiBBbm9ueW1vdXMgcHJvY2VzcyB3aXRoIGBnb2A6XG4gKiBgYGBcbiAqIGdvKGFzeW5jICgpID0+IHtcbiAqICAgLi4uIGRvIHNvbWUgcHJvY2VzcyBzdHVmZiBoZXJlIC4uLlxuICogfSk7XG4gKiBgYGBcbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm4gVGhlIGFzeW5jIGZ1bmN0aW9uIGJlaW5nIHVzZWQgYXMgYSBwcm9jZXNzLlxuICogQHBhcmFtIHsuLi4qfSBhcmdzIEFyZ3VtZW50cyB0aGF0IGFyZSBzZW50IHRvIHRoZSBhc3luYyBmdW5jdGlvbiB3aGVuIGl0J3NcbiAqICAgICBpbnZva2VkLlxuICogQHJldHVybiB7UHJvbWlzZX0gVGhlIHByb21pc2UgcmV0dXJuZWQgYnkgdGhlIGFzeW5jIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBnbyhmbiwgLi4uYXJncykge1xuICByZXR1cm4gZm4oLi4uYXJncyk7XG59XG5cbi8qKlxuICogSm9pbnMgYWxsIG9mIHRoZSBwcm92aWRlZCBwcm9jZXNzZXMgaW50byBhIHNpbmdsZSBwcm9jZXNzLCByZXR1cm5pbmcgYVxuICogcHJvbWlzZSB0aGF0IHdyYXBzIGFsbCBvZiB0aGUgaW5kaXZpZHVhbCBwcm9jZXNzZXMnIHByb21pc2VzLiBQdXR0aW5nIHRoaXMgaW5cbiAqIGFuIGBhd2FpdGAgc3RhdGVtZW50IHdpbGwgYmxvY2sgdW50aWwgYWxsIG9mIHRoZSBwcm9jZXNzZXMgY29tcGxldGUuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqIEBwYXJhbSB7Li4uZnVuY3Rpb259IGZucyBBbnkgbnVtYmVyIG9mIGFzeW5jIGZ1bmN0aW9ucyB3aG9zZSByZXNvbHV0aW9ucyBhcmVcbiAqICAgICBiZWluZyB3YWl0ZWQgZm9yLlxuICogQHJldHVybiB7UHJvbWlzZX0gQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBhbGwgb2YgdGhlIHByb2Nlc3NlcyBwcm9taXNlc1xuICogICAgIHJlc29sdmUuXG4gKi9cbmZ1bmN0aW9uIGpvaW4oLi4uZm5zKSB7XG4gIHJldHVybiBQcm9taXNlLmFsbChmbnMpO1xufVxuXG5leHBvcnQgeyBzbGVlcCwgZ28sIGpvaW4gfTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG4vKipcbiAqIFRoZSBtYXBwaW5nIG9mIHByb3RvY29sIG5hbWVzIHRvIHRoZWlyIHJlc3BlY3RpdmUgcHJvcGVydHkga2V5IG5hbWVzLiBUaGVcbiAqIHZhbHVlcyBvZiB0aGlzIG1hcCB3aWxsIGRlcGVuZCBvbiB3aGV0aGVyIHN5bWJvbHMgYXJlIGF2YWlsYWJsZS5cbiAqXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBQcm90b2NvbE1hcFxuICogQG1lbWJlcm9mIG1vZHVsZTpjb3JlXG4gKiBAcHJvcGVydHkge1N5bWJvbH0gaW5pdCBUaGUgYHRyYW5zZHVjZXIvaW5pdGAgcHJvdG9jb2wuIFRoaXMgaXMgdXNlZFxuICogICAgIHRvIG1hcmsgZnVuY3Rpb25zIHRoYXQgaW5pdGlhbGl6ZSBhIHRhcmdldCBjb2xsZWN0aW9uIGJlZm9yZSBhZGRpbmcgaXRlbXNcbiAqICAgICB0byBpdC5cbiAqIEBwcm9wZXJ0eSB7U3ltYm9sfSBzdGVwIFRoZSBgdHJhbnNkdWNlci9zdGVwYCBwcm90b2NvbC4gVGhpcyBpcyB1c2VkXG4gKiAgICAgdG8gbWFyayBmdW5jdGlvbnMgdGhhdCBhcmUgdXNlZCBpbiB0aGUgdHJhbnNkdWNlcidzIHN0ZXAgcHJvY2Vzcywgd2hlcmVcbiAqICAgICBvYmplY3RzIGFyZSBhZGRlZCB0byB0aGUgdGFyZ2V0IGNvbGxlY3Rpb24gb25lIGF0IGEgdGltZS5cbiAqIEBwcm9wZXJ0eSB7U3ltYm9sfSByZXN1bHQgVGhlIGB0cmFuc2R1Y2VyL3Jlc3VsdGAgcHJvdG9jb2wuIFRoaXMgaXNcbiAqICAgICB1c2VkIHRvIG1hcmsgZnVuY3Rpb25zIHRoYXQgdGFrZSB0aGUgZmluYWwgcmVzdWx0IG9mIHRoZSBzdGVwIHByb2Nlc3MgYW5kXG4gKiAgICAgcmV0dXJuIHRoZSBmaW5hbCBmb3JtIHRvIGJlIG91dHB1dC4gVGhpcyBpcyBvcHRpb25hbDsgaWYgdGhlIHRyYW5zZHVjZXJcbiAqICAgICBkb2VzIG5vdCB3YW50IHRvIHRyYW5zZm9ybSB0aGUgZmluYWwgcmVzdWx0LCBpdCBzaG91bGQganVzdCByZXR1cm4gdGhlXG4gKiAgICAgcmVzdWx0IG9mIGl0cyBjaGFpbmVkIHRyYW5zZHVjZXIncyBgcmVzdWx0YCBmdW5jdGlvbi5cbiAqIEBwcm9wZXJ0eSB7U3ltYm9sfSByZWR1Y2VkIFRoZSBgdHJhbnNkdWNlci9yZWR1Y2VkYCBwcm90b2NvbC4gVGhlXG4gKiAgICAgcHJlc2VuY2Ugb2YgdGhpcyBrZXkgb24gYW4gb2JqZWN0IGluZGljYXRlcyB0aGF0IGl0cyB0cmFuc2Zvcm1hdGlvbiBoYXNcbiAqICAgICBiZWVuIGNvbXBsZXRlZC4gSXQgaXMgdXNlZCBpbnRlcm5hbGx5IHRvIG1hcmsgY29sbGVjdGlvbnMgd2hvc2VcbiAqICAgICB0cmFuc2Zvcm1hdGlvbnMgY29uY2x1ZGUgYmVmb3JlIGV2ZXJ5IG9iamVjdCBpcyBpdGVyYXRlZCBvdmVyIChhcyBpblxuICogICAgIGB7QGxpbmsgeGR1Y2UudGFrZX1gIHRyYW5zZHVjZXJzLikgSXQgaXMgb2YgbGl0dGxlIHVzZSBiZXlvbmQgdHJhbnNkdWNlclxuICogICAgIGF1dGhvcmluZy5cbiAqIEBwcm9wZXJ0eSB7U3ltYm9sfSB2YWx1ZSBUaGUgYHRyYW5zZHVjZXIvdmFsdWVgIHByb3RvY29sLiBUaGlzIGlzXG4gKiAgICAgdXNlZCBpbnRlcm5hbGx5IHRvIG1hcmsgcHJvcGVydGllcyB0aGF0IGNvbnRhaW4gdGhlIHZhbHVlIG9mIGEgcmVkdWNlZFxuICogICAgIHRyYW5zZm9ybWF0aW9uLiBJdCBpcyBvZiBsaXR0bGUgdXNlIGJleW9uZCB0cmFuc2R1Y2VyIGF1dGhvcmluZy5cbiAqL1xuXG4vKipcbiAqIFRoZSBtYXBwaW5nIG9mIHByb3RvY29sIG5hbWVzIHRvIHRoZWlyIHJlc3BlY3RpdmUgcHJvcGVydHkga2V5IG5hbWVzLlxuICpcbiAqIEB0eXBlIHttb2R1bGU6Y3NwLlByb3RvY29sTWFwfVxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqL1xuY29uc3QgcHJvdG9jb2xzID0gT2JqZWN0LmNyZWF0ZShudWxsLCB7XG4gIGluaXQ6IHtcbiAgICB2YWx1ZTogU3ltYm9sLmZvcihcInRyYW5zZHVjZXIvaW5pdFwiKVxuICB9LFxuICBzdGVwOiB7XG4gICAgdmFsdWU6IFN5bWJvbC5mb3IoXCJ0cmFuc2R1Y2VyL3N0ZXBcIilcbiAgfSxcbiAgcmVzdWx0OiB7XG4gICAgdmFsdWU6IFN5bWJvbC5mb3IoXCJ0cmFuc2R1Y2VyL3Jlc3VsdFwiKVxuICB9LFxuICByZWR1Y2VkOiB7XG4gICAgdmFsdWU6IFN5bWJvbC5mb3IoXCJ0cmFuc2R1Y2VyL3JlZHVjZWRcIilcbiAgfSxcbiAgdmFsdWU6IHtcbiAgICB2YWx1ZTogU3ltYm9sLmZvcihcInRyYW5zZHVjZXIvdmFsdWVcIilcbiAgfVxufSk7XG5cbmV4cG9ydCB7IHByb3RvY29scyB9O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG5cbi8qKlxuICogUHJvdmlkZXMgYW4gZWZmaWNpZW50IGdlbmVyYWwtcHVycG9zZSBxdWV1ZS5cbiAqXG4gKiBAbW9kdWxlIGNzcC9xdWV1ZVxuICogQHByaXZhdGVcbiAqL1xuXG4vKipcbiAqIEEgZ2VuZXJhbCBwdXJwb3NlLCBoaWdobHkgZWZmaWNpZW50IEphdmFTY3JpcHQgcXVldWUuIEl0IGlzIGJhY2tlZCBieSBhXG4gKiBKYXZhU2NyaXB0IGFycmF5LCBidXQgaXQgZG9lcyBub3QgdXNlIGB1bnNoaWZ0YCB0byB0YWtlIGVsZW1lbnRzIG9mZiB0aGVcbiAqIGFycmF5IGJlY2F1c2UgdW5zaGlmdCBjYXVzZXMgZWxlbWVudHMgdG8gYmUgY29waWVkIGV2ZXJ5IHRpbWUgaXQncyB1c2VkLlxuICogSW5zdGVhZCwgYSBwb2ludGVyIGlzIG1haW50YWluZWQgdGhhdCBrZWVwcyB0cmFjayBvZiB0aGUgbG9jYXRpb24gb2YgdGhlIG5leHRcbiAqIGVsZW1lbnQgdG8gYmUgZGVxdWV1ZWQsIGFuZCB3aGVuIHRoYXQgZGVxdWV1ZSBoYXBwZW5zLCB0aGUgcG9pbnRlciBzaW1wbHlcbiAqIG1vdmVzLiBXaGVuIHRoZSBlbXB0eSBzcGFjZSBhdCB0aGUgaGVhZCBvZiB0aGUgYXJyYXkgZ2V0cyBsYXJnZSBlbm91Z2gsIGl0J3NcbiAqIHJlbW92ZWQgYnkgYSBzaW5nbGUgc2xpY2Ugb3BlcmF0aW9uLlxuICpcbiAqIFB1dHRpbmcgZWxlbWVudHMgaW50byB0aGUgcXVldWUgaXMganVzdCBkb25lIHdpdGggYSBiYXNpYyBgcHVzaGAsIHdoaWNoICppcypcbiAqIGhpZ2hseSBlZmZpY2llbnQuXG4gKlxuICogVGhpcyB0eXBlIG9mIHF1ZXVlIGlzIHBvc3NpYmxlIGluIEphdmFTY3JpcHQgYmVjYXVzZSBKUyBhcnJheXMgYXJlIHJlc2l6YWJsZS5cbiAqIEluIGxhbmd1YWdlcyB3aXRoIGZpeGVkLXNpemUgYXJyYXlzLCBhIHJlc2l6aW5nIG9wZXJhdGlvbiB3b3VsZCBoYXZlIHRvIGJlXG4gKiBydW4gZWFjaCB0aW1lIHRoZSBxdWV1ZSBmaWxscy5cbiAqXG4gKiBAbmFtZXNwYWNlIFF1ZXVlXG4gKiBAcHJpdmF0ZVxuICovXG5cbi8qKlxuICogVGhlIHZhbHVlIHJldHVybmVkIHdoZW4gYSBxdWV1ZSBpcyByZWFkIHdoZW4gaXQncyBlbXB0eS5cbiAqXG4gKiBUaGlzIHNwZWNpYWwgdmFsdWUgaXMgdXNlZCBiZWNhdXNlIGBudWxsYCBhbmQgYHVuZGVmaW5lZGAgYXJlIHBvc3NpYmxlXG4gKiBsZWdpdGltYXRlIHZhbHVlcyB0aGF0IGNhbiBiZSBzdG9yZWQgaW4gYSBxdWV1ZS4gQW5vdGhlciBvcHRpb24gaXMgdG8gdXNlXG4gKiBzb21lIGtpbmQgb2YgYE1heWJlYCBvciBgT3B0aW9uYCB0eXBlLCBidXQgdGhhdCByZXF1aXJlcyBtb3JlIGVmZm9ydCBvbiB0aGVcbiAqIHBhcnQgb2YgdGhlIGVuZCB1c2VyIHRvIGludGVyZmFjZSB3aXRoLlxuICpcbiAqIEB0eXBlIHtTeW1ib2x9XG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICovXG5jb25zdCBFTVBUWSA9IFN5bWJvbChcIkVNUFRZXCIpO1xuXG4vKipcbiAqIEEgbWFya2VyIHByb3BlcnR5IG5hbWUgdG8gaW5kaWNhdGUgdGhhdCBhbiBvYmplY3QgaXMgaW4gZmFjdCBhIHF1ZXVlLlxuICpcbiAqIEEgcXVldWUgaGFzIGEgcHJvcGVydHkgd2l0aCB0aGlzIG5hbWUgd2hvc2UgcmVhZG9ubHkgdmFsdWUgaXMgc2V0IHRvIGB0cnVlYC5cbiAqIFRoaXMgaXMgbm90IG1lYW50IHRvIGJlIHJlYWQgZXhjZXB0IGJ5IHRoZVxuICogYHtAbGluayBtb2R1bGU6cXVldWUuaXNRdWV1ZXxpc1F1ZXVlfWAgZnVuY3Rpb24uXG4gKlxuICogQHR5cGUge1N5bWJvbH1cbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IFFVRVVFID0gU3ltYm9sKFwiUVVFVUVcIik7XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGFuIG9iamVjdCBpcyBhIHF1ZXVlLlxuICpcbiAqIEBwYXJhbSB7Kn0gb2JqIFRoZSBvYmplY3QgdG8gYmUgdGVzdGVkLlxuICogQHJldHVybiB7Ym9vbGVhbn0gRWl0aGVyIGB0cnVlYCBpZiB0aGUgb2JqZWN0IGlzIGEgcXVldWUgb3IgYGZhbHNlYCBpZiBpdCBpc1xuICogbm90LlxuICovXG5mdW5jdGlvbiBpc1F1ZXVlKG9iaikge1xuICByZXR1cm4gISFvYmo/LltRVUVVRV07XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBxdWV1ZS4gVGhpcyBxdWV1ZSBpcyBjcmVhdGVkIGVtcHR5LCB3aXRoIGEgYmFja2luZyBhcnJheSBvZlxuICogbGVuZ3RoIDAuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3AvcXVldWVcbiAqIEByZXR1cm5zIHttb2R1bGU6Y3NwL3F1ZXVlflF1ZXVlfSBBIG5ldywgZW1wdHkgcXVldWUuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBxdWV1ZSgpIHtcbiAgcmV0dXJuIE9iamVjdC5jcmVhdGUobnVsbCwge1xuICAgIHN0b3JlOiB7XG4gICAgICB2YWx1ZTogW10sXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0sXG5cbiAgICBwb2ludGVyOiB7XG4gICAgICB2YWx1ZTogMCxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSxcblxuICAgIFtRVUVVRV06IHtcbiAgICAgIHZhbHVlOiB0cnVlXG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBudW1iZXIgb2YgZWxlbWVudHMgc3RvcmVkIGluIGEgcXVldWUuIFRoaXMgbWF5IG9yIG1heSBub3QgZXF1YWxcbiAqIHRoZSBsZW5ndGggb2YgdGhlIGJhY2tpbmcgc3RvcmUsIGFzIHRoZXJlIGlzIG9mdGVuIGVtcHR5IHNwYWNlIGF0IHRoZSBoZWFkIG9mXG4gKiB0aGUgYmFja2luZyBzdG9yZS5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcC9xdWV1ZVxuICogQHBhcmFtIHttb2R1bGU6Y3NwL3F1ZXVlflF1ZXVlfSBxdWV1ZSBUaGUgcXVldWUgd2hvc2UgaXRlbXMgYXJlIGJlaW5nXG4gKiAgICAgY291bnRlZC5cbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIG51bWJlciBvZiBpdGVtcyBpbiB0aGUgcXVldWUuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjb3VudChxdWV1ZSkge1xuICByZXR1cm4gcXVldWUuc3RvcmUubGVuZ3RoIC0gcXVldWUucG9pbnRlcjtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgYSBxdWV1ZSBpcyBlbXB0eS5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcC9xdWV1ZVxuICogQHBhcmFtIHttb2R1bGU6Y3NwL3F1ZXVlflF1ZXVlfSBxdWV1ZSBUaGUgcXVldWUgYmVpbmcgY2hlY2tlZCBmb3IgZW1wdGluZXNzLlxuICogQHJldHVybiB7Ym9vbGVhbn0gRWl0aGVyIGB0cnVlYCBpZiB0aGUgcXVldWUgaXMgZW1wdHkgb3IgYGZhbHNlYCBpZiBpdCBpc1xuICogICAgIG5vdC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGlzRW1wdHkocXVldWUpIHtcbiAgcmV0dXJuIHF1ZXVlLnN0b3JlLmxlbmd0aCA9PT0gMDtcbn1cblxuLyoqXG4gKiBBZGRzIGFuIGl0ZW0gdG8gYSBxdWV1ZS5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcC9xdWV1ZVxuICogQHBhcmFtIHttb2R1bGU6Y3NwL3F1ZXVlflF1ZXVlfSBxdWV1ZSBUaGUgcXVldWUgd2hpY2ggaXMgaGF2aW5nIGFuIGl0ZW0gYWRkZWRcbiAqICAgICB0byBpdC5cbiAqIEBwYXJhbSB7Kn0gaXRlbSBUaGUgaXRlbSBiZWluZyBhZGRlZCB0byB0aGUgcXVldWUuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBlbnF1ZXVlKHF1ZXVlLCBpdGVtKSB7XG4gIHF1ZXVlLnN0b3JlLnB1c2goaXRlbSk7XG59XG5cbi8qKlxuICogUmVtb3ZlcyBhbiBpdGVtIGZyb20gYSBxdWV1ZSBhbmQgcmV0dXJucyB0aGF0IGl0ZW0uIElmIHRoZSByZW1vdmFsIGNhdXNlcyB0aGVcbiAqIGFtb3VudCBvZiBlbXB0eSBzcGFjZSBhdCB0aGUgaGVhZCBvZiB0aGUgYmFja2luZyBzdG9yZSB0byBleGNlZWQgYSB0aHJlc2hvbGQsXG4gKiB0aGF0IGVtcHR5IHNwYWNlIGlzIHJlbW92ZWQuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3AvcXVldWVcbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC9xdWV1ZX5RdWV1ZX0gcXVldWUgVGhlIHF1ZXVlIHdob3NlIG9sZGVzdCBpdGVtIGlzIHRvIGJlXG4gKiAgICAgcmVtb3ZlZC5cbiAqIEByZXR1cm4geyp9IFRoZSBvbGRlc3Qgc3RvcmVkIGl0ZW0gaW4gdGhlIHF1ZXVlLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZGVxdWV1ZShxdWV1ZSkge1xuICBpZiAocXVldWUuc3RvcmUubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIEVNUFRZO1xuICB9XG5cbiAgY29uc3QgaXRlbSA9IHF1ZXVlLnN0b3JlW3F1ZXVlLnBvaW50ZXJdO1xuICAvLyBSZW1vdmVzIHRoZSBpdGVtcyBpbiB0aGUgYmFja2luZyBzdG9yZSBiZWZvcmUgdGhlIGN1cnJlbnQgcG9pbnRlciwgaWYgdGhlcmVcbiAgLy8gaXMgZW5vdWdoIFwiZW1wdHlcIiBzcGFjZSBiZWZvcmUgdGhlIHBvaW50ZXIgdG8ganVzdGlmeSBpdCAoaS5lLiwgdGhlIHVudXNlZFxuICAvLyBwb3J0aW9uIGlzIGF0IGxlYXN0IGhhbGYgYXMgbGFyZ2UgYXMgdGhlIHVzZWQgcG9ydGlvbilcbiAgaWYgKCsrcXVldWUucG9pbnRlciAqIDIgPj0gcXVldWUuc3RvcmUubGVuZ3RoKSB7XG4gICAgcXVldWUuc3RvcmUgPSBxdWV1ZS5zdG9yZS5zbGljZShxdWV1ZS5wb2ludGVyKTtcbiAgICBxdWV1ZS5wb2ludGVyID0gMDtcbiAgfVxuICByZXR1cm4gaXRlbTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBuZXh0IGl0ZW0gaW4gYSBxdWV1ZSB3aXRob3V0IHJlbW92aW5nIGl0LlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwL3F1ZXVlXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AvcXVldWV+UXVldWV9IHF1ZXVlIFRoZSBxdWV1ZSB3aG9zZSBvbGRlc3QgaXRlbSBpcyB0byBiZVxuICogICAgIHBlZWtlZCBhdC5cbiAqIEByZXR1cm4geyp9IFRoZSBvbGRlc3QgaXRlbSBzdG9yZWQgaW4gdGhlIHF1ZXVlLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gcGVlayhxdWV1ZSkge1xuICByZXR1cm4gcXVldWUuc3RvcmUubGVuZ3RoID09PSAwID8gRU1QVFkgOiBxdWV1ZS5zdG9yZVtxdWV1ZS5wb2ludGVyXTtcbn1cblxuLyoqXG4gKiBGaWx0ZXJzIG91dCBhbnkgaXRlbSBpbiBhIHF1ZXVlIHRoYXQgZG9lcyBub3QgY2F1c2UgdGhlIHN1cHBsaWVkIHByZWRpY2F0ZVxuICogZnVuY3Rpb24gdG8gcmV0dXJuIGB0cnVlYCB3aGVuIHBhc3NlZCB0aGF0IGl0ZW0uIFRoaXMgaXMgbm90IGV4YWN0bHkgYVxuICogZ2VuZXJhbCBwdXJwb3NlIHF1ZXVlIG9wZXJhdGlvbiwgYnV0IHdlIG5lZWQgaXQgd2l0aCBjaGFubmVscyB0aGF0IHdpbGxcbiAqIG9jY2FzaW9uYWxseSB3YW50IHRvIGdldCByaWQgb2YgaW5hY3RpdmUgaGFuZGxlcnMuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3AvcXVldWVcbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC9xdWV1ZX5RdWV1ZX0gcXVldWUgVGhlIHF1ZXVlIGJlaW5nIGZpbHRlcmVkLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm4gVGhlIHByZWRpY2F0ZSBmdW5jdGlvbiB0aGF0IGRldGVybWluZXMgd2hldGhlciBhblxuICogICAgIGVsZW1lbnQgcmVtYWlucyBpbiB0aGUgcXVldWUuXG4gKi9cbmZ1bmN0aW9uIGZpbHRlcihxdWV1ZSwgcHJlZGljYXRlKSB7XG4gIGZvciAobGV0IGkgPSAwLCBlbmQgPSBjb3VudChxdWV1ZSk7IGkgPCBlbmQ7IGkrKykge1xuICAgIGNvbnN0IGl0ZW0gPSBkZXF1ZXVlKHF1ZXVlKTtcbiAgICBpZiAocHJlZGljYXRlKGl0ZW0pKSB7XG4gICAgICBlbnF1ZXVlKHF1ZXVlLCBpdGVtKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IHtcbiAgRU1QVFksXG4gIHF1ZXVlLFxuICBpc1F1ZXVlLFxuICBjb3VudCxcbiAgaXNFbXB0eSxcbiAgZW5xdWV1ZSxcbiAgZGVxdWV1ZSxcbiAgcGVlayxcbiAgZmlsdGVyXG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG5cbi8qKlxuICogQSBzZXQgb2YgdXRpbGl0eSBmdW5jdGlvbnMgdGhhdCBnaXZlIG9uZSBvciBtb3JlIGNoYW5uZWxzIHNvbWUgZXh0cmFcbiAqIGZ1bmN0aW9uYWxpdHkuIEVhY2ggb2YgdGhlc2UgYWNjZXB0IG9uZSBvciBtb3JlIHtAbGluayBtb2R1bGU6Y3NwLkNoYW5uZWx9XG4gKiBvYmplY3RzIGFuZCB0aGVuIGNvbWJpbmUgb3IgbWFuaXB1bGF0ZSB0aGVtIGluIChob3BlZnVsbHkpIHVzZWZ1bCB3YXlzLCBzdWNoXG4gKiBhcyBtZXJnaW5nIHRoZW0sIHNwbGl0dGluZyB0aGVtLCByZWR1Y2luZyB2YWx1ZXMgdGhleSByZWNlaXZlIHRvIGEgc2luZ2xlXG4gKiB2YWx1ZSwgb3IgdGhyb3R0bGluZyB0aGVtIHNvIHRoYXQgdGhleSBvbmx5IHByb2R1Y2Ugb25lIHJlc3VsdCBpbiBhIGdpdmVuXG4gKiB0aW1lIHBlcmlvZC5cbiAqXG4gKiBAbW9kdWxlIGNzcC1vcHNcbiAqL1xuXG5leHBvcnQge1xuICBtYXAsXG4gIG1lcmdlLFxuICBwYXJ0aXRpb24sXG4gIHBpcGUsXG4gIHNwbGl0LFxuICB0YXAsXG4gIHVudGFwLFxuICB1bnRhcEFsbFxufSBmcm9tIFwibW9kdWxlcy9mbG93XCI7XG5leHBvcnQgeyByZWR1Y2UsIHRvQ2hhbm5lbCwgdG9BcnJheSB9IGZyb20gXCJtb2R1bGVzL2NvbnZlcnNpb25cIjtcbmV4cG9ydCB7IGRlYm91bmNlLCB0aHJvdHRsZSB9IGZyb20gXCJtb2R1bGVzL3RpbWluZ1wiO1xuXG4vKipcbiAqIEEgZnVuY3Rpb24gdGhhdCB0YWtlcyBhIHNpbmdsZSB2YWx1ZSBhbmQsIGRlcGVuZGluZyBvbiB3aGV0aGVyIHRoYXQgdmFsdWVcbiAqIG1lZXRzIHRoZSBmdW5jdGlvbidzIGNyaXRlcmlhIGZvciBwYXNzaW5nLCByZXR1cm5zIGB0cnVlYCBvciBgZmFsc2VgLlxuICpcbiAqIEBjYWxsYmFjayBQcmVkaWNhdGVcbiAqIEBtZW1iZXJvZiBtb2R1bGU6b3BzXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0LiBXaGV0aGVyIG9yIG5vdCB0aGUgdmFsdWUgcGFzc2VzIHRoZSB0ZXN0XG4gKiAgICAgZGVwZW5kcyBvbiB0aGUgY3JpdGVyaWEgZXN0YWJsaXNoZWQgYnkgdGhlIHByZWRpY2F0ZS5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IEVpdGhlciBgdHJ1ZWAgaWYgdGhlIHZhbHVlIHBhc3NlcyBvciBgZmFsc2VgIGlmIGl0IGRvZXNuJ3QuXG4gKi9cblxuLyoqXG4gKiBBIGZ1bmN0aW9uIHRoYXQgbWFwcyBpdHMgaW5wdXQocykgdG8gYW4gb3V0cHV0IHZhbHVlLiBJdCB0YWtlcyBhIHZhcmlhYmxlXG4gKiBudW1iZXIgb2YgaW5wdXQgdmFsdWVzIGFuZCBjYWxjdWxhdGVzIGFuIG91dHB1dCB2YWx1ZSBmcm9tIHRoZW0uXG4gKlxuICogQGNhbGxiYWNrIE1hcHBlclxuICogQG1lbWJlcm9mIG1vZHVsZTpvcHNcbiAqIEBwYXJhbSB7Li4uKn0gdmFsdWVzIFRoZSBpbnB1dCB2YWx1ZXMuXG4gKiBAcmV0dXJuIHsqfSBBbiBvdXRwdXQgdmFsdWUgY2FsY3VsYXRlZCBmcm9tIHRoZSBpbnB1dCB2YWx1ZXMuXG4gKi9cblxuLyoqXG4gKiBBIGZ1bmN0aW9uIHRoYXQgaW50ZWdyYXRlcyBvbmUgb2YgaXRzIHZhbHVlcyBpbnRvIHRoZSBvdGhlci4gSXQncyB1c2VkIGZvclxuICogcmVkdWNpbmcgY2hhbm5lbCB2YWx1ZXMgaW50byBhIHNpbmdsZSB2YWx1ZS5cbiAqXG4gKiBAY2FsbGJhY2sgUmVkdWNlclxuICogQG1lbWJlcm9mIG1vZHVsZTpvcHNcbiAqIEBwYXJhbSB7Kn0gYWNjIFRoZSBjdXJyZW50IGFjY3VtdWxhdGVkIHZhbHVlLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgbmV3IHZhbHVlIHRoYXQgbmVlZHMgdG8gYmUgaW50ZWdyYXRlZCBpbnRvIHRoZVxuICogICAgIGFjY3VtdWxhdGVkIHZhbHVlLlxuICogQHJldHVybiB7Kn0gQSBuZXcgYWNjdW11bGF0ZWQgdmFsdWUsIHJlc3VsdGluZyBmcm9tIGludGVncmF0aW5nIGB2YWx1ZWAgaW50b1xuICogICAgIHRoZSBvcmlnaW5hbCBhY2N1bXVsYXRlZCB2YWx1ZS5cbiAqL1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG5cbi8qKlxuICogVXRpbGl0eSBmdW5jdGlvbnMgdXNlZCBieSBtb3JlIHRoYW4gb25lIG90aGVyIG1vZHVsZS5cbiAqXG4gKiBAbW9kdWxlIG9wcy9jb21tb25cbiAqIEBwcml2YXRlXG4gKi9cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHZhbHVlIHBhc3NlZCBpcyBhIGZpbml0ZSBudW1iZXIuXG4gKlxuICogQHBhcmFtIHsqfSB4IFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IEVpdGhlciBgdHJ1ZWAgaWYgdGhlIHZhbHVlIGlzIGEgZmluaXRlIG51bWJlciBvciBgZmFsc2VgXG4gKiAgICAgaWYgaXQgaXMgbm90LlxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTnVtYmVyKHgpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh4KSA9PT0gXCJbb2JqZWN0IE51bWJlcl1cIiAmJiBpc0Zpbml0ZSh4KTtcbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG4vKipcbiAqIEEgc2V0IG9mIGNoYW5uZWwgdXRpbGl0aWVzIGZvciBjb252ZXJ0aW5nIGNoYW5uZWxzIGludG8gb3RoZXIga2luZHMgb2YgZGF0YSxcbiAqIGFuZCB2aWNlIHZlcnNhLlxuICpcbiAqIEBtb2R1bGUgb3BzL2NvbnZlcnNpb25cbiAqIEBwcml2YXRlXG4gKi9cblxuaW1wb3J0IHsgZ28sIGNoYW4sIHNlbmQsIHNlbmRBc3luYywgY2xvc2UgfSBmcm9tIFwiQGNoYW5rby9jc3BcIjtcblxuLyoqXG4gKiBDcmVhdGVzIGEgc2luZ2xlIHZhbHVlIGZyb20gYSBjaGFubmVsIGJ5IHJ1bm5pbmcgaXRzIHZhbHVlcyB0aHJvdWdoIGFcbiAqIHJlZHVjaW5nIGZ1bmN0aW9uLlxuICpcbiAqIEZvciBldmVyeSB2YWx1ZSBwdXQgb250byB0aGUgaW5wdXQgY2hhbm5lbCwgdGhlIHJlZHVjaW5nIGZ1bmN0aW9uIGlzIGNhbGxlZFxuICogd2l0aCB0d28gcGFyYW1ldGVyczogdGhlIGFjY3VtdWxhdG9yIHRoYXQgaG9sZHMgdGhlIHJlc3VsdCBvZiB0aGUgcmVkdWN0aW9uXG4gKiBzbyBmYXIsIGFuZCB0aGUgbmV3IGlucHV0IHZhbHVlLiBUaGUgaW5pdGlhbCB2YWx1ZSBvZiB0aGUgYWNjdW11bGF0b3IgaXMgdGhlXG4gKiB0aGlyZCBwYXJhbWV0ZXIgdG8gYHJlZHVjZWAuIFRoZSByZWR1Y3Rpb24gaXMgbm90IGNvbXBsZXRlIHVudGlsIHRoZSBpbnB1dFxuICogY2hhbm5lbCBjbG9zZXMuXG4gKlxuICogVGhpcyBmdW5jdGlvbiByZXR1cm5zIGEgY2hhbm5lbC4gV2hlbiB0aGUgZmluYWwgcmVkdWNlZCB2YWx1ZSBpcyBwcm9kdWNlZCwgaXRcbiAqIGlzIHB1dCBvbnRvIHRoaXMgY2hhbm5lbCwgYW5kIHdoZW4gdGhhdCB2YWx1ZSBpcyB0YWtlbiBmcm9tIGl0LCB0aGUgY2hhbm5lbFxuICogaXMgY2xvc2VkLlxuICpcbiAqIGBgYFxuICogaW1wb3J0IHsgZ28sIGNoYW4sIHNlbmQsIHJlY3YsIGNsb3NlIH0gZnJvbSBcIkBjc3BcIjtcbiAqIGltcG9ydCB7IHJlZHVjZSB9IGZyb20gXCJAb3BzXCI7XG4gKlxuICogY29uc3QgaW5wdXQgPSBjaGFuKCk7XG4gKiBjb25zdCBvdXRwdXQgPSByZWR1Y2UoKGFjYywgdmFsdWUpID0+IGFjYyArIHZhbHVlLCBpbnB1dCwgMCk7XG4gKlxuICogZ28oYXN5bmMgKCkgPT4ge1xuICogICBhd2FpdCBzZW5kKGlucHV0LCAxKTtcbiAqICAgYXdhaXQgc2VuZChpbnB1dCwgMik7XG4gKiAgIGF3YWl0IHNlbmQoaW5wdXQsIDMpO1xuICogICBjbG9zZShpbnB1dCk7XG4gKiB9KTtcbiAqXG4gKiBnbyhhc3luYyAoKSA9PiB7XG4gKiAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlY3Yob3V0cHV0KTtcbiAqICAgY29uc29sZS5sb2cob3V0cHV0KTsgICAgICAgICAgICAgICAgICAvLyAtPiA2XG4gKiB9KTtcbiAqXG4gKiBgYGBcbiAqXG4gKiBOb3RlIHRoYXQgdGhlIGlucHV0IGNoYW5uZWwgKm11c3QqIGJlIGNsb3NlZCBhdCBzb21lIHBvaW50LCBvciBubyB2YWx1ZSB3aWxsXG4gKiBldmVyIGFwcGVhciBvbiB0aGUgb3V0cHV0IGNoYW5uZWwuIFRoZSBjbG9zaW5nIG9mIHRoZSBjaGFubmVsIGlzIHdoYXRcbiAqIHNpZ25pZmllcyB0aGF0IHRoZSByZWR1Y3Rpb24gc2hvdWxkIGJlIGNvbXBsZXRlZC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcC1vcHNcbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC1vcHMuUmVkdWNlcn0gZm4gVGhlIHJlZHVjZXIgZnVuY3Rpb24gcmVzcG9uc2libGUgZm9yIHR1cm5pbmdcbiAqICAgICB0aGUgc2VyaWVzIG9mIGNoYW5uZWwgdmFsdWVzIGludG8gYSBzaW5nbGUgb3V0cHV0IHZhbHVlLlxuICogQHBhcmFtIHttb2R1bGU6Y3NwLkNoYW5uZWx9IGNoYW5uZWwgVGhlIGNoYW5uZWwgd2hvc2UgdmFsdWVzIGFyZSBiZWluZ1xuICogICAgIHJlZHVjZWQgaW50byBhIHNpbmdsZSBvdXRwdXQgdmFsdWUuXG4gKiBAcGFyYW0geyp9IGluaXQgVGhlIGluaXRpYWwgdmFsdWUgdG8gZmVlZCBpbnRvIHRoZSByZWR1Y2VyIGZ1bmN0aW9uIGZvciB0aGVcbiAqICAgICBmaXJzdCByZWR1Y3Rpb24gc3RlcC5cbiAqIEByZXR1cm4ge21vZHVsZTpjc3AuQ2hhbm5lbH0gQSBjaGFubmVsIHRoYXQgd2lsbCwgd2hlbiB0aGUgaW5wdXQgY2hhbm5lbFxuICogICAgIGNsb3NlcywgaGF2ZSB0aGUgcmVkdWNlZCB2YWx1ZSBwdXQgaW50byBpdC4gV2hlbiB0aGlzIHZhbHVlIGlzIHRha2VuLCB0aGVcbiAqICAgICBjaGFubmVsIHdpbGwgYXV0b21hdGljYWxseSBjbG9zZS5cbiAqL1xuZnVuY3Rpb24gcmVkdWNlKGZuLCBjaGFubmVsLCBpbml0KSB7XG4gIGNvbnN0IG91dHB1dCA9IGNoYW4oKTtcblxuICBnbyhhc3luYyAoKSA9PiB7XG4gICAgbGV0IGFjYyA9IGluaXQ7XG4gICAgZm9yIGF3YWl0IChjb25zdCB2YWx1ZSBvZiBjaGFubmVsKSB7XG4gICAgICBhY2MgPSBmbihhY2MsIHZhbHVlKTtcbiAgICB9XG4gICAgc2VuZEFzeW5jKG91dHB1dCwgYWNjLCAoKSA9PiBjbG9zZShvdXRwdXQpKTtcbiAgfSk7XG5cbiAgcmV0dXJuIG91dHB1dDtcbn1cblxuLyoqXG4gKiBTZW5kcyBhbGwgdmFsdWVzIGZyb20gYW4gaXRlcmFibGUgdG8gdGhlIHN1cHBsaWVkIGNoYW5uZWwuXG4gKlxuICogSWYgbm8gY2hhbm5lbCBpcyBwYXNzZWQgdG8gdGhpcyBmdW5jdGlvbiwgYSBuZXcgY2hhbm5lbCBpcyBjcmVhdGVkLiBJblxuICogZWZmZWN0LCB0aGlzIGRpcmVjdGx5IGNvbnZlcnRzIGFuIGl0ZXJhYmxlIGludG8gYSBjaGFubmVsIHdpdGggdGhlIHNhbWVcbiAqIHZhbHVlcyBvbiBpdC5cbiAqXG4gKiBUaGUgY2hhbm5lbCBpcyBjbG9zZWQgYWZ0ZXIgdGhlIGZpbmFsIGl0ZXJhYmxlIHZhbHVlIGlzIHNlbnQgdG8gaXQuXG4gKlxuICogVGhpcyBmdW5jdGlvbiB3aWxsIGNvbnZlcnQgYW55IEphdmFTY3JpcHQgb2JqZWN0IHRoYXQgaW1wbGVtZW50cyB0aGUgaXRlcmFibGVcbiAqIHByb3RvY29sLiBJbiBvdGhlciB3b3JkcywgaWYgaXQgd29ya3MgaW4gYSBgZm9yLi4ub2ZgIHN0YXRlbWVudCwgaXQgd2lsbCB3b3JrXG4gKiBoZXJlLlxuICpcbiAqIGBgYFxuICogaW1wb3J0IHsgZ28sIGNoYW4sIHJlY3YsIGlzQ2xvc2VkIH0gZnJvbSBcIkBjc3BcIjtcbiAqIGltcG9ydCB7IHRvQ2hhbm5lbCB9IGZyb20gXCJAb3BzXCI7XG4gKlxuICogY29uc3QgaW5wdXQgPSBbMSwgMiwgM107XG4gKiBjb25zdCBvdXRwdXQgPSB0b0NoYW5uZWwoaW5wdXQpO1xuICpcbiAqIGdvKGFzeW5jICgpID0+IHtcbiAqICAgY29uc29sZS5sb2coYXdhaXQgcmVjdihvdXRwdXQpKTsgICAgIC8vIC0+IDFcbiAqICAgY29uc29sZS5sb2coYXdhaXQgcmVjdihvdXRwdXQpKTsgICAgIC8vIC0+IDJcbiAqICAgY29uc29sZS5sb2coYXdhaXQgcmVjdihvdXRwdXQpKTsgICAgIC8vIC0+IDNcbiAqICAgY29uc29sZS5sb2coaXNDbG9zZWQob3V0cHV0KSk7ICAgICAgIC8vIC0+IHRydWVcbiAqIH0pO1xuICogYGBgXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3Atb3BzXG4gKiBAcGFyYW0ge2l0ZXJhYmxlfSBpdGVyYWJsZSBUaGUgaXRlcmFibGUgY29udGFpbmluZyB0aGUgdmFsdWVzIHRvIGJlIHNlbnQgdG9cbiAqICAgICB0aGUgY2hhbm5lbC5cbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5DaGFubmVsfSBbY2hhbm5lbF0gVGhlIGNoYW5uZWwgb250byB3aGljaCB0byBwdXQgYWxsIG9mXG4gKiAgICAgdGhlIGFycmF5IGVsZW1lbnRzLiBJZiB0aGlzIGlzIG5vdCBwcmVzZW50LCBhIG5ldyBjaGFubmVsIHdpbGwgYmVcbiAqICAgICBjcmVhdGVkLlxuICogQHJldHVybiB7bW9kdWxlOmNzcC5DaGFubmVsfSB0aGUgY2hhbm5lbCBvbnRvIHdoaWNoIHRoZSBhcnJheSBlbGVtZW50cyBhcmVcbiAqICAgICBwdXQuIFRoaXMgaXMgdGhlIHNhbWUgYXMgdGhlIGlucHV0IGNoYW5uZWwsIGJ1dCBpZiBubyBpbnB1dCBjaGFubmVsIGlzXG4gKiAgICAgc3BlY2lmaWVkLCB0aGlzIHdpbGwgYmUgYSBuZXcgY2hhbm5lbC4gSXQgd2lsbCBjbG9zZSB3aGVuIHRoZSBmaW5hbCB2YWx1ZVxuICogICAgIGlzIHRha2VuIGZyb20gaXQuXG4gKi9cbmZ1bmN0aW9uIHRvQ2hhbm5lbChpdGVyYWJsZSwgY2hhbm5lbCA9IGNoYW4oaXRlcmFibGUubGVuZ3RoKSkge1xuICBnbyhhc3luYyAoKSA9PiB7XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGl0ZXJhYmxlKSB7XG4gICAgICBhd2FpdCBzZW5kKGNoYW5uZWwsIGl0ZW0pO1xuICAgIH1cbiAgICBjbG9zZShjaGFubmVsKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGNoYW5uZWw7XG59XG5cbi8qKlxuICogUmVjZWl2ZXMgYWxsIG9mIHRoZSB2YWx1ZXMgZnJvbSBhIGNoYW5uZWwgYW5kIHB1c2hlcyB0aGVtIGludG8gYW4gYXJyYXkuXG4gKlxuICogSWYgbm8gYXJyYXkgaXMgcGFzc2VkIHRvIHRoaXMgZnVuY3Rpb24sIGEgbmV3IChlbXB0eSkgb25lIGlzIGNyZWF0ZWQuIEluXG4gKiBlZmZlY3QsIHRoaXMgZGlyZWN0bHkgY29udmVydHMgYSBjaGFubmVsIGludG8gYW4gYXJyYXkgd2l0aCB0aGUgc2FtZSB2YWx1ZXMuXG4gKiBFaXRoZXIgd2F5LCB0aGlzIG9wZXJhdGlvbiBjYW5ub3QgY29tcGxldGUgdW50aWwgdGhlIGlucHV0IGNoYW5uZWwgaXMgY2xvc2VkLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gcmV0dXJucyBhIGNoYW5uZWwuIFdoZW4gdGhlIGZpbmFsIGFycmF5IGlzIHByb2R1Y2VkLCBpdCBpcyBzZW50XG4gKiB0byB0aGlzIGNoYW5uZWwsIGFuZCB3aGVuIHRoYXQgdmFsdWUgaXMgcmVjZWl2ZWQgZnJvbSBpdCwgdGhlIGNoYW5uZWwgaXNcbiAqIGNsb3NlZC5cbiAqXG4gKiBgYGBcbiAqIGltcG9ydCB7IGdvLCBjaGFuLCBzZW5kLCByZWN2LCBjbG9zZSB9IGZyb20gXCJAY3NwXCI7XG4gKiBpbXBvcnQgeyB0b0FycmF5IH0gZnJvbSBcIkBvcHNcIjtcbiAqXG4gKiBjb25zdCBpbnB1dCA9IGNoYW4oKTtcbiAqIGNvbnN0IG91dHB1dCA9IHRvQXJyYXkoaW5wdXQpO1xuICpcbiAqIGdvKGFzeW5jICgpID0+IHtcbiAqICAgYXdhaXQgc2VuZChpbnB1dCwgMSk7XG4gKiAgIGF3YWl0IHNlbmQoaW5wdXQsIDIpO1xuICogICBhd2FpdCBzZW5kKGlucHV0LCAzKTtcbiAqICAgY2xvc2UoaW5wdXQpO1xuICogfSk7XG4gKlxuICogZ28oYXN5bmMgKCkgPT4ge1xuICogICBjb25zdCByZXN1bHQgPSBhd2FpdCByZWN2KG91dHB1dCk7XG4gKiAgIGNvbnNvbGUubG9nKHJlc3VsdCk7ICAgICAgICAgICAgICAgICAgICAgLy8gLT4gWzEsIDIsIDNdXG4gKiB9KTtcbiAqIGBgYFxuICpcbiAqIE5vdGUgdGhhdCB0aGUgaW5wdXQgY2hhbm5lbCAqbXVzdCogYmUgY2xvc2VkIGF0IHNvbWUgcG9pbnQsIG9yIG5vIHZhbHVlIHdpbGxcbiAqIGV2ZXIgYXBwZWFyIG9uIHRoZSBvdXRwdXQgY2hhbm5lbC4gVGhlIGNsb3Npbmcgb2YgdGhlIGNoYW5uZWwgaXMgd2hhdFxuICogc2lnbmlmaWVzIHRoYXQgYWxsIG9mIHRoZSB2YWx1ZXMgbmVlZGVkIHRvIG1ha2UgdGhlIGFycmF5IGFyZSBub3cgYXZhaWxhYmxlLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwLW9wc1xuICogQHBhcmFtIHttb2R1bGU6Y3NwLkNoYW5uZWx9IGNoYW5uZWwgVGhlIGNoYW5uZWwgZnJvbSB3aGljaCB2YWx1ZXMgYXJlXG4gKiAgICAgcmVjZWl2ZWQgdG8gcHV0IGludG8gdGhlIGFycmF5LlxuICogQHBhcmFtIHthcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gcHV0IHRoZSBjaGFubmVsIHZhbHVlcyBpbnRvLiBJZiB0aGlzIGlzXG4gKiAgICAgbm90IHByZXNlbnQsIGEgbmV3LCBlbXB0eSBhcnJheSB3aWxsIGJlIGNyZWF0ZWQuXG4gKiBAcmV0dXJuIHttb2R1bGU6Y3NwLkNoYW5uZWx9IEEgY2hhbm5lbCB0aGF0IHdpbGwsIHdoZW4gdGhlIGlucHV0IGNoYW5uZWxcbiAqICAgICBjbG9zZXMsIGhhdmUgdGhlIGFycmF5IG9mIGNoYW5uZWwgdmFsdWVzIHB1dCBvbnRvIGl0LiBXaGVuIHRoaXMgYXJyYXkgaXNcbiAqICAgICByZWNlaXZlZCwgdGhlIGNoYW5uZWwgd2lsbCBhdXRvbWF0aWNhbGx5IGNsb3NlLlxuICovXG5mdW5jdGlvbiB0b0FycmF5KGNoYW5uZWwsIGFycmF5ID0gW10pIHtcbiAgcmV0dXJuIHJlZHVjZShcbiAgICAoYWNjLCBpbnB1dCkgPT4ge1xuICAgICAgYWNjLnB1c2goaW5wdXQpO1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LFxuICAgIGNoYW5uZWwsXG4gICAgYXJyYXlcbiAgKTtcbn1cblxuZXhwb3J0IHsgcmVkdWNlLCB0b0NoYW5uZWwsIHRvQXJyYXkgfTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG4vKipcbiAqIEEgc2V0IG9mIGNoYW5uZWwgb3BlcmF0aW9uIGZ1bmN0aW9ucyBmb3Igcm91dGluZyBjaGFubmVscyB0byBvdGhlciBjaGFubmVsc1xuICogaW4gZGlmZmVyZW50IHdheXMuXG4gKlxuICogSW4gZWFjaCBvZiB0aGVzZSBmdW5jdGlvbnMsIHRoZSBzb3VyY2UgY2hhbm5lbCB3aWxsIG5vdCBiZSBhdmFpbGFibGUgdG8gYmVcbiAqIHRha2VuIGZyb20sIGFzIGFsbCBvZiB0aGUgc291cmNlIGNoYW5uZWxzIHdpbGwgaGF2ZSB0aGVpciB2YWx1ZXMgdGFrZW4gYnkgdGhlXG4gKiBwcm9jZXNzZXMgd2l0aGluIHRoZXNlIGZ1bmN0aW9ucy4gVGhlIGxvbmUgZXhjZXB0aW9uIGlzIGB0YXBgLCB3aGVyZSB0aGVcbiAqIHJlZ3VsYXIgZnVuY3Rpb24gb2YgdGhlIHNvdXJjZSBjaGFubmVsIHdpbGwgYmUgcmVzdG9yZWQgaWYgYWxsIHRhcHMgYXJlXG4gKiByZW1vdmVkLiBFdmVuIHNvLCB3aGlsZSBhdCBsZWFzdCBvbmUgdGFwIGlzIGluIHBsYWNlLCB0aGUgc291cmNlIGNoYW5uZWxcbiAqIGNhbm5vdCBiZSB0YWtlbiBmcm9tLlxuICpcbiAqIEBtb2R1bGUgb3BzL2Zsb3dcbiAqIEBwcml2YXRlXG4gKi9cblxuaW1wb3J0IHtcbiAgZ28sXG4gIGNoYW4sXG4gIHNlbmQsXG4gIHJlY3YsXG4gIHNlbGVjdCxcbiAgc2VuZEFzeW5jLFxuICByZWN2QXN5bmMsXG4gIGNsb3NlLFxuICBDTE9TRURcbn0gZnJvbSBcIkBjaGFua28vY3NwXCI7XG5cbmltcG9ydCB7IGlzTnVtYmVyIH0gZnJvbSBcIm1vZHVsZXMvY29tbW9uXCI7XG5cbmNvbnN0IFRBUFMgPSBTeW1ib2woXCJtdWx0aXRhcC90YXBzXCIpO1xuXG4vKipcbiAqIFBpcGVzIHRoZSB2YWx1ZXMgZnJvbSBvbmUgY2hhbm5lbCB0byBhbm90aGVyIGNoYW5uZWwuXG4gKlxuICogVGhpcyB0aWVzIHR3byBjaGFubmVscyB0b2dldGhlciBzbyB0aGF0IHB1dHMgb24gdGhlIHNvdXJjZSBjaGFubmVsIGNhbiBiZVxuICogdGFrZW4gb2ZmIHRoZSBkZXN0aW5hdGlvbiBjaGFubmVsLiBUaGlzIGRvZXMgbm90IGR1cGxpY2F0ZSB2YWx1ZXMgaW4gYW55IHdheTtcbiAqIGlmIGFub3RoZXIgcHJvY2VzcyB0YWtlcyBhIHZhbHVlIG9mZiB0aGUgc291cmNlIGNoYW5uZWwsIGl0IHdpbGwgbmV2ZXIgYXBwZWFyXG4gKiBvbiB0aGUgZGVzdGluYXRpb24gY2hhbm5lbC4gSW4gbW9zdCBjYXNlcyB5b3Ugd2lsbCBub3Qgd2FudCB0byB0YWtlIHZhbHVlc1xuICogb2ZmIGEgY2hhbm5lbCBvbmNlIGl0J3MgcGlwZWQgdG8gYW5vdGhlciBjaGFubmVsLCBzaW5jZSBpdCdzIGRpZmZpY3VsdCB0b1xuICoga25vdyB3aGljaCB2YWx1ZXMgd2lsbCBnbyB0byB3aGljaCBjaGFubmVsLlxuICpcbiAqIENsb3NpbmcgZWl0aGVyIGNoYW5uZWwgd2lsbCBicmVhayB0aGUgY29ubmVjdGlvbiBiZXR3ZWVuIHRoZSB0d28uIElmIHRoZVxuICogc291cmNlIGNoYW5uZWwgaXMgY2xvc2VkLCB0aGUgZGVzdGluYXRpb24gY2hhbm5lbCB3aWxsIGJ5IGRlZmF1bHQgYWxzbyBiZVxuICogY2xvc2VkLiBIb3dldmVyLCBwYXNzaW5nIGB0cnVlYCBhcyB0aGUgdGhpcmQgcGFyYW1ldGVyIHdpbGwgY2F1c2UgdGhlXG4gKiBkZXN0aW5hdGlvbiBjaGFubmVsIHRvIHJlbWFpbiBvcGVuIGV2ZW4gd2hlbiB0aGUgc291cmNlIGNoYW5uZWwgaXMgY2xvc2VkXG4gKiAodGhlIGNvbm5lY3Rpb24gaXMgc3RpbGwgYnJva2VuIGhvd2V2ZXIpLlxuICpcbiAqIEJlY2F1c2Ugb2YgdGhlIGFiaWxpdHkgdG8gbGVhdmUgdGhlIGRlc3RpbmF0aW9uIGNoYW5uZWwgb3BlbiwgYSBwb3NzaWJsZSB1c2VcbiAqIGNhc2UgZm9yIHRoaXMgZnVuY3Rpb24gaXMgdG8gd3JhcCB0aGUgZGVzdGluYXRpb24gY2hhbm5lbChzKSBvZiBvbmUgb2YgdGhlXG4gKiBvdGhlciBmbG93IGNvbnRyb2wgZnVuY3Rpb25zIGJlbG93IHRvIGhhdmUgYSBjaGFubmVsIHRoYXQgc3Vydml2ZXMgdGhlIHNvdXJjZVxuICogY2hhbm5lbCBjbG9zaW5nLiBUaGUgcmVzdCBvZiB0aG9zZSBmdW5jdGlvbnMgKGFzaWRlIGZyb20gdGhlIHNwZWNpYWwtY2FzZVxuICogYHtAbGluayBtb2R1bGU6Y3NwLW9wcy50YXB8dGFwfWApIGF1dG9tYXRpY2FsbHkgY2xvc2UgdGhlaXIgZGVzdGluYXRpb24gY2hhbm5lbHNcbiAqIHdoZW4gdGhlIHNvdXJjZSBjaGFubmVscyBjbG9zZS5cbiAqXG4gKiBgYGBcbiAqIGltcG9ydCB7IGdvLCBjaGFuLCBzZW5kLCByZWN2LCBjbG9zZSwgaXNDbG9zZWQgfSBmcm9tIFwiQGNzcFwiO1xuICogaW1wb3J0IHsgcGlwZSB9IGZyb20gXCJAb3BzXCI7XG4gKlxuICogY29uc3QgaW5wdXQgPSBjaGFuKCk7XG4gKiBjb25zdCBvdXRwdXQgPSBwaXBlKGlucHV0LCBjaGFuKCkpO1xuICpcbiAqIGdvKGFzeW5jICgpID0+IHtcbiAqICAgYXdhaXQgc2VuZChpbnB1dCwgMSk7XG4gKiAgIGF3YWl0IHNlbmQoaW5wdXQsIDIpO1xuICogICBjbG9zZShpbnB1dCk7XG4gKiB9KTtcbiAqXG4gKiBnbyhhc3luYyAoKSA9PiB7XG4gKiAgIGNvbnNvbGUubG9nKGF3YWl0IHJlY3Yob3V0cHV0KSk7ICAgICAgLy8gLT4gMVxuICogICBjb25zb2xlLmxvZyhhd2FpdCByZWN2KG91dHB1dCkpOyAgICAgIC8vIC0+IDJcbiAqICAgY29uc29sZS5sb2coaXNDbG9zZWQob3V0cHV0KSk7ICAgICAgICAvLyAtPiB0cnVlXG4gKiB9KTtcbiAqIGBgYFxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwLW9wc1xuICogQHBhcmFtIHttb2R1bGU6Y3NwLkNoYW5uZWx9IHNyYyBUaGUgc291cmNlIGNoYW5uZWwuXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuQ2hhbm5lbH0gZGVzdCBUaGUgZGVzdGluYXRpb24gY2hhbm5lbC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2tlZXBPcGVuPWZhbHNlXSBBIGZsYWcgdG8gaW5kaWNhdGUgdGhhdCB0aGUgZGVzdGluYXRpb25cbiAqICAgICBjaGFubmVsIHNob3VsZCBiZSBrZXB0IG9wZW4gYWZ0ZXIgdGhlIHNvdXJjZSBjaGFubmVsIGNsb3Nlcy4gQnkgZGVmYXVsdFxuICogICAgIHRoZSBkZXN0aW5hdGlvbiBjaGFubmVsIHdpbGwgY2xvc2Ugd2hlbiB0aGUgc291cmNlIGNoYW5uZWwgY2xvc2VzLlxuICogQHJldHVybiB7bW9kdWxlOmNzcC5DaGFubmVsfSBUaGUgZGVzdGluYXRpb24gY2hhbm5lbC5cbiAqL1xuZnVuY3Rpb24gcGlwZShzcmMsIGRzdCwga2VlcE9wZW4gPSBmYWxzZSkge1xuICBnbyhhc3luYyAoKSA9PiB7XG4gICAgZm9yICg7Oykge1xuICAgICAgY29uc3QgdmFsdWUgPSBhd2FpdCByZWN2KHNyYyk7XG4gICAgICBpZiAodmFsdWUgPT09IENMT1NFRCkge1xuICAgICAgICBpZiAoIWtlZXBPcGVuKSB7XG4gICAgICAgICAgY2xvc2UoZHN0KTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGlmICghKGF3YWl0IHNlbmQoZHN0LCB2YWx1ZSkpKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGRzdDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIHR3byBuZXcgY2hhbm5lbHMgYW5kIHJvdXRlcyB2YWx1ZXMgZnJvbSBhIHNvdXJjZSBjaGFubmVsIHRvIHRoZW1cbiAqIGFjY29yZGluZyB0byBhIHByZWRpY2F0ZSBmdW5jdGlvbi5cbiAqXG4gKiBUaGUgc3VwcGxpZWQgZnVuY3Rpb24gaXMgaW52b2tlZCB3aXRoIGV2ZXJ5IHZhbHVlIHRoYXQgaXMgcHV0IG9udG8gdGhlIHNvdXJjZVxuICogY2hhbm5lbC4gVGhvc2UgdGhhdCByZXR1cm4gYHRydWVgIGFyZSByb3V0ZWQgdG8gdGhlIGZpcnN0IGRlc3RpbmF0aW9uXG4gKiBjaGFubmVsOyB0aG9zZSB0aGF0IHJldHVybiBgZmFsc2VgIGFyZSByb3V0ZWQgdG8gdGhlIHNlY29uZC5cbiAqXG4gKiBUaGUgbmV3IGNoYW5uZWxzIGFyZSBjcmVhdGVkIGJ5IHRoZSBmdW5jdGlvbiBiYXNlZCBvbiB0aGUgYnVmZmVyIHZhbHVlc1xuICogcGFzc2VkIGFzIHRoZSB0aGlyZCBhbmQgZm91cnRoIHBhcmFtZXRlcnMuIElmIG9uZSBvciBib3RoIG9mIHRoZXNlIGFyZVxuICogbWlzc2luZywgYG51bGxgLCBvciBgMGAsIHRoZSBjb3JyZXNwb25kaW5nIGRlc3RpbmF0aW9uIGNoYW5uZWwgaXMgdW5idWZmZXJlZC5cbiAqIElmIG9uZSBpcyBhIHBvc2l0aXZlIGludGVnZXIsIHRoZSBjb3JyZXNwb25kaW5nIGNoYW5uZWwgaXMgYnVmZmVyZWQgYnkgYVxuICogZml4ZWQgYnVmZmVyIG9mIHRoYXQgc2l6ZS4gSWYgdGhlIHBhcmFtZXRlciBmb3IgYSBjaGFubmVsIGlzIGEgYnVmZmVyLCB0aGVuXG4gKiB0aGF0IGJ1ZmZlciBpcyB1c2VkIHRvIGJ1ZmZlciB0aGUgbmV3IGNoYW5uZWwuXG4gKlxuICogQm90aCBuZXcgY2hhbm5lbHMgYXJlIGNsb3NlZCB3aGVuIHRoZSBzb3VyY2UgY2hhbm5lbCBpcyBjbG9zZWQuXG4gKlxuICpcbiAqIGBgYFxuICogaW1wb3J0IHsgZ28sIGNoYW4sIHNlbmQsIGNsb3NlIH0gZnJvbSBcIkBjc3BcIjtcbiAqIGltcG9ydCB7IHBhcnRpdGlvbiB9IGZyb20gXCJAb3BzXCI7XG4gKlxuICogY29uc3QgaW5wdXQgPSBjaGFuKCk7XG4gKiBjb25zdCBjdHJsID0gY2hhbigpO1xuICogY29uc3QgW2V2ZW4sIG9kZF0gPSBwYXJ0aXRpb24oeCA9PiB4ICUgMiA9PT0gMCwgaW5wdXQsIDMsIDMpO1xuICpcbiAqIGdvKGFzeW5jICgpID0+IHtcbiAqICAgYXdhaXQgc2VuZChpbnB1dCwgMSk7XG4gKiAgIGF3YWl0IHNlbmQoaW5wdXQsIDIpO1xuICogICBhd2FpdCBzZW5kKGlucHV0LCAzKTtcbiAqICAgYXdhaXQgc2VuZChpbnB1dCwgNCk7XG4gKiAgIGNsb3NlKGlucHV0KTtcbiAqIH0pO1xuICpcbiAqIGdvKGFzeW5jICgpID0+IHtcbiAqICAgZm9yIGF3YWl0IChjb25zdCB2YWx1ZSBvZiBldmVuKSB7XG4gKiAgICAgY29uc29sZS5sb2codmFsdWUpO1xuICogICB9XG4gKiAgIGF3YWl0IHNlbmQoY3RybCk7XG4gKiB9KTtcbiAqXG4gKiBnbyhhc3luYyAoKSA9PiB7XG4gKiAgIGF3YWl0IHJlY3YoY3RybCk7XG4gKiAgIGZvciBhd2FpdCAoY29uc3QgdmFsdWUgb2Ygb2RkKSB7XG4gKiAgICAgY29uc29sZS5sb2codmFsdWUpO1xuICogICB9XG4gKiB9KTtcbiAqXG4gKiAvLyBUaGUgYGN0cmxgIGNoYW5uZWwgZW5zdXJlcyB0aGF0IGFsbCBvZiB0aGUgdmFsdWVzIG9uIHRoZSBldmVuIGNoYW5uZWwgYXJlXG4gKiAvLyByZWFkIGJlZm9yZSBhbnkgb2YgdGhlIHZhbHVlcyBvbiB0aGUgb2RkIGNoYW5uZWwgYXJlICh0aGlzIGlzIG9ubHlcbiAqIC8vIHBvc3NpYmxlIGJlY2F1c2UgdGhlIG91dHB1dCBjaGFubmVscyBoYXZlIGJ1ZmZlcnMgYmlnIGVub3VnaCB0byBtYWtlIHN1cmVcbiAqIC8vIHRoYXQgbm8gc2VuZCBpcyBibG9ja2VkKS5cbiAqIC8vXG4gKiAvLyAtPiAyXG4gKiAvLyAtPiA0XG4gKiAvLyAtPiAxXG4gKiAvLyAtPiAzXG4gKiBgYGBcbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcC1vcHNcbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC1vcHMuUHJlZGljYXRlfSBmbiBBIHByZWRpY2F0ZSBmdW5jdGlvbiB1c2VkIHRvIHRlc3QgZWFjaCB2YWx1ZVxuICogb24gdGhlIGlucHV0IGNoYW5uZWwuXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuQ2hhbm5lbH0gc3JjIFRoZSBzb3VyY2UgY2hhbm5lbC5cbiAqIEBwYXJhbSB7KG51bWJlcnxtb2R1bGU6Y3NwLkJ1ZmZlcil9IFt0QnVmZmVyPTBdIEEgYnVmZmVyIHVzZWQgdG8gY3JlYXRlIHRoZVxuICogICAgIGRlc3RpbmF0aW9uIGNoYW5uZWwgd2hpY2ggcmVjZWl2ZXMgYWxsIHZhbHVlcyB0aGF0IHBhc3NlZCB0aGUgcHJlZGljYXRlLlxuICogICAgIElmIHRoaXMgaXMgYSBudW1iZXIsIGEge0BsaW5rIG1vZHVsZTpjc3AuRml4ZWRCdWZmZXJ9IG9mIHRoYXQgc2l6ZSB3aWxsXG4gKiAgICAgYmUgdXNlZC4gSWYgdGhpcyBpcyBgMGAgb3Igbm90IHByZXNlbnQsIHRoZSBjaGFubmVsIHdpbGwgYmUgdW5idWZmZXJlZC5cbiAqIEBwYXJhbSB7KG51bWJlcnxtb2R1bGU6Y3NwLkJ1ZmZlcil9IFtmQnVmZmVyPTBdIEEgYnVmZmVyIHVzZWQgdG8gY3JlYXRlIHRoZVxuICogICAgIGRlc3RpbmF0aW9uIGNoYW5uZWwgd2hpY2ggcmVjZWl2ZXMgYWxsIHZhbHVlcyB0aGF0IGRpZCBub3QgcGFzcyB0aGVcbiAqICAgICBwcmVkaWNhdGUuIElmIHRoaXMgaXMgYSBudW1iZXIsIGEge0BsaW5rIG1vZHVsZTpjc3AuRml4ZWRCdWZmZXJ9IG9mIHRoYXRcbiAqICAgICBzaXplIHdpbGwgYmUgdXNlZC4gSWYgdGhpcyBpcyBgMGAgb3Igbm90IHByZXNlbnQsIHRoZSBjaGFubmVsIHdpbGwgYmVcbiAqICAgICB1bmJ1ZmZlcmVkLlxuICogQHJldHVybiB7bW9kdWxlOmNzcC5DaGFubmVsW119IEFuIGFycmF5IG9mIHR3byBjaGFubmVscy4gVGhlIGZpcnN0IGlzIHRoZVxuICogICAgIGRlc3RpbmF0aW9uIGNoYW5uZWwgd2l0aCBhbGwgb2YgdGhlIHZhbHVlcyB0aGF0IHBhc3NlZCB0aGUgcHJlZGljYXRlLCB0aGVcbiAqICAgICBzZWNvbmQgaXMgdGhlIGRlc3RpbmF0aW9uIGNoYW5uZWwgd2l0aCBhbGwgb2YgdGhlIHZhbHVlcyB0aGF0IGRpZCBub3RcbiAqICAgICBwYXNzIHRoZSBwcmVkaWNhdGUuXG4gKi9cbmZ1bmN0aW9uIHBhcnRpdGlvbihmbiwgc3JjLCB0QnVmZmVyID0gMCwgZkJ1ZmZlciA9IDApIHtcbiAgY29uc3QgdERzdCA9IGNoYW4odEJ1ZmZlcik7XG4gIGNvbnN0IGZEc3QgPSBjaGFuKGZCdWZmZXIpO1xuXG4gIGdvKGFzeW5jICgpID0+IHtcbiAgICBmb3IgKDs7KSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGF3YWl0IHJlY3Yoc3JjKTtcbiAgICAgIGlmICh2YWx1ZSA9PT0gQ0xPU0VEKSB7XG4gICAgICAgIGNsb3NlKHREc3QpO1xuICAgICAgICBjbG9zZShmRHN0KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBhd2FpdCBzZW5kKGZuKHZhbHVlKSA/IHREc3QgOiBmRHN0LCB2YWx1ZSk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gW3REc3QsIGZEc3RdO1xufVxuXG4vKipcbiAqIE1lcmdlcyBvbmUgb3IgbW9yZSBjaGFubmVscyBpbnRvIGEgc2luZ2xlIGRlc3RpbmF0aW9uIGNoYW5uZWwuXG4gKlxuICogVmFsdWVzIGFyZSBnaXZlbiB0byB0aGUgZGVzdGluYXRpb24gY2hhbm5lbCBhcyB0aGV5IGFyZSBzZW50IHRvIHRoZSBzb3VyY2VcbiAqIGNoYW5uZWxzLiBJZiBgbWVyZ2VgIGlzIGNhbGxlZCB3aGVuIHRoZXJlIGFyZSBhbHJlYWR5IHZhbHVlcyBvbiBtdWx0aXBsZVxuICogc291cmNlIGNoYW5uZWxzLCB0aGUgb3JkZXIgdGhhdCB0aGV5J3JlIHB1dCBvbnRvIHRoZSBkZXN0aW5hdGlvbiBjaGFubmVsIGlzXG4gKiByYW5kb20uXG4gKlxuICogVGhlIGRlc3RpbmF0aW9uIGNoYW5uZWwgaXMgY3JlYXRlZCBieSB0aGUgZnVuY3Rpb24gYmFzZWQgb24gdGhlIGJ1ZmZlciB2YWx1ZVxuICogcGFzc2VkIGFzIHRoZSBzZWNvbmQgcGFyYW1ldGVyLiBJZiB0aGlzIGlzIG1pc3NpbmcsIGBudWxsYCwgb3IgYDBgLCB0aGVcbiAqIGRlc3RpbmF0aW9uIGNoYW5uZWwgd2lsbCBiZSB1bmJ1ZmZlcmVkLiBJZiBpdCdzIGEgcG9zaXRpdmUgaW50ZWdlciwgdGhlXG4gKiBkZXN0aW5hdGlvbiBjaGFubmVsIGlzIGJ1ZmZlcmVkIGJ5IGEgZml4ZWQgYnVmZmVyIG9mIHRoYXQgc2l6ZS4gSWYgdGhlXG4gKiBwYXJhbWV0ZXIgaXMgYSBidWZmZXIsIHRoZW4gdGhhdCBidWZmZXIgaXMgdXNlZCB0byBidWZmZXIgdGhlIGRlc3RpbmF0aW9uXG4gKiBjaGFubmVsLlxuICpcbiAqIEFzIGVhY2ggc291cmNlIGNoYW5uZWwgY2xvc2VzLCBpdCBpcyByZW1vdmVkIGZyb20gdGhlIG1lcmdlLCBsZWF2aW5nIHRoZVxuICogY2hhbm5lbHMgdGhhdCBhcmUgc3RpbGwgb3BlbiB0byBjb250aW51ZSBtZXJnaW5nLiBXaGVuICphbGwqIG9mIHRoZSBzb3VyY2VcbiAqIGNoYW5uZWxzIGNsb3NlLCB0aGVuIHRoZSBkZXN0aW5hdGlvbiBjaGFubmVsIGlzIGNsb3NlZC5cbiAqXG4gKiBgYGBcbiAqIGltcG9ydCB7IGdvLCBjaGFuLCBzZW5kLCByZWN2IH0gZnJvbSBcIkBjc3BcIjtcbiAqIGltcG9ydCB7IG1lcmdlIH0gZnJvbSBcIkBvcHNcIjtcbiAqXG4gKiBjb25zdCBpbnB1dDEgPSBjaGFuKCk7XG4gKiBjb25zdCBpbnB1dDIgPSBjaGFuKCk7XG4gKiBjb25zdCBpbnB1dDMgPSBjaGFuKCk7XG4gKiBjb25zdCBvdXRwdXQgPSBtZXJnZShbaW5wdXQxLCBpbnB1dDIsIGlucHV0M10pO1xuICpcbiAqIGdvKGFzeW5jICgpID0+IHtcbiAqICAgLy8gQmVjYXVzZSB3ZSdyZSBzZW5kaW5nIHRvIGFsbCB0aHJlZSBjaGFubmVscyBpbiB0aGUgc2FtZVxuICogICAvLyBwcm9jZXNzLCB3ZSBrbm93IHRoZSBvcmRlciBpbiB3aGljaCB0aGUgdmFsdWVzIHdpbGwgYmVcbiAqICAgLy8gc2VudCB0byB0aGUgb3V0cHV0IGNoYW5uZWw7IGluIGdlbmVyYWwsIHdlIHdvbid0IGtub3cgdGhpc1xuICogICBhd2FpdCBzZW5kKGlucHV0MSwgMSk7XG4gKiAgIGF3YWl0IHNlbmQoaW5wdXQyLCAyKTtcbiAqICAgYXdhaXQgc2VuZChpbnB1dDMsIDMpO1xuICogfSk7XG4gKlxuICogZ28oYXN5bmMgKCkgPT4ge1xuICogICBjb25zb2xlLmxvZyhhd2FpdCByZWN2KG91dHB1dCkpOyAgICAgIC8vIC0+IDFcbiAqICAgY29uc29sZS5sb2coYXdhaXQgcmVjdihvdXRwdXQpKTsgICAgICAvLyAtPiAyXG4gKiAgIGNvbnNvbGUubG9nKGF3YWl0IHJlY3Yob3V0cHV0KSk7ICAgICAgLy8gLT4gM1xuICogfSk7XG4gKiBgYGBcbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcC1vcHNcbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5DaGFubmVsW119IHNyY3MgQW4gYXJyYXkgb2Ygc291cmNlIGNoYW5uZWxzLlxuICogQHBhcmFtIHsobnVtYmVyfG1vZHVsZTpjc3AuQnVmZmVyKX0gW2J1ZmZlcj0wXSBBIGJ1ZmZlciB1c2VkIHRvIGNyZWF0ZSB0aGVcbiAqICAgICBkZXN0aW5hdGlvbiBjaGFubmVsLiBJZiB0aGlzIGlzIGEgbnVtYmVyLCBhXG4gKiAgICAge0BsaW5rIG1vZHVsZTpjc3AuRml4ZWRCdWZmZXJ9IG9mIHRoYXQgc2l6ZSB3aWxsIGJlIHVzZWQuIElmIHRoaXMgaXMgYDBgXG4gKiAgICAgb3Igbm90IHByZXNlbnQsIHRoZSBjaGFubmVsIHdpbGwgYmUgdW5idWZmZXJlZC5cbiAqIEByZXR1cm4ge21vZHVsZTpjc3AuQ2hhbm5lbH0gVGhlIGRlc3RpbmF0aW9uIGNoYW5uZWwsIHdoaWNoIHdpbGwgcmVjZWl2ZSBhbGxcbiAqICAgICB2YWx1ZXMgcHV0IG9udG8gZXZlcnkgc291cmNlIGNoYW5uZWwuXG4gKi9cbmZ1bmN0aW9uIG1lcmdlKHNyY3MsIGJ1ZmZlciA9IDApIHtcbiAgY29uc3QgZHN0ID0gY2hhbihidWZmZXIpO1xuICBjb25zdCBpbnB1dHMgPSBzcmNzLnNsaWNlKCk7XG5cbiAgZ28oYXN5bmMgKCkgPT4ge1xuICAgIGZvciAoOzspIHtcbiAgICAgIGlmIChpbnB1dHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY29uc3QgeyB2YWx1ZSwgY2hhbm5lbCB9ID0gYXdhaXQgc2VsZWN0KGlucHV0cyk7XG4gICAgICBpZiAodmFsdWUgPT09IENMT1NFRCkge1xuICAgICAgICBpbnB1dHMuc3BsaWNlKGlucHV0cy5pbmRleE9mKGNoYW5uZWwpLCAxKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBhd2FpdCBzZW5kKGRzdCwgdmFsdWUpO1xuICAgIH1cbiAgICBjbG9zZShkc3QpO1xuICB9KTtcblxuICByZXR1cm4gZHN0O1xufVxuXG4vKipcbiAqIFNwbGl0cyBhIHNpbmdsZSBjaGFubmVsIGludG8gbXVsdGlwbGUgZGVzdGluYXRpb24gY2hhbm5lbHMsIHdpdGggZWFjaFxuICogZGVzdGluYXRpb24gY2hhbm5lbCByZWNlaXZpbmcgZXZlcnkgdmFsdWUgc2VudCB0byB0aGUgc291cmNlIGNoYW5uZWwuXG4gKlxuICogRXZlcnkgcGFyYW1ldGVyIGFmdGVyIHRoZSBmaXJzdCByZXByZXNlbnRzIHRoZSBidWZmZXIgZnJvbSBhIHNpbmdsZVxuICogZGVzdGluYXRpb24gY2hhbm5lbC4gRWFjaCBgMGAgb3IgYG51bGxgIHdpbGwgcHJvZHVjZSBhbiB1bmJ1ZmZlcmVkIGNoYW5uZWwsXG4gKiB3aGlsZSBlYWNoIHBvc2l0aXZlIGludGVnZXIgd2lsbCBwcm9kdWNlIGEgY2hhbm5lbCBidWZmZXJlZCBieSBhIGZpeGVkIGJ1ZmZlclxuICogb2YgdGhhdCBzaXplLiBFYWNoIGJ1ZmZlciB3aWxsIHByb2R1Y2UgYSBidWZmZXJlZCBjaGFubmVsIGJhY2tlZCBieSB0aGF0XG4gKiBidWZmZXIuIElmIHRoZXJlIGFyZSBubyBwYXJhbWV0ZXJzIGFmdGVyIHRoZSBmaXJzdCwgdGhlbiB0d28gdW5idWZmZXJlZFxuICogY2hhbm5lbHMgd2lsbCBiZSBwcm9kdWNlZCBhcyBhIGRlZmF1bHQuXG4gKlxuICogV2hlbiB0aGUgc291cmNlIGNoYW5uZWwgaXMgY2xvc2VkLCBhbGwgZGVzdGluYXRpb24gY2hhbm5lbHMgd2lsbCBhbHNvIGJlXG4gKiBjbG9zZWQuIEhvd2V2ZXIsIGlmIGRlc3RpbmF0aW9uIGNoYW5uZWxzIGFyZSBjbG9zZWQsIHRoZXkgZG8gbm90aGluZyB0byB0aGVcbiAqIHNvdXJjZSBjaGFubmVsLlxuICpcbiAqIGBgYFxuICogaW1wb3J0IHsgZ28sIGNoYW4sIHNlbmQgfSBmcm9tIFwiQGNzcFwiO1xuICogaW1wb3J0IHsgc3BsaXQgfSBmcm9tIFwiQG9wc1wiO1xuICpcbiAqIGNvbnN0IGlucHV0ID0gY2hhbigpO1xuICogY29uc3Qgb3V0cHV0cyA9IHNwbGl0KGlucHV0LCAzKTtcbiAqXG4gKiBnbyhhc3luYyAoKSA9PiB7XG4gKiAgIGF3YWl0IHNlbmQoaW5wdXQsIDEpO1xuICogICBhd2FpdCBzZW5kKGlucHV0LCAyKTtcbiAqICAgYXdhaXQgc2VuZChpbnB1dCwgMyk7XG4gKiB9KTtcbiAqXG4gKiBnbyhhc3luYyAoKSA9PiB7XG4gKiAgIGZvciBhd2FpdCAoY29uc3Qgb3V0cHV0IG9mIG91dHB1dHMpIHtcbiAqICAgICBjb25zb2xlLmxvZyhvdXRwdXQpO1xuICogICAgIC8vIC0+IDFcbiAqICAgICAvLyAtPiAyXG4gKiAgICAgLy8gLT4gM1xuICogICB9XG4gKiB9KTtcbiAqIGBgYFxuICpcbiAqIFRoaXMgZnVuY3Rpb24gbW92ZXMgaXRzIHZhbHVlcyB0byB0aGUgb3V0cHV0IGNoYW5uZWxzIGFzeW5jaHJvbm91c2x5LiBUaGlzXG4gKiBtZWFucyB0aGF0IGV2ZW4gd2hlbiB1c2luZyB1bmJ1ZmZlcmVkIGNoYW5uZWxzLCBpdCBpcyBub3QgbmVjZXNzYXJ5IGZvciBhbGxcbiAqIG91dHB1dCBjaGFubmVscyB0byBiZSByZWNlaXZlZCBmcm9tIGJlZm9yZSB0aGUgbmV4dCBzZW5kIHRvIHRoZSBpbnB1dCBjaGFubmVsXG4gKiBjYW4gY29tcGxldGUuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3Atb3BzXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuQ2hhbm5lbH0gc3JjIFRoZSBzb3VyY2UgY2hhbm5lbC5cbiAqIEBwYXJhbSB7Li4uKG51bWJlcnxtb2R1bGU6Y3NwLkJ1ZmZlcil9IFtidWZmZXJzPTJdIFRoZSBidWZmZXJzIHVzZWQgdG8gY3JlYXRlXG4gKiAgICAgdGhlIGRlc3RpbmF0aW9uIGNoYW5uZWxzLiBFYWNoIGVudHJ5IGlzIHRyZWF0ZWQgc2VwYXJhdGVseS4gSWYgb25lIGlzIGFcbiAqICAgICBudW1iZXIsIHRoZW4gYSB7QGxpbmsgbW9kdWxlOmNzcC5GaXhlZEJ1ZmZlcnxGaXhlZEJ1ZmZlcn0gb2YgdGhhdCBzaXplXG4gKiAgICAgd2lsbCBiZSB1c2VkLiBJZiBvbmUgaXMgYSBgMGAsIHRoZW4gdGhlIGNvcnJlc3BvbmRpbmcgY2hhbm5lbCB3aWxsIGJlXG4gKiAgICAgdW5idWZmZXJlZC4gKipFeGNlcHRpb246KiogaWYgYSBzaW5nbGUgbnVtYmVyIGlzIHBhc3NlZCwgdGhlbiB0aGF0IG51bWJlclxuICogICAgIG9mIHVuYnVmZXJyZWQgY2hhbm5lbHMgd2lsbCBiZSBjcmVhdGVkLiBUaGlzIG1lYW5zIHRoYXQgdGhlIGRlZmF1bHQgaXMgdG9cbiAqICAgICBjcmVhdGUgdHdvIHVuYnVmZmVyZWQgY2hhbm5lbHMuIFRvIGNyZWF0ZSBhIHNpbmdsZSBjaGFubmVsIHdpdGggYSBmaXhlZFxuICogICAgIGJ1ZmZlciwgdXNlIGB7QGxpbmsgY3NwLmZpeGVkfGZpeGVkfWAgZXhwbGljaXRseS5cbiAqIEByZXR1cm4ge21vZHVsZTpjc3AuQ2hhbm5lbFtdfSBBbiBhcnJheSBvZiBkZXN0aW5hdGlvbiBjaGFubmVscy5cbiAqL1xuZnVuY3Rpb24gc3BsaXQoc3JjLCAuLi5idWZmZXJzKSB7XG4gIGxldCBiZnMgPSBidWZmZXJzLmxlbmd0aCA9PT0gMCA/IFsyXSA6IGJ1ZmZlcnM7XG4gIGlmIChiZnMubGVuZ3RoID09PSAxICYmIGlzTnVtYmVyKGJmc1swXSkpIHtcbiAgICBjb25zdCBjb3VudCA9IGJmc1swXTtcbiAgICBiZnMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgIGJmcy5wdXNoKDApO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGRzdHMgPSBiZnMubWFwKGJmID0+IGNoYW4oYmYpKTtcbiAgY29uc3QgZG9uZSA9IGNoYW4oKTtcbiAgbGV0IGNvdW50ID0gMDtcblxuICBmdW5jdGlvbiBjYWxsYmFjaygpIHtcbiAgICBpZiAoLS1jb3VudCA9PT0gMCkge1xuICAgICAgc2VuZEFzeW5jKGRvbmUpO1xuICAgIH1cbiAgfVxuXG4gIGdvKGFzeW5jICgpID0+IHtcbiAgICBmb3IgKDs7KSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGF3YWl0IHJlY3Yoc3JjKTtcbiAgICAgIGlmICh2YWx1ZSA9PT0gQ0xPU0VEKSB7XG4gICAgICAgIGZvciAoY29uc3QgZHN0IG9mIGRzdHMpIHtcbiAgICAgICAgICBjbG9zZShkc3QpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjb3VudCA9IGRzdHMubGVuZ3RoO1xuICAgICAgZm9yIChjb25zdCBkc3Qgb2YgZHN0cykge1xuICAgICAgICBzZW5kQXN5bmMoZHN0LCB2YWx1ZSwgY2FsbGJhY2spO1xuICAgICAgfVxuICAgICAgYXdhaXQgcmVjdihkb25lKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBkc3RzO1xufVxuXG4vKipcbiAqIFV0aWxpdHkgZnVuY3Rpb24gdG8gYWRkIHRoZSBhYmlsaXR5IHRvIGJlIHRhcHBlZCB0byBhIGNoYW5uZWwgdGhhdCBpcyBiZWluZ1xuICogdGFwcGVkLiBUaGlzIHdpbGwgYWRkIGEgc2luZ2xlIHByb3BlcnR5IHRvIHRoYXQgY2hhbm5lbCBvbmx5IChuYW1lZFxuICogJ0BAbXVsdGl0YXAvdGFwcycgc28gYXMgdG8gZGVjcmVhc2UgdGhlIGNoYW5jZSBvZiBjb2xsaXNpb24pLCBidXQgdGhlIHRhcHBpbmdcbiAqIGZ1bmN0aW9uYWxpdHkgaXRzZWxmIGlzIHByb3ZpZGVkIG91dHNpZGUgdGhlIGNoYW5uZWwgb2JqZWN0LiBUaGlzIG5ld1xuICogcHJvcGVydHkgaXMgYW4gYXJyYXkgb2YgdGhlIGNoYW5uZWxzIHRhcHBpbmcgdGhpcyBjaGFubmVsLCBhbmQgaXQgd2lsbCBiZVxuICogcmVtb3ZlZCBpZiBhbGwgdGFwcyBhcmUgcmVtb3ZlZC5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuQ2hhbm5lbH0gc3JjIFRoZSBzb3VyY2UgY2hhbm5lbCB0byBiZSB0YXBwZWQuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBtYWtlVGFwKHNyYykge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3JjLCBUQVBTLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgIHZhbHVlOiBbXVxuICB9KTtcblxuICBjb25zdCBkb25lID0gY2hhbigpO1xuICBsZXQgY291bnQgPSAwO1xuXG4gIGZ1bmN0aW9uIGNhbGxiYWNrKCkge1xuICAgIGlmICgtLWNvdW50ID09PSAwKSB7XG4gICAgICBzZW5kQXN5bmMoZG9uZSk7XG4gICAgfVxuICB9XG5cbiAgZ28oYXN5bmMgKCkgPT4ge1xuICAgIGZvciAoOzspIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gYXdhaXQgcmVjdihzcmMpO1xuICAgICAgaWYgKHZhbHVlID09PSBDTE9TRUQgfHwgc3JjW1RBUFNdLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBkZWxldGUgc3JjW1RBUFNdO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY291bnQgPSBzcmNbVEFQU10ubGVuZ3RoO1xuICAgICAgZm9yIChjb25zdCB0YXAgb2Ygc3JjW1RBUFNdKSB7XG4gICAgICAgIHNlbmRBc3luYyh0YXAsIHZhbHVlLCBjYWxsYmFjayk7XG4gICAgICB9XG4gICAgICBhd2FpdCByZWN2KGRvbmUpO1xuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxuICogVGFwcyBhIGNoYW5uZWwsIHNlbmRpbmcgYWxsIG9mIHRoZSB2YWx1ZXMgc2VudCB0byBpdCB0byB0aGUgZGVzdGluYXRpb25cbiAqIGNoYW5uZWwuXG4gKlxuICogQSBzb3VyY2UgY2hhbm5lbCBjYW4gYmUgdGFwcGVkIG11bHRpcGxlIHRpbWVzLCBhbmQgYWxsIG9mIHRoZSB0YXBwaW5nXG4gKiAoZGVzdGluYXRpb24pIGNoYW5uZWxzIHJlY2VpdmUgZWFjaCB2YWx1ZSBzZW50IHRvIHRoZSB0YXBwZWQgKHNvdXJjZSlcbiAqIGNoYW5uZWwuXG4gKlxuICogVGhpcyBpcyBkaWZmZXJlbnQgZnJvbSBge0BsaW5rIG1vZHVsZTpjc3Atb3BzLnNwbGl0fHNwbGl0fWAgaW4gdGhhdCBpdCdzXG4gKiB0ZW1wb3JhcnkuIENoYW5uZWxzIGNhbiB0YXAgYSBjaGFubmVsIGFuZCB0aGVuIHVudGFwIGl0LCBtdWx0aXBsZSB0aW1lcywgYXNcbiAqIG5lZWRlZC4gSWYgYSBzb3VyY2UgY2hhbm5lbCBoYXMgYWxsIG9mIGl0cyB0YXBzIHJlbW92ZWQsIHRoZW4gaXQgcmV2ZXJ0cyB0byBhXG4gKiBub3JtYWwgY2hhbm5lbCwganVzdCBhcyBpdCB3YXMgYmVmb3JlIGl0IHdhcyB0YXBwZWQuXG4gKlxuICogQWxzbyB1bmxpa2UgYHtAbGluayBtb2R1bGU6Y3NwLW9wcy5zcGxpdHxzcGxpdH1gLCBlYWNoIGNhbGwgY2FuIG9ubHkgdGFwIG9uY2UuXG4gKiBGb3IgbXVsdGlwbGUgY2hhbm5lbHMgdG8gdGFwIGEgc291cmNlIGNoYW5uZWwsIGB0YXBgIGhhcyB0byBiZSBjYWxsZWRcbiAqIG11bHRpcGxlIHRpbWVzLlxuICpcbiAqIENsb3NpbmcgZWl0aGVyIHRoZSBzb3VyY2Ugb3IgYW55IG9mIHRoZSBkZXN0aW5hdGlvbiBjaGFubmVscyBoYXMgbm8gZWZmZWN0IG9uXG4gKiBhbnkgb2YgdGhlIG90aGVyIGNoYW5uZWxzLlxuICpcbiAqIGBgYFxuICogaW1wb3J0IHsgZ28sIGNoYW4sIHNlbmQsIHJlY3YgfSBmcm9tIFwiQGNzcFwiO1xuICogaW1wb3J0IHsgdGFwIH0gZnJvbSBcIkBvcHNcIjtcbiAqXG4gKiBjb25zdCBpbnB1dCA9IGNoYW4oKTtcbiAqIGNvbnN0IHRhcHBlciA9IGNoYW4oKTtcbiAqIHRhcChpbnB1dCwgdGFwcGVyKTtcbiAqXG4gKiBnbyhhc3luYyAoKSA9PiB7XG4gKiAgIGF3YWl0IHNlbmQoaW5wdXQsIDEpO1xuICogICBhd2FpdCBzZW5kKGlucHV0LCAyKTtcbiAqIH0pO1xuICpcbiAqIGdvKGFzeW5jICgpID0+IHtcbiAqICAgY29uc29sZS5sb2coYXdhaXQgcmVjdih0YXBwZXIpKTsgICAvLyAtPiAxXG4gKiAgIGNvbnNvbGUubG9nKGF3YWl0IHJlY3YodGFwcGVyKSk7ICAgLy8gLT4gMlxuICogfSk7XG4gKlxuICogYGBgXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3Atb3BzXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuQ2hhbm5lbH0gc3JjIFRoZSBjaGFubmVsIHRvIGJlIHRhcHBlZC5cbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5DaGFubmVsfSBbZGVzdF0gVGhlIGNoYW5uZWwgdGFwcGluZyB0aGUgc291cmNlIGNoYW5uZWwuIElmXG4gKiAgICAgdGhpcyBpcyBub3QgcHJlc2VudCwgYSBuZXcgdW5idWZmZXJlZCBjaGFubmVsIHdpbGwgYmUgY3JlYXRlZC5cbiAqIEByZXR1cm4ge21vZHVsZTpjc3AuQ2hhbm5lbH0gVGhlIGRlc3RpbmF0aW9uIGNoYW5uZWwuIFRoaXMgaXMgdGhlIHNhbWUgYXMgdGhlXG4gKiAgICAgc2Vjb25kIGFyZ3VtZW50LCBpZiBwcmVzZW50OyBvdGhlcndpc2UgaXQgaXMgdGhlIG5ld2x5LWNyZWF0ZWQgY2hhbm5lbFxuICogICAgIHRhcHBpbmcgdGhlIHNvdXJjZSBjaGFubmVsLlxuICovXG5mdW5jdGlvbiB0YXAoc3JjLCBkc3QgPSBjaGFuKCkpIHtcbiAgaWYgKCFzcmNbVEFQU10pIHtcbiAgICBtYWtlVGFwKHNyYyk7XG4gIH1cbiAgaWYgKCFzcmNbVEFQU10uaW5jbHVkZXMoZHN0KSkge1xuICAgIHNyY1tUQVBTXS5wdXNoKGRzdCk7XG4gIH1cbiAgcmV0dXJuIGRzdDtcbn1cblxuLyoqXG4gKiBVbnRhcHMgYSBwcmV2aW91c2x5IHRhcHBpbmcgZGVzdGluYXRpb24gY2hhbm5lbCBmcm9tIGl0cyBzb3VyY2UgY2hhbm5lbC5cbiAqXG4gKiBUaGlzIHJlbW92ZXMgYSBwcmV2aW91c2x5IGNyZWF0ZWQgdGFwLiBUaGUgZGVzdGluYXRpb24gKHRhcHBpbmcpIGNoYW5uZWwgd2lsbFxuICogc3RvcCByZWNlaXZpbmcgdGhlIHZhbHVlcyBzZW50IHRvIHRoZSBzb3VyY2UgY2hhbm5lbC5cbiAqXG4gKiBJZiB0aGUgZGVzdGluYXRpb24gY2hhbm5lbCB3YXMgbm90LCBpbiBmYWN0LCB0YXBwaW5nIHRoZSBzb3VyY2UgY2hhbm5lbCwgdGhpc1xuICogZnVuY3Rpb24gd2lsbCBkbyBub3RoaW5nLiBJZiBhbGwgdGFwcyBhcmUgcmVtb3ZlZCwgdGhlIHNvdXJjZSBjaGFubmVsIHJldmVydHNcbiAqIHRvIG5vcm1hbCAoaS5lLiwgaXQgbm8gbG9uZ2VyIGhhcyB0aGUgdGFwcGluZyBjb2RlIGFwcGxpZWQgdG8gaXQgYW5kIGNhbiBiZVxuICogdGFrZW4gZnJvbSBhcyBub3JtYWwpLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwLW9wc1xuICogQHBhcmFtIHttb2R1bGU6Y3NwLkNoYW5uZWx9IHNyYyBUaGUgdGFwcGVkIGNoYW5uZWwuXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuQ2hhbm5lbH0gZGVzdCBUaGUgY2hhbm5lbCB0aGF0IGlzIHRhcHBpbmcgdGhlIHNvdXJjZVxuICogICAgIGNoYW5uZWwgdGhhdCBzaG91bGQgbm8gbG9uZ2VyIGJlIHRhcHBpbmcgdGhlIHNvdXJjZSBjaGFubmVsLlxuICovXG5mdW5jdGlvbiB1bnRhcChzcmMsIGRzdCkge1xuICBjb25zdCB0YXBzID0gc3JjW1RBUFNdO1xuICBpZiAodGFwcykge1xuICAgIGNvbnN0IGluZGV4ID0gdGFwcy5pbmRleE9mKGRzdCk7XG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgdGFwcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgaWYgKHRhcHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHNlbmRBc3luYyhzcmMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZXMgYWxsIHRhcHMgZnJvbSBhIHNvdXJjZSBjaGFubmVsLlxuICpcbiAqIFRoZSBwcmV2aW91c2x5LXRhcHBlZCBjaGFubmVsIHJldmVydHMgdG8gYSBub3JtYWwgY2hhbm5lbCwgd2hpbGUgYW55IGNoYW5uZWxzXG4gKiB0aGF0IG1pZ2h0IGhhdmUgYmVlbiB0YXBwaW5nIGl0IG5vIGxvbmdlciByZWNlaXZlIHZhbHVlcyBmcm9tIHRoZSBzb3VyY2VcbiAqIGNoYW5uZWwuIElmIHRoZSBzb3VyY2UgY2hhbm5lbCBoYWQgbm8gdGFwcywgdGhpcyBmdW5jdGlvbiBkb2VzIG5vdGhpbmcuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3Atb3BzXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuQ2hhbm5lbH0gc3JjIFRoZSB0YXBwZWQgY2hhbm5lbC4gQWxsIHRhcHMgd2lsbCBiZSByZW1vdmVkXG4gKiAgICAgZnJvbSB0aGlzIGNoYW5uZWwuXG4gKi9cbmZ1bmN0aW9uIHVudGFwQWxsKHNyYykge1xuICBpZiAoc3JjW1RBUFNdKSB7XG4gICAgc3JjW1RBUFNdID0gW107XG4gICAgc2VuZEFzeW5jKHNyYyk7XG4gIH1cbn1cblxuLyoqXG4gKiBNYXBzIHRoZSB2YWx1ZXMgZnJvbSBvbmUgb3IgbW9yZSBzb3VyY2UgY2hhbm5lbHMgdGhyb3VnaCBhIGZ1bmN0aW9uLCBzZW5kaW5nXG4gKiB0aGUgcmVzdWx0cyB0byBhIG5ldyBjaGFubmVsLlxuICpcbiAqIFRoZSBtYXBwaW5nIGZ1bmN0aW9uIGlzIGdpdmVuIG9uZSB2YWx1ZSBmcm9tIGVhY2ggc291cmNlIGNoYW5uZWwsIGFmdGVyIGF0XG4gKiBsZWFzdCBvbmUgdmFsdWUgYmVjb21lcyBhdmFpbGFibGUgb24gZXZlcnkgc291cmNlIGNoYW5uZWwuIFRoZSBvdXRwdXQgdmFsdWVcbiAqIGZyb20gdGhlIGZ1bmN0aW9uIGlzIHRoZW4gc2VudCB0byB0aGUgZGVzdGluYXRpb24gY2hhbm5lbC5cbiAqXG4gKiBUaGUgZGVzdGluYXRpb24gY2hhbm5lbCBpcyBjcmVhdGVkIGJ5IHRoZSBmdW5jdGlvbiBiYXNlZCBvbiB0aGUgYnVmZmVyIHZhbHVlXG4gKiBwYXNzZWQgYXMgdGhlIHRoaXJkIHBhcmFtZXRlci4gSWYgdGhpcyBpcyBtaXNzaW5nLCBgbnVsbGAsIG9yIGAwYCwgdGhlXG4gKiBkZXN0aW5hdGlvbiBjaGFubmVsIHdpbGwgYmUgdW5idWZmZXJlZC4gSWYgaXQncyBhIHBvc2l0aXZlIGludGVnZXIsIHRoZVxuICogZGVzdGluYXRpb24gY2hhbm5lbCBpcyBidWZmZXJlZCBieSBhIGZpeGVkIGJ1ZmZlciBvZiB0aGF0IHNpemUuIElmIHRoZVxuICogcGFyYW1ldGVyIGlzIGEgYnVmZmVyLCB0aGVuIHRoYXQgYnVmZmVyIGlzIHVzZWQgdG8gYnVmZmVyIHRoZSBkZXN0aW5hdGlvblxuICogY2hhbm5lbC5cbiAqXG4gKiBPbmNlICphbnkqIHNvdXJjZSBjaGFubmVsIGlzIGNsb3NlZCwgdGhlIG1hcHBpbmcgY2Vhc2VzIGFuZCB0aGUgZGVzdGluYXRpb25cbiAqIGNoYW5uZWwgaXMgYWxzbyBjbG9zZWQuXG4gKlxuICogVGhpcyBpcyBvYnZpb3VzbHkgc2ltaWxhciB0byBhIG1hcCB0cmFuc2R1Y2VyLCBidXQgdW5saWtlIGEgdHJhbnNkdWNlciwgdGhpc1xuICogZnVuY3Rpb24gd29ya3Mgd2l0aCBtdWx0aXBsZSBpbnB1dCBjaGFubmVscy4gVGhpcyBpcyBzb21ldGhpbmcgdGhhdCBhXG4gKiB0cmFuc2R1Y2VyIG9uIGEgc2luZ2xlIGNoYW5uZWwgaXMgdW5hYmxlIHRvIGRvLlxuICpcbiAqIGBgYFxuICogaW1wb3J0IHsgZ28sIGNoYW4sIHNlbmQsIHJlY3YsIGNsb3NlLCBpc0Nsb3NlZCB9IGZyb20gXCJAY3NwXCI7XG4gKiBpbXBvcnQgeyBtYXAgfSBmcm9tIFwiQG9wc1wiXG4gKlxuICogY29uc3QgaW5wdXQxID0gY2hhbigpO1xuICogY29uc3QgaW5wdXQyID0gY2hhbigpO1xuICogY29uc3QgaW5wdXQzID0gY2hhbigpO1xuICogY29uc3Qgb3V0cHV0ID0gbWFwKCh4LCB5LCB6KSA9PiB4ICsgeSArIHosIFtpbnB1dDEsIGlucHV0MiwgaW5wdXQzXSk7XG4gKlxuICogZ28oYXN5bmMgKCkgPT4ge1xuICogICBhd2FpdCBzZW5kKGlucHV0MSwgMSk7XG4gKiAgIGF3YWl0IHNlbmQoaW5wdXQxLCAyKTtcbiAqICAgYXdhaXQgc2VuZChpbnB1dDEsIDMpO1xuICogfSk7XG4gKlxuICogZ28oYXN5bmMgKCkgPT4ge1xuICogICBhd2FpdCBzZW5kKGlucHV0MiwgMTApO1xuICogICBhd2FpdCBzZW5kKGlucHV0MiwgMjApO1xuICogICBjbG9zZShpbnB1dDIpO1xuICogfSk7XG4gKlxuICogZ28oYXN5bmMgKCkgPT4ge1xuICogICBhd2FpdCBzZW5kKGlucHV0MywgMTAwKTtcbiAqICAgYXdhaXQgc2VuZChpbnB1dDMsIDIwMCk7XG4gKiAgIGF3YWl0IHNlbmQoaW5wdXQzLCAzMDApO1xuICogfSk7XG4gKlxuICogZ28oYXN5bmMgKCkgPT4ge1xuICogICBjb25zb2xlLmxvZyhhd2FpdCByZWN2KG91dHB1dCkpOyAgICAgLy8gLT4gMTExXG4gKiAgIGNvbnNvbGUubG9nKGF3YWl0IHJlY3Yob3V0cHV0KSk7ICAgICAvLyAtPiAyMjJcbiAqICAgLy8gT3V0cHV0IGNsb3NlcyBub3cgYmVjYXVzZSBpbnB1dDIgY2xvc2VzIGFmdGVyIDIgdmFsdWVzXG4gKiAgIGNvbnNvbGUubG9nKGlzQ2xvc2VkKG91dHB1dCkpOyAgICAgICAvLyAtPiB0cnVlXG4gKiB9KTtcbiAqIGBgYFxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwLW9wc1xuICogQHBhcmFtIHttb2R1bGU6Y3NwLW9wcy5NYXBwZXJ9IGZuIFRoZSBtYXBwaW5nIGZ1bmN0aW9uLiBUaGlzIHNob3VsZCBoYXZlIG9uZVxuICogICAgIHBhcmFtZXRlciBmb3IgZWFjaCBzb3VyY2UgY2hhbm5lbCBhbmQgcmV0dXJuIGEgc2luZ2xlIHZhbHVlLlxuICogQHBhcmFtIHttb2R1bGU6Y3NwLkNoYW5uZWxbXX0gc3JjcyBUaGUgc291cmNlIGNoYW5uZWxzLlxuICogQHBhcmFtIHsobnVtYmVyfG1vZHVsZTpjc3AuQnVmZmVyKX0gW2J1ZmZlcj0wXSBBIGJ1ZmZlciB1c2VkIHRvIGNyZWF0ZSB0aGVcbiAqICAgICBkZXN0aW5hdGlvbiBjaGFubmVsLiBJZiB0aGlzIGlzIGEgbnVtYmVyLCBhXG4gKiAgICAge0BsaW5rIG1vZHVsZTpjc3AuRml4ZWRCdWZmZXJ9IG9mIHRoYXQgc2l6ZSB3aWxsIGJlIHVzZWQuIElmIHRoaXMgaXMgYDBgXG4gKiAgICAgb3Igbm90IHByZXNlbnQsIHRoZSBjaGFubmVsIHdpbGwgYmUgdW5idWZmZXJlZC5cbiAqIEByZXR1cm4ge21vZHVsZTpjc3AuQ2hhbm5lbH0gVGhlIGRlc3RpbmF0aW9uIGNoYW5uZWwuXG4gKi9cbmZ1bmN0aW9uIG1hcChmbiwgc3JjcywgYnVmZmVyID0gMCkge1xuICBjb25zdCBkc3QgPSBjaGFuKGJ1ZmZlcik7XG4gIGNvbnN0IHNyY2xlbiA9IHNyY3MubGVuZ3RoO1xuICBjb25zdCB2YWx1ZXMgPSBbXTtcbiAgY29uc3QgY2FsbGJhY2tzID0gW107XG4gIGNvbnN0IHRlbXAgPSBjaGFuKCk7XG4gIGxldCBjb3VudDtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHNyY2xlbjsgaSsrKSB7XG4gICAgY2FsbGJhY2tzW2ldID0gKGluZGV4ID0+IHtcbiAgICAgIHJldHVybiB2YWx1ZSA9PiB7XG4gICAgICAgIHZhbHVlc1tpbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgaWYgKC0tY291bnQgPT09IDApIHtcbiAgICAgICAgICBzZW5kQXN5bmModGVtcCwgdmFsdWVzLnNsaWNlKCkpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0pKGkpO1xuICB9XG5cbiAgZ28oYXN5bmMgKCkgPT4ge1xuICAgIGZvciAoOzspIHtcbiAgICAgIGNvdW50ID0gc3JjbGVuO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcmNsZW47IGkrKykge1xuICAgICAgICByZWN2QXN5bmMoc3Jjc1tpXSwgY2FsbGJhY2tzW2ldKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHZhbHVlcyA9IGF3YWl0IHJlY3YodGVtcCk7XG4gICAgICBmb3IgKGNvbnN0IHZhbHVlIG9mIHZhbHVlcykge1xuICAgICAgICBpZiAodmFsdWUgPT09IENMT1NFRCkge1xuICAgICAgICAgIC8vIE9uY2UgYSBzb3VyY2UgY2xvc2VzLCB3ZSBjbG9zZSB0aGUgZGVzdGluYXRpb24gQU5EIHRoZSByZXN0IG9mIHRoZVxuICAgICAgICAgIC8vIHNvdXJjZXMuIE90aGVyd2lzZSB0aGUgc291cmNlcyB3aWxsIGhhdmUgbm90aGluZyByZWNlaXZpbmcgZnJvbVxuICAgICAgICAgIC8vIHRoZW0gYW5kIHNlbmRzIHRvIHRoZW0gd2lsbCBibG9jayBmb3JldmVyLiBCeSBjbG9zaW5nIHRoZW0sIHNlbmRzXG4gICAgICAgICAgLy8gdG8gdGhlbSB3aWxsIGltbWVkaWF0ZWx5IHJldHVybiBgZmFsc2VgIGFuZCBub3QgYmxvY2suXG4gICAgICAgICAgY2xvc2UoZHN0KTtcbiAgICAgICAgICBmb3IgKGNvbnN0IHNyYyBvZiBzcmNzKSB7XG4gICAgICAgICAgICBjbG9zZShzcmMpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGF3YWl0IHNlbmQoZHN0LCBmbiguLi52YWx1ZXMpKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBkc3Q7XG59XG5cbmV4cG9ydCB7IHBpcGUsIHBhcnRpdGlvbiwgbWVyZ2UsIHNwbGl0LCB0YXAsIHVudGFwLCB1bnRhcEFsbCwgbWFwIH07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuLyoqXG4gKiBBIHNldCBvZiBjaGFubmVsIHV0aWxpdGllcyBmb3IgY2hhbmdpbmcgdGhlIHRpbWluZyBvZiBpbnB1dHMgYmVpbmcgcHV0IG9udG9cbiAqIHRoZSBpbnB1dCBjaGFubmVsLlxuICpcbiAqIEBtb2R1bGUgb3BzL3RpbWluZ1xuICogQHByaXZhdGVcbiAqL1xuXG5pbXBvcnQge1xuICBnbyxcbiAgY2hhbixcbiAgc2VuZCxcbiAgc2VsZWN0LFxuICBjbG9zZSxcbiAgQ0xPU0VELFxuICBpc1RpbWVkLFxuICB0aW1lZENoYW5cbn0gZnJvbSBcIkBjaGFua28vY3NwXCI7XG5cbmltcG9ydCB7IGlzTnVtYmVyIH0gZnJvbSBcIm1vZHVsZXMvY29tbW9uXCI7XG5cbi8qKlxuICogRGVib3VuY2VzIGFuIGlucHV0IGNoYW5uZWwuXG4gKlxuICogRGVib3VuY2luZyBpcyB0aGUgYWN0IG9mIHR1cm5pbmcgc2V2ZXJhbCBpbnB1dCB2YWx1ZXMgaW50byBvbmUuIEZvciBleGFtcGxlLFxuICogZGVib3VuY2luZyBhIGNoYW5uZWwgZHJpdmVuIGJ5IGEgYG1vdXNlbW92ZWAgZXZlbnQgd291bGQgY2F1c2Ugb25seSB0aGUgZmluYWxcbiAqIGBtb3VzZW1vdmVgIGV2ZW50IHRvIGJlIHB1dCBvbnRvIHRoZSBjaGFubmVsLCBkcm9wcGluZyBhbGwgb2YgdGhlIG90aGVyIG9uZXMuXG4gKiBUaGlzIGNhbiBiZSBkZXNpcmFibGUgYmVjYXVzZSBgbW91c2Vtb3ZlYCBldmVudHMgY29tZSBpbiBidW5jaGVzLCBiZWluZ1xuICogcHJvZHVjZWQgY29udGludWFsbHkgd2hpbGUgdGhlIG1vdXNlIGlzIG1vdmluZywgYW5kIG9mdGVuIGFsbCB0aGF0IHdlIHJlYWxseVxuICogY2FyZSBhYm91dCBpcyB0byBsZWFybiB3aGVyZSB0aGUgbW91c2UgZW5kZWQgdXAuXG4gKlxuICogVGhpcyBmdW5jdGlvbiBkb2VzIHRoaXMgYnkgY29udHJvbGxpbmcgd2hpY2ggdmFsdWVzIHRoYXQgaGF2ZSBiZWVuIHNlbnQgdG9cbiAqIHRoZSBzb3VyY2UgY2hhbm5lbCBhcmUgbWFkZSBhdmFpbGFibGUgb24gdGhlIGRlc3RpbmF0aW9uIGNoYW5uZWwsIGFuZCB3aGVuLlxuICpcbiAqIFRoZSBgZGVsYXlgIHBhcmFtZXRlciBkZXRlcm1pbmVzIHRoZSBkZWJvdW5jZSB0aHJlc2hvbGQuIE9uY2UgdGhlIGZpcnN0IHZhbHVlXG4gKiBpcyBzZW50IHRvIHRoZSBzb3VyY2UgY2hhbm5lbCwgZGVib3VuY2luZyBpcyBpbiBlZmZlY3QgdW50aWwgdGhlIG51bWJlciBvZlxuICogbWlsbGlzZWNvbmRzIGluIGBkZWxheWAgcGFzc2VzIHdpdGhvdXQgYW55IG90aGVyIHZhbHVlIGJlaW5nIHB1dCBvbnRvIHRoYXRcbiAqIGNoYW5uZWwuIEluIG90aGVyIHdvcmRzLCB0aGUgZGVsYXkgd2lsbCBiZSByZWZyZXNoZWQgaWYgYW5vdGhlciB2YWx1ZSBpcyBzZW50XG4gKiB0byB0aGUgc291cmNlIGNoYW5uZWwgYmVmb3JlIHRoZSBkZWxheSBlbGFwc2VzLiBBZnRlciBhIGZ1bGwgZGVsYXkgaW50ZXJ2YWxcbiAqIHBhc3NlcyB3aXRob3V0IGEgdmFsdWUgYmVpbmcgc2VudCB0byB0aGUgc291cmNlIGNoYW5uZWwsIHRoZSBsYXN0IHZhbHVlIHNlbnRcbiAqIGJlY29tZXMgYXZhaWxhYmxlIG9uIHRoZSBkZXN0aW5hdGlvbiBjaGFubmVsLlxuICpcbiAqIFRoaXMgYmVoYXZpb3IgY2FuIGJlIG1vZGlmaWVkIHRocm91Z2ggZm91ciBvcHRpb25zOiBgbGVhZGluZ2AsIGB0cmFpbGluZ2AsXG4gKiBgbWF4RGVsYXlgLCBhbmQgYGNhbmNlbGAuXG4gKlxuICogSWYgYm90aCBgbGVhZGluZ2AgYW5kIGB0cmFpbGluZ2AgYXJlIGB0cnVlYCwgdmFsdWVzIHdpbGwgbm90IGJlIGR1cGxpY2F0ZWQuXG4gKiBUaGUgZmlyc3QgdmFsdWUgcHV0IG9udG8gdGhlIHNvdXJjZSBjaGFubmVsIHdpbGwgYmUgcHV0IG9udG8gdGhlIGRlc3RpbmF0aW9uXG4gKiBjaGFubmVsIGltbWVkaWF0ZWx5IChwZXIgYGxlYWRpbmdgKSBhbmQgdGhlIGRlbGF5IHdpbGwgYmVnaW4sIGJ1dCBhIHZhbHVlXG4gKiB3aWxsIG9ubHkgYmUgbWFkZSBhdmFpbGFibGUgb24gdGhlIGRlc3RpbmF0aW9uIGNoYW5uZWwgYXQgdGhlIGVuZCBvZiB0aGVcbiAqIGRlbGF5IChwZXIgYHRyYWlsaW5nYCkgaWYgKmFub3RoZXIqIGlucHV0IHZhbHVlIHdhcyBwdXQgb250byB0aGUgc291cmNlXG4gKiBjaGFubmVsIGJlZm9yZSB0aGUgZGVsYXkgZXhwaXJlZC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcC1vcHNcbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5DaGFubmVsfSBzcmMgVGhlIHNvdXJjZSBjaGFubmVsLlxuICogQHBhcmFtIHsobnVtYmVyfG1vZHVsZTpjc3AuQnVmZmVyKX0gW2J1ZmZlcj0wXSBBIGJ1ZmZlciB1c2VkIHRvIGNyZWF0ZSB0aGVcbiAqICAgICBkZXN0aW5hdGlvbiBjaGFubmVsLiBJZiB0aGlzIGlzIGEgbnVtYmVyLCBhXG4gKiAgICAge0BsaW5rIG1vZHVsZTpjc3AuRml4ZWRCdWZmZXJ8Rml4ZWRCdWZmZXJ9IG9mIHRoYXQgc2l6ZSB3aWxsIGJlIHVzZWQuIElmXG4gKiAgICAgdGhpcyBpcyBgMGAgb3Igbm90IHByZXNlbnQsIHRoZSBjaGFubmVsIHdpbGwgYmUgdW5idWZmZXJlZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBkZWxheSBUaGUgZGVib3VuY2luZyBkZWxheSwgaW4gbWlsbGlzZWNvbmRzLlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSBBIHNldCBvZiBvcHRpb25zIHRvIGZ1cnRoZXIgY29uZmlndXJlIHRoZVxuICogICAgIGRlYm91bmNpbmcuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmxlYWRpbmc9ZmFsc2VdIEluc3RlYWQgb2YgbWFraW5nIGEgdmFsdWUgYXZhaWxhYmxlXG4gKiAgICAgb24gdGhlIGRlc3RpbmF0aW9uIGNoYW5uZWwgYWZ0ZXIgdGhlIGRlbGF5IHBhc3NlcywgdGhlIGZpcnN0IHZhbHVlIHB1dFxuICogICAgIG9udG8gdGhlIHNvdXJjZSBjaGFubmVsIGlzIG1hZGUgYXZhaWxhYmxlICpiZWZvcmUqIHRoZSBkZWxheSBiZWdpbnMuIE5vXG4gKiAgICAgdmFsdWUgaXMgYXZhaWxhYmxlIG9uIHRoZSBkZXN0aW5hdGlvbiBjaGFubmVsIGFmdGVyIHRoZSBkZWxheSBoYXMgZWxhcHNlZFxuICogICAgICh1bmxlc3MgYHRyYWlsaW5nYCBpcyBhbHNvIGB0cnVlYCkuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnRyYWlsaW5nPXRydWVdIFRoZSBkZWZhdWx0IGJlaGF2aW9yLCB3aGVyZSBhIHZhbHVlXG4gKiAgICAgaXMgbm90IG1hZGUgYXZhaWxhYmxlIG9uIHRoZSBkZXN0aW5hdGlvbiBjaGFubmVsIHVudGlsIHRoZSBlbnRpcmUgZGVsYXlcbiAqICAgICBwYXNzZXMgd2l0aG91dCBhIG5ldyB2YWx1ZSBiZWluZyBwdXQgb24gdGhlIHNvdXJjZSBjaGFubmVsLlxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLm1heERlbGF5PTBdIFRoZSBtYXhpbXVtIGRlbGF5IGFsbG93ZWQgYmVmb3JlIGEgdmFsdWVcbiAqICAgICBpcyBwdXQgb250byB0aGUgZGVzdGluYXRpb24gY2hhbm5lbC4gRGVib3VuY2luZyBjYW4sIGluIHRoZW9yeSwgZ28gb25cbiAqICAgICBmb3JldmVyIGFzIGxvbmcgYXMgbmV3IGlucHV0IHZhbHVlcyBjb250aW51ZSB0byBiZSBwdXQgb250byB0aGUgc291cmNlXG4gKiAgICAgY2hhbm5lbCBiZWZvcmUgdGhlIGRlbGF5IGV4cGlyZXMuIFNldHRpbmcgdGhpcyBvcHRpb24gdG8gYSBwb3NpdGl2ZVxuICogICAgIG51bWJlciBzZXRzIHRoZSBtYXhpbXVtIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdGhhdCBkZWJvdW5jaW5nIGNhbiBnbyBvblxuICogICAgIGJlZm9yZSBpdCdzIGZvcmNlZCB0byBlbmQsIGV2ZW4gaWYgaW4gdGhlIG1pZGRsZSBvZiBhIGRlYm91bmNpbmcgZGVsYXkuXG4gKiAgICAgSGF2aW5nIGRlYm91bmNpbmcgZW5kIHRocm91Z2ggdGhlIG1heCBkZWxheSBvcGVyYXRlcyBleGFjdGx5IGFzIGlmIGl0IGhhZFxuICogICAgIGVuZGVkIGJlY2F1c2Ugb2YgbGFjayBvZiBpbnB1dDsgdGhlIGxhc3QgaW5wdXQgaXMgbWFkZSBhdmFpbGFibGUgb24gdGhlXG4gKiAgICAgZGVzdGluYXRpb24gY2hhbm5lbCAoaWYgYHRyYWlsaW5nYCBpcyBgdHJ1ZWApLCBhbmQgdGhlIG5leHQgaW5wdXQgd2lsbFxuICogICAgIHRyaWdnZXIgYW5vdGhlciBkZWJvdW5jZSBvcGVyYXRpb24uXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuQ2hhbm5lbH0gW29wdGlvbnMuY2FuY2VsXSBBIGNoYW5uZWwgdXNlZCB0byBzaWduYWwgYVxuICogICAgIGNhbmNlbGxhdGlvbiBvZiB0aGUgZGVib3VuY2luZy4gQW55IHZhbHVlIHB1dCBvbnRvIHRoaXMgY2hhbm5lbCB3aWxsXG4gKiAgICAgY2FuY2VsIHRoZSBjdXJyZW50IGRlYm91bmNpbmcgb3BlcmF0aW9uLCBjbG9zaW5nIHRoZSBvdXRwdXQgY2hhbm5lbCBhbmRcbiAqICAgICBkaXNjYXJkaW5nIGFueSB2YWx1ZXMgdGhhdCB3ZXJlIHdhaXRpbmcgZm9yIHRoZSBkZWJvdW5jZSB0aHJlc2hvbGQgdGltZXJcbiAqICAgICB0byBiZSBzZW50IHRvIHRoZSBvdXRwdXQuXG4gKiBAcmV0dXJuIHttb2R1bGU6Y3NwLkNoYW5uZWx9IFRoZSBuZXdseS1jcmVhdGVkIGRlc3RpbmF0aW9uIGNoYW5uZWwsIHdoZXJlIGFsbFxuICogICAgIG9mIHRoZSB2YWx1ZXMgd2lsbCBiZSBkZWJvdW5jZWQgZnJvbSB0aGUgc291cmNlIGNoYW5uZWwuXG4gKi9cbmZ1bmN0aW9uIGRlYm91bmNlKHNyYywgYnVmZmVyLCBkZWxheSwgb3B0aW9ucykge1xuICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICBsZWFkaW5nOiBmYWxzZSxcbiAgICB0cmFpbGluZzogdHJ1ZSxcbiAgICBtYXhEZWxheTogMCxcbiAgICBjYW5jZWw6IGNoYW4oKVxuICB9O1xuICBjb25zdCBbYnVmLCBkZWwsIG9wdHNdID0gaXNOdW1iZXIoZGVsYXkpXG4gICAgPyBbYnVmZmVyLCBkZWxheSwgT2JqZWN0LmFzc2lnbihkZWZhdWx0cywgb3B0aW9ucyA/PyB7fSldXG4gICAgOiBbMCwgYnVmZmVyLCBPYmplY3QuYXNzaWduKGRlZmF1bHRzLCBkZWxheSA/PyB7fSldO1xuXG4gIGNvbnN0IGRzdCA9IGNoYW4oYnVmKTtcbiAgY29uc3QgeyBsZWFkaW5nLCB0cmFpbGluZywgbWF4RGVsYXksIGNhbmNlbCB9ID0gb3B0cztcblxuICBnbyhhc3luYyAoKSA9PiB7XG4gICAgbGV0IHRpbWVyID0gY2hhbigpO1xuICAgIGxldCBtYXggPSBjaGFuKCk7XG4gICAgbGV0IGN1cnJlbnQgPSBDTE9TRUQ7XG5cbiAgICBmb3IgKDs7KSB7XG4gICAgICBjb25zdCB7IHZhbHVlLCBjaGFubmVsIH0gPSBhd2FpdCBzZWxlY3QoW3NyYywgdGltZXIsIG1heCwgY2FuY2VsXSk7XG5cbiAgICAgIGlmIChjaGFubmVsID09PSBjYW5jZWwpIHtcbiAgICAgICAgY2xvc2UoZHN0KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBpZiAoY2hhbm5lbCA9PT0gc3JjKSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gQ0xPU0VEKSB7XG4gICAgICAgICAgY2xvc2UoZHN0KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRpbWluZyA9IGlzVGltZWQodGltZXIpO1xuICAgICAgICB0aW1lciA9IHRpbWVkQ2hhbihkZWwpO1xuXG4gICAgICAgIGlmICghdGltaW5nICYmIG1heERlbGF5ID4gMCkge1xuICAgICAgICAgIG1heCA9IHRpbWVkQ2hhbihtYXhEZWxheSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobGVhZGluZykge1xuICAgICAgICAgIGlmICghdGltaW5nKSB7XG4gICAgICAgICAgICBhd2FpdCBzZW5kKGRzdCwgdmFsdWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjdXJyZW50ID0gdmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHRyYWlsaW5nKSB7XG4gICAgICAgICAgY3VycmVudCA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aW1lciA9IGNoYW4oKTtcbiAgICAgICAgbWF4ID0gY2hhbigpO1xuICAgICAgICBpZiAodHJhaWxpbmcgJiYgY3VycmVudCAhPT0gQ0xPU0VEKSB7XG4gICAgICAgICAgYXdhaXQgc2VuZChkc3QsIGN1cnJlbnQpO1xuICAgICAgICAgIGN1cnJlbnQgPT09IENMT1NFRDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGRzdDtcbn1cblxuLyoqXG4gKiBUaHJvdHRsZXMgYW4gaW5wdXQgY2hhbm5lbC5cbiAqXG4gKiBUaHJvdHRsaW5nIGlzIHRoZSBhY3Qgb2YgZW5zdXJpbmcgdGhhdCBzb21ldGhpbmcgb25seSBoYXBwZW5zIG9uY2UgcGVyIHRpbWVcbiAqIGludGVydmFsLiBJbiB0aGlzIGNhc2UsIGl0IG1lYW5zIHRoYXQgYSB2YWx1ZSBzZW50IHRvIHRoZSBzb3VyY2UgY2hhbm5lbCBpc1xuICogb25seSBtYWRlIGF2YWlsYWJsZSB0byB0aGUgZGVzdGluYXRpb24gY2hhbm5lbCBvbmNlIHBlciBhIGdpdmVuIG51bWJlciBvZlxuICogbWlsbGlzZWNvbmRzLiBBbiBleGFtcGxlIHVzYWdlIHdvdWxkIGJlIHdpdGggd2luZG93IHNjcm9sbCBldmVudHM7IHRoZXNlXG4gKiBldmVudHMgYXJlIG5lYXJseSBjb250aW51b3VzIGFzIHNjcm9sbGluZyBpcyBoYXBwZW5pbmcsIGFuZCBwZXJoYXBzIHdlIGRvbid0XG4gKiB3YW50IHRvIGNhbGwgYW4gZXhwZW5zaXZlIFVJIHVwZGF0aW5nIGZ1bmN0aW9uIGV2ZXJ5IHRpbWUgYSBzY3JvbGwgZXZlbnQgaXNcbiAqIGZpcmVkLiBXZSBjYW4gdGhyb3R0bGUgdGhlIGlucHV0IGNoYW5uZWwgYW5kIG1ha2UgaXQgb25seSBvZmZlciB1cCB0aGUgc2Nyb2xsXG4gKiBldmVudHMgb25jZSBldmVyeSAxMDAgbWlsbGlzZWNvbmRzLCBmb3IgaW5zdGFuY2UuXG4gKlxuICogVGhyb3R0bGluZyBpcyBlZmZlY3RlZCBieSBjcmVhdGluZyBhIG5ldyBjaGFubmVsIGFzIGEgdGhyb3R0bGVkIGRlc3RpbmF0aW9uXG4gKiBmb3IgdmFsdWVzIHNlbnQgdG8gdGhlIHNvdXJjZSBjaGFubmVsLiBWYWx1ZXMgd2lsbCBvbmx5IGFwcGVhciBvbiB0aGF0XG4gKiBkZXN0aW5hdGlvbiBjaGFubmVsIG9uY2UgcGVyIGRlbGF5IGludGVydmFsOyBvdGhlciB2YWx1ZXMgdGhhdCBhcmUgcHV0IG9udG9cbiAqIHRoZSBzb3VyY2UgY2hhbm5lbCBpbiB0aGUgbWVhbnRpbWUgYXJlIGRpc2NhcmRlZC5cbiAqXG4gKiBUaGUgYGRlbGF5YCBwYXJhbWV0ZXIgY29udHJvbHMgaG93IG9mdGVuIGEgdmFsdWUgY2FuIGJlY29tZSBhdmFpbGFibGUgb24gdGhlXG4gKiBkZXN0aW5hdGlvbiBjaGFubmVsLiBXaGVuIHRoZSBmaXJzdCB2YWx1ZSBpcyBzZW50IHRvIHRoZSBzb3VyY2UgY2hhbm5lbCwgaXRcbiAqIGlzIGltbWVkaWF0ZWx5IHNlbnQgdG8gdGhlIGRlc3RpbmF0aW9uIGNoYW5uZWwgYXMgd2VsbCBhbmQgdGhlIGRlbGF5IGJlZ2lucy5cbiAqIEFueSBmdXJ0aGVyIHZhbHVlcyBzZW50IHRvIHRoZSBzb3VyY2UgY2hhbm5lbCBkdXJpbmcgdGhhdCBkZWxheSBhcmUgKm5vdCpcbiAqIHBhc3NlZCB0aHJvdWdoOyBvbmx5IHdoZW4gdGhlIGRlbGF5IGV4cGlyZXMgaXMgdGhlIGxhc3QgaW5wdXQgdmFsdWUgbWFkZVxuICogYXZhaWxhYmxlIG9uIHRoZSBkZXN0aW5hdGlvbiBjaGFubmVsLiBUaGUgZGVsYXkgdGhlbiBiZWdpbnMgYWdhaW4sIHNvIHRoYXRcbiAqIGZ1cnRoZXIgaW5wdXRzIGFyZSBzcXVlbGNoZWQgdW50aWwgKnRoYXQqIGRlbGF5IHBhc3Nlcy4gVGhyb3R0bGluZyBjb250aW51ZXMsXG4gKiBvbmx5IGFsbG93aW5nIG9uZSB2YWx1ZSB0aHJvdWdoIHBlciBpbnRlcnZhbCwgdW50aWwgYW4gZW50aXJlIGludGVydmFsIHBhc3Nlc1xuICogd2l0aG91dCBpbnB1dC5cbiAqXG4gKiBUaGlzIGJlaGF2aW9yIGNhbiBiZSBtb2RpZmllZCBieSB0aHJlZSBvcHRpb25zOiBgbGVhZGluZ2AsIGB0cmFpbGluZ2AsIGFuZFxuICogYGNhbmNlbGAuXG4gKlxuICogSWYgYm90aCBgbGVhZGluZ2AgYW5kIGB0cmFpbGluZ2AgYXJlIGB0cnVlYCwgdmFsdWVzIHdpbGwgbm90IGJlIGR1cGxpY2F0ZWQuXG4gKiBUaGUgZmlyc3QgdmFsdWUgc2VudCB0byB0aGUgc291cmNlIGNoYW5uZWwgd2lsbCBiZSBwdXQgb250byB0aGUgZGVzdGluYXRpb25cbiAqIGNoYW5uZWwgaW1tZWRpYXRlbHkgKHBlciBgbGVhZGluZ2ApIGFuZCB0aGUgZGVsYXkgd2lsbCBiZWdpbiwgYnV0IGEgdmFsdWVcbiAqIHdpbGwgb25seSBiZSBtYWRlIGF2YWlsYWJsZSBvbiB0aGUgZGVzdGluYXRpb24gY2hhbm5lbCBhdCB0aGUgZW5kIG9mIHRoZVxuICogZGVsYXkgKHBlciBgdHJhaWxpbmdgKSBpZiAqYW5vdGhlciogaW5wdXQgdmFsdWUgd2FzIHNlbnQgdG8gdGhlIHNvdXJjZVxuICogY2hhbm5lbCBiZWZvcmUgdGhlIGRlbGF5IGV4cGlyZWQuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3Atb3BzXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuQ2hhbm5lbH0gc3JjIFRoZSBzb3VyY2UgY2hhbm5lbC5cbiAqIEBwYXJhbSB7KG51bWJlcnxtb2R1bGU6Y3NwLkJ1ZmZlcil9IFtidWZmZXI9MF0gQSBidWZmZXIgdXNlZCB0byBjcmVhdGUgdGhlXG4gKiAgICAgZGVzdGluYXRpb24gY2hhbm5lbC4gSWYgdGhpcyBpcyBhIG51bWJlciwgYVxuICogICAgIHtAbGluayBtb2R1bGU6Y3NwLkZpeGVkQnVmZmVyfEZpeGVkQnVmZmVyfSBvZiB0aGF0IHNpemUgd2lsbCBiZSB1c2VkLiBJZlxuICogICAgIHRoaXMgaXMgYDBgIG9yIG5vdCBwcmVzZW50LCB0aGUgY2hhbm5lbCB3aWxsIGJlIHVuYnVmZmVyZWQuXG4gKiBAcGFyYW0ge251bWJlcn0gZGVsYXkgVGhlIHRocm90dGxpbmcgZGVsYXksIGluIG1pbGxpc2Vjb25kcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gQSBzZXQgb2Ygb3B0aW9ucyB0byBmdXJ0aGVyIGNvbmZpZ3VyZSB0aGVcbiAqIHRocm90dGxpbmcuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmxlYWRpbmc9dHJ1ZV0gTWFrZXMgdGhlIHZhbHVlIHRoYXQgdHJpZ2dlcmVkIHRoZVxuICogICAgIHRocm90dGxpbmcgaW1tZWRpYXRlbHkgYXZhaWxhYmxlIG9uIHRoZSBkZXN0aW5hdGlvbiBjaGFubmVsIGJlZm9yZVxuICogICAgIGJlZ2lubmluZyB0aGUgZGVsYXkuIElmIHRoaXMgaXMgYGZhbHNlYCwgdGhlIGZpcnN0IHZhbHVlIHdpbGwgbm90IGJlIHB1dFxuICogICAgIG9udG8gdGhlIGRlc3RpbmF0aW9uIGNoYW5uZWwgdW50aWwgYSBmdWxsIGRlbGF5IGludGVydmFsIHBhc3Nlcy5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMudHJhaWxpbmc9dHJ1ZV0gTWFrZXMgdGhlIGxhc3QgdmFsdWUgcHV0IG9udG8gdGhlXG4gKiAgICAgc291cmNlIGNoYW5uZWwgYXZhaWxhYmxlIG9uIHRoZSBkZXN0aW5hdGlvbiBjaGFubmVsIHdoZW4gdGhlIGRlbGF5XG4gKiAgICAgZXhwaXJlcy4gSWYgdGhpcyBpcyBgZmFsc2VgLCBhbnkgaW5wdXRzIHRoYXQgY29tZSBpbiBkdXJpbmcgdGhlIGRlbGF5IGFyZVxuICogICAgIGlnbm9yZWQsIGFuZCB0aGUgbmV4dCB2YWx1ZSBpcyBub3QgcHV0IG9udG8gdGhlIGRlc3RpbmF0aW9uIGNoYW5uZWwgdW50aWxcbiAqICAgICB0aGUgZmlyc3QgaW5wdXQgKmFmdGVyKiB0aGUgZGVsYXkgZXhwaXJlcy5cbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5DaGFubmVsfSBbb3B0aW9ucy5jYW5jZWxdIEEgY2hhbm5lbCB1c2VkIHRvIHNpZ25hbCBhXG4gKiAgICAgY2FuY2VsbGF0aW9uIG9mIHRoZSB0aHJvdHRsaW5nLiBBbnkgdmFsdWUgcHV0IG9udG8gdGhpcyBjaGFubmVsIHdpbGxcbiAqICAgICBjYW5jZWwgdGhlIGN1cnJlbnQgdGhyb3R0bGluZyBvcGVyYXRpb24sIGNsb3NpbmcgdGhlIG91dHB1dCBjaGFubmVsIGFuZFxuICogICAgIGRpc2NhcmRpbmcgYW55IHZhbHVlcyB0aGF0IHdlcmUgd2FpdGluZyBmb3IgdGhlIHRocm90dGxlIHRocmVzaG9sZCB0aW1lclxuICogICAgIHRvIGJlIHNlbnQgdG8gdGhlIG91dHB1dC5cbiAqIEByZXR1cm4ge21vZHVsZTpjc3AuQ2hhbm5lbH19IFRoZSBuZXdseS1jcmVhdGVkIGRlc3RpbmF0aW9uIGNoYW5uZWwsIHdoZXJlXG4gKiAgICAgYWxsIG9mIHRoZSB2YWx1ZXMgd2lsbCBiZSB0aHJvdHRsZWQgZnJvbSB0aGUgc291cmNlIGNoYW5uZWwuXG4gKi9cbmZ1bmN0aW9uIHRocm90dGxlKHNyYywgYnVmZmVyLCBkZWxheSwgb3B0aW9ucykge1xuICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICBsZWFkaW5nOiB0cnVlLFxuICAgIHRyYWlsaW5nOiB0cnVlLFxuICAgIGNhbmNlbDogY2hhbigpXG4gIH07XG4gIGNvbnN0IFtidWYsIGRlbCwgb3B0c10gPSBpc051bWJlcihkZWxheSlcbiAgICA/IFtidWZmZXIsIGRlbGF5LCBPYmplY3QuYXNzaWduKGRlZmF1bHRzLCBvcHRpb25zID8/IHt9KV1cbiAgICA6IFswLCBidWZmZXIsIE9iamVjdC5hc3NpZ24oZGVmYXVsdHMsIGRlbGF5ID8/IHt9KV07XG5cbiAgY29uc3QgZHN0ID0gY2hhbihidWYpO1xuICBjb25zdCB7IGxlYWRpbmcsIHRyYWlsaW5nLCBjYW5jZWwgfSA9IG9wdHM7XG5cbiAgZ28oYXN5bmMgKCkgPT4ge1xuICAgIGxldCB0aW1lciA9IGNoYW4oKTtcbiAgICBsZXQgY3VycmVudCA9IENMT1NFRDtcblxuICAgIGZvciAoOzspIHtcbiAgICAgIGNvbnN0IHsgdmFsdWUsIGNoYW5uZWwgfSA9IGF3YWl0IHNlbGVjdChbc3JjLCB0aW1lciwgY2FuY2VsXSk7XG5cbiAgICAgIGlmIChjaGFubmVsID09PSBjYW5jZWwpIHtcbiAgICAgICAgY2xvc2UoZHN0KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGlmIChjaGFubmVsID09PSBzcmMpIHtcbiAgICAgICAgaWYgKHZhbHVlID09PSBDTE9TRUQpIHtcbiAgICAgICAgICBjbG9zZShkc3QpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdGltaW5nID0gaXNUaW1lZCh0aW1lcik7XG4gICAgICAgIGlmICghdGltaW5nKSB7XG4gICAgICAgICAgdGltZXIgPSB0aW1lZENoYW4oZGVsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChsZWFkaW5nKSB7XG4gICAgICAgICAgaWYgKCF0aW1pbmcpIHtcbiAgICAgICAgICAgIGF3YWl0IHNlbmQoZHN0LCB2YWx1ZSk7XG4gICAgICAgICAgfSBlbHNlIGlmICh0cmFpbGluZykge1xuICAgICAgICAgICAgY3VycmVudCA9IHZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0cmFpbGluZykge1xuICAgICAgICAgIGN1cnJlbnQgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0cmFpbGluZyAmJiBjdXJyZW50ICE9PSBDTE9TRUQpIHtcbiAgICAgICAgdGltZXIgPSB0aW1lZENoYW4oZGVsKTtcbiAgICAgICAgYXdhaXQgc2VuZChkc3QsIGN1cnJlbnQpO1xuICAgICAgICBjdXJyZW50ID0gQ0xPU0VEO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGltZXIgPSBjaGFuKCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZHN0O1xufVxuXG5leHBvcnQgeyBkZWJvdW5jZSwgdGhyb3R0bGUgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=