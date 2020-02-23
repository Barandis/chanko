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
!(function(e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define([], t)
    : "object" == typeof exports
    ? (exports.chanko = t())
    : (e.chanko = t());
})(window, function() {
  return (function(e) {
    var t = {};
    function n(r) {
      if (t[r]) return t[r].exports;
      var o = (t[r] = { i: r, l: !1, exports: {} });
      return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
    }
    return (
      (n.m = e),
      (n.c = t),
      (n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
      }),
      (n.r = function(e) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (n.t = function(e, t) {
        if ((1 & t && (e = n(e)), 8 & t)) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (
          (n.r(r),
          Object.defineProperty(r, "default", { enumerable: !0, value: e }),
          2 & t && "string" != typeof e)
        )
          for (var o in e)
            n.d(
              r,
              o,
              function(t) {
                return e[t];
              }.bind(null, o)
            );
        return r;
      }),
      (n.n = function(e) {
        var t =
          e && e.__esModule
            ? function() {
                return e.default;
              }
            : function() {
                return e;
              };
        return n.d(t, "a", t), t;
      }),
      (n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (n.p = ""),
      n((n.s = 3))
    );
  })([
    function(e, t, n) {
      "use strict";
      (function(e) {
        n.d(t, "d", function() {
          return c;
        }),
          n.d(t, "b", function() {
            return o;
          }),
          n.d(t, "a", function() {
            return u;
          }),
          n.d(t, "c", function() {
            return i;
          });
        var r = n(1);
        const o = Symbol("SET_IMMEDIATE"),
          u = Symbol("MESSAGE_CHANNEL"),
          i = Symbol("SET_TIMEOUT"),
          c = (function() {
            const t = Object(r.d)();
            let n = 1024,
              c = o,
              s = m(c),
              a = !1,
              f = !0;
            function l() {
              (a = !0), (f = !1);
              let e = 0;
              for (;;) {
                const o = t.dequeue();
                if (o === r.a) break;
                if ((o(), e >= n)) break;
                e++;
              }
              (a = !1), t.empty || s();
            }
            function d(t) {
              switch (t) {
                case u:
                  return "undefined" != typeof MessageChannel ? u : i;
                case i:
                  return i;
                default:
                  return void 0 !== e
                    ? o
                    : "undefined" != typeof MessageChannel
                    ? u
                    : i;
              }
            }
            function m(t) {
              switch (d(t)) {
                case o:
                  return () => {
                    (f && a) || ((f = !0), e(l));
                  };
                case u: {
                  const e = new MessageChannel();
                  return (
                    (e.port1.onmessage = () => l()),
                    () => {
                      (f && a) || ((f = !0), e.port2.postMessage(0));
                    }
                  );
                }
                case i:
                  return () => {
                    (f && a) || ((f = !0), setTimeout(l, 0));
                  };
              }
            }
            return Object.freeze({
              get batchSize() {
                return n;
              },
              set batchSize(e) {
                n = e;
              },
              get dispatchMethod() {
                return c;
              },
              set dispatchMethod(e) {
                (c = d(e)), (s = m(c));
              },
              dispatch: function(e) {
                t.enqueue(e), s();
              }
            });
          })();
      }.call(this, n(4).setImmediate));
    },
    function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return r;
      }),
        n.d(t, "d", function() {
          return o;
        }),
        n.d(t, "c", function() {
          return u;
        }),
        n.d(t, "b", function() {
          return i;
        }),
        n.d(t, "e", function() {
          return c;
        });
      const r = Symbol("EMPTY");
      function o() {
        let e = [],
          t = 0;
        function n() {
          return e.length - t;
        }
        function o() {
          return 0 === e.length;
        }
        function u(t) {
          e.push(t);
        }
        function i() {
          if (o()) return r;
          const n = e[t];
          return 2 * ++t >= e.length && ((e = e.slice(t)), (t = 0)), n;
        }
        return Object.freeze({
          get count() {
            return n();
          },
          get empty() {
            return o();
          },
          enqueue: u,
          dequeue: i,
          peek: function() {
            return o() ? r : e[t];
          },
          filter: function(e) {
            for (let t = 0, r = n(); t < r; t++) {
              const t = i();
              e(t) && u(t);
            }
          }
        });
      }
      function u(e) {
        const t = o();
        return Object.freeze({
          queue: t,
          size: e,
          get full() {
            return t.count >= e;
          },
          get count() {
            return t.count;
          },
          add(...e) {
            for (const n of e) t.enqueue(n);
          },
          remove: () => t.dequeue()
        });
      }
      function i(e) {
        const t = o();
        return Object.freeze({
          queue: t,
          size: e,
          full: !1,
          get count() {
            return t.count;
          },
          add(...n) {
            for (const r of n) t.count < e && t.enqueue(r);
          },
          remove: () => t.dequeue()
        });
      }
      function c(e) {
        const t = o();
        return Object.freeze({
          queue: t,
          size: e,
          full: !1,
          get count() {
            return t.count;
          },
          add(...n) {
            for (const r of n) t.count === e && t.dequeue(), t.enqueue(r);
          },
          remove: () => t.dequeue()
        });
      }
    },
    function(e, t) {
      var n;
      n = (function() {
        return this;
      })();
      try {
        n = n || new Function("return this")();
      } catch (e) {
        "object" == typeof window && (n = window);
      }
      e.exports = n;
    },
    function(e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "configDispatcher", function() {
          return u;
        }),
        n.d(t, "buffers", function() {
          return i;
        });
      var r = n(1);
      n.d(t, "EMPTY", function() {
        return r.a;
      });
      var o = n(0);
      function u({ dispatchMethod: e = null, batchSize: t = null } = {}) {
        if (e) {
          if (![o.b, o.a, o.c].includes(e))
            throw Error("Non-existent dispatch method requested");
          o.d.dispatchMethod = e;
        }
        t && (o.d.batchSize = t);
      }
      n.d(t, "SET_IMMEDIATE", function() {
        return o.b;
      }),
        n.d(t, "MESSAGE_CHANNEL", function() {
          return o.a;
        }),
        n.d(t, "SET_TIMEOUT", function() {
          return o.c;
        });
      const i = { fixed: r.c, dropping: r.b, sliding: r.e };
    },
    function(e, t, n) {
      (function(e) {
        var r =
            (void 0 !== e && e) ||
            ("undefined" != typeof self && self) ||
            window,
          o = Function.prototype.apply;
        function u(e, t) {
          (this._id = e), (this._clearFn = t);
        }
        (t.setTimeout = function() {
          return new u(o.call(setTimeout, r, arguments), clearTimeout);
        }),
          (t.setInterval = function() {
            return new u(o.call(setInterval, r, arguments), clearInterval);
          }),
          (t.clearTimeout = t.clearInterval = function(e) {
            e && e.close();
          }),
          (u.prototype.unref = u.prototype.ref = function() {}),
          (u.prototype.close = function() {
            this._clearFn.call(r, this._id);
          }),
          (t.enroll = function(e, t) {
            clearTimeout(e._idleTimeoutId), (e._idleTimeout = t);
          }),
          (t.unenroll = function(e) {
            clearTimeout(e._idleTimeoutId), (e._idleTimeout = -1);
          }),
          (t._unrefActive = t.active = function(e) {
            clearTimeout(e._idleTimeoutId);
            var t = e._idleTimeout;
            t >= 0 &&
              (e._idleTimeoutId = setTimeout(function() {
                e._onTimeout && e._onTimeout();
              }, t));
          }),
          n(5),
          (t.setImmediate =
            ("undefined" != typeof self && self.setImmediate) ||
            (void 0 !== e && e.setImmediate) ||
            (this && this.setImmediate)),
          (t.clearImmediate =
            ("undefined" != typeof self && self.clearImmediate) ||
            (void 0 !== e && e.clearImmediate) ||
            (this && this.clearImmediate));
      }.call(this, n(2)));
    },
    function(e, t, n) {
      (function(e, t) {
        !(function(e, n) {
          "use strict";
          if (!e.setImmediate) {
            var r,
              o,
              u,
              i,
              c,
              s = 1,
              a = {},
              f = !1,
              l = e.document,
              d = Object.getPrototypeOf && Object.getPrototypeOf(e);
            (d = d && d.setTimeout ? d : e),
              "[object process]" === {}.toString.call(e.process)
                ? (r = function(e) {
                    t.nextTick(function() {
                      p(e);
                    });
                  })
                : !(function() {
                    if (e.postMessage && !e.importScripts) {
                      var t = !0,
                        n = e.onmessage;
                      return (
                        (e.onmessage = function() {
                          t = !1;
                        }),
                        e.postMessage("", "*"),
                        (e.onmessage = n),
                        t
                      );
                    }
                  })()
                ? e.MessageChannel
                  ? (((u = new MessageChannel()).port1.onmessage = function(e) {
                      p(e.data);
                    }),
                    (r = function(e) {
                      u.port2.postMessage(e);
                    }))
                  : l && "onreadystatechange" in l.createElement("script")
                  ? ((o = l.documentElement),
                    (r = function(e) {
                      var t = l.createElement("script");
                      (t.onreadystatechange = function() {
                        p(e),
                          (t.onreadystatechange = null),
                          o.removeChild(t),
                          (t = null);
                      }),
                        o.appendChild(t);
                    }))
                  : (r = function(e) {
                      setTimeout(p, 0, e);
                    })
                : ((i = "setImmediate$" + Math.random() + "$"),
                  (c = function(t) {
                    t.source === e &&
                      "string" == typeof t.data &&
                      0 === t.data.indexOf(i) &&
                      p(+t.data.slice(i.length));
                  }),
                  e.addEventListener
                    ? e.addEventListener("message", c, !1)
                    : e.attachEvent("onmessage", c),
                  (r = function(t) {
                    e.postMessage(i + t, "*");
                  })),
              (d.setImmediate = function(e) {
                "function" != typeof e && (e = new Function("" + e));
                for (
                  var t = new Array(arguments.length - 1), n = 0;
                  n < t.length;
                  n++
                )
                  t[n] = arguments[n + 1];
                var o = { callback: e, args: t };
                return (a[s] = o), r(s), s++;
              }),
              (d.clearImmediate = m);
          }
          function m(e) {
            delete a[e];
          }
          function p(e) {
            if (f) setTimeout(p, 0, e);
            else {
              var t = a[e];
              if (t) {
                f = !0;
                try {
                  !(function(e) {
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
                  })(t);
                } finally {
                  m(e), (f = !1);
                }
              }
            }
          }
        })("undefined" == typeof self ? (void 0 === e ? this : e) : self);
      }.call(this, n(2), n(6)));
    },
    function(e, t) {
      var n,
        r,
        o = (e.exports = {});
      function u() {
        throw new Error("setTimeout has not been defined");
      }
      function i() {
        throw new Error("clearTimeout has not been defined");
      }
      function c(e) {
        if (n === setTimeout) return setTimeout(e, 0);
        if ((n === u || !n) && setTimeout)
          return (n = setTimeout), setTimeout(e, 0);
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
      !(function() {
        try {
          n = "function" == typeof setTimeout ? setTimeout : u;
        } catch (e) {
          n = u;
        }
        try {
          r = "function" == typeof clearTimeout ? clearTimeout : i;
        } catch (e) {
          r = i;
        }
      })();
      var s,
        a = [],
        f = !1,
        l = -1;
      function d() {
        f &&
          s &&
          ((f = !1), s.length ? (a = s.concat(a)) : (l = -1), a.length && m());
      }
      function m() {
        if (!f) {
          var e = c(d);
          f = !0;
          for (var t = a.length; t; ) {
            for (s = a, a = []; ++l < t; ) s && s[l].run();
            (l = -1), (t = a.length);
          }
          (s = null),
            (f = !1),
            (function(e) {
              if (r === clearTimeout) return clearTimeout(e);
              if ((r === i || !r) && clearTimeout)
                return (r = clearTimeout), clearTimeout(e);
              try {
                r(e);
              } catch (t) {
                try {
                  return r.call(null, e);
                } catch (t) {
                  return r.call(this, e);
                }
              }
            })(e);
        }
      }
      function p(e, t) {
        (this.fun = e), (this.array = t);
      }
      function h() {}
      (o.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        a.push(new p(e, t)), 1 !== a.length || f || c(m);
      }),
        (p.prototype.run = function() {
          this.fun.apply(null, this.array);
        }),
        (o.title = "browser"),
        (o.browser = !0),
        (o.env = {}),
        (o.argv = []),
        (o.version = ""),
        (o.versions = {}),
        (o.on = h),
        (o.addListener = h),
        (o.once = h),
        (o.off = h),
        (o.removeListener = h),
        (o.removeAllListeners = h),
        (o.emit = h),
        (o.prependListener = h),
        (o.prependOnceListener = h),
        (o.listeners = function(e) {
          return [];
        }),
        (o.binding = function(e) {
          throw new Error("process.binding is not supported");
        }),
        (o.cwd = function() {
          return "/";
        }),
        (o.chdir = function(e) {
          throw new Error("process.chdir is not supported");
        }),
        (o.umask = function() {
          return 0;
        });
    }
  ]);
});
