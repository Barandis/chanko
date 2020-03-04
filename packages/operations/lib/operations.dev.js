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
/*! exports provided: map, merge, partition, pipe, split, tap, untap, untapAll, reduce, toChannel, toArray */
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

/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */



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

function isNumber(x) {
  return Object.prototype.toString.call(x) === "[object Number]" && isFinite(x);
}
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

  if (bfs.length === 1 && isNumber(bfs[0])) {
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



/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vcGVyYXRpb25zL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9vcGVyYXRpb25zL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29wZXJhdGlvbnMvL2hvbWUvYmFyYW5kaXMvRGV2ZWxvcG1lbnQvcHJvamVjdHMvY2hhbmtvL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jSXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vb3BlcmF0aW9ucy8uLi9jaGFubmVscy9saWIvY2hhbmtvLm1pbi5qcyIsIndlYnBhY2s6Ly9vcGVyYXRpb25zLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL29wZXJhdGlvbnMvLi9zcmMvbW9kdWxlcy9jb252ZXJzaW9uLmpzIiwid2VicGFjazovL29wZXJhdGlvbnMvLi9zcmMvbW9kdWxlcy9mbG93LmpzIl0sIm5hbWVzIjpbImUiLCJ0IiwibW9kdWxlIiwiZXhwb3J0cyIsIm4iLCJyIiwibyIsImkiLCJsIiwiY2FsbCIsIm0iLCJjIiwiZCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwidmFsdWUiLCJfX2VzTW9kdWxlIiwiY3JlYXRlIiwiYmluZCIsImRlZmF1bHQiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsInAiLCJzIiwidSIsImEiLCJmIiwic3RvcmUiLCJ3cml0YWJsZSIsInBvaW50ZXIiLCJsZW5ndGgiLCJwdXNoIiwic2xpY2UiLCJ2IiwiYiIsImJhdGNoU2l6ZSIsImRpc3BhdGNoTWV0aG9kIiwiTWVzc2FnZUNoYW5uZWwiLCJwb3J0MSIsIm9ubWVzc2FnZSIsInBvcnQyIiwicG9zdE1lc3NhZ2UiLCJzZXRUaW1lb3V0IiwiYXNzaWduIiwic2V0SW1tZWRpYXRlIiwid3JhcHBlZCIsIkZ1bmN0aW9uIiwid2luZG93IiwiYXBwbHkiLCJhcmd1bWVudHMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInRoZW4iLCJkb25lIiwicmVqZWN0IiwibmV4dCIsImtleSIsImFyZyIsIl9pbnZva2UiLCJyZXR1cm4iLCJhc3luY0l0ZXJhdG9yIiwidGhyb3ciLCJzZWxmIiwiX2lkIiwiX2NsZWFyRm4iLCJjbGVhclRpbWVvdXQiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJjbG9zZSIsInVucmVmIiwicmVmIiwiZW5yb2xsIiwiX2lkbGVUaW1lb3V0SWQiLCJfaWRsZVRpbWVvdXQiLCJ1bmVucm9sbCIsIl91bnJlZkFjdGl2ZSIsImFjdGl2ZSIsIl9vblRpbWVvdXQiLCJjbGVhckltbWVkaWF0ZSIsImRvY3VtZW50IiwiZ2V0UHJvdG90eXBlT2YiLCJ0b1N0cmluZyIsInByb2Nlc3MiLCJuZXh0VGljayIsImltcG9ydFNjcmlwdHMiLCJkYXRhIiwiY3JlYXRlRWxlbWVudCIsImRvY3VtZW50RWxlbWVudCIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlbW92ZUNoaWxkIiwiYXBwZW5kQ2hpbGQiLCJNYXRoIiwicmFuZG9tIiwic291cmNlIiwiaW5kZXhPZiIsImFkZEV2ZW50TGlzdGVuZXIiLCJhdHRhY2hFdmVudCIsIkFycmF5IiwiY2FsbGJhY2siLCJhcmdzIiwiRXJyb3IiLCJjb25jYXQiLCJydW4iLCJmdW4iLCJhcnJheSIsInRpdGxlIiwiYnJvd3NlciIsImVudiIsImFyZ3YiLCJ2ZXJzaW9uIiwidmVyc2lvbnMiLCJvbiIsImFkZExpc3RlbmVyIiwib25jZSIsIm9mZiIsInJlbW92ZUxpc3RlbmVyIiwicmVtb3ZlQWxsTGlzdGVuZXJzIiwiZW1pdCIsInByZXBlbmRMaXN0ZW5lciIsInByZXBlbmRPbmNlTGlzdGVuZXIiLCJsaXN0ZW5lcnMiLCJiaW5kaW5nIiwiY3dkIiwiY2hkaXIiLCJ1bWFzayIsInF1ZXVlIiwic2l6ZSIsImgiLCJ5IiwiTyIsImoiLCJpbml0IiwiZm9yIiwic3RlcCIsInJlc3VsdCIsInJlZHVjZWQiLCJnIiwidyIsIlQiLCJTIiwieCIsIkUiLCJJIiwiY2xvc2VkIiwiY29tbWl0IiwiYnVmZmVyIiwieGZvcm0iLCJyZWN2cyIsIl8iLCJkaXJ0eVNlbmRzIiwibWF4RGlydHkiLCJzZW5kcyIsImhhbmRsZXIiLCJtYXhRdWV1ZWQiLCJNIiwiZGlydHlSZWN2cyIsImsiLCJQIiwiY2hhbm5lbCIsIkEiLCJwcmlvcml0eSIsImZsb29yIiwiaXNBcnJheSIsIkMiLCJEIiwiTCIsInEiLCJRIiwiRiIsIk4iLCJ6IiwiUiIsInRyYW5zZHVjZXIiLCJ0aW1lciIsImJ1ZiIsIlUiLCJpc0J1ZmZlcmVkIiwiaXNUaW1lZCIsIlYiLCJCIiwiRyIsIiQiLCJIIiwiWCIsIlkiLCJKIiwiSyIsIlciLCJpc1Byb3RvdHlwZU9mIiwiWiIsImVlIiwidGUiLCJuZSIsImFsbCIsInJlZHVjZSIsImZuIiwib3V0cHV0IiwiY2hhbiIsImdvIiwiYWNjIiwic2VuZEFzeW5jIiwidG9DaGFubmVsIiwiaXRlcmFibGUiLCJpdGVtIiwic2VuZCIsInRvQXJyYXkiLCJpbnB1dCIsIlRBUFMiLCJpc051bWJlciIsImlzRmluaXRlIiwicGlwZSIsInNyYyIsImRzdCIsImtlZXBPcGVuIiwicmVjdiIsIkNMT1NFRCIsInBhcnRpdGlvbiIsInRCdWZmZXIiLCJmQnVmZmVyIiwidERzdCIsImZEc3QiLCJtZXJnZSIsInNyY3MiLCJpbnB1dHMiLCJzZWxlY3QiLCJzcGxpY2UiLCJzcGxpdCIsImJ1ZmZlcnMiLCJiZnMiLCJjb3VudCIsImRzdHMiLCJtYXAiLCJiZiIsIm1ha2VUYXAiLCJjb25maWd1cmFibGUiLCJ0YXAiLCJpbmNsdWRlcyIsInVudGFwIiwidGFwcyIsImluZGV4IiwidW50YXBBbGwiLCJzcmNsZW4iLCJ2YWx1ZXMiLCJjYWxsYmFja3MiLCJ0ZW1wIiwicmVjdkFzeW5jIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFF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QWY7QUFRRDs7QUFFRG1NLDZEQUFFLENBQUMsWUFBWTtBQUNiLGFBQVM7QUFDUCtCLFdBQUssR0FBR1ksTUFBUjs7QUFDQSxXQUFLLElBQUk5TyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHOE8sTUFBcEIsRUFBNEI5TyxDQUFDLEVBQTdCLEVBQWlDO0FBQy9Ca1AsMEVBQVMsQ0FBQ3ZCLElBQUksQ0FBQzNOLENBQUQsQ0FBTCxFQUFVZ1AsU0FBUyxDQUFDaFAsQ0FBRCxDQUFuQixDQUFUO0FBQ0Q7O0FBQ0QsWUFBTStPLE1BQU0sR0FBRyxNQUFNNUIsNkRBQUksQ0FBQzhCLElBQUQsQ0FBekI7O0FBQ0EsV0FBSyxNQUFNck8sS0FBWCxJQUFvQm1PLE1BQXBCLEVBQTRCO0FBQzFCLFlBQUluTyxLQUFLLEtBQUt3TSx1REFBZCxFQUFzQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBbkosd0VBQUssQ0FBQ2dKLEdBQUQsQ0FBTDs7QUFDQSxlQUFLLE1BQU1ELEdBQVgsSUFBa0JXLElBQWxCLEVBQXdCO0FBQ3RCMUosMEVBQUssQ0FBQytJLEdBQUQsQ0FBTDtBQUNEOztBQUNEO0FBQ0Q7QUFDRjs7QUFDRCxZQUFNUCw2REFBSSxDQUFDUSxHQUFELEVBQU1qQixFQUFFLENBQUMsR0FBRytDLE1BQUosQ0FBUixDQUFWO0FBQ0Q7QUFDRixHQXRCQyxDQUFGO0FBd0JBLFNBQU85QixHQUFQO0FBQ0QiLCJmaWxlIjoib3BlcmF0aW9ucy5kZXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJvcGVyYXRpb25zXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIm9wZXJhdGlvbnNcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZnVuY3Rpb24gX2FzeW5jSXRlcmF0b3IoaXRlcmFibGUpIHtcbiAgdmFyIG1ldGhvZDtcblxuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGlmIChTeW1ib2wuYXN5bmNJdGVyYXRvcikge1xuICAgICAgbWV0aG9kID0gaXRlcmFibGVbU3ltYm9sLmFzeW5jSXRlcmF0b3JdO1xuICAgICAgaWYgKG1ldGhvZCAhPSBudWxsKSByZXR1cm4gbWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgIH1cblxuICAgIGlmIChTeW1ib2wuaXRlcmF0b3IpIHtcbiAgICAgIG1ldGhvZCA9IGl0ZXJhYmxlW1N5bWJvbC5pdGVyYXRvcl07XG4gICAgICBpZiAobWV0aG9kICE9IG51bGwpIHJldHVybiBtZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgfVxuICB9XG5cbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk9iamVjdCBpcyBub3QgYXN5bmMgaXRlcmFibGVcIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FzeW5jSXRlcmF0b3I7IiwiLyohXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIE90dGVyc29uXG4gKiBcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIFxuICogZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgXG4gKiByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3IgXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKiBcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIFxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKiBcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgXG4gKiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4gKiBcbiAqL1xuIWZ1bmN0aW9uKGUsdCl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9dCgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW10sdCk6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/ZXhwb3J0cy5jaGFua289dCgpOmUuY2hhbmtvPXQoKX0odGhpcywoZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7dmFyIHQ9e307ZnVuY3Rpb24gbihyKXtpZih0W3JdKXJldHVybiB0W3JdLmV4cG9ydHM7dmFyIG89dFtyXT17aTpyLGw6ITEsZXhwb3J0czp7fX07cmV0dXJuIGVbcl0uY2FsbChvLmV4cG9ydHMsbyxvLmV4cG9ydHMsbiksby5sPSEwLG8uZXhwb3J0c31yZXR1cm4gbi5tPWUsbi5jPXQsbi5kPWZ1bmN0aW9uKGUsdCxyKXtuLm8oZSx0KXx8T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCx7ZW51bWVyYWJsZTohMCxnZXQ6cn0pfSxuLnI9ZnVuY3Rpb24oZSl7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLnRvU3RyaW5nVGFnJiZPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxTeW1ib2wudG9TdHJpbmdUYWcse3ZhbHVlOlwiTW9kdWxlXCJ9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX0sbi50PWZ1bmN0aW9uKGUsdCl7aWYoMSZ0JiYoZT1uKGUpKSw4JnQpcmV0dXJuIGU7aWYoNCZ0JiZcIm9iamVjdFwiPT10eXBlb2YgZSYmZSYmZS5fX2VzTW9kdWxlKXJldHVybiBlO3ZhciByPU9iamVjdC5jcmVhdGUobnVsbCk7aWYobi5yKHIpLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyLFwiZGVmYXVsdFwiLHtlbnVtZXJhYmxlOiEwLHZhbHVlOmV9KSwyJnQmJlwic3RyaW5nXCIhPXR5cGVvZiBlKWZvcih2YXIgbyBpbiBlKW4uZChyLG8sZnVuY3Rpb24odCl7cmV0dXJuIGVbdF19LmJpbmQobnVsbCxvKSk7cmV0dXJuIHJ9LG4ubj1mdW5jdGlvbihlKXt2YXIgdD1lJiZlLl9fZXNNb2R1bGU/ZnVuY3Rpb24oKXtyZXR1cm4gZS5kZWZhdWx0fTpmdW5jdGlvbigpe3JldHVybiBlfTtyZXR1cm4gbi5kKHQsXCJhXCIsdCksdH0sbi5vPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHQpfSxuLnA9XCJcIixuKG4ucz0xMCl9KFtmdW5jdGlvbihlLHQsbil7XCJ1c2Ugc3RyaWN0XCI7bi5kKHQsXCJhXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIHJ9KSksbi5kKHQsXCJmXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIHV9KSksbi5kKHQsXCJiXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIGN9KSksbi5kKHQsXCJkXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIGl9KSksbi5kKHQsXCJjXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIGF9KSksbi5kKHQsXCJlXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIGZ9KSk7Y29uc3Qgcj1TeW1ib2woXCJFTVBUWVwiKSxvPVN5bWJvbChcIlFVRVVFXCIpO2Z1bmN0aW9uIHUoKXtyZXR1cm4gT2JqZWN0LmNyZWF0ZShudWxsLHtzdG9yZTp7dmFsdWU6W10sd3JpdGFibGU6ITB9LHBvaW50ZXI6e3ZhbHVlOjAsd3JpdGFibGU6ITB9LFtvXTp7dmFsdWU6ITB9fSl9ZnVuY3Rpb24gYyhlKXtyZXR1cm4gZS5zdG9yZS5sZW5ndGgtZS5wb2ludGVyfWZ1bmN0aW9uIGkoZSx0KXtlLnN0b3JlLnB1c2godCl9ZnVuY3Rpb24gYShlKXtpZigwPT09ZS5zdG9yZS5sZW5ndGgpcmV0dXJuIHI7Y29uc3QgdD1lLnN0b3JlW2UucG9pbnRlcl07cmV0dXJuIDIqKytlLnBvaW50ZXI+PWUuc3RvcmUubGVuZ3RoJiYoZS5zdG9yZT1lLnN0b3JlLnNsaWNlKGUucG9pbnRlciksZS5wb2ludGVyPTApLHR9ZnVuY3Rpb24gZihlLHQpe2ZvcihsZXQgbj0wLHI9YyhlKTtuPHI7bisrKXtjb25zdCBuPWEoZSk7dChuKSYmaShlLG4pfX19LGZ1bmN0aW9uKGUsdCxuKXtcInVzZSBzdHJpY3RcIjsoZnVuY3Rpb24oZSl7bi5kKHQsXCJiXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIHV9KSksbi5kKHQsXCJhXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIGN9KSksbi5kKHQsXCJjXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIGl9KSksbi5kKHQsXCJkXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIHZ9KSksbi5kKHQsXCJlXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIGJ9KSk7dmFyIHI9bigwKTtjb25zdCBvPU9iamVjdChyLmYpKCksdT1TeW1ib2woXCJTRVRfSU1NRURJQVRFXCIpLGM9U3ltYm9sKFwiTUVTU0FHRV9DSEFOTkVMXCIpLGk9U3ltYm9sKFwiU0VUX1RJTUVPVVRcIiksYT17YmF0Y2hTaXplOjEwMjQsZGlzcGF0Y2hNZXRob2Q6dX07bGV0IGY9ZCgpLHM9ITEsbD0hMDtmdW5jdGlvbiBkKCl7c3dpdGNoKGZ1bmN0aW9uKCl7c3dpdGNoKGEuZGlzcGF0Y2hNZXRob2Qpe2Nhc2UgYzpyZXR1cm5cInVuZGVmaW5lZFwiIT10eXBlb2YgTWVzc2FnZUNoYW5uZWw/YzppO2Nhc2UgaTpyZXR1cm4gaTtkZWZhdWx0OnJldHVybiB2b2lkIDAhPT1lP3U6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIE1lc3NhZ2VDaGFubmVsP2M6aX19KCkpe2Nhc2UgdTpyZXR1cm4oKT0+e2wmJnN8fChsPSEwLGUobSkpfTtjYXNlIGM6e2NvbnN0IGU9bmV3IE1lc3NhZ2VDaGFubmVsO3JldHVybiBlLnBvcnQxLm9ubWVzc2FnZT0oKT0+bSgpLCgpPT57bCYmc3x8KGw9ITAsZS5wb3J0Mi5wb3N0TWVzc2FnZSgwKSl9fWNhc2UgaTpyZXR1cm4oKT0+e2wmJnN8fChsPSEwLHNldFRpbWVvdXQobSwwKSl9fX1mdW5jdGlvbiBtKCl7cz0hMCxsPSExO2xldCBlPTA7Zm9yKDs7KXtjb25zdCB0PU9iamVjdChyLmMpKG8pO2lmKHQ9PT1yLmEpYnJlYWs7aWYodCgpLGU+PWEuYmF0Y2hTaXplKWJyZWFrO2UrKyxzPSExLE9iamVjdChyLmIpKG8pJiZmKCl9fWZ1bmN0aW9uIHYoZT17fSl7Zm9yKGNvbnN0IHQgaW4gYSl0IGluIGUmJihhW3RdPWVbdF0sXCJkaXNwYXRjaE1ldGhvZFwiPT09dCYmKGY9ZCgpKSk7cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sYSl9ZnVuY3Rpb24gYihlKXtPYmplY3Qoci5kKShvLGUpLGYoKX19KS5jYWxsKHRoaXMsbig3KS5zZXRJbW1lZGlhdGUpfSxmdW5jdGlvbihlLHQpe2UuZXhwb3J0cz1mdW5jdGlvbihlKXt0aGlzLndyYXBwZWQ9ZX19LGZ1bmN0aW9uKGUsdCl7dmFyIG47bj1mdW5jdGlvbigpe3JldHVybiB0aGlzfSgpO3RyeXtuPW58fG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCl9Y2F0Y2goZSl7XCJvYmplY3RcIj09dHlwZW9mIHdpbmRvdyYmKG49d2luZG93KX1lLmV4cG9ydHM9bn0sZnVuY3Rpb24oZSx0LG4pe3ZhciByPW4oMik7ZS5leHBvcnRzPWZ1bmN0aW9uKGUpe3JldHVybiBuZXcgcihlKX19LGZ1bmN0aW9uKGUsdCxuKXt2YXIgcj1uKDYpO2UuZXhwb3J0cz1mdW5jdGlvbihlKXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gbmV3IHIoZS5hcHBseSh0aGlzLGFyZ3VtZW50cykpfX19LGZ1bmN0aW9uKGUsdCxuKXt2YXIgcj1uKDIpO2Z1bmN0aW9uIG8oZSl7dmFyIHQsbjtmdW5jdGlvbiBvKHQsbil7dHJ5e3ZhciBjPWVbdF0obiksaT1jLnZhbHVlLGE9aSBpbnN0YW5jZW9mIHI7UHJvbWlzZS5yZXNvbHZlKGE/aS53cmFwcGVkOmkpLnRoZW4oKGZ1bmN0aW9uKGUpe2E/byhcInJldHVyblwiPT09dD9cInJldHVyblwiOlwibmV4dFwiLGUpOnUoYy5kb25lP1wicmV0dXJuXCI6XCJub3JtYWxcIixlKX0pLChmdW5jdGlvbihlKXtvKFwidGhyb3dcIixlKX0pKX1jYXRjaChlKXt1KFwidGhyb3dcIixlKX19ZnVuY3Rpb24gdShlLHIpe3N3aXRjaChlKXtjYXNlXCJyZXR1cm5cIjp0LnJlc29sdmUoe3ZhbHVlOnIsZG9uZTohMH0pO2JyZWFrO2Nhc2VcInRocm93XCI6dC5yZWplY3Qocik7YnJlYWs7ZGVmYXVsdDp0LnJlc29sdmUoe3ZhbHVlOnIsZG9uZTohMX0pfSh0PXQubmV4dCk/byh0LmtleSx0LmFyZyk6bj1udWxsfXRoaXMuX2ludm9rZT1mdW5jdGlvbihlLHIpe3JldHVybiBuZXcgUHJvbWlzZSgoZnVuY3Rpb24odSxjKXt2YXIgaT17a2V5OmUsYXJnOnIscmVzb2x2ZTp1LHJlamVjdDpjLG5leHQ6bnVsbH07bj9uPW4ubmV4dD1pOih0PW49aSxvKGUscikpfSkpfSxcImZ1bmN0aW9uXCIhPXR5cGVvZiBlLnJldHVybiYmKHRoaXMucmV0dXJuPXZvaWQgMCl9XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuYXN5bmNJdGVyYXRvciYmKG8ucHJvdG90eXBlW1N5bWJvbC5hc3luY0l0ZXJhdG9yXT1mdW5jdGlvbigpe3JldHVybiB0aGlzfSksby5wcm90b3R5cGUubmV4dD1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5faW52b2tlKFwibmV4dFwiLGUpfSxvLnByb3RvdHlwZS50aHJvdz1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5faW52b2tlKFwidGhyb3dcIixlKX0sby5wcm90b3R5cGUucmV0dXJuPWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLl9pbnZva2UoXCJyZXR1cm5cIixlKX0sZS5leHBvcnRzPW99LGZ1bmN0aW9uKGUsdCxuKXsoZnVuY3Rpb24oZSl7dmFyIHI9dm9pZCAwIT09ZSYmZXx8XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHNlbGYmJnNlbGZ8fHdpbmRvdyxvPUZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseTtmdW5jdGlvbiB1KGUsdCl7dGhpcy5faWQ9ZSx0aGlzLl9jbGVhckZuPXR9dC5zZXRUaW1lb3V0PWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyB1KG8uY2FsbChzZXRUaW1lb3V0LHIsYXJndW1lbnRzKSxjbGVhclRpbWVvdXQpfSx0LnNldEludGVydmFsPWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyB1KG8uY2FsbChzZXRJbnRlcnZhbCxyLGFyZ3VtZW50cyksY2xlYXJJbnRlcnZhbCl9LHQuY2xlYXJUaW1lb3V0PXQuY2xlYXJJbnRlcnZhbD1mdW5jdGlvbihlKXtlJiZlLmNsb3NlKCl9LHUucHJvdG90eXBlLnVucmVmPXUucHJvdG90eXBlLnJlZj1mdW5jdGlvbigpe30sdS5wcm90b3R5cGUuY2xvc2U9ZnVuY3Rpb24oKXt0aGlzLl9jbGVhckZuLmNhbGwocix0aGlzLl9pZCl9LHQuZW5yb2xsPWZ1bmN0aW9uKGUsdCl7Y2xlYXJUaW1lb3V0KGUuX2lkbGVUaW1lb3V0SWQpLGUuX2lkbGVUaW1lb3V0PXR9LHQudW5lbnJvbGw9ZnVuY3Rpb24oZSl7Y2xlYXJUaW1lb3V0KGUuX2lkbGVUaW1lb3V0SWQpLGUuX2lkbGVUaW1lb3V0PS0xfSx0Ll91bnJlZkFjdGl2ZT10LmFjdGl2ZT1mdW5jdGlvbihlKXtjbGVhclRpbWVvdXQoZS5faWRsZVRpbWVvdXRJZCk7dmFyIHQ9ZS5faWRsZVRpbWVvdXQ7dD49MCYmKGUuX2lkbGVUaW1lb3V0SWQ9c2V0VGltZW91dCgoZnVuY3Rpb24oKXtlLl9vblRpbWVvdXQmJmUuX29uVGltZW91dCgpfSksdCkpfSxuKDgpLHQuc2V0SW1tZWRpYXRlPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBzZWxmJiZzZWxmLnNldEltbWVkaWF0ZXx8dm9pZCAwIT09ZSYmZS5zZXRJbW1lZGlhdGV8fHRoaXMmJnRoaXMuc2V0SW1tZWRpYXRlLHQuY2xlYXJJbW1lZGlhdGU9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHNlbGYmJnNlbGYuY2xlYXJJbW1lZGlhdGV8fHZvaWQgMCE9PWUmJmUuY2xlYXJJbW1lZGlhdGV8fHRoaXMmJnRoaXMuY2xlYXJJbW1lZGlhdGV9KS5jYWxsKHRoaXMsbigzKSl9LGZ1bmN0aW9uKGUsdCxuKXsoZnVuY3Rpb24oZSx0KXshZnVuY3Rpb24oZSxuKXtcInVzZSBzdHJpY3RcIjtpZighZS5zZXRJbW1lZGlhdGUpe3ZhciByLG8sdSxjLGksYT0xLGY9e30scz0hMSxsPWUuZG9jdW1lbnQsZD1PYmplY3QuZ2V0UHJvdG90eXBlT2YmJk9iamVjdC5nZXRQcm90b3R5cGVPZihlKTtkPWQmJmQuc2V0VGltZW91dD9kOmUsXCJbb2JqZWN0IHByb2Nlc3NdXCI9PT17fS50b1N0cmluZy5jYWxsKGUucHJvY2Vzcyk/cj1mdW5jdGlvbihlKXt0Lm5leHRUaWNrKChmdW5jdGlvbigpe3YoZSl9KSl9OiFmdW5jdGlvbigpe2lmKGUucG9zdE1lc3NhZ2UmJiFlLmltcG9ydFNjcmlwdHMpe3ZhciB0PSEwLG49ZS5vbm1lc3NhZ2U7cmV0dXJuIGUub25tZXNzYWdlPWZ1bmN0aW9uKCl7dD0hMX0sZS5wb3N0TWVzc2FnZShcIlwiLFwiKlwiKSxlLm9ubWVzc2FnZT1uLHR9fSgpP2UuTWVzc2FnZUNoYW5uZWw/KCh1PW5ldyBNZXNzYWdlQ2hhbm5lbCkucG9ydDEub25tZXNzYWdlPWZ1bmN0aW9uKGUpe3YoZS5kYXRhKX0scj1mdW5jdGlvbihlKXt1LnBvcnQyLnBvc3RNZXNzYWdlKGUpfSk6bCYmXCJvbnJlYWR5c3RhdGVjaGFuZ2VcImluIGwuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKT8obz1sLmRvY3VtZW50RWxlbWVudCxyPWZ1bmN0aW9uKGUpe3ZhciB0PWwuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTt0Lm9ucmVhZHlzdGF0ZWNoYW5nZT1mdW5jdGlvbigpe3YoZSksdC5vbnJlYWR5c3RhdGVjaGFuZ2U9bnVsbCxvLnJlbW92ZUNoaWxkKHQpLHQ9bnVsbH0sby5hcHBlbmRDaGlsZCh0KX0pOnI9ZnVuY3Rpb24oZSl7c2V0VGltZW91dCh2LDAsZSl9OihjPVwic2V0SW1tZWRpYXRlJFwiK01hdGgucmFuZG9tKCkrXCIkXCIsaT1mdW5jdGlvbih0KXt0LnNvdXJjZT09PWUmJlwic3RyaW5nXCI9PXR5cGVvZiB0LmRhdGEmJjA9PT10LmRhdGEuaW5kZXhPZihjKSYmdigrdC5kYXRhLnNsaWNlKGMubGVuZ3RoKSl9LGUuYWRkRXZlbnRMaXN0ZW5lcj9lLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsaSwhMSk6ZS5hdHRhY2hFdmVudChcIm9ubWVzc2FnZVwiLGkpLHI9ZnVuY3Rpb24odCl7ZS5wb3N0TWVzc2FnZShjK3QsXCIqXCIpfSksZC5zZXRJbW1lZGlhdGU9ZnVuY3Rpb24oZSl7XCJmdW5jdGlvblwiIT10eXBlb2YgZSYmKGU9bmV3IEZ1bmN0aW9uKFwiXCIrZSkpO2Zvcih2YXIgdD1uZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aC0xKSxuPTA7bjx0Lmxlbmd0aDtuKyspdFtuXT1hcmd1bWVudHNbbisxXTt2YXIgbz17Y2FsbGJhY2s6ZSxhcmdzOnR9O3JldHVybiBmW2FdPW8scihhKSxhKyt9LGQuY2xlYXJJbW1lZGlhdGU9bX1mdW5jdGlvbiBtKGUpe2RlbGV0ZSBmW2VdfWZ1bmN0aW9uIHYoZSl7aWYocylzZXRUaW1lb3V0KHYsMCxlKTtlbHNle3ZhciB0PWZbZV07aWYodCl7cz0hMDt0cnl7IWZ1bmN0aW9uKGUpe3ZhciB0PWUuY2FsbGJhY2ssbj1lLmFyZ3M7c3dpdGNoKG4ubGVuZ3RoKXtjYXNlIDA6dCgpO2JyZWFrO2Nhc2UgMTp0KG5bMF0pO2JyZWFrO2Nhc2UgMjp0KG5bMF0sblsxXSk7YnJlYWs7Y2FzZSAzOnQoblswXSxuWzFdLG5bMl0pO2JyZWFrO2RlZmF1bHQ6dC5hcHBseSh2b2lkIDAsbil9fSh0KX1maW5hbGx5e20oZSkscz0hMX19fX19KFwidW5kZWZpbmVkXCI9PXR5cGVvZiBzZWxmP3ZvaWQgMD09PWU/dGhpczplOnNlbGYpfSkuY2FsbCh0aGlzLG4oMyksbig5KSl9LGZ1bmN0aW9uKGUsdCl7dmFyIG4scixvPWUuZXhwb3J0cz17fTtmdW5jdGlvbiB1KCl7dGhyb3cgbmV3IEVycm9yKFwic2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZFwiKX1mdW5jdGlvbiBjKCl7dGhyb3cgbmV3IEVycm9yKFwiY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkXCIpfWZ1bmN0aW9uIGkoZSl7aWYobj09PXNldFRpbWVvdXQpcmV0dXJuIHNldFRpbWVvdXQoZSwwKTtpZigobj09PXV8fCFuKSYmc2V0VGltZW91dClyZXR1cm4gbj1zZXRUaW1lb3V0LHNldFRpbWVvdXQoZSwwKTt0cnl7cmV0dXJuIG4oZSwwKX1jYXRjaCh0KXt0cnl7cmV0dXJuIG4uY2FsbChudWxsLGUsMCl9Y2F0Y2godCl7cmV0dXJuIG4uY2FsbCh0aGlzLGUsMCl9fX0hZnVuY3Rpb24oKXt0cnl7bj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBzZXRUaW1lb3V0P3NldFRpbWVvdXQ6dX1jYXRjaChlKXtuPXV9dHJ5e3I9XCJmdW5jdGlvblwiPT10eXBlb2YgY2xlYXJUaW1lb3V0P2NsZWFyVGltZW91dDpjfWNhdGNoKGUpe3I9Y319KCk7dmFyIGEsZj1bXSxzPSExLGw9LTE7ZnVuY3Rpb24gZCgpe3MmJmEmJihzPSExLGEubGVuZ3RoP2Y9YS5jb25jYXQoZik6bD0tMSxmLmxlbmd0aCYmbSgpKX1mdW5jdGlvbiBtKCl7aWYoIXMpe3ZhciBlPWkoZCk7cz0hMDtmb3IodmFyIHQ9Zi5sZW5ndGg7dDspe2ZvcihhPWYsZj1bXTsrK2w8dDspYSYmYVtsXS5ydW4oKTtsPS0xLHQ9Zi5sZW5ndGh9YT1udWxsLHM9ITEsZnVuY3Rpb24oZSl7aWYocj09PWNsZWFyVGltZW91dClyZXR1cm4gY2xlYXJUaW1lb3V0KGUpO2lmKChyPT09Y3x8IXIpJiZjbGVhclRpbWVvdXQpcmV0dXJuIHI9Y2xlYXJUaW1lb3V0LGNsZWFyVGltZW91dChlKTt0cnl7cihlKX1jYXRjaCh0KXt0cnl7cmV0dXJuIHIuY2FsbChudWxsLGUpfWNhdGNoKHQpe3JldHVybiByLmNhbGwodGhpcyxlKX19fShlKX19ZnVuY3Rpb24gdihlLHQpe3RoaXMuZnVuPWUsdGhpcy5hcnJheT10fWZ1bmN0aW9uIGIoKXt9by5uZXh0VGljaz1mdW5jdGlvbihlKXt2YXIgdD1uZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aC0xKTtpZihhcmd1bWVudHMubGVuZ3RoPjEpZm9yKHZhciBuPTE7bjxhcmd1bWVudHMubGVuZ3RoO24rKyl0W24tMV09YXJndW1lbnRzW25dO2YucHVzaChuZXcgdihlLHQpKSwxIT09Zi5sZW5ndGh8fHN8fGkobSl9LHYucHJvdG90eXBlLnJ1bj1mdW5jdGlvbigpe3RoaXMuZnVuLmFwcGx5KG51bGwsdGhpcy5hcnJheSl9LG8udGl0bGU9XCJicm93c2VyXCIsby5icm93c2VyPSEwLG8uZW52PXt9LG8uYXJndj1bXSxvLnZlcnNpb249XCJcIixvLnZlcnNpb25zPXt9LG8ub249YixvLmFkZExpc3RlbmVyPWIsby5vbmNlPWIsby5vZmY9YixvLnJlbW92ZUxpc3RlbmVyPWIsby5yZW1vdmVBbGxMaXN0ZW5lcnM9YixvLmVtaXQ9YixvLnByZXBlbmRMaXN0ZW5lcj1iLG8ucHJlcGVuZE9uY2VMaXN0ZW5lcj1iLG8ubGlzdGVuZXJzPWZ1bmN0aW9uKGUpe3JldHVybltdfSxvLmJpbmRpbmc9ZnVuY3Rpb24oZSl7dGhyb3cgbmV3IEVycm9yKFwicHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWRcIil9LG8uY3dkPWZ1bmN0aW9uKCl7cmV0dXJuXCIvXCJ9LG8uY2hkaXI9ZnVuY3Rpb24oZSl7dGhyb3cgbmV3IEVycm9yKFwicHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkXCIpfSxvLnVtYXNrPWZ1bmN0aW9uKCl7cmV0dXJuIDB9fSxmdW5jdGlvbihlLHQsbil7XCJ1c2Ugc3RyaWN0XCI7bi5yKHQpO3ZhciByPW4oMCk7Y29uc3Qgbz1TeW1ib2woXCJCVUZGRVJcIiksdT1TeW1ib2woXCJGSVhFRFwiKSxjPVN5bWJvbChcIkRST1BQSU5HXCIpLGk9U3ltYm9sKFwiU0xJRElOR1wiKTtmdW5jdGlvbiBhKGUpe3JldHVybiBPYmplY3QuY3JlYXRlKG51bGwse3F1ZXVlOnt2YWx1ZTpPYmplY3Qoci5mKSgpfSxzaXplOnt2YWx1ZTplfSxbb106e3ZhbHVlOnV9fSl9ZnVuY3Rpb24gZihlKXtyZXR1cm4gT2JqZWN0LmNyZWF0ZShudWxsLHtxdWV1ZTp7dmFsdWU6T2JqZWN0KHIuZikoKX0sc2l6ZTp7dmFsdWU6ZX0sW29dOnt2YWx1ZTpjfX0pfWZ1bmN0aW9uIHMoZSl7cmV0dXJuIE9iamVjdC5jcmVhdGUobnVsbCx7cXVldWU6e3ZhbHVlOk9iamVjdChyLmYpKCl9LHNpemU6e3ZhbHVlOmV9LFtvXTp7dmFsdWU6aX19KX1mdW5jdGlvbiBsKGUpe3JldHVybiBlLnNpemV9ZnVuY3Rpb24gZChlKXtyZXR1cm4gT2JqZWN0KHIuYikoZS5xdWV1ZSl9ZnVuY3Rpb24gbShlKXtyZXR1cm4gZVtvXT09PXUmJk9iamVjdChyLmIpKGUucXVldWUpPj1lLnNpemV9ZnVuY3Rpb24gdihlLC4uLnQpe3N3aXRjaChlW29dKXtjYXNlIHU6Zm9yKGNvbnN0IG4gb2YgdClPYmplY3Qoci5kKShlLnF1ZXVlLG4pO2JyZWFrO2Nhc2UgYzpmb3IoY29uc3QgbiBvZiB0KWQoZSk8bChlKSYmT2JqZWN0KHIuZCkoZS5xdWV1ZSxuKTticmVhaztjYXNlIGk6Zm9yKGNvbnN0IG4gb2YgdClkKGUpPj1sKGUpJiZPYmplY3Qoci5jKShlLnF1ZXVlKSxPYmplY3Qoci5kKShlLnF1ZXVlLG4pO2JyZWFrO2RlZmF1bHQ6cmV0dXJufX1mdW5jdGlvbiBiKGUpe3JldHVybiBPYmplY3Qoci5jKShlLnF1ZXVlKX12YXIgcD1uKDQpLGg9bi5uKHApLHk9big1KSxPPW4ubih5KTtjb25zdCBqPU9iamVjdC5jcmVhdGUobnVsbCx7aW5pdDp7dmFsdWU6U3ltYm9sLmZvcihcInRyYW5zZHVjZXIvaW5pdFwiKX0sc3RlcDp7dmFsdWU6U3ltYm9sLmZvcihcInRyYW5zZHVjZXIvc3RlcFwiKX0scmVzdWx0Ont2YWx1ZTpTeW1ib2wuZm9yKFwidHJhbnNkdWNlci9yZXN1bHRcIil9LHJlZHVjZWQ6e3ZhbHVlOlN5bWJvbC5mb3IoXCJ0cmFuc2R1Y2VyL3JlZHVjZWRcIil9LHZhbHVlOnt2YWx1ZTpTeW1ib2wuZm9yKFwidHJhbnNkdWNlci92YWx1ZVwiKX19KTt2YXIgZz1uKDEpO2NvbnN0IHc9U3ltYm9sKFwiQ0xPU0VEXCIpLFQ9U3ltYm9sKFwiQk9YXCIpO2Z1bmN0aW9uIFMoZSl7cmV0dXJuISEobnVsbD09ZT92b2lkIDA6ZVtUXSl9ZnVuY3Rpb24geChlKXtyZXR1cm4hIShudWxsPT1lP3ZvaWQgMDplW2oucmVkdWNlZF0pfWZ1bmN0aW9uIEUoZSl7cmV0dXJuIE9iamVjdC5jcmVhdGUobnVsbCx7dmFsdWU6e3ZhbHVlOmUsd3JpdGFibGU6ITB9LFtUXTp7dmFsdWU6ITB9fSl9ZnVuY3Rpb24gSShlLHQsbil7aWYodD09PXcpdGhyb3cgRXJyb3IoXCJDYW5ub3Qgc2VuZCBDTE9TRUQgdG8gYSBjaGFubmVsXCIpO2lmKGUuY2xvc2VkKXJldHVybiBuLmNvbW1pdCgpLEUoITEpO2xldCBvLHU7aWYoZS5idWZmZXImJiFtKGUuYnVmZmVyKSl7bi5jb21taXQoKTtjb25zdCBjPXgoZS54Zm9ybVtqLnN0ZXBdKGUuYnVmZmVyLHQpKTtmb3IoOzAhPT1kKGUuYnVmZmVyKSYmKG89T2JqZWN0KHIuYykoZS5yZWN2cyksbyE9PXIuYSk7KWlmKG8uYWN0aXZlKXt1PW8uY29tbWl0KCk7Y29uc3QgdD1iKGUuYnVmZmVyKTt1JiZPYmplY3QoZy5lKSgoKT0+dSh0KSl9cmV0dXJuIGMmJl8oZSksRSghMCl9Zm9yKDtvPU9iamVjdChyLmMpKGUucmVjdnMpLG8hPT1yLmE7KWlmKG8uYWN0aXZlKXJldHVybiBuLmNvbW1pdCgpLHU9by5jb21taXQoKSx1JiZPYmplY3QoZy5lKSgoKT0+dSh0KSksRSghMCk7aWYoZS5kaXJ0eVNlbmRzPmUubWF4RGlydHk/KE9iamVjdChyLmUpKGUuc2VuZHMsZT0+ZS5oYW5kbGVyLmFjdGl2ZSksZS5kaXJ0eVNlbmRzPTApOmUuZGlydHlTZW5kcysrLE9iamVjdChyLmIpKGUuc2VuZHMpPj1lLm1heFF1ZXVlZCl0aHJvdyBFcnJvcihgTm8gbW9yZSB0aGFuICR7ZS5tYXhRdWV1ZWR9IHBlbmRpbmcgc2VuZHMgYXJlIGFsbG93ZWQgb24gYSBzaW5nbGUgY2hhbm5lbGApO3JldHVybiBPYmplY3Qoci5kKShlLnNlbmRzLGZ1bmN0aW9uKGUsdCl7cmV0dXJuIE9iamVjdC5jcmVhdGUobnVsbCx7dmFsdWU6e3ZhbHVlOmUsd3JpdGFibGU6ITB9LGhhbmRsZXI6e3ZhbHVlOnR9LFtUXTp7dmFsdWU6ITB9fSl9KHQsbikpLG51bGx9ZnVuY3Rpb24gTShlLHQpe2xldCBuLG8sdTtpZihlLmJ1ZmZlciYmZChlLmJ1ZmZlcik+MCl7dC5jb21taXQoKTtjb25zdCBjPWIoZS5idWZmZXIpO2Zvcig7IW0oZS5idWZmZXIpJiYobj1PYmplY3Qoci5jKShlLnNlbmRzKSxuIT09ci5hKTspbz1uLmhhbmRsZXIsby5hY3RpdmUmJih1PW8uY29tbWl0KCksdSYmT2JqZWN0KGcuZSkoKCk9PnUoITApKSx4KGUueGZvcm1bai5zdGVwXShlLmJ1ZmZlcixuLnZhbHVlKSkmJl8oZSkpO3JldHVybiBFKGMpfWZvcig7bj1PYmplY3Qoci5jKShlLnNlbmRzKSxuIT09ci5hOylpZihvPW4uaGFuZGxlcixvLmFjdGl2ZSlyZXR1cm4gdT1vLmNvbW1pdCgpLHUmJk9iamVjdChnLmUpKCgpPT51KCEwKSksRShuLnZhbHVlKTtpZihlLmNsb3NlZClyZXR1cm4gdC5jb21taXQoKSxFKHcpO2lmKGUuZGlydHlSZWN2cz5lLm1heERpcnR5PyhPYmplY3Qoci5lKShlLnJlY3ZzLGU9PmUuYWN0aXZlKSxlLmRpcnR5UmVjdnM9MCk6ZS5kaXJ0eVJlY3ZzKyssT2JqZWN0KHIuYikoZS5yZWN2cyk+PWUubWF4UXVldWVkKXRocm93IEVycm9yKGBObyBtb3JlIHRoYW4gJHtlLm1heFF1ZXVlZH0gcGVuZGluZyByZWNlaXZlcyBhcmUgYWxsb3dlZCBvbiBhIHNpbmdsZSBjaGFubmVsYCk7cmV0dXJuIE9iamVjdChyLmQpKGUucmVjdnMsdCksbnVsbH1mdW5jdGlvbiBfKGUpe2lmKGUuY2xvc2VkKXJldHVybjtsZXQgdCxuLG87aWYoZS5jbG9zZWQ9ITAsZS5idWZmZXIpZm9yKGUueGZvcm1bai5yZXN1bHRdKGUuYnVmZmVyKTswIT09ZChlLmJ1ZmZlcikmJih0PU9iamVjdChyLmMpKGUucmVjdnMpLHQhPT1yLmEpOylpZih0LmFjdGl2ZSl7bz10LmNvbW1pdCgpO2NvbnN0IG49YihlLmJ1ZmZlcik7byYmT2JqZWN0KGcuZSkoKCk9Pm8obikpfWZvcig7dD1PYmplY3Qoci5jKShlLnJlY3ZzKSx0IT09ci5hOyl0LmFjdGl2ZSYmKG89dC5jb21taXQoKSxvJiZPYmplY3QoZy5lKSgoKT0+byh3KSkpO2Zvcig7bj1PYmplY3Qoci5jKShlLnNlbmRzKSxuIT09ci5hOyluLmhhbmRsZXIuYWN0aXZlJiYobz1uLmhhbmRsZXIuY29tbWl0KCksbyYmT2JqZWN0KGcuZSkoKCk9Pm8oITEpKSl9Y29uc3Qgaz1TeW1ib2woXCJERUZBVUxUXCIpO2Z1bmN0aW9uIFAoZSx0KXtyZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuY3JlYXRlKG51bGwpLHt2YWx1ZTplLGNoYW5uZWw6dH0pfWZ1bmN0aW9uIEEoZSx0PSgoKT0+e30pLG49e30pe2NvbnN0IHI9ZS5sZW5ndGg7aWYoMD09PXIpdGhyb3cgRXJyb3IoXCJzZWxlY3QgY2FsbGVkIHdpdGggbm8gb3BlcmF0aW9uc1wiKTtjb25zdCBvPSEhbi5wcmlvcml0eSx1PW8/W106ZnVuY3Rpb24oZSl7Y29uc3QgdD1bXTtmb3IobGV0IG49MDtuPGU7bisrKXQucHVzaChuKTtmb3IobGV0IG49ZS0xO24+MDtuLS0pe2NvbnN0IGU9TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKihuKzEpKSxyPXRbbl07dFtuXT10W2VdLHRbZV09cn1yZXR1cm4gdH0ociksYz1FKCEwKTtmdW5jdGlvbiBpKGUpe3JldHVybiBmdW5jdGlvbihlLHQpe3JldHVybiBPYmplY3QuY3JlYXRlKG51bGwse2FjdGl2ZTp7Z2V0OigpPT5lLnZhbHVlfSxjb21taXQ6e3ZhbHVlOigpPT4oZS52YWx1ZT0hMSx0KX19KX0oYyxuPT57dChQKG4sZSkpfSl9bGV0IGE7Zm9yKGxldCBuPTA7bjxyO24rKyl7Y29uc3Qgcj1lW28/bjp1W25dXTtsZXQgYyxmO2lmKEFycmF5LmlzQXJyYXkocik/KFtjLGZdPXIsYT1JKGMsZixpKGMpKSk6KGM9cixhPU0oYyxpKGMpKSksUyhhKSl7dChQKGEudmFsdWUsYykpO2JyZWFrfX0hUyhhKSYmT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG4sXCJkZWZhdWx0XCIpJiZjLnZhbHVlJiYoYy52YWx1ZT0hMSx0KFAobi5kZWZhdWx0LGspKSl9ZnVuY3Rpb24gQyhlLHQ9e30pe3JldHVybiBuZXcgUHJvbWlzZShuPT57QShlLG4sdCl9KX1mdW5jdGlvbiBEKGUpe3JldHVybiBlLnZhbHVlfWZ1bmN0aW9uIEwoZSl7cmV0dXJuIGUuY2hhbm5lbH1jb25zdCBxPSgpPT53O2Z1bmN0aW9uIFEoZSl7cmV0dXJuIE9iamVjdC5jcmVhdGUobnVsbCx7YWN0aXZlOnt2YWx1ZTohMH0sY29tbWl0Ont2YWx1ZTooKT0+ZX19KX1mdW5jdGlvbiBGKGUsdCxuKXtjb25zdCByPXQobik7cmV0dXJuIHIhPT13JiZ2KGUsciksZX1mdW5jdGlvbiBOKGUsdD1xKXtyZXR1cm57W2ouc3RlcF0obixyKXt0cnl7cmV0dXJuIGVbai5zdGVwXShuLHIpfWNhdGNoKGUpe3JldHVybiBGKG4sdCxlKX19LFtqLnJlc3VsdF0obil7dHJ5e3JldHVybiBlW2oucmVzdWx0XShuKX1jYXRjaChlKXtyZXR1cm4gRihuLHQsZSl9fX19Y29uc3Qgej17W2ouaW5pdF0oKXt0aHJvdyBFcnJvcihcImluaXQgbm90IGF2YWlsYWJsZVwiKX0sW2ouc3RlcF06KGUsdCk9Pih2KGUsdCksZSksW2oucmVzdWx0XTplPT5lfTtmdW5jdGlvbiBSKGUsdCxuKXtsZXQgcix1O3ZhciBjO2U/XCJudW1iZXJcIj09dHlwZW9mIGU/KHI9YShlKSx1PXQpOihudWxsPT0oYz1lKT92b2lkIDA6Y1tvXSk/KHI9ZSx1PXQpOihyPShudWxsPT1lP3ZvaWQgMDplLnRyYW5zZHVjZXIpP2EoMSk6bnVsbCx1PWUpOihyPW51bGwsdT10KTtjb25zdHt0cmFuc2R1Y2VyOmksaGFuZGxlcjpmLG1heERpcnR5OnMsbWF4UXVldWVkOmwsdGltZXI6ZH09T2JqZWN0LmFzc2lnbih7fSxuLHUpO3JldHVybntidWY6cix0cmFuc2R1Y2VyOmksaGFuZGxlcjpmLG1heERpcnR5OnMsbWF4UXVldWVkOmwsdGltZXI6ZH19ZnVuY3Rpb24gVShlLHQpe2NvbnN0IG49e21heERpcnR5OjY0LG1heFF1ZXVlZDoxMDI0fSx7YnVmOm8sdHJhbnNkdWNlcjp1LGhhbmRsZXI6YyxtYXhEaXJ0eTppLG1heFF1ZXVlZDphLHRpbWVyOmZ9PVIoZSx0LG4pO2lmKHUmJiFvKXRocm93IEVycm9yKFwiT25seSBidWZmZXJlZCBjaGFubmVscyBjYW4gdXNlIHRyYW5zZHVjZXJzXCIpO2NvbnN0IHM9XCJudW1iZXJcIj09dHlwZW9mIGYsbD1mdW5jdGlvbihlLHQsbj0hMSxvPTY0LHU9MTAyNCl7cmV0dXJuIE9iamVjdC5jcmVhdGUobnVsbCx7YnVmZmVyOnt2YWx1ZTplfSx4Zm9ybTp7dmFsdWU6dH0sbWF4RGlydHk6e3ZhbHVlOm99LG1heFF1ZXVlZDp7dmFsdWU6dX0scmVjdnM6e3ZhbHVlOk9iamVjdChyLmYpKCl9LHNlbmRzOnt2YWx1ZTpPYmplY3Qoci5mKSgpfSxkaXJ0eVJlY3ZzOnt2YWx1ZTowLHdyaXRhYmxlOiEwfSxkaXJ0eVNlbmRzOnt2YWx1ZTowLHdyaXRhYmxlOiEwfSxjbG9zZWQ6e3ZhbHVlOiExLHdyaXRhYmxlOiEwfSxpc0J1ZmZlcmVkOnt2YWx1ZTohIWV9LGlzVGltZWQ6e3ZhbHVlOm59fSl9KG8sTih1P3Uoeik6eixjKSxzLGksYSk7ZnVuY3Rpb24gZCgpe3JldHVybihkPU8oKSgoZnVuY3Rpb24qKCl7Zm9yKDs7KXtjb25zdCBlPXlpZWxkIGgoKShWKGwpKTtpZihlPT09dylicmVhazt5aWVsZCBlfX0pKSkuYXBwbHkodGhpcyxhcmd1bWVudHMpfXJldHVybiBsW1N5bWJvbC5hc3luY0l0ZXJhdG9yXT1mdW5jdGlvbigpe3JldHVybiBkLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0scyYmc2V0VGltZW91dCgoKT0+XyhsKSxmKSxsfWZ1bmN0aW9uIEIoZT0wKXtyZXR1cm4gVSh7dGltZXI6ZX0pfWZ1bmN0aW9uIEcoZSx0KXtyZXR1cm4gVSh7dHJhbnNkdWNlcjplLGhhbmRsZXI6dH0pfWZ1bmN0aW9uICQoZSl7cmV0dXJuIGUuY2xvc2VkfWZ1bmN0aW9uIEgoZSl7cmV0dXJuIGUuaXNCdWZmZXJlZH1mdW5jdGlvbiBYKGUpe3JldHVybiBlLmlzVGltZWR9ZnVuY3Rpb24gWShlLHQsbj0oKCk9Pnt9KSl7Y29uc3Qgcj1JKGUsdCxRKG4pKTtyJiZuJiZuKHIudmFsdWUpfWZ1bmN0aW9uIEooZSx0PSgoKT0+e30pKXtjb25zdCBuPU0oZSxRKHQpKTtuJiZ0JiZ0KG4udmFsdWUpfWZ1bmN0aW9uIEsoZSx0KXtyZXR1cm4gbmV3IFByb21pc2Uobj0+e1koZSx0LG4pfSl9ZnVuY3Rpb24gVihlKXtyZXR1cm4gbmV3IFByb21pc2UodD0+e0ooZSx0KX0pfWZ1bmN0aW9uIFcoZSl7cmV0dXJuIG5ldyBQcm9taXNlKCh0LG4pPT57SihlLGU9PntPYmplY3QucHJvdG90eXBlLmlzUHJvdG90eXBlT2YuY2FsbChFcnJvci5wcm90b3R5cGUsZSk/bihlKTp0KGUpfSl9KX1mdW5jdGlvbiBaKGUpe18oZSl9ZnVuY3Rpb24gZWUoZT0wKXtyZXR1cm4gbmV3IFByb21pc2UodD0+e0ooQihlKSx0KX0pfWZ1bmN0aW9uIHRlKGUsLi4udCl7cmV0dXJuIGUoLi4udCl9ZnVuY3Rpb24gbmUoLi4uZSl7cmV0dXJuIFByb21pc2UuYWxsKGUpfW4uZCh0LFwiZml4ZWRcIiwoZnVuY3Rpb24oKXtyZXR1cm4gYX0pKSxuLmQodCxcImRyb3BwaW5nXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIGZ9KSksbi5kKHQsXCJzbGlkaW5nXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIHN9KSksbi5kKHQsXCJDTE9TRURcIiwoZnVuY3Rpb24oKXtyZXR1cm4gd30pKSxuLmQodCxcImNoYW5cIiwoZnVuY3Rpb24oKXtyZXR1cm4gVX0pKSxuLmQodCxcInRpbWVkQ2hhblwiLChmdW5jdGlvbigpe3JldHVybiBCfSkpLG4uZCh0LFwidHJhbnNDaGFuXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIEd9KSksbi5kKHQsXCJzZW5kXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIEt9KSksbi5kKHQsXCJyZWN2XCIsKGZ1bmN0aW9uKCl7cmV0dXJuIFZ9KSksbi5kKHQsXCJzZW5kQXN5bmNcIiwoZnVuY3Rpb24oKXtyZXR1cm4gWX0pKSxuLmQodCxcInJlY3ZBc3luY1wiLChmdW5jdGlvbigpe3JldHVybiBKfSkpLG4uZCh0LFwicmVjdk9yVGhyb3dcIiwoZnVuY3Rpb24oKXtyZXR1cm4gV30pKSxuLmQodCxcImNsb3NlXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIFp9KSksbi5kKHQsXCJpc0Nsb3NlZFwiLChmdW5jdGlvbigpe3JldHVybiAkfSkpLG4uZCh0LFwiaXNCdWZmZXJlZFwiLChmdW5jdGlvbigpe3JldHVybiBIfSkpLG4uZCh0LFwiaXNUaW1lZFwiLChmdW5jdGlvbigpe3JldHVybiBYfSkpLG4uZCh0LFwic2VsZWN0XCIsKGZ1bmN0aW9uKCl7cmV0dXJuIEN9KSksbi5kKHQsXCJzZWxlY3RBc3luY1wiLChmdW5jdGlvbigpe3JldHVybiBBfSkpLG4uZCh0LFwidmFsdWVcIiwoZnVuY3Rpb24oKXtyZXR1cm4gRH0pKSxuLmQodCxcImNoYW5uZWxcIiwoZnVuY3Rpb24oKXtyZXR1cm4gTH0pKSxuLmQodCxcImNvbmZpZ1wiLChmdW5jdGlvbigpe3JldHVybiBnLmR9KSksbi5kKHQsXCJTRVRfSU1NRURJQVRFXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIGcuYn0pKSxuLmQodCxcIk1FU1NBR0VfQ0hBTk5FTFwiLChmdW5jdGlvbigpe3JldHVybiBnLmF9KSksbi5kKHQsXCJTRVRfVElNRU9VVFwiLChmdW5jdGlvbigpe3JldHVybiBnLmN9KSksbi5kKHQsXCJnb1wiLChmdW5jdGlvbigpe3JldHVybiB0ZX0pKSxuLmQodCxcInNsZWVwXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIGVlfSkpLG4uZCh0LFwiam9pblwiLChmdW5jdGlvbigpe3JldHVybiBuZX0pKSxuLmQodCxcIkVNUFRZXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIHIuYX0pKX1dKX0pKTsiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuZXhwb3J0IHtcbiAgbWFwLFxuICBtZXJnZSxcbiAgcGFydGl0aW9uLFxuICBwaXBlLFxuICBzcGxpdCxcbiAgdGFwLFxuICB1bnRhcCxcbiAgdW50YXBBbGwsXG59IGZyb20gXCJtb2R1bGVzL2Zsb3dcIjtcbmV4cG9ydCB7IHJlZHVjZSwgdG9DaGFubmVsLCB0b0FycmF5IH0gZnJvbSBcIm1vZHVsZXMvY29udmVyc2lvblwiOyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG4vKipcbiAqIEEgc2V0IG9mIGNoYW5uZWwgdXRpbGl0aWVzIGZvciBjb252ZXJ0aW5nIGNoYW5uZWxzIGludG8gb3RoZXIga2luZHMgb2YgZGF0YSxcbiAqIGFuZCB2aWNlIHZlcnNhLlxuICpcbiAqIEBtb2R1bGUgY2hhbmtvL29wZXJhdGlvbnMvY29udmVyc2lvblxuICogQHByaXZhdGVcbiAqL1xuXG5pbXBvcnQgeyBnbywgY2hhbiwgc2VuZCwgc2VuZEFzeW5jLCBjbG9zZSB9IGZyb20gXCJAY2hhbmtvL2NoYW5uZWxzXCI7XG5cbi8qKlxuICogQ3JlYXRlcyBhIHNpbmdsZSB2YWx1ZSBmcm9tIGEgY2hhbm5lbCBieSBydW5uaW5nIGl0cyB2YWx1ZXMgdGhyb3VnaCBhXG4gKiByZWR1Y2luZyBmdW5jdGlvbi5cbiAqXG4gKiBGb3IgZXZlcnkgdmFsdWUgcHV0IG9udG8gdGhlIGlucHV0IGNoYW5uZWwsIHRoZSByZWR1Y2luZyBmdW5jdGlvbiBpcyBjYWxsZWRcbiAqIHdpdGggdHdvIHBhcmFtZXRlcnM6IHRoZSBhY2N1bXVsYXRvciB0aGF0IGhvbGRzIHRoZSByZXN1bHQgb2YgdGhlIHJlZHVjdGlvblxuICogc28gZmFyLCBhbmQgdGhlIG5ldyBpbnB1dCB2YWx1ZS4gVGhlIGluaXRpYWwgdmFsdWUgb2YgdGhlIGFjY3VtdWxhdG9yIGlzIHRoZVxuICogdGhpcmQgcGFyYW1ldGVyIHRvIGByZWR1Y2VgLiBUaGUgcmVkdWN0aW9uIGlzIG5vdCBjb21wbGV0ZSB1bnRpbCB0aGUgaW5wdXRcbiAqIGNoYW5uZWwgY2xvc2VzLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gcmV0dXJucyBhIGNoYW5uZWwuIFdoZW4gdGhlIGZpbmFsIHJlZHVjZWQgdmFsdWUgaXMgcHJvZHVjZWQsIGl0XG4gKiBpcyBwdXQgb250byB0aGlzIGNoYW5uZWwsIGFuZCB3aGVuIHRoYXQgdmFsdWUgaXMgdGFrZW4gZnJvbSBpdCwgdGhlIGNoYW5uZWxcbiAqIGlzIGNsb3NlZC5cbiAqXG4gKiBgYGBcbiAqIGltcG9ydCB7IGdvLCBjaGFuLCBzZW5kLCByZWN2LCBjbG9zZSB9IGZyb20gXCJAY2hhbmtvL2NoYW5uZWxzXCI7XG4gKiBpbXBvcnQgeyByZWR1Y2UgfSBmcm9tIFwiQGNoYW5rby9vcGVyYXRpb25zXCI7XG4gKlxuICogY29uc3QgaW5wdXQgPSBjaGFuKCk7XG4gKiBjb25zdCBvdXRwdXQgPSByZWR1Y2UoKGFjYywgdmFsdWUpID0+IGFjYyArIHZhbHVlLCBpbnB1dCwgMCk7XG4gKlxuICogZ28oYXN5bmMgKCkgPT4ge1xuICogICBhd2FpdCBzZW5kKGlucHV0LCAxKTtcbiAqICAgYXdhaXQgc2VuZChpbnB1dCwgMik7XG4gKiAgIGF3YWl0IHNlbmQoaW5wdXQsIDMpO1xuICogICBjbG9zZShpbnB1dCk7XG4gKiB9KTtcbiAqXG4gKiBnbyhhc3luYyAoKSA9PiB7XG4gKiAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlY3Yob3V0cHV0KTtcbiAqICAgY29uc29sZS5sb2cob3V0cHV0KTsgICAgICAgICAgICAgICAgICAvLyAtPiA2XG4gKiB9KTtcbiAqXG4gKiBgYGBcbiAqXG4gKiBOb3RlIHRoYXQgdGhlIGlucHV0IGNoYW5uZWwgKm11c3QqIGJlIGNsb3NlZCBhdCBzb21lIHBvaW50LCBvciBubyB2YWx1ZSB3aWxsXG4gKiBldmVyIGFwcGVhciBvbiB0aGUgb3V0cHV0IGNoYW5uZWwuIFRoZSBjbG9zaW5nIG9mIHRoZSBjaGFubmVsIGlzIHdoYXRcbiAqIHNpZ25pZmllcyB0aGF0IHRoZSByZWR1Y3Rpb24gc2hvdWxkIGJlIGNvbXBsZXRlZC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNoYW5rby9vcGVyYXRpb25zfk9wZXJhdGlvbnNcbiAqIEBwYXJhbSB7bW9kdWxlOmNoYW5rby9vcGVyYXRpb25zfnJlZHVjZXJ9IGZuIFRoZSByZWR1Y2VyIGZ1bmN0aW9uIHJlc3BvbnNpYmxlXG4gKiAgICAgZm9yIHR1cm5pbmcgdGhlIHNlcmllcyBvZiBjaGFubmVsIHZhbHVlcyBpbnRvIGEgc2luZ2xlIG91dHB1dCB2YWx1ZS5cbiAqIEBwYXJhbSB7bW9kdWxlOmNoYW5rby9jaGFubmVsfkNoYW5uZWx9IGNoIFRoZSBjaGFubmVsIHdob3NlIHZhbHVlcyBhcmUgYmVpbmdcbiAqIHJlZHVjZWQgaW50byBhIHNpbmdsZSBvdXRwdXQgdmFsdWUuXG4gKiBAcGFyYW0geyp9IGluaXQgVGhlIGluaXRpYWwgdmFsdWUgdG8gZmVlZCBpbnRvIHRoZSByZWR1Y2VyIGZ1bmN0aW9uIGZvciB0aGVcbiAqIGZpcnN0IHJlZHVjdGlvbiBzdGVwLlxuICogQHJldHVybiB7bW9kdWxlOmNoYW5rby9jaGFubmVsfkNoYW5uZWx9IEEgY2hhbm5lbCB0aGF0IHdpbGwsIHdoZW4gdGhlIGlucHV0XG4gKiAgICAgY2hhbm5lbCBjbG9zZXMsIGhhdmUgdGhlIHJlZHVjZWQgdmFsdWUgcHV0IGludG8gaXQuIFdoZW4gdGhpcyB2YWx1ZSBpc1xuICogICAgIHRha2VuLCB0aGUgY2hhbm5lbCB3aWxsIGF1dG9tYXRpY2FsbHkgY2xvc2UuXG4gKi9cbmZ1bmN0aW9uIHJlZHVjZShmbiwgY2hhbm5lbCwgaW5pdCkge1xuICBjb25zdCBvdXRwdXQgPSBjaGFuKCk7XG5cbiAgZ28oYXN5bmMgKCkgPT4ge1xuICAgIGxldCBhY2MgPSBpbml0O1xuICAgIGZvciBhd2FpdCAoY29uc3QgdmFsdWUgb2YgY2hhbm5lbCkge1xuICAgICAgYWNjID0gZm4oYWNjLCB2YWx1ZSk7XG4gICAgfVxuICAgIHNlbmRBc3luYyhvdXRwdXQsIGFjYywgKCkgPT4gY2xvc2Uob3V0cHV0KSk7XG4gIH0pO1xuXG4gIHJldHVybiBvdXRwdXQ7XG59XG5cbi8qKlxuICogU2VuZHMgYWxsIHZhbHVlcyBmcm9tIGFuIGl0ZXJhYmxlIHRvIHRoZSBzdXBwbGllZCBjaGFubmVsLlxuICpcbiAqIElmIG5vIGNoYW5uZWwgaXMgcGFzc2VkIHRvIHRoaXMgZnVuY3Rpb24sIGEgbmV3IGNoYW5uZWwgaXMgY3JlYXRlZC4gSW5cbiAqIGVmZmVjdCwgdGhpcyBkaXJlY3RseSBjb252ZXJ0cyBhbiBpdGVyYWJsZSBpbnRvIGEgY2hhbm5lbCB3aXRoIHRoZSBzYW1lXG4gKiB2YWx1ZXMgb24gaXQuXG4gKlxuICogVGhlIGNoYW5uZWwgaXMgY2xvc2VkIGFmdGVyIHRoZSBmaW5hbCBpdGVyYWJsZSB2YWx1ZSBpcyBzZW50IHRvIGl0LlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gd2lsbCBjb252ZXJ0IGFueSBKYXZhU2NyaXB0IG9iamVjdCB0aGF0IGltcGxlbWVudHMgdGhlIGl0ZXJhYmxlXG4gKiBwcm90b2NvbC4gSW4gb3RoZXIgd29yZHMsIGlmIGl0IHdvcmtzIGluIGEgYGZvci4uLm9mYCBzdGF0ZW1lbnQsIGl0IHdpbGwgd29ya1xuICogaGVyZS5cbiAqXG4gKiBgYGBcbiAqIGltcG9ydCB7IGdvLCBjaGFuLCByZWN2LCBpc0Nsb3NlZCB9IGZyb20gXCJAY2hhbmtvL2NoYW5uZWxzXCI7XG4gKiBpbXBvcnQgeyBvbnRvIH0gZnJvbSBcIkBjaGFua28vb3BlcmF0aW9uc1wiO1xuICpcbiAqIGNvbnN0IGlucHV0ID0gWzEsIDIsIDNdO1xuICogY29uc3Qgb3V0cHV0ID0gb250byhpbnB1dCk7XG4gKlxuICogZ28oYXN5bmMgKCkgPT4ge1xuICogICBjb25zb2xlLmxvZyhhd2FpdCByZWN2KG91dHB1dCkpOyAgICAgLy8gLT4gMVxuICogICBjb25zb2xlLmxvZyhhd2FpdCByZWN2KG91dHB1dCkpOyAgICAgLy8gLT4gMlxuICogICBjb25zb2xlLmxvZyhhd2FpdCByZWN2KG91dHB1dCkpOyAgICAgLy8gLT4gM1xuICogICBjb25zb2xlLmxvZyhpc0Nsb3NlZChvdXRwdXQpKTsgICAgICAgLy8gLT4gdHJ1ZVxuICogfSk7XG4gKiBgYGBcbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNoYW5rby9vcGVyYXRpb25zfk9wZXJhdGlvbnNcbiAqIEBwYXJhbSB7aXRlcmFibGV9IGl0ZXJhYmxlIFRoZSBpdGVyYWJsZSBjb250YWluaW5nIHRoZSB2YWx1ZXMgdG8gYmUgc2VudCB0b1xuICogICAgIHRoZSBjaGFubmVsLlxuICogQHBhcmFtIHttb2R1bGU6Y2hhbmtvL2NoYW5uZWx+Q2hhbm5lbH0gW2NoYW5uZWxdIFRoZSBjaGFubmVsIG9udG8gd2hpY2ggdG9cbiAqICAgICBwdXQgYWxsIG9mIHRoZSBhcnJheSBlbGVtZW50cy4gSWYgdGhpcyBpcyBub3QgcHJlc2VudCwgYSBuZXcgY2hhbm5lbCB3aWxsXG4gKiAgICAgYmUgY3JlYXRlZC5cbiAqIEByZXR1cm4ge21vZHVsZTpjaGFua28vY2hhbm5lbH5DaGFubmVsfSB0aGUgY2hhbm5lbCBvbnRvIHdoaWNoIHRoZSBhcnJheVxuICogICAgIGVsZW1lbnRzIGFyZSBwdXQuIFRoaXMgaXMgdGhlIHNhbWUgYXMgdGhlIGlucHV0IGNoYW5uZWwsIGJ1dCBpZiBubyBpbnB1dFxuICogICAgIGNoYW5uZWwgaXMgc3BlY2lmaWVkLCB0aGlzIHdpbGwgYmUgYSBuZXcgY2hhbm5lbC4gSXQgd2lsbCBjbG9zZSB3aGVuIHRoZVxuICogICAgIGZpbmFsIHZhbHVlIGlzIHRha2VuIGZyb20gaXQuXG4gKi9cbmZ1bmN0aW9uIHRvQ2hhbm5lbChpdGVyYWJsZSwgY2hhbm5lbCA9IGNoYW4oaXRlcmFibGUubGVuZ3RoKSkge1xuICBnbyhhc3luYyAoKSA9PiB7XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGl0ZXJhYmxlKSB7XG4gICAgICBhd2FpdCBzZW5kKGNoYW5uZWwsIGl0ZW0pO1xuICAgIH1cbiAgICBjbG9zZShjaGFubmVsKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGNoYW5uZWw7XG59XG5cbi8qKlxuICogUmVjZWl2ZXMgYWxsIG9mIHRoZSB2YWx1ZXMgZnJvbSBhIGNoYW5uZWwgYW5kIHB1c2hlcyB0aGVtIGludG8gYW4gYXJyYXkuXG4gKlxuICogSWYgbm8gYXJyYXkgaXMgcGFzc2VkIHRvIHRoaXMgZnVuY3Rpb24sIGEgbmV3IChlbXB0eSkgb25lIGlzIGNyZWF0ZWQuIEluXG4gKiBlZmZlY3QsIHRoaXMgZGlyZWN0bHkgY29udmVydHMgYSBjaGFubmVsIGludG8gYW4gYXJyYXkgd2l0aCB0aGUgc2FtZSB2YWx1ZXMuXG4gKiBFaXRoZXIgd2F5LCB0aGlzIG9wZXJhdGlvbiBjYW5ub3QgY29tcGxldGUgdW50aWwgdGhlIGlucHV0IGNoYW5uZWwgaXMgY2xvc2VkLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gcmV0dXJucyBhIGNoYW5uZWwuIFdoZW4gdGhlIGZpbmFsIGFycmF5IGlzIHByb2R1Y2VkLCBpdCBpcyBzZW50XG4gKiB0byB0aGlzIGNoYW5uZWwsIGFuZCB3aGVuIHRoYXQgdmFsdWUgaXMgcmVjZWl2ZWQgZnJvbSBpdCwgdGhlIGNoYW5uZWwgaXNcbiAqIGNsb3NlZC5cbiAqXG4gKiBgYGBcbiAqIGltcG9ydCB7IGdvLCBjaGFuLCBzZW5kLCByZWN2LCBjbG9zZSB9IGZyb20gXCJAY2hhbmtvL2NoYW5uZWxzXCI7XG4gKiBpbXBvcnQgeyBpbnRvIH0gZnJvbSBcIkBjaGFua28vb3BlcmF0aW9uc1wiO1xuICpcbiAqIGNvbnN0IGlucHV0ID0gY2hhbigpO1xuICogY29uc3Qgb3V0cHV0ID0gaW50byhpbnB1dCk7XG4gKlxuICogZ28oYXN5bmMgKCkgPT4ge1xuICogICBhd2FpdCBzZW5kKGlucHV0LCAxKTtcbiAqICAgYXdhaXQgc2VuZChpbnB1dCwgMik7XG4gKiAgIGF3YWl0IHNlbmQoaW5wdXQsIDMpO1xuICogICBjbG9zZShpbnB1dCk7XG4gKiB9KTtcbiAqXG4gKiBnbyhhc3luYyAoKSA9PiB7XG4gKiAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlY3Yob3V0cHV0KTtcbiAqICAgY29uc29sZS5sb2cocmVzdWx0KTsgICAgICAgICAgICAgICAgICAgICAvLyAtPiBbMSwgMiwgM11cbiAqIH0pO1xuICogYGBgXG4gKlxuICogTm90ZSB0aGF0IHRoZSBpbnB1dCBjaGFubmVsICptdXN0KiBiZSBjbG9zZWQgYXQgc29tZSBwb2ludCwgb3Igbm8gdmFsdWUgd2lsbFxuICogZXZlciBhcHBlYXIgb24gdGhlIG91dHB1dCBjaGFubmVsLiBUaGUgY2xvc2luZyBvZiB0aGUgY2hhbm5lbCBpcyB3aGF0XG4gKiBzaWduaWZpZXMgdGhhdCBhbGwgb2YgdGhlIHZhbHVlcyBuZWVkZWQgdG8gbWFrZSB0aGUgYXJyYXkgYXJlIG5vdyBhdmFpbGFibGUuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjaGFua28vb3BlcmF0aW9uc35DaGFua29cbiAqIEBwYXJhbSB7bW9kdWxlOmNpc3B5L2NoYW5uZWx+Q2hhbm5lbH0gY2hhbm5lbCBUaGUgY2hhbm5lbCBmcm9tIHdoaWNoIHZhbHVlc1xuICogICAgIGFyZSByZWNlaXZlZCB0byBwdXQgaW50byB0aGUgYXJyYXkuXG4gKiBAcGFyYW0ge2FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBwdXQgdGhlIGNoYW5uZWwgdmFsdWVzIGludG8uIElmIHRoaXMgaXNcbiAqICAgICBub3QgcHJlc2VudCwgYSBuZXcsIGVtcHR5IGFycmF5IHdpbGwgYmUgY3JlYXRlZC5cbiAqIEByZXR1cm4ge21vZHVsZTpjaXNweS9jaGFubmVsfkNoYW5uZWx9IEEgY2hhbm5lbCB0aGF0IHdpbGwsIHdoZW4gdGhlIGlucHV0XG4gKiAgICAgY2hhbm5lbCBjbG9zZXMsIGhhdmUgdGhlIGFycmF5IG9mIGNoYW5uZWwgdmFsdWVzIHB1dCBvbnRvIGl0LiBXaGVuIHRoaXNcbiAqICAgICBhcnJheSBpcyByZWNlaXZlZCwgdGhlIGNoYW5uZWwgd2lsbCBhdXRvbWF0aWNhbGx5IGNsb3NlLlxuICovXG5mdW5jdGlvbiB0b0FycmF5KGNoYW5uZWwsIGFycmF5ID0gW10pIHtcbiAgcmV0dXJuIHJlZHVjZShcbiAgICAoYWNjLCBpbnB1dCkgPT4ge1xuICAgICAgYWNjLnB1c2goaW5wdXQpO1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LFxuICAgIGNoYW5uZWwsXG4gICAgYXJyYXksXG4gICk7XG59XG5cbmV4cG9ydCB7IHJlZHVjZSwgdG9DaGFubmVsLCB0b0FycmF5IH07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuLyoqXG4gKiBBIHNldCBvZiBjaGFubmVsIG9wZXJhdGlvbiBmdW5jdGlvbnMgZm9yIHJvdXRpbmcgY2hhbm5lbHMgdG8gb3RoZXIgY2hhbm5lbHNcbiAqIGluIGRpZmZlcmVudCB3YXlzLlxuICpcbiAqIEluIGVhY2ggb2YgdGhlc2UgZnVuY3Rpb25zLCB0aGUgc291cmNlIGNoYW5uZWwgd2lsbCBub3QgYmUgYXZhaWxhYmxlIHRvIGJlXG4gKiB0YWtlbiBmcm9tLCBhcyBhbGwgb2YgdGhlIHNvdXJjZSBjaGFubmVscyB3aWxsIGhhdmUgdGhlaXIgdmFsdWVzIHRha2VuIGJ5IHRoZVxuICogcHJvY2Vzc2VzIHdpdGhpbiB0aGVzZSBmdW5jdGlvbnMuIFRoZSBsb25lIGV4Y2VwdGlvbiBpcyBgdGFwYCwgd2hlcmUgdGhlXG4gKiByZWd1bGFyIGZ1bmN0aW9uIG9mIHRoZSBzb3VyY2UgY2hhbm5lbCB3aWxsIGJlIHJlc3RvcmVkIGlmIGFsbCB0YXBzIGFyZVxuICogcmVtb3ZlZC4gRXZlbiBzbywgd2hpbGUgYXQgbGVhc3Qgb25lIHRhcCBpcyBpbiBwbGFjZSwgdGhlIHNvdXJjZSBjaGFubmVsXG4gKiBjYW5ub3QgYmUgdGFrZW4gZnJvbS5cbiAqXG4gKiBAbW9kdWxlIGNoYW5rby9vcGVyYXRpb25zL2Zsb3dcbiAqIEBwcml2YXRlXG4gKi9cblxuaW1wb3J0IHtcbiAgZ28sXG4gIGNoYW4sXG4gIHNlbmQsXG4gIHJlY3YsXG4gIHNlbGVjdCxcbiAgc2VuZEFzeW5jLFxuICByZWN2QXN5bmMsXG4gIGNsb3NlLFxuICBDTE9TRURcbn0gZnJvbSBcIkBjaGFua28vY2hhbm5lbHNcIjtcblxuY29uc3QgVEFQUyA9IFN5bWJvbChcIm11bHRpdGFwL3RhcHNcIik7XG5cbmZ1bmN0aW9uIGlzTnVtYmVyKHgpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh4KSA9PT0gXCJbb2JqZWN0IE51bWJlcl1cIiAmJiBpc0Zpbml0ZSh4KTtcbn1cblxuLyoqXG4gKiBQaXBlcyB0aGUgdmFsdWVzIGZyb20gb25lIGNoYW5uZWwgdG8gYW5vdGhlciBjaGFubmVsLlxuICpcbiAqIFRoaXMgdGllcyB0d28gY2hhbm5lbHMgdG9nZXRoZXIgc28gdGhhdCBwdXRzIG9uIHRoZSBzb3VyY2UgY2hhbm5lbCBjYW4gYmVcbiAqIHRha2VuIG9mZiB0aGUgZGVzdGluYXRpb24gY2hhbm5lbC4gVGhpcyBkb2VzIG5vdCBkdXBsaWNhdGUgdmFsdWVzIGluIGFueSB3YXk7XG4gKiBpZiBhbm90aGVyIHByb2Nlc3MgdGFrZXMgYSB2YWx1ZSBvZmYgdGhlIHNvdXJjZSBjaGFubmVsLCBpdCB3aWxsIG5ldmVyIGFwcGVhclxuICogb24gdGhlIGRlc3RpbmF0aW9uIGNoYW5uZWwuIEluIG1vc3QgY2FzZXMgeW91IHdpbGwgbm90IHdhbnQgdG8gdGFrZSB2YWx1ZXNcbiAqIG9mZiBhIGNoYW5uZWwgb25jZSBpdCdzIHBpcGVkIHRvIGFub3RoZXIgY2hhbm5lbCwgc2luY2UgaXQncyBkaWZmaWN1bHQgdG9cbiAqIGtub3cgd2hpY2ggdmFsdWVzIHdpbGwgZ28gdG8gd2hpY2ggY2hhbm5lbC5cbiAqXG4gKiBDbG9zaW5nIGVpdGhlciBjaGFubmVsIHdpbGwgYnJlYWsgdGhlIGNvbm5lY3Rpb24gYmV0d2VlbiB0aGUgdHdvLiBJZiB0aGVcbiAqIHNvdXJjZSBjaGFubmVsIGlzIGNsb3NlZCwgdGhlIGRlc3RpbmF0aW9uIGNoYW5uZWwgd2lsbCBieSBkZWZhdWx0IGFsc28gYmVcbiAqIGNsb3NlZC4gSG93ZXZlciwgcGFzc2luZyBgdHJ1ZWAgYXMgdGhlIHRoaXJkIHBhcmFtZXRlciB3aWxsIGNhdXNlIHRoZVxuICogZGVzdGluYXRpb24gY2hhbm5lbCB0byByZW1haW4gb3BlbiBldmVuIHdoZW4gdGhlIHNvdXJjZSBjaGFubmVsIGlzIGNsb3NlZFxuICogKHRoZSBjb25uZWN0aW9uIGlzIHN0aWxsIGJyb2tlbiBob3dldmVyKS5cbiAqXG4gKiBCZWNhdXNlIG9mIHRoZSBhYmlsaXR5IHRvIGxlYXZlIHRoZSBkZXN0aW5hdGlvbiBjaGFubmVsIG9wZW4sIGEgcG9zc2libGUgdXNlXG4gKiBjYXNlIGZvciB0aGlzIGZ1bmN0aW9uIGlzIHRvIHdyYXAgdGhlIGRlc3RpbmF0aW9uIGNoYW5uZWwocykgb2Ygb25lIG9mIHRoZVxuICogb3RoZXIgZmxvdyBjb250cm9sIGZ1bmN0aW9ucyBiZWxvdyB0byBoYXZlIGEgY2hhbm5lbCB0aGF0IHN1cnZpdmVzIHRoZSBzb3VyY2VcbiAqIGNoYW5uZWwgY2xvc2luZy4gVGhlIHJlc3Qgb2YgdGhvc2UgZnVuY3Rpb25zIChhc2lkZSBmcm9tIHRoZSBzcGVjaWFsLWNhc2VcbiAqIGB7QGxpbmsgbW9kdWxlOmNoYW5rby9vcGVyYXRpb25zfk9wZXJhdGlvbnMudGFwfHRhcH1gKSBhdXRvbWF0aWNhbGx5IGNsb3NlXG4gKiB0aGVpciBkZXN0aW5hdGlvbiBjaGFubmVscyB3aGVuIHRoZSBzb3VyY2UgY2hhbm5lbHMgY2xvc2UuXG4gKlxuICogYGBgXG4gKiBpbXBvcnQgeyBnbywgY2hhbiwgc2VuZCwgcmVjdiwgY2xvc2UsIGlzQ2xvc2VkIH0gZnJvbSBcIkBjaGFua28vY2hhbm5lbHNcIjtcbiAqIGltcG9ydCB7IHBpcGUgfSBmcm9tIFwiQGNoYW5rby9vcGVyYXRpb25zXCI7XG4gKlxuICogY29uc3QgaW5wdXQgPSBjaGFuKCk7XG4gKiBjb25zdCBvdXRwdXQgPSBwaXBlKGlucHV0LCBjaGFuKCkpO1xuICpcbiAqIGdvKGFzeW5jICgpID0+IHtcbiAqICAgYXdhaXQgc2VuZChpbnB1dCwgMSk7XG4gKiAgIGF3YWl0IHNlbmQoaW5wdXQsIDIpO1xuICogICBjbG9zZShpbnB1dCk7XG4gKiB9KTtcbiAqXG4gKiBnbyhhc3luYyAoKSA9PiB7XG4gKiAgIGNvbnNvbGUubG9nKGF3YWl0IHJlY3Yob3V0cHV0KSk7ICAgICAgLy8gLT4gMVxuICogICBjb25zb2xlLmxvZyhhd2FpdCByZWN2KG91dHB1dCkpOyAgICAgIC8vIC0+IDJcbiAqICAgY29uc29sZS5sb2coaXNDbG9zZWQob3V0cHV0KSk7ICAgICAgICAvLyAtPiB0cnVlXG4gKiB9KTtcbiAqIGBgYFxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y2hhbmtvL29wZXJhdGlvbnN+T3BlcmF0aW9uc1xuICogQHBhcmFtIHttb2R1bGU6Y2hhbmtvL2NoYW5uZWx+Q2hhbm5lbH0gc3JjIFRoZSBzb3VyY2UgY2hhbm5lbC5cbiAqIEBwYXJhbSB7bW9kdWxlOmNoYW5rby9jaGFubmVsfkNoYW5uZWx9IGRlc3QgVGhlIGRlc3RpbmF0aW9uIGNoYW5uZWwuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtrZWVwT3Blbj1mYWxzZV0gQSBmbGFnIHRvIGluZGljYXRlIHRoYXQgdGhlIGRlc3RpbmF0aW9uXG4gKiAgICAgY2hhbm5lbCBzaG91bGQgYmUga2VwdCBvcGVuIGFmdGVyIHRoZSBzb3VyY2UgY2hhbm5lbCBjbG9zZXMuIEJ5IGRlZmF1bHRcbiAqICAgICB0aGUgZGVzdGluYXRpb24gY2hhbm5lbCB3aWxsIGNsb3NlIHdoZW4gdGhlIHNvdXJjZSBjaGFubmVsIGNsb3Nlcy5cbiAqIEByZXR1cm4ge21vZHVsZTpjaGFua28vY2hhbm5lbH5DaGFubmVsfSBUaGUgZGVzdGluYXRpb24gY2hhbm5lbC5cbiAqL1xuZnVuY3Rpb24gcGlwZShzcmMsIGRzdCwga2VlcE9wZW4gPSBmYWxzZSkge1xuICBnbyhhc3luYyAoKSA9PiB7XG4gICAgZm9yICg7Oykge1xuICAgICAgY29uc3QgdmFsdWUgPSBhd2FpdCByZWN2KHNyYyk7XG4gICAgICBpZiAodmFsdWUgPT09IENMT1NFRCkge1xuICAgICAgICBpZiAoIWtlZXBPcGVuKSB7XG4gICAgICAgICAgY2xvc2UoZHN0KTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGlmICghKGF3YWl0IHNlbmQoZHN0LCB2YWx1ZSkpKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGRzdDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIHR3byBuZXcgY2hhbm5lbHMgYW5kIHJvdXRlcyB2YWx1ZXMgZnJvbSBhIHNvdXJjZSBjaGFubmVsIHRvIHRoZW1cbiAqIGFjY29yZGluZyB0byBhIHByZWRpY2F0ZSBmdW5jdGlvbi5cbiAqXG4gKiBUaGUgc3VwcGxpZWQgZnVuY3Rpb24gaXMgaW52b2tlZCB3aXRoIGV2ZXJ5IHZhbHVlIHRoYXQgaXMgcHV0IG9udG8gdGhlIHNvdXJjZVxuICogY2hhbm5lbC4gVGhvc2UgdGhhdCByZXR1cm4gYHRydWVgIGFyZSByb3V0ZWQgdG8gdGhlIGZpcnN0IGRlc3RpbmF0aW9uXG4gKiBjaGFubmVsOyB0aG9zZSB0aGF0IHJldHVybiBgZmFsc2VgIGFyZSByb3V0ZWQgdG8gdGhlIHNlY29uZC5cbiAqXG4gKiBUaGUgbmV3IGNoYW5uZWxzIGFyZSBjcmVhdGVkIGJ5IHRoZSBmdW5jdGlvbiBiYXNlZCBvbiB0aGUgYnVmZmVyIHZhbHVlc1xuICogcGFzc2VkIGFzIHRoZSB0aGlyZCBhbmQgZm91cnRoIHBhcmFtZXRlcnMuIElmIG9uZSBvciBib3RoIG9mIHRoZXNlIGFyZVxuICogbWlzc2luZywgYG51bGxgLCBvciBgMGAsIHRoZSBjb3JyZXNwb25kaW5nIGRlc3RpbmF0aW9uIGNoYW5uZWwgaXMgdW5idWZmZXJlZC5cbiAqIElmIG9uZSBpcyBhIHBvc2l0aXZlIGludGVnZXIsIHRoZSBjb3JyZXNwb25kaW5nIGNoYW5uZWwgaXMgYnVmZmVyZWQgYnkgYVxuICogZml4ZWQgYnVmZmVyIG9mIHRoYXQgc2l6ZS4gSWYgdGhlIHBhcmFtZXRlciBmb3IgYSBjaGFubmVsIGlzIGEgYnVmZmVyLCB0aGVuXG4gKiB0aGF0IGJ1ZmZlciBpcyB1c2VkIHRvIGJ1ZmZlciB0aGUgbmV3IGNoYW5uZWwuXG4gKlxuICogQm90aCBuZXcgY2hhbm5lbHMgYXJlIGNsb3NlZCB3aGVuIHRoZSBzb3VyY2UgY2hhbm5lbCBpcyBjbG9zZWQuXG4gKlxuICpcbiAqIGBgYFxuICogaW1wb3J0IHsgZ28sIGNoYW4sIHNlbmQsIGNsb3NlIH0gZnJvbSBcIkBjaGFua28vY2hhbm5lbHNcIjtcbiAqIGltcG9ydCB7IHBhcnRpdGlvbiB9IGZyb20gXCJAY2hhbmtvL29wZXJhdGlvbnNcIjtcbiAqXG4gKiBjb25zdCBpbnB1dCA9IGNoYW4oKTtcbiAqIGNvbnN0IGN0cmwgPSBjaGFuKCk7XG4gKiBjb25zdCBbZXZlbiwgb2RkXSA9IHBhcnRpdGlvbih4ID0+IHggJSAyID09PSAwLCBpbnB1dCwgMywgMyk7XG4gKlxuICogZ28oYXN5bmMgKCkgPT4ge1xuICogICBhd2FpdCBzZW5kKGlucHV0LCAxKTtcbiAqICAgYXdhaXQgc2VuZChpbnB1dCwgMik7XG4gKiAgIGF3YWl0IHNlbmQoaW5wdXQsIDMpO1xuICogICBhd2FpdCBzZW5kKGlucHV0LCA0KTtcbiAqICAgY2xvc2UoaW5wdXQpO1xuICogfSk7XG4gKlxuICogZ28oYXN5bmMgKCkgPT4ge1xuICogICBmb3IgYXdhaXQgKGNvbnN0IHZhbHVlIG9mIGV2ZW4pIHtcbiAqICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XG4gKiAgIH1cbiAqICAgYXdhaXQgc2VuZChjdHJsKTtcbiAqIH0pO1xuICpcbiAqIGdvKGFzeW5jICgpID0+IHtcbiAqICAgYXdhaXQgcmVjdihjdHJsKTtcbiAqICAgZm9yIGF3YWl0IChjb25zdCB2YWx1ZSBvZiBvZGQpIHtcbiAqICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XG4gKiAgIH1cbiAqIH0pO1xuICpcbiAqIC8vIFRoZSBgY3RybGAgY2hhbm5lbCBlbnN1cmVzIHRoYXQgYWxsIG9mIHRoZSB2YWx1ZXMgb24gdGhlIGV2ZW4gY2hhbm5lbCBhcmVcbiAqIC8vIHJlYWQgYmVmb3JlIGFueSBvZiB0aGUgdmFsdWVzIG9uIHRoZSBvZGQgY2hhbm5lbCBhcmUgKHRoaXMgaXMgb25seVxuICogLy8gcG9zc2libGUgYmVjYXVzZSB0aGUgb3V0cHV0IGNoYW5uZWxzIGhhdmUgYnVmZmVycyBiaWcgZW5vdWdoIHRvIG1ha2Ugc3VyZVxuICogLy8gdGhhdCBubyBzZW5kIGlzIGJsb2NrZWQpLlxuICogLy9cbiAqIC8vIC0+IDJcbiAqIC8vIC0+IDRcbiAqIC8vIC0+IDFcbiAqIC8vIC0+IDNcbiAqIGBgYFxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y2hhbmtvL29wZXJhdGlvbnN+T3BlcmF0aW9uc1xuICogQHBhcmFtIHttb2R1bGU6Y2hhbmtvfnByZWRpY2F0ZX0gZm4gQSBwcmVkaWNhdGUgZnVuY3Rpb24gdXNlZCB0byB0ZXN0IGVhY2hcbiAqIHZhbHVlIG9uIHRoZSBpbnB1dCBjaGFubmVsLlxuICogQHBhcmFtIHttb2R1bGU6Y2hhbmtvL2NoYW5uZWx+Q2hhbm5lbH0gc3JjIFRoZSBzb3VyY2UgY2hhbm5lbC5cbiAqIEBwYXJhbSB7KG51bWJlcnxtb2R1bGU6Y2hhbmtvL2J1ZmZlcn5CdWZmZXIpfSBbdEJ1ZmZlcj0wXSBBIGJ1ZmZlciB1c2VkIHRvXG4gKiAgICAgY3JlYXRlIHRoZSBkZXN0aW5hdGlvbiBjaGFubmVsIHdoaWNoIHJlY2VpdmVzIGFsbCB2YWx1ZXMgdGhhdCBwYXNzZWQgdGhlXG4gKiAgICAgcHJlZGljYXRlLiBJZiB0aGlzIGlzIGEgbnVtYmVyLCBhXG4gKiAgICAge0BsaW5rIG1vZHVsZTpjaGFua28vYnVmZmVyfkZpeGVkQnVmZmVyfSBvZiB0aGF0IHNpemUgd2lsbCBiZSB1c2VkLiBJZlxuICogICAgIHRoaXMgaXMgYDBgIG9yIG5vdCBwcmVzZW50LCB0aGUgY2hhbm5lbCB3aWxsIGJlIHVuYnVmZmVyZWQuXG4gKiBAcGFyYW0geyhudW1iZXJ8bW9kdWxlOmNoYW5rby9idWZmZXJ+QnVmZmVyKX0gW2ZCdWZmZXI9MF0gQSBidWZmZXIgdXNlZCB0b1xuICogICAgIGNyZWF0ZSB0aGUgZGVzdGluYXRpb24gY2hhbm5lbCB3aGljaCByZWNlaXZlcyBhbGwgdmFsdWVzIHRoYXQgZGlkIG5vdFxuICogICAgIHBhc3MgdGhlIHByZWRpY2F0ZS4gSWYgdGhpcyBpcyBhIG51bWJlciwgYVxuICogICAgIHtAbGluayBtb2R1bGU6Y2hhbmtvL2J1ZmZlcn5GaXhlZEJ1ZmZlcn0gb2YgdGhhdCBzaXplIHdpbGwgYmUgdXNlZC4gSWZcbiAqICAgICB0aGlzIGlzIGAwYCBvciBub3QgcHJlc2VudCwgdGhlIGNoYW5uZWwgd2lsbCBiZSB1bmJ1ZmZlcmVkLlxuICogQHJldHVybiB7bW9kdWxlOmNoYW5rby9jaGFubmVsfkNoYW5uZWxbXX0gQW4gYXJyYXkgb2YgdHdvIGNoYW5uZWxzLiBUaGUgZmlyc3RcbiAqICAgICBpcyB0aGUgZGVzdGluYXRpb24gY2hhbm5lbCB3aXRoIGFsbCBvZiB0aGUgdmFsdWVzIHRoYXQgcGFzc2VkIHRoZVxuICogICAgIHByZWRpY2F0ZSwgdGhlIHNlY29uZCBpcyB0aGUgZGVzdGluYXRpb24gY2hhbm5lbCB3aXRoIGFsbCBvZiB0aGUgdmFsdWVzXG4gKiAgICAgdGhhdCBkaWQgbm90IHBhc3MgdGhlIHByZWRpY2F0ZS5cbiAqL1xuZnVuY3Rpb24gcGFydGl0aW9uKGZuLCBzcmMsIHRCdWZmZXIgPSAwLCBmQnVmZmVyID0gMCkge1xuICBjb25zdCB0RHN0ID0gY2hhbih0QnVmZmVyKTtcbiAgY29uc3QgZkRzdCA9IGNoYW4oZkJ1ZmZlcik7XG5cbiAgZ28oYXN5bmMgKCkgPT4ge1xuICAgIGZvciAoOzspIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gYXdhaXQgcmVjdihzcmMpO1xuICAgICAgaWYgKHZhbHVlID09PSBDTE9TRUQpIHtcbiAgICAgICAgY2xvc2UodERzdCk7XG4gICAgICAgIGNsb3NlKGZEc3QpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGF3YWl0IHNlbmQoZm4odmFsdWUpID8gdERzdCA6IGZEc3QsIHZhbHVlKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBbdERzdCwgZkRzdF07XG59XG5cbi8qKlxuICogTWVyZ2VzIG9uZSBvciBtb3JlIGNoYW5uZWxzIGludG8gYSBzaW5nbGUgZGVzdGluYXRpb24gY2hhbm5lbC5cbiAqXG4gKiBWYWx1ZXMgYXJlIGdpdmVuIHRvIHRoZSBkZXN0aW5hdGlvbiBjaGFubmVsIGFzIHRoZXkgYXJlIHNlbnQgdG8gdGhlIHNvdXJjZVxuICogY2hhbm5lbHMuIElmIGBtZXJnZWAgaXMgY2FsbGVkIHdoZW4gdGhlcmUgYXJlIGFscmVhZHkgdmFsdWVzIG9uIG11bHRpcGxlXG4gKiBzb3VyY2UgY2hhbm5lbHMsIHRoZSBvcmRlciB0aGF0IHRoZXkncmUgcHV0IG9udG8gdGhlIGRlc3RpbmF0aW9uIGNoYW5uZWwgaXNcbiAqIHJhbmRvbS5cbiAqXG4gKiBUaGUgZGVzdGluYXRpb24gY2hhbm5lbCBpcyBjcmVhdGVkIGJ5IHRoZSBmdW5jdGlvbiBiYXNlZCBvbiB0aGUgYnVmZmVyIHZhbHVlXG4gKiBwYXNzZWQgYXMgdGhlIHNlY29uZCBwYXJhbWV0ZXIuIElmIHRoaXMgaXMgbWlzc2luZywgYG51bGxgLCBvciBgMGAsIHRoZVxuICogZGVzdGluYXRpb24gY2hhbm5lbCB3aWxsIGJlIHVuYnVmZmVyZWQuIElmIGl0J3MgYSBwb3NpdGl2ZSBpbnRlZ2VyLCB0aGVcbiAqIGRlc3RpbmF0aW9uIGNoYW5uZWwgaXMgYnVmZmVyZWQgYnkgYSBmaXhlZCBidWZmZXIgb2YgdGhhdCBzaXplLiBJZiB0aGVcbiAqIHBhcmFtZXRlciBpcyBhIGJ1ZmZlciwgdGhlbiB0aGF0IGJ1ZmZlciBpcyB1c2VkIHRvIGJ1ZmZlciB0aGUgZGVzdGluYXRpb25cbiAqIGNoYW5uZWwuXG4gKlxuICogQXMgZWFjaCBzb3VyY2UgY2hhbm5lbCBjbG9zZXMsIGl0IGlzIHJlbW92ZWQgZnJvbSB0aGUgbWVyZ2UsIGxlYXZpbmcgdGhlXG4gKiBjaGFubmVscyB0aGF0IGFyZSBzdGlsbCBvcGVuIHRvIGNvbnRpbnVlIG1lcmdpbmcuIFdoZW4gKmFsbCogb2YgdGhlIHNvdXJjZVxuICogY2hhbm5lbHMgY2xvc2UsIHRoZW4gdGhlIGRlc3RpbmF0aW9uIGNoYW5uZWwgaXMgY2xvc2VkLlxuICpcbiAqIGBgYFxuICogaW1wb3J0IHsgZ28sIGNoYW4sIHNlbmQsIHJlY3YgfSBmcm9tIFwiQGNoYW5rby9jaGFubmVsc1wiO1xuICogaW1wb3J0IHsgbWVyZ2UgfSBmcm9tIFwiQGNoYW5rby9vcGVyYXRpb25zXCI7XG4gKlxuICogY29uc3QgaW5wdXQxID0gY2hhbigpO1xuICogY29uc3QgaW5wdXQyID0gY2hhbigpO1xuICogY29uc3QgaW5wdXQzID0gY2hhbigpO1xuICogY29uc3Qgb3V0cHV0ID0gbWVyZ2UoW2lucHV0MSwgaW5wdXQyLCBpbnB1dDNdKTtcbiAqXG4gKiBnbyhhc3luYyAoKSA9PiB7XG4gKiAgIC8vIEJlY2F1c2Ugd2UncmUgc2VuZGluZyB0byBhbGwgdGhyZWUgY2hhbm5lbHMgaW4gdGhlIHNhbWVcbiAqICAgLy8gcHJvY2Vzcywgd2Uga25vdyB0aGUgb3JkZXIgaW4gd2hpY2ggdGhlIHZhbHVlcyB3aWxsIGJlXG4gKiAgIC8vIHNlbnQgdG8gdGhlIG91dHB1dCBjaGFubmVsOyBpbiBnZW5lcmFsLCB3ZSB3b24ndCBrbm93IHRoaXNcbiAqICAgYXdhaXQgc2VuZChpbnB1dDEsIDEpO1xuICogICBhd2FpdCBzZW5kKGlucHV0MiwgMik7XG4gKiAgIGF3YWl0IHNlbmQoaW5wdXQzLCAzKTtcbiAqIH0pO1xuICpcbiAqIGdvKGFzeW5jICgpID0+IHtcbiAqICAgY29uc29sZS5sb2coYXdhaXQgcmVjdihvdXRwdXQpKTsgICAgICAvLyAtPiAxXG4gKiAgIGNvbnNvbGUubG9nKGF3YWl0IHJlY3Yob3V0cHV0KSk7ICAgICAgLy8gLT4gMlxuICogICBjb25zb2xlLmxvZyhhd2FpdCByZWN2KG91dHB1dCkpOyAgICAgIC8vIC0+IDNcbiAqIH0pO1xuICogYGBgXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjaGFua28vb3BlcmF0aW9uc35PcGVyYXRpb25zXG4gKiBAcGFyYW0ge21vZHVsZTpjaGFua28vY2hhbm5lbH5DaGFubmVsW119IHNyY3MgQW4gYXJyYXkgb2Ygc291cmNlIGNoYW5uZWxzLlxuICogQHBhcmFtIHsobnVtYmVyfG1vZHVsZTpjaGFua28vYnVmZmVyfkJ1ZmZlcil9IFtidWZmZXI9MF0gQSBidWZmZXIgdXNlZCB0b1xuICogICAgIGNyZWF0ZSB0aGUgZGVzdGluYXRpb24gY2hhbm5lbC4gSWYgdGhpcyBpcyBhIG51bWJlciwgYVxuICogICAgIHtAbGluayBtb2R1bGU6Y2hhbmtvL2J1ZmZlcn5GaXhlZEJ1ZmZlcn0gb2YgdGhhdCBzaXplIHdpbGwgYmUgdXNlZC4gSWZcbiAqICAgICB0aGlzIGlzIGAwYCBvciBub3QgcHJlc2VudCwgdGhlIGNoYW5uZWwgd2lsbCBiZSB1bmJ1ZmZlcmVkLlxuICogQHJldHVybiB7bW9kdWxlOmNoYW5rby9jaGFubmVsfkNoYW5uZWx9IFRoZSBkZXN0aW5hdGlvbiBjaGFubmVsLCB3aGljaCB3aWxsXG4gKiAgICAgcmVjZWl2ZSBhbGwgdmFsdWVzIHB1dCBvbnRvIGV2ZXJ5IHNvdXJjZSBjaGFubmVsLlxuICovXG5mdW5jdGlvbiBtZXJnZShzcmNzLCBidWZmZXIgPSAwKSB7XG4gIGNvbnN0IGRzdCA9IGNoYW4oYnVmZmVyKTtcbiAgY29uc3QgaW5wdXRzID0gc3Jjcy5zbGljZSgpO1xuXG4gIGdvKGFzeW5jICgpID0+IHtcbiAgICBmb3IgKDs7KSB7XG4gICAgICBpZiAoaW5wdXRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNvbnN0IHsgdmFsdWUsIGNoYW5uZWwgfSA9IGF3YWl0IHNlbGVjdChpbnB1dHMpO1xuICAgICAgaWYgKHZhbHVlID09PSBDTE9TRUQpIHtcbiAgICAgICAgaW5wdXRzLnNwbGljZShpbnB1dHMuaW5kZXhPZihjaGFubmVsKSwgMSk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgYXdhaXQgc2VuZChkc3QsIHZhbHVlKTtcbiAgICB9XG4gICAgY2xvc2UoZHN0KTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRzdDtcbn1cblxuLyoqXG4gKiBTcGxpdHMgYSBzaW5nbGUgY2hhbm5lbCBpbnRvIG11bHRpcGxlIGRlc3RpbmF0aW9uIGNoYW5uZWxzLCB3aXRoIGVhY2hcbiAqIGRlc3RpbmF0aW9uIGNoYW5uZWwgcmVjZWl2aW5nIGV2ZXJ5IHZhbHVlIHNlbnQgdG8gdGhlIHNvdXJjZSBjaGFubmVsLlxuICpcbiAqIEV2ZXJ5IHBhcmFtZXRlciBhZnRlciB0aGUgZmlyc3QgcmVwcmVzZW50cyB0aGUgYnVmZmVyIGZyb20gYSBzaW5nbGVcbiAqIGRlc3RpbmF0aW9uIGNoYW5uZWwuIEVhY2ggYDBgIG9yIGBudWxsYCB3aWxsIHByb2R1Y2UgYW4gdW5idWZmZXJlZCBjaGFubmVsLFxuICogd2hpbGUgZWFjaCBwb3NpdGl2ZSBpbnRlZ2VyIHdpbGwgcHJvZHVjZSBhIGNoYW5uZWwgYnVmZmVyZWQgYnkgYSBmaXhlZCBidWZmZXJcbiAqIG9mIHRoYXQgc2l6ZS4gRWFjaCBidWZmZXIgd2lsbCBwcm9kdWNlIGEgYnVmZmVyZWQgY2hhbm5lbCBiYWNrZWQgYnkgdGhhdFxuICogYnVmZmVyLiBJZiB0aGVyZSBhcmUgbm8gcGFyYW1ldGVycyBhZnRlciB0aGUgZmlyc3QsIHRoZW4gdHdvIHVuYnVmZmVyZWRcbiAqIGNoYW5uZWxzIHdpbGwgYmUgcHJvZHVjZWQgYXMgYSBkZWZhdWx0LlxuICpcbiAqIFdoZW4gdGhlIHNvdXJjZSBjaGFubmVsIGlzIGNsb3NlZCwgYWxsIGRlc3RpbmF0aW9uIGNoYW5uZWxzIHdpbGwgYWxzbyBiZVxuICogY2xvc2VkLiBIb3dldmVyLCBpZiBkZXN0aW5hdGlvbiBjaGFubmVscyBhcmUgY2xvc2VkLCB0aGV5IGRvIG5vdGhpbmcgdG8gdGhlXG4gKiBzb3VyY2UgY2hhbm5lbC5cbiAqXG4gKiBgYGBcbiAqIGltcG9ydCB7IGdvLCBjaGFuLCBzZW5kIH0gZnJvbSBcIkBjaGFua28vY2hhbm5lbHNcIjtcbiAqIGltcG9ydCB7IHNwbGl0IH0gZnJvbSBcIkBjaGFua28vb3BlcmF0aW9uc1wiO1xuICpcbiAqIGNvbnN0IGlucHV0ID0gY2hhbigpO1xuICogY29uc3Qgb3V0cHV0cyA9IHNwbGl0KGlucHV0LCAzKTtcbiAqXG4gKiBnbyhhc3luYyAoKSA9PiB7XG4gKiAgIGF3YWl0IHNlbmQoaW5wdXQsIDEpO1xuICogICBhd2FpdCBzZW5kKGlucHV0LCAyKTtcbiAqICAgYXdhaXQgc2VuZChpbnB1dCwgMyk7XG4gKiB9KTtcbiAqXG4gKiBnbyhhc3luYyAoKSA9PiB7XG4gKiAgIGZvciBhd2FpdCAoY29uc3Qgb3V0cHV0IG9mIG91dHB1dHMpIHtcbiAqICAgICBjb25zb2xlLmxvZyhvdXRwdXQpO1xuICogICAgIC8vIC0+IDFcbiAqICAgICAvLyAtPiAyXG4gKiAgICAgLy8gLT4gM1xuICogICB9XG4gKiB9KTtcbiAqIGBgYFxuICpcbiAqIFRoaXMgZnVuY3Rpb24gbW92ZXMgaXRzIHZhbHVlcyB0byB0aGUgb3V0cHV0IGNoYW5uZWxzIGFzeW5jaHJvbm91c2x5LiBUaGlzXG4gKiBtZWFucyB0aGF0IGV2ZW4gd2hlbiB1c2luZyB1bmJ1ZmZlcmVkIGNoYW5uZWxzLCBpdCBpcyBub3QgbmVjZXNzYXJ5IGZvciBhbGxcbiAqIG91dHB1dCBjaGFubmVscyB0byBiZSByZWNlaXZlZCBmcm9tIGJlZm9yZSB0aGUgbmV4dCBzZW5kIHRvIHRoZSBpbnB1dCBjaGFubmVsXG4gKiBjYW4gY29tcGxldGUuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjaGFua28vb3BlcmF0aW9uc35PcGVyYXRpb25zXG4gKiBAcGFyYW0ge21vZHVsZTpjaGFua28vY2hhbm5lbH5DaGFubmVsfSBzcmMgVGhlIHNvdXJjZSBjaGFubmVsLlxuICogQHBhcmFtIHsuLi4obnVtYmVyfG1vZHVsZTpjaGFua28vYnVmZmVyfkJ1ZmZlcil9IFtidWZmZXJzPTJdIFRoZSBidWZmZXJzIHVzZWRcbiAqICAgICB0byBjcmVhdGUgdGhlIGRlc3RpbmF0aW9uIGNoYW5uZWxzLiBFYWNoIGVudHJ5IGlzIHRyZWF0ZWQgc2VwYXJhdGVseS4gSWZcbiAqICAgICBvbmUgaXMgYSBudW1iZXIsIHRoZW4gYVxuICogICAgIHtAbGluayBtb2R1bGU6Y2hhbmtvL2J1ZmZlcn5GaXhlZEJ1ZmZlcnxGaXhlZEJ1ZmZlcn0gb2YgdGhhdCBzaXplIHdpbGwgYmVcbiAqICAgICB1c2VkLiBJZiBvbmUgaXMgYSBgMGAsIHRoZW4gdGhlIGNvcnJlc3BvbmRpbmcgY2hhbm5lbCB3aWxsIGJlIHVuYnVmZmVyZWQuXG4gKiAgICAgKipFeGNlcHRpb246KiogaWYgYSBzaW5nbGUgbnVtYmVyIGlzIHBhc3NlZCwgdGhlbiB0aGF0IG51bWJlciBvZlxuICogICAgIHVuYnVmZXJyZWQgY2hhbm5lbHMgd2lsbCBiZSBjcmVhdGVkLiBUaGlzIG1lYW5zIHRoYXQgdGhlIGRlZmF1bHQgaXMgdG9cbiAqICAgICBjcmVhdGUgdHdvIHVuYnVmZmVyZWQgY2hhbm5lbHMuIFRvIGNyZWF0ZSBhIHNpbmdsZSBjaGFubmVsIHdpdGggYSBmaXhlZFxuICogICAgIGJ1ZmZlciwgdXNlIGB7QGxpbmsgY2hhbmtvfkNoYW5rby5maXhlZHxmaXhlZH1gIGV4cGxpY2l0bHkuXG4gKiBAcmV0dXJuIHttb2R1bGU6Y2hhbmtvL2NoYW5uZWx+Q2hhbm5lbFtdfSBBbiBhcnJheSBvZiBkZXN0aW5hdGlvbiBjaGFubmVscy5cbiAqL1xuZnVuY3Rpb24gc3BsaXQoc3JjLCAuLi5idWZmZXJzKSB7XG4gIGxldCBiZnMgPSBidWZmZXJzLmxlbmd0aCA9PT0gMCA/IFsyXSA6IGJ1ZmZlcnM7XG4gIGlmIChiZnMubGVuZ3RoID09PSAxICYmIGlzTnVtYmVyKGJmc1swXSkpIHtcbiAgICBjb25zdCBjb3VudCA9IGJmc1swXTtcbiAgICBiZnMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgIGJmcy5wdXNoKDApO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGRzdHMgPSBiZnMubWFwKGJmID0+IGNoYW4oYmYpKTtcbiAgY29uc3QgZG9uZSA9IGNoYW4oKTtcbiAgbGV0IGNvdW50ID0gMDtcblxuICBmdW5jdGlvbiBjYWxsYmFjaygpIHtcbiAgICBpZiAoLS1jb3VudCA9PT0gMCkge1xuICAgICAgc2VuZEFzeW5jKGRvbmUpO1xuICAgIH1cbiAgfVxuXG4gIGdvKGFzeW5jICgpID0+IHtcbiAgICBmb3IgKDs7KSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGF3YWl0IHJlY3Yoc3JjKTtcbiAgICAgIGlmICh2YWx1ZSA9PT0gQ0xPU0VEKSB7XG4gICAgICAgIGZvciAoY29uc3QgZHN0IG9mIGRzdHMpIHtcbiAgICAgICAgICBjbG9zZShkc3QpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjb3VudCA9IGRzdHMubGVuZ3RoO1xuICAgICAgZm9yIChjb25zdCBkc3Qgb2YgZHN0cykge1xuICAgICAgICBzZW5kQXN5bmMoZHN0LCB2YWx1ZSwgY2FsbGJhY2spO1xuICAgICAgfVxuICAgICAgYXdhaXQgcmVjdihkb25lKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBkc3RzO1xufVxuXG4vKipcbiAqIFV0aWxpdHkgZnVuY3Rpb24gdG8gYWRkIHRoZSBhYmlsaXR5IHRvIGJlIHRhcHBlZCB0byBhIGNoYW5uZWwgdGhhdCBpcyBiZWluZ1xuICogdGFwcGVkLiBUaGlzIHdpbGwgYWRkIGEgc2luZ2xlIHByb3BlcnR5IHRvIHRoYXQgY2hhbm5lbCBvbmx5IChuYW1lZFxuICogJ0BAbXVsdGl0YXAvdGFwcycgc28gYXMgdG8gZGVjcmVhc2UgdGhlIGNoYW5jZSBvZiBjb2xsaXNpb24pLCBidXQgdGhlIHRhcHBpbmdcbiAqIGZ1bmN0aW9uYWxpdHkgaXRzZWxmIGlzIHByb3ZpZGVkIG91dHNpZGUgdGhlIGNoYW5uZWwgb2JqZWN0LiBUaGlzIG5ld1xuICogcHJvcGVydHkgaXMgYW4gYXJyYXkgb2YgdGhlIGNoYW5uZWxzIHRhcHBpbmcgdGhpcyBjaGFubmVsLCBhbmQgaXQgd2lsbCBiZVxuICogcmVtb3ZlZCBpZiBhbGwgdGFwcyBhcmUgcmVtb3ZlZC5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTpjaGFua28vY2hhbm5lbH5DaGFubmVsfSBzcmMgVGhlIHNvdXJjZSBjaGFubmVsIHRvIGJlIHRhcHBlZC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIG1ha2VUYXAoc3JjKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzcmMsIFRBUFMsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgd3JpdGFibGU6IHRydWUsXG4gICAgdmFsdWU6IFtdXG4gIH0pO1xuXG4gIGNvbnN0IGRvbmUgPSBjaGFuKCk7XG4gIGxldCBjb3VudCA9IDA7XG5cbiAgZnVuY3Rpb24gY2FsbGJhY2soKSB7XG4gICAgaWYgKC0tY291bnQgPT09IDApIHtcbiAgICAgIHNlbmRBc3luYyhkb25lKTtcbiAgICB9XG4gIH1cblxuICBnbyhhc3luYyAoKSA9PiB7XG4gICAgZm9yICg7Oykge1xuICAgICAgY29uc3QgdmFsdWUgPSBhd2FpdCByZWN2KHNyYyk7XG4gICAgICBpZiAodmFsdWUgPT09IENMT1NFRCB8fCBzcmNbVEFQU10ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGRlbGV0ZSBzcmNbVEFQU107XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjb3VudCA9IHNyY1tUQVBTXS5sZW5ndGg7XG4gICAgICBmb3IgKGNvbnN0IHRhcCBvZiBzcmNbVEFQU10pIHtcbiAgICAgICAgc2VuZEFzeW5jKHRhcCwgdmFsdWUsIGNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICAgIGF3YWl0IHJlY3YoZG9uZSk7XG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBUYXBzIGEgY2hhbm5lbCwgc2VuZGluZyBhbGwgb2YgdGhlIHZhbHVlcyBzZW50IHRvIGl0IHRvIHRoZSBkZXN0aW5hdGlvblxuICogY2hhbm5lbC5cbiAqXG4gKiBBIHNvdXJjZSBjaGFubmVsIGNhbiBiZSB0YXBwZWQgbXVsdGlwbGUgdGltZXMsIGFuZCBhbGwgb2YgdGhlIHRhcHBpbmdcbiAqIChkZXN0aW5hdGlvbikgY2hhbm5lbHMgcmVjZWl2ZSBlYWNoIHZhbHVlIHNlbnQgdG8gdGhlIHRhcHBlZCAoc291cmNlKVxuICogY2hhbm5lbC5cbiAqXG4gKiBUaGlzIGlzIGRpZmZlcmVudCBmcm9tXG4gKiBge0BsaW5rIG1vZHVsZTpjaGFua28vb3BlcmF0aW9uc35PcGVyYXRpb25zLnNwbGl0fHNwbGl0fWAgaW4gdGhhdCBpdCdzXG4gKiB0ZW1wb3JhcnkuIENoYW5uZWxzIGNhbiB0YXAgYSBjaGFubmVsIGFuZCB0aGVuIHVudGFwIGl0LCBtdWx0aXBsZSB0aW1lcywgYXNcbiAqIG5lZWRlZC4gSWYgYSBzb3VyY2UgY2hhbm5lbCBoYXMgYWxsIG9mIGl0cyB0YXBzIHJlbW92ZWQsIHRoZW4gaXQgcmV2ZXJ0cyB0byBhXG4gKiBub3JtYWwgY2hhbm5lbCwganVzdCBhcyBpdCB3YXMgYmVmb3JlIGl0IHdhcyB0YXBwZWQuXG4gKlxuICogQWxzbyB1bmxpa2UgYHtAbGluayBtb2R1bGU6Y2hhbmtvL29wZXJhdGlvbnN+T3BlcmF0aW9ucy5zcGxpdHxzcGxpdH1gLCBlYWNoXG4gKiBjYWxsIGNhbiBvbmx5IHRhcCBvbmNlLiBGb3IgbXVsdGlwbGUgY2hhbm5lbHMgdG8gdGFwIGEgc291cmNlIGNoYW5uZWwsIGB0YXBgXG4gKiBoYXMgdG8gYmUgY2FsbGVkIG11bHRpcGxlIHRpbWVzLlxuICpcbiAqIENsb3NpbmcgZWl0aGVyIHRoZSBzb3VyY2Ugb3IgYW55IG9mIHRoZSBkZXN0aW5hdGlvbiBjaGFubmVscyBoYXMgbm8gZWZmZWN0IG9uXG4gKiBhbnkgb2YgdGhlIG90aGVyIGNoYW5uZWxzLlxuICpcbiAqIGBgYFxuICogaW1wb3J0IHsgZ28sIGNoYW4sIHNlbmQsIHJlY3YgfSBmcm9tIFwiQGNoYW5rby9jaGFubmVsc1wiO1xuICogaW1wb3J0IHsgdGFwIH0gZnJvbSBcIkBjaGFua28vb3BlcmF0aW9uc1wiO1xuICpcbiAqIGNvbnN0IGlucHV0ID0gY2hhbigpO1xuICogY29uc3QgdGFwcGVyID0gY2hhbigpO1xuICogdGFwKGlucHV0LCB0YXBwZXIpO1xuICpcbiAqIGdvKGFzeW5jICgpID0+IHtcbiAqICAgYXdhaXQgc2VuZChpbnB1dCwgMSk7XG4gKiAgIGF3YWl0IHNlbmQoaW5wdXQsIDIpO1xuICogfSk7XG4gKlxuICogZ28oYXN5bmMgKCkgPT4ge1xuICogICBjb25zb2xlLmxvZyhhd2FpdCByZWN2KHRhcHBlcikpOyAgIC8vIC0+IDFcbiAqICAgY29uc29sZS5sb2coYXdhaXQgcmVjdih0YXBwZXIpKTsgICAvLyAtPiAyXG4gKiB9KTtcbiAqXG4gKiBgYGBcbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNoYW5rby9vcGVyYXRpb25zfk9wZXJhdGlvbnNcbiAqIEBwYXJhbSB7bW9kdWxlOmNoYW5rby9jaGFubmVsfkNoYW5uZWx9IHNyYyBUaGUgY2hhbm5lbCB0byBiZSB0YXBwZWQuXG4gKiBAcGFyYW0ge21vZHVsZTpjaGFua28vY2hhbm5lbH5DaGFubmVsfSBbZGVzdF0gVGhlIGNoYW5uZWwgdGFwcGluZyB0aGUgc291cmNlXG4gKiAgICAgY2hhbm5lbC4gSWYgdGhpcyBpcyBub3QgcHJlc2VudCwgYSBuZXcgdW5idWZmZXJlZCBjaGFubmVsIHdpbGwgYmVcbiAqICAgICBjcmVhdGVkLlxuICogQHJldHVybiB7bW9kdWxlOmNoYW5rby9jaGFubmVsfkNoYW5uZWx9IFRoZSBkZXN0aW5hdGlvbiBjaGFubmVsLiBUaGlzIGlzIHRoZVxuICogICAgIHNhbWUgYXMgdGhlIHNlY29uZCBhcmd1bWVudCwgaWYgcHJlc2VudDsgb3RoZXJ3aXNlIGl0IGlzIHRoZVxuICogICAgIG5ld2x5LWNyZWF0ZWQgY2hhbm5lbCB0YXBwaW5nIHRoZSBzb3VyY2UgY2hhbm5lbC5cbiAqL1xuZnVuY3Rpb24gdGFwKHNyYywgZHN0ID0gY2hhbigpKSB7XG4gIGlmICghc3JjW1RBUFNdKSB7XG4gICAgbWFrZVRhcChzcmMpO1xuICB9XG4gIGlmICghc3JjW1RBUFNdLmluY2x1ZGVzKGRzdCkpIHtcbiAgICBzcmNbVEFQU10ucHVzaChkc3QpO1xuICB9XG4gIHJldHVybiBkc3Q7XG59XG5cbi8qKlxuICogVW50YXBzIGEgcHJldmlvdXNseSB0YXBwaW5nIGRlc3RpbmF0aW9uIGNoYW5uZWwgZnJvbSBpdHMgc291cmNlIGNoYW5uZWwuXG4gKlxuICogVGhpcyByZW1vdmVzIGEgcHJldmlvdXNseSBjcmVhdGVkIHRhcC4gVGhlIGRlc3RpbmF0aW9uICh0YXBwaW5nKSBjaGFubmVsIHdpbGxcbiAqIHN0b3AgcmVjZWl2aW5nIHRoZSB2YWx1ZXMgc2VudCB0byB0aGUgc291cmNlIGNoYW5uZWwuXG4gKlxuICogSWYgdGhlIGRlc3RpbmF0aW9uIGNoYW5uZWwgd2FzIG5vdCwgaW4gZmFjdCwgdGFwcGluZyB0aGUgc291cmNlIGNoYW5uZWwsIHRoaXNcbiAqIGZ1bmN0aW9uIHdpbGwgZG8gbm90aGluZy4gSWYgYWxsIHRhcHMgYXJlIHJlbW92ZWQsIHRoZSBzb3VyY2UgY2hhbm5lbCByZXZlcnRzXG4gKiB0byBub3JtYWwgKGkuZS4sIGl0IG5vIGxvbmdlciBoYXMgdGhlIHRhcHBpbmcgY29kZSBhcHBsaWVkIHRvIGl0IGFuZCBjYW4gYmVcbiAqIHRha2VuIGZyb20gYXMgbm9ybWFsKS5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNoYW5rby9vcGVyYXRpb25zfk9wZXJhdGlvbnNcbiAqIEBwYXJhbSB7bW9kdWxlOmNoYW5rby9jaGFubmVsfkNoYW5uZWx9IHNyYyBUaGUgdGFwcGVkIGNoYW5uZWwuXG4gKiBAcGFyYW0ge21vZHVsZTpjaGFua28vY2hhbm5lbH5DaGFubmVsfSBkZXN0IFRoZSBjaGFubmVsIHRoYXQgaXMgdGFwcGluZyB0aGVcbiAqICAgICBzb3VyY2UgY2hhbm5lbCB0aGF0IHNob3VsZCBubyBsb25nZXIgYmUgdGFwcGluZyB0aGUgc291cmNlIGNoYW5uZWwuXG4gKi9cbmZ1bmN0aW9uIHVudGFwKHNyYywgZHN0KSB7XG4gIGNvbnN0IHRhcHMgPSBzcmNbVEFQU107XG4gIGlmICh0YXBzKSB7XG4gICAgY29uc3QgaW5kZXggPSB0YXBzLmluZGV4T2YoZHN0KTtcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICB0YXBzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICBpZiAodGFwcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgc2VuZEFzeW5jKHNyYyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwgdGFwcyBmcm9tIGEgc291cmNlIGNoYW5uZWwuXG4gKlxuICogVGhlIHByZXZpb3VzbHktdGFwcGVkIGNoYW5uZWwgcmV2ZXJ0cyB0byBhIG5vcm1hbCBjaGFubmVsLCB3aGlsZSBhbnkgY2hhbm5lbHNcbiAqIHRoYXQgbWlnaHQgaGF2ZSBiZWVuIHRhcHBpbmcgaXQgbm8gbG9uZ2VyIHJlY2VpdmUgdmFsdWVzIGZyb20gdGhlIHNvdXJjZVxuICogY2hhbm5lbC4gSWYgdGhlIHNvdXJjZSBjaGFubmVsIGhhZCBubyB0YXBzLCB0aGlzIGZ1bmN0aW9uIGRvZXMgbm90aGluZy5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNoYW5rby9vcGVyYXRpb25zfk9wZXJhdGlvbnNcbiAqIEBwYXJhbSB7bW9kdWxlOmNoYW5rby9jaGFubmVsfkNoYW5uZWx9IHNyYyBUaGUgdGFwcGVkIGNoYW5uZWwuIEFsbCB0YXBzIHdpbGxcbiAqICAgICBiZSByZW1vdmVkIGZyb20gdGhpcyBjaGFubmVsLlxuICovXG5mdW5jdGlvbiB1bnRhcEFsbChzcmMpIHtcbiAgaWYgKHNyY1tUQVBTXSkge1xuICAgIHNyY1tUQVBTXSA9IFtdO1xuICAgIHNlbmRBc3luYyhzcmMpO1xuICB9XG59XG5cbi8qKlxuICogTWFwcyB0aGUgdmFsdWVzIGZyb20gb25lIG9yIG1vcmUgc291cmNlIGNoYW5uZWxzIHRocm91Z2ggYSBmdW5jdGlvbiwgc2VuZGluZ1xuICogdGhlIHJlc3VsdHMgdG8gYSBuZXcgY2hhbm5lbC5cbiAqXG4gKiBUaGUgbWFwcGluZyBmdW5jdGlvbiBpcyBnaXZlbiBvbmUgdmFsdWUgZnJvbSBlYWNoIHNvdXJjZSBjaGFubmVsLCBhZnRlciBhdFxuICogbGVhc3Qgb25lIHZhbHVlIGJlY29tZXMgYXZhaWxhYmxlIG9uIGV2ZXJ5IHNvdXJjZSBjaGFubmVsLiBUaGUgb3V0cHV0IHZhbHVlXG4gKiBmcm9tIHRoZSBmdW5jdGlvbiBpcyB0aGVuIHNlbnQgdG8gdGhlIGRlc3RpbmF0aW9uIGNoYW5uZWwuXG4gKlxuICogVGhlIGRlc3RpbmF0aW9uIGNoYW5uZWwgaXMgY3JlYXRlZCBieSB0aGUgZnVuY3Rpb24gYmFzZWQgb24gdGhlIGJ1ZmZlciB2YWx1ZVxuICogcGFzc2VkIGFzIHRoZSB0aGlyZCBwYXJhbWV0ZXIuIElmIHRoaXMgaXMgbWlzc2luZywgYG51bGxgLCBvciBgMGAsIHRoZVxuICogZGVzdGluYXRpb24gY2hhbm5lbCB3aWxsIGJlIHVuYnVmZmVyZWQuIElmIGl0J3MgYSBwb3NpdGl2ZSBpbnRlZ2VyLCB0aGVcbiAqIGRlc3RpbmF0aW9uIGNoYW5uZWwgaXMgYnVmZmVyZWQgYnkgYSBmaXhlZCBidWZmZXIgb2YgdGhhdCBzaXplLiBJZiB0aGVcbiAqIHBhcmFtZXRlciBpcyBhIGJ1ZmZlciwgdGhlbiB0aGF0IGJ1ZmZlciBpcyB1c2VkIHRvIGJ1ZmZlciB0aGUgZGVzdGluYXRpb25cbiAqIGNoYW5uZWwuXG4gKlxuICogT25jZSAqYW55KiBzb3VyY2UgY2hhbm5lbCBpcyBjbG9zZWQsIHRoZSBtYXBwaW5nIGNlYXNlcyBhbmQgdGhlIGRlc3RpbmF0aW9uXG4gKiBjaGFubmVsIGlzIGFsc28gY2xvc2VkLlxuICpcbiAqIFRoaXMgaXMgb2J2aW91c2x5IHNpbWlsYXIgdG8gYSBtYXAgdHJhbnNkdWNlciwgYnV0IHVubGlrZSBhIHRyYW5zZHVjZXIsIHRoaXNcbiAqIGZ1bmN0aW9uIHdvcmtzIHdpdGggbXVsdGlwbGUgaW5wdXQgY2hhbm5lbHMuIFRoaXMgaXMgc29tZXRoaW5nIHRoYXQgYVxuICogdHJhbnNkdWNlciBvbiBhIHNpbmdsZSBjaGFubmVsIGlzIHVuYWJsZSB0byBkby5cbiAqXG4gKiBgYGBcbiAqIGltcG9ydCB7IGdvLCBjaGFuLCBzZW5kLCByZWN2LCBjbG9zZSwgaXNDbG9zZWQgfSBmcm9tIFwiQGNoYW5rby9jaGFubmVsc1wiO1xuICogaW1wb3J0IHsgbWFwIH0gZnJvbSBcIkBjaGFua28vb3BlcmF0aW9uc1wiXG4gKlxuICogY29uc3QgaW5wdXQxID0gY2hhbigpO1xuICogY29uc3QgaW5wdXQyID0gY2hhbigpO1xuICogY29uc3QgaW5wdXQzID0gY2hhbigpO1xuICogY29uc3Qgb3V0cHV0ID0gbWFwKCh4LCB5LCB6KSA9PiB4ICsgeSArIHosIFtpbnB1dDEsIGlucHV0MiwgaW5wdXQzXSk7XG4gKlxuICogZ28oYXN5bmMgKCkgPT4ge1xuICogICBhd2FpdCBzZW5kKGlucHV0MSwgMSk7XG4gKiAgIGF3YWl0IHNlbmQoaW5wdXQxLCAyKTtcbiAqICAgYXdhaXQgc2VuZChpbnB1dDEsIDMpO1xuICogfSk7XG4gKlxuICogZ28oYXN5bmMgKCkgPT4ge1xuICogICBhd2FpdCBzZW5kKGlucHV0MiwgMTApO1xuICogICBhd2FpdCBzZW5kKGlucHV0MiwgMjApO1xuICogICBjbG9zZShpbnB1dDIpO1xuICogfSk7XG4gKlxuICogZ28oYXN5bmMgKCkgPT4ge1xuICogICBhd2FpdCBzZW5kKGlucHV0MywgMTAwKTtcbiAqICAgYXdhaXQgc2VuZChpbnB1dDMsIDIwMCk7XG4gKiAgIGF3YWl0IHNlbmQoaW5wdXQzLCAzMDApO1xuICogfSk7XG4gKlxuICogZ28oYXN5bmMgKCkgPT4ge1xuICogICBjb25zb2xlLmxvZyhhd2FpdCByZWN2KG91dHB1dCkpOyAgICAgLy8gLT4gMTExXG4gKiAgIGNvbnNvbGUubG9nKGF3YWl0IHJlY3Yob3V0cHV0KSk7ICAgICAvLyAtPiAyMjJcbiAqICAgLy8gT3V0cHV0IGNsb3NlcyBub3cgYmVjYXVzZSBpbnB1dDIgY2xvc2VzIGFmdGVyIDIgdmFsdWVzXG4gKiAgIGNvbnNvbGUubG9nKGlzQ2xvc2VkKG91dHB1dCkpOyAgICAgICAvLyAtPiB0cnVlXG4gKiB9KTtcbiAqIGBgYFxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y2hhbmtvL29wZXJhdGlvbnN+T3BlcmF0aW9uc1xuICogQHBhcmFtIHttb2R1bGU6Y2hhbmtvL29wZXJhdGlvbnN+bWFwcGVyfSBmbiBUaGUgbWFwcGluZyBmdW5jdGlvbi4gVGhpcyBzaG91bGRcbiAqICAgICBoYXZlIG9uZSBwYXJhbWV0ZXIgZm9yIGVhY2ggc291cmNlIGNoYW5uZWwgYW5kIHJldHVybiBhIHNpbmdsZSB2YWx1ZS5cbiAqIEBwYXJhbSB7bW9kdWxlOmNoYW5rby9jaGFubmVsfkNoYW5uZWxbXX0gc3JjcyBUaGUgc291cmNlIGNoYW5uZWxzLlxuICogQHBhcmFtIHsobnVtYmVyfG1vZHVsZTpjaGFua28vYnVmZmVyfkJ1ZmZlcil9IFtidWZmZXI9MF0gQSBidWZmZXIgdXNlZCB0b1xuICogICAgIGNyZWF0ZSB0aGUgZGVzdGluYXRpb24gY2hhbm5lbC4gSWYgdGhpcyBpcyBhIG51bWJlciwgYVxuICogICAgIHtAbGluayBtb2R1bGU6Y2hhbmtvL2J1ZmZlcn5GaXhlZEJ1ZmZlcn0gb2YgdGhhdCBzaXplIHdpbGwgYmUgdXNlZC4gSWZcbiAqICAgICB0aGlzIGlzIGAwYCBvciBub3QgcHJlc2VudCwgdGhlIGNoYW5uZWwgd2lsbCBiZSB1bmJ1ZmZlcmVkLlxuICogQHJldHVybiB7bW9kdWxlOmNoYW5rby9jaGFubmVsfkNoYW5uZWx9IFRoZSBkZXN0aW5hdGlvbiBjaGFubmVsLlxuICovXG5mdW5jdGlvbiBtYXAoZm4sIHNyY3MsIGJ1ZmZlciA9IDApIHtcbiAgY29uc3QgZHN0ID0gY2hhbihidWZmZXIpO1xuICBjb25zdCBzcmNsZW4gPSBzcmNzLmxlbmd0aDtcbiAgY29uc3QgdmFsdWVzID0gW107XG4gIGNvbnN0IGNhbGxiYWNrcyA9IFtdO1xuICBjb25zdCB0ZW1wID0gY2hhbigpO1xuICBsZXQgY291bnQ7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcmNsZW47IGkrKykge1xuICAgIGNhbGxiYWNrc1tpXSA9IChpbmRleCA9PiB7XG4gICAgICByZXR1cm4gdmFsdWUgPT4ge1xuICAgICAgICB2YWx1ZXNbaW5kZXhdID0gdmFsdWU7XG4gICAgICAgIGlmICgtLWNvdW50ID09PSAwKSB7XG4gICAgICAgICAgc2VuZEFzeW5jKHRlbXAsIHZhbHVlcy5zbGljZSgpKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KShpKTtcbiAgfVxuXG4gIGdvKGFzeW5jICgpID0+IHtcbiAgICBmb3IgKDs7KSB7XG4gICAgICBjb3VudCA9IHNyY2xlbjtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3JjbGVuOyBpKyspIHtcbiAgICAgICAgcmVjdkFzeW5jKHNyY3NbaV0sIGNhbGxiYWNrc1tpXSk7XG4gICAgICB9XG4gICAgICBjb25zdCB2YWx1ZXMgPSBhd2FpdCByZWN2KHRlbXApO1xuICAgICAgZm9yIChjb25zdCB2YWx1ZSBvZiB2YWx1ZXMpIHtcbiAgICAgICAgaWYgKHZhbHVlID09PSBDTE9TRUQpIHtcbiAgICAgICAgICAvLyBPbmNlIGEgc291cmNlIGNsb3Nlcywgd2UgY2xvc2UgdGhlIGRlc3RpbmF0aW9uIEFORCB0aGUgcmVzdCBvZiB0aGVcbiAgICAgICAgICAvLyBzb3VyY2VzLiBPdGhlcndpc2UgdGhlIHNvdXJjZXMgd2lsbCBoYXZlIG5vdGhpbmcgcmVjZWl2aW5nIGZyb21cbiAgICAgICAgICAvLyB0aGVtIGFuZCBzZW5kcyB0byB0aGVtIHdpbGwgYmxvY2sgZm9yZXZlci4gQnkgY2xvc2luZyB0aGVtLCBzZW5kc1xuICAgICAgICAgIC8vIHRvIHRoZW0gd2lsbCBpbW1lZGlhdGVseSByZXR1cm4gYGZhbHNlYCBhbmQgbm90IGJsb2NrLlxuICAgICAgICAgIGNsb3NlKGRzdCk7XG4gICAgICAgICAgZm9yIChjb25zdCBzcmMgb2Ygc3Jjcykge1xuICAgICAgICAgICAgY2xvc2Uoc3JjKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBhd2FpdCBzZW5kKGRzdCwgZm4oLi4udmFsdWVzKSk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZHN0O1xufVxuXG5leHBvcnQgeyBwaXBlLCBwYXJ0aXRpb24sIG1lcmdlLCBzcGxpdCwgdGFwLCB1bnRhcCwgdW50YXBBbGwsIG1hcCB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==