;(() => {
  var t = {
      3099: t => {
        t.exports = function (t) {
          if ("function" != typeof t)
            throw TypeError(String(t) + " is not a function")
          return t
        }
      },
      9670: (t, e, r) => {
        var n = r(111)
        t.exports = function (t) {
          if (!n(t)) throw TypeError(String(t) + " is not an object")
          return t
        }
      },
      1318: (t, e, r) => {
        var n = r(5656),
          o = r(7466),
          a = r(1400),
          i = function (t) {
            return function (e, r, i) {
              var s,
                u = n(e),
                c = o(u.length),
                f = a(i, c)
              if (t && r != r) {
                for (; c > f; ) if ((s = u[f++]) != s) return !0
              } else
                for (; c > f; f++)
                  if ((t || f in u) && u[f] === r) return t || f || 0
              return !t && -1
            }
          }
        t.exports = { includes: i(!0), indexOf: i(!1) }
      },
      4326: t => {
        var e = {}.toString
        t.exports = function (t) {
          return e.call(t).slice(8, -1)
        }
      },
      648: (t, e, r) => {
        var n = r(1694),
          o = r(4326),
          a = r(5112)("toStringTag"),
          i =
            "Arguments" ==
            o(
              (function () {
                return arguments
              })()
            )
        t.exports = n
          ? o
          : function (t) {
              var e, r, n
              return void 0 === t
                ? "Undefined"
                : null === t
                ? "Null"
                : "string" ==
                  typeof (r = (function (t, e) {
                    try {
                      return t[e]
                    } catch (t) {}
                  })((e = Object(t)), a))
                ? r
                : i
                ? o(e)
                : "Object" == (n = o(e)) && "function" == typeof e.callee
                ? "Arguments"
                : n
            }
      },
      4092: (t, e, r) => {
        "use strict"
        var n = r(9670),
          o = r(3099)
        t.exports = function () {
          for (
            var t,
              e = n(this),
              r = o(e.delete),
              a = !0,
              i = 0,
              s = arguments.length;
            i < s;
            i++
          )
            (t = r.call(e, arguments[i])), (a = a && t)
          return !!a
        }
      },
      9920: (t, e, r) => {
        var n = r(6656),
          o = r(3887),
          a = r(1236),
          i = r(3070)
        t.exports = function (t, e) {
          for (var r = o(e), s = i.f, u = a.f, c = 0; c < r.length; c++) {
            var f = r[c]
            n(t, f) || s(t, f, u(e, f))
          }
        }
      },
      8880: (t, e, r) => {
        var n = r(9781),
          o = r(3070),
          a = r(9114)
        t.exports = n
          ? function (t, e, r) {
              return o.f(t, e, a(1, r))
            }
          : function (t, e, r) {
              return (t[e] = r), t
            }
      },
      9114: t => {
        t.exports = function (t, e) {
          return {
            enumerable: !(1 & t),
            configurable: !(2 & t),
            writable: !(4 & t),
            value: e,
          }
        }
      },
      9781: (t, e, r) => {
        var n = r(7293)
        t.exports = !n(function () {
          return (
            7 !=
            Object.defineProperty({}, 1, {
              get: function () {
                return 7
              },
            })[1]
          )
        })
      },
      317: (t, e, r) => {
        var n = r(7854),
          o = r(111),
          a = n.document,
          i = o(a) && o(a.createElement)
        t.exports = function (t) {
          return i ? a.createElement(t) : {}
        }
      },
      8113: (t, e, r) => {
        var n = r(5005)
        t.exports = n("navigator", "userAgent") || ""
      },
      7392: (t, e, r) => {
        var n,
          o,
          a = r(7854),
          i = r(8113),
          s = a.process,
          u = s && s.versions,
          c = u && u.v8
        c
          ? (o = (n = c.split("."))[0] < 4 ? 1 : n[0] + n[1])
          : i &&
            (!(n = i.match(/Edge\/(\d+)/)) || n[1] >= 74) &&
            (n = i.match(/Chrome\/(\d+)/)) &&
            (o = n[1]),
          (t.exports = o && +o)
      },
      748: t => {
        t.exports = [
          "constructor",
          "hasOwnProperty",
          "isPrototypeOf",
          "propertyIsEnumerable",
          "toLocaleString",
          "toString",
          "valueOf",
        ]
      },
      2109: (t, e, r) => {
        var n = r(7854),
          o = r(1236).f,
          a = r(8880),
          i = r(1320),
          s = r(3505),
          u = r(9920),
          c = r(4705)
        t.exports = function (t, e) {
          var r,
            f,
            p,
            l,
            v,
            d = t.target,
            h = t.global,
            g = t.stat
          if ((r = h ? n : g ? n[d] || s(d, {}) : (n[d] || {}).prototype))
            for (f in e) {
              if (
                ((l = e[f]),
                (p = t.noTargetGet ? (v = o(r, f)) && v.value : r[f]),
                !c(h ? f : d + (g ? "." : "#") + f, t.forced) && void 0 !== p)
              ) {
                if (typeof l === typeof p) continue
                u(l, p)
              }
              ;(t.sham || (p && p.sham)) && a(l, "sham", !0), i(r, f, l, t)
            }
        }
      },
      7293: t => {
        t.exports = function (t) {
          try {
            return !!t()
          } catch (t) {
            return !0
          }
        }
      },
      9974: (t, e, r) => {
        var n = r(3099)
        t.exports = function (t, e, r) {
          if ((n(t), void 0 === e)) return t
          switch (r) {
            case 0:
              return function () {
                return t.call(e)
              }
            case 1:
              return function (r) {
                return t.call(e, r)
              }
            case 2:
              return function (r, n) {
                return t.call(e, r, n)
              }
            case 3:
              return function (r, n, o) {
                return t.call(e, r, n, o)
              }
          }
          return function () {
            return t.apply(e, arguments)
          }
        }
      },
      5005: (t, e, r) => {
        var n = r(857),
          o = r(7854),
          a = function (t) {
            return "function" == typeof t ? t : void 0
          }
        t.exports = function (t, e) {
          return arguments.length < 2
            ? a(n[t]) || a(o[t])
            : (n[t] && n[t][e]) || (o[t] && o[t][e])
        }
      },
      1246: (t, e, r) => {
        var n = r(648),
          o = r(7497),
          a = r(5112)("iterator")
        t.exports = function (t) {
          if (void 0 != t) return t[a] || t["@@iterator"] || o[n(t)]
        }
      },
      8554: (t, e, r) => {
        var n = r(9670),
          o = r(1246)
        t.exports = function (t) {
          var e = o(t)
          if ("function" != typeof e)
            throw TypeError(String(t) + " is not iterable")
          return n(e.call(t))
        }
      },
      4647: (t, e, r) => {
        var n = r(1913),
          o = r(8554)
        t.exports = n
          ? o
          : function (t) {
              return Map.prototype.entries.call(t)
            }
      },
      7854: (t, e, r) => {
        var n = function (t) {
          return t && t.Math == Math && t
        }
        t.exports =
          n("object" == typeof globalThis && globalThis) ||
          n("object" == typeof window && window) ||
          n("object" == typeof self && self) ||
          n("object" == typeof r.g && r.g) ||
          (function () {
            return this
          })() ||
          Function("return this")()
      },
      6656: (t, e, r) => {
        var n = r(7908),
          o = {}.hasOwnProperty
        t.exports =
          Object.hasOwn ||
          function (t, e) {
            return o.call(n(t), e)
          }
      },
      3501: t => {
        t.exports = {}
      },
      4664: (t, e, r) => {
        var n = r(9781),
          o = r(7293),
          a = r(317)
        t.exports =
          !n &&
          !o(function () {
            return (
              7 !=
              Object.defineProperty(a("div"), "a", {
                get: function () {
                  return 7
                },
              }).a
            )
          })
      },
      8361: (t, e, r) => {
        var n = r(7293),
          o = r(4326),
          a = "".split
        t.exports = n(function () {
          return !Object("z").propertyIsEnumerable(0)
        })
          ? function (t) {
              return "String" == o(t) ? a.call(t, "") : Object(t)
            }
          : Object
      },
      2788: (t, e, r) => {
        var n = r(5465),
          o = Function.toString
        "function" != typeof n.inspectSource &&
          (n.inspectSource = function (t) {
            return o.call(t)
          }),
          (t.exports = n.inspectSource)
      },
      9909: (t, e, r) => {
        var n,
          o,
          a,
          i = r(8536),
          s = r(7854),
          u = r(111),
          c = r(8880),
          f = r(6656),
          p = r(5465),
          l = r(6200),
          v = r(3501),
          d = "Object already initialized",
          h = s.WeakMap
        if (i || p.state) {
          var g = p.state || (p.state = new h()),
            y = g.get,
            m = g.has,
            T = g.set
          ;(n = function (t, e) {
            if (m.call(g, t)) throw new TypeError(d)
            return (e.facade = t), T.call(g, t, e), e
          }),
            (o = function (t) {
              return y.call(g, t) || {}
            }),
            (a = function (t) {
              return m.call(g, t)
            })
        } else {
          var b = l("state")
          ;(v[b] = !0),
            (n = function (t, e) {
              if (f(t, b)) throw new TypeError(d)
              return (e.facade = t), c(t, b, e), e
            }),
            (o = function (t) {
              return f(t, b) ? t[b] : {}
            }),
            (a = function (t) {
              return f(t, b)
            })
        }
        t.exports = {
          set: n,
          get: o,
          has: a,
          enforce: function (t) {
            return a(t) ? o(t) : n(t, {})
          },
          getterFor: function (t) {
            return function (e) {
              var r
              if (!u(e) || (r = o(e)).type !== t)
                throw TypeError("Incompatible receiver, " + t + " required")
              return r
            }
          },
        }
      },
      7659: (t, e, r) => {
        var n = r(5112),
          o = r(7497),
          a = n("iterator"),
          i = Array.prototype
        t.exports = function (t) {
          return void 0 !== t && (o.Array === t || i[a] === t)
        }
      },
      4705: (t, e, r) => {
        var n = r(7293),
          o = /#|\.prototype\./,
          a = function (t, e) {
            var r = s[i(t)]
            return r == c || (r != u && ("function" == typeof e ? n(e) : !!e))
          },
          i = (a.normalize = function (t) {
            return String(t).replace(o, ".").toLowerCase()
          }),
          s = (a.data = {}),
          u = (a.NATIVE = "N"),
          c = (a.POLYFILL = "P")
        t.exports = a
      },
      111: t => {
        t.exports = function (t) {
          return "object" === typeof t ? null !== t : "function" === typeof t
        }
      },
      1913: t => {
        t.exports = !1
      },
      408: (t, e, r) => {
        var n = r(9670),
          o = r(7659),
          a = r(7466),
          i = r(9974),
          s = r(1246),
          u = r(9212),
          c = function (t, e) {
            ;(this.stopped = t), (this.result = e)
          }
        t.exports = function (t, e, r) {
          var f,
            p,
            l,
            v,
            d,
            h,
            g,
            y = r && r.that,
            m = !(!r || !r.AS_ENTRIES),
            T = !(!r || !r.IS_ITERATOR),
            b = !(!r || !r.INTERRUPTED),
            E = i(e, y, 1 + m + b),
            x = function (t) {
              return f && u(f), new c(!0, t)
            },
            w = function (t) {
              return m
                ? (n(t), b ? E(t[0], t[1], x) : E(t[0], t[1]))
                : b
                ? E(t, x)
                : E(t)
            }
          if (T) f = t
          else {
            if ("function" != typeof (p = s(t)))
              throw TypeError("Target is not iterable")
            if (o(p)) {
              for (l = 0, v = a(t.length); v > l; l++)
                if ((d = w(t[l])) && d instanceof c) return d
              return new c(!1)
            }
            f = p.call(t)
          }
          for (h = f.next; !(g = h.call(f)).done; ) {
            try {
              d = w(g.value)
            } catch (t) {
              throw (u(f), t)
            }
            if ("object" == typeof d && d && d instanceof c) return d
          }
          return new c(!1)
        }
      },
      9212: (t, e, r) => {
        var n = r(9670)
        t.exports = function (t) {
          var e = t.return
          if (void 0 !== e) return n(e.call(t)).value
        }
      },
      7497: t => {
        t.exports = {}
      },
      133: (t, e, r) => {
        var n = r(7392),
          o = r(7293)
        t.exports =
          !!Object.getOwnPropertySymbols &&
          !o(function () {
            var t = Symbol()
            return (
              !String(t) ||
              !(Object(t) instanceof Symbol) ||
              (!Symbol.sham && n && n < 41)
            )
          })
      },
      8536: (t, e, r) => {
        var n = r(7854),
          o = r(2788),
          a = n.WeakMap
        t.exports = "function" === typeof a && /native code/.test(o(a))
      },
      3070: (t, e, r) => {
        var n = r(9781),
          o = r(4664),
          a = r(9670),
          i = r(7593),
          s = Object.defineProperty
        e.f = n
          ? s
          : function (t, e, r) {
              if ((a(t), (e = i(e, !0)), a(r), o))
                try {
                  return s(t, e, r)
                } catch (t) {}
              if ("get" in r || "set" in r)
                throw TypeError("Accessors not supported")
              return "value" in r && (t[e] = r.value), t
            }
      },
      1236: (t, e, r) => {
        var n = r(9781),
          o = r(5296),
          a = r(9114),
          i = r(5656),
          s = r(7593),
          u = r(6656),
          c = r(4664),
          f = Object.getOwnPropertyDescriptor
        e.f = n
          ? f
          : function (t, e) {
              if (((t = i(t)), (e = s(e, !0)), c))
                try {
                  return f(t, e)
                } catch (t) {}
              if (u(t, e)) return a(!o.f.call(t, e), t[e])
            }
      },
      8006: (t, e, r) => {
        var n = r(6324),
          o = r(748).concat("length", "prototype")
        e.f =
          Object.getOwnPropertyNames ||
          function (t) {
            return n(t, o)
          }
      },
      5181: (t, e) => {
        e.f = Object.getOwnPropertySymbols
      },
      6324: (t, e, r) => {
        var n = r(6656),
          o = r(5656),
          a = r(1318).indexOf,
          i = r(3501)
        t.exports = function (t, e) {
          var r,
            s = o(t),
            u = 0,
            c = []
          for (r in s) !n(i, r) && n(s, r) && c.push(r)
          for (; e.length > u; ) n(s, (r = e[u++])) && (~a(c, r) || c.push(r))
          return c
        }
      },
      5296: (t, e) => {
        "use strict"
        var r = {}.propertyIsEnumerable,
          n = Object.getOwnPropertyDescriptor,
          o = n && !r.call({ 1: 2 }, 1)
        e.f = o
          ? function (t) {
              var e = n(this, t)
              return !!e && e.enumerable
            }
          : r
      },
      3887: (t, e, r) => {
        var n = r(5005),
          o = r(8006),
          a = r(5181),
          i = r(9670)
        t.exports =
          n("Reflect", "ownKeys") ||
          function (t) {
            var e = o.f(i(t)),
              r = a.f
            return r ? e.concat(r(t)) : e
          }
      },
      857: (t, e, r) => {
        var n = r(7854)
        t.exports = n
      },
      1320: (t, e, r) => {
        var n = r(7854),
          o = r(8880),
          a = r(6656),
          i = r(3505),
          s = r(2788),
          u = r(9909),
          c = u.get,
          f = u.enforce,
          p = String(String).split("String")
        ;(t.exports = function (t, e, r, s) {
          var u,
            c = !!s && !!s.unsafe,
            l = !!s && !!s.enumerable,
            v = !!s && !!s.noTargetGet
          "function" == typeof r &&
            ("string" != typeof e || a(r, "name") || o(r, "name", e),
            (u = f(r)).source ||
              (u.source = p.join("string" == typeof e ? e : ""))),
            t !== n
              ? (c ? !v && t[e] && (l = !0) : delete t[e],
                l ? (t[e] = r) : o(t, e, r))
              : l
              ? (t[e] = r)
              : i(e, r)
        })(Function.prototype, "toString", function () {
          return ("function" == typeof this && c(this).source) || s(this)
        })
      },
      4488: t => {
        t.exports = function (t) {
          if (void 0 == t) throw TypeError("Can't call method on " + t)
          return t
        }
      },
      6465: t => {
        t.exports = function (t, e) {
          return t === e || (t != t && e != e)
        }
      },
      3505: (t, e, r) => {
        var n = r(7854),
          o = r(8880)
        t.exports = function (t, e) {
          try {
            o(n, t, e)
          } catch (r) {
            n[t] = e
          }
          return e
        }
      },
      6200: (t, e, r) => {
        var n = r(2309),
          o = r(9711),
          a = n("keys")
        t.exports = function (t) {
          return a[t] || (a[t] = o(t))
        }
      },
      5465: (t, e, r) => {
        var n = r(7854),
          o = r(3505),
          a = "__core-js_shared__",
          i = n[a] || o(a, {})
        t.exports = i
      },
      2309: (t, e, r) => {
        var n = r(1913),
          o = r(5465)
        ;(t.exports = function (t, e) {
          return o[t] || (o[t] = void 0 !== e ? e : {})
        })("versions", []).push({
          version: "3.13.1",
          mode: n ? "pure" : "global",
          copyright: "Â© 2021 Denis Pushkarev (zloirock.ru)",
        })
      },
      6707: (t, e, r) => {
        var n = r(9670),
          o = r(3099),
          a = r(5112)("species")
        t.exports = function (t, e) {
          var r,
            i = n(t).constructor
          return void 0 === i || void 0 == (r = n(i)[a]) ? e : o(r)
        }
      },
      1400: (t, e, r) => {
        var n = r(9958),
          o = Math.max,
          a = Math.min
        t.exports = function (t, e) {
          var r = n(t)
          return r < 0 ? o(r + e, 0) : a(r, e)
        }
      },
      5656: (t, e, r) => {
        var n = r(8361),
          o = r(4488)
        t.exports = function (t) {
          return n(o(t))
        }
      },
      9958: t => {
        var e = Math.ceil,
          r = Math.floor
        t.exports = function (t) {
          return isNaN((t = +t)) ? 0 : (t > 0 ? r : e)(t)
        }
      },
      7466: (t, e, r) => {
        var n = r(9958),
          o = Math.min
        t.exports = function (t) {
          return t > 0 ? o(n(t), 9007199254740991) : 0
        }
      },
      7908: (t, e, r) => {
        var n = r(4488)
        t.exports = function (t) {
          return Object(n(t))
        }
      },
      7593: (t, e, r) => {
        var n = r(111)
        t.exports = function (t, e) {
          if (!n(t)) return t
          var r, o
          if (e && "function" == typeof (r = t.toString) && !n((o = r.call(t))))
            return o
          if ("function" == typeof (r = t.valueOf) && !n((o = r.call(t))))
            return o
          if (
            !e &&
            "function" == typeof (r = t.toString) &&
            !n((o = r.call(t)))
          )
            return o
          throw TypeError("Can't convert object to primitive value")
        }
      },
      1694: (t, e, r) => {
        var n = {}
        ;(n[r(5112)("toStringTag")] = "z"),
          (t.exports = "[object z]" === String(n))
      },
      9711: t => {
        var e = 0,
          r = Math.random()
        t.exports = function (t) {
          return (
            "Symbol(" +
            String(void 0 === t ? "" : t) +
            ")_" +
            (++e + r).toString(36)
          )
        }
      },
      3307: (t, e, r) => {
        var n = r(133)
        t.exports = n && !Symbol.sham && "symbol" == typeof Symbol.iterator
      },
      5112: (t, e, r) => {
        var n = r(7854),
          o = r(2309),
          a = r(6656),
          i = r(9711),
          s = r(133),
          u = r(3307),
          c = o("wks"),
          f = n.Symbol,
          p = u ? f : (f && f.withoutSetter) || i
        t.exports = function (t) {
          return (
            (a(c, t) && (s || "string" == typeof c[t])) ||
              (s && a(f, t) ? (c[t] = f[t]) : (c[t] = p("Symbol." + t))),
            c[t]
          )
        }
      },
      72: (t, e, r) => {
        "use strict"
        var n = r(2109),
          o = r(1913),
          a = r(4092)
        n(
          { target: "Map", proto: !0, real: !0, forced: o },
          {
            deleteAll: function () {
              return a.apply(this, arguments)
            },
          }
        )
      },
      9137: (t, e, r) => {
        "use strict"
        var n = r(2109),
          o = r(1913),
          a = r(9670),
          i = r(9974),
          s = r(4647),
          u = r(408)
        n(
          { target: "Map", proto: !0, real: !0, forced: o },
          {
            every: function (t) {
              var e = a(this),
                r = s(e),
                n = i(t, arguments.length > 1 ? arguments[1] : void 0, 3)
              return !u(
                r,
                function (t, r, o) {
                  if (!n(r, t, e)) return o()
                },
                { AS_ENTRIES: !0, IS_ITERATOR: !0, INTERRUPTED: !0 }
              ).stopped
            },
          }
        )
      },
      1957: (t, e, r) => {
        "use strict"
        var n = r(2109),
          o = r(1913),
          a = r(5005),
          i = r(9670),
          s = r(3099),
          u = r(9974),
          c = r(6707),
          f = r(4647),
          p = r(408)
        n(
          { target: "Map", proto: !0, real: !0, forced: o },
          {
            filter: function (t) {
              var e = i(this),
                r = f(e),
                n = u(t, arguments.length > 1 ? arguments[1] : void 0, 3),
                o = new (c(e, a("Map")))(),
                l = s(o.set)
              return (
                p(
                  r,
                  function (t, r) {
                    n(r, t, e) && l.call(o, t, r)
                  },
                  { AS_ENTRIES: !0, IS_ITERATOR: !0 }
                ),
                o
              )
            },
          }
        )
      },
      103: (t, e, r) => {
        "use strict"
        var n = r(2109),
          o = r(1913),
          a = r(9670),
          i = r(9974),
          s = r(4647),
          u = r(408)
        n(
          { target: "Map", proto: !0, real: !0, forced: o },
          {
            findKey: function (t) {
              var e = a(this),
                r = s(e),
                n = i(t, arguments.length > 1 ? arguments[1] : void 0, 3)
              return u(
                r,
                function (t, r, o) {
                  if (n(r, t, e)) return o(t)
                },
                { AS_ENTRIES: !0, IS_ITERATOR: !0, INTERRUPTED: !0 }
              ).result
            },
          }
        )
      },
      6306: (t, e, r) => {
        "use strict"
        var n = r(2109),
          o = r(1913),
          a = r(9670),
          i = r(9974),
          s = r(4647),
          u = r(408)
        n(
          { target: "Map", proto: !0, real: !0, forced: o },
          {
            find: function (t) {
              var e = a(this),
                r = s(e),
                n = i(t, arguments.length > 1 ? arguments[1] : void 0, 3)
              return u(
                r,
                function (t, r, o) {
                  if (n(r, t, e)) return o(r)
                },
                { AS_ENTRIES: !0, IS_ITERATOR: !0, INTERRUPTED: !0 }
              ).result
            },
          }
        )
      },
      4592: (t, e, r) => {
        "use strict"
        var n = r(2109),
          o = r(1913),
          a = r(9670),
          i = r(4647),
          s = r(6465),
          u = r(408)
        n(
          { target: "Map", proto: !0, real: !0, forced: o },
          {
            includes: function (t) {
              return u(
                i(a(this)),
                function (e, r, n) {
                  if (s(r, t)) return n()
                },
                { AS_ENTRIES: !0, IS_ITERATOR: !0, INTERRUPTED: !0 }
              ).stopped
            },
          }
        )
      },
      8276: (t, e, r) => {
        "use strict"
        var n = r(2109),
          o = r(1913),
          a = r(9670),
          i = r(4647),
          s = r(408)
        n(
          { target: "Map", proto: !0, real: !0, forced: o },
          {
            keyOf: function (t) {
              return s(
                i(a(this)),
                function (e, r, n) {
                  if (r === t) return n(e)
                },
                { AS_ENTRIES: !0, IS_ITERATOR: !0, INTERRUPTED: !0 }
              ).result
            },
          }
        )
      },
      5082: (t, e, r) => {
        "use strict"
        var n = r(2109),
          o = r(1913),
          a = r(5005),
          i = r(9670),
          s = r(3099),
          u = r(9974),
          c = r(6707),
          f = r(4647),
          p = r(408)
        n(
          { target: "Map", proto: !0, real: !0, forced: o },
          {
            mapKeys: function (t) {
              var e = i(this),
                r = f(e),
                n = u(t, arguments.length > 1 ? arguments[1] : void 0, 3),
                o = new (c(e, a("Map")))(),
                l = s(o.set)
              return (
                p(
                  r,
                  function (t, r) {
                    l.call(o, n(r, t, e), r)
                  },
                  { AS_ENTRIES: !0, IS_ITERATOR: !0 }
                ),
                o
              )
            },
          }
        )
      },
      2813: (t, e, r) => {
        "use strict"
        var n = r(2109),
          o = r(1913),
          a = r(5005),
          i = r(9670),
          s = r(3099),
          u = r(9974),
          c = r(6707),
          f = r(4647),
          p = r(408)
        n(
          { target: "Map", proto: !0, real: !0, forced: o },
          {
            mapValues: function (t) {
              var e = i(this),
                r = f(e),
                n = u(t, arguments.length > 1 ? arguments[1] : void 0, 3),
                o = new (c(e, a("Map")))(),
                l = s(o.set)
              return (
                p(
                  r,
                  function (t, r) {
                    l.call(o, t, n(r, t, e))
                  },
                  { AS_ENTRIES: !0, IS_ITERATOR: !0 }
                ),
                o
              )
            },
          }
        )
      },
      8222: (t, e, r) => {
        "use strict"
        var n = r(2109),
          o = r(1913),
          a = r(9670),
          i = r(3099),
          s = r(408)
        n(
          { target: "Map", proto: !0, real: !0, forced: o },
          {
            merge: function (t) {
              for (var e = a(this), r = i(e.set), n = 0; n < arguments.length; )
                s(arguments[n++], r, { that: e, AS_ENTRIES: !0 })
              return e
            },
          }
        )
      },
      8563: (t, e, r) => {
        "use strict"
        var n = r(2109),
          o = r(1913),
          a = r(9670),
          i = r(3099),
          s = r(4647),
          u = r(408)
        n(
          { target: "Map", proto: !0, real: !0, forced: o },
          {
            reduce: function (t) {
              var e = a(this),
                r = s(e),
                n = arguments.length < 2,
                o = n ? void 0 : arguments[1]
              if (
                (i(t),
                u(
                  r,
                  function (r, a) {
                    n ? ((n = !1), (o = a)) : (o = t(o, a, r, e))
                  },
                  { AS_ENTRIES: !0, IS_ITERATOR: !0 }
                ),
                n)
              )
                throw TypeError("Reduce of empty map with no initial value")
              return o
            },
          }
        )
      },
      336: (t, e, r) => {
        "use strict"
        var n = r(2109),
          o = r(1913),
          a = r(9670),
          i = r(9974),
          s = r(4647),
          u = r(408)
        n(
          { target: "Map", proto: !0, real: !0, forced: o },
          {
            some: function (t) {
              var e = a(this),
                r = s(e),
                n = i(t, arguments.length > 1 ? arguments[1] : void 0, 3)
              return u(
                r,
                function (t, r, o) {
                  if (n(r, t, e)) return o()
                },
                { AS_ENTRIES: !0, IS_ITERATOR: !0, INTERRUPTED: !0 }
              ).stopped
            },
          }
        )
      },
      7512: (t, e, r) => {
        "use strict"
        var n = r(2109),
          o = r(1913),
          a = r(9670),
          i = r(3099)
        n(
          { target: "Map", proto: !0, real: !0, forced: o },
          {
            update: function (t, e) {
              var r = a(this),
                n = arguments.length
              i(e)
              var o = r.has(t)
              if (!o && n < 3) throw TypeError("Updating absent value")
              var s = o ? r.get(t) : i(n > 2 ? arguments[2] : void 0)(t, r)
              return r.set(t, e(s, t, r)), r
            },
          }
        )
      },
    },
    e = {}
  function r(n) {
    var o = e[n]
    if (void 0 !== o) return o.exports
    var a = (e[n] = { exports: {} })
    return t[n](a, a.exports, r), a.exports
  }
  ;(r.g = (function () {
    if ("object" === typeof globalThis) return globalThis
    try {
      return this || new Function("return this")()
    } catch (t) {
      if ("object" === typeof window) return window
    }
  })()),
    (() => {
      "use strict"
      r(72),
        r(9137),
        r(1957),
        r(6306),
        r(103),
        r(4592),
        r(8276),
        r(5082),
        r(2813),
        r(8222),
        r(8563),
        r(336),
        r(7512)
      const t = [
          "currentTime",
          "playbackRate",
          "volume",
          "muted",
          "autoplay",
          "preload",
          "loop",
          "controls",
          "poster",
          "primaryColor",
          "letterboxColor",
          "defaultTextTrack",
          "__unstableTextTrackLabels",
          "title",
          "logo",
          "shareLink",
          "channelLink",
        ],
        e = [
          "duration",
          "ended",
          "paused",
          "played",
          "buffered",
          "videoHeight",
          "videoWidth",
          "seeking",
        ]
      function n(t, e) {
        const r = t[e]
        return void 0 !== r && "true" === r.toLowerCase()
      }
      class o {
        constructor(t) {
          this.ranges = t
        }
        get length() {
          return this.ranges.length
        }
        start(t) {
          const e = this.ranges[t]
          if (!e)
            throw new Error(
              `Failed to execute 'start' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`
            )
          return e.start
        }
        end(t) {
          const e = this.ranges[t]
          if (!e)
            throw new Error(
              `Failed to execute 'end' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`
            )
          return e.end
        }
      }
      window.Stream = function (r) {
        let a = !1
        const i = [],
          s = [],
          u = (function (t) {
            const e = document.createElement("a")
            e.href = t
            const { origin: r, pathname: n, search: o } = e
            return { origin: r, pathname: n, search: o }
          })(r.src),
          c =
            "" === (f = u.search)
              ? {}
              : f
                  .replace(/\?/, "")
                  .split("&")
                  .reduce((t, e) => {
                    const [r, n] = e.split("=")
                    return "" === r
                      ? t
                      : void 0 === n || "true" === n.toLowerCase()
                      ? { ...t, [r]: "true" }
                      : "false" === n.toLowerCase()
                      ? { ...t, [r]: "false" }
                      : { ...t, [r]: n }
                  }, {})
        var f
        const p = {
            src: u.pathname.replace("/", ""),
            muted: n(c, "muted"),
            autoplay: n(c, "autoplay"),
            controls: void 0 === c.controls || n(c, "controls"),
            loop: n(c, "loop"),
            preload: n(c, "preload") ? "auto" : "none",
            paused: !n(c, "autoplay"),
            ended: !1,
            poster: c.poster || "",
            currentTime: 0,
            duration: 0,
            volume: 1,
            playbackRate: 1,
            played: new o([]),
            buffered: new o([]),
            videoHeight: 0,
            videoWidth: 0,
            seeking: !1,
            logo: "",
            title: "",
            channelLink: "",
            shareLink: "",
          },
          l = {}
        let v = 0
        const d = new Map(),
          h = () => {
            y({ __privateUnstableMessageType: "closeContextMenu" })
          },
          g = t => {
            if (t.source !== r.contentWindow) return
            const e = t.data
            switch (e.__privateUnstableMessageType) {
              case "playSuccess":
                const t = d.get(e.promiseId)
                t && (t.resolve(), d.delete(e.promiseId))
                break
              case "playFailure":
                const r = d.get(e.promiseId)
                r && (r.reject(), d.delete(e.promiseId))
                break
              case "event":
                const n = l[e.eventName]
                n && n.forEach(t => t(new CustomEvent(e.eventName)))
                break
              case "playedTimeRangesUpdate":
                p.played = new o(e.timeRanges)
                break
              case "bufferedTimeRangesUpdate":
                p.buffered = new o(e.timeRanges)
                break
              case "propertyChange":
                p[e.property] = e.value
                break
              case "metrics":
                s.forEach(t => t(e.metrics))
                break
              case "iframeReady":
                a = !0
                const u = ["playCommand", "pauseCommand"]
                ;[
                  ...i.filter(t => !u.includes(t.__privateUnstableMessageType)),
                  ...i.filter(t => u.includes(t.__privateUnstableMessageType)),
                ].forEach(t => y(t)),
                  (i.length = 0)
            }
          },
          y = t => {
            a ? r.contentWindow?.postMessage(t, r.src) : i.push(t)
          }
        window.addEventListener("message", g),
          window.addEventListener("click", h)
        const m = {
          play: () =>
            new Promise((t, e) => {
              const r = ++v
              d.set(r, { resolve: t, reject: e }),
                y({ __privateUnstableMessageType: "playCommand", promiseId: r })
            }),
          pause: () => {
            y({ __privateUnstableMessageType: "pauseCommand" })
          },
          hookBeacon: t => {
            s.push(t)
          },
          addEventListener: (t, e) => {
            const r = l[t] || []
            l[t] = [...r, e]
          },
          removeEventListener: (t, e) => {
            const r = l[t] || []
            l[t] = r.filter(t => t !== e)
          },
          destroy: () => {
            window.removeEventListener("message", g),
              window.removeEventListener("click", h)
          },
        }
        return (
          t.forEach(t => {
            Object.defineProperty(m, t, {
              get: () => p[t],
              set: e => {
                ;(p[t] = e),
                  y({
                    __privateUnstableMessageType: "setProperty",
                    property: t,
                    value: e,
                  })
              },
            })
          }),
          e.forEach(t => {
            Object.defineProperty(m, t, { get: () => p[t] })
          }),
          Object.defineProperty(m, "src", {
            get: () => p.src,
            set: t => {
              ;(p.src = t),
                y({
                  __privateUnstableMessageType: "attributeChange",
                  attribute: "src",
                  value: t,
                })
            },
          }),
          m
        )
      }
    })()
})()
