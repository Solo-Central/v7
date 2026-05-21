! function(t) {
    var e = {};

    function n(r) {
        if (e[r]) return e[r].exports;
        var i = e[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }
    n.m = t, n.c = e, n.d = function(t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: r
        })
    }, n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, n.t = function(t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var i in t) n.d(r, i, function(e) {
                return t[e]
            }.bind(null, i));
        return r
    }, n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "", n(n.s = 125)
}([function(t, e) {
    function n(e) {
        return t.exports = n = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }, n(e)
    }
    t.exports = n
}, function(t, e, n) {
    var r = n(17),
        i = n(7);
    t.exports = function(t, e) {
        return !e || "object" !== r(e) && "function" != typeof e ? i(t) : e
    }
}, function(t, e) {
    t.exports = function(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
}, function(t, e, n) {
    var r = n(128);
    t.exports = function(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }), e && r(t, e)
    }
}, function(t, e) {
    function n(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }
    t.exports = function(t, e, r) {
        return e && n(t.prototype, e), r && n(t, r), t
    }
}, function(t, e, n) {
    var r = n(141);

    function i(e, n, o) {
        return "undefined" != typeof Reflect && Reflect.get ? t.exports = i = Reflect.get : t.exports = i = function(t, e, n) {
            var i = r(t, e);
            if (i) {
                var o = Object.getOwnPropertyDescriptor(i, e);
                return o.get ? o.get.call(n) : o.value
            }
        }, i(e, n, o || e)
    }
    t.exports = i
}, function(t, e, n) {
    var r = n(162),
        i = n(163),
        o = n(164);
    t.exports = function(t) {
        return r(t) || i(t) || o()
    }
}, function(t, e) {
    t.exports = function(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }
}, function(t, e, n) {
    var r = n(127);
    t.exports = function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {},
                i = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
                return Object.getOwnPropertyDescriptor(n, t).enumerable
            }))), i.forEach(function(e) {
                r(t, e, n[e])
            })
        }
        return t
    }
}, function(t, e, n) {
    var r, i, o;
    ! function(n) {
        var a = /iPhone/i,
            s = /iPod/i,
            A = /iPad/i,
            h = /\bAndroid(?:.+)Mobile\b/i,
            c = /Android/i,
            u = /\bAndroid(?:.+)SD4930UR\b/i,
            l = /\bAndroid(?:.+)(?:KF[A-Z]{2,4})\b/i,
            d = /Windows Phone/i,
            p = /\bWindows(?:.+)ARM\b/i,
            f = /BlackBerry/i,
            y = /BB10/i,
            x = /Opera Mini/i,
            m = /\b(CriOS|Chrome)(?:.+)Mobile/i,
            g = /Mobile(?:.+)Firefox\b/i;

        function w(t, e) {
            return t.test(e)
        }

        function v(t) {
            var e = t || ("undefined" != typeof navigator ? navigator.userAgent : ""),
                n = e.split("[FBAN");
            void 0 !== n[1] && (e = n[0]), void 0 !== (n = e.split("Twitter"))[1] && (e = n[0]);
            var r = {
                apple: {
                    phone: w(a, e) && !w(d, e),
                    ipod: w(s, e),
                    tablet: !w(a, e) && w(A, e) && !w(d, e),
                    device: (w(a, e) || w(s, e) || w(A, e)) && !w(d, e)
                },
                amazon: {
                    phone: w(u, e),
                    tablet: !w(u, e) && w(l, e),
                    device: w(u, e) || w(l, e)
                },
                android: {
                    phone: !w(d, e) && w(u, e) || !w(d, e) && w(h, e),
                    tablet: !w(d, e) && !w(u, e) && !w(h, e) && (w(l, e) || w(c, e)),
                    device: !w(d, e) && (w(u, e) || w(l, e) || w(h, e) || w(c, e)) || w(/\bokhttp\b/i, e)
                },
                windows: {
                    phone: w(d, e),
                    tablet: w(p, e),
                    device: w(d, e) || w(p, e)
                },
                other: {
                    blackberry: w(f, e),
                    blackberry10: w(y, e),
                    opera: w(x, e),
                    firefox: w(g, e),
                    chrome: w(m, e),
                    device: w(f, e) || w(y, e) || w(x, e) || w(g, e) || w(m, e)
                }
            };
            return r.any = r.apple.device || r.android.device || r.windows.device || r.other.device, r.phone = r.apple.phone || r.android.phone || r.windows.phone, r.tablet = r.apple.tablet || r.android.tablet || r.windows.tablet, r
        }
        t.exports && "undefined" == typeof window ? t.exports = v : t.exports && "undefined" != typeof window ? (t.exports = v(), t.exports.isMobile = v) : (i = [], r = n.isMobile = v(), void 0 === (o = "function" == typeof r ? r.apply(e, i) : r) || (t.exports = o))
    }(this)
}, function(t, e, n) {
    t.exports = n(126)
}, function(t, e) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (t) {
        "object" == typeof window && (n = window)
    }
    t.exports = n
}, function(t, e, n) {
    "use strict";
    var r = n(133),
        i = n(135);

    function o() {
        this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null
    }
    e.parse = g, e.resolve = function(t, e) {
        return g(t, !1, !0).resolve(e)
    }, e.resolveObject = function(t, e) {
        return t ? g(t, !1, !0).resolveObject(e) : e
    }, e.format = function(t) {
        i.isString(t) && (t = g(t));
        return t instanceof o ? t.format() : o.prototype.format.call(t)
    }, e.Url = o;
    var a = /^([a-z0-9.+-]+:)/i,
        s = /:[0-9]*$/,
        A = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
        h = ["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "\t"]),
        c = ["'"].concat(h),
        u = ["%", "/", "?", ";", "#"].concat(c),
        l = ["/", "?", "#"],
        d = /^[+a-z0-9A-Z_-]{0,63}$/,
        p = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
        f = {
            javascript: !0,
            "javascript:": !0
        },
        y = {
            javascript: !0,
            "javascript:": !0
        },
        x = {
            http: !0,
            https: !0,
            ftp: !0,
            gopher: !0,
            file: !0,
            "http:": !0,
            "https:": !0,
            "ftp:": !0,
            "gopher:": !0,
            "file:": !0
        },
        m = n(136);

    function g(t, e, n) {
        if (t && i.isObject(t) && t instanceof o) return t;
        var r = new o;
        return r.parse(t, e, n), r
    }
    o.prototype.parse = function(t, e, n) {
        if (!i.isString(t)) throw new TypeError("Parameter 'url' must be a string, not " + typeof t);
        var o = t.indexOf("?"),
            s = -1 !== o && o < t.indexOf("#") ? "?" : "#",
            h = t.split(s);
        h[0] = h[0].replace(/\\/g, "/");
        var g = t = h.join(s);
        if (g = g.trim(), !n && 1 === t.split("#").length) {
            var w = A.exec(g);
            if (w) return this.path = g, this.href = g, this.pathname = w[1], w[2] ? (this.search = w[2], this.query = e ? m.parse(this.search.substr(1)) : this.search.substr(1)) : e && (this.search = "", this.query = {}), this
        }
        var v = a.exec(g);
        if (v) {
            var b = (v = v[0]).toLowerCase();
            this.protocol = b, g = g.substr(v.length)
        }
        if (n || v || g.match(/^\/\/[^@\/]+@[^@\/]+/)) {
            var _ = "//" === g.substr(0, 2);
            !_ || v && y[v] || (g = g.substr(2), this.slashes = !0)
        }
        if (!y[v] && (_ || v && !x[v])) {
            for (var S, E, C = -1, T = 0; T < l.length; T++) {
                -1 !== (k = g.indexOf(l[T])) && (-1 === C || k < C) && (C = k)
            } - 1 !== (E = -1 === C ? g.lastIndexOf("@") : g.lastIndexOf("@", C)) && (S = g.slice(0, E), g = g.slice(E + 1), this.auth = decodeURIComponent(S)), C = -1;
            for (T = 0; T < u.length; T++) {
                var k; - 1 !== (k = g.indexOf(u[T])) && (-1 === C || k < C) && (C = k)
            } - 1 === C && (C = g.length), this.host = g.slice(0, C), g = g.slice(C), this.parseHost(), this.hostname = this.hostname || "";
            var I = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
            if (!I)
                for (var D = this.hostname.split(/\./), P = (T = 0, D.length); T < P; T++) {
                    var R = D[T];
                    if (R && !R.match(d)) {
                        for (var B = "", M = 0, O = R.length; M < O; M++) R.charCodeAt(M) > 127 ? B += "x" : B += R[M];
                        if (!B.match(d)) {
                            var L = D.slice(0, T),
                                H = D.slice(T + 1),
                                z = R.match(p);
                            z && (L.push(z[1]), H.unshift(z[2])), H.length && (g = "/" + H.join(".") + g), this.hostname = L.join(".");
                            break
                        }
                    }
                }
            this.hostname.length > 255 ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), I || (this.hostname = r.toASCII(this.hostname));
            var F = this.port ? ":" + this.port : "",
                N = this.hostname || "";
            this.host = N + F, this.href += this.host, I && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== g[0] && (g = "/" + g))
        }
        if (!f[b])
            for (T = 0, P = c.length; T < P; T++) {
                var U = c[T];
                if (-1 !== g.indexOf(U)) {
                    var Q = encodeURIComponent(U);
                    Q === U && (Q = escape(U)), g = g.split(U).join(Q)
                }
            }
        var j = g.indexOf("#"); - 1 !== j && (this.hash = g.substr(j), g = g.slice(0, j));
        var X = g.indexOf("?");
        if (-1 !== X ? (this.search = g.substr(X), this.query = g.substr(X + 1), e && (this.query = m.parse(this.query)), g = g.slice(0, X)) : e && (this.search = "", this.query = {}), g && (this.pathname = g), x[b] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
            F = this.pathname || "";
            var G = this.search || "";
            this.path = F + G
        }
        return this.href = this.format(), this
    }, o.prototype.format = function() {
        var t = this.auth || "";
        t && (t = (t = encodeURIComponent(t)).replace(/%3A/i, ":"), t += "@");
        var e = this.protocol || "",
            n = this.pathname || "",
            r = this.hash || "",
            o = !1,
            a = "";
        this.host ? o = t + this.host : this.hostname && (o = t + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), this.port && (o += ":" + this.port)), this.query && i.isObject(this.query) && Object.keys(this.query).length && (a = m.stringify(this.query));
        var s = this.search || a && "?" + a || "";
        return e && ":" !== e.substr(-1) && (e += ":"), this.slashes || (!e || x[e]) && !1 !== o ? (o = "//" + (o || ""), n && "/" !== n.charAt(0) && (n = "/" + n)) : o || (o = ""), r && "#" !== r.charAt(0) && (r = "#" + r), s && "?" !== s.charAt(0) && (s = "?" + s), e + o + (n = n.replace(/[?#]/g, function(t) {
            return encodeURIComponent(t)
        })) + (s = s.replace("#", "%23")) + r
    }, o.prototype.resolve = function(t) {
        return this.resolveObject(g(t, !1, !0)).format()
    }, o.prototype.resolveObject = function(t) {
        if (i.isString(t)) {
            var e = new o;
            e.parse(t, !1, !0), t = e
        }
        for (var n = new o, r = Object.keys(this), a = 0; a < r.length; a++) {
            var s = r[a];
            n[s] = this[s]
        }
        if (n.hash = t.hash, "" === t.href) return n.href = n.format(), n;
        if (t.slashes && !t.protocol) {
            for (var A = Object.keys(t), h = 0; h < A.length; h++) {
                var c = A[h];
                "protocol" !== c && (n[c] = t[c])
            }
            return x[n.protocol] && n.hostname && !n.pathname && (n.path = n.pathname = "/"), n.href = n.format(), n
        }
        if (t.protocol && t.protocol !== n.protocol) {
            if (!x[t.protocol]) {
                for (var u = Object.keys(t), l = 0; l < u.length; l++) {
                    var d = u[l];
                    n[d] = t[d]
                }
                return n.href = n.format(), n
            }
            if (n.protocol = t.protocol, t.host || y[t.protocol]) n.pathname = t.pathname;
            else {
                for (var p = (t.pathname || "").split("/"); p.length && !(t.host = p.shift()););
                t.host || (t.host = ""), t.hostname || (t.hostname = ""), "" !== p[0] && p.unshift(""), p.length < 2 && p.unshift(""), n.pathname = p.join("/")
            }
            if (n.search = t.search, n.query = t.query, n.host = t.host || "", n.auth = t.auth, n.hostname = t.hostname || t.host, n.port = t.port, n.pathname || n.search) {
                var f = n.pathname || "",
                    m = n.search || "";
                n.path = f + m
            }
            return n.slashes = n.slashes || t.slashes, n.href = n.format(), n
        }
        var g = n.pathname && "/" === n.pathname.charAt(0),
            w = t.host || t.pathname && "/" === t.pathname.charAt(0),
            v = w || g || n.host && t.pathname,
            b = v,
            _ = n.pathname && n.pathname.split("/") || [],
            S = (p = t.pathname && t.pathname.split("/") || [], n.protocol && !x[n.protocol]);
        if (S && (n.hostname = "", n.port = null, n.host && ("" === _[0] ? _[0] = n.host : _.unshift(n.host)), n.host = "", t.protocol && (t.hostname = null, t.port = null, t.host && ("" === p[0] ? p[0] = t.host : p.unshift(t.host)), t.host = null), v = v && ("" === p[0] || "" === _[0])), w) n.host = t.host || "" === t.host ? t.host : n.host, n.hostname = t.hostname || "" === t.hostname ? t.hostname : n.hostname, n.search = t.search, n.query = t.query, _ = p;
        else if (p.length) _ || (_ = []), _.pop(), _ = _.concat(p), n.search = t.search, n.query = t.query;
        else if (!i.isNullOrUndefined(t.search)) {
            if (S) n.hostname = n.host = _.shift(), (I = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@")) && (n.auth = I.shift(), n.host = n.hostname = I.shift());
            return n.search = t.search, n.query = t.query, i.isNull(n.pathname) && i.isNull(n.search) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), n.href = n.format(), n
        }
        if (!_.length) return n.pathname = null, n.search ? n.path = "/" + n.search : n.path = null, n.href = n.format(), n;
        for (var E = _.slice(-1)[0], C = (n.host || t.host || _.length > 1) && ("." === E || ".." === E) || "" === E, T = 0, k = _.length; k >= 0; k--) "." === (E = _[k]) ? _.splice(k, 1) : ".." === E ? (_.splice(k, 1), T++) : T && (_.splice(k, 1), T--);
        if (!v && !b)
            for (; T--; T) _.unshift("..");
        !v || "" === _[0] || _[0] && "/" === _[0].charAt(0) || _.unshift(""), C && "/" !== _.join("/").substr(-1) && _.push("");
        var I, D = "" === _[0] || _[0] && "/" === _[0].charAt(0);
        S && (n.hostname = n.host = D ? "" : _.length ? _.shift() : "", (I = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@")) && (n.auth = I.shift(), n.host = n.hostname = I.shift()));
        return (v = v || n.host && _.length) && !D && _.unshift(""), _.length ? n.pathname = _.join("/") : (n.pathname = null, n.path = null), i.isNull(n.pathname) && i.isNull(n.search) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), n.auth = t.auth || n.auth, n.slashes = n.slashes || t.slashes, n.href = n.format(), n
    }, o.prototype.parseHost = function() {
        var t = this.host,
            e = s.exec(t);
        e && (":" !== (e = e[0]) && (this.port = e.substr(1)), t = t.substr(0, t.length - e.length)), t && (this.hostname = t)
    }
}, function(t, e) {
    t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAADEklEQVRogc2asW4TQRCG/3VSQAJxOmhQXEOR8ASJhJCoSAr6uKEObxCJGolIPIBFQZ3Q0tgdZUxJgRwKFAokmwREA3wUexdOts+3u7d39idZWXnXN/N7vDNzezGKCLAk6ZqkpqTrklaSv9nxiqSvki4lfTLGfIth28S4SAqwKumGpJvJa9p4/L1fkvqSTowx56G2G6U8n8Qk12xkxmZsPD5/S9ITSW+BV8DdEMPRhACujs+afyjpHfAGaPrYjxmREMfz5h9LOgO2fYzHIkZEsvPrknrAQd1CYkYk69cR0HExHovYEcnSLhKzqBGZVhZmiqkrIuPvFc3n+dUGXk6bWI6lIjGOpB+ShpL+SFpKXsuZ8R1J9yTdl7Sm/Cjl8QzoG2NeZ9+MVtmBZWPMb4/1K5IeSHoq6bYmO4BZv5aRpJYx5nu4x5EBVoEXwEfgC3AB/KWYwkw2F4B94By4dBCR4lwwawV4Dvz0EHI8b5+nAqwB7z2EAGxI8bvfUhhjLiQ9km3rXdmryJ3yAJseETmdt78zAQ49xDSj3iHGBHs/MnJcvrdQeyRLUux6jst3FlZIguum31p0IT3Hda2rpjHJx+3M5Ej2ZONzPL+8cd0jLUlX7UEeu5W5WQDQdE1brjl7bj2Nj5Bjh3XdRRdiAFwuaIypveYAm3LLXCPnrJVctG62HNf1G3LPDDthvpTC1eZZQ+5Fpx3kSjlcO9t+Q+5FZ6vO7IU9YVx3XN7zbZkHVTqfgq0fQx+fGsaYD5LOHG20gMPKFPznSO7ROLka4df7A+xX4r4Ku4xpbGY/vOH5YaigdQEOPH2YLNRAJ0BMtMgE2p9MPvhtsCyl9kxi16VNGif/gA7/0KZ0CUjNwC4wCLA3pOjRHGHfTsop9svIbWeAbWxyCRGQUrw/saE+LWGkatx/ytgiGbJfqsb/4BorZpEiM/UBj4+gzrwVECvNM18xcbsIwlNzKEOq6rax+6Zbg4gOyeOCSsFGZ1CBgAHzOLHBdqrdCAKOywqIcjKCbRfasocFLRXfa/dkb7HT/9Mq/XT2HywGHGG+XJ2rAAAAAElFTkSuQmCC"
}, function(t, e, n) {
    t.exports = n.p + "images/48b008015901097a88b7803f4ad868da-title.png"
}, function(t, e) {
    function n(t, e, n, r, i, o, a) {
        try {
            var s = t[o](a),
                A = s.value
        } catch (t) {
            return void n(t)
        }
        s.done ? e(A) : Promise.resolve(A).then(r, i)
    }
    t.exports = function(t) {
        return function() {
            var e = this,
                r = arguments;
            return new Promise(function(i, o) {
                var a = t.apply(e, r);

                function s(t) {
                    n(a, i, o, s, A, "next", t)
                }

                function A(t) {
                    n(a, i, o, s, A, "throw", t)
                }
                s(void 0)
            })
        }
    }
}, function(t, e, n) {
    "use strict";
    var r = n(139).Loader,
        i = n(26).Resource,
        o = n(25),
        a = n(140);
    r.Resource = i, r.async = o, r.encodeBinary = a, r.base64 = a, t.exports = r, t.exports.Loader = r, t.exports.default = r
}, function(t, e) {
    function n(t) {
        return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function r(e) {
        return "function" == typeof Symbol && "symbol" === n(Symbol.iterator) ? t.exports = r = function(t) {
            return n(t)
        } : t.exports = r = function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : n(t)
        }, r(e)
    }
    t.exports = r
}, function(t, e) {
    t.exports = "data:image/png;base64,/9j/4AAQSkZJRgABAQEASABIAAD/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAEAAAAAAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCAUAAAEDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDPooor+lD+WwooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAH7BRS0VnzGdwxRUmKKzAkooorO4DvLop2KKz5iSSinbKKzJDb70VJ5dFZ3AdRRRWYEmKKd5dFZ8wuVDqKkorMNQoqTFFZ3IuO2UU6is+YAoqTFFZXQDtlFOoqBWF2Gin0VF2Go/YKKWiseYi4uw0U/FFRcCSiiiswHeXRTsUVnzE6klFLsNFY8wXH0U7y6Km4rsdRRRWYiTFFO8uis+YB1FO2UVjzE6jqKkxRU3JHbKKdRWdx3YUVJiiseYQ/YKKWipuAuw0U+isronUfsFFLRWXMTckooxRWfMVzElFFFZ8xI7ZRTsUVF0BJRRRWXMTzElFO8uis+Ym46ipKKz5gCineXRWfMA6inbKKyuwHUVJiio5ieYdsop1FZXZIUVJiio5gH7BRSbKKz5gH7DRT6Kz5ieYfsFFLRWNw5hdhop+KKzuSf/Z"
}, function(t, e, n) {
    t.exports = n.p + "images/93ff3fc5d168e31f731739824e0659b3-SHOP_UI0005.png"
}, function(t) {
    t.exports = [{
        name: "LEVEL_009",
        start: "START006",
        mid: "MIDDLE002",
        end: "FINISH005"
    }, {
        name: "LEVEL_012",
        start: "START027",
        mid: "MIDDLE030",
        end: "FINISH001"
    }, {
        name: "LEVEL_013",
        start: "START011",
        mid: "MIDDLE021",
        end: "FINISH000"
    }, {
        name: "LEVEL_016",
        start: "START012",
        mid: "MIDDLE004",
        end: "FINISH035"
    }, {
        name: "LEVEL_017",
        start: "START013",
        mid: "MIDDLE002",
        end: "FINISH009"
    }, {
        name: "LEVEL_018",
        start: "START002",
        mid: "MIDDLE008",
        end: "FINISH004"
    }, {
        name: "LEVEL_020",
        start: "START006",
        mid: "MIDDLE003",
        end: "FINISH008"
    }, {
        name: "LEVEL_021",
        start: "START014",
        mid: "MIDDLE020",
        end: "FINISH003"
    }, {
        name: "LEVEL_023",
        start: "START007",
        mid: "MIDDLE038",
        end: "FINISH032"
    }, {
        name: "LEVEL_024",
        start: "START003",
        mid: "MIDDLE020",
        end: "FINISH000"
    }, {
        name: "LEVEL_029",
        start: "START010",
        mid: "MIDDLE034",
        end: "FINISH011"
    }, {
        name: "LEVEL_031",
        start: "START006",
        mid: "MIDDLE039",
        end: "FINISH016"
    }, {
        name: "LEVEL_033",
        start: "START023",
        mid: "MIDDLE013",
        end: "FINISH008"
    }, {
        name: "LEVEL_036",
        start: "START001",
        mid: "MIDDLE028",
        end: "FINISH018"
    }, {
        name: "LEVEL_037",
        start: "START020",
        mid: "MIDDLE021",
        end: "FINISH030"
    }, {
        name: "LEVEL_038",
        start: "START019",
        mid: "MIDDLE016",
        end: "FINISH020"
    }, {
        name: "LEVEL_041",
        start: "START005",
        mid: "MIDDLE024",
        end: "FINISH006"
    }, {
        name: "LEVEL_046",
        start: "START001",
        mid: "MIDDLE011",
        end: "FINISH014"
    }, {
        name: "LEVEL_048",
        start: "START006",
        mid: "MIDDLE012",
        end: "FINISH017"
    }, {
        name: "LEVEL_049",
        start: "START027",
        mid: "MIDDLE003",
        end: "FINISH019"
    }, {
        name: "LEVEL_050",
        start: "START030",
        mid: "MIDDLE029",
        end: "FINISH009"
    }, {
        name: "LEVEL_052",
        start: "START003",
        mid: "MIDDLE005",
        end: "FINISH005"
    }, {
        name: "LEVEL_053",
        start: "START010",
        mid: "MIDDLE009",
        end: "FINISH013"
    }, {
        name: "LEVEL_054",
        start: "START026",
        mid: "MIDDLE019",
        end: "FINISH001"
    }, {
        name: "LEVEL_056",
        start: "START014",
        mid: "MIDDLE026",
        end: "FINISH003"
    }, {
        name: "LEVEL_057",
        start: "START007",
        mid: "MIDDLE015",
        end: "FINISH007"
    }, {
        name: "LEVEL_058",
        start: "START011",
        mid: "MIDDLE027",
        end: "FINISH004"
    }, {
        name: "LEVEL_060",
        start: "START007",
        mid: "MIDDLE035",
        end: "FINISH036"
    }, {
        name: "LEVEL_062",
        start: "START002",
        mid: "MIDDLE041",
        end: "FINISH021"
    }, {
        name: "LEVEL_063",
        start: "START007",
        mid: "MIDDLE035",
        end: "FINISH036"
    }]
}, function(t, e, n) {
    "use strict";
    var r = Object.prototype.hasOwnProperty,
        i = "~";

    function o() {}

    function a(t, e, n) {
        this.fn = t, this.context = e, this.once = n || !1
    }

    function s(t, e, n, r, o) {
        if ("function" != typeof n) throw new TypeError("The listener must be a function");
        var s = new a(n, r || t, o),
            A = i ? i + e : e;
        return t._events[A] ? t._events[A].fn ? t._events[A] = [t._events[A], s] : t._events[A].push(s) : (t._events[A] = s, t._eventsCount++), t
    }

    function A(t, e) {
        0 == --t._eventsCount ? t._events = new o : delete t._events[e]
    }

    function h() {
        this._events = new o, this._eventsCount = 0
    }
    Object.create && (o.prototype = Object.create(null), (new o).__proto__ || (i = !1)), h.prototype.eventNames = function() {
        var t, e, n = [];
        if (0 === this._eventsCount) return n;
        for (e in t = this._events) r.call(t, e) && n.push(i ? e.slice(1) : e);
        return Object.getOwnPropertySymbols ? n.concat(Object.getOwnPropertySymbols(t)) : n
    }, h.prototype.listeners = function(t) {
        var e = i ? i + t : t,
            n = this._events[e];
        if (!n) return [];
        if (n.fn) return [n.fn];
        for (var r = 0, o = n.length, a = new Array(o); r < o; r++) a[r] = n[r].fn;
        return a
    }, h.prototype.listenerCount = function(t) {
        var e = i ? i + t : t,
            n = this._events[e];
        return n ? n.fn ? 1 : n.length : 0
    }, h.prototype.emit = function(t, e, n, r, o, a) {
        var s = i ? i + t : t;
        if (!this._events[s]) return !1;
        var A, h, c = this._events[s],
            u = arguments.length;
        if (c.fn) {
            switch (c.once && this.removeListener(t, c.fn, void 0, !0), u) {
                case 1:
                    return c.fn.call(c.context), !0;
                case 2:
                    return c.fn.call(c.context, e), !0;
                case 3:
                    return c.fn.call(c.context, e, n), !0;
                case 4:
                    return c.fn.call(c.context, e, n, r), !0;
                case 5:
                    return c.fn.call(c.context, e, n, r, o), !0;
                case 6:
                    return c.fn.call(c.context, e, n, r, o, a), !0
            }
            for (h = 1, A = new Array(u - 1); h < u; h++) A[h - 1] = arguments[h];
            c.fn.apply(c.context, A)
        } else {
            var l, d = c.length;
            for (h = 0; h < d; h++) switch (c[h].once && this.removeListener(t, c[h].fn, void 0, !0), u) {
                case 1:
                    c[h].fn.call(c[h].context);
                    break;
                case 2:
                    c[h].fn.call(c[h].context, e);
                    break;
                case 3:
                    c[h].fn.call(c[h].context, e, n);
                    break;
                case 4:
                    c[h].fn.call(c[h].context, e, n, r);
                    break;
                default:
                    if (!A)
                        for (l = 1, A = new Array(u - 1); l < u; l++) A[l - 1] = arguments[l];
                    c[h].fn.apply(c[h].context, A)
            }
        }
        return !0
    }, h.prototype.on = function(t, e, n) {
        return s(this, t, e, n, !1)
    }, h.prototype.once = function(t, e, n) {
        return s(this, t, e, n, !0)
    }, h.prototype.removeListener = function(t, e, n, r) {
        var o = i ? i + t : t;
        if (!this._events[o]) return this;
        if (!e) return A(this, o), this;
        var a = this._events[o];
        if (a.fn) a.fn !== e || r && !a.once || n && a.context !== n || A(this, o);
        else {
            for (var s = 0, h = [], c = a.length; s < c; s++)(a[s].fn !== e || r && !a[s].once || n && a[s].context !== n) && h.push(a[s]);
            h.length ? this._events[o] = 1 === h.length ? h[0] : h : A(this, o)
        }
        return this
    }, h.prototype.removeAllListeners = function(t) {
        var e;
        return t ? (e = i ? i + t : t, this._events[e] && A(this, e)) : (this._events = new o, this._eventsCount = 0), this
    }, h.prototype.off = h.prototype.removeListener, h.prototype.addListener = h.prototype.on, h.prefixed = i, h.EventEmitter = h, t.exports = h
}, function(t, e, n) {
    "use strict";

    function r(t, e, n) {
        n = n || 2;
        var r, s, A, h, c, d, f, y = e && e.length,
            x = y ? e[0] * n : t.length,
            m = i(t, 0, x, n, !0),
            g = [];
        if (!m || m.next === m.prev) return g;
        if (y && (m = function(t, e, n, r) {
                var a, s, A, h, c, d = [];
                for (a = 0, s = e.length; a < s; a++) A = e[a] * r, h = a < s - 1 ? e[a + 1] * r : t.length, (c = i(t, A, h, r, !1)) === c.next && (c.steiner = !0), d.push(p(c));
                for (d.sort(u), a = 0; a < d.length; a++) l(d[a], n), n = o(n, n.next);
                return n
            }(t, e, m, n)), t.length > 80 * n) {
            r = A = t[0], s = h = t[1];
            for (var w = n; w < x; w += n)(c = t[w]) < r && (r = c), (d = t[w + 1]) < s && (s = d), c > A && (A = c), d > h && (h = d);
            f = 0 !== (f = Math.max(A - r, h - s)) ? 1 / f : 0
        }
        return a(m, g, n, r, s, f), g
    }

    function i(t, e, n, r, i) {
        var o, a;
        if (i === E(t, e, n, r) > 0)
            for (o = e; o < n; o += r) a = b(o, t[o], t[o + 1], a);
        else
            for (o = n - r; o >= e; o -= r) a = b(o, t[o], t[o + 1], a);
        return a && m(a, a.next) && (_(a), a = a.next), a
    }

    function o(t, e) {
        if (!t) return t;
        e || (e = t);
        var n, r = t;
        do {
            if (n = !1, r.steiner || !m(r, r.next) && 0 !== x(r.prev, r, r.next)) r = r.next;
            else {
                if (_(r), (r = e = r.prev) === r.next) break;
                n = !0
            }
        } while (n || r !== e);
        return e
    }

    function a(t, e, n, r, i, u, l) {
        if (t) {
            !l && u && function(t, e, n, r) {
                var i = t;
                do {
                    null === i.z && (i.z = d(i.x, i.y, e, n, r)), i.prevZ = i.prev, i.nextZ = i.next, i = i.next
                } while (i !== t);
                i.prevZ.nextZ = null, i.prevZ = null,
                    function(t) {
                        var e, n, r, i, o, a, s, A, h = 1;
                        do {
                            for (n = t, t = null, o = null, a = 0; n;) {
                                for (a++, r = n, s = 0, e = 0; e < h && (s++, r = r.nextZ); e++);
                                for (A = h; s > 0 || A > 0 && r;) 0 !== s && (0 === A || !r || n.z <= r.z) ? (i = n, n = n.nextZ, s--) : (i = r, r = r.nextZ, A--), o ? o.nextZ = i : t = i, i.prevZ = o, o = i;
                                n = r
                            }
                            o.nextZ = null, h *= 2
                        } while (a > 1)
                    }(i)
            }(t, r, i, u);
            for (var p, f, y = t; t.prev !== t.next;)
                if (p = t.prev, f = t.next, u ? A(t, r, i, u) : s(t)) e.push(p.i / n), e.push(t.i / n), e.push(f.i / n), _(t), t = f.next, y = f.next;
                else if ((t = f) === y) {
                l ? 1 === l ? a(t = h(t, e, n), e, n, r, i, u, 2) : 2 === l && c(t, e, n, r, i, u) : a(o(t), e, n, r, i, u, 1);
                break
            }
        }
    }

    function s(t) {
        var e = t.prev,
            n = t,
            r = t.next;
        if (x(e, n, r) >= 0) return !1;
        for (var i = t.next.next; i !== t.prev;) {
            if (f(e.x, e.y, n.x, n.y, r.x, r.y, i.x, i.y) && x(i.prev, i, i.next) >= 0) return !1;
            i = i.next
        }
        return !0
    }

    function A(t, e, n, r) {
        var i = t.prev,
            o = t,
            a = t.next;
        if (x(i, o, a) >= 0) return !1;
        for (var s = i.x < o.x ? i.x < a.x ? i.x : a.x : o.x < a.x ? o.x : a.x, A = i.y < o.y ? i.y < a.y ? i.y : a.y : o.y < a.y ? o.y : a.y, h = i.x > o.x ? i.x > a.x ? i.x : a.x : o.x > a.x ? o.x : a.x, c = i.y > o.y ? i.y > a.y ? i.y : a.y : o.y > a.y ? o.y : a.y, u = d(s, A, e, n, r), l = d(h, c, e, n, r), p = t.prevZ, y = t.nextZ; p && p.z >= u && y && y.z <= l;) {
            if (p !== t.prev && p !== t.next && f(i.x, i.y, o.x, o.y, a.x, a.y, p.x, p.y) && x(p.prev, p, p.next) >= 0) return !1;
            if (p = p.prevZ, y !== t.prev && y !== t.next && f(i.x, i.y, o.x, o.y, a.x, a.y, y.x, y.y) && x(y.prev, y, y.next) >= 0) return !1;
            y = y.nextZ
        }
        for (; p && p.z >= u;) {
            if (p !== t.prev && p !== t.next && f(i.x, i.y, o.x, o.y, a.x, a.y, p.x, p.y) && x(p.prev, p, p.next) >= 0) return !1;
            p = p.prevZ
        }
        for (; y && y.z <= l;) {
            if (y !== t.prev && y !== t.next && f(i.x, i.y, o.x, o.y, a.x, a.y, y.x, y.y) && x(y.prev, y, y.next) >= 0) return !1;
            y = y.nextZ
        }
        return !0
    }

    function h(t, e, n) {
        var r = t;
        do {
            var i = r.prev,
                o = r.next.next;
            !m(i, o) && g(i, r, r.next, o) && w(i, o) && w(o, i) && (e.push(i.i / n), e.push(r.i / n), e.push(o.i / n), _(r), _(r.next), r = t = o), r = r.next
        } while (r !== t);
        return r
    }

    function c(t, e, n, r, i, s) {
        var A = t;
        do {
            for (var h = A.next.next; h !== A.prev;) {
                if (A.i !== h.i && y(A, h)) {
                    var c = v(A, h);
                    return A = o(A, A.next), c = o(c, c.next), a(A, e, n, r, i, s), void a(c, e, n, r, i, s)
                }
                h = h.next
            }
            A = A.next
        } while (A !== t)
    }

    function u(t, e) {
        return t.x - e.x
    }

    function l(t, e) {
        if (e = function(t, e) {
                var n, r = e,
                    i = t.x,
                    o = t.y,
                    a = -1 / 0;
                do {
                    if (o <= r.y && o >= r.next.y && r.next.y !== r.y) {
                        var s = r.x + (o - r.y) * (r.next.x - r.x) / (r.next.y - r.y);
                        if (s <= i && s > a) {
                            if (a = s, s === i) {
                                if (o === r.y) return r;
                                if (o === r.next.y) return r.next
                            }
                            n = r.x < r.next.x ? r : r.next
                        }
                    }
                    r = r.next
                } while (r !== e);
                if (!n) return null;
                if (i === a) return n.prev;
                var A, h = n,
                    c = n.x,
                    u = n.y,
                    l = 1 / 0;
                r = n.next;
                for (; r !== h;) i >= r.x && r.x >= c && i !== r.x && f(o < u ? i : a, o, c, u, o < u ? a : i, o, r.x, r.y) && ((A = Math.abs(o - r.y) / (i - r.x)) < l || A === l && r.x > n.x) && w(r, t) && (n = r, l = A), r = r.next;
                return n
            }(t, e)) {
            var n = v(e, t);
            o(n, n.next)
        }
    }

    function d(t, e, n, r, i) {
        return (t = 1431655765 & ((t = 858993459 & ((t = 252645135 & ((t = 16711935 & ((t = 32767 * (t - n) * i) | t << 8)) | t << 4)) | t << 2)) | t << 1)) | (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = 32767 * (e - r) * i) | e << 8)) | e << 4)) | e << 2)) | e << 1)) << 1
    }

    function p(t) {
        var e = t,
            n = t;
        do {
            (e.x < n.x || e.x === n.x && e.y < n.y) && (n = e), e = e.next
        } while (e !== t);
        return n
    }

    function f(t, e, n, r, i, o, a, s) {
        return (i - a) * (e - s) - (t - a) * (o - s) >= 0 && (t - a) * (r - s) - (n - a) * (e - s) >= 0 && (n - a) * (o - s) - (i - a) * (r - s) >= 0
    }

    function y(t, e) {
        return t.next.i !== e.i && t.prev.i !== e.i && ! function(t, e) {
            var n = t;
            do {
                if (n.i !== t.i && n.next.i !== t.i && n.i !== e.i && n.next.i !== e.i && g(n, n.next, t, e)) return !0;
                n = n.next
            } while (n !== t);
            return !1
        }(t, e) && w(t, e) && w(e, t) && function(t, e) {
            var n = t,
                r = !1,
                i = (t.x + e.x) / 2,
                o = (t.y + e.y) / 2;
            do {
                n.y > o != n.next.y > o && n.next.y !== n.y && i < (n.next.x - n.x) * (o - n.y) / (n.next.y - n.y) + n.x && (r = !r), n = n.next
            } while (n !== t);
            return r
        }(t, e)
    }

    function x(t, e, n) {
        return (e.y - t.y) * (n.x - e.x) - (e.x - t.x) * (n.y - e.y)
    }

    function m(t, e) {
        return t.x === e.x && t.y === e.y
    }

    function g(t, e, n, r) {
        return !!(m(t, e) && m(n, r) || m(t, r) && m(n, e)) || x(t, e, n) > 0 != x(t, e, r) > 0 && x(n, r, t) > 0 != x(n, r, e) > 0
    }

    function w(t, e) {
        return x(t.prev, t, t.next) < 0 ? x(t, e, t.next) >= 0 && x(t, t.prev, e) >= 0 : x(t, e, t.prev) < 0 || x(t, t.next, e) < 0
    }

    function v(t, e) {
        var n = new S(t.i, t.x, t.y),
            r = new S(e.i, e.x, e.y),
            i = t.next,
            o = e.prev;
        return t.next = e, e.prev = t, n.next = i, i.prev = n, r.next = n, n.prev = r, o.next = r, r.prev = o, r
    }

    function b(t, e, n, r) {
        var i = new S(t, e, n);
        return r ? (i.next = r.next, i.prev = r, r.next.prev = i, r.next = i) : (i.prev = i, i.next = i), i
    }

    function _(t) {
        t.next.prev = t.prev, t.prev.next = t.next, t.prevZ && (t.prevZ.nextZ = t.nextZ), t.nextZ && (t.nextZ.prevZ = t.prevZ)
    }

    function S(t, e, n) {
        this.i = t, this.x = e, this.y = n, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1
    }

    function E(t, e, n, r) {
        for (var i = 0, o = e, a = n - r; o < n; o += r) i += (t[a] - t[o]) * (t[o + 1] + t[a + 1]), a = o;
        return i
    }
    t.exports = r, t.exports.default = r, r.deviation = function(t, e, n, r) {
        var i = e && e.length,
            o = i ? e[0] * n : t.length,
            a = Math.abs(E(t, 0, o, n));
        if (i)
            for (var s = 0, A = e.length; s < A; s++) {
                var h = e[s] * n,
                    c = s < A - 1 ? e[s + 1] * n : t.length;
                a -= Math.abs(E(t, h, c, n))
            }
        var u = 0;
        for (s = 0; s < r.length; s += 3) {
            var l = r[s] * n,
                d = r[s + 1] * n,
                p = r[s + 2] * n;
            u += Math.abs((t[l] - t[p]) * (t[d + 1] - t[l + 1]) - (t[l] - t[d]) * (t[p + 1] - t[l + 1]))
        }
        return 0 === a && 0 === u ? 0 : Math.abs((u - a) / a)
    }, r.flatten = function(t) {
        for (var e = t[0][0].length, n = {
                vertices: [],
                holes: [],
                dimensions: e
            }, r = 0, i = 0; i < t.length; i++) {
            for (var o = 0; o < t[i].length; o++)
                for (var a = 0; a < e; a++) n.vertices.push(t[i][o][a]);
            i > 0 && (r += t[i - 1].length, n.holes.push(r))
        }
        return n
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = function() {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }
        return function(e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e
        }
    }();

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    var o = function() {
        function t(e, n, r) {
            void 0 === n && (n = !1), i(this, t), this._fn = e, this._once = n, this._thisArg = r, this._next = this._prev = this._owner = null
        }
        return r(t, [{
            key: "detach",
            value: function() {
                return null !== this._owner && (this._owner.detach(this), !0)
            }
        }]), t
    }();

    function a(t, e) {
        return t._head ? (t._tail._next = e, e._prev = t._tail, t._tail = e) : (t._head = e, t._tail = e), e._owner = t, e
    }
    var s = function() {
        function t() {
            i(this, t), this._head = this._tail = void 0
        }
        return r(t, [{
            key: "handlers",
            value: function() {
                var t = !(arguments.length <= 0 || void 0 === arguments[0]) && arguments[0],
                    e = this._head;
                if (t) return !!e;
                for (var n = []; e;) n.push(e), e = e._next;
                return n
            }
        }, {
            key: "has",
            value: function(t) {
                if (!(t instanceof o)) throw new Error("MiniSignal#has(): First arg must be a MiniSignalBinding object.");
                return t._owner === this
            }
        }, {
            key: "dispatch",
            value: function() {
                var t = this._head;
                if (!t) return !1;
                for (; t;) t._once && this.detach(t), t._fn.apply(t._thisArg, arguments), t = t._next;
                return !0
            }
        }, {
            key: "add",
            value: function(t) {
                var e = arguments.length <= 1 || void 0 === arguments[1] ? null : arguments[1];
                if ("function" != typeof t) throw new Error("MiniSignal#add(): First arg must be a Function.");
                return a(this, new o(t, !1, e))
            }
        }, {
            key: "once",
            value: function(t) {
                var e = arguments.length <= 1 || void 0 === arguments[1] ? null : arguments[1];
                if ("function" != typeof t) throw new Error("MiniSignal#once(): First arg must be a Function.");
                return a(this, new o(t, !0, e))
            }
        }, {
            key: "detach",
            value: function(t) {
                if (!(t instanceof o)) throw new Error("MiniSignal#detach(): First arg must be a MiniSignalBinding object.");
                return t._owner !== this ? this : (t._prev && (t._prev._next = t._next), t._next && (t._next._prev = t._prev), t === this._head ? (this._head = t._next, null === t._next && (this._tail = null)) : t === this._tail && (this._tail = t._prev, this._tail._next = null), t._owner = null, this)
            }
        }, {
            key: "detachAll",
            value: function() {
                var t = this._head;
                if (!t) return this;
                for (this._head = this._tail = null; t;) t._owner = null, t = t._next;
                return this
            }
        }]), t
    }();
    s.MiniSignalBinding = o, e.default = s, t.exports = e.default
}, function(t, e, n) {
    "use strict";
    t.exports = function(t, e) {
        e = e || {};
        for (var n = {
                key: ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
                q: {
                    name: "queryKey",
                    parser: /(?:^|&)([^&=]*)=?([^&]*)/g
                },
                parser: {
                    strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
                    loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
                }
            }, r = n.parser[e.strictMode ? "strict" : "loose"].exec(t), i = {}, o = 14; o--;) i[n.key[o]] = r[o] || "";
        return i[n.q.name] = {}, i[n.key[12]].replace(n.q.parser, function(t, e, r) {
            e && (i[n.q.name][e] = r)
        }), i
    }
}, function(t, e, n) {
    "use strict";

    function r() {}

    function i(t) {
        return function() {
            if (null === t) throw new Error("Callback was already called.");
            var e = t;
            t = null, e.apply(this, arguments)
        }
    }
    e.__esModule = !0, e.eachSeries = function(t, e, n, r) {
        var i = 0,
            o = t.length;
        ! function a(s) {
            s || i === o ? n && n(s) : r ? setTimeout(function() {
                e(t[i++], a)
            }, 1) : e(t[i++], a)
        }()
    }, e.queue = function(t, e) {
        if (null == e) e = 1;
        else if (0 === e) throw new Error("Concurrency must not be zero");
        var n = 0,
            o = {
                _tasks: [],
                concurrency: e,
                saturated: r,
                unsaturated: r,
                buffer: e / 4,
                empty: r,
                drain: r,
                error: r,
                started: !1,
                paused: !1,
                push: function(t, e) {
                    a(t, !1, e)
                },
                kill: function() {
                    n = 0, o.drain = r, o.started = !1, o._tasks = []
                },
                unshift: function(t, e) {
                    a(t, !0, e)
                },
                process: function() {
                    for (; !o.paused && n < o.concurrency && o._tasks.length;) {
                        var e = o._tasks.shift();
                        0 === o._tasks.length && o.empty(), (n += 1) === o.concurrency && o.saturated(), t(e.data, i(s(e)))
                    }
                },
                length: function() {
                    return o._tasks.length
                },
                running: function() {
                    return n
                },
                idle: function() {
                    return o._tasks.length + n === 0
                },
                pause: function() {
                    !0 !== o.paused && (o.paused = !0)
                },
                resume: function() {
                    if (!1 !== o.paused) {
                        o.paused = !1;
                        for (var t = 1; t <= o.concurrency; t++) o.process()
                    }
                }
            };

        function a(t, e, n) {
            if (null != n && "function" != typeof n) throw new Error("task callback must be a function");
            if (o.started = !0, null == t && o.idle()) setTimeout(function() {
                return o.drain()
            }, 1);
            else {
                var i = {
                    data: t,
                    callback: "function" == typeof n ? n : r
                };
                e ? o._tasks.unshift(i) : o._tasks.push(i), setTimeout(function() {
                    return o.process()
                }, 1)
            }
        }

        function s(t) {
            return function() {
                n -= 1, t.callback.apply(t, arguments), null != arguments[0] && o.error(arguments[0], t.data), n <= o.concurrency - o.buffer && o.unsaturated(), o.idle() && o.drain(), o.process()
            }
        }
        return o
    }
}, function(t, e, n) {
    "use strict";
    e.__esModule = !0, e.Resource = void 0;
    var r = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }(),
        i = a(n(24)),
        o = a(n(23));

    function a(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var s = !(!window.XDomainRequest || "withCredentials" in new XMLHttpRequest),
        A = null;

    function h() {}
    var c = e.Resource = function() {
        function t(e, n, r) {
            if (function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), "string" != typeof e || "string" != typeof n) throw new Error("Both name and url are required for constructing a resource.");
            r = r || {}, this._flags = 0, this._setFlag(t.STATUS_FLAGS.DATA_URL, 0 === n.indexOf("data:")), this.name = e, this.url = n, this.extension = this._getExtension(), this.data = null, this.crossOrigin = !0 === r.crossOrigin ? "anonymous" : r.crossOrigin, this.timeout = r.timeout || 0, this.loadType = r.loadType || this._determineLoadType(), this.xhrType = r.xhrType, this.metadata = r.metadata || {}, this.error = null, this.xhr = null, this.children = [], this.type = t.TYPE.UNKNOWN, this.progressChunk = 0, this._dequeue = h, this._onLoadBinding = null, this._elementTimer = 0, this._boundComplete = this.complete.bind(this), this._boundOnError = this._onError.bind(this), this._boundOnProgress = this._onProgress.bind(this), this._boundOnTimeout = this._onTimeout.bind(this), this._boundXhrOnError = this._xhrOnError.bind(this), this._boundXhrOnTimeout = this._xhrOnTimeout.bind(this), this._boundXhrOnAbort = this._xhrOnAbort.bind(this), this._boundXhrOnLoad = this._xhrOnLoad.bind(this), this.onStart = new o.default, this.onProgress = new o.default, this.onComplete = new o.default, this.onAfterMiddleware = new o.default
        }
        return t.setExtensionLoadType = function(e, n) {
            u(t._loadTypeMap, e, n)
        }, t.setExtensionXhrType = function(e, n) {
            u(t._xhrTypeMap, e, n)
        }, t.prototype.complete = function() {
            this._clearEvents(), this._finish()
        }, t.prototype.abort = function(e) {
            if (!this.error) {
                if (this.error = new Error(e), this._clearEvents(), this.xhr) this.xhr.abort();
                else if (this.xdr) this.xdr.abort();
                else if (this.data)
                    if (this.data.src) this.data.src = t.EMPTY_GIF;
                    else
                        for (; this.data.firstChild;) this.data.removeChild(this.data.firstChild);
                this._finish()
            }
        }, t.prototype.load = function(e) {
            var n = this;
            if (!this.isLoading)
                if (this.isComplete) e && setTimeout(function() {
                    return e(n)
                }, 1);
                else switch (e && this.onComplete.once(e), this._setFlag(t.STATUS_FLAGS.LOADING, !0), this.onStart.dispatch(this), !1 !== this.crossOrigin && "string" == typeof this.crossOrigin || (this.crossOrigin = this._determineCrossOrigin(this.url)), this.loadType) {
                    case t.LOAD_TYPE.IMAGE:
                        this.type = t.TYPE.IMAGE, this._loadElement("image");
                        break;
                    case t.LOAD_TYPE.AUDIO:
                        this.type = t.TYPE.AUDIO, this._loadSourceElement("audio");
                        break;
                    case t.LOAD_TYPE.VIDEO:
                        this.type = t.TYPE.VIDEO, this._loadSourceElement("video");
                        break;
                    case t.LOAD_TYPE.XHR:
                    default:
                        s && this.crossOrigin ? this._loadXdr() : this._loadXhr()
                }
        }, t.prototype._hasFlag = function(t) {
            return 0 != (this._flags & t)
        }, t.prototype._setFlag = function(t, e) {
            this._flags = e ? this._flags | t : this._flags & ~t
        }, t.prototype._clearEvents = function() {
            clearTimeout(this._elementTimer), this.data && this.data.removeEventListener && (this.data.removeEventListener("error", this._boundOnError, !1), this.data.removeEventListener("load", this._boundComplete, !1), this.data.removeEventListener("progress", this._boundOnProgress, !1), this.data.removeEventListener("canplaythrough", this._boundComplete, !1)), this.xhr && (this.xhr.removeEventListener ? (this.xhr.removeEventListener("error", this._boundXhrOnError, !1), this.xhr.removeEventListener("timeout", this._boundXhrOnTimeout, !1), this.xhr.removeEventListener("abort", this._boundXhrOnAbort, !1), this.xhr.removeEventListener("progress", this._boundOnProgress, !1), this.xhr.removeEventListener("load", this._boundXhrOnLoad, !1)) : (this.xhr.onerror = null, this.xhr.ontimeout = null, this.xhr.onprogress = null, this.xhr.onload = null))
        }, t.prototype._finish = function() {
            if (this.isComplete) throw new Error("Complete called again for an already completed resource.");
            this._setFlag(t.STATUS_FLAGS.COMPLETE, !0), this._setFlag(t.STATUS_FLAGS.LOADING, !1), this.onComplete.dispatch(this)
        }, t.prototype._loadElement = function(t) {
            this.metadata.loadElement ? this.data = this.metadata.loadElement : "image" === t && void 0 !== window.Image ? this.data = new Image : this.data = document.createElement(t), this.crossOrigin && (this.data.crossOrigin = this.crossOrigin), this.metadata.skipSource || (this.data.src = this.url), this.data.addEventListener("error", this._boundOnError, !1), this.data.addEventListener("load", this._boundComplete, !1), this.data.addEventListener("progress", this._boundOnProgress, !1), this.timeout && (this._elementTimer = setTimeout(this._boundOnTimeout, this.timeout))
        }, t.prototype._loadSourceElement = function(t) {
            if (this.metadata.loadElement ? this.data = this.metadata.loadElement : "audio" === t && void 0 !== window.Audio ? this.data = new Audio : this.data = document.createElement(t), null !== this.data) {
                if (this.crossOrigin && (this.data.crossOrigin = this.crossOrigin), !this.metadata.skipSource)
                    if (navigator.isCocoonJS) this.data.src = Array.isArray(this.url) ? this.url[0] : this.url;
                    else if (Array.isArray(this.url))
                    for (var e = this.metadata.mimeType, n = 0; n < this.url.length; ++n) this.data.appendChild(this._createSource(t, this.url[n], Array.isArray(e) ? e[n] : e));
                else {
                    var r = this.metadata.mimeType;
                    this.data.appendChild(this._createSource(t, this.url, Array.isArray(r) ? r[0] : r))
                }
                this.data.addEventListener("error", this._boundOnError, !1), this.data.addEventListener("load", this._boundComplete, !1), this.data.addEventListener("progress", this._boundOnProgress, !1), this.data.addEventListener("canplaythrough", this._boundComplete, !1), this.data.load(), this.timeout && (this._elementTimer = setTimeout(this._boundOnTimeout, this.timeout))
            } else this.abort("Unsupported element: " + t)
        }, t.prototype._loadXhr = function() {
            "string" != typeof this.xhrType && (this.xhrType = this._determineXhrType());
            var e = this.xhr = new XMLHttpRequest;
            e.open("GET", this.url, !0), e.timeout = this.timeout, this.xhrType === t.XHR_RESPONSE_TYPE.JSON || this.xhrType === t.XHR_RESPONSE_TYPE.DOCUMENT ? e.responseType = t.XHR_RESPONSE_TYPE.TEXT : e.responseType = this.xhrType, e.addEventListener("error", this._boundXhrOnError, !1), e.addEventListener("timeout", this._boundXhrOnTimeout, !1), e.addEventListener("abort", this._boundXhrOnAbort, !1), e.addEventListener("progress", this._boundOnProgress, !1), e.addEventListener("load", this._boundXhrOnLoad, !1), e.send()
        }, t.prototype._loadXdr = function() {
            "string" != typeof this.xhrType && (this.xhrType = this._determineXhrType());
            var t = this.xhr = new XDomainRequest;
            t.timeout = this.timeout || 5e3, t.onerror = this._boundXhrOnError, t.ontimeout = this._boundXhrOnTimeout, t.onprogress = this._boundOnProgress, t.onload = this._boundXhrOnLoad, t.open("GET", this.url, !0), setTimeout(function() {
                return t.send()
            }, 1)
        }, t.prototype._createSource = function(t, e, n) {
            n || (n = t + "/" + this._getExtension(e));
            var r = document.createElement("source");
            return r.src = e, r.type = n, r
        }, t.prototype._onError = function(t) {
            this.abort("Failed to load element using: " + t.target.nodeName)
        }, t.prototype._onProgress = function(t) {
            t && t.lengthComputable && this.onProgress.dispatch(this, t.loaded / t.total)
        }, t.prototype._onTimeout = function() {
            this.abort("Load timed out.")
        }, t.prototype._xhrOnError = function() {
            var t = this.xhr;
            this.abort(l(t) + " Request failed. Status: " + t.status + ', text: "' + t.statusText + '"')
        }, t.prototype._xhrOnTimeout = function() {
            var t = this.xhr;
            this.abort(l(t) + " Request timed out.")
        }, t.prototype._xhrOnAbort = function() {
            var t = this.xhr;
            this.abort(l(t) + " Request was aborted by the user.")
        }, t.prototype._xhrOnLoad = function() {
            var e = this.xhr,
                n = "",
                r = void 0 === e.status ? 200 : e.status;
            if ("" !== e.responseType && "text" !== e.responseType && void 0 !== e.responseType || (n = e.responseText), 0 === r && (n.length > 0 || e.responseType === t.XHR_RESPONSE_TYPE.BUFFER) ? r = 200 : 1223 === r && (r = 204), 2 === (r / 100 | 0)) {
                if (this.xhrType === t.XHR_RESPONSE_TYPE.TEXT) this.data = n, this.type = t.TYPE.TEXT;
                else if (this.xhrType === t.XHR_RESPONSE_TYPE.JSON) try {
                    this.data = JSON.parse(n), this.type = t.TYPE.JSON
                } catch (t) {
                    return void this.abort("Error trying to parse loaded json: " + t)
                } else if (this.xhrType === t.XHR_RESPONSE_TYPE.DOCUMENT) try {
                    if (window.DOMParser) {
                        var i = new DOMParser;
                        this.data = i.parseFromString(n, "text/xml")
                    } else {
                        var o = document.createElement("div");
                        o.innerHTML = n, this.data = o
                    }
                    this.type = t.TYPE.XML
                } catch (t) {
                    return void this.abort("Error trying to parse loaded xml: " + t)
                } else this.data = e.response || n;
                this.complete()
            } else this.abort("[" + e.status + "] " + e.statusText + ": " + e.responseURL)
        }, t.prototype._determineCrossOrigin = function(t, e) {
            if (0 === t.indexOf("data:")) return "";
            if (window.origin !== window.location.origin) return "anonymous";
            e = e || window.location, A || (A = document.createElement("a")), A.href = t;
            var n = !(t = (0, i.default)(A.href, {
                    strictMode: !0
                })).port && "" === e.port || t.port === e.port,
                r = t.protocol ? t.protocol + ":" : "";
            return t.host === e.hostname && n && r === e.protocol ? "" : "anonymous"
        }, t.prototype._determineXhrType = function() {
            return t._xhrTypeMap[this.extension] || t.XHR_RESPONSE_TYPE.TEXT
        }, t.prototype._determineLoadType = function() {
            return t._loadTypeMap[this.extension] || t.LOAD_TYPE.XHR
        }, t.prototype._getExtension = function() {
            var t = this.url,
                e = "";
            if (this.isDataUrl) {
                var n = t.indexOf("/");
                e = t.substring(n + 1, t.indexOf(";", n))
            } else {
                var r = t.indexOf("?"),
                    i = t.indexOf("#"),
                    o = Math.min(r > -1 ? r : t.length, i > -1 ? i : t.length);
                e = (t = t.substring(0, o)).substring(t.lastIndexOf(".") + 1)
            }
            return e.toLowerCase()
        }, t.prototype._getMimeFromXhrType = function(e) {
            switch (e) {
                case t.XHR_RESPONSE_TYPE.BUFFER:
                    return "application/octet-binary";
                case t.XHR_RESPONSE_TYPE.BLOB:
                    return "application/blob";
                case t.XHR_RESPONSE_TYPE.DOCUMENT:
                    return "application/xml";
                case t.XHR_RESPONSE_TYPE.JSON:
                    return "application/json";
                case t.XHR_RESPONSE_TYPE.DEFAULT:
                case t.XHR_RESPONSE_TYPE.TEXT:
                default:
                    return "text/plain"
            }
        }, r(t, [{
            key: "isDataUrl",
            get: function() {
                return this._hasFlag(t.STATUS_FLAGS.DATA_URL)
            }
        }, {
            key: "isComplete",
            get: function() {
                return this._hasFlag(t.STATUS_FLAGS.COMPLETE)
            }
        }, {
            key: "isLoading",
            get: function() {
                return this._hasFlag(t.STATUS_FLAGS.LOADING)
            }
        }]), t
    }();

    function u(t, e, n) {
        e && 0 === e.indexOf(".") && (e = e.substring(1)), e && (t[e] = n)
    }

    function l(t) {
        return t.toString().replace("object ", "")
    }
    c.STATUS_FLAGS = {
        NONE: 0,
        DATA_URL: 1,
        COMPLETE: 2,
        LOADING: 4
    }, c.TYPE = {
        UNKNOWN: 0,
        JSON: 1,
        XML: 2,
        IMAGE: 3,
        AUDIO: 4,
        VIDEO: 5,
        TEXT: 6
    }, c.LOAD_TYPE = {
        XHR: 1,
        IMAGE: 2,
        AUDIO: 3,
        VIDEO: 4
    }, c.XHR_RESPONSE_TYPE = {
        DEFAULT: "text",
        BUFFER: "arraybuffer",
        BLOB: "blob",
        DOCUMENT: "document",
        JSON: "json",
        TEXT: "text"
    }, c._loadTypeMap = {
        gif: c.LOAD_TYPE.IMAGE,
        png: c.LOAD_TYPE.IMAGE,
        bmp: c.LOAD_TYPE.IMAGE,
        jpg: c.LOAD_TYPE.IMAGE,
        jpeg: c.LOAD_TYPE.IMAGE,
        tif: c.LOAD_TYPE.IMAGE,
        tiff: c.LOAD_TYPE.IMAGE,
        webp: c.LOAD_TYPE.IMAGE,
        tga: c.LOAD_TYPE.IMAGE,
        svg: c.LOAD_TYPE.IMAGE,
        "svg+xml": c.LOAD_TYPE.IMAGE,
        mp3: c.LOAD_TYPE.AUDIO,
        ogg: c.LOAD_TYPE.AUDIO,
        wav: c.LOAD_TYPE.AUDIO,
        mp4: c.LOAD_TYPE.VIDEO,
        webm: c.LOAD_TYPE.VIDEO
    }, c._xhrTypeMap = {
        xhtml: c.XHR_RESPONSE_TYPE.DOCUMENT,
        html: c.XHR_RESPONSE_TYPE.DOCUMENT,
        htm: c.XHR_RESPONSE_TYPE.DOCUMENT,
        xml: c.XHR_RESPONSE_TYPE.DOCUMENT,
        tmx: c.XHR_RESPONSE_TYPE.DOCUMENT,
        svg: c.XHR_RESPONSE_TYPE.DOCUMENT,
        tsx: c.XHR_RESPONSE_TYPE.DOCUMENT,
        gif: c.XHR_RESPONSE_TYPE.BLOB,
        png: c.XHR_RESPONSE_TYPE.BLOB,
        bmp: c.XHR_RESPONSE_TYPE.BLOB,
        jpg: c.XHR_RESPONSE_TYPE.BLOB,
        jpeg: c.XHR_RESPONSE_TYPE.BLOB,
        tif: c.XHR_RESPONSE_TYPE.BLOB,
        tiff: c.XHR_RESPONSE_TYPE.BLOB,
        webp: c.XHR_RESPONSE_TYPE.BLOB,
        tga: c.XHR_RESPONSE_TYPE.BLOB,
        json: c.XHR_RESPONSE_TYPE.JSON,
        text: c.XHR_RESPONSE_TYPE.TEXT,
        txt: c.XHR_RESPONSE_TYPE.TEXT,
        ttf: c.XHR_RESPONSE_TYPE.BUFFER,
        otf: c.XHR_RESPONSE_TYPE.BUFFER
    }, c.EMPTY_GIF = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", t.exports.default = c
}, function(t, e, n) {
    (function(r, i) {
        var o;
        ! function(r) {
            var a = r.Promise,
                s = a && "resolve" in a && "reject" in a && "all" in a && "race" in a && function() {
                    var t;
                    return new a(function(e) {
                        t = e
                    }), "function" == typeof t
                }();
            e ? (e.Promise = s ? a : T, e.Polyfill = T) : void 0 === (o = function() {
                return s ? a : T
            }.call(e, n, e, t)) || (t.exports = o);
            var A = "pending",
                h = "sealed",
                c = "fulfilled",
                u = "rejected",
                l = function() {};

            function d(t) {
                return "[object Array]" === Object.prototype.toString.call(t)
            }
            var p, f = void 0 !== i ? i : setTimeout,
                y = [];

            function x() {
                for (var t = 0; t < y.length; t++) y[t][0](y[t][1]);
                y = [], p = !1
            }

            function m(t, e) {
                y.push([t, e]), p || (p = !0, f(x, 0))
            }

            function g(t) {
                var e = t.owner,
                    n = e.state_,
                    r = e.data_,
                    i = t[n],
                    o = t.then;
                if ("function" == typeof i) {
                    n = c;
                    try {
                        r = i(r)
                    } catch (t) {
                        _(o, t)
                    }
                }
                w(o, r) || (n === c && v(o, r), n === u && _(o, r))
            }

            function w(t, e) {
                var n;
                try {
                    if (t === e) throw new TypeError("A promises callback cannot return that same promise.");
                    if (e && ("function" == typeof e || "object" == typeof e)) {
                        var r = e.then;
                        if ("function" == typeof r) return r.call(e, function(r) {
                            n || (n = !0, e !== r ? v(t, r) : b(t, r))
                        }, function(e) {
                            n || (n = !0, _(t, e))
                        }), !0
                    }
                } catch (e) {
                    return n || _(t, e), !0
                }
                return !1
            }

            function v(t, e) {
                t !== e && w(t, e) || b(t, e)
            }

            function b(t, e) {
                t.state_ === A && (t.state_ = h, t.data_ = e, m(E, t))
            }

            function _(t, e) {
                t.state_ === A && (t.state_ = h, t.data_ = e, m(C, t))
            }

            function S(t) {
                var e = t.then_;
                t.then_ = void 0;
                for (var n = 0; n < e.length; n++) g(e[n])
            }

            function E(t) {
                t.state_ = c, S(t)
            }

            function C(t) {
                t.state_ = u, S(t)
            }

            function T(t) {
                if ("function" != typeof t) throw new TypeError("Promise constructor takes a function argument");
                if (this instanceof T == !1) throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
                this.then_ = [],
                    function(t, e) {
                        function n(t) {
                            _(e, t)
                        }
                        try {
                            t(function(t) {
                                v(e, t)
                            }, n)
                        } catch (t) {
                            n(t)
                        }
                    }(t, this)
            }
            T.prototype = {
                constructor: T,
                state_: A,
                then_: null,
                data_: void 0,
                then: function(t, e) {
                    var n = {
                        owner: this,
                        then: new this.constructor(l),
                        fulfilled: t,
                        rejected: e
                    };
                    return this.state_ === c || this.state_ === u ? m(g, n) : this.then_.push(n), n.then
                },
                catch: function(t) {
                    return this.then(null, t)
                }
            }, T.all = function(t) {
                if (!d(t)) throw new TypeError("You must pass an array to Promise.all().");
                return new this(function(e, n) {
                    var r = [],
                        i = 0;

                    function o(t) {
                        return i++,
                            function(n) {
                                r[t] = n, --i || e(r)
                            }
                    }
                    for (var a, s = 0; s < t.length; s++)(a = t[s]) && "function" == typeof a.then ? a.then(o(s), n) : r[s] = a;
                    i || e(r)
                })
            }, T.race = function(t) {
                if (!d(t)) throw new TypeError("You must pass an array to Promise.race().");
                return new this(function(e, n) {
                    for (var r, i = 0; i < t.length; i++)(r = t[i]) && "function" == typeof r.then ? r.then(e, n) : e(r)
                })
            }, T.resolve = function(t) {
                return t && "object" == typeof t && t.constructor === this ? t : new this(function(e) {
                    e(t)
                })
            }, T.reject = function(t) {
                return new this(function(e, n) {
                    n(t)
                })
            }
        }("undefined" != typeof window ? window : void 0 !== r ? r : "undefined" != typeof self ? self : this)
    }).call(this, n(11), n(130).setImmediate)
}, function(t, e, n) {
    "use strict";
    /*
    object-assign
    (c) Sindre Sorhus
    @license MIT
    */
    var r = Object.getOwnPropertySymbols,
        i = Object.prototype.hasOwnProperty,
        o = Object.prototype.propertyIsEnumerable;
    t.exports = function() {
        try {
            if (!Object.assign) return !1;
            var t = new String("abc");
            if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return !1;
            for (var e = {}, n = 0; n < 10; n++) e["_" + String.fromCharCode(n)] = n;
            if ("0123456789" !== Object.getOwnPropertyNames(e).map(function(t) {
                    return e[t]
                }).join("")) return !1;
            var r = {};
            return "abcdefghijklmnopqrst".split("").forEach(function(t) {
                r[t] = t
            }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
        } catch (t) {
            return !1
        }
    }() ? Object.assign : function(t, e) {
        for (var n, a, s = function(t) {
                if (null == t) throw new TypeError("Object.assign cannot be called with null or undefined");
                return Object(t)
            }(t), A = 1; A < arguments.length; A++) {
            for (var h in n = Object(arguments[A])) i.call(n, h) && (s[h] = n[h]);
            if (r) {
                a = r(n);
                for (var c = 0; c < a.length; c++) o.call(n, a[c]) && (s[a[c]] = n[a[c]])
            }
        }
        return s
    }
}, function(t, e) {
    t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAARUSURBVHhe7Z2NcdpAEIVFGohdAXQAHUAHwRUYVxA6YFwBSQXEFdipAFyBQwXgCrArIPvQZgYTQHsSp9uV95vZkcxwup93q7tbHXLmOI7jOI7jRKDFR/Vst9suHXpkHT5ekZ3jD9kb2YJs3Wq1XvGhdtQKQgJ8pcOQbUBWJEARa7InsgWJ83v3iVMMPIFsRhaTFdmUDKI7x0DjkMUW4pAN2YTMhdmHGuQ7N04q4DHfuDifF2oEeMUcLaIEeGhSb0k2qHPFMQPCjEkTKNOQBv73/M96SSIIidGmAyqOKaxGMGUepBCldkEUe8YhSURJIcicDlhXVAWinuMSefwiQe74vHmQGJhNlQWD/y0Zbnci8F1OU2XicMuXaxZUMSz4ykxtMfMRi3AKXIOvFQrKXDl/dVClQnspvn/xhsA1+doh4DbbHKhC/bxeYqacNBrII89KTJ+T2ocqE9IjJ5wsOsgrz1LEjJPZhioS4h3RPeMQ5JlnLcJ+zIsqIR1IX8hqrzDy5Lwl1Oa9UaAKoLJSkt2jkXdehEJWnMQmVAGsASRsOEkyqAyI+ErAk8tofOFjLPC0T8IPPqZEWoYRH21BPSnkdpV8sEQZ8qIU8sJJohDTQ6SxJMSLkoS69+EyFMXHQNSgaExBpAXHxgMtiMpCXhJtApJcEOqZmnaAIOQuIZqXxBREsm1H2gC1QJ3jmU+LqLol6SSpxxDsldKGpEyXeNZylJiCSFDlIUzSTpJaEOcAF0QZLogyXBBluCDKcEGU4YIoo9JGuW3+bODUqlUSqPvFpgmE4YtCI1g/jfPT/3ijFf+Sz4MpJQgH1yQF/8yMSZiffC6mrCB4lKl1o7QmOiRK0G8bg8cQ9g4XQ0ZwO/mgrgwXRBkuiDJcEGW4IMpwQZThgijDBVFG8EqdF4aSOFVU1ut1tlgsstfXjwvhbrebDQaD7Ooq2saQEPArXulOlnJAELJkbDab7XA43FJFTxqJsR2Px5wiKfF39COTPK/6Wa1Wu8Y+JsIx6/V6nDIZwYKYGkNubm6y93f5NuDlcpnd3dn6mbkZQe7v73cNHMrDw0P29KRp+/B5zAzq19fXQd6xT7vdzuh2x3/VSvCgbsJDMJsqKwbATAzXsIAJQZ6fq88cL3GNOvCFoTJcEGWYEASDclUucY06MCEILfD4rDwIp1jAjCBVeni/3886HRv7MsyMIZNJ+bdaVEmrHiwMd1GaBIxGo6Mxq3M2m9X9buYPNDu4CKbT6dGGPzQEIefzKm/2uwjNFwQ8Pj4eFWHf8B0FNDva+w/Jw6cygUgNmBSkyZgURBKXshJMPMQ9RBkmBZH0fivR3UPcQ5TR2DEEWBxH3EOUYU6QkF5vcRxxD1GGOUFCer3FMcTs3l4jNHMb0GfCBVGGC6IMF0QZLogyXBBluCDKcEGU4YIoo4wgGl8PrpXgtgoWpJW/kAv/ZeZt94FzDLTNiNvKcRzHcRzHcRxHMVn2F2PX8gL1dlaqAAAAAElFTkSuQmCC"
}, function(t, e, n) {
    t.exports = n.p + "images/04184d3d7203cb3de14a0a404a84bf97-CHAR_Classic_Miniature.png"
}, function(t, e, n) {
    t.exports = n.p + "images/a5940ffe13ef294f944076aa73ef715a-CHAR_StickPlant_Miniature.png"
}, function(t, e, n) {
    t.exports = n.p + "images/42d5a0d39256b37cf6708139269f3c03-CHAR_Momie_Miniature.png"
}, function(t, e, n) {
    t.exports = n.p + "images/8fa30d5272fb19c67d5e279222f7b794-CHAR_Burger_Miniature.png"
}, function(t, e, n) {
    t.exports = n.p + "images/77faf6c9730991489534659f010dfa9b-CHAR_Cactus_Miniature.png"
}, function(t, e, n) {
    t.exports = n.p + "images/e05408b9bd045ed3e43a969146823019-CHAR_AngelStick_Miniature.png"
}, function(t, e, n) {
    t.exports = n.p + "images/a05fd91e4801f756cf9f0dcb4e5517f8-CHAR_Harry_Miniature.png"
}, function(t, e, n) {
    t.exports = n.p + "images/28506e14838e4d45f80d079fe1d2b110-CHAR_Unicorn_Miniature.png"
}, function(t, e, n) {
    t.exports = n.p + "images/2d47eed71e4381405080714e00ec6ad9-CHAR_EvilStick_Miniature.png"
}, function(t, e, n) {
    t.exports = n.p + "images/8e1269876513676187aec62722d9c236-CHAR_RainbowStick_Miniature.png"
}, function(t, e, n) {
    t.exports = n.p + "images/3f8e3b577ebcb0720aa183ffa614f39f-CHAR_StickOuech_Miniature.png"
}, function(t, e, n) {
    t.exports = n.p + "images/61f8a43a4891731ae3b68bb41346767f-CHAR_KingStick_Miniature.png"
}, function(t, e, n) {
    t.exports = n.p + "images/3a44cbb3a12ca246c94cc8a421f62a9a-CHAR_Banana_Miniature.png"
}, function(t, e, n) {
    t.exports = n.p + "images/c40aa8ce16dc9ca63a65736aa1123119-CHAR_Ninja_Miniature.png"
}, function(t, e, n) {
    t.exports = n.p + "images/95eae8386a9fa35681d9259a90cfe08e-CHAR_Sheep_Miniature.png"
}, function(t, e, n) {
    t.exports = n.p + "images/fcd3dbdb6348beb40a3122f7eeae8cbd-CHAR_Panda_Miniature.png"
}, function(t, e, n) {
    t.exports = n.p + "images/01434c96a36c2c33d787073809c13b8b-CHAR_SuperStick_Miniature.png"
}, function(t, e, n) {
    t.exports = n.p + "images/4ad6740ee1c9057ba7ed74460be8950a-CHAR_RobotMan_Miniature.png"
}, function(t, e, n) {
    t.exports = n.p + "images/601a0de398a32bd53366c6fee57ea531-CHAR_Dragon_Miniature.png"
}, function(t, e, n) {
    t.exports = n.p + "images/44c268a5c1540584f0d010b1c5ef9a7d-CHAR_TikiMan_Miniature.png"
}, function(t, e, n) {
    t.exports = n.p + "images/040f73e99e3473c54f2c9a9f1d88ec9f-CHAR_HotDog_Miniature.png"
}, function(t, e, n) {
    t.exports = n.p + "images/b5716296e3556e7ba7293148c682d305-CHAR_LemonMan_Miniature.png"
}, function(t, e, n) {
    t.exports = n.p + "images/fac3f46ae48d845f47e31b60b8ea3127-CHAR_Plant_Miniature.png"
}, function(t, e, n) {
    t.exports = n.p + "images/27f62cb7fcc15256d379f7e940d7fc35-titlepow2.png"
}, function(t, e) {
    t.exports = "data:image/png;base64,/9j/4AAQSkZJRgABAQEASABIAAD/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAEAAAAAAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCAUAAAEDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDw+iiiv3w/QAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKCeYKKKKCQop+wUVfKiLsWinYWimRzDaKfsFFaGfMLRTt9FPlZnzDcUVJRVk3CipKKfKzHmCijFFWSLuNFPop8rM7hRTt3tRVk8w2ipKKfKzPmCipMUVZnzBRRRVcpIUVJiiqIuwop2yiq5SOYbuoqTFFUZ8wUUUVXKZ8xJiiiiqJCinbKKrlIux1FO8uiqMribjRS7KK0M7jqKdu9qKfKyeYNlFOoqzPmCineXRVcpF0OoooqiAop3l0VXKZ3HUU7ZRVE8w2ineXRVcpF0OopdhoqjLmH0UUVoSFFO2UUGfMOop3l0VoZibjRS7KKDO46iiitBXQ/YKKWinyszugop3l0VZndDqKKKfKyAop3l0VZncdRTtlFPlYrobRTvLoqzO6HUU7ZRT5WZcw6iiirJuFFO2UVXKZXQ6ineXRVEH//2Q=="
}, function(t, e, n) {
    t.exports = n.p + "images/43373af2c85cc40390455124c8916b67-BumperLarge.png"
}, function(t) {
    t.exports = {
        frames: {
            "AN_Grap1_BumperLarge0001.png": {
                frame: {
                    x: 1,
                    y: 1,
                    w: 298,
                    h: 148
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 107,
                    y: 24,
                    w: 298,
                    h: 148
                },
                sourceSize: {
                    w: 512,
                    h: 256
                }
            },
            "AN_Grap1_BumperLarge0002.png": {
                frame: {
                    x: 1,
                    y: 151,
                    w: 289,
                    h: 118
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 107,
                    y: 64,
                    w: 289,
                    h: 118
                },
                sourceSize: {
                    w: 512,
                    h: 256
                }
            },
            "AN_Grap1_BumperLarge0003.png": {
                frame: {
                    x: 121,
                    y: 151,
                    w: 289,
                    h: 99
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 107,
                    y: 133,
                    w: 289,
                    h: 99
                },
                sourceSize: {
                    w: 512,
                    h: 256
                }
            },
            "AN_Grap1_BumperLarge0004.png": {
                frame: {
                    x: 222,
                    y: 151,
                    w: 289,
                    h: 79
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 107,
                    y: 116,
                    w: 289,
                    h: 79
                },
                sourceSize: {
                    w: 512,
                    h: 256
                }
            },
            "AN_Grap1_BumperLarge0005.png": {
                frame: {
                    x: 1,
                    y: 442,
                    w: 289,
                    h: 68
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 107,
                    y: 127,
                    w: 289,
                    h: 68
                },
                sourceSize: {
                    w: 512,
                    h: 256
                }
            }
        },
        animations: {
            AN_Grap1_BumperLarge: ["AN_Grap1_BumperLarge0001.png", "AN_Grap1_BumperLarge0002.png", "AN_Grap1_BumperLarge0003.png", "AN_Grap1_BumperLarge0004.png", "AN_Grap1_BumperLarge0005.png"]
        },
        meta: {
            app: "https://www.codeandweb.com/texturepacker",
            version: "1.0",
            image: "BumperLarge.png",
            format: "RGBA8888",
            size: {
                w: 512,
                h: 512
            },
            scale: "1",
            smartupdate: "$TexturePacker:SmartUpdate:af42770b6235e059ec0191895ee89693:b2e89c7355bcdaca7e03849c9c7c8348:6f5f9da7d046efa3243906aeb729a0f3$"
        }
    }
}, function(t, e) {
    t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAABd2lDQ1BIRCA3MDktQQAAKM+t0TFLw0AUB/B/a7VKC4qIdhA5UMQhkVqH2uqStmArDqUqqFuapq2QtCG5Uv0Abi46iC6K+hVEFwdHcdBBEITiZxAKBZES75Ihi+jig4TfPR7vHvcAP5UNQwsA0GvULCynyObWNgm2EEIYw0hiTFYsQ8rnV/Fz+IDOK/8DLyLvVc59vi3tN8+v+1ZOJ5JUwO8RKqmWwtr0MyslS9GZNWZBMUzKfMIsNqnB/cA8YrIBmVvcFdcf3EXH/oBTs15IM0eYh4quZ7grrhe4lapcYs7yu9wZnBjIZkg8mhAl/HPoWkPx3gxhtbaxxudg3ziyyIAgjigSECFRdZfywnTd2DN3KlVKJPayKknXdaNBVVMguZoyK5BYdC7K6/jO3NbtgtPdN/rs5eoXQGIS6DnwcsVj4PYOiDx6uakzYHARuHkyZFP2NtwJ/HW2yvMx1+EU0Ptu2+1pIHgEdA9t++vStrtX7H62s3vtGyaoaeFFp28gAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF12lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTktMDctMDRUMTQ6Mzk6MzErMDI6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE5LTA3LTA0VDE0OjQxOjU0KzAyOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDE5LTA3LTA0VDE0OjQxOjU0KzAyOjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpiZGFmOTM4ZC1kNjExLTQ5YmQtYWM1YS03YzRjNDgxYzhjZmYiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo1Y2I2ZjI5ZS1mYzcxLThkNGQtYjIwMC04ZGZlMzdkZWY2M2QiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpiYWQ1MGE0MS1hMGYxLTRiMDMtYTg3NS1kYzI3NDlhNzAwMTUiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmJhZDUwYTQxLWEwZjEtNGIwMy1hODc1LWRjMjc0OWE3MDAxNSIgc3RFdnQ6d2hlbj0iMjAxOS0wNy0wNFQxNDozOTozMSswMjowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmJkYWY5MzhkLWQ2MTEtNDliZC1hYzVhLTdjNGM0ODFjOGNmZiIgc3RFdnQ6d2hlbj0iMjAxOS0wNy0wNFQxNDo0MTo1NCswMjowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRv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"
}, function(t, e) {
    t.exports = "data:image/png;base64,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"
}, function(t, e) {
    t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAP5klEQVR4nO3dT4sbZ5oA8KfXISEGUx0MwyYXaWkI5CQNc8lNnZ1LbuocZy7yKeSmhHwAObe9TNr7CeRcMswlir/Ayn3ck+RTsMFIJjBhB0K1yeCsg0PtodtZx6kqqVtSSa3+/eClTb1S6ZWK5Hnq/VcRAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMBlsbPuBgArUYuIekQ0I2L3hb/zuHv6dxwR04i4t9ymAZtAAgDboRER+y+UeYP9vO7GSUJw97Q8XvL5AYA5tSOiHxFpRGQVl1FEdCMiWfm3BACiFhG9iJhE9UG/qAwjorPKLw0Al1UrIgax/mBfVtI4SU70CgDAglpxcoe97uB+1kTA8ABsOJMAYTPVIuJWRByc+wS1WjSbzWg2m7G7uxvNZnOu943H4zg+Po7pdBrj8Tju3Tv3IoDjiLgREXfOewIAuEy6cY6JfY1GI+v1etlwOMyWbTgcZr1eL2u1WufpERjFSUIDAOSoxRm7+xuNRtbv97M0TZce9IukaZoNBoOs3W6fdVigU91PCQAXQyvOcNff6XSy0WhUWdAvMplMsl6vlyVJMm8iMAxzAwAgIiIOY47gmSRJ1u12K73bn1eapmdJBCZxsnERAFxKScy5tG9TA//L0jTNOp3OvEMCkgAALp0kTibHlQbKWq22EV39ZzUajbJGozFPImBeAACXyszg3+v11h3HF3Z4eCgJAIBT/Zgx1j8YDNYdu5dmOBxmtVrNcAAAl1pp8G80GhdirP+s0jSdtYeAJACArdWLGUv7tt2MCYJp2DAIgC3TiUse/J+bkQSMwj4BAGyJRpRs8tNoNNYdkyuVpumsFQLDdVwkAFim0uV+2zrmP8scSUBvHRcLAJalcNJfkiTZZDJZdyxemzRNZ60OaK3ligHAgtpREvwv4gY/yzYajcq2D56E+QAAXDBJnASw3ODW7/fXHXs3xmAwKOsF6K/j4gHAeRV2/bfb7XXH3I3T7XYNBQBw4TWipOv/Mk76m0fJfACrAgC4EIZRkAAMh8N1x9mNNRqNynoBOmu5kgAwp1YUBLFWq7XuGLvxSjYJmqzncgLAfArH/i/zkr95pWlatipALwAs0b+suwGwRWoRcSOvotPpRL1er7QxF9Hu7m58/PHHRdU3K2wKAMzN3f8S6AWAaryy7gbAFjnIO7gJd//T6TRu374d0+k0ptNp7mv29/ejXq/HwcFB7O7uVtvAFzzvBfjss8/yqm9ExBfVtggAihXu+reuu//JZJL1er1Z2+3mlk6ns9YVCzN6AWrVXVYAKJfb/b+Omf9pmmaHh4dlAXTu0mg01pYIlKwI6FZ0TQFgptzH/Va95e9oNJr1lL1zlW63W+n3yLIsGw6HRe0ZVXA9AWCmwu7/Knf96/f7Sw/8L5ZWq1X5LoaGAQDYZIeRE6Sq3PN/xlP1llaqfo5ByTBAZ8XXFLbelXU3ALbAf0TEv7588KOPPop333135R9+fHwczWYzHj9+PPO1jddfj/eTJA52d2P/2rVfSv211yIi4n+ePSt9//3792M6ncbBQe6Ch5X429/+lnf4OCLuVNYI2EI7624AbIEs7+BoNIpms7nyD9/f34+jo6PS13SuX4/em2/+EuiLTJ8+jc+++y6++P770tf1+/24cePGWZt6ZsfHx/HGG2/kVU0j4t9W3gDYYhIAWEwrIu6+fDBJkjg+Pl75h9+6dSs++eSTwvraq6/GYG8vmlevnum84ydP4oOHD+PRTz/l1idJEuPxuJL9DZrNZty7dy+vajciZnd7ALlsBQyLqecdrOLO//j4OG7evFlYX3v11Ri98040f/e7iD/9KeLDD0/+zqF59WqM3nknaq++mlv/+PHjSnoAIqIsyVj9jwxbTAIAi6nnHawiAbh9+3bhuH9y5UoM9vZi949/jPjyy9j59NPY+fDD2Pn004i3357r/LuvvBKDvb1IruRPFTo6Ooq7d++et/lzK/ktJQCwAAkALCY3CFXRNX7r1q3CusHe3smd/82bsfPWW7+q27l2LXYiflWKNK9ejX7Jdylrw7KUJADr268YtoAEABaTG4RW3QMwHo/j0aNHuXWd69dj/9q1iD//OXauXfvtC+7f/82hskTgYHc3Otev59bduXNn5XMdSp5LsL/SD4YtJwGAxdTX8aFff/11YV3vzTdP/vGHP/y28ssvI/75z8L3FiUBv5zzjG1ZhnU/SAm2lQQAFlPPO7i/v7/SDy0ae28nyf8v9Xv5Tv8vf4n4/POZ585LAuqvvRaN118/U1uWxSRAWA2PA4YLqOiRvr9a7vf555H99a8Rb70VO3//e8R33y30mQe7u3Hvxx/nbksFzAGABdgHABaTuwlQluUeXpqdnfz/dL/a24uDnDHz8/yH/vI3uPvDD/HvDx7kv3ZN3zf8PwzOzRAAbJHdnCV7IiSQRwIAAJeQBAC23LI6549//nlJZwI2gQQALqBWq5V7/OiHH5Zy/ryk4d6TJ7mvbTQaS/lMoFoSAFjMeB0fWrQ0blrw8J5lGBckACUb9SxFyUZDa/ntYVtIAGAxudFpPF5tbCraZ+CL77+P42fPfnP8LMMAea+dPn0adwqeO7DqPQ9KfsvVP24RtpgEAFZg1dvjlgXdzwrW+8+TBBS9puicEREHBwdznBnYNBIAWMzdvIOrTgDq9Xrh2Pt//uMfhd31ZUlAUd34yZP44vvvc+tqtdrKn3tQstNgYQUwmwQAFrOWIYCIiI8//riw7oOHD3OHAiJOAn1eyXP87Fl88PBh4efcvHlzvsYuoCSZMgQAC5AAwGJyI30VCcCNGzeiVqvl1j366ad478GDmD59eu7zT58+jfcePIhHBRMLa7VaJd3/Jb+lSYCwAAkALCY3CFW1P/7t27cL6+79+GP8/ptvCocDyoyfPInff/NN7t7/L372qlcAREQcHR0VVUkAYAESAFjM44iYvnzw3r17K58HEHEyGbDb7RbWP/7553jvwYP45NtvC4cEXnT87Fl88u238d6DB/G4ZOOfTqez8tn/EaV3/9M4+e0BYG36kTOsPhgMsqo0Go2iof1fSnLlSta5fj37am8v+6+33/5V+WpvL+tcv54lV67MPE+j0cjSNK3kex0eHha1o1/RtQWAQt3ICVLdbreSIJllWZamadZqtWYG70VLlcE/y7Ks3W4XtaW42wMAKlKLnCBVq9UqC5TPdTqdlQX/TqdT6XdJ07SsPfmzHwGgYqPICVSj0ajSoJllWdbr9ZYe/KvszXiu3+8XtWdSwfUEgLkcxoYEzizLsuFwmNVqtYUDf5Iklc5leFHJkMZhRdcUAGZqREEAXad+v3+uRCBJkqzX662t3ZPJpKx9Hj8IwEbJHQbo9/trC6TPjUajrNfrlU4UTJIk63Q6G9HekrkMuv8B2Did2JDJgBfZjLt/s/8B2DhJRKSRE7iGw+G64+qFUXL3n57+xgCwcXqhF+DcRqNR2d1/bz2XFABmK+wF2ISx9U1XMkfB3T8AGy+3FyBJkmwymaw7xm6swWDg7h+AC62wF6Ddbq87zm6kNE2zJEnc/UOFrqy7AbCFnkbE/0bE+y9X3L9/P+r1ejSbzepbtcHef//9uH//flH1RxHx3xU2BwAWMoyCoYB1bBG8qWZsXTxaz6UDgPOrRUFgq/qpepuqZL//513/dv0D4ELKfVRwnCYBl9loNCob9zfxD4ALbxAFQa7qR+xuijmC/3AtVwoAliiJkz3sJQHZXMF/Emb9A7AlGlGwNDAislardSnmBPT7/VnB37g/AFunFcWBb+snBs6Y8Pe8tKq/LACwep2YkQRs4xLBOYN/p/rLAQDVKU0CkiTZqucGdLtdwR8ATpXOCYiIrNfrXeghgdFolLXb7VmB35g/AJfOzCSgVqtdyCGBOSb7Cf4AXGozk4A4XSp4EXoD5rzrF/wBIE7WvI9iRtBMkiTr9XrrjvG50jSdd6w/O/2u1vkDQJwExH7MEUBrtVrW6/WyyWSy7rifTSaTrNvtztPd/7wMQvAHgN9oxxxDAnHaI9But7PBYFB54B8MBlm73T5L4E/D3v4AUKoWBY8SLiq1Wi3rdDrZcDhcadDvdDpZrVabu12nZXj6nYANsrPuBgCF2hFxOyJ2z/rGVqsVzWYz6vX6L3/r9fpc751OpzGdTmM8Hsd4PI7pdBpHR0dnbUJExHFE3IqIz87zZgC4zJI4eaTwXMMCG1LSiDgMY/0AsLBanATVTU4E0jiZyKi7HwBWoBNzLBussEzipJfCHT8AVKARJ3fck1jP3f4gPL0PLiyTAGE7tCJi/4WyCuOIuHta7qzoM4CKSABg+yQR0Twt9Rf+1ud8//S0jONkJv/d038/XmIbAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAivwf0E8Slpu0drUAAAAASUVORK5CYII="
}, function(t, e) {
    t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAP0lEQVRYhe3VMQoAMQwDQTnc/7/sPEKBa0b9wuDGk2RTbLfKc6r6wQAAAAAAAAC+9p/PTNX/fgEAAAAAAACAC8kBBz5A2Qw/AAAAAElFTkSuQmCC"
}, function(t, e) {
    t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAMSURBVBhXY/j//z8ABf4C/qc1gYQAAAAASUVORK5CYII="
}, function(t, e) {
    t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAJFSURBVHhe7ZuBUcIwFIYpDCAbgBPIJriBuoFu4Aa6gbiBI7gBOgE6gTpAwf+Xx51XCyZtwrXJ/929SwJpc/kuta+xDIQQQgghhBBCCCGEEEK4UVjZKzabzRmK8bb1w2dRFK9WF/uAuPl6vV4iNjWx5PfWVVQpy/KuRtqfYD87ROzAyrqok7Uv2N8OFZAxgZSPqqT/QhIN10u3LiQRQMSqKsYnYkvsfBpDCVZtDFKcS8SjNYMytDJpsAoXsVZiFgJJLInZCCQxJGYlkISWmJ1AElJilgJJKInZCiQhJLbKAzH4bltpahEcjHFr1Wi0yRMbCcSk5jax2faT/tNUordAPptioGtrJkUTiV4C+fcCsbBmkvhKdBYIcRPEC6q/t9JThP8emCHerX0Q57swHup52aYuj4xtrk44r0CcdIUiyp22g7wNh8NTqx/ER2DrbaU+AYFObrJOpEPgI/DNyhxwnquzQNyBn62aPD5z9U1jsliFSGGmwdMYnhAC762ZLJyjqzzivAJ3pPwoB3mL0Wh0ZU0nvO/CGOAGAi9RTepybiKPeK/AHRjwBMU5ImpyjXGib2c1lUcaCzwWsRP4NvJI1ol0W3kkW4Eh5JEsBYaSR7ITGFIeyUpgaHkkG4Ex5JEsBMaSR/ogsNUTT0x5pPMCIaDxNlpseb0AEviSee3ru4eiLMsHO4XwfdFc8mpwlch+doiogsuZP7jZ99b+it9b16PR+d2YKpBUt43GO/VTURRf26YQQgghhBBCCCGEEEKIjjEYfAP1gM+qU/LzAwAAAABJRU5ErkJggg=="
}, function(t, e) {
    t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAADkElEQVR4nO3d4W3aQBjG8edYIGxQNigbhE7QbhAyQRkhG5QN4k5QRqAbkAlKNnAmePvBZ2SMARuIjf3+fxISMcScdI/f89mWTgIAAAAAAAAAAAAAAAAAAADQb+Gzdmxmj5Im8ZUbS5p+1m8OQCppU9q2lrQNIbx/xg/eLABm9kXSXNIsvnBbW2VhWIcQft9qp1cHwMy+S1qITm9TKmkpKbm2MlwcADN7kvSi/RKP9iWSXi4NQuMAmNmDpJU44u9JKmlxydDQKADxqE+a/ghas5E0CyF81P2HUd0vmtkv0fn3bippY2Zf6/5DrQpgZq/KzvDRD6mySvB27otnA0DZ761aw8HJAND5vXc2BEcDEMeR8lUp9E8SQng+9mFlAOJUbyPm+EMxPzZFPBaAP5J+fGqT0KZU0rTqYtHBNDCO+3T+sIx15FzuoAKY2T9R+odqFkL4W9ywVwHM7Kfo/CF7KW/YqwAc/S7sVYFdBYhj/6SLFqFV8+IfxSFg1moz0JW9E/zRsQ8wWOP4EI+kGID4/N64syahbbP8zai8AS7sHswdlTfAhVn+Jg/ApJNmoDPxfg8VwLGp1OCRMAwTAXCOADhHAJwjAM4RAOcIgHMEwDkC4BwBcI4AOEcAnCMAzhEA5wiAcwTAOQLgHAFwjgA4RwCcIwDOEQDnCIBzBMA5AuAcAXCOADhHAJwjAM4RAOcIgHMEwDkC4BwBcI4AOEcAnCMAzhEA5wiAcwTAuTwA6y4bgfbli0bkAUg7bAvat+vvPAAsEOnLrr8ZAnw6CAAVwJd1/mYkSXFx4VVXrUHr1vmbUdVGDNqquJp4MQCJmA14sFfpdwGIqUjabg1atS2vIl5eOfRB0lasIDZUB8vI710KjlVg2WqT0JaDo1+qvhewFNPCIZpXbTwIQKwClV9Gby3Ly8bnKu8GhhDeRAiGYqOKZeNz4dgHkmRmryIIfZZKmhTn/WUnnwcIITyLqWFfpZJmpzpfqvFASAzB4latQis2kqZxKD/p5BBQZGZPohr0wUY1jvxc7UfC4hxyruxCEe7TSg06X2pQAXLxauFKLDl/T1JJi6oLPec0fig0hPARQvgmqsG9SJSN9407X7qgAhTFajBXdpI4uWZfaCyRlBy7wFPXVQEoMrNHZWGY32qfOLBVdqk+aTLOn3KzABTFMMyUrVHPncXrbOJrHUJ477oxAAAAAAAAAAAAAAAAuHP/AV7pyirlIjGbAAAAAElFTkSuQmCC"
}, function(t, e, n) {
    t.exports = n.p + "images/b6a61ef922faf37de190abe915c17dec-FX_Spawn.png"
}, function(t) {
    t.exports = {
        frames: {
            "FX_Spawn0.png": {
                frame: {
                    x: 409,
                    y: 1,
                    w: 102,
                    h: 101
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 64,
                    y: 65,
                    w: 102,
                    h: 101
                },
                sourceSize: {
                    w: 230,
                    h: 232
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "FX_Spawn1.png": {
                frame: {
                    x: 280,
                    y: 141,
                    w: 126,
                    h: 126
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 52,
                    y: 52,
                    w: 126,
                    h: 126
                },
                sourceSize: {
                    w: 230,
                    h: 232
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "FX_Spawn2.png": {
                frame: {
                    x: 277,
                    y: 285,
                    w: 130,
                    h: 130
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 50,
                    y: 50,
                    w: 130,
                    h: 130
                },
                sourceSize: {
                    w: 230,
                    h: 232
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "FX_Spawn3.png": {
                frame: {
                    x: 141,
                    y: 285,
                    w: 134,
                    h: 134
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 48,
                    y: 48,
                    w: 134,
                    h: 134
                },
                sourceSize: {
                    w: 230,
                    h: 232
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "FX_Spawn4.png": {
                frame: {
                    x: 141,
                    y: 145,
                    w: 138,
                    h: 137
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 46,
                    y: 47,
                    w: 138,
                    h: 137
                },
                sourceSize: {
                    w: 230,
                    h: 232
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "FX_Spawn5.png": {
                frame: {
                    x: 1,
                    y: 145,
                    w: 138,
                    h: 138
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 46,
                    y: 46,
                    w: 138,
                    h: 138
                },
                sourceSize: {
                    w: 230,
                    h: 232
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "FX_Spawn6.png": {
                frame: {
                    x: 1,
                    y: 285,
                    w: 138,
                    h: 138
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 46,
                    y: 46,
                    w: 138,
                    h: 138
                },
                sourceSize: {
                    w: 230,
                    h: 232
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "FX_Spawn7.png": {
                frame: {
                    x: 1,
                    y: 1,
                    w: 142,
                    h: 142
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 44,
                    y: 44,
                    w: 142,
                    h: 142
                },
                sourceSize: {
                    w: 230,
                    h: 232
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "FX_Spawn8.png": {
                frame: {
                    x: 145,
                    y: 1,
                    w: 138,
                    h: 137
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 46,
                    y: 45,
                    w: 138,
                    h: 137
                },
                sourceSize: {
                    w: 230,
                    h: 232
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "FX_Spawn9.png": {
                frame: {
                    x: 1,
                    y: 425,
                    w: 35,
                    h: 33
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 98,
                    y: 97,
                    w: 35,
                    h: 33
                },
                sourceSize: {
                    w: 230,
                    h: 232
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "FX_Spawn10.png": {
                frame: {
                    x: 1,
                    y: 462,
                    w: 18,
                    h: 17
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 106,
                    y: 105,
                    w: 18,
                    h: 17
                },
                sourceSize: {
                    w: 230,
                    h: 232
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "FX_Spawn11.png": {
                frame: {
                    x: 1,
                    y: 482,
                    w: 18,
                    h: 17
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 106,
                    y: 105,
                    w: 18,
                    h: 17
                },
                sourceSize: {
                    w: 230,
                    h: 232
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            }
        },
        animations: {
            FX_Spawn: ["FX_Spawn0.png", "FX_Spawn1.png", "FX_Spawn2.png", "FX_Spawn3.png", "FX_Spawn4.png", "FX_Spawn5.png", "FX_Spawn6.png", "FX_Spawn7.png", "FX_Spawn8.png", "FX_Spawn9.png", "FX_Spawn10.png", "FX_Spawn11.png"]
        },
        meta: {
            app: "https://www.codeandweb.com/texturepacker",
            version: "1.0",
            image: "FX_Spawn.png",
            format: "RGBA8888",
            size: {
                w: 512,
                h: 512
            },
            scale: "0.9",
            smartupdate: "$TexturePacker:SmartUpdate:44932692ac093b888582b49c07a9d87d:1963e090ffb365b35fbb53ec1a9a12c3:226385ad2ec5f3823e5a224f072dea7f$"
        }
    }
}, function(t, e, n) {
    t.exports = n.p + "images/50a9bb3e272fc5be76bc8968f704e959-FinishPlatform.png"
}, function(t) {
    t.exports = {
        frames: {
            "AN_Grap1_FinishPlatform0001.png": {
                frame: {
                    x: 1,
                    y: 1,
                    w: 401,
                    h: 90
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 30,
                    y: 70,
                    w: 401,
                    h: 90
                },
                sourceSize: {
                    w: 461,
                    h: 230
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "AN_Grap1_FinishPlatform0002.png": {
                frame: {
                    x: 404,
                    y: 1,
                    w: 401,
                    h: 90
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 30,
                    y: 70,
                    w: 401,
                    h: 90
                },
                sourceSize: {
                    w: 461,
                    h: 230
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "AN_Grap1_FinishPlatform0003.png": {
                frame: {
                    x: 1,
                    y: 93,
                    w: 401,
                    h: 90
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 30,
                    y: 70,
                    w: 401,
                    h: 90
                },
                sourceSize: {
                    w: 461,
                    h: 230
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "AN_Grap1_FinishPlatform0004.png": {
                frame: {
                    x: 1,
                    y: 185,
                    w: 401,
                    h: 90
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 30,
                    y: 70,
                    w: 401,
                    h: 90
                },
                sourceSize: {
                    w: 461,
                    h: 230
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "AN_Grap1_FinishPlatform0005.png": {
                frame: {
                    x: 1,
                    y: 277,
                    w: 401,
                    h: 90
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 30,
                    y: 70,
                    w: 401,
                    h: 90
                },
                sourceSize: {
                    w: 461,
                    h: 230
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "AN_Grap1_FinishPlatform0006.png": {
                frame: {
                    x: 1,
                    y: 369,
                    w: 401,
                    h: 90
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 30,
                    y: 70,
                    w: 401,
                    h: 90
                },
                sourceSize: {
                    w: 461,
                    h: 230
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "AN_Grap1_FinishPlatform0007.png": {
                frame: {
                    x: 404,
                    y: 404,
                    w: 401,
                    h: 90
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 30,
                    y: 70,
                    w: 401,
                    h: 90
                },
                sourceSize: {
                    w: 461,
                    h: 230
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "AN_Grap1_FinishPlatform0008.png": {
                frame: {
                    x: 1,
                    y: 461,
                    w: 401,
                    h: 90
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 30,
                    y: 70,
                    w: 401,
                    h: 90
                },
                sourceSize: {
                    w: 461,
                    h: 230
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "AN_Grap1_FinishPlatform0009.png": {
                frame: {
                    x: 1,
                    y: 553,
                    w: 401,
                    h: 90
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 30,
                    y: 70,
                    w: 401,
                    h: 90
                },
                sourceSize: {
                    w: 461,
                    h: 230
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "AN_Grap1_FinishPlatform0010.png": {
                frame: {
                    x: 1,
                    y: 645,
                    w: 401,
                    h: 90
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 30,
                    y: 70,
                    w: 401,
                    h: 90
                },
                sourceSize: {
                    w: 461,
                    h: 230
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "AN_Grap1_FinishPlatform0011.png": {
                frame: {
                    x: 1,
                    y: 1,
                    w: 401,
                    h: 90
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 30,
                    y: 70,
                    w: 401,
                    h: 90
                },
                sourceSize: {
                    w: 461,
                    h: 230
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            }
        },
        animations: {
            AN_Grap1_FinishPlatform: ["AN_Grap1_FinishPlatform0001.png", "AN_Grap1_FinishPlatform0002.png", "AN_Grap1_FinishPlatform0003.png", "AN_Grap1_FinishPlatform0004.png", "AN_Grap1_FinishPlatform0005.png", "AN_Grap1_FinishPlatform0006.png", "AN_Grap1_FinishPlatform0007.png", "AN_Grap1_FinishPlatform0008.png", "AN_Grap1_FinishPlatform0009.png", "AN_Grap1_FinishPlatform0010.png", "AN_Grap1_FinishPlatform0011.png"]
        },
        meta: {
            app: "https://www.codeandweb.com/texturepacker",
            version: "1.0",
            image: "FinishPlatform.png",
            format: "RGBA8888",
            size: {
                w: 512,
                h: 1024
            },
            scale: "0.9",
            smartupdate: "$TexturePacker:SmartUpdate:559aeaf7c71f2b3a700807c357268d12:f538649b2256b93d6a79b0760f45a380:ba6f222996ca712253595af3802d04ac$"
        }
    }
}, function(t, e) {
    t.exports = "data:image/png;base64,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"
}, function(t, e) {
    t.exports = "data:image/png;base64,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"
}, function(t, e) {
    t.exports = "data:image/png;base64,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"
}, function(t, e) {
    t.exports = "data:image/png;base64,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"
}, function(t, e) {
    t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAMp0lEQVR4nO3dPXYcaRUG4NeQTNYOydo7kEOyFisQIZmGFRhWIHag2YFmB4YMImlCIjklkrwC2RlEIiiZY3nMuPVTfb/q+zzn3KNo/P30mXPf+qq6OgEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPi6F9UTAJ7VOsmrzypJDh/x71zc/b3+rN4/elbAcAQAWKZVktd3dZip2b/ewbjv7uo6U0h4l+TjDsYFgLY2SU6TXCa5Hagu7+a1mW/pANDLUZKzJDepb/Tb1M3dfI/m2AwA2GcHma6ol9L0vxUGnAwAwC/YJDlPfeOeoy6THD/fVgHA8m2SXKW+Se+irpK8eZ5tA4BlWmd/r/i3CQKbp28hACzHKslJ6pvwCPU2UxACgL12lD7H/Q+pk6dsKgCM7DT1jXbkusz0DQgA2AvrjPfynlHrJr4tAMAe2GT53+evqNPHbDYAjOA49Y10yXWe6YFJAFgMzf956jJCAAALcZL6xrlPdRUhAIDBvUl9w9zHchIAwLCOU98o97mEAACGc5T6BtmhLrf9QIBf9uvqCcAeWCf5e5LvqifSwG+SvEzyj+qJwNIJAPA0q0zN/1XxPDr5bZIPSf5ZPREA+jpL/bF41/LaYABKuO9fW1fxUCA8mlsA8DirJBdx37/Sy0zPBPyteiIA9HGW+itgNdXmG58V8BUvqicAC7TJdPXPGD5kegjzY/E8YFHcAoCHu8h0/MwYvkvy7yQ/VU8EgP11kvojb/X1Wv/C5wZ8wS0A2N4qyXVc/Y/qIsnvqicBS/Gr6gnAgvwpmv/IDuOBQNiaEwDY3k2WFQA+JHl3Vx+y/YOLh5nW+fqulrTmH5P8sXoSAOyPdervcW9TbzP9JPFzviXv4O7fPB9gfd+qq2dcNwAM/b3/q0wNehdvxVtlehDyZofre2gdzbZ6AFpZp76pfa1uMjXjitfhjhwEzmdcNwCNnKa+qX1ZpxnjPfirjHk6splz0QD0MNJV7k3G/BW8o4y1T2/nXS4A++449c3sU11m7JfdHGSsEDDyXgEwuPPUN7JPzX+EI/9vWWeaa/V+3WZ6RgEAHmyd+ia2pOb/yTpjnARczb1QAPbTm9Q3sZssq/l/cpD6vbuNrwQC8AgjHGWP+MDfto5Tv39ns68SgL2yTn3zOpl9lfN7m9o9vJl/iQDsk+rj//P5l7gTq9Q/D+A2AHyFXwOErzssHv8vxeM/l49Jfiiew++LxwdgQSqvWK92sL5dWmVak/0EYGib1AaA4/mXuHPHqd3T9fxLBGDpTuJqdQ6VzwLsY6iCJ/EMAPzc68Kxfywce26VzwIcFo4NwEJcxVH1HNap29fLHawPgAVbRZOaU+XLlYDPuAUA9zn+n9ePhWNvCseG4QgAcF9lAPhr4di7UrnGV4Vjw3AEALjvZdG410neF429S+8zrbXCq6JxYUgCANxXdQLwrmjcClVrrTzdgeEIAHBf1QmAADC/qs8WhiQAwH1VTeKiaNwKF9UTAAQA+JJj4v11WD0BGMmL6gnAYKq+L97t/0X7DMWcAABAQwIAADQkAABAQwIAADQkAABAQwIAADQkAABAQwIAADQkAABAQwIAADQkAABAQwIAADQkAABAQwIAADQkAABAQwIAADQkAABAQwIAADQkAABAQwIAADQkAABAQwIAADQkAABAQwIAADQkAABAQwIAADQkAABAQwIAADQkAABAQwIAADQkAABAQwIAADQkAABAQwIAADQkAABAQwIAADQkAABAQwIAADQkAABAQwIAADQkAABAQwIAADQkAABAQwIAADQkAABAQwIAADQkAABAQwIAADQkAABAQwIAADQkAABAQwIAADQkAABAQwIAADQkAABAQwIAADQkAABAQwIAADQkAABAQwIAADQkAABAQwIAADQkAABAQwIAADQkAABAQwIAADQkAABAQwIAADQkAABAQwIAADQkAABAQwIAADQkAABAQwIAADQkAABAQwIAADQkAABAQwIAADQkAABAQwIAADQkAABAQwIAADQkAABAQwIAADQkAABAQwIAADQkAABAQwIAADQkAABAQwIAADQkAABAQwIAADQkAABAQwIAADQkAABAQwIAADQkAABAQwIAADQkAABAQwIAADQkAABAQwIAADQkAABAQwIAADQkAABAQwIAADQkAABAQwIAADQkAABAQwIAADQkAABAQwIAADQkAABAQwIAADQkAABAQwIAADQkAABAQwIAADQkAABAQwIAADQkAABAQwIAADQkAABAQwIAADQkAABAQwIAjGFTPYEdqlrrh6JxYUgCANx3UT0BZvOuegIwEgEAxnBYPYEdOqyeACAAwCheVU9gh14VjXtdNC4MSQCA+y6Kxn1dNG6Fw6Jxr4vGhSEJAHBf1YNir5OsisbepXWcAMAQBAC4r/JBsd8Xjr0rh4VjXxeODcMRAOC+68KxDwvH3pXKkPNT4dgALMBNktuCusl+3wZYpWZfb5Nc7WB9sChOAODnqm4DvMx+3wb4vnDsi8KxYUgCAPzcReHY3xeOPbc/FY7tJUAAfNNR6o6qb5MczL/EnbOnAAyv8l71bZKz+Ze4U6sk56nbz5v5lwjAvrhMbQg4mX+JO1PZ/PcxUAEwo5PUNq19+UbAJrX7eJvp9gMAbOUg9Y3rdPZVzq/6JOU2+xGkANihq9Q3r83sq5zPSer37+3sqwRg75ymvoEt9VbACCcot0mO514oAPtnlCZ2mWWFgHXq3qb4ZXgCgEe5Sn0ju830JP0SQsA64+zZ2cxrBWCPvUl9I1tKCBip+d/Gy38AeIJ16hvZ53V5N6fRbDLGsf/nYQkAnuQs9Q3tyzqedcXbW2WMp/1H3R8AFmyT+ob2tbpM7TH3UcY68v9UV3MuGoBezlPf2P5fnWe37wvYZMzG/6mO51s6AN0cp76xbXPle5J5TgU2d//2yI3/0x4AW3hRPQFYkKskr6onsaXrJO+SXNz9vU7yfsv/9iDJyySHSV7f/X35vNObzQ9J/lw9CVgCAQC2t8nUUBnTh0wB7WPxPGARflU9AViQnyIAjOyHaP6wNScA8DBOAcbk6h8eyAkAPIxTgDG5+ocHcgIAD7fK9FDdUh6M23cXSX5XPQlYml9XTwAW6D9Jvsv0dDz1vs/233AAgCc7T/333rvXyTc/JQB4ZuuM9QM43ery2x8RAMzjKPWNsGPdZMxfRYTF8AwAPM2/Mj0M+NvqiTTzhyT/rJ4EAFym/qq4S51u+ZkAwOxWGf+Hcvah3m77gQDArhzEQ4Fz1mWmoAUAwxECNH8AmhICNH8AmhICNH8AmlrHtwOeUufR/AFYqFWEgMfU2WM2GwBGc5r6prqUevPIPQaAIR3FcwG/VFeZnp0AgL2zil8R/FqdPWVTAWApjuLNgbeZno/YPHEvAWBRVpl+z77jbYGbJMdP30IAWK51piPw6qa8qzqJr/cBwP8cZAoC+3gicJOp8a+fbbcAYM98ujVwlfrG/dS6zPS1Plf8APAAR1neqcBVpvce+EofADyDTabGOuKbBc8zXelr+rAQL6onADzKOsnruzq8q135kORdkovP/n7c4fjAMxAAYH+sk7zKFAZeZgoHyePDwcXd33dJrj/7+/6R/x4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACwAP8Fo6OEf4axxXgAAAAASUVORK5CYII="
}, function(t, e) {
    t.exports = "data:image/png;base64,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"
}, function(t, e) {
    t.exports = "data:image/png;base64,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"
}, function(t) {
    t.exports = {
        A_Wall45: [{
            shape: [316, 323, 301, 323, 190, 212, 207, 188, 212, 190, 322, 300, 324, 305, 323, 315]
        }, {
            shape: [200, 188, 207, 188, 190, 212, 188, 207, 188, 199, 193, 191]
        }, {
            shape: [301, 323, 316, 323, 313, 324, 304, 324]
        }],
        A_WallCurve: [{
            shape: [406, 128, 349, 132, 350, 102, 402, 98, 409, 101, 414, 117]
        }, {
            shape: [99, 403, 105, 329, 129, 376, 129, 402, 121, 413, 109, 414]
        }, {
            shape: [105, 329, 139, 323, 129, 376]
        }, {
            shape: [105, 329, 133, 255, 154, 283, 139, 323]
        }, {
            shape: [133, 255, 174, 198, 173, 248, 154, 283]
        }, {
            shape: [174, 198, 225, 152, 215, 200, 173, 248]
        }, {
            shape: [225, 152, 282, 121, 259, 166, 215, 200]
        }, {
            shape: [282, 121, 350, 102, 302, 145, 259, 166]
        }, {
            shape: [350, 102, 349, 132, 302, 145]
        }],
        A_WallAngle: [{
            shape: [270, 292, 264, 286, 263, 249, 294, 244, 294, 282, 286, 293]
        }, {
            shape: [227, 220, 268, 218, 279, 221, 294, 244, 263, 249, 229, 249, 219, 241, 218, 229]
        }],
        A_WallCircleChelou: [{
            shape: [196, 327, 196, 185, 206, 159, 307, 161, 315, 186, 287, 370, 243, 376, 210, 358]
        }, {
            shape: [307, 161, 206, 159, 238, 138, 273, 137]
        }, {
            shape: [287, 370, 315, 186, 316, 326, 308, 349]
        }],
        A_WallTransition: [{
            shape: [334, 309, 268, 249, 295, 230, 350, 283, 352, 302]
        }, {
            shape: [167, 205, 231, 204, 263, 211, 216, 234, 169, 234, 159, 226, 158, 214]
        }, {
            shape: [263, 211, 295, 230, 268, 249, 216, 234]
        }],
        C_Wall: [{
            shape: [336, 271, 176, 271, 166, 253, 174, 242, 336, 241, 346, 259]
        }]
    }
}, function(t, e, n) {
    t.exports = n.p + "images/3e903b257d861f09cba9b42a601309c2-CHAR_Classic.png"
}, function(t) {
    t.exports = {
        frames: {
            "CHAR_Classic0001.png": {
                frame: {
                    x: 301,
                    y: 723,
                    w: 180,
                    h: 190
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 93,
                    y: 135,
                    w: 180,
                    h: 190
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: .5,
                    y: .5
                }
            },
            "CHAR_Classic0005.png": {
                frame: {
                    x: 363,
                    y: 449,
                    w: 174,
                    h: 188
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 172,
                    y: 129,
                    w: 174,
                    h: 188
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: .5,
                    y: .5
                }
            },
            "CHAR_Classic0008.png": {
                frame: {
                    x: 483,
                    y: 639,
                    w: 140,
                    h: 109
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 160,
                    y: 227,
                    w: 140,
                    h: 109
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: .5,
                    y: .5
                }
            },
            "CHAR_Classic0010.png": {
                frame: {
                    x: 143,
                    y: 1,
                    w: 137,
                    h: 223
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 158,
                    y: 107,
                    w: 137,
                    h: 223
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: .5,
                    y: .5
                }
            },
            "CHAR_Classic0011.png": {
                frame: {
                    x: 130,
                    y: 541,
                    w: 127,
                    h: 233
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 163,
                    y: 97,
                    w: 127,
                    h: 233
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: .5,
                    y: .5
                }
            },
            "CHAR_Classic0015.png": {
                frame: {
                    x: 1,
                    y: 785,
                    w: 169,
                    h: 233
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 142,
                    y: 119,
                    w: 169,
                    h: 233
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: .5,
                    y: .5
                }
            },
            "CHAR_Classic0020.png": {
                frame: {
                    x: 1,
                    y: 272,
                    w: 136,
                    h: 267
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 164,
                    y: 97,
                    w: 136,
                    h: 267
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: .5,
                    y: .5
                }
            },
            "CHAR_Classic0022.png": {
                frame: {
                    x: 259,
                    y: 499,
                    w: 102,
                    h: 222
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 163,
                    y: 155,
                    w: 102,
                    h: 222
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: .5,
                    y: .5
                }
            },
            "CHAR_Classic0023.png": {
                frame: {
                    x: 272,
                    y: 226,
                    w: 107,
                    h: 221
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 163,
                    y: 155,
                    w: 107,
                    h: 221
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "CHAR_Classic0026.png": {
                frame: {
                    x: 282,
                    y: 1,
                    w: 182,
                    h: 191
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 163,
                    y: 167,
                    w: 182,
                    h: 191
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: .5,
                    y: .5
                }
            },
            "CHAR_Classic0028.png": {
                frame: {
                    x: 1,
                    y: 1,
                    w: 140,
                    h: 269
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 161,
                    y: 102,
                    w: 140,
                    h: 269
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: .5,
                    y: .5
                }
            },
            "CHAR_Classic0032.png": {
                frame: {
                    x: 381,
                    y: 194,
                    w: 169,
                    h: 178
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 152,
                    y: 144,
                    w: 169,
                    h: 178
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: .5,
                    y: .5
                }
            },
            "CHAR_Classic0033.png": {
                frame: {
                    x: 466,
                    y: 1,
                    w: 169,
                    h: 178
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 152,
                    y: 144,
                    w: 169,
                    h: 178
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: .5,
                    y: .5
                }
            },
            "CHAR_Classic0036.png": {
                frame: {
                    x: 483,
                    y: 781,
                    w: 134,
                    h: 134
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 164,
                    y: 163,
                    w: 134,
                    h: 134
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: .5,
                    y: .5
                }
            },
            "dance01.png": {
                frame: {
                    x: 381,
                    y: 194,
                    w: 169,
                    h: 178
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 152,
                    y: 144,
                    w: 169,
                    h: 178
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance02.png": {
                frame: {
                    x: 466,
                    y: 1,
                    w: 169,
                    h: 178
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 152,
                    y: 144,
                    w: 169,
                    h: 178
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance03.png": {
                frame: {
                    x: 381,
                    y: 194,
                    w: 169,
                    h: 178
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 152,
                    y: 144,
                    w: 169,
                    h: 178
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance04.png": {
                frame: {
                    x: 466,
                    y: 1,
                    w: 169,
                    h: 178
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 152,
                    y: 144,
                    w: 169,
                    h: 178
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance05.png": {
                frame: {
                    x: 483,
                    y: 639,
                    w: 140,
                    h: 109
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 160,
                    y: 227,
                    w: 140,
                    h: 109
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance06.png": {
                frame: {
                    x: 130,
                    y: 541,
                    w: 127,
                    h: 233
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 163,
                    y: 97,
                    w: 127,
                    h: 233
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance07.png": {
                frame: {
                    x: 139,
                    y: 272,
                    w: 131,
                    h: 225
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 161,
                    y: 105,
                    w: 131,
                    h: 225
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance08.png": {
                frame: {
                    x: 1,
                    y: 541,
                    w: 127,
                    h: 242
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 163,
                    y: 89,
                    w: 127,
                    h: 242
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance09.png": {
                frame: {
                    x: 172,
                    y: 776,
                    w: 127,
                    h: 233
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 163,
                    y: 97,
                    w: 127,
                    h: 233
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            }
        },
        animations: {
            CHAR_Classic: ["CHAR_Classic0001.png", "CHAR_Classic0005.png", "CHAR_Classic0008.png", "CHAR_Classic0010.png", "CHAR_Classic0011.png", "CHAR_Classic0015.png", "CHAR_Classic0020.png", "CHAR_Classic0022.png", "CHAR_Classic0023.png", "CHAR_Classic0026.png", "CHAR_Classic0028.png", "CHAR_Classic0032.png", "CHAR_Classic0033.png", "CHAR_Classic0036.png"],
            dance: ["dance01.png", "dance02.png", "dance03.png", "dance04.png", "dance05.png", "dance06.png", "dance07.png", "dance08.png", "dance09.png"]
        },
        meta: {
            app: "https://www.codeandweb.com/texturepacker",
            version: "1.0",
            image: "CHAR_Classic.png",
            format: "RGBA8888",
            size: {
                w: 1024,
                h: 1024
            },
            scale: "0.9",
            smartupdate: "$TexturePacker:SmartUpdate:1af05ca90866c2db3d5264f09bcf9024:19ea02995edd2e8186f070b5e3ce4163:746d1e1ccaadc67beb27a9eb7dfaf923$"
        }
    }
}, function(t, e, n) {
    t.exports = n.p + "images/93b6dcc1155241b085d711c509eaeafa-CHAR_StickPlant.png"
}, function(t) {
    t.exports = {
        frames: {
            "CHAR_StickPlant0001.png": {
                frame: {
                    x: 285,
                    y: 142,
                    w: 143,
                    h: 217
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 140,
                    y: 130,
                    w: 143,
                    h: 217
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "CHAR_StickPlant0002.png": {
                frame: {
                    x: 1,
                    y: 676,
                    w: 180,
                    h: 211
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 115,
                    y: 125,
                    w: 180,
                    h: 211
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "CHAR_StickPlant0003.png": {
                frame: {
                    x: 255,
                    y: 667,
                    w: 182,
                    h: 229
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 127,
                    y: 142,
                    w: 182,
                    h: 229
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "CHAR_StickPlant0004.png": {
                frame: {
                    x: 285,
                    y: 1,
                    w: 139,
                    h: 220
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 161,
                    y: 125,
                    w: 139,
                    h: 220
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "CHAR_StickPlant0005.png": {
                frame: {
                    x: 1,
                    y: 1,
                    w: 145,
                    h: 282
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 159,
                    y: 77,
                    w: 145,
                    h: 282
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "CHAR_StickPlant0006.png": {
                frame: {
                    x: 1,
                    y: 858,
                    w: 124,
                    h: 123
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 168,
                    y: 169,
                    w: 124,
                    h: 123
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance07.png": {
                frame: {
                    x: 263,
                    y: 287,
                    w: 188,
                    h: 247
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 129,
                    y: 82,
                    w: 188,
                    h: 247
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance08.png": {
                frame: {
                    x: 1,
                    y: 508,
                    w: 166,
                    h: 252
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 129,
                    y: 78,
                    w: 166,
                    h: 252
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance09.png": {
                frame: {
                    x: 1,
                    y: 318,
                    w: 188,
                    h: 257
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 129,
                    y: 70,
                    w: 188,
                    h: 257
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance10.png": {
                frame: {
                    x: 1,
                    y: 148,
                    w: 168,
                    h: 260
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 163,
                    y: 71,
                    w: 168,
                    h: 260
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance11.png": {
                frame: {
                    x: 260,
                    y: 477,
                    w: 188,
                    h: 244
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 129,
                    y: 85,
                    w: 188,
                    h: 244
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            }
        },
        animations: {
            CHAR_StickPlant: ["CHAR_StickPlant0001.png", "CHAR_StickPlant0002.png", "CHAR_StickPlant0003.png", "CHAR_StickPlant0004.png", "CHAR_StickPlant0005.png", "CHAR_StickPlant0006.png"],
            dance: ["dance07.png", "dance08.png", "dance09.png", "dance10.png", "dance11.png"]
        },
        meta: {
            app: "https://www.codeandweb.com/texturepacker",
            version: "1.0",
            image: "CHAR_StickPlant.png",
            format: "RGBA8888",
            size: {
                w: 512,
                h: 1024
            },
            scale: "0.9",
            smartupdate: "$TexturePacker:SmartUpdate:2a2d86683a5e183bd10b948b3f888e38:39a6de9ebc9ef19d9f88cdaac8e2d87b:8a82dd896013b0bc4d764af393a5dae6$"
        }
    }
}, function(t, e, n) {
    t.exports = n.p + "images/857eb4f13173bab620d058806de00f44-CHAR_Momie.png"
}, function(t) {
    t.exports = {
        frames: {
            "CHAR_Momie0001.png": {
                frame: {
                    x: 242,
                    y: 141,
                    w: 160,
                    h: 203
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 107,
                    y: 124,
                    w: 160,
                    h: 203
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "CHAR_Momie0002.png": {
                frame: {
                    x: 1,
                    y: 335,
                    w: 185,
                    h: 185
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 160,
                    y: 130,
                    w: 185,
                    h: 185
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "CHAR_Momie0003.png": {
                frame: {
                    x: 188,
                    y: 492,
                    w: 165,
                    h: 158
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 149,
                    y: 181,
                    w: 165,
                    h: 158
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "CHAR_Momie0004.png": {
                frame: {
                    x: 242,
                    y: 1,
                    w: 138,
                    h: 220
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 161,
                    y: 126,
                    w: 138,
                    h: 220
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "CHAR_Momie0005.png": {
                frame: {
                    x: 1,
                    y: 1,
                    w: 142,
                    h: 239
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 150,
                    y: 115,
                    w: 142,
                    h: 239
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "CHAR_Momie0006.png": {
                frame: {
                    x: 355,
                    y: 492,
                    w: 124,
                    h: 124
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 168,
                    y: 171,
                    w: 124,
                    h: 124
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance07.png": {
                frame: {
                    x: 1,
                    y: 145,
                    w: 188,
                    h: 197
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 125,
                    y: 130,
                    w: 188,
                    h: 197
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance08.png": {
                frame: {
                    x: 200,
                    y: 303,
                    w: 187,
                    h: 197
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 125,
                    y: 130,
                    w: 187,
                    h: 197
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            }
        },
        animations: {
            CHAR_Momie: ["CHAR_Momie0001.png", "CHAR_Momie0002.png", "CHAR_Momie0003.png", "CHAR_Momie0004.png", "CHAR_Momie0005.png", "CHAR_Momie0006.png"],
            dance: ["dance07.png", "dance08.png"]
        },
        meta: {
            app: "https://www.codeandweb.com/texturepacker",
            version: "1.0",
            image: "CHAR_Momie.png",
            format: "RGBA8888",
            size: {
                w: 512,
                h: 1024
            },
            scale: "0.9",
            smartupdate: "$TexturePacker:SmartUpdate:9acb8d7c7cb7e8f8e8b649d5dec61f31:34a24bc154407eb8cf94c787a090c9e9:947f771e8315da983c1fd5b1b2f41b65$"
        }
    }
}, function(t, e, n) {
    t.exports = n.p + "images/7b99e73b8249767bd829cd4c07f9d0ac-CHAR_Burger.png"
}, function(t) {
    t.exports = {
        frames: {
            "CHAR_Burger0001.png": {
                frame: {
                    x: 303,
                    y: 201,
                    w: 175,
                    h: 199
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 110,
                    y: 127,
                    w: 175,
                    h: 199
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "CHAR_Burger0002.png": {
                frame: {
                    x: 303,
                    y: 1,
                    w: 205,
                    h: 198
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 167,
                    y: 135,
                    w: 205,
                    h: 198
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "CHAR_Burger0003.png": {
                frame: {
                    x: 1,
                    y: 1,
                    w: 250,
                    h: 300
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 93,
                    y: 88,
                    w: 250,
                    h: 300
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "CHAR_Burger0004.png": {
                frame: {
                    x: 1,
                    y: 590,
                    w: 215,
                    h: 188
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 115,
                    y: 129,
                    w: 215,
                    h: 188
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "CHAR_Burger0005.png": {
                frame: {
                    x: 1,
                    y: 421,
                    w: 167,
                    h: 224
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 147,
                    y: 115,
                    w: 167,
                    h: 224
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "CHAR_Burger0006.png": {
                frame: {
                    x: 337,
                    y: 697,
                    w: 120,
                    h: 120
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 170,
                    y: 170,
                    w: 120,
                    h: 120
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance007.png": {
                frame: {
                    x: 227,
                    y: 547,
                    w: 222,
                    h: 148
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 118,
                    y: 180,
                    w: 222,
                    h: 148
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance08.png": {
                frame: {
                    x: 252,
                    y: 378,
                    w: 234,
                    h: 167
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 112,
                    y: 161,
                    w: 234,
                    h: 167
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance09.png": {
                frame: {
                    x: 1,
                    y: 253,
                    w: 166,
                    h: 249
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 147,
                    y: 79,
                    w: 166,
                    h: 249
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance10.png": {
                frame: {
                    x: 1,
                    y: 780,
                    w: 166,
                    h: 211
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 147,
                    y: 60,
                    w: 166,
                    h: 211
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance11.png": {
                frame: {
                    x: 169,
                    y: 780,
                    w: 166,
                    h: 184
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 147,
                    y: 72,
                    w: 166,
                    h: 184
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            }
        },
        animations: {
            CHAR_Burger: ["CHAR_Burger0001.png", "CHAR_Burger0002.png", "CHAR_Burger0003.png", "CHAR_Burger0004.png", "CHAR_Burger0005.png", "CHAR_Burger0006.png"],
            dance: ["dance007.png", "dance08.png", "dance09.png", "dance10.png", "dance11.png"]
        },
        meta: {
            app: "https://www.codeandweb.com/texturepacker",
            version: "1.0",
            image: "CHAR_Burger.png",
            format: "RGBA8888",
            size: {
                w: 512,
                h: 1024
            },
            scale: "0.9",
            smartupdate: "$TexturePacker:SmartUpdate:357f386976177e4aaaad28e5a9dfd85d:db55230cf10a7a0aab8a5de5c4e350c9:d279cd81b82a7af1b65cf1ac7b4b23eb$"
        }
    }
}, function(t, e, n) {
    t.exports = n.p + "images/c8266212e222c99b3f36be97519fe984-CHAR_Cactus.png"
}, function(t) {
    t.exports = {
        frames: {
            "CHAR_Cactus0007.png": {
                frame: {
                    x: 1,
                    y: 200,
                    w: 186,
                    h: 272
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 94,
                    y: 112,
                    w: 186,
                    h: 272
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "CHAR_Cactus0008.png": {
                frame: {
                    x: 1,
                    y: 615,
                    w: 196,
                    h: 257
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 153,
                    y: 121,
                    w: 196,
                    h: 257
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "CHAR_Cactus0009.png": {
                frame: {
                    x: 1,
                    y: 388,
                    w: 225,
                    h: 265
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 108,
                    y: 106,
                    w: 225,
                    h: 265
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "CHAR_Cactus0010.png": {
                frame: {
                    x: 268,
                    y: 448,
                    w: 221,
                    h: 230
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 122,
                    y: 151,
                    w: 221,
                    h: 230
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "CHAR_Cactus0011.png": {
                frame: {
                    x: 1,
                    y: 1,
                    w: 197,
                    h: 292
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 139,
                    y: 77,
                    w: 197,
                    h: 292
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "CHAR_Cactus0012.png": {
                frame: {
                    x: 257,
                    y: 813,
                    w: 161,
                    h: 143
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 150,
                    y: 159,
                    w: 161,
                    h: 143
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance01.png": {
                frame: {
                    x: 295,
                    y: 1,
                    w: 232,
                    h: 211
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 109,
                    y: 118,
                    w: 232,
                    h: 211
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance02.png": {
                frame: {
                    x: 1,
                    y: 813,
                    w: 254,
                    h: 196
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 98,
                    y: 133,
                    w: 254,
                    h: 196
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance03.png": {
                frame: {
                    x: 275,
                    y: 235,
                    w: 232,
                    h: 211
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 109,
                    y: 118,
                    w: 232,
                    h: 211
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance04.png": {
                frame: {
                    x: 275,
                    y: 235,
                    w: 232,
                    h: 211
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 109,
                    y: 118,
                    w: 232,
                    h: 211
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance05.png": {
                frame: {
                    x: 1,
                    y: 813,
                    w: 254,
                    h: 196
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 98,
                    y: 133,
                    w: 254,
                    h: 196
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance06.png": {
                frame: {
                    x: 295,
                    y: 1,
                    w: 232,
                    h: 211
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 109,
                    y: 118,
                    w: 232,
                    h: 211
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            }
        },
        animations: {
            CHAR_Cactus: ["CHAR_Cactus0007.png", "CHAR_Cactus0008.png", "CHAR_Cactus0009.png", "CHAR_Cactus0010.png", "CHAR_Cactus0011.png", "CHAR_Cactus0012.png"],
            dance: ["dance01.png", "dance02.png", "dance03.png", "dance04.png", "dance05.png", "dance06.png"]
        },
        meta: {
            app: "https://www.codeandweb.com/texturepacker",
            version: "1.0",
            image: "CHAR_Cactus.png",
            format: "RGBA8888",
            size: {
                w: 512,
                h: 1024
            },
            scale: "0.9",
            smartupdate: "$TexturePacker:SmartUpdate:6cd2efad49e244d3d36cf956c0a955b3:6d6167b66ee30b5bb2b8fd761e9d92c0:c7bb3c34b28ae2c5cae96e2dd301e6a0$"
        }
    }
}, function(t, e, n) {
    t.exports = n.p + "images/1f8794216bbd48e1185deeeafd38e37f-CHAR_AngelStick.png"
}, function(t) {
    t.exports = {
        frames: {
            "CHAR_AngelStick0001.png": {
                frame: {
                    x: 409,
                    y: 743,
                    w: 174,
                    h: 217
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 107,
                    y: 130,
                    w: 174,
                    h: 217
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "CHAR_AngelStick0002.png": {
                frame: {
                    x: 426,
                    y: 477,
                    w: 212,
                    h: 211
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 88,
                    y: 125,
                    w: 212,
                    h: 211
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "CHAR_AngelStick0003.png": {
                frame: {
                    x: 446,
                    y: 248,
                    w: 199,
                    h: 206
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 126,
                    y: 166,
                    w: 199,
                    h: 206
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "CHAR_AngelStick0004.png": {
                frame: {
                    x: 224,
                    y: 248,
                    w: 227,
                    h: 220
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 109,
                    y: 126,
                    w: 227,
                    h: 220
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "CHAR_AngelStick0005.png": {
                frame: {
                    x: 223,
                    y: 1,
                    w: 241,
                    h: 245
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 110,
                    y: 114,
                    w: 241,
                    h: 245
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "CHAR_AngelStick0006.png": {
                frame: {
                    x: 832,
                    y: 1,
                    w: 123,
                    h: 123
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 169,
                    y: 169,
                    w: 123,
                    h: 123
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance07.png": {
                frame: {
                    x: 466,
                    y: 1,
                    w: 204,
                    h: 177
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 125,
                    y: 155,
                    w: 204,
                    h: 177
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance08.png": {
                frame: {
                    x: 645,
                    y: 1,
                    w: 202,
                    h: 185
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 126,
                    y: 144,
                    w: 202,
                    h: 185
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance09.png": {
                frame: {
                    x: 222,
                    y: 498,
                    w: 202,
                    h: 243
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 126,
                    y: 84,
                    w: 202,
                    h: 243
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance10.png": {
                frame: {
                    x: 1,
                    y: 250,
                    w: 221,
                    h: 246
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 115,
                    y: 81,
                    w: 221,
                    h: 246
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance11.png": {
                frame: {
                    x: 1,
                    y: 498,
                    w: 219,
                    h: 243
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 118,
                    y: 84,
                    w: 219,
                    h: 243
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance12.png": {
                frame: {
                    x: 1,
                    y: 1,
                    w: 220,
                    h: 247
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 121,
                    y: 80,
                    w: 220,
                    h: 247
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance13.png": {
                frame: {
                    x: 1,
                    y: 743,
                    w: 219,
                    h: 243
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 119,
                    y: 84,
                    w: 219,
                    h: 243
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance14.png": {
                frame: {
                    x: 222,
                    y: 743,
                    w: 219,
                    h: 185
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 117,
                    y: 144,
                    w: 219,
                    h: 185
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            }
        },
        animations: {
            CHAR_AngelStick: ["CHAR_AngelStick0001.png", "CHAR_AngelStick0002.png", "CHAR_AngelStick0003.png", "CHAR_AngelStick0004.png", "CHAR_AngelStick0005.png", "CHAR_AngelStick0006.png"],
            dance: ["dance07.png", "dance08.png", "dance09.png", "dance10.png", "dance11.png", "dance12.png", "dance13.png", "dance14.png"]
        },
        meta: {
            app: "https://www.codeandweb.com/texturepacker",
            version: "1.0",
            image: "CHAR_AngelStick.png",
            format: "RGBA8888",
            size: {
                w: 1024,
                h: 1024
            },
            scale: "0.9",
            smartupdate: "$TexturePacker:SmartUpdate:48da29bac8ac09a3245e4ff8ba7461d4:bd93f33a5a1d3ff6c8c694c254ed9922:5e7aeaef887c163adc17e5a1d67ab082$"
        }
    }
}, function(t, e, n) {
    t.exports = n.p + "images/8d8328c8a5f7e4e701d5a1c98ff4660b-CHAR_Corgi.png"
}, function(t) {
    t.exports = {
        frames: {
            "CHAR_Corgi0001.png": {
                frame: {
                    x: 234,
                    y: 1,
                    w: 232,
                    h: 186
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 126,
                    y: 60,
                    w: 232,
                    h: 186
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "CHAR_Corgi0002.png": {
                frame: {
                    x: 1,
                    y: 342,
                    w: 267,
                    h: 183
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 116,
                    y: 60,
                    w: 267,
                    h: 183
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "CHAR_Corgi0003.png": {
                frame: {
                    x: 1,
                    y: 1,
                    w: 231,
                    h: 339
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 116,
                    y: 62,
                    w: 231,
                    h: 339
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "CHAR_Corgi0004.png": {
                frame: {
                    x: 1,
                    y: 611,
                    w: 244,
                    h: 207
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 106,
                    y: 68,
                    w: 244,
                    h: 207
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "CHAR_Corgi0005.png": {
                frame: {
                    x: 186,
                    y: 342,
                    w: 229,
                    h: 242
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 128,
                    y: 83,
                    w: 229,
                    h: 242
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "CHAR_Corgi0006.png": {
                frame: {
                    x: 1,
                    y: 857,
                    w: 126,
                    h: 125
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 167,
                    y: 168,
                    w: 126,
                    h: 125
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance07.png": {
                frame: {
                    x: 210,
                    y: 818,
                    w: 224,
                    h: 200
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 120,
                    y: 132,
                    w: 224,
                    h: 200
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance08.png": {
                frame: {
                    x: 405,
                    y: 586,
                    w: 227,
                    h: 197
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 118,
                    y: 135,
                    w: 227,
                    h: 197
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance09.png": {
                frame: {
                    x: 210,
                    y: 586,
                    w: 230,
                    h: 193
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 117,
                    y: 139,
                    w: 230,
                    h: 193
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance10.png": {
                frame: {
                    x: 436,
                    y: 815,
                    w: 224,
                    h: 200
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 120,
                    y: 132,
                    w: 224,
                    h: 200
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            }
        },
        animations: {
            CHAR_Corgi: ["CHAR_Corgi0001.png", "CHAR_Corgi0002.png", "CHAR_Corgi0003.png", "CHAR_Corgi0004.png", "CHAR_Corgi0005.png", "CHAR_Corgi0006.png"],
            dance: ["dance07.png", "dance08.png", "dance09.png", "dance10.png"]
        },
        meta: {
            app: "https://www.codeandweb.com/texturepacker",
            version: "1.0",
            image: "CHAR_Corgi.png",
            format: "RGBA8888",
            size: {
                w: 1024,
                h: 1024
            },
            scale: "0.9",
            smartupdate: "$TexturePacker:SmartUpdate:72dd58e9adf8dd1556532c49c9845c20:57370081ee294a6870bf01bd39d37774:36c470e8e48e3af7296107d5ebf71b73$"
        }
    }
}, function(t, e, n) {
    t.exports = n.p + "images/8bcf52d4fa476d7409be921ceabea58b-CHAR_Unicorn.png"
}, function(t) {
    t.exports = {
        frames: {
            "CHAR_Unicorn0002.png": {
                frame: {
                    x: 669,
                    y: 1,
                    w: 193,
                    h: 260
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 161,
                    y: 97,
                    w: 193,
                    h: 260
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "CHAR_Unicorn0003.png": {
                frame: {
                    x: 1,
                    y: 1,
                    w: 235,
                    h: 317
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 117,
                    y: 43,
                    w: 235,
                    h: 317
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "CHAR_Unicorn0004.png": {
                frame: {
                    x: 1,
                    y: 634,
                    w: 227,
                    h: 300
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 109,
                    y: 60,
                    w: 227,
                    h: 300
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "CHAR_Unicorn0005.png": {
                frame: {
                    x: 1,
                    y: 320,
                    w: 192,
                    h: 312
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 121,
                    y: 102,
                    w: 192,
                    h: 312
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "CHAR_Unicorn0006.png": {
                frame: {
                    x: 195,
                    y: 320,
                    w: 212,
                    h: 291
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 109,
                    y: 89,
                    w: 212,
                    h: 291
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "CHAR_Unicorn0012.png": {
                frame: {
                    x: 669,
                    y: 196,
                    w: 127,
                    h: 126
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 166,
                    y: 168,
                    w: 127,
                    h: 126
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance08.png": {
                frame: {
                    x: 409,
                    y: 293,
                    w: 215,
                    h: 260
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 103,
                    y: 65,
                    w: 215,
                    h: 260
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance09.png": {
                frame: {
                    x: 238,
                    y: 1,
                    w: 212,
                    h: 290
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 86,
                    y: 33,
                    w: 212,
                    h: 290
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance10.png": {
                frame: {
                    x: 452,
                    y: 1,
                    w: 215,
                    h: 260
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 130,
                    y: 65,
                    w: 215,
                    h: 260
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance11.png": {
                frame: {
                    x: 230,
                    y: 613,
                    w: 212,
                    h: 290
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 156,
                    y: 34,
                    w: 212,
                    h: 290
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            }
        },
        animations: {
            CHAR_Unicorn: ["CHAR_Unicorn0002.png", "CHAR_Unicorn0003.png", "CHAR_Unicorn0004.png", "CHAR_Unicorn0005.png", "CHAR_Unicorn0006.png", "CHAR_Unicorn0012.png"],
            dance: ["dance08.png", "dance09.png", "dance10.png", "dance11.png"]
        },
        meta: {
            app: "https://www.codeandweb.com/texturepacker",
            version: "1.0",
            image: "CHAR_Unicorn.png",
            format: "RGBA8888",
            size: {
                w: 1024,
                h: 1024
            },
            scale: "0.9",
            smartupdate: "$TexturePacker:SmartUpdate:c0338af825d7ba8ba182d88ea514deda:4fbf28755864ce3ee4c4f89848192668:d30df2019f154b3aa69b18c314351869$"
        }
    }
}, function(t, e, n) {
    t.exports = n.p + "images/03b7dd5d1ae7134731c278c21bb06289-CHAR_EvilStick.png"
}, function(t) {
    t.exports = {
        frames: {
            "CHAR_EvilStick0001.png": {
                frame: {
                    x: 228,
                    y: 817,
                    w: 166,
                    h: 217
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 116,
                    y: 136,
                    w: 166,
                    h: 217
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "CHAR_EvilStick0002.png": {
                frame: {
                    x: 1,
                    y: 681,
                    w: 225,
                    h: 211
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 75,
                    y: 128,
                    w: 225,
                    h: 211
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "CHAR_EvilStick0003.png": {
                frame: {
                    x: 1,
                    y: 222,
                    w: 267,
                    h: 205
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 77,
                    y: 161,
                    w: 267,
                    h: 205
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "CHAR_EvilStick0004.png": {
                frame: {
                    x: 1,
                    y: 1,
                    w: 269,
                    h: 219
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 93,
                    y: 134,
                    w: 269,
                    h: 219
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "CHAR_EvilStick0005.png": {
                frame: {
                    x: 1,
                    y: 429,
                    w: 265,
                    h: 250
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 80,
                    y: 104,
                    w: 265,
                    h: 250
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "CHAR_EvilStick0006.png": {
                frame: {
                    x: 1,
                    y: 894,
                    w: 123,
                    h: 123
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 169,
                    y: 169,
                    w: 123,
                    h: 123
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance07.png": {
                frame: {
                    x: 272,
                    y: 1,
                    w: 198,
                    h: 236
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 145,
                    y: 88,
                    w: 198,
                    h: 236
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance08.png": {
                frame: {
                    x: 270,
                    y: 401,
                    w: 234,
                    h: 206
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 128,
                    y: 118,
                    w: 234,
                    h: 206
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance09.png": {
                frame: {
                    x: 268,
                    y: 609,
                    w: 234,
                    h: 206
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 128,
                    y: 118,
                    w: 234,
                    h: 206
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance10.png": {
                frame: {
                    x: 272,
                    y: 201,
                    w: 198,
                    h: 236
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 145,
                    y: 88,
                    w: 198,
                    h: 236
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance11.png": {
                frame: {
                    x: 268,
                    y: 609,
                    w: 234,
                    h: 206
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 128,
                    y: 118,
                    w: 234,
                    h: 206
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            }
        },
        animations: {
            CHAR_EvilStick: ["CHAR_EvilStick0001.png", "CHAR_EvilStick0002.png", "CHAR_EvilStick0003.png", "CHAR_EvilStick0004.png", "CHAR_EvilStick0005.png", "CHAR_EvilStick0006.png"],
            dance: ["dance07.png", "dance08.png", "dance09.png", "dance10.png", "dance11.png"]
        },
        meta: {
            app: "https://www.codeandweb.com/texturepacker",
            version: "1.0",
            image: "CHAR_EvilStick.png",
            format: "RGBA8888",
            size: {
                w: 512,
                h: 1024
            },
            scale: "0.9",
            smartupdate: "$TexturePacker:SmartUpdate:b39c74389f942dc47bc5c51af712d951:8a97e025228d320d4dfd8d71ac56a9f3:3e371dcf4c1fc24a52deecaee4dcbcf9$"
        }
    }
}, function(t, e, n) {
    t.exports = n.p + "images/5eb119962664142b51b839f8ffc53e15-CHAR_RainbowStick.png"
}, function(t) {
    t.exports = {
        frames: {
            "CHAR_RainbowStick0001.png": {
                frame: {
                    x: 1,
                    y: 421,
                    w: 166,
                    h: 197
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 94,
                    y: 129,
                    w: 166,
                    h: 197
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "CHAR_RainbowStick0002.png": {
                frame: {
                    x: 200,
                    y: 447,
                    w: 156,
                    h: 187
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 188,
                    y: 131,
                    w: 156,
                    h: 187
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "CHAR_RainbowStick0003.png": {
                frame: {
                    x: 244,
                    y: 1,
                    w: 143,
                    h: 240
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 125,
                    y: 136,
                    w: 143,
                    h: 240
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "CHAR_RainbowStick0004.png": {
                frame: {
                    x: 1,
                    y: 131,
                    w: 137,
                    h: 219
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 158,
                    y: 127,
                    w: 137,
                    h: 219
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "CHAR_RainbowStick0005.png": {
                frame: {
                    x: 1,
                    y: 1,
                    w: 128,
                    h: 241
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 161,
                    y: 111,
                    w: 128,
                    h: 241
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "CHAR_RainbowStick0006.png": {
                frame: {
                    x: 1,
                    y: 771,
                    w: 123,
                    h: 123
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 169,
                    y: 169,
                    w: 123,
                    h: 123
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance07.png": {
                frame: {
                    x: 1,
                    y: 589,
                    w: 180,
                    h: 185
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 99,
                    y: 139,
                    w: 180,
                    h: 185
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance08.png": {
                frame: {
                    x: 1,
                    y: 270,
                    w: 149,
                    h: 205
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 158,
                    y: 86,
                    w: 149,
                    h: 205
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance09.png": {
                frame: {
                    x: 222,
                    y: 146,
                    w: 145,
                    h: 215
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 185,
                    y: 98,
                    w: 145,
                    h: 215
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance10.png": {
                frame: {
                    x: 208,
                    y: 293,
                    w: 152,
                    h: 202
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 199,
                    y: 122,
                    w: 152,
                    h: 202
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance11.png": {
                frame: {
                    x: 1,
                    y: 270,
                    w: 149,
                    h: 205
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 158,
                    y: 86,
                    w: 149,
                    h: 205
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            }
        },
        animations: {
            CHAR_RainbowStick: ["CHAR_RainbowStick0001.png", "CHAR_RainbowStick0002.png", "CHAR_RainbowStick0003.png", "CHAR_RainbowStick0004.png", "CHAR_RainbowStick0005.png", "CHAR_RainbowStick0006.png"],
            dance: ["dance07.png", "dance08.png", "dance09.png", "dance10.png", "dance11.png"]
        },
        meta: {
            app: "https://www.codeandweb.com/texturepacker",
            version: "1.0",
            image: "CHAR_RainbowStick.png",
            format: "RGBA8888",
            size: {
                w: 512,
                h: 1024
            },
            scale: "0.9",
            smartupdate: "$TexturePacker:SmartUpdate:6d64e3a16c56f156b32f98f61d4e5ea0:f163e283a6a20e2189850b290bac4507:8d2ffb189c8192ad26276715f5aeec83$"
        }
    }
}, function(t, e, n) {
    t.exports = n.p + "images/dc7ebdf3f8d4dcb71c7a59bbf3d11619-CHAR_StickOuech.png"
}, function(t) {
    t.exports = {
        frames: {
            "CHAR_StickOuech0001.png": {
                frame: {
                    x: 1,
                    y: 332,
                    w: 147,
                    h: 218
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 140,
                    y: 136,
                    w: 147,
                    h: 218
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "CHAR_StickOuech0002.png": {
                frame: {
                    x: 221,
                    y: 336,
                    w: 181,
                    h: 212
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 116,
                    y: 126,
                    w: 181,
                    h: 212
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "CHAR_StickOuech0003.png": {
                frame: {
                    x: 1,
                    y: 646,
                    w: 180,
                    h: 205
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 123,
                    y: 151,
                    w: 180,
                    h: 205
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "CHAR_StickOuech0004.png": {
                frame: {
                    x: 244,
                    y: 167,
                    w: 167,
                    h: 219
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 130,
                    y: 130,
                    w: 167,
                    h: 219
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "CHAR_StickOuech0005.png": {
                frame: {
                    x: 1,
                    y: 167,
                    w: 163,
                    h: 241
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 130,
                    y: 111,
                    w: 163,
                    h: 241
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "CHAR_StickOuech0006.png": {
                frame: {
                    x: 1,
                    y: 828,
                    w: 124,
                    h: 124
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 167,
                    y: 167,
                    w: 124,
                    h: 124
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance07.png": {
                frame: {
                    x: 1,
                    y: 1,
                    w: 164,
                    h: 242
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 166,
                    y: 82,
                    w: 164,
                    h: 242
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance08.png": {
                frame: {
                    x: 1,
                    y: 481,
                    w: 163,
                    h: 206
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 166,
                    y: 129,
                    w: 163,
                    h: 206
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance09.png": {
                frame: {
                    x: 209,
                    y: 519,
                    w: 163,
                    h: 206
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 150,
                    y: 129,
                    w: 163,
                    h: 206
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance10.png": {
                frame: {
                    x: 245,
                    y: 1,
                    w: 164,
                    h: 242
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 180,
                    y: 82,
                    w: 164,
                    h: 242
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance11.png": {
                frame: {
                    x: 209,
                    y: 519,
                    w: 163,
                    h: 206
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 150,
                    y: 129,
                    w: 163,
                    h: 206
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance12.png": {
                frame: {
                    x: 1,
                    y: 481,
                    w: 163,
                    h: 206
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 166,
                    y: 129,
                    w: 163,
                    h: 206
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            }
        },
        animations: {
            CHAR_StickOuech: ["CHAR_StickOuech0001.png", "CHAR_StickOuech0002.png", "CHAR_StickOuech0003.png", "CHAR_StickOuech0004.png", "CHAR_StickOuech0005.png", "CHAR_StickOuech0006.png"],
            dance: ["dance07.png", "dance08.png", "dance09.png", "dance10.png", "dance11.png", "dance12.png"]
        },
        meta: {
            app: "https://www.codeandweb.com/texturepacker",
            version: "1.0",
            image: "CHAR_StickOuech.png",
            format: "RGBA8888",
            size: {
                w: 512,
                h: 1024
            },
            scale: "0.9",
            smartupdate: "$TexturePacker:SmartUpdate:1d8e9749efea7242939747a0e231605d:bdbc699cbd5c033f5f739e8fa737f505:820e835350ee70019519a98ae9678ac0$"
        }
    }
}, function(t, e, n) {
    t.exports = n.p + "images/325db0a37f265c4934bbe2dd1e2f3d3f-CHAR_KingStick.png"
}, function(t) {
    t.exports = {
        frames: {
            "CHAR_KingStick0001.png": {
                frame: {
                    x: 214,
                    y: 499,
                    w: 175,
                    h: 194
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 87,
                    y: 132,
                    w: 175,
                    h: 194
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "CHAR_KingStick0002.png": {
                frame: {
                    x: 1,
                    y: 637,
                    w: 172,
                    h: 169
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 198,
                    y: 136,
                    w: 172,
                    h: 169
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "CHAR_KingStick0003.png": {
                frame: {
                    x: 1,
                    y: 1,
                    w: 133,
                    h: 305
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 158,
                    y: 83,
                    w: 133,
                    h: 305
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "CHAR_KingStick0004.png": {
                frame: {
                    x: 227,
                    y: 360,
                    w: 137,
                    h: 219
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 159,
                    y: 129,
                    w: 137,
                    h: 219
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "CHAR_KingStick0005.png": {
                frame: {
                    x: 1,
                    y: 136,
                    w: 143,
                    h: 241
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 137,
                    y: 94,
                    w: 143,
                    h: 241
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "CHAR_KingStick0006.png": {
                frame: {
                    x: 1,
                    y: 808,
                    w: 123,
                    h: 123
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 169,
                    y: 169,
                    w: 123,
                    h: 123
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance07.png": {
                frame: {
                    x: 244,
                    y: 159,
                    w: 199,
                    h: 226
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 87,
                    y: 101,
                    w: 199,
                    h: 226
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance08.png": {
                frame: {
                    x: 308,
                    y: 1,
                    w: 156,
                    h: 200
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 124,
                    y: 127,
                    w: 156,
                    h: 200
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance09.png": {
                frame: {
                    x: 1,
                    y: 281,
                    w: 192,
                    h: 224
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 153,
                    y: 103,
                    w: 192,
                    h: 224
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance10.png": {
                frame: {
                    x: 1,
                    y: 475,
                    w: 160,
                    h: 211
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 161,
                    y: 127,
                    w: 160,
                    h: 211
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            }
        },
        animations: {
            CHAR_KingStick: ["CHAR_KingStick0001.png", "CHAR_KingStick0002.png", "CHAR_KingStick0003.png", "CHAR_KingStick0004.png", "CHAR_KingStick0005.png", "CHAR_KingStick0006.png"],
            dance: ["dance07.png", "dance08.png", "dance09.png", "dance10.png"]
        },
        meta: {
            app: "https://www.codeandweb.com/texturepacker",
            version: "1.0",
            image: "CHAR_KingStick.png",
            format: "RGBA8888",
            size: {
                w: 512,
                h: 1024
            },
            scale: "0.9",
            smartupdate: "$TexturePacker:SmartUpdate:578074550b8ead7c4480e14f2d60ecc7:681575d41300280a8101cbd0b2e76937:ad4479df57aeaac8f083b1e2f2a78345$"
        }
    }
}, function(t, e, n) {
    t.exports = n.p + "images/78696f12a3c6e8ed46cc5184cc505bcb-CHAR_Banana.png"
}, function(t) {
    t.exports = {
        frames: {
            "CHAR_Banana0001.png": {
                frame: {
                    x: 1,
                    y: 1,
                    w: 179,
                    h: 278
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 79,
                    y: 128,
                    w: 179,
                    h: 278
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "CHAR_Banana0002.png": {
                frame: {
                    x: 1,
                    y: 281,
                    w: 169,
                    h: 271
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 187,
                    y: 128,
                    w: 169,
                    h: 271
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "CHAR_Banana0003.png": {
                frame: {
                    x: 172,
                    y: 281,
                    w: 251,
                    h: 183
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 107,
                    y: 140,
                    w: 251,
                    h: 183
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "CHAR_Banana0004.png": {
                frame: {
                    x: 248,
                    y: 784,
                    w: 191,
                    h: 227
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 130,
                    y: 136,
                    w: 191,
                    h: 227
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "CHAR_Banana0005.png": {
                frame: {
                    x: 1,
                    y: 810,
                    w: 213,
                    h: 245
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 142,
                    y: 129,
                    w: 213,
                    h: 245
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "CHAR_Banana0006.png": {
                frame: {
                    x: 546,
                    y: 228,
                    w: 124,
                    h: 125
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 168,
                    y: 168,
                    w: 124,
                    h: 125
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance07.png": {
                frame: {
                    x: 367,
                    y: 1,
                    w: 183,
                    h: 225
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 138,
                    y: 106,
                    w: 183,
                    h: 225
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance08.png": {
                frame: {
                    x: 186,
                    y: 534,
                    w: 183,
                    h: 248
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 138,
                    y: 83,
                    w: 183,
                    h: 248
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance09.png": {
                frame: {
                    x: 1,
                    y: 554,
                    w: 183,
                    h: 254
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 138,
                    y: 77,
                    w: 183,
                    h: 254
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance10.png": {
                frame: {
                    x: 1,
                    y: 554,
                    w: 183,
                    h: 254
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 138,
                    y: 77,
                    w: 183,
                    h: 254
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance11.png": {
                frame: {
                    x: 182,
                    y: 1,
                    w: 183,
                    h: 248
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 138,
                    y: 83,
                    w: 183,
                    h: 248
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance12.png": {
                frame: {
                    x: 357,
                    y: 251,
                    w: 187,
                    h: 244
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 134,
                    y: 87,
                    w: 187,
                    h: 244
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance13.png": {
                frame: {
                    x: 371,
                    y: 497,
                    w: 183,
                    h: 225
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 138,
                    y: 106,
                    w: 183,
                    h: 225
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            }
        },
        animations: {
            CHAR_Banana: ["CHAR_Banana0001.png", "CHAR_Banana0002.png", "CHAR_Banana0003.png", "CHAR_Banana0004.png", "CHAR_Banana0005.png", "CHAR_Banana0006.png"],
            dance: ["dance07.png", "dance08.png", "dance09.png", "dance10.png", "dance11.png", "dance12.png", "dance13.png"]
        },
        meta: {
            app: "https://www.codeandweb.com/texturepacker",
            version: "1.0",
            image: "CHAR_Banana.png",
            format: "RGBA8888",
            size: {
                w: 1024,
                h: 1024
            },
            scale: "0.9",
            smartupdate: "$TexturePacker:SmartUpdate:aa03b60acff5d367c9358a891a893475:5a0af2ca3b4a00d9ed66927d3fdb705c:736b432be3da8a6dd0bd5b380d329bef$"
        }
    }
}, function(t, e, n) {
    t.exports = n.p + "images/3de7d310811b58b61509ccdbc6d52797-CHAR_Ninja.png"
}, function(t) {
    t.exports = {
        frames: {
            "CHAR_Ninja0001.png": {
                frame: {
                    x: 261,
                    y: 442,
                    w: 184,
                    h: 173
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 107,
                    y: 138,
                    w: 184,
                    h: 173
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "CHAR_Ninja0002.png": {
                frame: {
                    x: 801,
                    y: 1,
                    w: 200,
                    h: 162
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 127,
                    y: 138,
                    w: 200,
                    h: 162
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "CHAR_Ninja0003.png": {
                frame: {
                    x: 1,
                    y: 1,
                    w: 271,
                    h: 244
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 113,
                    y: 100,
                    w: 271,
                    h: 244
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "CHAR_Ninja0004.png": {
                frame: {
                    x: 1,
                    y: 499,
                    w: 181,
                    h: 164
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 110,
                    y: 133,
                    w: 181,
                    h: 164
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "CHAR_Ninja0005.png": {
                frame: {
                    x: 793,
                    y: 421,
                    w: 134,
                    h: 186
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 170,
                    y: 133,
                    w: 134,
                    h: 186
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "CHAR_Ninja0006.png": {
                frame: {
                    x: 447,
                    y: 486,
                    w: 117,
                    h: 117
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 171,
                    y: 171,
                    w: 117,
                    h: 117
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance07.png": {
                frame: {
                    x: 274,
                    y: 1,
                    w: 264,
                    h: 196
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 114,
                    y: 152,
                    w: 264,
                    h: 196
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance08.png": {
                frame: {
                    x: 801,
                    y: 165,
                    w: 254,
                    h: 194
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 109,
                    y: 133,
                    w: 254,
                    h: 194
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance09.png": {
                frame: {
                    x: 540,
                    y: 1,
                    w: 259,
                    h: 251
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 110,
                    y: 76,
                    w: 259,
                    h: 251
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance10.png": {
                frame: {
                    x: 1,
                    y: 247,
                    w: 258,
                    h: 250
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 110,
                    y: 77,
                    w: 258,
                    h: 250
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance11.png": {
                frame: {
                    x: 274,
                    y: 199,
                    w: 259,
                    h: 241
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 110,
                    y: 86,
                    w: 259,
                    h: 241
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance12.png": {
                frame: {
                    x: 535,
                    y: 254,
                    w: 256,
                    h: 230
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 110,
                    y: 97,
                    w: 256,
                    h: 230
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            }
        },
        animations: {
            CHAR_Ninja: ["CHAR_Ninja0001.png", "CHAR_Ninja0002.png", "CHAR_Ninja0003.png", "CHAR_Ninja0004.png", "CHAR_Ninja0005.png", "CHAR_Ninja0006.png"],
            dance: ["dance07.png", "dance08.png", "dance09.png", "dance10.png", "dance11.png", "dance12.png"]
        },
        meta: {
            app: "https://www.codeandweb.com/texturepacker",
            version: "1.0",
            image: "CHAR_Ninja.png",
            format: "RGBA8888",
            size: {
                w: 1024,
                h: 1024
            },
            scale: "0.9",
            smartupdate: "$TexturePacker:SmartUpdate:3bffb7c1fc2bde452c565c2dd7e5aa8f:83fb9dcb602bce456b1c3cc0aec0be09:f236ea6efd8139a222f4aeb41cf66a42$"
        }
    }
}, function(t, e, n) {
    t.exports = n.p + "images/2c29c41a85e52e34092591b37aaaa278-CHAR_Sheep.png"
}, function(t) {
    t.exports = {
        frames: {
            "AN_Sheep0001.png": {
                frame: {
                    x: 1,
                    y: 185,
                    w: 262,
                    h: 210
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 60,
                    y: 127,
                    w: 262,
                    h: 210
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "AN_Sheep0002.png": {
                frame: {
                    x: 531,
                    y: 169,
                    w: 247,
                    h: 248
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 126,
                    y: 119,
                    w: 247,
                    h: 248
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "AN_Sheep0003.png": {
                frame: {
                    x: 1,
                    y: 586,
                    w: 181,
                    h: 243
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 154,
                    y: 134,
                    w: 181,
                    h: 243
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "AN_Sheep0004.png": {
                frame: {
                    x: 267,
                    y: 1,
                    w: 246,
                    h: 262
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 101,
                    y: 126,
                    w: 246,
                    h: 262
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "AN_Sheep0005.png": {
                frame: {
                    x: 1,
                    y: 1,
                    w: 264,
                    h: 182
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 111,
                    y: 148,
                    w: 264,
                    h: 182
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "AN_Sheep0006.png": {
                frame: {
                    x: 1,
                    y: 769,
                    w: 131,
                    h: 131
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 165,
                    y: 165,
                    w: 131,
                    h: 131
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance07.png": {
                frame: {
                    x: 531,
                    y: 1,
                    w: 260,
                    h: 166
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 107,
                    y: 171,
                    w: 260,
                    h: 166
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance08.png": {
                frame: {
                    x: 1,
                    y: 397,
                    w: 244,
                    h: 187
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 115,
                    y: 150,
                    w: 244,
                    h: 187
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance09.png": {
                frame: {
                    x: 265,
                    y: 249,
                    w: 244,
                    h: 207
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 115,
                    y: 130,
                    w: 244,
                    h: 207
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance10.png": {
                frame: {
                    x: 793,
                    y: 1,
                    w: 244,
                    h: 211
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 115,
                    y: 126,
                    w: 244,
                    h: 211
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance11.png": {
                frame: {
                    x: 511,
                    y: 418,
                    w: 244,
                    h: 175
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 115,
                    y: 122,
                    w: 244,
                    h: 175
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance12.png": {
                frame: {
                    x: 247,
                    y: 458,
                    w: 244,
                    h: 171
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 115,
                    y: 119,
                    w: 244,
                    h: 171
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance13.png": {
                frame: {
                    x: 781,
                    y: 247,
                    w: 237,
                    h: 181
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 118,
                    y: 119,
                    w: 237,
                    h: 181
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            }
        },
        animations: {
            AN_Sheep: ["AN_Sheep0001.png", "AN_Sheep0002.png", "AN_Sheep0003.png", "AN_Sheep0004.png", "AN_Sheep0005.png", "AN_Sheep0006.png"],
            dance: ["dance07.png", "dance08.png", "dance09.png", "dance10.png", "dance11.png", "dance12.png", "dance13.png"]
        },
        meta: {
            app: "https://www.codeandweb.com/texturepacker",
            version: "1.0",
            image: "CHAR_Sheep.png",
            format: "RGBA8888",
            size: {
                w: 1024,
                h: 1024
            },
            scale: "0.9",
            smartupdate: "$TexturePacker:SmartUpdate:3f4e0a3d5745781cda06e6fd35456c4d:0d2449d6b45dc28e3000e7775d4df053:930e65e6c0f80ce30763c17f918bb6b1$"
        }
    }
}, function(t, e, n) {
    t.exports = n.p + "images/b29eb22ba46e706f4964c7becd276ae2-CHAR_Panda.png"
}, function(t) {
    t.exports = {
        frames: {
            "dance07.png": {
                frame: {
                    x: 250,
                    y: 547,
                    w: 255,
                    h: 192
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 97,
                    y: 143,
                    w: 255,
                    h: 192
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance08.png": {
                frame: {
                    x: 490,
                    y: 1,
                    w: 233,
                    h: 223
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 108,
                    y: 102,
                    w: 233,
                    h: 223
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance09.png": {
                frame: {
                    x: 1,
                    y: 824,
                    w: 247,
                    h: 198
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 101,
                    y: 93,
                    w: 247,
                    h: 198
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance10.png": {
                frame: {
                    x: 250,
                    y: 804,
                    w: 247,
                    h: 197
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 101,
                    y: 89,
                    w: 247,
                    h: 197
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance11.png": {
                frame: {
                    x: 435,
                    y: 258,
                    w: 238,
                    h: 233
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 106,
                    y: 93,
                    w: 238,
                    h: 233
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "v03_CHAR_Panda0001.png": {
                frame: {
                    x: 1,
                    y: 1,
                    w: 245,
                    h: 278
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 48,
                    y: 128,
                    w: 245,
                    h: 278
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "v03_CHAR_Panda0002.png": {
                frame: {
                    x: 1,
                    y: 557,
                    w: 247,
                    h: 265
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 156,
                    y: 132,
                    w: 247,
                    h: 265
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "v03_CHAR_Panda0003.png": {
                frame: {
                    x: 236,
                    y: 281,
                    w: 197,
                    h: 264
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 127,
                    y: 110,
                    w: 197,
                    h: 264
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "v03_CHAR_Panda0004.png": {
                frame: {
                    x: 248,
                    y: 1,
                    w: 240,
                    h: 255
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 106,
                    y: 137,
                    w: 240,
                    h: 255
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "v03_CHAR_Panda0005.png": {
                frame: {
                    x: 1,
                    y: 281,
                    w: 274,
                    h: 233
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 89,
                    y: 137,
                    w: 274,
                    h: 233
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "v03_CHAR_Panda0006.png": {
                frame: {
                    x: 444,
                    y: 498,
                    w: 157,
                    h: 157
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 152,
                    y: 152,
                    w: 157,
                    h: 157
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            }
        },
        animations: {
            dance: ["dance07.png", "dance08.png", "dance09.png", "dance10.png", "dance11.png"],
            v03_CHAR_Panda: ["v03_CHAR_Panda0001.png", "v03_CHAR_Panda0002.png", "v03_CHAR_Panda0003.png", "v03_CHAR_Panda0004.png", "v03_CHAR_Panda0005.png", "v03_CHAR_Panda0006.png"]
        },
        meta: {
            app: "https://www.codeandweb.com/texturepacker",
            version: "1.0",
            image: "CHAR_Panda.png",
            format: "RGBA8888",
            size: {
                w: 1024,
                h: 1024
            },
            scale: "0.9",
            smartupdate: "$TexturePacker:SmartUpdate:70eaaf2e2fcca05d30011a47e875de3a:0ba21fc9622ea342de2c4ee66e2a2e95:8e0c513b69bf9225ef04e50006dc9e1e$"
        }
    }
}, function(t, e, n) {
    t.exports = n.p + "images/49e3dae36bca650873d849bb87b3890b-CHAR_SuperStick.png"
}, function(t) {
    t.exports = {
        frames: {
            "CHAR_SuperStick0001.png": {
                frame: {
                    x: 259,
                    y: 1,
                    w: 154,
                    h: 241
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 113,
                    y: 122,
                    w: 154,
                    h: 241
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "CHAR_SuperStick0002.png": {
                frame: {
                    x: 1,
                    y: 363,
                    w: 199,
                    h: 225
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 114,
                    y: 122,
                    w: 199,
                    h: 225
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "CHAR_SuperStick0003.png": {
                frame: {
                    x: 259,
                    y: 157,
                    w: 232,
                    h: 223
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 99,
                    y: 122,
                    w: 232,
                    h: 223
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "CHAR_SuperStick0004.png": {
                frame: {
                    x: 1,
                    y: 178,
                    w: 183,
                    h: 232
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 130,
                    y: 122,
                    w: 183,
                    h: 232
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "CHAR_SuperStick0005.png": {
                frame: {
                    x: 1,
                    y: 1,
                    w: 175,
                    h: 256
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 123,
                    y: 102,
                    w: 175,
                    h: 256
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "CHAR_SuperStick0006.png": {
                frame: {
                    x: 359,
                    y: 741,
                    w: 123,
                    h: 123
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 169,
                    y: 169,
                    w: 123,
                    h: 123
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance07.png": {
                frame: {
                    x: 228,
                    y: 382,
                    w: 185,
                    h: 223
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 106,
                    y: 106,
                    w: 185,
                    h: 223
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance08.png": {
                frame: {
                    x: 1,
                    y: 564,
                    w: 178,
                    h: 223
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 113,
                    y: 106,
                    w: 178,
                    h: 223
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance09.png": {
                frame: {
                    x: 181,
                    y: 744,
                    w: 176,
                    h: 223
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 115,
                    y: 106,
                    w: 176,
                    h: 223
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance10.png": {
                frame: {
                    x: 1,
                    y: 744,
                    w: 178,
                    h: 223
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 113,
                    y: 106,
                    w: 178,
                    h: 223
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance11.png": {
                frame: {
                    x: 226,
                    y: 569,
                    w: 170,
                    h: 223
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 121,
                    y: 106,
                    w: 170,
                    h: 223
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            }
        },
        animations: {
            CHAR_SuperStick: ["CHAR_SuperStick0001.png", "CHAR_SuperStick0002.png", "CHAR_SuperStick0003.png", "CHAR_SuperStick0004.png", "CHAR_SuperStick0005.png", "CHAR_SuperStick0006.png"],
            dance: ["dance07.png", "dance08.png", "dance09.png", "dance10.png", "dance11.png"]
        },
        meta: {
            app: "https://www.codeandweb.com/texturepacker",
            version: "1.0",
            image: "CHAR_SuperStick.png",
            format: "RGBA8888",
            size: {
                w: 512,
                h: 1024
            },
            scale: "0.9",
            smartupdate: "$TexturePacker:SmartUpdate:4869fdb089eea373a27bf289609014ca:d552bc41c5038d15cfb6797c90d46ac2:908efdd5771351a0acbc3de0ce9ef13a$"
        }
    }
}, function(t, e, n) {
    t.exports = n.p + "images/82d481b0f0594b10f47878452ccb3f6e-CHAR_RobotMan.png"
}, function(t) {
    t.exports = {
        frames: {
            "CHAR_RobotMan0002.png": {
                frame: {
                    x: 380,
                    y: 1,
                    w: 176,
                    h: 183
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 150,
                    y: 126,
                    w: 176,
                    h: 183
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "CHAR_RobotMan0003.png": {
                frame: {
                    x: 1,
                    y: 1,
                    w: 206,
                    h: 309
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 124,
                    y: 75,
                    w: 206,
                    h: 309
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "CHAR_RobotMan0004.png": {
                frame: {
                    x: 345,
                    y: 192,
                    w: 167,
                    h: 188
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 136,
                    y: 135,
                    w: 167,
                    h: 188
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "CHAR_RobotMan0005.png": {
                frame: {
                    x: 1,
                    y: 555,
                    w: 172,
                    h: 239
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 147,
                    y: 116,
                    w: 172,
                    h: 239
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "CHAR_RobotMan0006.png": {
                frame: {
                    x: 345,
                    y: 382,
                    w: 122,
                    h: 122
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 169,
                    y: 170,
                    w: 122,
                    h: 122
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "CHAR_RobotMan0007.png": {
                frame: {
                    x: 328,
                    y: 525,
                    w: 168,
                    h: 190
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 146,
                    y: 136,
                    w: 168,
                    h: 190
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance06.png": {
                frame: {
                    x: 1,
                    y: 312,
                    w: 170,
                    h: 241
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 145,
                    y: 85,
                    w: 170,
                    h: 241
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance07.png": {
                frame: {
                    x: 1,
                    y: 796,
                    w: 180,
                    h: 220
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 140,
                    y: 107,
                    w: 180,
                    h: 220
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance08.png": {
                frame: {
                    x: 183,
                    y: 733,
                    w: 156,
                    h: 205
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 152,
                    y: 86,
                    w: 156,
                    h: 205
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance09.png": {
                frame: {
                    x: 341,
                    y: 717,
                    w: 168,
                    h: 190
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 146,
                    y: 80,
                    w: 168,
                    h: 190
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance10.png": {
                frame: {
                    x: 173,
                    y: 312,
                    w: 170,
                    h: 211
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 146,
                    y: 102,
                    w: 170,
                    h: 211
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance11.png": {
                frame: {
                    x: 514,
                    y: 186,
                    w: 175,
                    h: 178
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 143,
                    y: 149,
                    w: 175,
                    h: 178
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance12.png": {
                frame: {
                    x: 498,
                    y: 382,
                    w: 182,
                    h: 168
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 140,
                    y: 159,
                    w: 182,
                    h: 168
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance13.png": {
                frame: {
                    x: 175,
                    y: 525,
                    w: 151,
                    h: 206
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 157,
                    y: 90,
                    w: 151,
                    h: 206
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance14.png": {
                frame: {
                    x: 209,
                    y: 1,
                    w: 169,
                    h: 189
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 158,
                    y: 58,
                    w: 169,
                    h: 189
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            }
        },
        animations: {
            CHAR_RobotMan: ["CHAR_RobotMan0002.png", "CHAR_RobotMan0003.png", "CHAR_RobotMan0004.png", "CHAR_RobotMan0005.png", "CHAR_RobotMan0006.png", "CHAR_RobotMan0007.png"],
            dance: ["dance06.png", "dance07.png", "dance08.png", "dance09.png", "dance10.png", "dance11.png", "dance12.png", "dance13.png", "dance14.png"]
        },
        meta: {
            app: "https://www.codeandweb.com/texturepacker",
            version: "1.0",
            image: "CHAR_RobotMan.png",
            format: "RGBA8888",
            size: {
                w: 1024,
                h: 1024
            },
            scale: "0.9",
            smartupdate: "$TexturePacker:SmartUpdate:0a3738ad22d5c2022387651c4024147e:64011f7f3e1b9748bec1f16a79b7b761:acca6aa8199e7e3ba6b541afadb8ea53$"
        }
    }
}, function(t, e, n) {
    t.exports = n.p + "images/8aca225d45e83ac265aec132085a8b71-CHAR_Dragon.png"
}, function(t) {
    t.exports = {
        frames: {
            "CHAR_Dragon0001.png": {
                frame: {
                    x: 1,
                    y: 822,
                    w: 197,
                    h: 212
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 113,
                    y: 124,
                    w: 197,
                    h: 212
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "CHAR_Dragon0002.png": {
                frame: {
                    x: 253,
                    y: 689,
                    w: 213,
                    h: 238
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 128,
                    y: 125,
                    w: 213,
                    h: 238
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "CHAR_Dragon0003.png": {
                frame: {
                    x: 1,
                    y: 1,
                    w: 193,
                    h: 330
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 125,
                    y: 53,
                    w: 193,
                    h: 330
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "CHAR_Dragon0004.png": {
                frame: {
                    x: 333,
                    y: 1,
                    w: 172,
                    h: 236
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 137,
                    y: 125,
                    w: 172,
                    h: 236
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "CHAR_Dragon0005.png": {
                frame: {
                    x: 1,
                    y: 595,
                    w: 225,
                    h: 250
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 130,
                    y: 107,
                    w: 225,
                    h: 250
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "CHAR_Dragon0006.png": {
                frame: {
                    x: 320,
                    y: 565,
                    w: 122,
                    h: 122
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 170,
                    y: 170,
                    w: 122,
                    h: 122
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance07.png": {
                frame: {
                    x: 321,
                    y: 239,
                    w: 186,
                    h: 161
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 134,
                    y: 169,
                    w: 186,
                    h: 161
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance08.png": {
                frame: {
                    x: 320,
                    y: 402,
                    w: 186,
                    h: 161
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 134,
                    y: 169,
                    w: 186,
                    h: 161
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance09.png": {
                frame: {
                    x: 320,
                    y: 402,
                    w: 186,
                    h: 161
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 134,
                    y: 169,
                    w: 186,
                    h: 161
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance10.png": {
                frame: {
                    x: 1,
                    y: 196,
                    w: 318,
                    h: 186
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 2,
                    y: 144,
                    w: 318,
                    h: 186
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance11.png": {
                frame: {
                    x: 1,
                    y: 384,
                    w: 317,
                    h: 209
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 2,
                    y: 141,
                    w: 317,
                    h: 209
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance12.png": {
                frame: {
                    x: 1,
                    y: 196,
                    w: 318,
                    h: 186
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 2,
                    y: 144,
                    w: 318,
                    h: 186
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance13.png": {
                frame: {
                    x: 1,
                    y: 384,
                    w: 317,
                    h: 209
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 2,
                    y: 141,
                    w: 317,
                    h: 209
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            }
        },
        animations: {
            CHAR_Dragon: ["CHAR_Dragon0001.png", "CHAR_Dragon0002.png", "CHAR_Dragon0003.png", "CHAR_Dragon0004.png", "CHAR_Dragon0005.png", "CHAR_Dragon0006.png"],
            dance: ["dance07.png", "dance08.png", "dance09.png", "dance10.png", "dance11.png", "dance12.png", "dance13.png"]
        },
        meta: {
            app: "https://www.codeandweb.com/texturepacker",
            version: "1.0",
            image: "CHAR_Dragon.png",
            format: "RGBA8888",
            size: {
                w: 512,
                h: 1024
            },
            scale: "0.9",
            smartupdate: "$TexturePacker:SmartUpdate:98847550a9cca2d6a79d5a2ede4c0888:2f17ff6b997f73b02003da29821cd59d:e5475727f7d2590ce3a1968c0fed681e$"
        }
    }
}, function(t, e, n) {
    t.exports = n.p + "images/34b2b8621726d53802db6f864b49cd90-CHAR_TikiMan.png"
}, function(t) {
    t.exports = {
        frames: {
            "CHAR_TikiMan0001.png": {
                frame: {
                    x: 457,
                    y: 241,
                    w: 186,
                    h: 221
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 133,
                    y: 133,
                    w: 186,
                    h: 221
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "CHAR_TikiMan0002.png": {
                frame: {
                    x: 258,
                    y: 818,
                    w: 226,
                    h: 201
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 148,
                    y: 129,
                    w: 226,
                    h: 201
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "CHAR_TikiMan0003.png": {
                frame: {
                    x: 1,
                    y: 828,
                    w: 190,
                    h: 255
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 114,
                    y: 112,
                    w: 190,
                    h: 255
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "CHAR_TikiMan0004.png": {
                frame: {
                    x: 486,
                    y: 758,
                    w: 183,
                    h: 225
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 152,
                    y: 138,
                    w: 183,
                    h: 225
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "CHAR_TikiMan0005.png": {
                frame: {
                    x: 215,
                    y: 1,
                    w: 198,
                    h: 276
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 121,
                    y: 93,
                    w: 198,
                    h: 276
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "CHAR_TikiMan0006.png": {
                frame: {
                    x: 629,
                    y: 1,
                    w: 123,
                    h: 123
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 169,
                    y: 169,
                    w: 123,
                    h: 123
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance07.png": {
                frame: {
                    x: 1,
                    y: 285,
                    w: 214,
                    h: 279
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 122,
                    y: 46,
                    w: 214,
                    h: 279
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance08.png": {
                frame: {
                    x: 1,
                    y: 1,
                    w: 212,
                    h: 282
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 88,
                    y: 42,
                    w: 212,
                    h: 282
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance09.png": {
                frame: {
                    x: 427,
                    y: 522,
                    w: 234,
                    h: 234
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 57,
                    y: 90,
                    w: 234,
                    h: 234
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance10.png": {
                frame: {
                    x: 415,
                    y: 1,
                    w: 212,
                    h: 238
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 105,
                    y: 88,
                    w: 212,
                    h: 238
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance11.png": {
                frame: {
                    x: 212,
                    y: 566,
                    w: 213,
                    h: 250
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 129,
                    y: 73,
                    w: 213,
                    h: 250
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance12.png": {
                frame: {
                    x: 1,
                    y: 566,
                    w: 209,
                    h: 260
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 169,
                    y: 64,
                    w: 209,
                    h: 260
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance13.png": {
                frame: {
                    x: 217,
                    y: 279,
                    w: 241,
                    h: 238
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 176,
                    y: 86,
                    w: 241,
                    h: 238
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            }
        },
        animations: {
            CHAR_TikiMan: ["CHAR_TikiMan0001.png", "CHAR_TikiMan0002.png", "CHAR_TikiMan0003.png", "CHAR_TikiMan0004.png", "CHAR_TikiMan0005.png", "CHAR_TikiMan0006.png"],
            dance: ["dance07.png", "dance08.png", "dance09.png", "dance10.png", "dance11.png", "dance12.png", "dance13.png"]
        },
        meta: {
            app: "https://www.codeandweb.com/texturepacker",
            version: "1.0",
            image: "CHAR_TikiMan.png",
            format: "RGBA8888",
            size: {
                w: 1024,
                h: 1024
            },
            scale: "0.9",
            smartupdate: "$TexturePacker:SmartUpdate:49672ab79a6546aea1c6df89e344f26c:1805cf34d5a6c59fb8ab22fbb5a77d65:44ea73fa0733ce658c31873c9f1452a6$"
        }
    }
}, function(t, e, n) {
    t.exports = n.p + "images/cb00f3da7bca38a121a28feac4b4d9ea-CHAR_HotDog.png"
}, function(t) {
    t.exports = {
        frames: {
            "CHAR_HotDog0001.png": {
                frame: {
                    x: 254,
                    y: 472,
                    w: 164,
                    h: 244
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 110,
                    y: 128,
                    w: 164,
                    h: 244
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "CHAR_HotDog0002.png": {
                frame: {
                    x: 291,
                    y: 1,
                    w: 189,
                    h: 215
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 181,
                    y: 124,
                    w: 189,
                    h: 215
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "CHAR_HotDog0003.png": {
                frame: {
                    x: 1,
                    y: 267,
                    w: 251,
                    h: 231
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 107,
                    y: 102,
                    w: 251,
                    h: 231
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "CHAR_HotDog0004.png": {
                frame: {
                    x: 1,
                    y: 1,
                    w: 123,
                    h: 288
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 170,
                    y: 124,
                    w: 123,
                    h: 288
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "CHAR_HotDog0005.png": {
                frame: {
                    x: 1,
                    y: 126,
                    w: 139,
                    h: 281
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 152,
                    y: 105,
                    w: 139,
                    h: 281
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "CHAR_HotDog0006.png": {
                frame: {
                    x: 1,
                    y: 741,
                    w: 120,
                    h: 120
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 170,
                    y: 169,
                    w: 120,
                    h: 120
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance07.png": {
                frame: {
                    x: 284,
                    y: 192,
                    w: 150,
                    h: 213
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 144,
                    y: 116,
                    w: 150,
                    h: 213
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance08.png": {
                frame: {
                    x: 1,
                    y: 500,
                    w: 115,
                    h: 203
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 161,
                    y: 127,
                    w: 115,
                    h: 203
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance09.png": {
                frame: {
                    x: 1,
                    y: 617,
                    w: 122,
                    h: 189
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 169,
                    y: 140,
                    w: 122,
                    h: 189
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance10.png": {
                frame: {
                    x: 254,
                    y: 344,
                    w: 126,
                    h: 249
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 168,
                    y: 80,
                    w: 126,
                    h: 249
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            }
        },
        animations: {
            CHAR_HotDog: ["CHAR_HotDog0001.png", "CHAR_HotDog0002.png", "CHAR_HotDog0003.png", "CHAR_HotDog0004.png", "CHAR_HotDog0005.png", "CHAR_HotDog0006.png"],
            dance: ["dance07.png", "dance08.png", "dance09.png", "dance10.png"]
        },
        meta: {
            app: "https://www.codeandweb.com/texturepacker",
            version: "1.0",
            image: "CHAR_HotDog.png",
            format: "RGBA8888",
            size: {
                w: 512,
                h: 1024
            },
            scale: "0.9",
            smartupdate: "$TexturePacker:SmartUpdate:88b212705996733daa95d75a40df6bc2:b7a96caf52b96edd55127e4d71d60b6b:d973817f9a8271d27ed3158c08ce58a5$"
        }
    }
}, function(t, e, n) {
    t.exports = n.p + "images/4f337cbf23b4fd91307352b5f9a2d5de-CHAR_LemonMan.png"
}, function(t) {
    t.exports = {
        frames: {
            "CHAR_LemonMan0001.png": {
                frame: {
                    x: 1,
                    y: 308,
                    w: 194,
                    h: 248
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 101,
                    y: 127,
                    w: 194,
                    h: 248
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "CHAR_LemonMan0002.png": {
                frame: {
                    x: 279,
                    y: 1,
                    w: 186,
                    h: 230
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 160,
                    y: 127,
                    w: 186,
                    h: 230
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "CHAR_LemonMan0003.png": {
                frame: {
                    x: 1,
                    y: 1,
                    w: 162,
                    h: 276
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 143,
                    y: 107,
                    w: 162,
                    h: 276
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "CHAR_LemonMan0004.png": {
                frame: {
                    x: 268,
                    y: 189,
                    w: 243,
                    h: 237
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 106,
                    y: 125,
                    w: 243,
                    h: 237
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "CHAR_LemonMan0005.png": {
                frame: {
                    x: 251,
                    y: 428,
                    w: 242,
                    h: 218
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 113,
                    y: 172,
                    w: 242,
                    h: 218
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "CHAR_LemonMan0006.png": {
                frame: {
                    x: 1,
                    y: 656,
                    w: 120,
                    h: 121
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 170,
                    y: 170,
                    w: 120,
                    h: 121
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance07.png": {
                frame: {
                    x: 1,
                    y: 504,
                    w: 150,
                    h: 227
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 170,
                    y: 100,
                    w: 150,
                    h: 227
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance08.png": {
                frame: {
                    x: 230,
                    y: 648,
                    w: 163,
                    h: 205
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 168,
                    y: 122,
                    w: 163,
                    h: 205
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance09.png": {
                frame: {
                    x: 1,
                    y: 813,
                    w: 180,
                    h: 193
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 140,
                    y: 134,
                    w: 180,
                    h: 193
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance10.png": {
                frame: {
                    x: 1,
                    y: 165,
                    w: 141,
                    h: 265
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 170,
                    y: 62,
                    w: 141,
                    h: 265
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            }
        },
        animations: {
            CHAR_LemonMan: ["CHAR_LemonMan0001.png", "CHAR_LemonMan0002.png", "CHAR_LemonMan0003.png", "CHAR_LemonMan0004.png", "CHAR_LemonMan0005.png", "CHAR_LemonMan0006.png"],
            dance: ["dance07.png", "dance08.png", "dance09.png", "dance10.png"]
        },
        meta: {
            app: "https://www.codeandweb.com/texturepacker",
            version: "1.0",
            image: "CHAR_LemonMan.png",
            format: "RGBA8888",
            size: {
                w: 512,
                h: 1024
            },
            scale: "0.9",
            smartupdate: "$TexturePacker:SmartUpdate:129e8244eb9391dc079f7f34ff1f4011:2fb427124d6721cf6fa8a6c951cfea60:79a9da5c65abb02a8af58c7b2d94b5fc$"
        }
    }
}, function(t, e, n) {
    t.exports = n.p + "images/368f37cb016283b9e9dee8c14fab9ad4-CHAR_Plant.png"
}, function(t) {
    t.exports = {
        frames: {
            "CHAR_Plant0001.png": {
                frame: {
                    x: 251,
                    y: 392,
                    w: 174,
                    h: 232
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 171,
                    y: 131,
                    w: 174,
                    h: 232
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "CHAR_Plant0002.png": {
                frame: {
                    x: 293,
                    y: 1,
                    w: 219,
                    h: 201
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 71,
                    y: 132,
                    w: 219,
                    h: 201
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "CHAR_Plant0003.png": {
                frame: {
                    x: 231,
                    y: 568,
                    w: 152,
                    h: 220
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 143,
                    y: 162,
                    w: 152,
                    h: 220
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "CHAR_Plant0004.png": {
                frame: {
                    x: 265,
                    y: 222,
                    w: 168,
                    h: 237
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 153,
                    y: 125,
                    w: 168,
                    h: 237
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "CHAR_Plant0005.png": {
                frame: {
                    x: 1,
                    y: 518,
                    w: 167,
                    h: 228
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 161,
                    y: 122,
                    w: 167,
                    h: 228
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "CHAR_Plant0006.png": {
                frame: {
                    x: 197,
                    y: 848,
                    w: 120,
                    h: 121
                },
                rotated: !1,
                trimmed: !0,
                spriteSourceSize: {
                    x: 170,
                    y: 170,
                    w: 120,
                    h: 121
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance07.png": {
                frame: {
                    x: 1,
                    y: 848,
                    w: 163,
                    h: 194
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 166,
                    y: 122,
                    w: 163,
                    h: 194
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance08.png": {
                frame: {
                    x: 1,
                    y: 687,
                    w: 159,
                    h: 200
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 169,
                    y: 116,
                    w: 159,
                    h: 200
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance09.png": {
                frame: {
                    x: 1,
                    y: 352,
                    w: 164,
                    h: 248
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 175,
                    y: 68,
                    w: 164,
                    h: 248
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance10.png": {
                frame: {
                    x: 1,
                    y: 1,
                    w: 174,
                    h: 290
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 156,
                    y: 26,
                    w: 174,
                    h: 290
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            },
            "dance11.png": {
                frame: {
                    x: 1,
                    y: 177,
                    w: 173,
                    h: 262
                },
                rotated: !0,
                trimmed: !0,
                spriteSourceSize: {
                    x: 156,
                    y: 33,
                    w: 173,
                    h: 262
                },
                sourceSize: {
                    w: 461,
                    h: 461
                },
                anchor: {
                    x: 0,
                    y: 0
                }
            }
        },
        animations: {
            CHAR_Plant: ["CHAR_Plant0001.png", "CHAR_Plant0002.png", "CHAR_Plant0003.png", "CHAR_Plant0004.png", "CHAR_Plant0005.png", "CHAR_Plant0006.png"],
            dance: ["dance07.png", "dance08.png", "dance09.png", "dance10.png", "dance11.png"]
        },
        meta: {
            app: "https://www.codeandweb.com/texturepacker",
            version: "1.0",
            image: "CHAR_Plant.png",
            format: "RGBA8888",
            size: {
                w: 512,
                h: 1024
            },
            scale: "0.9",
            smartupdate: "$TexturePacker:SmartUpdate:cda33cf86640ea24f55a3da48dfd378c:f7cb6c1f577ea74e77a9ee2981486c71:89b95b3ae613f373b99f985dcfa16794$"
        }
    }
}, function(t, e, n) {
    t.exports = n.p + "images/1635fd44544c14a10472da2ec5d39197-madbox_blackBG.png"
}, function(t, e) {
    t.exports = "data:image/png;base64,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"
}, function(t, e) {
    function n() {
        return t.exports = n = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
            }
            return t
        }, n.apply(this, arguments)
    }
    t.exports = n
}, function(t, e, n) {
    n(284), t.exports = n(283)
}, function(t, e, n) {
    var r = function(t) {
        "use strict";
        var e, n = Object.prototype,
            r = n.hasOwnProperty,
            i = "function" == typeof Symbol ? Symbol : {},
            o = i.iterator || "@@iterator",
            a = i.asyncIterator || "@@asyncIterator",
            s = i.toStringTag || "@@toStringTag";

        function A(t, e, n, r) {
            var i = e && e.prototype instanceof f ? e : f,
                o = Object.create(i.prototype),
                a = new T(r || []);
            return o._invoke = function(t, e, n) {
                var r = c;
                return function(i, o) {
                    if (r === l) throw new Error("Generator is already running");
                    if (r === d) {
                        if ("throw" === i) throw o;
                        return I()
                    }
                    for (n.method = i, n.arg = o;;) {
                        var a = n.delegate;
                        if (a) {
                            var s = S(a, n);
                            if (s) {
                                if (s === p) continue;
                                return s
                            }
                        }
                        if ("next" === n.method) n.sent = n._sent = n.arg;
                        else if ("throw" === n.method) {
                            if (r === c) throw r = d, n.arg;
                            n.dispatchException(n.arg)
                        } else "return" === n.method && n.abrupt("return", n.arg);
                        r = l;
                        var A = h(t, e, n);
                        if ("normal" === A.type) {
                            if (r = n.done ? d : u, A.arg === p) continue;
                            return {
                                value: A.arg,
                                done: n.done
                            }
                        }
                        "throw" === A.type && (r = d, n.method = "throw", n.arg = A.arg)
                    }
                }
            }(t, n, a), o
        }

        function h(t, e, n) {
            try {
                return {
                    type: "normal",
                    arg: t.call(e, n)
                }
            } catch (t) {
                return {
                    type: "throw",
                    arg: t
                }
            }
        }
        t.wrap = A;
        var c = "suspendedStart",
            u = "suspendedYield",
            l = "executing",
            d = "completed",
            p = {};

        function f() {}

        function y() {}

        function x() {}
        var m = {};
        m[o] = function() {
            return this
        };
        var g = Object.getPrototypeOf,
            w = g && g(g(k([])));
        w && w !== n && r.call(w, o) && (m = w);
        var v = x.prototype = f.prototype = Object.create(m);

        function b(t) {
            ["next", "throw", "return"].forEach(function(e) {
                t[e] = function(t) {
                    return this._invoke(e, t)
                }
            })
        }

        function _(t) {
            var e;
            this._invoke = function(n, i) {
                function o() {
                    return new Promise(function(e, o) {
                        ! function e(n, i, o, a) {
                            var s = h(t[n], t, i);
                            if ("throw" !== s.type) {
                                var A = s.arg,
                                    c = A.value;
                                return c && "object" == typeof c && r.call(c, "__await") ? Promise.resolve(c.__await).then(function(t) {
                                    e("next", t, o, a)
                                }, function(t) {
                                    e("throw", t, o, a)
                                }) : Promise.resolve(c).then(function(t) {
                                    A.value = t, o(A)
                                }, function(t) {
                                    return e("throw", t, o, a)
                                })
                            }
                            a(s.arg)
                        }(n, i, e, o)
                    })
                }
                return e = e ? e.then(o, o) : o()
            }
        }

        function S(t, n) {
            var r = t.iterator[n.method];
            if (r === e) {
                if (n.delegate = null, "throw" === n.method) {
                    if (t.iterator.return && (n.method = "return", n.arg = e, S(t, n), "throw" === n.method)) return p;
                    n.method = "throw", n.arg = new TypeError("The iterator does not provide a 'throw' method")
                }
                return p
            }
            var i = h(r, t.iterator, n.arg);
            if ("throw" === i.type) return n.method = "throw", n.arg = i.arg, n.delegate = null, p;
            var o = i.arg;
            return o ? o.done ? (n[t.resultName] = o.value, n.next = t.nextLoc, "return" !== n.method && (n.method = "next", n.arg = e), n.delegate = null, p) : o : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, p)
        }

        function E(t) {
            var e = {
                tryLoc: t[0]
            };
            1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
        }

        function C(t) {
            var e = t.completion || {};
            e.type = "normal", delete e.arg, t.completion = e
        }

        function T(t) {
            this.tryEntries = [{
                tryLoc: "root"
            }], t.forEach(E, this), this.reset(!0)
        }

        function k(t) {
            if (t) {
                var n = t[o];
                if (n) return n.call(t);
                if ("function" == typeof t.next) return t;
                if (!isNaN(t.length)) {
                    var i = -1,
                        a = function n() {
                            for (; ++i < t.length;)
                                if (r.call(t, i)) return n.value = t[i], n.done = !1, n;
                            return n.value = e, n.done = !0, n
                        };
                    return a.next = a
                }
            }
            return {
                next: I
            }
        }

        function I() {
            return {
                value: e,
                done: !0
            }
        }
        return y.prototype = v.constructor = x, x.constructor = y, x[s] = y.displayName = "GeneratorFunction", t.isGeneratorFunction = function(t) {
            var e = "function" == typeof t && t.constructor;
            return !!e && (e === y || "GeneratorFunction" === (e.displayName || e.name))
        }, t.mark = function(t) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(t, x) : (t.__proto__ = x, s in t || (t[s] = "GeneratorFunction")), t.prototype = Object.create(v), t
        }, t.awrap = function(t) {
            return {
                __await: t
            }
        }, b(_.prototype), _.prototype[a] = function() {
            return this
        }, t.AsyncIterator = _, t.async = function(e, n, r, i) {
            var o = new _(A(e, n, r, i));
            return t.isGeneratorFunction(n) ? o : o.next().then(function(t) {
                return t.done ? t.value : o.next()
            })
        }, b(v), v[s] = "Generator", v[o] = function() {
            return this
        }, v.toString = function() {
            return "[object Generator]"
        }, t.keys = function(t) {
            var e = [];
            for (var n in t) e.push(n);
            return e.reverse(),
                function n() {
                    for (; e.length;) {
                        var r = e.pop();
                        if (r in t) return n.value = r, n.done = !1, n
                    }
                    return n.done = !0, n
                }
        }, t.values = k, T.prototype = {
            constructor: T,
            reset: function(t) {
                if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(C), !t)
                    for (var n in this) "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e)
            },
            stop: function() {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ("throw" === t.type) throw t.arg;
                return this.rval
            },
            dispatchException: function(t) {
                if (this.done) throw t;
                var n = this;

                function i(r, i) {
                    return s.type = "throw", s.arg = t, n.next = r, i && (n.method = "next", n.arg = e), !!i
                }
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                    var a = this.tryEntries[o],
                        s = a.completion;
                    if ("root" === a.tryLoc) return i("end");
                    if (a.tryLoc <= this.prev) {
                        var A = r.call(a, "catchLoc"),
                            h = r.call(a, "finallyLoc");
                        if (A && h) {
                            if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                            if (this.prev < a.finallyLoc) return i(a.finallyLoc)
                        } else if (A) {
                            if (this.prev < a.catchLoc) return i(a.catchLoc, !0)
                        } else {
                            if (!h) throw new Error("try statement without catch or finally");
                            if (this.prev < a.finallyLoc) return i(a.finallyLoc)
                        }
                    }
                }
            },
            abrupt: function(t, e) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                    var i = this.tryEntries[n];
                    if (i.tryLoc <= this.prev && r.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                        var o = i;
                        break
                    }
                }
                o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc && (o = null);
                var a = o ? o.completion : {};
                return a.type = t, a.arg = e, o ? (this.method = "next", this.next = o.finallyLoc, p) : this.complete(a)
            },
            complete: function(t, e) {
                if ("throw" === t.type) throw t.arg;
                return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), p
            },
            finish: function(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                    var n = this.tryEntries[e];
                    if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), C(n), p
                }
            },
            catch: function(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                    var n = this.tryEntries[e];
                    if (n.tryLoc === t) {
                        var r = n.completion;
                        if ("throw" === r.type) {
                            var i = r.arg;
                            C(n)
                        }
                        return i
                    }
                }
                throw new Error("illegal catch attempt")
            },
            delegateYield: function(t, n, r) {
                return this.delegate = {
                    iterator: k(t),
                    resultName: n,
                    nextLoc: r
                }, "next" === this.method && (this.arg = e), p
            }
        }, t
    }(t.exports);
    try {
        regeneratorRuntime = r
    } catch (t) {
        Function("r", "regeneratorRuntime = r")(r)
    }
}, function(t, e) {
    t.exports = function(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t
    }
}, function(t, e) {
    function n(e, r) {
        return t.exports = n = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        }, n(e, r)
    }
    t.exports = n
}, function(t, e, n) {
    "use strict";
    (function(t) {
        var e = n(27),
            r = n(28),
            i = n.n(r);
        /*!
         * @pixi/polyfill - v5.0.4
         * Compiled Fri, 07 Jun 2019 17:17:49 UTC
         *
         * @pixi/polyfill is licensed under the MIT License.
         * http://www.opensource.org/licenses/mit-license
         */
        window.Promise || (window.Promise = e.Polyfill), Object.assign || (Object.assign = i.a);
        var o = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {};
        if (Date.now && Date.prototype.getTime || (Date.now = function() {
                return (new Date).getTime()
            }), !o.performance || !o.performance.now) {
            var a = Date.now();
            o.performance || (o.performance = {}), o.performance.now = function() {
                return Date.now() - a
            }
        }
        for (var s = Date.now(), A = ["ms", "moz", "webkit", "o"], h = 0; h < A.length && !o.requestAnimationFrame; ++h) {
            var c = A[h];
            o.requestAnimationFrame = o[c + "RequestAnimationFrame"], o.cancelAnimationFrame = o[c + "CancelAnimationFrame"] || o[c + "CancelRequestAnimationFrame"]
        }
        o.requestAnimationFrame || (o.requestAnimationFrame = function(t) {
            if ("function" != typeof t) throw new TypeError(t + "is not a function");
            var e = Date.now(),
                n = 16 + s - e;
            return n < 0 && (n = 0), s = e, setTimeout(function() {
                s = Date.now(), t(performance.now())
            }, n)
        }), o.cancelAnimationFrame || (o.cancelAnimationFrame = function(t) {
            return clearTimeout(t)
        }), Math.sign || (Math.sign = function(t) {
            return 0 === (t = Number(t)) || isNaN(t) ? t : t > 0 ? 1 : -1
        }), Number.isInteger || (Number.isInteger = function(t) {
            return "number" == typeof t && isFinite(t) && Math.floor(t) === t
        }), window.ArrayBuffer || (window.ArrayBuffer = Array), window.Float32Array || (window.Float32Array = Array), window.Uint32Array || (window.Uint32Array = Array), window.Uint16Array || (window.Uint16Array = Array), window.Uint8Array || (window.Uint8Array = Array), window.Int32Array || (window.Int32Array = Array)
    }).call(this, n(11))
}, function(t, e, n) {
    (function(t) {
        var r = void 0 !== t && t || "undefined" != typeof self && self || window,
            i = Function.prototype.apply;

        function o(t, e) {
            this._id = t, this._clearFn = e
        }
        e.setTimeout = function() {
            return new o(i.call(setTimeout, r, arguments), clearTimeout)
        }, e.setInterval = function() {
            return new o(i.call(setInterval, r, arguments), clearInterval)
        }, e.clearTimeout = e.clearInterval = function(t) {
            t && t.close()
        }, o.prototype.unref = o.prototype.ref = function() {}, o.prototype.close = function() {
            this._clearFn.call(r, this._id)
        }, e.enroll = function(t, e) {
            clearTimeout(t._idleTimeoutId), t._idleTimeout = e
        }, e.unenroll = function(t) {
            clearTimeout(t._idleTimeoutId), t._idleTimeout = -1
        }, e._unrefActive = e.active = function(t) {
            clearTimeout(t._idleTimeoutId);
            var e = t._idleTimeout;
            e >= 0 && (t._idleTimeoutId = setTimeout(function() {
                t._onTimeout && t._onTimeout()
            }, e))
        }, n(131), e.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== t && t.setImmediate || this && this.setImmediate, e.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== t && t.clearImmediate || this && this.clearImmediate
    }).call(this, n(11))
}, function(t, e, n) {
    (function(t, e) {
        ! function(t, n) {
            "use strict";
            if (!t.setImmediate) {
                var r, i, o, a, s, A = 1,
                    h = {},
                    c = !1,
                    u = t.document,
                    l = Object.getPrototypeOf && Object.getPrototypeOf(t);
                l = l && l.setTimeout ? l : t, "[object process]" === {}.toString.call(t.process) ? r = function(t) {
                    e.nextTick(function() {
                        p(t)
                    })
                } : ! function() {
                    if (t.postMessage && !t.importScripts) {
                        var e = !0,
                            n = t.onmessage;
                        return t.onmessage = function() {
                            e = !1
                        }, t.postMessage("", "*"), t.onmessage = n, e
                    }
                }() ? t.MessageChannel ? ((o = new MessageChannel).port1.onmessage = function(t) {
                    p(t.data)
                }, r = function(t) {
                    o.port2.postMessage(t)
                }) : u && "onreadystatechange" in u.createElement("script") ? (i = u.documentElement, r = function(t) {
                    var e = u.createElement("script");
                    e.onreadystatechange = function() {
                        p(t), e.onreadystatechange = null, i.removeChild(e), e = null
                    }, i.appendChild(e)
                }) : r = function(t) {
                    setTimeout(p, 0, t)
                } : (a = "setImmediate$" + Math.random() + "$", s = function(e) {
                    e.source === t && "string" == typeof e.data && 0 === e.data.indexOf(a) && p(+e.data.slice(a.length))
                }, t.addEventListener ? t.addEventListener("message", s, !1) : t.attachEvent("onmessage", s), r = function(e) {
                    t.postMessage(a + e, "*")
                }), l.setImmediate = function(t) {
                    "function" != typeof t && (t = new Function("" + t));
                    for (var e = new Array(arguments.length - 1), n = 0; n < e.length; n++) e[n] = arguments[n + 1];
                    var i = {
                        callback: t,
                        args: e
                    };
                    return h[A] = i, r(A), A++
                }, l.clearImmediate = d
            }

            function d(t) {
                delete h[t]
            }

            function p(t) {
                if (c) setTimeout(p, 0, t);
                else {
                    var e = h[t];
                    if (e) {
                        c = !0;
                        try {
                            ! function(t) {
                                var e = t.callback,
                                    r = t.args;
                                switch (r.length) {
                                    case 0:
                                        e();
                                        break;
                                    case 1:
                                        e(r[0]);
                                        break;
                                    case 2:
                                        e(r[0], r[1]);
                                        break;
                                    case 3:
                                        e(r[0], r[1], r[2]);
                                        break;
                                    default:
                                        e.apply(n, r)
                                }
                            }(e)
                        } finally {
                            d(t), c = !1
                        }
                    }
                }
            }
        }("undefined" == typeof self ? void 0 === t ? this : t : self)
    }).call(this, n(11), n(132))
}, function(t, e) {
    var n, r, i = t.exports = {};

    function o() {
        throw new Error("setTimeout has not been defined")
    }

    function a() {
        throw new Error("clearTimeout has not been defined")
    }

    function s(t) {
        if (n === setTimeout) return setTimeout(t, 0);
        if ((n === o || !n) && setTimeout) return n = setTimeout, setTimeout(t, 0);
        try {
            return n(t, 0)
        } catch (e) {
            try {
                return n.call(null, t, 0)
            } catch (e) {
                return n.call(this, t, 0)
            }
        }
    }! function() {
        try {
            n = "function" == typeof setTimeout ? setTimeout : o
        } catch (t) {
            n = o
        }
        try {
            r = "function" == typeof clearTimeout ? clearTimeout : a
        } catch (t) {
            r = a
        }
    }();
    var A, h = [],
        c = !1,
        u = -1;

    function l() {
        c && A && (c = !1, A.length ? h = A.concat(h) : u = -1, h.length && d())
    }

    function d() {
        if (!c) {
            var t = s(l);
            c = !0;
            for (var e = h.length; e;) {
                for (A = h, h = []; ++u < e;) A && A[u].run();
                u = -1, e = h.length
            }
            A = null, c = !1,
                function(t) {
                    if (r === clearTimeout) return clearTimeout(t);
                    if ((r === a || !r) && clearTimeout) return r = clearTimeout, clearTimeout(t);
                    try {
                        r(t)
                    } catch (e) {
                        try {
                            return r.call(null, t)
                        } catch (e) {
                            return r.call(this, t)
                        }
                    }
                }(t)
        }
    }

    function p(t, e) {
        this.fun = t, this.array = e
    }

    function f() {}
    i.nextTick = function(t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        h.push(new p(t, e)), 1 !== h.length || c || s(d)
    }, p.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = f, i.addListener = f, i.once = f, i.off = f, i.removeListener = f, i.removeAllListeners = f, i.emit = f, i.prependListener = f, i.prependOnceListener = f, i.listeners = function(t) {
        return []
    }, i.binding = function(t) {
        throw new Error("process.binding is not supported")
    }, i.cwd = function() {
        return "/"
    }, i.chdir = function(t) {
        throw new Error("process.chdir is not supported")
    }, i.umask = function() {
        return 0
    }
}, function(t, e, n) {
    (function(t, r) {
        var i; /*! https://mths.be/punycode v1.4.1 by @mathias */
        ! function(o) {
            e && e.nodeType, t && t.nodeType;
            var a = "object" == typeof r && r;
            a.global !== a && a.window !== a && a.self;
            var s, A = 2147483647,
                h = 36,
                c = 1,
                u = 26,
                l = 38,
                d = 700,
                p = 72,
                f = 128,
                y = "-",
                x = /^xn--/,
                m = /[^\x20-\x7E]/,
                g = /[\x2E\u3002\uFF0E\uFF61]/g,
                w = {
                    overflow: "Overflow: input needs wider integers to process",
                    "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                    "invalid-input": "Invalid input"
                },
                v = h - c,
                b = Math.floor,
                _ = String.fromCharCode;

            function S(t) {
                throw new RangeError(w[t])
            }

            function E(t, e) {
                for (var n = t.length, r = []; n--;) r[n] = e(t[n]);
                return r
            }

            function C(t, e) {
                var n = t.split("@"),
                    r = "";
                return n.length > 1 && (r = n[0] + "@", t = n[1]), r + E((t = t.replace(g, ".")).split("."), e).join(".")
            }

            function T(t) {
                for (var e, n, r = [], i = 0, o = t.length; i < o;)(e = t.charCodeAt(i++)) >= 55296 && e <= 56319 && i < o ? 56320 == (64512 & (n = t.charCodeAt(i++))) ? r.push(((1023 & e) << 10) + (1023 & n) + 65536) : (r.push(e), i--) : r.push(e);
                return r
            }

            function k(t) {
                return E(t, function(t) {
                    var e = "";
                    return t > 65535 && (e += _((t -= 65536) >>> 10 & 1023 | 55296), t = 56320 | 1023 & t), e += _(t)
                }).join("")
            }

            function I(t, e) {
                return t + 22 + 75 * (t < 26) - ((0 != e) << 5)
            }

            function D(t, e, n) {
                var r = 0;
                for (t = n ? b(t / d) : t >> 1, t += b(t / e); t > v * u >> 1; r += h) t = b(t / v);
                return b(r + (v + 1) * t / (t + l))
            }

            function P(t) {
                var e, n, r, i, o, a, s, l, d, x, m, g = [],
                    w = t.length,
                    v = 0,
                    _ = f,
                    E = p;
                for ((n = t.lastIndexOf(y)) < 0 && (n = 0), r = 0; r < n; ++r) t.charCodeAt(r) >= 128 && S("not-basic"), g.push(t.charCodeAt(r));
                for (i = n > 0 ? n + 1 : 0; i < w;) {
                    for (o = v, a = 1, s = h; i >= w && S("invalid-input"), ((l = (m = t.charCodeAt(i++)) - 48 < 10 ? m - 22 : m - 65 < 26 ? m - 65 : m - 97 < 26 ? m - 97 : h) >= h || l > b((A - v) / a)) && S("overflow"), v += l * a, !(l < (d = s <= E ? c : s >= E + u ? u : s - E)); s += h) a > b(A / (x = h - d)) && S("overflow"), a *= x;
                    E = D(v - o, e = g.length + 1, 0 == o), b(v / e) > A - _ && S("overflow"), _ += b(v / e), v %= e, g.splice(v++, 0, _)
                }
                return k(g)
            }

            function R(t) {
                var e, n, r, i, o, a, s, l, d, x, m, g, w, v, E, C = [];
                for (g = (t = T(t)).length, e = f, n = 0, o = p, a = 0; a < g; ++a)(m = t[a]) < 128 && C.push(_(m));
                for (r = i = C.length, i && C.push(y); r < g;) {
                    for (s = A, a = 0; a < g; ++a)(m = t[a]) >= e && m < s && (s = m);
                    for (s - e > b((A - n) / (w = r + 1)) && S("overflow"), n += (s - e) * w, e = s, a = 0; a < g; ++a)
                        if ((m = t[a]) < e && ++n > A && S("overflow"), m == e) {
                            for (l = n, d = h; !(l < (x = d <= o ? c : d >= o + u ? u : d - o)); d += h) E = l - x, v = h - x, C.push(_(I(x + E % v, 0))), l = b(E / v);
                            C.push(_(I(l, 0))), o = D(n, w, r == i), n = 0, ++r
                        }++ n, ++e
                }
                return C.join("")
            }
            s = {
                version: "1.4.1",
                ucs2: {
                    decode: T,
                    encode: k
                },
                decode: P,
                encode: R,
                toASCII: function(t) {
                    return C(t, function(t) {
                        return m.test(t) ? "xn--" + R(t) : t
                    })
                },
                toUnicode: function(t) {
                    return C(t, function(t) {
                        return x.test(t) ? P(t.slice(4).toLowerCase()) : t
                    })
                }
            }, void 0 === (i = function() {
                return s
            }.call(e, n, e, t)) || (t.exports = i)
        }()
    }).call(this, n(134)(t), n(11))
}, function(t, e) {
    t.exports = function(t) {
        return t.webpackPolyfill || (t.deprecate = function() {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
            enumerable: !0,
            get: function() {
                return t.l
            }
        }), Object.defineProperty(t, "id", {
            enumerable: !0,
            get: function() {
                return t.i
            }
        }), t.webpackPolyfill = 1), t
    }
}, function(t, e, n) {
    "use strict";
    t.exports = {
        isString: function(t) {
            return "string" == typeof t
        },
        isObject: function(t) {
            return "object" == typeof t && null !== t
        },
        isNull: function(t) {
            return null === t
        },
        isNullOrUndefined: function(t) {
            return null == t
        }
    }
}, function(t, e, n) {
    "use strict";
    e.decode = e.parse = n(137), e.encode = e.stringify = n(138)
}, function(t, e, n) {
    "use strict";

    function r(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    t.exports = function(t, e, n, o) {
        e = e || "&", n = n || "=";
        var a = {};
        if ("string" != typeof t || 0 === t.length) return a;
        var s = /\+/g;
        t = t.split(e);
        var A = 1e3;
        o && "number" == typeof o.maxKeys && (A = o.maxKeys);
        var h = t.length;
        A > 0 && h > A && (h = A);
        for (var c = 0; c < h; ++c) {
            var u, l, d, p, f = t[c].replace(s, "%20"),
                y = f.indexOf(n);
            y >= 0 ? (u = f.substr(0, y), l = f.substr(y + 1)) : (u = f, l = ""), d = decodeURIComponent(u), p = decodeURIComponent(l), r(a, d) ? i(a[d]) ? a[d].push(p) : a[d] = [a[d], p] : a[d] = p
        }
        return a
    };
    var i = Array.isArray || function(t) {
        return "[object Array]" === Object.prototype.toString.call(t)
    }
}, function(t, e, n) {
    "use strict";
    var r = function(t) {
        switch (typeof t) {
            case "string":
                return t;
            case "boolean":
                return t ? "true" : "false";
            case "number":
                return isFinite(t) ? t : "";
            default:
                return ""
        }
    };
    t.exports = function(t, e, n, s) {
        return e = e || "&", n = n || "=", null === t && (t = void 0), "object" == typeof t ? o(a(t), function(a) {
            var s = encodeURIComponent(r(a)) + n;
            return i(t[a]) ? o(t[a], function(t) {
                return s + encodeURIComponent(r(t))
            }).join(e) : s + encodeURIComponent(r(t[a]))
        }).join(e) : s ? encodeURIComponent(r(s)) + n + encodeURIComponent(r(t)) : ""
    };
    var i = Array.isArray || function(t) {
        return "[object Array]" === Object.prototype.toString.call(t)
    };

    function o(t, e) {
        if (t.map) return t.map(e);
        for (var n = [], r = 0; r < t.length; r++) n.push(e(t[r], r));
        return n
    }
    var a = Object.keys || function(t) {
        var e = [];
        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.push(n);
        return e
    }
}, function(t, e, n) {
    "use strict";
    e.__esModule = !0, e.Loader = void 0;
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        },
        i = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }(),
        o = h(n(23)),
        a = h(n(24)),
        s = function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e.default = t, e
        }(n(25)),
        A = n(26);

    function h(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var c = /(#[\w-]+)?$/,
        u = e.Loader = function() {
            function t() {
                var e = this,
                    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.baseUrl = n, this.progress = 0, this.loading = !1, this.defaultQueryString = "", this._beforeMiddleware = [], this._afterMiddleware = [], this._resourcesParsing = [], this._boundLoadResource = function(t, n) {
                    return e._loadResource(t, n)
                }, this._queue = s.queue(this._boundLoadResource, r), this._queue.pause(), this.resources = {}, this.onProgress = new o.default, this.onError = new o.default, this.onLoad = new o.default, this.onStart = new o.default, this.onComplete = new o.default;
                for (var i = 0; i < t._defaultBeforeMiddleware.length; ++i) this.pre(t._defaultBeforeMiddleware[i]);
                for (var a = 0; a < t._defaultAfterMiddleware.length; ++a) this.use(t._defaultAfterMiddleware[a])
            }
            return t.prototype.add = function(t, e, n, i) {
                if (Array.isArray(t)) {
                    for (var o = 0; o < t.length; ++o) this.add(t[o]);
                    return this
                }
                if ("object" === (void 0 === t ? "undefined" : r(t)) && (i = e || t.callback || t.onComplete, n = t, e = t.url, t = t.name || t.key || t.url), "string" != typeof e && (i = n, n = e, e = t), "string" != typeof e) throw new Error("No url passed to add resource to loader.");
                if ("function" == typeof n && (i = n, n = null), this.loading && (!n || !n.parentResource)) throw new Error("Cannot add resources while the loader is running.");
                if (this.resources[t]) throw new Error('Resource named "' + t + '" already exists.');
                if (e = this._prepareUrl(e), this.resources[t] = new A.Resource(t, e, n), "function" == typeof i && this.resources[t].onAfterMiddleware.once(i), this.loading) {
                    for (var a = n.parentResource, s = [], h = 0; h < a.children.length; ++h) a.children[h].isComplete || s.push(a.children[h]);
                    var c = a.progressChunk * (s.length + 1) / (s.length + 2);
                    a.children.push(this.resources[t]), a.progressChunk = c;
                    for (var u = 0; u < s.length; ++u) s[u].progressChunk = c;
                    this.resources[t].progressChunk = c
                }
                return this._queue.push(this.resources[t]), this
            }, t.prototype.pre = function(t) {
                return this._beforeMiddleware.push(t), this
            }, t.prototype.use = function(t) {
                return this._afterMiddleware.push(t), this
            }, t.prototype.reset = function() {
                for (var t in this.progress = 0, this.loading = !1, this._queue.kill(), this._queue.pause(), this.resources) {
                    var e = this.resources[t];
                    e._onLoadBinding && e._onLoadBinding.detach(), e.isLoading && e.abort()
                }
                return this.resources = {}, this
            }, t.prototype.load = function(t) {
                if ("function" == typeof t && this.onComplete.once(t), this.loading) return this;
                if (this._queue.idle()) this._onStart(), this._onComplete();
                else {
                    for (var e = 100 / this._queue._tasks.length, n = 0; n < this._queue._tasks.length; ++n) this._queue._tasks[n].data.progressChunk = e;
                    this._onStart(), this._queue.resume()
                }
                return this
            }, t.prototype._prepareUrl = function(t) {
                var e = (0, a.default)(t, {
                        strictMode: !0
                    }),
                    n = void 0;
                if (n = e.protocol || !e.path || 0 === t.indexOf("//") ? t : this.baseUrl.length && this.baseUrl.lastIndexOf("/") !== this.baseUrl.length - 1 && "/" !== t.charAt(0) ? this.baseUrl + "/" + t : this.baseUrl + t, this.defaultQueryString) {
                    var r = c.exec(n)[0]; - 1 !== (n = n.substr(0, n.length - r.length)).indexOf("?") ? n += "&" + this.defaultQueryString : n += "?" + this.defaultQueryString, n += r
                }
                return n
            }, t.prototype._loadResource = function(t, e) {
                var n = this;
                t._dequeue = e, s.eachSeries(this._beforeMiddleware, function(e, r) {
                    e.call(n, t, function() {
                        r(t.isComplete ? {} : null)
                    })
                }, function() {
                    t.isComplete ? n._onLoad(t) : (t._onLoadBinding = t.onComplete.once(n._onLoad, n), t.load())
                }, !0)
            }, t.prototype._onStart = function() {
                this.progress = 0, this.loading = !0, this.onStart.dispatch(this)
            }, t.prototype._onComplete = function() {
                this.progress = 100, this.loading = !1, this.onComplete.dispatch(this, this.resources)
            }, t.prototype._onLoad = function(t) {
                var e = this;
                t._onLoadBinding = null, this._resourcesParsing.push(t), t._dequeue(), s.eachSeries(this._afterMiddleware, function(n, r) {
                    n.call(e, t, r)
                }, function() {
                    t.onAfterMiddleware.dispatch(t), e.progress = Math.min(100, e.progress + t.progressChunk), e.onProgress.dispatch(e, t), t.error ? e.onError.dispatch(t.error, e, t) : e.onLoad.dispatch(e, t), e._resourcesParsing.splice(e._resourcesParsing.indexOf(t), 1), e._queue.idle() && 0 === e._resourcesParsing.length && e._onComplete()
                }, !0)
            }, i(t, [{
                key: "concurrency",
                get: function() {
                    return this._queue.concurrency
                },
                set: function(t) {
                    this._queue.concurrency = t
                }
            }]), t
        }();
    u._defaultBeforeMiddleware = [], u._defaultAfterMiddleware = [], u.pre = function(t) {
        return u._defaultBeforeMiddleware.push(t), u
    }, u.use = function(t) {
        return u._defaultAfterMiddleware.push(t), u
    }
}, function(t, e, n) {
    "use strict";
    e.__esModule = !0, e.encodeBinary = i;
    var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

    function i(t) {
        for (var e = "", n = 0; n < t.length;) {
            for (var i = [0, 0, 0], o = [0, 0, 0, 0], a = 0; a < i.length; ++a) n < t.length ? i[a] = 255 & t.charCodeAt(n++) : i[a] = 0;
            switch (o[0] = i[0] >> 2, o[1] = (3 & i[0]) << 4 | i[1] >> 4, o[2] = (15 & i[1]) << 2 | i[2] >> 6, o[3] = 63 & i[2], n - (t.length - 1)) {
                case 2:
                    o[3] = 64, o[2] = 64;
                    break;
                case 1:
                    o[3] = 64
            }
            for (var s = 0; s < o.length; ++s) e += r.charAt(o[s])
        }
        return e
    }
    t.exports.default = i
}, function(t, e, n) {
    var r = n(0);
    t.exports = function(t, e) {
        for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = r(t)););
        return t
    }
}, function(t, e, n) {
    var r = n(143);
    "string" == typeof r && (r = [
        [t.i, r, ""]
    ]);
    var i = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    n(160)(r, i);
    r.locals && (t.exports = r.locals)
}, function(t, e, n) {
    e = t.exports = n(144)(!1);
    var r = n(145),
        i = r(n(146)),
        o = r(n(147)),
        a = r(n(148)),
        s = r(n(149)),
        A = r(n(150)),
        h = r(n(151)),
        c = r(n(152)),
        u = r(n(153)),
        l = r(n(154)),
        d = r(n(155)),
        p = r(n(18)),
        f = r(n(19)),
        y = r(n(156)),
        x = r(n(157)),
        m = r(n(158)),
        g = r(n(159));
    e.push([t.i, '@font-face {\r\n  font-family: "JUNEGULL";\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: url(' + i + ') format("truetype");\r\n}\r\n\r\n@font-face {\r\n  font-family: "Odin";\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: url(' + o + ') format("truetype");\r\n}\r\n\r\n@keyframes spin {\r\n  from {\r\n    transform: rotate(0deg);\r\n  }\r\n  to {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n@keyframes fadeIn {\r\n  from {\r\n    opacity: 0;\r\n  }\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\nbody {\r\n  font-family: JUNEGULL;\r\n}\r\n\r\n.odin-font-loader {\r\n  font-family: Odin;\r\n  opacity: 0;\r\n}\r\n\r\nbutton,\r\ninput[type="button"],\r\n.clickable {\r\n  outline: none;\r\n  pointer-events: all;\r\n  -webkit-touch-callout: none;\r\n  -webkit-user-select: none;\r\n  -khtml-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  -webkit-tap-highlight-color: transparent;\r\n}\r\n\r\nbutton::-moz-focus-inner,\r\ninput[type="button"]::-moz-focus-inner {\r\n  border: 0;\r\n  -webkit-touch-callout: none;\r\n  -webkit-user-select: none;\r\n  -khtml-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  -webkit-tap-highlight-color: transparent;\r\n}\r\n\r\n.ui {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  -webkit-touch-callout: none;\r\n  -webkit-user-select: none;\r\n  -khtml-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  text-shadow: rgba(0, 6, 95, 0.5) 0 3px 0;\r\n  pointer-events: none;\r\n}\r\n\r\n.button {\r\n  display: block;\r\n  background-color: transparent;\r\n  filter: drop-shadow(0px 5px 0px rgba(0, 6, 95, 0.5));\r\n  font-weight: bold;\r\n  text-shadow: rgba(0, 6, 95, 0.5) 0 3px 0;\r\n  font-family: JUNEGULL;\r\n  cursor: pointer;\r\n  border: none;\r\n}\r\n\r\n.play-button {\r\n  background-image: url(' + a + ");\r\n  background-size: 178px 80px;\r\n  width: 178px;\r\n  height: 80px;\r\n  padding: 16px 25px 16px 54px;\r\n  color: white;\r\n  font-size: 18px;\r\n  display: inline-block;\r\n  margin: 5px;\r\n}\r\n\r\n.continue-button {\r\n  background-image: url(" + s + ");\r\n  background-size: 100px 100px;\r\n  width: 100px;\r\n  height: 100px;\r\n  position: absolute;\r\n  margin: auto;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 10px;\r\n}\r\n\r\n.level-progress {\r\n  text-align: center;\r\n  margin-top: 45px;\r\n}\r\n\r\n.level-progressbar-container {\r\n  display: inline-block;\r\n  width: 100px;\r\n  height: 15px;\r\n  background-color: #666666;\r\n  box-shadow: rgba(0, 6, 95, 0.5) 0 3px 0;\r\n}\r\n\r\n.level-progressbar {\r\n  height: 100%;\r\n  background-color: #ffffff;\r\n}\r\n\r\n.level-progress .lvl {\r\n  width: 50px;\r\n  display: inline-block;\r\n  color: white;\r\n  font-weight: bold;\r\n}\r\n\r\n.level-progress .lvl.current {\r\n  text-align: right;\r\n  padding-right: 10px;\r\n}\r\n\r\n.level-progress .lvl.next {\r\n  text-align: left;\r\n  padding-left: 10px;\r\n}\r\n\r\n.title {\r\n  width: 80%;\r\n  max-width: 500px;\r\n  display: block;\r\n  margin: auto;\r\n  margin-top: 50px;\r\n  filter: drop-shadow(0px 7px 0px rgba(0, 6, 95, 0.5));\r\n}\r\n\r\n.level-cleared {\r\n  text-align: center;\r\n  color: white;\r\n  margin-top: 25px;\r\n  font-size: 1.5em;\r\n}\r\n\r\n.pause-button {\r\n  width: 30px;\r\n  height: 30px;\r\n  background-image: url(" + A + ");\r\n  background-size: 30px 30px;\r\n  position: absolute;\r\n  left: 10px;\r\n  top: 10px;\r\n}\r\n\r\n.back-button {\r\n  background-image: url(" + s + ");\r\n  transform: rotateZ(-90deg);\r\n  width: 30px;\r\n  height: 30px;\r\n  background-size: 30px 30px;\r\n  position: absolute;\r\n  left: 10px;\r\n  top: 10px;\r\n  filter: drop-shadow(-5px 0px 0px rgba(0, 6, 95, 0.5));\r\n}\r\n\r\n.shop-button {\r\n  width: 80px;\r\n  height: 80px;\r\n  color: #0171a3;\r\n  font-size: 14px;\r\n  display: inline-block;\r\n  margin: 5px;\r\n  text-shadow: none;\r\n  background-image: url(" + h + ");\r\n  background-size: 80px 80px;\r\n  position: relative;\r\n}\r\n\r\n.shop-button.selected {\r\n  background-image: url(" + c + ");\r\n}\r\n\r\n.shop-button.locked {\r\n  color: white;\r\n  background-image: url(" + u + ");\r\n}\r\n\r\n.shop-button.type-rewarded.locked {\r\n  background-image: url(" + l + ");\r\n}\r\n\r\n.shop-button.type-rewarded.locked.loading,\r\n.shop-button.type-rewarded.locked.disabled {\r\n  background-image: url(" + d + ");\r\n}\r\n\r\n.shop-button > .load-icon {\r\n  position: absolute;\r\n  width: 20px;\r\n  height: 20px;\r\n  top: 7px;\r\n  right: 7px;\r\n  animation-name: spin;\r\n  animation-duration: 1s;\r\n  animation-iteration-count: infinite;\r\n  animation-timing-function: linear;\r\n}\r\n\r\n.shop-button > .text {\r\n  position: absolute;\r\n  top: 55px;\r\n  left: 6px;\r\n  right: 6px;\r\n  bottom: 4px;\r\n}\r\n\r\n.shop-button > .image {\r\n  width: 80px;\r\n  position: absolute;\r\n  top: -6px;\r\n  left: 0;\r\n}\r\n\r\n.shop-button > .lock {\r\n  position: absolute;\r\n  top: 6px;\r\n  left: 6px;\r\n  width: 16px;\r\n  height: 16px;\r\n}\r\n\r\n.shop-button.type-rewarded.locked > .text,\r\n.shop-button.type-rewarded.locked > .lock {\r\n  display: none;\r\n}\r\n\r\n.row {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin: 15px 0;\r\n}\r\n\r\n.title-buttons {\r\n  position: absolute;\r\n  bottom: 50px;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n\r\n.title-buttons .button {\r\n  margin: 5px;\r\n}\r\n\r\n.shop-content {\r\n  background-image: url(" + p + ');\r\n  background-size: 100% 100%;\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  top: 33%;\r\n}\r\n\r\n.skins-lists-container {\r\n  position: relative;\r\n  height: calc(100% - 68px);\r\n  left: 0%;\r\n  transition: ease 0.5s;\r\n}\r\n\r\n.skins-list {\r\n  text-align: center;\r\n  overflow: auto;\r\n  height: 100%;\r\n  display: inline-block;\r\n}\r\n\r\n.shop-progress {\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 10px;\r\n  color: white;\r\n  font-size: 20px;\r\n}\r\n\r\n.shop .shop-button {\r\n  text-shadow: none;\r\n}\r\n\r\n.shop-category-name {\r\n  background-color: white;\r\n  color: #00b9dc;\r\n  text-align: center;\r\n  text-shadow: none;\r\n  padding: 5px;\r\n  line-height: 25px;\r\n}\r\n\r\n.shop-category-name > span {\r\n  width: 200px;\r\n  display: inline-block;\r\n}\r\n\r\n.clicked-skin-info {\r\n  color: white;\r\n  background-color: #00b9dc;\r\n  text-align: center;\r\n  padding: 5px;\r\n  filter: drop-shadow(0px 3px 0px rgba(0, 6, 95, 0.5));\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.red-arrow {\r\n  cursor: pointer;\r\n  width: 25px;\r\n  vertical-align: middle;\r\n}\r\n\r\n.red-arrow.orientation-left {\r\n  transform: scaleX(-1);\r\n}\r\n\r\n.red-arrow.disabled {\r\n  opacity: 0.5;\r\n}\r\n\r\n.level-debug-infos {\r\n  font-size: 10px;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  text-shadow: none;\r\n  position: absolute;\r\n  left: 0;\r\n  bottom: 0;\r\n}\r\n\r\n.popup-container {\r\n  position: fixed;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  background-color: rgba(0, 6, 95, 0.5);\r\n}\r\n\r\n.popup-container > div {\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 50px;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n\r\n.skin-unlocked-popup {\r\n  color: white;\r\n  border: 10px solid white;\r\n  border-radius: 4px;\r\n  width: 250px;\r\n  height: 250px;\r\n  text-align: center;\r\n  position: absolute;\r\n  margin: auto;\r\n  left: 0;\r\n  right: 0;\r\n  top: 0;\r\n  bottom: 0;\r\n  overflow: hidden;\r\n}\r\n\r\n.skin-unlocked-popup::before {\r\n  content: "";\r\n  position: absolute;\r\n  width: 200%;\r\n  height: 200%;\r\n  top: -50%;\r\n  left: -50%;\r\n  z-index: -1;\r\n  background-color: #438dbe;\r\n  background-image: url(' + f + ");\r\n  background-position: 50% 50%;\r\n  animation-name: spin;\r\n  animation-duration: 5s;\r\n  animation-iteration-count: infinite;\r\n  animation-timing-function: linear;\r\n}\r\n\r\n.skin-unlocked-popup img {\r\n  width: 200px;\r\n  height: 200px;\r\n  margin-top: 25px;\r\n}\r\n\r\n.skin-unlocked-popup > p {\r\n  text-shadow: rgba(0, 6, 95, 0.5) 0 2px 0;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n\r\n.skin-unlocked-popup .equip-skin-button {\r\n  background-color: #0171a3;\r\n  padding: 7px 12px;\r\n  border-radius: 15px;\r\n  border: 4px solid #00b9dc;\r\n  color: white;\r\n  filter: none;\r\n  text-shadow: rgba(0, 6, 95, 0.5) 0 2px 0;\r\n  margin: auto;\r\n  position: absolute;\r\n  bottom: 10px;\r\n  left: 0;\r\n  right: 0;\r\n  width: 125px;\r\n}\r\n\r\n.share-button {\r\n  color: white;\r\n  padding: 9px 12px;\r\n  font-size: 18px;\r\n  font-weight: normal;\r\n  width: 100px;\r\n  height: 50px;\r\n  background-image: url(" + y + ");\r\n  background-size: 100px 50px;\r\n}\r\n\r\n.victory {\r\n  margin: auto;\r\n  width: 300px;\r\n}\r\n\r\n.victory .shop-button {\r\n  position: absolute;\r\n  bottom: 15px;\r\n  right: 4%;\r\n}\r\n\r\n.victory .share-button {\r\n  position: absolute;\r\n  bottom: 125px;\r\n  left: 4%;\r\n  font-size: 12px;\r\n}\r\n\r\n.leaderboard-button {\r\n  color: white;\r\n  padding: 10px 20px;\r\n  font-size: 12px;\r\n  font-weight: normal;\r\n  width: 123px;\r\n  height: 50px;\r\n  background-image: url(" + x + ');\r\n  background-size: 123px 50px;\r\n}\r\n\r\n.victory .leaderboard-button {\r\n  position: absolute;\r\n  bottom: 65px;\r\n  left: 4%;\r\n  width: 100px;\r\n  height: 50px;\r\n  background-size: 100px 50px;\r\n  font-size: 10px;\r\n  padding: 10px 10px;\r\n}\r\n\r\n.leaderboard {\r\n  height: 100%;\r\n  overflow: auto;\r\n  pointer-events: all;\r\n  color: white;\r\n}\r\n\r\n.leaderboard h2,\r\n.leaderboard h3 {\r\n  text-align: center;\r\n}\r\n\r\n.leaderboard .leaderboard-button {\r\n  display: inline-block;\r\n  margin: 0 5px 15px;\r\n}\r\n\r\n.leaderboard-entries {\r\n  display: table;\r\n  width: 100%;\r\n  border-collapse: separate;\r\n  border-spacing: 0 5px;\r\n}\r\n\r\n.leaderboard-row {\r\n  display: table-row;\r\n  background-color: rgba(0, 6, 95, 0.5);\r\n}\r\n\r\n.leaderboard-row.current {\r\n  background-color: rgba(86, 255, 128, 0.5);\r\n}\r\n\r\n.leaderboard-col {\r\n  display: table-cell;\r\n  vertical-align: middle;\r\n  padding: 5px;\r\n}\r\n\r\n.leaderboard-col.photo,\r\n.leaderboard-col.photo img {\r\n  width: 50px;\r\n  height: 50px;\r\n}\r\n\r\n.leaderboard-col.photo img {\r\n  display: block;\r\n  word-break: break-word;\r\n}\r\n\r\n.pagination {\r\n  text-align: center;\r\n}\r\n\r\n.pagination .page-number {\r\n  display: inline-block;\r\n  width: 200px;\r\n  margin: 20px 0;\r\n}\r\n\r\n.center {\r\n  text-align: center;\r\n}\r\n\r\n.loading-ui {\r\n  color: white;\r\n  text-align: center;\r\n  height: 100%;\r\n  margin: 0;\r\n}\r\n\r\n.loading-ui > img {\r\n  text-align: center;\r\n  position: absolute;\r\n  margin: auto;\r\n  left: 0;\r\n  right: 0;\r\n  top: 0;\r\n  bottom: 0;\r\n  overflow: hidden;\r\n  max-width: 100%;\r\n  animation-name: fadeIn;\r\n  animation-duration: 1s;\r\n  animation-timing-function: ease-in;\r\n}\r\n\r\n.loading-ui > img.fade-out {\r\n  opacity: 0;\r\n  transition: 1s ease-in;\r\n}\r\n\r\n.loading-ui > img::before {\r\n  content: "";\r\n  position: absolute;\r\n  width: 200%;\r\n  height: 200%;\r\n  top: -50%;\r\n  left: -50%;\r\n}\r\n\r\n.loading-ui .title {\r\n  margin-top: 0;\r\n  padding-top: 100px;\r\n}\r\n\r\n.loading-ui .loading-bg {\r\n  background-image: url(' + p + ");\r\n  background-size: 100% 100%;\r\n  height: 100%;\r\n}\r\n\r\n.loading-text {\r\n  filter: drop-shadow(0px 5px 0px rgba(0, 6, 95, 0.5));\r\n  text-shadow: none;\r\n  text-align: center;\r\n  color: white;\r\n  margin-top: 100px;\r\n}\r\n\r\n.loading-text > .load-icon {\r\n  width: 14px;\r\n  height: 14px;\r\n  animation-name: spin;\r\n  animation-duration: 1s;\r\n  animation-iteration-count: infinite;\r\n  animation-timing-function: linear;\r\n}\r\n\r\n.present-button {\r\n  width: 50px;\r\n  height: 50px;\r\n  background-image: url(" + m + ");\r\n  background-size: 50px 50px;\r\n}\r\n\r\n.add-button {\r\n  width: 65px;\r\n  height: 65px;\r\n  background-image: url(" + g + ");\r\n  background-size: 65px 65px;\r\n}\r\n\r\n.present-row {\r\n  background: rgba(0, 6, 95, 0.5);\r\n  padding: 0;\r\n  color: white;\r\n}\r\n\r\n.present-row .present-button {\r\n  margin-right: 15px;\r\n  flex: 0 0 50px;\r\n}\r\n\r\n.present-row .add-button {\r\n  margin-left: 15px;\r\n  flex: 0 0 65px;\r\n  filter: none;\r\n}\r\n\r\n.leaderboard-col.share {\r\n  text-align: right;\r\n}\r\n\r\n.leaderboard-col.share .share-button {\r\n  display: inline-block;\r\n  padding: 10px;\r\n  font-size: 12px;\r\n}\r\n\r\n.title-buttons .share-button {\r\n  font-size: 12px;\r\n}\r\n\r\n.leaderboard .center .share-button {\r\n  display: inline-block;\r\n  margin: 0 5px 15px;\r\n  vertical-align: bottom;\r\n}\r\n\r\n.store-links {\r\n  color: white;\r\n  text-align: center;\r\n  max-width: 140px;\r\n  display: block;\r\n  position: fixed;\r\n  top: 5px;\r\n  right: 5px;\r\n}\r\n\r\n.store-links img {\r\n  display: block;\r\n  max-width: 140px;\r\n}\r\n\r\n@media (max-height: 420px) {\r\n  .victory .title {\r\n    display: none;\r\n  }\r\n}\r\n\r\n@media (max-height: 525px) {\r\n  .victory .level-cleared {\r\n    margin-top: 10px;\r\n    font-size: 1em;\r\n  }\r\n\r\n  .title-buttons {\r\n    bottom: 20px;\r\n  }\r\n}\r\n\r\n@media (max-width: 600px) {\r\n  .store-links {\r\n    display: none;\r\n  }\r\n}\r\n", ""])
}, function(t, e, n) {
    "use strict";
    t.exports = function(t) {
        var e = [];
        return e.toString = function() {
            return this.map(function(e) {
                var n = function(t, e) {
                    var n = t[1] || "",
                        r = t[3];
                    if (!r) return n;
                    if (e && "function" == typeof btoa) {
                        var i = (a = r, s = btoa(unescape(encodeURIComponent(JSON.stringify(a)))), A = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s), "/*# ".concat(A, " */")),
                            o = r.sources.map(function(t) {
                                return "/*# sourceURL=".concat(r.sourceRoot).concat(t, " */")
                            });
                        return [n].concat(o).concat([i]).join("\n")
                    }
                    var a, s, A;
                    return [n].join("\n")
                }(e, t);
                return e[2] ? "@media ".concat(e[2], "{").concat(n, "}") : n
            }).join("")
        }, e.i = function(t, n) {
            "string" == typeof t && (t = [
                [null, t, ""]
            ]);
            for (var r = {}, i = 0; i < this.length; i++) {
                var o = this[i][0];
                null != o && (r[o] = !0)
            }
            for (var a = 0; a < t.length; a++) {
                var s = t[a];
                null != s[0] && r[s[0]] || (n && !s[2] ? s[2] = n : n && (s[2] = "(".concat(s[2], ") and (").concat(n, ")")), e.push(s))
            }
        }, e
    }
}, function(t, e, n) {
    "use strict";
    t.exports = function(t, e) {
        return "string" != typeof t ? t : (/^['"].*['"]$/.test(t) && (t = t.slice(1, -1)), /["'() \t\n]/.test(t) || e ? '"'.concat(t.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"') : t)
    }
}, function(t, e, n) {
    t.exports = n.p + "fonts/JUNEGULL.ttf"
}, function(t, e, n) {
    t.exports = n.p + "fonts/Odin-Rounded-Bold.ttf"
}, function(t, e, n) {
    t.exports = n.p + "images/54e99c08dfada2fdd1e3b94b699360a4-btn_play.png"
}, function(t, e, n) {
    t.exports = n.p + "images/8c92b88b23a65aece8ad09c9fb12a398-B_PlayButton.png"
}, function(t, e) {
    t.exports = "data:image/png;base64,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"
}, function(t, e) {
    t.exports = "data:image/png;base64,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"
}, function(t, e) {
    t.exports = "data:image/png;base64,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"
}, function(t, e) {
    t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM8AAADPCAYAAABSgYVfAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAOZSURBVHhe7drLceJAFEBRM3k6CEfiIBwoU0zBVPnDR1ctGcQ5G7EQDQtdvUb2CwCsanc8rm739rE/voSb7d9ff+2a/WqVLyIU1rB2WIt8mFj4bWuENPQDRMO9WTKiIQuLhnu3RESzFxQOj2RkRLMWEg6PaFRAaRHR8OhGBDR5AeGwFXMDmvRm4bA1cwK6+Y3CYatqQH+OR3hadTDcVNzoqTPqaQfPZ8kd0NTr8urJo76sYFjKyKCmXKcXT5z7pQTD2kaEdOt1u1g8wuE3rXHjP3tC/XDRcC+WvvkPjUc43KOlBsGPj6rnjjy4J0vd1If9ncfUYWuuDZFv8diusUVLXKP+w4CnMTqg2fGYOmzZpZ3Yp3g8KGDrRt7sbdsgmhWPLRvPzOTh6Yy66YsHrjj3LEA8EP2PZ+qTNr93eHYmD0TigUg8EIkHIvFAJB6IxAOReCASD0TigUg8EIkHIvFAJB6IxAOReCASD0TigUg8EIkHIvFAJB6IxAOReCASD0TigUg8EIkHIvFAJB6IxAOReCASD0TigUg8EIkHIvFAJB6IxAOReCASD0TigUg8EIkHIvFAJB6IxAOReCASD0TigUg8EIkHIvFAJB6IxAOReCASD0TigUg8EIkHIvFAJB6IxAOReCASD0TigUg8EIkHIvFAJB6IxAOReCASD0TigUg8EIkHIvFAJB6IxAOReCASD0TigUg8EIkHIvFAJB6IxAOReCASD0TigUg8EIkHIvFAJB6IxAOReCASD0TigUg8EO2Ox5fd28f++BL4Yv/++r+VE5MHIvFAJB6IxAOReCASD0TigUg8EIkHIvFAJB6IxAOReCASD0TigUg8EIkHIvFAJB6IxAOReCASD0TigUg8EIkHIvFAJB6IxAOReCASD0TigUg8EIkHIvFAJB6IxAOReCASD0TigUg8EIkHIvFAJB6IdsfjP7u3j/3xJXC0f3/91MmJyQOReCASD0TigQvO/d45+BTPpROBz0weiMQDZ1zbiX2Lx9YNbmPywA9uGSI/xmP6wHUmD3xx6/A4G4/pA5ddDcQ/i/JMpgwN2zY4mrrbuhqP7Rv87OYwbN/YsjIkJr1BQGxR3V1Nr01AbMicnyWtOAGxAXN/z897s4h4UCMehM1fQEA8mBHhHAxZ5EBE3LtR0ZwMXexARNyb0dGcLLLogYj4bUtFc7Lo4idCYk1LR3Oyyod8JSZGWisWAAAAgCteXv4C/ujMgms5yHkAAAAASUVORK5CYII="
}, function(t, e, n) {
    t.exports = n.p + "images/71b76f184e6da03830b954235e33ae9c-ShopRewarded.png"
}, function(t, e, n) {
    t.exports = n.p + "images/081cbab0a3ae7cc413d3a7b6f0de1d27-ShopRewardedLoading.png"
}, function(t, e, n) {
    t.exports = n.p + "images/9fbf958a795fda3dfcc89826130fcad7-btn_share.png"
}, function(t, e, n) {
    t.exports = n.p + "images/7d2f8caa50780cb5b5d660370723475e-btn_leaderboard.png"
}, function(t, e, n) {
    t.exports = n.p + "images/b68d68a916728e64ff5eada6ad5eedd3-Present.png"
}, function(t, e, n) {
    t.exports = n.p + "images/ce2c2a7333996ccaa789a1f4a1434e1a-AddButton.png"
}, function(t, e, n) {
    var r, i, o = {},
        a = (r = function() {
            return window && document && document.all && !window.atob
        }, function() {
            return void 0 === i && (i = r.apply(this, arguments)), i
        }),
        s = function(t) {
            var e = {};
            return function(t, n) {
                if ("function" == typeof t) return t();
                if (void 0 === e[t]) {
                    var r = function(t, e) {
                        return e ? e.querySelector(t) : document.querySelector(t)
                    }.call(this, t, n);
                    if (window.HTMLIFrameElement && r instanceof window.HTMLIFrameElement) try {
                        r = r.contentDocument.head
                    } catch (t) {
                        r = null
                    }
                    e[t] = r
                }
                return e[t]
            }
        }(),
        A = null,
        h = 0,
        c = [],
        u = n(161);

    function l(t, e) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n],
                i = o[r.id];
            if (i) {
                i.refs++;
                for (var a = 0; a < i.parts.length; a++) i.parts[a](r.parts[a]);
                for (; a < r.parts.length; a++) i.parts.push(m(r.parts[a], e))
            } else {
                var s = [];
                for (a = 0; a < r.parts.length; a++) s.push(m(r.parts[a], e));
                o[r.id] = {
                    id: r.id,
                    refs: 1,
                    parts: s
                }
            }
        }
    }

    function d(t, e) {
        for (var n = [], r = {}, i = 0; i < t.length; i++) {
            var o = t[i],
                a = e.base ? o[0] + e.base : o[0],
                s = {
                    css: o[1],
                    media: o[2],
                    sourceMap: o[3]
                };
            r[a] ? r[a].parts.push(s) : n.push(r[a] = {
                id: a,
                parts: [s]
            })
        }
        return n
    }

    function p(t, e) {
        var n = s(t.insertInto);
        if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        var r = c[c.length - 1];
        if ("top" === t.insertAt) r ? r.nextSibling ? n.insertBefore(e, r.nextSibling) : n.appendChild(e) : n.insertBefore(e, n.firstChild), c.push(e);
        else if ("bottom" === t.insertAt) n.appendChild(e);
        else {
            if ("object" != typeof t.insertAt || !t.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
            var i = s(t.insertAt.before, n);
            n.insertBefore(e, i)
        }
    }

    function f(t) {
        if (null === t.parentNode) return !1;
        t.parentNode.removeChild(t);
        var e = c.indexOf(t);
        e >= 0 && c.splice(e, 1)
    }

    function y(t) {
        var e = document.createElement("style");
        if (void 0 === t.attrs.type && (t.attrs.type = "text/css"), void 0 === t.attrs.nonce) {
            var r = function() {
                0;
                return n.nc
            }();
            r && (t.attrs.nonce = r)
        }
        return x(e, t.attrs), p(t, e), e
    }

    function x(t, e) {
        Object.keys(e).forEach(function(n) {
            t.setAttribute(n, e[n])
        })
    }

    function m(t, e) {
        var n, r, i, o;
        if (e.transform && t.css) {
            if (!(o = "function" == typeof e.transform ? e.transform(t.css) : e.transform.default(t.css))) return function() {};
            t.css = o
        }
        if (e.singleton) {
            var a = h++;
            n = A || (A = y(e)), r = v.bind(null, n, a, !1), i = v.bind(null, n, a, !0)
        } else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function(t) {
            var e = document.createElement("link");
            return void 0 === t.attrs.type && (t.attrs.type = "text/css"), t.attrs.rel = "stylesheet", x(e, t.attrs), p(t, e), e
        }(e), r = function(t, e, n) {
            var r = n.css,
                i = n.sourceMap,
                o = void 0 === e.convertToAbsoluteUrls && i;
            (e.convertToAbsoluteUrls || o) && (r = u(r));
            i && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */");
            var a = new Blob([r], {
                    type: "text/css"
                }),
                s = t.href;
            t.href = URL.createObjectURL(a), s && URL.revokeObjectURL(s)
        }.bind(null, n, e), i = function() {
            f(n), n.href && URL.revokeObjectURL(n.href)
        }) : (n = y(e), r = function(t, e) {
            var n = e.css,
                r = e.media;
            r && t.setAttribute("media", r);
            if (t.styleSheet) t.styleSheet.cssText = n;
            else {
                for (; t.firstChild;) t.removeChild(t.firstChild);
                t.appendChild(document.createTextNode(n))
            }
        }.bind(null, n), i = function() {
            f(n)
        });
        return r(t),
            function(e) {
                if (e) {
                    if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
                    r(t = e)
                } else i()
            }
    }
    t.exports = function(t, e) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
        (e = e || {}).attrs = "object" == typeof e.attrs ? e.attrs : {}, e.singleton || "boolean" == typeof e.singleton || (e.singleton = a()), e.insertInto || (e.insertInto = "head"), e.insertAt || (e.insertAt = "bottom");
        var n = d(t, e);
        return l(n, e),
            function(t) {
                for (var r = [], i = 0; i < n.length; i++) {
                    var a = n[i];
                    (s = o[a.id]).refs--, r.push(s)
                }
                t && l(d(t, e), e);
                for (i = 0; i < r.length; i++) {
                    var s;
                    if (0 === (s = r[i]).refs) {
                        for (var A = 0; A < s.parts.length; A++) s.parts[A]();
                        delete o[s.id]
                    }
                }
            }
    };
    var g, w = (g = [], function(t, e) {
        return g[t] = e, g.filter(Boolean).join("\n")
    });

    function v(t, e, n, r) {
        var i = n ? "" : r.css;
        if (t.styleSheet) t.styleSheet.cssText = w(e, i);
        else {
            var o = document.createTextNode(i),
                a = t.childNodes;
            a[e] && t.removeChild(a[e]), a.length ? t.insertBefore(o, a[e]) : t.appendChild(o)
        }
    }
}, function(t, e) {
    t.exports = function(t) {
        var e = "undefined" != typeof window && window.location;
        if (!e) throw new Error("fixUrls requires window.location");
        if (!t || "string" != typeof t) return t;
        var n = e.protocol + "//" + e.host,
            r = n + e.pathname.replace(/\/[^\/]*$/, "/");
        return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(t, e) {
            var i, o = e.trim().replace(/^"(.*)"$/, function(t, e) {
                return e
            }).replace(/^'(.*)'$/, function(t, e) {
                return e
            });
            return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o) ? t : (i = 0 === o.indexOf("//") ? o : 0 === o.indexOf("/") ? n + o : r + o.replace(/^\.\//, ""), "url(" + JSON.stringify(i) + ")")
        })
    }
}, function(t, e) {
    t.exports = function(t) {
        if (Array.isArray(t)) {
            for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
            return n
        }
    }
}, function(t, e) {
    t.exports = function(t) {
        if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
    }
}, function(t, e) {
    t.exports = function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance")
    }
}, function(t, e, n) {
    var r = {
        "./LEVEL000.json": 166,
        "./LEVEL001.json": 167,
        "./LEVEL002.json": 168,
        "./LEVEL003.json": 169,
        "./LEVEL004.json": 170,
        "./LEVEL005.json": 171,
        "./LEVEL006.json": 172,
        "./LEVEL007.json": 173,
        "./LEVEL008.json": 174
    };

    function i(t) {
        var e = o(t);
        return n(e)
    }

    function o(t) {
        if (!n.o(r, t)) {
            var e = new Error("Cannot find module '" + t + "'");
            throw e.code = "MODULE_NOT_FOUND", e
        }
        return r[t]
    }
    i.keys = function() {
        return Object.keys(r)
    }, i.resolve = o, t.exports = i, i.id = 165
}, function(t) {
    t.exports = {
        spawnPoint: {
            x: .10152838427947594,
            y: .3026200873362445
        },
        background: "background_0",
        hooks: [{
            x: .4628820960698688,
            y: .13864628820960687
        }],
        bumpers: [{
            x: .5895196506550213,
            y: .8635371179039298,
            w: .15,
            h: .04,
            rotation: 0
        }, {
            x: .09170305676855864,
            y: .5447598253275107,
            w: .15,
            h: .04,
            rotation: 0,
            bounce: {
                bounce: 1
            }
        }, {
            x: .06113537117903899,
            y: .8635371179039298,
            w: .15,
            h: .04,
            rotation: 0
        }, {
            x: .19432314410480317,
            y: .8635371179039298,
            w: .15,
            h: .04,
            rotation: 0
        }, {
            x: .32532751091703027,
            y: .8635371179039298,
            w: .15,
            h: .04,
            rotation: 0
        }, {
            x: .4585152838427944,
            y: .8635371179039298,
            w: .15,
            h: .04,
            rotation: 0
        }],
        obstacles: [],
        finishLine: .658296943231441
    }
}, function(t) {
    t.exports = {
        spawnPoint: {
            x: .10152838427947594,
            y: .3026200873362445
        },
        background: "background_0",
        hooks: [{
            x: .9050829694323137,
            y: .05676855895196491
        }, {
            x: .4628820960698688,
            y: .13864628820960687
        }],
        bumpers: [{
            x: 1.2445414847161569,
            y: .8635371179039298,
            w: .15,
            h: .04,
            rotation: 0
        }, {
            x: .09170305676855864,
            y: .5447598253275107,
            w: .15,
            h: .04,
            rotation: 0,
            bounce: {
                bounce: 1
            }
        }, {
            x: .7161572052401745,
            y: .8635371179039298,
            w: .15,
            h: .04,
            rotation: 0
        }, {
            x: .8493449781659386,
            y: .8635371179039298,
            w: .15,
            h: .04,
            rotation: 0
        }, {
            x: .9803493449781655,
            y: .8635371179039298,
            w: .15,
            h: .04,
            rotation: 0
        }, {
            x: 1.1135371179039302,
            y: .8635371179039298,
            w: .15,
            h: .04,
            rotation: 0
        }, {
            x: .5895196506550213,
            y: .8635371179039298,
            w: .15,
            h: .04,
            rotation: 0
        }, {
            x: .06113537117903899,
            y: .8635371179039298,
            w: .15,
            h: .04,
            rotation: 0
        }, {
            x: .19432314410480317,
            y: .8635371179039298,
            w: .15,
            h: .04,
            rotation: 0
        }, {
            x: .32532751091703027,
            y: .8635371179039298,
            w: .15,
            h: .04,
            rotation: 0
        }, {
            x: .4585152838427944,
            y: .8635371179039298,
            w: .15,
            h: .04,
            rotation: 0
        }],
        obstacles: [],
        finishLine: 1.3045851528384274
    }
}, function(t) {
    t.exports = {
        spawnPoint: {
            x: .10152838427947594,
            y: .3026200873362445
        },
        background: "background_0",
        hooks: [{
            x: 1.3668733624454144,
            y: .13864628820960687
        }, {
            x: .4628820960698688,
            y: .13864628820960687
        }, {
            x: .9138165938864625,
            y: .13864628820960687
        }],
        bumpers: [{
            x: .09170305676855864,
            y: .5447598253275107,
            w: .15,
            h: .04,
            rotation: 0,
            bounce: {
                bounce: 1
            }
        }, {
            x: 1.5775196506550224,
            y: .9589650655021833,
            w: .15,
            h: .04,
            rotation: 0
        }, {
            x: 1.2885764192139737,
            y: .9589650655021833,
            w: .15,
            h: .04,
            rotation: 0
        }, {
            x: 1.144655021834061,
            y: .9589650655021833,
            w: .15,
            h: .04,
            rotation: 0
        }, {
            x: 1.0005502183406116,
            y: .9589650655021833,
            w: .15,
            h: .04,
            rotation: 0
        }, {
            x: .8557117903930128,
            y: .9589650655021833,
            w: .15,
            h: .04,
            rotation: 0
        }, {
            x: .711606986899563,
            y: .9589650655021833,
            w: .15,
            h: .04,
            rotation: 0
        }, {
            x: .5676855895196504,
            y: .9589650655021833,
            w: .15,
            h: .04,
            rotation: 0
        }, {
            x: .4235807860262007,
            y: .9589650655021833,
            w: .15,
            h: .04,
            rotation: 0
        }, {
            x: 1.4326812227074237,
            y: .9589650655021833,
            w: .15,
            h: .04,
            rotation: 0
        }],
        obstacles: [],
        finishLine: 1.7259825327510907
    }
}, function(t) {
    t.exports = {
        spawnPoint: {
            x: .13427947598253268,
            y: .26877729257641914
        },
        background: "background_0",
        hooks: [{
            x: .3449213973799123,
            y: .5366593886462878
        }, {
            x: 1.633668122270742,
            y: .30676855895196503
        }],
        bumpers: [{
            x: 1.981825327510916,
            y: .8635371179039298,
            w: .15,
            h: .04,
            rotation: 0
        }, {
            x: .13318777292576386,
            y: .8635371179039298,
            w: .15,
            h: .04,
            rotation: 0,
            bounce: {
                bounce: 1
            }
        }, {
            x: 1.8398209606986886,
            y: .8635371179039298,
            w: .15,
            h: .04,
            rotation: 0
        }, {
            x: .3282707423580783,
            y: .7827510917030565,
            w: .15,
            h: .04,
            rotation: -1.5707963267948966,
            bounce: {
                force: 1.5
            }
        }, {
            x: .3610218340611351,
            y: .7827510917030565,
            w: .15,
            h: .04,
            rotation: 1.5707963267948966
        }, {
            x: .3610218340611351,
            y: .6331877729257638,
            w: .15,
            h: .04,
            rotation: 1.5707963267948966
        }, {
            x: .3282707423580783,
            y: .6331877729257638,
            w: .15,
            h: .04,
            rotation: -1.5707963267948966,
            bounce: {
                force: 1.5
            }
        }, {
            x: 2.0268384279476113,
            y: .04558515283842797,
            w: .15,
            h: .04,
            rotation: 3.141592653589793
        }, {
            x: 1.6964410480349335,
            y: .8635371179039298,
            w: .15,
            h: .04,
            rotation: 0
        }, {
            x: 1.5544366812227073,
            y: .8635371179039298,
            w: .15,
            h: .04,
            rotation: 0
        }, {
            x: .8419039301310038,
            y: .8635371179039298,
            w: .15,
            h: .04,
            rotation: 0
        }, {
            x: .6998995633187769,
            y: .8635371179039298,
            w: .15,
            h: .04,
            rotation: 0
        }, {
            x: .5565196506550213,
            y: .8635371179039298,
            w: .15,
            h: .04,
            rotation: 0
        }, {
            x: .41451528384279435,
            y: .8635371179039298,
            w: .15,
            h: .04,
            rotation: 0
        }, {
            x: 1.4116812227074222,
            y: .8635371179039298,
            w: .15,
            h: .04,
            rotation: 0
        }, {
            x: 1.269676855895195,
            y: .8635371179039298,
            w: .15,
            h: .04,
            rotation: 0
        }, {
            x: 1.1262969432314398,
            y: .8635371179039298,
            w: .15,
            h: .04,
            rotation: 0
        }, {
            x: .9842925764192136,
            y: .8635371179039298,
            w: .15,
            h: .04,
            rotation: 0
        }, {
            x: 1.4512358078602745,
            y: .04558515283842797,
            w: .15,
            h: .04,
            rotation: 3.141592653589793
        }, {
            x: 1.5964323144104928,
            y: .04558515283842797,
            w: .15,
            h: .04,
            rotation: 3.141592653589793
        }, {
            x: 1.7394454148471734,
            y: .04558515283842797,
            w: .15,
            h: .04,
            rotation: 3.141592653589793
        }, {
            x: 1.8827336244541608,
            y: .04558515283842797,
            w: .15,
            h: .04,
            rotation: 3.141592653589793
        }, {
            x: .5877903930130999,
            y: .04558515283842797,
            w: .15,
            h: .04,
            rotation: 3.141592653589793
        }, {
            x: .012187772925763757,
            y: .04558515283842797,
            w: .15,
            h: .04,
            rotation: 3.141592653589793
        }, {
            x: .15738427947598205,
            y: .04558515283842797,
            w: .15,
            h: .04,
            rotation: 3.141592653589793
        }, {
            x: .30039737991266324,
            y: .04558515283842797,
            w: .15,
            h: .04,
            rotation: 3.141592653589793
        }, {
            x: .4436855895196501,
            y: .04558515283842797,
            w: .15,
            h: .04,
            rotation: 3.141592653589793
        }, {
            x: 1.3074061135371302,
            y: .04558515283842797,
            w: .15,
            h: .04,
            rotation: 3.141592653589793
        }, {
            x: .7318034934497811,
            y: .04558515283842797,
            w: .15,
            h: .04,
            rotation: 3.141592653589793
        }, {
            x: .8769999999999994,
            y: .04558515283842797,
            w: .15,
            h: .04,
            rotation: 3.141592653589793
        }, {
            x: 1.0200131004366932,
            y: .04558515283842797,
            w: .15,
            h: .04,
            rotation: 3.141592653589793
        }, {
            x: 1.1633013100436802,
            y: .04558515283842797,
            w: .15,
            h: .04,
            rotation: 3.141592653589793
        }],
        obstacles: [],
        finishLine: 2.042606986899554
    }
}, function(t) {
    t.exports = {
        spawnPoint: {
            x: .1801310043668122,
            y: .12685589519650647
        },
        background: "background_0",
        hooks: [{
            x: 1.073144104803493,
            y: .26091703056768556
        }],
        bumpers: [],
        obstacles: [{
            name: "A_Wall45",
            x: .5106419213973798,
            y: .4190439811293335,
            rotation: -.4363323129985824
        }, {
            name: "A_Wall45",
            x: .17139737991266363,
            y: .2946871988598884,
            rotation: -.4363323129985824
        }, {
            name: "A_Wall45",
            x: .23908296943231427,
            y: .3196199859696655,
            rotation: -.4363323129985824
        }, {
            name: "A_Wall45",
            x: .30786026200873357,
            y: .34458010856493,
            rotation: -.4363323129985824
        }, {
            name: "A_Wall45",
            x: .3750873362445413,
            y: .3691673103006023,
            rotation: -.4363323129985824
        }, {
            name: "A_Wall45",
            x: .4431397379912661,
            y: .3942600317505997,
            rotation: -.4363323129985824
        }, {
            name: "A_WallTransition",
            x: .10462008733624456,
            y: .24698597253249893,
            rotation: 3.5779249665883754
        }, {
            name: "A_Wall45",
            x: .013283842794759804,
            y: .04025838770233575,
            rotation: .4363323129985824
        }, {
            name: "A_Wall45",
            x: .06222707423580781,
            y: .17759593344759045,
            rotation: .4363323129985824
        }, {
            name: "A_Wall45",
            x: .03730131004366807,
            y: .10823780963126522,
            rotation: .4363323129985824
        }],
        finishLine: 1.4181222707423577
    }
}, function(t) {
    t.exports = {
        spawnPoint: {
            x: .25,
            y: .2
        },
        background: "background_0",
        hooks: [{
            x: 2.480349344978165,
            y: .22161572052401735
        }, {
            x: .5655021834061132,
            y: .22161572052401735
        }, {
            x: 1.1233624454148468,
            y: .22161572052401735
        }, {
            x: 1.69650655021834,
            y: .22161572052401735
        }],
        bumpers: [{
            x: 1.5046419213973796,
            y: .7674672489082969,
            w: .15,
            h: .04,
            rotation: 0
        }, {
            x: 1.964192139737991,
            y: .7674672489082969,
            w: .15,
            h: .04,
            rotation: 0
        }, {
            x: 1.3613537117903927,
            y: .7674672489082969,
            w: .15,
            h: .04,
            rotation: 0
        }, {
            x: 2.2504934497816587,
            y: .7674672489082969,
            w: .15,
            h: .04,
            rotation: 0
        }, {
            x: 2.1072052401746717,
            y: .7674672489082969,
            w: .15,
            h: .04,
            rotation: 0
        }, {
            x: .9707991266375544,
            y: .7674672489082969,
            w: .15,
            h: .04,
            rotation: 0
        }, {
            x: .8275109170305674,
            y: .7674672489082969,
            w: .15,
            h: .04,
            rotation: 0
        }, {
            x: .09716157205240157,
            y: .7674672489082969,
            w: .15,
            h: .04,
            rotation: 0,
            bounce: {
                bounce: 1
            }
        }, {
            x: .38346288209606966,
            y: .7674672489082969,
            w: .15,
            h: .04,
            rotation: 0,
            bounce: {
                bounce: 1
            }
        }, {
            x: .24017467248908278,
            y: .7674672489082969,
            w: .15,
            h: .04,
            rotation: 0,
            bounce: {
                bounce: 1
            }
        }],
        obstacles: [],
        finishLine: 2.3122270742358078
    }
}, function(t) {
    t.exports = {
        spawnPoint: {
            x: .24017467248908292,
            y: .23820960698689952
        },
        background: "background_0",
        hooks: [{
            x: .41593886462882074,
            y: .23580786026200873
        }, {
            x: 1.9513755458515278,
            y: .3504366812227071
        }],
        bumpers: [{
            x: .24615720524017437,
            y: .5393013100436681,
            w: .15,
            h: .04,
            rotation: 0,
            bounce: {
                bounce: 1
            }
        }],
        obstacles: [{
            name: "A_Wall45",
            x: .4389563318777288,
            y: 1.0159645144697023,
            rotation: .9599310885968813
        }, {
            name: "A_Wall45",
            x: 1.2111484716157197,
            y: .268408241232876,
            rotation: .9599310885968813
        }, {
            name: "A_Wall45",
            x: 1.247816593886462,
            y: .059864101703261785,
            rotation: .9599310885968813
        }, {
            name: "A_Wall45",
            x: 1.259458515283842,
            y: -.009861546423560574,
            rotation: .9599310885968813
        }, {
            name: "A_Wall45",
            x: 1.2237991266375534,
            y: .19878363756629164,
            rotation: .9599310885968813
        }, {
            name: "A_Wall45",
            x: 1.2354410480349336,
            y: .12905798943946917,
            rotation: .9599310885968813
        }, {
            name: "A_Wall45",
            x: .45205676855895144,
            y: .9462846302486653,
            rotation: .9599310885968813
        }, {
            name: "A_Wall45",
            x: 1.5538515283842769,
            y: .9921223399766588,
            rotation: -.4363323129985824
        }, {
            name: "A_Wall45",
            x: .5568602620087337,
            y: .560184381243246,
            rotation: -.7853981633974483
        }, {
            name: "A_Wall45",
            x: .6289126637554586,
            y: .560184381243246,
            rotation: -.7853981633974483
        }, {
            name: "A_Wall45",
            x: .31695196506550166,
            y: -.0010156219138579134,
            rotation: 0
        }, {
            name: "A_Wall45",
            x: .4207641921397375,
            y: .10221145232194992,
            rotation: 0
        }, {
            name: "A_Wall45",
            x: .47298253275109103,
            y: .1546131990468406,
            rotation: 0
        }, {
            name: "A_Wall45",
            x: 1.4159388646288198,
            y: .9411708858457554,
            rotation: -.4363323129985824
        }, {
            name: "A_Wall45",
            x: 1.2084235807860253,
            y: .8642173720312409,
            rotation: -.4363323129985824
        }, {
            name: "A_Wall45",
            x: 1.1397379912663748,
            y: .8385567460061981,
            rotation: -.4363323129985824
        }, {
            name: "A_Wall45",
            x: 1.1096200873362436,
            y: .6377080884810213,
            rotation: -.4363323129985824
        }, {
            name: "A_Wall45",
            x: 1.0409344978165933,
            y: .6120474624559785,
            rotation: -.4363323129985824
        }, {
            name: "A_Wall45",
            x: .9708820960698681,
            y: .5858618973395805,
            rotation: -.4363323129985824
        }, {
            name: "A_Wall45",
            x: .9021965065502175,
            y: .5602012713145377,
            rotation: -.4363323129985824
        }, {
            name: "A_Wall45",
            x: 1.27847598253275,
            y: .890402937147639,
            rotation: -.4363323129985824
        }, {
            name: "A_Wall45",
            x: 1.3471615720524004,
            y: .9160635631726818,
            rotation: -.4363323129985824
        }, {
            name: "A_Wall45",
            x: 1.48462445414847,
            y: .9668315118707982,
            rotation: -.4363323129985824
        }, {
            name: "A_Wall45",
            x: .7993100436681221,
            y: .6941896182608146,
            rotation: 0
        }, {
            name: "A_Wall45",
            x: .6945982532751092,
            y: .5891110156407274,
            rotation: 0
        }, {
            name: "A_Wall45",
            x: .7470917030567685,
            y: .6417878715359239,
            rotation: 0
        }, {
            name: "A_Wall45",
            x: .8397030567685585,
            y: .5217005352913823,
            rotation: 0
        }, {
            name: "A_Wall45",
            x: .5253842794759822,
            y: .2071066488285003,
            rotation: 0
        }, {
            name: "A_Wall45",
            x: .787484716157205,
            y: .46929878856649154,
            rotation: 0
        }, {
            name: "A_Wall45",
            x: .5778777292576415,
            y: .2590498802695483,
            rotation: 0
        }, {
            name: "A_Wall45",
            x: .6303711790393008,
            y: .3117267361647447,
            rotation: 0
        }, {
            name: "A_Wall45",
            x: .6825895196506544,
            y: .3641284828896354,
            rotation: 0
        }, {
            name: "A_Wall45",
            x: .7349912663755456,
            y: .4166219326712951,
            rotation: 0
        }, {
            name: "A_Wall45",
            x: .3682707423580781,
            y: .04953459642675348,
            rotation: 0
        }, {
            name: "A_Wall45",
            x: 1.0699606986899552,
            y: .812508623207131,
            rotation: -.4363323129985824
        }, {
            name: "A_Wall45",
            x: 1.001275109170305,
            y: .7868479971820882,
            rotation: -.4363323129985824
        }, {
            name: "A_Wall45",
            x: .9312227074235799,
            y: .7606624320656902,
            rotation: -.4363323129985824
        }, {
            name: "A_Wall45",
            x: .8625371179039295,
            y: .7350018060406474,
            rotation: -.4363323129985824
        }, {
            name: "A_Wall45",
            x: .4636986899563315,
            y: .8765589821218429,
            rotation: .9599310885968813
        }, {
            name: "A_Wall45",
            x: .5003668122270738,
            y: .6680148425922289,
            rotation: .9599310885968813
        }, {
            name: "A_Wall45",
            x: .5120087336244539,
            y: .5982891944654065,
            rotation: .9599310885968813
        }, {
            name: "A_Wall45",
            x: .4763493449781654,
            y: .8069343784552586,
            rotation: .9599310885968813
        }, {
            name: "A_Wall45",
            x: .48799126637554546,
            y: .7372087303284363,
            rotation: .9599310885968813
        }, {
            name: "A_Wall45",
            x: 1.1510131004366804,
            y: .6130487851400336,
            rotation: .9599310885968813
        }, {
            name: "A_Wall45",
            x: 1.1876812227074227,
            y: .4045046456104197,
            rotation: .9599310885968813
        }, {
            name: "A_Wall45",
            x: 1.1993231441048027,
            y: .33477899748359735,
            rotation: .9599310885968813
        }, {
            name: "A_Wall45",
            x: 1.163663755458514,
            y: .5434241814734496,
            rotation: .9599310885968813
        }, {
            name: "A_Wall45",
            x: 1.1753056768558943,
            y: .4736985333466271,
            rotation: .9599310885968813
        }],
        finishLine: 2.3784716157205232
    }
}, function(t) {
    t.exports = {
        spawnPoint: {
            x: .25,
            y: .2
        },
        background: "background_0",
        hooks: [{
            x: .637554585152838,
            y: .16593886462882088
        }, {
            x: 2.006266375545852,
            y: .3820960698689956
        }],
        bumpers: [{
            x: .2489082969432312,
            y: .5753275109170305,
            w: .15,
            h: .04,
            rotation: 0,
            bounce: {
                bounce: 1
            }
        }, {
            x: 2.2693668122270707,
            y: .9454148471615719,
            w: .15,
            h: .04,
            rotation: 0
        }, {
            x: 1.2183406113537114,
            y: .9454148471615719,
            w: .15,
            h: .04,
            rotation: 0
        }, {
            x: 1.3679039301310036,
            y: .9454148471615719,
            w: .15,
            h: .04,
            rotation: 0
        }, {
            x: 1.5183755458515273,
            y: .9454148471615719,
            w: .15,
            h: .04,
            rotation: 0
        }, {
            x: 1.668847161572051,
            y: .9454148471615719,
            w: .15,
            h: .04,
            rotation: 0
        }, {
            x: 1.8189519650655002,
            y: .9454148471615719,
            w: .15,
            h: .04,
            rotation: 0
        }, {
            x: 1.9694235807860236,
            y: .9454148471615719,
            w: .15,
            h: .04,
            rotation: 0
        }, {
            x: 2.119170305676853,
            y: .9454148471615719,
            w: .15,
            h: .04,
            rotation: 0
        }],
        obstacles: [],
        finishLine: 2.3392576419213973
    }
}, function(t) {
    t.exports = {
        spawnPoint: {
            x: .6441048034934498,
            y: .38886462882096057
        },
        background: "background_0",
        hooks: [{
            x: 2.448689956331877,
            y: .32423580786026185
        }, {
            x: 1.0032751091703056,
            y: .5272925764192139
        }, {
            x: 1.388646288209607,
            y: .21943231441048025
        }, {
            x: 1.7609170305676853,
            y: .5272925764192139
        }, {
            x: 2.1539301310043664,
            y: .32423580786026185
        }],
        bumpers: [{
            x: 2.518668122270729,
            y: .0381441048034932,
            w: .15,
            h: .04,
            rotation: 3.141592653589793
        }, {
            x: 2.224991266375532,
            y: .0381441048034932,
            w: .15,
            h: .04,
            rotation: 3.141592653589793
        }, {
            x: 2.3717379912663623,
            y: .0381441048034932,
            w: .15,
            h: .04,
            rotation: 3.141592653589793
        }, {
            x: .7553100436681216,
            y: .0381441048034932,
            w: .15,
            h: .04,
            rotation: 3.141592653589793
        }, {
            x: .46163318777292467,
            y: .0381441048034932,
            w: .15,
            h: .04,
            rotation: 3.141592653589793
        }, {
            x: .6083799126637549,
            y: .0381441048034932,
            w: .15,
            h: .04,
            rotation: 3.141592653589793
        }, {
            x: 1.1960829694323034,
            y: .0381441048034932,
            w: .15,
            h: .04,
            rotation: 3.141592653589793
        }, {
            x: .9024061135371187,
            y: .0381441048034932,
            w: .15,
            h: .04,
            rotation: 3.141592653589793
        }, {
            x: 1.0491528384279434,
            y: .0381441048034932,
            w: .15,
            h: .04,
            rotation: 3.141592653589793
        }, {
            x: 1.6367554585152724,
            y: .0381441048034932,
            w: .15,
            h: .04,
            rotation: 3.141592653589793
        }, {
            x: 1.3430786026200758,
            y: .0381441048034932,
            w: .15,
            h: .04,
            rotation: 3.141592653589793
        }, {
            x: 1.4898253275109052,
            y: .0381441048034932,
            w: .15,
            h: .04,
            rotation: 3.141592653589793
        }, {
            x: 2.077803493449767,
            y: .0381441048034932,
            w: .15,
            h: .04,
            rotation: 3.141592653589793
        }, {
            x: 1.7841266375545732,
            y: .0381441048034932,
            w: .15,
            h: .04,
            rotation: 3.141592653589793
        }, {
            x: 1.930873362445403,
            y: .0381441048034932,
            w: .15,
            h: .04,
            rotation: 3.141592653589793
        }, {
            x: .46163318777292467,
            y: .0381441048034932,
            w: .15,
            h: .04,
            rotation: 3.141592653589793
        }, {
            x: 2.518668122270729,
            y: .0381441048034932,
            w: .15,
            h: .04,
            rotation: 3.141592653589793
        }, {
            x: 2.526746724890816,
            y: .9694323144104802,
            w: .15,
            h: .04,
            rotation: 0
        }, {
            x: 2.233069868995619,
            y: .9694323144104802,
            w: .15,
            h: .04,
            rotation: 0
        }, {
            x: 2.3798165938864493,
            y: .9694323144104802,
            w: .15,
            h: .04,
            rotation: 0
        }, {
            x: .7633886462882096,
            y: .9694323144104802,
            w: .15,
            h: .04,
            rotation: 0
        }, {
            x: .4697117903930129,
            y: .9694323144104802,
            w: .15,
            h: .04,
            rotation: 0
        }, {
            x: .6164585152838427,
            y: .9694323144104802,
            w: .15,
            h: .04,
            rotation: 0
        }, {
            x: 1.2041615720523902,
            y: .9694323144104802,
            w: .15,
            h: .04,
            rotation: 0
        }, {
            x: .9104847161572067,
            y: .9694323144104802,
            w: .15,
            h: .04,
            rotation: 0
        }, {
            x: 1.05723144104803,
            y: .9694323144104802,
            w: .15,
            h: .04,
            rotation: 0
        }, {
            x: 1.6448340611353587,
            y: .9694323144104802,
            w: .15,
            h: .04,
            rotation: 0
        }, {
            x: 1.3511572052401626,
            y: .9694323144104802,
            w: .15,
            h: .04,
            rotation: 0
        }, {
            x: 1.497903930130992,
            y: .9694323144104802,
            w: .15,
            h: .04,
            rotation: 0
        }, {
            x: 2.0858820960698563,
            y: .9694323144104802,
            w: .15,
            h: .04,
            rotation: 0
        }, {
            x: 1.7922052401746595,
            y: .9694323144104802,
            w: .15,
            h: .04,
            rotation: 0
        }, {
            x: 1.9389519650654894,
            y: .9694323144104802,
            w: .15,
            h: .04,
            rotation: 0
        }, {
            x: .4697117903930129,
            y: .9694323144104802,
            w: .15,
            h: .04,
            rotation: 0
        }, {
            x: 2.526746724890816,
            y: .9694323144104802,
            w: .15,
            h: .04,
            rotation: 0
        }, {
            x: 2.846231441048023,
            y: .7079619703610497,
            w: .15,
            h: .04,
            rotation: -.7853981633974483
        }, {
            x: 2.6378995633187654,
            y: .915244498941789,
            w: .15,
            h: .04,
            rotation: -.7853981633974483
        }, {
            x: 2.7427030567685473,
            y: .8109613768585792,
            w: .15,
            h: .04,
            rotation: -.7853981633974483
        }, {
            x: 2.846436681222695,
            y: .290682078736433,
            w: .15,
            h: .04,
            rotation: 3.9269908169872414
        }, {
            x: 2.639930131004356,
            y: .08431133703038114,
            w: .15,
            h: .04,
            rotation: 3.9269908169872414
        }, {
            x: 2.743999999999988,
            y: .18745346068051033,
            w: .15,
            h: .04,
            rotation: 3.9269908169872414
        }, {
            x: .14228820960698674,
            y: .715574828297082,
            w: .15,
            h: .04,
            rotation: .7853981633974483
        }, {
            x: .3495283842794759,
            y: .9222222411301897,
            w: .15,
            h: .04,
            rotation: .7853981633974483
        }, {
            x: .24563318777292562,
            y: .8185945200620808,
            w: .15,
            h: .04,
            rotation: .7853981633974483
        }, {
            x: .09606986899563298,
            y: .42537991266375524,
            w: .15,
            h: .04,
            rotation: 1.5707963267948966
        }, {
            x: .0958864628820959,
            y: .5763362445414845,
            w: .15,
            h: .04,
            rotation: 1.5707963267948966
        }, {
            x: .13546288209606977,
            y: .29046089992945645,
            w: .15,
            h: .04,
            rotation: 2.356194490192345
        }, {
            x: .3427947598253275,
            y: .08274333320831158,
            w: .15,
            h: .04,
            rotation: 2.356194490192345
        }, {
            x: .23908296943231433,
            y: .18673941141801198,
            w: .15,
            h: .04,
            rotation: 2.356194490192345
        }],
        finishLine: 2.8889519650655022
    }
}, function(t, e, n) {
    var r = {
        "./START000.json": 176,
        "./START001.json": 177,
        "./START002.json": 178,
        "./START003.json": 179,
        "./START004.json": 180,
        "./START005.json": 181,
        "./START006.json": 182,
        "./START007.json": 183,
        "./START008.json": 184,
        "./START009.json": 185,
        "./START010.json": 186,
        "./START011.json": 187,
        "./START012.json": 188,
        "./START013.json": 189,
        "./START014.json": 190,
        "./START015.json": 191,
        "./START016.json": 192,
        "./START017.json": 193,
        "./START018.json": 194,
        "./START019.json": 195,
        "./START020.json": 196,
        "./START021.json": 197,
        "./START022.json": 198,
        "./START023.json": 199,
        "./START024.json": 200,
        "./START025.json": 201,
        "./START026.json": 202,
        "./START027.json": 203,
        "./START028.json": 204,
        "./START029.json": 205,
        "./START030.json": 206
    };

    function i(t) {
        var e = o(t);
        return n(e)
    }

    function o(t) {
        if (!n.o(r, t)) {
            var e = new Error("Cannot find module '" + t + "'");
            throw e.code = "MODULE_NOT_FOUND", e
        }
        return r[t]
    }
    i.keys = function() {
        return Object.keys(r)
    }, i.resolve = o, t.exports = i, i.id = 175
}, function(t) {
    t.exports = {
        spawnPoint: {
            x: .25,
            y: .2
        },
        background: "background_1",
        hooks: [{
            x: 1.4918033620698856,
            y: .1765027072260288
        }, {
            x: .5868852542397753,
            y: .1765027072260288
        }],
        bumpers: [{
            x: .2641066416522581,
            y: .5238373603729081,
            w: .15,
            h: .04,
            rotation: 0
        }],
        obstacles: [],
        finishLine: 1.9843710355913189
    }
}, function(t) {
    t.exports = {
        spawnPoint: {
            x: .25,
            y: .2
        },
        background: "background_1",
        hooks: [{
            x: .9245901472581535,
            y: .2508196700466135
        }, {
            x: 1.6437159470521683,
            y: .23661204895686577
        }],
        bumpers: [{
            x: 2.1164017778173556,
            y: .859356494394104,
            w: .15,
            h: .04,
            rotation: 0
        }, {
            x: .4329655536566567,
            y: .7124838948808015,
            w: .15,
            h: .04,
            rotation: .7853981633974483
        }, {
            x: .22640818077654434,
            y: .508222811131203,
            w: .15,
            h: .04,
            rotation: .7853981633974483
        }, {
            x: .3291404170446348,
            y: .6097054652910173,
            w: .15,
            h: .04,
            rotation: .7853981633974483
        }, {
            x: .5579865022853162,
            y: .7697390414078508,
            w: .15,
            h: .04,
            rotation: 0
        }, {
            x: .6989701255189654,
            y: .7697390414078508,
            w: .15,
            h: .04,
            rotation: 0
        }, {
            x: .8410465865605252,
            y: .7697390414078508,
            w: .15,
            h: .04,
            rotation: 0
        }, {
            x: .9831230892927656,
            y: .7697390414078508,
            w: .15,
            h: .04,
            rotation: 0
        }, {
            x: 1.9754182379650678,
            y: .8582636148955128,
            w: .15,
            h: .04,
            rotation: 0
        }],
        finishLine: 2.583716013757258
    }
}, function(t) {
    t.exports = {
        spawnPoint: {
            x: .25,
            y: .2
        },
        background: "background_1",
        hooks: [{
            x: 1.7899179994343404,
            y: .2081966504373184
        }, {
            x: .5704917699261437,
            y: .2081966504373184
        }, {
            x: 1.198907070472592,
            y: .2081966504373184
        }],
        bumpers: [{
            x: .2488061410639193,
            y: .7719248004050332,
            w: .15,
            h: .04,
            rotation: 0
        }],
        finishLine: 2.103715846994535
    }
}, function(t) {
    t.exports = {
        spawnPoint: {
            x: .25,
            y: .2
        },
        background: "background_1",
        hooks: [{
            x: 1.7975682393058392,
            y: .08251359032802874
        }, {
            x: .5781420097976425,
            y: .08251359032802874
        }, {
            x: 1.2065573103440907,
            y: .08251359032802874
        }],
        bumpers: [{
            x: .23350559878489988,
            y: .9566242706332181,
            w: .15,
            h: .04,
            rotation: 0
        }],
        finishLine: 2.103715846994535
    }
}, function(t) {
    t.exports = {
        spawnPoint: {
            x: .25,
            y: .2
        },
        background: "background_1",
        hooks: [{
            x: 1.5746174029574356,
            y: .5163933383962493
        }, {
            x: .49945351856002296,
            y: .10437147213461595
        }, {
            x: 1.0874316939890698,
            y: .2584698682274321
        }],
        bumpers: [{
            x: 2.0768389529635733,
            y: .9347663471359502,
            w: .15,
            h: .04,
            rotation: 0
        }, {
            x: .22148382007369538,
            y: .9347663471359502,
            w: .15,
            h: .04,
            rotation: 0
        }, {
            x: 1.7863470829797963,
            y: .9347663471359502,
            w: .15,
            h: .04,
            rotation: 0
        }, {
            x: 1.9325765244714288,
            y: .9347663471359502,
            w: .15,
            h: .04,
            rotation: 0
        }],
        finishLine: 2.2119125016009216
    }
}, function(t) {
    t.exports = {
        spawnPoint: {
            x: .25,
            y: .2
        },
        background: "background_1",
        hooks: [{
            x: 1.3571310474833482,
            y: .5284151796434743
        }],
        bumpers: [{
            x: .32438631451491023,
            y: .7116449252868131,
            w: .15,
            h: .04,
            rotation: .7853981633974483
        }, {
            x: .9939972728224787,
            y: .8923757081644387,
            w: .15,
            h: .04,
            rotation: 0
        }, {
            x: .2358314962044159,
            y: .5992611524195086,
            w: .15,
            h: .04,
            rotation: 1.0471975511965976
        }, {
            x: .4359734801706425,
            y: .7980225487498659,
            w: .15,
            h: .04,
            rotation: .5235987755982988
        }, {
            x: .5677542027868118,
            y: .854912937147257,
            w: .15,
            h: .04,
            rotation: .2617993877991494
        }, {
            x: .7083479576962035,
            y: .8821146428791935,
            w: .15,
            h: .04,
            rotation: .08726646259971647
        }, {
            x: .8513192662700502,
            y: .8911630874765134,
            w: .15,
            h: .04,
            rotation: .03490658503988659
        }, {
            x: .1793676198230326,
            y: .46811981654889806,
            w: .15,
            h: .04,
            rotation: 1.3089969389957472
        }],
        finishLine: 2.2119125016009216
    }
}, function(t) {
    t.exports = {
        spawnPoint: {
            x: .25,
            y: .2
        },
        background: "background_1",
        hooks: [{
            x: 1.783196921426741,
            y: .047540956507615
        }, {
            x: .530054686499423,
            y: .047540956507615
        }, {
            x: 1.161748667232325,
            y: .047540956507615
        }],
        bumpers: [{
            x: .9650992924718618,
            y: 1.159288644254342,
            w: .15,
            h: .04,
            rotation: .5235987755982988
        }, {
            x: .20990803147219259,
            y: .7233523253696674,
            w: .15,
            h: .04,
            rotation: .5235987755982988
        }, {
            x: .33559111242682255,
            y: .7952147874036217,
            w: .15,
            h: .04,
            rotation: .5235987755982988
        }, {
            x: .46018125134684046,
            y: .8679641388052293,
            w: .15,
            h: .04,
            rotation: .5235987755982988
        }, {
            x: .5869572326454018,
            y: .939739233757989,
            w: .15,
            h: .04,
            rotation: .5235987755982988
        }, {
            x: .7137331722532827,
            y: 1.0107496995844418,
            w: .15,
            h: .04,
            rotation: .5235987755982988
        }, {
            x: .8383233528639811,
            y: 1.0858654724515486,
            w: .15,
            h: .04,
            rotation: .5235987755982988
        }],
        finishLine: 1.99065575438119
    }
}, function(t) {
    t.exports = {
        spawnPoint: {
            x: .25,
            y: .2
        },
        background: "background_0",
        hooks: [{
            x: 1.55847001206028,
            y: .45191255162973853
        }, {
            x: .7180328786047429,
            y: .45191255162973853
        }],
        bumpers: [{
            x: 1.9537240696241032,
            y: .842790259562045,
            w: .15,
            h: .04,
            rotation: 0
        }, {
            x: .3586762799839374,
            y: -.30146714968488547,
            w: .15,
            h: .04,
            rotation: 1.5707963267948966
        }, {
            x: 1.8094618078946805,
            y: .842790259562045,
            w: .15,
            h: .04,
            rotation: 0
        }, {
            x: 1.317658529206156,
            y: .842790259562045,
            w: .15,
            h: .04,
            rotation: 0
        }, {
            x: 1.1733962674767333,
            y: .842790259562045,
            w: .15,
            h: .04,
            rotation: 0
        }, {
            x: .23296554114945256,
            y: .6780583677089722,
            w: .15,
            h: .04,
            rotation: .7853981633974483
        }, {
            x: .3586762799839374,
            y: -.15611191465284016,
            w: .15,
            h: .04,
            rotation: 1.5707963267948966
        }],
        obstacles: [{
            name: "A_Wall45",
            x: .4596986899563314,
            y: -.04731602051639594,
            rotation: .7853981633974483
        }, {
            name: "A_Wall45",
            x: .37563755458515236,
            y: .11472022640281188,
            rotation: .7853981633974483
        }, {
            name: "A_Wall45",
            x: .37563755458515236,
            y: .040371368989500445,
            rotation: .7853981633974483
        }, {
            name: "A_Wall45",
            x: .37563755458515236,
            y: .18772075651059317,
            rotation: .7853981633974483
        }, {
            name: "A_Wall45",
            x: .37563755458515236,
            y: .4808439385682698,
            rotation: .7853981633974483
        }, {
            name: "A_Wall45",
            x: .37563755458515236,
            y: .40649508115495847,
            rotation: .7853981633974483
        }, {
            name: "A_Wall45",
            x: .37563755458515236,
            y: .3343027189060036,
            rotation: .7853981633974483
        }, {
            name: "A_Wall45",
            x: .37563755458515236,
            y: .2609538614926923,
            rotation: .7853981633974483
        }],
        finishLine: 2.3311476577175116
    }
}, function(t) {
    t.exports = {
        spawnPoint: {
            x: .25,
            y: .2
        },
        background: "background_1",
        hooks: [{
            x: 1.7822677595628411,
            y: .3590163142303298
        }, {
            x: .5628415300546444,
            y: .3590163142303298
        }, {
            x: 1.1912568306010927,
            y: .3590163142303298
        }],
        bumpers: [{
            x: .2488061410639193,
            y: .607990374175525,
            w: .15,
            h: .04,
            rotation: 0
        }],
        finishLine: 2.103715846994535
    }
}, function(t) {
    t.exports = {
        spawnPoint: {
            x: .25,
            y: .2
        },
        background: "background_0",
        hooks: [{
            x: 1.3886462882096064,
            y: .2106986899563318
        }, {
            x: .43122270742358054,
            y: .2106986899563318
        }, {
            x: .7543668122270739,
            y: .2106986899563318
        }, {
            x: 1.0611353711790388,
            y: .2106986899563318
        }],
        bumpers: [{
            x: 1.5906113537117903,
            y: .9104803493449781,
            w: .15,
            h: .04,
            rotation: 0
        }, {
            x: .2751091703056767,
            y: .9104803493449781,
            w: .15,
            h: .04,
            rotation: 0
        }, {
            x: .6113537117903928,
            y: .9104803493449781,
            w: .15,
            h: .04,
            rotation: 0
        }, {
            x: .9388646288209603,
            y: .9104803493449781,
            w: .15,
            h: .04,
            rotation: 0
        }, {
            x: 1.2707423580786024,
            y: .9104803493449781,
            w: .15,
            h: .04,
            rotation: 0
        }],
        obstacles: [{
            name: "A_WallCircleChelou",
            x: 1.4223973799126628,
            y: .8766375545851527,
            rotation: 0
        }, {
            name: "A_WallCircleChelou",
            x: 1.095978165938864,
            y: .8766375545851527,
            rotation: 0
        }, {
            name: "A_WallCircleChelou",
            x: .44432314410480317,
            y: .8766375545851527,
            rotation: 0
        }, {
            name: "A_WallCircleChelou",
            x: .7696506550218332,
            y: .8766375545851527,
            rotation: 0
        }, {
            name: "A_WallCircleChelou",
            x: 1.2313493449781652,
            y: .06768558951965062,
            rotation: 0
        }, {
            name: "A_WallCircleChelou",
            x: .9049301310043663,
            y: .06768558951965062,
            rotation: 0
        }, {
            name: "A_WallCircleChelou",
            x: .2532751091703054,
            y: .06768558951965062,
            rotation: 0
        }, {
            name: "A_WallCircleChelou",
            x: .5786026200873359,
            y: .06768558951965062,
            rotation: 0
        }],
        finishLine: 1.7085152838427946
    }
}, function(t) {
    t.exports = {
        spawnPoint: {
            x: .23579235806491203,
            y: .08743169190453702
        },
        background: "background_1",
        hooks: [{
            x: 1.6828141409451836,
            y: .453995514554149
        }, {
            x: 1.066666733371755,
            y: .453995514554149
        }],
        bumpers: [{
            x: .6804866412547027,
            y: .9998125080851676,
            w: .15,
            h: .04,
            rotation: .2617993877991494
        }, {
            x: .627687315106686,
            y: .9040718468743079,
            w: .15,
            h: .04,
            rotation: 1.8325957145940461
        }, {
            x: .23567782721114697,
            y: .2348351274325184,
            w: .15,
            h: .04,
            rotation: .2617993877991494
        }, {
            x: .2954468404266035,
            y: .32888363110443014,
            w: .15,
            h: .04,
            rotation: 1.8325957145940461
        }, {
            x: .35589642729145987,
            y: .42350962228821304,
            w: .15,
            h: .04,
            rotation: .2617993877991494
        }, {
            x: .41566544050691645,
            y: .5175581259601248,
            w: .15,
            h: .04,
            rotation: 1.8325957145940461
        }, {
            x: .46627896596707036,
            y: .6189186811943879,
            w: .15,
            h: .04,
            rotation: .2617993877991494
        }, {
            x: .526047979182527,
            y: .7129671848662996,
            w: .15,
            h: .04,
            rotation: 1.8325957145940461
        }, {
            x: .8181915009205368,
            y: 1.0362113535344575,
            w: .15,
            h: .04,
            rotation: .2617993877991494
        }, {
            x: .5679183018912294,
            y: .810023343202396,
            w: .15,
            h: .04,
            rotation: .2617993877991494
        }],
        obstacles: [],
        finishLine: 1.9454189037630942
    }
}, function(t) {
    t.exports = {
        spawnPoint: {
            x: .25,
            y: .2
        },
        background: "background_0",
        hooks: [{
            x: 1.5868852959304554,
            y: .09672131564447782
        }, {
            x: 2.1825137946123627,
            y: .09672131564447782
        }],
        bumpers: [{
            x: .4606818442009179,
            y: .6170269367094467,
            w: .15,
            h: .04,
            rotation: -.7853981633974483
        }, {
            x: .6755884294331038,
            y: .7448154847646485,
            w: .15,
            h: .04,
            rotation: .7853981633974483
        }, {
            x: .4606818442009179,
            y: .2832186477011458,
            w: .15,
            h: .04,
            rotation: -.7853981633974483
        }, {
            x: .6755884294331038,
            y: .11407536208468781,
            w: .15,
            h: .04,
            rotation: .7853981633974483
        }, {
            x: .244987340705997,
            y: .46296138185887514,
            w: .15,
            h: .04,
            rotation: .7853981633974483
        }, {
            x: .244987340705997,
            y: .7846351050958817,
            w: .15,
            h: .04,
            rotation: .7853981633974483
        }, {
            x: .6755884294331038,
            y: .4357490853216945,
            w: .15,
            h: .04,
            rotation: .7853981633974483
        }],
        finishLine: 2.49844270633218
    }
}, function(t) {
    t.exports = {
        spawnPoint: {
            x: .24125682851655883,
            y: .35628412382198804
        },
        background: "background_0",
        hooks: [{
            x: 2.1706559211439105,
            y: .30109292952740757
        }, {
            x: 1.2721312475986166,
            y: .30109292952740757
        }],
        bumpers: [{
            x: .22630147409514306,
            y: .8320289842261154,
            w: .15,
            h: .04,
            rotation: .5235987755982988
        }],
        finishLine: 2.779071255042904
    }
}, function(t) {
    t.exports = {
        spawnPoint: {
            x: .264207652357758,
            y: .3322404621728781
        },
        background: "background_0",
        hooks: [{
            x: 2.180655804410007,
            y: .09672130522180754
        }, {
            x: 1.2721312475986166,
            y: .30109292952740757
        }],
        bumpers: [{
            x: .23846446937977211,
            y: .8991260508466576,
            w: .15,
            h: .04,
            rotation: .4363323129985824
        }, {
            x: .37465709920914403,
            y: .45447255162973993,
            w: .15,
            h: .04,
            rotation: -1.5707963267948966,
            bounce: {
                force: 1,
                angle: 3.9269908169872414
            }
        }, {
            x: .37465709920914403,
            y: .777969886094391,
            w: .15,
            h: .04,
            rotation: -1.5707963267948966,
            bounce: {
                force: 1,
                angle: 3.9269908169872414
            }
        }, {
            x: .37465709920914403,
            y: .6140354598648826,
            w: .15,
            h: .04,
            rotation: -1.5707963267948966,
            bounce: {
                force: 1,
                angle: 3.9269908169872414
            }
        }, {
            x: .639718503297899,
            y: .05960684160662395,
            w: .15,
            h: .04,
            rotation: 3.141592653589793
        }, {
            x: .16195499977653766,
            y: .7149264597007877,
            w: .15,
            h: .04,
            rotation: 1.5707963267948966,
            bounce: {
                force: 1,
                angle: -.7853981633974483
            }
        }, {
            x: .16195499977653766,
            y: .5509920334712795,
            w: .15,
            h: .04,
            rotation: 1.5707963267948966,
            bounce: {
                force: 1,
                angle: -.7853981633974483
            }
        }, {
            x: .16195499977653766,
            y: .3968936582238035,
            w: .15,
            h: .04,
            rotation: 1.5707963267948966,
            bounce: {
                force: 1,
                angle: -.7853981633974483
            }
        }, {
            x: .21691380505972252,
            y: .2388895096410333,
            w: .15,
            h: .04,
            rotation: 2.356194490192345
        }, {
            x: .33276080376430967,
            y: .12189935147668328,
            w: .15,
            h: .04,
            rotation: 2.356194490192345
        }, {
            x: 1.2673854469107533,
            y: .7641121676144044,
            w: .15,
            h: .04,
            rotation: 0
        }, {
            x: .4801556784441166,
            y: .06069972110521514,
            w: .15,
            h: .04,
            rotation: 3.141592653589793
        }, {
            x: .4095327510917026,
            y: .777969886094391,
            w: .15,
            h: .04,
            rotation: 1.5707963267948966
        }, {
            x: .4095327510917026,
            y: .45447255162973993,
            w: .15,
            h: .04,
            rotation: 1.5707963267948966
        }, {
            x: .4095327510917026,
            y: .6140354598648826,
            w: .15,
            h: .04,
            rotation: 1.5707963267948966
        }],
        finishLine: 2.779071255042904
    }
}, function(t) {
    t.exports = {
        spawnPoint: {
            x: .264207652357758,
            y: .3322404621728781
        },
        background: "background_0",
        hooks: [{
            x: 2.299781420765026,
            y: .510081903634827
        }, {
            x: 1.6134426729796365,
            y: .510081903634827
        }],
        bumpers: [{
            x: 1.6134548467117054,
            y: .10827038147139513,
            w: .15,
            h: .04,
            rotation: -1.5707963267948966
        }, {
            x: .23846446937977211,
            y: .8991260508466576,
            w: .15,
            h: .04,
            rotation: .4363323129985824
        }, {
            x: 1.6134548467117054,
            y: .3989807160407736,
            w: .15,
            h: .04,
            rotation: -1.5707963267948966
        }, {
            x: 1.6134548467117054,
            y: .2536255539674193,
            w: .15,
            h: .04,
            rotation: -1.5707963267948966
        }],
        finishLine: 2.779071255042904
    }
}, function(t) {
    t.exports = {
        spawnPoint: {
            x: .264207652357758,
            y: .3322404621728781
        },
        background: "background_0",
        hooks: [{
            x: .65606555709422,
            y: .10024583806105605
        }, {
            x: .65606555709422,
            y: .8281146738438007
        }, {
            x: .65606555709422,
            y: .7013387342359196
        }, {
            x: .65606555709422,
            y: .5865846358752638
        }, {
            x: .65606555709422,
            y: .46308737645383696
        }, {
            x: .65606555709422,
            y: .3428687972188644
        }, {
            x: .65606555709422,
            y: .22155735933064072
        }],
        bumpers: [{
            x: .24552746087746521,
            y: .9018269550367205,
            w: .15,
            h: .04,
            rotation: 0
        }],
        finishLine: 1.4085794142426031
    }
}, function(t) {
    t.exports = {
        spawnPoint: {
            x: .264207652357758,
            y: .3322404621728781
        },
        background: "background_0",
        hooks: [{
            x: 1.6309289534104994,
            y: .291502679084819
        }, {
            x: .5128961748633882,
            y: .09150265615494477
        }, {
            x: .7085245651495264,
            y: .291502679084819
        }, {
            x: 1.1893988820894181,
            y: .291502679084819
        }],
        bumpers: [{
            x: .24552746087746521,
            y: .9018269550367205,
            w: .15,
            h: .04,
            rotation: 0
        }],
        finishLine: 1.9230057104558884
    }
}, function(t) {
    t.exports = {
        spawnPoint: {
            x: .25,
            y: .2
        },
        background: "background_0",
        hooks: [{
            x: 2.7901639677787733,
            y: .3240437325232667
        }, {
            x: 1.5781420931790042,
            y: .3240437325232667
        }, {
            x: 2.2393442789713536,
            y: .3240437325232667
        }],
        bumpers: [{
            x: 1.3165657330889255,
            y: .9131527710978581,
            w: .15,
            h: .04,
            rotation: 0
        }, {
            x: .8384300178547014,
            y: .6586401528520804,
            w: .15,
            h: .04,
            rotation: .7853981633974483
        }, {
            x: .9433480339653145,
            y: .761391835738583,
            w: .15,
            h: .04,
            rotation: .7853981633974483
        }, {
            x: 1.0471731705773362,
            y: .8619479842053466,
            w: .15,
            h: .04,
            rotation: .7853981633974483
        }, {
            x: 1.173396267476733,
            y: .9131527710978581,
            w: .15,
            h: .04,
            rotation: 0
        }, {
            x: .23952292236770087,
            y: .3508845968207471,
            w: .15,
            h: .04,
            rotation: .7853981633974483
        }, {
            x: .3444409384783139,
            y: .45363627970724973,
            w: .15,
            h: .04,
            rotation: .7853981633974483
        }, {
            x: .4482660750903357,
            y: .5541924281740132,
            w: .15,
            h: .04,
            rotation: .7853981633974483
        }, {
            x: .5723033713018697,
            y: .6071418004454291,
            w: .15,
            h: .04,
            rotation: 0
        }, {
            x: .7154728369140622,
            y: .6071418004454291,
            w: .15,
            h: .04,
            rotation: 0
        }],
        finishLine: 3.1156010762199013
    }
}, function(t) {
    t.exports = {
        spawnPoint: {
            x: .25,
            y: .2
        },
        background: "background_0",
        hooks: [{
            x: 1.4404371501318087,
            y: .30546453611446844
        }, {
            x: .5366120051816506,
            y: .30546453611446844
        }],
        bumpers: [{
            x: 1.1823073891094595,
            y: .8031065158347882,
            w: .15,
            h: .04,
            rotation: -1.5707963267948966
        }, {
            x: .6773892646030774,
            y: .09163105492763887,
            w: .15,
            h: .04,
            rotation: -1.5707963267948966
        }, {
            x: .2214836741563138,
            y: .8617865174691013,
            w: .15,
            h: .04,
            rotation: 0
        }, {
            x: .6773892646030774,
            y: .8031065158347882,
            w: .15,
            h: .04,
            rotation: -1.5707963267948966
        }, {
            x: .6773892646030774,
            y: .3867130481974288,
            w: .15,
            h: .04,
            rotation: -1.5707963267948966
        }, {
            x: .6773892646030774,
            y: .24135784443339403,
            w: .15,
            h: .04,
            rotation: -1.5707963267948966
        }],
        obstacles: [],
        finishLine: 1.6172403537771076
    }
}, function(t) {
    t.exports = {
        spawnPoint: {
            x: .25,
            y: .2
        },
        background: "background_0",
        hooks: [{
            x: 3.059016285046853,
            y: .6081966129157059
        }, {
            x: 1.4950820005656584,
            y: .4551912735068731
        }, {
            x: 2.4928961164964347,
            y: .5021857589971823
        }],
        bumpers: [{
            x: .8294509042234234,
            y: .7297835959182594,
            w: .15,
            h: .04,
            rotation: .17453292519943295
        }, {
            x: .2165720568358208,
            y: .4099559505824018,
            w: .15,
            h: .04,
            rotation: .7853981633974483
        }, {
            x: .321490093791774,
            y: .5110635507833469,
            w: .15,
            h: .04,
            rotation: .7853981633974483
        }, {
            x: .42750103109165877,
            y: .6129834585951947,
            w: .15,
            h: .04,
            rotation: .7853981633974483
        }, {
            x: .5507623796332597,
            y: .6781754784699264,
            w: .15,
            h: .04,
            rotation: .17453292519943295
        }, {
            x: .6895601604883655,
            y: .7035941812796099,
            w: .15,
            h: .04,
            rotation: .17453292519943295
        }, {
            x: 2.1065384356989627,
            y: .9675531906911714,
            w: .15,
            h: .04,
            rotation: 0
        }, {
            x: 1.819106708357347,
            y: .9675531906911714,
            w: .15,
            h: .04,
            rotation: 0
        }, {
            x: 1.9622760905881786,
            y: .9675531906911714,
            w: .15,
            h: .04,
            rotation: 0
        }],
        finishLine: 3.4701640845126764
    }
}, function(t) {
    t.exports = {
        spawnPoint: {
            x: .25,
            y: .2
        },
        background: "background_0",
        hooks: [{
            x: 1.1071037334171139,
            y: .44863374637124287
        }, {
            x: .3759562174479159,
            y: .3655738205206197
        }, {
            x: 1.9169398656959733,
            y: .35245897470276205
        }],
        bumpers: [{
            x: 2.0574674078702655,
            y: .8221979660817963,
            w: .15,
            h: .04,
            rotation: 0
        }, {
            x: 1.7700356805286506,
            y: .8221979660817963,
            w: .15,
            h: .04,
            rotation: 0
        }, {
            x: 1.9144658194486686,
            y: .4753195190663161,
            w: .15,
            h: .04,
            rotation: -1.5707963267948966,
            bounce: {
                bounce: 1.5
            }
        }, {
            x: 1.9132050627594823,
            y: .8221979660817963,
            w: .15,
            h: .04,
            rotation: 0
        }, {
            x: 1.9144658194486686,
            y: .7354288420363467,
            w: .15,
            h: .04,
            rotation: -1.5707963267948966,
            bounce: {
                bounce: 1.5
            }
        }, {
            x: 1.9144658194486686,
            y: .6053741805513314,
            w: .15,
            h: .04,
            rotation: -1.5707963267948966,
            bounce: {
                bounce: 1.5
            }
        }, {
            x: .5197624814993439,
            y: .8462417319576072,
            w: .15,
            h: .04,
            rotation: 0
        }, {
            x: .2323307541577277,
            y: .8462417319576072,
            w: .15,
            h: .04,
            rotation: 0,
            bounce: {
                bounce: 1
            }
        }, {
            x: .37676089307774585,
            y: .49936328494212695,
            w: .15,
            h: .04,
            rotation: -1.5707963267948966,
            bounce: {
                bounce: 1.5
            }
        }, {
            x: .3755001363885595,
            y: .8462417319576072,
            w: .15,
            h: .04,
            rotation: 0
        }, {
            x: .37676089307774585,
            y: .7594726079121576,
            w: .15,
            h: .04,
            rotation: -1.5707963267948966,
            bounce: {
                bounce: 1.5
            }
        }, {
            x: .37676089307774585,
            y: .6294179464271423,
            w: .15,
            h: .04,
            rotation: -1.5707963267948966,
            bounce: {
                bounce: 1.5
            }
        }, {
            x: 1.2530958398470853,
            y: .38285369544857817,
            w: .15,
            h: .04,
            rotation: 0,
            bounce: {
                bounce: 1.3
            }
        }, {
            x: .9656641125054691,
            y: .38285369544857817,
            w: .15,
            h: .04,
            rotation: 0,
            bounce: {
                bounce: 1.3
            }
        }, {
            x: 1.1100942514254872,
            y: .0359752484330979,
            w: .15,
            h: .04,
            rotation: -1.5707963267948966,
            bounce: {
                bounce: 1.5
            }
        }, {
            x: 1.108833494736301,
            y: .38285369544857817,
            w: .15,
            h: .04,
            rotation: 0,
            bounce: {
                bounce: 1.3
            }
        }, {
            x: 1.1100942514254872,
            y: .29608457140312855,
            w: .15,
            h: .04,
            rotation: -1.5707963267948966,
            bounce: {
                bounce: 1.5
            }
        }, {
            x: 1.1100942514254872,
            y: .16602990991811323,
            w: .15,
            h: .04,
            rotation: -1.5707963267948966,
            bounce: {
                bounce: 1.5
            }
        }],
        obstacles: [],
        finishLine: 2.2177051264861865
    }
}, function(t) {
    t.exports = {
        spawnPoint: {
            x: .25,
            y: .2
        },
        background: "background_0",
        hooks: [{
            x: 3.4229506195568637,
            y: .6551911400966957
        }, {
            x: 3.099453368473573,
            y: .6551911400966957
        }, {
            x: 2.7672129980201925,
            y: .3830600175701204
        }, {
            x: 2.4437157469369017,
            y: .3830600175701204
        }],
        bumpers: [{
            x: 1.2920162110162874,
            y: .856190822713968,
            w: .15,
            h: .04,
            rotation: .4363323129985824
        }, {
            x: .23518570581195705,
            y: .3561091504547458,
            w: .15,
            h: .04,
            rotation: .4363323129985824
        }, {
            x: .3575900648894523,
            y: .41268021160496327,
            w: .15,
            h: .04,
            rotation: .4363323129985824
        }, {
            x: .4789015236230162,
            y: .4702190812143976,
            w: .15,
            h: .04,
            rotation: .4363323129985824
        }, {
            x: .596934302170126,
            y: .5257593431009675,
            w: .15,
            h: .04,
            rotation: .4363323129985824
        }, {
            x: .7127813217200534,
            y: .5800285665113516,
            w: .15,
            h: .04,
            rotation: .4363323129985824
        }, {
            x: .827535420080709,
            y: .6356503409559483,
            w: .15,
            h: .04,
            rotation: .4363323129985824
        }, {
            x: .9422895184413645,
            y: .6896144981012875,
            w: .15,
            h: .04,
            rotation: .4363323129985824
        }, {
            x: 1.0581364963006115,
            y: .7453445498887772,
            w: .15,
            h: .04,
            rotation: .4363323129985824
        }, {
            x: 1.173983474159858,
            y: .8001798097459317,
            w: .15,
            h: .04,
            rotation: .4363323129985824
        }, {
            x: 3.32599183752508,
            y: .6560778225457861,
            w: .15,
            h: .04,
            rotation: 0
        }, {
            x: 3.195937176040065,
            y: .6560778225457862,
            w: .15,
            h: .04,
            rotation: 0
        }, {
            x: 1.5664291210670676,
            y: .8866789404563694,
            w: .15,
            h: .04,
            rotation: 0
        }, {
            x: 1.4243526183348272,
            y: .8866789404563694,
            w: .15,
            h: .04,
            rotation: 0
        }, {
            x: 2.670254215988409,
            y: .3839467000192109,
            w: .15,
            h: .04,
            rotation: 0
        }, {
            x: 2.5401995545033937,
            y: .38394670001921094,
            w: .15,
            h: .04,
            rotation: 0
        }],
        finishLine: 3.66918041125021
    }
}, function(t) {
    t.exports = {
        spawnPoint: {
            x: .25,
            y: .2
        },
        background: "background_0",
        hooks: [{
            x: 1.3455196506550218,
            y: .6573886462882096
        }, {
            x: .5365676855895195,
            y: .6595720524017468
        }, {
            x: .9219388646288208,
            y: .23599126637554585
        }, {
            x: 1.9255021834061135,
            y: .48362445414847155
        }],
        bumpers: [{
            x: .2532751091703054,
            y: .7849344978165939,
            w: .15,
            h: .04,
            rotation: 0,
            bounce: {
                force: 1
            }
        }, {
            x: 1.9255021834061135,
            y: .872270742358079,
            w: .15,
            h: .04,
            rotation: -1.5707963267948966,
            bounce: {
                bounce: 1.5
            }
        }, {
            x: 1.9255021834061135,
            y: .5829694323144109,
            w: .15,
            h: .04,
            rotation: -1.5707963267948966,
            bounce: {
                bounce: 1.5
            }
        }, {
            x: 1.9255021834061135,
            y: .725982532751092,
            w: .15,
            h: .04,
            rotation: -1.5707963267948966,
            bounce: {
                bounce: 1.5
            }
        }],
        obstacles: [{
            name: "A_WallCurve",
            x: 1.2707423580786021,
            y: .7315938864628824,
            rotation: -1.5707963267948966
        }, {
            name: "A_WallCurve",
            x: 1.2707423580786021,
            y: .588655021834061,
            rotation: 0
        }, {
            name: "A_WallCurve",
            x: 1.4161834061135363,
            y: .7315938864628824,
            rotation: 3.141592653589793
        }, {
            name: "A_WallCurve",
            x: 1.4161834061135363,
            y: .588655021834061,
            rotation: 1.5707963267948966
        }, {
            name: "A_WallCurve",
            x: .46179039301310004,
            y: .7337772925764195,
            rotation: -1.5707963267948966
        }, {
            name: "A_WallCurve",
            x: .46179039301310004,
            y: .5908384279475982,
            rotation: 0
        }, {
            name: "A_WallCurve",
            x: .6072314410480342,
            y: .7337772925764195,
            rotation: 3.141592653589793
        }, {
            name: "A_WallCurve",
            x: .6072314410480342,
            y: .5908384279475982,
            rotation: 1.5707963267948966
        }, {
            name: "A_WallCurve",
            x: .8471615720524014,
            y: .31019650655021863,
            rotation: -1.5707963267948966
        }, {
            name: "A_WallCurve",
            x: .8471615720524014,
            y: .1672576419213973,
            rotation: 0
        }, {
            name: "A_WallCurve",
            x: .9926026200873355,
            y: .31019650655021863,
            rotation: 3.141592653589793
        }, {
            name: "A_WallCurve",
            x: .9926026200873355,
            y: .1672576419213973,
            rotation: 1.5707963267948966
        }],
        finishLine: 2.1484716157205237
    }
}, function(t) {
    t.exports = {
        spawnPoint: {
            x: .25,
            y: .2
        },
        background: "background_0",
        hooks: [{
            x: 1.7836064823338234,
            y: .4683060411547049
        }, {
            x: .6819671881003451,
            y: .25737706689886686
        }, {
            x: .6775955450339387,
            y: .6759563560694292
        }, {
            x: 1.297267601138255,
            y: .4661202404668421
        }],
        bumpers: [{
            x: 1.6867129054068462,
            y: .46632666681508605,
            w: .15,
            h: .04,
            rotation: 3.141592653589793,
            bounce: {
                bounce: 1.5
            }
        }, {
            x: .6817608659788031,
            y: .0194999240629276,
            w: .15,
            h: .04,
            rotation: -1.5707963267948966,
            bounce: {
                bounce: 1.5
            }
        }, {
            x: .2171120727805879,
            y: .969983255456849,
            w: .15,
            h: .04,
            rotation: 0,
            bounce: {
                bounce: 1
            }
        }, {
            x: .6773892646030774,
            y: .911303253822536,
            w: .15,
            h: .04,
            rotation: -1.5707963267948966,
            bounce: {
                bounce: 1.5
            }
        }, {
            x: .6773892646030774,
            y: .7703196045322115,
            w: .15,
            h: .04,
            rotation: -1.5707963267948966,
            bounce: {
                bounce: 1.5
            }
        }, {
            x: .6817608659788031,
            y: .16157649975385924,
            w: .15,
            h: .04,
            rotation: -1.5707963267948966,
            bounce: {
                bounce: 1.5
            }
        }, {
            x: 1.3938167805722752,
            y: .46632666681508605,
            w: .15,
            h: .04,
            rotation: 3.141592653589793,
            bounce: {
                bounce: 1.5
            }
        }, {
            x: 1.5402648846802411,
            y: .46632666681508605,
            w: .15,
            h: .04,
            rotation: 3.141592653589793,
            bounce: {
                bounce: 1.5
            }
        }],
        obstacles: [],
        finishLine: 1.9013933592415884
    }
}, function(t) {
    t.exports = {
        spawnPoint: {
            x: .26637554585152834,
            y: .06244541484716157
        },
        background: "background_0",
        hooks: [{
            x: 1.8689956331877724,
            y: .2991266375545851
        }, {
            x: .5906113537117901,
            y: .14410480349344967
        }, {
            x: 1.3744541484716153,
            y: .3013100436681222
        }],
        bumpers: [{
            x: .2685589519650653,
            y: .4061135371179037,
            w: .15,
            h: .04,
            rotation: 0
        }],
        obstacles: [{
            name: "A_Wall45",
            x: 1.2279737991266346,
            y: .7176546976375175,
            rotation: -.6108652381980153
        }, {
            name: "A_Wall45",
            x: .8666288209606979,
            y: .6525782852262147,
            rotation: -.6108652381980153
        }, {
            name: "A_Wall45",
            x: 1.0023231441048033,
            y: .1402580502518178,
            rotation: -.6108652381980153
        }, {
            name: "A_Wall45",
            x: .9293624454148471,
            y: .1274223473444968,
            rotation: -.6108652381980153
        }, {
            name: "A_Wall45",
            x: .9395895196506542,
            y: .6654139881335357,
            rotation: -.6108652381980153
        }, {
            name: "A_Wall45",
            x: 1.061008733624453,
            y: .28088937736607433,
            rotation: -.6108652381980153
        }, {
            name: "A_Wall45",
            x: .9153624454148469,
            y: .2548728373892443,
            rotation: -.6108652381980153
        }, {
            name: "A_Wall45",
            x: .9883231441048032,
            y: .2677085402965653,
            rotation: -.6108652381980153
        }, {
            name: "A_Wall45",
            x: 1.0122751091703046,
            y: .6785948252030447,
            rotation: -.6108652381980153
        }, {
            name: "A_Wall45",
            x: 1.1189694323144086,
            y: .42027359972168654,
            rotation: -.6108652381980153
        }, {
            name: "A_Wall45",
            x: .9012707423580782,
            y: .38101894467797737,
            rotation: -.6108652381980153
        }, {
            name: "A_Wall45",
            x: .9742314410480345,
            y: .3938546475852983,
            rotation: -.6108652381980153
        }, {
            name: "A_Wall45",
            x: 1.0469170305676845,
            y: .4070354846548073,
            rotation: -.6108652381980153
        }, {
            name: "A_Wall45",
            x: 1.0843275109170287,
            y: .6918329402699239,
            rotation: -.6108652381980153
        }, {
            name: "A_Wall45",
            x: 1.17447161572052,
            y: .5659405976677667,
            rotation: -.6108652381980153
        }, {
            name: "A_Wall45",
            x: .8850873362445408,
            y: .5138828872369468,
            rotation: -.6108652381980153
        }, {
            name: "A_Wall45",
            x: .9580480349344971,
            y: .5267185901442679,
            rotation: -.6108652381980153
        }, {
            name: "A_Wall45",
            x: 1.0307336244541472,
            y: .5398994272137769,
            rotation: -.6108652381980153
        }, {
            name: "A_Wall45",
            x: 1.1027860262008713,
            y: .5531375422806559,
            rotation: -.6108652381980153
        }, {
            name: "A_Wall45",
            x: 1.1560131004366783,
            y: .7046359956570347,
            rotation: -.6108652381980153
        }],
        finishLine: 2.1083842794759824
    }
}, function(t) {
    t.exports = {
        spawnPoint: {
            x: .26637554585152834,
            y: .06244541484716157
        },
        background: "background_0",
        hooks: [{
            x: 2.5491266375545845,
            y: .2554585152838427
        }, {
            x: .5906113537117901,
            y: .14410480349344967
        }, {
            x: 2.0545851528384276,
            y: .25764192139737985
        }],
        bumpers: [{
            x: .2685589519650653,
            y: .4061135371179037,
            w: .15,
            h: .04,
            rotation: 0
        }],
        obstacles: [{
            name: "A_Wall45",
            x: 1.6271703056768525,
            y: .5127029726986173,
            rotation: -.6108652381980153
        }, {
            name: "A_Wall45",
            x: .8666288209606979,
            y: .6525782852262147,
            rotation: -.6108652381980153
        }, {
            name: "A_Wall45",
            x: 1.0023231441048033,
            y: .1402580502518178,
            rotation: -.6108652381980153
        }, {
            name: "A_Wall45",
            x: .9293624454148471,
            y: .1274223473444968,
            rotation: -.6108652381980153
        }, {
            name: "A_Wall45",
            x: .9395895196506542,
            y: .6654139881335357,
            rotation: -.6108652381980153
        }, {
            name: "A_Wall45",
            x: 1.061008733624453,
            y: .28088937736607433,
            rotation: -.6108652381980153
        }, {
            name: "A_Wall45",
            x: .9153624454148469,
            y: .2548728373892443,
            rotation: -.6108652381980153
        }, {
            name: "A_Wall45",
            x: .9883231441048032,
            y: .2677085402965653,
            rotation: -.6108652381980153
        }, {
            name: "A_Wall45",
            x: 1.0747772925764183,
            y: .15299802217218894,
            rotation: -.6108652381980153
        }, {
            name: "A_Wall45",
            x: 1.1189694323144086,
            y: .42027359972168654,
            rotation: -.6108652381980153
        }, {
            name: "A_Wall45",
            x: .9012707423580782,
            y: .38101894467797737,
            rotation: -.6108652381980153
        }, {
            name: "A_Wall45",
            x: .9742314410480345,
            y: .3938546475852983,
            rotation: -.6108652381980153
        }, {
            name: "A_Wall45",
            x: 1.0469170305676845,
            y: .4070354846548073,
            rotation: -.6108652381980153
        }, {
            name: "A_Wall45",
            x: 1.4091048034934472,
            y: .4731874720264972,
            rotation: -.6108652381980153
        }, {
            name: "A_Wall45",
            x: 1.1896637554585108,
            y: .4329738445660136,
            rotation: -.6108652381980153
        }, {
            name: "A_Wall45",
            x: .8850873362445408,
            y: .5138828872369468,
            rotation: -.6108652381980153
        }, {
            name: "A_Wall45",
            x: .9580480349344971,
            y: .5267185901442679,
            rotation: -.6108652381980153
        }, {
            name: "A_Wall45",
            x: 1.0307336244541472,
            y: .5398994272137769,
            rotation: -.6108652381980153
        }, {
            name: "A_Wall45",
            x: 1.1027860262008713,
            y: .5531375422806559,
            rotation: -.6108652381980153
        }, {
            name: "A_Wall45",
            x: 1.4807903930130968,
            y: .485990527413608,
            rotation: -.6108652381980153
        }, {
            name: "A_Wall45",
            x: 1.5527510917030531,
            y: .499009229394091,
            rotation: -.6108652381980153
        }, {
            name: "A_Wall45",
            x: 1.3361441048034903,
            y: .45962190056703855,
            rotation: -.6108652381980153
        }, {
            name: "A_Wall45",
            x: 1.1345458515283822,
            y: .29436974068420846,
            rotation: -.6108652381980153
        }, {
            name: "A_Wall45",
            x: 1.261724890829691,
            y: .44592815726251245,
            rotation: -.6108652381980153
        }, {
            name: "A_Wall45",
            x: 1.6119781659388617,
            y: .6456697258003703,
            rotation: -.6108652381980153
        }, {
            name: "A_Wall45",
            x: 1.3939126637554564,
            y: .6061542251282505,
            rotation: -.6108652381980153
        }, {
            name: "A_Wall45",
            x: 1.17447161572052,
            y: .5659405976677667,
            rotation: -.6108652381980153
        }, {
            name: "A_Wall45",
            x: 1.465598253275106,
            y: .6189572805153613,
            rotation: -.6108652381980153
        }, {
            name: "A_Wall45",
            x: 1.5375589519650623,
            y: .6319759824958441,
            rotation: -.6108652381980153
        }, {
            name: "A_Wall45",
            x: 1.3209519650654995,
            y: .5925886536687918,
            rotation: -.6108652381980153
        }, {
            name: "A_Wall45",
            x: 1.2465327510917001,
            y: .5788949103642655,
            rotation: -.6108652381980153
        }, {
            name: "A_Wall45",
            x: 1.2062314410480317,
            y: .30717279607131925,
            rotation: -.6108652381980153
        }, {
            name: "A_Wall45",
            x: 1.6436375545851496,
            y: .38696631348790683,
            rotation: -.6108652381980153
        }, {
            name: "A_Wall45",
            x: 1.4255720524017443,
            y: .34745081281578694,
            rotation: -.6108652381980153
        }, {
            name: "A_Wall45",
            x: 1.4972576419213939,
            y: .36025386820289773,
            rotation: -.6108652381980153
        }, {
            name: "A_Wall45",
            x: 1.5692183406113502,
            y: .3732725701833805,
            rotation: -.6108652381980153
        }, {
            name: "A_Wall45",
            x: 1.3526113537117874,
            y: .33388524135632824,
            rotation: -.6108652381980153
        }, {
            name: "A_Wall45",
            x: 1.278192139737988,
            y: .32019149805180214,
            rotation: -.6108652381980153
        }, {
            name: "A_Wall45",
            x: 1.1468296943231424,
            y: .16623613723906816,
            rotation: -.6108652381980153
        }, {
            name: "A_Wall45",
            x: 1.218515283842792,
            y: .17903919262617896,
            rotation: -.6108652381980153
        }, {
            name: "A_Wall45",
            x: 1.6559213973799098,
            y: .2588327100427664,
            rotation: -.6108652381980153
        }, {
            name: "A_Wall45",
            x: 1.4378558951965046,
            y: .2193172093706468,
            rotation: -.6108652381980153
        }, {
            name: "A_Wall45",
            x: 1.5095414847161541,
            y: .23212026475775757,
            rotation: -.6108652381980153
        }, {
            name: "A_Wall45",
            x: 1.5815021834061105,
            y: .2451389667382404,
            rotation: -.6108652381980153
        }, {
            name: "A_Wall45",
            x: 1.3648951965065477,
            y: .20575163791118806,
            rotation: -.6108652381980153
        }, {
            name: "A_Wall45",
            x: 1.2904759825327483,
            y: .19205789460666178,
            rotation: -.6108652381980153
        }, {
            name: "A_Wall45",
            x: 1.0122751091703046,
            y: .6785948252030447,
            rotation: -.6108652381980153
        }, {
            name: "A_Wall45",
            x: 1.0843275109170287,
            y: .6918329402699239,
            rotation: -.6108652381980153
        }, {
            name: "A_Wall45",
            x: 1.1560131004366783,
            y: .7046359956570347,
            rotation: -.6108652381980153
        }, {
            name: "A_Wall45",
            x: 1.5934192139737962,
            y: .7844295130736223,
            rotation: -.6108652381980153
        }, {
            name: "A_Wall45",
            x: 1.375353711790391,
            y: .7449140124015025,
            rotation: -.6108652381980153
        }, {
            name: "A_Wall45",
            x: 1.4470393013100404,
            y: .7577170677886133,
            rotation: -.6108652381980153
        }, {
            name: "A_Wall45",
            x: 1.5189999999999968,
            y: .7707357697690961,
            rotation: -.6108652381980153
        }, {
            name: "A_Wall45",
            x: 1.302393013100434,
            y: .7313484409420438,
            rotation: -.6108652381980153
        }, {
            name: "A_Wall45",
            x: 1.2279737991266346,
            y: .7176546976375175,
            rotation: -.6108652381980153
        }],
        finishLine: 2.9148034934497815
    }
}, function(t) {
    t.exports = {
        spawnPoint: {
            x: .25,
            y: .2
        },
        background: "background_0",
        hooks: [{
            x: .6294866382704326,
            y: .03980154321272183
        }, {
            x: 1.594911301443456,
            y: .03980154321272183
        }],
        bumpers: [{
            x: .24005795927603094,
            y: .5230056890600311,
            w: .15,
            h: .04,
            rotation: 0
        }, {
            x: 1.4937751138695503,
            y: .40376555608586506,
            w: .15,
            h: .04,
            rotation: .9948376736367679
        }, {
            x: 1.3991587333189033,
            y: .40517329191617363,
            w: .15,
            h: .04,
            rotation: -.9948376736367679
        }, {
            x: 1.4455038513717966,
            y: .47662669258919965,
            w: .15,
            h: .04,
            rotation: 3.141592653589793
        }, {
            x: .859635380748586,
            y: .8736483647785245,
            w: .15,
            h: .04,
            rotation: .9948376736367679
        }, {
            x: .7650190001979389,
            y: .8750561006088331,
            w: .15,
            h: .04,
            rotation: -.9948376736367679
        }, {
            x: .8113641182508325,
            y: .9465095012818594,
            w: .15,
            h: .04,
            rotation: 3.141592653589793
        }, {
            x: 1.4795616550845716,
            y: .8679560466665595,
            w: .15,
            h: .04,
            rotation: .9948376736367679
        }, {
            x: 1.3849452745339246,
            y: .8693637824968681,
            w: .15,
            h: .04,
            rotation: -.9948376736367679
        }, {
            x: 1.431290392586818,
            y: .9408171831698943,
            w: .15,
            h: .04,
            rotation: 3.141592653589793
        }],
        finishLine: 1.9013933592415884
    }
}, function(t) {
    t.exports = {
        spawnPoint: {
            x: .25,
            y: .2
        },
        background: "background_0",
        hooks: [{
            x: 1.615074467395065,
            y: -.10571284370375421
        }, {
            x: 1.6117944095700727,
            y: .43439926579136423
        }],
        bumpers: [{
            x: .4543738931980575,
            y: .6515486925473084,
            w: .15,
            h: .04,
            rotation: .3490658503988659
        }, {
            x: .19612713407134108,
            y: .03450943241009647,
            w: .15,
            h: .04,
            rotation: 1.5707963267948966
        }, {
            x: .19612713407134108,
            y: .17992421884861026,
            w: .15,
            h: .04,
            rotation: 1.5707963267948966
        }, {
            x: .21015859431793954,
            y: .32346839147730083,
            w: .15,
            h: .04,
            rotation: 1.3962634015954636
        }, {
            x: .25242478411070157,
            y: .46159703223151255,
            w: .15,
            h: .04,
            rotation: 1.1344640137963142
        }, {
            x: .3349527954173825,
            y: .5759874733346747,
            w: .15,
            h: .04,
            rotation: .7853981633974483
        }, {
            x: 1.5042733474472454,
            y: .9972098557751765,
            w: .15,
            h: .04,
            rotation: 0
        }, {
            x: .5916491858149251,
            y: .6880716568864463,
            w: .15,
            h: .04,
            rotation: .17453292519943295
        }, {
            x: .7277100433076056,
            y: .7256570143716721,
            w: .15,
            h: .04,
            rotation: .3490658503988659
        }, {
            x: .8530318411377604,
            y: .7898616803012329,
            w: .15,
            h: .04,
            rotation: .6108652381980153
        }, {
            x: .9667729505083346,
            y: .8771312990448188,
            w: .15,
            h: .04,
            rotation: .6981317007977318
        }, {
            x: 1.0850194505932327,
            y: .9543058137663359,
            w: .15,
            h: .04,
            rotation: .4363323129985824
        }, {
            x: 1.2196007142009255,
            y: .9925051964816447,
            w: .15,
            h: .04,
            rotation: .08726646259971647
        }, {
            x: 1.3610452318164796,
            y: .9983032334081714,
            w: .15,
            h: .04,
            rotation: 0
        }, {
            x: 1.6126400368523226,
            y: .04554218824473371,
            w: .15,
            h: .04,
            rotation: -1.5707963267948966
        }, {
            x: 1.6126400368523226,
            y: .3352783834887662,
            w: .15,
            h: .04,
            rotation: -1.5707963267948966
        }, {
            x: 1.6126400368523226,
            y: .18877032264399757,
            w: .15,
            h: .04,
            rotation: -1.5707963267948966
        }],
        finishLine: 2.5036989286640923
    }
}, function(t) {
    t.exports = {
  