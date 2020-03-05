(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["operations"] = factory();
	else
		root["operations"] = factory();
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

/***/ "../channels/lib/chanko.min.js":
/*!*************************************!*\
  !*** ../channels/lib/chanko.min.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Copyright (c) 2020 Thomas Otterson
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to 
 * deal in the Software without restriction, including without limitation the 
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or 
 * sell copies of the Software, and to permit persons to whom the Software is 
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in 
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING 
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER 
 * DEALINGS IN THE SOFTWARE.
 * 
 */
!function (e, t) {
   true ? module.exports = t() : undefined;
}(this, function () {
  return function (e) {
    var t = {};

    function n(r) {
      if (t[r]) return t[r].exports;
      var o = t[r] = {
        i: r,
        l: !1,
        exports: {}
      };
      return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
    }

    return n.m = e, n.c = t, n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, {
        enumerable: !0,
        get: r
      });
    }, n.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      });
    }, n.t = function (e, t) {
      if (1 & t && (e = n(e)), 8 & t) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (n.r(r), Object.defineProperty(r, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e) for (var o in e) n.d(r, o, function (t) {
        return e[t];
      }.bind(null, o));
      return r;
    }, n.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };
      return n.d(t, "a", t), t;
    }, n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, n.p = "", n(n.s = 10);
  }([function (e, t, n) {
    "use strict";

    n.d(t, "a", function () {
      return r;
    }), n.d(t, "f", function () {
      return u;
    }), n.d(t, "b", function () {
      return c;
    }), n.d(t, "d", function () {
      return i;
    }), n.d(t, "c", function () {
      return a;
    }), n.d(t, "e", function () {
      return f;
    });
    const r = Symbol("EMPTY"),
          o = Symbol("QUEUE");

    function u() {
      return Object.create(null, {
        store: {
          value: [],
          writable: !0
        },
        pointer: {
          value: 0,
          writable: !0
        },
        [o]: {
          value: !0
        }
      });
    }

    function c(e) {
      return e.store.length - e.pointer;
    }

    function i(e, t) {
      e.store.push(t);
    }

    function a(e) {
      if (0 === e.store.length) return r;
      const t = e.store[e.pointer];
      return 2 * ++e.pointer >= e.store.length && (e.store = e.store.slice(e.pointer), e.pointer = 0), t;
    }

    function f(e, t) {
      for (let n = 0, r = c(e); n < r; n++) {
        const n = a(e);
        t(n) && i(e, n);
      }
    }
  }, function (e, t, n) {
    "use strict";

    (function (e) {
      n.d(t, "b", function () {
        return u;
      }), n.d(t, "a", function () {
        return c;
      }), n.d(t, "c", function () {
        return i;
      }), n.d(t, "d", function () {
        return v;
      }), n.d(t, "e", function () {
        return b;
      });
      var r = n(0);
      const o = Object(r.f)(),
            u = Symbol("SET_IMMEDIATE"),
            c = Symbol("MESSAGE_CHANNEL"),
            i = Symbol("SET_TIMEOUT"),
            a = {
        batchSize: 1024,
        dispatchMethod: u
      };
      let f = d(),
          s = !1,
          l = !0;

      function d() {
        switch (function () {
          switch (a.dispatchMethod) {
            case c:
              return "undefined" != typeof MessageChannel ? c : i;

            case i:
              return i;

            default:
              return void 0 !== e ? u : "undefined" != typeof MessageChannel ? c : i;
          }
        }()) {
          case u:
            return () => {
              l && s || (l = !0, e(m));
            };

          case c:
            {
              const e = new MessageChannel();
              return e.port1.onmessage = () => m(), () => {
                l && s || (l = !0, e.port2.postMessage(0));
              };
            }

          case i:
            return () => {
              l && s || (l = !0, setTimeout(m, 0));
            };
        }
      }

      function m() {
        s = !0, l = !1;
        let e = 0;

        for (;;) {
          const t = Object(r.c)(o);
          if (t === r.a) break;
          if (t(), e >= a.batchSize) break;
          e++, s = !1, Object(r.b)(o) && f();
        }
      }

      function v(e = {}) {
        for (const t in a) t in e && (a[t] = e[t], "dispatchMethod" === t && (f = d()));

        return Object.assign({}, a);
      }

      function b(e) {
        Object(r.d)(o, e), f();
      }
    }).call(this, n(7).setImmediate);
  }, function (e, t) {
    e.exports = function (e) {
      this.wrapped = e;
    };
  }, function (e, t) {
    var n;

    n = function () {
      return this;
    }();

    try {
      n = n || new Function("return this")();
    } catch (e) {
      "object" == typeof window && (n = window);
    }

    e.exports = n;
  }, function (e, t, n) {
    var r = n(2);

    e.exports = function (e) {
      return new r(e);
    };
  }, function (e, t, n) {
    var r = n(6);

    e.exports = function (e) {
      return function () {
        return new r(e.apply(this, arguments));
      };
    };
  }, function (e, t, n) {
    var r = n(2);

    function o(e) {
      var t, n;

      function o(t, n) {
        try {
          var c = e[t](n),
              i = c.value,
              a = i instanceof r;
          Promise.resolve(a ? i.wrapped : i).then(function (e) {
            a ? o("return" === t ? "return" : "next", e) : u(c.done ? "return" : "normal", e);
          }, function (e) {
            o("throw", e);
          });
        } catch (e) {
          u("throw", e);
        }
      }

      function u(e, r) {
        switch (e) {
          case "return":
            t.resolve({
              value: r,
              done: !0
            });
            break;

          case "throw":
            t.reject(r);
            break;

          default:
            t.resolve({
              value: r,
              done: !1
            });
        }

        (t = t.next) ? o(t.key, t.arg) : n = null;
      }

      this._invoke = function (e, r) {
        return new Promise(function (u, c) {
          var i = {
            key: e,
            arg: r,
            resolve: u,
            reject: c,
            next: null
          };
          n ? n = n.next = i : (t = n = i, o(e, r));
        });
      }, "function" != typeof e.return && (this.return = void 0);
    }

    "function" == typeof Symbol && Symbol.asyncIterator && (o.prototype[Symbol.asyncIterator] = function () {
      return this;
    }), o.prototype.next = function (e) {
      return this._invoke("next", e);
    }, o.prototype.throw = function (e) {
      return this._invoke("throw", e);
    }, o.prototype.return = function (e) {
      return this._invoke("return", e);
    }, e.exports = o;
  }, function (e, t, n) {
    (function (e) {
      var r = void 0 !== e && e || "undefined" != typeof self && self || window,
          o = Function.prototype.apply;

      function u(e, t) {
        this._id = e, this._clearFn = t;
      }

      t.setTimeout = function () {
        return new u(o.call(setTimeout, r, arguments), clearTimeout);
      }, t.setInterval = function () {
        return new u(o.call(setInterval, r, arguments), clearInterval);
      }, t.clearTimeout = t.clearInterval = function (e) {
        e && e.close();
      }, u.prototype.unref = u.prototype.ref = function () {}, u.prototype.close = function () {
        this._clearFn.call(r, this._id);
      }, t.enroll = function (e, t) {
        clearTimeout(e._idleTimeoutId), e._idleTimeout = t;
      }, t.unenroll = function (e) {
        clearTimeout(e._idleTimeoutId), e._idleTimeout = -1;
      }, t._unrefActive = t.active = function (e) {
        clearTimeout(e._idleTimeoutId);
        var t = e._idleTimeout;
        t >= 0 && (e._idleTimeoutId = setTimeout(function () {
          e._onTimeout && e._onTimeout();
        }, t));
      }, n(8), t.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== e && e.setImmediate || this && this.setImmediate, t.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== e && e.clearImmediate || this && this.clearImmediate;
    }).call(this, n(3));
  }, function (e, t, n) {
    (function (e, t) {
      !function (e, n) {
        "use strict";

        if (!e.setImmediate) {
          var r,
              o,
              u,
              c,
              i,
              a = 1,
              f = {},
              s = !1,
              l = e.document,
              d = Object.getPrototypeOf && Object.getPrototypeOf(e);
          d = d && d.setTimeout ? d : e, "[object process]" === {}.toString.call(e.process) ? r = function (e) {
            t.nextTick(function () {
              v(e);
            });
          } : !function () {
            if (e.postMessage && !e.importScripts) {
              var t = !0,
                  n = e.onmessage;
              return e.onmessage = function () {
                t = !1;
              }, e.postMessage("", "*"), e.onmessage = n, t;
            }
          }() ? e.MessageChannel ? ((u = new MessageChannel()).port1.onmessage = function (e) {
            v(e.data);
          }, r = function (e) {
            u.port2.postMessage(e);
          }) : l && "onreadystatechange" in l.createElement("script") ? (o = l.documentElement, r = function (e) {
            var t = l.createElement("script");
            t.onreadystatechange = function () {
              v(e), t.onreadystatechange = null, o.removeChild(t), t = null;
            }, o.appendChild(t);
          }) : r = function (e) {
            setTimeout(v, 0, e);
          } : (c = "setImmediate$" + Math.random() + "$", i = function (t) {
            t.source === e && "string" == typeof t.data && 0 === t.data.indexOf(c) && v(+t.data.slice(c.length));
          }, e.addEventListener ? e.addEventListener("message", i, !1) : e.attachEvent("onmessage", i), r = function (t) {
            e.postMessage(c + t, "*");
          }), d.setImmediate = function (e) {
            "function" != typeof e && (e = new Function("" + e));

            for (var t = new Array(arguments.length - 1), n = 0; n < t.length; n++) t[n] = arguments[n + 1];

            var o = {
              callback: e,
              args: t
            };
            return f[a] = o, r(a), a++;
          }, d.clearImmediate = m;
        }

        function m(e) {
          delete f[e];
        }

        function v(e) {
          if (s) setTimeout(v, 0, e);else {
            var t = f[e];

            if (t) {
              s = !0;

              try {
                !function (e) {
                  var t = e.callback,
                      n = e.args;

                  switch (n.length) {
                    case 0:
                      t();
                      break;

                    case 1:
                      t(n[0]);
                      break;

                    case 2:
                      t(n[0], n[1]);
                      break;

                    case 3:
                      t(n[0], n[1], n[2]);
                      break;

                    default:
                      t.apply(void 0, n);
                  }
                }(t);
              } finally {
                m(e), s = !1;
              }
            }
          }
        }
      }("undefined" == typeof self ? void 0 === e ? this : e : self);
    }).call(this, n(3), n(9));
  }, function (e, t) {
    var n,
        r,
        o = e.exports = {};

    function u() {
      throw new Error("setTimeout has not been defined");
    }

    function c() {
      throw new Error("clearTimeout has not been defined");
    }

    function i(e) {
      if (n === setTimeout) return setTimeout(e, 0);
      if ((n === u || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);

      try {
        return n(e, 0);
      } catch (t) {
        try {
          return n.call(null, e, 0);
        } catch (t) {
          return n.call(this, e, 0);
        }
      }
    }

    !function () {
      try {
        n = "function" == typeof setTimeout ? setTimeout : u;
      } catch (e) {
        n = u;
      }

      try {
        r = "function" == typeof clearTimeout ? clearTimeout : c;
      } catch (e) {
        r = c;
      }
    }();
    var a,
        f = [],
        s = !1,
        l = -1;

    function d() {
      s && a && (s = !1, a.length ? f = a.concat(f) : l = -1, f.length && m());
    }

    function m() {
      if (!s) {
        var e = i(d);
        s = !0;

        for (var t = f.length; t;) {
          for (a = f, f = []; ++l < t;) a && a[l].run();

          l = -1, t = f.length;
        }

        a = null, s = !1, function (e) {
          if (r === clearTimeout) return clearTimeout(e);
          if ((r === c || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);

          try {
            r(e);
          } catch (t) {
            try {
              return r.call(null, e);
            } catch (t) {
              return r.call(this, e);
            }
          }
        }(e);
      }
    }

    function v(e, t) {
      this.fun = e, this.array = t;
    }

    function b() {}

    o.nextTick = function (e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
      f.push(new v(e, t)), 1 !== f.length || s || i(m);
    }, v.prototype.run = function () {
      this.fun.apply(null, this.array);
    }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = b, o.addListener = b, o.once = b, o.off = b, o.removeListener = b, o.removeAllListeners = b, o.emit = b, o.prependListener = b, o.prependOnceListener = b, o.listeners = function (e) {
      return [];
    }, o.binding = function (e) {
      throw new Error("process.binding is not supported");
    }, o.cwd = function () {
      return "/";
    }, o.chdir = function (e) {
      throw new Error("process.chdir is not supported");
    }, o.umask = function () {
      return 0;
    };
  }, function (e, t, n) {
    "use strict";

    n.r(t);
    var r = n(0);
    const o = Symbol("BUFFER"),
          u = Symbol("FIXED"),
          c = Symbol("DROPPING"),
          i = Symbol("SLIDING");

    function a(e) {
      return Object.create(null, {
        queue: {
          value: Object(r.f)()
        },
        size: {
          value: e
        },
        [o]: {
          value: u
        }
      });
    }

    function f(e) {
      return Object.create(null, {
        queue: {
          value: Object(r.f)()
        },
        size: {
          value: e
        },
        [o]: {
          value: c
        }
      });
    }

    function s(e) {
      return Object.create(null, {
        queue: {
          value: Object(r.f)()
        },
        size: {
          value: e
        },
        [o]: {
          value: i
        }
      });
    }

    function l(e) {
      return e.size;
    }

    function d(e) {
      return Object(r.b)(e.queue);
    }

    function m(e) {
      return e[o] === u && Object(r.b)(e.queue) >= e.size;
    }

    function v(e, ...t) {
      switch (e[o]) {
        case u:
          for (const n of t) Object(r.d)(e.queue, n);

          break;

        case c:
          for (const n of t) d(e) < l(e) && Object(r.d)(e.queue, n);

          break;

        case i:
          for (const n of t) d(e) >= l(e) && Object(r.c)(e.queue), Object(r.d)(e.queue, n);

          break;

        default:
          return;
      }
    }

    function b(e) {
      return Object(r.c)(e.queue);
    }

    var p = n(4),
        h = n.n(p),
        y = n(5),
        O = n.n(y);
    const j = Object.create(null, {
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
    var g = n(1);
    const w = Symbol("CLOSED"),
          T = Symbol("BOX");

    function S(e) {
      return !!(null == e ? void 0 : e[T]);
    }

    function x(e) {
      return !!(null == e ? void 0 : e[j.reduced]);
    }

    function E(e) {
      return Object.create(null, {
        value: {
          value: e,
          writable: !0
        },
        [T]: {
          value: !0
        }
      });
    }

    function I(e, t, n) {
      if (t === w) throw Error("Cannot send CLOSED to a channel");
      if (e.closed) return n.commit(), E(!1);
      let o, u;

      if (e.buffer && !m(e.buffer)) {
        n.commit();
        const c = x(e.xform[j.step](e.buffer, t));

        for (; 0 !== d(e.buffer) && (o = Object(r.c)(e.recvs), o !== r.a);) if (o.active) {
          u = o.commit();
          const t = b(e.buffer);
          u && Object(g.e)(() => u(t));
        }

        return c && _(e), E(!0);
      }

      for (; o = Object(r.c)(e.recvs), o !== r.a;) if (o.active) return n.commit(), u = o.commit(), u && Object(g.e)(() => u(t)), E(!0);

      if (e.dirtySends > e.maxDirty ? (Object(r.e)(e.sends, e => e.handler.active), e.dirtySends = 0) : e.dirtySends++, Object(r.b)(e.sends) >= e.maxQueued) throw Error(`No more than ${e.maxQueued} pending sends are allowed on a single channel`);
      return Object(r.d)(e.sends, function (e, t) {
        return Object.create(null, {
          value: {
            value: e,
            writable: !0
          },
          handler: {
            value: t
          },
          [T]: {
            value: !0
          }
        });
      }(t, n)), null;
    }

    function M(e, t) {
      let n, o, u;

      if (e.buffer && d(e.buffer) > 0) {
        t.commit();
        const c = b(e.buffer);

        for (; !m(e.buffer) && (n = Object(r.c)(e.sends), n !== r.a);) o = n.handler, o.active && (u = o.commit(), u && Object(g.e)(() => u(!0)), x(e.xform[j.step](e.buffer, n.value)) && _(e));

        return E(c);
      }

      for (; n = Object(r.c)(e.sends), n !== r.a;) if (o = n.handler, o.active) return u = o.commit(), u && Object(g.e)(() => u(!0)), E(n.value);

      if (e.closed) return t.commit(), E(w);
      if (e.dirtyRecvs > e.maxDirty ? (Object(r.e)(e.recvs, e => e.active), e.dirtyRecvs = 0) : e.dirtyRecvs++, Object(r.b)(e.recvs) >= e.maxQueued) throw Error(`No more than ${e.maxQueued} pending receives are allowed on a single channel`);
      return Object(r.d)(e.recvs, t), null;
    }

    function _(e) {
      if (e.closed) return;
      let t, n, o;
      if (e.closed = !0, e.buffer) for (e.xform[j.result](e.buffer); 0 !== d(e.buffer) && (t = Object(r.c)(e.recvs), t !== r.a);) if (t.active) {
        o = t.commit();
        const n = b(e.buffer);
        o && Object(g.e)(() => o(n));
      }

      for (; t = Object(r.c)(e.recvs), t !== r.a;) t.active && (o = t.commit(), o && Object(g.e)(() => o(w)));

      for (; n = Object(r.c)(e.sends), n !== r.a;) n.handler.active && (o = n.handler.commit(), o && Object(g.e)(() => o(!1)));
    }

    const k = Symbol("DEFAULT");

    function P(e, t) {
      return Object.assign(Object.create(null), {
        value: e,
        channel: t
      });
    }

    function A(e, t = () => {}, n = {}) {
      const r = e.length;
      if (0 === r) throw Error("select called with no operations");
      const o = !!n.priority,
            u = o ? [] : function (e) {
        const t = [];

        for (let n = 0; n < e; n++) t.push(n);

        for (let n = e - 1; n > 0; n--) {
          const e = Math.floor(Math.random() * (n + 1)),
                r = t[n];
          t[n] = t[e], t[e] = r;
        }

        return t;
      }(r),
            c = E(!0);

      function i(e) {
        return function (e, t) {
          return Object.create(null, {
            active: {
              get: () => e.value
            },
            commit: {
              value: () => (e.value = !1, t)
            }
          });
        }(c, n => {
          t(P(n, e));
        });
      }

      let a;

      for (let n = 0; n < r; n++) {
        const r = e[o ? n : u[n]];
        let c, f;

        if (Array.isArray(r) ? ([c, f] = r, a = I(c, f, i(c))) : (c = r, a = M(c, i(c))), S(a)) {
          t(P(a.value, c));
          break;
        }
      }

      !S(a) && Object.prototype.hasOwnProperty.call(n, "default") && c.value && (c.value = !1, t(P(n.default, k)));
    }

    function C(e, t = {}) {
      return new Promise(n => {
        A(e, n, t);
      });
    }

    function D(e) {
      return e.value;
    }

    function L(e) {
      return e.channel;
    }

    const q = () => w;

    function Q(e) {
      return Object.create(null, {
        active: {
          value: !0
        },
        commit: {
          value: () => e
        }
      });
    }

    function F(e, t, n) {
      const r = t(n);
      return r !== w && v(e, r), e;
    }

    function N(e, t = q) {
      return {
        [j.step](n, r) {
          try {
            return e[j.step](n, r);
          } catch (e) {
            return F(n, t, e);
          }
        },

        [j.result](n) {
          try {
            return e[j.result](n);
          } catch (e) {
            return F(n, t, e);
          }
        }

      };
    }

    const z = {
      [j.init]() {
        throw Error("init not available");
      },

      [j.step]: (e, t) => (v(e, t), e),
      [j.result]: e => e
    };

    function R(e, t, n) {
      let r, u;
      var c;
      e ? "number" == typeof e ? (r = a(e), u = t) : (null == (c = e) ? void 0 : c[o]) ? (r = e, u = t) : (r = (null == e ? void 0 : e.transducer) ? a(1) : null, u = e) : (r = null, u = t);
      const {
        transducer: i,
        handler: f,
        maxDirty: s,
        maxQueued: l,
        timer: d
      } = Object.assign({}, n, u);
      return {
        buf: r,
        transducer: i,
        handler: f,
        maxDirty: s,
        maxQueued: l,
        timer: d
      };
    }

    function U(e, t) {
      const n = {
        maxDirty: 64,
        maxQueued: 1024
      },
            {
        buf: o,
        transducer: u,
        handler: c,
        maxDirty: i,
        maxQueued: a,
        timer: f
      } = R(e, t, n);
      if (u && !o) throw Error("Only buffered channels can use transducers");

      const s = "number" == typeof f,
            l = function (e, t, n = !1, o = 64, u = 1024) {
        return Object.create(null, {
          buffer: {
            value: e
          },
          xform: {
            value: t
          },
          maxDirty: {
            value: o
          },
          maxQueued: {
            value: u
          },
          recvs: {
            value: Object(r.f)()
          },
          sends: {
            value: Object(r.f)()
          },
          dirtyRecvs: {
            value: 0,
            writable: !0
          },
          dirtySends: {
            value: 0,
            writable: !0
          },
          closed: {
            value: !1,
            writable: !0
          },
          isBuffered: {
            value: !!e
          },
          isTimed: {
            value: n
          }
        });
      }(o, N(u ? u(z) : z, c), s, i, a);

      function d() {
        return (d = O()(function* () {
          for (;;) {
            const e = yield h()(V(l));
            if (e === w) break;
            yield e;
          }
        })).apply(this, arguments);
      }

      return l[Symbol.asyncIterator] = function () {
        return d.apply(this, arguments);
      }, s && setTimeout(() => _(l), f), l;
    }

    function B(e = 0) {
      return U({
        timer: e
      });
    }

    function G(e, t) {
      return U({
        transducer: e,
        handler: t
      });
    }

    function $(e) {
      return e.closed;
    }

    function H(e) {
      return e.isBuffered;
    }

    function X(e) {
      return e.isTimed;
    }

    function Y(e, t, n = () => {}) {
      const r = I(e, t, Q(n));
      r && n && n(r.value);
    }

    function J(e, t = () => {}) {
      const n = M(e, Q(t));
      n && t && t(n.value);
    }

    function K(e, t) {
      return new Promise(n => {
        Y(e, t, n);
      });
    }

    function V(e) {
      return new Promise(t => {
        J(e, t);
      });
    }

    function W(e) {
      return new Promise((t, n) => {
        J(e, e => {
          Object.prototype.isPrototypeOf.call(Error.prototype, e) ? n(e) : t(e);
        });
      });
    }

    function Z(e) {
      _(e);
    }

    function ee(e = 0) {
      return new Promise(t => {
        J(B(e), t);
      });
    }

    function te(e, ...t) {
      return e(...t);
    }

    function ne(...e) {
      return Promise.all(e);
    }

    n.d(t, "fixed", function () {
      return a;
    }), n.d(t, "dropping", function () {
      return f;
    }), n.d(t, "sliding", function () {
      return s;
    }), n.d(t, "CLOSED", function () {
      return w;
    }), n.d(t, "chan", function () {
      return U;
    }), n.d(t, "timedChan", function () {
      return B;
    }), n.d(t, "transChan", function () {
      return G;
    }), n.d(t, "send", function () {
      return K;
    }), n.d(t, "recv", function () {
      return V;
    }), n.d(t, "sendAsync", function () {
      return Y;
    }), n.d(t, "recvAsync", function () {
      return J;
    }), n.d(t, "recvOrThrow", function () {
      return W;
    }), n.d(t, "close", function () {
      return Z;
    }), n.d(t, "isClosed", function () {
      return $;
    }), n.d(t, "isBuffered", function () {
      return H;
    }), n.d(t, "isTimed", function () {
      return X;
    }), n.d(t, "select", function () {
      return C;
    }), n.d(t, "selectAsync", function () {
      return A;
    }), n.d(t, "value", function () {
      return D;
    }), n.d(t, "channel", function () {
      return L;
    }), n.d(t, "config", function () {
      return g.d;
    }), n.d(t, "SET_IMMEDIATE", function () {
      return g.b;
    }), n.d(t, "MESSAGE_CHANNEL", function () {
      return g.a;
    }), n.d(t, "SET_TIMEOUT", function () {
      return g.c;
    }), n.d(t, "go", function () {
      return te;
    }), n.d(t, "sleep", function () {
      return ee;
    }), n.d(t, "join", function () {
      return ne;
    }), n.d(t, "EMPTY", function () {
      return r.a;
    });
  }]);
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
/* harmony import */ var _chanko_channels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chanko/channels */ "../channels/lib/chanko.min.js");
/* harmony import */ var _chanko_channels__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chanko_channels__WEBPACK_IMPORTED_MODULE_1__);


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
 * @module chanko/operations/conversion
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
 * import { go, chan, send, recv, close } from "@chanko/channels";
 * import { reduce } from "@chanko/operations";
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
 * @memberof module:chanko/operations~Operations
 * @param {module:chanko/operations~reducer} fn The reducer function responsible
 *     for turning the series of channel values into a single output value.
 * @param {module:chanko/channel~Channel} ch The channel whose values are being
 * reduced into a single output value.
 * @param {*} init The initial value to feed into the reducer function for the
 * first reduction step.
 * @return {module:chanko/channel~Channel} A channel that will, when the input
 *     channel closes, have the reduced value put into it. When this value is
 *     taken, the channel will automatically close.
 */

function reduce(fn, channel, init) {
  const output = Object(_chanko_channels__WEBPACK_IMPORTED_MODULE_1__["chan"])();
  Object(_chanko_channels__WEBPACK_IMPORTED_MODULE_1__["go"])(async () => {
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

    Object(_chanko_channels__WEBPACK_IMPORTED_MODULE_1__["sendAsync"])(output, acc, () => Object(_chanko_channels__WEBPACK_IMPORTED_MODULE_1__["close"])(output));
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
 * import { go, chan, recv, isClosed } from "@chanko/channels";
 * import { onto } from "@chanko/operations";
 *
 * const input = [1, 2, 3];
 * const output = onto(input);
 *
 * go(async () => {
 *   console.log(await recv(output));     // -> 1
 *   console.log(await recv(output));     // -> 2
 *   console.log(await recv(output));     // -> 3
 *   console.log(isClosed(output));       // -> true
 * });
 * ```
 *
 * @memberof module:chanko/operations~Operations
 * @param {iterable} iterable The iterable containing the values to be sent to
 *     the channel.
 * @param {module:chanko/channel~Channel} [channel] The channel onto which to
 *     put all of the array elements. If this is not present, a new channel will
 *     be created.
 * @return {module:chanko/channel~Channel} the channel onto which the array
 *     elements are put. This is the same as the input channel, but if no input
 *     channel is specified, this will be a new channel. It will close when the
 *     final value is taken from it.
 */


function toChannel(iterable, channel = Object(_chanko_channels__WEBPACK_IMPORTED_MODULE_1__["chan"])(iterable.length)) {
  Object(_chanko_channels__WEBPACK_IMPORTED_MODULE_1__["go"])(async () => {
    for (const item of iterable) {
      await Object(_chanko_channels__WEBPACK_IMPORTED_MODULE_1__["send"])(channel, item);
    }

    Object(_chanko_channels__WEBPACK_IMPORTED_MODULE_1__["close"])(channel);
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
 * import { go, chan, send, recv, close } from "@chanko/channels";
 * import { into } from "@chanko/operations";
 *
 * const input = chan();
 * const output = into(input);
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
 * @memberof module:chanko/operations~Chanko
 * @param {module:cispy/channel~Channel} channel The channel from which values
 *     are received to put into the array.
 * @param {array} [array] The array to put the channel values into. If this is
 *     not present, a new, empty array will be created.
 * @return {module:cispy/channel~Channel} A channel that will, when the input
 *     channel closes, have the array of channel values put onto it. When this
 *     array is received, the channel will automatically close.
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
/* harmony import */ var _chanko_channels__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chanko/channels */ "../channels/lib/chanko.min.js");
/* harmony import */ var _chanko_channels__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chanko_channels__WEBPACK_IMPORTED_MODULE_0__);
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
 * @module chanko/operations/flow
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
 * `{@link module:chanko/operations~Operations.tap|tap}`) automatically close
 * their destination channels when the source channels close.
 *
 * ```
 * import { go, chan, send, recv, close, isClosed } from "@chanko/channels";
 * import { pipe } from "@chanko/operations";
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
 * @memberof module:chanko/operations~Operations
 * @param {module:chanko/channel~Channel} src The source channel.
 * @param {module:chanko/channel~Channel} dest The destination channel.
 * @param {boolean} [keepOpen=false] A flag to indicate that the destination
 *     channel should be kept open after the source channel closes. By default
 *     the destination channel will close when the source channel closes.
 * @return {module:chanko/channel~Channel} The destination channel.
 */

function pipe(src, dst, keepOpen = false) {
  Object(_chanko_channels__WEBPACK_IMPORTED_MODULE_0__["go"])(async () => {
    for (;;) {
      const value = await Object(_chanko_channels__WEBPACK_IMPORTED_MODULE_0__["recv"])(src);

      if (value === _chanko_channels__WEBPACK_IMPORTED_MODULE_0__["CLOSED"]) {
        if (!keepOpen) {
          Object(_chanko_channels__WEBPACK_IMPORTED_MODULE_0__["close"])(dst);
        }

        break;
      }

      if (!(await Object(_chanko_channels__WEBPACK_IMPORTED_MODULE_0__["send"])(dst, value))) {
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
 * import { go, chan, send, close } from "@chanko/channels";
 * import { partition } from "@chanko/operations";
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
 * @memberof module:chanko/operations~Operations
 * @param {module:chanko~predicate} fn A predicate function used to test each
 * value on the input channel.
 * @param {module:chanko/channel~Channel} src The source channel.
 * @param {(number|module:chanko/buffer~Buffer)} [tBuffer=0] A buffer used to
 *     create the destination channel which receives all values that passed the
 *     predicate. If this is a number, a
 *     {@link module:chanko/buffer~FixedBuffer} of that size will be used. If
 *     this is `0` or not present, the channel will be unbuffered.
 * @param {(number|module:chanko/buffer~Buffer)} [fBuffer=0] A buffer used to
 *     create the destination channel which receives all values that did not
 *     pass the predicate. If this is a number, a
 *     {@link module:chanko/buffer~FixedBuffer} of that size will be used. If
 *     this is `0` or not present, the channel will be unbuffered.
 * @return {module:chanko/channel~Channel[]} An array of two channels. The first
 *     is the destination channel with all of the values that passed the
 *     predicate, the second is the destination channel with all of the values
 *     that did not pass the predicate.
 */


function partition(fn, src, tBuffer = 0, fBuffer = 0) {
  const tDst = Object(_chanko_channels__WEBPACK_IMPORTED_MODULE_0__["chan"])(tBuffer);
  const fDst = Object(_chanko_channels__WEBPACK_IMPORTED_MODULE_0__["chan"])(fBuffer);
  Object(_chanko_channels__WEBPACK_IMPORTED_MODULE_0__["go"])(async () => {
    for (;;) {
      const value = await Object(_chanko_channels__WEBPACK_IMPORTED_MODULE_0__["recv"])(src);

      if (value === _chanko_channels__WEBPACK_IMPORTED_MODULE_0__["CLOSED"]) {
        Object(_chanko_channels__WEBPACK_IMPORTED_MODULE_0__["close"])(tDst);
        Object(_chanko_channels__WEBPACK_IMPORTED_MODULE_0__["close"])(fDst);
        break;
      }

      await Object(_chanko_channels__WEBPACK_IMPORTED_MODULE_0__["send"])(fn(value) ? tDst : fDst, value);
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
 * import { go, chan, send, recv } from "@chanko/channels";
 * import { merge } from "@chanko/operations";
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
 * @memberof module:chanko/operations~Operations
 * @param {module:chanko/channel~Channel[]} srcs An array of source channels.
 * @param {(number|module:chanko/buffer~Buffer)} [buffer=0] A buffer used to
 *     create the destination channel. If this is a number, a
 *     {@link module:chanko/buffer~FixedBuffer} of that size will be used. If
 *     this is `0` or not present, the channel will be unbuffered.
 * @return {module:chanko/channel~Channel} The destination channel, which will
 *     receive all values put onto every source channel.
 */


function merge(srcs, buffer = 0) {
  const dst = Object(_chanko_channels__WEBPACK_IMPORTED_MODULE_0__["chan"])(buffer);
  const inputs = srcs.slice();
  Object(_chanko_channels__WEBPACK_IMPORTED_MODULE_0__["go"])(async () => {
    for (;;) {
      if (inputs.length === 0) {
        break;
      }

      const {
        value,
        channel
      } = await Object(_chanko_channels__WEBPACK_IMPORTED_MODULE_0__["select"])(inputs);

      if (value === _chanko_channels__WEBPACK_IMPORTED_MODULE_0__["CLOSED"]) {
        inputs.splice(inputs.indexOf(channel), 1);
        continue;
      }

      await Object(_chanko_channels__WEBPACK_IMPORTED_MODULE_0__["send"])(dst, value);
    }

    Object(_chanko_channels__WEBPACK_IMPORTED_MODULE_0__["close"])(dst);
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
 * import { go, chan, send } from "@chanko/channels";
 * import { split } from "@chanko/operations";
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
 * @memberof module:chanko/operations~Operations
 * @param {module:chanko/channel~Channel} src The source channel.
 * @param {...(number|module:chanko/buffer~Buffer)} [buffers=2] The buffers used
 *     to create the destination channels. Each entry is treated separately. If
 *     one is a number, then a
 *     {@link module:chanko/buffer~FixedBuffer|FixedBuffer} of that size will be
 *     used. If one is a `0`, then the corresponding channel will be unbuffered.
 *     **Exception:** if a single number is passed, then that number of
 *     unbuferred channels will be created. This means that the default is to
 *     create two unbuffered channels. To create a single channel with a fixed
 *     buffer, use `{@link chanko~Chanko.fixed|fixed}` explicitly.
 * @return {module:chanko/channel~Channel[]} An array of destination channels.
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

  const dsts = bfs.map(bf => Object(_chanko_channels__WEBPACK_IMPORTED_MODULE_0__["chan"])(bf));
  const done = Object(_chanko_channels__WEBPACK_IMPORTED_MODULE_0__["chan"])();
  let count = 0;

  function callback() {
    if (--count === 0) {
      Object(_chanko_channels__WEBPACK_IMPORTED_MODULE_0__["sendAsync"])(done);
    }
  }

  Object(_chanko_channels__WEBPACK_IMPORTED_MODULE_0__["go"])(async () => {
    for (;;) {
      const value = await Object(_chanko_channels__WEBPACK_IMPORTED_MODULE_0__["recv"])(src);

      if (value === _chanko_channels__WEBPACK_IMPORTED_MODULE_0__["CLOSED"]) {
        for (const dst of dsts) {
          Object(_chanko_channels__WEBPACK_IMPORTED_MODULE_0__["close"])(dst);
        }

        break;
      }

      count = dsts.length;

      for (const dst of dsts) {
        Object(_chanko_channels__WEBPACK_IMPORTED_MODULE_0__["sendAsync"])(dst, value, callback);
      }

      await Object(_chanko_channels__WEBPACK_IMPORTED_MODULE_0__["recv"])(done);
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
 * @param {module:chanko/channel~Channel} src The source channel to be tapped.
 * @private
 */


function makeTap(src) {
  Object.defineProperty(src, TAPS, {
    configurable: true,
    writable: true,
    value: []
  });
  const done = Object(_chanko_channels__WEBPACK_IMPORTED_MODULE_0__["chan"])();
  let count = 0;

  function callback() {
    if (--count === 0) {
      Object(_chanko_channels__WEBPACK_IMPORTED_MODULE_0__["sendAsync"])(done);
    }
  }

  Object(_chanko_channels__WEBPACK_IMPORTED_MODULE_0__["go"])(async () => {
    for (;;) {
      const value = await Object(_chanko_channels__WEBPACK_IMPORTED_MODULE_0__["recv"])(src);

      if (value === _chanko_channels__WEBPACK_IMPORTED_MODULE_0__["CLOSED"] || src[TAPS].length === 0) {
        delete src[TAPS];
        break;
      }

      count = src[TAPS].length;

      for (const tap of src[TAPS]) {
        Object(_chanko_channels__WEBPACK_IMPORTED_MODULE_0__["sendAsync"])(tap, value, callback);
      }

      await Object(_chanko_channels__WEBPACK_IMPORTED_MODULE_0__["recv"])(done);
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
 * This is different from
 * `{@link module:chanko/operations~Operations.split|split}` in that it's
 * temporary. Channels can tap a channel and then untap it, multiple times, as
 * needed. If a source channel has all of its taps removed, then it reverts to a
 * normal channel, just as it was before it was tapped.
 *
 * Also unlike `{@link module:chanko/operations~Operations.split|split}`, each
 * call can only tap once. For multiple channels to tap a source channel, `tap`
 * has to be called multiple times.
 *
 * Closing either the source or any of the destination channels has no effect on
 * any of the other channels.
 *
 * ```
 * import { go, chan, send, recv } from "@chanko/channels";
 * import { tap } from "@chanko/operations";
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
 * @memberof module:chanko/operations~Operations
 * @param {module:chanko/channel~Channel} src The channel to be tapped.
 * @param {module:chanko/channel~Channel} [dest] The channel tapping the source
 *     channel. If this is not present, a new unbuffered channel will be
 *     created.
 * @return {module:chanko/channel~Channel} The destination channel. This is the
 *     same as the second argument, if present; otherwise it is the
 *     newly-created channel tapping the source channel.
 */


function tap(src, dst = Object(_chanko_channels__WEBPACK_IMPORTED_MODULE_0__["chan"])()) {
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
 * @memberof module:chanko/operations~Operations
 * @param {module:chanko/channel~Channel} src The tapped channel.
 * @param {module:chanko/channel~Channel} dest The channel that is tapping the
 *     source channel that should no longer be tapping the source channel.
 */


function untap(src, dst) {
  const taps = src[TAPS];

  if (taps) {
    const index = taps.indexOf(dst);

    if (index !== -1) {
      taps.splice(index, 1);

      if (taps.length === 0) {
        Object(_chanko_channels__WEBPACK_IMPORTED_MODULE_0__["sendAsync"])(src);
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
 * @memberof module:chanko/operations~Operations
 * @param {module:chanko/channel~Channel} src The tapped channel. All taps will
 *     be removed from this channel.
 */


function untapAll(src) {
  if (src[TAPS]) {
    src[TAPS] = [];
    Object(_chanko_channels__WEBPACK_IMPORTED_MODULE_0__["sendAsync"])(src);
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
 * import { go, chan, send, recv, close, isClosed } from "@chanko/channels";
 * import { map } from "@chanko/operations"
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
 * @memberof module:chanko/operations~Operations
 * @param {module:chanko/operations~mapper} fn The mapping function. This should
 *     have one parameter for each source channel and return a single value.
 * @param {module:chanko/channel~Channel[]} srcs The source channels.
 * @param {(number|module:chanko/buffer~Buffer)} [buffer=0] A buffer used to
 *     create the destination channel. If this is a number, a
 *     {@link module:chanko/buffer~FixedBuffer} of that size will be used. If
 *     this is `0` or not present, the channel will be unbuffered.
 * @return {module:chanko/channel~Channel} The destination channel.
 */


function map(fn, srcs, buffer = 0) {
  const dst = Object(_chanko_channels__WEBPACK_IMPORTED_MODULE_0__["chan"])(buffer);
  const srclen = srcs.length;
  const values = [];
  const callbacks = [];
  const temp = Object(_chanko_channels__WEBPACK_IMPORTED_MODULE_0__["chan"])();
  let count;

  for (let i = 0; i < srclen; i++) {
    callbacks[i] = (index => {
      return value => {
        values[index] = value;

        if (--count === 0) {
          Object(_chanko_channels__WEBPACK_IMPORTED_MODULE_0__["sendAsync"])(temp, values.slice());
        }
      };
    })(i);
  }

  Object(_chanko_channels__WEBPACK_IMPORTED_MODULE_0__["go"])(async () => {
    for (;;) {
      count = srclen;

      for (let i = 0; i < srclen; i++) {
        Object(_chanko_channels__WEBPACK_IMPORTED_MODULE_0__["recvAsync"])(srcs[i], callbacks[i]);
      }

      const values = await Object(_chanko_channels__WEBPACK_IMPORTED_MODULE_0__["recv"])(temp);

      for (const value of values) {
        if (value === _chanko_channels__WEBPACK_IMPORTED_MODULE_0__["CLOSED"]) {
          // Once a source closes, we close the destination AND the rest of the
          // sources. Otherwise the sources will have nothing receiving from
          // them and sends to them will block forever. By closing them, sends
          // to them will immediately return `false` and not block.
          Object(_chanko_channels__WEBPACK_IMPORTED_MODULE_0__["close"])(dst);

          for (const src of srcs) {
            Object(_chanko_channels__WEBPACK_IMPORTED_MODULE_0__["close"])(src);
          }

          return;
        }
      }

      await Object(_chanko_channels__WEBPACK_IMPORTED_MODULE_0__["send"])(dst, fn(...values));
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
/* harmony import */ var _chanko_channels__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chanko/channels */ "../channels/lib/chanko.min.js");
/* harmony import */ var _chanko_channels__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chanko_channels__WEBPACK_IMPORTED_MODULE_0__);
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
 * @module chanko/operations/timing
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
 * @memberof module:chanko/operations~Operations
 * @param {module:chanko/channel~Channel} src The source channel.
 * @param {(number|module:chanko/buffer~Buffer)} [buffer=0] A buffer used to
 *     create the destination channel. If this is a number, a
 *     {@link module:chanko/buffer~FixedBuffer|FixedBuffer} of that size will be
 *     used. If this is `0` or not present, the channel will be unbuffered.
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
 * @param {module:chanko/channel~Channel} [options.cancel] A channel used to
 *     signal a cancellation of the debouncing. Any value put onto this channel
 *     will cancel the current debouncing operation, closing the output channel
 *     and discarding any values that were waiting for the debounce threshold
 *     timer to be sent to the output.
 * @return {module:chanko/channel~Channel} The newly-created destination
 *     channel, where all of the values will be debounced from the source
 *     channel.
 */

function debounce(src, buffer, delay, options) {
  const defaults = {
    leading: false,
    trailing: true,
    maxDelay: 0,
    cancel: Object(_chanko_channels__WEBPACK_IMPORTED_MODULE_0__["chan"])()
  };
  const [buf, del, opts] = Object(modules_common__WEBPACK_IMPORTED_MODULE_1__["isNumber"])(delay) ? [buffer, delay, Object.assign(defaults, options !== null && options !== void 0 ? options : {})] : [0, buffer, Object.assign(defaults, delay !== null && delay !== void 0 ? delay : {})];
  const dst = Object(_chanko_channels__WEBPACK_IMPORTED_MODULE_0__["chan"])(buf);
  const {
    leading,
    trailing,
    maxDelay,
    cancel
  } = opts;
  Object(_chanko_channels__WEBPACK_IMPORTED_MODULE_0__["go"])(async () => {
    let timer = Object(_chanko_channels__WEBPACK_IMPORTED_MODULE_0__["chan"])();
    let max = Object(_chanko_channels__WEBPACK_IMPORTED_MODULE_0__["chan"])();
    let current = _chanko_channels__WEBPACK_IMPORTED_MODULE_0__["CLOSED"];

    for (;;) {
      const {
        value,
        channel
      } = await Object(_chanko_channels__WEBPACK_IMPORTED_MODULE_0__["select"])([src, timer, max, cancel]);

      if (channel === cancel) {
        Object(_chanko_channels__WEBPACK_IMPORTED_MODULE_0__["close"])(dst);
        break;
      }

      if (channel === src) {
        if (value === _chanko_channels__WEBPACK_IMPORTED_MODULE_0__["CLOSED"]) {
          Object(_chanko_channels__WEBPACK_IMPORTED_MODULE_0__["close"])(dst);
          break;
        }

        const timing = Object(_chanko_channels__WEBPACK_IMPORTED_MODULE_0__["isTimed"])(timer);
        timer = Object(_chanko_channels__WEBPACK_IMPORTED_MODULE_0__["timedChan"])(del);

        if (!timing && maxDelay > 0) {
          max = Object(_chanko_channels__WEBPACK_IMPORTED_MODULE_0__["timedChan"])(maxDelay);
        }

        if (leading) {
          if (!timing) {
            await Object(_chanko_channels__WEBPACK_IMPORTED_MODULE_0__["send"])(dst, value);
          } else {
            current = value;
          }
        } else if (trailing) {
          current = value;
        }
      } else {
        timer = Object(_chanko_channels__WEBPACK_IMPORTED_MODULE_0__["chan"])();
        max = Object(_chanko_channels__WEBPACK_IMPORTED_MODULE_0__["chan"])();

        if (trailing && current !== _chanko_channels__WEBPACK_IMPORTED_MODULE_0__["CLOSED"]) {
          await Object(_chanko_channels__WEBPACK_IMPORTED_MODULE_0__["send"])(dst, current);
          current === _chanko_channels__WEBPACK_IMPORTED_MODULE_0__["CLOSED"];
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
 * @memberof module:chanko/operations~Operations
 * @param {module:chanko/channel~Channel} src The source channel.
 * @param {(number|module:chanko/buffer~Buffer)} [buffer=0] A buffer used to
 *     create the destination channel. If this is a number, a
 *     {@link module:chanko/buffer~FixedBuffer|FixedBuffer} of that size will be
 *     used. If this is `0` or not present, the channel will be unbuffered.
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
 * @param {module:chanko/channel~Channel} [options.cancel] A channel used to
 *     signal a cancellation of the throttling. Any value put onto this channel
 *     will cancel the current throttling operation, closing the output channel
 *     and discarding any values that were waiting for the throttle threshold
 *     timer to be sent to the output.
 * @return {module:chanko/channel~Channel}} The newly-created destination
 *     channel, where all of the values will be throttled from the source
 *     channel.
 */


function throttle(src, buffer, delay, options) {
  const defaults = {
    leading: true,
    trailing: true,
    cancel: Object(_chanko_channels__WEBPACK_IMPORTED_MODULE_0__["chan"])()
  };
  const [buf, del, opts] = Object(modules_common__WEBPACK_IMPORTED_MODULE_1__["isNumber"])(delay) ? [buffer, delay, Object.assign(defaults, options !== null && options !== void 0 ? options : {})] : [0, buffer, Object.assign(defaults, delay !== null && delay !== void 0 ? delay : {})];
  const dst = Object(_chanko_channels__WEBPACK_IMPORTED_MODULE_0__["chan"])(buf);
  const {
    leading,
    trailing,
    cancel
  } = opts;
  Object(_chanko_channels__WEBPACK_IMPORTED_MODULE_0__["go"])(async () => {
    let timer = Object(_chanko_channels__WEBPACK_IMPORTED_MODULE_0__["chan"])();
    let current = _chanko_channels__WEBPACK_IMPORTED_MODULE_0__["CLOSED"];

    for (;;) {
      const {
        value,
        channel
      } = await Object(_chanko_channels__WEBPACK_IMPORTED_MODULE_0__["select"])([src, timer, cancel]);

      if (channel === cancel) {
        Object(_chanko_channels__WEBPACK_IMPORTED_MODULE_0__["close"])(dst);
        break;
      }

      if (channel === src) {
        if (value === _chanko_channels__WEBPACK_IMPORTED_MODULE_0__["CLOSED"]) {
          Object(_chanko_channels__WEBPACK_IMPORTED_MODULE_0__["close"])(dst);
          break;
        }

        const timing = Object(_chanko_channels__WEBPACK_IMPORTED_MODULE_0__["isTimed"])(timer);

        if (!timing) {
          timer = Object(_chanko_channels__WEBPACK_IMPORTED_MODULE_0__["timedChan"])(del);
        }

        if (leading) {
          if (!timing) {
            await Object(_chanko_channels__WEBPACK_IMPORTED_MODULE_0__["send"])(dst, value);
          } else if (trailing) {
            current = value;
          }
        } else if (trailing) {
          current = value;
        }
      } else if (trailing && current !== _chanko_channels__WEBPACK_IMPORTED_MODULE_0__["CLOSED"]) {
        timer = Object(_chanko_channels__WEBPACK_IMPORTED_MODULE_0__["timedChan"])(del);
        await Object(_chanko_channels__WEBPACK_IMPORTED_MODULE_0__["send"])(dst, current);
        current = _chanko_channels__WEBPACK_IMPORTED_MODULE_0__["CLOSED"];
      } else {
        timer = Object(_chanko_channels__WEBPACK_IMPORTED_MODULE_0__["chan"])();
      }
    }
  });
  return dst;
}



/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vcGVyYXRpb25zL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9vcGVyYXRpb25zL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29wZXJhdGlvbnMvL2hvbWUvYmFyYW5kaXMvRGV2ZWxvcG1lbnQvcHJvamVjdHMvY2hhbmtvL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jSXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vb3BlcmF0aW9ucy8uLi9jaGFubmVscy9saWIvY2hhbmtvLm1pbi5qcyIsIndlYnBhY2s6Ly9vcGVyYXRpb25zLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL29wZXJhdGlvbnMvLi9zcmMvbW9kdWxlcy9jb21tb24uanMiLCJ3ZWJwYWNrOi8vb3BlcmF0aW9ucy8uL3NyYy9tb2R1bGVzL2NvbnZlcnNpb24uanMiLCJ3ZWJwYWNrOi8vb3BlcmF0aW9ucy8uL3NyYy9tb2R1bGVzL2Zsb3cuanMiLCJ3ZWJwYWNrOi8vb3BlcmF0aW9ucy8uL3NyYy9tb2R1bGVzL3RpbWluZy5qcyJdLCJuYW1lcyI6WyJlIiwidCIsIm1vZHVsZSIsImV4cG9ydHMiLCJuIiwiciIsIm8iLCJpIiwibCIsImNhbGwiLCJtIiwiYyIsImQiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsInZhbHVlIiwiX19lc01vZHVsZSIsImNyZWF0ZSIsImJpbmQiLCJkZWZhdWx0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJwIiwicyIsInUiLCJhIiwiZiIsInN0b3JlIiwid3JpdGFibGUiLCJwb2ludGVyIiwibGVuZ3RoIiwicHVzaCIsInNsaWNlIiwidiIsImIiLCJiYXRjaFNpemUiLCJkaXNwYXRjaE1ldGhvZCIsIk1lc3NhZ2VDaGFubmVsIiwicG9ydDEiLCJvbm1lc3NhZ2UiLCJwb3J0MiIsInBvc3RNZXNzYWdlIiwic2V0VGltZW91dCIsImFzc2lnbiIsInNldEltbWVkaWF0ZSIsIndyYXBwZWQiLCJGdW5jdGlvbiIsIndpbmRvdyIsImFwcGx5IiwiYXJndW1lbnRzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ0aGVuIiwiZG9uZSIsInJlamVjdCIsIm5leHQiLCJrZXkiLCJhcmciLCJfaW52b2tlIiwicmV0dXJuIiwiYXN5bmNJdGVyYXRvciIsInRocm93Iiwic2VsZiIsIl9pZCIsIl9jbGVhckZuIiwiY2xlYXJUaW1lb3V0Iiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiY2xvc2UiLCJ1bnJlZiIsInJlZiIsImVucm9sbCIsIl9pZGxlVGltZW91dElkIiwiX2lkbGVUaW1lb3V0IiwidW5lbnJvbGwiLCJfdW5yZWZBY3RpdmUiLCJhY3RpdmUiLCJfb25UaW1lb3V0IiwiY2xlYXJJbW1lZGlhdGUiLCJkb2N1bWVudCIsImdldFByb3RvdHlwZU9mIiwidG9TdHJpbmciLCJwcm9jZXNzIiwibmV4dFRpY2siLCJpbXBvcnRTY3JpcHRzIiwiZGF0YSIsImNyZWF0ZUVsZW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZW1vdmVDaGlsZCIsImFwcGVuZENoaWxkIiwiTWF0aCIsInJhbmRvbSIsInNvdXJjZSIsImluZGV4T2YiLCJhZGRFdmVudExpc3RlbmVyIiwiYXR0YWNoRXZlbnQiLCJBcnJheSIsImNhbGxiYWNrIiwiYXJncyIsIkVycm9yIiwiY29uY2F0IiwicnVuIiwiZnVuIiwiYXJyYXkiLCJ0aXRsZSIsImJyb3dzZXIiLCJlbnYiLCJhcmd2IiwidmVyc2lvbiIsInZlcnNpb25zIiwib24iLCJhZGRMaXN0ZW5lciIsIm9uY2UiLCJvZmYiLCJyZW1vdmVMaXN0ZW5lciIsInJlbW92ZUFsbExpc3RlbmVycyIsImVtaXQiLCJwcmVwZW5kTGlzdGVuZXIiLCJwcmVwZW5kT25jZUxpc3RlbmVyIiwibGlzdGVuZXJzIiwiYmluZGluZyIsImN3ZCIsImNoZGlyIiwidW1hc2siLCJxdWV1ZSIsInNpemUiLCJoIiwieSIsIk8iLCJqIiwiaW5pdCIsImZvciIsInN0ZXAiLCJyZXN1bHQiLCJyZWR1Y2VkIiwiZyIsInciLCJUIiwiUyIsIngiLCJFIiwiSSIsImNsb3NlZCIsImNvbW1pdCIsImJ1ZmZlciIsInhmb3JtIiwicmVjdnMiLCJfIiwiZGlydHlTZW5kcyIsIm1heERpcnR5Iiwic2VuZHMiLCJoYW5kbGVyIiwibWF4UXVldWVkIiwiTSIsImRpcnR5UmVjdnMiLCJrIiwiUCIsImNoYW5uZWwiLCJBIiwicHJpb3JpdHkiLCJmbG9vciIsImlzQXJyYXkiLCJDIiwiRCIsIkwiLCJxIiwiUSIsIkYiLCJOIiwieiIsIlIiLCJ0cmFuc2R1Y2VyIiwidGltZXIiLCJidWYiLCJVIiwiaXNCdWZmZXJlZCIsImlzVGltZWQiLCJWIiwiQiIsIkciLCIkIiwiSCIsIlgiLCJZIiwiSiIsIksiLCJXIiwiaXNQcm90b3R5cGVPZiIsIloiLCJlZSIsInRlIiwibmUiLCJhbGwiLCJpc051bWJlciIsImlzRmluaXRlIiwicmVkdWNlIiwiZm4iLCJvdXRwdXQiLCJjaGFuIiwiZ28iLCJhY2MiLCJzZW5kQXN5bmMiLCJ0b0NoYW5uZWwiLCJpdGVyYWJsZSIsIml0ZW0iLCJzZW5kIiwidG9BcnJheSIsImlucHV0IiwiVEFQUyIsInBpcGUiLCJzcmMiLCJkc3QiLCJrZWVwT3BlbiIsInJlY3YiLCJDTE9TRUQiLCJwYXJ0aXRpb24iLCJ0QnVmZmVyIiwiZkJ1ZmZlciIsInREc3QiLCJmRHN0IiwibWVyZ2UiLCJzcmNzIiwiaW5wdXRzIiwic2VsZWN0Iiwic3BsaWNlIiwic3BsaXQiLCJidWZmZXJzIiwiYmZzIiwiY291bnQiLCJkc3RzIiwibWFwIiwiYmYiLCJtYWtlVGFwIiwiY29uZmlndXJhYmxlIiwidGFwIiwiaW5jbHVkZXMiLCJ1bnRhcCIsInRhcHMiLCJpbmRleCIsInVudGFwQWxsIiwic3JjbGVuIiwidmFsdWVzIiwiY2FsbGJhY2tzIiwidGVtcCIsInJlY3ZBc3luYyIsImRlYm91bmNlIiwiZGVsYXkiLCJvcHRpb25zIiwiZGVmYXVsdHMiLCJsZWFkaW5nIiwidHJhaWxpbmciLCJtYXhEZWxheSIsImNhbmNlbCIsImRlbCIsIm9wdHMiLCJtYXgiLCJjdXJyZW50IiwidGltaW5nIiwidGltZWRDaGFuIiwidGhyb3R0bGUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxnQzs7Ozs7Ozs7Ozs7QUNsQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQkEsQ0FBQyxVQUFTQSxDQUFULEVBQVdDLENBQVgsRUFBYTtBQUFDLFVBQWtEQyxNQUFNLENBQUNDLE9BQVAsR0FBZUYsQ0FBQyxFQUFs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aWxlIjoib3BlcmF0aW9ucy5kZXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJvcGVyYXRpb25zXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIm9wZXJhdGlvbnNcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZnVuY3Rpb24gX2FzeW5jSXRlcmF0b3IoaXRlcmFibGUpIHtcbiAgdmFyIG1ldGhvZDtcblxuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGlmIChTeW1ib2wuYXN5bmNJdGVyYXRvcikge1xuICAgICAgbWV0aG9kID0gaXRlcmFibGVbU3ltYm9sLmFzeW5jSXRlcmF0b3JdO1xuICAgICAgaWYgKG1ldGhvZCAhPSBudWxsKSByZXR1cm4gbWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgIH1cblxuICAgIGlmIChTeW1ib2wuaXRlcmF0b3IpIHtcbiAgICAgIG1ldGhvZCA9IGl0ZXJhYmxlW1N5bWJvbC5pdGVyYXRvcl07XG4gICAgICBpZiAobWV0aG9kICE9IG51bGwpIHJldHVybiBtZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgfVxuICB9XG5cbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk9iamVjdCBpcyBub3QgYXN5bmMgaXRlcmFibGVcIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FzeW5jSXRlcmF0b3I7IiwiLyohXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIE90dGVyc29uXG4gKiBcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIFxuICogZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgXG4gKiByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3IgXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKiBcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIFxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKiBcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgXG4gKiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4gKiBcbiAqL1xuIWZ1bmN0aW9uKGUsdCl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9dCgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW10sdCk6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/ZXhwb3J0cy5jaGFua289dCgpOmUuY2hhbmtvPXQoKX0odGhpcywoZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7dmFyIHQ9e307ZnVuY3Rpb24gbihyKXtpZih0W3JdKXJldHVybiB0W3JdLmV4cG9ydHM7dmFyIG89dFtyXT17aTpyLGw6ITEsZXhwb3J0czp7fX07cmV0dXJuIGVbcl0uY2FsbChvLmV4cG9ydHMsbyxvLmV4cG9ydHMsbiksby5sPSEwLG8uZXhwb3J0c31yZXR1cm4gbi5tPWUsbi5jPXQsbi5kPWZ1bmN0aW9uKGUsdCxyKXtuLm8oZSx0KXx8T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCx7ZW51bWVyYWJsZTohMCxnZXQ6cn0pfSxuLnI9ZnVuY3Rpb24oZSl7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLnRvU3RyaW5nVGFnJiZPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxTeW1ib2wudG9TdHJpbmdUYWcse3ZhbHVlOlwiTW9kdWxlXCJ9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX0sbi50PWZ1bmN0aW9uKGUsdCl7aWYoMSZ0JiYoZT1uKGUpKSw4JnQpcmV0dXJuIGU7aWYoNCZ0JiZcIm9iamVjdFwiPT10eXBlb2YgZSYmZSYmZS5fX2VzTW9kdWxlKXJldHVybiBlO3ZhciByPU9iamVjdC5jcmVhdGUobnVsbCk7aWYobi5yKHIpLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyLFwiZGVmYXVsdFwiLHtlbnVtZXJhYmxlOiEwLHZhbHVlOmV9KSwyJnQmJlwic3RyaW5nXCIhPXR5cGVvZiBlKWZvcih2YXIgbyBpbiBlKW4uZChyLG8sZnVuY3Rpb24odCl7cmV0dXJuIGVbdF19LmJpbmQobnVsbCxvKSk7cmV0dXJuIHJ9LG4ubj1mdW5jdGlvbihlKXt2YXIgdD1lJiZlLl9fZXNNb2R1bGU/ZnVuY3Rpb24oKXtyZXR1cm4gZS5kZWZhdWx0fTpmdW5jdGlvbigpe3JldHVybiBlfTtyZXR1cm4gbi5kKHQsXCJhXCIsdCksdH0sbi5vPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHQpfSxuLnA9XCJcIixuKG4ucz0xMCl9KFtmdW5jdGlvbihlLHQsbil7XCJ1c2Ugc3RyaWN0XCI7bi5kKHQsXCJhXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIHJ9KSksbi5kKHQsXCJmXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIHV9KSksbi5kKHQsXCJiXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIGN9KSksbi5kKHQsXCJkXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIGl9KSksbi5kKHQsXCJjXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIGF9KSksbi5kKHQsXCJlXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIGZ9KSk7Y29uc3Qgcj1TeW1ib2woXCJFTVBUWVwiKSxvPVN5bWJvbChcIlFVRVVFXCIpO2Z1bmN0aW9uIHUoKXtyZXR1cm4gT2JqZWN0LmNyZWF0ZShudWxsLHtzdG9yZTp7dmFsdWU6W10sd3JpdGFibGU6ITB9LHBvaW50ZXI6e3ZhbHVlOjAsd3JpdGFibGU6ITB9LFtvXTp7dmFsdWU6ITB9fSl9ZnVuY3Rpb24gYyhlKXtyZXR1cm4gZS5zdG9yZS5sZW5ndGgtZS5wb2ludGVyfWZ1bmN0aW9uIGkoZSx0KXtlLnN0b3JlLnB1c2godCl9ZnVuY3Rpb24gYShlKXtpZigwPT09ZS5zdG9yZS5sZW5ndGgpcmV0dXJuIHI7Y29uc3QgdD1lLnN0b3JlW2UucG9pbnRlcl07cmV0dXJuIDIqKytlLnBvaW50ZXI+PWUuc3RvcmUubGVuZ3RoJiYoZS5zdG9yZT1lLnN0b3JlLnNsaWNlKGUucG9pbnRlciksZS5wb2ludGVyPTApLHR9ZnVuY3Rpb24gZihlLHQpe2ZvcihsZXQgbj0wLHI9YyhlKTtuPHI7bisrKXtjb25zdCBuPWEoZSk7dChuKSYmaShlLG4pfX19LGZ1bmN0aW9uKGUsdCxuKXtcInVzZSBzdHJpY3RcIjsoZnVuY3Rpb24oZSl7bi5kKHQsXCJiXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIHV9KSksbi5kKHQsXCJhXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIGN9KSksbi5kKHQsXCJjXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIGl9KSksbi5kKHQsXCJkXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIHZ9KSksbi5kKHQsXCJlXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIGJ9KSk7dmFyIHI9bigwKTtjb25zdCBvPU9iamVjdChyLmYpKCksdT1TeW1ib2woXCJTRVRfSU1NRURJQVRFXCIpLGM9U3ltYm9sKFwiTUVTU0FHRV9DSEFOTkVMXCIpLGk9U3ltYm9sKFwiU0VUX1RJTUVPVVRcIiksYT17YmF0Y2hTaXplOjEwMjQsZGlzcGF0Y2hNZXRob2Q6dX07bGV0IGY9ZCgpLHM9ITEsbD0hMDtmdW5jdGlvbiBkKCl7c3dpdGNoKGZ1bmN0aW9uKCl7c3dpdGNoKGEuZGlzcGF0Y2hNZXRob2Qpe2Nhc2UgYzpyZXR1cm5cInVuZGVmaW5lZFwiIT10eXBlb2YgTWVzc2FnZUNoYW5uZWw/YzppO2Nhc2UgaTpyZXR1cm4gaTtkZWZhdWx0OnJldHVybiB2b2lkIDAhPT1lP3U6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIE1lc3NhZ2VDaGFubmVsP2M6aX19KCkpe2Nhc2UgdTpyZXR1cm4oKT0+e2wmJnN8fChsPSEwLGUobSkpfTtjYXNlIGM6e2NvbnN0IGU9bmV3IE1lc3NhZ2VDaGFubmVsO3JldHVybiBlLnBvcnQxLm9ubWVzc2FnZT0oKT0+bSgpLCgpPT57bCYmc3x8KGw9ITAsZS5wb3J0Mi5wb3N0TWVzc2FnZSgwKSl9fWNhc2UgaTpyZXR1cm4oKT0+e2wmJnN8fChsPSEwLHNldFRpbWVvdXQobSwwKSl9fX1mdW5jdGlvbiBtKCl7cz0hMCxsPSExO2xldCBlPTA7Zm9yKDs7KXtjb25zdCB0PU9iamVjdChyLmMpKG8pO2lmKHQ9PT1yLmEpYnJlYWs7aWYodCgpLGU+PWEuYmF0Y2hTaXplKWJyZWFrO2UrKyxzPSExLE9iamVjdChyLmIpKG8pJiZmKCl9fWZ1bmN0aW9uIHYoZT17fSl7Zm9yKGNvbnN0IHQgaW4gYSl0IGluIGUmJihhW3RdPWVbdF0sXCJkaXNwYXRjaE1ldGhvZFwiPT09dCYmKGY9ZCgpKSk7cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sYSl9ZnVuY3Rpb24gYihlKXtPYmplY3Qoci5kKShvLGUpLGYoKX19KS5jYWxsKHRoaXMsbig3KS5zZXRJbW1lZGlhdGUpfSxmdW5jdGlvbihlLHQpe2UuZXhwb3J0cz1mdW5jdGlvbihlKXt0aGlzLndyYXBwZWQ9ZX19LGZ1bmN0aW9uKGUsdCl7dmFyIG47bj1mdW5jdGlvbigpe3JldHVybiB0aGlzfSgpO3RyeXtuPW58fG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCl9Y2F0Y2goZSl7XCJvYmplY3RcIj09dHlwZW9mIHdpbmRvdyYmKG49d2luZG93KX1lLmV4cG9ydHM9bn0sZnVuY3Rpb24oZSx0LG4pe3ZhciByPW4oMik7ZS5leHBvcnRzPWZ1bmN0aW9uKGUpe3JldHVybiBuZXcgcihlKX19LGZ1bmN0aW9uKGUsdCxuKXt2YXIgcj1uKDYpO2UuZXhwb3J0cz1mdW5jdGlvbihlKXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gbmV3IHIoZS5hcHBseSh0aGlzLGFyZ3VtZW50cykpfX19LGZ1bmN0aW9uKGUsdCxuKXt2YXIgcj1uKDIpO2Z1bmN0aW9uIG8oZSl7dmFyIHQsbjtmdW5jdGlvbiBvKHQsbil7dHJ5e3ZhciBjPWVbdF0obiksaT1jLnZhbHVlLGE9aSBpbnN0YW5jZW9mIHI7UHJvbWlzZS5yZXNvbHZlKGE/aS53cmFwcGVkOmkpLnRoZW4oKGZ1bmN0aW9uKGUpe2E/byhcInJldHVyblwiPT09dD9cInJldHVyblwiOlwibmV4dFwiLGUpOnUoYy5kb25lP1wicmV0dXJuXCI6XCJub3JtYWxcIixlKX0pLChmdW5jdGlvbihlKXtvKFwidGhyb3dcIixlKX0pKX1jYXRjaChlKXt1KFwidGhyb3dcIixlKX19ZnVuY3Rpb24gdShlLHIpe3N3aXRjaChlKXtjYXNlXCJyZXR1cm5cIjp0LnJlc29sdmUoe3ZhbHVlOnIsZG9uZTohMH0pO2JyZWFrO2Nhc2VcInRocm93XCI6dC5yZWplY3Qocik7YnJlYWs7ZGVmYXVsdDp0LnJlc29sdmUoe3ZhbHVlOnIsZG9uZTohMX0pfSh0PXQubmV4dCk/byh0LmtleSx0LmFyZyk6bj1udWxsfXRoaXMuX2ludm9rZT1mdW5jdGlvbihlLHIpe3JldHVybiBuZXcgUHJvbWlzZSgoZnVuY3Rpb24odSxjKXt2YXIgaT17a2V5OmUsYXJnOnIscmVzb2x2ZTp1LHJlamVjdDpjLG5leHQ6bnVsbH07bj9uPW4ubmV4dD1pOih0PW49aSxvKGUscikpfSkpfSxcImZ1bmN0aW9uXCIhPXR5cGVvZiBlLnJldHVybiYmKHRoaXMucmV0dXJuPXZvaWQgMCl9XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuYXN5bmNJdGVyYXRvciYmKG8ucHJvdG90eXBlW1N5bWJvbC5hc3luY0l0ZXJhdG9yXT1mdW5jdGlvbigpe3JldHVybiB0aGlzfSksby5wcm90b3R5cGUubmV4dD1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5faW52b2tlKFwibmV4dFwiLGUpfSxvLnByb3RvdHlwZS50aHJvdz1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5faW52b2tlKFwidGhyb3dcIixlKX0sby5wcm90b3R5cGUucmV0dXJuPWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLl9pbnZva2UoXCJyZXR1cm5cIixlKX0sZS5leHBvcnRzPW99LGZ1bmN0aW9uKGUsdCxuKXsoZnVuY3Rpb24oZSl7dmFyIHI9dm9pZCAwIT09ZSYmZXx8XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHNlbGYmJnNlbGZ8fHdpbmRvdyxvPUZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseTtmdW5jdGlvbiB1KGUsdCl7dGhpcy5faWQ9ZSx0aGlzLl9jbGVhckZuPXR9dC5zZXRUaW1lb3V0PWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyB1KG8uY2FsbChzZXRUaW1lb3V0LHIsYXJndW1lbnRzKSxjbGVhclRpbWVvdXQpfSx0LnNldEludGVydmFsPWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyB1KG8uY2FsbChzZXRJbnRlcnZhbCxyLGFyZ3VtZW50cyksY2xlYXJJbnRlcnZhbCl9LHQuY2xlYXJUaW1lb3V0PXQuY2xlYXJJbnRlcnZhbD1mdW5jdGlvbihlKXtlJiZlLmNsb3NlKCl9LHUucHJvdG90eXBlLnVucmVmPXUucHJvdG90eXBlLnJlZj1mdW5jdGlvbigpe30sdS5wcm90b3R5cGUuY2xvc2U9ZnVuY3Rpb24oKXt0aGlzLl9jbGVhckZuLmNhbGwocix0aGlzLl9pZCl9LHQuZW5yb2xsPWZ1bmN0aW9uKGUsdCl7Y2xlYXJUaW1lb3V0KGUuX2lkbGVUaW1lb3V0SWQpLGUuX2lkbGVUaW1lb3V0PXR9LHQudW5lbnJvbGw9ZnVuY3Rpb24oZSl7Y2xlYXJUaW1lb3V0KGUuX2lkbGVUaW1lb3V0SWQpLGUuX2lkbGVUaW1lb3V0PS0xfSx0Ll91bnJlZkFjdGl2ZT10LmFjdGl2ZT1mdW5jdGlvbihlKXtjbGVhclRpbWVvdXQoZS5faWRsZVRpbWVvdXRJZCk7dmFyIHQ9ZS5faWRsZVRpbWVvdXQ7dD49MCYmKGUuX2lkbGVUaW1lb3V0SWQ9c2V0VGltZW91dCgoZnVuY3Rpb24oKXtlLl9vblRpbWVvdXQmJmUuX29uVGltZW91dCgpfSksdCkpfSxuKDgpLHQuc2V0SW1tZWRpYXRlPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBzZWxmJiZzZWxmLnNldEltbWVkaWF0ZXx8dm9pZCAwIT09ZSYmZS5zZXRJbW1lZGlhdGV8fHRoaXMmJnRoaXMuc2V0SW1tZWRpYXRlLHQuY2xlYXJJbW1lZGlhdGU9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHNlbGYmJnNlbGYuY2xlYXJJbW1lZGlhdGV8fHZvaWQgMCE9PWUmJmUuY2xlYXJJbW1lZGlhdGV8fHRoaXMmJnRoaXMuY2xlYXJJbW1lZGlhdGV9KS5jYWxsKHRoaXMsbigzKSl9LGZ1bmN0aW9uKGUsdCxuKXsoZnVuY3Rpb24oZSx0KXshZnVuY3Rpb24oZSxuKXtcInVzZSBzdHJpY3RcIjtpZighZS5zZXRJbW1lZGlhdGUpe3ZhciByLG8sdSxjLGksYT0xLGY9e30scz0hMSxsPWUuZG9jdW1lbnQsZD1PYmplY3QuZ2V0UHJvdG90eXBlT2YmJk9iamVjdC5nZXRQcm90b3R5cGVPZihlKTtkPWQmJmQuc2V0VGltZW91dD9kOmUsXCJbb2JqZWN0IHByb2Nlc3NdXCI9PT17fS50b1N0cmluZy5jYWxsKGUucHJvY2Vzcyk/cj1mdW5jdGlvbihlKXt0Lm5leHRUaWNrKChmdW5jdGlvbigpe3YoZSl9KSl9OiFmdW5jdGlvbigpe2lmKGUucG9zdE1lc3NhZ2UmJiFlLmltcG9ydFNjcmlwdHMpe3ZhciB0PSEwLG49ZS5vbm1lc3NhZ2U7cmV0dXJuIGUub25tZXNzYWdlPWZ1bmN0aW9uKCl7dD0hMX0sZS5wb3N0TWVzc2FnZShcIlwiLFwiKlwiKSxlLm9ubWVzc2FnZT1uLHR9fSgpP2UuTWVzc2FnZUNoYW5uZWw/KCh1PW5ldyBNZXNzYWdlQ2hhbm5lbCkucG9ydDEub25tZXNzYWdlPWZ1bmN0aW9uKGUpe3YoZS5kYXRhKX0scj1mdW5jdGlvbihlKXt1LnBvcnQyLnBvc3RNZXNzYWdlKGUpfSk6bCYmXCJvbnJlYWR5c3RhdGVjaGFuZ2VcImluIGwuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKT8obz1sLmRvY3VtZW50RWxlbWVudCxyPWZ1bmN0aW9uKGUpe3ZhciB0PWwuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTt0Lm9ucmVhZHlzdGF0ZWNoYW5nZT1mdW5jdGlvbigpe3YoZSksdC5vbnJlYWR5c3RhdGVjaGFuZ2U9bnVsbCxvLnJlbW92ZUNoaWxkKHQpLHQ9bnVsbH0sby5hcHBlbmRDaGlsZCh0KX0pOnI9ZnVuY3Rpb24oZSl7c2V0VGltZW91dCh2LDAsZSl9OihjPVwic2V0SW1tZWRpYXRlJFwiK01hdGgucmFuZG9tKCkrXCIkXCIsaT1mdW5jdGlvbih0KXt0LnNvdXJjZT09PWUmJlwic3RyaW5nXCI9PXR5cGVvZiB0LmRhdGEmJjA9PT10LmRhdGEuaW5kZXhPZihjKSYmdigrdC5kYXRhLnNsaWNlKGMubGVuZ3RoKSl9LGUuYWRkRXZlbnRMaXN0ZW5lcj9lLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsaSwhMSk6ZS5hdHRhY2hFdmVudChcIm9ubWVzc2FnZVwiLGkpLHI9ZnVuY3Rpb24odCl7ZS5wb3N0TWVzc2FnZShjK3QsXCIqXCIpfSksZC5zZXRJbW1lZGlhdGU9ZnVuY3Rpb24oZSl7XCJmdW5jdGlvblwiIT10eXBlb2YgZSYmKGU9bmV3IEZ1bmN0aW9uKFwiXCIrZSkpO2Zvcih2YXIgdD1uZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aC0xKSxuPTA7bjx0Lmxlbmd0aDtuKyspdFtuXT1hcmd1bWVudHNbbisxXTt2YXIgbz17Y2FsbGJhY2s6ZSxhcmdzOnR9O3JldHVybiBmW2FdPW8scihhKSxhKyt9LGQuY2xlYXJJbW1lZGlhdGU9bX1mdW5jdGlvbiBtKGUpe2RlbGV0ZSBmW2VdfWZ1bmN0aW9uIHYoZSl7aWYocylzZXRUaW1lb3V0KHYsMCxlKTtlbHNle3ZhciB0PWZbZV07aWYodCl7cz0hMDt0cnl7IWZ1bmN0aW9uKGUpe3ZhciB0PWUuY2FsbGJhY2ssbj1lLmFyZ3M7c3dpdGNoKG4ubGVuZ3RoKXtjYXNlIDA6dCgpO2JyZWFrO2Nhc2UgMTp0KG5bMF0pO2JyZWFrO2Nhc2UgMjp0KG5bMF0sblsxXSk7YnJlYWs7Y2FzZSAzOnQoblswXSxuWzFdLG5bMl0pO2JyZWFrO2RlZmF1bHQ6dC5hcHBseSh2b2lkIDAsbil9fSh0KX1maW5hbGx5e20oZSkscz0hMX19fX19KFwidW5kZWZpbmVkXCI9PXR5cGVvZiBzZWxmP3ZvaWQgMD09PWU/dGhpczplOnNlbGYpfSkuY2FsbCh0aGlzLG4oMyksbig5KSl9LGZ1bmN0aW9uKGUsdCl7dmFyIG4scixvPWUuZXhwb3J0cz17fTtmdW5jdGlvbiB1KCl7dGhyb3cgbmV3IEVycm9yKFwic2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZFwiKX1mdW5jdGlvbiBjKCl7dGhyb3cgbmV3IEVycm9yKFwiY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkXCIpfWZ1bmN0aW9uIGkoZSl7aWYobj09PXNldFRpbWVvdXQpcmV0dXJuIHNldFRpbWVvdXQoZSwwKTtpZigobj09PXV8fCFuKSYmc2V0VGltZW91dClyZXR1cm4gbj1zZXRUaW1lb3V0LHNldFRpbWVvdXQoZSwwKTt0cnl7cmV0dXJuIG4oZSwwKX1jYXRjaCh0KXt0cnl7cmV0dXJuIG4uY2FsbChudWxsLGUsMCl9Y2F0Y2godCl7cmV0dXJuIG4uY2FsbCh0aGlzLGUsMCl9fX0hZnVuY3Rpb24oKXt0cnl7bj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBzZXRUaW1lb3V0P3NldFRpbWVvdXQ6dX1jYXRjaChlKXtuPXV9dHJ5e3I9XCJmdW5jdGlvblwiPT10eXBlb2YgY2xlYXJUaW1lb3V0P2NsZWFyVGltZW91dDpjfWNhdGNoKGUpe3I9Y319KCk7dmFyIGEsZj1bXSxzPSExLGw9LTE7ZnVuY3Rpb24gZCgpe3MmJmEmJihzPSExLGEubGVuZ3RoP2Y9YS5jb25jYXQoZik6bD0tMSxmLmxlbmd0aCYmbSgpKX1mdW5jdGlvbiBtKCl7aWYoIXMpe3ZhciBlPWkoZCk7cz0hMDtmb3IodmFyIHQ9Zi5sZW5ndGg7dDspe2ZvcihhPWYsZj1bXTsrK2w8dDspYSYmYVtsXS5ydW4oKTtsPS0xLHQ9Zi5sZW5ndGh9YT1udWxsLHM9ITEsZnVuY3Rpb24oZSl7aWYocj09PWNsZWFyVGltZW91dClyZXR1cm4gY2xlYXJUaW1lb3V0KGUpO2lmKChyPT09Y3x8IXIpJiZjbGVhclRpbWVvdXQpcmV0dXJuIHI9Y2xlYXJUaW1lb3V0LGNsZWFyVGltZW91dChlKTt0cnl7cihlKX1jYXRjaCh0KXt0cnl7cmV0dXJuIHIuY2FsbChudWxsLGUpfWNhdGNoKHQpe3JldHVybiByLmNhbGwodGhpcyxlKX19fShlKX19ZnVuY3Rpb24gdihlLHQpe3RoaXMuZnVuPWUsdGhpcy5hcnJheT10fWZ1bmN0aW9uIGIoKXt9by5uZXh0VGljaz1mdW5jdGlvbihlKXt2YXIgdD1uZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aC0xKTtpZihhcmd1bWVudHMubGVuZ3RoPjEpZm9yKHZhciBuPTE7bjxhcmd1bWVudHMubGVuZ3RoO24rKyl0W24tMV09YXJndW1lbnRzW25dO2YucHVzaChuZXcgdihlLHQpKSwxIT09Zi5sZW5ndGh8fHN8fGkobSl9LHYucHJvdG90eXBlLnJ1bj1mdW5jdGlvbigpe3RoaXMuZnVuLmFwcGx5KG51bGwsdGhpcy5hcnJheSl9LG8udGl0bGU9XCJicm93c2VyXCIsby5icm93c2VyPSEwLG8uZW52PXt9LG8uYXJndj1bXSxvLnZlcnNpb249XCJcIixvLnZlcnNpb25zPXt9LG8ub249YixvLmFkZExpc3RlbmVyPWIsby5vbmNlPWIsby5vZmY9YixvLnJlbW92ZUxpc3RlbmVyPWIsby5yZW1vdmVBbGxMaXN0ZW5lcnM9YixvLmVtaXQ9YixvLnByZXBlbmRMaXN0ZW5lcj1iLG8ucHJlcGVuZE9uY2VMaXN0ZW5lcj1iLG8ubGlzdGVuZXJzPWZ1bmN0aW9uKGUpe3JldHVybltdfSxvLmJpbmRpbmc9ZnVuY3Rpb24oZSl7dGhyb3cgbmV3IEVycm9yKFwicHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWRcIil9LG8uY3dkPWZ1bmN0aW9uKCl7cmV0dXJuXCIvXCJ9LG8uY2hkaXI9ZnVuY3Rpb24oZSl7dGhyb3cgbmV3IEVycm9yKFwicHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkXCIpfSxvLnVtYXNrPWZ1bmN0aW9uKCl7cmV0dXJuIDB9fSxmdW5jdGlvbihlLHQsbil7XCJ1c2Ugc3RyaWN0XCI7bi5yKHQpO3ZhciByPW4oMCk7Y29uc3Qgbz1TeW1ib2woXCJCVUZGRVJcIiksdT1TeW1ib2woXCJGSVhFRFwiKSxjPVN5bWJvbChcIkRST1BQSU5HXCIpLGk9U3ltYm9sKFwiU0xJRElOR1wiKTtmdW5jdGlvbiBhKGUpe3JldHVybiBPYmplY3QuY3JlYXRlKG51bGwse3F1ZXVlOnt2YWx1ZTpPYmplY3Qoci5mKSgpfSxzaXplOnt2YWx1ZTplfSxbb106e3ZhbHVlOnV9fSl9ZnVuY3Rpb24gZihlKXtyZXR1cm4gT2JqZWN0LmNyZWF0ZShudWxsLHtxdWV1ZTp7dmFsdWU6T2JqZWN0KHIuZikoKX0sc2l6ZTp7dmFsdWU6ZX0sW29dOnt2YWx1ZTpjfX0pfWZ1bmN0aW9uIHMoZSl7cmV0dXJuIE9iamVjdC5jcmVhdGUobnVsbCx7cXVldWU6e3ZhbHVlOk9iamVjdChyLmYpKCl9LHNpemU6e3ZhbHVlOmV9LFtvXTp7dmFsdWU6aX19KX1mdW5jdGlvbiBsKGUpe3JldHVybiBlLnNpemV9ZnVuY3Rpb24gZChlKXtyZXR1cm4gT2JqZWN0KHIuYikoZS5xdWV1ZSl9ZnVuY3Rpb24gbShlKXtyZXR1cm4gZVtvXT09PXUmJk9iamVjdChyLmIpKGUucXVldWUpPj1lLnNpemV9ZnVuY3Rpb24gdihlLC4uLnQpe3N3aXRjaChlW29dKXtjYXNlIHU6Zm9yKGNvbnN0IG4gb2YgdClPYmplY3Qoci5kKShlLnF1ZXVlLG4pO2JyZWFrO2Nhc2UgYzpmb3IoY29uc3QgbiBvZiB0KWQoZSk8bChlKSYmT2JqZWN0KHIuZCkoZS5xdWV1ZSxuKTticmVhaztjYXNlIGk6Zm9yKGNvbnN0IG4gb2YgdClkKGUpPj1sKGUpJiZPYmplY3Qoci5jKShlLnF1ZXVlKSxPYmplY3Qoci5kKShlLnF1ZXVlLG4pO2JyZWFrO2RlZmF1bHQ6cmV0dXJufX1mdW5jdGlvbiBiKGUpe3JldHVybiBPYmplY3Qoci5jKShlLnF1ZXVlKX12YXIgcD1uKDQpLGg9bi5uKHApLHk9big1KSxPPW4ubih5KTtjb25zdCBqPU9iamVjdC5jcmVhdGUobnVsbCx7aW5pdDp7dmFsdWU6U3ltYm9sLmZvcihcInRyYW5zZHVjZXIvaW5pdFwiKX0sc3RlcDp7dmFsdWU6U3ltYm9sLmZvcihcInRyYW5zZHVjZXIvc3RlcFwiKX0scmVzdWx0Ont2YWx1ZTpTeW1ib2wuZm9yKFwidHJhbnNkdWNlci9yZXN1bHRcIil9LHJlZHVjZWQ6e3ZhbHVlOlN5bWJvbC5mb3IoXCJ0cmFuc2R1Y2VyL3JlZHVjZWRcIil9LHZhbHVlOnt2YWx1ZTpTeW1ib2wuZm9yKFwidHJhbnNkdWNlci92YWx1ZVwiKX19KTt2YXIgZz1uKDEpO2NvbnN0IHc9U3ltYm9sKFwiQ0xPU0VEXCIpLFQ9U3ltYm9sKFwiQk9YXCIpO2Z1bmN0aW9uIFMoZSl7cmV0dXJuISEobnVsbD09ZT92b2lkIDA6ZVtUXSl9ZnVuY3Rpb24geChlKXtyZXR1cm4hIShudWxsPT1lP3ZvaWQgMDplW2oucmVkdWNlZF0pfWZ1bmN0aW9uIEUoZSl7cmV0dXJuIE9iamVjdC5jcmVhdGUobnVsbCx7dmFsdWU6e3ZhbHVlOmUsd3JpdGFibGU6ITB9LFtUXTp7dmFsdWU6ITB9fSl9ZnVuY3Rpb24gSShlLHQsbil7aWYodD09PXcpdGhyb3cgRXJyb3IoXCJDYW5ub3Qgc2VuZCBDTE9TRUQgdG8gYSBjaGFubmVsXCIpO2lmKGUuY2xvc2VkKXJldHVybiBuLmNvbW1pdCgpLEUoITEpO2xldCBvLHU7aWYoZS5idWZmZXImJiFtKGUuYnVmZmVyKSl7bi5jb21taXQoKTtjb25zdCBjPXgoZS54Zm9ybVtqLnN0ZXBdKGUuYnVmZmVyLHQpKTtmb3IoOzAhPT1kKGUuYnVmZmVyKSYmKG89T2JqZWN0KHIuYykoZS5yZWN2cyksbyE9PXIuYSk7KWlmKG8uYWN0aXZlKXt1PW8uY29tbWl0KCk7Y29uc3QgdD1iKGUuYnVmZmVyKTt1JiZPYmplY3QoZy5lKSgoKT0+dSh0KSl9cmV0dXJuIGMmJl8oZSksRSghMCl9Zm9yKDtvPU9iamVjdChyLmMpKGUucmVjdnMpLG8hPT1yLmE7KWlmKG8uYWN0aXZlKXJldHVybiBuLmNvbW1pdCgpLHU9by5jb21taXQoKSx1JiZPYmplY3QoZy5lKSgoKT0+dSh0KSksRSghMCk7aWYoZS5kaXJ0eVNlbmRzPmUubWF4RGlydHk/KE9iamVjdChyLmUpKGUuc2VuZHMsZT0+ZS5oYW5kbGVyLmFjdGl2ZSksZS5kaXJ0eVNlbmRzPTApOmUuZGlydHlTZW5kcysrLE9iamVjdChyLmIpKGUuc2VuZHMpPj1lLm1heFF1ZXVlZCl0aHJvdyBFcnJvcihgTm8gbW9yZSB0aGFuICR7ZS5tYXhRdWV1ZWR9IHBlbmRpbmcgc2VuZHMgYXJlIGFsbG93ZWQgb24gYSBzaW5nbGUgY2hhbm5lbGApO3JldHVybiBPYmplY3Qoci5kKShlLnNlbmRzLGZ1bmN0aW9uKGUsdCl7cmV0dXJuIE9iamVjdC5jcmVhdGUobnVsbCx7dmFsdWU6e3ZhbHVlOmUsd3JpdGFibGU6ITB9LGhhbmRsZXI6e3ZhbHVlOnR9LFtUXTp7dmFsdWU6ITB9fSl9KHQsbikpLG51bGx9ZnVuY3Rpb24gTShlLHQpe2xldCBuLG8sdTtpZihlLmJ1ZmZlciYmZChlLmJ1ZmZlcik+MCl7dC5jb21taXQoKTtjb25zdCBjPWIoZS5idWZmZXIpO2Zvcig7IW0oZS5idWZmZXIpJiYobj1PYmplY3Qoci5jKShlLnNlbmRzKSxuIT09ci5hKTspbz1uLmhhbmRsZXIsby5hY3RpdmUmJih1PW8uY29tbWl0KCksdSYmT2JqZWN0KGcuZSkoKCk9PnUoITApKSx4KGUueGZvcm1bai5zdGVwXShlLmJ1ZmZlcixuLnZhbHVlKSkmJl8oZSkpO3JldHVybiBFKGMpfWZvcig7bj1PYmplY3Qoci5jKShlLnNlbmRzKSxuIT09ci5hOylpZihvPW4uaGFuZGxlcixvLmFjdGl2ZSlyZXR1cm4gdT1vLmNvbW1pdCgpLHUmJk9iamVjdChnLmUpKCgpPT51KCEwKSksRShuLnZhbHVlKTtpZihlLmNsb3NlZClyZXR1cm4gdC5jb21taXQoKSxFKHcpO2lmKGUuZGlydHlSZWN2cz5lLm1heERpcnR5PyhPYmplY3Qoci5lKShlLnJlY3ZzLGU9PmUuYWN0aXZlKSxlLmRpcnR5UmVjdnM9MCk6ZS5kaXJ0eVJlY3ZzKyssT2JqZWN0KHIuYikoZS5yZWN2cyk+PWUubWF4UXVldWVkKXRocm93IEVycm9yKGBObyBtb3JlIHRoYW4gJHtlLm1heFF1ZXVlZH0gcGVuZGluZyByZWNlaXZlcyBhcmUgYWxsb3dlZCBvbiBhIHNpbmdsZSBjaGFubmVsYCk7cmV0dXJuIE9iamVjdChyLmQpKGUucmVjdnMsdCksbnVsbH1mdW5jdGlvbiBfKGUpe2lmKGUuY2xvc2VkKXJldHVybjtsZXQgdCxuLG87aWYoZS5jbG9zZWQ9ITAsZS5idWZmZXIpZm9yKGUueGZvcm1bai5yZXN1bHRdKGUuYnVmZmVyKTswIT09ZChlLmJ1ZmZlcikmJih0PU9iamVjdChyLmMpKGUucmVjdnMpLHQhPT1yLmEpOylpZih0LmFjdGl2ZSl7bz10LmNvbW1pdCgpO2NvbnN0IG49YihlLmJ1ZmZlcik7byYmT2JqZWN0KGcuZSkoKCk9Pm8obikpfWZvcig7dD1PYmplY3Qoci5jKShlLnJlY3ZzKSx0IT09ci5hOyl0LmFjdGl2ZSYmKG89dC5jb21taXQoKSxvJiZPYmplY3QoZy5lKSgoKT0+byh3KSkpO2Zvcig7bj1PYmplY3Qoci5jKShlLnNlbmRzKSxuIT09ci5hOyluLmhhbmRsZXIuYWN0aXZlJiYobz1uLmhhbmRsZXIuY29tbWl0KCksbyYmT2JqZWN0KGcuZSkoKCk9Pm8oITEpKSl9Y29uc3Qgaz1TeW1ib2woXCJERUZBVUxUXCIpO2Z1bmN0aW9uIFAoZSx0KXtyZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuY3JlYXRlKG51bGwpLHt2YWx1ZTplLGNoYW5uZWw6dH0pfWZ1bmN0aW9uIEEoZSx0PSgoKT0+e30pLG49e30pe2NvbnN0IHI9ZS5sZW5ndGg7aWYoMD09PXIpdGhyb3cgRXJyb3IoXCJzZWxlY3QgY2FsbGVkIHdpdGggbm8gb3BlcmF0aW9uc1wiKTtjb25zdCBvPSEhbi5wcmlvcml0eSx1PW8/W106ZnVuY3Rpb24oZSl7Y29uc3QgdD1bXTtmb3IobGV0IG49MDtuPGU7bisrKXQucHVzaChuKTtmb3IobGV0IG49ZS0xO24+MDtuLS0pe2NvbnN0IGU9TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKihuKzEpKSxyPXRbbl07dFtuXT10W2VdLHRbZV09cn1yZXR1cm4gdH0ociksYz1FKCEwKTtmdW5jdGlvbiBpKGUpe3JldHVybiBmdW5jdGlvbihlLHQpe3JldHVybiBPYmplY3QuY3JlYXRlKG51bGwse2FjdGl2ZTp7Z2V0OigpPT5lLnZhbHVlfSxjb21taXQ6e3ZhbHVlOigpPT4oZS52YWx1ZT0hMSx0KX19KX0oYyxuPT57dChQKG4sZSkpfSl9bGV0IGE7Zm9yKGxldCBuPTA7bjxyO24rKyl7Y29uc3Qgcj1lW28/bjp1W25dXTtsZXQgYyxmO2lmKEFycmF5LmlzQXJyYXkocik/KFtjLGZdPXIsYT1JKGMsZixpKGMpKSk6KGM9cixhPU0oYyxpKGMpKSksUyhhKSl7dChQKGEudmFsdWUsYykpO2JyZWFrfX0hUyhhKSYmT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG4sXCJkZWZhdWx0XCIpJiZjLnZhbHVlJiYoYy52YWx1ZT0hMSx0KFAobi5kZWZhdWx0LGspKSl9ZnVuY3Rpb24gQyhlLHQ9e30pe3JldHVybiBuZXcgUHJvbWlzZShuPT57QShlLG4sdCl9KX1mdW5jdGlvbiBEKGUpe3JldHVybiBlLnZhbHVlfWZ1bmN0aW9uIEwoZSl7cmV0dXJuIGUuY2hhbm5lbH1jb25zdCBxPSgpPT53O2Z1bmN0aW9uIFEoZSl7cmV0dXJuIE9iamVjdC5jcmVhdGUobnVsbCx7YWN0aXZlOnt2YWx1ZTohMH0sY29tbWl0Ont2YWx1ZTooKT0+ZX19KX1mdW5jdGlvbiBGKGUsdCxuKXtjb25zdCByPXQobik7cmV0dXJuIHIhPT13JiZ2KGUsciksZX1mdW5jdGlvbiBOKGUsdD1xKXtyZXR1cm57W2ouc3RlcF0obixyKXt0cnl7cmV0dXJuIGVbai5zdGVwXShuLHIpfWNhdGNoKGUpe3JldHVybiBGKG4sdCxlKX19LFtqLnJlc3VsdF0obil7dHJ5e3JldHVybiBlW2oucmVzdWx0XShuKX1jYXRjaChlKXtyZXR1cm4gRihuLHQsZSl9fX19Y29uc3Qgej17W2ouaW5pdF0oKXt0aHJvdyBFcnJvcihcImluaXQgbm90IGF2YWlsYWJsZVwiKX0sW2ouc3RlcF06KGUsdCk9Pih2KGUsdCksZSksW2oucmVzdWx0XTplPT5lfTtmdW5jdGlvbiBSKGUsdCxuKXtsZXQgcix1O3ZhciBjO2U/XCJudW1iZXJcIj09dHlwZW9mIGU/KHI9YShlKSx1PXQpOihudWxsPT0oYz1lKT92b2lkIDA6Y1tvXSk/KHI9ZSx1PXQpOihyPShudWxsPT1lP3ZvaWQgMDplLnRyYW5zZHVjZXIpP2EoMSk6bnVsbCx1PWUpOihyPW51bGwsdT10KTtjb25zdHt0cmFuc2R1Y2VyOmksaGFuZGxlcjpmLG1heERpcnR5OnMsbWF4UXVldWVkOmwsdGltZXI6ZH09T2JqZWN0LmFzc2lnbih7fSxuLHUpO3JldHVybntidWY6cix0cmFuc2R1Y2VyOmksaGFuZGxlcjpmLG1heERpcnR5OnMsbWF4UXVldWVkOmwsdGltZXI6ZH19ZnVuY3Rpb24gVShlLHQpe2NvbnN0IG49e21heERpcnR5OjY0LG1heFF1ZXVlZDoxMDI0fSx7YnVmOm8sdHJhbnNkdWNlcjp1LGhhbmRsZXI6YyxtYXhEaXJ0eTppLG1heFF1ZXVlZDphLHRpbWVyOmZ9PVIoZSx0LG4pO2lmKHUmJiFvKXRocm93IEVycm9yKFwiT25seSBidWZmZXJlZCBjaGFubmVscyBjYW4gdXNlIHRyYW5zZHVjZXJzXCIpO2NvbnN0IHM9XCJudW1iZXJcIj09dHlwZW9mIGYsbD1mdW5jdGlvbihlLHQsbj0hMSxvPTY0LHU9MTAyNCl7cmV0dXJuIE9iamVjdC5jcmVhdGUobnVsbCx7YnVmZmVyOnt2YWx1ZTplfSx4Zm9ybTp7dmFsdWU6dH0sbWF4RGlydHk6e3ZhbHVlOm99LG1heFF1ZXVlZDp7dmFsdWU6dX0scmVjdnM6e3ZhbHVlOk9iamVjdChyLmYpKCl9LHNlbmRzOnt2YWx1ZTpPYmplY3Qoci5mKSgpfSxkaXJ0eVJlY3ZzOnt2YWx1ZTowLHdyaXRhYmxlOiEwfSxkaXJ0eVNlbmRzOnt2YWx1ZTowLHdyaXRhYmxlOiEwfSxjbG9zZWQ6e3ZhbHVlOiExLHdyaXRhYmxlOiEwfSxpc0J1ZmZlcmVkOnt2YWx1ZTohIWV9LGlzVGltZWQ6e3ZhbHVlOm59fSl9KG8sTih1P3Uoeik6eixjKSxzLGksYSk7ZnVuY3Rpb24gZCgpe3JldHVybihkPU8oKSgoZnVuY3Rpb24qKCl7Zm9yKDs7KXtjb25zdCBlPXlpZWxkIGgoKShWKGwpKTtpZihlPT09dylicmVhazt5aWVsZCBlfX0pKSkuYXBwbHkodGhpcyxhcmd1bWVudHMpfXJldHVybiBsW1N5bWJvbC5hc3luY0l0ZXJhdG9yXT1mdW5jdGlvbigpe3JldHVybiBkLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0scyYmc2V0VGltZW91dCgoKT0+XyhsKSxmKSxsfWZ1bmN0aW9uIEIoZT0wKXtyZXR1cm4gVSh7dGltZXI6ZX0pfWZ1bmN0aW9uIEcoZSx0KXtyZXR1cm4gVSh7dHJhbnNkdWNlcjplLGhhbmRsZXI6dH0pfWZ1bmN0aW9uICQoZSl7cmV0dXJuIGUuY2xvc2VkfWZ1bmN0aW9uIEgoZSl7cmV0dXJuIGUuaXNCdWZmZXJlZH1mdW5jdGlvbiBYKGUpe3JldHVybiBlLmlzVGltZWR9ZnVuY3Rpb24gWShlLHQsbj0oKCk9Pnt9KSl7Y29uc3Qgcj1JKGUsdCxRKG4pKTtyJiZuJiZuKHIudmFsdWUpfWZ1bmN0aW9uIEooZSx0PSgoKT0+e30pKXtjb25zdCBuPU0oZSxRKHQpKTtuJiZ0JiZ0KG4udmFsdWUpfWZ1bmN0aW9uIEsoZSx0KXtyZXR1cm4gbmV3IFByb21pc2Uobj0+e1koZSx0LG4pfSl9ZnVuY3Rpb24gVihlKXtyZXR1cm4gbmV3IFByb21pc2UodD0+e0ooZSx0KX0pfWZ1bmN0aW9uIFcoZSl7cmV0dXJuIG5ldyBQcm9taXNlKCh0LG4pPT57SihlLGU9PntPYmplY3QucHJvdG90eXBlLmlzUHJvdG90eXBlT2YuY2FsbChFcnJvci5wcm90b3R5cGUsZSk/bihlKTp0KGUpfSl9KX1mdW5jdGlvbiBaKGUpe18oZSl9ZnVuY3Rpb24gZWUoZT0wKXtyZXR1cm4gbmV3IFByb21pc2UodD0+e0ooQihlKSx0KX0pfWZ1bmN0aW9uIHRlKGUsLi4udCl7cmV0dXJuIGUoLi4udCl9ZnVuY3Rpb24gbmUoLi4uZSl7cmV0dXJuIFByb21pc2UuYWxsKGUpfW4uZCh0LFwiZml4ZWRcIiwoZnVuY3Rpb24oKXtyZXR1cm4gYX0pKSxuLmQodCxcImRyb3BwaW5nXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIGZ9KSksbi5kKHQsXCJzbGlkaW5nXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIHN9KSksbi5kKHQsXCJDTE9TRURcIiwoZnVuY3Rpb24oKXtyZXR1cm4gd30pKSxuLmQodCxcImNoYW5cIiwoZnVuY3Rpb24oKXtyZXR1cm4gVX0pKSxuLmQodCxcInRpbWVkQ2hhblwiLChmdW5jdGlvbigpe3JldHVybiBCfSkpLG4uZCh0LFwidHJhbnNDaGFuXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIEd9KSksbi5kKHQsXCJzZW5kXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIEt9KSksbi5kKHQsXCJyZWN2XCIsKGZ1bmN0aW9uKCl7cmV0dXJuIFZ9KSksbi5kKHQsXCJzZW5kQXN5bmNcIiwoZnVuY3Rpb24oKXtyZXR1cm4gWX0pKSxuLmQodCxcInJlY3ZBc3luY1wiLChmdW5jdGlvbigpe3JldHVybiBKfSkpLG4uZCh0LFwicmVjdk9yVGhyb3dcIiwoZnVuY3Rpb24oKXtyZXR1cm4gV30pKSxuLmQodCxcImNsb3NlXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIFp9KSksbi5kKHQsXCJpc0Nsb3NlZFwiLChmdW5jdGlvbigpe3JldHVybiAkfSkpLG4uZCh0LFwiaXNCdWZmZXJlZFwiLChmdW5jdGlvbigpe3JldHVybiBIfSkpLG4uZCh0LFwiaXNUaW1lZFwiLChmdW5jdGlvbigpe3JldHVybiBYfSkpLG4uZCh0LFwic2VsZWN0XCIsKGZ1bmN0aW9uKCl7cmV0dXJuIEN9KSksbi5kKHQsXCJzZWxlY3RBc3luY1wiLChmdW5jdGlvbigpe3JldHVybiBBfSkpLG4uZCh0LFwidmFsdWVcIiwoZnVuY3Rpb24oKXtyZXR1cm4gRH0pKSxuLmQodCxcImNoYW5uZWxcIiwoZnVuY3Rpb24oKXtyZXR1cm4gTH0pKSxuLmQodCxcImNvbmZpZ1wiLChmdW5jdGlvbigpe3JldHVybiBnLmR9KSksbi5kKHQsXCJTRVRfSU1NRURJQVRFXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIGcuYn0pKSxuLmQodCxcIk1FU1NBR0VfQ0hBTk5FTFwiLChmdW5jdGlvbigpe3JldHVybiBnLmF9KSksbi5kKHQsXCJTRVRfVElNRU9VVFwiLChmdW5jdGlvbigpe3JldHVybiBnLmN9KSksbi5kKHQsXCJnb1wiLChmdW5jdGlvbigpe3JldHVybiB0ZX0pKSxuLmQodCxcInNsZWVwXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIGVlfSkpLG4uZCh0LFwiam9pblwiLChmdW5jdGlvbigpe3JldHVybiBuZX0pKSxuLmQodCxcIkVNUFRZXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIHIuYX0pKX1dKX0pKTsiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuZXhwb3J0IHtcbiAgbWFwLFxuICBtZXJnZSxcbiAgcGFydGl0aW9uLFxuICBwaXBlLFxuICBzcGxpdCxcbiAgdGFwLFxuICB1bnRhcCxcbiAgdW50YXBBbGxcbn0gZnJvbSBcIm1vZHVsZXMvZmxvd1wiO1xuZXhwb3J0IHsgcmVkdWNlLCB0b0NoYW5uZWwsIHRvQXJyYXkgfSBmcm9tIFwibW9kdWxlcy9jb252ZXJzaW9uXCI7XG5leHBvcnQgeyBkZWJvdW5jZSwgdGhyb3R0bGUgfSBmcm9tIFwibW9kdWxlcy90aW1pbmdcIjtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNOdW1iZXIoeCkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHgpID09PSBcIltvYmplY3QgTnVtYmVyXVwiICYmIGlzRmluaXRlKHgpO1xufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG5cbi8qKlxuICogQSBzZXQgb2YgY2hhbm5lbCB1dGlsaXRpZXMgZm9yIGNvbnZlcnRpbmcgY2hhbm5lbHMgaW50byBvdGhlciBraW5kcyBvZiBkYXRhLFxuICogYW5kIHZpY2UgdmVyc2EuXG4gKlxuICogQG1vZHVsZSBjaGFua28vb3BlcmF0aW9ucy9jb252ZXJzaW9uXG4gKiBAcHJpdmF0ZVxuICovXG5cbmltcG9ydCB7IGdvLCBjaGFuLCBzZW5kLCBzZW5kQXN5bmMsIGNsb3NlIH0gZnJvbSBcIkBjaGFua28vY2hhbm5lbHNcIjtcblxuLyoqXG4gKiBDcmVhdGVzIGEgc2luZ2xlIHZhbHVlIGZyb20gYSBjaGFubmVsIGJ5IHJ1bm5pbmcgaXRzIHZhbHVlcyB0aHJvdWdoIGFcbiAqIHJlZHVjaW5nIGZ1bmN0aW9uLlxuICpcbiAqIEZvciBldmVyeSB2YWx1ZSBwdXQgb250byB0aGUgaW5wdXQgY2hhbm5lbCwgdGhlIHJlZHVjaW5nIGZ1bmN0aW9uIGlzIGNhbGxlZFxuICogd2l0aCB0d28gcGFyYW1ldGVyczogdGhlIGFjY3VtdWxhdG9yIHRoYXQgaG9sZHMgdGhlIHJlc3VsdCBvZiB0aGUgcmVkdWN0aW9uXG4gKiBzbyBmYXIsIGFuZCB0aGUgbmV3IGlucHV0IHZhbHVlLiBUaGUgaW5pdGlhbCB2YWx1ZSBvZiB0aGUgYWNjdW11bGF0b3IgaXMgdGhlXG4gKiB0aGlyZCBwYXJhbWV0ZXIgdG8gYHJlZHVjZWAuIFRoZSByZWR1Y3Rpb24gaXMgbm90IGNvbXBsZXRlIHVudGlsIHRoZSBpbnB1dFxuICogY2hhbm5lbCBjbG9zZXMuXG4gKlxuICogVGhpcyBmdW5jdGlvbiByZXR1cm5zIGEgY2hhbm5lbC4gV2hlbiB0aGUgZmluYWwgcmVkdWNlZCB2YWx1ZSBpcyBwcm9kdWNlZCwgaXRcbiAqIGlzIHB1dCBvbnRvIHRoaXMgY2hhbm5lbCwgYW5kIHdoZW4gdGhhdCB2YWx1ZSBpcyB0YWtlbiBmcm9tIGl0LCB0aGUgY2hhbm5lbFxuICogaXMgY2xvc2VkLlxuICpcbiAqIGBgYFxuICogaW1wb3J0IHsgZ28sIGNoYW4sIHNlbmQsIHJlY3YsIGNsb3NlIH0gZnJvbSBcIkBjaGFua28vY2hhbm5lbHNcIjtcbiAqIGltcG9ydCB7IHJlZHVjZSB9IGZyb20gXCJAY2hhbmtvL29wZXJhdGlvbnNcIjtcbiAqXG4gKiBjb25zdCBpbnB1dCA9IGNoYW4oKTtcbiAqIGNvbnN0IG91dHB1dCA9IHJlZHVjZSgoYWNjLCB2YWx1ZSkgPT4gYWNjICsgdmFsdWUsIGlucHV0LCAwKTtcbiAqXG4gKiBnbyhhc3luYyAoKSA9PiB7XG4gKiAgIGF3YWl0IHNlbmQoaW5wdXQsIDEpO1xuICogICBhd2FpdCBzZW5kKGlucHV0LCAyKTtcbiAqICAgYXdhaXQgc2VuZChpbnB1dCwgMyk7XG4gKiAgIGNsb3NlKGlucHV0KTtcbiAqIH0pO1xuICpcbiAqIGdvKGFzeW5jICgpID0+IHtcbiAqICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVjdihvdXRwdXQpO1xuICogICBjb25zb2xlLmxvZyhvdXRwdXQpOyAgICAgICAgICAgICAgICAgIC8vIC0+IDZcbiAqIH0pO1xuICpcbiAqIGBgYFxuICpcbiAqIE5vdGUgdGhhdCB0aGUgaW5wdXQgY2hhbm5lbCAqbXVzdCogYmUgY2xvc2VkIGF0IHNvbWUgcG9pbnQsIG9yIG5vIHZhbHVlIHdpbGxcbiAqIGV2ZXIgYXBwZWFyIG9uIHRoZSBvdXRwdXQgY2hhbm5lbC4gVGhlIGNsb3Npbmcgb2YgdGhlIGNoYW5uZWwgaXMgd2hhdFxuICogc2lnbmlmaWVzIHRoYXQgdGhlIHJlZHVjdGlvbiBzaG91bGQgYmUgY29tcGxldGVkLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y2hhbmtvL29wZXJhdGlvbnN+T3BlcmF0aW9uc1xuICogQHBhcmFtIHttb2R1bGU6Y2hhbmtvL29wZXJhdGlvbnN+cmVkdWNlcn0gZm4gVGhlIHJlZHVjZXIgZnVuY3Rpb24gcmVzcG9uc2libGVcbiAqICAgICBmb3IgdHVybmluZyB0aGUgc2VyaWVzIG9mIGNoYW5uZWwgdmFsdWVzIGludG8gYSBzaW5nbGUgb3V0cHV0IHZhbHVlLlxuICogQHBhcmFtIHttb2R1bGU6Y2hhbmtvL2NoYW5uZWx+Q2hhbm5lbH0gY2ggVGhlIGNoYW5uZWwgd2hvc2UgdmFsdWVzIGFyZSBiZWluZ1xuICogcmVkdWNlZCBpbnRvIGEgc2luZ2xlIG91dHB1dCB2YWx1ZS5cbiAqIEBwYXJhbSB7Kn0gaW5pdCBUaGUgaW5pdGlhbCB2YWx1ZSB0byBmZWVkIGludG8gdGhlIHJlZHVjZXIgZnVuY3Rpb24gZm9yIHRoZVxuICogZmlyc3QgcmVkdWN0aW9uIHN0ZXAuXG4gKiBAcmV0dXJuIHttb2R1bGU6Y2hhbmtvL2NoYW5uZWx+Q2hhbm5lbH0gQSBjaGFubmVsIHRoYXQgd2lsbCwgd2hlbiB0aGUgaW5wdXRcbiAqICAgICBjaGFubmVsIGNsb3NlcywgaGF2ZSB0aGUgcmVkdWNlZCB2YWx1ZSBwdXQgaW50byBpdC4gV2hlbiB0aGlzIHZhbHVlIGlzXG4gKiAgICAgdGFrZW4sIHRoZSBjaGFubmVsIHdpbGwgYXV0b21hdGljYWxseSBjbG9zZS5cbiAqL1xuZnVuY3Rpb24gcmVkdWNlKGZuLCBjaGFubmVsLCBpbml0KSB7XG4gIGNvbnN0IG91dHB1dCA9IGNoYW4oKTtcblxuICBnbyhhc3luYyAoKSA9PiB7XG4gICAgbGV0IGFjYyA9IGluaXQ7XG4gICAgZm9yIGF3YWl0IChjb25zdCB2YWx1ZSBvZiBjaGFubmVsKSB7XG4gICAgICBhY2MgPSBmbihhY2MsIHZhbHVlKTtcbiAgICB9XG4gICAgc2VuZEFzeW5jKG91dHB1dCwgYWNjLCAoKSA9PiBjbG9zZShvdXRwdXQpKTtcbiAgfSk7XG5cbiAgcmV0dXJuIG91dHB1dDtcbn1cblxuLyoqXG4gKiBTZW5kcyBhbGwgdmFsdWVzIGZyb20gYW4gaXRlcmFibGUgdG8gdGhlIHN1cHBsaWVkIGNoYW5uZWwuXG4gKlxuICogSWYgbm8gY2hhbm5lbCBpcyBwYXNzZWQgdG8gdGhpcyBmdW5jdGlvbiwgYSBuZXcgY2hhbm5lbCBpcyBjcmVhdGVkLiBJblxuICogZWZmZWN0LCB0aGlzIGRpcmVjdGx5IGNvbnZlcnRzIGFuIGl0ZXJhYmxlIGludG8gYSBjaGFubmVsIHdpdGggdGhlIHNhbWVcbiAqIHZhbHVlcyBvbiBpdC5cbiAqXG4gKiBUaGUgY2hhbm5lbCBpcyBjbG9zZWQgYWZ0ZXIgdGhlIGZpbmFsIGl0ZXJhYmxlIHZhbHVlIGlzIHNlbnQgdG8gaXQuXG4gKlxuICogVGhpcyBmdW5jdGlvbiB3aWxsIGNvbnZlcnQgYW55IEphdmFTY3JpcHQgb2JqZWN0IHRoYXQgaW1wbGVtZW50cyB0aGUgaXRlcmFibGVcbiAqIHByb3RvY29sLiBJbiBvdGhlciB3b3JkcywgaWYgaXQgd29ya3MgaW4gYSBgZm9yLi4ub2ZgIHN0YXRlbWVudCwgaXQgd2lsbCB3b3JrXG4gKiBoZXJlLlxuICpcbiAqIGBgYFxuICogaW1wb3J0IHsgZ28sIGNoYW4sIHJlY3YsIGlzQ2xvc2VkIH0gZnJvbSBcIkBjaGFua28vY2hhbm5lbHNcIjtcbiAqIGltcG9ydCB7IG9udG8gfSBmcm9tIFwiQGNoYW5rby9vcGVyYXRpb25zXCI7XG4gKlxuICogY29uc3QgaW5wdXQgPSBbMSwgMiwgM107XG4gKiBjb25zdCBvdXRwdXQgPSBvbnRvKGlucHV0KTtcbiAqXG4gKiBnbyhhc3luYyAoKSA9PiB7XG4gKiAgIGNvbnNvbGUubG9nKGF3YWl0IHJlY3Yob3V0cHV0KSk7ICAgICAvLyAtPiAxXG4gKiAgIGNvbnNvbGUubG9nKGF3YWl0IHJlY3Yob3V0cHV0KSk7ICAgICAvLyAtPiAyXG4gKiAgIGNvbnNvbGUubG9nKGF3YWl0IHJlY3Yob3V0cHV0KSk7ICAgICAvLyAtPiAzXG4gKiAgIGNvbnNvbGUubG9nKGlzQ2xvc2VkKG91dHB1dCkpOyAgICAgICAvLyAtPiB0cnVlXG4gKiB9KTtcbiAqIGBgYFxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y2hhbmtvL29wZXJhdGlvbnN+T3BlcmF0aW9uc1xuICogQHBhcmFtIHtpdGVyYWJsZX0gaXRlcmFibGUgVGhlIGl0ZXJhYmxlIGNvbnRhaW5pbmcgdGhlIHZhbHVlcyB0byBiZSBzZW50IHRvXG4gKiAgICAgdGhlIGNoYW5uZWwuXG4gKiBAcGFyYW0ge21vZHVsZTpjaGFua28vY2hhbm5lbH5DaGFubmVsfSBbY2hhbm5lbF0gVGhlIGNoYW5uZWwgb250byB3aGljaCB0b1xuICogICAgIHB1dCBhbGwgb2YgdGhlIGFycmF5IGVsZW1lbnRzLiBJZiB0aGlzIGlzIG5vdCBwcmVzZW50LCBhIG5ldyBjaGFubmVsIHdpbGxcbiAqICAgICBiZSBjcmVhdGVkLlxuICogQHJldHVybiB7bW9kdWxlOmNoYW5rby9jaGFubmVsfkNoYW5uZWx9IHRoZSBjaGFubmVsIG9udG8gd2hpY2ggdGhlIGFycmF5XG4gKiAgICAgZWxlbWVudHMgYXJlIHB1dC4gVGhpcyBpcyB0aGUgc2FtZSBhcyB0aGUgaW5wdXQgY2hhbm5lbCwgYnV0IGlmIG5vIGlucHV0XG4gKiAgICAgY2hhbm5lbCBpcyBzcGVjaWZpZWQsIHRoaXMgd2lsbCBiZSBhIG5ldyBjaGFubmVsLiBJdCB3aWxsIGNsb3NlIHdoZW4gdGhlXG4gKiAgICAgZmluYWwgdmFsdWUgaXMgdGFrZW4gZnJvbSBpdC5cbiAqL1xuZnVuY3Rpb24gdG9DaGFubmVsKGl0ZXJhYmxlLCBjaGFubmVsID0gY2hhbihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gIGdvKGFzeW5jICgpID0+IHtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgaXRlcmFibGUpIHtcbiAgICAgIGF3YWl0IHNlbmQoY2hhbm5lbCwgaXRlbSk7XG4gICAgfVxuICAgIGNsb3NlKGNoYW5uZWwpO1xuICB9KTtcblxuICByZXR1cm4gY2hhbm5lbDtcbn1cblxuLyoqXG4gKiBSZWNlaXZlcyBhbGwgb2YgdGhlIHZhbHVlcyBmcm9tIGEgY2hhbm5lbCBhbmQgcHVzaGVzIHRoZW0gaW50byBhbiBhcnJheS5cbiAqXG4gKiBJZiBubyBhcnJheSBpcyBwYXNzZWQgdG8gdGhpcyBmdW5jdGlvbiwgYSBuZXcgKGVtcHR5KSBvbmUgaXMgY3JlYXRlZC4gSW5cbiAqIGVmZmVjdCwgdGhpcyBkaXJlY3RseSBjb252ZXJ0cyBhIGNoYW5uZWwgaW50byBhbiBhcnJheSB3aXRoIHRoZSBzYW1lIHZhbHVlcy5cbiAqIEVpdGhlciB3YXksIHRoaXMgb3BlcmF0aW9uIGNhbm5vdCBjb21wbGV0ZSB1bnRpbCB0aGUgaW5wdXQgY2hhbm5lbCBpcyBjbG9zZWQuXG4gKlxuICogVGhpcyBmdW5jdGlvbiByZXR1cm5zIGEgY2hhbm5lbC4gV2hlbiB0aGUgZmluYWwgYXJyYXkgaXMgcHJvZHVjZWQsIGl0IGlzIHNlbnRcbiAqIHRvIHRoaXMgY2hhbm5lbCwgYW5kIHdoZW4gdGhhdCB2YWx1ZSBpcyByZWNlaXZlZCBmcm9tIGl0LCB0aGUgY2hhbm5lbCBpc1xuICogY2xvc2VkLlxuICpcbiAqIGBgYFxuICogaW1wb3J0IHsgZ28sIGNoYW4sIHNlbmQsIHJlY3YsIGNsb3NlIH0gZnJvbSBcIkBjaGFua28vY2hhbm5lbHNcIjtcbiAqIGltcG9ydCB7IGludG8gfSBmcm9tIFwiQGNoYW5rby9vcGVyYXRpb25zXCI7XG4gKlxuICogY29uc3QgaW5wdXQgPSBjaGFuKCk7XG4gKiBjb25zdCBvdXRwdXQgPSBpbnRvKGlucHV0KTtcbiAqXG4gKiBnbyhhc3luYyAoKSA9PiB7XG4gKiAgIGF3YWl0IHNlbmQoaW5wdXQsIDEpO1xuICogICBhd2FpdCBzZW5kKGlucHV0LCAyKTtcbiAqICAgYXdhaXQgc2VuZChpbnB1dCwgMyk7XG4gKiAgIGNsb3NlKGlucHV0KTtcbiAqIH0pO1xuICpcbiAqIGdvKGFzeW5jICgpID0+IHtcbiAqICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVjdihvdXRwdXQpO1xuICogICBjb25zb2xlLmxvZyhyZXN1bHQpOyAgICAgICAgICAgICAgICAgICAgIC8vIC0+IFsxLCAyLCAzXVxuICogfSk7XG4gKiBgYGBcbiAqXG4gKiBOb3RlIHRoYXQgdGhlIGlucHV0IGNoYW5uZWwgKm11c3QqIGJlIGNsb3NlZCBhdCBzb21lIHBvaW50LCBvciBubyB2YWx1ZSB3aWxsXG4gKiBldmVyIGFwcGVhciBvbiB0aGUgb3V0cHV0IGNoYW5uZWwuIFRoZSBjbG9zaW5nIG9mIHRoZSBjaGFubmVsIGlzIHdoYXRcbiAqIHNpZ25pZmllcyB0aGF0IGFsbCBvZiB0aGUgdmFsdWVzIG5lZWRlZCB0byBtYWtlIHRoZSBhcnJheSBhcmUgbm93IGF2YWlsYWJsZS5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNoYW5rby9vcGVyYXRpb25zfkNoYW5rb1xuICogQHBhcmFtIHttb2R1bGU6Y2lzcHkvY2hhbm5lbH5DaGFubmVsfSBjaGFubmVsIFRoZSBjaGFubmVsIGZyb20gd2hpY2ggdmFsdWVzXG4gKiAgICAgYXJlIHJlY2VpdmVkIHRvIHB1dCBpbnRvIHRoZSBhcnJheS5cbiAqIEBwYXJhbSB7YXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIHB1dCB0aGUgY2hhbm5lbCB2YWx1ZXMgaW50by4gSWYgdGhpcyBpc1xuICogICAgIG5vdCBwcmVzZW50LCBhIG5ldywgZW1wdHkgYXJyYXkgd2lsbCBiZSBjcmVhdGVkLlxuICogQHJldHVybiB7bW9kdWxlOmNpc3B5L2NoYW5uZWx+Q2hhbm5lbH0gQSBjaGFubmVsIHRoYXQgd2lsbCwgd2hlbiB0aGUgaW5wdXRcbiAqICAgICBjaGFubmVsIGNsb3NlcywgaGF2ZSB0aGUgYXJyYXkgb2YgY2hhbm5lbCB2YWx1ZXMgcHV0IG9udG8gaXQuIFdoZW4gdGhpc1xuICogICAgIGFycmF5IGlzIHJlY2VpdmVkLCB0aGUgY2hhbm5lbCB3aWxsIGF1dG9tYXRpY2FsbHkgY2xvc2UuXG4gKi9cbmZ1bmN0aW9uIHRvQXJyYXkoY2hhbm5lbCwgYXJyYXkgPSBbXSkge1xuICByZXR1cm4gcmVkdWNlKFxuICAgIChhY2MsIGlucHV0KSA9PiB7XG4gICAgICBhY2MucHVzaChpbnB1dCk7XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sXG4gICAgY2hhbm5lbCxcbiAgICBhcnJheVxuICApO1xufVxuXG5leHBvcnQgeyByZWR1Y2UsIHRvQ2hhbm5lbCwgdG9BcnJheSB9O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG5cbi8qKlxuICogQSBzZXQgb2YgY2hhbm5lbCBvcGVyYXRpb24gZnVuY3Rpb25zIGZvciByb3V0aW5nIGNoYW5uZWxzIHRvIG90aGVyIGNoYW5uZWxzXG4gKiBpbiBkaWZmZXJlbnQgd2F5cy5cbiAqXG4gKiBJbiBlYWNoIG9mIHRoZXNlIGZ1bmN0aW9ucywgdGhlIHNvdXJjZSBjaGFubmVsIHdpbGwgbm90IGJlIGF2YWlsYWJsZSB0byBiZVxuICogdGFrZW4gZnJvbSwgYXMgYWxsIG9mIHRoZSBzb3VyY2UgY2hhbm5lbHMgd2lsbCBoYXZlIHRoZWlyIHZhbHVlcyB0YWtlbiBieSB0aGVcbiAqIHByb2Nlc3NlcyB3aXRoaW4gdGhlc2UgZnVuY3Rpb25zLiBUaGUgbG9uZSBleGNlcHRpb24gaXMgYHRhcGAsIHdoZXJlIHRoZVxuICogcmVndWxhciBmdW5jdGlvbiBvZiB0aGUgc291cmNlIGNoYW5uZWwgd2lsbCBiZSByZXN0b3JlZCBpZiBhbGwgdGFwcyBhcmVcbiAqIHJlbW92ZWQuIEV2ZW4gc28sIHdoaWxlIGF0IGxlYXN0IG9uZSB0YXAgaXMgaW4gcGxhY2UsIHRoZSBzb3VyY2UgY2hhbm5lbFxuICogY2Fubm90IGJlIHRha2VuIGZyb20uXG4gKlxuICogQG1vZHVsZSBjaGFua28vb3BlcmF0aW9ucy9mbG93XG4gKiBAcHJpdmF0ZVxuICovXG5cbmltcG9ydCB7XG4gIGdvLFxuICBjaGFuLFxuICBzZW5kLFxuICByZWN2LFxuICBzZWxlY3QsXG4gIHNlbmRBc3luYyxcbiAgcmVjdkFzeW5jLFxuICBjbG9zZSxcbiAgQ0xPU0VEXG59IGZyb20gXCJAY2hhbmtvL2NoYW5uZWxzXCI7XG5cbmltcG9ydCB7IGlzTnVtYmVyIH0gZnJvbSBcIm1vZHVsZXMvY29tbW9uXCI7XG5cbmNvbnN0IFRBUFMgPSBTeW1ib2woXCJtdWx0aXRhcC90YXBzXCIpO1xuXG4vKipcbiAqIFBpcGVzIHRoZSB2YWx1ZXMgZnJvbSBvbmUgY2hhbm5lbCB0byBhbm90aGVyIGNoYW5uZWwuXG4gKlxuICogVGhpcyB0aWVzIHR3byBjaGFubmVscyB0b2dldGhlciBzbyB0aGF0IHB1dHMgb24gdGhlIHNvdXJjZSBjaGFubmVsIGNhbiBiZVxuICogdGFrZW4gb2ZmIHRoZSBkZXN0aW5hdGlvbiBjaGFubmVsLiBUaGlzIGRvZXMgbm90IGR1cGxpY2F0ZSB2YWx1ZXMgaW4gYW55IHdheTtcbiAqIGlmIGFub3RoZXIgcHJvY2VzcyB0YWtlcyBhIHZhbHVlIG9mZiB0aGUgc291cmNlIGNoYW5uZWwsIGl0IHdpbGwgbmV2ZXIgYXBwZWFyXG4gKiBvbiB0aGUgZGVzdGluYXRpb24gY2hhbm5lbC4gSW4gbW9zdCBjYXNlcyB5b3Ugd2lsbCBub3Qgd2FudCB0byB0YWtlIHZhbHVlc1xuICogb2ZmIGEgY2hhbm5lbCBvbmNlIGl0J3MgcGlwZWQgdG8gYW5vdGhlciBjaGFubmVsLCBzaW5jZSBpdCdzIGRpZmZpY3VsdCB0b1xuICoga25vdyB3aGljaCB2YWx1ZXMgd2lsbCBnbyB0byB3aGljaCBjaGFubmVsLlxuICpcbiAqIENsb3NpbmcgZWl0aGVyIGNoYW5uZWwgd2lsbCBicmVhayB0aGUgY29ubmVjdGlvbiBiZXR3ZWVuIHRoZSB0d28uIElmIHRoZVxuICogc291cmNlIGNoYW5uZWwgaXMgY2xvc2VkLCB0aGUgZGVzdGluYXRpb24gY2hhbm5lbCB3aWxsIGJ5IGRlZmF1bHQgYWxzbyBiZVxuICogY2xvc2VkLiBIb3dldmVyLCBwYXNzaW5nIGB0cnVlYCBhcyB0aGUgdGhpcmQgcGFyYW1ldGVyIHdpbGwgY2F1c2UgdGhlXG4gKiBkZXN0aW5hdGlvbiBjaGFubmVsIHRvIHJlbWFpbiBvcGVuIGV2ZW4gd2hlbiB0aGUgc291cmNlIGNoYW5uZWwgaXMgY2xvc2VkXG4gKiAodGhlIGNvbm5lY3Rpb24gaXMgc3RpbGwgYnJva2VuIGhvd2V2ZXIpLlxuICpcbiAqIEJlY2F1c2Ugb2YgdGhlIGFiaWxpdHkgdG8gbGVhdmUgdGhlIGRlc3RpbmF0aW9uIGNoYW5uZWwgb3BlbiwgYSBwb3NzaWJsZSB1c2VcbiAqIGNhc2UgZm9yIHRoaXMgZnVuY3Rpb24gaXMgdG8gd3JhcCB0aGUgZGVzdGluYXRpb24gY2hhbm5lbChzKSBvZiBvbmUgb2YgdGhlXG4gKiBvdGhlciBmbG93IGNvbnRyb2wgZnVuY3Rpb25zIGJlbG93IHRvIGhhdmUgYSBjaGFubmVsIHRoYXQgc3Vydml2ZXMgdGhlIHNvdXJjZVxuICogY2hhbm5lbCBjbG9zaW5nLiBUaGUgcmVzdCBvZiB0aG9zZSBmdW5jdGlvbnMgKGFzaWRlIGZyb20gdGhlIHNwZWNpYWwtY2FzZVxuICogYHtAbGluayBtb2R1bGU6Y2hhbmtvL29wZXJhdGlvbnN+T3BlcmF0aW9ucy50YXB8dGFwfWApIGF1dG9tYXRpY2FsbHkgY2xvc2VcbiAqIHRoZWlyIGRlc3RpbmF0aW9uIGNoYW5uZWxzIHdoZW4gdGhlIHNvdXJjZSBjaGFubmVscyBjbG9zZS5cbiAqXG4gKiBgYGBcbiAqIGltcG9ydCB7IGdvLCBjaGFuLCBzZW5kLCByZWN2LCBjbG9zZSwgaXNDbG9zZWQgfSBmcm9tIFwiQGNoYW5rby9jaGFubmVsc1wiO1xuICogaW1wb3J0IHsgcGlwZSB9IGZyb20gXCJAY2hhbmtvL29wZXJhdGlvbnNcIjtcbiAqXG4gKiBjb25zdCBpbnB1dCA9IGNoYW4oKTtcbiAqIGNvbnN0IG91dHB1dCA9IHBpcGUoaW5wdXQsIGNoYW4oKSk7XG4gKlxuICogZ28oYXN5bmMgKCkgPT4ge1xuICogICBhd2FpdCBzZW5kKGlucHV0LCAxKTtcbiAqICAgYXdhaXQgc2VuZChpbnB1dCwgMik7XG4gKiAgIGNsb3NlKGlucHV0KTtcbiAqIH0pO1xuICpcbiAqIGdvKGFzeW5jICgpID0+IHtcbiAqICAgY29uc29sZS5sb2coYXdhaXQgcmVjdihvdXRwdXQpKTsgICAgICAvLyAtPiAxXG4gKiAgIGNvbnNvbGUubG9nKGF3YWl0IHJlY3Yob3V0cHV0KSk7ICAgICAgLy8gLT4gMlxuICogICBjb25zb2xlLmxvZyhpc0Nsb3NlZChvdXRwdXQpKTsgICAgICAgIC8vIC0+IHRydWVcbiAqIH0pO1xuICogYGBgXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjaGFua28vb3BlcmF0aW9uc35PcGVyYXRpb25zXG4gKiBAcGFyYW0ge21vZHVsZTpjaGFua28vY2hhbm5lbH5DaGFubmVsfSBzcmMgVGhlIHNvdXJjZSBjaGFubmVsLlxuICogQHBhcmFtIHttb2R1bGU6Y2hhbmtvL2NoYW5uZWx+Q2hhbm5lbH0gZGVzdCBUaGUgZGVzdGluYXRpb24gY2hhbm5lbC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2tlZXBPcGVuPWZhbHNlXSBBIGZsYWcgdG8gaW5kaWNhdGUgdGhhdCB0aGUgZGVzdGluYXRpb25cbiAqICAgICBjaGFubmVsIHNob3VsZCBiZSBrZXB0IG9wZW4gYWZ0ZXIgdGhlIHNvdXJjZSBjaGFubmVsIGNsb3Nlcy4gQnkgZGVmYXVsdFxuICogICAgIHRoZSBkZXN0aW5hdGlvbiBjaGFubmVsIHdpbGwgY2xvc2Ugd2hlbiB0aGUgc291cmNlIGNoYW5uZWwgY2xvc2VzLlxuICogQHJldHVybiB7bW9kdWxlOmNoYW5rby9jaGFubmVsfkNoYW5uZWx9IFRoZSBkZXN0aW5hdGlvbiBjaGFubmVsLlxuICovXG5mdW5jdGlvbiBwaXBlKHNyYywgZHN0LCBrZWVwT3BlbiA9IGZhbHNlKSB7XG4gIGdvKGFzeW5jICgpID0+IHtcbiAgICBmb3IgKDs7KSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGF3YWl0IHJlY3Yoc3JjKTtcbiAgICAgIGlmICh2YWx1ZSA9PT0gQ0xPU0VEKSB7XG4gICAgICAgIGlmICgha2VlcE9wZW4pIHtcbiAgICAgICAgICBjbG9zZShkc3QpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgaWYgKCEoYXdhaXQgc2VuZChkc3QsIHZhbHVlKSkpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZHN0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgdHdvIG5ldyBjaGFubmVscyBhbmQgcm91dGVzIHZhbHVlcyBmcm9tIGEgc291cmNlIGNoYW5uZWwgdG8gdGhlbVxuICogYWNjb3JkaW5nIHRvIGEgcHJlZGljYXRlIGZ1bmN0aW9uLlxuICpcbiAqIFRoZSBzdXBwbGllZCBmdW5jdGlvbiBpcyBpbnZva2VkIHdpdGggZXZlcnkgdmFsdWUgdGhhdCBpcyBwdXQgb250byB0aGUgc291cmNlXG4gKiBjaGFubmVsLiBUaG9zZSB0aGF0IHJldHVybiBgdHJ1ZWAgYXJlIHJvdXRlZCB0byB0aGUgZmlyc3QgZGVzdGluYXRpb25cbiAqIGNoYW5uZWw7IHRob3NlIHRoYXQgcmV0dXJuIGBmYWxzZWAgYXJlIHJvdXRlZCB0byB0aGUgc2Vjb25kLlxuICpcbiAqIFRoZSBuZXcgY2hhbm5lbHMgYXJlIGNyZWF0ZWQgYnkgdGhlIGZ1bmN0aW9uIGJhc2VkIG9uIHRoZSBidWZmZXIgdmFsdWVzXG4gKiBwYXNzZWQgYXMgdGhlIHRoaXJkIGFuZCBmb3VydGggcGFyYW1ldGVycy4gSWYgb25lIG9yIGJvdGggb2YgdGhlc2UgYXJlXG4gKiBtaXNzaW5nLCBgbnVsbGAsIG9yIGAwYCwgdGhlIGNvcnJlc3BvbmRpbmcgZGVzdGluYXRpb24gY2hhbm5lbCBpcyB1bmJ1ZmZlcmVkLlxuICogSWYgb25lIGlzIGEgcG9zaXRpdmUgaW50ZWdlciwgdGhlIGNvcnJlc3BvbmRpbmcgY2hhbm5lbCBpcyBidWZmZXJlZCBieSBhXG4gKiBmaXhlZCBidWZmZXIgb2YgdGhhdCBzaXplLiBJZiB0aGUgcGFyYW1ldGVyIGZvciBhIGNoYW5uZWwgaXMgYSBidWZmZXIsIHRoZW5cbiAqIHRoYXQgYnVmZmVyIGlzIHVzZWQgdG8gYnVmZmVyIHRoZSBuZXcgY2hhbm5lbC5cbiAqXG4gKiBCb3RoIG5ldyBjaGFubmVscyBhcmUgY2xvc2VkIHdoZW4gdGhlIHNvdXJjZSBjaGFubmVsIGlzIGNsb3NlZC5cbiAqXG4gKlxuICogYGBgXG4gKiBpbXBvcnQgeyBnbywgY2hhbiwgc2VuZCwgY2xvc2UgfSBmcm9tIFwiQGNoYW5rby9jaGFubmVsc1wiO1xuICogaW1wb3J0IHsgcGFydGl0aW9uIH0gZnJvbSBcIkBjaGFua28vb3BlcmF0aW9uc1wiO1xuICpcbiAqIGNvbnN0IGlucHV0ID0gY2hhbigpO1xuICogY29uc3QgY3RybCA9IGNoYW4oKTtcbiAqIGNvbnN0IFtldmVuLCBvZGRdID0gcGFydGl0aW9uKHggPT4geCAlIDIgPT09IDAsIGlucHV0LCAzLCAzKTtcbiAqXG4gKiBnbyhhc3luYyAoKSA9PiB7XG4gKiAgIGF3YWl0IHNlbmQoaW5wdXQsIDEpO1xuICogICBhd2FpdCBzZW5kKGlucHV0LCAyKTtcbiAqICAgYXdhaXQgc2VuZChpbnB1dCwgMyk7XG4gKiAgIGF3YWl0IHNlbmQoaW5wdXQsIDQpO1xuICogICBjbG9zZShpbnB1dCk7XG4gKiB9KTtcbiAqXG4gKiBnbyhhc3luYyAoKSA9PiB7XG4gKiAgIGZvciBhd2FpdCAoY29uc3QgdmFsdWUgb2YgZXZlbikge1xuICogICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcbiAqICAgfVxuICogICBhd2FpdCBzZW5kKGN0cmwpO1xuICogfSk7XG4gKlxuICogZ28oYXN5bmMgKCkgPT4ge1xuICogICBhd2FpdCByZWN2KGN0cmwpO1xuICogICBmb3IgYXdhaXQgKGNvbnN0IHZhbHVlIG9mIG9kZCkge1xuICogICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcbiAqICAgfVxuICogfSk7XG4gKlxuICogLy8gVGhlIGBjdHJsYCBjaGFubmVsIGVuc3VyZXMgdGhhdCBhbGwgb2YgdGhlIHZhbHVlcyBvbiB0aGUgZXZlbiBjaGFubmVsIGFyZVxuICogLy8gcmVhZCBiZWZvcmUgYW55IG9mIHRoZSB2YWx1ZXMgb24gdGhlIG9kZCBjaGFubmVsIGFyZSAodGhpcyBpcyBvbmx5XG4gKiAvLyBwb3NzaWJsZSBiZWNhdXNlIHRoZSBvdXRwdXQgY2hhbm5lbHMgaGF2ZSBidWZmZXJzIGJpZyBlbm91Z2ggdG8gbWFrZSBzdXJlXG4gKiAvLyB0aGF0IG5vIHNlbmQgaXMgYmxvY2tlZCkuXG4gKiAvL1xuICogLy8gLT4gMlxuICogLy8gLT4gNFxuICogLy8gLT4gMVxuICogLy8gLT4gM1xuICogYGBgXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjaGFua28vb3BlcmF0aW9uc35PcGVyYXRpb25zXG4gKiBAcGFyYW0ge21vZHVsZTpjaGFua29+cHJlZGljYXRlfSBmbiBBIHByZWRpY2F0ZSBmdW5jdGlvbiB1c2VkIHRvIHRlc3QgZWFjaFxuICogdmFsdWUgb24gdGhlIGlucHV0IGNoYW5uZWwuXG4gKiBAcGFyYW0ge21vZHVsZTpjaGFua28vY2hhbm5lbH5DaGFubmVsfSBzcmMgVGhlIHNvdXJjZSBjaGFubmVsLlxuICogQHBhcmFtIHsobnVtYmVyfG1vZHVsZTpjaGFua28vYnVmZmVyfkJ1ZmZlcil9IFt0QnVmZmVyPTBdIEEgYnVmZmVyIHVzZWQgdG9cbiAqICAgICBjcmVhdGUgdGhlIGRlc3RpbmF0aW9uIGNoYW5uZWwgd2hpY2ggcmVjZWl2ZXMgYWxsIHZhbHVlcyB0aGF0IHBhc3NlZCB0aGVcbiAqICAgICBwcmVkaWNhdGUuIElmIHRoaXMgaXMgYSBudW1iZXIsIGFcbiAqICAgICB7QGxpbmsgbW9kdWxlOmNoYW5rby9idWZmZXJ+Rml4ZWRCdWZmZXJ9IG9mIHRoYXQgc2l6ZSB3aWxsIGJlIHVzZWQuIElmXG4gKiAgICAgdGhpcyBpcyBgMGAgb3Igbm90IHByZXNlbnQsIHRoZSBjaGFubmVsIHdpbGwgYmUgdW5idWZmZXJlZC5cbiAqIEBwYXJhbSB7KG51bWJlcnxtb2R1bGU6Y2hhbmtvL2J1ZmZlcn5CdWZmZXIpfSBbZkJ1ZmZlcj0wXSBBIGJ1ZmZlciB1c2VkIHRvXG4gKiAgICAgY3JlYXRlIHRoZSBkZXN0aW5hdGlvbiBjaGFubmVsIHdoaWNoIHJlY2VpdmVzIGFsbCB2YWx1ZXMgdGhhdCBkaWQgbm90XG4gKiAgICAgcGFzcyB0aGUgcHJlZGljYXRlLiBJZiB0aGlzIGlzIGEgbnVtYmVyLCBhXG4gKiAgICAge0BsaW5rIG1vZHVsZTpjaGFua28vYnVmZmVyfkZpeGVkQnVmZmVyfSBvZiB0aGF0IHNpemUgd2lsbCBiZSB1c2VkLiBJZlxuICogICAgIHRoaXMgaXMgYDBgIG9yIG5vdCBwcmVzZW50LCB0aGUgY2hhbm5lbCB3aWxsIGJlIHVuYnVmZmVyZWQuXG4gKiBAcmV0dXJuIHttb2R1bGU6Y2hhbmtvL2NoYW5uZWx+Q2hhbm5lbFtdfSBBbiBhcnJheSBvZiB0d28gY2hhbm5lbHMuIFRoZSBmaXJzdFxuICogICAgIGlzIHRoZSBkZXN0aW5hdGlvbiBjaGFubmVsIHdpdGggYWxsIG9mIHRoZSB2YWx1ZXMgdGhhdCBwYXNzZWQgdGhlXG4gKiAgICAgcHJlZGljYXRlLCB0aGUgc2Vjb25kIGlzIHRoZSBkZXN0aW5hdGlvbiBjaGFubmVsIHdpdGggYWxsIG9mIHRoZSB2YWx1ZXNcbiAqICAgICB0aGF0IGRpZCBub3QgcGFzcyB0aGUgcHJlZGljYXRlLlxuICovXG5mdW5jdGlvbiBwYXJ0aXRpb24oZm4sIHNyYywgdEJ1ZmZlciA9IDAsIGZCdWZmZXIgPSAwKSB7XG4gIGNvbnN0IHREc3QgPSBjaGFuKHRCdWZmZXIpO1xuICBjb25zdCBmRHN0ID0gY2hhbihmQnVmZmVyKTtcblxuICBnbyhhc3luYyAoKSA9PiB7XG4gICAgZm9yICg7Oykge1xuICAgICAgY29uc3QgdmFsdWUgPSBhd2FpdCByZWN2KHNyYyk7XG4gICAgICBpZiAodmFsdWUgPT09IENMT1NFRCkge1xuICAgICAgICBjbG9zZSh0RHN0KTtcbiAgICAgICAgY2xvc2UoZkRzdCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgYXdhaXQgc2VuZChmbih2YWx1ZSkgPyB0RHN0IDogZkRzdCwgdmFsdWUpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIFt0RHN0LCBmRHN0XTtcbn1cblxuLyoqXG4gKiBNZXJnZXMgb25lIG9yIG1vcmUgY2hhbm5lbHMgaW50byBhIHNpbmdsZSBkZXN0aW5hdGlvbiBjaGFubmVsLlxuICpcbiAqIFZhbHVlcyBhcmUgZ2l2ZW4gdG8gdGhlIGRlc3RpbmF0aW9uIGNoYW5uZWwgYXMgdGhleSBhcmUgc2VudCB0byB0aGUgc291cmNlXG4gKiBjaGFubmVscy4gSWYgYG1lcmdlYCBpcyBjYWxsZWQgd2hlbiB0aGVyZSBhcmUgYWxyZWFkeSB2YWx1ZXMgb24gbXVsdGlwbGVcbiAqIHNvdXJjZSBjaGFubmVscywgdGhlIG9yZGVyIHRoYXQgdGhleSdyZSBwdXQgb250byB0aGUgZGVzdGluYXRpb24gY2hhbm5lbCBpc1xuICogcmFuZG9tLlxuICpcbiAqIFRoZSBkZXN0aW5hdGlvbiBjaGFubmVsIGlzIGNyZWF0ZWQgYnkgdGhlIGZ1bmN0aW9uIGJhc2VkIG9uIHRoZSBidWZmZXIgdmFsdWVcbiAqIHBhc3NlZCBhcyB0aGUgc2Vjb25kIHBhcmFtZXRlci4gSWYgdGhpcyBpcyBtaXNzaW5nLCBgbnVsbGAsIG9yIGAwYCwgdGhlXG4gKiBkZXN0aW5hdGlvbiBjaGFubmVsIHdpbGwgYmUgdW5idWZmZXJlZC4gSWYgaXQncyBhIHBvc2l0aXZlIGludGVnZXIsIHRoZVxuICogZGVzdGluYXRpb24gY2hhbm5lbCBpcyBidWZmZXJlZCBieSBhIGZpeGVkIGJ1ZmZlciBvZiB0aGF0IHNpemUuIElmIHRoZVxuICogcGFyYW1ldGVyIGlzIGEgYnVmZmVyLCB0aGVuIHRoYXQgYnVmZmVyIGlzIHVzZWQgdG8gYnVmZmVyIHRoZSBkZXN0aW5hdGlvblxuICogY2hhbm5lbC5cbiAqXG4gKiBBcyBlYWNoIHNvdXJjZSBjaGFubmVsIGNsb3NlcywgaXQgaXMgcmVtb3ZlZCBmcm9tIHRoZSBtZXJnZSwgbGVhdmluZyB0aGVcbiAqIGNoYW5uZWxzIHRoYXQgYXJlIHN0aWxsIG9wZW4gdG8gY29udGludWUgbWVyZ2luZy4gV2hlbiAqYWxsKiBvZiB0aGUgc291cmNlXG4gKiBjaGFubmVscyBjbG9zZSwgdGhlbiB0aGUgZGVzdGluYXRpb24gY2hhbm5lbCBpcyBjbG9zZWQuXG4gKlxuICogYGBgXG4gKiBpbXBvcnQgeyBnbywgY2hhbiwgc2VuZCwgcmVjdiB9IGZyb20gXCJAY2hhbmtvL2NoYW5uZWxzXCI7XG4gKiBpbXBvcnQgeyBtZXJnZSB9IGZyb20gXCJAY2hhbmtvL29wZXJhdGlvbnNcIjtcbiAqXG4gKiBjb25zdCBpbnB1dDEgPSBjaGFuKCk7XG4gKiBjb25zdCBpbnB1dDIgPSBjaGFuKCk7XG4gKiBjb25zdCBpbnB1dDMgPSBjaGFuKCk7XG4gKiBjb25zdCBvdXRwdXQgPSBtZXJnZShbaW5wdXQxLCBpbnB1dDIsIGlucHV0M10pO1xuICpcbiAqIGdvKGFzeW5jICgpID0+IHtcbiAqICAgLy8gQmVjYXVzZSB3ZSdyZSBzZW5kaW5nIHRvIGFsbCB0aHJlZSBjaGFubmVscyBpbiB0aGUgc2FtZVxuICogICAvLyBwcm9jZXNzLCB3ZSBrbm93IHRoZSBvcmRlciBpbiB3aGljaCB0aGUgdmFsdWVzIHdpbGwgYmVcbiAqICAgLy8gc2VudCB0byB0aGUgb3V0cHV0IGNoYW5uZWw7IGluIGdlbmVyYWwsIHdlIHdvbid0IGtub3cgdGhpc1xuICogICBhd2FpdCBzZW5kKGlucHV0MSwgMSk7XG4gKiAgIGF3YWl0IHNlbmQoaW5wdXQyLCAyKTtcbiAqICAgYXdhaXQgc2VuZChpbnB1dDMsIDMpO1xuICogfSk7XG4gKlxuICogZ28oYXN5bmMgKCkgPT4ge1xuICogICBjb25zb2xlLmxvZyhhd2FpdCByZWN2KG91dHB1dCkpOyAgICAgIC8vIC0+IDFcbiAqICAgY29uc29sZS5sb2coYXdhaXQgcmVjdihvdXRwdXQpKTsgICAgICAvLyAtPiAyXG4gKiAgIGNvbnNvbGUubG9nKGF3YWl0IHJlY3Yob3V0cHV0KSk7ICAgICAgLy8gLT4gM1xuICogfSk7XG4gKiBgYGBcbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNoYW5rby9vcGVyYXRpb25zfk9wZXJhdGlvbnNcbiAqIEBwYXJhbSB7bW9kdWxlOmNoYW5rby9jaGFubmVsfkNoYW5uZWxbXX0gc3JjcyBBbiBhcnJheSBvZiBzb3VyY2UgY2hhbm5lbHMuXG4gKiBAcGFyYW0geyhudW1iZXJ8bW9kdWxlOmNoYW5rby9idWZmZXJ+QnVmZmVyKX0gW2J1ZmZlcj0wXSBBIGJ1ZmZlciB1c2VkIHRvXG4gKiAgICAgY3JlYXRlIHRoZSBkZXN0aW5hdGlvbiBjaGFubmVsLiBJZiB0aGlzIGlzIGEgbnVtYmVyLCBhXG4gKiAgICAge0BsaW5rIG1vZHVsZTpjaGFua28vYnVmZmVyfkZpeGVkQnVmZmVyfSBvZiB0aGF0IHNpemUgd2lsbCBiZSB1c2VkLiBJZlxuICogICAgIHRoaXMgaXMgYDBgIG9yIG5vdCBwcmVzZW50LCB0aGUgY2hhbm5lbCB3aWxsIGJlIHVuYnVmZmVyZWQuXG4gKiBAcmV0dXJuIHttb2R1bGU6Y2hhbmtvL2NoYW5uZWx+Q2hhbm5lbH0gVGhlIGRlc3RpbmF0aW9uIGNoYW5uZWwsIHdoaWNoIHdpbGxcbiAqICAgICByZWNlaXZlIGFsbCB2YWx1ZXMgcHV0IG9udG8gZXZlcnkgc291cmNlIGNoYW5uZWwuXG4gKi9cbmZ1bmN0aW9uIG1lcmdlKHNyY3MsIGJ1ZmZlciA9IDApIHtcbiAgY29uc3QgZHN0ID0gY2hhbihidWZmZXIpO1xuICBjb25zdCBpbnB1dHMgPSBzcmNzLnNsaWNlKCk7XG5cbiAgZ28oYXN5bmMgKCkgPT4ge1xuICAgIGZvciAoOzspIHtcbiAgICAgIGlmIChpbnB1dHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY29uc3QgeyB2YWx1ZSwgY2hhbm5lbCB9ID0gYXdhaXQgc2VsZWN0KGlucHV0cyk7XG4gICAgICBpZiAodmFsdWUgPT09IENMT1NFRCkge1xuICAgICAgICBpbnB1dHMuc3BsaWNlKGlucHV0cy5pbmRleE9mKGNoYW5uZWwpLCAxKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBhd2FpdCBzZW5kKGRzdCwgdmFsdWUpO1xuICAgIH1cbiAgICBjbG9zZShkc3QpO1xuICB9KTtcblxuICByZXR1cm4gZHN0O1xufVxuXG4vKipcbiAqIFNwbGl0cyBhIHNpbmdsZSBjaGFubmVsIGludG8gbXVsdGlwbGUgZGVzdGluYXRpb24gY2hhbm5lbHMsIHdpdGggZWFjaFxuICogZGVzdGluYXRpb24gY2hhbm5lbCByZWNlaXZpbmcgZXZlcnkgdmFsdWUgc2VudCB0byB0aGUgc291cmNlIGNoYW5uZWwuXG4gKlxuICogRXZlcnkgcGFyYW1ldGVyIGFmdGVyIHRoZSBmaXJzdCByZXByZXNlbnRzIHRoZSBidWZmZXIgZnJvbSBhIHNpbmdsZVxuICogZGVzdGluYXRpb24gY2hhbm5lbC4gRWFjaCBgMGAgb3IgYG51bGxgIHdpbGwgcHJvZHVjZSBhbiB1bmJ1ZmZlcmVkIGNoYW5uZWwsXG4gKiB3aGlsZSBlYWNoIHBvc2l0aXZlIGludGVnZXIgd2lsbCBwcm9kdWNlIGEgY2hhbm5lbCBidWZmZXJlZCBieSBhIGZpeGVkIGJ1ZmZlclxuICogb2YgdGhhdCBzaXplLiBFYWNoIGJ1ZmZlciB3aWxsIHByb2R1Y2UgYSBidWZmZXJlZCBjaGFubmVsIGJhY2tlZCBieSB0aGF0XG4gKiBidWZmZXIuIElmIHRoZXJlIGFyZSBubyBwYXJhbWV0ZXJzIGFmdGVyIHRoZSBmaXJzdCwgdGhlbiB0d28gdW5idWZmZXJlZFxuICogY2hhbm5lbHMgd2lsbCBiZSBwcm9kdWNlZCBhcyBhIGRlZmF1bHQuXG4gKlxuICogV2hlbiB0aGUgc291cmNlIGNoYW5uZWwgaXMgY2xvc2VkLCBhbGwgZGVzdGluYXRpb24gY2hhbm5lbHMgd2lsbCBhbHNvIGJlXG4gKiBjbG9zZWQuIEhvd2V2ZXIsIGlmIGRlc3RpbmF0aW9uIGNoYW5uZWxzIGFyZSBjbG9zZWQsIHRoZXkgZG8gbm90aGluZyB0byB0aGVcbiAqIHNvdXJjZSBjaGFubmVsLlxuICpcbiAqIGBgYFxuICogaW1wb3J0IHsgZ28sIGNoYW4sIHNlbmQgfSBmcm9tIFwiQGNoYW5rby9jaGFubmVsc1wiO1xuICogaW1wb3J0IHsgc3BsaXQgfSBmcm9tIFwiQGNoYW5rby9vcGVyYXRpb25zXCI7XG4gKlxuICogY29uc3QgaW5wdXQgPSBjaGFuKCk7XG4gKiBjb25zdCBvdXRwdXRzID0gc3BsaXQoaW5wdXQsIDMpO1xuICpcbiAqIGdvKGFzeW5jICgpID0+IHtcbiAqICAgYXdhaXQgc2VuZChpbnB1dCwgMSk7XG4gKiAgIGF3YWl0IHNlbmQoaW5wdXQsIDIpO1xuICogICBhd2FpdCBzZW5kKGlucHV0LCAzKTtcbiAqIH0pO1xuICpcbiAqIGdvKGFzeW5jICgpID0+IHtcbiAqICAgZm9yIGF3YWl0IChjb25zdCBvdXRwdXQgb2Ygb3V0cHV0cykge1xuICogICAgIGNvbnNvbGUubG9nKG91dHB1dCk7XG4gKiAgICAgLy8gLT4gMVxuICogICAgIC8vIC0+IDJcbiAqICAgICAvLyAtPiAzXG4gKiAgIH1cbiAqIH0pO1xuICogYGBgXG4gKlxuICogVGhpcyBmdW5jdGlvbiBtb3ZlcyBpdHMgdmFsdWVzIHRvIHRoZSBvdXRwdXQgY2hhbm5lbHMgYXN5bmNocm9ub3VzbHkuIFRoaXNcbiAqIG1lYW5zIHRoYXQgZXZlbiB3aGVuIHVzaW5nIHVuYnVmZmVyZWQgY2hhbm5lbHMsIGl0IGlzIG5vdCBuZWNlc3NhcnkgZm9yIGFsbFxuICogb3V0cHV0IGNoYW5uZWxzIHRvIGJlIHJlY2VpdmVkIGZyb20gYmVmb3JlIHRoZSBuZXh0IHNlbmQgdG8gdGhlIGlucHV0IGNoYW5uZWxcbiAqIGNhbiBjb21wbGV0ZS5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNoYW5rby9vcGVyYXRpb25zfk9wZXJhdGlvbnNcbiAqIEBwYXJhbSB7bW9kdWxlOmNoYW5rby9jaGFubmVsfkNoYW5uZWx9IHNyYyBUaGUgc291cmNlIGNoYW5uZWwuXG4gKiBAcGFyYW0gey4uLihudW1iZXJ8bW9kdWxlOmNoYW5rby9idWZmZXJ+QnVmZmVyKX0gW2J1ZmZlcnM9Ml0gVGhlIGJ1ZmZlcnMgdXNlZFxuICogICAgIHRvIGNyZWF0ZSB0aGUgZGVzdGluYXRpb24gY2hhbm5lbHMuIEVhY2ggZW50cnkgaXMgdHJlYXRlZCBzZXBhcmF0ZWx5LiBJZlxuICogICAgIG9uZSBpcyBhIG51bWJlciwgdGhlbiBhXG4gKiAgICAge0BsaW5rIG1vZHVsZTpjaGFua28vYnVmZmVyfkZpeGVkQnVmZmVyfEZpeGVkQnVmZmVyfSBvZiB0aGF0IHNpemUgd2lsbCBiZVxuICogICAgIHVzZWQuIElmIG9uZSBpcyBhIGAwYCwgdGhlbiB0aGUgY29ycmVzcG9uZGluZyBjaGFubmVsIHdpbGwgYmUgdW5idWZmZXJlZC5cbiAqICAgICAqKkV4Y2VwdGlvbjoqKiBpZiBhIHNpbmdsZSBudW1iZXIgaXMgcGFzc2VkLCB0aGVuIHRoYXQgbnVtYmVyIG9mXG4gKiAgICAgdW5idWZlcnJlZCBjaGFubmVscyB3aWxsIGJlIGNyZWF0ZWQuIFRoaXMgbWVhbnMgdGhhdCB0aGUgZGVmYXVsdCBpcyB0b1xuICogICAgIGNyZWF0ZSB0d28gdW5idWZmZXJlZCBjaGFubmVscy4gVG8gY3JlYXRlIGEgc2luZ2xlIGNoYW5uZWwgd2l0aCBhIGZpeGVkXG4gKiAgICAgYnVmZmVyLCB1c2UgYHtAbGluayBjaGFua29+Q2hhbmtvLmZpeGVkfGZpeGVkfWAgZXhwbGljaXRseS5cbiAqIEByZXR1cm4ge21vZHVsZTpjaGFua28vY2hhbm5lbH5DaGFubmVsW119IEFuIGFycmF5IG9mIGRlc3RpbmF0aW9uIGNoYW5uZWxzLlxuICovXG5mdW5jdGlvbiBzcGxpdChzcmMsIC4uLmJ1ZmZlcnMpIHtcbiAgbGV0IGJmcyA9IGJ1ZmZlcnMubGVuZ3RoID09PSAwID8gWzJdIDogYnVmZmVycztcbiAgaWYgKGJmcy5sZW5ndGggPT09IDEgJiYgaXNOdW1iZXIoYmZzWzBdKSkge1xuICAgIGNvbnN0IGNvdW50ID0gYmZzWzBdO1xuICAgIGJmcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgYmZzLnB1c2goMCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgZHN0cyA9IGJmcy5tYXAoYmYgPT4gY2hhbihiZikpO1xuICBjb25zdCBkb25lID0gY2hhbigpO1xuICBsZXQgY291bnQgPSAwO1xuXG4gIGZ1bmN0aW9uIGNhbGxiYWNrKCkge1xuICAgIGlmICgtLWNvdW50ID09PSAwKSB7XG4gICAgICBzZW5kQXN5bmMoZG9uZSk7XG4gICAgfVxuICB9XG5cbiAgZ28oYXN5bmMgKCkgPT4ge1xuICAgIGZvciAoOzspIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gYXdhaXQgcmVjdihzcmMpO1xuICAgICAgaWYgKHZhbHVlID09PSBDTE9TRUQpIHtcbiAgICAgICAgZm9yIChjb25zdCBkc3Qgb2YgZHN0cykge1xuICAgICAgICAgIGNsb3NlKGRzdCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNvdW50ID0gZHN0cy5sZW5ndGg7XG4gICAgICBmb3IgKGNvbnN0IGRzdCBvZiBkc3RzKSB7XG4gICAgICAgIHNlbmRBc3luYyhkc3QsIHZhbHVlLCBjYWxsYmFjayk7XG4gICAgICB9XG4gICAgICBhd2FpdCByZWN2KGRvbmUpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGRzdHM7XG59XG5cbi8qKlxuICogVXRpbGl0eSBmdW5jdGlvbiB0byBhZGQgdGhlIGFiaWxpdHkgdG8gYmUgdGFwcGVkIHRvIGEgY2hhbm5lbCB0aGF0IGlzIGJlaW5nXG4gKiB0YXBwZWQuIFRoaXMgd2lsbCBhZGQgYSBzaW5nbGUgcHJvcGVydHkgdG8gdGhhdCBjaGFubmVsIG9ubHkgKG5hbWVkXG4gKiAnQEBtdWx0aXRhcC90YXBzJyBzbyBhcyB0byBkZWNyZWFzZSB0aGUgY2hhbmNlIG9mIGNvbGxpc2lvbiksIGJ1dCB0aGUgdGFwcGluZ1xuICogZnVuY3Rpb25hbGl0eSBpdHNlbGYgaXMgcHJvdmlkZWQgb3V0c2lkZSB0aGUgY2hhbm5lbCBvYmplY3QuIFRoaXMgbmV3XG4gKiBwcm9wZXJ0eSBpcyBhbiBhcnJheSBvZiB0aGUgY2hhbm5lbHMgdGFwcGluZyB0aGlzIGNoYW5uZWwsIGFuZCBpdCB3aWxsIGJlXG4gKiByZW1vdmVkIGlmIGFsbCB0YXBzIGFyZSByZW1vdmVkLlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOmNoYW5rby9jaGFubmVsfkNoYW5uZWx9IHNyYyBUaGUgc291cmNlIGNoYW5uZWwgdG8gYmUgdGFwcGVkLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gbWFrZVRhcChzcmMpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNyYywgVEFQUywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICB2YWx1ZTogW11cbiAgfSk7XG5cbiAgY29uc3QgZG9uZSA9IGNoYW4oKTtcbiAgbGV0IGNvdW50ID0gMDtcblxuICBmdW5jdGlvbiBjYWxsYmFjaygpIHtcbiAgICBpZiAoLS1jb3VudCA9PT0gMCkge1xuICAgICAgc2VuZEFzeW5jKGRvbmUpO1xuICAgIH1cbiAgfVxuXG4gIGdvKGFzeW5jICgpID0+IHtcbiAgICBmb3IgKDs7KSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGF3YWl0IHJlY3Yoc3JjKTtcbiAgICAgIGlmICh2YWx1ZSA9PT0gQ0xPU0VEIHx8IHNyY1tUQVBTXS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgZGVsZXRlIHNyY1tUQVBTXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNvdW50ID0gc3JjW1RBUFNdLmxlbmd0aDtcbiAgICAgIGZvciAoY29uc3QgdGFwIG9mIHNyY1tUQVBTXSkge1xuICAgICAgICBzZW5kQXN5bmModGFwLCB2YWx1ZSwgY2FsbGJhY2spO1xuICAgICAgfVxuICAgICAgYXdhaXQgcmVjdihkb25lKTtcbiAgICB9XG4gIH0pO1xufVxuXG4vKipcbiAqIFRhcHMgYSBjaGFubmVsLCBzZW5kaW5nIGFsbCBvZiB0aGUgdmFsdWVzIHNlbnQgdG8gaXQgdG8gdGhlIGRlc3RpbmF0aW9uXG4gKiBjaGFubmVsLlxuICpcbiAqIEEgc291cmNlIGNoYW5uZWwgY2FuIGJlIHRhcHBlZCBtdWx0aXBsZSB0aW1lcywgYW5kIGFsbCBvZiB0aGUgdGFwcGluZ1xuICogKGRlc3RpbmF0aW9uKSBjaGFubmVscyByZWNlaXZlIGVhY2ggdmFsdWUgc2VudCB0byB0aGUgdGFwcGVkIChzb3VyY2UpXG4gKiBjaGFubmVsLlxuICpcbiAqIFRoaXMgaXMgZGlmZmVyZW50IGZyb21cbiAqIGB7QGxpbmsgbW9kdWxlOmNoYW5rby9vcGVyYXRpb25zfk9wZXJhdGlvbnMuc3BsaXR8c3BsaXR9YCBpbiB0aGF0IGl0J3NcbiAqIHRlbXBvcmFyeS4gQ2hhbm5lbHMgY2FuIHRhcCBhIGNoYW5uZWwgYW5kIHRoZW4gdW50YXAgaXQsIG11bHRpcGxlIHRpbWVzLCBhc1xuICogbmVlZGVkLiBJZiBhIHNvdXJjZSBjaGFubmVsIGhhcyBhbGwgb2YgaXRzIHRhcHMgcmVtb3ZlZCwgdGhlbiBpdCByZXZlcnRzIHRvIGFcbiAqIG5vcm1hbCBjaGFubmVsLCBqdXN0IGFzIGl0IHdhcyBiZWZvcmUgaXQgd2FzIHRhcHBlZC5cbiAqXG4gKiBBbHNvIHVubGlrZSBge0BsaW5rIG1vZHVsZTpjaGFua28vb3BlcmF0aW9uc35PcGVyYXRpb25zLnNwbGl0fHNwbGl0fWAsIGVhY2hcbiAqIGNhbGwgY2FuIG9ubHkgdGFwIG9uY2UuIEZvciBtdWx0aXBsZSBjaGFubmVscyB0byB0YXAgYSBzb3VyY2UgY2hhbm5lbCwgYHRhcGBcbiAqIGhhcyB0byBiZSBjYWxsZWQgbXVsdGlwbGUgdGltZXMuXG4gKlxuICogQ2xvc2luZyBlaXRoZXIgdGhlIHNvdXJjZSBvciBhbnkgb2YgdGhlIGRlc3RpbmF0aW9uIGNoYW5uZWxzIGhhcyBubyBlZmZlY3Qgb25cbiAqIGFueSBvZiB0aGUgb3RoZXIgY2hhbm5lbHMuXG4gKlxuICogYGBgXG4gKiBpbXBvcnQgeyBnbywgY2hhbiwgc2VuZCwgcmVjdiB9IGZyb20gXCJAY2hhbmtvL2NoYW5uZWxzXCI7XG4gKiBpbXBvcnQgeyB0YXAgfSBmcm9tIFwiQGNoYW5rby9vcGVyYXRpb25zXCI7XG4gKlxuICogY29uc3QgaW5wdXQgPSBjaGFuKCk7XG4gKiBjb25zdCB0YXBwZXIgPSBjaGFuKCk7XG4gKiB0YXAoaW5wdXQsIHRhcHBlcik7XG4gKlxuICogZ28oYXN5bmMgKCkgPT4ge1xuICogICBhd2FpdCBzZW5kKGlucHV0LCAxKTtcbiAqICAgYXdhaXQgc2VuZChpbnB1dCwgMik7XG4gKiB9KTtcbiAqXG4gKiBnbyhhc3luYyAoKSA9PiB7XG4gKiAgIGNvbnNvbGUubG9nKGF3YWl0IHJlY3YodGFwcGVyKSk7ICAgLy8gLT4gMVxuICogICBjb25zb2xlLmxvZyhhd2FpdCByZWN2KHRhcHBlcikpOyAgIC8vIC0+IDJcbiAqIH0pO1xuICpcbiAqIGBgYFxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y2hhbmtvL29wZXJhdGlvbnN+T3BlcmF0aW9uc1xuICogQHBhcmFtIHttb2R1bGU6Y2hhbmtvL2NoYW5uZWx+Q2hhbm5lbH0gc3JjIFRoZSBjaGFubmVsIHRvIGJlIHRhcHBlZC5cbiAqIEBwYXJhbSB7bW9kdWxlOmNoYW5rby9jaGFubmVsfkNoYW5uZWx9IFtkZXN0XSBUaGUgY2hhbm5lbCB0YXBwaW5nIHRoZSBzb3VyY2VcbiAqICAgICBjaGFubmVsLiBJZiB0aGlzIGlzIG5vdCBwcmVzZW50LCBhIG5ldyB1bmJ1ZmZlcmVkIGNoYW5uZWwgd2lsbCBiZVxuICogICAgIGNyZWF0ZWQuXG4gKiBAcmV0dXJuIHttb2R1bGU6Y2hhbmtvL2NoYW5uZWx+Q2hhbm5lbH0gVGhlIGRlc3RpbmF0aW9uIGNoYW5uZWwuIFRoaXMgaXMgdGhlXG4gKiAgICAgc2FtZSBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50LCBpZiBwcmVzZW50OyBvdGhlcndpc2UgaXQgaXMgdGhlXG4gKiAgICAgbmV3bHktY3JlYXRlZCBjaGFubmVsIHRhcHBpbmcgdGhlIHNvdXJjZSBjaGFubmVsLlxuICovXG5mdW5jdGlvbiB0YXAoc3JjLCBkc3QgPSBjaGFuKCkpIHtcbiAgaWYgKCFzcmNbVEFQU10pIHtcbiAgICBtYWtlVGFwKHNyYyk7XG4gIH1cbiAgaWYgKCFzcmNbVEFQU10uaW5jbHVkZXMoZHN0KSkge1xuICAgIHNyY1tUQVBTXS5wdXNoKGRzdCk7XG4gIH1cbiAgcmV0dXJuIGRzdDtcbn1cblxuLyoqXG4gKiBVbnRhcHMgYSBwcmV2aW91c2x5IHRhcHBpbmcgZGVzdGluYXRpb24gY2hhbm5lbCBmcm9tIGl0cyBzb3VyY2UgY2hhbm5lbC5cbiAqXG4gKiBUaGlzIHJlbW92ZXMgYSBwcmV2aW91c2x5IGNyZWF0ZWQgdGFwLiBUaGUgZGVzdGluYXRpb24gKHRhcHBpbmcpIGNoYW5uZWwgd2lsbFxuICogc3RvcCByZWNlaXZpbmcgdGhlIHZhbHVlcyBzZW50IHRvIHRoZSBzb3VyY2UgY2hhbm5lbC5cbiAqXG4gKiBJZiB0aGUgZGVzdGluYXRpb24gY2hhbm5lbCB3YXMgbm90LCBpbiBmYWN0LCB0YXBwaW5nIHRoZSBzb3VyY2UgY2hhbm5lbCwgdGhpc1xuICogZnVuY3Rpb24gd2lsbCBkbyBub3RoaW5nLiBJZiBhbGwgdGFwcyBhcmUgcmVtb3ZlZCwgdGhlIHNvdXJjZSBjaGFubmVsIHJldmVydHNcbiAqIHRvIG5vcm1hbCAoaS5lLiwgaXQgbm8gbG9uZ2VyIGhhcyB0aGUgdGFwcGluZyBjb2RlIGFwcGxpZWQgdG8gaXQgYW5kIGNhbiBiZVxuICogdGFrZW4gZnJvbSBhcyBub3JtYWwpLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y2hhbmtvL29wZXJhdGlvbnN+T3BlcmF0aW9uc1xuICogQHBhcmFtIHttb2R1bGU6Y2hhbmtvL2NoYW5uZWx+Q2hhbm5lbH0gc3JjIFRoZSB0YXBwZWQgY2hhbm5lbC5cbiAqIEBwYXJhbSB7bW9kdWxlOmNoYW5rby9jaGFubmVsfkNoYW5uZWx9IGRlc3QgVGhlIGNoYW5uZWwgdGhhdCBpcyB0YXBwaW5nIHRoZVxuICogICAgIHNvdXJjZSBjaGFubmVsIHRoYXQgc2hvdWxkIG5vIGxvbmdlciBiZSB0YXBwaW5nIHRoZSBzb3VyY2UgY2hhbm5lbC5cbiAqL1xuZnVuY3Rpb24gdW50YXAoc3JjLCBkc3QpIHtcbiAgY29uc3QgdGFwcyA9IHNyY1tUQVBTXTtcbiAgaWYgKHRhcHMpIHtcbiAgICBjb25zdCBpbmRleCA9IHRhcHMuaW5kZXhPZihkc3QpO1xuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHRhcHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIGlmICh0YXBzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBzZW5kQXN5bmMoc3JjKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFsbCB0YXBzIGZyb20gYSBzb3VyY2UgY2hhbm5lbC5cbiAqXG4gKiBUaGUgcHJldmlvdXNseS10YXBwZWQgY2hhbm5lbCByZXZlcnRzIHRvIGEgbm9ybWFsIGNoYW5uZWwsIHdoaWxlIGFueSBjaGFubmVsc1xuICogdGhhdCBtaWdodCBoYXZlIGJlZW4gdGFwcGluZyBpdCBubyBsb25nZXIgcmVjZWl2ZSB2YWx1ZXMgZnJvbSB0aGUgc291cmNlXG4gKiBjaGFubmVsLiBJZiB0aGUgc291cmNlIGNoYW5uZWwgaGFkIG5vIHRhcHMsIHRoaXMgZnVuY3Rpb24gZG9lcyBub3RoaW5nLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y2hhbmtvL29wZXJhdGlvbnN+T3BlcmF0aW9uc1xuICogQHBhcmFtIHttb2R1bGU6Y2hhbmtvL2NoYW5uZWx+Q2hhbm5lbH0gc3JjIFRoZSB0YXBwZWQgY2hhbm5lbC4gQWxsIHRhcHMgd2lsbFxuICogICAgIGJlIHJlbW92ZWQgZnJvbSB0aGlzIGNoYW5uZWwuXG4gKi9cbmZ1bmN0aW9uIHVudGFwQWxsKHNyYykge1xuICBpZiAoc3JjW1RBUFNdKSB7XG4gICAgc3JjW1RBUFNdID0gW107XG4gICAgc2VuZEFzeW5jKHNyYyk7XG4gIH1cbn1cblxuLyoqXG4gKiBNYXBzIHRoZSB2YWx1ZXMgZnJvbSBvbmUgb3IgbW9yZSBzb3VyY2UgY2hhbm5lbHMgdGhyb3VnaCBhIGZ1bmN0aW9uLCBzZW5kaW5nXG4gKiB0aGUgcmVzdWx0cyB0byBhIG5ldyBjaGFubmVsLlxuICpcbiAqIFRoZSBtYXBwaW5nIGZ1bmN0aW9uIGlzIGdpdmVuIG9uZSB2YWx1ZSBmcm9tIGVhY2ggc291cmNlIGNoYW5uZWwsIGFmdGVyIGF0XG4gKiBsZWFzdCBvbmUgdmFsdWUgYmVjb21lcyBhdmFpbGFibGUgb24gZXZlcnkgc291cmNlIGNoYW5uZWwuIFRoZSBvdXRwdXQgdmFsdWVcbiAqIGZyb20gdGhlIGZ1bmN0aW9uIGlzIHRoZW4gc2VudCB0byB0aGUgZGVzdGluYXRpb24gY2hhbm5lbC5cbiAqXG4gKiBUaGUgZGVzdGluYXRpb24gY2hhbm5lbCBpcyBjcmVhdGVkIGJ5IHRoZSBmdW5jdGlvbiBiYXNlZCBvbiB0aGUgYnVmZmVyIHZhbHVlXG4gKiBwYXNzZWQgYXMgdGhlIHRoaXJkIHBhcmFtZXRlci4gSWYgdGhpcyBpcyBtaXNzaW5nLCBgbnVsbGAsIG9yIGAwYCwgdGhlXG4gKiBkZXN0aW5hdGlvbiBjaGFubmVsIHdpbGwgYmUgdW5idWZmZXJlZC4gSWYgaXQncyBhIHBvc2l0aXZlIGludGVnZXIsIHRoZVxuICogZGVzdGluYXRpb24gY2hhbm5lbCBpcyBidWZmZXJlZCBieSBhIGZpeGVkIGJ1ZmZlciBvZiB0aGF0IHNpemUuIElmIHRoZVxuICogcGFyYW1ldGVyIGlzIGEgYnVmZmVyLCB0aGVuIHRoYXQgYnVmZmVyIGlzIHVzZWQgdG8gYnVmZmVyIHRoZSBkZXN0aW5hdGlvblxuICogY2hhbm5lbC5cbiAqXG4gKiBPbmNlICphbnkqIHNvdXJjZSBjaGFubmVsIGlzIGNsb3NlZCwgdGhlIG1hcHBpbmcgY2Vhc2VzIGFuZCB0aGUgZGVzdGluYXRpb25cbiAqIGNoYW5uZWwgaXMgYWxzbyBjbG9zZWQuXG4gKlxuICogVGhpcyBpcyBvYnZpb3VzbHkgc2ltaWxhciB0byBhIG1hcCB0cmFuc2R1Y2VyLCBidXQgdW5saWtlIGEgdHJhbnNkdWNlciwgdGhpc1xuICogZnVuY3Rpb24gd29ya3Mgd2l0aCBtdWx0aXBsZSBpbnB1dCBjaGFubmVscy4gVGhpcyBpcyBzb21ldGhpbmcgdGhhdCBhXG4gKiB0cmFuc2R1Y2VyIG9uIGEgc2luZ2xlIGNoYW5uZWwgaXMgdW5hYmxlIHRvIGRvLlxuICpcbiAqIGBgYFxuICogaW1wb3J0IHsgZ28sIGNoYW4sIHNlbmQsIHJlY3YsIGNsb3NlLCBpc0Nsb3NlZCB9IGZyb20gXCJAY2hhbmtvL2NoYW5uZWxzXCI7XG4gKiBpbXBvcnQgeyBtYXAgfSBmcm9tIFwiQGNoYW5rby9vcGVyYXRpb25zXCJcbiAqXG4gKiBjb25zdCBpbnB1dDEgPSBjaGFuKCk7XG4gKiBjb25zdCBpbnB1dDIgPSBjaGFuKCk7XG4gKiBjb25zdCBpbnB1dDMgPSBjaGFuKCk7XG4gKiBjb25zdCBvdXRwdXQgPSBtYXAoKHgsIHksIHopID0+IHggKyB5ICsgeiwgW2lucHV0MSwgaW5wdXQyLCBpbnB1dDNdKTtcbiAqXG4gKiBnbyhhc3luYyAoKSA9PiB7XG4gKiAgIGF3YWl0IHNlbmQoaW5wdXQxLCAxKTtcbiAqICAgYXdhaXQgc2VuZChpbnB1dDEsIDIpO1xuICogICBhd2FpdCBzZW5kKGlucHV0MSwgMyk7XG4gKiB9KTtcbiAqXG4gKiBnbyhhc3luYyAoKSA9PiB7XG4gKiAgIGF3YWl0IHNlbmQoaW5wdXQyLCAxMCk7XG4gKiAgIGF3YWl0IHNlbmQoaW5wdXQyLCAyMCk7XG4gKiAgIGNsb3NlKGlucHV0Mik7XG4gKiB9KTtcbiAqXG4gKiBnbyhhc3luYyAoKSA9PiB7XG4gKiAgIGF3YWl0IHNlbmQoaW5wdXQzLCAxMDApO1xuICogICBhd2FpdCBzZW5kKGlucHV0MywgMjAwKTtcbiAqICAgYXdhaXQgc2VuZChpbnB1dDMsIDMwMCk7XG4gKiB9KTtcbiAqXG4gKiBnbyhhc3luYyAoKSA9PiB7XG4gKiAgIGNvbnNvbGUubG9nKGF3YWl0IHJlY3Yob3V0cHV0KSk7ICAgICAvLyAtPiAxMTFcbiAqICAgY29uc29sZS5sb2coYXdhaXQgcmVjdihvdXRwdXQpKTsgICAgIC8vIC0+IDIyMlxuICogICAvLyBPdXRwdXQgY2xvc2VzIG5vdyBiZWNhdXNlIGlucHV0MiBjbG9zZXMgYWZ0ZXIgMiB2YWx1ZXNcbiAqICAgY29uc29sZS5sb2coaXNDbG9zZWQob3V0cHV0KSk7ICAgICAgIC8vIC0+IHRydWVcbiAqIH0pO1xuICogYGBgXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjaGFua28vb3BlcmF0aW9uc35PcGVyYXRpb25zXG4gKiBAcGFyYW0ge21vZHVsZTpjaGFua28vb3BlcmF0aW9uc35tYXBwZXJ9IGZuIFRoZSBtYXBwaW5nIGZ1bmN0aW9uLiBUaGlzIHNob3VsZFxuICogICAgIGhhdmUgb25lIHBhcmFtZXRlciBmb3IgZWFjaCBzb3VyY2UgY2hhbm5lbCBhbmQgcmV0dXJuIGEgc2luZ2xlIHZhbHVlLlxuICogQHBhcmFtIHttb2R1bGU6Y2hhbmtvL2NoYW5uZWx+Q2hhbm5lbFtdfSBzcmNzIFRoZSBzb3VyY2UgY2hhbm5lbHMuXG4gKiBAcGFyYW0geyhudW1iZXJ8bW9kdWxlOmNoYW5rby9idWZmZXJ+QnVmZmVyKX0gW2J1ZmZlcj0wXSBBIGJ1ZmZlciB1c2VkIHRvXG4gKiAgICAgY3JlYXRlIHRoZSBkZXN0aW5hdGlvbiBjaGFubmVsLiBJZiB0aGlzIGlzIGEgbnVtYmVyLCBhXG4gKiAgICAge0BsaW5rIG1vZHVsZTpjaGFua28vYnVmZmVyfkZpeGVkQnVmZmVyfSBvZiB0aGF0IHNpemUgd2lsbCBiZSB1c2VkLiBJZlxuICogICAgIHRoaXMgaXMgYDBgIG9yIG5vdCBwcmVzZW50LCB0aGUgY2hhbm5lbCB3aWxsIGJlIHVuYnVmZmVyZWQuXG4gKiBAcmV0dXJuIHttb2R1bGU6Y2hhbmtvL2NoYW5uZWx+Q2hhbm5lbH0gVGhlIGRlc3RpbmF0aW9uIGNoYW5uZWwuXG4gKi9cbmZ1bmN0aW9uIG1hcChmbiwgc3JjcywgYnVmZmVyID0gMCkge1xuICBjb25zdCBkc3QgPSBjaGFuKGJ1ZmZlcik7XG4gIGNvbnN0IHNyY2xlbiA9IHNyY3MubGVuZ3RoO1xuICBjb25zdCB2YWx1ZXMgPSBbXTtcbiAgY29uc3QgY2FsbGJhY2tzID0gW107XG4gIGNvbnN0IHRlbXAgPSBjaGFuKCk7XG4gIGxldCBjb3VudDtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHNyY2xlbjsgaSsrKSB7XG4gICAgY2FsbGJhY2tzW2ldID0gKGluZGV4ID0+IHtcbiAgICAgIHJldHVybiB2YWx1ZSA9PiB7XG4gICAgICAgIHZhbHVlc1tpbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgaWYgKC0tY291bnQgPT09IDApIHtcbiAgICAgICAgICBzZW5kQXN5bmModGVtcCwgdmFsdWVzLnNsaWNlKCkpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0pKGkpO1xuICB9XG5cbiAgZ28oYXN5bmMgKCkgPT4ge1xuICAgIGZvciAoOzspIHtcbiAgICAgIGNvdW50ID0gc3JjbGVuO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcmNsZW47IGkrKykge1xuICAgICAgICByZWN2QXN5bmMoc3Jjc1tpXSwgY2FsbGJhY2tzW2ldKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHZhbHVlcyA9IGF3YWl0IHJlY3YodGVtcCk7XG4gICAgICBmb3IgKGNvbnN0IHZhbHVlIG9mIHZhbHVlcykge1xuICAgICAgICBpZiAodmFsdWUgPT09IENMT1NFRCkge1xuICAgICAgICAgIC8vIE9uY2UgYSBzb3VyY2UgY2xvc2VzLCB3ZSBjbG9zZSB0aGUgZGVzdGluYXRpb24gQU5EIHRoZSByZXN0IG9mIHRoZVxuICAgICAgICAgIC8vIHNvdXJjZXMuIE90aGVyd2lzZSB0aGUgc291cmNlcyB3aWxsIGhhdmUgbm90aGluZyByZWNlaXZpbmcgZnJvbVxuICAgICAgICAgIC8vIHRoZW0gYW5kIHNlbmRzIHRvIHRoZW0gd2lsbCBibG9jayBmb3JldmVyLiBCeSBjbG9zaW5nIHRoZW0sIHNlbmRzXG4gICAgICAgICAgLy8gdG8gdGhlbSB3aWxsIGltbWVkaWF0ZWx5IHJldHVybiBgZmFsc2VgIGFuZCBub3QgYmxvY2suXG4gICAgICAgICAgY2xvc2UoZHN0KTtcbiAgICAgICAgICBmb3IgKGNvbnN0IHNyYyBvZiBzcmNzKSB7XG4gICAgICAgICAgICBjbG9zZShzcmMpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGF3YWl0IHNlbmQoZHN0LCBmbiguLi52YWx1ZXMpKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBkc3Q7XG59XG5cbmV4cG9ydCB7IHBpcGUsIHBhcnRpdGlvbiwgbWVyZ2UsIHNwbGl0LCB0YXAsIHVudGFwLCB1bnRhcEFsbCwgbWFwIH07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuLyoqXG4gKiBBIHNldCBvZiBjaGFubmVsIHV0aWxpdGllcyBmb3IgY2hhbmdpbmcgdGhlIHRpbWluZyBvZiBpbnB1dHMgYmVpbmcgcHV0IG9udG9cbiAqIHRoZSBpbnB1dCBjaGFubmVsLlxuICpcbiAqIEBtb2R1bGUgY2hhbmtvL29wZXJhdGlvbnMvdGltaW5nXG4gKiBAcHJpdmF0ZVxuICovXG5cbmltcG9ydCB7XG4gIGdvLFxuICBjaGFuLFxuICBzZW5kLFxuICBzZWxlY3QsXG4gIGNsb3NlLFxuICBDTE9TRUQsXG4gIGlzVGltZWQsXG4gIHRpbWVkQ2hhblxufSBmcm9tIFwiQGNoYW5rby9jaGFubmVsc1wiO1xuXG5pbXBvcnQgeyBpc051bWJlciB9IGZyb20gXCJtb2R1bGVzL2NvbW1vblwiO1xuXG4vKipcbiAqIERlYm91bmNlcyBhbiBpbnB1dCBjaGFubmVsLlxuICpcbiAqIERlYm91bmNpbmcgaXMgdGhlIGFjdCBvZiB0dXJuaW5nIHNldmVyYWwgaW5wdXQgdmFsdWVzIGludG8gb25lLiBGb3IgZXhhbXBsZSxcbiAqIGRlYm91bmNpbmcgYSBjaGFubmVsIGRyaXZlbiBieSBhIGBtb3VzZW1vdmVgIGV2ZW50IHdvdWxkIGNhdXNlIG9ubHkgdGhlIGZpbmFsXG4gKiBgbW91c2Vtb3ZlYCBldmVudCB0byBiZSBwdXQgb250byB0aGUgY2hhbm5lbCwgZHJvcHBpbmcgYWxsIG9mIHRoZSBvdGhlciBvbmVzLlxuICogVGhpcyBjYW4gYmUgZGVzaXJhYmxlIGJlY2F1c2UgYG1vdXNlbW92ZWAgZXZlbnRzIGNvbWUgaW4gYnVuY2hlcywgYmVpbmdcbiAqIHByb2R1Y2VkIGNvbnRpbnVhbGx5IHdoaWxlIHRoZSBtb3VzZSBpcyBtb3ZpbmcsIGFuZCBvZnRlbiBhbGwgdGhhdCB3ZSByZWFsbHlcbiAqIGNhcmUgYWJvdXQgaXMgdG8gbGVhcm4gd2hlcmUgdGhlIG1vdXNlIGVuZGVkIHVwLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gZG9lcyB0aGlzIGJ5IGNvbnRyb2xsaW5nIHdoaWNoIHZhbHVlcyB0aGF0IGhhdmUgYmVlbiBzZW50IHRvXG4gKiB0aGUgc291cmNlIGNoYW5uZWwgYXJlIG1hZGUgYXZhaWxhYmxlIG9uIHRoZSBkZXN0aW5hdGlvbiBjaGFubmVsLCBhbmQgd2hlbi5cbiAqXG4gKiBUaGUgYGRlbGF5YCBwYXJhbWV0ZXIgZGV0ZXJtaW5lcyB0aGUgZGVib3VuY2UgdGhyZXNob2xkLiBPbmNlIHRoZSBmaXJzdCB2YWx1ZVxuICogaXMgc2VudCB0byB0aGUgc291cmNlIGNoYW5uZWwsIGRlYm91bmNpbmcgaXMgaW4gZWZmZWN0IHVudGlsIHRoZSBudW1iZXIgb2ZcbiAqIG1pbGxpc2Vjb25kcyBpbiBgZGVsYXlgIHBhc3NlcyB3aXRob3V0IGFueSBvdGhlciB2YWx1ZSBiZWluZyBwdXQgb250byB0aGF0XG4gKiBjaGFubmVsLiBJbiBvdGhlciB3b3JkcywgdGhlIGRlbGF5IHdpbGwgYmUgcmVmcmVzaGVkIGlmIGFub3RoZXIgdmFsdWUgaXMgc2VudFxuICogdG8gdGhlIHNvdXJjZSBjaGFubmVsIGJlZm9yZSB0aGUgZGVsYXkgZWxhcHNlcy4gQWZ0ZXIgYSBmdWxsIGRlbGF5IGludGVydmFsXG4gKiBwYXNzZXMgd2l0aG91dCBhIHZhbHVlIGJlaW5nIHNlbnQgdG8gdGhlIHNvdXJjZSBjaGFubmVsLCB0aGUgbGFzdCB2YWx1ZSBzZW50XG4gKiBiZWNvbWVzIGF2YWlsYWJsZSBvbiB0aGUgZGVzdGluYXRpb24gY2hhbm5lbC5cbiAqXG4gKiBUaGlzIGJlaGF2aW9yIGNhbiBiZSBtb2RpZmllZCB0aHJvdWdoIGZvdXIgb3B0aW9uczogYGxlYWRpbmdgLCBgdHJhaWxpbmdgLFxuICogYG1heERlbGF5YCwgYW5kIGBjYW5jZWxgLlxuICpcbiAqIElmIGJvdGggYGxlYWRpbmdgIGFuZCBgdHJhaWxpbmdgIGFyZSBgdHJ1ZWAsIHZhbHVlcyB3aWxsIG5vdCBiZSBkdXBsaWNhdGVkLlxuICogVGhlIGZpcnN0IHZhbHVlIHB1dCBvbnRvIHRoZSBzb3VyY2UgY2hhbm5lbCB3aWxsIGJlIHB1dCBvbnRvIHRoZSBkZXN0aW5hdGlvblxuICogY2hhbm5lbCBpbW1lZGlhdGVseSAocGVyIGBsZWFkaW5nYCkgYW5kIHRoZSBkZWxheSB3aWxsIGJlZ2luLCBidXQgYSB2YWx1ZVxuICogd2lsbCBvbmx5IGJlIG1hZGUgYXZhaWxhYmxlIG9uIHRoZSBkZXN0aW5hdGlvbiBjaGFubmVsIGF0IHRoZSBlbmQgb2YgdGhlXG4gKiBkZWxheSAocGVyIGB0cmFpbGluZ2ApIGlmICphbm90aGVyKiBpbnB1dCB2YWx1ZSB3YXMgcHV0IG9udG8gdGhlIHNvdXJjZVxuICogY2hhbm5lbCBiZWZvcmUgdGhlIGRlbGF5IGV4cGlyZWQuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjaGFua28vb3BlcmF0aW9uc35PcGVyYXRpb25zXG4gKiBAcGFyYW0ge21vZHVsZTpjaGFua28vY2hhbm5lbH5DaGFubmVsfSBzcmMgVGhlIHNvdXJjZSBjaGFubmVsLlxuICogQHBhcmFtIHsobnVtYmVyfG1vZHVsZTpjaGFua28vYnVmZmVyfkJ1ZmZlcil9IFtidWZmZXI9MF0gQSBidWZmZXIgdXNlZCB0b1xuICogICAgIGNyZWF0ZSB0aGUgZGVzdGluYXRpb24gY2hhbm5lbC4gSWYgdGhpcyBpcyBhIG51bWJlciwgYVxuICogICAgIHtAbGluayBtb2R1bGU6Y2hhbmtvL2J1ZmZlcn5GaXhlZEJ1ZmZlcnxGaXhlZEJ1ZmZlcn0gb2YgdGhhdCBzaXplIHdpbGwgYmVcbiAqICAgICB1c2VkLiBJZiB0aGlzIGlzIGAwYCBvciBub3QgcHJlc2VudCwgdGhlIGNoYW5uZWwgd2lsbCBiZSB1bmJ1ZmZlcmVkLlxuICogQHBhcmFtIHtudW1iZXJ9IGRlbGF5IFRoZSBkZWJvdW5jaW5nIGRlbGF5LCBpbiBtaWxsaXNlY29uZHMuXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dIEEgc2V0IG9mIG9wdGlvbnMgdG8gZnVydGhlciBjb25maWd1cmUgdGhlXG4gKiAgICAgZGVib3VuY2luZy5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMubGVhZGluZz1mYWxzZV0gSW5zdGVhZCBvZiBtYWtpbmcgYSB2YWx1ZSBhdmFpbGFibGVcbiAqICAgICBvbiB0aGUgZGVzdGluYXRpb24gY2hhbm5lbCBhZnRlciB0aGUgZGVsYXkgcGFzc2VzLCB0aGUgZmlyc3QgdmFsdWUgcHV0XG4gKiAgICAgb250byB0aGUgc291cmNlIGNoYW5uZWwgaXMgbWFkZSBhdmFpbGFibGUgKmJlZm9yZSogdGhlIGRlbGF5IGJlZ2lucy4gTm9cbiAqICAgICB2YWx1ZSBpcyBhdmFpbGFibGUgb24gdGhlIGRlc3RpbmF0aW9uIGNoYW5uZWwgYWZ0ZXIgdGhlIGRlbGF5IGhhcyBlbGFwc2VkXG4gKiAgICAgKHVubGVzcyBgdHJhaWxpbmdgIGlzIGFsc28gYHRydWVgKS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMudHJhaWxpbmc9dHJ1ZV0gVGhlIGRlZmF1bHQgYmVoYXZpb3IsIHdoZXJlIGEgdmFsdWVcbiAqICAgICBpcyBub3QgbWFkZSBhdmFpbGFibGUgb24gdGhlIGRlc3RpbmF0aW9uIGNoYW5uZWwgdW50aWwgdGhlIGVudGlyZSBkZWxheVxuICogICAgIHBhc3NlcyB3aXRob3V0IGEgbmV3IHZhbHVlIGJlaW5nIHB1dCBvbiB0aGUgc291cmNlIGNoYW5uZWwuXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMubWF4RGVsYXk9MF0gVGhlIG1heGltdW0gZGVsYXkgYWxsb3dlZCBiZWZvcmUgYSB2YWx1ZVxuICogICAgIGlzIHB1dCBvbnRvIHRoZSBkZXN0aW5hdGlvbiBjaGFubmVsLiBEZWJvdW5jaW5nIGNhbiwgaW4gdGhlb3J5LCBnbyBvblxuICogICAgIGZvcmV2ZXIgYXMgbG9uZyBhcyBuZXcgaW5wdXQgdmFsdWVzIGNvbnRpbnVlIHRvIGJlIHB1dCBvbnRvIHRoZSBzb3VyY2VcbiAqICAgICBjaGFubmVsIGJlZm9yZSB0aGUgZGVsYXkgZXhwaXJlcy4gU2V0dGluZyB0aGlzIG9wdGlvbiB0byBhIHBvc2l0aXZlXG4gKiAgICAgbnVtYmVyIHNldHMgdGhlIG1heGltdW0gbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0aGF0IGRlYm91bmNpbmcgY2FuIGdvIG9uXG4gKiAgICAgYmVmb3JlIGl0J3MgZm9yY2VkIHRvIGVuZCwgZXZlbiBpZiBpbiB0aGUgbWlkZGxlIG9mIGEgZGVib3VuY2luZyBkZWxheS5cbiAqICAgICBIYXZpbmcgZGVib3VuY2luZyBlbmQgdGhyb3VnaCB0aGUgbWF4IGRlbGF5IG9wZXJhdGVzIGV4YWN0bHkgYXMgaWYgaXQgaGFkXG4gKiAgICAgZW5kZWQgYmVjYXVzZSBvZiBsYWNrIG9mIGlucHV0OyB0aGUgbGFzdCBpbnB1dCBpcyBtYWRlIGF2YWlsYWJsZSBvbiB0aGVcbiAqICAgICBkZXN0aW5hdGlvbiBjaGFubmVsIChpZiBgdHJhaWxpbmdgIGlzIGB0cnVlYCksIGFuZCB0aGUgbmV4dCBpbnB1dCB3aWxsXG4gKiAgICAgdHJpZ2dlciBhbm90aGVyIGRlYm91bmNlIG9wZXJhdGlvbi5cbiAqIEBwYXJhbSB7bW9kdWxlOmNoYW5rby9jaGFubmVsfkNoYW5uZWx9IFtvcHRpb25zLmNhbmNlbF0gQSBjaGFubmVsIHVzZWQgdG9cbiAqICAgICBzaWduYWwgYSBjYW5jZWxsYXRpb24gb2YgdGhlIGRlYm91bmNpbmcuIEFueSB2YWx1ZSBwdXQgb250byB0aGlzIGNoYW5uZWxcbiAqICAgICB3aWxsIGNhbmNlbCB0aGUgY3VycmVudCBkZWJvdW5jaW5nIG9wZXJhdGlvbiwgY2xvc2luZyB0aGUgb3V0cHV0IGNoYW5uZWxcbiAqICAgICBhbmQgZGlzY2FyZGluZyBhbnkgdmFsdWVzIHRoYXQgd2VyZSB3YWl0aW5nIGZvciB0aGUgZGVib3VuY2UgdGhyZXNob2xkXG4gKiAgICAgdGltZXIgdG8gYmUgc2VudCB0byB0aGUgb3V0cHV0LlxuICogQHJldHVybiB7bW9kdWxlOmNoYW5rby9jaGFubmVsfkNoYW5uZWx9IFRoZSBuZXdseS1jcmVhdGVkIGRlc3RpbmF0aW9uXG4gKiAgICAgY2hhbm5lbCwgd2hlcmUgYWxsIG9mIHRoZSB2YWx1ZXMgd2lsbCBiZSBkZWJvdW5jZWQgZnJvbSB0aGUgc291cmNlXG4gKiAgICAgY2hhbm5lbC5cbiAqL1xuZnVuY3Rpb24gZGVib3VuY2Uoc3JjLCBidWZmZXIsIGRlbGF5LCBvcHRpb25zKSB7XG4gIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgIGxlYWRpbmc6IGZhbHNlLFxuICAgIHRyYWlsaW5nOiB0cnVlLFxuICAgIG1heERlbGF5OiAwLFxuICAgIGNhbmNlbDogY2hhbigpXG4gIH07XG4gIGNvbnN0IFtidWYsIGRlbCwgb3B0c10gPSBpc051bWJlcihkZWxheSlcbiAgICA/IFtidWZmZXIsIGRlbGF5LCBPYmplY3QuYXNzaWduKGRlZmF1bHRzLCBvcHRpb25zID8/IHt9KV1cbiAgICA6IFswLCBidWZmZXIsIE9iamVjdC5hc3NpZ24oZGVmYXVsdHMsIGRlbGF5ID8/IHt9KV07XG5cbiAgY29uc3QgZHN0ID0gY2hhbihidWYpO1xuICBjb25zdCB7IGxlYWRpbmcsIHRyYWlsaW5nLCBtYXhEZWxheSwgY2FuY2VsIH0gPSBvcHRzO1xuXG4gIGdvKGFzeW5jICgpID0+IHtcbiAgICBsZXQgdGltZXIgPSBjaGFuKCk7XG4gICAgbGV0IG1heCA9IGNoYW4oKTtcbiAgICBsZXQgY3VycmVudCA9IENMT1NFRDtcblxuICAgIGZvciAoOzspIHtcbiAgICAgIGNvbnN0IHsgdmFsdWUsIGNoYW5uZWwgfSA9IGF3YWl0IHNlbGVjdChbc3JjLCB0aW1lciwgbWF4LCBjYW5jZWxdKTtcblxuICAgICAgaWYgKGNoYW5uZWwgPT09IGNhbmNlbCkge1xuICAgICAgICBjbG9zZShkc3QpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGlmIChjaGFubmVsID09PSBzcmMpIHtcbiAgICAgICAgaWYgKHZhbHVlID09PSBDTE9TRUQpIHtcbiAgICAgICAgICBjbG9zZShkc3QpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdGltaW5nID0gaXNUaW1lZCh0aW1lcik7XG4gICAgICAgIHRpbWVyID0gdGltZWRDaGFuKGRlbCk7XG5cbiAgICAgICAgaWYgKCF0aW1pbmcgJiYgbWF4RGVsYXkgPiAwKSB7XG4gICAgICAgICAgbWF4ID0gdGltZWRDaGFuKG1heERlbGF5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChsZWFkaW5nKSB7XG4gICAgICAgICAgaWYgKCF0aW1pbmcpIHtcbiAgICAgICAgICAgIGF3YWl0IHNlbmQoZHN0LCB2YWx1ZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGN1cnJlbnQgPSB2YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodHJhaWxpbmcpIHtcbiAgICAgICAgICBjdXJyZW50ID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRpbWVyID0gY2hhbigpO1xuICAgICAgICBtYXggPSBjaGFuKCk7XG4gICAgICAgIGlmICh0cmFpbGluZyAmJiBjdXJyZW50ICE9PSBDTE9TRUQpIHtcbiAgICAgICAgICBhd2FpdCBzZW5kKGRzdCwgY3VycmVudCk7XG4gICAgICAgICAgY3VycmVudCA9PT0gQ0xPU0VEO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZHN0O1xufVxuXG4vKipcbiAqIFRocm90dGxlcyBhbiBpbnB1dCBjaGFubmVsLlxuICpcbiAqIFRocm90dGxpbmcgaXMgdGhlIGFjdCBvZiBlbnN1cmluZyB0aGF0IHNvbWV0aGluZyBvbmx5IGhhcHBlbnMgb25jZSBwZXIgdGltZVxuICogaW50ZXJ2YWwuIEluIHRoaXMgY2FzZSwgaXQgbWVhbnMgdGhhdCBhIHZhbHVlIHNlbnQgdG8gdGhlIHNvdXJjZSBjaGFubmVsIGlzXG4gKiBvbmx5IG1hZGUgYXZhaWxhYmxlIHRvIHRoZSBkZXN0aW5hdGlvbiBjaGFubmVsIG9uY2UgcGVyIGEgZ2l2ZW4gbnVtYmVyIG9mXG4gKiBtaWxsaXNlY29uZHMuIEFuIGV4YW1wbGUgdXNhZ2Ugd291bGQgYmUgd2l0aCB3aW5kb3cgc2Nyb2xsIGV2ZW50czsgdGhlc2VcbiAqIGV2ZW50cyBhcmUgbmVhcmx5IGNvbnRpbnVvdXMgYXMgc2Nyb2xsaW5nIGlzIGhhcHBlbmluZywgYW5kIHBlcmhhcHMgd2UgZG9uJ3RcbiAqIHdhbnQgdG8gY2FsbCBhbiBleHBlbnNpdmUgVUkgdXBkYXRpbmcgZnVuY3Rpb24gZXZlcnkgdGltZSBhIHNjcm9sbCBldmVudCBpc1xuICogZmlyZWQuIFdlIGNhbiB0aHJvdHRsZSB0aGUgaW5wdXQgY2hhbm5lbCBhbmQgbWFrZSBpdCBvbmx5IG9mZmVyIHVwIHRoZSBzY3JvbGxcbiAqIGV2ZW50cyBvbmNlIGV2ZXJ5IDEwMCBtaWxsaXNlY29uZHMsIGZvciBpbnN0YW5jZS5cbiAqXG4gKiBUaHJvdHRsaW5nIGlzIGVmZmVjdGVkIGJ5IGNyZWF0aW5nIGEgbmV3IGNoYW5uZWwgYXMgYSB0aHJvdHRsZWQgZGVzdGluYXRpb25cbiAqIGZvciB2YWx1ZXMgc2VudCB0byB0aGUgc291cmNlIGNoYW5uZWwuIFZhbHVlcyB3aWxsIG9ubHkgYXBwZWFyIG9uIHRoYXRcbiAqIGRlc3RpbmF0aW9uIGNoYW5uZWwgb25jZSBwZXIgZGVsYXkgaW50ZXJ2YWw7IG90aGVyIHZhbHVlcyB0aGF0IGFyZSBwdXQgb250b1xuICogdGhlIHNvdXJjZSBjaGFubmVsIGluIHRoZSBtZWFudGltZSBhcmUgZGlzY2FyZGVkLlxuICpcbiAqIFRoZSBgZGVsYXlgIHBhcmFtZXRlciBjb250cm9scyBob3cgb2Z0ZW4gYSB2YWx1ZSBjYW4gYmVjb21lIGF2YWlsYWJsZSBvbiB0aGVcbiAqIGRlc3RpbmF0aW9uIGNoYW5uZWwuIFdoZW4gdGhlIGZpcnN0IHZhbHVlIGlzIHNlbnQgdG8gdGhlIHNvdXJjZSBjaGFubmVsLCBpdFxuICogaXMgaW1tZWRpYXRlbHkgc2VudCB0byB0aGUgZGVzdGluYXRpb24gY2hhbm5lbCBhcyB3ZWxsIGFuZCB0aGUgZGVsYXkgYmVnaW5zLlxuICogQW55IGZ1cnRoZXIgdmFsdWVzIHNlbnQgdG8gdGhlIHNvdXJjZSBjaGFubmVsIGR1cmluZyB0aGF0IGRlbGF5IGFyZSAqbm90KlxuICogcGFzc2VkIHRocm91Z2g7IG9ubHkgd2hlbiB0aGUgZGVsYXkgZXhwaXJlcyBpcyB0aGUgbGFzdCBpbnB1dCB2YWx1ZSBtYWRlXG4gKiBhdmFpbGFibGUgb24gdGhlIGRlc3RpbmF0aW9uIGNoYW5uZWwuIFRoZSBkZWxheSB0aGVuIGJlZ2lucyBhZ2Fpbiwgc28gdGhhdFxuICogZnVydGhlciBpbnB1dHMgYXJlIHNxdWVsY2hlZCB1bnRpbCAqdGhhdCogZGVsYXkgcGFzc2VzLiBUaHJvdHRsaW5nIGNvbnRpbnVlcyxcbiAqIG9ubHkgYWxsb3dpbmcgb25lIHZhbHVlIHRocm91Z2ggcGVyIGludGVydmFsLCB1bnRpbCBhbiBlbnRpcmUgaW50ZXJ2YWwgcGFzc2VzXG4gKiB3aXRob3V0IGlucHV0LlxuICpcbiAqIFRoaXMgYmVoYXZpb3IgY2FuIGJlIG1vZGlmaWVkIGJ5IHRocmVlIG9wdGlvbnM6IGBsZWFkaW5nYCwgYHRyYWlsaW5nYCwgYW5kXG4gKiBgY2FuY2VsYC5cbiAqXG4gKiBJZiBib3RoIGBsZWFkaW5nYCBhbmQgYHRyYWlsaW5nYCBhcmUgYHRydWVgLCB2YWx1ZXMgd2lsbCBub3QgYmUgZHVwbGljYXRlZC5cbiAqIFRoZSBmaXJzdCB2YWx1ZSBzZW50IHRvIHRoZSBzb3VyY2UgY2hhbm5lbCB3aWxsIGJlIHB1dCBvbnRvIHRoZSBkZXN0aW5hdGlvblxuICogY2hhbm5lbCBpbW1lZGlhdGVseSAocGVyIGBsZWFkaW5nYCkgYW5kIHRoZSBkZWxheSB3aWxsIGJlZ2luLCBidXQgYSB2YWx1ZVxuICogd2lsbCBvbmx5IGJlIG1hZGUgYXZhaWxhYmxlIG9uIHRoZSBkZXN0aW5hdGlvbiBjaGFubmVsIGF0IHRoZSBlbmQgb2YgdGhlXG4gKiBkZWxheSAocGVyIGB0cmFpbGluZ2ApIGlmICphbm90aGVyKiBpbnB1dCB2YWx1ZSB3YXMgc2VudCB0byB0aGUgc291cmNlXG4gKiBjaGFubmVsIGJlZm9yZSB0aGUgZGVsYXkgZXhwaXJlZC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNoYW5rby9vcGVyYXRpb25zfk9wZXJhdGlvbnNcbiAqIEBwYXJhbSB7bW9kdWxlOmNoYW5rby9jaGFubmVsfkNoYW5uZWx9IHNyYyBUaGUgc291cmNlIGNoYW5uZWwuXG4gKiBAcGFyYW0geyhudW1iZXJ8bW9kdWxlOmNoYW5rby9idWZmZXJ+QnVmZmVyKX0gW2J1ZmZlcj0wXSBBIGJ1ZmZlciB1c2VkIHRvXG4gKiAgICAgY3JlYXRlIHRoZSBkZXN0aW5hdGlvbiBjaGFubmVsLiBJZiB0aGlzIGlzIGEgbnVtYmVyLCBhXG4gKiAgICAge0BsaW5rIG1vZHVsZTpjaGFua28vYnVmZmVyfkZpeGVkQnVmZmVyfEZpeGVkQnVmZmVyfSBvZiB0aGF0IHNpemUgd2lsbCBiZVxuICogICAgIHVzZWQuIElmIHRoaXMgaXMgYDBgIG9yIG5vdCBwcmVzZW50LCB0aGUgY2hhbm5lbCB3aWxsIGJlIHVuYnVmZmVyZWQuXG4gKiBAcGFyYW0ge251bWJlcn0gZGVsYXkgVGhlIHRocm90dGxpbmcgZGVsYXksIGluIG1pbGxpc2Vjb25kcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gQSBzZXQgb2Ygb3B0aW9ucyB0byBmdXJ0aGVyIGNvbmZpZ3VyZSB0aGVcbiAqIHRocm90dGxpbmcuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmxlYWRpbmc9dHJ1ZV0gTWFrZXMgdGhlIHZhbHVlIHRoYXQgdHJpZ2dlcmVkIHRoZVxuICogICAgIHRocm90dGxpbmcgaW1tZWRpYXRlbHkgYXZhaWxhYmxlIG9uIHRoZSBkZXN0aW5hdGlvbiBjaGFubmVsIGJlZm9yZVxuICogICAgIGJlZ2lubmluZyB0aGUgZGVsYXkuIElmIHRoaXMgaXMgYGZhbHNlYCwgdGhlIGZpcnN0IHZhbHVlIHdpbGwgbm90IGJlIHB1dFxuICogICAgIG9udG8gdGhlIGRlc3RpbmF0aW9uIGNoYW5uZWwgdW50aWwgYSBmdWxsIGRlbGF5IGludGVydmFsIHBhc3Nlcy5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMudHJhaWxpbmc9dHJ1ZV0gTWFrZXMgdGhlIGxhc3QgdmFsdWUgcHV0IG9udG8gdGhlXG4gKiAgICAgc291cmNlIGNoYW5uZWwgYXZhaWxhYmxlIG9uIHRoZSBkZXN0aW5hdGlvbiBjaGFubmVsIHdoZW4gdGhlIGRlbGF5XG4gKiAgICAgZXhwaXJlcy4gSWYgdGhpcyBpcyBgZmFsc2VgLCBhbnkgaW5wdXRzIHRoYXQgY29tZSBpbiBkdXJpbmcgdGhlIGRlbGF5IGFyZVxuICogICAgIGlnbm9yZWQsIGFuZCB0aGUgbmV4dCB2YWx1ZSBpcyBub3QgcHV0IG9udG8gdGhlIGRlc3RpbmF0aW9uIGNoYW5uZWwgdW50aWxcbiAqICAgICB0aGUgZmlyc3QgaW5wdXQgKmFmdGVyKiB0aGUgZGVsYXkgZXhwaXJlcy5cbiAqIEBwYXJhbSB7bW9kdWxlOmNoYW5rby9jaGFubmVsfkNoYW5uZWx9IFtvcHRpb25zLmNhbmNlbF0gQSBjaGFubmVsIHVzZWQgdG9cbiAqICAgICBzaWduYWwgYSBjYW5jZWxsYXRpb24gb2YgdGhlIHRocm90dGxpbmcuIEFueSB2YWx1ZSBwdXQgb250byB0aGlzIGNoYW5uZWxcbiAqICAgICB3aWxsIGNhbmNlbCB0aGUgY3VycmVudCB0aHJvdHRsaW5nIG9wZXJhdGlvbiwgY2xvc2luZyB0aGUgb3V0cHV0IGNoYW5uZWxcbiAqICAgICBhbmQgZGlzY2FyZGluZyBhbnkgdmFsdWVzIHRoYXQgd2VyZSB3YWl0aW5nIGZvciB0aGUgdGhyb3R0bGUgdGhyZXNob2xkXG4gKiAgICAgdGltZXIgdG8gYmUgc2VudCB0byB0aGUgb3V0cHV0LlxuICogQHJldHVybiB7bW9kdWxlOmNoYW5rby9jaGFubmVsfkNoYW5uZWx9fSBUaGUgbmV3bHktY3JlYXRlZCBkZXN0aW5hdGlvblxuICogICAgIGNoYW5uZWwsIHdoZXJlIGFsbCBvZiB0aGUgdmFsdWVzIHdpbGwgYmUgdGhyb3R0bGVkIGZyb20gdGhlIHNvdXJjZVxuICogICAgIGNoYW5uZWwuXG4gKi9cbmZ1bmN0aW9uIHRocm90dGxlKHNyYywgYnVmZmVyLCBkZWxheSwgb3B0aW9ucykge1xuICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICBsZWFkaW5nOiB0cnVlLFxuICAgIHRyYWlsaW5nOiB0cnVlLFxuICAgIGNhbmNlbDogY2hhbigpXG4gIH07XG4gIGNvbnN0IFtidWYsIGRlbCwgb3B0c10gPSBpc051bWJlcihkZWxheSlcbiAgICA/IFtidWZmZXIsIGRlbGF5LCBPYmplY3QuYXNzaWduKGRlZmF1bHRzLCBvcHRpb25zID8/IHt9KV1cbiAgICA6IFswLCBidWZmZXIsIE9iamVjdC5hc3NpZ24oZGVmYXVsdHMsIGRlbGF5ID8/IHt9KV07XG5cbiAgY29uc3QgZHN0ID0gY2hhbihidWYpO1xuICBjb25zdCB7IGxlYWRpbmcsIHRyYWlsaW5nLCBjYW5jZWwgfSA9IG9wdHM7XG5cbiAgZ28oYXN5bmMgKCkgPT4ge1xuICAgIGxldCB0aW1lciA9IGNoYW4oKTtcbiAgICBsZXQgY3VycmVudCA9IENMT1NFRDtcblxuICAgIGZvciAoOzspIHtcbiAgICAgIGNvbnN0IHsgdmFsdWUsIGNoYW5uZWwgfSA9IGF3YWl0IHNlbGVjdChbc3JjLCB0aW1lciwgY2FuY2VsXSk7XG5cbiAgICAgIGlmIChjaGFubmVsID09PSBjYW5jZWwpIHtcbiAgICAgICAgY2xvc2UoZHN0KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGlmIChjaGFubmVsID09PSBzcmMpIHtcbiAgICAgICAgaWYgKHZhbHVlID09PSBDTE9TRUQpIHtcbiAgICAgICAgICBjbG9zZShkc3QpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdGltaW5nID0gaXNUaW1lZCh0aW1lcik7XG4gICAgICAgIGlmICghdGltaW5nKSB7XG4gICAgICAgICAgdGltZXIgPSB0aW1lZENoYW4oZGVsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChsZWFkaW5nKSB7XG4gICAgICAgICAgaWYgKCF0aW1pbmcpIHtcbiAgICAgICAgICAgIGF3YWl0IHNlbmQoZHN0LCB2YWx1ZSk7XG4gICAgICAgICAgfSBlbHNlIGlmICh0cmFpbGluZykge1xuICAgICAgICAgICAgY3VycmVudCA9IHZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0cmFpbGluZykge1xuICAgICAgICAgIGN1cnJlbnQgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0cmFpbGluZyAmJiBjdXJyZW50ICE9PSBDTE9TRUQpIHtcbiAgICAgICAgdGltZXIgPSB0aW1lZENoYW4oZGVsKTtcbiAgICAgICAgYXdhaXQgc2VuZChkc3QsIGN1cnJlbnQpO1xuICAgICAgICBjdXJyZW50ID0gQ0xPU0VEO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGltZXIgPSBjaGFuKCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZHN0O1xufVxuXG5leHBvcnQgeyBkZWJvdW5jZSwgdGhyb3R0bGUgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=