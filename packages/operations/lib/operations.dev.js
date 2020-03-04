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



/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vcGVyYXRpb25zL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9vcGVyYXRpb25zL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29wZXJhdGlvbnMvL2hvbWUvYmFyYW5kaXMvRGV2ZWxvcG1lbnQvcHJvamVjdHMvY2hhbmtvL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jSXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vb3BlcmF0aW9ucy8uLi9jaGFubmVscy9saWIvY2hhbmtvLm1pbi5qcyIsIndlYnBhY2s6Ly9vcGVyYXRpb25zLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL29wZXJhdGlvbnMvLi9zcmMvbW9kdWxlcy9jb21tb24uanMiLCJ3ZWJwYWNrOi8vb3BlcmF0aW9ucy8uL3NyYy9tb2R1bGVzL2NvbnZlcnNpb24uanMiLCJ3ZWJwYWNrOi8vb3BlcmF0aW9ucy8uL3NyYy9tb2R1bGVzL2Zsb3cuanMiXSwibmFtZXMiOlsiZSIsInQiLCJtb2R1bGUiLCJleHBvcnRzIiwibiIsInIiLCJvIiwiaSIsImwiLCJjYWxsIiwibSIsImMiLCJkIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiU3ltYm9sIiwidG9TdHJpbmdUYWciLCJ2YWx1ZSIsIl9fZXNNb2R1bGUiLCJjcmVhdGUiLCJiaW5kIiwiZGVmYXVsdCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwicCIsInMiLCJ1IiwiYSIsImYiLCJzdG9yZSIsIndyaXRhYmxlIiwicG9pbnRlciIsImxlbmd0aCIsInB1c2giLCJzbGljZSIsInYiLCJiIiwiYmF0Y2hTaXplIiwiZGlzcGF0Y2hNZXRob2QiLCJNZXNzYWdlQ2hhbm5lbCIsInBvcnQxIiwib25tZXNzYWdlIiwicG9ydDIiLCJwb3N0TWVzc2FnZSIsInNldFRpbWVvdXQiLCJhc3NpZ24iLCJzZXRJbW1lZGlhdGUiLCJ3cmFwcGVkIiwiRnVuY3Rpb24iLCJ3aW5kb3ciLCJhcHBseSIsImFyZ3VtZW50cyIsIlByb21pc2UiLCJyZXNvbHZlIiwidGhlbiIsImRvbmUiLCJyZWplY3QiLCJuZXh0Iiwia2V5IiwiYXJnIiwiX2ludm9rZSIsInJldHVybiIsImFzeW5jSXRlcmF0b3IiLCJ0aHJvdyIsInNlbGYiLCJfaWQiLCJfY2xlYXJGbiIsImNsZWFyVGltZW91dCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImNsb3NlIiwidW5yZWYiLCJyZWYiLCJlbnJvbGwiLCJfaWRsZVRpbWVvdXRJZCIsIl9pZGxlVGltZW91dCIsInVuZW5yb2xsIiwiX3VucmVmQWN0aXZlIiwiYWN0aXZlIiwiX29uVGltZW91dCIsImNsZWFySW1tZWRpYXRlIiwiZG9jdW1lbnQiLCJnZXRQcm90b3R5cGVPZiIsInRvU3RyaW5nIiwicHJvY2VzcyIsIm5leHRUaWNrIiwiaW1wb3J0U2NyaXB0cyIsImRhdGEiLCJjcmVhdGVFbGVtZW50IiwiZG9jdW1lbnRFbGVtZW50Iiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVtb3ZlQ2hpbGQiLCJhcHBlbmRDaGlsZCIsIk1hdGgiLCJyYW5kb20iLCJzb3VyY2UiLCJpbmRleE9mIiwiYWRkRXZlbnRMaXN0ZW5lciIsImF0dGFjaEV2ZW50IiwiQXJyYXkiLCJjYWxsYmFjayIsImFyZ3MiLCJFcnJvciIsImNvbmNhdCIsInJ1biIsImZ1biIsImFycmF5IiwidGl0bGUiLCJicm93c2VyIiwiZW52IiwiYXJndiIsInZlcnNpb24iLCJ2ZXJzaW9ucyIsIm9uIiwiYWRkTGlzdGVuZXIiLCJvbmNlIiwib2ZmIiwicmVtb3ZlTGlzdGVuZXIiLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJlbWl0IiwicHJlcGVuZExpc3RlbmVyIiwicHJlcGVuZE9uY2VMaXN0ZW5lciIsImxpc3RlbmVycyIsImJpbmRpbmciLCJjd2QiLCJjaGRpciIsInVtYXNrIiwicXVldWUiLCJzaXplIiwiaCIsInkiLCJPIiwiaiIsImluaXQiLCJmb3IiLCJzdGVwIiwicmVzdWx0IiwicmVkdWNlZCIsImciLCJ3IiwiVCIsIlMiLCJ4IiwiRSIsIkkiLCJjbG9zZWQiLCJjb21taXQiLCJidWZmZXIiLCJ4Zm9ybSIsInJlY3ZzIiwiXyIsImRpcnR5U2VuZHMiLCJtYXhEaXJ0eSIsInNlbmRzIiwiaGFuZGxlciIsIm1heFF1ZXVlZCIsIk0iLCJkaXJ0eVJlY3ZzIiwiayIsIlAiLCJjaGFubmVsIiwiQSIsInByaW9yaXR5IiwiZmxvb3IiLCJpc0FycmF5IiwiQyIsIkQiLCJMIiwicSIsIlEiLCJGIiwiTiIsInoiLCJSIiwidHJhbnNkdWNlciIsInRpbWVyIiwiYnVmIiwiVSIsImlzQnVmZmVyZWQiLCJpc1RpbWVkIiwiViIsIkIiLCJHIiwiJCIsIkgiLCJYIiwiWSIsIkoiLCJLIiwiVyIsImlzUHJvdG90eXBlT2YiLCJaIiwiZWUiLCJ0ZSIsIm5lIiwiYWxsIiwiaXNOdW1iZXIiLCJpc0Zpbml0ZSIsInJlZHVjZSIsImZuIiwib3V0cHV0IiwiY2hhbiIsImdvIiwiYWNjIiwic2VuZEFzeW5jIiwidG9DaGFubmVsIiwiaXRlcmFibGUiLCJpdGVtIiwic2VuZCIsInRvQXJyYXkiLCJpbnB1dCIsIlRBUFMiLCJwaXBlIiwic3JjIiwiZHN0Iiwia2VlcE9wZW4iLCJyZWN2IiwiQ0xPU0VEIiwicGFydGl0aW9uIiwidEJ1ZmZlciIsImZCdWZmZXIiLCJ0RHN0IiwiZkRzdCIsIm1lcmdlIiwic3JjcyIsImlucHV0cyIsInNlbGVjdCIsInNwbGljZSIsInNwbGl0IiwiYnVmZmVycyIsImJmcyIsImNvdW50IiwiZHN0cyIsIm1hcCIsImJmIiwibWFrZVRhcCIsImNvbmZpZ3VyYWJsZSIsInRhcCIsImluY2x1ZGVzIiwidW50YXAiLCJ0YXBzIiwiaW5kZXgiLCJ1bnRhcEFsbCIsInNyY2xlbiIsInZhbHVlcyIsImNhbGxiYWNrcyIsInRlbXAiLCJyZWN2QXN5bmMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QVMsQ0FBQzBDLElBQUQsRUFBT0YsTUFBTSxDQUFDbE4sS0FBUCxFQUFQLENBQVQ7QUFDRDtBQUNGLE9BTEQ7QUFNRCxLQVBjLEVBT1o3QixDQVBZLENBQWY7QUFRRDs7QUFFRHFNLDZEQUFFLENBQUMsWUFBWTtBQUNiLGFBQVM7QUFDUDZCLFdBQUssR0FBR1ksTUFBUjs7QUFDQSxXQUFLLElBQUk5TyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHOE8sTUFBcEIsRUFBNEI5TyxDQUFDLEVBQTdCLEVBQWlDO0FBQy9Ca1AsMEVBQVMsQ0FBQ3ZCLElBQUksQ0FBQzNOLENBQUQsQ0FBTCxFQUFVZ1AsU0FBUyxDQUFDaFAsQ0FBRCxDQUFuQixDQUFUO0FBQ0Q7O0FBQ0QsWUFBTStPLE1BQU0sR0FBRyxNQUFNNUIsNkRBQUksQ0FBQzhCLElBQUQsQ0FBekI7O0FBQ0EsV0FBSyxNQUFNck8sS0FBWCxJQUFvQm1PLE1BQXBCLEVBQTRCO0FBQzFCLFlBQUluTyxLQUFLLEtBQUt3TSx1REFBZCxFQUFzQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBbkosd0VBQUssQ0FBQ2dKLEdBQUQsQ0FBTDs7QUFDQSxlQUFLLE1BQU1ELEdBQVgsSUFBa0JXLElBQWxCLEVBQXdCO0FBQ3RCMUosMEVBQUssQ0FBQytJLEdBQUQsQ0FBTDtBQUNEOztBQUNEO0FBQ0Q7QUFDRjs7QUFDRCxZQUFNTCw2REFBSSxDQUFDTSxHQUFELEVBQU1mLEVBQUUsQ0FBQyxHQUFHNkMsTUFBSixDQUFSLENBQVY7QUFDRDtBQUNGLEdBdEJDLENBQUY7QUF3QkEsU0FBTzlCLEdBQVA7QUFDRCIsImZpbGUiOiJvcGVyYXRpb25zLmRldi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIm9wZXJhdGlvbnNcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wib3BlcmF0aW9uc1wiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJmdW5jdGlvbiBfYXN5bmNJdGVyYXRvcihpdGVyYWJsZSkge1xuICB2YXIgbWV0aG9kO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgaWYgKFN5bWJvbC5hc3luY0l0ZXJhdG9yKSB7XG4gICAgICBtZXRob2QgPSBpdGVyYWJsZVtTeW1ib2wuYXN5bmNJdGVyYXRvcl07XG4gICAgICBpZiAobWV0aG9kICE9IG51bGwpIHJldHVybiBtZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgfVxuXG4gICAgaWYgKFN5bWJvbC5pdGVyYXRvcikge1xuICAgICAgbWV0aG9kID0gaXRlcmFibGVbU3ltYm9sLml0ZXJhdG9yXTtcbiAgICAgIGlmIChtZXRob2QgIT0gbnVsbCkgcmV0dXJuIG1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICB9XG4gIH1cblxuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiT2JqZWN0IGlzIG5vdCBhc3luYyBpdGVyYWJsZVwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXN5bmNJdGVyYXRvcjsiLCIvKiFcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgT3R0ZXJzb25cbiAqIFxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gXG4gKiBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSBcbiAqIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIFxuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqIFxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqIFxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIFxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIFxuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBcbiAqIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiAqIFxuICovXG4hZnVuY3Rpb24oZSx0KXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz10KCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXSx0KTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9leHBvcnRzLmNoYW5rbz10KCk6ZS5jaGFua289dCgpfSh0aGlzLChmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihlKXt2YXIgdD17fTtmdW5jdGlvbiBuKHIpe2lmKHRbcl0pcmV0dXJuIHRbcl0uZXhwb3J0czt2YXIgbz10W3JdPXtpOnIsbDohMSxleHBvcnRzOnt9fTtyZXR1cm4gZVtyXS5jYWxsKG8uZXhwb3J0cyxvLG8uZXhwb3J0cyxuKSxvLmw9ITAsby5leHBvcnRzfXJldHVybiBuLm09ZSxuLmM9dCxuLmQ9ZnVuY3Rpb24oZSx0LHIpe24ubyhlLHQpfHxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSx0LHtlbnVtZXJhYmxlOiEwLGdldDpyfSl9LG4ucj1mdW5jdGlvbihlKXtcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWcmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFN5bWJvbC50b1N0cmluZ1RhZyx7dmFsdWU6XCJNb2R1bGVcIn0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfSxuLnQ9ZnVuY3Rpb24oZSx0KXtpZigxJnQmJihlPW4oZSkpLDgmdClyZXR1cm4gZTtpZig0JnQmJlwib2JqZWN0XCI9PXR5cGVvZiBlJiZlJiZlLl9fZXNNb2R1bGUpcmV0dXJuIGU7dmFyIHI9T2JqZWN0LmNyZWF0ZShudWxsKTtpZihuLnIociksT2JqZWN0LmRlZmluZVByb3BlcnR5KHIsXCJkZWZhdWx0XCIse2VudW1lcmFibGU6ITAsdmFsdWU6ZX0pLDImdCYmXCJzdHJpbmdcIiE9dHlwZW9mIGUpZm9yKHZhciBvIGluIGUpbi5kKHIsbyxmdW5jdGlvbih0KXtyZXR1cm4gZVt0XX0uYmluZChudWxsLG8pKTtyZXR1cm4gcn0sbi5uPWZ1bmN0aW9uKGUpe3ZhciB0PWUmJmUuX19lc01vZHVsZT9mdW5jdGlvbigpe3JldHVybiBlLmRlZmF1bHR9OmZ1bmN0aW9uKCl7cmV0dXJuIGV9O3JldHVybiBuLmQodCxcImFcIix0KSx0fSxuLm89ZnVuY3Rpb24oZSx0KXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsdCl9LG4ucD1cIlwiLG4obi5zPTEwKX0oW2Z1bmN0aW9uKGUsdCxuKXtcInVzZSBzdHJpY3RcIjtuLmQodCxcImFcIiwoZnVuY3Rpb24oKXtyZXR1cm4gcn0pKSxuLmQodCxcImZcIiwoZnVuY3Rpb24oKXtyZXR1cm4gdX0pKSxuLmQodCxcImJcIiwoZnVuY3Rpb24oKXtyZXR1cm4gY30pKSxuLmQodCxcImRcIiwoZnVuY3Rpb24oKXtyZXR1cm4gaX0pKSxuLmQodCxcImNcIiwoZnVuY3Rpb24oKXtyZXR1cm4gYX0pKSxuLmQodCxcImVcIiwoZnVuY3Rpb24oKXtyZXR1cm4gZn0pKTtjb25zdCByPVN5bWJvbChcIkVNUFRZXCIpLG89U3ltYm9sKFwiUVVFVUVcIik7ZnVuY3Rpb24gdSgpe3JldHVybiBPYmplY3QuY3JlYXRlKG51bGwse3N0b3JlOnt2YWx1ZTpbXSx3cml0YWJsZTohMH0scG9pbnRlcjp7dmFsdWU6MCx3cml0YWJsZTohMH0sW29dOnt2YWx1ZTohMH19KX1mdW5jdGlvbiBjKGUpe3JldHVybiBlLnN0b3JlLmxlbmd0aC1lLnBvaW50ZXJ9ZnVuY3Rpb24gaShlLHQpe2Uuc3RvcmUucHVzaCh0KX1mdW5jdGlvbiBhKGUpe2lmKDA9PT1lLnN0b3JlLmxlbmd0aClyZXR1cm4gcjtjb25zdCB0PWUuc3RvcmVbZS5wb2ludGVyXTtyZXR1cm4gMiorK2UucG9pbnRlcj49ZS5zdG9yZS5sZW5ndGgmJihlLnN0b3JlPWUuc3RvcmUuc2xpY2UoZS5wb2ludGVyKSxlLnBvaW50ZXI9MCksdH1mdW5jdGlvbiBmKGUsdCl7Zm9yKGxldCBuPTAscj1jKGUpO248cjtuKyspe2NvbnN0IG49YShlKTt0KG4pJiZpKGUsbil9fX0sZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiOyhmdW5jdGlvbihlKXtuLmQodCxcImJcIiwoZnVuY3Rpb24oKXtyZXR1cm4gdX0pKSxuLmQodCxcImFcIiwoZnVuY3Rpb24oKXtyZXR1cm4gY30pKSxuLmQodCxcImNcIiwoZnVuY3Rpb24oKXtyZXR1cm4gaX0pKSxuLmQodCxcImRcIiwoZnVuY3Rpb24oKXtyZXR1cm4gdn0pKSxuLmQodCxcImVcIiwoZnVuY3Rpb24oKXtyZXR1cm4gYn0pKTt2YXIgcj1uKDApO2NvbnN0IG89T2JqZWN0KHIuZikoKSx1PVN5bWJvbChcIlNFVF9JTU1FRElBVEVcIiksYz1TeW1ib2woXCJNRVNTQUdFX0NIQU5ORUxcIiksaT1TeW1ib2woXCJTRVRfVElNRU9VVFwiKSxhPXtiYXRjaFNpemU6MTAyNCxkaXNwYXRjaE1ldGhvZDp1fTtsZXQgZj1kKCkscz0hMSxsPSEwO2Z1bmN0aW9uIGQoKXtzd2l0Y2goZnVuY3Rpb24oKXtzd2l0Y2goYS5kaXNwYXRjaE1ldGhvZCl7Y2FzZSBjOnJldHVyblwidW5kZWZpbmVkXCIhPXR5cGVvZiBNZXNzYWdlQ2hhbm5lbD9jOmk7Y2FzZSBpOnJldHVybiBpO2RlZmF1bHQ6cmV0dXJuIHZvaWQgMCE9PWU/dTpcInVuZGVmaW5lZFwiIT10eXBlb2YgTWVzc2FnZUNoYW5uZWw/YzppfX0oKSl7Y2FzZSB1OnJldHVybigpPT57bCYmc3x8KGw9ITAsZShtKSl9O2Nhc2UgYzp7Y29uc3QgZT1uZXcgTWVzc2FnZUNoYW5uZWw7cmV0dXJuIGUucG9ydDEub25tZXNzYWdlPSgpPT5tKCksKCk9PntsJiZzfHwobD0hMCxlLnBvcnQyLnBvc3RNZXNzYWdlKDApKX19Y2FzZSBpOnJldHVybigpPT57bCYmc3x8KGw9ITAsc2V0VGltZW91dChtLDApKX19fWZ1bmN0aW9uIG0oKXtzPSEwLGw9ITE7bGV0IGU9MDtmb3IoOzspe2NvbnN0IHQ9T2JqZWN0KHIuYykobyk7aWYodD09PXIuYSlicmVhaztpZih0KCksZT49YS5iYXRjaFNpemUpYnJlYWs7ZSsrLHM9ITEsT2JqZWN0KHIuYikobykmJmYoKX19ZnVuY3Rpb24gdihlPXt9KXtmb3IoY29uc3QgdCBpbiBhKXQgaW4gZSYmKGFbdF09ZVt0XSxcImRpc3BhdGNoTWV0aG9kXCI9PT10JiYoZj1kKCkpKTtyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSxhKX1mdW5jdGlvbiBiKGUpe09iamVjdChyLmQpKG8sZSksZigpfX0pLmNhbGwodGhpcyxuKDcpLnNldEltbWVkaWF0ZSl9LGZ1bmN0aW9uKGUsdCl7ZS5leHBvcnRzPWZ1bmN0aW9uKGUpe3RoaXMud3JhcHBlZD1lfX0sZnVuY3Rpb24oZSx0KXt2YXIgbjtuPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9KCk7dHJ5e249bnx8bmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKX1jYXRjaChlKXtcIm9iamVjdFwiPT10eXBlb2Ygd2luZG93JiYobj13aW5kb3cpfWUuZXhwb3J0cz1ufSxmdW5jdGlvbihlLHQsbil7dmFyIHI9bigyKTtlLmV4cG9ydHM9ZnVuY3Rpb24oZSl7cmV0dXJuIG5ldyByKGUpfX0sZnVuY3Rpb24oZSx0LG4pe3ZhciByPW4oNik7ZS5leHBvcnRzPWZ1bmN0aW9uKGUpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiBuZXcgcihlLmFwcGx5KHRoaXMsYXJndW1lbnRzKSl9fX0sZnVuY3Rpb24oZSx0LG4pe3ZhciByPW4oMik7ZnVuY3Rpb24gbyhlKXt2YXIgdCxuO2Z1bmN0aW9uIG8odCxuKXt0cnl7dmFyIGM9ZVt0XShuKSxpPWMudmFsdWUsYT1pIGluc3RhbmNlb2YgcjtQcm9taXNlLnJlc29sdmUoYT9pLndyYXBwZWQ6aSkudGhlbigoZnVuY3Rpb24oZSl7YT9vKFwicmV0dXJuXCI9PT10P1wicmV0dXJuXCI6XCJuZXh0XCIsZSk6dShjLmRvbmU/XCJyZXR1cm5cIjpcIm5vcm1hbFwiLGUpfSksKGZ1bmN0aW9uKGUpe28oXCJ0aHJvd1wiLGUpfSkpfWNhdGNoKGUpe3UoXCJ0aHJvd1wiLGUpfX1mdW5jdGlvbiB1KGUscil7c3dpdGNoKGUpe2Nhc2VcInJldHVyblwiOnQucmVzb2x2ZSh7dmFsdWU6cixkb25lOiEwfSk7YnJlYWs7Y2FzZVwidGhyb3dcIjp0LnJlamVjdChyKTticmVhaztkZWZhdWx0OnQucmVzb2x2ZSh7dmFsdWU6cixkb25lOiExfSl9KHQ9dC5uZXh0KT9vKHQua2V5LHQuYXJnKTpuPW51bGx9dGhpcy5faW52b2tlPWZ1bmN0aW9uKGUscil7cmV0dXJuIG5ldyBQcm9taXNlKChmdW5jdGlvbih1LGMpe3ZhciBpPXtrZXk6ZSxhcmc6cixyZXNvbHZlOnUscmVqZWN0OmMsbmV4dDpudWxsfTtuP249bi5uZXh0PWk6KHQ9bj1pLG8oZSxyKSl9KSl9LFwiZnVuY3Rpb25cIiE9dHlwZW9mIGUucmV0dXJuJiYodGhpcy5yZXR1cm49dm9pZCAwKX1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJlN5bWJvbC5hc3luY0l0ZXJhdG9yJiYoby5wcm90b3R5cGVbU3ltYm9sLmFzeW5jSXRlcmF0b3JdPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9KSxvLnByb3RvdHlwZS5uZXh0PWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLl9pbnZva2UoXCJuZXh0XCIsZSl9LG8ucHJvdG90eXBlLnRocm93PWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLl9pbnZva2UoXCJ0aHJvd1wiLGUpfSxvLnByb3RvdHlwZS5yZXR1cm49ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuX2ludm9rZShcInJldHVyblwiLGUpfSxlLmV4cG9ydHM9b30sZnVuY3Rpb24oZSx0LG4peyhmdW5jdGlvbihlKXt2YXIgcj12b2lkIDAhPT1lJiZlfHxcInVuZGVmaW5lZFwiIT10eXBlb2Ygc2VsZiYmc2VsZnx8d2luZG93LG89RnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5O2Z1bmN0aW9uIHUoZSx0KXt0aGlzLl9pZD1lLHRoaXMuX2NsZWFyRm49dH10LnNldFRpbWVvdXQ9ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IHUoby5jYWxsKHNldFRpbWVvdXQscixhcmd1bWVudHMpLGNsZWFyVGltZW91dCl9LHQuc2V0SW50ZXJ2YWw9ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IHUoby5jYWxsKHNldEludGVydmFsLHIsYXJndW1lbnRzKSxjbGVhckludGVydmFsKX0sdC5jbGVhclRpbWVvdXQ9dC5jbGVhckludGVydmFsPWZ1bmN0aW9uKGUpe2UmJmUuY2xvc2UoKX0sdS5wcm90b3R5cGUudW5yZWY9dS5wcm90b3R5cGUucmVmPWZ1bmN0aW9uKCl7fSx1LnByb3RvdHlwZS5jbG9zZT1mdW5jdGlvbigpe3RoaXMuX2NsZWFyRm4uY2FsbChyLHRoaXMuX2lkKX0sdC5lbnJvbGw9ZnVuY3Rpb24oZSx0KXtjbGVhclRpbWVvdXQoZS5faWRsZVRpbWVvdXRJZCksZS5faWRsZVRpbWVvdXQ9dH0sdC51bmVucm9sbD1mdW5jdGlvbihlKXtjbGVhclRpbWVvdXQoZS5faWRsZVRpbWVvdXRJZCksZS5faWRsZVRpbWVvdXQ9LTF9LHQuX3VucmVmQWN0aXZlPXQuYWN0aXZlPWZ1bmN0aW9uKGUpe2NsZWFyVGltZW91dChlLl9pZGxlVGltZW91dElkKTt2YXIgdD1lLl9pZGxlVGltZW91dDt0Pj0wJiYoZS5faWRsZVRpbWVvdXRJZD1zZXRUaW1lb3V0KChmdW5jdGlvbigpe2UuX29uVGltZW91dCYmZS5fb25UaW1lb3V0KCl9KSx0KSl9LG4oOCksdC5zZXRJbW1lZGlhdGU9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHNlbGYmJnNlbGYuc2V0SW1tZWRpYXRlfHx2b2lkIDAhPT1lJiZlLnNldEltbWVkaWF0ZXx8dGhpcyYmdGhpcy5zZXRJbW1lZGlhdGUsdC5jbGVhckltbWVkaWF0ZT1cInVuZGVmaW5lZFwiIT10eXBlb2Ygc2VsZiYmc2VsZi5jbGVhckltbWVkaWF0ZXx8dm9pZCAwIT09ZSYmZS5jbGVhckltbWVkaWF0ZXx8dGhpcyYmdGhpcy5jbGVhckltbWVkaWF0ZX0pLmNhbGwodGhpcyxuKDMpKX0sZnVuY3Rpb24oZSx0LG4peyhmdW5jdGlvbihlLHQpeyFmdW5jdGlvbihlLG4pe1widXNlIHN0cmljdFwiO2lmKCFlLnNldEltbWVkaWF0ZSl7dmFyIHIsbyx1LGMsaSxhPTEsZj17fSxzPSExLGw9ZS5kb2N1bWVudCxkPU9iamVjdC5nZXRQcm90b3R5cGVPZiYmT2JqZWN0LmdldFByb3RvdHlwZU9mKGUpO2Q9ZCYmZC5zZXRUaW1lb3V0P2Q6ZSxcIltvYmplY3QgcHJvY2Vzc11cIj09PXt9LnRvU3RyaW5nLmNhbGwoZS5wcm9jZXNzKT9yPWZ1bmN0aW9uKGUpe3QubmV4dFRpY2soKGZ1bmN0aW9uKCl7dihlKX0pKX06IWZ1bmN0aW9uKCl7aWYoZS5wb3N0TWVzc2FnZSYmIWUuaW1wb3J0U2NyaXB0cyl7dmFyIHQ9ITAsbj1lLm9ubWVzc2FnZTtyZXR1cm4gZS5vbm1lc3NhZ2U9ZnVuY3Rpb24oKXt0PSExfSxlLnBvc3RNZXNzYWdlKFwiXCIsXCIqXCIpLGUub25tZXNzYWdlPW4sdH19KCk/ZS5NZXNzYWdlQ2hhbm5lbD8oKHU9bmV3IE1lc3NhZ2VDaGFubmVsKS5wb3J0MS5vbm1lc3NhZ2U9ZnVuY3Rpb24oZSl7dihlLmRhdGEpfSxyPWZ1bmN0aW9uKGUpe3UucG9ydDIucG9zdE1lc3NhZ2UoZSl9KTpsJiZcIm9ucmVhZHlzdGF0ZWNoYW5nZVwiaW4gbC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpPyhvPWwuZG9jdW1lbnRFbGVtZW50LHI9ZnVuY3Rpb24oZSl7dmFyIHQ9bC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO3Qub25yZWFkeXN0YXRlY2hhbmdlPWZ1bmN0aW9uKCl7dihlKSx0Lm9ucmVhZHlzdGF0ZWNoYW5nZT1udWxsLG8ucmVtb3ZlQ2hpbGQodCksdD1udWxsfSxvLmFwcGVuZENoaWxkKHQpfSk6cj1mdW5jdGlvbihlKXtzZXRUaW1lb3V0KHYsMCxlKX06KGM9XCJzZXRJbW1lZGlhdGUkXCIrTWF0aC5yYW5kb20oKStcIiRcIixpPWZ1bmN0aW9uKHQpe3Quc291cmNlPT09ZSYmXCJzdHJpbmdcIj09dHlwZW9mIHQuZGF0YSYmMD09PXQuZGF0YS5pbmRleE9mKGMpJiZ2KCt0LmRhdGEuc2xpY2UoYy5sZW5ndGgpKX0sZS5hZGRFdmVudExpc3RlbmVyP2UuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixpLCExKTplLmF0dGFjaEV2ZW50KFwib25tZXNzYWdlXCIsaSkscj1mdW5jdGlvbih0KXtlLnBvc3RNZXNzYWdlKGMrdCxcIipcIil9KSxkLnNldEltbWVkaWF0ZT1mdW5jdGlvbihlKXtcImZ1bmN0aW9uXCIhPXR5cGVvZiBlJiYoZT1uZXcgRnVuY3Rpb24oXCJcIitlKSk7Zm9yKHZhciB0PW5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoLTEpLG49MDtuPHQubGVuZ3RoO24rKyl0W25dPWFyZ3VtZW50c1tuKzFdO3ZhciBvPXtjYWxsYmFjazplLGFyZ3M6dH07cmV0dXJuIGZbYV09byxyKGEpLGErK30sZC5jbGVhckltbWVkaWF0ZT1tfWZ1bmN0aW9uIG0oZSl7ZGVsZXRlIGZbZV19ZnVuY3Rpb24gdihlKXtpZihzKXNldFRpbWVvdXQodiwwLGUpO2Vsc2V7dmFyIHQ9ZltlXTtpZih0KXtzPSEwO3RyeXshZnVuY3Rpb24oZSl7dmFyIHQ9ZS5jYWxsYmFjayxuPWUuYXJncztzd2l0Y2gobi5sZW5ndGgpe2Nhc2UgMDp0KCk7YnJlYWs7Y2FzZSAxOnQoblswXSk7YnJlYWs7Y2FzZSAyOnQoblswXSxuWzFdKTticmVhaztjYXNlIDM6dChuWzBdLG5bMV0sblsyXSk7YnJlYWs7ZGVmYXVsdDp0LmFwcGx5KHZvaWQgMCxuKX19KHQpfWZpbmFsbHl7bShlKSxzPSExfX19fX0oXCJ1bmRlZmluZWRcIj09dHlwZW9mIHNlbGY/dm9pZCAwPT09ZT90aGlzOmU6c2VsZil9KS5jYWxsKHRoaXMsbigzKSxuKDkpKX0sZnVuY3Rpb24oZSx0KXt2YXIgbixyLG89ZS5leHBvcnRzPXt9O2Z1bmN0aW9uIHUoKXt0aHJvdyBuZXcgRXJyb3IoXCJzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkXCIpfWZ1bmN0aW9uIGMoKXt0aHJvdyBuZXcgRXJyb3IoXCJjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWRcIil9ZnVuY3Rpb24gaShlKXtpZihuPT09c2V0VGltZW91dClyZXR1cm4gc2V0VGltZW91dChlLDApO2lmKChuPT09dXx8IW4pJiZzZXRUaW1lb3V0KXJldHVybiBuPXNldFRpbWVvdXQsc2V0VGltZW91dChlLDApO3RyeXtyZXR1cm4gbihlLDApfWNhdGNoKHQpe3RyeXtyZXR1cm4gbi5jYWxsKG51bGwsZSwwKX1jYXRjaCh0KXtyZXR1cm4gbi5jYWxsKHRoaXMsZSwwKX19fSFmdW5jdGlvbigpe3RyeXtuPVwiZnVuY3Rpb25cIj09dHlwZW9mIHNldFRpbWVvdXQ/c2V0VGltZW91dDp1fWNhdGNoKGUpe249dX10cnl7cj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBjbGVhclRpbWVvdXQ/Y2xlYXJUaW1lb3V0OmN9Y2F0Y2goZSl7cj1jfX0oKTt2YXIgYSxmPVtdLHM9ITEsbD0tMTtmdW5jdGlvbiBkKCl7cyYmYSYmKHM9ITEsYS5sZW5ndGg/Zj1hLmNvbmNhdChmKTpsPS0xLGYubGVuZ3RoJiZtKCkpfWZ1bmN0aW9uIG0oKXtpZighcyl7dmFyIGU9aShkKTtzPSEwO2Zvcih2YXIgdD1mLmxlbmd0aDt0Oyl7Zm9yKGE9ZixmPVtdOysrbDx0OylhJiZhW2xdLnJ1bigpO2w9LTEsdD1mLmxlbmd0aH1hPW51bGwscz0hMSxmdW5jdGlvbihlKXtpZihyPT09Y2xlYXJUaW1lb3V0KXJldHVybiBjbGVhclRpbWVvdXQoZSk7aWYoKHI9PT1jfHwhcikmJmNsZWFyVGltZW91dClyZXR1cm4gcj1jbGVhclRpbWVvdXQsY2xlYXJUaW1lb3V0KGUpO3RyeXtyKGUpfWNhdGNoKHQpe3RyeXtyZXR1cm4gci5jYWxsKG51bGwsZSl9Y2F0Y2godCl7cmV0dXJuIHIuY2FsbCh0aGlzLGUpfX19KGUpfX1mdW5jdGlvbiB2KGUsdCl7dGhpcy5mdW49ZSx0aGlzLmFycmF5PXR9ZnVuY3Rpb24gYigpe31vLm5leHRUaWNrPWZ1bmN0aW9uKGUpe3ZhciB0PW5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoLTEpO2lmKGFyZ3VtZW50cy5sZW5ndGg+MSlmb3IodmFyIG49MTtuPGFyZ3VtZW50cy5sZW5ndGg7bisrKXRbbi0xXT1hcmd1bWVudHNbbl07Zi5wdXNoKG5ldyB2KGUsdCkpLDEhPT1mLmxlbmd0aHx8c3x8aShtKX0sdi5wcm90b3R5cGUucnVuPWZ1bmN0aW9uKCl7dGhpcy5mdW4uYXBwbHkobnVsbCx0aGlzLmFycmF5KX0sby50aXRsZT1cImJyb3dzZXJcIixvLmJyb3dzZXI9ITAsby5lbnY9e30sby5hcmd2PVtdLG8udmVyc2lvbj1cIlwiLG8udmVyc2lvbnM9e30sby5vbj1iLG8uYWRkTGlzdGVuZXI9YixvLm9uY2U9YixvLm9mZj1iLG8ucmVtb3ZlTGlzdGVuZXI9YixvLnJlbW92ZUFsbExpc3RlbmVycz1iLG8uZW1pdD1iLG8ucHJlcGVuZExpc3RlbmVyPWIsby5wcmVwZW5kT25jZUxpc3RlbmVyPWIsby5saXN0ZW5lcnM9ZnVuY3Rpb24oZSl7cmV0dXJuW119LG8uYmluZGluZz1mdW5jdGlvbihlKXt0aHJvdyBuZXcgRXJyb3IoXCJwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZFwiKX0sby5jd2Q9ZnVuY3Rpb24oKXtyZXR1cm5cIi9cIn0sby5jaGRpcj1mdW5jdGlvbihlKXt0aHJvdyBuZXcgRXJyb3IoXCJwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWRcIil9LG8udW1hc2s9ZnVuY3Rpb24oKXtyZXR1cm4gMH19LGZ1bmN0aW9uKGUsdCxuKXtcInVzZSBzdHJpY3RcIjtuLnIodCk7dmFyIHI9bigwKTtjb25zdCBvPVN5bWJvbChcIkJVRkZFUlwiKSx1PVN5bWJvbChcIkZJWEVEXCIpLGM9U3ltYm9sKFwiRFJPUFBJTkdcIiksaT1TeW1ib2woXCJTTElESU5HXCIpO2Z1bmN0aW9uIGEoZSl7cmV0dXJuIE9iamVjdC5jcmVhdGUobnVsbCx7cXVldWU6e3ZhbHVlOk9iamVjdChyLmYpKCl9LHNpemU6e3ZhbHVlOmV9LFtvXTp7dmFsdWU6dX19KX1mdW5jdGlvbiBmKGUpe3JldHVybiBPYmplY3QuY3JlYXRlKG51bGwse3F1ZXVlOnt2YWx1ZTpPYmplY3Qoci5mKSgpfSxzaXplOnt2YWx1ZTplfSxbb106e3ZhbHVlOmN9fSl9ZnVuY3Rpb24gcyhlKXtyZXR1cm4gT2JqZWN0LmNyZWF0ZShudWxsLHtxdWV1ZTp7dmFsdWU6T2JqZWN0KHIuZikoKX0sc2l6ZTp7dmFsdWU6ZX0sW29dOnt2YWx1ZTppfX0pfWZ1bmN0aW9uIGwoZSl7cmV0dXJuIGUuc2l6ZX1mdW5jdGlvbiBkKGUpe3JldHVybiBPYmplY3Qoci5iKShlLnF1ZXVlKX1mdW5jdGlvbiBtKGUpe3JldHVybiBlW29dPT09dSYmT2JqZWN0KHIuYikoZS5xdWV1ZSk+PWUuc2l6ZX1mdW5jdGlvbiB2KGUsLi4udCl7c3dpdGNoKGVbb10pe2Nhc2UgdTpmb3IoY29uc3QgbiBvZiB0KU9iamVjdChyLmQpKGUucXVldWUsbik7YnJlYWs7Y2FzZSBjOmZvcihjb25zdCBuIG9mIHQpZChlKTxsKGUpJiZPYmplY3Qoci5kKShlLnF1ZXVlLG4pO2JyZWFrO2Nhc2UgaTpmb3IoY29uc3QgbiBvZiB0KWQoZSk+PWwoZSkmJk9iamVjdChyLmMpKGUucXVldWUpLE9iamVjdChyLmQpKGUucXVldWUsbik7YnJlYWs7ZGVmYXVsdDpyZXR1cm59fWZ1bmN0aW9uIGIoZSl7cmV0dXJuIE9iamVjdChyLmMpKGUucXVldWUpfXZhciBwPW4oNCksaD1uLm4ocCkseT1uKDUpLE89bi5uKHkpO2NvbnN0IGo9T2JqZWN0LmNyZWF0ZShudWxsLHtpbml0Ont2YWx1ZTpTeW1ib2wuZm9yKFwidHJhbnNkdWNlci9pbml0XCIpfSxzdGVwOnt2YWx1ZTpTeW1ib2wuZm9yKFwidHJhbnNkdWNlci9zdGVwXCIpfSxyZXN1bHQ6e3ZhbHVlOlN5bWJvbC5mb3IoXCJ0cmFuc2R1Y2VyL3Jlc3VsdFwiKX0scmVkdWNlZDp7dmFsdWU6U3ltYm9sLmZvcihcInRyYW5zZHVjZXIvcmVkdWNlZFwiKX0sdmFsdWU6e3ZhbHVlOlN5bWJvbC5mb3IoXCJ0cmFuc2R1Y2VyL3ZhbHVlXCIpfX0pO3ZhciBnPW4oMSk7Y29uc3Qgdz1TeW1ib2woXCJDTE9TRURcIiksVD1TeW1ib2woXCJCT1hcIik7ZnVuY3Rpb24gUyhlKXtyZXR1cm4hIShudWxsPT1lP3ZvaWQgMDplW1RdKX1mdW5jdGlvbiB4KGUpe3JldHVybiEhKG51bGw9PWU/dm9pZCAwOmVbai5yZWR1Y2VkXSl9ZnVuY3Rpb24gRShlKXtyZXR1cm4gT2JqZWN0LmNyZWF0ZShudWxsLHt2YWx1ZTp7dmFsdWU6ZSx3cml0YWJsZTohMH0sW1RdOnt2YWx1ZTohMH19KX1mdW5jdGlvbiBJKGUsdCxuKXtpZih0PT09dyl0aHJvdyBFcnJvcihcIkNhbm5vdCBzZW5kIENMT1NFRCB0byBhIGNoYW5uZWxcIik7aWYoZS5jbG9zZWQpcmV0dXJuIG4uY29tbWl0KCksRSghMSk7bGV0IG8sdTtpZihlLmJ1ZmZlciYmIW0oZS5idWZmZXIpKXtuLmNvbW1pdCgpO2NvbnN0IGM9eChlLnhmb3JtW2ouc3RlcF0oZS5idWZmZXIsdCkpO2Zvcig7MCE9PWQoZS5idWZmZXIpJiYobz1PYmplY3Qoci5jKShlLnJlY3ZzKSxvIT09ci5hKTspaWYoby5hY3RpdmUpe3U9by5jb21taXQoKTtjb25zdCB0PWIoZS5idWZmZXIpO3UmJk9iamVjdChnLmUpKCgpPT51KHQpKX1yZXR1cm4gYyYmXyhlKSxFKCEwKX1mb3IoO289T2JqZWN0KHIuYykoZS5yZWN2cyksbyE9PXIuYTspaWYoby5hY3RpdmUpcmV0dXJuIG4uY29tbWl0KCksdT1vLmNvbW1pdCgpLHUmJk9iamVjdChnLmUpKCgpPT51KHQpKSxFKCEwKTtpZihlLmRpcnR5U2VuZHM+ZS5tYXhEaXJ0eT8oT2JqZWN0KHIuZSkoZS5zZW5kcyxlPT5lLmhhbmRsZXIuYWN0aXZlKSxlLmRpcnR5U2VuZHM9MCk6ZS5kaXJ0eVNlbmRzKyssT2JqZWN0KHIuYikoZS5zZW5kcyk+PWUubWF4UXVldWVkKXRocm93IEVycm9yKGBObyBtb3JlIHRoYW4gJHtlLm1heFF1ZXVlZH0gcGVuZGluZyBzZW5kcyBhcmUgYWxsb3dlZCBvbiBhIHNpbmdsZSBjaGFubmVsYCk7cmV0dXJuIE9iamVjdChyLmQpKGUuc2VuZHMsZnVuY3Rpb24oZSx0KXtyZXR1cm4gT2JqZWN0LmNyZWF0ZShudWxsLHt2YWx1ZTp7dmFsdWU6ZSx3cml0YWJsZTohMH0saGFuZGxlcjp7dmFsdWU6dH0sW1RdOnt2YWx1ZTohMH19KX0odCxuKSksbnVsbH1mdW5jdGlvbiBNKGUsdCl7bGV0IG4sbyx1O2lmKGUuYnVmZmVyJiZkKGUuYnVmZmVyKT4wKXt0LmNvbW1pdCgpO2NvbnN0IGM9YihlLmJ1ZmZlcik7Zm9yKDshbShlLmJ1ZmZlcikmJihuPU9iamVjdChyLmMpKGUuc2VuZHMpLG4hPT1yLmEpOylvPW4uaGFuZGxlcixvLmFjdGl2ZSYmKHU9by5jb21taXQoKSx1JiZPYmplY3QoZy5lKSgoKT0+dSghMCkpLHgoZS54Zm9ybVtqLnN0ZXBdKGUuYnVmZmVyLG4udmFsdWUpKSYmXyhlKSk7cmV0dXJuIEUoYyl9Zm9yKDtuPU9iamVjdChyLmMpKGUuc2VuZHMpLG4hPT1yLmE7KWlmKG89bi5oYW5kbGVyLG8uYWN0aXZlKXJldHVybiB1PW8uY29tbWl0KCksdSYmT2JqZWN0KGcuZSkoKCk9PnUoITApKSxFKG4udmFsdWUpO2lmKGUuY2xvc2VkKXJldHVybiB0LmNvbW1pdCgpLEUodyk7aWYoZS5kaXJ0eVJlY3ZzPmUubWF4RGlydHk/KE9iamVjdChyLmUpKGUucmVjdnMsZT0+ZS5hY3RpdmUpLGUuZGlydHlSZWN2cz0wKTplLmRpcnR5UmVjdnMrKyxPYmplY3Qoci5iKShlLnJlY3ZzKT49ZS5tYXhRdWV1ZWQpdGhyb3cgRXJyb3IoYE5vIG1vcmUgdGhhbiAke2UubWF4UXVldWVkfSBwZW5kaW5nIHJlY2VpdmVzIGFyZSBhbGxvd2VkIG9uIGEgc2luZ2xlIGNoYW5uZWxgKTtyZXR1cm4gT2JqZWN0KHIuZCkoZS5yZWN2cyx0KSxudWxsfWZ1bmN0aW9uIF8oZSl7aWYoZS5jbG9zZWQpcmV0dXJuO2xldCB0LG4sbztpZihlLmNsb3NlZD0hMCxlLmJ1ZmZlcilmb3IoZS54Zm9ybVtqLnJlc3VsdF0oZS5idWZmZXIpOzAhPT1kKGUuYnVmZmVyKSYmKHQ9T2JqZWN0KHIuYykoZS5yZWN2cyksdCE9PXIuYSk7KWlmKHQuYWN0aXZlKXtvPXQuY29tbWl0KCk7Y29uc3Qgbj1iKGUuYnVmZmVyKTtvJiZPYmplY3QoZy5lKSgoKT0+byhuKSl9Zm9yKDt0PU9iamVjdChyLmMpKGUucmVjdnMpLHQhPT1yLmE7KXQuYWN0aXZlJiYobz10LmNvbW1pdCgpLG8mJk9iamVjdChnLmUpKCgpPT5vKHcpKSk7Zm9yKDtuPU9iamVjdChyLmMpKGUuc2VuZHMpLG4hPT1yLmE7KW4uaGFuZGxlci5hY3RpdmUmJihvPW4uaGFuZGxlci5jb21taXQoKSxvJiZPYmplY3QoZy5lKSgoKT0+byghMSkpKX1jb25zdCBrPVN5bWJvbChcIkRFRkFVTFRcIik7ZnVuY3Rpb24gUChlLHQpe3JldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5jcmVhdGUobnVsbCkse3ZhbHVlOmUsY2hhbm5lbDp0fSl9ZnVuY3Rpb24gQShlLHQ9KCgpPT57fSksbj17fSl7Y29uc3Qgcj1lLmxlbmd0aDtpZigwPT09cil0aHJvdyBFcnJvcihcInNlbGVjdCBjYWxsZWQgd2l0aCBubyBvcGVyYXRpb25zXCIpO2NvbnN0IG89ISFuLnByaW9yaXR5LHU9bz9bXTpmdW5jdGlvbihlKXtjb25zdCB0PVtdO2ZvcihsZXQgbj0wO248ZTtuKyspdC5wdXNoKG4pO2ZvcihsZXQgbj1lLTE7bj4wO24tLSl7Y29uc3QgZT1NYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqKG4rMSkpLHI9dFtuXTt0W25dPXRbZV0sdFtlXT1yfXJldHVybiB0fShyKSxjPUUoITApO2Z1bmN0aW9uIGkoZSl7cmV0dXJuIGZ1bmN0aW9uKGUsdCl7cmV0dXJuIE9iamVjdC5jcmVhdGUobnVsbCx7YWN0aXZlOntnZXQ6KCk9PmUudmFsdWV9LGNvbW1pdDp7dmFsdWU6KCk9PihlLnZhbHVlPSExLHQpfX0pfShjLG49Pnt0KFAobixlKSl9KX1sZXQgYTtmb3IobGV0IG49MDtuPHI7bisrKXtjb25zdCByPWVbbz9uOnVbbl1dO2xldCBjLGY7aWYoQXJyYXkuaXNBcnJheShyKT8oW2MsZl09cixhPUkoYyxmLGkoYykpKTooYz1yLGE9TShjLGkoYykpKSxTKGEpKXt0KFAoYS52YWx1ZSxjKSk7YnJlYWt9fSFTKGEpJiZPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobixcImRlZmF1bHRcIikmJmMudmFsdWUmJihjLnZhbHVlPSExLHQoUChuLmRlZmF1bHQsaykpKX1mdW5jdGlvbiBDKGUsdD17fSl7cmV0dXJuIG5ldyBQcm9taXNlKG49PntBKGUsbix0KX0pfWZ1bmN0aW9uIEQoZSl7cmV0dXJuIGUudmFsdWV9ZnVuY3Rpb24gTChlKXtyZXR1cm4gZS5jaGFubmVsfWNvbnN0IHE9KCk9Pnc7ZnVuY3Rpb24gUShlKXtyZXR1cm4gT2JqZWN0LmNyZWF0ZShudWxsLHthY3RpdmU6e3ZhbHVlOiEwfSxjb21taXQ6e3ZhbHVlOigpPT5lfX0pfWZ1bmN0aW9uIEYoZSx0LG4pe2NvbnN0IHI9dChuKTtyZXR1cm4gciE9PXcmJnYoZSxyKSxlfWZ1bmN0aW9uIE4oZSx0PXEpe3JldHVybntbai5zdGVwXShuLHIpe3RyeXtyZXR1cm4gZVtqLnN0ZXBdKG4scil9Y2F0Y2goZSl7cmV0dXJuIEYobix0LGUpfX0sW2oucmVzdWx0XShuKXt0cnl7cmV0dXJuIGVbai5yZXN1bHRdKG4pfWNhdGNoKGUpe3JldHVybiBGKG4sdCxlKX19fX1jb25zdCB6PXtbai5pbml0XSgpe3Rocm93IEVycm9yKFwiaW5pdCBub3QgYXZhaWxhYmxlXCIpfSxbai5zdGVwXTooZSx0KT0+KHYoZSx0KSxlKSxbai5yZXN1bHRdOmU9PmV9O2Z1bmN0aW9uIFIoZSx0LG4pe2xldCByLHU7dmFyIGM7ZT9cIm51bWJlclwiPT10eXBlb2YgZT8ocj1hKGUpLHU9dCk6KG51bGw9PShjPWUpP3ZvaWQgMDpjW29dKT8ocj1lLHU9dCk6KHI9KG51bGw9PWU/dm9pZCAwOmUudHJhbnNkdWNlcik/YSgxKTpudWxsLHU9ZSk6KHI9bnVsbCx1PXQpO2NvbnN0e3RyYW5zZHVjZXI6aSxoYW5kbGVyOmYsbWF4RGlydHk6cyxtYXhRdWV1ZWQ6bCx0aW1lcjpkfT1PYmplY3QuYXNzaWduKHt9LG4sdSk7cmV0dXJue2J1ZjpyLHRyYW5zZHVjZXI6aSxoYW5kbGVyOmYsbWF4RGlydHk6cyxtYXhRdWV1ZWQ6bCx0aW1lcjpkfX1mdW5jdGlvbiBVKGUsdCl7Y29uc3Qgbj17bWF4RGlydHk6NjQsbWF4UXVldWVkOjEwMjR9LHtidWY6byx0cmFuc2R1Y2VyOnUsaGFuZGxlcjpjLG1heERpcnR5OmksbWF4UXVldWVkOmEsdGltZXI6Zn09UihlLHQsbik7aWYodSYmIW8pdGhyb3cgRXJyb3IoXCJPbmx5IGJ1ZmZlcmVkIGNoYW5uZWxzIGNhbiB1c2UgdHJhbnNkdWNlcnNcIik7Y29uc3Qgcz1cIm51bWJlclwiPT10eXBlb2YgZixsPWZ1bmN0aW9uKGUsdCxuPSExLG89NjQsdT0xMDI0KXtyZXR1cm4gT2JqZWN0LmNyZWF0ZShudWxsLHtidWZmZXI6e3ZhbHVlOmV9LHhmb3JtOnt2YWx1ZTp0fSxtYXhEaXJ0eTp7dmFsdWU6b30sbWF4UXVldWVkOnt2YWx1ZTp1fSxyZWN2czp7dmFsdWU6T2JqZWN0KHIuZikoKX0sc2VuZHM6e3ZhbHVlOk9iamVjdChyLmYpKCl9LGRpcnR5UmVjdnM6e3ZhbHVlOjAsd3JpdGFibGU6ITB9LGRpcnR5U2VuZHM6e3ZhbHVlOjAsd3JpdGFibGU6ITB9LGNsb3NlZDp7dmFsdWU6ITEsd3JpdGFibGU6ITB9LGlzQnVmZmVyZWQ6e3ZhbHVlOiEhZX0saXNUaW1lZDp7dmFsdWU6bn19KX0obyxOKHU/dSh6KTp6LGMpLHMsaSxhKTtmdW5jdGlvbiBkKCl7cmV0dXJuKGQ9TygpKChmdW5jdGlvbiooKXtmb3IoOzspe2NvbnN0IGU9eWllbGQgaCgpKFYobCkpO2lmKGU9PT13KWJyZWFrO3lpZWxkIGV9fSkpKS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9cmV0dXJuIGxbU3ltYm9sLmFzeW5jSXRlcmF0b3JdPWZ1bmN0aW9uKCl7cmV0dXJuIGQuYXBwbHkodGhpcyxhcmd1bWVudHMpfSxzJiZzZXRUaW1lb3V0KCgpPT5fKGwpLGYpLGx9ZnVuY3Rpb24gQihlPTApe3JldHVybiBVKHt0aW1lcjplfSl9ZnVuY3Rpb24gRyhlLHQpe3JldHVybiBVKHt0cmFuc2R1Y2VyOmUsaGFuZGxlcjp0fSl9ZnVuY3Rpb24gJChlKXtyZXR1cm4gZS5jbG9zZWR9ZnVuY3Rpb24gSChlKXtyZXR1cm4gZS5pc0J1ZmZlcmVkfWZ1bmN0aW9uIFgoZSl7cmV0dXJuIGUuaXNUaW1lZH1mdW5jdGlvbiBZKGUsdCxuPSgoKT0+e30pKXtjb25zdCByPUkoZSx0LFEobikpO3ImJm4mJm4oci52YWx1ZSl9ZnVuY3Rpb24gSihlLHQ9KCgpPT57fSkpe2NvbnN0IG49TShlLFEodCkpO24mJnQmJnQobi52YWx1ZSl9ZnVuY3Rpb24gSyhlLHQpe3JldHVybiBuZXcgUHJvbWlzZShuPT57WShlLHQsbil9KX1mdW5jdGlvbiBWKGUpe3JldHVybiBuZXcgUHJvbWlzZSh0PT57SihlLHQpfSl9ZnVuY3Rpb24gVyhlKXtyZXR1cm4gbmV3IFByb21pc2UoKHQsbik9PntKKGUsZT0+e09iamVjdC5wcm90b3R5cGUuaXNQcm90b3R5cGVPZi5jYWxsKEVycm9yLnByb3RvdHlwZSxlKT9uKGUpOnQoZSl9KX0pfWZ1bmN0aW9uIFooZSl7XyhlKX1mdW5jdGlvbiBlZShlPTApe3JldHVybiBuZXcgUHJvbWlzZSh0PT57SihCKGUpLHQpfSl9ZnVuY3Rpb24gdGUoZSwuLi50KXtyZXR1cm4gZSguLi50KX1mdW5jdGlvbiBuZSguLi5lKXtyZXR1cm4gUHJvbWlzZS5hbGwoZSl9bi5kKHQsXCJmaXhlZFwiLChmdW5jdGlvbigpe3JldHVybiBhfSkpLG4uZCh0LFwiZHJvcHBpbmdcIiwoZnVuY3Rpb24oKXtyZXR1cm4gZn0pKSxuLmQodCxcInNsaWRpbmdcIiwoZnVuY3Rpb24oKXtyZXR1cm4gc30pKSxuLmQodCxcIkNMT1NFRFwiLChmdW5jdGlvbigpe3JldHVybiB3fSkpLG4uZCh0LFwiY2hhblwiLChmdW5jdGlvbigpe3JldHVybiBVfSkpLG4uZCh0LFwidGltZWRDaGFuXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIEJ9KSksbi5kKHQsXCJ0cmFuc0NoYW5cIiwoZnVuY3Rpb24oKXtyZXR1cm4gR30pKSxuLmQodCxcInNlbmRcIiwoZnVuY3Rpb24oKXtyZXR1cm4gS30pKSxuLmQodCxcInJlY3ZcIiwoZnVuY3Rpb24oKXtyZXR1cm4gVn0pKSxuLmQodCxcInNlbmRBc3luY1wiLChmdW5jdGlvbigpe3JldHVybiBZfSkpLG4uZCh0LFwicmVjdkFzeW5jXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIEp9KSksbi5kKHQsXCJyZWN2T3JUaHJvd1wiLChmdW5jdGlvbigpe3JldHVybiBXfSkpLG4uZCh0LFwiY2xvc2VcIiwoZnVuY3Rpb24oKXtyZXR1cm4gWn0pKSxuLmQodCxcImlzQ2xvc2VkXCIsKGZ1bmN0aW9uKCl7cmV0dXJuICR9KSksbi5kKHQsXCJpc0J1ZmZlcmVkXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIEh9KSksbi5kKHQsXCJpc1RpbWVkXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIFh9KSksbi5kKHQsXCJzZWxlY3RcIiwoZnVuY3Rpb24oKXtyZXR1cm4gQ30pKSxuLmQodCxcInNlbGVjdEFzeW5jXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIEF9KSksbi5kKHQsXCJ2YWx1ZVwiLChmdW5jdGlvbigpe3JldHVybiBEfSkpLG4uZCh0LFwiY2hhbm5lbFwiLChmdW5jdGlvbigpe3JldHVybiBMfSkpLG4uZCh0LFwiY29uZmlnXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIGcuZH0pKSxuLmQodCxcIlNFVF9JTU1FRElBVEVcIiwoZnVuY3Rpb24oKXtyZXR1cm4gZy5ifSkpLG4uZCh0LFwiTUVTU0FHRV9DSEFOTkVMXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIGcuYX0pKSxuLmQodCxcIlNFVF9USU1FT1VUXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIGcuY30pKSxuLmQodCxcImdvXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIHRlfSkpLG4uZCh0LFwic2xlZXBcIiwoZnVuY3Rpb24oKXtyZXR1cm4gZWV9KSksbi5kKHQsXCJqb2luXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIG5lfSkpLG4uZCh0LFwiRU1QVFlcIiwoZnVuY3Rpb24oKXtyZXR1cm4gci5hfSkpfV0pfSkpOyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG5leHBvcnQge1xuICBtYXAsXG4gIG1lcmdlLFxuICBwYXJ0aXRpb24sXG4gIHBpcGUsXG4gIHNwbGl0LFxuICB0YXAsXG4gIHVudGFwLFxuICB1bnRhcEFsbFxufSBmcm9tIFwibW9kdWxlcy9mbG93XCI7XG5leHBvcnQgeyByZWR1Y2UsIHRvQ2hhbm5lbCwgdG9BcnJheSB9IGZyb20gXCJtb2R1bGVzL2NvbnZlcnNpb25cIjtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICogXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTnVtYmVyKHgpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh4KSA9PT0gXCJbb2JqZWN0IE51bWJlcl1cIiAmJiBpc0Zpbml0ZSh4KTtcbn0iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuLyoqXG4gKiBBIHNldCBvZiBjaGFubmVsIHV0aWxpdGllcyBmb3IgY29udmVydGluZyBjaGFubmVscyBpbnRvIG90aGVyIGtpbmRzIG9mIGRhdGEsXG4gKiBhbmQgdmljZSB2ZXJzYS5cbiAqXG4gKiBAbW9kdWxlIGNoYW5rby9vcGVyYXRpb25zL2NvbnZlcnNpb25cbiAqIEBwcml2YXRlXG4gKi9cblxuaW1wb3J0IHsgZ28sIGNoYW4sIHNlbmQsIHNlbmRBc3luYywgY2xvc2UgfSBmcm9tIFwiQGNoYW5rby9jaGFubmVsc1wiO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBzaW5nbGUgdmFsdWUgZnJvbSBhIGNoYW5uZWwgYnkgcnVubmluZyBpdHMgdmFsdWVzIHRocm91Z2ggYVxuICogcmVkdWNpbmcgZnVuY3Rpb24uXG4gKlxuICogRm9yIGV2ZXJ5IHZhbHVlIHB1dCBvbnRvIHRoZSBpbnB1dCBjaGFubmVsLCB0aGUgcmVkdWNpbmcgZnVuY3Rpb24gaXMgY2FsbGVkXG4gKiB3aXRoIHR3byBwYXJhbWV0ZXJzOiB0aGUgYWNjdW11bGF0b3IgdGhhdCBob2xkcyB0aGUgcmVzdWx0IG9mIHRoZSByZWR1Y3Rpb25cbiAqIHNvIGZhciwgYW5kIHRoZSBuZXcgaW5wdXQgdmFsdWUuIFRoZSBpbml0aWFsIHZhbHVlIG9mIHRoZSBhY2N1bXVsYXRvciBpcyB0aGVcbiAqIHRoaXJkIHBhcmFtZXRlciB0byBgcmVkdWNlYC4gVGhlIHJlZHVjdGlvbiBpcyBub3QgY29tcGxldGUgdW50aWwgdGhlIGlucHV0XG4gKiBjaGFubmVsIGNsb3Nlcy5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgYSBjaGFubmVsLiBXaGVuIHRoZSBmaW5hbCByZWR1Y2VkIHZhbHVlIGlzIHByb2R1Y2VkLCBpdFxuICogaXMgcHV0IG9udG8gdGhpcyBjaGFubmVsLCBhbmQgd2hlbiB0aGF0IHZhbHVlIGlzIHRha2VuIGZyb20gaXQsIHRoZSBjaGFubmVsXG4gKiBpcyBjbG9zZWQuXG4gKlxuICogYGBgXG4gKiBpbXBvcnQgeyBnbywgY2hhbiwgc2VuZCwgcmVjdiwgY2xvc2UgfSBmcm9tIFwiQGNoYW5rby9jaGFubmVsc1wiO1xuICogaW1wb3J0IHsgcmVkdWNlIH0gZnJvbSBcIkBjaGFua28vb3BlcmF0aW9uc1wiO1xuICpcbiAqIGNvbnN0IGlucHV0ID0gY2hhbigpO1xuICogY29uc3Qgb3V0cHV0ID0gcmVkdWNlKChhY2MsIHZhbHVlKSA9PiBhY2MgKyB2YWx1ZSwgaW5wdXQsIDApO1xuICpcbiAqIGdvKGFzeW5jICgpID0+IHtcbiAqICAgYXdhaXQgc2VuZChpbnB1dCwgMSk7XG4gKiAgIGF3YWl0IHNlbmQoaW5wdXQsIDIpO1xuICogICBhd2FpdCBzZW5kKGlucHV0LCAzKTtcbiAqICAgY2xvc2UoaW5wdXQpO1xuICogfSk7XG4gKlxuICogZ28oYXN5bmMgKCkgPT4ge1xuICogICBjb25zdCByZXN1bHQgPSBhd2FpdCByZWN2KG91dHB1dCk7XG4gKiAgIGNvbnNvbGUubG9nKG91dHB1dCk7ICAgICAgICAgICAgICAgICAgLy8gLT4gNlxuICogfSk7XG4gKlxuICogYGBgXG4gKlxuICogTm90ZSB0aGF0IHRoZSBpbnB1dCBjaGFubmVsICptdXN0KiBiZSBjbG9zZWQgYXQgc29tZSBwb2ludCwgb3Igbm8gdmFsdWUgd2lsbFxuICogZXZlciBhcHBlYXIgb24gdGhlIG91dHB1dCBjaGFubmVsLiBUaGUgY2xvc2luZyBvZiB0aGUgY2hhbm5lbCBpcyB3aGF0XG4gKiBzaWduaWZpZXMgdGhhdCB0aGUgcmVkdWN0aW9uIHNob3VsZCBiZSBjb21wbGV0ZWQuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjaGFua28vb3BlcmF0aW9uc35PcGVyYXRpb25zXG4gKiBAcGFyYW0ge21vZHVsZTpjaGFua28vb3BlcmF0aW9uc35yZWR1Y2VyfSBmbiBUaGUgcmVkdWNlciBmdW5jdGlvbiByZXNwb25zaWJsZVxuICogICAgIGZvciB0dXJuaW5nIHRoZSBzZXJpZXMgb2YgY2hhbm5lbCB2YWx1ZXMgaW50byBhIHNpbmdsZSBvdXRwdXQgdmFsdWUuXG4gKiBAcGFyYW0ge21vZHVsZTpjaGFua28vY2hhbm5lbH5DaGFubmVsfSBjaCBUaGUgY2hhbm5lbCB3aG9zZSB2YWx1ZXMgYXJlIGJlaW5nXG4gKiByZWR1Y2VkIGludG8gYSBzaW5nbGUgb3V0cHV0IHZhbHVlLlxuICogQHBhcmFtIHsqfSBpbml0IFRoZSBpbml0aWFsIHZhbHVlIHRvIGZlZWQgaW50byB0aGUgcmVkdWNlciBmdW5jdGlvbiBmb3IgdGhlXG4gKiBmaXJzdCByZWR1Y3Rpb24gc3RlcC5cbiAqIEByZXR1cm4ge21vZHVsZTpjaGFua28vY2hhbm5lbH5DaGFubmVsfSBBIGNoYW5uZWwgdGhhdCB3aWxsLCB3aGVuIHRoZSBpbnB1dFxuICogICAgIGNoYW5uZWwgY2xvc2VzLCBoYXZlIHRoZSByZWR1Y2VkIHZhbHVlIHB1dCBpbnRvIGl0LiBXaGVuIHRoaXMgdmFsdWUgaXNcbiAqICAgICB0YWtlbiwgdGhlIGNoYW5uZWwgd2lsbCBhdXRvbWF0aWNhbGx5IGNsb3NlLlxuICovXG5mdW5jdGlvbiByZWR1Y2UoZm4sIGNoYW5uZWwsIGluaXQpIHtcbiAgY29uc3Qgb3V0cHV0ID0gY2hhbigpO1xuXG4gIGdvKGFzeW5jICgpID0+IHtcbiAgICBsZXQgYWNjID0gaW5pdDtcbiAgICBmb3IgYXdhaXQgKGNvbnN0IHZhbHVlIG9mIGNoYW5uZWwpIHtcbiAgICAgIGFjYyA9IGZuKGFjYywgdmFsdWUpO1xuICAgIH1cbiAgICBzZW5kQXN5bmMob3V0cHV0LCBhY2MsICgpID0+IGNsb3NlKG91dHB1dCkpO1xuICB9KTtcblxuICByZXR1cm4gb3V0cHV0O1xufVxuXG4vKipcbiAqIFNlbmRzIGFsbCB2YWx1ZXMgZnJvbSBhbiBpdGVyYWJsZSB0byB0aGUgc3VwcGxpZWQgY2hhbm5lbC5cbiAqXG4gKiBJZiBubyBjaGFubmVsIGlzIHBhc3NlZCB0byB0aGlzIGZ1bmN0aW9uLCBhIG5ldyBjaGFubmVsIGlzIGNyZWF0ZWQuIEluXG4gKiBlZmZlY3QsIHRoaXMgZGlyZWN0bHkgY29udmVydHMgYW4gaXRlcmFibGUgaW50byBhIGNoYW5uZWwgd2l0aCB0aGUgc2FtZVxuICogdmFsdWVzIG9uIGl0LlxuICpcbiAqIFRoZSBjaGFubmVsIGlzIGNsb3NlZCBhZnRlciB0aGUgZmluYWwgaXRlcmFibGUgdmFsdWUgaXMgc2VudCB0byBpdC5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHdpbGwgY29udmVydCBhbnkgSmF2YVNjcmlwdCBvYmplY3QgdGhhdCBpbXBsZW1lbnRzIHRoZSBpdGVyYWJsZVxuICogcHJvdG9jb2wuIEluIG90aGVyIHdvcmRzLCBpZiBpdCB3b3JrcyBpbiBhIGBmb3IuLi5vZmAgc3RhdGVtZW50LCBpdCB3aWxsIHdvcmtcbiAqIGhlcmUuXG4gKlxuICogYGBgXG4gKiBpbXBvcnQgeyBnbywgY2hhbiwgcmVjdiwgaXNDbG9zZWQgfSBmcm9tIFwiQGNoYW5rby9jaGFubmVsc1wiO1xuICogaW1wb3J0IHsgb250byB9IGZyb20gXCJAY2hhbmtvL29wZXJhdGlvbnNcIjtcbiAqXG4gKiBjb25zdCBpbnB1dCA9IFsxLCAyLCAzXTtcbiAqIGNvbnN0IG91dHB1dCA9IG9udG8oaW5wdXQpO1xuICpcbiAqIGdvKGFzeW5jICgpID0+IHtcbiAqICAgY29uc29sZS5sb2coYXdhaXQgcmVjdihvdXRwdXQpKTsgICAgIC8vIC0+IDFcbiAqICAgY29uc29sZS5sb2coYXdhaXQgcmVjdihvdXRwdXQpKTsgICAgIC8vIC0+IDJcbiAqICAgY29uc29sZS5sb2coYXdhaXQgcmVjdihvdXRwdXQpKTsgICAgIC8vIC0+IDNcbiAqICAgY29uc29sZS5sb2coaXNDbG9zZWQob3V0cHV0KSk7ICAgICAgIC8vIC0+IHRydWVcbiAqIH0pO1xuICogYGBgXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjaGFua28vb3BlcmF0aW9uc35PcGVyYXRpb25zXG4gKiBAcGFyYW0ge2l0ZXJhYmxlfSBpdGVyYWJsZSBUaGUgaXRlcmFibGUgY29udGFpbmluZyB0aGUgdmFsdWVzIHRvIGJlIHNlbnQgdG9cbiAqICAgICB0aGUgY2hhbm5lbC5cbiAqIEBwYXJhbSB7bW9kdWxlOmNoYW5rby9jaGFubmVsfkNoYW5uZWx9IFtjaGFubmVsXSBUaGUgY2hhbm5lbCBvbnRvIHdoaWNoIHRvXG4gKiAgICAgcHV0IGFsbCBvZiB0aGUgYXJyYXkgZWxlbWVudHMuIElmIHRoaXMgaXMgbm90IHByZXNlbnQsIGEgbmV3IGNoYW5uZWwgd2lsbFxuICogICAgIGJlIGNyZWF0ZWQuXG4gKiBAcmV0dXJuIHttb2R1bGU6Y2hhbmtvL2NoYW5uZWx+Q2hhbm5lbH0gdGhlIGNoYW5uZWwgb250byB3aGljaCB0aGUgYXJyYXlcbiAqICAgICBlbGVtZW50cyBhcmUgcHV0LiBUaGlzIGlzIHRoZSBzYW1lIGFzIHRoZSBpbnB1dCBjaGFubmVsLCBidXQgaWYgbm8gaW5wdXRcbiAqICAgICBjaGFubmVsIGlzIHNwZWNpZmllZCwgdGhpcyB3aWxsIGJlIGEgbmV3IGNoYW5uZWwuIEl0IHdpbGwgY2xvc2Ugd2hlbiB0aGVcbiAqICAgICBmaW5hbCB2YWx1ZSBpcyB0YWtlbiBmcm9tIGl0LlxuICovXG5mdW5jdGlvbiB0b0NoYW5uZWwoaXRlcmFibGUsIGNoYW5uZWwgPSBjaGFuKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgZ28oYXN5bmMgKCkgPT4ge1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiBpdGVyYWJsZSkge1xuICAgICAgYXdhaXQgc2VuZChjaGFubmVsLCBpdGVtKTtcbiAgICB9XG4gICAgY2xvc2UoY2hhbm5lbCk7XG4gIH0pO1xuXG4gIHJldHVybiBjaGFubmVsO1xufVxuXG4vKipcbiAqIFJlY2VpdmVzIGFsbCBvZiB0aGUgdmFsdWVzIGZyb20gYSBjaGFubmVsIGFuZCBwdXNoZXMgdGhlbSBpbnRvIGFuIGFycmF5LlxuICpcbiAqIElmIG5vIGFycmF5IGlzIHBhc3NlZCB0byB0aGlzIGZ1bmN0aW9uLCBhIG5ldyAoZW1wdHkpIG9uZSBpcyBjcmVhdGVkLiBJblxuICogZWZmZWN0LCB0aGlzIGRpcmVjdGx5IGNvbnZlcnRzIGEgY2hhbm5lbCBpbnRvIGFuIGFycmF5IHdpdGggdGhlIHNhbWUgdmFsdWVzLlxuICogRWl0aGVyIHdheSwgdGhpcyBvcGVyYXRpb24gY2Fubm90IGNvbXBsZXRlIHVudGlsIHRoZSBpbnB1dCBjaGFubmVsIGlzIGNsb3NlZC5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgYSBjaGFubmVsLiBXaGVuIHRoZSBmaW5hbCBhcnJheSBpcyBwcm9kdWNlZCwgaXQgaXMgc2VudFxuICogdG8gdGhpcyBjaGFubmVsLCBhbmQgd2hlbiB0aGF0IHZhbHVlIGlzIHJlY2VpdmVkIGZyb20gaXQsIHRoZSBjaGFubmVsIGlzXG4gKiBjbG9zZWQuXG4gKlxuICogYGBgXG4gKiBpbXBvcnQgeyBnbywgY2hhbiwgc2VuZCwgcmVjdiwgY2xvc2UgfSBmcm9tIFwiQGNoYW5rby9jaGFubmVsc1wiO1xuICogaW1wb3J0IHsgaW50byB9IGZyb20gXCJAY2hhbmtvL29wZXJhdGlvbnNcIjtcbiAqXG4gKiBjb25zdCBpbnB1dCA9IGNoYW4oKTtcbiAqIGNvbnN0IG91dHB1dCA9IGludG8oaW5wdXQpO1xuICpcbiAqIGdvKGFzeW5jICgpID0+IHtcbiAqICAgYXdhaXQgc2VuZChpbnB1dCwgMSk7XG4gKiAgIGF3YWl0IHNlbmQoaW5wdXQsIDIpO1xuICogICBhd2FpdCBzZW5kKGlucHV0LCAzKTtcbiAqICAgY2xvc2UoaW5wdXQpO1xuICogfSk7XG4gKlxuICogZ28oYXN5bmMgKCkgPT4ge1xuICogICBjb25zdCByZXN1bHQgPSBhd2FpdCByZWN2KG91dHB1dCk7XG4gKiAgIGNvbnNvbGUubG9nKHJlc3VsdCk7ICAgICAgICAgICAgICAgICAgICAgLy8gLT4gWzEsIDIsIDNdXG4gKiB9KTtcbiAqIGBgYFxuICpcbiAqIE5vdGUgdGhhdCB0aGUgaW5wdXQgY2hhbm5lbCAqbXVzdCogYmUgY2xvc2VkIGF0IHNvbWUgcG9pbnQsIG9yIG5vIHZhbHVlIHdpbGxcbiAqIGV2ZXIgYXBwZWFyIG9uIHRoZSBvdXRwdXQgY2hhbm5lbC4gVGhlIGNsb3Npbmcgb2YgdGhlIGNoYW5uZWwgaXMgd2hhdFxuICogc2lnbmlmaWVzIHRoYXQgYWxsIG9mIHRoZSB2YWx1ZXMgbmVlZGVkIHRvIG1ha2UgdGhlIGFycmF5IGFyZSBub3cgYXZhaWxhYmxlLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y2hhbmtvL29wZXJhdGlvbnN+Q2hhbmtvXG4gKiBAcGFyYW0ge21vZHVsZTpjaXNweS9jaGFubmVsfkNoYW5uZWx9IGNoYW5uZWwgVGhlIGNoYW5uZWwgZnJvbSB3aGljaCB2YWx1ZXNcbiAqICAgICBhcmUgcmVjZWl2ZWQgdG8gcHV0IGludG8gdGhlIGFycmF5LlxuICogQHBhcmFtIHthcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gcHV0IHRoZSBjaGFubmVsIHZhbHVlcyBpbnRvLiBJZiB0aGlzIGlzXG4gKiAgICAgbm90IHByZXNlbnQsIGEgbmV3LCBlbXB0eSBhcnJheSB3aWxsIGJlIGNyZWF0ZWQuXG4gKiBAcmV0dXJuIHttb2R1bGU6Y2lzcHkvY2hhbm5lbH5DaGFubmVsfSBBIGNoYW5uZWwgdGhhdCB3aWxsLCB3aGVuIHRoZSBpbnB1dFxuICogICAgIGNoYW5uZWwgY2xvc2VzLCBoYXZlIHRoZSBhcnJheSBvZiBjaGFubmVsIHZhbHVlcyBwdXQgb250byBpdC4gV2hlbiB0aGlzXG4gKiAgICAgYXJyYXkgaXMgcmVjZWl2ZWQsIHRoZSBjaGFubmVsIHdpbGwgYXV0b21hdGljYWxseSBjbG9zZS5cbiAqL1xuZnVuY3Rpb24gdG9BcnJheShjaGFubmVsLCBhcnJheSA9IFtdKSB7XG4gIHJldHVybiByZWR1Y2UoXG4gICAgKGFjYywgaW5wdXQpID0+IHtcbiAgICAgIGFjYy5wdXNoKGlucHV0KTtcbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSxcbiAgICBjaGFubmVsLFxuICAgIGFycmF5XG4gICk7XG59XG5cbmV4cG9ydCB7IHJlZHVjZSwgdG9DaGFubmVsLCB0b0FycmF5IH07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuLyoqXG4gKiBBIHNldCBvZiBjaGFubmVsIG9wZXJhdGlvbiBmdW5jdGlvbnMgZm9yIHJvdXRpbmcgY2hhbm5lbHMgdG8gb3RoZXIgY2hhbm5lbHNcbiAqIGluIGRpZmZlcmVudCB3YXlzLlxuICpcbiAqIEluIGVhY2ggb2YgdGhlc2UgZnVuY3Rpb25zLCB0aGUgc291cmNlIGNoYW5uZWwgd2lsbCBub3QgYmUgYXZhaWxhYmxlIHRvIGJlXG4gKiB0YWtlbiBmcm9tLCBhcyBhbGwgb2YgdGhlIHNvdXJjZSBjaGFubmVscyB3aWxsIGhhdmUgdGhlaXIgdmFsdWVzIHRha2VuIGJ5IHRoZVxuICogcHJvY2Vzc2VzIHdpdGhpbiB0aGVzZSBmdW5jdGlvbnMuIFRoZSBsb25lIGV4Y2VwdGlvbiBpcyBgdGFwYCwgd2hlcmUgdGhlXG4gKiByZWd1bGFyIGZ1bmN0aW9uIG9mIHRoZSBzb3VyY2UgY2hhbm5lbCB3aWxsIGJlIHJlc3RvcmVkIGlmIGFsbCB0YXBzIGFyZVxuICogcmVtb3ZlZC4gRXZlbiBzbywgd2hpbGUgYXQgbGVhc3Qgb25lIHRhcCBpcyBpbiBwbGFjZSwgdGhlIHNvdXJjZSBjaGFubmVsXG4gKiBjYW5ub3QgYmUgdGFrZW4gZnJvbS5cbiAqXG4gKiBAbW9kdWxlIGNoYW5rby9vcGVyYXRpb25zL2Zsb3dcbiAqIEBwcml2YXRlXG4gKi9cblxuaW1wb3J0IHtcbiAgZ28sXG4gIGNoYW4sXG4gIHNlbmQsXG4gIHJlY3YsXG4gIHNlbGVjdCxcbiAgc2VuZEFzeW5jLFxuICByZWN2QXN5bmMsXG4gIGNsb3NlLFxuICBDTE9TRURcbn0gZnJvbSBcIkBjaGFua28vY2hhbm5lbHNcIjtcblxuaW1wb3J0IHsgaXNOdW1iZXIgfSBmcm9tIFwibW9kdWxlcy9jb21tb25cIjtcblxuY29uc3QgVEFQUyA9IFN5bWJvbChcIm11bHRpdGFwL3RhcHNcIik7XG5cbi8qKlxuICogUGlwZXMgdGhlIHZhbHVlcyBmcm9tIG9uZSBjaGFubmVsIHRvIGFub3RoZXIgY2hhbm5lbC5cbiAqXG4gKiBUaGlzIHRpZXMgdHdvIGNoYW5uZWxzIHRvZ2V0aGVyIHNvIHRoYXQgcHV0cyBvbiB0aGUgc291cmNlIGNoYW5uZWwgY2FuIGJlXG4gKiB0YWtlbiBvZmYgdGhlIGRlc3RpbmF0aW9uIGNoYW5uZWwuIFRoaXMgZG9lcyBub3QgZHVwbGljYXRlIHZhbHVlcyBpbiBhbnkgd2F5O1xuICogaWYgYW5vdGhlciBwcm9jZXNzIHRha2VzIGEgdmFsdWUgb2ZmIHRoZSBzb3VyY2UgY2hhbm5lbCwgaXQgd2lsbCBuZXZlciBhcHBlYXJcbiAqIG9uIHRoZSBkZXN0aW5hdGlvbiBjaGFubmVsLiBJbiBtb3N0IGNhc2VzIHlvdSB3aWxsIG5vdCB3YW50IHRvIHRha2UgdmFsdWVzXG4gKiBvZmYgYSBjaGFubmVsIG9uY2UgaXQncyBwaXBlZCB0byBhbm90aGVyIGNoYW5uZWwsIHNpbmNlIGl0J3MgZGlmZmljdWx0IHRvXG4gKiBrbm93IHdoaWNoIHZhbHVlcyB3aWxsIGdvIHRvIHdoaWNoIGNoYW5uZWwuXG4gKlxuICogQ2xvc2luZyBlaXRoZXIgY2hhbm5lbCB3aWxsIGJyZWFrIHRoZSBjb25uZWN0aW9uIGJldHdlZW4gdGhlIHR3by4gSWYgdGhlXG4gKiBzb3VyY2UgY2hhbm5lbCBpcyBjbG9zZWQsIHRoZSBkZXN0aW5hdGlvbiBjaGFubmVsIHdpbGwgYnkgZGVmYXVsdCBhbHNvIGJlXG4gKiBjbG9zZWQuIEhvd2V2ZXIsIHBhc3NpbmcgYHRydWVgIGFzIHRoZSB0aGlyZCBwYXJhbWV0ZXIgd2lsbCBjYXVzZSB0aGVcbiAqIGRlc3RpbmF0aW9uIGNoYW5uZWwgdG8gcmVtYWluIG9wZW4gZXZlbiB3aGVuIHRoZSBzb3VyY2UgY2hhbm5lbCBpcyBjbG9zZWRcbiAqICh0aGUgY29ubmVjdGlvbiBpcyBzdGlsbCBicm9rZW4gaG93ZXZlcikuXG4gKlxuICogQmVjYXVzZSBvZiB0aGUgYWJpbGl0eSB0byBsZWF2ZSB0aGUgZGVzdGluYXRpb24gY2hhbm5lbCBvcGVuLCBhIHBvc3NpYmxlIHVzZVxuICogY2FzZSBmb3IgdGhpcyBmdW5jdGlvbiBpcyB0byB3cmFwIHRoZSBkZXN0aW5hdGlvbiBjaGFubmVsKHMpIG9mIG9uZSBvZiB0aGVcbiAqIG90aGVyIGZsb3cgY29udHJvbCBmdW5jdGlvbnMgYmVsb3cgdG8gaGF2ZSBhIGNoYW5uZWwgdGhhdCBzdXJ2aXZlcyB0aGUgc291cmNlXG4gKiBjaGFubmVsIGNsb3NpbmcuIFRoZSByZXN0IG9mIHRob3NlIGZ1bmN0aW9ucyAoYXNpZGUgZnJvbSB0aGUgc3BlY2lhbC1jYXNlXG4gKiBge0BsaW5rIG1vZHVsZTpjaGFua28vb3BlcmF0aW9uc35PcGVyYXRpb25zLnRhcHx0YXB9YCkgYXV0b21hdGljYWxseSBjbG9zZVxuICogdGhlaXIgZGVzdGluYXRpb24gY2hhbm5lbHMgd2hlbiB0aGUgc291cmNlIGNoYW5uZWxzIGNsb3NlLlxuICpcbiAqIGBgYFxuICogaW1wb3J0IHsgZ28sIGNoYW4sIHNlbmQsIHJlY3YsIGNsb3NlLCBpc0Nsb3NlZCB9IGZyb20gXCJAY2hhbmtvL2NoYW5uZWxzXCI7XG4gKiBpbXBvcnQgeyBwaXBlIH0gZnJvbSBcIkBjaGFua28vb3BlcmF0aW9uc1wiO1xuICpcbiAqIGNvbnN0IGlucHV0ID0gY2hhbigpO1xuICogY29uc3Qgb3V0cHV0ID0gcGlwZShpbnB1dCwgY2hhbigpKTtcbiAqXG4gKiBnbyhhc3luYyAoKSA9PiB7XG4gKiAgIGF3YWl0IHNlbmQoaW5wdXQsIDEpO1xuICogICBhd2FpdCBzZW5kKGlucHV0LCAyKTtcbiAqICAgY2xvc2UoaW5wdXQpO1xuICogfSk7XG4gKlxuICogZ28oYXN5bmMgKCkgPT4ge1xuICogICBjb25zb2xlLmxvZyhhd2FpdCByZWN2KG91dHB1dCkpOyAgICAgIC8vIC0+IDFcbiAqICAgY29uc29sZS5sb2coYXdhaXQgcmVjdihvdXRwdXQpKTsgICAgICAvLyAtPiAyXG4gKiAgIGNvbnNvbGUubG9nKGlzQ2xvc2VkKG91dHB1dCkpOyAgICAgICAgLy8gLT4gdHJ1ZVxuICogfSk7XG4gKiBgYGBcbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNoYW5rby9vcGVyYXRpb25zfk9wZXJhdGlvbnNcbiAqIEBwYXJhbSB7bW9kdWxlOmNoYW5rby9jaGFubmVsfkNoYW5uZWx9IHNyYyBUaGUgc291cmNlIGNoYW5uZWwuXG4gKiBAcGFyYW0ge21vZHVsZTpjaGFua28vY2hhbm5lbH5DaGFubmVsfSBkZXN0IFRoZSBkZXN0aW5hdGlvbiBjaGFubmVsLlxuICogQHBhcmFtIHtib29sZWFufSBba2VlcE9wZW49ZmFsc2VdIEEgZmxhZyB0byBpbmRpY2F0ZSB0aGF0IHRoZSBkZXN0aW5hdGlvblxuICogICAgIGNoYW5uZWwgc2hvdWxkIGJlIGtlcHQgb3BlbiBhZnRlciB0aGUgc291cmNlIGNoYW5uZWwgY2xvc2VzLiBCeSBkZWZhdWx0XG4gKiAgICAgdGhlIGRlc3RpbmF0aW9uIGNoYW5uZWwgd2lsbCBjbG9zZSB3aGVuIHRoZSBzb3VyY2UgY2hhbm5lbCBjbG9zZXMuXG4gKiBAcmV0dXJuIHttb2R1bGU6Y2hhbmtvL2NoYW5uZWx+Q2hhbm5lbH0gVGhlIGRlc3RpbmF0aW9uIGNoYW5uZWwuXG4gKi9cbmZ1bmN0aW9uIHBpcGUoc3JjLCBkc3QsIGtlZXBPcGVuID0gZmFsc2UpIHtcbiAgZ28oYXN5bmMgKCkgPT4ge1xuICAgIGZvciAoOzspIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gYXdhaXQgcmVjdihzcmMpO1xuICAgICAgaWYgKHZhbHVlID09PSBDTE9TRUQpIHtcbiAgICAgICAgaWYgKCFrZWVwT3Blbikge1xuICAgICAgICAgIGNsb3NlKGRzdCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBpZiAoIShhd2FpdCBzZW5kKGRzdCwgdmFsdWUpKSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBkc3Q7XG59XG5cbi8qKlxuICogQ3JlYXRlcyB0d28gbmV3IGNoYW5uZWxzIGFuZCByb3V0ZXMgdmFsdWVzIGZyb20gYSBzb3VyY2UgY2hhbm5lbCB0byB0aGVtXG4gKiBhY2NvcmRpbmcgdG8gYSBwcmVkaWNhdGUgZnVuY3Rpb24uXG4gKlxuICogVGhlIHN1cHBsaWVkIGZ1bmN0aW9uIGlzIGludm9rZWQgd2l0aCBldmVyeSB2YWx1ZSB0aGF0IGlzIHB1dCBvbnRvIHRoZSBzb3VyY2VcbiAqIGNoYW5uZWwuIFRob3NlIHRoYXQgcmV0dXJuIGB0cnVlYCBhcmUgcm91dGVkIHRvIHRoZSBmaXJzdCBkZXN0aW5hdGlvblxuICogY2hhbm5lbDsgdGhvc2UgdGhhdCByZXR1cm4gYGZhbHNlYCBhcmUgcm91dGVkIHRvIHRoZSBzZWNvbmQuXG4gKlxuICogVGhlIG5ldyBjaGFubmVscyBhcmUgY3JlYXRlZCBieSB0aGUgZnVuY3Rpb24gYmFzZWQgb24gdGhlIGJ1ZmZlciB2YWx1ZXNcbiAqIHBhc3NlZCBhcyB0aGUgdGhpcmQgYW5kIGZvdXJ0aCBwYXJhbWV0ZXJzLiBJZiBvbmUgb3IgYm90aCBvZiB0aGVzZSBhcmVcbiAqIG1pc3NpbmcsIGBudWxsYCwgb3IgYDBgLCB0aGUgY29ycmVzcG9uZGluZyBkZXN0aW5hdGlvbiBjaGFubmVsIGlzIHVuYnVmZmVyZWQuXG4gKiBJZiBvbmUgaXMgYSBwb3NpdGl2ZSBpbnRlZ2VyLCB0aGUgY29ycmVzcG9uZGluZyBjaGFubmVsIGlzIGJ1ZmZlcmVkIGJ5IGFcbiAqIGZpeGVkIGJ1ZmZlciBvZiB0aGF0IHNpemUuIElmIHRoZSBwYXJhbWV0ZXIgZm9yIGEgY2hhbm5lbCBpcyBhIGJ1ZmZlciwgdGhlblxuICogdGhhdCBidWZmZXIgaXMgdXNlZCB0byBidWZmZXIgdGhlIG5ldyBjaGFubmVsLlxuICpcbiAqIEJvdGggbmV3IGNoYW5uZWxzIGFyZSBjbG9zZWQgd2hlbiB0aGUgc291cmNlIGNoYW5uZWwgaXMgY2xvc2VkLlxuICpcbiAqXG4gKiBgYGBcbiAqIGltcG9ydCB7IGdvLCBjaGFuLCBzZW5kLCBjbG9zZSB9IGZyb20gXCJAY2hhbmtvL2NoYW5uZWxzXCI7XG4gKiBpbXBvcnQgeyBwYXJ0aXRpb24gfSBmcm9tIFwiQGNoYW5rby9vcGVyYXRpb25zXCI7XG4gKlxuICogY29uc3QgaW5wdXQgPSBjaGFuKCk7XG4gKiBjb25zdCBjdHJsID0gY2hhbigpO1xuICogY29uc3QgW2V2ZW4sIG9kZF0gPSBwYXJ0aXRpb24oeCA9PiB4ICUgMiA9PT0gMCwgaW5wdXQsIDMsIDMpO1xuICpcbiAqIGdvKGFzeW5jICgpID0+IHtcbiAqICAgYXdhaXQgc2VuZChpbnB1dCwgMSk7XG4gKiAgIGF3YWl0IHNlbmQoaW5wdXQsIDIpO1xuICogICBhd2FpdCBzZW5kKGlucHV0LCAzKTtcbiAqICAgYXdhaXQgc2VuZChpbnB1dCwgNCk7XG4gKiAgIGNsb3NlKGlucHV0KTtcbiAqIH0pO1xuICpcbiAqIGdvKGFzeW5jICgpID0+IHtcbiAqICAgZm9yIGF3YWl0IChjb25zdCB2YWx1ZSBvZiBldmVuKSB7XG4gKiAgICAgY29uc29sZS5sb2codmFsdWUpO1xuICogICB9XG4gKiAgIGF3YWl0IHNlbmQoY3RybCk7XG4gKiB9KTtcbiAqXG4gKiBnbyhhc3luYyAoKSA9PiB7XG4gKiAgIGF3YWl0IHJlY3YoY3RybCk7XG4gKiAgIGZvciBhd2FpdCAoY29uc3QgdmFsdWUgb2Ygb2RkKSB7XG4gKiAgICAgY29uc29sZS5sb2codmFsdWUpO1xuICogICB9XG4gKiB9KTtcbiAqXG4gKiAvLyBUaGUgYGN0cmxgIGNoYW5uZWwgZW5zdXJlcyB0aGF0IGFsbCBvZiB0aGUgdmFsdWVzIG9uIHRoZSBldmVuIGNoYW5uZWwgYXJlXG4gKiAvLyByZWFkIGJlZm9yZSBhbnkgb2YgdGhlIHZhbHVlcyBvbiB0aGUgb2RkIGNoYW5uZWwgYXJlICh0aGlzIGlzIG9ubHlcbiAqIC8vIHBvc3NpYmxlIGJlY2F1c2UgdGhlIG91dHB1dCBjaGFubmVscyBoYXZlIGJ1ZmZlcnMgYmlnIGVub3VnaCB0byBtYWtlIHN1cmVcbiAqIC8vIHRoYXQgbm8gc2VuZCBpcyBibG9ja2VkKS5cbiAqIC8vXG4gKiAvLyAtPiAyXG4gKiAvLyAtPiA0XG4gKiAvLyAtPiAxXG4gKiAvLyAtPiAzXG4gKiBgYGBcbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNoYW5rby9vcGVyYXRpb25zfk9wZXJhdGlvbnNcbiAqIEBwYXJhbSB7bW9kdWxlOmNoYW5rb35wcmVkaWNhdGV9IGZuIEEgcHJlZGljYXRlIGZ1bmN0aW9uIHVzZWQgdG8gdGVzdCBlYWNoXG4gKiB2YWx1ZSBvbiB0aGUgaW5wdXQgY2hhbm5lbC5cbiAqIEBwYXJhbSB7bW9kdWxlOmNoYW5rby9jaGFubmVsfkNoYW5uZWx9IHNyYyBUaGUgc291cmNlIGNoYW5uZWwuXG4gKiBAcGFyYW0geyhudW1iZXJ8bW9kdWxlOmNoYW5rby9idWZmZXJ+QnVmZmVyKX0gW3RCdWZmZXI9MF0gQSBidWZmZXIgdXNlZCB0b1xuICogICAgIGNyZWF0ZSB0aGUgZGVzdGluYXRpb24gY2hhbm5lbCB3aGljaCByZWNlaXZlcyBhbGwgdmFsdWVzIHRoYXQgcGFzc2VkIHRoZVxuICogICAgIHByZWRpY2F0ZS4gSWYgdGhpcyBpcyBhIG51bWJlciwgYVxuICogICAgIHtAbGluayBtb2R1bGU6Y2hhbmtvL2J1ZmZlcn5GaXhlZEJ1ZmZlcn0gb2YgdGhhdCBzaXplIHdpbGwgYmUgdXNlZC4gSWZcbiAqICAgICB0aGlzIGlzIGAwYCBvciBub3QgcHJlc2VudCwgdGhlIGNoYW5uZWwgd2lsbCBiZSB1bmJ1ZmZlcmVkLlxuICogQHBhcmFtIHsobnVtYmVyfG1vZHVsZTpjaGFua28vYnVmZmVyfkJ1ZmZlcil9IFtmQnVmZmVyPTBdIEEgYnVmZmVyIHVzZWQgdG9cbiAqICAgICBjcmVhdGUgdGhlIGRlc3RpbmF0aW9uIGNoYW5uZWwgd2hpY2ggcmVjZWl2ZXMgYWxsIHZhbHVlcyB0aGF0IGRpZCBub3RcbiAqICAgICBwYXNzIHRoZSBwcmVkaWNhdGUuIElmIHRoaXMgaXMgYSBudW1iZXIsIGFcbiAqICAgICB7QGxpbmsgbW9kdWxlOmNoYW5rby9idWZmZXJ+Rml4ZWRCdWZmZXJ9IG9mIHRoYXQgc2l6ZSB3aWxsIGJlIHVzZWQuIElmXG4gKiAgICAgdGhpcyBpcyBgMGAgb3Igbm90IHByZXNlbnQsIHRoZSBjaGFubmVsIHdpbGwgYmUgdW5idWZmZXJlZC5cbiAqIEByZXR1cm4ge21vZHVsZTpjaGFua28vY2hhbm5lbH5DaGFubmVsW119IEFuIGFycmF5IG9mIHR3byBjaGFubmVscy4gVGhlIGZpcnN0XG4gKiAgICAgaXMgdGhlIGRlc3RpbmF0aW9uIGNoYW5uZWwgd2l0aCBhbGwgb2YgdGhlIHZhbHVlcyB0aGF0IHBhc3NlZCB0aGVcbiAqICAgICBwcmVkaWNhdGUsIHRoZSBzZWNvbmQgaXMgdGhlIGRlc3RpbmF0aW9uIGNoYW5uZWwgd2l0aCBhbGwgb2YgdGhlIHZhbHVlc1xuICogICAgIHRoYXQgZGlkIG5vdCBwYXNzIHRoZSBwcmVkaWNhdGUuXG4gKi9cbmZ1bmN0aW9uIHBhcnRpdGlvbihmbiwgc3JjLCB0QnVmZmVyID0gMCwgZkJ1ZmZlciA9IDApIHtcbiAgY29uc3QgdERzdCA9IGNoYW4odEJ1ZmZlcik7XG4gIGNvbnN0IGZEc3QgPSBjaGFuKGZCdWZmZXIpO1xuXG4gIGdvKGFzeW5jICgpID0+IHtcbiAgICBmb3IgKDs7KSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGF3YWl0IHJlY3Yoc3JjKTtcbiAgICAgIGlmICh2YWx1ZSA9PT0gQ0xPU0VEKSB7XG4gICAgICAgIGNsb3NlKHREc3QpO1xuICAgICAgICBjbG9zZShmRHN0KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBhd2FpdCBzZW5kKGZuKHZhbHVlKSA/IHREc3QgOiBmRHN0LCB2YWx1ZSk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gW3REc3QsIGZEc3RdO1xufVxuXG4vKipcbiAqIE1lcmdlcyBvbmUgb3IgbW9yZSBjaGFubmVscyBpbnRvIGEgc2luZ2xlIGRlc3RpbmF0aW9uIGNoYW5uZWwuXG4gKlxuICogVmFsdWVzIGFyZSBnaXZlbiB0byB0aGUgZGVzdGluYXRpb24gY2hhbm5lbCBhcyB0aGV5IGFyZSBzZW50IHRvIHRoZSBzb3VyY2VcbiAqIGNoYW5uZWxzLiBJZiBgbWVyZ2VgIGlzIGNhbGxlZCB3aGVuIHRoZXJlIGFyZSBhbHJlYWR5IHZhbHVlcyBvbiBtdWx0aXBsZVxuICogc291cmNlIGNoYW5uZWxzLCB0aGUgb3JkZXIgdGhhdCB0aGV5J3JlIHB1dCBvbnRvIHRoZSBkZXN0aW5hdGlvbiBjaGFubmVsIGlzXG4gKiByYW5kb20uXG4gKlxuICogVGhlIGRlc3RpbmF0aW9uIGNoYW5uZWwgaXMgY3JlYXRlZCBieSB0aGUgZnVuY3Rpb24gYmFzZWQgb24gdGhlIGJ1ZmZlciB2YWx1ZVxuICogcGFzc2VkIGFzIHRoZSBzZWNvbmQgcGFyYW1ldGVyLiBJZiB0aGlzIGlzIG1pc3NpbmcsIGBudWxsYCwgb3IgYDBgLCB0aGVcbiAqIGRlc3RpbmF0aW9uIGNoYW5uZWwgd2lsbCBiZSB1bmJ1ZmZlcmVkLiBJZiBpdCdzIGEgcG9zaXRpdmUgaW50ZWdlciwgdGhlXG4gKiBkZXN0aW5hdGlvbiBjaGFubmVsIGlzIGJ1ZmZlcmVkIGJ5IGEgZml4ZWQgYnVmZmVyIG9mIHRoYXQgc2l6ZS4gSWYgdGhlXG4gKiBwYXJhbWV0ZXIgaXMgYSBidWZmZXIsIHRoZW4gdGhhdCBidWZmZXIgaXMgdXNlZCB0byBidWZmZXIgdGhlIGRlc3RpbmF0aW9uXG4gKiBjaGFubmVsLlxuICpcbiAqIEFzIGVhY2ggc291cmNlIGNoYW5uZWwgY2xvc2VzLCBpdCBpcyByZW1vdmVkIGZyb20gdGhlIG1lcmdlLCBsZWF2aW5nIHRoZVxuICogY2hhbm5lbHMgdGhhdCBhcmUgc3RpbGwgb3BlbiB0byBjb250aW51ZSBtZXJnaW5nLiBXaGVuICphbGwqIG9mIHRoZSBzb3VyY2VcbiAqIGNoYW5uZWxzIGNsb3NlLCB0aGVuIHRoZSBkZXN0aW5hdGlvbiBjaGFubmVsIGlzIGNsb3NlZC5cbiAqXG4gKiBgYGBcbiAqIGltcG9ydCB7IGdvLCBjaGFuLCBzZW5kLCByZWN2IH0gZnJvbSBcIkBjaGFua28vY2hhbm5lbHNcIjtcbiAqIGltcG9ydCB7IG1lcmdlIH0gZnJvbSBcIkBjaGFua28vb3BlcmF0aW9uc1wiO1xuICpcbiAqIGNvbnN0IGlucHV0MSA9IGNoYW4oKTtcbiAqIGNvbnN0IGlucHV0MiA9IGNoYW4oKTtcbiAqIGNvbnN0IGlucHV0MyA9IGNoYW4oKTtcbiAqIGNvbnN0IG91dHB1dCA9IG1lcmdlKFtpbnB1dDEsIGlucHV0MiwgaW5wdXQzXSk7XG4gKlxuICogZ28oYXN5bmMgKCkgPT4ge1xuICogICAvLyBCZWNhdXNlIHdlJ3JlIHNlbmRpbmcgdG8gYWxsIHRocmVlIGNoYW5uZWxzIGluIHRoZSBzYW1lXG4gKiAgIC8vIHByb2Nlc3MsIHdlIGtub3cgdGhlIG9yZGVyIGluIHdoaWNoIHRoZSB2YWx1ZXMgd2lsbCBiZVxuICogICAvLyBzZW50IHRvIHRoZSBvdXRwdXQgY2hhbm5lbDsgaW4gZ2VuZXJhbCwgd2Ugd29uJ3Qga25vdyB0aGlzXG4gKiAgIGF3YWl0IHNlbmQoaW5wdXQxLCAxKTtcbiAqICAgYXdhaXQgc2VuZChpbnB1dDIsIDIpO1xuICogICBhd2FpdCBzZW5kKGlucHV0MywgMyk7XG4gKiB9KTtcbiAqXG4gKiBnbyhhc3luYyAoKSA9PiB7XG4gKiAgIGNvbnNvbGUubG9nKGF3YWl0IHJlY3Yob3V0cHV0KSk7ICAgICAgLy8gLT4gMVxuICogICBjb25zb2xlLmxvZyhhd2FpdCByZWN2KG91dHB1dCkpOyAgICAgIC8vIC0+IDJcbiAqICAgY29uc29sZS5sb2coYXdhaXQgcmVjdihvdXRwdXQpKTsgICAgICAvLyAtPiAzXG4gKiB9KTtcbiAqIGBgYFxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y2hhbmtvL29wZXJhdGlvbnN+T3BlcmF0aW9uc1xuICogQHBhcmFtIHttb2R1bGU6Y2hhbmtvL2NoYW5uZWx+Q2hhbm5lbFtdfSBzcmNzIEFuIGFycmF5IG9mIHNvdXJjZSBjaGFubmVscy5cbiAqIEBwYXJhbSB7KG51bWJlcnxtb2R1bGU6Y2hhbmtvL2J1ZmZlcn5CdWZmZXIpfSBbYnVmZmVyPTBdIEEgYnVmZmVyIHVzZWQgdG9cbiAqICAgICBjcmVhdGUgdGhlIGRlc3RpbmF0aW9uIGNoYW5uZWwuIElmIHRoaXMgaXMgYSBudW1iZXIsIGFcbiAqICAgICB7QGxpbmsgbW9kdWxlOmNoYW5rby9idWZmZXJ+Rml4ZWRCdWZmZXJ9IG9mIHRoYXQgc2l6ZSB3aWxsIGJlIHVzZWQuIElmXG4gKiAgICAgdGhpcyBpcyBgMGAgb3Igbm90IHByZXNlbnQsIHRoZSBjaGFubmVsIHdpbGwgYmUgdW5idWZmZXJlZC5cbiAqIEByZXR1cm4ge21vZHVsZTpjaGFua28vY2hhbm5lbH5DaGFubmVsfSBUaGUgZGVzdGluYXRpb24gY2hhbm5lbCwgd2hpY2ggd2lsbFxuICogICAgIHJlY2VpdmUgYWxsIHZhbHVlcyBwdXQgb250byBldmVyeSBzb3VyY2UgY2hhbm5lbC5cbiAqL1xuZnVuY3Rpb24gbWVyZ2Uoc3JjcywgYnVmZmVyID0gMCkge1xuICBjb25zdCBkc3QgPSBjaGFuKGJ1ZmZlcik7XG4gIGNvbnN0IGlucHV0cyA9IHNyY3Muc2xpY2UoKTtcblxuICBnbyhhc3luYyAoKSA9PiB7XG4gICAgZm9yICg7Oykge1xuICAgICAgaWYgKGlucHV0cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjb25zdCB7IHZhbHVlLCBjaGFubmVsIH0gPSBhd2FpdCBzZWxlY3QoaW5wdXRzKTtcbiAgICAgIGlmICh2YWx1ZSA9PT0gQ0xPU0VEKSB7XG4gICAgICAgIGlucHV0cy5zcGxpY2UoaW5wdXRzLmluZGV4T2YoY2hhbm5lbCksIDEpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGF3YWl0IHNlbmQoZHN0LCB2YWx1ZSk7XG4gICAgfVxuICAgIGNsb3NlKGRzdCk7XG4gIH0pO1xuXG4gIHJldHVybiBkc3Q7XG59XG5cbi8qKlxuICogU3BsaXRzIGEgc2luZ2xlIGNoYW5uZWwgaW50byBtdWx0aXBsZSBkZXN0aW5hdGlvbiBjaGFubmVscywgd2l0aCBlYWNoXG4gKiBkZXN0aW5hdGlvbiBjaGFubmVsIHJlY2VpdmluZyBldmVyeSB2YWx1ZSBzZW50IHRvIHRoZSBzb3VyY2UgY2hhbm5lbC5cbiAqXG4gKiBFdmVyeSBwYXJhbWV0ZXIgYWZ0ZXIgdGhlIGZpcnN0IHJlcHJlc2VudHMgdGhlIGJ1ZmZlciBmcm9tIGEgc2luZ2xlXG4gKiBkZXN0aW5hdGlvbiBjaGFubmVsLiBFYWNoIGAwYCBvciBgbnVsbGAgd2lsbCBwcm9kdWNlIGFuIHVuYnVmZmVyZWQgY2hhbm5lbCxcbiAqIHdoaWxlIGVhY2ggcG9zaXRpdmUgaW50ZWdlciB3aWxsIHByb2R1Y2UgYSBjaGFubmVsIGJ1ZmZlcmVkIGJ5IGEgZml4ZWQgYnVmZmVyXG4gKiBvZiB0aGF0IHNpemUuIEVhY2ggYnVmZmVyIHdpbGwgcHJvZHVjZSBhIGJ1ZmZlcmVkIGNoYW5uZWwgYmFja2VkIGJ5IHRoYXRcbiAqIGJ1ZmZlci4gSWYgdGhlcmUgYXJlIG5vIHBhcmFtZXRlcnMgYWZ0ZXIgdGhlIGZpcnN0LCB0aGVuIHR3byB1bmJ1ZmZlcmVkXG4gKiBjaGFubmVscyB3aWxsIGJlIHByb2R1Y2VkIGFzIGEgZGVmYXVsdC5cbiAqXG4gKiBXaGVuIHRoZSBzb3VyY2UgY2hhbm5lbCBpcyBjbG9zZWQsIGFsbCBkZXN0aW5hdGlvbiBjaGFubmVscyB3aWxsIGFsc28gYmVcbiAqIGNsb3NlZC4gSG93ZXZlciwgaWYgZGVzdGluYXRpb24gY2hhbm5lbHMgYXJlIGNsb3NlZCwgdGhleSBkbyBub3RoaW5nIHRvIHRoZVxuICogc291cmNlIGNoYW5uZWwuXG4gKlxuICogYGBgXG4gKiBpbXBvcnQgeyBnbywgY2hhbiwgc2VuZCB9IGZyb20gXCJAY2hhbmtvL2NoYW5uZWxzXCI7XG4gKiBpbXBvcnQgeyBzcGxpdCB9IGZyb20gXCJAY2hhbmtvL29wZXJhdGlvbnNcIjtcbiAqXG4gKiBjb25zdCBpbnB1dCA9IGNoYW4oKTtcbiAqIGNvbnN0IG91dHB1dHMgPSBzcGxpdChpbnB1dCwgMyk7XG4gKlxuICogZ28oYXN5bmMgKCkgPT4ge1xuICogICBhd2FpdCBzZW5kKGlucHV0LCAxKTtcbiAqICAgYXdhaXQgc2VuZChpbnB1dCwgMik7XG4gKiAgIGF3YWl0IHNlbmQoaW5wdXQsIDMpO1xuICogfSk7XG4gKlxuICogZ28oYXN5bmMgKCkgPT4ge1xuICogICBmb3IgYXdhaXQgKGNvbnN0IG91dHB1dCBvZiBvdXRwdXRzKSB7XG4gKiAgICAgY29uc29sZS5sb2cob3V0cHV0KTtcbiAqICAgICAvLyAtPiAxXG4gKiAgICAgLy8gLT4gMlxuICogICAgIC8vIC0+IDNcbiAqICAgfVxuICogfSk7XG4gKiBgYGBcbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIG1vdmVzIGl0cyB2YWx1ZXMgdG8gdGhlIG91dHB1dCBjaGFubmVscyBhc3luY2hyb25vdXNseS4gVGhpc1xuICogbWVhbnMgdGhhdCBldmVuIHdoZW4gdXNpbmcgdW5idWZmZXJlZCBjaGFubmVscywgaXQgaXMgbm90IG5lY2Vzc2FyeSBmb3IgYWxsXG4gKiBvdXRwdXQgY2hhbm5lbHMgdG8gYmUgcmVjZWl2ZWQgZnJvbSBiZWZvcmUgdGhlIG5leHQgc2VuZCB0byB0aGUgaW5wdXQgY2hhbm5lbFxuICogY2FuIGNvbXBsZXRlLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y2hhbmtvL29wZXJhdGlvbnN+T3BlcmF0aW9uc1xuICogQHBhcmFtIHttb2R1bGU6Y2hhbmtvL2NoYW5uZWx+Q2hhbm5lbH0gc3JjIFRoZSBzb3VyY2UgY2hhbm5lbC5cbiAqIEBwYXJhbSB7Li4uKG51bWJlcnxtb2R1bGU6Y2hhbmtvL2J1ZmZlcn5CdWZmZXIpfSBbYnVmZmVycz0yXSBUaGUgYnVmZmVycyB1c2VkXG4gKiAgICAgdG8gY3JlYXRlIHRoZSBkZXN0aW5hdGlvbiBjaGFubmVscy4gRWFjaCBlbnRyeSBpcyB0cmVhdGVkIHNlcGFyYXRlbHkuIElmXG4gKiAgICAgb25lIGlzIGEgbnVtYmVyLCB0aGVuIGFcbiAqICAgICB7QGxpbmsgbW9kdWxlOmNoYW5rby9idWZmZXJ+Rml4ZWRCdWZmZXJ8Rml4ZWRCdWZmZXJ9IG9mIHRoYXQgc2l6ZSB3aWxsIGJlXG4gKiAgICAgdXNlZC4gSWYgb25lIGlzIGEgYDBgLCB0aGVuIHRoZSBjb3JyZXNwb25kaW5nIGNoYW5uZWwgd2lsbCBiZSB1bmJ1ZmZlcmVkLlxuICogICAgICoqRXhjZXB0aW9uOioqIGlmIGEgc2luZ2xlIG51bWJlciBpcyBwYXNzZWQsIHRoZW4gdGhhdCBudW1iZXIgb2ZcbiAqICAgICB1bmJ1ZmVycmVkIGNoYW5uZWxzIHdpbGwgYmUgY3JlYXRlZC4gVGhpcyBtZWFucyB0aGF0IHRoZSBkZWZhdWx0IGlzIHRvXG4gKiAgICAgY3JlYXRlIHR3byB1bmJ1ZmZlcmVkIGNoYW5uZWxzLiBUbyBjcmVhdGUgYSBzaW5nbGUgY2hhbm5lbCB3aXRoIGEgZml4ZWRcbiAqICAgICBidWZmZXIsIHVzZSBge0BsaW5rIGNoYW5rb35DaGFua28uZml4ZWR8Zml4ZWR9YCBleHBsaWNpdGx5LlxuICogQHJldHVybiB7bW9kdWxlOmNoYW5rby9jaGFubmVsfkNoYW5uZWxbXX0gQW4gYXJyYXkgb2YgZGVzdGluYXRpb24gY2hhbm5lbHMuXG4gKi9cbmZ1bmN0aW9uIHNwbGl0KHNyYywgLi4uYnVmZmVycykge1xuICBsZXQgYmZzID0gYnVmZmVycy5sZW5ndGggPT09IDAgPyBbMl0gOiBidWZmZXJzO1xuICBpZiAoYmZzLmxlbmd0aCA9PT0gMSAmJiBpc051bWJlcihiZnNbMF0pKSB7XG4gICAgY29uc3QgY291bnQgPSBiZnNbMF07XG4gICAgYmZzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICBiZnMucHVzaCgwKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBkc3RzID0gYmZzLm1hcChiZiA9PiBjaGFuKGJmKSk7XG4gIGNvbnN0IGRvbmUgPSBjaGFuKCk7XG4gIGxldCBjb3VudCA9IDA7XG5cbiAgZnVuY3Rpb24gY2FsbGJhY2soKSB7XG4gICAgaWYgKC0tY291bnQgPT09IDApIHtcbiAgICAgIHNlbmRBc3luYyhkb25lKTtcbiAgICB9XG4gIH1cblxuICBnbyhhc3luYyAoKSA9PiB7XG4gICAgZm9yICg7Oykge1xuICAgICAgY29uc3QgdmFsdWUgPSBhd2FpdCByZWN2KHNyYyk7XG4gICAgICBpZiAodmFsdWUgPT09IENMT1NFRCkge1xuICAgICAgICBmb3IgKGNvbnN0IGRzdCBvZiBkc3RzKSB7XG4gICAgICAgICAgY2xvc2UoZHN0KTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY291bnQgPSBkc3RzLmxlbmd0aDtcbiAgICAgIGZvciAoY29uc3QgZHN0IG9mIGRzdHMpIHtcbiAgICAgICAgc2VuZEFzeW5jKGRzdCwgdmFsdWUsIGNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICAgIGF3YWl0IHJlY3YoZG9uZSk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZHN0cztcbn1cblxuLyoqXG4gKiBVdGlsaXR5IGZ1bmN0aW9uIHRvIGFkZCB0aGUgYWJpbGl0eSB0byBiZSB0YXBwZWQgdG8gYSBjaGFubmVsIHRoYXQgaXMgYmVpbmdcbiAqIHRhcHBlZC4gVGhpcyB3aWxsIGFkZCBhIHNpbmdsZSBwcm9wZXJ0eSB0byB0aGF0IGNoYW5uZWwgb25seSAobmFtZWRcbiAqICdAQG11bHRpdGFwL3RhcHMnIHNvIGFzIHRvIGRlY3JlYXNlIHRoZSBjaGFuY2Ugb2YgY29sbGlzaW9uKSwgYnV0IHRoZSB0YXBwaW5nXG4gKiBmdW5jdGlvbmFsaXR5IGl0c2VsZiBpcyBwcm92aWRlZCBvdXRzaWRlIHRoZSBjaGFubmVsIG9iamVjdC4gVGhpcyBuZXdcbiAqIHByb3BlcnR5IGlzIGFuIGFycmF5IG9mIHRoZSBjaGFubmVscyB0YXBwaW5nIHRoaXMgY2hhbm5lbCwgYW5kIGl0IHdpbGwgYmVcbiAqIHJlbW92ZWQgaWYgYWxsIHRhcHMgYXJlIHJlbW92ZWQuXG4gKlxuICogQHBhcmFtIHttb2R1bGU6Y2hhbmtvL2NoYW5uZWx+Q2hhbm5lbH0gc3JjIFRoZSBzb3VyY2UgY2hhbm5lbCB0byBiZSB0YXBwZWQuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBtYWtlVGFwKHNyYykge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3JjLCBUQVBTLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgIHZhbHVlOiBbXVxuICB9KTtcblxuICBjb25zdCBkb25lID0gY2hhbigpO1xuICBsZXQgY291bnQgPSAwO1xuXG4gIGZ1bmN0aW9uIGNhbGxiYWNrKCkge1xuICAgIGlmICgtLWNvdW50ID09PSAwKSB7XG4gICAgICBzZW5kQXN5bmMoZG9uZSk7XG4gICAgfVxuICB9XG5cbiAgZ28oYXN5bmMgKCkgPT4ge1xuICAgIGZvciAoOzspIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gYXdhaXQgcmVjdihzcmMpO1xuICAgICAgaWYgKHZhbHVlID09PSBDTE9TRUQgfHwgc3JjW1RBUFNdLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBkZWxldGUgc3JjW1RBUFNdO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY291bnQgPSBzcmNbVEFQU10ubGVuZ3RoO1xuICAgICAgZm9yIChjb25zdCB0YXAgb2Ygc3JjW1RBUFNdKSB7XG4gICAgICAgIHNlbmRBc3luYyh0YXAsIHZhbHVlLCBjYWxsYmFjayk7XG4gICAgICB9XG4gICAgICBhd2FpdCByZWN2KGRvbmUpO1xuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxuICogVGFwcyBhIGNoYW5uZWwsIHNlbmRpbmcgYWxsIG9mIHRoZSB2YWx1ZXMgc2VudCB0byBpdCB0byB0aGUgZGVzdGluYXRpb25cbiAqIGNoYW5uZWwuXG4gKlxuICogQSBzb3VyY2UgY2hhbm5lbCBjYW4gYmUgdGFwcGVkIG11bHRpcGxlIHRpbWVzLCBhbmQgYWxsIG9mIHRoZSB0YXBwaW5nXG4gKiAoZGVzdGluYXRpb24pIGNoYW5uZWxzIHJlY2VpdmUgZWFjaCB2YWx1ZSBzZW50IHRvIHRoZSB0YXBwZWQgKHNvdXJjZSlcbiAqIGNoYW5uZWwuXG4gKlxuICogVGhpcyBpcyBkaWZmZXJlbnQgZnJvbVxuICogYHtAbGluayBtb2R1bGU6Y2hhbmtvL29wZXJhdGlvbnN+T3BlcmF0aW9ucy5zcGxpdHxzcGxpdH1gIGluIHRoYXQgaXQnc1xuICogdGVtcG9yYXJ5LiBDaGFubmVscyBjYW4gdGFwIGEgY2hhbm5lbCBhbmQgdGhlbiB1bnRhcCBpdCwgbXVsdGlwbGUgdGltZXMsIGFzXG4gKiBuZWVkZWQuIElmIGEgc291cmNlIGNoYW5uZWwgaGFzIGFsbCBvZiBpdHMgdGFwcyByZW1vdmVkLCB0aGVuIGl0IHJldmVydHMgdG8gYVxuICogbm9ybWFsIGNoYW5uZWwsIGp1c3QgYXMgaXQgd2FzIGJlZm9yZSBpdCB3YXMgdGFwcGVkLlxuICpcbiAqIEFsc28gdW5saWtlIGB7QGxpbmsgbW9kdWxlOmNoYW5rby9vcGVyYXRpb25zfk9wZXJhdGlvbnMuc3BsaXR8c3BsaXR9YCwgZWFjaFxuICogY2FsbCBjYW4gb25seSB0YXAgb25jZS4gRm9yIG11bHRpcGxlIGNoYW5uZWxzIHRvIHRhcCBhIHNvdXJjZSBjaGFubmVsLCBgdGFwYFxuICogaGFzIHRvIGJlIGNhbGxlZCBtdWx0aXBsZSB0aW1lcy5cbiAqXG4gKiBDbG9zaW5nIGVpdGhlciB0aGUgc291cmNlIG9yIGFueSBvZiB0aGUgZGVzdGluYXRpb24gY2hhbm5lbHMgaGFzIG5vIGVmZmVjdCBvblxuICogYW55IG9mIHRoZSBvdGhlciBjaGFubmVscy5cbiAqXG4gKiBgYGBcbiAqIGltcG9ydCB7IGdvLCBjaGFuLCBzZW5kLCByZWN2IH0gZnJvbSBcIkBjaGFua28vY2hhbm5lbHNcIjtcbiAqIGltcG9ydCB7IHRhcCB9IGZyb20gXCJAY2hhbmtvL29wZXJhdGlvbnNcIjtcbiAqXG4gKiBjb25zdCBpbnB1dCA9IGNoYW4oKTtcbiAqIGNvbnN0IHRhcHBlciA9IGNoYW4oKTtcbiAqIHRhcChpbnB1dCwgdGFwcGVyKTtcbiAqXG4gKiBnbyhhc3luYyAoKSA9PiB7XG4gKiAgIGF3YWl0IHNlbmQoaW5wdXQsIDEpO1xuICogICBhd2FpdCBzZW5kKGlucHV0LCAyKTtcbiAqIH0pO1xuICpcbiAqIGdvKGFzeW5jICgpID0+IHtcbiAqICAgY29uc29sZS5sb2coYXdhaXQgcmVjdih0YXBwZXIpKTsgICAvLyAtPiAxXG4gKiAgIGNvbnNvbGUubG9nKGF3YWl0IHJlY3YodGFwcGVyKSk7ICAgLy8gLT4gMlxuICogfSk7XG4gKlxuICogYGBgXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjaGFua28vb3BlcmF0aW9uc35PcGVyYXRpb25zXG4gKiBAcGFyYW0ge21vZHVsZTpjaGFua28vY2hhbm5lbH5DaGFubmVsfSBzcmMgVGhlIGNoYW5uZWwgdG8gYmUgdGFwcGVkLlxuICogQHBhcmFtIHttb2R1bGU6Y2hhbmtvL2NoYW5uZWx+Q2hhbm5lbH0gW2Rlc3RdIFRoZSBjaGFubmVsIHRhcHBpbmcgdGhlIHNvdXJjZVxuICogICAgIGNoYW5uZWwuIElmIHRoaXMgaXMgbm90IHByZXNlbnQsIGEgbmV3IHVuYnVmZmVyZWQgY2hhbm5lbCB3aWxsIGJlXG4gKiAgICAgY3JlYXRlZC5cbiAqIEByZXR1cm4ge21vZHVsZTpjaGFua28vY2hhbm5lbH5DaGFubmVsfSBUaGUgZGVzdGluYXRpb24gY2hhbm5lbC4gVGhpcyBpcyB0aGVcbiAqICAgICBzYW1lIGFzIHRoZSBzZWNvbmQgYXJndW1lbnQsIGlmIHByZXNlbnQ7IG90aGVyd2lzZSBpdCBpcyB0aGVcbiAqICAgICBuZXdseS1jcmVhdGVkIGNoYW5uZWwgdGFwcGluZyB0aGUgc291cmNlIGNoYW5uZWwuXG4gKi9cbmZ1bmN0aW9uIHRhcChzcmMsIGRzdCA9IGNoYW4oKSkge1xuICBpZiAoIXNyY1tUQVBTXSkge1xuICAgIG1ha2VUYXAoc3JjKTtcbiAgfVxuICBpZiAoIXNyY1tUQVBTXS5pbmNsdWRlcyhkc3QpKSB7XG4gICAgc3JjW1RBUFNdLnB1c2goZHN0KTtcbiAgfVxuICByZXR1cm4gZHN0O1xufVxuXG4vKipcbiAqIFVudGFwcyBhIHByZXZpb3VzbHkgdGFwcGluZyBkZXN0aW5hdGlvbiBjaGFubmVsIGZyb20gaXRzIHNvdXJjZSBjaGFubmVsLlxuICpcbiAqIFRoaXMgcmVtb3ZlcyBhIHByZXZpb3VzbHkgY3JlYXRlZCB0YXAuIFRoZSBkZXN0aW5hdGlvbiAodGFwcGluZykgY2hhbm5lbCB3aWxsXG4gKiBzdG9wIHJlY2VpdmluZyB0aGUgdmFsdWVzIHNlbnQgdG8gdGhlIHNvdXJjZSBjaGFubmVsLlxuICpcbiAqIElmIHRoZSBkZXN0aW5hdGlvbiBjaGFubmVsIHdhcyBub3QsIGluIGZhY3QsIHRhcHBpbmcgdGhlIHNvdXJjZSBjaGFubmVsLCB0aGlzXG4gKiBmdW5jdGlvbiB3aWxsIGRvIG5vdGhpbmcuIElmIGFsbCB0YXBzIGFyZSByZW1vdmVkLCB0aGUgc291cmNlIGNoYW5uZWwgcmV2ZXJ0c1xuICogdG8gbm9ybWFsIChpLmUuLCBpdCBubyBsb25nZXIgaGFzIHRoZSB0YXBwaW5nIGNvZGUgYXBwbGllZCB0byBpdCBhbmQgY2FuIGJlXG4gKiB0YWtlbiBmcm9tIGFzIG5vcm1hbCkuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjaGFua28vb3BlcmF0aW9uc35PcGVyYXRpb25zXG4gKiBAcGFyYW0ge21vZHVsZTpjaGFua28vY2hhbm5lbH5DaGFubmVsfSBzcmMgVGhlIHRhcHBlZCBjaGFubmVsLlxuICogQHBhcmFtIHttb2R1bGU6Y2hhbmtvL2NoYW5uZWx+Q2hhbm5lbH0gZGVzdCBUaGUgY2hhbm5lbCB0aGF0IGlzIHRhcHBpbmcgdGhlXG4gKiAgICAgc291cmNlIGNoYW5uZWwgdGhhdCBzaG91bGQgbm8gbG9uZ2VyIGJlIHRhcHBpbmcgdGhlIHNvdXJjZSBjaGFubmVsLlxuICovXG5mdW5jdGlvbiB1bnRhcChzcmMsIGRzdCkge1xuICBjb25zdCB0YXBzID0gc3JjW1RBUFNdO1xuICBpZiAodGFwcykge1xuICAgIGNvbnN0IGluZGV4ID0gdGFwcy5pbmRleE9mKGRzdCk7XG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgdGFwcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgaWYgKHRhcHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHNlbmRBc3luYyhzcmMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZXMgYWxsIHRhcHMgZnJvbSBhIHNvdXJjZSBjaGFubmVsLlxuICpcbiAqIFRoZSBwcmV2aW91c2x5LXRhcHBlZCBjaGFubmVsIHJldmVydHMgdG8gYSBub3JtYWwgY2hhbm5lbCwgd2hpbGUgYW55IGNoYW5uZWxzXG4gKiB0aGF0IG1pZ2h0IGhhdmUgYmVlbiB0YXBwaW5nIGl0IG5vIGxvbmdlciByZWNlaXZlIHZhbHVlcyBmcm9tIHRoZSBzb3VyY2VcbiAqIGNoYW5uZWwuIElmIHRoZSBzb3VyY2UgY2hhbm5lbCBoYWQgbm8gdGFwcywgdGhpcyBmdW5jdGlvbiBkb2VzIG5vdGhpbmcuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjaGFua28vb3BlcmF0aW9uc35PcGVyYXRpb25zXG4gKiBAcGFyYW0ge21vZHVsZTpjaGFua28vY2hhbm5lbH5DaGFubmVsfSBzcmMgVGhlIHRhcHBlZCBjaGFubmVsLiBBbGwgdGFwcyB3aWxsXG4gKiAgICAgYmUgcmVtb3ZlZCBmcm9tIHRoaXMgY2hhbm5lbC5cbiAqL1xuZnVuY3Rpb24gdW50YXBBbGwoc3JjKSB7XG4gIGlmIChzcmNbVEFQU10pIHtcbiAgICBzcmNbVEFQU10gPSBbXTtcbiAgICBzZW5kQXN5bmMoc3JjKTtcbiAgfVxufVxuXG4vKipcbiAqIE1hcHMgdGhlIHZhbHVlcyBmcm9tIG9uZSBvciBtb3JlIHNvdXJjZSBjaGFubmVscyB0aHJvdWdoIGEgZnVuY3Rpb24sIHNlbmRpbmdcbiAqIHRoZSByZXN1bHRzIHRvIGEgbmV3IGNoYW5uZWwuXG4gKlxuICogVGhlIG1hcHBpbmcgZnVuY3Rpb24gaXMgZ2l2ZW4gb25lIHZhbHVlIGZyb20gZWFjaCBzb3VyY2UgY2hhbm5lbCwgYWZ0ZXIgYXRcbiAqIGxlYXN0IG9uZSB2YWx1ZSBiZWNvbWVzIGF2YWlsYWJsZSBvbiBldmVyeSBzb3VyY2UgY2hhbm5lbC4gVGhlIG91dHB1dCB2YWx1ZVxuICogZnJvbSB0aGUgZnVuY3Rpb24gaXMgdGhlbiBzZW50IHRvIHRoZSBkZXN0aW5hdGlvbiBjaGFubmVsLlxuICpcbiAqIFRoZSBkZXN0aW5hdGlvbiBjaGFubmVsIGlzIGNyZWF0ZWQgYnkgdGhlIGZ1bmN0aW9uIGJhc2VkIG9uIHRoZSBidWZmZXIgdmFsdWVcbiAqIHBhc3NlZCBhcyB0aGUgdGhpcmQgcGFyYW1ldGVyLiBJZiB0aGlzIGlzIG1pc3NpbmcsIGBudWxsYCwgb3IgYDBgLCB0aGVcbiAqIGRlc3RpbmF0aW9uIGNoYW5uZWwgd2lsbCBiZSB1bmJ1ZmZlcmVkLiBJZiBpdCdzIGEgcG9zaXRpdmUgaW50ZWdlciwgdGhlXG4gKiBkZXN0aW5hdGlvbiBjaGFubmVsIGlzIGJ1ZmZlcmVkIGJ5IGEgZml4ZWQgYnVmZmVyIG9mIHRoYXQgc2l6ZS4gSWYgdGhlXG4gKiBwYXJhbWV0ZXIgaXMgYSBidWZmZXIsIHRoZW4gdGhhdCBidWZmZXIgaXMgdXNlZCB0byBidWZmZXIgdGhlIGRlc3RpbmF0aW9uXG4gKiBjaGFubmVsLlxuICpcbiAqIE9uY2UgKmFueSogc291cmNlIGNoYW5uZWwgaXMgY2xvc2VkLCB0aGUgbWFwcGluZyBjZWFzZXMgYW5kIHRoZSBkZXN0aW5hdGlvblxuICogY2hhbm5lbCBpcyBhbHNvIGNsb3NlZC5cbiAqXG4gKiBUaGlzIGlzIG9idmlvdXNseSBzaW1pbGFyIHRvIGEgbWFwIHRyYW5zZHVjZXIsIGJ1dCB1bmxpa2UgYSB0cmFuc2R1Y2VyLCB0aGlzXG4gKiBmdW5jdGlvbiB3b3JrcyB3aXRoIG11bHRpcGxlIGlucHV0IGNoYW5uZWxzLiBUaGlzIGlzIHNvbWV0aGluZyB0aGF0IGFcbiAqIHRyYW5zZHVjZXIgb24gYSBzaW5nbGUgY2hhbm5lbCBpcyB1bmFibGUgdG8gZG8uXG4gKlxuICogYGBgXG4gKiBpbXBvcnQgeyBnbywgY2hhbiwgc2VuZCwgcmVjdiwgY2xvc2UsIGlzQ2xvc2VkIH0gZnJvbSBcIkBjaGFua28vY2hhbm5lbHNcIjtcbiAqIGltcG9ydCB7IG1hcCB9IGZyb20gXCJAY2hhbmtvL29wZXJhdGlvbnNcIlxuICpcbiAqIGNvbnN0IGlucHV0MSA9IGNoYW4oKTtcbiAqIGNvbnN0IGlucHV0MiA9IGNoYW4oKTtcbiAqIGNvbnN0IGlucHV0MyA9IGNoYW4oKTtcbiAqIGNvbnN0IG91dHB1dCA9IG1hcCgoeCwgeSwgeikgPT4geCArIHkgKyB6LCBbaW5wdXQxLCBpbnB1dDIsIGlucHV0M10pO1xuICpcbiAqIGdvKGFzeW5jICgpID0+IHtcbiAqICAgYXdhaXQgc2VuZChpbnB1dDEsIDEpO1xuICogICBhd2FpdCBzZW5kKGlucHV0MSwgMik7XG4gKiAgIGF3YWl0IHNlbmQoaW5wdXQxLCAzKTtcbiAqIH0pO1xuICpcbiAqIGdvKGFzeW5jICgpID0+IHtcbiAqICAgYXdhaXQgc2VuZChpbnB1dDIsIDEwKTtcbiAqICAgYXdhaXQgc2VuZChpbnB1dDIsIDIwKTtcbiAqICAgY2xvc2UoaW5wdXQyKTtcbiAqIH0pO1xuICpcbiAqIGdvKGFzeW5jICgpID0+IHtcbiAqICAgYXdhaXQgc2VuZChpbnB1dDMsIDEwMCk7XG4gKiAgIGF3YWl0IHNlbmQoaW5wdXQzLCAyMDApO1xuICogICBhd2FpdCBzZW5kKGlucHV0MywgMzAwKTtcbiAqIH0pO1xuICpcbiAqIGdvKGFzeW5jICgpID0+IHtcbiAqICAgY29uc29sZS5sb2coYXdhaXQgcmVjdihvdXRwdXQpKTsgICAgIC8vIC0+IDExMVxuICogICBjb25zb2xlLmxvZyhhd2FpdCByZWN2KG91dHB1dCkpOyAgICAgLy8gLT4gMjIyXG4gKiAgIC8vIE91dHB1dCBjbG9zZXMgbm93IGJlY2F1c2UgaW5wdXQyIGNsb3NlcyBhZnRlciAyIHZhbHVlc1xuICogICBjb25zb2xlLmxvZyhpc0Nsb3NlZChvdXRwdXQpKTsgICAgICAgLy8gLT4gdHJ1ZVxuICogfSk7XG4gKiBgYGBcbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNoYW5rby9vcGVyYXRpb25zfk9wZXJhdGlvbnNcbiAqIEBwYXJhbSB7bW9kdWxlOmNoYW5rby9vcGVyYXRpb25zfm1hcHBlcn0gZm4gVGhlIG1hcHBpbmcgZnVuY3Rpb24uIFRoaXMgc2hvdWxkXG4gKiAgICAgaGF2ZSBvbmUgcGFyYW1ldGVyIGZvciBlYWNoIHNvdXJjZSBjaGFubmVsIGFuZCByZXR1cm4gYSBzaW5nbGUgdmFsdWUuXG4gKiBAcGFyYW0ge21vZHVsZTpjaGFua28vY2hhbm5lbH5DaGFubmVsW119IHNyY3MgVGhlIHNvdXJjZSBjaGFubmVscy5cbiAqIEBwYXJhbSB7KG51bWJlcnxtb2R1bGU6Y2hhbmtvL2J1ZmZlcn5CdWZmZXIpfSBbYnVmZmVyPTBdIEEgYnVmZmVyIHVzZWQgdG9cbiAqICAgICBjcmVhdGUgdGhlIGRlc3RpbmF0aW9uIGNoYW5uZWwuIElmIHRoaXMgaXMgYSBudW1iZXIsIGFcbiAqICAgICB7QGxpbmsgbW9kdWxlOmNoYW5rby9idWZmZXJ+Rml4ZWRCdWZmZXJ9IG9mIHRoYXQgc2l6ZSB3aWxsIGJlIHVzZWQuIElmXG4gKiAgICAgdGhpcyBpcyBgMGAgb3Igbm90IHByZXNlbnQsIHRoZSBjaGFubmVsIHdpbGwgYmUgdW5idWZmZXJlZC5cbiAqIEByZXR1cm4ge21vZHVsZTpjaGFua28vY2hhbm5lbH5DaGFubmVsfSBUaGUgZGVzdGluYXRpb24gY2hhbm5lbC5cbiAqL1xuZnVuY3Rpb24gbWFwKGZuLCBzcmNzLCBidWZmZXIgPSAwKSB7XG4gIGNvbnN0IGRzdCA9IGNoYW4oYnVmZmVyKTtcbiAgY29uc3Qgc3JjbGVuID0gc3Jjcy5sZW5ndGg7XG4gIGNvbnN0IHZhbHVlcyA9IFtdO1xuICBjb25zdCBjYWxsYmFja3MgPSBbXTtcbiAgY29uc3QgdGVtcCA9IGNoYW4oKTtcbiAgbGV0IGNvdW50O1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3JjbGVuOyBpKyspIHtcbiAgICBjYWxsYmFja3NbaV0gPSAoaW5kZXggPT4ge1xuICAgICAgcmV0dXJuIHZhbHVlID0+IHtcbiAgICAgICAgdmFsdWVzW2luZGV4XSA9IHZhbHVlO1xuICAgICAgICBpZiAoLS1jb3VudCA9PT0gMCkge1xuICAgICAgICAgIHNlbmRBc3luYyh0ZW1wLCB2YWx1ZXMuc2xpY2UoKSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSkoaSk7XG4gIH1cblxuICBnbyhhc3luYyAoKSA9PiB7XG4gICAgZm9yICg7Oykge1xuICAgICAgY291bnQgPSBzcmNsZW47XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNyY2xlbjsgaSsrKSB7XG4gICAgICAgIHJlY3ZBc3luYyhzcmNzW2ldLCBjYWxsYmFja3NbaV0pO1xuICAgICAgfVxuICAgICAgY29uc3QgdmFsdWVzID0gYXdhaXQgcmVjdih0ZW1wKTtcbiAgICAgIGZvciAoY29uc3QgdmFsdWUgb2YgdmFsdWVzKSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gQ0xPU0VEKSB7XG4gICAgICAgICAgLy8gT25jZSBhIHNvdXJjZSBjbG9zZXMsIHdlIGNsb3NlIHRoZSBkZXN0aW5hdGlvbiBBTkQgdGhlIHJlc3Qgb2YgdGhlXG4gICAgICAgICAgLy8gc291cmNlcy4gT3RoZXJ3aXNlIHRoZSBzb3VyY2VzIHdpbGwgaGF2ZSBub3RoaW5nIHJlY2VpdmluZyBmcm9tXG4gICAgICAgICAgLy8gdGhlbSBhbmQgc2VuZHMgdG8gdGhlbSB3aWxsIGJsb2NrIGZvcmV2ZXIuIEJ5IGNsb3NpbmcgdGhlbSwgc2VuZHNcbiAgICAgICAgICAvLyB0byB0aGVtIHdpbGwgaW1tZWRpYXRlbHkgcmV0dXJuIGBmYWxzZWAgYW5kIG5vdCBibG9jay5cbiAgICAgICAgICBjbG9zZShkc3QpO1xuICAgICAgICAgIGZvciAoY29uc3Qgc3JjIG9mIHNyY3MpIHtcbiAgICAgICAgICAgIGNsb3NlKHNyYyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYXdhaXQgc2VuZChkc3QsIGZuKC4uLnZhbHVlcykpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGRzdDtcbn1cblxuZXhwb3J0IHsgcGlwZSwgcGFydGl0aW9uLCBtZXJnZSwgc3BsaXQsIHRhcCwgdW50YXAsIHVudGFwQWxsLCBtYXAgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=