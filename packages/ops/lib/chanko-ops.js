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
      "../xduce/lib/chanko-xduce.js":
      /*!************************************!*\
        !*** ../xduce/lib/chanko-xduce.js ***!
        \************************************/

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

              /*! exports provided: protocols */

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
                /**
                 * Copyright (c) 2020 Thomas J. Otterson
                 *
                 * This software is released under the MIT License.
                 * https://opensource.org/licenses/MIT
                 */

                /***/

              },

              /***/
              "./src/modules/common.js":
              /*!*******************************!*\
                !*** ./src/modules/common.js ***!
                \*******************************/

              /*! exports provided: isFunction, isGeneratorFunction */

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
                 * @module common
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
                 * @memberof module:xduce/common
                 * @param {*} x The value being tested to see if it is a generator function.
                 * @return {boolean} Either `true` if the test value is a generator function or
                 *     `false` if it is not.
                 * @private
                 */


                function isGeneratorFunction(x) {
                  return toString.call(x) === "[object GeneratorFunction]";
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


                var modules_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                /*! modules/common */
                "./src/modules/common.js");
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
                  if (!obj) {
                    return false;
                  }

                  switch (protocol) {
                    case "iterator":
                      return Object(modules_common__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(obj[Symbol.iterator] || obj.next);

                    case "asyncIterator":
                      return Object(modules_common__WEBPACK_IMPORTED_MODULE_0__["isGeneratorFunction"])(obj[Symbol.asyncIterator]);

                    case "reduced":
                    case "value":
                      return Object.getOwnPropertySymbols(obj).includes(protocols[protocol]);

                    default:
                      return Object(modules_common__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(obj[protocols[protocol]]);
                  }
                }
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


        var _chanko_xduce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! @chanko/xduce */
        "../xduce/lib/chanko-xduce.js");
        /* harmony import */


        var _chanko_xduce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chanko_xduce__WEBPACK_IMPORTED_MODULE_0__);
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


        var _chanko_xduce__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        /*! @chanko/xduce */
        "../xduce/lib/chanko-xduce.js");
        /* harmony import */


        var _chanko_xduce__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_chanko_xduce__WEBPACK_IMPORTED_MODULE_5__);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vcHMvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL29wcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vcHMvL2hvbWUvYmFyYW5kaXMvRGV2ZWxvcG1lbnQvcHJvamVjdHMvY2hhbmtvL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jSXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vb3BzL2NzcC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vb3BzL2NzcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vcHMvY3NwL2hvbWUvYmFyYW5kaXMvRGV2ZWxvcG1lbnQvcHJvamVjdHMvY2hhbmtvL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL0FzeW5jR2VuZXJhdG9yLmpzIiwid2VicGFjazovL29wcy9jc3AvaG9tZS9iYXJhbmRpcy9EZXZlbG9wbWVudC9wcm9qZWN0cy9jaGFua28vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvQXdhaXRWYWx1ZS5qcyIsIndlYnBhY2s6Ly9vcHMvY3NwL2hvbWUvYmFyYW5kaXMvRGV2ZWxvcG1lbnQvcHJvamVjdHMvY2hhbmtvL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2F3YWl0QXN5bmNHZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vb3BzL2NzcC9ob21lL2JhcmFuZGlzL0RldmVsb3BtZW50L3Byb2plY3RzL2NoYW5rby9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy93cmFwQXN5bmNHZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vb3BzL2NzcC9ob21lL2JhcmFuZGlzL0RldmVsb3BtZW50L3Byb2plY3RzL2NoYW5rby9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovL29wcy9jc3AvaG9tZS9iYXJhbmRpcy9EZXZlbG9wbWVudC9wcm9qZWN0cy9jaGFua28vbm9kZV9tb2R1bGVzL3NldGltbWVkaWF0ZS9zZXRJbW1lZGlhdGUuanMiLCJ3ZWJwYWNrOi8vb3BzL2NzcC9ob21lL2JhcmFuZGlzL0RldmVsb3BtZW50L3Byb2plY3RzL2NoYW5rby9ub2RlX21vZHVsZXMvdGltZXJzLWJyb3dzZXJpZnkvbWFpbi5qcyIsIndlYnBhY2s6Ly9vcHMvY3NwLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly9vcHMvY3NwL3hkdWNlL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9vcHMvY3NwL3hkdWNlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29wcy9jc3AveGR1Y2Uvc3JjL2luZGV4LmpzIiwid2VicGFjazovL29wcy9jc3AveGR1Y2Uvc3JjL21vZHVsZXMvY29tbW9uLmpzIiwid2VicGFjazovL29wcy9jc3AveGR1Y2Uvc3JjL21vZHVsZXMvcHJvdG9jb2wuanMiLCJ3ZWJwYWNrOi8vb3BzL2NzcC9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb3BzL2NzcC9zcmMvbW9kdWxlcy9idWZmZXIuanMiLCJ3ZWJwYWNrOi8vb3BzL2NzcC9zcmMvbW9kdWxlcy9jaGFubmVsL2hhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vb3BzL2NzcC9zcmMvbW9kdWxlcy9jaGFubmVsL2luZGV4LmpzIiwid2VicGFjazovL29wcy9jc3Avc3JjL21vZHVsZXMvY2hhbm5lbC9zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vb3BzL2NzcC9zcmMvbW9kdWxlcy9kaXNwYXRjaGVyLmpzIiwid2VicGFjazovL29wcy9jc3Avc3JjL21vZHVsZXMvcHJvY2Vzcy5qcyIsIndlYnBhY2s6Ly9vcHMvY3NwL3NyYy9tb2R1bGVzL3F1ZXVlLmpzIiwid2VicGFjazovL29wcy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9vcHMvLi9zcmMvbW9kdWxlcy9jb21tb24uanMiLCJ3ZWJwYWNrOi8vb3BzLy4vc3JjL21vZHVsZXMvY29udmVyc2lvbi5qcyIsIndlYnBhY2s6Ly9vcHMvLi9zcmMvbW9kdWxlcy9mbG93LmpzIiwid2VicGFjazovL29wcy8uL3NyYy9tb2R1bGVzL3RpbWluZy5qcyJdLCJuYW1lcyI6WyJ0b1N0cmluZyIsIk9iamVjdCIsInByb3RvY29scyIsImluaXQiLCJ2YWx1ZSIsIlN5bWJvbCIsInN0ZXAiLCJyZXN1bHQiLCJyZWR1Y2VkIiwiaXNGdW5jdGlvbiIsIm9iaiIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJCVUZGRVIiLCJGSVhFRCIsIkRST1BQSU5HIiwiU0xJRElORyIsInF1ZXVlIiwicSIsInNpemUiLCJidWZmZXIiLCJxQ291bnQiLCJlbnF1ZXVlIiwiY291bnQiLCJkZXF1ZXVlIiwiTUFYX0RJUlRZIiwiTUFYX1FVRVVFRCIsIkNMT1NFRCIsIkJPWCIsInAiLCJ3cml0YWJsZSIsImhhbmRsZXIiLCJpc1RpbWVkIiwibWF4RGlydHkiLCJtYXhRdWV1ZWQiLCJ4Zm9ybSIsInJlY3ZzIiwic2VuZHMiLCJkaXJ0eVJlY3ZzIiwiZGlydHlTZW5kcyIsImNsb3NlZCIsImlzQnVmZmVyZWQiLCJFcnJvciIsImNoYW5uZWwiLCJib3giLCJpc0Z1bGwiLCJkb25lIiwiaXNSZWR1Y2VkIiwicmVjZWl2ZXIiLCJFTVBUWSIsImNhbGxiYWNrIiwidmFsIiwicmVtb3ZlIiwiZGlzcGF0Y2giLCJjbG9zZSIsImZpbHRlciIsInNlbmRlciIsInNlbmRCb3giLCJzZW5kSGFuZGxlciIsIm1heCIsIkRFRkFVTFRfSEFORExFUiIsImFjdGl2ZSIsImNvbW1pdCIsImZuIiwiYWRkIiwiaGFuZGxlRXhjZXB0aW9uIiwiYnVmZmVyUmVkdWNlciIsImJ1ZiIsIm9wdHMiLCJmaXhlZCIsImlzQnVmZmVyIiwidGltZXIiLCJkZWZhdWx0T3B0aW9ucyIsInBhcnNlQXJncyIsInRyYW5zZHVjZXIiLCJ4ZiIsImhhbmRsZXJUcmFuc2R1Y2VyIiwiY2giLCJjaGFuSW1wbCIsInJlY3YiLCJzZXRUaW1lb3V0IiwiY2xvc2VJbXBsIiwiZGVsYXkiLCJjaGFuIiwiaGFuZGxlU2VuZCIsIm9wSGFuZGxlciIsImhhbmRsZVJlY3YiLCJyZXNvbHZlIiwic2VuZEFzeW5jIiwicmVjdkFzeW5jIiwicmVqZWN0IiwiREVGQVVMVCIsImdldCIsImFycmF5IiwiayIsImoiLCJ1cHBlciIsImkiLCJNYXRoIiwidGVtcCIsIm9wdGlvbnMiLCJvcHMiLCJwcmlvcml0eSIsImluZGljZXMiLCJyYW5kb21BcnJheSIsInNlbGVjdEhhbmRsZXIiLCJzZWxlY3RSZXN1bHQiLCJvcCIsIkFycmF5IiwiY3JlYXRlU2VsZWN0SGFuZGxlciIsImlzQm94Iiwic2VsZWN0QXN5bmMiLCJTRVRfSU1NRURJQVRFIiwiTUVTU0FHRV9DSEFOTkVMIiwiU0VUX1RJTUVPVVQiLCJiYXRjaFNpemUiLCJkaXNwYXRjaE1ldGhvZCIsImRpc3BhdGNoZXIiLCJjcmVhdGVEaXNwYXRjaGVyIiwicnVubmluZyIsInF1ZXVlZCIsImNhbGNEaXNwYXRjaE1ldGhvZCIsInNldEltbWVkaWF0ZSIsInByb2Nlc3NUYXNrcyIsInRhc2siLCJrZXkiLCJzZXREaXNwYXRjaGVyIiwidGltZWRDaGFuIiwiUHJvbWlzZSIsIlFVRVVFIiwic3RvcmUiLCJwb2ludGVyIiwiaXRlbSIsImVuZCIsInByZWRpY2F0ZSIsImlzTnVtYmVyIiwieCIsInByb3RvdHlwZSIsImNhbGwiLCJpc0Zpbml0ZSIsInJlZHVjZSIsIm91dHB1dCIsImdvIiwiYWNjIiwidG9DaGFubmVsIiwiaXRlcmFibGUiLCJsZW5ndGgiLCJzZW5kIiwidG9BcnJheSIsImlucHV0IiwicHVzaCIsIlRBUFMiLCJwaXBlIiwic3JjIiwiZHN0Iiwia2VlcE9wZW4iLCJwYXJ0aXRpb24iLCJ0QnVmZmVyIiwiZkJ1ZmZlciIsInREc3QiLCJmRHN0IiwibWVyZ2UiLCJzcmNzIiwiaW5wdXRzIiwic2xpY2UiLCJzZWxlY3QiLCJzcGxpY2UiLCJpbmRleE9mIiwic3BsaXQiLCJidWZmZXJzIiwiYmZzIiwiZHN0cyIsIm1hcCIsImJmIiwibWFrZVRhcCIsImRlZmluZVByb3BlcnR5IiwiY29uZmlndXJhYmxlIiwidGFwIiwiaW5jbHVkZXMiLCJ1bnRhcCIsInRhcHMiLCJpbmRleCIsInVudGFwQWxsIiwic3JjbGVuIiwidmFsdWVzIiwiY2FsbGJhY2tzIiwiZGVib3VuY2UiLCJkZWZhdWx0cyIsImxlYWRpbmciLCJ0cmFpbGluZyIsIm1heERlbGF5IiwiY2FuY2VsIiwiZGVsIiwiYXNzaWduIiwiY3VycmVudCIsInRpbWluZyIsInRocm90dGxlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsZ0M7Ozs7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QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7OztBQU9BOzs7Ozs7Ozs7QUFzQ0E7Ozs7Ozs7Ozs7Ozs7OztBQWVBOzs7Ozs7Ozs7Ozs7O0FBYUE7Ozs7Ozs7Ozs7Ozs7O0FBY0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkZBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFB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Qyx3REFBSSxDQUFDTyxHQUFELEVBQU13QyxPQUFOLENBQVY7QUFDQUEsZUFBTyxHQUFHdkssa0RBQVY7QUFDRCxPQUpNLE1BSUE7QUFDTDRDLGFBQUssR0FBR1ksd0RBQUksRUFBWjtBQUNEO0FBQ0Y7QUFDRixHQXhDQyxDQUFGO0FBMENBLFNBQU91RSxHQUFQO0FBQ0QiLCJmaWxlIjoiY2hhbmtvLW9wcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIm9wc1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJvcHNcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZnVuY3Rpb24gX2FzeW5jSXRlcmF0b3IoaXRlcmFibGUpIHtcbiAgdmFyIG1ldGhvZDtcblxuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGlmIChTeW1ib2wuYXN5bmNJdGVyYXRvcikge1xuICAgICAgbWV0aG9kID0gaXRlcmFibGVbU3ltYm9sLmFzeW5jSXRlcmF0b3JdO1xuICAgICAgaWYgKG1ldGhvZCAhPSBudWxsKSByZXR1cm4gbWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgIH1cblxuICAgIGlmIChTeW1ib2wuaXRlcmF0b3IpIHtcbiAgICAgIG1ldGhvZCA9IGl0ZXJhYmxlW1N5bWJvbC5pdGVyYXRvcl07XG4gICAgICBpZiAobWV0aG9kICE9IG51bGwpIHJldHVybiBtZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgfVxuICB9XG5cbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk9iamVjdCBpcyBub3QgYXN5bmMgaXRlcmFibGVcIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FzeW5jSXRlcmF0b3I7IiwiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiY3NwXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImNzcFwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwidmFyIEF3YWl0VmFsdWUgPSByZXF1aXJlKFwiLi9Bd2FpdFZhbHVlXCIpO1xuXG5mdW5jdGlvbiBBc3luY0dlbmVyYXRvcihnZW4pIHtcbiAgdmFyIGZyb250LCBiYWNrO1xuXG4gIGZ1bmN0aW9uIHNlbmQoa2V5LCBhcmcpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlcXVlc3QgPSB7XG4gICAgICAgIGtleToga2V5LFxuICAgICAgICBhcmc6IGFyZyxcbiAgICAgICAgcmVzb2x2ZTogcmVzb2x2ZSxcbiAgICAgICAgcmVqZWN0OiByZWplY3QsXG4gICAgICAgIG5leHQ6IG51bGxcbiAgICAgIH07XG5cbiAgICAgIGlmIChiYWNrKSB7XG4gICAgICAgIGJhY2sgPSBiYWNrLm5leHQgPSByZXF1ZXN0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZnJvbnQgPSBiYWNrID0gcmVxdWVzdDtcbiAgICAgICAgcmVzdW1lKGtleSwgYXJnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc3VtZShrZXksIGFyZykge1xuICAgIHRyeSB7XG4gICAgICB2YXIgcmVzdWx0ID0gZ2VuW2tleV0oYXJnKTtcbiAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgIHZhciB3cmFwcGVkQXdhaXQgPSB2YWx1ZSBpbnN0YW5jZW9mIEF3YWl0VmFsdWU7XG4gICAgICBQcm9taXNlLnJlc29sdmUod3JhcHBlZEF3YWl0ID8gdmFsdWUud3JhcHBlZCA6IHZhbHVlKS50aGVuKGZ1bmN0aW9uIChhcmcpIHtcbiAgICAgICAgaWYgKHdyYXBwZWRBd2FpdCkge1xuICAgICAgICAgIHJlc3VtZShrZXkgPT09IFwicmV0dXJuXCIgPyBcInJldHVyblwiIDogXCJuZXh0XCIsIGFyZyk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0dGxlKHJlc3VsdC5kb25lID8gXCJyZXR1cm5cIiA6IFwibm9ybWFsXCIsIGFyZyk7XG4gICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIHJlc3VtZShcInRocm93XCIsIGVycik7XG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHNldHRsZShcInRocm93XCIsIGVycik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2V0dGxlKHR5cGUsIHZhbHVlKSB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIFwicmV0dXJuXCI6XG4gICAgICAgIGZyb250LnJlc29sdmUoe1xuICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICBkb25lOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBcInRocm93XCI6XG4gICAgICAgIGZyb250LnJlamVjdCh2YWx1ZSk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBmcm9udC5yZXNvbHZlKHtcbiAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgZG9uZTogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGZyb250ID0gZnJvbnQubmV4dDtcblxuICAgIGlmIChmcm9udCkge1xuICAgICAgcmVzdW1lKGZyb250LmtleSwgZnJvbnQuYXJnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYmFjayA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgdGhpcy5faW52b2tlID0gc2VuZDtcblxuICBpZiAodHlwZW9mIGdlbltcInJldHVyblwiXSAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdGhpc1tcInJldHVyblwiXSA9IHVuZGVmaW5lZDtcbiAgfVxufVxuXG5pZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5hc3luY0l0ZXJhdG9yKSB7XG4gIEFzeW5jR2VuZXJhdG9yLnByb3RvdHlwZVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG59XG5cbkFzeW5jR2VuZXJhdG9yLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKGFyZykge1xuICByZXR1cm4gdGhpcy5faW52b2tlKFwibmV4dFwiLCBhcmcpO1xufTtcblxuQXN5bmNHZW5lcmF0b3IucHJvdG90eXBlW1widGhyb3dcIl0gPSBmdW5jdGlvbiAoYXJnKSB7XG4gIHJldHVybiB0aGlzLl9pbnZva2UoXCJ0aHJvd1wiLCBhcmcpO1xufTtcblxuQXN5bmNHZW5lcmF0b3IucHJvdG90eXBlW1wicmV0dXJuXCJdID0gZnVuY3Rpb24gKGFyZykge1xuICByZXR1cm4gdGhpcy5faW52b2tlKFwicmV0dXJuXCIsIGFyZyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFzeW5jR2VuZXJhdG9yOyIsImZ1bmN0aW9uIF9Bd2FpdFZhbHVlKHZhbHVlKSB7XG4gIHRoaXMud3JhcHBlZCA9IHZhbHVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9Bd2FpdFZhbHVlOyIsInZhciBBd2FpdFZhbHVlID0gcmVxdWlyZShcIi4vQXdhaXRWYWx1ZVwiKTtcblxuZnVuY3Rpb24gX2F3YWl0QXN5bmNHZW5lcmF0b3IodmFsdWUpIHtcbiAgcmV0dXJuIG5ldyBBd2FpdFZhbHVlKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXdhaXRBc3luY0dlbmVyYXRvcjsiLCJ2YXIgQXN5bmNHZW5lcmF0b3IgPSByZXF1aXJlKFwiLi9Bc3luY0dlbmVyYXRvclwiKTtcblxuZnVuY3Rpb24gX3dyYXBBc3luY0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBuZXcgQXN5bmNHZW5lcmF0b3IoZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3dyYXBBc3luY0dlbmVyYXRvcjsiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiKGZ1bmN0aW9uIChnbG9iYWwsIHVuZGVmaW5lZCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgaWYgKGdsb2JhbC5zZXRJbW1lZGlhdGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBuZXh0SGFuZGxlID0gMTsgLy8gU3BlYyBzYXlzIGdyZWF0ZXIgdGhhbiB6ZXJvXG4gICAgdmFyIHRhc2tzQnlIYW5kbGUgPSB7fTtcbiAgICB2YXIgY3VycmVudGx5UnVubmluZ0FUYXNrID0gZmFsc2U7XG4gICAgdmFyIGRvYyA9IGdsb2JhbC5kb2N1bWVudDtcbiAgICB2YXIgcmVnaXN0ZXJJbW1lZGlhdGU7XG5cbiAgICBmdW5jdGlvbiBzZXRJbW1lZGlhdGUoY2FsbGJhY2spIHtcbiAgICAgIC8vIENhbGxiYWNrIGNhbiBlaXRoZXIgYmUgYSBmdW5jdGlvbiBvciBhIHN0cmluZ1xuICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGNhbGxiYWNrID0gbmV3IEZ1bmN0aW9uKFwiXCIgKyBjYWxsYmFjayk7XG4gICAgICB9XG4gICAgICAvLyBDb3B5IGZ1bmN0aW9uIGFyZ3VtZW50c1xuICAgICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpICsgMV07XG4gICAgICB9XG4gICAgICAvLyBTdG9yZSBhbmQgcmVnaXN0ZXIgdGhlIHRhc2tcbiAgICAgIHZhciB0YXNrID0geyBjYWxsYmFjazogY2FsbGJhY2ssIGFyZ3M6IGFyZ3MgfTtcbiAgICAgIHRhc2tzQnlIYW5kbGVbbmV4dEhhbmRsZV0gPSB0YXNrO1xuICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUobmV4dEhhbmRsZSk7XG4gICAgICByZXR1cm4gbmV4dEhhbmRsZSsrO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFySW1tZWRpYXRlKGhhbmRsZSkge1xuICAgICAgICBkZWxldGUgdGFza3NCeUhhbmRsZVtoYW5kbGVdO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJ1bih0YXNrKSB7XG4gICAgICAgIHZhciBjYWxsYmFjayA9IHRhc2suY2FsbGJhY2s7XG4gICAgICAgIHZhciBhcmdzID0gdGFzay5hcmdzO1xuICAgICAgICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJ1bklmUHJlc2VudChoYW5kbGUpIHtcbiAgICAgICAgLy8gRnJvbSB0aGUgc3BlYzogXCJXYWl0IHVudGlsIGFueSBpbnZvY2F0aW9ucyBvZiB0aGlzIGFsZ29yaXRobSBzdGFydGVkIGJlZm9yZSB0aGlzIG9uZSBoYXZlIGNvbXBsZXRlZC5cIlxuICAgICAgICAvLyBTbyBpZiB3ZSdyZSBjdXJyZW50bHkgcnVubmluZyBhIHRhc2ssIHdlJ2xsIG5lZWQgdG8gZGVsYXkgdGhpcyBpbnZvY2F0aW9uLlxuICAgICAgICBpZiAoY3VycmVudGx5UnVubmluZ0FUYXNrKSB7XG4gICAgICAgICAgICAvLyBEZWxheSBieSBkb2luZyBhIHNldFRpbWVvdXQuIHNldEltbWVkaWF0ZSB3YXMgdHJpZWQgaW5zdGVhZCwgYnV0IGluIEZpcmVmb3ggNyBpdCBnZW5lcmF0ZWQgYVxuICAgICAgICAgICAgLy8gXCJ0b28gbXVjaCByZWN1cnNpb25cIiBlcnJvci5cbiAgICAgICAgICAgIHNldFRpbWVvdXQocnVuSWZQcmVzZW50LCAwLCBoYW5kbGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHRhc2sgPSB0YXNrc0J5SGFuZGxlW2hhbmRsZV07XG4gICAgICAgICAgICBpZiAodGFzaykge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IHRydWU7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcnVuKHRhc2spO1xuICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW1tZWRpYXRlKGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxOZXh0VGlja0ltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgcHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbiAoKSB7IHJ1bklmUHJlc2VudChoYW5kbGUpOyB9KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYW5Vc2VQb3N0TWVzc2FnZSgpIHtcbiAgICAgICAgLy8gVGhlIHRlc3QgYWdhaW5zdCBgaW1wb3J0U2NyaXB0c2AgcHJldmVudHMgdGhpcyBpbXBsZW1lbnRhdGlvbiBmcm9tIGJlaW5nIGluc3RhbGxlZCBpbnNpZGUgYSB3ZWIgd29ya2VyLFxuICAgICAgICAvLyB3aGVyZSBgZ2xvYmFsLnBvc3RNZXNzYWdlYCBtZWFucyBzb21ldGhpbmcgY29tcGxldGVseSBkaWZmZXJlbnQgYW5kIGNhbid0IGJlIHVzZWQgZm9yIHRoaXMgcHVycG9zZS5cbiAgICAgICAgaWYgKGdsb2JhbC5wb3N0TWVzc2FnZSAmJiAhZ2xvYmFsLmltcG9ydFNjcmlwdHMpIHtcbiAgICAgICAgICAgIHZhciBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhciBvbGRPbk1lc3NhZ2UgPSBnbG9iYWwub25tZXNzYWdlO1xuICAgICAgICAgICAgZ2xvYmFsLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXMgPSBmYWxzZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBnbG9iYWwucG9zdE1lc3NhZ2UoXCJcIiwgXCIqXCIpO1xuICAgICAgICAgICAgZ2xvYmFsLm9ubWVzc2FnZSA9IG9sZE9uTWVzc2FnZTtcbiAgICAgICAgICAgIHJldHVybiBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbFBvc3RNZXNzYWdlSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIC8vIEluc3RhbGxzIGFuIGV2ZW50IGhhbmRsZXIgb24gYGdsb2JhbGAgZm9yIHRoZSBgbWVzc2FnZWAgZXZlbnQ6IHNlZVxuICAgICAgICAvLyAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuL0RPTS93aW5kb3cucG9zdE1lc3NhZ2VcbiAgICAgICAgLy8gKiBodHRwOi8vd3d3LndoYXR3Zy5vcmcvc3BlY3Mvd2ViLWFwcHMvY3VycmVudC13b3JrL211bHRpcGFnZS9jb21tcy5odG1sI2Nyb3NzRG9jdW1lbnRNZXNzYWdlc1xuXG4gICAgICAgIHZhciBtZXNzYWdlUHJlZml4ID0gXCJzZXRJbW1lZGlhdGUkXCIgKyBNYXRoLnJhbmRvbSgpICsgXCIkXCI7XG4gICAgICAgIHZhciBvbkdsb2JhbE1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnNvdXJjZSA9PT0gZ2xvYmFsICYmXG4gICAgICAgICAgICAgICAgdHlwZW9mIGV2ZW50LmRhdGEgPT09IFwic3RyaW5nXCIgJiZcbiAgICAgICAgICAgICAgICBldmVudC5kYXRhLmluZGV4T2YobWVzc2FnZVByZWZpeCkgPT09IDApIHtcbiAgICAgICAgICAgICAgICBydW5JZlByZXNlbnQoK2V2ZW50LmRhdGEuc2xpY2UobWVzc2FnZVByZWZpeC5sZW5ndGgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBvbkdsb2JhbE1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGdsb2JhbC5hdHRhY2hFdmVudChcIm9ubWVzc2FnZVwiLCBvbkdsb2JhbE1lc3NhZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShtZXNzYWdlUHJlZml4ICsgaGFuZGxlLCBcIipcIik7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbE1lc3NhZ2VDaGFubmVsSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHZhciBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBoYW5kbGUgPSBldmVudC5kYXRhO1xuICAgICAgICAgICAgcnVuSWZQcmVzZW50KGhhbmRsZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIGNoYW5uZWwucG9ydDIucG9zdE1lc3NhZ2UoaGFuZGxlKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsUmVhZHlTdGF0ZUNoYW5nZUltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICB2YXIgaHRtbCA9IGRvYy5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICAvLyBDcmVhdGUgYSA8c2NyaXB0PiBlbGVtZW50OyBpdHMgcmVhZHlzdGF0ZWNoYW5nZSBldmVudCB3aWxsIGJlIGZpcmVkIGFzeW5jaHJvbm91c2x5IG9uY2UgaXQgaXMgaW5zZXJ0ZWRcbiAgICAgICAgICAgIC8vIGludG8gdGhlIGRvY3VtZW50LiBEbyBzbywgdGh1cyBxdWV1aW5nIHVwIHRoZSB0YXNrLiBSZW1lbWJlciB0byBjbGVhbiB1cCBvbmNlIGl0J3MgYmVlbiBjYWxsZWQuXG4gICAgICAgICAgICB2YXIgc2NyaXB0ID0gZG9jLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgICAgICAgICBzY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJ1bklmUHJlc2VudChoYW5kbGUpO1xuICAgICAgICAgICAgICAgIHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBudWxsO1xuICAgICAgICAgICAgICAgIGh0bWwucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgICAgICAgICBzY3JpcHQgPSBudWxsO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsU2V0VGltZW91dEltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgc2V0VGltZW91dChydW5JZlByZXNlbnQsIDAsIGhhbmRsZSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gSWYgc3VwcG9ydGVkLCB3ZSBzaG91bGQgYXR0YWNoIHRvIHRoZSBwcm90b3R5cGUgb2YgZ2xvYmFsLCBzaW5jZSB0aGF0IGlzIHdoZXJlIHNldFRpbWVvdXQgZXQgYWwuIGxpdmUuXG4gICAgdmFyIGF0dGFjaFRvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mICYmIE9iamVjdC5nZXRQcm90b3R5cGVPZihnbG9iYWwpO1xuICAgIGF0dGFjaFRvID0gYXR0YWNoVG8gJiYgYXR0YWNoVG8uc2V0VGltZW91dCA/IGF0dGFjaFRvIDogZ2xvYmFsO1xuXG4gICAgLy8gRG9uJ3QgZ2V0IGZvb2xlZCBieSBlLmcuIGJyb3dzZXJpZnkgZW52aXJvbm1lbnRzLlxuICAgIGlmICh7fS50b1N0cmluZy5jYWxsKGdsb2JhbC5wcm9jZXNzKSA9PT0gXCJbb2JqZWN0IHByb2Nlc3NdXCIpIHtcbiAgICAgICAgLy8gRm9yIE5vZGUuanMgYmVmb3JlIDAuOVxuICAgICAgICBpbnN0YWxsTmV4dFRpY2tJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChjYW5Vc2VQb3N0TWVzc2FnZSgpKSB7XG4gICAgICAgIC8vIEZvciBub24tSUUxMCBtb2Rlcm4gYnJvd3NlcnNcbiAgICAgICAgaW5zdGFsbFBvc3RNZXNzYWdlSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoZ2xvYmFsLk1lc3NhZ2VDaGFubmVsKSB7XG4gICAgICAgIC8vIEZvciB3ZWIgd29ya2Vycywgd2hlcmUgc3VwcG9ydGVkXG4gICAgICAgIGluc3RhbGxNZXNzYWdlQ2hhbm5lbEltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGRvYyAmJiBcIm9ucmVhZHlzdGF0ZWNoYW5nZVwiIGluIGRvYy5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpKSB7XG4gICAgICAgIC8vIEZvciBJRSA24oCTOFxuICAgICAgICBpbnN0YWxsUmVhZHlTdGF0ZUNoYW5nZUltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBGb3Igb2xkZXIgYnJvd3NlcnNcbiAgICAgICAgaW5zdGFsbFNldFRpbWVvdXRJbXBsZW1lbnRhdGlvbigpO1xuICAgIH1cblxuICAgIGF0dGFjaFRvLnNldEltbWVkaWF0ZSA9IHNldEltbWVkaWF0ZTtcbiAgICBhdHRhY2hUby5jbGVhckltbWVkaWF0ZSA9IGNsZWFySW1tZWRpYXRlO1xufSh0eXBlb2Ygc2VsZiA9PT0gXCJ1bmRlZmluZWRcIiA/IHR5cGVvZiBnbG9iYWwgPT09IFwidW5kZWZpbmVkXCIgPyB0aGlzIDogZ2xvYmFsIDogc2VsZikpO1xuIiwidmFyIHNjb3BlID0gKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgJiYgZ2xvYmFsKSB8fFxuICAgICAgICAgICAgKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmIHNlbGYpIHx8XG4gICAgICAgICAgICB3aW5kb3c7XG52YXIgYXBwbHkgPSBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHk7XG5cbi8vIERPTSBBUElzLCBmb3IgY29tcGxldGVuZXNzXG5cbmV4cG9ydHMuc2V0VGltZW91dCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFRpbWVvdXQoYXBwbHkuY2FsbChzZXRUaW1lb3V0LCBzY29wZSwgYXJndW1lbnRzKSwgY2xlYXJUaW1lb3V0KTtcbn07XG5leHBvcnRzLnNldEludGVydmFsID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgVGltZW91dChhcHBseS5jYWxsKHNldEludGVydmFsLCBzY29wZSwgYXJndW1lbnRzKSwgY2xlYXJJbnRlcnZhbCk7XG59O1xuZXhwb3J0cy5jbGVhclRpbWVvdXQgPVxuZXhwb3J0cy5jbGVhckludGVydmFsID0gZnVuY3Rpb24odGltZW91dCkge1xuICBpZiAodGltZW91dCkge1xuICAgIHRpbWVvdXQuY2xvc2UoKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gVGltZW91dChpZCwgY2xlYXJGbikge1xuICB0aGlzLl9pZCA9IGlkO1xuICB0aGlzLl9jbGVhckZuID0gY2xlYXJGbjtcbn1cblRpbWVvdXQucHJvdG90eXBlLnVucmVmID0gVGltZW91dC5wcm90b3R5cGUucmVmID0gZnVuY3Rpb24oKSB7fTtcblRpbWVvdXQucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuX2NsZWFyRm4uY2FsbChzY29wZSwgdGhpcy5faWQpO1xufTtcblxuLy8gRG9lcyBub3Qgc3RhcnQgdGhlIHRpbWUsIGp1c3Qgc2V0cyB1cCB0aGUgbWVtYmVycyBuZWVkZWQuXG5leHBvcnRzLmVucm9sbCA9IGZ1bmN0aW9uKGl0ZW0sIG1zZWNzKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcbiAgaXRlbS5faWRsZVRpbWVvdXQgPSBtc2Vjcztcbn07XG5cbmV4cG9ydHMudW5lbnJvbGwgPSBmdW5jdGlvbihpdGVtKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcbiAgaXRlbS5faWRsZVRpbWVvdXQgPSAtMTtcbn07XG5cbmV4cG9ydHMuX3VucmVmQWN0aXZlID0gZXhwb3J0cy5hY3RpdmUgPSBmdW5jdGlvbihpdGVtKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcblxuICB2YXIgbXNlY3MgPSBpdGVtLl9pZGxlVGltZW91dDtcbiAgaWYgKG1zZWNzID49IDApIHtcbiAgICBpdGVtLl9pZGxlVGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbiBvblRpbWVvdXQoKSB7XG4gICAgICBpZiAoaXRlbS5fb25UaW1lb3V0KVxuICAgICAgICBpdGVtLl9vblRpbWVvdXQoKTtcbiAgICB9LCBtc2Vjcyk7XG4gIH1cbn07XG5cbi8vIHNldGltbWVkaWF0ZSBhdHRhY2hlcyBpdHNlbGYgdG8gdGhlIGdsb2JhbCBvYmplY3RcbnJlcXVpcmUoXCJzZXRpbW1lZGlhdGVcIik7XG4vLyBPbiBzb21lIGV4b3RpYyBlbnZpcm9ubWVudHMsIGl0J3Mgbm90IGNsZWFyIHdoaWNoIG9iamVjdCBgc2V0aW1tZWRpYXRlYCB3YXNcbi8vIGFibGUgdG8gaW5zdGFsbCBvbnRvLiAgU2VhcmNoIGVhY2ggcG9zc2liaWxpdHkgaW4gdGhlIHNhbWUgb3JkZXIgYXMgdGhlXG4vLyBgc2V0aW1tZWRpYXRlYCBsaWJyYXJ5LlxuZXhwb3J0cy5zZXRJbW1lZGlhdGUgPSAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZi5zZXRJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiICYmIGdsb2JhbC5zZXRJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICh0aGlzICYmIHRoaXMuc2V0SW1tZWRpYXRlKTtcbmV4cG9ydHMuY2xlYXJJbW1lZGlhdGUgPSAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZi5jbGVhckltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBnbG9iYWwuY2xlYXJJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMgJiYgdGhpcy5jbGVhckltbWVkaWF0ZSk7XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJ4ZHVjZVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJ4ZHVjZVwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG5cbmV4cG9ydCB7IHByb3RvY29scyB9IGZyb20gXCJtb2R1bGVzL3Byb3RvY29sXCI7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuLyoqXG4gKiBBIGJ1bmNoIG9mIHV0aWxpdHkgZnVuY3Rpb25zLiBUaGVzZSBhcmUgYWxsIHVzZWQgYnkgdGhlIGxpYnJhcnkgaXRzZWxmIGluXG4gKiBwbGFjZXMsIGJ1dCBtYW55IG9mIHRoZW0gYXJlIHN1aXRhYmxlIGZvciBnZW5lcmFsIHVzZSBhcyB3ZWxsLlxuICogXlxuICogQG1vZHVsZSBjb21tb25cbiAqIEBwcml2YXRlXG4gKi9cblxuLyoqXG4gKiBgT2JqZWN0YCdzIGB0b1N0cmluZ2AgaXMgZXhwbGljaXRseSB1c2VkIHRocm91Z2hvdXQgYmVjYXVzZSBpdCBjb3VsZCBiZVxuICogcmVkZWZpbmVkIGluIGFueSBzdWJ0eXBlIG9mIGBPYmplY3RgLlxuICpcbiAqIEBmdW5jdGlvbiB0b1N0cmluZ1xuICogQHByaXZhdGVcbiAqL1xuY29uc3QgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhIHZhbHVlIGlzIGEgZnVuY3Rpb24uXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZS9jb21tb25cbiAqIEBwYXJhbSB7Kn0geCBUaGUgdmFsdWUgYmVpbmcgdGVzdGVkIHRvIHNlZSBpZiBpdCBpcyBhIGZ1bmN0aW9uLlxuICogQHJldHVybiB7Ym9vbGVhbn0gRWl0aGVyIGB0cnVlYCBpZiB0aGUgdGVzdCB2YWx1ZSBpcyBhIGZ1bmN0aW9uIG9yIGBmYWxzZWAgaWZcbiAqICAgICBpdCBpcyBub3QuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHgpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoeCkgPT09IFwiW29iamVjdCBGdW5jdGlvbl1cIjtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgYSB2YWx1ZSBpcyBhIGdlbmVyYXRvciBmdW5jdGlvbi5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlL2NvbW1vblxuICogQHBhcmFtIHsqfSB4IFRoZSB2YWx1ZSBiZWluZyB0ZXN0ZWQgdG8gc2VlIGlmIGl0IGlzIGEgZ2VuZXJhdG9yIGZ1bmN0aW9uLlxuICogQHJldHVybiB7Ym9vbGVhbn0gRWl0aGVyIGB0cnVlYCBpZiB0aGUgdGVzdCB2YWx1ZSBpcyBhIGdlbmVyYXRvciBmdW5jdGlvbiBvclxuICogICAgIGBmYWxzZWAgaWYgaXQgaXMgbm90LlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaXNHZW5lcmF0b3JGdW5jdGlvbih4KSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHgpID09PSBcIltvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dXCI7XG59XG5cbmV4cG9ydCB7IGlzRnVuY3Rpb24sIGlzR2VuZXJhdG9yRnVuY3Rpb24gfTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG4vKipcbiAqIFByb3RvY29scyBmb3IgaXRlcmF0aW9uIGFuZCByZWR1Y3Rpb24uXG4gKlxuICogVGhlIG5hbWVzIGZvciB0aGVzZSBwcm90b2NvbHMgY2FtZSBmcm9tIGEgZGlzY3Vzc2lvbiB0aHJlYWRcbiAqICh7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2NvZ25pdGVjdC1sYWJzL3RyYW5zZHVjZXJzLWpzL2lzc3Vlcy8yMH0pIGZyb20gYVxuICogdGltZSB3aGVuIHRyYW5zZHVjZXJzIHdlcmUgdmVyeSBtdWNoIGluIHRoZSBmb3JlZnJvbnQuIEl0J3MgdGhlIGNsb3Nlc3QgdGhpbmdcbiAqIHRoZXJlIGlzIHRvIGEgc3RhbmRhcmQsIHNvIGl0IHdhcyBhZG9wdGVkIGhlcmUuXG4gKlxuICogVGhlc2UgYXJlIHRoZSBzYW1lIHN5bWJvbHMgYXMgYXZhaWxhYmxlIGluIG15IHRyYW5zZHVjZXIgbGlicmFyeS4gVGhleSBhcmVcbiAqIHB1YmxpY2x5IGF2YWlsYWJsZSBmcm9tIHRoZXJlLlxuICpcbiAqIEBtb2R1bGUgeGR1Y2UvcHJvdG9jb2xcbiAqIEBwcml2YXRlXG4gKi9cblxuaW1wb3J0IHsgaXNGdW5jdGlvbiwgaXNHZW5lcmF0b3JGdW5jdGlvbiB9IGZyb20gXCJtb2R1bGVzL2NvbW1vblwiO1xuXG4vKipcbiAqIFRoZSBtYXBwaW5nIG9mIHByb3RvY29sIG5hbWVzIHRvIHRoZWlyIHJlc3BlY3RpdmUgcHJvcGVydHkga2V5IG5hbWVzLiBUaGVcbiAqIHZhbHVlcyBvZiB0aGlzIG1hcCB3aWxsIGRlcGVuZCBvbiB3aGV0aGVyIHN5bWJvbHMgYXJlIGF2YWlsYWJsZS5cbiAqXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBQcm90b2NvbE1hcFxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHByb3BlcnR5IHtTeW1ib2x9IGluaXQgVGhlIGB0cmFuc2R1Y2VyL2luaXRgIHByb3RvY29sLiBUaGlzIGlzIHVzZWRcbiAqICAgICB0byBtYXJrIGZ1bmN0aW9ucyB0aGF0IGluaXRpYWxpemUgYSB0YXJnZXQgY29sbGVjdGlvbiBiZWZvcmUgYWRkaW5nIGl0ZW1zXG4gKiAgICAgdG8gaXQuXG4gKiBAcHJvcGVydHkge1N5bWJvbH0gc3RlcCBUaGUgYHRyYW5zZHVjZXIvc3RlcGAgcHJvdG9jb2wuIFRoaXMgaXMgdXNlZFxuICogICAgIHRvIG1hcmsgZnVuY3Rpb25zIHRoYXQgYXJlIHVzZWQgaW4gdGhlIHRyYW5zZHVjZXIncyBzdGVwIHByb2Nlc3MsIHdoZXJlXG4gKiAgICAgb2JqZWN0cyBhcmUgYWRkZWQgdG8gdGhlIHRhcmdldCBjb2xsZWN0aW9uIG9uZSBhdCBhIHRpbWUuXG4gKiBAcHJvcGVydHkge1N5bWJvbH0gcmVzdWx0IFRoZSBgdHJhbnNkdWNlci9yZXN1bHRgIHByb3RvY29sLiBUaGlzIGlzXG4gKiAgICAgdXNlZCB0byBtYXJrIGZ1bmN0aW9ucyB0aGF0IHRha2UgdGhlIGZpbmFsIHJlc3VsdCBvZiB0aGUgc3RlcCBwcm9jZXNzIGFuZFxuICogICAgIHJldHVybiB0aGUgZmluYWwgZm9ybSB0byBiZSBvdXRwdXQuIFRoaXMgaXMgb3B0aW9uYWw7IGlmIHRoZSB0cmFuc2R1Y2VyXG4gKiAgICAgZG9lcyBub3Qgd2FudCB0byB0cmFuc2Zvcm0gdGhlIGZpbmFsIHJlc3VsdCwgaXQgc2hvdWxkIGp1c3QgcmV0dXJuIHRoZVxuICogICAgIHJlc3VsdCBvZiBpdHMgY2hhaW5lZCB0cmFuc2R1Y2VyJ3MgYHJlc3VsdGAgZnVuY3Rpb24uXG4gKiBAcHJvcGVydHkge1N5bWJvbH0gcmVkdWNlZCBUaGUgYHRyYW5zZHVjZXIvcmVkdWNlZGAgcHJvdG9jb2wuIFRoZVxuICogICAgIHByZXNlbmNlIG9mIHRoaXMga2V5IG9uIGFuIG9iamVjdCBpbmRpY2F0ZXMgdGhhdCBpdHMgdHJhbnNmb3JtYXRpb24gaGFzXG4gKiAgICAgYmVlbiBjb21wbGV0ZWQuIEl0IGlzIHVzZWQgaW50ZXJuYWxseSB0byBtYXJrIGNvbGxlY3Rpb25zIHdob3NlXG4gKiAgICAgdHJhbnNmb3JtYXRpb25zIGNvbmNsdWRlIGJlZm9yZSBldmVyeSBvYmplY3QgaXMgaXRlcmF0ZWQgb3ZlciAoYXMgaW5cbiAqICAgICBge0BsaW5rIHhkdWNlLnRha2V9YCB0cmFuc2R1Y2Vycy4pIEl0IGlzIG9mIGxpdHRsZSB1c2UgYmV5b25kIHRyYW5zZHVjZXJcbiAqICAgICBhdXRob3JpbmcuXG4gKiBAcHJvcGVydHkge1N5bWJvbH0gdmFsdWUgVGhlIGB0cmFuc2R1Y2VyL3ZhbHVlYCBwcm90b2NvbC4gVGhpcyBpc1xuICogICAgIHVzZWQgaW50ZXJuYWxseSB0byBtYXJrIHByb3BlcnRpZXMgdGhhdCBjb250YWluIHRoZSB2YWx1ZSBvZiBhIHJlZHVjZWRcbiAqICAgICB0cmFuc2Zvcm1hdGlvbi4gSXQgaXMgb2YgbGl0dGxlIHVzZSBiZXlvbmQgdHJhbnNkdWNlciBhdXRob3JpbmcuXG4gKi9cblxuLyoqXG4gKiBUaGUgbWFwcGluZyBvZiBwcm90b2NvbCBuYW1lcyB0byB0aGVpciByZXNwZWN0aXZlIHByb3BlcnR5IGtleSBuYW1lcy5cbiAqXG4gKiBAdHlwZSB7bW9kdWxlOnhkdWNlLlByb3RvY29sTWFwfVxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICovXG5jb25zdCBwcm90b2NvbHMgPSBPYmplY3QuY3JlYXRlKG51bGwsIHtcbiAgaW5pdDoge1xuICAgIHZhbHVlOiBTeW1ib2wuZm9yKFwidHJhbnNkdWNlci9pbml0XCIpXG4gIH0sXG4gIHN0ZXA6IHtcbiAgICB2YWx1ZTogU3ltYm9sLmZvcihcInRyYW5zZHVjZXIvc3RlcFwiKVxuICB9LFxuICByZXN1bHQ6IHtcbiAgICB2YWx1ZTogU3ltYm9sLmZvcihcInRyYW5zZHVjZXIvcmVzdWx0XCIpXG4gIH0sXG4gIHJlZHVjZWQ6IHtcbiAgICB2YWx1ZTogU3ltYm9sLmZvcihcInRyYW5zZHVjZXIvcmVkdWNlZFwiKVxuICB9LFxuICB2YWx1ZToge1xuICAgIHZhbHVlOiBTeW1ib2wuZm9yKFwidHJhbnNkdWNlci92YWx1ZVwiKVxuICB9XG59KTtcblxuZnVuY3Rpb24gaXNJbXBsZW1lbnRlZChvYmosIHByb3RvY29sKSB7XG4gIGlmICghb2JqKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3dpdGNoIChwcm90b2NvbCkge1xuICAgIGNhc2UgXCJpdGVyYXRvclwiOlxuICAgICAgcmV0dXJuIGlzRnVuY3Rpb24ob2JqW1N5bWJvbC5pdGVyYXRvcl0gfHwgb2JqLm5leHQpO1xuICAgIGNhc2UgXCJhc3luY0l0ZXJhdG9yXCI6XG4gICAgICByZXR1cm4gaXNHZW5lcmF0b3JGdW5jdGlvbihvYmpbU3ltYm9sLmFzeW5jSXRlcmF0b3JdKTtcbiAgICBjYXNlIFwicmVkdWNlZFwiOlxuICAgIGNhc2UgXCJ2YWx1ZVwiOlxuICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqKS5pbmNsdWRlcyhwcm90b2NvbHNbcHJvdG9jb2xdKTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGlzRnVuY3Rpb24ob2JqW3Byb3RvY29sc1twcm90b2NvbF1dKTtcbiAgfVxufVxuXG5leHBvcnQgeyBwcm90b2NvbHMsIGlzSW1wbGVtZW50ZWQgfTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG4vKipcbiAqIEFsbCBvZiB0aGUgcHVibGljLWZhY2luZyBDaGFua28gZnVuY3Rpb25zIGFyZSBnYXRoZXJlZCBoZXJlIGluIG9uZSBwbGFjZSB0b1xuICogYmUgZXhwb3J0ZWQgYXMgYSB3aG9sZS4gVGhpcyBpcyBhIGNvbXBsZXRlbHkgZmxhdCBsaXN0IG9mIGV4cG9ydHMsIGFzXG4gKiBpbmx1ZGluZyBhbnkgb2JqZWN0IGxpdGVyYWxzIGZvciBleHBvcnQgKHdoaWNoIHdvdWxkIGJlIG5hdHVyYWwgZm9yIGJ1ZmZlcnMsXG4gKiBmb3IgZXhhbXBsZSkgd291bGQga2VlcCB0cmVlLXNoYWtpbmcgZnJvbSB3b3JraW5nIHJpZ2h0LlxuICpcbiAqIEBtb2R1bGUgY3NwXG4gKi9cblxuZXhwb3J0IHsgZml4ZWQsIGRyb3BwaW5nLCBzbGlkaW5nIH0gZnJvbSBcIm1vZHVsZXMvYnVmZmVyXCI7XG5leHBvcnQge1xuICBDTE9TRUQsXG4gIGNoYW4sXG4gIHRpbWVkQ2hhbixcbiAgdHJhbnNDaGFuLFxuICBzZW5kLFxuICByZWN2LFxuICBzZW5kQXN5bmMsXG4gIHJlY3ZBc3luYyxcbiAgcmVjdk9yVGhyb3csXG4gIGNsb3NlLFxuICBpc0Nsb3NlZCxcbiAgaXNCdWZmZXJlZCxcbiAgaXNUaW1lZCxcbiAgc2VsZWN0LFxuICBzZWxlY3RBc3luYyxcbiAgdmFsdWUsXG4gIGNoYW5uZWxcbn0gZnJvbSBcIm1vZHVsZXMvY2hhbm5lbFwiO1xuZXhwb3J0IHtcbiAgY29uZmlnLFxuICBTRVRfSU1NRURJQVRFLFxuICBNRVNTQUdFX0NIQU5ORUwsXG4gIFNFVF9USU1FT1VUXG59IGZyb20gXCJtb2R1bGVzL2Rpc3BhdGNoZXJcIjtcbmV4cG9ydCB7IGdvLCBzbGVlcCwgam9pbiB9IGZyb20gXCJtb2R1bGVzL3Byb2Nlc3NcIjtcbmV4cG9ydCB7IEVNUFRZIH0gZnJvbSBcIm1vZHVsZXMvcXVldWVcIjtcblxuLyoqXG4gKiBBbiBlcnJvciBoYW5kbGluZyBmdW5jaXRvbi4gVGhpcyBpcyB1c2VkIHRvIGhhbmRsZSBleGNlcHRpb25zIHRocm93biBpbiBhc3luY1xuICogZnVuY3Rpb25zIGFuZCBpbiB0cmFuc2R1Y2Vycy4gVGhlIHJldHVybiB2YWx1ZSBvZiBhbiBleGNlcHRpb24gaGFuZGxlciBpc1xuICogdHlwaWNhbGx5IHNlbnQgdG8gYSBjaGFubmVsOyBpZiB0aGUgZXhjZXB0aW9uIGhhcHBlbmVkIHdpdGhpbiBhbiBhc3luY1xuICogZnVuY3Rpb24sIGl0IHdpbGwgYmUgc2VudCB0byB0aGF0IGZ1bmN0aW9uJ3Mgb3V0cHV0IGNoYW5uZWwsIGFuZCBpZiB0aGVcbiAqIGV4Y3BldGlvbiBoYXBwZW5lZCBpbiBhIHRyYW5zZHVjZXIsIGl0IHdpbGwgYmUgc2VudCB0byB0aGUgY2hhbm5lbCB0byB3aGljaFxuICogdGhlIHRyYW5zZHVjZXIgaXMgYXR0YWNoZWQuXG4gKlxuICogQGNhbGxiYWNrIEV4Y2VwdGlvbkhhbmRsZXJcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcGFyYW0ge29iamVjdH0gZXJyIFRoZSBlcnJvciBvYmplY3QgdGhhdCB3YXMgdGhyb3duIHRvIGNhdXNlIHRoZSBlcnJvciB0b1xuICogICAgIGhhdmUgdG8gYmUgaGFuZGxlZC5cbiAqIEByZXR1cm4geyp9IEEgdmFsdWUgZGVjaWRlZCBieSB0aGUgaGFuZGxlciB0aGF0IHdpbGwgYmUgc2VudCB0byBhIGNoYW5uZWwuXG4gKi9cblxuLyoqXG4gKiBBIGNhbGxiYWNrIHRoYXQncyBydW4gd2hlbiBhIG5vbi1ibG9ja2luZyBjaGFubmVsIG9wZXJhdGlvbiBjb21wbGV0ZXMuIFRoZVxuICogdmFsdWUgdGhhdCB0aGlzIGZ1bmN0aW9uIHJlY2VpdmVzIGlzIGlkZW50aWNhbCB0byB3aGF0IGlzIHJldHVybmVkIGJ5IGFcbiAqIGJsb2NraW5nIGNhbGw6IHRoZSB2YWx1ZSByZWNlaXZlZCBmcm9tIHRoZSBjaGFubmVsIGZvciBhIGByZWN2YCwgb3IgYHRydWVgIG9yXG4gKiBgZmFsc2VgIGRlcGVuZGluZyBvbiB0aGUgY2hhbm5lbCBzdGF0dXMgZm9yIGEgYHNlbmRgLiBBbnkgcmV0dXJuIHZhbHVlIGZyb21cbiAqIHRoaXMgY2FsbGJhY2sgaXMgaWdub3JlZC5cbiAqXG4gKiBAY2FsbGJhY2sgT3BDYWxsYmFja1xuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgRWl0aGVyIHRoZSB2YWx1ZSByZWNlaXZlZCBmcm9tIHRoZSBjaGFubmVsLCBvciB3aGV0aGVyIG9yXG4gKiBub3QgYSB2YWx1ZSB3YXMgc3VjY2Vzc2Z1bGx5IHNlbnQuXG4gKi9cblxuLyoqXG4gKiBBIGNhbGxiYWNrIHRoYXQncyBydW4gd2hlbiBhIG5vbi1ibG9ja2luZyBgc2VsZWN0YCBvcGVyYXRpb24gY29tcGxldGVzLiBUaGVcbiAqIHZhbHVlIHRoYXQgdGhpcyBmdW5jdGlvbiByZWNlaXZlcyBpcyBhbiBvYmplY3Qgd2l0aCB0d28gcHJvcGVydGllczogdGhlIHZhbHVlXG4gKiB0aGF0IHRoZSBgc2VsZWN0YCBvcGVyYXRpb24gY29tcGxldGVkIHdpdGggKGVpdGhlciB0aGUgdmFsdWUgcmVjZWl2ZWQgZnJvbVxuICogdGhlIGNoYW5uZWwgaW4gYSByZWNlaXZlIG9wZXJhdGlvbiwgb3IgYHRydWVgIG9yIGBmYWxzZWAgaW4gYSBzZW5kXG4gKiBvcGVyYXRpb24pLCBhbG9uZyB3aXRoIHRoZSBjaGFubmVsIHdoZXJlIHRoZSBvcGVyYXRpb24gYWN0dWFsbHkgaGFwcGVuZWQuIEFueVxuICogcmV0dXJuIHZhbHVlIGZyb20gdGhpcyBjYWxsYmFjayBpcyBpZ25vcmVkLlxuICpcbiAqIEBjYWxsYmFjayBTZWxlY3RDYWxsYmFja1xuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5TZWxlY3RSZXN1bHR9IGRhdGEgVGhlIHZhbHVlIHJldHVybmVkIGZyb20gdGhlIHNlbGVjdFxuICogICAgIG9wZXJhdGlvbi5cbiAqL1xuXG4vKipcbiAqIEEgZnVuY3Rpb24gdGhhdCB0cmFuc2Zvcm1zIGRhdGEgYW5kIGNhbiBiZSBjb21wb3NlZCB3aXRoIG90aGVyIHRyYW5zZHVjZXJzXG4gKiBpbnRvIGEgc2luZ2xlIHRyYW5zZHVjZXIuIFRoZSB0cmFuc2R1Y2VycyB0aGVtc2VsdmVzIGFyZSBwcm92aWRlZCBieSBvdGhlclxuICogbGlicmFyaWVzOyB0aGUgb25seSBpbnZvbHZlbWVudCBvZiB0aGlzIGxpYnJhciBpcyBhcyBhIGNvbnN1bWVyIG9mXG4gKiB0cmFuc2R1Y2Vycy5cbiAqXG4gKiBUcmFuc2R1Y2VycyB3b3JrIGJ5IGhhdmluZyBzdGVwIGZ1bmN0aW9ucyB0aGF0IGFyZSBrbm93biB2aWEgcHJvdG9jb2wsIGFuZCBpdFxuICogaXMgdGhlc2Ugc3RlcCBmdW5jdGlvbnMgdGhhdCB0YWtlIGEgdmFsdWUgYXQgYSB0aW1lIHRvIGJlIHRyYW5zZm9ybWVkIGFzXG4gKiB0aGVpciBhcmd1bWVudHMuIFRoZSBhcmd1bWVudHMgdG8gdGhlIHRyYW5zZHVjZXJzIHRoZW1zZWx2ZXMgYXJlIG90aGVyXG4gKiB0cmFuc2R1Y2VycyB0aGF0IGFyZSB0aGVuIGNvbXBvc2VkIGludG8gYSBzaW5nbGUgdHJhbnNkdWNlciwgd2hpY2ggaXMgdGhlblxuICogcmV0dXJuZWQuIFRoZXNlIHZhbHVlcyBuZWVkIG5vdCBjb25jZXJuIGEgdXNlciBvZiB0aHMgbGlicmFyeTsganVzdCBwYXNzIGFcbiAqIHRyYW5zZHVjZXIgdG8gYHtAbGluayBtb2R1bGU6Y3NwLmNoYW58Y2hhbn1gIG9yXG4gKiBge0BsaW5rIG1vZHVsZTpjc3AudHJhbnNDaGFufHRyYW5zQ2hhbn1gIGFuZCBldmVyeXRoaW5nIGVsc2Ugd2lsbCBiZSBoYW5kbGVkLlxuICpcbiAqIEBjYWxsYmFjayBUcmFuc2R1Y2VyXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICogQHBhcmFtIHttb2R1bGU6Y3NwLlRyYW5zZHVjZXJ9IHhmb3JtIEEgdHJhbnNkdWNlciB0byBjaGFpbiB0aGlzIHRyYW5zZHVjZXJcbiAqICAgICB0by5cbiAqIEByZXR1cm4ge21vZHVsZTpjc3AuVHJhbnNkdWNlcn0gQSBuZXcgdHJhbnNkdWNlciBjb25zaXN0aW5nIG9mIHRoZVxuICogICAgIGNvbXBvc2l0aW9uIG9mIHRoaXMgb25lIGFuZCBgeGZvcm1gLlxuICovXG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuLyoqXG4gKiBQcm92aWRlcyBzZXZlcmFsIHR5cGVzIG9mIGJ1ZmZlcnMgdXNhYmxlIGluIGJ1ZmZlcmVkIGNoYW5uZWxzLiBUaGVzZSBhcmUgYWxsXG4gKiBidWlsdCBvbiBhIHNtYWxsLCBlZmZpY2llbnQgcXVldWUgd2hpY2ggaXMgaW4gdHVybiBiYWNrZWQgYnkgYSBKYXZhU2NyaXB0XG4gKiBhcnJheS5cbiAqXG4gKiBAbW9kdWxlIGJ1ZmZlclxuICogQHByaXZhdGVcbiAqL1xuXG5pbXBvcnQgeyBxdWV1ZSBhcyBxLCBjb3VudCBhcyBxQ291bnQsIGVucXVldWUsIGRlcXVldWUgfSBmcm9tIFwibW9kdWxlcy9xdWV1ZVwiO1xuXG4vKipcbiAqIEEgYnVmZmVyIHRoYXQgc3RvcmVzIHZhbHVlcyBzZW50IHRvIGEgYnVmZmVyZWQgY2hhbm5lbCB1bnRpbCBhIHByb2Nlc3NcbiAqIHJlY2VpdmVzIHRoZW0uXG4gKlxuICogRGlmZmVyZW50IGJ1ZmZlcnMgZGlmZmVyIG9ubHkgaW4gdGhlIHdheSB0aGF0IHRoZXkgZGV0ZXJtaW5lIHdoZXRoZXIgdGhleSBhcmVcbiAqIGZ1bGwgYW5kIGluIHdoYXQgaGFwcGVucyB3aGVuIGEgbmV3IHZhbHVlIGlzIGFkZGVkIHRvIGEgZnVsbCBidWZmZXIuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqIEB0eXBlZGVmIHsobW9kdWxlOmNzcC5GaXhlZEJ1ZmZlciB8IG1vZHVsZTpjc3AuRHJvcHBpbmdCdWZmZXIgfFxuICogICAgIG1vZHVsZTpjc3AuU2xpZGluZ0J1ZmZlcil9IEJ1ZmZlclxuICovXG5cbi8qKlxuICogVGhlIG5hbWUgb2YgYSBwcm9wZXJ0eSB0aGF0IGV4aXN0cyBvbiBidWZmZXIgb2JqZWN0cyBmb3IgdGhlIHB1cnBvc2Ugb2ZcbiAqIGl0ZW50aWZ5aW5nIHRoZW0gYXMgYnVmZmVyIG9iamVjdHMuXG4gKlxuICogQHR5cGUge1N5bWJvbH1cbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IEJVRkZFUiA9IFN5bWJvbChcIkJVRkZFUlwiKTtcblxuLyoqXG4gKiBBIHBvc3NpYmxlIHZhbHVlIG9mIHRoZSBge0BsaW5rIG1vZHVsZTpjc3AvYnVmZmVyLkJVRkZFUnxCVUZGRVJ9IHByb3BlcnR5XG4gKiBpbmRpY2F0aW5nIHRoYXQgdGhlIGJ1ZmZlciBpcyBhIGZpeGVkIGJ1ZmZlci5cbiAqXG4gKiBAdHlwZSB7U3ltYm9sfVxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgRklYRUQgPSBTeW1ib2woXCJGSVhFRFwiKTtcblxuLyoqXG4gKiBBIHBvc3NpYmxlIHZhbHVlIG9mIHRoZSBge0BsaW5rIG1vZHVsZTpjc3AvYnVmZmVyLkJVRkZFUnxCVUZGRVJ9IHByb3BlcnR5XG4gKiBpbmRpY2F0aW5nIHRoYXQgdGhlIGJ1ZmZlciBpcyBhIGRyb3BwaW5nIGJ1ZmZlci5cbiAqXG4gKiBAdHlwZSB7U3ltYm9sfVxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgRFJPUFBJTkcgPSBTeW1ib2woXCJEUk9QUElOR1wiKTtcblxuLyoqXG4gKiBBIHBvc3NpYmxlIHZhbHVlIG9mIHRoZSBge0BsaW5rIG1vZHVsZTpjc3AvYnVmZmVyLkJVRkZFUnxCVUZGRVJ9IHByb3BlcnR5XG4gKiBpbmRpY2F0aW5nIHRoYXQgdGhlIGJ1ZmZlciBpcyBhIHNsaWRpbmcgYnVmZmVyLlxuICpcbiAqIEB0eXBlIHtTeW1ib2x9XG4gKiBAcHJpdmF0ZVxuICovXG5jb25zdCBTTElESU5HID0gU3ltYm9sKFwiU0xJRElOR1wiKTtcblxuLyoqXG4gKiBQcmVkaWNhdGUgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBzdXBwbGllZCBvYmplY3QgaXMgYSBidWZmZXIuXG4gKlxuICogQHBhcmFtIHsqfSBvYmogVGhlIHZhbHVlIHRvIHRlc3QgdG8gc2VlIGlmIGl0J3MgYSBidWZmZXIuXG4gKiBAcmV0dXJuIHtib29sZWFufSBFaXRoZXIgYHRydWVgIGlmIHRoZSB2YWx1ZSBpcyBhIGJ1ZmZlciwgb3IgYGZhbHNlYCBpZiBpdCBpc1xuICogICAgIG5vdC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGlzQnVmZmVyKG9iaikge1xuICByZXR1cm4gISFvYmo/LltCVUZGRVJdO1xufVxuXG4vKipcbiAqIEEgYnVmZmVyIGltcGxlbWVudGF0aW9uIHRoYXQgbmV2ZXIgZGlzY2FyZHMgYnVmZmVyZWQgaXRlbXMgd2hlbiBhIG5ldyBpdGVtIGlzXG4gKiBhZGRlZC5cbiAqXG4gKiBUaGlzIGJ1ZmZlciBoYXMgYSBjb25jZXB0IG9mICpmdWxsKiwgYnV0IGl0J3MgYSBzb2Z0IGxpbWl0LiBJZiB0aGUgc2l6ZSBvZlxuICogdGhlIGJ1ZmZlciBpcyBleGNlZWRlZCwgYWRkZWQgaXRlbXMgYXJlIHN0aWxsIHN0b3JlZC5cbiAqXG4gKiBBIGJ1ZmZlciBvZiB0aGlzIHR5cGUgZXhpc3RzIG9ubHkgYXMgYW4gb2JqZWN0IHRoYXQgY2FuIGJlIHBhc3NlZCB0byBhXG4gKiBjaGFubmVsIGNyZWF0aW9uIGZ1bmN0aW9uIChzdWNoIGFzIHtAbGluayBtb2R1bGU6Y3NwLmNoYW58Y2hhbn0pIHRvIG1ha2UgdGhhdFxuICogY2hhbm5lbCBhIGJ1ZmZlcmVkIGNoYW5uZWwuIEl0IGRvZXNuJ3QgaGF2ZSBhbnkgcHJvcGVydGllcyB0aGF0IGFyZSBpbnRlbmRlZFxuICogZm9yIGV4dGVybmFsIHVzZS5cbiAqXG4gKiBAdHlwZWRlZiBGaXhlZEJ1ZmZlclxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgYSBmaXhlZCBidWZmZXIgb2YgdGhlIHNwZWNpZmllZCBjYXBhY2l0eS5cbiAqXG4gKiBBIGZpeGVkIGJ1ZmZlciBpcyBhICdub3JtYWwnIGJ1ZmZlciwgb25lIHRoYXQgc3RvcmVzIGFuZCByZXR1cm5zIGl0ZW1zIG9uXG4gKiBkZW1hbmQuIFdoaWxlIGl0IGlzIGNhcGFibGUgb2YgYmVpbmcgb3Zlci1maWxsZWQsIHRoYXQgYWJpbGl0eSBpcyBub3QgdXNlZCBpblxuICogQ2hhbmtvLiBBIGJ1ZmZlciB0aGF0IGlzIGZ1bGwgd2lsbCBjYXVzZSB0aGUgbmV4dCBwdXQgdG8gaXRzIGNoYW5uZWwgdG8gYmxvY2tcbiAqIHVudGlsIGF0IGxlYXN0IG9uZSBpdGVtIGlzIHJlbW92ZWQgZnJvbSB0aGUgYnVmZmVyLlxuICpcbiAqIFRoaXMgYnVmZmVyIGlzIHBhc3NlZCB0byBge0BsaW5rIG1vZHVsZTpjc3AuY2hhbnxjaGFufWAsIGV0Yy4gdG8gY3JlYXRlIGFcbiAqIGJ1ZmZlcmVkIGNoYW5uZWwuIEl0IGlzIG5vdCBtZWFudCB0byBiZSB1c2VkIGRpcmVjdGx5LlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcGFyYW0ge251bWJlcn0gc2l6ZSBUaGUgbnVtYmVyIG9mIGl0ZW1zIHRoYXQgdGhlIG5ldyBidWZmZXIgY2FuIGhvbGQgYmVmb3JlXG4gKiAgICAgaXQncyBmdWxsLlxuICogQHJldHVybiB7bW9kdWxlOmNzcC5GaXhlZEJ1ZmZlcn0gQSBuZXcgZml4ZWQgYnVmZmVyIG9mIHRoZSBzcGVjaWZpZWRcbiAqICAgICBjYXBhY2l0eS5cbiAqL1xuZnVuY3Rpb24gZml4ZWQoc2l6ZSkge1xuICByZXR1cm4gT2JqZWN0LmNyZWF0ZShudWxsLCB7XG4gICAgLyoqXG4gICAgICogVGhlIHF1ZXVlIGJhY2tpbmcgdGhpcyBidWZmZXIuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7bW9kdWxlOmNzcC9xdWV1ZX5RdWV1ZX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHF1ZXVlOiB7XG4gICAgICB2YWx1ZTogcSgpXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBudW1iZXIgb2YgaXRlbXMgdGhhdCB0aGlzIHF1ZXVlIGNhbiBob2xkIGJlZm9yZSBpdCdzIGNvbnNpZGVyZWQgZnVsbC5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBzaXplOiB7XG4gICAgICB2YWx1ZTogc2l6ZVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBIG1hcmtlciBwcm9wZXJ0eSB1c2VkIHRvIHNob3cgdGhhdCB0aGlzIGlzIGEgZml4ZWQgYnVmZmVyLlxuICAgICAqXG4gICAgICogQHR5cGUge1N5bWJvbH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIFtCVUZGRVJdOiB7XG4gICAgICB2YWx1ZTogRklYRURcbiAgICB9XG4gIH0pO1xufVxuXG4vKipcbiAqIEEgYnVmZmVyIGltcGxlbWVudGF0aW9uIHRoYXQgZHJvcHMgbmV3bHkgYWRkZWQgaXRlbXMgd2hlbiB0aGUgYnVmZmVyIGlzIGZ1bGwuXG4gKlxuICogVGhpcyBkcm9wcGluZyBiZWhhdmlvciBpcyBzaWxlbnQ6IHRoZSBuZXcgaXRlbSBpcyBzaW1wbHkgbm90IGFkZGVkIHRvIHRoZVxuICogcXVldWUuIE5vdGUgdGhhdCB0aGlzIGJ1ZmZlciBpcyBuZXZlciBgZnVsbGAgYmVjYXVzZSBpdCBjYW4gYWx3YXlzIGJlIGFkZGVkXG4gKiB0byB3aXRob3V0IGV4Y2VlZGluZyB0aGUgc2l6ZSwgZXZlbiBpZiB0aGF0ICdhZGRpbmcnIGRvZXNuJ3QgcmVzdWx0IGluIGEgbmV3XG4gKiBpdGVtIGFjdHVhbGx5IGFwcGVhcmluZyBpbiB0aGUgYnVmZmVyLlxuICpcbiAqIEEgYnVmZmVyIG9mIHRoaXMgdHlwZSBleGlzdHMgb25seSBhcyBhbiBvYmplY3QgdGhhdCBjYW4gYmUgcGFzc2VkIHRvIGFcbiAqIGNoYW5uZWwgY3JlYXRpb24gZnVuY3Rpb24gKHN1Y2ggYXMge0BsaW5rIG1vZHVsZTpjc3AuY2hhbnxjaGFufSkgdG8gbWFrZSB0aGF0XG4gKiBjaGFubmVsIGEgYnVmZmVyZWQgY2hhbm5lbC4gSXQgZG9lc24ndCBoYXZlIGFueSBwcm9wZXJ0aWVzIHRoYXQgYXJlIGludGVuZGVkXG4gKiBmb3IgZXh0ZXJuYWwgdXNlLlxuICpcbiAqIEB0eXBlZGVmIERyb3BwaW5nQnVmZmVyXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICovXG5cbi8qKlxuICogQ3JlYXRlcyBhIGRyb3BwaW5nIGJ1ZmZlciBvZiB0aGUgc3BlY2lmaWVkIGNhcGFjaXR5LlxuICpcbiAqIEEgZHJvcHBpbmcgYnVmZmVyIHNpbGVudGx5IGRyb3BzIHRoZSBpdGVtIGJlaW5nIGFkZGVkIGlmIHRoZSBidWZmZXIgaXNcbiAqIGFscmVhZHkgYXQgY2FwYWNpdHkuIFNpbmNlIGFkZGluZyBhIG5ldyBpdGVtIHdpbGwgYWx3YXlzICdzdWNjZWVkJyAoZXZlbiBpZlxuICogaXQgc3VjY2VlZHMgYnkganVzdCBpZ25vcmluZyB0aGUgYWRkKSwgaXQgaXMgbmV2ZXIgY29uc2lkZXJlZCBmdWxsIGFuZFxuICogdGhlcmVmb3JlIGEgcHV0IHRvIGEgY2hhbm5lbCBidWZmZXJlZCBieSBhIGRyb3BwaW5nIGJ1ZmZlciBuZXZlciBibG9ja3MuXG4gKlxuICogVGhpcyBidWZmZXIgaXMgcGFzc2VkIHRvIGB7QGxpbmsgbW9kdWxlOmNzcC5jaGFufGNoYW59YCwgZXRjLiB0byBjcmVhdGUgYVxuICogYnVmZmVyZWQgY2hhbm5lbC4gSXQgaXMgbm90IG1lYW50IHRvIGJlIHVzZWQgZGlyZWN0bHkuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqIEBwYXJhbSB7bnVtYmVyfSBzaXplIFRoZSBudW1iZXIgb2YgaXRlbXMgdGhhdCB0aGUgbmV3IGJ1ZmZlciBjYW4gaG9sZCBiZWZvcmVcbiAqICAgICBuZXdlc3QgaXRlbXMgYXJlIGRyb3BwZWQgb24gYWRkLlxuICogQHJldHVybiB7bW9kdWxlOmNzcC5Ecm9wcGluZ0J1ZmZlcn0gQSBuZXcgZHJvcHBpbmcgYnVmZmVyIG9mIHRoZSBzcGVjaWZpZWRcbiAqICAgICBjYXBhY2l0eS5cbiAqL1xuZnVuY3Rpb24gZHJvcHBpbmcoc2l6ZSkge1xuICByZXR1cm4gT2JqZWN0LmNyZWF0ZShudWxsLCB7XG4gICAgLyoqXG4gICAgICogVGhlIHF1ZXVlIGJhY2tpbmcgdGhpcyBidWZmZXIuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7bW9kdWxlOmNzcC9xdWV1ZX5RdWV1ZX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHF1ZXVlOiB7XG4gICAgICB2YWx1ZTogcSgpXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBudW1iZXIgb2YgaXRlbXMgdGhhdCB0aGlzIHF1ZXVlIGNhbiBob2xkIGJlZm9yZSBpdCdzIGNvbnNpZGVyZWQgZnVsbC5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBzaXplOiB7XG4gICAgICB2YWx1ZTogc2l6ZVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBIG1hcmtlciBwcm9wZXJ0eSB1c2VkIHRvIHNob3cgdGhhdCB0aGlzIGlzIGEgZHJvcHBpbmcgYnVmZmVyLlxuICAgICAqXG4gICAgICogQHR5cGUge1N5bWJvbH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIFtCVUZGRVJdOiB7XG4gICAgICB2YWx1ZTogRFJPUFBJTkdcbiAgICB9XG4gIH0pO1xufVxuXG4vKipcbiAqIEEgYnVmZmVyIGltcGxlbWVudGF0aW9uIHRoYXQgZHJvcHMgdGhlIG9sZGVzdCBpdGVtIHdoZW4gYW4gaXRlbSBpcyBhZGRlZCB0byBhXG4gKiBmdWxsIGJ1ZmZlci5cbiAqXG4gKiBUaGlzIGlzIHZlcnkgc2ltaWxhciB0byB7QGxpbmsgbW9kdWxlOmNzcC5Ecm9wcGluZ0J1ZmZlcnxEcm9wcGluZ0J1ZmZlcn07IHRoZVxuICogb25seSBkaWZmZXJlbmNlIGlzIGluIHdoYXQgaGFwcGVucyB3aGVuIGFuIGl0ZW0gaXMgYWRkZWQuIEluIHRoaXMgYnVmZmVyLCB0aGVcbiAqIG5ldyBpdGVtIGlzIGluZGVlZCBhZGRlZCB0byB0aGUgYnVmZmVyLCBidXQgaW4gb3JkZXIgdG8ga2VlcCB0aGUgY291bnQgb2YgdGhlXG4gKiBidWZmZXIgYXQgb3IgYmVsb3cgaXRzIHNpemUsIHRoZSBvbGRlc3QgaXRlbSBpbiB0aGUgYnVmZmVyIGlzIHNpbGVudGx5XG4gKiBkcm9wcGVkLlxuICpcbiAqIEEgYnVmZmVyIG9mIHRoaXMgdHlwZSBleGlzdHMgb25seSBhcyBhbiBvYmplY3QgdGhhdCBjYW4gYmUgcGFzc2VkIHRvIGFcbiAqIGNoYW5uZWwgY3JlYXRpb24gZnVuY3Rpb24gKHN1Y2ggYXMge0BsaW5rIG1vZHVsZTpjc3AuY2hhbnxjaGFufSkgdG8gbWFrZSB0aGF0XG4gKiBjaGFubmVsIGEgYnVmZmVyZWQgY2hhbm5lbC4gSXQgZG9lc24ndCBoYXZlIGFueSBwcm9wZXJ0aWVzIHRoYXQgYXJlIGludGVuZGVkXG4gKiBmb3IgZXh0ZXJuYWwgdXNlLlxuICpcbiAqIEB0eXBlZGVmIFNsaWRpbmdCdWZmZXJcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIGEgc2xpZGluZyBidWZmZXIgb2YgdGhlIHNwZWNpZmllZCBjYXBhY2l0eS5cbiAqXG4gKiBBIHNsaWRpbmcgYnVmZmVyIGRyb3BzIHRoZSBmaXJzdC1hZGRlZCAob2xkZXN0KSBpdGVtIGFscmVhZHkgaW4gdGhlIGJ1ZmZlciBpZlxuICogYSBuZXcgaXRlbSBpcyBhZGRlZCB3aGVuIHRoZSBidWZmZXIgaXMgYWxyZWFkeSBhdCBjYXBhY2l0eS4gU2luY2UgaXQncyBhbHdheXNcbiAqIGNhcGFibGUgb2YgaGF2aW5nIGl0ZW1zIGFkZGVkIHRvIGl0LCBpdCdzIG5ldmVyIGNvbnNpZGVyZWQgZnVsbCwgYW5kXG4gKiB0aGVyZWZvcmUgYSBwdXQgdG8gYSBjaGFubmVsIGJ1ZmZlcmVkIGJ5IGEgc2xpZGluZyBidWZmZXIgbmV2ZXIgYmxvY2tzLlxuICpcbiAqIFRoaXMgYnVmZmVyIGlzIHBhc3NlZCB0byBge0BsaW5rIG1vZHVsZTpjc3AuY2hhbnxjaGFufWAsIGV0Yy4gdG8gY3JlYXRlIGFcbiAqIGJ1ZmZlcmVkIGNoYW5uZWwuIEl0IGlzIG5vdCBtZWFudCB0byBiZSB1c2VkIGRpcmVjdGx5LlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcGFyYW0ge251bWJlcn0gc2l6ZSBUaGUgbnVtYmVyIG9mIGl0ZW1zIHRoYXQgdGhlIG5ldyBidWZmZXIgY2FuIGhvbGQgYmVmb3JlXG4gKiAgICAgb2xkZXN0IGl0ZW1zIGFyZSBkcm9wcGVkIG9uIGFkZC5cbiAqIEByZXR1cm4ge21vZHVsZTpjc3AuU2xpZGluZ0J1ZmZlcn0gQSBuZXcgc2xpZGluZyBidWZmZXIgb2YgdGhlIHNwZWNpZmllZFxuICogICAgIGNhcGFjaXR5LlxuICovXG5mdW5jdGlvbiBzbGlkaW5nKHNpemUpIHtcbiAgcmV0dXJuIE9iamVjdC5jcmVhdGUobnVsbCwge1xuICAgIC8qKlxuICAgICAqIFRoZSBxdWV1ZSBiYWNraW5nIHRoaXMgYnVmZmVyLlxuICAgICAqXG4gICAgICogQHR5cGUge21vZHVsZTpjc3AvcXVldWV+UXVldWV9XG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBxdWV1ZToge1xuICAgICAgdmFsdWU6IHEoKVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgbnVtYmVyIG9mIGl0ZW1zIHRoYXQgdGhpcyBxdWV1ZSBjYW4gaG9sZCBiZWZvcmUgaXQncyBjb25zaWRlcmVkIGZ1bGwuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgc2l6ZToge1xuICAgICAgdmFsdWU6IHNpemVcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQSBtYXJrZXIgcHJvcGVydHkgdXNlZCB0byBzaG93IHRoYXQgdGhpcyBpcyBhIHNsaWRpbmcgYnVmZmVyLlxuICAgICAqXG4gICAgICogQHR5cGUge1N5bWJvbH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIFtCVUZGRVJdOiB7XG4gICAgICB2YWx1ZTogU0xJRElOR1xuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgcXVldWUgdGhhdCBiYWNrcyBhIGJ1ZmZlci5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuQnVmZmVyfSBidWZmZXIgVGhlIGJ1ZmZlciB3aG9zZSBxdWV1ZSBpcyByZXR1cm5lZCBieSB0aGlzXG4gKiAgICAgZnVuY3Rpb24uXG4gKiBAcmV0dXJuIHttb2R1bGU6Y3NwL3F1ZXVlflF1ZXVlfSBUaGUgcXVldWUgdGhhdCBiYWNrcyB0aGUgc3VwcGxpZWQgYnVmZmVyLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gcXVldWUoYnVmZmVyKSB7XG4gIHJldHVybiBidWZmZXIucXVldWU7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgbnVtYmVyIG9mIGl0ZW1zIGEgYnVmZmVyIGNhbiBob2xkIGJlZm9yZSBpdCdzIGZ1bGwuXG4gKlxuICogQHBhcmFtIHttb2R1bGU6Y3NwLkJ1ZmZlcn0gYnVmZmVyIFRoZSBidWZmZXIgd2hvc2Ugc2l6ZSBpcyByZXR1cm5lZCBieSB0aGlzXG4gKiAgICAgZnVuY3Rpb24uXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBzaXplIG9mIHRoZSBzdXBwbGllZCBidWZmZXIuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBzaXplKGJ1ZmZlcikge1xuICByZXR1cm4gYnVmZmVyLnNpemU7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgbnVtYmVyIG9mIGl0ZW1zIGEgYnVmZmVyIGlzIGN1cnJlbnRseSBob2xkaW5nLlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5CdWZmZXJ9IGJ1ZmZlciBUaGUgYnVmZmVyIHdob3NlIGN1cnJlbnQgY291bnQgaXMgcmV0dXJuZWRcbiAqICAgICBieSB0aGlzIGZ1bmN0aW9uLlxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgbnVtYmVyIG9mIGl0ZW1zIHRoYXQgdGhlIHN1cHBsaWVkIGJ1ZmZlciBpcyBob2xkaW5nLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY291bnQoYnVmZmVyKSB7XG4gIHJldHVybiBxQ291bnQoYnVmZmVyLnF1ZXVlKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgYSBidWZmZXIgaXMgYXQgY2FwYWNpdHkuXG4gKlxuICogQHBhcmFtIHttb2R1bGU6Y3NwLkJ1ZmZlcn0gYnVmZmVyIFRoZSBidWZmZXIgd2hvJ3MgYmVpbmcgY2hlY2tlZCB0byBzZWUgaWZcbiAqICAgICBpdCdzIGF0IGNhcGFjaXR5LlxuICogQHJldHVybiB7bnVtYmVyfSBFaXRoZXIgYHRydWVgIGlmIHRoZSBzdXBwbGllZCBidWZmZXIgaXMgZnVsbCBvciBgZmFsc2VgIGlmXG4gKiAgICAgaXQgaXNuJ3QuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBpc0Z1bGwoYnVmZmVyKSB7XG4gIHJldHVybiBidWZmZXJbQlVGRkVSXSA9PT0gRklYRUQgPyBxQ291bnQoYnVmZmVyLnF1ZXVlKSA+PSBidWZmZXIuc2l6ZSA6IGZhbHNlO1xufVxuXG4vKipcbiAqIEFkZHMgb25lIG9yIG1vcmUgaXRlbXMgdG8gYSBidWZmZXIuXG4gKlxuICogQHBhcmFtIHttb2R1bGU6Y3NwLkJ1ZmZlcn0gYnVmZmVyIFRoZSBidWZmZXIgd2hlcmUgdGhlIHN1cHBsaWVkIGl0ZW1zIHdpbGwgYmVcbiAqICAgICBhZGRlZC5cbiAqIEBwYXJhbSB7Li4uKn0gaXRlbXMgVGhlIHZhbHVlcyBiZWluZyBhZGRlZCB0byB0aGUgc3VwcGxpZWQgYnVmZmVyLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gYWRkKGJ1ZmZlciwgLi4uaXRlbXMpIHtcbiAgc3dpdGNoIChidWZmZXJbQlVGRkVSXSkge1xuICAgIGNhc2UgRklYRUQ6XG4gICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgaXRlbXMpIHtcbiAgICAgICAgZW5xdWV1ZShidWZmZXIucXVldWUsIGl0ZW0pO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIERST1BQSU5HOlxuICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGl0ZW1zKSB7XG4gICAgICAgIGlmIChjb3VudChidWZmZXIpIDwgc2l6ZShidWZmZXIpKSB7XG4gICAgICAgICAgZW5xdWV1ZShidWZmZXIucXVldWUsIGl0ZW0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgU0xJRElORzpcbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBpdGVtcykge1xuICAgICAgICBpZiAoY291bnQoYnVmZmVyKSA+PSBzaXplKGJ1ZmZlcikpIHtcbiAgICAgICAgICBkZXF1ZXVlKGJ1ZmZlci5xdWV1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZW5xdWV1ZShidWZmZXIucXVldWUsIGl0ZW0pO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuO1xuICB9XG59XG5cbi8qKlxuICogUmVtb3ZlcyB0aGUgbmV4dCBpdGVtIGZyb20gYSBxdWV1ZSBhbmQgcmV0dXJucyBpdC5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuQnVmZmVyfSBidWZmZXIgVGhlIGJ1ZmZlciBmcm9tIHdoaWNoIGFuIGl0ZW0gaXMgYmVpbmdcbiAqICAgICByZW1vdmVkLlxuICogQHJldHVybiB7Kn0gVGhlIGl0ZW0gdGhhdCB3YXMgcmVtb3ZlZCBmcm9tIHRoZSBzdXBwbGllZCBidWZmZXIuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiByZW1vdmUoYnVmZmVyKSB7XG4gIHJldHVybiBkZXF1ZXVlKGJ1ZmZlci5xdWV1ZSk7XG59XG5cbmV4cG9ydCB7XG4gIGlzQnVmZmVyLFxuICBmaXhlZCxcbiAgZHJvcHBpbmcsXG4gIHNsaWRpbmcsXG4gIHF1ZXVlLFxuICBzaXplLFxuICBjb3VudCxcbiAgaXNGdWxsLFxuICBhZGQsXG4gIHJlbW92ZVxufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG5pbXBvcnQgeyBwcm90b2NvbHMgYXMgcCB9IGZyb20gXCJAY2hhbmtvL3hkdWNlXCI7XG5pbXBvcnQge1xuICBxdWV1ZSxcbiAgZGVxdWV1ZSxcbiAgRU1QVFksXG4gIGZpbHRlcixcbiAgY291bnQgYXMgcUNvdW50LFxuICBlbnF1ZXVlXG59IGZyb20gXCJtb2R1bGVzL3F1ZXVlXCI7XG5pbXBvcnQgeyBpc0Z1bGwsIGNvdW50LCByZW1vdmUgfSBmcm9tIFwibW9kdWxlcy9idWZmZXJcIjtcbmltcG9ydCB7IGRpc3BhdGNoIH0gZnJvbSBcIm1vZHVsZXMvZGlzcGF0Y2hlclwiO1xuXG4vKipcbiAqIFRoZSBtYXhpbXVtIG51bWJlciBvZiBkaXJ0eSBvcGVyYXRpb25zIHRoYXQgY2FuIGJlIHF1ZXVlZCBvbiBhIGNoYW5uZWwgYmVmb3JlXG4gKiBhIGNsZWFudXAgaXMgdHJpZ2dlcmVkLlxuICpcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAcHJpdmF0ZVxuICovXG5jb25zdCBNQVhfRElSVFkgPSA2NDtcblxuLyoqXG4gKiBUaGUgbWF4aW11bSBudW1iZXIgb2Ygb3BlcnRpb25zIHRoYXQgY2FuIGJlIHF1ZXVlZCBvbiBhIGNoYW5uZWwgYmVmb3JlIG5ld1xuICogb3BlcmF0aW9ucyBhcmUgcmVqZWN0ZWQuXG4gKlxuICogQHR5cGUge251bWJlcn1cbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IE1BWF9RVUVVRUQgPSAxMDI0O1xuXG4vKipcbiAqICpoZSB2YWx1ZSByZXR1cm5lZCBmcm9tIGEgcmVjZWl2ZSBvbiBhIGNoYW5uZWwgd2hlbiB0aGF0IGNoYW5uZWwgaXMgY2xvc2VkXG4gKiBhbmQgaGFzIG5vIG1vcmUgdmFsdWVzIGF2YWlsYWJsZS5cbiAqXG4gKiBUaGlzIGlzIGEgc3BlY2lhbCB2YWx1ZSB0aGF0IGlzIHJldHVybmVkIHVuZGVyIGEgY2VydGFpbiBjaXJjdW1zdGFuY2UsIG5hbWVseVxuICogd2hlbiBhIHJlY2VpdmUgaXMgcGVyZm9ybWVkIG9uIGEgY2xvc2VkIGNoYW5uZWwuIEJlY2F1c2Ugb2YgdGhhdCwgaXQgY2Fubm90XG4gKiBiZSByZXR1cm5lZCBmcm9tIGEgcmVjZWl2ZSBvbiBhbiBvcGVuIGNoYW5uZWwuIEZvciB0aGF0IHJlYXNvbiwgYENMT1NFRGAgaXNcbiAqIHRoZSBvbmx5IHZhbHVlIHRoYXQgY2Fubm90IGJlIHNlbnQgb250byBhIGNoYW5uZWwgJm1kYXNoOyBpdCB3b3VsZCBiZVxuICogaW1wb3NzaWJsZSB0byBkaXN0aW5ndWlzaCBiZXR3ZWVuIGEgbGVnaXRpbWF0ZSB2YWx1ZSBvZiBgQ0xPU0VEYCBhbmQgYW5cbiAqIGFjdHVhbCBjbG9zZWQgY2hhbm5lbC5cbiAqXG4gKiBAdHlwZSB7U3ltYm9sfVxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqL1xuY29uc3QgQ0xPU0VEID0gU3ltYm9sKFwiQ0xPU0VEXCIpO1xuXG4vKipcbiAqIEEgdW5pcXVlIHZhbHVlIHVzZWQgdG8gaW5kaWNhdGUgdGhhdCBhbiBvYmplY3QgaXMgYSBib3guXG4gKlxuICogQHR5cGUge1N5bWJvbH1cbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IEJPWCA9IFN5bWJvbChcIkJPWFwiKTtcblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgYW4gb2JqZWN0IGlzIGEgYm94LlxuICpcbiAqIEBwYXJhbSB7Kn0gb2JqIEEgdmFsdWUgdG8gY2hlY2sgZm9yIGJveGluZXNzLlxuICogQHJldHVybiBFaXRoZXIgYHRydWVgIGlmIHRoZSB2YWx1ZSBpcyBhIGJveCBvciBgZmFsc2VgIGlmIGl0IGlzbid0LlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaXNCb3gob2JqKSB7XG4gIHJldHVybiAhIW9iaj8uW0JPWF07XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGFuIG9iamVjdCBpcyByZWR1Y2VkLiBUaGlzIGlzIGRvbmUgdXNpbmcgdGhlIHRyYW5zZHVjZXJcbiAqIHByb3RvY29sOyBhbiBvYmplY3Qgd2l0aCB0aGUgcHJvdG9jb2wtc3BlY2lmaWVkIGByZWR1Y2VkYCBwcm9wZXJ0eSBpcyBhc3N1bWVkXG4gKiB0byBiZSByZWR1Y2VkLiBJZiBhIHJlc3VsdCBvZiBhIHRyYW5zZm9ybWF0aW9uIGlzIHJlZHVjZWQsIGl0IG1lYW5zIHRoYXQgdGhlXG4gKiB0cmFuc2Zvcm1hdGlvbiBpcyBjb21wbGV0ZSBhbmQgdGhlIGNoYW5uZWwgc2hvdWxkIGJlIGNsb3NlZC5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSBiZWluZyBjaGVja2VkIGZvciByZWR1Y3Rpb24uXG4gKiBAcmV0dXJuIHtib29sZWFufSBFaXRoZXIgYHRydWVgIGlmIHRoZSB2YWx1ZSBoYXMgYmVlbiByZWR1Y2VkLCBvciBgZmFsc2VgIGlmXG4gKiAgICAgaXQgaGFzIG5vdCBiZWVuLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaXNSZWR1Y2VkKHZhbHVlKSB7XG4gIHJldHVybiAhIXZhbHVlPy5bcC5yZWR1Y2VkXTtcbn1cblxuLyoqXG4gKiBBIHdyYXBwZXIgYXJvdW5kIGEgdmFsdWUuIFRoaXMgaXMgcHJpbWFyaWx5IHVzZWQgYXMgYSBtYXJrZXI7IGEgcHV0IG9yIHRha2VcbiAqIHJldHVybmluZyBhIEJveCBpbmRpY2F0ZXMgdGhhdCB0aGUgcHV0IG9yIHRha2UgaGFzIHJldHVybmVkIGFuIGltbWVkaWF0ZVxuICogdmFsdWUsIHdoaWxlIHJldHVybmluZyBgbnVsbGAgaW5kaWNhdGVzIHRoYXQgdGhlIG9wZXJhdGlvbiBoYXMgYmVlbiBxdWV1ZWQuXG4gKlxuICogQHR5cGVkZWYgQm94XG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcC9jaGFubmVsXG4gKiBAcHJvcGVydHkgeyp9IHZhbHVlIFRoZSB2YWx1ZSBiZWluZyB3cmFwcGVkIGJ5IHRoZSBib3guXG4gKiBAcHJpdmF0ZVxuICovXG5cbi8qKlxuICogQSB3cmFwcGVyIG9iamVjdCBmb3IgYSB2YWx1ZS4gVGhpcyBpcyB1c2VkIGFsbW9zdCBlbnRpcmVseSBhcyBhIG1hcmtlclxuICogaW50ZXJmYWNlLCB0aG91Z2ggdGhlIGZhY3QgdGhhdCBpdCBiZWNvbWVzIGEgcGFyYW1ldGVyIHRoYXQncyBwYXNzZWQgYnlcbiAqIHJlZmVyZW5jZSByYXRoZXIgdGhhbiB2YWx1ZSBpcyBhbHNvIGltcG9ydGFudCBpbiBhIGNvdXBsZSBwbGFjZXMuIElmIGFcbiAqIGNoYW5uZWwgb3BlcmF0aW9uIChwdXQgb3IgdGFrZSkgcmV0dXJucyBhIEJveCwgaXQgbWVhbnMgdGhhdCBhbiBhY3R1YWwgdmFsdWVcbiAqIHdhcyByZXR1cm5lZC4gQSBub24tQm94ICh3aGljaCBhbHdheXMgaGFwcGVucyB0byBiZSBgbnVsbGApIG1lYW5zIHRoYXQgdGhlXG4gKiBvcGVyYXRpb24gbXVzdCBibG9jay5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcC9jaGFubmVsXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBib3guXG4gKiBAcmV0dXJuIHttb2R1bGU6Y3NwL2NoYW5uZWwuQm94fSBUaGUgYm94ZWQgdmFsdWUuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBib3godmFsdWUpIHtcbiAgcmV0dXJuIE9iamVjdC5jcmVhdGUobnVsbCwge1xuICAgIHZhbHVlOiB7XG4gICAgICB2YWx1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSxcbiAgICBbQk9YXToge1xuICAgICAgdmFsdWU6IHRydWVcbiAgICB9XG4gIH0pO1xufVxuXG4vKipcbiAqIEEgd3JhcHBlciBhcm91bmQgYSB2YWx1ZS4gVGhpcyBpcyBtdWNoIGxpa2VcbiAqIHtAbGluayBtb2R1bGU6Y3NwL2NoYW5uZWwuQm94fEJveH0gZXhjZXB0IHRoYXQgaXQgYWxzbyBjYXJyaWVzIGEgaGFuZGxlciB0b1xuICogYmUgdXNlZCB3aGVuIGEgc2VudCB2YWx1ZSBpcyByZWNlaXZlZC4gSXQgaXMgc3BlY2lmaWNhbGx5IGZvciBxdWV1ZWluZyBzZW5kcy5cbiAqXG4gKiBAdHlwZWRlZiBTZW5kQm94XG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcC9jaGFubmVsXG4gKiBAcHJvcGVydHkgeyp9IHZhbHVlIFRoZSB2YWx1ZSBiZWluZyB3cmFwcGVkIGJ5IHRoaXMgYm94LlxuICogQHByb3BlcnR5IHttb2R1bGU6Y3NwL2NoYW5uZWwuSGFuZGxlcn0gaGFuZGxlciBUaGUgaGFuZGxlciB1c2VkIHRvIHByb2Nlc3MgYVxuICogICAgIHNlbmQgcmVxdWVzdCBmb3IgdGhlIHZhbHVlLlxuICogQHByaXZhdGVcbiAqL1xuXG4vKipcbiAqIEEgYm94IHVzZWQgdG8gd3JhcCBhIHZhbHVlIGJlaW5nIHNlbnQgb250byBhIGNoYW5uZWwuIFRoaXMgaXMgZGlmZmVyZW50IGZyb21cbiAqIGEgcmVndWxhciBib3ggaW4gdGhhdCB0aGUgc2VuZCBoYW5kbGVyIGlzIGFsc28gaW5jbHVkZWQuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3AvY2hhbm5lbFxuICogQHBhcmFtICB7T2JqZWN0fSBoYW5kbGVyIFRoZSBoYW5kbGVyIHVzZWQgdG8gcHJvY2VzcyBhIHNlbmQgcmVxdWVzdCBmb3IgdGhlXG4gKiAgICAgdmFsdWUuXG4gKiBAcGFyYW0gIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gYm94LlxuICogQHJldHVybiB7bW9kdWxlOmNzcC9jaGFubmVsLlNlbmRCb3h9IFRoZSBib3hlZCB2YWx1ZS5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHNlbmRCb3godmFsdWUsIGhhbmRsZXIpIHtcbiAgcmV0dXJuIE9iamVjdC5jcmVhdGUobnVsbCwge1xuICAgIHZhbHVlOiB7XG4gICAgICB2YWx1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSxcbiAgICBoYW5kbGVyOiB7XG4gICAgICB2YWx1ZTogaGFuZGxlclxuICAgIH0sXG4gICAgW0JPWF06IHtcbiAgICAgIHZhbHVlOiB0cnVlXG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBBIGNoYW5uZWwsIHVzZWQgYnkgcHJvY2Vzc2VzIHRvIGNvbW11bmljYXRlIHdpdGggb25lIGFub3RoZXIuXG4gKlxuICogRm9yIGVhY2ggb3BlcmF0aW9uLCB0aGUgY2hhbm5lbCBmaXJzdCB0ZXN0cyB0byBzZWUgaWYgdGhlcmUncyBhIGNvcnJlc3BvbmRpbmdcbiAqIG9wZXJhdGlvbiBhbHJlYWR5IHF1ZXVlZCAoaS5lLiwgaWYgd2UncmUgZG9pbmcgYSBgc2VuZGAgdGhhdCB0aGVyZSdzIGEgcXVldWVkXG4gKiBgcmVjdmAgYW5kIHZpY2UgdmVyc2EpLiBJZiB0aGVyZSBpcywgdGhhdCBjb3JyZXNwb25kaW5nIG9wZXJhdGlvbiBpc1xuICogdW5ibG9ja2VkIGFuZCBib3RoIG9wZXJhdGlvbnMgY29tcGxldGUuIElmIG5vdCwgdGhlIG9wZXJhdGlvbiBpcyBxdWV1ZWQgdG9cbiAqIHdhaXQgZm9yIGEgY29ycmVzcG9uZGluZyBvcGVyYXRpb24uIFRoZSBwcm9jZXNzIG9yIHRoYXQgY3JlYXRlZCB0aGUgb3BlcmF0aW9uXG4gKiB0aGVuIGJsb2Nrcy5cbiAqXG4gKiBUaGUgY2hhbm5lbCBjYW4gYmUgYmFja2VkIGJ5IGEgYnVmZmVyLCB0aG91Z2ggaXQgaXMgbm90IGJ5IGRlZmF1bHQuIElmIGFcbiAqIGJ1ZmZlciBpcyBpbiBwbGFjZSwgYW5kIHRoYXQgYnVmZmVyIGlzIG5vdCBmdWxsLCB0aGVuIHRoZSBwcm9jZXNzIHRoYXRcbiAqIGNyZWF0ZWQgYW4gb3BlcmF0aW9uIHRoYXQgaGFzIHRvIGJlIHF1ZXVlZCBpcyAqbm90KiBibG9ja2VkLlxuICpcbiAqIFRoaXMgY2hhbm5lbCBvYmplY3Qgc3VwcG9ydHMgdHJhbnNmb3JtYXRpb25zLCBhc3N1bWluZyB0aGF0IHRoZXkgZm9sbG93IHRoZVxuICogcHJvdG9jb2wgY3JlYXRlZCBieSBhIGZldyB0cmFuc2R1Y2VyIGxpYnJhcnkgYXV0aG9ycyB0byBhbGxvdyB0aGVtIHRvXG4gKiBpbnRlcm9wZXJhdGUuIFRoZSBzdXBwb3J0IG11c3QgYmUgZXhwbGljaXRseSBjcmVhdGVkIGJlY2F1c2UgdGhlIG5vcm1hbFxuICogbWV0aG9kIG9mIG1ha2luZyBhbiBvYmplY3Qgc3VwcG9ydCB0cmFuc2Zvcm1hdGlvbnMgd29uJ3Qgd29yayBoZXJlLiBUaGlzXG4gKiBtZXRob2QgaXMgdG8gY3JlYXRlIGEgbmV3IG9iamVjdCBhbmQgYWRkIHRoZSB0cmFuc2Zvcm1lZCB2YWx1ZXMgdG8gaXQgLSBidXRcbiAqIGZvciBhIGNoYW5uZWwsIHdlIG5lZWQgdG8gcmVwbGFjZSB0aGUgdmFsdWVzIG9uIHRoZSBjaGFubmVsIHdpdGggdGhlaXJcbiAqIHRyYW5zZm9ybWVkIHZhbHVlcywgaW4gdGhlIHNhbWUgb3JkZXIgZXZlbiBpbiBhIG11bHRpLXByb2Nlc3MgZW52aXJvbm1lbnQuXG4gKiBUaHVzIHRyYW5zZm9ybWF0aW9ucyBoYXBwZW4gaW4gcGxhY2UuXG4gKlxuICogVHJhbnNmb3JtYXRpb25zIGFyZSBhcHBsaWVkIGJlZm9yZSB0aGUgdmFsdWUgaXMgcXVldWVkLCBzbyBldmVuIGlmIHRoZXJlIGlzIGFcbiAqIGNvcnJlc3BvbmRpbmcgb3BlcmF0aW9uIHJlYWR5IHRvIGdvLCB0aGUgdHJhbnNmb3JtYXRpb24gc3RpbGwgaGFwcGVucy4gQWxzbyxcbiAqIHRyYW5zZm9ybWF0aW9ucyByZXF1aXJlIHRoYXQgdGhlIGNoYW5uZWwgYmUgYnVmZmVyZWQgKHRoaXMgYnVmZmVyIGlzIHdoYXQgaXNcbiAqIHNlbnQgdG8gdGhlIHRyYW5zZm9ybWVyJ3MgcmVkdWN0aW9uIHN0ZXAgZnVuY3Rpb24pOyB0cnlpbmcgdG8gY3JlYXRlIGFcbiAqIGNoYW5uZWwgd2l0aCBhIHRyYW5zZm9ybWVyIGJ1dCB3aXRob3V0IGEgYnVmZmVyIHdpbGwgcmVzdWx0IGluIGFuIGVycm9yIGJlaW5nXG4gKiB0aHJvd24uXG4gKlxuICogVGhpcyBpcyB0aGUgb2JqZWN0IHRoYXQgaXMgcmV0dXJuZWQgZnJvbSBhIGNhbGwgdG9cbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC5jaGFufGNoYW59YC4gSG93ZXZlciwgdGhpcyBvYmplY3QgaXMgaW50ZW5kZWQgdG8gYmUgdXNlZFxuICogYXMgYSB2YWx1ZSB0byBwYXNzIHRvIGNoYW5uZWwgb3BlcmF0aW9uIGZ1bmN0aW9uczsgaXQgZG9lc24ndCBoYXZlIGFueVxuICogcHJvcGVydGllcyBvZiBpbnRlcmVzdCB0byBhbiBlbmQgdXNlci5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICogQHR5cGVkZWYgQ2hhbm5lbFxuICovXG5cbi8qKlxuICogQ3JlYXRlcyBhIGNoYW5uZWwuIFRoaXMgaXMgYSBsb3ctbGV2ZWwgZnVuY3Rpb247XG4gKiBge0BsaW5rIG1vZHVsZTpjc3AuY2hhbnxjaGFufWAgcGVyZm9ybXMgc29tZSBuZWNlc3NhcnkgbWFuaXB1bGF0aW9ucyBvblxuICogYXJndW1lbnRzIGJlZm9yZSB1c2luZyB0aGlzIGZ1bmN0aW9uIHRvIHBlcmZvcm0gdGhlIGFjdHVhbCBjcmVhdGlvbi5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcC9jaGFubmVsXG4gKiBAcGFyYW0ge251bGwgfCBtb2R1bGU6Y3NwLkJ1ZmZlcn0gYnVmZmVyIEFuIG9wdGlvbmFsIGJ1ZmZlciB0aGF0LCBpZiBwcmVzZW50LFxuICogICAgIGlzIHVzZWQgdG8gY3JlYXRlIGEgYnVmZmVyZWQgY2hhbm5lbC4gSWYgdGhpcyBpcyBgbnVsbGAsIGFuIHVuYnVmZmVyZWRcbiAqICAgICBjaGFubmVsIGlzIGNyZWF0ZWQuXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuVHJhbnNkdWNlcn0geGZvcm0gVGhlIHRyYW5zZHVjZXIgdXNlZCB0byB0cmFuc2Zvcm0gdmFsdWVzXG4gKiAgICAgc2VudCB0byB0aGUgY2hhbm5lbC4gSWYgbm8gdHJhbnNmb3JtYXRpb25zIGFyZSBuZWNlc3NhcnksIGEgcGFzc3Rocm91Z2hcbiAqICAgICB0cmFuc2R1Y2VyIHNob3VsZCBiZSBwcm92aWRlZC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNUaW1lZCBJbmRpY2F0ZXMgd2hldGhlciB0aGUgY2hhbm5lbCBpcyBhIHRpbWVkIGNoYW5uZWwuXG4gKiAgICAgVGhlIHRpbWluaW5nIG1lY2hhbmlzbSBpcyBoYW5kbGVkIG91dHNpZGUgdGhlIGNoYW5uZWwsIGJ1dCB0aGlzIHByb3BlcnR5XG4gKiAgICAgaXMgcHJvdmlkZWQgdG8gYmUgYWJsZSB0byBxdWVyeSB3aGV0aGVyIHRoYXQncyB0aGUgY2FzZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXhEaXJ0eT02NCBUaGUgbWF4aW11bSBudW1iZXIgb2YgZGlydHkgb3BlcmF0aW9ucyB0byBhbGxvd1xuICogICAgIGJlZm9yZSB0aGV5J3JlIHB1cmdlZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXhRdWV1ZWQ9MTAyNCBUaGUgbWF4aW11bSBudW1iZXIgb2Ygb3BlcmF0aW9ucyB0aGF0IGNhbiBiZVxuICogICAgIHF1ZXVlZCBiZWZvcmUgbmV3IG9uZXMgYXJlIHJlamVjdGVkLlxuICogQHJldHVybiB7bW9kdWxlOmNzcC5DaGFubmVsfSBBIG5ldyBjaGFubmVsLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY2hhbm5lbChcbiAgYnVmZmVyLFxuICB4Zm9ybSxcbiAgaXNUaW1lZCA9IGZhbHNlLFxuICBtYXhEaXJ0eSA9IE1BWF9ESVJUWSxcbiAgbWF4UXVldWVkID0gTUFYX1FVRVVFRFxuKSB7XG4gIHJldHVybiBPYmplY3QuY3JlYXRlKG51bGwsIHtcbiAgICBidWZmZXI6IHtcbiAgICAgIHZhbHVlOiBidWZmZXJcbiAgICB9LFxuICAgIHhmb3JtOiB7XG4gICAgICB2YWx1ZTogeGZvcm1cbiAgICB9LFxuICAgIG1heERpcnR5OiB7XG4gICAgICB2YWx1ZTogbWF4RGlydHlcbiAgICB9LFxuICAgIG1heFF1ZXVlZDoge1xuICAgICAgdmFsdWU6IG1heFF1ZXVlZFxuICAgIH0sXG4gICAgcmVjdnM6IHtcbiAgICAgIHZhbHVlOiBxdWV1ZSgpXG4gICAgfSxcbiAgICBzZW5kczoge1xuICAgICAgdmFsdWU6IHF1ZXVlKClcbiAgICB9LFxuICAgIGRpcnR5UmVjdnM6IHtcbiAgICAgIHZhbHVlOiAwLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9LFxuICAgIGRpcnR5U2VuZHM6IHtcbiAgICAgIHZhbHVlOiAwLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9LFxuICAgIGNsb3NlZDoge1xuICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9LFxuICAgIGlzQnVmZmVyZWQ6IHtcbiAgICAgIHZhbHVlOiAhIWJ1ZmZlclxuICAgIH0sXG4gICAgaXNUaW1lZDoge1xuICAgICAgdmFsdWU6IGlzVGltZWRcbiAgICB9XG4gIH0pO1xufVxuXG4vKipcbiAqIFNlbmRzIGEgdmFsdWUgdG8gYSBjaGFubmVsLiBUaGUgc3BlY2lmaWVkIGhhbmRsZXIgaXMgdXNlZCB0byBjb250cm9sIHdoZXRoZXJcbiAqIHRoZSBzZW5kIGlzIGFjdGl2ZSBhbmQgd2hhdCB0byBkbyBhZnRlciB0aGUgc2VuZCBjb21wbGV0ZXMuIEEgc2VuZCBjYW4gYmVjb21lXG4gKiBpbmFjdGl2ZSBpZiBpdCB3YXMgcGFydCBvZiBhbiBgc2VsZWN0YCBjYWxsIGFuZCBzb21lIG90aGVyIG9wZXJhdGlvblxuICogc3BlY2lmaWVkIGluIHRoYXQgY2FsbCBoYXMgYWxyZWFkeSBjb21wbGV0ZWQuXG4gKlxuICogVGhpcyB2YWx1ZSBpcyBnaXZlbiB0byBhIHJlY2VpdmUgaGFuZGxlciBpbW1lZGlhdGVseSBpZiB0aGVyZSdzIG9uZSB3YWl0aW5nLlxuICogT3RoZXJ3aXNlIHRoZSB2YWx1ZSBhbmQgaGFuZGxlciBhcmUgcXVldWVkIHRvZ2V0aGVyIHRvIHdhaXQgZm9yIGEgcmVjZWl2ZS5cbiAqXG4gKiBUaGlzIGlzIGEgbG93LWxldmVsIG9wZXJhdGlvbiB0aGF0J3MgcHJvdmlkZWQgYXMgYSBwYXJ0IG9mIHRoZSBjaGFubmVsXG4gKiBpbXBsZW1lbnRhdGlvbiBzbyB0aGF0IG90aGVyIG9wZXJhdGlvbnMgZnVuY3Rpb25zIGNhbiBwcm9wZXJseSBhcHBseVxuICogaGFuZGxlcnMuIEl0IGlzIG5vdCBtZWFudCBmb3IgZ2VuZXJhbCB1c2UuIFVzZSB0aG9zZSBvdGhlciBvcGVyYXRpb25zXG4gKiBmdW5jdGlvbnMgaW5zdGVhZC5cbiAqXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3AvY2hhbm5lbFxuICogQHBhcmFtIHttb2R1bGU6Y3NwLkNoYW5uZWx9IGNoYW5uZWwgVGhlIGNoYW5uZWwgdGhhdCB0aGUgdmFsdWUgaXMgYmVpbmcgc2VudFxuICogICAgIHRvLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gYmUgcHV0IG9udG8gdGhlIGNoYW5uZWwuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGhhbmRsZXIuYWN0aXZlIERldGVybWluZXMgd2hldGhlciB0aGUgc2VuZCBpcyBzdGlsbCBhY3RpdmVcbiAqICAgICBhbmQgc2hvdWxkIHN0aWxsIGJlIHNlcnZpY2VkLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gaGFuZGxlci5jb21taXQgRGVhY3RpdmF0ZXMgdGhlIHNlbmQgKHNvIGl0IGNhbid0IGJlXG4gKiAgICAgc2VydmljZWQgYSBzZWNvbmQgdGltZSkgYW5kIHJldHVybnMgdGhlIGNhbGxiYWNrIHRvIGJlIGZpcmVkIHdoZW4gdGhlXG4gKiAgICAgc2VuZCBjb21wbGV0ZXMuXG4gKiBAcmV0dXJuIHttb2R1bGU6Y3NwL2NoYW5uZWwuQm94fG51bGx9IE9uZSBvZiB0aHJlZSB2YWx1ZXMuIEEgYm94ZWQgYHRydWVgIGlzXG4gKiAgICAgcmV0dXJuZWQgaWYgdGhlIHNlbmQgd2FzIGltbWVkaWF0ZWx5IGNvbnN1bWVkIGJ5IGEgcGVuZGluZyByZWNlaXZlLiBBXG4gKiAgICAgYm94ZWQgYGZhbHNlYCBpcyByZXR1cm5lZCBpZiB0aGUgc2VuZCB3YXMgcGVyZm9ybWVkIG9uIGEgY2hhbm5lbCB0aGF0IHdhc1xuICogICAgIGFscmVhZHkgY2xvc2VkIGJ5IHRoZSB0aW1lIHRoZSBzZW5kIHRvb2sgcGxhY2UuIGBudWxsYCBpcyByZXR1cm5lZCBpZiB0aGVcbiAqICAgICBzZW5kIHdhcyBxdWV1ZWQgcGVuZGluZyBhIGNvcnJlc3BvbmRpbmcgcmVjZWl2ZS5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGhhbmRsZVNlbmQoY2hhbm5lbCwgdmFsdWUsIGhhbmRsZXIpIHtcbiAgaWYgKHZhbHVlID09PSBDTE9TRUQpIHtcbiAgICB0aHJvdyBFcnJvcihcIkNhbm5vdCBzZW5kIENMT1NFRCB0byBhIGNoYW5uZWxcIik7XG4gIH1cblxuICBpZiAoY2hhbm5lbC5jbG9zZWQpIHtcbiAgICBoYW5kbGVyLmNvbW1pdCgpO1xuICAgIHJldHVybiBib3goZmFsc2UpO1xuICB9XG5cbiAgbGV0IHJlY2VpdmVyLCBjYWxsYmFjaztcblxuICAvLyBQdXNoIHRoZSBpbmNvbWluZyB2YWx1ZSB0aHJvdWdoIHRoZSBidWZmZXIsIGV2ZW4gaWYgdGhlcmUncyBhbHJlYWR5IGFcbiAgLy8gcmVjZWl2ZXIgd2FpdGluZyBmb3IgdGhlIHZhbHVlLiBUaGlzIGlzIHRvIG1ha2Ugc3VyZSB0aGF0IHRoZSB0cmFuc2R1Y2VyXG4gIC8vIHN0ZXAgZnVuY3Rpb24gaGFzIGEgY2hhbmNlIHRvIGFjdCBvbiB0aGUgdmFsdWUgZmlyc3QsIHdoaWNoIGNvdWxkIGNoYW5nZVxuICAvLyB0aGUgdmFsdWUgb3IgbWFrZSBpdCBhbHRvZ2V0aGVyIHVuYXZhaWxhYmxlLlxuICAvL1xuICAvLyBJZiB0aGUgY2hhbm5lbCBpcyB1bmJ1ZmZlcmVkIHRoaXMgcHJvY2VzcyBpcyBza2lwcGVkICh0aGVyZSBjYW4ndCBiZSBhXG4gIC8vIHRyYW5zZHVjZXIgb24gYW4gdW5idWZmZXJlZCBjaGFubmVsIGFueXdheSkuIElmIHRoZSBidWZmZXIgaXMgZnVsbCwgdGhlXG4gIC8vIHRyYW5zZHVjZXIncyB3b3JrIGlzIGRlZmVycmVkIHVudGlsIGxhdGVyIHdoZW4gdGhlIGJ1ZmZlciBpcyBub3QgZnVsbC5cbiAgaWYgKGNoYW5uZWwuYnVmZmVyICYmICFpc0Z1bGwoY2hhbm5lbC5idWZmZXIpKSB7XG4gICAgaGFuZGxlci5jb21taXQoKTtcbiAgICBjb25zdCBkb25lID0gaXNSZWR1Y2VkKGNoYW5uZWwueGZvcm1bcC5zdGVwXShjaGFubmVsLmJ1ZmZlciwgdmFsdWUpKTtcblxuICAgIGZvciAoOzspIHtcbiAgICAgIGlmIChjb3VudChjaGFubmVsLmJ1ZmZlcikgPT09IDApIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICByZWNlaXZlciA9IGRlcXVldWUoY2hhbm5lbC5yZWN2cyk7XG4gICAgICBpZiAocmVjZWl2ZXIgPT09IEVNUFRZKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgaWYgKHJlY2VpdmVyLmFjdGl2ZSkge1xuICAgICAgICBjYWxsYmFjayA9IHJlY2VpdmVyLmNvbW1pdCgpO1xuICAgICAgICBjb25zdCB2YWwgPSByZW1vdmUoY2hhbm5lbC5idWZmZXIpO1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICBkaXNwYXRjaCgoKSA9PiBjYWxsYmFjayh2YWwpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChkb25lKSB7XG4gICAgICBjbG9zZShjaGFubmVsKTtcbiAgICB9XG4gICAgcmV0dXJuIGJveCh0cnVlKTtcbiAgfVxuXG4gIC8vIFRoaXMgbG9vcCBoYXBwZW5zIGlmIHRoZSBjaGFubmVsIGlzIHVuYnVmZmVyZWQgYW5kIHRoZXJlIGlzIGF0IGxlYXN0IG9uZVxuICAvLyBwZW5kaW5nIHJlY2VpdmUuIChCdWZmZXJlZCBjaGFubmVscyBicmVhayBvdXQgb2YgdGhpcyBsb29wIGltbWVkaWF0ZWx5LFxuICAvLyBiZWNhdXNlIGluIG9yZGVyIGZvciBhIGJ1ZmZlcmVkIGNoYW5uZWwgdG8gcmVhY2ggdGhpcyBwb2ludCwgaXRzIGJ1ZmZlclxuICAvLyBtdXN0IGhhdmUgYmVlbiBmdWxsLiBJZiB0aGUgYnVmZmVyIGlzIGZ1bGwsIHRoYXQgbWVhbnMgdGhlcmUgYXJlIG5vIHBlbmRpbmdcbiAgLy8gcmVjZWl2ZXMgYW5kIHRoZSBmaXJzdCBvbmUgcmVhZCB3aWxsIGJlIEVNUFRZLikgSXQgcHJvY2Vzc2VzIHRoZSBuZXh0XG4gIC8vIHBlbmRpbmcgcmVjZWl2ZSBpbW1lZGlhdGVseS5cbiAgZm9yICg7Oykge1xuICAgIHJlY2VpdmVyID0gZGVxdWV1ZShjaGFubmVsLnJlY3ZzKTtcbiAgICBpZiAocmVjZWl2ZXIgPT09IEVNUFRZKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgaWYgKHJlY2VpdmVyLmFjdGl2ZSkge1xuICAgICAgaGFuZGxlci5jb21taXQoKTtcbiAgICAgIGNhbGxiYWNrID0gcmVjZWl2ZXIuY29tbWl0KCk7XG4gICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgZGlzcGF0Y2goKCkgPT4gY2FsbGJhY2sodmFsdWUpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBib3godHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgLy8gSWYgdGhlcmUgYXJlIG5vIHBlbmRpbmcgcmVjZWl2ZXMgb24gYW4gdW5idWZmZXJlZCBjaGFubmVsLCBvciBvbiBhIGJ1ZmZlcmVkXG4gIC8vIGNoYW5uZWwgd2l0aCBhIGZ1bGwgYnVmZmVyLCB3ZSBxdWV1ZSB0aGUgc2VuZCB0byB0bGV0IGl0IHdhaXQgZm9yIGEgcmVjZWl2ZVxuICAvLyB0byBiZWNvbWUgYXZhaWxhYmxlLiBTZW5kcyB3aG9zZSBoYW5kbGVycyBoYXZlIGdvbmUgaW5hY3RpdmUgKHdoaWNoIGhhcHBlbnNcbiAgLy8gaWYgdGhleSB3ZXJlIHByb2Nlc3NlZCBhcyBwYXJ0IG9mIGEgYHNlbGVjdGAgY2FsbCkgYXJlIHBlcmlvZGljYWxseSBwdXJnZWQuXG4gIGlmIChjaGFubmVsLmRpcnR5U2VuZHMgPiBjaGFubmVsLm1heERpcnR5KSB7XG4gICAgZmlsdGVyKGNoYW5uZWwuc2VuZHMsIHNlbmRlciA9PiBzZW5kZXIuaGFuZGxlci5hY3RpdmUpO1xuICAgIGNoYW5uZWwuZGlydHlTZW5kcyA9IDA7XG4gIH0gZWxzZSB7XG4gICAgY2hhbm5lbC5kaXJ0eVNlbmRzKys7XG4gIH1cblxuICBpZiAocUNvdW50KGNoYW5uZWwuc2VuZHMpID49IGNoYW5uZWwubWF4UXVldWVkKSB7XG4gICAgdGhyb3cgRXJyb3IoXG4gICAgICBgTm8gbW9yZSB0aGFuICR7Y2hhbm5lbC5tYXhRdWV1ZWR9IHBlbmRpbmcgc2VuZHMgYXJlIGFsbG93ZWQgb24gYSBzaW5nbGUgY2hhbm5lbGBcbiAgICApO1xuICB9XG4gIGVucXVldWUoY2hhbm5lbC5zZW5kcywgc2VuZEJveCh2YWx1ZSwgaGFuZGxlcikpO1xuXG4gIHJldHVybiBudWxsO1xufVxuXG4vKipcbiAqIFJlY2VpdmVzIGEgdmFsdWUgZnJvbSBhIGNoYW5uZWwuIFRoZSBzcGVjaWZpZWQgaGFuZGxlciBpcyB1c2VkIHRvIGNvbnRyb2xcbiAqIHdoZXRoZXIgdGhlIHJlY2VpdmUgaXMgYWN0aXZlIGFuZCB3aGF0IHRvIGRvIGFmdGVyIHRoZSByZWNlaXZlIGNvbXBsZXRlcy4gQVxuICogcmVjZWl2ZSBjYW4gYmVjb21lIGluYWN0aXZlIGlmIGl0IHdhcyBwYXJ0IG9mIGFuIGBzZWxlY3RgIGNhbGwgYW5kIHNvbWUgb3RoZXJcbiAqIG9wZXJhdGlvbiBzcGVjaWZpZWQgaW4gdGhhdCBjYWxsIGhhcyBhbHJlYWR5IGNvbXBsZXRlZC5cbiAqXG4gKiBUaGlzIHZhbHVlIGlzIGdpdmVuIHRvIGEgc2VuZCBoYW5kbGVyIGltbWVkaWF0ZWx5IGlmIHRoZXJlJ3Mgb25lIHdhaXRpbmcuXG4gKiBPdGhlcndpc2UgdGhlIHZhbHVlIGFuZCBoYW5kbGVyIGFyZSBxdWV1ZWQgdG9nZXRoZXIgdG8gd2FpdCBmb3IgYSBzZW5kLlxuICpcbiAqIFRoaXMgaXMgYSBsb3ctbGV2ZWwgb3BlcmF0aW9uIHRoYXQncyBwcm92aWRlZCBhcyBhIHBhcnQgb2YgdGhlIGNoYW5uZWxcbiAqIGltcGxlbWVudGF0aW9uIHNvIHRoYXQgb3RoZXIgb3BlcmF0aW9ucyBmdW5jdGlvbnMgY2FuIHByb3Blcmx5IGFwcGx5XG4gKiBoYW5kbGVycy4gSXQgaXMgbm90IG1lYW50IGZvciBnZW5lcmFsIHVzZS4gVXNlIHRob3NlIG90aGVyIG9wZXJhdGlvbnNcbiAqIGZ1bmN0aW9ucyBpbnN0ZWFkLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwL2NoYW5uZWxcbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5DaGFubmVsfSBjaGFubmVsIFRoZSBjaGFubmVsIHRoYXQgdGhlIHZhbHVlIGlzIGJlaW5nXG4gKiAgICAgcmVjZWl2ZWQgZnJvbS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaGFuZGxlci5hY3RpdmUgRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSByZWNlaXZlIGlzIHN0aWxsXG4gKiAgICAgYWN0aXZlIGFuZCBzaG91bGQgc3RpbGwgYmUgc2VydmljZWQuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBoYW5kbGVyLmNvbW1pdCBEZWFjdGl2YXRlcyB0aGUgcmVjZWl2ZSAoc28gaXQgY2FuJ3QgYmVcbiAqICAgICBzZXJ2aWNlZCBhIHNlY29uZCB0aW1lKSBhbmQgcmV0dXJucyB0aGUgY2FsbGJhY2sgdG8gYmUgZmlyZWQgd2hlbiB0aGVcbiAqICAgICByZWNlaXZlIGNvbXBsZXRlcy5cbiAqIEByZXR1cm4ge21vZHVsZTpjc3AvY2hhbm5lbC5Cb3h8bnVsbH0gRWl0aGVyIHRoZSBib3hlZCB2YWx1ZSByZWNlaXZlZCBmcm9tXG4gKiAgICAgdGhlIGNoYW5uZWwsIG9yIGBudWxsYCBpZiB0aGUgcmVjZWl2ZSBtdXN0IGJlIHF1ZXVlZCB0byBhd2FpdCBhXG4gKiAgICAgY29ycmVzcG9uZGluZyBzZW5kLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaGFuZGxlUmVjdihjaGFubmVsLCBoYW5kbGVyKSB7XG4gIGxldCBzZW5kZXIsIHNlbmRIYW5kbGVyLCBjYWxsYmFjaztcblxuICAvLyBSdW5zIGlmIHRoZSBjaGFubmVsIGlzIGJ1ZmZlcmVkIGFuZCB0aGUgYnVmZmVyZWQgaXMgbm90IGVtcHR5IChhbiBlbXB0eVxuICAvLyBidWZmZXIgbWVhbnMgdGhlcmUgYXJlIG5vIHBlbmRpbmcgc2VuZHMpLiBXZSBpbW1lZGlhdGVseSBwcm9jZXNzIGFueSBzZW5kc1xuICAvLyB0aGF0IHdlcmUgcXVldWVkIHdoZW4gdGhlcmUgd2VyZSBubyBwZW5kaW5nIHJlY2VpdmVzLCB1cCB1bnRpbCB0aGUgYnVmZmVyXG4gIC8vIGlzIGZpbGxlZCB3aXRoIHNlbnQgdmFsdWVzLlxuICBpZiAoY2hhbm5lbC5idWZmZXIgJiYgY291bnQoY2hhbm5lbC5idWZmZXIpID4gMCkge1xuICAgIGhhbmRsZXIuY29tbWl0KCk7XG4gICAgY29uc3QgdmFsdWUgPSByZW1vdmUoY2hhbm5lbC5idWZmZXIpO1xuXG4gICAgZm9yICg7Oykge1xuICAgICAgaWYgKGlzRnVsbChjaGFubmVsLmJ1ZmZlcikpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBzZW5kZXIgPSBkZXF1ZXVlKGNoYW5uZWwuc2VuZHMpO1xuICAgICAgaWYgKHNlbmRlciA9PT0gRU1QVFkpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIHNlbmRIYW5kbGVyID0gc2VuZGVyLmhhbmRsZXI7XG4gICAgICBpZiAoc2VuZEhhbmRsZXIuYWN0aXZlKSB7XG4gICAgICAgIGNhbGxiYWNrID0gc2VuZEhhbmRsZXIuY29tbWl0KCk7XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgIGRpc3BhdGNoKCgpID0+IGNhbGxiYWNrKHRydWUpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNSZWR1Y2VkKGNoYW5uZWwueGZvcm1bcC5zdGVwXShjaGFubmVsLmJ1ZmZlciwgc2VuZGVyLnZhbHVlKSkpIHtcbiAgICAgICAgICBjbG9zZShjaGFubmVsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYm94KHZhbHVlKTtcbiAgfVxuXG4gIC8vIFRoaXMgbG9vcCBydW5zIG9uIGFuIHVuYnVmZmVyZWQgY2hhbm5lbCBpZiB0aGVyZSBhcmUgYW55IHBlbmRpbmcgc2VuZHMuXG4gIC8vIChCdWZmZXJlZCBjaGFubmVscyBicmVhayBvdXQgb2YgdGhpcyBsb29wIGltbWVkaWF0ZWx5IGJlY2F1c2UgaW4gb3JkZXIgdG9cbiAgLy8gaGF2ZSBjb21lIHRoaXMgZmFyIHdpdGhvdXQgcmV0dXJuaW5nLCB0aGUgY2hhbm5lbCdzIGJ1ZmZlciBtdXN0IGhhdmUgYmVlblxuICAvLyBlbXB0eS4gQW4gZW1wdHkgYnVmZmVyIG1lYW5zIHRoZXJlIGFyZSBubyBwZW5kaW5nIHNlbmRzLCBzbyB0aGUgZmlyc3RcbiAgLy8gcGVuZGluZyBzZW5kIHJlYWQgZnJvbSBpdCB3aWxsIGJlIEVNUFRZLikgSXQgcHJvY2Vzc2VzIHRoZSBuZXh0IHBlbmRpbmdcbiAgLy8gc2VuZCBpbW1lZGlhdGVseS5cbiAgZm9yICg7Oykge1xuICAgIHNlbmRlciA9IGRlcXVldWUoY2hhbm5lbC5zZW5kcyk7XG4gICAgaWYgKHNlbmRlciA9PT0gRU1QVFkpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBzZW5kSGFuZGxlciA9IHNlbmRlci5oYW5kbGVyO1xuICAgIGlmIChzZW5kSGFuZGxlci5hY3RpdmUpIHtcbiAgICAgIGNhbGxiYWNrID0gc2VuZEhhbmRsZXIuY29tbWl0KCk7XG4gICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgZGlzcGF0Y2goKCkgPT4gY2FsbGJhY2sodHJ1ZSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGJveChzZW5kZXIudmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIC8vIElmIHdlJ3ZlIGV4aGF1c3RlZCBhbGwgb2Ygb3VyIHBlbmRpbmcgc2VuZHMgYW5kIHRoZSBjaGFubmVsIGlzIG1hcmtlZFxuICAvLyBjbG9zZWQsIHdlIGNhbiBmaW5hbGx5IHJldXRybiB0aGUgZmFjdCB0aGF0IHRoZSBjaGFubmVsIGlzIGNsb3NlZC4gVGhpc1xuICAvLyBlbnN1cmVzIHRoYXQgYW55IHNlbmRzIHRoYXQgd2VyZSBhbHJlYWR5IHBlbmRpbmcgb24gdGhlIGNoYW5uZWwgYXJlXG4gIC8vIHByb2Nlc3NlZCBiZWZvcmUgY2xvc3VyZSwgZXZlbiBpZiB0aGUgY2hhbm5lbCB3YXMgY2xvc2VkIGJlZm9yZSB0aGF0IGNvdWxkXG4gIC8vIGhhcHBlbi5cbiAgaWYgKGNoYW5uZWwuY2xvc2VkKSB7XG4gICAgaGFuZGxlci5jb21taXQoKTtcbiAgICByZXR1cm4gYm94KENMT1NFRCk7XG4gIH1cblxuICAvLyBJZiBhbiB1bmJ1ZmZlcmVkIGNoYW5uZWwgb3IgYSBidWZmZXJlZCBjaGFubmVsIHdpdGggYW4gZW1wdHkgYnVmZmVyIGhhcyBub1xuICAvLyBwZW5kaW5nIHNlbmRzLCBhbmQgaWYgdGhlIGNoYW5uZWwgaXMgc3RpbGwgb3BlbiwgdGhlIHJlY2VpdmUgaXMgcXVldWVkIHRvXG4gIC8vIGJlIHByb2Nlc3NlZCB3aGVuIGEgc2VuZCBpcyBhdmFpbGFibGUuIFJlY2VpdmVzIHdob3NlIGhhbmRsZXJzIGhhdmUgZ29uZVxuICAvLyBpbmFjdGl2ZSBhcyB0aGUgcmVzdWx0IG9mIGBzZWxlY3RgIHByb2Nlc3NpbmcgYXJlIHBlcmlvZGljYWxseSBwdXJnZWQuXG4gIGlmIChjaGFubmVsLmRpcnR5UmVjdnMgPiBjaGFubmVsLm1heERpcnR5KSB7XG4gICAgZmlsdGVyKGNoYW5uZWwucmVjdnMsIHJlY2VpdmVyID0+IHJlY2VpdmVyLmFjdGl2ZSk7XG4gICAgY2hhbm5lbC5kaXJ0eVJlY3ZzID0gMDtcbiAgfSBlbHNlIHtcbiAgICBjaGFubmVsLmRpcnR5UmVjdnMrKztcbiAgfVxuXG4gIGlmIChxQ291bnQoY2hhbm5lbC5yZWN2cykgPj0gY2hhbm5lbC5tYXhRdWV1ZWQpIHtcbiAgICBjb25zdCBtYXggPSBjaGFubmVsLm1heFF1ZXVlZDtcbiAgICB0aHJvdyBFcnJvcihcbiAgICAgIGBObyBtb3JlIHRoYW4gJHttYXh9IHBlbmRpbmcgcmVjZWl2ZXMgYXJlIGFsbG93ZWQgb24gYSBzaW5nbGUgY2hhbm5lbGBcbiAgICApO1xuICB9XG4gIGVucXVldWUoY2hhbm5lbC5yZWN2cywgaGFuZGxlcik7XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8qKlxuICogQ2xvc2VzIHRoZSBjaGFubmVsIGlmIGl0IGlzbid0IGFscmVhZHkgY2xvc2VkLiBUaGlzIGltbWVkaWF0ZWx5IHJldHVybnMgYW55XG4gKiBidWZmZXJlZCB2YWx1ZXMgdG8gcGVuZGluZyByZWNlaXZlcy4gSWYgdGhlcmUgYXJlIG5vIGJ1ZmZlcmVkIHZhbHVlcyAob3IgaWZcbiAqIHRoZXkndmUgYWxyZWFkeSBiZWVuIHRha2VuIGJ5IG90aGVyIHJlY2VpdmVzKSwgdGhlbiBhbGwgb2YgdGhlIHJlc3Qgb2YgdGhlXG4gKiByZWNlaXZlcyBhcmUgY29tcGxldGVkIHdpdGggdGhlIHZhbHVlIG9mIHtAbGluayBtb2R1bGU6Y3NwLkNMT1NFRHxDTE9TRUR9LlxuICogQW55IHBlbmRpbmcgc2VuZHMgYXJlIGNvbXBsZXRlZCB3aXRoIHRoZSB2YWx1ZSBvZiBgZmFsc2VgLlxuICpcbiAqIE5vdGUgdGhhdCB0aGUgYnVmZmVyIGlzIG5vdCBlbXB0aWVkIGlmIHRoZXJlIGFyZSBzdGlsbCB2YWx1ZXMgcmVtYWluaW5nIGFmdGVyXG4gKiBhbGwgb2YgdGhlIHBlbmRpbmcgcmVjZWl2ZXMgaGF2ZSBiZWVuIGhhbmRsZWQuIFRoZSBjaGFubmVsIHdpbGwgc3RpbGwgcHJvdmlkZVxuICogdGhvc2UgdmFsdWVzIHRvIGFueSBmdXR1cmUgcmVjZWl2ZXMsIHRob3VnaCBubyBuZXcgdmFsdWVzIG1heSBiZSBhZGRlZCB0byB0aGVcbiAqIGNoYW5uZWwuIE9uY2UgdGhlIGJ1ZmZlciBpcyBkZXBsZXRlZCwgYW55IGZ1dHVyZSByZWNlaXZlcyB3aWxsIHJldHVyblxuICoge0BsaW5rIG1vZHVsZTpjc3AuQ0xPU0VEfENMT1NFRH0uXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5DaGFubmVsfSBjaGFubmVsIFRoZSBjaGFubmVsIHRvIGJlIGNsb3NlZC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNsb3NlKGNoYW5uZWwpIHtcbiAgaWYgKGNoYW5uZWwuY2xvc2VkKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNoYW5uZWwuY2xvc2VkID0gdHJ1ZTtcblxuICBsZXQgcmVjZWl2ZXIsIHNlbmRlciwgY2FsbGJhY2s7XG5cbiAgLy8gSWYgdGhlcmUgaXMgYSBidWZmZXIgYW5kIGl0IGhhcyBhdCBsZWFzdCBvbmUgdmFsdWUgaW4gaXQsIHNlbmQgdGhvc2UgdmFsdWVzXG4gIC8vIHRvIGFueSBwZW5kaW5nIHJlY2VpdmVzIHRoYXQgbWlnaHQgc3RpbGwgYmUgcXVldWVkLlxuICBpZiAoY2hhbm5lbC5idWZmZXIpIHtcbiAgICBjaGFubmVsLnhmb3JtW3AucmVzdWx0XShjaGFubmVsLmJ1ZmZlcik7XG4gICAgZm9yICg7Oykge1xuICAgICAgaWYgKGNvdW50KGNoYW5uZWwuYnVmZmVyKSA9PT0gMCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHJlY2VpdmVyID0gZGVxdWV1ZShjaGFubmVsLnJlY3ZzKTtcbiAgICAgIGlmIChyZWNlaXZlciA9PT0gRU1QVFkpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBpZiAocmVjZWl2ZXIuYWN0aXZlKSB7XG4gICAgICAgIGNhbGxiYWNrID0gcmVjZWl2ZXIuY29tbWl0KCk7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gcmVtb3ZlKGNoYW5uZWwuYnVmZmVyKTtcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgZGlzcGF0Y2goKCkgPT4gY2FsbGJhY2sodmFsdWUpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIE9uY2UgdGhlIGJ1ZmZlciBpcyBlbXB0eSAob3IgaWYgdGhlcmUgaXNuJ3QgYSBidWZmZXIgYXQgYWxsKSwgc2VuZCBDTE9TRURcbiAgLy8gdG8gYWxsIHJlbWFpbmluZyBxdWV1ZWQgcmVjZWl2ZXMuXG4gIGZvciAoOzspIHtcbiAgICByZWNlaXZlciA9IGRlcXVldWUoY2hhbm5lbC5yZWN2cyk7XG4gICAgaWYgKHJlY2VpdmVyID09PSBFTVBUWSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGlmIChyZWNlaXZlci5hY3RpdmUpIHtcbiAgICAgIGNhbGxiYWNrID0gcmVjZWl2ZXIuY29tbWl0KCk7XG4gICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgZGlzcGF0Y2goKCkgPT4gY2FsbGJhY2soQ0xPU0VEKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gU2VuZCBgZmFsc2VgIHRvIGFueSByZW1haW5pbmcgcXVldWVkIHNlbmRzLlxuICBmb3IgKDs7KSB7XG4gICAgc2VuZGVyID0gZGVxdWV1ZShjaGFubmVsLnNlbmRzKTtcbiAgICBpZiAoc2VuZGVyID09PSBFTVBUWSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGlmIChzZW5kZXIuaGFuZGxlci5hY3RpdmUpIHtcbiAgICAgIGNhbGxiYWNrID0gc2VuZGVyLmhhbmRsZXIuY29tbWl0KCk7XG4gICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgZGlzcGF0Y2goKCkgPT4gY2FsbGJhY2soZmFsc2UpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IHtcbiAgQ0xPU0VELFxuICBNQVhfRElSVFksXG4gIE1BWF9RVUVVRUQsXG4gIGNoYW5uZWwsXG4gIGhhbmRsZVNlbmQsXG4gIGhhbmRsZVJlY3YsXG4gIGNsb3NlLFxuICBib3gsXG4gIGlzQm94XG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG5cbi8qKlxuICogQW4gaW1wbGVtZW50YXRpb24gb2YgY2hhbm5lbHMuIFRoZXNlIGNoYW5uZWxzIGFyZSBlc3NlbnRpYWxseSBxdWV1ZXMgdGhhdFxuICogaG9sZCBpbnN0cnVjdGlvbnMgd2FpdGluZyBmb3IgdGhlIG5leHQgYXZhaWxhYmxlIGFzeW5jIGZ1bmN0aW9uIHRvIHByb2Nlc3NcbiAqIHRoZW0uIFRoZXkgY2FuIGJlIGJ1ZmZlcmVkLCB3aGljaCBpcyBhY2NvbXBsaXNoZWQgdXNpbmcgdGhlIGJ1ZmZlciBmdW5jdGlvbnNcbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC5maXhlZHxmaXhlZH1gLCBge0BsaW5rIG1vZHVsZTpjc3AuZHJvcHBpbmd8ZHJvcHBpbmd9YCwgYW5kXG4gKiBge0BsaW5rIG1vZHVsZTpjc3Auc2xpZGluZ3xzbGlkaW5nfWAuXG4gKlxuICogQ2hhbm5lbHMgZG8gbm90IGludGVyYWN0IHdpdGggSlMgdGFza3Mgb3IgdGhlIGRpc3BhdGNoZXIgaW4gYW55IG1lYW5pbmdmdWxcbiAqIHdheS4gVGhleSdyZSBqdXN0IGhlcmUgdG8gaG9sZCB0YXNrcyB3aGljaCBtYXkgdGhlbXNlbHZlcyB0aGVuIGNhdXNlIG5ldyBKU1xuICogdGFza3MgdG8gYmUgY3JlYXRlZCB2aWEgdGhlIGRpc3BhdGNoZXIuXG4gKlxuICogQ2hhbm5lbHMgbWF5IGhhdmUgdHJhbnNkdWNlcnMgYXNzb2NpYXRlZCB3aXRoIHRoZW0uIFRoZSB0cmFuc2R1Y2VycyBhcmVcbiAqIGV4cGVjdGVkIHRvIGZvbGxvdyB0aGUgc2FtZSBjb252ZW50aW9ucyBhcyBhbnkgb2YgdGhlIHBvcHVsYXIgdHJhbnNkdWNlclxuICogbGlicmFyaWVzLiBFeHBsaWNpdCBzdXBwb3J0IGlzIHJlcXVpcmVkIGJlY2F1c2UgY2hhbm5lbHMgd291bGRuJ3QgcGxheSB3ZWxsXG4gKiB3aXRoIHRoZSBub3JtYWwgd2F5IG9mIG1ha2luZyBhbiBvYmplY3Qgc3VwcG9ydCB0cmFuc2R1Y3Rpb24sIGZvciB0d29cbiAqIGRpZmZlcmVudCByZWFzb25zLlxuICpcbiAqICogVHJhbnNkdWNlcnMgcmVxdWlyZSB0aGUgYWJpbGl0eSB0byBjcmVhdGUgYSBuZXcsIGVtcHR5IGNvbGxlY3Rpb24gb2YgdGhlXG4gKiAgIHNhbWUgdHlwZSBhcyB0aGUgaW5wdXQgY29sbGVjdGlvbi4gSW4gdGhpcyBjYXNlLCB0aGF0IHdvdWxkIG1lYW4gY3JlYXRpbmcgYVxuICogICBuZXcgY2hhbm5lbCwgbWVhbmluZyB0aGF0IHRoZSBvdXRwdXQgY2hhbm5lbCAoZnJvbSB3aGljaCB0aGUgdHJhbnNmb3JtZWRcbiAqICAgdmFsdWVzIGFyZSByZWNlaXZlZCkgd291bGQgYmUgZGlmZmVyZW50IHRoYW4gdGhlIGlucHV0IGNoYW5uZWwgKHdoZXJlXG4gKiAgIHZhbHVlcyBhcmUgc2VudCkuXG4gKiAqIElmIHdlIHNvbWVob3cgZ2V0IG92ZXIgdGhhdCByZXF1aXJlbWVudCBhbmQga2VlcCBhbGwgYWN0aW9uIG9uIHRoZSBzYW1lXG4gKiAgIGNoYW5uZWwsIHdlIGNhbid0IHRha2UgdmFsdWVzIGZyb20gdGhlIGNoYW5uZWwsIHRyYW5zZm9ybSB0aGVtLCBhbmQgcHV0XG4gKiAgIHRoZW0gYmFjay4gVGhpcyB3b3VsZCBwb3RlbnRpYWxseSBjaGFuZ2UgdGhlIG9yZGVyIG9mIHZhbHVlcyBpbiB0aGUgY2hhbm5lbFxuICogICBzaW5jZSB3ZSBhcmUgZGVhbGluZyB3aXRoIGFzeW5jaHJvbm91cyBwcm9jZXNzZXMuXG4gKlxuICogVGhlIGV4cGxpY2l0IHN1cHBvcnQgbWVhbnMgYSB0cmFuc2R1Y2VyIGlzIGRpcmVjdGx5IGFzc29jaWF0ZWQgd2l0aCBhXG4gKiBjaGFubmVsLiBXaGVuIGEgdmFsdWUgaXMgc2VudCB0byB0aGUgY2hhbm5lbCwgaXQncyBmaXJzdCBydW4gdGhyb3VnaCB0aGVcbiAqIHRyYW5zZHVjZXIgYW5kIHRoZSB0cmFuc2Zvcm1lZCB2YWx1ZSBpcyB0aGUgb25lIGFjdHVhbGx5IHB1dCBpbnRvIHRoZVxuICogY2hhbm5lbCdzIGJ1ZmZlci4gVGhpcyBhdm9pZHMgYm90aCBvZiB0aGUgcHJvYmxlbXMgbm90ZWQgYWJvdmUuXG4gKlxuICogQG1vZHVsZSBjc3AvY2hhbm5lbFxuICogQHByaXZhdGVcbiAqL1xuXG5pbXBvcnQge1xuICBDTE9TRUQsXG4gIGNoYW5uZWwgYXMgY2hhbkltcGwsXG4gIGhhbmRsZVNlbmQsXG4gIGhhbmRsZVJlY3YsXG4gIGNsb3NlIGFzIGNsb3NlSW1wbCxcbiAgTUFYX0RJUlRZLFxuICBNQVhfUVVFVUVEXG59IGZyb20gXCIuL2hhbmRsZXJcIjtcbmltcG9ydCB7IERFRkFVTFQsIHNlbGVjdCwgc2VsZWN0QXN5bmMsIHZhbHVlLCBjaGFubmVsIH0gZnJvbSBcIi4vc2VsZWN0XCI7XG5pbXBvcnQgeyBhZGQsIGZpeGVkLCBpc0J1ZmZlciB9IGZyb20gXCJtb2R1bGVzL2J1ZmZlclwiO1xuaW1wb3J0IHsgcHJvdG9jb2xzIGFzIHAgfSBmcm9tIFwiQGNoYW5rby94ZHVjZVwiO1xuXG4vKipcbiAqIEEgaGFuZGxlciBmdW5jdGlvbiBmb3IgZXhjZXB0aW9ucyB0aGF0IGFyZSB0aHJvd24gYnkgYSB0cmFuc2R1Y2VyIHdoaWxlXG4gKiB0cmFuc2Zvcm1pbmcgdmFsdWVzIG9uIGEgY2hhbm5lbC5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gZXJyIFRoZSBlcnJvciBvYmplY3QgdGhhdCB3YXMgdGhyb3duIGJ5IHRoZSB0cmFuc2R1Y2VyLlxuICogQHJldHVybiB7Kn0gQSB2YWx1ZSB0aGF0IHNob3VsZCBiZSBwdXQgaW50byB0aGUgY2hhbm5lbCdzIGJ1ZmZlciB3aGVuIHRoZVxuICogICAgIHRyYW5zZHVjZXIgdGhyb3dzIHRoZSBlcnJvci4gSWYgdGhpcyB2YWx1ZSBpc1xuICogICAgIHtAbGluayBtb2R1bGU6Y3NwLkNMT1NFRHxDTE9TRUR9LCB0aGVuIG5vIHZhbHVlIGF0IGFsbCB3aWxsIGJlIGFkZGVkIHRvXG4gKiAgICAgdGhlIGJ1ZmZlci5cbiAqIEBjYWxsYmFja1xuICogQG1lbWJlcm9mIG1vZHVsZTpjc3AvY2hhbm5lbFxuICogQHByaXZhdGVcbiAqL1xuXG4vKipcbiAqIFRoZSBkZWZhdWx0IGV4Y2VwdGlvbiBoYW5kbGVyLCB1c2VkIHdoZW4gbm8gZXhjZXB0aW9uIGhhbmRsZXIgaXMgc3VwcGxpZWQgdG9cbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC9jaGFubmVsLmhhbmRsZUV4Y2VwdGlvbn1gLFxuICogYHtAbGluayBtb2R1bGU6Y3NwL2NoYW5uZWwud3JhcFRyYW5zZm9ybWVyfWAsIGB7QGxpbmsgbW9kdWxlOmNzcC5jaGFufGNoYW59YCxcbiAqIG9yIGB7QGxpbmsgbW9kdWxlOmNzcC50cmFuc0NoYW58dHJhbnNDaGFufWAuIFRoaXMgZGVmYXVsdCBoYW5kbGVyIG1lcmVseVxuICogcmV0dXJucyBge0BsaW5rIG1vZHVsZTpjc3AuQ0xPU0VEfENMT1NFRH1gLCB3aGljaCB3aWxsIHJlc3VsdCBpbiBubyBuZXcgdmFsdWVcbiAqIGJlaW5nIHdyaXR0ZW4gdG8gdGhlIGNoYW5uZWwuXG4gKlxuICogQHR5cGUge21vZHVsZTpjc3AuRXhjZXB0aW9uSGFuZGxlcn1cbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwL2NoYW5uZWxcbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IERFRkFVTFRfSEFORExFUiA9ICgpID0+IENMT1NFRDtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGhhbmRsZXIgdXNlZCBmb3IgYHNlbmRgIGFuZCBgcmVjdmAgb3BlcmF0aW9ucy5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcC9jaGFubmVsXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AvY2hhbm5lbC5IYW5kbGVyQ2FsbGJhY2t9IGZuIFRoZSBjYWxsYmFjayB0byBiZSBydW4gd2hlblxuICogICAgIChhbmQgaWYpIHRoZSBvcGVyYXRpb24gY29tcGxldGVzLlxuICogQHJldHVybiB7bW9kdWxlOmNzcC9jaGFubmVsLkhhbmRsZXJ9IFRoZSBuZXcgaGFuZGxlci5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIG9wSGFuZGxlcihmbikge1xuICByZXR1cm4gT2JqZWN0LmNyZWF0ZShudWxsLCB7XG4gICAgYWN0aXZlOiB7XG4gICAgICB2YWx1ZTogdHJ1ZVxuICAgIH0sXG4gICAgY29tbWl0OiB7XG4gICAgICB2YWx1ZTogKCkgPT4gZm5cbiAgICB9XG4gIH0pO1xufVxuXG4vKipcbiAqIEhhbmRsZXMgYW4gZXhjZXB0aW9uIHRoYXQgaXMgdGhyb3duIGluc2lkZSBhIHRyYW5zZHVjZXIuIFRoZSB0aHJvd24gZXJyb3IgaXNcbiAqIHBhc3NlZCB0byB0aGUgYGhhbmRsZXJgIGZ1bmN0aW9uLCBhbmQgdGhlIHJlc3VsdCBvZiB0aGF0IGhhbmRsZXIgZnVuY3Rpb24gaXNcbiAqIGFkZGVkIHRvIHRoZSBjaGFubmVsJ3MgYnVmZmVyLiBJZiB0aGF0IHZhbHVlIGlzXG4gKiB7QGxpbmsgbW9kdWxlOmNzcC5DTE9TRUR8Q0xPU0VEfSwgdGhlbiBpdCBpcyAqbm90KiBhZGRlZCB0byB0aGUgYnVmZmVyLlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5CdWZmZXJ9IGJ1ZmZlciBUaGUgYnVmZmVyIHRoYXQgYmFja3MgdGhlIGNoYW5uZWwgd2hvc2VcbiAqICAgICB0cmFuc2R1Y2VyJ3MgZXhjZXB0aW9ucyBhcmUgYmVpbmcgaGFuZGxlZC5cbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5FeGNlcHRpb25IYW5kbGVyfSBoYW5kbGVyIFRoZSBleGNlcHRpb24gaGFuZGxpbmcgZnVuY3Rpb25cbiAqICAgICB0aGF0IGlzIHJ1biB3aGVuIGFuIGVycm9yIG9jY3VycyBpbiBhIHRyYW5zZHVjZXIuXG4gKiBAcGFyYW0gIHtPYmplY3R9IGV4IFRoZSBlcnJvciBvYmplY3QgdGhyb3duIGJ5IHRoZSB0cmFuc2R1Y2VyLlxuICogQHJldHVybiB7bW9kdWxlOmNzcC5CdWZmZXJ9IFRoZSBidWZmZXIgaXRzZWxmLiBUaGlzIGlzIGRvbmUgdG8gbWFrZSBpdCBlYXNpZXJcbiAqICAgICB0byBpbnRlZ3JhdGUgdGhpcyBmdW5jdGlvbiBpbnRvIGEgdHJhbnNkdWNlcidzIHN0ZXAgZnVuY3Rpb24uXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBoYW5kbGVFeGNlcHRpb24oYnVmZmVyLCBoYW5kbGVyLCBleCkge1xuICBjb25zdCB2YWx1ZSA9IGhhbmRsZXIoZXgpO1xuICBpZiAodmFsdWUgIT09IENMT1NFRCkge1xuICAgIGFkZChidWZmZXIsIHZhbHVlKTtcbiAgfVxuICByZXR1cm4gYnVmZmVyO1xufVxuXG4vKipcbiAqIEEgdHJhbnNkdWNlciB0aGF0IHdyYXBzIGFub3RoZXIgdHJhbnNkdWNlciB3aXRoIGVycm9yIGhhbmRsaW5nIGNvZGUuIEFueVxuICogZXJyb3IgdGhhdCBvY2N1cnMgd2l0aGluIHRoZSB0cmFuc2R1Y2VyLCBlaXRoZXIgaW4gdGhlIHN0ZXAgZnVuY3Rpb24gb3IgdGhlXG4gKiByZXN1bHQgZnVuY3Rpb24sIHdpbGwgY2F1c2UgdGhlIGVycm9yIGhhbmRsZXIgdG8gYmUgcnVuLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB4Zm9ybSBUaGUgdHJhbnNkdWNlciB0byBhZGQgYW4gZXJyb3IgaGFuZGxlciB0by5cbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5FeGNlcHRpb25IYW5kbGVyfSBbaGFuZGxlcj1ERUZBVUxUX0hBTkRMRVJdIFRoZSBleGNlcHRpb25cbiAqICAgICBoYW5kbGluZyBmdW5jdGlvbiB0aGF0IGlzIHJ1biB3aGVuIGFuIGVycm9yIG9jY3VycyBpbiB0aGUgdHJhbnNkdWNlci5cbiAqIEByZXR1cm4ge09iamVjdH0gQSBuZXcgdHJhbnNkdWNlciB0aGF0IGlzIHRoZSByZXN1bHQgb2Ygd3JhcHBpbmcgdGhlIHByb3ZpZGVkXG4gKiAgICAgdHJhbnNkdWNlcidzIHN0ZXAgYW5kIHJlc3VsdCBmdW5jdGlvbnMgd2l0aCB0aGUgZXhjZXB0aW9uIGhhbmRsZXIuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBoYW5kbGVyVHJhbnNkdWNlcih4Zm9ybSwgaGFuZGxlciA9IERFRkFVTFRfSEFORExFUikge1xuICByZXR1cm4ge1xuICAgIFtwLnN0ZXBdKGJ1ZmZlciwgaW5wdXQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiB4Zm9ybVtwLnN0ZXBdKGJ1ZmZlciwgaW5wdXQpO1xuICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgcmV0dXJuIGhhbmRsZUV4Y2VwdGlvbihidWZmZXIsIGhhbmRsZXIsIGV4KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgW3AucmVzdWx0XShidWZmZXIpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiB4Zm9ybVtwLnJlc3VsdF0oYnVmZmVyKTtcbiAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgIHJldHVybiBoYW5kbGVFeGNlcHRpb24oYnVmZmVyLCBoYW5kbGVyLCBleCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuXG4vKipcbiAqIFRoZSByZWR1Y2VyIHVzZWQgYXQgdGhlIGVuZCBvZiBhIHRyYW5zZHVjZXIgY2hhaW4gdG8gY29udHJvbCBob3cgdGhlXG4gKiB0cmFuc2Zvcm1lZCB2YWx1ZXMgYXJlIHJlZHVjZWQgYmFjayBvbnRvIHRoZSBjaGFubmVsJ3MgYnVmZmVyLiBUaGlzIHJlZHVjZXJcbiAqIGRvZXMgbm90aGluZyBtb3JlIHRoYW4gYWRkIHRoZSBpbnB1dCBpdGVtcyAod2hpY2ggYXJlIHRoZSB0cmFuc2Zvcm1lZCB2YWx1ZXNcbiAqIHRoYXQgYXJlIGJlaW5nIHB1dCBvbnRvIHRoZSBjaGFubmVsKSB0byB0aGUgY2hhbm5lbCBidWZmZXIuXG4gKlxuICogVGhpcyBpcyBhIG5lY2Vzc2FyeSBwYXJ0IG9mIHdvcmtpbmcgd2l0aCBhIHRyYW5zZHVjZXIsIGFzIHRoZSBmaW5hbCByZWR1Y2VyXG4gKiBhbHdheXMgdGFrZXMgdGhlIHRyYW5zZm9ybWVkIHZhbHVlcyBhbmQgcmVuZGVycyB0aGVtIGludG8gd2hhdGV2ZXIgY29sbGVjdGlvblxuICogaXMgZGVzaXJlZC4gVGhpcyBpcyB0aGF0IGZpbmFsIHJlZHVjZXIgZm9yIGNoYW5uZWxzLlxuICpcbiAqIEB0eXBlIHtPYmplY3R9XG4gKiBAcHJpdmF0ZVxuICovXG5jb25zdCBidWZmZXJSZWR1Y2VyID0ge1xuICBbcC5pbml0XSgpIHtcbiAgICB0aHJvdyBFcnJvcihcImluaXQgbm90IGF2YWlsYWJsZVwiKTtcbiAgfSxcblxuICBbcC5zdGVwXShidWZmZXIsIGlucHV0KSB7XG4gICAgYWRkKGJ1ZmZlciwgaW5wdXQpO1xuICAgIHJldHVybiBidWZmZXI7XG4gIH0sXG5cbiAgW3AucmVzdWx0XShidWZmZXIpIHtcbiAgICByZXR1cm4gYnVmZmVyO1xuICB9XG59O1xuXG4vKipcbiAqIFBhcnNlcyB0aGUgYnVmZmVyIGFyZ3VtZW50IGFuZCBvcHRpb25zLCBhbG9uZyB3aXRoIGEgc2V0IG9mIGRlZmF1bHQgb3B0aW9ucyxcbiAqIHRvIGZpZ3VyZSBvdXQgd2hhdCB3YXMgcmVhbGx5IHBhc3NlZCB0byBge0BsaW5rIG1vZHVsZTpjc3AuY2hhbnxjaGFufWAuXG4gKlxuICogQHBhcmFtIHsobnVsbHxudW1iZXJ8bW9kdWxlOmNzcC5CdWZmZXIpfSBidWZmZXIgVGhlIGJ1ZmZlciBhcmd1bWVudCBwYXNzZWQgdG9cbiAqICAgICBge0BsaW5rIG1vZHVsZTpjc3AuY2hhbnxjaGFufWAuXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyBUaGUgb3B0aW9ucyBhcmd1bWVudCBwYXNzZWQgdG9cbiAqICAgICBge0BsaW5rIG1vZHVsZTpjc3AuY2hhbnxjaGFufWAuXG4gKiBAcGFyYW0ge29iamVjdH0gZGVmYXVsdE9wdGlvbnMgRGVmYXVsdCB2YWx1ZXMgZm9yIG9wdGlvbnMgdGhhdCBtaWdodCBub3QgaGF2ZVxuICogICAgIGJlZW4gc2VudCB0byBge0BsaW5rIG1vZHVsZTpjc3AuY2hhbnxjaGFufWAuXG4gKiBAcmV0dXJuIHtvYmplY3R9IEFuIG9iamVjdCBjb250YWluaW5nIHRoZSBwcm9jZXNzZWQgdmFsdWVzIG9mIGFsbCBvZiB0aGVcbiAqICAgICBhcmd1bWVudHMgc2VudCB0byBge0BsaW5rIG1vZHVsZTpjc3AuY2hhbnxjaGFufWAuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBwYXJzZUFyZ3MoYnVmZmVyLCBvcHRpb25zLCBkZWZhdWx0T3B0aW9ucykge1xuICBsZXQgYnVmO1xuICBsZXQgb3B0cztcblxuICBpZiAoIWJ1ZmZlcikge1xuICAgIC8vIHNhbWUgZm9yIDAsIG51bGwsIG9yIHVuZGVmaW5lZFxuICAgIGJ1ZiA9IG51bGw7XG4gICAgb3B0cyA9IG9wdGlvbnM7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGJ1ZmZlciA9PT0gXCJudW1iZXJcIikge1xuICAgIGJ1ZiA9IGZpeGVkKGJ1ZmZlcik7XG4gICAgb3B0cyA9IG9wdGlvbnM7XG4gIH0gZWxzZSBpZiAoaXNCdWZmZXIoYnVmZmVyKSkge1xuICAgIGJ1ZiA9IGJ1ZmZlcjtcbiAgICBvcHRzID0gb3B0aW9ucztcbiAgfSBlbHNlIHtcbiAgICAvLyBJZiBubyBidWZmZXIgaXMgc3BlY2lmaWVkIGJ1dCBhIHRyYW5zZHVjZXIgaXMsIHdlIGFzc3VtZSBmaXhlZCgxKSBpbnN0ZWFkXG4gICAgLy8gb2Ygbm8gYnVmZmVyXG4gICAgYnVmID0gYnVmZmVyPy50cmFuc2R1Y2VyID8gZml4ZWQoMSkgOiBudWxsO1xuICAgIG9wdHMgPSBidWZmZXI7XG4gIH1cblxuICBjb25zdCB7IHRyYW5zZHVjZXIsIGhhbmRsZXIsIG1heERpcnR5LCBtYXhRdWV1ZWQsIHRpbWVyIH0gPSBPYmplY3QuYXNzaWduKFxuICAgIHt9LFxuICAgIGRlZmF1bHRPcHRpb25zLFxuICAgIG9wdHNcbiAgKTtcbiAgcmV0dXJuIHsgYnVmLCB0cmFuc2R1Y2VyLCBoYW5kbGVyLCBtYXhEaXJ0eSwgbWF4UXVldWVkLCB0aW1lciB9O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYW5kIHJldHVybnMgYSBuZXcgY2hhbm5lbC5cbiAqXG4gKiBCeSBkZWZhdWx0IHRoaXMgY2hhbm5lbCB3aWxsIGJlIGEgc2ltcGxlIHVuYnVmZmVyZWQsIHVudHJhbnNmb3JtZWQgY2hhbm5lbCxcbiAqIGJ1dCB0aGF0IGNhbiBiZSBjaGFuZ2VkIHRocm91Z2ggb3B0aW9ucy4gQSBjaGFubmVsIGRvZXMgbm90IGhhdmUgYW55XG4gKiBleHRlcm5hbGx5IHVzZWZ1bCBmdW5jdGlvbnMuIEl0IGV4aXN0cyBsYXJnZWx5IHRvIGJlIHBhc3NlZCBpbnRvXG4gKiBge0BsaW5rIG1vZHVsZTpjc3Auc2VuZHxzZW5kfWAsIGB7QGxpbmsgbW9kdWxlOmNzcC5yZWN2fHJlY3Z9YCwgYW5kXG4gKiBge0BsaW5rIG1vZHVsZTpjc3Auc2VsZWN0fHNlbGVjdH1gIGludm9jYXRpb25zLCBhbG9uZyB3aXRoIHRoZWlyIG5vbi1ibG9ja2luZ1xuICogdmFyaWF0aW9ucyAoYHtAbGluayBtb2R1bGU6Y3NwLnNlbmRBc3luY3xzZW5kQXN5bmN9YCxcbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC5yZWN2QXN5bmN8cmVjdkFzeW5jfWAsIGFuZFxuICogYHtAbGluayBtb2R1bGU6Y3NwLnNlbGVjdEFzeW5jfHNlbGVjdEFzeW5jfWApLlxuICpcbiAqIElmIGEgYnVmZmVyIHZhbHVlIGlzIHByb3ZpZGVkLCBpdCBkZWZpbmVzIHdoYXQgYnVmZmVyIHNob3VsZCBiYWNrIHRoZVxuICogY2hhbm5lbC4gSWYgdGhpcyBpcyBgbnVsbGAgb3IgYDBgLCB0aGUgY2hhbm5lbCB3aWxsIGJlIHVuYnVmZmVyZWQuIElmIGl0J3MgYVxuICogcG9zaXRpdmUgbnVtYmVyLCB0aGUgY2hhbm5lbCB3aWxsIGJlIGJ1ZmZlcmVkIGJ5IGFcbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC5GaXhlZEJ1ZmZlcnxGaXhlZEJ1ZmZlcn0gYG9mIHRoYXQgc2l6ZS4gSWYgaXQncyBhXG4gKiBge0BsaW5rIG1vZHVsZTpjc3AuQnVmZmVyfEJ1ZmZlcn1gIG9iamVjdCwgdGhhdCBvYmplY3Qgd2lsbCBiZSB1c2VkIGFzIHRoZVxuICogY2hhbm5lbCdzIGJ1ZmZlci4gSWYgaXQncyBtaXNzaW5nIGFsdG9nZXRoZXIsIHRoZSBjaGFubmVsIHdpbGwgYmUgdW5idWZmZXJlZFxuICogdW5sZXNzIGEgYHRyYW5zZHVjZXJgIG9wdGlvbiBpcyBwcm92aWRlZCAoc2VlIGJlbG93KSwgaW4gd2hpY2ggY2FzZSBpdCB3aWxsXG4gKiBiZSBhIGB7QGxpbmsgbW9kdWxlOmNzcC5GaXhlZEJ1ZmZlcnxGaXhlZEJ1ZmZlcn1gIG9mIHNpemUgMS5cbiAqXG4gKiBgY2hhbmAgc3VwcG9ydHMgdHJhbnNkdWNlcnMgYnkgYWxsb3dpbmcgYSB0cmFuc2R1Y2VyIGZ1bmN0aW9uIHRvIGJlXG4gKiBhc3NvY2lhdGVkIHdpdGggaXQuIFRoaXMgaXMgcGFzc2VkIGFzIHRoZSBgdHJhbnNkdWNlcmAgb3B0aW9uIGFuZCBjYW4gb25seSBiZVxuICogdXNlZCBpZiB0aGUgY2hhbm5lbCBpcyBidWZmZXJlZCAob3RoZXJ3aXNlIGFuIGVycm9yIGlzIHRocm93bikuIFRoaXNcbiAqIHRyYW5zZHVjZXIgZnVuY3Rpb24gbXVzdCB0YWtlIGFub3RoZXIgdHJhbnNkdWNlciBhcyBhIHBhcmFtZXRlciAoYWxsb3dpbmdcbiAqIHRyYW5zZm9ybWVycyB0byBiZSBjaGFpbmVkKSwgYW5kIGl0IG11c3QgcmV0dXJuIGFuIG9iamVjdCBjb25mb3JtaW5nIHRvIHRoZVxuICogdHJhbnNkdWNlciBwcm90b2NvbC5cbiAqXG4gKiBFcnJvcnMgaW4gdGhlIHRyYW5zZm9ybWF0aW9uIHByb2Nlc3MgY2FuIGJlIGhhbmRsZWQgYnkgcGFzc2luZyBhbiBlcnJvclxuICogaGFuZGxlci4gVGhpcyBpcyBhIGZ1bmN0aW9uIHRoYXQgZXhwZWN0cyB0byByZWNlaXZlIGFuIGVycm9yIG9iamVjdCBhcyBhXG4gKiBwYXJhbWV0ZXIgYW5kIGNhbiByZXR1cm4gYSB2YWx1ZSB0aGF0IGlzIHRoZW4gcHV0IG9udG8gdGhlIGNoYW5uZWwuIElmIHRoaXNcbiAqIHZhbHVlIGlzIGB7QGxpbmsgbW9kdWxlOmNzcC5DTE9TRUR8Q0xPU0VEfWAsIHRoZW4gbm8gdmFsdWUgd2lsbCBiZSBwdXQgb250b1xuICogdGhlIGNoYW5uZWwgdXBvbiBoYW5kbGVyIGNvbXBsZXRpb24uXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqIEBwYXJhbSB7KG51bWJlcnxtb2R1bGU6Y3NwLkJ1ZmZlcil9IFtidWZmZXJdIFRoZSBidWZmZXIgb2JqZWN0IHRoYXQgc2hvdWxkXG4gKiAgICAgYmFjayB0aGlzIGNoYW5uZWwuIElmIHRoaXMgaXMgYSBwb3NpdGl2ZSBudW1iZXIsIGEgZml4ZWQgYnVmZmVyIG9mIHRoYXRcbiAqICAgICBzaXplIHdpbGwgYmUgY3JlYXRlZCB0byBiYWNrIHRoZSBjaGFubmVsLiBJZiBpdCBpcyBgMGAgb3IgYG51bGxgLCB0aGUgbmV3XG4gKiAgICAgY2hhbm5lbCB3aWxsIGJlIHVuYnVmZmVyZWQuIElmIGl0J3Mgbm90IHByZXNlbnQsIHRoZSBuZXcgY2hhbm5lbCB3aWxsIGJlXG4gKiAgICAgdW5idWZmZXJlZCB1bmxlc3MgdGhlcmUgaXMgYSBgdHJhbnNkdWNlcmAgb3B0aW9uLCBpbiBpbiB3aGljaCBjYXNlIGl0XG4gKiAgICAgd2lsbCBiZSBidWZmZXJlZCB3aXRoIGEgc2l6ZSAxXG4gKiAgICAgYHtAbGluayBtb2R1bGU6Y3NwLkZpeGVkQnVmZmVyfEZpeGVkQnVmZmVyfWAuXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIEEgc2V0IG9mIG9wdGlvbnMgZm9yIGNvbmZpZ3VyaW5nIHRoZSBjaGFubmVsJ3NcbiAqICAgICBxdWV1ZS5cbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5UcmFuc2R1Y2VyfSBbb3B0aW9ucy50cmFuc2R1Y2VyXSBBIHRyYW5zZHVjZXIgdG8gcnVuIGVhY2hcbiAqICAgICB2YWx1ZSB0aHJvdWdoIGJlZm9yZSBwdXR0aW5nIGl0IG9udG8gdGhlIGNoYW5uZWwuIFRoaXMgZnVuY3Rpb24gc2hvdWxkXG4gKiAgICAgZXhwZWN0IG9uZSBwYXJhbWV0ZXIgKGFub3RoZXIgdHJhbnNkdWNlciB0aGF0IGl0J3MgY2hhaW5lZCB0bykgYW5kIHJldHVyblxuICogICAgIGFuIG9iamVjdCB0aGF0IGNvbmZvcm1zIHRvIHRoZSB0cmFuc2R1Y2VyIHByb3RvY29sLiBJZiBhIHRyYW5zZHVjZXIgaXNcbiAqICAgICBwcm92aWRlZCBvbiBhbiB1bmJ1ZmZlcmVkIGNoYW5uZWwsIGFuIGVycm9yIHdpbGwgYmUgdGhyb3duLlxuICogQHBhcmFtIHttb2R1bGU6Y3NwLkV4Y2VwdGlvbkhhbmRsZXJ9IFtvcHRpb25zLmhhbmRsZXJdIEFuIGVycm9yIGhhbmRsZXIgdGhhdFxuICogICAgIGlzIHJ1biB3aGVuZXZlciBhbiBlcnJvciBvY2N1cnMgaW5zaWRlIGEgdHJhbnNkdWNlciBmdW5jdGlvbi4gSWYgdGhhdFxuICogICAgIGhhcHBlbnMsIHRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIHdpdGggb25lIHBhcmFtZXRlciwgd2hpY2ggaXMgdGhlIGVycm9yXG4gKiAgICAgb2JqZWN0LiBUaGUgdmFsdWUgdGhhdCB0aGUgaGFuZGxlciByZXR1cm5zIChpZiBpdCBpcyBub3RcbiAqICAgICBge0BsaW5rIG1vZHVsZTpjc3AuQ0xPU0VEfENMT1NFRH1gKSB3aWxsIGJlIHB1dCBvbnRvIHRoZSBjaGFubmVsIHdoZW4gdGhlXG4gKiAgICAgaGFuZGxlciBmaW5pc2hlcyBydW5uaW5nLlxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLm1heERpcnR5PTY0XSBUaGUgbWF4aW11bSBudW1iZXIgb2YgZGlydHkgb3BlcmF0aW9uc1xuICogICAgIHRoYXQgY2FuIGJlIGluIHRoZSBxdWV1ZSBiZWZvcmUgdGhvc2Ugb3BlcmF0aW9ucyBhcmUgc3ViamVjdCB0byBiZWluZ1xuICogICAgIHB1cmdlZC4gRGlydHkgb3BlcmF0aW9ucyBhcmUgdGhvc2UgdGhhdCBtYXkgbm90IGJlIHZhbGlkIGFueW1vcmUgYmVjYXVzZVxuICogICAgIHRoZXkgd2VyZSBpbiB0aGUgbGlzdCBvZiBvcGVyYXRpb25zIHBhc3NlZCB0b1xuICogICAgIGB7QGxpbmsgbW9kdWxlOmNzcC5zZWxlY3R8c2VsZWN0fWAgb3JcbiAqICAgICBge0BsaW5rIG1vZHVsZTpjc3Auc2VsZWN0QXN5bmN8c2VsZWN0QXN5bmN9YCBidXQgd2VyZSBub3QgY2hvc2VuIHRvIHJ1bi5cbiAqICAgICBUaGlzIHByb3ZpZGVzIGEgY2hhbmNlIGZvciBhIHZlcnkgbWlub3IgcGVyZm9ybWFuY2UgdHdlYWsgYW5kIGlzIGJlc3RcbiAqICAgICBsZWZ0IGFsb25lLlxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLm1heFF1ZXVlZD0xMDI0XSBUaGUgbWF4aW11bSBudW1iZXIgb2Ygb3BlcmF0aW9uc1xuICogICAgIHRoYXQgY2FuIGJlIHF1ZXVlZCB1cCBhdCB0aGUgc2FtZSB0aW1lLiBUaGlzIHByZXZlbnRzIGluZmluaXRlIGxvb3BzIGZyb21cbiAqICAgICBhY2NpZGVudGFsbHkgZWF0aW5nIHVwIGFsbCBvZiB0aGUgYXZhaWxhYmxlIG1lbW9yeS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy50aW1lcl0gSWYgdGhpcyB2YWx1ZSBpcyBwcmVzZW50LCB0aGUgY2hhbm5lbCB3aWxsIGJlXG4gKiAgICAgYSB0aW1lZCBjaGFubmVsIHRoYXQgY2xvc2VzIGF1dG9tYXRpY2FsbHkgYWZ0ZXIgdGhpcyBudW1iZXIgb2ZcbiAqICAgICBtaWxsaXNlY29uZHMuXG4gKiBAcmV0dXJuIHttb2R1bGU6Y3NwLkNoYW5uZWx9IEEgbmV3IGNoYW5uZWwuXG4gKi9cbmZ1bmN0aW9uIGNoYW4oYnVmZmVyLCBvcHRpb25zKSB7XG4gIGNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICAgIG1heERpcnR5OiBNQVhfRElSVFksXG4gICAgbWF4UXVldWVkOiBNQVhfUVVFVUVEXG4gIH07XG4gIGNvbnN0IHsgYnVmLCB0cmFuc2R1Y2VyLCBoYW5kbGVyLCBtYXhEaXJ0eSwgbWF4UXVldWVkLCB0aW1lciB9ID0gcGFyc2VBcmdzKFxuICAgIGJ1ZmZlcixcbiAgICBvcHRpb25zLFxuICAgIGRlZmF1bHRPcHRpb25zXG4gICk7XG5cbiAgaWYgKHRyYW5zZHVjZXIgJiYgIWJ1Zikge1xuICAgIHRocm93IEVycm9yKFwiT25seSBidWZmZXJlZCBjaGFubmVscyBjYW4gdXNlIHRyYW5zZHVjZXJzXCIpO1xuICB9XG5cbiAgY29uc3QgeGYgPSBoYW5kbGVyVHJhbnNkdWNlcihcbiAgICB0cmFuc2R1Y2VyID8gdHJhbnNkdWNlcihidWZmZXJSZWR1Y2VyKSA6IGJ1ZmZlclJlZHVjZXIsXG4gICAgaGFuZGxlclxuICApO1xuXG4gIGNvbnN0IGlzVGltZWQgPSB0eXBlb2YgdGltZXIgPT09IFwibnVtYmVyXCI7XG5cbiAgY29uc3QgY2ggPSBjaGFuSW1wbChidWYsIHhmLCBpc1RpbWVkLCBtYXhEaXJ0eSwgbWF4UXVldWVkKTtcblxuICBhc3luYyBmdW5jdGlvbiogaXRlcmF0b3IoKSB7XG4gICAgZm9yICg7Oykge1xuICAgICAgY29uc3QgdmFsdWUgPSBhd2FpdCByZWN2KGNoKTtcbiAgICAgIGlmICh2YWx1ZSA9PT0gQ0xPU0VEKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgeWllbGQgdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgY2hbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gaXRlcmF0b3I7XG5cbiAgaWYgKGlzVGltZWQpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IGNsb3NlSW1wbChjaCksIHRpbWVyKTtcbiAgfVxuXG4gIHJldHVybiBjaDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuIHVuYnVmZmVyZWQsIHRpbWVkIGNoYW5uZWwuIFRoaXMgY2hhbm5lbCBjbG9zZXMgYXV0b21hdGljYWxseSBhZnRlclxuICogdGhlIHN1cHBsaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgYW5kIGlzIHRoZSBlcXVpdmFsZW50IG9mIGNhbGxpbmcgYGNoYW4oMCxcbiAqIHsgdGltZXI6IGRlbGF5IH0pYC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICogQHBhcmFtIHtudW1iZXJ9IGRlbGF5IFRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGFmdGVyIHRoZSBjaGFubmVsIGlzIGNyZWF0ZWRcbiAqICAgICB0aGF0IGl0IHdpbGwgYmUgY2xvc2VkIGF1dG9tYXRpY2FsbHkuXG4gKiBAcmV0dXJuIHttb2R1bGU6Y3NwLkNoYW5uZWx9IEEgbmV3IHRpbWVkIGNoYW5uZWwuXG4gKi9cbmZ1bmN0aW9uIHRpbWVkQ2hhbihkZWxheSA9IDApIHtcbiAgcmV0dXJuIGNoYW4oeyB0aW1lcjogZGVsYXkgfSk7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGJ1ZmZlcmVkIGNoYW5uZWwgd2l0aCBhIHRyYW5zZHVjZXIgYW5kIG9wdGlvbmFsIGVycm9yIGhhbmRsZXIuIFRoZVxuICogYnVmZmVyIGZvciB0aGlzIGNoYW5uZWwgaXMgYSBge0BsaW5rIG1vZHVsZTpjc3AuRml4ZWRCdWZmZXJ8Rml4ZWRCdWZmZXJ9YCBvZlxuICogc2l6ZSAxLiBUaGlzIGlzIHRoZSBlcXVpdmFsZW50IG9mIGBjaGFuKDEsIHsgdHJhbnNkdWNlciwgaGFuZGxlciB9KWAuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5UcmFuc2R1Y2VyfSB0cmFuc2R1Y2VyIFRoZSB0cmFuc2R1Y2VyIHVzZWQgdG8gdHJhbnNmb3JtXG4gKiAgICAgdmFsdWVzIG9uIHRoZSBuZXcgY2hhbm5lbC5cbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5FeGNlcHRpb25IYW5kbGVyfSBbaGFuZGxlcl0gQW4gZXhjZXB0aW9uIGhhbmRsZXIgY2FsbGVkXG4gKiAgICAgd2l0aCB0aGUgZXJyb3Igb2JqZWN0IGFzIGl0cyBvbmx5IGFyZ3VtZW50IHdoZW4gYW4gZXJyb3IgaGFwcGVucyBpbnNpZGUgYVxuICogICAgIHRyYW5zZHVjZXIuIElmIHRoaXMgaXMgbm90IHByb3ZpZGVkLCBhIGRlZmF1bHQgaGFuZGxlciBpcyB1c2VkIHRoYXRcbiAqICAgICBzaW1wbHkgZG9lcyBub3RoaW5nLCBpbmNsdWRpbmcgc2VuZGluZyBubyBvdXRwdXQgZnJvbSB0aGUgdmFsdWUgdGhhdFxuICogICAgIGVycm9yZWQuXG4gKiBAcmV0dXJuIHttb2R1bGU6Y3NwLkNoYW5uZWx9IEEgbmV3IGNoYW5uZWwgd2l0aCBhIHRyYW5zZHVjZXIuXG4gKi9cbmZ1bmN0aW9uIHRyYW5zQ2hhbih0cmFuc2R1Y2VyLCBoYW5kbGVyKSB7XG4gIHJldHVybiBjaGFuKHsgdHJhbnNkdWNlciwgaGFuZGxlciB9KTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgYSBjaGFubmVsIGlzIGNsb3NlZC5cbiAqXG4gKiBBIGNsb3NlZCBjaGFubmVsIHdpbGwgY2F1c2UgYW55IGBzZW5kYCBvcGVyYXRpb24gdG8gcmV0dXJuIGBmYWxzZWAgYW5kIGFueVxuICogYHJlY3ZgIG9wZXJhdGlvbiB0byByZXR1cm4gYW55IGJ1ZmZlcmVkIGl0ZW1zIHRoYXQgcmVtYWluLCBmb2xsb3dlZCBieVxuICogYHtAbGluayBtb2R1bGU6Y3NwLkNMT1NFRHxDTE9TRUR9YC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICogQHBhcmFtIHttb2R1bGU6Y3NwLkNoYW5uZWx9IGNoYW5uZWwgVGhlIGNoYW5uZWwgdG8gY2hlY2suXG4gKiBAcmV0dXJuIHtib29sZWFufSBFaXRoZXIgYHRydWVgIGlmIHRoZSBjaGFubmVsIGlzIGNsb3NlZCBvciBgZmFsc2VgIGlmIGl0XG4gKiAgICAgaXNuJ3QuXG4gKi9cbmZ1bmN0aW9uIGlzQ2xvc2VkKGNoYW5uZWwpIHtcbiAgcmV0dXJuIGNoYW5uZWwuY2xvc2VkO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhIGNoYW5uZWwgaXMgYnVmZmVyZWQuXG4gKlxuICogQSBjaGFubmVsIGlzIGJ1ZmZlcmVkIGlmIGEgYnVmZmVyIG9yIGEgbnVtYmVyIHdhcyBwYXNzZWQgYXMgdGhlIGZpcnN0XG4gKiBhcmd1bWVudCBvZiBge0BsaW5rIG1vZHVsZTpjc3AuY2hhbnxjaGFufWAgb3IgaWYgYSB0cmFuc2R1Y2VyIGlzIGEgcGFydCBvZlxuICogdGhlIGNoYW5uZWwuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5DaGFubmVsfSBjaGFubmVsIFRoZSBjaGFubmVsIHRvIGNoZWNrLlxuICogQHJldHVybiB7Ym9vbGVhbn0gRWl0aGVyIGB0cnVlYCBpZiB0aGUgY2hhbm5lbCBpcyBidWZmZXJlZCBvciBgZmFsc2VgIGlmIGl0XG4gKiAgICAgaXNuJ3QuXG4gKi9cbmZ1bmN0aW9uIGlzQnVmZmVyZWQoY2hhbm5lbCkge1xuICByZXR1cm4gY2hhbm5lbC5pc0J1ZmZlcmVkO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhIGNoYW5uZWwgaXMgdGltZWQuXG4gKlxuICogQSBjaGFubmVsIGlzIHRpbWVkIGlmIGl0IHdhcyBjcmVhdGVkIGVpdGhlciB3aXRoIHRoZSBgdGltZXJgIG9wdGlvbiBvZlxuICogYHtAbGluayBtb2R1bGU6Y3NwLmNoYW58Y2hhbn1gIG9yIHdpdGggdGhlXG4gKiBge0BsaW5rIG1vZHVsZTpjc3AudGltZWRDaGFufHRpbWVkQ2hhbn1gIGZ1bmN0aW9uLiBJdCB3aWxsIGF1dG9tYXRpY2FsbHlcbiAqIGNsb3NlIGFmdGVyIGEgY2VydGFpbiBwZXJpb2Qgb2YgdGltZS5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICogQHBhcmFtIHttb2R1bGU6Y3NwLkNoYW5uZWx9IGNoYW5uZWwgVGhlIGNoYW5uZWwgdG8gY2hlY2suXG4gKiBAcmV0dXJuIHtib29sZWFufSBFaXRoZXIgYHRydWVgIGlmIHRoZSBjaGFubmVsIGlzIHRpbWVkIG9yIGBmYWxzZWAgaWYgaXRcbiAqICAgICBpc24ndC5cbiAqL1xuZnVuY3Rpb24gaXNUaW1lZChjaGFubmVsKSB7XG4gIHJldHVybiBjaGFubmVsLmlzVGltZWQ7XG59XG5cbi8qKlxuICogU2VuZHMgYSB2YWx1ZSB0byB0aGlzIGNoYW5uZWwgd2l0aG91dCBibG9ja2luZy5cbiAqXG4gKiBUaGlzIG1lYW5zIHRoYXQgYSBjYWxsIHRvIGBzZW5kQXN5bmNgIGRvZXMgbm90IGdvIGludG8gYW4gYGF3YWl0YCBleHByZXNzaW9uLFxuICogYW5kIGl0IGlzIG5vdCBuZWNlc3NhcnkgdG8gdXNlIGl0IGluc2lkZSBhIGFzeW5jIGZ1bmN0aW9uLiBSYXRoZXIgdGhhblxuICogYmxvY2tpbmcgdW50aWwgdGhlIHNlbnQgdmFsdWUgaXMgdGFrZW4gYnkgYW5vdGhlciBhc3luYyBmdW5jdGlvbiwgdGhpcyBvbmVcbiAqIHJldHVybnMgaW1tZWRpYXRlbHkgYW5kIHRoZW4gaW52b2tlcyB0aGUgY2FsbGJhY2sgKGlmIHByb3ZpZGVkKSB3aGVuIHRoZSBzZW50XG4gKiB2YWx1ZSBpcyB0YWtlbi4gSXQgY2FuIGJlIHNlZW4gYXMgYSBub24tYmxvY2tpbmcgdmVyc2lvbiBvZlxuICogYHtAbGluayBtb2R1bGU6Y3NwLnNlbmR8c2VuZH1gLlxuICpcbiAqIFdoaWxlIHRoZSBwcmltYXJ5IHVzZSBvZiB0aGlzIGZ1bmN0aW9uIGlzIHRvIHNlbmQgdmFsdWVzIG9udG8gY2hhbm5lbHMgaW5cbiAqIGNvbnRleHRzIHdoZXJlIGJlaW5nIGluc2lkZSBhbiBhc3luYyBmdW5jdGlvbiBpcyBpbXBvc3NpYmxlIChmb3IgZXhhbXBsZSwgaW5cbiAqIGEgRE9NIGVsZW1lbnQncyBldmVudCBoYW5kbGVyKSwgaXQgY2FuIHN0aWxsIGJlIHVzZWQgaW5zaWRlIGFzeW5jIGZ1bmN0aW9uc1xuICogYXQgdGltZXMgd2hlbiBpdCdzIGltcG9ydGFudCB0byBtYWtlIHN1cmUgdGhhdCB0aGUgZnVuY3Rpb24gZG9lc24ndCBibG9ja1xuICogZnJvbSB0aGUgc2VuZC5cbiAqXG4gKiBUaGUgY2FsbGJhY2sgaXMgYSBmdW5jdGlvbiBvZiBvbmUgcGFyYW1ldGVyLiBUaGUgcGFyYW1ldGVyIHRoYXQncyBzdXBwbGllZCB0b1xuICogdGhlIGNhbGxiYWNrIGlzIHRoZSBzYW1lIGFzIHdoYXQgaXMgc3VwcGxpZWQgdG8gYGF3YWl0IHNlbmRgOiBgdHJ1ZWAgaWYgdGhlXG4gKiB2YWx1ZSB3YXMgdGFrZW4sIG9yIGBmYWxzZWAgaWYgdGhlIGNoYW5uZWwgd2FzIGNsb3NlZC4gSWYgdGhlIGNhbGxiYWNrIGlzbid0XG4gKiBwcmVzZW50LCBub3RoaW5nIHdpbGwgaGFwcGVuIGFmdGVyIHRoZSB2YWx1ZSBpcyB0YWtlbi5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICogQHBhcmFtIHsqfSBbdmFsdWVdIFRoZSB2YWx1ZSBiZWluZyBwdXQgb250byB0aGUgY2hhbm5lbC5cbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5PcENhbGxiYWNrfSBbY2FsbGJhY2tdIEEgZnVuY3Rpb24gdGhhdCBnZXRzIGludm9rZWQgZWl0aGVyXG4gKiAgICAgd2hlbiB0aGUgdmFsdWUgaXMgdGFrZW4gYnkgYW5vdGhlciBwcm9jZXNzIG9yIHdoZW4gdGhlIGNoYW5uZWwgaXMgY2xvc2VkLlxuICogICAgIFRoaXMgZnVuY3Rpb24gY2FuIHRha2Ugb25lIHBhcmFtZXRlciwgd2hpY2ggaXMgYHRydWVgIGluIHRoZSBmb3JtZXIgY2FzZVxuICogICAgIGFuZCBgZmFsc2VgIGluIHRoZSBsYXR0ZXIuXG4gKi9cbmZ1bmN0aW9uIHNlbmRBc3luYyhjaGFubmVsLCB2YWx1ZSwgY2FsbGJhY2sgPSAoKSA9PiB7fSkge1xuICBjb25zdCByZXN1bHQgPSBoYW5kbGVTZW5kKGNoYW5uZWwsIHZhbHVlLCBvcEhhbmRsZXIoY2FsbGJhY2spKTtcbiAgaWYgKHJlc3VsdCAmJiBjYWxsYmFjaykge1xuICAgIGNhbGxiYWNrKHJlc3VsdC52YWx1ZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZWNlaXZlcyBhIHZhbHVlIGZyb20gdGhpcyBjaGFubmVsIHdpdGhvdXQgYmxvY2tpbmcuXG4gKlxuICogVGhpcyBtZWFucyB0aGF0IGEgY2FsbCB0byBgcmVjZWl2ZUFzeW5jYCBkb2VzIG5vdCBnbyBpbnRvIGFuIGBhd2FpdGBcbiAqIGV4cHJlc3Npb24sIGFuZCBpdCBpcyBub3QgbmVjZXNzYXJ5IHRvIHVzZSBpdCBpbnNpZGUgYSBhc3luYyBmdW5jdGlvbi4gUmF0aGVyXG4gKiB0aGFuIGJsb2NraW5nIHVudGlsIGEgdmFsdWUgYmVjb21lcyBhdmFpbGFibGUgb24gdGhlIGNoYW5uZWwgdG8gYmUgcmVjZWl2ZWQsXG4gKiB0aGlzIG9uZSByZXR1cm5zIGltbWVkaWF0ZWx5IGFuZCB0aGVuIGludm9rZXMgdGhlIGNhbGxiYWNrIChpZiBwcm92aWRlZCkgd2hlblxuICogYSB2YWx1ZSBiZWNvbWVzIGF2YWlsYWJsZS4gSXQgY2FuIGJlIHJlZ2FyZGVkIGFzIGEgbm9uLWJsb2NraW5nIHZlcnNpb24gb2ZcbiAqIHtAbGluayBtb2R1bGU6Y3NwLnJlY3Z8cmVjdn1gLlxuICpcbiAqIFdoaWxlIHRoZSBwcmltYXJ5IHVzZSBvZiB0aGlzIGZ1bmN0aW9uIGlzIHRvIHJlY2VpdmUgdmFsdWVzIGZyb20gY2hhbm5lbHMgaW5cbiAqIGNvbnRleHRzIHdoZXJlIGJlaW5nIGluc2lkZSBhbiBhc3luYyBmdW5jdGlvbiBpcyBpbXBvc3NpYmxlLCBpdCBjYW4gc3RpbGwgYmVcbiAqIHVzZWQgaW5zaWRlIGFzeW5jIGZ1bmN0aW9ucyBhdCB0aW1lcyB3aGVuIGl0J3MgaW1wb3J0YW50IHRoYXQgdGhlIHJlY2VpdmVcbiAqIGRvZXNuJ3QgYmxvY2sgdGhlIGZ1bmN0aW9uLlxuICpcbiAqIFRoZSBjYWxsYmFjayBpcyBhIGZ1bmN0aW9uIG9mIG9uZSBwYXJhbWV0ZXIsIGFuZCB0aGUgdmFsdWUgc3VwcGxpZWQgZm9yIHRoYXRcbiAqIHBhcmFtZXRlciBpcyB0aGUgdmFsdWUgcmVjZWl2ZWQgZnJvbSB0aGUgY2hhbm5lbCAoZWl0aGVyIGEgdmFsdWUgdGhhdCB3YXNcbiAqIHNlbnQgb3IgYHtAbGluayBtb2R1bGU6Y3NwLkNMT1NFRHxDTE9TRUR9YCkuIElmIHRoZSBjYWxsYmFjayBpc24ndCBwcmVzZW50LFxuICogbm90aGluZyB3aWxsIGhhcHBlbiBhZnRlciB0aGUgdmFsdWUgaXMgdGFrZW4uXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5PcENhbGxiYWNrfSBbY2FsbGJhY2tdIEEgZnVuY3Rpb24gdGhhdCBnZXRzIGludm9rZWQgd2hlbiBhXG4gKiAgICAgdmFsdWUgaXMgbWFkZSBhdmFpbGFibGUgdG8gYmUgcmVjZWl2ZWQgKHRoaXMgdmFsdWUgbWF5IGJlXG4gKiAgICAgYHtAbGluayBtb2R1bGU6Y3NwLkNMT1NFRHxDTE9TRUR9YCBpZiB0aGUgY2hhbm5lbCBjbG9zZXMgd2l0aCBub1xuICogICAgIGF2YWlsYWJsZSB2YWx1ZSkuIFRoZSBmdW5jdGlvbiBjYW4gdGFrZSBvbmUgcGFyYW1ldGVyLCB3aGljaCBpcyB0aGUgdmFsdWVcbiAqICAgICB0aGF0IGlzIHJlY2VpdmVkIGZyb20gdGhlIGNoYW5uZWwuXG4gKi9cbmZ1bmN0aW9uIHJlY3ZBc3luYyhjaGFubmVsLCBjYWxsYmFjayA9ICgpID0+IHt9KSB7XG4gIGNvbnN0IHJlc3VsdCA9IGhhbmRsZVJlY3YoY2hhbm5lbCwgb3BIYW5kbGVyKGNhbGxiYWNrKSk7XG4gIGlmIChyZXN1bHQgJiYgY2FsbGJhY2spIHtcbiAgICBjYWxsYmFjayhyZXN1bHQudmFsdWUpO1xuICB9XG59XG5cbi8qKlxuICogU2VuZHMgYSB2YWx1ZSB0byBhIGNoYW5uZWwsIGJsb2NraW5nIHRoZSBhc3luYyBmdW5jdGlvbiB1bnRpbCB0aGF0IHZhbHVlIGlzXG4gKiByZWNlaXZlZCBmcm9tIHRoZSBjaGFubmVsIGJ5IGEgZGlmZmVyZW50IGZ1bmN0aW9uIChvciB1bnRpbCB0aGUgY2hhbm5lbFxuICogY2xvc2VzKS5cbiAqXG4gKiBBIHZhbHVlIGlzIGFsd2F5cyBzZW50IHRvIHRoZSBjaGFubmVsLCBidXQgaWYgdGhhdCB2YWx1ZSBpc24ndCBzcGVjaWZpZWQgYnlcbiAqIHRoZSBzZWNvbmQgcGFyYW1ldGVyLCBpdCBpcyBgdW5kZWZpbmVkYC4gQW55IHZhbHVlIG1heSBiZSBzZW50IHRvIGEgY2hhbm5lbCxcbiAqIHdpdGggdGhlIHNvbGUgZXhjZXB0aW9uIG9mIHRoZSBzcGVjaWFsIHZhbHVlXG4gKiBge0BsaW5rIG1vZHVsZTpjc3AuQ0xPU0VEfENMT1NFRH1gLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gKm11c3QqIGJlIGNhbGxlZCBmcm9tIHdpdGhpbiBhbiBhc3luYyBmdW5jdGlvbiBhbmQgYXMgcGFydCBvZlxuICogYW4gYGF3YWl0YCBleHByZXNzaW9uLlxuICpcbiAqIFdoZW4gYHNlbmRgIGlzIGNvbXBsZXRlZCBhbmQgaXRzIGZ1bmN0aW9uIHVuYmxvY2tzLCBpdHMgYGF3YWl0YCBleHByZXNzaW9uXG4gKiBldmFsdWF0ZXMgdG8gYSBzdGF0dXMgYm9vbGVhbiB0aGF0IGluZGljYXRlcyB3aGF0IGNhdXNlZCB0aGUgZnVuY3Rpb24gdG9cbiAqIHVuYmxvY2suIFRoYXQgdmFsdWUgaXMgYHRydWVgIGlmIHRoZSBzZW50IHZhbHVlIHdhcyBzdWNjZXNzZnVsbHkgdGFrZW4gYnlcbiAqIGFub3RoZXIgcHJvY2Vzcywgb3IgYGZhbHNlYCBpZiB0aGUgdW5ibG9ja2luZyBoYXBwZW5lZCBiZWNhdXNlIHRoZSB0YXJnZXRcbiAqIGNoYW5uZWwgY2xvc2VkLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcGFyYW0geyp9IFt2YWx1ZV0gVGhlIHZhbHVlIGJlaW5nIHB1dCBvbnRvIHRoZSBjaGFubmVsLlxuICogQHJldHVybiB7UHJvbWlzZTxib29sZWFuPn0gQSBwcm9taXNlIHRoYXQgd2lsbCByZXNvbHZlIHRvIGB0cnVlYCBvciBgZmFsc2VgXG4gKiAgICAgZGVwZW5kaW5nIG9uIHdoZXRoZXIgdGhlIHB1dCB2YWx1ZSBpcyBhY3R1YWxseSB0YWtlbi5cbiAqL1xuZnVuY3Rpb24gc2VuZChjaGFubmVsLCB2YWx1ZSkge1xuICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgc2VuZEFzeW5jKGNoYW5uZWwsIHZhbHVlLCByZXNvbHZlKTtcbiAgfSk7XG59XG5cbi8qKlxuICogUmVjZWl2ZXMgYSB2YWx1ZSBmcm9tIHRoaXMgY2hhbm5lbCwgYmxvY2tpbmcgdGhlIGFzeW5jIGZ1bmN0aW9uIHVudGlsIGEgdmFsdWVcbiAqIGJlY29tZXMgYXZhaWxhYmxlIHRvIGJlIHJlY2VpdmVkIChvciB1bnRpbCB0aGUgY2hhbm5lbCBjbG9zZXMgd2l0aCBubyBtb3JlXG4gKiB2YWx1ZXMgb24gaXQgdG8gYmUgcmVjZWl2ZWQpLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gKm11c3QqIGJlIGNhbGxlZCBmcm9tIHdpdGhpbiBhbiBhc3luYyBmdW5jdGlvbiBhbmQgYXMgcGFydCBvZlxuICogYW4gYGF3YWl0YCBleHByZXNzaW9uLlxuICpcbiAqIFdoZW4gYHJlY2VpdmVgIGlzIGNvbXBsZXRlZCBhbmQgaXRzIGZ1bmN0aW9uIHVuYmxvY2tzLCBpdHMgYGF3YWl0YCBleHByZXNzaW9uXG4gKiBldmFsdWF0ZXMgdG8gdGhlIGFjdHVhbCB2YWx1ZSB0aGF0IHdhcyByZWNlaXZlZC4gSWYgdGhlIHRhcmdldCBjaGFubmVsXG4gKiBjbG9zZWQsIHRoZW4gYWxsIG9mIHRoZSB2YWx1ZXMgYWxyZWFkeSBwbGFjZWQgb250byBpdCBhcmUgcmVzb2x2ZWQgYnlcbiAqIGByZWNlaXZlYCBhcyBub3JtYWwsIGFuZCBvbmNlIG5vIG1vcmUgdmFsdWVzIGFyZSBhdmFpbGFibGUsIHRoZSBzcGVjaWFsIHZhbHVlXG4gKiBge0BsaW5rIG1vZHVsZTpjc3AuQ0xPU0VEfENMT1NFRH1gIGlzIHJldHVybmVkLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcmV0dXJuIHtQcm9taXNlfSBBIHByb21pc2UgdGhhdCB3aWxsIHJlc29sdmUgdG8gdGhlIHZhbHVlIHJlY2VpdmVkIGZyb20gdGhlXG4gKiAgICAgY2hhbm5lbCBvbmNlIHRoYXQgcmVjZWl2ZSBpcyBjb21wbGV0ZWQuIElmIHRoZSBjaGFubmVsIGNsb3NlcyB3aXRob3V0IGFcbiAqICAgICB2YWx1ZSBiZWluZyBtYWRlIGF2YWlsYWJsZSwgdGhpcyB3aWxsIHJlc29sdmUgdG9cbiAqICAgICBge0BsaW5rIG1vZHVsZTpjc3AuQ0xPU0VEfENMT1NFRH1gLlxuICovXG5mdW5jdGlvbiByZWN2KGNoYW5uZWwpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgIHJlY3ZBc3luYyhjaGFubmVsLCByZXNvbHZlKTtcbiAgfSk7XG59XG5cbi8qKlxuICogUmVjZWl2ZXMgYSB2YWx1ZSBmcm9tIGEgY2hhbm5lbCwgYmxvY2tpbmcgdGhlIGFzeW5jIGZ1bmN0aW9uIHVudGlsIGEgdmFsdWVcbiAqIGJlY29tZXMgYXZhaWxhYmxlIHRvIGJlIHJlY2VpdmVkIChvciB1bnRpbCB0aGUgY2hhbm5lbCBjbG9zZXMgd2l0aCBubyBtb3JlXG4gKiB2YWx1ZXMgb24gaXQgdG8gYmUgcmVjZWl2ZWQpLiBJZiB0aGUgcmVjZWl2ZWQgdmFsdWUgaXMgYW4gZXJyb3Igb2JqZWN0LCB0aGF0XG4gKiBlcnJvciBpcyB0aHJvd24gYXQgdGhhdCBwb2ludC5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uICptdXN0KiBiZSBjYWxsZWQgZnJvbSB3aXRoaW4gYW4gYXN5bmMgZnVuY3Rpb24gYW5kIGFzIHBhcnQgb2ZcbiAqIGFuIGBhd2FpdGAgZXhwcmVzc2lvbi5cbiAqXG4gKiBJdCBmdW5jdGlvbnMgaW4gZXZlcnkgd2F5IGxpa2UgYHtAbGluayBtb2R1bGU6Y3NwLnJlY3Z8cmVjdn1gICpleGNlcHQqIGluIHRoZVxuICogY2FzZSB0aGF0IHRoZSB2YWx1ZSBvbiB0aGUgY2hhbm5lbCBpcyBhbiBvYmplY3QgdGhhdCBoYXMgYEVycm9yLnByb3RvdHlwZWAgaW5cbiAqIGl0cyBwcm90b3R5cGUgY2hhaW4gKGFueSBidWlsdC1pbiBlcnJvciwgYW55IHByb3Blcmx5LWNvbnN0cnVjdGVkIGN1c3RvbVxuICogZXJyb3IpLiBJZiB0aGF0IGhhcHBlbnMsIHRoZSBlcnJvciBpcyB0aHJvd24sIHdoaWNoIHdpbGwgY2F1c2UgdGhlIHJldHVybmVkXG4gKiBwcm9taXNlIHRvIGJlIHJlamVjdGVkIHdpdGggdGhlIGVycm9yLiBJdCBjYW4gdGhlbiBiZSBoYW5kbGVkIHVwIHRoZSBwcm9taXNlXG4gKiBjaGFpbiBsaWtlIGFueSBvdGhlciByZWplY3RlZCBwcm9taXNlLlxuICpcbiAqIGB0YWtlT3JUaHJvd2AgaXMgcm91Z2hseSBlcXVpdmFsZW50IHRvOlxuICpcbiAqIGBgYFxuICogY29uc3QgdmFsdWUgPSBhd2FpdCByZWN2KGNoKTtcbiAqIGlmIChFcnJvci5wcm90b3R5cGUuaXNQcm90b3R5cGVPZih2YWx1ZSkpIHtcbiAqICAgdGhyb3cgdmFsdWU7XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICogQHJldHVybiB7UHJvbWlzZX0gQSBwcm9taXNlIHRoYXQgd2lsbCByZXNvbHZlIHRvIHRoZSB2YWx1ZSB0YWtlbiBmcm9tIHRoZVxuICogICAgIGNoYW5uZWwgb25jZSB0aGF0IHRha2UgaXMgY29tcGxldGVkLiBJZiB0aGUgY2hhbm5lbCBjbG9zZXMgd2l0aG91dCBhXG4gKiAgICAgdmFsdWUgYmVpbmcgbWFkZSBhdmFpbGFibGUsIHRoaXMgd2lsbCByZXNvbHZlIHRvXG4gKiAgICAgYHtAbGluayBtb2R1bGU6Y3NwLkNMT1NFRHxDTE9TRUR9YC4gSWYgdGhlIHRha2VuIHZhbHVlIGlzIGFuIGVycm9yLCB0aGVcbiAqICAgICBwcm9taXNlIHdpbGwgaW5zdGVhZCBiZSByZWplY3RlZCB3aXRoIHRoZSBlcnJvciBvYmplY3QgYXMgdGhlIHJlYXNvbi5cbiAqL1xuZnVuY3Rpb24gcmVjdk9yVGhyb3coY2hhbm5lbCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHJlY3ZBc3luYyhjaGFubmVsLCByZXN1bHQgPT4ge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaXNQcm90b3R5cGVPZi5jYWxsKEVycm9yLnByb3RvdHlwZSwgcmVzdWx0KSkge1xuICAgICAgICByZWplY3QocmVzdWx0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbi8qKlxuICogQ2xvc2VzIHRoZSBjaGFubmVsLCBpZiBpdCBpc24ndCBhbHJlYWR5IGNsb3NlZC4gVGhpcyBpbW1lZGlhdGVseSByZXR1cm5zIGFueVxuICogYnVmZmVyZWQgdmFsdWVzIHRvIHBlbmRpbmcgcmVjZWl2ZXMuIElmIHRoZXJlIGFyZSBubyBidWZmZXJlZCB2YWx1ZXMgKG9yIGlmXG4gKiB0aGV5J3ZlIGFscmVhZHkgYmVlbiB0YWtlbiBieSBvdGhlciByZWNlaXZlcyksIHRoZW4gYWxsIG9mIHRoZSByZXN0IG9mIHRoZVxuICogcmVjZWl2ZXMgYXJlIGNvbXBsZXRlZCB3aXRoIHRoZSB2YWx1ZSBvZiBge0BsaW5rIG1vZHVsZTpjc3AuQ0xPU0VEfENMT1NFRH1gLlxuICogQW55IHBlbmRpbmcgc2VuZHMgYXJlIGNvbXBsZXRlZCB3aXRoIHRoZSB2YWx1ZSBvZiBgZmFsc2VgLlxuICpcbiAqIE5vdGUgdGhhdCB0aGUgYnVmZmVyIGlzIG5vdCBlbXB0aWVkIGlmIHRoZXJlIGFyZSBzdGlsbCB2YWx1ZXMgcmVtYWluaW5nIGFmdGVyXG4gKiBhbGwgb2YgdGhlIHBlbmRpbmcgcmVjZWl2ZXMgaGF2ZSBiZWVuIGhhbmRsZWQuIFRoZSBjaGFubmVsIHdpbGwgc3RpbGwgcHJvdmlkZVxuICogdGhvc2UgdmFsdWVzIHRvIGFueSBmdXR1cmUgcmVjZWl2ZXMsIHRob3VnaCBubyBuZXcgdmFsdWVzIG1heSBiZSBhZGRlZCB0byB0aGVcbiAqIGNoYW5uZWwuIE9uY2UgdGhlIGJ1ZmZlciBpcyBkZXBsZXRlZCwgYW55IGZ1dHVyZSByZWNlaXZlcyB3aWxsIHJldHVyblxuICogYHtAbGluayBtb2R1bGU6Y3NwLkNMT1NFRHxDTE9TRUR9YC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICogQHBhcmFtIHttb2R1bGU6Y3NwLkNoYW5uZWx9IGNoYW5uZWwgVGhlIGNoYW5uZWwgdG8gYmUgY2xvc2VkLlxuICovXG5mdW5jdGlvbiBjbG9zZShjaGFubmVsKSB7XG4gIGNsb3NlSW1wbChjaGFubmVsKTtcbn1cblxuZXhwb3J0IHtcbiAgQ0xPU0VELFxuICBERUZBVUxULFxuICBjaGFuLFxuICB0aW1lZENoYW4sXG4gIHRyYW5zQ2hhbixcbiAgaXNDbG9zZWQsXG4gIGlzQnVmZmVyZWQsXG4gIGlzVGltZWQsXG4gIHNlbmRBc3luYyxcbiAgcmVjdkFzeW5jLFxuICBzZWxlY3RBc3luYyxcbiAgc2VuZCxcbiAgcmVjdixcbiAgcmVjdk9yVGhyb3csXG4gIHNlbGVjdCxcbiAgY2xvc2UsXG4gIHZhbHVlLFxuICBjaGFubmVsXG59O1xuXG4vKipcbiAqIFVzZWQgYnkgY2hhbm5lbHMgdG8gdHJhY2sgZXhlY3V0aW9uIG9mIG9wZXJhdGlvbnMgKGBzZW5kYCwgYHJlY3ZgLCBhbmRcbiAqIGBzZWxlY3RgKS4gVGhleSBwcm92aWRlIHR3byBwaWVjZXMgb2YgaW5mb3JtYXRpb246IHRoZSBmdW5jdGlvbiB0byBjYWxsIHdoZW5cbiAqIGEgYHNlbmRgIG9yIGByZWN2YCB1bmJsb2NrcyAoYmVjYXVzZSBhIHZhbHVlIGdpdmVuIHRvIHNlbmQgaGFzIGJlZW4gcmVjZWl2ZWQsXG4gKiBvciBhIGByZWN2YCBoYXMgYWNjZXB0ZWQgYSB2YWx1ZSB0aGF0IGhhcyBiZWVuIHNlbnQpIGFuZCB3aGV0aGVyIG9yIG5vdCB0aGVcbiAqIGhhbmRsZXIgaXMgc3RpbGwgYWN0aXZlLlxuICpcbiAqIFRoZSBmdW5jdGlvbiBpcyBhIGNhbGxiYWNrIHRoYXQgYWN0dWFsbHkgZGVmaW5lcyB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuXG4gKiBge0BsaW5rIG1vZHVsZTpjc3Auc2VuZHxzZW5kfWAgLyBge0BsaW5rIG1vZHVsZTpjc3AucmVjdnxyZWN2fWAgL1xuICogYHtAbGluayBtb2R1bGU6Y3NwLnNlbGVjdHxzZWxlY3R9YCBhbmRcbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC5zZW5kQXN5bmN8c2VuZEFzeW5jfWAgL1xuICogYHtAbGluayBtb2R1bGU6Y3NwLnJlY3ZBc3luY3xyZWN2QXN5bmN9YCAvXG4gKiBge0BsaW5rIG1vZHVsZTpjc3Auc2VsZWN0QXN5bmN8c2VsZWN0QXN5bmN9YDogd2hpbGUgdGhlIHVuYmxvY2tlZCBjYWxscyB1c2VcbiAqIHRoZSBjYWxsYmFjayBwYXNzZWQgdG8gdGhlIGZ1bmN0aW9uLCBgc2VuZGAsIGByZWN2YCwgYW5kIGBzZWxlY3RgIHNpbXBseVxuICogY29udGludWUgdGhlIHByb2Nlc3Mgd2hlcmUgaXQgbGVmdCBvZmYuIChUaGlzIGlzIHdoeSBgc2VuZGAsIGByZWN2YCwgYW5kXG4gKiBgc2VsZWN0YCBvbmx5IHdvcmsgaW5zaWRlIGBhc3luY2AgZnVuY3Rpb25zIHdpdGggYGF3YWl0YCBpZiB0aGUgcmV0dXJuIHZhbHVlXG4gKiBpcyBuZWVkZWQsIGJlY2F1c2Ugb3RoZXJ3aXNlIHRoZXJlJ3Mgbm8gcHJvY2VzcyB0byBjb250aW51ZS4pXG4gKlxuICogVGhpcyBmdW5jdGlvbiBpcyBwcm92aWRlZCBhcyB0aGUgcmV0dXJuIHZhbHVlIG9mIHRoZSBgY29tbWl0YCBtZXRob2QuIENhbGxpbmdcbiAqIGBjb21taXRgIGhhcyBubyBleHRyYSBlZmZlY3Qgd2l0aCBgc2VuZGAgYW5kIGByZWN2YCBvcGVyYXRpb25zLCBidXQgZm9yXG4gKiBgc2VsZWN0YCwgaXQgYWxzbyBtYXJrcyB0aGUgaGFuZGxlciBhcyBubyBsb25nZXIgYmVpbmcgYWN0aXZlLiBUaGlzIG1lYW5zXG4gKiB0aGF0IG9ubHkgb25lIG9mIHRoZSBvcGVyYXRpb25zIHBhc3NlZCB0byBzZWxlY3QgY2FuIGJlIGNvbXBsZXRlZCwgYmVjYXVzZVxuICogYWZ0ZXIgdGhlIGZpcnN0IG9uZSwgdGhlIGhhbmRsZXIgaXMgbm8gbG9uZ2VyIGFjdGl2ZSBhbmQgd2lsbCBub3QgYmUgYWxsb3dlZFxuICogdG8gcHJvY2VzcyBhIHNlY29uZCBvcGVyYXRpb24uXG4gKlxuICogSWYgYSBgc2VuZGAgb3IgYHJlY3ZgIChvciBlcXVpdmFsZW50IGBzZWxlY3RgIG9wZXJhdGlvbikgY2Fubm90IGJlXG4gKiBpbW1lZGlhdGVseSBjb21wbGV0ZWQgYmVjYXVzZSB0aGVyZSBpc24ndCBhIGNvcnJlc3BvbmRpbmcgcGVuZGluZyBgcmVjdmAgb3JcbiAqIGBzZW5kYCwgdGhlIGhhbmRsZXIgaXMgcXVldWVkIHRvIGJlIHJ1biB3aGVuIGEgbmV3IGByZWN2YCBvciBgc2VuZGAgYmVjb21lc1xuICogYXZhaWxhYmxlLlxuICpcbiAqIEB0eXBlZGVmIEhhbmRsZXJcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwL2NoYW5uZWxcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gYWN0aXZlIFdoZXRoZXIgb3Igbm90IHRoZSBvcGVyYXRpb24gaXMgc3RpbGwgYWN0aXZlLiBBblxuICogICAgIGluYWN0aXZlIG9wZXJhdGlvbiBpcyBub3Qgc2VydmljZWQgYW5kIHdpbGwgYmUgY2xlYXJlZCBmcm9tIHRoZSBxdWV1ZSBvblxuICogICAgIHRoZSBuZXh0IGRpcnR5IG9wZXJhdGlvbiBwdXJnZS5cbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IGNvbW1pdCBNYXJrcyB0aGUgaGFuZGxlciBhcyBpbmFjdGl2ZSAoc28gaXQgZG9lc24ndCBydW5cbiAqICAgICB0d2ljZSkgYW5kIHJldHVybnMgdGhlIGNhbGxiYWNrIHRvIGJlIHJ1biB3aGVuIHRoZSBvcGVyYXRpb24gY29tcGxldGVzLlxuICogQHByaXZhdGVcbiAqL1xuXG4vKipcbiAqIEEgY2FsbGJhY2sgZnVuY3Rpb24gcnVuIHdoZW4gYSBgc2VuZGAgb3IgYHJlY3ZgIG9wZXJhdGlvbiBjb21wbGV0ZXMuXG4gKlxuICogQGNhbGxiYWNrIEhhbmRsZXJDYWxsYmFja1xuICogQG1lbWJlcm9mIG1vZHVsZTpjc3AvY2hhbm5lbFxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgcHJvdmlkZWQgYnkgdGhlIGNoYW5uZWwuIEluIGEgYHJlY3ZgLCB0aGlzIGlzIHRoZVxuICogICAgIHZhbHVlIHJlY2VpdmVkIGZyb20gdGhlIGNoYW5uZWwuIEluIGEgYHNlbmRgLCB0aGlzIGlzIGB0cnVlYCBmb3IgYVxuICogICAgIHN1Y2Nlc3NmdWwgc2VuZCBhbmQgYGZhbHNlYCBpZiB0aGUgY2hhbm5lbCBpcyBjbG9zZWQgYmVmb3JlIHRoZSBzZW5kIGNhblxuICogICAgIGNvbXBsZXRlLlxuICogQHByaXZhdGVcbiAqL1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG5cbmltcG9ydCB7IGJveCwgaGFuZGxlU2VuZCwgaGFuZGxlUmVjdiwgaXNCb3ggfSBmcm9tIFwiLi9oYW5kbGVyXCI7XG5cbi8qKlxuICogVGhlIG5hbWUgb2YgdGhlIGNoYW5uZWwgcmV0dXJuZWQgZnJvbSBgYXdhaXRcbiAqIHtAbGluayBtb2R1bGU6Y3NwLnNlbGVjdHxzZWxlY3R9YCBvciBzZW50IHRvIHRoZSBjYWxsYmFjayBpblxuICogYHtAbGluayBtb2R1bGU6Y3NwLnNlbGVjdEFzeW5jfHNlbGVjdEFzeW5jfWAgd2hlbiB0aGUgZGVmYXVsdCBpcyByZXR1cm5lZCBhc1xuICogaXRzIHZhbHVlLlxuICpcbiAqIFRoaXMgb25seSBoYXBwZW5zIHdoZW4gYW4gYHtAbGluayBtb2R1bGU6Y3NwLnNlbGVjdHxzZWxlY3R9IC9cbiAqIHtAbGluayBtb2R1bGU6Y3NwLnNlbGVjdEFzeW5jfHNlbGVjdEFzeW5jfWAgY2FsbCBpcyBwZXJmb3JtZWQsIGFsbCBvcGVyYXRpb25zXG4gKiBhcmUgaW5pdGlhbGx5IGJsb2NraW5nLCBhbmQgYSBgZGVmYXVsdGAgb3B0aW9uIGlzIHNlbnQuIFRoZSBpbW1lZGlhdGVcbiAqIHJlc3BvbnNlIGluIHRoYXQgc2l0dWF0aW9uIGlzIGB7IHZhbHVlOiBvcHRpb25zLmRlZmF1bHQsIGNoYW5uZWw6IERFRkFVTFQgfWAuXG4gKlxuICogQHR5cGUge1N5bWJvbH1cbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKi9cbmNvbnN0IERFRkFVTFQgPSBTeW1ib2woXCJERUZBVUxUXCIpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgaGFuZGxlciB1c2VkIGZvciBgc2VsZWN0YCBvcGVyYXRpb25zLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwL2NoYW5uZWxcbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC9jaGFubmVsLkJveH0gYWN0aXZlIEEgYm94ZWQgdmFsdWUgaW5kaWNhdGluZyB3aGV0aGVyIHRoZVxuICogICAgIGhhbmRsZXIgaXMgdmFsaWQuIFRoaXMgaXMgYSBib3hlZCB2YWx1ZSBiZWNhdXNlIHRoZSBzZWxlY3QtaGFuZGxpbmcgY29kZVxuICogICAgIG5lZWRzIHRvIG1hbmlwdWxhdGUgaXQgZGlyZWN0bHkuXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AvY2hhbm5lbC5IYW5kbGVyQ2FsbGJhY2t9IGZuIFRoZSBjYWxsYmFjayB0byBiZSBydW4gd2hlblxuICogICAgIChhbmQgaWYpIHRoZSBvcGVyYXRpb24gY29tcGxldGVzLlxuICogQHJldHVybiB7bW9kdWxlOmNzcC9jaGFubmVsLkhhbmRsZXJ9IFRoZSBuZXcgaGFuZGxlci5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHNlbGVjdEhhbmRsZXIoYWN0aXZlLCBmbikge1xuICByZXR1cm4gT2JqZWN0LmNyZWF0ZShudWxsLCB7XG4gICAgYWN0aXZlOiB7XG4gICAgICBnZXQoKSB7XG4gICAgICAgIHJldHVybiBhY3RpdmUudmFsdWU7XG4gICAgICB9XG4gICAgfSxcblxuICAgIGNvbW1pdDoge1xuICAgICAgdmFsdWU6ICgpID0+IHtcbiAgICAgICAgYWN0aXZlLnZhbHVlID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBmbjtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSByYW5kb21seSBzaHVmZmxlZCBhcnJheSBjb250YWluaW5nIG9uZSBvZiBlYWNoIGludGVnZXIgdmFsdWUgZnJvbVxuICogYDBgIHRvIGFuIHVwcGVyIGxpbWl0LiBJdCBpcyB1c2VkIHRvIHJhbmRvbWx5IHNlbGVjdCBhIGNoYW5uZWwgdG8gYmUgYWN0aXZlXG4gKiB3aGVuIG11bHRpcGxlcyB1bmJsb2NrIGluIGEgYHNlbGVjdGAgb3BlcmF0aW9uLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwL2NoYW5uZWxcbiAqIEBwYXJhbSB7bnVtYmVyfSB1cHBlciBUaGUgdXBwZXIgbGltaXQgb2YgdGhlIGFycmF5IHZhbHVlcywgZXhjbHVzaXZlLlxuICogQHJldHVybiB7bnVtYmVyW119IEFuIGFycmF5IG9mIGludGVnZXJzIGZyb20gYDBgIHRvIGB1cHBlciAtIDFgLCBzaHVmZmxlZFxuICogICAgIGludG8gYSByYW5kb20gb3JkZXIuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiByYW5kb21BcnJheSh1cHBlcikge1xuICBjb25zdCBhcnJheSA9IFtdO1xuICBmb3IgKGxldCBrID0gMDsgayA8IHVwcGVyOyBrKyspIHtcbiAgICBhcnJheS5wdXNoKGspO1xuICB9XG4gIGZvciAobGV0IGogPSB1cHBlciAtIDE7IGogPiAwOyBqLS0pIHtcbiAgICBjb25zdCBpID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGogKyAxKSk7XG4gICAgY29uc3QgdGVtcCA9IGFycmF5W2pdO1xuICAgIGFycmF5W2pdID0gYXJyYXlbaV07XG4gICAgYXJyYXlbaV0gPSB0ZW1wO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxuLyoqXG4gKiBBIHJlc3VsdCB0aGF0IGNvbWVzIGZyb20gYHNlbGVjdGAgb3BlcmF0aW9ucy5cbiAqXG4gKiBAdHlwZWRlZiBTZWxlY3RSZXN1bHRcbiAqIEBwcm9wZXJ0eSB7Kn0gdmFsdWUgSWYgdGhlIGBzZWxlY3RgIG9wZXJhdGlvbiByZXN1bHRlZCBpbiBhIHJlY2VpdmUsIHRoaXMgaXNcbiAqICAgICB0aGUgdmFsdWUgcmVjZWl2ZWQgZnJvbSB0aGUgY2hhbm5lbC4gSWYgaXQgcmVzdWx0ZWQgaW4gYSBzZW5kLCB0aGlzIGlzXG4gKiAgICAgYHRydWVgIGZvciBhIHN1Y2Nlc3NmdWwgc2VuZCBhbmQgYGZhbHNlYCBpZiB0aGUgY2hhbm5lbCBjbG9zZWQgZmlyc3QuXG4gKiBAcHJvcGVydHkge21vZHVsZTpjc3AuQ2hhbm5lbH0gY2hhbm5lbCBUaGUgY2hhbm5lbCB1cG9uIHdoaWNoIHRoZSBzZWxlY3RlZFxuICogICAgIG9wZXJhdGlvbiBoYXBwZW5lZC5cbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIGEgc2VsZWN0IHJlc3VsdCBmcm9tIGl0cyBjb21wb25lbnQgcHJvcGVydGllcy5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcC9jaGFubmVsXG4gKiBAcGFyYW0geyp9IHZhbHVlIElmIHRoZSBgc2VsZWN0YCBvcGVyYXRpb24gcmVzdWx0ZWQgaW4gYSByZWNlaXZlLCB0aGlzIGlzIHRoZVxuICogICAgIHZhbHVlIHJlY2VpdmVkIGZyb20gdGhlIGNoYW5uZWwuIElmIGl0IHJlc3VsdGVkIGluIGEgc2VuZCwgdGhpcyBpcyBgdHJ1ZWBcbiAqICAgICBmb3IgYSBzdWNjZXNzZnVsIHNlbmQgYW5kIGBmYWxzZWAgaWYgdGhlIGNoYW5uZWwgY2xvc2VkIGZpcnN0LlxuICogQHBhcmFtIHttb2R1bGU6Y3NwLkNoYW5uZWx9IGNoYW5uZWwgVGhlIGNoYW5uZWwgdXBvbiB3aGljaCB0aGUgc2VsZWN0ZWRcbiAqICAgICBvcGVyYXRpb24gaGFwcGVuZWQuXG4gKiBAcmV0dXJuIHttb2R1bGU6Y3NwLlNlbGVjdFJlc3VsdH0gVGhlIHByb3BlcnRpZXMgd3JhcHBlZCBpbnRvIGFuIG9iamVjdCBmb3JcbiAqICAgICBvdXRwdXQuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBzZWxlY3RSZXN1bHQodmFsdWUsIGNoYW5uZWwpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmNyZWF0ZShudWxsKSwgeyB2YWx1ZSwgY2hhbm5lbCB9KTtcbn1cblxuLyoqXG4gKiBDb21wbGV0ZXMgdGhlIGZpcnN0IG9wZXJhdGlvbiBhbW9uZyB0aGUgcHJvdmlkZWQgb3BlcmF0aW9ucyB0aGF0IGNvbWVzXG4gKiBhdmFpbGFibGUsIHdpdGhvdXQgYmxvY2tpbmcuXG4gKlxuICogVGhpcyBtZWFucyB0aGF0IGEgY2FsbCB0byBgc2VsZWN0QXN5bmNgIGRvZXMgbm90IGdvIGludG8gYW4gYGF3YWl0YFxuICogZXhwcmVzc2lvbiwgYW5kIGl0IGlzIG5vdCBuZWNlc3NhcnkgdG8gdXNlIGl0IGluc2lkZSBhIHByb2Nlc3MuIFJhdGhlciB0aGFuXG4gKiBibG9ja2luZyB1bnRpbCBhbiBvcGVyYXRpb24gY29tcGxldGVzLCB0aGlzIG9uZSByZXR1cm5zIGltbWVkaWF0ZWx5IGFuZCB0aGVuXG4gKiBpbnZva2VzIHRoZSBjYWxsYmFjayAoaWYgcHJvdmlkZWQpIGFzIHNvb24gYXMgb25lIG9mIHRoZSBzdXBwbGllZCBvcGVyYXRpb25zXG4gKiBjb21wbGV0ZXMuIEl0IGNhbiBiZSByZWdhcmRlZCBhcyBhIG5vbi1ibG9ja2luZyB2ZXJzaW9uIG9mXG4gKiBge0BsaW5rIG1vZHVsZTpjc3Auc2VsZWN0fHNlbGVjdH1gLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gdXNlcyBhbiBvcGVyYXRpb25zIGxpc3QgdGhhdCdzIGlkZW50aWNhbCB0byB0aGUgb25lIHVzZWQgYnlcbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC5zZWxlY3R8c2VsZWN0fWAuIEl0J3MgYW4gYXJyYXkgb2YgdmFsdWVzOyBpZiBhIHZhbHVlIGlzIGFcbiAqIGNoYW5uZWwsIHRoZW4gdGhhdCBvcGVyYXRpb24gaXMgYSB0YWtlIG9uIHRoYXQgY2hhbm5lbCwgd2hpbGUgaWYgaXQncyBhXG4gKiB0d28tZWxlbWVudCBhcnJheSBvZiBjaGFubmVsIGFuZCB2YWx1ZSwgdGhlbiB0aGF0IG9wZXJhdGlvbiBpcyBhIHB1dCBvZiB0aGF0XG4gKiB2YWx1ZSBvbnRvIHRoYXQgY2hhbm5lbC4gQWxsIG9wdGlvbnMgdGhhdCBhcmUgYXZhaWxhYmxlIHRvXG4gKiBge0BsaW5rIG1vZHVsZTpjc3Auc2VsZWN0fHNlbGVjdH1gIGFyZSBhbHNvIGF2YWlsYWJsZSBoZXJlLlxuICpcbiAqIFRoZSBjYWxsYmFjayBpcyBhIGZ1bmN0aW9uIG9mIG9uZSBwYXJhbWV0ZXIsIHdoaWNoIGluIHRoaXMgY2FzZSBpcyBhbiBvYmplY3RcbiAqIHdpdGggYHZhbHVlYCBhbmQgYGNoYW5uZWxgIHByb3BlcnRpZXMuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqIEBwYXJhbSB7T2JqZWN0W119IG9wZXJhdGlvbnMgQSBjb2xsZWN0aW9uIG9mIGVsZW1lbnRzIHRoYXQgY29ycmVzcG9uZCB0byByZWN2XG4gKiAgICAgYW5kIHNlbmQgb3BlcmF0aW9ucy4gQSByZWN2IG9wZXJhdGlvbiBpcyBzaWduaWZpZWQgYnkgYW4gZWxlbWVudCB0aGF0IGlzXG4gKiAgICAgYSBjaGFubmVsICh3aGljaCBpcyB0aGUgY2hhbm5lbCB0byBiZSByZWNlaXZlZCBmcm9tKS4gQSBzZW5kIG9wZXJhdGlvbiBpc1xuICogICAgIHNwZWNpZmllZCBieSBhbiBlbGVtZW50IHRoYXQgaXMgaXRzZWxmIGEgdHdvLWVsZW1lbnQgYXJyYXksIHdoaWNoIGhhcyBhXG4gKiAgICAgY2hhbm5lbCBmb2xsb3dlZCBieSBhIHZhbHVlICh3aGljaCBpcyB0aGUgY2hhbm5lbCBhbmQgdmFsdWUgdG8gYmUgc2VudCkuXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuU2VsZWN0Q2FsbGJhY2t9IGNhbGxiYWNrIEEgZnVuY3Rpb24gdGhhdCBnZXRzIGludm9rZWQgd2hlblxuICogICAgIG9uZSBvZiB0aGUgb3BlcmF0aW9ucyBjb21wbGV0ZXMuXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dIEFuIG9wdGlvbmFsIG9iamVjdCB3aGljaCBjYW4gY2hhbmdlIHRoZSBiZWhhdmlvclxuICogICAgIG9mIGBzZWxlY3RBc3luY2AgdGhyb3VnaCB0d28gcHJvcGVydGllcy5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMucHJpb3JpdHk9ZmFsc2VdIElmIGB0cnVlYCwgdGhlbiB0aGUgcHJpb3JpdHkgb2ZcbiAqICAgICBvcGVyYXRpb25zIHRvIGNvbXBsZXRlIHdoZW4gbW9yZSB0aGFuIG9uZSBpcyBpbW1lZGlhdGVseSBhdmFpbGFibGUgaXMgYVxuICogICAgIHByaW9yaXR5IGFjY29yZGluZyB0byBwb3NpdGlvbiB3aXRoaW4gdGhlIG9wZXJhdGlvbnMgYXJyYXkgKGVhcmxpZXJcbiAqICAgICBwb3NpdGlvbnMgaGF2ZSB0aGUgaGlnaGVyIHByaW9yaXR5KS4gSWYgYGZhbHNlYCBvciBub3QgcHJlc2VudCwgdGhlXG4gKiAgICAgcHJpb3J0eSBvZiBvcGVyYXRpb24gY29tcGxldGlvbiBpcyByYW5kb20uXG4gKiBAcGFyYW0geyp9IFtvcHRpb25zLmRlZmF1bHRdIElmIHNldCBhbmQgYWxsIG9mIHRoZSBvcGVyYXRpb25zIGluaXRpYWxseVxuICogICAgIGJsb2NrLCB0aGUgYHNlbGVjdEFzeW5jYCBjYWxscyBpdHMgY2FsbGJhY2sgaW1tZWRpYXRlbHkgd2l0aCB0aGUgdmFsdWUgb2ZcbiAqICAgICB0aGlzIG9wdGlvbiAodGhlIGNoYW5uZWwgd2lsbCBiZSBge0BsaW5rIG1vZHVsZTpjc3AuREVGQVVMVHxERUZBVUxUfSlgLlxuICogICAgIElmIG5vdCBzZXQsIHRoZSBgc2VsZWN0QXN5bmNgIGNhbGwgd2lsbCBub3QgY2FsbCBpdHMgY2FsbGJhY2sgdW50aWwgb25lXG4gKiAgICAgb2YgdGhlIG9wZXJhdGlvbnMgY29tcGxldGVzIGFuZCB0aGF0IHZhbHVlIGFuZCBjaGFubmVsIHdpbGwgYmUgdGhlIG9uZXNcbiAqICAgICByZXR1cm5lZC5cbiAqL1xuZnVuY3Rpb24gc2VsZWN0QXN5bmMob3BzLCBjYWxsYmFjayA9ICgpID0+IHt9LCBvcHRpb25zID0ge30pIHtcbiAgY29uc3QgY291bnQgPSBvcHMubGVuZ3RoO1xuICBpZiAoY291bnQgPT09IDApIHtcbiAgICB0aHJvdyBFcnJvcihcInNlbGVjdCBjYWxsZWQgd2l0aCBubyBvcGVyYXRpb25zXCIpO1xuICB9XG5cbiAgY29uc3QgcHJpb3JpdHkgPSAhIW9wdGlvbnMucHJpb3JpdHk7XG4gIGNvbnN0IGluZGljZXMgPSBwcmlvcml0eSA/IFtdIDogcmFuZG9tQXJyYXkoY291bnQpO1xuXG4gIGNvbnN0IGFjdGl2ZSA9IGJveCh0cnVlKTtcblxuICBmdW5jdGlvbiBjcmVhdGVTZWxlY3RIYW5kbGVyKGNoYW5uZWwpIHtcbiAgICByZXR1cm4gc2VsZWN0SGFuZGxlcihhY3RpdmUsIHZhbHVlID0+IHtcbiAgICAgIGNhbGxiYWNrKHNlbGVjdFJlc3VsdCh2YWx1ZSwgY2hhbm5lbCkpO1xuICAgIH0pO1xuICB9XG5cbiAgbGV0IHJlc3VsdDtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAvLyBDaG9vc2UgYW4gb3BlcmF0aW9uLiBJZiBgcHJpb3JpdHlgIGlzIHRydWUgdGhlbiBpdCdzIHRoZSBuZXh0IGluZGV4LFxuICAgIC8vIG90aGVyd2lzZSBpdCdzIHJhbmRvbVxuICAgIGNvbnN0IG9wID0gb3BzW3ByaW9yaXR5ID8gaSA6IGluZGljZXNbaV1dO1xuICAgIGxldCBjaGFubmVsLCB2YWx1ZTtcblxuICAgIC8vIEFwcGx5IGV2ZXJ5IG9wZXJhdGlvbiB0byBpdHMgY2hhbm5lbCwgb25lIGF0IGEgdGltZVxuICAgIGlmIChBcnJheS5pc0FycmF5KG9wKSkge1xuICAgICAgW2NoYW5uZWwsIHZhbHVlXSA9IG9wO1xuICAgICAgcmVzdWx0ID0gaGFuZGxlU2VuZChjaGFubmVsLCB2YWx1ZSwgY3JlYXRlU2VsZWN0SGFuZGxlcihjaGFubmVsKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNoYW5uZWwgPSBvcDtcbiAgICAgIHJlc3VsdCA9IGhhbmRsZVJlY3YoY2hhbm5lbCwgY3JlYXRlU2VsZWN0SGFuZGxlcihjaGFubmVsKSk7XG4gICAgfVxuXG4gICAgLy8gV2UgY2hlY2sgZm9yIGJveCBoZXJlIGJlY2F1c2UgYSBib3ggZnJvbSBhIGNoYW5uZWwgaW5kaWNhdGVzIHRoYXQgdGhlXG4gICAgLy8gdmFsdWUgaXMgaW1tZWRpYXRlbHkgYXZhaWxhYmxlICh0aGF0IHRoZXJlIGlzIG5vIG5lZWQgdG8gYmxvY2sgdG8gZ2V0IHRoZVxuICAgIC8vIHZhbHVlKS4gSWYgdGhpcyBoYXBwZW5zLCB3ZSBleGVjdXRlIHRoZSBjYWxsYmFjayBpbW1lZGlhdGVseSB3aXRoIHRoYXRcbiAgICAvLyB2YWx1ZSBhbmQgY2hhbm5lbCBhbmQgc3RvcCBxdWV1ZWluZyBvdGhlciBvcGVyYXRpb25zLlxuICAgIGlmIChpc0JveChyZXN1bHQpKSB7XG4gICAgICBjYWxsYmFjayhzZWxlY3RSZXN1bHQocmVzdWx0LnZhbHVlLCBjaGFubmVsKSk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICAvLyBJZiBub25lIG9mIHRoZSBvcGVyYWV0aW9ucyBpbW1lZGlhdGVseSByZXR1cm5lZCB2YWx1ZXMgKHRoZXkgYXJlIGFsbFxuICAvLyBibG9ja2VkKSwgYW5kIHdlIGhhdmUgc2V0IGEgZGVmYXVsdCBjaGFubmVsIG9wdGlvbiwgdGhlbiByZXR1cm4gdGhlIHZhbHVlXG4gIC8vIGlmIHRoZSBkZWZhdWx0IGNoYW5uZWwgcmF0aGVyIHRoYW4gd2FpdGluZyBmb3IgdGhlIHF1ZXVlZCBvcGVyYXRpb25zIHRvXG4gIC8vIGNvbXBsZXRlLlxuICBpZiAoXG4gICAgIWlzQm94KHJlc3VsdCkgJiZcbiAgICBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob3B0aW9ucywgXCJkZWZhdWx0XCIpXG4gICkge1xuICAgIGlmIChhY3RpdmUudmFsdWUpIHtcbiAgICAgIGFjdGl2ZS52YWx1ZSA9IGZhbHNlO1xuICAgICAgY2FsbGJhY2soc2VsZWN0UmVzdWx0KG9wdGlvbnMuZGVmYXVsdCwgREVGQVVMVCkpO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIENvbXBsZXRlcyB0aGUgZmlyc3Qgb3BlcmF0aW9uIGFtb25nIHRoZSBwcm92aWRlZCBvcGVyYXRpb25zIHRoYXQgY29tZXNcbiAqIGF2YWlsYWJsZSwgYmxvY2tpbmcgdGhlIHByb2Nlc3MgdW50aWwgdGhlbi5cbiAqXG4gKiBgb3BlcmF0aW9uc2AgaXMgYW4gYXJyYXkgd2hvc2UgZWxlbWVudHMgbXVzdCBiZSBjaGFubmVscyBvciB0d28tZWxlbWVudFxuICogc3ViLWFycmF5cyBvZiBjaGFubmVscyBhbmQgdmFsdWVzLCBpbiBhbnkgY29tYmluYXRpb24uIEFuIG9wZXJhdGlvbiB0aGF0IGlzIGFcbiAqIGNoYW5uZWwgaXMgYSB0YWtlIG9wZXJhdGlvbiBvbiB0aGF0IGNoYW5uZWwuIEFuIG9wZXJhdGlvbiB0aGF0IGlzIGFcbiAqIHR3by1lbGVtZW50IGFycmF5IGlzIGEgcHV0IG9wZXJhdGlvbiBvbiB0aGF0IGNoYW5uZWwgdXNpbmcgdGhhdCB2YWx1ZS5cbiAqIEV4YWN0bHkgb25lIG9mIHRoZXNlIG9wZXJhdGlvbnMgd2lsbCBjb21wbGV0ZSwgYW5kIGl0IHdpbGwgYmUgdGhlIGZpcnN0XG4gKiBvcGVyYXRpb24gdGhhdCB1bmJsb2Nrcy5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uICptdXN0KiBiZSBjYWxsZWQgZnJvbSB3aXRoaW4gYW4gYGFzeW5jYCBmdW5jdGlvbiBhbmQgYXMgcGFydCBvZlxuICogYW4gYGF3YWl0YCBleHByZXNzaW9uIGlmIHRoZSByZXR1cm4gdmFsdWUgaXMgbmVlZGVkLlxuICpcbiAqIFdoZW4gYHNlbGVjdGAgaXMgY29tcGxldGVkIGFuZCBpdHMgcHJvY2VzcyB1bmJsb2NrcywgaXRzIGBhd2FpdGAgZXhwcmVzc2lvblxuICogZXZhbHVhdGVzIHRvIGFuIG9iamVjdCBvZiB0d28gcHJvcGVydGllcy4gVGhlIGB2YWx1ZWAgcHJvcGVydHkgYmVjb21lc1xuICogZXhhY3RseSB3aGF0IHdvdWxkIGhhdmUgYmVlbiByZXR1cm5lZCBieSB0aGUgZXF1aXZhbGVudCBgYXdhaXQgcHV0YCBvciBgYXdhaXRcbiAqIHRha2VgIG9wZXJhdGlvbjogYSBib29sZWFuIGluIHRoZSBjYXNlIG9mIGEgcHV0LCBvciB0aGUgdGFrZW4gdmFsdWUgaW4gdGhlXG4gKiBjYXNlIG9mIGEgdGFrZS4gVGhlIGBjaGFubmVsYCBwcm9wZXJ0eSBpcyBzZXQgdG8gdGhlIGNoYW5uZWwgd2hlcmUgdGhlXG4gKiBvcGVyYXRpb24gYWN0dWFsbHkgdG9vayBwbGFjZS4gVGhpcyB3aWxsIGJlIGVxdWl2YWxlbnQgdG8gdGhlIGNoYW5uZWwgaW4gdGhlXG4gKiBgb3BlcmF0aW9uc2AgYXJyYXkgd2hpY2ggY29tcGxldGVkIGZpcnN0LCBhbGxvd2luZyB0aGUgcHJvY2VzcyB0byB1bmJsb2NrLlxuICpcbiAqIElmIHRoZXJlIGlzIG1vcmUgdGhhbiBvbmUgb3BlcmF0aW9uIGFscmVhZHkgYXZhaWxhYmxlIHRvIGNvbXBsZXRlIHdoZW4gdGhlXG4gKiBjYWxsIHRvIGBzZWxlY3RgIGlzIG1hZGUsIHRoZSBvcGVyYXRpb24gd2l0aCB0aGUgaGlnaGVzdCBwcmlvcml0eSB3aWxsIGJlIHRoZVxuICogb25lIHRvIGNvbXBsZXRlLiBSZWd1bGFybHksIHByaW9yaXR5IGlzIG5vbi1kZXRlcm1pbmlzdGljIChpLmUuLCBpdCdzIHNldFxuICogcmFuZG9tbHkpLiBIb3dldmVyLCBpZiB0aGUgb3B0aW9ucyBvYmplY3QgaGFzIGEgYHByaW9yaXR5YCB2YWx1ZSBzZXQgdG9cbiAqIGB0cnVlYCwgcHJpb3JpdHkgd2lsbCBiZSBhc3NpZ25lZCBpbiB0aGUgb3JkZXIgb2YgdGhlIG9wZXJhdGlvbnMgaW4gdGhlXG4gKiBzdXBwbGllZCBhcnJheS5cbiAqXG4gKiBJZiBhbGwgb2YgdGhlIG9wZXJhdGlvbnMgbXVzdCBibG9jayAoaS5lLiwgdGhlcmUgYXJlIG5vIHBlbmRpbmcgcHV0cyBmb3IgdGFrZVxuICogb3BlcmF0aW9ucywgb3IgdGFrZXMgZm9yIHB1dCBvcGVyYXRpb25zKSwgYSBkZWZhdWx0IHZhbHVlIG1heSBiZSByZXR1cm5lZC5cbiAqIFRoaXMgaXMgb25seSBkb25lIGlmIHRoZXJlIGlzIGEgYGRlZmF1bHRgIHByb3BlcnR5IGluIHRoZSBvcHRpb25zIG9iamVjdCwgYW5kXG4gKiB0aGUgdmFsdWUgb2YgdGhhdCBwcm9wZXJ0eSBiZWNvbWVzIHRoZSB2YWx1ZSByZXR1cm5lZCBieSBgYXdhaXQgc2VsZWN0YC4gVGhlXG4gKiBjaGFubmVsIGlzIHNldCB0byB0aGUgc3BlY2lhbCB2YWx1ZSBge0BsaW5rIG1vZHVsZTpjc3AuREVGQVVMVHxERUZBVUxUfWAuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqIEBwYXJhbSB7b2JqZWN0W119IG9wZXJhdGlvbnMgQSBjb2xsZWN0aW9uIG9mIGVsZW1lbnRzIHRoYXQgY29ycmVzcG9uZCB0byByZWN2XG4gKiAgICAgYW5kIHNlbmQgb3BlcmF0aW9ucy4gQSByZWN2IG9wZXJhdGlvbiBpcyBzaWduaWZpZWQgYnkgYW4gZWxlbWVudCB0aGF0IGlzXG4gKiAgICAgYSBjaGFubmVsICh3aGljaCBpcyB0aGUgY2hhbm5lbCB0byBiZSB0YWtlbiBmcm9tKS4gQSBzZW5kIG9wZXJhdGlvbiBpc1xuICogICAgIHNwZWNpZmllZCBieSBhbiBlbGVtZW50IHRoYXQgaXMgaXRzZWxmIGEgdHdvLWVsZW1lbnQgYXJyYXksIHdoaWNoIGhhcyBhXG4gKiAgICAgY2hhbm5lbCBmb2xsb3dlZCBieSBhIHZhbHVlICh3aGljaCBpcyB0aGUgY2hhbm5lbCBhbmQgdmFsdWUgdG8gYmUgc2VudCkuXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnM9e31dIEFuIG9wdGlvbmFsIG9iamVjdCB3aGljaCBjYW4gY2hhbmdlIHRoZSBiZWhhdmlvclxuICogICAgIG9mIGBzZWxlY3RgIHRocm91Z2ggdHdvIHByb3BlcnRpZXMuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnByaW9yaXR5PWZhbHNlXSBJZiBgdHJ1ZWAsIHRoZW4gdGhlIHByaW9yaXR5IG9mXG4gKiAgICAgb3BlcmF0aW9ucyB0byBjb21wbGV0ZSB3aGVuIG1vcmUgdGhhbiBvbmUgaXMgaW1tZWRpYXRlbHkgYXZhaWxhYmxlIGlzIGFcbiAqICAgICBwcmlvcml0eSBhY2NvcmRpbmcgdG8gcG9zaXRpb24gd2l0aGluIHRoZSBvcGVyYXRpb25zIGFycmF5IChlYXJsaWVyXG4gKiAgICAgcG9zaXRpb25zIGhhdmUgdGhlIGhpZ2hlciBwcmlvcml0eSkuIElmIGBmYWxzZWAgb3Igbm90IHByZXNlbnQsIHRoZVxuICogICAgIHByaW9ydHkgb2Ygb3BlcmF0aW9uIGNvbXBsZXRpb24gaXMgcmFuZG9tLlxuICogQHBhcmFtIHsqfSBbb3B0aW9ucy5kZWZhdWx0XSBJZiBzZXQgYW5kIGFsbCBvZiB0aGUgb3BlcmF0aW9ucyBpbml0aWFsbHlcbiAqICAgICBibG9jaywgdGhlIGBzZWxlY3RgIGNhbGwgY29tcGxldGVzIGltbWVkaWF0ZWx5IHdpdGggdGhlIHZhbHVlIG9mIHRoaXNcbiAqICAgICBvcHRpb24gKHRoZSBjaGFubmVsIHdpbGwgYmUgYHtAbGluayBtb2R1bGU6Y3NwLkRFRkFVTFR8REVGQVVMVH0pYC4gSWYgbm90XG4gKiAgICAgc2V0LCB0aGUgYHNlbGVjdGAgY2FsbCB3aWxsIGJsb2NrIHVudGlsIG9uZSBvZiB0aGUgb3BlcmF0aW9ucyBjb21wbGV0ZXNcbiAqICAgICBhbmQgdGhhdCB2YWx1ZSBhbmQgY2hhbm5lbCB3aWxsIGJlIHRoZSBvbmVzIHJldHVybmVkLlxuICogQHJldHVybiB7UHJvbWlzZTxtb2R1bGU6Y3NwLlNlbGVjdFJlc3VsdD59IEEgcHJvbWlzZSB0aGF0IHdpbGwgcmVzb2x2ZSB0byBhblxuICogICAgIG9iamVjdCBvZiB0d28gcHJvcGVydGllczogYHZhbHVlYCB3aWxsIGNvbnRhaW4gdGhlIHZhbHVlIHRoYXQgd291bGQgaGF2ZVxuICogICAgIGJlZW4gcmV0dXJuZWQgYnkgdGhlIGNvcnJlc3BvbmRpbmcgYHtAbGluayBtb2R1bGU6Y3NwLnNlbmR8c2VuZH1gIG9yXG4gKiAgICAgYHtAbGluayBtb2R1bGU6Y3NwLnJlY3Z8cmVjdn1gIG9wZXJhdGlvbjsgYW5kIGBjaGFubmVsYCB3aWxsIGJlIGFcbiAqICAgICByZWZlcmVuY2UgdG8gdGhlIGNoYW5uZWwgdGhhdCBjb21wbGV0ZWQgdGhlIG9wZXJhdGlvbiB0byBhbGxvdyBgc2VsZWN0YFxuICogICAgIHRvIHVuYmxvY2suXG4gKi9cbmZ1bmN0aW9uIHNlbGVjdChvcHMsIG9wdGlvbnMgPSB7fSkge1xuICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgc2VsZWN0QXN5bmMob3BzLCByZXNvbHZlLCBvcHRpb25zKTtcbiAgfSk7XG59XG5cbi8qKlxuICogQSBjb252ZW5pZW5jZSBmdW5jdGlvbiB0byByZWFkIHRoZSB2YWx1ZSBvdXQgb2YgYSBzZWxlY3QgcmVzdWx0LiBUaGlzXG4gKiBmdW5jdGlvbiBpcyBub3QgbmVjZXNzYXJ5IC0gYWZ0ZXIgYWxsLCBpdCdzIGFic29sdXRlbHkgYXMgY29ycmVjdCB0byBzaW1wbHlcbiAqIHVzZSBgcmVzdWx0LnZhbHVlYCBpbnN0ZWFkIG9mIGB2YWx1ZShyZXN1bHQpYCwgYnV0IGl0J3MgcHJvdmlkZWQgZm9yXG4gKiBjb25zaXN0ZW5jeSB3aXRoIHRoZSByZXN0IG9mIHRoZSBmdW5jdGlvbi1jZW50cmljIEFQSS5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICogQHBhcmFtIHttb2R1bGU6Y3NwLlNlbGVjdFJlc3VsdH0gcmVzdWx0IFRoZSByZXN1bHQgY29taW5nIGZyb20gYSBzZWxlY3RcbiAqICAgICBvcGVyYXRpb24uXG4gKiBAcmV0dXJuIHsqfSBUaGUgdmFsdWUgcHJvdmlkZWQgYnkgdGhlIHNlbGVjdCBvcGVyYXRpb24uXG4gKi9cbmZ1bmN0aW9uIHZhbHVlKHJlc3VsdCkge1xuICByZXR1cm4gcmVzdWx0LnZhbHVlO1xufVxuXG4vKipcbiAqIEEgY29udmVuaWVuY2UgZnVuY3Rpb24gdG8gcmVhZCB0aGUgY2hhbm5lbCBvdXQgb2YgYSBzZWxlY3QgcmVzdWx0LiBUaGlzXG4gKiBmdW5jdGlvbiBpcyBub3QgbmVjZXNzYXJ5IC0gYWZ0ZXIgYWxsLCBpdCdzIGFic29sdXRlbHkgYXMgY29ycmVjdCB0byBzaW1wbHlcbiAqIHVzZSBgcmVzdWx0LmNoYW5uZWxgIGluc3RlYWQgb2YgYGNoYW5uZWwocmVzdWx0KWAsIGJ1dCBpdCdzIHByb3ZpZGVkIGZvclxuICogY29uc2lzdGVuY3kgd2l0aCB0aGUgcmVzdCBvZiB0aGUgZnVuY3Rpb24tY2VudHJpYyBBUEkuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5TZWxlY3RSZXN1bHR9IHJlc3VsdCBUaGUgcmVzdWx0IGNvbWluZyBmcm9tIGEgc2VsZWN0XG4gKiAgICAgb3BlcmF0aW9uLlxuICogQHJldHVybiB7bW9kdWxlOmNzcC5DaGFubmVsfSBUaGUgY2hhbm5lbCB1cG9uIHdoaWNoIHRoZSBzZWxlY3Qgb3BlcmF0aW9uXG4gKiAgICAgY29tcGxldGVkLlxuICovXG5mdW5jdGlvbiBjaGFubmVsKHJlc3VsdCkge1xuICByZXR1cm4gcmVzdWx0LmNoYW5uZWw7XG59XG5cbmV4cG9ydCB7IERFRkFVTFQsIHNlbGVjdCwgc2VsZWN0QXN5bmMsIHZhbHVlLCBjaGFubmVsIH07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuLyoqXG4gKiBUaGlzIGlzIHRoZSBwbGFjZSB3aGVyZSB0aGUgbmV3IEpTIHRhc2tzIGFyZSBhY3R1YWxseSBjcmVhdGVkLiBBIHF1ZXVlIGlzXG4gKiBtYWludGFpbmVkIGZvciB0aGVtLCBhbmQgYXMgZWFjaCBiYXRjaCBvZiB0YXNrcyBhcmUgY29tcGxldGVkLCB0aGUgbmV4dCBvbmVzXG4gKiBydW4uIEFzIGVhY2ggcHJvY2VzcyBydW5zLCBpdCBhZGRzIHRhc2tzIHRvIGJlIHJ1biB0byB0aGUgcXVldWUsIHdoaWNoIGFyZVxuICogZWFjaCBydW4gaW4gdGhlaXIgb3duIEpTIHRhc2suXG4gKlxuICogVGhlIGZ1bmN0aW9uIHRoYXQgc3Bhd25zIHRoZSBuZXcgSlMgdGFzayBkZXBlbmRzIG9uIGVudmlyb25tZW50LiBUaGVcbiAqIGBzZXRJbW1lZGlhdGVgIGZ1bmN0aW9uIGlzIHByZWZlcnJlZCBhcyBpdCdzIHRoZSBmYXN0ZXN0LCBub3Qgd2FpdGluZyBmb3JcbiAqIGV2ZW50IHF1ZXVlcyB0byBlbXB0eSBiZWZvcmUgc3Bhd25pbmcgdGhlIG5ldyBwcm9jZXNzLiBIb3dldmVyLCBpdCBpcyBub3QgSlNcbiAqIHN0YW5kYXJkIGFuZCBjdXJyZW50bHkgb25seSB3b3JrcyBpbiBJRSBhbmQgTm9kZS4gSWYgYHNldEltbWVkaWF0ZWAgaXNuJ3RcbiAqIGF2YWlsYWJsZSwgYW4gYXR0ZW1wdCBpcyBtYWRlIHRvIHVzZSBgTWVzc2FnZUNoYW5uZWxgJ3MgYG9uTWVzc2FnZWAgaXMgdHJpZWRcbiAqIG5leHQuIElmIHRoYXQgaXMgYWxzbyBub3QgYXZhaWxhYmxlLCB0aGVuIGBzZXRUaW1lb3V0YCB3aXRoIGAwYCBkZWxheSBpc1xuICogdXNlZCwgd2hpY2ggaXMgYXZhaWxhYmxlIGV2ZXJ5d2hlcmUgYnV0IHdoaWNoIGlzIHRoZSBsZWFzdCBwZXJmb3JtYW50IG9mIGFsbFxuICogb2YgdGhlIHNvbHV0aW9ucy5cbiAqXG4gKiBUaGVyZSBhcmUgb3RoZXIgcG9zc2liaWxpdGllcyBmb3IgY3JlYXRpbmcgcHJvY2Vzc2VzLCBidXQgdGhleSB3ZXJlIHJlamVjdGVkXG4gKiBhcyBvYnNvbGV0ZSAoYHByb2Nlc3MubmV4dFRpY2tgIGFuZCBgb25yZWFkeXN0YXRlY2hhbmdlYCkgb3IgdW5uZWNlc3NhcnlcbiAqIChgd2luZG93LnBvc3RNZXNzYWdlYCwgd2hpY2ggd29ya3MgbGlrZSBgTWVzc2FnZUNoYW5uZWxgIGJ1dCBkb2Vzbid0IHdvcmsgaW5cbiAqIFdlYiBXb3JrZXJzKS5cbiAqXG4gKiBJdCBpcyBub3RhYmxlIGFuZCBpbXBvcnRhbnQgdGhhdCB3ZSBhY3QgYXMgZ29vZCBjaXRpemVucyBoZXJlLiBUaGlzXG4gKiBkaXNwYXRjaGVyIGlzIGNhcGFibGUgb2YgdGFraW5nIGNvbnRyb2wgb2YgdGhlIEphdmFTY3JpcHQgZW5naW5lIHVudGlsXG4gKiB0aG91c2FuZHMsIG1pbGxpb25zLCBvciBtb3JlIHRhc2tzIGFyZSBoYW5kbGVkLiBCdXQgdGhhdCBjb3VsZCBjYXVzZSB0aGVcbiAqIHN5c3RlbSBldmVudCBsb29wIHRvIGhhdmUgdG8gd2FpdCBhbiB1bmFjY2VwdGFibGUgYW1vdW50IG9mIHRpbWUuIFNvIHdlIGxpbWl0XG4gKiBvdXJzZWx2ZXMgdG8gYSBiYXRjaCBvZiB0YXNrcyBhdCBhIHRpbWUsIGFuZCBpZiB0aGVyZSBhcmUgc3RpbGwgbW9yZSB0byBiZVxuICogcnVuLCB3ZSBsZXQgdGhlIGV2ZW50IGxvb3AgcnVuIGJlZm9yZSB0aGF0IG5leHQgYmF0Y2ggaXMgcHJvY2Vzc2VkLlxuICpcbiAqIFRoZSBkaXNwYXRjaGVyIGlzICoqZ2xvYmFsKiouIFRoZXJlIGlzIGEgc2luZ2xlIGluc3RhbmNlIHRoYXQgcnVucyBmb3IgYWxsXG4gKiBjaGFubmVscyBhbmQgcHJvY2Vzc2VzLiBUaGlzIGlzIHRoZSBvbmx5IGVsZW1lbnQgb2YgdGhlIHN5c3RlbSB0aGF0IHdvcmtzXG4gKiBsaWtlIHRoaXMuXG4gKlxuICogQG1vZHVsZSBjc3AvZGlzcGF0Y2hlclxuICogQHNlZSBtb2R1bGU6Y3NwLmNvbmZpZ1xuICogQHByaXZhdGVcbiAqL1xuXG5pbXBvcnQge1xuICBxdWV1ZSBhcyBxLFxuICBFTVBUWSxcbiAgY291bnQgYXMgcUNvdW50LFxuICBkZXF1ZXVlLFxuICBlbnF1ZXVlXG59IGZyb20gXCJtb2R1bGVzL3F1ZXVlXCI7XG5jb25zdCBxdWV1ZSA9IHEoKTtcblxuLyoqXG4gKiBUaGUgZGlzcGF0Y2ggbWV0aG9kIG9wdGlvbiBpbmRpY2F0aW5nIHRoYXQgYHNldEltbWVkaWF0ZWAgc2hvdWxkIGJlIHVzZWQgdG9cbiAqIGRpc3BhdGNoIHRhc2tzLlxuICpcbiAqIFRoaXMgaXMgdGhlIGRlZmF1bHQgb3B0aW9uLiBGb3IgZW52aXJvbm1lbnRzIHRoYXQgZG9uJ3Qgc3VwcG9ydFxuICogYHNldEltbWVkaWF0ZWAsIHRoaXMgZmFsbHMgYmFjayB0b1xuICogYHtAbGluayBtb2R1bGU6Y3NwLk1FU1NBR0VfQ0hBTk5FTHxNRVNTQUdFX0NIQU5ORUx9YC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICogQHR5cGUge1N5bWJvbH1cbiAqIEBzZWUge0BsaW5rIG1vZHVsZTpjc3AuY29uZmlnfGNvbmZpZ31cbiAqL1xuY29uc3QgU0VUX0lNTUVESUFURSA9IFN5bWJvbChcIlNFVF9JTU1FRElBVEVcIik7XG5cbi8qKlxuICogVGhlIGRpc3BhdGNoIG1ldGhvZCBvcHRpb24gaW5kaWNhdGluZyB0aGF0IGEgYE1lc3NhZ2VDaGFubmVsYCBzaG91bGQgYmUgdXNlZFxuICogdG8gZGlzcGF0Y2ggdGFza3MuXG4gKlxuICogRm9yIGVudmlyb25tZW50cyB0aGF0IGRvbid0IHN1cHBvcnQgYE1lc3NhZ2VDaGFubmVsYCwgdGhpcyBmYWxscyBiYWNrIHRvXG4gKiBge0BsaW5rIG1vZHVsZTpjc3AuU0VUX1RJTUVPVVR8U0VUX1RJTUVPVVR9YC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICogQHR5cGUge1N5bWJvbH1cbiAqIEBzZWUge0BsaW5rIG1vZHVsZTpjc3AuY29uZmlnfGNvbmZpZ31cbiAqL1xuY29uc3QgTUVTU0FHRV9DSEFOTkVMID0gU3ltYm9sKFwiTUVTU0FHRV9DSEFOTkVMXCIpO1xuXG4vKipcbiAqIFRoZSBkaXNwYXRjaCBtZXRob2Qgb3B0aW9uIGluZGljYXRpbmcgdGhhdCBgc2V0VGltZW91dGAgc2hvdWxkIGJlIHVzZWQgdG9cbiAqIGRpc3BhdGNoIHRhc2tzLlxuICpcbiAqIFRoaXMgbWV0aG9kIGlzIGFsd2F5cyBhdmFpbGFibGUsIGJ1dCBpdCdzIGFsc28gYWx3YXlzIGxlc3MgZWZmaWNpZW50IHRoYW4gYW55XG4gKiBvdGhlciBtZXRob2QsIHNvIGl0IHNob3VsZCBiZSB1c2VkIGFzIGEgbGFzdCByZXNvcnQuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqIEB0eXBlIHtTeW1ib2x9XG4gKiBAc2VlICB7QGxpbmsgbW9kdWxlOmNzcC5jb25maWd8Y29uZmlnfVxuICovXG5jb25zdCBTRVRfVElNRU9VVCA9IFN5bWJvbChcIlNFVF9USU1FT1VUXCIpO1xuXG5jb25zdCBvcHRpb25zID0ge1xuICBiYXRjaFNpemU6IDEwMjQsXG4gIGRpc3BhdGNoTWV0aG9kOiBTRVRfSU1NRURJQVRFXG59O1xuXG5sZXQgZGlzcGF0Y2hlciA9IGNyZWF0ZURpc3BhdGNoZXIoKTtcbmxldCBydW5uaW5nID0gZmFsc2U7XG5sZXQgcXVldWVkID0gdHJ1ZTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuZCByZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCBjYW4gYmUgdXNlZCB0byBkaXNwYXRjaCB0YXNrcy4gVGhlXG4gKiBmdW5jdGlvbiB0aGF0IGlzIGNyZWF0ZWQgZGVwZW5kcyBvbiB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGBkaXNwYXRjaE1ldGhvZGBcbiAqIHRoYXQgY2FuIGJlIHNldCB3aXRoIGB7QGxpbmsgbW9kdWxlOmNzcC5jb25maWd8Y29uZmlnfWAuXG4gKlxuICogQHJldHVybiBBIGRpc3BhdGNoZXIgZnVuY3Rpb24gdXNpbmcgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBkaXNwYXRjaCBtZXRob2QuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjcmVhdGVEaXNwYXRjaGVyKCkge1xuICBzd2l0Y2ggKGNhbGNEaXNwYXRjaE1ldGhvZCgpKSB7XG4gICAgLy8gV2UgcHJlZmVyIGBzZXRJbW1lZGlhdGVgIGlmIGl0J3MgYXZhaWxhYmxlLCBidXQgaXQncyBvbmx5IGF2YWlsYWJsZSBpblxuICAgIC8vIE5vZGUgYW5kIHNvbWUgb2xkIGJyb3dzZXJzLlxuICAgIGNhc2UgU0VUX0lNTUVESUFURTpcbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGlmICghKHF1ZXVlZCAmJiBydW5uaW5nKSkge1xuICAgICAgICAgIHF1ZXVlZCA9IHRydWU7XG4gICAgICAgICAgc2V0SW1tZWRpYXRlKHByb2Nlc3NUYXNrcyk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAvLyBNb3N0IG1vZGVybiBicm93c2VycyBpbXBsZW1lbnQgYE1lc3NhZ2VDaGFubmVsYC4gVGhpcyBpcyB0aGUgcHJlZmVycmVkXG4gICAgLy8gbWV0aG9kIGluIGJyb3dzZXIgZW52aXJvbm1lbnRzIHdoZXJlIGBzZXRJbW1lZGlhdGVgIGlzbid0IGF2YWlsYWJsZS5cbiAgICBjYXNlIE1FU1NBR0VfQ0hBTk5FTDoge1xuICAgICAgY29uc3QgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICAgICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSAoKSA9PiBwcm9jZXNzVGFza3MoKTtcbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGlmICghKHF1ZXVlZCAmJiBydW5uaW5nKSkge1xuICAgICAgICAgIHF1ZXVlZCA9IHRydWU7XG4gICAgICAgICAgY2hhbm5lbC5wb3J0Mi5wb3N0TWVzc2FnZSgwKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBJZiBhbGwgZWxzZSBmYWlscywganVzdCB1c2UgYHNldFRpbWVvdXRgLiBJdCdzIGEgbGl0dGxlIHNsb3dlciB0aGFuIHRoZVxuICAgIC8vIG90aGVyIG1ldGhvZHMsIGJ1dCBpdCdzIGF2YWlsYWJsZSBldmVyeXdoZXJlLlxuICAgIGNhc2UgU0VUX1RJTUVPVVQ6XG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBpZiAoIShxdWV1ZWQgJiYgcnVubmluZykpIHtcbiAgICAgICAgICBxdWV1ZWQgPSB0cnVlO1xuICAgICAgICAgIHNldFRpbWVvdXQocHJvY2Vzc1Rhc2tzLCAwKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgfVxufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGFjdHVhbCBkaXNwYXRjaCBtZXRob2QgYmFzZWQgb24gdGhlIGN1cnJlbnQgZGlzcGF0Y2ggbWV0aG9kXG4gKiBzZXR0aW5nIGFuZCBlbnZpcm9ubWVudGFsIGF2YWlsYWJpbGl0eS5cbiAqXG4gKiBUaGUgZGlzcGF0Y2ggbWV0aG9kIGlzIHN0b3JlZCByYXcsIHNvIHRoaXMgZnVuY3Rpb24gaXMgbmVjZXNzYXJ5IHRvIHRha2VcbiAqIGVudmlyb25tZW50IGludG8gYWNjb3VudC4gRm9yIGV4YW1wbGUsIGlmIHdlJ3JlIHJ1bm5pbmcgaW4gYSBtb2Rlcm4gYnJvd3NlclxuICogKHdoaWNoIGRvZXMgbm90IGhhdmUgYHNldEltbWVkaWF0ZWApLFxuICogYHtAbGluayBtb2R1bGU6Y3NwLlNFVF9JTU1FRElBVEV8U0VUX0lNTUVESUFURX1gIGNhbiBzdGlsbCBiZSByZWNvcmRlZCBhcyB0aGVcbiAqIGRpc3BhdGNoIG1ldGhvZCwgYnV0IHRoaXMgZnVuY3Rpb24gd2lsbCByZXR1cm5cbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC5NRVNTQUdFX0NIQU5ORUx8TUVTU0FHRV9DSEFOTkVMfWAuXG4gKlxuICogQHJldHVybiB7U3ltYm9sfSBUaGUgZGlzcGF0Y2ggbWV0aG9kIHRvIHVzZSBiYXNlZCBvbiBzZXR0aW5nIGFuZCBlbnZpcm9ubWVudC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNhbGNEaXNwYXRjaE1ldGhvZCgpIHtcbiAgc3dpdGNoIChvcHRpb25zLmRpc3BhdGNoTWV0aG9kKSB7XG4gICAgY2FzZSBNRVNTQUdFX0NIQU5ORUw6XG4gICAgICBpZiAodHlwZW9mIE1lc3NhZ2VDaGFubmVsICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIHJldHVybiBNRVNTQUdFX0NIQU5ORUw7XG4gICAgICB9XG4gICAgICByZXR1cm4gU0VUX1RJTUVPVVQ7XG5cbiAgICBjYXNlIFNFVF9USU1FT1VUOlxuICAgICAgcmV0dXJuIFNFVF9USU1FT1VUO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIGlmICh0eXBlb2Ygc2V0SW1tZWRpYXRlICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIHJldHVybiBTRVRfSU1NRURJQVRFO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBNZXNzYWdlQ2hhbm5lbCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICByZXR1cm4gTUVTU0FHRV9DSEFOTkVMO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFNFVF9USU1FT1VUO1xuICB9XG59XG5cbi8qKlxuICogVGhlIGhlYXJ0IG9mIHRoZSBkaXNwYXRjaCBwcm9jZXNzLCB0aGlzIGlzIHRoZSBmdW5jdGlvbiBydW4gYnkgdGhlIGRpc3BhdGNoXG4gKiBmdW5jdGlvbiBpbiBvcmRlciB0byBhY3R1YWxseSBydW4gcXVldWVkIHRhc2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHByb2Nlc3NUYXNrcygpIHtcbiAgcnVubmluZyA9IHRydWU7XG4gIHF1ZXVlZCA9IGZhbHNlO1xuICBsZXQgY291bnQgPSAwO1xuXG4gIGZvciAoOzspIHtcbiAgICBjb25zdCB0YXNrID0gZGVxdWV1ZShxdWV1ZSk7XG4gICAgaWYgKHRhc2sgPT09IEVNUFRZKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICB0YXNrKCk7XG5cbiAgICBpZiAoY291bnQgPj0gb3B0aW9ucy5iYXRjaFNpemUpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjb3VudCsrO1xuXG4gICAgcnVubmluZyA9IGZhbHNlO1xuICAgIGlmIChxQ291bnQocXVldWUpKSB7XG4gICAgICBkaXNwYXRjaGVyKCk7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbmQgYXNzaWducyB0aGUgZ2xvYmFsIGRpc3BhdGNoIGZ1bmN0aW9uIGJhc2VkIG9uIGRpc3BhdGNoIG1ldGhvZFxuICogc2V0dGluZyBhbmQgZW52aXJvbm1lbnRhbCBhdmFpbGFiaWxpdHkuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gc2V0RGlzcGF0Y2hlcigpIHtcbiAgZGlzcGF0Y2hlciA9IGNyZWF0ZURpc3BhdGNoZXIoKTtcbn1cblxuLyoqXG4gKiBUaGUgY29uZmlndXJhdGlvbiBvZiB0aGUgQ2hhbmtvIGRpc3BhdGNoZXIuIEFuIG9iamVjdCBsaWtlIHRoaXMgaXMgcmV0dXJuZWRcbiAqIGZyb20gdGhlIHtAbGluayBtb2R1bGU6Y3NwLmNvbmZpZ30gZnVuY3Rpb24sIGFuZCBpdCBtYXkgYWxzbyBiZSBwYXNzZWQgdG8gdGhlXG4gKiBzYW1lIGZ1bmN0aW9uICh0aG91Z2ggZWFjaCBwcm9wZXJ0eSBpcyBvcHRpb25hbCBpbiB0aGF0IGNhc2UpLlxuICpcbiAqIEB0eXBlZGVmIHtvYmplY3R9IERpc3BhdGNoZXJDb25maWdcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcHJvcGVydHkge251bWJlcn0gYmF0Y2hTaXplIFRoZSBtYXhpbXVtIG51bWJlciBvZiB0YXNrcyB0aGF0IHRoZSBkaXNwYXRjaGVyXG4gKiAgICAgd2lsbCBydW4gaW4gYSBzaW5nbGUgYmF0Y2guXG4gKiBAcHJvcGVydHkge1N5bWJvbH0gZGlzcGF0Y2hNZXRob2QgVGhlIG1ldGhvZCB1c2VkIHRvIGRpc3BhdGNoIGEgcHJvY2VzcyBpbnRvXG4gKiAgICAgYSBzZXBhcmF0ZSBsaW5lIG9mIGV4ZWN1dGlvbi5cbiAqL1xuXG4vKipcbiAqIFNldHMgb25lIG9yIG1vcmUgb2YgdGhlIGRpc3BhdGNoZXIgY29uZmlndXJhdGlvbiBvcHRpb25zLlxuICpcbiAqIFRoaXMgaXMgYWR2YW5jZWQgc2V0dGluZyBmb3IgdGhlIGRpc3BhdGNoZXIgdGhhdCBpcyByZXNwb25zaWJsZSBmb3IgcXVldWVpbmdcbiAqIHVwIGNoYW5uZWwgb3BlcmF0aW9ucyBhbmQgcHJvY2Vzc2VzLiBJdCBpcyBsaWtlbHkgdGhhdCB0aGlzIGZ1bmN0aW9uIHdpbGxcbiAqIG5ldmVyIG5lZWQgdG8gYmUgY2FsbGVkIGluIG5vcm1hbCBvcGVyYXRpb24uXG4gKlxuICogSWYgYW55IHJlY29nbml6ZWQgb3B0aW9ucyBhcmUgc3BlY2lmaWVkIGluIHRoZSBvcHRpb25zIG9iamVjdCBwYXNzZWQgdG9cbiAqIGBjb25maWdgLCB0aGVuIHRoZSBvcHRpb24gaXMgc2V0IHRvIHRoZSB2YWx1ZSBzZW50IGluLiBQcm9wZXJ0aWVzIHRoYXQgYXJlbid0XG4gKiBhbnkgb2YgdGhlc2Ugb3B0aW9ucyBhcmUgaWdub3JlZCwgYW5kIGFueSBvZiB0aGVzZSBvcHRpb25zIHRoYXQgZG8gbm90IGFwcGVhclxuICogaW4gdGhlIHBhc3NlZCBvYmplY3QgYXJlIGxlZnQgd2l0aCB0aGVpciBjdXJyZW50IHZhbHVlcy5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICogQHBhcmFtIHtPYmplY3R9IG9wdHMgQSBtYXBwaW5nIG9mIG9wdGlvbnMgdG8gdGhlaXIgbmV3IHZhbHVlcy4gRXh0cmEgdmFsdWVzXG4gKiAgICAgKHByb3BlcnRpZXMgdGhhdCBhcmUgbm90IG9wdGlvbnMpIGFyZSBpZ25vcmVkLlxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRzLmJhdGNoU2l6ZV0gVGhlIG1heGltdW0gbnVtYmVyIG9mIHRhc2tzIHRoYXQgdGhlXG4gKiAgICAgZGlzcGF0Y2hlciB3aWxsIHJ1biBpbiBhIHNpbmdsZSBiYXRjaCAoaW5pdGlhbGx5LCB0aGlzIGlzIDEwMjQpLiBJZiB0aGVcbiAqICAgICBudW1iZXIgb2YgcGVuZGluZyB0YXNrcyBleGNlZWRzIHRoaXMsIHRoZSByZW1haW5pbmcgYXJlIG5vdCBkaXNjYXJkZWQuXG4gKiAgICAgVGhleSdyZSBzaW1wbHkgcnVuIGFzIHBhcnQgb2YgYW5vdGhlciBiYXRjaCBhZnRlciB0aGUgY3VycmVudCBiYXRjaFxuICogICAgIGNvbXBsZXRlcy5cbiAqIEBwYXJhbSB7U3ltYm9sfSBbb3B0cy5kaXNwYXRjaE1ldGhvZF0gVGhlIG1ldGhvZCB1c2VkIHRvIGRpc3BhdGNoIGEgcHJvY2Vzc1xuICogICAgIGludG8gYSBzZXBhcmF0ZSBsaW5lIG9mIGV4ZWN1dGlvbi4gUG9zc2libGUgdmFsdWVzIGFyZVxuICogICAgIGB7QGxpbmsgbW9kdWxlOmNzcC5TRVRfSU1NRURJQVRFfFNFVF9JTU1FRElBVEV9YCxcbiAqICAgICBge0BsaW5rIG1vZHVsZTpjc3AuTUVTU0FHRV9DSEFOTkVMfE1FU1NBR0VfQ0hBTk5FTH1gLCBvclxuICogICAgIGB7QGxpbmsgbW9kdWxlOmNzcC5TRVRfVElNRU9VVHxTRVRfVElNRU9VVH1gLCB3aXRoIHRoZSBpbml0aWFsIGJlaW5nXG4gKiAgICAgYHtAbGluayBtb2R1bGU6Y3NwLlNFVF9JTU1FRElBVEV8U0VUX0lNTUVESUFURX1gLiBJZiBhIG1ldGhvZCBpcyBzZXQgYnV0XG4gKiAgICAgaXMgbm90IGF2YWlsYWJsZSBpbiB0aGF0IGVudmlyb25tZW50LCB0aGVuIGl0IHdpbGwgc2lsZW50bHkgZmFsbCBiYWNrIHRvXG4gKiAgICAgdGhlIG5leHQgbWV0aG9kIHRoYXQgaXMgYXZhaWxhYmxlLlxuICogQHJldHVybiB7bW9kdWxlOmNzcC5EaXNwYXRjaGVyQ29uZmlnfSBUaGUgY29uZmlndXJhdGlvbiBzZXR0aW5ncyBmb3IgdGhlXG4gKiAgICAgZGlzcGF0Y2hlciBhZnRlciBhbnkgbmV3IHZhbHVlcyBoYXZlIGJlZW4gc2V0LlxuICovXG5mdW5jdGlvbiBjb25maWcob3B0cyA9IHt9KSB7XG4gIGZvciAoY29uc3Qga2V5IGluIG9wdGlvbnMpIHtcbiAgICBpZiAoa2V5IGluIG9wdHMpIHtcbiAgICAgIG9wdGlvbnNba2V5XSA9IG9wdHNba2V5XTtcblxuICAgICAgaWYgKGtleSA9PT0gXCJkaXNwYXRjaE1ldGhvZFwiKSB7XG4gICAgICAgIHNldERpc3BhdGNoZXIoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMpO1xufVxuXG4vKipcbiAqIFF1ZXVlcyBhIHRhc2sgdG8gYmUgcnVuIGFuZCBzdGFydHMgdGhlIGRpc3BhdGNoIHByb2Nlc3MuXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gdGFzayBBIHRhc2sgdG8gYmUgcXVldWVkIGFuZCBydW4gdGhlIG5leHQgdGltZSBhIGJhdGNoIG9mXG4gKiAgICAgdGFza3MgaXMgcnVuLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZGlzcGF0Y2godGFzaykge1xuICBlbnF1ZXVlKHF1ZXVlLCB0YXNrKTtcbiAgZGlzcGF0Y2hlcigpO1xufVxuXG5leHBvcnQgeyBTRVRfSU1NRURJQVRFLCBNRVNTQUdFX0NIQU5ORUwsIFNFVF9USU1FT1VULCBjb25maWcsIGRpc3BhdGNoIH07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuLyoqXG4gKiBQcm92aWRlcyBzbWFsbCB1dGlsaXR5IGZ1bmN0aW9ucyB0byBtYWtlIGl0IGVhc2llciB0byBpbnRlcmFjdCB3aXRoIGFzeW5jXG4gKiBmdW5jdGlvbnMgYXMgcHJvY2Vzc2VzLlxuICpcbiAqIEBtb2R1bGUgY3NwL3Byb2Nlc3NcbiAqIEBwcml2YXRlXG4gKi9cblxuaW1wb3J0IHsgdGltZWRDaGFuLCByZWN2QXN5bmMgfSBmcm9tIFwibW9kdWxlcy9jaGFubmVsXCI7XG5cbi8qKlxuICogQmxvY2tzIHRoZSBwcm9jZXNzIGZvciB0aGUgc3BlY2lmaWVkIHRpbWUgKGluIG1pbGxpc2Vjb25kcykgYW5kIHRoZW4gdW5ibG9ja3NcbiAqIGl0LlxuICpcbiAqIFRoaXMgaW1wbGVtZW50cyBhIGRlbGF5LCBidXQgb25lIHRoYXQncyBzdXBlcmlvciB0byBvdGhlciBraW5kcyBvZiBkZWxheXNcbiAqIChgc2V0VGltZW91dGAsIGV0Yy4pIGJlY2F1c2UgaXQgYmxvY2tzIHRoZSBwcm9jZXNzIGFuZCBhbGxvd3MgdGhlIGRpc3BhdGNoZXJcbiAqIHRvIGFsbG93IG90aGVyIHByb2Nlc3NlcyB0byBydW4gd2hpbGUgdGhpcyBvbmUgd2FpdHMuIFRoZSBkZWZhdWx0IGRlbGF5IGlzIDAsXG4gKiB3aGljaCB3aWxsIHJlbGVhc2UgdGhlIHByb2Nlc3MgdG8gYWxsb3cgb3RoZXJzIHRvIHJ1biBhbmQgdGhlbiBpbW1lZGlhdGVseVxuICogcmUtcXVldWUgaXQuXG4gKlxuICogVGhpcyBmdW5jdGlvbiAqbXVzdCogYmUgY2FsbGVkIGZyb20gd2l0aGluIGFuIGBhc3luY2AgZnVuY3Rpb24gYW5kIGFzIHBhcnQgb2ZcbiAqIGFuIGBhd2FpdGAgZXhwcmVzc2lvbi5cbiAqXG4gKiBXaGVuIHRoaXMgZnVuY3Rpb24gY29tcGxldGVzIGFuZCBpdHMgcHJvY2VzcyB1bmJsb2NrcywgdGhlIGBhd2FpdGAgZXhwcmVzc2lvblxuICogZG9lc24ndCB0YWtlIG9uIGFueSBtZWFuaW5nZnVsIHZhbHVlLiBUaGUgcHVycG9zZSBvZiB0aGlzIGZ1bmN0aW9uIGlzIHNpbXBseVxuICogdG8gZGVsYXksIG5vdCB0byBjb21tdW5pY2F0ZSBhbnkgZGF0YS5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICogQHBhcmFtIHtudW1iZXJ9IFtkZWxheT0wXSB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0aGF0IHRoZSBwcm9jZXNzIHdpbGxcbiAqICAgICBibG9jayBmb3IuIEF0IHRoZSBlbmQgb2YgdGhhdCB0aW1lLCB0aGUgcHJvY2VzcyBpcyBhZ2FpbiBlbGlnaWJsZSB0byBiZVxuICogICAgIHJ1biBieSB0aGUgZGlzcGF0Y2hlci4gSWYgdGhpcyBpcyBtaXNzaW5nIG9yIHNldCB0byBgMGAsIHRoZSBwcm9jZXNzIHdpbGxcbiAqICAgICBjZWRlIGV4ZWN1dGlvbiB0byB0aGUgbmV4dCBvbmUgYnV0IGltbWVkaWF0ZWx5IHJlcXVldWUgaXRzZWxmIHRvIGJlIHJ1blxuICogICAgIGFnYWluLlxuICogQHJldHVybiB7UHJvbWlzZX0gQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBubyBtZWFuaW5nZnVsIHJlc3VsdCB3aGVuIHRoZVxuICogICAgIHRpbWUgaGFzIGVsYXBzZWQuXG4gKi9cbmZ1bmN0aW9uIHNsZWVwKGRlbGF5ID0gMCkge1xuICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgY29uc3QgY2ggPSB0aW1lZENoYW4oZGVsYXkpO1xuICAgIHJlY3ZBc3luYyhjaCwgcmVzb2x2ZSk7XG4gIH0pO1xufVxuXG4vKipcbiAqIEludm9rZXMgYW4gYXN5bmMgZnVuY3Rpb24gYWN0aW5nIGFzIGEgcHJvY2Vzcy5cbiAqXG4gKiBUaGlzIGlzIHB1cmVseSBhIGNvbnZlbmllbmNlIGZ1bmN0aW9uLCBkcml2ZW4gYnkgdGhlIGZhY3QgdGhhdCBpdCdzIG5lY2Vzc2FyeVxuICogdG8gdXNlIGFuIElJRkUgdG8gaW52b2tlIGFuIGFub255bW91cyBhc3luYyBmdW5jdGlvbiwgYW5kIHRoYXQncyBub3QgdmVyeVxuICogYWVzdGhldGljYWxseSBwbGVhc2luZy4gSXQgZG9lcyBubyBtb3JlIHRoYW4gaW52b2tlIHRoZSBwYXNzZWQgZnVuY3Rpb24sIGJ1dFxuICogdGhhdCBhdCBsZWFzdCByZWxlYXNlcyB1cyBmcm9tIHRoZSBuZWVkIHRvIHB1dCB0aGUgZW1wdHkgcGFyZW50aGVzZXMgYWZ0ZXJcbiAqIHRoZSBmdW5jdGlvbiBkZWZpbml0aW9uLlxuICpcbiAqIEEgbmFtZWQgYXN5bmMgZnVuY3Rpb24gY2FuIHNpbXBseSBiZSBpbnZva2VkICh3aXRob3V0IGJlaW5nIGFuIElJRkUpIGFuZFxuICogZG9lc24ndCBiZW5lZml0IGZyb20gdGhpcyBjb252ZW5pZW5jZS5cbiAqXG4gKiBBbm9ueW1vdXMgcHJvY2VzcyB3aXRob3V0IGBnb2A6XG4gKiBgYGBcbiAqIChhc3luYyAoKSA9PiB7XG4gKiAgIC4uLiBkbyBzb21lIHByb2Nlc3Mgc3R1ZmYgaGVyZSAuLi5cbiAqIH0pKCk7XG4gKiBgYGBcbiAqIEFub255bW91cyBwcm9jZXNzIHdpdGggYGdvYDpcbiAqIGBgYFxuICogZ28oYXN5bmMgKCkgPT4ge1xuICogICAuLi4gZG8gc29tZSBwcm9jZXNzIHN0dWZmIGhlcmUgLi4uXG4gKiB9KTtcbiAqIGBgYFxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmbiBUaGUgYXN5bmMgZnVuY3Rpb24gYmVpbmcgdXNlZCBhcyBhIHByb2Nlc3MuXG4gKiBAcGFyYW0gey4uLip9IGFyZ3MgQXJndW1lbnRzIHRoYXQgYXJlIHNlbnQgdG8gdGhlIGFzeW5jIGZ1bmN0aW9uIHdoZW4gaXQnc1xuICogICAgIGludm9rZWQuXG4gKiBAcmV0dXJuIHtQcm9taXNlfSBUaGUgcHJvbWlzZSByZXR1cm5lZCBieSB0aGUgYXN5bmMgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGdvKGZuLCAuLi5hcmdzKSB7XG4gIHJldHVybiBmbiguLi5hcmdzKTtcbn1cblxuLyoqXG4gKiBKb2lucyBhbGwgb2YgdGhlIHByb3ZpZGVkIHByb2Nlc3NlcyBpbnRvIGEgc2luZ2xlIHByb2Nlc3MsIHJldHVybmluZyBhXG4gKiBwcm9taXNlIHRoYXQgd3JhcHMgYWxsIG9mIHRoZSBpbmRpdmlkdWFsIHByb2Nlc3NlcycgcHJvbWlzZXMuIFB1dHRpbmcgdGhpcyBpblxuICogYW4gYGF3YWl0YCBzdGF0ZW1lbnQgd2lsbCBibG9jayB1bnRpbCBhbGwgb2YgdGhlIHByb2Nlc3NlcyBjb21wbGV0ZS5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICogQHBhcmFtIHsuLi5mdW5jdGlvbn0gZm5zIEFueSBudW1iZXIgb2YgYXN5bmMgZnVuY3Rpb25zIHdob3NlIHJlc29sdXRpb25zIGFyZVxuICogICAgIGJlaW5nIHdhaXRlZCBmb3IuXG4gKiBAcmV0dXJuIHtQcm9taXNlfSBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIGFsbCBvZiB0aGUgcHJvY2Vzc2VzIHByb21pc2VzXG4gKiAgICAgcmVzb2x2ZS5cbiAqL1xuZnVuY3Rpb24gam9pbiguLi5mbnMpIHtcbiAgcmV0dXJuIFByb21pc2UuYWxsKGZucyk7XG59XG5cbmV4cG9ydCB7IHNsZWVwLCBnbywgam9pbiB9O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG5cbi8qKlxuICogUHJvdmlkZXMgYW4gZWZmaWNpZW50IGdlbmVyYWwtcHVycG9zZSBxdWV1ZS5cbiAqXG4gKiBAbW9kdWxlIGNzcC9xdWV1ZVxuICogQHByaXZhdGVcbiAqL1xuXG4vKipcbiAqIEEgZ2VuZXJhbCBwdXJwb3NlLCBoaWdobHkgZWZmaWNpZW50IEphdmFTY3JpcHQgcXVldWUuIEl0IGlzIGJhY2tlZCBieSBhXG4gKiBKYXZhU2NyaXB0IGFycmF5LCBidXQgaXQgZG9lcyBub3QgdXNlIGB1bnNoaWZ0YCB0byB0YWtlIGVsZW1lbnRzIG9mZiB0aGVcbiAqIGFycmF5IGJlY2F1c2UgdW5zaGlmdCBjYXVzZXMgZWxlbWVudHMgdG8gYmUgY29waWVkIGV2ZXJ5IHRpbWUgaXQncyB1c2VkLlxuICogSW5zdGVhZCwgYSBwb2ludGVyIGlzIG1haW50YWluZWQgdGhhdCBrZWVwcyB0cmFjayBvZiB0aGUgbG9jYXRpb24gb2YgdGhlIG5leHRcbiAqIGVsZW1lbnQgdG8gYmUgZGVxdWV1ZWQsIGFuZCB3aGVuIHRoYXQgZGVxdWV1ZSBoYXBwZW5zLCB0aGUgcG9pbnRlciBzaW1wbHlcbiAqIG1vdmVzLiBXaGVuIHRoZSBlbXB0eSBzcGFjZSBhdCB0aGUgaGVhZCBvZiB0aGUgYXJyYXkgZ2V0cyBsYXJnZSBlbm91Z2gsIGl0J3NcbiAqIHJlbW92ZWQgYnkgYSBzaW5nbGUgc2xpY2Ugb3BlcmF0aW9uLlxuICpcbiAqIFB1dHRpbmcgZWxlbWVudHMgaW50byB0aGUgcXVldWUgaXMganVzdCBkb25lIHdpdGggYSBiYXNpYyBgcHVzaGAsIHdoaWNoICppcypcbiAqIGhpZ2hseSBlZmZpY2llbnQuXG4gKlxuICogVGhpcyB0eXBlIG9mIHF1ZXVlIGlzIHBvc3NpYmxlIGluIEphdmFTY3JpcHQgYmVjYXVzZSBKUyBhcnJheXMgYXJlIHJlc2l6YWJsZS5cbiAqIEluIGxhbmd1YWdlcyB3aXRoIGZpeGVkLXNpemUgYXJyYXlzLCBhIHJlc2l6aW5nIG9wZXJhdGlvbiB3b3VsZCBoYXZlIHRvIGJlXG4gKiBydW4gZWFjaCB0aW1lIHRoZSBxdWV1ZSBmaWxscy5cbiAqXG4gKiBAbmFtZXNwYWNlIFF1ZXVlXG4gKiBAcHJpdmF0ZVxuICovXG5cbi8qKlxuICogVGhlIHZhbHVlIHJldHVybmVkIHdoZW4gYSBxdWV1ZSBpcyByZWFkIHdoZW4gaXQncyBlbXB0eS5cbiAqXG4gKiBUaGlzIHNwZWNpYWwgdmFsdWUgaXMgdXNlZCBiZWNhdXNlIGBudWxsYCBhbmQgYHVuZGVmaW5lZGAgYXJlIHBvc3NpYmxlXG4gKiBsZWdpdGltYXRlIHZhbHVlcyB0aGF0IGNhbiBiZSBzdG9yZWQgaW4gYSBxdWV1ZS4gQW5vdGhlciBvcHRpb24gaXMgdG8gdXNlXG4gKiBzb21lIGtpbmQgb2YgYE1heWJlYCBvciBgT3B0aW9uYCB0eXBlLCBidXQgdGhhdCByZXF1aXJlcyBtb3JlIGVmZm9ydCBvbiB0aGVcbiAqIHBhcnQgb2YgdGhlIGVuZCB1c2VyIHRvIGludGVyZmFjZSB3aXRoLlxuICpcbiAqIEB0eXBlIHtTeW1ib2x9XG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICovXG5jb25zdCBFTVBUWSA9IFN5bWJvbChcIkVNUFRZXCIpO1xuXG4vKipcbiAqIEEgbWFya2VyIHByb3BlcnR5IG5hbWUgdG8gaW5kaWNhdGUgdGhhdCBhbiBvYmplY3QgaXMgaW4gZmFjdCBhIHF1ZXVlLlxuICpcbiAqIEEgcXVldWUgaGFzIGEgcHJvcGVydHkgd2l0aCB0aGlzIG5hbWUgd2hvc2UgcmVhZG9ubHkgdmFsdWUgaXMgc2V0IHRvIGB0cnVlYC5cbiAqIFRoaXMgaXMgbm90IG1lYW50IHRvIGJlIHJlYWQgZXhjZXB0IGJ5IHRoZVxuICogYHtAbGluayBtb2R1bGU6cXVldWUuaXNRdWV1ZXxpc1F1ZXVlfWAgZnVuY3Rpb24uXG4gKlxuICogQHR5cGUge1N5bWJvbH1cbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IFFVRVVFID0gU3ltYm9sKFwiUVVFVUVcIik7XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGFuIG9iamVjdCBpcyBhIHF1ZXVlLlxuICpcbiAqIEBwYXJhbSB7Kn0gb2JqIFRoZSBvYmplY3QgdG8gYmUgdGVzdGVkLlxuICogQHJldHVybiB7Ym9vbGVhbn0gRWl0aGVyIGB0cnVlYCBpZiB0aGUgb2JqZWN0IGlzIGEgcXVldWUgb3IgYGZhbHNlYCBpZiBpdCBpc1xuICogbm90LlxuICovXG5mdW5jdGlvbiBpc1F1ZXVlKG9iaikge1xuICByZXR1cm4gISFvYmo/LltRVUVVRV07XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBxdWV1ZS4gVGhpcyBxdWV1ZSBpcyBjcmVhdGVkIGVtcHR5LCB3aXRoIGEgYmFja2luZyBhcnJheSBvZlxuICogbGVuZ3RoIDAuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3AvcXVldWVcbiAqIEByZXR1cm5zIHttb2R1bGU6Y3NwL3F1ZXVlflF1ZXVlfSBBIG5ldywgZW1wdHkgcXVldWUuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBxdWV1ZSgpIHtcbiAgcmV0dXJuIE9iamVjdC5jcmVhdGUobnVsbCwge1xuICAgIHN0b3JlOiB7XG4gICAgICB2YWx1ZTogW10sXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0sXG5cbiAgICBwb2ludGVyOiB7XG4gICAgICB2YWx1ZTogMCxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSxcblxuICAgIFtRVUVVRV06IHtcbiAgICAgIHZhbHVlOiB0cnVlXG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBudW1iZXIgb2YgZWxlbWVudHMgc3RvcmVkIGluIGEgcXVldWUuIFRoaXMgbWF5IG9yIG1heSBub3QgZXF1YWxcbiAqIHRoZSBsZW5ndGggb2YgdGhlIGJhY2tpbmcgc3RvcmUsIGFzIHRoZXJlIGlzIG9mdGVuIGVtcHR5IHNwYWNlIGF0IHRoZSBoZWFkIG9mXG4gKiB0aGUgYmFja2luZyBzdG9yZS5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcC9xdWV1ZVxuICogQHBhcmFtIHttb2R1bGU6Y3NwL3F1ZXVlflF1ZXVlfSBxdWV1ZSBUaGUgcXVldWUgd2hvc2UgaXRlbXMgYXJlIGJlaW5nXG4gKiAgICAgY291bnRlZC5cbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIG51bWJlciBvZiBpdGVtcyBpbiB0aGUgcXVldWUuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjb3VudChxdWV1ZSkge1xuICByZXR1cm4gcXVldWUuc3RvcmUubGVuZ3RoIC0gcXVldWUucG9pbnRlcjtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgYSBxdWV1ZSBpcyBlbXB0eS5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcC9xdWV1ZVxuICogQHBhcmFtIHttb2R1bGU6Y3NwL3F1ZXVlflF1ZXVlfSBxdWV1ZSBUaGUgcXVldWUgYmVpbmcgY2hlY2tlZCBmb3IgZW1wdGluZXNzLlxuICogQHJldHVybiB7Ym9vbGVhbn0gRWl0aGVyIGB0cnVlYCBpZiB0aGUgcXVldWUgaXMgZW1wdHkgb3IgYGZhbHNlYCBpZiBpdCBpc1xuICogICAgIG5vdC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGlzRW1wdHkocXVldWUpIHtcbiAgcmV0dXJuIHF1ZXVlLnN0b3JlLmxlbmd0aCA9PT0gMDtcbn1cblxuLyoqXG4gKiBBZGRzIGFuIGl0ZW0gdG8gYSBxdWV1ZS5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcC9xdWV1ZVxuICogQHBhcmFtIHttb2R1bGU6Y3NwL3F1ZXVlflF1ZXVlfSBxdWV1ZSBUaGUgcXVldWUgd2hpY2ggaXMgaGF2aW5nIGFuIGl0ZW0gYWRkZWRcbiAqICAgICB0byBpdC5cbiAqIEBwYXJhbSB7Kn0gaXRlbSBUaGUgaXRlbSBiZWluZyBhZGRlZCB0byB0aGUgcXVldWUuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBlbnF1ZXVlKHF1ZXVlLCBpdGVtKSB7XG4gIHF1ZXVlLnN0b3JlLnB1c2goaXRlbSk7XG59XG5cbi8qKlxuICogUmVtb3ZlcyBhbiBpdGVtIGZyb20gYSBxdWV1ZSBhbmQgcmV0dXJucyB0aGF0IGl0ZW0uIElmIHRoZSByZW1vdmFsIGNhdXNlcyB0aGVcbiAqIGFtb3VudCBvZiBlbXB0eSBzcGFjZSBhdCB0aGUgaGVhZCBvZiB0aGUgYmFja2luZyBzdG9yZSB0byBleGNlZWQgYSB0aHJlc2hvbGQsXG4gKiB0aGF0IGVtcHR5IHNwYWNlIGlzIHJlbW92ZWQuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3AvcXVldWVcbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC9xdWV1ZX5RdWV1ZX0gcXVldWUgVGhlIHF1ZXVlIHdob3NlIG9sZGVzdCBpdGVtIGlzIHRvIGJlXG4gKiAgICAgcmVtb3ZlZC5cbiAqIEByZXR1cm4geyp9IFRoZSBvbGRlc3Qgc3RvcmVkIGl0ZW0gaW4gdGhlIHF1ZXVlLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZGVxdWV1ZShxdWV1ZSkge1xuICBpZiAocXVldWUuc3RvcmUubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIEVNUFRZO1xuICB9XG5cbiAgY29uc3QgaXRlbSA9IHF1ZXVlLnN0b3JlW3F1ZXVlLnBvaW50ZXJdO1xuICAvLyBSZW1vdmVzIHRoZSBpdGVtcyBpbiB0aGUgYmFja2luZyBzdG9yZSBiZWZvcmUgdGhlIGN1cnJlbnQgcG9pbnRlciwgaWYgdGhlcmVcbiAgLy8gaXMgZW5vdWdoIFwiZW1wdHlcIiBzcGFjZSBiZWZvcmUgdGhlIHBvaW50ZXIgdG8ganVzdGlmeSBpdCAoaS5lLiwgdGhlIHVudXNlZFxuICAvLyBwb3J0aW9uIGlzIGF0IGxlYXN0IGhhbGYgYXMgbGFyZ2UgYXMgdGhlIHVzZWQgcG9ydGlvbilcbiAgaWYgKCsrcXVldWUucG9pbnRlciAqIDIgPj0gcXVldWUuc3RvcmUubGVuZ3RoKSB7XG4gICAgcXVldWUuc3RvcmUgPSBxdWV1ZS5zdG9yZS5zbGljZShxdWV1ZS5wb2ludGVyKTtcbiAgICBxdWV1ZS5wb2ludGVyID0gMDtcbiAgfVxuICByZXR1cm4gaXRlbTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBuZXh0IGl0ZW0gaW4gYSBxdWV1ZSB3aXRob3V0IHJlbW92aW5nIGl0LlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwL3F1ZXVlXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AvcXVldWV+UXVldWV9IHF1ZXVlIFRoZSBxdWV1ZSB3aG9zZSBvbGRlc3QgaXRlbSBpcyB0byBiZVxuICogICAgIHBlZWtlZCBhdC5cbiAqIEByZXR1cm4geyp9IFRoZSBvbGRlc3QgaXRlbSBzdG9yZWQgaW4gdGhlIHF1ZXVlLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gcGVlayhxdWV1ZSkge1xuICByZXR1cm4gcXVldWUuc3RvcmUubGVuZ3RoID09PSAwID8gRU1QVFkgOiBxdWV1ZS5zdG9yZVtxdWV1ZS5wb2ludGVyXTtcbn1cblxuLyoqXG4gKiBGaWx0ZXJzIG91dCBhbnkgaXRlbSBpbiBhIHF1ZXVlIHRoYXQgZG9lcyBub3QgY2F1c2UgdGhlIHN1cHBsaWVkIHByZWRpY2F0ZVxuICogZnVuY3Rpb24gdG8gcmV0dXJuIGB0cnVlYCB3aGVuIHBhc3NlZCB0aGF0IGl0ZW0uIFRoaXMgaXMgbm90IGV4YWN0bHkgYVxuICogZ2VuZXJhbCBwdXJwb3NlIHF1ZXVlIG9wZXJhdGlvbiwgYnV0IHdlIG5lZWQgaXQgd2l0aCBjaGFubmVscyB0aGF0IHdpbGxcbiAqIG9jY2FzaW9uYWxseSB3YW50IHRvIGdldCByaWQgb2YgaW5hY3RpdmUgaGFuZGxlcnMuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3AvcXVldWVcbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC9xdWV1ZX5RdWV1ZX0gcXVldWUgVGhlIHF1ZXVlIGJlaW5nIGZpbHRlcmVkLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm4gVGhlIHByZWRpY2F0ZSBmdW5jdGlvbiB0aGF0IGRldGVybWluZXMgd2hldGhlciBhblxuICogICAgIGVsZW1lbnQgcmVtYWlucyBpbiB0aGUgcXVldWUuXG4gKi9cbmZ1bmN0aW9uIGZpbHRlcihxdWV1ZSwgcHJlZGljYXRlKSB7XG4gIGZvciAobGV0IGkgPSAwLCBlbmQgPSBjb3VudChxdWV1ZSk7IGkgPCBlbmQ7IGkrKykge1xuICAgIGNvbnN0IGl0ZW0gPSBkZXF1ZXVlKHF1ZXVlKTtcbiAgICBpZiAocHJlZGljYXRlKGl0ZW0pKSB7XG4gICAgICBlbnF1ZXVlKHF1ZXVlLCBpdGVtKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IHtcbiAgRU1QVFksXG4gIHF1ZXVlLFxuICBpc1F1ZXVlLFxuICBjb3VudCxcbiAgaXNFbXB0eSxcbiAgZW5xdWV1ZSxcbiAgZGVxdWV1ZSxcbiAgcGVlayxcbiAgZmlsdGVyXG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG5cbi8qKlxuICogQSBzZXQgb2YgdXRpbGl0eSBmdW5jdGlvbnMgdGhhdCBnaXZlIG9uZSBvciBtb3JlIGNoYW5uZWxzIHNvbWUgZXh0cmFcbiAqIGZ1bmN0aW9uYWxpdHkuIEVhY2ggb2YgdGhlc2UgYWNjZXB0IG9uZSBvciBtb3JlIHtAbGluayBtb2R1bGU6Y3NwLkNoYW5uZWx9XG4gKiBvYmplY3RzIGFuZCB0aGVuIGNvbWJpbmUgb3IgbWFuaXB1bGF0ZSB0aGVtIGluIChob3BlZnVsbHkpIHVzZWZ1bCB3YXlzLCBzdWNoXG4gKiBhcyBtZXJnaW5nIHRoZW0sIHNwbGl0dGluZyB0aGVtLCByZWR1Y2luZyB2YWx1ZXMgdGhleSByZWNlaXZlIHRvIGEgc2luZ2xlXG4gKiB2YWx1ZSwgb3IgdGhyb3R0bGluZyB0aGVtIHNvIHRoYXQgdGhleSBvbmx5IHByb2R1Y2Ugb25lIHJlc3VsdCBpbiBhIGdpdmVuXG4gKiB0aW1lIHBlcmlvZC5cbiAqXG4gKiBAbW9kdWxlIG9wc1xuICovXG5cbmV4cG9ydCB7XG4gIG1hcCxcbiAgbWVyZ2UsXG4gIHBhcnRpdGlvbixcbiAgcGlwZSxcbiAgc3BsaXQsXG4gIHRhcCxcbiAgdW50YXAsXG4gIHVudGFwQWxsXG59IGZyb20gXCJtb2R1bGVzL2Zsb3dcIjtcbmV4cG9ydCB7IHJlZHVjZSwgdG9DaGFubmVsLCB0b0FycmF5IH0gZnJvbSBcIm1vZHVsZXMvY29udmVyc2lvblwiO1xuZXhwb3J0IHsgZGVib3VuY2UsIHRocm90dGxlIH0gZnJvbSBcIm1vZHVsZXMvdGltaW5nXCI7XG5cbi8qKlxuICogQSBmdW5jdGlvbiB0aGF0IHRha2VzIGEgc2luZ2xlIHZhbHVlIGFuZCwgZGVwZW5kaW5nIG9uIHdoZXRoZXIgdGhhdCB2YWx1ZVxuICogbWVldHMgdGhlIGZ1bmN0aW9uJ3MgY3JpdGVyaWEgZm9yIHBhc3NpbmcsIHJldHVybnMgYHRydWVgIG9yIGBmYWxzZWAuXG4gKlxuICogQGNhbGxiYWNrIFByZWRpY2F0ZVxuICogQG1lbWJlcm9mIG1vZHVsZTpvcHNcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3QuIFdoZXRoZXIgb3Igbm90IHRoZSB2YWx1ZSBwYXNzZXMgdGhlIHRlc3RcbiAqICAgICBkZXBlbmRzIG9uIHRoZSBjcml0ZXJpYSBlc3RhYmxpc2hlZCBieSB0aGUgcHJlZGljYXRlLlxuICogQHJldHVybiB7Ym9vbGVhbn0gRWl0aGVyIGB0cnVlYCBpZiB0aGUgdmFsdWUgcGFzc2VzIG9yIGBmYWxzZWAgaWYgaXQgZG9lc24ndC5cbiAqL1xuXG4vKipcbiAqIEEgZnVuY3Rpb24gdGhhdCBtYXBzIGl0cyBpbnB1dChzKSB0byBhbiBvdXRwdXQgdmFsdWUuIEl0IHRha2VzIGEgdmFyaWFibGVcbiAqIG51bWJlciBvZiBpbnB1dCB2YWx1ZXMgYW5kIGNhbGN1bGF0ZXMgYW4gb3V0cHV0IHZhbHVlIGZyb20gdGhlbS5cbiAqXG4gKiBAY2FsbGJhY2sgTWFwcGVyXG4gKiBAbWVtYmVyb2YgbW9kdWxlOm9wc1xuICogQHBhcmFtIHsuLi4qfSB2YWx1ZXMgVGhlIGlucHV0IHZhbHVlcy5cbiAqIEByZXR1cm4geyp9IEFuIG91dHB1dCB2YWx1ZSBjYWxjdWxhdGVkIGZyb20gdGhlIGlucHV0IHZhbHVlcy5cbiAqL1xuXG4vKipcbiAqIEEgZnVuY3Rpb24gdGhhdCBpbnRlZ3JhdGVzIG9uZSBvZiBpdHMgdmFsdWVzIGludG8gdGhlIG90aGVyLiBJdCdzIHVzZWQgZm9yXG4gKiByZWR1Y2luZyBjaGFubmVsIHZhbHVlcyBpbnRvIGEgc2luZ2xlIHZhbHVlLlxuICpcbiAqIEBjYWxsYmFjayBSZWR1Y2VyXG4gKiBAbWVtYmVyb2YgbW9kdWxlOm9wc1xuICogQHBhcmFtIHsqfSBhY2MgVGhlIGN1cnJlbnQgYWNjdW11bGF0ZWQgdmFsdWUuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSBuZXcgdmFsdWUgdGhhdCBuZWVkcyB0byBiZSBpbnRlZ3JhdGVkIGludG8gdGhlXG4gKiAgICAgYWNjdW11bGF0ZWQgdmFsdWUuXG4gKiBAcmV0dXJuIHsqfSBBIG5ldyBhY2N1bXVsYXRlZCB2YWx1ZSwgcmVzdWx0aW5nIGZyb20gaW50ZWdyYXRpbmcgYHZhbHVlYCBpbnRvXG4gKiAgICAgdGhlIG9yaWdpbmFsIGFjY3VtdWxhdGVkIHZhbHVlLlxuICovXG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuLyoqXG4gKiBVdGlsaXR5IGZ1bmN0aW9ucyB1c2VkIGJ5IG1vcmUgdGhhbiBvbmUgb3RoZXIgbW9kdWxlLlxuICpcbiAqIEBtb2R1bGUgb3BzL2NvbW1vblxuICogQHByaXZhdGVcbiAqL1xuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgdmFsdWUgcGFzc2VkIGlzIGEgZmluaXRlIG51bWJlci5cbiAqXG4gKiBAcGFyYW0geyp9IHggVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybiB7Ym9vbGVhbn0gRWl0aGVyIGB0cnVlYCBpZiB0aGUgdmFsdWUgaXMgYSBmaW5pdGUgbnVtYmVyIG9yIGBmYWxzZWBcbiAqICAgICBpZiBpdCBpcyBub3QuXG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNOdW1iZXIoeCkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHgpID09PSBcIltvYmplY3QgTnVtYmVyXVwiICYmIGlzRmluaXRlKHgpO1xufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG5cbi8qKlxuICogQSBzZXQgb2YgY2hhbm5lbCB1dGlsaXRpZXMgZm9yIGNvbnZlcnRpbmcgY2hhbm5lbHMgaW50byBvdGhlciBraW5kcyBvZiBkYXRhLFxuICogYW5kIHZpY2UgdmVyc2EuXG4gKlxuICogQG1vZHVsZSBvcHMvY29udmVyc2lvblxuICogQHByaXZhdGVcbiAqL1xuXG5pbXBvcnQgeyBnbywgY2hhbiwgc2VuZCwgc2VuZEFzeW5jLCBjbG9zZSB9IGZyb20gXCJAY2hhbmtvL2NzcFwiO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBzaW5nbGUgdmFsdWUgZnJvbSBhIGNoYW5uZWwgYnkgcnVubmluZyBpdHMgdmFsdWVzIHRocm91Z2ggYVxuICogcmVkdWNpbmcgZnVuY3Rpb24uXG4gKlxuICogRm9yIGV2ZXJ5IHZhbHVlIHB1dCBvbnRvIHRoZSBpbnB1dCBjaGFubmVsLCB0aGUgcmVkdWNpbmcgZnVuY3Rpb24gaXMgY2FsbGVkXG4gKiB3aXRoIHR3byBwYXJhbWV0ZXJzOiB0aGUgYWNjdW11bGF0b3IgdGhhdCBob2xkcyB0aGUgcmVzdWx0IG9mIHRoZSByZWR1Y3Rpb25cbiAqIHNvIGZhciwgYW5kIHRoZSBuZXcgaW5wdXQgdmFsdWUuIFRoZSBpbml0aWFsIHZhbHVlIG9mIHRoZSBhY2N1bXVsYXRvciBpcyB0aGVcbiAqIHRoaXJkIHBhcmFtZXRlciB0byBgcmVkdWNlYC4gVGhlIHJlZHVjdGlvbiBpcyBub3QgY29tcGxldGUgdW50aWwgdGhlIGlucHV0XG4gKiBjaGFubmVsIGNsb3Nlcy5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgYSBjaGFubmVsLiBXaGVuIHRoZSBmaW5hbCByZWR1Y2VkIHZhbHVlIGlzIHByb2R1Y2VkLCBpdFxuICogaXMgcHV0IG9udG8gdGhpcyBjaGFubmVsLCBhbmQgd2hlbiB0aGF0IHZhbHVlIGlzIHRha2VuIGZyb20gaXQsIHRoZSBjaGFubmVsXG4gKiBpcyBjbG9zZWQuXG4gKlxuICogYGBgXG4gKiBpbXBvcnQgeyBnbywgY2hhbiwgc2VuZCwgcmVjdiwgY2xvc2UgfSBmcm9tIFwiQGNzcFwiO1xuICogaW1wb3J0IHsgcmVkdWNlIH0gZnJvbSBcIkBvcHNcIjtcbiAqXG4gKiBjb25zdCBpbnB1dCA9IGNoYW4oKTtcbiAqIGNvbnN0IG91dHB1dCA9IHJlZHVjZSgoYWNjLCB2YWx1ZSkgPT4gYWNjICsgdmFsdWUsIGlucHV0LCAwKTtcbiAqXG4gKiBnbyhhc3luYyAoKSA9PiB7XG4gKiAgIGF3YWl0IHNlbmQoaW5wdXQsIDEpO1xuICogICBhd2FpdCBzZW5kKGlucHV0LCAyKTtcbiAqICAgYXdhaXQgc2VuZChpbnB1dCwgMyk7XG4gKiAgIGNsb3NlKGlucHV0KTtcbiAqIH0pO1xuICpcbiAqIGdvKGFzeW5jICgpID0+IHtcbiAqICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVjdihvdXRwdXQpO1xuICogICBjb25zb2xlLmxvZyhvdXRwdXQpOyAgICAgICAgICAgICAgICAgIC8vIC0+IDZcbiAqIH0pO1xuICpcbiAqIGBgYFxuICpcbiAqIE5vdGUgdGhhdCB0aGUgaW5wdXQgY2hhbm5lbCAqbXVzdCogYmUgY2xvc2VkIGF0IHNvbWUgcG9pbnQsIG9yIG5vIHZhbHVlIHdpbGxcbiAqIGV2ZXIgYXBwZWFyIG9uIHRoZSBvdXRwdXQgY2hhbm5lbC4gVGhlIGNsb3Npbmcgb2YgdGhlIGNoYW5uZWwgaXMgd2hhdFxuICogc2lnbmlmaWVzIHRoYXQgdGhlIHJlZHVjdGlvbiBzaG91bGQgYmUgY29tcGxldGVkLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6b3BzXG4gKiBAcGFyYW0ge21vZHVsZTpvcHMuUmVkdWNlcn0gZm4gVGhlIHJlZHVjZXIgZnVuY3Rpb24gcmVzcG9uc2libGUgZm9yIHR1cm5pbmdcbiAqICAgICB0aGUgc2VyaWVzIG9mIGNoYW5uZWwgdmFsdWVzIGludG8gYSBzaW5nbGUgb3V0cHV0IHZhbHVlLlxuICogQHBhcmFtIHttb2R1bGU6Y3NwLkNoYW5uZWx9IGNoYW5uZWwgVGhlIGNoYW5uZWwgd2hvc2UgdmFsdWVzIGFyZSBiZWluZ1xuICogICAgIHJlZHVjZWQgaW50byBhIHNpbmdsZSBvdXRwdXQgdmFsdWUuXG4gKiBAcGFyYW0geyp9IGluaXQgVGhlIGluaXRpYWwgdmFsdWUgdG8gZmVlZCBpbnRvIHRoZSByZWR1Y2VyIGZ1bmN0aW9uIGZvciB0aGVcbiAqICAgICBmaXJzdCByZWR1Y3Rpb24gc3RlcC5cbiAqIEByZXR1cm4ge21vZHVsZTpjc3AuQ2hhbm5lbH0gQSBjaGFubmVsIHRoYXQgd2lsbCwgd2hlbiB0aGUgaW5wdXQgY2hhbm5lbFxuICogICAgIGNsb3NlcywgaGF2ZSB0aGUgcmVkdWNlZCB2YWx1ZSBwdXQgaW50byBpdC4gV2hlbiB0aGlzIHZhbHVlIGlzIHRha2VuLCB0aGVcbiAqICAgICBjaGFubmVsIHdpbGwgYXV0b21hdGljYWxseSBjbG9zZS5cbiAqL1xuZnVuY3Rpb24gcmVkdWNlKGZuLCBjaGFubmVsLCBpbml0KSB7XG4gIGNvbnN0IG91dHB1dCA9IGNoYW4oKTtcblxuICBnbyhhc3luYyAoKSA9PiB7XG4gICAgbGV0IGFjYyA9IGluaXQ7XG4gICAgZm9yIGF3YWl0IChjb25zdCB2YWx1ZSBvZiBjaGFubmVsKSB7XG4gICAgICBhY2MgPSBmbihhY2MsIHZhbHVlKTtcbiAgICB9XG4gICAgc2VuZEFzeW5jKG91dHB1dCwgYWNjLCAoKSA9PiBjbG9zZShvdXRwdXQpKTtcbiAgfSk7XG5cbiAgcmV0dXJuIG91dHB1dDtcbn1cblxuLyoqXG4gKiBTZW5kcyBhbGwgdmFsdWVzIGZyb20gYW4gaXRlcmFibGUgdG8gdGhlIHN1cHBsaWVkIGNoYW5uZWwuXG4gKlxuICogSWYgbm8gY2hhbm5lbCBpcyBwYXNzZWQgdG8gdGhpcyBmdW5jdGlvbiwgYSBuZXcgY2hhbm5lbCBpcyBjcmVhdGVkLiBJblxuICogZWZmZWN0LCB0aGlzIGRpcmVjdGx5IGNvbnZlcnRzIGFuIGl0ZXJhYmxlIGludG8gYSBjaGFubmVsIHdpdGggdGhlIHNhbWVcbiAqIHZhbHVlcyBvbiBpdC5cbiAqXG4gKiBUaGUgY2hhbm5lbCBpcyBjbG9zZWQgYWZ0ZXIgdGhlIGZpbmFsIGl0ZXJhYmxlIHZhbHVlIGlzIHNlbnQgdG8gaXQuXG4gKlxuICogVGhpcyBmdW5jdGlvbiB3aWxsIGNvbnZlcnQgYW55IEphdmFTY3JpcHQgb2JqZWN0IHRoYXQgaW1wbGVtZW50cyB0aGUgaXRlcmFibGVcbiAqIHByb3RvY29sLiBJbiBvdGhlciB3b3JkcywgaWYgaXQgd29ya3MgaW4gYSBgZm9yLi4ub2ZgIHN0YXRlbWVudCwgaXQgd2lsbCB3b3JrXG4gKiBoZXJlLlxuICpcbiAqIGBgYFxuICogaW1wb3J0IHsgZ28sIGNoYW4sIHJlY3YsIGlzQ2xvc2VkIH0gZnJvbSBcIkBjc3BcIjtcbiAqIGltcG9ydCB7IHRvQ2hhbm5lbCB9IGZyb20gXCJAb3BzXCI7XG4gKlxuICogY29uc3QgaW5wdXQgPSBbMSwgMiwgM107XG4gKiBjb25zdCBvdXRwdXQgPSB0b0NoYW5uZWwoaW5wdXQpO1xuICpcbiAqIGdvKGFzeW5jICgpID0+IHtcbiAqICAgY29uc29sZS5sb2coYXdhaXQgcmVjdihvdXRwdXQpKTsgICAgIC8vIC0+IDFcbiAqICAgY29uc29sZS5sb2coYXdhaXQgcmVjdihvdXRwdXQpKTsgICAgIC8vIC0+IDJcbiAqICAgY29uc29sZS5sb2coYXdhaXQgcmVjdihvdXRwdXQpKTsgICAgIC8vIC0+IDNcbiAqICAgY29uc29sZS5sb2coaXNDbG9zZWQob3V0cHV0KSk7ICAgICAgIC8vIC0+IHRydWVcbiAqIH0pO1xuICogYGBgXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpvcHNcbiAqIEBwYXJhbSB7aXRlcmFibGV9IGl0ZXJhYmxlIFRoZSBpdGVyYWJsZSBjb250YWluaW5nIHRoZSB2YWx1ZXMgdG8gYmUgc2VudCB0b1xuICogICAgIHRoZSBjaGFubmVsLlxuICogQHBhcmFtIHttb2R1bGU6Y3NwLkNoYW5uZWx9IFtjaGFubmVsXSBUaGUgY2hhbm5lbCBvbnRvIHdoaWNoIHRvIHB1dCBhbGwgb2ZcbiAqICAgICB0aGUgYXJyYXkgZWxlbWVudHMuIElmIHRoaXMgaXMgbm90IHByZXNlbnQsIGEgbmV3IGNoYW5uZWwgd2lsbCBiZVxuICogICAgIGNyZWF0ZWQuXG4gKiBAcmV0dXJuIHttb2R1bGU6Y3NwLkNoYW5uZWx9IHRoZSBjaGFubmVsIG9udG8gd2hpY2ggdGhlIGFycmF5IGVsZW1lbnRzIGFyZVxuICogICAgIHB1dC4gVGhpcyBpcyB0aGUgc2FtZSBhcyB0aGUgaW5wdXQgY2hhbm5lbCwgYnV0IGlmIG5vIGlucHV0IGNoYW5uZWwgaXNcbiAqICAgICBzcGVjaWZpZWQsIHRoaXMgd2lsbCBiZSBhIG5ldyBjaGFubmVsLiBJdCB3aWxsIGNsb3NlIHdoZW4gdGhlIGZpbmFsIHZhbHVlXG4gKiAgICAgaXMgdGFrZW4gZnJvbSBpdC5cbiAqL1xuZnVuY3Rpb24gdG9DaGFubmVsKGl0ZXJhYmxlLCBjaGFubmVsID0gY2hhbihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gIGdvKGFzeW5jICgpID0+IHtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgaXRlcmFibGUpIHtcbiAgICAgIGF3YWl0IHNlbmQoY2hhbm5lbCwgaXRlbSk7XG4gICAgfVxuICAgIGNsb3NlKGNoYW5uZWwpO1xuICB9KTtcblxuICByZXR1cm4gY2hhbm5lbDtcbn1cblxuLyoqXG4gKiBSZWNlaXZlcyBhbGwgb2YgdGhlIHZhbHVlcyBmcm9tIGEgY2hhbm5lbCBhbmQgcHVzaGVzIHRoZW0gaW50byBhbiBhcnJheS5cbiAqXG4gKiBJZiBubyBhcnJheSBpcyBwYXNzZWQgdG8gdGhpcyBmdW5jdGlvbiwgYSBuZXcgKGVtcHR5KSBvbmUgaXMgY3JlYXRlZC4gSW5cbiAqIGVmZmVjdCwgdGhpcyBkaXJlY3RseSBjb252ZXJ0cyBhIGNoYW5uZWwgaW50byBhbiBhcnJheSB3aXRoIHRoZSBzYW1lIHZhbHVlcy5cbiAqIEVpdGhlciB3YXksIHRoaXMgb3BlcmF0aW9uIGNhbm5vdCBjb21wbGV0ZSB1bnRpbCB0aGUgaW5wdXQgY2hhbm5lbCBpcyBjbG9zZWQuXG4gKlxuICogVGhpcyBmdW5jdGlvbiByZXR1cm5zIGEgY2hhbm5lbC4gV2hlbiB0aGUgZmluYWwgYXJyYXkgaXMgcHJvZHVjZWQsIGl0IGlzIHNlbnRcbiAqIHRvIHRoaXMgY2hhbm5lbCwgYW5kIHdoZW4gdGhhdCB2YWx1ZSBpcyByZWNlaXZlZCBmcm9tIGl0LCB0aGUgY2hhbm5lbCBpc1xuICogY2xvc2VkLlxuICpcbiAqIGBgYFxuICogaW1wb3J0IHsgZ28sIGNoYW4sIHNlbmQsIHJlY3YsIGNsb3NlIH0gZnJvbSBcIkBjc3BcIjtcbiAqIGltcG9ydCB7IHRvQXJyYXkgfSBmcm9tIFwiQG9wc1wiO1xuICpcbiAqIGNvbnN0IGlucHV0ID0gY2hhbigpO1xuICogY29uc3Qgb3V0cHV0ID0gdG9BcnJheShpbnB1dCk7XG4gKlxuICogZ28oYXN5bmMgKCkgPT4ge1xuICogICBhd2FpdCBzZW5kKGlucHV0LCAxKTtcbiAqICAgYXdhaXQgc2VuZChpbnB1dCwgMik7XG4gKiAgIGF3YWl0IHNlbmQoaW5wdXQsIDMpO1xuICogICBjbG9zZShpbnB1dCk7XG4gKiB9KTtcbiAqXG4gKiBnbyhhc3luYyAoKSA9PiB7XG4gKiAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlY3Yob3V0cHV0KTtcbiAqICAgY29uc29sZS5sb2cocmVzdWx0KTsgICAgICAgICAgICAgICAgICAgICAvLyAtPiBbMSwgMiwgM11cbiAqIH0pO1xuICogYGBgXG4gKlxuICogTm90ZSB0aGF0IHRoZSBpbnB1dCBjaGFubmVsICptdXN0KiBiZSBjbG9zZWQgYXQgc29tZSBwb2ludCwgb3Igbm8gdmFsdWUgd2lsbFxuICogZXZlciBhcHBlYXIgb24gdGhlIG91dHB1dCBjaGFubmVsLiBUaGUgY2xvc2luZyBvZiB0aGUgY2hhbm5lbCBpcyB3aGF0XG4gKiBzaWduaWZpZXMgdGhhdCBhbGwgb2YgdGhlIHZhbHVlcyBuZWVkZWQgdG8gbWFrZSB0aGUgYXJyYXkgYXJlIG5vdyBhdmFpbGFibGUuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpvcHNcbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5DaGFubmVsfSBjaGFubmVsIFRoZSBjaGFubmVsIGZyb20gd2hpY2ggdmFsdWVzIGFyZVxuICogICAgIHJlY2VpdmVkIHRvIHB1dCBpbnRvIHRoZSBhcnJheS5cbiAqIEBwYXJhbSB7YXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIHB1dCB0aGUgY2hhbm5lbCB2YWx1ZXMgaW50by4gSWYgdGhpcyBpc1xuICogICAgIG5vdCBwcmVzZW50LCBhIG5ldywgZW1wdHkgYXJyYXkgd2lsbCBiZSBjcmVhdGVkLlxuICogQHJldHVybiB7bW9kdWxlOmNzcC5DaGFubmVsfSBBIGNoYW5uZWwgdGhhdCB3aWxsLCB3aGVuIHRoZSBpbnB1dCBjaGFubmVsXG4gKiAgICAgY2xvc2VzLCBoYXZlIHRoZSBhcnJheSBvZiBjaGFubmVsIHZhbHVlcyBwdXQgb250byBpdC4gV2hlbiB0aGlzIGFycmF5IGlzXG4gKiAgICAgcmVjZWl2ZWQsIHRoZSBjaGFubmVsIHdpbGwgYXV0b21hdGljYWxseSBjbG9zZS5cbiAqL1xuZnVuY3Rpb24gdG9BcnJheShjaGFubmVsLCBhcnJheSA9IFtdKSB7XG4gIHJldHVybiByZWR1Y2UoXG4gICAgKGFjYywgaW5wdXQpID0+IHtcbiAgICAgIGFjYy5wdXNoKGlucHV0KTtcbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSxcbiAgICBjaGFubmVsLFxuICAgIGFycmF5XG4gICk7XG59XG5cbmV4cG9ydCB7IHJlZHVjZSwgdG9DaGFubmVsLCB0b0FycmF5IH07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuLyoqXG4gKiBBIHNldCBvZiBjaGFubmVsIG9wZXJhdGlvbiBmdW5jdGlvbnMgZm9yIHJvdXRpbmcgY2hhbm5lbHMgdG8gb3RoZXIgY2hhbm5lbHNcbiAqIGluIGRpZmZlcmVudCB3YXlzLlxuICpcbiAqIEluIGVhY2ggb2YgdGhlc2UgZnVuY3Rpb25zLCB0aGUgc291cmNlIGNoYW5uZWwgd2lsbCBub3QgYmUgYXZhaWxhYmxlIHRvIGJlXG4gKiB0YWtlbiBmcm9tLCBhcyBhbGwgb2YgdGhlIHNvdXJjZSBjaGFubmVscyB3aWxsIGhhdmUgdGhlaXIgdmFsdWVzIHRha2VuIGJ5IHRoZVxuICogcHJvY2Vzc2VzIHdpdGhpbiB0aGVzZSBmdW5jdGlvbnMuIFRoZSBsb25lIGV4Y2VwdGlvbiBpcyBgdGFwYCwgd2hlcmUgdGhlXG4gKiByZWd1bGFyIGZ1bmN0aW9uIG9mIHRoZSBzb3VyY2UgY2hhbm5lbCB3aWxsIGJlIHJlc3RvcmVkIGlmIGFsbCB0YXBzIGFyZVxuICogcmVtb3ZlZC4gRXZlbiBzbywgd2hpbGUgYXQgbGVhc3Qgb25lIHRhcCBpcyBpbiBwbGFjZSwgdGhlIHNvdXJjZSBjaGFubmVsXG4gKiBjYW5ub3QgYmUgdGFrZW4gZnJvbS5cbiAqXG4gKiBAbW9kdWxlIG9wcy9mbG93XG4gKiBAcHJpdmF0ZVxuICovXG5cbmltcG9ydCB7XG4gIGdvLFxuICBjaGFuLFxuICBzZW5kLFxuICByZWN2LFxuICBzZWxlY3QsXG4gIHNlbmRBc3luYyxcbiAgcmVjdkFzeW5jLFxuICBjbG9zZSxcbiAgQ0xPU0VEXG59IGZyb20gXCJAY2hhbmtvL2NzcFwiO1xuXG5pbXBvcnQgeyBpc051bWJlciB9IGZyb20gXCJtb2R1bGVzL2NvbW1vblwiO1xuXG5jb25zdCBUQVBTID0gU3ltYm9sKFwibXVsdGl0YXAvdGFwc1wiKTtcblxuLyoqXG4gKiBQaXBlcyB0aGUgdmFsdWVzIGZyb20gb25lIGNoYW5uZWwgdG8gYW5vdGhlciBjaGFubmVsLlxuICpcbiAqIFRoaXMgdGllcyB0d28gY2hhbm5lbHMgdG9nZXRoZXIgc28gdGhhdCBwdXRzIG9uIHRoZSBzb3VyY2UgY2hhbm5lbCBjYW4gYmVcbiAqIHRha2VuIG9mZiB0aGUgZGVzdGluYXRpb24gY2hhbm5lbC4gVGhpcyBkb2VzIG5vdCBkdXBsaWNhdGUgdmFsdWVzIGluIGFueSB3YXk7XG4gKiBpZiBhbm90aGVyIHByb2Nlc3MgdGFrZXMgYSB2YWx1ZSBvZmYgdGhlIHNvdXJjZSBjaGFubmVsLCBpdCB3aWxsIG5ldmVyIGFwcGVhclxuICogb24gdGhlIGRlc3RpbmF0aW9uIGNoYW5uZWwuIEluIG1vc3QgY2FzZXMgeW91IHdpbGwgbm90IHdhbnQgdG8gdGFrZSB2YWx1ZXNcbiAqIG9mZiBhIGNoYW5uZWwgb25jZSBpdCdzIHBpcGVkIHRvIGFub3RoZXIgY2hhbm5lbCwgc2luY2UgaXQncyBkaWZmaWN1bHQgdG9cbiAqIGtub3cgd2hpY2ggdmFsdWVzIHdpbGwgZ28gdG8gd2hpY2ggY2hhbm5lbC5cbiAqXG4gKiBDbG9zaW5nIGVpdGhlciBjaGFubmVsIHdpbGwgYnJlYWsgdGhlIGNvbm5lY3Rpb24gYmV0d2VlbiB0aGUgdHdvLiBJZiB0aGVcbiAqIHNvdXJjZSBjaGFubmVsIGlzIGNsb3NlZCwgdGhlIGRlc3RpbmF0aW9uIGNoYW5uZWwgd2lsbCBieSBkZWZhdWx0IGFsc28gYmVcbiAqIGNsb3NlZC4gSG93ZXZlciwgcGFzc2luZyBgdHJ1ZWAgYXMgdGhlIHRoaXJkIHBhcmFtZXRlciB3aWxsIGNhdXNlIHRoZVxuICogZGVzdGluYXRpb24gY2hhbm5lbCB0byByZW1haW4gb3BlbiBldmVuIHdoZW4gdGhlIHNvdXJjZSBjaGFubmVsIGlzIGNsb3NlZFxuICogKHRoZSBjb25uZWN0aW9uIGlzIHN0aWxsIGJyb2tlbiBob3dldmVyKS5cbiAqXG4gKiBCZWNhdXNlIG9mIHRoZSBhYmlsaXR5IHRvIGxlYXZlIHRoZSBkZXN0aW5hdGlvbiBjaGFubmVsIG9wZW4sIGEgcG9zc2libGUgdXNlXG4gKiBjYXNlIGZvciB0aGlzIGZ1bmN0aW9uIGlzIHRvIHdyYXAgdGhlIGRlc3RpbmF0aW9uIGNoYW5uZWwocykgb2Ygb25lIG9mIHRoZVxuICogb3RoZXIgZmxvdyBjb250cm9sIGZ1bmN0aW9ucyBiZWxvdyB0byBoYXZlIGEgY2hhbm5lbCB0aGF0IHN1cnZpdmVzIHRoZSBzb3VyY2VcbiAqIGNoYW5uZWwgY2xvc2luZy4gVGhlIHJlc3Qgb2YgdGhvc2UgZnVuY3Rpb25zIChhc2lkZSBmcm9tIHRoZSBzcGVjaWFsLWNhc2VcbiAqIGB7QGxpbmsgbW9kdWxlOm9wcy50YXB8dGFwfWApIGF1dG9tYXRpY2FsbHkgY2xvc2UgdGhlaXIgZGVzdGluYXRpb24gY2hhbm5lbHNcbiAqIHdoZW4gdGhlIHNvdXJjZSBjaGFubmVscyBjbG9zZS5cbiAqXG4gKiBgYGBcbiAqIGltcG9ydCB7IGdvLCBjaGFuLCBzZW5kLCByZWN2LCBjbG9zZSwgaXNDbG9zZWQgfSBmcm9tIFwiQGNzcFwiO1xuICogaW1wb3J0IHsgcGlwZSB9IGZyb20gXCJAb3BzXCI7XG4gKlxuICogY29uc3QgaW5wdXQgPSBjaGFuKCk7XG4gKiBjb25zdCBvdXRwdXQgPSBwaXBlKGlucHV0LCBjaGFuKCkpO1xuICpcbiAqIGdvKGFzeW5jICgpID0+IHtcbiAqICAgYXdhaXQgc2VuZChpbnB1dCwgMSk7XG4gKiAgIGF3YWl0IHNlbmQoaW5wdXQsIDIpO1xuICogICBjbG9zZShpbnB1dCk7XG4gKiB9KTtcbiAqXG4gKiBnbyhhc3luYyAoKSA9PiB7XG4gKiAgIGNvbnNvbGUubG9nKGF3YWl0IHJlY3Yob3V0cHV0KSk7ICAgICAgLy8gLT4gMVxuICogICBjb25zb2xlLmxvZyhhd2FpdCByZWN2KG91dHB1dCkpOyAgICAgIC8vIC0+IDJcbiAqICAgY29uc29sZS5sb2coaXNDbG9zZWQob3V0cHV0KSk7ICAgICAgICAvLyAtPiB0cnVlXG4gKiB9KTtcbiAqIGBgYFxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6b3BzXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuQ2hhbm5lbH0gc3JjIFRoZSBzb3VyY2UgY2hhbm5lbC5cbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5DaGFubmVsfSBkZXN0IFRoZSBkZXN0aW5hdGlvbiBjaGFubmVsLlxuICogQHBhcmFtIHtib29sZWFufSBba2VlcE9wZW49ZmFsc2VdIEEgZmxhZyB0byBpbmRpY2F0ZSB0aGF0IHRoZSBkZXN0aW5hdGlvblxuICogICAgIGNoYW5uZWwgc2hvdWxkIGJlIGtlcHQgb3BlbiBhZnRlciB0aGUgc291cmNlIGNoYW5uZWwgY2xvc2VzLiBCeSBkZWZhdWx0XG4gKiAgICAgdGhlIGRlc3RpbmF0aW9uIGNoYW5uZWwgd2lsbCBjbG9zZSB3aGVuIHRoZSBzb3VyY2UgY2hhbm5lbCBjbG9zZXMuXG4gKiBAcmV0dXJuIHttb2R1bGU6Y3NwLkNoYW5uZWx9IFRoZSBkZXN0aW5hdGlvbiBjaGFubmVsLlxuICovXG5mdW5jdGlvbiBwaXBlKHNyYywgZHN0LCBrZWVwT3BlbiA9IGZhbHNlKSB7XG4gIGdvKGFzeW5jICgpID0+IHtcbiAgICBmb3IgKDs7KSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGF3YWl0IHJlY3Yoc3JjKTtcbiAgICAgIGlmICh2YWx1ZSA9PT0gQ0xPU0VEKSB7XG4gICAgICAgIGlmICgha2VlcE9wZW4pIHtcbiAgICAgICAgICBjbG9zZShkc3QpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgaWYgKCEoYXdhaXQgc2VuZChkc3QsIHZhbHVlKSkpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZHN0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgdHdvIG5ldyBjaGFubmVscyBhbmQgcm91dGVzIHZhbHVlcyBmcm9tIGEgc291cmNlIGNoYW5uZWwgdG8gdGhlbVxuICogYWNjb3JkaW5nIHRvIGEgcHJlZGljYXRlIGZ1bmN0aW9uLlxuICpcbiAqIFRoZSBzdXBwbGllZCBmdW5jdGlvbiBpcyBpbnZva2VkIHdpdGggZXZlcnkgdmFsdWUgdGhhdCBpcyBwdXQgb250byB0aGUgc291cmNlXG4gKiBjaGFubmVsLiBUaG9zZSB0aGF0IHJldHVybiBgdHJ1ZWAgYXJlIHJvdXRlZCB0byB0aGUgZmlyc3QgZGVzdGluYXRpb25cbiAqIGNoYW5uZWw7IHRob3NlIHRoYXQgcmV0dXJuIGBmYWxzZWAgYXJlIHJvdXRlZCB0byB0aGUgc2Vjb25kLlxuICpcbiAqIFRoZSBuZXcgY2hhbm5lbHMgYXJlIGNyZWF0ZWQgYnkgdGhlIGZ1bmN0aW9uIGJhc2VkIG9uIHRoZSBidWZmZXIgdmFsdWVzXG4gKiBwYXNzZWQgYXMgdGhlIHRoaXJkIGFuZCBmb3VydGggcGFyYW1ldGVycy4gSWYgb25lIG9yIGJvdGggb2YgdGhlc2UgYXJlXG4gKiBtaXNzaW5nLCBgbnVsbGAsIG9yIGAwYCwgdGhlIGNvcnJlc3BvbmRpbmcgZGVzdGluYXRpb24gY2hhbm5lbCBpcyB1bmJ1ZmZlcmVkLlxuICogSWYgb25lIGlzIGEgcG9zaXRpdmUgaW50ZWdlciwgdGhlIGNvcnJlc3BvbmRpbmcgY2hhbm5lbCBpcyBidWZmZXJlZCBieSBhXG4gKiBmaXhlZCBidWZmZXIgb2YgdGhhdCBzaXplLiBJZiB0aGUgcGFyYW1ldGVyIGZvciBhIGNoYW5uZWwgaXMgYSBidWZmZXIsIHRoZW5cbiAqIHRoYXQgYnVmZmVyIGlzIHVzZWQgdG8gYnVmZmVyIHRoZSBuZXcgY2hhbm5lbC5cbiAqXG4gKiBCb3RoIG5ldyBjaGFubmVscyBhcmUgY2xvc2VkIHdoZW4gdGhlIHNvdXJjZSBjaGFubmVsIGlzIGNsb3NlZC5cbiAqXG4gKlxuICogYGBgXG4gKiBpbXBvcnQgeyBnbywgY2hhbiwgc2VuZCwgY2xvc2UgfSBmcm9tIFwiQGNzcFwiO1xuICogaW1wb3J0IHsgcGFydGl0aW9uIH0gZnJvbSBcIkBvcHNcIjtcbiAqXG4gKiBjb25zdCBpbnB1dCA9IGNoYW4oKTtcbiAqIGNvbnN0IGN0cmwgPSBjaGFuKCk7XG4gKiBjb25zdCBbZXZlbiwgb2RkXSA9IHBhcnRpdGlvbih4ID0+IHggJSAyID09PSAwLCBpbnB1dCwgMywgMyk7XG4gKlxuICogZ28oYXN5bmMgKCkgPT4ge1xuICogICBhd2FpdCBzZW5kKGlucHV0LCAxKTtcbiAqICAgYXdhaXQgc2VuZChpbnB1dCwgMik7XG4gKiAgIGF3YWl0IHNlbmQoaW5wdXQsIDMpO1xuICogICBhd2FpdCBzZW5kKGlucHV0LCA0KTtcbiAqICAgY2xvc2UoaW5wdXQpO1xuICogfSk7XG4gKlxuICogZ28oYXN5bmMgKCkgPT4ge1xuICogICBmb3IgYXdhaXQgKGNvbnN0IHZhbHVlIG9mIGV2ZW4pIHtcbiAqICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XG4gKiAgIH1cbiAqICAgYXdhaXQgc2VuZChjdHJsKTtcbiAqIH0pO1xuICpcbiAqIGdvKGFzeW5jICgpID0+IHtcbiAqICAgYXdhaXQgcmVjdihjdHJsKTtcbiAqICAgZm9yIGF3YWl0IChjb25zdCB2YWx1ZSBvZiBvZGQpIHtcbiAqICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XG4gKiAgIH1cbiAqIH0pO1xuICpcbiAqIC8vIFRoZSBgY3RybGAgY2hhbm5lbCBlbnN1cmVzIHRoYXQgYWxsIG9mIHRoZSB2YWx1ZXMgb24gdGhlIGV2ZW4gY2hhbm5lbCBhcmVcbiAqIC8vIHJlYWQgYmVmb3JlIGFueSBvZiB0aGUgdmFsdWVzIG9uIHRoZSBvZGQgY2hhbm5lbCBhcmUgKHRoaXMgaXMgb25seVxuICogLy8gcG9zc2libGUgYmVjYXVzZSB0aGUgb3V0cHV0IGNoYW5uZWxzIGhhdmUgYnVmZmVycyBiaWcgZW5vdWdoIHRvIG1ha2Ugc3VyZVxuICogLy8gdGhhdCBubyBzZW5kIGlzIGJsb2NrZWQpLlxuICogLy9cbiAqIC8vIC0+IDJcbiAqIC8vIC0+IDRcbiAqIC8vIC0+IDFcbiAqIC8vIC0+IDNcbiAqIGBgYFxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6b3BzXG4gKiBAcGFyYW0ge21vZHVsZTpvcHMuUHJlZGljYXRlfSBmbiBBIHByZWRpY2F0ZSBmdW5jdGlvbiB1c2VkIHRvIHRlc3QgZWFjaCB2YWx1ZVxuICogb24gdGhlIGlucHV0IGNoYW5uZWwuXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuQ2hhbm5lbH0gc3JjIFRoZSBzb3VyY2UgY2hhbm5lbC5cbiAqIEBwYXJhbSB7KG51bWJlcnxtb2R1bGU6Y3NwLkJ1ZmZlcil9IFt0QnVmZmVyPTBdIEEgYnVmZmVyIHVzZWQgdG8gY3JlYXRlIHRoZVxuICogICAgIGRlc3RpbmF0aW9uIGNoYW5uZWwgd2hpY2ggcmVjZWl2ZXMgYWxsIHZhbHVlcyB0aGF0IHBhc3NlZCB0aGUgcHJlZGljYXRlLlxuICogICAgIElmIHRoaXMgaXMgYSBudW1iZXIsIGEge0BsaW5rIG1vZHVsZTpjc3AuRml4ZWRCdWZmZXJ9IG9mIHRoYXQgc2l6ZSB3aWxsXG4gKiAgICAgYmUgdXNlZC4gSWYgdGhpcyBpcyBgMGAgb3Igbm90IHByZXNlbnQsIHRoZSBjaGFubmVsIHdpbGwgYmUgdW5idWZmZXJlZC5cbiAqIEBwYXJhbSB7KG51bWJlcnxtb2R1bGU6Y3NwLkJ1ZmZlcil9IFtmQnVmZmVyPTBdIEEgYnVmZmVyIHVzZWQgdG8gY3JlYXRlIHRoZVxuICogICAgIGRlc3RpbmF0aW9uIGNoYW5uZWwgd2hpY2ggcmVjZWl2ZXMgYWxsIHZhbHVlcyB0aGF0IGRpZCBub3QgcGFzcyB0aGVcbiAqICAgICBwcmVkaWNhdGUuIElmIHRoaXMgaXMgYSBudW1iZXIsIGEge0BsaW5rIG1vZHVsZTpjc3AuRml4ZWRCdWZmZXJ9IG9mIHRoYXRcbiAqICAgICBzaXplIHdpbGwgYmUgdXNlZC4gSWYgdGhpcyBpcyBgMGAgb3Igbm90IHByZXNlbnQsIHRoZSBjaGFubmVsIHdpbGwgYmVcbiAqICAgICB1bmJ1ZmZlcmVkLlxuICogQHJldHVybiB7bW9kdWxlOmNzcC5DaGFubmVsW119IEFuIGFycmF5IG9mIHR3byBjaGFubmVscy4gVGhlIGZpcnN0IGlzIHRoZVxuICogICAgIGRlc3RpbmF0aW9uIGNoYW5uZWwgd2l0aCBhbGwgb2YgdGhlIHZhbHVlcyB0aGF0IHBhc3NlZCB0aGUgcHJlZGljYXRlLCB0aGVcbiAqICAgICBzZWNvbmQgaXMgdGhlIGRlc3RpbmF0aW9uIGNoYW5uZWwgd2l0aCBhbGwgb2YgdGhlIHZhbHVlcyB0aGF0IGRpZCBub3RcbiAqICAgICBwYXNzIHRoZSBwcmVkaWNhdGUuXG4gKi9cbmZ1bmN0aW9uIHBhcnRpdGlvbihmbiwgc3JjLCB0QnVmZmVyID0gMCwgZkJ1ZmZlciA9IDApIHtcbiAgY29uc3QgdERzdCA9IGNoYW4odEJ1ZmZlcik7XG4gIGNvbnN0IGZEc3QgPSBjaGFuKGZCdWZmZXIpO1xuXG4gIGdvKGFzeW5jICgpID0+IHtcbiAgICBmb3IgKDs7KSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGF3YWl0IHJlY3Yoc3JjKTtcbiAgICAgIGlmICh2YWx1ZSA9PT0gQ0xPU0VEKSB7XG4gICAgICAgIGNsb3NlKHREc3QpO1xuICAgICAgICBjbG9zZShmRHN0KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBhd2FpdCBzZW5kKGZuKHZhbHVlKSA/IHREc3QgOiBmRHN0LCB2YWx1ZSk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gW3REc3QsIGZEc3RdO1xufVxuXG4vKipcbiAqIE1lcmdlcyBvbmUgb3IgbW9yZSBjaGFubmVscyBpbnRvIGEgc2luZ2xlIGRlc3RpbmF0aW9uIGNoYW5uZWwuXG4gKlxuICogVmFsdWVzIGFyZSBnaXZlbiB0byB0aGUgZGVzdGluYXRpb24gY2hhbm5lbCBhcyB0aGV5IGFyZSBzZW50IHRvIHRoZSBzb3VyY2VcbiAqIGNoYW5uZWxzLiBJZiBgbWVyZ2VgIGlzIGNhbGxlZCB3aGVuIHRoZXJlIGFyZSBhbHJlYWR5IHZhbHVlcyBvbiBtdWx0aXBsZVxuICogc291cmNlIGNoYW5uZWxzLCB0aGUgb3JkZXIgdGhhdCB0aGV5J3JlIHB1dCBvbnRvIHRoZSBkZXN0aW5hdGlvbiBjaGFubmVsIGlzXG4gKiByYW5kb20uXG4gKlxuICogVGhlIGRlc3RpbmF0aW9uIGNoYW5uZWwgaXMgY3JlYXRlZCBieSB0aGUgZnVuY3Rpb24gYmFzZWQgb24gdGhlIGJ1ZmZlciB2YWx1ZVxuICogcGFzc2VkIGFzIHRoZSBzZWNvbmQgcGFyYW1ldGVyLiBJZiB0aGlzIGlzIG1pc3NpbmcsIGBudWxsYCwgb3IgYDBgLCB0aGVcbiAqIGRlc3RpbmF0aW9uIGNoYW5uZWwgd2lsbCBiZSB1bmJ1ZmZlcmVkLiBJZiBpdCdzIGEgcG9zaXRpdmUgaW50ZWdlciwgdGhlXG4gKiBkZXN0aW5hdGlvbiBjaGFubmVsIGlzIGJ1ZmZlcmVkIGJ5IGEgZml4ZWQgYnVmZmVyIG9mIHRoYXQgc2l6ZS4gSWYgdGhlXG4gKiBwYXJhbWV0ZXIgaXMgYSBidWZmZXIsIHRoZW4gdGhhdCBidWZmZXIgaXMgdXNlZCB0byBidWZmZXIgdGhlIGRlc3RpbmF0aW9uXG4gKiBjaGFubmVsLlxuICpcbiAqIEFzIGVhY2ggc291cmNlIGNoYW5uZWwgY2xvc2VzLCBpdCBpcyByZW1vdmVkIGZyb20gdGhlIG1lcmdlLCBsZWF2aW5nIHRoZVxuICogY2hhbm5lbHMgdGhhdCBhcmUgc3RpbGwgb3BlbiB0byBjb250aW51ZSBtZXJnaW5nLiBXaGVuICphbGwqIG9mIHRoZSBzb3VyY2VcbiAqIGNoYW5uZWxzIGNsb3NlLCB0aGVuIHRoZSBkZXN0aW5hdGlvbiBjaGFubmVsIGlzIGNsb3NlZC5cbiAqXG4gKiBgYGBcbiAqIGltcG9ydCB7IGdvLCBjaGFuLCBzZW5kLCByZWN2IH0gZnJvbSBcIkBjc3BcIjtcbiAqIGltcG9ydCB7IG1lcmdlIH0gZnJvbSBcIkBvcHNcIjtcbiAqXG4gKiBjb25zdCBpbnB1dDEgPSBjaGFuKCk7XG4gKiBjb25zdCBpbnB1dDIgPSBjaGFuKCk7XG4gKiBjb25zdCBpbnB1dDMgPSBjaGFuKCk7XG4gKiBjb25zdCBvdXRwdXQgPSBtZXJnZShbaW5wdXQxLCBpbnB1dDIsIGlucHV0M10pO1xuICpcbiAqIGdvKGFzeW5jICgpID0+IHtcbiAqICAgLy8gQmVjYXVzZSB3ZSdyZSBzZW5kaW5nIHRvIGFsbCB0aHJlZSBjaGFubmVscyBpbiB0aGUgc2FtZVxuICogICAvLyBwcm9jZXNzLCB3ZSBrbm93IHRoZSBvcmRlciBpbiB3aGljaCB0aGUgdmFsdWVzIHdpbGwgYmVcbiAqICAgLy8gc2VudCB0byB0aGUgb3V0cHV0IGNoYW5uZWw7IGluIGdlbmVyYWwsIHdlIHdvbid0IGtub3cgdGhpc1xuICogICBhd2FpdCBzZW5kKGlucHV0MSwgMSk7XG4gKiAgIGF3YWl0IHNlbmQoaW5wdXQyLCAyKTtcbiAqICAgYXdhaXQgc2VuZChpbnB1dDMsIDMpO1xuICogfSk7XG4gKlxuICogZ28oYXN5bmMgKCkgPT4ge1xuICogICBjb25zb2xlLmxvZyhhd2FpdCByZWN2KG91dHB1dCkpOyAgICAgIC8vIC0+IDFcbiAqICAgY29uc29sZS5sb2coYXdhaXQgcmVjdihvdXRwdXQpKTsgICAgICAvLyAtPiAyXG4gKiAgIGNvbnNvbGUubG9nKGF3YWl0IHJlY3Yob3V0cHV0KSk7ICAgICAgLy8gLT4gM1xuICogfSk7XG4gKiBgYGBcbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOm9wc1xuICogQHBhcmFtIHttb2R1bGU6Y3NwLkNoYW5uZWxbXX0gc3JjcyBBbiBhcnJheSBvZiBzb3VyY2UgY2hhbm5lbHMuXG4gKiBAcGFyYW0geyhudW1iZXJ8bW9kdWxlOmNzcC5CdWZmZXIpfSBbYnVmZmVyPTBdIEEgYnVmZmVyIHVzZWQgdG8gY3JlYXRlIHRoZVxuICogICAgIGRlc3RpbmF0aW9uIGNoYW5uZWwuIElmIHRoaXMgaXMgYSBudW1iZXIsIGFcbiAqICAgICB7QGxpbmsgbW9kdWxlOmNzcC5GaXhlZEJ1ZmZlcn0gb2YgdGhhdCBzaXplIHdpbGwgYmUgdXNlZC4gSWYgdGhpcyBpcyBgMGBcbiAqICAgICBvciBub3QgcHJlc2VudCwgdGhlIGNoYW5uZWwgd2lsbCBiZSB1bmJ1ZmZlcmVkLlxuICogQHJldHVybiB7bW9kdWxlOmNzcC5DaGFubmVsfSBUaGUgZGVzdGluYXRpb24gY2hhbm5lbCwgd2hpY2ggd2lsbCByZWNlaXZlIGFsbFxuICogICAgIHZhbHVlcyBwdXQgb250byBldmVyeSBzb3VyY2UgY2hhbm5lbC5cbiAqL1xuZnVuY3Rpb24gbWVyZ2Uoc3JjcywgYnVmZmVyID0gMCkge1xuICBjb25zdCBkc3QgPSBjaGFuKGJ1ZmZlcik7XG4gIGNvbnN0IGlucHV0cyA9IHNyY3Muc2xpY2UoKTtcblxuICBnbyhhc3luYyAoKSA9PiB7XG4gICAgZm9yICg7Oykge1xuICAgICAgaWYgKGlucHV0cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjb25zdCB7IHZhbHVlLCBjaGFubmVsIH0gPSBhd2FpdCBzZWxlY3QoaW5wdXRzKTtcbiAgICAgIGlmICh2YWx1ZSA9PT0gQ0xPU0VEKSB7XG4gICAgICAgIGlucHV0cy5zcGxpY2UoaW5wdXRzLmluZGV4T2YoY2hhbm5lbCksIDEpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGF3YWl0IHNlbmQoZHN0LCB2YWx1ZSk7XG4gICAgfVxuICAgIGNsb3NlKGRzdCk7XG4gIH0pO1xuXG4gIHJldHVybiBkc3Q7XG59XG5cbi8qKlxuICogU3BsaXRzIGEgc2luZ2xlIGNoYW5uZWwgaW50byBtdWx0aXBsZSBkZXN0aW5hdGlvbiBjaGFubmVscywgd2l0aCBlYWNoXG4gKiBkZXN0aW5hdGlvbiBjaGFubmVsIHJlY2VpdmluZyBldmVyeSB2YWx1ZSBzZW50IHRvIHRoZSBzb3VyY2UgY2hhbm5lbC5cbiAqXG4gKiBFdmVyeSBwYXJhbWV0ZXIgYWZ0ZXIgdGhlIGZpcnN0IHJlcHJlc2VudHMgdGhlIGJ1ZmZlciBmcm9tIGEgc2luZ2xlXG4gKiBkZXN0aW5hdGlvbiBjaGFubmVsLiBFYWNoIGAwYCBvciBgbnVsbGAgd2lsbCBwcm9kdWNlIGFuIHVuYnVmZmVyZWQgY2hhbm5lbCxcbiAqIHdoaWxlIGVhY2ggcG9zaXRpdmUgaW50ZWdlciB3aWxsIHByb2R1Y2UgYSBjaGFubmVsIGJ1ZmZlcmVkIGJ5IGEgZml4ZWQgYnVmZmVyXG4gKiBvZiB0aGF0IHNpemUuIEVhY2ggYnVmZmVyIHdpbGwgcHJvZHVjZSBhIGJ1ZmZlcmVkIGNoYW5uZWwgYmFja2VkIGJ5IHRoYXRcbiAqIGJ1ZmZlci4gSWYgdGhlcmUgYXJlIG5vIHBhcmFtZXRlcnMgYWZ0ZXIgdGhlIGZpcnN0LCB0aGVuIHR3byB1bmJ1ZmZlcmVkXG4gKiBjaGFubmVscyB3aWxsIGJlIHByb2R1Y2VkIGFzIGEgZGVmYXVsdC5cbiAqXG4gKiBXaGVuIHRoZSBzb3VyY2UgY2hhbm5lbCBpcyBjbG9zZWQsIGFsbCBkZXN0aW5hdGlvbiBjaGFubmVscyB3aWxsIGFsc28gYmVcbiAqIGNsb3NlZC4gSG93ZXZlciwgaWYgZGVzdGluYXRpb24gY2hhbm5lbHMgYXJlIGNsb3NlZCwgdGhleSBkbyBub3RoaW5nIHRvIHRoZVxuICogc291cmNlIGNoYW5uZWwuXG4gKlxuICogYGBgXG4gKiBpbXBvcnQgeyBnbywgY2hhbiwgc2VuZCB9IGZyb20gXCJAY3NwXCI7XG4gKiBpbXBvcnQgeyBzcGxpdCB9IGZyb20gXCJAb3BzXCI7XG4gKlxuICogY29uc3QgaW5wdXQgPSBjaGFuKCk7XG4gKiBjb25zdCBvdXRwdXRzID0gc3BsaXQoaW5wdXQsIDMpO1xuICpcbiAqIGdvKGFzeW5jICgpID0+IHtcbiAqICAgYXdhaXQgc2VuZChpbnB1dCwgMSk7XG4gKiAgIGF3YWl0IHNlbmQoaW5wdXQsIDIpO1xuICogICBhd2FpdCBzZW5kKGlucHV0LCAzKTtcbiAqIH0pO1xuICpcbiAqIGdvKGFzeW5jICgpID0+IHtcbiAqICAgZm9yIGF3YWl0IChjb25zdCBvdXRwdXQgb2Ygb3V0cHV0cykge1xuICogICAgIGNvbnNvbGUubG9nKG91dHB1dCk7XG4gKiAgICAgLy8gLT4gMVxuICogICAgIC8vIC0+IDJcbiAqICAgICAvLyAtPiAzXG4gKiAgIH1cbiAqIH0pO1xuICogYGBgXG4gKlxuICogVGhpcyBmdW5jdGlvbiBtb3ZlcyBpdHMgdmFsdWVzIHRvIHRoZSBvdXRwdXQgY2hhbm5lbHMgYXN5bmNocm9ub3VzbHkuIFRoaXNcbiAqIG1lYW5zIHRoYXQgZXZlbiB3aGVuIHVzaW5nIHVuYnVmZmVyZWQgY2hhbm5lbHMsIGl0IGlzIG5vdCBuZWNlc3NhcnkgZm9yIGFsbFxuICogb3V0cHV0IGNoYW5uZWxzIHRvIGJlIHJlY2VpdmVkIGZyb20gYmVmb3JlIHRoZSBuZXh0IHNlbmQgdG8gdGhlIGlucHV0IGNoYW5uZWxcbiAqIGNhbiBjb21wbGV0ZS5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOm9wc1xuICogQHBhcmFtIHttb2R1bGU6Y3NwLkNoYW5uZWx9IHNyYyBUaGUgc291cmNlIGNoYW5uZWwuXG4gKiBAcGFyYW0gey4uLihudW1iZXJ8bW9kdWxlOmNzcC5CdWZmZXIpfSBbYnVmZmVycz0yXSBUaGUgYnVmZmVycyB1c2VkIHRvIGNyZWF0ZVxuICogICAgIHRoZSBkZXN0aW5hdGlvbiBjaGFubmVscy4gRWFjaCBlbnRyeSBpcyB0cmVhdGVkIHNlcGFyYXRlbHkuIElmIG9uZSBpcyBhXG4gKiAgICAgbnVtYmVyLCB0aGVuIGEge0BsaW5rIG1vZHVsZTpjc3AuRml4ZWRCdWZmZXJ8Rml4ZWRCdWZmZXJ9IG9mIHRoYXQgc2l6ZVxuICogICAgIHdpbGwgYmUgdXNlZC4gSWYgb25lIGlzIGEgYDBgLCB0aGVuIHRoZSBjb3JyZXNwb25kaW5nIGNoYW5uZWwgd2lsbCBiZVxuICogICAgIHVuYnVmZmVyZWQuICoqRXhjZXB0aW9uOioqIGlmIGEgc2luZ2xlIG51bWJlciBpcyBwYXNzZWQsIHRoZW4gdGhhdCBudW1iZXJcbiAqICAgICBvZiB1bmJ1ZmVycmVkIGNoYW5uZWxzIHdpbGwgYmUgY3JlYXRlZC4gVGhpcyBtZWFucyB0aGF0IHRoZSBkZWZhdWx0IGlzIHRvXG4gKiAgICAgY3JlYXRlIHR3byB1bmJ1ZmZlcmVkIGNoYW5uZWxzLiBUbyBjcmVhdGUgYSBzaW5nbGUgY2hhbm5lbCB3aXRoIGEgZml4ZWRcbiAqICAgICBidWZmZXIsIHVzZSBge0BsaW5rIGNzcC5maXhlZHxmaXhlZH1gIGV4cGxpY2l0bHkuXG4gKiBAcmV0dXJuIHttb2R1bGU6Y3NwLkNoYW5uZWxbXX0gQW4gYXJyYXkgb2YgZGVzdGluYXRpb24gY2hhbm5lbHMuXG4gKi9cbmZ1bmN0aW9uIHNwbGl0KHNyYywgLi4uYnVmZmVycykge1xuICBsZXQgYmZzID0gYnVmZmVycy5sZW5ndGggPT09IDAgPyBbMl0gOiBidWZmZXJzO1xuICBpZiAoYmZzLmxlbmd0aCA9PT0gMSAmJiBpc051bWJlcihiZnNbMF0pKSB7XG4gICAgY29uc3QgY291bnQgPSBiZnNbMF07XG4gICAgYmZzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICBiZnMucHVzaCgwKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBkc3RzID0gYmZzLm1hcChiZiA9PiBjaGFuKGJmKSk7XG4gIGNvbnN0IGRvbmUgPSBjaGFuKCk7XG4gIGxldCBjb3VudCA9IDA7XG5cbiAgZnVuY3Rpb24gY2FsbGJhY2soKSB7XG4gICAgaWYgKC0tY291bnQgPT09IDApIHtcbiAgICAgIHNlbmRBc3luYyhkb25lKTtcbiAgICB9XG4gIH1cblxuICBnbyhhc3luYyAoKSA9PiB7XG4gICAgZm9yICg7Oykge1xuICAgICAgY29uc3QgdmFsdWUgPSBhd2FpdCByZWN2KHNyYyk7XG4gICAgICBpZiAodmFsdWUgPT09IENMT1NFRCkge1xuICAgICAgICBmb3IgKGNvbnN0IGRzdCBvZiBkc3RzKSB7XG4gICAgICAgICAgY2xvc2UoZHN0KTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY291bnQgPSBkc3RzLmxlbmd0aDtcbiAgICAgIGZvciAoY29uc3QgZHN0IG9mIGRzdHMpIHtcbiAgICAgICAgc2VuZEFzeW5jKGRzdCwgdmFsdWUsIGNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICAgIGF3YWl0IHJlY3YoZG9uZSk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZHN0cztcbn1cblxuLyoqXG4gKiBVdGlsaXR5IGZ1bmN0aW9uIHRvIGFkZCB0aGUgYWJpbGl0eSB0byBiZSB0YXBwZWQgdG8gYSBjaGFubmVsIHRoYXQgaXMgYmVpbmdcbiAqIHRhcHBlZC4gVGhpcyB3aWxsIGFkZCBhIHNpbmdsZSBwcm9wZXJ0eSB0byB0aGF0IGNoYW5uZWwgb25seSAobmFtZWRcbiAqICdAQG11bHRpdGFwL3RhcHMnIHNvIGFzIHRvIGRlY3JlYXNlIHRoZSBjaGFuY2Ugb2YgY29sbGlzaW9uKSwgYnV0IHRoZSB0YXBwaW5nXG4gKiBmdW5jdGlvbmFsaXR5IGl0c2VsZiBpcyBwcm92aWRlZCBvdXRzaWRlIHRoZSBjaGFubmVsIG9iamVjdC4gVGhpcyBuZXdcbiAqIHByb3BlcnR5IGlzIGFuIGFycmF5IG9mIHRoZSBjaGFubmVscyB0YXBwaW5nIHRoaXMgY2hhbm5lbCwgYW5kIGl0IHdpbGwgYmVcbiAqIHJlbW92ZWQgaWYgYWxsIHRhcHMgYXJlIHJlbW92ZWQuXG4gKlxuICogQHBhcmFtIHttb2R1bGU6Y3NwLkNoYW5uZWx9IHNyYyBUaGUgc291cmNlIGNoYW5uZWwgdG8gYmUgdGFwcGVkLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gbWFrZVRhcChzcmMpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNyYywgVEFQUywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICB2YWx1ZTogW11cbiAgfSk7XG5cbiAgY29uc3QgZG9uZSA9IGNoYW4oKTtcbiAgbGV0IGNvdW50ID0gMDtcblxuICBmdW5jdGlvbiBjYWxsYmFjaygpIHtcbiAgICBpZiAoLS1jb3VudCA9PT0gMCkge1xuICAgICAgc2VuZEFzeW5jKGRvbmUpO1xuICAgIH1cbiAgfVxuXG4gIGdvKGFzeW5jICgpID0+IHtcbiAgICBmb3IgKDs7KSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGF3YWl0IHJlY3Yoc3JjKTtcbiAgICAgIGlmICh2YWx1ZSA9PT0gQ0xPU0VEIHx8IHNyY1tUQVBTXS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgZGVsZXRlIHNyY1tUQVBTXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNvdW50ID0gc3JjW1RBUFNdLmxlbmd0aDtcbiAgICAgIGZvciAoY29uc3QgdGFwIG9mIHNyY1tUQVBTXSkge1xuICAgICAgICBzZW5kQXN5bmModGFwLCB2YWx1ZSwgY2FsbGJhY2spO1xuICAgICAgfVxuICAgICAgYXdhaXQgcmVjdihkb25lKTtcbiAgICB9XG4gIH0pO1xufVxuXG4vKipcbiAqIFRhcHMgYSBjaGFubmVsLCBzZW5kaW5nIGFsbCBvZiB0aGUgdmFsdWVzIHNlbnQgdG8gaXQgdG8gdGhlIGRlc3RpbmF0aW9uXG4gKiBjaGFubmVsLlxuICpcbiAqIEEgc291cmNlIGNoYW5uZWwgY2FuIGJlIHRhcHBlZCBtdWx0aXBsZSB0aW1lcywgYW5kIGFsbCBvZiB0aGUgdGFwcGluZ1xuICogKGRlc3RpbmF0aW9uKSBjaGFubmVscyByZWNlaXZlIGVhY2ggdmFsdWUgc2VudCB0byB0aGUgdGFwcGVkIChzb3VyY2UpXG4gKiBjaGFubmVsLlxuICpcbiAqIFRoaXMgaXMgZGlmZmVyZW50IGZyb20gYHtAbGluayBtb2R1bGU6b3BzLnNwbGl0fHNwbGl0fWAgaW4gdGhhdCBpdCdzXG4gKiB0ZW1wb3JhcnkuIENoYW5uZWxzIGNhbiB0YXAgYSBjaGFubmVsIGFuZCB0aGVuIHVudGFwIGl0LCBtdWx0aXBsZSB0aW1lcywgYXNcbiAqIG5lZWRlZC4gSWYgYSBzb3VyY2UgY2hhbm5lbCBoYXMgYWxsIG9mIGl0cyB0YXBzIHJlbW92ZWQsIHRoZW4gaXQgcmV2ZXJ0cyB0byBhXG4gKiBub3JtYWwgY2hhbm5lbCwganVzdCBhcyBpdCB3YXMgYmVmb3JlIGl0IHdhcyB0YXBwZWQuXG4gKlxuICogQWxzbyB1bmxpa2UgYHtAbGluayBtb2R1bGU6b3BzLnNwbGl0fHNwbGl0fWAsIGVhY2ggY2FsbCBjYW4gb25seSB0YXAgb25jZS5cbiAqIEZvciBtdWx0aXBsZSBjaGFubmVscyB0byB0YXAgYSBzb3VyY2UgY2hhbm5lbCwgYHRhcGAgaGFzIHRvIGJlIGNhbGxlZFxuICogbXVsdGlwbGUgdGltZXMuXG4gKlxuICogQ2xvc2luZyBlaXRoZXIgdGhlIHNvdXJjZSBvciBhbnkgb2YgdGhlIGRlc3RpbmF0aW9uIGNoYW5uZWxzIGhhcyBubyBlZmZlY3Qgb25cbiAqIGFueSBvZiB0aGUgb3RoZXIgY2hhbm5lbHMuXG4gKlxuICogYGBgXG4gKiBpbXBvcnQgeyBnbywgY2hhbiwgc2VuZCwgcmVjdiB9IGZyb20gXCJAY3NwXCI7XG4gKiBpbXBvcnQgeyB0YXAgfSBmcm9tIFwiQG9wc1wiO1xuICpcbiAqIGNvbnN0IGlucHV0ID0gY2hhbigpO1xuICogY29uc3QgdGFwcGVyID0gY2hhbigpO1xuICogdGFwKGlucHV0LCB0YXBwZXIpO1xuICpcbiAqIGdvKGFzeW5jICgpID0+IHtcbiAqICAgYXdhaXQgc2VuZChpbnB1dCwgMSk7XG4gKiAgIGF3YWl0IHNlbmQoaW5wdXQsIDIpO1xuICogfSk7XG4gKlxuICogZ28oYXN5bmMgKCkgPT4ge1xuICogICBjb25zb2xlLmxvZyhhd2FpdCByZWN2KHRhcHBlcikpOyAgIC8vIC0+IDFcbiAqICAgY29uc29sZS5sb2coYXdhaXQgcmVjdih0YXBwZXIpKTsgICAvLyAtPiAyXG4gKiB9KTtcbiAqXG4gKiBgYGBcbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOm9wc1xuICogQHBhcmFtIHttb2R1bGU6Y3NwLkNoYW5uZWx9IHNyYyBUaGUgY2hhbm5lbCB0byBiZSB0YXBwZWQuXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuQ2hhbm5lbH0gW2Rlc3RdIFRoZSBjaGFubmVsIHRhcHBpbmcgdGhlIHNvdXJjZSBjaGFubmVsLiBJZlxuICogICAgIHRoaXMgaXMgbm90IHByZXNlbnQsIGEgbmV3IHVuYnVmZmVyZWQgY2hhbm5lbCB3aWxsIGJlIGNyZWF0ZWQuXG4gKiBAcmV0dXJuIHttb2R1bGU6Y3NwLkNoYW5uZWx9IFRoZSBkZXN0aW5hdGlvbiBjaGFubmVsLiBUaGlzIGlzIHRoZSBzYW1lIGFzIHRoZVxuICogICAgIHNlY29uZCBhcmd1bWVudCwgaWYgcHJlc2VudDsgb3RoZXJ3aXNlIGl0IGlzIHRoZSBuZXdseS1jcmVhdGVkIGNoYW5uZWxcbiAqICAgICB0YXBwaW5nIHRoZSBzb3VyY2UgY2hhbm5lbC5cbiAqL1xuZnVuY3Rpb24gdGFwKHNyYywgZHN0ID0gY2hhbigpKSB7XG4gIGlmICghc3JjW1RBUFNdKSB7XG4gICAgbWFrZVRhcChzcmMpO1xuICB9XG4gIGlmICghc3JjW1RBUFNdLmluY2x1ZGVzKGRzdCkpIHtcbiAgICBzcmNbVEFQU10ucHVzaChkc3QpO1xuICB9XG4gIHJldHVybiBkc3Q7XG59XG5cbi8qKlxuICogVW50YXBzIGEgcHJldmlvdXNseSB0YXBwaW5nIGRlc3RpbmF0aW9uIGNoYW5uZWwgZnJvbSBpdHMgc291cmNlIGNoYW5uZWwuXG4gKlxuICogVGhpcyByZW1vdmVzIGEgcHJldmlvdXNseSBjcmVhdGVkIHRhcC4gVGhlIGRlc3RpbmF0aW9uICh0YXBwaW5nKSBjaGFubmVsIHdpbGxcbiAqIHN0b3AgcmVjZWl2aW5nIHRoZSB2YWx1ZXMgc2VudCB0byB0aGUgc291cmNlIGNoYW5uZWwuXG4gKlxuICogSWYgdGhlIGRlc3RpbmF0aW9uIGNoYW5uZWwgd2FzIG5vdCwgaW4gZmFjdCwgdGFwcGluZyB0aGUgc291cmNlIGNoYW5uZWwsIHRoaXNcbiAqIGZ1bmN0aW9uIHdpbGwgZG8gbm90aGluZy4gSWYgYWxsIHRhcHMgYXJlIHJlbW92ZWQsIHRoZSBzb3VyY2UgY2hhbm5lbCByZXZlcnRzXG4gKiB0byBub3JtYWwgKGkuZS4sIGl0IG5vIGxvbmdlciBoYXMgdGhlIHRhcHBpbmcgY29kZSBhcHBsaWVkIHRvIGl0IGFuZCBjYW4gYmVcbiAqIHRha2VuIGZyb20gYXMgbm9ybWFsKS5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOm9wc1xuICogQHBhcmFtIHttb2R1bGU6Y3NwLkNoYW5uZWx9IHNyYyBUaGUgdGFwcGVkIGNoYW5uZWwuXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuQ2hhbm5lbH0gZGVzdCBUaGUgY2hhbm5lbCB0aGF0IGlzIHRhcHBpbmcgdGhlIHNvdXJjZVxuICogICAgIGNoYW5uZWwgdGhhdCBzaG91bGQgbm8gbG9uZ2VyIGJlIHRhcHBpbmcgdGhlIHNvdXJjZSBjaGFubmVsLlxuICovXG5mdW5jdGlvbiB1bnRhcChzcmMsIGRzdCkge1xuICBjb25zdCB0YXBzID0gc3JjW1RBUFNdO1xuICBpZiAodGFwcykge1xuICAgIGNvbnN0IGluZGV4ID0gdGFwcy5pbmRleE9mKGRzdCk7XG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgdGFwcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgaWYgKHRhcHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHNlbmRBc3luYyhzcmMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZXMgYWxsIHRhcHMgZnJvbSBhIHNvdXJjZSBjaGFubmVsLlxuICpcbiAqIFRoZSBwcmV2aW91c2x5LXRhcHBlZCBjaGFubmVsIHJldmVydHMgdG8gYSBub3JtYWwgY2hhbm5lbCwgd2hpbGUgYW55IGNoYW5uZWxzXG4gKiB0aGF0IG1pZ2h0IGhhdmUgYmVlbiB0YXBwaW5nIGl0IG5vIGxvbmdlciByZWNlaXZlIHZhbHVlcyBmcm9tIHRoZSBzb3VyY2VcbiAqIGNoYW5uZWwuIElmIHRoZSBzb3VyY2UgY2hhbm5lbCBoYWQgbm8gdGFwcywgdGhpcyBmdW5jdGlvbiBkb2VzIG5vdGhpbmcuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpvcHNcbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5DaGFubmVsfSBzcmMgVGhlIHRhcHBlZCBjaGFubmVsLiBBbGwgdGFwcyB3aWxsIGJlIHJlbW92ZWRcbiAqICAgICBmcm9tIHRoaXMgY2hhbm5lbC5cbiAqL1xuZnVuY3Rpb24gdW50YXBBbGwoc3JjKSB7XG4gIGlmIChzcmNbVEFQU10pIHtcbiAgICBzcmNbVEFQU10gPSBbXTtcbiAgICBzZW5kQXN5bmMoc3JjKTtcbiAgfVxufVxuXG4vKipcbiAqIE1hcHMgdGhlIHZhbHVlcyBmcm9tIG9uZSBvciBtb3JlIHNvdXJjZSBjaGFubmVscyB0aHJvdWdoIGEgZnVuY3Rpb24sIHNlbmRpbmdcbiAqIHRoZSByZXN1bHRzIHRvIGEgbmV3IGNoYW5uZWwuXG4gKlxuICogVGhlIG1hcHBpbmcgZnVuY3Rpb24gaXMgZ2l2ZW4gb25lIHZhbHVlIGZyb20gZWFjaCBzb3VyY2UgY2hhbm5lbCwgYWZ0ZXIgYXRcbiAqIGxlYXN0IG9uZSB2YWx1ZSBiZWNvbWVzIGF2YWlsYWJsZSBvbiBldmVyeSBzb3VyY2UgY2hhbm5lbC4gVGhlIG91dHB1dCB2YWx1ZVxuICogZnJvbSB0aGUgZnVuY3Rpb24gaXMgdGhlbiBzZW50IHRvIHRoZSBkZXN0aW5hdGlvbiBjaGFubmVsLlxuICpcbiAqIFRoZSBkZXN0aW5hdGlvbiBjaGFubmVsIGlzIGNyZWF0ZWQgYnkgdGhlIGZ1bmN0aW9uIGJhc2VkIG9uIHRoZSBidWZmZXIgdmFsdWVcbiAqIHBhc3NlZCBhcyB0aGUgdGhpcmQgcGFyYW1ldGVyLiBJZiB0aGlzIGlzIG1pc3NpbmcsIGBudWxsYCwgb3IgYDBgLCB0aGVcbiAqIGRlc3RpbmF0aW9uIGNoYW5uZWwgd2lsbCBiZSB1bmJ1ZmZlcmVkLiBJZiBpdCdzIGEgcG9zaXRpdmUgaW50ZWdlciwgdGhlXG4gKiBkZXN0aW5hdGlvbiBjaGFubmVsIGlzIGJ1ZmZlcmVkIGJ5IGEgZml4ZWQgYnVmZmVyIG9mIHRoYXQgc2l6ZS4gSWYgdGhlXG4gKiBwYXJhbWV0ZXIgaXMgYSBidWZmZXIsIHRoZW4gdGhhdCBidWZmZXIgaXMgdXNlZCB0byBidWZmZXIgdGhlIGRlc3RpbmF0aW9uXG4gKiBjaGFubmVsLlxuICpcbiAqIE9uY2UgKmFueSogc291cmNlIGNoYW5uZWwgaXMgY2xvc2VkLCB0aGUgbWFwcGluZyBjZWFzZXMgYW5kIHRoZSBkZXN0aW5hdGlvblxuICogY2hhbm5lbCBpcyBhbHNvIGNsb3NlZC5cbiAqXG4gKiBUaGlzIGlzIG9idmlvdXNseSBzaW1pbGFyIHRvIGEgbWFwIHRyYW5zZHVjZXIsIGJ1dCB1bmxpa2UgYSB0cmFuc2R1Y2VyLCB0aGlzXG4gKiBmdW5jdGlvbiB3b3JrcyB3aXRoIG11bHRpcGxlIGlucHV0IGNoYW5uZWxzLiBUaGlzIGlzIHNvbWV0aGluZyB0aGF0IGFcbiAqIHRyYW5zZHVjZXIgb24gYSBzaW5nbGUgY2hhbm5lbCBpcyB1bmFibGUgdG8gZG8uXG4gKlxuICogYGBgXG4gKiBpbXBvcnQgeyBnbywgY2hhbiwgc2VuZCwgcmVjdiwgY2xvc2UsIGlzQ2xvc2VkIH0gZnJvbSBcIkBjc3BcIjtcbiAqIGltcG9ydCB7IG1hcCB9IGZyb20gXCJAb3BzXCJcbiAqXG4gKiBjb25zdCBpbnB1dDEgPSBjaGFuKCk7XG4gKiBjb25zdCBpbnB1dDIgPSBjaGFuKCk7XG4gKiBjb25zdCBpbnB1dDMgPSBjaGFuKCk7XG4gKiBjb25zdCBvdXRwdXQgPSBtYXAoKHgsIHksIHopID0+IHggKyB5ICsgeiwgW2lucHV0MSwgaW5wdXQyLCBpbnB1dDNdKTtcbiAqXG4gKiBnbyhhc3luYyAoKSA9PiB7XG4gKiAgIGF3YWl0IHNlbmQoaW5wdXQxLCAxKTtcbiAqICAgYXdhaXQgc2VuZChpbnB1dDEsIDIpO1xuICogICBhd2FpdCBzZW5kKGlucHV0MSwgMyk7XG4gKiB9KTtcbiAqXG4gKiBnbyhhc3luYyAoKSA9PiB7XG4gKiAgIGF3YWl0IHNlbmQoaW5wdXQyLCAxMCk7XG4gKiAgIGF3YWl0IHNlbmQoaW5wdXQyLCAyMCk7XG4gKiAgIGNsb3NlKGlucHV0Mik7XG4gKiB9KTtcbiAqXG4gKiBnbyhhc3luYyAoKSA9PiB7XG4gKiAgIGF3YWl0IHNlbmQoaW5wdXQzLCAxMDApO1xuICogICBhd2FpdCBzZW5kKGlucHV0MywgMjAwKTtcbiAqICAgYXdhaXQgc2VuZChpbnB1dDMsIDMwMCk7XG4gKiB9KTtcbiAqXG4gKiBnbyhhc3luYyAoKSA9PiB7XG4gKiAgIGNvbnNvbGUubG9nKGF3YWl0IHJlY3Yob3V0cHV0KSk7ICAgICAvLyAtPiAxMTFcbiAqICAgY29uc29sZS5sb2coYXdhaXQgcmVjdihvdXRwdXQpKTsgICAgIC8vIC0+IDIyMlxuICogICAvLyBPdXRwdXQgY2xvc2VzIG5vdyBiZWNhdXNlIGlucHV0MiBjbG9zZXMgYWZ0ZXIgMiB2YWx1ZXNcbiAqICAgY29uc29sZS5sb2coaXNDbG9zZWQob3V0cHV0KSk7ICAgICAgIC8vIC0+IHRydWVcbiAqIH0pO1xuICogYGBgXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpvcHNcbiAqIEBwYXJhbSB7bW9kdWxlOm9wcy5NYXBwZXJ9IGZuIFRoZSBtYXBwaW5nIGZ1bmN0aW9uLiBUaGlzIHNob3VsZCBoYXZlIG9uZVxuICogICAgIHBhcmFtZXRlciBmb3IgZWFjaCBzb3VyY2UgY2hhbm5lbCBhbmQgcmV0dXJuIGEgc2luZ2xlIHZhbHVlLlxuICogQHBhcmFtIHttb2R1bGU6Y3NwLkNoYW5uZWxbXX0gc3JjcyBUaGUgc291cmNlIGNoYW5uZWxzLlxuICogQHBhcmFtIHsobnVtYmVyfG1vZHVsZTpjc3AuQnVmZmVyKX0gW2J1ZmZlcj0wXSBBIGJ1ZmZlciB1c2VkIHRvIGNyZWF0ZSB0aGVcbiAqICAgICBkZXN0aW5hdGlvbiBjaGFubmVsLiBJZiB0aGlzIGlzIGEgbnVtYmVyLCBhXG4gKiAgICAge0BsaW5rIG1vZHVsZTpjc3AuRml4ZWRCdWZmZXJ9IG9mIHRoYXQgc2l6ZSB3aWxsIGJlIHVzZWQuIElmIHRoaXMgaXMgYDBgXG4gKiAgICAgb3Igbm90IHByZXNlbnQsIHRoZSBjaGFubmVsIHdpbGwgYmUgdW5idWZmZXJlZC5cbiAqIEByZXR1cm4ge21vZHVsZTpjc3AuQ2hhbm5lbH0gVGhlIGRlc3RpbmF0aW9uIGNoYW5uZWwuXG4gKi9cbmZ1bmN0aW9uIG1hcChmbiwgc3JjcywgYnVmZmVyID0gMCkge1xuICBjb25zdCBkc3QgPSBjaGFuKGJ1ZmZlcik7XG4gIGNvbnN0IHNyY2xlbiA9IHNyY3MubGVuZ3RoO1xuICBjb25zdCB2YWx1ZXMgPSBbXTtcbiAgY29uc3QgY2FsbGJhY2tzID0gW107XG4gIGNvbnN0IHRlbXAgPSBjaGFuKCk7XG4gIGxldCBjb3VudDtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHNyY2xlbjsgaSsrKSB7XG4gICAgY2FsbGJhY2tzW2ldID0gKGluZGV4ID0+IHtcbiAgICAgIHJldHVybiB2YWx1ZSA9PiB7XG4gICAgICAgIHZhbHVlc1tpbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgaWYgKC0tY291bnQgPT09IDApIHtcbiAgICAgICAgICBzZW5kQXN5bmModGVtcCwgdmFsdWVzLnNsaWNlKCkpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0pKGkpO1xuICB9XG5cbiAgZ28oYXN5bmMgKCkgPT4ge1xuICAgIGZvciAoOzspIHtcbiAgICAgIGNvdW50ID0gc3JjbGVuO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcmNsZW47IGkrKykge1xuICAgICAgICByZWN2QXN5bmMoc3Jjc1tpXSwgY2FsbGJhY2tzW2ldKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHZhbHVlcyA9IGF3YWl0IHJlY3YodGVtcCk7XG4gICAgICBmb3IgKGNvbnN0IHZhbHVlIG9mIHZhbHVlcykge1xuICAgICAgICBpZiAodmFsdWUgPT09IENMT1NFRCkge1xuICAgICAgICAgIC8vIE9uY2UgYSBzb3VyY2UgY2xvc2VzLCB3ZSBjbG9zZSB0aGUgZGVzdGluYXRpb24gQU5EIHRoZSByZXN0IG9mIHRoZVxuICAgICAgICAgIC8vIHNvdXJjZXMuIE90aGVyd2lzZSB0aGUgc291cmNlcyB3aWxsIGhhdmUgbm90aGluZyByZWNlaXZpbmcgZnJvbVxuICAgICAgICAgIC8vIHRoZW0gYW5kIHNlbmRzIHRvIHRoZW0gd2lsbCBibG9jayBmb3JldmVyLiBCeSBjbG9zaW5nIHRoZW0sIHNlbmRzXG4gICAgICAgICAgLy8gdG8gdGhlbSB3aWxsIGltbWVkaWF0ZWx5IHJldHVybiBgZmFsc2VgIGFuZCBub3QgYmxvY2suXG4gICAgICAgICAgY2xvc2UoZHN0KTtcbiAgICAgICAgICBmb3IgKGNvbnN0IHNyYyBvZiBzcmNzKSB7XG4gICAgICAgICAgICBjbG9zZShzcmMpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGF3YWl0IHNlbmQoZHN0LCBmbiguLi52YWx1ZXMpKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBkc3Q7XG59XG5cbmV4cG9ydCB7IHBpcGUsIHBhcnRpdGlvbiwgbWVyZ2UsIHNwbGl0LCB0YXAsIHVudGFwLCB1bnRhcEFsbCwgbWFwIH07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuLyoqXG4gKiBBIHNldCBvZiBjaGFubmVsIHV0aWxpdGllcyBmb3IgY2hhbmdpbmcgdGhlIHRpbWluZyBvZiBpbnB1dHMgYmVpbmcgcHV0IG9udG9cbiAqIHRoZSBpbnB1dCBjaGFubmVsLlxuICpcbiAqIEBtb2R1bGUgb3BzL3RpbWluZ1xuICogQHByaXZhdGVcbiAqL1xuXG5pbXBvcnQge1xuICBnbyxcbiAgY2hhbixcbiAgc2VuZCxcbiAgc2VsZWN0LFxuICBjbG9zZSxcbiAgQ0xPU0VELFxuICBpc1RpbWVkLFxuICB0aW1lZENoYW5cbn0gZnJvbSBcIkBjaGFua28vY3NwXCI7XG5cbmltcG9ydCB7IGlzTnVtYmVyIH0gZnJvbSBcIm1vZHVsZXMvY29tbW9uXCI7XG5cbi8qKlxuICogRGVib3VuY2VzIGFuIGlucHV0IGNoYW5uZWwuXG4gKlxuICogRGVib3VuY2luZyBpcyB0aGUgYWN0IG9mIHR1cm5pbmcgc2V2ZXJhbCBpbnB1dCB2YWx1ZXMgaW50byBvbmUuIEZvciBleGFtcGxlLFxuICogZGVib3VuY2luZyBhIGNoYW5uZWwgZHJpdmVuIGJ5IGEgYG1vdXNlbW92ZWAgZXZlbnQgd291bGQgY2F1c2Ugb25seSB0aGUgZmluYWxcbiAqIGBtb3VzZW1vdmVgIGV2ZW50IHRvIGJlIHB1dCBvbnRvIHRoZSBjaGFubmVsLCBkcm9wcGluZyBhbGwgb2YgdGhlIG90aGVyIG9uZXMuXG4gKiBUaGlzIGNhbiBiZSBkZXNpcmFibGUgYmVjYXVzZSBgbW91c2Vtb3ZlYCBldmVudHMgY29tZSBpbiBidW5jaGVzLCBiZWluZ1xuICogcHJvZHVjZWQgY29udGludWFsbHkgd2hpbGUgdGhlIG1vdXNlIGlzIG1vdmluZywgYW5kIG9mdGVuIGFsbCB0aGF0IHdlIHJlYWxseVxuICogY2FyZSBhYm91dCBpcyB0byBsZWFybiB3aGVyZSB0aGUgbW91c2UgZW5kZWQgdXAuXG4gKlxuICogVGhpcyBmdW5jdGlvbiBkb2VzIHRoaXMgYnkgY29udHJvbGxpbmcgd2hpY2ggdmFsdWVzIHRoYXQgaGF2ZSBiZWVuIHNlbnQgdG9cbiAqIHRoZSBzb3VyY2UgY2hhbm5lbCBhcmUgbWFkZSBhdmFpbGFibGUgb24gdGhlIGRlc3RpbmF0aW9uIGNoYW5uZWwsIGFuZCB3aGVuLlxuICpcbiAqIFRoZSBgZGVsYXlgIHBhcmFtZXRlciBkZXRlcm1pbmVzIHRoZSBkZWJvdW5jZSB0aHJlc2hvbGQuIE9uY2UgdGhlIGZpcnN0IHZhbHVlXG4gKiBpcyBzZW50IHRvIHRoZSBzb3VyY2UgY2hhbm5lbCwgZGVib3VuY2luZyBpcyBpbiBlZmZlY3QgdW50aWwgdGhlIG51bWJlciBvZlxuICogbWlsbGlzZWNvbmRzIGluIGBkZWxheWAgcGFzc2VzIHdpdGhvdXQgYW55IG90aGVyIHZhbHVlIGJlaW5nIHB1dCBvbnRvIHRoYXRcbiAqIGNoYW5uZWwuIEluIG90aGVyIHdvcmRzLCB0aGUgZGVsYXkgd2lsbCBiZSByZWZyZXNoZWQgaWYgYW5vdGhlciB2YWx1ZSBpcyBzZW50XG4gKiB0byB0aGUgc291cmNlIGNoYW5uZWwgYmVmb3JlIHRoZSBkZWxheSBlbGFwc2VzLiBBZnRlciBhIGZ1bGwgZGVsYXkgaW50ZXJ2YWxcbiAqIHBhc3NlcyB3aXRob3V0IGEgdmFsdWUgYmVpbmcgc2VudCB0byB0aGUgc291cmNlIGNoYW5uZWwsIHRoZSBsYXN0IHZhbHVlIHNlbnRcbiAqIGJlY29tZXMgYXZhaWxhYmxlIG9uIHRoZSBkZXN0aW5hdGlvbiBjaGFubmVsLlxuICpcbiAqIFRoaXMgYmVoYXZpb3IgY2FuIGJlIG1vZGlmaWVkIHRocm91Z2ggZm91ciBvcHRpb25zOiBgbGVhZGluZ2AsIGB0cmFpbGluZ2AsXG4gKiBgbWF4RGVsYXlgLCBhbmQgYGNhbmNlbGAuXG4gKlxuICogSWYgYm90aCBgbGVhZGluZ2AgYW5kIGB0cmFpbGluZ2AgYXJlIGB0cnVlYCwgdmFsdWVzIHdpbGwgbm90IGJlIGR1cGxpY2F0ZWQuXG4gKiBUaGUgZmlyc3QgdmFsdWUgcHV0IG9udG8gdGhlIHNvdXJjZSBjaGFubmVsIHdpbGwgYmUgcHV0IG9udG8gdGhlIGRlc3RpbmF0aW9uXG4gKiBjaGFubmVsIGltbWVkaWF0ZWx5IChwZXIgYGxlYWRpbmdgKSBhbmQgdGhlIGRlbGF5IHdpbGwgYmVnaW4sIGJ1dCBhIHZhbHVlXG4gKiB3aWxsIG9ubHkgYmUgbWFkZSBhdmFpbGFibGUgb24gdGhlIGRlc3RpbmF0aW9uIGNoYW5uZWwgYXQgdGhlIGVuZCBvZiB0aGVcbiAqIGRlbGF5IChwZXIgYHRyYWlsaW5nYCkgaWYgKmFub3RoZXIqIGlucHV0IHZhbHVlIHdhcyBwdXQgb250byB0aGUgc291cmNlXG4gKiBjaGFubmVsIGJlZm9yZSB0aGUgZGVsYXkgZXhwaXJlZC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOm9wc1xuICogQHBhcmFtIHttb2R1bGU6Y3NwLkNoYW5uZWx9IHNyYyBUaGUgc291cmNlIGNoYW5uZWwuXG4gKiBAcGFyYW0geyhudW1iZXJ8bW9kdWxlOmNzcC5CdWZmZXIpfSBbYnVmZmVyPTBdIEEgYnVmZmVyIHVzZWQgdG8gY3JlYXRlIHRoZVxuICogICAgIGRlc3RpbmF0aW9uIGNoYW5uZWwuIElmIHRoaXMgaXMgYSBudW1iZXIsIGFcbiAqICAgICB7QGxpbmsgbW9kdWxlOmNzcC5GaXhlZEJ1ZmZlcnxGaXhlZEJ1ZmZlcn0gb2YgdGhhdCBzaXplIHdpbGwgYmUgdXNlZC4gSWZcbiAqICAgICB0aGlzIGlzIGAwYCBvciBub3QgcHJlc2VudCwgdGhlIGNoYW5uZWwgd2lsbCBiZSB1bmJ1ZmZlcmVkLlxuICogQHBhcmFtIHtudW1iZXJ9IGRlbGF5IFRoZSBkZWJvdW5jaW5nIGRlbGF5LCBpbiBtaWxsaXNlY29uZHMuXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dIEEgc2V0IG9mIG9wdGlvbnMgdG8gZnVydGhlciBjb25maWd1cmUgdGhlXG4gKiAgICAgZGVib3VuY2luZy5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMubGVhZGluZz1mYWxzZV0gSW5zdGVhZCBvZiBtYWtpbmcgYSB2YWx1ZSBhdmFpbGFibGVcbiAqICAgICBvbiB0aGUgZGVzdGluYXRpb24gY2hhbm5lbCBhZnRlciB0aGUgZGVsYXkgcGFzc2VzLCB0aGUgZmlyc3QgdmFsdWUgcHV0XG4gKiAgICAgb250byB0aGUgc291cmNlIGNoYW5uZWwgaXMgbWFkZSBhdmFpbGFibGUgKmJlZm9yZSogdGhlIGRlbGF5IGJlZ2lucy4gTm9cbiAqICAgICB2YWx1ZSBpcyBhdmFpbGFibGUgb24gdGhlIGRlc3RpbmF0aW9uIGNoYW5uZWwgYWZ0ZXIgdGhlIGRlbGF5IGhhcyBlbGFwc2VkXG4gKiAgICAgKHVubGVzcyBgdHJhaWxpbmdgIGlzIGFsc28gYHRydWVgKS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMudHJhaWxpbmc9dHJ1ZV0gVGhlIGRlZmF1bHQgYmVoYXZpb3IsIHdoZXJlIGEgdmFsdWVcbiAqICAgICBpcyBub3QgbWFkZSBhdmFpbGFibGUgb24gdGhlIGRlc3RpbmF0aW9uIGNoYW5uZWwgdW50aWwgdGhlIGVudGlyZSBkZWxheVxuICogICAgIHBhc3NlcyB3aXRob3V0IGEgbmV3IHZhbHVlIGJlaW5nIHB1dCBvbiB0aGUgc291cmNlIGNoYW5uZWwuXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMubWF4RGVsYXk9MF0gVGhlIG1heGltdW0gZGVsYXkgYWxsb3dlZCBiZWZvcmUgYSB2YWx1ZVxuICogICAgIGlzIHB1dCBvbnRvIHRoZSBkZXN0aW5hdGlvbiBjaGFubmVsLiBEZWJvdW5jaW5nIGNhbiwgaW4gdGhlb3J5LCBnbyBvblxuICogICAgIGZvcmV2ZXIgYXMgbG9uZyBhcyBuZXcgaW5wdXQgdmFsdWVzIGNvbnRpbnVlIHRvIGJlIHB1dCBvbnRvIHRoZSBzb3VyY2VcbiAqICAgICBjaGFubmVsIGJlZm9yZSB0aGUgZGVsYXkgZXhwaXJlcy4gU2V0dGluZyB0aGlzIG9wdGlvbiB0byBhIHBvc2l0aXZlXG4gKiAgICAgbnVtYmVyIHNldHMgdGhlIG1heGltdW0gbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0aGF0IGRlYm91bmNpbmcgY2FuIGdvIG9uXG4gKiAgICAgYmVmb3JlIGl0J3MgZm9yY2VkIHRvIGVuZCwgZXZlbiBpZiBpbiB0aGUgbWlkZGxlIG9mIGEgZGVib3VuY2luZyBkZWxheS5cbiAqICAgICBIYXZpbmcgZGVib3VuY2luZyBlbmQgdGhyb3VnaCB0aGUgbWF4IGRlbGF5IG9wZXJhdGVzIGV4YWN0bHkgYXMgaWYgaXQgaGFkXG4gKiAgICAgZW5kZWQgYmVjYXVzZSBvZiBsYWNrIG9mIGlucHV0OyB0aGUgbGFzdCBpbnB1dCBpcyBtYWRlIGF2YWlsYWJsZSBvbiB0aGVcbiAqICAgICBkZXN0aW5hdGlvbiBjaGFubmVsIChpZiBgdHJhaWxpbmdgIGlzIGB0cnVlYCksIGFuZCB0aGUgbmV4dCBpbnB1dCB3aWxsXG4gKiAgICAgdHJpZ2dlciBhbm90aGVyIGRlYm91bmNlIG9wZXJhdGlvbi5cbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5DaGFubmVsfSBbb3B0aW9ucy5jYW5jZWxdIEEgY2hhbm5lbCB1c2VkIHRvIHNpZ25hbCBhXG4gKiAgICAgY2FuY2VsbGF0aW9uIG9mIHRoZSBkZWJvdW5jaW5nLiBBbnkgdmFsdWUgcHV0IG9udG8gdGhpcyBjaGFubmVsIHdpbGxcbiAqICAgICBjYW5jZWwgdGhlIGN1cnJlbnQgZGVib3VuY2luZyBvcGVyYXRpb24sIGNsb3NpbmcgdGhlIG91dHB1dCBjaGFubmVsIGFuZFxuICogICAgIGRpc2NhcmRpbmcgYW55IHZhbHVlcyB0aGF0IHdlcmUgd2FpdGluZyBmb3IgdGhlIGRlYm91bmNlIHRocmVzaG9sZCB0aW1lclxuICogICAgIHRvIGJlIHNlbnQgdG8gdGhlIG91dHB1dC5cbiAqIEByZXR1cm4ge21vZHVsZTpjc3AuQ2hhbm5lbH0gVGhlIG5ld2x5LWNyZWF0ZWQgZGVzdGluYXRpb24gY2hhbm5lbCwgd2hlcmUgYWxsXG4gKiAgICAgb2YgdGhlIHZhbHVlcyB3aWxsIGJlIGRlYm91bmNlZCBmcm9tIHRoZSBzb3VyY2UgY2hhbm5lbC5cbiAqL1xuZnVuY3Rpb24gZGVib3VuY2Uoc3JjLCBidWZmZXIsIGRlbGF5LCBvcHRpb25zKSB7XG4gIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgIGxlYWRpbmc6IGZhbHNlLFxuICAgIHRyYWlsaW5nOiB0cnVlLFxuICAgIG1heERlbGF5OiAwLFxuICAgIGNhbmNlbDogY2hhbigpXG4gIH07XG4gIGNvbnN0IFtidWYsIGRlbCwgb3B0c10gPSBpc051bWJlcihkZWxheSlcbiAgICA/IFtidWZmZXIsIGRlbGF5LCBPYmplY3QuYXNzaWduKGRlZmF1bHRzLCBvcHRpb25zID8/IHt9KV1cbiAgICA6IFswLCBidWZmZXIsIE9iamVjdC5hc3NpZ24oZGVmYXVsdHMsIGRlbGF5ID8/IHt9KV07XG5cbiAgY29uc3QgZHN0ID0gY2hhbihidWYpO1xuICBjb25zdCB7IGxlYWRpbmcsIHRyYWlsaW5nLCBtYXhEZWxheSwgY2FuY2VsIH0gPSBvcHRzO1xuXG4gIGdvKGFzeW5jICgpID0+IHtcbiAgICBsZXQgdGltZXIgPSBjaGFuKCk7XG4gICAgbGV0IG1heCA9IGNoYW4oKTtcbiAgICBsZXQgY3VycmVudCA9IENMT1NFRDtcblxuICAgIGZvciAoOzspIHtcbiAgICAgIGNvbnN0IHsgdmFsdWUsIGNoYW5uZWwgfSA9IGF3YWl0IHNlbGVjdChbc3JjLCB0aW1lciwgbWF4LCBjYW5jZWxdKTtcblxuICAgICAgaWYgKGNoYW5uZWwgPT09IGNhbmNlbCkge1xuICAgICAgICBjbG9zZShkc3QpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGlmIChjaGFubmVsID09PSBzcmMpIHtcbiAgICAgICAgaWYgKHZhbHVlID09PSBDTE9TRUQpIHtcbiAgICAgICAgICBjbG9zZShkc3QpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdGltaW5nID0gaXNUaW1lZCh0aW1lcik7XG4gICAgICAgIHRpbWVyID0gdGltZWRDaGFuKGRlbCk7XG5cbiAgICAgICAgaWYgKCF0aW1pbmcgJiYgbWF4RGVsYXkgPiAwKSB7XG4gICAgICAgICAgbWF4ID0gdGltZWRDaGFuKG1heERlbGF5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChsZWFkaW5nKSB7XG4gICAgICAgICAgaWYgKCF0aW1pbmcpIHtcbiAgICAgICAgICAgIGF3YWl0IHNlbmQoZHN0LCB2YWx1ZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGN1cnJlbnQgPSB2YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodHJhaWxpbmcpIHtcbiAgICAgICAgICBjdXJyZW50ID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRpbWVyID0gY2hhbigpO1xuICAgICAgICBtYXggPSBjaGFuKCk7XG4gICAgICAgIGlmICh0cmFpbGluZyAmJiBjdXJyZW50ICE9PSBDTE9TRUQpIHtcbiAgICAgICAgICBhd2FpdCBzZW5kKGRzdCwgY3VycmVudCk7XG4gICAgICAgICAgY3VycmVudCA9PT0gQ0xPU0VEO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZHN0O1xufVxuXG4vKipcbiAqIFRocm90dGxlcyBhbiBpbnB1dCBjaGFubmVsLlxuICpcbiAqIFRocm90dGxpbmcgaXMgdGhlIGFjdCBvZiBlbnN1cmluZyB0aGF0IHNvbWV0aGluZyBvbmx5IGhhcHBlbnMgb25jZSBwZXIgdGltZVxuICogaW50ZXJ2YWwuIEluIHRoaXMgY2FzZSwgaXQgbWVhbnMgdGhhdCBhIHZhbHVlIHNlbnQgdG8gdGhlIHNvdXJjZSBjaGFubmVsIGlzXG4gKiBvbmx5IG1hZGUgYXZhaWxhYmxlIHRvIHRoZSBkZXN0aW5hdGlvbiBjaGFubmVsIG9uY2UgcGVyIGEgZ2l2ZW4gbnVtYmVyIG9mXG4gKiBtaWxsaXNlY29uZHMuIEFuIGV4YW1wbGUgdXNhZ2Ugd291bGQgYmUgd2l0aCB3aW5kb3cgc2Nyb2xsIGV2ZW50czsgdGhlc2VcbiAqIGV2ZW50cyBhcmUgbmVhcmx5IGNvbnRpbnVvdXMgYXMgc2Nyb2xsaW5nIGlzIGhhcHBlbmluZywgYW5kIHBlcmhhcHMgd2UgZG9uJ3RcbiAqIHdhbnQgdG8gY2FsbCBhbiBleHBlbnNpdmUgVUkgdXBkYXRpbmcgZnVuY3Rpb24gZXZlcnkgdGltZSBhIHNjcm9sbCBldmVudCBpc1xuICogZmlyZWQuIFdlIGNhbiB0aHJvdHRsZSB0aGUgaW5wdXQgY2hhbm5lbCBhbmQgbWFrZSBpdCBvbmx5IG9mZmVyIHVwIHRoZSBzY3JvbGxcbiAqIGV2ZW50cyBvbmNlIGV2ZXJ5IDEwMCBtaWxsaXNlY29uZHMsIGZvciBpbnN0YW5jZS5cbiAqXG4gKiBUaHJvdHRsaW5nIGlzIGVmZmVjdGVkIGJ5IGNyZWF0aW5nIGEgbmV3IGNoYW5uZWwgYXMgYSB0aHJvdHRsZWQgZGVzdGluYXRpb25cbiAqIGZvciB2YWx1ZXMgc2VudCB0byB0aGUgc291cmNlIGNoYW5uZWwuIFZhbHVlcyB3aWxsIG9ubHkgYXBwZWFyIG9uIHRoYXRcbiAqIGRlc3RpbmF0aW9uIGNoYW5uZWwgb25jZSBwZXIgZGVsYXkgaW50ZXJ2YWw7IG90aGVyIHZhbHVlcyB0aGF0IGFyZSBwdXQgb250b1xuICogdGhlIHNvdXJjZSBjaGFubmVsIGluIHRoZSBtZWFudGltZSBhcmUgZGlzY2FyZGVkLlxuICpcbiAqIFRoZSBgZGVsYXlgIHBhcmFtZXRlciBjb250cm9scyBob3cgb2Z0ZW4gYSB2YWx1ZSBjYW4gYmVjb21lIGF2YWlsYWJsZSBvbiB0aGVcbiAqIGRlc3RpbmF0aW9uIGNoYW5uZWwuIFdoZW4gdGhlIGZpcnN0IHZhbHVlIGlzIHNlbnQgdG8gdGhlIHNvdXJjZSBjaGFubmVsLCBpdFxuICogaXMgaW1tZWRpYXRlbHkgc2VudCB0byB0aGUgZGVzdGluYXRpb24gY2hhbm5lbCBhcyB3ZWxsIGFuZCB0aGUgZGVsYXkgYmVnaW5zLlxuICogQW55IGZ1cnRoZXIgdmFsdWVzIHNlbnQgdG8gdGhlIHNvdXJjZSBjaGFubmVsIGR1cmluZyB0aGF0IGRlbGF5IGFyZSAqbm90KlxuICogcGFzc2VkIHRocm91Z2g7IG9ubHkgd2hlbiB0aGUgZGVsYXkgZXhwaXJlcyBpcyB0aGUgbGFzdCBpbnB1dCB2YWx1ZSBtYWRlXG4gKiBhdmFpbGFibGUgb24gdGhlIGRlc3RpbmF0aW9uIGNoYW5uZWwuIFRoZSBkZWxheSB0aGVuIGJlZ2lucyBhZ2Fpbiwgc28gdGhhdFxuICogZnVydGhlciBpbnB1dHMgYXJlIHNxdWVsY2hlZCB1bnRpbCAqdGhhdCogZGVsYXkgcGFzc2VzLiBUaHJvdHRsaW5nIGNvbnRpbnVlcyxcbiAqIG9ubHkgYWxsb3dpbmcgb25lIHZhbHVlIHRocm91Z2ggcGVyIGludGVydmFsLCB1bnRpbCBhbiBlbnRpcmUgaW50ZXJ2YWwgcGFzc2VzXG4gKiB3aXRob3V0IGlucHV0LlxuICpcbiAqIFRoaXMgYmVoYXZpb3IgY2FuIGJlIG1vZGlmaWVkIGJ5IHRocmVlIG9wdGlvbnM6IGBsZWFkaW5nYCwgYHRyYWlsaW5nYCwgYW5kXG4gKiBgY2FuY2VsYC5cbiAqXG4gKiBJZiBib3RoIGBsZWFkaW5nYCBhbmQgYHRyYWlsaW5nYCBhcmUgYHRydWVgLCB2YWx1ZXMgd2lsbCBub3QgYmUgZHVwbGljYXRlZC5cbiAqIFRoZSBmaXJzdCB2YWx1ZSBzZW50IHRvIHRoZSBzb3VyY2UgY2hhbm5lbCB3aWxsIGJlIHB1dCBvbnRvIHRoZSBkZXN0aW5hdGlvblxuICogY2hhbm5lbCBpbW1lZGlhdGVseSAocGVyIGBsZWFkaW5nYCkgYW5kIHRoZSBkZWxheSB3aWxsIGJlZ2luLCBidXQgYSB2YWx1ZVxuICogd2lsbCBvbmx5IGJlIG1hZGUgYXZhaWxhYmxlIG9uIHRoZSBkZXN0aW5hdGlvbiBjaGFubmVsIGF0IHRoZSBlbmQgb2YgdGhlXG4gKiBkZWxheSAocGVyIGB0cmFpbGluZ2ApIGlmICphbm90aGVyKiBpbnB1dCB2YWx1ZSB3YXMgc2VudCB0byB0aGUgc291cmNlXG4gKiBjaGFubmVsIGJlZm9yZSB0aGUgZGVsYXkgZXhwaXJlZC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOm9wc1xuICogQHBhcmFtIHttb2R1bGU6Y3NwLkNoYW5uZWx9IHNyYyBUaGUgc291cmNlIGNoYW5uZWwuXG4gKiBAcGFyYW0geyhudW1iZXJ8bW9kdWxlOmNzcC5CdWZmZXIpfSBbYnVmZmVyPTBdIEEgYnVmZmVyIHVzZWQgdG8gY3JlYXRlIHRoZVxuICogICAgIGRlc3RpbmF0aW9uIGNoYW5uZWwuIElmIHRoaXMgaXMgYSBudW1iZXIsIGFcbiAqICAgICB7QGxpbmsgbW9kdWxlOmNzcC5GaXhlZEJ1ZmZlcnxGaXhlZEJ1ZmZlcn0gb2YgdGhhdCBzaXplIHdpbGwgYmUgdXNlZC4gSWZcbiAqICAgICB0aGlzIGlzIGAwYCBvciBub3QgcHJlc2VudCwgdGhlIGNoYW5uZWwgd2lsbCBiZSB1bmJ1ZmZlcmVkLlxuICogQHBhcmFtIHtudW1iZXJ9IGRlbGF5IFRoZSB0aHJvdHRsaW5nIGRlbGF5LCBpbiBtaWxsaXNlY29uZHMuXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dIEEgc2V0IG9mIG9wdGlvbnMgdG8gZnVydGhlciBjb25maWd1cmUgdGhlXG4gKiB0aHJvdHRsaW5nLlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5sZWFkaW5nPXRydWVdIE1ha2VzIHRoZSB2YWx1ZSB0aGF0IHRyaWdnZXJlZCB0aGVcbiAqICAgICB0aHJvdHRsaW5nIGltbWVkaWF0ZWx5IGF2YWlsYWJsZSBvbiB0aGUgZGVzdGluYXRpb24gY2hhbm5lbCBiZWZvcmVcbiAqICAgICBiZWdpbm5pbmcgdGhlIGRlbGF5LiBJZiB0aGlzIGlzIGBmYWxzZWAsIHRoZSBmaXJzdCB2YWx1ZSB3aWxsIG5vdCBiZSBwdXRcbiAqICAgICBvbnRvIHRoZSBkZXN0aW5hdGlvbiBjaGFubmVsIHVudGlsIGEgZnVsbCBkZWxheSBpbnRlcnZhbCBwYXNzZXMuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnRyYWlsaW5nPXRydWVdIE1ha2VzIHRoZSBsYXN0IHZhbHVlIHB1dCBvbnRvIHRoZVxuICogICAgIHNvdXJjZSBjaGFubmVsIGF2YWlsYWJsZSBvbiB0aGUgZGVzdGluYXRpb24gY2hhbm5lbCB3aGVuIHRoZSBkZWxheVxuICogICAgIGV4cGlyZXMuIElmIHRoaXMgaXMgYGZhbHNlYCwgYW55IGlucHV0cyB0aGF0IGNvbWUgaW4gZHVyaW5nIHRoZSBkZWxheSBhcmVcbiAqICAgICBpZ25vcmVkLCBhbmQgdGhlIG5leHQgdmFsdWUgaXMgbm90IHB1dCBvbnRvIHRoZSBkZXN0aW5hdGlvbiBjaGFubmVsIHVudGlsXG4gKiAgICAgdGhlIGZpcnN0IGlucHV0ICphZnRlciogdGhlIGRlbGF5IGV4cGlyZXMuXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuQ2hhbm5lbH0gW29wdGlvbnMuY2FuY2VsXSBBIGNoYW5uZWwgdXNlZCB0byBzaWduYWwgYVxuICogICAgIGNhbmNlbGxhdGlvbiBvZiB0aGUgdGhyb3R0bGluZy4gQW55IHZhbHVlIHB1dCBvbnRvIHRoaXMgY2hhbm5lbCB3aWxsXG4gKiAgICAgY2FuY2VsIHRoZSBjdXJyZW50IHRocm90dGxpbmcgb3BlcmF0aW9uLCBjbG9zaW5nIHRoZSBvdXRwdXQgY2hhbm5lbCBhbmRcbiAqICAgICBkaXNjYXJkaW5nIGFueSB2YWx1ZXMgdGhhdCB3ZXJlIHdhaXRpbmcgZm9yIHRoZSB0aHJvdHRsZSB0aHJlc2hvbGQgdGltZXJcbiAqICAgICB0byBiZSBzZW50IHRvIHRoZSBvdXRwdXQuXG4gKiBAcmV0dXJuIHttb2R1bGU6Y3NwLkNoYW5uZWx9fSBUaGUgbmV3bHktY3JlYXRlZCBkZXN0aW5hdGlvbiBjaGFubmVsLCB3aGVyZVxuICogICAgIGFsbCBvZiB0aGUgdmFsdWVzIHdpbGwgYmUgdGhyb3R0bGVkIGZyb20gdGhlIHNvdXJjZSBjaGFubmVsLlxuICovXG5mdW5jdGlvbiB0aHJvdHRsZShzcmMsIGJ1ZmZlciwgZGVsYXksIG9wdGlvbnMpIHtcbiAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgbGVhZGluZzogdHJ1ZSxcbiAgICB0cmFpbGluZzogdHJ1ZSxcbiAgICBjYW5jZWw6IGNoYW4oKVxuICB9O1xuICBjb25zdCBbYnVmLCBkZWwsIG9wdHNdID0gaXNOdW1iZXIoZGVsYXkpXG4gICAgPyBbYnVmZmVyLCBkZWxheSwgT2JqZWN0LmFzc2lnbihkZWZhdWx0cywgb3B0aW9ucyA/PyB7fSldXG4gICAgOiBbMCwgYnVmZmVyLCBPYmplY3QuYXNzaWduKGRlZmF1bHRzLCBkZWxheSA/PyB7fSldO1xuXG4gIGNvbnN0IGRzdCA9IGNoYW4oYnVmKTtcbiAgY29uc3QgeyBsZWFkaW5nLCB0cmFpbGluZywgY2FuY2VsIH0gPSBvcHRzO1xuXG4gIGdvKGFzeW5jICgpID0+IHtcbiAgICBsZXQgdGltZXIgPSBjaGFuKCk7XG4gICAgbGV0IGN1cnJlbnQgPSBDTE9TRUQ7XG5cbiAgICBmb3IgKDs7KSB7XG4gICAgICBjb25zdCB7IHZhbHVlLCBjaGFubmVsIH0gPSBhd2FpdCBzZWxlY3QoW3NyYywgdGltZXIsIGNhbmNlbF0pO1xuXG4gICAgICBpZiAoY2hhbm5lbCA9PT0gY2FuY2VsKSB7XG4gICAgICAgIGNsb3NlKGRzdCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2hhbm5lbCA9PT0gc3JjKSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gQ0xPU0VEKSB7XG4gICAgICAgICAgY2xvc2UoZHN0KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRpbWluZyA9IGlzVGltZWQodGltZXIpO1xuICAgICAgICBpZiAoIXRpbWluZykge1xuICAgICAgICAgIHRpbWVyID0gdGltZWRDaGFuKGRlbCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobGVhZGluZykge1xuICAgICAgICAgIGlmICghdGltaW5nKSB7XG4gICAgICAgICAgICBhd2FpdCBzZW5kKGRzdCwgdmFsdWUpO1xuICAgICAgICAgIH0gZWxzZSBpZiAodHJhaWxpbmcpIHtcbiAgICAgICAgICAgIGN1cnJlbnQgPSB2YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodHJhaWxpbmcpIHtcbiAgICAgICAgICBjdXJyZW50ID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodHJhaWxpbmcgJiYgY3VycmVudCAhPT0gQ0xPU0VEKSB7XG4gICAgICAgIHRpbWVyID0gdGltZWRDaGFuKGRlbCk7XG4gICAgICAgIGF3YWl0IHNlbmQoZHN0LCBjdXJyZW50KTtcbiAgICAgICAgY3VycmVudCA9IENMT1NFRDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRpbWVyID0gY2hhbigpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGRzdDtcbn1cblxuZXhwb3J0IHsgZGVib3VuY2UsIHRocm90dGxlIH07XG4iXSwic291cmNlUm9vdCI6IiJ9